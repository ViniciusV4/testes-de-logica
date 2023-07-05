const numberOne = document.getElementById("numeroUm");
const numberTwo = document.getElementById("numeroDois");
const space = document.getElementById("space")

function sent() {
    const valueOne = Number(numberOne.value.replace(/,/g, "."))
    const valueTwo = Number(numberTwo.value.replace(/,/g, "."))
    
    const adding = valueOne + valueTwo
    const result = adding.toFixed(2)

    space.textContent = `A soma entre ${valueOne} e ${valueTwo} é igual a: ${result}`

    numberOne.value = ""
    numberTwo.value = ""
}