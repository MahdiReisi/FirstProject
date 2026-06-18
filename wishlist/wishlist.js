import { getWishlist, removeFromWishlist, updateWishlistBadge } from './wishlistmanager.js';
import { addToCart, updateCartBadge } from '../../shopping-cart/cartmanager.js';

document.addEventListener('DOMContentLoaded', () => {
    const user = JSON.parse(localStorage.getItem('currentUser'));

    if (!user) {
        window.location.href = '../login/login.html';
        return;
    }

    const wishlist = getWishlist();
    const whishlistItemsContainer = document.getElementById('wishlist-items');
    const emptyWishlistDiv = document.getElementById('empty-wishlist');

    function renderWishlist() {
        if (wishlist.length === 0) {
            whishlistItemsContainer.style.display = 'none';
            emptyWishlistDiv.style.display = 'block';
            return;
        }

        whishlistItemsContainer.style.display = 'grid';
        emptyWishlistDiv.style.display = 'none';

        whishlistItemsContainer.innerHTML = '';

        wishlist.forEach(item => {
            const whishlistItemDiv = document.createElement('div');
            whishlistItemDiv.className = 'wishlist-item';
            whishlistItemDiv.innerHTML = `
             <img src="${item.image}" alt="${item.name}">
                <div class="item-info">
                    <div class="item-name">${item.name}</div>
                    <div class="item-price">${item.price.toLocaleString()} تومان</div>
                    <div class="item-actions">
                        <button class="add-to-cart-btn" data-id="${item.id}">
                            🛒 افزودن به سبد
                        </button>
                        <button class="remove-btn" data-id="${item.id}">
                            🗑️
                        </button>
                    </div>
                </div>
            `;
            whishlistItemsContainer.appendChild(whishlistItemDiv);

        });
        attachEventListener();
    }

    function attachEventListener() {
        document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const productId = parseInt(btn.dataset.id);
                addToCart(productId);
                updateCartBadge();
            });

        });

        document.querySelectorAll('.remove-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const productId = parseInt(btn.dataset.id);
                if (confirm('آیا میخواهید این محصول را از علاقه مندی ها حذف کنید')) {
                    removeFromWishlist(productId);
                    location.reload();
                }
            });

        });
    }
    renderWishlist();
    updateWishlistBadge();
})