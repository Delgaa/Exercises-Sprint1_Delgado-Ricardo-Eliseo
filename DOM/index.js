// Punto 1
const $titulo = document.getElementById("title_frutas")
console.log($titulo)

// Agrege estilo al h2 "Ejercicios de DOM"
const $tituloEjercio = document.querySelector("h2")
console.log($tituloEjercio)
$tituloEjercio.classList = ("font-bold text-2xl py-4")

// Punto 2
const tituloPrincipal = "Frutas"
$titulo.innerText = tituloPrincipal
$titulo.classList = ("font-bold text-2xl py-4")

// Punto 3
const $cambiarColor = document.querySelectorAll(".header_foter")
console.log($cambiarColor)
const color = " bg-orange-500"
$cambiarColor[0].className = color
$cambiarColor[1].className = color

// Punto 4
const $texto_p = document.querySelector("footer>p")
const miNombre = "Delgado, Ricardo Eliseo - Cohort N 53"
console.log($texto_p)
$texto_p.innerText = miNombre

// Punto 5
const $main_div = document.querySelector("main")
console.log($main_div)
const nuevoDiv = "<div id = 'contenedor'></div>"
$main_div.innerHTML += nuevoDiv
$main_div.className = " gap-4 pb-7"

const $capturadorDiv = document.getElementById("contenedor")
console.log($capturadorDiv)
$capturadorDiv.className = " flex flex-wrap justify-center gap-4 w-3/4"

// Punto 6
function tarjeta(nombres, fotos, descripciones) {
    return `<section class = 'flex flex-col justify-around items-center shadow-xl border border-solid border-[rgba(0, 0, 0, 0.507)] rounded-2xl w-60 h-72'>
        <img class = ' h-32 object-contain' src = '${fotos}' alt="${nombres}">
        <h3 class = " font-bold">${nombres}</h3>
        <p class = "text-center w-11/12">${descripciones}</p>
    </section>`
}

// Punto 7
function tarjetaFrutas(frutas_p) {
    let tarjetas = ""
    for (const fruta of frutas_p) {
        tarjetas += tarjeta(fruta.nombre, fruta.foto, fruta.descripcion)
    }
    return tarjetas
}

// Punto 8
$capturadorDiv.innerHTML = tarjetaFrutas(frutas)

// Punto 9
const divLista = "<div class= 'flex flex-col items-center' id = 'lista'></div>"
$main_div.innerHTML += divLista

const $lista = document.getElementById("lista")
console.log($lista)

$lista.innerHTML = `<h2 class = "font-bold text-xl py-4"> Frutas Dulces </h2>`

// Punto 10
let crearListaDesordenada = function (listaFrutas, elemento) {
    const $crearUl = document.createElement("ul")
    $crearUl.classList.add("list-disc", "pl-9")
    const fragment = document.createDocumentFragment()
    for (const listaFruta of listaFrutas) {
        if (listaFruta.esDulce) {
            const listaFinalFruta = crearLista(listaFruta.nombre)
            fragment.appendChild(listaFinalFruta)
        }
    }
    $crearUl.appendChild(fragment)
    elemento.appendChild($crearUl)
}
function crearLista(fruta_nombre){
    const $crearLi = document.createElement("li")
    $crearLi.textContent = fruta_nombre
    return $crearLi
}

// Punto 11
crearListaDesordenada(frutas, $lista)
