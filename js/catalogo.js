
/*
----------------------------- CATALOGO Y CARRITO ------------------------
*/
function renderizarCatalogo() {
    const contenedor = document.getElementById("contenedor-productos");
    if (!contenedor) return;

    contenedor.innerHTML = "";

    const parametrosURL = new URLSearchParams(window.location.search);
    const categoriaFiltro = parametrosURL.get('categoria');
    let lista = productos;

    if (categoriaFiltro) {
        lista = productos.filter(p => p.categoria === categoriaFiltro);
        const titulo = document.getElementById('titulo-catalogo');
        if (titulo) titulo.textContent = categoriaFiltro;
    }

    if (lista.length === 0) {
        contenedor.innerHTML = '<div class="col-12"><p class="text-secondary text-center">No hay productos en esta categoría.</p></div>';
        return;
    }

    lista.forEach(producto => {
        const col = document.createElement("div");
        col.className = "col-md-4 mb-4";

        col.innerHTML = `
            <div class="card h-100 shadow-sm card-luxury">
                <div class="bg-dark-luxury text-gold text-center d-flex align-items-center justify-content-center" style="height: 180px;">
                    ${producto.imagen ? `<img src="${producto.imagen}" class="img-fluid h-100" style="object-fit: contain;" alt="${producto["nombre del producto"]}">` : '<span class="text-secondary">Sin Imagen</span>'}
                </div>
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title text-light">${producto["nombre del producto"]}</h5>
                    <h6 class="card-subtitle mb-2 text-gold">${producto.marca}</h6>
                    <p class="card-text text-secondary small">${producto["descripcion breve"]}</p>
                    <p class="fw-bold fs-5 mt-auto text-gold mb-0">
                        $${producto.precio.toLocaleString('es-CL')}
                    </p>
                </div>
                <div class="card-footer bg-transparent border-top-0 pb-3">
                    <a href="detalle.html?codigo=${producto.codigo}" class="btn btn-outline-gold w-100 mb-2 fw-bold">
                        Ver Detalle
                    </a>
                    <button class="btn btn-gold w-100 fw-bold" onclick="agregarAlCarrito('${producto.codigo}')">
                        Añadir al Carrito
                    </button>
                </div>
            </div>
        `;

        contenedor.appendChild(col);
    });
}

renderizarCatalogo();

let carrito = JSON.parse(localStorage.getItem('carritoSonidoVivo')) || [];

function agregarAlCarrito(codigo) {
    const producto = productos.find(p => p.codigo === codigo);

    const itemExistente = carrito.find(item => item.codigo === codigo);
    if (itemExistente) {
        itemExistente.cantidad++;
    } else {
        carrito.push({ ...producto, cantidad: 1 });
    }

    actualizarCarrito();
}

function eliminarDelCarrito(codigo) {
    carrito = carrito.filter(item => item.codigo !== codigo);
    actualizarCarrito();
}

function actualizarCarrito() {
    localStorage.setItem('carritoSonidoVivo', JSON.stringify(carrito));

    const listaCarrito = document.getElementById('lista-carrito');
    const contadorCarrito = document.getElementById('contador-carrito');
    const totalCarrito = document.getElementById('total-carrito');

    if (!listaCarrito) return;

    listaCarrito.innerHTML = '';

    let total = 0;
    let cantidadTotal = 0;

    carrito.forEach(item => {
        const subtotal = item.precio * item.cantidad;
        total += subtotal;
        cantidadTotal += item.cantidad;

        const li = document.createElement('li');
        li.className = 'list-group-item list-group-item-luxury d-flex justify-content-between align-items-center lh-sm';
        li.innerHTML = `
            <div>
                <h6 class="my-0 text-light">${item["nombre del producto"]}</h6>
                <small class="text-secondary">${item.cantidad} x $${item.precio.toLocaleString('es-CL')}</small>
            </div>
            <div class="d-flex align-items-center">
                <span class="me-3 fw-bold text-gold">$${subtotal.toLocaleString('es-CL')}</span>
                <button class="btn btn-sm btn-outline-danger" onclick="eliminarDelCarrito('${item.codigo}')">X</button>
            </div>
        `;
        listaCarrito.appendChild(li);
    });

    if (contadorCarrito) contadorCarrito.innerText = cantidadTotal;
    if (totalCarrito) totalCarrito.innerText = '$' + total.toLocaleString('es-CL');
}

actualizarCarrito();
