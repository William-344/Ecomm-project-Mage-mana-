function addToCart(name, price) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let existingItem = cart.find(item => item.name === name);

    if (existingItem) {
        existingItem.qty += 1;
    } else {
        cart.push({ name, price: Number(price), qty: 1 });
    }

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

        let itemTotal = item.price * item.qty;
        total += itemTotal;

        container.innerHTML += `
            <div style="margin-bottom:10px;">
                <p><strong>${item.name}</strong></p>
                <p>$${item.price} x ${item.qty} = $${itemTotal.toFixed(2)}</p>

                <button onclick="changeQty(${index}, -1)">-</button>
                <span> ${item.qty} </span>
                <button onclick="changeQty(${index}, 1)">+</button>
                
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
function changeQty(index, amount) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart[index].qty += amount;

    if (cart[index].qty <= 0) {
        cart.splice(index, 1);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
    updateCartCount();
}
function goToCheckout() {
    window.location.href = "checkout.html";
}