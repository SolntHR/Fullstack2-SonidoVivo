//Arreglo (50 productos)
const productos = [
    {
        "codigo": "GA001",
        "categoria": "Guitarras Acústicas",
        "nombre del producto": "Guitarra Acústica Folk",
        "marca": "Yamaha",
        "modelo": "F310",
        "stock": 8,
        "precio": 129990,
        "descripcion breve": "Tapa de abeto, aros y fondo de meranti. Ideal para iniciantes.",
        "imagen": "../img/yamahaf310.png"
    },
    {
        "codigo": "GA002",
        "categoria": "Guitarras Acústicas",
        "nombre del producto": "Guitarra Acústica Dreadnought",
        "marca": "Fender",
        "modelo": "CD-60S",
        "stock": 5,
        "precio": 189990,
        "descripcion breve": "Tapa de abeto macizo, brazo de caoba. Sonido cálido y proyectado.",
        "imagen": "../img/guitarras/Fender CD-60S.jpg"
    },
    {
        "codigo": "GA003",
        "categoria": "Guitarras Acústicas",
        "nombre del producto": "Guitarra Acústica Clásica 4/4",
        "marca": "Yamaha",
        "modelo": "C40",
        "stock": 10,
        "precio": 89990,
        "descripcion breve": "Nailon, tapa de abeto. Ideal para estudio y flamenco.",
        "imagen": "../img/guitarras/Yamaha C40.jpg"
    },
    {
        "codigo": "GA004",
        "categoria": "Guitarras Acústicas",
        "nombre del producto": "Guitarra Electroacústica",
        "marca": "Takamine",
        "modelo": "GN20CE",
        "stock": 3,
        "precio": 349990,
        "descripcion breve": "Pickup integrado, afinador incorporado.",
        "imagen": "../img/guitarras/Guitarra Electroacústica.png"
    },
    {
        "codigo": "GA005",
        "categoria": "Guitarras Acústicas",
        "nombre del producto": "Guitarra 3/4 Niños",
        "marca": "Yamaha",
        "modelo": "JR1",
        "stock": 6,
        "precio": 79990,
        "descripcion breve": "Tamaño reducido para niños de 6 a 10 años.",
        "imagen": "../img/guitarras/Guitarra 3-4 Niños.png"
    },
    {
        "codigo": "GE001",
        "categoria": "Guitarras Eléctricas",
        "nombre del producto": "Guitarra Eléctrica Stratocaster",
        "marca": "Squier",
        "modelo": "Affinity Strat",
        "stock": 5,
        "precio": 249990,
        "descripcion breve": "Cuerpo de álamo, mástil de arce, pastillas SSS.",
        "imagen": "../img/guitarras/Guitarra Eléctrica Stratocaster.png"
    },
    {
        "codigo": "GE002",
        "categoria": "Guitarras Eléctricas",
        "nombre del producto": "Guitarra Eléctrica Les Paul",
        "marca": "Epiphone",
        "modelo": "Les Paul Std",
        "stock": 4,
        "precio": 329990,
        "descripcion breve": "Cuerpo caoba, tapa arce, pastillas humbucker.",
        "imagen": "../img/guitarras/Guitarra Eléctrica Les Paul.png"
    },
    {
        "codigo": "GE003",
        "categoria": "Guitarras Eléctricas",
        "nombre del producto": "Guitarra Eléctrica SG",
        "marca": "Epiphone",
        "modelo": "SG Standard",
        "stock": 3,
        "precio": 319990,
        "descripcion breve": "Cuerpo caoba, mástil caoba, 2 humbuckers.",
        "imagen": "../img/guitarras/Guitarra Eléctrica SG.png"
    },
    {
        "codigo": "GE004",
        "categoria": "Guitarras Eléctricas",
        "nombre del producto": "Guitarra Eléctrica Telecaster",
        "marca": "Squier",
        "modelo": "Affinity Tele",
        "stock": 4,
        "precio": 239990,
        "descripcion breve": "Cuerpo álamo, clavijero vintage, 2 pastillas single.",
        "imagen": "../img/guitarras/Guitarra Eléctrica Telecaster.png"
    },
    {
        "codigo": "GE005",
        "categoria": "Guitarras Eléctricas",
        "nombre del producto": "Guitarra Eléctrica Semi-hollow",
        "marca": "Epiphone",
        "modelo": "ES-335",
        "stock": 2,
        "precio": 549990,
        "descripcion breve": "Semi-hueca, 2 humbuckers, ideal para jazz y blues.",
        "imagen": "../img/guitarras/Guitarra Eléctrica Semi-hollow.png"
    },
    {
        "codigo": "BA001",
        "categoria": "Bajos Eléctricos",
        "nombre del producto": "Bajo Eléctrico 4 Cuerdas",
        "marca": "Squier",
        "modelo": "Affinity PJ",
        "stock": 5,
        "precio": 299990,
        "descripcion breve": "Pickup PJ, cuerpo álamo, mástil arce.",
        "imagen": "../img/guitarras/Bajo Eléctrico 4 Cuerdas Squier.jpg"
    },
    {
        "codigo": "BA002",
        "categoria": "Bajos Eléctricos",
        "nombre del producto": "Bajo Eléctrico Jazz Bass",
        "marca": "Fender",
        "modelo": "Player Jazz",
        "stock": 2,
        "precio": 699990,
        "descripcion breve": "Alder body, 2 Alnico V Jazz single-coil.",
        "imagen": "../img/guitarras/Bajo Eléctrico Jazz Bass.jpg"
    },
    {
        "codigo": "BA003",
        "categoria": "Bajos Eléctricos",
        "nombre del producto": "Bajo Acústico 4 Cuerdas",
        "marca": "Yamaha",
        "modelo": "APX700II",
        "stock": 2,
        "precio": 429990,
        "descripcion breve": "Electroacústico, afinador incorporado.",
        "imagen": "../img/guitarras/Bajo Acústico 4 Cuerdas.png"
    },
    {
        "codigo": "BT001",
        "categoria": "Baterías",
        "nombre del producto": "Batería Acústica 5 piezas",
        "marca": "Pearl",
        "modelo": "Roadshow",
        "stock": 2,
        "precio": 599990,
        "descripcion breve": "Incluye stands, platillos y pedal de bombo.",
        "imagen": "../img/baterias/Batería Acústica 5 piezas.png"
    },
    {
        "codigo": "BT002",
        "categoria": "Baterías",
        "nombre del producto": "Batería Electrónica 8 pads",
        "marca": "Roland",
        "modelo": "TD-02KV",
        "stock": 2,
        "precio": 799990,
        "descripcion breve": "Módulo TD-02, 8 pads de goma, pedal hi-hat.",
        "imagen": "../img/baterias/Batería Electrónica 8 pads.png"
    },
    {
        "codigo": "BT003",
        "categoria": "Baterías",
        "nombre del producto": "Caja Snare 14\"",
        "marca": "Pearl",
        "modelo": "STE1450",
        "stock": 4,
        "precio": 89990,
        "descripcion breve": "Acero, 14x5\", 10 tensores.",
        "imagen": "../img/baterias/Caja Snare 14.png"
    },
    {
        "codigo": "BT004",
        "categoria": "Baterías",
        "nombre del producto": "Platillo Hi-Hat 14\"",
        "marca": "Zildjian",
        "modelo": "A Series",
        "stock": 3,
        "precio": 149990,
        "descripcion breve": "Latón B20, sonido brillante y claro.",
        "imagen": "../img/baterias/Platillo Hi-Hat 14.png"
    },
    {
        "codigo": "BT005",
        "categoria": "Baterías",
        "nombre del producto": "Platillo Crash 16\"",
        "marca": "Zildjian",
        "modelo": "A Series",
        "stock": 3,
        "precio": 129990,
        "descripcion breve": "Latón B20, ataque rápido.",
        "imagen": "../img/baterias/Platillo Crash 16.png"
    },
    {
        "codigo": "TC001",
        "categoria": "Teclados y Pianos",
        "nombre del producto": "Teclado Digital 61 teclas",
        "marca": "Yamaha",
        "modelo": "PSR-E373",
        "stock": 4,
        "precio": 249990,
        "descripcion breve": "61 teclas sensibles al tacto, 622 voces.",
        "imagen": "../img/teclados/Teclado Digital 61 teclas.png"
    },
    {
        "codigo": "TC002",
        "categoria": "Teclados y Pianos",
        "nombre del producto": "Piano Digital 88 teclas",
        "marca": "Yamaha",
        "modelo": "P-45",
        "stock": 2,
        "precio": 499990,
        "descripcion breve": "88 teclas pesadas, 10 voces, pedal sustain incluido.",
        "imagen": "../img/teclados/Piano Digital 88 teclas.png"
    },
    {
        "codigo": "TC003",
        "categoria": "Teclados y Pianos",
        "nombre del producto": "Sintetizador 49 teclas",
        "marca": "Arturia",
        "modelo": "MiniLab MKII",
        "stock": 5,
        "precio": 129990,
        "descripcion breve": "MIDI controller, 49 mini teclas.",
        "imagen": "../img/teclados/Sintetizador 49 teclas.png"
    },
    {
        "codigo": "TC004",
        "categoria": "Teclados y Pianos",
        "nombre del producto": "Teclado MIDI 88 teclas",
        "marca": "M-Audio",
        "modelo": "Hammer 88",
        "stock": 2,
        "precio": 399990,
        "descripcion breve": "88 teclas martillo, sin sonidos propios.",
        "imagen": "../img/teclados/Teclado MIDI 88 teclas.png"
    },
    {
        "codigo": "AM001",
        "categoria": "Amplificadores",
        "nombre del producto": "Amplificador Guitarra 15W",
        "marca": "Fender",
        "modelo": "Frontman 15G",
        "stock": 5,
        "precio": 99990,
        "descripcion breve": "15W, distorsión incorporada, entrada auxiliar.",
        "imagen": "../img/amplificadores/Amplificador Guitarra 15W.png"
    },
    {
        "codigo": "AM002",
        "categoria": "Amplificadores",
        "nombre del producto": "Amplificador Guitarra 40W",
        "marca": "Marshall",
        "modelo": "MG40GFX",
        "stock": 3,
        "precio": 299990,
        "descripcion breve": "40W, 4 canales, efectos digitales integrados.",
        "imagen": "../img/amplificadores/Amplificador Guitarra 40W.png"
    },
    {
        "codigo": "AM003",
        "categoria": "Amplificadores",
        "nombre del producto": "Amplificador Bajo 100W",
        "marca": "Hartke",
        "modelo": "HD100",
        "stock": 2,
        "precio": 449990,
        "descripcion breve": "100W, tweeter integrado, ecualizador de 4 bandas.",
        "imagen": "../img/amplificadores/Amplificador Bajo 100W.png"
    },
    {
        "codigo": "AM004",
        "categoria": "Amplificadores",
        "nombre del producto": "Amplificador Acústico 40W",
        "marca": "Fishman",
        "modelo": "Loudbox Mini",
        "stock": 2,
        "precio": 499990,
        "descripcion breve": "60W, 2 canales, reverb y chorus incorporados.",
        "imagen": "../img/amplificadores/Amplificador Acústico 40W.png"
    },
    {
        "codigo": "MI001",
        "categoria": "Micrófonos",
        "nombre del producto": "Micrófono Dinámico Cardioide",
        "marca": "Shure",
        "modelo": "SM58",
        "stock": 8,
        "precio": 149990,
        "descripcion breve": "Estándar industria para voz en vivo.",
        "imagen": "../img/microfonos/Micrófono Dinámico Cardioide.png"
    },
    {
        "codigo": "MI002",
        "categoria": "Micrófonos",
        "nombre del producto": "Micrófono Dinámico Instrumento",
        "marca": "Shure",
        "modelo": "SM57",
        "stock": 6,
        "precio": 139990,
        "descripcion breve": "Ideal para captura de instrumentos y amplificadores.",
        "imagen": "../img/microfonos/Micrófono Dinámico Instrumento.png"
    },
    {
        "codigo": "MI003",
        "categoria": "Micrófonos",
        "nombre del producto": "Micrófono Condensador",
        "marca": "Audio-Tech.",
        "modelo": "AT2020",
        "stock": 4,
        "precio": 199990,
        "descripcion breve": "Cardioide, XLR, ideal para grabación en estudio.",
        "imagen": "../img/microfonos/Micrófono Condensador.png"
    },
    {
        "codigo": "MI004",
        "categoria": "Micrófonos",
        "nombre del producto": "Micrófono USB de Condensador",
        "marca": "Blue",
        "modelo": "Yeti",
        "stock": 5,
        "precio": 299990,
        "descripcion breve": "USB, 4 patrones polares, ideal para streaming y podcast.",
        "imagen": "../img/microfonos/Micrófono USB de Condensador.png"
    },
    {
        "codigo": "PE001",
        "categoria": "Pedales de Efectos",
        "nombre del producto": "Pedal Distorsión",
        "marca": "Boss",
        "modelo": "DS-1",
        "stock": 7,
        "precio": 79990,
        "descripcion breve": "Clásico pedal de distorsión, 3 controles.",
        "imagen": "../img/pedales/Pedal Distorsión.png"
    },
    {
        "codigo": "PE002",
        "categoria": "Pedales de Efectos",
        "nombre del producto": "Pedal Reverb",
        "marca": "Boss",
        "modelo": "RV-6",
        "stock": 4,
        "precio": 179990,
        "descripcion breve": "8 modos de reverb, control de shimmer.",
        "imagen": "../img/pedales/Pedal Reverb.png"
    },
    {
        "codigo": "PE003",
        "categoria": "Pedales de Efectos",
        "nombre del producto": "Pedal Multi-efectos",
        "marca": "Boss",
        "modelo": "ME-80",
        "stock": 2,
        "precio": 349990,
        "descripcion breve": "Diseño tipo pedalboard, 8 efectos simultáneos.",
        "imagen": "../img/pedales/Pedal Multi-efectos.png"
    },
    {
        "codigo": "PE004",
        "categoria": "Pedales de Efectos",
        "nombre del producto": "Pedal Tuner Cromático",
        "marca": "Boss",
        "modelo": "TU-3",
        "stock": 8,
        "precio": 89990,
        "descripcion breve": "Afinador cromático, indicador de tono.",
        "imagen": "../img/pedales/Pedal Tuner Cromático.png"
    },
    {
        "codigo": "PE005",
        "categoria": "Pedales de Efectos",
        "nombre del producto": "Pedal Delay",
        "marca": "MXR",
        "modelo": "Carbon Copy",
        "stock": 4,
        "precio": 179990,
        "descripcion breve": "Delay analógico cálido, tiempo 600ms.",
        "imagen": "../img/pedales/Pedal Delay.png"
    },
    {
        "codigo": "PE006",
        "categoria": "Pedales de Efectos",
        "nombre del producto": "Pedal Overdrive",
        "marca": "Ibanez",
        "modelo": "TS9",
        "stock": 6,
        "precio": 99990,
        "descripcion breve": "Tube Screamer clásico, sonido suave y orgánico.",
        "imagen": "../img/pedales/Pedal Overdrive.png"
    },
    {
        "codigo": "AC001",
        "categoria": "Accesorios",
        "nombre del producto": "Cuerdas Guitarra Eléctrica 09-42",
        "marca": "Ernie Ball",
        "modelo": "Super Slinky",
        "stock": 25,
        "precio": 8990,
        "descripcion breve": "Juego 6 cuerdas, calibre ligero.",
        "imagen": "../img/accesorios/Cuerdas Guitarra Eléctrica 09-42.png"
    },
    {
        "codigo": "AC002",
        "categoria": "Accesorios",
        "nombre del producto": "Cuerdas Guitarra Acústica 12-53",
        "marca": "Ernie Ball",
        "modelo": "Earthwood",
        "stock": 20,
        "precio": 10990,
        "descripcion breve": "Bronce fósforo, sonido cálido.",
        "imagen": "../img/accesorios/Cuerdas Guitarra Acústica 12-53.png"
    },
    {
        "codigo": "AC003",
        "categoria": "Accesorios",
        "nombre del producto": "Cuerdas Bajo 45-105",
        "marca": "Ernie Ball",
        "modelo": "Regular Slinky",
        "stock": 12,
        "precio": 14990,
        "descripcion breve": "Cuerdas de níquel enrollado, set 4 cuerdas.",
        "imagen": "../img/accesorios/Cuerdas Bajo 45-105.png"
    },
    {
        "codigo": "AC004",
        "categoria": "Accesorios",
        "nombre del producto": "Púas de Guitarra x10 (0.73mm)",
        "marca": "Fender",
        "modelo": "351",
        "stock": 50,
        "precio": 3990,
        "descripcion breve": "Celulosa, grosor medio.",
        "imagen": "../img/accesorios/Púas de Guitarra x10 (0.73mm).png"
    },
    {
        "codigo": "AC005",
        "categoria": "Accesorios",
        "nombre del producto": "Capotraste Guitarra",
        "marca": "Dunlop",
        "modelo": "Trigger",
        "stock": 15,
        "precio": 12990,
        "descripcion breve": "Capotraste de resorte, compatible 6 cuerdas.",
        "imagen": "../img/accesorios/Capotraste Guitarra.png"
    },
    {
        "codigo": "AC006",
        "categoria": "Accesorios",
        "nombre del producto": "Afinador de Clip",
        "marca": "Snark",
        "modelo": "SN-5",
        "stock": 20,
        "precio": 8990,
        "descripcion breve": "Afinador cromático de clip, pantalla giratoria.",
        "imagen": "../img/accesorios/Afinador de Clip.png"
    },
    {
        "codigo": "AC007",
        "categoria": "Accesorios",
        "nombre del producto": "Cable Instrumento 3m",
        "marca": "Monster",
        "modelo": "S100-I-3",
        "stock": 15,
        "precio": 12990,
        "descripcion breve": "Cable trenzado, conectores dorados, 3 metros.",
        "imagen": "../img/accesorios/Cable Instrumento 3m.png"
    },
    {
        "codigo": "AC008",
        "categoria": "Accesorios",
        "nombre del producto": "Cable Instrumento 6m",
        "marca": "Monster",
        "modelo": "S100-I-6",
        "stock": 10,
        "precio": 17990,
        "descripcion breve": "Cable trenzado, conectores dorados, 6 metros.",
        "imagen": "../img/accesorios/Cable Instrumento 6m.png"
    },
    {
        "codigo": "AC009",
        "categoria": "Accesorios",
        "nombre del producto": "Soporte Guitarra de Piso",
        "marca": "Hercules",
        "modelo": "GS302B",
        "stock": 12,
        "precio": 22990,
        "descripcion breve": "Soporte plegable con enganche automático.",
        "imagen": "../img/accesorios/Soporte Guitarra de Piso.png"
    },
    {
        "codigo": "AC010",
        "categoria": "Accesorios",
        "nombre del producto": "Soporte Guitarra de Pared",
        "marca": "Hercules",
        "modelo": "WAH-202",
        "stock": 10,
        "precio": 18990,
        "descripcion breve": "Montaje a pared, enganche automático.",
        "imagen": "../img/accesorios/Soporte Guitarra de Pared.png"
    },
    {
        "codigo": "ES001",
        "categoria": "Estudio y Grabación",
        "nombre del producto": "Interfaz de Audio 2x2 USB",
        "marca": "Focusrite",
        "modelo": "Scarlett Solo",
        "stock": 4,
        "precio": 149990,
        "descripcion breve": "1 entrada XLR+instrumento, 2 salidas, 24bit/192kHz.",
        "imagen": "../img/estudio/Interfaz de Audio 2x2 USB.png"
    },
    {
        "codigo": "ES002",
        "categoria": "Estudio y Grabación",
        "nombre del producto": "Auriculares de Estudio",
        "marca": "Audio-Tech.",
        "modelo": "ATH-M20x",
        "stock": 6,
        "precio": 79990,
        "descripcion breve": "Circumaurales, respuesta 15Hz-20kHz.",
        "imagen": "../img/estudio/Auriculares de Estudio.png"
    },
    {
        "codigo": "ES003",
        "categoria": "Estudio y Grabación",
        "nombre del producto": "Auriculares de Estudio Pro",
        "marca": "Audio-Tech.",
        "modelo": "ATH-M50x",
        "stock": 4,
        "precio": 219990,
        "descripcion breve": "Referencia de industria, sonido neutro y detallado.",
        "imagen": "../img/estudio/Auriculares de Estudio Pro.png"
    },
    {
        "codigo": "ES004",
        "categoria": "Estudio y Grabación",
        "nombre del producto": "Monitor de Estudio 5\"",
        "marca": "Yamaha",
        "modelo": "HS5",
        "stock": 2,
        "precio": 349990,
        "descripcion breve": "Altavoz activo, respuesta plana, ideal mezcla.",
        "imagen": "../img/estudio/Monitor de Estudio 5.png"
    },
    {
        "codigo": "ES005",
        "categoria": "Estudio y Grabación",
        "nombre del producto": "Pop Filter para Micrófono",
        "marca": "Sennheiser",
        "modelo": "MZP 40",
        "stock": 8,
        "precio": 14990,
        "descripcion breve": "Doble malla, brazo flexible con clip.",
        "imagen": "../img/estudio/Pop Filter para Micrófono.png"
    }
];

// Arreglo con usuarios
const usuarios = [
    {
        rut: "11111111-1",
        nombre: "Solange Hernandez",
        correo: "so.hernandezr@duocuc.cl",
        rol: "Administrador",
        activo: true
    },
    {
        rut: "222222222-1",
        nombre: "Matias Mazzo",
        correo: "ma.mazzo@duocuc.cl",
        rol: "Administrador",
        activo: true
    },
    {
        rut: "33333333-2",
        nombre: "Cliente Frecuente",
        correo: "cliente@ejemplo.com",
        rol: "Cliente",
        activo: true
    }
];

// Comprobación en la consola
console.log("Catálogo inicializado con " + productos.length + " productos.");

// Función para renderizar la página de detalle
function renderizarDetalle() {
    const contenedorDetalle = document.getElementById("contenedor-detalle");
    if (!contenedorDetalle) return; // Se detiene si no estamos en detalle.html

    // Obtener el código de la URL
    const parametrosURL = new URLSearchParams(window.location.search);
    const codigoProducto = parametrosURL.get('codigo');

    if (!codigoProducto) {
        contenedorDetalle.innerHTML = '<div class="alert alert-danger text-center">No se especificó ningún producto.</div>';
        return;
    }

    // Buscar el producto en el arreglo
    const producto = productos.find(p => p.codigo === codigoProducto);

    if (!producto) {
        contenedorDetalle.innerHTML = '<div class="alert alert-warning text-center">El producto no existe o fue retirado.</div>';
        document.title = "Producto no encontrado - Sonido Vivo";
        return;
    }

    // Cambia el título de la página
    document.title = producto["nombre del producto"] + " - Sonido Vivo";

    // Inyectar la información estructurada en dos columnas
    contenedorDetalle.innerHTML = `
        <nav aria-label="breadcrumb" class="mb-4">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="catalogo_general.html">Catálogo</a></li>
                <li class="breadcrumb-item active" aria-current="page">${producto.categoria}</li>
            </ol>
        </nav>
        
        <div class="row">
            <!-- Columna Izquierda: Imagen -->
            <div class="col-md-6 mb-4 mb-md-0">
                <div class="bg-dark-luxury text-gold d-flex align-items-center justify-content-center h-100 border border-gold" style="min-height: 400px; border-radius: 8px;">
                    ${producto.imagen ? `<img src="${producto.imagen}" class="img-fluid" alt="${producto["nombre del producto"]}">` : '<span class="text-secondary">Imagen no disponible</span>'}
                </div>
            </div>
            
            <!-- Columna Derecha: Información Ampliada -->
            <div class="col-md-6 d-flex flex-column justify-content-center">
                <h2 class="fw-bold mb-2 text-light">${producto["nombre del producto"]}</h2>
                <h5 class="text-gold mb-4">${producto.marca} | Modelo: ${producto.modelo}</h5>
                
                <h3 class="text-gold fw-bold mb-4">$${producto.precio.toLocaleString('es-CL')}</h3>
                
                <p class="fs-5 mb-4 text-secondary">${producto["descripcion breve"]}</p>
                
                <div class="mb-4">
                    <span class="badge ${producto.stock > 0 ? 'bg-success' : 'bg-danger'} p-2 fs-6">
                        Stock: ${producto.stock} unidades
                    </span>
                    <span class="ms-2 text-muted">Código: ${producto.codigo}</span>
                </div>
                
                <hr class="mb-4">
                
                <button class="btn btn-gold btn-lg w-100 fw-bold" onclick="agregarAlCarrito('${producto.codigo}')">
                    Añadir al Carrito
                </button>
            </div>
        </div>
    `;
}

// Ejecutar la función al cargar la página
renderizarDetalle();

// Funciones globales para mostrar y ocultar errores en formularios
function mostrarError(elemento, mensaje) {
    elemento.textContent = mensaje;
    elemento.classList.remove('d-none');
}

function ocultarError(elemento) {
    elemento.textContent = '';
    elemento.classList.add('d-none');
}

// Lógica para renderizar Productos Destacados en el Inicio
const contenedorDestacados = document.getElementById('contenedor-destacados');

if (contenedorDestacados) {
    const productosDestacados = productos.slice(0, 3);
    contenedorDestacados.innerHTML = ''; 

    productosDestacados.forEach(producto => {
        contenedorDestacados.innerHTML += `
            <div class="col-md-4 mb-4">
                <div class="card h-100 shadow-sm card-luxury">
                    
                    <!-- Espacio para la imagen -->
                    <div class="bg-dark-luxury text-white text-center d-flex align-items-center justify-content-center" style="height: 220px;">
                        ${producto.imagen 
                            ? `<img src="${producto.imagen}" class="img-fluid h-100 p-3" style="object-fit: contain;" alt="${producto.marca} ${producto.modelo}">` 
                            : '<span style="font-size: 5rem; opacity: 0.5;">🎸</span>'
                        }
                    </div>
                    
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title text-gold fw-bold">${producto.marca} ${producto.modelo}</h5>
                        <p class="card-text text-light small">${producto['descripcion breve']}</p>
                        <p class="fw-bold fs-4 mt-auto text-white mb-0">$${producto.precio.toLocaleString('es-CL')}</p>
                    </div>
                    
                    <div class="card-footer bg-transparent border-top-0 pb-4 pt-0">
                        <div class="d-flex gap-2">
                            <a href="detalle.html?codigo=${producto.codigo}" class="btn btn-outline-gold w-50 fw-bold">Ver Detalles</a>
                            <button class="btn btn-gold w-50 fw-bold" onclick="agregarAlCarrito('${producto.codigo}')">
                                Agregar
                            </button>
                        </div>
                    </div>
                    
                </div>
            </div>
        `;
    });
}
/*
----------------------------- SCROLL AUTOMÁTICO CATEGORÍAS ------------------------
*/
const contenedorCategorias = document.getElementById('contenedor-categorias');
const zonaIzq = document.getElementById('zona-scroll-izq');
const zonaDer = document.getElementById('zona-scroll-der');
let intervaloScroll;

if (contenedorCategorias && zonaIzq && zonaDer) {
    // Función que mueve el scroll fluidamente
    const iniciarScroll = (direccion) => {
        // Desactivamos temporalmente el scroll-behavior suave para que no compita con el setInterval
        contenedorCategorias.style.scrollBehavior = 'auto';
        
        intervaloScroll = setInterval(() => {
            // Ajusta el '6' para que el movimiento sea más rápido o más lento
            contenedorCategorias.scrollLeft += direccion * 6; 
        }, 10);
    };

    const detenerScroll = () => {
        clearInterval(intervaloScroll);
        // Devolvemos el scroll suave por si el usuario decide hacer scroll manual
        contenedorCategorias.style.scrollBehavior = 'smooth';
    };

    // Eventos para la zona izquierda
    zonaIzq.addEventListener('mouseenter', () => iniciarScroll(-1));
    zonaIzq.addEventListener('mouseleave', detenerScroll);
    
    // Eventos para la zona derecha
    zonaDer.addEventListener('mouseenter', () => iniciarScroll(1));
    zonaDer.addEventListener('mouseleave', detenerScroll);
}