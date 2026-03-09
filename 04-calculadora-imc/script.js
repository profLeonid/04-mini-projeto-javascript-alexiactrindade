'use strict'

function removerClasse() { 
    const resultado = document.getElementById('resultado')
    resultado.classList.remove("abaixo-peso", "peso-normal", "sobrepeso", "grauI", "grauII", "grauIII")
}

function calcularIMC() { 
    const nome = (document.getElementById('nome').value)
    const altura = parseFloat(document.getElementById('altura').value)
    const peso = parseFloat(document.getElementById('peso').value) 
    const resultadoDiv = document.getElementById('resultado')
    let imc = peso / (altura * altura) 
    imc = imc.toFixed(2)

    removerClasse()
    
    if (imc < 18.5) { 
       resultadoDiv.textContent =  `${nome}, seu imc é ${imc} considerado ABAIXO DO PESO!`
       resultadoDiv.classList.add('abaixo-peso')
    } else if (imc >= 18.5 && imc <= 24.9) { 
       resultadoDiv.textContent =  `${nome}, seu imc é ${imc} considerado PESO NORMAL!`
       resultadoDiv.classList.add('peso-normal')
    } else if (imc >= 25 && imc <= 29.9 ) { 
        resultadoDiv.textContent =  `${nome}, seu imc é ${imc} considerado SOBREPESO!`
        resultadoDiv.classList.add('sobrepeso')
    } else if (imc >=30 && imc <=34.9) {
        resultadoDiv.textContent =  `${nome}, seu imc é ${imc} considerado OBESIDADE GRAU I!`
        resultadoDiv.classList.add('grauI')
    }  else if (imc >=35 && imc <= 39.9) {
        resultadoDiv.textContent =  `${nome}, seu imc é ${imc} considerado OBESIDADE GRAU II!`
        resultadoDiv.classList.add('grauII')
    } else { 
        resultadoDiv.textContent =  `${nome}, seu imc é ${imc} considerado OBESIDADE GRAU III!`
        resultadoDiv.classList.add('grauIII')
    } 
}