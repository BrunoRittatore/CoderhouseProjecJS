
console.log('Hola mundo');

function entrega1 (){
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
}


function algoritmo (){
    const variables = {
        TNA:null,
        TM:null,
        capitalAcumulado:null,
        meses:null,
        capitalDepositado:null,
    }
        
    variables.capitalDepositado = parseInt(document.querySelector('#capital-depositado').value);
    variables.meses = parseInt(document.querySelector('#duracion-deposito').value);
    variables.TNA = parseInt(document.querySelector('#tasa-de-interes').value);
    variables.capitalAcumulado = variables.capitalDepositado * ((1.0+variables.TNA/12/100)* variables.meses);
    console.log('Capital depositado ' + variables.capitalDepositado + ' acumulado: '+ variables.capitalAcumulado);
    alert (' El valor acumulado del capital es de : '+variables.capitalAcumulado);
 
}







