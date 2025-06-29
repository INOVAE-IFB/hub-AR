function enterApp() {
  const button = document.querySelector('.enter-button');
  button.style.transform = 'scale(0.95)';
  button.textContent = 'Carregando...';

  setTimeout(() => {
    // Esconde tela de entrada
    document.querySelector('.splash').style.display = 'none';

    // Mostra app
    document.querySelector('#mainApp').style.display = 'block';

    // Restaura botão
    button.textContent = 'Entrar';
    button.style.transform = 'scale(1)';
  }, 1500);
}

// Partículas
function createParticle() {
  const particle = document.createElement('div');
  particle.style.position = 'absolute';
  particle.style.width = Math.random() * 4 + 2 + 'px';
  particle.style.height = particle.style.width;
  particle.style.background = `rgba(${Math.random() * 100 + 155}, ${Math.random() * 100 + 155}, 255, ${Math.random() * 0.5 + 0.3})`;
  particle.style.borderRadius = '50%';
  particle.style.left = Math.random() * 100 + '%';
  particle.style.top = Math.random() * 100 + '%';
  particle.style.pointerEvents = 'none';
  particle.style.animation = `float ${Math.random() * 4 + 3}s ease-in-out infinite`;
  particle.style.animationDelay = Math.random() * 2 + 's';

  document.querySelector('.background-animation').appendChild(particle);

  setTimeout(() => {
    particle.remove();
  }, 7000);
}

setInterval(createParticle, 2000);

 // Smooth scrolling for navigation links
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

        // Download functions
        function downloadAPK(appName) {
            // Aqui você pode implementar a lógica real de download
            alert(`Iniciando download do ${appName === 'peripheral-hunt' ? 'Peripheral Hunt' : 'HardAR'}...`);
            // Exemplo: window.location.href = 'path/to/your/apk/file.apk';
        }

        function downloadQRCodes() {
            // Implementar download do PDF com QR codes
            alert('Iniciando download do PDF com QR Codes...');
            // Exemplo: window.location.href = 'path/to/qr-codes.pdf';
        }

        // Add scroll animation to cards
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe all cards
        document.querySelectorAll('.app-card, .instruction-card').forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(card);
        });
        
// Toggle menu for mobile view
 document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-menu");

  menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("active");
  });
});

  
  document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.header');
    const scrollThreshold = 100; // Pixels scrolled before transformation

    window.addEventListener('scroll', function() {
        if (window.scrollY > scrollThreshold) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});
