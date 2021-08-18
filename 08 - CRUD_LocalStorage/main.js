'use strict';

//insere class active
const openModal = () => document.getElementById('modal').classList.add('active')

//remove class active
const closeModal = () => document.getElementById('modal').classList.remove('active')



// Objeto Client
const tempClient = {
  nome: "Nicolas",
  email: "nicolas@gmail.com",
  celular: "61988776600",
  cidade: "Brasilia"
}

const getLocalStorage = () => JSON.parse(localStorage.getItem('db_client')) ?? []
const setLocalStorage = (dbClient) => localStorage.setItem("db_client", JSON.stringify(dbClient))


// CRUD - Delete
const deleteClient = (index) => {
  const dbClient = readClient()
  dbClient.splice(index, 1)
  setLocalStorage(dbClient)
}

// CRUD - Update
const updateClient = (index, client) => {
  const dbClient = readClient()
  dbClient[index] = client
  setLocalStorage(dbClient)
} 


// CRUD - Read 
const readClient = () => getLocalStorage()

// CRUD - Create 
const createClient = (client) => {
  const dbClient = getLocalStorage() //lendo o LocalStorage
  dbClient.push(client)
  setLocalStorage(dbClient)
}


// Eventos
document.getElementById('cadastrarCliente').addEventListener('click', openModal)

document.getElementById('cadastrarCliente').addEventListener('click', closeModal)

