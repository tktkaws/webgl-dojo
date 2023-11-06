varying vec2 vUv;
uniform sampler2D uTex;
uniform float uTick;

void main(){
    // float time=uTick*.01;
    float time=uTick*.01;
    float timeSin=sin(uTick*.01)*.5+.5;
    vec4 color=vec4(0.,0.,0.,1.);
    vec4 texColor=texture(uTex,vUv);
    
    // 一行で色の入れ替え
    // color.rgb = texColor.gbr;
    
    // 時間で色の変化
    // color.r=texColor.g*sin(time);
    color.g=texColor.b*timeSin;
    color.b=texColor.r;
    
    // 色を反転
    // color.rgb=1.-texColor.rgb;
    
    gl_FragColor=color;
}
