// payment.js

import {reduceStock} from './product.js';
import {getCartItems,getCartTotal,clearCart} from './cart.js';
import {applyDiscount} from './discount.js';

export function validatePaymentMethod(method){
  return method=="card"||method=="upi"||method=="cod";
}
function generateOrderId() {
  return "ORD"+Date.now();
}

export function processPayment(method,couponCode=null){
  if (!validatePaymentMethod(method)){
    return {status:"failed",message:"Invalid payment method"};
  }
  const items=getCartItems();
  const subtotal=getCartTotal();
  const discountData=couponCode ? applyDiscount(subtotal,couponCode):{ finalTotal: subtotal, discount: 0 };

  items.forEach(item => {
    reduceStock(
      item.name=="Laptop"?1:
      item.name=="Phone"?2:
      item.name=="Headphones"?3:
      item.name=="Mouse"?4:5,
      item.quantity
    );
  });
  clearCart();
  return {
    orderId:generateOrderId(),
    items:items,
    subtotal:subtotal,
    discount:discountData.discount,
    total:discountData.finalTotal,
    paymentMethod:method,
    status:"success",
    message:"Order placed successfully"
  };
}