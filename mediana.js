function calcularMediaAritmetica(lista) {
   
        const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}

const lista1 = [];

const cuantosNumeros = parseInt(prompt('ingresa la cantidad de numeros del array'));
for(var i = 0; i < cuantosNumeros; i++) {
const valores = parseInt(prompt('ingresa los valores para calcular el promedio o la mediana'));
lista1.push(valores);
}

const listOrnedar = lista1.sort(function(a, b) {return a - b});
const mitadLista1 = parseInt(listOrnedar.length / 2);

function esPar(numero) {

    if (numero % 2 === 0) {
        return true;
    } else {
        return false;
    }     
}

let mediana;

if (esPar(listOrnedar.length)) {
    const elemento1 = lista1[mitadLista1 - 1];
    const elemento2 = lista1[mitadLista1];
    const promedioElemnto1y2 = calcularMediaAritmetica([
        elemento1,
        elemento2,
    ]);

    mediana = promedioElemnto1y2;
} else {
    mediana = lista1[mitadLista1];
}


