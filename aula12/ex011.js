var idade = 18

console.log(`Você tem ${idade} anos.`)

if(idade >= 18) {
    console.log('Vota')
} else if(idade >= 16 || idade > 65) {
    console.log('Pode votar')
} else {
    console.log('Não vota')
}
