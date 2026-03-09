'use strict'


function removerClasse() { 
    const resultado = document.getElementById('resultado')
    resultado.classList.remove("reprovado", "recuperacao", "aprovado")
}

function calcularMedia() { 
    const nota1 = parseFloat(document.getElementById('nota1').value) 
    const nota2 = parseFloat(document.getElementById('nota2').value)
    const nota3 = parseFloat(document.getElementById('nota3').value)
    const resultadoDiv = document.getElementById('resultado') 
    let resultado = (nota1 + nota2 + nota3) / 3
    resultado = resultado.toFixed(2)

    removerClasse()

    if (resultado < 5) {
        resultadoDiv.classList.add('reprovado')
        resultadoDiv.textContent = `Sua nota é ${resultado} e você está REPROVADO(A)!`
    } else if (resultado >=5 && resultado <= 6.9) { 
        resultadoDiv.classList.add('recuperacao')
        resultadoDiv.textContent = `Sua nota é ${resultado} e você está em RECUPERAÇÃO`
    } else { 
        resultadoDiv.classList.add('aprovado')
        resultadoDiv.textContent = `Sua nota é ${resultado} e você está APROVADO(A)`
    }
}


