document.addEventListener("DOMContentLoaded", function() {
  const container = document.querySelector('.rain-container');
  const numberOfDrops = 60; // Chuva sutil para visual profissional

  for (let i = 0; i < numberOfDrops; i++) {
    const drop = document.createElement('div');
    drop.classList.add('raindrop');

    // Posição horizontal aleatória
    drop.style.left = Math.random() * window.innerWidth + 'px';

    // Velocidade de queda aleatória
    drop.style.animationDuration = Math.random() * 1 + 0.5 + 's';

    // Opacidade e tamanho aleatórios
    drop.style.opacity = Math.random() * 0.3 + 0.1;
    drop.style.height = Math.random() * 15 + 10 + 'px';
    drop.style.width = '2px';

    container.appendChild(drop);
  }
});

