(function () {
  const main = document.getElementById('viewport');
  const sections = Array.from(main.querySelectorAll('section'));
  const dotsContainer = document.getElementById('dots');

  sections.forEach((_, i) => {
    const btn = document.createElement('button');
    btn.className = 'dot';
    btn.setAttribute('aria-label', 'Go to section ' + (i+1));
    btn.addEventListener('click', () => scrollToIndex(i));
    dotsContainer.appendChild(btn);
  });

  const dots = Array.from(dotsContainer.children);

  let current = 0;
  let lastAnimation = 0;
  const COOLDOWN = 450;

  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

  function updateActive() {
    sections.forEach((s, i) => {
      if (i === current) {
        s.setAttribute('aria-current', 'true');
        dots[i].classList.add('active');
      } else {
        s.removeAttribute('aria-current');
        dots[i].classList.remove('active');
      }
    });
  }

  function now() { return Date.now(); }

  function scrollToIndex(i) {
    const idx = clamp(i, 0, sections.length - 1);
    if (idx === current && (now() - lastAnimation) < COOLDOWN) return;
    current = idx;
    lastAnimation = now();
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    sections[current].scrollIntoView({
      behavior: prefersReduced ? 'auto' : 'smooth',
      block: 'start'
    });
    updateActive();
  }

  function detectCurrentIndex() {
    let best = 0, bestDist = Infinity;
    for (let i = 0; i < sections.length; ++i) {
      const r = sections[i].getBoundingClientRect();
      const dist = Math.abs(r.top);
      if (dist < bestDist) { bestDist = dist; best = i; }
    }
    current = best;
    updateActive();
  }

  window.addEventListener('keydown', (ev) => {
    if (ev.key === 'ArrowDown' || ev.key === 'PageDown') { ev.preventDefault(); scrollToIndex(current + 1); }
    else if (ev.key === 'ArrowUp' || ev.key === 'PageUp') { ev.preventDefault(); scrollToIndex(current - 1); }
    else if (ev.key === 'Home') { ev.preventDefault(); scrollToIndex(0); }
    else if (ev.key === 'End') { ev.preventDefault(); scrollToIndex(sections.length - 1); }
  }, { passive: false });

  window.addEventListener('wheel', (ev) => {
    const t = now();
    if ((t - lastAnimation) < COOLDOWN) return;
    if (Math.abs(ev.deltaY) < 10) return;
    if (ev.deltaY > 0) scrollToIndex(current + 1);
    else if (ev.deltaY < 0) scrollToIndex(current - 1);
  }, { passive: true });

  let touchStartY = null;
  window.addEventListener('touchstart', (e) => {
    if (e.touches.length === 1) touchStartY = e.touches[0].clientY;
  }, { passive: true });

  window.addEventListener('touchend', (e) => {
    if (touchStartY === null) return;
    const endY = e.changedTouches[0].clientY;
    const delta = touchStartY - endY;
    if (Math.abs(delta) > 50) {
      if (delta > 0) scrollToIndex(current + 1);
      else scrollToIndex(current - 1);
    }
    touchStartY = null;
  }, { passive: true });

  window.addEventListener('resize', detectCurrentIndex);
  window.addEventListener('load', () => {
    detectCurrentIndex();
    scrollToIndex(current);
  });

  let scrollTimeout = null;
  main.addEventListener('scroll', () => {
    if (scrollTimeout) clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      detectCurrentIndex();
    }, 120);
  }, { passive: true });

})();
