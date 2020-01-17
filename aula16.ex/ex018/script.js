var numeros = []

function adicionar() {
    num = document.getElementById('txtNum').value

    res = document.getElementById('txtRes')

    if(num == '') {
        window.alert('[ERRO] Preenche o campo numérico e tente novamente!!')
    } else {
        var n = Number(num)
        if(numeros.indexOf(n) != -1 || n > 100 || n < 1) {
            window.alert('[ERRO] Esse número não pode ser adicionado!!')
        } else {
            numeros.push(n)
            res.innerHTML += `Valor ${n} foi adicIonado!\n`
        }
    }
}

function finalizar() {
    var fim = document.getElementById('final')
    if(numeros.length == 0) {
        window.alert('[ERRO] Nenhum número foi inserido ainda, preencha os campos e tente novamente!')
    } else {
        var maior = Math.max.apply(null, numeros)
        var menor = Math.min.apply(null, numeros)
        var soma = 0

        for(var i in numeros){
            soma += numeros[i]
        }
    
        var media = soma/numeros.length
    
        fim.innerHTML += `Ao todo temos ${numeros.length} números cadastrados.\n`
        fim.innerHTML += `O maior número informado foi ${maior}.\n`
        fim.innerHTML += `O maior número informado foi ${menor}.\n`
        fim.innerHTML += `Somando os vamores temos: ${soma}.\n`
        fim.innerHTML += `A média dos valores digitados é ${media}.\n`
    }
}