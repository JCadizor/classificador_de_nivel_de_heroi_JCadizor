/*
Objetivo
Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante
Saída
*/

var nome = 'Midoria' //variável que retem o nome, pode ser mudada se assim o desejar
var xp = 2500 //variável que retem a experiência, pode ser mudada se assim o desejar
var nomenclaturas = ["Ferro","Bronze","Prata","Ouro","Platina","Ascendente","Imortal","Radiante"]


var limiteSuperior =[1000,2000,5000,7000,8000,9000,10000]

function rankingByXp (xp) {
    var rank= "Radiante"
    var de = false
    
        if (xp<=limiteSuperior[0]) {rank = nomenclaturas[0]
            de=true
        }else if (xp<=limiteSuperior[1]) { rank =nomenclaturas[1]
            de=true
        }else if (xp<=limiteSuperior[2]) { rank =nomenclaturas[2]
            de =true
        }else if (xp<=limiteSuperior[3]) { rank =nomenclaturas[3]
            de =true
        }else if (xp<=limiteSuperior[4]) { rank =nomenclaturas[4]
            de =true
        }else if (xp<=limiteSuperior[5]) { rank =nomenclaturas[5]
            de =false
        }else if (xp<=limiteSuperior[6]) {rank =nomenclaturas[6]
        de =false}
        if (de)rank =("de "+rank)
    return rank;
}
        

console.log ("O herói "+nome +" tem "+xp+" de experiência.\nEstá no nivél "+rankingByXp(xp)+" !")
