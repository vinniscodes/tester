let currentIndex = 0;
const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');

function moveCarousel() {
    if (currentIndex >= items.length) {
        currentIndex = 0; // Reseta para o primeiro item se alcançar o final
    }
    const offset = -currentIndex * (items[0].clientWidth + 30); // Calcula o deslocamento
    carousel.style.transform = `translateX(${offset}px)`; // Move o carrossel
    currentIndex++;
}

setInterval(moveCarousel, 10000); 
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("carousel-slide");
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 50000); // Muda a imagem a cada 5 segundos
}

function plusSlides(n) {
    slideIndex += n - 1;  // Ajusta o índice manualmente
    showSlides();
}
let lastScrollTop = 0; // Posição do scroll anterior
const navLinks = document.querySelector('.nav-links'); // Seleciona a barra de navegação

window.addEventListener('scroll', function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop; // Posição atual do scroll

    if (currentScroll > lastScrollTop) {
        // Quando o usuário rolar para baixo
        navLinks.classList.add('hidden'); // Adiciona a classe 'hidden' para ocultar a barra
    } else {
        // Quando o usuário rolar para cima
        navLinks.classList.remove('hidden'); // Remove a classe 'hidden' para mostrar a barra
    }

    // Atualiza a última posição do scroll
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
}, false);
window.addEventListener('load', function() {
    // Gerando números aleatórios para cada item
    const representacoes = Math.floor(Math.random() * 500) + 100; // Aleatório entre 100 e 600
    const vendas = Math.floor(Math.random() * 1000) + 500; // Aleatório entre 500 e 1500
    const faturamento = (Math.random() * (100000 - 50000) + 50000).toFixed(2); // Aleatório entre 50.000 e 100.000

    // Atualizando os elementos HTML com os números
    document.getElementById('representacoes').innerText = representacoes;
    document.getElementById('vendas').innerText = vendas;
    document.getElementById('faturamento').innerText = `R$ ${faturamento}`;
});
