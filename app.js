// creando objetos otro tipos de variable, con la palabra <<document>> lo que se hace es establecer un puentre en el html y js
//let titulo = document.querySelector('h1');
// a la variable titulo de asignamos un valor con el metodo con <<innerHTML>> 
//titulo.innerHTML = 'Juego del número secreto';

let numeroSecreto = 0;
let intento = 0;
let listaNumeroSorteados = [];
let numeroMaximo = 10;
console.log(numeroSecreto);

// funcion que asigna texto a un elemento mediante el método .querySelector()
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

// funcion que alerta un click
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el número en ${intento} ${intento == 1 ? 'vez' : 'veces'}`);   
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else { 
        // el usuario no acertó
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El número secreto es menor');
        } else {
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
        limpiarInput();
        intento++;
    }
    return;
}

function limpiarInput() {
    document.getElementById('valorUsuario').value = '';
}


// funcion para generar números aleatorios
function generarNumeroAleatorio() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo + 1);
    console.log(numeroGenerado);
    console.log(listaNumeroSorteados);

    // si todos los números posibles ya se sortearon
    if (listaNumeroSorteados.length == numeroMaximo) {
        // mostramos un mensaje en la pantalla
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
    } else {
        // seguimos jugando

        // si el número generado pertenece a la lista
        if (listaNumeroSorteados.includes(numeroGenerado)) { // includes verifica si el numeroGenerado pertenece a la lista
            return generarNumeroAleatorio(); // al usar recursividad siempre dejar una condición de salida
        } else {
            listaNumeroSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

// función para colocar los mensajes iniciales
function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroAleatorio();
    intento = 1;
}

// funcion para reiniciar el juego (esto le da funcionalidad al botón 'reiniciar juego')
function reiniciarJuego() {
    //limpiar caja
    limpiarInput();
    //mostrar mensaje de inicio (Indicar un número del 1 al 10)
    //generar un nuevo número aleatorio
    //inicializar el número de intentos (el número de intentos tiene el valor de la partida anterior así que es necesaria esta acción)
    condicionesIniciales();
    //deshabilitar botón de nuevo juego
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();   