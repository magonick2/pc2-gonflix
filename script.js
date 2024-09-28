const movies = [
    { id: 1, title: "Rez Ball (2024)", genre: "action", image: "images/pelicula1.jpg", description: "Un equipo de baloncesto de instituto con raíces en la cultura nativa americana pierde a su mejor jugador y debe permanecer unido para llegar al campeonato estatal." },
    { id: 2, title: "Sol de justicia (2024)", genre: "comedy", image: "images/pelicula2.jpg", description: "Un detective privado expatriado acepta investigar una muerte sospechosa en Creta, Grecia, dentro de una familia con celos muy arraigados." },
    { id: 3, title: "Garfield: La película (2024)", genre: "drama", image: "images/pelicula3.jpg", description: "El mundialmente famoso Garfield, el gato casero que odia los lunes y que adora la lasaña, está a punto de vivir una aventura ¡en el salvaje mundo exterior! Tras una inesperada reunión con su largamente perdido padre – el desaliñado gato callejero Vic – Garfield y su amigo canino Odie se ven forzados a abandonar sus perfectas y consentidas vidas al unirse a Vic en un hilarante y muy arriesgado atraco." },
    { id: 4, title: "El reino del planeta de los simios (2024)", genre: "action", image: "images/pelicula4.jpg", description: "Ambientada varias generaciones en el futuro tras el reinado de César, en la que los simios son la especie dominante que vive en armonía y los humanos se han visto reducidos a vivir en la sombra. Mientras un nuevo y tiránico líder simio construye su imperio, un joven simio emprende un angustioso viaje que le llevará a cuestionarse todo lo que sabe sobre el pasado y a tomar decisiones que definirán el futuro de simios y humanos por igual." },
    { id: 5, title: "Titanic II (2010)", genre: "comedy", image: "images/pelicula5.jpg", description: "En el centenario del hundimiento del famoso Titanic, un crucero moderno bautizado como Titanic 2 repite la ruta de su antecesor con todo tipo de medidas de seguridad. Pero la historia es cíclica y un tsunami pondrá en peligro esta vez las vidas de los pasajeros. El cineasta Shane Van Dyke dirige, escribe y protagoniza esta curiosa secuela del taquillazo de James Cameron de 1997. La cinta, que contó con un presupuesto muchísimo más reducido que Titanic" },
    { id: 6, title: "Wolfs (2024)", genre: "drama", image: "images/pelicula6.jpg", description: "Dos “solucionadores” rivales cruzan sus caminos cuando los llaman a ambos para ayudar a ocultar el desliz de una importante funcionaria de Nueva York. Durante una noche muy intensa, deberán dejar de lado sus pequeñas rencillas -y sus egos- para terminar el trabajo." },
    { id: 7, title: "Romper el círculo (2024)", genre: "action", image: "images/pelicula7.jpg", description: "Una mujer atraviesa las tumultuosas etapas de una relación abusiva. Tras mudarse a la ciudad de Boston después de la universidad, decide iniciar su propio negocio como florista y se enamora de un joven neurocirujano." },
    { id: 8, title: "Transformers One (2024)", genre: "comedy", image: "images/pelicula8.jpg", description: "La historia jamás contada del origen de Optimus Prime y Megatron y de cómo pasaron de ser hermanos de armas que cambiaron el destino de Cybertron para siempre, a convertirse en enemigos acérrimos." },
    { id: 9, title: "Del revés 2 (Inside Out 2) (2024)", genre: "drama", image: "images/pelicula9.jpg", description: "Riley entra en la adolescencia y el Cuartel General de su cabeza sufre una repentina reforma para hacerle hueco a algo totalmente inesperado propio de la pubertad: ¡nuevas emociones! Alegría, Tristeza, Ira, Miedo y Asco, con años de impecable gestión a sus espaldas (según ellos...) no saben muy bien qué sentir cuando aparece con enorme ímpetu Ansiedad. Y no viene sola: le acompañan envidia, vergüenza y aburrimiento. Secuela de 'Inside Out'." },
    { id: 10, title: "Deadpool y Lobezno (2024)", genre: "action", image: "images/pelicula10.jpg", description: "Un apático Wade Wilson se afana en la vida civil tras dejar atrás sus días como Deadpool, un mercenario moralmente flexible. Pero cuando su mundo natal se enfrenta a una amenaza existencial, Wade debe volver a vestirse a regañadientes con un Lobezno aún más reacio a ayudar." },
];

const movieContainer = document.querySelector('.movie-container');
const filterButtons = document.querySelectorAll('.filter-btn');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const closeBtn = document.querySelector('.close');
const favoriteBtn = document.getElementById('favorite-btn');


function displayMovies(movies) {
    movieContainer.innerHTML = '';
    movies.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');
        movieElement.innerHTML = `<img src="${movie.image}" alt="${movie.title}">`;
        movieElement.addEventListener('click', () => openModal(movie));
        movieContainer.appendChild(movieElement);
    });
}


function filterMovies(genre) {
    if (genre === 'all') {
        displayMovies(movies);
    } else {
        const filteredMovies = movies.filter(movie => movie.genre === genre);
        displayMovies(filteredMovies);
    }
}

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        filterMovies(button.getAttribute('data-filter'));
    });
});

function openModal(movie) {
    modalImg.src = movie.image;
    modalTitle.textContent = movie.title;
    modalDescription.textContent = movie.description;
    favoriteBtn.classList.remove('active');
    modal.style.display = 'block';
}

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});


favoriteBtn.addEventListener('click', () => {
    favoriteBtn.classList.toggle('active');
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

displayMovies(movies);