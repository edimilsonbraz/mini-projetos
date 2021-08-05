## Instruções Passo a Passo

1) Identificar os Buttons e display no HTML com id's respectivamente.

2) Capturar os buttons(querySelectorAll) com js e adicionar evento de click com forEach e addEventListener chamando uma 
callback "inserirNumero.

3) Capturar o Display(getElementById) jogando em uma variavel.

4) Na callback "inserirNumero" passe o evento entre () com arrow function chamando a 
function "display".textContent = evento

5) Criar um outro método(atualizarDisplay) no lugar de "display" pq existem outras teclas que 
tbm irão escrever no display.

6) atualizarDisplay recebe um text + arrow function, pega display+textContent = texto

7) ja estará escrevendo no display, para concatenar numeros é só colocar um sinal de += texto

8) Capturar os operadores(querySelectorAll) com js e adicionar evento de click com forEach e addEventListener 
chamando uma callback "selecionarOperador.

9) Criar uma estratégia que ao clicar em um numero e depois em um operador ele não concatene, limpe a tela deixe inserir 
um próximo numero para calcular.
  * Então crie uma variavel "novoNumero" = true;
  * Em atualizarDisplay crie um if ( novoNumero) então .... e novoNumero vire false ... else concatene

10) A calculadora tem que guardar na memória o numero e operador clicado.
    * Então crie uma variavel "operador" vazio, para guardar o operador
    * Então crie uma variavel "numeroAnterior" vazio, para guardar o numeroAnterior

11) Crie uma Arrow Function "selecionarOperador" com novoNumero = true e operador com target e textC para saber onde
foi clicado e numeroAnterior = display.textC
  * Logica: se (!novoNumero) ai faz tudo ai em cima
  * Chame tbm a function "Calcular()"

12) **Function calcular()**
    * Dentro dela irá tem uma function "operacaoPendente()" se tiver irá calcular
    * numeroAtual = display.textC
    * Verificar qual operador está sendo usado "if(operador == '+') entao atualizarDisplay(numeroAnterior + numeroAtual)
    * Pra funcionar tem que criar a "operacaoPendente"

**Somando**
13) Na própria operacaoPendente com arrow function irá verificar se operador !== de undefinied
    * Em calcular() passe o numeroAtual pra "parseFloat"
    * EM selecionarOperador() em numeroAnterior para float
    * Em calcular passe novoNumero = true;
    * Faça a verificação "se operador é igual '+' se sim chame atualizaDisplay( nAnterior + nAtual)

**subtraindo** (32:00 min)
14) Continuação da condição acima.
    * se operador = '-' entao chama atualizaDisplay(nAnterior - nAtual)

**subtraindo** (32:44 min)
15) Continuação da condição acima.
    * se operador = '*' entao chama atualizaDisplay(nAnterior * nAtual)

**subtraindo** (32:50 min)
16) Continuação da condição acima.
    * se operador = '/' entao chama atualizaDisplay(nAnterior / nAtual)

**botão de igual** (36:42 min)
17) captura o botão pelo id(getElement...) e adicionar evento de click chamando uma callback (ativarIgual)
    * Dentro dessa função chame a função calcular();
    * zere o operador() = undefinied

**botão de apaguarDisplay** (39:16 min)
18) captura o botão "limpar" pelo id(getElement...) e adicionar evento de click chamando uma callback (limparDisplay)
    * Dentro da funçao o display.textContext receberá vazio.

**botão de limparCalculo** (41:05)
19) captura o botão "limparCalculo" pelo id(getElement...) e adicionar evento de click chamando uma callback (limparCalculo)
    * chame limpar display()
    * limpe o operador
    * novoNumero = true;
    * limpe o numeroAnterior 

**botão e backSpace** (43:30)
20) captura o botão "backSpace" pelo id(getElement...) e adicionar evento de click chamando uma callback (removerUltimoNumero)
    * dentro da função chame display.textContext recebe ele mesmo + slice(0, -1)

**botãoIverteSinal** (46:00 min)
21) captura o botão "inverter" pelo id(getElement...) e adicionar evento de click chamando uma callback (inverterSinal)
    * novoNumero = true;
    * A função chama atualizaDisplay(display.textContent * -1)

**botãoVirgula** (48:48 min)
22) captura o botão "decimal" pelo id(getElement...) e adicionar evento de click chamando uma callback (inserirDecimal)
    * Dentro da função faça uma verificação(if)
    * Se não existe decimal () faça ... se existeValor() chame atuliarDIsplay(',')
    * Senão faça ... chame atualizarDisplay('0,');
    *Tem que criar a variável existeDecimal = display.textContent.indexOf(',') !== -1
    * Tem que criar a variavel existeValor = display.textContent > 0;

**Resolver Calculos Com Virgula** (54:20 min)
23) 
    * Na função calcular() o numeroAtual tem receber o metodo .replace(',', '.')
    * Na função selecionarOperador() o numeroAnterior tem que receber o metodo .replace(',','.')
    * Na função atualizarDisplay o texto recebo o método .toLocaleString('BR')

**Funcionar pelo teclado** (58:50 min)
24) 
    * Criar um objeto "mapaTeclado" com os botoes do teclado referenciando o nome dos ids correspondentes
    * Chame um evento de teclado "keydown" chamando uma callback mapearTeclado
    * Nessa funçao mapearTeclado tem que receber o evento como argumento .key
    * criar uma variavel "tecla" jogando evento.key
    * capture mapaTeclado pelo getElementById(mapaTeclado[tecla]).click()
    *....