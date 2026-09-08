const tablaProductos = document.getElementById('tabla-productos');
const contadorInventario = document.getElementById('contador-inventario');
const formMantenedor = document.getElementById('form-mantenedor');

let productoEnEdicion = null;

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

function eliminarProducto(codigo) {

    const confirmacion = confirm(`¿Estás seguro de que deseas eliminar el producto ${codigo}?`);
    
    if (confirmacion) {

        const indice = productos.findIndex(p => p.codigo === codigo);
        
        if (indice !== -1) {
            productos.splice(indice, 1);
            renderizarTablaAdmin();
            alert('Producto eliminado exitosamente.');
            reiniciarFormulario();
        }
    }
}


function prepararEdicion(codigo) {

    const producto = productos.find(p => p.codigo === codigo);
    if (!producto) return;

    document.getElementById('admin-codigo').value = producto.codigo;
    document.getElementById('admin-codigo').disabled = true;
    document.getElementById('admin-categoria').value = producto.categoria;
    document.getElementById('admin-marca').value = producto.marca;
    document.getElementById('admin-modelo').value = producto.modelo;
    document.getElementById('admin-precio').value = producto.precio;
    document.getElementById('admin-stock').value = producto.stock;
    document.getElementById('admin-descripcion').value = producto["descripcion breve"];

    productoEnEdicion = producto.codigo;
    document.getElementById('titulo-formulario').textContent = "Editar Producto";
    
    const btnGuardar = document.getElementById('btn-guardar');
    btnGuardar.textContent = "Actualizar Cambios";
    btnGuardar.classList.replace('btn-success', 'btn-warning');
}

function reiniciarFormulario() {
    formMantenedor.reset();
    productoEnEdicion = null;
    document.getElementById('admin-codigo').disabled = false;
    document.getElementById('titulo-formulario').textContent = "Agregar Nuevo Producto";
    
    const btnGuardar = document.getElementById('btn-guardar');
    btnGuardar.textContent = "Guardar Producto";
    btnGuardar.classList.replace('btn-warning', 'btn-success');
}

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

const btnLimpiar = document.getElementById('btn-limpiar');
if (btnLimpiar) {
    btnLimpiar.addEventListener('click', function() {
        reiniciarFormulario();
    });
}

renderizarTablaAdmin();