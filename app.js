const altura = document.getElementById('altura');
const peso = document.getElementById('peso');
const resultadoElemento = document.getElementById('resultado');
const imagem = document.getElementById('imagem')

function calculo() {
    const alturaValor = parseFloat(altura.value);
    const pesoValor = parseFloat(peso.value);

    const resultado = pesoValor / (alturaValor * alturaValor);
    

    if (resultado <= 18.5) {
        imagem.src = "imagens/1.png";
        resultadoElemento.innerHTML = `Você está na classificação magreza: Seu IMC é ${resultado.toFixed(2)}`
    } else if (resultado >= 18.5 && resultado <24.9) {
        imagem.src = "imagens/2.png";
        resultadoElemento.innerHTML = `Você está na classificação Normal: Seu IMC é ${resultado.toFixed(2)}`
    } else if (resultado >= 24.9 && resultado <29.9) {
        imagem.src = "imagens/3.png";
        resultadoElemento.innerHTML = `Você está na classificação Sobrepeso: Seu IMC é ${resultado.toFixed(2)}`
    } else if (resultado >= 29.9 && resultado <39.9) {
        imagem.src = "imagens/4.png"
        resultadoElemento.innerHTML = `Você está na classificação Obesidade I: Seu IMC é ${resultado.toFixed(2)}`
    } else if (resultado >= 39.9) {
        imagem.src = "imagens/5.png"
        resultadoElemento.innerHTML = `Você está na classificação Obesidade Grave: Seu IMC é ${resultado.toFixed(2)}`
    }

}



const botao = document.getElementById('botao')
const modal = document.querySelector('dialog')
const botaoClose = document.getElementById('botao-close')

function abrirModal() {
    modal.show()
}

botaoClose.onclick = function () {
    modal.close()
}
