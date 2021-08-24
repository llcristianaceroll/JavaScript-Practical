const salariesCol = colombia.map(
    function (person) {
        return person.salary;
    }
);

const salariesColSorted = salariesCol.sort(
    function (salaryA, SalaryB) {
        return salaryA - SalaryB;
    }
);

function esPar(num) {
    return (num % 2 === 0);
}

function calcularMediaAritmetica(lista) {
   
    const sumaLista = lista.reduce(
    function (valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
    }
);

const promedioLista = sumaLista / lista.length;

return promedioLista;
}

function medianaSalaries(list) {
    const mitad = parseInt(list.length / 2);    

    if(esPar(list.length)) {
        const personMitad1 = list[mitad - 1];
        const personMitad2 = list[mitad];

        const mediana = calcularMediaAritmetica([personMitad1, personMitad2]);
        return mediana;
    } else {
        const personMitad = list[mitad];
        return personMitad;
    }
}

console.log(medianaSalaries(salariesColSorted));