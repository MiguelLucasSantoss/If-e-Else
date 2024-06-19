// 10) Criar um programa para calcular a densidade demográfica (habitantes por quilômetro quadrado)
//  de uma região. Sendo, densidade igual a população (total de habitantes) dividida pela área (quilômetros quadrados).
//   Mostrar mensagens para densidade alta (maior ou igual a 100), média (entre 25 e 100), baixa (menor que 25).

habitatntes = prompt('Digite os habitantes por quilômetro quadrado: ')
km2 = prompt('Digite quantos quilômetros quadrado: ')

densidadeDem = habitatntes / km2

if(densidadeDem >= 100){
    alert("alta densidade demográfica")
}

else if(densidadeDem < 25){
    alert("baixa densidade demográfica")
}else{
    alert("Está na média")
}