document.addEventListener("DOMContentLoaded", () => {
  const slides = Array.from(document.querySelectorAll(".slide"));
  if (!slides.length) return;

  const btnPrev = document.querySelector(".arrow.prev");
  const btnNext = document.querySelector(".arrow.next");

  let current = 0;
  const DURATION = 5000; // 5s per slide
  let timer;

  const show = (i) => {
    slides.forEach((s, idx) => s.classList.toggle("active", idx === i));
    current = i;
  };

  const next = () => show((current + 1) % slides.length);
  const prev = () => show((current - 1 + slides.length) % slides.length);

  const start = () => (timer = setInterval(next, DURATION));
  const stop  = () => (timer && clearInterval(timer));

  btnNext?.addEventListener("click", () => { stop(); next(); start(); });
  btnPrev?.addEventListener("click", () => { stop(); prev(); start(); });

  show(0);
  start();
});
