import { products } from '../Firs-Page/js/products.js';

function getCurrentUser() {
    const userStr = localStorage.getItem('currentUser');
    return userStr ? JSON.parse(userStr) : null;
}

function getCartKey() {
    const user = getCurrentUser();
    if (!user) return null;
    return `cart_${user.username}`;
}

export function getCart() {
    const key = getCartKey();
    return key ? JSON.parse(localStorage.getItem(key)) || [] : [];
}

export function saveCart(cart) {
    const key = getCartKey();
    if (!key) return;
    localStorage.setItem(key, JSON.stringify(cart));
}

// productId می‌گیره (عدد)
export function addToCart(productId) {
    const user = getCurrentUser();
    if (!user) {
        alert('ابتدا وارد حساب کاربری خود شوید');
        window.location.href = '../login/login.html';
        return false;
    }

    const product = products.find(p => p.id === productId);
    if (!product) {
        console.error('محصول پیدا نشد:', productId);
        return false;
    }

    const cart = getCart();
    const item = cart.find(i => i.id === productId);

    if (item) {
        item.quantity++;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.img,
            quantity: 1
        });
    }

    saveCart(cart);
    updateCartBadge();
    return true;
}

export function updateCartBadge() {
    const badge = document.querySelector('.cart-badge');
    if (!badge) return;

    const cart = getCart();
    const totalQty = cart.reduce((sum, item) => sum + (item.quantity || 0), 0);
    badge.textContent = totalQty;
    badge.style.display = totalQty > 0 ? 'flex' : 'none';
}
