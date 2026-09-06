// Capturamos los elementos del DOM
const tablaProductos = document.getElementById('tabla-productos');
const contadorInventario = document.getElementById('contador-inventario');
const formMantenedor = document.getElementById('form-mantenedor');

// Variable global para saber si estamos creando o editando
let productoEnEdicion = null;

// 1. Función para listar los productos
function renderizarTablaAdmin() {
    if (!tablaProductos) return;
    
    tablaProductos.innerHTML = '';
    contadorInventario.textContent = `${productos.length} productos`;

    productos.forEach(producto => {
        tablaProductos.innerHTML += `
            <tr>
                <td class="fw-bold">${producto.codigo}</td>
                <td>${producto.categoria}</td>
                <td>
                    ${producto.marca} <br>
                    <small class="text-muted">${producto.modelo}</small>
                </td>
                <td>$${producto.precio.toLocaleString('es-CL')}</td>
                <td>
                    <span class="badge ${producto.stock > 10 ? 'bg-success' : (producto.stock > 0 ? 'bg-warning' : 'bg-danger')}">
                        ${producto.stock}
                    </span>
                </td>
                <td class="text-center">
                    <button type="button" class="btn btn-sm btn-outline-primary me-1" onclick="prepararEdicion('${producto.codigo}')" title="Editar">✏️</button>
                    <button type="button" class="btn btn-sm btn-outline-danger" onclick="eliminarProducto('${producto.codigo}')" title="Eliminar">🗑️</button>
                </td>
            </tr>
        `;
    });
}

// 2. Función para Eliminar un producto
function eliminarProducto(codigo) {
    // Pedimos confirmación antes de borrar
    const confirmacion = confirm(`¿Estás seguro de que deseas eliminar el producto ${codigo}?`);
    
    if (confirmacion) {
        // Buscamos la posición del producto en el arreglo
        const indice = productos.findIndex(p => p.codigo === codigo);
        
        if (indice !== -1) {
            productos.splice(indice, 1); // Lo eliminamos del arreglo
            renderizarTablaAdmin(); // Refrescamos la tabla
            alert('Producto eliminado exitosamente.');
            reiniciarFormulario();
        }
    }
}

// 3. Función para Preparar la Edición (Carga los datos al formulario)
function prepararEdicion(codigo) {
    // Buscamos el producto exacto
    const producto = productos.find(p => p.codigo === codigo);
    if (!producto) return;

    // Llenamos el formulario con sus datos
    document.getElementById('admin-codigo').value = producto.codigo;
    document.getElementById('admin-codigo').disabled = true; // Bloqueamos el código para que no lo cambien
    document.getElementById('admin-categoria').value = producto.categoria;
    document.getElementById('admin-marca').value = producto.marca;
    document.getElementById('admin-modelo').value = producto.modelo;
    document.getElementById('admin-precio').value = producto.precio;
    document.getElementById('admin-stock').value = producto.stock;
    document.getElementById('admin-descripcion').value = producto["descripcion breve"];

    // Cambiamos el estado y la interfaz visual a "Modo Edición"
    productoEnEdicion = producto.codigo;
    document.getElementById('titulo-formulario').textContent = "Editar Producto";
    
    const btnGuardar = document.getElementById('btn-guardar');
    btnGuardar.textContent = "Actualizar Cambios";
    btnGuardar.classList.replace('btn-success', 'btn-warning');
}

// Función auxiliar para reiniciar el formulario a "Modo Creación"
function reiniciarFormulario() {
    formMantenedor.reset();
    productoEnEdicion = null;
    document.getElementById('admin-codigo').disabled = false;
    document.getElementById('titulo-formulario').textContent = "Agregar Nuevo Producto";
    
    const btnGuardar = document.getElementById('btn-guardar');
    btnGuardar.textContent = "Guardar Producto";
    btnGuardar.classList.replace('btn-warning', 'btn-success');
}

// 4. Lógica combinada para Guardar o Actualizar
if (formMantenedor) {
    formMantenedor.addEventListener('submit', function(evento) {
        evento.preventDefault(); 

        const codigo = document.getElementById('admin-codigo').value.trim();
        const categoria = document.getElementById('admin-categoria').value;
        const marca = document.getElementById('admin-marca').value.trim();
        const modelo = document.getElementById('admin-modelo').value.trim();
        const precio = parseInt(document.getElementById('admin-precio').value);
        const stock = parseInt(document.getElementById('admin-stock').value);
        const descripcion = document.getElementById('admin-descripcion').value.trim();

        if (!codigo || !categoria || !marca || !modelo || isNaN(precio) || isNaN(stock) || !descripcion) {
            alert('Por favor, completa todos los campos correctamente.');
            return;
        }

        if (productoEnEdicion) {
            // ---- MODO EDICIÓN ----
            const indice = productos.findIndex(p => p.codigo === productoEnEdicion);
            if (indice !== -1) {
                productos[indice].categoria = categoria;
                productos[indice].marca = marca;
                productos[indice].modelo = modelo;
                productos[indice].precio = precio;
                productos[indice].stock = stock;
                productos[indice]["descripcion breve"] = descripcion;
            }
            alert(`¡Éxito! El producto ${marca} ${modelo} ha sido actualizado.`);
            
        } else {
            // ---- MODO CREACIÓN ----
            const existeCodigo = productos.some(p => p.codigo === codigo);
            if (existeCodigo) {
                alert('Error: Ya existe un producto con ese código.');
                return;
            }

            const nuevoProducto = {
                codigo: codigo,
                categoria: categoria,
                marca: marca,
                modelo: modelo,
                precio: precio,
                stock: stock,
                "descripcion breve": descripcion,
                imagen: "" 
            };
            productos.push(nuevoProducto);
            alert(`¡Éxito! El producto ${marca} ${modelo} ha sido agregado.`);
        }

        renderizarTablaAdmin();
        reiniciarFormulario(); 
    });
}

// 5. Botón secundario para limpiar el formulario y salir del modo edición
const btnLimpiar = document.getElementById('btn-limpiar');
if (btnLimpiar) {
    btnLimpiar.addEventListener('click', function() {
        reiniciarFormulario();
    });
}

// Ejecutamos la tabla inicial
renderizarTablaAdmin();