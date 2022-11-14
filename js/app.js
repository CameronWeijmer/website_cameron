// Varaibles
const text = new SplitType(".animate");

// Animation
gsap.to(".char", {
  y: 0,
  stagger: 0.05,
  delay: 0.2,
  duration: 0.5,
});

let connect_btn = gsap.timeline({
  scrollTrigger: {
    trigger: document.body,
    start: 0,
    end: () => window.innerHeight * 1.2,
    scrub: 0.6,
  },
});
connect_btn.to(
  ".animate",
  {
    top: "25vh",
    xPercent: 10,
    scale: 2,
  },
  {
    top: 0,
    yPercent: 0,
    scale: 1,
    duration: 0.8,
  }
);
