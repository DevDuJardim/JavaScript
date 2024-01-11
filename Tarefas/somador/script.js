function somar(){
    var valor1 = window.document.getElementById('txtvalor1')
    var valor2 = window.document.getElementById('txtvalor2')
    var res = Number(valor2.value) + Number(valor1.value)
    document.write(res)
}