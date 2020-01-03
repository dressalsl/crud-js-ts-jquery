let salvar = () => {

    let dados =localStorage.info == null?[]:JSON.parse(localStorage.info);

    let documento = document.querySelector("#txtDocuemnto");
    let nome = document.querySelector("#txtNome");
    let email = document.querySelector("#txtEmail");
    let cor = document.querySelector("#txtCor");

    dados.push ({
        'documento' : documento,
        'nome' : nome,
        'email' :email,
        'cor' : cor
    });

    localStorage.info = JSON.stringify(dados);

    alert("salvou")
} 

let lista = () => {
    let dados =localStorage.info == null?[]:JSON.parse(localStorage.info);
    let tabela = document.querySelector("#tblDados");
    tabela.innerHTML = "";
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

let editar = (doc) => {
    let dados =localStorage.info == null?[]:JSON.parse(localStorage.info);

    let documento = document.querySelector("#txtDocuemnto").value;
    let nome = document.querySelector("#txtNome").value;
    let email = document.querySelector("#txtEmail").value;
    let cor = document.querySelector("#txtCor").value;
    let id = document.querySelector("#txtId");

    let btnSalvar = document.querySelector("#btnSalvar").value;
    let btnEditar = document.querySelector("#btnEditar").value;


    let resultado = dados.find(e => e.documento == doc);
    let resultadoIndex =  dados.findIndex(e => e.documento == documento);
    
    if (resultado != undefined){
        btnSalvar.style.display = "none";
        btnEditar.style.display = "block";

        documento.value = resultado.documento;
        nome.value = resultado.nome;
        email.value = resultado.email;
        cor.value = resultado.cor;

        id.value = resultadoIndex;

    }else{
        alert("Não foi encontrado")
    }
}


let modificar = () => {

    let dados =localStorage.info == null?[]:JSON.parse(localStorage.info);

    let documento = document.querySelector("#txtDocuemnto");
    let nome = document.querySelector("#txtNome");
    let email = document.querySelector("#txtEmail");
    let cor = document.querySelector("#txtCor");
    let id = document.querySelector("#txtId");

    let btnSalvar = document.querySelector("#btnSalvar").value;
    let btnEditar = document.querySelector("#btnEditar").value;

    dados[id].documento = documento;
    dados[id].nome = nome;
    dados[id].email = email;
    dados[id].cor = cor;
    
    btnSalvar.style.display = "block";
    btnEditar.style.display = "none";

    localStorage.info = JSON.stringify(dados);

    listar();

    alert("modificou")
} 

let deletar = (doc) => {
    let dados =localStorage.info == null?[]:JSON.parse(localStorage.info);

    let resultadoIndex =  dados.findIndex(e => e.documento == documento);
    
    if (resultado != -1){

        dados.splice(resultadoIndex,1)

        localStorage.info = JSON.stringify(dados);

        listar();

    }else{
        alert("Não foi encontrado")
    }
}