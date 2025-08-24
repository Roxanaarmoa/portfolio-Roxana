//* Formulario para enviar correos (Gmail)

const form = document.getElementById('contactForm');

form.addEventListener('submit', async (e) => {
    e.preventDefault();// evita recargar la página
    
    //Creamos un objeto para guardar los datos 
    const formData = {
        email:document.getElementById ("email").value,
        message:document.getElementById("message").value,

    }
    
    //sweetalert enviando..
    try {
        Swal.fire({
            text: 'Enviando... puede demorar unos minutos',
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            }
});
    //fetch envia o recibe datos, en este caso esta enviado al backendatos del email
        const response = await fetch("https://portfoliobackend-roxana.onrender.com/send", {
            method: "POST",
            headers: {
                "Content-Type": "application/json", // Indicamos que enviamos JSON
                },
            body: JSON.stringify(formData), // Convertimos los datos a JSON
        });

    if (response.ok) {
        // Alerta con SweetAlert si fue exitoso

        Swal.fire({
        text: 'Enviado correctamente',
        icon: 'success',
        confirmButtonText: 'Cerrar'
    });
      form.reset(); // limpia el formulario
    } else {
        Swal.fire({
        title: 'Oops...',
        text: 'Hubo un error al enviar el mensaje.',
        icon: 'error',
        confirmButtonText: 'Intentar de nuevo'
    });
    }
    } catch (error) {
    Swal.fire({
        title: 'Error de conexión',
        text: 'No se pudo conectar con el servidor.',
        icon: 'error',
        confirmButtonText: 'Cerrar'
    });
    console.error(error);
}
});