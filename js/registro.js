function validarDigitoVerificador(run) {
    if (run.length < 8) return false;

    const cuerpo = run.slice(0, -1);
    const dvIngresado = run.slice(-1).toUpperCase();

    if (!/^[0-9]+$/.test(cuerpo)) return false;

    let suma = 0;
    let multiplicador = 2;

    for (let i = cuerpo.length - 1; i >= 0; i--) {
        suma += parseInt(cuerpo[i]) * multiplicador;
        multiplicador = multiplicador === 7 ? 2 : multiplicador + 1;
    }

    const resto = suma % 11;
    const dvCalculado = 11 - resto;

    let dvEsperado = dvCalculado.toString();
    if (dvCalculado === 11) dvEsperado = '0';
    if (dvCalculado === 10) dvEsperado = 'K';

    return dvEsperado === dvIngresado;
}


const formRegistro = document.getElementById('form-registro');

const datosTerritoriales = [
    {
        region: "Región Metropolitana de Santiago",
        comunas: ["Santiago", "Conchalí", "Maipú", "Providencia", "Puente Alto", "Ñuñoa"]
    },
    {
        region: "Región de Valparaíso",
        comunas: ["Valparaíso", "Viña del Mar", "Quilpué", "Villa Alemana", "San Antonio"]
    },
    {
        region: "Región del Biobío",
        comunas: ["Concepción", "Talcahuano", "Los Ángeles", "San Pedro de la Paz"]
    }
];

const selectRegion = document.getElementById('region-registro');
const selectComuna = document.getElementById('comuna-registro');

function inicializarRegiones() {
    if (!selectRegion) return;

    datosTerritoriales.forEach(item => {
        const opcion = document.createElement('option');
        opcion.value = item.region;
        opcion.textContent = item.region;
        selectRegion.appendChild(opcion);
    });
}

if (selectRegion) {
    selectRegion.addEventListener('change', function() {
        const regionSeleccionada = this.value;
        
        selectComuna.innerHTML = '<option value="">Seleccione una comuna...</option>';
        
        if (regionSeleccionada !== "") {
            const datosRegion = datosTerritoriales.find(item => item.region === regionSeleccionada);
            
            datosRegion.comunas.forEach(comuna => {
                const opcion = document.createElement('option');
                opcion.value = comuna;
                opcion.textContent = comuna;
                selectComuna.appendChild(opcion);
            });
            
            selectComuna.disabled = false;
        } else {
            selectComuna.disabled = true;
        }
    });
}

inicializarRegiones();

if (formRegistro) {
    formRegistro.addEventListener('submit', function(evento) {
        evento.preventDefault();
        
        let formularioValido = true;

        const inputRun = document.getElementById('run-registro').value.trim();
        const errorRun = document.getElementById('error-run');
        
        const regexRun = /^[0-9]+[0-9Kk]$/;

        if (inputRun === '') {
            mostrarError(errorRun, 'El RUN es obligatorio.');
            formularioValido = false;
        } else if (!regexRun.test(inputRun)) {
            mostrarError(errorRun, 'El RUN debe ingresarse sin puntos ni guion.');
            formularioValido = false;
        } else if (!validarDigitoVerificador(inputRun)) {
            mostrarError(errorRun, 'El dígito verificador no coincide o el RUN es inválido.');
            formularioValido = false;
        } else {
            ocultarError(errorRun);
        }

        const inputNombre = document.getElementById('nombre-registro').value.trim();
        const errorNombre = document.getElementById('error-nombre');
        if (inputNombre === '') {
            mostrarError(errorNombre, 'El nombre es obligatorio.');
            formularioValido = false;
        } else if (inputNombre.length > 50) {
            mostrarError(errorNombre, 'Máximo 50 caracteres.');
            formularioValido = false;
        } else {
            ocultarError(errorNombre);
        }

        const inputApellido = document.getElementById('apellido-registro').value.trim();
        const errorApellido = document.getElementById('error-apellido');
        if (inputApellido === '') {
            mostrarError(errorApellido, 'Los apellidos son obligatorios.');
            formularioValido = false;
        } else if (inputApellido.length > 100) {
            mostrarError(errorApellido, 'Máximo 100 caracteres.');
            formularioValido = false;
        } else {
            ocultarError(errorApellido);
        }

        const inputEmail = document.getElementById('email-registro').value.trim();
        const errorEmail = document.getElementById('error-email-registro') || document.getElementById('error-email');
        const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (inputEmail === '') {
            mostrarError(errorEmail, 'El correo es obligatorio.');
            formularioValido = false;
        } else if (inputEmail.length > 100) {
            mostrarError(errorEmail, 'Máximo 100 caracteres.');
            formularioValido = false;
        } else if (!regexCorreo.test(inputEmail)) {
            mostrarError(errorEmail, 'Formato de correo inválido.');
            formularioValido = false;
        } else {
            ocultarError(errorEmail);
        }

        const inputTipo = document.getElementById('tipo-registro').value;
        const errorTipo = document.getElementById('error-tipo');
        if (inputTipo === '') {
            mostrarError(errorTipo, 'Debe seleccionar un tipo de usuario.');
            formularioValido = false;
        } else {
            ocultarError(errorTipo);
        }

        const inputRegion = document.getElementById('region-registro').value;
        const inputComuna = document.getElementById('comuna-registro').value;
        const errorRegion = document.getElementById('error-region');
        const errorComuna = document.getElementById('error-comuna');
        
        if (inputRegion === '') {
            mostrarError(errorRegion, 'Debe seleccionar una región.');
            formularioValido = false;
        } else {
            ocultarError(errorRegion);
        }

        if (inputComuna === '') {
            mostrarError(errorComuna, 'Debe seleccionar una comuna.');
            formularioValido = false;
        } else {
            ocultarError(errorComuna);
        }

        const inputDireccion = document.getElementById('direccion-registro').value.trim();
        const errorDireccion = document.getElementById('error-direccion');
        if (inputDireccion === '') {
            mostrarError(errorDireccion, 'La dirección es obligatoria.');
            formularioValido = false;
        } else if (inputDireccion.length > 300) {
            mostrarError(errorDireccion, 'Máximo 300 caracteres.');
            formularioValido = false;
        } else {
            ocultarError(errorDireccion);
        }
        
        const inputPassword = document.getElementById('password-registro').value;
        const errorPassword = document.getElementById('error-password');
        if (inputPassword === '') {
            mostrarError(errorPassword, 'La contraseña es obligatoria.');
            formularioValido = false;
        } else if (inputPassword.length < 3) {
            mostrarError(errorPassword, 'La contraseña debe tener entre 4 y 10 caracteres.');
            formularioValido = false;
        } else {
            ocultarError(errorPassword);
        }

        const inputConfirm = document.getElementById('confirm-password-registro').value;
        const errorConfirm = document.getElementById('error-confirm-password');
        if (inputConfirm === '') {
            mostrarError(errorConfirm, 'Debe confirmar su contraseña.');
            formularioValido = false;
        } else if (inputPassword !== inputConfirm) {
            mostrarError(errorConfirm, 'Las contraseñas no coinciden.');
            formularioValido = false;
        } else {
            ocultarError(errorConfirm);
        }

        if (formularioValido) {
            const usuarioExiste = usuarios.some(u => u.rut === inputRun || u.correo === inputEmail);
            
            if (usuarioExiste) {
                alert('Error: Ya existe una cuenta asociada a este RUN o correo electrónico.');
                return;
            }

            const nuevoUsuario = {
                rut: inputRun,
                nombre: `${inputNombre} ${inputApellido}`,
                correo: inputEmail,
                password: inputPassword,
                rol: inputTipo,
                activo: true
            };
            
            usuarios.push(nuevoUsuario);

            alert(`¡Registro exitoso, ${inputNombre}! Serás redirigido al login.`);
            formRegistro.reset();
            window.location.href = 'login.html';
        }
    });
}

