function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
       //Bom dia
       img.src = 'Manha.png'
       document.body.style.background = '#ffc466'
    } else if (hora >= 12 && hora <= 18){
        //Boa tarde
        img.src = 'Tarde.png'
        document.body.style.background = '#a32107'
    } else {
        //Boa noite
        img.src = 'Noite.png'
        document.body.style.background = '#0c2a47'
    }

}