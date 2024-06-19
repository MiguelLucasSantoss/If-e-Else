// 7) Criar um programa que pergunte o nome e a idade da pessoa, e se tem comorbidade (S ou N). Mostrar mensagem
//  "Pode se vacinar!" caso a idade seja maior ou igual a 60 ou tenha comorbidade. Caso contrário, mostrar mensagem
//   "Não pode se vacinar!".

nome = (prompt("Digite o nome: "))
idade = Number(prompt("Digite a idade: "))
comorbidade = (prompt("Tem comorbidade? (Digite apenas S ou N"))

if(idade >= 60 || comborbidade == "S"){
    alert("Pode se vacinar!")
}else{
    "Não pode se vacinar!"
}