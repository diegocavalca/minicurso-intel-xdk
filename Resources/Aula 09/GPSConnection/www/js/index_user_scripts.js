(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
     /* button  #btnMap */
    $(document).on("click", "#btnMap", function(evt)
    {
        // Resultado para quando conseguir capturar a posição GPS...
        var fnCapturar = function(position){
            
            // Gravar dados da posição capturada em uma variável...
            var coords = position.coords;
            
            // Exibir dados das coordenadas capturadas...
            navigator.notification.alert(JSON.stringify(coords),"COORDENADAS");
            
            // GOOGLE MAPS: Mostrar marcador no mapa...
            var map = new google.maps.Map(
                            document.getElementById("map"), 
                            { 
                              center : new google.maps.LatLng( coords.latitude, coords.longitude ), 
                              zoom : 5, 
                              mapTypeId : google.maps.MapTypeId.ROADMAP 
                            }
                    );
            var marker = new google.maps.Marker({
                                title : "VOCÊ ESTÁ AQUI: "+coords.latitude+", "+coords.longitude,
                                position : new google.maps.LatLng(coords.latitude, coords.longitude)
                         });
            marker.setMap(map);
            
        }
        
        // Caso falhe na captura, faça isso...
        var fnFalhar = function(error){
            
            navigator.notification.alert("Erro ao capturar posição: "+error.message, "INFORMAÇÃO");
            
        }
        
        // Opções para acessar o GPS...
        var opcoes = { maximumAge: 3000, timeout: 5000, enableHighAccuracy: true };
        
        // CAPTURAR POSIÇÃO: Chamada a API de Geolocalização (GPS) via Apache Cordova
        navigator.geolocation.getCurrentPosition(fnCapturar, fnFalhar, opcoes);
    });
    
    
        /* listitem  #btnNetwork */
    $(document).on("click", "#btnNetwork", function(evt)
    {
        // Verificar se está conectado à internet (rede)...
        if(navigator.connection && navigator.connection.type!="none"){
            
            // Informando o tipo de conexão atual...
            navigator.notification.alert("TIPO DE CONEXÃO: "+navigator.connection.type, "CONECTADO À INTERNET!", "OK");
            
        }else{
            
            // Avisando que não há conexão...
            navigator.notification.alert("Verifique sua conexão à internet e tente novamente.","DESCONECTADO","OK");
            
        }
    });
     
    
        /* listitem  GPS e Mapa */
    $(document).on("click", ".uib_w_3", function(evt)
    {
         activate_page("#pgMap"); 
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
