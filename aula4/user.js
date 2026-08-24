var users = JSON.parse(localStorage.getItem("users")) || []
var logado = JSON.parse(localStorage.getItem("logado")) || {}
var hello = document.getElementById("idUsuario")

if(hello && logado){
    
    hello.innerHTML = "Olá, " + logado.nome

}    

var formLog = document.getElementById("idFormLogin")

if (formLog) {
    formLog.addEventListener("submit", (e) => {

        e.preventDefault()

        let email = document.getElementById("idLogEmail").value
        let password = document.getElementById("idLogPassword").value
        let response = document.getElementById("idResponse")

        console.log(users)

        let user = users.find(u => {

            return u.email == email

        })

        if (!user) {

            console.log("Usuário não encontrado")
            response.innerHTML = "Usuário não encontrado"

        }

        if (user.senha == password) {

            localStorage.setItem("logado", JSON.stringify(user))

            window.location.href = "painel.html"

        }

        else {

            console.log("Senha inválida")

            response.innerHTML = "Senha inválida"

        }

    })

}

var formReg = document.getElementById("idFormRegister")

if (formReg) {

    let response = document.getElementById("idUsuarios")
    response.innerHTML = JSON.stringify(users, null, 1)

    formReg.addEventListener("submit", (e) => {



        let name = document.getElementById("idRegName").value
        let email = document.getElementById("idRegEmail").value
        let password = document.getElementById("idRegPassword").value
        let date = document.getElementById("idRegDate").value

        let usuario = users.find(u => {

            return u.email == email

        })

        const user = { //objeto anônimo, estrutura, json

            nome: name,
            email: email,
            senha: password,
            nascimento: date

        }

        if (!usuario) {

            console.log("Novo usuário cadastrado")
            users.push(user)

            localStorage.setItem("users", JSON.stringify(users))

        }

        else {

            console.log("Usuário já cadastrado")

        }

    })
}