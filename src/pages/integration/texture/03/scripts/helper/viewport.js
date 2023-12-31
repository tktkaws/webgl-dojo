import world from "../glsl/world";
import adjustWorldPosition from "../glsl/world";

const viewport = {
  init,
};

const $ = {};
let initialized = false;

function init(canvas, cameraZ = 2000, near = 1500, far = 4000) {
  $.canvas = canvas;
  const rect = canvas.getBoundingClientRect();

  viewport.width = rect.width;
  viewport.height = rect.height;
  viewport.near = near;
  viewport.far = far;
  viewport.cameraZ = cameraZ;
  viewport.aspect = viewport.width / viewport.height;
  viewport.rad = 2 * Math.atan(viewport.height / 2 / cameraZ);
  viewport.fov = viewport.rad * (180 / Math.PI);
  viewport.devicePixelRatio = window.devicePixelRatio;

  if (!initialized) {
    _bindEvents();
    initialized = true;
  }

  return viewport;
}

function _update() {
  const { near, far, cameraZ } = viewport;
  viewport.init($.canvas, cameraZ, near, far);
}

function _bindEvents() {
  let timerId = null;

  window.addEventListener("resize", () => {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      _onResize();
    }, 500);
  });
}

function _onResize() {
  _update();
  //   TODO:より汎用的に
  world.adjustWorldPosition(viewport);
}
export { viewport };
