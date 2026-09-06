
/*
----------------------------- CATALOGO Y CARRITO ------------------------
*/
// Función para mostrar los productos en el catálogo
function renderizarCatalogo() {
    const contenedor = document.getElementById("contenedor-productos");
    if (!contenedor) return; 
    
    contenedor.innerHTML = "";

    productos.forEach(producto => {
        const col = document.createElement("div");
        col.className = "col-md-4 mb-4"; 
        
        col.innerHTML = `
            <div class="card h-100 shadow-sm">
                <div class="bg-secondary text-white text-center py-5">
                    ${producto.imagen ? `<img src="${producto.imagen}" alt="${producto["nombre del producto"]}">` : 'Sin Imagen'}
                </div>
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${producto["nombre del producto"]}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${producto.marca}</h6>
                    <p class="card-text">${producto["descripcion breve"]}</p>
                    
                    <p class="fw-bold fs-5 mt-auto">
                        $${producto.precio.toLocaleString('es-CL')}
                    </p>
                </div>
                <div class="card-footer bg-white border-top-0">
                    <!-- Botón para ir al detalle, enviando el código en la URL -->
                    <a href="detalle.html?codigo=${producto.codigo}" class="btn btn-dark w-100 mb-2">
                        Ver Detalle
                    </a>
                    <button class="btn btn-outline-primary w-100" onclick="agregarAlCarrito('${producto.codigo}')">
                        Añadir al Carrito
                    </button>
                </div>
            </div>
        `;
        
        contenedor.appendChild(col);
    });
}

// Ejecutamos la función cuando el archivo JS cargue
renderizarCatalogo();


// 1. Inicializar el carrito leyendo desde LocalStorage, o crearlo vacío si no existe
let carrito = JSON.parse(localStorage.getItem('carritoSonidoVivo')) || [];

// 2. Función para agregar elementos a la lista de selección
function agregarAlCarrito(codigo) {
    // Buscamos el producto en el catálogo
    const producto = productos.find(p => p.codigo === codigo);
    
    // Verificamos si ya está en el carrito para aumentar cantidad, o lo agregamos como nuevo
    const itemExistente = carrito.find(item => item.codigo === codigo);
    if (itemExistente) {
        itemExistente.cantidad++;
    } else {
        // Agregamos el elemento con una propiedad nueva: cantidad
        carrito.push({ ...producto, cantidad: 1 });
    }

    actualizarCarrito();
}

// 3. Función para quitar elementos de la lista
function eliminarDelCarrito(codigo) {
    carrito = carrito.filter(item => item.codigo !== codigo);
    actualizarCarrito();
}

// 4. Función central para actualizar visualización, cálculos y guardar la selección
function actualizarCarrito() {
    // Guardar la selección utilizando LocalStorage
    localStorage.setItem('carritoSonidoVivo', JSON.stringify(carrito));

    // Elementos del HTML a actualizar
    const listaCarrito = document.getElementById('lista-carrito');
    const contadorCarrito = document.getElementById('contador-carrito');
    const totalCarrito = document.getElementById('total-carrito');

    // Si no estamos en una página con carrito (ej. el index), detenemos la función aquí
    if (!listaCarrito) return;

    // Limpiar lista antes de volver a renderizar
    listaCarrito.innerHTML = '';
    
    let total = 0;
    let cantidadTotal = 0;

    // Visualizar los elementos seleccionados
    carrito.forEach(item => {
        const subtotal = item.precio * item.cantidad;
        total += subtotal;
        cantidadTotal += item.cantidad;

        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center lh-sm';
        li.innerHTML = `
            <div>
                <h6 class="my-0">${item["nombre del producto"]}</h6>
                <small class="text-muted">${item.cantidad} x $${item.precio.toLocaleString('es-CL')}</small>
            </div>
            <div class="d-flex align-items-center">
                <span class="me-3 fw-bold">$${subtotal.toLocaleString('es-CL')}</span>
                <button class="btn btn-sm btn-outline-danger" onclick="eliminarDelCarrito('${item.codigo}')">X</button>
            </div>
        `;
        listaCarrito.appendChild(li);
    });

    // Incorporar cálculo de total y actualizar contador
    contadorCarrito.innerText = cantidadTotal;
    totalCarrito.innerText = '$' + total.toLocaleString('es-CL');
}

// Ejecutar al cargar la página para mostrar el carrito guardado
actualizarCarrito();
