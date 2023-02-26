let N1 = 10
let N2 = 23
let N3 = 13
let N4 = 5
let media
let mediaponderada

media = (N1+N2+N3+N4)/4
console.log(media)

mediaponderada = (2*N1 + 2*N2 + 3*N3 + 3*N4)/(2+2+3+3)
console.log(mediaponderada)

let nomeProduto = "Colchão"
let quantidade = 3
let valorUnitario = 499.99
let total
let totalDesconto

total = valorUnitario * quantidade

totalDesconto = total - (0.15*total)

console.log("Nome do Produto: " + nomeProduto + "\n" + "Total: " + total + "\n" + "Total com desconto: " + totalDesconto.toFixed(2))