const formContacto = document.getElementById('form-contacto');

if (formContacto) {
    formContacto.addEventListener('submit', function(evento) {
        evento.preventDefault(); 
        
        let formularioValido = true;

        const nombre = document.getElementById('nombre-contacto').value.trim();
        const correo = document.getElementById('correo-contacto').value.trim();
        const mensaje = document.getElementById('mensaje-contacto').value.trim();
        
        const errorNombre = document.getElementById('error-nombre');
        const errorCorreo = document.getElementById('error-correo');
        const errorMensaje = document.getElementById('error-mensaje');

        const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (nombre === '') {
            mostrarError(errorNombre, 'El nombre es obligatorio.');
            formularioValido = false;
        } else if (nombre.length > 100) {
            mostrarError(errorNombre, 'El nombre no puede superar los 100 caracteres.');
            formularioValido = false;
        } else {
            ocultarError(errorNombre);
        }

        if (correo === '') {
            mostrarError(errorCorreo, 'El correo es obligatorio.');
            formularioValido = false;
        } else if (correo.length > 100) {
            mostrarError(errorCorreo, 'El correo no puede superar los 100 caracteres.');
            formularioValido = false;
        } else if (!regexCorreo.test(correo)) {
            mostrarError(errorCorreo, 'Debes ingresar un formato de correo válido.');
            formularioValido = false;
        } else {
            ocultarError(errorCorreo);
        }

        if (mensaje === '') {
            mostrarError(errorMensaje, 'El comentario es obligatorio.');
            formularioValido = false;
        } else if (mensaje.length > 500) {
            mostrarError(errorMensaje, 'El comentario no puede superar los 500 caracteres.');
            formularioValido = false;
        } else {
            ocultarError(errorMensaje);
        }

        if (formularioValido) {
            alert('¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.');
            formContacto.reset();
        }
    });
}