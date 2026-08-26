const btAddUser = document.getElementById("idAddUser");
btAddUser?.addEventListener("click", (e) => {

    const modalRegister = document.getElementById("idModalRegister");
    modalRegister.classList.remove("hidden");
    modalRegister.classList.add("flex")

});

const btClose = document.getElementById("idClose");
btClose?.addEventListener("click", (e) => {

    const modalRegister = document.getElementById("idModalRegister");
    modalRegister.classList.add("hidden");
    modalRegister.classList.remove("flex")

});