//Código del cuadrado
console.group("Cuadrados");

function perimetroCuadrado(lado) {
  return lado * 4;
}

function areaCuadrado(lado) {
  return lado * lado;
}
console.groupEnd();

//Código del triangulo
console.group("Triángulos");

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}

console.groupEnd();

//Código del Círculo
console.group("Círculo");

function diametroCirculo(radio) {
  return radio * 2;
}

//pi
const PI = Math.PI;

//Circunferencia
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

//áreaCirculo
function areaCirculo(radio) {
  return radio * radio * PI;
}

console.groupEnd();

//aquí interactuamos con el HTML
function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;
  const respuesta = document.getElementById("perimetroCuadrado");
  const perimetro = perimetroCuadrado(value);
  respuesta.innerHTML = perimetro;


}

function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;
  const respuesta = document.getElementById("idAreaCuadrado");
  const area = areaCuadrado(value);
  respuesta.innerHTML = area;
}


function calcularPerimetroTriangulo(){
  const lado1 = parseFloat(document.getElementById("inputLado1").value);
  const lado2 = parseFloat(document.getElementById("inputLado2").value);
  const base = parseFloat(document.getElementById("inputBase").value);
  const alerta = document.getElementById("alertaTriangulo");
  if (lado1 !== lado2){
    const respuesta = "Observación: Los lados del tríangulo deben ser iguales"
    alerta.innerHTML = respuesta;
    return respuesta
  }

  const perimetro = perimetroTriangulo(lado1, lado2, base);
  const respuesta = document.getElementById("perimetroTriangulo");
  respuesta.innerHTML = perimetro;
}


function calcularAreaTriangulo(){
  const lado1 = parseFloat(document.getElementById("inputLado1").value);
  const lado2 = parseFloat(document.getElementById("inputLado2").value);
  const base = parseFloat(document.getElementById("inputBase").value);
  const alerta = document.getElementById("alertaTriangulo");
  
  if (lado1 !== lado2){
    const respuesta = "Observación: Los lados del tríangulo deben ser iguales"
    alerta.innerHTML = respuesta;
    return respuesta
  }

  const altura = Math.sqrt(( (lado1*lado1) - ((base*base)/4) ))
  const area = areaTriangulo(base, altura)
  const respuesta = document.getElementById("areaTriangulo");
  respuesta.innerHTML = area;
  const respuestaAltura = document.getElementById("alturaTriangulo");
  respuestaAltura.innerHTML = altura;
}


function calcularPerimetroCirculo(){
  const radio = document.getElementById("InputRadio").value;
  const perimetro =  perimetroCirculo(parseFloat(radio));
  const respuesta = document.getElementById("perimetroCirculo");
  respuesta.innerHTML = perimetro;
}



function calcularAreaCirculo(){
  const radio = document.getElementById("InputRadio").value;
  const area =  areaCirculo(parseFloat(radio));
  const respuesta = document.getElementById("areaCirculo");
  respuesta.innerHTML = area;
}