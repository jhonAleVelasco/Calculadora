"use strict";
function sumar() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const resultado = num1 + num2;
    mostrarResultado(resultado);
}
function restar() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const resultado = num1 - num2;
    mostrarResultado(resultado);
}
function multiplicar() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const resultado = num1 * num2;
    mostrarResultado(resultado);
}
function dividir() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    if (num2 !== 0) {
        const resultado = num1 / num2;
        mostrarResultado(resultado);
    }
    else {
        mostrarError("No se puede dividir por cero");
    }
}
function mostrarResultado(resultado) {
    document.getElementById('resultado').innerText = "El resultado es: " + resultado;
}
function mostrarError(error) {
    document.getElementById('resultado').innerText = "Error: " + error;
}
