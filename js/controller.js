/**Junta os controladores de todas as models em um lugar, pois são pequenos*/

/* ##### DISCIPLINA ###### */
function addDisc() {
    var name = document.getElementsByName('disciplina')[0].value;
    var abrev = document.getElementsByName('abrev')[0].value;
    var prior = document.getElementsByName('prioridade')[0].value;
    var tempo = document.getElementsByName('tempo')[0].value;
    if (!name || !abrev || !prior || !tempo) {
        alert("Preencha todos os campos adequadamente");
            return;
    }
                
    newdisc = new Disciplina(name, abrev, prior, tempo);
    obj = document.getElementById("disc_container");
    if (disc_num == 0) {
        obj.innerHTML = "";
    } 
    obj.appendChild(describeDisc(newdisc));
    window.disciplinas.push(newdisc);
    disc_num++;
    global.save();
}

function removeDisc(name) {
    /*chama model*/
    deleteDisc(name);
    /*atualiza*/
    location.reload();
}
