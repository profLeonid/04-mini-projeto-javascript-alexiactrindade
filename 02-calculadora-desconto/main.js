'use strict'

function removerClasse() { 
    const resultado = document.getElementById('resultado')
    resultado.classList.remove("ate-cinco", "entre-cinco-dez", "acima-dez")
}

function calcularDesconto() { 
    let desconto = parseFloat(document.getElementById('desconto').value)
    let preco = parseFloat(document.getElementById('preco').value)
    let resultadoDiv = document.getElementById('resultado')
    let valorDesconto = preco * (desconto / 100)
    let precoFinal = preco - valorDesconto
    
    resultadoDiv.textContent = `Preço final: R$ ${precoFinal} (Economia: R$ ${valorDesconto})`
    
    removerClasse()

    
    if (desconto <= 5) { 
        resultadoDiv.classList.add('ate-cinco')

    } else if (desconto > 5 && desconto <= 10) { 
        resultadoDiv.classList.add('entre-cinco-dez')

    } else if (desconto > 10) { 
        resultadoDiv.classList.add('acima-dez')

    }
} 