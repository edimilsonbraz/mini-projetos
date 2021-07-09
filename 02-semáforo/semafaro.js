// ===================SOLUÇÃO 1=======================================================
// const img = document.querySelector('img')

// const buttonRed = document.getElementById('red')
// const buttonYellow = document.getElementById('yellow')
// const buttonGreen = document.getElementById('green')
// const buttonAutomatic = document.getElementById('automatic')

// function red() {
//   img.src = './img/vermelho.png'
// }

// function yellow() {
//   img.src = './img/amarelo.png'
// }

// function green() {
//   img.src = './img/verde.png'
// }

// function automatic() {
//   img.src = './img/vermelho.png'
//   img.src = './img/amarelo.png'
//   img.src = './img/verde.png'
// }



// buttonRed.addEventListener('click', red)
// buttonYellow.addEventListener('click', yellow)
// buttonGreen.addEventListener('click', green)
// buttonAutomatic.addEventListener('click', automatic)



// ===================SOLUÇÃO 2=======================================================
const img = document.querySelector('img')
const buttons = document.getElementById('buttons')
let colorIndex = 0;
let intervalId = null;


const trafficLight = (event) => {
  stopAutomaric();
  turnOn[event.target.id]();

}

const nextIndex = () => colorIndex = colorIndex < 2 ? ++colorIndex : 0
  // if(colorIndex < 2) {
  //   colorIndex++
  // }else{
  //   colorIndex = 0;
  // }

const stopAutomaric = () => {
  clearInterval(intervalId)
}

const changeColor = () => {
  const colors = ['red', 'yellow', 'green']
  const color = colors[colorIndex]
  turnOn[color]();
  nextIndex();
}

const turnOn = {
  'red':        () => img.src = './img/vermelho.png',
  'yellow':     () => img.src = './img/amarelo.png',
  'green':      () => img.src = './img/verde.png',
  'automatic':  () => intervalId = setInterval(changeColor, 1000) // Callback
}

buttons.addEventListener('click', trafficLight) // Callback
