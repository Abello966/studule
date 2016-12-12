/*semana precisa ser acessada por todos*/
window.semana = {}

/*prototipo de objeto/classe */
/*recebe lista de objetos horario*/
function Semana(horarios) {
    this.horarios = horarios;
    /*tempo disponivel e a quantidade de horarios livres*/
    this.tempo = 0;
    for (var i = 0; i < horarios.lenght; i++) 
        if(horarios[i].disponivel == true)
            this.tempo++
}

/*Cria uma semana inteira vazia*/
function SemanaBootstrap() {
    /*horarios*/
    newhorarios = []
    for (var i = 0; i < window.ndays; i++) {
        day = []
        for (var j = 0; j < window.nhorarios; j++) {
            hor = new Horario();
            day.push(hor);
        }
        newhorarios.push(day);
    }
    window.semana = new Semana(newhorarios);
}

