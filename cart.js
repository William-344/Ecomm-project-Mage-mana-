function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartLink = document.getElementById("cart-link");

    if (cartLink) {
        cartLink.textContent = `Cart (${cart.length})`;
    }
}

function addToCart(name, price) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({ name, price });

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();
}

document.addEventListener("DOMContentLoaded", updateCartCount);