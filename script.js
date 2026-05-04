let form = document.getElementById('cadastroForm');
let lista = document.getElementById('listaAlunos');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    let nome = document.getElementById('nomeAluno').value;
    let idade = document.getElementById('idadeAluno').value;
    let cgm = document.getElementById('cgmAluno').value;
    let email = document.getElementById('emailAluno').value;

    const novoItem = document.createElement('li');
    novoItem.innerHTML = `
        <strong>${nome}</strong> - <strong>Idade:</strong> ${idade} anos
        - <strong>CGM:</strong> ${cgm} - <strong>Email:</strong> ${email}
    `;
    lista.appendChild(novoItem);

    form.reset();
});