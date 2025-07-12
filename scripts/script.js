gsap.registerPlugin(
  ScrollTrigger,
  ScrollSmoother,
  ScrambleTextPlugin,
  Flip,
  InertiaPlugin
);

const smootherElement = document.getElementById("scroll-smoother");

const smoother = ScrollSmoother.create({
  smooth: 2,
  effects: true,
  content: smootherElement,
});

document.querySelectorAll("a[data-href]").forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();

    smoother.scrollTo(item.getAttribute("data-href"), true, "center center", 2); // 2 seconds duration
  });
});
