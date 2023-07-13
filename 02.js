// Nome para exibição
// Uma pessoa pode ter nome, sobrenome e/ou apelido. Escreva um código 
// que imprima no console apenas o apelido (se o apelido estiver preenchido), 
// ou primeiro nome + sobrenome (se o sobrenome estiver preenchido), ou apenas 
// o primeiro nome (que no nosso programa é obrigatório e deverá sempre estar 
// preenchido).
// Importante: Neste exercício, não deveremos utilizar nenhum operador de 
// comparação, nem de igualdade e nem de identidade. Para este exercício deveremos 
// utilizar apenas o conceito de truthiness.

let nome, sobrenome, apelido
nome = ""
sobrenome = ""
apelido = ""
if (nome && sobrenome && apelido || nome && apelido) {
    console.log(apelido)
} else if (nome && sobrenome) {
    console.log(nome, sobrenome)
} else if (nome) {
    console.log(nome)
} else {
    console.log("favor preencha o nome")
}

// Em JavaScript, os valores são avaliados como "truthy" ou "falsy" de
// acordo com suas características. Os valores "truthy" são aqueles que
// são considerados verdadeiros em uma expressão booleana, enquanto os
// valores "falsy" são considerados falsos.

// Para resolver o exercício utilizando apenas o conceito de "truthiness",
//  você pode verificar a existência dos valores de nome, sobrenome e
//  apelido, sem utilizar operadores de comparação. Em JavaScript, uma
//  forma de verificar a existência de um valor é usando o operador de
//  negação ! duas vezes. Ao utilizar !! antes de uma variável, você
//  estará verificando se o valor é "truthy" ou "falsy".