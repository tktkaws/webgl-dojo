precision mediump float;

uniform vec2 uColor;
varying vec2 vVertexPosition;

void main(){
    // vVertexPosition = (-1, 0) => (1, 1)
    vec2 p=vVertexPosition;
    p.x=p.x*2.;
    p.y=p.y*1.;
    float len=length(p)*3.;
    float circle=1.-smoothstep(.98,1.,len);
    vec4 color=vec4(circle,0.,0.,1.);
    gl_FragColor=color;
}
