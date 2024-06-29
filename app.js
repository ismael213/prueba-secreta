let numeroSecreto = 0;
let intentos = 0;
condicionesIniciales();
let numeroSorteados = [];

let altura = prompt('Ingresar altura');

function asignarTexto(elemento, texto){
    let elemntoHTLM = document.querySelector(elemento);
    elemntoHTLM.innerHTML = texto;
}

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*10)+1;

    console.log(numeroGenerado);
    console.log(numeroSorteados);
    if(numeroSorteados.includes(numeroGenerado)){
    return generarNumeroSecreto();
    } else {
    numeroSorteados.push(numeroGenerado);
    return numeroGenerado;
    }
}

function verificarValor() {

    let numeroUsuario = parseInt(document.getElementById('numeroUsu').value);
    if(numeroUsuario === numeroSecreto){
        asignarTexto('p',`Acertaste el numero secreto es: ${numeroSecreto} lo hiciste en ${intentos} ${(intentos===1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroUsuario > numeroSecreto) {
        asignarTexto('p','El numero debe ser menor');
        limpiar();
        } else {
            asignarTexto('p','El numero debe ser mayor');
        limpiar();
        }
        intentos++;
    }
    return;
}

function limpiar() {
    document.querySelector('#numeroUsu').value='';
}
function reiniciarJuego() {
    limpiar();
    condicionesIniciales();
    document.getElementById('reiniciar').setAttribute('disabled','true');
}

function condicionesIniciales() {
    asignarTexto('h1', 'Juego numero secreto');
    asignarTexto('p', 'Indica un numero del 1 al 10');
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}



