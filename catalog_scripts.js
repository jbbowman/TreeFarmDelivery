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
        label: "Elm Tree",
        height: [6, 7, 8],
        price_per_foot: 25,
        image: "product_images/elm.jpg",
    },
    {
        id: 2,
        label: "linden Tree",
        height: [6, 7, 8],
        price_per_foot: 25,
        image: "product_images/linden.jpg",
    },
    {
        id: 3,
        label: "Black Hills Spruce Tree",
        height: [5, 6, 7, 8],
        price_per_foot: 25,
        image: "product_images/blackHillsSpruce.jpg",
    },
    {
        id: 4,
        label: "Balsam Tree",
        height: [5, 6, 7, 8],
        price_per_foot: 25,
        image: "product_images/balsam.jpg",
    },
    {
        id: 5,
        label: "Willow Tree",
        height: [8, 9, 10],
        price_per_foot: 25,
        image: "product_images/willow.jpg"
    },
    {
        id: 6,
        label: "Crabapple Tree",
        height: [4, 5, 6],
        price_per_foot: 25,
        image: "product_images/crab.jpg"
    }
];

function generateProductsHtml() {
    const itemsContainer = document.getElementById("itemsContainer");
    let productsHtml = "";

    products.forEach((product) => {
        productsHtml += `
        <div class="product">
            <img alt="Product Image" src="${product.image}">
            <div class="product-info">
                <h2 class="product-label">${product.label}</h2>
                <p class="product-price">${product.price}</p>
                <label for="tree-size">Tree Size:</label>
                <select id="tree-size" name="tree-size">
                    <option value="5">5 feet</option>
                    <option value="6">6 feet</option>
                    <option value="7">7 feet</option>
                    <option value="8">8 feet</option>
                </select>
                <label for="quantity">Quantity:</label>
                <input id="quantity" min="1" name="quantity" type="number" value="1">
            </div>
        </div>`;
    });

    itemsContainer.innerHTML = productsHtml;
}