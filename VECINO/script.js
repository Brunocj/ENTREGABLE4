const menuToggle = document.getElementById('menuToggle');
const container = document.querySelector('.container');

menuToggle.addEventListener('click', function() {
    container.classList.toggle('menu-open');
});

function mostrarAlerta() {
  Swal.fire({
      title: '¿Estás seguro?',
      text: '¿Estás seguro de que quieres enviar la solicitud?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#00913f',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, enviar solicitud',
      cancelButtonText: 'Cancelar'
  }).then((result) => {
      if (result.isConfirmed) {
          // Aquí iría el código para enviar la solicitud
          Swal.fire(
              '¡Solicitud enviada!',
              'La solicitud ha sido enviada correctamente.',
              'success'
          );
      } else {
          // El usuario ha cancelado la acción
          Swal.fire(
              'Solicitud cancelada',
              '',
              'info'
          );
      }
  });
}

  function showImage(opcion) {
    var imagenContainer = document.getElementById("imagen-container");
    if (opcion === "deportes") {
      imagenContainer.innerHTML = '<img src="imagen_deportes.jpg" alt="Deportes">';
    } else if (opcion === "cultura") {
      imagenContainer.innerHTML = '<img src="imagen_cultura.jpg" alt="Cultura">';
    }
  }

  function mostrarPopupCerrarSesion() {
    Swal.fire({
        title: '¿Estás seguro?',
        text: '¿Deseas cerrar sesión?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#00913f',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, cerrar sesión'
    }).then((result) => {
        if (result.isConfirmed) {
            // Aquí puedes poner el código para cerrar sesión
            // Por ejemplo, redirigir a la página de inicio de sesión
            window.location.href = "../LOGIN/login.html"; 
        }
    });
}


