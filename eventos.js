const saludarButton = document.getElementById("saludarButton");

saludarButton.addEventListener("click", function(event) {
    event.stopPropagation(); 
    alert("Hola!");
});

const contenedorDiv = document.getElementById("contenedorDiv");

contenedorDiv.addEventListener("click", function() {
    alert("Hola! Soy el div");
});