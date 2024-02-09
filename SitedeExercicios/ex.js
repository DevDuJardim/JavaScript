ex1.innerText = 'Hello wolrd'

function nome(){
    var nome = window.document.getElementById("name")
    var nome = String(nome.value)
    var res = window.document.getElementById('res')
    res.innerHTML = `Olá ${nome} é um prazer te conhecer!`
}

function salario(){
    var nome = document.getElementById("nome")
    var nome = String(nome.value)
    var salario = document.getElementById("salario")
    var salario = Number(salario.value)
    var res2 = document.getElementById("res2")
    res2.innerHTML = `O funcionario ${nome.toUpperCase()} recebera R$ ${salario} de salario este mes <br/>`
  }

  function media(){
    var n1 = document.getElementById('nota1')
    var n1 = Number(n1.value)
    var n2 = document.getElementById('nota2')
    var n2 = Number(n2.value)
    var res3 = document.getElementById('res3')
    media = (n1 + n2) / 2
    res3.innerHTML = `A média do aluno é <strong>${media}</strong>!`
   }