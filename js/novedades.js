const publicaciones = [
    {
        id: 1,
        categoria: "Guías",
        titulo: "Arma tu primer Home Studio: Lo esencial para empezar a grabar",
        fecha: "1 de Septiembre, 2026",
        resumen: "Descubre qué interfaz, micrófono y monitores necesitas para obtener calidad profesional desde tu habitación sin salirte del presupuesto.",
        contenido: `
            <p>Empezar en el mundo de la producción musical puede ser abrumador por la cantidad de opciones disponibles. Sin embargo, no necesitas gastar una fortuna para obtener resultados profesionales.</p>
            <h3 class="fw-bold mt-4 mb-3">La Interfaz de Audio</h3>
            <p>Es el corazón de tu estudio. Recomendamos interfaces de 2 entradas y 2 salidas para empezar. Esto te permitirá grabar una voz y una guitarra simultáneamente.</p>
            <h3 class="fw-bold mt-4 mb-3">Monitores vs Audífonos</h3>
            <p>Aunque los audífonos son excelentes para grabar sin retroalimentación, unos buenos monitores de estudio te darán una respuesta "plana", crucial para que tu mezcla suene bien en cualquier sistema de sonido.</p>
        `,
        imagenPlaceholder: "../img/monitores-de-estudio-en-home-studio.jpg"
    },
    {
        id: 2,
        categoria: "Análisis Musical",
        titulo: "Construyendo la atmósfera: El sonido detrás de Alkaline (Sleep Token)",
        fecha: "5 de Septiembre, 2026",
        resumen: "Un desglose técnico de cómo la mezcla de ecualización precisa y distorsión controlada genera las atmósferas envolventes de esta pista.",
        contenido: `
            <p>Cuando analizamos la producción moderna, pocas bandas logran fusionar géneros con tanta precisión como Sleep Token. En esta publicación, desglosaremos los elementos técnicos que hacen de la pista una experiencia envolvente, ideal para probar la respuesta de frecuencias de tus nuevos monitores de estudio.</p>
            <h3 class="fw-bold mt-4 mb-3">La química del sonido: Temáticas de pH y estructura</h3>
            <p>Desde la perspectiva de la mezcla, la canción hace honor a su temática química. Las transiciones entre los versos limpios y los estribillos pesados están tratadas con una ecualización muy meticulosa. Es fascinante cómo la estructura simbólica de la letra —con un conteo de sílabas muy particular y metáforas sobre elementos ácidos y alcalinos— se refleja en el diseño sonoro: guitarras afinadas muy graves que actúan como la "acidez" abrasiva, contrastadas por sintetizadores cristalinos y reverberaciones largas que aportan el equilibrio "alcalino".</p>
            <h3 class="fw-bold mt-4 mb-3">Equipamiento recomendado para recrear el tono</h3>
            <p>Si buscas experimentar con estos contrastes en tu propia música, la clave está en el control de la distorsión. Recomendamos el uso de guitarras de rango extendido, pasadas por pedales de overdrive que ajusten los medios antes de golpear un amplificador de alta ganancia.</p>
        `,
        imagenPlaceholder: "../img/donkey-sound-effects-5.avif"
    }
];

function renderizarBlog() {
    const contenedorBlog = document.getElementById("contenedor-blog");
    if (!contenedorBlog) return;

    contenedorBlog.innerHTML = "";
    
    publicaciones.forEach(post => {
        contenedorBlog.innerHTML += `
            <div class="col-md-6 mb-4">
                <div class="card h-100 shadow-sm card-luxury">
                    <div class="bg-dark-luxury text-gold d-flex align-items-center justify-content-center" style="height: 250px;">
                        <img src="${post.imagenPlaceholder}" alt="${post.titulo}" class="w-100 h-100" style="object-fit: cover;"></span>
                    </div>
                    <div class="card-body d-flex flex-column">
                        <span class="badge mb-2 align-self-start" style="background-color: #D4AF37; color: #0a0a0a;">${post.categoria}</span>
                        <h4 class="card-title fw-bold text-light">${post.titulo}</h4>
                        <p class="card-text text-secondary">${post.resumen}</p>
                        <a href="novedades_detalle.html?id=${post.id}" class="btn btn-outline-gold mt-auto">Leer artículo completo</a>
                    </div>
                </div>
            </div>
        `;
    });
}

function renderizarPostCompleto() {
    const contenedorPost = document.getElementById("contenedor-post");
    if (!contenedorPost) return;

    const parametrosURL = new URLSearchParams(window.location.search);
    const idPost = parseInt(parametrosURL.get('id'));

    const post = publicaciones.find(p => p.id === idPost);

    if (!post) {
        contenedorPost.innerHTML = '<div class="alert alert-danger text-center">Publicación no encontrada.</div>';
        document.title = "Error - Sonido Vivo";
        return;
    }

    document.title = `${post.titulo} - Sonido Vivo`;

    contenedorPost.innerHTML = `
        <div class="row justify-content-center">
            <div class="col-lg-8">
                <div class="mb-4">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="novedades.html">Blog</a></li>
                            <li class="breadcrumb-item active" aria-current="page">${post.categoria}</li>
                        </ol>
                    </nav>
                    <h1 class="fw-bold">${post.titulo}</h1>
                    <p class="text-muted">Por Equipo Sonido Vivo | Publicado el ${post.fecha}</p>
                </div>

                <div class="bg-dark-luxury text-gold d-flex align-items-center justify-content-center rounded shadow-sm mb-5 border border-gold" style="height: 350px;">
                    <span>${post.imagenPlaceholder}</span>
                </div>

                <article class="fs-5 text-light" style="line-height: 1.8;">
                    ${post.contenido}
                    
                    <div class="bg-black text-white p-4 rounded mt-5 text-center border border-gold">
                        <h5 class="mb-3 text-gold">¿Te inspiraste?</h5>
                        <p class="fs-6 text-light mb-4">Revisa nuestro catálogo para encontrar el equipamiento ideal para tu sonido.</p>
                        <a href="catalogo_general.html" class="btn btn-outline-gold">Ir al Catálogo</a>
                    </div>
                </article>
            </div>
        </div>
    `;
}

renderizarBlog();
renderizarPostCompleto();