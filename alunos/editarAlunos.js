const { alunos } = require("./alunos")
var validator = require("validator")

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
        }
        if(!validator.isEmail(novoEmail)){
            console.error("O e-mail não é verdadeiro")
            return
        }
        
        if(
        validator.isEmpty(novoNome) ||
        validator.isEmpty(novoTelefone)
        ){
            console.error("Todos os campos não são verdadeiros")
            return
        }
        else {
            console.log("Aluno não encontrado")
        }
    } catch (error) {
        console.error("Error ao editar aluno",error.message)
    }
}

module.exports = { editarAluno }