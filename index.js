console.log("inicio");

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

    let variables = [TNA = null, TM = null, capitalAcumulado = null, meses = null, capitalDepositado = null];
    variables.capitalDepositado = parseInt(document.querySelector('#capital-depositado').value);
    variables.meses = parseInt(document.querySelector('#duracion-deposito').value);
    variables.TNA = parseInt(document.querySelector('#tasa-de-interes').value);
    variables.capitalAcumulado = variables.capitalDepositado * ((1.0 + variables.TNA / 12 / 100) * variables.meses);

    const plazoFijo1 = new plazoFijo(variables.capitalDepositado, variables.meses, variables.TNA, variables.capitalAcumulado);
    plazoFijo1.resultado();
}

const procesar = document.getElementById('procesar');
if(!(Object.is(procesar,null))){
    procesar.addEventListener('click', () => {

        toastVerification(algoritmo);
       
    });
}


function Login() {
    let a = [];
    const up1 = {
        name: 'abcd@gmail.com',
        password: btoa('abc@12')
    };
    const up2 = {
        name: 'bcd@gmail.com',
        password: btoa('bcd@12')
    };
    a.push(up1);
    a.push(up2);

    console.log(a);

    const username = document.getElementById('uname').value;
    const password = document.getElementById('psw').value;
    a.push({ name: username, password: password });

    sessionStorage.setItem("currentloggedin", username);
    localStorage.setItem('all_users', JSON.stringify(a));

    a = JSON.parse((localStorage.getItem("all_users")));

    const hash = Object.fromEntries(a.map(e => [e.name, e.password]));

    for (let key of hash) {
        if (key[0] === username && key[1] === atob(password)) {
            alert('Login successful');
        }
        else {
            alert('Login fail');
        }
    }
    for (var i = 0; i < a.length; i++) {
        var li = document.createElement("li");
        li.innerHTML = a[i]['name'];
        document.getElementById("listUser").appendChild(li);
    }
}


const toastVerification = (method) =>{
    (async () => {

        const { value: accept } = await Swal.fire({
            title: 'Terms and conditions',
            input: 'checkbox',
            inputValue: 1,
            inputPlaceholder:
                'I agree with the terms and conditions',
            confirmButtonText:
                'Continue <i class="fa fa-arrow-right"></i>',
            inputValidator: (result) => {
                return !result && 'You need to agree with T&C'
            }
        })

        if (accept) {
            method();
        }

    })
    ()
}

function apiBinance() {
    let endpoint = 'https://api.binance.com/api/v3/ticker/price'
fetch(endpoint)
    .then( response => response.json() )
    .then( data => mostrarData(data))
    .catch( error => console.log(error))

    console.log(data)

const mostrarData = (data)=>{
    let body = '';
    for (let i=0; i < data.length; i++) {
        body += `<tr><td>${data[i].symbol}</td><td>${data[i].price}</td></tr>`
    }
    document.getElementById('data').innerHTML = body
}    
}