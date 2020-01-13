var agora = new Date()
var hora = agora.getHours()

console.log(`Agora são exatemente ${hora}h`)

if(hora < 4) {
    console.log('Boa madrugada!')
} else if(hora < 13) {
    console.log('Bom dia!')
} else if(hora < 19) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}