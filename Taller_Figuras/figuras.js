// Codigo del cuadrado
console.group("Calculos cuadrado")
const LadoCuadrado = 5;
console.log("Los lados del cuadrado mide: " + LadoCuadrado + "cm")

const PerimetroCuadrado = LadoCuadrado * 4;
console.log("El perimetro del cuadrado es: " + PerimetroCuadrado + "cm")

const AreaCuadrado = LadoCuadrado * LadoCuadrado;
console.log("El area del cuadrado es: " + AreaCuadrado + "cm^2")

console.groupEnd()

// Codigo del triangulo
console.group("Calculos triangulo")
const LadoTriangulo1 = 6;
const LadoTriangulo2 = 6;
const BaseTriangulo = 4;
const AlturaTriangulo = 5.5;

console.log(
    "Los lados del triangulo miden:"
    + LadoTriangulo1
    + "cm "
    + LadoTriangulo2
    + "cm "
    + BaseTriangulo
    + "cm "
);
console.log("La altura del triangulo es: " + AlturaTriangulo + "cm")

const PerimetroTriangulo = LadoTriangulo1 + LadoTriangulo2 + BaseTriangulo;
console.log("El perimetro del triangulo es: " + PerimetroTriangulo + "cm")

const AreaTriangulo = (BaseTriangulo * AlturaTriangulo) / 2;
console.log("El area del triangulo es: " + AreaTriangulo + "cm^2")

console.groupEnd()

//Codigo Circulo
console.group("Calculos circulos")

const RadioCirculo = 4;
console.log("El radio del circulo es: " + RadioCirculo + "cm")

const DiametroCirculo = RadioCirculo * 2;
console.log("El diametro del circulo es: " + DiametroCirculo + "cm")

const Pi = Math.PI;
console.log("El valor numerico de pi es de: " + Pi)

const PerimetroCirculo = DiametroCirculo * Pi;
console.log("El perimetro o circunferencia del circulo es: " + PerimetroCirculo + "cm")

const AreaCirculo = (RadioCirculo * RadioCirculo) * Pi;
console.log("El Area del circulo es de: " + AreaCirculo + "cm^2")