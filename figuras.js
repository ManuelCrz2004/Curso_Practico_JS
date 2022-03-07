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
    const result = lado1 + lado2 + base;
    return result;
}

function AreaTriangulo(altura, base) {
    const result = (base * altura) / 2;
    return result;
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
    const perimetro = PerimetroCuadrado(value);

    alert(perimetro)
}
function CalcularAreaCuadrado() {
    const input = document.getElementById("SquareInput");
    const value = input.value;
    const area = AreaCuadrado(value);

    alert(area)
}
function CalcularPerimetroTriangulo() {
    const FirstTriangle = document.getElementById("FirstTriangleInput").value;
    const SecondTriangle = document.getElementById("SecondTriangleInput").value;
    const ThirdTriangle = document.getElementById("BaseTriangleInput".value);
    const Perimeter = PerimetroTriangulo(FirstTriangle,SecondTriangle,ThirdTriangle)
}
function CalcularAreaTriangulo() {
    const BaseInput = document.getElementById("BaseTriangleInput");
    const HeightInput = document.getElementById("HeightTriangleInput");
    const BaseValue = BaseInput.value;
    const HValue = HeightInput.value;
    const area = AreaTriangulo(HValue, BaseValue);

    alert(area)
}
function CalcularPerimetroCirculo() {
    const input = document.getElementById("RadioInput");
    const value = input.value;
    const perimetro = PerimetroCirculo(value);

    alert(perimetro)
}
function CalcularAreaCirculo() {
    const input = document.getElementById("RadioInput");
    const value = input.value;
    const area = AreaCirculo(value);

    alert(area)
}