// 6) Faça um programa para ler o salário anual de um funcionário e o piso salarial mensal da sua categoria. 
// Mostrar o salário mensal do funcionário e dizer se ele recebe de acordo com o piso (maior ou igual o piso da categoria)
//  ou se recebe abaixo do piso. (DESAFIO: Incluir uma terceira condição para caso receba exatamente igual ao piso)

salarioAnual = Number(prompt("Digite seu salario anual: "))
pisoSalarial = Number(prompt("Digite o piso salarial mensal da sua categoria: "))

salarioMensal = salarioAnual / 12

if(salarioMensal >= pisoSalarial){
    alert("Você recebe por mês" + salarioMensal + "e você recebe de acordo com o piso!")
}else{
    alert("Você recebe por mês" + salarioMensal + "e não está de acordo com o piso!")
}