const form = document.querySelector(".form2")
const password = document.querySelector("#password")
const confirmPassword = document.querySelector("#confirmar-password")


form.onsubmit = (e) => {
    e.preventDefault() // para validar el form

    if (password.value === confirmPassword.value) {
        form.submit()
    }
    else {
        alert("tus passwords no coinciden")
    }
}


