const tablaUsuarios = document.getElementById('tabla-usuarios-body');
const contadorUsuarios = document.getElementById('contador-usuarios');
const formUsuarios = document.getElementById('form-usuarios');

let usuarioEnEdicion = null;

function renderizarTablaUsuarios() {
    if (!tablaUsuarios) return;
    
    tablaUsuarios.innerHTML = '';
    contadorUsuarios.textContent = `${usuarios.length} usuarios`;

    usuarios.forEach(user => {
        tablaUsuarios.innerHTML += `
            <tr>
                <td class="fw-bold">${user.rut}</td>
                <td>${user.nombre}</td>
                <td>${user.correo}</td>
                <td>
                    <span class="badge ${user.rol === 'Administrador' ? 'bg-primary' : 'bg-secondary'}">
                        ${user.rol}
                    </span>
                </td>
                <td class="text-center">
                    <span class="badge bg-success">Activo</span>
                </td>
                <td class="text-center">
                    <button type="button" class="btn btn-sm btn-outline-primary me-1" onclick="prepararEdicionUser('${user.rut}')" title="Editar">✏️</button>
                    <button type="button" class="btn btn-sm btn-outline-danger" onclick="eliminarUsuario('${user.rut}')" title="Eliminar">🗑️</button>
                </td>
            </tr>
        `;
    });
}

function eliminarUsuario(rut) {
    const confirmacion = confirm(`¿Estás seguro de que deseas eliminar al usuario RUT ${rut}?`);
    if (confirmacion) {
        const indice = usuarios.findIndex(u => u.rut === rut);
        if (indice !== -1) {
            usuarios.splice(indice, 1);
            renderizarTablaUsuarios();
            alert('Usuario eliminado exitosamente.');
            reiniciarFormUser();
        }
    }
}

function prepararEdicionUser(rut) {
    const user = usuarios.find(u => u.rut === rut);
    if (!user) return;

    document.getElementById('user-rut').value = user.rut;
    document.getElementById('user-rut').disabled = true;
    document.getElementById('user-nombre').value = user.nombre;
    document.getElementById('user-correo').value = user.correo;
    document.getElementById('user-rol').value = user.rol;

    const contenedorPassword = document.getElementById('contenedor-user-password');
    if (contenedorPassword) {
        contenedorPassword.classList.add('d-none');
    }
    
    usuarioEnEdicion = user.rut;
    document.getElementById('titulo-form-usuario').textContent = "Editar Usuario";
    
    const btnGuardar = document.getElementById('btn-guardar-user');
    btnGuardar.textContent = "Actualizar Cambios";
    btnGuardar.classList.replace('btn-primary', 'btn-warning');
}

function reiniciarFormUser() {
    formUsuarios.reset();
    usuarioEnEdicion = null;
    document.getElementById('user-rut').disabled = false;
    document.getElementById('titulo-form-usuario').textContent = "Agregar Nuevo Usuario";
    
    const btnGuardar = document.getElementById('btn-guardar-user');
    btnGuardar.textContent = "Guardar Usuario";
    btnGuardar.classList.replace('btn-warning', 'btn-primary');
}

if (formUsuarios) {
    formUsuarios.addEventListener('submit', function(evento) {
        evento.preventDefault(); 

        const rut = document.getElementById('user-rut').value.trim();
        const nombre = document.getElementById('user-nombre').value.trim();
        const correo = document.getElementById('user-correo').value.trim();
        const rol = document.getElementById('user-rol').value;

        if (!rut || !nombre || !correo || !rol) {
            alert('Por favor, completa todos los campos.');
            return;
        }

        if (usuarioEnEdicion) {
            const indice = usuarios.findIndex(u => u.rut === usuarioEnEdicion);
            if (indice !== -1) {
                usuarios[indice].nombre = nombre;
                usuarios[indice].correo = correo;
                usuarios[indice].rol = rol;
            }
            alert(`¡Éxito! El usuario ${nombre} ha sido actualizado.`);
        } else {
            
            const inputPassword = document.getElementById('user-password');
            const password = inputPassword ? inputPassword.value : '';

            if (!password || password.length < 4) {
                alert('Debe asignar una contraseña inicial válida (mínimo 4 caracteres).');
                return;
            }
            const existeRut = usuarios.some(u => u.rut === rut);
            if (existeRut) {
                alert('Error: Ya existe un usuario con ese RUT.');
                return;
            }

            usuarios.push({ rut, nombre, correo, password, rol, activo: true });
            alert(`¡Éxito! El usuario ${nombre} ha sido creado.`);
        }

        renderizarTablaUsuarios();
        reiniciarFormUser();
    });
}

const btnLimpiarUser = document.getElementById('btn-limpiar-user');
if (btnLimpiarUser) {
    btnLimpiarUser.addEventListener('click', reiniciarFormUser);
}

renderizarTablaUsuarios();