//boton enviado correctamente
const boton = document.getElementById('enviarBtn');

boton.addEventListener('click', (e) => {
    e.preventDefault(); // Previene el envío real si es un form

    Swal.fire({
        title: 'Mensaje enviado',
        text: 'Gracias por contactarme. Te responderé pronto 😊',
        icon: 'success',
        confirmButtonText: 'Aceptar'
    });
});