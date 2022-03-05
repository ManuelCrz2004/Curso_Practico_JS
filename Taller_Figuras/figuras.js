// Codigo del cuadrado
console.group("Calculos cuadrado")
function PerimetroCuadrado (lado) {
    return lado * 4;
}
function AreacCuadrado (lado) {
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