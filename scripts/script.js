gsap.registerPlugin(
  ScrollTrigger,
  ScrollSmoother,
  ScrambleTextPlugin,
  Flip,
  InertiaPlugin,
  ScrollToPlugin
);

const smootherElement = document.getElementById("scroll-smoother");

const smoother = ScrollSmoother.create({
  lag: 0.1,
  effects: true,
  content: smootherElement,
});

document.querySelectorAll("a[data-href]").forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();

    smoother.scrollTo(item.getAttribute("data-href"), true, "center center", 2); // 2 seconds duration
  });
});

document.querySelectorAll("#scroll-smoother > article > *").forEach((el) => {
  gsap.from(el, {
    opacity: 0,
    y: "+=200",
    duration: 0.4,
    scrollTrigger: {
      trigger: el,
      toggleActions: "play reverse play reverse",
    },
  });
});
