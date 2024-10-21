const { alunos } = require("./alunos")

function criarAluno(matricula, nome, email, telefone){
    const novosAlunos = {
        matricula,
        nome,
        email,
        telefone
    }
    try {
        alunos.push(novosAlunos)
    } catch (error) {
        console.error("Erro ao cadastrar dados",error.message);
    }
    return novosAlunos
}

module.exports = { criarAluno }