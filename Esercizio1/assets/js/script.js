var dataCorrente = new Date;
var registro = [];
var avviso = document.getElementById('avviso');

function Student(_nome, _cognome, _eta) {
    this.nome = _nome;
    this.cognome = _cognome;
    this.eta = _eta;
}

window.addEventListener('DOMContentLoaded', init());

function init() {
    avviso.style.visibility = 'hidden';
}

document.getElementById('aggiungi').addEventListener('click', (e) => {
    e.preventDefault();
    let newNome = document.getElementById('nome').value;
    let newCognome = document.getElementById('cognome').value;

    let campoData = document.getElementById('nascita').value;
    let data = new Date(campoData);
    let anni = dataCorrente.getFullYear() - data.getFullYear();

    let newStudent = new Student(newNome, newCognome, anni);

    if(newNome == '' || newCognome == '' || campoData == '') {
        avviso.style.visibility = 'visible';
        return;
    }

    registro.push(newStudent);

    addStudent();
    cancellaForm();
});

function addStudent() {
    avviso.style.visibility = 'hidden';
    let lista = document.getElementById('lista');
    lista.innerHTML = '';

    registro.forEach((elemento) => {
        lista.innerHTML += `<tr>
        <td>${elemento.nome}</td>
        <td>${elemento.cognome}</td>
        <td>${elemento.eta}</td>
        </tr>`
    });
}

function cancellaForm() {
    document.getElementById('nome').value = '';
    document.getElementById('cognome').value = '';
    document.getElementById('nascita').value = '';
}