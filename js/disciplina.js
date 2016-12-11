/*todos precisam ver a lista de disciplinas*/
window.disciplinas = []

/*Prototipo de objeto/classe*/
function Disciplina(nome, apelido, prioridade) {
    this.nome = nome;
    this.apelido = apelido;
    this.prioridade = prioridade;
    this.horarios = [] //necessario?
}
