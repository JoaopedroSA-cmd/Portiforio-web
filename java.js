const fraseElement = document.querySelector('.frase');

function toggleAnimation() {
  fraseElement.classList.toggle('paused'); // Adicionar ou remover a classe 'paused' para controlar o estado da animação
  
}

setInterval(toggleAnimation, 9970); // Pausar e retomar a animação a cada 5 segundos (5000 milissegundos)


const infoText = document.getElementById('info_text1');

// Cria uma instância do Intersection Observer
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        // Verifica se o elemento está visível na tela
        if (entry.isIntersecting) {
            // Adiciona a classe CSS com o efeito de queda
            infoText.classList.add('falling-animation');
        } else {
            // Remove a classe CSS se o elemento não estiver mais visível
            infoText.classList.remove('falling-animation');
        }
    });
});

// Observa as mudanças de visibilidade do elemento
observer.observe(infoText);





