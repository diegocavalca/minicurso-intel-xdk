(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
        /* listitem  #btnConsole */
    $(document).on("click", "#btnConsole", function(evt)
    {
        /* your code goes here */ 
        console.log("Clicou no botão 'console'");
        console.log("Posso manipular qualquer mensagem no log, muito útil para debugarmos o código...");
        
    });
     
     /* listitem  #btnAlerta */
    $(document).on("click", "#btnAlertaCorreto", function(evt)
    {
        /* your code goes here */ 
        alert("Teste de mensagem do botão 'alerta sem erro'...");
    });
    
     /* listitem  #btnAlertaErrado */
    $(document).on("click", "#btnAlertaErrado", function(evt)
    {
        /* your code goes here */ 
        aler("Teste de mensagem do botão 'alerta com erro'...");
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
