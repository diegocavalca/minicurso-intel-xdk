(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    /* listitem  #btnAgenda */
    $(document).on("click", "#btnAgenda", function(evt)
    {
        // Limpar lista de contatos...
        $("#listaContatos").empty();

        // Definindo as opções de pesquisa de contatos...
        var options = new ContactFindOptions();
            options.multiple = true;    
            options.filter = "";
        
        // Campos a serem pesquisados...
        var filter = ["*"];
        
        // Capturando a agenda (todos os contatos)...
        navigator.contacts.find(filter, function(contatos){
            
                                            // Passar pelos contatos encontrados...
                                            for (var i = 0; i < contatos.length; i++) {
                                                                                                
                                                /*********** CAPTURAR DADOS DO CONTATO ************/
                                                
                                                // Contato analisado...
                                                var contato = contatos[i];
                                                
                                                    // Nome do contato...
                                                var nome = contato.displayName;    
                                                    // Telefone (1º cadastrado)...
                                                var telefone = "...";
                                                if(contato.phoneNumbers) telefone = contato.phoneNumbers[0].value;
                                                    // Email (1º cadastrado)...
                                                var email = "...";
                                                if(contato.emails) email = contato.emails[0].value;                                                
                                                
                                                /******* FIM DA CAPTURA DE DADOS DO CONTATO *******/
                                                
                                                // Montando um item de lista (nova linha) com os dados do contato...
                                                var item = '<li>' +
                                                              '<a>'+
                                                                  '<h3>' + nome + '</h3>' +
                                                                  '<p><i class="icon phone"></i> ' + telefone + '</p>' +
                                                                  '<p><i class="icon mail"></i> ' + email + '</p>' +
                                                              '</a>' +
                                                           '</li>';
                                                
                                                // Incluindo o item (nova linha) na lista...
                                                $("#listaContatos").append(item);
                                                                                                
                                            }
                                            
                                            // Ir para a página de contatos (agenda)...
                                            $.ui.loadContent("#pgContatos",false,false,"slide-out");
            
                                        }, function(error) {
                                                alert('Erro ao analisar agenda de contatos!');
                                            }, options);
    });
        
    
    /* listitem  #btnFiles */
    $(document).on("click", "#btnFiles", function(evt)
    {
        
        var msg = "<br/>";
        
        // Diretório RAÍZ de instalação de apps...
        msg += "DIRETÓRIO RAÍZ DE INSTALAÇÃO DE APPS (INTERNO): "+(cordova.file.applicationStorageDirectory ? cordova.file.applicationStorageDirectory.length : 0)+"<br/>";

        // Diretório de arquivos (RAÍZ) na memória externa...
        msg += "DIRETÓRIO RAÍZ NA MEMÓRIA EXTERNA (SD): "+(cordova.file.externalRootDirectory ? cordova.file.externalRootDirectory.length : 0)+"<br/>";       
        
        // Diretório iCloud...
        msg += "DIRETÓRIO RAÍZ DO ICLOUD (INTERNO): "+(cordova.file.syncedDataDirectory ? cordova.file.syncedDataDirectory.length : 0)+"<br/>";       
        
        navigator.notification.alert(msg, null, "SISTEMA DE ARQUIVOS", "OK");
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
