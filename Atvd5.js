// 5) Crie um programa que peça ao usuário para digitar três notas individualmente (uma por vez), faça a média
//  e caso a média seja igual ou maior que 7, mostre uma mensagem "Aprovado!" e a média. Caso seja menor que 7,
//   mostre uma mensagem "Reprovado!" e a média. (DESAFIO: Incluir "Recuperação", sendo a média entre 5 e 7,
//    e "Reprovado" apenas para médias abaixo de 5)

nota1 = Number(prompt("Digite sua nota 1: "))
nota2 = Number(prompt("Digite sua nota 2: "))
nota3 = Number(prompt("Digite sua nota 3: "))

calculo = nota1 + nota2 + nota3
media = calculo / 3

if(media >= 7){
    "Aprovado!"
}else{
    "Reprovado!"
}