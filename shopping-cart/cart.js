import { getCart, updateCartBadge } from './cartmanager.js';

document.addEventListener('DOMContentLoaded', () => {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    
    if (!user) {
        window.location.href = '../login/login.html';
        return;
    }

    const cart = getCart();
    const cartItemsContainer = document.getElementById('cart-items');
    const emptyCartDiv = document.getElementById('empty-cart');
    const totalPriceElement = document.getElementById('total-price');
    const subtotalElement = document.getElementById('subtotal');
    const itemsCountElement = document.getElementById('items-count');

    function renderCart() {
        if (cart.length === 0) {
            cartItemsContainer.style.display = 'none';
            emptyCartDiv.style.display = 'block';
            document.querySelector('.cart-summary').style.display = 'none';
            return;
        }

        cartItemsContainer.style.display = 'flex';
        emptyCartDiv.style.display = 'none';
        document.querySelector('.cart-summary').style.display = 'block';

        cartItemsContainer.innerHTML = '';
        let total = 0;
        let itemsCount = 0;

        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;
            itemsCount += item.quantity;

            const cartItemDiv = document.createElement('div');
            cartItemDiv.className = 'cart-item';
            cartItemDiv.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="item-details">
                    <div class="item-name">${item.name}</div>
                    <div class="item-price">${item.price.toLocaleString()} تومان</div>
                    <div class="item-actions">
                        <div class="qty">
                            <button onclick="changeQuantity(${item.id}, -1)">-</button>
                            <span>${item.quantity}</span>
                            <button onclick="changeQuantity(${item.id}, 1)">+</button>
                        </div>
                        <button class="remove-btn" onclick="removeItem(${item.id})">حذف</button>
                    </div>
                </div>
            `;
            cartItemsContainer.appendChild(cartItemDiv);
        });

        totalPriceElement.textContent = `${total.toLocaleString()} تومان`;
        subtotalElement.textContent = `${total.toLocaleString()} تومان`;
        itemsCountElement.textContent = `${itemsCount} عدد`;
    }

    window.changeQuantity = (productId, change) => {
        const item = cart.find(i => i.id === productId);
        if (item) {
            item.quantity += change;
            if (item.quantity <= 0) {
                removeItem(productId);
                return;
            }
            const cartKey = `cart_${user.username}`;
            localStorage.setItem(cartKey, JSON.stringify(cart));
            renderCart();
            updateCartBadge();
        }
    };

    window.removeItem = (productId) => {
        const index = cart.findIndex(i => i.id === productId);
        if (index > -1) {
            cart.splice(index, 1);
            const cartKey = `cart_${user.username}`;
            localStorage.setItem(cartKey, JSON.stringify(cart));
            renderCart();
            updateCartBadge();
        }
    };

    document.querySelector('.clear-cart-btn')?.addEventListener('click', () => {
        if (confirm('آیا مطمئن هستید که می‌خواهید سبد خرید را خالی کنید؟')) {
            const cartKey = `cart_${user.username}`;
            localStorage.setItem(cartKey, JSON.stringify([]));
            location.reload();
        }
    });

    document.querySelector('.checkout-btn')?.addEventListener('click', () => {
        alert('در حال انتقال به صفحه پرداخت...');
    });

    renderCart();
    updateCartBadge();
});
