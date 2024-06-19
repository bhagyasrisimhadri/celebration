const products = [
    // milkshakes
    { name: "Creamy Vanilla", price: 80, id: 1, quantity: 1, },
    { name: "Strawberry Milkshake", price: 80, id: 2, quantity: 1, },
    { name: "Kaju Butterscotch Milkshake", price: 90, id: 3, quantity: 1, },
    { name: "Chocolate Milkshake", price: 90, id: 4, quantity: 1, },
    { name: "Black Current Milkshake", price: 100, id: 5, quantity: 1, },
    { name: "Mango Badam Milkshake", price: 100, id: 6, quantity: 1, },
    { name: "Oreo Vanilla", price: 150, id: 7, quantity: 1, },
    { name: "Crunchy Kit-Kat", price: 150, id: 8, quantity: 1, },
    { name: "Strawberry-Banana", price: 150, id: 9, quantity: 1, },
    { name: "Snicker Chocolate", price: 150, id: 10, quantity: 1, },
    { name: "Celebration Special", price: 150, id: 11, quantity: 1, },
    { name: "Almond Butterscotch", price: 200, id: 12, quantity: 1, },

    // mocktails
    { name: "Blue World", price: 60, id: 13, quantity: 1, },
    { name: "Red Ferrai", price: 60, id: 14, quantity: 1, },
    { name: "Orange Blossom", price: 60, id: 15, quantity: 1, },
    { name: "Mint Mojito", price: 60, id: 16, quantity: 1, },
    { name: "Bommy Blue", price: 80, id: 17, quantity: 1, },
    { name: "Pink Lady", price: 80, id: 18, quantity: 1, },
    { name: "Sunset Glow", price: 80, id: 19, quantity: 1, },
    { name: "Mid-Night Beauty", price: 80, id: 20, quantity: 1, },

    // cold coffee
    { name: "Vanilla Cold Coffee", price: 90, id: 21, quantity: 1, },
    { name: "Chocolate Cold Coffee", price: 90, id: 22, quantity: 1, },
    { name: "Caramel Cold Coffee", price: 90, id: 23, quantity: 1, },


    // burger
    { name: "Veg Classic Burger", price: 80, id: 24, quantity: 1, },
    { name: "Veg Cheese Burger", price: 100, id: 25, quantity: 1, },
    { name: "Veg Italian Burger", price: 120, id: 26, quantity: 1, },
    { name: "Veg Mexican Burger", price: 130, id: 27, quantity: 1, },
    { name: "Veg Special Burger", price: 140, id: 28, quantity: 1, },
    { name: "Chicken Classic Burger", price: 80, id: 29, quantity: 1, },
    { name: "Chicken Cheese Burger", price: 100, id: 30, quantity: 1, },
    { name: "Chicken Italian Burger", price: 120, id: 31, quantity: 1, },
    { name: "Chicken Mexican Burger", price: 130, id: 32, quantity: 1, },
    { name: "Chicken Special Burger", price: 140, id: 33, quantity: 1, },

    //sandwich
    { name: "Veg Classic Sandwich", price: 80, id: 34, quantity: 1, },
    { name: "Veg Cheese Sandwich", price: 100, id: 35, quantity: 1, },
    { name: "Hot & Spicy Sandwich", price: 120, id: 36, quantity: 1, },
    { name: "Paneer Sandwich", price: 130, id: 37, quantity: 1, },
    { name: "Sweet-corn Sandwich", price: 140, id: 38, quantity: 1, },
    { name: "Chicken Classic Sandwich", price: 100, id: 39, quantity: 1, },
    { name: "Chicken Cheese Sandwich", price: 120, id: 40, quantity: 1, },
    { name: "Chicken Hot & Spicy Sandwich", price: 130, id: 41, quantity: 1, },
    { name: "Chicken Italian Sandwich", price: 140, id: 42, quantity: 1, },
    { name: "Chicken Tandoori Sandwich", price: 150, id: 43, quantity: 1, },

    //veg pizza
    { name: "Margherita Pizza(small)", price: 100, id: 44, quantity: 1, },
    { name: "Margherita Pizza(large)", price: 120, id: 45, quantity: 1, },
    { name: "Fresh Vegie Pizza(small)", price: 120, id: 46, quantity: 1, },
    { name: "Fresh Vegie Pizza(large)", price: 140, id: 47, quantity: 1, },
    { name: "Country Special Pizza(small)", price: 130, id: 48, quantity: 1, },
    { name: "Country Special Pizza(large)", price: 150, id: 49, quantity: 1, },
    { name: "Spicy Delight Pizza(small)", price: 140, id: 50, quantity: 1, },
    { name: "Spicy Delight Pizza(large)", price: 160, id: 51, quantity: 1, },
    { name: "Tandoori Paneer Pizza(small)", price: 150, id: 52, quantity: 1, },
    { name: "Tandoori Paneer Pizza(large)", price: 170, id: 53, quantity: 1, },
    { name: "Peri-Peri Paneer Pizza(small)", price: 170, id: 54, quantity: 1, },
    { name: "Peri-Peri Paneer Pizza(large)", price: 190, id: 55, quantity: 1, },
    { name: "Veg Italian Pizza(small)", price: 180, id: 56, quantity: 1, },
    { name: "Veg Italian Pizza(large)", price: 200, id: 57, quantity: 1, },
    { name: "Veg Mexican Pizza(small)", price: 190, id: 58, quantity: 1, },
    { name: "Veg Mexican Pizza(large)", price: 210, id: 59, quantity: 1, },
    { name: "Celebration Special Veg Pizza(small)", price: 200, id: 60, quantity: 1, },
    { name: "Celebration Special Veg Pizza(large)", price: 220, id: 61, quantity: 1, },

    //non-veg pizza
    { name: "Chicken Delight Pizza(small)", price: 130, id: 62, quantity: 1, },
    { name: "Chicken Delight Pizza(large)", price: 150, id: 63, quantity: 1, },
    { name: "Chicken Cheese Pizza(small)", price: 140, id: 64, quantity: 1, },
    { name: "Chicken Cheese Pizza(large)", price: 160, id: 65, quantity: 1, },
    { name: "Chicken Golden Delight Pizza(small)", price: 150, id: 66, quantity: 1, },
    { name: "Chicken Golden Delight Pizza(large)", price: 170, id: 67, quantity: 1, },
    { name: "Chicken Italian Pizza(small)", price: 160, id: 68, quantity: 1, },
    { name: "Chicken Italian Pizza(large)", price: 180, id: 69, quantity: 1, },
    { name: "Chicken Mexican Pizza(small)", price: 170, id: 70, quantity: 1, },
    { name: "Chicken Mexican Pizza(large)", price: 190, id: 71, quantity: 1, },
    { name: "Chicken Popcorn Pizza(small)", price: 180, id: 72, quantity: 1, },
    { name: "Chicken Popcorn Pizza(large)", price: 200, id: 73, quantity: 1, },
    { name: "Tandoori Chicken Pizza(small)", price: 190, id: 74, quantity: 1, },
    { name: "Tandoori Chicken Pizza(large)", price: 210, id: 75, quantity: 1, },
    { name: "Chicken Supreme Pizza(small)", price: 200, id: 76, quantity: 1, },
    { name: "Chicken Supreme Pizza(large)", price: 220, id: 77, quantity: 1, },
    { name: "Celebration Special Chicken Pizza(small)", price: 220, id: 78, quantity: 1, },
    { name: "Celebration Special Chicken Pizza(large)", price: 240, id: 79, quantity: 1, },



    //fried chicken
    { name: "Chicken Popcorn(Regular)", price: 120, id: 80, quantity: 1, },
    { name: "Chicken Popcorn(large)", price: 150, id: 81, quantity: 1, },
    { name: "Chicken Wings(4-pcs)", price: 80, id: 82, quantity: 1, },
    { name: "Chicken Wings(7-pcs)", price: 150, id: 83, quantity: 1, },
    { name: "Chicken Wings(14-pcs)", price: 280, id: 84, quantity: 1, },
    { name: "Chicken Lollypops(2-pcs)", price: 90, id: 85, quantity: 1, },
    { name: "Chicken Lollypops(4-pcs)", price: 170, id: 86, quantity: 1, },
    { name: "Chicken Lollypops(8-pcs)", price: 320, id: 87, quantity: 1, },
    { name: "Chicken Strips(3-pcs)", price: 120, id: 88, quantity: 1, },
    { name: "Chicken Strips(5-pcs)", price: 180, id: 89, quantity: 1, },
    { name: "Chicken Strips(10-pcs)", price: 320, id: 90, quantity: 1, },
    { name: "Chicken Legs(2-pcs)", price: 150, id: 91, quantity: 1, },
    { name: "Chicken Legs(4-pcs)", price: 280, id: 92, quantity: 1, },
    { name: "Chicken Legs(8-pcs)", price: 520, id: 93, quantity: 1, },

    // quick bytes
    { name: "French Fries", price: 80, id: 94, quantity: 1, },
    { name: "Crispy Corn", price: 80, id: 95, quantity: 1, },
    { name: "Potato Pops", price: 80, id: 96, quantity: 1, },
    { name: "Spring Rolls", price: 80, id: 97, quantity: 1, },

    // chicken rolls & wraps
    { name: "Chicken Roll", price: 100, id: 98, quantity: 1, },
    { name: "Chicken Cheese Wrap", price: 120, id: 99, quantity: 1, },
    { name: "Chicken Hot & Spicy Roll", price: 140, id: 100, quantity: 1, },
    { name: "Crispy Chicken Wrap", price: 150, id: 101, quantity: 1, },

];

let cart = []

const productsHTML = products.map(
    (product) => `<div class="product-card">
          <h2 class="product-name">${product.name}</h2>
          <strong>${product.price}/-</strong>
          <button class="product-btn" id=${product.id}>Add to Cart</button>
      </div>`
);
const result = document.querySelector(".result");
result.innerHTML = productsHTML.join("");


function updateCart() {
    const cartHTML = cart.map(
        (item) => `<div class="cart-item">
              <h3>${item.name}</h3>
              <div class="cart-detail"><div class="mid">
                  <button click={decrItem(${item.id})}>-</button>
                  <p>${item.quantity}
                  </p>
                  <button onclick={incrItem(${item.id})}>+</button>
                 </div>
              <p>${item.price}/-</p>
              <button onclick={deleteItem(${item.id})} class="cart-product" id=${item.id}>X</button></div>
             </div>`
    );

    const cartItems = document.querySelector(".cart-items");
    cartItems.innerHTML = cartHTML.join("");
}

let num = document.querySelectorAll(".product-btn").length;
for (let i = 0; i < num; i++) {

    document
        .querySelectorAll(".product-btn")

    [i].addEventListener("click", function (e) {
        addToCart(products, parseInt(e.target.id));
    });
}

function addToCart(products, id) {
    const product = products.find((product) => product.id === id);
    const cartProduct = cart.find((product) => product.id === id);
    if (cartProduct != undefined && product.id == cartProduct.id) {
        incrItem(id);
    } else {
        cart.unshift(product);
    }
    updateCart();
    getTotal(cart);
};

function getTotal(cart) {
    let { totalItem, cartTotal } = cart.reduce(
        (total, cartItem) => {
            total.cartTotal += cartItem.price * cartItem.quantity;
            total.totalItem += cartItem.quantity;
            return total;
        },
        { totalItem: 0, cartTotal: 0 }
    );
    const totalItemsHTML = document.querySelector(".noOfItems");
    totalItemsHTML.innerHTML = `${totalItem} items`;
    const totalAmountHTML = document.querySelector(".total");
    totalAmountHTML.innerHTML = `${cartTotal}/-`;
}

function incrItem(id) {
    for (let i = 0; i < cart.length; i++) {
        if (cart[i] && cart[i].id == id) {
            cart[i].quantity += 1;
        }
    }
    updateCart();
    getTotal(cart);
}

function decrItem(id) {
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].id == id && cart[i].quantity > 1) {
            cart[i].quantity -= 1;
        }
    }
    updateCart();
    getTotal(cart);
}

function deleteItem(id) {
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].id === id) {
            cart[i].quantity = 1;
            cart.splice(i, 1);
        }
    }
    updateCart();
    getTotal(cart);
}


