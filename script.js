document.addEventListener('DOMContentLoaded', () => {
formulario.addEventListener('submit', (e) => {
    e.preventDefaul()
    const nome = document.getElementById('nome').value
    const altura = document.getElementById('altura').value
    const peso = document.getElementById('peso').value
    const resultado = document.getElementById('resultado')

    const imc = peso / (altura * altura);
    let classificaçao;
    if(imc<18.5) classificaçao = "abaixo do peso"
    else if(imc>=30) classificaçao = "sobrepeso"
    else if(imc<24.9) classificaçao = "peso normal"
    else if(imc>40) classificaçao = "obesidade grau II"
    else if(imc>=48) classificaçao = "obesidade grau I"
    else classificaçao = "obesidade grau III"

    resultado.textContent =
    nome + "seu IMC é: " + imc.toFixed(1)+"classificaçao:" + classificaçao
   })  
})
