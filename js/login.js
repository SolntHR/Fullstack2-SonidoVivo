const formLogin = document.getElementById('form-login');

if (formLogin) {
    formLogin.addEventListener('submit', function(evento) {
        evento.preventDefault();

        const email = document.getElementById('email-login').value.trim();
        const pass = document.getElementById('pass-login').value;
        
        const errorEmail = document.getElementById('error-email');
        const errorPass = document.getElementById('error-pass');

        const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        let formularioValido = true;

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

        if (pass === '') {
            mostrarError(errorPass, 'La contraseña es obligatoria.');
            formularioValido = false;
        } else if (pass.length < 4 || pass.length > 10) {
            mostrarError(errorPass, 'La contraseña debe tener entre 4 y 10 caracteres.');
            formularioValido = false;
        } else {
            ocultarError(errorPass);
        }

        if (formularioValido) {
            const usuarioEncontrado = (typeof usuarios !== 'undefined')
                ? usuarios.find(u => u.correo.toLowerCase() === email.toLowerCase() && u.password === pass)
                : null;

            if (usuarioEncontrado) {
                if (usuarioEncontrado.rol === 'Administrador') {
                    localStorage.setItem('sesionSonidoVivo', JSON.stringify({ rol: 'admin', correo: email }));
                    window.location.href = '/admin/index_admin.html';
                } else {
                    localStorage.setItem('sesionSonidoVivo', JSON.stringify({ rol: 'cliente', correo: email }));
                    window.location.href = 'index.html';
                }
            } else {
                alert('Correo electrónico o contraseña incorrectos.');
            }
        }
    });
}

function mostrarError(elemento, mensaje) {
    elemento.textContent = mensaje;
    elemento.classList.remove('d-none');
}

function ocultarError(elemento) {
    elemento.textContent = '';
    elemento.classList.add('d-none');
}