// const precioOriginal = 120;
// const descuento = 18;
const coupons = [
  "JuanDC_es_Batman",
  "pero_no_le_digas_a_nadie",
  "es_un_secreto"  
]

function calcularPrecioConDescuento(precio, descuento){
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento)/100;
  return precioConDescuento;
}

function onClickButtonPriceDiscount(){
  const precio  = document.getElementById("inputPrice");
  const precioValue = precio.value;

  const inputCoupon  = document.getElementById("InputCoupon");
  const couponValue = inputCoupon.value;

  
  if(!coupons.includes(couponValue)){
    alert("El cupón " + couponValue + "no es válido");
    descuento=0;
  } else if (couponValue === "JuanDC_es_Batman") {
    descuento=15;
  } else if (couponValue === "pero_no_le_digas_a_nadie") {
    descuento=30;
  } else if (couponValue === "es_un_secreto") {
    descuento=25;
  }

  const precioConDescuento = calcularPrecioConDescuento(precioValue, descuento);


  const ResultPrice = document.getElementById("resultPrice");
  ResultPrice.innerText = "El precio con descuento son: $" + precioConDescuento;

  console.log({
    precio,
    precioValue,
    inputCoupon,
    couponValue,
    descuento,
    descuentoValue,
    precioConDescuento
  })
}


// console.log({  precioOriginal,  descuento,   porcentajePrecioConDescuento,   precioConDescuento });

