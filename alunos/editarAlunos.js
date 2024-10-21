const { alunos } = require("./alunos")

function editarAluno(matricula, novoNome, novoEmail, novoTelefone){
    try {
        const aluno = alunos.find(aluno => 
            aluno.matricula === matricula
        )
        if(aluno){
            aluno.nome = novoNome,
            aluno.email = novoEmail,
            aluno.telefone = novoTelefone
            console.log("Aluno editado com sucesso")
        }else {
            console.log("Aluno não encontrado")
        }
    } catch (error) {
        console.error("Error ao editar aluno",error.message)
    }
}

module.exports = { editarAluno }