alert("Olá, bem-vindo ao contador")
let valorUm = prompt("Digite um valor inicial")
let valorDois = prompt("Digite um valor final")
let espacamento = prompt("Digite de quanto em quanto você deseja pular")
let soma = ""

for(let c = valorUm; c <= valorDois; c = c + espacamento) {
    console.log(`contando: ${c}`)
}