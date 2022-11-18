// Varaibles
const text = new SplitType(".animate");

// Animation

//Title

gsap.to(".char", {
  y: 0,
  stagger: 0.05,
  delay: 0.2,
  duration: 0.5,
});

gsap.from(".appli_dev", {
  opacity: 0,
  duration: 2,
  delay: 2,
});

gsap.from(".hidden_animation", {
  opacity: 0,
  duration: 3,
  delay: 3.5,
});

const landing = gsap.timeline({
  scrollTrigger: {
    trigger: ".landing",
    start: "top top",
    end: "bottom top",
    scrub: true,
  },
});

gsap.utils.toArray(".parallax").forEach((layer) => {
  const depth = layer.dataset.depth;
  const movement = -(layer.offsetHeight * depth);
  landing.to(layer, { y: movement, ease: "none" }, 0);
});

//About

const about = gsap.timeline({
  scrollTrigger: {
    trigger: ".about_text",
    start: "top top",
    end: "bottom top",
    scrub: true,
  },
});

gsap.utils.toArray(".parallax_about").forEach((layer) => {
  const depth = layer.dataset.depth;
  const movement = -(layer.offsetHeight * depth);
  about.to(layer, { y: movement, ease: "none" }, 0);
});

//Projects

const project = gsap.timeline({
  scrollTrigger: {
    trigger: ".recent_trigger",
    start: "top top",
    end: "bottom top",
    scrub: true,
  },
});

gsap.utils.toArray(".proj_parallax").forEach((layer) => {
  const depth = layer.dataset.depth;
  const movement = -(layer.offsetHeight * depth);
  project.to(layer, { y: movement, ease: "none" }, 0);
});
