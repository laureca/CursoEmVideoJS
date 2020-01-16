function tabuada() {
    var num = document.getElementById('txtNum').value
    var res = document.getElementById('txtRes')

    if(num == ""){
        window.alert("[ERRO] Preencha os campos e tente novamente!")
    } else {
        var n = Number(num)
        for(var i = 1; i < 11; i++){
            var mul = i*n
            res.innerHTML += `${i} x ${n} = ${mul}\n`
        }
    }
    
}