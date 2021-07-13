'use strict';


const images = [
  {'id':'1', 'url':'./img/chrono.jpg'},
  {'id':'2', 'url':'./img/inuyasha.jpg'},
  {'id':'3', 'url':'./img/tenchi.jpg'},
  {'id':'4', 'url':'./img/tenjhotenge.jpg'},
  {'id':'5', 'url':'./img/yuyuhakusho.jpg'},
  {'id':'6', 'url':'./img/ippo.png'},

]

const containerItems = document.querySelector('#container-items')

//Função que carrega as imagens
const loadImages = (images, containerItems) => {
  images.forEach(image => {
    containerItems.innerHTML += `
      <div class="item">
        <img src="${image.url}">
      </div>
    `
  })
}

loadImages(images, containerItems);

let items  = document.querySelectorAll('.item') // imagens dos slides atual

const previous = () => {
  containerItems.appendChild(items[0]) //AppendChild manda pro final da lista
  items = document.querySelectorAll('.item') // Atualiza a lista
}

const next = () => {
  const lastItem = items[items.length -1]
  containerItems.insertBefore(lastItem, items[0]) //insertBefore
  items  = document.querySelectorAll('.item') // imagens dos slides atual
}

document.querySelector('#previous').addEventListener('click', previous)
document.querySelector('#next').addEventListener('click', next)