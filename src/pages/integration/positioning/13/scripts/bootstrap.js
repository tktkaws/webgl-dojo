import world from "./glsl/world";
import { viewport } from "./helper";
import scroller from "./component/scroller";

export function init() {
  const canvas = document.querySelector("#canvas");
  viewport.init(canvas);

  scroller.init();
  world.init(canvas, viewport);
  world.render();
}
