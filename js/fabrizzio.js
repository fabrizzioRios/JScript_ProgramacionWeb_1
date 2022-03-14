
function opb (o) {
    if (o == "+" || o == "-" || o == "*") {
        n1 = parseInt(prompt("Introduzca el primer numero: "))
        n2 = parseInt(prompt("Introduzca el segundo numero: "))

    switch (o) {
        case "+":
            alert("La suma es: " + (n1 + n2));
        break;
        case "-":
            alert("La resta es: " + (n1 - n2));
        break;
        case "*":
            alert("La suma es: " + (n1 * n2));
        break;
    } 
    }else if (o == "rec" || o == "cir") {
        
    switch(o) {
        case "rec": 
        base = parseInt(prompt("Introduza la base de su rectangulo: "))
        lado  = parseInt(prompt("Introduza la longitud del lado de su rectangulo: "))
            alert("El area de su rectangulo: " + (base * lado))
        break;
        case "cir":
            radio = parseInt(prompt("Introduzca la longitud de su radio: "))
            alert("El area de su circulo es: " + (Math.PI * radio ** 2))
        break;
    }} else if (o == "cel" || o == "far"){
        switch(o) {
            case "cel": 
            celsius = parseInt(prompt("Introduzca su temperatura en celsius: "))
            alert("Su temperatura de " + (celsius) + "° en farenheit es: " + ((celsius * 1.8) + 32) + "°")
            break;
            case "far":
                farenheit = parseInt(prompt("Introduzca su temperatura en farenheit: "))
                alert("Su temperatura de " + (farenheit) + "° en celsius es: " + ((farenheit - 32) / 1.8) + "°")
            break;
    }
    }
}

function calificacion_alumno () {
    do {
        var calificacion = parseInt(prompt("Cual es su calificacion?\nIntroduzca una calificacion del 0-100"))
        if (calificacion >= 0 && calificacion <= 100) {
            if (calificacion < 60) {
                alert("Su calificacion de " + calificacion + ", es reprobatoria")
            } else if (calificacion > 60) {
                alert("Su calificacion de " + calificacion + ", es aprobatoria")
            }
        } else if (calificacion < 0) {
            alert("Su calificacion no puede ser negativa o mayor a 100")
        } else if (calificacion > 100) {
            alert("Su calificacion no puede ser mayor a 100")
        }
    } while(calificacion <= 0 || calificacion > 100)
}

function year_alumno () {
    do {
        var edad_alumno = parseInt(prompt("Cual es tu año de nacimiento?\nIntroduzcalo en formato completo (YYYY)"))
        if (edad_alumno > 0 && edad_alumno <= 9999) {
            if (edad_alumno %4 == 0) {
                    alert("El año de nacimiento (" + edad_alumno + "), es bisiesto")
                } else {
                    alert("El año de nacimiento (" + edad_alumno + "), no es bisiesto")
                }
        } else if (edad_alumno < 0 ) {
            alert("El año de nacimiento no puede ser negativo")
        } else if (edad_alumno > 999) {
        alert("El año de nacimiento no puede tener mas de 5 digitos")

        }
    } while (edad_alumno <= 0 || edad_alumno > 9999 )
}

function cantidad_llantas () {
    do {
        var num_llantas = parseInt(prompt("¿Cuantas llantas quiere comprar?\nIntroduzca la cantidad en numeros enteros(0, 1, 2 ... n)"))
        var catalogo_llantas = {
            "cantidad": num_llantas,
            "precio": 300 * num_llantas
        }
        if (num_llantas > 0) {
            if (num_llantas > 6) {
                discount_price = (catalogo_llantas.precio - (120 * catalogo_llantas.cantidad)) 
                alert("El precio de tus llantas es de: " + catalogo_llantas.precio + "\nPrecio con descuento por tener mas de 6 llantas es: " + discount_price)
            } else if (num_llantas < 6) {
                alert("El precio de tus llantas es de: " + catalogo_llantas)
            }
        } else if (num_llantas < 0) {
            alert("La cantidad de llantas no puede ser negativa")
        }
    } while (num_llantas < 0 )
}

function choice (num) {
    switch (num){
        case 1:
            calificacion_alumno()
        break;
        case 2:
            year_alumno()
        break;
        case 3:
            cantidad_llantas()
        break;
    }
}

function choice2 () {
    do {
        var rol = prompt("Introduce tu rol")
        var horas = parseInt(prompt("Introduce el numero de horas que trabajaste en la semana"))
        
        if (horas > 0){
            switch (rol) {
                case "I":
                    valor = horas * 68.30
                    alert("Tu sueldo es de: $" + (valor))
                    impuestos(valor)
                break;
                case "S":
                    valor = horas * 75.80
                    alert("Tu sueldo es de: $" + (valor))
                    impuestos(valor)

                break;
                case "G":
                    valor = horas * 75.80
                    alert("Tu sueldo es de: $" + (valor))
                    impuestos(valor)

                break;
                case "D":
                    valor = horas * 98.40
                    alert("Tu sueldo es de: $" + (valor))
                    impuestos(valor)

                break;
        }
        }
    } while (horas < 0)
}

function impuestos (valor) {
    if (valor >= 3500) {
        alert("Tu sueldo tiene un 15% de descuento en impuestos.\nTu sueldo total es: $" + (valor * .85))
    } else if (valor < 3500 && valor > 0) {
        alert("Tu sueldo tiene un 10% de descuento en impuestos.\nTu sueldo total es: $" + (valor * .90))
    } else if (valor < 0 || valor == 0) {
        alert("Tu sueldo debe ser mayor a 0 para ser valido")
    }
}


function calificaciones_for () {
    total = 0
    n = parseInt(prompt("Introduce la cantidad de calificaciones que quieres registrar:"))
    for (i=0; i<n; i++) {
        grade = parseInt(prompt("Introduzca su calificacion: "))
        total += grade
    }
    alert("Tu promedio en total de las " + n + " calificaciones es de: " + (total/n))
}

function tabla_mult () {
    numero = parseInt(prompt("Introduzca el numero del que desea obtener su tabla de multiplicar:"))
    numero_mul = parseInt(prompt("Introduzca hasta el numero hasta el que desea que aparezca su tabla:"))
    list_numbers = []
    for (i = 0; i < numero_mul; i++) {
        list_numbers.push((numero * i) + 10)
    }
    alert("La tabla de multiplicar de tu numero " + numero + " es: " + list_numbers)
}

function edad_promedio () {
    total = 0
    cant_alumnos = parseInt(prompt("introduzca la cantidad de alumnos:"))
    for (i = 0; i < cant_alumnos; i++) {
        edad_alumno = parseFloat(prompt("Cual es tu edad?"))
        total += edad_alumno
    }
    alert("La edad promedio del grupo es: " + (total/cant_alumnos))
}

function promedio_dosnum () {
    pares = []
    impares = []
    first_num = parseInt(prompt("Introduzca el primer numero"));
    second_num = parseInt(prompt("Introduzca el segundo numero"));
    for (i = first_num + 1; i <= second_num; i++) {
        if (i % 2 == 0) {
            pares.push(i)
        } else if (i % 2 != 0) {
            impares.push(i)
        }
    }
    alert("Numeros pares: " + pares)
    alert("Numeros impares: " + impares)
}

function compra_libro () {
    total = 0
    for ( i=0; i<5; i++) {
        choice3 = prompt("Deseas comprar un libro? ")
        if (choice3 == "Si" || choice3 == "si" || choice3 == "SI" || choice3 == "sI") {
            total += 389.36
        }
    }
    alert("Total a pagar: " + total)
}
