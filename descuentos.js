// const precioOriginal = 120;
// const descuento = 18;



function calcularPrecioConDescuento(precio, descuento){
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento)/100;
  return precioConDescuento;
}

function onClickButtonPriceDiscount(){
  const precio  = document.getElementById("inputPrice");
  const precioValue = precio.value;


  const descuento  = document.getElementById("inputDiscount");
  const descuentoValue = descuento.value;

  const precioConDescuento = calcularPrecioConDescuento(precioValue, descuentoValue);


  const ResultPrice = document.getElementById("resultPrice");
  ResultPrice.innerText = "El precio con descuento son: $" + precioConDescuento;

  console.log({
    precio,
    precioValue,
    descuento,
    descuentoValue,
    precioConDescuento
  })
}


// console.log({  precioOriginal,  descuento,   porcentajePrecioConDescuento,   precioConDescuento });

