const botao = document.querySelector(".btnLogin");
const form = document.querySelector("form");

botao.addEventListener("click", (event) =>{
    event.preventDefault();
    form.classList.add("esconderForm");
    var title = document.querySelector("#title");
    title.innerHTML = "Você entrou na plataforma meu parceiro";


})
