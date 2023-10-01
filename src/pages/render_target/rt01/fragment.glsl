precision mediump float;

varying vec2 vUv;
varying float vDelay;

uniform sampler2D uTex;

void main(){
    vec4 tex=texture(uTex,vUv);
    gl_FragColor=vec4(tex.rgb,1.-vDelay);
}
