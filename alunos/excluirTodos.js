const { alunos } = require("./alunos")

function excluirTodosOsAlunos() {
    try {
        alunos.length = 0
    } catch (error) {
     console.error("Erro ao excluir todos os alunos")   
    }
}

module.exports = { excluirTodosOsAlunos }