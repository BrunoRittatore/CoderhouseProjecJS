
console.log('Hola mundo');

const hola = 'Hola TUTI';
let cantidadNotas = parseInt(prompt("Ingrese cantidad de notas a cargar"));
let totalNotas = 0, num, nota;
num = 0;

if (cantidadNotas == 0) {
    alert('Salida del programa por falta de ingreso de cantidad de notas, saludos');
} else {
    while (num < cantidadNotas) {

        nota = parseInt(prompt('Ingrese la nota ' + (num + 1)));
         totalNotas += nota;
        num++;2
    }
    alert('El total de las notas es : ' + totalNotas)
    alert('El promedio del total de notas es : ' + (totalNotas / cantidadNotas));
}






