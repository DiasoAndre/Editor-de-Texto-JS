console.log('navigation.js initialized')
let pageLoaded = false
let pageForm = document.querySelector('.page')
function drawPage(){ // desenha a pagina na tela
    const input_title = document.createElement('input')
    input_title.type = 'text'
    input_title.placeholder = 'New Note'
    input_title.classList.add('input_titulo')  
    pageForm.appendChild(input_title)
    const textArea = document.createElement('textarea')
    textArea.placeholder = 'Your Note'
    pageForm.append(textArea)
    textArea.classList.add('conteudo')
    notaAtual = undefined
    pageLoaded = true
}
function clearPage(){
    const input_title = document.querySelector('.input_titulo')
    const textArea = document.querySelector('.conteudo')
    input_title.remove()
    textArea.remove()
    pageLoaded = false
}
function updatePage(notaCarregar,titulo,conteudo){ // atualiza o contexto da pagina
    const input_titulo = document.querySelector('.input_titulo')
    const textArea = document.querySelector('.conteudo')
    notaAtual = notaCarregar
    input_titulo.value = titulo
    textArea.value = conteudo
}

function noteSearch(notaId){ // pesquisa uma nota pelo id do objeto nota
    let notaEncontrada = false
    Object.keys(pages).forEach((key) =>{ //key é o range dos objetos dentro do array
        const nota = pages[key]
        if (notaId == nota.id){
            notaEncontrada = nota
        }
    })
    return notaEncontrada
}

function searchTitulo(tituloDaNota){ // pesquisa uma nota pelo titulo do objeto nota
    let notaEncontrada = false
    Object.keys(pages).forEach((key) =>{ //key é o range dos objetos dentro do array
        const nota = pages[key]
        if (tituloDaNota == nota.titulo){
            notaEncontrada = nota
        }
    })
    return notaEncontrada
}

const bar = document.querySelector(".bar")
function createButton(text,nota){
    const button = document.createElement('button')
    bar.appendChild(button)
    const image = document.createElement('img')
    image.src = '../assets/doc.png'
    button.appendChild(image)
    button.innerText = text
    button.addEventListener('click', () => {
        clearPage()
        drawPage()
        updatePage(nota,nota.titulo,nota.conteudo)
        console.log(`update screen, note ${notaAtual}`)
    })
    console.log('created button')
    return button
}
