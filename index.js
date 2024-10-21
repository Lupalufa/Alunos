const prompt = require("prompt-sync")();

const { alunos } = require("./alunos/alunos")
const { criarAluno } = require("./alunos/criarAlunos")
const { editarAluno } = require("./alunos/editarAlunos")
const { excluirAluno } = require("./alunos/excluirAlunos")
const { listarAluno } = require("./alunos/listarAlunos")

const aluno1 = criarAluno("1257", "pedro lucas", "pedrolucas@gmail.com", "84991262414")
const aluno2 = criarAluno("1258", "pedro lucas", "pedrolucas@gmail.com", "84991262414")



const editaraluno1 = editarAluno("1257", "José Rihanna CardB", "josérihannacardB@gmail.com", "84991262514")


excluirAluno("1252")

listarAluno()


