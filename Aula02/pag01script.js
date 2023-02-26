function calcularMedia()
{
    // let n1 = document.getElementById("txtN1").value
    // let n2 = document.getElementById("txtN2").value
    // let n3 = document.getElementById("txtN3").value
    // let n4 = document.getElementById("txtN4").value

    let n1 = document.getElementById("txtN1").value

    if(n1.trim() == "")
    {
        alert("erro, n1 precisa ser preenchido")
        document.getElementById("txtN1").value = ""
        document.getElementById("status").innerHTML = ""
        document.getElementById("media").innerHTML = ""
        return
    }
    if(n1<0 || n1>10)
    {
        alert("erro, n1 deve estar entre 0 e 10")
        document.getElementById("txtN1").value = ""
        document.getElementById("status").innerHTML = ""
        document.getElementById("media").innerHTML = ""
        return
    }

    n1 = parseFloat(n1)

    if(Number.isNaN(n1) == true)
    {
        alert("erro, n1 deve ser numérico")
        document.getElementById("txtN1").value = ""
        document.getElementById("status").innerHTML = ""
        document.getElementById("media").innerHTML = ""
        return
    }

    let n2 = document.getElementById("txtN2").value

    if(n2.trim() == "")
    {
        alert("erro, n2 precisa ser preenchido")
        document.getElementById("txtN2").value = ""
        document.getElementById("status").innerHTML = ""
        document.getElementById("media").innerHTML = ""
        return
    }
    if(n2<0 || n2>10)
    {
        alert("erro, n2 deve estar entre 0 e 10")
        document.getElementById("txtN2").value = ""
        document.getElementById("status").innerHTML = ""
        document.getElementById("media").innerHTML = ""
        return
    }

    n2 = parseFloat(n2)

    if(Number.isNaN(n2) == true)
    {
        alert("erro, n2 deve ser numérico")
        document.getElementById("txtN2").value = ""
        document.getElementById("status").innerHTML = ""
        document.getElementById("media").innerHTML = ""
        return
    }

    let n3 = document.getElementById("txtN3").value

    if(n3.trim() == "")
    {
        alert("erro, n3 precisa ser preenchido")
        document.getElementById("txtN3").value = ""
        document.getElementById("status").innerHTML = ""
        document.getElementById("media").innerHTML = ""
        return
    }
    if(n3<0 || n3>10)
    {
        alert("erro, n3 deve estar entre 0 e 10")
        document.getElementById("txtN3").value = ""
        document.getElementById("status").innerHTML = ""
        document.getElementById("media").innerHTML = ""
        return
    }

    n3 = parseFloat(n3)

    if(Number.isNaN(n3) == true)
    {
        alert("erro, n3 deve ser numérico")
        document.getElementById("txtN3").value = ""
        document.getElementById("status").innerHTML = ""
        document.getElementById("media").innerHTML = ""
        return
    }

    let n4 = document.getElementById("txtN4").value

    if(n4.trim() == "")
    {
        alert("erro, n4 precisa ser preenchido")
        document.getElementById("txtN4").value = ""
        document.getElementById("status").innerHTML = ""
        document.getElementById("media").innerHTML = ""
        return
    }
    if(n4<0 || n4>10)
    {
        alert("erro, n4 deve estar entre 0 e 10")
        document.getElementById("txtN4").value = ""
        document.getElementById("status").innerHTML = ""
        document.getElementById("media").innerHTML = ""
        return
    }

    n4 = parseFloat(n4)

    if(Number.isNaN(n4) == true)
    {
        alert("erro, n4 deve ser numérico")
        document.getElementById("txtN4").value = ""
        document.getElementById("status").innerHTML = ""
        document.getElementById("media").innerHTML = ""
        return
    }

    let media = (parseFloat(n1)+parseFloat(n2)+parseFloat(n3)+parseFloat(n4))/4

    document.getElementById("media").innerHTML="Média: " + media

    //Verificar se a média é maior ou igual a 7 o status deve ser Aprovado
    //Se a média for menor do que 7 o status deve ser Reprovado

    if(media>=7)
    {
        document.getElementById("status").innerHTML = "Aprovado"
    }
    else
    {
        document.getElementById("status").innerHTML = "Reprovado"
    }
}

function calcularMedia2()
{
    let n1 = document.getElementById("txtN1").value

    if(n1.trim() == "")
    {
        alert("erro, n1 precisa ser preenchido")
        document.getElementById("txtN1").value = ""
        document.getElementById("status").innerHTML = ""
        document.getElementById("media").innerHTML = ""
        return
    }
    if(n1<0 || n1>10)
    {
        alert("erro, n1 deve estar entre 0 e 10")
        document.getElementById("txtN1").value = ""
        document.getElementById("status").innerHTML = ""
        document.getElementById("media").innerHTML = ""
        return
    }

    n1 = parseFloat(n1)

    if(Number.isNaN(n1) == true)
    {
        alert("erro, n1 deve ser numérico")
        document.getElementById("txtN1").value = ""
        document.getElementById("status").innerHTML = ""
        document.getElementById("media").innerHTML = ""
        return
    }

    let n2 = document.getElementById("txtN2").value

    if(n2.trim() == "")
    {
        alert("erro, n2 precisa ser preenchido")
        document.getElementById("txtN2").value = ""
        document.getElementById("status").innerHTML = ""
        document.getElementById("media").innerHTML = ""
        return
    }
    if(n2<0 || n2>10)
    {
        alert("erro, n2 deve estar entre 0 e 10")
        document.getElementById("txtN2").value = ""
        document.getElementById("status").innerHTML = ""
        document.getElementById("media").innerHTML = ""
        return
    }

    n2 = parseFloat(n2)

    if(Number.isNaN(n2) == true)
    {
        alert("erro, n2 deve ser numérico")
        document.getElementById("txtN2").value = ""
        document.getElementById("status").innerHTML = ""
        document.getElementById("media").innerHTML = ""
        return
    }

    let n3 = document.getElementById("txtN3").value

    if(n3.trim() == "")
    {
        alert("erro, n3 precisa ser preenchido")
        document.getElementById("txtN3").value = ""
        document.getElementById("status").innerHTML = ""
        document.getElementById("media").innerHTML = ""
        return
    }
    if(n3<0 || n3>10)
    {
        alert("erro, n3 deve estar entre 0 e 10")
        document.getElementById("txtN3").value = ""
        document.getElementById("status").innerHTML = ""
        document.getElementById("media").innerHTML = ""
        return
    }

    n3 = parseFloat(n3)

    if(Number.isNaN(n3) == true)
    {
        alert("erro, n3 deve ser numérico")
        document.getElementById("txtN3").value = ""
        document.getElementById("status").innerHTML = ""
        document.getElementById("media").innerHTML = ""
        return
    }

    let n4 = document.getElementById("txtN4").value

    if(n4.trim() == "")
    {
        alert("erro, n4 precisa ser preenchido")
        document.getElementById("txtN4").value = ""
        document.getElementById("status").innerHTML = ""
        document.getElementById("media").innerHTML = ""
        return
    }
    if(n4<0 || n4>10)
    {
        alert("erro, n4 deve estar entre 0 e 10")
        document.getElementById("txtN4").value = ""
        document.getElementById("status").innerHTML = ""
        document.getElementById("media").innerHTML = ""
        return
    }

    n4 = parseFloat(n4)

    if(Number.isNaN(n4) == true)
    {
        alert("erro, n4 deve ser numérico")
        document.getElementById("txtN4").value = ""
        document.getElementById("status").innerHTML = ""
        document.getElementById("media").innerHTML = ""
        return
    }


    let media = (parseFloat(n1)+parseFloat(n2)+parseFloat(n3)+parseFloat(n4))/4

    document.getElementById("media").innerHTML="Média: " + media

    //Verificar se a média é maior ou igual a 7 o status deve ser Aprovado
    //Se a média for menor do que 5 o status deve ser Reprovado
    //Se a média for entre 5 e 7 exame

    if(media >= 7)
    {
        document.getElementById("status").innerHTML = "Aprovado"
    }
    else if(media < 5)
    {
        document.getElementById("status").innerHTML = "Reprovado"
    }
    else
    {
        document.getElementById("status").innerHTML = "Exame"
    }
}