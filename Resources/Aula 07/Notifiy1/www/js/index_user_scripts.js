(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {

     
    
        /* listitem  #btnAlert */
    $(document).on("click", "#btnAlert", function(evt)
    {
        /* your code goes here */ 
        navigator.notification.alert("Qualquer mensagem...","Informação","OK");
    });
    
        /* listitem  #btnConfirm */
    $(document).on("click", "#btnConfirm", function(evt)
    {
        /* your code goes here */
        navigator.notification.confirm("Confirma a ação?", function(buttonID){
                
                navigator.notification.alert("Você clicou no botão: "+buttonID,"Informação","OK");
            
            }, "Confirme para continuar",["Sim","Não"]);
    });
    
        /* listitem  #btnBepp */
    $(document).on("click", "#btnBepp", function(evt)
    {
        /* your code goes here */ 
        navigator.notification.beep(1);
    });
    
    
        /* listitem  #btnVibrate */
    $(document).on("click", "#btnVibrate", function(evt)
    {
        /* your code goes here */ 
    });
    
        /* listitem  #btnInfo */
    $(document).on("click", "#btnInfo", function(evt)
    {
        /* your code goes here */ 
        var info = "MODELO: "+device.model+"<br/>";
            info += "PLATAFORMA: "+device.platform+" / VERSÃO (S.O.): "+device.version+"<br/>";    
            info += "UUID (IMEI): "+device.uuid;
        
        navigator.notification.alert(info, "INFORMAÇÕES", "OK");
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
