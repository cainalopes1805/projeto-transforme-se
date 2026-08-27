var users = JSON.parse(localStorage.getItem("users")) || []
var logado = JSON.parse(localStorage.getItem("logado")) || {}
var hello = document.getElementById("idUsuario")

var idListUsers = document.getElementById("idListUsers")

if(idListUsers) {
    let i = 0;
    users.forEach( (u) => {

        let tdName = document.createElement("td");
        tdName.innerHTML = u.nome;
        tdName.classList.add("p-3");
        tdName.classList.add("rounded");
        tdName.classList.add("bg-secondary");
        tdName.classList.add("text-dark");

        let tdEmail = document.createElement("td");
        tdEmail.innerHTML = u.email;
        tdEmail.classList.add("p-3");
        tdEmail.classList.add("rounded");
        tdEmail.classList.add("bg-secondary");
        tdEmail.classList.add("text-dark");

        let tdAction = document.createElement("td");
        tdAction.classList.add("p-3");
        tdAction.classList.add("rounded");
        tdAction.classList.add("bg-secondary");
        tdAction.classList.add("text-dark");
        tdAction.classList.add("text-center");

        let btV = document.createElement("a");
        btV.innerHTML = "V";
        btV.classList.add("show");
        btV.classList.add("cursor-pointer");
        btV.classList.add("bg-terciary");
        btV.classList.add("rounded-full");
        btV.classList.add("m-2");
        btV.classList.add("py-2");
        btV.classList.add("px-3");
        btV.classList.add("fs-7");
        btV.classList.add("text-white");
        btV.classList.add("hover:text-dark");
        btV.classList.add("hover:bg-white");
        btV.id = i;
        tdAction.appendChild(btV);

        let span = document.createElement("span");
        span.innerHTML = "-";
        tdAction.appendChild(span);

        let btX = document.createElement("a");
        btX.innerHTML = "X";
        btX.classList.add("remove");
        btX.classList.add("cursor-pointer");
        btX.classList.add("bg-terciary");
        btX.classList.add("rounded-full");
        btX.classList.add("m-2");
        btX.classList.add("py-2");
        btX.classList.add("px-3");
        btX.classList.add("fs-7");
        btX.classList.add("text-white");
        btX.classList.add("hover:text-dark");
        btX.classList.add("hover:bg-white");
        btX.id = i;
        tdAction.appendChild(btX);


        let tr = document.createElement("tr");
        tr.classList.add("bg-terciary");
        tr.classList.add("text-white");
        
        tr.appendChild(tdName);
        tr.appendChild(tdEmail);
        tr.appendChild(tdAction);

        idListUsers.appendChild(tr);
        i++;

    });

}

var botoesV = document.querySelectorAll(".show")
botoesV.forEach((b) => {
    b.addEventListener("click", () => {
        const id = b.id;
        b.innerHTML = users[id].nascimento;
    })
})

if(hello && logado){
    
    hello.innerHTML = "Olá, " + logado.nome

}    

var formLog = document.getElementById("idFormLogin")

if (formLog) {
    formLog.addEventListener("click", (e) => {

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

            window.location.href = "auth.html"

        }

        else {

            console.log("Senha inválida")

            response.innerHTML = "Senha inválida"

        }

    })

}

var formReg = document.getElementById("idFormRegister")

if (formReg) {

    formReg.addEventListener("click", (e) => {

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

        window.location.href = "auth.html"

    })
}