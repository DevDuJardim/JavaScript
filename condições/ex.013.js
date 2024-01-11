
var horacerta = new Date()
var hora = horacerta.getHours()
console.log(`Agora são exatamente ${hora} horas.`)
if (hora < 5){
    console.log('Vai dormir vagabundo!')
}else if (hora < 12){
    console.log('Bom dia!')
} else if (hora <= 18){
    console.log('Boa tarde!')
} else if (hora > 18 && hora <= 23){
    console.log('Boa noite!')
} 
