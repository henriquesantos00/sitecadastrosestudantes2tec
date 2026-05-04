let form = document.getElementById('cadastroForm');
let lista = document.getElementById('listaAlunos');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    let nome = document.getElementById('nomeAluno').value;
    let idade = document.getElementById('idadeAluno').value;

    const novoItem = document.createElement('li');
    novoItem.innerHTML = `<strong>${nome}</strong> - <strong>Idade:</strong> ${idade} anos`;
    lista.appendChild(novoItem);

    form.reset();
});