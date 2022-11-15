// Varaibles
const text = new SplitType(".animate");

// Animation
gsap.to(".char", {
  y: 0,
  stagger: 0.05,
  delay: 0.2,
  duration: 0.5,
});

// let connect_btn = gsap.timeline({
//   scrollTrigger: {
//     trigger: document.body,
//     start: 0,
//     end: () => window.innerHeight * 1.2,
//     scrub: 0.6,
//   },
// });
// connect_btn.to(".animate", {
//   scale: 1.5,
// });

const tl = gsap.timeline({
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
  tl.to(layer, { y: movement, ease: "none" }, 0);
});
