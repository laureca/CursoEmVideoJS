function contar() {
    var inicio = Number(document.getElementById('txtIni').value)
    var fim = Number(document.getElementById('txtFim').value)
    var passo = Number(document.getElementById('txtPas').value)

    var res = document.getElementById('res')

    console.log(inicio+" "+fim+" "+passo)

    res.innerHTML = `Contando: `
    for(var i = inicio; i < fim; i += passo){
        res.innerHTML += `${i} -> `
    }
} 