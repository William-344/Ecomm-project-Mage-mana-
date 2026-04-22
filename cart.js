function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartLink = document.querySelector(".nav-buttons a[href='cart.html']");

    if (!cartLink) return;

    cartLink.textContent = `Cart (${cart.length})`;
}

document.addEventListener("DOMContentLoaded", updateCartCount);