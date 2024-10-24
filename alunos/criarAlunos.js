const { alunos } = require("./alunos")
var validator = require("validator")

function criarAluno(matricula, nome, email, telefone){
    const novosAlunos = {
        matricula,
        nome,
        email,
        telefone
    }
    try {
        if(!validator.isEmail(email)){
            console.error("O e-mail não é verdadeiro")
            return
        }
        
        if(
        validator.isEmpty(nome) ||
        validator.isEmpty(matricula) ||
        validator.isEmpty(telefone) 
        ){
            console.error("Todos os campos não são verdadeiros")
            return
        }
        alunos.push(novosAlunos)
    } catch (error) {
        console.error("Erro ao cadastrar dados",error.message);
    }
    return novosAlunos
}

module.exports = { criarAluno }