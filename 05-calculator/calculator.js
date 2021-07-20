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
    const numeroAtual = parseFloat(display.textContent.replace(',', '.'));
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
    display.textContent = texto.toLocaleString('BR');  //limpa a tela
    novoNumero = false;
  }else{
    display.textContent += texto.toLocaleString('BR');  //concatena
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
    numeroAnterior = parseFloat(display.textContent.replace(',', '.'));
  }
}
//Evento de click dos operadores chamando a callback selecionarOperador
operadores.forEach(operador => operador.addEventListener('click', selecionarOperador))


const ativarIgual = () => {
  calcular()
  operador = undefined;
}
//Pega o botão igual chamando uma callback ativarIgual
document.getElementById('igual').addEventListener('click', ativarIgual);


const limparDisplay = () => display.textContent = '';

//Pega o botão limparDisplay e chama uma callback limparDisplay
document.getElementById('limparDisplay').addEventListener('click', limparDisplay);


const limparCalculo = () => {
  limparDisplay();
  operador = undefined;
  novoNumero = true;
  numeroAnterior = undefined;
}
//Pega o botão limparCalculo e chama uma callback limparCalculo
document.getElementById('limparCalculo').addEventListener('click', limparCalculo);


const removerUltimoNumero = () => display.textContent = display.textContent.slice(0, -1)
//Pega o botão backspace e chama uma callback backspace
document.getElementById('backspace').addEventListener('click', removerUltimoNumero)


const inverterSinal = () => {
  novoNumero = true;
  //inverte sinal 
  atualizarDisplay(display.textContent * -1)
}
//Pega o botão iverter e chama uma callback inverter
document.getElementById('inverter').addEventListener('click', inverterSinal)


//Existe Decimal ? retorna true quando for diferente de -1 ou false
const existeDecimal = () => display.textContent.indexOf(',') !== -1;

// Verifica se existe valor retornando true ou false
const existeValor = () => display.textContent.length > 0;

const inserirDecimal = () => {
  if(!existeDecimal()) {
    if(existeValor()) {
      atualizarDisplay(',')
    }else{
      autualizarDisplay('0,');
    }
  }
}
document.getElementById('decimal').addEventListener('click', inserirDecimal)



//Capturar tecla do teclado
const mapaTeclado = {
  '0': 'tecla0',
  '1': 'tecla1',
  '2': 'tecla2',
  '3': 'tecla3',
  '4': 'tecla4',
  '5': 'tecla5',
  '6': 'tecla6',
  '7': 'tecla7',
  '8': 'tecla8',
  '9': 'tecla9',
  '/': 'operadorDividir',
  '*': 'operadorMultiplicar',
  '-': 'operadorSubtrair',
  '+': 'operadorAdicionar',
  '=': 'igual',
  'Enter': 'igual',
  'Backspace': 'backspace',
  'c': 'limparDisplay',
  'Escape': 'limparTeclado',
  ',': 'decimal',
}

const mapearTeclado = (evento) => {
  const tecla = evento.key;

  document.getElementById(mapaTeclado[tecla]).click();
}
//pegando evento do teclado e chamando uma callback
document.addEventListener('keydown', mapearTeclado)
