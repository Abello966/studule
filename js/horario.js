/*Prototipo de objeto/classe*/

/*Ligado a um objeto HTML*/
function Horario(obj) {
    /*comeca disponivel*/
    this.disponivel = false; 
    this.atividade = 0 //sem atividade
    this.obj = obj
}


/*Muda a disponibilidade de um horario e devolve*/
function mudaDisponibilidade(ndia, nhora) {
    horario = semana.horarios[ndia][nhora];
    horario.disponivel = !horario.disponivel;
    /*atualiza tempo e status de obj */
    if (horario.disponivel == true) {
        semana.tempo++;
        horario.obj.setAttribute('class', 'available');
    }
    else {
        semana.tempo--;
        horario.obj.setAttribute('class', '');
    }
}

/*Atribui atividade a horario*/
function setAtividade(horario, ativ) {
    horario.atividade = ativ;
    horario.disponivel = false;
    horario.obj.innerHTML = ativ;
}

function horarioClear(horario) {
    horario.obj.setAttribute('class', '');
    horario.atividade = 0;
    horario.obj.innerHTML = ""

    if (horario.disponivel == true) {
        horario.disponivel = false;
        semana.tempo--;
    }
}
