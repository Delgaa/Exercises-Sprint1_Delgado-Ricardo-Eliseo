const $titulo = document.getElementById("title_frutas")
console.log($titulo)

const $tituloEjercio = document.querySelector("h2")
console.log($tituloEjercio)
$tituloEjercio.classList = ("font-bold text-2xl py-4")

const tituloPrincipal = "Frutas"
$titulo.innerText = tituloPrincipal
$titulo.classList = ("font-bold text-2xl py-4")

const $cambiarColor = document.querySelectorAll(".header_foter")
console.log($cambiarColor)
const color = " bg-orange-500"
$cambiarColor[0].className = color
$cambiarColor[1].className = color

const $texto_p = document.querySelector("footer>p")
const miNombre = "Delgado, Ricardo Eliseo - Cohort N 53"
console.log($texto_p)
$texto_p.innerText = miNombre

const $main_div = document.querySelector("main")
console.log($main_div)
const nuevoDiv = "<div id = 'contenedor'></div>"
$main_div.innerHTML += nuevoDiv


const $capturadorDiv = document.getElementById("contenedor")
console.log($capturadorDiv)

function tarjeta(nombres, fotos, descripciones) {
    return `<section class = 'flex flex-col justify-around items-center shadow-xl border border-solid border-red rounded-2xl w-60 h-72'>
        <img class = ' h-32 object-contain' src = '${fotos}' alt="${nombres}">
        <h3 class = " font-bold">${nombres}</h3>
        <p class = "text-center w-11/12">${descripciones}</p>
    </section>`
}

function tarjetaFrutas(frutas_p) {
    let tarjetas = ""
    for (const fruta of frutas_p) {
        tarjetas += tarjeta(fruta.nombre, fruta.foto, fruta.descripcion)
    }
    return tarjetas
}
$capturadorDiv.className = " flex flex-wrap justify-center gap-4 w-3/4"
$main_div.className = " gap-4 pb-7"
$capturadorDiv.innerHTML = tarjetaFrutas(frutas)

const divLista = "<div id = 'lista'></div>"
$main_div.innerHTML += divLista

const $lista = document.getElementById("lista")
console.log($lista)


$lista.innerHTML = `<h2 class = "font-bold text-xl py-4"> Frutas Dulces </h2>`

let crearListaDesordenada = function (listaFrutas, elemento) {
    const $crearUl = document.createElement("ul")
    elemento.innerHTML += ""
    const fragment = document.createDocumentFragment()
    for (const listaFruta of listaFrutas) {
        if (listaFruta.esDulce) {
            const listaFinalFruta = crearLista(listaFruta.nombre)
            fragment.appendChild(listaFinalFruta)
        }
    }
    elemento.appendChild(fragment)
}
function crearLista(fruta_nombre){
    const $crearLi = document.createElement("li")
    $crearLi.textContent = fruta_nombre
    $crearLi.classList.add("pl-5")
    return $crearLi
}
crearListaDesordenada(frutas, $lista)
