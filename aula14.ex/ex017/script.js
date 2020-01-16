function tabuada() {
    var n = Number(document.getElementById('txtNum').value)

    var res = document.getElementById('txtRes')

    for(var i = 1; i < 11; i++){
        var mul = i*n
        res.innerHTML += `${i} x ${n} = ${mul}\n`
    }
}