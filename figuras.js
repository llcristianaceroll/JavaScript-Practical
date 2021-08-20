//Código de cuadrado
console.group('Cuadrados')

const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El premímetro del cuadrado es: " + perimetroCuadrado + "cm");

const areaCuadrada = ladoCuadrado * ladoCuadrado;
console.log("El área del cuadrado es: " + areaCuadrada + "cm^2");
console.groupEnd();

//Código de triángulo
console.group('Tríangulos')

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

console.log(
  "Los lados del tríangulo miden: " +
    ladoTriangulo1 +
    "cm, " +
    ladoTriangulo2 +
    "cm, " +
    baseTriangulo +
    "cm"
);
console.log("La altura del tríangulo es: " + alturaTriangulo + "cm");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El premímetro del tríangulo es: " + perimetroTriangulo + "cm");

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El área del tríangulo es: " + areaTriangulo + "cm^2");

console.groupEnd();

//Código de círculo
console.group('Círculos')

//Radio
const radioCirculo = 4;
console.log("El radio del círculo es: " + radioCirculo + "cm");

// Diámetro
const diametroCirculo = radioCirculo * 2;
console.log("El diámetro del círculo es: " + diametroCirculo + "cm");

//PI
const PI = Math.PI;
console.log("PI es: " + PI + "cm");

//Circunferencia
const perimetroCriculo = diametroCirculo * PI;
console.log("El perímetro del círculo es: " + perimetroCriculo + "cm");


//Área
const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("El área del círculo es: " + areaCirculo + "cm^2");

console.groupEnd();