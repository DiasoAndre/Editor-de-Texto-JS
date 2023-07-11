console.log('navigation.js initialized')
let pageLoaded = false
let pageForm = document.querySelector('.page')

function drawPage(){ // desenha a pagina na tela
    const boxAwait = document.querySelector('.boxAwait')
    boxAwait.style.display = 'none'
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
    const boxAwait = document.querySelector('.boxAwait')
    boxAwait.style.display = 'block'
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
    Object.keys(pages).forEach((key) =>{ //key é o posição dos objetos dentro do array
        const nota = pages[key]
        if (notaId == nota.id){
            notaEncontrada = nota
        }
    })
    return notaEncontrada
}

function searchTitulo(tituloDaNota){ // pesquisa uma nota pelo titulo do objeto nota
    let notaEncontrada = false
    Object.keys(pages).forEach((key) =>{ //key é a posição  dos objetos dentro do array
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
    button.innerText = text
    button.addEventListener('click', () => {
        if(pageLoaded == false){
            drawPage()
        }
        updatePage(nota,nota.titulo,nota.conteudo)
        console.log(`update screen, note id: ${notaAtual.id} titulo: ${notaAtual.titulo}`)
    })
    console.log('created button')
    return button
}

function animateCheck(objeto,img,caminhoPadrao){
    objeto.style.animation = 'checkSave 1s'
    if(img&&caminhoPadrao){
        img.src = '../assets/check.png'
    }
    setTimeout(()=>{
        objeto.style.animation = 'none'
        if(img&&caminhoPadrao){
            img.src = caminhoPadrao
        }
    }, 800)
}
function falseCheck(objeto,img,caminhoPadrao){
    objeto.style.animation = 'falseCheck 1s'
    setTimeout(()=>{
        objeto.style.animation = 'none'
    }, 800)
}
