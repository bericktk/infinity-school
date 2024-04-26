//Peça ao usuário para inserir um número e escreva um programa que determine se o número é positivo e par.

// const numero = prompt("Digite 1 numero: ")

// if(numero % 2 === 0 && numero > 0){
//     console.log(`O numero ${numero} é par e positivo`)
// }else{
//     console.log(`O numero ${numero} é impar`)
// }

//----------------------------------------------------------------

//Crie um programa que solicite ao usuário seu peso (em kg) e altura(em metros) e calcule o IMC. Em seguida, informe a categoria de acordo com a tabela de IMC (por exemplo, abaixo do peso, peso normal, sobrepeso, etc.).

const peso = Number(prompt("Digite seu peso: "))
const altura = Number(prompt("Digite sua altura: "))
const imc = parseInt((peso / altura ** 2))

console.log(imc)

switch (true){
    case imc < 18:
        alert(`Sem imc é ${imc} você está magro`)
        break
    case imc > 18.5 && imc < 24.9:
        alert(`Sem imc é ${imc} você está normal`)
        break
    case imc > 24.9 && imc < 29.9:
        alert(`Sem imc é ${imc} você está com sobrepeso`)
        break
    case imc > 29.9 && imc < 39.9:
        alert(`Sem imc é ${imc} você está obeso`)
        break
    case imc > 40:
        alert(`Sem imc é ${imc} você está com obesidade gravissima, vai se cuidar!!!`)
        break
    default:
        alert("Algo deu errado")
}