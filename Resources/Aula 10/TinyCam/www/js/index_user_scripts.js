(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* button  #btnCapture */
    $(document).on("click", "#btnImage", function(evt)
    {
        var fnCapturar = function(imageSrc){
            var item = '<li><img src="data:image/jpeg;base64,'+imageSrc+'" style="width:100%!important"/></li>';
            $("#listFiles").append(item);
        };
        var fnFalhar = function(error){
            navigator.notification.alert("Erro ao capturar: " + error, null, "INFORMAÇÃO");
        };
        var opcoes = { 
                quality : 75,
                destinationType: Camera.DestinationType.DATA_URL
        };
        
        // Capturar...
        navigator.camera.getPicture(fnCapturar, fnFalhar, opcoes);

    });
    
        /* button  #btnCaptureComplete */
    $(document).on("click", "#btnVideo", function(evt)
    {
        var fnCapturar = function(mediaFiles) {
            for (var i = 0; i < mediaFiles.length; i += 1) {
                var file = mediaFiles[i];
                var item = '<li><video controls style="width:100%!important"><source src="'+file.fullPath+'" type="'+file.type+'"></video></li>';
                $("#listFiles").append(item);
            }
        };
        var fnFalhar = function(error) {
            navigator.notification.alert("Erro ao capturar: " + error, null, "INFORMAÇÃO");
        };
        var opcoes = { limit:1 };

        // Capturar...
        navigator.device.capture.captureVideo(fnCapturar, fnFalhar, opcoes);
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
