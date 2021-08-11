'use strict';


let banco = [
{'tarefa': 'Estudar JS', 'status': ''},
{'tarefa': 'Lavar Carro', 'status': 'checked'},
{'tarefa': 'Assistir Filme', 'status': 'checked'},

];

//Cria estrutura do item na tela
const criarItem = (tarefa, status='') => {
  const item = document.createElement('label')
  item.classList.add('todo__item')
  item.innerHTML = 
  `
    <input type="checkbox" ${status}>
    <div>${tarefa}</div>
    <input type="button" value="X">
  `
  document.getElementById('todoList').appendChild(item)
}


const limparTarefas = () => {
  const todoList = document.getElementById('todoList')
  while (todoList.firstChild) {
    todoList.removeChild(todoList.lastChild)
  }
}


const atualizarTela = () => {
  limparTarefas()
  banco.forEach(item => criarItem(item.tarefa, item.status));
}


const inserirItem = (evento) => {
  const tecla = evento.key;
  const texto = evento.target.value;
  if(tecla === 'Enter') {
    banco.push({'tarefa': texto, 'status': ''})
    atualizarTela();
    evento.target.value =""; // limpa o input
  }
}


//QUANDO ALGUM DIGITAR E CLICAR ENTER SERÁ INSERIDO UMA TAREFA
document.getElementById('newItem').addEventListener('keypress', inserirItem)


atualizarTela()