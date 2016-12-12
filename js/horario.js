/*Prototipo de objeto/classe*/
function Horario() {
    /*comeca disponivel*/
    this.disponivel = true; 
    this.atividade = 0 //sem atividade
}


/*Muda a disponibilidade de um horario e devolve*/
function mudaDisponibilidade(ndia, nhora) {
    horario = semana.horarios[ndia][nhora];
    horario.disponivel = !horario.disponivel;
    return horario.disponivel;   
}
