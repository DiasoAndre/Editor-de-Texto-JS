console.log('main.js initialized')
let notaAtual

const newPageButton = document.querySelector('#newPageButton') // criando nova página
newPageButton.addEventListener('click',() => {
    salvarButton.style.display = 'flex'
    if(pageLoaded == false){
        drawPage()
    }
    else {
        clearPage()
        drawPage()
    }
    notaAtual = new Nota()
    console.log('Notal Atual')
    console.log(notaAtual.titulo,notaAtual)
    
})

const salvarButton = document.querySelector('#salvarButton') // salvamento de nota
salvarButton.addEventListener('click', () => {
    context = getContext()
    notaAtual.titulo = context[0]
    notaAtual.conteudo = context[1]
    if(notaAtual.titulo == ""){
        alert('Digite o título da nota para salvar')
    }
    else{
        pesquisa = noteSearch(notaAtual.id)
        if(!pesquisa){
            let button = createButton(notaAtual.titulo,notaAtual)
            notaAtual.button = button
        }
        notaAtual.escrever(notaAtual)
    }
    console.log('salvando')
})

