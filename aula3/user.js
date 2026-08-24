var users = JSON.parse(localStorage.getItem("users")) || []
var formReg = document.getElementById("idFormRegister")
var logado = JSON.parse(localStorage.getItem("logado")) || {}
var hello = document.getElementById("idLogUser")

if(hello && logado){
    
    hello.innerHTML = "Olá, " + logado.nome

}    

var formLog = document.getElementById("idFormLogin")

if (formLog) {
    formLog.addEventListener("submit", (e) => {

        e.preventDefault()

        let email = document.getElementById("idLogEmail").value
        let password = document.getElementById("idLogPassword").value
        let incorreta = document.getElementById("idIncorreta")
        let notUser = document.getElementById("idNotUser")

        console.log(users)


        let user = users.find(u => {

            return u.email == email

        })

        if (!user) {

            console.log("Usuário não encontrado")
            notUser.innerHTML = ("Usuário não encontrado")
            return

        }

        if (user.senha == password) {

            localStorage.setItem("logado", JSON.stringify(user))

            window.location.href = "painel.html"

        }

        else {

            console.log("Senha inválida")

            incorreta.innerHTML = ("Senha incorreta")
        }

    })

}

if (formReg) {
    formReg.addEventListener("submit", (e) => {

        e.preventDefault() //impede atualizar a tela

        let name = document.getElementById("idRegName").value
        let email = document.getElementById("idRegEmail").value
        let password = document.getElementById("idRegPassword").value
        let date = document.getElementById("idRegDate").value
        let usuarios = document.getElementById("idUsers")

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

            console.log("Novo usuário")
            users.push(user)
            localStorage.setItem("users", JSON.stringify(users))
            usuarios.innerHTML = JSON.stringify(user, null, 4)       
        }

        else {

            console.log("Usuário já cadastrado")

        }

    })
}


