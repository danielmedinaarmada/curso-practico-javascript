// const precioOriginal = 120;
// const descuento = 18;

const coupons = [
  {
    name: "JuanDC_es_Batman",
    discount: 15,
  },
  {
    name: "pero_no_le_digas_a_nadie",
    discount: 30,},
  {
    name: "es_un_secreto",
    discount: 25,
  }
];

function calcularPrecioConDescuento(precio, descuento){
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento)/100;
  return precioConDescuento;
}


function onClickButtonPriceDiscount(){
  const precio  = document.getElementById("inputPrice");
  const precioValue = precio.value;


  const inputCoupon  = document.getElementById("InputCoupon");
  const inputCouponValue = inputCoupon.value;
  
  const isCouponValueValid = function(coupon) {
    return coupon.name === inputCouponValue;
  };

  const userCoupon = coupons.find(isCouponValueValid);

  if(!userCoupon){
    alert("El cupón " + inputCouponValue + "no es válido");
    const ResultPrice = document.getElementById("resultPrice");
    ResultPrice.innerText = "El precio sin descuento son: $" + precioValue;
  } else {
    const descuento = userCoupon.discount;
    const precioConDescuento = calcularPrecioConDescuento(precioValue, descuento);
    const ResultPrice = document.getElementById("resultPrice");
    ResultPrice.innerText = "El precio con descuento son: $" + precioConDescuento;
  }

  console.log({
    userCoupon,
  })
}


// console.log({  precioOriginal,  descuento,   porcentajePrecioConDescuento,   precioConDescuento });

