// 9) Criar um programa que simule o login de um roteador. O nome de usuário (username) é "admin" e a senha (password)
//  "123". Pedir ao usuário para digitar username e password. Caso os dados estejam corretos, mostrar uma mensagem
//   "Login efetuado!", caso contrário "Login falhou!". (DESAFIO: Mostrar mensagens específicas para erro de username,
//      de password ou de ambos).

user = 'admin'
senha = 123

userN = prompt('Qual é o seu user?')
senhaN = Number(prompt('qual é a senha'))


if(userN == user && senhaN == senha){
    alert('Login efetuado!')
}
else if(userN != user && senhaN == senha){

    aler('Username não encontrado')
}
else if(userN == user && senhaN != senha){

    aler('Senha não encontrado')
}
else if(userN != user && senhaN != senha){
    aler('Login falhou!')
}
