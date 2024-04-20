const menuToggle = document.getElementById('menuToggle');
const container = document.querySelector('.container');

menuToggle.addEventListener('click', function() {
    container.classList.toggle('menu-open');
});

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

