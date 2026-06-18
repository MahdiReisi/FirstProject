// wishlistmanager.js
import { products } from '../Firs-Page/js/products.js';

export function getCurrentUser() {
    return JSON.parse(localStorage.getItem('currentUser'));
}

function getWishlistKey() {
    const user = getCurrentUser();
    return user ? `wishlist_${user.username}` : null;
}

export function getWishlist() {
    const key = getWishlistKey();
    if (!key) return [];
    const wishlist = localStorage.getItem(key);
    return wishlist ? JSON.parse(wishlist) : [];
}

function saveWishlist(wishlist) {
    const key = getWishlistKey();
    if (key) {
        localStorage.setItem(key, JSON.stringify(wishlist));
    }
}

export function addToWishlist(productId) {
    const user = getCurrentUser();
    if (!user) {
        alert('ابتدا وارد حساب کاربری خود شوید');
        window.location.href = '../login/login.html';
        return false;
    }

    const wishlist = getWishlist();
    const product = products.find(p => p.id === productId);

    if (!product) {
        alert('محصولی یافت نشد');
        return false;
    }

    const existingItem = wishlist.find(item => item.id === productId);

    if (existingItem) {
        alert('این محصول قبلاً به علاقه‌مندی‌ها اضافه شده است');
        return false;
    }

    wishlist.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.img
    });

    saveWishlist(wishlist);
    updateWishlistBadge();
    alert('محصول به علاقه‌مندی‌ها اضافه شد ❤️');
    return true;
}

export function removeFromWishlist(productId) {
    const wishlist = getWishlist();
    const index = wishlist.findIndex(item => item.id === productId);
    if (index > -1) {
        wishlist.splice(index, 1);
        saveWishlist(wishlist);
        updateWishlistBadge();
        return true;
    }
    return false;
}

export function isInWishlist(productId) {
    const wishlist = getWishlist();
    return wishlist.some(item => item.id === productId);
}

export function updateWishlistBadge() {
    const wishlist = getWishlist();
    const badge = document.querySelector('.wishlist-badge');
    if (badge) {
        const count = wishlist.length;
        badge.textContent = count;
        badge.style.display = count > 0 ? 'flex' : 'none';
    }
}
