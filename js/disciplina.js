/*todos precisam ver a lista de disciplinas*/
window.disciplinas = [];

/*Prototipo de objeto/classe*/
function Disciplina(nome, apelido, prioridade, horas) {
    this.nome = nome;
    this.apelido = apelido;
    this.prioridade = prioridade;
    this.horas = horas;
}

/*Recebe objeto disciplina e devolve descritor (div) */
function describeDisc(disc) {
    res = document.createElement("div");
    res.setAttribute('class', 'disc_box');
    res.innerHTML = "<h4>" + disc.apelido + " - " + disc.nome + "</h4>";
    res.innerHTML += "<p>Tempo de estudo na semana: <strong>" + disc.horas + "h</strong></p>";
    res.innerHTML += "<p>Prioridade: <strong>" + disc.prioridade + "</strong></p>";
    res.innerHTML +=  "<button onclick='removeDisc(\""+ disc.nome + "\")' type='button' class='btn btn-danger newdisc_but'>Remover</button>";
    return res;
}

/*Descreve todas as disciplinas atuais*/
function describeAllDisc() {
    var all = [];
    for (var i = 0; i < window.disciplinas.length; i++) {
        all.push(describeDisc(window.disciplinas[i]));
    }
    return all;
}

/*Deleta todas disciplinas com nome nome */
function deleteDisc(nome) {
    window.disciplinas = window.disciplinas.filter(function(item) {
        return item.nome != nome;
    });
    global.save();
}

/*compara disciplinas para sorting*/
function compareDisc(disca, discb) {
    if (disca.prioridade < discb.prioridade)
        return 1;
    if (disca.prioridade > discb.prioridade)
        return -1;
    return 0;
}
