gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".block__parallax-01",
        start: "top bottom",
        end: "bottom bottom",
        scrub: true,
    }
});

// === BLOCO 1: elementos aparecem juntos ===
tl.to(".pedra", { x: 0, y: -100, filter: "blur(20px)", duration: 1 })
.to("header", {
    backgroundColor: "white",
    duration: 1,
    ease: "power2.inOut"
  }, "-=1")
    .to(".bota-frente", { x: -400, y: 850, rotation: -25, duration: 1 }, "-=1")
    .to(".bota-tras", { x: 500, y: 850, rotation: 25, duration: 1 }, "-=1")
    .to(".parallax-h1", { x: -400, y: 1000, fontSize: "100px", duration: 1 }, "-=1")
    .to(".text-01-left", {x: -500, ease: "linear",}, "-=1")
    .to(".text-02-right", {x: 500, ease: "linear",}, "-=1")
    .to(".video-final", {x: 0, y: 4000,},"-=1");

// === BLOCO 2: cada elemento sozinho ===
tl.to(".bota-frente", { y: "+=800", rotation: "+=30", duration: 1.5, width: 1000, overwrite: "auto" })
    .to(".h2-text-bt-frente", { opacity: 1, y: "+=1300", x: -380, duration: 1.5 }, "-=1.5")
    .to(".bota-tras", { x: "-=400", y: "+=2200", rotation: "-=35", duration: 1.5, width: 1100, overwrite: "auto" })
    .to(".h2-text-bt-tras", { opacity: 1, y: "+=2700", x: 250, duration: 1.5 }, "-=1.5")
    .to(".video-final", {x: 0, y: "-=780", duration: 1, ease: "linear", zIndex: 100,},);
    


const frame = document.getElementById('ytFrame');
const buttons = document.querySelectorAll('.btn');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const videoId = btn.dataset.video;
    frame.src = `https://www.youtube.com/embed/${videoId}?rel=0&autoplay=1&modestbranding=1`;

    buttons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });

});



