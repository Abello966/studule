/*Lida com I/O de cookies (faz intermediario com API) 
/* - Inicializa variaveis globais
/* - Salva elas no cookie 
/* - Guarda constantes */

window.ndays = 7;
window.nhorarios = 24;

//globais: semana e disciplinas
var global = {
    origin: null, //data de origem

    open: function() {
        /*Abre ou chama inicializador se é a primeira vez*/
        if (Cookies.get('origin') && Cookies.get('disciplinas')) {
            /*já existe*/
            window.disciplinas = JSON.parse(Cookies.get('disciplinas'));

            console.log("Dados carregados de: "+ Cookies.get('origin'));
        }
        else {
            window.disciplinas = [];
            Cookies.set('disciplinas', window.disciplinas);
            this.save();
        }

    },
    
    /* atualiza cookie */
    save: function() {
        /*Cookie expira em 7 dias */
        Cookies.set('disciplinas', window.disciplinas)    
        Cookies.set('origin', new Date());
    },
}
                

