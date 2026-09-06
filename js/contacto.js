const formContacto = document.getElementById('form-contacto');

if (formContacto) {
    formContacto.addEventListener('submit', function(evento) {
        evento.preventDefault(); 
        
        let formularioValido = true;

        // Capturar los valores
        const nombre = document.getElementById('nombre-contacto').value.trim();
        const correo = document.getElementById('correo-contacto').value.trim();
        const mensaje = document.getElementById('mensaje-contacto').value.trim();
        
        // Capturar los contenedores de error
        const errorNombre = document.getElementById('error-nombre');
        const errorCorreo = document.getElementById('error-correo');
        const errorMensaje = document.getElementById('error-mensaje');

        const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // 1. Validación de Nombre[cite: 1]
        if (nombre === '') {
            mostrarError(errorNombre, 'El nombre es obligatorio.');
            formularioValido = false;
        } else if (nombre.length > 100) {
            mostrarError(errorNombre, 'El nombre no puede superar los 100 caracteres.');
            formularioValido = false;
        } else {
            ocultarError(errorNombre);
        }

        // 2. Validación de Correo[cite: 1]
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

        // 3. Validación de Comentario[cite: 1]
        if (mensaje === '') {
            mostrarError(errorMensaje, 'El comentario es obligatorio.');
            formularioValido = false;
        } else if (mensaje.length > 500) {
            mostrarError(errorMensaje, 'El comentario no puede superar los 500 caracteres.');
            formularioValido = false;
        } else {
            ocultarError(errorMensaje);
        }

        // Si todo está correcto
        if (formularioValido) {
            alert('¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.');
            formContacto.reset(); // Limpia los campos del formulario
        }
    });
}