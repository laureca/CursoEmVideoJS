function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.getElementById('res')

    if(fAno.value.length == 0 || fAno.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(fsex[0].checked){
            genero = 'homem'
        } else {
            genero = 'mulher'
        }

        if(idade < 15){
            if(genero == 'homem'){
                img.setAttribute('src', 'menino.png')
            } else {
                img.setAttribute('src', 'menina.png')
            }
        } else if(idade < 25) {
            if(genero == 'homem'){
                img.setAttribute('src', 'cara.png')
            } else {
                img.setAttribute('src', 'mina.png')
            }
        } else if(idade < 50) {
            if(genero == 'homem'){
                img.setAttribute('src', 'homem.png')
            } else {
                img.setAttribute('src', 'mulher.png')
            }
        } else if(idade < 110) {
            if(genero == 'homem'){
                img.setAttribute('src', 'senhor.png')
            } else {
                img.setAttribute('src', 'senhora.png')
            }
        } else {
            res.innerHTML = `Provavelmente essa pessoa já veio a óbito.`
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}