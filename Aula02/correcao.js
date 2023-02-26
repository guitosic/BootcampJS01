function mediaSimples()
{
    let N1 = document.getElementById("txtN1-01").value
    let N2 = document.getElementById("txtN2-01").value
    let N3 = document.getElementById("txtN3-01").value
    let N4 = document.getElementById("txtN4-01").value
    let media = (parseFloat(N1)+parseFloat(N2)+parseFloat(N3)+parseFloat(N4))/4
    
    console.log(media)
    document.getElementById("3").innerHTML = media
}

function mediaPonderada()
{
    let N1 = document.getElementById("txtN1-02").value
    let N2 = document.getElementById("txtN2-02").value
    let N3 = document.getElementById("txtN3-02").value
    let N4 = document.getElementById("txtN4-02").value
    let mediaponderada = (2*parseFloat(N1) + 2*parseFloat(N2) + 3*parseFloat(N3) + 3*parseFloat(N4))/(2+2+3+3)

    console.log(mediaponderada)
    document.getElementById("resultado2").innerHTML = mediaponderada
}

function valorCompra()
{
    let nome = document.getElementById("txtNomeProduto").value
    let qtd = document.getElementById("txtQtdProduto").value
    let valor = document.getElementById("txtValorProduto").value
    let vDesconto = 0.15
    let total = qtd * valor
    let totalDesconto = total * (1-vDesconto)

    document.getElementById("resultado3").innerHTML = "Nome do produto: " + nome + "<br>Total: R$" + total.toFixed(2) + "<br>Total com desconto: R$" + totalDesconto.toFixed(2)
}