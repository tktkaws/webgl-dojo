precision mediump float;

uniform vec2 uColor;
varying vec2 vVertexPosition;

void main(){
    // vVertexPosition = (-1, 0) => (1, 1)
    vec2 p=vVertexPosition;
    float circle=1.-length(p);
    vec4 color=vec4(circle,0.,0.,1.);
    gl_FragColor=color;
}
