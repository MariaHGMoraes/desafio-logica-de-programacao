//Classificador de nível de Herói 

let nomeHeroi = ["Feng", "Mídori", "Chengzeng"]
let xp = [5525, 200, 8100]
let nivel = ""
const mensagem = "O Herói de nome "

/* teste if else 
if (xp <= 1000){
    
    nivel = "Ferro"

 } else if (xp <= 2000){
    
    nivel = "Bronze"
    
} else if (xp > 2000 && xp <= 5000){
    nivel = "Prata"

} else if (xp > 5000 && xp <= 7000){
    nivel = "Ouro"

} else if(xp > 7000 && xp <= 8000){
    nivel = "Platina"
  
} else {
 nivel = "Ascendente"
}*/

for (let i = 0; i < nomeHeroi.length; i++ ){
    let xpAtual = xp[i]
    let nomeAtual = nomeHeroi[i]
    let nivel = ""

    if (xpAtual <= 1000) {
    
    nivel = "Ferro"

    } else if (xpAtual <= 2000) {
    
    nivel = "Bronze"
    
    } else if (xpAtual > 2000 && xpAtual <= 5000) {
    nivel = "Prata"

    } else if (xpAtual > 5000 && xpAtual <= 7000) {
    nivel = "Ouro"

    } else if(xpAtual > 7000 && xpAtual <= 8000) {
    nivel = "Platina"
  
    } else {
 nivel = "Ascendente"
    }

console.log("O Herói de nome " + nomeAtual + "," + " está no nivel " + nivel)
}
  
