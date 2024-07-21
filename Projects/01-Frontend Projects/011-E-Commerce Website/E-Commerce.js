
let productsContainer = document.querySelector('.products');
let cartContainer = document.querySelector('.cart');
let cartBtn = document.querySelector('#cartBtn');
let productList = [];
let cartItems = [];
let totalPrice=0;

async function fetchProducts() {
    try {
        let response = await fetch(`https://dummyjson.com/products`);
        if (!response.ok) {
            throw new Error('Failed to fetch products');
        }
        let data = await response.json();
        if (!data || !data.products || !Array.isArray(data.products)) {
            throw new Error('Invalid data format');
        }
        productList = data.products;
        console.log(productList);
        addProductsToDOM();
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

function addProductsToDOM() {
    if (!productList) {
        console.error('Product list is empty');
        return;
    }

    productList.forEach(product => {
        let div = document.createElement('div');
        div.innerHTML = `<div class="product" style = "height:400px; " id=${product.id}>
        <div class="img_con">
        <img src=${product.images[0]} style = "height:200px; width:200px;" id="0"></img>
        </div>
        <div class="card_footer">
        <h3>${product.title}</h3>
        <p>Price: $${product.price}</p>
        <button class="addToCartBtn" onClick ="addToCart(${product.id})">Add to Cart</button>
        </div>
    </div>`
        productsContainer.appendChild(div);
    });
}

cartBtn.addEventListener('click', () => {
    cart.classList.toggle('show');
    document.querySelector('.products').style.display = cart.classList.contains('show') ? 'none' : 'flex';
    displayCart();
});

function displayCart(){
    cartContainer.innerHTML="";
    totalPrice = 0;
    cartItems.forEach(item => {
        let cartdiv = document.createElement('div');
        totalPrice += (item.price*item.quantity);
        cartdiv.innerHTML = `<div class="cart_item">
            <span style="font-size:18px">${item.name}</span>
            <span>Price: ${item.price}</span>
            <span>Quant: ${item.quantity}</span>
            <button class="remove" onClick = "removeItem(${item.id})">-</button>
            </div>`;
        cartContainer.append(cartdiv);
    });
}

function addToCart(id) {
    const foundIndex = cartItems.findIndex(obj => obj.id === id);

    if (foundIndex !== -1) {
      cartItems[foundIndex].quantity += 1;
    } else {
      cartItems.push({
          id : id,
          name : productList[id-1].title,
          price : productList[id-1].price,
          quantity: 1
      })
    }
    console.log('Adding product to cart:', cartItems);
}

function removeItem(id){
    const foundIndex = cartItems.findIndex(obj => obj.id === id);
    if (foundIndex !== -1) {
      cartItems[foundIndex].quantity -= 1;
      if(cartItems[foundIndex].quantity==0){
        cartItems.splice(foundIndex, 1);

      }
    }
    displayCart();
}

document.getElementById('checkoutBtn').addEventListener('click',()=>{
    if(cartItems.length === 0)
        window.alert(`Please add product to Cart !`);
    else
        window.alert(`Thankyou for shopping. Your total price is ${totalPrice.toFixed(2)}`);
})

fetchProducts();
