function buscarcep(){
    const inputCep = document.getElementById("input_cep");
    const valorCep = inputCep.value;
    console.log("buscando cep" + valorCep)
    fetch("https://brasilapi.com.br/api/cep/v2/" + valorCep)
    .then((resposta) => {
        return resposta.JSON();
    });

    .then((json) => {
        console.log("O estado é " + json.state);
        console.log("A cidade é " + json.city);
        console.log("O bairro é " + json.neighborhood);
        console.log("A rua é " + json.street);
    });
}

function adicionar(){ 
    const CEP = document.getElementById("input_cep").value;
    const Rua = document.getElementById("input_rua").value;
    const bairro = document.getElementById("input_bairro").value;
    const cidade = document.getElementById("input_cidade").value;
    const estado = document.getElementById("input_estado").value;
}

function configurarEventos() {
    const inputcep = document.getElementById("input_cep");
    inputcep.addEventListener("focusout", buscarcep);
}

window.addEventListener("load", configurarEventos);