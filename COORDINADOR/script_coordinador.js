const menuToggle = document.getElementById('menuToggle');
const container = document.querySelector('.container');

menuToggle.addEventListener('click', function() {
    container.classList.toggle('menu-open');
});

function mostrarAlerta() {
    var confirmacion = window.confirm("¿Estás seguro de que quieres enviar la solicitud?");
    if (confirmacion) {
      // Aquí iría el código para enviar la solicitud
      alert("¡Solicitud enviada correctamente!");
    } else {
      // El usuario ha cancelado la acción
      alert("Solicitud cancelada.");
    }
  }

  function showImage(opcion) {
    var imagenContainer = document.getElementById("imagen-container");
    if (opcion === "deportes") {
      imagenContainer.innerHTML = '<img src="imagen_deportes.jpg" alt="Deportes">';
    } else if (opcion === "cultura") {
      imagenContainer.innerHTML = '<img src="imagen_cultura.jpg" alt="Cultura">';
    }
  }

  function cerrarsesiom_1() {
    var confirmacion = window.confirm("¿Estás seguro de que quieres cerrar sesión?");
    if (confirmacion) {
        // Redirigir a la página de cierre de sesión solo si el usuario acepta
        window.location.href = "../LOGIN/login.html";
    } else {
        // El usuario ha cancelado la acción
        alert("La sesión no se cerró.");
    }
    return false;
}
