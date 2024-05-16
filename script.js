// document.addEventListener("DOMContentLoaded" , () => {alert("Hello GamificaAI")})

// alert("Hello GamificaAI")
// let menu = document.querySelector("#menu")

let menu = document.getElementById("menu")
let iconeBarras = document.getElementById("icone-barras")
let iconeX = document.getElementById("icone-x")


function abrirFecharMenu() {

    // se o menu esta fechado

    if (menu.classList.contains("menu-fechado")) {

        // abrir o menu

        menu.classList.remove("menu-fechado")

        // mostrar icone x

        iconeX.style.display = "inline"

        // esconder icone barras

        iconeBarras.style.display = "none"

    } else {

        // fechar o menu

        menu.classList.add("menu-fechado")

        // esconder icone x

        iconeX.style.display = "none"

        // Mostrar icone Barras

        iconeBarras.style.display = "inline"
    }
}

window.onresize = () => {
    menu.classList.remove("menu-fechado")
    iconeX.style.display = "inline"
    iconeBarras.style.display = "none"
}

// window.onresize = function () {
//     menu.classList.remove("menu-fechado")
//     iconeX.style.display = "inline"
//     iconeBarras.style.display = "none"
// }

// funcao carrosel

let slides = [
    'primeiro-banner',
    'segundo-banner',
    'terceiro-banner'
]

// let ultimoItem = slide[slides.length - 1]

let slideAtual = 0

let numeroSlides = slides.length

let banner = document.querySelector(".banner")

banner.classList.add(slides[slideAtual])

const mostrarProximoSlide = () => {
    // Remove slide anterior
    banner.classList.remove(slides[slideAtual])

    if (slideAtual < (numeroSlides - 1)) {
        slideAtual++
        console.log("slideAtual++");

    } else {
        slideAtual = 0
    }

    // if(slideAtual == slides.indexOf(ultimoItem) ) {

    //     slideAtual++

    // } else {
    //     slideAtual = 0
    // }



// Muda a posicao da lista de slides, para mostrar o slideAtual

// Renderiza o slideAtual
banner.classList.add(slides[slideAtual])
}


const mostrarSlideAnterior = () => {
    // Remove slide anterior
    banner.classList.remove(slides[slideAtual])

    if (slideAtual > 0) {
        slideAtual--

    } else {
        slideAtual = numeroSlides - 1
    }

    // Muda a posicao da lista de slides, para mostrar o slideAtual

    // Renderiza o slideAtual
    banner.classList.add(slides[slideAtual])


}

const selecionarSlide = (indiceSlide) => {
    slides.forEach( slide => banner.classList.remove(slide))

    slideAtual = indiceSlide    

    banner.classList.add(slides[indiceSlide])
}

let  listaCases = []

const renderizarCases = () => {
    let elementoLista = document.getElementById("lista-cards")

    // Template Strings

    let template = ""

    listaCases.forEach( cardCase => {
        template += `<div class="card">
        <img src="${cardCase.imagem}" alt="">
        <p>${cardCase.descricao}</p>
        <button>Ver mais</button>

    </div>`
    })

    elementoLista.innerHTML = template
}

const carregarCases = () => {
    // Metodo HTTP GET - Read -> Leitura
    fetch("http://localhost:3000/cases")
    .then( resposta => resposta.json() )
    .then( (dados) => {
        listaCases = dados
        renderizarCases()
    })
}

const solicitarOrcamento = () => {
    // Pegar valores dos inputs
    let valorNome = document.getElementById("campo-nome").value
    let valorEmail = document.getElementById("campo-email").value
    let valorDescricao = document.getElementById("campo-descricao").value

    // Organizar objeto com os valores

    let dadosForm = {
        nome: valorNome,
        email: valorEmail,
        descricao: valorDescricao
    }
    // enviar requisicao para a api
    // 127.0.0.1 = localhost
    // Metodo HTTP POST - Create -> Cadastrar ou criar

    fetch("http://127.0.0.1:3000/solicitacoes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"

        }, 
        body: JSON.stringify(dadosForm)

    })

    .then(resposta => console.log(resposta))
    .catch(erro => console.error(erro))

    // limpar os campos
    // Mostrar alert com msg de sucesso
    // Caso ERRO - alert com msg erro

}