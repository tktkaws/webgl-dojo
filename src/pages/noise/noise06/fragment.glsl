precision mediump float;

#pragma glslify:noise2=require(glsl-noise/simplex/2d);
#pragma glslify:noise3=require(glsl-noise/simplex/3d);

varying vec2 vUv;
uniform float uTick;

void main(){
    
    // 通常のノイズ
    float n=noise2(vUv);
    
    // ヨコシマのノイズ
    n=noise3(vec3(vUv.x*10.,vUv.y*50.,uTick*.01));
    
    gl_FragColor=vec4(n,0.,.5,1.);
}
