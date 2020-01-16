function contar() {
    var i = document.getElementById('txtIni').value
    var f = document.getElementById('txtFim').value
    var p = document.getElementById('txtPas').value
    var res = document.getElementById('res')

    console.log(inicio+" "+fim+" "+passo)
    if(i == "" || f == "" || p == ""){
        window.alert("[ERRO] Preencha os campos e tente novamente!")
    } else {
        var inicio = Number(i)
        var fim = Number(f)
        var passo = Number(p)

        res.innerHTML = `Contando: `
        for(var i = inicio; i < fim; i += passo){
            res.innerHTML += `${i} \u{1F449} `
        }
    }
    
} 