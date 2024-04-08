function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

// Obtener todas las imágenes con la clase 'myImg'
var images = document.getElementsByClassName('myImg');

// Recorrer todas las imágenes y agregar el evento onclick
for (var i = 0; i < images.length; i++) {
    images[i].onclick = function(){
        // Mostrar el modal al hacer clic en la imagen
        modal.style.display = "block";
        // Establecer la imagen dentro del modal como la imagen clicada
        modalImg.src = this.src;
        // Establecer el texto de la leyenda del modal como el atributo 'alt' de la imagen clicada
        captionText.innerHTML = this.alt;
    }
}

// Obtener el modal, imagen, texto de la leyenda y el botón de cierre
var modal = document.getElementById('myModal');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var span = document.getElementsByClassName("close")[0];

// Cerrar el modal cuando se haga clic en el botón de cierre
span.onclick = function() { 
    modal.style.display = "none";
}