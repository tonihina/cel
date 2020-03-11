$(document).ready(function() {

  $.ajax({
    type: "POST",
    url: "http://192.168.1.73/ArchivosServidor/mostrarImagen.php",
    cache: false,
    data: "nombre="+localStorage.getItem("nombre"),
    beforeSend: function() {
        $("#fotoPublicar").text("Cargando...");
      },
    success: function(response)
    {
        $('#fotoPublicar').html(response+" Hola "+localStorage.getItem("nombre")+" publica algo").fadeIn();
        
        $("#fotoPublicar").listview("refresh");

    }
});  

});


$(function(){
  $("input[name='imagenHistoria']").on("change", function(){
      var formData = new FormData($("#historiaSubirAservidor")[0]);
      var ruta = "http://192.168.1.73/ArchivosServidor/subirHistoria.php";
      $.ajax({
          url: ruta,
          type: "POST",
          data: formData,
          contentType: false,
          processData: false,
          success: function(datos)
          {
            if(datos=="success"){
              window.location.reload();
            }
            else{
              
            }
          
          }
      });
  });
});

$(document).ready(function() {
  $.ajax({
          type: "POST",
          url: "http://192.168.1.73/ArchivosServidor/mostrarHistorias.php",
          cache: false,
         
          beforeSend: function() {
              $("#historiasTodas").text("Cargando...");
            },
          success: function(response)
          {
              $('#historiasTodas').html(response).fadeIn();
              $("#historiasTodas").listview("refresh");

              
             
          }
  });

});



  $(function() {
   $('#imagenHistoria').change(function(e) {
       addImage(e); 
      });
 
      function addImage(e){
       var file = e.target.files[0],
       imageType = /image.*/;
     
       if (!file.type.match(imageType))
        return;
   
       var reader = new FileReader();
   
       reader.onload = function(e){
          var result=e.target.result;
         $('#imgSalida').attr("src",result);
       }
        
       reader.readAsDataURL(file);
      }
     });
  
function detalleHistoria(usuario){
  $.ajax({
    type: "POST",
    url: "http://192.168.1.73/ArchivosServidor/mostrarDetalleHistoria.php",
    cache: false,
    data: "nombre="+usuario,
    beforeSend: function() {
        $("#mostrarDetalleHistoria").text("Cargando...");
      },
    success: function(response)
    {
        $('#mostrarDetalleHistoria').html(response).fadeIn();
       
       
    }
});  
}
 
