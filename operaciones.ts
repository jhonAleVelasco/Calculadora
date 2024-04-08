function sumar() {
    const num1: number = parseFloat((<HTMLInputElement>document.getElementById('num1')).value);
    const num2: number = parseFloat((<HTMLInputElement>document.getElementById('num2')).value);
    const resultado: number = num1 + num2;
    mostrarResultado(resultado);
}

function restar() {
    const num1: number = parseFloat((<HTMLInputElement>document.getElementById('num1')).value);
    const num2: number = parseFloat((<HTMLInputElement>document.getElementById('num2')).value);
    const resultado: number = num1 - num2;
    mostrarResultado(resultado);
}

function multiplicar() {
    const num1: number = parseFloat((<HTMLInputElement>document.getElementById('num1')).value);
    const num2: number = parseFloat((<HTMLInputElement>document.getElementById('num2')).value);
    const resultado: number = num1 * num2;
    mostrarResultado(resultado);
}

function dividir() {
    const num1: number = parseFloat((<HTMLInputElement>document.getElementById('num1')).value);
    const num2: number = parseFloat((<HTMLInputElement>document.getElementById('num2')).value);
    if (num2 !== 0) {
        const resultado: number = num1 / num2;
        mostrarResultado(resultado);
    } else {
        mostrarError("No se puede dividir por cero");
    }
}

function mostrarResultado(resultado: number) {
    document.getElementById('resultado')!.innerText = "El resultado es: " + resultado;
}

function mostrarError(error: string) {
    document.getElementById('resultado')!.innerText = "Error: " + error;
}

   