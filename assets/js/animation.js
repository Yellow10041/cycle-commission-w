gsap.registerPlugin(ScrollSmoother);
gsap.registerPlugin(ScrollTrigger);

//Scroll Smoother
ScrollSmoother.create({
  wrapper: "#smooth-wrapper",
  content: "#smooth-content",
  smooth: 1,
  resizePolling: 100,
  touchMultiplier: 2,
  keyboardMultiplier: 1,
  firefoxMultiplier: 40,
});

//Appearance of elements
const getBlocks = (className) => {
  return document.querySelectorAll(`${className}`);
};

const prospectsItem = [
  ...getBlocks(".home_prospects_item_prospects_item"),
  ...getBlocks(".home_prospects_item_title"),
  // ...getBlocks(".page_content_inner_content_item"),
];

const AnimateBlocks = (e) => {
  gsap.fromTo(
    e,
    {
      opacity: 0,
      y: 20,
      scale: 0.95,
    },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 1,
      easy: "power2.inOut",
      scrollTrigger: {
        trigger: e,
        start: "top bottom",
        end: "top center",
        scrub: 1,
        // markers: true,
      },
    }
  );
};

prospectsItem.forEach((e) => {
  AnimateBlocks(e);
});
