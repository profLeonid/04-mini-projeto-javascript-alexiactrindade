'use strict'


function removerClasse() { 
    const resultado = document.getElementById('resultado')
    resultado.classList.remove("apto", "nao-apto")
}

function avaliar() {
    const tempo = document.getElementById('numero')
    const resultado = document.getElementById('resultado')

    if (tempo.value <= 14) { 
        resultado.textContent = "Apto"
        removerClasse()
        resultado.classList.add("apto")
    } else { 
        resultado.textContent = "Não apto"
        removerClasse()
        resultado.classList.add("nao-apto")
    }
}