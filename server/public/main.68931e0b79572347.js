"use strict";(self.webpackChunkmain=self.webpackChunkmain||[]).push([[179],{8809:(Et,Me,a)=>{a.d(Me,{T6:()=>F,VD:()=>V,WE:()=>R,Yt:()=>E,lC:()=>g,py:()=>L,rW:()=>o,s:()=>M,ve:()=>s,vq:()=>T});var t=a(2567);function o(e,I,w){return{r:255*(0,t.sh)(e,255),g:255*(0,t.sh)(I,255),b:255*(0,t.sh)(w,255)}}function g(e,I,w){e=(0,t.sh)(e,255),I=(0,t.sh)(I,255),w=(0,t.sh)(w,255);var de=Math.max(e,I,w),ae=Math.min(e,I,w),Z=0,U=0,N=(de+ae)/2;if(de===ae)U=0,Z=0;else{var q=de-ae;switch(U=N>.5?q/(2-de-ae):q/(de+ae),de){case e:Z=(I-w)/q+(I<w?6:0);break;case I:Z=(w-e)/q+2;break;case w:Z=(e-I)/q+4}Z/=6}return{h:Z,s:U,l:N}}function l(e,I,w){return w<0&&(w+=1),w>1&&(w-=1),w<1/6?e+6*w*(I-e):w<.5?I:w<2/3?e+(I-e)*(2/3-w)*6:e}function s(e,I,w){var de,ae,Z;if(e=(0,t.sh)(e,360),I=(0,t.sh)(I,100),w=(0,t.sh)(w,100),0===I)ae=w,Z=w,de=w;else{var U=w<.5?w*(1+I):w+I-w*I,N=2*w-U;de=l(N,U,e+1/3),ae=l(N,U,e),Z=l(N,U,e-1/3)}return{r:255*de,g:255*ae,b:255*Z}}function L(e,I,w){e=(0,t.sh)(e,255),I=(0,t.sh)(I,255),w=(0,t.sh)(w,255);var de=Math.max(e,I,w),ae=Math.min(e,I,w),Z=0,U=de,N=de-ae,q=0===de?0:N/de;if(de===ae)Z=0;else{switch(de){case e:Z=(I-w)/N+(I<w?6:0);break;case I:Z=(w-e)/N+2;break;case w:Z=(e-I)/N+4}Z/=6}return{h:Z,s:q,v:U}}function R(e,I,w){e=6*(0,t.sh)(e,360),I=(0,t.sh)(I,100),w=(0,t.sh)(w,100);var de=Math.floor(e),ae=e-de,Z=w*(1-I),U=w*(1-ae*I),N=w*(1-(1-ae)*I),q=de%6;return{r:255*[w,U,Z,Z,N,w][q],g:255*[N,w,w,U,Z,Z][q],b:255*[Z,Z,N,w,w,U][q]}}function T(e,I,w,de){var ae=[(0,t.FZ)(Math.round(e).toString(16)),(0,t.FZ)(Math.round(I).toString(16)),(0,t.FZ)(Math.round(w).toString(16))];return de&&ae[0].startsWith(ae[0].charAt(1))&&ae[1].startsWith(ae[1].charAt(1))&&ae[2].startsWith(ae[2].charAt(1))?ae[0].charAt(0)+ae[1].charAt(0)+ae[2].charAt(0):ae.join("")}function M(e,I,w,de,ae){var Z=[(0,t.FZ)(Math.round(e).toString(16)),(0,t.FZ)(Math.round(I).toString(16)),(0,t.FZ)(Math.round(w).toString(16)),(0,t.FZ)(O(de))];return ae&&Z[0].startsWith(Z[0].charAt(1))&&Z[1].startsWith(Z[1].charAt(1))&&Z[2].startsWith(Z[2].charAt(1))&&Z[3].startsWith(Z[3].charAt(1))?Z[0].charAt(0)+Z[1].charAt(0)+Z[2].charAt(0)+Z[3].charAt(0):Z.join("")}function O(e){return Math.round(255*parseFloat(e)).toString(16)}function F(e){return V(e)/255}function V(e){return parseInt(e,16)}function E(e){return{r:e>>16,g:(65280&e)>>8,b:255&e}}},3487:(Et,Me,a)=>{a.d(Me,{R:()=>t});var t={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"}},7952:(Et,Me,a)=>{a.d(Me,{uA:()=>l});var t=a(8809),o=a(3487),g=a(2567);function l(V){var E={r:0,g:0,b:0},e=1,I=null,w=null,de=null,ae=!1,Z=!1;return"string"==typeof V&&(V=function O(V){if(0===(V=V.trim().toLowerCase()).length)return!1;var E=!1;if(o.R[V])V=o.R[V],E=!0;else if("transparent"===V)return{r:0,g:0,b:0,a:0,format:"name"};var e=b.rgb.exec(V);return e?{r:e[1],g:e[2],b:e[3]}:(e=b.rgba.exec(V))?{r:e[1],g:e[2],b:e[3],a:e[4]}:(e=b.hsl.exec(V))?{h:e[1],s:e[2],l:e[3]}:(e=b.hsla.exec(V))?{h:e[1],s:e[2],l:e[3],a:e[4]}:(e=b.hsv.exec(V))?{h:e[1],s:e[2],v:e[3]}:(e=b.hsva.exec(V))?{h:e[1],s:e[2],v:e[3],a:e[4]}:(e=b.hex8.exec(V))?{r:(0,t.VD)(e[1]),g:(0,t.VD)(e[2]),b:(0,t.VD)(e[3]),a:(0,t.T6)(e[4]),format:E?"name":"hex8"}:(e=b.hex6.exec(V))?{r:(0,t.VD)(e[1]),g:(0,t.VD)(e[2]),b:(0,t.VD)(e[3]),format:E?"name":"hex"}:(e=b.hex4.exec(V))?{r:(0,t.VD)(e[1]+e[1]),g:(0,t.VD)(e[2]+e[2]),b:(0,t.VD)(e[3]+e[3]),a:(0,t.T6)(e[4]+e[4]),format:E?"name":"hex8"}:!!(e=b.hex3.exec(V))&&{r:(0,t.VD)(e[1]+e[1]),g:(0,t.VD)(e[2]+e[2]),b:(0,t.VD)(e[3]+e[3]),format:E?"name":"hex"}}(V)),"object"==typeof V&&(F(V.r)&&F(V.g)&&F(V.b)?(E=(0,t.rW)(V.r,V.g,V.b),ae=!0,Z="%"===String(V.r).substr(-1)?"prgb":"rgb"):F(V.h)&&F(V.s)&&F(V.v)?(I=(0,g.JX)(V.s),w=(0,g.JX)(V.v),E=(0,t.WE)(V.h,I,w),ae=!0,Z="hsv"):F(V.h)&&F(V.s)&&F(V.l)&&(I=(0,g.JX)(V.s),de=(0,g.JX)(V.l),E=(0,t.ve)(V.h,I,de),ae=!0,Z="hsl"),Object.prototype.hasOwnProperty.call(V,"a")&&(e=V.a)),e=(0,g.Yq)(e),{ok:ae,format:V.format||Z,r:Math.min(255,Math.max(E.r,0)),g:Math.min(255,Math.max(E.g,0)),b:Math.min(255,Math.max(E.b,0)),a:e}}var R="(?:".concat("[-\\+]?\\d*\\.\\d+%?",")|(?:").concat("[-\\+]?\\d+%?",")"),T="[\\s|\\(]+(".concat(R,")[,|\\s]+(").concat(R,")[,|\\s]+(").concat(R,")\\s*\\)?"),M="[\\s|\\(]+(".concat(R,")[,|\\s]+(").concat(R,")[,|\\s]+(").concat(R,")[,|\\s]+(").concat(R,")\\s*\\)?"),b={CSS_UNIT:new RegExp(R),rgb:new RegExp("rgb"+T),rgba:new RegExp("rgba"+M),hsl:new RegExp("hsl"+T),hsla:new RegExp("hsla"+M),hsv:new RegExp("hsv"+T),hsva:new RegExp("hsva"+M),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function F(V){return Boolean(b.CSS_UNIT.exec(String(V)))}},5192:(Et,Me,a)=>{a.d(Me,{C:()=>s});var t=a(8809),o=a(3487),g=a(7952),l=a(2567),s=function(){function R(T,M){var b;if(void 0===T&&(T=""),void 0===M&&(M={}),T instanceof R)return T;"number"==typeof T&&(T=(0,t.Yt)(T)),this.originalInput=T;var O=(0,g.uA)(T);this.originalInput=T,this.r=O.r,this.g=O.g,this.b=O.b,this.a=O.a,this.roundA=Math.round(100*this.a)/100,this.format=null!==(b=M.format)&&void 0!==b?b:O.format,this.gradientType=M.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=O.ok}return R.prototype.isDark=function(){return this.getBrightness()<128},R.prototype.isLight=function(){return!this.isDark()},R.prototype.getBrightness=function(){var T=this.toRgb();return(299*T.r+587*T.g+114*T.b)/1e3},R.prototype.getLuminance=function(){var T=this.toRgb(),F=T.r/255,V=T.g/255,E=T.b/255;return.2126*(F<=.03928?F/12.92:Math.pow((F+.055)/1.055,2.4))+.7152*(V<=.03928?V/12.92:Math.pow((V+.055)/1.055,2.4))+.0722*(E<=.03928?E/12.92:Math.pow((E+.055)/1.055,2.4))},R.prototype.getAlpha=function(){return this.a},R.prototype.setAlpha=function(T){return this.a=(0,l.Yq)(T),this.roundA=Math.round(100*this.a)/100,this},R.prototype.isMonochrome=function(){return 0===this.toHsl().s},R.prototype.toHsv=function(){var T=(0,t.py)(this.r,this.g,this.b);return{h:360*T.h,s:T.s,v:T.v,a:this.a}},R.prototype.toHsvString=function(){var T=(0,t.py)(this.r,this.g,this.b),M=Math.round(360*T.h),b=Math.round(100*T.s),O=Math.round(100*T.v);return 1===this.a?"hsv(".concat(M,", ").concat(b,"%, ").concat(O,"%)"):"hsva(".concat(M,", ").concat(b,"%, ").concat(O,"%, ").concat(this.roundA,")")},R.prototype.toHsl=function(){var T=(0,t.lC)(this.r,this.g,this.b);return{h:360*T.h,s:T.s,l:T.l,a:this.a}},R.prototype.toHslString=function(){var T=(0,t.lC)(this.r,this.g,this.b),M=Math.round(360*T.h),b=Math.round(100*T.s),O=Math.round(100*T.l);return 1===this.a?"hsl(".concat(M,", ").concat(b,"%, ").concat(O,"%)"):"hsla(".concat(M,", ").concat(b,"%, ").concat(O,"%, ").concat(this.roundA,")")},R.prototype.toHex=function(T){return void 0===T&&(T=!1),(0,t.vq)(this.r,this.g,this.b,T)},R.prototype.toHexString=function(T){return void 0===T&&(T=!1),"#"+this.toHex(T)},R.prototype.toHex8=function(T){return void 0===T&&(T=!1),(0,t.s)(this.r,this.g,this.b,this.a,T)},R.prototype.toHex8String=function(T){return void 0===T&&(T=!1),"#"+this.toHex8(T)},R.prototype.toRgb=function(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}},R.prototype.toRgbString=function(){var T=Math.round(this.r),M=Math.round(this.g),b=Math.round(this.b);return 1===this.a?"rgb(".concat(T,", ").concat(M,", ").concat(b,")"):"rgba(".concat(T,", ").concat(M,", ").concat(b,", ").concat(this.roundA,")")},R.prototype.toPercentageRgb=function(){var T=function(M){return"".concat(Math.round(100*(0,l.sh)(M,255)),"%")};return{r:T(this.r),g:T(this.g),b:T(this.b),a:this.a}},R.prototype.toPercentageRgbString=function(){var T=function(M){return Math.round(100*(0,l.sh)(M,255))};return 1===this.a?"rgb(".concat(T(this.r),"%, ").concat(T(this.g),"%, ").concat(T(this.b),"%)"):"rgba(".concat(T(this.r),"%, ").concat(T(this.g),"%, ").concat(T(this.b),"%, ").concat(this.roundA,")")},R.prototype.toName=function(){if(0===this.a)return"transparent";if(this.a<1)return!1;for(var T="#"+(0,t.vq)(this.r,this.g,this.b,!1),M=0,b=Object.entries(o.R);M<b.length;M++){var O=b[M];if(T===O[1])return O[0]}return!1},R.prototype.toString=function(T){var M=Boolean(T);T=T??this.format;var b=!1;return!M&&this.a<1&&this.a>=0&&(T.startsWith("hex")||"name"===T)?"name"===T&&0===this.a?this.toName():this.toRgbString():("rgb"===T&&(b=this.toRgbString()),"prgb"===T&&(b=this.toPercentageRgbString()),("hex"===T||"hex6"===T)&&(b=this.toHexString()),"hex3"===T&&(b=this.toHexString(!0)),"hex4"===T&&(b=this.toHex8String(!0)),"hex8"===T&&(b=this.toHex8String()),"name"===T&&(b=this.toName()),"hsl"===T&&(b=this.toHslString()),"hsv"===T&&(b=this.toHsvString()),b||this.toHexString())},R.prototype.toNumber=function(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)},R.prototype.clone=function(){return new R(this.toString())},R.prototype.lighten=function(T){void 0===T&&(T=10);var M=this.toHsl();return M.l+=T/100,M.l=(0,l.V2)(M.l),new R(M)},R.prototype.brighten=function(T){void 0===T&&(T=10);var M=this.toRgb();return M.r=Math.max(0,Math.min(255,M.r-Math.round(-T/100*255))),M.g=Math.max(0,Math.min(255,M.g-Math.round(-T/100*255))),M.b=Math.max(0,Math.min(255,M.b-Math.round(-T/100*255))),new R(M)},R.prototype.darken=function(T){void 0===T&&(T=10);var M=this.toHsl();return M.l-=T/100,M.l=(0,l.V2)(M.l),new R(M)},R.prototype.tint=function(T){return void 0===T&&(T=10),this.mix("white",T)},R.prototype.shade=function(T){return void 0===T&&(T=10),this.mix("black",T)},R.prototype.desaturate=function(T){void 0===T&&(T=10);var M=this.toHsl();return M.s-=T/100,M.s=(0,l.V2)(M.s),new R(M)},R.prototype.saturate=function(T){void 0===T&&(T=10);var M=this.toHsl();return M.s+=T/100,M.s=(0,l.V2)(M.s),new R(M)},R.prototype.greyscale=function(){return this.desaturate(100)},R.prototype.spin=function(T){var M=this.toHsl(),b=(M.h+T)%360;return M.h=b<0?360+b:b,new R(M)},R.prototype.mix=function(T,M){void 0===M&&(M=50);var b=this.toRgb(),O=new R(T).toRgb(),F=M/100;return new R({r:(O.r-b.r)*F+b.r,g:(O.g-b.g)*F+b.g,b:(O.b-b.b)*F+b.b,a:(O.a-b.a)*F+b.a})},R.prototype.analogous=function(T,M){void 0===T&&(T=6),void 0===M&&(M=30);var b=this.toHsl(),O=360/M,F=[this];for(b.h=(b.h-(O*T>>1)+720)%360;--T;)b.h=(b.h+O)%360,F.push(new R(b));return F},R.prototype.complement=function(){var T=this.toHsl();return T.h=(T.h+180)%360,new R(T)},R.prototype.monochromatic=function(T){void 0===T&&(T=6);for(var M=this.toHsv(),b=M.h,O=M.s,F=M.v,V=[],E=1/T;T--;)V.push(new R({h:b,s:O,v:F})),F=(F+E)%1;return V},R.prototype.splitcomplement=function(){var T=this.toHsl(),M=T.h;return[this,new R({h:(M+72)%360,s:T.s,l:T.l}),new R({h:(M+216)%360,s:T.s,l:T.l})]},R.prototype.onBackground=function(T){var M=this.toRgb(),b=new R(T).toRgb();return new R({r:b.r+(M.r-b.r)*M.a,g:b.g+(M.g-b.g)*M.a,b:b.b+(M.b-b.b)*M.a})},R.prototype.triad=function(){return this.polyad(3)},R.prototype.tetrad=function(){return this.polyad(4)},R.prototype.polyad=function(T){for(var M=this.toHsl(),b=M.h,O=[this],F=360/T,V=1;V<T;V++)O.push(new R({h:(b+V*F)%360,s:M.s,l:M.l}));return O},R.prototype.equals=function(T){return this.toRgbString()===new R(T).toRgbString()},R}()},2567:(Et,Me,a)=>{function t(T,M){(function g(T){return"string"==typeof T&&-1!==T.indexOf(".")&&1===parseFloat(T)})(T)&&(T="100%");var b=function l(T){return"string"==typeof T&&-1!==T.indexOf("%")}(T);return T=360===M?T:Math.min(M,Math.max(0,parseFloat(T))),b&&(T=parseInt(String(T*M),10)/100),Math.abs(T-M)<1e-6?1:T=360===M?(T<0?T%M+M:T%M)/parseFloat(String(M)):T%M/parseFloat(String(M))}function o(T){return Math.min(1,Math.max(0,T))}function s(T){return T=parseFloat(T),(isNaN(T)||T<0||T>1)&&(T=1),T}function L(T){return T<=1?"".concat(100*Number(T),"%"):T}function R(T){return 1===T.length?"0"+T:String(T)}a.d(Me,{FZ:()=>R,JX:()=>L,V2:()=>o,Yq:()=>s,sh:()=>t})},4049:(Et,Me,a)=>{a.d(Me,{G:()=>ne});var t=a(4650),o=a(6895),g=a(9116),l=a(1102),s=a(6672),L=a(6581),R=a(3240),T=a(4004),M=a(9300),b=a(7630),O=a(1971),F=a(9194),V=a(6550),E=a(2635),e=a(160);function I(Ce,H){if(1&Ce&&(t._UZ(0,"i",9),t.ALo(1,"entityColor"),t._uU(2)),2&Ce){const X=t.oxw().ngIf;t.Q6J("nzTwotoneColor",t.lcZ(1,2,"ClinicalTrial")),t.xp6(2),t.hij(" ",X.nctId," ")}}function w(Ce,H){if(1&Ce&&(t.TgZ(0,"cvc-link-tag",10),t._uU(1," View on clinicaltrials.gov "),t.qZA()),2&Ce){const X=t.oxw().ngIf;t.Q6J("href",X.url)}}function de(Ce,H){if(1&Ce&&(t.ynx(0),t.TgZ(1,"nz-card",2),t.YNc(2,I,3,4,"ng-template",null,3,t.W1O),t.YNc(4,w,2,1,"ng-template",null,4,t.W1O),t.TgZ(6,"nz-descriptions",5)(7,"nz-descriptions-item",6),t._uU(8),t.qZA(),t.TgZ(9,"nz-descriptions-item",7),t._uU(10),t.qZA(),t.TgZ(11,"nz-descriptions-item",8),t._uU(12),t.qZA()()(),t.BQk()),2&Ce){const X=H.ngIf,ve=t.MAs(3),Ee=t.MAs(5);t.xp6(1),t.Q6J("nzTitle",ve)("nzExtra",Ee),t.xp6(5),t.Q6J("nzColumn",2),t.xp6(2),t.hij(" ",X.name," "),t.xp6(2),t.hij(" ",X.sourceCount," "),t.xp6(2),t.hij(" ",X.evidenceCount," ")}}class ae{constructor(H){this.gql=H}ngOnInit(){if(null==this.clinicalTrialId)throw new Error("cvc-clinical-trial-popover requires valid clinicalTrialId input.");this.clinicalTrial$=this.gql.watch({clinicalTrialId:this.clinicalTrialId}).valueChanges.pipe((0,T.U)(({data:H})=>H?.clinicalTrials.edges[0]?.node),(0,M.h)(R.ep))}}function Z(Ce,H){}function U(Ce,H){if(1&Ce&&(t.ynx(0),t.TgZ(1,"a",4),t.YNc(2,Z,0,0,"ng-template",5),t.qZA(),t.BQk()),2&Ce){const X=t.oxw(),ve=t.MAs(2);t.xp6(1),t.Q6J("routerLink",X.clinicalTrial.link),t.xp6(1),t.Q6J("ngTemplateOutlet",ve)}}function N(Ce,H){}function q(Ce,H){if(1&Ce&&t._UZ(0,"cvc-clinical-trial-popover",8),2&Ce){const X=t.oxw(2);t.Q6J("clinicalTrialId",X.clinicalTrial.id)}}function Y(Ce,H){if(1&Ce&&(t.TgZ(0,"nz-tag",6),t.YNc(1,N,0,0,"ng-template",5),t.qZA(),t.YNc(2,q,1,1,"ng-template",null,7,t.W1O)),2&Ce){const X=t.MAs(3),ve=t.oxw(),Ee=t.MAs(6);t.Q6J("nzPopoverMouseEnterDelay",.5)("nzPopoverContent",X)("nzPopoverTrigger",ve.enablePopover?"hover":null),t.xp6(1),t.Q6J("ngTemplateOutlet",Ee)}}function k(Ce,H){}function me(Ce,H){if(1&Ce&&t.YNc(0,k,0,0,"ng-template",5),2&Ce){t.oxw();const X=t.MAs(2);t.Q6J("ngTemplateOutlet",X)}}function fe(Ce,H){if(1&Ce&&(t._UZ(0,"i",9),t.ALo(1,"entityColor"),t._uU(2)),2&Ce){const X=t.oxw();t.Q6J("nzTwotoneColor",t.lcZ(1,2,"ClinicalTrial")),t.xp6(2),t.hij(" ",X.clinicalTrial.nctId,"\n")}}ae.\u0275fac=function(H){return new(H||ae)(t.Y36(b.UIR))},ae.\u0275cmp=t.Xpm({type:ae,selectors:[["cvc-clinical-trial-popover"]],inputs:{clinicalTrialId:"clinicalTrialId"},decls:3,vars:3,consts:[["id","popover-content"],[4,"ngIf"],["nzBordered","false","id","card-content",3,"nzTitle","nzExtra"],["cardTitle",""],["linkout",""],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","Name","nzSpan","2"],["nzTitle","Sources","nzSpan","2"],["nzTitle","Evidence","nzSpan","2"],["nz-icon","","nzTheme","twotone","nzType","civic-clinicaltrial",3,"nzTwotoneColor"],[3,"href"]],template:function(H,X){1&H&&(t.TgZ(0,"div",0),t.YNc(1,de,13,6,"ng-container",1),t.ALo(2,"ngrxPush"),t.qZA()),2&H&&(t.xp6(1),t.Q6J("ngIf",t.lcZ(2,1,X.clinicalTrial$)))},dependencies:[o.O5,O.bd,l.Ls,F.R7,F.uj,V.l,E.fM,e.a],styles:["[_nghost-%COMP%]{display:block;margin:-8px -12px}[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}[_nghost-%COMP%]     .ant-descriptions-view{border:none}[_nghost-%COMP%]     #entity-child-counts{border-top:1px solid #f0f0f0;padding:8px}[_nghost-%COMP%]     #entity-child-counts nz-space{width:100%}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child nz-tag{margin-right:0}.popover-text[_ngcontent-%COMP%]{width:100%;padding:8px;border-bottom:1px solid #f0f0f0}#popover-content[_ngcontent-%COMP%]{min-width:350px;max-width:500px;min-height:125px}"]});class ne{set clinicalTrial(H){if(!H)throw new Error("clinical-trial-tag clinicalTrial Input requires LinkableClinicalTrial.");this._clinicalTrial=H}get clinicalTrial(){return this._clinicalTrial}constructor(){this.linked=!0,this.enablePopover=!0}}ne.\u0275fac=function(H){return new(H||ne)},ne.\u0275cmp=t.Xpm({type:ne,selectors:[["cvc-clinical-trial-tag"]],inputs:{clinicalTrial:"clinicalTrial",linked:"linked",enablePopover:"enablePopover"},decls:7,vars:2,consts:[[4,"ngIf","ngIfElse"],["tag",""],["unlinked",""],["tagContent",""],[3,"routerLink"],[3,"ngTemplateOutlet"],["nz-popover","","nzPopoverPlacement","right",3,"nzPopoverMouseEnterDelay","nzPopoverContent","nzPopoverTrigger"],["clinicalTrialPopover",""],[3,"clinicalTrialId"],["nz-icon","","nzTheme","twotone","nzType","civic-clinicaltrial",3,"nzTwotoneColor"]],template:function(H,X){if(1&H&&(t.YNc(0,U,3,2,"ng-container",0),t.YNc(1,Y,4,4,"ng-template",null,1,t.W1O),t.YNc(3,me,1,1,"ng-template",null,2,t.W1O),t.YNc(5,fe,3,4,"ng-template",null,3,t.W1O)),2&H){const ve=t.MAs(4);t.Q6J("ngIf",X.linked)("ngIfElse",ve)}},dependencies:[o.O5,o.tP,g.rH,l.Ls,s.j,L.lU,ae,e.a],styles:["[_nghost-%COMP%]{display:block}"]})},5453:(Et,Me,a)=>{a.d(Me,{N:()=>V});var t=a(6895),o=a(9116),g=a(6672),l=a(6581),s=a(4989),L=a(9444),R=a(2635),T=a(1971),M=a(9194),b=a(1102),O=a(4650);class F{}F.\u0275fac=function(e){return new(e||F)},F.\u0275mod=O.oAB({type:F}),F.\u0275inj=O.cJS({imports:[t.ez,R._N,R.pP,T.vh,b.PV,M.q6,s.X,L.s]});class V{}V.\u0275fac=function(e){return new(e||V)},V.\u0275mod=O.oAB({type:V}),V.\u0275inj=O.cJS({imports:[t.ez,o.Bz,b.PV,g.X,l.$6,F,L.s]})},2925:(Et,Me,a)=>{a.d(Me,{I:()=>U});var t=a(3240),o=a(4004),g=a(9300),l=a(4650),s=a(7630),L=a(6895),R=a(1971),T=a(9194),M=a(1102),b=a(8823),O=a(6550),F=a(2635),V=a(4557);function E(N,q){if(1&N&&(l._UZ(0,"i",12),l._uU(1),l.ALo(2,"truncate")),2&N){const Y=l.oxw().ngIf;l.xp6(1),l.hij(" ",l.xi3(2,1,Y.name,50)," ")}}function e(N,q){if(1&N&&(l.TgZ(0,"cvc-link-tag",14),l._uU(1),l.qZA()),2&N){const Y=l.oxw(2).ngIf;l.Q6J("href",Y.diseaseUrl),l.xp6(1),l.hij(" DOID: ",Y.doid," ")}}function I(N,q){if(1&N&&l.YNc(0,e,2,2,"cvc-link-tag",13),2&N){const Y=l.oxw().ngIf,k=l.MAs(7);l.Q6J("ngIf",Y.doid)("ngIfElse",k)}}function w(N,q){1&N&&(l.TgZ(0,"span",15),l._uU(1,"No DOID"),l.qZA())}function de(N,q){if(1&N&&(l.TgZ(0,"nz-descriptions-item",16),l._uU(1),l.qZA()),2&N){const Y=l.oxw().ngIf;l.xp6(1),l.hij(" ",Y.name," ")}}function ae(N,q){if(1&N&&(l.TgZ(0,"nz-descriptions-item",17),l._uU(1),l.qZA()),2&N){const Y=l.oxw().ngIf;l.xp6(1),l.hij(" ",Y.diseaseAliases.join(", ")," ")}}function Z(N,q){if(1&N&&(l.ynx(0),l.TgZ(1,"nz-card",2),l.YNc(2,E,3,4,"ng-template",null,3,l.W1O),l.YNc(4,I,1,2,"ng-template",null,4,l.W1O),l.YNc(6,w,2,0,"ng-template",null,5,l.W1O),l.TgZ(8,"nz-descriptions",6),l.YNc(9,de,2,1,"nz-descriptions-item",7),l.YNc(10,ae,2,1,"nz-descriptions-item",8),l.TgZ(11,"nz-descriptions-item",9),l._uU(12),l.qZA(),l.TgZ(13,"nz-descriptions-item",10),l._uU(14),l.qZA(),l.TgZ(15,"nz-descriptions-item",11),l._uU(16),l.qZA()()(),l.BQk()),2&N){const Y=q.ngIf,k=l.MAs(3),me=l.MAs(5);l.xp6(1),l.Q6J("nzTitle",k)("nzExtra",me),l.xp6(7),l.Q6J("nzColumn",1),l.xp6(1),l.Q6J("ngIf",Y.name.length>50),l.xp6(1),l.Q6J("ngIf",Y.diseaseAliases.length>0),l.xp6(2),l.hij(" ",Y.assertionCount," "),l.xp6(2),l.hij(" ",Y.evidenceItemCount," "),l.xp6(2),l.hij(" ",Y.molecularProfileCount," ")}}class U{constructor(q){this.gql=q}ngOnInit(){if(null==this.diseaseId)throw new Error("cvc-disease-popover requires valid diseaseId input.");this.disease$=this.gql.watch({diseaseId:this.diseaseId}).valueChanges.pipe((0,o.U)(({data:q})=>q?.diseasePopover),(0,g.h)(t.ep))}}U.\u0275fac=function(q){return new(q||U)(l.Y36(s.k7O))},U.\u0275cmp=l.Xpm({type:U,selectors:[["cvc-disease-popover"]],inputs:{diseaseId:"diseaseId"},decls:3,vars:3,consts:[["id","popover-content"],[4,"ngIf"],["nzBordered","false","id","card-content",3,"nzTitle","nzExtra"],["cardTitle",""],["linkout",""],["noDoid",""],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","Name","nzSpan","2",4,"ngIf"],["nzTitle","Aliases","nzSpan","2",4,"ngIf"],["nzTitle","Assertions","nzSpan","1"],["nzTitle","Evidence","nzSpan","1"],["nzTitle","Molecular Profiles","nzSpan","1"],["nz-icon","","nzType","civic-disease","nzTheme","twotone","nzTwotoneColor","#E62F76"],["tooltip","View on disease-ontology.org",3,"href",4,"ngIf","ngIfElse"],["tooltip","View on disease-ontology.org",3,"href"],["nz-typography","","nzType","secondary"],["nzTitle","Name","nzSpan","2"],["nzTitle","Aliases","nzSpan","2"]],template:function(q,Y){1&q&&(l.TgZ(0,"div",0),l.YNc(1,Z,17,8,"ng-container",1),l.ALo(2,"ngrxPush"),l.qZA()),2&q&&(l.xp6(1),l.Q6J("ngIf",l.lcZ(2,1,Y.disease$)))},dependencies:[L.O5,R.bd,T.R7,T.uj,M.Ls,b.ZU,O.l,F.fM,V.W],styles:["[_nghost-%COMP%]{display:block;margin:-8px -12px}[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}[_nghost-%COMP%]     .ant-descriptions-view{border:none}[_nghost-%COMP%]     #entity-child-counts{border-top:1px solid #f0f0f0;padding:8px}[_nghost-%COMP%]     #entity-child-counts nz-space{width:100%}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child nz-tag{margin-right:0}.popover-text[_ngcontent-%COMP%]{width:100%;padding:8px;border-bottom:1px solid #f0f0f0}#popover-content[_ngcontent-%COMP%]{min-width:350px;max-width:500px;min-height:125px}"]})},3638:(Et,Me,a)=>{a.d(Me,{t:()=>b});var t=a(6895),o=a(1971),g=a(9194),l=a(1102),s=a(4989),L=a(2635),R=a(8823),T=a(9444),M=a(4650);class b{}b.\u0275fac=function(F){return new(F||b)},b.\u0275mod=M.oAB({type:b}),b.\u0275inj=M.cJS({imports:[t.ez,L._N,L.pP,o.vh,g.q6,l.PV,R.ZJ,T.s,s.X]})},7491:(Et,Me,a)=>{a.d(Me,{n:()=>Z});var t=a(6654),o=a(4650),g=a(6895),l=a(9116),s=a(6672),L=a(6581),R=a(1102),T=a(2925),M=a(4557);function b(U,N){}function O(U,N){if(1&U&&(o.ynx(0),o.TgZ(1,"a",4),o.YNc(2,b,0,0,"ng-template",5),o.qZA(),o.BQk()),2&U){const q=o.oxw(),Y=o.MAs(2);o.xp6(1),o.Q6J("routerLink",q.disease.link),o.xp6(1),o.Q6J("ngTemplateOutlet",Y)}}function F(U,N){}function V(U,N){if(1&U&&o._UZ(0,"cvc-disease-popover",8),2&U){const q=o.oxw(2);o.Q6J("diseaseId",q.disease.id)}}function E(U,N){if(1&U){const q=o.EpF();o.TgZ(0,"nz-tag",6),o.NdJ("nzOnClose",function(k){o.CHM(q);const me=o.oxw();return o.KtG(me.itemClosed(k))}),o.YNc(1,F,0,0,"ng-template",5),o.qZA(),o.YNc(2,V,1,1,"ng-template",null,7,o.W1O)}if(2&U){const q=o.MAs(3),Y=o.oxw(),k=o.MAs(6);o.Q6J("nzPopoverMouseEnterDelay",Y.onCloseClicked?0:.5)("nzPopoverContent",q)("nzPopoverTrigger",Y.enablePopover?"hover":null)("nzMode",Y.onCloseClicked?"closeable":"default"),o.xp6(1),o.Q6J("ngTemplateOutlet",k)}}function e(U,N){}function I(U,N){if(1&U&&o.YNc(0,e,0,0,"ng-template",5),2&U){o.oxw();const q=o.MAs(2);o.Q6J("ngTemplateOutlet",q)}}function w(U,N){if(1&U&&(o.ynx(0),o._uU(1),o.ALo(2,"truncate"),o.BQk()),2&U){const q=o.oxw(2);o.xp6(1),o.hij(" ",o.xi3(2,1,q.disease.name,27)," ")}}function de(U,N){if(1&U&&o._uU(0),2&U){const q=o.oxw(2);o.hij(" ",q.disease.name," ")}}function ae(U,N){if(1&U&&(o._UZ(0,"i",9),o.YNc(1,w,3,4,"ng-container",0),o.YNc(2,de,1,1,"ng-template",null,10,o.W1O)),2&U){const q=o.MAs(3),Y=o.oxw();o.xp6(1),o.Q6J("ngIf",Y.truncateLongName)("ngIfElse",q)}}class Z extends t.a{constructor(){super(...arguments),this.enablePopover=!0,this.truncateLongName=!1}set disease(N){if(!N)throw new Error("disease-tag disease Input requires LinkableDisease.");this._disease=N}get disease(){return this._disease}idFunction(){return this.disease.id}}Z.\u0275fac=function(){let U;return function(q){return(U||(U=o.n5z(Z)))(q||Z)}}(),Z.\u0275cmp=o.Xpm({type:Z,selectors:[["cvc-disease-tag"]],inputs:{disease:"disease",enablePopover:"enablePopover",truncateLongName:"truncateLongName"},features:[o.qOj],decls:7,vars:2,consts:[[4,"ngIf","ngIfElse"],["tag",""],["unlinked",""],["tagContent",""],[3,"routerLink"],[3,"ngTemplateOutlet"],["nz-popover","","nzPopoverPlacement","right",3,"nzPopoverMouseEnterDelay","nzPopoverContent","nzPopoverTrigger","nzMode","nzOnClose"],["diseasePopover",""],[3,"diseaseId"],["nz-icon","","nzType","civic-disease","nzTheme","twotone","nzTwotoneColor","#E62F76"],["fullName",""]],template:function(N,q){if(1&N&&(o.YNc(0,O,3,2,"ng-container",0),o.YNc(1,E,4,5,"ng-template",null,1,o.W1O),o.YNc(3,I,1,1,"ng-template",null,2,o.W1O),o.YNc(5,ae,4,2,"ng-template",null,3,o.W1O)),2&N){const Y=o.MAs(4);o.Q6J("ngIf",q.linked)("ngIfElse",Y)}},dependencies:[g.O5,g.tP,l.rH,s.j,L.lU,R.Ls,T.I,M.W],encapsulation:2,changeDetection:0})},8845:(Et,Me,a)=>{a.d(Me,{Q:()=>M});var t=a(6895),o=a(9116),g=a(6672),l=a(6581),s=a(1102),L=a(3638),R=a(9444),T=a(4650);class M{}M.\u0275fac=function(O){return new(O||M)},M.\u0275mod=T.oAB({type:M}),M.\u0275inj=T.cJS({imports:[t.ez,o.Bz,g.X,l.$6,s.PV,R.s,L.t]})},285:(Et,Me,a)=>{a.d(Me,{_:()=>Xt});var t=a(4004),o=a(9300),g=a(3240),l=a(4650),s=a(7630),L=a(6895),R=a(9116),T=a(1102),M=a(1971),b=a(3679),O=a(9194),F=a(6672),V=a(6903),E=a(8823),e=a(5797),I=a(7491),w=a(3172),de=a(783),ae=a(4590),Z=a(5105),U=a(7230),N=a(2635),q=a(4110),Y=a(160);function k(lt,kt){if(1&lt&&(l.ynx(0),l._UZ(1,"i",17),l.ALo(2,"entityColor"),l._uU(3),l.BQk()),2&lt){const sn=l.oxw(2).ngIf;l.xp6(1),l.Q6J("nzTwotoneColor",l.lcZ(2,2,"EvidenceItem")),l.xp6(2),l.hij(" ",sn.name," ")}}function me(lt,kt){if(1&lt&&l._UZ(0,"cvc-status-tag",18),2&lt){const sn=l.oxw(2).ngIf;l.Q6J("status",sn.status)}}function fe(lt,kt){1&lt&&(l.TgZ(0,"nz-space"),l.YNc(1,k,4,4,"ng-container",15),l.YNc(2,me,1,1,"cvc-status-tag",16),l.qZA())}function ne(lt,kt){if(1&lt&&l._UZ(0,"cvc-molecular-profile-tag",19),2&lt){const sn=l.oxw().ngIf;l.Q6J("molecularProfile",sn.molecularProfile)("enablePopover",!1)("truncateLongName",!0)}}function Ce(lt,kt){if(1&lt&&(l.ynx(0),l._uU(1),l.BQk()),2&lt){const sn=kt.ngIf;l.xp6(1),l.hij(" ",sn," ")}}function H(lt,kt){if(1&lt&&(l.TgZ(0,"nz-descriptions",20)(1,"nz-descriptions-item",21),l._UZ(2,"cvc-mp-tag-name",22),l.qZA(),l.TgZ(3,"nz-descriptions-item",23),l._UZ(4,"cvc-source-tag",24),l.qZA()()),2&lt){const sn=l.oxw().ngIf;l.Q6J("nzColumn",1),l.xp6(2),l.Q6J("nameSegments",sn.molecularProfile.parsedName)("enablePopover",!1),l.xp6(2),l.Q6J("source",sn.source)("enablePopover",!1)}}function X(lt,kt){if(1&lt&&(l.ynx(0),l._UZ(1,"cvc-disease-tag",35),l.BQk()),2&lt){const sn=l.oxw(2).ngIf;l.xp6(1),l.Q6J("enablePopover",!1)("disease",sn.disease)("truncateLongName",!0)}}function ve(lt,kt){1&lt&&l._uU(0," N/A ")}function Ee(lt,kt){if(1&lt&&(l.TgZ(0,"span"),l._UZ(1,"cvc-therapy-tag",38),l.qZA()),2&lt){const sn=kt.$implicit;l.xp6(1),l.Q6J("enablePopover",!1)("therapy",sn)("truncateLongName",!0)}}function wt(lt,kt){if(1&lt&&(l.ynx(0),l._uU(1),l.ALo(2,"titlecase"),l.BQk()),2&lt){const sn=l.oxw(3).ngIf;l.xp6(1),l.hij(" ",l.lcZ(2,1,sn.therapyInteractionType)," ")}}function St(lt,kt){if(1&lt&&(l.TgZ(0,"nz-descriptions-item",36),l.YNc(1,Ee,2,3,"span",37),l.YNc(2,wt,3,3,"ng-container",1),l.qZA()),2&lt){const sn=l.oxw(2).ngIf;l.xp6(1),l.Q6J("ngForOf",sn.therapies),l.xp6(1),l.Q6J("ngIf",sn.therapies.length>1)}}function on(lt,kt){if(1&lt&&(l.TgZ(0,"span"),l._UZ(1,"cvc-phenotype-tag",40),l.qZA()),2&lt){const sn=kt.$implicit;l.xp6(1),l.Q6J("enablePopover",!1)("phenotype",sn)}}function ot(lt,kt){if(1&lt&&(l.TgZ(0,"nz-descriptions-item",39),l.YNc(1,on,2,2,"span",37),l.qZA()),2&lt){const sn=l.oxw(2).ngIf;l.xp6(1),l.Q6J("ngForOf",sn.phenotypes)}}function mt(lt,kt){if(1&lt&&(l.TgZ(0,"nz-descriptions",20)(1,"nz-descriptions-item",25),l._uU(2),l.qZA(),l.TgZ(3,"nz-descriptions-item",26),l._uU(4),l.ALo(5,"evidenceEnumDisplay"),l.qZA(),l.TgZ(6,"nz-descriptions-item",27),l._uU(7),l.ALo(8,"evidenceEnumDisplay"),l.qZA(),l.TgZ(9,"nz-descriptions-item",28),l._uU(10),l.ALo(11,"evidenceEnumDisplay"),l.qZA(),l.TgZ(12,"nz-descriptions-item",29),l._uU(13),l._UZ(14,"i",30),l.qZA(),l.TgZ(15,"nz-descriptions-item",31),l.YNc(16,X,2,3,"ng-container",9),l.YNc(17,ve,1,0,"ng-template",null,32,l.W1O),l.qZA(),l.YNc(19,St,3,2,"nz-descriptions-item",33),l.YNc(20,ot,2,1,"nz-descriptions-item",34),l.qZA()),2&lt){const sn=l.MAs(18),On=l.oxw().ngIf;l.Q6J("nzColumn",2),l.xp6(2),l.hij(" ",On.evidenceLevel," "),l.xp6(2),l.hij(" ",l.lcZ(5,10,On.evidenceType)," "),l.xp6(3),l.hij(" ",l.lcZ(8,12,On.evidenceDirection)," "),l.xp6(3),l.hij(" ",l.lcZ(11,14,On.significance)," "),l.xp6(3),l.hij(" ",On.evidenceRating,""),l.xp6(3),l.Q6J("ngIf",On.disease)("ngIfElse",sn),l.xp6(3),l.Q6J("ngIf",On.therapies.length>0),l.xp6(1),l.Q6J("ngIf",On.phenotypes.length>0)}}function Ot(lt,kt){if(1&lt&&(l.TgZ(0,"a",41)(1,"nz-tag",42),l._UZ(2,"i",43),l._uU(3),l.qZA()()),2&lt){const sn=l.oxw().ngIf;l.MGl("routerLink","/evidence/",sn.id,"/flags"),l.xp6(3),l.hij(" Flags (",sn.flags.totalCount,") ")}}function Qt(lt,kt){if(1&lt&&(l.TgZ(0,"a",41)(1,"nz-tag",44),l._UZ(2,"i",45),l._uU(3),l.qZA()()),2&lt){const sn=l.oxw().ngIf;l.MGl("routerLink","/evidence/",sn.id,"/revisions"),l.xp6(3),l.hij(" Revisions (",sn.revisions.totalCount,") ")}}function mn(lt,kt){if(1&lt&&(l.TgZ(0,"a",41)(1,"nz-tag",46),l._UZ(2,"i",47),l._uU(3),l.qZA()()),2&lt){const sn=l.oxw().ngIf;l.MGl("routerLink","/evidence/",sn.id,"/comments"),l.xp6(3),l.hij(" Comments (",sn.comments.totalCount,") ")}}function At(lt,kt){if(1&lt&&(l.ynx(0),l.TgZ(1,"nz-card",3),l.YNc(2,fe,3,0,"ng-template",null,4,l.W1O),l.YNc(4,ne,1,3,"ng-template",null,5,l.W1O),l.TgZ(6,"nz-row")(7,"nz-col",6)(8,"div",7)(9,"p",8),l.YNc(10,Ce,2,1,"ng-container",9),l.qZA()()()(),l.TgZ(11,"nz-space",10),l.YNc(12,H,5,5,"nz-descriptions",11),l.YNc(13,mt,21,16,"nz-descriptions",11),l.qZA(),l.TgZ(14,"nz-row",12)(15,"nz-col",6)(16,"nz-space",13),l.YNc(17,Ot,4,2,"a",14),l.YNc(18,Qt,4,2,"a",14),l.YNc(19,mn,4,2,"a",14),l.qZA()()()(),l.BQk()),2&lt){const sn=kt.ngIf,On=l.MAs(3),zn=l.MAs(5);l.oxw();const Yt=l.MAs(4);l.xp6(1),l.Q6J("nzTitle",On)("nzExtra",zn),l.xp6(8),l.Q6J("nzEllipsisRows",4),l.xp6(1),l.Q6J("ngIf",sn.description)("ngIfElse",Yt)}}function _t(lt,kt){1&lt&&l._uU(0," Evidence item has not been provided a description.\n")}class Xt{constructor(kt){this.gql=kt}ngOnInit(){if(null==this.evidenceId)throw new Error("cvc-evidence-popover requires valid evidenceId input.");this.evidence$=this.gql.watch({evidenceId:this.evidenceId}).valueChanges.pipe((0,t.U)(({data:kt})=>kt?.evidenceItem),(0,o.h)(g.ep))}}Xt.\u0275fac=function(kt){return new(kt||Xt)(l.Y36(s.Ybm))},Xt.\u0275cmp=l.Xpm({type:Xt,selectors:[["cvc-evidence-popover"]],inputs:{evidenceId:"evidenceId"},decls:5,vars:3,consts:[["id","popover-content"],[4,"ngIf"],["noDescription",""],["nzBordered","false","id","card-content",3,"nzTitle","nzExtra"],["cardTitle",""],["molecularProfile",""],["nzSpan","24"],[1,"popover-text"],["nz-typography","","nzEllipsis","","nzExpandable","",3,"nzEllipsisRows"],[4,"ngIf","ngIfElse"],["nzDirection","vertical","nzSize","small"],["nzSize","small","nzBordered","true",3,"nzColumn",4,"nzSpaceItem"],["id","entity-child-counts"],["nzSize","small"],[3,"routerLink",4,"nzSpaceItem"],[4,"nzSpaceItem"],["style","font-weight: normal",3,"status",4,"nzSpaceItem"],["nz-icon","","nzTheme","twotone","nzType","civic-evidence",3,"nzTwotoneColor"],[2,"font-weight","normal",3,"status"],[3,"molecularProfile","enablePopover","truncateLongName"],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","MP Expression"],[3,"nameSegments","enablePopover"],["nzTitle","Source","nzSpan","2"],[3,"source","enablePopover"],["nzTitle","Level"],["nzTitle","Type"],["nzTitle","Direction"],["nzTitle","Clinical Significance","nzSpan","2"],["nzTitle","Rating"],["nz-icon","","nzType","star","nzTheme","fill"],["nzTitle","Disease"],["noDisease",""],["nzTitle","Therapies","nzSpan","2",4,"ngIf"],["nzTitle","Phenotypes","nzSpan","2",4,"ngIf"],[3,"enablePopover","disease","truncateLongName"],["nzTitle","Therapies","nzSpan","2"],[4,"ngFor","ngForOf"],[3,"enablePopover","therapy","truncateLongName"],["nzTitle","Phenotypes","nzSpan","2"],[3,"enablePopover","phenotype"],[3,"routerLink"],["nzColor","red"],["nz-icon","","nzType","civic-flag"],["nzColor","orange"],["nz-icon","","nzType","civic-revision"],["nzColor","blue"],["nz-icon","","nzType","civic-comment"]],template:function(kt,sn){1&kt&&(l.TgZ(0,"div",0),l.YNc(1,At,20,5,"ng-container",1),l.ALo(2,"ngrxPush"),l.qZA(),l.YNc(3,_t,1,0,"ng-template",null,2,l.W1O)),2&kt&&(l.xp6(1),l.Q6J("ngIf",l.lcZ(2,1,sn.evidence$)))},dependencies:[L.sg,L.O5,R.rH,T.Ls,M.bd,b.t3,b.SK,O.R7,O.uj,F.j,V.NU,V.$1,E.ZU,e.T,I.n,w.i,de.T,ae.h,Z.p,U.C,L.rS,N.fM,q.Do,Y.a],styles:["[_nghost-%COMP%]{display:block;margin:-8px -12px}[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}[_nghost-%COMP%]     .ant-descriptions-view{border:none}[_nghost-%COMP%]     #entity-child-counts{border-top:1px solid #f0f0f0;padding:8px}[_nghost-%COMP%]     #entity-child-counts nz-space{width:100%}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child nz-tag{margin-right:0}.popover-text[_ngcontent-%COMP%]{width:100%;padding:8px;border-bottom:1px solid #f0f0f0}#popover-content[_ngcontent-%COMP%]{min-width:350px;max-width:500px;min-height:125px}"]})},1698:(Et,Me,a)=>{a.d(Me,{f:()=>Z});var t=a(6895),o=a(1971),g=a(3679),l=a(9194),s=a(9116),L=a(6672),R=a(8845),T=a(3973),M=a(2635),b=a(6903),O=a(1102),F=a(9444),V=a(2811),E=a(592),e=a(8823),I=a(3309),w=a(4126),de=a(701),ae=a(4650);class Z{}Z.\u0275fac=function(N){return new(N||Z)},Z.\u0275mod=ae.oAB({type:Z}),Z.\u0275inj=ae.cJS({imports:[t.ez,s.Bz,M._N,M.pP,O.PV,o.vh,g.Jb,l.q6,L.X,b.zf,e.ZJ,F.s,de.N,R.Q,T.y,V.s,E.x,w.u,I.r]})},4281:(Et,Me,a)=>{a.d(Me,{Q:()=>q});var t=a(3240),o=a(4004),g=a(9300),l=a(4650),s=a(7630),L=a(6895),R=a(9116),T=a(1971),M=a(3679),b=a(9194),O=a(6672),F=a(1102),V=a(6903),E=a(2635),e=a(160);function I(Y,k){if(1&Y&&(l._UZ(0,"i",11),l.ALo(1,"entityColor"),l._uU(2)),2&Y){const me=l.oxw().ngIf;l.Q6J("nzTwotoneColor",l.lcZ(1,2,"Gene")),l.xp6(2),l.hij(" ",me.officialName," ")}}function w(Y,k){if(1&Y&&(l.TgZ(0,"nz-tag"),l._uU(1),l.qZA()),2&Y){const me=k.$implicit;l.xp6(1),l.Oqu(me)}}function de(Y,k){if(1&Y&&(l.TgZ(0,"nz-descriptions-item",12),l.YNc(1,w,2,1,"nz-tag",13),l.qZA()),2&Y){const me=l.oxw().ngIf;l.xp6(1),l.Q6J("ngForOf",me.geneAliases)}}function ae(Y,k){if(1&Y&&(l.TgZ(0,"a",14)(1,"nz-tag",15),l._UZ(2,"i",16),l._uU(3),l.qZA()()),2&Y){const me=l.oxw().ngIf;l.MGl("routerLink","/genes/",me.id,"/flags"),l.xp6(3),l.hij(" Flags (",me.flags.totalCount,") ")}}function Z(Y,k){if(1&Y&&(l.TgZ(0,"a",14)(1,"nz-tag",17),l._UZ(2,"i",18),l._uU(3),l.qZA()()),2&Y){const me=l.oxw().ngIf;l.MGl("routerLink","/genes/",me.id,"/revisions"),l.xp6(3),l.hij(" Revisions (",me.revisions.totalCount,") ")}}function U(Y,k){if(1&Y&&(l.TgZ(0,"a",14)(1,"nz-tag",19),l._UZ(2,"i",20),l._uU(3),l.qZA()()),2&Y){const me=l.oxw().ngIf;l.MGl("routerLink","/genes/",me.id,"/comments"),l.xp6(3),l.hij(" Comments (",me.comments.totalCount,") ")}}function N(Y,k){if(1&Y&&(l.ynx(0),l.TgZ(1,"nz-card",2),l.YNc(2,I,3,4,"ng-template",null,3,l.W1O),l.TgZ(4,"nz-descriptions",4),l.YNc(5,de,2,1,"nz-descriptions-item",5),l.TgZ(6,"nz-descriptions-item",6),l._uU(7),l.qZA()(),l.TgZ(8,"nz-row",7)(9,"nz-col",8)(10,"nz-space",9),l.YNc(11,ae,4,2,"a",10),l.YNc(12,Z,4,2,"a",10),l.YNc(13,U,4,2,"a",10),l.qZA()()()(),l.BQk()),2&Y){const me=k.ngIf,fe=l.MAs(3);l.xp6(1),l.Q6J("nzTitle",fe),l.xp6(3),l.Q6J("nzColumn",2),l.xp6(1),l.Q6J("ngIf",me.geneAliases.length>0),l.xp6(2),l.hij(" ",me.variants.totalCount," ")}}class q{constructor(k){this.gql=k}ngOnInit(){if(null==this.geneId)throw new Error("cvc-gene-popover requires valid geneId input.");this.gene$=this.gql.watch({geneId:this.geneId}).valueChanges.pipe((0,o.U)(({data:k})=>k?.gene),(0,g.h)(t.ep))}}q.\u0275fac=function(k){return new(k||q)(l.Y36(s.rJ8))},q.\u0275cmp=l.Xpm({type:q,selectors:[["cvc-gene-popover"]],inputs:{geneId:"geneId"},decls:3,vars:3,consts:[["id","popover-content"],[4,"ngIf"],["nzBordered","false","id","card-content",3,"nzTitle"],["cardTitle",""],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","Aliases","nzSpan","2",4,"ngIf"],["nzTitle","Variants"],["id","entity-child-counts"],["nzSpan","24"],["nzSize","small"],[3,"routerLink",4,"nzSpaceItem"],["nz-icon","","nzTheme","twotone","nzType","civic-gene",3,"nzTwotoneColor"],["nzTitle","Aliases","nzSpan","2"],[4,"ngFor","ngForOf"],[3,"routerLink"],["nzColor","red"],["nz-icon","","nzType","civic-flag"],["nzColor","orange"],["nz-icon","","nzType","civic-revision"],["nzColor","blue"],["nz-icon","","nzType","civic-comment"]],template:function(k,me){1&k&&(l.TgZ(0,"div",0),l.YNc(1,N,14,4,"ng-container",1),l.ALo(2,"ngrxPush"),l.qZA()),2&k&&(l.xp6(1),l.Q6J("ngIf",l.lcZ(2,1,me.gene$)))},dependencies:[L.sg,L.O5,R.rH,T.bd,M.t3,M.SK,b.R7,b.uj,O.j,F.Ls,V.NU,V.$1,E.fM,e.a],styles:["[_nghost-%COMP%]{display:block;margin:-8px -12px}[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}[_nghost-%COMP%]     .ant-descriptions-view{border:none}[_nghost-%COMP%]     #entity-child-counts{border-top:1px solid #f0f0f0;padding:8px}[_nghost-%COMP%]     #entity-child-counts nz-space{width:100%}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child nz-tag{margin-right:0}.popover-text[_ngcontent-%COMP%]{width:100%;padding:8px;border-bottom:1px solid #f0f0f0}#popover-content[_ngcontent-%COMP%]{min-width:350px;max-width:500px;min-height:125px}"]})},6292:(Et,Me,a)=>{a.d(Me,{w:()=>F});var t=a(6895),o=a(9116),g=a(9444),l=a(2635),s=a(1971),L=a(9194),R=a(3679),T=a(1102),M=a(6903),b=a(6672),O=a(4650);class F{}F.\u0275fac=function(E){return new(E||F)},F.\u0275mod=O.oAB({type:F}),F.\u0275inj=O.cJS({imports:[t.ez,o.Bz,l._N,l.pP,s.vh,R.Jb,L.q6,b.X,T.PV,M.zf,g.s]})},3965:(Et,Me,a)=>{a.d(Me,{H:()=>q});var t=a(6654),o=a(9771),g=a(4650),l=a(6895),s=a(9116),L=a(6672),R=a(6581),T=a(1102),M=a(4281),b=a(1730),O=a(4557),F=a(160);function V(Y,k){}function E(Y,k){if(1&Y&&(g.ynx(0),g.TgZ(1,"a",4),g.YNc(2,V,0,0,"ng-template",5),g.qZA(),g.BQk()),2&Y){const me=g.oxw(),fe=g.MAs(2);g.xp6(1),g.Q6J("routerLink",me.gene.link),g.xp6(1),g.Q6J("ngTemplateOutlet",fe)}}function e(Y,k){}function I(Y,k){if(1&Y&&g._UZ(0,"cvc-gene-popover",8),2&Y){const me=g.oxw(2);g.Q6J("geneId",me.gene.id)}}function w(Y,k){if(1&Y){const me=g.EpF();g.TgZ(0,"nz-tag",6),g.NdJ("nzOnClose",function(ne){g.CHM(me);const Ce=g.oxw();return g.KtG(Ce.itemClosed(ne))}),g.YNc(1,e,0,0,"ng-template",5),g.qZA(),g.YNc(2,I,1,1,"ng-template",null,7,g.W1O)}if(2&Y){const me=g.MAs(3),fe=g.oxw(),ne=g.MAs(6);g.Q6J("nzPopoverMouseEnterDelay",fe.onCloseClicked?0:.5)("nzPopoverContent",me)("nzPopoverTrigger",fe.enablePopover?"hover":null)("nzMode",fe.onCloseClicked?"closeable":"default"),g.xp6(1),g.Q6J("ngTemplateOutlet",ne)}}function de(Y,k){}function ae(Y,k){if(1&Y&&g.YNc(0,de,0,0,"ng-template",5),2&Y){g.oxw();const me=g.MAs(2);g.Q6J("ngTemplateOutlet",me)}}function Z(Y,k){if(1&Y&&(g.ynx(0),g._uU(1),g.ALo(2,"truncate"),g.BQk()),2&Y){const me=g.oxw(2);g.xp6(1),g.hij(" ",g.xi3(2,1,me.gene.name,12)," ")}}function U(Y,k){if(1&Y&&g._uU(0),2&Y){const me=g.oxw(2);g.hij(" ",me.gene.name," ")}}function N(Y,k){if(1&Y&&(g.TgZ(0,"cvc-icon-badges",9),g._UZ(1,"i",10),g.ALo(2,"entityColor"),g.qZA(),g.YNc(3,Z,3,4,"ng-container",0),g.YNc(4,U,1,1,"ng-template",null,11,g.W1O)),2&Y){const me=g.MAs(5),fe=g.oxw();g.Q6J("flagged",fe.gene.flagged)("entityColor",fe.iconColor),g.xp6(1),g.Q6J("nzTwotoneColor",g.lcZ(2,5,"Gene")),g.xp6(2),g.Q6J("ngIf",fe.truncateLongName)("ngIfElse",me)}}class q extends t.a{constructor(){super(),this.enablePopover=!0,this.truncateLongName=!1,this.iconColor=(0,o.f)("Gene")}idFunction(){return this.gene.id}ngOnInit(){if(super.ngOnInit(),void 0===this.gene)throw new Error("cvc-gene-tag requires LinkableGene input, none supplied.")}}q.\u0275fac=function(k){return new(k||q)},q.\u0275cmp=g.Xpm({type:q,selectors:[["cvc-gene-tag"]],inputs:{gene:"gene",enablePopover:"enablePopover",truncateLongName:"truncateLongName"},features:[g.qOj],decls:7,vars:2,consts:[[4,"ngIf","ngIfElse"],["tag",""],["unlinked",""],["tagContent",""],[3,"routerLink"],[3,"ngTemplateOutlet"],["nz-popover","",3,"nzPopoverMouseEnterDelay","nzPopoverContent","nzPopoverTrigger","nzMode","nzOnClose"],["genePopover",""],[3,"geneId"],[3,"flagged","entityColor"],["nz-icon","","nzType","civic-gene","nzTheme","twotone",3,"nzTwotoneColor"],["fullName",""]],template:function(k,me){if(1&k&&(g.YNc(0,E,3,2,"ng-container",0),g.YNc(1,w,4,5,"ng-template",null,1,g.W1O),g.YNc(3,ae,1,1,"ng-template",null,2,g.W1O),g.YNc(5,N,6,7,"ng-template",null,3,g.W1O)),2&k){const fe=g.MAs(4);g.Q6J("ngIf",me.linked)("ngIfElse",fe)}},dependencies:[l.O5,l.tP,s.rH,L.j,R.lU,T.Ls,M.Q,b.b,O.W,F.a],encapsulation:2,changeDetection:0})},1229:(Et,Me,a)=>{a.d(Me,{U:()=>O});var t=a(6895),o=a(9116),g=a(6672),l=a(1102),s=a(6581),L=a(6292),R=a(9444),T=a(48),M=a(6429),b=a(4650);class O{}O.\u0275fac=function(V){return new(V||O)},O.\u0275mod=b.oAB({type:O}),O.\u0275inj=b.cJS({imports:[t.ez,o.Bz,g.X,s.$6,l.PV,T.mS,R.s,L.w,M.C]})},3314:(Et,Me,a)=>{a.d(Me,{_:()=>fe});var t=a(3240),o=a(4004),g=a(9300),l=a(4650),s=a(7630),L=a(6895),R=a(9116),T=a(1971),M=a(3679),b=a(9194),O=a(6672),F=a(1102),V=a(6903),E=a(6715),e=a(7230),I=a(2635);function w(ne,Ce){if(1&ne&&(l._UZ(0,"i",16),l._uU(1)),2&ne){const H=l.oxw().ngIf;l.xp6(1),l.hij(" ",H.name," ")}}function de(ne,Ce){if(1&ne&&(l.TgZ(0,"nz-descriptions-item",17),l._uU(1),l.qZA()),2&ne){const H=l.oxw().ngIf;l.xp6(1),l.hij(" ",H.evidenceItems.totalCount," ")}}function ae(ne,Ce){if(1&ne&&(l.TgZ(0,"nz-descriptions-item",18),l._uU(1),l.qZA()),2&ne){const H=l.oxw().ngIf;l.xp6(1),l.hij(" ",H.assertions.totalCount," ")}}function Z(ne,Ce){if(1&ne&&(l.TgZ(0,"nz-tag"),l._uU(1),l.qZA()),2&ne){const H=Ce.$implicit;l.xp6(1),l.Oqu(H)}}function U(ne,Ce){if(1&ne&&(l.ynx(0),l.TgZ(1,"cvc-tag-list"),l.YNc(2,Z,2,1,"nz-tag",19),l.qZA(),l.BQk()),2&ne){const H=l.oxw().ngIf;l.xp6(2),l.Q6J("ngForOf",H.molecularProfileAliases)}}function N(ne,Ce){1&ne&&(l.TgZ(0,"span",20),l._uU(1,"None specified"),l.qZA())}function q(ne,Ce){if(1&ne&&(l.TgZ(0,"a",21)(1,"nz-tag",22),l._UZ(2,"i",23),l._uU(3),l.qZA()()),2&ne){const H=l.oxw().ngIf;l.MGl("routerLink","/molecular-profiles/",H.id,"/flags"),l.xp6(3),l.hij(" Flags (",H.flags.totalCount,") ")}}function Y(ne,Ce){if(1&ne&&(l.TgZ(0,"a",21)(1,"nz-tag",24),l._UZ(2,"i",25),l._uU(3),l.qZA()()),2&ne){const H=l.oxw().ngIf;l.MGl("routerLink","/molecular-profiles/",H.id,"/revisions"),l.xp6(3),l.hij(" Revisions (",H.revisions.totalCount,") ")}}function k(ne,Ce){if(1&ne&&(l.TgZ(0,"a",21)(1,"nz-tag",26),l._UZ(2,"i",27),l._uU(3),l.qZA()()),2&ne){const H=l.oxw().ngIf;l.MGl("routerLink","/molecular-profiles/",H.id,"/comments"),l.xp6(3),l.hij(" Comments (",H.comments.totalCount,") ")}}function me(ne,Ce){if(1&ne&&(l.ynx(0),l.TgZ(1,"nz-card",2),l.YNc(2,w,2,1,"ng-template",null,3,l.W1O),l.TgZ(4,"nz-descriptions",4)(5,"nz-descriptions-item",5),l._UZ(6,"cvc-mp-tag-name",6),l.qZA(),l.YNc(7,de,2,1,"nz-descriptions-item",7),l.YNc(8,ae,2,1,"nz-descriptions-item",8),l.TgZ(9,"nz-descriptions-item",9),l.YNc(10,U,3,1,"ng-container",10),l.YNc(11,N,2,0,"ng-template",null,11,l.W1O),l.qZA()(),l.TgZ(13,"nz-row",12)(14,"nz-col",13)(15,"nz-space",14),l.YNc(16,q,4,2,"a",15),l.YNc(17,Y,4,2,"a",15),l.YNc(18,k,4,2,"a",15),l.qZA()()()(),l.BQk()),2&ne){const H=Ce.ngIf,X=l.MAs(3),ve=l.MAs(12);l.xp6(1),l.Q6J("nzTitle",X),l.xp6(3),l.Q6J("nzColumn",2),l.xp6(2),l.Q6J("nameSegments",H.parsedName)("enablePopover",!1),l.xp6(1),l.Q6J("ngIf",H.evidenceItems.totalCount>0),l.xp6(1),l.Q6J("ngIf",H.assertions.totalCount>0),l.xp6(2),l.Q6J("ngIf",H.molecularProfileAliases.length>0)("ngIfElse",ve)}}class fe{constructor(Ce){this.gql=Ce}ngOnInit(){if(void 0===this.molecularProfileId)throw new Error("Must pass a molecular profile ID into the molecular profile popover component.");this.molecularProfile$=this.gql.watch({molecularProfileId:this.molecularProfileId}).valueChanges.pipe((0,o.U)(({data:Ce})=>Ce?.molecularProfile),(0,g.h)(t.ep))}}fe.\u0275fac=function(Ce){return new(Ce||fe)(l.Y36(s.DkJ))},fe.\u0275cmp=l.Xpm({type:fe,selectors:[["cvc-molecular-profile-popover"]],inputs:{molecularProfileId:"molecularProfileId"},decls:3,vars:3,consts:[["id","popover-content"],[4,"ngIf"],["nzBordered","false","id","card-content",3,"nzTitle"],["cardTitle",""],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","MP Expression","nzSpan","2"],[3,"nameSegments","enablePopover"],["nzTitle","Evidence Items","nzSpan","2",4,"ngIf"],["nzTitle","Assertions","nzSpan","2",4,"ngIf"],["nzTitle","Aliases"],[4,"ngIf","ngIfElse"],["noAliases",""],["id","entity-child-counts"],["nzSpan","24"],["nzSize","small"],[3,"routerLink",4,"nzSpaceItem"],["nz-icon","","nzType","civic:molecularprofile"],["nzTitle","Evidence Items","nzSpan","2"],["nzTitle","Assertions","nzSpan","2"],[4,"ngFor","ngForOf"],["nz-typography","","nzType","secondary"],[3,"routerLink"],["nzColor","red"],["nz-icon","","nzType","civic-flag"],["nzColor","orange"],["nz-icon","","nzType","civic-revision"],["nzColor","blue"],["nz-icon","","nzType","civic-comment"]],template:function(Ce,H){1&Ce&&(l.TgZ(0,"div",0),l.YNc(1,me,19,8,"ng-container",1),l.ALo(2,"ngrxPush"),l.qZA()),2&Ce&&(l.xp6(1),l.Q6J("ngIf",l.lcZ(2,1,H.molecularProfile$)))},dependencies:[L.sg,L.O5,R.rH,T.bd,M.t3,M.SK,b.R7,b.uj,O.j,F.Ls,V.NU,V.$1,E.$,e.C,I.fM],styles:["[_nghost-%COMP%]{display:block;margin:-8px -12px}[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}[_nghost-%COMP%]     .ant-descriptions-view{border:none}[_nghost-%COMP%]     #entity-child-counts{border-top:1px solid #f0f0f0;padding:8px}[_nghost-%COMP%]     #entity-child-counts nz-space{width:100%}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child nz-tag{margin-right:0}.popover-text[_ngcontent-%COMP%]{width:100%;padding:8px;border-bottom:1px solid #f0f0f0}#popover-content[_ngcontent-%COMP%]{min-width:350px;max-width:500px;min-height:125px}"]})},4398:(Et,Me,a)=>{a.d(Me,{_:()=>e});var t=a(6895),o=a(9116),g=a(2635),l=a(1971),s=a(3679),L=a(9194),R=a(6672),T=a(1102),M=a(6903),b=a(1229),O=a(4989),F=a(3309),V=a(897),E=a(4650);class e{}e.\u0275fac=function(w){return new(w||e)},e.\u0275mod=E.oAB({type:e}),e.\u0275inj=E.cJS({imports:[t.ez,o.Bz,g._N,g.pP,l.vh,s.Jb,L.q6,R.X,T.PV,M.zf,b.U,O.X,V.$,F.r]})},7230:(Et,Me,a)=>{a.d(Me,{C:()=>V});var t=a(4650),o=a(6895),g=a(5457),l=a(3965);class L{constructor(){}}function R(E,e){if(1&E&&t._UZ(0,"span",3),2&E){const I=t.oxw().$implicit;t.Q6J("innerHtml",I.text,t.oJD)}}function T(E,e){if(1&E&&t._UZ(0,"cvc-gene-tag",6),2&E){const I=t.oxw().$implicit,w=t.oxw(3);t.Q6J("gene",I)("enablePopover",w.enablePopover)}}function M(E,e){if(1&E&&(t.ynx(0),t.YNc(1,T,1,2,"cvc-gene-tag",5),t.BQk()),2&E){const I=e.$implicit;t.xp6(1),t.Q6J("ngIf","Gene"==I.__typename)}}L.\u0275fac=function(e){return new(e||L)},L.\u0275cmp=t.Xpm({type:L,selectors:[["cvc-tag-group"]],ngContentSelectors:["*"],decls:1,vars:0,template:function(e,I){1&e&&(t.F$t(),t.Hsn(0))},styles:["[_nghost-%COMP%]    >*:first-child   nz-tag{border-top-right-radius:0;border-bottom-right-radius:0;margin-right:0}[_nghost-%COMP%]    >*:last-child   nz-tag{border-top-left-radius:0;border-bottom-left-radius:0;margin-left:-1px;border-left-color:#e9e9e9}"]});const b=function(E){return[E]};function O(E,e){if(1&E&&(t.ynx(0),t.TgZ(1,"cvc-tag-group"),t.YNc(2,M,2,1,"ng-container",0),t._UZ(3,"cvc-variant-tag",4),t.qZA(),t.BQk()),2&E){const I=t.oxw(),w=I.index,de=I.$implicit,ae=t.oxw();t.xp6(2),t.Q6J("ngForOf",t.VKq(3,b,ae.nameSegments[w-1])),t.xp6(1),t.Q6J("variant",de)("enablePopover",ae.enablePopover)}}function F(E,e){if(1&E&&(t.ynx(0),t.YNc(1,R,1,1,"span",1),t.YNc(2,O,4,5,"ng-container",2),t.BQk()),2&E){const I=e.$implicit;t.xp6(1),t.Q6J("ngIf","MolecularProfileTextSegment"==I.__typename),t.xp6(1),t.Q6J("ngIf","Variant"==I.__typename)}}class V{constructor(){this.enablePopover=!0}ngOnInit(){if(void 0===this.nameSegments)throw new Error("Must pass a list of molecular profile name segments into mp name component.")}}V.\u0275fac=function(e){return new(e||V)},V.\u0275cmp=t.Xpm({type:V,selectors:[["cvc-mp-tag-name"]],inputs:{nameSegments:"nameSegments",enablePopover:"enablePopover"},decls:1,vars:1,consts:[[4,"ngFor","ngForOf"],["class","text-segment",3,"innerHtml",4,"ngIf"],[4,"ngIf"],[1,"text-segment",3,"innerHtml"],[3,"variant","enablePopover"],[3,"gene","enablePopover",4,"ngIf"],[3,"gene","enablePopover"]],template:function(e,I){1&e&&t.YNc(0,F,3,2,"ng-container",0),2&e&&t.Q6J("ngForOf",I.nameSegments)},dependencies:[o.sg,o.O5,g.I,l.H,L],styles:[".text-segment[_ngcontent-%COMP%]{display:inline-block;margin-right:8px;font-weight:700;color:#0009;font-size:14px;line-height:12px}"]})},3309:(Et,Me,a)=>{a.d(Me,{r:()=>T});var t=a(6895),o=a(7043),g=a(1229),l=a(6672),s=a(1102),L=a(4650);class R{}R.\u0275fac=function(b){return new(b||R)},R.\u0275mod=L.oAB({type:R}),R.\u0275inj=L.cJS({imports:[t.ez]});class T{}T.\u0275fac=function(b){return new(b||T)},T.\u0275mod=L.oAB({type:T}),T.\u0275inj=L.cJS({imports:[t.ez,l.X,s.PV,o.Q,g.U,R]})},5105:(Et,Me,a)=>{a.d(Me,{p:()=>me});var t=a(6654),o=a(9771),g=a(4650),l=a(6895),s=a(9116),L=a(6672),R=a(6581),T=a(1102),M=a(3314),b=a(4557);function O(fe,ne){}function F(fe,ne){if(1&fe&&(g.ynx(0),g.TgZ(1,"a",5),g.YNc(2,O,0,0,"ng-template",6),g.qZA(),g.BQk()),2&fe){const Ce=g.oxw(),H=g.MAs(2);g.xp6(1),g.Q6J("routerLink",Ce.molecularProfile.link),g.xp6(1),g.Q6J("ngTemplateOutlet",H)}}function V(fe,ne){}const E=function(fe){return{deprecated:fe}};function e(fe,ne){if(1&fe){const Ce=g.EpF();g.TgZ(0,"nz-tag",9),g.NdJ("nzOnClose",function(X){g.CHM(Ce);const ve=g.oxw(2);return g.KtG(ve.itemClosed(X))}),g.YNc(1,V,0,0,"ng-template",6),g.qZA()}if(2&fe){g.oxw();const Ce=g.MAs(2),H=g.oxw(),X=g.MAs(8);g.Q6J("ngClass",g.VKq(5,E,H.molecularProfile.deprecated))("nzPopoverMouseEnterDelay",H.onCloseClicked?0:.5)("nzPopoverContent",Ce)("nzMode",H.onCloseClicked?"closeable":"default"),g.xp6(1),g.Q6J("ngTemplateOutlet",X)}}function I(fe,ne){if(1&fe&&g._UZ(0,"cvc-molecular-profile-popover",11),2&fe){const Ce=g.oxw(3);g.Q6J("molecularProfileId",Ce.molecularProfile.id)}}function w(fe,ne){if(1&fe&&g.YNc(0,I,1,1,"cvc-molecular-profile-popover",10),2&fe){const Ce=g.oxw(2);g.Q6J("ngIf",Ce.enablePopover)}}function de(fe,ne){if(1&fe&&(g.YNc(0,e,2,7,"nz-tag",7),g.YNc(1,w,1,1,"ng-template",null,8,g.W1O)),2&fe){const Ce=g.oxw(),H=g.MAs(4);g.Q6J("ngIf",Ce.enablePopover)("ngIfElse",H)}}function ae(fe,ne){}function Z(fe,ne){if(1&fe){const Ce=g.EpF();g.TgZ(0,"nz-tag",12),g.NdJ("nzOnClose",function(X){g.CHM(Ce);const ve=g.oxw();return g.KtG(ve.itemClosed(X))}),g.YNc(1,ae,0,0,"ng-template",6),g.qZA()}if(2&fe){const Ce=g.oxw(),H=g.MAs(8);g.Q6J("nzMode",Ce.onCloseClicked?"closeable":"default")("ngClass",g.VKq(3,E,Ce.molecularProfile.deprecated)),g.xp6(1),g.Q6J("ngTemplateOutlet",H)}}function U(fe,ne){}function N(fe,ne){if(1&fe&&g.YNc(0,U,0,0,"ng-template",6),2&fe){g.oxw();const Ce=g.MAs(2);g.Q6J("ngTemplateOutlet",Ce)}}function q(fe,ne){if(1&fe&&(g.ynx(0),g._uU(1),g.ALo(2,"truncate"),g.BQk()),2&fe){const Ce=g.oxw(2);g.xp6(1),g.hij(" ",g.xi3(2,1,Ce.molecularProfile.name,Ce.truncationLength)," ")}}function Y(fe,ne){if(1&fe&&g._uU(0),2&fe){const Ce=g.oxw(2);g.hij(" ",Ce.molecularProfile.name," ")}}function k(fe,ne){if(1&fe&&(g._UZ(0,"i",13),g.YNc(1,q,3,4,"ng-container",0),g.YNc(2,Y,1,1,"ng-template",null,14,g.W1O)),2&fe){const Ce=g.MAs(3),H=g.oxw();g.Q6J("nzTwotoneColor",H.iconColor),g.xp6(1),g.Q6J("ngIf",H.truncateLongName)("ngIfElse",Ce)}}class me extends t.a{constructor(){super(),this.enablePopover=!0,this.truncateLongName=!1,this.truncationLength=20,this.iconColor=(0,o.f)("MolecularProfile")}idFunction(){return this.molecularProfile.id}ngOnInit(){if(super.ngOnInit(),void 0===this.molecularProfile)throw new Error("cvc-molecular-profile-tag requires LinkableMolecularProfile input, none supplied.");"number"==typeof this.truncateLongName&&(this.truncationLength=this.truncateLongName),"segments"in this.molecularProfile&&(this.molecularProfile.name=this.molecularProfile.segments.map(ne=>"text"in ne?ne.text:ne.name).join(" "))}}me.\u0275fac=function(ne){return new(ne||me)},me.\u0275cmp=g.Xpm({type:me,selectors:[["cvc-molecular-profile-tag"]],inputs:{molecularProfile:"molecularProfile",enablePopover:"enablePopover",truncateLongName:"truncateLongName"},features:[g.qOj],decls:9,vars:2,consts:[[4,"ngIf","ngIfElse"],["tag",""],["noPopover",""],["unlinked",""],["tagContent",""],[3,"routerLink"],[3,"ngTemplateOutlet"],["nz-popover","","nzPopoverTrigger","hover",3,"ngClass","nzPopoverMouseEnterDelay","nzPopoverContent","nzMode","nzOnClose",4,"ngIf","ngIfElse"],["popoverContent",""],["nz-popover","","nzPopoverTrigger","hover",3,"ngClass","nzPopoverMouseEnterDelay","nzPopoverContent","nzMode","nzOnClose"],[3,"molecularProfileId",4,"ngIf"],[3,"molecularProfileId"],[3,"nzMode","ngClass","nzOnClose"],["nz-icon","","nzType","civic-molecularprofile","nzTheme","twotone",3,"nzTwotoneColor"],["fullName",""]],template:function(ne,Ce){if(1&ne&&(g.YNc(0,F,3,2,"ng-container",0),g.YNc(1,de,3,2,"ng-template",null,1,g.W1O),g.YNc(3,Z,2,5,"ng-template",null,2,g.W1O),g.YNc(5,N,1,1,"ng-template",null,3,g.W1O),g.YNc(7,k,4,3,"ng-template",null,4,g.W1O)),2&ne){const H=g.MAs(6);g.Q6J("ngIf",Ce.linked)("ngIfElse",H)}},dependencies:[l.mk,l.O5,l.tP,s.rH,L.j,R.lU,T.Ls,M._,b.W],styles:["[_nghost-%COMP%]     nz-tag.rejected, [_nghost-%COMP%]     nz-tag.submitted, [_nghost-%COMP%]     nz-tag.accepted, [_nghost-%COMP%]     nz-tag.deprecated{border-right-width:2px}[_nghost-%COMP%]     nz-tag.rejected, [_nghost-%COMP%]     nz-tag.deprecated{border-color:#e6e6e6;background-color:#fff;color:#999999d9}[_nghost-%COMP%]     nz-tag.submitted{border-color:#ffe58f}[_nghost-%COMP%]     nz-tag.accepted{border-color:#b7eb8f}[_nghost-%COMP%]{display:inline-block}"],changeDetection:0})},4126:(Et,Me,a)=>{a.d(Me,{u:()=>M});var t=a(6895),o=a(9116),g=a(6672),l=a(1102),s=a(6581),L=a(9444),R=a(4398),T=a(4650);class M{}M.\u0275fac=function(O){return new(O||M)},M.\u0275mod=T.oAB({type:M}),M.\u0275inj=T.cJS({imports:[t.ez,o.Bz,g.X,s.$6,l.PV,L.s,R._]})},8305:(Et,Me,a)=>{a.d(Me,{S:()=>e});var t=a(3240),o=a(4004),g=a(9300),l=a(4650),s=a(7630),L=a(6895),R=a(1102),T=a(1971),M=a(6550),b=a(9194),O=a(2635);function F(I,w){if(1&I&&(l._UZ(0,"i",9),l._uU(1)),2&I){const de=l.oxw().ngIf;l.xp6(1),l.hij(" ",de.name," ")}}function V(I,w){if(1&I&&(l.TgZ(0,"cvc-link-tag",10),l._uU(1),l.qZA()),2&I){const de=l.oxw().ngIf;l.Q6J("href",de.url),l.xp6(1),l.hij(" ",de.hpoId," ")}}function E(I,w){if(1&I&&(l.ynx(0),l.TgZ(1,"nz-card",2),l.YNc(2,F,2,1,"ng-template",null,3,l.W1O),l.YNc(4,V,2,2,"ng-template",null,4,l.W1O),l.TgZ(6,"nz-descriptions",5)(7,"nz-descriptions-item",6),l._uU(8),l.qZA(),l.TgZ(9,"nz-descriptions-item",7),l._uU(10),l.qZA(),l.TgZ(11,"nz-descriptions-item",8),l._uU(12),l.qZA()()(),l.BQk()),2&I){const de=w.ngIf,ae=l.MAs(3),Z=l.MAs(5);l.xp6(1),l.Q6J("nzTitle",ae)("nzExtra",Z),l.xp6(5),l.Q6J("nzColumn",2),l.xp6(2),l.hij(" ",de.assertionCount," "),l.xp6(2),l.hij(" ",de.evidenceItemCount," "),l.xp6(2),l.hij(" ",de.molecularProfileCount," ")}}class e{constructor(w){this.gql=w}ngOnInit(){if(null==this.phenotypeId)throw new Error("cvc-phenotype-popover requires valid phenotypeId input.");this.phenotype$=this.gql.watch({phenotypeId:this.phenotypeId}).valueChanges.pipe((0,o.U)(({data:w})=>w?.phenotypePopover),(0,g.h)(t.ep))}}e.\u0275fac=function(w){return new(w||e)(l.Y36(s.OHm))},e.\u0275cmp=l.Xpm({type:e,selectors:[["cvc-phenotype-popover"]],inputs:{phenotypeId:"phenotypeId"},decls:3,vars:3,consts:[["id","popover-content"],[4,"ngIf"],["nzBordered","false","id","card-content",3,"nzTitle","nzExtra"],["cardTitle",""],["linkout",""],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","Assertions","nzSpan","2"],["nzTitle","Evidence","nzSpan","2"],["nzTitle","Molecular Profiles","nzSpan","2"],["nz-icon","","nzType","civic-phenotype","nzTheme","twotone","nzTwotoneColor","#2A63B6"],["tooltip","View in the Human Phenotype Ontology",3,"href"]],template:function(w,de){1&w&&(l.TgZ(0,"div",0),l.YNc(1,E,13,6,"ng-container",1),l.ALo(2,"ngrxPush"),l.qZA()),2&w&&(l.xp6(1),l.Q6J("ngIf",l.lcZ(2,1,de.phenotype$)))},dependencies:[L.O5,R.Ls,T.bd,M.l,b.R7,b.uj,O.fM],styles:["[_nghost-%COMP%]{display:block;margin:-8px -12px}[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}[_nghost-%COMP%]     .ant-descriptions-view{border:none}[_nghost-%COMP%]     #entity-child-counts{border-top:1px solid #f0f0f0;padding:8px}[_nghost-%COMP%]     #entity-child-counts nz-space{width:100%}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child nz-tag{margin-right:0}.popover-text[_ngcontent-%COMP%]{width:100%;padding:8px;border-bottom:1px solid #f0f0f0}#popover-content[_ngcontent-%COMP%]{min-width:350px;max-width:500px;min-height:125px}"]})},1028:(Et,Me,a)=>{a.d(Me,{I:()=>T});var t=a(6895),o=a(2635),g=a(1971),l=a(4989),s=a(9194),L=a(1102),R=a(4650);class T{}T.\u0275fac=function(b){return new(b||T)},T.\u0275mod=R.oAB({type:T}),T.\u0275inj=R.cJS({imports:[t.ez,o._N,o.pP,L.PV,g.vh,l.X,s.q6]})},3172:(Et,Me,a)=>{a.d(Me,{i:()=>Z});var t=a(6654),o=a(4650),g=a(6895),l=a(9116),s=a(6672),L=a(6581),R=a(1102),T=a(8305),M=a(160);function b(U,N){}function O(U,N){if(1&U&&(o.ynx(0),o.TgZ(1,"a",5),o.YNc(2,b,0,0,"ng-template",6),o.qZA(),o.BQk()),2&U){const q=o.oxw(),Y=o.MAs(2);o.xp6(1),o.Q6J("routerLink",q.phenotype.link),o.xp6(1),o.Q6J("ngTemplateOutlet",Y)}}function F(U,N){}function V(U,N){if(1&U&&o._UZ(0,"cvc-phenotype-popover",9),2&U){const q=o.oxw(2);o.Q6J("phenotypeId",q.phenotype.id)}}function E(U,N){if(1&U){const q=o.EpF();o.TgZ(0,"nz-tag",7),o.NdJ("nzOnClose",function(k){o.CHM(q);const me=o.oxw();return o.KtG(me.itemClosed(k))}),o.YNc(1,F,0,0,"ng-template",6),o.qZA(),o.YNc(2,V,1,1,"ng-template",null,8,o.W1O)}if(2&U){const q=o.MAs(3),Y=o.oxw(),k=o.MAs(8);o.Q6J("nzPopoverMouseEnterDelay",Y.onCloseClicked?0:.5)("nzPopoverContent",q)("nzPopoverTrigger",Y.enablePopover?"hover":null)("nzMode",Y.onCloseClicked?"closeable":"default"),o.xp6(1),o.Q6J("ngTemplateOutlet",k)}}function e(U,N){}function I(U,N){if(1&U){const q=o.EpF();o.TgZ(0,"nz-tag",10),o.NdJ("nzOnClose",function(k){o.CHM(q);const me=o.oxw();return o.KtG(me.itemClosed(k))}),o.YNc(1,e,0,0,"ng-template",6),o.qZA()}if(2&U){const q=o.oxw(),Y=o.MAs(8);o.Q6J("nzMode",q.onCloseClicked?"closeable":"default"),o.xp6(1),o.Q6J("ngTemplateOutlet",Y)}}function w(U,N){}function de(U,N){if(1&U&&o.YNc(0,w,0,0,"ng-template",6),2&U){o.oxw();const q=o.MAs(2);o.Q6J("ngTemplateOutlet",q)}}function ae(U,N){if(1&U&&(o._UZ(0,"i",11),o.ALo(1,"entityColor"),o._uU(2)),2&U){const q=o.oxw();o.Q6J("nzTwotoneColor",o.lcZ(1,2,"Phenotype")),o.xp6(2),o.hij(" ",q.phenotype.name,"\n")}}class Z extends t.a{constructor(){super(...arguments),this.enablePopover=!0}set phenotype(N){if(!N)throw new Error("phenotype-tag phentype input requires LinkablePhenotype.");this._phenotype=N}get phenotype(){return this._phenotype}idFunction(){return this.phenotype.id}}Z.\u0275fac=function(){let U;return function(q){return(U||(U=o.n5z(Z)))(q||Z)}}(),Z.\u0275cmp=o.Xpm({type:Z,selectors:[["cvc-phenotype-tag"]],inputs:{phenotype:"phenotype",enablePopover:"enablePopover"},features:[o.qOj],decls:9,vars:2,consts:[[4,"ngIf","ngIfElse"],["tag",""],["noPopover",""],["unlinked",""],["tagContent",""],[3,"routerLink"],[3,"ngTemplateOutlet"],["nz-popover","","nzPopoverPlacement","right",3,"nzPopoverMouseEnterDelay","nzPopoverContent","nzPopoverTrigger","nzMode","nzOnClose"],["phenotypePopover",""],[3,"phenotypeId"],[3,"nzMode","nzOnClose"],["nz-icon","","nzTheme","twotone","nzType","civic-phenotype",3,"nzTwotoneColor"]],template:function(N,q){if(1&N&&(o.YNc(0,O,3,2,"ng-container",0),o.YNc(1,E,4,5,"ng-template",null,1,o.W1O),o.YNc(3,I,2,2,"ng-template",null,2,o.W1O),o.YNc(5,de,1,1,"ng-template",null,3,o.W1O),o.YNc(7,ae,3,4,"ng-template",null,4,o.W1O)),2&N){const Y=o.MAs(6);o.Q6J("ngIf",q.linked)("ngIfElse",Y)}},dependencies:[g.O5,g.tP,l.rH,s.j,L.lU,R.Ls,T.S,M.a],styles:["[_nghost-%COMP%]{display:block}"],changeDetection:0})},3973:(Et,Me,a)=>{a.d(Me,{y:()=>M});var t=a(6895),o=a(9116),g=a(9444),l=a(1102),s=a(6581),L=a(6672),R=a(1028),T=a(4650);class M{}M.\u0275fac=function(O){return new(O||M)},M.\u0275mod=T.oAB({type:M}),M.\u0275inj=T.cJS({imports:[t.ez,o.Bz,L.X,s.$6,l.PV,R.I,g.s]})},1730:(Et,Me,a)=>{a.d(Me,{b:()=>M});var t=a(9771),o=a(4650),g=a(6895);const l=function(b){return{background:b}};function s(b,O){if(1&b&&o._UZ(0,"div",3),2&b){const F=o.oxw();o.Q6J("ngStyle",o.VKq(1,l,F.flagColor))}}function L(b,O){if(1&b&&o._UZ(0,"div",4),2&b){const F=o.oxw();o.Q6J("ngStyle",o.VKq(1,l,F.entityColor))}}function R(b,O){if(1&b&&o._UZ(0,"div",5),2&b){const F=o.oxw();o.Q6J("ngStyle",o.VKq(1,l,F.entityColor))}}class M{constructor(){this.hasRevisions=!1,this.flagged=!1,this.hasComments=!1,this.entityColor="#AAA",this.flagColor=(0,t.f)("Flag")}}M.\u0275fac=function(O){return new(O||M)},M.\u0275cmp=o.Xpm({type:M,selectors:[["cvc-icon-badges"]],inputs:{hasRevisions:"hasRevisions",flagged:"flagged",hasComments:"hasComments",entityColor:"entityColor"},ngContentSelectors:["*"],decls:4,vars:3,consts:[["class","cvc-badge badge-flags",3,"ngStyle",4,"ngIf"],["class","cvc-badge badge-revisions",3,"ngStyle",4,"ngIf"],["class","cvc-badge badge-comments",3,"ngStyle",4,"ngIf"],[1,"cvc-badge","badge-flags",3,"ngStyle"],[1,"cvc-badge","badge-revisions",3,"ngStyle"],[1,"cvc-badge","badge-comments",3,"ngStyle"]],template:function(O,F){1&O&&(o.F$t(),o.Hsn(0),o.YNc(1,s,1,3,"div",0),o.YNc(2,L,1,3,"div",1),o.YNc(3,R,1,3,"div",2)),2&O&&(o.xp6(1),o.Q6J("ngIf",F.flagged),o.xp6(1),o.Q6J("ngIf",F.hasRevisions),o.xp6(1),o.Q6J("ngIf",F.hasComments))},dependencies:[g.O5,g.PC],styles:["[_nghost-%COMP%]{display:inline-block;position:relative;line-height:1}.cvc-badge[_ngcontent-%COMP%]{position:absolute;z-index:auto;width:4px;min-width:4px;height:4px;border-radius:100%;box-shadow:0 0 0 1px #fff;background:#aaa}.cvc-badge.badge-revisions[_ngcontent-%COMP%]{top:.5px;right:.5px;transform:translate(50%,-50%)}.cvc-badge.badge-flags[_ngcontent-%COMP%]{top:.5px;left:.5px;transform:translate(-50%,-50%)}.cvc-badge.badge-comments[_ngcontent-%COMP%]{bottom:.5px;right:.5px;transform:translate(50%,50%)}"],changeDetection:0})},6429:(Et,Me,a)=>{a.d(Me,{C:()=>l});var t=a(6895),o=a(9444),g=a(4650);class l{}l.\u0275fac=function(L){return new(L||l)},l.\u0275mod=g.oAB({type:l}),l.\u0275inj=g.cJS({imports:[t.ez,o.s]})},6550:(Et,Me,a)=>{a.d(Me,{l:()=>L});var t=a(4650),o=a(7570),g=a(6672),l=a(1102);class L{set href(T){if(!T)throw new Error("link-tag link Input requires string.");this._href=T}get href(){return this._href?this._href:""}}L.\u0275fac=function(T){return new(T||L)},L.\u0275cmp=t.Xpm({type:L,selectors:[["cvc-link-tag"]],inputs:{href:"href",tooltip:"tooltip",iconName:"iconName"},ngContentSelectors:["*"],decls:4,vars:4,consts:[["target","_blank",3,"href"],["nzColor","default","nz-tooltip","",3,"nzTooltipTitle","nzTooltipTrigger"],["nz-icon","","nzTheme","outline",3,"nzType"]],template:function(T,M){1&T&&(t.F$t(),t.TgZ(0,"a",0)(1,"nz-tag",1),t._UZ(2,"i",2),t.Hsn(3),t.qZA()()),2&T&&(t.Q6J("href",M.href,t.LSH),t.xp6(1),t.Q6J("nzTooltipTitle",M.tooltip)("nzTooltipTrigger",M.tooltip?"hover":null),t.xp6(1),t.Q6J("nzType",M.iconName?M.iconName:"link"))},dependencies:[o.SY,g.j,l.Ls],encapsulation:2})},4989:(Et,Me,a)=>{a.d(Me,{X:()=>L});var t=a(6895),o=a(7570),g=a(6672),l=a(1102),s=a(4650);class L{}L.\u0275fac=function(T){return new(T||L)},L.\u0275mod=s.oAB({type:L}),L.\u0275inj=s.cJS({imports:[t.ez,o.cg,g.X,l.PV]})},2994:(Et,Me,a)=>{a.d(Me,{y:()=>L});var t=a(6895),o=a(2635),g=a(1102),l=a(6672),s=a(4650);class L{}L.\u0275fac=function(T){return new(T||L)},L.\u0275mod=s.oAB({type:L}),L.\u0275inj=s.cJS({imports:[t.ez,o._N,o.pP,l.X,g.PV]})},3388:(Et,Me,a)=>{a.d(Me,{H:()=>b});var t=a(1135),o=a(7445),g=a(590),l=a(4650),s=a(6895),L=a(6672),R=a(1102),T=a(2635);function M(O,F){1&O&&(l.TgZ(0,"nz-tag",1),l._UZ(1,"i",2),l.TgZ(2,"span"),l._uU(3,"End of results reached"),l.qZA()())}class b{set cvcShowTag(F){void 0!==F&&F&&this.showTag()}constructor(F){this.cdr=F,this.showTag$=new t.X(!1)}showTag(){!1===this.showTag$.getValue()&&(this.showTag$.next(!0),(0,o.F)(3e3).pipe((0,g.P)()).subscribe(()=>{this.showTag$.next(!1),this.cdr.detectChanges()}))}}b.\u0275fac=function(F){return new(F||b)(l.Y36(l.sBO))},b.\u0275cmp=l.Xpm({type:b,selectors:[["cvc-no-more-rows"]],inputs:{cvcShowTag:"cvcShowTag"},decls:2,vars:3,consts:[["nzColor","warning",4,"ngIf"],["nzColor","warning"],["nz-icon","","nzType","exclamation-circle"]],template:function(F,V){1&F&&(l.YNc(0,M,4,0,"nz-tag",0),l.ALo(1,"ngrxPush")),2&F&&l.Q6J("ngIf",l.lcZ(1,1,V.showTag$))},dependencies:[s.O5,L.j,R.Ls,T.fM],encapsulation:2,changeDetection:0})},4590:(Et,Me,a)=>{a.d(Me,{h:()=>O});var t=a(4650),o=a(6895),g=a(6672),l=a(1102);function s(F,V){1&F&&t._UZ(0,"i",7)}function L(F,V){1&F&&t._UZ(0,"i",8)}function R(F,V){1&F&&t._UZ(0,"i",9)}function T(F,V){1&F&&t._UZ(0,"i",10)}function M(F,V){1&F&&t._UZ(0,"i",10)}function b(F,V){if(1&F&&(t.TgZ(0,"nz-tag",1),t.ynx(1,2),t.YNc(2,s,1,0,"i",3),t.YNc(3,L,1,0,"i",4),t.YNc(4,R,1,0,"i",5),t.YNc(5,T,1,0,"i",6),t.YNc(6,M,1,0,"i",6),t.BQk(),t._uU(7),t.ALo(8,"titlecase"),t.qZA()),2&F){const E=t.oxw();t.Q6J("nzColor",E.tagStatus),t.xp6(1),t.Q6J("ngSwitch",E.tagStatus),t.xp6(1),t.Q6J("ngSwitchCase","success"),t.xp6(1),t.Q6J("ngSwitchCase","error"),t.xp6(1),t.Q6J("ngSwitchCase","warning"),t.xp6(1),t.Q6J("ngSwitchCase","processing"),t.xp6(1),t.Q6J("ngSwitchCase","default"),t.xp6(1),t.hij(" ",t.lcZ(8,8,E.status),"\n")}}class O{constructor(){this.statusColorMap={ACCEPTED:"success",REJECTED:"error",SUBMITTED:"warning",NEW:"processing",SUPERSEDED:"default",OPEN:"error",RESOLVED:"default"}}set status(V){this._status=V,V&&(this.tagStatus=this.statusColorMap[V])}get status(){return this._status}ngOnInit(){if(void 0===this.status)throw new Error("Must pass a valid EvidenceStatus or RevisionStatus to cvc-status-tag component")}}O.\u0275fac=function(V){return new(V||O)},O.\u0275cmp=t.Xpm({type:O,selectors:[["cvc-status-tag"]],inputs:{status:"status"},decls:1,vars:1,consts:[[3,"nzColor",4,"ngIf"],[3,"nzColor"],[3,"ngSwitch"],["nz-icon","","nzType","check-circle",4,"ngSwitchCase"],["nz-icon","","nzType","close-circle",4,"ngSwitchCase"],["nz-icon","","nzType","exclamation-circle",4,"ngSwitchCase"],["nz-icon","",4,"ngSwitchCase"],["nz-icon","","nzType","check-circle"],["nz-icon","","nzType","close-circle"],["nz-icon","","nzType","exclamation-circle"],["nz-icon",""]],template:function(V,E){1&V&&t.YNc(0,b,9,10,"nz-tag",0),2&V&&t.Q6J("ngIf",E.tagStatus)},dependencies:[o.O5,o.RF,o.n9,g.j,l.Ls,o.rS],encapsulation:2})},592:(Et,Me,a)=>{a.d(Me,{x:()=>s});var t=a(6895),o=a(6672),g=a(1102),l=a(4650);class s{}s.\u0275fac=function(R){return new(R||s)},s.\u0275mod=l.oAB({type:s}),s.\u0275inj=l.cJS({imports:[t.ez,o.X,g.PV]})},6715:(Et,Me,a)=>{a.d(Me,{$:()=>g});var t=a(4650);class g{constructor(){}ngOnInit(){}}g.\u0275fac=function(s){return new(s||g)},g.\u0275cmp=t.Xpm({type:g,selectors:[["cvc-tag-list"]],hostVars:4,hostBindings:function(s,L){2&s&&t.ekj("xs","xs"===L.size||!L.size)("sm","sm"===L.size)},inputs:{size:"size"},ngContentSelectors:["*"],decls:2,vars:0,consts:[[1,"tag-list"]],template:function(s,L){1&s&&(t.F$t(),t.TgZ(0,"div",0),t.Hsn(1),t.qZA())},styles:["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]   .tag-list[_ngcontent-%COMP%]    >*{display:inline-block}[_nghost-%COMP%]   .tag-list[_ngcontent-%COMP%]    >*:last-child{margin-right:-8px}.xs[_nghost-%COMP%]{margin-bottom:-4px}.xs[_nghost-%COMP%]   .tag-list[_ngcontent-%COMP%]    >*{margin-bottom:4px}.sm[_nghost-%COMP%]{margin-bottom:-8px}.sm[_nghost-%COMP%]   .tag-list[_ngcontent-%COMP%]    >*{margin-bottom:8px}"],changeDetection:0})},897:(Et,Me,a)=>{a.d(Me,{$:()=>g});var t=a(6895),o=a(4650);class g{}g.\u0275fac=function(s){return new(s||g)},g.\u0275mod=o.oAB({type:g}),g.\u0275inj=o.cJS({imports:[t.ez]})},2614:(Et,Me,a)=>{a.d(Me,{p:()=>Z});var t=a(3240),o=a(4004),g=a(9300),l=a(4650),s=a(7630),L=a(6895),R=a(1102),T=a(1971),M=a(9194),b=a(6550),O=a(6715),F=a(4049),V=a(2635);function E(U,N){if(1&U&&(l._UZ(0,"i",11),l._uU(1)),2&U){const q=l.oxw().ngIf;l.xp6(1),l.AsE(" ",q.displayType,":\xa0",q.citation," ")}}function e(U,N){if(1&U&&(l.TgZ(0,"cvc-link-tag",12),l._uU(1),l.qZA()),2&U){const q=l.oxw().ngIf;l.Q6J("href",q.sourceUrl)("tooltip","View on "+q.displayType),l.xp6(1),l.hij(" ",q.displayType+":"+q.citationId," ")}}function I(U,N){1&U&&l._UZ(0,"cvc-clinical-trial-tag",14),2&U&&l.Q6J("clinicalTrial",N.$implicit)("enablePopover",!1)}function w(U,N){if(1&U&&(l.ynx(0),l.TgZ(1,"cvc-tag-list"),l.YNc(2,I,1,2,"cvc-clinical-trial-tag",13),l.qZA(),l.BQk()),2&U){const q=l.oxw().ngIf;l.xp6(2),l.Q6J("ngForOf",q.clinicalTrials)}}function de(U,N){1&U&&l._uU(0," -- ")}function ae(U,N){if(1&U&&(l.ynx(0),l.TgZ(1,"nz-card",2),l.YNc(2,E,2,2,"ng-template",null,3,l.W1O),l.YNc(4,e,2,3,"ng-template",null,4,l.W1O),l.TgZ(6,"nz-descriptions",5)(7,"nz-descriptions-item",6),l._uU(8),l.qZA(),l.TgZ(9,"nz-descriptions-item",7),l._uU(10),l.qZA(),l.TgZ(11,"nz-descriptions-item",8),l.YNc(12,w,3,1,"ng-container",9),l.YNc(13,de,1,0,"ng-template",null,10,l.W1O),l.qZA()()(),l.BQk()),2&U){const q=N.ngIf,Y=l.MAs(3),k=l.MAs(5),me=l.MAs(14);l.xp6(1),l.Q6J("nzTitle",Y)("nzExtra",k),l.xp6(5),l.Q6J("nzColumn",2),l.xp6(2),l.hij(" ",q.name," "),l.xp6(2),l.hij(" ",q.evidenceItemCount," "),l.xp6(2),l.Q6J("ngIf",q.clinicalTrials&&q.clinicalTrials.length>0)("ngIfElse",me)}}class Z{constructor(N){this.gql=N}ngOnInit(){if(null==this.sourceId)throw new Error("cvc-source-popover requires valid sourceId input.");this.source$=this.gql.watch({sourceId:this.sourceId}).valueChanges.pipe((0,o.U)(({data:N})=>N?.sourcePopover),(0,g.h)(t.ep))}}Z.\u0275fac=function(N){return new(N||Z)(l.Y36(s.TiL))},Z.\u0275cmp=l.Xpm({type:Z,selectors:[["cvc-source-popover"]],inputs:{sourceId:"sourceId"},decls:3,vars:3,consts:[["id","popover-content"],[4,"ngIf"],["nzBordered","false","id","card-content",3,"nzTitle","nzExtra"],["cardTitle",""],["linkout",""],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","Title","nzSpan","2"],["nzTitle","Evidence","nzSpan","2"],["nzTitle","Clinical Trials:","nzSpan","2"],[4,"ngIf","ngIfElse"],["noTrials",""],["nz-icon","","nzType","civic-source","nzTheme","twotone","nzTwotoneColor","#F9BA45"],[3,"href","tooltip"],[3,"clinicalTrial","enablePopover",4,"ngFor","ngForOf"],[3,"clinicalTrial","enablePopover"]],template:function(N,q){1&N&&(l.TgZ(0,"div",0),l.YNc(1,ae,15,7,"ng-container",1),l.ALo(2,"ngrxPush"),l.qZA()),2&N&&(l.xp6(1),l.Q6J("ngIf",l.lcZ(2,1,q.source$)))},dependencies:[L.sg,L.O5,R.Ls,T.bd,M.R7,M.uj,b.l,O.$,F.G,V.fM],styles:["[_nghost-%COMP%]{display:block;margin:-8px -12px}[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}[_nghost-%COMP%]     .ant-descriptions-view{border:none}[_nghost-%COMP%]     #entity-child-counts{border-top:1px solid #f0f0f0;padding:8px}[_nghost-%COMP%]     #entity-child-counts nz-space{width:100%}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child nz-tag{margin-right:0}.popover-text[_ngcontent-%COMP%]{width:100%;padding:8px;border-bottom:1px solid #f0f0f0}#popover-content[_ngcontent-%COMP%]{min-width:350px;max-width:500px;min-height:125px}"]})},9736:(Et,Me,a)=>{a.d(Me,{n:()=>b});var t=a(6895),o=a(1971),g=a(4989),l=a(9194),s=a(897),L=a(2635),R=a(5453),T=a(1102),M=a(4650);class b{}b.\u0275fac=function(F){return new(F||b)},b.\u0275mod=M.oAB({type:b}),b.\u0275inj=M.cJS({imports:[t.ez,L._N,L.pP,T.PV,o.vh,l.q6,g.X,s.$,R.N]})},783:(Et,Me,a)=>{a.d(Me,{T:()=>Y});var t=a(6654),o=a(4650),g=a(7742),l=a(6895),s=a(9116),L=a(1102),R=a(6581),T=a(6672),M=a(2614),b=a(4557),O=a(160);function F(k,me){}function V(k,me){if(1&k&&(o.ynx(0),o.TgZ(1,"a",4),o.YNc(2,F,0,0,"ng-template",5),o.qZA(),o.BQk()),2&k){const fe=o.oxw(),ne=o.MAs(2);o.xp6(1),o.Q6J("routerLink",fe.source.link),o.xp6(1),o.Q6J("ngTemplateOutlet",ne)}}function E(k,me){}function e(k,me){if(1&k&&o._UZ(0,"cvc-source-popover",8),2&k){const fe=o.oxw(2);o.Q6J("sourceId",fe.source.id)}}function I(k,me){if(1&k){const fe=o.EpF();o.TgZ(0,"nz-tag",6),o.NdJ("nzPopoverVisibleChange",function(Ce){o.CHM(fe);const H=o.oxw();return o.KtG(H.popoverVisible=Ce)})("nzOnClose",function(Ce){o.CHM(fe);const H=o.oxw();return o.KtG(H.itemClosed(Ce))}),o.YNc(1,E,0,0,"ng-template",5),o.qZA(),o.YNc(2,e,1,1,"ng-template",null,7,o.W1O)}if(2&k){const fe=o.MAs(3),ne=o.oxw(),Ce=o.MAs(6);o.Q6J("nzPopoverMouseEnterDelay",ne.onCloseClicked?0:.5)("nzPopoverContent",fe)("nzPopoverTrigger",ne.enablePopover?"hover":null)("nzPopoverVisible",ne.popoverVisible)("nzMode",ne.onCloseClicked?"closeable":"default"),o.xp6(1),o.Q6J("ngTemplateOutlet",Ce)}}function w(k,me){}function de(k,me){if(1&k&&o.YNc(0,w,0,0,"ng-template",5),2&k){o.oxw();const fe=o.MAs(2);o.Q6J("ngTemplateOutlet",fe)}}function ae(k,me){if(1&k&&(o.ynx(0),o._uU(1),o.ALo(2,"truncate"),o.BQk()),2&k){const fe=o.oxw(3);o.xp6(1),o.hij(" ",o.xi3(2,1,fe.displayName,50)," ")}}function Z(k,me){if(1&k&&(o.ynx(0),o._uU(1),o.BQk()),2&k){const fe=o.oxw(3);o.xp6(1),o.hij(" ",fe.displayName," ")}}function U(k,me){if(1&k&&(o.ynx(0),o.YNc(1,ae,3,4,"ng-container",11),o.YNc(2,Z,2,1,"ng-container",11),o.BQk()),2&k){const fe=o.oxw(2);o.xp6(1),o.Q6J("ngIf",fe.truncateLongName),o.xp6(1),o.Q6J("ngIf",!fe.truncateLongName)}}function N(k,me){if(1&k&&o._uU(0),2&k){const fe=o.oxw(2);o.hij(" SID:",fe.source.id," ")}}function q(k,me){if(1&k&&(o._UZ(0,"i",9),o.ALo(1,"entityColor"),o.YNc(2,U,3,2,"ng-container",0),o.YNc(3,N,1,1,"ng-template",null,10,o.W1O)),2&k){const fe=o.MAs(4),ne=o.oxw();o.Q6J("nzTwotoneColor",o.lcZ(1,3,"Source")),o.xp6(2),o.Q6J("ngIf","normal"===ne.mode)("ngIfElse",fe)}}class Y extends t.a{set source(me){if(!me)throw new Error("source-tag source input requires SourceWithDisplayName or SourceWithCitation.");this._source=me,this.displayName="displayName"in this.source?this.source.displayName:this.sourceTypeDisplay.transform(this.source.sourceType)+": "+this.source.citation}get source(){return this._source}constructor(me){super(),this.sourceTypeDisplay=me,this.enablePopover=!0,this.linked=!0,this.mode="normal",this.truncateLongName=!1}idFunction(){return this.source.id}}Y.\u0275fac=function(me){return new(me||Y)(o.Y36(g.l))},Y.\u0275cmp=o.Xpm({type:Y,selectors:[["cvc-source-tag"]],inputs:{source:"source",enablePopover:"enablePopover",linked:"linked",mode:"mode",truncateLongName:"truncateLongName"},features:[o.qOj],decls:7,vars:2,consts:[[4,"ngIf","ngIfElse"],["tag",""],["unlinked",""],["tagContent",""],[3,"routerLink"],[3,"ngTemplateOutlet"],["nz-popover","","nzPopoverPlacement","right",3,"nzPopoverMouseEnterDelay","nzPopoverContent","nzPopoverTrigger","nzPopoverVisible","nzMode","nzPopoverVisibleChange","nzOnClose"],["sourcePopover",""],[3,"sourceId"],["nz-icon","","nzTheme","twotone","nzType","civic-source",3,"nzTwotoneColor"],["concise",""],[4,"ngIf"]],template:function(me,fe){if(1&me&&(o.YNc(0,V,3,2,"ng-container",0),o.YNc(1,I,4,6,"ng-template",null,1,o.W1O),o.YNc(3,de,1,1,"ng-template",null,2,o.W1O),o.YNc(5,q,5,5,"ng-template",null,3,o.W1O)),2&me){const ne=o.MAs(4);o.Q6J("ngIf",fe.linked)("ngIfElse",ne)}},dependencies:[l.O5,l.tP,s.rH,L.Ls,R.lU,T.j,M.p,b.W,O.a],styles:["[_nghost-%COMP%]{display:inline-block}"],changeDetection:0})},2811:(Et,Me,a)=>{a.d(Me,{s:()=>M});var t=a(6895),o=a(6581),g=a(9116),l=a(9736),s=a(6672),L=a(1102),R=a(9444),T=a(4650);class M{}M.\u0275fac=function(O){return new(O||M)},M.\u0275mod=T.oAB({type:M}),M.\u0275inj=T.cJS({imports:[t.ez,g.Bz,L.PV,o.$6,s.X,l.n,R.s]})},6818:(Et,Me,a)=>{a.d(Me,{a:()=>Y});var t=a(4004),o=a(9300),g=a(3240),l=a(4650),s=a(7630),L=a(6895),R=a(1971),T=a(9194),M=a(1102),b=a(8823),O=a(6672),F=a(7570),V=a(6550),E=a(2635),e=a(4557);function I(k,me){if(1&k&&(l._UZ(0,"i",12),l._uU(1),l.ALo(2,"truncate")),2&k){const fe=l.oxw().ngIf;l.xp6(1),l.hij(" ",l.xi3(2,1,fe.name,50)," ")}}function w(k,me){if(1&k&&(l.TgZ(0,"cvc-link-tag",14),l._uU(1),l.qZA()),2&k){const fe=l.oxw(2).ngIf;l.Q6J("href",fe.therapyUrl),l.xp6(1),l.hij(" ",fe.ncitId," ")}}function de(k,me){if(1&k&&l.YNc(0,w,2,2,"cvc-link-tag",13),2&k){const fe=l.oxw().ngIf,ne=l.MAs(7);l.Q6J("ngIf",fe.ncitId)("ngIfElse",ne)}}function ae(k,me){1&k&&(l.TgZ(0,"span",15),l._uU(1,"No NCIt ID"),l.qZA())}function Z(k,me){if(1&k&&(l.TgZ(0,"nz-descriptions-item",16),l._uU(1),l.qZA()),2&k){const fe=l.oxw().ngIf;l.xp6(1),l.hij(" ",fe.name," ")}}function U(k,me){if(1&k&&(l.TgZ(0,"nz-tag",19),l._uU(1),l.ALo(2,"truncate"),l.qZA()),2&k){const fe=me.$implicit;l.Q6J("nzTooltipTitle",fe),l.xp6(1),l.Oqu(l.lcZ(2,2,fe))}}function N(k,me){if(1&k&&(l.TgZ(0,"nz-descriptions-item",17),l.YNc(1,U,3,4,"nz-tag",18),l.qZA()),2&k){const fe=l.oxw().ngIf;l.xp6(1),l.Q6J("ngForOf",fe.therapyAliases)}}function q(k,me){if(1&k&&(l.ynx(0),l.TgZ(1,"nz-card",2),l.YNc(2,I,3,4,"ng-template",null,3,l.W1O),l.YNc(4,de,1,2,"ng-template",null,4,l.W1O),l.YNc(6,ae,2,0,"ng-template",null,5,l.W1O),l.TgZ(8,"nz-descriptions",6),l.YNc(9,Z,2,1,"nz-descriptions-item",7),l.YNc(10,N,2,1,"nz-descriptions-item",8),l.TgZ(11,"nz-descriptions-item",9),l._uU(12),l.qZA(),l.TgZ(13,"nz-descriptions-item",10),l._uU(14),l.qZA(),l.TgZ(15,"nz-descriptions-item",11),l._uU(16),l.qZA()()(),l.BQk()),2&k){const fe=me.ngIf,ne=l.MAs(3),Ce=l.MAs(5);l.xp6(1),l.Q6J("nzTitle",ne)("nzExtra",Ce),l.xp6(7),l.Q6J("nzColumn",2),l.xp6(1),l.Q6J("ngIf",fe.name.length>50),l.xp6(1),l.Q6J("ngIf",fe.therapyAliases.length>0),l.xp6(2),l.hij(" ",fe.assertionCount," "),l.xp6(2),l.hij(" ",fe.evidenceItemCount," "),l.xp6(2),l.hij(" ",fe.molecularProfileCount," ")}}class Y{constructor(me){this.gql=me}ngOnInit(){if(null==this.therapyId)throw new Error("cvc-therapy-popover requires valid therapyId input.");this.therapy$=this.gql.watch({therapyId:this.therapyId}).valueChanges.pipe((0,t.U)(({data:me})=>me?.therapyPopover),(0,o.h)(g.ep))}}Y.\u0275fac=function(me){return new(me||Y)(l.Y36(s.L8L))},Y.\u0275cmp=l.Xpm({type:Y,selectors:[["cvc-therapy-popover"]],inputs:{therapyId:"therapyId"},decls:3,vars:3,consts:[["id","popover-content"],[4,"ngIf"],["nzBordered","false","id","card-content",3,"nzTitle","nzExtra"],["cardTitle",""],["linkout",""],["noNcitId",""],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","Name","nzSpan","2",4,"ngIf"],["nzTitle","Aliases","nzSpan","2",4,"ngIf"],["nzTitle","Assertions","nzSpan","2"],["nzTitle","Evidence","nzSpan","2"],["nzTitle","Molecular Profiles","nzSpan","2"],["nz-icon","","nzType","civic-therapy","nzTheme","twotone","nzTwotoneColor","#AC3996"],["tooltip","View on NCI Thesaurus",3,"href",4,"ngIf","ngIfElse"],["tooltip","View on NCI Thesaurus",3,"href"],["nz-typography","","nzType","secondary"],["nzTitle","Name","nzSpan","2"],["nzTitle","Aliases","nzSpan","2"],["nz-tooltip","",3,"nzTooltipTitle",4,"ngFor","ngForOf"],["nz-tooltip","",3,"nzTooltipTitle"]],template:function(me,fe){1&me&&(l.TgZ(0,"div",0),l.YNc(1,q,17,8,"ng-container",1),l.ALo(2,"ngrxPush"),l.qZA()),2&me&&(l.xp6(1),l.Q6J("ngIf",l.lcZ(2,1,fe.therapy$)))},dependencies:[L.sg,L.O5,R.bd,T.R7,T.uj,M.Ls,b.ZU,O.j,F.SY,V.l,E.fM,e.W],styles:["[_nghost-%COMP%]{display:block;margin:-8px -12px}[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}[_nghost-%COMP%]     .ant-descriptions-view{border:none}[_nghost-%COMP%]     #entity-child-counts{border-top:1px solid #f0f0f0;padding:8px}[_nghost-%COMP%]     #entity-child-counts nz-space{width:100%}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child nz-tag{margin-right:0}.popover-text[_ngcontent-%COMP%]{width:100%;padding:8px;border-bottom:1px solid #f0f0f0}#popover-content[_ngcontent-%COMP%]{min-width:350px;max-width:500px;min-height:125px}"]})},8974:(Et,Me,a)=>{a.d(Me,{s:()=>V});var t=a(6895),o=a(9116),g=a(1971),l=a(9194),s=a(2635),L=a(4989),R=a(1102),T=a(8823),M=a(9444),b=a(6672),O=a(7570),F=a(4650);class V{}V.\u0275fac=function(e){return new(e||V)},V.\u0275mod=F.oAB({type:V}),V.\u0275inj=F.cJS({imports:[t.ez,o.Bz,s._N,s.pP,g.vh,l.q6,R.PV,T.ZJ,b.X,O.cg,L.X,M.s]})},5797:(Et,Me,a)=>{a.d(Me,{T:()=>Z});var t=a(6654),o=a(4650),g=a(6895),l=a(9116),s=a(6672),L=a(6581),R=a(1102),T=a(6818),M=a(4557);function b(U,N){}function O(U,N){if(1&U&&(o.ynx(0),o.TgZ(1,"a",4),o.YNc(2,b,0,0,"ng-template",5),o.qZA(),o.BQk()),2&U){const q=o.oxw(),Y=o.MAs(2);o.xp6(1),o.Q6J("routerLink",q.therapy.link),o.xp6(1),o.Q6J("ngTemplateOutlet",Y)}}function F(U,N){}function V(U,N){if(1&U&&o._UZ(0,"cvc-therapy-popover",8),2&U){const q=o.oxw(2);o.Q6J("therapyId",q.therapy.id)}}function E(U,N){if(1&U){const q=o.EpF();o.TgZ(0,"nz-tag",6),o.NdJ("nzOnClose",function(k){o.CHM(q);const me=o.oxw();return o.KtG(me.itemClosed(k))}),o.YNc(1,F,0,0,"ng-template",5),o.qZA(),o.YNc(2,V,1,1,"ng-template",null,7,o.W1O)}if(2&U){const q=o.MAs(3),Y=o.oxw(),k=o.MAs(6);o.Q6J("nzPopoverMouseEnterDelay",Y.onCloseClicked?0:.5)("nzPopoverContent",q)("nzPopoverTrigger",Y.enablePopover?"hover":null)("nzMode",Y.onCloseClicked?"closeable":"default"),o.xp6(1),o.Q6J("ngTemplateOutlet",k)}}function e(U,N){}function I(U,N){if(1&U&&o.YNc(0,e,0,0,"ng-template",5),2&U){o.oxw();const q=o.MAs(2);o.Q6J("ngTemplateOutlet",q)}}function w(U,N){if(1&U&&(o.ynx(0),o._uU(1),o.ALo(2,"truncate"),o.BQk()),2&U){const q=o.oxw(2);o.xp6(1),o.hij(" ",o.xi3(2,1,q.therapy.name,21)," ")}}function de(U,N){if(1&U&&o._uU(0),2&U){const q=o.oxw(2);o.hij(" ",q.therapy.name," ")}}function ae(U,N){if(1&U&&(o._UZ(0,"i",9),o.YNc(1,w,3,4,"ng-container",0),o.YNc(2,de,1,1,"ng-template",null,10,o.W1O)),2&U){const q=o.MAs(3),Y=o.oxw();o.xp6(1),o.Q6J("ngIf",Y.truncateLongName)("ngIfElse",q)}}class Z extends t.a{constructor(){super(...arguments),this.enablePopover=!0,this.truncateLongName=!1}set therapy(N){if(!N)throw new Error("therapy-tag Input requires LinkableTherapy.");this._therapy=N}get therapy(){return this._therapy}idFunction(){return this.therapy.id}}Z.\u0275fac=function(){let U;return function(q){return(U||(U=o.n5z(Z)))(q||Z)}}(),Z.\u0275cmp=o.Xpm({type:Z,selectors:[["cvc-therapy-tag"]],inputs:{therapy:"therapy",enablePopover:"enablePopover",truncateLongName:"truncateLongName"},features:[o.qOj],decls:7,vars:2,consts:[[4,"ngIf","ngIfElse"],["tag",""],["unlinked",""],["tagContent",""],[3,"routerLink"],[3,"ngTemplateOutlet"],["nz-popover","","nzPopoverPlacement","right",3,"nzPopoverMouseEnterDelay","nzPopoverContent","nzPopoverTrigger","nzMode","nzOnClose"],["therapyPopover",""],[3,"therapyId"],["nz-icon","","nzType","civic-therapy","nzTheme","twotone","nzTwotoneColor","#AC3996"],["fullName",""]],template:function(N,q){if(1&N&&(o.YNc(0,O,3,2,"ng-container",0),o.YNc(1,E,4,5,"ng-template",null,1,o.W1O),o.YNc(3,I,1,1,"ng-template",null,2,o.W1O),o.YNc(5,ae,4,2,"ng-template",null,3,o.W1O)),2&N){const Y=o.MAs(4);o.Q6J("ngIf",q.linked)("ngIfElse",Y)}},dependencies:[g.O5,g.tP,l.rH,s.j,L.lU,R.Ls,T.a,M.W],encapsulation:2,changeDetection:0})},701:(Et,Me,a)=>{a.d(Me,{N:()=>M});var t=a(6895),o=a(9116),g=a(6672),l=a(6581),s=a(1102),L=a(9444),R=a(8974),T=a(4650);class M{}M.\u0275fac=function(O){return new(O||M)},M.\u0275mod=T.oAB({type:M}),M.\u0275inj=T.cJS({imports:[t.ez,o.Bz,g.X,l.$6,s.PV,L.s,R.s]})},403:(Et,Me,a)=>{a.d(Me,{m:()=>fe});var t=a(3240),o=a(4004),g=a(9300),l=a(4650),s=a(7630),L=a(6895),R=a(9116),T=a(1971),M=a(3679),b=a(9194),O=a(6672),F=a(1102),V=a(6903),E=a(3965),e=a(6550),I=a(2635),w=a(160);function de(ne,Ce){if(1&ne&&(l._UZ(0,"i",13),l.ALo(1,"entityColor"),l._uU(2)),2&ne){const H=l.oxw().ngIf;l.Q6J("nzTwotoneColor",l.lcZ(1,2,"Variant")),l.xp6(2),l.hij(" ",H.name," ")}}function ae(ne,Ce){if(1&ne&&l._UZ(0,"cvc-gene-tag",14),2&ne){const H=l.oxw().ngIf;l.Q6J("enablePopover",!1)("gene",H.gene)}}function Z(ne,Ce){if(1&ne&&(l.TgZ(0,"nz-tag"),l._uU(1),l.qZA()),2&ne){const H=Ce.$implicit;l.xp6(1),l.Oqu(H)}}function U(ne,Ce){if(1&ne&&(l.TgZ(0,"nz-descriptions-item",15),l.YNc(1,Z,2,1,"nz-tag",16),l.qZA()),2&ne){const H=l.oxw().ngIf;l.xp6(1),l.Q6J("ngForOf",H.variantAliases)}}function N(ne,Ce){if(1&ne&&(l.TgZ(0,"nz-descriptions-item",17)(1,"cvc-link-tag",18),l._uU(2),l.qZA()()),2&ne){const H=l.oxw().ngIf;l.xp6(1),l.MGl("href","https://reg.genome.network/allele/",H.alleleRegistryId,".html"),l.xp6(1),l.hij(" ",H.alleleRegistryId," ")}}function q(ne,Ce){if(1&ne&&(l.TgZ(0,"a",19)(1,"nz-tag",20),l._UZ(2,"i",21),l._uU(3),l.qZA()()),2&ne){const H=l.oxw().ngIf;l.MGl("routerLink","/variants/",H.id,"/flags"),l.xp6(3),l.hij(" Flags (",H.flags.totalCount,") ")}}function Y(ne,Ce){if(1&ne&&(l.TgZ(0,"a",19)(1,"nz-tag",22),l._UZ(2,"i",23),l._uU(3),l.qZA()()),2&ne){const H=l.oxw().ngIf;l.MGl("routerLink","/variants/",H.id,"/revisions"),l.xp6(3),l.hij(" Revisions (",H.revisions.totalCount,") ")}}function k(ne,Ce){if(1&ne&&(l.TgZ(0,"a",19)(1,"nz-tag",24),l._UZ(2,"i",25),l._uU(3),l.qZA()()),2&ne){const H=l.oxw().ngIf;l.MGl("routerLink","/variants/",H.id,"/comments"),l.xp6(3),l.hij(" Comments (",H.comments.totalCount,") ")}}function me(ne,Ce){if(1&ne&&(l.ynx(0),l.TgZ(1,"nz-card",2),l.YNc(2,de,3,4,"ng-template",null,3,l.W1O),l.YNc(4,ae,1,2,"ng-template",null,4,l.W1O),l.TgZ(6,"nz-descriptions",5),l.YNc(7,U,2,1,"nz-descriptions-item",6),l.YNc(8,N,3,2,"nz-descriptions-item",7),l.TgZ(9,"nz-descriptions-item",8),l._uU(10),l.qZA()(),l.TgZ(11,"nz-row",9)(12,"nz-col",10)(13,"nz-space",11),l.YNc(14,q,4,2,"a",12),l.YNc(15,Y,4,2,"a",12),l.YNc(16,k,4,2,"a",12),l.qZA()()()(),l.BQk()),2&ne){const H=Ce.ngIf,X=l.MAs(3),ve=l.MAs(5);l.xp6(1),l.Q6J("nzTitle",X)("nzExtra",ve),l.xp6(5),l.Q6J("nzColumn",2),l.xp6(1),l.Q6J("ngIf",H.variantAliases.length>0),l.xp6(1),l.Q6J("ngIf",H.alleleRegistryId&&"unregistered"!=H.alleleRegistryId),l.xp6(2),l.hij(" ",H.molecularProfiles.totalCount," ")}}class fe{constructor(Ce){this.gql=Ce}ngOnInit(){if(void 0===this.variantId)throw new Error("Must pass a variant ID into the variant popover component.");this.variant$=this.gql.watch({variantId:this.variantId}).valueChanges.pipe((0,o.U)(({data:Ce})=>Ce?.variant),(0,g.h)(t.ep))}}fe.\u0275fac=function(Ce){return new(Ce||fe)(l.Y36(s.ZYZ))},fe.\u0275cmp=l.Xpm({type:fe,selectors:[["cvc-variant-popover"]],inputs:{variantId:"variantId"},decls:3,vars:3,consts:[["id","popover-content"],[4,"ngIf"],["nzBordered","false","id","card-content",3,"nzTitle","nzExtra"],["cardTitle",""],["gene",""],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","Aliases","nzSpan","2",4,"ngIf"],["nzTitle","Allele Registry ID","nzSpan","2",4,"ngIf"],["nzTitle","Molecular Profiles","nzSpan","2"],["id","entity-child-counts"],["nzSpan","24"],["nzSize","small"],[3,"routerLink",4,"nzSpaceItem"],["nz-icon","","nzTheme","twotone","nzType","civic-variant",3,"nzTwotoneColor"],[3,"enablePopover","gene"],["nzTitle","Aliases","nzSpan","2"],[4,"ngFor","ngForOf"],["nzTitle","Allele Registry ID","nzSpan","2"],["tooltip","View on the ClinGen Allele Registry",3,"href"],[3,"routerLink"],["nzColor","red"],["nz-icon","","nzType","civic-flag"],["nzColor","orange"],["nz-icon","","nzType","civic-revision"],["nzColor","blue"],["nz-icon","","nzType","civic-comment"]],template:function(Ce,H){1&Ce&&(l.TgZ(0,"div",0),l.YNc(1,me,17,6,"ng-container",1),l.ALo(2,"ngrxPush"),l.qZA()),2&Ce&&(l.xp6(1),l.Q6J("ngIf",l.lcZ(2,1,H.variant$)))},dependencies:[L.sg,L.O5,R.rH,T.bd,M.t3,M.SK,b.R7,b.uj,O.j,F.Ls,V.NU,V.$1,E.H,e.l,I.fM,w.a],styles:["[_nghost-%COMP%]{display:block;margin:-8px -12px}[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}[_nghost-%COMP%]     .ant-descriptions-view{border:none}[_nghost-%COMP%]     #entity-child-counts{border-top:1px solid #f0f0f0;padding:8px}[_nghost-%COMP%]     #entity-child-counts nz-space{width:100%}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child nz-tag{margin-right:0}.popover-text[_ngcontent-%COMP%]{width:100%;padding:8px;border-bottom:1px solid #f0f0f0}#popover-content[_ngcontent-%COMP%]{min-width:350px;max-width:500px;min-height:125px}"]})},2767:(Et,Me,a)=>{a.d(Me,{k:()=>E});var t=a(6895),o=a(9116),g=a(2635),l=a(1971),s=a(3679),L=a(9194),R=a(6672),T=a(1102),M=a(6903),b=a(1229),O=a(4989),F=a(9444),V=a(4650);class E{}E.\u0275fac=function(I){return new(I||E)},E.\u0275mod=V.oAB({type:E}),E.\u0275inj=V.cJS({imports:[t.ez,o.Bz,g._N,g.pP,l.vh,s.Jb,L.q6,R.X,T.PV,M.zf,F.s,b.U,O.X]})},5457:(Et,Me,a)=>{a.d(Me,{I:()=>Y});var t=a(6654),o=a(9771),g=a(4650),l=a(6895),s=a(9116),L=a(6672),R=a(6581),T=a(1102),M=a(403),b=a(1730),O=a(4557);function F(k,me){}function V(k,me){if(1&k&&(g.ynx(0),g.TgZ(1,"a",4),g.YNc(2,F,0,0,"ng-template",5),g.qZA(),g.BQk()),2&k){const fe=g.oxw(),ne=g.MAs(2);g.xp6(1),g.Q6J("routerLink",fe.variant.link),g.xp6(1),g.Q6J("ngTemplateOutlet",ne)}}function E(k,me){}function e(k,me){if(1&k&&g._UZ(0,"cvc-variant-popover",9),2&k){const fe=g.oxw(3);g.Q6J("variantId",fe.variant.id)}}function I(k,me){if(1&k&&g.YNc(0,e,1,1,"cvc-variant-popover",8),2&k){const fe=g.oxw(2);g.Q6J("ngIf",fe.enablePopover)}}const w=function(k){return{deprecated:k}};function de(k,me){if(1&k){const fe=g.EpF();g.TgZ(0,"nz-tag",6),g.NdJ("nzOnClose",function(Ce){g.CHM(fe);const H=g.oxw();return g.KtG(H.itemClosed(Ce))}),g.YNc(1,E,0,0,"ng-template",5),g.qZA(),g.YNc(2,I,1,1,"ng-template",null,7,g.W1O)}if(2&k){const fe=g.MAs(3),ne=g.oxw(),Ce=g.MAs(6);g.Q6J("ngClass",g.VKq(6,w,ne.variant.deprecated))("nzPopoverMouseEnterDelay",ne.onCloseClicked?0:.5)("nzPopoverContent",fe)("nzPopoverTrigger",ne.enablePopover?"hover":null)("nzMode",ne.onCloseClicked?"closeable":"default"),g.xp6(1),g.Q6J("ngTemplateOutlet",Ce)}}function ae(k,me){}function Z(k,me){if(1&k&&g.YNc(0,ae,0,0,"ng-template",5),2&k){g.oxw();const fe=g.MAs(2);g.Q6J("ngTemplateOutlet",fe)}}function U(k,me){if(1&k&&(g.ynx(0),g._uU(1),g.ALo(2,"truncate"),g.BQk()),2&k){const fe=g.oxw(2);g.xp6(1),g.hij(" ",g.xi3(2,1,fe.variant.name,20)," ")}}function N(k,me){if(1&k&&g._uU(0),2&k){const fe=g.oxw(2);g.hij(" ",fe.variant.name," ")}}function q(k,me){if(1&k&&(g.TgZ(0,"cvc-icon-badges",10),g._UZ(1,"i",11),g.qZA(),g.YNc(2,U,3,4,"ng-container",0),g.YNc(3,N,1,1,"ng-template",null,12,g.W1O)),2&k){const fe=g.MAs(4),ne=g.oxw();g.Q6J("flagged",ne.variant.flagged)("entityColor",ne.iconColor),g.xp6(1),g.Q6J("nzTwotoneColor",ne.iconColor),g.xp6(1),g.Q6J("ngIf",ne.truncateLongName)("ngIfElse",fe)}}class Y extends t.a{constructor(){super(),this.enablePopover=!0,this.truncateLongName=!1,this.iconColor=(0,o.f)("Variant")}idFunction(){return this.variant.id}ngOnInit(){if(super.ngOnInit(),void 0===this.variant)throw new Error("cvc-variant-tag requires LinkableVariant input, none supplied.")}}Y.\u0275fac=function(me){return new(me||Y)},Y.\u0275cmp=g.Xpm({type:Y,selectors:[["cvc-variant-tag"]],inputs:{variant:"variant",enablePopover:"enablePopover",truncateLongName:"truncateLongName"},features:[g.qOj],decls:7,vars:2,consts:[[4,"ngIf","ngIfElse"],["tag",""],["unlinked",""],["tagContent",""],[3,"routerLink"],[3,"ngTemplateOutlet"],["nz-popover","",3,"ngClass","nzPopoverMouseEnterDelay","nzPopoverContent","nzPopoverTrigger","nzMode","nzOnClose"],["popoverContent",""],[3,"variantId",4,"ngIf"],[3,"variantId"],[3,"flagged","entityColor"],["nz-icon","","nzType","civic-variant","nzTheme","twotone",3,"nzTwotoneColor"],["fullName",""]],template:function(me,fe){if(1&me&&(g.YNc(0,V,3,2,"ng-container",0),g.YNc(1,de,4,8,"ng-template",null,1,g.W1O),g.YNc(3,Z,1,1,"ng-template",null,2,g.W1O),g.YNc(5,q,5,5,"ng-template",null,3,g.W1O)),2&me){const ne=g.MAs(4);g.Q6J("ngIf",fe.linked)("ngIfElse",ne)}},dependencies:[l.mk,l.O5,l.tP,s.rH,L.j,R.lU,T.Ls,M.m,b.b,O.W],styles:["[_nghost-%COMP%]     nz-tag.rejected, [_nghost-%COMP%]     nz-tag.submitted, [_nghost-%COMP%]     nz-tag.accepted, [_nghost-%COMP%]     nz-tag.deprecated{border-right-width:2px}[_nghost-%COMP%]     nz-tag.rejected, [_nghost-%COMP%]     nz-tag.deprecated{border-color:#e6e6e6;background-color:#fff;color:#999999d9}[_nghost-%COMP%]     nz-tag.submitted{border-color:#ffe58f}[_nghost-%COMP%]     nz-tag.accepted{border-color:#b7eb8f}[_nghost-%COMP%]{display:inline-block}"],changeDetection:0})},7043:(Et,Me,a)=>{a.d(Me,{Q:()=>b});var t=a(6895),o=a(9116),g=a(6672),l=a(1102),s=a(6581),L=a(2767),R=a(9444),T=a(6429),M=a(4650);class b{}b.\u0275fac=function(F){return new(F||b)},b.\u0275mod=M.oAB({type:b}),b.\u0275inj=M.cJS({imports:[t.ez,o.Bz,g.X,s.$6,l.PV,R.s,L.k,T.C]})},9657:(Et,Me,a)=>{a.d(Me,{t:()=>o});var t=a(4650);class o{transform(l,s){return l?"verbose"==s?"TIER_I_LEVEL_A"===l?"Tier I - Level A":"TIER_I_LEVEL_B"===l?"Tier I - Level B":"TIER_II_LEVEL_C"===l?"Tier II - Level C":"TIER_II_LEVEL_D"===l?"Tier II - Level D":"TIER_III"===l?"Tier III":"TIER_IV"===l?"Tier IV":"Not Applicable":l.toUpperCase().replace("TIER","").replace("LEVEL","").replace(/ /g,"").replace(/_/g,""):""}}o.\u0275fac=function(l){return new(l||o)},o.\u0275pipe=t.Yjl({name:"formatAmp",type:o,pure:!0})},160:(Et,Me,a)=>{a.d(Me,{a:()=>g});var t=a(9771),o=a(4650);class g{transform(s){return(0,t.f)(s)}}g.\u0275fac=function(s){return new(s||g)},g.\u0275pipe=o.Yjl({name:"entityColor",type:g,pure:!0})},4110:(Et,Me,a)=>{a.d(Me,{Do:()=>L});var t=a(7630),o=a(915),g=a(4650);const l=new Map([[t.Sx0.A,"Validated association"],[t.Sx0.B,"Clinical evidence"],[t.Sx0.C,"Case study"],[t.Sx0.D,"Preclinical evidence"],[t.Sx0.E,"Inferential association"]]),s=new Map([[1,"One Star"],[2,"Two Stars"],[3,"Three Stars"],[4,"Four Stars"],[5,"Five Stars"]]);class L{transform(T,M="display-string"){return null==T?"":"short-string"===M&&1===T.toString().length?"string"==typeof T?T:T.toString():"icon-name"===M?"number"==typeof T?`civic-rating${T}`:1===T.length?`civic-level${T.toLowerCase()}`:`civic-${T.replace(/_/g,"").toLowerCase()}`:"number"==typeof T?s.get(T)||T.toString():1===T.length?l.get(T)||T:(0,o.E)(T)}}L.\u0275fac=function(T){return new(T||L)},L.\u0275pipe=g.Yjl({name:"evidenceEnumDisplay",type:L,pure:!0})},6204:(Et,Me,a)=>{a.d(Me,{v:()=>L});var t=a(7630);const o={evidenceType:{[t.kqt.Diagnostic]:"Evidence pertains to a variant's impact on patient diagnosis (cancer subtype)",[t.kqt.Functional]:"Evidence pertains to a variant that alters biological function from the reference state",[t.kqt.Oncogenic]:"Evidence pertains to a somatic variant's involvement in tumor pathogenesis as described by the Hallmarks of Cancer",[t.kqt.Predictive]:"Evidence pertains to a variant's effect on therapeutic response",[t.kqt.Predisposing]:"Evidence pertains to a germline variant's role in conferring susceptibility to disease (including pathogenicity evaluations)",[t.kqt.Prognostic]:"Evidence pertains to a variant's impact on disease progression, severity, or patient survival"},assertionType:{[t.uBv.Diagnostic]:"Assertion pertains to a variant's impact on patient diagnosis (cancer subtype)",[t.uBv.Predictive]:"Assertion pertains to a variant's effect on therapeutic response",[t.uBv.Predisposing]:"Assertion pertains to a germline variant's role in conferring susceptibility to disease (including pathogenicity evaluations)",[t.uBv.Prognostic]:"Assertion pertains to a variant's impact on disease progression, severity, or patient survival",[t.uBv.Oncogenic]:"Assertion pertains to a somatic variant's role in driving tumor formation, growth, and other processes related to the Hallmarks of Cancer"},variantOrigin:{[t.huM.Somatic]:"Variant is a mutation, found only in tumor cells, having arisen in a specific tissue (non-germ cell), and is not expected to be inherited or passed to offspring",[t.huM.RareGermline]:"Variant is found in every cell (not restricted to tumor/diseased cells) and is thought to exist in less than 1% of the population relevant to this evidence item",[t.huM.CommonGermline]:"Variant is found in every cell (not restricted to tumor/diseased cells) and is thought to exist in at least 1% of the population relevant to this evidence item",[t.huM.Unknown]:"The variant origin is uncertain based on the available evidence",[t.huM.Na]:"The variant type (e.g., expression) is not compatible (or easily classified) with the CIViC concept of variant origin",[t.huM.Mixed]:"Variants in the Molecular Profile span multiple Origin types."},evidenceLevel:{[t.Sx0.A]:"Proven/consensus association in human medicine",[t.Sx0.B]:"Clinical trial or other primary patient data supports association",[t.Sx0.C]:"Individual case reports from clinical journals",[t.Sx0.D]:"In vivo or in vitro models support association",[t.Sx0.E]:"Indirect evidence"},evidenceLevelBrief:{[t.Sx0.A]:"Validated association",[t.Sx0.B]:"Clinical evidence",[t.Sx0.C]:"Case Study",[t.Sx0.D]:"Preclinical evidence",[t.Sx0.E]:"Inferential association"},therapyInteractionType:{[t.wkr.Combination]:"The therapies listed were used as part of a combination therapy approach",[t.wkr.Sequential]:"The therapies listed were used at separate timepoints in the same treatment plan",[t.wkr.Substitutes]:"The therapies listed are often considered to be of the same family, or behave similarly in a treatment setting"},evidenceRating:{1:"Poor - Claim is not supported well by experimental evidence. Results are not reproducible, or have very small sample size. No follow-up is done to validate novel claims",2:"Adequate - Evidence is not well supported by experimental data, and little follow-up data is available. Experiments may lack proper controls, have small sample size, or are not statistically convincing",3:"Average - Evidence is convincing, but not supported by a breadth of experiments. May be smaller scale projects, or novel results without many follow-up experiments. Discrepancies from expected results are explained and not concerning",4:"Strong - Well supported evidence. Experiments are well controlled, and results are convincing. Any discrepancies from expected results are well-explained and not concerning",5:"Excellent - Solid, well supported evidence from a lab or journal with respected academic standing. Experiments are well controlled, and results are clean and reproducible across multiple replicates. Evidence confirmed using separate methods"}},g={significance:{PREDICTIVE:{ADVERSE_RESPONSE:{EvidenceItem:"Associated with an adverse response to theraputic treatment",Assertion:"Associated with an adverse response to theraputic treatment"},REDUCED_SENSITIVITY:{EvidenceItem:"Response to treatment is lower than seen in other treatment contexts",Assertion:"Response to treatment is lower than seen in other treatment contexts"},RESISTANCE:{EvidenceItem:"Associated with clinical or preclinical resistance to treatment",Assertion:"Associated with clinical or preclinical resistance to treatment"},SENSITIVITYRESPONSE:{EvidenceItem:"Associated with clinical or preclinical response to treatment",Assertion:"Associated with a clinical or preclinical response to treatment"},NA:{EvidenceItem:"Clinical Significance is not applicable",Assertion:"Clinical Significance is not applicable"}},DIAGNOSTIC:{POSITIVE:{EvidenceItem:"Associated with diagnosis of disease or subtype",Assertion:"Associated with diagnosis of disease or subtype"},NEGATIVE:{EvidenceItem:"Associated with lack of disease or subtype",Assertion:"Associated with lack of disease or subtype"}},PROGNOSTIC:{BETTER_OUTCOME:{EvidenceItem:"Demonstrates better than expected clinical outcome",Assertion:"Demonstrates better than expected clinical outcome"},POOR_OUTCOME:{EvidenceItem:"Demonstrates worse than expected clinical outcome",Assertion:"Demonstrates worse than expected clinical outcome"},Na:{EvidenceItem:"Clinical Significance is not applicable",Assertion:"Clinical Significance is not applicable"}},PREDISPOSING:{PATHOGENIC:{Assertion:"Very strong evidence the variant is pathogenic"},LIKELY_PATHOGENIC:{Assertion:"Strong evidence (>90% certainty) the variant is pathogenic"},BENIGN:{Assertion:"Very strong evidence the variant is benign"},LIKELY_BENIGN:{Assertion:"Not expected to have a major effect on disease"},UNCERTAIN_SIGNIFICANCE:{Assertion:"Does not meet the ACMG/AMP criteria for pathogenic/benign, or the evidence is conflicting"},Na:{EvidenceItem:"Clinical Significance is not applicable"},PREDISPOSITION:{EvidenceItem:"Germline variant has predisposing potential for cancer, and may meet ACMG/AMP criteria supporting pathogenic or benign classification."},PROTECTIVENESS:{EvidenceItem:"Germline variant has properties that protect individuals from acquiring cancer."}},ONCOGENIC:{ONCOGENICITY:{EvidenceItem:"Somatic variant has oncogenic potential for driving cancer, and may meet ClinGen/CGC/VICC criteria supporting pathogenic or benign classification."},PROTECTIVENESS:{EvidenceItem:"Somatic variant has a protective role and minimizes co-occuring driver variants, tumor malignancy, or other oncogenic tumor properties."},ONCOGENIC:{Assertion:"Very strong evidence the variant is oncogenic."},LIKELY_ONCOGENIC:{Assertion:"Strong evidence the variant is oncogenic."},BENIGN:{Assertion:"Very strong evidence the variant does not have oncogenic properties."},LIKELY_BENIGN:{Assertion:"Strong evidence the variant does not have oncogenic properties."},UNCERTAIN_SIGNIFICANCE:{Assertion:"Does not meet guideline criteria for oncogenic/benign, or the evidence is conflicting."}}},evidenceDirection:{PREDICTIVE:{SUPPORTS:{EvidenceItem:"The experiment or study supports this variant's response to a therapy"},DOES_NOT_SUPPORT:{EvidenceItem:"The experiment or study does not support, or was inconclusive of an interaction between this variant and a therapy"}},DIAGNOSTIC:{SUPPORTS:{EvidenceItem:"The experiment or study supports this variant's impact on the diagnosis of disease or subtype"},DOES_NOT_SUPPORT:{EvidenceItem:"The experiment or study does not support this variant's impact on diagnosis of disease or subtype"}},PROGNOSTIC:{SUPPORTS:{EvidenceItem:"The experiment or study supports this variant's impact on prognostic outcome"},DOES_NOT_SUPPORT:{EvidenceItem:"The experiment or study does not support a prognostic association between variant and outcome"}},PREDISPOSING:{Na:{EvidenceItem:"Evidence Direction is not applicable"},SUPPORTS:{EvidenceItem:"The evidence supports a pathogenic or a protective role for a germline variant in cancer."},DOES_NOT_SUPPORT:{EvidenceItem:"The evidence supports a benign (if Clinical Significance is Predisposition) or lack or protective (if Clinical Significance is Protectiveness) role for a germline variant in cancer."}},FUNCTIONAL:{SUPPORTS:{EvidenceItem:"The experiment or study supports this variant causing alteration or non-alteration of the gene product function"},DOES_NOT_SUPPORT:{EvidenceItem:"The experiment or study does not support this variant causing alteration or non-alteration of the gene product function"}},ONCOGENIC:{NA:{EvidenceItem:"Evidence Direction is not applicable for Oncogenic Evidence Type"},SUPPORTS:{EvidenceItem:"The evidence supports an oncogenic or protective role for a somatic variant"},DOES_NOT_SUPPORT:{EvidenceItem:"The evidence does not support an oncogenic or protective role for a somatic variant"}}},assertionDirection:{PREDICTIVE:{SUPPORTS:{Assertion:"The Assertion and associated Evidence Items support this variant's response to a therapy"},DOES_NOT_SUPPORT:{Assertion:"The Assertion and associated evidence does not support, or was inconclusive of an interaction between this variant and a therapy"}},DIAGNOSTIC:{SUPPORTS:{Assertion:"The Assertion and associated Evidence Items support this variant's impact on the diagnosis of disease or subtype"},DOES_NOT_SUPPORT:{Assertion:"The Assertion and associated evidence does not support this variant's impact on diagnosis of disease or subtype"}},PROGNOSTIC:{SUPPORTS:{Assertion:"The Assertion and associated Evidence Items support this variant's impact on prognostic outcome"},DOES_NOT_SUPPORT:{Assertion:"The Assertion and associated evidence does not support a prognostic association between variant and outcome"}},PREDISPOSING:{SUPPORTS:{Assertion:"The Assertion and associated Evidence Items support a variant's impact on predisposing outcome"}},FUNCTIONAL:{SUPPORTS:{Assertion:"The Assertion and associated Evidence Items support this variant causing alteration or non-alteration of the gene product function"},DOES_NOT_SUPPORT:{Assertion:"The Assertion and associated evidence does not support this variant causing alteration or non-alteration of the gene product function"}},ONCOGENIC:{SUPPORTS:{Assertion:"The Assertion and associated Evidence Items support a variant's oncogenic, benign, or uncertain significance"}}}};var s=a(4650);class L{transform(T,M,b,O){return M&&T?function l(R,T,M,b){let O;return O=M&&b?g[R][M][T][b]:o[R][T],O||""}(M,T,b,O):""}}L.\u0275fac=function(T){return new(T||L)},L.\u0275pipe=s.Yjl({name:"enumTooltip",type:L,pure:!0})},8926:(Et,Me,a)=>{a.d(Me,{A:()=>g});var t=a(4650),o=a(1481);class g{constructor(s){this.sanitizer=s}transform(s,L){if(!L||""==L)return s;const R=new RegExp(L,"gi"),T=s.match(R);if(!T)return s;let M=s.replace(R,`<span class='typeahead-match'>${T[0]}</span>`);return this.sanitizer.bypassSecurityTrustHtml(M)}}g.\u0275fac=function(s){return new(s||g)(t.Y36(o.H7,16))},g.\u0275pipe=t.Yjl({name:"highlightTypeahead",type:g,pure:!0})},9444:(Et,Me,a)=>{a.d(Me,{s:()=>l});var t=a(6895),o=a(7742),g=a(4650);class l{}l.\u0275fac=function(L){return new(L||l)},l.\u0275mod=g.oAB({type:l}),l.\u0275inj=g.cJS({providers:[o.l],imports:[t.ez]})},7742:(Et,Me,a)=>{a.d(Me,{l:()=>g});var t=a(6530),o=a(4650);class g{transform(s){return s?(0,t.c)(s):""}}g.\u0275fac=function(s){return new(s||g)},g.\u0275pipe=o.Yjl({name:"sourceTypeDisplay",type:g,pure:!0})},4557:(Et,Me,a)=>{a.d(Me,{W:()=>o});var t=a(4650);class o{constructor(){}transform(l,s=25){if(l.length>s){let R=l.slice(0,s);var L=R.lastIndexOf(" ");return R.slice(0,L)+"\u2026"}return l}}o.\u0275fac=function(l){return new(l||o)},o.\u0275pipe=t.Yjl({name:"truncate",type:o,pure:!0})},320:(Et,Me,a)=>{a.d(Me,{Z:()=>o});var t=a(4650);class o{transform(l){return l?`civic-${l.replace(/_/g,"").toLowerCase()}`:""}}o.\u0275fac=function(l){return new(l||o)},o.\u0275pipe=t.Yjl({name:"typenameToIcon",type:o,pure:!0})},9169:(Et,Me,a)=>{a.d(Me,{Y:()=>g});var t=a(1135),o=a(4650);class g{constructor(){this.networkError$=new t.X(void 0)}clearErrors(){this.networkError$.next(void 0)}}g.\u0275fac=function(s){return new(s||g)},g.\u0275prov=o.Yz7({token:g,factory:g.\u0275fac,providedIn:"root"})},9350:(Et,Me,a)=>{a.d(Me,{a:()=>O});var b,t=a(655),o=a(7630),g=a(9933),l=a(4004),s=a(8675),L=a(4782),R=a(6579),T=a(4650),M=a(529);let O=((b=class{constructor(V,E){function e(U){return!(!U||U.role!==o.i44.Admin)}function I(U){return!(!U||U.role!==o.i44.Editor&&U.role!==o.i44.Admin)}function w(U){return!(!U||U.role!==o.i44.Curator)}function de(U){return!(!U||U.role!==o.i44.Curator&&U.role!==o.i44.Editor&&U.role!==o.i44.Admin)}function ae(U){return!(!U||U.role!==o.i44.Editor&&U.role!==o.i44.Admin||!U.mostRecentConflictOfInterestStatement||U.mostRecentConflictOfInterestStatement?.coiStatus!=o.Mgx.Conflict&&U.mostRecentConflictOfInterestStatement?.coiStatus!=o.Mgx.Valid)}function Z(U){if(U.mostRecentOrganizationId)return U.organizations.find(N=>N.id===U.mostRecentOrganizationId)}this.viewerBaseGQL=V,this.http=E,this.initialViewer={mostRecentOrg:void 0,signedIn:!1,isAdmin:!1,isEditor:!1,isCurator:!1,canCurate:!1,canModerate:!1,invalidCoi:!0},this.queryRef=this.viewerBaseGQL.watch(void 0,{notifyOnNetworkStatusChange:!1}),this.viewer$=this.queryRef.valueChanges.pipe((0,R.j)("data","viewer"),(0,l.U)(U=>({...U,signedIn:null!=U,signedOut:null==U,canCurate:de(U),canModerate:ae(U),isAdmin:e(U),isEditor:I(U),isCurator:w(U),organizations:null==U?[]:U.organizations,mostRecentOrg:null==U?void 0:Z(U),invalidCoi:I(U)&&(!U.mostRecentConflictOfInterestStatement||U.mostRecentConflictOfInterestStatement.coiStatus===o.Mgx.Expired||U.mostRecentConflictOfInterestStatement.coiStatus===o.Mgx.Missing)})),(0,s.O)(this.initialViewer),(0,L.d)(1)),this.signedIn$=this.viewer$.pipe((0,l.U)(U=>U.signedIn)),this.signedOut$=this.viewer$.pipe((0,l.U)(U=>U.signedOut)),this.isAdmin$=this.viewer$.pipe((0,l.U)(U=>e(U))),this.isEditor$=this.viewer$.pipe((0,l.U)(U=>I(U))),this.isCurator$=this.viewer$.pipe((0,l.U)(U=>w(U))),this.canCurate$=this.viewer$.pipe((0,l.U)(U=>de(U))),this.canModerate$=this.viewer$.pipe((0,l.U)(U=>ae(U)))}signOut(){this.http.get("/api/sign_out").pipe((0,g.t)(this)).subscribe(()=>this.queryRef.refetch())}refetch(){this.queryRef.refetch()}}).\u0275fac=function(V){return new(V||b)(T.LFG(o.Tt7),T.LFG(M.eN))},b.\u0275prov=T.Yz7({token:b,factory:b.\u0275fac,providedIn:"root"}),b);O=(0,t.gn)([(0,g.c)()],O)},6654:(Et,Me,a)=>{a.d(Me,{a:()=>o});var t=a(4650);class o{constructor(){this.linked=!0,this.popoverVisible=!1}ngOnInit(){this.onCloseClicked&&(this.linked=!1)}itemClosed(l){this.popoverVisible=!1,this.onCloseClicked&&this.onCloseClicked(this.idFunction())}}o.\u0275fac=function(l){return new(l||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["ng-component"]],inputs:{onCloseClicked:"onCloseClicked",linked:"linked"},decls:0,vars:0,template:function(l,s){},encapsulation:2})},915:(Et,Me,a)=>{function t(o){if("number"==typeof o||"boolean"==typeof o)return o;let g;if("NA"===o)g=["Not Applicable"];else if("SENSITIVITYRESPONSE"===o)g=["Sensitivity","/","Response"];else{g=o.toLowerCase().replace(/_/g," ").split(" ");for(var l=0;l<g.length;l++)g[l]=g[l].charAt(0).toUpperCase()+g[l].slice(1)}return g.join(" ")}a.d(Me,{E:()=>t})},6530:(Et,Me,a)=>{function t(o){switch(o){case"ASCO":return"ASCO";case"PUBMED":return"PubMed";case"ASH":return"ASH";default:return o}}a.d(Me,{c:()=>t})},9771:(Et,Me,a)=>{a.d(Me,{f:()=>o});const t=new Map([["Assertion","#7243b5"],["ClinicalTrial","#ac3996"],["CoordinateSystem","#f68f37"],["Disease","#e62f76"],["Event","#1db8a9"],["EvidenceItem","#2a63b6"],["Gene","#07aff0"],["Therapy","#ac3996"],["MolecularProfile","#33b358"],["Phenotype","#1db8a9"],["Source","#f9ba45"],["Variant","#74d34c"],["VariantGroup","#74d34c"],["VariantType","#74d34c"],["Comment","#44d8ef"],["Event","#ffdb00"],["Flag","#e24759"],["Queue","#666699"],["Revision","#f0673a"],["Curator","#a0d8f5"],["Editor","#58a0c4"],["Admin","#58a0c4"],["Organization","#3d7b99"],["Rejected","#BBBBBB"],["Greyscale","#999999"]]);function o(g){let l="#AAAAAA";if(g){const s=t.get(g);s&&(l=s)}return l}},6123:(Et,Me,a)=>{a.d(Me,{U:()=>s});var t=a(7579),o=a(1135),g=a(2722),l=a(8746);class s{constructor(R){this.networkErrorService=R}mutate(R,T,M,b){let O=new t.x,F={isSubmitting$:new o.X(!1),submitSuccess$:new o.X(!1),submitError$:new o.X([]),cleanup:()=>{O.next(),O.complete()}};return F.isSubmitting$.next(!0),R.mutate(T,M).pipe((0,g.R)(O),(0,l.x)(()=>{F.isSubmitting$.next(!1)})).subscribe({next:V=>{V.data&&b&&b(V.data)},error:V=>{V.graphQLErrors.length>0?F.submitError$.next(V.graphQLErrors.map(E=>E.message)):V.networkError&&this.networkErrorService.networkError$.next(V.networkError),F.cleanup()},complete:()=>{F.submitError$.next([]),F.submitSuccess$.next(!0),this.networkErrorService.networkError$.next(void 0),F.cleanup()}}),F}}},9241:(Et,Me,a)=>{a.d(Me,{h:()=>g});var t=a(6895),o=a(4650);class g{}g.\u0275fac=function(s){return new(s||g)},g.\u0275mod=o.oAB({type:g}),g.\u0275inj=o.cJS({imports:[t.ez]})},6814:(Et,Me,a)=>{a.d(Me,{P:()=>V});var t=a(4650),o=a(6895),g=a(7570);function l(E,e){1&E&&(t.ynx(0),t._uU(1," N/A "),t.BQk())}function s(E,e){1&E&&(t.ynx(0),t._uU(1," Not applicable "),t.BQk())}function L(E,e){if(1&E&&(t.TgZ(0,"span",4),t.ynx(1,0),t.YNc(2,l,2,0,"ng-container",5),t.YNc(3,s,2,0,"ng-container",6),t.BQk(),t.qZA()),2&E){const I=t.oxw();t.xp6(1),t.Q6J("ngSwitch",I.cvcDisplayMode),t.xp6(1),t.Q6J("ngSwitchCase","small")}}function R(E,e){1&E&&(t.ynx(0),t._uU(1," \u2013\xa0\u2013 "),t.BQk())}function T(E,e){1&E&&(t.ynx(0),t._uU(1,"Not specified"),t.BQk())}function M(E,e){if(1&E&&(t.TgZ(0,"span",7),t.ynx(1,0),t.YNc(2,R,2,0,"ng-container",5),t.YNc(3,T,2,0,"ng-container",6),t.BQk(),t.qZA()),2&E){const I=t.oxw();t.xp6(1),t.Q6J("ngSwitch",I.cvcDisplayMode),t.xp6(1),t.Q6J("ngSwitchCase","small")}}function b(E,e){1&E&&(t.ynx(0),t._uU(1,"!?"),t.BQk())}function O(E,e){1&E&&(t.ynx(0),t._uU(1,"Unspecified"),t.BQk())}function F(E,e){if(1&E&&(t.TgZ(0,"span",8),t.ynx(1,0),t.YNc(2,b,2,0,"ng-container",5),t.YNc(3,O,2,0,"ng-container",6),t.BQk(),t.qZA()),2&E){const I=t.oxw();t.xp6(1),t.Q6J("ngSwitch",I.cvcDisplayMode),t.xp6(1),t.Q6J("ngSwitchCase","small")}}class V{constructor(){this.cvcEmptyCategory="not-applicable",this.cvcDisplayMode="default"}}V.\u0275fac=function(e){return new(e||V)},V.\u0275cmp=t.Xpm({type:V,selectors:[["cvc-empty-value"]],inputs:{cvcEmptyCategory:"cvcEmptyCategory",cvcDisplayMode:"cvcDisplayMode"},decls:4,vars:4,consts:[[3,"ngSwitch"],["class","empty-symbol not-applicable","nz-tooltip","","nzTooltipTitle","Value is not applicable",4,"ngSwitchCase"],["nz-tooltip","","nzTooltipTitle","Unspecified","class","empty-symbol unspecified","nz-tooltip","","nzTooltipTitle","Value is unspecified",4,"ngSwitchCase"],["nz-tooltip","","nzTooltipTitle","INVALID","class","empty-symbol invalid","nz-tooltip","","nzTooltipTitle","Error: value requires specification",4,"ngSwitchCase"],["nz-tooltip","","nzTooltipTitle","Value is not applicable",1,"empty-symbol","not-applicable"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"],["nz-tooltip","","nzTooltipTitle","Unspecified","nz-tooltip","","nzTooltipTitle","Value is unspecified",1,"empty-symbol","unspecified"],["nz-tooltip","","nzTooltipTitle","INVALID","nz-tooltip","","nzTooltipTitle","Error: value requires specification",1,"empty-symbol","invalid"]],template:function(e,I){1&e&&(t.ynx(0,0),t.YNc(1,L,4,2,"span",1),t.YNc(2,M,4,2,"span",2),t.YNc(3,F,4,2,"span",3),t.BQk()),2&e&&(t.Q6J("ngSwitch",I.cvcEmptyCategory),t.xp6(1),t.Q6J("ngSwitchCase","not-applicable"),t.xp6(1),t.Q6J("ngSwitchCase","unspecified"),t.xp6(1),t.Q6J("ngSwitchCase","invalid"))},dependencies:[o.RF,o.n9,o.ED,g.SY],styles:[".empty-symbol[_ngcontent-%COMP%]{font-style:oblique;display:inline-block;white-space:no-wrap}.empty-symbol.not-applicable[_ngcontent-%COMP%]{color:#ccc;font-weight:500}.empty-symbol.unspecified[_ngcontent-%COMP%]{display:inline-block;color:#ccc;font-weight:500;padding:0 3px}.empty-symbol.invalid[_ngcontent-%COMP%]{display:inline-block;color:#ff4d4f;font-weight:700}"]})},1371:(Et,Me,a)=>{a.d(Me,{M:()=>s});var t=a(6895),o=a(1102),g=a(7570),l=a(4650);class s{}s.\u0275fac=function(R){return new(R||s)},s.\u0275mod=l.oAB({type:s}),s.\u0275inj=l.cJS({imports:[t.ez,g.cg,o.PV]})},8699:(Et,Me,a)=>{a.d(Me,{J:()=>Ae});var t=a(4650),o=a(3595),g=a(6895),l=a(3314),s=a(2925),L=a(2614),R=a(6818),T=a(8305),M=a(285),b=a(4281),O=a(403);function F(Ze,oe){if(1&Ze&&t._UZ(0,"cvc-molecular-profile-popover",9),2&Ze){const J=t.oxw();t.Q6J("molecularProfileId",J.entity.entityId)}}function V(Ze,oe){if(1&Ze&&t._UZ(0,"cvc-disease-popover",10),2&Ze){const J=t.oxw();t.Q6J("diseaseId",J.entity.entityId)}}function E(Ze,oe){if(1&Ze&&t._UZ(0,"cvc-therapy-popover",11),2&Ze){const J=t.oxw();t.Q6J("therapyId",J.entity.entityId)}}function e(Ze,oe){if(1&Ze&&t._UZ(0,"cvc-source-popover",12),2&Ze){const J=t.oxw();t.Q6J("sourceId",J.entity.entityId)}}function I(Ze,oe){if(1&Ze&&t._UZ(0,"cvc-phenotype-popover",13),2&Ze){const J=t.oxw();t.Q6J("phenotypeId",J.entity.entityId)}}function w(Ze,oe){if(1&Ze&&t._UZ(0,"cvc-evidence-popover",14),2&Ze){const J=t.oxw();t.Q6J("evidenceId",J.entity.entityId)}}function de(Ze,oe){if(1&Ze&&t._UZ(0,"cvc-gene-popover",15),2&Ze){const J=t.oxw();t.Q6J("geneId",J.entity.entityId)}}function ae(Ze,oe){if(1&Ze&&t._UZ(0,"cvc-variant-popover",16),2&Ze){const J=t.oxw();t.Q6J("variantId",J.entity.entityId)}}const Z=["MolecularProfile","Disease","Therapy","Phenotype","Source","Gene","Variant","EvidenceItem"];class U{ngOnInit(){if(null==this.entity)throw new Error("entity input is required for CvcEntityTagPopoverComponent")}}U.\u0275fac=function(oe){return new(oe||U)},U.\u0275cmp=t.Xpm({type:U,selectors:[["cvc-entity-tag-popover"]],inputs:{entity:"entity"},decls:9,vars:9,consts:[[3,"ngSwitch"],[3,"molecularProfileId",4,"ngSwitchCase"],[3,"diseaseId",4,"ngSwitchCase"],[3,"therapyId",4,"ngSwitchCase"],[3,"sourceId",4,"ngSwitchCase"],[3,"phenotypeId",4,"ngSwitchCase"],[3,"evidenceId",4,"ngSwitchCase"],[3,"geneId",4,"ngSwitchCase"],[3,"variantId",4,"ngSwitchCase"],[3,"molecularProfileId"],[3,"diseaseId"],[3,"therapyId"],[3,"sourceId"],[3,"phenotypeId"],[3,"evidenceId"],[3,"geneId"],[3,"variantId"]],template:function(oe,J){1&oe&&(t.ynx(0,0),t.YNc(1,F,1,1,"cvc-molecular-profile-popover",1),t.YNc(2,V,1,1,"cvc-disease-popover",2),t.YNc(3,E,1,1,"cvc-therapy-popover",3),t.YNc(4,e,1,1,"cvc-source-popover",4),t.YNc(5,I,1,1,"cvc-phenotype-popover",5),t.YNc(6,w,1,1,"cvc-evidence-popover",6),t.YNc(7,de,1,1,"cvc-gene-popover",7),t.YNc(8,ae,1,1,"cvc-variant-popover",8),t.BQk()),2&oe&&(t.Q6J("ngSwitch",J.entity.entityType),t.xp6(1),t.Q6J("ngSwitchCase","MolecularProfile"),t.xp6(1),t.Q6J("ngSwitchCase","Disease"),t.xp6(1),t.Q6J("ngSwitchCase","Therapy"),t.xp6(1),t.Q6J("ngSwitchCase","Source"),t.xp6(1),t.Q6J("ngSwitchCase","Phenotype"),t.xp6(1),t.Q6J("ngSwitchCase","EvidenceItem"),t.xp6(1),t.Q6J("ngSwitchCase","Gene"),t.xp6(1),t.Q6J("ngSwitchCase","Variant"))},dependencies:[g.RF,g.n9,l._,s.I,L.p,R.a,T.S,M._,b.Q,O.m],encapsulation:2,changeDetection:0});var N=a(9116),q=a(1102),Y=a(6672),k=a(7570),me=a(6581),fe=a(8926),ne=a(160),Ce=a(320);function H(Ze,oe){}function X(Ze,oe){if(1&Ze){const J=t.EpF();t.TgZ(0,"span",6)(1,"nz-tag",7),t.NdJ("nzCheckedChange",function(){t.CHM(J);const Pe=t.oxw();return t.KtG(Pe.cvcTagCheckedChange)})("nzOnClose",function(Pe){t.CHM(J);const Ge=t.oxw();return t.KtG(Ge.cvcOnClose.next(Pe))}),t.TgZ(2,"span",8),t.YNc(3,H,0,0,"ng-template",9),t.qZA()()()}if(2&Ze){const J=t.oxw(),Te=t.MAs(6),Pe=t.MAs(8);t.xp6(1),t.Q6J("nzMode",J.cvcMode)("nzChecked",J.cvcTagChecked),t.xp6(1),t.Q6J("nzPopoverContent",J.cvcShowPopover&&J.popoverInput?Te:void 0),t.xp6(1),t.Q6J("ngTemplateOutlet",Pe)}}function ve(Ze,oe){}function Ee(Ze,oe){if(1&Ze&&(t.TgZ(0,"span",13),t.YNc(1,ve,0,0,"ng-template",9),t.qZA()),2&Ze){const J=t.oxw(2),Te=t.MAs(8);t.Q6J("nzTooltipTitle",J.entity.tooltip),t.xp6(1),t.Q6J("ngTemplateOutlet",Te)}}function wt(Ze,oe){if(1&Ze){const J=t.EpF();t.TgZ(0,"span",10)(1,"nz-tag",11),t.NdJ("nzOnClose",function(Pe){t.CHM(J);const Ge=t.oxw();return t.KtG(Ge.cvcOnClose.next(Pe))}),t.YNc(2,Ee,2,2,"span",12),t.qZA()()}if(2&Ze){const J=t.oxw(),Te=t.MAs(4);t.xp6(1),t.Q6J("nzMode","closeable"),t.xp6(1),t.Q6J("ngIf",J.entity&&J.entity.tooltip)("ngIfElse",Te)}}function St(Ze,oe){}function on(Ze,oe){if(1&Ze&&(t.TgZ(0,"span",13),t.YNc(1,St,0,0,"ng-template",9),t.qZA()),2&Ze){const J=t.oxw(2),Te=t.MAs(8);t.Q6J("nzTooltipTitle",J.entity.tooltip),t.xp6(1),t.Q6J("ngTemplateOutlet",Te)}}function ot(Ze,oe){if(1&Ze&&(t.TgZ(0,"span",14),t.YNc(1,on,2,2,"span",12),t.qZA()),2&Ze){const J=t.oxw(),Te=t.MAs(4);t.xp6(1),t.Q6J("ngIf",J.entity&&J.entity.tooltip)("ngIfElse",Te)}}function mt(Ze,oe){}function Ot(Ze,oe){if(1&Ze&&(t.TgZ(0,"span",8),t.YNc(1,mt,0,0,"ng-template",9),t.qZA()),2&Ze){const J=t.oxw(),Te=t.MAs(6),Pe=t.MAs(8);t.Q6J("nzPopoverContent",J.popoverInput?Te:void 0),t.xp6(1),t.Q6J("ngTemplateOutlet",Pe)}}function Qt(Ze,oe){if(1&Ze&&t._UZ(0,"cvc-entity-tag-popover",16),2&Ze){const J=t.oxw(2);t.Q6J("entity",J.popoverInput)}}function mn(Ze,oe){if(1&Ze&&t.YNc(0,Qt,1,1,"cvc-entity-tag-popover",15),2&Ze){const J=t.oxw();t.Q6J("ngIf",J.popoverInput)}}function At(Ze,oe){if(1&Ze&&(t.TgZ(0,"span"),t.GkF(1,9),t.qZA()),2&Ze){t.oxw();const J=t.MAs(4);t.xp6(1),t.Q6J("ngTemplateOutlet",J)}}function _t(Ze,oe){if(1&Ze&&(t.TgZ(0,"a",23),t.GkF(1,9),t.qZA()),2&Ze){t.oxw();const J=t.MAs(4),Te=t.oxw(2);t.Q6J("routerLink",Te.entity.link),t.xp6(1),t.Q6J("ngTemplateOutlet",J)}}function Xt(Ze,oe){if(1&Ze&&(t._UZ(0,"span",26),t.ALo(1,"typenameToIcon"),t.ALo(2,"entityColor")),2&Ze){const J=t.oxw(4);t.Q6J("nzType",t.lcZ(1,2,J.typename))("nzTwotoneColor",t.lcZ(2,4,J.typename))}}function lt(Ze,oe){if(1&Ze&&(t.YNc(0,Xt,3,6,"span",24),t._UZ(1,"span",25),t.ALo(2,"highlightTypeahead")),2&Ze){t.oxw(2);const J=t.MAs(4),Te=t.oxw();t.Q6J("ngIf",Te.typename)("ngIfElse",J),t.xp6(1),t.Q6J("innerHtml",t.xi3(2,3,Te.entity.name,Te.cvcEmphasize),t.oJD)}}function kt(Ze,oe){if(1&Ze&&(t.ynx(0),t.YNc(1,At,2,1,"span",20),t.YNc(2,_t,2,2,"a",21),t.YNc(3,lt,3,6,"ng-template",null,22,t.W1O),t.BQk()),2&Ze){const J=t.oxw(2);t.xp6(1),t.Q6J("ngIf",J.cvcDisableLink),t.xp6(1),t.Q6J("ngIf",!J.cvcDisableLink)}}function sn(Ze,oe){}function On(Ze,oe){if(1&Ze&&(t.YNc(0,sn,0,0,"ng-template",9),t._uU(1)),2&Ze){t.oxw();const J=t.MAs(4),Te=t.oxw();t.Q6J("ngTemplateOutlet",J),t.xp6(1),t.hij(" CACHE-MISS (",Te.cvcCacheId,") ")}}function zn(Ze,oe){1&Ze&&t._UZ(0,"span",27)}function Yt(Ze,oe){if(1&Ze&&(t.YNc(0,kt,5,2,"ng-container",17),t.YNc(1,On,2,2,"ng-template",null,18,t.W1O),t.YNc(3,zn,1,0,"ng-template",null,19,t.W1O)),2&Ze){const J=t.MAs(2),Te=t.oxw();t.Q6J("ngIf",Te.entity)("ngIfElse",J)}}function xt(Ze,oe){if(1&Ze&&t._UZ(0,"cvc-entity-tag-popover",16),2&Ze){const J=t.oxw(2);t.Q6J("entity",J.popoverInput)}}function Ye(Ze,oe){if(1&Ze&&t.YNc(0,xt,1,1,"cvc-entity-tag-popover",15),2&Ze){const J=t.oxw();t.Q6J("ngIf",J.popoverInput)}}const $e=Ze=>void 0!==Ze&&Ze.__typename&&Ze.id&&void 0!==Ze.name;class Ae{set cvcLinkableEntity(oe){oe&&this.setLinkableEntity(oe)}set cvcCacheId(oe){oe&&this.setCachedLinkableEntity(oe)}constructor(oe){this.apollo=oe,this.cvcContext="default",this.cvcMode="default",this.cvcDisableLink=!0,this.cvcTagChecked=!1,this.cvcHasTooltip=!1,this.cvcFullWidth=!1,this.cvcShowPopover=!1,this.cvcTagCheckedChange=new t.vpe,this.cvcOnClose=new t.vpe}hasPopover(oe){return Z.includes(oe)}setLinkableEntity(oe){$e(oe)&&(this.typename=oe.__typename,this.id=oe.id,this.entity=oe,this.setPopoverInput(oe))}setCachedLinkableEntity(oe){const[J,Te]=oe.split(":");if(this.typename=J,this.id=+Te,!this.typename||!this.id)return void console.error(`entity-tag received an invalid cacheId: ${oe}. Cache IDs must be in the format 'TYPENAME:ID'.`);let Pe;Pe=this.cvcDisableLink?this.cvcHasTooltip?{id:`${J}:${Te}`,fragment:o.Ps`
          fragment Linkable${J}Entity on ${J} {
            id
            name
            tooltip
          }
        `}:{id:`${J}:${Te}`,fragment:o.Ps`
          fragment Linkable${J}Entity on ${J} {
            id
            name
          }
        `}:{id:`${J}:${Te}`,fragment:o.Ps`
          fragment Linkable${J}Entity on ${J} {
            id
            name
            link
          }
        `};const Ge=this.apollo.client.readFragment(Pe);$e(Ge)?(this.setPopoverInput(Ge),this.entity=Ge):console.error(`entity-tag could not find cached entity ${oe}`)}setPopoverInput(oe){$e(oe)&&this.hasPopover(oe.__typename)&&(this.popoverInput={entityId:oe.id,entityType:oe.__typename})}ngOnChanges(oe){oe.cvcMode&&"checkable"===oe.cvcMode.currentValue&&(this.cvcDisableLink=!0),oe.cvcContext&&"default"!==oe.cvcContext.currentValue&&(this.cvcDisableLink=!0)}}Ae.\u0275fac=function(oe){return new(oe||Ae)(t.Y36(o._M))},Ae.\u0275cmp=t.Xpm({type:Ae,selectors:[["cvc-entity-tag"]],hostVars:40,hostBindings:function(oe,J){2&oe&&t.ekj("full-width",!0===J.cvcFullWidth)("label-max",void 0!==J.cvcTruncateLabel)("label-max-50","50px"===J.cvcTruncateLabel)("label-max-75","75px"===J.cvcTruncateLabel)("label-max-100","100px"===J.cvcTruncateLabel)("label-max-125","125px"===J.cvcTruncateLabel)("label-max-150","150px"===J.cvcTruncateLabel)("label-max-175","175px"===J.cvcTruncateLabel)("label-max-200","200px"===J.cvcTruncateLabel)("label-max-250","250px"===J.cvcTruncateLabel)("label-max-300","300px"===J.cvcTruncateLabel)("label-max-350","350px"===J.cvcTruncateLabel)("label-max-400","400px"===J.cvcTruncateLabel)("label-max-450","450px"===J.cvcTruncateLabel)("label-max-500","500px"===J.cvcTruncateLabel)("rejected","REJECTED"===J.cvcStatus)("accepted","ACCEPTED"===J.cvcStatus)("submitted","SUBMITTED"===J.cvcStatus)("new","NEW"===J.cvcStatus)("superseded","SUPERSEDED"===J.cvcStatus)},inputs:{cvcLinkableEntity:"cvcLinkableEntity",cvcCacheId:"cvcCacheId",cvcStatus:"cvcStatus",cvcContext:"cvcContext",cvcMode:"cvcMode",cvcEmphasize:"cvcEmphasize",cvcDisableLink:"cvcDisableLink",cvcTagChecked:"cvcTagChecked",cvcHasTooltip:"cvcHasTooltip",cvcFullWidth:"cvcFullWidth",cvcShowPopover:"cvcShowPopover",cvcTruncateLabel:"cvcTruncateLabel"},outputs:{cvcTagCheckedChange:"cvcTagCheckedChange",cvcOnClose:"cvcOnClose"},features:[t.TTD],decls:11,vars:3,consts:[["class","default",4,"ngIf"],["class","select-item",4,"ngIf"],["class","multi-select-item",4,"ngIf"],["noTooltip",""],["popoverContent",""],["tagContent",""],[1,"default"],[3,"nzMode","nzChecked","nzCheckedChange","nzOnClose"],["nz-popover","","nzPopoverTrigger","hover",3,"nzPopoverContent"],[3,"ngTemplateOutlet"],[1,"select-item"],[3,"nzMode","nzOnClose"],["nz-tooltip","",3,"nzTooltipTitle",4,"ngIf","ngIfElse"],["nz-tooltip","",3,"nzTooltipTitle"],[1,"multi-select-item"],[3,"entity",4,"ngIf"],[3,"entity"],[4,"ngIf","ngIfElse"],["cacheMiss",""],["noIcon",""],[4,"ngIf"],[3,"routerLink",4,"ngIf"],["tagLabel",""],[3,"routerLink"],["nz-icon","","nzTheme","twotone","class","tag-icon",3,"nzType","nzTwotoneColor",4,"ngIf","ngIfElse"],[1,"tag-label",3,"innerHtml"],["nz-icon","","nzTheme","twotone",1,"tag-icon",3,"nzType","nzTwotoneColor"],["nz-icon","","nzType","question-circle","nzTheme","outline",1,"tag-icon"]],template:function(oe,J){1&oe&&(t.YNc(0,X,4,4,"span",0),t.YNc(1,wt,3,3,"span",1),t.YNc(2,ot,2,2,"span",2),t.YNc(3,Ot,2,2,"ng-template",null,3,t.W1O),t.YNc(5,mn,1,1,"ng-template",null,4,t.W1O),t.YNc(7,Yt,5,2,"ng-template",null,5,t.W1O),t.YNc(9,Ye,1,1,"ng-template",null,4,t.W1O)),2&oe&&(t.Q6J("ngIf","default"===J.cvcContext),t.xp6(1),t.Q6J("ngIf","select-item"===J.cvcContext),t.xp6(1),t.Q6J("ngIf","multi-select-item"===J.cvcContext))},dependencies:[g.O5,g.tP,N.rH,q.Ls,Y.j,k.SY,me.lU,U,fe.A,ne.a,Ce.Z],styles:['.label-max-50[_nghost-%COMP%]   .tag-label[_ngcontent-%COMP%]{max-width:50px;overflow:hidden;text-overflow:ellipsis}.label-max-75[_nghost-%COMP%]   .tag-label[_ngcontent-%COMP%]{max-width:75px;overflow:hidden;text-overflow:ellipsis}.label-max-100[_nghost-%COMP%]   .tag-label[_ngcontent-%COMP%]{max-width:100px;overflow:hidden;text-overflow:ellipsis}.label-max-125[_nghost-%COMP%]   .tag-label[_ngcontent-%COMP%]{max-width:125px;overflow:hidden;text-overflow:ellipsis}.label-max-150[_nghost-%COMP%]   .tag-label[_ngcontent-%COMP%]{max-width:150px;overflow:hidden;text-overflow:ellipsis}.label-max-175[_nghost-%COMP%]   .tag-label[_ngcontent-%COMP%]{max-width:175px;overflow:hidden;text-overflow:ellipsis}.label-max-200[_nghost-%COMP%]   .tag-label[_ngcontent-%COMP%]{max-width:200px;overflow:hidden;text-overflow:ellipsis}.label-max-250[_nghost-%COMP%]   .tag-label[_ngcontent-%COMP%]{max-width:250px;overflow:hidden;text-overflow:ellipsis}.label-max-300[_nghost-%COMP%]   .tag-label[_ngcontent-%COMP%]{max-width:300px;overflow:hidden;text-overflow:ellipsis}.label-max-350[_nghost-%COMP%]   .tag-label[_ngcontent-%COMP%]{max-width:350px;overflow:hidden;text-overflow:ellipsis}.label-max-400[_nghost-%COMP%]   .tag-label[_ngcontent-%COMP%]{max-width:400px;overflow:hidden;text-overflow:ellipsis}.label-max-450[_nghost-%COMP%]   .tag-label[_ngcontent-%COMP%]{max-width:450px;overflow:hidden;text-overflow:ellipsis}.label-max-500[_nghost-%COMP%]   .tag-label[_ngcontent-%COMP%]{max-width:500px;overflow:hidden;text-overflow:ellipsis}.rejected[_nghost-%COMP%]   nz-tag[_ngcontent-%COMP%], .submitted[_nghost-%COMP%]   nz-tag[_ngcontent-%COMP%], .accepted[_nghost-%COMP%]   nz-tag[_ngcontent-%COMP%], .deprecated[_nghost-%COMP%]   nz-tag[_ngcontent-%COMP%]{border-right-width:2px}.rejected[_nghost-%COMP%]   nz-tag[_ngcontent-%COMP%], .deprecated[_nghost-%COMP%]   nz-tag[_ngcontent-%COMP%]{border-color:#e6e6e6;background-color:#fff;color:#999999d9}.submitted[_nghost-%COMP%]   nz-tag[_ngcontent-%COMP%]{border-color:#ffe58f}.accepted[_nghost-%COMP%]   nz-tag[_ngcontent-%COMP%]{border-color:#b7eb8f}.full-width[_nghost-%COMP%]   nz-tag[_ngcontent-%COMP%]{width:100%}.full-width[_nghost-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-label[_ngcontent-%COMP%]{width:100%}nz-tag[_ngcontent-%COMP%]{margin-right:0;margin-inline-end:4px}  -checkable{background-color:transparent;cursor:pointer}  -checkable:not(  -checkable-checked):hover{color:#1890ff}  -checkable:active,   -checkable-checked{color:#fff}  -checkable-checked{background-color:#1890ff}  -checkable:active{background-color:#096dd9}.default[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]{margin:0;padding:0 2px 0 0;margin-inline-end:4px;max-width:100%}.default[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon[_ngcontent-%COMP%]{display:inline-block;padding:3px 2px 3px 4px;margin:-3px 0}.default[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-label[_ngcontent-%COMP%]{display:inline-block;font-weight:400;margin:-3px 0 -4px;padding:3px 3px 3px 2px;line-height:1}.default[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]     i.ant-tag-close-icon.anticon-close{transition:none;margin-left:3px}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]{margin:0;padding:0 2px 0 0;margin-inline-end:4px;max-width:100%}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon[_ngcontent-%COMP%]{display:inline-block;padding:3px 2px 3px 4px;margin:-3px 0}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-label[_ngcontent-%COMP%]{display:inline-block;font-weight:400;margin:-3px 0 -4px;padding:3px 3px 3px 2px;line-height:1}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]     i.ant-tag-close-icon.anticon-close{transition:none;margin-left:3px}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-label[_ngcontent-%COMP%]{padding-right:0}.multi-select-item[_ngcontent-%COMP%]{display:inline-block;margin-top:-3px;margin-bottom:-3px;margin-left:-4px;padding-left:4px}.multi-select-item[_ngcontent-%COMP%]   .tag-icon[_ngcontent-%COMP%]:after{content:" "}.typeahead-match[_ngcontent-%COMP%]{font-weight:700}a.disabled[_ngcontent-%COMP%]{pointer-events:none}'],changeDetection:0})},3258:(Et,Me,a)=>{a.d(Me,{x:()=>ae});var t=a(6895),o=a(1102),g=a(6672),l=a(9444),s=a(7570),L=a(9116),R=a(4650);class T{}T.\u0275fac=function(U){return new(U||T)},T.\u0275mod=R.oAB({type:T}),T.\u0275inj=R.cJS({imports:[t.ez]});var M=a(6581),b=a(3638),O=a(1698),F=a(6292),V=a(4398),E=a(1028),e=a(9736),I=a(8974),w=a(2767);class de{}de.\u0275fac=function(U){return new(U||de)},de.\u0275mod=R.oAB({type:de}),de.\u0275inj=R.cJS({imports:[t.ez,V._,b.t,e.n,I.s,E.I,O.f,F.w,w.k]});class ae{}ae.\u0275fac=function(U){return new(U||ae)},ae.\u0275mod=R.oAB({type:ae}),ae.\u0275inj=R.cJS({imports:[t.ez,L.Bz,o.PV,g.X,s.cg,M.$6,T,l.s,de,T]})},7830:(Et,Me,a)=>{a.d(Me,{F:()=>w});var M,t=a(655),o=a(9933),g=a(4650),l=a(9116),s=a(6895),L=a(5681),R=a(9597),T=a(2635);function b(de,ae){if(1&de&&g._UZ(0,"nz-alert",6),2&de){g.oxw();const Z=g.MAs(3),U=g.oxw();g.MGl("nzMessage","Error Submitting ",U.entityType,""),g.Q6J("nzDescription",Z)}}function O(de,ae){if(1&de&&(g.TgZ(0,"li"),g._uU(1),g.qZA()),2&de){const Z=ae.$implicit;g.xp6(1),g.hij(" ",Z," ")}}function F(de,ae){if(1&de&&(g.TgZ(0,"ul"),g.YNc(1,O,2,1,"li",7),g.qZA()),2&de){const Z=g.oxw().ngIf;g.xp6(1),g.Q6J("ngForOf",Z)}}function V(de,ae){if(1&de&&(g.ynx(0),g.YNc(1,b,1,2,"nz-alert",4),g.YNc(2,F,2,1,"ng-template",null,5,g.W1O),g.BQk()),2&de){const Z=ae.ngIf;g.xp6(1),g.Q6J("ngIf",Z.length>0)}}function E(de,ae){if(1&de&&(g.ynx(0),g._UZ(1,"nz-alert",8),g.BQk()),2&de){const Z=g.oxw();g.xp6(1),g.MGl("nzMessage","",Z.entityType," Submitted"),g.Q6J("nzDescription",Z.successMessage?Z.successMessage:null)}}function e(de,ae){1&de&&g.Hsn(0)}let w=((M=class{set mutationState(ae){this._mutationState=ae,this.currentTimer&&clearTimeout(this.currentTimer),ae&&ae.submitSuccess$.pipe((0,o.t)(this)).subscribe(Z=>{Z&&(this.currentTimer=setTimeout(()=>{this.redirectUrl&&this.router.navigateByUrl(this.redirectUrl)},2500))})}get mutationState(){return this._mutationState}constructor(ae){this.router=ae}ngOnInit(){}}).\u0275fac=function(ae){return new(ae||M)(g.Y36(l.F0))},M.\u0275cmp=g.Xpm({type:M,selectors:[["cvc-form-submission-status-display"]],inputs:{mutationState:"mutationState",entityType:"entityType",successMessage:"successMessage",redirectUrl:"redirectUrl"},ngContentSelectors:["*"],decls:8,vars:10,consts:[[3,"nzSpinning"],[4,"ngIf"],[4,"ngIf","ngIfElse"],["form",""],["nzType","error","nzShowIcon","",3,"nzMessage","nzDescription",4,"ngIf"],["errorList",""],["nzType","error","nzShowIcon","",3,"nzMessage","nzDescription"],[4,"ngFor","ngForOf"],["nzType","success","nzShowIcon","",3,"nzMessage","nzDescription"]],template:function(ae,Z){if(1&ae&&(g.F$t(),g.TgZ(0,"nz-spin",0),g.ALo(1,"ngrxPush"),g.YNc(2,V,4,1,"ng-container",1),g.ALo(3,"ngrxPush"),g.YNc(4,E,2,2,"ng-container",2),g.ALo(5,"ngrxPush"),g.YNc(6,e,1,0,"ng-template",null,3,g.W1O),g.qZA()),2&ae){const U=g.MAs(7);g.Q6J("nzSpinning",g.lcZ(1,4,null==Z.mutationState?null:Z.mutationState.isSubmitting$)),g.xp6(2),g.Q6J("ngIf",g.lcZ(3,6,null==Z.mutationState?null:Z.mutationState.submitError$)),g.xp6(2),g.Q6J("ngIf",g.lcZ(5,8,null==Z.mutationState?null:Z.mutationState.submitSuccess$))("ngIfElse",U)}},dependencies:[s.sg,s.O5,L.W,R.r,T.fM],encapsulation:2,changeDetection:0}),M);w=(0,t.gn)([(0,o.c)()],w)},9676:(Et,Me,a)=>{a.d(Me,{g:()=>R});var t=a(6895),o=a(2635),g=a(9597),l=a(6903),s=a(5681),L=a(4650);class R{}R.\u0275fac=function(M){return new(M||R)},R.\u0275mod=L.oAB({type:R}),R.\u0275inj=L.cJS({imports:[t.ez,o.pP,s.j,g.L,l.zf]})},5106:(Et,Me,a)=>{a.d(Me,{S:()=>ip});var t=a(4006),o=a(9116),g=a(6212),l=a(4697),s=a(6704),L=a(317),R=a(5910);const T={paramKey:!0};class M{constructor(d){this.route=d}postPopulate(d){if(d.fieldGroup||d.fieldArray||!1===(d.props||{...T}).paramKey||(this.paramKey=this.getParamKey(d),!this.paramKey))return;const y=this.getRouteSub(this.route,d),re=d.hooks?.onDestroy;y&&re&&(d.hooks={...d.hooks,onDestroy:ht=>{y.unsubscribe(),re(ht)}})}getParamKey(d){const c=d.props;if("string"==typeof c.paramKey)return c.paramKey;if(d.key){if("string"==typeof d.key)return d.key;console.warn(`observe-query-param cannot use field key ${JSON.stringify(d.key)} of type ${typeof d.key} to observe a query param. Use prop.paramKey to specify a query param string, or define a string field.key.`)}}getRouteSub(d,c){const y=d.queryParams.pipe((0,R.g)(this.paramKey)).subscribe(re=>{const ht=c.formControl,It=re[this.paramKey];if(!It)return void y.unsubscribe();let Mn;try{Mn=JSON.parse(It)}catch(kn){return console.warn(`observe-query-param failed to parse query param ${this.paramKey} for field ${c.id}: ${kn}`),console.warn("Note: Query values are parsed as JSON, therefore enum strings must be enclosed in double-quotes, and numeric entity IDs must be bare, unquoted."),void y.unsubscribe()}if(Mn){if(Object.keys(Mn).length>0&&Mn.constructor===Object)return console.warn(`observe-query-param may only set primitive types or arrays of primitive types, param ${this.paramKey} is an object: ${JSON.stringify(Mn)}`),void y.unsubscribe();ht.setValue(Mn)}});return y}}var E=a(6895),e=a(4650),I=a(2635),w=a(3679),de=a(8823);function ae(f,d){if(1&f&&(e.TgZ(0,"div",9),e.GkF(1,10),e.qZA()),2&f){e.oxw();const c=e.MAs(5);e.xp6(1),e.Q6J("ngTemplateOutlet",c)}}function Z(f,d){if(1&f&&(e.TgZ(0,"div",11),e.GkF(1,10),e.qZA()),2&f){e.oxw();const c=e.MAs(9);e.xp6(1),e.Q6J("ngTemplateOutlet",c)}}function U(f,d){if(1&f&&(e.TgZ(0,"div",12),e.GkF(1,10),e.qZA()),2&f){e.oxw();const c=e.MAs(7);e.xp6(1),e.Q6J("ngTemplateOutlet",c)}}function N(f,d){if(1&f&&(e.TgZ(0,"nz-form-label",17),e._UZ(1,"span",18),e.qZA()),2&f){const c=d.ngrxLet,y=e.oxw(3);e.Q6J("nzRequired",y.props.required)("nzFor",y.id)("nzNoColon",!0)("nzTooltipTitle",y.props.tooltip)("nzSpan",c.span?c.span:null),e.xp6(1),e.Q6J("nzContent",y.props.label)}}function q(f,d){if(1&f&&(e.ynx(0),e.YNc(1,N,2,6,"nz-form-label",16),e.BQk()),2&f){const c=e.oxw(2);e.xp6(1),e.Q6J("ngrxLet",c.wrapper.layout.label)}}function Y(f,d){if(1&f&&(e.TgZ(0,"nz-form-control",19),e.GkF(1,null,20),e.qZA()),2&f){const c=d.ngrxLet,y=e.oxw(2),re=e.MAs(11),ht=e.MAs(13);e.Q6J("nzExtra",y.wrapper.showExtra&&!y.showError?re:void 0)("nzValidateStatus",y.errorState)("nzErrorTip",ht)("nzSpan",y.props.hideLabel?24:c.span?c.span:null)}}const k=function(f,d,c,y){return{disabled:f,error:d,required:c,valid:y}};function me(f,d){if(1&f&&(e.TgZ(0,"nz-form-item",13),e.YNc(1,q,2,1,"ng-container",14),e.YNc(2,Y,3,4,"nz-form-control",15),e.qZA()),2&f){const c=e.oxw();e.Q6J("nzGutter",c.wrapper.layout.item.gutter)("ngClass",e.l5B(4,k,c.props.disabled,c.showError,c.props.required,"VALID"===c.field.formControl.status)),e.xp6(1),e.Q6J("ngIf",c.props.label&&!0!==c.props.hideLabel),e.xp6(1),e.Q6J("ngrxLet",c.wrapper.layout.control)}}const fe=function(f,d){return{disabled:f,error:d}};function ne(f,d){if(1&f&&(e.TgZ(0,"nz-form-label",24),e._UZ(1,"span",25),e.qZA()),2&f){const c=e.oxw(3);e.Q6J("ngClass",e.WLB(6,fe,c.props.disabled,c.showError))("nzRequired",c.props.required)("nzFor",c.id)("nzTooltipTitle",c.props.tooltip)("nzNoColon",!0),e.xp6(1),e.Q6J("nzContent",c.props.label)}}function Ce(f,d){if(1&f&&(e.ynx(0),e.YNc(1,ne,2,9,"nz-form-label",23),e.BQk()),2&f){const c=e.oxw(2);e.xp6(1),e.Q6J("ngrxLet",c.wrapper.layout.label)}}function H(f,d){if(1&f&&(e.TgZ(0,"nz-form-control",26),e.GkF(1,null,20),e.qZA()),2&f){const c=e.oxw(2),y=e.MAs(11),re=e.MAs(13);e.Q6J("nzExtra",c.wrapper.showExtra&&!c.showError?y:void 0)("nzValidateStatus",c.errorState)("nzErrorTip",re)}}function X(f,d){if(1&f&&(e.TgZ(0,"nz-form-item",21),e.YNc(1,Ce,2,1,"ng-container",14),e.YNc(2,H,3,3,"nz-form-control",22),e.qZA()),2&f){const c=e.oxw();e.Q6J("ngClass",e.l5B(3,k,c.props.disabled,c.showError,c.props.required,"VALID"===c.field.formControl.status)),e.xp6(1),e.Q6J("ngIf",c.props.label&&!0!==c.props.hideLabel),e.xp6(1),e.Q6J("ngrxLet",c.wrapper.layout.control)}}function ve(f,d){if(1&f&&(e.ynx(0),e.TgZ(1,"nz-form-label",28),e._UZ(2,"span",25),e.qZA(),e.BQk()),2&f){const c=e.oxw(2);e.xp6(1),e.Q6J("nzRequired",c.props.required)("nzTooltipTitle",c.props.tooltip)("nzFor",c.id)("nzNoColon",!0),e.xp6(1),e.Q6J("nzContent",c.props.label)}}function Ee(f,d){if(1&f&&e._UZ(0,"formly-validation-message",29),2&f){const c=e.oxw(3);e.Q6J("field",c.field)}}function wt(f,d){if(1&f&&(e.TgZ(0,"nz-form-control",26),e.GkF(1,null,20),e.YNc(3,Ee,1,1,"ng-template",null,8,e.W1O),e.qZA()),2&f){const c=e.MAs(4),y=e.oxw(2),re=e.MAs(11);e.Q6J("nzExtra",y.wrapper.showExtra&&!y.showError?re:void 0)("nzValidateStatus",y.errorState)("nzErrorTip",c)}}function St(f,d){if(1&f&&(e.TgZ(0,"nz-form-item",27),e.YNc(1,ve,3,5,"ng-container",14),e.YNc(2,wt,5,3,"nz-form-control",22),e.qZA()),2&f){const c=e.oxw();e.Q6J("ngClass",e.l5B(3,k,c.props.disabled,c.showError,c.props.required,"VALID"===c.field.formControl.status)),e.xp6(1),e.Q6J("ngIf",c.props.label&&!0!==c.props.hideLabel),e.xp6(1),e.Q6J("ngrxLet",c.wrapper.layout.control)}}function on(f,d){if(1&f&&e._UZ(0,"span",34),2&f){const c=e.oxw(2);e.Q6J("innerHTML",c.props.description,e.oJD)}}function ot(f,d){if(1&f&&e._UZ(0,"span",35),2&f){const c=e.oxw(2);e.Q6J("innerHTML",c.props.description,e.oJD)}}function mt(f,d){if(1&f&&e._UZ(0,"span",36),2&f){const c=e.oxw(2);e.Q6J("innerHTML",c.props.description,e.oJD)}}function Ot(f,d){if(1&f&&(e.TgZ(0,"div",30),e.ynx(1,0),e.YNc(2,on,1,1,"span",31),e.YNc(3,ot,1,1,"span",32),e.YNc(4,mt,1,1,"span",33),e.BQk(),e.qZA()),2&f){const c=e.oxw();e.xp6(1),e.Q6J("ngSwitch",c.props.extraType),e.xp6(1),e.Q6J("ngSwitchCase","prompt"),e.xp6(1),e.Q6J("ngSwitchCase","description")}}function Qt(f,d){if(1&f&&(e.TgZ(0,"div",37),e._UZ(1,"formly-validation-message",29),e.qZA()),2&f){const c=e.oxw();e.xp6(1),e.Q6J("field",c.field)}}class mn extends g.n2{get errorState(){return this.showError?"error":""}constructor(){super(),this.formLayout="vertical"}ngOnInit(){try{this.wrapper={layout:{item:{gutter:[6,12],...this.props.layout?.item?this.props.layout.item:void 0},label:{span:4,...this.props.layout?.label?this.props.layout.label:void 0},control:{span:20,...this.props.layout?.control?this.props.layout?.control:void 0}},showExtra:void 0===this.props.layout?.showExtra||this.props.layout.showExtra}}catch(d){console.error(d)}this.options.formState.formLayout&&(this.formLayout=this.options.formState.formLayout)}ngAfterViewInit(){this.options.formState.formLayout&&(this.formLayout=this.options.formState.formLayout)}}mn.\u0275fac=function(d){return new(d||mn)},mn.\u0275cmp=e.Xpm({type:mn,selectors:[["cvc-form-field-wrapper"]],features:[e.qOj],decls:14,vars:4,consts:[[3,"ngSwitch"],["class","layout-horizontal",4,"ngSwitchCase"],["class","layout-inline",4,"ngSwitchCase"],["class","layout-vertical",4,"ngSwitchCase"],["horizontalFieldWrapper",""],["verticalFieldWrapper",""],["inlineFieldWrapper",""],["descriptionTpl",""],["errorTpl",""],[1,"layout-horizontal"],[3,"ngTemplateOutlet"],[1,"layout-inline"],[1,"layout-vertical"],[1,"layout-horizontal",3,"nzGutter","ngClass"],[4,"ngIf"],[3,"nzExtra","nzValidateStatus","nzErrorTip","nzSpan",4,"ngrxLet"],[3,"nzRequired","nzFor","nzNoColon","nzTooltipTitle","nzSpan",4,"ngrxLet"],[3,"nzRequired","nzFor","nzNoColon","nzTooltipTitle","nzSpan"],["nz-typography","","nzEllipsis","",3,"nzContent"],[3,"nzExtra","nzValidateStatus","nzErrorTip","nzSpan"],["fieldComponent",""],[1,"layout-vertical",3,"ngClass"],[3,"nzExtra","nzValidateStatus","nzErrorTip",4,"ngrxLet"],[3,"ngClass","nzRequired","nzFor","nzTooltipTitle","nzNoColon",4,"ngrxLet"],[3,"ngClass","nzRequired","nzFor","nzTooltipTitle","nzNoColon"],["nz-typography","","nzEllipsis","",1,"label",3,"nzContent"],[3,"nzExtra","nzValidateStatus","nzErrorTip"],[1,"layout-inline",3,"ngClass"],[3,"nzRequired","nzTooltipTitle","nzFor","nzNoColon"],[3,"field"],[1,"form-field-description"],["class","extra-prompt",3,"innerHTML",4,"ngSwitchCase"],["class","extra-description",3,"innerHTML",4,"ngSwitchCase"],[3,"innerHTML",4,"ngSwitchDefault"],[1,"extra-prompt",3,"innerHTML"],[1,"extra-description",3,"innerHTML"],[3,"innerHTML"],[1,"cvc-form-field-validation"]],template:function(d,c){1&d&&(e.ynx(0,0),e.YNc(1,ae,2,1,"div",1),e.YNc(2,Z,2,1,"div",2),e.YNc(3,U,2,1,"div",3),e.BQk(),e.YNc(4,me,3,9,"ng-template",null,4,e.W1O),e.YNc(6,X,3,8,"ng-template",null,5,e.W1O),e.YNc(8,St,3,8,"ng-template",null,6,e.W1O),e.YNc(10,Ot,5,3,"ng-template",null,7,e.W1O),e.YNc(12,Qt,2,1,"ng-template",null,8,e.W1O)),2&d&&(e.Q6J("ngSwitch",c.formLayout),e.xp6(1),e.Q6J("ngSwitchCase","horizontal"),e.xp6(1),e.Q6J("ngSwitchCase","inline"),e.xp6(1),e.Q6J("ngSwitchCase","vertical"))},dependencies:[E.mk,E.O5,E.tP,E.RF,E.n9,E.ED,I.eJ,w.t3,w.SK,s.Nx,s.iK,s.Fd,de.ZU,g.M2],styles:['.typeahead-match[_ngcontent-%COMP%]{font-weight:700}.layout-vertical[_ngcontent-%COMP%]     nz-form-item:first-of-type{flex-wrap:nowrap;flex-direction:column}.layout-horizontal[_ngcontent-%COMP%]     nz-form-item:first-of-type{flex-direction:inherit}.layout-horizontal[_ngcontent-%COMP%]     nz-form-item:first-of-type nz-form-label{text-align:right;line-height:28px;white-space:inherit;padding:inherit}.layout-inline[_ngcontent-%COMP%]     nz-form-item:first-of-type{flex-direction:inherit}.layout-inline[_ngcontent-%COMP%]     nz-form-item:first-of-type nz-form-label{height:28px;line-height:28px;white-space:inherit;padding:inherit}.cvc-form-field-validation[_ngcontent-%COMP%], .form-field-description[_ngcontent-%COMP%]{min-height:16px;line-height:1.2;margin-top:4px}.cvc-form-field-validation[_ngcontent-%COMP%]   .extra-prompt[_ngcontent-%COMP%], .form-field-description[_ngcontent-%COMP%]   .extra-prompt[_ngcontent-%COMP%]{font-weight:400}.cvc-form-field-validation[_ngcontent-%COMP%]   .extra-description[_ngcontent-%COMP%], .form-field-description[_ngcontent-%COMP%]   .extra-description[_ngcontent-%COMP%]{font-style:oblique}.cvc-form-field-validation[_ngcontent-%COMP%]{font-weight:600}nz-form-item.layout-horizontal[_ngcontent-%COMP%]     nz-form-label:first-of-type label.ant-form-item-required{font-weight:500}nz-form-item.layout-horizontal[_ngcontent-%COMP%]     nz-form-label:first-of-type label.ant-form-item-required:before{border:1px solid #ff4d4f;height:1em;content:""}nz-form-item.layout-horizontal[_ngcontent-%COMP%]     nz-form-label:first-of-type   span.label{padding-right:4px}nz-form-item.layout-horizontal[_ngcontent-%COMP%]     nz-form-label:first-of-type.disabled label   span.label{color:#00000073}nz-form-item.layout-horizontal[_ngcontent-%COMP%]     nz-form-label:first-of-type.error label   span.label{color:#ff4d4f}nz-form-item.layout-horizontal[_ngcontent-%COMP%]     nz-form-label:first-of-type.valid label   span.label{color:#ff4d4f}nz-form-item.layout-vertical[_ngcontent-%COMP%]{background-color:#fff;border:1px solid #d9d9d9;padding:4px 8px;border-radius:6px;margin-bottom:16px}nz-form-item.layout-vertical.disabled[_ngcontent-%COMP%]{border:1px solid #f5f5f5;background-color:#f5f5f5}nz-form-item.layout-vertical[_ngcontent-%COMP%]     nz-form-label:first-of-type label.ant-form-item-required{font-weight:500}nz-form-item.layout-vertical[_ngcontent-%COMP%]     nz-form-label:first-of-type label.ant-form-item-required:before{border:1px solid #ff4d4f;height:1em;content:""}nz-form-item.layout-vertical[_ngcontent-%COMP%]     nz-form-label:first-of-type   span.label{padding-right:4px}nz-form-item.layout-vertical[_ngcontent-%COMP%]     nz-form-label:first-of-type.disabled label   span.label{color:#00000073}nz-form-item.layout-vertical[_ngcontent-%COMP%]     nz-form-label:first-of-type.error label   span.label{color:#ff4d4f}nz-form-item.layout-vertical[_ngcontent-%COMP%]     nz-form-label:first-of-type.valid label   span.label{color:#ff4d4f}nz-form-item.layout-inline[_ngcontent-%COMP%]     nz-form-label:first-of-type{text-align:right;margin-right:6px}nz-form-item.layout-inline[_ngcontent-%COMP%]     nz-form-label:first-of-type label.ant-form-item-required{font-weight:500}nz-form-item.layout-inline[_ngcontent-%COMP%]     nz-form-label:first-of-type label.ant-form-item-required:before{border:1px solid #ff4d4f;height:1em;content:""}nz-form-item.layout-inline[_ngcontent-%COMP%]     nz-form-label:first-of-type   span.label{padding-right:4px}nz-form-item.layout-inline[_ngcontent-%COMP%]     nz-form-label:first-of-type.disabled label   span.label{color:#00000073}nz-form-item.layout-inline[_ngcontent-%COMP%]     nz-form-label:first-of-type.error label   span.label{color:#ff4d4f}nz-form-item.layout-inline[_ngcontent-%COMP%]     nz-form-label:first-of-type.valid label   span.label{color:#ff4d4f}'],changeDetection:0});var At=a(7570),_t=a(1102);const Xt={wrappers:[{name:"form-field",component:mn}]};class lt{}lt.\u0275fac=function(d){return new(d||lt)},lt.\u0275mod=e.oAB({type:lt}),lt.\u0275inj=e.cJS({imports:[E.ez,I._N,I.pP,t.UX,s.U5,w.Jb,_t.PV,At.cg,de.ZJ,g.X0.forChild(Xt)]});var kt=a(8213);class sn extends g.fS{constructor(){super(...arguments),this.defaultOptions={props:{indeterminate:!0,hideLabel:!0}}}ngAfterViewInit(){console.log(this.props)}}sn.\u0275fac=function(){let f;return function(c){return(f||(f=e.n5z(sn)))(c||sn)}}(),sn.\u0275cmp=e.Xpm({type:sn,selectors:[["cvc-checkbox"]],features:[e.qOj],decls:2,vars:4,consts:[["nz-checkbox","",3,"nzIndeterminate","formControl","formlyAttributes","ngModelChange"]],template:function(d,c){1&d&&(e.TgZ(0,"label",0),e.NdJ("ngModelChange",function(re){return c.props.change&&c.props.change(c.field,re)}),e._uU(1),e.qZA()),2&d&&(e.Q6J("nzIndeterminate",c.props.indeterminate&&null==c.formControl.value)("formControl",c.formControl)("formlyAttributes",c.field),e.xp6(1),e.hij(" ",c.props.label,"\n"))},dependencies:[t.JJ,t.oH,kt.Ie,g.JD],changeDetection:0});const On={types:[{name:"checkbox",wrappers:["form-field"],component:sn}]};class zn{}zn.\u0275fac=function(d){return new(d||zn)},zn.\u0275mod=e.oAB({type:zn}),zn.\u0275inj=e.cJS({imports:[E.ez,t.UX,kt.Wr,g.X0.forChild(On),lt]});var Yt=a(6672),xt=a(9444);class Ye{}Ye.\u0275fac=function(d){return new(d||Ye)},Ye.\u0275mod=e.oAB({type:Ye}),Ye.\u0275inj=e.cJS({imports:[E.ez,Yt.X,_t.PV,At.cg,xt.s]});var $e=a(7221),Ae=a(5635),Ze=a(8231);class oe{}oe.\u0275fac=function(d){return new(d||oe)},oe.\u0275mod=e.oAB({type:oe}),oe.\u0275inj=e.cJS({imports:[E.ez,t.UX,g.X0.forChild(),$e.F,_t.PV,s.U5,Ze.LV,Ae.o7,xt.s]});var J=a(915),Te=a(655),Pe=a(9933),Ge=a(9300),it=a(1135),yt=a(4004),Ut=a(6579);function $t(){var f;let d=((f=class extends g.fS{constructor(){super()}configureBaseField(){this.field?.options?.fieldChanges?(this.onModelChange$=this.field.options.fieldChanges.pipe((0,Ge.h)(y=>y.field.id===this.field.id),(0,Ut.j)("value")),this.onValueChange$=new it.X(this.formControl.value?this.formControl.value:void 0),this.onModelChange$.pipe((0,Pe.t)(this)).subscribe(y=>{this.onValueChange$.next(y)}),this.field.options?.formState&&this.field.options.formState.fields&&(this.state=this.field.options.formState,this.autoConfigureStateValueChanges())):console.error(`${this.field.id} could not find its fieldChanges Observable, ensure configureBaseField() is called in this field's AfterViewInit hook.`)}autoConfigureStateValueChanges(){!this.field.key&&"string"==typeof this.field.key&&console.warn(`${this.field.id} cannot auto-configure state value changes, as its field key is not a string. field.key: `,this.field.key);const y=`${this.field.key}$`;this.state&&this.state.fields[y]?(this.stateValueChange$=this.state.fields[y],this.onValueChange$.pipe((0,yt.U)(re=>null===re?void 0:re),(0,Pe.t)(this)).subscribe(re=>{this.stateValueChange$&&this.stateValueChange$.next(re)})):console.warn(`${this.field.id} could not find state field ${y} on form state. State: `,this.state)}}).\u0275fac=function(y){return new(y||f)},f.\u0275cmp=e.Xpm({type:f,selectors:[["ng-component"]],features:[e.qOj],decls:0,vars:0,template:function(y,re){},encapsulation:2}),f);return d=(0,Te.gn)([(0,Pe.c)()],d),d}var Je=a(7579),tt=a(1365);function pt(){return function(d){class c extends d{configureEnumSelectField(re){this.selectOption$=new it.X([]),this.onTagClose$=new Je.x,this.optionEnum$=re.optionEnum$,this.changeDetectorRef=re.changeDetectorRef,this.optionTemplate$=re.optionTemplate$?re.optionTemplate$:new it.X([]),this.optionTemplate$.pipe((0,tt.M)(this.optionEnum$),(0,Pe.t)(this)).subscribe(ht=>{this.emitSelectOptions(ht)}),this.onTagClose$.pipe((0,Pe.t)(this)).subscribe(ht=>{this.resetField()})}emitSelectOptions([re,ht]){this.selectOption$.next(ht.map((It,Mn)=>({label:re[Mn]||It,value:It}))),this.changeDetectorRef?this.changeDetectorRef.detectChanges():console.error(`${this.field.id}'s configureEnumTagField() requires valid ChangeDetectorRef option, none detected.`)}resetField(){this.formControl.setValue(this.props.isMultiSelect?[]:void 0)}}return c.\u0275fac=function(){let y;return function(ht){return(y||(y=e.n5z(c)))(ht||c)}}(),c.\u0275prov=e.Yz7({token:c,factory:c.\u0275fac}),c}}var Rt=a(5684);const jt=function zt(f){for(var d=arguments.length,c=new Array(d>1?d-1:0),y=1;y<d;y++)c[y-1]=arguments[y];return c.reduce(function(re,ht){return ht(re)},f)},Lt=function(){return[]};class We{constructor(){this.cvcSelectMode="default",this.cvcPlaceholder="Select an option",this.cvcOptions=[],this.cvcShowError=!1,this.cvcDisabled=!1,this.cvcAllowClear=!0,this.cvcCustomTemplate=null,this.cvcOnFocus=new e.vpe}}We.\u0275fac=function(d){return new(d||We)},We.\u0275cmp=e.Xpm({type:We,selectors:[["cvc-enum-select"]],inputs:{cvcFormControl:"cvcFormControl",cvcFormlyAttributes:"cvcFormlyAttributes",cvcSelectMode:"cvcSelectMode",cvcPlaceholder:"cvcPlaceholder",cvcOptions:"cvcOptions",cvcShowError:"cvcShowError",cvcDisabled:"cvcDisabled",cvcAllowClear:"cvcAllowClear",cvcModelChange:"cvcModelChange",cvcCustomTemplate:"cvcCustomTemplate"},outputs:{cvcOnFocus:"cvcOnFocus"},decls:1,vars:12,consts:[[3,"formControl","formlyAttributes","nzMode","nzPlaceHolder","nzOptions","nzCustomTemplate","nzOptionHeightPx","nzDisabled","nzAllowClear","nzFocus","ngModelChange"]],template:function(d,c){1&d&&(e.TgZ(0,"nz-select",0),e.NdJ("nzFocus",function(){return c.cvcOnFocus.next()})("ngModelChange",function(re){return c.cvcModelChange&&c.cvcModelChange(c.cvcFormlyAttributes,re)}),e.qZA()),2&d&&(e.ekj("ng-dirty",c.cvcShowError),e.Q6J("formControl",c.cvcFormControl)("formlyAttributes",c.cvcFormlyAttributes)("nzMode",c.cvcSelectMode)("nzPlaceHolder",c.cvcPlaceholder?c.cvcPlaceholder:"Select Value")("nzOptions",c.cvcOptions?c.cvcOptions:e.DdM(11,Lt))("nzCustomTemplate",c.cvcCustomTemplate?c.cvcCustomTemplate:null)("nzOptionHeightPx",30)("nzDisabled",c.cvcDisabled)("nzAllowClear",c.cvcAllowClear))},dependencies:[t.JJ,t.oH,g.JD,Ze.Vq],changeDetection:0});var j=a(4110),P=a(8926);function K(f,d){}function ze(f,d){if(1&f){const c=e.EpF();e.TgZ(0,"span",5)(1,"nz-tag",6),e.NdJ("nzOnClose",function(re){e.CHM(c);const ht=e.oxw();return e.KtG(ht.cvcOnClose.next(re))}),e.YNc(2,K,0,0,"ng-template",7),e.qZA()()}if(2&f){const c=e.oxw(),y=e.MAs(5);e.xp6(1),e.Q6J("nzMode",c.cvcMode)("nzTooltipTitle",c.cvcTooltip)("nzChecked",c.cvcChecked),e.xp6(1),e.Q6J("ngTemplateOutlet",y)}}function dt(f,d){}function Le(f,d){if(1&f&&(e.TgZ(0,"span",8)(1,"nz-tag",9),e.YNc(2,dt,0,0,"ng-template",7),e.qZA()()),2&f){const c=e.oxw(),y=e.MAs(5);e.xp6(1),e.Q6J("nzMode","checkable")("nzChecked",c.cvcChecked),e.xp6(1),e.Q6J("ngTemplateOutlet",y)}}function ge(f,d){}function Se(f,d){if(1&f){const c=e.EpF();e.TgZ(0,"span",10)(1,"nz-tag",11),e.NdJ("nzOnClose",function(re){e.CHM(c);const ht=e.oxw();return e.KtG(ht.cvcOnClose.next(re))}),e.YNc(2,ge,0,0,"ng-template",7),e.qZA()()}if(2&f){e.oxw();const c=e.MAs(5);e.xp6(1),e.Q6J("nzMode","closeable"),e.xp6(1),e.Q6J("ngTemplateOutlet",c)}}function ut(f,d){}function vt(f,d){if(1&f&&(e.TgZ(0,"span",12)(1,"nz-tag",13),e.YNc(2,ut,0,0,"ng-template",7),e.qZA()()),2&f){const c=e.oxw(),y=e.MAs(5);e.xp6(1),e.Q6J("nzMode","default")("nzTooltipTitle",c.cvcTooltip),e.xp6(1),e.Q6J("ngTemplateOutlet",y)}}const qt=function(f){return{"tag-icon-large":f}};function Ct(f,d){if(1&f&&(e._UZ(0,"i",16),e.ALo(1,"evidenceEnumDisplay")),2&f){const c=e.oxw(2);e.Q6J("nzType",!0===c.cvcShowIcon?e.xi3(1,5,c.cvcAttrValue,"icon-name"):c.cvcShowIcon)("nzTwotoneColor",c.cvcIconColor)("nzTheme",c.cvcIconTheme)("ngClass",e.VKq(8,qt,!0===c.cvcZoomIcon)),e.uIk("style","color: "+c.cvcIconColor,e.Ckj)}}function tn(f,d){if(1&f&&(e._UZ(0,"span",17),e.ALo(1,"highlightTypeahead"),e.ALo(2,"evidenceEnumDisplay")),2&f){const c=e.oxw(2);e.Q6J("innerHtml",e.xi3(1,1,e.xi3(2,4,c.cvcAttrValue,"display-string"===c.cvcShowLabel?c.cvcShowLabel:"short-string"),c.cvcEmphasize),e.oJD)}}function je(f,d){if(1&f&&(e.YNc(0,Ct,2,10,"i",14),e.YNc(1,tn,3,7,"span",15)),2&f){const c=e.oxw();e.Q6J("ngIf",c.cvcAttrValue&&c.cvcShowIcon),e.xp6(1),e.Q6J("ngIf",c.cvcShowLabel)}}class Qe{constructor(){this.cvcShowLabel="display-string",this.cvcShowIcon=!0,this.cvcZoomIcon=!1,this.cvcContext="default",this.cvcMode="default",this.cvcChecked=!1,this.cvcIconColor="#797979",this.cvcLabelColor="#434343",this.cvcIconTheme="outline",this.cvcFullWidth=!1,this.cvcOnClose=new e.vpe}ngOnChanges(d){d.cvcContext&&"compact"===d.cvcContext.currentValue&&(this.cvcShowIcon=!0,this.cvcShowLabel=!1,this.cvcZoomIcon=!0)}}Qe.\u0275fac=function(d){return new(d||Qe)},Qe.\u0275cmp=e.Xpm({type:Qe,selectors:[["cvc-attribute-tag"]],hostVars:2,hostBindings:function(d,c){2&d&&e.ekj("full-width",!0===c.cvcFullWidth)},inputs:{cvcAttrValue:"cvcAttrValue",cvcShowLabel:"cvcShowLabel",cvcShowIcon:"cvcShowIcon",cvcZoomIcon:"cvcZoomIcon",cvcTooltip:"cvcTooltip",cvcContext:"cvcContext",cvcMode:"cvcMode",cvcChecked:"cvcChecked",cvcEmphasize:"cvcEmphasize",cvcIconColor:"cvcIconColor",cvcLabelColor:"cvcLabelColor",cvcIconTheme:"cvcIconTheme",cvcFullWidth:"cvcFullWidth"},outputs:{cvcOnClose:"cvcOnClose"},features:[e.TTD],decls:6,vars:4,consts:[["class","default",4,"ngIf"],["class","menu-item",4,"ngIf"],["class","select-item",4,"ngIf"],["class","compact",4,"ngIf"],["tagContent",""],[1,"default"],["nz-tooltip","",3,"nzMode","nzTooltipTitle","nzChecked","nzOnClose"],[3,"ngTemplateOutlet"],[1,"menu-item"],[3,"nzMode","nzChecked"],[1,"select-item"],[3,"nzMode","nzOnClose"],[1,"compact"],["nz-tooltip","",3,"nzMode","nzTooltipTitle"],["nz-icon","","class","tag-icon",3,"nzType","nzTwotoneColor","nzTheme","ngClass",4,"ngIf"],["class","tag-label",3,"innerHtml",4,"ngIf"],["nz-icon","",1,"tag-icon",3,"nzType","nzTwotoneColor","nzTheme","ngClass"],[1,"tag-label",3,"innerHtml"]],template:function(d,c){1&d&&(e.YNc(0,ze,3,4,"span",0),e.YNc(1,Le,3,3,"span",1),e.YNc(2,Se,3,2,"span",2),e.YNc(3,vt,3,3,"span",3),e.YNc(4,je,2,2,"ng-template",null,4,e.W1O)),2&d&&(e.Q6J("ngIf","default"===c.cvcContext),e.xp6(1),e.Q6J("ngIf","menu-item"===c.cvcContext),e.xp6(1),e.Q6J("ngIf","select-item"===c.cvcContext),e.xp6(1),e.Q6J("ngIf","compact"===c.cvcContext))},dependencies:[E.mk,E.O5,E.tP,Yt.j,_t.Ls,At.SY,j.Do,P.A],styles:['.full-width[_nghost-%COMP%]{width:100%}.full-width[_nghost-%COMP%]   nz-tag[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]   nz-tag[_ngcontent-%COMP%]{margin-right:0;margin-inline-end:4px}.default[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]{margin:0;padding:0 2px 0 0;margin-inline-end:4px;max-width:100%}.default[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon[_ngcontent-%COMP%], .default[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon-large[_ngcontent-%COMP%]{display:inline-block}.default[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon[_ngcontent-%COMP%]{padding:3px 2px 3px 4px;margin:-3px 0}.default[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon-large[_ngcontent-%COMP%]{padding:3px 2px 3px 4px;margin:-3px 0}.default[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon-large[_ngcontent-%COMP%]     svg{transform:scale(1.25)}.default[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-label[_ngcontent-%COMP%]{display:inline-block;margin:-3px 0 -4px;padding:3px 3px 3px 2px;line-height:1}.default[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]     i.ant-tag-close-icon.anticon-close{transition:none;margin-left:3px}.compact[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]{margin:0;padding:0 2px 0 0;margin-inline-end:4px;max-width:100%}.compact[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon[_ngcontent-%COMP%], .compact[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon-large[_ngcontent-%COMP%]{display:inline-block}.compact[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon[_ngcontent-%COMP%]{padding:3px 2px 3px 4px;margin:-3px 0}.compact[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon-large[_ngcontent-%COMP%]{padding:3px 2px 3px 4px;margin:-3px 0}.compact[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon-large[_ngcontent-%COMP%]     svg{transform:scale(1.25)}.compact[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-label[_ngcontent-%COMP%]{display:inline-block;margin:-3px 0 -4px;padding:3px 3px 3px 2px;line-height:1}.compact[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]     i.ant-tag-close-icon.anticon-close{transition:none;margin-left:3px}.menu-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]{background-color:#fff}.menu-item[_ngcontent-%COMP%]   nz-tag.ant-tag-checkable[_ngcontent-%COMP%]{border:1px solid #d9d9d9}.menu-item[_ngcontent-%COMP%]   nz-tag.ant-tag-checkable[_ngcontent-%COMP%]:active{background-color:#e6f7ff}.menu-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]:not(.menu-item   nz-tag.ant-tag-checkable-checked)[_ngcontent-%COMP%]:hover{color:#000000d9;border-color:#1890ff}.menu-item[_ngcontent-%COMP%]   nz-tag.ant-tag-checkable-checked[_ngcontent-%COMP%]{border:transparent;background-color:#fff;color:#000000d9}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]{margin:0;padding:0 2px 0 0;margin-inline-end:4px;max-width:100%}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon[_ngcontent-%COMP%], .select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon-large[_ngcontent-%COMP%]{display:inline-block}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon[_ngcontent-%COMP%]{padding:3px 2px 3px 4px;margin:-3px 0}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon-large[_ngcontent-%COMP%]{padding:3px 2px 3px 4px;margin:-3px 0}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon-large[_ngcontent-%COMP%]     svg{transform:scale(1.25)}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-label[_ngcontent-%COMP%]{display:inline-block;margin:-3px 0 -4px;padding:3px 3px 3px 2px;line-height:1}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]     i.ant-tag-close-icon.anticon-close{transition:none;margin-left:3px}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]{background:#f5f5f5;border:1px solid #f0f0f0}.multi-select-item[_ngcontent-%COMP%]{display:inline-block;margin-top:-3px;margin-bottom:-3px;margin-left:-4px;padding-left:4px}.multi-select-item[_ngcontent-%COMP%]   .tag-icon[_ngcontent-%COMP%]:after{content:" "}.typeahead-match[_ngcontent-%COMP%]{font-weight:700}'],changeDetection:0});const ft=["optionTemplates"];function Re(f,d){if(1&f&&e._UZ(0,"cvc-attribute-tag",4),2&f){const c=e.oxw().$implicit;e.Q6J("cvcAttrValue",c)}}function He(f,d){1&f&&(e.ynx(0),e.YNc(1,Re,1,1,"ng-template",null,3,e.W1O),e.BQk())}function Ie(f,d){if(1&f){const c=e.EpF();e.TgZ(0,"div",5)(1,"cvc-attribute-tag",6),e.NdJ("cvcOnClose",function(re){e.CHM(c);const ht=e.oxw();return e.KtG(ht.onTagClose$.next(re))}),e.qZA()()}if(2&f){const c=d.$implicit,y=e.oxw();e.xp6(1),e.Q6J("cvcAttrValue",c.nzValue)("cvcContext",y.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",y.props.isMultiSelect?"default":"closeable")}}const he={Evidence:{PREDICTIVE:{SUPPORTS:"Experiment or study supports the variant's response to a drug",DOES_NOT_SUPPORT:"Experiment or study does not support, or was inconclusive of an interaction between the variant and a drug"},DIAGNOSTIC:{SUPPORTS:"Experiment or study supports the variant's impact on the diagnosis of disease or subtype",DOES_NOT_SUPPORT:"Experiment or study does not support the variant's impact on diagnosis of disease or subtype"},PROGNOSTIC:{SUPPORTS:"Experiment or study supports the variant's impact on prognostic outcome",DOES_NOT_SUPPORT:"Experiment or study does not support a prognostic association between variant and outcome"},PREDISPOSING:{SUPPORTS:"Suggests a pathogenic or a protective role for a germline variant in cancer",DOES_NOT_SUPPORT:"Supports a benign (for Predisposition) or lack of protective (for Protectiveness) role for a germline variant in cancer."},FUNCTIONAL:{SUPPORTS:"Experiment or study supports the variant causing alteration or non-alteration of the gene product function",DOES_NOT_SUPPORT:"Experiment or study does not support the variant causing alteration or non-alteration of the gene product function"},ONCOGENIC:{NA:"Not Applicable for Oncogenic Evidence Type.",SUPPORTS:"Supports an oncogenic or protective role for a somatic variant.",DOES_NOT_SUPPORT:"Supports a benign (for Oncogenicity) or lack of protective (for Protectiveness) role for a somatic variant in cancer."}},Assertion:{PREDICTIVE:{SUPPORTS:"Support the variant's response to a drug",DOES_NOT_SUPPORT:"Does not support, or was inconclusive of an interaction between the variant and a drug"},DIAGNOSTIC:{SUPPORTS:"Supports the variant's impact on the diagnosis of disease or subtype",DOES_NOT_SUPPORT:"Does not support the variant's impact on diagnosis of disease or subtype"},PROGNOSTIC:{SUPPORTS:"Supports the variant's impact on prognostic outcome",DOES_NOT_SUPPORT:"Does not support a prognostic association between variant and outcome"},PREDISPOSING:{SUPPORTS:"Suggests a pathogenic or a protective role for a germline variant in cancer",DOES_NOT_SUPPORT:"Does not support an association between the variant and disease causation"},FUNCTIONAL:{SUPPORTS:"Supports the variant causing alteration or non-alteration of the gene product function",DOES_NOT_SUPPORT:"Does not support the variant causing alteration or non-alteration of the gene product function"},ONCOGENIC:{SUPPORTS:"Supports an oncogenic or protective role for a somatic variant",DOES_NOT_SUPPORT:"Does not support an association between the variant and disease causation"}}},we=jt($t(),pt());class ce extends we{constructor(d){super(),this.cdr=d,this.defaultOptions={props:{label:"Direction",labelFn:c=>`${c} Direction`,required:!0,isMultiSelect:!1,placeholder:"Select Entity Direction",placeholderFn:(c,y)=>`Select ${y?y+" ":""}${c} Direction`,requireTypePromptFn:c=>`Select ${c} Type to select its Direction`,formMode:"add"}},this.directionEnum$=new it.X([])}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEnumSelectField({optionEnum$:this.directionEnum$,optionTemplate$:this.optionTemplate$,changeDetectorRef:this.cdr})}configureStateConnections(){if(!this.state)return console.error(`${this.field.id} requires a form state to populate its options, none was found.`),void(this.placeholder$=new it.X("ERROR: Form state not found"));if(this.props.label=this.props.labelFn(this.state.entityName),this.props.tooltip=`An indicator of whether the ${this.state.entityName} statement supports or refutes the clinical significance of an event.`,this.placeholder$=new it.X(this.props.placeholderFn(this.state.entityName)),!this.state.enums.direction$)return void console.error(`${this.field.id} could not find form state's direction$ to populate select.`);this.state.enums.direction$.pipe((0,Pe.t)(this)).subscribe(c=>{this.directionEnum$.next(c)}),this.optionTemplates||console.info(`${this.field.id} could not find its optionTemplates QueryList to populate its select options, so simple text labels will be displayed.`),this.optionTemplate$=this.optionTemplates?.changes.pipe((0,yt.U)(c=>c.map(y=>y)));const d=`${this.state.entityName.toLowerCase()}Type$`;this.state.fields[d]?(this.onEntityType$=this.state.fields[d],this.onEntityType$.pipe((0,Rt.T)("add"===this.props.formMode?0:1),(0,Pe.t)(this)).subscribe(c=>{c?(this.props.disabled=!1,this.props.description=void 0,this.props.extraType=void 0,this.placeholder$.next(this.props.placeholderFn(this.state.entityName,(0,J.E)(c)))):(this.props.disabled=!0,this.props.description=this.props.requireTypePromptFn(this.state.entityName),this.props.extraType="prompt"),this.formControl.value&&this.formControl.setValue(void 0)}),this.onValueChange$.pipe((0,tt.M)(this.onEntityType$),(0,Pe.t)(this)).subscribe(([c,y])=>{!y||!c||!this.state||(this.props.extraType="description",this.props.description=he[this.state.entityName][y][c])})):console.error(`${this.field.id} could not find form state's ${d} to populate Direction options.`)}}ce.\u0275fac=function(d){return new(d||ce)(e.Y36(e.sBO))},ce.\u0275cmp=e.Xpm({type:ce,selectors:[["cvc-direction-select"]],viewQuery:function(d,c){if(1&d&&e.Gf(ft,5,e.Rgc),2&d){let y;e.iGM(y=e.CRH())&&(c.optionTemplates=y)}},features:[e.qOj],decls:7,vars:15,consts:[[3,"cvcFormControl","cvcFormlyAttributes","cvcSelectMode","cvcPlaceholder","cvcCustomTemplate","cvcOptions","cvcShowError","cvcDisabled"],[4,"ngFor","ngForOf"],["selectedTemplate",""],["optionTemplates",""],[3,"cvcAttrValue"],[1,"ant-select-selection-item-content"],[3,"cvcAttrValue","cvcContext","cvcMode","cvcOnClose"]],template:function(d,c){if(1&d&&(e._UZ(0,"cvc-enum-select",0),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.YNc(3,He,3,0,"ng-container",1),e.ALo(4,"ngrxPush"),e.YNc(5,Ie,2,3,"ng-template",null,2,e.W1O)),2&d){const y=e.MAs(6);e.Q6J("cvcFormControl",c.formControl)("cvcFormlyAttributes",c.field)("cvcSelectMode",c.props.isMultiSelect?"multiple":"default")("cvcPlaceholder",e.lcZ(1,9,c.placeholder$))("cvcCustomTemplate",y)("cvcOptions",e.lcZ(2,11,c.selectOption$))("cvcShowError",c.showError)("cvcDisabled",c.props.disabled),e.xp6(3),e.Q6J("ngForOf",e.lcZ(4,13,c.directionEnum$))}},dependencies:[E.sg,We,Qe,I.fM],changeDetection:0});const nt={types:[{name:"direction-select",wrappers:["form-field"],component:ce}]};class be{}be.\u0275fac=function(d){return new(d||be)},be.\u0275mod=e.oAB({type:be}),be.\u0275inj=e.cJS({imports:[E.ez,t.UX,I._N,I.pP,g.X0.forChild(nt),lt,oe,Ye]});var rt=a(2383),Zt=a(3258),nn=a(6903),xn=a(9597);class jn{}jn.\u0275fac=function(d){return new(d||jn)},jn.\u0275mod=e.oAB({type:jn}),jn.\u0275inj=e.cJS({imports:[E.ez,t.UX,I._N,I.pP,g.X0.forChild(),xn.L,_t.PV,Ze.LV,Ae.o7,s.U5,de.ZJ,rt.ic,nn.zf,Zt.x,xt.s]});var Un=a(9676),Yn=a(6616),Bn=a(6960),co=a(6581),Wo=a(4707),Lo=a(9751),uo=a(9646),jo=a(3900),Io=a(1884),di=a(457),ko=a(8382),Xo=a(9770),Nn=a(8505),Qn=a(3240),io=a(9841);function ti(...f){let d=f[0],c=f[1];if(0===d.length)return(0,uo.of)(c?c([]):[]);const y=d.slice();return c&&y.push((...re)=>c(re)),io.a.apply(null,y)}function yo(){return function(d){class c extends d{configureEntitySelectField(re){if(this.typeaheadQuery=re.typeaheadQuery,this.tagQuery=re.tagQuery,this.getTypeaheadVars=re.getTypeaheadVarsFn,this.getTypeahedResults=re.getTypeaheadResultsFn,this.getTagQueryVars=re.getTagQueryVarsFn,this.getTagQueryResults=re.getTagQueryResultsFn,this.getSelectedItemOption=re.getSelectedItemOptionFn,this.getSelectOptions=re.getSelectOptionsFn,this.typeaheadParam$=re.typeaheadParam$,this.typeaheadParamName$=re.typeaheadParamName$,this.selectOpen$=re.selectOpen$||new Wo.t,this.selectComponent=re.selectComponent,this.minSearchStrLength=re.minSearchStrLength||0,this.cdr=re.changeDetectorRef,this.onSearch$=new it.X(void 0),this.isLoading$=new Lo.y,this.result$=new it.X([]),this.onPopulate$=new Je.x,this.onTagClose$=new Je.x,this.onOpenChange$=new Je.x,this.onCreate$=new Je.x,this.selectOption$=new it.X(void 0),this.response$=this.onSearch$.pipe((0,Rt.T)(1),(0,Ge.h)(Qn.ep),(0,Ge.h)(ht=>0===this.minSearchStrLength||ht.length>=this.minSearchStrLength),(0,tt.M)(void 0!==this.typeaheadParam$?this.typeaheadParam$:(0,uo.of)(void 0)),(0,jo.w)(([ht,It])=>{const Mn=this.getTypeaheadVars(ht,It),kn=ji=>(this.queryRef=this.typeaheadQuery.watch(ji),this.isLoading$=this.queryRef.valueChanges.pipe((0,Ut.j)("loading"),(0,Io.x)()),this.queryRef.valueChanges),Uo=ji=>(0,di.D)(this.queryRef.refetch(ji));return(0,ko.s)(()=>void 0===this.queryRef,(0,Xo.P)(()=>kn(Mn)),(0,Xo.P)(()=>Uo(Mn)))})),this.onOpenChange$.subscribe(ht=>{ht&&this.onSearch$.next("")}),this.response$.pipe((0,Ge.h)(ht=>void 0!==ht.data),(0,yt.U)(ht=>this.getTypeahedResults(ht)),(0,Pe.t)(this)).subscribe(ht=>{this.result$.next(ht),0===ht.length&&this.selectOption$.next([]),this.cdr.detectChanges()}),this.optionTemplates?this.optionTemplates.changes.pipe((0,tt.M)(this.result$),(0,Pe.t)(this)).subscribe(([ht,It])=>{const Mn=this.getSelectOptions(It,ht);this.selectOption$.next(Mn),this.cdr.detectChanges()}):(console.warn(`${this.field.id} could not find reference to optionTemplates ViewChildren, options will only show entity name text.`),this.result$.pipe((0,Pe.t)(this)).subscribe(ht=>{this.selectOption$.next(ht.map(It=>({label:It.name,value:It.id})))})),this.onPopulate$.pipe((0,Ge.h)(Qn.ep),(0,jo.w)(ht=>ti(this.getTagQueries(ht))),(0,yt.U)(ht=>ht.map(It=>this.getTagQueryResults(It))),(0,Nn.b)(ht=>{this.result$.next(ht)}),(0,Pe.t)(this)).subscribe(ht=>{let It;if(this.field.props&&this.field.props.isMultiSelect){const Mn=[];ht.forEach(kn=>Mn.push(kn?.id||void 0)),It=Mn}else It=ht[0].id;this.formControl.setValue(It),this.selectOpen$.next(!1)}),this.formControl.value){const ht=this.formControl.value;if(Object.keys(ht).length>0&&ht.constructor===Object)return void console.error(`${this.field.id} prepopulated value must be a primitive or array of primitives, value is an object:`,ht);this.onPopulate$.next(ht)}this.onTagClose$.pipe((0,Pe.t)(this)).subscribe(ht=>{this.resetField()})}getTagQueries(re){return"number"==typeof re&&(re=[re]),re.map(It=>this.tagQuery.fetch(this.getTagQueryVars(It),{fetchPolicy:"cache-first"}).pipe((0,Ge.h)(Mn=>!!Mn.data)))}resetField(){this.formControl.setValue(void 0),this.result$&&this.result$.next([])}}return c.\u0275fac=function(){let y;return function(ht){return(y||(y=e.n5z(c)))(ht||c)}}(),c.\u0275prov=e.Yz7({token:c,factory:c.\u0275fac}),c}}var oo,Do=a(5698),bn=a(7630),_o=a(9468),vi=a(4986),Vi=a(4782);function Ji(f,d){1&f&&e._UZ(0,"span",5),2&f&&e.Q6J("nzType","loading")}function or(f,d){if(1&f&&(e.ynx(0),e._uU(1),e.BQk()),2&f){const c=e.oxw(2);e.xp6(1),e.hij(" ",c.notFoundDisplay.message," ")}}const Pi=function(f,d,c){return{$implicit:f,createMsg:d,model:c}};function wr(f,d){if(1&f&&e.GkF(0,6),2&f){const c=e.oxw(2);e.Q6J("ngTemplateOutlet",c.cvcAddEntity)("ngTemplateOutletContext",e.kEZ(2,Pi,c.notFoundDisplay.searchStr,c.notFoundDisplay.message,c.cvcAddEntityModel))}}function qe(f,d){if(1&f&&(e.YNc(0,Ji,1,1,"span",2),e.YNc(1,or,2,1,"ng-container",3),e.YNc(2,wr,1,6,"ng-container",4)),2&f){const c=e.oxw();e.Q6J("ngIf",c.notFoundDisplay.showSpinner),e.xp6(1),e.Q6J("ngIf",!c.notFoundDisplay.showAddForm),e.xp6(1),e.Q6J("ngIf",c.notFoundDisplay.showAddForm)}}const se=function(){return[]},Fe={search:(f,d,c)=>`Searching ${f} matching "${d}"...`,searchAll:(f,d,c)=>`Listing all ${f}...`,searchParam:(f,d,c)=>`Searching ${c} ${f} matching "${d}"...`,searchParamAll:(f,d,c)=>`Listing all ${c} ${f}...`,searchEnterQuery:(f,d,c,y)=>`Enter at least ${y} characters to search ${c} ${f}`,searchEnterQueryAll:(f,d,c,y)=>`Enter at least least ${y} characters to search ${f}`,empty:(f,d,c)=>`No ${f} found matching "${d}"`,emptyAll:(f,d,c)=>`No ${f} found.`,emptyParam:(f,d,c)=>`No ${c} ${f} found matching "${d}"`,emptyParamAll:(f,d,c)=>`No ${c} ${f} found`};let Ue=((oo=class{constructor(d){this.cdr=d,this.cvcEntityName={singular:"Entity",plural:"Entities"},this.cvcSelectMode="default",this.cvcLoading=!1,this.cvcOptions=void 0,this.cvcShowError=!1,this.cvcDisabled=!1,this.cvcAllowClear=!0,this.cvcBorderless=!1,this.cvcShowArrow=!1,this.cvcAutoClearSearchValue=!0,this.cvcSuffixIcon="search",this.cvcCustomTemplate=null,this.cvcDropdownExtra=null,this.cvcAddEntity=null,this.cvcMinSearchStrLength=0,this.cvcOnOpenChange=new e.vpe,this.cvcOnSearch=(new e.vpe).pipe((0,_o.p)(300,vi.z,{leading:!1,trailing:!0}),(0,Vi.d)(1)),this.cvcOnModelChange=new e.vpe,this.cvcSelectComponent=new e.vpe,this.messageOptions=Fe,this.onParamName$=new it.X(void 0),this.onOption$=new it.X([]),this.onOpenChange$=new it.X(!1),this.onLoading$=new it.X(!1),this.previousIsOpen=!1}ngAfterViewInit(){this.cvcSelectMessages&&(this.messageOptions={...this.messageOptions,...this.cvcSelectMessages}),this.nzSelectComponent?(this.cvcSelectComponent.next(this.nzSelectComponent),this.notFoundDisplay={searchStr:"",showSpinner:!0,showAddForm:!1,message:`Searching ${this.cvcEntityName.plural}...`},this.onOpenChange$.pipe((0,Pe.t)(this)).subscribe(d=>{this.cvcOnOpenChange.next(d)}),(0,io.a)([this.onOpenChange$,this.cvcOnSearch,this.onParamName$,this.onOption$,this.onLoading$.pipe((0,Io.x)())]).pipe((0,yt.U)(([d,c,y,re,ht])=>{const It=this.cvcEntityName.plural,Mn=this.cvcMinSearchStrLength,kn=null!==this.cvcAddEntity,Uo=!1===this.previousIsOpen&&!0===d;return this.previousIsOpen=d,Uo?this.getSelectInitDisplay(It,Mn,y):ht&&c.length>=Mn?this.getSelectSearchingDisplay(c,It,Mn,y):d&&!ht&&c.length>=Mn&&0===re.length?this.getSelectEmptyDisplay(c,It,y,kn):{searchStr:"",showSpinner:!1,showAddForm:!1,message:""}}),(0,Nn.b)(d=>{this.notFoundDisplay=d}),(0,Pe.t)(this)).subscribe()):console.error(`${this.cvcEntityName.singular} entity-select could not gain reference to its nzSelectComponent, aborting AfterViewInit()`)}getSelectInitDisplay(d,c,y){let re=this.messageOptions.searchAll,ht=!1;return 0==c?(ht=!0,re=void 0===y?this.messageOptions.searchAll:this.messageOptions.searchParamAll):c>0&&(ht=!1,re=void 0===y?this.messageOptions.searchEnterQueryAll:this.messageOptions.searchEnterQuery),{message:re(d,"",y,c),showSpinner:ht,showAddForm:!1,searchStr:""}}getSelectSearchingDisplay(d,c,y,re){let ht=this.messageOptions.searchAll;return ht=void 0===re?d.length>0?this.messageOptions.search:this.messageOptions.searchAll:d.length>0?this.messageOptions.searchParam:this.messageOptions.searchParamAll,{message:ht(c,d,re),showSpinner:!0,showAddForm:!1,searchStr:d}}getSelectEmptyDisplay(d,c,y,re){let ht=this.messageOptions.empty;return ht=void 0===y?d.length>0?this.messageOptions.empty:this.messageOptions.emptyAll:d.length>0?this.messageOptions.emptyParam:this.messageOptions.emptyParamAll,{message:ht(c,d,y),showSpinner:!1,showAddForm:re,searchStr:d}}ngOnChanges(d){if(d.cvcParamName&&this.onParamName$.next(d.cvcParamName.currentValue),d.cvcOptions){const c=d.cvcOptions.currentValue;void 0!==c&&this.onOption$.next(c)}if(d.cvcLoading){const c=d.cvcLoading.currentValue;void 0!==c&&this.onLoading$.next(c)}}}).\u0275fac=function(d){return new(d||oo)(e.Y36(e.sBO))},oo.\u0275cmp=e.Xpm({type:oo,selectors:[["cvc-entity-select"]],viewQuery:function(d,c){if(1&d&&e.Gf(Ze.Vq,5),2&d){let y;e.iGM(y=e.CRH())&&(c.nzSelectComponent=y.first)}},inputs:{cvcFormControl:"cvcFormControl",cvcFormlyAttributes:"cvcFormlyAttributes",cvcEntityName:"cvcEntityName",cvcSelectMessages:"cvcSelectMessages",cvcSelectMode:"cvcSelectMode",cvcPlaceholder:"cvcPlaceholder",cvcLoading:"cvcLoading",cvcOptions:"cvcOptions",cvcResults:"cvcResults",cvcShowError:"cvcShowError",cvcDisabled:"cvcDisabled",cvcAllowClear:"cvcAllowClear",cvcBorderless:"cvcBorderless",cvcShowArrow:"cvcShowArrow",cvcAutoClearSearchValue:"cvcAutoClearSearchValue",cvcSuffixIcon:"cvcSuffixIcon",cvcCustomTemplate:"cvcCustomTemplate",cvcDropdownExtra:"cvcDropdownExtra",cvcParamName:"cvcParamName",cvcAddEntity:"cvcAddEntity",cvcAddEntityModel:"cvcAddEntityModel",cvcSelectOpen:"cvcSelectOpen",cvcMinSearchStrLength:"cvcMinSearchStrLength"},outputs:{cvcOnOpenChange:"cvcOnOpenChange",cvcOnSearch:"cvcOnSearch",cvcOnModelChange:"cvcOnModelChange",cvcSelectComponent:"cvcSelectComponent"},features:[e.TTD],decls:3,vars:21,consts:[["nzShowSearch","","nzServerSearch","","nzAllowClear","",3,"nzDropdownMatchSelectWidth","formControl","formlyAttributes","nzMode","nzPlaceHolder","nzCustomTemplate","nzOptionHeightPx","nzDisabled","nzLoading","nzAllowClear","nzBorderless","nzSuffixIcon","nzShowArrow","nzAutoClearSearchValue","nzOptions","nzDropdownRender","nzNotFoundContent","nzOpen","nzOpenChange","nzOnSearch","ngModelChange"],["searchMessages",""],["nz-icon","",3,"nzType",4,"ngIf"],[4,"ngIf"],[3,"ngTemplateOutlet","ngTemplateOutletContext",4,"ngIf"],["nz-icon","",3,"nzType"],[3,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(d,c){if(1&d&&(e.TgZ(0,"nz-select",0),e.NdJ("nzOpenChange",function(re){return c.onOpenChange$.next(re)})("nzOnSearch",function(re){return c.cvcOnSearch.next(re)})("ngModelChange",function(re){return c.cvcOnModelChange.next(re)}),e.qZA(),e.YNc(1,qe,3,3,"ng-template",null,1,e.W1O)),2&d){const y=e.MAs(2);e.ekj("ng-dirty",c.cvcShowError),e.Q6J("nzDropdownMatchSelectWidth",!0)("formControl",c.cvcFormControl)("formlyAttributes",c.cvcFormlyAttributes)("nzMode",c.cvcSelectMode)("nzPlaceHolder",c.cvcPlaceholder||"Search "+c.cvcEntityName.plural)("nzCustomTemplate",c.cvcCustomTemplate||null)("nzOptionHeightPx",30)("nzDisabled",c.cvcDisabled)("nzLoading",c.cvcLoading)("nzAllowClear",c.cvcAllowClear)("nzBorderless",c.cvcBorderless)("nzSuffixIcon",c.cvcSuffixIcon)("nzShowArrow",c.cvcShowArrow)("nzAutoClearSearchValue",c.cvcAutoClearSearchValue)("nzOptions",c.cvcOptions||e.DdM(20,se))("nzDropdownRender",c.cvcDropdownExtra||null)("nzNotFoundContent",y)("nzOpen",c.cvcSelectOpen)}},dependencies:[E.O5,E.tP,t.JJ,t.oH,g.JD,_t.Ls,Ze.Vq],changeDetection:0}),oo);Ue=(0,Te.gn)([(0,Pe.c)({arrayName:"stateSubscriptions"})],Ue);var wn,Tt=a(8699),Nt=a(6123),Gt=a(9169),pn=a(7044),ln=a(1664),gn=a(7830);function Tn(f,d){if(1&f&&e._uU(0),2&f){const c=e.oxw();e.Oqu(c.successMessage)}}function En(f,d){if(1&f&&(e.ynx(0),e._uU(1),e.BQk()),2&f){const c=e.oxw();e.xp6(1),e.hij(' "',c.model.name,'" ')}}const Pn=function(){return[0,0]};let eo=((wn=class{set cvcSearchString(d){d&&this.searchString$.next(d)}constructor(d,c){this.query=d,this.errors=c,this.cvcOnCreate=new e.vpe,this.form=new t.nJ({}),this.model={name:""},this.formLayout="horizontal",this.options={formState:{formLayout:this.formLayout}},this.onSubmit$=new Je.x,this.searchString$=new it.X(void 0),this.addDiseaseMutator=new Nt.U(this.errors),this.fields=[{key:"doid",type:"input",props:{label:"DOID",keydown:(y,re)=>{"Tab"===re.code&&re.stopPropagation()}}},{key:"name",props:{hidden:!0,required:!0}}],this.searchString$.pipe((0,Pe.t)(this)).subscribe(y=>{y&&(this.model.name=y)}),this.onSubmit$.pipe((0,Pe.t)(this)).subscribe(y=>{console.log("disease-quick-add form model submitted.",y),this.submitDisease(y)})}submitDisease(d){d.name?this.mutationState=this.addDiseaseMutator.mutate(this.query,this.model,{},c=>{console.log("disease-quick-add submit data callback",c),c.addDisease&&(this.successMessage=c.addDisease.new?`New Disease ${c.addDisease.disease.name} added.`:`Existing Disease ${c.addDisease.disease.name} with DOID ${c.addDisease.disease.doid} found. `,setTimeout(()=>{c&&c.addDisease&&this.cvcOnCreate.next(c.addDisease.disease.id)},1e3))}):console.error("disease-quick-add form submitDisease requires model with valid name.")}}).\u0275fac=function(d){return new(d||wn)(e.Y36(bn.MPi),e.Y36(Gt.Y))},wn.\u0275cmp=e.Xpm({type:wn,selectors:[["cvc-disease-quick-add-form"]],inputs:{cvcSearchString:"cvcSearchString"},outputs:{cvcOnCreate:"cvcOnCreate"},decls:11,vars:11,consts:[["entityType","Disease",3,"mutationState","successMessage"],["success",""],["nz-form","","nzLayout","horizontal",3,"formGroup","ngSubmit"],[3,"nzGutter"],["nzSpan","24"],[3,"form","fields","model","options","modelChange"],["nz-button","","nzType","primary","nzBlock","",3,"disabled"],[4,"ngIf"]],template:function(d,c){if(1&d&&(e.TgZ(0,"cvc-form-submission-status-display",0),e.YNc(1,Tn,1,1,"ng-template",null,1,e.W1O),e.TgZ(3,"form",2),e.NdJ("ngSubmit",function(){return c.onSubmit$.next(c.model)}),e.TgZ(4,"nz-row",3)(5,"nz-col",4)(6,"formly-form",5),e.NdJ("modelChange",function(re){return c.model=re}),e.qZA()(),e.TgZ(7,"nz-col",4)(8,"button",6),e._uU(9," Add Disease\xa0 "),e.YNc(10,En,2,1,"ng-container",7),e.qZA()()()()()),2&d){const y=e.MAs(2);e.Q6J("mutationState",c.mutationState)("successMessage",y),e.xp6(3),e.Q6J("formGroup",c.form),e.xp6(1),e.Q6J("nzGutter",e.DdM(10,Pn)),e.xp6(2),e.Q6J("form",c.form)("fields",c.fields)("model",c.model)("options",c.options),e.xp6(2),e.Q6J("disabled",!c.form.valid),e.xp6(2),e.Q6J("ngIf",c.model.name)}},dependencies:[E.O5,t._Y,t.JL,t.sg,g.T7,Yn.ix,pn.w,ln.dQ,w.t3,w.SK,s.Lr,gn.F],encapsulation:2,changeDetection:0}),wn);eo=(0,Te.gn)([(0,Pe.c)()],eo);const Dn=["addDisease"],Rn=["optionTemplates"];function Wn(f,d){if(1&f&&(e.ynx(0),e.TgZ(1,"strong"),e._uU(2,"DOID:"),e.qZA(),e._UZ(3,"span",9),e.ALo(4,"highlightTypeahead"),e.BQk()),2&f){const c=e.oxw(2).$implicit,y=e.oxw().ngrxLet;e.xp6(3),e.Q6J("innerHtml",e.xi3(4,1,c.doid,y),e.oJD)}}function mo(f,d){if(1&f&&(e.ynx(0),e._uU(1," \xa0 "),e.TgZ(2,"strong"),e._uU(3,"Aliases: "),e.qZA(),e.TgZ(4,"em"),e._UZ(5,"span",10),e.ALo(6,"highlightTypeahead"),e.qZA(),e.BQk()),2&f){const c=e.oxw(2).$implicit,y=e.oxw().ngrxLet;e.xp6(5),e.Q6J("nzTooltipTitle",c.diseaseAliases.join(", "))("innerHtml",e.xi3(6,2,c.diseaseAliases.join(", "),y),e.oJD)}}function so(f,d){if(1&f&&(e._UZ(0,"cvc-entity-tag",6),e.TgZ(1,"span",7),e.YNc(2,Wn,5,4,"ng-container",8),e.YNc(3,mo,7,5,"ng-container",8),e._uU(4),e.qZA()),2&f){const c=e.oxw().$implicit,y=e.oxw().ngrxLet;e.Q6J("cvcDisableLink",!0)("cvcCacheId",c.__typename+":"+c.id)("cvcEmphasize",y),e.xp6(2),e.Q6J("ngIf",c.doid),e.xp6(1),e.Q6J("ngIf",c.diseaseAliases.length>0),e.xp6(1),e.hij(" ",y," ")}}function po(f,d){1&f&&(e.ynx(0),e.YNc(1,so,5,6,"ng-template",null,5,e.W1O),e.BQk())}function Zo(f,d){if(1&f&&(e.ynx(0),e.YNc(1,po,3,0,"ng-container",4),e.ALo(2,"ngrxPush"),e.BQk()),2&f){const c=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,c.result$))}}function Ho(f,d){if(1&f){const c=e.EpF();e.TgZ(0,"div",11)(1,"cvc-entity-tag",12),e.NdJ("cvcOnClose",function(){const ht=e.CHM(c).$implicit,It=e.oxw();return e.KtG(It.onTagClose$.next(ht.nzValue))}),e.qZA()()}if(2&f){const c=d.$implicit,y=e.oxw();e.xp6(1),e.Q6J("cvcCacheId","Disease:"+c.nzValue)("cvcContext",y.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",y.props.isMultiSelect?"default":"closeable")}}function zo(f,d){if(1&f){const c=e.EpF();e.TgZ(0,"cvc-disease-quick-add-form",13),e.NdJ("cvcOnCreate",function(re){e.CHM(c);const ht=e.oxw();return e.KtG(ht.onPopulate$.next(re))}),e.qZA()}2&f&&e.Q6J("cvcSearchString",d.$implicit)}const go=jt($t(),yo());class Vo extends go{constructor(d,c,y){super(),this.taq=d,this.tq=c,this.changeDetectorRef=y,this.defaultOptions={props:{entityName:{singular:"Disease",plural:"Diseases"},tooltip:"Cancer or cancer subtype that is a result of the described variant",isMultiSelect:!1,requireType:!0,placeholder:"Search Diseases",requireTypePromptFn:(re,ht)=>`Select an ${re} Type to select an associated Disease${ht?"(s)":""}`,addFormTitle:"Add a New Disease"}},this.placeholder$=new it.X(void 0),this.selectOpen$=new Wo.t}ngAfterViewInit(){this.configureBaseField(),this.configureEntitySelectField({typeaheadQuery:this.taq,typeaheadParam$:void 0,tagQuery:this.tq,getTypeaheadVarsFn:this.getTypeaheadVarsFn,getTypeaheadResultsFn:this.getTypeaheadResultsFn,getTagQueryVarsFn:this.getTagQueryVarsFn,getTagQueryResultsFn:this.getTagQueryResultsFn,getSelectedItemOptionFn:this.getSelectedItemOptionFn,getSelectOptionsFn:this.getSelectOptionsFn,changeDetectorRef:this.changeDetectorRef,selectOpen$:this.selectOpen$,selectComponent:this.selectComponent}),this.state&&this.state.formReady$?this.state.formReady$.pipe((0,Ge.h)(d=>d),(0,Do.q)(1),(0,Pe.t)(this)).subscribe(d=>{this.configureField()}):this.configureField(),this.addForm&&(this.field.props.addFormContent=this.addForm)}configureField(){this.placeholder$.next(this.props.placeholder),this.configureStateConnections()}configureStateConnections(){if(this.state){if(this.state.requires.requiresDisease$?this.onRequiresDisease$=this.state.requires.requiresDisease$:console.warn(`${this.field.id} field's form provides a state, but could not find requiresDisease$ subject to attach.`),this.props.requireType){const d=`${this.state.entityName.toLowerCase()}Type$`;this.state.fields[d]?this.onEntityType$=this.state.fields[d]:console.error(`${this.field.id} requireType is true, however form state does not provide Subject ${d}.`)}!this.onRequiresDisease$||!this.onEntityType$||(0,io.a)([this.onRequiresDisease$,this.onEntityType$,this.onValueChange$]).pipe((0,Pe.t)(this)).subscribe(([d,c,y])=>{this.onStateUpdates(d,c,y)})}}onStateUpdates(d,c,y){!d&&c&&(this.props.required=!1,this.props.disabled=!0,this.props.description=`${(0,J.E)(c)} ${this.state.entityName} does not include associated diseases`,this.props.extraType="prompt",this.cdr.markForCheck()),this.props.requireType&&!c&&(this.props.required=!1,this.props.disabled=!0,this.props.description=this.props.requireTypePromptFn(this.state.entityName,this.props.isMultiSelect),this.props.extraType="prompt"),d&&(this.props.required=!0,this.props.disabled=!1,this.props.description=void 0,this.props.extraType=void 0),(!d&&void 0!==y||this.props.requireType&&!c&&this.formControl.value)&&this.resetField()}getTypeaheadVarsFn(d){return{name:d}}getTypeaheadResultsFn(d){return d.data.diseaseTypeahead}getTagQueryVarsFn(d){return{id:d}}getTagQueryResultsFn(d){return d.data.disease}getSelectedItemOptionFn(d){return{value:d.id,label:d.name}}getSelectOptionsFn(d,c){return d.map((y,re)=>({label:c.get(re)||y.name,value:y.id}))}}Vo.\u0275fac=function(d){return new(d||Vo)(e.Y36(bn.RYL),e.Y36(bn.QVn),e.Y36(e.sBO))},Vo.\u0275cmp=e.Xpm({type:Vo,selectors:[["cvc-disease-select"]],viewQuery:function(d,c){if(1&d&&(e.Gf(Dn,7),e.Gf(Rn,5,e.Rgc)),2&d){let y;e.iGM(y=e.CRH())&&(c.addForm=y.first),e.iGM(y=e.CRH())&&(c.optionTemplates=y)}},features:[e.qOj],decls:12,vars:26,consts:[[3,"cvcAddEntity","cvcSelectMode","cvcCustomTemplate","cvcFormControl","cvcFormlyAttributes","cvcEntityName","cvcPlaceholder","cvcResults","cvcOptions","cvcShowError","cvcDisabled","cvcLoading","cvcSelectOpen","cvcOnSearch","cvcOnOpenChange","cvcSelectComponent","cvcOnModelChange"],[4,"ngrxLet"],["selectedTemplate",""],["addDisease",""],[4,"ngFor","ngForOf"],["optionTemplates",""],[3,"cvcDisableLink","cvcCacheId","cvcEmphasize"],["nz-typography","","nzType","secondary"],[4,"ngIf"],[3,"innerHtml"],["nz-typography","","nzType","secondary","nz-tooltip","",3,"nzTooltipTitle","innerHtml"],[1,"ant-select-selection-item-content"],[3,"cvcCacheId","cvcContext","cvcMode","cvcOnClose"],[3,"cvcSearchString","cvcOnCreate"]],template:function(d,c){if(1&d&&(e.TgZ(0,"cvc-entity-select",0),e.NdJ("cvcOnSearch",function(re){return c.onSearch$.next(re)})("cvcOnOpenChange",function(re){return c.onOpenChange$.next(re)})("cvcSelectComponent",function(re){return c.selectComponent=re})("cvcOnModelChange",function(re){return c.props.change&&c.props.change(c.field,re)}),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.ALo(3,"ngrxPush"),e.ALo(4,"ngrxPush"),e.ALo(5,"ngrxPush"),e.ALo(6,"ngrxPush"),e.qZA(),e.YNc(7,Zo,3,3,"ng-container",1),e.YNc(8,Ho,2,3,"ng-template",null,2,e.W1O),e.YNc(10,zo,1,1,"ng-template",null,3,e.W1O)),2&d){const y=e.MAs(9),re=e.MAs(11);e.Q6J("cvcAddEntity",re)("cvcSelectMode",c.props.isMultiSelect?"multiple":"default")("cvcCustomTemplate",y)("cvcFormControl",c.formControl)("cvcFormlyAttributes",c.field)("cvcEntityName",c.props.entityName)("cvcPlaceholder",e.lcZ(1,14,c.placeholder$))("cvcResults",e.lcZ(2,16,c.result$))("cvcOptions",e.lcZ(3,18,c.selectOption$))("cvcShowError",c.showError)("cvcDisabled",c.onRequiresDisease$&&!e.lcZ(4,20,c.onRequiresDisease$))("cvcLoading",e.lcZ(5,22,c.isLoading$))("cvcSelectOpen",e.lcZ(6,24,c.selectOpen$)),e.xp6(7),e.Q6J("ngrxLet",c.onSearch$)}},dependencies:[E.sg,E.O5,I.eJ,At.SY,de.ZU,Ue,Tt.J,eo,I.fM,P.A],changeDetection:0});const ai={types:[{name:"disease-select",wrappers:["form-field"],component:Vo,defaultOptions:{props:{label:"Disease"}}},{name:"disease-multi-select",wrappers:["form-field"],component:Vo,defaultOptions:{props:{isMultiSelect:!0,label:"Diseases"}}}]};class si{}si.\u0275fac=function(d){return new(d||si)},si.\u0275mod=e.oAB({type:si}),si.\u0275inj=e.cJS({imports:[E.ez,t.UX,I._N,I.pP,g.X0.forChild(ai),xn.L,Yn.sL,Ze.LV,co.$6,Bn.Qp,_t.PV,Ae.o7,w.Jb,At.cg,nn.zf,s.U5,rt.ic,de.ZJ,Yt.X,Un.g,lt,jn,xt.s,Zt.x]});var Ao=a(2994);class Ro{}Ro.\u0275fac=function(d){return new(d||Ro)},Ro.\u0275mod=e.oAB({type:Ro}),Ro.\u0275inj=e.cJS({imports:[E.ez,I._N,I.pP,de.ZJ]});var Go=a(1971),Ii=a(9562),Bi=a(7096),Oo=a(6675),pi=a(5026),Gi=a(8372),ci=a(3595),Ki=a(2856),dr=a(6451),Ai=a(444);const Fi={isSelectCol:f=>"select"===f.type,isEntityTagCol:f=>"entity-tag"===f.type,isEnumTagCol:f=>"enum-tag"===f.type,isTextTagCol:f=>"text-tag"===f.type},Ws=f=>void 0!==f.sort,pr=f=>void 0!==f.filter,Yr={description:bn.Cp0.Description,disease:bn.Cp0.DiseaseName,evidenceDirection:bn.Cp0.EvidenceDirection,evidenceLevel:bn.Cp0.EvidenceLevel,evidenceRating:bn.Cp0.EvidenceRating,evidenceType:bn.Cp0.EvidenceType,id:bn.Cp0.Id,significance:bn.Cp0.Significance,status:bn.Cp0.Status,therapies:bn.Cp0.TherapyName,variantOrigin:bn.Cp0.VariantOrigin},hr={molecularProfile:"molecularProfileName",disease:"diseaseName",therapies:"therapyName",evidenceItem:"id"},Fs=["selected","id"];class Ve{constructor(){this.sortStreams=[],this.filterStreams=[],this.config=this.configureColumnStreams([{key:"selected",label:"Select",type:"select",width:"25px",align:"center",fixedLeft:!0,checkbox:{th:{showCheckbox:!1},td:{showCheckbox:!0}}},{hidden:!0,key:"id",label:"ID",type:"default",width:"30px"},{hidden:!0,key:"status",label:"Status",type:"default",width:"50px"},{key:"id",label:"Evidence",type:"entity-tag",width:"95px",context:"evidenceItem",fixedLeft:!0,showStatus:!0,tag:{fullWidth:!0},sort:{default:"ascend"},filter:{inputType:"default",options:[{key:"EID",value:null}],transform:d=>d?+d.toString().replace(/EID/i,""):null}},{key:"molecularProfile",label:"Molecular Profile",type:"entity-tag",width:"240px",sort:{},tag:{truncateLabel:"200px"},filter:{inputType:"default",typename:"MolecularProfile",options:[{key:"Filter Therapy Names",value:null}]}},{key:"disease",type:"entity-tag",label:"Disease",width:"240px",sort:{},tag:{truncateLabel:"200px"},filter:{inputType:"default",typename:"Disease",options:[{key:"Filter Disease Names",value:null}]}},{key:"therapies",label:"Therapies",type:"entity-tag",width:"275px",sort:{},tag:{maxTags:2,truncateLabel:"150px"},filter:{inputType:"default",typename:"Therapy",options:[{key:"Filter Therapy Names",value:null}]}},{key:"therapyInteractionType",label:"INT",tooltip:"Therapy Interaction Type",type:"enum-tag",width:"40px",align:"center",emptyValueCategory:"not-applicable",sort:{},filter:{options:this.getAttributeFilters((0,Ai.o6)(bn.wkr))}},{key:"description",label:"DSC",tooltip:"Evidence Description",type:"text-tag",width:"40px",align:"center",fixedRight:!0,emptyValueCategory:"unspecified",sort:{},filter:{inputType:"default",options:[{key:"Search Descriptions",value:null}]}},{key:"evidenceType",label:"ET",tooltip:"Evidence Type",type:"enum-tag",width:"40px",align:"center",fixedRight:!0,sort:{},filter:{options:this.getAttributeFilters((0,Ai.o6)(bn.kqt))}},{key:"evidenceLevel",label:"EL",tooltip:"Evidence Level",type:"enum-tag",width:"40px",align:"center",fixedRight:!0,sort:{},filter:{options:this.getAttributeFilters((0,Ai.o6)(bn.Sx0))}},{key:"evidenceDirection",label:"ED",tooltip:"Evidence Direction",type:"enum-tag",width:"40px",align:"center",fixedRight:!0,sort:{},filter:{options:this.getAttributeFilters((0,Ai.o6)(bn.tI1))}},{key:"significance",label:"SI",tooltip:"Significance",type:"enum-tag",align:"center",width:"40px",fixedRight:!0,sort:{},filter:{options:this.getAttributeFilters((0,Ai.o6)(bn.y1h))}},{key:"evidenceRating",label:"ER",tooltip:"Evidence Rating",type:"enum-tag",width:"45px",align:"center",fixedRight:!0,tag:{showLabel:"short-string"},sort:{},filter:{options:[1,2,3,4,5].map(d=>({value:d,text:`${d} stars`}))}}])}get(){return this.config}getSortStreams(){return this.sortStreams}getFilterStreams(){return this.filterStreams}getAttributeFilters(d,c){return d.getValues().map(re=>({text:(0,J.E)(re),value:re,byDefault:c===re}))}configureColumnStreams(d){return d.forEach(c=>{const y=c;if(Ws(y)&&(y.sort.changes=new it.X({key:y.key,value:y.sort.default??null}),this.sortStreams.push(y.sort.changes)),pr(y)){const re=y.filter.options.find(ht=>ht.byDefault)?.value;y.filter.changes=new it.X({key:y.key,value:re??null}),this.filterStreams.push(y.filter.changes)}}),d}}var $,Vt=a(6814);function ke(f,d){1&f&&e.GkF(0)}const Ft=function(f,d,c){return{$implicit:f,config:d,emphasize:c}};function rn(f,d){if(1&f&&(e.ynx(0),e.TgZ(1,"span",1),e.YNc(2,ke,1,0,"ng-container",2),e.qZA(),e.BQk()),2&f){const c=d.$implicit,y=e.oxw();e.xp6(2),e.Q6J("ngTemplateOutlet",y.cvcTagTemplate)("ngTemplateOutletContext",e.kEZ(2,Ft,c,y.config,null==y.config?null:y.config.emphasize))}}let Sn=(($=class{set cvcTagListConfig(d){!d||!d.tagList||!d.tag||(this.config=d,this.setEntities(d.tagList,d.tag))}constructor(){this.entities=[]}setEntities(d,c){this.entities=d&&0!==d.length&&0!==c.maxTags?d:[]}}).\u0275fac=function(d){return new(d||$)},$.\u0275cmp=e.Xpm({type:$,selectors:[["cvc-entity-tag-list"]],inputs:{cvcTagListConfig:"cvcTagListConfig",cvcTagTemplate:"cvcTagTemplate"},decls:1,vars:1,consts:[[4,"ngFor","ngForOf"],[1,"tag-container"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(d,c){1&d&&e.YNc(0,rn,3,6,"ng-container",0),2&d&&e.Q6J("ngForOf",c.entities)},dependencies:[E.sg,E.tP],styles:[".typeahead-match[_ngcontent-%COMP%]{font-weight:700}[_nghost-%COMP%]{display:inline-block;margin-bottom:-4px}.tag-container[_ngcontent-%COMP%]{display:inline-block;margin-bottom:4px}"],changeDetection:0}),$);Sn=(0,Te.gn)([(0,Pe.c)()],Sn);var lo=a(160),Xn=a(320);function So(f,d){if(1&f&&(e._UZ(0,"span",6),e.ALo(1,"typenameToIcon"),e.ALo(2,"entityColor")),2&f){const c=d.$implicit;e.Q6J("nzType",e.lcZ(1,2,c.__typename))("nzTwotoneColor",e.lcZ(2,4,c.__typename))}}function Gn(f,d){if(1&f&&(e.ynx(0),e.YNc(1,So,3,6,"span",5),e.BQk()),2&f){const c=e.oxw();e.xp6(1),e.Q6J("ngForOf",c.entities)}}function ni(f,d){if(1&f&&(e.TgZ(0,"span",7)(1,"strong"),e._uU(2),e.qZA()(),e._UZ(3,"span",6),e.ALo(4,"typenameToIcon"),e.ALo(5,"entityColor")),2&f){const c=e.oxw();e.xp6(2),e.Oqu(c.entities.length),e.xp6(1),e.Q6J("nzType",e.lcZ(4,3,c.entities[0].__typename))("nzTwotoneColor",e.lcZ(5,5,c.entities[0].__typename))}}const oi=function(f,d,c,y,re){return{tagList:f,tag:d,showPopover:c,status:y,emphasize:re}};function fr(f,d){if(1&f&&e._UZ(0,"cvc-entity-tag-list",11),2&f){const c=e.oxw(2);e.Q6J("cvcTagTemplate",c.cvcTagTemplate)("cvcTagListConfig",e.qbA(2,oi,c.entities,c.config.tag,c.config.showPopover,c.config.status,c.config.emphasize))}}function fi(f,d){1&f&&e._uU(0," Invalid config specified for entity-tag-list. ")}function $r(f,d){if(1&f&&(e.TgZ(0,"div",8),e.YNc(1,fr,1,8,"cvc-entity-tag-list",9),e.qZA(),e.YNc(2,fi,1,0,"ng-template",null,10,e.W1O)),2&f){const c=e.MAs(3),y=e.oxw();e.xp6(1),e.Q6J("ngIf",y.config)("ngIfElse",c)}}class ii{set cvcCollectionTagConfig(d){!d||!d.tagList||!d.tag||(this.setConfig(d),this.setEntities(d.tagList))}constructor(){this.cvcShowMaxIcons=5,this.cvcShowFullLabels=!0,this.entities=[]}setConfig(d){this.config=this.cvcShowFullLabels?{...d,tag:{...d.tag,truncateLabel:void 0}}:d}setEntities(d){this.entities=d&&0!==d.length?d:[]}}ii.\u0275fac=function(d){return new(d||ii)},ii.\u0275cmp=e.Xpm({type:ii,selectors:[["cvc-entity-collection-tag"]],inputs:{cvcCollectionTagConfig:"cvcCollectionTagConfig",cvcTagTemplate:"cvcTagTemplate",cvcShowMaxIcons:"cvcShowMaxIcons",cvcShowFullLabels:"cvcShowFullLabels"},decls:9,vars:3,consts:[["nz-popover","","nzPopoverPlacement","top","nzPopoverTrigger","hover",3,"nzPopoverContent"],["nz-typography","","nzType","secondary",1,"plus-sign"],[4,"ngIf","ngIfElse"],["showCount",""],["tagListPopover",""],["class","entity-icon","nz-icon","","nzTheme","twotone",3,"nzType","nzTwotoneColor",4,"ngFor","ngForOf"],["nz-icon","","nzTheme","twotone",1,"entity-icon",3,"nzType","nzTwotoneColor"],["nz-typography","","nzType","secondary",1,"entity-count"],[1,"popover-container"],[3,"cvcTagTemplate","cvcTagListConfig",4,"ngIf","ngIfElse"],["noConfig",""],[3,"cvcTagTemplate","cvcTagListConfig"]],template:function(d,c){if(1&d&&(e.TgZ(0,"nz-tag",0)(1,"span",1)(2,"strong"),e._uU(3,"+"),e.qZA()(),e.YNc(4,Gn,2,1,"ng-container",2),e.YNc(5,ni,6,7,"ng-template",null,3,e.W1O),e.qZA(),e.YNc(7,$r,4,2,"ng-template",null,4,e.W1O)),2&d){const y=e.MAs(6),re=e.MAs(8);e.Q6J("nzPopoverContent",re),e.xp6(4),e.Q6J("ngIf",c.entities.length<=c.cvcShowMaxIcons)("ngIfElse",y)}},dependencies:[E.sg,E.O5,Yt.j,de.ZU,co.lU,_t.Ls,Sn,lo.a,Xn.Z],styles:["[_nghost-%COMP%]{display:inline-block}.popover-container[_ngcontent-%COMP%]{max-width:300px}nz-tag[_ngcontent-%COMP%]{margin:0;padding:0;margin-inline-end:4px}nz-tag[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-block}nz-tag[_ngcontent-%COMP%]   .plus-sign[_ngcontent-%COMP%]{padding:3px 3px 3px 4px;margin:-3px 0;line-height:1}nz-tag[_ngcontent-%COMP%]   .entity-icon[_ngcontent-%COMP%]:first-child{padding-left:2px}nz-tag[_ngcontent-%COMP%]   .entity-icon[_ngcontent-%COMP%]{margin:-3px 1px -4px -1px;padding:3px 0;line-height:1}nz-tag[_ngcontent-%COMP%]   .entity-icon[_ngcontent-%COMP%]:last-child{padding-right:3px}nz-tag[_ngcontent-%COMP%]   .entity-count[_ngcontent-%COMP%]{margin-left:-2px;padding-right:4px}"],changeDetection:0});var ho=a(3388);function mr(f,d){if(1&f&&(e.TgZ(0,"span",1),e._uU(1),e.ALo(2,"number"),e.ALo(3,"number"),e.qZA()),2&f){const c=d.ngIf;e.xp6(1),e.AsE(" ",e.lcZ(2,2,c.edgeCount)," of ",e.lcZ(3,4,c.filteredCount)," displayed\n")}}class xe{ngOnInit(){this.tableCountsInfo$=this.cvcTableCountsConnection.pipe((0,Ge.h)(d=>null!=d.totalCount||null!=d.filteredCount),(0,yt.U)(d=>{const c=d.filteredCount,y=d.totalCount,re=d.edges;return null==c&&null==y&&console.log("Need to provide either filtered count or total count in the table counts component"),{edgeCount:re.length,filteredCount:c??y}}))}}xe.\u0275fac=function(d){return new(d||xe)},xe.\u0275cmp=e.Xpm({type:xe,selectors:[["cvc-table-counts"]],inputs:{cvcTableCountsConnection:"cvcTableCountsConnection"},decls:2,vars:3,consts:[["class","table-counts","nz-typography","","nzType","secondary",4,"ngIf"],["nz-typography","","nzType","secondary",1,"table-counts"]],template:function(d,c){1&d&&(e.YNc(0,mr,4,6,"span",0),e.ALo(1,"ngrxPush")),2&d&&e.Q6J("ngIf",e.lcZ(1,1,c.tableCountsInfo$))},dependencies:[E.O5,de.ZU,E.JJ,I.fM],styles:[":[_nghost-%COMP%]{border:1px solid red}.table-counts[_ngcontent-%COMP%]{display:inline-block}"],changeDetection:0});var at,ye=a(590),pe=a(1520);let hn=((at=class{set cvcTableScrollerToIndex(d){void 0!==d&&this.scrollToIndex(d)}set cvcTableScrollerToOffset(d){void 0!==d&&this.scrollToIndex(d)}constructor(d){this.host=d,this.cvcTableScrollerOnScroll=new e.vpe,this.cvcTableScrollerOnFetch=new e.vpe,this.cvcTableScrollerTargetHeight=140,this.cvcTableScrollerFetchCount=50,this.onLoadThrottleTime=500,this.onScrollThrottleTime=250,this.onScrollDebounceTime=300}ngAfterViewInit(){if(!this.host||!this.host.cdkVirtualScrollViewport)throw new Error("cvcTableScroller directive could not obtain reference to host cdkVirtualScrollViewport.");this.viewport=this.host.cdkVirtualScrollViewport,this.scrolled$=this.viewport.elementScrolled(),this.rendered$=this.viewport.renderedRangeStream,this.rendered$.pipe((0,ye.P)()).subscribe(()=>this.viewport.checkViewportSize()),this.scrolled$.pipe((0,_o.p)(this.onScrollThrottleTime,vi.z,{leading:!0,trailing:!0}),(0,Nn.b)(d=>this.cvcTableScrollerOnScroll.next("scroll")),(0,Gi.b)(this.onScrollDebounceTime),(0,Pe.t)(this)).subscribe(d=>{this.cvcTableScrollerOnScroll.next("stop")}),this.scrolled$.pipe((0,yt.U)(d=>this.viewport.measureScrollOffset("bottom")),(0,pe.G)(),(0,Ge.h)(([d,c])=>c<d&&c<this.cvcTableScrollerTargetHeight),(0,_o.p)(this.onLoadThrottleTime),(0,Pe.t)(this)).subscribe(d=>{this.cvcTableScrollerOnScroll.next("bottom");try{this.loadMore(this.cvcTableScrollerPageInfo)}catch(c){console.error(c)}})}loadMore(d){const c=this.cvcTableScrollerQueryRef;if(!d&&c)throw new Error("table-scroll directive requires PageInfo to use provided QueryRef.");if(d&&!c)throw new Error("table-scroll directive requires valid QueryRef when PageInfo provided.");if(d&&c){const[y,re,ht]=[this.cvcTableScrollerFetchCount,d.hasNextPage,d.endCursor];if(!y||!ht)throw new Error("table-scroll PageInfo invalid.");if(!re)return;this.cvcTableScrollerOnFetch.next({first:y,after:ht})}}scrollToIndex(d){const[c,y]=[this.host,this.host.cdkVirtualScrollViewport];if(!c||!y)throw new Error("table-scroll scrollToIndex() cannot find host viewport.");y.scrollToIndex(d)}scrollToOffset(d){const[c,y]=[this.host,this.host.cdkVirtualScrollViewport];if(!c||!y)throw new Error("table-scroll scrollToOffset() cannot find host viewport.");y.scrollToOffset(d)}}).\u0275fac=function(d){return new(d||at)(e.Y36(Oo.N8))},at.\u0275dir=e.lG2({type:at,selectors:[["","cvcTableScroller",""]],inputs:{cvcTableScrollerTargetHeight:"cvcTableScrollerTargetHeight",cvcTableScrollerQueryRef:"cvcTableScrollerQueryRef",cvcTableScrollerPageInfo:"cvcTableScrollerPageInfo",cvcTableScrollerFetchCount:"cvcTableScrollerFetchCount",cvcTableScrollerToIndex:"cvcTableScrollerToIndex",cvcTableScrollerToOffset:"cvcTableScrollerToOffset"},outputs:{cvcTableScrollerOnScroll:"cvcTableScrollerOnScroll",cvcTableScrollerOnFetch:"cvcTableScrollerOnFetch"}}),at);function Hn(f,d){1&f&&e._UZ(0,"span",8)}function hi(f,d){if(1&f){const c=e.EpF();e.TgZ(0,"span",9),e.NdJ("click",function(){e.CHM(c),e.oxw(2);const re=e.MAs(3),ht=e.oxw();return re.value="",e.KtG(ht.cvcModelChange.next(null))}),e.qZA()}}function fn(f,d){if(1&f&&(e.YNc(0,Hn,1,0,"span",6),e.YNc(1,hi,1,0,"span",7)),2&f){e.oxw();const c=e.MAs(3);e.Q6J("ngIf",!c.value),e.xp6(1),e.Q6J("ngIf",c.value)}}function To(f,d){if(1&f){const c=e.EpF();e.ynx(0),e.TgZ(1,"nz-input-group",2)(2,"input",3,4),e.NdJ("ngModelChange",function(re){e.CHM(c);const ht=e.oxw();return e.KtG(ht.cvcModelChange.next(re))}),e.qZA()(),e.YNc(4,fn,2,2,"ng-template",null,5,e.W1O),e.BQk()}if(2&f){const c=e.MAs(5),y=e.oxw();e.xp6(1),e.Q6J("nzSuffix",c),e.xp6(1),e.Q6J("placeholder",y.cvcPlaceholder)("ngModel",y.cvcModel)}}function Ar(f,d){if(1&f){const c=e.EpF();e.TgZ(0,"nz-input-number-group",10)(1,"nz-input-number",11,4),e.NdJ("ngModelChange",function(re){e.CHM(c);const ht=e.oxw();return e.KtG(ht.cvcModelChange.next(""===re?null:re))}),e.qZA()()}if(2&f){const c=e.oxw();let y;e.xp6(1),e.Q6J("nzPlaceHolder",null!==(y=c.cvcPlaceholder)&&void 0!==y?y:"")("ngModel",c.cvcModel)("nzMin",1)("nzStep",1)}}hn=(0,Te.gn)([(0,Pe.c)()],hn);class gr{constructor(){this.cvcModel=null,this.cvcModelChange=new e.vpe,this.cvcInputType="default"}}gr.\u0275fac=function(d){return new(d||gr)},gr.\u0275cmp=e.Xpm({type:gr,selectors:[["cvc-table-filter-input"]],inputs:{cvcModel:"cvcModel",cvcInputType:"cvcInputType",cvcPlaceholder:"cvcPlaceholder"},outputs:{cvcModelChange:"cvcModelChange"},decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["numericInput",""],["nzSize","small",3,"nzSuffix"],["nz-input","",3,"placeholder","ngModel","ngModelChange"],["filterInput",""],["suffixIcon",""],["nz-icon","","nzType","search","style","color: #ddd",4,"ngIf"],["nz-icon","","class","ant-input-clear-icon","nzTheme","fill","nzType","close-circle",3,"click",4,"ngIf"],["nz-icon","","nzType","search",2,"color","#ddd"],["nz-icon","","nzTheme","fill","nzType","close-circle",1,"ant-input-clear-icon",3,"click"],["nzSize","small"],[2,"width","100%",3,"nzPlaceHolder","ngModel","nzMin","nzStep","ngModelChange"]],template:function(d,c){if(1&d&&(e.YNc(0,To,6,3,"ng-container",0),e.YNc(1,Ar,3,4,"ng-template",null,1,e.W1O)),2&d){const y=e.MAs(2);e.Q6J("ngIf","default"===c.cvcInputType)("ngIfElse",y)}},dependencies:[E.O5,t.Fj,t.JJ,t.On,pn.w,_t.Ls,Ae.Zp,Ae.gB,Ae.ke,Bi._V,Bi.Rb],styles:[".typeahead-match[_ngcontent-%COMP%]{font-weight:700}  nz-input-group{border-color:#d9d9d9!important}"]});var vr,Jo=a(3325);function Qc(f,d){if(1&f){const c=e.EpF();e.TgZ(0,"li",5),e.NdJ("click",function(){const ht=e.CHM(c).$implicit,It=e.oxw();return e.KtG(It.cvcOptionChange.next({key:It.cvcColumnKey,value:ht.value}))}),e._UZ(1,"cvc-attribute-tag",6),e.qZA()}if(2&f){const c=d.$implicit,y=e.oxw();e.Q6J("nzSelected",(null==y.cvcOption?null:y.cvcOption.value)===c.value),e.xp6(1),e.Q6J("cvcFullWidth",!0)("cvcChecked",(null==y.cvcOption?null:y.cvcOption.value)===c.value)("cvcAttrValue",c.value)}}class qi{constructor(){this.cvcOptionChange=new e.vpe}}qi.\u0275fac=function(d){return new(d||qi)},qi.\u0275cmp=e.Xpm({type:qi,selectors:[["cvc-enum-filter-menu"]],inputs:{cvcColumnKey:"cvcColumnKey",cvcFilterOptions:"cvcFilterOptions",cvcOption:"cvcOption"},outputs:{cvcOptionChange:"cvcOptionChange"},decls:6,vars:2,consts:[["nz-menu",""],["nz-menu-item","",3,"nzSelected","click",4,"ngFor","ngForOf"],[2,"padding","3px"],["nz-button","","nzType","default","nzBlock","","nzSize","small",3,"disabled","click"],["nz-icon","","nzType","retweet","nzTheme","outline"],["nz-menu-item","",3,"nzSelected","click"],["cvcContext","menu-item",3,"cvcFullWidth","cvcChecked","cvcAttrValue"]],template:function(d,c){1&d&&(e.TgZ(0,"ul",0),e.YNc(1,Qc,2,4,"li",1),e.TgZ(2,"li",2)(3,"button",3),e.NdJ("click",function(){return c.cvcOptionChange.next({key:c.cvcColumnKey,value:null})}),e._UZ(4,"span",4),e._uU(5," Reset "),e.qZA()()()),2&d&&(e.xp6(1),e.Q6J("ngForOf",c.cvcFilterOptions),e.xp6(2),e.Q6J("disabled",null===(null==c.cvcOption?null:c.cvcOption.value)))},dependencies:[E.sg,Qe,Yn.ix,pn.w,ln.dQ,Jo.wO,Jo.r9,_t.Ls],styles:[".typeahead-match[_ngcontent-%COMP%]{font-weight:700}[_nghost-%COMP%]     ul li:hover{background-color:#e6f7ff}[_nghost-%COMP%]     ul li.ant-dropdown-menu-item-selected{background-color:#1890ff}[_nghost-%COMP%]     ul li.ant-dropdown-menu-item-selected:active{background-color:#096dd9}"],changeDetection:0});class Qi{transform(d){return null!=d&&Array.isArray(d)}}Qi.\u0275fac=function(d){return new(d||Qi)},Qi.\u0275pipe=e.Yjl({name:"isArray",type:Qi,pure:!0});class Xi{transform(d,c){return c(d)?d:void 0}}function Zs(f,d){if(1&f&&e._UZ(0,"th",14),2&f){const c=d.ngIf;let y;e.Q6J("nzShowCheckbox",c.checkbox.th.showCheckbox||!1)("nzWidth",c.width)("nzAlign",null!==(y=c.align)&&void 0!==y?y:"left")("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1)}}function Wc(f,d){if(1&f){const c=e.EpF();e.TgZ(0,"th",15),e.NdJ("nzSortOrderChange",function(re){const It=e.CHM(c).ngIf;return e.KtG(It.sort.changes.next({key:It.key,value:re}))}),e.ALo(1,"ngrxPush"),e.TgZ(2,"span",16),e._uU(3),e.qZA()()}if(2&f){const c=d.ngIf;let y,re;e.Q6J("nzColumnKey",c.key)("nzAlign",null!==(y=c.align)&&void 0!==y?y:"left")("nzWidth",c.width)("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1)("nzShowSort",void 0!==c.sort)("nzSortFn",!0)("nzSortOrder",(null==(re=e.lcZ(1,10,c.sort.changes))?null:re.value)||null),e.xp6(2),e.Q6J("nzTooltipTitle",c.tooltip),e.xp6(1),e.hij(" ",c.label," ")}}function _r(f,d){if(1&f&&(e.TgZ(0,"th",17),e._uU(1),e.qZA()),2&f){const c=d.ngIf;let y;e.Q6J("nzColumnKey",c.key)("nzAlign",null!==(y=c.align)&&void 0!==y?y:"left")("nzWidth",c.width)("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1)("nzTooltipTitle",c.tooltip),e.xp6(1),e.hij(" ",c.label," ")}}function mi(f,d){if(1&f&&(e.TgZ(0,"th",17),e._uU(1),e.qZA()),2&f){const c=d.ngIf;let y;e.Q6J("nzColumnKey",c.key)("nzAlign",null!==(y=c.align)&&void 0!==y?y:"left")("nzWidth",c.width)("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1)("nzTooltipTitle",c.tooltip),e.xp6(1),e.hij(" ",c.label," ")}}function Hi(f,d){if(1&f&&(e.ynx(0),e.YNc(1,Zs,1,5,"th",11),e.ALo(2,"guardType"),e.YNc(3,Wc,4,12,"th",12),e.ALo(4,"guardType"),e.YNc(5,_r,2,7,"th",13),e.ALo(6,"guardType"),e.YNc(7,mi,2,7,"th",13),e.ALo(8,"guardType"),e.BQk()),2&f){const c=e.oxw().$implicit,y=e.oxw(2);e.xp6(1),e.Q6J("ngIf",e.xi3(2,4,c,y.colGuards.isSelectCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(4,7,c,y.colGuards.isEntityTagCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(6,10,c,y.colGuards.isEnumTagCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(8,13,c,y.colGuards.isTextTagCol))}}function tc(f,d){if(1&f&&(e.ynx(0),e.YNc(1,Hi,9,16,"ng-container",10),e.BQk()),2&f){const c=d.$implicit;e.xp6(1),e.Q6J("ngIf",!c.hidden)}}function Si(f,d){if(1&f&&(e.TgZ(0,"th",22),e._uU(1," \xa0 "),e.qZA()),2&f){const c=d.ngIf;let y;e.Q6J("nzColumnKey",c.key)("nzAlign",null!==(y=c.align)&&void 0!==y?y:"left")("nzWidth",c.width)("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1)}}function er(f,d){if(1&f){const c=e.EpF();e.TgZ(0,"cvc-table-filter-input",25),e.NdJ("cvcModelChange",function(re){const It=e.CHM(c).ngIf,Mn=e.oxw().ngIf;return e.KtG(It.changes.next(It.transform?{key:Mn.key,value:It.transform(re)}:{key:Mn.key,value:re}))}),e.qZA()}if(2&f){const c=e.oxw().ngIf;e.Q6J("cvcInputType",c.filter.inputType)("cvcPlaceholder",c.filter.options[0].key)("cvcModel",c.filter.options[0].value)}}function ns(f,d){if(1&f&&(e.TgZ(0,"th",23),e.YNc(1,er,1,3,"cvc-table-filter-input",24),e.qZA()),2&f){const c=d.ngIf;let y;e.Q6J("nzColumnKey",c.key)("nzWidth",c.width)("nzAlign",null!==(y=c.align)&&void 0!==y?y:"left")("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1),e.xp6(1),e.Q6J("ngIf",c.filter)}}function Ea(f,d){if(1&f){const c=e.EpF();e.TgZ(0,"th",26,27),e.NdJ("nzSortOrderChange",function(re){const It=e.CHM(c).ngIf;return e.KtG(It.sort.changes.next({key:It.key,value:re}))}),e.ALo(2,"ngrxPush"),e.TgZ(3,"nz-filter-trigger",28,29),e.ALo(5,"ngrxPush"),e._UZ(6,"span",30),e.qZA(),e.TgZ(7,"nz-dropdown-menu",null,31)(9,"cvc-enum-filter-menu",32),e.NdJ("cvcOptionChange",function(re){const It=e.CHM(c).ngIf,Mn=e.MAs(4);return It.filter.changes.next(re),e.KtG(Mn.nzVisible=!1)}),e.ALo(10,"ngrxPush"),e.qZA()()()}if(2&f){const c=d.ngIf,y=e.MAs(8);let re,ht,It;e.Q6J("nzColumnKey",c.key)("nzWidth",c.width)("nzAlign",null!==(re=c.align)&&void 0!==re?re:"left")("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1)("nzShowSort",!0)("nzSortFn",!0)("nzSortOrder",(null==(ht=e.lcZ(2,15,c.sort.changes))?null:ht.value)||null)("nzShowFilter",void 0!==c.filter)("nzFilterFn",!0),e.xp6(3),e.Q6J("nzDropdownMenu",y)("nzActive",null!==(null==(It=e.lcZ(5,17,c.filter.changes))?null:It.value)),e.xp6(6),e.Q6J("cvcColumnKey",c.key)("cvcFilterOptions",c.filter.options)("cvcOption",e.lcZ(10,19,c.filter.changes))}}function zs(f,d){if(1&f){const c=e.EpF();e.TgZ(0,"th",33,27)(2,"nz-filter-trigger",28),e.ALo(3,"ngrxPush"),e._UZ(4,"span",34),e.qZA(),e.TgZ(5,"nz-dropdown-menu",null,35)(7,"div",36)(8,"div",37)(9,"cvc-table-filter-input",38),e.NdJ("cvcModelChange",function(re){const It=e.CHM(c).ngIf;return e.KtG(It.filter.changes.next({key:It.key,value:re}))}),e.qZA()()()()()}if(2&f){const c=d.ngIf,y=e.MAs(6);let re,ht;e.Q6J("nzColumnKey",c.key)("nzWidth",c.width)("nzAlign",null!==(re=c.align)&&void 0!==re?re:"left")("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1)("nzFilterFn",!0),e.xp6(2),e.Q6J("nzDropdownMenu",y)("nzActive",null!==(null==(ht=e.lcZ(3,10,c.filter.changes))?null:ht.value)),e.xp6(7),e.Q6J("cvcPlaceholder",c.filter.options[0].key)("cvcModel",c.filter.options[0].value)}}function Ts(f,d){if(1&f&&(e.ynx(0),e.YNc(1,Si,2,5,"th",18),e.ALo(2,"guardType"),e.YNc(3,ns,2,6,"th",19),e.ALo(4,"guardType"),e.YNc(5,Ea,11,21,"th",20),e.ALo(6,"guardType"),e.YNc(7,zs,10,12,"th",21),e.ALo(8,"guardType"),e.BQk()),2&f){const c=e.oxw().$implicit,y=e.oxw(2);e.xp6(1),e.Q6J("ngIf",e.xi3(2,4,c,y.colGuards.isSelectCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(4,7,c,y.colGuards.isEntityTagCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(6,10,c,y.colGuards.isEnumTagCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(8,13,c,y.colGuards.isTextTagCol))}}function Ni(f,d){if(1&f&&(e.ynx(0),e.YNc(1,Ts,9,16,"ng-container",10),e.BQk()),2&f){const c=d.$implicit;e.xp6(1),e.Q6J("ngIf",!c.hidden)}}function Js(f,d){if(1&f&&(e.TgZ(0,"thead")(1,"tr",7),e.YNc(2,tc,2,1,"ng-container",8),e.qZA(),e.TgZ(3,"tr",9),e.YNc(4,Ni,2,1,"ng-container",8),e.qZA()()),2&f){const c=d.ngrxLet;e.xp6(2),e.Q6J("ngForOf",c),e.xp6(2),e.Q6J("ngForOf",c)}}function rr(f,d){if(1&f){const c=e.EpF();e.TgZ(0,"td",43),e.NdJ("nzCheckedChange",function(re){e.CHM(c);const ht=e.oxw(3).$implicit,It=e.oxw(2);return e.KtG(It.onRowSelected$.next({id:ht.id,selected:re}))}),e.qZA()}if(2&f){const c=d.ngIf,y=e.oxw(3).$implicit;let re;e.Q6J("nzChecked",y.selected)("nzAlign",null!==(re=c.align)&&void 0!==re?re:"left")("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1)}}function Ks(f,d){1&f&&e.GkF(0)}Xi.\u0275fac=function(d){return new(d||Xi)},Xi.\u0275pipe=e.Yjl({name:"guardType",type:Xi,pure:!0});const yr=function(f,d,c){return{$implicit:f,config:d,emphasize:c}};function Ns(f,d){if(1&f&&(e.ynx(0),e.YNc(1,Ks,1,0,"ng-container",49),e.ALo(2,"isArray"),e.ALo(3,"ngrxPush"),e.BQk()),2&f){const c=e.oxw().ngIf,y=e.oxw().ngIf,re=e.MAs(3),ht=e.MAs(5),It=e.oxw(3).$implicit;let Mn;e.xp6(1),e.Q6J("ngTemplateOutlet",e.lcZ(2,2,It[c])?re:ht)("ngTemplateOutletContext",e.kEZ(6,yr,It[c],y,null==(Mn=e.lcZ(3,4,y.filter.changes))?null:Mn.value))}}function os(f,d){if(1&f&&(e.ynx(0),e.YNc(1,Ns,4,10,"ng-container",48),e.BQk()),2&f){const c=d.ngIf;e.oxw();const y=e.MAs(7),re=e.oxw(3).$implicit;e.xp6(1),e.Q6J("ngIf",re[c])("ngIfElse",y)}}const nc=function(f,d,c,y,re){return{tagList:f,tag:d,showPopover:c,status:y,emphasize:re}};function tr(f,d){if(1&f&&(e.ynx(0),e._UZ(1,"cvc-entity-collection-tag",51),e.BQk()),2&f){const c=e.oxw(2),y=c.config,re=c.$implicit,ht=c.emphasize;e.oxw();const It=e.MAs(5),Mn=e.oxw(5);e.xp6(1),e.Q6J("cvcCollectionTagConfig",e.qbA(3,nc,re.slice(y.tag.maxTags,re.length),y.tag,!Mn.isScrolling,!0===y.showStatus?re.status:void 0,ht))("cvcTagTemplate",It)("cvcShowFullLabels",!0)}}function Zc(f,d){if(1&f&&(e.ynx(0),e._UZ(1,"cvc-entity-tag-list",50),e.YNc(2,tr,2,9,"ng-container",10),e.BQk()),2&f){const c=e.oxw(),y=c.config,re=c.$implicit,ht=c.emphasize;e.oxw();const It=e.MAs(5),Mn=e.oxw(5);e.xp6(1),e.Q6J("cvcTagTemplate",It)("cvcTagListConfig",e.qbA(3,nc,re.slice(0,y.tag.maxTags),y.tag,!Mn.isScrolling,!0===y.showStatus?re.status:void 0,ht)),e.xp6(1),e.Q6J("ngIf",re.slice(y.tag.maxTags,re.length).length>0)}}function is(f,d){if(1&f&&e.YNc(0,Zc,3,9,"ng-container",48),2&f){const c=d.$implicit;e.oxw();const y=e.MAs(7);e.Q6J("ngIf",c.length>0)("ngIfElse",y)}}function Cr(f,d){if(1&f&&e._UZ(0,"cvc-entity-tag",52),2&f){const c=d.$implicit,y=d.config,re=d.emphasize,ht=e.oxw(6);let It;e.Q6J("cvcTruncateLabel",null==y.tag?null:y.tag.truncateLabel)("cvcLinkableEntity",c)("cvcEmphasize",re)("cvcShowPopover",!ht.isScrolling)("cvcStatus",!0===y.showStatus?c.status:void 0)("cvcFullWidth",null!==(It=null==y.tag?null:y.tag.fullWidth)&&void 0!==It&&It)}}function sr(f,d){if(1&f&&e._UZ(0,"cvc-empty-value",53),2&f){const c=e.oxw().ngIf;e.Q6J("cvcEmptyCategory",c.emptyValueCategory||"not-applicable")}}function Ls(f,d){if(1&f&&(e.TgZ(0,"td",44),e.YNc(1,os,2,2,"ng-container",10),e.YNc(2,is,1,2,"ng-template",null,45,e.W1O),e.YNc(4,Cr,1,6,"ng-template",null,46,e.W1O),e.YNc(6,sr,1,1,"ng-template",null,47,e.W1O),e.qZA()),2&f){const c=d.ngIf;let y;e.Q6J("nzAlign",null!==(y=c.align)&&void 0!==y?y:"left")("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1),e.xp6(1),e.Q6J("ngIf",c.context||c.key)}}function yi(f,d){if(1&f&&(e._UZ(0,"cvc-attribute-tag",56),e.ALo(1,"evidenceEnumDisplay")),2&f){const c=e.oxw().ngIf,y=e.oxw(3).$implicit,re=e.oxw(2);e.Q6J("cvcFullWidth",!0)("cvcAttrValue",y[c.key])("cvcTooltip",e.lcZ(1,3,!re.isScrolling&&y[c.key]))}}function rs(f,d){if(1&f&&e._UZ(0,"cvc-empty-value",57),2&f){const c=e.oxw().ngIf;e.Q6J("cvcEmptyCategory",c.emptyValueCategory||"unspecified")}}function Ko(f,d){if(1&f&&(e.TgZ(0,"td",44),e.YNc(1,yi,2,5,"cvc-attribute-tag",54),e.YNc(2,rs,1,1,"ng-template",null,55,e.W1O),e.qZA()),2&f){const c=d.ngIf,y=e.MAs(3),re=e.oxw(3).$implicit;let ht;e.Q6J("nzAlign",null!==(ht=c.align)&&void 0!==ht?ht:"left")("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1),e.xp6(1),e.Q6J("ngIf",re[c.key])("ngIfElse",y)}}function qs(f,d){if(1&f&&(e.TgZ(0,"nz-tag",60),e._UZ(1,"span",61),e.qZA()),2&f){const c=e.oxw().ngIf,y=e.oxw(3).$implicit;e.Q6J("nzTooltipTitle",y[c.key])}}function ss(f,d){if(1&f&&e._UZ(0,"cvc-empty-value",53),2&f){const c=e.oxw().ngIf;e.Q6J("cvcEmptyCategory",c.emptyValueCategory||"unspecified")}}function nu(f,d){if(1&f&&(e.TgZ(0,"td",44),e.YNc(1,qs,2,1,"nz-tag",58),e.YNc(2,ss,1,1,"ng-template",null,59,e.W1O),e.qZA()),2&f){const c=d.ngIf,y=e.MAs(3),re=e.oxw(3).$implicit;let ht;e.Q6J("nzAlign",null!==(ht=c.align)&&void 0!==ht?ht:"left")("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1),e.xp6(1),e.Q6J("ngIf",re[c.key])("ngIfElse",y)}}function Ur(f,d){if(1&f&&(e.ynx(0),e.YNc(1,rr,1,4,"td",41),e.ALo(2,"guardType"),e.YNc(3,Ls,8,4,"td",42),e.ALo(4,"guardType"),e.YNc(5,Ko,4,5,"td",42),e.ALo(6,"guardType"),e.YNc(7,nu,4,5,"td",42),e.ALo(8,"guardType"),e.BQk()),2&f){const c=e.oxw().$implicit,y=e.oxw(3);e.xp6(1),e.Q6J("ngIf",e.xi3(2,4,c,y.colGuards.isSelectCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(4,7,c,y.colGuards.isEntityTagCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(6,10,c,y.colGuards.isEnumTagCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(8,13,c,y.colGuards.isTextTagCol))}}function ou(f,d){if(1&f&&(e.ynx(0),e.YNc(1,Ur,9,16,"ng-container",10),e.BQk()),2&f){const c=d.$implicit;e.xp6(1),e.Q6J("ngIf",!c.hidden)}}function te(f,d){if(1&f&&(e.TgZ(0,"tr",40),e.YNc(1,ou,2,1,"ng-container",8),e.qZA()),2&f){const c=e.oxw().ngrxLet;e.xp6(1),e.Q6J("ngForOf",c)}}function Be(f,d){1&f&&(e.TgZ(0,"tbody"),e.YNc(1,te,2,1,"ng-template",39),e.qZA())}function le(f,d){1&f&&e._UZ(0,"span",69)}function Xe(f,d){if(1&f){const c=e.EpF();e.TgZ(0,"span",70),e.NdJ("click",function(){e.CHM(c),e.oxw(2);const re=e.MAs(3),ht=e.oxw().filter;return re.value="",e.KtG(ht.changes.next({key:ht.key,value:null}))}),e.qZA()}}function Dt(f,d){if(1&f&&(e.YNc(0,le,1,0,"span",67),e.YNc(1,Xe,1,0,"span",68)),2&f){e.oxw();const c=e.MAs(3);e.Q6J("ngIf",!c.value),e.xp6(1),e.Q6J("ngIf",c.value)}}function dn(f,d){if(1&f){const c=e.EpF();e.ynx(0),e.TgZ(1,"nz-input-group",63)(2,"input",64,65),e.NdJ("nzFilterChange",function(re){e.CHM(c);const ht=e.oxw().filter;return e.KtG(ht.changes.next({key:ht.key,value:re}))}),e.qZA()(),e.YNc(4,Dt,2,2,"ng-template",null,66,e.W1O),e.BQk()}if(2&f){const c=e.MAs(5),y=e.oxw().filter;e.xp6(1),e.Q6J("nzSuffix",c),e.xp6(1),e.Q6J("placeholder",y.placeholder)("ngModel",y.defaultValue)}}function vn(f,d){if(1&f){const c=e.EpF();e.TgZ(0,"nz-input-number-group",71)(1,"nz-input-number",72,65),e.NdJ("ngModelChange",function(re){e.CHM(c);const ht=e.oxw().filter;return e.KtG(ht.changes.next({key:ht.key,value:re}))}),e.qZA()()}if(2&f){const c=e.oxw().filter;e.xp6(1),e.Q6J("nzPlaceHolder",c.placeholder)("ngModel",c.defaultValue)("nzMin",1)("nzStep",1)}}function Zn(f,d){if(1&f&&(e.YNc(0,dn,6,3,"ng-container",48),e.YNc(1,vn,3,4,"ng-template",null,62,e.W1O)),2&f){const c=d.filter,y=e.MAs(2);e.Q6J("ngIf",void 0===c.inputType||"default"===c.inputType)("ngIfElse",y)}}const wo=function(){return[6,6]};function Qo(f,d){1&f&&(e.TgZ(0,"nz-row",73)(1,"nz-col")(2,"span"),e._uU(3,"Use checkboxes to select or deselect EIDs"),e.qZA()()()),2&f&&e.Q6J("nzGutter",e.DdM(1,wo))}function Bo(f,d){1&f&&(e.TgZ(0,"nz-tag",84),e._UZ(1,"i",85),e.TgZ(2,"span"),e._uU(3,"Loading\u2026"),e.qZA()())}const Mo=function(f){return{$implicit:f}};function ri(f,d){if(1&f&&(e.TgZ(0,"nz-tag",88),e._UZ(1,"span",89),e.TgZ(2,"span",90),e._uU(3),e.qZA()()),2&f){e.oxw();const c=e.MAs(4),y=e.oxw().ngrxLet;e.xp6(2),e.Q6J("nzTooltipTitle",c)("nzTooltipTitleContext",e.VKq(3,Mo,y.query)),e.xp6(1),e.hij(" Query Error",y.query.length>1?"s":""," ")}}function ei(f,d){if(1&f&&(e.TgZ(0,"nz-tag",88)(1,"span",90)(2,"span",91)(3,"strong"),e._uU(4),e.qZA()()()()),2&f){e.oxw();const c=e.MAs(4),y=e.oxw().ngrxLet;e.xp6(1),e.Q6J("nzTooltipTitle",c)("nzTooltipTitleContext",e.VKq(3,Mo,y.network)),e.xp6(3),e.hij(" Network Error",y.query.length>1?"s":""," ")}}function li(f,d){if(1&f&&(e.TgZ(0,"div"),e._uU(1),e.qZA()),2&f){const c=d.$implicit;e.xp6(1),e.hij(" ",c.message," ")}}function Wi(f,d){1&f&&e.YNc(0,li,2,1,"div",8),2&f&&e.Q6J("ngForOf",d.$implicit)}function Ci(f,d){if(1&f&&(e.ynx(0),e.YNc(1,ri,4,5,"nz-tag",86),e.YNc(2,ei,5,5,"nz-tag",86),e.YNc(3,Wi,1,1,"ng-template",null,87,e.W1O),e.BQk()),2&f){const c=e.oxw().ngrxLet;e.xp6(1),e.Q6J("ngIf",c.query),e.xp6(1),e.Q6J("ngIf",c.network)}}function Fr(f,d){if(1&f&&(e.ynx(0),e.YNc(1,Ci,5,2,"ng-container",10),e.BQk()),2&f){const c=d.ngrxLet;e.xp6(1),e.Q6J("ngIf",c)}}function Li(f,d){if(1&f){const c=e.EpF();e.TgZ(0,"div",92)(1,"nz-checkbox-group",93),e.NdJ("ngModelChange",function(re){e.CHM(c);const ht=e.oxw(2);return e.KtG(ht.onPreferenceChange$.next(re))}),e.ALo(2,"ngrxPush"),e.qZA()()}if(2&f){const c=e.oxw(2);e.xp6(1),e.Q6J("ngModel",e.lcZ(2,1,c.setPreference$))}}function as(f,d){if(1&f){const c=e.EpF();e.TgZ(0,"nz-row",73)(1,"nz-col",74),e.YNc(2,Bo,4,0,"nz-tag",75),e.ALo(3,"ngrxPush"),e.ALo(4,"ngrxPush"),e._UZ(5,"cvc-no-more-rows",76),e.ALo(6,"ngrxPush"),e.qZA(),e.TgZ(7,"nz-col",74),e.YNc(8,Fr,2,1,"ng-container",3),e.qZA(),e.TgZ(9,"nz-col",74),e._UZ(10,"cvc-table-counts",77),e.qZA(),e.TgZ(11,"nz-col",78)(12,"nz-button-group")(13,"button",79),e.NdJ("click",function(){e.CHM(c);const re=e.oxw();return e.KtG(re.onResetFilter$.next())}),e._UZ(14,"span",80),e.qZA(),e.TgZ(15,"button",81),e._UZ(16,"span",82),e.qZA()(),e.YNc(17,Li,3,3,"ng-template",null,83,e.W1O),e.qZA()()}if(2&f){const c=e.MAs(18),y=e.oxw();e.Q6J("nzGutter",8),e.xp6(2),e.Q6J("ngIf",e.lcZ(3,7,y.loading$)&&e.lcZ(4,9,y.isFetchMore$)),e.xp6(3),e.Q6J("cvcShowTag",e.lcZ(6,11,y.noMoreRows$)),e.xp6(3),e.Q6J("ngrxLet",y.queryError$),e.xp6(2),e.Q6J("cvcTableCountsConnection",y.connection$),e.xp6(5),e.Q6J("nzPopoverContent",c)("nzPopoverTrigger","click")}}const xi=function(){return[]},ks=function(){return{x:"800px",y:"200px"}};let cs=((vr=class{constructor(d,c,y){this.queryGQL=d,this.apollo=c,this.cdr=y,this.cvcSelectedIdsChange=new e.vpe,this.isScrolling=!1,this.colGuards=Fi,this.onFetchMore$=new Je.x,this.onPreferenceChange$=new it.X([]),this.onResetFilter$=new Je.x,this.onRowSelected$=new Je.x,this.onScroll$=new it.X("stop"),this.onSetSelectedRow$=new it.X(new Set),this.queryError$=new Je.x,this.queryRequest$=new Je.x,this.queryResult$=new Wo.t(1),this.isFetchMore$=new it.X(!1),this.noMoreRows$=new it.X(!1),this.scrollToIndex$=new Je.x,this.tableConfig=new Ve;const re=(0,io.a)(this.tableConfig.getFilterStreams()),ht=(0,io.a)(this.tableConfig.getSortStreams()).pipe((0,Ge.h)(It=>It.filter(Mn=>null!==Mn.value).length<=1));this.refetch$=(0,io.a)([ht,re]).pipe((0,yt.U)(([It,Mn])=>({query:"refetch",sort:It,filter:Mn}))),this.fetchMore$=this.onFetchMore$.pipe((0,yt.U)(It=>({query:"fetchMore",fetchMore:{...It}}))),(0,dr.T)(this.refetch$,this.fetchMore$).pipe((0,Gi.b)(50),(0,Pe.t)(this)).subscribe(It=>{const Mn=this.getQueryVars(It);this.queryRef?(this.queryError$.next({}),"refetch"===It.query?(this.isFetchMore$.next(!1),this.queryRef.refetch(Mn).then(kn=>{(kn.error||kn.errors)&&this.queryError$.next(this.getRequestErrors(kn))}).then(()=>{this.scrollToIndex$.next(0)})):(this.isFetchMore$.next(!0),this.queryRef.fetchMore({variables:Mn}).then(kn=>{(kn.error||kn.errors)&&this.queryError$.next(this.getRequestErrors(kn))}))):(this.isFetchMore$.next(!1),this.queryError$.next({}),this.queryRef=this.queryGQL.watch(Mn),this.queryRef.valueChanges.pipe((0,Pe.t)(this)).subscribe(kn=>{this.queryResult$.next(kn),(kn.error||kn.errors)&&this.queryError$.next(this.getRequestErrors(kn))}))}),this.loading$=this.queryResult$.pipe((0,Ut.j)("loading"),(0,Io.x)()),this.connection$=this.queryResult$.pipe((0,Ut.j)("data","evidenceItems"),(0,Ge.h)(Qn.ep)),this.pageInfo$=this.connection$.pipe((0,Ut.j)("pageInfo"),(0,Ge.h)(Qn.ep)),this.row$=(0,io.a)([this.connection$.pipe((0,Ut.j)("edges"),(0,Ge.h)(Qn.ep),(0,yt.U)(It=>It.map(Mn=>Mn.node))),this.onSetSelectedRow$]).pipe((0,yt.U)(([It,Mn])=>It.map(kn=>{if(kn)return{...kn,evidenceItem:{__typename:"EvidenceItem",id:kn.id,name:kn.name,link:kn.link,status:kn.status},selected:Mn.has(kn.id)}}))),this.col$=new it.X(this.tableConfig.get()),this.setPreference$=this.col$.pipe((0,yt.U)(It=>this.getColPrefsFromTableConfig(It))),this.onPreferenceChange$.pipe((0,tt.M)(this.col$),(0,yt.U)(([It,Mn])=>this.getTableConfigFromColPrefs(It,Mn)),(0,Pe.t)(this)).subscribe(It=>{this.col$.next(It)}),this.onSetTableFilter$=new it.X([]),this.onSetTableFilter$.pipe((0,Pe.t)(this)).subscribe(It=>{const Mn=this.col$.getValue();It.forEach(kn=>{const Uo=Mn.find(ji=>ji.key===kn.key);if(void 0!==Uo.filter.inputType){const ji=Uo.filter.options[0];if(null===kn.value)return Uo.filter.options=[{...ji,value:null}],void Uo.filter.changes.next(kn);if(Array.isArray(kn.value)&&0===kn.value.length)return Uo.filter.options=[{...ji,value:null}],void Uo.filter.changes.next({...kn,value:null});let es;Array.isArray(kn.value)?kn.value.length>0&&(es=kn.value[0]):es=kn.value;const Fu=Uo.filter.typename;if(!Fu||!es)return void console.error(`evidence-manager requires column config '${Uo.key}' provide a typename for cvcTablePrefs Input to set its filter`);const eu=this.getEntityName(Fu,es);if(!eu)return;Uo.filter.options=[{...ji,value:eu}],Uo.filter.changes.next({...kn,value:eu})}else pr(Uo)&&Uo.filter.changes.next(kn)})}),this.onSetTablePref$=new it.X([]),this.onSetTablePref$.pipe((0,tt.M)(this.setPreference$),(0,yt.U)(([It,Mn])=>{const kn=[];return It.forEach(Uo=>{let ji=Mn.find(es=>es.value===Uo.value);ji?kn.push({...ji,...Uo}):console.warn(`evidence-manager onSetTablePref$ received updated preferences for column '${Uo.value}', but a column with that key could not be found.`)}),kn}),(0,Pe.t)(this)).subscribe(It=>{this.onPreferenceChange$.next(It)}),this.onRowSelected$.pipe((0,tt.M)(this.onSetSelectedRow$),(0,Pe.t)(this)).subscribe(([It,Mn])=>{It.selected?Mn.add(It.id):Mn.delete(It.id),this.onSetSelectedRow$.next(Mn),this.cvcSelectedIdsChange.next(Array.from(Mn))}),this.onScroll$.pipe((0,yt.U)(It=>"stop"!==It),(0,Io.x)(),(0,Pe.t)(this)).subscribe(It=>{this.isScrolling=It,this.cdr.detectChanges()}),this.onScroll$.pipe((0,Ge.h)(It=>"bottom"===It),(0,tt.M)(this.pageInfo$),(0,yt.U)(([It,Mn])=>Mn),(0,Pe.t)(this)).subscribe(It=>{It.hasNextPage||(this.noMoreRows$.next(!0),this.cdr.detectChanges(),setInterval(()=>this.noMoreRows$.next(!1)))})}ngAfterViewInit(){this.onResetFilter$.pipe((0,tt.M)((0,uo.of)(this.tableConfig.get())),(0,Pe.t)(this)).subscribe(([d,c])=>{const y=[];c.forEach(re=>{if(Ws(re)&&re.sort.changes&&re.sort.changes.next({key:re.key,value:re.sort.default??null}),pr(re)){const ht=re.filter.options.find(It=>1==It.byDefault)?.value;re.filter.changes&&re.filter.changes.next({key:re.key,value:ht||null})}y.push(re)}),this.col$.next(y)})}getQueryVars(d){const c=this.getQueryFilterParams(d);return{...this.getQuerySortParams(d),...c,...d.fetchMore}}getQuerySortParams(d){if(!d.sort)return;const y=d.sort.find(ht=>null!==ht.value);return y?{sortBy:{column:this.getSortColumnFromColKey(y.key),direction:"ascend"===y.value?bn.SrV.Asc:bn.SrV.Desc||void 0}}:void 0}getQueryFilterParams(d){let c={};return d.filter&&d.filter.forEach(y=>{c[hr[y.key]||y.key]=null===y.value||""===y.value?void 0:y.value}),c}getRequestErrors(d){return{query:d.errors,network:d.error}}getTableConfigFromColPrefs(d,c){return c.forEach(y=>{if(Fs.find(ht=>ht===y.key))return;const re=d.find(ht=>ht.value===y.key);re&&(y.hidden=!re?.checked)}),[...c]}getColPrefsFromTableConfig(d){let c=[];return d.forEach(y=>{Fs.find(re=>re===y.key)||c.push({label:y.tooltip||y.label,value:y.key,checked:!y.hidden})}),c}getSortColumnFromColKey(d){return Yr[d]}getEntityName(d,c){const y={id:`${d}:${c}`,fragment:Ki.Ps`
                fragment Linkable${d}Entity on ${d} {
                  id
                  name
                  link
                }`},re=this.apollo.client.readFragment(y);if(re)return re.name;console.error(`evidence-manager onSetTableFilter$ could not find cached entity ${d}:${c} to populate input filter`)}trackByIndex(d,c){return c?.id}ngOnChanges(d){if(d.cvcTableSettings){const c=d.cvcTableSettings.currentValue;void 0!==c&&this.onSetTableFilter$.next(c.filters)}if(d.cvcSelectedIds){const c=d.cvcSelectedIds.currentValue,y=new Set;void 0!==c&&c.forEach(re=>y.add(re)),this.onSetSelectedRow$.next(y)}}}).\u0275fac=function(d){return new(d||vr)(e.Y36(bn.EH_),e.Y36(ci._M),e.Y36(e.sBO))},vr.\u0275cmp=e.Xpm({type:vr,selectors:[["cvc-evidence-manager"]],inputs:{cvcTableSettings:"cvcTableSettings",cvcSelectedIds:"cvcSelectedIds"},outputs:{cvcSelectedIdsChange:"cvcSelectedIdsChange"},features:[e.TTD],decls:16,vars:27,consts:[["nzSize","small",3,"nzTitle","nzExtra"],["cvcTableScroller","",3,"nzData","cvcTableScrollerQueryRef","cvcTableScrollerPageInfo","cvcTableScrollerToIndex","nzScroll","nzVirtualForTrackBy","nzVirtualItemSize","nzSize","nzFrontPagination","nzShowPagination","nzLoading","cvcTableScrollerOnScroll","cvcTableScrollerOnFetch"],["virtualTable",""],[4,"ngrxLet"],["columnFilterInput",""],["cardTitle",""],["extraTemplate",""],[1,"col-header-row"],[4,"ngFor","ngForOf"],[1,"filter-row"],[4,"ngIf"],[3,"nzShowCheckbox","nzWidth","nzAlign","nzLeft","nzRight",4,"ngIf"],[3,"nzColumnKey","nzAlign","nzWidth","nzLeft","nzRight","nzShowSort","nzSortFn","nzSortOrder","nzSortOrderChange",4,"ngIf"],["nz-tooltip","",3,"nzColumnKey","nzAlign","nzWidth","nzLeft","nzRight","nzTooltipTitle",4,"ngIf"],[3,"nzShowCheckbox","nzWidth","nzAlign","nzLeft","nzRight"],[3,"nzColumnKey","nzAlign","nzWidth","nzLeft","nzRight","nzShowSort","nzSortFn","nzSortOrder","nzSortOrderChange"],["nz-tooltip","",1,"col-header-label",3,"nzTooltipTitle"],["nz-tooltip","",3,"nzColumnKey","nzAlign","nzWidth","nzLeft","nzRight","nzTooltipTitle"],[3,"nzColumnKey","nzAlign","nzWidth","nzLeft","nzRight",4,"ngIf"],[3,"nzColumnKey","nzWidth","nzAlign","nzLeft","nzRight",4,"ngIf"],["class","attribute-filter","nzCustomFilter","",3,"nzColumnKey","nzWidth","nzAlign","nzLeft","nzRight","nzShowSort","nzSortFn","nzSortOrder","nzShowFilter","nzFilterFn","nzSortOrderChange",4,"ngIf"],["class","attribute-filter","nzCustomFilter","",3,"nzColumnKey","nzWidth","nzAlign","nzLeft","nzRight","nzFilterFn",4,"ngIf"],[3,"nzColumnKey","nzAlign","nzWidth","nzLeft","nzRight"],[3,"nzColumnKey","nzWidth","nzAlign","nzLeft","nzRight"],[3,"cvcInputType","cvcPlaceholder","cvcModel","cvcModelChange",4,"ngIf"],[3,"cvcInputType","cvcPlaceholder","cvcModel","cvcModelChange"],["nzCustomFilter","",1,"attribute-filter",3,"nzColumnKey","nzWidth","nzAlign","nzLeft","nzRight","nzShowSort","nzSortFn","nzSortOrder","nzShowFilter","nzFilterFn","nzSortOrderChange"],["enumTableFilter",""],[3,"nzDropdownMenu","nzActive"],["enumTagFilterTrigger",""],["nz-icon","","nzType","filter","nzTheme","fill"],["enumFilterMenu","nzDropdownMenu"],[3,"cvcColumnKey","cvcFilterOptions","cvcOption","cvcOptionChange"],["nzCustomFilter","",1,"attribute-filter",3,"nzColumnKey","nzWidth","nzAlign","nzLeft","nzRight","nzFilterFn"],["nz-icon","","nzType","search"],["textTagFilterMenu","nzDropdownMenu"],[1,"ant-table-filter-dropdown"],[1,"custom-input-dropdown"],[3,"cvcPlaceholder","cvcModel","cvcModelChange"],["nz-virtual-scroll",""],[1,"data-row"],[3,"nzChecked","nzAlign","nzLeft","nzRight","nzCheckedChange",4,"ngIf"],[3,"nzAlign","nzLeft","nzRight",4,"ngIf"],[3,"nzChecked","nzAlign","nzLeft","nzRight","nzCheckedChange"],[3,"nzAlign","nzLeft","nzRight"],["entityTagList",""],["entityTag",""],["emptyEntityTagCell",""],[4,"ngIf","ngIfElse"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"cvcTagTemplate","cvcTagListConfig"],[3,"cvcCollectionTagConfig","cvcTagTemplate","cvcShowFullLabels"],[3,"cvcTruncateLabel","cvcLinkableEntity","cvcEmphasize","cvcShowPopover","cvcStatus","cvcFullWidth"],[3,"cvcEmptyCategory"],["cvcContext","compact",3,"cvcFullWidth","cvcAttrValue","cvcTooltip",4,"ngIf","ngIfElse"],["emptyEnumTagCell",""],["cvcContext","compact",3,"cvcFullWidth","cvcAttrValue","cvcTooltip"],["cvcDisplayMode","small",3,"cvcEmptyCategory"],["nz-tooltip","","style","width: 100%; cursor: help; color: #595959",3,"nzTooltipTitle",4,"ngIf","ngIfElse"],["emptyTextTagCell",""],["nz-tooltip","",2,"width","100%","cursor","help","color","#595959",3,"nzTooltipTitle"],["nz-icon","","nzType","align-left","nzTheme","outline"],["numericInput",""],["nzSize","small",3,"nzSuffix"],["nz-input","",3,"placeholder","ngModel","nzFilterChange"],["filterInput",""],["suffixIcon",""],["nz-icon","","nzType","search","style","color: #ddd",4,"ngIf"],["nz-icon","","class","ant-input-clear-icon","nzTheme","fill","nzType","close-circle",3,"click",4,"ngIf"],["nz-icon","","nzType","search",2,"color","#ddd"],["nz-icon","","nzTheme","fill","nzType","close-circle",1,"ant-input-clear-icon",3,"click"],["nzSize","small"],[2,"width","100%",3,"nzPlaceHolder","ngModel","nzMin","nzStep","ngModelChange"],[3,"nzGutter"],["nzFlex","auto"],["nzColor","processing",4,"ngIf"],[3,"cvcShowTag"],[3,"cvcTableCountsConnection"],["nzFlex","35px"],["nz-button","","type","button","nzType","default","nzSize","small",3,"click"],["nz-icon","","nzType","retweet","nzTheme","outline"],["nz-button","","nz-popover","","nzPopoverTitle","Visible Columns","type","button","nzType","default","nzSize","small",3,"nzPopoverContent","nzPopoverTrigger"],["nz-icon","","nzType","setting","nzTheme","outline"],["prefsPopover",""],["nzColor","processing"],["nz-icon","","nzType","sync","nzSpin",""],["nzColor","error","style","margin-left: 12px",4,"ngIf"],["queryError",""],["nzColor","error",2,"margin-left","12px"],["nz-icon","","nzType","question-circle","nzTheme","outline"],["nz-tooltip","",2,"cursor","help",3,"nzTooltipTitle","nzTooltipTitleContext"],["nz-typography",""],[1,"prefs-popover"],[3,"ngModel","ngModelChange"]],template:function(d,c){if(1&d&&(e.TgZ(0,"nz-card",0)(1,"nz-table",1,2),e.NdJ("cvcTableScrollerOnScroll",function(re){return c.onScroll$.next(re)})("cvcTableScrollerOnFetch",function(re){return c.onFetchMore$.next(re)}),e.ALo(3,"ngrxPush"),e.ALo(4,"ngrxPush"),e.ALo(5,"ngrxPush"),e.ALo(6,"ngrxPush"),e.ALo(7,"ngrxPush"),e.YNc(8,Js,5,2,"thead",3),e.YNc(9,Be,2,0,"tbody",3),e.qZA()(),e.YNc(10,Zn,3,2,"ng-template",null,4,e.W1O),e.YNc(12,Qo,4,2,"ng-template",null,5,e.W1O),e.YNc(14,as,19,13,"ng-template",null,6,e.W1O)),2&d){const y=e.MAs(13),re=e.MAs(15);e.Q6J("nzTitle",y)("nzExtra",re),e.xp6(1),e.Q6J("nzData",e.lcZ(3,15,c.row$)||e.DdM(25,xi))("cvcTableScrollerQueryRef",c.queryRef)("cvcTableScrollerPageInfo",e.lcZ(4,17,c.pageInfo$))("cvcTableScrollerToIndex",e.lcZ(5,19,c.scrollToIndex$))("nzScroll",e.DdM(26,ks))("nzVirtualForTrackBy",c.trackByIndex)("nzVirtualItemSize",28)("nzSize","small")("nzFrontPagination",!1)("nzShowPagination",!1)("nzLoading",e.lcZ(6,21,c.loading$)&&!e.lcZ(7,23,c.isFetchMore$)),e.xp6(7),e.Q6J("ngrxLet",c.col$),e.xp6(1),e.Q6J("ngrxLet",c.col$)}},dependencies:[E.sg,E.O5,E.tP,Qe,Vt.P,ii,Sn,Tt.J,ho.H,xe,t.Fj,t.JJ,t.On,I.eJ,Yn.ix,Yn.fY,pn.w,ln.dQ,Go.bd,kt.ub,Ii.RR,w.t3,w.SK,_t.Ls,Ae.Zp,Ae.gB,Ae.ke,Bi._V,Bi.Rb,co.lU,Oo.N8,Oo.qD,Oo.Uo,Oo._C,Oo.h7,Oo.Om,Oo.p0,Oo.$Z,Oo.zu,Oo.qn,Oo.Ql,Oo.UX,Oo.g6,Yt.j,At.SY,de.ZU,hn,gr,qi,Qi,j.Do,Xi,I.fM],styles:["[_nghost-%COMP%]{display:block}nz-card[_ngcontent-%COMP%]:first-of-type     .ant-card-body{padding:0;margin-top:1px}.table-info[_ngcontent-%COMP%]{margin-left:.5rem}tr.col-header-row[_ngcontent-%COMP%]   th.ant-table-cell[_ngcontent-%COMP%]{white-space:nowrap}tr.col-header-row[_ngcontent-%COMP%]   th.ant-table-cell.align-right[_ngcontent-%COMP%]     .ant-table-column-title{text-align:right}tr.filter-row[_ngcontent-%COMP%]   th.ant-table-cell[_ngcontent-%COMP%]{padding:3px 4px}tr.filter-row[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   nz-filter-trigger[_ngcontent-%COMP%]     span.ant-dropdown-trigger{margin-left:0;padding-right:12px}tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell[_ngcontent-%COMP%]{white-space:nowrap}tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell[_ngcontent-%COMP%]   .anticon.attribute-icon[_ngcontent-%COMP%]{color:#595959}tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell.overflow-ellipsis[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis}tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell.button-cell[_ngcontent-%COMP%]{padding:0}tr.data-row[_ngcontent-%COMP%]   td.align-right[_ngcontent-%COMP%], tr.col-header-row[_ngcontent-%COMP%]   th.ant-table-cell[_ngcontent-%COMP%]   .align-right[_ngcontent-%COMP%], tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell[_ngcontent-%COMP%]   .align-right[_ngcontent-%COMP%], tr.filter-row[_ngcontent-%COMP%]   th.ant-table-cell[_ngcontent-%COMP%]   .align-right[_ngcontent-%COMP%]{text-align:right}tr.data-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-of-type{padding-left:6px}tr.data-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-of-type   cvc-entity-tag[_ngcontent-%COMP%]{margin-left:6px}.ant-table-filter-dropdown[_ngcontent-%COMP%]{padding:8px}.prefs-popover[_ngcontent-%COMP%]     nz-checkbox-group:first-of-type label{display:block}.prefs-popover[_ngcontent-%COMP%]     nz-checkbox-group:first-of-type label span{display:inline-block}"],changeDetection:0}),vr);cs=(0,Te.gn)([(0,Pe.c)()],cs);const Jc=["optionTemplates"];function Sa(f,d){if(1&f){const c=e.EpF();e.TgZ(0,"nz-col",9)(1,"cvc-evidence-manager",10),e.NdJ("cvcSelectedIdsChange",function(re){e.CHM(c);const ht=e.oxw();return e.KtG(ht.onPopulate$.next(re))}),e.ALo(2,"ngrxPush"),e.ALo(3,"ngrxPush"),e.qZA()()}if(2&f){const c=e.oxw();e.xp6(1),e.Q6J("cvcSelectedIds",e.lcZ(2,2,c.onEid$))("cvcTableSettings",e.lcZ(3,4,c.tableSettingsChange$))}}function Kc(f,d){if(1&f&&e._UZ(0,"cvc-entity-tag",13),2&f){const c=e.oxw().$implicit,y=e.oxw().ngrxLet;e.Q6J("cvcDisableLink",!0)("cvcCacheId",c.__typename+":"+c.id)("cvcEmphasize",y)}}function Ms(f,d){1&f&&(e.ynx(0),e.YNc(1,Kc,1,3,"ng-template",null,12,e.W1O),e.BQk())}function qc(f,d){if(1&f&&(e.ynx(0),e.YNc(1,Ms,3,0,"ng-container",11),e.ALo(2,"ngrxPush"),e.BQk()),2&f){const c=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,c.result$))}}function ar(f,d){if(1&f){const c=e.EpF();e.TgZ(0,"div",14)(1,"cvc-entity-tag",15),e.NdJ("cvcOnClose",function(){const ht=e.CHM(c).$implicit,It=e.oxw();return e.KtG(It.onTagClose$.next(ht.nzValue))}),e.qZA()()}if(2&f){const c=d.$implicit,y=e.oxw();e.xp6(1),e.Q6J("cvcCacheId","EvidenceItem:"+c.nzValue)("cvcContext",y.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",y.props.isMultiSelect?"default":"closeable")}}const Xc=function(){return[6,6]},bs=function(f,d){return{show:f,hide:d}},oc=jt($t(),yo());class Ti extends oc{constructor(d,c,y,re){super(),this.taq=d,this.tq=c,this.changeDetectorRef=y,this.apollo=re,this.synchronizedFields$=[],this.synchronizedRequired$=[],this.defaultOptions={props:{label:"Evidence Items",placeholder:"Select Evidence Items",isMultiSelect:!0,description:"Select Evidence by ID, or use the manager to select with filtering",entityName:{singular:"Evidence Item",plural:"Evidence Items"},minSearchStrLength:1}},this.synchronizedFieldToColMap=new Map([["molecularProfileId","molecularProfile"],["diseaseId","disease"],["therapyIds","therapies"]]),this.requiredFieldToColMap=new Map([["disease","requiresDisease$"],["therapies","requiresTherapy$"]]),this.onEid$=new Wo.t,this.onShowMgrClick$=new Je.x,this.showMgr$=this.onShowMgrClick$.pipe((0,pi.R)((ht,It)=>!ht,!1))}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEntitySelectField({typeaheadQuery:this.taq,tagQuery:this.tq,getTypeaheadVarsFn:this.getTypeaheadVarsFn,getTypeaheadResultsFn:this.getTypeaheadResultsFn,getTagQueryVarsFn:this.getTagQueryVarsFn,getTagQueryResultsFn:this.getTagQueryResultsFn,getSelectedItemOptionFn:this.getSelectedItemOptionFn,getSelectOptionsFn:this.getSelectOptionsFn,changeDetectorRef:this.changeDetectorRef,selectOpen$:this.selectOpen$,selectComponent:this.selectComponent}),this.onEid$.pipe((0,Pe.t)(this)).subscribe(),this.onEid$.next(this.formControl.value),this.onValueChange$.pipe((0,tt.M)(this.onEid$),(0,Pe.t)(this)).subscribe(([d,c])=>{Array.isArray(d)&&this.onEid$.next(d)})}configureStateConnections(){this.state&&(this.synchronizedFieldToColMap.forEach((d,c)=>{const y=this.state.fields[`${c}$`];y&&this.synchronizedFields$.push(y.pipe((0,yt.U)(re=>({key:c,value:re??null}))))}),this.requiredFieldToColMap.forEach((d,c)=>{const y=this.state.requires[d];y&&this.synchronizedRequired$.push(y.pipe((0,yt.U)(re=>({key:c,required:re}))))}),this.onFieldsChange$=(0,io.a)(this.synchronizedFields$).pipe((0,yt.U)(d=>{const c=[];return d.forEach(y=>{const re=this.synchronizedFieldToColMap.get(y.key);re&&c.push({key:re,value:y.value})}),c})),this.onRequiredChange$=(0,io.a)(this.synchronizedRequired$).pipe((0,yt.U)(d=>{const c=[];return d.forEach(y=>{c.push({value:y.key,checked:y.required})}),c})),this.tableSettingsChange$=(0,io.a)([this.onFieldsChange$,this.onRequiredChange$]).pipe((0,yt.U)(([d,c])=>({filters:d,preferences:c})),(0,Gi.b)(100),(0,Vi.d)(1)))}getTypeaheadVarsFn(d,c){return{eid:+d.replace(/EID/i,"")}}getTypeaheadResultsFn(d){return d.data.evidenceItems.nodes}getTagQueryVarsFn(d){return{eid:d}}getTagQueryResultsFn(d){return d.data.evidenceItem}getSelectedItemOptionFn(d){return{value:d.id,label:`EID${d.id}`}}getSelectOptionsFn(d,c){return d.map((y,re)=>({label:c.get(re)||`EID${y.id}`,value:y.id}))}}Ti.\u0275fac=function(d){return new(d||Ti)(e.Y36(bn.olA),e.Y36(bn.EFm),e.Y36(e.sBO),e.Y36(ci._M))},Ti.\u0275cmp=e.Xpm({type:Ti,selectors:[["cvc-evidence-select"]],viewQuery:function(d,c){if(1&d&&e.Gf(Jc,5,e.Rgc),2&d){let y;e.iGM(y=e.CRH())&&(c.optionTemplates=y)}},features:[e.qOj],decls:18,vars:36,consts:[[3,"nzGutter"],["nzFlex","auto"],[3,"cvcSelectMode","cvcMinSearchStrLength","cvcCustomTemplate","cvcFormControl","cvcFormlyAttributes","cvcEntityName","cvcPlaceholder","cvcResults","cvcOptions","cvcShowError","cvcDisabled","cvcLoading","cvcSelectOpen","cvcOnSearch","cvcOnOpenChange","cvcSelectComponent","cvcOnModelChange"],["nzFlex","50px"],["type","button","nz-button","","nzBlock","",1,"manager-button",3,"click"],["nz-icon","",3,"ngClass","nzType"],["nzSpan","24","class","manager-drawer",4,"ngIf"],[4,"ngrxLet"],["selectedTemplate",""],["nzSpan","24",1,"manager-drawer"],[3,"cvcSelectedIds","cvcTableSettings","cvcSelectedIdsChange"],[4,"ngFor","ngForOf"],["optionTemplates",""],[3,"cvcDisableLink","cvcCacheId","cvcEmphasize"],[1,"ant-select-selection-item-content"],[3,"cvcCacheId","cvcContext","cvcMode","cvcOnClose"]],template:function(d,c){if(1&d&&(e.TgZ(0,"nz-row",0)(1,"nz-col",1)(2,"cvc-entity-select",2),e.NdJ("cvcOnSearch",function(re){return c.onSearch$.next(re)})("cvcOnOpenChange",function(re){return c.onOpenChange$.next(re)})("cvcSelectComponent",function(re){return c.selectComponent=re})("cvcOnModelChange",function(re){return c.props.change&&c.props.change(c.field,re)}),e.ALo(3,"ngrxPush"),e.ALo(4,"ngrxPush"),e.ALo(5,"ngrxPush"),e.ALo(6,"ngrxPush"),e.qZA()(),e.TgZ(7,"nz-col",3)(8,"button",4),e.NdJ("click",function(){return c.onShowMgrClick$.next()}),e._UZ(9,"span",5),e.ALo(10,"ngrxPush"),e.ALo(11,"ngrxPush"),e._uU(12," Manager "),e.qZA()(),e.YNc(13,Sa,4,6,"nz-col",6),e.ALo(14,"ngrxPush"),e.qZA(),e.YNc(15,qc,3,3,"ng-container",7),e.YNc(16,ar,2,3,"ng-template",null,8,e.W1O)),2&d){const y=e.MAs(17);e.Q6J("nzGutter",e.DdM(32,Xc)),e.xp6(2),e.Q6J("cvcSelectMode",c.props.isMultiSelect?"multiple":"default")("cvcMinSearchStrLength",c.props.minSearchStrLength)("cvcCustomTemplate",y)("cvcFormControl",c.formControl)("cvcFormlyAttributes",c.field)("cvcEntityName",c.props.entityName)("cvcPlaceholder",c.props.placeholder)("cvcResults",e.lcZ(3,18,c.result$))("cvcOptions",e.lcZ(4,20,c.selectOption$))("cvcShowError",c.showError)("cvcDisabled",c.props.disabled)("cvcLoading",e.lcZ(5,22,c.isLoading$))("cvcSelectOpen",e.lcZ(6,24,c.selectOpen$)),e.xp6(7),e.Q6J("ngClass",e.WLB(33,bs,e.lcZ(10,26,c.showMgr$),!e.lcZ(11,28,c.showMgr$)))("nzType","caret-right"),e.xp6(4),e.Q6J("ngIf",e.lcZ(14,30,c.showMgr$)),e.xp6(2),e.Q6J("ngrxLet",c.onSearch$)}},dependencies:[E.mk,E.sg,E.O5,Ue,Tt.J,I.eJ,Yn.ix,pn.w,ln.dQ,w.t3,w.SK,_t.Ls,cs,I.fM],styles:[".manager-button[_ngcontent-%COMP%]   span.hide[_ngcontent-%COMP%]{transform:rotate(0);transition:transform .2s linear}.manager-button[_ngcontent-%COMP%]   span.show[_ngcontent-%COMP%]{transform:rotate(90deg);transition:transform .2s linear}"],changeDetection:0});var iu=a(1371);class Yi{}Yi.\u0275fac=function(d){return new(d||Yi)},Yi.\u0275mod=e.oAB({type:Yi}),Yi.\u0275inj=e.cJS({imports:[E.ez,_t.PV,Yt.X,At.cg,de.ZJ,xt.s,Zt.x]});class Es{}Es.\u0275fac=function(d){return new(d||Es)},Es.\u0275mod=e.oAB({type:Es}),Es.\u0275inj=e.cJS({imports:[E.ez,Yt.X,de.ZJ,co.$6,_t.PV,At.cg,xt.s,Yi]});const Mi={types:[{name:"evidence-select",wrappers:["form-field"],component:Ti},{name:"evidence-multi-select",wrappers:["form-field"],component:Ti,defaultOptions:{props:{label:"Evidence Items",isMultiSelect:!0}}}]};class ls{}ls.\u0275fac=function(d){return new(d||ls)},ls.\u0275mod=e.oAB({type:ls}),ls.\u0275inj=e.cJS({imports:[E.ez,Ye,iu.M,Es,jn,Yi,Zt.x,Ao.y,xt.s,Ro,g.X0.forChild(Mi),t.u5,I._N,Yn.sL,Go.vh,kt.Wr,Ii.b1,s.U5,w.Jb,_t.PV,Ae.o7,Bi.Zf,co.$6,Oo.HQ,Yt.X,At.cg,de.ZJ,I.pP]});const jr=["optionTemplates"];function ic(f,d){if(1&f&&(e.ynx(0),e.TgZ(1,"em"),e._UZ(2,"span",9),e.ALo(3,"highlightTypeahead"),e.qZA(),e.BQk()),2&f){const c=e.oxw(2).$implicit,y=e.oxw().ngrxLet;e.xp6(2),e.Q6J("nzTooltipTitle",c.geneAliases.join(", "))("innerHtml",e.xi3(3,2,c.geneAliases.join(", "),y),e.oJD)}}function Rs(f,d){1&f&&e._uU(0,"--")}function xa(f,d){if(1&f&&(e._UZ(0,"cvc-entity-tag",5),e.TgZ(1,"span",6),e.YNc(2,ic,4,5,"ng-container",7),e.YNc(3,Rs,1,0,"ng-template",null,8,e.W1O),e.qZA()),2&f){const c=e.MAs(4),y=e.oxw().$implicit,re=e.oxw().ngrxLet;e.Q6J("cvcDisableLink",!0)("cvcCacheId",y.__typename+":"+y.id)("cvcEmphasize",re),e.xp6(2),e.Q6J("ngIf",y.geneAliases.length>0)("ngIfElse",c)}}function rc(f,d){1&f&&(e.ynx(0),e.YNc(1,xa,5,5,"ng-template",null,4,e.W1O),e.BQk())}function ru(f,d){if(1&f&&(e.ynx(0),e.YNc(1,rc,3,0,"ng-container",3),e.ALo(2,"ngrxPush"),e.BQk()),2&f){const c=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,c.result$))}}function sc(f,d){if(1&f){const c=e.EpF();e.TgZ(0,"div",10)(1,"cvc-entity-tag",11),e.NdJ("cvcOnClose",function(){const ht=e.CHM(c).$implicit,It=e.oxw();return e.KtG(It.onTagClose$.next(ht.nzValue))}),e.qZA()()}if(2&f){const c=d.$implicit,y=e.oxw();e.xp6(1),e.Q6J("cvcCacheId","Gene:"+c.nzValue)("cvcContext",y.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",y.props.isMultiSelect?"default":"closeable")}}const ac=jt($t(),yo());class Di extends ac{constructor(d,c,y){super(),this.taq=d,this.tq=c,this.changeDetectorRef=y,this.defaultOptions={props:{label:"Gene",placeholder:"Search Genes",isMultiSelect:!1,entityName:{singular:"Gene",plural:"Genes"},description:"Entrez Gene Symbol"}}}ngAfterViewInit(){this.configureBaseField(),this.configureEntitySelectField({typeaheadQuery:this.taq,typeaheadParam$:void 0,tagQuery:this.tq,getTypeaheadVarsFn:this.getTypeaheadVarsFn,getTypeaheadResultsFn:this.getTypeaheadResultsFn,getTagQueryVarsFn:this.getTagQueryVarsFn,getTagQueryResultsFn:this.getTagQueryResultsFn,getSelectedItemOptionFn:this.getSelectedItemOptionFn,getSelectOptionsFn:this.getSelectOptionsFn,changeDetectorRef:this.changeDetectorRef,selectOpen$:this.selectOpen$,selectComponent:this.selectComponent})}getTypeaheadVarsFn(d){return{entrezSymbol:d}}getTypeaheadResultsFn(d){return d.data.geneTypeahead}getTagQueryVarsFn(d){return{geneId:d}}getTagQueryResultsFn(d){return d.data.gene}getSelectedItemOptionFn(d){return{value:d.id,label:d.name}}getSelectOptionsFn(d,c){return d.map((y,re)=>({label:c.get(re)||y.name,value:y.id}))}}Di.\u0275fac=function(d){return new(d||Di)(e.Y36(bn.czh),e.Y36(bn.HwR),e.Y36(e.sBO))},Di.\u0275cmp=e.Xpm({type:Di,selectors:[["cvc-gene-select"]],viewQuery:function(d,c){if(1&d&&e.Gf(jr,5,e.Rgc),2&d){let y;e.iGM(y=e.CRH())&&(c.optionTemplates=y)}},features:[e.qOj],decls:7,vars:17,consts:[[3,"cvcSelectMode","cvcCustomTemplate","cvcFormControl","cvcFormlyAttributes","cvcPlaceholder","cvcEntityName","cvcResults","cvcOptions","cvcShowError","cvcLoading","cvcOnSearch","cvcOnOpenChange","cvcSelectComponent","cvcOnModelChange"],[4,"ngrxLet"],["selectedTemplate",""],[4,"ngFor","ngForOf"],["optionTemplates",""],[3,"cvcDisableLink","cvcCacheId","cvcEmphasize"],["nz-typography","","nzType","secondary"],[4,"ngIf","ngIfElse"],["noAliases",""],["nz-typography","","nzType","secondary","nz-tooltip","",3,"nzTooltipTitle","innerHtml"],[1,"ant-select-selection-item-content"],[3,"cvcCacheId","cvcContext","cvcMode","cvcOnClose"]],template:function(d,c){if(1&d&&(e.TgZ(0,"cvc-entity-select",0),e.NdJ("cvcOnSearch",function(re){return c.onSearch$.next(re)})("cvcOnOpenChange",function(re){return c.onOpenChange$.next(re)})("cvcSelectComponent",function(re){return c.selectComponent=re})("cvcOnModelChange",function(re){return c.props.change&&c.props.change(c.field,re)}),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.ALo(3,"ngrxPush"),e.qZA(),e.YNc(4,ru,3,3,"ng-container",1),e.YNc(5,sc,2,3,"ng-template",null,2,e.W1O)),2&d){const y=e.MAs(6);e.Q6J("cvcSelectMode",c.props.isMultiSelect?"multiple":"default")("cvcCustomTemplate",y)("cvcFormControl",c.formControl)("cvcFormlyAttributes",c.field)("cvcPlaceholder",c.props.placeholder)("cvcEntityName",c.props.entityName)("cvcResults",e.lcZ(1,11,c.result$))("cvcOptions",e.lcZ(2,13,c.selectOption$))("cvcShowError",c.showError)("cvcLoading",e.lcZ(3,15,c.isLoading$)),e.xp6(4),e.Q6J("ngrxLet",c.onSearch$)}},dependencies:[E.sg,E.O5,I.eJ,At.SY,de.ZU,Ue,Tt.J,I.fM,P.A],changeDetection:0});const cc={types:[{name:"gene-select",wrappers:["form-field"],component:Di},{name:"gene-multi-select",wrappers:["form-field"],component:Di,defaultOptions:{props:{label:"Genes",isMultiSelect:!0}}}]};class us{}us.\u0275fac=function(d){return new(d||us)},us.\u0275mod=e.oAB({type:us}),us.\u0275inj=e.cJS({imports:[E.ez,t.UX,I._N,I.pP,g.X0.forChild(cc),xn.L,Yn.sL,Ze.LV,_t.PV,Ae.o7,At.cg,s.U5,rt.ic,de.ZJ,Yt.X,lt,jn,xt.s,Zt.x]});const Pl=["optionTemplates"];function $i(f,d){if(1&f&&e._UZ(0,"cvc-attribute-tag",4),2&f){const c=e.oxw().$implicit;e.Q6J("cvcAttrValue",c)}}function lc(f,d){1&f&&(e.ynx(0),e.YNc(1,$i,1,1,"ng-template",null,3,e.W1O),e.BQk())}function Xs(f,d){if(1&f){const c=e.EpF();e.TgZ(0,"div",5)(1,"cvc-attribute-tag",6),e.NdJ("cvcOnClose",function(re){e.CHM(c);const ht=e.oxw();return e.KtG(ht.onTagClose$.next(re))}),e.qZA()()}if(2&f){const c=d.$implicit,y=e.oxw();e.xp6(1),e.Q6J("cvcAttrValue",c.nzValue)("cvcContext",y.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",y.props.isMultiSelect?"default":"closeable")}}const Vu={COMBINATION:"Therapies specified were used as part of a combination therapy approach",SEQUENTIAL:"Therapies specified were used at separate timepoints in the same treatment plan",SUBSTITUTES:"Therapies specified are often considered to be of the same family, or behave similarly in a treatment setting"},uc=jt($t(),pt());class ea extends uc{constructor(d){super(),this.cdr=d,this.defaultOptions={props:{label:"Therapy Interaction",placeholder:"Select Therapy Interaction",requireMultipleTherapies:!0,requireMultipleTherapiesPromptFn:()=>"A single associated therapy does not have an Interaction type",tooltip:"Characterizes the interaction of a multi-therapy treatment",extraType:"prompt"}},this.interactionEnum$=new it.X([]),this.placeholder$=new it.X(void 0)}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEnumSelectField({optionEnum$:this.interactionEnum$,optionTemplate$:this.optionTemplate$,changeDetectorRef:this.cdr})}configureStateConnections(){if(!this.state)return console.error(`${this.field.id} requires a form state to populate its options, none was found.`),void this.placeholder$.next("ERROR: Form state not found");this.placeholder$.next(this.props.placeholder),this.state.enums.interaction$?(this.state.enums.interaction$.pipe((0,Pe.t)(this)).subscribe(d=>{this.interactionEnum$.next(d)}),this.optionTemplates||console.error(`${this.field.id} could not find its optionTemplates QueryList to populate its select options, so simple text labels will be displayed.`),this.optionTemplate$=this.optionTemplates?.changes.pipe((0,yt.U)(d=>d.map(c=>c))),this.onTherapies$=this.state.fields.therapyIds$,this.optionTemplates||console.warn(`${this.field.id} could not find state's fields.therapyIds$ to handle its required & disabled states.`),this.onTherapies$.pipe((0,Pe.t)(this)).subscribe(d=>{d&&0!=d.length?1==d.length?(this.props.description="A single associated therapy does not have an Interaction type",this.props.disabled=!0,this.props.required=!1,void 0!==this.formControl.value&&this.formControl.setValue(void 0)):(this.props.description="Select an Interaction Type",this.props.disabled=!1,this.props.required=!0):(this.props.disabled=!0,this.props.required=!1,this.props.description="Interaction type is not applicable when no therapies are selected.",void 0!==this.formControl.value&&this.formControl.setValue(void 0)),this.cdr.markForCheck()}),this.onValueChange$.pipe((0,Pe.t)(this)).subscribe(d=>{d?(this.props.description=Vu[d],this.props.extraType="description"):this.props.extraType="prompt"})):console.error(`${this.field.id} could not find form state's interaction$ to populate select.`)}}ea.\u0275fac=function(d){return new(d||ea)(e.Y36(e.sBO))},ea.\u0275cmp=e.Xpm({type:ea,selectors:[["cvc-interaction-select"]],viewQuery:function(d,c){if(1&d&&e.Gf(Pl,5,e.Rgc),2&d){let y;e.iGM(y=e.CRH())&&(c.optionTemplates=y)}},features:[e.qOj],decls:7,vars:15,consts:[[3,"cvcFormControl","cvcFormlyAttributes","cvcSelectMode","cvcPlaceholder","cvcCustomTemplate","cvcOptions","cvcShowError","cvcDisabled"],[4,"ngFor","ngForOf"],["selectedTemplate",""],["optionTemplates",""],[3,"cvcAttrValue"],[1,"ant-select-selection-item-content"],[3,"cvcAttrValue","cvcContext","cvcMode","cvcOnClose"]],template:function(d,c){if(1&d&&(e._UZ(0,"cvc-enum-select",0),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.YNc(3,lc,3,0,"ng-container",1),e.ALo(4,"ngrxPush"),e.YNc(5,Xs,2,3,"ng-template",null,2,e.W1O)),2&d){const y=e.MAs(6);e.Q6J("cvcFormControl",c.formControl)("cvcFormlyAttributes",c.field)("cvcSelectMode",c.props.isMultiSelect?"multiple":"default")("cvcPlaceholder",e.lcZ(1,9,c.placeholder$))("cvcCustomTemplate",y)("cvcOptions",e.lcZ(2,11,c.selectOption$))("cvcShowError",c.showError)("cvcDisabled",c.props.disabled),e.xp6(3),e.Q6J("ngForOf",e.lcZ(4,13,c.interactionEnum$))}},dependencies:[E.sg,We,Qe,I.fM]});const Vs={types:[{name:"interaction-select",wrappers:["form-field"],component:ea}]};class zr{}zr.\u0275fac=function(d){return new(d||zr)},zr.\u0275mod=e.oAB({type:zr}),zr.\u0275inj=e.cJS({imports:[E.ez,t.UX,I._N,I.pP,g.X0.forChild(Vs),lt,oe,Ye]});var ds=a(6204);const Da=["optionTemplates"];function ta(f,d){if(1&f&&(e.TgZ(0,"nz-tag")(1,"strong"),e._uU(2),e.qZA(),e._uU(3),e.ALo(4,"enumTooltip"),e.qZA()),2&f){const c=e.oxw().$implicit;e.xp6(2),e.Oqu(c),e.xp6(1),e.hij(" - ",e.xi3(4,2,c,"evidenceLevelBrief")," ")}}function el(f,d){1&f&&(e.ynx(0),e.YNc(1,ta,5,5,"ng-template",null,3,e.W1O),e.BQk())}function ps(f,d){if(1&f){const c=e.EpF();e.TgZ(0,"nz-tag",7),e.NdJ("nzOnClose",function(re){e.CHM(c);const ht=e.oxw(2);return e.KtG(ht.onTagClose$.next(re))}),e.TgZ(1,"strong"),e._uU(2),e.qZA(),e._uU(3),e.ALo(4,"enumTooltip"),e.qZA()}if(2&f){const c=e.oxw().$implicit;e.xp6(2),e.Oqu(c.nzValue),e.xp6(1),e.hij(" - ",e.xi3(4,2,c.nzValue,"evidenceLevelBrief")," ")}}function _1(f,d){if(1&f&&(e.ynx(0),e._uU(1),e.ALo(2,"enumTooltip"),e.BQk()),2&f){const c=e.oxw().$implicit;e.xp6(1),e.hij(" ",e.xi3(2,1,c.nzValue,"evidenceLevelBrief")," ")}}function tl(f,d){if(1&f&&(e.TgZ(0,"div",4),e.YNc(1,ps,5,5,"nz-tag",5),e.YNc(2,_1,3,4,"ng-container",6),e.qZA()),2&f){const c=e.oxw();e.xp6(1),e.Q6J("ngIf",!c.props.isMultiSelect),e.xp6(1),e.Q6J("ngIf",c.props.isMultiSelect)}}const Yo=new Map([[bn.Sx0.A,"Evidence shows consensus association in human medicine"],[bn.Sx0.B,"Evidence supports association using clinical trial or other primary patient data"],[bn.Sx0.C,"Evidence supports association using individual case reports from clinical journals"],[bn.Sx0.D,"Evidence supports association using in vivo or in vitro models"],[bn.Sx0.E,"Evidential association is inferential or indirect"]]),Il=jt($t(),pt());class Oa extends Il{constructor(d){super(),this.cdr=d,this.defaultOptions={props:{label:"Evidence Level",required:!1,isMultiSelect:!1,placeholder:"Select Evidence Level"}},this.levelEnum$=new it.X([])}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEnumSelectField({optionEnum$:this.levelEnum$,optionTemplate$:this.optionTemplate$,changeDetectorRef:this.cdr})}configureStateConnections(){this.props.tooltip="Type of study performed to produce the evidence statement",this.placeholder$=new it.X(this.props.placeholder),this.levelEnum$.next((0,Ai.o6)(bn.Sx0).map(d=>d)),this.optionTemplates||console.error(`${this.field.id} could not find its optionTemplates QueryList to populate its select options, so simple text labels will be displayed.`),this.optionTemplate$=this.optionTemplates?.changes.pipe((0,yt.U)(d=>d.map(c=>c))),this.onValueChange$.pipe((0,Pe.t)(this)).subscribe(d=>{this.props.description=d?Yo.get(d):void 0})}}Oa.\u0275fac=function(d){return new(d||Oa)(e.Y36(e.sBO))},Oa.\u0275cmp=e.Xpm({type:Oa,selectors:[["cvc-level-select"]],viewQuery:function(d,c){if(1&d&&e.Gf(Da,5,e.Rgc),2&d){let y;e.iGM(y=e.CRH())&&(c.optionTemplates=y)}},features:[e.qOj],decls:7,vars:15,consts:[[3,"cvcFormControl","cvcFormlyAttributes","cvcSelectMode","cvcPlaceholder","cvcCustomTemplate","cvcOptions","cvcShowError","cvcDisabled"],[4,"ngFor","ngForOf"],["selectedTemplate",""],["optionTemplates",""],[1,"ant-select-selection-item-content"],["nzMode","closeable",3,"nzOnClose",4,"ngIf"],[4,"ngIf"],["nzMode","closeable",3,"nzOnClose"]],template:function(d,c){if(1&d&&(e._UZ(0,"cvc-enum-select",0),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.YNc(3,el,3,0,"ng-container",1),e.ALo(4,"ngrxPush"),e.YNc(5,tl,3,2,"ng-template",null,2,e.W1O)),2&d){const y=e.MAs(6);e.Q6J("cvcFormControl",c.formControl)("cvcFormlyAttributes",c.field)("cvcSelectMode",c.props.isMultiSelect?"multiple":"default")("cvcPlaceholder",e.lcZ(1,9,c.placeholder$))("cvcCustomTemplate",y)("cvcOptions",e.lcZ(2,11,c.selectOption$))("cvcShowError",c.showError)("cvcDisabled",c.props.disabled),e.xp6(3),e.Q6J("ngForOf",e.lcZ(4,13,c.levelEnum$))}},dependencies:[E.sg,E.O5,Yt.j,We,I.fM,ds.v]});const nl={types:[{name:"level-select",wrappers:["form-field"],component:Oa},{name:"level-multi-select",wrappers:["form-field"],component:Oa,defaultOptions:{props:{label:"Levels",isMultiSelect:!0}}}]};class dc{}dc.\u0275fac=function(d){return new(d||dc)},dc.\u0275mod=e.oAB({type:dc}),dc.\u0275inj=e.cJS({imports:[E.ez,t.UX,I._N,I.pP,g.X0.forChild(nl),Yt.X,xt.s,lt,oe]});var pc,na=a(4383);let Oi=((pc=class{constructor(d){this.el=d,this.domChange=new e.vpe,this.changes=new MutationObserver(c=>{(0,di.D)(c).pipe((0,yt.U)(y=>{const re=y.target;return"class"===y.attributeName?{type:"class",change:re.classList.value,key:`${y.attributeName}:${re.classList.value}`}:"disabled"===y.attributeName?{type:"disabled",change:re.disabled,key:`${y.attributeName}:${re.disabled}`}:"hidden"===y.attributeName?{type:"hidden",change:re.hidden,key:`${y.attributeName}:${re.hidden}`}:{type:y.attributeName,change:"unknown change type",key:`${y.attributeName}:unknown-change-type`}}),(0,R.g)("key"),(0,Pe.t)(this)).subscribe(y=>{this.domChange.emit(y)})}),this.changes.observe(this.el.nativeElement,{attributeFilter:["class","disabled","hidden"],attributes:!0,childList:!1,subtree:!1})}ngAfterViewInit(){this.initialClass=this.el.nativeElement.classList.value}ngOnDestroy(){this.changes.disconnect()}}).\u0275fac=function(d){return new(d||pc)(e.Y36(e.SBq))},pc.\u0275dir=e.lG2({type:pc,selectors:[["button","cvcOrgSubmitButton",""]],outputs:{domChange:"domChange"}}),pc);Oi=(0,Te.gn)([(0,Pe.c)()],Oi);var Tr,oa=a(9350);function su(f,d){if(1&f&&(e.TgZ(0,"button",3),e._uU(1),e.qZA()),2&f){const c=e.oxw();e.Q6J("disabled",!c.form.valid),e.xp6(1),e.hij(" ",c.props.submitLabel," ")}}function ui(f,d){1&f&&e.GkF(0)}function ol(f,d){if(1&f&&(e.ynx(0),e.YNc(1,ui,1,0,"ng-container",7),e.BQk()),2&f){e.oxw(2);const c=e.MAs(2);e.xp6(1),e.Q6J("ngTemplateOutlet",c)}}function Gr(f,d){1&f&&e.GkF(0)}function A(f,d){if(1&f&&(e.ynx(0),e._UZ(1,"nz-avatar",11),e.BQk()),2&f){const c=d.ngrxLet;e.xp6(1),e.Q6J("nzSrc",c.profileImagePath)("nzSize",16)("nzShape","square")}}function B(f,d){if(1&f&&(e.ynx(0),e.TgZ(1,"nz-button-group"),e.YNc(2,Gr,1,0,"ng-container",7),e.TgZ(3,"button",8),e.ALo(4,"ngrxPush"),e.ALo(5,"ngrxPush"),e.ALo(6,"ngrxPush"),e.TgZ(7,"span"),e._uU(8,"for"),e.qZA(),e.YNc(9,A,2,3,"ng-container",9),e._UZ(10,"i",10),e.qZA()(),e.BQk()),2&f){e.oxw();const c=e.MAs(4),y=e.oxw(),re=e.MAs(2);e.xp6(2),e.Q6J("ngTemplateOutlet",re),e.xp6(1),e.Q6J("ngClass",e.lcZ(4,6,y.buttonClass$))("hidden",e.lcZ(5,8,y.isHidden$))("disabled",e.lcZ(6,10,y.isDisabled$))("nzDropdownMenu",c),e.xp6(6),e.Q6J("ngrxLet",y.mostRecentOrg$)}}function S(f,d){if(1&f){const c=e.EpF();e.TgZ(0,"li",12),e.NdJ("click",function(){const ht=e.CHM(c).$implicit,It=e.oxw(2);return e.KtG(It.menuSelection$.next(ht.id))}),e._UZ(1,"nz-avatar",11),e._uU(2),e.qZA()}if(2&f){const c=d.$implicit;e.xp6(1),e.Q6J("nzSrc",null==c?null:c.profileImagePath)("nzSize",10)("nzShape","square"),e.xp6(1),e.hij(" ",c.name," ")}}function ie(f,d){if(1&f&&(e.ynx(0),e.YNc(1,ol,2,1,"ng-container",2),e.YNc(2,B,11,12,"ng-container",2),e.TgZ(3,"nz-dropdown-menu",null,4)(5,"ul",5),e.YNc(6,S,3,4,"li",6),e.qZA()(),e.BQk()),2&f){const c=d.ngIf;e.xp6(1),e.Q6J("ngIf",c.length<=1),e.xp6(1),e.Q6J("ngIf",c.length>1),e.xp6(4),e.Q6J("ngForOf",c)}}let De=((Tr=class extends g.fS{constructor(d,c,y){super(),this.viewerService=d,this.cdr=c,this.apollo=y,this.menuSelection$=new Je.x,this.baseButtonClass="org-dropdown-btn",this.defaultOptions={props:{submitLabel:"Submit"}},this.viewer$=this.viewerService.viewer$,this.organizations$=this.viewer$.pipe((0,Ut.j)("organizations")),this.mostRecentOrg$=this.viewer$.pipe((0,Ut.j)("mostRecentOrg")),this.isDisabled$=new Je.x,this.isHidden$=new Je.x,this.buttonClass$=new it.X(this.baseButtonClass),this.subscriptions=[]}ngOnInit(){this.menuSelection$.pipe((0,tt.M)(this.viewer$)).subscribe(([re,ht])=>{const It={id:`User:${ht.id}`,fragment:ci.Ps`
            fragment UserMostRecentOrgId on User {
              mostRecentOrganizationId
            }
          `,data:{mostRecentOrganizationId:re}};this.apollo.client.writeFragment(It)}),this.formUpdate$=new it.X(this.form.status);const d=this.form.statusChanges.subscribe(re=>this.formUpdate$.next(re)),c=this.formUpdate$.subscribe(re=>this.cdr.detectChanges()),y=this.mostRecentOrg$.pipe((0,Ut.j)("id"),(0,Ge.h)(Qn.ep)).subscribe(re=>{this.formControl.setValue(re)});this.subscriptions=this.subscriptions.concat([d,c,y])}ngAfterViewInit(){if(this.button&&this.button.domChange){const d=this.button.domChange.subscribe(c=>{"class"===c.type&&"string"==typeof c.change?this.buttonClass$.next(`${this.baseButtonClass} ${c.change}`):"disabled"===c.type&&"boolean"==typeof c.change?this.isDisabled$.next(c.change):"hidden"===c.type&&"boolean"==typeof c.change&&this.isHidden$.next(c.change)});this.subscriptions.push(d)}}}).\u0275fac=function(d){return new(d||Tr)(e.Y36(oa.a),e.Y36(e.sBO),e.Y36(ci._M))},Tr.\u0275cmp=e.Xpm({type:Tr,selectors:[["cvc-org-submit-button"]],viewQuery:function(d,c){if(1&d&&e.Gf(Oi,5),2&d){let y;e.iGM(y=e.CRH())&&(c.button=y.first)}},features:[e.qOj],decls:5,vars:5,consts:[["type","hidden",3,"formControl","formlyAttributes"],["submitButton",""],[4,"ngIf"],["cvcOrgSubmitButton","","type","submit","nz-button","","nzType","primary",3,"disabled","nzDanger"],["orgMenu","nzDropdownMenu"],["nz-menu",""],["nz-menu-item","",3,"click",4,"ngFor","ngForOf"],[4,"ngTemplateOutlet"],["type","button","nz-button","","nz-dropdown","","nzTrigger","click",3,"ngClass","hidden","disabled","nzDropdownMenu"],[4,"ngrxLet"],["nz-icon","","nzType","down"],[3,"nzSrc","nzSize","nzShape"],["nz-menu-item","",3,"click"]],template:function(d,c){1&d&&(e._UZ(0,"input",0),e.YNc(1,su,2,2,"ng-template",null,1,e.W1O),e.YNc(3,ie,7,3,"ng-container",2),e.ALo(4,"ngrxPush")),2&d&&(e.Q6J("formControl",c.formControl)("formlyAttributes",c.field),e.xp6(3),e.Q6J("ngIf",e.lcZ(4,3,c.organizations$)))},dependencies:[E.mk,E.sg,E.O5,E.tP,t.Fj,t.JJ,t.oH,I.eJ,g.JD,_t.Ls,na.Dz,Yn.ix,Yn.fY,pn.w,ln.dQ,Jo.wO,Jo.r9,Ii.cm,Ii.RR,Ii.wA,Oi,I.fM],styles:["[_nghost-%COMP%]{display:inline-block}[_nghost-%COMP%]     .ant-btn-dangerous.ant-btn-primary:first-child:not(:last-child){border-right-color:#ff4d4f}[_nghost-%COMP%]     .ant-btn-dangerous.ant-btn-primary:hover, [_nghost-%COMP%]     .ant-btn-dangerous.ant-btn-primary:focus{border-right-color:#fd7978}.org-dropdown-btn[_ngcontent-%COMP%]   nz-avatar[_ngcontent-%COMP%]{margin:-2px 6px 0;border:1px solid rgba(255,255,255,.3);background-color:#ffffffe6}.org-dropdown-btn.ant-btn-dangerous[_ngcontent-%COMP%]:last-child:not(:first-child), .org-dropdown-btn[_ngcontent-%COMP%]   .ant-btn-dangerous[_ngcontent-%COMP%] + .ant-btn-dangerous[_ngcontent-%COMP%]{border-left-color:#fd7978}"],changeDetection:0}),Tr);De=(0,Te.gn)([(0,Pe.c)({arrayName:"subscriptions"})],De);const et={types:[{name:"org-submit-button",component:De}]};class ct{}ct.\u0275fac=function(d){return new(d||ct)},ct.\u0275mod=e.oAB({type:ct}),ct.\u0275inj=e.cJS({imports:[E.ez,t.UX,I._N,I.pP,g.X0.forChild(et),_t.PV,na.Rt,Yn.sL,Ii.b1]});const Jt=["optionTemplates"];function yn(f,d){if(1&f&&e._UZ(0,"cvc-attribute-tag",4),2&f){const c=e.oxw().$implicit;e.Q6J("cvcAttrValue",c)}}function Jn(f,d){1&f&&(e.ynx(0),e.YNc(1,yn,1,1,"ng-template",null,3,e.W1O),e.BQk())}function $n(f,d){if(1&f){const c=e.EpF();e.TgZ(0,"div",5)(1,"cvc-attribute-tag",6),e.NdJ("cvcOnClose",function(re){e.CHM(c);const ht=e.oxw();return e.KtG(ht.onTagClose$.next(re))}),e.qZA()()}if(2&f){const c=d.$implicit,y=e.oxw();e.xp6(1),e.Q6J("cvcAttrValue",c.nzValue)("cvcContext",y.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",y.props.isMultiSelect?"default":"closeable")}}const Fo=new Map([[bn.huM.Somatic,"Variant is a mutation, found only in tumor cells, having arisen in a specific tissue (non-germ cell), and is not expected to be inherited or passed to offspring."],[bn.huM.RareGermline,"Variant is found in every cell (not restricted to tumor/diseased cells) and is thought to exist in less than 1% of the population relevant to this evidence item."],[bn.huM.CommonGermline,"Variant is found in every cell (not restricted to tumor/diseased cells) and is thought to exist in at least 1% of the population relevant to this evidence item."],[bn.huM.Unknown,"The variant origin is uncertain based on the available evidence."],[bn.huM.Na,"The variant type (e.g., expression) is not compatible (or easily classified) with the CIViC concept of variant origin."],[bn.huM.Mixed," Variants in the corresponding Molecular Profile have heterogeneous origins."]]),gi=jt($t(),pt());class ki extends gi{constructor(d){super(),this.cdr=d,this.defaultOptions={props:{label:"Variant Origin",required:!1,isMultiSelect:!1,placeholder:"Select Variant Origin",tooltip:"Identifies whether the variant is inherited (germline mutation) or acquired (somatic mutation) in the context of the study"}},this.originEnum$=new it.X([])}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEnumSelectField({optionEnum$:this.originEnum$,optionTemplate$:this.optionTemplate$,changeDetectorRef:this.cdr}),this.originEnum$.next(Array.from(Fo.keys()))}configureStateConnections(){this.optionTemplates||console.error(`${this.field.id} could not find its optionTemplates QueryList to populate its select options, so simple text labels will be displayed.`),this.optionTemplate$=this.optionTemplates?.changes.pipe((0,yt.U)(d=>d.map(c=>c))),this.onValueChange$.pipe((0,Pe.t)(this)).subscribe(d=>{this.props.description=d?Fo.get(d):void 0})}}ki.\u0275fac=function(d){return new(d||ki)(e.Y36(e.sBO))},ki.\u0275cmp=e.Xpm({type:ki,selectors:[["cvc-origin-select"]],viewQuery:function(d,c){if(1&d&&e.Gf(Jt,5,e.Rgc),2&d){let y;e.iGM(y=e.CRH())&&(c.optionTemplates=y)}},features:[e.qOj],decls:6,vars:13,consts:[[3,"cvcFormControl","cvcFormlyAttributes","cvcSelectMode","cvcPlaceholder","cvcCustomTemplate","cvcOptions","cvcShowError","cvcDisabled"],[4,"ngFor","ngForOf"],["selectedTemplate",""],["optionTemplates",""],[3,"cvcAttrValue"],[1,"ant-select-selection-item-content"],[3,"cvcAttrValue","cvcContext","cvcMode","cvcOnClose"]],template:function(d,c){if(1&d&&(e._UZ(0,"cvc-enum-select",0),e.ALo(1,"ngrxPush"),e.YNc(2,Jn,3,0,"ng-container",1),e.ALo(3,"ngrxPush"),e.YNc(4,$n,2,3,"ng-template",null,2,e.W1O)),2&d){const y=e.MAs(5);e.Q6J("cvcFormControl",c.formControl)("cvcFormlyAttributes",c.field)("cvcSelectMode",c.props.isMultiSelect?"multiple":"default")("cvcPlaceholder",c.props.placeholder)("cvcCustomTemplate",y)("cvcOptions",e.lcZ(1,9,c.selectOption$))("cvcShowError",c.showError)("cvcDisabled",c.props.disabled),e.xp6(2),e.Q6J("ngForOf",e.lcZ(3,11,c.originEnum$))}},dependencies:[E.sg,We,Qe,I.fM]});const Mr={types:[{name:"origin-select",wrappers:["form-field"],component:ki},{name:"origin-multi-select",wrappers:["form-field"],component:ki,defaultOptions:{props:{label:"Variant Origins",isMultiSelect:!0}}}]};class Ui{}Ui.\u0275fac=function(d){return new(d||Ui)},Ui.\u0275mod=e.oAB({type:Ui}),Ui.\u0275inj=e.cJS({imports:[E.ez,t.UX,I._N,I.pP,g.X0.forChild(Mr),lt,oe,Ye]});const Qr=["optionTemplates"];function ia(f,d){if(1&f&&(e.ynx(0),e.TgZ(1,"em"),e._UZ(2,"span",8),e.ALo(3,"highlightTypeahead"),e.qZA(),e.BQk()),2&f){const c=e.oxw(2).$implicit,y=e.oxw().ngrxLet;e.xp6(2),e.Q6J("innerHtml",e.xi3(3,1,c.hpoId,y),e.oJD)}}function Al(f,d){if(1&f&&(e._UZ(0,"cvc-entity-tag",5),e.TgZ(1,"span",6),e.YNc(2,ia,4,4,"ng-container",7),e.qZA()),2&f){const c=e.oxw().$implicit,y=e.oxw().ngrxLet;e.Q6J("cvcDisableLink",!0)("cvcCacheId",c.__typename+":"+c.id)("cvcEmphasize",y),e.xp6(2),e.Q6J("ngIf",c.hpoId)}}function ra(f,d){1&f&&(e.ynx(0),e.YNc(1,Al,3,4,"ng-template",null,4,e.W1O),e.BQk())}function fd(f,d){if(1&f&&(e.ynx(0),e.YNc(1,ra,3,0,"ng-container",3),e.ALo(2,"ngrxPush"),e.BQk()),2&f){const c=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,c.result$))}}function wa(f,d){if(1&f){const c=e.EpF();e.TgZ(0,"div",9)(1,"cvc-entity-tag",10),e.NdJ("cvcOnClose",function(){const ht=e.CHM(c).$implicit,It=e.oxw();return e.KtG(It.onTagClose$.next(ht.nzValue))}),e.qZA()()}if(2&f){const c=d.$implicit,y=e.oxw();e.xp6(1),e.Q6J("cvcCacheId","Phenotype:"+c.nzValue)("cvcContext",y.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",y.props.isMultiSelect?"default":"closeable")}}const au=jt($t(),yo());class Wr extends au{constructor(d,c,y){super(),this.taq=d,this.tq=c,this.changeDetectorRef=y,this.defaultOptions={props:{entityName:{singular:"Phenotype",plural:"Phenotypes"},isMultiSelect:!1,requireType:!0,tooltip:"Phenotype or phenotype combination which interacts with the specified variant",placeholders:{default:"Search Phenotypes",multiDefault:"Select Phenotype(s) (max MULTI_MAX)",requireTypePrompt:"Select an ENTITY_NAME Type to search Phenotypes"},description:'Please provide any <a href="https://hpo.jax.org/app/browse/term/HP:0000118" target="_blank">HPO phenotypes</a>, including <a href="https://hpo.jax.org/app/browse/term/HP:0003674" target="_blank">age of onset</a>.',extraType:"description"}},this.placeholder$=new it.X(this.defaultOptions.props.placeholders.default)}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEntitySelectField({typeaheadQuery:this.taq,typeaheadParam$:void 0,tagQuery:this.tq,getTypeaheadVarsFn:this.getTypeaheadVarsFn,getTypeaheadResultsFn:this.getTypeaheadResultsFn,getTagQueryVarsFn:this.getTagQueryVarsFn,getTagQueryResultsFn:this.getTagQueryResultsFn,getSelectedItemOptionFn:this.getSelectedItemOptionFn,getSelectOptionsFn:this.getSelectOptionsFn,changeDetectorRef:this.changeDetectorRef,selectOpen$:this.selectOpen$,selectComponent:this.selectComponent}),this.configurePlaceholders()}configureStateConnections(){}configurePlaceholders(){}getTypeaheadVarsFn(d){return{name:d}}getTypeaheadResultsFn(d){return d.data.phenotypeTypeahead}getTagQueryVarsFn(d){return{id:d}}getTagQueryResultsFn(d){return d.data.phenotype}getSelectedItemOptionFn(d){return{value:d.id,label:d.name}}getSelectOptionsFn(d,c){return d.map((y,re)=>({label:c.get(re)||y.name,value:y.id}))}}Wr.\u0275fac=function(d){return new(d||Wr)(e.Y36(bn.zOE),e.Y36(bn.z_7),e.Y36(e.sBO))},Wr.\u0275cmp=e.Xpm({type:Wr,selectors:[["cvc-phenotype-select"]],viewQuery:function(d,c){if(1&d&&e.Gf(Qr,5,e.Rgc),2&d){let y;e.iGM(y=e.CRH())&&(c.optionTemplates=y)}},features:[e.qOj],decls:9,vars:22,consts:[[3,"cvcSelectMode","cvcCustomTemplate","cvcFormControl","cvcFormlyAttributes","cvcEntityName","cvcPlaceholder","cvcResults","cvcOptions","cvcShowError","cvcDisabled","cvcLoading","cvcOnSearch","cvcOnOpenChange","cvcOnModelChange"],[4,"ngrxLet"],["selectedTemplate",""],[4,"ngFor","ngForOf"],["optionTemplates",""],[3,"cvcDisableLink","cvcCacheId","cvcEmphasize"],["nz-typography","","nzType","secondary"],[4,"ngIf"],["nz-typography","","nzType","secondary",3,"innerHtml"],[1,"ant-select-selection-item-content"],[3,"cvcCacheId","cvcContext","cvcMode","cvcOnClose"]],template:function(d,c){if(1&d&&(e.TgZ(0,"cvc-entity-select",0),e.NdJ("cvcOnSearch",function(re){return c.onSearch$.next(re)})("cvcOnOpenChange",function(re){return c.onOpenChange$.next(re)})("cvcOnModelChange",function(re){return c.props.change&&c.props.change(c.field,re)}),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.ALo(3,"ngrxPush"),e.ALo(4,"ngrxPush"),e.ALo(5,"ngrxPush"),e.qZA(),e.YNc(6,fd,3,3,"ng-container",1),e.YNc(7,wa,2,3,"ng-template",null,2,e.W1O)),2&d){const y=e.MAs(8);e.Q6J("cvcSelectMode",c.props.isMultiSelect?"multiple":"default")("cvcCustomTemplate",y)("cvcFormControl",c.formControl)("cvcFormlyAttributes",c.field)("cvcEntityName",c.props.entityName)("cvcPlaceholder",e.lcZ(1,12,c.placeholder$))("cvcResults",e.lcZ(2,14,c.result$))("cvcOptions",e.lcZ(3,16,c.selectOption$))("cvcShowError",c.showError)("cvcDisabled",c.onRequiresPhenotype$&&!e.lcZ(4,18,c.onRequiresPhenotype$))("cvcLoading",e.lcZ(5,20,c.isLoading$)),e.xp6(6),e.Q6J("ngrxLet",c.onSearch$)}},dependencies:[E.sg,E.O5,I.eJ,de.ZU,Ue,Tt.J,I.fM,P.A],changeDetection:0});const il={types:[{name:"phenotype-select",wrappers:["form-field"],component:Wr,defaultOptions:{props:{label:"Phenotype"}}},{name:"phenotype-multi-select",wrappers:["form-field"],component:Wr,defaultOptions:{props:{isMultiSelect:!0,label:"Phenotypes"}}}]};class br{}br.\u0275fac=function(d){return new(d||br)},br.\u0275mod=e.oAB({type:br}),br.\u0275inj=e.cJS({imports:[E.ez,t.UX,I._N,I.pP,g.X0.forChild(il),xn.L,Yn.sL,Ze.LV,co.$6,Bn.Qp,_t.PV,Ae.o7,w.Jb,At.cg,nn.zf,s.U5,rt.ic,de.ZJ,Yt.X,lt,jn,xt.s,Zt.x]});var hc=a(9521),fc=a(4968),rl=a(2722),Ss=a(2536),Fl=a(3303),hs=a(3187),y1=a(445);const sl=["nz-rate-item",""];function al(f,d){}function xs(f,d){}function Bu(f,d){1&f&&e._UZ(0,"span",4)}const mc=function(f){return{$implicit:f}},C1=["ulElement"];function Nl(f,d){if(1&f){const c=e.EpF();e.TgZ(0,"li",3)(1,"div",4),e.NdJ("itemHover",function(re){const It=e.CHM(c).index,Mn=e.oxw();return e.KtG(Mn.onItemHover(It,re))})("itemClick",function(re){const It=e.CHM(c).index,Mn=e.oxw();return e.KtG(Mn.onItemClick(It,re))}),e.qZA()()}if(2&f){const c=d.index,y=e.oxw();e.Q6J("ngClass",y.starStyleArray[c]||"")("nzTooltipTitle",y.nzTooltips[c]),e.xp6(1),e.Q6J("allowHalf",y.nzAllowHalf)("character",y.nzCharacter)("index",c)}}let Rp=(()=>{class f{constructor(){this.index=0,this.allowHalf=!1,this.itemHover=new e.vpe,this.itemClick=new e.vpe}hoverRate(c){this.itemHover.next(c&&this.allowHalf)}clickRate(c){this.itemClick.next(c&&this.allowHalf)}}return f.\u0275fac=function(c){return new(c||f)},f.\u0275cmp=e.Xpm({type:f,selectors:[["","nz-rate-item",""]],inputs:{character:"character",index:"index",allowHalf:"allowHalf"},outputs:{itemHover:"itemHover",itemClick:"itemClick"},exportAs:["nzRateItem"],attrs:sl,decls:6,vars:8,consts:[[1,"ant-rate-star-second",3,"mouseover","click"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"ant-rate-star-first",3,"mouseover","click"],["defaultCharacter",""],["nz-icon","","nzType","star","nzTheme","fill"]],template:function(c,y){if(1&c&&(e.TgZ(0,"div",0),e.NdJ("mouseover",function(ht){return y.hoverRate(!1),ht.stopPropagation()})("click",function(){return y.clickRate(!1)}),e.YNc(1,al,0,0,"ng-template",1),e.qZA(),e.TgZ(2,"div",2),e.NdJ("mouseover",function(ht){return y.hoverRate(!0),ht.stopPropagation()})("click",function(){return y.clickRate(!0)}),e.YNc(3,xs,0,0,"ng-template",1),e.qZA(),e.YNc(4,Bu,1,0,"ng-template",null,3,e.W1O)),2&c){const re=e.MAs(5);e.xp6(1),e.Q6J("ngTemplateOutlet",y.character||re)("ngTemplateOutletContext",e.VKq(4,mc,y.index)),e.xp6(2),e.Q6J("ngTemplateOutlet",y.character||re)("ngTemplateOutletContext",e.VKq(6,mc,y.index))}},dependencies:[E.tP,_t.Ls],encapsulation:2,changeDetection:0}),(0,Te.gn)([(0,hs.yF)()],f.prototype,"allowHalf",void 0),f})(),Ll=(()=>{class f{constructor(c,y,re,ht,It,Mn){this.nzConfigService=c,this.ngZone=y,this.renderer=re,this.cdr=ht,this.directionality=It,this.destroy$=Mn,this._nzModuleName="rate",this.nzAllowClear=!0,this.nzAllowHalf=!1,this.nzDisabled=!1,this.nzAutoFocus=!1,this.nzCount=5,this.nzTooltips=[],this.nzOnBlur=new e.vpe,this.nzOnFocus=new e.vpe,this.nzOnHoverChange=new e.vpe,this.nzOnKeyDown=new e.vpe,this.classMap={},this.starArray=[],this.starStyleArray=[],this.dir="ltr",this.hasHalf=!1,this.hoverValue=0,this.isFocused=!1,this._value=0,this.isNzDisableFirstChange=!0,this.onChange=()=>null,this.onTouched=()=>null}get nzValue(){return this._value}set nzValue(c){this._value!==c&&(this._value=c,this.hasHalf=!Number.isInteger(c),this.hoverValue=Math.ceil(c))}ngOnChanges(c){const{nzAutoFocus:y,nzCount:re,nzValue:ht}=c;if(y&&!y.isFirstChange()){const It=this.ulElement.nativeElement;this.nzAutoFocus&&!this.nzDisabled?this.renderer.setAttribute(It,"autofocus","autofocus"):this.renderer.removeAttribute(It,"autofocus")}re&&this.updateStarArray(),ht&&this.updateStarStyle()}ngOnInit(){this.nzConfigService.getConfigChangeEventForComponent("rate").pipe((0,rl.R)(this.destroy$)).subscribe(()=>this.cdr.markForCheck()),this.directionality.change.pipe((0,rl.R)(this.destroy$)).subscribe(c=>{this.dir=c,this.cdr.detectChanges()}),this.dir=this.directionality.value,this.ngZone.runOutsideAngular(()=>{(0,fc.R)(this.ulElement.nativeElement,"focus").pipe((0,rl.R)(this.destroy$)).subscribe(c=>{this.isFocused=!0,this.nzOnFocus.observers.length&&this.ngZone.run(()=>this.nzOnFocus.emit(c))}),(0,fc.R)(this.ulElement.nativeElement,"blur").pipe((0,rl.R)(this.destroy$)).subscribe(c=>{this.isFocused=!1,this.nzOnBlur.observers.length&&this.ngZone.run(()=>this.nzOnBlur.emit(c))})})}onItemClick(c,y){if(this.nzDisabled)return;this.hoverValue=c+1;const re=y?c+.5:c+1;this.nzValue===re?this.nzAllowClear&&(this.nzValue=0,this.onChange(this.nzValue)):(this.nzValue=re,this.onChange(this.nzValue)),this.updateStarStyle()}onItemHover(c,y){this.nzDisabled||this.hoverValue===c+1&&y===this.hasHalf||(this.hoverValue=c+1,this.hasHalf=y,this.nzOnHoverChange.emit(this.hoverValue),this.updateStarStyle())}onRateLeave(){this.hasHalf=!Number.isInteger(this.nzValue),this.hoverValue=Math.ceil(this.nzValue),this.updateStarStyle()}focus(){this.ulElement.nativeElement.focus()}blur(){this.ulElement.nativeElement.blur()}onKeyDown(c){const y=this.nzValue;c.keyCode===hc.SV&&this.nzValue<this.nzCount?this.nzValue+=this.nzAllowHalf?.5:1:c.keyCode===hc.oh&&this.nzValue>0&&(this.nzValue-=this.nzAllowHalf?.5:1),y!==this.nzValue&&(this.onChange(this.nzValue),this.nzOnKeyDown.emit(c),this.updateStarStyle(),this.cdr.markForCheck())}updateStarArray(){this.starArray=Array(this.nzCount).fill(0).map((c,y)=>y),this.updateStarStyle()}updateStarStyle(){this.starStyleArray=this.starArray.map(c=>{const y="ant-rate-star",re=c+1;return{[`${y}-full`]:re<this.hoverValue||!this.hasHalf&&re===this.hoverValue,[`${y}-half`]:this.hasHalf&&re===this.hoverValue,[`${y}-active`]:this.hasHalf&&re===this.hoverValue,[`${y}-zero`]:re>this.hoverValue,[`${y}-focused`]:this.hasHalf&&re===this.hoverValue&&this.isFocused}})}writeValue(c){this.nzValue=c||0,this.updateStarArray(),this.cdr.markForCheck()}setDisabledState(c){this.nzDisabled=this.isNzDisableFirstChange&&this.nzDisabled||c,this.isNzDisableFirstChange=!1,this.cdr.markForCheck()}registerOnChange(c){this.onChange=c}registerOnTouched(c){this.onTouched=c}}return f.\u0275fac=function(c){return new(c||f)(e.Y36(Ss.jY),e.Y36(e.R0b),e.Y36(e.Qsj),e.Y36(e.sBO),e.Y36(y1.Is,8),e.Y36(Fl.kn))},f.\u0275cmp=e.Xpm({type:f,selectors:[["nz-rate"]],viewQuery:function(c,y){if(1&c&&e.Gf(C1,7),2&c){let re;e.iGM(re=e.CRH())&&(y.ulElement=re.first)}},inputs:{nzAllowClear:"nzAllowClear",nzAllowHalf:"nzAllowHalf",nzDisabled:"nzDisabled",nzAutoFocus:"nzAutoFocus",nzCharacter:"nzCharacter",nzCount:"nzCount",nzTooltips:"nzTooltips"},outputs:{nzOnBlur:"nzOnBlur",nzOnFocus:"nzOnFocus",nzOnHoverChange:"nzOnHoverChange",nzOnKeyDown:"nzOnKeyDown"},exportAs:["nzRate"],features:[e._Bn([Fl.kn,{provide:t.JU,useExisting:(0,e.Gpc)(()=>f),multi:!0}]),e.TTD],decls:3,vars:7,consts:[[1,"ant-rate",3,"ngClass","tabindex","keydown","mouseleave"],["ulElement",""],["class","ant-rate-star","nz-tooltip","",3,"ngClass","nzTooltipTitle",4,"ngFor","ngForOf"],["nz-tooltip","",1,"ant-rate-star",3,"ngClass","nzTooltipTitle"],["nz-rate-item","",3,"allowHalf","character","index","itemHover","itemClick"]],template:function(c,y){1&c&&(e.TgZ(0,"ul",0,1),e.NdJ("keydown",function(ht){return y.onKeyDown(ht),ht.preventDefault()})("mouseleave",function(ht){return y.onRateLeave(),ht.stopPropagation()}),e.YNc(2,Nl,2,5,"li",2),e.qZA()),2&c&&(e.ekj("ant-rate-disabled",y.nzDisabled)("ant-rate-rtl","rtl"===y.dir),e.Q6J("ngClass",y.classMap)("tabindex",y.nzDisabled?-1:1),e.xp6(2),e.Q6J("ngForOf",y.starArray))},dependencies:[E.mk,E.sg,At.SY,Rp],encapsulation:2,changeDetection:0}),(0,Te.gn)([(0,Ss.oS)(),(0,hs.yF)()],f.prototype,"nzAllowClear",void 0),(0,Te.gn)([(0,Ss.oS)(),(0,hs.yF)()],f.prototype,"nzAllowHalf",void 0),(0,Te.gn)([(0,hs.yF)()],f.prototype,"nzDisabled",void 0),(0,Te.gn)([(0,hs.yF)()],f.prototype,"nzAutoFocus",void 0),(0,Te.gn)([(0,hs.Rn)()],f.prototype,"nzCount",void 0),f})(),kl=(()=>{class f{}return f.\u0275fac=function(c){return new(c||f)},f.\u0275mod=e.oAB({type:f}),f.\u0275inj=e.cJS({imports:[y1.vT,E.ez,_t.PV,At.cg]}),f})();const sa={1:"Poor - Claim is not supported well by experimental evidence. Results are not reproducible, or have very small sample size. No follow-up is done to validate novel claims.",2:"Adequate - Evidence is not well supported by experimental data, and little follow-up data is available. Experiments may lack proper controls, have small sample size, or are not statistically convincing.",3:"Average - Evidence is convincing, but not supported by a breadth of experiments. May be smaller scale projects, or novel results without many follow-up experiments. Discrepancies from expected results are explained and not concerning.",4:"Strong - Well supported evidence. Experiments are well controlled, and results are convincing. Any discrepancies from expected results are well-explained and not concerning.",5:"Excellent - Solid, well supported evidence from a lab or journal with respected academic standing. Experiments are well controlled, and results are clean and reproducible across multiple replicates. Evidence confirmed using separate methods."},ll=jt($t(),pt());class Pa extends ll{constructor(){super(),this.defaultOptions={props:{label:"Evidence Rating",count:5,tooltip:"A representation of the curator's confidence in the quality of the summarized evidence",hoverText:[]}},this.rating$=new it.X(void 0)}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.formControl.value&&this.rating$.next(this.formControl.value),Object.entries(sa).map(([d,c])=>{this.props.hoverText.push(c)}),this.rating$.pipe((0,Pe.t)(this)).subscribe(d=>{this.formControl.setValue(d)}),this.onValueChange$.pipe((0,Pe.t)(this)).subscribe(d=>{this.props.description=d?sa[d]:void 0})}configureStateConnections(){}}Pa.\u0275fac=function(d){return new(d||Pa)},Pa.\u0275cmp=e.Xpm({type:Pa,selectors:[["cvc-rating"]],features:[e.qOj],decls:2,vars:5,consts:[["type","hidden",3,"formControl","formlyAttributes"],[3,"ngModel","nzCount","nzTooltips","ngModelChange"]],template:function(d,c){1&d&&(e._UZ(0,"input",0),e.TgZ(1,"nz-rate",1),e.NdJ("ngModelChange",function(re){return c.rating$.next(re)}),e.qZA()),2&d&&(e.Q6J("formControl",c.formControl)("formlyAttributes",c.field),e.xp6(1),e.Q6J("ngModel",c.formControl.value)("nzCount",c.props.count)("nzTooltips",c.props.hoverText))},dependencies:[t.Fj,t.JJ,t.oH,t.On,g.JD,Ll],styles:["[_nghost-%COMP%]     nz-rate .anticon{font-size:160%}"],changeDetection:0});const Ia={types:[{name:"rating",wrappers:["form-field"],component:Pa}]};class ul{}ul.\u0275fac=function(d){return new(d||ul)},ul.\u0275mod=e.oAB({type:ul}),ul.\u0275inj=e.cJS({imports:[E.ez,t.UX,I._N,I.pP,t.u5,g.X0.forChild(Ia),kl,xt.s,lt,oe]});const Aa=["optionTemplates"];function md(f,d){if(1&f&&e._UZ(0,"cvc-attribute-tag",4),2&f){const c=e.oxw().$implicit;e.Q6J("cvcAttrValue",c)}}function dl(f,d){1&f&&(e.ynx(0),e.YNc(1,md,1,1,"ng-template",null,3,e.W1O),e.BQk())}function z1(f,d){if(1&f){const c=e.EpF();e.TgZ(0,"div",5)(1,"cvc-attribute-tag",6),e.NdJ("cvcOnClose",function(re){e.CHM(c);const ht=e.oxw();return e.KtG(ht.onTagClose$.next(re))}),e.qZA()()}if(2&f){const c=d.$implicit,y=e.oxw();e.xp6(1),e.Q6J("cvcAttrValue",c.nzValue)("cvcContext",y.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",y.props.isMultiSelect?"default":"closeable")}}const Fa={Evidence:{PREDICTIVE:{SENSITIVITYRESPONSE:"Associated with a clinical or preclinical response to treatment",RESISTANCE:"Associated with clinical or preclinical resistance to treatment",ADVERSE_RESPONSE:"Associated with an adverse response to drug treatment",REDUCED_SENSITIVITY:"Response to treatment is lower than seen in other treatment contexts",NA:"Clinical Significance is not applicable."},DIAGNOSTIC:{POSITIVE:"Associated with diagnosis of disease or subtype",NEGATIVE:"Associated with lack of disease or subtype"},PROGNOSTIC:{BETTER_OUTCOME:"Demonstrates better than expected clinical outcome",POOR_OUTCOME:"Demonstrates worse than expected clinical outcome",NA:"Clinical Significance is not applicable."},PREDISPOSING:{PREDISPOSITION:"Germline variant has predisposing potential for cancer, and may meet select ACMG/AMP criteria supporting pathogenic or benign classification.",PROTECTIVENESS:"Germline variant has properties that protect individuals from acquiring cancer."},FUNCTIONAL:{GAIN_OF_FUNCTION:"Sequence variant confers an increase in normal gene function",LOSS_OF_FUNCTION:"Sequence variant confers a diminished or abolished function",UNALTERED_FUNCTION:"Gene product of sequence variant is unchanged",NEOMORPHIC:"Sequence variant creates a novel function",DOMINANT_NEGATIVE:"Sequence variant abrogates function of wildtype allele gene product",UNKNOWN:"Sequence variant that cannot be precisely defined by the other listed categories"},ONCOGENIC:{ONCOGENICITY:"Somatic variant has oncogenic potential for driving cancer, and may meet select ClinGen/CGC/VICC criteria supporting pathogenic or benign classification.",PROTECTIVENESS:"Somatic variant has a protective role against cancer."}},Assertion:{PREDICTIVE:{SENSITIVITYRESPONSE:"Associated with a clinical or preclinical response to treatment",RESISTANCE:"Associated with clinical or preclinical resistance to treatment",ADVERSE_RESPONSE:"Associated with an adverse response to drug treatment",REDUCED_SENSITIVITY:"Response to treatment is lower than seen in other treatment contexts",NA:"Clinical Significance is not applicable."},DIAGNOSTIC:{POSITIVE:"Associated with diagnosis of disease or subtype",NEGATIVE:"Associated with lack of disease or subtype"},PROGNOSTIC:{BETTER_OUTCOME:"Demonstrates better than expected clinical outcome",POOR_OUTCOME:"Demonstrates worse than expected clinical outcome",NA:"Clinical Significance is not applicable."},PREDISPOSING:{PATHOGENIC:"Very strong evidence the variant is pathogenic",LIKELY_PATHOGENIC:"Strong evidence (>90% certainty) the variant is pathogenic.",BENIGN:"Very strong evidence the variant is benign",LIKELY_BENIGN:"Not expected to have a major effect on disease",UNCERTAIN_SIGNIFICANCE:"Does not meet the ACMG/AMP criteria for pathogenic/benign, or the evidence is conflicting"},ONCOGENIC:{ONCOGENIC:"Very strong evidence the variant is oncogenic.",LIKELY_ONCOGENIC:"Strong evidence the variant is oncogenic.",BENIGN:"Very strong evidence the variant does not have oncogenic properties.",LIKELY_BENIGN:"Strong evidence the variant does not have oncogenic properties.",UNCERTAIN_SIGNIFICANCE:"Does not meet guideline criteria for oncogenic/benign, or the evidence is conflicting."}}},gd=jt($t(),pt());class Bs extends gd{constructor(d){super(),this.cdr=d,this.defaultOptions={props:{label:"Significance",required:!0,isMultiSelect:!1,placeholder:"Select Significance",placeholderFn:c=>`Select ${c?c+" ":""} Significance`,requireTypePromptFn:c=>`Select ${c} Type to select its Significance`,tooltip:"Clinical impact of the variant",formMode:"add"}},this.significanceEnum$=new it.X([])}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEnumSelectField({optionEnum$:this.significanceEnum$,optionTemplate$:this.optionTemplate$,changeDetectorRef:this.cdr})}configureStateConnections(){if(!this.state)return console.error(`${this.field.id} requires a form state to populate its options, none was found.`),void(this.placeholder$=new it.X("ERROR: Form state not found"));if(this.placeholder$=new it.X(this.props.placeholderFn(this.state.entityName)),!this.state.enums.significance$)return void console.error(`${this.field.id} could not find form state's enums.significance$ to populate select.`);this.state.enums.significance$.pipe((0,Pe.t)(this)).subscribe(c=>{this.significanceEnum$.next(c)}),this.optionTemplates||console.warn(`${this.field.id} could not find its optionTemplates QueryList to populate its select options, so simple text labels will be displayed.`),this.optionTemplate$=this.optionTemplates?.changes.pipe((0,yt.U)(c=>c.map(y=>y)));const d=`${this.state.entityName.toLowerCase()}Type$`;this.state.fields[d]?(this.onTypeSelect$=this.state.fields[d],this.onTypeSelect$.pipe((0,Rt.T)("add"===this.props.formMode?0:1),(0,Pe.t)(this)).subscribe(c=>{c?(this.props.disabled=!1,this.props.description=void 0,this.props.extraType=void 0,this.placeholder$.next(this.props.placeholderFn(this.state.entityName))):(this.props.disabled=!0,this.props.description=this.props.requireTypePromptFn(this.state.entityName),this.props.extraType="prompt"),this.formControl.value&&this.formControl.setValue(void 0)}),this.onValueChange$.pipe((0,tt.M)(this.onTypeSelect$),(0,Pe.t)(this)).subscribe(([c,y])=>{!y||!c||!this.state||(this.props.description=void 0,this.props.extraType="description",this.props.description=Fa[this.state.entityName][y][c])})):console.error(`${this.field.id} could not find form state's ${d} to populate Significance options.`)}}Bs.\u0275fac=function(d){return new(d||Bs)(e.Y36(e.sBO))},Bs.\u0275cmp=e.Xpm({type:Bs,selectors:[["cvc-significance-select"]],viewQuery:function(d,c){if(1&d&&e.Gf(Aa,5,e.Rgc),2&d){let y;e.iGM(y=e.CRH())&&(c.optionTemplates=y)}},features:[e.qOj],decls:7,vars:15,consts:[[3,"cvcFormControl","cvcFormlyAttributes","cvcSelectMode","cvcPlaceholder","cvcCustomTemplate","cvcOptions","cvcShowError","cvcDisabled"],[4,"ngFor","ngForOf"],["selectedTemplate",""],["optionTemplates",""],[3,"cvcAttrValue"],[1,"ant-select-selection-item-content"],[3,"cvcAttrValue","cvcContext","cvcMode","cvcOnClose"]],template:function(d,c){if(1&d&&(e._UZ(0,"cvc-enum-select",0),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.YNc(3,dl,3,0,"ng-container",1),e.ALo(4,"ngrxPush"),e.YNc(5,z1,2,3,"ng-template",null,2,e.W1O)),2&d){const y=e.MAs(6);e.Q6J("cvcFormControl",c.formControl)("cvcFormlyAttributes",c.field)("cvcSelectMode",c.props.isMultiSelect?"multiple":"default")("cvcPlaceholder",e.lcZ(1,9,c.placeholder$))("cvcCustomTemplate",y)("cvcOptions",e.lcZ(2,11,c.selectOption$))("cvcShowError",c.showError)("cvcDisabled",c.props.disabled),e.xp6(3),e.Q6J("ngForOf",e.lcZ(4,13,c.significanceEnum$))}},dependencies:[E.sg,We,Qe,I.fM]});const cu={types:[{name:"significance-select",wrappers:["form-field"],component:Bs}]};class Ds{}Ds.\u0275fac=function(d){return new(d||Ds)},Ds.\u0275mod=e.oAB({type:Ds}),Ds.\u0275inj=e.cJS({imports:[E.ez,t.UX,I._N,I.pP,g.X0.forChild(cu),lt,oe,Ye]});var gc,vd=a(2577),pl=a(8521),Rl=a(6530),hl=a(8675);function vc(f,d){1&f&&e._UZ(0,"span",9),2&f&&e.Q6J("nzType","loading")}function lu(f,d){if(1&f&&(e.ynx(0),e.YNc(1,vc,1,1,"span",8),e._uU(2,"\xa0 "),e.TgZ(3,"span"),e._uU(4),e.qZA(),e.BQk()),2&f){const c=d.ngrxLet;e.xp6(1),e.Q6J("ngIf",c.showSpinner),e.xp6(3),e.Oqu(c.message)}}function Na(f,d){if(1&f&&e._uU(0),2&f){const c=e.oxw();e.Oqu(c.successMessage)}}function T1(f,d){1&f&&(e.TgZ(0,"button",10),e._uU(1," Add Source "),e.qZA()),2&f&&e.Q6J("disabled",null===d.ngrxLet.citation)}const La=function(){return[0,0]};let Zr=((gc=class{constructor(d,c,y,re,ht){this.checkCitation=d,this.addRemoteCitation=c,this.errors=y,this.apollo=re,this.cdr=ht,this.cvcOnCreate=new e.vpe,this.messageOptions={empty:(It,Mn)=>`No ${Mn} Source with a citation ID of "${It}"`,searchCitation:(It,Mn)=>`Searching ${Mn} for a citation ID of "${It}"`,foundCitation:(It,Mn,kn)=>`Found ${Mn} citation "${kn}" with ID ${It}`,noCitation:(It,Mn)=>`No ${Mn} Source with a citation ID of "${It}" was found`},this.form=new t.nJ({}),this.model={citationId:"",sourceType:bn.yic.Pubmed},this.formLayout="horizontal",this.options={formState:{formLayout:this.formLayout}},this.onSubmit$=new Je.x,this.citationId$=new it.X(""),this.sourceType$=new it.X(bn.yic.Pubmed),this.addSourceStubMutator=new Nt.U(this.errors),this.fields=[{key:"citationId",props:{hidden:!0}},{key:"sourceType",props:{hidden:!0}}],this.onSubmit$.pipe((0,Pe.t)(this)).subscribe(It=>{console.log("disease-quick-add form model submitted.",It),this.submitSourceStub()})}ngOnInit(){void 0!==this.model.citationId&&void 0!==this.model.sourceType?(this.queryRef=this.checkCitation.watch({citationId:this.model.citationId,sourceType:this.model.sourceType}),this.checkResult$=this.queryRef.valueChanges.pipe((0,yt.U)(d=>({loading:d.loading,citation:d.data?d.data.remoteCitation:null,model:this.model})),(0,Nn.b)(d=>{this.citationString=d.citation?d.citation:void 0})),this.citationId$.pipe((0,Pe.t)(this)).subscribe(d=>{this.model.sourceType&&this.queryRef.refetch({citationId:d,sourceType:this.model.sourceType})}),this.formMessageDisplay$=this.checkResult$.pipe((0,yt.U)(d=>{const c=d.loading,y=d.citation,re=d.model;return c?{message:this.messageOptions.searchCitation(re.citationId,re.sourceType),showSpinner:!0}:c||null===y?c||null!==y?{message:"UNHANDLED MESSAGE STATE",showSpinner:!1}:{message:this.messageOptions.noCitation(re.citationId,re.sourceType),showSpinner:!1}:{message:this.messageOptions.foundCitation(re.citationId,(0,Rl.c)(re.sourceType),y),showSpinner:!1}}),(0,hl.O)({message:this.messageOptions.searchCitation(this.model.citationId,this.model.sourceType),showSpinner:!0}))):console.error("source-quick-add provided invalid initial model")}submitSourceStub(){void 0!==this.model.citationId&&void 0!==this.model.sourceType&&(this.mutationState=this.addSourceStubMutator.mutate(this.addRemoteCitation,{input:{citationId:this.model.citationId,sourceType:this.model.sourceType}},{},d=>{if(console.log("source-quick-add submit data callback",d),d.addRemoteCitation){this.successMessage=`New Source "${this.citationString}" added.`;const c=d.addRemoteCitation.newSource,y=(0,Rl.c)(this.model.sourceType),re=this.citationString?this.citationString:"NO CITATION",ht={query:ci.Ps`
                query WriteLocalSource($id: Int!) {
                  source(id: $id) {
                    id
                    name
                    link
                    citation
                    citationId
                    sourceType
                  }
                }
              `,data:{source:{__typename:"Source",id:c.id,name:`${y}: ${re}`,link:`sources/${c.id}`,citation:re,citationId:this.model.citationId,sourceType:this.model.sourceType}},variables:{id:c.id}};this.apollo.client.cache.writeQuery(ht)||console.error("source-quick-add.form Source writeQuery failed.",ht),setTimeout(()=>{const Mn={id:`Source:${c.id}`,fragment:ci.Ps`
                  fragment LinkableSource on Source {
                    id
                    name
                    link
                  }
                `},kn=this.apollo.client.cache.readFragment(Mn);null!==kn&&this.cvcOnCreate.next(kn.id)},1e3)}}))}ngOnChanges(d){if(d.cvcSourceType){const c=d.cvcSourceType.currentValue;this.sourceType$.next(c),this.model={...this.model,sourceType:c}}if(d.cvcCitationId){const c=d.cvcCitationId.currentValue;this.citationId$.next(c),this.model={...this.model,citationId:c}}}}).\u0275fac=function(d){return new(d||gc)(e.Y36(bn.qgP),e.Y36(bn.LHC),e.Y36(Gt.Y),e.Y36(ci._M),e.Y36(e.sBO))},gc.\u0275cmp=e.Xpm({type:gc,selectors:[["cvc-source-quick-add"]],inputs:{cvcSourceType:"cvcSourceType",cvcCitationId:"cvcCitationId"},outputs:{cvcOnCreate:"cvcOnCreate"},features:[e.TTD],decls:10,vars:11,consts:[[4,"ngrxLet"],["entityType","Source",3,"mutationState","successMessage"],["success",""],["nz-form","","nzLayout","horizontal",3,"formGroup","ngSubmit"],[3,"nzGutter"],["nzSpan","24"],[3,"form","fields","model","options","modelChange"],["nz-button","","nzType","primary","nzBlock","",3,"disabled",4,"ngrxLet"],["nz-icon","",3,"nzType",4,"ngIf"],["nz-icon","",3,"nzType"],["nz-button","","nzType","primary","nzBlock","",3,"disabled"]],template:function(d,c){if(1&d&&(e.YNc(0,lu,5,2,"ng-container",0),e.TgZ(1,"cvc-form-submission-status-display",1),e.YNc(2,Na,1,1,"ng-template",null,2,e.W1O),e.TgZ(4,"form",3),e.NdJ("ngSubmit",function(){return c.onSubmit$.next(c.model)}),e.TgZ(5,"nz-row",4)(6,"nz-col",5)(7,"formly-form",6),e.NdJ("modelChange",function(re){return c.model=re}),e.qZA()(),e.TgZ(8,"nz-col",5),e.YNc(9,T1,2,1,"button",7),e.qZA()()()()),2&d){const y=e.MAs(3);e.Q6J("ngrxLet",c.formMessageDisplay$),e.xp6(1),e.Q6J("mutationState",c.mutationState)("successMessage",y),e.xp6(3),e.Q6J("formGroup",c.form),e.xp6(1),e.Q6J("nzGutter",e.DdM(10,La)),e.xp6(2),e.Q6J("form",c.form)("fields",c.fields)("model",c.model)("options",c.options),e.xp6(2),e.Q6J("ngrxLet",c.checkResult$)}},dependencies:[E.O5,t._Y,t.JL,t.sg,I.eJ,g.T7,Yn.ix,pn.w,ln.dQ,_t.Ls,w.t3,w.SK,s.Lr,gn.F],changeDetection:0}),gc);Zr=(0,Te.gn)([(0,Pe.c)()],Zr);const _c=["optionTemplates"];function M1(f,d){if(1&f){const c=e.EpF();e.TgZ(0,"nz-col",9)(1,"nz-select",10),e.NdJ("ngModelChange",function(re){e.CHM(c);const ht=e.oxw();return e.KtG(ht.sourceType$.next(re))}),e.ALo(2,"ngrxPush"),e._UZ(3,"nz-option",11)(4,"nz-option",12)(5,"nz-option",13),e.qZA()()}if(2&f){const c=e.oxw();e.xp6(1),e.Q6J("nzOptionHeightPx",28)("ngModel",e.lcZ(2,2,c.sourceType$))}}function yc(f,d){1&f&&(e.TgZ(0,"div"),e._uU(1,"PMID:"),e.qZA())}function Hu(f,d){1&f&&(e.TgZ(0,"div"),e._uU(1,"ID:"),e.qZA())}function Hs(f,d){1&f&&(e.TgZ(0,"div"),e._uU(1,"doi.org/"),e.qZA())}function b1(f,d){if(1&f&&(e.TgZ(0,"nz-col",14),e.ynx(1,15),e.ALo(2,"ngrxPush"),e.YNc(3,yc,2,0,"div",16),e.YNc(4,Hu,2,0,"div",16),e.YNc(5,Hs,2,0,"div",16),e.BQk(),e.qZA()),2&f){const c=e.oxw();e.xp6(1),e.Q6J("ngSwitch",e.lcZ(2,4,c.sourceType$)),e.xp6(2),e.Q6J("ngSwitchCase","PUBMED"),e.xp6(1),e.Q6J("ngSwitchCase","ASCO"),e.xp6(1),e.Q6J("ngSwitchCase","ASH")}}function Cc(f,d){if(1&f&&(e._UZ(0,"cvc-entity-tag",19),e.TgZ(1,"span",20),e._uU(2," ID: "),e._UZ(3,"span",21),e.ALo(4,"highlightTypeahead"),e.qZA()),2&f){const c=e.oxw().$implicit,y=e.oxw().ngrxLet;e.Q6J("cvcDisableLink",!0)("cvcCacheId",c.__typename+":"+c.id)("cvcEmphasize",y),e.xp6(3),e.Q6J("innerHtml",e.xi3(4,4,c.citationId.toString(),y),e.oJD)}}function E1(f,d){1&f&&(e.ynx(0),e.YNc(1,Cc,5,7,"ng-template",null,18,e.W1O),e.BQk())}function ka(f,d){if(1&f&&(e.ynx(0),e.YNc(1,E1,3,0,"ng-container",17),e.ALo(2,"ngrxPush"),e.BQk()),2&f){const c=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,c.result$))}}function S1(f,d){if(1&f){const c=e.EpF();e.TgZ(0,"div",22)(1,"cvc-entity-tag",23),e.NdJ("cvcOnClose",function(){const ht=e.CHM(c).$implicit,It=e.oxw();return e.KtG(It.onTagClose$.next(ht.nzValue))}),e.qZA()()}if(2&f){const c=d.$implicit,y=e.oxw();e.xp6(1),e.Q6J("cvcCacheId","Source:"+c.nzValue)("cvcContext",y.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",y.props.isMultiSelect?"default":"closeable")}}function zc(f,d){if(1&f){const c=e.EpF();e.TgZ(0,"cvc-source-quick-add",24),e.NdJ("cvcOnCreate",function(re){e.CHM(c);const ht=e.oxw();return e.KtG(ht.onPopulate$.next(re))}),e.qZA()}if(2&f){const c=d.model;e.Q6J("cvcCitationId",c.citationId)("cvcSourceType",c.sourceType)}}function cr(f,d){1&f&&(e.TgZ(0,"button",25),e._uU(1,"Add a New Source"),e.qZA())}const aa=function(){return[6,6]},ca=jt($t(),yo());class bi extends ca{constructor(d,c,y){super(),this.taq=d,this.tq=c,this.changeDetectorRef=y,this.onModel$=new Lo.y,this.defaultSourceType=bn.yic.Pubmed,this.defaultOptions={props:{entityName:{singular:"Source",plural:"Sources"},isMultiSelect:!1,minSearchStrLength:2,tooltip:"PubMed, ASCO, or ASH Abstract Source(s) that support items, statements or descriptions.",placeholders:{default:"Search PubMed, ASCO, and ASH Sources",contextualFn:re=>`Search ${re} Sources`},extraType:"prompt"}},this.sourceType$=new it.X(this.defaultSourceType),this.sourceTypeName$=new it.X((0,Rl.c)(this.defaultSourceType)),this.placeholder$=new it.X(this.defaultOptions.props.placeholders.contextualFn((0,Rl.c)(this.defaultSourceType))),this.showTypeSelect$=new Lo.y}ngAfterViewInit(){this.configureBaseField(),this.configureEntitySelectField({typeaheadQuery:this.taq,typeaheadParam$:this.sourceType$,typeaheadParamName$:this.sourceTypeName$||void 0,tagQuery:this.tq,getTypeaheadVarsFn:this.getTypeaheadVarsFn,getTypeaheadResultsFn:this.getTypeaheadResultsFn,getTagQueryVarsFn:this.getTagQueryVarsFn,getTagQueryResultsFn:this.getTagQueryResultsFn,getSelectedItemOptionFn:this.getSelectedItemOptionFn,getSelectOptionsFn:this.getSelectOptionsFn,changeDetectorRef:this.changeDetectorRef,selectOpen$:this.selectOpen$,selectComponent:this.selectComponent,minSearchStrLength:this.field.props.minSearchStrLength}),this.showTypeSelect$=this.onValueChange$.pipe((0,yt.U)(d=>!!(!d||d&&Array.isArray(d)))),this.sourceType$.pipe((0,Pe.t)(this)).subscribe(d=>{const c=(0,Rl.c)(d);this.sourceTypeName$.next(c),this.placeholder$.next(this.props.placeholders.contextualFn(c))}),this.onModel$=(0,io.a)([this.sourceType$,this.onSearch$]).pipe((0,yt.U)(([d,c])=>({citationId:c,sourceType:d})))}getTypeaheadVarsFn(d,c=bn.yic.Pubmed){return{partialCitationId:d,sourceType:c}}getTypeaheadResultsFn(d){return d.data.sourceTypeahead}getTagQueryVarsFn(d){return{id:d}}getTagQueryResultsFn(d){return d.data.source}getSelectedItemOptionFn(d){return{value:d.id,label:d.name}}getSelectOptionsFn(d,c){return d.map((y,re)=>({label:c.get(re)||y.name,value:y.id}))}}bi.\u0275fac=function(d){return new(d||bi)(e.Y36(bn.aC3),e.Y36(bn.BYO),e.Y36(e.sBO))},bi.\u0275cmp=e.Xpm({type:bi,selectors:[["cvc-source-select"]],viewQuery:function(d,c){if(1&d&&e.Gf(_c,5,e.Rgc),2&d){let y;e.iGM(y=e.CRH())&&(c.optionTemplates=y)}},features:[e.qOj],decls:21,vars:39,consts:[[3,"nzGutter"],["nzFlex","80px",4,"ngIf"],["nzFlex","60px","class","prefix",4,"ngIf"],["nzFlex","auto"],[3,"cvcMinSearchStrLength","cvcSelectMode","cvcCustomTemplate","cvcFormControl","cvcFormlyAttributes","cvcEntityName","cvcPlaceholder","cvcResults","cvcOptions","cvcParamName","cvcShowError","cvcDisabled","cvcLoading","cvcAddEntity","cvcAddEntityModel","cvcSelectOpen","cvcOnSearch","cvcOnModelChange"],[4,"ngrxLet"],["selectedTemplate",""],["addSource",""],["addSourceBtn",""],["nzFlex","80px"],["nzSize","default","nzBlock","",3,"nzOptionHeightPx","ngModel","ngModelChange"],["nzValue","PUBMED","nzLabel","PubMed"],["nzValue","ASCO","nzLabel","ASCO"],["nzValue","ASH","nzLabel","ASH"],["nzFlex","60px",1,"prefix"],[3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngFor","ngForOf"],["optionTemplates",""],[3,"cvcDisableLink","cvcCacheId","cvcEmphasize"],["nz-typography","","nzType","secondary"],["nz-typography","","nzType","secondary",3,"innerHtml"],[1,"ant-select-selection-item-content"],[3,"cvcCacheId","cvcContext","cvcMode","cvcOnClose"],[3,"cvcCitationId","cvcSourceType","cvcOnCreate"],["type","button"]],template:function(d,c){if(1&d&&(e.TgZ(0,"nz-row",0),e.YNc(1,M1,6,4,"nz-col",1),e.ALo(2,"ngrxPush"),e.YNc(3,b1,6,6,"nz-col",2),e.ALo(4,"ngrxPush"),e.TgZ(5,"nz-col",3)(6,"cvc-entity-select",4),e.NdJ("cvcOnSearch",function(re){return c.onSearch$.next(re)})("cvcOnModelChange",function(re){return c.props.change&&c.props.change(c.field,re)}),e.ALo(7,"ngrxPush"),e.ALo(8,"ngrxPush"),e.ALo(9,"ngrxPush"),e.ALo(10,"ngrxPush"),e.ALo(11,"ngrxPush"),e.ALo(12,"ngrxPush"),e.ALo(13,"ngrxPush"),e.qZA()()(),e.YNc(14,ka,3,3,"ng-container",5),e.YNc(15,S1,2,3,"ng-template",null,6,e.W1O),e.YNc(17,zc,1,2,"ng-template",null,7,e.W1O),e.YNc(19,cr,2,0,"ng-template",null,8,e.W1O)),2&d){const y=e.MAs(16),re=e.MAs(18);e.Q6J("nzGutter",e.DdM(38,aa)),e.xp6(1),e.Q6J("ngIf",e.lcZ(2,20,c.showTypeSelect$)),e.xp6(2),e.Q6J("ngIf",e.lcZ(4,22,c.showTypeSelect$)),e.xp6(3),e.Q6J("cvcMinSearchStrLength",c.props.minSearchStrLength)("cvcSelectMode",c.props.isMultiSelect?"multiple":"default")("cvcCustomTemplate",y)("cvcFormControl",c.formControl)("cvcFormlyAttributes",c.field)("cvcEntityName",c.props.entityName)("cvcPlaceholder",e.lcZ(7,24,c.placeholder$))("cvcResults",e.lcZ(8,26,c.result$))("cvcOptions",e.lcZ(9,28,c.selectOption$))("cvcParamName",e.lcZ(10,30,c.sourceTypeName$))("cvcShowError",c.showError)("cvcDisabled",c.props.disabled)("cvcLoading",e.lcZ(11,32,c.isLoading$))("cvcAddEntity",re)("cvcAddEntityModel",e.lcZ(12,34,c.onModel$))("cvcSelectOpen",e.lcZ(13,36,c.selectOpen$)),e.xp6(8),e.Q6J("ngrxLet",c.onSearch$)}},dependencies:[E.sg,E.O5,E.RF,E.n9,t.JJ,t.On,I.eJ,Ze.Ip,Ze.Vq,w.t3,w.SK,de.ZU,Ue,Tt.J,Zr,I.fM,P.A],styles:[".prefix[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{text-align:right;line-height:28px;color:#999}"],changeDetection:0});const Os={types:[{name:"source-select",wrappers:["form-field"],component:bi,defaultOptions:{props:{label:"Source"}}},{name:"source-multi-select",wrappers:["form-field"],component:bi,defaultOptions:{props:{label:"Sources",isMultiSelect:!0}}}]};class Ra{}function la(f){class d extends f{configureStringTagField(){this.onValueChange$?(this.tagLabel$=new Je.x,this.onValueChange$.pipe((0,Pe.t)(this)).subscribe(y=>{this.tagLabel$.next(y?y.toString():void 0)}),this.onTagClose$=new Je.x,this.onTagClose$.pipe((0,Pe.t)(this)).subscribe(y=>{this.formControl.setValue(void 0),this.tagLabel$.next(void 0)})):console.error(`${this.field.id} cannot find onValueChange$ Subject, ensure configureBaseField() has been called before configureDisplayStringTag in its AfterViewInit hook.`)}}return d.\u0275fac=function(){let c;return function(re){return(c||(c=e.n5z(d)))(re||d)}}(),d.\u0275prov=e.Yz7({token:d,factory:d.\u0275fac}),d}function D1(f,d){}function Va(f,d){if(1&f){const c=e.EpF();e.TgZ(0,"span",4)(1,"nz-tag",5),e.NdJ("nzOnClose",function(re){e.CHM(c);const ht=e.oxw();return e.KtG(ht.cvcOnClose.next(re))}),e.YNc(2,D1,0,0,"ng-template",6),e.qZA()()}if(2&f){const c=e.oxw(),y=e.MAs(4);e.xp6(1),e.Q6J("nzMode",c.cvcMode),e.xp6(1),e.Q6J("ngTemplateOutlet",y)}}function Yu(f,d){}function Ba(f,d){if(1&f){const c=e.EpF();e.TgZ(0,"span",7)(1,"nz-tag",5),e.NdJ("nzOnClose",function(re){e.CHM(c);const ht=e.oxw();return e.KtG(ht.cvcOnClose.next(re))}),e.YNc(2,Yu,0,0,"ng-template",6),e.qZA()()}if(2&f){e.oxw();const c=e.MAs(4);e.xp6(1),e.Q6J("nzMode","closeable"),e.xp6(1),e.Q6J("ngTemplateOutlet",c)}}function _d(f,d){}function Ha(f,d){if(1&f&&(e.TgZ(0,"span",8),e.YNc(1,_d,0,0,"ng-template",6),e.qZA()),2&f){e.oxw();const c=e.MAs(4);e.xp6(1),e.Q6J("ngTemplateOutlet",c)}}function O1(f,d){1&f&&e._UZ(0,"i",11)}function Tc(f,d){if(1&f&&(e.YNc(0,O1,1,0,"i",9),e._UZ(1,"span",10),e.ALo(2,"highlightTypeahead")),2&f){const c=e.oxw();e.Q6J("ngIf",!c.cvcLabel),e.xp6(1),e.Q6J("innerHtml",c.cvcLabel?e.xi3(2,2,c.cvcLabel,c.cvcEmphasize):"?STRING?",e.oJD)}}Ra.\u0275fac=function(d){return new(d||Ra)},Ra.\u0275mod=e.oAB({type:Ra}),Ra.\u0275inj=e.cJS({imports:[E.ez,t.u5,t.UX,I._N,I.pP,g.X0.forChild(Os),xn.L,Yn.sL,pl.aF,Ze.LV,co.$6,Bn.Qp,_t.PV,Ae.o7,w.Jb,At.cg,nn.zf,s.U5,rt.ic,de.ZJ,vd.S,Yt.X,Un.g,lt,jn,xt.s,Zt.x]});class Ys{constructor(){this.cvcMode="default",this.cvcContext="default",this.cvcOnClose=new e.vpe}}function ua(f,d){if(1&f){const c=e.EpF();e.TgZ(0,"cvc-string-tag",3),e.NdJ("cvcOnClose",function(){const ht=e.CHM(c).$implicit,It=e.oxw();return e.KtG(It.tagClosed(ht))}),e.qZA()}if(2&f){const c=d.$implicit;e.Q6J("cvcMode","closeable")("cvcLabel",c)}}Ys.\u0275fac=function(d){return new(d||Ys)},Ys.\u0275cmp=e.Xpm({type:Ys,selectors:[["cvc-string-tag"]],inputs:{cvcLabel:"cvcLabel",cvcEmphasize:"cvcEmphasize",cvcMode:"cvcMode",cvcContext:"cvcContext"},outputs:{cvcOnClose:"cvcOnClose"},decls:5,vars:3,consts:[["class","default",4,"ngIf"],["class","select-item",4,"ngIf"],["class","multi-select-item",4,"ngIf"],["tagContent",""],[1,"default"],[3,"nzMode","nzOnClose"],[3,"ngTemplateOutlet"],[1,"select-item"],[1,"multi-select-item"],["nz-icon","","nzType","question-circle","nzTheme","outline",4,"ngIf"],[3,"innerHtml"],["nz-icon","","nzType","question-circle","nzTheme","outline"]],template:function(d,c){1&d&&(e.YNc(0,Va,3,2,"span",0),e.YNc(1,Ba,3,2,"span",1),e.YNc(2,Ha,2,1,"span",2),e.YNc(3,Tc,3,5,"ng-template",null,3,e.W1O)),2&d&&(e.Q6J("ngIf","default"===c.cvcContext),e.xp6(1),e.Q6J("ngIf","select-item"===c.cvcContext),e.xp6(1),e.Q6J("ngIf","multi-select-item"===c.cvcContext))},dependencies:[E.O5,E.tP,_t.Ls,Yt.j,P.A]});const w1=jt($t(),la);class lr extends w1{constructor(d){super(),this.cdr=d,this.defaultOptions={modelOptions:{updateOn:"blur"},props:{label:"Enter value",placeholder:"Enter value and hit Return"}},this.tags$=new Je.x,this.values=new Set}onEnter(d){let c=d.target;c.value&&(this.values.add(c.value),c.value="");let y=Array.from(this.values);this.tags$.next(y),this.formControl.setValue(y)}tagClosed(d){this.values.delete(d);let c=Array.from(this.values);this.tags$.next(c),this.formControl.setValue(c),this.tags$.next(c)}ngAfterViewInit(){this.configureBaseField(),this.configureStringTagField(),this.formControl.value&&Array.isArray(this.formControl.value)&&(this.formControl.value.forEach(d=>this.values.add(d)),this.tags$.next(this.formControl.value),this.cdr.detectChanges())}}lr.\u0275fac=function(d){return new(d||lr)(e.Y36(e.sBO))},lr.\u0275cmp=e.Xpm({type:lr,selectors:[["cvc-tag-input"]],features:[e.qOj],decls:5,vars:6,consts:[[3,"cvcMode","cvcLabel","cvcOnClose",4,"ngFor","ngForOf"],["nz-input","",3,"placeholder","keydown.enter"],["hidden","","nz-input","",3,"formControl","formlyAttributes"],[3,"cvcMode","cvcLabel","cvcOnClose"]],template:function(d,c){1&d&&(e.TgZ(0,"div"),e.YNc(1,ua,1,2,"cvc-string-tag",0),e.ALo(2,"ngrxPush"),e.TgZ(3,"input",1),e.NdJ("keydown.enter",function(re){return c.onEnter(re)}),e.qZA()(),e._UZ(4,"input",2)),2&d&&(e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,4,c.tags$)),e.xp6(2),e.Q6J("placeholder",c.props.placeholder),e.xp6(1),e.Q6J("formControl",c.formControl)("formlyAttributes",c.field))},dependencies:[E.sg,t.Fj,t.JJ,t.oH,g.JD,Ae.Zp,Ys,I.fM],changeDetection:0});class ws{}ws.\u0275fac=function(d){return new(d||ws)},ws.\u0275mod=e.oAB({type:ws}),ws.\u0275inj=e.cJS({imports:[E.ez,_t.PV,Yt.X,xt.s]});const Mc={types:[{name:"tag-input",wrappers:["form-field"],component:lr},{name:"tag-multi-input",wrappers:["form-field"],component:lr,defaultOptions:{props:{isRepeatItem:!0}}}]};class da{}da.\u0275fac=function(d){return new(d||da)},da.\u0275mod=e.oAB({type:da}),da.\u0275inj=e.cJS({imports:[E.ez,t.UX,I._N,I.pP,g.X0.forChild(Mc),$e.F,Ae.o7,s.U5,ws]});const pa=jt($t());class Ya extends pa{constructor(){super(...arguments),this.defaultOptions={props:{label:"TEXTAREA!"}}}}Ya.\u0275fac=function(){let f;return function(c){return(f||(f=e.n5z(Ya)))(c||Ya)}}(),Ya.\u0275cmp=e.Xpm({type:Ya,selectors:[["formly-field-nz-textarea"]],features:[e.qOj],decls:1,vars:3,consts:[["nz-input","",3,"rows","formControl","formlyAttributes"]],template:function(d,c){1&d&&e._UZ(0,"textarea",0),2&d&&e.Q6J("rows",c.props.rows?c.props.rows:2)("formControl",c.formControl)("formlyAttributes",c.field)},dependencies:[t.Fj,t.JJ,t.oH,g.JD,Ae.Zp],encapsulation:2,changeDetection:0});const fs={types:[{name:"textarea",component:Ya,wrappers:["form-field"]}]};class ha{}var Jr;function P1(f,d){1&f&&e._UZ(0,"span",7)}function fa(f,d){1&f&&e._UZ(0,"span",8)}ha.\u0275fac=function(d){return new(d||ha)},ha.\u0275mod=e.oAB({type:ha}),ha.\u0275inj=e.cJS({imports:[E.ez,t.UX,g.X0.forChild(fs),Ae.o7,lt]});const I1=function(){return[0,0]},bc={name:void 0};let $u=((Jr=class{set cvcSearchString(d){d&&this.searchString$.next(d)}constructor(d,c){this.query=d,this.errors=c,this.cvcOnCreate=new e.vpe,this.model=bc,this.form=new t.nJ({}),this.options={},this.onSubmit$=new Je.x,this.searchString$=new it.X(void 0),this.queryMutator=new Nt.U(this.errors),this.isSubmitting$=new it.X(!1),this.submitSuccess$=new it.X(!1),this.submitError$=new it.X([]),this.addTherapyMutator=new Nt.U(this.errors),this.fields=[{key:"name",props:{hidden:!0,required:!0}}],this.searchString$.pipe((0,Pe.t)(this)).subscribe(y=>{this.model.name=y}),this.onSubmit$.pipe((0,Pe.t)(this)).subscribe(y=>{console.log("therapy-quick-add form model submitted.",y),this.submitTherapy(y)})}submitTherapy(d){if(!d.name)return void console.error("therapy-quick-add form submitTherapy requires model with valid name.");let c=this.addTherapyMutator.mutate(this.query,{name:d.name},{},y=>{console.log("therapy-quick-add submit data callback",y),y.addTherapy&&this.cvcOnCreate.next(y.addTherapy.therapy.id)});c.submitSuccess$.pipe((0,Pe.t)(this)).subscribe(y=>{console.log("therapy-quick-add submitSuccess$",y),this.submitSuccess$.next(y)}),c.submitError$.pipe((0,Pe.t)(this)).subscribe(y=>{console.log("therapy-quick-add submitError$",y),this.submitError$.next(y)}),c.isSubmitting$.pipe((0,Pe.t)(this)).subscribe(y=>{this.isSubmitting$.next(y)})}}).\u0275fac=function(d){return new(d||Jr)(e.Y36(bn.Y_K),e.Y36(Gt.Y))},Jr.\u0275cmp=e.Xpm({type:Jr,selectors:[["cvc-therapy-quick-add-form"]],inputs:{cvcSearchString:"cvcSearchString"},outputs:{cvcOnCreate:"cvcOnCreate"},decls:14,vars:17,consts:[[3,"formGroup","ngSubmit"],[3,"nzGutter"],["nzSpan","24"],[3,"form","fields","model","options","modelChange"],["nz-button","","nzType","primary","nzBlock","",3,"disabled"],["nz-icon","","nzType","plus-circle","nzTheme","outline",4,"ngIf"],["nz-icon","","nzType","loading","nzTheme","outline",4,"ngIf"],["nz-icon","","nzType","plus-circle","nzTheme","outline"],["nz-icon","","nzType","loading","nzTheme","outline"]],template:function(d,c){1&d&&(e.TgZ(0,"form",0),e.NdJ("ngSubmit",function(){return c.onSubmit$.next(c.model)}),e.TgZ(1,"nz-row",1)(2,"nz-col",2)(3,"formly-form",3),e.NdJ("modelChange",function(re){return c.model=re}),e.qZA()(),e.TgZ(4,"nz-col",2)(5,"button",4),e.YNc(6,P1,1,0,"span",5),e.ALo(7,"ngrxPush"),e.YNc(8,fa,1,0,"span",6),e.ALo(9,"ngrxPush"),e._uU(10," Create Therapy\xa0"),e.TgZ(11,"i"),e._uU(12),e.ALo(13,"ngrxPush"),e.qZA()()()()()),2&d&&(e.Q6J("formGroup",c.form),e.xp6(1),e.Q6J("nzGutter",e.DdM(16,I1)),e.xp6(2),e.Q6J("form",c.form)("fields",c.fields)("model",c.model)("options",c.options),e.xp6(2),e.Q6J("disabled",!c.form.valid),e.xp6(1),e.Q6J("ngIf",!e.lcZ(7,10,c.isSubmitting$)),e.xp6(2),e.Q6J("ngIf",e.lcZ(9,12,c.isSubmitting$)),e.xp6(4),e.Oqu(e.lcZ(13,14,c.searchString$)))},dependencies:[E.O5,t._Y,t.JL,t.sg,g.T7,Yn.ix,pn.w,ln.dQ,_t.Ls,w.t3,w.SK,I.fM],encapsulation:2,changeDetection:0}),Jr);$u=(0,Te.gn)([(0,Pe.c)()],$u);const Ec=["optionTemplates"];function A1(f,d){if(1&f&&(e.ynx(0),e.TgZ(1,"strong"),e._uU(2,"NCIt ID:"),e.qZA(),e._UZ(3,"span",9),e.ALo(4,"highlightTypeahead"),e.BQk()),2&f){const c=e.oxw(2).$implicit,y=e.oxw().ngrxLet;e.xp6(3),e.Q6J("innerHtml",e.xi3(4,1,c.ncitId,y),e.oJD)}}function Sc(f,d){if(1&f&&(e.ynx(0),e.TgZ(1,"strong"),e._uU(2,"Aliases: "),e.qZA(),e.TgZ(3,"em"),e._UZ(4,"span",10),e.ALo(5,"highlightTypeahead"),e.qZA(),e.BQk()),2&f){const c=e.oxw(2).$implicit,y=e.oxw().ngrxLet;e.xp6(4),e.Q6J("nzTooltipTitle",c.therapyAliases.join(", "))("innerHtml",e.xi3(5,2,c.therapyAliases.join(", "),y),e.oJD)}}function Uu(f,d){if(1&f&&(e._UZ(0,"cvc-entity-tag",6),e.TgZ(1,"span",7),e.YNc(2,A1,5,4,"ng-container",8),e.YNc(3,Sc,6,5,"ng-container",8),e.qZA()),2&f){const c=e.oxw().$implicit,y=e.oxw().ngrxLet;e.Q6J("cvcDisableLink",!0)("cvcCacheId",c.__typename+":"+c.id)("cvcEmphasize",y),e.xp6(2),e.Q6J("ngIf",c.ncitId),e.xp6(1),e.Q6J("ngIf",c.therapyAliases.length>0)}}function ma(f,d){1&f&&(e.ynx(0),e.YNc(1,Uu,4,5,"ng-template",null,5,e.W1O),e.BQk())}function ju(f,d){if(1&f&&(e.ynx(0),e.YNc(1,ma,3,0,"ng-container",4),e.ALo(2,"ngrxPush"),e.BQk()),2&f){const c=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,c.result$))}}function ga(f,d){if(1&f){const c=e.EpF();e.TgZ(0,"div",11)(1,"cvc-entity-tag",12),e.NdJ("cvcOnClose",function(){const ht=e.CHM(c).$implicit,It=e.oxw();return e.KtG(It.onTagClose$.next(ht.nzValue))}),e.qZA()()}if(2&f){const c=d.$implicit,y=e.oxw();e.xp6(1),e.Q6J("cvcCacheId","Therapy:"+c.nzValue)("cvcContext",y.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",y.props.isMultiSelect?"default":"closeable")}}function F1(f,d){if(1&f){const c=e.EpF();e.TgZ(0,"cvc-therapy-quick-add-form",13),e.NdJ("cvcOnCreate",function(re){e.CHM(c);const ht=e.oxw();return e.KtG(ht.onPopulate$.next(re))}),e.qZA()}2&f&&e.Q6J("cvcSearchString",d.$implicit)}const xc=jt($t(),yo());class $a extends xc{constructor(d,c,y){super(),this.taq=d,this.tq=c,this.changeDetectorRef=y,this.defaultOptions={props:{entityName:{singular:"Therapy",plural:"Therapies"},isMultiSelect:!1,requireType:!0,tooltip:"Therapy or therapy combination which interacts with the specified variant",placeholder:"Search Therapies",requireTypePromptFn:(re,ht)=>`Select an ${re} Type to search associated Therapies`}},this.placeholder$=new it.X(void 0)}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEntitySelectField({typeaheadQuery:this.taq,typeaheadParam$:void 0,tagQuery:this.tq,getTypeaheadVarsFn:this.getTypeaheadVarsFn,getTypeaheadResultsFn:this.getTypeaheadResultsFn,getTagQueryVarsFn:this.getTagQueryVarsFn,getTagQueryResultsFn:this.getTagQueryResultsFn,getSelectedItemOptionFn:this.getSelectedItemOptionFn,getSelectOptionsFn:this.getSelectOptionsFn,changeDetectorRef:this.changeDetectorRef,selectOpen$:this.selectOpen$,selectComponent:this.selectComponent}),this.configurePlaceholders()}configureStateConnections(){if(this.state&&(this.stateEntityName=this.state.entityName,this.state.requires.requiresTherapy$?this.onRequiresTherapy$=this.state.requires.requiresTherapy$:console.warn(`${this.field.id} field's form provides a state, but could not find requiresTherapy$ subject to attach.`),this.props.requireType)){const d=`${this.stateEntityName.toLowerCase()}Type$`;this.state.fields[d]?this.onEntityType$=this.state.fields[d]:console.error(`${this.field.id} requireType is true, however form state does not provide Subject ${d}.`)}}configurePlaceholders(){this.placeholder$.next(this.props.placeholder),this.onRequiresTherapy$&&this.onEntityType$&&(0,io.a)([this.onRequiresTherapy$,this.onEntityType$]).pipe((0,Io.x)(),(0,Pe.t)(this)).subscribe(([d,c])=>{!d&&c?(this.props.required=!1,this.props.disabled=!0,this.props.description=`${(0,J.E)(c)} ${this.state.entityName} does not include associated therapies`,this.props.extraType="prompt",this.resetField(),this.cdr.markForCheck()):this.props.requireType&&!c?(this.props.required=!1,this.props.disabled=!0,this.props.description=this.props.requireTypePromptFn(this.state.entityName,this.props.isMultiSelect),this.props.extraType="prompt"):d?(this.props.required=!0,this.props.disabled=!1,this.props.description=void 0,this.props.extraType=void 0):(!d&&this.formControl.value||this.props.requireType&&!c&&this.formControl.value)&&(this.resetField(),console.log("HERE2"))})}getTypeaheadVarsFn(d){return{name:d}}getTypeaheadResultsFn(d){return d.data.therapyTypeahead}getTagQueryVarsFn(d){return{id:d}}getTagQueryResultsFn(d){return d.data.therapy}getSelectedItemOptionFn(d){return{value:d.id,label:d.name}}getSelectOptionsFn(d,c){return d.map((y,re)=>({label:c.get(re)||y.name,value:y.id}))}}$a.\u0275fac=function(d){return new(d||$a)(e.Y36(bn.cIw),e.Y36(bn.sjj),e.Y36(e.sBO))},$a.\u0275cmp=e.Xpm({type:$a,selectors:[["cvc-therapy-select"]],viewQuery:function(d,c){if(1&d&&e.Gf(Ec,5,e.Rgc),2&d){let y;e.iGM(y=e.CRH())&&(c.optionTemplates=y)}},features:[e.qOj],decls:12,vars:26,consts:[[3,"cvcAddEntity","cvcCustomTemplate","cvcDisabled","cvcEntityName","cvcFormControl","cvcFormlyAttributes","cvcLoading","cvcOptions","cvcPlaceholder","cvcResults","cvcSelectMode","cvcShowError","cvcSelectOpen","cvcOnSearch","cvcOnOpenChange","cvcOnModelChange"],[4,"ngrxLet"],["selectedTemplate",""],["addTherapy",""],[4,"ngFor","ngForOf"],["optionTemplates",""],[3,"cvcDisableLink","cvcCacheId","cvcEmphasize"],["nz-typography","","nzType","secondary"],[4,"ngIf"],[3,"innerHtml"],["nz-typography","","nzType","secondary","nz-tooltip","",3,"nzTooltipTitle","innerHtml"],[1,"ant-select-selection-item-content"],[3,"cvcCacheId","cvcContext","cvcMode","cvcOnClose"],[3,"cvcSearchString","cvcOnCreate"]],template:function(d,c){if(1&d&&(e.TgZ(0,"cvc-entity-select",0),e.NdJ("cvcOnSearch",function(re){return c.onSearch$.next(re)})("cvcOnOpenChange",function(re){return c.onOpenChange$.next(re)})("cvcOnModelChange",function(re){return c.props.change&&c.props.change(c.field,re)}),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.ALo(3,"ngrxPush"),e.ALo(4,"ngrxPush"),e.ALo(5,"ngrxPush"),e.ALo(6,"ngrxPush"),e.qZA(),e.YNc(7,ju,3,3,"ng-container",1),e.YNc(8,ga,2,3,"ng-template",null,2,e.W1O),e.YNc(10,F1,1,1,"ng-template",null,3,e.W1O)),2&d){const y=e.MAs(9),re=e.MAs(11);e.Q6J("cvcAddEntity",re)("cvcCustomTemplate",y)("cvcDisabled",c.onRequiresTherapy$&&!e.lcZ(1,14,c.onRequiresTherapy$))("cvcEntityName",c.props.entityName)("cvcFormControl",c.formControl)("cvcFormlyAttributes",c.field)("cvcLoading",e.lcZ(2,16,c.isLoading$))("cvcOptions",e.lcZ(3,18,c.selectOption$))("cvcPlaceholder",e.lcZ(4,20,c.placeholder$))("cvcResults",e.lcZ(5,22,c.result$))("cvcSelectMode",c.props.isMultiSelect?"multiple":"default")("cvcShowError",c.showError)("cvcSelectOpen",e.lcZ(6,24,c.selectOpen$)),e.xp6(7),e.Q6J("ngrxLet",c.onSearch$)}},dependencies:[E.sg,E.O5,I.eJ,At.SY,de.ZU,Ue,Tt.J,$u,I.fM,P.A],changeDetection:0});const Ua={types:[{name:"therapy-select",wrappers:["form-field"],component:$a,defaultOptions:{props:{label:"Therapy"}}},{name:"therapy-multi-select",wrappers:["form-field"],component:$a,defaultOptions:{props:{label:"Therapies",isMultiSelect:!0}}}]};class Kr{}Kr.\u0275fac=function(d){return new(d||Kr)},Kr.\u0275mod=e.oAB({type:Kr}),Kr.\u0275inj=e.cJS({imports:[E.ez,t.UX,I._N,I.pP,g.X0.forChild(Ua),xn.L,Yn.sL,Ze.LV,co.$6,Bn.Qp,_t.PV,Ae.o7,w.Jb,At.cg,nn.zf,s.U5,rt.ic,de.ZJ,Yt.X,lt,jn,xt.s,Zt.x]});const ja=["optionTemplates"];function Gu(f,d){if(1&f&&e._UZ(0,"cvc-attribute-tag",4),2&f){const c=e.oxw().$implicit;e.Q6J("cvcAttrValue",c)}}function Dc(f,d){1&f&&(e.ynx(0),e.YNc(1,Gu,1,1,"ng-template",null,3,e.W1O),e.BQk())}function yd(f,d){if(1&f){const c=e.EpF();e.TgZ(0,"div",5)(1,"cvc-attribute-tag",6),e.NdJ("cvcOnClose",function(re){e.CHM(c);const ht=e.oxw();return e.KtG(ht.onTagClose$.next(re))}),e.qZA()()}if(2&f){const c=d.$implicit,y=e.oxw();e.xp6(1),e.Q6J("cvcAttrValue",c.nzValue)("cvcContext",y.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",y.props.isMultiSelect?"default":"closeable")}}const $s={DIAGNOSTIC:"Evidence pertains to a variant's impact on patient diagnosis (cancer subtype).",PREDICTIVE:"Evidence pertains to a variant's effect on therapeutic response.",PROGNOSTIC:"Evidence pertains to a variant's impact on disease progression, severity, or patient survival.",PREDISPOSING:"Evidence pertains to a germline variant's role in conferring susceptibility to disease (including pathogenicity evaluations).",ONCOGENIC:"Evidence pertains to a somatic variant's involvement in tumor pathogenesis as described by the Hallmarks of Cancer.",FUNCTIONAL:"Evidence pertains to a variant that alters biological function from the reference state."},N1=jt($t(),pt());class ms extends N1{constructor(d){super(),this.cdr=d,this.defaultOptions={props:{label:"ENTITY_NAME Type",entityName:{singular:"Entity",plural:"Entities"},placeholder:"Select an ENTITY_NAME Type",isMultiSelect:!1}},this.typeEnums$=new it.X([])}ngAfterViewInit(){this.configureBaseField(),this.state&&this.state.formReady$?this.state.formReady$.pipe((0,Ge.h)(d=>d),(0,Do.q)(1),(0,Pe.t)(this)).subscribe(d=>{this.configureField()}):this.configureField()}configureField(){this.onValueChange$.pipe((0,Pe.t)(this)).subscribe(d=>{d?(this.props.description=$s[d],this.props.extraType="description"):(this.props.description=void 0,this.props.extraType=void 0)}),this.state?(this.props.placeholder=this.props.placeholder.replace("ENTITY_NAME",this.state.entityName),this.props.label=this.props.label.replace("ENTITY_NAME",this.state.entityName),this.props.tooltip=`Type of clinical outcome associated with the ${this.state.entityName} statement.`,this.state.enums.entityType$?(this.state.enums.entityType$.pipe((0,Pe.t)(this)).subscribe(d=>{this.typeEnums$.next(d)}),this.optionTemplates||console.error(`${this.field.id} could not find its optionTemplates QueryList to populate its select options, so simple text labels will be displayed.`),this.optionTemplate$=this.optionTemplates?.changes.pipe((0,yt.U)(d=>d.map(c=>c))),this.configureEnumSelect()):console.error(`${this.field.id} could not find state's enums.inputEnum$ to populate its select options.`)):console.error(`${this.field.id} requires a form state to configure itself, none was found.`)}configureEnumSelect(){this.configureEnumSelectField({optionEnum$:this.typeEnums$,optionTemplate$:this.optionTemplate$,changeDetectorRef:this.cdr})}}ms.\u0275fac=function(d){return new(d||ms)(e.Y36(e.sBO))},ms.\u0275cmp=e.Xpm({type:ms,selectors:[["cvc-type-select"]],viewQuery:function(d,c){if(1&d&&e.Gf(ja,5,e.Rgc),2&d){let y;e.iGM(y=e.CRH())&&(c.optionTemplates=y)}},features:[e.qOj],decls:6,vars:13,consts:[[3,"cvcFormControl","cvcFormlyAttributes","cvcSelectMode","cvcPlaceholder","cvcCustomTemplate","cvcOptions","cvcShowError","cvcDisabled"],[4,"ngFor","ngForOf"],["selectedTemplate",""],["optionTemplates",""],[3,"cvcAttrValue"],[1,"ant-select-selection-item-content"],[3,"cvcAttrValue","cvcContext","cvcMode","cvcOnClose"]],template:function(d,c){if(1&d&&(e._UZ(0,"cvc-enum-select",0),e.ALo(1,"ngrxPush"),e.YNc(2,Dc,3,0,"ng-container",1),e.ALo(3,"ngrxPush"),e.YNc(4,yd,2,3,"ng-template",null,2,e.W1O)),2&d){const y=e.MAs(5);e.Q6J("cvcFormControl",c.formControl)("cvcFormlyAttributes",c.field)("cvcSelectMode",c.props.isMultiSelect?"multiple":"default")("cvcPlaceholder",c.props.placeholder)("cvcCustomTemplate",y)("cvcOptions",e.lcZ(1,9,c.selectOption$))("cvcShowError",c.showError)("cvcDisabled",c.props.disabled),e.xp6(2),e.Q6J("ngForOf",e.lcZ(3,11,c.typeEnums$))}},dependencies:[E.sg,Qe,We,I.fM],changeDetection:0});const Qu={types:[{name:"type-select",wrappers:["form-field"],component:ms}]};class Nr{}Nr.\u0275fac=function(d){return new(d||Nr)},Nr.\u0275mod=e.oAB({type:Nr}),Nr.\u0275inj=e.cJS({imports:[E.ez,t.UX,I._N,I.pP,g.X0.forChild(Qu),lt,Ye,oe]});var uu=a(6805);function va(f,d){const c="object"==typeof d;return new Promise((y,re)=>{let It,ht=!1;f.subscribe({next:Mn=>{It=Mn,ht=!0},error:re,complete:()=>{ht?y(It):c?y(d.defaultValue):re(new uu.K)}})})}const fl={isDefaultCol:f=>"default"===f.type,isSelectCol:f=>"select"===f.type,isEntityTagCol:f=>"entity-tag"===f.type,isEnumTagCol:f=>"enum-tag"===f.type,isTextTagCol:f=>"text-tag"===f.type},Za=f=>void 0!==f.sort,ml=f=>void 0!==f.filter,wc={diseases:bn.pP7.DiseaseName,gene:bn.pP7.EntrezSymbol,therapies:bn.pP7.TherapyName,variant:bn.pP7.VariantName},Zu={diseases:"diseaseName",therapies:"therapyName",variant:"variantName",gene:"entrezSymbol",aliases:"variantAlias"},_a=["selected","id"];class Bl{constructor(){this.sortStreams=[],this.filterStreams=[],this.config=this.configureColumnStreams([{key:"selected",label:"Select",type:"select",width:"25px",align:"center",fixedLeft:!0,checkbox:{th:{showCheckbox:!1},td:{showCheckbox:!0}}},{key:"id",label:"ID",hidden:!0,type:"hidden",width:"0px"},{key:"variant",label:"Variant",type:"entity-tag",width:"215px",context:"variant",fixedLeft:!0,showStatus:!0,tag:{fullWidth:!0,truncateLabel:"200px"},sort:{default:"ascend"},filter:{inputType:"default",options:[{key:"Filter Variant Name",value:null}]}},{key:"aliases",label:"Aliases",type:"default",width:"150px",objectKey:"name",sort:{},filter:{inputType:"default",options:[{key:"Filter Aliases",value:null}]}},{key:"gene",label:"Gene",type:"entity-tag",width:"135px",tag:{truncateLabel:"125px"},sort:{},filter:{inputType:"default",options:[{key:"Filter Gene Name",value:null}]}},{key:"diseases",label:"Diseases",type:"entity-tag",width:"250px",sort:{},tag:{maxTags:1,truncateLabel:"175px"},filter:{inputType:"default",typename:"Therapy",options:[{key:"Filter Therapy Names",value:null}]}},{key:"therapies",label:"Therapies",type:"entity-tag",width:"275px",sort:{},tag:{maxTags:2,truncateLabel:"150px"},filter:{inputType:"default",typename:"Therapy",options:[{key:"Filter Therapy Names",value:null}]}}])}get(){return this.config}getSortStreams(){return this.sortStreams}getFilterStreams(){return this.filterStreams}getAttributeFilters(d,c){return d.getValues().map(re=>({text:(0,J.E)(re),value:re,byDefault:c===re}))}configureColumnStreams(d){return d.forEach(c=>{const y=c;if(Za(y)&&(y.sort.changes=new it.X({key:y.key,value:y.sort.default??null}),this.sortStreams.push(y.sort.changes)),ml(y)){const re=y.filter.options.find(ht=>ht.byDefault)?.value;y.filter.changes=new it.X({key:y.key,value:re??null}),this.filterStreams.push(y.filter.changes)}}),d}}var Lr;let Us=((Lr=class{set cvcTableScrollerToIndex(d){void 0!==d&&this.scrollToIndex(d)}set cvcTableScrollerToOffset(d){void 0!==d&&this.scrollToIndex(d)}constructor(d){this.host=d,this.cvcTableScrollerOnScroll=new e.vpe,this.cvcTableScrollerOnFetch=new e.vpe,this.cvcTableScrollerTargetHeight=140,this.cvcTableScrollerFetchCount=50,this.onLoadThrottleTime=500,this.onScrollThrottleTime=250,this.onScrollDebounceTime=300}ngAfterViewInit(){if(!this.host||!this.host.cdkVirtualScrollViewport)throw new Error("cvcTableScroller directive could not obtain reference to host cdkVirtualScrollViewport.");this.viewport=this.host.cdkVirtualScrollViewport,this.scrolled$=this.viewport.elementScrolled(),this.rendered$=this.viewport.renderedRangeStream,this.rendered$.pipe((0,ye.P)()).subscribe(()=>this.viewport.checkViewportSize()),this.scrolled$.pipe((0,_o.p)(this.onScrollThrottleTime,vi.z,{leading:!0,trailing:!0}),(0,Nn.b)(d=>this.cvcTableScrollerOnScroll.next("scroll")),(0,Gi.b)(this.onScrollDebounceTime),(0,Pe.t)(this)).subscribe(d=>{this.cvcTableScrollerOnScroll.next("stop")}),this.scrolled$.pipe((0,yt.U)(d=>this.viewport.measureScrollOffset("bottom")),(0,pe.G)(),(0,Ge.h)(([d,c])=>c<d&&c<this.cvcTableScrollerTargetHeight),(0,_o.p)(this.onLoadThrottleTime),(0,Pe.t)(this)).subscribe(d=>{this.cvcTableScrollerOnScroll.next("bottom");try{this.loadMore(this.cvcTableScrollerPageInfo)}catch(c){console.error(c)}})}loadMore(d){const c=this.cvcTableScrollerQueryRef;if(!d&&c)throw new Error("table-scroll directive requires PageInfo to use provided QueryRef.");if(d&&!c)throw new Error("table-scroll directive requires valid QueryRef when PageInfo provided.");if(d&&c){const[y,re,ht]=[this.cvcTableScrollerFetchCount,d.hasNextPage,d.endCursor];if(!y||!ht)throw new Error("table-scroll PageInfo invalid.");if(!re)return;this.cvcTableScrollerOnFetch.next({first:y,after:ht})}}scrollToIndex(d){const[c,y]=[this.host,this.host.cdkVirtualScrollViewport];if(!c||!y)throw new Error("table-scroll scrollToIndex() cannot find host viewport.");y.scrollToIndex(d)}scrollToOffset(d){const[c,y]=[this.host,this.host.cdkVirtualScrollViewport];if(!c||!y)throw new Error("table-scroll scrollToOffset() cannot find host viewport.");y.scrollToOffset(d)}}).\u0275fac=function(d){return new(d||Lr)(e.Y36(Oo.N8))},Lr.\u0275dir=e.lG2({type:Lr,selectors:[["","cvcTableScroller",""]],inputs:{cvcTableScrollerTargetHeight:"cvcTableScrollerTargetHeight",cvcTableScrollerQueryRef:"cvcTableScrollerQueryRef",cvcTableScrollerPageInfo:"cvcTableScrollerPageInfo",cvcTableScrollerFetchCount:"cvcTableScrollerFetchCount",cvcTableScrollerToIndex:"cvcTableScrollerToIndex",cvcTableScrollerToOffset:"cvcTableScrollerToOffset"},outputs:{cvcTableScrollerOnScroll:"cvcTableScrollerOnScroll",cvcTableScrollerOnFetch:"cvcTableScrollerOnFetch"}}),Lr);function Pc(f,d){1&f&&e._UZ(0,"span",8)}function k1(f,d){if(1&f){const c=e.EpF();e.TgZ(0,"span",9),e.NdJ("click",function(){e.CHM(c),e.oxw(2);const re=e.MAs(3),ht=e.oxw();return re.value="",e.KtG(ht.cvcModelChange.next(null))}),e.qZA()}}function gl(f,d){if(1&f&&(e.YNc(0,Pc,1,0,"span",6),e.YNc(1,k1,1,0,"span",7)),2&f){e.oxw();const c=e.MAs(3);e.Q6J("ngIf",!c.value),e.xp6(1),e.Q6J("ngIf",c.value)}}function R1(f,d){if(1&f){const c=e.EpF();e.ynx(0),e.TgZ(1,"nz-input-group",2)(2,"input",3,4),e.NdJ("ngModelChange",function(re){e.CHM(c);const ht=e.oxw();return e.KtG(ht.cvcModelChange.next(re))}),e.qZA()(),e.YNc(4,gl,2,2,"ng-template",null,5,e.W1O),e.BQk()}if(2&f){const c=e.MAs(5),y=e.oxw();e.xp6(1),e.Q6J("nzSuffix",c),e.xp6(1),e.Q6J("placeholder",y.cvcPlaceholder)("ngModel",y.cvcModel)}}function ya(f,d){if(1&f){const c=e.EpF();e.TgZ(0,"nz-input-number-group",10)(1,"nz-input-number",11,4),e.NdJ("ngModelChange",function(re){e.CHM(c);const ht=e.oxw();return e.KtG(ht.cvcModelChange.next(""===re?null:re))}),e.qZA()()}if(2&f){const c=e.oxw();let y;e.xp6(1),e.Q6J("nzPlaceHolder",null!==(y=c.cvcPlaceholder)&&void 0!==y?y:"")("ngModel",c.cvcModel)("nzMin",1)("nzStep",1)}}Us=(0,Te.gn)([(0,Pe.c)()],Us);class vl{constructor(){this.cvcModel=null,this.cvcModelChange=new e.vpe,this.cvcInputType="default"}}function Ja(f,d){if(1&f){const c=e.EpF();e.TgZ(0,"li",5),e.NdJ("click",function(){const ht=e.CHM(c).$implicit,It=e.oxw();return e.KtG(It.cvcOptionChange.next({key:It.cvcColumnKey,value:ht.value}))}),e._UZ(1,"cvc-attribute-tag",6),e.qZA()}if(2&f){const c=d.$implicit,y=e.oxw();e.Q6J("nzSelected",(null==y.cvcOption?null:y.cvcOption.value)===c.value),e.xp6(1),e.Q6J("cvcFullWidth",!0)("cvcChecked",(null==y.cvcOption?null:y.cvcOption.value)===c.value)("cvcAttrValue",c.value)}}vl.\u0275fac=function(d){return new(d||vl)},vl.\u0275cmp=e.Xpm({type:vl,selectors:[["cvc-table-filter-input"]],inputs:{cvcModel:"cvcModel",cvcInputType:"cvcInputType",cvcPlaceholder:"cvcPlaceholder"},outputs:{cvcModelChange:"cvcModelChange"},decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["numericInput",""],["nzSize","small",3,"nzSuffix"],["nz-input","",3,"placeholder","ngModel","ngModelChange"],["filterInput",""],["suffixIcon",""],["nz-icon","","nzType","search","style","color: #ddd",4,"ngIf"],["nz-icon","","class","ant-input-clear-icon","nzTheme","fill","nzType","close-circle",3,"click",4,"ngIf"],["nz-icon","","nzType","search",2,"color","#ddd"],["nz-icon","","nzTheme","fill","nzType","close-circle",1,"ant-input-clear-icon",3,"click"],["nzSize","small"],[2,"width","100%",3,"nzPlaceHolder","ngModel","nzMin","nzStep","ngModelChange"]],template:function(d,c){if(1&d&&(e.YNc(0,R1,6,3,"ng-container",0),e.YNc(1,ya,3,4,"ng-template",null,1,e.W1O)),2&d){const y=e.MAs(2);e.Q6J("ngIf","default"===c.cvcInputType)("ngIfElse",y)}},dependencies:[E.O5,t.Fj,t.JJ,t.On,pn.w,_t.Ls,Ae.Zp,Ae.gB,Ae.ke,Bi._V,Bi.Rb]});class Ca{constructor(){this.cvcOptionChange=new e.vpe}}var kr;function Ju(f,d){if(1&f&&e._UZ(0,"th",14),2&f){const c=d.ngIf;let y;e.Q6J("nzShowCheckbox",c.checkbox.th.showCheckbox||!1)("nzWidth",c.width)("nzAlign",null!==(y=c.align)&&void 0!==y?y:"left")("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1)}}function Ka(f,d){if(1&f){const c=e.EpF();e.TgZ(0,"th",15),e.NdJ("nzSortOrderChange",function(re){const It=e.CHM(c).ngIf;return e.KtG(It.sort.changes.next({key:It.key,value:re}))}),e.ALo(1,"ngrxPush"),e.TgZ(2,"span",16),e._uU(3),e.qZA()()}if(2&f){const c=d.ngIf;let y,re;e.Q6J("nzColumnKey",c.key)("nzAlign",null!==(y=c.align)&&void 0!==y?y:"left")("nzWidth",c.width)("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1)("nzShowSort",void 0!==c.sort)("nzSortFn",!0)("nzSortOrder",(null==(re=e.lcZ(1,10,c.sort.changes))?null:re.value)||null),e.xp6(2),e.Q6J("nzTooltipTitle",c.tooltip),e.xp6(1),e.hij(" ",c.label," ")}}function Ku(f,d){if(1&f&&(e.TgZ(0,"th",17),e._uU(1),e.qZA()),2&f){const c=d.ngIf;let y;e.Q6J("nzColumnKey",c.key)("nzAlign",null!==(y=c.align)&&void 0!==y?y:"left")("nzWidth",c.width)("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1)("nzTooltipTitle",c.tooltip),e.xp6(1),e.hij(" ",c.label," ")}}function qr(f,d){if(1&f&&(e.TgZ(0,"th",17),e._uU(1),e.qZA()),2&f){const c=d.ngIf;let y;e.Q6J("nzColumnKey",c.key)("nzAlign",null!==(y=c.align)&&void 0!==y?y:"left")("nzWidth",c.width)("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1)("nzTooltipTitle",c.tooltip),e.xp6(1),e.hij(" ",c.label," ")}}function V1(f,d){if(1&f&&(e.TgZ(0,"th",17),e._uU(1),e.qZA()),2&f){const c=d.ngIf;let y;e.Q6J("nzColumnKey",c.key)("nzAlign",null!==(y=c.align)&&void 0!==y?y:"left")("nzWidth",c.width)("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1)("nzTooltipTitle",c.tooltip),e.xp6(1),e.hij(" ",c.label," ")}}function Ic(f,d){if(1&f&&(e.ynx(0),e.YNc(1,Ju,1,5,"th",11),e.ALo(2,"guardType"),e.YNc(3,Ka,4,12,"th",12),e.ALo(4,"guardType"),e.YNc(5,Ku,2,7,"th",13),e.ALo(6,"guardType"),e.YNc(7,qr,2,7,"th",13),e.ALo(8,"guardType"),e.YNc(9,V1,2,7,"th",13),e.ALo(10,"guardType"),e.BQk()),2&f){const c=e.oxw().$implicit,y=e.oxw(2);e.xp6(1),e.Q6J("ngIf",e.xi3(2,5,c,y.colGuards.isSelectCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(4,8,c,y.colGuards.isEntityTagCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(6,11,c,y.colGuards.isEnumTagCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(8,14,c,y.colGuards.isTextTagCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(10,17,c,y.colGuards.isDefaultCol))}}function B1(f,d){if(1&f&&(e.ynx(0),e.YNc(1,Ic,11,20,"ng-container",10),e.BQk()),2&f){const c=d.$implicit;e.xp6(1),e.Q6J("ngIf",!c.hidden)}}function Ac(f,d){if(1&f&&(e.TgZ(0,"th",22),e._uU(1," \xa0 "),e.qZA()),2&f){const c=d.ngIf;let y;e.Q6J("nzColumnKey",c.key)("nzAlign",null!==(y=c.align)&&void 0!==y?y:"left")("nzWidth",c.width)("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1)}}function qu(f,d){if(1&f){const c=e.EpF();e.TgZ(0,"cvc-table-filter-input",25),e.NdJ("cvcModelChange",function(re){const It=e.CHM(c).ngIf,Mn=e.oxw().ngIf;return e.KtG(It.changes.next({key:Mn.key,value:re}))}),e.qZA()}if(2&f){const c=e.oxw().ngIf;e.Q6J("cvcInputType",c.filter.inputType)("cvcPlaceholder",c.filter.options[0].key)("cvcModel",c.filter.options[0].value)}}function Er(f,d){if(1&f&&(e.TgZ(0,"th",23),e.YNc(1,qu,1,3,"cvc-table-filter-input",24),e.qZA()),2&f){const c=d.ngIf;let y;e.Q6J("nzColumnKey",c.key)("nzWidth",c.width)("nzAlign",null!==(y=c.align)&&void 0!==y?y:"left")("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1),e.xp6(1),e.Q6J("ngIf",c.filter)}}function Fc(f,d){if(1&f){const c=e.EpF();e.TgZ(0,"th",26,27),e.NdJ("nzSortOrderChange",function(re){const It=e.CHM(c).ngIf;return e.KtG(It.sort.changes.next({key:It.key,value:re}))}),e.ALo(2,"ngrxPush"),e.TgZ(3,"nz-filter-trigger",28,29),e.ALo(5,"ngrxPush"),e._UZ(6,"span",30),e.qZA(),e.TgZ(7,"nz-dropdown-menu",null,31)(9,"cvc-enum-filter-menu",32),e.NdJ("cvcOptionChange",function(re){const It=e.CHM(c).ngIf,Mn=e.MAs(4);return It.filter.changes.next(re),e.KtG(Mn.nzVisible=!1)}),e.ALo(10,"ngrxPush"),e.qZA()()()}if(2&f){const c=d.ngIf,y=e.MAs(8);let re,ht,It;e.Q6J("nzColumnKey",c.key)("nzWidth",c.width)("nzAlign",null!==(re=c.align)&&void 0!==re?re:"left")("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1)("nzShowSort",!0)("nzSortFn",!0)("nzSortOrder",(null==(ht=e.lcZ(2,15,c.sort.changes))?null:ht.value)||null)("nzShowFilter",void 0!==c.filter)("nzFilterFn",!0),e.xp6(3),e.Q6J("nzDropdownMenu",y)("nzActive",null!==(null==(It=e.lcZ(5,17,c.filter.changes))?null:It.value)),e.xp6(6),e.Q6J("cvcColumnKey",c.key)("cvcFilterOptions",c.filter.options)("cvcOption",e.lcZ(10,19,c.filter.changes))}}function Nc(f,d){if(1&f){const c=e.EpF();e.TgZ(0,"th",33,27)(2,"nz-filter-trigger",28),e.ALo(3,"ngrxPush"),e._UZ(4,"span",34),e.qZA(),e.TgZ(5,"nz-dropdown-menu",null,35)(7,"div",36)(8,"div",37)(9,"cvc-table-filter-input",38),e.NdJ("cvcModelChange",function(re){const It=e.CHM(c).ngIf;return e.KtG(It.filter.changes.next({key:It.key,value:re}))}),e.qZA()()()()()}if(2&f){const c=d.ngIf,y=e.MAs(6);let re,ht;e.Q6J("nzColumnKey",c.key)("nzWidth",c.width)("nzAlign",null!==(re=c.align)&&void 0!==re?re:"left")("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1)("nzFilterFn",!0),e.xp6(2),e.Q6J("nzDropdownMenu",y)("nzActive",null!==(null==(ht=e.lcZ(3,10,c.filter.changes))?null:ht.value)),e.xp6(7),e.Q6J("cvcPlaceholder",c.filter.options[0].key)("cvcModel",c.filter.options[0].value)}}function ap(f,d){if(1&f){const c=e.EpF();e.TgZ(0,"cvc-table-filter-input",38),e.NdJ("cvcModelChange",function(re){const It=e.CHM(c).ngIf,Mn=e.oxw().ngIf;return e.KtG(It.changes.next({key:Mn.key,value:re}))}),e.qZA()}if(2&f){const c=e.oxw().ngIf;e.Q6J("cvcPlaceholder",c.filter.options[0].key)("cvcModel",c.filter.options[0].value)}}function Hl(f,d){if(1&f&&(e.TgZ(0,"th",23),e.YNc(1,ap,1,2,"cvc-table-filter-input",39),e.qZA()),2&f){const c=d.ngIf;let y;e.Q6J("nzColumnKey",c.key)("nzWidth",c.width)("nzAlign",null!==(y=c.align)&&void 0!==y?y:"left")("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1),e.xp6(1),e.Q6J("ngIf",c.filter)}}function zd(f,d){if(1&f&&(e.ynx(0),e.YNc(1,Ac,2,5,"th",18),e.ALo(2,"guardType"),e.YNc(3,Er,2,6,"th",19),e.ALo(4,"guardType"),e.YNc(5,Fc,11,21,"th",20),e.ALo(6,"guardType"),e.YNc(7,Nc,10,12,"th",21),e.ALo(8,"guardType"),e.YNc(9,Hl,2,6,"th",19),e.ALo(10,"guardType"),e.BQk()),2&f){const c=e.oxw().$implicit,y=e.oxw(2);e.xp6(1),e.Q6J("ngIf",e.xi3(2,5,c,y.colGuards.isSelectCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(4,8,c,y.colGuards.isEntityTagCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(6,11,c,y.colGuards.isEnumTagCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(8,14,c,y.colGuards.isTextTagCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(10,17,c,y.colGuards.isDefaultCol))}}function _l(f,d){if(1&f&&(e.ynx(0),e.YNc(1,zd,11,20,"ng-container",10),e.BQk()),2&f){const c=d.$implicit;e.xp6(1),e.Q6J("ngIf",!c.hidden)}}function Td(f,d){if(1&f&&(e.TgZ(0,"thead")(1,"tr",7),e.YNc(2,B1,2,1,"ng-container",8),e.qZA(),e.TgZ(3,"tr",9),e.YNc(4,_l,2,1,"ng-container",8),e.qZA()()),2&f){const c=d.ngrxLet;e.xp6(2),e.Q6J("ngForOf",c),e.xp6(2),e.Q6J("ngForOf",c)}}function Lc(f,d){if(1&f){const c=e.EpF();e.TgZ(0,"td",45),e.NdJ("nzCheckedChange",function(re){e.CHM(c);const ht=e.oxw(3).$implicit,It=e.oxw(2);return e.KtG(It.onRowSelected$.next({id:ht.id,selected:re}))}),e.qZA()}if(2&f){const c=d.ngIf,y=e.oxw(3).$implicit;let re;e.Q6J("nzChecked",y.selected)("nzAlign",null!==(re=c.align)&&void 0!==re?re:"left")("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1)}}function Yl(f,d){1&f&&e.GkF(0)}Ca.\u0275fac=function(d){return new(d||Ca)},Ca.\u0275cmp=e.Xpm({type:Ca,selectors:[["cvc-enum-filter-menu"]],inputs:{cvcColumnKey:"cvcColumnKey",cvcFilterOptions:"cvcFilterOptions",cvcOption:"cvcOption"},outputs:{cvcOptionChange:"cvcOptionChange"},decls:6,vars:2,consts:[["nz-menu",""],["nz-menu-item","",3,"nzSelected","click",4,"ngFor","ngForOf"],[2,"padding","3px"],["nz-button","","nzType","default","nzBlock","","nzSize","small",3,"disabled","click"],["nz-icon","","nzType","retweet","nzTheme","outline"],["nz-menu-item","",3,"nzSelected","click"],["cvcContext","menu-item",3,"cvcFullWidth","cvcChecked","cvcAttrValue"]],template:function(d,c){1&d&&(e.TgZ(0,"ul",0),e.YNc(1,Ja,2,4,"li",1),e.TgZ(2,"li",2)(3,"button",3),e.NdJ("click",function(){return c.cvcOptionChange.next({key:c.cvcColumnKey,value:null})}),e._UZ(4,"span",4),e._uU(5," Reset "),e.qZA()()()),2&d&&(e.xp6(1),e.Q6J("ngForOf",c.cvcFilterOptions),e.xp6(2),e.Q6J("disabled",null===(null==c.cvcOption?null:c.cvcOption.value)))},dependencies:[E.sg,Qe,Yn.ix,pn.w,ln.dQ,_t.Ls,Jo.wO,Jo.r9],styles:[".typeahead-match[_ngcontent-%COMP%]{font-weight:700}[_nghost-%COMP%]     ul li:hover{background-color:#e6f7ff}[_nghost-%COMP%]     ul li.ant-dropdown-menu-item-selected{background-color:#1890ff}[_nghost-%COMP%]     ul li.ant-dropdown-menu-item-selected:active{background-color:#096dd9}"],changeDetection:0});const yl=function(f,d,c){return{$implicit:f,config:d,emphasize:c}};function Md(f,d){if(1&f&&(e.ynx(0),e.YNc(1,Yl,1,0,"ng-container",51),e.ALo(2,"isArray"),e.ALo(3,"ngrxPush"),e.BQk()),2&f){const c=e.oxw().ngIf,y=e.oxw().ngIf,re=e.MAs(3),ht=e.MAs(5),It=e.oxw(3).$implicit;let Mn;e.xp6(1),e.Q6J("ngTemplateOutlet",e.lcZ(2,2,It[c])?re:ht)("ngTemplateOutletContext",e.kEZ(6,yl,It[c],y,null==(Mn=e.lcZ(3,4,y.filter.changes))?null:Mn.value))}}function Cl(f,d){if(1&f&&(e.ynx(0),e.YNc(1,Md,4,10,"ng-container",50),e.BQk()),2&f){const c=d.ngIf;e.oxw();const y=e.MAs(7),re=e.oxw(3).$implicit;e.xp6(1),e.Q6J("ngIf",re[c])("ngIfElse",y)}}const $l=function(f,d,c,y,re){return{tagList:f,tag:d,showPopover:c,status:y,emphasize:re}};function Sr(f,d){if(1&f&&(e.ynx(0),e._UZ(1,"cvc-entity-collection-tag",53),e.BQk()),2&f){const c=e.oxw(2),y=c.config,re=c.$implicit,ht=c.emphasize;e.oxw();const It=e.MAs(5),Mn=e.oxw(5);e.xp6(1),e.Q6J("cvcCollectionTagConfig",e.qbA(3,$l,re.slice(y.tag.maxTags,re.length),y.tag,!Mn.isScrolling,!0===y.showStatus?re.status:void 0,ht))("cvcTagTemplate",It)("cvcShowFullLabels",!0)}}function za(f,d){if(1&f&&(e.ynx(0),e._UZ(1,"cvc-entity-tag-list",52),e.YNc(2,Sr,2,9,"ng-container",10),e.BQk()),2&f){const c=e.oxw(),y=c.config,re=c.$implicit,ht=c.emphasize;e.oxw();const It=e.MAs(5),Mn=e.oxw(5);e.xp6(1),e.Q6J("cvcTagTemplate",It)("cvcTagListConfig",e.qbA(3,$l,re.slice(0,y.tag.maxTags),y.tag,!Mn.isScrolling,!0===y.showStatus?re.status:void 0,ht)),e.xp6(1),e.Q6J("ngIf",re.slice(y.tag.maxTags,re.length).length>0)}}function kc(f,d){if(1&f&&e.YNc(0,za,3,9,"ng-container",50),2&f){const c=d.$implicit;e.oxw();const y=e.MAs(7);e.Q6J("ngIf",c.length>0)("ngIfElse",y)}}function H1(f,d){if(1&f&&e._UZ(0,"cvc-entity-tag",54),2&f){const c=d.$implicit,y=d.config,re=d.emphasize,ht=e.oxw(6);let It;e.Q6J("cvcTruncateLabel",null==y.tag?null:y.tag.truncateLabel)("cvcLinkableEntity",c)("cvcEmphasize",re)("cvcShowPopover",!ht.isScrolling)("cvcStatus",!0===y.showStatus?c.status:void 0)("cvcFullWidth",null!==(It=null==y.tag?null:y.tag.fullWidth)&&void 0!==It&&It)}}function gs(f,d){if(1&f&&e._UZ(0,"cvc-empty-value",55),2&f){const c=e.oxw().ngIf;e.Q6J("cvcEmptyCategory",c.emptyValueCategory||"unspecified")}}function bd(f,d){if(1&f&&(e.TgZ(0,"td",46),e.YNc(1,Cl,2,2,"ng-container",10),e.YNc(2,kc,1,2,"ng-template",null,47,e.W1O),e.YNc(4,H1,1,6,"ng-template",null,48,e.W1O),e.YNc(6,gs,1,1,"ng-template",null,49,e.W1O),e.qZA()),2&f){const c=d.ngIf;let y;e.Q6J("nzAlign",null!==(y=c.align)&&void 0!==y?y:"left")("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1),e.xp6(1),e.Q6J("ngIf",c.context||c.key)}}function Ul(f,d){if(1&f&&(e._UZ(0,"cvc-attribute-tag",58),e.ALo(1,"evidenceEnumDisplay")),2&f){const c=e.oxw().ngIf,y=e.oxw(3).$implicit,re=e.oxw(2);e.Q6J("cvcFullWidth",!0)("cvcAttrValue",y[c.key])("cvcTooltip",e.lcZ(1,3,!re.isScrolling&&y[c.key]))}}function Ed(f,d){if(1&f&&e._UZ(0,"cvc-empty-value",55),2&f){const c=e.oxw().ngIf;e.Q6J("cvcEmptyCategory",c.emptyValueCategory||"unspecified")}}function Rc(f,d){if(1&f&&(e.TgZ(0,"td",46),e.YNc(1,Ul,2,5,"cvc-attribute-tag",56),e.YNc(2,Ed,1,1,"ng-template",null,57,e.W1O),e.qZA()),2&f){const c=d.ngIf,y=e.MAs(3),re=e.oxw(3).$implicit;let ht;e.Q6J("nzAlign",null!==(ht=c.align)&&void 0!==ht?ht:"left")("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1),e.xp6(1),e.Q6J("ngIf",re[c.key])("ngIfElse",y)}}function du(f,d){if(1&f&&(e.TgZ(0,"nz-tag",61),e._UZ(1,"span",62),e.qZA()),2&f){const c=e.oxw().ngIf,y=e.oxw(3).$implicit;e.Q6J("nzTooltipTitle",y[c.key])}}function zl(f,d){if(1&f&&e._UZ(0,"cvc-empty-value",55),2&f){const c=e.oxw().ngIf;e.Q6J("cvcEmptyCategory",c.emptyValueCategory||"unspecified")}}function cp(f,d){if(1&f&&(e.TgZ(0,"td",46),e.YNc(1,du,2,1,"nz-tag",59),e.YNc(2,zl,1,1,"ng-template",null,60,e.W1O),e.qZA()),2&f){const c=d.ngIf,y=e.MAs(3),re=e.oxw(3).$implicit;let ht;e.Q6J("nzAlign",null!==(ht=c.align)&&void 0!==ht?ht:"left")("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1),e.xp6(1),e.Q6J("ngIf",re[c.key])("ngIfElse",y)}}function Vc(f,d){1&f&&e.GkF(0)}const Y1=function(f,d){return{$implicit:f,emphasize:d}};function Tl(f,d){if(1&f&&(e.ynx(0),e.YNc(1,Vc,1,0,"ng-container",51),e.ALo(2,"isArray"),e.ALo(3,"ngrxPush"),e.BQk()),2&f){const c=d.ngIf,y=e.oxw().ngIf,re=e.MAs(3),ht=e.MAs(5);let It;e.xp6(1),e.Q6J("ngTemplateOutlet",e.lcZ(2,2,c)?re:ht)("ngTemplateOutletContext",e.WLB(6,Y1,c,null==(It=e.lcZ(3,4,y.filter.changes))?null:It.value))}}function Sd(f,d){1&f&&e.GkF(0)}function Ml(f,d){1&f&&(e.ynx(0),e._uU(1,", "),e.BQk())}function ee(f,d){if(1&f&&(e.ynx(0),e.YNc(1,Sd,1,0,"ng-container",51),e.YNc(2,Ml,2,0,"ng-container",10),e.BQk()),2&f){const c=d.$implicit,y=d.last,re=e.oxw(2).emphasize;e.oxw();const ht=e.MAs(5);e.xp6(1),e.Q6J("ngTemplateOutlet",ht)("ngTemplateOutletContext",e.WLB(3,Y1,c,re)),e.xp6(1),e.Q6J("ngIf",!y)}}function G(f,d){if(1&f&&(e.ynx(0),e.YNc(1,ee,3,6,"ng-container",8),e.BQk()),2&f){const c=e.oxw().$implicit;e.xp6(1),e.Q6J("ngForOf",c)}}function lp(f,d){if(1&f&&e.YNc(0,G,2,1,"ng-container",50),2&f){const c=d.$implicit;e.oxw();const y=e.MAs(7);e.Q6J("ngIf",c.length>0)("ngIfElse",y)}}function xd(f,d){if(1&f&&(e._UZ(0,"span",67),e.ALo(1,"highlightTypeahead")),2&f){const c=d.$implicit,y=d.emphasize,re=e.oxw().ngIf;e.Q6J("innerHtml",e.xi3(1,1,re.objectKey?c[re.objectKey]:c,y),e.oJD)}}function Vp(f,d){if(1&f&&e._UZ(0,"cvc-empty-value",55),2&f){const c=e.oxw().ngIf;e.Q6J("cvcEmptyCategory",c.emptyValueCategory||"unspecified")}}function zi(f,d){if(1&f&&(e.TgZ(0,"td",63),e.YNc(1,Tl,4,9,"ng-container",50),e.YNc(2,lp,1,2,"ng-template",null,64,e.W1O),e.YNc(4,xd,2,4,"ng-template",null,65,e.W1O),e.YNc(6,Vp,1,1,"ng-template",null,66,e.W1O),e.qZA()),2&f){const c=d.ngIf,y=e.MAs(7),re=e.oxw(3).$implicit;let ht;e.Q6J("nzAlign",null!==(ht=c.align)&&void 0!==ht?ht:"left")("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1),e.xp6(1),e.Q6J("ngIf",re[c.key])("ngIfElse",y)}}function pu(f,d){if(1&f&&(e.ynx(0),e.YNc(1,Lc,1,4,"td",42),e.ALo(2,"guardType"),e.YNc(3,bd,8,4,"td",43),e.ALo(4,"guardType"),e.YNc(5,Rc,4,5,"td",43),e.ALo(6,"guardType"),e.YNc(7,cp,4,5,"td",43),e.ALo(8,"guardType"),e.YNc(9,zi,8,5,"td",44),e.ALo(10,"guardType"),e.BQk()),2&f){const c=e.oxw().$implicit,y=e.oxw(3);e.xp6(1),e.Q6J("ngIf",e.xi3(2,5,c,y.colGuards.isSelectCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(4,8,c,y.colGuards.isEntityTagCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(6,11,c,y.colGuards.isEnumTagCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(8,14,c,y.colGuards.isTextTagCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(10,17,c,y.colGuards.isDefaultCol))}}function Dd(f,d){if(1&f&&(e.ynx(0),e.YNc(1,pu,11,20,"ng-container",10),e.BQk()),2&f){const c=d.$implicit;e.xp6(1),e.Q6J("ngIf",!c.hidden)}}function Kn(f,d){if(1&f&&(e.TgZ(0,"tr",41),e.YNc(1,Dd,2,1,"ng-container",8),e.qZA()),2&f){const c=e.oxw().ngrxLet;e.xp6(1),e.Q6J("ngForOf",c)}}function wi(f,d){1&f&&(e.TgZ(0,"tbody"),e.YNc(1,Kn,2,1,"ng-template",40),e.qZA())}function Xu(f,d){1&f&&e._UZ(0,"span",75)}function $1(f,d){if(1&f){const c=e.EpF();e.TgZ(0,"span",76),e.NdJ("click",function(){e.CHM(c),e.oxw(2);const re=e.MAs(3),ht=e.oxw().filter;return re.value="",e.KtG(ht.changes.next({key:ht.key,value:null}))}),e.qZA()}}function Od(f,d){if(1&f&&(e.YNc(0,Xu,1,0,"span",73),e.YNc(1,$1,1,0,"span",74)),2&f){e.oxw();const c=e.MAs(3);e.Q6J("ngIf",!c.value),e.xp6(1),e.Q6J("ngIf",c.value)}}function Bp(f,d){if(1&f){const c=e.EpF();e.ynx(0),e.TgZ(1,"nz-input-group",69)(2,"input",70,71),e.NdJ("nzFilterChange",function(re){e.CHM(c);const ht=e.oxw().filter;return e.KtG(ht.changes.next({key:ht.key,value:re}))}),e.qZA()(),e.YNc(4,Od,2,2,"ng-template",null,72,e.W1O),e.BQk()}if(2&f){const c=e.MAs(5),y=e.oxw().filter;e.xp6(1),e.Q6J("nzSuffix",c),e.xp6(1),e.Q6J("placeholder",y.placeholder)("ngModel",y.defaultValue)}}function wd(f,d){if(1&f){const c=e.EpF();e.TgZ(0,"nz-input-number-group",77)(1,"nz-input-number",78,71),e.NdJ("ngModelChange",function(re){e.CHM(c);const ht=e.oxw().filter;return e.KtG(ht.changes.next({key:ht.key,value:re}))}),e.qZA()()}if(2&f){const c=e.oxw().filter;e.xp6(1),e.Q6J("nzPlaceHolder",c.placeholder)("ngModel",c.defaultValue)("nzMin",1)("nzStep",1)}}function Po(f,d){if(1&f&&(e.YNc(0,Bp,6,3,"ng-container",50),e.YNc(1,wd,3,4,"ng-template",null,68,e.W1O)),2&f){const c=d.filter,y=e.MAs(2);e.Q6J("ngIf",void 0===c.inputType||"default"===c.inputType)("ngIfElse",y)}}const up=function(){return[6,6]};function hu(f,d){1&f&&(e.TgZ(0,"nz-row",79)(1,"nz-col")(2,"span"),e._uU(3,"Use checkboxes to select or deselect EIDs"),e.qZA()()()),2&f&&e.Q6J("nzGutter",e.DdM(1,up))}function e1(f,d){1&f&&(e.TgZ(0,"nz-tag",90),e._UZ(1,"i",91),e.TgZ(2,"span"),e._uU(3,"Loading\u2026"),e.qZA()())}const Pd=function(f){return{$implicit:f}};function fu(f,d){if(1&f&&(e.TgZ(0,"nz-tag",94),e._UZ(1,"span",95),e.TgZ(2,"span",96),e._uU(3),e.qZA()()),2&f){e.oxw();const c=e.MAs(4),y=e.oxw().ngrxLet;e.xp6(2),e.Q6J("nzTooltipTitle",c)("nzTooltipTitleContext",e.VKq(3,Pd,y.query)),e.xp6(1),e.hij(" Query Error",y.query.length>1?"s":""," ")}}function bl(f,d){if(1&f&&(e.TgZ(0,"nz-tag",94)(1,"span",96)(2,"span",97)(3,"strong"),e._uU(4),e.qZA()()()()),2&f){e.oxw();const c=e.MAs(4),y=e.oxw().ngrxLet;e.xp6(1),e.Q6J("nzTooltipTitle",c)("nzTooltipTitleContext",e.VKq(3,Pd,y.network)),e.xp6(3),e.hij(" Network Error",y.query.length>1?"s":""," ")}}function dp(f,d){if(1&f&&(e.TgZ(0,"div"),e._uU(1),e.qZA()),2&f){const c=d.$implicit;e.xp6(1),e.hij(" ",c.message," ")}}function El(f,d){1&f&&e.YNc(0,dp,2,1,"div",8),2&f&&e.Q6J("ngForOf",d.$implicit)}function pp(f,d){if(1&f&&(e.ynx(0),e.YNc(1,fu,4,5,"nz-tag",92),e.YNc(2,bl,5,5,"nz-tag",92),e.YNc(3,El,1,1,"ng-template",null,93,e.W1O),e.BQk()),2&f){const c=e.oxw().ngrxLet;e.xp6(1),e.Q6J("ngIf",c.query),e.xp6(1),e.Q6J("ngIf",c.network)}}function hp(f,d){if(1&f&&(e.ynx(0),e.YNc(1,pp,5,2,"ng-container",10),e.BQk()),2&f){const c=d.ngrxLet;e.xp6(1),e.Q6J("ngIf",c)}}function t1(f,d){if(1&f){const c=e.EpF();e.TgZ(0,"div",98)(1,"nz-checkbox-group",99),e.NdJ("ngModelChange",function(re){e.CHM(c);const ht=e.oxw(2);return e.KtG(ht.onPreferenceChange$.next(re))}),e.ALo(2,"ngrxPush"),e.qZA()()}if(2&f){const c=e.oxw(2);e.xp6(1),e.Q6J("ngModel",e.lcZ(2,1,c.setPreference$))}}function fp(f,d){if(1&f){const c=e.EpF();e.TgZ(0,"nz-row",79)(1,"nz-col",80),e.YNc(2,e1,4,0,"nz-tag",81),e.ALo(3,"ngrxPush"),e.ALo(4,"ngrxPush"),e._UZ(5,"cvc-no-more-rows",82),e.ALo(6,"ngrxPush"),e.qZA(),e.TgZ(7,"nz-col",80),e.YNc(8,hp,2,1,"ng-container",3),e.qZA(),e.TgZ(9,"nz-col",80),e._UZ(10,"cvc-table-counts",83),e.qZA(),e.TgZ(11,"nz-col",84)(12,"nz-button-group")(13,"button",85),e.NdJ("click",function(){e.CHM(c);const re=e.oxw();return e.KtG(re.onResetFilter$.next())}),e._UZ(14,"span",86),e.qZA(),e.TgZ(15,"button",87),e._UZ(16,"span",88),e.qZA()(),e.YNc(17,t1,3,3,"ng-template",null,89,e.W1O),e.qZA()()}if(2&f){const c=e.MAs(18),y=e.oxw();e.Q6J("nzGutter",8),e.xp6(2),e.Q6J("ngIf",e.lcZ(3,7,y.loading$)&&e.lcZ(4,9,y.isFetchMore$)),e.xp6(3),e.Q6J("cvcShowTag",e.lcZ(6,11,y.noMoreRows$)),e.xp6(3),e.Q6J("ngrxLet",y.queryError$),e.xp6(2),e.Q6J("cvcTableCountsConnection",y.connection$),e.xp6(5),e.Q6J("nzPopoverContent",c)("nzPopoverTrigger","click")}}const ro=function(){return[]},U1=function(){return{x:"800px",y:"200px"}};let jl=((kr=class{constructor(d,c,y){this.queryGQL=d,this.apollo=c,this.cdr=y,this.cvcSelectedIdsChange=new e.vpe,this.isScrolling=!1,this.colGuards=fl,this.onFetchMore$=new Je.x,this.onPreferenceChange$=new it.X([]),this.onResetFilter$=new Je.x,this.onRowSelected$=new Je.x,this.onScroll$=new it.X("stop"),this.onSetSelectedRow$=new it.X(new Set),this.queryError$=new Je.x,this.queryRequest$=new Je.x,this.queryResult$=new Wo.t(1),this.isFetchMore$=new it.X(!1),this.noMoreRows$=new it.X(!1),this.scrollToIndex$=new Je.x,this.tableConfig=new Bl;const re=(0,io.a)(this.tableConfig.getFilterStreams()),ht=(0,io.a)(this.tableConfig.getSortStreams()).pipe((0,Ge.h)(It=>It.filter(Mn=>null!==Mn.value).length<=1));this.refetch$=(0,io.a)([ht,re]).pipe((0,yt.U)(([It,Mn])=>({query:"refetch",sort:It,filter:Mn}))),this.fetchMore$=this.onFetchMore$.pipe((0,yt.U)(It=>({query:"fetchMore",fetchMore:{...It}}))),(0,dr.T)(this.refetch$,this.fetchMore$).pipe((0,Gi.b)(50),(0,Pe.t)(this)).subscribe(It=>{const Mn=this.getQueryVars(It);this.queryRef?(this.queryError$.next({}),"refetch"===It.query?(this.isFetchMore$.next(!1),this.queryRef.refetch(Mn).then(kn=>{(kn.error||kn.errors)&&this.queryError$.next(this.getRequestErrors(kn))}).then(()=>{this.scrollToIndex$.next(0)})):(this.isFetchMore$.next(!0),this.queryRef.fetchMore({variables:Mn}).then(kn=>{(kn.error||kn.errors)&&this.queryError$.next(this.getRequestErrors(kn))}))):(this.isFetchMore$.next(!1),this.queryError$.next({}),this.queryRef=this.queryGQL.watch(Mn),this.queryRef.valueChanges.pipe((0,Pe.t)(this)).subscribe(kn=>{this.queryResult$.next(kn),(kn.error||kn.errors)&&this.queryError$.next(this.getRequestErrors(kn))}))}),this.loading$=this.queryResult$.pipe((0,Ut.j)("loading"),(0,Io.x)()),this.connection$=this.queryResult$.pipe((0,Ut.j)("data","browseVariants"),(0,Ge.h)(Qn.ep)),this.pageInfo$=this.connection$.pipe((0,Ut.j)("pageInfo"),(0,Ge.h)(Qn.ep)),this.row$=(0,io.a)([this.connection$.pipe((0,Ut.j)("edges"),(0,Ge.h)(Qn.ep),(0,yt.U)(It=>It.map(Mn=>Mn.node))),this.onSetSelectedRow$]).pipe((0,yt.U)(([It,Mn])=>It.map(kn=>{if(kn)return{...kn,variant:{__typename:"Variant",id:kn.id,name:kn.name,link:kn.link},gene:{__typename:"Gene",id:kn.geneId,name:kn.geneName,link:kn.geneLink},selected:Mn.has(kn.id)}}))),this.col$=new it.X(this.tableConfig.get()),this.setPreference$=this.col$.pipe((0,yt.U)(It=>this.getColPrefsFromTableConfig(It))),this.onPreferenceChange$.pipe((0,tt.M)(this.col$),(0,yt.U)(([It,Mn])=>this.getTableConfigFromColPrefs(It,Mn)),(0,Pe.t)(this)).subscribe(It=>{this.col$.next(It)}),this.onSetTableFilter$=new it.X([]),this.onSetTableFilter$.pipe((0,Pe.t)(this)).subscribe(It=>{const Mn=this.col$.getValue();It.forEach(kn=>{const Uo=Mn.find(ji=>ji.key===kn.key);if(void 0!==Uo.filter.inputType){const ji=Uo.filter.options[0];if(null===kn.value)return Uo.filter.options=[{...ji,value:null}],void Uo.filter.changes.next(kn);if(Array.isArray(kn.value)&&0===kn.value.length)return Uo.filter.options=[{...ji,value:null}],void Uo.filter.changes.next({...kn,value:null});let es;Array.isArray(kn.value)?kn.value.length>0&&(es=kn.value[0]):es=kn.value;const Fu=Uo.filter.typename;if(!Fu||!es)return void console.error(`variant-manager requires column config '${Uo.key}' provide a typename for cvcTablePrefs Input to set its filter`);const eu=this.getEntityName(Fu,es);if(!eu)return;Uo.filter.options=[{...ji,value:eu}],Uo.filter.changes.next({...kn,value:eu})}else ml(Uo)&&Uo.filter.changes.next(kn)})}),this.onSetTablePref$=new it.X([]),this.onSetTablePref$.pipe((0,tt.M)(this.setPreference$),(0,yt.U)(([It,Mn])=>{const kn=[];return It.forEach(Uo=>{let ji=Mn.find(es=>es.value===Uo.value);ji?kn.push({...ji,...Uo}):console.warn(`variant-manager onSetTablePref$ received updated preferences for column '${Uo.value}', but a column with that key could not be found.`)}),kn}),(0,Pe.t)(this)).subscribe(It=>{this.onPreferenceChange$.next(It)}),this.onRowSelected$.pipe((0,tt.M)(this.onSetSelectedRow$),(0,Pe.t)(this)).subscribe(([It,Mn])=>{It.selected?Mn.add(It.id):Mn.delete(It.id),this.onSetSelectedRow$.next(Mn),this.cvcSelectedIdsChange.next(Array.from(Mn))}),this.onScroll$.pipe((0,yt.U)(It=>"stop"!==It),(0,Io.x)(),(0,Pe.t)(this)).subscribe(It=>{this.isScrolling=It,this.cdr.detectChanges()}),this.onScroll$.pipe((0,Ge.h)(It=>"bottom"===It),(0,tt.M)(this.pageInfo$),(0,yt.U)(([It,Mn])=>Mn),(0,Pe.t)(this)).subscribe(It=>{It.hasNextPage||(this.noMoreRows$.next(!0),this.cdr.detectChanges(),setInterval(()=>this.noMoreRows$.next(!1)))})}ngAfterViewInit(){this.onResetFilter$.pipe((0,tt.M)((0,uo.of)(this.tableConfig.get())),(0,Pe.t)(this)).subscribe(([d,c])=>{const y=[];c.forEach(re=>{if(Za(re)&&re.sort.changes&&re.sort.changes.next({key:re.key,value:re.sort.default??null}),ml(re)){const ht=re.filter.options.find(It=>1==It.byDefault)?.value;re.filter.changes&&re.filter.changes.next({key:re.key,value:ht||null})}y.push(re)}),this.col$.next(y)})}getQueryVars(d){const c=this.getQueryFilterParams(d);return{...this.getQuerySortParams(d),...c,...d.fetchMore}}getQuerySortParams(d){if(!d.sort)return;const y=d.sort.find(ht=>null!==ht.value);return y?{sortBy:{column:this.getSortColumnFromColKey(y.key),direction:"ascend"===y.value?bn.SrV.Asc:bn.SrV.Desc||void 0}}:void 0}getQueryFilterParams(d){let c={};return d.filter&&d.filter.forEach(y=>{c[Zu[y.key]||y.key]=null===y.value||""===y.value?void 0:y.value}),c}getRequestErrors(d){return{query:d.errors,network:d.error}}getTableConfigFromColPrefs(d,c){return c.forEach(y=>{if(_a.find(ht=>ht===y.key))return;const re=d.find(ht=>ht.value===y.key);re&&(y.hidden=!re?.checked)}),[...c]}getColPrefsFromTableConfig(d){let c=[];return d.forEach(y=>{_a.find(re=>re===y.key)||c.push({label:y.tooltip||y.label,value:y.key,checked:!y.hidden})}),c}getSortColumnFromColKey(d){return wc[d]}getEntityName(d,c){const y={id:`${d}:${c}`,fragment:Ki.Ps`
                fragment Linkable${d}Entity on ${d} {
                  id
                  name
                  link
                }`},re=this.apollo.client.readFragment(y);if(re)return re.name;console.error(`variant-manager onSetTableFilter$ could not find cached entity ${d}:${c} to populate input filter`)}trackByIndex(d,c){return c?.id}ngOnChanges(d){if(d.cvcTableSettings){const c=d.cvcTableSettings.currentValue;void 0!==c&&this.onSetTableFilter$.next(c.filters)}if(d.cvcSelectedIds){const c=d.cvcSelectedIds.currentValue,y=new Set;void 0!==c&&c.forEach(re=>y.add(re)),this.onSetSelectedRow$.next(y)}}}).\u0275fac=function(d){return new(d||kr)(e.Y36(bn.XQi),e.Y36(ci._M),e.Y36(e.sBO))},kr.\u0275cmp=e.Xpm({type:kr,selectors:[["cvc-variant-manager"]],inputs:{cvcTableSettings:"cvcTableSettings",cvcSelectedIds:"cvcSelectedIds"},outputs:{cvcSelectedIdsChange:"cvcSelectedIdsChange"},features:[e.TTD],decls:16,vars:27,consts:[["nzSize","small",3,"nzTitle","nzExtra"],["cvcTableScroller","",3,"nzData","cvcTableScrollerQueryRef","cvcTableScrollerPageInfo","cvcTableScrollerToIndex","nzScroll","nzVirtualForTrackBy","nzVirtualItemSize","nzSize","nzFrontPagination","nzShowPagination","nzLoading","cvcTableScrollerOnScroll","cvcTableScrollerOnFetch"],["virtualTable",""],[4,"ngrxLet"],["columnFilterInput",""],["cardTitle",""],["extraTemplate",""],[1,"col-header-row"],[4,"ngFor","ngForOf"],[1,"filter-row"],[4,"ngIf"],[3,"nzShowCheckbox","nzWidth","nzAlign","nzLeft","nzRight",4,"ngIf"],[3,"nzColumnKey","nzAlign","nzWidth","nzLeft","nzRight","nzShowSort","nzSortFn","nzSortOrder","nzSortOrderChange",4,"ngIf"],["nz-tooltip","",3,"nzColumnKey","nzAlign","nzWidth","nzLeft","nzRight","nzTooltipTitle",4,"ngIf"],[3,"nzShowCheckbox","nzWidth","nzAlign","nzLeft","nzRight"],[3,"nzColumnKey","nzAlign","nzWidth","nzLeft","nzRight","nzShowSort","nzSortFn","nzSortOrder","nzSortOrderChange"],["nz-tooltip","",1,"col-header-label",3,"nzTooltipTitle"],["nz-tooltip","",3,"nzColumnKey","nzAlign","nzWidth","nzLeft","nzRight","nzTooltipTitle"],[3,"nzColumnKey","nzAlign","nzWidth","nzLeft","nzRight",4,"ngIf"],[3,"nzColumnKey","nzWidth","nzAlign","nzLeft","nzRight",4,"ngIf"],["class","attribute-filter","nzCustomFilter","",3,"nzColumnKey","nzWidth","nzAlign","nzLeft","nzRight","nzShowSort","nzSortFn","nzSortOrder","nzShowFilter","nzFilterFn","nzSortOrderChange",4,"ngIf"],["class","attribute-filter","nzCustomFilter","",3,"nzColumnKey","nzWidth","nzAlign","nzLeft","nzRight","nzFilterFn",4,"ngIf"],[3,"nzColumnKey","nzAlign","nzWidth","nzLeft","nzRight"],[3,"nzColumnKey","nzWidth","nzAlign","nzLeft","nzRight"],[3,"cvcInputType","cvcPlaceholder","cvcModel","cvcModelChange",4,"ngIf"],[3,"cvcInputType","cvcPlaceholder","cvcModel","cvcModelChange"],["nzCustomFilter","",1,"attribute-filter",3,"nzColumnKey","nzWidth","nzAlign","nzLeft","nzRight","nzShowSort","nzSortFn","nzSortOrder","nzShowFilter","nzFilterFn","nzSortOrderChange"],["enumTableFilter",""],[3,"nzDropdownMenu","nzActive"],["enumTagFilterTrigger",""],["nz-icon","","nzType","filter","nzTheme","fill"],["enumFilterMenu","nzDropdownMenu"],[3,"cvcColumnKey","cvcFilterOptions","cvcOption","cvcOptionChange"],["nzCustomFilter","",1,"attribute-filter",3,"nzColumnKey","nzWidth","nzAlign","nzLeft","nzRight","nzFilterFn"],["nz-icon","","nzType","search"],["textTagFilterMenu","nzDropdownMenu"],[1,"ant-table-filter-dropdown"],[1,"custom-input-dropdown"],[3,"cvcPlaceholder","cvcModel","cvcModelChange"],[3,"cvcPlaceholder","cvcModel","cvcModelChange",4,"ngIf"],["nz-virtual-scroll",""],[1,"data-row"],[3,"nzChecked","nzAlign","nzLeft","nzRight","nzCheckedChange",4,"ngIf"],[3,"nzAlign","nzLeft","nzRight",4,"ngIf"],["class","default-col-type",3,"nzAlign","nzLeft","nzRight",4,"ngIf"],[3,"nzChecked","nzAlign","nzLeft","nzRight","nzCheckedChange"],[3,"nzAlign","nzLeft","nzRight"],["entityTagList",""],["entityTag",""],["emptyEntityTagCell",""],[4,"ngIf","ngIfElse"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"cvcTagTemplate","cvcTagListConfig"],[3,"cvcCollectionTagConfig","cvcTagTemplate","cvcShowFullLabels"],[3,"cvcTruncateLabel","cvcLinkableEntity","cvcEmphasize","cvcShowPopover","cvcStatus","cvcFullWidth"],[3,"cvcEmptyCategory"],["cvcContext","compact",3,"cvcFullWidth","cvcAttrValue","cvcTooltip",4,"ngIf","ngIfElse"],["emptyEnumTagCell",""],["cvcContext","compact",3,"cvcFullWidth","cvcAttrValue","cvcTooltip"],["nz-tooltip","","style","width: 100%; cursor: help; color: #595959",3,"nzTooltipTitle",4,"ngIf","ngIfElse"],["emptyTextTagCell",""],["nz-tooltip","",2,"width","100%","cursor","help","color","#595959",3,"nzTooltipTitle"],["nz-icon","","nzType","align-left","nzTheme","outline"],[1,"default-col-type",3,"nzAlign","nzLeft","nzRight"],["staticList",""],["staticValue",""],["emptyDefaultCell",""],[3,"innerHtml"],["numericInput",""],["nzSize","small",3,"nzSuffix"],["nz-input","",3,"placeholder","ngModel","nzFilterChange"],["filterInput",""],["suffixIcon",""],["nz-icon","","nzType","search","style","color: #ddd",4,"ngIf"],["nz-icon","","class","ant-input-clear-icon","nzTheme","fill","nzType","close-circle",3,"click",4,"ngIf"],["nz-icon","","nzType","search",2,"color","#ddd"],["nz-icon","","nzTheme","fill","nzType","close-circle",1,"ant-input-clear-icon",3,"click"],["nzSize","small"],[2,"width","100%",3,"nzPlaceHolder","ngModel","nzMin","nzStep","ngModelChange"],[3,"nzGutter"],["nzFlex","auto"],["nzColor","processing",4,"ngIf"],[3,"cvcShowTag"],[3,"cvcTableCountsConnection"],["nzFlex","35px"],["nz-button","","type","button","nzType","default","nzSize","small",3,"click"],["nz-icon","","nzType","retweet","nzTheme","outline"],["nz-button","","nz-popover","","nzPopoverTitle","Visible Columns","type","button","nzType","default","nzSize","small",3,"nzPopoverContent","nzPopoverTrigger"],["nz-icon","","nzType","setting","nzTheme","outline"],["prefsPopover",""],["nzColor","processing"],["nz-icon","","nzType","sync","nzSpin",""],["nzColor","error","style","margin-left: 12px",4,"ngIf"],["queryError",""],["nzColor","error",2,"margin-left","12px"],["nz-icon","","nzType","question-circle","nzTheme","outline"],["nz-tooltip","",2,"cursor","help",3,"nzTooltipTitle","nzTooltipTitleContext"],["nz-typography",""],[1,"prefs-popover"],[3,"ngModel","ngModelChange"]],template:function(d,c){if(1&d&&(e.TgZ(0,"nz-card",0)(1,"nz-table",1,2),e.NdJ("cvcTableScrollerOnScroll",function(re){return c.onScroll$.next(re)})("cvcTableScrollerOnFetch",function(re){return c.onFetchMore$.next(re)}),e.ALo(3,"ngrxPush"),e.ALo(4,"ngrxPush"),e.ALo(5,"ngrxPush"),e.ALo(6,"ngrxPush"),e.ALo(7,"ngrxPush"),e.YNc(8,Td,5,2,"thead",3),e.YNc(9,wi,2,0,"tbody",3),e.qZA()(),e.YNc(10,Po,3,2,"ng-template",null,4,e.W1O),e.YNc(12,hu,4,2,"ng-template",null,5,e.W1O),e.YNc(14,fp,19,13,"ng-template",null,6,e.W1O)),2&d){const y=e.MAs(13),re=e.MAs(15);e.Q6J("nzTitle",y)("nzExtra",re),e.xp6(1),e.Q6J("nzData",e.lcZ(3,15,c.row$)||e.DdM(25,ro))("cvcTableScrollerQueryRef",c.queryRef)("cvcTableScrollerPageInfo",e.lcZ(4,17,c.pageInfo$))("cvcTableScrollerToIndex",e.lcZ(5,19,c.scrollToIndex$))("nzScroll",e.DdM(26,U1))("nzVirtualForTrackBy",c.trackByIndex)("nzVirtualItemSize",28)("nzSize","small")("nzFrontPagination",!1)("nzShowPagination",!1)("nzLoading",e.lcZ(6,21,c.loading$)&&!e.lcZ(7,23,c.isFetchMore$)),e.xp6(7),e.Q6J("ngrxLet",c.col$),e.xp6(1),e.Q6J("ngrxLet",c.col$)}},dependencies:[E.sg,E.O5,E.tP,Tt.J,xe,Sn,Qe,ii,Vt.P,ho.H,t.Fj,t.JJ,t.On,I.eJ,Yn.ix,Yn.fY,pn.w,ln.dQ,w.t3,w.SK,_t.Ls,Ae.Zp,Ae.gB,Ae.ke,de.ZU,Go.bd,kt.ub,Ii.RR,Bi._V,Bi.Rb,co.lU,Oo.N8,Oo.qD,Oo.Uo,Oo._C,Oo.h7,Oo.Om,Oo.p0,Oo.$Z,Oo.zu,Oo.qn,Oo.Ql,Oo.UX,Oo.g6,Yt.j,At.SY,Us,vl,Ca,Qi,j.Do,P.A,Xi,I.fM],styles:["[_nghost-%COMP%]{display:block}nz-card[_ngcontent-%COMP%]:first-of-type     .ant-card-body{padding:0;margin-top:1px}.table-info[_ngcontent-%COMP%]{margin-left:.5rem}tr.col-header-row[_ngcontent-%COMP%]   th.ant-table-cell[_ngcontent-%COMP%]{white-space:nowrap}tr.col-header-row[_ngcontent-%COMP%]   th.ant-table-cell.align-right[_ngcontent-%COMP%]     .ant-table-column-title{text-align:right}tr.filter-row[_ngcontent-%COMP%]   th.ant-table-cell[_ngcontent-%COMP%]{padding:3px 4px}tr.filter-row[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   nz-filter-trigger[_ngcontent-%COMP%]     span.ant-dropdown-trigger{margin-left:0;padding-right:12px}tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell[_ngcontent-%COMP%]{white-space:nowrap}tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell[_ngcontent-%COMP%]   .anticon.attribute-icon[_ngcontent-%COMP%]{color:#595959}tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell.overflow-ellipsis[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis}tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell.button-cell[_ngcontent-%COMP%]{padding:0}tr.data-row[_ngcontent-%COMP%]   td.align-right[_ngcontent-%COMP%], tr.col-header-row[_ngcontent-%COMP%]   th.ant-table-cell[_ngcontent-%COMP%]   .align-right[_ngcontent-%COMP%], tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell[_ngcontent-%COMP%]   .align-right[_ngcontent-%COMP%], tr.filter-row[_ngcontent-%COMP%]   th.ant-table-cell[_ngcontent-%COMP%]   .align-right[_ngcontent-%COMP%]{text-align:right}tr.data-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-of-type{padding-left:6px}tr.data-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-of-type   cvc-entity-tag[_ngcontent-%COMP%]{margin-left:6px}td.default-col-type[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis}.ant-table-filter-dropdown[_ngcontent-%COMP%]{padding:8px}.prefs-popover[_ngcontent-%COMP%]     nz-checkbox-group:first-of-type label{display:block}.prefs-popover[_ngcontent-%COMP%]     nz-checkbox-group:first-of-type label span{display:inline-block}"],changeDetection:0}),kr);var Bc;function mu(f,d){if(1&f&&(e.ynx(0),e.TgZ(1,"span"),e._uU(2),e.qZA(),e.BQk()),2&f){const c=d.ngrxLet;e.xp6(2),e.Oqu(c.message)}}function Sl(f,d){if(1&f&&e._uU(0),2&f){const c=e.oxw();e.Oqu(c.successMessage)}}jl=(0,Te.gn)([(0,Pe.c)()],jl);const Id=function(){return[0,0]};let gu=((Bc=class{set cvcGeneId(d){d&&this.geneId$.next(d)}set cvcGeneName(d){d&&this.geneName$.next(d)}set cvcSearchString(d){d&&this.searchString$.next(d)}constructor(d,c){this.query=d,this.errors=c,this.cvcOnCreate=new e.vpe,this.form=new t.nJ({}),this.model={name:""},this.formLayout="horizontal",this.options={formState:{formLayout:this.formLayout}},this.onSubmit$=new Je.x,this.searchString$=new it.X(void 0),this.geneName$=new it.X(void 0),this.geneId$=new it.X(void 0),this.formMessageDisplay$=new it.X({message:"Variant does not exist, create it?"}),this.queryMutator=new Nt.U(this.errors),this.addVariantMutator=new Nt.U(this.errors),this.minNameLength=3,this.fields=[{key:"geneId",hide:!0,props:{required:!0}},{key:"name",hide:!0,props:{minLength:this.minNameLength,required:!0}}],this.geneId$.pipe((0,Pe.t)(this)).subscribe(y=>{this.model.geneId=y}),this.searchString$.pipe((0,Pe.t)(this)).subscribe(y=>{this.model.name=y,this.formMessageDisplay$.next(void 0!==y&&y.length<this.minNameLength?{message:`New Variant name must be at least ${this.minNameLength} characters.`}:{message:"Variant does not exist, create it?"})}),this.onSubmit$.pipe((0,Pe.t)(this)).subscribe(y=>{console.log("variant-quick-add form model submitted.",y),this.submitVariant(y)})}submitVariant(d){d.name&&d.geneId?this.mutationState=this.addVariantMutator.mutate(this.query,{name:d.name,geneId:d.geneId},{},c=>{console.log("variant-quick-add submit data callback",c),c.addVariant&&(this.formMessageDisplay$.next({message:void 0}),setTimeout(()=>{c&&c.addVariant&&this.cvcOnCreate.next(c.addVariant.variant.id)},1e3))}):console.error("variant-quick-add form submitVariant requires model with valid name and geneId.")}ngOnChanges(d){if(d.cvcGeneId){const c=d.cvcGeneId.currentValue;this.geneId$.next(c),this.model={...this.model,geneId:c}}d.cvcGeneName&&this.geneName$.next(d.cvcGeneName.currentValue),d.cvcSearchString&&(this.model={...this.model,name:d.cvcSearchString.currentValue})}}).\u0275fac=function(d){return new(d||Bc)(e.Y36(bn.MCG),e.Y36(Gt.Y))},Bc.\u0275cmp=e.Xpm({type:Bc,selectors:[["cvc-variant-quick-add-form"]],inputs:{cvcGeneId:"cvcGeneId",cvcGeneName:"cvcGeneName",cvcSearchString:"cvcSearchString"},outputs:{cvcOnCreate:"cvcOnCreate"},features:[e.TTD],decls:18,vars:17,consts:[[4,"ngrxLet"],["entityType","Variant",3,"mutationState","successMessage"],["success",""],[3,"formGroup","ngSubmit"],[3,"nzGutter"],["nzSpan","24"],[3,"form","fields","model","options","modelChange"],["nz-button","","nzType","primary","nzBlock","",3,"disabled"]],template:function(d,c){if(1&d&&(e.YNc(0,mu,3,1,"ng-container",0),e.TgZ(1,"cvc-form-submission-status-display",1),e.YNc(2,Sl,1,1,"ng-template",null,2,e.W1O),e.TgZ(4,"form",3),e.NdJ("ngSubmit",function(){return c.onSubmit$.next(c.model)}),e.TgZ(5,"nz-row",4)(6,"nz-col",5)(7,"formly-form",6),e.NdJ("modelChange",function(re){return c.model=re}),e.qZA()(),e.TgZ(8,"nz-col",5)(9,"button",7),e._uU(10," Add\xa0 "),e.TgZ(11,"strong"),e._uU(12),e.ALo(13,"ngrxPush"),e.qZA(),e._uU(14," \xa0Variant\xa0"),e.TgZ(15,"i"),e._uU(16),e.ALo(17,"ngrxPush"),e.qZA()()()()()()),2&d){const y=e.MAs(3);e.Q6J("ngrxLet",c.formMessageDisplay$),e.xp6(1),e.Q6J("mutationState",c.mutationState)("successMessage",y),e.xp6(3),e.Q6J("formGroup",c.form),e.xp6(1),e.Q6J("nzGutter",e.DdM(16,Id)),e.xp6(2),e.Q6J("form",c.form)("fields",c.fields)("model",c.model)("options",c.options),e.xp6(2),e.Q6J("disabled",!c.form.valid),e.xp6(3),e.Oqu(e.lcZ(13,12,c.geneName$)),e.xp6(4),e.Oqu(e.lcZ(17,14,c.searchString$))}},dependencies:[gn.F,g.T7,t._Y,t.JL,I.eJ,Yn.ix,pn.w,ln.dQ,w.t3,w.SK,t.sg,I.fM],encapsulation:2,changeDetection:0}),Bc);gu=(0,Te.gn)([(0,Pe.c)()],gu);const Ta=["optionTemplates"],Hp=function(f,d){return{show:f,hide:d}};function Ad(f,d){if(1&f){const c=e.EpF();e.TgZ(0,"nz-col",9)(1,"button",10),e.NdJ("click",function(){e.CHM(c);const re=e.oxw();return e.KtG(re.onShowMgrClick$.next())}),e._UZ(2,"span",11),e.ALo(3,"ngrxPush"),e.ALo(4,"ngrxPush"),e._uU(5," Manager "),e.qZA()()}if(2&f){const c=e.oxw();e.xp6(2),e.Q6J("ngClass",e.WLB(6,Hp,e.lcZ(3,2,c.showMgr$),!e.lcZ(4,4,c.showMgr$)))("nzType","caret-right")}}function xl(f,d){if(1&f){const c=e.EpF();e.TgZ(0,"nz-col",12)(1,"cvc-variant-manager",13),e.NdJ("cvcSelectedIdsChange",function(re){e.CHM(c);const ht=e.oxw();return e.KtG(ht.onPopulate$.next(re))}),e.ALo(2,"ngrxPush"),e.qZA()()}if(2&f){const c=e.oxw();e.xp6(1),e.Q6J("cvcSelectedIds",e.lcZ(2,1,c.onVid$))}}function vs(f,d){if(1&f&&(e.ynx(0),e.TgZ(1,"em"),e._UZ(2,"span",20),e.ALo(3,"highlightTypeahead"),e.qZA(),e.BQk()),2&f){const c=e.oxw(2).$implicit,y=e.oxw().ngrxLet;e.xp6(2),e.Q6J("nzTooltipTitle",c.variantAliases.join(", "))("innerHtml",e.xi3(3,2,c.variantAliases.join(", "),y),e.oJD)}}function Fd(f,d){1&f&&e._uU(0,"--")}function Nd(f,d){if(1&f&&(e._UZ(0,"cvc-entity-tag",16),e.TgZ(1,"span",17)(2,"strong"),e._uU(3,"Aliases:"),e.qZA(),e.YNc(4,vs,4,5,"ng-container",18),e.YNc(5,Fd,1,0,"ng-template",null,19,e.W1O),e.qZA()),2&f){const c=e.MAs(6),y=e.oxw().$implicit,re=e.oxw().ngrxLet;e.Q6J("cvcDisableLink",!0)("cvcCacheId",y.__typename+":"+y.id)("cvcEmphasize",re),e.xp6(4),e.Q6J("ngIf",y.variantAliases.length>0)("ngIfElse",c)}}function Yp(f,d){1&f&&(e.ynx(0),e.YNc(1,Nd,7,5,"ng-template",null,15,e.W1O),e.BQk())}function $p(f,d){if(1&f&&(e.ynx(0),e.YNc(1,Yp,3,0,"ng-container",14),e.ALo(2,"ngrxPush"),e.BQk()),2&f){const c=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,c.result$))}}function mp(f,d){if(1&f){const c=e.EpF();e.TgZ(0,"div",21)(1,"cvc-entity-tag",22),e.NdJ("cvcOnClose",function(){const ht=e.CHM(c).$implicit,It=e.oxw();return e.KtG(It.onTagClose$.next(ht.nzValue))}),e.qZA()()}if(2&f){const c=d.$implicit,y=e.oxw();e.xp6(1),e.Q6J("cvcCacheId","Variant:"+c.nzValue)("cvcContext",y.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",y.props.isMultiSelect?"default":"closeable")}}function Gl(f,d){if(1&f){const c=e.EpF();e.TgZ(0,"cvc-variant-quick-add-form",23),e.NdJ("cvcOnCreate",function(re){e.CHM(c);const ht=e.oxw();return e.KtG(ht.onPopulate$.next(re))}),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.qZA()}if(2&f){const c=d.$implicit,y=e.oxw();e.Q6J("cvcSearchString",c)("cvcGeneId",e.lcZ(1,3,y.onGeneId$))("cvcGeneName",e.lcZ(2,5,y.onGeneName$))}}const Up=function(){return[6,6]},jp=jt($t(),yo());class qa extends jp{constructor(d,c,y,re){super(),this.taq=d,this.tq=c,this.geneQuery=y,this.changeDetectorRef=re,this.onModel$=new Lo.y,this.defaultOptions={props:{label:"Variant",placeholder:"Search Variants",requireGene:!0,requireGenePlaceholderFn:ht=>`Search ${ht} Variants`,requireGenePrompt:"Select a Gene to search its Variants",isMultiSelect:!1,entityName:{singular:"Variant",plural:"Variants"},showManagerBtn:!1}},this.onGeneName$=new it.X(void 0),this.onVid$=new Wo.t,this.onShowMgrClick$=new Je.x,this.showMgr$=this.onShowMgrClick$.pipe((0,pi.R)((ht,It)=>!ht,!1))}ngAfterViewInit(){this.configureBaseField(),this.configureEntitySelectField({typeaheadQuery:this.taq,tagQuery:this.tq,getTypeaheadVarsFn:this.getTypeaheadVarsFn,getTypeaheadResultsFn:this.getTypeaheadResultsFn,getTagQueryVarsFn:this.getTagQueryVarsFn,getTagQueryResultsFn:this.getTagQueryResultsFn,getSelectedItemOptionFn:this.getSelectedItemOptionFn,getSelectOptionsFn:this.getSelectOptionsFn,changeDetectorRef:this.changeDetectorRef,selectOpen$:this.selectOpen$,selectComponent:this.selectComponent}),this.state&&this.state.formReady$?this.state.formReady$.pipe((0,Ge.h)(d=>d),(0,Do.q)(1),(0,Pe.t)(this)).subscribe(d=>{this.configureField()}):this.configureField()}configureField(){this.configureStateConnections(),this.onVid$.pipe((0,Pe.t)(this)).subscribe(),this.onVid$.next(this.formControl.value),this.onModel$=(0,io.a)([this.onGeneId$,this.onSearch$]).pipe((0,yt.U)(([d,c])=>({geneId:d,name:c}))),this.onValueChange$.pipe((0,tt.M)(this.onVid$),(0,Pe.t)(this)).subscribe(([d,c])=>{Array.isArray(d)&&this.onVid$.next(d)})}configureStateConnections(){if(this.state&&this.props.requireGene){if(!this.state?.fields.geneId$)return void console.error(`${this.field.id} requireGene is set, but no geneId$ subject found on state.`);this.onGeneId$=this.state.fields.geneId$,this.onGeneId$.pipe((0,Pe.t)(this)).subscribe(d=>{this.onGeneId(d)})}}getTypeaheadVarsFn(d){return{name:d,geneId:this.selectedGeneId}}getTypeaheadResultsFn(d){return d.data.variants.nodes}getTagQueryVarsFn(d){return{variantId:d}}getTagQueryResultsFn(d){return d.data.variant}getSelectedItemOptionFn(d){return{value:d.id,label:d.name}}getSelectOptionsFn(d,c){return d.map((y,re)=>({label:c.get(re)||y.name,value:y.id}))}onGeneId(d){this.selectedGeneId=d,!d&&this.props.requireGene?(this.resetField(),this.props.description=this.props.requireGenePrompt,this.props.placeholder="Select a Variant",this.props.extraType="prompt",this.onGeneName$.next(void 0)):d&&(this.props.description=void 0,this.props.extraType=void 0,va(this.geneQuery.fetch({geneId:d},{fetchPolicy:"cache-first"})).then(({data:c})=>{c?.gene?.name?(this.props.placeholder=this.props.requireGene?this.props.requireGenePlaceholderFn(c.gene.name):this.props.placeholder,this.onGeneName$.next(c.gene.name)):console.error(`${this.field.id} could not fetch gene name for Gene:${d}.`)}))}}qa.\u0275fac=function(d){return new(d||qa)(e.Y36(bn.nSb),e.Y36(bn.dDn),e.Y36(bn.DzV),e.Y36(e.sBO))},qa.\u0275cmp=e.Xpm({type:qa,selectors:[["ng-component"]],viewQuery:function(d,c){if(1&d&&e.Gf(Ta,5,e.Rgc),2&d){let y;e.iGM(y=e.CRH())&&(c.optionTemplates=y)}},features:[e.qOj],decls:20,vars:39,consts:[[3,"nzGutter"],["nzFlex","auto"],["nz-tooltip","","nzTooltipTitle","Select a Gene to enable field.",3,"nzTooltipTrigger"],[3,"cvcAddEntity","cvcAddEntityModel","cvcSelectMode","cvcCustomTemplate","cvcFormControl","cvcFormlyAttributes","cvcEntityName","cvcPlaceholder","cvcResults","cvcDisabled","cvcOptions","cvcSelectOpen","cvcShowError","cvcLoading","cvcParamName","cvcOnSearch","cvcOnOpenChange","cvcOnModelChange"],["nzFlex","50px",4,"ngIf"],["nzSpan","24","class","manager-drawer",4,"ngIf"],[4,"ngrxLet"],["selectedTemplate",""],["addVariant",""],["nzFlex","50px"],["type","button","nz-button","","nzBlock","",1,"manager-button",3,"click"],["nz-icon","",3,"ngClass","nzType"],["nzSpan","24",1,"manager-drawer"],[3,"cvcSelectedIds","cvcSelectedIdsChange"],[4,"ngFor","ngForOf"],["optionTemplates",""],[3,"cvcDisableLink","cvcCacheId","cvcEmphasize"],["nz-typography","","nzType","secondary"],[4,"ngIf","ngIfElse"],["noAliases",""],["nz-typography","","nzType","secondary","nz-tooltip","",3,"nzTooltipTitle","innerHtml"],[1,"ant-select-selection-item-content"],[3,"cvcCacheId","cvcContext","cvcMode","cvcOnClose"],[3,"cvcSearchString","cvcGeneId","cvcGeneName","cvcOnCreate"]],template:function(d,c){if(1&d&&(e.TgZ(0,"nz-row",0)(1,"nz-col",1)(2,"span",2),e.ALo(3,"ngrxPush"),e.TgZ(4,"cvc-entity-select",3),e.NdJ("cvcOnSearch",function(re){return c.onSearch$.next(re)})("cvcOnOpenChange",function(re){return c.onOpenChange$.next(re)})("cvcOnModelChange",function(re){return c.props.change&&c.props.change(c.field,re)}),e.ALo(5,"ngrxPush"),e.ALo(6,"ngrxPush"),e.ALo(7,"ngrxPush"),e.ALo(8,"ngrxPush"),e.ALo(9,"ngrxPush"),e.ALo(10,"ngrxPush"),e.ALo(11,"ngrxPush"),e.qZA()()(),e.YNc(12,Ad,6,9,"nz-col",4),e.YNc(13,xl,3,3,"nz-col",5),e.ALo(14,"ngrxPush"),e.qZA(),e.YNc(15,$p,3,3,"ng-container",6),e.YNc(16,mp,2,3,"ng-template",null,7,e.W1O),e.YNc(18,Gl,3,7,"ng-template",null,8,e.W1O)),2&d){const y=e.MAs(17),re=e.MAs(19);e.Q6J("nzGutter",e.DdM(38,Up)),e.xp6(2),e.Q6J("nzTooltipTrigger",c.props.requireGene&&!e.lcZ(3,20,c.onGeneId$)?"hover":null),e.xp6(2),e.Q6J("cvcAddEntity",re)("cvcAddEntityModel",e.lcZ(5,22,c.onModel$))("cvcSelectMode",c.props.isMultiSelect?"multiple":"default")("cvcCustomTemplate",y)("cvcFormControl",c.formControl)("cvcFormlyAttributes",c.field)("cvcEntityName",c.props.entityName)("cvcPlaceholder",c.props.placeholder)("cvcResults",e.lcZ(6,24,c.result$))("cvcDisabled",c.props.requireGene&&!e.lcZ(7,26,c.onGeneId$))("cvcOptions",e.lcZ(8,28,c.selectOption$))("cvcSelectOpen",e.lcZ(9,30,c.selectOpen$))("cvcShowError",c.showError)("cvcLoading",e.lcZ(10,32,c.isLoading$))("cvcParamName",e.lcZ(11,34,c.onGeneName$)),e.xp6(8),e.Q6J("ngIf",c.props.showManagerBtn),e.xp6(1),e.Q6J("ngIf",e.lcZ(14,36,c.showMgr$)),e.xp6(2),e.Q6J("ngrxLet",c.onSearch$)}},dependencies:[E.mk,E.sg,E.O5,Ue,Tt.J,I.eJ,Yn.ix,pn.w,ln.dQ,w.t3,w.SK,_t.Ls,de.ZU,At.SY,jl,gu,P.A,I.fM],styles:[".typeahead-match[_ngcontent-%COMP%]{font-weight:700}  nz-input-group{border-color:#d9d9d9!important}"],changeDetection:0});const j1={types:[{name:"variant-select",wrappers:["form-field"],component:qa},{name:"variant-multi-select",wrappers:["form-field"],component:qa,defaultOptions:{props:{label:"Variants",isMultiSelect:!0}}}]};class Xa{}Xa.\u0275fac=function(d){return new(d||Xa)},Xa.\u0275mod=e.oAB({type:Xa}),Xa.\u0275inj=e.cJS({imports:[E.ez,jn,Zt.x,lt,Un.g,xt.s,Ro,Yi,Ye,Es,iu.M,Ao.y,g.X0.forChild(j1),t.u5,I._N,xn.L,rt.ic,Yn.sL,s.U5,w.Jb,_t.PV,Ae.o7,Bn.Qp,Ze.LV,de.ZJ,Yn.sL,Go.vh,kt.Wr,Ii.b1,s.U5,w.Jb,_t.PV,Ae.o7,Bi.Zf,co.$6,Oo.HQ,Yt.X,At.cg,de.ZJ,I.pP,t.UX]});var Ld=a(3309),xr=a(6152),n1=a(2539);const Gp=/\(/g,gp=/\)/g,Ma=/AND|OR/i,vp=/^(?<not>NOT\s)?\s*#VID(?<variantId>\d+)$/i,Dl=/\s+/;function kd(f){return G1(f.replace(Gp," ( ").replace(gp," ) "))}function G1(f){let c,d=f.split(Dl),y=0,re=[],ht=[],It=[];for(let ys of d)if("("==ys)0!=y&&re.push(ys),y+=1;else if(")"==ys)if(y-=1,0==y){let Qs=G1(re.join(" "));if("errorMessage"in Qs)return Qs;It.push(Qs),ht.push("EXPR"),re=[]}else re.push(ys);else y>0?re.push(ys):ht.push(ys);const Mn={errorType:"trailingBoolean",errorMessage:"Expressions may not end with AND / OR boolean operators."},kn={errorType:"initialBoolean",errorMessage:"Expressions may not start with AND / OR boolean operators."},Uo={errorType:"multipleBoolean",errorMessage:"Multiple boolean operators found."},ji={errorType:"incompleteExpression",errorMessage:"Ensure that parenthetical clauses are closed."};let es=0;for(let ys of ht){let Qs=Ma.test(ys);if(Qs&&0==es)return kn;if(Qs&&es===d.length-1)return Mn;if(Qs&&!c)c=Rd(ys);else if(Qs&&c&&Rd(ys)!==c)return Uo;es++}let Fu=[],eu=ht.join(" ").split(Ma);for(let ys of eu.map(Qs=>Qs.trim())){let Qs=vp.exec(ys);if(null===Qs){if(0===ys.length)return ji;if("NOT"===ys||"NOT"===ys.split(" ").pop())return{errorType:"incompleteNOT",errorMessage:"NOT operator must be followed by a valid #VID."};if("EXPR"!==ys)return{errorType:"invalidToken",errorMessage:`Token '${ys}' does not match the expected format.`}}else Fu.push({not:!!Qs[1],variantId:parseInt(Qs[2])})}return{booleanOperator:c,variantComponents:Fu,complexComponents:It}}function Rd(f){return"AND"==f.toUpperCase()?bn._Wm.And:bn._Wm.Or}var yu,Qp=a(7230);class Ql{constructor(d){this.apollo=d,this.cvcOnSelect=new e.vpe,this.cvcOnVariantSelect=new e.vpe,this.modelChange$=new it.X(void 0),this.layout="horizontal",this.finderState={formLayout:this.layout,fields:{geneId$:new it.X(void 0),variantId$:new it.X(void 0),variantMolecularProfile$:new it.X(void 0)}},this.form=new t.nJ({}),this.model={geneId:void 0,variantId:void 0},this.options={formState:this.finderState},this.config=[{wrappers:["field-grid"],props:{grid:{cols:2}},fieldGroup:[{key:"geneId",type:"gene-select",props:{placeholder:"Select MP Gene",hideLabel:!0,layout:{showExtra:!1}}},{key:"variantId",type:"variant-select",props:{placeholder:"Select MP Variant",requireGene:!0,layout:{showExtra:!1},hideLabel:!0}}]}]}modelChange(d){if(!d?.variantId)return;const c=this.getSelectedVariant(d.variantId);c&&(this.model={geneId:void 0,variantId:void 0},this.cvcOnSelect.next(c.singleVariantMolecularProfile),this.cvcOnVariantSelect.next(c))}getSelectedVariant(d){if(!d)return;const c={id:`Variant:${d}`,fragment:ci.Ps`
        fragment VariantSelectQuery on Variant {
          id
          name
          link
          variantAliases
          singleVariantMolecularProfileId
          singleVariantMolecularProfile {
            id
            name
            link
            molecularProfileAliases
          }
        }
      `};let y;try{y=this.apollo.client.readFragment(c)}catch(re){console.error(re)}if(y)return y;console.error("MpFinderForm could not resolve its Variant from the cache")}}function Q1(f,d){1&f&&(e.ynx(0),e.TgZ(1,"p"),e._uU(2," The expression contains open parentheses. Please ensure that all parenthetical expressions are closed. "),e.qZA(),e.BQk())}function _p(f,d){1&f&&(e.ynx(0),e.TgZ(1,"p"),e._uU(2," Complete the expression by appending a "),e.TgZ(3,"strong"),e._uU(4,"#VID"),e.qZA(),e._uU(5," token to the incomplete boolean expression. "),e.qZA(),e.BQk())}function _u(f,d){1&f&&(e.ynx(0),e.TgZ(1,"p"),e._uU(2," MP Expressions may not begin with an "),e.TgZ(3,"strong"),e._uU(4,"AND"),e.qZA(),e._uU(5," or "),e.TgZ(6,"strong"),e._uU(7,"OR"),e.qZA(),e._uU(8," boolean. Ensure the expression begins with a "),e.TgZ(9,"strong"),e._uU(10,"#VID"),e.qZA(),e._uU(11," or "),e.TgZ(12,"strong"),e._uU(13,"NOT #VID"),e.qZA(),e._uU(14," token. "),e.qZA(),e.BQk())}function Vd(f,d){1&f&&(e.ynx(0),e.TgZ(1,"p"),e._uU(2," Molecular Profile expressions use a simple domain-specific language to specify complex MPs using boolean expressions to combine variants. These expressions may contain: "),e.qZA(),e.TgZ(3,"ul")(4,"li"),e._uU(5," Variant Tokens - "),e.TgZ(6,"strong"),e._uU(7,"#VID"),e.qZA(),e._uU(8," or "),e.TgZ(9,"strong"),e._uU(10,"NOT #VID"),e.qZA(),e._uU(11,'followed by a valid Variant ID, e.g. "#VID123" '),e.qZA(),e.TgZ(12,"li"),e._uU(13,"Boolean Tokens - "),e.TgZ(14,"strong"),e._uU(15,"AND"),e.qZA(),e._uU(16,", "),e.TgZ(17,"strong"),e._uU(18,"OR"),e.qZA()(),e.TgZ(19,"li"),e._uU(20," Parentheses - "),e.TgZ(21,"strong"),e._uU(22,"("),e.qZA(),e._uU(23," or "),e.TgZ(24,"strong"),e._uU(25,")"),e.qZA(),e._uU(26,", for grouping tokens into nested expressions "),e.qZA()(),e.TgZ(27,"p")(28,"strong"),e._uU(29,"Invalid Token"),e.qZA(),e._uU(30," errors occur if the parser encounters any text or token that does not match those listed above. "),e.qZA(),e.BQk())}function yp(f,d){1&f&&(e.ynx(0),e.TgZ(1,"p"),e._uU(2," A single expression may not include more than one "),e.TgZ(3,"strong"),e._uU(4,"AND"),e.qZA(),e._uU(5," or "),e.TgZ(6,"strong"),e._uU(7,"OR"),e.qZA(),e._uU(8," boolean operator. To construct complex expressions, use parentheses. "),e.qZA(),e.TgZ(9,"p"),e._uU(10," For example, the expression "),e.TgZ(11,"strong"),e._uU(12,"#VID12 AND #VID2220 OR #VID456"),e.qZA(),e._uU(13," is invalid, but the expression "),e.TgZ(14,"strong"),e._uU(15,"#VID12 AND (#VID2220 OR #VID456)"),e.qZA(),e._uU(16," is valid. The parentheses create a nested expression independent of the outer expression. "),e.qZA(),e.BQk())}function W1(f,d){1&f&&(e.ynx(0),e.TgZ(1,"p"),e._uU(2," Complete the expression by appending a "),e.TgZ(3,"strong"),e._uU(4,"#VID"),e.qZA(),e._uU(5," token to the incomplete boolean expression. "),e.qZA(),e.BQk())}function Wl(f,d){1&f&&(e.ynx(0),e.TgZ(1,"p"),e._uU(2," The expression contains a Variant ID that cannot be matched to any Variant in the CIViC database. Please re-check the Variant ID, or create a new one by following these steps: "),e.qZA(),e.TgZ(3,"ol")(4,"li"),e._uU(5,"click the 'Variant' button,"),e.qZA(),e.TgZ(6,"li"),e._uU(7,"enter a Gene name, then select a Gene"),e.qZA(),e.TgZ(8,"li"),e._uU(9,"enter the Variant name"),e.qZA(),e.TgZ(10,"li"),e._uU(11," click the 'Create Variant' button that will appear if name does not match any CIViC Variants "),e.qZA()(),e.BQk())}function Z1(f,d){1&f&&(e.ynx(0),e.TgZ(1,"p"),e._uU(2," An expression may not contain multiple instances of the same Variant. Either remove the variant or change the expression. For example, "),e.TgZ(3,"strong"),e._uU(4,"(#VID123 AND #VID456) OR (#VID123 AND #VID789)"),e.qZA(),e._uU(5,", which is invalid, is logically identical to the valid MP expression "),e.TgZ(6,"strong"),e._uU(7,"#VID123 AND (#VID456 OR #VID789)"),e.qZA(),e._uU(8,". "),e.qZA(),e.BQk())}function Cp(f,d){1&f&&(e.ynx(0),e.TgZ(1,"p"),e._uU(2," The Molecular Profile editor allows the selection or creation of complex Molecular Profiles by writing Molecular Profile Expressions. These expressions are composed with a simple language consisting of Variant tokens, boolean operators, and parentheses. For example: "),e.qZA(),e.TgZ(3,"blockquote")(4,"strong"),e._uU(5,"#VID12 AND #VID2220"),e.qZA(),e._UZ(6,"br"),e.TgZ(7,"strong"),e._uU(8,"#VID12 OR #VID2220"),e.qZA(),e._UZ(9,"br"),e.TgZ(10,"strong"),e._uU(11,"#VID12 AND NOT #VID2220"),e.qZA(),e._UZ(12,"br"),e.TgZ(13,"strong"),e._uU(14,"#VID12 AND #VID2220 AND (#VID456 OR #VID123)"),e.qZA(),e._UZ(15,"br"),e.TgZ(16,"strong"),e._uU(17,"#VID12 OR #VID2220 OR (NOT #VID456 AND #VID123)"),e.qZA(),e._UZ(18,"br"),e.qZA(),e.TgZ(19,"p")(20,"strong"),e._uU(21,"Variant Tokens"),e.qZA(),e._UZ(22,"br"),e._uU(23," Variant tokens are composed of a CIViC Variant ID prepended with "),e.TgZ(24,"strong"),e._uU(25,"#VID"),e.qZA(),e._uU(26,", and refer to specific CIViC Variants. For example, "),e.TgZ(27,"strong"),e._uU(28,"#VID12"),e.qZA(),e._uU(29," refers to "),e.TgZ(30,"strong"),e._uU(31,"BRAF V600E"),e.qZA(),e._uU(32,"; "),e.TgZ(33,"strong"),e._uU(34,"#VID2220"),e.qZA(),e._uU(35," refers to "),e.TgZ(36,"strong"),e._uU(37,"ALK FUSION"),e.qZA(),e._uU(38,". If you don\u2019t know the CIViC ID of a Variant, you can search for Variants by name using the \u2018Variant\u2019 or \u2018NOT Variant\u2019 buttons below. These interfaces can also be used to add a Variant that\u2019s not yet in CIViC. "),e.qZA(),e.TgZ(39,"p")(40,"strong"),e._uU(41,"Boolean Operators"),e.qZA(),e._UZ(42,"br"),e._uU(43," MP Expressions with more than a single variant must include boolean operators - "),e.TgZ(44,"strong"),e._uU(45,"AND"),e.qZA(),e._uU(46,", "),e.TgZ(47,"strong"),e._uU(48,"OR"),e.qZA(),e._uU(49,", and "),e.TgZ(50,"strong"),e._uU(51,"NOT"),e.qZA(),e._uU(52," - indicating their relationship. For example, the expression "),e.TgZ(53,"strong"),e._uU(54,"#VID12 AND #VID2220"),e.qZA(),e._uU(55," describes a MP that includes both "),e.TgZ(56,"strong"),e._uU(57,"BRAF V600E"),e.qZA(),e._uU(58," and "),e.TgZ(59,"strong"),e._uU(60,"ALK FUSION"),e.qZA(),e._uU(61,". "),e.qZA(),e.TgZ(62,"p")(63,"strong"),e._uU(64,"Parentheses"),e.qZA(),e._UZ(65,"br"),e._uU(66," Expressions cannot have both "),e.TgZ(67,"strong"),e._uU(68,"AND"),e.qZA(),e._uU(69," and "),e.TgZ(70,"strong"),e._uU(71,"OR"),e.qZA(),e._uU(72," operators within the same expression. To construct complex MPs that require multiple operators, one must use parentheses to create embedded expressions. "),e.qZA(),e.TgZ(73,"p")(74,"strong"),e._uU(75,"NOTE:"),e.qZA(),e._uU(76," Be sure to read the help text provided along with every alert message by hovering over 'Syntax Assistance'. "),e.qZA(),e.BQk())}Ql.\u0275fac=function(d){return new(d||Ql)(e.Y36(ci._M))},Ql.\u0275cmp=e.Xpm({type:Ql,selectors:[["cvc-mp-finder"]],outputs:{cvcOnSelect:"cvcOnSelect",cvcOnVariantSelect:"cvcOnVariantSelect"},decls:2,vars:6,consts:[["nz-form","",3,"nzLayout","formGroup"],[3,"form","fields","model","options","modelChange"]],template:function(d,c){1&d&&(e.TgZ(0,"form",0)(1,"formly-form",1),e.NdJ("modelChange",function(re){return c.modelChange(re)}),e.qZA()()),2&d&&(e.Q6J("nzLayout",c.layout)("formGroup",c.form),e.xp6(1),e.Q6J("form",c.form)("fields",c.config)("model",c.model)("options",c.options))},dependencies:[t._Y,t.JL,t.sg,g.T7,s.Lr],styles:["[_nghost-%COMP%]{display:block;width:100%}"],changeDetection:0});class Zl{}Zl.\u0275fac=function(d){return new(d||Zl)},Zl.\u0275cmp=e.Xpm({type:Zl,selectors:[["cvc-mp-editor-popover-help"]],inputs:{cvcErrorType:"cvcErrorType"},decls:11,vars:9,consts:[[1,"help-content"],[3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"]],template:function(d,c){1&d&&(e.TgZ(0,"div",0),e.ynx(1,1),e.YNc(2,Q1,3,0,"ng-container",2),e.YNc(3,_p,6,0,"ng-container",2),e.YNc(4,_u,15,0,"ng-container",2),e.YNc(5,Vd,31,0,"ng-container",2),e.YNc(6,yp,17,0,"ng-container",2),e.YNc(7,W1,6,0,"ng-container",2),e.YNc(8,Wl,12,0,"ng-container",2),e.YNc(9,Z1,9,0,"ng-container",2),e.YNc(10,Cp,77,0,"ng-container",3),e.BQk(),e.qZA()),2&d&&(e.xp6(1),e.Q6J("ngSwitch",c.cvcErrorType),e.xp6(1),e.Q6J("ngSwitchCase","incompleteExpression"),e.xp6(1),e.Q6J("ngSwitchCase","incompleteNOT"),e.xp6(1),e.Q6J("ngSwitchCase","initialBoolean"),e.xp6(1),e.Q6J("ngSwitchCase","invalidToken"),e.xp6(1),e.Q6J("ngSwitchCase","multipleBoolean"),e.xp6(1),e.Q6J("ngSwitchCase","trailingBoolean"),e.xp6(1),e.Q6J("ngSwitchCase","unknownVariant"),e.xp6(1),e.Q6J("ngSwitchCase","identicalVariants"))},dependencies:[E.RF,E.n9,E.ED],styles:[".help-content[_ngcontent-%COMP%]{max-width:500px}blockquote[_ngcontent-%COMP%]{margin-left:1em}"]});const zp=["expressionEditor"];function Mh(f,d){1&f&&e._uU(0,"Added new Molecular Profile")}function Wp(f,d){if(1&f&&e._UZ(0,"cvc-mp-tag-name",24),2&f){const c=e.oxw().ngrxLet;e.Q6J("nameSegments",c)}}function Ol(f,d){1&f&&(e.TgZ(0,"span",25),e._uU(1," Valid Molecular Profile expressions will be previewed here. "),e.qZA())}function Hc(f,d){if(1&f&&(e.ynx(0),e.YNc(1,Wp,1,1,"cvc-mp-tag-name",22),e.YNc(2,Ol,2,0,"span",23),e.BQk()),2&f){const c=d.ngrxLet;e.xp6(1),e.Q6J("ngIf",c),e.xp6(1),e.Q6J("ngIf",!c)}}function Zp(f,d){1&f&&e._UZ(0,"cvc-mp-editor-popover-help")}function Tp(f,d){if(1&f&&(e.TgZ(0,"button",28),e._UZ(1,"span",29),e._uU(2," GETTING STARTED "),e.qZA(),e.YNc(3,Zp,1,0,"ng-template",null,30,e.W1O)),2&f){const c=e.MAs(4);e.Q6J("nzPopoverContent",c)}}function Jp(f,d){if(1&f&&(e.ynx(0),e._UZ(1,"nz-alert",26),e.YNc(2,Tp,5,1,"ng-template",null,27,e.W1O),e.BQk()),2&f){const c=d.ngIf,y=e.MAs(3);e.xp6(1),e.Q6J("nzMessage",c)("nzAction",y)}}function Cu(f,d){if(1&f){const c=e.EpF();e.TgZ(0,"button",34),e.NdJ("click",function(){e.CHM(c);const re=e.oxw(3).ngrxLet,ht=e.oxw();return e.KtG(ht.cvcOnSelect.next(re))}),e._uU(1," Select this MP "),e.qZA()}}function J1(f,d){if(1&f&&(e._uU(0," Molecular Profile "),e.TgZ(1,"strong"),e._uU(2),e.qZA(),e._uU(3," found. ")),2&f){const c=e.oxw(3).ngrxLet;e.xp6(2),e.Oqu(c.name)}}function bh(f,d){if(1&f&&(e.ynx(0),e._UZ(1,"nz-alert",31),e.YNc(2,Cu,2,0,"ng-template",null,32,e.W1O),e.YNc(4,J1,4,1,"ng-template",null,33,e.W1O),e.BQk()),2&f){const c=e.MAs(3),y=e.MAs(5);e.xp6(1),e.Q6J("nzMessage",y)("nzAction",c)}}function Mp(f,d){if(1&f){const c=e.EpF();e.TgZ(0,"button",37),e.NdJ("click",function(){e.CHM(c);const re=e.oxw(4);return e.KtG(re.onCreateNewMp$.next())}),e._uU(1," Create New MP "),e.qZA()}}function o1(f,d){1&f&&e._uU(0," Molecular Profile not found, create it? ")}function Eh(f,d){if(1&f&&(e.ynx(0),e._UZ(1,"nz-alert",31),e.YNc(2,Mp,2,0,"ng-template",null,35,e.W1O),e.YNc(4,o1,1,0,"ng-template",null,36,e.W1O),e.BQk()),2&f){const c=e.MAs(3),y=e.MAs(5);e.xp6(1),e.Q6J("nzMessage",y)("nzAction",c)}}function Kp(f,d){if(1&f&&(e.ynx(0),e.YNc(1,bh,6,2,"ng-container",6),e.YNc(2,Eh,6,2,"ng-container",6),e.BQk()),2&f){const c=e.oxw().ngrxLet;e.xp6(1),e.Q6J("ngIf",void 0!==c),e.xp6(1),e.Q6J("ngIf",void 0===c)}}function Sh(f,d){if(1&f&&(e.ynx(0),e.YNc(1,Kp,3,2,"ng-container",6),e.ALo(2,"ngrxPush"),e.ALo(3,"ngrxPush"),e.BQk()),2&f){const c=e.oxw();e.xp6(1),e.Q6J("ngIf",!e.lcZ(2,1,c.expressionError$)&&!e.lcZ(3,3,c.expressionMessage$))}}function xh(f,d){if(1&f&&(e.TgZ(0,"button",40),e._UZ(1,"span",29),e._uU(2," SYNTAX ASSISTANCE "),e.qZA()),2&f){const c=e.oxw().helpContent;e.Q6J("nzPopoverContent",c)}}function $o(f,d){if(1&f&&(e._UZ(0,"nz-alert",38),e.YNc(1,xh,3,1,"ng-template",null,39,e.W1O)),2&f){const c=d.$implicit,y=e.MAs(2);e.Q6J("nzMessage",c.errorMessage)("nzAction",y)}}function Bd(f,d){1&f&&e.GkF(0)}function bp(f,d){1&f&&e._UZ(0,"cvc-mp-editor-popover-help",46)}const Jl=function(f,d){return{$implicit:f,helpContent:d}};function qp(f,d){if(1&f&&(e.ynx(0),e.YNc(1,Bd,1,0,"ng-container",44),e.YNc(2,bp,1,0,"ng-template",null,45,e.W1O),e.BQk()),2&f){const c=e.MAs(3),y=e.oxw().ngIf;e.oxw();const re=e.MAs(14);e.xp6(1),e.Q6J("ngTemplateOutlet",re)("ngTemplateOutletContext",e.WLB(2,Jl,y,c))}}function Xp(f,d){1&f&&e.GkF(0)}function eh(f,d){1&f&&e._UZ(0,"cvc-mp-editor-popover-help",48)}function Ep(f,d){if(1&f&&(e.ynx(0),e.YNc(1,Xp,1,0,"ng-container",44),e.YNc(2,eh,1,0,"ng-template",null,47,e.W1O),e.BQk()),2&f){const c=e.MAs(3),y=e.oxw().ngIf;e.oxw();const re=e.MAs(14);e.xp6(1),e.Q6J("ngTemplateOutlet",re)("ngTemplateOutletContext",e.WLB(2,Jl,y,c))}}function th(f,d){1&f&&e.GkF(0)}function zu(f,d){1&f&&e._UZ(0,"cvc-mp-editor-popover-help",50)}function nh(f,d){if(1&f&&(e.ynx(0),e.YNc(1,th,1,0,"ng-container",44),e.YNc(2,zu,1,0,"ng-template",null,49,e.W1O),e.BQk()),2&f){const c=e.MAs(3),y=e.oxw().ngIf;e.oxw();const re=e.MAs(14);e.xp6(1),e.Q6J("ngTemplateOutlet",re)("ngTemplateOutletContext",e.WLB(2,Jl,y,c))}}function Co(f,d){1&f&&e.GkF(0)}function Kl(f,d){1&f&&e._UZ(0,"cvc-mp-editor-popover-help",52)}function Sp(f,d){if(1&f&&(e.ynx(0),e.YNc(1,Co,1,0,"ng-container",44),e.YNc(2,Kl,1,0,"ng-template",null,51,e.W1O),e.BQk()),2&f){const c=e.MAs(3),y=e.oxw().ngIf;e.oxw();const re=e.MAs(14);e.xp6(1),e.Q6J("ngTemplateOutlet",re)("ngTemplateOutletContext",e.WLB(2,Jl,y,c))}}function xp(f,d){1&f&&e.GkF(0)}function Tu(f,d){1&f&&e._UZ(0,"cvc-mp-editor-popover-help",54)}function z(f,d){if(1&f&&(e.ynx(0),e.YNc(1,xp,1,0,"ng-container",44),e.YNc(2,Tu,1,0,"ng-template",null,53,e.W1O),e.BQk()),2&f){const c=e.MAs(3),y=e.oxw().ngIf;e.oxw();const re=e.MAs(14);e.xp6(1),e.Q6J("ngTemplateOutlet",re)("ngTemplateOutletContext",e.WLB(2,Jl,y,c))}}function p(f,d){1&f&&e.GkF(0)}function h(f,d){1&f&&e._UZ(0,"cvc-mp-editor-popover-help",56)}function v(f,d){if(1&f&&(e.ynx(0),e.YNc(1,p,1,0,"ng-container",44),e.YNc(2,h,1,0,"ng-template",null,55,e.W1O),e.BQk()),2&f){const c=e.MAs(3),y=e.oxw().ngIf;e.oxw();const re=e.MAs(14);e.xp6(1),e.Q6J("ngTemplateOutlet",re)("ngTemplateOutletContext",e.WLB(2,Jl,y,c))}}function C(f,d){1&f&&e.GkF(0)}function D(f,d){1&f&&(e.ynx(0),e._UZ(1,"cvc-mp-editor-popover-help",58),e.BQk())}function W(f,d){1&f&&(e.ynx(0),e._UZ(1,"cvc-mp-editor-popover-help",59),e.BQk())}function _e(f,d){if(1&f&&(e.YNc(0,D,2,0,"ng-container",6),e.YNc(1,W,2,0,"ng-container",6)),2&f){const c=e.oxw(2).ngIf;e.Q6J("ngIf",c.errorMessage.split(" ").includes("multiple")),e.xp6(1),e.Q6J("ngIf",c.errorMessage.split(" ").includes("found."))}}function Oe(f,d){if(1&f&&(e.ynx(0),e.YNc(1,C,1,0,"ng-container",44),e.YNc(2,_e,2,2,"ng-template",null,57,e.W1O),e.BQk()),2&f){const c=e.MAs(3),y=e.oxw().ngIf;e.oxw();const re=e.MAs(14);e.xp6(1),e.Q6J("ngTemplateOutlet",re)("ngTemplateOutletContext",e.WLB(2,Jl,y,c))}}function Ke(f,d){if(1&f&&(e.ynx(0),e.TgZ(1,"pre"),e._uU(2),e.ALo(3,"json"),e.qZA(),e.BQk()),2&f){const c=e.oxw().ngIf;e.xp6(2),e.hij("              ",e.lcZ(3,1,c),"\n            ")}}function gt(f,d){if(1&f&&(e.ynx(0)(1,41),e.YNc(2,qp,4,5,"ng-container",42),e.YNc(3,Ep,4,5,"ng-container",42),e.YNc(4,nh,4,5,"ng-container",42),e.YNc(5,Sp,4,5,"ng-container",42),e.YNc(6,z,4,5,"ng-container",42),e.YNc(7,v,4,5,"ng-container",42),e.YNc(8,Oe,4,5,"ng-container",42),e.YNc(9,Ke,4,3,"ng-container",43),e.BQk()()),2&f){const c=d.ngIf;e.xp6(1),e.Q6J("ngSwitch",c.errorType),e.xp6(1),e.Q6J("ngSwitchCase","invalidToken"),e.xp6(1),e.Q6J("ngSwitchCase","trailingBoolean"),e.xp6(1),e.Q6J("ngSwitchCase","initialBoolean"),e.xp6(1),e.Q6J("ngSwitchCase","multipleBoolean"),e.xp6(1),e.Q6J("ngSwitchCase","incompleteExpression"),e.xp6(1),e.Q6J("ngSwitchCase","incompleteNOT"),e.xp6(1),e.Q6J("ngSwitchCase","queryError")}}function Mt(f,d){1&f&&(e.TgZ(0,"span",25),e._uU(1," Append: "),e.qZA())}function Pt(f,d){if(1&f&&(e.TgZ(0,"button",60)(1,"strong"),e._uU(2,"Variant"),e.qZA()()),2&f){e.oxw();const c=e.MAs(37);e.Q6J("nzPopoverContent",c)}}function Bt(f,d){if(1&f&&(e.TgZ(0,"button",61)(1,"strong"),e._uU(2,"NOT Variant"),e.qZA()()),2&f){e.oxw();const c=e.MAs(39);e.Q6J("nzPopoverContent",c)}}function Wt(f,d){1&f&&(e.TgZ(0,"span",62),e._uU(1," | "),e.qZA())}function Ht(f,d){if(1&f){const c=e.EpF();e.TgZ(0,"button",63),e.NdJ("click",function(){e.CHM(c);const re=e.oxw();return e.KtG(re.onAppendInput$.next("AND"))}),e.TgZ(1,"strong"),e._uU(2,"AND"),e.qZA()()}}function an(f,d){if(1&f){const c=e.EpF();e.TgZ(0,"button",63),e.NdJ("click",function(){e.CHM(c);const re=e.oxw();return e.KtG(re.onAppendInput$.next("OR"))}),e.TgZ(1,"strong"),e._uU(2,"OR"),e.qZA()()}}function _n(f,d){1&f&&(e.TgZ(0,"span",62),e._uU(1," | "),e.qZA())}function Ln(f,d){if(1&f){const c=e.EpF();e.TgZ(0,"button",63),e.NdJ("click",function(){e.CHM(c);const re=e.oxw();return e.KtG(re.onAppendInput$.next("("))}),e.TgZ(1,"strong"),e._uU(2,"("),e.qZA()()}}function en(f,d){if(1&f){const c=e.EpF();e.TgZ(0,"button",63),e.NdJ("click",function(){e.CHM(c);const re=e.oxw();return e.KtG(re.onAppendInput$.next(")"))}),e.TgZ(1,"strong"),e._uU(2,")"),e.qZA()()}}const un=function(){return[6,8]};function An(f,d){if(1&f){const c=e.EpF();e.TgZ(0,"div",64)(1,"nz-row",2)(2,"nz-col",3)(3,"p",65),e._uU(4," Select a Gene and Variant to append its #VID. "),e.qZA()(),e.TgZ(5,"nz-col",3)(6,"cvc-mp-finder",66),e.NdJ("cvcOnVariantSelect",function(re){e.CHM(c);const ht=e.oxw();return e.KtG(ht.onVariantSelect$.next({variant:re,prependNot:!1}))}),e.qZA()()()()}2&f&&(e.xp6(1),e.Q6J("nzGutter",e.DdM(1,un)))}function In(f,d){if(1&f){const c=e.EpF();e.TgZ(0,"div",64)(1,"nz-row",2)(2,"nz-col",3)(3,"p",65),e._uU(4," Select a Gene and Variant to append its #VID, prepended with NOT boolean. "),e.qZA()(),e.TgZ(5,"nz-col",3)(6,"cvc-mp-finder",66),e.NdJ("cvcOnVariantSelect",function(re){e.CHM(c);const ht=e.oxw();return e.KtG(ht.onVariantSelect$.next({variant:re,prependNot:!0}))}),e.qZA()()()()}2&f&&(e.xp6(1),e.Q6J("nzGutter",e.DdM(1,un)))}function to(f,d){if(1&f){const c=e.EpF();e.TgZ(0,"nz-list-item")(1,"nz-list-item-meta")(2,"nz-list-item-meta-title"),e._UZ(3,"cvc-entity-tag",70),e.qZA(),e.TgZ(4,"nz-list-item-meta-description"),e._uU(5),e.qZA()(),e.TgZ(6,"ul",71)(7,"nz-list-item-action")(8,"button",72),e.NdJ("click",function(){const ht=e.CHM(c).$implicit,It=e.oxw(2);return e.KtG(It.onSelectExample$.next(ht))}),e._uU(9," Select "),e.qZA()()()()}if(2&f){const c=d.$implicit;e.xp6(3),e.Q6J("cvcLinkableEntity",c.mp),e.xp6(2),e.hij(" ",c.description," ")}}function bo(f,d){if(1&f&&(e.TgZ(0,"div",67)(1,"nz-list",68),e.YNc(2,to,10,2,"nz-list-item",69),e.qZA()()),2&f){const c=e.oxw();e.xp6(2),e.Q6J("ngForOf",c.exampleExpressions)}}const Ei=function(f){return{active:f}};let _i=((yu=class{constructor(d,c,y,re){this.previewMpGql=d,this.createMolecularProfileGql=c,this.mpEditorPrepopulate=y,this.networkErrorService=re,this.cvcOnSelect=new e.vpe,this.expressionMessages={initial:"Use the editor below to construct a molecular profile."},this.exampleExpressions=[{mp:{__typename:"MolecularProfile",id:9999,name:"BRAF V600E AND EGFR L858R AND EGFR T790M"},expression:"#VID12 AND #VID33 AND #VID34",description:"BRAF V600E, EGFR L858R, and EGFR T790M must all be observed."},{mp:{__typename:"MolecularProfile",id:9999,name:"BRAF V600E AND NOT EGFR L858R"},expression:"#VID12 AND NOT #VID33",description:"BRAF V600E must be observed and EGFR L858R must be absent."},{mp:{__typename:"MolecularProfile",id:9999,name:"BRAF V600E OR EGFR L858R OR EGFR T790M"},expression:"#VID12 OR #VID33 OR #VID34",description:"Either BRAF V600E, or EGFR L858R, or EGFR T790M must be observed."},{mp:{__typename:"MolecularProfile",id:9999,name:"BRAF V600E AND EGFR L858R OR EGFR T790M"},expression:"#VID12 AND (#VID33 OR #VID34)",description:"BRAF V600E must be observed and either EGFR L858R or EGFR T790M must be observed."},{mp:{__typename:"MolecularProfile",id:9999,name:"NOT KIT D816V"},expression:"NOT #VID4353",description:"KIT D816V must be absent."}],this.createMolecularProfileMutator=new Nt.U(this.networkErrorService),this.onInputChange$=new it.X(void 0),this.onAppendInput$=new Je.x,this.onVariantSelect$=new Je.x,this.onCreateNewMp$=new Je.x,this.onSelectExample$=new Je.x,this.inputValue$=new it.X(""),this.expressionError$=new it.X(void 0),this.expressionHelp$=new it.X(void 0),this.expressionMessage$=new it.X(this.expressionMessages.initial),this.expressionSegment$=new Je.x,this.existingMp$=new Je.x}ngAfterViewInit(){this.onInputChange$.pipe((0,Gi.b)(250),(0,Nn.b)(d=>{d||this.expressionSegment$.next(void 0)}),(0,Ge.h)(Qn.ep),(0,Nn.b)(d=>{0===d.length&&(this.expressionMessage$.next(this.expressionMessages.initial),this.expressionError$.next(void 0))}),(0,Ge.h)(d=>d.length>0),(0,Ge.h)(d=>" "!==d[d.length-1]),(0,yt.U)(d=>{let c=kd(d);return"errorMessage"in c?c:this.previewQueryRef.refetch({mpStructure:c})}),(0,Pe.t)(this)).subscribe(d=>{if(this.isMpParseError(d)){const c=d;this.expressionMessage$.next(void 0),this.expressionError$.next(c),this.expressionSegment$.next(void 0)}else d.then(({data:y,errors:re})=>{if(re)this.expressionMessage$.next(void 0),this.expressionError$.next({errorType:"queryError",errorMessage:re.map(ht=>ht.message).join("\n")}),this.expressionSegment$.next(void 0);else{this.expressionSegment$.next(y.previewMolecularProfileName.segments),this.expressionMessage$.next(void 0),this.expressionError$.next(void 0);this.existingMp$.next(y.previewMolecularProfileName.existingMolecularProfile||void 0)}})}),this.onAppendInput$.pipe((0,Pe.t)(this)).subscribe(d=>{if(this.expressionEditor){const c=this.expressionEditor.nativeElement,re=`${c.value}${/\s+$/.test(d)?d:" "+d}`;c.value=re,this.inputValue$.next(re),this.onInputChange$.next(re)}}),this.onSelectExample$.pipe((0,Pe.t)(this)).subscribe(d=>{this.expressionEditor&&(this.expressionEditor.nativeElement.value=d.expression,this.inputValue$.next(d.expression),this.onInputChange$.next(d.expression))}),this.onVariantSelect$.pipe((0,tt.M)(this.onInputChange$),(0,yt.U)(([d,c])=>{const y=`${d.prependNot?"NOT ":""}#VID${d.variant.id}`;return c&&0!=c.trim().length?`${c.trim()} ${y}`:y}),(0,Pe.t)(this)).subscribe(d=>{this.inputValue$.next(d),this.onInputChange$.next(d)}),this.previewQueryRef=this.previewMpGql.watch({}),this.previewMpName$=this.previewQueryRef.valueChanges.pipe((0,Ut.j)("data","previewMolecularProfileName"),(0,Ge.h)(Qn.ep),(0,yt.U)(d=>d.segments),(0,Pe.t)(this)),this.previewMpAlreadyExists$=this.previewQueryRef.valueChanges.pipe((0,Ut.j)("data","previewMolecularProfileName"),(0,Ge.h)(Qn.ep),(0,yt.U)(d=>d.existingMolecularProfile),(0,Pe.t)(this)),this.previewDeprecatedVariants$=this.previewQueryRef.valueChanges.pipe((0,Ut.j)("data","previewMolecularProfileName"),(0,Ge.h)(Qn.ep),(0,yt.U)(d=>d.deprecatedVariants),(0,Pe.t)(this)),this.onCreateNewMp$.pipe((0,tt.M)(this.onInputChange$),(0,Pe.t)(this)).subscribe(([d,c])=>{if(!c||0===c.length)return;let y=kd(c);"errorMessage"in y||(this.state=this.createMolecularProfileMutator.mutate(this.createMolecularProfileGql,{mpStructure:y},{},re=>{setTimeout(()=>{re.createMolecularProfile&&this.cvcOnSelect.next(re.createMolecularProfile.molecularProfile)},1e3)}))})}isMpParseError(d){return void 0!==d.errorMessage}prepopulateMp(d){if(!d)return this.expressionSegment$.next(void 0),this.expressionMessage$.next(this.expressionMessages.initial),void this.inputValue$.next("");va(this.mpEditorPrepopulate.fetch({mpId:d},{fetchPolicy:"cache-first"})).then(({data:c})=>{if(!c?.molecularProfile?.id)return void console.error(`MpExpressionEditor could not fetch MolecularProfile:${d} to prepolate editor fields.`);const y=c.molecularProfile.rawName.replace(/#GID(\d+)/g,"").trim();this.inputValue$.next(y),this.onInputChange$.next(y)})}ngOnChanges(d){d.cvcPrepopulateWithId&&this.prepopulateMp(d.cvcPrepopulateWithId.currentValue)}}).\u0275fac=function(d){return new(d||yu)(e.Y36(bn.mki),e.Y36(bn.zpu),e.Y36(bn.vjc),e.Y36(Gt.Y))},yu.\u0275cmp=e.Xpm({type:yu,selectors:[["cvc-mp-expression-editor"]],viewQuery:function(d,c){if(1&d&&e.Gf(zp,5),2&d){let y;e.iGM(y=e.CRH())&&(c.expressionEditor=y.first)}},inputs:{cvcPrepopulateWithId:"cvcPrepopulateWithId"},outputs:{cvcOnSelect:"cvcOnSelect"},features:[e.TTD],decls:42,vars:23,consts:[["entityType","Molecular Profile",3,"mutationState","successMessage"],["success",""],[3,"nzGutter"],["nzSpan","24"],[1,"expression-preview",3,"ngClass"],[4,"ngrxLet"],[4,"ngIf"],["errorAlert",""],["nz-input","","rows","1","placeholder","Enter or edit a Molecular Expression here.",2,"width","100%",3,"ngModel","ngModelChange"],["expressionEditor",""],[1,"btn-row"],["nzFlex","80px"],["nzBlock","","nz-button","","nzType","primary","nzShape","round","nzSize","small","nz-popover","","nzPopoverTitle","Select a Profile to view its expression","nzPopoverTrigger","click","nzPopoverPlacement","bottomLeft",3,"nzPopoverContent"],["nzFlex","auto",2,"text-align","right"],["nz-typography","","nzType","secondary",4,"nzSpaceItem"],["type","button","nz-button","","nz-popover","","nzPopoverTitle","Append Variant #VID","nzPopoverTrigger","click","nzSize","small","nzShape","round","nzType","primary","nzPopoverPlacement","bottom",3,"nzPopoverContent",4,"nzSpaceItem"],["type","button","nz-button","","nz-popover","","nzPopoverTitle","Append Variant NOT #VID","nzPopoverTrigger","click","nzSize","small","nzShape","round","nzType","primary","nzPopoverPlacement","bottom",3,"nzPopoverContent",4,"nzSpaceItem"],["class","btn-divider",4,"nzSpaceItem"],["type","button","nz-button","","nzType","primary","nzSize","small","nzShape","round",3,"click",4,"nzSpaceItem"],["appendVariant",""],["appendNotVariant",""],["expressionExamples",""],[3,"nameSegments",4,"ngIf"],["nz-typography","","nzType","secondary",4,"ngIf"],[3,"nameSegments"],["nz-typography","","nzType","secondary"],["nzType","info","nzShowIcon","",3,"nzMessage","nzAction"],["messageAction",""],["type","button","nz-button","","nzType","dashed","nzSize","small","nzShape","round","nz-popover","","nzPopoverTrigger","hover",3,"nzPopoverContent"],["nz-icon","","nzType","question-circle","nzTheme","fill"],["gettingStartedHelp",""],["nzType","success","nzShowIcon","",3,"nzMessage","nzAction"],["selectAction",""],["foundMessage",""],["type","button","nz-button","","nzType","primary","nzSize","small","nzBlock","",3,"click"],["createAction",""],["createMessage",""],["type","button","nz-button","","nzSize","small","nzType","primary","nzBlock","",3,"click"],["nzType","error","nzShowIcon","",3,"nzMessage","nzAction"],["errorAction",""],["nz-button","","nzDanger","","nzType","text","nzSize","small","nzShape","round","nz-popover","","nzPopoverTrigger","hover",3,"nzPopoverContent"],[3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["invalidTokenHelp",""],["cvcErrorType","invalidToken"],["trailingBooleanHelp",""],["cvcErrorType","trailingBoolean"],["initialBooleanHelp",""],["cvcErrorType","initialBoolean"],["multipleBooleanHelp",""],["cvcErrorType","multipleBoolean"],["incompleteExpressionHelp",""],["cvcErrorType","incompleteExpression"],["incompleteNOTHelp",""],["cvcErrorType","incompleteNOT"],["queryErrorHelp",""],["cvcErrorType","identicalVariants"],["cvcErrorType","unknownVariant"],["type","button","nz-button","","nz-popover","","nzPopoverTitle","Append Variant #VID","nzPopoverTrigger","click","nzSize","small","nzShape","round","nzType","primary","nzPopoverPlacement","bottom",3,"nzPopoverContent"],["type","button","nz-button","","nz-popover","","nzPopoverTitle","Append Variant NOT #VID","nzPopoverTrigger","click","nzSize","small","nzShape","round","nzType","primary","nzPopoverPlacement","bottom",3,"nzPopoverContent"],[1,"btn-divider"],["type","button","nz-button","","nzType","primary","nzSize","small","nzShape","round",3,"click"],[1,"append-popover-contents"],["nz-typography","","nzType","secondary",2,"margin","0","padding-bottom","2px"],[3,"cvcOnVariantSelect"],[2,"min-width","525px","margin","-8px -12px"],["nzSize","small","nzItemLayout","horizontal"],[4,"ngFor","ngForOf"],[3,"cvcLinkableEntity"],["nz-list-item-actions",""],["type","button","nz-button","","nzType","primary","nzSize","small",3,"click"]],template:function(d,c){if(1&d&&(e.TgZ(0,"cvc-form-submission-status-display",0),e.YNc(1,Mh,1,0,"ng-template",null,1,e.W1O),e.TgZ(3,"nz-row",2)(4,"nz-col",3)(5,"div",4),e.ALo(6,"ngrxPush"),e.YNc(7,Hc,3,2,"ng-container",5),e.ALo(8,"ngrxPush"),e.qZA()(),e.TgZ(9,"nz-col",3),e.YNc(10,Jp,4,2,"ng-container",6),e.ALo(11,"ngrxPush"),e.YNc(12,Sh,4,5,"ng-container",5),e.YNc(13,$o,3,2,"ng-template",null,7,e.W1O),e.YNc(15,gt,10,8,"ng-container",6),e.ALo(16,"ngrxPush"),e.qZA(),e.TgZ(17,"nz-col",3)(18,"textarea",8,9),e.NdJ("ngModelChange",function(re){return c.onInputChange$.next(re)}),e.ALo(20,"ngrxPush"),e.qZA()()(),e.TgZ(21,"nz-row",10)(22,"nz-col",11)(23,"button",12),e._uU(24," Examples "),e.qZA()(),e.TgZ(25,"nz-col",13)(26,"nz-space"),e.YNc(27,Mt,2,0,"span",14),e.YNc(28,Pt,3,1,"button",15),e.YNc(29,Bt,3,1,"button",16),e.YNc(30,Wt,2,0,"span",17),e.YNc(31,Ht,3,0,"button",18),e.YNc(32,an,3,0,"button",18),e.YNc(33,_n,2,0,"span",17),e.YNc(34,Ln,3,0,"button",18),e.YNc(35,en,3,0,"button",18),e.qZA()(),e.YNc(36,An,7,2,"ng-template",null,19,e.W1O),e.YNc(38,In,7,2,"ng-template",null,20,e.W1O),e.YNc(40,bo,3,1,"ng-template",null,21,e.W1O),e.qZA()()),2&d){const y=e.MAs(2),re=e.MAs(41);e.Q6J("mutationState",c.state)("successMessage",y),e.xp6(3),e.Q6J("nzGutter",e.DdM(20,un)),e.xp6(2),e.Q6J("ngClass",e.VKq(21,Ei,void 0!==e.lcZ(6,10,c.expressionSegment$))),e.xp6(2),e.Q6J("ngrxLet",e.lcZ(8,12,c.expressionSegment$)),e.xp6(3),e.Q6J("ngIf",e.lcZ(11,14,c.expressionMessage$)),e.xp6(2),e.Q6J("ngrxLet",c.existingMp$),e.xp6(3),e.Q6J("ngIf",e.lcZ(16,16,c.expressionError$)),e.xp6(3),e.Q6J("ngModel",e.lcZ(20,18,c.inputValue$)),e.xp6(5),e.Q6J("nzPopoverContent",re)}},dependencies:[E.mk,E.sg,E.O5,E.tP,E.RF,E.n9,E.ED,t.Fj,t.JJ,t.On,I.eJ,xn.r,Yn.ix,pn.w,ln.dQ,_t.Ls,Ae.Zp,w.t3,w.SK,nn.NU,nn.$1,de.ZU,co.lU,xr.n_,xr.AA,xr.yi,xr.IO,xr.Pb,xr.nk,xr.KC,gn.F,Qp.C,Tt.J,Ql,Zl,E.Ts,I.fM],styles:["[_nghost-%COMP%]{display:block;background-color:#f6f6f6;border:1px solid #dedede;border-radius:4px;padding:8px}.expression-preview[_ngcontent-%COMP%]{width:100%;padding:8px;border:1px solid #dedede;border-radius:4px}.expression-preview.active[_ngcontent-%COMP%]{background-color:#fff}.append-popover-contents[_ngcontent-%COMP%]{min-width:450px}.help-content[_ngcontent-%COMP%]{max-width:500px}.btn-row[_ngcontent-%COMP%]{margin-top:10px;flex-wrap:nowrap}.btn-row[_ngcontent-%COMP%]   .btn-divider[_ngcontent-%COMP%]{color:#aaa}"],changeDetection:0}),yu);_i=(0,Te.gn)([(0,Pe.c)()],_i);const Yc=["optionTemplates"];function Dr(f,d){if(1&f){const c=e.EpF();e.TgZ(0,"cvc-mp-finder",11),e.NdJ("cvcOnSelect",function(re){e.CHM(c);const ht=e.oxw(2);return e.KtG(ht.onMpSelect$.next(re))}),e.qZA()}}function _s(f,d){1&f&&(e.TgZ(0,"div",12),e._uU(1," \xa0 "),e.TgZ(2,"span",13)(3,"i"),e._uU(4,"Select or create a Molecular Profile with the expression editor "),e.qZA()()())}function Dp(f,d){if(1&f){const c=e.EpF();e.TgZ(0,"div",14)(1,"cvc-entity-select",15),e.NdJ("cvcOnSearch",function(re){e.CHM(c);const ht=e.oxw(2);return e.KtG(ht.onSearch$.next(re))})("cvcOnModelChange",function(re){e.CHM(c);const ht=e.oxw(2);return e.KtG(ht.props.change&&ht.props.change(ht.field,re))}),e.ALo(2,"ngrxPush"),e.ALo(3,"ngrxPush"),e.ALo(4,"ngrxPush"),e.qZA()()}if(2&f){const c=e.oxw(2),y=e.MAs(13);e.xp6(1),e.Q6J("cvcSelectMode",c.props.isMultiSelect?"multiple":"default")("cvcCustomTemplate",y)("cvcFormControl",c.formControl)("cvcFormlyAttributes",c.field)("cvcEntityName",c.props.entityName)("cvcPlaceholder",c.props.placeholder)("cvcResults",e.lcZ(2,15,c.result$))("cvcDisabled",c.props.disabled)("cvcAllowClear",!1)("cvcOptions",e.lcZ(3,17,c.selectOption$))("cvcShowError",c.showError)("cvcLoading",e.lcZ(4,19,c.isLoading$))("cvcBorderless",!0)("cvcSuffixIcon",null)("cvcShowArrow",!1)}}function Hd(f,d){if(1&f&&(e.ynx(0),e.YNc(1,Dr,1,0,"cvc-mp-finder",8),e.YNc(2,_s,5,0,"div",9),e.YNc(3,Dp,5,21,"div",10),e.BQk()),2&f){const c=d.ngrxLet,y=e.oxw();e.xp6(1),e.Q6J("ngIf",c.showFinder&&!y.editorOpen),e.xp6(1),e.Q6J("ngIf",y.editorOpen),e.xp6(1),e.Q6J("ngIf",c.showSelect&&!y.editorOpen)}}function no(f,d){if(1&f){const c=e.EpF();e.TgZ(0,"nz-col",16)(1,"cvc-mp-expression-editor",17),e.NdJ("cvcOnSelect",function(re){e.CHM(c);const ht=e.oxw();return e.KtG(ht.onMpSelect$.next(re))}),e.ALo(2,"ngrxPush"),e.qZA()()}if(2&f){const c=e.oxw();e.xp6(1),e.Q6J("cvcPrepopulateWithId",e.lcZ(2,1,c.onMpId$))}}function fo(f,d){if(1&f&&(e.ynx(0),e.TgZ(1,"em"),e._UZ(2,"span",24),e.ALo(3,"highlightTypeahead"),e.qZA(),e.BQk()),2&f){const c=e.oxw(2).$implicit,y=e.oxw().ngrxLet;e.xp6(2),e.Q6J("innerHtml",e.xi3(3,1,c.molecularProfileAliases.join(", "),y),e.oJD)}}function vo(f,d){1&f&&e._uU(0,"--")}function qo(f,d){if(1&f&&(e._UZ(0,"cvc-entity-tag",20),e.TgZ(1,"span",21),e._uU(2," Aliases: "),e.YNc(3,fo,4,4,"ng-container",22),e.YNc(4,vo,1,0,"ng-template",null,23,e.W1O),e.qZA()),2&f){const c=e.MAs(5),y=e.oxw().$implicit,re=e.oxw().ngrxLet;e.Q6J("cvcDisableLink",!0)("cvcCacheId",y.__typename+":"+y.id)("cvcEmphasize",re),e.xp6(3),e.Q6J("ngIf",y.molecularProfileAliases.length>0)("ngIfElse",c)}}function Zi(f,d){1&f&&(e.ynx(0),e.YNc(1,qo,6,5,"ng-template",null,19,e.W1O),e.BQk())}function $c(f,d){if(1&f&&(e.ynx(0),e.YNc(1,Zi,3,0,"ng-container",18),e.ALo(2,"ngrxPush"),e.BQk()),2&f){const c=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,c.result$))}}function Xr(f,d){if(1&f){const c=e.EpF();e.TgZ(0,"div",25)(1,"cvc-entity-tag",26),e.NdJ("cvcOnClose",function(){const ht=e.CHM(c).$implicit,It=e.oxw();return e.KtG(It.onTagClose$.next(ht.nzValue))}),e.qZA()()}if(2&f){const c=d.$implicit,y=e.oxw();e.xp6(1),e.Q6J("cvcCacheId","MolecularProfile:"+c.nzValue)("cvcContext",y.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",y.props.isMultiSelect?"default":"closeable")}}const wl=function(){return[8,12]},Ri=function(f,d){return{show:f,hide:d}},ql=jt($t(),yo());class Xl extends ql{constructor(d,c,y,re){super(),this.taq=d,this.tq=c,this.changeDetectorRef=y,this.apollo=re,this.editorOpen=!1,this.defaultOptions={props:{label:"Molecular Profile",placeholder:"Search Molecular Profiles",isMultiSelect:!1,description:"Select a Gene and Variant to specify a simple Molecular Profile.",extraType:"prompt",entityName:{singular:"Molecular Profile",plural:"Molecular Profiles"},minSearchStrLength:1}},this.onMpSelect$=new it.X(void 0),this.onMpId$=new Wo.t,this.onShowExpClick$=new Je.x,this.showExp$=this.onShowExpClick$.pipe((0,pi.R)((ht,It)=>!ht,!1),(0,Nn.b)(ht=>this.editorOpen=ht)),this.selectDisplay$=new it.X({showFinder:!0,showSelect:!1})}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEntitySelectField({typeaheadQuery:this.taq,tagQuery:this.tq,getTypeaheadVarsFn:this.getTypeaheadVarsFn,getTypeaheadResultsFn:this.getTypeaheadResultsFn,getTagQueryVarsFn:this.getTagQueryVarsFn,getTagQueryResultsFn:this.getTagQueryResultsFn,getSelectedItemOptionFn:this.getSelectedItemOptionFn,getSelectOptionsFn:this.getSelectOptionsFn,changeDetectorRef:this.changeDetectorRef,selectOpen$:this.selectOpen$,selectComponent:this.selectComponent}),this.initialDescription=this.props.description,this.onValueChange$.pipe((0,Pe.t)(this)).subscribe(d=>{const c=void 0!==d;this.selectDisplay$.next({showFinder:!c,showSelect:c}),this.onMpId$.next(d),this.props.description=d?void 0:this.initialDescription}),this.onMpSelect$.pipe((0,Pe.t)(this)).subscribe(d=>{d?(this.selectOption$.next([{label:d.name,value:d.id}]),this.editorOpen&&this.onShowExpClick$.next(),this.cdr.detectChanges(),this.field.formControl.setValue(d.id)):this.selectDisplay$.next({showFinder:!0,showSelect:!1})})}configureStateConnections(){}getTypeaheadVarsFn(d,c){return{name:d,geneId:c}}getTypeaheadResultsFn(d){return d.data.molecularProfiles.nodes}getTagQueryVarsFn(d){return{molecularProfileId:d}}getTagQueryResultsFn(d){return d.data.molecularProfile}getSelectedItemOptionFn(d){return{value:d.id,label:d.name}}getSelectOptionsFn(d,c){return d.map((y,re)=>({label:c.get(re)||y.name,value:y.id}))}}Xl.\u0275fac=function(d){return new(d||Xl)(e.Y36(bn.F4e),e.Y36(bn.dGO),e.Y36(e.sBO),e.Y36(ci._M))},Xl.\u0275cmp=e.Xpm({type:Xl,selectors:[["ng-component"]],viewQuery:function(d,c){if(1&d&&e.Gf(Yc,5,e.Rgc),2&d){let y;e.iGM(y=e.CRH())&&(c.optionTemplates=y)}},features:[e.qOj],decls:14,vars:16,consts:[[3,"nzGutter"],["nzFlex","auto"],[4,"ngrxLet"],["nzFlex","50px"],["type","button","nz-button","","nzBlock","","nz-tooltip","","nzTooltipTitle","Add/Edit Complex MP Expression",1,"expression-button",3,"click"],["nz-icon","",3,"ngClass","nzType"],["nzSpan","24","class","editor-drawer",4,"ngIf"],["selectedTemplate",""],[3,"cvcOnSelect",4,"ngIf"],["class","editor-message",4,"ngIf"],["style","display: inline-block",4,"ngIf"],[3,"cvcOnSelect"],[1,"editor-message"],["nz-typography","","nzEllipsis","","nzType","secondary"],[2,"display","inline-block"],[3,"cvcSelectMode","cvcCustomTemplate","cvcFormControl","cvcFormlyAttributes","cvcEntityName","cvcPlaceholder","cvcResults","cvcDisabled","cvcAllowClear","cvcOptions","cvcShowError","cvcLoading","cvcBorderless","cvcSuffixIcon","cvcShowArrow","cvcOnSearch","cvcOnModelChange"],["nzSpan","24",1,"editor-drawer"],[3,"cvcPrepopulateWithId","cvcOnSelect"],[4,"ngFor","ngForOf"],["optionTemplates",""],[3,"cvcDisableLink","cvcCacheId","cvcEmphasize"],["nz-typography","","nzType","secondary"],[4,"ngIf","ngIfElse"],["noAliases",""],["nz-typography","","nzType","secondary",3,"innerHtml"],[1,"ant-select-selection-item-content"],[3,"cvcCacheId","cvcContext","cvcMode","cvcOnClose"]],template:function(d,c){1&d&&(e.TgZ(0,"nz-row",0)(1,"nz-col",1),e.YNc(2,Hd,4,3,"ng-container",2),e.qZA(),e.TgZ(3,"nz-col",3)(4,"button",4),e.NdJ("click",function(){return c.onShowExpClick$.next()}),e._UZ(5,"span",5),e.ALo(6,"ngrxPush"),e.ALo(7,"ngrxPush"),e._uU(8,"Editor "),e.qZA()(),e.YNc(9,no,3,3,"nz-col",6),e.ALo(10,"ngrxPush"),e.qZA(),e.YNc(11,$c,3,3,"ng-container",2),e.YNc(12,Xr,2,3,"ng-template",null,7,e.W1O)),2&d&&(e.Q6J("nzGutter",e.DdM(12,wl)),e.xp6(2),e.Q6J("ngrxLet",c.selectDisplay$),e.xp6(3),e.Q6J("ngClass",e.WLB(13,Ri,e.lcZ(6,6,c.showExp$),!e.lcZ(7,8,c.showExp$)))("nzType","caret-right"),e.xp6(4),e.Q6J("ngIf",e.lcZ(10,10,c.showExp$)),e.xp6(2),e.Q6J("ngrxLet",c.onSearch$))},dependencies:[E.mk,E.sg,E.O5,I.eJ,Yn.ix,pn.w,ln.dQ,_t.Ls,w.t3,w.SK,de.ZU,At.SY,Ue,Tt.J,_i,Ql,I.fM,P.A],styles:["form[_ngcontent-%COMP%]   span.hide[_ngcontent-%COMP%], .expression-button[_ngcontent-%COMP%]   span.hide[_ngcontent-%COMP%]{transform:rotate(0);transition:transform .2s linear}form[_ngcontent-%COMP%]   span.show[_ngcontent-%COMP%], .expression-button[_ngcontent-%COMP%]   span.show[_ngcontent-%COMP%]{transform:rotate(90deg);transition:transform .2s linear}.editor-message[_ngcontent-%COMP%]{padding:3px;background-color:#f5f5f5;cursor:default;border-radius:2px}"],data:{animation:[n1.mF,n1.MC]},changeDetection:0});const Rr={types:[{name:"molecular-profile-select",wrappers:["form-field"],component:Xl},{name:"molecular-profile-multi-select",wrappers:["form-field"],component:Xl,defaultOptions:{props:{label:"Molecular Profiles",isMultiSelect:!0}}}]};class Ps{}Ps.\u0275fac=function(d){return new(d||Ps)},Ps.\u0275mod=e.oAB({type:Ps}),Ps.\u0275inj=e.cJS({imports:[E.ez,t.u5,t.UX,I._N,I.pP,g.X0.forChild(Rr),xn.L,Yn.sL,Ze.LV,Bn.Qp,_t.PV,Ae.o7,w.Jb,nn.zf,s.U5,rt.ic,de.ZJ,At.cg,co.$6,nn.zf,kt.Wr,xr.Ph,Un.g,Ld.r,lt,jn,xt.s,Zt.x]});var js=a(9657);const K1=["optionTemplates"];function Mu(f,d){if(1&f&&(e.TgZ(0,"nz-tag")(1,"strong"),e._uU(2),e.ALo(3,"formatAmp"),e.qZA()(),e.TgZ(4,"span",4),e._uU(5),e.qZA()),2&f){const c=e.oxw().$implicit,y=e.oxw();e.xp6(2),e.Oqu(e.xi3(3,2,c,"verbose")),e.xp6(3),e.Oqu(y.descriptionForCategory(c))}}function q1(f,d){1&f&&(e.ynx(0),e.YNc(1,Mu,6,5,"ng-template",null,3,e.W1O),e.BQk())}function oh(f,d){if(1&f){const c=e.EpF();e.TgZ(0,"nz-tag",8),e.NdJ("nzOnClose",function(re){e.CHM(c);const ht=e.oxw(2);return e.KtG(ht.onTagClose$.next(re))}),e.TgZ(1,"strong"),e._uU(2),e.ALo(3,"formatAmp"),e.qZA()()}if(2&f){const c=e.oxw().$implicit;e.xp6(2),e.Oqu(e.xi3(3,1,c.nzValue,"verbose"))}}function Yd(f,d){if(1&f&&(e.ynx(0),e._uU(1),e.ALo(2,"formatAmp"),e.BQk()),2&f){const c=e.oxw().$implicit;e.xp6(1),e.hij(" ",e.xi3(2,1,c.nzValue,"verbose")," ")}}function ih(f,d){if(1&f&&(e.TgZ(0,"div",5),e.YNc(1,oh,4,4,"nz-tag",6),e.YNc(2,Yd,3,4,"ng-container",7),e.qZA()),2&f){const c=e.oxw();e.xp6(1),e.Q6J("ngIf",!c.props.isMultiSelect),e.xp6(1),e.Q6J("ngIf",c.props.isMultiSelect)}}const $d=new Map([[bn.iwm.Na,"Not Applicable"],[bn.iwm.TierILevelA,"Biomarkers showing therapeutic response to FDA-approved therapy, or therapy included in professional guidelines."],[bn.iwm.TierILevelB,"Biomarkers showing therapeutic response based on well-powered studies with consensus from experts in the field."],[bn.iwm.TierIiLevelC,"FDA-approved therapies for different tumor types or investigational therapies, or multiple small published studies with some consensus."],[bn.iwm.TierIiLevelD,"Biomarkers that show plausible therapeutic significance based on preclinical studies."],[bn.iwm.TierIii,"Somatic variants in cancer genes reported in the same or different cancer types with unknown clinical significance and variants in cancer genes that have not been reported in any cancers."],[bn.iwm.TierIv,"Benign or likely benign germline variants observed at significant allele frequencies in the general population or specific subpopulation."]]),Dh=jt($t(),pt());class bu extends Dh{constructor(d){super(),this.cdr=d,this.defaultOptions={props:{label:"AMP/ASCO/CAP Category",required:!1,isMultiSelect:!1,placeholder:"Select AMP/ASCO/CAP Category"}},this.ampCategoryEnum$=new it.X([])}descriptionForCategory(d){return $d.get(d)}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEnumSelectField({optionEnum$:this.ampCategoryEnum$,optionTemplate$:this.optionTemplate$,changeDetectorRef:this.cdr}),this.configurePlaceholder()}configureStateConnections(){this.props.tooltip="If applicable, please provide the AMP/ASCO/CAP somatic variant classification.",this.ampCategoryEnum$.next((0,Ai.o6)(bn.iwm).map(d=>d)),this.optionTemplates||console.error(`${this.field.id} could not find its optionTemplates QueryList to populate its select options, so simple text labels will be displayed.`),this.optionTemplate$=this.optionTemplates?.changes.pipe((0,yt.U)(d=>d.map(c=>c))),this.state&&(this.state.requires.requiresAmpLevel$?this.onRequiresAmpCategory$=this.state.requires.requiresAmpLevel$:console.warn(`${this.field.id} field's form provides a state, but could not find requiresAmpLevel$ subject to attach.`),this.onValueChange$.pipe((0,Pe.t)(this)).subscribe(d=>{d?(this.props.extraType=void 0,this.props.description=$d.get(d)):this.props.description="Select an Assertion Type to select its AMP Category"}))}configurePlaceholder(){this.placeholder$=new it.X(this.props.placeholder),this.onRequiresAmpCategory$&&this.onRequiresAmpCategory$.pipe((0,Io.x)(),(0,Pe.t)(this)).subscribe(d=>{this.props.extraType=void 0,d?(this.formControl.value||(this.props.extraType="description",this.props.description='Please provide the AMP/ASCO/CAP <a href="https://pubmed.ncbi.nlm.nih.gov/27993330/" target="_blank">somatic variant classification</a>.'),this.props.required=!0,this.props.disabled=!1):(this.props.required=!1,this.props.disabled=!0,this.resetField()),this.cdr.markForCheck()})}}bu.\u0275fac=function(d){return new(d||bu)(e.Y36(e.sBO))},bu.\u0275cmp=e.Xpm({type:bu,selectors:[["cvc-amp-category-select"]],viewQuery:function(d,c){if(1&d&&e.Gf(K1,5,e.Rgc),2&d){let y;e.iGM(y=e.CRH())&&(c.optionTemplates=y)}},features:[e.qOj],decls:7,vars:15,consts:[[3,"cvcFormControl","cvcFormlyAttributes","cvcSelectMode","cvcPlaceholder","cvcCustomTemplate","cvcOptions","cvcShowError","cvcDisabled"],[4,"ngFor","ngForOf"],["selectedTemplate",""],["optionTemplates",""],["nz-typography","","nzType","secondary"],[1,"ant-select-selection-item-content"],["nzMode","closeable",3,"nzOnClose",4,"ngIf"],[4,"ngIf"],["nzMode","closeable",3,"nzOnClose"]],template:function(d,c){if(1&d&&(e._UZ(0,"cvc-enum-select",0),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.YNc(3,q1,3,0,"ng-container",1),e.ALo(4,"ngrxPush"),e.YNc(5,ih,3,2,"ng-template",null,2,e.W1O)),2&d){const y=e.MAs(6);e.Q6J("cvcFormControl",c.formControl)("cvcFormlyAttributes",c.field)("cvcSelectMode",c.props.isMultiSelect?"multiple":"default")("cvcPlaceholder",e.lcZ(1,9,c.placeholder$))("cvcCustomTemplate",y)("cvcOptions",e.lcZ(2,11,c.selectOption$))("cvcShowError",c.showError)("cvcDisabled",c.props.disabled),e.xp6(3),e.Q6J("ngForOf",e.lcZ(4,13,c.ampCategoryEnum$))}},dependencies:[E.sg,E.O5,Yt.j,de.ZU,We,I.fM,js.t]});const rh={types:[{name:"amp-category-select",wrappers:["form-field"],component:bu},{name:"amp-category-multi-select",wrappers:["form-field"],component:bu,defaultOptions:{props:{label:"AMP/ASCO/CAP Categories",isMultiSelect:!0}}}]};class Eu{}Eu.\u0275fac=function(d){return new(d||Eu)},Eu.\u0275mod=e.oAB({type:Eu}),Eu.\u0275inj=e.cJS({imports:[E.ez,t.UX,I._N,I.pP,g.X0.forChild(rh),Yt.X,de.ZJ,xt.s,lt,oe]});const Oh=["optionTemplates"];function sh(f,d){if(1&f&&(e.ynx(0),e.TgZ(1,"em")(2,"span",6),e._uU(3),e.qZA()(),e.BQk()),2&f){const c=e.oxw(2).$implicit;e.xp6(3),e.Oqu(c.description)}}function t4(f,d){if(1&f&&(e.TgZ(0,"nz-tag",5),e._uU(1),e.qZA(),e.TgZ(2,"span",6),e.YNc(3,sh,4,1,"ng-container",7),e.qZA()),2&f){const c=e.oxw().$implicit;e.xp6(1),e.Oqu(c.code),e.xp6(2),e.Q6J("ngIf",c.description)}}function n4(f,d){1&f&&(e.ynx(0),e.YNc(1,t4,4,2,"ng-template",null,4,e.W1O),e.BQk())}function wh(f,d){if(1&f&&(e.ynx(0),e.YNc(1,n4,3,0,"ng-container",3),e.ALo(2,"ngrxPush"),e.BQk()),2&f){const c=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,c.result$))}}function o4(f,d){if(1&f){const c=e.EpF();e.TgZ(0,"div",8)(1,"cvc-entity-tag",9),e.NdJ("cvcOnClose",function(){const ht=e.CHM(c).$implicit,It=e.oxw();return e.KtG(It.onTagClose$.next(ht.nzValue))}),e.qZA()()}if(2&f){const c=d.$implicit,y=e.oxw();e.xp6(1),e.Q6J("cvcDisableLink",!0)("cvcHasTooltip",!0)("cvcCacheId","AcmgCode:"+c.nzValue)("cvcContext",y.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",y.props.isMultiSelect?"default":"closeable")}}const Ph=jt($t(),yo());class r1 extends Ph{constructor(d,c,y){super(),this.taq=d,this.tq=c,this.changeDetectorRef=y,this.defaultOptions={props:{entityName:{singular:"ACMG/AMP Code",plural:"ACMG/AMP Codes"},isMultiSelect:!1,requireType:!0,tooltip:"If applicable, please provide evidence criteria from the standards and guidelines for interpretation of sequence variants from ACMG/AMP.",placeholder:"Search ACMG/AMP Codes",requireTypePromptFn:(re,ht)=>`Select an ${re} Type to search associated ACMG Code(s)`}},this.placeholder$=new it.X(void 0)}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEntitySelectField({typeaheadQuery:this.taq,typeaheadParam$:void 0,tagQuery:this.tq,getTypeaheadVarsFn:this.getTypeaheadVarsFn,getTypeaheadResultsFn:this.getTypeaheadResultsFn,getTagQueryVarsFn:this.getTagQueryVarsFn,getTagQueryResultsFn:this.getTagQueryResultsFn,getSelectedItemOptionFn:this.getSelectedItemOptionFn,getSelectOptionsFn:this.getSelectOptionsFn,changeDetectorRef:this.changeDetectorRef,selectComponent:this.selectComponent}),this.configurePlaceholders()}configureStateConnections(){if(this.state&&(this.stateEntityName=this.state.entityName,this.state.requires.requiresAcmgCodes$?this.onRequiresAcmgCode$=this.state.requires.requiresAcmgCodes$:console.warn(`${this.field.id} field's form provides a state, but could not find requiresAcmgCodes$ subject to attach.`),this.props.requireType)){const d=`${this.stateEntityName.toLowerCase()}Type$`;this.state.fields[d]?this.onEntityType$=this.state.fields[d]:console.error(`${this.field.id} requireType is true, however form state does not provide Subject ${d}.`)}}configurePlaceholders(){this.placeholder$.next(this.props.placeholders),this.onRequiresAcmgCode$&&this.onEntityType$&&(0,io.a)([this.onRequiresAcmgCode$,this.onEntityType$]).pipe((0,Io.x)(),(0,Pe.t)(this)).subscribe(([d,c])=>{!d&&c?(this.props.required=!1,this.props.disabled=!0,this.props.description=`${(0,J.E)(c)} ${this.state.entityName} does not include associated ACMG/AMP Code(s)`,this.props.extraType="prompt",this.resetField(),this.cdr.markForCheck()):this.props.requireType&&!c?(this.props.required=!1,this.props.disabled=!0,this.props.description=this.props.requireTypePromptFn(this.state.entityName,this.props.isMultiSelect),this.props.extraType="prompt"):d?(this.props.required=!0,this.props.disabled=!1,this.props.description='Please provide evidence criteria from the standards and guidelines for interpretation of sequence variants from ACMG/AMP in <a href="https://pubmed.ncbi.nlm.nih.gov/25741868/" target="_blank">Richards et. al. 2015</a>.',this.props.extraType="description"):(!d&&this.formControl.value||this.props.requireType&&!c&&this.formControl.value)&&this.resetField()})}getTypeaheadVarsFn(d){return{code:d}}getTypeaheadResultsFn(d){return d.data.acmgCodesTypeahead}getTagQueryResultsFn(d){return d.data.acmgCode}getTagQueryVarsFn(d){return{id:d}}getSelectedItemOptionFn(d){return{value:d.id,label:d.code}}getSelectOptionsFn(d,c){return d.map((y,re)=>(console.log(y),{label:c.get(re)||y.code,value:y.id}))}}r1.\u0275fac=function(d){return new(d||r1)(e.Y36(bn.O2u),e.Y36(bn.AIY),e.Y36(e.sBO))},r1.\u0275cmp=e.Xpm({type:r1,selectors:[["cvc-acmg-code-select"]],viewQuery:function(d,c){if(1&d&&e.Gf(Oh,5,e.Rgc),2&d){let y;e.iGM(y=e.CRH())&&(c.optionTemplates=y)}},features:[e.qOj],decls:9,vars:22,consts:[[3,"cvcSelectMode","cvcCustomTemplate","cvcFormControl","cvcFormlyAttributes","cvcEntityName","cvcPlaceholder","cvcResults","cvcOptions","cvcShowError","cvcDisabled","cvcLoading","cvcOnSearch","cvcOnOpenChange","cvcOnModelChange"],[4,"ngrxLet"],["selectedTemplate",""],[4,"ngFor","ngForOf"],["optionTemplates",""],["nz-tooltip",""],["nz-typography","","nzType","secondary"],[4,"ngIf"],[1,"ant-select-selection-item-content"],[3,"cvcDisableLink","cvcHasTooltip","cvcCacheId","cvcContext","cvcMode","cvcOnClose"]],template:function(d,c){if(1&d&&(e.TgZ(0,"cvc-entity-select",0),e.NdJ("cvcOnSearch",function(re){return c.onSearch$.next(re)})("cvcOnOpenChange",function(re){return c.onOpenChange$.next(re)})("cvcOnModelChange",function(re){return c.props.change&&c.props.change(c.field,re)}),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.ALo(3,"ngrxPush"),e.ALo(4,"ngrxPush"),e.ALo(5,"ngrxPush"),e.qZA(),e.YNc(6,wh,3,3,"ng-container",1),e.YNc(7,o4,2,5,"ng-template",null,2,e.W1O)),2&d){const y=e.MAs(8);e.Q6J("cvcSelectMode",c.props.isMultiSelect?"multiple":"default")("cvcCustomTemplate",y)("cvcFormControl",c.formControl)("cvcFormlyAttributes",c.field)("cvcEntityName",c.props.entityName)("cvcPlaceholder",e.lcZ(1,12,c.placeholder$))("cvcResults",e.lcZ(2,14,c.result$))("cvcOptions",e.lcZ(3,16,c.selectOption$))("cvcShowError",c.showError)("cvcDisabled",c.onRequiresAcmgCode$&&!e.lcZ(4,18,c.onRequiresAcmgCode$))("cvcLoading",e.lcZ(5,20,c.isLoading$)),e.xp6(6),e.Q6J("ngrxLet",c.onSearch$)}},dependencies:[E.sg,E.O5,I.eJ,At.SY,de.ZU,Yt.j,Ue,Tt.J,I.fM],changeDetection:0});const r4={types:[{name:"acmg-code-select",wrappers:["form-field"],component:r1,defaultOptions:{props:{label:"ACMG/AMP Code"}}},{name:"acmg-code-multi-select",wrappers:["form-field"],component:r1,defaultOptions:{props:{isMultiSelect:!0,label:"ACMG/AMP Code(s)"}}}]};class X1{}X1.\u0275fac=function(d){return new(d||X1)},X1.\u0275mod=e.oAB({type:X1}),X1.\u0275inj=e.cJS({imports:[E.ez,t.UX,I._N,I.pP,g.X0.forChild(r4),xn.L,Yn.sL,Ze.LV,co.$6,Bn.Qp,_t.PV,Ae.o7,w.Jb,At.cg,nn.zf,s.U5,rt.ic,de.ZJ,Yt.X,lt,jn,xt.s,Zt.x,ws]});const ba=["optionTemplates"];function Ih(f,d){if(1&f&&(e.ynx(0),e.TgZ(1,"em")(2,"span",6),e._uU(3),e.qZA()(),e.BQk()),2&f){const c=e.oxw(2).$implicit;e.xp6(3),e.Oqu(c.description)}}function s4(f,d){if(1&f&&(e.TgZ(0,"nz-tag",5),e._uU(1),e.qZA(),e.TgZ(2,"span",6),e.YNc(3,Ih,4,1,"ng-container",7),e.qZA()),2&f){const c=e.oxw().$implicit;e.xp6(1),e.Oqu(c.code),e.xp6(2),e.Q6J("ngIf",c.description)}}function t2(f,d){1&f&&(e.ynx(0),e.YNc(1,s4,4,2,"ng-template",null,4,e.W1O),e.BQk())}function ah(f,d){if(1&f&&(e.ynx(0),e.YNc(1,t2,3,0,"ng-container",3),e.ALo(2,"ngrxPush"),e.BQk()),2&f){const c=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,c.result$))}}function Ah(f,d){if(1&f){const c=e.EpF();e.TgZ(0,"div",8)(1,"cvc-entity-tag",9),e.NdJ("cvcOnClose",function(){const ht=e.CHM(c).$implicit,It=e.oxw();return e.KtG(It.onTagClose$.next(ht.nzValue))}),e.qZA()()}if(2&f){const c=d.$implicit,y=e.oxw();e.xp6(1),e.Q6J("cvcDisableLink",!0)("cvcHasTooltip",!0)("cvcCacheId","ClingenCode:"+c.nzValue)("cvcContext",y.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",y.props.isMultiSelect?"default":"closeable")}}const a4=jt($t(),yo());class ed extends a4{constructor(d,c,y){super(),this.taq=d,this.tq=c,this.changeDetectorRef=y,this.exclusiveCodes=new Set,this.exclusiveSelected=!1,this.defaultOptions={props:{entityName:{singular:"ClinGen/CGC/VICC Code",plural:"ClinGen/CGC/VICC Codes"},isMultiSelect:!1,requireType:!0,tooltip:"If applicable, please provide evidence classifications from the Standards for the classification of pathogenicity of somatic variants in cancer (oncogenicity).",placeholder:"Search ClinGen/CGC/VICC Codes",requireTypePromptFn:(re,ht)=>`Select an ${re} Type to search associated ClinGen Code(s)`}},this.placeholder$=new it.X(void 0)}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEntitySelectField({typeaheadQuery:this.taq,typeaheadParam$:void 0,tagQuery:this.tq,getTypeaheadVarsFn:this.getTypeaheadVarsFn,getTypeaheadResultsFn:this.getTypeaheadResultsFn,getTagQueryVarsFn:this.getTagQueryVarsFn,getTagQueryResultsFn:this.getTagQueryResultsFn,getSelectedItemOptionFn:this.getSelectedItemOptionFn,getSelectOptionsFn:this.getSelectOptionsFn,changeDetectorRef:this.changeDetectorRef,selectComponent:this.selectComponent}),this.configurePlaceholders(),this.onValueChange$.pipe((0,Pe.t)(this)).subscribe(d=>{if(d&&Array.isArray(d)&&d.length>1){const c=d.find(y=>this.exclusiveCodes.has(y));c?(this.previousDescription=this.props.description,this.previousDescriptionType=this.props.extraType,this.props.description="You have selected N/A which precludes selecting any other codes. Please remove it if you wish to select additional codes.",this.exclusiveSelected=!0,this.formControl.setValue([c])):this.exclusiveSelected=!1}this.previousDescription&&!this.exclusiveSelected&&(this.props.description=this.previousDescription,this.props.extraType=this.previousDescriptionType),this.cdr.detectChanges()})}configureStateConnections(){if(this.state&&(this.stateEntityName=this.state.entityName,this.state.requires.requiresClingenCodes$?this.onRequiresClingenCode$=this.state.requires.requiresClingenCodes$:console.warn(`${this.field.id} field's form provides a state, but could not find requiresClingenCodes$ subject to attach.`),this.props.requireType)){const d=`${this.stateEntityName.toLowerCase()}Type$`;this.state.fields[d]?this.onEntityType$=this.state.fields[d]:console.error(`${this.field.id} requireType is true, however form state does not provide Subject ${d}.`)}}configurePlaceholders(){this.placeholder$.next(this.props.placeholders),this.onRequiresClingenCode$&&this.onEntityType$&&(0,io.a)([this.onRequiresClingenCode$,this.onEntityType$]).pipe((0,Io.x)(),(0,Pe.t)(this)).subscribe(([d,c])=>{!d&&c?(this.props.required=!1,this.props.disabled=!0,this.props.description=`${(0,J.E)(c)} ${this.state.entityName} does not include associated ClinGen/CGC/VICC Code(s)`,this.props.extraType="prompt",this.resetField(),this.cdr.markForCheck()):this.props.requireType&&!c?(this.props.required=!1,this.props.disabled=!0,this.props.description=this.props.requireTypePromptFn(this.state.entityName,this.props.isMultiSelect),this.props.extraType="prompt"):d?(this.props.required=!0,this.props.disabled=!1,this.props.description='Please provide the evidence classifications from the Standards for the classification of pathogenicity of somatic variants in cancer (oncogenicity) in <a href="https://pubmed.ncbi.nlm.nih.gov/25741868/" target="_blank">Horak et. al. 2022.</a>.',this.props.extraType="description"):(!d&&this.formControl.value||this.props.requireType&&!c&&this.formControl.value)&&this.resetField()})}getTypeaheadVarsFn(d){return{code:d}}getTypeaheadResultsFn(d){return d.data.clingenCodesTypeahead.forEach(c=>{c.exclusive&&this.exclusiveCodes.add(c.id)}),d.data.clingenCodesTypeahead}getTagQueryResultsFn(d){return d.data.clingenCode}getTagQueryVarsFn(d){return{id:d}}getSelectedItemOptionFn(d){return{value:d.id,label:d.code}}getSelectOptionsFn(d,c){return d.map((y,re)=>({label:c.get(re)||y.code,value:y.id}))}}ed.\u0275fac=function(d){return new(d||ed)(e.Y36(bn.E2B),e.Y36(bn.R8F),e.Y36(e.sBO))},ed.\u0275cmp=e.Xpm({type:ed,selectors:[["cvc-clingen-code-select"]],viewQuery:function(d,c){if(1&d&&e.Gf(ba,5,e.Rgc),2&d){let y;e.iGM(y=e.CRH())&&(c.optionTemplates=y)}},features:[e.qOj],decls:9,vars:22,consts:[[3,"cvcSelectMode","cvcCustomTemplate","cvcFormControl","cvcFormlyAttributes","cvcEntityName","cvcPlaceholder","cvcResults","cvcOptions","cvcShowError","cvcDisabled","cvcLoading","cvcOnSearch","cvcOnOpenChange","cvcOnModelChange"],[4,"ngrxLet"],["selectedTemplate",""],[4,"ngFor","ngForOf"],["optionTemplates",""],["nz-tooltip",""],["nz-typography","","nzType","secondary"],[4,"ngIf"],[1,"ant-select-selection-item-content"],[3,"cvcDisableLink","cvcHasTooltip","cvcCacheId","cvcContext","cvcMode","cvcOnClose"]],template:function(d,c){if(1&d&&(e.TgZ(0,"cvc-entity-select",0),e.NdJ("cvcOnSearch",function(re){return c.onSearch$.next(re)})("cvcOnOpenChange",function(re){return c.onOpenChange$.next(re)})("cvcOnModelChange",function(re){return c.props.change&&c.props.change(c.field,re)}),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.ALo(3,"ngrxPush"),e.ALo(4,"ngrxPush"),e.ALo(5,"ngrxPush"),e.qZA(),e.YNc(6,ah,3,3,"ng-container",1),e.YNc(7,Ah,2,5,"ng-template",null,2,e.W1O)),2&d){const y=e.MAs(8);e.Q6J("cvcSelectMode",c.props.isMultiSelect?"multiple":"default")("cvcCustomTemplate",y)("cvcFormControl",c.formControl)("cvcFormlyAttributes",c.field)("cvcEntityName",c.props.entityName)("cvcPlaceholder",e.lcZ(1,12,c.placeholder$))("cvcResults",e.lcZ(2,14,c.result$))("cvcOptions",e.lcZ(3,16,c.selectOption$))("cvcShowError",c.showError)("cvcDisabled",c.onRequiresClingenCode$&&!e.lcZ(4,18,c.onRequiresClingenCode$))("cvcLoading",e.lcZ(5,20,c.isLoading$)),e.xp6(6),e.Q6J("ngrxLet",c.onSearch$)}},dependencies:[E.sg,E.O5,I.eJ,At.SY,de.ZU,Yt.j,Ue,Tt.J,I.fM],changeDetection:0});const c4={types:[{name:"clingen-code-select",wrappers:["form-field"],component:ed,defaultOptions:{props:{label:"ClinGen/CGC/VICC Code"}}},{name:"clingen-code-multi-select",wrappers:["form-field"],component:ed,defaultOptions:{props:{isMultiSelect:!0,label:"ClinGen/CGC/VICC Code(s)"}}}]};class s1{}s1.\u0275fac=function(d){return new(d||s1)},s1.\u0275mod=e.oAB({type:s1}),s1.\u0275inj=e.cJS({imports:[E.ez,t.UX,I._N,I.pP,g.X0.forChild(c4),xn.L,Yn.sL,Ze.LV,co.$6,Bn.Qp,_t.PV,Ae.o7,w.Jb,At.cg,nn.zf,s.U5,rt.ic,de.ZJ,Yt.X,lt,jn,xt.s,Zt.x,ws]});const l4=["optionTemplates"];function u4(f,d){if(1&f&&(e.TgZ(0,"nz-tag",5),e._uU(1),e.qZA()),2&f){const c=e.oxw().$implicit;e.xp6(1),e.Oqu(c.name)}}function ch(f,d){1&f&&(e.ynx(0),e.YNc(1,u4,2,1,"ng-template",null,4,e.W1O),e.BQk())}function d4(f,d){if(1&f&&(e.ynx(0),e.YNc(1,ch,3,0,"ng-container",3),e.ALo(2,"ngrxPush"),e.BQk()),2&f){const c=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,c.result$))}}function p4(f,d){if(1&f){const c=e.EpF();e.TgZ(0,"div",6)(1,"cvc-entity-tag",7),e.NdJ("cvcOnClose",function(){const ht=e.CHM(c).$implicit,It=e.oxw();return e.KtG(It.onTagClose$.next(ht.nzValue))}),e.qZA()()}if(2&f){const c=d.$implicit,y=e.oxw();e.xp6(1),e.Q6J("cvcDisableLink",!0)("cvcCacheId","NccnGuideline:"+c.nzValue)("cvcContext",y.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",y.props.isMultiSelect?"default":"closeable")}}const h4=jt($t(),yo());class td extends h4{constructor(d,c,y){super(),this.taq=d,this.tq=c,this.changeDetectorRef=y,this.defaultOptions={props:{entityName:{singular:"NCCN Guideline",plural:"NCCN Guidelines"},isMultiSelect:!1,requireType:!1,tooltip:"If applicable, please provide cancer (e.g., Breast Cancer) for the appropriate NCCN guideline.",placeholder:"Search NCCN Guidelines"}},this.placeholder$=new it.X(void 0)}ngAfterViewInit(){this.configureBaseField(),this.configureEntitySelectField({typeaheadQuery:this.taq,typeaheadParam$:void 0,tagQuery:this.tq,getTypeaheadVarsFn:this.getTypeaheadVarsFn,getTypeaheadResultsFn:this.getTypeaheadResultsFn,getTagQueryVarsFn:this.getTagQueryVarsFn,getTagQueryResultsFn:this.getTagQueryResultsFn,getSelectedItemOptionFn:this.getSelectedItemOptionFn,getSelectOptionsFn:this.getSelectOptionsFn,changeDetectorRef:this.changeDetectorRef,selectComponent:this.selectComponent})}getTypeaheadVarsFn(d){return{name:d}}getTypeaheadResultsFn(d){return d.data.nccnGuidelinesTypeahead}getTagQueryResultsFn(d){return d.data.nccnGuideline}getTagQueryVarsFn(d){return{id:d}}getSelectedItemOptionFn(d){return{value:d.id,label:d.name}}getSelectOptionsFn(d,c){return d.map((y,re)=>({label:c.get(re)||y.name,value:y.id}))}}td.\u0275fac=function(d){return new(d||td)(e.Y36(bn.sA8),e.Y36(bn.N$2),e.Y36(e.sBO))},td.\u0275cmp=e.Xpm({type:td,selectors:[["cvc-nccn-guideline-select"]],viewQuery:function(d,c){if(1&d&&e.Gf(l4,5,e.Rgc),2&d){let y;e.iGM(y=e.CRH())&&(c.optionTemplates=y)}},features:[e.qOj],decls:8,vars:20,consts:[[3,"cvcSelectMode","cvcCustomTemplate","cvcFormControl","cvcFormlyAttributes","cvcEntityName","cvcPlaceholder","cvcResults","cvcOptions","cvcShowError","cvcDisabled","cvcLoading","cvcOnSearch","cvcOnOpenChange","cvcOnModelChange"],[4,"ngrxLet"],["selectedTemplate",""],[4,"ngFor","ngForOf"],["optionTemplates",""],["nz-tooltip",""],[1,"ant-select-selection-item-content"],[3,"cvcDisableLink","cvcCacheId","cvcContext","cvcMode","cvcOnClose"]],template:function(d,c){if(1&d&&(e.TgZ(0,"cvc-entity-select",0),e.NdJ("cvcOnSearch",function(re){return c.onSearch$.next(re)})("cvcOnOpenChange",function(re){return c.onOpenChange$.next(re)})("cvcOnModelChange",function(re){return c.props.change&&c.props.change(c.field,re)}),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.ALo(3,"ngrxPush"),e.ALo(4,"ngrxPush"),e.qZA(),e.YNc(5,d4,3,3,"ng-container",1),e.YNc(6,p4,2,4,"ng-template",null,2,e.W1O)),2&d){const y=e.MAs(7);e.Q6J("cvcSelectMode",c.props.isMultiSelect?"multiple":"default")("cvcCustomTemplate",y)("cvcFormControl",c.formControl)("cvcFormlyAttributes",c.field)("cvcEntityName",c.props.entityName)("cvcPlaceholder",e.lcZ(1,12,c.placeholder$))("cvcResults",e.lcZ(2,14,c.result$))("cvcOptions",e.lcZ(3,16,c.selectOption$))("cvcShowError",c.showError)("cvcDisabled",!1)("cvcLoading",e.lcZ(4,18,c.isLoading$)),e.xp6(5),e.Q6J("ngrxLet",c.onSearch$)}},dependencies:[E.sg,I.eJ,At.SY,Yt.j,Ue,Tt.J,I.fM],changeDetection:0});const f4={types:[{name:"nccn-guideline-select",wrappers:["form-field"],component:td,defaultOptions:{props:{label:"NCCN Guideline"}}},{name:"nccn-guideline-multi-select",wrappers:["form-field"],component:td,defaultOptions:{props:{isMultiSelect:!0,label:"NCCN Guideline(s)"}}}]};class Is{}Is.\u0275fac=function(d){return new(d||Is)},Is.\u0275mod=e.oAB({type:Is}),Is.\u0275inj=e.cJS({imports:[E.ez,t.UX,I._N,I.pP,g.X0.forChild(f4),xn.L,Yn.sL,Ze.LV,co.$6,Bn.Qp,_t.PV,Ae.o7,w.Jb,At.cg,nn.zf,s.U5,rt.ic,de.ZJ,Yt.X,lt,jn,xt.s,Zt.x,ws]});const lh=jt($t());class nd extends lh{constructor(d){super(),this.cdr=d,this.defaultDescription="Please enter the version of the NCCN guideline you're referencing in the format <strong>Version.Year</strong>",this.defaultOptions={validators:{nccnVersionNumber:{expression:c=>{if(c.value){if(/^\d{1,2}\.\d{4}$/.test(c.value)){let y=+c.value.split(".")[1];return y>=2e3&&y<=(new Date).getFullYear()+1}return!1}return!0},message:(c,y)=>`"${y.formControl?.value}" does not fit the format Version.Year`}},props:{label:"NCCN Guideline Version",extraType:"description",description:this.defaultDescription}}}ngAfterViewInit(){this.configureBaseField(),this.state&&this.state.formReady$?this.state.formReady$.pipe((0,Ge.h)(d=>d),(0,Do.q)(1),(0,Pe.t)(this)).subscribe(d=>{this.configureField()}):this.configureField()}configureField(){this.state?.fields.nccnGuidelineId$.pipe((0,Pe.t)(this)).subscribe(d=>{d?(this.props.disabled=!1,this.props.required=!0,this.props.extraType="description",this.props.description=this.defaultDescription):(this.props.disabled=!0,this.props.required=!1,this.props.extraType="prompt",this.props.description="NCCN Guideline Version is only required when NCCN Guideline is specified.",this.formControl.setValue(void 0))})}}nd.\u0275fac=function(d){return new(d||nd)(e.Y36(e.sBO))},nd.\u0275cmp=e.Xpm({type:nd,selectors:[["cvc-nccn-guideline-version-input"]],features:[e.qOj],decls:1,vars:2,consts:[["nz-input","","placeholder","ex: 1.2023",3,"formControl","formlyAttributes"]],template:function(d,c){1&d&&e._UZ(0,"input",0),2&d&&e.Q6J("formControl",c.formControl)("formlyAttributes",c.field)},dependencies:[t.Fj,t.JJ,t.oH,g.JD,Ae.Zp],encapsulation:2,changeDetection:0});const Fh={types:[{name:"nccn-guideline-version-input",component:nd,wrappers:["form-field"]}]};class a1{}a1.\u0275fac=function(d){return new(d||a1)},a1.\u0275mod=e.oAB({type:a1}),a1.\u0275inj=e.cJS({imports:[E.ez,t.UX,g.X0.forChild(Fh),Ae.o7,lt]});const m4=jt($t());class od extends m4{constructor(){super(...arguments),this.defaultDescription="Check this if the referenced therapy is approved for use by the FDA in the specific disease associated with the Assertion (as in a listing <a href='https://www.cancer.gov/about-cancer/treatment/drugs/cancer-type' target='_blank'>here</a>.)",this.defaultOptions={props:{hideLabel:!1,label:"FDA Regulatory Approval",description:this.defaultDescription}}}ngAfterViewInit(){this.configureBaseField(),this.state&&(this.state.formReady$?this.state.formReady$.pipe((0,Ge.h)(d=>d),(0,Do.q)(1),(0,Pe.t)(this)).subscribe(d=>{this.configureField()}):this.configureField())}configureField(){this.state?.requires.allowsFdaApproval$.pipe((0,Pe.t)(this)).subscribe(d=>{d?(this.props.disabled=!1,this.props.extraType="description",this.props.description=this.defaultDescription,void 0===this.formControl.value&&this.formControl.setValue(!1)):(this.props.disabled=!0,this.props.description="FDA Regulatory Approval does not apply to this Assertion Type",this.formControl.setValue(void 0))})}}od.\u0275fac=function(){let f;return function(c){return(f||(f=e.n5z(od)))(c||od)}}(),od.\u0275cmp=e.Xpm({type:od,selectors:[["cvc-fda-regulatory-approval-checkbox"]],features:[e.qOj],decls:2,vars:4,consts:[["nz-checkbox","",3,"nzIndeterminate","formControl","formlyAttributes","ngModelChange"]],template:function(d,c){1&d&&(e.TgZ(0,"label",0),e.NdJ("ngModelChange",function(re){return c.props.change&&c.props.change(c.field,re)}),e._uU(1),e.qZA()),2&d&&(e.Q6J("nzIndeterminate",c.props.indeterminate&&null==c.formControl.value)("formControl",c.formControl)("formlyAttributes",c.field),e.xp6(1),e.hij(" ",c.props.label,"\n"))},dependencies:[t.JJ,t.oH,kt.Ie,g.JD],changeDetection:0});const g4={types:[{name:"fda-regulatory-approval-checkbox",wrappers:["form-field"],component:od}]};class Su{}Su.\u0275fac=function(d){return new(d||Su)},Su.\u0275mod=e.oAB({type:Su}),Su.\u0275inj=e.cJS({imports:[E.ez,t.UX,kt.Wr,g.X0.forChild(g4),lt]});const v4=jt($t());class id extends v4{constructor(){super(...arguments),this.defaultDescription='Select Yes if an FDA approved companion test exists for the variant and therapy associated with the Assertion (such as tests listed <a href="https://www.fda.gov/medical-devices/in-vitro-diagnostics/list-cleared-or-approved-companion-diagnostic-devices-in-vitro-and-imaging-tools" target="_blank">here</a>).',this.defaultOptions={props:{hideLabel:!1,label:"FDA Companion Test",description:this.defaultDescription}}}ngAfterViewInit(){this.configureBaseField(),this.state&&(this.state.formReady$?this.state.formReady$.pipe((0,Ge.h)(d=>d),(0,Do.q)(1),(0,Pe.t)(this)).subscribe(d=>{this.configureField()}):this.configureField())}configureField(){this.state?.fields.fdaRegulatoryApproval$.pipe((0,Pe.t)(this)).subscribe(d=>{d?(this.props.disabled=!1,this.props.extraType="description",this.props.description=this.defaultDescription,void 0===this.formControl.value&&this.formControl.setValue(!1)):(this.props.disabled=!0,this.props.description="FDA Companion Test only applies when Regulatory Approval is selected",this.formControl.setValue(void 0))})}}id.\u0275fac=function(){let f;return function(c){return(f||(f=e.n5z(id)))(c||id)}}(),id.\u0275cmp=e.Xpm({type:id,selectors:[["cvc-fda-companion-test-checkbox"]],features:[e.qOj],decls:2,vars:4,consts:[["nz-checkbox","",3,"nzIndeterminate","formControl","formlyAttributes","ngModelChange"]],template:function(d,c){1&d&&(e.TgZ(0,"label",0),e.NdJ("ngModelChange",function(re){return c.props.change&&c.props.change(c.field,re)}),e._uU(1),e.qZA()),2&d&&(e.Q6J("nzIndeterminate",c.props.indeterminate&&null==c.formControl.value)("formControl",c.formControl)("formlyAttributes",c.field),e.xp6(1),e.hij(" ",c.props.label,"\n"))},dependencies:[t.JJ,t.oH,kt.Ie,g.JD],changeDetection:0});const Op={types:[{name:"fda-companion-test-checkbox",wrappers:["form-field"],component:id}]};class xu{}xu.\u0275fac=function(d){return new(d||xu)},xu.\u0275mod=e.oAB({type:xu}),xu.\u0275inj=e.cJS({imports:[E.ez,t.UX,kt.Wr,g.X0.forChild(Op),lt]});const wp=["optionTemplates"];function n2(f,d){if(1&f&&(e.TgZ(0,"nz-tag")(1,"strong"),e._uU(2),e.qZA()()),2&f){const c=e.oxw().$implicit;e.xp6(2),e.Oqu(c)}}function uh(f,d){1&f&&(e.ynx(0),e.YNc(1,n2,3,1,"ng-template",null,3,e.W1O),e.BQk())}function o2(f,d){if(1&f){const c=e.EpF();e.TgZ(0,"nz-tag",7),e.NdJ("nzOnClose",function(re){e.CHM(c);const ht=e.oxw(2);return e.KtG(ht.onTagClose$.next(re))}),e.TgZ(1,"strong"),e._uU(2),e.qZA()()}if(2&f){const c=e.oxw().$implicit;e.xp6(2),e.Oqu(c.nzValue)}}function Nh(f,d){if(1&f&&(e.ynx(0),e._uU(1),e.BQk()),2&f){const c=e.oxw().$implicit;e.xp6(1),e.hij(" ",c.nzValue," ")}}function Lh(f,d){if(1&f&&(e.TgZ(0,"div",4),e.YNc(1,o2,3,1,"nz-tag",5),e.YNc(2,Nh,2,1,"ng-container",6),e.qZA()),2&f){const c=e.oxw();e.xp6(1),e.Q6J("ngIf",!c.props.isMultiSelect),e.xp6(1),e.Q6J("ngIf",c.props.isMultiSelect)}}const kh=jt($t(),pt());class c1 extends kh{constructor(d){super(),this.cdr=d,this.defaultOptions={props:{label:"Reference Build",required:!1,isMultiSelect:!1,description:"Select the human genome reference sequence from which these coordinates are obtained",placeholder:"Select Reference Build"}},this.buildEnum$=new it.X([])}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEnumSelectField({optionEnum$:this.buildEnum$,optionTemplate$:this.optionTemplate$,changeDetectorRef:this.cdr})}configureStateConnections(){this.placeholder$=new it.X(this.props.placeholder),this.buildEnum$.next((0,Ai.o6)(bn.JDX).map(d=>d)),this.optionTemplates||console.error(`${this.field.id} could not find its optionTemplates QueryList to populate its select options, so simple text labels will be displayed.`),this.optionTemplate$=this.optionTemplates?.changes.pipe((0,yt.U)(d=>d.map(c=>c)))}}c1.\u0275fac=function(d){return new(d||c1)(e.Y36(e.sBO))},c1.\u0275cmp=e.Xpm({type:c1,selectors:[["cvc-reference-build-select"]],viewQuery:function(d,c){if(1&d&&e.Gf(wp,5,e.Rgc),2&d){let y;e.iGM(y=e.CRH())&&(c.optionTemplates=y)}},features:[e.qOj],decls:7,vars:15,consts:[[3,"cvcFormControl","cvcFormlyAttributes","cvcSelectMode","cvcPlaceholder","cvcCustomTemplate","cvcOptions","cvcShowError","cvcDisabled"],[4,"ngFor","ngForOf"],["selectedTemplate",""],["optionTemplates",""],[1,"ant-select-selection-item-content"],["nzMode","closeable",3,"nzOnClose",4,"ngIf"],[4,"ngIf"],["nzMode","closeable",3,"nzOnClose"]],template:function(d,c){if(1&d&&(e._UZ(0,"cvc-enum-select",0),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.YNc(3,uh,3,0,"ng-container",1),e.ALo(4,"ngrxPush"),e.YNc(5,Lh,3,2,"ng-template",null,2,e.W1O)),2&d){const y=e.MAs(6);e.Q6J("cvcFormControl",c.formControl)("cvcFormlyAttributes",c.field)("cvcSelectMode",c.props.isMultiSelect?"multiple":"default")("cvcPlaceholder",e.lcZ(1,9,c.placeholder$))("cvcCustomTemplate",y)("cvcOptions",e.lcZ(2,11,c.selectOption$))("cvcShowError",c.showError)("cvcDisabled",c.props.disabled),e.xp6(3),e.Q6J("ngForOf",e.lcZ(4,13,c.buildEnum$))}},dependencies:[E.sg,E.O5,Yt.j,We,I.fM]});const dh={types:[{name:"reference-build-select",wrappers:["form-field"],component:c1},{name:"reference-build-multi-select",wrappers:["form-field"],component:c1,defaultOptions:{props:{label:"Levels",isMultiSelect:!0}}}]};class Gs{}Gs.\u0275fac=function(d){return new(d||Gs)},Gs.\u0275mod=e.oAB({type:Gs}),Gs.\u0275inj=e.cJS({imports:[E.ez,t.UX,I._N,I.pP,g.X0.forChild(dh),Yt.X,xt.s,lt,oe]});const Pp=["optionTemplates"];function Ip(f,d){if(1&f&&(e.ynx(0),e.TgZ(1,"em"),e._UZ(2,"span",8),e.ALo(3,"highlightTypeahead"),e.qZA(),e.BQk()),2&f){const c=e.oxw(2).$implicit,y=e.oxw().ngrxLet;e.xp6(2),e.Q6J("innerHtml",e.xi3(3,1,c.soid,y),e.oJD)}}function Ud(f,d){if(1&f&&(e._UZ(0,"cvc-entity-tag",5),e.TgZ(1,"span",6),e.YNc(2,Ip,4,4,"ng-container",7),e.qZA()),2&f){const c=e.oxw().$implicit,y=e.oxw().ngrxLet;e.Q6J("cvcDisableLink",!0)("cvcCacheId",c.__typename+":"+c.id)("cvcEmphasize",y),e.xp6(2),e.Q6J("ngIf",c.soid)}}function _4(f,d){1&f&&(e.ynx(0),e.YNc(1,Ud,3,4,"ng-template",null,4,e.W1O),e.BQk())}function Rh(f,d){if(1&f&&(e.ynx(0),e.YNc(1,_4,3,0,"ng-container",3),e.ALo(2,"ngrxPush"),e.BQk()),2&f){const c=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,c.result$))}}function Vh(f,d){if(1&f){const c=e.EpF();e.TgZ(0,"div",9)(1,"cvc-entity-tag",10),e.NdJ("cvcOnClose",function(){const ht=e.CHM(c).$implicit,It=e.oxw();return e.KtG(It.onTagClose$.next(ht.nzValue))}),e.qZA()()}if(2&f){const c=d.$implicit,y=e.oxw();e.xp6(1),e.Q6J("cvcCacheId","VariantType:"+c.nzValue)("cvcContext",y.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",y.props.isMultiSelect?"default":"closeable")}}const y4=jt($t(),yo());class l1 extends y4{constructor(d,c,y){super(),this.taq=d,this.tq=c,this.changeDetectorRef=y,this.defaultOptions={props:{entityName:{singular:"VariantType",plural:"VariantTypes"},isMultiSelect:!1,placeholders:{default:"Search Variant Types",multiDefault:"Select VariantType(s)"},description:'Add one or more variant types from the <a href="http://www.sequenceontology.org/browser/" target="_blank">Sequence Ontology</a> (e.g., missense, loss-of-function). Be specific as possible, avoid the addition of root concepts, and use the sequence_variant tree of the sequence ontology.',extraType:"prompt"}},this.placeholder$=new it.X(this.defaultOptions.props.placeholders.default)}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEntitySelectField({typeaheadQuery:this.taq,typeaheadParam$:void 0,tagQuery:this.tq,getTypeaheadVarsFn:this.getTypeaheadVarsFn,getTypeaheadResultsFn:this.getTypeaheadResultsFn,getTagQueryVarsFn:this.getTagQueryVarsFn,getTagQueryResultsFn:this.getTagQueryResultsFn,getSelectedItemOptionFn:this.getSelectedItemOptionFn,getSelectOptionsFn:this.getSelectOptionsFn,changeDetectorRef:this.changeDetectorRef,selectOpen$:this.selectOpen$,selectComponent:this.selectComponent}),this.configurePlaceholders()}configureStateConnections(){}configurePlaceholders(){}getTypeaheadVarsFn(d){return{name:d}}getTypeaheadResultsFn(d){return d.data.variantTypeTypeahead}getTagQueryVarsFn(d){return{id:d}}getTagQueryResultsFn(d){return d.data.variantType}getSelectedItemOptionFn(d){return{value:d.id,label:d.name}}getSelectOptionsFn(d,c){return d.map((y,re)=>({label:c.get(re)||y.name,value:y.id}))}}l1.\u0275fac=function(d){return new(d||l1)(e.Y36(bn.jmY),e.Y36(bn._nE),e.Y36(e.sBO))},l1.\u0275cmp=e.Xpm({type:l1,selectors:[["cvc-variant-type-select"]],viewQuery:function(d,c){if(1&d&&e.Gf(Pp,5,e.Rgc),2&d){let y;e.iGM(y=e.CRH())&&(c.optionTemplates=y)}},features:[e.qOj],decls:8,vars:19,consts:[[3,"cvcSelectMode","cvcCustomTemplate","cvcFormControl","cvcFormlyAttributes","cvcEntityName","cvcPlaceholder","cvcResults","cvcOptions","cvcShowError","cvcLoading","cvcOnSearch","cvcOnOpenChange","cvcOnModelChange"],[4,"ngrxLet"],["selectedTemplate",""],[4,"ngFor","ngForOf"],["optionTemplates",""],[3,"cvcDisableLink","cvcCacheId","cvcEmphasize"],["nz-typography","","nzType","secondary"],[4,"ngIf"],["nz-typography","","nzType","secondary",3,"innerHtml"],[1,"ant-select-selection-item-content"],[3,"cvcCacheId","cvcContext","cvcMode","cvcOnClose"]],template:function(d,c){if(1&d&&(e.TgZ(0,"cvc-entity-select",0),e.NdJ("cvcOnSearch",function(re){return c.onSearch$.next(re)})("cvcOnOpenChange",function(re){return c.onOpenChange$.next(re)})("cvcOnModelChange",function(re){return c.props.change&&c.props.change(c.field,re)}),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.ALo(3,"ngrxPush"),e.ALo(4,"ngrxPush"),e.qZA(),e.YNc(5,Rh,3,3,"ng-container",1),e.YNc(6,Vh,2,3,"ng-template",null,2,e.W1O)),2&d){const y=e.MAs(7);e.Q6J("cvcSelectMode",c.props.isMultiSelect?"multiple":"default")("cvcCustomTemplate",y)("cvcFormControl",c.formControl)("cvcFormlyAttributes",c.field)("cvcEntityName",c.props.entityName)("cvcPlaceholder",e.lcZ(1,11,c.placeholder$))("cvcResults",e.lcZ(2,13,c.result$))("cvcOptions",e.lcZ(3,15,c.selectOption$))("cvcShowError",c.showError)("cvcLoading",e.lcZ(4,17,c.isLoading$)),e.xp6(5),e.Q6J("ngrxLet",c.onSearch$)}},dependencies:[E.sg,E.O5,I.eJ,de.ZU,Ue,Tt.J,I.fM,P.A],changeDetection:0});const jd={types:[{name:"variant-type-select",wrappers:["form-field"],component:l1,defaultOptions:{props:{label:"Variant Type"}}},{name:"variant-type-multi-select",wrappers:["form-field"],component:l1,defaultOptions:{props:{isMultiSelect:!0,label:"Variant Types"}}}]};class rd{}rd.\u0275fac=function(d){return new(d||rd)},rd.\u0275mod=e.oAB({type:rd}),rd.\u0275inj=e.cJS({imports:[E.ez,t.UX,I._N,I.pP,g.X0.forChild(jd),xn.L,Yn.sL,Ze.LV,co.$6,Bn.Qp,_t.PV,Ae.o7,w.Jb,At.cg,nn.zf,s.U5,rt.ic,de.ZJ,Yt.X,lt,jn,xt.s,Zt.x]});var Du=a(9289);function C4(f,d){if(1&f){const c=e.EpF();e.TgZ(0,"cvc-string-tag",5),e.NdJ("cvcOnClose",function(){const ht=e.CHM(c).$implicit,It=e.oxw(2);return e.KtG(It.tagClosed(ht))}),e.qZA()}if(2&f){const c=d.$implicit;e.Q6J("cvcMode","closeable")("cvcLabel",c)}}function z4(f,d){if(1&f){const c=e.EpF();e.TgZ(0,"div"),e.YNc(1,C4,1,2,"cvc-string-tag",3),e.ALo(2,"ngrxPush"),e.TgZ(3,"input",4),e.NdJ("keydown.enter",function(re){e.CHM(c);const ht=e.oxw();return e.KtG(ht.onEnter(re))}),e.qZA()()}if(2&f){const c=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,2,c.clinvarIds$)),e.xp6(2),e.Q6J("placeholder",c.props.placeholder)}}const T4=jt($t(),la);class sd extends T4{constructor(d){super(),this.cdr=d,this.defaultOptions={modelOptions:{updateOn:"blur"},props:{label:"Enter value",placeholder:"Enter value and hit Return"}},this.clinvarIds$=new it.X([]),this.values=new Set,this.showClinvarIdEntry$=new it.X(!1),this.selectModel=void 0,this.selectOptions=[{value:Du.li.NotApplicable,label:"Clinvar IDs not applicable for this variant"},{value:Du.li.NoneFound,label:"Clinvar IDs do not exist for this variant"},{value:Du.li.Found,label:"Clinvar IDs were found for this variant"},{value:void 0,label:""}]}optionSelected(d){const c=d;this.values.clear(),this.clinvarIds$.next([]),null!=c?c==Du.li.Found?(this.showClinvarIdEntry$.next(!0),this.formControl.setValue([])):c==Du.li.NoneFound?(this.showClinvarIdEntry$.next(!1),this.formControl.setValue(["NONE FOUND"])):c==Du.li.NotApplicable&&(console.log("HERE"),this.showClinvarIdEntry$.next(!1),this.formControl.setValue(["NA"])):(this.showClinvarIdEntry$.next(!1),this.formControl.setValue([]),this.clinvarIds$.next([]))}onEnter(d){let c=d.target;c.value&&(this.values.add(c.value),c.value="");let y=Array.from(this.values);this.clinvarIds$.next(y),this.formControl.setValue(y)}tagClosed(d){this.values.delete(d);let c=Array.from(this.values);this.clinvarIds$.next(c),this.formControl.setValue(c),this.clinvarIds$.next(c)}ngAfterViewInit(){this.configureBaseField(),this.configureStringTagField();const d=this.formControl.value;d&&Array.isArray(d)&&("NONE FOUND"==d[0]?this.selectModel=Du.li.NoneFound:"N/A"==d[0]?this.selectModel=Du.li.NotApplicable:(this.selectModel=Du.li.Found,d.forEach(c=>this.values.add(c)),this.showClinvarIdEntry$.next(!0)),this.clinvarIds$.next(d),this.cdr.detectChanges())}}sd.\u0275fac=function(d){return new(d||sd)(e.Y36(e.sBO))},sd.\u0275cmp=e.Xpm({type:sd,selectors:[["cvc-clinvar-input"]],features:[e.qOj],decls:4,vars:7,consts:[["nzAllowClear","",3,"nzOptions","ngModel","ngModelChange"],[4,"ngIf"],["hidden","","nz-input","",3,"formControl","formlyAttributes"],[3,"cvcMode","cvcLabel","cvcOnClose",4,"ngFor","ngForOf"],["nz-input","",3,"placeholder","keydown.enter"],[3,"cvcMode","cvcLabel","cvcOnClose"]],template:function(d,c){1&d&&(e.TgZ(0,"nz-select",0),e.NdJ("ngModelChange",function(re){return c.optionSelected(re)}),e.qZA(),e.YNc(1,z4,4,4,"div",1),e.ALo(2,"ngrxPush"),e._UZ(3,"input",2)),2&d&&(e.Q6J("nzOptions",c.selectOptions)("ngModel",c.selectModel),e.xp6(1),e.Q6J("ngIf",e.lcZ(2,5,c.showClinvarIdEntry$)),e.xp6(2),e.Q6J("formControl",c.formControl)("formlyAttributes",c.field))},dependencies:[E.sg,E.O5,t.Fj,t.JJ,t.oH,t.On,g.JD,Ae.Zp,Ze.Vq,Ys,I.fM],changeDetection:0});const M4={types:[{name:"clinvar-input",wrappers:["form-field"],component:sd},{name:"clinvar-multi-input",wrappers:["form-field"],component:sd,defaultOptions:{props:{isRepeatItem:!0}}}]};class ad{}ad.\u0275fac=function(d){return new(d||ad)},ad.\u0275mod=e.oAB({type:ad}),ad.\u0275inj=e.cJS({imports:[E.ez,t.UX,t.u5,I._N,I.pP,g.X0.forChild(M4),$e.F,Ae.o7,s.U5,Ze.LV,ws]});class Gd extends g.fS{constructor(d){super(),this.location=d}cancelClicked(){this.location.back()}}Gd.\u0275fac=function(d){return new(d||Gd)(e.Y36(E.Ye))},Gd.\u0275cmp=e.Xpm({type:Gd,selectors:[["cvc-cancel-button"]],features:[e.qOj],decls:2,vars:0,consts:[["nz-button","","type","button","nzType","default","nzDanger","",1,"cancel-button",3,"click"]],template:function(d,c){1&d&&(e.TgZ(0,"button",0),e.NdJ("click",function(){return c.cancelClicked()}),e._uU(1," Cancel\n"),e.qZA())},dependencies:[Yn.ix,pn.w,ln.dQ],styles:[".cancel-button[_ngcontent-%COMP%]{margin-right:10px}"],changeDetection:0});const Bh={types:[{name:"cvc-cancel-button",component:Gd}]};class Ou{}Ou.\u0275fac=function(d){return new(d||Ou)},Ou.\u0275mod=e.oAB({type:Ou}),Ou.\u0275inj=e.cJS({imports:[E.ez,t.UX,g.X0.forChild(Bh),Yn.sL]});class cd{}var wu;function b4(f,d){if(1&f&&e._uU(0),2&f){const c=e.oxw();e.hij(" ",c.props.addFormTitle,"\n")}}cd.\u0275fac=function(d){return new(d||cd)},cd.\u0275mod=e.oAB({type:cd}),cd.\u0275inj=e.cJS({imports:[E.ez,ct,Kr,Nr,us,Xa,Ds,be,si,zr,zn,dc,ul,Ui,Ra,ha,da,br,Ps,ls,Eu,X1,s1,Is,a1,Su,xu,Gs,rd,ad,Ou]});const E4=function(){return[6,6]};let ph=((wu=class extends g.n2{constructor(){super(),this.contentTemplate$=new Wo.t}ngAfterViewInit(){this.field.props&&this.field.props.addFormContent?this.contentTemplate$.next(this.field.props.addFormContent):console.error(`${this.field.id} add-entity-form wrapper failed to find parent field's props.addFormContent TemplateRef.`)}}).\u0275fac=function(d){return new(d||wu)},wu.\u0275cmp=e.Xpm({type:wu,selectors:[["cvc-add-entity-form-wrapper"]],features:[e.qOj],decls:10,vars:7,consts:[[3,"nzGutter"],["nzFlex","auto"],["fieldComponent",""],["nzFlex","20px"],["type","button","nz-button","","nzType","primary","nzSize","default","nzShape","circle","nz-popover","",3,"disabled","nzPopoverTitle","nzPopoverContent"],["nz-icon","","nzType","plus-circle","nzTheme","outline"],["titleTemplate",""]],template:function(d,c){if(1&d&&(e.TgZ(0,"nz-row",0)(1,"nz-col",1),e.GkF(2,null,2),e.qZA(),e.TgZ(4,"nz-col",3)(5,"button",4),e.ALo(6,"ngrxPush"),e._UZ(7,"span",5),e.qZA()()(),e.YNc(8,b4,1,1,"ng-template",null,6,e.W1O)),2&d){const y=e.MAs(9);e.Q6J("nzGutter",e.DdM(6,E4)),e.xp6(5),e.Q6J("disabled",null==c.field.props?null:c.field.props.disabled)("nzPopoverTitle",y)("nzPopoverContent",e.lcZ(6,4,c.contentTemplate$))}},dependencies:[Yn.ix,pn.w,ln.dQ,co.lU,_t.Ls,w.t3,w.SK,I.fM],styles:[".add-button[_ngcontent-%COMP%]{font-size:24px;color:#cfcfdf}"],changeDetection:0}),wu);ph=(0,Te.gn)([(0,Pe.c)()],ph);const S4={wrappers:[{name:"add-entity-form",component:ph}]};class ld{}ld.\u0275fac=function(d){return new(d||ld)},ld.\u0275mod=e.oAB({type:ld}),ld.\u0275inj=e.cJS({imports:[E.ez,I.pP,g.X0.forChild(S4),Yn.sL,co.$6,_t.PV,w.Jb]});class ud extends g.n2{get errorState(){return this.showError?"error":""}ngOnInit(){this.props.grid={cols:2,...this.props.grid?this.props.grid:void 0}}}ud.\u0275fac=function(){let f;return function(c){return(f||(f=e.n5z(ud)))(c||ud)}}(),ud.\u0275cmp=e.Xpm({type:ud,selectors:[["cvc-field-grid"]],features:[e.qOj],decls:3,vars:1,consts:[[1,"field-grid",3,"ngClass"],["fieldComponent",""]],template:function(d,c){1&d&&(e.TgZ(0,"div",0),e.GkF(1,null,1),e.qZA()),2&d&&e.Q6J("ngClass","cols-"+c.props.grid.cols)},dependencies:[E.mk],styles:[".field-grid.cols-2[_ngcontent-%COMP%]     formly-group:first-of-type{display:grid;grid-template-columns:repeat(2,1fr);gap:8px}.field-grid.cols-3[_ngcontent-%COMP%]     formly-group:first-of-type{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}.field-grid.cols-4[_ngcontent-%COMP%]     formly-group:first-of-type{display:grid;grid-template-columns:repeat(4,1fr);gap:8px}"],changeDetection:0});const Hh={wrappers:[{name:"field-grid",component:ud}]};class u1{}function Yh(f,d){if(1&f&&(e.TgZ(0,"nz-col",4),e._UZ(1,"formly-field",5),e.qZA()),2&f){const c=d.$implicit;e.Q6J("nzSpan",(null==c.props?null:c.props.colSpan)||12),e.xp6(1),e.Q6J("field",c)}}function x4(f,d){}u1.\u0275fac=function(d){return new(d||u1)},u1.\u0275mod=e.oAB({type:u1}),u1.\u0275inj=e.cJS({imports:[E.ez,t.UX,s.U5,w.Jb,g.X0.forChild(Hh)]});const r2=function(){return[6,6]};class Pu extends g.n2{get errorState(){return this.showError?"error":""}constructor(){super()}ngOnInit(){this.props.gutterHorizontal=this.props.gutterHorizontal||8,this.props.gutterVertical=this.props.gutterVertical||8}}Pu.\u0275fac=function(d){return new(d||Pu)},Pu.\u0275cmp=e.Xpm({type:Pu,selectors:[["cvc-form-card"]],features:[e.qOj],decls:5,vars:5,consts:[[3,"nzTitle","nzExtra"],[3,"nzGutter"],[3,"nzSpan",4,"ngFor","ngForOf"],["cardExtra",""],[3,"nzSpan"],[3,"field"]],template:function(d,c){if(1&d&&(e.TgZ(0,"nz-card",0)(1,"nz-row",1),e.YNc(2,Yh,2,2,"nz-col",2),e.qZA()(),e.YNc(3,x4,0,0,"ng-template",null,3,e.W1O)),2&d){const y=e.MAs(4);e.Q6J("nzTitle",c.props.title)("nzExtra",y),e.xp6(1),e.Q6J("nzGutter",e.DdM(4,r2)),e.xp6(1),e.Q6J("ngForOf",c.field.fieldGroup)}},dependencies:[E.sg,g.cw,w.t3,w.SK,Go.bd]});const d1={wrappers:[{name:"form-card",component:Pu}]};class Qd{}Qd.\u0275fac=function(d){return new(d||Qd)},Qd.\u0275mod=e.oAB({type:Qd}),Qd.\u0275inj=e.cJS({imports:[E.ez,t.u5,g.X0.forChild(d1),w.Jb,Go.vh,kt.Wr]});class p1 extends g.n2{ngOnInit(){}}p1.\u0275fac=function(){let f;return function(c){return(f||(f=e.n5z(p1)))(c||p1)}}(),p1.\u0275cmp=e.Xpm({type:p1,selectors:[["cvc-form-footer"]],features:[e.qOj],decls:4,vars:0,consts:[[1,"form-footer"],["nzSpan","24",1,"submit-col"],["fieldComponent",""]],template:function(d,c){1&d&&(e.TgZ(0,"nz-row",0)(1,"nz-col",1),e.GkF(2,null,2),e.qZA()())},dependencies:[w.t3,w.SK],styles:[".form-footer[_ngcontent-%COMP%]{margin-top:1em;border-radius:8px;background-color:#f0f0f0;padding:1em}.submit-col[_ngcontent-%COMP%]{text-align:right}"],changeDetection:0});const s2={wrappers:[{name:"form-footer",component:p1}]};class h1{}h1.\u0275fac=function(d){return new(d||h1)},h1.\u0275mod=e.oAB({type:h1}),h1.\u0275inj=e.cJS({imports:[E.ez,w.Jb,g.X0.forChild(s2)]});var a2=a(9241),Uc=a(9194),f1=a(3513);class ur{}ur.\u0275fac=function(d){return new(d||ur)},ur.\u0275mod=e.oAB({type:ur}),ur.\u0275inj=e.cJS({imports:[E.ez,I._N,I.pP,_t.PV,w.Jb,Go.vh,f1.we,Uc.q6,xr.Ph,Yt.X,de.ZJ,L.s]});class jc{}jc.\u0275fac=function(d){return new(d||jc)},jc.\u0275mod=e.oAB({type:jc}),jc.\u0275inj=e.cJS({imports:[E.ez,I._N,I.pP,Yn.sL,na.Rt,Ii.b1]});var fh=a(2340);const Gc={VALID:"success",INVALID:"error",PENDING:"processing",DISABLED:"default"};class m1{constructor(){this.tagColor="default"}set cvcFormControlStatus(d){this._status=d,this.tagColor=d?Gc[d]:"default"}get cvcFormControlStatus(){return this._status}}function Wd(f,d){if(1&f&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&f){const c=e.oxw(2).ctrl;e.xp6(1),e.hij(" ",c.value," ")}}function Zd(f,d){1&f&&(e.TgZ(0,"span",8),e._uU(1," undefined "),e.qZA())}function Jd(f,d){if(1&f&&(e.TgZ(0,"nz-list-item")(1,"nz-list-item-meta")(2,"nz-list-item-meta-title"),e._uU(3),e.qZA(),e.TgZ(4,"nz-list-item-meta-description"),e.YNc(5,Wd,2,1,"span",5),e.YNc(6,Zd,2,0,"span",6),e.qZA()(),e.TgZ(7,"nz-list-item-extra"),e._UZ(8,"cvc-form-status-tag",7),e.qZA()()),2&f){const c=e.oxw(),y=c.key,re=c.ctrl;e.xp6(3),e.hij(" ",y," "),e.xp6(2),e.Q6J("ngIf",re.value),e.xp6(1),e.Q6J("ngIf",!re.value),e.xp6(2),e.Q6J("cvcFormControlStatus",re.status)}}function Kd(f,d){}m1.\u0275fac=function(d){return new(d||m1)},m1.\u0275cmp=e.Xpm({type:m1,selectors:[["cvc-form-status-tag"]],inputs:{cvcFormControlStatus:"cvcFormControlStatus"},decls:3,vars:4,consts:[[3,"nzColor"]],template:function(d,c){1&d&&(e.TgZ(0,"nz-tag",0),e._uU(1),e.ALo(2,"lowercase"),e.qZA()),2&d&&(e.Q6J("nzColor",c.tagColor),e.xp6(1),e.hij(" ",c.cvcFormControlStatus?e.lcZ(2,2,c.cvcFormControlStatus):"UNKNOWN","\n"))},dependencies:[Yt.j,E.i8]});const dd=function(f,d){return{key:f,ctrl:d}};function qd(f,d){if(1&f&&e.YNc(0,Kd,0,0,"ng-template",12),2&f){const c=d.$implicit;e.oxw(3);const y=e.MAs(3);e.Q6J("ngTemplateOutlet",y)("ngTemplateOutletContext",e.WLB(2,dd,c.key,c.value))}}function Xd(f,d){if(1&f&&(e.TgZ(0,"strong"),e._uU(1),e.qZA()),2&f){const c=e.oxw(2).key;e.xp6(1),e.Oqu(c)}}function ep(f,d){if(1&f&&(e.TgZ(0,"nz-list-item")(1,"nz-card",9)(2,"nz-list",10),e.YNc(3,qd,1,5,null,4),e.ALo(4,"keyvalue"),e.qZA()(),e.YNc(5,Xd,2,1,"ng-template",null,11,e.W1O),e.qZA()),2&f){const c=e.oxw(),y=c.key,re=c.ctrl;e.xp6(1),e.Q6J("nzTitle",y),e.xp6(2),e.Q6J("ngForOf",e.lcZ(4,2,re.controls))}}function tp(f,d){if(1&f&&(e.YNc(0,Jd,9,4,"nz-list-item",5),e.YNc(1,ep,7,4,"nz-list-item",5)),2&f){const c=d.ctrl;e.Q6J("ngIf",!c.controls),e.xp6(1),e.Q6J("ngIf",c.controls)}}function D4(f,d){}function O4(f,d){if(1&f&&e.YNc(0,D4,0,0,"ng-template",12),2&f){const c=d.$implicit;e.oxw();const y=e.MAs(3);e.Q6J("ngTemplateOutlet",y)("ngTemplateOutletContext",e.WLB(2,dd,c.key,c.value))}}function w4(f,d){if(1&f&&(e.ynx(0),e.TgZ(1,"nz-list",2),e.YNc(2,tp,2,2,"ng-template",null,3,e.W1O),e.qZA(),e.YNc(4,O4,1,5,null,4),e.ALo(5,"keyvalue"),e.BQk()),2&f){const c=d.ngIf;e.xp6(4),e.Q6J("ngForOf",e.lcZ(5,1,c.controls))}}function P4(f,d){1&f&&e._uU(0," No AbstractFormControl provided. ")}class np{set cvcAbstractControl(d){if(!d)throw new Error("cvc-form-debug-field-list requires valid cvcFormControl Input.");this._cvcFormControl=d,this.formControl=d}get cvcFormControl(){return this._cvcFormControl}constructor(){}ngOnInit(){}}var pd;function I4(f,d){if(1&f&&(e.ynx(0),e._UZ(1,"ngx-json-viewer",9),e.BQk()),2&f){const c=e.oxw();e.xp6(1),e.Q6J("json",c.watchModel)}}function A4(f,d){if(1&f&&(e.ynx(0),e.TgZ(1,"nz-descriptions",10)(2,"nz-descriptions-item",11),e._UZ(3,"cvc-form-status-tag",12),e.qZA(),e.TgZ(4,"nz-descriptions-item",13),e._uU(5),e.qZA(),e.TgZ(6,"nz-descriptions-item",14),e._uU(7),e.qZA(),e.TgZ(8,"nz-descriptions-item",15),e._uU(9),e.qZA(),e.TgZ(10,"nz-descriptions-item",16),e._uU(11),e.qZA(),e.TgZ(12,"nz-descriptions-item",17),e._uU(13),e.qZA()(),e.BQk()),2&f){const c=e.oxw();e.xp6(1),e.Q6J("nzColumn",1),e.xp6(2),e.Q6J("cvcFormControlStatus",null==c.cvcForm?null:c.cvcForm.status),e.xp6(2),e.hij(" ",null==c.cvcForm?null:c.cvcForm.pending," "),e.xp6(2),e.hij(" ",null==c.cvcForm?null:c.cvcForm.touched," "),e.xp6(2),e.hij(" ",null==c.cvcForm?null:c.cvcForm.valid," "),e.xp6(2),e.hij(" ",null==c.cvcForm?null:c.cvcForm.dirty," "),e.xp6(2),e.hij(" ",null==c.cvcForm?null:c.cvcForm.enabled," ")}}function F4(f,d){if(1&f&&(e.ynx(0),e._UZ(1,"cvc-form-debug-field-list",18),e.BQk()),2&f){const c=e.oxw();e.xp6(1),e.Q6J("cvcAbstractControl",c.cvcForm)}}function c2(f,d){1&f&&(e.ynx(0),e._uU(1," State Content "),e.BQk())}function l2(f,d){if(1&f&&(e.TgZ(0,"nz-row")(1,"nz-col",19),e._uU(2," Form Details "),e.qZA(),e.TgZ(3,"nz-col",20),e._UZ(4,"cvc-form-status-tag",12),e.qZA()()),2&f){const c=e.oxw();e.xp6(4),e.Q6J("cvcFormControlStatus",null==c.cvcForm?null:c.cvcForm.status)}}np.\u0275fac=function(d){return new(d||np)},np.\u0275cmp=e.Xpm({type:np,selectors:[["cvc-form-debug-field-list"]],inputs:{cvcAbstractControl:"cvcAbstractControl"},decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["noFormControl",""],["nzSize","small"],["ctrlTemplateRef",""],[4,"ngFor","ngForOf"],[4,"ngIf"],["style","padding: 0px 4px; color: white; background-color: #ccc",4,"ngIf"],[3,"cvcFormControlStatus"],[2,"padding","0px 4px","color","white","background-color","#ccc"],["nzSize","small",2,"width","100%",3,"nzTitle"],["nzSize","small",2,"padding","0"],["cardExtra",""],[3,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(d,c){if(1&d&&(e.YNc(0,w4,6,3,"ng-container",0),e.YNc(1,P4,1,0,"ng-template",null,1,e.W1O)),2&d){const y=e.MAs(2);e.Q6J("ngIf",c.formControl)("ngIfElse",y)}},dependencies:[E.sg,E.O5,E.tP,Go.bd,xr.n_,xr.AA,xr.yi,xr.IO,xr.Pb,xr.yw,m1,E.Nd],styles:["[_nghost-%COMP%]     nz-card .ant-card-body{padding:6px 0}"]});let mh=((pd=class{constructor(d){this.cdr=d,this.selectedIndex=0}ngOnInit(){if(!this.cvcForm)throw new Error("cvc-form-debug requires valid cvcForm Input.");this.valueChange$=new it.X(this.cvcForm.value),this.statusChange$=new it.X(this.cvcForm.status),this.formChange$=ti([this.statusChange$,this.valueChange$]),this.watchModel=this.cvcModel,this.subscriptions=[this.cvcForm.valueChanges.subscribe(d=>{this.watchModel={...this.cvcModel},this.valueChange$.next(d)}),this.cvcForm.statusChanges.subscribe(d=>{this.statusChange$.next(d)}),this.formChange$.subscribe(d=>{this.cdr.detectChanges()})]}}).\u0275fac=function(d){return new(d||pd)(e.Y36(e.sBO))},pd.\u0275cmp=e.Xpm({type:pd,selectors:[["cvc-form-debug"]],inputs:{cvcForm:"cvcForm",cvcModel:"cvcModel"},decls:14,vars:7,consts:[["nzSize","small","nzBordered","true",3,"nzTitle"],["nzSize","small",3,"nzSelectedIndex","nzSelectedIndexChange"],["nzTitle","Model"],["nzTitle","Controls"],["nzTitle","State"],["nzTitle","Form Status"],[3,"ngSwitch"],[4,"ngSwitchCase"],["cardTitle",""],[3,"json"],["nzBordered","","nzSize","small",3,"nzColumn"],["nzTitle","status"],[3,"cvcFormControlStatus"],["nzTitle","pending"],["nzTitle","touched"],["nzTitle","valid"],["nzTitle","dirty"],["nzTitle","enabled"],[3,"cvcAbstractControl"],["nzFlex","2"],["nzFlex","3",1,"form-status-col"]],template:function(d,c){if(1&d&&(e.TgZ(0,"nz-card",0)(1,"nz-card-tab")(2,"nz-tabset",1),e.NdJ("nzSelectedIndexChange",function(re){return c.selectedIndex=re}),e._UZ(3,"nz-tab",2)(4,"nz-tab",3)(5,"nz-tab",4)(6,"nz-tab",5),e.qZA()(),e.ynx(7,6),e.YNc(8,I4,2,1,"ng-container",7),e.YNc(9,A4,14,7,"ng-container",7),e.YNc(10,F4,2,1,"ng-container",7),e.YNc(11,c2,2,0,"ng-container",7),e.BQk(),e.qZA(),e.YNc(12,l2,5,1,"ng-template",null,8,e.W1O)),2&d){const y=e.MAs(13);e.Q6J("nzTitle",y),e.xp6(2),e.Q6J("nzSelectedIndex",c.selectedIndex),e.xp6(5),e.Q6J("ngSwitch",c.selectedIndex),e.xp6(1),e.Q6J("ngSwitchCase",0),e.xp6(1),e.Q6J("ngSwitchCase",3),e.xp6(1),e.Q6J("ngSwitchCase",1),e.xp6(1),e.Q6J("ngSwitchCase",2)}},dependencies:[E.RF,E.n9,w.t3,w.SK,Go.bd,Go._i,f1.xH,f1.xw,Uc.R7,Uc.uj,L.Y,np,m1],styles:["[_nghost-%COMP%]{display:block}.form-status-col[_ngcontent-%COMP%]{text-align:right}.form-status-col[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]:last-child{margin-right:0}"],changeDetection:0}),pd);var op;function N4(f,d){if(1&f&&(e.TgZ(0,"nz-col",4),e._UZ(1,"cvc-form-debug",5),e.qZA()),2&f){const c=e.oxw();e.Q6J("nzSpan",8),e.xp6(1),e.Q6J("cvcForm",c.form)("cvcModel",c.model)}}mh=(0,Te.gn)([(0,Pe.c)({arrayName:"subscriptions"})],mh);const $h=function(){return[8,8]};let Uh=((op=class extends g.n2{constructor(d){super()}get errorState(){return this.showError?"error":""}ngOnInit(){this.props.title=this.props.title||"Form Card",this.props.submitLabel=this.props.submitLabel||"Submit",this.props.showDevPanel=!fh.N.production&&(this.props.showDevPanel||false)}}).\u0275fac=function(d){return new(d||op)(e.Y36(e.sBO))},op.\u0275cmp=e.Xpm({type:op,selectors:[["cvc-form-layout-wrapper"]],features:[e.qOj],decls:5,vars:4,consts:[[3,"nzGutter"],[1,"form-col",3,"nzSpan"],["fieldComponent",""],["class","status-col",3,"nzSpan",4,"ngIf"],[1,"status-col",3,"nzSpan"],[3,"cvcForm","cvcModel"]],template:function(d,c){1&d&&(e.TgZ(0,"nz-row",0)(1,"nz-col",1),e.GkF(2,null,2),e.qZA(),e.YNc(4,N4,2,3,"nz-col",3),e.qZA()),2&d&&(e.Q6J("nzGutter",e.DdM(3,$h)),e.xp6(1),e.Q6J("nzSpan",c.props.showDevPanel?16:24),e.xp6(3),e.Q6J("ngIf",c.props.showDevPanel))},dependencies:[E.O5,w.t3,w.SK,mh],changeDetection:0}),op);Uh=(0,Te.gn)([(0,Pe.c)({arrayName:"subscriptions"})],Uh);const gh={wrappers:[{name:"form-layout",component:Uh}]};class Iu{}Iu.\u0275fac=function(d){return new(d||Iu)},Iu.\u0275mod=e.oAB({type:Iu}),Iu.\u0275inj=e.cJS({imports:[E.ez,g.X0.forChild(gh),Yn.sL,Go.vh,_t.PV,Yt.X,f1.we,co.$6,xr.Ph,w.Jb,a2.h,jc,ur,L.s]});class Au{}Au.\u0275fac=function(d){return new(d||Au)},Au.\u0275mod=e.oAB({type:Au}),Au.\u0275inj=e.cJS({imports:[E.ez,Iu,Qd,h1,lt,u1,ld]});class ip{}ip.\u0275fac=function(d){return new(d||ip)},ip.\u0275mod=e.oAB({type:ip}),ip.\u0275inj=e.cJS({providers:[{provide:g.l7,multi:!0,useFactory:function b(f){return{extensions:[{name:"observeQueryParam",extension:new M(f)}]}},deps:[o.gz]}],imports:[g.X0.forRoot({extras:{immutable:!1,lazyRender:!0},validationMessages:[{name:"required",message:"This field is required."},{name:"minLength",message:(f,d)=>`This field has a minimum length of ${d.templateOptions?.minLength}.`},{name:"maxLength",message:(f,d)=>`This field has a maximum length of ${d.templateOptions?.maxLength}.`},{name:"min",message:(f,d)=>`This field has a minimum value of ${d.templateOptions?.min}.`},{name:"max",message:(f,d)=>`This field has a maximum value of ${d.templateOptions?.max}.`},{name:"pattern",message:(f,d)=>`This field's value must fit the pattern ${d.templateOptions?.pattern}.`},{name:"integer",message:(f,d)=>"Value must be an integer."},{name:"nucleotide",message:(f,d)=>"Value must only contain A, C, T, G, and/or /."},{name:"clinvar",message:(f,d)=>"Value must be an integer."}],validators:[{name:"integer",validation:(f,d)=>""===f.value||null==f.value||/^\d+$/.test(f.value)?null:{integer:!0}},{name:"nucleotide",validation:(f,d)=>""===f.value||null==f.value||/^[ACTG\/]+$/.test(f.value)?null:{nucleotide:!0}},{name:"clinvar",validation:(f,d)=>{for(var c of f.value)if(""!==c&&null!=c&&!/^\d+$/.test(c))return{clinvar:!0};return null}}]}),t.UX,s.U5,l.u,Au,L.s,t.UX,g.X0,l.u,s.U5,Au,cd]})},9289:(Et,Me,a)=>{function t(M){let b={value:void 0,unset:void 0};return M&&M.trim().length>0?b.value=M.trim():b.unset=!0,b}function o(M){let b={value:void 0,unset:void 0};return void 0!==M?b.value=M:b.unset=!0,b}a.d(Me,{aP:()=>T,li:()=>g,uP:()=>o,xt:()=>t});var g=(()=>{return(M=g||(g={}))[M.NotApplicable=0]="NotApplicable",M[M.NoneFound=1]="NoneFound",M[M.Found=2]="Found",g;var M})();const T=[{value:void 0,label:""},{value:"1",label:"1"},{value:"2",label:"2"},{value:"3",label:"3"},{value:"4",label:"4"},{value:"5",label:"5"},{value:"6",label:"6"},{value:"7",label:"7"},{value:"8",label:"8"},{value:"9",label:"9"},{value:"10",label:"10"},{value:"11",label:"11"},{value:"12",label:"12"},{value:"13",label:"13"},{value:"14",label:"14"},{value:"15",label:"15"},{value:"16",label:"16"},{value:"17",label:"17"},{value:"18",label:"18"},{value:"19",label:"19"},{value:"20",label:"20"},{value:"21",label:"21"},{value:"22",label:"22"},{value:"X",label:"X"},{value:"Y",label:"Y"},{value:"MT",label:"MT"}]},7630:(Et,Me,a)=>{a.d(Me,{A4J:()=>rr,A94:()=>Qa,AIY:()=>Hs,AMF:()=>Ja,AO2:()=>I,B0s:()=>Ui,B97:()=>Zs,BQZ:()=>k,BTF:()=>Xn,BYO:()=>ga,Bk6:()=>Nc,Bo4:()=>Ml,Cp0:()=>U,D9L:()=>wa,Del:()=>Ic,DkJ:()=>Hn,DzV:()=>Aa,E1C:()=>cl,E2B:()=>Cc,E8d:()=>b,EFm:()=>Va,EH_:()=>Os,EwB:()=>ia,F1Y:()=>Ds,F3s:()=>mn,F4e:()=>Tc,FB1:()=>xt,FJi:()=>ot,FNv:()=>X,FOU:()=>ra,Fvz:()=>fe,GYx:()=>jr,Gbq:()=>ir,Gnp:()=>Lc,HUC:()=>On,Hmr:()=>ri,HwR:()=>Ha,IP1:()=>sl,IRu:()=>Yt,IZ6:()=>Ko,JDX:()=>on,Kk:()=>Ve,Kmw:()=>Sa,L5n:()=>zs,L8L:()=>ss,LHC:()=>Sc,LLl:()=>bs,LUc:()=>Gr,LiH:()=>Sr,Lr0:()=>qr,MCG:()=>$s,MNv:()=>_a,MPi:()=>zc,MYm:()=>yr,Mgx:()=>O,MsG:()=>H,N$2:()=>Jr,NQC:()=>St,O2u:()=>yc,OHm:()=>Xi,OIL:()=>ii,OfU:()=>F,P_b:()=>Ir,Q4m:()=>uc,QVn:()=>ca,Qtd:()=>Ul,Qzn:()=>Si,R8F:()=>ka,R8w:()=>e,RTy:()=>N,RYL:()=>aa,Rdc:()=>xi,SrV:()=>Ot,Sx0:()=>ae,T1I:()=>fc,TNk:()=>gl,Tg0:()=>kr,TiL:()=>yi,Tq1:()=>Ft,Tt7:()=>cs,UIR:()=>pr,UWf:()=>tr,VZq:()=>Hi,WFw:()=>ki,WGV:()=>Ac,WOS:()=>Ka,WRV:()=>is,X5f:()=>Jo,XQi:()=>Dc,Xft:()=>vc,Y6e:()=>Na,YMi:()=>Sn,Y_K:()=>xc,Ybm:()=>Gn,ZYZ:()=>li,Zo2:()=>Dt,_3P:()=>L,_Wm:()=>M,_eC:()=>ui,_jb:()=>os,_nE:()=>Ga,aC3:()=>ma,bgg:()=>Ms,c$m:()=>ar,cCu:()=>ya,cEv:()=>te,cIw:()=>Ua,cMj:()=>Za,czh:()=>Ba,d4o:()=>Ye,dDn:()=>Nr,dGO:()=>ua,db2:()=>Er,eDl:()=>_c,eJ3:()=>La,eY8:()=>oi,ejK:()=>Wa,fow:()=>ve,fwG:()=>Bo,g0X:()=>Hl,ghc:()=>at,h01:()=>V,hVB:()=>_l,h_Y:()=>Bs,huM:()=>$e,i44:()=>zn,iGM:()=>Ti,iJT:()=>Tl,iST:()=>hr,io:()=>qi,iwm:()=>g,jMx:()=>gs,jmY:()=>va,jw9:()=>At,k7O:()=>$,kQf:()=>Ni,kQl:()=>_t,kqt:()=>Y,l$X:()=>Li,l4w:()=>mc,lYz:()=>wt,lcA:()=>Ar,m$d:()=>kc,m55:()=>q,mII:()=>Yi,mdl:()=>s,mki:()=>lr,mpB:()=>kt,nSb:()=>ms,nnL:()=>hl,o71:()=>lt,oRL:()=>Ce,olA:()=>la,otH:()=>ns,pHu:()=>Lr,pP7:()=>Ze,pR8:()=>br,q1D:()=>zl,q8c:()=>ye,q9q:()=>fn,qf4:()=>vn,qgP:()=>Ec,rJ8:()=>mr,rZD:()=>mt,rzy:()=>fi,sA8:()=>fs,sBY:()=>Pc,sLD:()=>yl,sfv:()=>me,sjj:()=>ja,tI1:()=>de,tJ6:()=>le,tWC:()=>pl,td:()=>Fi,ti:()=>_r,tji:()=>Ia,tw_:()=>wo,u4i:()=>R,uBv:()=>T,ubO:()=>Vc,vMt:()=>Mi,vjc:()=>Mc,vv6:()=>Nl,vz2:()=>Ur,wJ2:()=>w,wRZ:()=>hs,wbP:()=>xs,wg3:()=>wc,wkr:()=>sn,wpb:()=>Ae,xlL:()=>Ee,y1h:()=>Z,yic:()=>Qt,yqR:()=>Cl,z8D:()=>Oc,zOE:()=>fa,z_7:()=>bc,zpu:()=>pa,zwS:()=>Ci});var t=a(3595),o=a(4650),g=(()=>{return(ee=g||(g={})).Na="NA",ee.TierIii="TIER_III",ee.TierIiLevelC="TIER_II_LEVEL_C",ee.TierIiLevelD="TIER_II_LEVEL_D",ee.TierIv="TIER_IV",ee.TierILevelA="TIER_I_LEVEL_A",ee.TierILevelB="TIER_I_LEVEL_B",g;var ee})(),s=(()=>{return(ee=s||(s={})).DoesNotSupport="DOES_NOT_SUPPORT",ee.Supports="SUPPORTS",s;var ee})(),L=(()=>{return(ee=L||(L={})).AdverseResponse="ADVERSE_RESPONSE",ee.Benign="BENIGN",ee.BetterOutcome="BETTER_OUTCOME",ee.LikelyBenign="LIKELY_BENIGN",ee.LikelyOncogenic="LIKELY_ONCOGENIC",ee.LikelyPathogenic="LIKELY_PATHOGENIC",ee.Na="NA",ee.Negative="NEGATIVE",ee.Oncogenic="ONCOGENIC",ee.Pathogenic="PATHOGENIC",ee.PoorOutcome="POOR_OUTCOME",ee.Positive="POSITIVE",ee.ReducedSensitivity="REDUCED_SENSITIVITY",ee.Resistance="RESISTANCE",ee.Sensitivityresponse="SENSITIVITYRESPONSE",ee.UncertainSignificance="UNCERTAIN_SIGNIFICANCE",L;var ee})(),R=(()=>{return(ee=R||(R={})).AmpLevel="AMP_LEVEL",ee.AssertionDirection="ASSERTION_DIRECTION",ee.AssertionType="ASSERTION_TYPE",ee.DiseaseName="DISEASE_NAME",ee.EvidenceItemsCount="EVIDENCE_ITEMS_COUNT",ee.Id="ID",ee.Significance="SIGNIFICANCE",ee.Status="STATUS",ee.Summary="SUMMARY",ee.TherapyName="THERAPY_NAME",R;var ee})(),T=(()=>{return(ee=T||(T={})).Diagnostic="DIAGNOSTIC",ee.Oncogenic="ONCOGENIC",ee.Predictive="PREDICTIVE",ee.Predisposing="PREDISPOSING",ee.Prognostic="PROGNOSTIC",T;var ee})(),M=(()=>{return(ee=M||(M={})).And="AND",ee.Or="OR",M;var ee})(),b=(()=>{return(ee=b||(b={})).EvidenceItemCount="EVIDENCE_ITEM_COUNT",ee.Name="NAME",ee.NctId="NCT_ID",ee.SourceCount="SOURCE_COUNT",b;var ee})(),O=(()=>{return(ee=O||(O={})).Conflict="CONFLICT",ee.Expired="EXPIRED",ee.Missing="MISSING",ee.Valid="VALID",O;var ee})(),F=(()=>{return(ee=F||(F={})).Assertion="ASSERTION",ee.EvidenceItem="EVIDENCE_ITEM",ee.Gene="GENE",ee.MolecularProfile="MOLECULAR_PROFILE",ee.Source="SOURCE",ee.Variant="VARIANT",ee.VariantGroup="VARIANT_GROUP",F;var ee})(),V=(()=>{return(ee=V||(V={})).Created="CREATED",ee.LastModified="LAST_MODIFIED",V;var ee})(),e=(()=>{return(ee=e||(e={})).AssertionCount="ASSERTION_COUNT",ee.Doid="DOID",ee.EvidenceItemCount="EVIDENCE_ITEM_COUNT",ee.GeneCount="GENE_COUNT",ee.Name="NAME",ee.VariantCount="VARIANT_COUNT",e;var ee})(),I=(()=>{return(ee=I||(I={})).Accepted="ACCEPTED",ee.AssertionAccepted="ASSERTION_ACCEPTED",ee.AssertionRejected="ASSERTION_REJECTED",ee.AssertionReverted="ASSERTION_REVERTED",ee.AssertionSubmitted="ASSERTION_SUBMITTED",ee.Commented="COMMENTED",ee.CuratedSourceSuggestion="CURATED_SOURCE_SUGGESTION",ee.DeprecatedMolecularProfile="DEPRECATED_MOLECULAR_PROFILE",ee.DeprecatedVariant="DEPRECATED_VARIANT",ee.Flagged="FLAGGED",ee.FlagResolved="FLAG_RESOLVED",ee.PublicationSuggested="PUBLICATION_SUGGESTED",ee.Rejected="REJECTED",ee.RejectedSourceSuggestion="REJECTED_SOURCE_SUGGESTION",ee.RequeuedSourceSuggestion="REQUEUED_SOURCE_SUGGESTION",ee.Reverted="REVERTED",ee.RevisionAccepted="REVISION_ACCEPTED",ee.RevisionRejected="REVISION_REJECTED",ee.RevisionSuggested="REVISION_SUGGESTED",ee.RevisionSuperseded="REVISION_SUPERSEDED",ee.Submitted="SUBMITTED",I;var ee})(),w=(()=>{return(ee=w||(w={})).Organization="ORGANIZATION",ee.Subject="SUBJECT",ee.Unscoped="UNSCOPED",ee.User="USER",w;var ee})(),de=(()=>{return(ee=de||(de={})).DoesNotSupport="DOES_NOT_SUPPORT",ee.Na="NA",ee.Supports="SUPPORTS",de;var ee})(),ae=(()=>{return(ee=ae||(ae={})).A="A",ee.B="B",ee.C="C",ee.D="D",ee.E="E",ae;var ee})(),Z=(()=>{return(ee=Z||(Z={})).AdverseResponse="ADVERSE_RESPONSE",ee.Benign="BENIGN",ee.BetterOutcome="BETTER_OUTCOME",ee.DominantNegative="DOMINANT_NEGATIVE",ee.GainOfFunction="GAIN_OF_FUNCTION",ee.LikelyBenign="LIKELY_BENIGN",ee.LikelyPathogenic="LIKELY_PATHOGENIC",ee.LossOfFunction="LOSS_OF_FUNCTION",ee.Na="NA",ee.Negative="NEGATIVE",ee.Neomorphic="NEOMORPHIC",ee.Oncogenicity="ONCOGENICITY",ee.Pathogenic="PATHOGENIC",ee.PoorOutcome="POOR_OUTCOME",ee.Positive="POSITIVE",ee.Predisposition="PREDISPOSITION",ee.Protectiveness="PROTECTIVENESS",ee.ReducedSensitivity="REDUCED_SENSITIVITY",ee.Resistance="RESISTANCE",ee.Sensitivityresponse="SENSITIVITYRESPONSE",ee.UnalteredFunction="UNALTERED_FUNCTION",ee.UncertainSignificance="UNCERTAIN_SIGNIFICANCE",ee.Unknown="UNKNOWN",Z;var ee})(),U=(()=>{return(ee=U||(U={})).Description="DESCRIPTION",ee.DiseaseName="DISEASE_NAME",ee.EvidenceDirection="EVIDENCE_DIRECTION",ee.EvidenceLevel="EVIDENCE_LEVEL",ee.EvidenceRating="EVIDENCE_RATING",ee.EvidenceType="EVIDENCE_TYPE",ee.Id="ID",ee.Significance="SIGNIFICANCE",ee.Status="STATUS",ee.TherapyName="THERAPY_NAME",ee.VariantOrigin="VARIANT_ORIGIN",U;var ee})(),N=(()=>{return(ee=N||(N={})).Accepted="ACCEPTED",ee.Rejected="REJECTED",ee.Submitted="SUBMITTED",N;var ee})(),q=(()=>{return(ee=q||(q={})).Accepted="ACCEPTED",ee.All="ALL",ee.Rejected="REJECTED",ee.Submitted="SUBMITTED",q;var ee})(),Y=(()=>{return(ee=Y||(Y={})).Diagnostic="DIAGNOSTIC",ee.Functional="FUNCTIONAL",ee.Oncogenic="ONCOGENIC",ee.Predictive="PREDICTIVE",ee.Predisposing="PREDISPOSING",ee.Prognostic="PROGNOSTIC",Y;var ee})(),k=(()=>{return(ee=k||(k={})).Open="OPEN",ee.Resolved="RESOLVED",k;var ee})(),me=(()=>{return(ee=me||(me={})).Assertion="ASSERTION",ee.EvidenceItem="EVIDENCE_ITEM",ee.Gene="GENE",ee.MolecularProfile="MOLECULAR_PROFILE",ee.Variant="VARIANT",ee.VariantGroup="VARIANT_GROUP",me;var ee})(),fe=(()=>{return(ee=fe||(fe={})).AssertionCount="assertionCount",ee.DiseaseName="diseaseName",ee.EntrezSymbol="entrezSymbol",ee.EvidenceItemCount="evidenceItemCount",ee.GeneAlias="geneAlias",ee.MolecularProfileCount="molecularProfileCount",ee.TherapyName="therapyName",ee.VariantCount="variantCount",fe;var ee})(),Ce=(()=>{return(ee=Ce||(Ce={})).Assertion="ASSERTION",ee.EvidenceItem="EVIDENCE_ITEM",ee.Gene="GENE",ee.MolecularProfile="MOLECULAR_PROFILE",ee.Variant="VARIANT",ee.VariantGroup="VARIANT_GROUP",Ce;var ee})(),H=(()=>{return(ee=H||(H={})).All="ALL",ee.WithAccepted="WITH_ACCEPTED",ee.WithAcceptedOrSubmitted="WITH_ACCEPTED_OR_SUBMITTED",ee.WithSubmitted="WITH_SUBMITTED",H;var ee})(),X=(()=>{return(ee=X||(X={})).AssertionCount="assertionCount",ee.EvidenceItemCount="evidenceItemCount",ee.MolecularProfileScore="molecularProfileScore",ee.VariantCount="variantCount",X;var ee})(),ve=(()=>{return(ee=ve||(ve={})).Mention="MENTION",ee.Subscription="SUBSCRIPTION",ve;var ee})(),Ee=(()=>{return(ee=Ee||(Ee={})).Id="ID",ee.Name="NAME",Ee;var ee})(),wt=(()=>{return(ee=wt||(wt={})).AssertionCount="ASSERTION_COUNT",ee.EvidenceItemCount="EVIDENCE_ITEM_COUNT",ee.HpoId="HPO_ID",ee.Name="NAME",wt;var ee})(),St=(()=>{return(ee=St||(St={})).Read="READ",ee.Unread="UNREAD",St;var ee})(),on=(()=>{return(ee=on||(on={})).Grch37="GRCH37",ee.Grch38="GRCH38",ee.Ncbi36="NCBI36",on;var ee})(),ot=(()=>{return(ee=ot||(ot={})).Accepted="ACCEPTED",ee.New="NEW",ee.Rejected="REJECTED",ee.Superseded="SUPERSEDED",ot;var ee})(),mt=(()=>{return(ee=mt||(mt={})).Assertion="ASSERTION",ee.EvidenceItem="EVIDENCE_ITEM",ee.Gene="GENE",ee.MolecularProfile="MOLECULAR_PROFILE",ee.Revision="REVISION",ee.Variant="VARIANT",ee.VariantGroup="VARIANT_GROUP",mt;var ee})(),Ot=(()=>{return(ee=Ot||(Ot={})).Asc="ASC",ee.Desc="DESC",Ot;var ee})(),Qt=(()=>{return(ee=Qt||(Qt={})).Asco="ASCO",ee.Ash="ASH",ee.Pubmed="PUBMED",Qt;var ee})(),mn=(()=>{return(ee=mn||(mn={})).Curated="CURATED",ee.New="NEW",ee.Rejected="REJECTED",mn;var ee})(),At=(()=>{return(ee=At||(At={})).Citation="CITATION",ee.CitationId="CITATION_ID",ee.CreatedAt="CREATED_AT",ee.DiseaseName="DISEASE_NAME",ee.SourceType="SOURCE_TYPE",ee.Submitter="SUBMITTER",At;var ee})(),_t=(()=>{return(ee=_t||(_t={})).Authors="AUTHORS",ee.CitationId="CITATION_ID",ee.EvidenceCount="EVIDENCE_COUNT",ee.Journal="JOURNAL",ee.Name="NAME",ee.SourceType="SOURCE_TYPE",ee.SuggestionCount="SUGGESTION_COUNT",ee.Year="YEAR",_t;var ee})(),lt=(()=>{return(ee=lt||(lt={})).Assertion="ASSERTION",ee.EvidenceItem="EVIDENCE_ITEM",ee.Gene="GENE",ee.MolecularProfile="MOLECULAR_PROFILE",ee.Revision="REVISION",ee.SourceSuggestion="SOURCE_SUGGESTION",ee.Variant="VARIANT",ee.VariantGroup="VARIANT_GROUP",lt;var ee})(),kt=(()=>{return(ee=kt||(kt={})).Assertion="ASSERTION",ee.EvidenceItem="EVIDENCE_ITEM",ee.Gene="GENE",ee.MolecularProfile="MOLECULAR_PROFILE",ee.Revision="REVISION",ee.Role="ROLE",ee.Variant="VARIANT",ee.VariantGroup="VARIANT_GROUP",kt;var ee})(),sn=(()=>{return(ee=sn||(sn={})).Combination="COMBINATION",ee.Sequential="SEQUENTIAL",ee.Substitutes="SUBSTITUTES",sn;var ee})(),On=(()=>{return(ee=On||(On={})).AssertionCount="ASSERTION_COUNT",ee.EvidenceItemCount="EVIDENCE_ITEM_COUNT",ee.Name="NAME",ee.NcitId="NCIT_ID",On;var ee})(),zn=(()=>{return(ee=zn||(zn={})).Admin="ADMIN",ee.Curator="CURATOR",ee.Editor="EDITOR",zn;var ee})(),Yt=(()=>{return(ee=Yt||(Yt={})).Id="ID",ee.LastAction="LAST_ACTION",ee.Name="NAME",ee.Role="ROLE",Yt;var ee})(),xt=(()=>{return(ee=xt||(xt={})).EvidenceItemCount="EVIDENCE_ITEM_COUNT",ee.GeneNames="GENE_NAMES",ee.Name="NAME",ee.VariantCount="VARIANT_COUNT",ee.VariantNames="VARIANT_NAMES",xt;var ee})(),Ye=(()=>{return(ee=Ye||(Ye={})).CoordinateEnd="COORDINATE_END",ee.CoordinateStart="COORDINATE_START",ee.Name="NAME",Ye;var ee})(),$e=(()=>{return(ee=$e||($e={})).CommonGermline="COMMON_GERMLINE",ee.Mixed="MIXED",ee.Na="NA",ee.RareGermline="RARE_GERMLINE",ee.Somatic="SOMATIC",ee.Unknown="UNKNOWN",$e;var ee})(),Ae=(()=>{return(ee=Ae||(Ae={})).Name="NAME",ee.Soid="SOID",ee.VariantCount="VARIANT_COUNT",Ae;var ee})(),Ze=(()=>{return(ee=Ze||(Ze={})).DiseaseName="diseaseName",ee.EntrezSymbol="entrezSymbol",ee.TherapyName="therapyName",ee.VariantName="variantName",Ze;var ee})();const oe=t.Ps`
    fragment MolecularProfileParsedName on MolecularProfileSegment {
  __typename
  ... on MolecularProfileTextSegment {
    text
  }
  ... on Gene {
    id
    name
    link
  }
  ... on Variant {
    id
    name
    link
    deprecated
  }
}
    `,J=t.Ps`
    fragment assertionPopover on Assertion {
  id
  name
  status
  summary
  assertionType
  assertionDirection
  significance
  variantOrigin
  ampLevel
  acmgCodes {
    code
    description
  }
  clingenCodes {
    code
    description
  }
  nccnGuideline {
    id
    name
  }
  regulatoryApproval
  regulatoryApprovalLastUpdated
  fdaCompanionTest
  fdaCompanionTestLastUpdated
  therapies {
    id
    name
    link
  }
  therapyInteractionType
  disease {
    id
    name
    link
  }
  phenotypes {
    id
    name
    link
  }
  molecularProfile {
    id
    name
    link
    parsedName {
      ...MolecularProfileParsedName
    }
  }
  flags(state: OPEN) {
    totalCount
  }
  revisions(status: NEW) {
    totalCount
  }
  comments {
    totalCount
  }
}
    ${oe}`,Te=t.Ps`
    fragment AssertionBrowseFields on Assertion {
  id
  name
  link
  molecularProfile {
    id
    name
    link
    parsedName {
      ...MolecularProfileParsedName
    }
  }
  disease {
    id
    name
    link
  }
  therapies {
    id
    name
    link
  }
  therapyInteractionType
  summary
  assertionType
  assertionDirection
  significance
  ampLevel
  evidenceItemsCount
  status
  flagged
}
    ${oe}`,Pe=t.Ps`
    fragment clinicalTrialPopover on BrowseClinicalTrial {
  id
  name
  nctId
  url
  sourceCount
  evidenceCount
}
    `,Ge=t.Ps`
    fragment BrowseClinicalTrialsRowFields on BrowseClinicalTrial {
  id
  name
  nctId
  evidenceCount
  sourceCount
  link
}
    `,it=t.Ps`
    fragment commentPopover on Comment {
  id
  name
  createdAt
  title
  comment
  commenter {
    id
    displayName
    role
  }
  commentable {
    id
    name
    link
    __typename
  }
}
    `,yt=t.Ps`
    fragment BrowseDiseaseRowFields on BrowseDisease {
  id
  name
  doid
  diseaseUrl
  geneNames
  assertionCount
  evidenceItemCount
  variantCount
  geneCount
  link
}
    `,Ut=t.Ps`
    fragment eventFeedNode on Event {
  id
  action
  createdAt
  organization {
    id
    name
    profileImagePath(size: 32)
  }
  originatingUser {
    id
    username
    displayName
    role
    profileImagePath(size: 32)
  }
  subject {
    name
    id
    link
    ... on Source {
      citation
      sourceType
    }
    ... on EvidenceItem {
      status
    }
    ... on Assertion {
      status
    }
    ... on Revision {
      revisionSetId
    }
    ... on Variant {
      deprecated
    }
    ... on MolecularProfile {
      deprecated
    }
    __typename
  }
  originatingObject {
    id
    name
    link
    __typename
    ... on Revision {
      id
      revisionSetId
    }
    ... on Comment {
      id
    }
    ... on Flag {
      id
    }
  }
}
    `,$t=t.Ps`
    fragment eventFeed on EventConnection {
  pageInfo {
    startCursor
    endCursor
    hasNextPage
    hasPreviousPage
  }
  eventTypes @include(if: $showFilters)
  unfilteredCount
  uniqueParticipants @include(if: $showFilters) {
    id
    displayName
    role
    profileImagePath(size: 32)
  }
  participatingOrganizations @include(if: $showFilters) {
    id
    name
    profileImagePath(size: 32)
  }
  edges {
    cursor
    node {
      ...eventFeedNode
    }
  }
}
    ${Ut}`,Je=t.Ps`
    fragment evidencePopover on EvidenceItem {
  id
  name
  status
  description
  evidenceLevel
  evidenceType
  evidenceDirection
  significance
  variantOrigin
  therapies {
    id
    name
    link
  }
  therapyInteractionType
  disease {
    id
    name
    link
  }
  phenotypes {
    id
    name
    link
  }
  evidenceRating
  molecularProfile {
    id
    name
    link
    deprecated
    parsedName {
      ...MolecularProfileParsedName
    }
  }
  source {
    id
    citation
    sourceType
    displayType
    link
  }
  flags(state: OPEN) {
    totalCount
  }
  revisions(status: NEW) {
    totalCount
  }
  comments {
    totalCount
  }
}
    ${oe}`,tt=t.Ps`
    fragment EvidenceGridFields on EvidenceItem {
  id
  name
  link
  disease {
    id
    name
    link
  }
  therapies {
    id
    name
    link
  }
  molecularProfile {
    id
    name
    link
    parsedName {
      ...MolecularProfileParsedName
    }
  }
  status
  flagged
  therapyInteractionType
  description
  evidenceType
  evidenceDirection
  evidenceLevel
  evidenceRating
  significance
  variantOrigin
}
    ${oe}`,pt=t.Ps`
    fragment flag on Flag {
  id
  state
  createdAt
  resolvedAt
  flaggable {
    id
    name
    link
  }
  flaggingUser {
    id
    displayName
    role
    profileImagePath(size: 32)
  }
  resolvingUser {
    id
    displayName
    role
    profileImagePath(size: 32)
  }
  openComment {
    __typename
    parsedComment {
      __typename
      ... on CommentTagSegment {
        entityId
        displayName
        tagType
        link
        __typename
      }
      ... on CommentTextSegment {
        text
      }
      ... on User {
        id
        displayName
        role
      }
    }
  }
  resolutionComment {
    __typename
    parsedComment {
      __typename
      ... on CommentTagSegment {
        entityId
        displayName
        tagType
        link
        __typename
      }
      ... on CommentTextSegment {
        text
      }
      ... on User {
        id
        displayName
        role
      }
    }
  }
}
    `,Rt=t.Ps`
    fragment flagList on FlagConnection {
  pageInfo {
    startCursor
    endCursor
    hasNextPage
    hasPreviousPage
  }
  totalCount
  unfilteredCountForSubject
  uniqueFlaggingUsers {
    username
    id
    profileImagePath(size: 32)
  }
  uniqueResolvingUsers {
    username
    id
    profileImagePath(size: 32)
  }
  edges {
    node {
      ...flag
    }
  }
}
    ${pt}`,zt=t.Ps`
    fragment flagPopover on Flag {
  id
  name
  state
  flaggingUser {
    id
    displayName
    role
  }
  flaggable {
    id
    link
    name
  }
  createdAt
  openComment {
    comment
  }
}
    `,jt=t.Ps`
    fragment genePopover on Gene {
  id
  name
  officialName
  geneAliases
  variants {
    totalCount
  }
  revisions(status: NEW) {
    totalCount
  }
  comments {
    totalCount
  }
  flags(state: OPEN) {
    totalCount
  }
}
    `,Lt=t.Ps`
    fragment BrowseGenesFields on BrowseGene {
  id
  entrezId
  name
  link
  flagged
  geneAliases
  diseases {
    name
    id
    link
  }
  therapies {
    name
    id
    link
  }
  variantCount
  evidenceItemCount
  assertionCount
  molecularProfileCount
}
    `,We=t.Ps`
    fragment QuicksearchResult on SearchResult {
  id
  resultType
  name
  matchingText
}
    `,j=t.Ps`
    fragment molecularProfilePopoverFields on MolecularProfile {
  id
  name
  parsedName {
    __typename
    ... on MolecularProfileTextSegment {
      text
    }
    ... on Gene {
      id
      name
      link
    }
    ... on Variant {
      id
      name
      deprecated
      link
    }
  }
  molecularProfileAliases
  evidenceItems {
    totalCount
  }
  assertions {
    totalCount
  }
  revisions(status: NEW) {
    totalCount
  }
  comments {
    totalCount
  }
  flags(state: OPEN) {
    totalCount
  }
}
    `,P=t.Ps`
    fragment BrowseMolecularProfilesFields on BrowseMolecularProfile {
  id
  name
  evidenceItemCount
  molecularProfileScore
  assertionCount
  variantCount
  aliases {
    name
  }
  genes {
    id
    name
    link
  }
  variants {
    id
    name
    link
  }
  therapies {
    id
    name
    link
  }
  diseases {
    id
    name
    link
  }
  link
}
    `,K=t.Ps`
    fragment menuMolecularProfile on MolecularProfile {
  id
  name
  link
  flagged
}
    `,ze=t.Ps`
    fragment orgPopover on Organization {
  id
  profileImagePath(size: 64)
  name
  description
  url
}
    `,dt=t.Ps`
    fragment OrganizationBrowseTableRowFields on Organization {
  id
  name
  description
  url
  memberCount
  eventCount
  subGroups {
    name
    id
  }
  mostRecentEvent {
    createdAt
  }
}
    `,Le=t.Ps`
    fragment PhenotypeBrowseTableRowFields on BrowsePhenotype {
  id
  name
  hpoId
  url
  assertionCount
  evidenceCount
  link
}
    `,ge=t.Ps`
    fragment validationError on FieldValidationError {
  fieldName
  error
}
    `,Se=t.Ps`
    fragment revisionPopover on Revision {
  id
  name
  link
  status
  revisor {
    id
    displayName
    role
  }
  subject {
    id
    link
    name
  }
  createdAt
  linkoutData {
    name
  }
  creationComment {
    comment
  }
}
    `,ut=t.Ps`
    fragment revision on Revision {
  id
  revisionSetId
  createdAt
  resolvedAt
  fieldName
  currentValue
  suggestedValue
  linkoutData {
    name
    diffValue {
      ... on ObjectFieldDiff {
        currentObjects {
          id
          displayName
          displayType
          entityType
          link
          deleted
        }
        addedObjects {
          id
          displayName
          displayType
          entityType
          link
          deleted
        }
        removedObjects {
          id
          displayName
          displayType
          entityType
          link
          deleted
        }
        keptObjects {
          id
          displayName
          displayType
          entityType
          link
          deleted
        }
        suggestedObjects {
          id
          displayName
          displayType
          entityType
          link
          deleted
        }
      }
      ... on ScalarFieldDiff {
        left
        right
      }
    }
  }
  revisor {
    id
    displayName
    role
  }
  resolver {
    id
    displayName
    role
  }
  creationComment {
    parsedComment {
      __typename
      ... on CommentTagSegment {
        entityId
        displayName
        tagType
        link
        __typename
      }
      ... on CommentTextSegment {
        text
      }
      ... on User {
        id
        displayName
        role
      }
    }
  }
  resolutionComment {
    parsedComment {
      __typename
      ... on CommentTagSegment {
        entityId
        displayName
        tagType
        link
        __typename
      }
      ... on CommentTextSegment {
        text
      }
      ... on User {
        id
        displayName
        role
      }
    }
  }
  status
}
    `,vt=t.Ps`
    fragment ContributorFields on ContributingUser {
  user {
    id
    profileImagePath(size: 12)
  }
  uniqueActions {
    action
    count
  }
  lastActionDate
  totalActionCount
}
    `,qt=t.Ps`
    fragment subscriptionId on Subscription {
  id
  __typename
}
    `,Ct=t.Ps`
    fragment TimepointCount on TimePointCounts {
  allTime
  newThisMonth
  newThisWeek
  newThisYear
}
    `,tn=t.Ps`
    fragment BrowseSourceSuggestionRowFields on SourceSuggestion {
  id
  molecularProfile {
    id
    name
    link
  }
  disease {
    id
    name
    link
  }
  source {
    link
    id
    citation
    citationId
    sourceType
    sourceUrl
    displayType
  }
  user {
    id
    displayName
    role
    profileImagePath(size: 32)
  }
  initialComment
  status
  reason
  createdAt
}
    `,je=t.Ps`
    fragment sourcePopover on SourcePopover {
  id
  name
  evidenceItemCount
  citation
  citationId
  displayType
  sourceUrl
  clinicalTrials {
    id
    nctId
    link
  }
}
    `,Qe=t.Ps`
    fragment BrowseSourceRowFields on BrowseSource {
  id
  authors
  citationId
  evidenceItemCount
  sourceSuggestionCount
  journal
  name
  publicationYear
  sourceType
  citation
  displayType
  link
  openAccess
}
    `,ft=t.Ps`
    fragment TherapyBrowseTableRowFields on BrowseTherapy {
  id
  name
  ncitId
  therapyUrl
  assertionCount
  evidenceCount
  link
}
    `,Re=t.Ps`
    fragment popoverUser on User {
  id
  profileImagePath(size: 64)
  displayName
  bio
  role
  organizations {
    id
    name
  }
}
    `,He=t.Ps`
    fragment UserBrowseTableRowFields on User {
  id
  name
  displayName
  organizations {
    id
    name
  }
  role
  statsHash {
    submittedEvidenceItems
    revisions
  }
  mostRecentActionTimestamp
}
    `,Ie=t.Ps`
    fragment variantGroupPopoverFields on VariantGroup {
  id
  name
  description
  variants {
    edges {
      node {
        id
        name
        link
      }
    }
  }
  sources {
    id
    citation
    sourceType
    link
  }
}
    `,he=t.Ps`
    fragment BrowseVariantGroupRowFields on BrowseVariantGroup {
  id
  name
  link
  geneNames
  variantNames
  variantCount
  evidenceItemCount
}
    `,we=t.Ps`
    fragment variantTypePopover on VariantTypePopover {
  id
  name
  url
  soid
  variantCount
}
    `,ce=t.Ps`
    fragment VariantTypeBrowseTableRowFields on BrowseVariantType {
  id
  name
  soid
  url
  variantCount
  link
}
    `,nt=t.Ps`
    fragment CoordinatesCardFields on Variant {
  id
  name
  referenceBuild
  ensemblVersion
  primaryCoordinates {
    representativeTranscript
    chromosome
    start
    stop
  }
  secondaryCoordinates {
    representativeTranscript
    chromosome
    start
    stop
  }
  referenceBases
  variantBases
}
    `,be=t.Ps`
    fragment variantPopoverFields on Variant {
  id
  name
  variantAliases
  alleleRegistryId
  gene {
    id
    name
    link
  }
  molecularProfiles {
    totalCount
  }
  revisions(status: NEW) {
    totalCount
  }
  comments {
    totalCount
  }
  flags(state: OPEN) {
    totalCount
  }
}
    `,rt=t.Ps`
    fragment menuVariantType on BrowseVariantType {
  id
  name
  link
}
    `,Zt=t.Ps`
    fragment menuVariant on Variant {
  id
  name
  link
  flagged
}
    `,nn=t.Ps`
    fragment BrowseVariantsFields on BrowseVariant {
  id
  name
  link
  geneId
  geneName
  geneLink
  diseases {
    id
    name
    link
  }
  therapies {
    id
    name
    link
  }
  aliases {
    name
  }
  variantTypes {
    id
    name
    link
  }
}
    `,xn=t.Ps`
    fragment RevisableAssertionFields on Assertion {
  id
  summary
  description
  molecularProfile {
    id
    name
    link
  }
  variantOrigin
  significance
  disease {
    id
    doid
    name
    displayName
    link
  }
  therapies {
    id
    ncitId
    name
    link
  }
  therapyInteractionType
  assertionDirection
  assertionType
  phenotypes {
    id
    hpoId
    name
  }
  ampLevel
  acmgCodes {
    id
    name
    code
    description
    tooltip
  }
  clingenCodes {
    id
    code
    description
    name
    tooltip
    exclusive
  }
  nccnGuideline {
    id
    name
  }
  nccnGuidelineVersion
  regulatoryApproval
  fdaCompanionTest
  evidenceItems {
    id
    name
    link
    status
  }
}
    `,jn=t.Ps`
    fragment previewComment on CommentBodySegment {
  __typename
  ... on CommentTagSegment {
    entityId
    displayName
    tagType
    link
    status
    deprecated
    __typename
  }
  ... on CommentTextSegment {
    text
    __typename
  }
  ... on User {
    id
    displayName
    role
    __typename
  }
}
    `,Un=t.Ps`
    fragment previewMpName on MolecularProfileSegment {
  __typename
  ... on MolecularProfileTextSegment {
    text
  }
  ... on Gene {
    id
    name
    link
  }
  ... on Variant {
    id
    name
    link
  }
}
    `,Yn=t.Ps`
    fragment AddDiseaseFields on AddDiseasePayload {
  new
  disease {
    id
    name
    displayName
  }
}
    `,Bn=t.Ps`
    fragment GeneTypeaheadFields on Gene {
  id
  name
  geneAliases
  entrezId
}
    `,co=t.Ps`
    fragment SourceTypeaheadResult on Source {
  id
  name
  citation
  citationId
  sourceType
}
    `,Wo=t.Ps`
    fragment SourceStubFields on SourceStub {
  id
  citationId
  sourceType
}
    `,uo=(t.Ps`
    fragment SourceTypeaheadFields on Source {
  id
  name
  citation
  citationId
  sourceType
}
    `,t.Ps`
    fragment AddTherapyFields on AddTherapyPayload {
  new
  therapy {
    id
    ncitId
    name
  }
}
    `),jo=t.Ps`
    fragment VariantTypeaheadFields on Variant {
  id
  name
  variantAliases
  singleVariantMolecularProfileId
  singleVariantMolecularProfile {
    id
    name
    link
  }
}
    `,Io=t.Ps`
    fragment AddVariantFields on AddVariantPayload {
  clientMutationId
  new
  variant {
    id
    name
    singleVariantMolecularProfileId
    singleVariantMolecularProfile {
      id
      name
      link
    }
  }
}
    `,ko=(t.Ps`
    fragment VariantSelectFields on Variant {
  id
  name
  variantAliases
  singleVariantMolecularProfileId
  singleVariantMolecularProfile {
    id
    name
    link
  }
}
    `,t.Ps`
    fragment MolecularProfileSelectTypeaheadFields on MolecularProfile {
  id
  name
  link
  molecularProfileAliases
}
    `),Xo=t.Ps`
    fragment DiseaseSelectTypeaheadFields on Disease {
  id
  name
  link
  displayName
  doid
  diseaseAliases
}
    `,Nn=t.Ps`
    fragment TherapySelectTypeaheadFields on Therapy {
  id
  name
  link
  ncitId
  therapyAliases
}
    `,Qn=t.Ps`
    fragment PhenotypeSelectTypeaheadFields on Phenotype {
  id
  name
  link
  hpoId
}
    `,io=t.Ps`
    fragment SourceSelectTypeaheadFields on Source {
  id
  name
  link
  citation
  citationId
  sourceType
}
    `,ti=t.Ps`
    fragment RevisableEvidenceFields on EvidenceItem {
  id
  molecularProfile {
    ...MolecularProfileSelectTypeaheadFields
  }
  variantOrigin
  description
  significance
  disease {
    ...DiseaseSelectTypeaheadFields
  }
  therapies {
    ...TherapySelectTypeaheadFields
  }
  therapyInteractionType
  evidenceDirection
  evidenceLevel
  evidenceType
  phenotypes {
    ...PhenotypeSelectTypeaheadFields
  }
  evidenceRating
  source {
    ...SourceSelectTypeaheadFields
  }
}
    ${ko}
${Xo}
${Nn}
${Qn}
${io}`,yo=t.Ps`
    fragment SubmittableEvidenceFields on EvidenceItem {
  id
  description
  variantOrigin
  evidenceType
  significance
  evidenceLevel
  evidenceDirection
  evidenceRating
  therapyInteractionType
  source {
    id
    citation
    sourceType
  }
  phenotypes {
    id
    name
  }
  therapies {
    id
    name
  }
  disease {
    id
    name
  }
}
    `,Do=t.Ps`
    fragment RevisableGeneFields on Gene {
  id
  description
  sources {
    id
    sourceType
    citation
    citationId
  }
}
    `,bn=t.Ps`
    fragment AdvancedSearchPermalink on AdvancedSearchResult {
  permalinkId
}
    `,_o=t.Ps`
    fragment RevisableMolecularProfileFields on MolecularProfile {
  id
  description
  sources {
    id
    sourceType
    citation
    citationId
  }
  molecularProfileAliases
}
    `,vi=t.Ps`
    fragment SubmittableVariantGroupFields on VariantGroup {
  id
  name
  description
  variants(first: 50) {
    nodes {
      id
      name
      link
      singleVariantMolecularProfile {
        id
        name
        link
      }
    }
  }
  sources {
    id
    link
    citation
    sourceType
  }
}
    `,Vi=t.Ps`
    fragment RevisableEvidenceFields2 on EvidenceItem {
  id
  molecularProfile {
    ...MolecularProfileSelectTypeaheadFields
  }
  variantOrigin
  description
  significance
  disease {
    ...DiseaseSelectTypeaheadFields
  }
  therapies {
    ...TherapySelectTypeaheadFields
  }
  therapyInteractionType
  evidenceDirection
  evidenceLevel
  evidenceType
  phenotypes {
    ...PhenotypeSelectTypeaheadFields
  }
  evidenceRating
  source {
    ...SourceSelectTypeaheadFields
  }
}
    ${ko}
${Xo}
${Nn}
${Qn}
${io}`,oo=t.Ps`
    fragment CoordinateFields on Coordinate {
  chromosome
  representativeTranscript
  start
  stop
}
    `,Ji=t.Ps`
    fragment RevisableVariantFields on Variant {
  id
  name
  gene {
    id
    name
  }
  variantAliases
  alleleRegistryId
  clinvarIds
  ensemblVersion
  hgvsDescriptions
  referenceBuild
  variantTypes {
    id
    name
    soid
  }
  primaryCoordinates {
    ...CoordinateFields
  }
  secondaryCoordinates {
    ...CoordinateFields
  }
  referenceBases
  variantBases
}
    ${oo}`,or=t.Ps`
    fragment VariantGroupRevisableFields2 on VariantGroup {
  id
  name
  description
  variants {
    totalCount
    edges {
      cursor
      node {
        id
        name
        link
      }
    }
    nodes {
      id
      name
      link
    }
  }
  sources {
    id
    name
    link
  }
}
    `,Pi=t.Ps`
    fragment AcmgCodeSelectTypeaheadFields on AcmgCode {
  id
  code
  name
  description
  tooltip
}
    `,wr=t.Ps`
    fragment ClingenCodeSelectTypeaheadFields on ClingenCode {
  id
  code
  name
  description
  tooltip
  exclusive
}
    `,qe=t.Ps`
    fragment QuickAddDiseaseFields on AddDiseasePayload {
  new
  disease {
    ...DiseaseSelectTypeaheadFields
  }
}
    ${Xo}`,se=t.Ps`
    fragment EvidenceManagerFields on EvidenceItem {
  id
  name
  link
  disease {
    id
    name
    link
  }
  therapies {
    id
    name
    link
  }
  molecularProfile {
    id
    name
    link
    parsedName {
      ...MolecularProfileParsedName
    }
  }
  status
  flagged
  therapyInteractionType
  description
  evidenceType
  evidenceDirection
  evidenceLevel
  evidenceRating
  significance
  variantOrigin
}
    ${oe}`,Fe=t.Ps`
    fragment EvidenceSelectTypeaheadFields on EvidenceItem {
  id
  name
  link
  evidenceType
  evidenceDirection
  evidenceLevel
  evidenceRating
  significance
  variantOrigin
  status
}
    `,Ue=t.Ps`
    fragment GeneSelectTypeaheadFields on Gene {
  id
  entrezId
  name
  geneAliases
  link
}
    `,Tt=t.Ps`
    fragment PreviewMpName2 on MolecularProfileSegment {
  __typename
  ... on MolecularProfileTextSegment {
    text
  }
  ... on Gene {
    id
    name
    link
  }
  ... on Variant {
    id
    name
    link
  }
}
    `,Nt=t.Ps`
    fragment NccnGuidelineSelectTypeaheadFields on NccnGuideline {
  id
  name
}
    `,Gt=t.Ps`
    fragment QuickAddTherapyFields on AddTherapyPayload {
  new
  therapy {
    ...TherapySelectTypeaheadFields
  }
}
    ${Nn}`,ln=(t.Ps`
    fragment VariantManagerFields on BrowseVariant {
  id
  name
  link
  geneId
  geneName
  geneLink
  diseases {
    id
    name
    link
  }
  therapies {
    id
    name
    link
  }
  aliases {
    name
  }
}
    `,t.Ps`
    fragment VariantSelectTypeaheadFields on Variant {
  id
  name
  link
  variantAliases
  singleVariantMolecularProfileId
  singleVariantMolecularProfile {
    id
    name
    link
    molecularProfileAliases
  }
}
    `),wn=(t.Ps`
    fragment QuickAddVariantFields on AddVariantPayload {
  clientMutationId
  new
  variant {
    ...VariantSelectTypeaheadFields
  }
}
    ${ln}`,t.Ps`
    fragment VariantTypeSelectTypeaheadFields on VariantType {
  id
  name
  link
  soid
}
    `),Tn=t.Ps`
    fragment AssertionDetailFields on Assertion {
  id
  name
  status
  submissionEvent {
    originatingUser {
      id
    }
  }
  molecularProfile {
    id
    name
    link
  }
  flags(state: OPEN) {
    totalCount
  }
  revisions(status: NEW) {
    totalCount
  }
  comments {
    totalCount
  }
}
    `,En=t.Ps`
    fragment AssertionSummaryFields on Assertion {
  id
  name
  summary
  description
  status
  variantOrigin
  disease {
    id
    name
    link
  }
  molecularProfile {
    id
    name
    link
    parsedName {
      ...MolecularProfileParsedName
    }
  }
  assertionType
  assertionDirection
  significance
  therapies {
    ncitId
    name
    link
    id
  }
  phenotypes {
    id
    name
    link
  }
  therapyInteractionType
  ampLevel
  acmgCodes {
    code
    description
  }
  clingenCodes {
    id
    code
    description
  }
  nccnGuideline {
    id
    name
  }
  nccnGuidelineVersion
  regulatoryApproval
  regulatoryApprovalLastUpdated
  fdaCompanionTest
  fdaCompanionTestLastUpdated
  flags(state: OPEN) {
    totalCount
  }
  revisions(status: NEW) {
    totalCount
  }
  comments {
    totalCount
  }
  acceptanceEvent {
    createdAt
    originatingUser {
      id
      displayName
      role
      profileImagePath(size: 32)
    }
  }
  submissionEvent {
    createdAt
    originatingUser {
      id
      displayName
      role
      profileImagePath(size: 32)
    }
  }
  rejectionEvent {
    createdAt
    originatingUser {
      id
      displayName
      role
      profileImagePath(size: 32)
    }
  }
}
    ${oe}`,Pn=t.Ps`
    fragment MyDiseaseInfoFields on MyDiseaseInfo {
  diseaseOntologyExactSynonyms
  diseaseOntologyRelatedSynonyms
  mesh
  icdo
  icd10
  ncit
  omim
  doDef
  doDefCitations
  mondoDef
}
    `,eo=t.Ps`
    fragment DiseasesSummaryFields on Disease {
  id
  name
  doid
  diseaseUrl
  displayName
  diseaseAliases
  link
  myDiseaseInfo {
    ...MyDiseaseInfoFields
  }
}
    ${Pn}`,Dn=t.Ps`
    fragment EvidenceDetailFields on EvidenceItem {
  id
  name
  status
  submissionEvent {
    originatingUser {
      id
    }
  }
  molecularProfile {
    id
    name
    link
  }
  assertions {
    id
    name
    link
  }
  flags(state: OPEN) {
    totalCount
  }
  revisions(status: NEW) {
    totalCount
  }
  comments {
    totalCount
  }
}
    `,Rn=t.Ps`
    fragment EvidenceSummaryFields on EvidenceItem {
  id
  name
  description
  status
  evidenceLevel
  evidenceType
  evidenceDirection
  significance
  variantOrigin
  therapies {
    id
    name
    link
  }
  therapyInteractionType
  disease {
    id
    name
    link
  }
  phenotypes {
    id
    name
    link
  }
  source {
    id
    citation
    citationId
    sourceType
    displayType
    sourceUrl
    ascoAbstractId
    link
    clinicalTrials {
      nctId
      id
      link
    }
  }
  evidenceRating
  molecularProfile {
    id
    name
    link
    parsedName {
      ...MolecularProfileParsedName
    }
  }
  flags(state: OPEN) {
    totalCount
  }
  revisions(status: NEW) {
    totalCount
  }
  comments {
    totalCount
  }
  acceptanceEvent {
    createdAt
    originatingUser {
      id
      displayName
      role
      profileImagePath(size: 32)
    }
  }
  submissionEvent {
    createdAt
    originatingUser {
      id
      displayName
      role
      profileImagePath(size: 32)
    }
  }
  rejectionEvent {
    createdAt
    originatingUser {
      id
      displayName
      role
      profileImagePath(size: 32)
    }
  }
}
    ${oe}`,Wn=t.Ps`
    fragment GeneDetailFields on Gene {
  id
  name
  officialName
  entrezId
  flags(state: OPEN) {
    totalCount
  }
  revisions(status: NEW) {
    totalCount
  }
  comments {
    totalCount
  }
}
    `,mo=t.Ps`
    fragment GeneSummaryFields on Gene {
  description
  entrezId
  geneAliases
  id
  name
  officialName
  sources {
    id
    citation
    link
    sourceUrl
    displayType
    sourceType
  }
  variants {
    edges {
      node {
        id
        name
      }
    }
  }
  myGeneInfoDetails
  lastSubmittedRevisionEvent {
    originatingUser {
      id
      displayName
      role
      profileImagePath(size: 32)
    }
  }
  lastAcceptedRevisionEvent {
    originatingUser {
      id
      displayName
      role
      profileImagePath(size: 32)
    }
  }
}
    `,so=t.Ps`
    fragment commentListNode on Comment {
  id
  title
  comment
  createdAt
  commenter {
    id
    username
    displayName
    name
    role
    profileImagePath(size: 32)
    organizations {
      id
      name
      profileImagePath(size: 32)
    }
  }
  parsedComment {
    __typename
    ... on CommentTagSegment {
      entityId
      displayName
      tagType
      status
      deprecated
      link
      revisionSetId
      __typename
    }
    ... on CommentTextSegment {
      text
    }
    ... on User {
      id
      displayName
      role
    }
  }
}
    `,po=t.Ps`
    fragment MolecularProfileDetailFields on MolecularProfile {
  id
  name
  deprecated
  deprecatedVariants {
    deprecationReason
    deprecationComment {
      ...commentListNode
    }
    id
    deprecated
    name
    link
  }
  molecularProfileAliases
  flags(state: OPEN) {
    totalCount
  }
  revisions(status: NEW) {
    totalCount
  }
  comments {
    totalCount
  }
}
    ${so}`,Zo=t.Ps`
    fragment VariantMolecularProfileCardFields on Variant {
  id
  name
  link
  gene {
    id
    name
    link
  }
  molecularProfiles(first: 3) {
    totalCount
    nodes {
      id
      link
      name
      deprecated
    }
  }
  variantAliases
  clinvarIds
  alleleRegistryId
  openCravatUrl
  variantTypes {
    id
    link
    soid
    name
  }
  referenceBuild
  ensemblVersion
  primaryCoordinates {
    representativeTranscript
    chromosome
    start
    stop
  }
  secondaryCoordinates {
    representativeTranscript
    chromosome
    start
    stop
  }
  referenceBases
  variantBases
  hgvsDescriptions
}
    `,Ho=t.Ps`
    fragment MolecularProfileSummaryFields on MolecularProfile {
  id
  name
  description
  molecularProfileAliases
  molecularProfileScore
  sources {
    id
    citation
    link
    sourceType
  }
  variants {
    ...VariantMolecularProfileCardFields
  }
  parsedName {
    ...MolecularProfileParsedName
  }
}
    ${Zo}
${oe}`,zo=t.Ps`
    fragment OrganizationDetailFields on Organization {
  id
  name
  url
  description
  profileImagePath(size: 256)
  subGroups {
    id
    name
    profileImagePath(size: 12)
  }
  orgStatsHash {
    comments
    revisions
    appliedRevisions
    submittedEvidenceItems
    acceptedEvidenceItems
    suggestedSources
    submittedAssertions
    acceptedAssertions
  }
  orgAndSuborgsStatsHash {
    comments
    revisions
    appliedRevisions
    submittedEvidenceItems
    acceptedEvidenceItems
    suggestedSources
    submittedAssertions
    acceptedAssertions
  }
}
    `,go=t.Ps`
    fragment OrganizationGroupsFields on Organization {
  id
  name
  url
  description
  profileImagePath(size: 12)
  orgStatsHash {
    comments
    revisions
    appliedRevisions
    submittedEvidenceItems
    acceptedEvidenceItems
    suggestedSources
    submittedAssertions
    acceptedAssertions
  }
  orgAndSuborgsStatsHash {
    comments
    revisions
    appliedRevisions
    submittedEvidenceItems
    acceptedEvidenceItems
    suggestedSources
    submittedAssertions
    acceptedAssertions
  }
  subGroups {
    id
    name
    url
    profileImagePath(size: 12)
  }
}
    `,Vo=t.Ps`
    fragment OrganizationMembersFields on User {
  id
  name
  displayName
  username
  profileImagePath(size: 32)
  role
  url
  areaOfExpertise
  orcid
  twitterHandle
  facebookProfile
  linkedinProfile
  organizations {
    id
    name
  }
}
    `,ai=t.Ps`
    fragment Release on DataRelease {
  name
  geneTsv {
    filename
    path
  }
  variantTsv {
    filename
    path
  }
  variantGroupTsv {
    filename
    path
  }
  evidenceTsv {
    filename
    path
  }
  molecularProfileTsv {
    filename
    path
  }
  assertionTsv {
    filename
    path
  }
  acceptedVariantsVcf {
    filename
    path
  }
  acceptedAndSubmittedVariantsVcf {
    filename
    path
  }
}
    `,si=t.Ps`
    fragment SourceDetailFields on Source {
  id
  citation
  sourceUrl
  displayType
  citationId
}
    `,Ao=t.Ps`
    fragment SourceSummaryFields on Source {
  id
  citation
  displayType
  sourceUrl
  title
  abstract
  publicationDate
  citationId
  fullJournalTitle
  pmcId
  authorString
  clinicalTrials {
    nctId
    id
    link
  }
}
    `,Ro=t.Ps`
    fragment MyChemInfoFields on MyChemInfo {
  chebiId
  chebiDefinition
  fdaEpcCodes {
    code
    description
  }
  fdaMoaCodes {
    code
    description
  }
  firstApproval
  chemblMoleculeType
  chemblId
  pubchemCid
  pharmgkbId
  rxnorm
  inchikey
  drugbankId
  indications
}
    `,Go=t.Ps`
    fragment TherapiesSummaryFields on Therapy {
  id
  name
  ncitId
  therapyUrl
  therapyAliases
  link
  myChemInfo {
    ...MyChemInfoFields
  }
}
    ${Ro}`,Ii=t.Ps`
    fragment UserDetailFields on User {
  id
  name
  displayName
  username
  email
  profileImagePath(size: 128)
  role
  url
  bio
  areaOfExpertise
  orcid
  twitterHandle
  facebookProfile
  linkedinProfile
  organizations {
    id
    name
  }
  country {
    id
    name
  }
  statsHash {
    comments
    revisions
    appliedRevisions
    submittedEvidenceItems
    acceptedEvidenceItems
    suggestedSources
    submittedAssertions
    acceptedAssertions
  }
  mostRecentConflictOfInterestStatement {
    id
    coiPresent
    coiStatement
    coiStatus
    createdAt
    expiresAt
  }
}
    `,Bi=t.Ps`
    fragment notificationOrganization on Organization {
  id
  name
}
    `,Oo=t.Ps`
    fragment notificationOriginatingUsers on User {
  id
  displayName
}
    `,pi=t.Ps`
    fragment notificationFeedSubjects on EventSubjectWithCount {
  subject {
    id
    __typename
    name
  }
  occuranceCount
}
    `,Gi=t.Ps`
    fragment notificationNode on Notification {
  id
  type
  event {
    ...eventFeedNode
  }
  seen
  subscription {
    id
    subscribable {
      id
      name
      __typename
    }
  }
}
    ${Ut}`,ci=t.Ps`
    fragment subscribable on Subscribable {
  id
  entityType
  __typename
}
    `,Ki=t.Ps`
    fragment VariantGroupDetailFields on VariantGroup {
  id
  name
  variants {
    totalCount
  }
  flags(state: OPEN) {
    totalCount
  }
  revisions(status: NEW) {
    totalCount
  }
  comments {
    totalCount
  }
}
    `,dr=t.Ps`
    fragment VariantGroupSummaryFields on VariantGroup {
  id
  name
  description
  sources {
    id
    link
    citation
    sourceUrl
    displayType
    sourceType
  }
}
    `,Ai=t.Ps`
    fragment VariantDetailFields on Variant {
  id
  name
  deprecated
  deprecationReason
  deprecationComment {
    ...commentListNode
  }
  gene {
    id
    name
    link
  }
  variantAliases
  flags(state: OPEN) {
    totalCount
  }
  revisions(status: NEW) {
    totalCount
  }
  comments {
    totalCount
  }
}
    ${so}`,As=t.Ps`
    fragment MyVariantInfoFields on MyVariantInfo {
  myVariantInfoId
  caddConsequence
  caddDetail
  caddScore
  caddPhred
  clinvarClinicalSignificance
  clinvarHgvsCoding
  clinvarHgvsGenomic
  clinvarHgvsNonCoding
  clinvarHgvsProtein
  clinvarId
  clinvarOmim
  cosmicId
  dbnsfpInterproDomain
  dbsnpRsid
  eglClass
  eglHgvs
  eglProtein
  eglTranscript
  exacAlleleCount
  exacAlleleFrequency
  exacAlleleNumber
  fathmmMklPrediction
  fathmmMklScore
  fathmmPrediction
  fathmmScore
  fitconsScore
  gerp
  gnomadExomeAlleleCount
  gnomadExomeAlleleFrequency
  gnomadExomeAlleleNumber
  gnomadExomeFilter
  gnomadGenomeAlleleCount
  gnomadGenomeAlleleFrequency
  gnomadGenomeAlleleNumber
  gnomadGenomeFilter
  lrtPrediction
  lrtScore
  metalrPrediction
  metalrScore
  metasvmPrediction
  metasvmScore
  mutationassessorPrediction
  mutationassessorScore
  mutationtasterPrediction
  mutationtasterScore
  phastcons100way
  phastcons30way
  phyloP100way
  phyloP30way
  polyphen2HdivPrediction
  polyphen2HdivScore
  polyphen2HvarPrediction
  polyphen2HvarScore
  proveanPrediction
  proveanScore
  revelScore
  siftPrediction
  siftScore
  siphy
  snpeffSnpEffect
  snpeffSnpImpact
}
    `,Br=t.Ps`
    fragment VariantSummaryFields on Variant {
  id
  name
  gene {
    id
    name
    link
  }
  variantAliases
  alleleRegistryId
  openCravatUrl
  maneSelectTranscript
  variantTypes {
    id
    link
    soid
    name
  }
  hgvsDescriptions
  clinvarIds
  referenceBuild
  ensemblVersion
  primaryCoordinates {
    representativeTranscript
    chromosome
    start
    stop
  }
  secondaryCoordinates {
    representativeTranscript
    chromosome
    start
    stop
  }
  referenceBases
  variantBases
  flags(state: OPEN) {
    totalCount
  }
  revisions(status: NEW) {
    totalCount
  }
  comments {
    totalCount
  }
  myVariantInfo {
    ...MyVariantInfoFields
  }
  lastSubmittedRevisionEvent {
    originatingUser {
      id
      displayName
      role
      profileImagePath(size: 32)
    }
  }
  lastAcceptedRevisionEvent {
    originatingUser {
      id
      displayName
      role
      profileImagePath(size: 32)
    }
  }
}
    ${As}`,Pr=t.Ps`
    query AssertionPopover($assertionId: Int!) {
  assertion(id: $assertionId) {
    ...assertionPopover
  }
}
    ${J}`;class ir extends t.AE{constructor(G){super(G),this.document=Pr}}ir.\u0275fac=function(G){return new(G||ir)(o.LFG(t._M))},ir.\u0275prov=o.Yz7({token:ir,factory:ir.\u0275fac,providedIn:"root"});const Hr=t.Ps`
    query AssertionsBrowse($first: Int, $last: Int, $before: String, $after: String, $diseaseName: String, $therapyName: String, $id: Int, $summary: String, $assertionDirection: EvidenceDirection, $significance: EvidenceSignificance, $assertionType: EvidenceType, $variantId: Int, $molecularProfileId: Int, $evidenceId: Int, $molecularProfileName: String, $sortBy: AssertionSort, $ampLevel: AmpLevel, $organizationId: Int, $userId: Int, $phenotypeId: Int, $diseaseId: Int, $therapyId: Int, $status: EvidenceStatusFilter) {
  assertions(
    first: $first
    last: $last
    before: $before
    after: $after
    diseaseName: $diseaseName
    therapyName: $therapyName
    id: $id
    summary: $summary
    assertionDirection: $assertionDirection
    significance: $significance
    assertionType: $assertionType
    variantId: $variantId
    molecularProfileId: $molecularProfileId
    sortBy: $sortBy
    ampLevel: $ampLevel
    molecularProfileName: $molecularProfileName
    evidenceId: $evidenceId
    organizationId: $organizationId
    userId: $userId
    phenotypeId: $phenotypeId
    therapyId: $therapyId
    diseaseId: $diseaseId
    status: $status
  ) {
    totalCount
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
    edges {
      cursor
      node {
        ...AssertionBrowseFields
      }
    }
  }
}
    ${Te}`;class Fi extends t.AE{constructor(G){super(G),this.document=Hr}}Fi.\u0275fac=function(G){return new(G||Fi)(o.LFG(t._M))},Fi.\u0275prov=o.Yz7({token:Fi,factory:Fi.\u0275fac,providedIn:"root"});const Ws=t.Ps`
    query ClinicalTrialPopover($clinicalTrialId: Int!) {
  clinicalTrials(id: $clinicalTrialId) {
    edges {
      node {
        ...clinicalTrialPopover
      }
    }
  }
}
    ${Pe}`;class pr extends t.AE{constructor(G){super(G),this.document=Ws}}pr.\u0275fac=function(G){return new(G||pr)(o.LFG(t._M))},pr.\u0275prov=o.Yz7({token:pr,factory:pr.\u0275fac,providedIn:"root"});const ts=t.Ps`
    query ClinicalTrialsBrowse($first: Int, $last: Int, $before: String, $after: String, $name: String, $nctId: String, $sortBy: ClinicalTrialSort) {
  clinicalTrials(
    first: $first
    last: $last
    before: $before
    after: $after
    name: $name
    nctId: $nctId
    sortBy: $sortBy
  ) {
    totalCount
    filteredCount
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
    edges {
      cursor
      node {
        ...BrowseClinicalTrialsRowFields
      }
    }
  }
}
    ${Ge}`;class Ir extends t.AE{constructor(G){super(G),this.document=ts}}Ir.\u0275fac=function(G){return new(G||Ir)(o.LFG(t._M))},Ir.\u0275prov=o.Yz7({token:Ir,factory:Ir.\u0275fac,providedIn:"root"});const Yr=t.Ps`
    query CommentList($first: Int, $last: Int, $before: String, $after: String, $originatingUserId: Int, $mentionedUserId: Int, $mentionedRole: UserRole, $mentionedEntity: TaggableEntityInput, $subject: CommentableInput, $sortBy: DateSort) {
  comments(
    first: $first
    last: $last
    before: $before
    after: $after
    originatingUserId: $originatingUserId
    mentionedUserId: $mentionedUserId
    mentionedRole: $mentionedRole
    mentionedEntity: $mentionedEntity
    subject: $subject
    sortBy: $sortBy
  ) {
    totalCount
    pageInfo {
      startCursor
      endCursor
      hasPreviousPage
      hasNextPage
    }
    uniqueCommenters {
      id
      displayName
      role
      profileImagePath(size: 32)
    }
    mentionedUsers {
      id
      displayName
      role
      profileImagePath(size: 32)
    }
    mentionedRoles {
      displayName
      entityId
      tagType
      link
    }
    mentionedEntities {
      displayName
      entityId
      tagType
      link
    }
    unfilteredCountForSubject
    edges {
      cursor
      node {
        ...commentListNode
      }
    }
  }
}
    ${so}`;class hr extends t.AE{constructor(G){super(G),this.document=Yr}}hr.\u0275fac=function(G){return new(G||hr)(o.LFG(t._M))},hr.\u0275prov=o.Yz7({token:hr,factory:hr.\u0275fac,providedIn:"root"});const Fs=t.Ps`
    query CommentPopover($commentId: Int!) {
  comment(id: $commentId) {
    ...commentPopover
  }
}
    ${it}`;class Ve extends t.AE{constructor(G){super(G),this.document=Fs}}Ve.\u0275fac=function(G){return new(G||Ve)(o.LFG(t._M))},Ve.\u0275prov=o.Yz7({token:Ve,factory:Ve.\u0275fac,providedIn:"root"});const Vt=t.Ps`
    query DiseasePopover($diseaseId: Int!) {
  diseasePopover(id: $diseaseId) {
    id
    name
    displayName
    doid
    diseaseUrl
    diseaseAliases
    assertionCount
    evidenceItemCount
    molecularProfileCount
    link
  }
}
    `;class $ extends t.AE{constructor(G){super(G),this.document=Vt}}$.\u0275fac=function(G){return new(G||$)(o.LFG(t._M))},$.\u0275prov=o.Yz7({token:$,factory:$.\u0275fac,providedIn:"root"});const ke=t.Ps`
    query BrowseDiseases($first: Int, $last: Int, $before: String, $after: String, $sortBy: DiseasesSort, $name: String, $doid: String, $geneNames: String) {
  browseDiseases(
    first: $first
    last: $last
    before: $before
    after: $after
    sortBy: $sortBy
    name: $name
    doid: $doid
    geneNames: $geneNames
  ) {
    pageInfo {
      endCursor
      hasNextPage
      hasPreviousPage
      startCursor
    }
    totalCount
    filteredCount
    pageCount
    edges {
      cursor
      node {
        ...BrowseDiseaseRowFields
      }
    }
  }
}
    ${yt}`;class Ft extends t.AE{constructor(G){super(G),this.document=ke}}Ft.\u0275fac=function(G){return new(G||Ft)(o.LFG(t._M))},Ft.\u0275prov=o.Yz7({token:Ft,factory:Ft.\u0275fac,providedIn:"root"});const rn=t.Ps`
    query EventFeedCount($subject: SubscribableQueryInput, $first: Int, $last: Int, $before: String, $after: String, $originatingUserId: Int, $organizationId: Int, $eventType: EventAction, $includeAutomatedEvents: Boolean, $mode: EventFeedMode) {
  events(
    subject: $subject
    first: $first
    last: $last
    before: $before
    after: $after
    originatingUserId: $originatingUserId
    organizationId: $organizationId
    eventType: $eventType
    mode: $mode
    includeAutomatedEvents: $includeAutomatedEvents
  ) {
    unfilteredCount
  }
}
    `;class Sn extends t.AE{constructor(G){super(G),this.document=rn}}Sn.\u0275fac=function(G){return new(G||Sn)(o.LFG(t._M))},Sn.\u0275prov=o.Yz7({token:Sn,factory:Sn.\u0275fac,providedIn:"root"});const lo=t.Ps`
    query EventFeed($subject: SubscribableQueryInput, $first: Int, $last: Int, $before: String, $after: String, $originatingUserId: Int, $organizationId: Int, $eventType: EventAction, $mode: EventFeedMode, $includeAutomatedEvents: Boolean = true, $showFilters: Boolean!) {
  events(
    subject: $subject
    first: $first
    last: $last
    before: $before
    after: $after
    originatingUserId: $originatingUserId
    organizationId: $organizationId
    eventType: $eventType
    includeAutomatedEvents: $includeAutomatedEvents
    mode: $mode
  ) {
    ...eventFeed
  }
}
    ${$t}`;class Xn extends t.AE{constructor(G){super(G),this.document=lo}}Xn.\u0275fac=function(G){return new(G||Xn)(o.LFG(t._M))},Xn.\u0275prov=o.Yz7({token:Xn,factory:Xn.\u0275fac,providedIn:"root"});const So=t.Ps`
    query EvidencePopover($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...evidencePopover
  }
}
    ${Je}`;class Gn extends t.AE{constructor(G){super(G),this.document=So}}Gn.\u0275fac=function(G){return new(G||Gn)(o.LFG(t._M))},Gn.\u0275prov=o.Yz7({token:Gn,factory:Gn.\u0275fac,providedIn:"root"});const ni=t.Ps`
    query EvidenceBrowse($first: Int, $last: Int, $before: String, $after: String, $diseaseName: String, $therapyName: String, $id: Int, $description: String, $evidenceLevel: EvidenceLevel, $evidenceDirection: EvidenceDirection, $significance: EvidenceSignificance, $evidenceType: EvidenceType, $rating: Int, $variantOrigin: VariantOrigin, $variantId: Int, $molecularProfileId: Int, $assertionId: Int, $organizationId: Int, $userId: Int, $sortBy: EvidenceSort, $phenotypeId: Int, $diseaseId: Int, $therapyId: Int, $sourceId: Int, $clinicalTrialId: Int, $molecularProfileName: String, $status: EvidenceStatusFilter) {
  evidenceItems(
    first: $first
    last: $last
    before: $before
    after: $after
    diseaseName: $diseaseName
    therapyName: $therapyName
    id: $id
    description: $description
    evidenceLevel: $evidenceLevel
    evidenceDirection: $evidenceDirection
    significance: $significance
    evidenceType: $evidenceType
    evidenceRating: $rating
    variantOrigin: $variantOrigin
    variantId: $variantId
    molecularProfileId: $molecularProfileId
    assertionId: $assertionId
    organizationId: $organizationId
    userId: $userId
    phenotypeId: $phenotypeId
    diseaseId: $diseaseId
    therapyId: $therapyId
    sourceId: $sourceId
    clinicalTrialId: $clinicalTrialId
    molecularProfileName: $molecularProfileName
    status: $status
    sortBy: $sortBy
  ) {
    totalCount
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
    edges {
      cursor
      node {
        ...EvidenceGridFields
      }
    }
  }
}
    ${tt}`;class oi extends t.AE{constructor(G){super(G),this.document=ni}}oi.\u0275fac=function(G){return new(G||oi)(o.LFG(t._M))},oi.\u0275prov=o.Yz7({token:oi,factory:oi.\u0275fac,providedIn:"root"});const fr=t.Ps`
    query FlagList($flaggable: FlaggableInput, $flaggingUserId: Int, $resolvingUserId: Int, $state: FlagState, $sortBy: DateSort, $first: Int, $last: Int, $before: String, $after: String) {
  flags(
    flaggable: $flaggable
    flaggingUserId: $flaggingUserId
    resolvingUserId: $resolvingUserId
    state: $state
    sortBy: $sortBy
    first: $first
    last: $last
    before: $before
    after: $after
  ) {
    ...flagList
  }
}
    ${Rt}`;class fi extends t.AE{constructor(G){super(G),this.document=fr}}fi.\u0275fac=function(G){return new(G||fi)(o.LFG(t._M))},fi.\u0275prov=o.Yz7({token:fi,factory:fi.\u0275fac,providedIn:"root"});const $r=t.Ps`
    query FlagPopover($flagId: Int!) {
  flag(id: $flagId) {
    ...flagPopover
  }
}
    ${zt}`;class ii extends t.AE{constructor(G){super(G),this.document=$r}}ii.\u0275fac=function(G){return new(G||ii)(o.LFG(t._M))},ii.\u0275prov=o.Yz7({token:ii,factory:ii.\u0275fac,providedIn:"root"});const ho=t.Ps`
    query GenePopover($geneId: Int!) {
  gene(id: $geneId) {
    ...genePopover
  }
}
    ${jt}`;class mr extends t.AE{constructor(G){super(G),this.document=ho}}mr.\u0275fac=function(G){return new(G||mr)(o.LFG(t._M))},mr.\u0275prov=o.Yz7({token:mr,factory:mr.\u0275fac,providedIn:"root"});const xe=t.Ps`
    query BrowseGenes($entrezSymbol: String, $therapyName: String, $geneAlias: String, $diseaseName: String, $sortBy: GenesSort, $searchScope: GeneSearchFilter, $first: Int, $last: Int, $before: String, $after: String) {
  browseGenes(
    entrezSymbol: $entrezSymbol
    therapyName: $therapyName
    geneAlias: $geneAlias
    diseaseName: $diseaseName
    searchScope: $searchScope
    sortBy: $sortBy
    first: $first
    last: $last
    before: $before
    after: $after
  ) {
    edges {
      cursor
      node {
        ...BrowseGenesFields
      }
    }
    pageInfo {
      startCursor
      endCursor
      hasPreviousPage
      hasNextPage
    }
    totalCount
    filteredCount
    pageCount
  }
}
    ${Lt}`;class ye extends t.AE{constructor(G){super(G),this.document=xe}}ye.\u0275fac=function(G){return new(G||ye)(o.LFG(t._M))},ye.\u0275prov=o.Yz7({token:ye,factory:ye.\u0275fac,providedIn:"root"});const pe=t.Ps`
    query Quicksearch($query: String!, $types: [SearchableEntities!], $highlightMatches: Boolean) {
  search(query: $query, types: $types, highlightMatches: $highlightMatches) {
    ...QuicksearchResult
  }
}
    ${We}`;class at extends t.AE{constructor(G){super(G),this.document=pe}}at.\u0275fac=function(G){return new(G||at)(o.LFG(t._M))},at.\u0275prov=o.Yz7({token:at,factory:at.\u0275fac,providedIn:"root"});const hn=t.Ps`
    query MolecularProfilePopover($molecularProfileId: Int!) {
  molecularProfile(id: $molecularProfileId) {
    ...molecularProfilePopoverFields
  }
}
    ${j}`;class Hn extends t.AE{constructor(G){super(G),this.document=hn}}Hn.\u0275fac=function(G){return new(G||Hn)(o.LFG(t._M))},Hn.\u0275prov=o.Yz7({token:Hn,factory:Hn.\u0275fac,providedIn:"root"});const hi=t.Ps`
    query BrowseMolecularProfiles($molecularProfileName: String, $variantName: String, $variantId: Int, $entrezSymbol: String, $diseaseName: String, $therapyName: String, $molecularProfileAlias: String, $sortBy: MolecularProfilesSort, $first: Int, $last: Int, $before: String, $after: String) {
  browseMolecularProfiles(
    molecularProfileName: $molecularProfileName
    variantName: $variantName
    variantId: $variantId
    entrezSymbol: $entrezSymbol
    diseaseName: $diseaseName
    therapyName: $therapyName
    molecularProfileAlias: $molecularProfileAlias
    sortBy: $sortBy
    first: $first
    last: $last
    before: $before
    after: $after
  ) {
    pageInfo {
      endCursor
      hasNextPage
      startCursor
      hasPreviousPage
    }
    edges {
      cursor
      node {
        ...BrowseMolecularProfilesFields
      }
    }
    filteredCount
    pageCount
  }
}
    ${P}`;class fn extends t.AE{constructor(G){super(G),this.document=hi}}fn.\u0275fac=function(G){return new(G||fn)(o.LFG(t._M))},fn.\u0275prov=o.Yz7({token:fn,factory:fn.\u0275fac,providedIn:"root"});const To=t.Ps`
    query MolecularProfileMenu($geneId: Int, $mpName: String, $first: Int, $last: Int, $before: String, $after: String, $evidenceStatusFilter: MolecularProfileDisplayFilter) {
  molecularProfiles(
    geneId: $geneId
    name: $mpName
    evidenceStatusFilter: $evidenceStatusFilter
    first: $first
    last: $last
    before: $before
    after: $after
  ) {
    totalCount
    pageInfo {
      startCursor
      endCursor
      hasPreviousPage
      hasNextPage
    }
    edges {
      cursor
      node {
        ...menuMolecularProfile
      }
    }
  }
}
    ${K}`;class Ar extends t.AE{constructor(G){super(G),this.document=To}}Ar.\u0275fac=function(G){return new(G||Ar)(o.LFG(t._M))},Ar.\u0275prov=o.Yz7({token:Ar,factory:Ar.\u0275fac,providedIn:"root"});const gr=t.Ps`
    query OrgPopover($orgId: Int!) {
  organization(id: $orgId) {
    ...orgPopover
  }
}
    ${ze}`;class Jo extends t.AE{constructor(G){super(G),this.document=gr}}Jo.\u0275fac=function(G){return new(G||Jo)(o.LFG(t._M))},Jo.\u0275prov=o.Yz7({token:Jo,factory:Jo.\u0275fac,providedIn:"root"});const Qc=t.Ps`
    query OrganizationsBrowse($first: Int, $last: Int, $before: String, $after: String, $id: Int, $orgName: String, $sortBy: OrganizationSort) {
  organizations(
    first: $first
    last: $last
    before: $before
    after: $after
    name: $orgName
    id: $id
    sortBy: $sortBy
  ) {
    totalCount
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
    edges {
      cursor
      node {
        ...OrganizationBrowseTableRowFields
      }
    }
  }
}
    ${dt}`;class qi extends t.AE{constructor(G){super(G),this.document=Qc}}qi.\u0275fac=function(G){return new(G||qi)(o.LFG(t._M))},qi.\u0275prov=o.Yz7({token:qi,factory:qi.\u0275fac,providedIn:"root"});const Qi=t.Ps`
    query PhenotypePopover($phenotypeId: Int!) {
  phenotypePopover(id: $phenotypeId) {
    id
    name
    url
    hpoId
    assertionCount
    evidenceItemCount
    molecularProfileCount
    link
  }
}
    `;class Xi extends t.AE{constructor(G){super(G),this.document=Qi}}Xi.\u0275fac=function(G){return new(G||Xi)(o.LFG(t._M))},Xi.\u0275prov=o.Yz7({token:Xi,factory:Xi.\u0275fac,providedIn:"root"});const vr=t.Ps`
    query PhenotypesBrowse($first: Int, $last: Int, $before: String, $after: String, $name: String, $hpoId: String, $sortBy: PhenotypeSort) {
  phenotypes(
    first: $first
    last: $last
    before: $before
    after: $after
    name: $name
    hpoId: $hpoId
    sortBy: $sortBy
  ) {
    totalCount
    filteredCount
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
    edges {
      cursor
      node {
        ...PhenotypeBrowseTableRowFields
      }
    }
  }
}
    ${Le}`;class Zs extends t.AE{constructor(G){super(G),this.document=vr}}Zs.\u0275fac=function(G){return new(G||Zs)(o.LFG(t._M))},Zs.\u0275prov=o.Yz7({token:Zs,factory:Zs.\u0275fac,providedIn:"root"});const Wc=t.Ps`
    mutation AcceptRevision($input: AcceptRevisionsInput!) {
  acceptRevisions(input: $input) {
    revisions {
      id
      __typename
    }
  }
}
    `;class _r extends t.mm{constructor(G){super(G),this.document=Wc}}_r.\u0275fac=function(G){return new(G||_r)(o.LFG(t._M))},_r.\u0275prov=o.Yz7({token:_r,factory:_r.\u0275fac,providedIn:"root"});const mi=t.Ps`
    mutation RejectRevision($input: RejectRevisionsInput!) {
  rejectRevisions(input: $input) {
    revisions {
      id
      __typename
    }
  }
}
    `;class Hi extends t.mm{constructor(G){super(G),this.document=mi}}Hi.\u0275fac=function(G){return new(G||Hi)(o.LFG(t._M))},Hi.\u0275prov=o.Yz7({token:Hi,factory:Hi.\u0275fac,providedIn:"root"});const tc=t.Ps`
    query ValidateRevisionsForAcceptance($ids: [Int!]!) {
  validateRevisionsForAcceptance(revisionIds: $ids) {
    genericErrors
    validationErrors {
      ...validationError
    }
  }
}
    ${ge}`;class Si extends t.AE{constructor(G){super(G),this.document=tc}}Si.\u0275fac=function(G){return new(G||Si)(o.LFG(t._M))},Si.\u0275prov=o.Yz7({token:Si,factory:Si.\u0275fac,providedIn:"root"});const er=t.Ps`
    query RevisionPopover($revisionId: Int!) {
  revision(id: $revisionId) {
    ...revisionPopover
  }
}
    ${Se}`;class ns extends t.AE{constructor(G){super(G),this.document=er}}ns.\u0275fac=function(G){return new(G||ns)(o.LFG(t._M))},ns.\u0275prov=o.Yz7({token:ns,factory:ns.\u0275fac,providedIn:"root"});const Ea=t.Ps`
    query Revisions($subject: ModeratedInput, $first: Int, $last: Int, $before: String, $after: String, $fieldName: String, $originatingUserId: Int, $resolvingUserId: Int, $revisionSetId: Int, $status: RevisionStatus) {
  revisions(
    first: $first
    last: $last
    before: $before
    after: $after
    fieldName: $fieldName
    originatingUserId: $originatingUserId
    resolvingUserId: $resolvingUserId
    subject: $subject
    status: $status
    revisionSetId: $revisionSetId
  ) {
    totalCount
    unfilteredCountForSubject
    uniqueRevisors {
      username
      id
      profileImagePath(size: 32)
    }
    uniqueResolvers {
      username
      id
      profileImagePath(size: 32)
    }
    revisedFieldNames {
      name
      displayName
    }
    pageInfo {
      hasNextPage
      hasPreviousPage
      endCursor
      startCursor
    }
    edges {
      node {
        ...revision
      }
    }
  }
}
    ${ut}`;class zs extends t.AE{constructor(G){super(G),this.document=Ea}}zs.\u0275fac=function(G){return new(G||zs)(o.LFG(t._M))},zs.\u0275prov=o.Yz7({token:zs,factory:zs.\u0275fac,providedIn:"root"});const Ts=t.Ps`
    query ContributorAvatars($subscribable: SubscribableInput!) {
  contributors(subscribable: $subscribable) {
    editors {
      ...ContributorFields
    }
    curators {
      ...ContributorFields
    }
  }
}
    ${vt}`;class Ni extends t.AE{constructor(G){super(G),this.document=Ts}}Ni.\u0275fac=function(G){return new(G||Ni)(o.LFG(t._M))},Ni.\u0275prov=o.Yz7({token:Ni,factory:Ni.\u0275fac,providedIn:"root"});const Js=t.Ps`
    query SubscriptionForEntity($subscribable: SubscribableInput!) {
  subscriptionForEntity(subscribable: $subscribable) {
    ...subscriptionId
  }
}
    ${qt}`;class rr extends t.AE{constructor(G){super(G),this.document=Js}}rr.\u0275fac=function(G){return new(G||rr)(o.LFG(t._M))},rr.\u0275prov=o.Yz7({token:rr,factory:rr.\u0275fac,providedIn:"root"});const Ks=t.Ps`
    mutation ModerateEvidenceItem($input: ModerateEvidenceItemInput!) {
  moderateEvidenceItem(input: $input) {
    evidenceItem {
      id
    }
  }
}
    `;class yr extends t.mm{constructor(G){super(G),this.document=Ks}}yr.\u0275fac=function(G){return new(G||yr)(o.LFG(t._M))},yr.\u0275prov=o.Yz7({token:yr,factory:yr.\u0275fac,providedIn:"root"});const Ns=t.Ps`
    mutation ModerateAssertion($input: ModerateAssertionInput!) {
  moderateAssertion(input: $input) {
    assertion {
      id
    }
  }
}
    `;class os extends t.mm{constructor(G){super(G),this.document=Ns}}os.\u0275fac=function(G){return new(G||os)(o.LFG(t._M))},os.\u0275prov=o.Yz7({token:os,factory:os.\u0275fac,providedIn:"root"});const nc=t.Ps`
    query CivicStats {
  timepointStats {
    assertions {
      ...TimepointCount
    }
    diseases {
      ...TimepointCount
    }
    therapies {
      ...TimepointCount
    }
    evidenceItems {
      ...TimepointCount
    }
    genes {
      ...TimepointCount
    }
    revisions {
      ...TimepointCount
    }
    sources {
      ...TimepointCount
    }
    users {
      ...TimepointCount
    }
    variants {
      ...TimepointCount
    }
    comments {
      ...TimepointCount
    }
    molecularProfiles {
      ...TimepointCount
    }
  }
}
    ${Ct}`;class tr extends t.AE{constructor(G){super(G),this.document=nc}}tr.\u0275fac=function(G){return new(G||tr)(o.LFG(t._M))},tr.\u0275prov=o.Yz7({token:tr,factory:tr.\u0275fac,providedIn:"root"});const Zc=t.Ps`
    query BrowseSourceSuggestions($first: Int, $last: Int, $before: String, $after: String, $sortBy: SourceSuggestionsSort, $sourceType: SourceSource, $citationId: Int, $sourceId: Int, $molecularProfileName: String, $diseaseName: String, $comment: String, $submitter: String, $citation: String, $submitterId: Int, $status: SourceSuggestionStatus) {
  sourceSuggestions(
    first: $first
    last: $last
    before: $before
    after: $after
    sortBy: $sortBy
    sourceType: $sourceType
    citationId: $citationId
    sourceId: $sourceId
    molecularProfileName: $molecularProfileName
    diseaseName: $diseaseName
    comment: $comment
    submitter: $submitter
    citation: $citation
    submitterId: $submitterId
    status: $status
  ) {
    pageInfo {
      endCursor
      hasNextPage
      startCursor
      hasPreviousPage
    }
    totalCount
    filteredCount
    pageCount
    edges {
      cursor
      node {
        ...BrowseSourceSuggestionRowFields
      }
    }
  }
}
    ${tn}`;class is extends t.AE{constructor(G){super(G),this.document=Zc}}is.\u0275fac=function(G){return new(G||is)(o.LFG(t._M))},is.\u0275prov=o.Yz7({token:is,factory:is.\u0275fac,providedIn:"root"});const Cr=t.Ps`
    mutation UpdateSourceSuggestionStatus($input: UpdateSourceSuggestionStatusInput!) {
  updateSourceSuggestionStatus(input: $input) {
    sourceSuggestion {
      id
      status
    }
  }
}
    `;class sr extends t.mm{constructor(G){super(G),this.document=Cr}}sr.\u0275fac=function(G){return new(G||sr)(o.LFG(t._M))},sr.\u0275prov=o.Yz7({token:sr,factory:sr.\u0275fac,providedIn:"root"});const Ls=t.Ps`
    query SourcePopover($sourceId: Int!) {
  sourcePopover(id: $sourceId) {
    ...sourcePopover
  }
}
    ${je}`;class yi extends t.AE{constructor(G){super(G),this.document=Ls}}yi.\u0275fac=function(G){return new(G||yi)(o.LFG(t._M))},yi.\u0275prov=o.Yz7({token:yi,factory:yi.\u0275fac,providedIn:"root"});const rs=t.Ps`
    query BrowseSources($first: Int, $last: Int, $before: String, $after: String, $sortBy: SourcesSort, $name: String, $year: Int, $sourceType: SourceSource, $citationId: Int, $author: String, $journal: String, $clinicalTrialId: Int, $openAccess: Boolean) {
  browseSources(
    first: $first
    last: $last
    before: $before
    after: $after
    sortBy: $sortBy
    name: $name
    year: $year
    sourceType: $sourceType
    citationId: $citationId
    author: $author
    journal: $journal
    clinicalTrialId: $clinicalTrialId
    openAccess: $openAccess
  ) {
    pageInfo {
      endCursor
      hasNextPage
      startCursor
      hasPreviousPage
    }
    totalCount
    filteredCount
    pageCount
    edges {
      cursor
      node {
        ...BrowseSourceRowFields
      }
    }
  }
}
    ${Qe}`;class Ko extends t.AE{constructor(G){super(G),this.document=rs}}Ko.\u0275fac=function(G){return new(G||Ko)(o.LFG(t._M))},Ko.\u0275prov=o.Yz7({token:Ko,factory:Ko.\u0275fac,providedIn:"root"});const qs=t.Ps`
    query TherapyPopover($therapyId: Int!) {
  therapyPopover(id: $therapyId) {
    id
    name
    therapyUrl
    ncitId
    therapyAliases
    assertionCount
    evidenceItemCount
    molecularProfileCount
    link
  }
}
    `;class ss extends t.AE{constructor(G){super(G),this.document=qs}}ss.\u0275fac=function(G){return new(G||ss)(o.LFG(t._M))},ss.\u0275prov=o.Yz7({token:ss,factory:ss.\u0275fac,providedIn:"root"});const nu=t.Ps`
    query TherapiesBrowse($first: Int, $last: Int, $before: String, $after: String, $name: String, $ncitId: String, $sortBy: TherapySort) {
  therapies(
    first: $first
    last: $last
    before: $before
    after: $after
    name: $name
    ncitId: $ncitId
    sortBy: $sortBy
  ) {
    totalCount
    filteredCount
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
    edges {
      cursor
      node {
        ...TherapyBrowseTableRowFields
      }
    }
  }
}
    ${ft}`;class Ur extends t.AE{constructor(G){super(G),this.document=nu}}Ur.\u0275fac=function(G){return new(G||Ur)(o.LFG(t._M))},Ur.\u0275prov=o.Yz7({token:Ur,factory:Ur.\u0275fac,providedIn:"root"});const ou=t.Ps`
    query UserPopover($userId: Int!) {
  user(id: $userId) {
    ...popoverUser
  }
}
    ${Re}`;class te extends t.AE{constructor(G){super(G),this.document=ou}}te.\u0275fac=function(G){return new(G||te)(o.LFG(t._M))},te.\u0275prov=o.Yz7({token:te,factory:te.\u0275fac,providedIn:"root"});const Be=t.Ps`
    query UsersBrowse($first: Int, $last: Int, $before: String, $after: String, $userName: String, $orgName: OrganizationFilter, $userRole: UserRole, $sortBy: UsersSort) {
  users(
    first: $first
    last: $last
    before: $before
    after: $after
    name: $userName
    organization: $orgName
    role: $userRole
    sortBy: $sortBy
  ) {
    pageInfo {
      endCursor
      hasNextPage
      hasPreviousPage
      startCursor
    }
    totalCount
    edges {
      cursor
      node {
        ...UserBrowseTableRowFields
      }
    }
  }
}
    ${He}`;class le extends t.AE{constructor(G){super(G),this.document=Be}}le.\u0275fac=function(G){return new(G||le)(o.LFG(t._M))},le.\u0275prov=o.Yz7({token:le,factory:le.\u0275fac,providedIn:"root"});const Xe=t.Ps`
    query VariantGroupPopover($variantGroupId: Int!) {
  variantGroup(id: $variantGroupId) {
    ...variantGroupPopoverFields
  }
}
    ${Ie}`;class Dt extends t.AE{constructor(G){super(G),this.document=Xe}}Dt.\u0275fac=function(G){return new(G||Dt)(o.LFG(t._M))},Dt.\u0275prov=o.Yz7({token:Dt,factory:Dt.\u0275fac,providedIn:"root"});const dn=t.Ps`
    query BrowseVariantGroups($first: Int, $last: Int, $before: String, $after: String, $sortBy: VariantGroupsSort, $name: String, $geneNames: String, $variantNames: String) {
  browseVariantGroups(
    first: $first
    last: $last
    before: $before
    after: $after
    sortBy: $sortBy
    name: $name
    geneNames: $geneNames
    variantNames: $variantNames
  ) {
    pageInfo {
      endCursor
      hasNextPage
      startCursor
      hasPreviousPage
    }
    totalCount
    filteredCount
    pageCount
    edges {
      cursor
      node {
        ...BrowseVariantGroupRowFields
      }
    }
  }
}
    ${he}`;class vn extends t.AE{constructor(G){super(G),this.document=dn}}vn.\u0275fac=function(G){return new(G||vn)(o.LFG(t._M))},vn.\u0275prov=o.Yz7({token:vn,factory:vn.\u0275fac,providedIn:"root"});const Zn=t.Ps`
    query VariantTypePopover($variantTypeId: Int!) {
  variantTypePopover(id: $variantTypeId) {
    ...variantTypePopover
  }
}
    ${we}`;class wo extends t.AE{constructor(G){super(G),this.document=Zn}}wo.\u0275fac=function(G){return new(G||wo)(o.LFG(t._M))},wo.\u0275prov=o.Yz7({token:wo,factory:wo.\u0275fac,providedIn:"root"});const Qo=t.Ps`
    query VariantTypesBrowse($first: Int, $last: Int, $before: String, $after: String, $name: String, $soid: String, $sortBy: VariantTypeSort) {
  variantTypes(
    first: $first
    last: $last
    before: $before
    after: $after
    name: $name
    soid: $soid
    sortBy: $sortBy
  ) {
    totalCount
    filteredCount
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
    edges {
      cursor
      node {
        ...VariantTypeBrowseTableRowFields
      }
    }
  }
}
    ${ce}`;class Bo extends t.AE{constructor(G){super(G),this.document=Qo}}Bo.\u0275fac=function(G){return new(G||Bo)(o.LFG(t._M))},Bo.\u0275prov=o.Yz7({token:Bo,factory:Bo.\u0275fac,providedIn:"root"});const Mo=t.Ps`
    query CoordinatesCard($variantId: Int!) {
  variant(id: $variantId) {
    ...CoordinatesCardFields
  }
}
    ${nt}`;class ri extends t.AE{constructor(G){super(G),this.document=Mo}}ri.\u0275fac=function(G){return new(G||ri)(o.LFG(t._M))},ri.\u0275prov=o.Yz7({token:ri,factory:ri.\u0275fac,providedIn:"root"});const ei=t.Ps`
    query VariantPopover($variantId: Int!) {
  variant(id: $variantId) {
    ...variantPopoverFields
  }
}
    ${be}`;class li extends t.AE{constructor(G){super(G),this.document=ei}}li.\u0275fac=function(G){return new(G||li)(o.LFG(t._M))},li.\u0275prov=o.Yz7({token:li,factory:li.\u0275fac,providedIn:"root"});const Wi=t.Ps`
    query VariantsMenu($geneId: Int, $variantName: String, $variantTypeIds: [Int!], $hasNoVariantType: Boolean, $first: Int, $last: Int, $before: String, $after: String, $sortBy: VariantMenuSort) {
  variants(
    geneId: $geneId
    name: $variantName
    variantTypeIds: $variantTypeIds
    hasNoVariantType: $hasNoVariantType
    first: $first
    last: $last
    before: $before
    after: $after
    sortBy: $sortBy
  ) {
    totalCount
    pageInfo {
      startCursor
      endCursor
      hasPreviousPage
      hasNextPage
    }
    edges {
      cursor
      node {
        ...menuVariant
      }
    }
  }
}
    ${Zt}`;class Ci extends t.AE{constructor(G){super(G),this.document=Wi}}Ci.\u0275fac=function(G){return new(G||Ci)(o.LFG(t._M))},Ci.\u0275prov=o.Yz7({token:Ci,factory:Ci.\u0275fac,providedIn:"root"});const Fr=t.Ps`
    query VariantTypesForGene($geneId: Int) {
  variantTypes(geneId: $geneId, first: 50) {
    edges {
      node {
        ...menuVariantType
      }
    }
  }
}
    ${rt}`;class Li extends t.AE{constructor(G){super(G),this.document=Fr}}Li.\u0275fac=function(G){return new(G||Li)(o.LFG(t._M))},Li.\u0275prov=o.Yz7({token:Li,factory:Li.\u0275fac,providedIn:"root"});const as=t.Ps`
    query BrowseVariants($variantName: String, $entrezSymbol: String, $diseaseName: String, $therapyName: String, $variantAlias: String, $variantTypeId: Int, $variantGroupId: Int, $variantTypeName: String, $hasNoVariantType: Boolean, $sortBy: VariantsSort, $first: Int, $last: Int, $before: String, $after: String) {
  browseVariants(
    variantName: $variantName
    entrezSymbol: $entrezSymbol
    diseaseName: $diseaseName
    therapyName: $therapyName
    variantAlias: $variantAlias
    variantTypeId: $variantTypeId
    variantGroupId: $variantGroupId
    variantTypeName: $variantTypeName
    hasNoVariantType: $hasNoVariantType
    sortBy: $sortBy
    first: $first
    last: $last
    before: $before
    after: $after
  ) {
    pageInfo {
      endCursor
      hasNextPage
      startCursor
      hasPreviousPage
    }
    edges {
      cursor
      node {
        ...BrowseVariantsFields
      }
    }
    totalCount
    filteredCount
    pageCount
  }
}
    ${nn}`;class xi extends t.AE{constructor(G){super(G),this.document=as}}xi.\u0275fac=function(G){return new(G||xi)(o.LFG(t._M))},xi.\u0275prov=o.Yz7({token:xi,factory:xi.\u0275fac,providedIn:"root"});const ks=t.Ps`
    query ViewerBase {
  viewer {
    id
    username
    role
    displayName
    profileImagePath(size: 32)
    organizations {
      id
      name
      profileImagePath(size: 32)
    }
    mostRecentConflictOfInterestStatement {
      coiStatus
    }
    mostRecentOrganizationId
  }
}
    `;class cs extends t.AE{constructor(G){super(G),this.document=ks}}cs.\u0275fac=function(G){return new(G||cs)(o.LFG(t._M))},cs.\u0275prov=o.Yz7({token:cs,factory:cs.\u0275fac,providedIn:"root"});const Jc=t.Ps`
    query ViewerNotificationCount {
  notifications {
    unreadCount
  }
}
    `;class Sa extends t.AE{constructor(G){super(G),this.document=Jc}}Sa.\u0275fac=function(G){return new(G||Sa)(o.LFG(t._M))},Sa.\u0275prov=o.Yz7({token:Sa,factory:Sa.\u0275fac,providedIn:"root"});const Kc=t.Ps`
    query AssertionRevisableFields($assertionId: Int!) {
  assertion(id: $assertionId) {
    ...RevisableAssertionFields
  }
}
    ${xn}`;class Ms extends t.AE{constructor(G){super(G),this.document=Kc}}Ms.\u0275fac=function(G){return new(G||Ms)(o.LFG(t._M))},Ms.\u0275prov=o.Yz7({token:Ms,factory:Ms.\u0275fac,providedIn:"root"});const qc=t.Ps`
    mutation SuggestAssertionRevision($input: SuggestAssertionRevisionInput!) {
  suggestAssertionRevision(input: $input) {
    clientMutationId
    assertion {
      id
    }
    results {
      newlyCreated
    }
  }
}
    `;class ar extends t.mm{constructor(G){super(G),this.document=qc}}ar.\u0275fac=function(G){return new(G||ar)(o.LFG(t._M))},ar.\u0275prov=o.Yz7({token:ar,factory:ar.\u0275fac,providedIn:"root"});const Xc=t.Ps`
    mutation SubmitAssertion($input: SubmitAssertionInput!) {
  submitAssertion(input: $input) {
    clientMutationId
    assertion {
      id
    }
  }
}
    `;class bs extends t.mm{constructor(G){super(G),this.document=Xc}}bs.\u0275fac=function(G){return new(G||bs)(o.LFG(t._M))},bs.\u0275prov=o.Yz7({token:bs,factory:bs.\u0275fac,providedIn:"root"});const oc=t.Ps`
    mutation AddComment($input: AddCommentInput!) {
  addComment(input: $input) {
    clientMutationId
    comment {
      ...commentListNode
    }
  }
}
    ${so}`;class Ti extends t.mm{constructor(G){super(G),this.document=oc}}Ti.\u0275fac=function(G){return new(G||Ti)(o.LFG(t._M))},Ti.\u0275prov=o.Yz7({token:Ti,factory:Ti.\u0275fac,providedIn:"root"});const iu=t.Ps`
    query previewComment($commentText: String!) {
  previewCommentText(commentText: $commentText) {
    ...previewComment
  }
}
    ${jn}`;class Yi extends t.AE{constructor(G){super(G),this.document=iu}}Yi.\u0275fac=function(G){return new(G||Yi)(o.LFG(t._M))},Yi.\u0275prov=o.Yz7({token:Yi,factory:Yi.\u0275fac,providedIn:"root"});const Es=t.Ps`
    query userTypeahead($queryTerm: String!) {
  userTypeahead(queryTerm: $queryTerm) {
    username
  }
}
    `;class Mi extends t.AE{constructor(G){super(G),this.document=Es}}Mi.\u0275fac=function(G){return new(G||Mi)(o.LFG(t._M))},Mi.\u0275prov=o.Yz7({token:Mi,factory:Mi.\u0275fac,providedIn:"root"});const ls=t.Ps`
    query entityTypeahead($queryTerm: String!) {
  entityTypeahead(queryTerm: $queryTerm) {
    entityId
    tagType
    displayName
  }
}
    `;class jr extends t.AE{constructor(G){super(G),this.document=ls}}jr.\u0275fac=function(G){return new(G||jr)(o.LFG(t._M))},jr.\u0275prov=o.Yz7({token:jr,factory:jr.\u0275fac,providedIn:"root"});const ic=t.Ps`
    query previewMolecularProfileName($mpStructure: MolecularProfileComponentInput) {
  previewMolecularProfileName(structure: $mpStructure) {
    existingMolecularProfile {
      id
      name
      link
    }
    segments {
      ...previewMpName
    }
    deprecatedVariants {
      id
      name
      link
    }
  }
}
    ${Un}`;class Rs extends t.AE{constructor(G){super(G),this.document=ic}}Rs.\u0275fac=function(G){return new(G||Rs)(o.LFG(t._M))},Rs.\u0275prov=o.Yz7({token:Rs,factory:Rs.\u0275fac,providedIn:"root"});const xa=t.Ps`
    mutation createMolecularProfile($mpStructure: MolecularProfileComponentInput!) {
  createMolecularProfile(input: {structure: $mpStructure}) {
    molecularProfile {
      id
      name
      link
    }
  }
}
    `;class rc extends t.mm{constructor(G){super(G),this.document=xa}}rc.\u0275fac=function(G){return new(G||rc)(o.LFG(t._M))},rc.\u0275prov=o.Yz7({token:rc,factory:rc.\u0275fac,providedIn:"root"});const ru=t.Ps`
    query AcmgCodeTypeahead($code: String!) {
  acmgCodesTypeahead(queryTerm: $code) {
    id
    code
    description
    name
    tooltip
  }
}
    `;class sc extends t.AE{constructor(G){super(G),this.document=ru}}sc.\u0275fac=function(G){return new(G||sc)(o.LFG(t._M))},sc.\u0275prov=o.Yz7({token:sc,factory:sc.\u0275fac,providedIn:"root"});const ac=t.Ps`
    query ClingenCodeTypeahead($code: String!) {
  clingenCodesTypeahead(queryTerm: $code) {
    id
    code
    description
    name
    tooltip
    exclusive
  }
}
    `;class Di extends t.AE{constructor(G){super(G),this.document=ac}}Di.\u0275fac=function(G){return new(G||Di)(o.LFG(t._M))},Di.\u0275prov=o.Yz7({token:Di,factory:Di.\u0275fac,providedIn:"root"});const cc=t.Ps`
    query DiseaseTypeahead($name: String!) {
  diseaseTypeahead(queryTerm: $name) {
    id
    name
    displayName
    doid
    diseaseAliases
  }
}
    `;class us extends t.AE{constructor(G){super(G),this.document=cc}}us.\u0275fac=function(G){return new(G||us)(o.LFG(t._M))},us.\u0275prov=o.Yz7({token:us,factory:us.\u0275fac,providedIn:"root"});const Pl=t.Ps`
    mutation AddDisease($name: String!, $doid: String) {
  addDisease(input: {name: $name, doid: $doid}) {
    ...AddDiseaseFields
  }
}
    ${Yn}`;class $i extends t.mm{constructor(G){super(G),this.document=Pl}}$i.\u0275fac=function(G){return new(G||$i)(o.LFG(t._M))},$i.\u0275prov=o.Yz7({token:$i,factory:$i.\u0275fac,providedIn:"root"});const lc=t.Ps`
    query EvidenceTypeahead($id: Int!) {
  evidenceItem(id: $id) {
    id
    status
    name
  }
}
    `;class Xs extends t.AE{constructor(G){super(G),this.document=lc}}Xs.\u0275fac=function(G){return new(G||Xs)(o.LFG(t._M))},Xs.\u0275prov=o.Yz7({token:Xs,factory:Xs.\u0275fac,providedIn:"root"});const Vu=t.Ps`
    query GeneTypeahead($entrezSymbol: String!) {
  geneTypeahead(queryTerm: $entrezSymbol) {
    ...GeneTypeaheadFields
  }
}
    ${Bn}`;class uc extends t.AE{constructor(G){super(G),this.document=Vu}}uc.\u0275fac=function(G){return new(G||uc)(o.LFG(t._M))},uc.\u0275prov=o.Yz7({token:uc,factory:uc.\u0275fac,providedIn:"root"});const ea=t.Ps`
    query NccnGuidelineTypeahead($name: String!) {
  nccnGuidelinesTypeahead(queryTerm: $name) {
    id
    name
  }
}
    `;class Vs extends t.AE{constructor(G){super(G),this.document=ea}}Vs.\u0275fac=function(G){return new(G||Vs)(o.LFG(t._M))},Vs.\u0275prov=o.Yz7({token:Vs,factory:Vs.\u0275fac,providedIn:"root"});const zr=t.Ps`
    query PhenotypeTypeahead($name: String!) {
  phenotypeTypeahead(queryTerm: $name) {
    hpoId
    id
    name
  }
}
    `;class ds extends t.AE{constructor(G){super(G),this.document=zr}}ds.\u0275fac=function(G){return new(G||ds)(o.LFG(t._M))},ds.\u0275prov=o.Yz7({token:ds,factory:ds.\u0275fac,providedIn:"root"});const Da=t.Ps`
    query CitationExistenceCheck($sourceType: SourceSource!, $citationId: String!) {
  remoteCitation(sourceType: $sourceType, citationId: $citationId)
}
    `;class ta extends t.AE{constructor(G){super(G),this.document=Da}}ta.\u0275fac=function(G){return new(G||ta)(o.LFG(t._M))},ta.\u0275prov=o.Yz7({token:ta,factory:ta.\u0275fac,providedIn:"root"});const el=t.Ps`
    mutation CreateSourceStub($input: AddRemoteCitationInput!) {
  addRemoteCitation(input: $input) {
    newSource {
      id
      citationId
      sourceType
    }
  }
}
    `;class ps extends t.mm{constructor(G){super(G),this.document=el}}ps.\u0275fac=function(G){return new(G||ps)(o.LFG(t._M))},ps.\u0275prov=o.Yz7({token:ps,factory:ps.\u0275fac,providedIn:"root"});const _1=t.Ps`
    query CitationTypeahead($partialCitationId: String!, $sourceType: SourceSource!) {
  sourceTypeahead(citationId: $partialCitationId, sourceType: $sourceType) {
    ...SourceTypeaheadResult
  }
}
    ${co}`;class tl extends t.AE{constructor(G){super(G),this.document=_1}}tl.\u0275fac=function(G){return new(G||tl)(o.LFG(t._M))},tl.\u0275prov=o.Yz7({token:tl,factory:tl.\u0275fac,providedIn:"root"});const Yo=t.Ps`
    query CheckRemoteCitation($sourceType: SourceSource!, $citationId: String!) {
  remoteCitation(sourceType: $sourceType, citationId: $citationId)
}
    `;class Il extends t.AE{constructor(G){super(G),this.document=Yo}}Il.\u0275fac=function(G){return new(G||Il)(o.LFG(t._M))},Il.\u0275prov=o.Yz7({token:Il,factory:Il.\u0275fac,providedIn:"root"});const Oa=t.Ps`
    mutation AddRemoteCitation($input: AddRemoteCitationInput!) {
  addRemoteCitation(input: $input) {
    newSource {
      ...SourceStubFields
    }
  }
}
    ${Wo}`;class nl extends t.mm{constructor(G){super(G),this.document=Oa}}nl.\u0275fac=function(G){return new(G||nl)(o.LFG(t._M))},nl.\u0275prov=o.Yz7({token:nl,factory:nl.\u0275fac,providedIn:"root"});const dc=t.Ps`
    query SourceTypeahead($partialCitationId: String!, $sourceType: SourceSource!) {
  sourceTypeahead(citationId: $partialCitationId, sourceType: $sourceType) {
    ...SourceTypeaheadResult
  }
}
    ${co}`;class na extends t.AE{constructor(G){super(G),this.document=dc}}na.\u0275fac=function(G){return new(G||na)(o.LFG(t._M))},na.\u0275prov=o.Yz7({token:na,factory:na.\u0275fac,providedIn:"root"});const pc=t.Ps`
    query TherapyTypeahead($name: String!) {
  therapyTypeahead(queryTerm: $name) {
    id
    name
    ncitId
    therapyAliases
  }
}
    `;class Oi extends t.AE{constructor(G){super(G),this.document=pc}}Oi.\u0275fac=function(G){return new(G||Oi)(o.LFG(t._M))},Oi.\u0275prov=o.Yz7({token:Oi,factory:Oi.\u0275fac,providedIn:"root"});const oa=t.Ps`
    mutation AddTherapy($name: String!, $ncitId: String) {
  addTherapy(input: {name: $name, ncitId: $ncitId}) {
    ...AddTherapyFields
  }
}
    ${uo}`;class Tr extends t.mm{constructor(G){super(G),this.document=oa}}Tr.\u0275fac=function(G){return new(G||Tr)(o.LFG(t._M))},Tr.\u0275prov=o.Yz7({token:Tr,factory:Tr.\u0275fac,providedIn:"root"});const su=t.Ps`
    query VariantTypeahead($name: String!, $geneId: Int) {
  variants(name: $name, geneId: $geneId, first: 20) {
    nodes {
      ...VariantTypeaheadFields
    }
  }
}
    ${jo}`;class ui extends t.AE{constructor(G){super(G),this.document=su}}ui.\u0275fac=function(G){return new(G||ui)(o.LFG(t._M))},ui.\u0275prov=o.Yz7({token:ui,factory:ui.\u0275fac,providedIn:"root"});const ol=t.Ps`
    mutation AddVariant($name: String!, $geneId: Int!) {
  addVariant(input: {name: $name, geneId: $geneId}) {
    ...AddVariantFields
  }
}
    ${Io}`;class Gr extends t.mm{constructor(G){super(G),this.document=ol}}Gr.\u0275fac=function(G){return new(G||Gr)(o.LFG(t._M))},Gr.\u0275prov=o.Yz7({token:Gr,factory:Gr.\u0275fac,providedIn:"root"});const A=t.Ps`
    query VariantSelect($name: String!, $geneId: Int) {
  variants(name: $name, first: 20, geneId: $geneId) {
    nodes {
      ...VariantTypeaheadFields
    }
  }
}
    ${jo}`;class B extends t.AE{constructor(G){super(G),this.document=A}}B.\u0275fac=function(G){return new(G||B)(o.LFG(t._M))},B.\u0275prov=o.Yz7({token:B,factory:B.\u0275fac,providedIn:"root"});const S=t.Ps`
    query VariantTypeTypeahead($name: String!) {
  variantTypeTypeahead(queryTerm: $name) {
    name
    soid
    id
  }
}
    `;class ie extends t.AE{constructor(G){super(G),this.document=S}}ie.\u0275fac=function(G){return new(G||ie)(o.LFG(t._M))},ie.\u0275prov=o.Yz7({token:ie,factory:ie.\u0275fac,providedIn:"root"});const De=t.Ps`
    query EvidenceItemRevisableFields($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...RevisableEvidenceFields
  }
}
    ${ti}`;class et extends t.AE{constructor(G){super(G),this.document=De}}et.\u0275fac=function(G){return new(G||et)(o.LFG(t._M))},et.\u0275prov=o.Yz7({token:et,factory:et.\u0275fac,providedIn:"root"});const ct=t.Ps`
    mutation SuggestEvidenceItemRevision($input: SuggestEvidenceItemRevisionInput!) {
  suggestEvidenceItemRevision(input: $input) {
    clientMutationId
    evidenceItem {
      id
    }
    results {
      newlyCreated
    }
  }
}
    `;class Jt extends t.mm{constructor(G){super(G),this.document=ct}}Jt.\u0275fac=function(G){return new(G||Jt)(o.LFG(t._M))},Jt.\u0275prov=o.Yz7({token:Jt,factory:Jt.\u0275fac,providedIn:"root"});const yn=t.Ps`
    query EvidenceFieldsFromSourceSuggestion($sourceId: Int, $molecularProfileId: Int, $diseaseId: Int) {
  sourceSuggestionValues(
    molecularProfileId: $molecularProfileId
    diseaseId: $diseaseId
    sourceId: $sourceId
  ) {
    molecularProfile {
      id
      name
      link
    }
    disease {
      id
      name
      link
    }
    source {
      id
      sourceType
      citationId
      citation
      link
    }
  }
}
    `;class Jn extends t.AE{constructor(G){super(G),this.document=yn}}Jn.\u0275fac=function(G){return new(G||Jn)(o.LFG(t._M))},Jn.\u0275prov=o.Yz7({token:Jn,factory:Jn.\u0275fac,providedIn:"root"});const $n=t.Ps`
    query EvidenceSubmittableFields($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...SubmittableEvidenceFields
  }
}
    ${yo}`;class Fo extends t.AE{constructor(G){super(G),this.document=$n}}Fo.\u0275fac=function(G){return new(G||Fo)(o.LFG(t._M))},Fo.\u0275prov=o.Yz7({token:Fo,factory:Fo.\u0275fac,providedIn:"root"});const gi=t.Ps`
    mutation SubmitEvidenceItem($input: SubmitEvidenceItemInput!) {
  submitEvidence(input: $input) {
    clientMutationId
    evidenceItem {
      id
    }
  }
}
    `;class ki extends t.mm{constructor(G){super(G),this.document=gi}}ki.\u0275fac=function(G){return new(G||ki)(o.LFG(t._M))},ki.\u0275prov=o.Yz7({token:ki,factory:ki.\u0275fac,providedIn:"root"});const Mr=t.Ps`
    mutation FlagEntity($input: FlagEntityInput!) {
  flagEntity(input: $input) {
    flag {
      id
    }
  }
}
    `;class Ui extends t.mm{constructor(G){super(G),this.document=Mr}}Ui.\u0275fac=function(G){return new(G||Ui)(o.LFG(t._M))},Ui.\u0275prov=o.Yz7({token:Ui,factory:Ui.\u0275fac,providedIn:"root"});const Qr=t.Ps`
    mutation ResolveFlag($input: ResolveFlagInput!) {
  resolveFlag(input: $input) {
    flag {
      id
    }
  }
}
    `;class ia extends t.mm{constructor(G){super(G),this.document=Qr}}ia.\u0275fac=function(G){return new(G||ia)(o.LFG(t._M))},ia.\u0275prov=o.Yz7({token:ia,factory:ia.\u0275fac,providedIn:"root"});const Al=t.Ps`
    query GeneRevisableFields($geneId: Int!) {
  gene(id: $geneId) {
    ...RevisableGeneFields
  }
}
    ${Do}`;class ra extends t.AE{constructor(G){super(G),this.document=Al}}ra.\u0275fac=function(G){return new(G||ra)(o.LFG(t._M))},ra.\u0275prov=o.Yz7({token:ra,factory:ra.\u0275fac,providedIn:"root"});const fd=t.Ps`
    mutation SuggestGeneRevision($input: SuggestGeneRevisionInput!) {
  suggestGeneRevision(input: $input) {
    clientMutationId
    results {
      newlyCreated
      id
      fieldName
    }
  }
}
    `;class wa extends t.mm{constructor(G){super(G),this.document=fd}}wa.\u0275fac=function(G){return new(G||wa)(o.LFG(t._M))},wa.\u0275prov=o.Yz7({token:wa,factory:wa.\u0275fac,providedIn:"root"});const au=t.Ps`
    query GeneAdvancedSearch($query: GeneSearchFilter!) {
  searchGenes(query: $query, createPermalink: true) {
    ...AdvancedSearchPermalink
  }
}
    ${bn}`;class Wr extends t.AE{constructor(G){super(G),this.document=au}}Wr.\u0275fac=function(G){return new(G||Wr)(o.LFG(t._M))},Wr.\u0275prov=o.Yz7({token:Wr,factory:Wr.\u0275fac,providedIn:"root"});const il=t.Ps`
    query MolecularProfileRevisableFields($molecularProfileId: Int!) {
  molecularProfile(id: $molecularProfileId) {
    ...RevisableMolecularProfileFields
  }
}
    ${_o}`;class br extends t.AE{constructor(G){super(G),this.document=il}}br.\u0275fac=function(G){return new(G||br)(o.LFG(t._M))},br.\u0275prov=o.Yz7({token:br,factory:br.\u0275fac,providedIn:"root"});const hc=t.Ps`
    mutation SuggestMolecularProfileRevision($input: SuggestMolecularProfileRevisionInput!) {
  suggestMolecularProfileRevision(input: $input) {
    clientMutationId
    molecularProfile {
      id
    }
    results {
      newlyCreated
      id
      fieldName
    }
  }
}
    `;class fc extends t.mm{constructor(G){super(G),this.document=hc}}fc.\u0275fac=function(G){return new(G||fc)(o.LFG(t._M))},fc.\u0275prov=o.Yz7({token:fc,factory:fc.\u0275fac,providedIn:"root"});const rl=t.Ps`
    mutation SuggestSource($input: SuggestSourceInput!) {
  suggestSource(input: $input) {
    clientMutationId
    sourceSuggestion {
      id
    }
  }
}
    `;class Ss extends t.mm{constructor(G){super(G),this.document=rl}}Ss.\u0275fac=function(G){return new(G||Ss)(o.LFG(t._M))},Ss.\u0275prov=o.Yz7({token:Ss,factory:Ss.\u0275fac,providedIn:"root"});const Fl=t.Ps`
    mutation UpdateSourceSuggestion($input: UpdateSourceSuggestionStatusInput!) {
  updateSourceSuggestionStatus(input: $input) {
    sourceSuggestion {
      id
      status
    }
  }
}
    `;class hs extends t.mm{constructor(G){super(G),this.document=Fl}}hs.\u0275fac=function(G){return new(G||hs)(o.LFG(t._M))},hs.\u0275prov=o.Yz7({token:hs,factory:hs.\u0275fac,providedIn:"root"});const y1=t.Ps`
    mutation UpdateCoi($input: UpdateCoiInput!) {
  updateCoi(input: $input) {
    coiStatement {
      coiPresent
      coiStatus
      createdAt
      id
    }
  }
}
    `;class sl extends t.mm{constructor(G){super(G),this.document=y1}}sl.\u0275fac=function(G){return new(G||sl)(o.LFG(t._M))},sl.\u0275prov=o.Yz7({token:sl,factory:sl.\u0275fac,providedIn:"root"});const al=t.Ps`
    mutation UpdateUserProfile($input: EditUserInput!) {
  editUser(input: $input) {
    user {
      id
    }
  }
}
    `;class xs extends t.mm{constructor(G){super(G),this.document=al}}xs.\u0275fac=function(G){return new(G||xs)(o.LFG(t._M))},xs.\u0275prov=o.Yz7({token:xs,factory:xs.\u0275fac,providedIn:"root"});const Bu=t.Ps`
    query Countries {
  countries {
    id
    name
  }
}
    `;class mc extends t.AE{constructor(G){super(G),this.document=Bu}}mc.\u0275fac=function(G){return new(G||mc)(o.LFG(t._M))},mc.\u0275prov=o.Yz7({token:mc,factory:mc.\u0275fac,providedIn:"root"});const C1=t.Ps`
    mutation DeprecateVariant($variantId: Int!, $deprecationReason: DeprecationReason!, $comment: String!, $organizationId: Int) {
  deprecateVariant(
    input: {variantId: $variantId, deprecationReason: $deprecationReason, comment: $comment, organizationId: $organizationId}
  ) {
    newlyDeprecatedMolecularProfiles {
      id
    }
    variant {
      id
      name
    }
  }
}
    `;class Nl extends t.mm{constructor(G){super(G),this.document=C1}}Nl.\u0275fac=function(G){return new(G||Nl)(o.LFG(t._M))},Nl.\u0275prov=o.Yz7({token:Nl,factory:Nl.\u0275fac,providedIn:"root"});const Rp=t.Ps`
    query MolecularProfilesForVariant($variantId: Int!) {
  molecularProfiles(variantId: $variantId, first: 50) {
    nodes {
      id
      name
      link
      evidenceCountsByStatus {
        submittedCount
        acceptedCount
      }
    }
  }
}
    `;class cl extends t.AE{constructor(G){super(G),this.document=Rp}}cl.\u0275fac=function(G){return new(G||cl)(o.LFG(t._M))},cl.\u0275prov=o.Yz7({token:cl,factory:cl.\u0275fac,providedIn:"root"});const Ll=t.Ps`
    mutation SuggestVariantGroupRevision($input: SuggestVariantGroupRevisionInput!) {
  suggestVariantGroupRevision(input: $input) {
    clientMutationId
    variantGroup {
      id
    }
    results {
      newlyCreated
      id
      fieldName
    }
  }
}
    `;class kl extends t.mm{constructor(G){super(G),this.document=Ll}}kl.\u0275fac=function(G){return new(G||kl)(o.LFG(t._M))},kl.\u0275prov=o.Yz7({token:kl,factory:kl.\u0275fac,providedIn:"root"});const sa=t.Ps`
    query VariantGroupSubmittableFields($variantGroupId: Int!) {
  variantGroup(id: $variantGroupId) {
    ...SubmittableVariantGroupFields
  }
}
    ${vi}`;class ll extends t.AE{constructor(G){super(G),this.document=sa}}ll.\u0275fac=function(G){return new(G||ll)(o.LFG(t._M))},ll.\u0275prov=o.Yz7({token:ll,factory:ll.\u0275fac,providedIn:"root"});const Pa=t.Ps`
    mutation SubmitVariantGroup($input: SubmitVariantGroupInput!) {
  submitVariantGroup(input: $input) {
    clientMutationId
    variantGroup {
      id
    }
  }
}
    `;class Ia extends t.mm{constructor(G){super(G),this.document=Pa}}Ia.\u0275fac=function(G){return new(G||Ia)(o.LFG(t._M))},Ia.\u0275prov=o.Yz7({token:Ia,factory:Ia.\u0275fac,providedIn:"root"});const ul=t.Ps`
    query LinkableGene($geneId: Int!) {
  gene(id: $geneId) {
    id
    name
    link
  }
}
    `;class Aa extends t.AE{constructor(G){super(G),this.document=ul}}Aa.\u0275fac=function(G){return new(G||Aa)(o.LFG(t._M))},Aa.\u0275prov=o.Yz7({token:Aa,factory:Aa.\u0275fac,providedIn:"root"});const md=t.Ps`
    query LinkableVariant($variantId: Int!) {
  variant(id: $variantId) {
    id
    name
    link
  }
}
    `;class dl extends t.AE{constructor(G){super(G),this.document=md}}dl.\u0275fac=function(G){return new(G||dl)(o.LFG(t._M))},dl.\u0275prov=o.Yz7({token:dl,factory:dl.\u0275fac,providedIn:"root"});const z1=t.Ps`
    query LinkableTherapy($therapyId: Int!) {
  therapy(id: $therapyId) {
    id
    name
    link
  }
}
    `;class Fa extends t.AE{constructor(G){super(G),this.document=z1}}Fa.\u0275fac=function(G){return new(G||Fa)(o.LFG(t._M))},Fa.\u0275prov=o.Yz7({token:Fa,factory:Fa.\u0275fac,providedIn:"root"});const gd=t.Ps`
    query EvidenceItemRevisableFields2($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...RevisableEvidenceFields2
  }
}
    ${Vi}`;class Bs extends t.AE{constructor(G){super(G),this.document=gd}}Bs.\u0275fac=function(G){return new(G||Bs)(o.LFG(t._M))},Bs.\u0275prov=o.Yz7({token:Bs,factory:Bs.\u0275fac,providedIn:"root"});const cu=t.Ps`
    mutation SuggestEvidenceItemRevision2($input: SuggestEvidenceItemRevisionInput!) {
  suggestEvidenceItemRevision(input: $input) {
    clientMutationId
    evidenceItem {
      id
    }
    results {
      newlyCreated
    }
  }
}
    `;class Ds extends t.mm{constructor(G){super(G),this.document=cu}}Ds.\u0275fac=function(G){return new(G||Ds)(o.LFG(t._M))},Ds.\u0275prov=o.Yz7({token:Ds,factory:Ds.\u0275fac,providedIn:"root"});const vd=t.Ps`
    mutation SubmitSource($input: SuggestSourceInput!) {
  suggestSource(input: $input) {
    clientMutationId
    sourceSuggestion {
      id
    }
  }
}
    `;class pl extends t.mm{constructor(G){super(G),this.document=vd}}pl.\u0275fac=function(G){return new(G||pl)(o.LFG(t._M))},pl.\u0275prov=o.Yz7({token:pl,factory:pl.\u0275fac,providedIn:"root"});const Rl=t.Ps`
    query VariantRevisableFields($variantId: Int!) {
  variant(id: $variantId) {
    ...RevisableVariantFields
  }
}
    ${Ji}`;class hl extends t.AE{constructor(G){super(G),this.document=Rl}}hl.\u0275fac=function(G){return new(G||hl)(o.LFG(t._M))},hl.\u0275prov=o.Yz7({token:hl,factory:hl.\u0275fac,providedIn:"root"});const gc=t.Ps`
    mutation SuggestVariantRevision($input: SuggestVariantRevisionInput!) {
  suggestVariantRevision(input: $input) {
    clientMutationId
    variant {
      id
    }
    results {
      id
      fieldName
      newlyCreated
    }
  }
}
    `;class vc extends t.mm{constructor(G){super(G),this.document=gc}}vc.\u0275fac=function(G){return new(G||vc)(o.LFG(t._M))},vc.\u0275prov=o.Yz7({token:vc,factory:vc.\u0275fac,providedIn:"root"});const lu=t.Ps`
    query VariantGroupRevisableFields2($variantGroupId: Int!) {
  variantGroup(id: $variantGroupId) {
    ...VariantGroupRevisableFields2
  }
}
    ${or}`;class Na extends t.AE{constructor(G){super(G),this.document=lu}}Na.\u0275fac=function(G){return new(G||Na)(o.LFG(t._M))},Na.\u0275prov=o.Yz7({token:Na,factory:Na.\u0275fac,providedIn:"root"});const T1=t.Ps`
    mutation SuggestVariantGroupRevision2($input: SuggestVariantGroupRevisionInput!) {
  suggestVariantGroupRevision(input: $input) {
    clientMutationId
    variantGroup {
      id
    }
    results {
      newlyCreated
      id
      fieldName
    }
  }
}
    `;class La extends t.mm{constructor(G){super(G),this.document=T1}}La.\u0275fac=function(G){return new(G||La)(o.LFG(t._M))},La.\u0275prov=o.Yz7({token:La,factory:La.\u0275fac,providedIn:"root"});const Zr=t.Ps`
    query EntityTagsTest($molecularProfileId: Int!, $geneId: Int!, $variantId: Int!, $therapyId: Int!, $diseaseId: Int!, $eid: Int!) {
  evidenceItem(id: $eid) {
    id
    name
    link
  }
  molecularProfile(id: $molecularProfileId) {
    id
    name
    link
  }
  gene(id: $geneId) {
    id
    name
    link
  }
  variant(id: $variantId) {
    id
    name
    link
  }
  therapy(id: $therapyId) {
    id
    name
    link
  }
  disease(id: $diseaseId) {
    id
    name
    link
  }
}
    `;class _c extends t.AE{constructor(G){super(G),this.document=Zr}}_c.\u0275fac=function(G){return new(G||_c)(o.LFG(t._M))},_c.\u0275prov=o.Yz7({token:_c,factory:_c.\u0275fac,providedIn:"root"});const M1=t.Ps`
    query AcmgCodeSelectTypeahead($code: String!) {
  acmgCodesTypeahead(queryTerm: $code) {
    ...AcmgCodeSelectTypeaheadFields
  }
}
    ${Pi}`;class yc extends t.AE{constructor(G){super(G),this.document=M1}}yc.\u0275fac=function(G){return new(G||yc)(o.LFG(t._M))},yc.\u0275prov=o.Yz7({token:yc,factory:yc.\u0275fac,providedIn:"root"});const Hu=t.Ps`
    query AcmgCodeSelectTag($id: Int!) {
  acmgCode(id: $id) {
    ...AcmgCodeSelectTypeaheadFields
  }
}
    ${Pi}`;class Hs extends t.AE{constructor(G){super(G),this.document=Hu}}Hs.\u0275fac=function(G){return new(G||Hs)(o.LFG(t._M))},Hs.\u0275prov=o.Yz7({token:Hs,factory:Hs.\u0275fac,providedIn:"root"});const b1=t.Ps`
    query ClingenCodeSelectTypeahead($code: String!) {
  clingenCodesTypeahead(queryTerm: $code) {
    ...ClingenCodeSelectTypeaheadFields
  }
}
    ${wr}`;class Cc extends t.AE{constructor(G){super(G),this.document=b1}}Cc.\u0275fac=function(G){return new(G||Cc)(o.LFG(t._M))},Cc.\u0275prov=o.Yz7({token:Cc,factory:Cc.\u0275fac,providedIn:"root"});const E1=t.Ps`
    query ClingenCodeSelectTag($id: Int!) {
  clingenCode(id: $id) {
    ...ClingenCodeSelectTypeaheadFields
  }
}
    ${wr}`;class ka extends t.AE{constructor(G){super(G),this.document=E1}}ka.\u0275fac=function(G){return new(G||ka)(o.LFG(t._M))},ka.\u0275prov=o.Yz7({token:ka,factory:ka.\u0275fac,providedIn:"root"});const S1=t.Ps`
    mutation QuickAddDisease($name: String!, $doid: String) {
  addDisease(input: {name: $name, doid: $doid}) {
    ...QuickAddDiseaseFields
  }
}
    ${qe}`;class zc extends t.mm{constructor(G){super(G),this.document=S1}}zc.\u0275fac=function(G){return new(G||zc)(o.LFG(t._M))},zc.\u0275prov=o.Yz7({token:zc,factory:zc.\u0275fac,providedIn:"root"});const cr=t.Ps`
    query DiseaseSelectTypeahead($name: String!) {
  diseaseTypeahead(queryTerm: $name) {
    ...DiseaseSelectTypeaheadFields
  }
}
    ${Xo}`;class aa extends t.AE{constructor(G){super(G),this.document=cr}}aa.\u0275fac=function(G){return new(G||aa)(o.LFG(t._M))},aa.\u0275prov=o.Yz7({token:aa,factory:aa.\u0275fac,providedIn:"root"});const x1=t.Ps`
    query DiseaseSelectTag($id: Int!) {
  disease(id: $id) {
    ...DiseaseSelectTypeaheadFields
  }
}
    ${Xo}`;class ca extends t.AE{constructor(G){super(G),this.document=x1}}ca.\u0275fac=function(G){return new(G||ca)(o.LFG(t._M))},ca.\u0275prov=o.Yz7({token:ca,factory:ca.\u0275fac,providedIn:"root"});const bi=t.Ps`
    query EvidenceManager($first: Int, $last: Int, $before: String, $after: String, $diseaseName: String, $therapyName: String, $id: Int, $description: String, $evidenceLevel: EvidenceLevel, $evidenceDirection: EvidenceDirection, $significance: EvidenceSignificance, $evidenceType: EvidenceType, $rating: Int, $variantOrigin: VariantOrigin, $variantId: Int, $molecularProfileId: Int, $assertionId: Int, $organizationId: Int, $userId: Int, $sortBy: EvidenceSort, $phenotypeId: Int, $diseaseId: Int, $therapyId: Int, $sourceId: Int, $clinicalTrialId: Int, $molecularProfileName: String, $status: EvidenceStatusFilter) {
  evidenceItems(
    first: $first
    last: $last
    before: $before
    after: $after
    diseaseName: $diseaseName
    therapyName: $therapyName
    id: $id
    description: $description
    evidenceLevel: $evidenceLevel
    evidenceDirection: $evidenceDirection
    significance: $significance
    evidenceType: $evidenceType
    evidenceRating: $rating
    variantOrigin: $variantOrigin
    variantId: $variantId
    molecularProfileId: $molecularProfileId
    assertionId: $assertionId
    organizationId: $organizationId
    userId: $userId
    phenotypeId: $phenotypeId
    diseaseId: $diseaseId
    therapyId: $therapyId
    sourceId: $sourceId
    clinicalTrialId: $clinicalTrialId
    molecularProfileName: $molecularProfileName
    status: $status
    sortBy: $sortBy
  ) {
    totalCount
    pageCount
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
    edges {
      cursor
      node {
        ...EvidenceManagerFields
      }
    }
    nodes {
      ...EvidenceManagerFields
    }
  }
}
    ${se}`;class Os extends t.AE{constructor(G){super(G),this.document=bi}}Os.\u0275fac=function(G){return new(G||Os)(o.LFG(t._M))},Os.\u0275prov=o.Yz7({token:Os,factory:Os.\u0275fac,providedIn:"root"});const Ra=t.Ps`
    query EvidenceSelectTypeahead($eid: Int!) {
  evidenceItems(id: $eid) {
    nodes {
      ...EvidenceSelectTypeaheadFields
    }
  }
}
    ${Fe}`;class la extends t.AE{constructor(G){super(G),this.document=Ra}}la.\u0275fac=function(G){return new(G||la)(o.LFG(t._M))},la.\u0275prov=o.Yz7({token:la,factory:la.\u0275fac,providedIn:"root"});const D1=t.Ps`
    query EvidenceSelectTag($eid: Int!) {
  evidenceItem(id: $eid) {
    ...EvidenceSelectTypeaheadFields
  }
}
    ${Fe}`;class Va extends t.AE{constructor(G){super(G),this.document=D1}}Va.\u0275fac=function(G){return new(G||Va)(o.LFG(t._M))},Va.\u0275prov=o.Yz7({token:Va,factory:Va.\u0275fac,providedIn:"root"});const Yu=t.Ps`
    query GeneSelectTypeahead($entrezSymbol: String!) {
  geneTypeahead(queryTerm: $entrezSymbol) {
    ...GeneSelectTypeaheadFields
  }
}
    ${Ue}`;class Ba extends t.AE{constructor(G){super(G),this.document=Yu}}Ba.\u0275fac=function(G){return new(G||Ba)(o.LFG(t._M))},Ba.\u0275prov=o.Yz7({token:Ba,factory:Ba.\u0275fac,providedIn:"root"});const _d=t.Ps`
    query GeneSelectTag($geneId: Int!) {
  gene(id: $geneId) {
    ...GeneSelectTypeaheadFields
  }
}
    ${Ue}`;class Ha extends t.AE{constructor(G){super(G),this.document=_d}}Ha.\u0275fac=function(G){return new(G||Ha)(o.LFG(t._M))},Ha.\u0275prov=o.Yz7({token:Ha,factory:Ha.\u0275fac,providedIn:"root"});const O1=t.Ps`
    query MolecularProfileSelectTypeahead($name: String!, $geneId: Int) {
  molecularProfiles(name: $name, geneId: $geneId, first: 25) {
    nodes {
      ...MolecularProfileSelectTypeaheadFields
    }
  }
}
    ${ko}`;class Tc extends t.AE{constructor(G){super(G),this.document=O1}}Tc.\u0275fac=function(G){return new(G||Tc)(o.LFG(t._M))},Tc.\u0275prov=o.Yz7({token:Tc,factory:Tc.\u0275fac,providedIn:"root"});const Ys=t.Ps`
    query MolecularProfileSelectTag($molecularProfileId: Int!) {
  molecularProfile(id: $molecularProfileId) {
    ...MolecularProfileSelectTypeaheadFields
  }
}
    ${ko}`;class ua extends t.AE{constructor(G){super(G),this.document=Ys}}ua.\u0275fac=function(G){return new(G||ua)(o.LFG(t._M))},ua.\u0275prov=o.Yz7({token:ua,factory:ua.\u0275fac,providedIn:"root"});const w1=t.Ps`
    query PreviewMolecularProfileName2($mpStructure: MolecularProfileComponentInput) {
  previewMolecularProfileName(structure: $mpStructure) {
    existingMolecularProfile {
      id
      name
      link
    }
    segments {
      ...PreviewMpName2
    }
    deprecatedVariants {
      id
      name
      link
    }
  }
}
    ${Tt}`;class lr extends t.AE{constructor(G){super(G),this.document=w1}}lr.\u0275fac=function(G){return new(G||lr)(o.LFG(t._M))},lr.\u0275prov=o.Yz7({token:lr,factory:lr.\u0275fac,providedIn:"root"});const ws=t.Ps`
    query MpExpressionEditorPrepopulate($mpId: Int!) {
  molecularProfile(id: $mpId) {
    id
    parsedName {
      ...MolecularProfileParsedName
    }
    rawName
  }
}
    ${oe}`;class Mc extends t.AE{constructor(G){super(G),this.document=ws}}Mc.\u0275fac=function(G){return new(G||Mc)(o.LFG(t._M))},Mc.\u0275prov=o.Yz7({token:Mc,factory:Mc.\u0275fac,providedIn:"root"});const da=t.Ps`
    mutation CreateMolecularProfile2($mpStructure: MolecularProfileComponentInput!) {
  createMolecularProfile(input: {structure: $mpStructure}) {
    molecularProfile {
      id
      name
      link
    }
  }
}
    `;class pa extends t.mm{constructor(G){super(G),this.document=da}}pa.\u0275fac=function(G){return new(G||pa)(o.LFG(t._M))},pa.\u0275prov=o.Yz7({token:pa,factory:pa.\u0275fac,providedIn:"root"});const Ya=t.Ps`
    query NccnGuidelineSelectTypeahead($name: String!) {
  nccnGuidelinesTypeahead(queryTerm: $name) {
    ...NccnGuidelineSelectTypeaheadFields
  }
}
    ${Nt}`;class fs extends t.AE{constructor(G){super(G),this.document=Ya}}fs.\u0275fac=function(G){return new(G||fs)(o.LFG(t._M))},fs.\u0275prov=o.Yz7({token:fs,factory:fs.\u0275fac,providedIn:"root"});const ha=t.Ps`
    query NccnGuidelineSelectTag($id: Int!) {
  nccnGuideline(id: $id) {
    ...NccnGuidelineSelectTypeaheadFields
  }
}
    ${Nt}`;class Jr extends t.AE{constructor(G){super(G),this.document=ha}}Jr.\u0275fac=function(G){return new(G||Jr)(o.LFG(t._M))},Jr.\u0275prov=o.Yz7({token:Jr,factory:Jr.\u0275fac,providedIn:"root"});const P1=t.Ps`
    query PhenotypeSelectTypeahead($name: String!) {
  phenotypeTypeahead(queryTerm: $name) {
    ...PhenotypeSelectTypeaheadFields
  }
}
    ${Qn}`;class fa extends t.AE{constructor(G){super(G),this.document=P1}}fa.\u0275fac=function(G){return new(G||fa)(o.LFG(t._M))},fa.\u0275prov=o.Yz7({token:fa,factory:fa.\u0275fac,providedIn:"root"});const I1=t.Ps`
    query PhenotypeSelectTag($id: Int!) {
  phenotype(id: $id) {
    ...PhenotypeSelectTypeaheadFields
  }
}
    ${Qn}`;class bc extends t.AE{constructor(G){super(G),this.document=I1}}bc.\u0275fac=function(G){return new(G||bc)(o.LFG(t._M))},bc.\u0275prov=o.Yz7({token:bc,factory:bc.\u0275fac,providedIn:"root"});const $u=t.Ps`
    query QuickAddSourceCheckCitation($sourceType: SourceSource!, $citationId: String!) {
  remoteCitation(sourceType: $sourceType, citationId: $citationId)
}
    `;class Ec extends t.AE{constructor(G){super(G),this.document=$u}}Ec.\u0275fac=function(G){return new(G||Ec)(o.LFG(t._M))},Ec.\u0275prov=o.Yz7({token:Ec,factory:Ec.\u0275fac,providedIn:"root"});const A1=t.Ps`
    mutation QuickAddSourceRemoteCitation($input: AddRemoteCitationInput!) {
  addRemoteCitation(input: $input) {
    newSource {
      id
      citationId
      sourceType
    }
  }
}
    `;class Sc extends t.mm{constructor(G){super(G),this.document=A1}}Sc.\u0275fac=function(G){return new(G||Sc)(o.LFG(t._M))},Sc.\u0275prov=o.Yz7({token:Sc,factory:Sc.\u0275fac,providedIn:"root"});const Uu=t.Ps`
    query SourceSelectTypeahead($partialCitationId: String!, $sourceType: SourceSource!) {
  sourceTypeahead(citationId: $partialCitationId, sourceType: $sourceType) {
    ...SourceSelectTypeaheadFields
  }
}
    ${io}`;class ma extends t.AE{constructor(G){super(G),this.document=Uu}}ma.\u0275fac=function(G){return new(G||ma)(o.LFG(t._M))},ma.\u0275prov=o.Yz7({token:ma,factory:ma.\u0275fac,providedIn:"root"});const ju=t.Ps`
    query SourceSelectTag($id: Int!) {
  source(id: $id) {
    ...SourceSelectTypeaheadFields
  }
}
    ${io}`;class ga extends t.AE{constructor(G){super(G),this.document=ju}}ga.\u0275fac=function(G){return new(G||ga)(o.LFG(t._M))},ga.\u0275prov=o.Yz7({token:ga,factory:ga.\u0275fac,providedIn:"root"});const F1=t.Ps`
    mutation QuickAddTherapy($name: String!, $ncitId: String) {
  addTherapy(input: {name: $name, ncitId: $ncitId}) {
    ...QuickAddTherapyFields
  }
}
    ${Gt}`;class xc extends t.mm{constructor(G){super(G),this.document=F1}}xc.\u0275fac=function(G){return new(G||xc)(o.LFG(t._M))},xc.\u0275prov=o.Yz7({token:xc,factory:xc.\u0275fac,providedIn:"root"});const $a=t.Ps`
    query TherapySelectTypeahead($name: String!) {
  therapyTypeahead(queryTerm: $name) {
    ...TherapySelectTypeaheadFields
  }
}
    ${Nn}`;class Ua extends t.AE{constructor(G){super(G),this.document=$a}}Ua.\u0275fac=function(G){return new(G||Ua)(o.LFG(t._M))},Ua.\u0275prov=o.Yz7({token:Ua,factory:Ua.\u0275fac,providedIn:"root"});const Kr=t.Ps`
    query TherapySelectTag($id: Int!) {
  therapy(id: $id) {
    ...TherapySelectTypeaheadFields
  }
}
    ${Nn}`;class ja extends t.AE{constructor(G){super(G),this.document=Kr}}ja.\u0275fac=function(G){return new(G||ja)(o.LFG(t._M))},ja.\u0275prov=o.Yz7({token:ja,factory:ja.\u0275fac,providedIn:"root"});const Gu=t.Ps`
    query VariantManager($variantName: String, $entrezSymbol: String, $diseaseName: String, $therapyName: String, $variantAlias: String, $variantTypeId: Int, $variantGroupId: Int, $sortBy: VariantsSort, $first: Int, $last: Int, $before: String, $after: String) {
  browseVariants(
    variantName: $variantName
    entrezSymbol: $entrezSymbol
    diseaseName: $diseaseName
    therapyName: $therapyName
    variantAlias: $variantAlias
    variantTypeId: $variantTypeId
    variantGroupId: $variantGroupId
    sortBy: $sortBy
    first: $first
    last: $last
    before: $before
    after: $after
  ) {
    pageInfo {
      endCursor
      hasNextPage
      startCursor
      hasPreviousPage
    }
    edges {
      cursor
      node {
        ...BrowseVariantsFields
      }
    }
    totalCount
    filteredCount
    pageCount
  }
}
    ${nn}`;class Dc extends t.AE{constructor(G){super(G),this.document=Gu}}Dc.\u0275fac=function(G){return new(G||Dc)(o.LFG(t._M))},Dc.\u0275prov=o.Yz7({token:Dc,factory:Dc.\u0275fac,providedIn:"root"});const yd=t.Ps`
    mutation QuickAddVariant($name: String!, $geneId: Int!) {
  addVariant(input: {name: $name, geneId: $geneId}) {
    ...AddVariantFields
  }
}
    ${Io}`;class $s extends t.mm{constructor(G){super(G),this.document=yd}}$s.\u0275fac=function(G){return new(G||$s)(o.LFG(t._M))},$s.\u0275prov=o.Yz7({token:$s,factory:$s.\u0275fac,providedIn:"root"});const N1=t.Ps`
    query VariantSelectTypeahead($name: String!, $geneId: Int) {
  variants(name: $name, geneId: $geneId, first: 50) {
    totalCount
    edges {
      node {
        ...VariantSelectTypeaheadFields
      }
    }
    nodes {
      ...VariantSelectTypeaheadFields
    }
  }
}
    ${ln}`;class ms extends t.AE{constructor(G){super(G),this.document=N1}}ms.\u0275fac=function(G){return new(G||ms)(o.LFG(t._M))},ms.\u0275prov=o.Yz7({token:ms,factory:ms.\u0275fac,providedIn:"root"});const Qu=t.Ps`
    query VariantSelectTag($variantId: Int!) {
  variant(id: $variantId) {
    ...VariantSelectTypeaheadFields
  }
}
    ${ln}`;class Nr extends t.AE{constructor(G){super(G),this.document=Qu}}Nr.\u0275fac=function(G){return new(G||Nr)(o.LFG(t._M))},Nr.\u0275prov=o.Yz7({token:Nr,factory:Nr.\u0275fac,providedIn:"root"});const uu=t.Ps`
    query VariantTypeSelectTypeahead($name: String!) {
  variantTypeTypeahead(queryTerm: $name) {
    ...VariantTypeSelectTypeaheadFields
  }
}
    ${wn}`;class va extends t.AE{constructor(G){super(G),this.document=uu}}va.\u0275fac=function(G){return new(G||va)(o.LFG(t._M))},va.\u0275prov=o.Yz7({token:va,factory:va.\u0275fac,providedIn:"root"});const Vl=t.Ps`
    query VariantTypeSelectTag($id: Int!) {
  variantType(id: $id) {
    ...VariantTypeSelectTypeaheadFields
  }
}
    ${wn}`;class Ga extends t.AE{constructor(G){super(G),this.document=Vl}}Ga.\u0275fac=function(G){return new(G||Ga)(o.LFG(t._M))},Ga.\u0275prov=o.Yz7({token:Ga,factory:Ga.\u0275fac,providedIn:"root"});const L1=t.Ps`
    query AssertionDetail($assertionId: Int!) {
  assertion(id: $assertionId) {
    ...AssertionDetailFields
  }
}
    ${Tn}`;class Qa extends t.AE{constructor(G){super(G),this.document=L1}}Qa.\u0275fac=function(G){return new(G||Qa)(o.LFG(t._M))},Qa.\u0275prov=o.Yz7({token:Qa,factory:Qa.\u0275fac,providedIn:"root"});const Wu=t.Ps`
    query AssertionSummary($assertionId: Int!) {
  assertion(id: $assertionId) {
    ...AssertionSummaryFields
  }
}
    ${En}`;class Wa extends t.AE{constructor(G){super(G),this.document=Wu}}Wa.\u0275fac=function(G){return new(G||Wa)(o.LFG(t._M))},Wa.\u0275prov=o.Yz7({token:Wa,factory:Wa.\u0275fac,providedIn:"root"});const fl=t.Ps`
    query ClinicalTrialDetail($clinicalTrialId: Int!) {
  clinicalTrial(id: $clinicalTrialId) {
    id
    name
    nctId
    description
    url
    link
  }
}
    `;class Za extends t.AE{constructor(G){super(G),this.document=fl}}Za.\u0275fac=function(G){return new(G||Za)(o.LFG(t._M))},Za.\u0275prov=o.Yz7({token:Za,factory:Za.\u0275fac,providedIn:"root"});const ml=t.Ps`
    query ClinicalTrialSummary($clinicalTrialId: Int!) {
  clinicalTrial(id: $clinicalTrialId) {
    id
    name
    nctId
    description
    url
    link
  }
}
    `;class Oc extends t.AE{constructor(G){super(G),this.document=ml}}Oc.\u0275fac=function(G){return new(G||Oc)(o.LFG(t._M))},Oc.\u0275prov=o.Yz7({token:Oc,factory:Oc.\u0275fac,providedIn:"root"});const Cd=t.Ps`
    query DiseaseDetail($diseaseId: Int!) {
  disease(id: $diseaseId) {
    id
    name
    doid
    diseaseUrl
    displayName
    diseaseAliases
    link
  }
}
    `;class wc extends t.AE{constructor(G){super(G),this.document=Cd}}wc.\u0275fac=function(G){return new(G||wc)(o.LFG(t._M))},wc.\u0275prov=o.Yz7({token:wc,factory:wc.\u0275fac,providedIn:"root"});const Zu=t.Ps`
    query DiseasesSummary($diseaseId: Int!) {
  disease(id: $diseaseId) {
    ...DiseasesSummaryFields
  }
}
    ${eo}`;class _a extends t.AE{constructor(G){super(G),this.document=Zu}}_a.\u0275fac=function(G){return new(G||_a)(o.LFG(t._M))},_a.\u0275prov=o.Yz7({token:_a,factory:_a.\u0275fac,providedIn:"root"});const Bl=t.Ps`
    query EvidenceDetail($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...EvidenceDetailFields
  }
}
    ${Dn}`;class Lr extends t.AE{constructor(G){super(G),this.document=Bl}}Lr.\u0275fac=function(G){return new(G||Lr)(o.LFG(t._M))},Lr.\u0275prov=o.Yz7({token:Lr,factory:Lr.\u0275fac,providedIn:"root"});const Us=t.Ps`
    query EvidenceSummary($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...EvidenceSummaryFields
  }
}
    ${Rn}`;class Pc extends t.AE{constructor(G){super(G),this.document=Us}}Pc.\u0275fac=function(G){return new(G||Pc)(o.LFG(t._M))},Pc.\u0275prov=o.Yz7({token:Pc,factory:Pc.\u0275fac,providedIn:"root"});const k1=t.Ps`
    query GeneDetail($geneId: Int!) {
  gene(id: $geneId) {
    ...GeneDetailFields
  }
}
    ${Wn}`;class gl extends t.AE{constructor(G){super(G),this.document=k1}}gl.\u0275fac=function(G){return new(G||gl)(o.LFG(t._M))},gl.\u0275prov=o.Yz7({token:gl,factory:gl.\u0275fac,providedIn:"root"});const R1=t.Ps`
    query GenesSummary($geneId: Int!) {
  gene(id: $geneId) {
    ...GeneSummaryFields
  }
}
    ${mo}`;class ya extends t.AE{constructor(G){super(G),this.document=R1}}ya.\u0275fac=function(G){return new(G||ya)(o.LFG(t._M))},ya.\u0275prov=o.Yz7({token:ya,factory:ya.\u0275fac,providedIn:"root"});const vl=t.Ps`
    query MolecularProfileDetail($mpId: Int!) {
  molecularProfile(id: $mpId) {
    ...MolecularProfileDetailFields
  }
}
    ${po}`;class Ja extends t.AE{constructor(G){super(G),this.document=vl}}Ja.\u0275fac=function(G){return new(G||Ja)(o.LFG(t._M))},Ja.\u0275prov=o.Yz7({token:Ja,factory:Ja.\u0275fac,providedIn:"root"});const Ca=t.Ps`
    query MolecularProfileSummary($mpId: Int!) {
  molecularProfile(id: $mpId) {
    ...MolecularProfileSummaryFields
  }
}
    ${Ho}`;class kr extends t.AE{constructor(G){super(G),this.document=Ca}}kr.\u0275fac=function(G){return new(G||kr)(o.LFG(t._M))},kr.\u0275prov=o.Yz7({token:kr,factory:kr.\u0275fac,providedIn:"root"});const Ju=t.Ps`
    query OrganizationDetail($organizationId: Int!) {
  organization(id: $organizationId) {
    ...OrganizationDetailFields
  }
}
    ${zo}`;class Ka extends t.AE{constructor(G){super(G),this.document=Ju}}Ka.\u0275fac=function(G){return new(G||Ka)(o.LFG(t._M))},Ka.\u0275prov=o.Yz7({token:Ka,factory:Ka.\u0275fac,providedIn:"root"});const Ku=t.Ps`
    query OrganizationGroups($organizationId: Int!) {
  organization(id: $organizationId) {
    id
    name
    url
    description
    profileImagePath(size: 256)
    subGroups {
      ...OrganizationGroupsFields
    }
  }
}
    ${go}`;class qr extends t.AE{constructor(G){super(G),this.document=Ku}}qr.\u0275fac=function(G){return new(G||qr)(o.LFG(t._M))},qr.\u0275prov=o.Yz7({token:qr,factory:qr.\u0275fac,providedIn:"root"});const V1=t.Ps`
    query OrganizationMembers($organizationId: Int!, $first: Int, $last: Int, $before: String, $after: String) {
  users(
    organization: {id: $organizationId}
    first: $first
    last: $last
    before: $before
    after: $after
  ) {
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
    edges {
      cursor
      node {
        ...OrganizationMembersFields
      }
    }
  }
}
    ${Vo}`;class Ic extends t.AE{constructor(G){super(G),this.document=V1}}Ic.\u0275fac=function(G){return new(G||Ic)(o.LFG(t._M))},Ic.\u0275prov=o.Yz7({token:Ic,factory:Ic.\u0275fac,providedIn:"root"});const B1=t.Ps`
    query PhenotypeDetail($phenotypeId: Int!) {
  phenotype(id: $phenotypeId) {
    id
    name
    description
    hpoId
    url
    link
  }
}
    `;class Ac extends t.AE{constructor(G){super(G),this.document=B1}}Ac.\u0275fac=function(G){return new(G||Ac)(o.LFG(t._M))},Ac.\u0275prov=o.Yz7({token:Ac,factory:Ac.\u0275fac,providedIn:"root"});const qu=t.Ps`
    query DataReleases {
  dataReleases {
    ...Release
  }
}
    ${ai}`;class Er extends t.AE{constructor(G){super(G),this.document=qu}}Er.\u0275fac=function(G){return new(G||Er)(o.LFG(t._M))},Er.\u0275prov=o.Yz7({token:Er,factory:Er.\u0275fac,providedIn:"root"});const Fc=t.Ps`
    query SourceDetail($sourceId: Int!) {
  source(id: $sourceId) {
    ...SourceDetailFields
  }
}
    ${si}`;class Nc extends t.AE{constructor(G){super(G),this.document=Fc}}Nc.\u0275fac=function(G){return new(G||Nc)(o.LFG(t._M))},Nc.\u0275prov=o.Yz7({token:Nc,factory:Nc.\u0275fac,providedIn:"root"});const ap=t.Ps`
    query SourceSummary($sourceId: Int!) {
  source(id: $sourceId) {
    ...SourceSummaryFields
  }
}
    ${Ao}`;class Hl extends t.AE{constructor(G){super(G),this.document=ap}}Hl.\u0275fac=function(G){return new(G||Hl)(o.LFG(t._M))},Hl.\u0275prov=o.Yz7({token:Hl,factory:Hl.\u0275fac,providedIn:"root"});const zd=t.Ps`
    query TherapyDetail($therapyId: Int!) {
  therapy(id: $therapyId) {
    id
    name
    ncitId
    therapyUrl
    therapyAliases
    link
  }
}
    `;class _l extends t.AE{constructor(G){super(G),this.document=zd}}_l.\u0275fac=function(G){return new(G||_l)(o.LFG(t._M))},_l.\u0275prov=o.Yz7({token:_l,factory:_l.\u0275fac,providedIn:"root"});const Td=t.Ps`
    query TherapiesSummary($therapyId: Int!) {
  therapy(id: $therapyId) {
    ...TherapiesSummaryFields
  }
}
    ${Go}`;class Lc extends t.AE{constructor(G){super(G),this.document=Td}}Lc.\u0275fac=function(G){return new(G||Lc)(o.LFG(t._M))},Lc.\u0275prov=o.Yz7({token:Lc,factory:Lc.\u0275fac,providedIn:"root"});const Yl=t.Ps`
    query UserDetail($userId: Int!) {
  user(id: $userId) {
    ...UserDetailFields
  }
}
    ${Ii}`;class yl extends t.AE{constructor(G){super(G),this.document=Yl}}yl.\u0275fac=function(G){return new(G||yl)(o.LFG(t._M))},yl.\u0275prov=o.Yz7({token:yl,factory:yl.\u0275fac,providedIn:"root"});const Md=t.Ps`
    query UserNotifications($first: Int, $last: Int, $before: String, $after: String, $notificationReason: NotificationReason, $subscriptionId: Int, $originatingObject: SubscribableInput, $eventType: EventAction, $originatingUserId: Int, $organizationId: Int, $includeRead: Boolean) {
  notifications(
    first: $first
    last: $last
    before: $before
    after: $after
    notificationReason: $notificationReason
    subscriptionId: $subscriptionId
    originatingObject: $originatingObject
    eventType: $eventType
    originatingUserId: $originatingUserId
    organizationId: $organizationId
    includeRead: $includeRead
  ) {
    pageInfo {
      startCursor
      endCursor
      hasNextPage
      hasPreviousPage
    }
    notificationSubjects {
      ...notificationFeedSubjects
    }
    originatingUsers {
      ...notificationOriginatingUsers
    }
    organizations {
      ...notificationOrganization
    }
    eventTypes
    edges {
      node {
        ...notificationNode
      }
    }
  }
}
    ${pi}
${Oo}
${Bi}
${Gi}`;class Cl extends t.AE{constructor(G){super(G),this.document=Md}}Cl.\u0275fac=function(G){return new(G||Cl)(o.LFG(t._M))},Cl.\u0275prov=o.Yz7({token:Cl,factory:Cl.\u0275fac,providedIn:"root"});const $l=t.Ps`
    mutation UpdateNotificationStatus($input: UpdateNotificationStatusInput!) {
  updateNotificationStatus(input: $input) {
    notifications {
      ...notificationNode
    }
  }
}
    ${Gi}`;class Sr extends t.mm{constructor(G){super(G),this.document=$l}}Sr.\u0275fac=function(G){return new(G||Sr)(o.LFG(t._M))},Sr.\u0275prov=o.Yz7({token:Sr,factory:Sr.\u0275fac,providedIn:"root"});const za=t.Ps`
    mutation Unsubscribe($input: UnsubscribeInput!) {
  unsubscribe(input: $input) {
    unsubscribedEntities {
      ...subscribable
    }
  }
}
    ${ci}`;class kc extends t.mm{constructor(G){super(G),this.document=za}}kc.\u0275fac=function(G){return new(G||kc)(o.LFG(t._M))},kc.\u0275prov=o.Yz7({token:kc,factory:kc.\u0275fac,providedIn:"root"});const H1=t.Ps`
    mutation Subscribe($input: SubscribeInput!) {
  subscribe(input: $input) {
    subscriptions {
      id
    }
  }
}
    `;class gs extends t.mm{constructor(G){super(G),this.document=H1}}gs.\u0275fac=function(G){return new(G||gs)(o.LFG(t._M))},gs.\u0275prov=o.Yz7({token:gs,factory:gs.\u0275fac,providedIn:"root"});const bd=t.Ps`
    query VariantGroupDetail($variantGroupId: Int!) {
  variantGroup(id: $variantGroupId) {
    ...VariantGroupDetailFields
  }
}
    ${Ki}`;class Ul extends t.AE{constructor(G){super(G),this.document=bd}}Ul.\u0275fac=function(G){return new(G||Ul)(o.LFG(t._M))},Ul.\u0275prov=o.Yz7({token:Ul,factory:Ul.\u0275fac,providedIn:"root"});const Ed=t.Ps`
    query VariantGroupRevisions($variantGroupId: Int!, $first: Int, $last: Int, $before: String, $after: String, $fieldName: String, $originatingUserId: Int) {
  variantGroup(id: $variantGroupId) {
    id
    revisions(
      first: $first
      last: $last
      before: $before
      after: $after
      fieldName: $fieldName
      originatingUserId: $originatingUserId
    ) {
      totalCount
      uniqueRevisors {
        username
        id
        profileImagePath(size: 32)
      }
      revisedFieldNames {
        name
        displayName
      }
      edges {
        node {
          id
          revisionSetId
          createdAt
          fieldName
          currentValue
          suggestedValue
          linkoutData {
            name
            diffValue {
              ... on ObjectFieldDiff {
                addedObjects {
                  id
                  displayName
                  displayType
                  entityType
                }
                removedObjects {
                  id
                  displayName
                  displayType
                  entityType
                }
                keptObjects {
                  id
                  displayName
                  displayType
                  entityType
                }
              }
              ... on ScalarFieldDiff {
                left
                right
              }
            }
          }
          revisor {
            id
            name
          }
          status
        }
      }
    }
  }
}
    `;class Rc extends t.AE{constructor(G){super(G),this.document=Ed}}Rc.\u0275fac=function(G){return new(G||Rc)(o.LFG(t._M))},Rc.\u0275prov=o.Yz7({token:Rc,factory:Rc.\u0275fac,providedIn:"root"});const du=t.Ps`
    query VariantGroupsSummary($variantGroupId: Int!) {
  variantGroup(id: $variantGroupId) {
    ...VariantGroupSummaryFields
  }
}
    ${dr}`;class zl extends t.AE{constructor(G){super(G),this.document=du}}zl.\u0275fac=function(G){return new(G||zl)(o.LFG(t._M))},zl.\u0275prov=o.Yz7({token:zl,factory:zl.\u0275fac,providedIn:"root"});const cp=t.Ps`
    query VariantTypeDetail($variantTypeId: Int!) {
  variantType(id: $variantTypeId) {
    id
    name
    soid
    description
    url
    link
  }
}
    `;class Vc extends t.AE{constructor(G){super(G),this.document=cp}}Vc.\u0275fac=function(G){return new(G||Vc)(o.LFG(t._M))},Vc.\u0275prov=o.Yz7({token:Vc,factory:Vc.\u0275fac,providedIn:"root"});const Y1=t.Ps`
    query VariantDetail($variantId: Int!) {
  variant(id: $variantId) {
    ...VariantDetailFields
  }
}
    ${Ai}`;class Tl extends t.AE{constructor(G){super(G),this.document=Y1}}Tl.\u0275fac=function(G){return new(G||Tl)(o.LFG(t._M))},Tl.\u0275prov=o.Yz7({token:Tl,factory:Tl.\u0275fac,providedIn:"root"});const Sd=t.Ps`
    query VariantSummary($variantId: Int!) {
  variant(id: $variantId) {
    ...VariantSummaryFields
  }
}