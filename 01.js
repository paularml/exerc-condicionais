// Para fazer a rematrícula na escola o aluno precisa ser maior de idade ou 
// estar acompanhado de um responsável. Sendo assim:
// a) Faça um programa que verifique se o aluno é maior de idade e 
// realize a rematrícula, caso não seja, só será possível acompanhado de um 
// responsável.

let idade, comResponsável
idade = 15
// comResponsável = false
// if (idade >= 18) {
//     console.log("Pode fazer a rematrícula.")
// }
// else if (idade < 18 && comResponsável) {
//     console.log("Está com os responsáveis, pode fazer a rematrícula.")
// }
// else {
//     console.log("Não pode fazer a rematrícula.")
// }

// Como o chatgpt respondeu:
if (idade >= 18 || (idade < 18 && comResponsável)) {
    console.log("Pode fazer a rematrícula diretamente.");
} else {
    console.log("Não pode fazer a rematrícula sem estar acompanhado de um responsável.");
}

