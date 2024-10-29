const prompt = require("prompt-sync")();

const { alunos } = require("./alunos/alunos")
const { criarAluno } = require("./alunos/criarAlunos")
const { editarAluno } = require("./alunos/editarAlunos")
const { excluirAluno } = require("./alunos/excluirAlunos")
const { listarAluno } = require("./alunos/listarAlunos")
const { excluirTodosOsAlunos } = require("./alunos/excluirTodos")

// const aluno1 = criarAluno("1257", "Pedro", "pedrolucas@gmail.com", "84991262414")
// const aluno2 = criarAluno("1258", "Lucas", "pedrolucas@gmail.com", "84991262414")



// const editaraluno1 = editarAluno("1257", "", "josérihannacardB@gmail.com", "84991262514")


// excluirAluno("1252")

function exibirMenu() {
    console.log("=====================")
    console.log("1 - Criar Aluno")
    console.log("2 - Editar Aluno")
    console.log("3 - Excluir Aluno")
    console.log("4 - Listar Aluno")
    console.log("5 - Apagar todos os alunos")
    console.log("6 - Sair do sistema")
    console.log("======================")
}
let opcao;
do {
    exibirMenu();
    opcao = parseInt(prompt("Digite uma opção:"))
    let matricula;
    switch (opcao) {
        case 1:
            matricula = prompt("Digite a matrícula:")
            let nome = prompt("Digite o nome:")
            let email = prompt("Digite o email:")
            let telefone = prompt("Digite o telefone:")

            criarAluno(matricula,nome,email,telefone)
            console.log("Parabens, Aluno criado com sucesso")
            break;
        case 2:
            matricula = prompt("Digite a matricula existente:")
            let novoNome = prompt("Digite seu novo nome:")
            let novoEmail = prompt("Digite seu novo e-mail:")
            let novoTelefone = prompt("Digite seu novo telefone:")
            editarAluno(matricula, novoNome,novoEmail,novoTelefone)
            break;
        case 3:
            matricula = prompt("Digite a matricula")
            excluirAluno(matricula)
            break;
        case 4:
            listarAluno()
            break;
        case 5:
            excluirTodosOsAlunos()
            console.log("Todos os alunos foram deletados com sucesso!")
            break;
        case 6:
            console.log("Saindo do sistema...")
            break;
        default:
            console.log("Valores inválidos! Digite de 1 a 5")
            break;
    }
}while(opcao !== 6)




