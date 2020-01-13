function carregar() {
    var msg = document.querySelector('div#msg')
    var img = document.querySelector('img#imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora}h!!`

    if(hora < 13) {
        img.src = 'manha.png'
        document.body.style.background = '#E6C892'
    } else if(hora < 19) {
        img.src = 'tarde.png'
        document.body.style.background = '#ED7546'
    } else {
        img.src = 'noite.png'
        document.body.style.background = '#B8172B'
    }
}

