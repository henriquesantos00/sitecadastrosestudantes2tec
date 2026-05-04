// Seleção do formulário e da lista
let form = document.getElementById('cadastroForm');
let lista = document.getElementById('listaAlunos');

// Evento de envio do formulário
form.addEventListener('submit', function (event) {
    event.preventDefault();

    // Captura os valores dos campos
    let nome = document.getElementById('nomeAluno').value;
    let idade = document.getElementById('idadeAluno').value;
    let cgm = document.getElementById('cgmAluno').value;
    let email = document.getElementById('emailAluno').value;

    // Criação do item de lista
    const novoItem = document.createElement('li');
    novoItem.innerHTML = `
        <span><strong>${nome}</strong> - Idade: ${idade} anos - CGM: ${cgm} - Email: ${email}</span>
        <button onclick="removerItem(this)">Remover</button>
    `;

    // Adiciona o item na lista
    lista.appendChild(novoItem);

    // Limpa o formulário
    form.reset();
});

// Função para remover aluno da lista
function removerItem(button) {
    let item = button.parentElement;
    lista.removeChild(item);
}