// Función para agregar la clase 'show' a los elementos del menú
function mostrarMenu() {
    const items = document.querySelectorAll('.item');
    items.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('show');
        }, index * 200); // Retraso de 200ms entre cada item
    });
}

// Función para agregar la clase 'show' a las secciones al hacer scroll
function mostrarSecciones() {
    const secciones = document.querySelectorAll('section');
    secciones.forEach((seccion) => {
        const seccionPos = seccion.getBoundingClientRect().top;
        if (seccionPos <= window.innerHeight) {
            seccion.classList.add('show');
        }
    });
}


// Función para actualizar el gradiente dinámicamente según la posición del cursor
document.addEventListener('mousemove', (e) => {
    const x = e.clientX; // Posición horizontal del cursor
    const y = e.clientY; // Posición vertical del cursor

    // Convertir las posiciones del cursor en valores relativos (0 a 1) para el gradiente
    const percentX = x / window.innerWidth; // 0 a 1 en el eje X
    const percentY = y / window.innerHeight; // 0 a 1 en el eje Y

    // Ajustar la intensidad del gradiente según la posición del cursor
    const intensity = 0.5 + (percentX + percentY) / 4; // Crea una mezcla suave de intensidad

    // Aplicar el gradiente dinámico con tonos de azul marino
    document.body.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(0, 0, 128, ${intensity}), rgba(0, 0, 64, 0.3))`;
});


// Función para mostrar el detalle del servicio correspondiente
function seleccionarServicio(servicio) {
    // Ocultar todas las secciones
    const secciones = document.querySelectorAll('.servicio-detalle');
    secciones.forEach((seccion) => {
        seccion.classList.remove('show');  // Oculta todas las secciones
    });

    // Mostrar la sección seleccionada
    const seccionSeleccionada = document.getElementById('reparacion-' + servicio);
    if (seccionSeleccionada) {
        seccionSeleccionada.classList.add('show');  // Muestra la sección seleccionada
    }
}

// Llamar a la función cuando se hace clic en un ícono del menú
document.querySelectorAll('.item').forEach((item) => {
    item.addEventListener('click', (e) => {
        // Obtenemos el servicio del atributo 'data-servicio'
        const servicio = item.getAttribute('data-servicio');
        seleccionarServicio(servicio);
    });
});

// Llamar a las funciones cuando la página se haya cargado
document.addEventListener('DOMContentLoaded', () => {
    mostrarMenu(); // Animar los elementos del menú

    // Animar las secciones al hacer scroll
    window.addEventListener('scroll', mostrarSecciones);
    mostrarSecciones(); // Verificar si las secciones ya están en la vista al cargar
});
