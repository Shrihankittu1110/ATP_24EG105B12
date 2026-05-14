// discount.js

const coupons={
  'WELCOME10':{type:'percentage',value:10,minAmount:1000},
  'FLAT500':{type:'flat',value:500,minAmount:5000}
};

export function validateCoupon(code,total){
  const coupon=coupons[code];
  if(!coupon){
    return {valid:false,message:"Invalid coupon"};
  }

  if(total<coupon.minAmount){
    return {valid:false,message:"Minimum amount not met"};
  }
  return {valid:true,message:"Coupon applied"};
}

export function calculateDiscount(code,total){
  const coupon=coupons[code];
  if(!coupon)return 0;

  if(coupon.type=="percentage"){
    return (total*coupon.value)/100;
  }

  if(coupon.type=="flat"){
    return coupon.value;
  }
  return 0;
}

export function applyDiscount(total,code){
  const validation = validateCoupon(code,total);
  if(!validation.valid){
    return {
      originalTotal:total,
      discount:0,
      finalTotal:total,
      message:validation.message
    };
  }
  const discount=calculateDiscount(code,total);
  return {
    originalTotal:total,
    discount:discount,
    finalTotal:total-discount,
    message:"Discount applied"
  };
}