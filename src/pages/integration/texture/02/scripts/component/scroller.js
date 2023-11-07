import gsap from "gsap";
import Scrollbar from "smooth-scrollbar";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// import ScrollTrigger from "gsap/ScrollTrigger.js";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// const ScrollTrigger = require("gsap/ScrollTrigger");
// import pkg from "gsap/ScrollTrigger.js";
// const { ScrollTrigger } = pkg;

const scroller = {
  init,
};

function init() {
  gsap.registerPlugin(ScrollTrigger);

  const pageContainer = document.querySelector("#page-container");
  const scrollBar = Scrollbar.init(pageContainer, { delegateTo: document });

  ScrollTrigger.scrollerProxy(pageContainer, {
    scrollTop(value) {
      if (arguments.length) {
        scrollBar.scrollTop = value; // setter
      }
      return scrollBar.scrollTop; // getter
    },
    // getBoundingClientRect() {
    //   return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    // }
  });

  scrollBar.addListener(ScrollTrigger.update);

  ScrollTrigger.defaults({
    scroller: pageContainer,
  });

  const el = document.querySelector(".gsap");

  // const meshX = os[1].mesh.position.x;
  // const animation = {
  //   rotation: 0,
  //   x: meshX,
  // };
  // gsap.to(animation, {
  //   rotation: Math.PI * 2,
  //   x: meshX + 600,
  //   scrollTrigger: {
  //     trigger: el,
  //     start: "center 80%",
  //     end: "center 20%",
  //     scrub: true,
  //     pin: true,
  //   },
  //   onUpdate() {
  //     os[1].mesh.position.x = animation.x;
  //     os[1].mesh.rotation.z = animation.rotation;
  //   },
  // });
}

export default scroller;
