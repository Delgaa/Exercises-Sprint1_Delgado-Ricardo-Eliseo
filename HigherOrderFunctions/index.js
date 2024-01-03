console.log(beers);
// Punto 1

/* function printMessage( message ) {
    console.log( message )
} */

const printMessage = (message) => console.log(message)

// Punto 2

/* function createMultplication (number1, number2) {
    let result = number1 * number2
    return result
} */

const createMultplication = (number1, number2) => {
    let result = number1 * number2
    return result
}

// Punto 3
const array = [ 1,2,3,4,5,6,7,8,9 ]

let apliMap = array.map(createMultplication)
console.log(apliMap)

//Punto  4
let newBeers = (arrays) => arrays.toSorted((a, b) => b.abv - a.abv).slice(0, 10)
console.log(newBeers(beers))

// Punto 5
let ibuBeers = (arrays) => arrays.toSorted((a, b) => a.ibu - b.ibu).slice(0, 10)
console.log(ibuBeers(beers))

// Punto 6
let nameBeers = (beers_p, name) => beers_p.find(beer => name == beer.name)
console.log(nameBeers(beers, "Devine Rebel (w/ Mikkeller)"))

// Punto 7
let equalsIbu = (beers_p, ibu_p) => {
    let viewBeersIbu = beers_p.find(beer => ibu_p == beer.ibu )
    if (viewBeersIbu != undefined) {
        return viewBeersIbu
    } else {
        return`There is no beer with an ibu of ${ibu_p}.`
    }
}
console.log(equalsIbu(beers, 45))

// Punto 8
let indexName = (beersName) => {
    let ubicationName = beers.findIndex(beer => beersName == beer.name)
    if (ubicationName != -1) {
        return ubicationName
    } else {
        return `${beersName} does not exist.`
    }
}
console.log(indexName("Devine Rebel (w/ Mikkeller)"))

// Punto 9
let beersNewArray = (beers_p, ibu_p) =>{
    let notExdeedIbu = beers_p.filter(beer => beer.ibu < ibu_p)
    let newArrayBeers = []
    let newObjetBeers = {}
    for (const notExdeed of notExdeedIbu) {
        newObjetBeers = {
            name: notExdeed.name,
            abv: notExdeed.abv,
            ibu: notExdeed.ibu
        }
        newArrayBeers.push(newObjetBeers)
    }
    return newArrayBeers
}
console.log(beersNewArray(beers, 40))

// Punto 10
let orderedBears = (beers_p, propiety, boolean) => {
    const ordened = beers_p.filter(beer => beer[propiety])
    .toSorted((a, b) =>{
        if (a[propiety] < b[propiety]) {
            return -1
        }
        if (a[propiety] > b[propiety]) {
            return 0
        }
    })
    if (boolean) {
        return ordened.slice(0,10)
    }
    return ordened.reverse().slice(0,10)
}
console.log(orderedBears(beers, "name", true))

// Punto 11
const $capturadorTbody = document.getElementById("tableBody")

let createTbody = (beers_p) =>{
    return `
    <tr>
        <td class="border border-solid border-white text-white text-center p-1">${beers_p.name}</td>
        <td class="border border-solid border-white text-white text-center p-1">${beers_p.abv}</td>
        <td class="border border-solid border-white text-white text-center p-1">${beers_p.ibu}</td>
    </tr>`
}

let createTable = (beers_p, $iden) => {
    let element = ""
    beers_p.forEach(beer => element += createTbody(beer))
    $iden.innerHTML = element
}

createTable(beers, $capturadorTbody)