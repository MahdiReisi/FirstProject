import { products } from './products.js';

const categories = [
    {
        id: 'loptop',
        name: 'لپتاپ'
    },
    {
        id: 'accessories',
        name: 'لوازم جانبی'
    },
    {
        id: 'computer',
        name: 'کامپیوتر'
    }
];

function showCategoriesAndProduct() {
    const container = document.getElementById('categories-container');

    categories.forEach(category => {
        const section = document.createElement('div');
        section.className = 'category-section';


        const title = document.createElement('div');
        title.className = 'category-title';
        section.innerText = category.name;
        section.appendChild(title);

        const categoryProducts = products.filter(p => p.category === category.id);

        const productsGrid = document.createElement('div');
        productsGrid.className = 'product-grid';

        categoryProducts.forEach(p => {
            const card = document.createElement('div');
            card.className = 'product-card';


            card.innerHTML = `
                <img src="../../image/images/${p.img}" alt="${p.name}" />
                <div class="product-info">
                <div class= "product-name">${p.name}</div>
                <div class= "price-row">
                <span class= "discount">${p.discount}%</span>
                <span class="final-price">${p.price.toLocaleString()} تومان</span>
                </div>
                <span class= "old-price">${p.oldPrice.toLocaleString()}تومان </span>
                </div>
`;
            productsGrid.appendChild(card);
        });
        section.appendChild(productsGrid);
        container.appendChild(section);
    });
}
showCategoriesAndProduct();