let salvar = () => {

let dados =localStorage.info == null?[]:JSON.parse(localStorage.info);

let documento = document.querySelector("#txtDocuemnto").value;
let nome = document.querySelector("#txtNome").value;
let email = document.querySelector("#txtEmail").value;
let cor = document.querySelector("#txtCor").value;

// 14:47 https://www.youtube.com/watch?v=rwnhpvfWgIQ&list=WL&index=35&t=0s