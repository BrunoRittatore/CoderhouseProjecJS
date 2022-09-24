class plazoFijo {
    constructor(capitalDepositado,meses,TNA,capitalAcumulado){
        this.capitalDepositado = capitalDepositado;
        this.meses = meses;
        this.TNA = TNA;
        this.capitalAcumulado = capitalAcumulado;

    }
   
    resultado (){
      
        resultado.innerHTML = "El capital depositado es " + this.capitalDepositado +" el acumulado es:  "+this.capitalAcumulado;
    }
}
let resultado = document.getElementById('resultado');
console.log('Testing Dev Tools');
function algoritmo (){
   
    variables = [TNA=null,TM=null,capitalAcumulado=null,meses=null,capitalDepositado=null];
        
    variables.capitalDepositado = parseInt(document.querySelector('#capital-depositado').value);
    variables.meses = parseInt(document.querySelector('#duracion-deposito').value);
    variables.TNA = parseInt(document.querySelector('#tasa-de-interes').value);
    variables.capitalAcumulado = variables.capitalDepositado * ((1.0+variables.TNA/12/100)* variables.meses);
    const plazoFijo1 = new plazoFijo(variables.capitalDepositado,variables.meses,variables.TNA,variables.capitalAcumulado);
    plazoFijo1.resultado();
}

 let procesar = document.getElementById('procesar');
 procesar.addEventListener('click', () => {
    algoritmo();

 })





