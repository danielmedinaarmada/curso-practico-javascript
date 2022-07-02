// const precioOriginal = 120;
// const descuento = 18;


const coupons =  [
  "JuanDC_es_Batman", 
  "pero_no_se_lo_digas_a_nadie", 
  "es_un_secreto" ];

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

  let descuento;

  switch(couponValue){
    case coupons[0]: //"JuanDC_es_Batman", 
      descuento=15;
      break;
    case coupons[1]: //"perp_no_se_lo_digas_a_nadie"
      descuento=30;
      break;
    case coupons[2]: //"es_un_secreto"
      descuento=25;
      break;
    default:
      descuento=0;
  }


  const precioConDescuento = calcularPrecioConDescuento(precioValue, descuento);


  const ResultPrice = document.getElementById("resultPrice");
  ResultPrice.innerText = "El precio con descuento son: $" + precioConDescuento;

  console.log({
    precio,
    precioValue,
    descuento,
    precioConDescuento
  })
}


// console.log({  precioOriginal,  descuento,   porcentajePrecioConDescuento,   precioConDescuento });

