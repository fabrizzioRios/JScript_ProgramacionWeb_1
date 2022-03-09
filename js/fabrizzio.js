
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
