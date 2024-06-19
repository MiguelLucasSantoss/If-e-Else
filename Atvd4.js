// 4) Faça um programa que solicite o salário e os anos de serviço de um funcionário. Se ele tiver mais de 5 anos
//  de serviço, dê um bônus de 5% sobre o salário.

salario = Number(prompt("Digite o salario: "))
AnoServico = Number(prompt("Digite quantos anos de serviço: "))
salario5 = salario * 0.05

if(AnoServico >= 5){
    alert ("O salario foi aumentado em 5% agora você ganhou " + salario5)
}else{
    alert ("Não aconteceu nada")
}