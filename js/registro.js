// Función matemática para validar el RUT chileno (Módulo 11)
function validarDigitoVerificador(run) {
    // Si el largo es menor a 8 (ej: 1.000.000-0 sin formato), es inválido
    if (run.length < 8) return false;

    // Separar el cuerpo del dígito verificador
    const cuerpo = run.slice(0, -1);
    const dvIngresado = run.slice(-1).toUpperCase();

    // Validar que el cuerpo sea solo números
    if (!/^[0-9]+$/.test(cuerpo)) return false;

    // Calcular el dígito verificador esperado
    let suma = 0;
    let multiplicador = 2;

    // Recorrer el cuerpo de atrás hacia adelante
    for (let i = cuerpo.length - 1; i >= 0; i--) {
        suma += parseInt(cuerpo[i]) * multiplicador;
        multiplicador = multiplicador === 7 ? 2 : multiplicador + 1;
    }

    const resto = suma % 11;
    const dvCalculado = 11 - resto;

    // Determinar el valor final del DV calculado
    let dvEsperado = dvCalculado.toString();
    if (dvCalculado === 11) dvEsperado = '0';
    if (dvCalculado === 10) dvEsperado = 'K';

    // Comparar con el ingresado
    return dvEsperado === dvIngresado;
}

// Cuando el usuario intente enviar el formulario

const formRegistro = document.getElementById('form-registro');

// Arreglo de objetos con Regiones y sus respectivas Comunas
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

// Capturamos los elementos del DOM
const selectRegion = document.getElementById('region-registro');
const selectComuna = document.getElementById('comuna-registro');

// Función para cargar las regiones al abrir la página
function inicializarRegiones() {
    if (!selectRegion) return; // Por si no estamos en la página de registro

    datosTerritoriales.forEach(item => {
        const opcion = document.createElement('option');
        opcion.value = item.region;
        opcion.textContent = item.region;
        selectRegion.appendChild(opcion);
    });
}

// Evento que detecta cuando el usuario cambia la región
if (selectRegion) {
    selectRegion.addEventListener('change', function() {
        const regionSeleccionada = this.value;
        
        // Limpiamos y reiniciamos el selector de comunas
        selectComuna.innerHTML = '<option value="">Seleccione una comuna...</option>';
        
        if (regionSeleccionada !== "") {
            // Buscamos el objeto de la región seleccionada
            const datosRegion = datosTerritoriales.find(item => item.region === regionSeleccionada);
            
            // Llenamos las comunas correspondientes
            datosRegion.comunas.forEach(comuna => {
                const opcion = document.createElement('option');
                opcion.value = comuna;
                opcion.textContent = comuna;
                selectComuna.appendChild(opcion);
            });
            
            // Habilitamos el selector de comunas
            selectComuna.disabled = false;
        } else {
            // Si vuelve a "Seleccione una región...", deshabilitamos comunas
            selectComuna.disabled = true;
        }
    });
}

// Ejecutamos la carga inicial
inicializarRegiones();

if (formRegistro) {
    formRegistro.addEventListener('submit', function(evento) {
        evento.preventDefault();
        
        let formularioValido = true;

        // 1. Validar RUN (Sin puntos ni guion)
        const inputRun = document.getElementById('run-registro').value.trim();
        const errorRun = document.getElementById('error-run');
        
        // Expresión regular: solo números seguidos de un número o una 'K' (ignorando mayúsculas/minúsculas)
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

        // 2. Validar Nombre (Obligatorio, máximo 50)[cite: 1]
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

        // 3. Validar Apellidos (Obligatorios, máximo 100)[cite: 1]
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

        // 4. Validar Correo (Obligatorio, formato, máximo 100)[cite: 1]
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

        // 5. Validar Tipo de Usuario[cite: 1]
        const inputTipo = document.getElementById('tipo-registro').value;
        const errorTipo = document.getElementById('error-tipo');
        if (inputTipo === '') {
            mostrarError(errorTipo, 'Debe seleccionar un tipo de usuario.');
            formularioValido = false;
        } else {
            ocultarError(errorTipo);
        }

        // 6. Validar Región y Comuna[cite: 1]
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

        // 7. Validar Dirección (Obligatoria, máximo 300)[cite: 1]
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
        
        // Aquí agregaremos luego las validaciones de Nombre, Apellido, etc.

        if (formularioValido) {
            alert('RUN válido. Registro en proceso...');
        }
    });
}