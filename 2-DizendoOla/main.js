function sent() {
    let namePerson = document.getElementById("nome");
    let nameValue = namePerson.value
    let textBox = document.getElementById("space")

    textBox.textContent = `Olá ${nameValue}, é um prazer te conhecer!`
}

