/* ========================================
   JOEL'S BIRTHDAY WEBSITE — script.js
   ======================================== */


/* ---- ENTER THE SITE ---- */
function enterSite() {
  // Smooth scroll to first section
  const mainContent = document.getElementById('mainContent');
  mainContent.classList.add('visible');

  // Scroll past the landing section
  setTimeout(() => {
    document.getElementById('message').scrollIntoView({ behavior: 'smooth' });
  }, 300);
}


/* ---- FLOATING PARTICLES ---- */
(function spawnParticles() {
  const container = document.getElementById('particles');
  // ✏️ Add or remove symbols from this array to change the particles
  const symbols = ['🌸', '✨', '🤍', '🌷', '💛', '🫧', '🌼'];
  const count = 22;

  for (let i = 0; i < count; i++) {
    const el = document.createElement('span');
    el.classList.add('particle');
    el.textContent = symbols[Math.floor(Math.random() * symbols.length)];

    const size   = 0.7 + Math.random() * 1.2;
    const left   = Math.random() * 100;
    const dur    = 10 + Math.random() * 16;
    const delay  = Math.random() * 18;

    el.style.cssText = `
      left: ${left}%;
      font-size: ${size}rem;
      animation-duration: ${dur}s;
      animation-delay: ${delay}s;
    `;

    container.appendChild(el);
  }
})();


/* ---- SCROLL REVEAL ---- */
(function setupScrollReveal() {
  const revealEls = document.querySelectorAll(
    '.message-body p, .card, .gallery-item, .final-quote p, .section-title, .section-tag'
  );

  revealEls.forEach(el => el.classList.add('reveal'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealEls.forEach(el => observer.observe(el));
})();


/* ---- REVEAL HIDDEN MESSAGE ---- */
function revealMessage() {
  const msg = document.getElementById('hiddenMessage');
  const btn = document.getElementById('revealBtn');

  if (msg.classList.contains('visible')) {
    msg.classList.remove('visible');
    btn.textContent = 'Tap to Reveal 🤍';
  } else {
    msg.classList.add('visible');
    btn.textContent = 'Hide 🙈';
    msg.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}


/* ---- BACKGROUND MUSIC ---- */
let musicPlaying = false;

function toggleMusic() {
  const audio = document.getElementById('bgMusic');
  const btn   = document.getElementById('musicBtn');

  if (musicPlaying) {
    audio.pause();
    btn.textContent = '🎵';
    btn.classList.remove('playing');
    musicPlaying = false;
  } else {
    audio.volume = 0.2; // keep it soft
    audio.play().then(() => {
      btn.textContent = '🎶';
      btn.classList.add('playing');
      musicPlaying = true;
    }).catch(() => {
      // Browser blocked autoplay — that's okay
      console.log('Add a music file to /assets/music/ to enable music.');
    });
  }
}


/* ---- TYPEWRITER EFFECT on landing pretext ---- */
(function typewriter() {
  const el = document.querySelector('.landing-pretext');
  if (!el) return;

  const text = el.textContent.trim();
  el.textContent = '';
  el.style.opacity = 1;

  let i = 0;
  const speed = 45; // ms per character

  function type() {
    if (i < text.length) {
      el.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }

  // Start after a small delay so the page loads first
  setTimeout(type, 600);
})();


/* ---- POLAROID TILT ON MOUSE MOVE (subtle 3D feel on desktop) ---- */
document.querySelectorAll('.polaroid').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    card.style.transform =
      `rotate(0deg) translateY(-10px) scale(1.04) rotateY(${dx * 6}deg) rotateX(${-dy * 6}deg)`;
  });
  card.addEventListener('mouseleave', () => {
    const rot = getComputedStyle(card).getPropertyValue('--rot').trim() || '0deg';
    card.style.transform = `rotate(${rot})`;
  });
});
