class plazoFijo {
    constructor(capitalDepositado, meses, TNA, capitalAcumulado) {
        this.capitalDepositado = capitalDepositado;
        this.meses = meses;
        this.TNA = TNA;
        this.capitalAcumulado = capitalAcumulado;

    }

    resultado() {
        resultado.innerHTML = "El capital depositado es " + this.capitalDepositado + " el acumulado es:  " + this.capitalAcumulado;
    }
}

let resultado = document.getElementById('resultado');

console.log('Testing Dev Tools');
function algoritmo() {

   let  variables = [TNA = null, TM = null,  capitalAcumulado = null, meses = null, capitalDepositado = null];
    variables.capitalDepositado = parseInt(document.querySelector('#capital-depositado').value);
    variables.meses = parseInt(document.querySelector('#duracion-deposito').value);
    variables.TNA = parseInt(document.querySelector('#tasa-de-interes').value);
    variables.capitalAcumulado = variables.capitalDepositado * ((1.0 + variables.TNA / 12 / 100) * variables.meses);

    const plazoFijo1 = new plazoFijo(variables.capitalDepositado, variables.meses, variables.TNA, variables.capitalAcumulado);
    plazoFijo1.resultado();
}

let procesar = document.getElementById('procesar');
procesar.addEventListener('click', () => {
    algoritmo();

})

function Login() {
   let a = [];
   

const up1 = {
    name:'abcd@gmail.com',
    password: btoa('abc@12')
};
const up2 = {
    name:'bcd@gmail.com',
    password: btoa('bcd@12')
};
a.push(up1);
a.push(up2);

console.log(a);

const username = document.getElementById('uname').value;
const password = document.getElementById('psw').value;

sessionStorage.setItem("currentloggedin",username);

localStorage.setItem('all_users',JSON.stringify(a));

a = JSON.parse((localStorage.getItem("all_users")));

a.push({name:username, password:password});

localStorage.setItem('name',JSON.stringify(a));

for ( var i = 0 ; i < a.length ; i++ ) {
    var li = document.createElement("li");
    li.innerHTML = a[i]['name'];
    document.getElementById("listUser").appendChild(li);
}
}