
console.log('Testing Dev Tools');
function algoritmo (){
   
    variables = [TNA=null,TM=null,capitalAcumulado=null,meses=null,capitalDepositado=null];
        
    variables.capitalDepositado = parseInt(document.querySelector('#capital-depositado').value);
    variables.meses = parseInt(document.querySelector('#duracion-deposito').value);
    variables.TNA = parseInt(document.querySelector('#tasa-de-interes').value);
    variables.capitalAcumulado = variables.capitalDepositado * ((1.0+variables.TNA/12/100)* variables.meses);
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = "El capital depositado es " + variables.capitalDepositado +" el acumulado es:  "+variables.capitalAcumulado;
}

 let procesar = document.getElementById('procesar');
 procesar.addEventListener('click', () => {
    algoritmo();

 })





