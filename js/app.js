// Varaibles
const text = new SplitType(".animate");

// Animation
gsap.to(".char", {
  y: 0,
  stagger: 0.05,
  delay: 0.2,
  duration: 0.5,
});

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// create the smooth scroller FIRST!
let smoother = ScrollSmoother.create({
  content: "#content",
  smooth: 3, // seconds it takes to "catch up" to native scroll position
  effects: true, // look for data-speed and data-lag attributes on elements and animate accordingly
});

smoother.effects("img", { speed: "auto" });
