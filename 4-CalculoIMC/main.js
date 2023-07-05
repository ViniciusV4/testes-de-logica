const weight = document.querySelector('#weight')
const height = document.querySelector('#height')
const space = document.querySelector('#space')

function sent() {
    const weightValue = Number(weight.value.replace(/,/g, "."))
    const heightValue = Number(height.value.replace(/,/g, "."))

    const imc = weightValue / (heightValue**2)
    const imcValue = Number(imc).toFixed(2)

    if(imcValue >= 18.5 && imcValue <= 25) {
        space.textContent = `Seu IMC é: ${imcValue} você está no peso normal.`
    } else if(imcValue >= 17 && imcValue < 18.5) {
        space.textContent = `Seu IMC é: ${imcValue} você está abaixo do peso.`
    } else if(imcValue > 25 && imcValue <= 30) {
        space.textContent = `Seu IMC é: ${imcValue} você está com sobrepeso.`
    } else if(imcValue > 30 && imcValue <= 35) {
        space.textContent = `Seu IMC é: ${imcValue} você está obeso.`
    } else if(imcValue > 35 && imcValue <= 40) {
        space.textContent = `Seu IMC é: ${imcValue} você está em nível de obesidade severa.`
    } else if(imcValue > 40) {
        space.textContent = `Seu IMC é: ${imcValue} você está em nível de obesidade mórbida`
    } else { space.textContent = `Seu IMC é: ${imcValue}. Você está muito abaixo do peso ideal`}

    weight.value = ""
    height.value = ""
}