// app.js

import {getAllProducts,searchProducts} from './product.js';
import {addToCart,getCartItems,getCartTotal} from './cart.js';
import {processPayment} from './payment.js';

console.log("All Products:");
console.log(getAllProducts());

console.log("Search 'phone':");
console.log(searchProducts("phone"));

console.log("Adding to Cart:");
console.log(addToCart(1,2));
console.log(addToCart(3,3));

console.log("Cart Items:");
console.log(getCartItems());
console.log("Total:",getCartTotal());

console.log("Checkout:");
const order=processPayment("upi","WELCOME10");
console.log(order);