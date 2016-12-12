/*semana precisa ser acessada por todos*/
window.semana = {}

/*prototipo de objeto/classe */
/*recebe lista de objetos horario*/
function Semana(horarios) {
    this.horarios = horarios;
    /*tempo disponivel e a quantidade de horarios livres*/
    this.tempo = 0;
    for (var i = 0; i < horarios.length; i++)
        for (var j = 0; j < horarios[i].length; j++) 
            if(horarios[i][j].disponivel == true)
                this.tempo++
}

/*Cria uma semana inteira vazia*/
function SemanaBootstrap() {
    /*horarios*/
    newhorarios = []
    for (var i = 0; i < window.ndays; i++) {
        day = []
        for (var j = 0; j < window.nhorarios; j++) {
            obj = $("[data-day=" + i + "][data-hor=" + j+ "]")[0]
            hor = new Horario(obj);
            day.push(hor);
        }
        newhorarios.push(day);
    }
    window.semana = new Semana(newhorarios);
}

function generateSemana() {
    /*Primeiro descobre se consegue chegar ate o fim*/
    acc = 0;
    for (var i = 0; i < window.disciplinas.length; i++)
        acc += parseInt(window.disciplinas[i].horas);

    if (semana.tempo / 2 < acc) {
        alert("Impossível completar: adicione tempo livre ou elimine matérias");
        return;
    }

    /*Consegue: preenche por ordem de prioridade*/
    disciplinas.sort(compareDisc);
    var disc_ind = acc = 0;
    for (var i = 0; i < window.ndays; i++) {
        for (var j = 0; j < window.nhorarios; j++) {
            if (semana.horarios[i][j].disponivel == true) {
                /*Preenche horario*/
                setAtividade(semana.horarios[i][j], disciplinas[disc_ind].apelido)
                acc += 0.5;
                /*Checa se acabou o tempo da disciplina */
                if (acc >= disciplinas[disc_ind].horas) {
                    acc = 0;
                    disc_ind++;
                    /*Checa se acabou as disciplinas*/
                    if (disc_ind > disciplinas.length)
                        return;
                }
            }
        }
    }
}

function resetSemana() {
    for (var i = 0; i < window.ndays; i++) 
        for (var j = 0; j < window.nhorarios; j++)
            horarioClear(semana.horarios[i][j]);
}

