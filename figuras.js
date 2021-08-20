//Código de cuadrado
console.group('Cuadrados')

// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
    return lado * 4 + 'cm';
} 

// console.log("El premímetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
    return lado * lado + 'cm^2';
}

// console.log("El área del cuadrado es: " + areaCuadrado + "cm^2");
console.groupEnd();

//Código de triángulo
console.group('Tríangulos')

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo = 5.5;

// console.log(
//   "Los lados del tríangulo miden: " +
//     ladoTriangulo1 +
//     "cm, " +
//     ladoTriangulo2 +
//     "cm, " +
//     baseTriangulo +
//     "cm"
// );
// 


function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base + 'cm';
} 
// console.log("El premímetro del tríangulo es: " + perimetroTriangulo + "cm");

function areaTriangulo(base, altura) {
    return (base * altura) / 2 + 'cm^2';
} 
// console.log("El área del tríangulo es: " + areaTriangulo + "cm^2");

console.groupEnd();

//Código de círculo
console.group('Círculos')

//Radio
// const radioCirculo = 4;
// console.log("El radio del círculo es: " + radioCirculo + "cm");

// Diámetro
function diametroCirculo(radio) {
    return radio * 2 + 'cm';
}
// console.log("El diámetro del círculo es: " + diametroCirculo + "cm");

//PI
const PI = Math.PI;
// console.log("PI es: " + PI + "cm");

//Circunferencia
function perimetroCriculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI + 'cm';
} 
// console.log("El perímetro del círculo es: " + perimetroCriculo + "cm");


//Área
function areaCirculo(radio) {
    return radio * radio * PI + 'cm^2';
} 
// console.log("El área del círculo es: " + areaCirculo + "cm^2");

console.groupEnd();

// Aquí interactuamos con el HTML

function calcularPerimetroCuadrado() {
    const input = document.getElementById('InputCuadrado');
    const value = input.value;
    
    const perimetro = perimetroCuadrado(value)
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById('InputCuadrado');
    const value = input.value;
    
    const area = areaCuadrado(value)
    alert(area);
}