// Retrieve the cart from localStorage, or initialize an empty cart if it doesn't exist
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(productName, price) {
    const product = { name: productName, price: price };
    cart.push(product);
    
    // Store the updated cart in localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    
    alert(`${productName} added to cart!`);
    updateCart();
}


function updateCart() {
    const cartTable = document.querySelector('#cart-table tbody');
    cartTable.innerHTML = '';  // Clear the existing rows

    let total = 0;
    cart.forEach((product, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${product.name}</td>
            <td>$${product.price}</td>
        `;
        cartTable.appendChild(row);
        total += product.price;
    });

    // Update the total price
    document.getElementById('total-price').textContent = `Total: $${total}`;
}

function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
    } else {
        alert('Thank you for your purchase!');
        
        // Clear the cart
        cart = [];
        localStorage.removeItem('cart');
        updateCart();
    }
}

// On page load, ensure the cart is updated
window.onload = function() {
    updateCart();
}
function sendMessage(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple validation (you can enhance this as needed)
    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
        return;
    }

    // Simulate sending a message (you would typically send this to a server)
    document.getElementById('response-message').textContent = 
        `Thank you, ${name}! Your message has been sent.`;

    // Clear the form fields
    document.getElementById('contact-form').reset();
};