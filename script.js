// Array con las imágenes de constelaciones que rotarán
const constelaciones = [
    'https://cdn.pixabay.com/photo/2016/10/20/18/35/earth-1756274_1280.jpg',
    'https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_1280.jpg',
    'https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616_1280.jpg',
    'https://cdn.pixabay.com/photo/2015/02/26/09/21/nebula-650289_1280.jpg',
    'https://cdn.pixabay.com/photo/2013/07/18/20/26/constellation-164930_1280.jpg',
    'https://cdn.pixabay.com/photo/2015/12/03/09/34/night-sky-1074889_1280.jpg'
];

let indiceActual = 0;

// Función para cambiar el fondo
function cambiarFondoConstelacion() {
    // Crear un nuevo elemento de imagen para precargar
    const img = new Image();
    img.onload = function() {
        document.body.style.backgroundImage = `url(${constelaciones[indiceActual]})`;
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundPosition = 'center';
        document.body.style.backgroundAttachment = 'fixed';
        document.body.style.backgroundRepeat = 'no-repeat';
    };
    img.src = constelaciones[indiceActual];
    
    // Actualizar el índice para la próxima imagen
    indiceActual = (indiceActual + 1) % constelaciones.length;
}

// Configurar la animación de rotación horaria
function iniciarRotacionConstelaciones() {
    // Cambiar inmediatamente la primera imagen
    cambiarFondoConstelacion();
    
    // Configurar el intervalo para cambiar cada 8 segundos
    setInterval(cambiarFondoConstelacion, 8000);
}

// Agregar efecto de parallax al scroll
function agregarEfectoParallax() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });
}

// Agregar animación suave al hacer clic en los enlaces de navegación
function agregarNavegacionSuave() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Inicializar todas las funcionalidades cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    iniciarRotacionConstelaciones();
    agregarEfectoParallax();
    agregarNavegacionSuave();
    
    // Agregar efecto de brillo a las tarjetas al pasar el mouse
    const cards = document.querySelectorAll('.planet-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transition = 'all 0.3s ease';
        });
    });
    
    console.log('Página cargada - Las constelaciones están rotando en sentido horario');
});

// Función para manejar la visibilidad de la página (optimización)
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        console.log('Página oculta - Las constelaciones continúan rotando');
    } else {
        console.log('Página visible - Las constelaciones siguen su rotación');
    }
});