// Compra com Desconto 13
// A Loja do Juninho está com uma super promoção. E na compra de qualquer produto 
// você ganha desconto conforme a forma de pagamento seguindo a tabela seguinte.
// Forma de Pagamento	Desconto
// credito	5%
// cheque	3%
// debito ou dinheiro	10%
// a) Faça um programa que verifica o tipo de desconto, calcule o valor do 
// produto com o desconto e imprima o resultado. O valor final do produto após 
// o desconto pode ser encontrado com a fórmula: 
// valor final = valor do produto - (valor do produto * desconto)
// Lembre-se de cuidar para que o valor monetário tenha sempre duas casas decimais.

let tipoDePagamento, valorDoPproduto, desconto, valorFinal

valorDoPproduto = 130.00
tipoDePagamento = "crédito"

if (tipoDePagamento === "débito ou dinheiro") {
    desconto = 10 / 100
} else if (tipoDePagamento === "crédito") {
    desconto = 5 / 100
} else if (tipoDePagamento === "cheque") {
    desconto = 3 / 100
}
valorFinal = valorDoPproduto - (valorDoPproduto * desconto)
console.log(`valor a ser pago: ${valorFinal.toFixed(2)}`)




