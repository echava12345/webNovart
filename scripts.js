// Animaciones y efectos interactivos para webNovart

// Animación de burbujas al hacer scroll
window.addEventListener('scroll', function() {
    document.querySelectorAll('.bubble').forEach(bubble => {
        bubble.style.transform = 'scale(1.05) rotate(' + (window.scrollY % 360) + 'deg)';
        setTimeout(() => bubble.style.transform = '', 300);
    });
});

// Efecto animado en cards
document.querySelectorAll('.interactive-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.transform = `rotateX(${-(y-rect.height/2)/14}deg) rotateY(${(x-rect.width/2)/14}deg) scale(1.04)`;
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = '';
    });
});

// FAQ interactivo
document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('open');
        let p = item.querySelector('p');
        if (item.classList.contains('open')) {
            p.style.display = 'block';
        } else {
            p.style.display = 'none';
        }
    });
    // Mostrar solo la pregunta inicialmente
    item.querySelector('p').style.display = 'none';
});

// Efecto bounce en immersive experience
document.querySelectorAll('.interactive-bounce').forEach(el => {
    el.addEventListener('mouseover', () => {
        el.style.transform = 'scale(1.15) rotate(-5deg)';
    });
    el.addEventListener('mouseout', () => {
        el.style.transform = '';
    });
});

// Formulario de contacto (sin backend, solo feedback visual)
const contactForm = document.getElementById('contactForm');
if(contactForm) {
    contactForm.addEventListener('submit', function(e){
        e.preventDefault();
        document.getElementById('formSuccess').style.display = 'block';
        document.getElementById('formSuccess').textContent = '¡Mensaje enviado! Nos contactaremos pronto.';
        setTimeout(() => {
            document.getElementById('formSuccess').style.display = 'none';
            contactForm.reset();
        }, 3500);
    });
}

// Hero animado (opcional, si tienes SVGs o imágenes animadas)
const heroImg = document.querySelector('.animated-graphic');
if(heroImg) {
    heroImg.addEventListener('mouseenter', () => {
        heroImg.style.filter = 'drop-shadow(0 0 25px #2f80ed)';
        heroImg.style.transform = 'scale(1.07) rotate(-2deg)';
    });
    heroImg.addEventListener('mouseleave', () => {
        heroImg.style.filter = '';
        heroImg.style.transform = '';
    });
}
// Dibujo en canvas
const canvas = document.getElementById('draw-canvas');
if (canvas) {
  const ctx = canvas.getContext('2d');
  let drawing = false;
  canvas.addEventListener('mousedown', e => { drawing = true; ctx.beginPath(); });
  canvas.addEventListener('mouseup', e => { drawing = false; });
  canvas.addEventListener('mouseout', e => { drawing = false; });
  canvas.addEventListener('mousemove', function(e) {
    if (!drawing) return;
    const rect = canvas.getBoundingClientRect();
    ctx.lineWidth = 2.5;
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#2f80ed';
    ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
  });
}

// Cambio de tema
const themeBtn = document.getElementById('theme-btn');
if (themeBtn) {
  themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
      themeBtn.textContent = 'Modo Claro';
    } else {
      themeBtn.textContent = 'Modo Oscuro';
    }
  });
}

// Efecto partículas en botón
const particlesBtn = document.getElementById('particles-btn');
const particlesContainer = document.getElementById('particles-container');
if (particlesBtn && particlesContainer) {
  particlesBtn.addEventListener('click', () => {
    for (let i = 0; i < 15; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
      p.style.position = 'absolute';
      p.style.left = '45px';
      p.style.top = '25px';
      p.style.width = '9px';
      p.style.height = '9px';
      p.style.borderRadius = '50%';
      p.style.background = `linear-gradient(90deg, #ff6a00, #2f80ed)`;
      p.style.opacity = Math.random() * 0.8 + 0.2;
      p.style.transform = `translate(-50%, -50%)`;
      particlesContainer.appendChild(p);
      const angle = Math.random() * Math.PI * 2;
      const radius = Math.random() * 35 + 18;
      setTimeout(() => {
        p.style.transition = 'all .8s cubic-bezier(.7,.2,.4,1)';
        p.style.transform = `translate(${Math.cos(angle)*radius}px, ${Math.sin(angle)*radius}px) scale(0.5)`;
        p.style.opacity = 0;
      }, 10);
      setTimeout(() => particlesContainer.removeChild(p), 900);
    }
  });
}

// Flip Card
const flipCard = document.querySelector('.flip-card');
if (flipCard) {
  flipCard.addEventListener('click', () => {
    flipCard.classList.toggle('flipped');
  });
}

// Dark mode body (opcional para tema)
if (document.body.classList.contains('dark-mode')) {
  document.body.style.background = "#23272f";
}
const revealBox = document.getElementById('revealBox');
if (revealBox) {
  revealBox.addEventListener('mouseenter', function() {
    revealBox.textContent = '¡Sorpresa! 😃';
    revealBox.classList.add('active');
  });
  revealBox.addEventListener('mouseleave', function() {
    revealBox.textContent = '¿Qué hay aquí?';
    revealBox.classList.remove('active');
  });
}
