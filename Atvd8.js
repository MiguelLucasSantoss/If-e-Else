// 8) Fazer um programa no qual o usuário digite a sua altura e o seu peso, ao final mostre o IMC 
// (índice de massa corporal) e uma mensagem se está abaixo do peso (IMC menor que 18), na faixa de peso ideal
//  (IMC de 18 a 25) ou acima do peso (IMC maior 25).

altura = Number(prompt("Digite a sua altura: "))
peso = Number(prompt("Digite seu peso: "))

IMC = peso / (altura * altura)

if(IMC < 18){
    alert("Está abaixo do peso ideal")
}else if(IMC > 25){
    alert("Você está acima do peso")
}else{
    alert("Você está no peso ideal")
}