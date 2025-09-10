gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: "body",        // <<< aqui troca para o body
    start: "top top",
    end: "bottom bottom",   // <<< fim no final do body
    scrub: 0.8,
  }
});

tl.to(".airpods", {x: 0, y: 0, scale: 0.8, ease: "linear", duration: 1}, "-=1")
    .to(".headset", {x: 0, y: -350, scale: 0.3, ease: "linear", duration: 1}, "-=1")
    .to(".apple-left-text", {x: 0, y: 50, opacity: 0, duration: 1, ease: "linear"}, "-=1")
    .to(".text-right-audio", {x: 0, y: -50, opacity: 0, duration: 1, ease: "linear"}, "-=1")
    .to(".text-right-3", {x: 50, y: 0, opacity: 0, duration: 1, ease: "linear"}, "-=1")
    .to(".left-img-02", {x: 0, y: 50}, "-=1")
    .to(".left-list-02", {x: -50}, "-=1")
    .to(".right-img-02", {x: 50}, "-=1")
    .to(".right-text-02", {y: -50}, "-=1")
    .to(".left-text-02", {y: -50});

tl.to(".left-img-02", {x: 0, y: 0, opacity: 1, duration: 1.5,},)
    .to(".left-list-02", {x: 0, opacity: 1, duration: 1.5},"-=1.5")
    .to(".right-img-02", {x:0, opacity: 1, duration: 1.5},"-=1.5")
    .to(".right-text-02", {y: 0, opacity: 1, duration: 1.5},"-=1.5")
    .to(".left-text-02", {y: 0, opacity: 1, duration: 1.5},"-=1.5");

// JS mínimo e robusto — funciona para scroll da página inteira
const content = document.scrollingElement || document.documentElement; // garante referência correta
const bar = document.querySelector('.scrollbar');
const thumb = document.querySelector('.thumb');

function updateThumb() {
  const scrollTop = content.scrollTop;
  const viewportH = content.clientHeight;
  const fullH = content.scrollHeight;

  // sem conteúdo rolável
  if (fullH <= viewportH) {
    thumb.style.height = '100%';
    thumb.style.transform = 'translateY(0)';
    return;
  }

  const barH = bar.clientHeight;

  // altura do polegar proporcional à área visível (com mínimo)
  const thumbH = Math.max((viewportH / fullH) * barH, 20);

  // posição máxima que o thumb pode ocupar dentro da barra
  const maxThumbTop = barH - thumbH;

  // total rolável da página
  const scrollable = fullH - viewportH;

  // posição do thumb proporcional ao scroll atual
  const thumbTop = (scrollTop / scrollable) * maxThumbTop;

  thumb.style.height = thumbH + 'px';
  thumb.style.transform = `translateY(${thumbTop}px)`;
}

window.addEventListener('scroll', updateThumb, { passive: true });
window.addEventListener('resize', updateThumb);
document.addEventListener('DOMContentLoaded', updateThumb);
updateThumb();