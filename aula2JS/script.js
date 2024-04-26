const peso = Number(prompt("Digite seu peso: "))
const altura = Number(prompt("Digite sua altura: "))
const imc = parseInt((peso / altura ** 2))

console.log(imc)

if(imc < 18){
    alert(`Seu imc é ${imc} você está magro`)
}else if(imc > 18.5 && imc < 24.9){
    alert(`Seu imc é ${imc} você está normal`)
}else if(imc > 24.9 && imc < 29.9){
    alert(`Sem imc é ${imc} você está com sobrepeso`)
}else if(imc > 29.9 && imc < 39.9){
    alert(`Sem imc é ${imc} você está obeso`)
}else if(imc > 40){
    alert(`Sem imc é ${imc} você está com obesidade gravissima, procure um médico imediatamente!!!`)
}else{
    alert("Algo deu errado")
}