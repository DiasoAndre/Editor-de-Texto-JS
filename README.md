# Editor-de-Texto-JS

O projeto é um editor de texto feito com *HTML CSS e Javascript*

As notas são salvas somente quando a página está aberta, não há banco de dados

# Estrutura

Criei uma classe Nota que responsável por criar um objeto contendo as informações para navegar entre as notas criadas.

Atributos:
  - id: id da nota
  - titulo: titulo da nota
  - conteudo: conteudo da nota
  - button: o botão responsável por carregar a nota na tela

Array:

    let pages = [
    {
      id: 0,
      titulo: 'TESTE',
      conteudo: 'TESTE',
      button: 'buttonNota'
    }]

O objeto nota só é criado quando a função de click do botao "newPageButton" é executada, esse objeto é um escopo para receber o objeto escrito no array.
O que significa que ele recebe diversos valores, diversas notas.

Esses objetos são salvos no array *pages* com o método **.push()**.

Como as notas são carregadas na tela?

No Script main.js estão os evento de click, quando uma nota é salva, um método **.escrever()** verifica se a nota já foi salva no array e cria um botão com o
método chamado no escopo da classe do objeto, que cria um botão e atribui esse botão a sua nota
