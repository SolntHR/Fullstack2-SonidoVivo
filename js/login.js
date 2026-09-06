/*
----------------------------- VALIDACIONES LOGIN ------------------------
*/

const formLogin = document.getElementById('form-login');

if (formLogin) {
    formLogin.addEventListener('submit', function(evento) {
        // Evita que la página se recargue inmediatamente al enviar el formulario
        evento.preventDefault(); 

        // Capturamos los valores ingresados (trim elimina espacios en blanco al inicio y final)
        const email = document.getElementById('email-login').value.trim();
        const pass = document.getElementById('pass-login').value;
        
        // Elementos donde mostraremos los errores
        const errorEmail = document.getElementById('error-email');
        const errorPass = document.getElementById('error-pass');

        // Expresión regular para validar formato estándar de correo
        const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        let formularioValido = true;

        // 1. Validaciones del Correo: Obligatorio, máximo 100 caracteres y formato válido
        if (email === '') {
            mostrarError(errorEmail, 'El correo electrónico es obligatorio.');
            formularioValido = false;
        } else if (email.length > 100) {
            mostrarError(errorEmail, 'El correo no puede superar los 100 caracteres.');
            formularioValido = false;
        } else if (!regexCorreo.test(email)) {
            mostrarError(errorEmail, 'Debes ingresar un formato de correo válido.');
            formularioValido = false;
        } else {
            ocultarError(errorEmail);
        }

        // 2. Validaciones de la Contraseña: Obligatoria y entre 4 y 10 caracteres
        if (pass === '') {
            mostrarError(errorPass, 'La contraseña es obligatoria.');
            formularioValido = false;
        } else if (pass.length < 4 || pass.length > 10) {
            mostrarError(errorPass, 'La contraseña debe tener entre 4 y 10 caracteres.');
            formularioValido = false;
        } else {
            ocultarError(errorPass);
        }

        // Si todas las validaciones pasan, se puede procesar el inicio de sesión
        if (formularioValido) {
            alert('¡Validación exitosa! Iniciando sesión...');
            // En el futuro, aquí se redirigirá al área administrativa o cuenta de usuario
        }
    });
}

// Funciones para organizar y reutilizar la visualización de errores
function mostrarError(elemento, mensaje) {
    elemento.textContent = mensaje;
    elemento.classList.remove('d-none'); // Quita la clase de Bootstrap que oculta el elemento
}

function ocultarError(elemento) {
    elemento.textContent = '';
    elemento.classList.add('d-none'); // Vuelve a ocultar el elemento
}