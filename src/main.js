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
})
let img_save = document.querySelector('#img_save')
const salvarButton = document.querySelector('#salvarButton') // salvamento de nota
salvarButton.addEventListener('click', () => {
    let context = getContext()
    notaAtual.titulo = context[0]
    notaAtual.conteudo = context[1]
    if(notaAtual.titulo == ""){
        alert('Digite o título da nota para salvar')
        falseCheck(salvarButton)
    }
    else{
        let pesquisa = noteSearch(notaAtual.id)
        if(!pesquisa){
            let button = createButton(notaAtual.titulo,notaAtual)
            notaAtual.button = button
        }
        notaAtual.escrever(notaAtual)
        let caminho = '../assets/save.png'
        animateCheck(salvarButton,img_save,caminho)
    }
})

const delButton = document.querySelector('#delButton')
delButton.addEventListener('click', () =>{
    del(notaAtual)
    clearPage()
    
})
