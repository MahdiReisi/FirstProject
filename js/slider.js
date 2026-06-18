import { products } from './products.js';
import { addToCart, updateCartBadge } from '../../shopping-cart/cartmanager.js';
import { addToWishlist, removeFromWishlist, isInWishlist, updateWishlistBadge } from '../../wishlist/wishlistmanager.js';

function displayProducts() {
    const container = document.querySelector('.product-grid');
    if (!container) return;

    container.innerHTML = products.map(product => `
        <div class="product-card">
            <img src="../../image/images/${product.img}" alt="${product.name}">
            <div class="product-info">
                <div class="product-name">${product.name}</div>
                <div class="price-row">
                    ${product.discount ? `<span class="discount">${product.discount}%</span>` : ''}
                    <span class="final-price">${(product.price || 0).toLocaleString('fa-IR')} تومان</span>
                </div>
                ${product.oldPrice ? `<span class="old-price">${product.oldPrice.toLocaleString('fa-IR')} تومان</span>` : ''}
                <div class="add-btn">
                    <button class="add-to-cart-btn" data-id="${product.id}">افزودن به سبد</button>
                    <button class="wishlist-btn ${isInWishlist(product.id) ? 'active' : ''}" data-id="${product.id}">
                        ${isInWishlist(product.id) ? '❤️' : '🤍'}
                    </button>
                </div>
            </div>
        </div>
    `).join('');

    // یک event listener روی container (event delegation)
    container.addEventListener('click', (e) => {
        const cartBtn = e.target.closest('.add-to-cart-btn');
        const wishBtn = e.target.closest('.wishlist-btn');

        if (cartBtn) {
            const productId = parseInt(cartBtn.dataset.id);
            const product = products.find(p => p.id === productId);
            if (!product) return;

            const success = addToCart(productId);
            if (success) {
                alert(`${product.name} به سبد خرید اضافه شد`);
                updateCartBadge();
            }
        }

        if (wishBtn) {
            const productId = parseInt(wishBtn.dataset.id);
            const product = products.find(p => p.id === productId);
            if (!product) return;

            if (isInWishlist(productId)) {
                removeFromWishlist(productId);
                wishBtn.textContent = '🤍';
                wishBtn.classList.remove('active');
            } else {
                const success = addToWishlist(productId);
                if (success) {
                    wishBtn.textContent = '❤️';
                    wishBtn.classList.add('active');
                    updateWishlistBadge();
                }
            }
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    displayProducts();
    updateCartBadge();
    updateWishlistBadge();
});
