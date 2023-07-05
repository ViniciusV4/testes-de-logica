function sent() {
    let namePerson = document.getElementById("nome");
    let nameValue = namePerson.value
    let textBox = document.getElementById("space")

    textBox.textContent = `Hello ${nameValue}, it's nice to meet you`
}

