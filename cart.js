function addToCart(name, price) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({ name, price: Number(price) });
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
}

function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartLink = document.getElementById("cart-link");

    if (cartLink) {
        cartLink.textContent = `Cart (${cart.length})`;
    }
}

function displayCart() {
    const container = document.getElementById("cartItems");
    const totalEl = document.getElementById("total");

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    container.innerHTML = "";
    let total = 0;

    if (cart.length === 0) {
        container.innerHTML = "<p>Your cart is empty.</p>";
        totalEl.textContent = "";
        return;
    }

    cart.forEach((item, index) => {
        total += item.price;

        container.innerHTML += `
            <div>
                <p><strong>${item.name}</strong></p>
                <p>$${item.price}</p>
                <button onclick="removeItem(${index})">Remove</button>
            </div>
        `;
    });

    totalEl.textContent = "Total: $" + total.toFixed(2);
}

function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}

function clearCart() {
    localStorage.removeItem("cart");
    displayCart();
}

document.addEventListener("DOMContentLoaded", () => {
    updateCartCount();
    displayCart();
});