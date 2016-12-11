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
  //TODO 
}

