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

