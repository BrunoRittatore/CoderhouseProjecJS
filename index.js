
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
    let n;
    let capitalDepositado, capitalAcumulado,meses,tasaDeInteres;
    capitalDepositado = parseInt(document.querySelector('#capital-depositado').value);
    meses = parseInt(document.querySelector('#duracion-deposito').value);
    tasaDeInteres = parseInt(document.querySelector('#tasa-de-interes').value);
    capitalAcumulado = capitalDepositado * Math.pow(1.0+tasaDeInteres/100/365,meses*30)
    console.log('Capital depositado ' + capitalDepositado + ' acumulado: '+ capitalAcumulado);
    alert (' El valor acumulado del capital es de : '+capitalAcumulado);
 
}







