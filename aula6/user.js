var users = JSON.parse(localStorage.getItem("users")) || []
var logado = JSON.parse(localStorage.getItem("logado")) || {}
var hello = document.getElementById("idUsuario")

/*function name(parametro1, p2){
    return
}*/

function createButton(text, classes, i){
    let bt = document.createElement("a");
    bt.innerHTML = text;

    classes.forEach((c) => {
        bt.classList.add(c);
    })

    bt.classList.add("cursor-pointer");
    bt.classList.add("bg-primary");
    bt.classList.add("rounded-full");
    bt.classList.add("m-2");
    bt.classList.add("py-2");
    bt.classList.add("px-3");
    bt.classList.add("fs-7");
    bt.classList.add("hover:text-white");
    bt.classList.add("hover:bg-terciary");
    bt.classList.add("shadow-md");
    bt.dataset.id = i;
    return bt;
}

var idListUsers = document.getElementById("idListUsers")

if(idListUsers) {
    let i = 0;
    users.forEach((u) => {

        let tdName = document.createElement("td");
        tdName.innerHTML = u.nome;
        tdName.classList.add("p-4");
        tdName.classList.add("rounded");
        tdName.classList.add("bg-darkBlue");
        tdName.classList.add("text-white");

        let tdEmail = document.createElement("td");
        tdEmail.innerHTML = u.email;
        tdEmail.classList.add("p-4");
        tdEmail.classList.add("rounded");
        tdEmail.classList.add("bg-darkBlue");
        tdEmail.classList.add("text-white");

        let tdAction = document.createElement("td");
        tdAction.classList.add("py-4");
        tdAction.classList.add("px-4");
        tdAction.classList.add("rounded");
        tdAction.classList.add("bg-darkBlue");
        tdAction.classList.add("text-darkBlue");
        tdAction.classList.add("text-center");

        tdAction.appendChild(
            createButton("V", ["show"], i)
            
        ); 

        let span = document.createElement("span");
        span.innerHTML = "---------";
        
        tdAction.appendChild(span);

           tdAction.appendChild(
            createButton("X", ["bg-red", "text-white", "remove"], i)
        ); 

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
        const id = b.dataset.id;
        b.innerHTML = users[id].nascimento;
    });
})

var botoesX = document.querySelectorAll(".remove")
botoesX.forEach((b) => {
    b.addEventListener("click", () => {
        const id = b.dataset.id;
        users.splice(id, 1); 

        localStorage.setItem("users", JSON.stringify(users));
        window.location.href = "auth.html";

    });
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
            alert("Usuário não encontrado")

        }

        if (user.senha == password) {

            localStorage.setItem("logado", JSON.stringify(user))
            window.location.href = "auth.html"

        }

        else {

            console.log("Senha inválida")
            response.innerHTML = "Senha inválida"
            alert("Senha inválida")

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