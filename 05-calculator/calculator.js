'use strict';

const display = document.getElementById('display');
const numeros = document.querySelectorAll('[id*=tecla]')
const operadores = document.querySelectorAll('[id*=operador]')


let novoNumero = true;
let operador;
let numeroAnterior;

const operacaoPendente = () => operador !== undefined;

const calcular = () => {
  if(operacaoPendente()) {
    const numeroAtual = parseFloat(display.textContent);
    novoNumero = true;

    const resultado = eval(`${numeroAnterior}${operador}${numeroAtual}`);
    atualizarDisplay(resultado)
    // if(operador == '+') {
    //   atualizarDisplay(numeroAnterior + numeroAtual)
    // }else if(operador == '-'){
    //   atualizarDisplay(numeroAnterior - numeroAtual)
    // }else if(operador == '*'){
    //   atualizarDisplay(numeroAnterior * numeroAtual)
    // }else if(operador == '/'){
    //   atualizarDisplay(numeroAnterior / numeroAtual)
    // }
  }
}

const atualizarDisplay = (texto) => {
  if(novoNumero) {
    display.textContent = texto;  //limpa a tela
    novoNumero = false;
  }else{
    display.textContent += texto;  //concatena
  }
}

// Callback inserirNumero
const inserirNumero = (evento) => atualizarDisplay(evento.target.textContent);

//Evento de click dos numeros chamando a callback inserirNumero
numeros.forEach((numero) => numero.addEventListener('click', inserirNumero))


// Callback selecionarOperador
const selecionarOperador = (evento) => {
  if(!novoNumero) {
    calcular()
    novoNumero = true;
    operador = evento.target.textContent;
    numeroAnterior = parseFloat(display.textContent);
  }
}
//Evento de click dos operadores chamando a callback selecionarOperador
operadores.forEach(operador => operador.addEventListener('click', selecionarOperador))