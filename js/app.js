let salvar = () => {

    let dados =localStorage.info == null?[]:JSON.parse(localStorage.info);

    let documento = document.querySelector("#txtDocuemnto").value;
    let nome = document.querySelector("#txtNome").value;
    let email = document.querySelector("#txtEmail").value;
    let cor = document.querySelector("#txtCor").value;

    dados.push ({
        'documento' : documento,
        'nome' : nome,
        'email' :email,
        'cor' : cor
    });

    localStorage.info = JSON.stringify(dados);

    alert("pegou")
} 

let lista = () => {
    let dados =localStorage.info == null?[]:JSON.parse(localStorage.info);
    let tabela = document.querySelector("#tblDados");
    dados.forEach(element => {
        tabela.innerHTML += `
            <tr>
                <td>${element.documento}</td>
                <td>${element.nome}</td>
                <td>${element.email}</td>
                <td slyle = "background-color:${element.cor}'>${element.documento}</td>
                <td>
                    <button class="btn btn-primary" onclick="editar(${element.documento})>Editar</button>
                    <button class="btn btn-danger>Excluir</button>
                </td>
            </tr>
        `;
    });
}

let editar = (documento) => {
    let dados =localStorage.info == null?[]:JSON.parse(localStorage.info);

    let resultado = dados.find(e => e.documento == documento);
    let resultadoIndex =  dados.findIndex(e => e.documento == documento);
    if (resultado != undefined){
    }else{
        alert("Não foi encontrado")
    }
    //  24:56 https://www.youtube.com/watch?v=rwnhpvfWgIQ&t=617s
}