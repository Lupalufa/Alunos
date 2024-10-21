const { alunos } = require("./alunos")

function listarAluno(){
    try {
     console.table(alunos)
    } catch (error) {
        console.error("Aluno não encontrado",error.message)
    }
}

module.exports = { listarAluno }