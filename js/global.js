/*Lida com I/O de cookies (faz intermediario com API) 
/*Inicializa variaveis globais
/*Salva elas no cookie */


//globais: semana e disciplinas
var global {
    open: function() {
        /*Abre ou chama inicializador se é a primeira vez*/
        if ((sem = Cookies.get('semana')) != undefined)
            window.semana = sem;
        else 
            window.semana = SemanaBootstrap(); //definido em semana.js
        
        /*disciplina nao precisa inicializar se nao tem*/
        if ((disc = Cookies.get('disciplinas')) != undefined)
            window.disciplinas = [];

        /*Salva em caso de primeira vez*/
        if (sem == undefined) 
            this.save();
        
    }
    
    /* atualiza cookie */
    save: function() {
        /*Cookie expira em 7 dias */
        Cookies.set('semana', window.semana, {expires: 7})
        Cookies.set('disciplinas', window.disciplinas, {expires: 7})    
    }
}
                

