const photos = [
    'src/img/GIF-1.gif',
];

let currentIndex = 0;
const photoElement = document.getElementById('photo');

function changePhoto() {
    photoElement.classList.add('fade-out');
    setTimeout(() => {
        photoElement.src = photos[currentIndex];
        photoElement.classList.remove('fade-out');
        currentIndex = (currentIndex + 1) % photos.length;
    }, 1000); // Tempo para a animação de fade-out
}

// Inicializa a primeira foto
changePhoto();

// Altera a foto a cada 5 segundos (2000 milissegundos)
setInterval(changePhoto, 99999999);

const musica = document.getElementById("musica");
const playButton = document.getElementById("playButton");
const pauseButton = document.getElementById("pauseButton");

pauseButton.disabled = true;

playButton.addEventListener("click", () => {
    musica.play();
    playButton.disabled = true;
    pauseButton.disabled = false;
});


pauseButton.addEventListener("click", () => {
    musica.pause();
    playButton.disabled = false;
    pauseButton.disabled = true;
});
