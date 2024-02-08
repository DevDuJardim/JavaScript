function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.velue > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked){
            genero = 'homem'
            if (idade >= 0 && idade <= 4){
                //bebe
                img.setAttribute('src','bebe-menino.png')
            } else if (idade < 13){
                //criança
                img.setAttribute('src','crianca-m.png')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src','jovem-m.png')
            } else if(idade < 60){
                //adulto
                img.setAttribute('src','adulto-h.png')
            }else{
                //idoso
                img.setAttribute('src','idoso-m.png')
            }
        } else if (fsex[1].checked){
            genero = 'mulher'
            if (idade >= 0 && idade < 4){
                //bebe
                img.setAttribute('src','bebe-menina.png')
            } else if (idade < 13){
                //criança
                img.setAttribute('src','crianca-f.png')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src','jovem-f.png')
            } else if(idade < 60){
                //adulto
                img.setAttribute('src','adulto-m.png')
            }else{
                //idoso
            img.setAttribute('src','idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}