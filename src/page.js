let pages = []
  class Nota {
    constructor(titulo, conteudo) {
      this.id = pages.length 
      this.titulo = titulo;
      this.conteudo = conteudo;
      this.button
    }
    escrever(notaAtual){
      let notaEncontrada = noteSearch(this.id)
      if(notaEncontrada != false){ 
        pages[notaEncontrada.id].titulo = this.titulo 
        pages[notaEncontrada.id].conteudo = this.conteudo
        this.button.innerText = this.titulo
      }
      else{
        pages.push(notaAtual)
      }
    }
    
  }
  
function getContext(){
    const inputTitulo = document.querySelector('.input_titulo')
    const textArea = document.querySelector('.conteudo') // captura o contexto da página
    let titulo = inputTitulo.value
    let conteudo = textArea.value
    let context = [titulo,conteudo]
    return context
}
function del(nota){ // função para deletar uma nota
  nota.button.style.display = 'none'
  pages.splice(pages[nota])
}
