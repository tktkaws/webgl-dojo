precision mediump float;

varying vec2 vVertexPosition;
uniform float uTick;

void main(){
    float time=uTick*.01;
    float timeSin=sin(uTick*.01)*.5+.5;
    
    vec2 colorTmp=vVertexPosition/2.+.5;
    // vVertexPosition = (0, 0) => (1, 1)
    // 黒: rgb(0, 0, 0)
    
    // vec2 colorTmp=vVertexPosition;
    vec4 color=vec4(colorTmp,0.,1.);
    // color.g=color.g*timeSin;
    color.r=color.r*timeSin;
    
    gl_FragColor=color;
}
