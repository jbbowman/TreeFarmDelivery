const products = [
    {
        id: 0,
        label: "Maple Tree",
        height: [6, 7, 8],
        price_per_foot: 25,
        image: "product_images/maple.jpg",
    },
    {
        id: 1,
        label: "Linden Tree",
        height: [6, 7, 8],
        price_per_foot: 25,
        image: "product_images/linden.jpg",
    },
    {
        id: 2,
        label: "Black Hills Spruce Tree",
        height: [5, 6, 7, 8],
        price_per_foot: 25,
        image: "product_images/blackHillsSpruce.jpg",
    },
    {
        id: 3,
        label: "Balsam Tree",
        height: [5, 6, 7, 8],
        price_per_foot: 25,
        image: "product_images/balsam.jpg",
    },
    {
        id: 4,
        label: "Willow Tree",
        height: [8, 9, 10],
        price_per_foot: 25,
        image: "product_images/willow.jpg"
    },
    {
        id: 5,
        label: "Crabapple Tree",
        height: [4, 5, 6],
        price_per_foot: 25,
        image: "product_images/crab.jpg"
    }
];

function generateProductsHtml() {
    const productsContainer = document.getElementById("all_products");
    let productsHtml = "";

    products.forEach((product) => {
        let optionsHtml = "";
        product.height.forEach((height) => {
            optionsHtml += `<option value="${height}">${height} feet</option>`;
        });

        productsHtml += `
        <div class="product">
            <img alt="Product Image" src="${product.image}">
            <div class="product-info">
                <h2 class="product-label">${product.label}</h2>
                <p class="product-price">${product.price_per_foot * Math.min(...product.height)} - ${product.price_per_foot * Math.max(...product.height)}</p>
                <label for="tree-size-${product.id}">Tree Size:</label>
                <select id="tree-size-${product.id}" name="tree-size">
                    ${optionsHtml}
                </select>
                <label for="quantity-${product.id}">Quantity:</label>
                <input id="quantity-${product.id}" min="0" max="50" name="quantity" type="number" value="0">
            </div>
        </div>`;
    });

    productsContainer.innerHTML = productsHtml;
}

document.addEventListener("DOMContentLoaded", generateProductsHtml);
