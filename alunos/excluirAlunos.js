const { alunos } = require("./alunos")

function excluirAluno(matricula){
    try {
        const indice = alunos.findIndex(aluno =>
            aluno.matricula === matricula
        )
        if(indice === -1){
            console.log("Aluno não encontrado")
        }
        else {
            alunos.splice(indice, 1)
            console.log("Aluno Excluido com sucesso")
        }
    } catch (error) {
        console.error("Erro ao excluir aluno",error.message1)
    }

}

module.exports = {excluirAluno}