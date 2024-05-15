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

let  listaCases = [
    {
        imagem: "https://unsplash.it/600/400?image=40",
        descricao: "Uma empresa de tecnologia lança um desafio de gamificação onde os funcionarios devem propor e implementar ideias invadoras."
    },
    {
        imagem: "https://unsplash.it/600/400?image=20",
        descricao: "Uma empresa de consultoria cria uma narrativa interariva de gamificação para seu programa de treinamento."
    },
    {
        imagem: "https://unsplash.it/600/400?image=33",
        descricao: "Uma empresa de vendas implementa uma competição gamificada entre equipe que competem pelo topo do ranking"
    },
    {
        imagem: "https://unsplash.it/600/400?image=98",
        descricao: "Uma empresa de saúde promove o bem-estar dos funcionários através de um desafio de gamificação de condicionamento físico"
    },

]

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