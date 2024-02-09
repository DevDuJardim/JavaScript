function contar(){
    var ini = window.document.getElementById('txtini')
    var fi = window.document.getElementById('txtfim')
    var pas = document.getElementById('txtpasso')
    var res = document.getElementById('cont')

    if(ini.value.length == 0 || fi.value.length == 0 || pas.value.length == 0){
        cont.innerHTML = 'Impossivel contar'
        //window.alert('Impossivel contar')

    } else {
        cont.innerHTML = 'contando: <br>'
        var inicio = Number(ini.value)
        var fim = Number(fi.value)
        var passo = Number(pas.value)
        if (passo <= 0){
            window.alert('Passo invalido! considerando passo 1 ')
            passo = 1
        }
        if (inicio < fim){
            //contagem crescente
            for(var c = inicio; c <= fim; c+= passo){
                cont.innerHTML += `${c} \u{1f449}`
            }
         } else{
                //contagem regressiva
                for(var c = inicio; c >= fim; c-= passo){
                    cont.innerHTML += `${c} \u{1f449}`
                }
        }

        cont.innerHTML += `\u{1f3c1}`
    }



}