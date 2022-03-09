
var edad = 10
let arrayNumero = [{
    "name": "luis1",
    "edad": "16"
},{
    "name": "luis2",
    "edad": "17"
}, {
    "name": "luis3",
    "edad": "18"
}]

let person = {
    "name": "luis",
    "edad": 16
}

for (index = 0; index < arrayNumero.length; index++) {
    console.log(arrayNumero[index]);
}

for (let variable in person) {
    console.log(variable + " is " + person[variable])
}

if (true) {
    let arrayNumero = [10, 20, 30, 40]
    var edad = 20
    console.log(edad)
    console.log(arrayNumero)
}
console.log(edad)

for (let hola in arrayNumero) {
    if (arrayNumero) {

    }
    console.log((arrayNumero[hola].name))
}
