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
        if (Cookies.get('origin')) {
            /*já existe*/
            window.semana = Cookies.get('semana');
            window.disciplinas = Cookies.get('disciplinas');
            console.log("Dados carregados de: "+ Cookies.get('origin'));
        }
        else {
            window.semana = SemanaBootstrap();
            this.save();
        }   
    },
    
    /* atualiza cookie */
    save: function() {
        /*Cookie expira em 7 dias */
        Cookies.set('semana', window.semana, {expires: 7})
        Cookies.set('disciplinas', window.disciplinas, {expires: 7})    
        Cookies.set('origin', new Date());
    },
}
                

