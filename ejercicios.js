/*
Escribir una función llamada contrasenaValida que reciba un string y retorne true si el string es igual a
"2Fg(jjbFsuj" o "eoZiugBf&g6". De lo contrario debe retornar false. Una vez que hayas terminado de
implementar la función, probar su funcionamiento con las siguientes llamadas:
console.log(contrasenaValida("2Fg(jjbFsuj ")) // true
console.log(contrasenaValida("eoZiugBf&g6")) // true
console.log(contrasenaValida("hola")) // false
console.log(contrasenaValuda("")) // false

*/
function contrasenaValida(string) {
    if (string === "2Fg(jjbFsuj" || string === "eoZiugBf&g6") {
        return true
    } else {
        return false
    }
}

console.log(contrasenaValida("2Fg(jjbFsuj"))
console.log(contrasenaValida("eoZiugBf&g6"))
console.log(contrasenaValida("hola"))
console.log(contrasenaValida(""))

console.log("--------")
/*
 Escribir una función llamada calcularImpuestos que reciba dos argumentos numéricos: edad e ingresos.
Si edad es igual o mayor a 18 y los ingresos son iguales o mayores a 1000 debe retornar ingresos * 13%.
De lo contrario retornar 0. Una vez que hayas terminado de implementar la función, probar su
funcionamiento con las siguientes llamadas:
console.log(calcularImpuestos(18, 1000)) // 130
console.log(calcularImpuestos(40, 10000)) // 1300
console.log(calcularImpuestos(17, 5000)) // 0
console.log(calcularImpuestos(30, 500)) // 0

*/
function calcularImpuestos(edad, ingresos) {
    if (edad >= 18 & ingresos >= 1000) {
        return ingresos * 13 / 100
    } else {
        return 0
    }
}
console.log(calcularImpuestos(18, 1000)) // 130
console.log(calcularImpuestos(40, 10000)) // 1300
console.log(calcularImpuestos(17, 5000)) // 0
console.log(calcularImpuestos(30, 500)) // 0


console.log("--------")
/*
El índice de masa corporal (IMC), o BMI por sus siglas en inglés, es un valor que determina la cantidad de
grasa de una persona. El BMI se calcula con la siguiente formula: peso / altura^2.
Escribir una función llamada bmi que reciba dos argumentos: peso y altura, y retorne un string con las
siguientes posibilidades:
• "Bajo de peso" si el BMI < 18.5
• "Normal" si está entre 18.5 y 24.9
• "Sobrepeso" si está entre 25 y 29.9
• "Obeso" si es igual o mayor a 30
Una vez concluido el ejercicio, probar su funcionamiento con las siguientes llamadas:
console.log(bmi(65, 1.8)) // "Normal"
console.log(bmi(72, 1.6)) // "Sobrepeso"
console.log(bmi(52, 1.75)) // "Bajo de peso"
console.log(bmi(135, 1.7)) // "Obeso"
*/
function bmi(peso, altura) {
    let BMI = peso / (altura * altura)
    switch (true) {
        case BMI < 18.5:
            return "Bajo de peso";

        case BMI >= 18.5 && BMI <= 24.9:
            return "Normal";

        case BMI >= 25 && BMI <= 29.9:
            return "Sobrepeso";

        case BMI > 30:
            return "Obeso"
    }


}
console.log(bmi(65, 1.8)) // "Normal"
console.log(bmi(72, 1.6)) // "Sobrepeso"
console.log(bmi(52, 1.75)) // "Bajo de peso"
console.log(bmi(135, 1.7)) // "Obeso"

console.log("-------")

/*
 Escribe una función llamada likes que reciba un número y retorne un string utilizando el formato de K
para miles y M para millones.
Por ejemplo:
• 1400 se convierte en 1K
• 34,567 se convierte en 34K
• 7’456,345 se convierte en 7M.
Si el número es menor a 1000 se debe devolver el mismo número como un string.
Probar el funcionamiento de la función resultante con las siguientes llamadas:
console.log(likes(983)) // "983"
console.log(likes(1900)) // "1K"
console.log(likes(54000)) // "54K"
console.log(likes(120800)) // "120K"
console.log(likes(25222444)) // "25M
*/
let resultado = 0
function likes(numero) {
    if (numero < 1000) {
        return numero
    }
    if (numero < 1000000) {
        resultado = parseInt(numero / 1000)
        return resultado + "K"
    } else if (numero >= 1000000) {
        resultado = parseInt(numero / 1000000)
        return resultado + "M"
    }
}
console.log(likes(983)) // "983"
console.log(likes(1900)) // "1K"
console.log(likes(54000)) // "54K"
console.log(likes(120800)) // "120K"
console.log(likes(25222444)) // "25M

console.log("-------")

/*
 Escribir una función llamada fizzBuzz que reciba un número y retorne un string de acuerdo a lo siguiente:
• "fizz" si el número es múltiplo de 3.
• "buzz" si el número es múltiplo de 5.
• "fizzbuzz" si el número es múltiplo tanto de 3 como de 5.
Si no cumple ninguna de las condiciones anteriores debe retornar el mismo número. Probar el
funcionamiento de la función con las siguientes llamadas:
console.log(fizzBuzz(6)); // "fizz"
console.log(fizzBuzz(20)); // "buzz"
console.log(fizzBuzz(30)); // "fizzbuzz"
console.log(fizzBuzz(8)); // 8
*/
function fizzBuzz(numero) {
    if (numero % 3 == 0) {
        return "fizz"
    } else if (numero % 5 == 0) {
        return "buzz"
    } else if (numero % 3 == 0 & numero % 5 == 0) {
        return "fizzbuzz"
    } else {
        return numero
    }


}
console.log(fizzBuzz(6)); // "fizz"
console.log(fizzBuzz(20)); // "buzz"
console.log(fizzBuzz(30)); // "fizzbuzz"
console.log(fizzBuzz(8)); // 8

console.log("-------")

/*
. Escribir una función llamada contarRango que reciba dos números y retorne la cantidad de números que
hay entre ellos (excluyéndolos):
Nota: Utiliza un ciclo en tu solución. Puedes asumir que el primer número va a ser menor que el
segundo.
Probar el funcionamiento de la función con las siguientes llamadas:
console.log(contarRango(1, 9)) // 7
console.log(contarRango(1332, 8743)) // 7410
console.log(contarRango(5, 6)) // 0

*/

function contarRango(numero1, numero2) {
    let contador = 0
    for (let i = numero2 - 1; i > numero1; i--) {
        contador++
    }
    return contador
}
console.log(contarRango(1, 9)) // 7
console.log(contarRango(1332, 8743)) // 7410
console.log(contarRango(5, 6)) // 0

console.log("-------")

/*
Escribir una función llamada sumarRango que reciba dos argumentos: número inicial y número final. La
función debe retornar la suma de los números en ese rango (incluyéndolos).
Nota: puedes asumir que el número inicial va a ser menor o igual que el número final.
Probar el funcionamiento de la función con las siguientes llamadas:
console.log(sumarRango(0, 10)) // 55
console.log(sumarRango(12, 14)) // 39
console.log(sumarRango(5, 5)) // 0

*/
function sumarRango(numeroInicial, numeroFinal) {

    let suma = 0
    for (let i = numeroFinal; i >= numeroInicial; i--) {

        suma = suma + i

    }
    return suma
}
console.log(sumarRango(0, 10)) // 55
console.log(sumarRango(12, 14)) // 39
console.log(sumarRango(5, 5)) // 0

console.log("-------")
/*
Escribir una función llamada numeroDeAes que reciba un string y retorne el número de veces que
aparece la letra "a". Probar el funcionamiento de la función con las siguientes llamadas:
console.log(numeroDeAes("abracadabra")) // 5
console.log(numeroDeAes("etinol")) // 0
console.log(numeroDeAes("")) // 0
*/

function numeroDeAes(string) {
    let contador = 0
    for (letra of string) {
        if (letra == "a") {
            contador++
        }
    }
    return contador
}
console.log(numeroDeAes("abracadabra")) // 5
console.log(numeroDeAes("etinol")) // 0
console.log(numeroDeAes("")) // 0

console.log("-------")

/*
Escribir una función llamada numeroDeCaracteres que reciba un string y un caracter (un string de un
caracter). La función debe retornar el número de veces que aparece el caracter en el string. Probar el
funcionamiento de la función con las siguientes llamadas:
console.log(numeroDeCaracteres("Hola Mundo", "o")) // 2
console.log(numeroDeCaracteres("MMMMM", "m")) // 0
console.log(numeroDeCaracteres("eeee", e)) // 4
*/

function numeroDeCaracteres(string, caracter) {
    let contador = 0
    for (letra of string) {
        if (letra == caracter) {
            contador++
        }
    }
    return contador
}
console.log(numeroDeCaracteres("Hola Mundo", "o")) // 2
console.log(numeroDeCaracteres("MMMMM", "m")) // 0
console.log(numeroDeCaracteres("eeee", "e")) // 4

console.log("-------")


/*
 Escribir una función llamada sumarArreglo que reciba un arreglo de números y retorne la suma de todos
los elementos. Probar el funcionamiento de la función con las siguientes llamadas:
console.log(sumarArreglo([3, 1, 2])) // 6
console.log(sumarArreglo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])) // 55
console.log(sumarArreglo([])) // 0
*/

function sumarArreglo(arreglo) {
    let suma = 0
    for (let i = 0; i < arreglo.length; i++) {
        suma = suma + arreglo[i]
    }
    return suma
}
console.log(sumarArreglo([3, 1, 2])) // 6
console.log(sumarArreglo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])) // 55
console.log(sumarArreglo([])) // 0

console.log("-------")

/*
Escribir una función llamada multiplicarArreglo que reciba un arreglo de números y retorne la
multiplicación de todos los elementos. Probar el funcionamiento de la función con las siguientes
llamadas:
console.log(multiplicarArreglo([4, 1, 2, 3])) // 24
console.log(multiplicarArreglo([1, 2, 3, 4, 5, 6, 7, 8])) // 40320
console.log(multiplicarArreglo([])) // 1

*/
function multiplicarArreglo(arreglo) {
    let resultado = 1
    for (let i = 0; i < arreglo.length; i++) {
        resultado = resultado * arreglo[i]
    }
    return resultado
}
console.log(multiplicarArreglo([4, 1, 2, 3])) // 24
console.log(multiplicarArreglo([1, 2, 3, 4, 5, 6, 7, 8])) // 40320
console.log(multiplicarArreglo([])) // 1

console.log("-------")
/*
Escribir una función llamada removerCeros que reciba un arreglo de números y retorne un nuevo arreglo
excluyendo los ceros (0). Probar el funcionamiento de la función con las siguientes llamadas:
console.log(removerCeros([0, 1, 0, 2, 0, 3])) // [1, 2, 3]
console.log(removerCeros([9, 3, 6, 4])) // [9, 3, 6, 4]
console.log(removerCeros([0, 0, 0])) // []
*/
function removerCeros(arreglo) {
    let nuevoArreglo = []
    for (valor of arreglo) {
        if (valor != 0) {
            nuevoArreglo.push(valor)
        }
    }
    return nuevoArreglo
}
console.log(removerCeros([0, 1, 0, 2, 0, 3])) // [1, 2, 3]
console.log(removerCeros([9, 3, 6, 4])) // [9, 3, 6, 4]
console.log(removerCeros([0, 0, 0])) // []

console.log("-------")
/*
Escribir una función llamada sumarArreglo que reciba tres argumentos: un arreglo de números, la
posición inicial y la posición final. La función debe retornar la suma de todos los números dentro del
rango (la posición inicial y la posición final, incluyéndolas).
Nota: puedes asumir que la posición inicial va a ser menor o igual a la posición final, y que están dentro
de los límites del arreglo.
Probar el funcionamiento de la función con las siguientes llamadas:
console.log(sumarArreglo([1, 2, 3], 1, 2)) // 5
console.log(sumarArreglo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3, 6)) // 22
console.log(sumarArreglo([7, 8, 9], 0, 0)) // 0

*/
function sumarArreglo(arreglo, posicionInicial, posicionFinal) {

    let suma = 0
    for (let i = posicionInicial; i <= posicionFinal; i++) {
        suma = suma + arreglo[i]
    }
    return suma
}
console.log(sumarArreglo([1, 2, 3], 1, 2)) // 5
console.log(sumarArreglo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3, 6)) // 22
console.log(sumarArreglo([7, 8, 9], 0, 0)) // 0

console.log("-------")

/*
Escribir una función llamada transcribir que reciba un string (una cadena de ADN) y retorne otro string
(su complemento ARN).
Los complementos son los siguientes:
G -> C
C -> G
T -> A
A -> U
Probar el funcionamiento de la función con las siguientes llamadas:
console.log(transcribir("ACGT")) // "UGCA"
console.log(transcribir("ACGTGGTCTTAA")) // "UGCACCAGAAUU"
*/
function transcribir(string) {
    let nuevoArreglo = []
    for (letra of string) {
        if (letra == "G") {
            letra = "C"
            nuevoArreglo.push(letra)
        } else if (letra == "C") {
            letra = "G"
            nuevoArreglo.push(letra)
        } else if (letra == "T") {
            letra = "A"
            nuevoArreglo.push(letra)
        } else if (letra == "A") {
            letra = "U"
            nuevoArreglo.push(letra)
        }
    }
    return nuevoArreglo
}
console.log(transcribir("ACGT")) // "UGCA"
console.log(transcribir("ACGTGGTCTTAA")) // "UGCACCAGAAUU"

console.log("-------")

/*
Escribir una función llamada capitalizar que reciba un string y capitalice la primera letra del string. Probar
el funcionamiento de la función con las siguientes llamadas:
console.log(capitalizar("pedro")) // "Pedro"
console.log(capitalizar("hola mundo")) // "Hola mundo"
console.log(capitalizar("")) // ""

*/
function capitalizar(string) {
    let nuevaPalabra = "";
    let esPrimeraLetra = true;
    for (letra of string) {
        if (esPrimeraLetra) {
            nuevaPalabra += letra.toUpperCase();
            esPrimeraLetra = false;
        } else {
            nuevaPalabra += letra;
        }
    }
    return nuevaPalabra;
}
console.log(capitalizar("pedro")) // "Pedro"
console.log(capitalizar("hola mundo")) // "Hola mundo"
console.log(capitalizar("")) // ""

console.log("-------")

/*
Escribir una función llamada capitalizar que reciba un string y capitalice la primera letra de cada palabra.
Probar el funcionamiento de la función con las siguientes llamadas:
console.log(capitalizar("hola mundo")) // "Hola Mundo"
console.log(capitalizar("make it real")) // "Make It Real"
console.log(capitalizar("")) // ""
*/
function capitalizar(string) {
    let nuevaFrase = "";
    let esInicioDePalabra = true; // Indicador para saber cuándo estamos en el inicio de una palabra

    for (let letra of string) {
        if (esInicioDePalabra && letra !== " ") {
            nuevaFrase += letra.toUpperCase(); // Capitalizamos la primera letra
            esInicioDePalabra = false; // Cambiamos el indicador porque ya no estamos al inicio de la palabra
        } else {
            nuevaFrase += letra; // Añadimos la letra tal cual
        }

        if (letra === " ") {
            esInicioDePalabra = true; // Cuando encontramos un espacio, la siguiente letra será el inicio de una nueva palabra
        }
    }

    return nuevaFrase;
}
console.log(capitalizar("hola mundo")) // "Hola Mundo"
console.log(capitalizar("make it real")) // "Make It Real"
console.log(capitalizar("")) // ""

console.log("-------")
/*
Escribir una función llamada max que reciba un arreglo de números y retorne el número máximo.
Nota: Intentarlo hacer sin el método Math.max de JavaScript.
Probar el funcionamiento de la función con las siguientes llamadas:
console.log(max([3, 9, 6])) // 9
console.log(max([67, 35, 54, 26])) // 67
console.log(max([5, 9, 2, 4, 5, 7])) // 9
*/

function max(arreglo) {
    let numeroMaximo = arreglo[0]
    arreglo.forEach(element => {
        if (element > numeroMaximo) {
            numeroMaximo = element

        }
    });
    return numeroMaximo
}
console.log(max([3, 9, 6])) // 9
console.log(max([67, 35, 54, 26])) // 67
console.log(max([5, 9, 2, 4, 5, 7])) // 9


console.log("-------")

/*
Escribir una función llamada min que reciba un arreglo de números y retorne el número mínimo:
Nota: Intentarlo hacer sin el método Math.min de JavaScript.
console.log(min([3, 9, 6])) // 3
console.log(min([67, 35, 54, 26])) // 26
console.log(min([5, 9, 2, 4, 5, 7])) // 2
*/
function min(arreglo) {
    let numeroMinimo = arreglo[0]
    arreglo.forEach(element => {
        if (element < numeroMinimo) {
            numeroMinimo = element

        }
    });
    return numeroMinimo
}
console.log(min([3, 9, 6])) // 3
console.log(min([67, 35, 54, 26])) // 26
console.log(min([5, 9, 2, 4, 5, 7])) // 2

console.log("-------")
/*
Escribir una función llamada password que reciba un string y retorne un nuevo string realizando los
siguientes cambios:
✓ Las mayúsculas se reemplazan por minúsculas.
✓ Se eliminan los espacios en blanco.
✓ Reemplaza el caracter “a” por “4”.
✓ Reemplaza el caracter “e” por “3”.
✓ Reemplaza el caracter “i” por “1”.
✓ Reemplaza el carater “o” por “0”.
Probar la función con las siguientes llamadas:
console.log(password("hola")) // "h0l4"
console.log(password("esta es una prueba")) // "3st43sun4pru3b4"
console.log(password("")) // ""
*/
function password(string) {
    let nuevaCadena = ""
    for (letra of string) {
        if (letra === letra.toUpperCase()) {
            letra = letra.toLowerCase()
        } else if (letra === "a") {
            letra = "4"
        } else if (letra === "e") {
            letra = "3"
        } else if (letra === "i") {
            letra = "1"
        } else if (letra === "o") {
            letra = "0"
        }
        if (letra !== " ") {
            nuevaCadena += letra;
        }

    }
    return nuevaCadena
}

console.log(password("hola")) // "h0l4"
console.log(password("esta es una prueba")) // "3st43sun4pru3b4"
console.log(password("")) // ""

console.log("-------")
/*
Escribir una función llamada pares que reciba un arreglo de números y retorne un nuevo arreglo con los
números pares únicamente.
Probar la función con las siguientes llamadas:
console.log(pares([1, 2, 3, 4, 5, 6])) // [2, 4, 6]
console.log(pares([])) // []
*/
function pares(arreglo) {
    nuevoArreglo = []
    arreglo.forEach(element => {
        if (element % 2 == 0) {
            nuevoArreglo.push(element)
        }
    });
    return nuevoArreglo
}
console.log(pares([1, 2, 3, 4, 5, 6])) // [2, 4, 6]
console.log(pares([])) // []

console.log("-------")
/*
Escribir una función llamada posiciones que reciba un arreglo de números y retorne un nuevo
arreglo con las posiciones donde se encuentran números pares. Probar el funcionamiento de la función
con las siguientes llamadas:
console.log(posiciones([1, 2, 3, 4, 5, 6])) // [1, 3, 5]
console.log(posiciones([])) // []
*/
function posiciones(arregloNumeros) {
    let nuevoArreglo = []
    let posicion = null
    arregloNumeros.forEach((element, i) => {
        if (element % 2 == 0) {
            posicion = i
            nuevoArreglo.push(posicion)
        }
    });
    return nuevoArreglo
}
console.log(posiciones([1, 2, 3, 4, 5, 6])) // [1, 3, 5]
console.log(posiciones([])) // []

console.log("-------")
/*
Escribir una función llamada duplicar que reciba un arreglo de números y retorne un nuevo arreglo
donde cada número esté multiplicado por dos (2). Probar el funcionamiento de la función con las
siguientes llamadas:
console.log(duplicar([1, 2, 3])) // [2, 4, 6]
console.log(duplicar([])) // []
*/
function duplicar(arregloNumeros) {
    let nuevoArreglo = []
    let elemento = null
    arregloNumeros.forEach(element => {
        elemento = element * 2
        nuevoArreglo.push(elemento)
    });
    return nuevoArreglo
}
console.log(duplicar([1, 2, 3])) // [2, 4, 6]
console.log(duplicar([])) // []

console.log("-------")
/*
Escribir una función llamada empiezanConA que reciba un arreglo de strings y retorne un nuevo arreglo
con todas las palabras que empiecen por "a" (mayúscula o minúscula).
console.log(empiezanConA(["beta", "alfa", "Arbol", "gama"])) // ["alfa", "Arbol"]
console.log(empiezanConA(["beta", "delta", "gama"])) // []
console.log(empiezanConA([])) // []
*/
function empiezanConA(arregloStrings) {
    let nuevoArreglo = []
    arregloStrings.forEach(element => {
        if (element.toLowerCase().startsWith("a")) {
            nuevoArreglo.push(element)
        }
    });
    return nuevoArreglo
}
console.log(empiezanConA(["beta", "alfa", "Arbol", "gama"])) // ["alfa", "Arbol"]
console.log(empiezanConA(["beta", "delta", "gama"])) // []
console.log(empiezanConA([])) // []

console.log("-------")
/*
Escribir una función llamada terminanConS que reciba un arreglo de strings y retorne un nuevo arreglo
con todas las palabras que terminan con "s" (mayúscula o minúscula).
console.log(terminanConS(["pruebas", "arroz", "árbol", "tokens"])) // ["pruebas", "tokens"]
console.log(terminanConS(["beta", "delta", "gama"])) // []
console.log(terminanConS([])) // []
*/
function terminanConS(arregloStrings) {
    let nuevoArreglo = []
    arregloStrings.forEach(element => {
        if (element.toLowerCase().endsWith("s")) {
            nuevoArreglo.push(element)
        }
    });
    return nuevoArreglo
}
console.log(terminanConS(["pruebas", "arroz", "árbol", "tokens"])) // ["pruebas", "tokens"]
console.log(terminanConS(["beta", "delta", "gama"])) // []
console.log(terminanConS([])) // []

console.log("-------")
/*
Escribir una función llamada numerosAPalabras que reciba un arreglo de números (cada número en el
rango de 0 a 9) y retorne un nuevo arreglo convirtiendo cada número a su versión en palabras.
console.log(numerosAPalabras([0, 1, 2, 3, 4])) // ["cero", "uno", "dos", "tres", "cuatro"]
console.log(numerosAPalabras([5, 6, 7, 8, 9])) // ["cinco", "seis", "siete", "ocho", "nueve"]
*/
function numerosAPalabras(arregloNumeros) {
    let nuevoArreglo = []
    arregloNumeros.forEach(element => {
        

      switch (element) {
        case 0:
            nuevoArreglo.push("cero")
            break;
        case 1:
            nuevoArreglo.push("uno")
            break;
        case 2:
            nuevoArreglo.push("dos")
            break;
        case 3:
            nuevoArreglo.push("tres")
            break;
        case 4:
            nuevoArreglo.push("cuatro")
            break;
        case 5:
            nuevoArreglo.push("cinco")
            break;
        case 6:
            nuevoArreglo.push("seis")
            break;
        case 7:
            nuevoArreglo.push("siete")
            break;
        case 8:
            nuevoArreglo.push("ocho")
            break;
        case 9:
            nuevoArreglo.push("nueve")
            break;
    }  
    });
    
    return nuevoArreglo
}
console.log(numerosAPalabras([0, 1, 2, 3, 4])) // ["cero", "uno", "dos", "tres", "cuatro"]
console.log(numerosAPalabras([5, 6, 7, 8, 9])) // ["cinco", "seis", "siete", "ocho", "nueve"]

console.log("-------")

/*
Escribir una función llamada palabrasANumeros que reciba un arreglo de strings y retorne un nuevo
arreglo traduciendo cada palabra a su versión numérica (del 0 al 9). Si la palabra no es un número
traducir a -1.
console.log(["cero", "uno", "dos", "tres", "what?", "cuatro"]) // [0, 1, 2, 3, -1, 4]
console.log(["cinco", "seis", "siete", "ocho", "nueve"]) // [5, 6, 7, 8, 9]
*/
function palabrasANumeros(arregloStrings){
    let nuevoArreglo = []
    arregloStrings.forEach(element => {
        

      switch (element) {
        case "cero":
            nuevoArreglo.push(0)
            break;
        case "uno":
            nuevoArreglo.push(1)
            break;
        case "dos":
            nuevoArreglo.push(2)
            break;
        case "tres":
            nuevoArreglo.push(3)
            break;
        case "cuatro":
            nuevoArreglo.push(4)
            break;
        case "cinco":
            nuevoArreglo.push(5)
            break;
        case "seis":
            nuevoArreglo.push(6)
            break;
        case "siete":
            nuevoArreglo.push(7)
            break;
        case "ocho":
            nuevoArreglo.push(8)
            break;
        case "nueve":
            nuevoArreglo.push(9)
            break;
        default:
            nuevoArreglo.push(-1);
    }  
    });
    return nuevoArreglo
}
console.log(palabrasANumeros(["cero", "uno", "dos", "tres", "what?", "cuatro"])) // [0, 1, 2, 3, -1, 4]
console.log(palabrasANumeros(["cinco", "seis", "siete", "ocho", "nueve"])) // [5, 6, 7, 8, 9]

console.log("-------")

/*
Escribir una función llamada numAsteriscos que reciba un arreglo y retorne el número de asteriscos:
console.log(numAsteriscos(['', '*', '', '*'])) // 2
console.log(numAsteriscos(['*', '*', '*'])) // 3
console.log(numAsteriscos([])) // 0
*/
function numAsteriscos(numAsteriscos){
    let contador=0
    numAsteriscos.forEach(element => {
        if(element=="*"){
            contador++
        }
    });
    return contador
}
console.log(numAsteriscos(['', '*', '', '*'])) // 2
console.log(numAsteriscos(['*', '*', '*'])) // 3
console.log(numAsteriscos([])) // 0

console.log("-------")

/*
Escribir una función llamada distancia que reciba dos strings y retorne el número de caracteres
diferentes (comparando posición por posición).
Nota: Puedes asumir que los strings siempre tienen la misma longitud. Sin embargo, si quieres agregarle
más dificultad puedes pensar cómo solucionarlo si un string es más largo que el otro (la diferencia entre
las longitudes agregaría al resultado).
console.log(distancia("hola", "hola")) // 0
console.log(distancia("sol", "tol")) // 1
console.log(distancia("carro", "correr")) // 3
*/
function distancia(string1,string2){
    let contador=0
    let longitud=  Math.min(string1.length, string2.length);
    for(let i=0;i<longitud;i++){
        if(string1[i] !== string2[i]){
            contador++
        }
    }
    return contador
}
console.log(distancia("hola", "hola")) // 0
console.log(distancia("sol", "tol")) // 1
console.log(distancia("carro", "correr")) // 3

console.log("-------")

/*
Escribir una función que elimine los espacios que están demás en una cadena de texto. Por ejemplo, si la
entrada es la siguiente:
Instituto____Técnico Nacional de________Comercio “Federico Álvarez Plata” Nocturno.____
La función devolverá lo siguiente:
Instituto Técnico Nacional de Comercio “Federico Álvarez Plata” Nocturno
*/
function eliminarEspacios(cadena){
    let nuevaCadena=[]
    let valorAnterior = false;
    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] === " ") {
            
            if (!valorAnterior) {
                
                nuevaCadena += " ";
                valorAnterior = true; 
            }
        } else {
            
            nuevaCadena += cadena[i];
            valorAnterior = false; 
        }
    }
    return nuevaCadena
}
let cadenaTexto = "Instituto    Técnico Nacional de        Comercio “Federico Álvarez Plata” Nocturno.    ";
console.log(eliminarEspacios(cadenaTexto)); 

console.log("-------")
/*
Escribir una función que reciba como parámetro una calificación entre 0 y 100, y que devuelva el literal
de dicha calificación, según las siguientes especificaciones:
Si la calificación está entre 0 y 39, devuelve “No satisfactorio”
Si la calificación está entre 40 y 60, devuelve “Recuperable”
Si la calificación está entre 61 y 70, devuelve “No satisfactorio”
Si la calificación está entre 71 y 90, devuelve “Satisfactorio”
Si la calificación es mayor a 90, devuelve “Excelente”
*/
function nota(calificacion){
    if(calificacion>=0 && calificacion<=100){
        if(calificacion>=0&&calificacion<=39){
            return "No satisfactorio"
            
        }else if(calificacion>=40&&calificacion<=60){
            return "Recuperable"
        }else if(calificacion>=61&&calificacion<=70){
            return "No satisfactorio"
        }else if(calificacion>=71&&calificacion<=90){
            return "Satisfactorio"
        }else if(calificacion>=90){
            return "Excelente"
        }
    }
}
console.log(nota(40))

console.log("-------")

/*
Definir un objeto llamado numeroFraccionario que tenga dos atributos: numerador y denominador,
inicializados con dos números naturales. Además, se pide que este objeto tenga una función llamada
simplificar. Por ejemplo, si los valores del numerador y del denominador son 10 y 25 respectivamente, la
función simplificar cambiará el numerador a 2 y el denominador a 5, ya que el máximo común divisor de
10 y 25 es 5.
*/
let numeroFraccionario={
    numerador:10,
    denominador:25,

    simplificar:function(numerador,denominador){
        let mcd=function(a,b){
            return b===0? a:mcd(b,a%b)
        }
        let divisor = mcd(numerador, denominador);
        numerador /= divisor;
        denominador /= divisor;
        return { numerador, denominador };
    }
}
console.log(`Fracción antes de simplificar: ${numeroFraccionario.numerador}/${numeroFraccionario.denominador}`);
let fraccionSimplificada = numeroFraccionario.simplificar(numeroFraccionario.numerador, numeroFraccionario.denominador);
console.log(`Fracción después de simplificar: ${fraccionSimplificada.numerador}/${fraccionSimplificada.denominador}`);



function aleatorios() {
    // Crear un array con números del 1 al 10
    let numerosDisponibles = [];
    for (let i = 1; i <= 10; i++) {
        numerosDisponibles.push(i);
    }

    // Crear un vector para almacenar los números aleatorios sin repetición
    let vector = [];

    // Mientras haya números disponibles
    while (numerosDisponibles.length > 0) {
        // Generar un índice aleatorio dentro del rango de la lista disponible
        let indiceAleatorio = Math.floor(Math.random() * numerosDisponibles.length);
        
        // Extraer el número aleatorio y eliminarlo de la lista
        let valorRandom = numerosDisponibles.splice(indiceAleatorio, 1)[0];
        
        // Añadir el número al vector
        vector.push(valorRandom);
    }

    return vector;
}

console.log(aleatorios());