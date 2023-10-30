varying vec2 vUv;
uniform sampler2D tDiffuse;

void main(){
    vec4 texColor=texture(tDiffuse,vUv);
    // gl_FragColor=texColor;
    gl_FragColor=vec4(0.,texColor.g,0.,1.);
    
}
