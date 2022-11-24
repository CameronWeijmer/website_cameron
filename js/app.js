// Varaibles
const text = new SplitType(".animate");
// const form = document.getElementById("form");

window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName("form")) {
    form.reset();
  }
};
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

gsap.from(".hidden_animation", {
  scrollTrigger: {
    trigger: ".hidden_animation",
    start: "top center",
    end: "bottom bottom",
  },
  opacity: 0,
  duration: 1.75,
});

//Projects

gsap.from(".proj_parallax", {
  scrollTrigger: {
    trigger: ".proj_parallax",
    start: "top center",
    end: "bottom bottom",
  },
  opacity: 0,
  duration: 1.25,
});

//Contact

gsap.from(".contact_animation", {
  scrollTrigger: {
    trigger: ".contact_animation",
    start: "top center",
    end: "bottom bottom",
  },
  opacity: 0,
  duration: 1.75,
});
