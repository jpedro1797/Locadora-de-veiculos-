function cadastro(){
    const CPF = document.querySelector('.CPF');
    const Nome = document.querySelector('.Nome');
    const Data = document.querySelector('.Data');
    const Telefone = document.querySelector('.Telefone');
    const Email = document.querySelector('.Email');
    const CEP = document.querySelector('.CEP');
    const Endereco = document.querySelector('.Endereco');
    const Numero = document.querySelector('.Numero');
    const Complemento = document.querySelector('.Complemento');
    const Bairro = document.querySelector('.Bairro');
    const Pais = document.querySelector('.Pais');
    const Estado = document.querySelector('.Estado');
    const Cidade = document.querySelector('.Cidade');
    const Senha = document.querySelector('.Senha');

    const obj = {
    "nome": Nome,
    "email": Email,
    "data_nascimento": Data,
    "celular": Telefone,
    "cpf": CPF,
    "razao_social": null,
    "cnpj": null
    }

    fetch("https://2328-186-192-101-24.ngrok.io/api/customer", {method:"POST", body:JSON.stringify(obj)})
    .then(response => response.json())
    .then(data => {
    /*for (const product of data.products) {
        let listItem = document.createElement('li');
        listItem.appendChild(
        document.createElement('strong')
        ).textContent = product.Name;
        listItem.append(
        ` can be found in ${
            product.Location
        }. Cost: `
        );
        listItem.appendChild(
        document.createElement('strong')
        ).textContent = `£${product.Price}`;
        myList.appendChild(listItem);*/
        console.log(data)
    }
    /*}*/)
    .catch(console.error);
    alert("pegou");
    
}

