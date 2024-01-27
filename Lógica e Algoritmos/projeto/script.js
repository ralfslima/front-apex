// Vetor de pessoas
let vetor = []

// Cadastro
function cadastrar(){
    
    // Criar objeto JSON
    let pessoa = {
        'nome'  :document.querySelector('#nome').value,
        'cidade':document.querySelector('#cidade').value
    }

    // Adicionar o objeto no vetor
    vetor.push(pessoa)

    // Obter o elemento tabela
    let tabela = document.querySelector('#tabela')

    // Limpar a tabela
    tabela.innerHTML = ''

    // Laço de repetição
    for(let indice=0; indice < vetor.length; indice++){

        // Criar uma linha de tabela (tr)
        let linha = tabela.insertRow(-1)

        // Criar colunas
        let colunaNome    = linha.insertCell(0)
        let colunaCidade  = linha.insertCell(1)
        let colunaRemover = linha.insertCell(2)

        // Adicionar os valores nas colunas
        colunaNome.innerText    = vetor[indice].nome
        colunaCidade.innerText  = vetor[indice].cidade
        colunaRemover.innerHTML = `<button class='btn btn-danger' onclick='remover(${indice})'>Remover</button>`
    }

}

// Remover
function remover(indice){
    alert(indice)
}