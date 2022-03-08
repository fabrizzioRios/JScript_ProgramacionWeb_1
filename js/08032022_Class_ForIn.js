const object = { a: 1, b: 2, c: 3 };

var num1 = parseInt(("Introduce el numero 1"))
var num2 = parseInt(prompt("Introduce el numero 2"))


for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}

var list = [1, 2, 3, 4, 5]
var int = 1
for (var property in list) {
    console.log(property)
}


function loop () {
    var loop = true

    while (loop) {
        for (var property in list) {
            console.log(property)
            if (property != 4) {
                loop = false
                console.log("Tu loop esta activo")
            }else if (property == 4) {
                loop = false
                console.log("Tu loop ha terminado")
            }
        }
    }
    console.log("Tu funcion de loop")
}

function sum (num1, num2) {
    if (num1 >= 18 && num2 < 18) {
        console.log("Tu numero 1 es mayor al numero 2")
        return num1
    } else if (num1 >= 18 && num2 >= 18) {
        console.log("Ambos numeros son mayores 18")
    } else if (num1 < 18 && num2 < 18) {
        console.log("Ninguno de tus numeros son mayores 18")
    } else if (num1 != 18 && num2 != 18) {
        console.log("Ninguno de tus son mayores 18")
    }
}

loop()

sum(num1, num2)