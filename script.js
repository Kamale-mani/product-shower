const products = {
    "Laptop": {
        image: "laptop.webp",
        cost: "$1200"
    },
    "Phone": {
        image: "phone.webp",
        cost: "$800"
    },
    "Headphoes": {
        image: "headphone.webp",
        cost: "$200"
    }
    
    
    
};

// Function to display the product image and cost
function displayProduct() {
    const productInput = document.getElementById("productInput").value;
    const productDisplay = document.getElementById("productDisplay");

    if (products[productInput]) {
        const product = products[productInput];
        productDisplay.innerHTML = `
            <img src="${product.image}" alt="${productInput}">
            <div class="product-info">
                <h2>${productInput}</h2>
                <p>Cost: ${product.cost}</p>
            </div>
        `;
    } else {
        productDisplay.innerHTML = `<p>Product not found. Please try again.</p>`;
    }
}



























