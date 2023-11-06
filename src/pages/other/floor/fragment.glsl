precision mediump float;

varying vec2 vVertexPosition;

void main(){
    // vVertexPosition = (-1, -1) => (1, 1)
    // vVertexPositionを0から1に正規化
    // colorTmp = (0, 0) => (1, 1)
    vec2 colorTmp=vVertexPosition/2.+.5;
    
    // colorTmp = (0, 0) => (1, 1)
    // floor関数で小数点以下を切り捨てる
    // 5で掛けて5で割ることで、0.2刻みにする
    colorTmp=floor(colorTmp*5.)/5.;
    
    vec4 color=vec4(colorTmp,0.,1.);
    
    gl_FragColor=color;
}
