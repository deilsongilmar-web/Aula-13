let peso = Number(prompt("digite seu peso"))
let altura = Number(prompt("digite sua altura"))
let CalculoIMC = prompt(' você se considera; abaixo do peso , normal ou sobre peso? seja realista')


let imc = peso / (altura * altura);

console.log("Abaixo do peso" + imc)


if (peso / altura * altura < 18,5) {
   console.log("Abaixo do peso"+ imc)
     } 
     
  else if (imc < 24) {
    console.log("Peso normal")
} else if (imc < 30 ) {
    console.log("Sobrepeso")
} else if (imc < 35) {
    console.log("Obesidade grau I")
} else if (imc < 40) {
    console.log("Obesidade grau II")
} else if (imc > 50) {
    console.log(" Dr. Now, médico de Quilos Mortais ")
}