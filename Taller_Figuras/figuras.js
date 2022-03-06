// Codigo del cuadrado
console.group("Calculos cuadrado")
function PerimetroCuadrado (lado) {
    return lado * 4;
}
function AreaCuadrado (lado) {
    return lado * lado;
}
console.groupEnd()

// Codigo del triangulo
console.group("Calculos triangulo")
function PerimetroTriangulo (lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function AreaTriangulo(altura, base) {
    return (base * altura) / 2;
}
console.groupEnd()

//Codigo Circulo
console.group("Calculos circulos")
function PerimetroCirculo(diametro) {
    return diametro * Math.PI;
}
function AreaCirculo(radio) {
    return (radio * radio) * Math.PI;
}

// Interacciones con Html
function CalcularPerimetroCuadrado() {
    const input = document.getElementById("SquareInput");
    const value = input.value;
    const perimetro = PerimetroCuadrado(value)

    alert(perimetro)
}
function CalcularAreaCuadrado() {
    const input = document.getElementById("SquareInput");
    const value = input.value;
    const area = AreaCuadrado(value);

    alert(area)
}
// Faltan calculos de triangulo

function CalcularPerimetroCirculo() {
    const input = document.getElementById("RadioInput");
    const value = input.value;
    const perimetro = PerimetroCirculo(value)

    alert(perimetro)
}
function CalcularAreaCirculo() {
    const input = document.getElementById("RadioInput");
    const value = input.value;
    const area = AreaCirculo(value)

    alert(area)
}