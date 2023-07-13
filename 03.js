// Controle de Consumo de Água Ingerida
// A Cubos Academy, preocupada com a saúde de seus alunos, precisa de um programa 
// que identifique se eles estão bebendo a quantidade suficiente de água diariamente.
// A tabela abaixo informa o risco de complicações na saúde com base na injestão 
// de água.
// Quantidade (litros)
// Menos de 1.5	ALTO	Risco Alto - Você está ingerindo pouquissima água
// De 1.5 a 3	MODERADO	Risco Moderado - Você está ingerindo pouca água
// Mais de 3	BAIXO	Risco Baixo - Você está ingerindo uma boa quantidade de água
// a) Faça um programa que verifica a quantidade de água ingerida e imprima a 
// mensagem com o diagnóstico conforme na tabela acima.
let quantidadeDeAgua
quantidadeDeAgua = 2
if (quantidadeDeAgua < 1.5) {
    console.log("risco alto")
} else if (quantidadeDeAgua >= 1.5 && quantidadeDeAgua <= 3) {
    console.log("risco moderado")
} else {
    console.log("risco baixo")
}
