"use strict";(self.webpackChunkmain=self.webpackChunkmain||[]).push([[179],{8809:(Et,Me,a)=>{a.d(Me,{T6:()=>F,VD:()=>V,WE:()=>R,Yt:()=>S,lC:()=>m,py:()=>L,rW:()=>i,s:()=>M,ve:()=>s,vq:()=>T});var t=a(2567);function i(e,P,w){return{r:255*(0,t.sh)(e,255),g:255*(0,t.sh)(P,255),b:255*(0,t.sh)(w,255)}}function m(e,P,w){e=(0,t.sh)(e,255),P=(0,t.sh)(P,255),w=(0,t.sh)(w,255);var de=Math.max(e,P,w),se=Math.min(e,P,w),Z=0,j=0,N=(de+se)/2;if(de===se)j=0,Z=0;else{var q=de-se;switch(j=N>.5?q/(2-de-se):q/(de+se),de){case e:Z=(P-w)/q+(P<w?6:0);break;case P:Z=(w-e)/q+2;break;case w:Z=(e-P)/q+4}Z/=6}return{h:Z,s:j,l:N}}function l(e,P,w){return w<0&&(w+=1),w>1&&(w-=1),w<1/6?e+6*w*(P-e):w<.5?P:w<2/3?e+(P-e)*(2/3-w)*6:e}function s(e,P,w){var de,se,Z;if(e=(0,t.sh)(e,360),P=(0,t.sh)(P,100),w=(0,t.sh)(w,100),0===P)se=w,Z=w,de=w;else{var j=w<.5?w*(1+P):w+P-w*P,N=2*w-j;de=l(N,j,e+1/3),se=l(N,j,e),Z=l(N,j,e-1/3)}return{r:255*de,g:255*se,b:255*Z}}function L(e,P,w){e=(0,t.sh)(e,255),P=(0,t.sh)(P,255),w=(0,t.sh)(w,255);var de=Math.max(e,P,w),se=Math.min(e,P,w),Z=0,j=de,N=de-se,q=0===de?0:N/de;if(de===se)Z=0;else{switch(de){case e:Z=(P-w)/N+(P<w?6:0);break;case P:Z=(w-e)/N+2;break;case w:Z=(e-P)/N+4}Z/=6}return{h:Z,s:q,v:j}}function R(e,P,w){e=6*(0,t.sh)(e,360),P=(0,t.sh)(P,100),w=(0,t.sh)(w,100);var de=Math.floor(e),se=e-de,Z=w*(1-P),j=w*(1-se*P),N=w*(1-(1-se)*P),q=de%6;return{r:255*[w,j,Z,Z,N,w][q],g:255*[N,w,w,j,Z,Z][q],b:255*[Z,Z,N,w,w,j][q]}}function T(e,P,w,de){var se=[(0,t.FZ)(Math.round(e).toString(16)),(0,t.FZ)(Math.round(P).toString(16)),(0,t.FZ)(Math.round(w).toString(16))];return de&&se[0].startsWith(se[0].charAt(1))&&se[1].startsWith(se[1].charAt(1))&&se[2].startsWith(se[2].charAt(1))?se[0].charAt(0)+se[1].charAt(0)+se[2].charAt(0):se.join("")}function M(e,P,w,de,se){var Z=[(0,t.FZ)(Math.round(e).toString(16)),(0,t.FZ)(Math.round(P).toString(16)),(0,t.FZ)(Math.round(w).toString(16)),(0,t.FZ)(O(de))];return se&&Z[0].startsWith(Z[0].charAt(1))&&Z[1].startsWith(Z[1].charAt(1))&&Z[2].startsWith(Z[2].charAt(1))&&Z[3].startsWith(Z[3].charAt(1))?Z[0].charAt(0)+Z[1].charAt(0)+Z[2].charAt(0)+Z[3].charAt(0):Z.join("")}function O(e){return Math.round(255*parseFloat(e)).toString(16)}function F(e){return V(e)/255}function V(e){return parseInt(e,16)}function S(e){return{r:e>>16,g:(65280&e)>>8,b:255&e}}},3487:(Et,Me,a)=>{a.d(Me,{R:()=>t});var t={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"}},7952:(Et,Me,a)=>{a.d(Me,{uA:()=>l});var t=a(8809),i=a(3487),m=a(2567);function l(V){var S={r:0,g:0,b:0},e=1,P=null,w=null,de=null,se=!1,Z=!1;return"string"==typeof V&&(V=function O(V){if(0===(V=V.trim().toLowerCase()).length)return!1;var S=!1;if(i.R[V])V=i.R[V],S=!0;else if("transparent"===V)return{r:0,g:0,b:0,a:0,format:"name"};var e=b.rgb.exec(V);return e?{r:e[1],g:e[2],b:e[3]}:(e=b.rgba.exec(V))?{r:e[1],g:e[2],b:e[3],a:e[4]}:(e=b.hsl.exec(V))?{h:e[1],s:e[2],l:e[3]}:(e=b.hsla.exec(V))?{h:e[1],s:e[2],l:e[3],a:e[4]}:(e=b.hsv.exec(V))?{h:e[1],s:e[2],v:e[3]}:(e=b.hsva.exec(V))?{h:e[1],s:e[2],v:e[3],a:e[4]}:(e=b.hex8.exec(V))?{r:(0,t.VD)(e[1]),g:(0,t.VD)(e[2]),b:(0,t.VD)(e[3]),a:(0,t.T6)(e[4]),format:S?"name":"hex8"}:(e=b.hex6.exec(V))?{r:(0,t.VD)(e[1]),g:(0,t.VD)(e[2]),b:(0,t.VD)(e[3]),format:S?"name":"hex"}:(e=b.hex4.exec(V))?{r:(0,t.VD)(e[1]+e[1]),g:(0,t.VD)(e[2]+e[2]),b:(0,t.VD)(e[3]+e[3]),a:(0,t.T6)(e[4]+e[4]),format:S?"name":"hex8"}:!!(e=b.hex3.exec(V))&&{r:(0,t.VD)(e[1]+e[1]),g:(0,t.VD)(e[2]+e[2]),b:(0,t.VD)(e[3]+e[3]),format:S?"name":"hex"}}(V)),"object"==typeof V&&(F(V.r)&&F(V.g)&&F(V.b)?(S=(0,t.rW)(V.r,V.g,V.b),se=!0,Z="%"===String(V.r).substr(-1)?"prgb":"rgb"):F(V.h)&&F(V.s)&&F(V.v)?(P=(0,m.JX)(V.s),w=(0,m.JX)(V.v),S=(0,t.WE)(V.h,P,w),se=!0,Z="hsv"):F(V.h)&&F(V.s)&&F(V.l)&&(P=(0,m.JX)(V.s),de=(0,m.JX)(V.l),S=(0,t.ve)(V.h,P,de),se=!0,Z="hsl"),Object.prototype.hasOwnProperty.call(V,"a")&&(e=V.a)),e=(0,m.Yq)(e),{ok:se,format:V.format||Z,r:Math.min(255,Math.max(S.r,0)),g:Math.min(255,Math.max(S.g,0)),b:Math.min(255,Math.max(S.b,0)),a:e}}var R="(?:".concat("[-\\+]?\\d*\\.\\d+%?",")|(?:").concat("[-\\+]?\\d+%?",")"),T="[\\s|\\(]+(".concat(R,")[,|\\s]+(").concat(R,")[,|\\s]+(").concat(R,")\\s*\\)?"),M="[\\s|\\(]+(".concat(R,")[,|\\s]+(").concat(R,")[,|\\s]+(").concat(R,")[,|\\s]+(").concat(R,")\\s*\\)?"),b={CSS_UNIT:new RegExp(R),rgb:new RegExp("rgb"+T),rgba:new RegExp("rgba"+M),hsl:new RegExp("hsl"+T),hsla:new RegExp("hsla"+M),hsv:new RegExp("hsv"+T),hsva:new RegExp("hsva"+M),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function F(V){return Boolean(b.CSS_UNIT.exec(String(V)))}},5192:(Et,Me,a)=>{a.d(Me,{C:()=>s});var t=a(8809),i=a(3487),m=a(7952),l=a(2567),s=function(){function R(T,M){var b;if(void 0===T&&(T=""),void 0===M&&(M={}),T instanceof R)return T;"number"==typeof T&&(T=(0,t.Yt)(T)),this.originalInput=T;var O=(0,m.uA)(T);this.originalInput=T,this.r=O.r,this.g=O.g,this.b=O.b,this.a=O.a,this.roundA=Math.round(100*this.a)/100,this.format=null!==(b=M.format)&&void 0!==b?b:O.format,this.gradientType=M.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=O.ok}return R.prototype.isDark=function(){return this.getBrightness()<128},R.prototype.isLight=function(){return!this.isDark()},R.prototype.getBrightness=function(){var T=this.toRgb();return(299*T.r+587*T.g+114*T.b)/1e3},R.prototype.getLuminance=function(){var T=this.toRgb(),F=T.r/255,V=T.g/255,S=T.b/255;return.2126*(F<=.03928?F/12.92:Math.pow((F+.055)/1.055,2.4))+.7152*(V<=.03928?V/12.92:Math.pow((V+.055)/1.055,2.4))+.0722*(S<=.03928?S/12.92:Math.pow((S+.055)/1.055,2.4))},R.prototype.getAlpha=function(){return this.a},R.prototype.setAlpha=function(T){return this.a=(0,l.Yq)(T),this.roundA=Math.round(100*this.a)/100,this},R.prototype.isMonochrome=function(){return 0===this.toHsl().s},R.prototype.toHsv=function(){var T=(0,t.py)(this.r,this.g,this.b);return{h:360*T.h,s:T.s,v:T.v,a:this.a}},R.prototype.toHsvString=function(){var T=(0,t.py)(this.r,this.g,this.b),M=Math.round(360*T.h),b=Math.round(100*T.s),O=Math.round(100*T.v);return 1===this.a?"hsv(".concat(M,", ").concat(b,"%, ").concat(O,"%)"):"hsva(".concat(M,", ").concat(b,"%, ").concat(O,"%, ").concat(this.roundA,")")},R.prototype.toHsl=function(){var T=(0,t.lC)(this.r,this.g,this.b);return{h:360*T.h,s:T.s,l:T.l,a:this.a}},R.prototype.toHslString=function(){var T=(0,t.lC)(this.r,this.g,this.b),M=Math.round(360*T.h),b=Math.round(100*T.s),O=Math.round(100*T.l);return 1===this.a?"hsl(".concat(M,", ").concat(b,"%, ").concat(O,"%)"):"hsla(".concat(M,", ").concat(b,"%, ").concat(O,"%, ").concat(this.roundA,")")},R.prototype.toHex=function(T){return void 0===T&&(T=!1),(0,t.vq)(this.r,this.g,this.b,T)},R.prototype.toHexString=function(T){return void 0===T&&(T=!1),"#"+this.toHex(T)},R.prototype.toHex8=function(T){return void 0===T&&(T=!1),(0,t.s)(this.r,this.g,this.b,this.a,T)},R.prototype.toHex8String=function(T){return void 0===T&&(T=!1),"#"+this.toHex8(T)},R.prototype.toRgb=function(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}},R.prototype.toRgbString=function(){var T=Math.round(this.r),M=Math.round(this.g),b=Math.round(this.b);return 1===this.a?"rgb(".concat(T,", ").concat(M,", ").concat(b,")"):"rgba(".concat(T,", ").concat(M,", ").concat(b,", ").concat(this.roundA,")")},R.prototype.toPercentageRgb=function(){var T=function(M){return"".concat(Math.round(100*(0,l.sh)(M,255)),"%")};return{r:T(this.r),g:T(this.g),b:T(this.b),a:this.a}},R.prototype.toPercentageRgbString=function(){var T=function(M){return Math.round(100*(0,l.sh)(M,255))};return 1===this.a?"rgb(".concat(T(this.r),"%, ").concat(T(this.g),"%, ").concat(T(this.b),"%)"):"rgba(".concat(T(this.r),"%, ").concat(T(this.g),"%, ").concat(T(this.b),"%, ").concat(this.roundA,")")},R.prototype.toName=function(){if(0===this.a)return"transparent";if(this.a<1)return!1;for(var T="#"+(0,t.vq)(this.r,this.g,this.b,!1),M=0,b=Object.entries(i.R);M<b.length;M++){var O=b[M];if(T===O[1])return O[0]}return!1},R.prototype.toString=function(T){var M=Boolean(T);T=T??this.format;var b=!1;return!M&&this.a<1&&this.a>=0&&(T.startsWith("hex")||"name"===T)?"name"===T&&0===this.a?this.toName():this.toRgbString():("rgb"===T&&(b=this.toRgbString()),"prgb"===T&&(b=this.toPercentageRgbString()),("hex"===T||"hex6"===T)&&(b=this.toHexString()),"hex3"===T&&(b=this.toHexString(!0)),"hex4"===T&&(b=this.toHex8String(!0)),"hex8"===T&&(b=this.toHex8String()),"name"===T&&(b=this.toName()),"hsl"===T&&(b=this.toHslString()),"hsv"===T&&(b=this.toHsvString()),b||this.toHexString())},R.prototype.toNumber=function(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)},R.prototype.clone=function(){return new R(this.toString())},R.prototype.lighten=function(T){void 0===T&&(T=10);var M=this.toHsl();return M.l+=T/100,M.l=(0,l.V2)(M.l),new R(M)},R.prototype.brighten=function(T){void 0===T&&(T=10);var M=this.toRgb();return M.r=Math.max(0,Math.min(255,M.r-Math.round(-T/100*255))),M.g=Math.max(0,Math.min(255,M.g-Math.round(-T/100*255))),M.b=Math.max(0,Math.min(255,M.b-Math.round(-T/100*255))),new R(M)},R.prototype.darken=function(T){void 0===T&&(T=10);var M=this.toHsl();return M.l-=T/100,M.l=(0,l.V2)(M.l),new R(M)},R.prototype.tint=function(T){return void 0===T&&(T=10),this.mix("white",T)},R.prototype.shade=function(T){return void 0===T&&(T=10),this.mix("black",T)},R.prototype.desaturate=function(T){void 0===T&&(T=10);var M=this.toHsl();return M.s-=T/100,M.s=(0,l.V2)(M.s),new R(M)},R.prototype.saturate=function(T){void 0===T&&(T=10);var M=this.toHsl();return M.s+=T/100,M.s=(0,l.V2)(M.s),new R(M)},R.prototype.greyscale=function(){return this.desaturate(100)},R.prototype.spin=function(T){var M=this.toHsl(),b=(M.h+T)%360;return M.h=b<0?360+b:b,new R(M)},R.prototype.mix=function(T,M){void 0===M&&(M=50);var b=this.toRgb(),O=new R(T).toRgb(),F=M/100;return new R({r:(O.r-b.r)*F+b.r,g:(O.g-b.g)*F+b.g,b:(O.b-b.b)*F+b.b,a:(O.a-b.a)*F+b.a})},R.prototype.analogous=function(T,M){void 0===T&&(T=6),void 0===M&&(M=30);var b=this.toHsl(),O=360/M,F=[this];for(b.h=(b.h-(O*T>>1)+720)%360;--T;)b.h=(b.h+O)%360,F.push(new R(b));return F},R.prototype.complement=function(){var T=this.toHsl();return T.h=(T.h+180)%360,new R(T)},R.prototype.monochromatic=function(T){void 0===T&&(T=6);for(var M=this.toHsv(),b=M.h,O=M.s,F=M.v,V=[],S=1/T;T--;)V.push(new R({h:b,s:O,v:F})),F=(F+S)%1;return V},R.prototype.splitcomplement=function(){var T=this.toHsl(),M=T.h;return[this,new R({h:(M+72)%360,s:T.s,l:T.l}),new R({h:(M+216)%360,s:T.s,l:T.l})]},R.prototype.onBackground=function(T){var M=this.toRgb(),b=new R(T).toRgb();return new R({r:b.r+(M.r-b.r)*M.a,g:b.g+(M.g-b.g)*M.a,b:b.b+(M.b-b.b)*M.a})},R.prototype.triad=function(){return this.polyad(3)},R.prototype.tetrad=function(){return this.polyad(4)},R.prototype.polyad=function(T){for(var M=this.toHsl(),b=M.h,O=[this],F=360/T,V=1;V<T;V++)O.push(new R({h:(b+V*F)%360,s:M.s,l:M.l}));return O},R.prototype.equals=function(T){return this.toRgbString()===new R(T).toRgbString()},R}()},2567:(Et,Me,a)=>{function t(T,M){(function m(T){return"string"==typeof T&&-1!==T.indexOf(".")&&1===parseFloat(T)})(T)&&(T="100%");var b=function l(T){return"string"==typeof T&&-1!==T.indexOf("%")}(T);return T=360===M?T:Math.min(M,Math.max(0,parseFloat(T))),b&&(T=parseInt(String(T*M),10)/100),Math.abs(T-M)<1e-6?1:T=360===M?(T<0?T%M+M:T%M)/parseFloat(String(M)):T%M/parseFloat(String(M))}function i(T){return Math.min(1,Math.max(0,T))}function s(T){return T=parseFloat(T),(isNaN(T)||T<0||T>1)&&(T=1),T}function L(T){return T<=1?"".concat(100*Number(T),"%"):T}function R(T){return 1===T.length?"0"+T:String(T)}a.d(Me,{FZ:()=>R,JX:()=>L,V2:()=>i,Yq:()=>s,sh:()=>t})},4049:(Et,Me,a)=>{a.d(Me,{G:()=>ne});var t=a(4650),i=a(6895),m=a(9116),l=a(1102),s=a(6672),L=a(6581),R=a(3240),T=a(4004),M=a(9300),b=a(7630),O=a(1971),F=a(9194),V=a(6550),S=a(2635),e=a(160);function P(Ce,H){if(1&Ce&&(t._UZ(0,"i",9),t.ALo(1,"entityColor"),t._uU(2)),2&Ce){const X=t.oxw().ngIf;t.Q6J("nzTwotoneColor",t.lcZ(1,2,"ClinicalTrial")),t.xp6(2),t.hij(" ",X.nctId," ")}}function w(Ce,H){if(1&Ce&&(t.TgZ(0,"cvc-link-tag",10),t._uU(1," View on clinicaltrials.gov "),t.qZA()),2&Ce){const X=t.oxw().ngIf;t.Q6J("href",X.url)}}function de(Ce,H){if(1&Ce&&(t.ynx(0),t.TgZ(1,"nz-card",2),t.YNc(2,P,3,4,"ng-template",null,3,t.W1O),t.YNc(4,w,2,1,"ng-template",null,4,t.W1O),t.TgZ(6,"nz-descriptions",5)(7,"nz-descriptions-item",6),t._uU(8),t.qZA(),t.TgZ(9,"nz-descriptions-item",7),t._uU(10),t.qZA(),t.TgZ(11,"nz-descriptions-item",8),t._uU(12),t.qZA()()(),t.BQk()),2&Ce){const X=H.ngIf,ve=t.MAs(3),Ee=t.MAs(5);t.xp6(1),t.Q6J("nzTitle",ve)("nzExtra",Ee),t.xp6(5),t.Q6J("nzColumn",2),t.xp6(2),t.hij(" ",X.name," "),t.xp6(2),t.hij(" ",X.sourceCount," "),t.xp6(2),t.hij(" ",X.evidenceCount," ")}}class se{constructor(H){this.gql=H}ngOnInit(){if(null==this.clinicalTrialId)throw new Error("cvc-clinical-trial-popover requires valid clinicalTrialId input.");this.clinicalTrial$=this.gql.watch({clinicalTrialId:this.clinicalTrialId}).valueChanges.pipe((0,T.U)(({data:H})=>H?.clinicalTrials.edges[0]?.node),(0,M.h)(R.ep))}}function Z(Ce,H){}function j(Ce,H){if(1&Ce&&(t.ynx(0),t.TgZ(1,"a",4),t.YNc(2,Z,0,0,"ng-template",5),t.qZA(),t.BQk()),2&Ce){const X=t.oxw(),ve=t.MAs(2);t.xp6(1),t.Q6J("routerLink",X.clinicalTrial.link),t.xp6(1),t.Q6J("ngTemplateOutlet",ve)}}function N(Ce,H){}function q(Ce,H){if(1&Ce&&t._UZ(0,"cvc-clinical-trial-popover",8),2&Ce){const X=t.oxw(2);t.Q6J("clinicalTrialId",X.clinicalTrial.id)}}function Y(Ce,H){if(1&Ce&&(t.TgZ(0,"nz-tag",6),t.YNc(1,N,0,0,"ng-template",5),t.qZA(),t.YNc(2,q,1,1,"ng-template",null,7,t.W1O)),2&Ce){const X=t.MAs(3),ve=t.oxw(),Ee=t.MAs(6);t.Q6J("nzPopoverMouseEnterDelay",.5)("nzPopoverContent",X)("nzPopoverTrigger",ve.enablePopover?"hover":null),t.xp6(1),t.Q6J("ngTemplateOutlet",Ee)}}function k(Ce,H){}function me(Ce,H){if(1&Ce&&t.YNc(0,k,0,0,"ng-template",5),2&Ce){t.oxw();const X=t.MAs(2);t.Q6J("ngTemplateOutlet",X)}}function fe(Ce,H){if(1&Ce&&(t._UZ(0,"i",9),t.ALo(1,"entityColor"),t._uU(2)),2&Ce){const X=t.oxw();t.Q6J("nzTwotoneColor",t.lcZ(1,2,"ClinicalTrial")),t.xp6(2),t.hij(" ",X.clinicalTrial.nctId,"\n")}}se.\u0275fac=function(H){return new(H||se)(t.Y36(b.UIR))},se.\u0275cmp=t.Xpm({type:se,selectors:[["cvc-clinical-trial-popover"]],inputs:{clinicalTrialId:"clinicalTrialId"},decls:3,vars:3,consts:[["id","popover-content"],[4,"ngIf"],["nzBordered","false","id","card-content",3,"nzTitle","nzExtra"],["cardTitle",""],["linkout",""],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","Name","nzSpan","2"],["nzTitle","Sources","nzSpan","2"],["nzTitle","Evidence","nzSpan","2"],["nz-icon","","nzTheme","twotone","nzType","civic-clinicaltrial",3,"nzTwotoneColor"],[3,"href"]],template:function(H,X){1&H&&(t.TgZ(0,"div",0),t.YNc(1,de,13,6,"ng-container",1),t.ALo(2,"ngrxPush"),t.qZA()),2&H&&(t.xp6(1),t.Q6J("ngIf",t.lcZ(2,1,X.clinicalTrial$)))},dependencies:[i.O5,O.bd,l.Ls,F.R7,F.uj,V.l,S.fM,e.a],styles:["[_nghost-%COMP%]{display:block;margin:-8px -12px}[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}[_nghost-%COMP%]     .ant-descriptions-view{border:none}[_nghost-%COMP%]     #entity-child-counts{border-top:1px solid #f0f0f0;padding:8px}[_nghost-%COMP%]     #entity-child-counts nz-space{width:100%}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child nz-tag{margin-right:0}.popover-text[_ngcontent-%COMP%]{width:100%;padding:8px;border-bottom:1px solid #f0f0f0}#popover-content[_ngcontent-%COMP%]{min-width:350px;max-width:500px;min-height:125px}"]});class ne{set clinicalTrial(H){if(!H)throw new Error("clinical-trial-tag clinicalTrial Input requires LinkableClinicalTrial.");this._clinicalTrial=H}get clinicalTrial(){return this._clinicalTrial}constructor(){this.linked=!0,this.enablePopover=!0}}ne.\u0275fac=function(H){return new(H||ne)},ne.\u0275cmp=t.Xpm({type:ne,selectors:[["cvc-clinical-trial-tag"]],inputs:{clinicalTrial:"clinicalTrial",linked:"linked",enablePopover:"enablePopover"},decls:7,vars:2,consts:[[4,"ngIf","ngIfElse"],["tag",""],["unlinked",""],["tagContent",""],[3,"routerLink"],[3,"ngTemplateOutlet"],["nz-popover","","nzPopoverPlacement","right",3,"nzPopoverMouseEnterDelay","nzPopoverContent","nzPopoverTrigger"],["clinicalTrialPopover",""],[3,"clinicalTrialId"],["nz-icon","","nzTheme","twotone","nzType","civic-clinicaltrial",3,"nzTwotoneColor"]],template:function(H,X){if(1&H&&(t.YNc(0,j,3,2,"ng-container",0),t.YNc(1,Y,4,4,"ng-template",null,1,t.W1O),t.YNc(3,me,1,1,"ng-template",null,2,t.W1O),t.YNc(5,fe,3,4,"ng-template",null,3,t.W1O)),2&H){const ve=t.MAs(4);t.Q6J("ngIf",X.linked)("ngIfElse",ve)}},dependencies:[i.O5,i.tP,m.rH,l.Ls,s.j,L.lU,se,e.a],styles:["[_nghost-%COMP%]{display:block}"]})},5453:(Et,Me,a)=>{a.d(Me,{N:()=>V});var t=a(6895),i=a(9116),m=a(6672),l=a(6581),s=a(4989),L=a(9444),R=a(2635),T=a(1971),M=a(9194),b=a(1102),O=a(4650);class F{}F.\u0275fac=function(e){return new(e||F)},F.\u0275mod=O.oAB({type:F}),F.\u0275inj=O.cJS({imports:[t.ez,R._N,R.pP,T.vh,b.PV,M.q6,s.X,L.s]});class V{}V.\u0275fac=function(e){return new(e||V)},V.\u0275mod=O.oAB({type:V}),V.\u0275inj=O.cJS({imports:[t.ez,i.Bz,b.PV,m.X,l.$6,F,L.s]})},2925:(Et,Me,a)=>{a.d(Me,{I:()=>j});var t=a(3240),i=a(4004),m=a(9300),l=a(4650),s=a(7630),L=a(6895),R=a(1971),T=a(9194),M=a(1102),b=a(8823),O=a(6550),F=a(2635),V=a(4557);function S(N,q){if(1&N&&(l._UZ(0,"i",12),l._uU(1),l.ALo(2,"truncate")),2&N){const Y=l.oxw().ngIf;l.xp6(1),l.hij(" ",l.xi3(2,1,Y.name,50)," ")}}function e(N,q){if(1&N&&(l.TgZ(0,"cvc-link-tag",14),l._uU(1),l.qZA()),2&N){const Y=l.oxw(2).ngIf;l.Q6J("href",Y.diseaseUrl),l.xp6(1),l.hij(" DOID: ",Y.doid," ")}}function P(N,q){if(1&N&&l.YNc(0,e,2,2,"cvc-link-tag",13),2&N){const Y=l.oxw().ngIf,k=l.MAs(7);l.Q6J("ngIf",Y.doid)("ngIfElse",k)}}function w(N,q){1&N&&(l.TgZ(0,"span",15),l._uU(1,"No DOID"),l.qZA())}function de(N,q){if(1&N&&(l.TgZ(0,"nz-descriptions-item",16),l._uU(1),l.qZA()),2&N){const Y=l.oxw().ngIf;l.xp6(1),l.hij(" ",Y.name," ")}}function se(N,q){if(1&N&&(l.TgZ(0,"nz-descriptions-item",17),l._uU(1),l.qZA()),2&N){const Y=l.oxw().ngIf;l.xp6(1),l.hij(" ",Y.diseaseAliases.join(", ")," ")}}function Z(N,q){if(1&N&&(l.ynx(0),l.TgZ(1,"nz-card",2),l.YNc(2,S,3,4,"ng-template",null,3,l.W1O),l.YNc(4,P,1,2,"ng-template",null,4,l.W1O),l.YNc(6,w,2,0,"ng-template",null,5,l.W1O),l.TgZ(8,"nz-descriptions",6),l.YNc(9,de,2,1,"nz-descriptions-item",7),l.YNc(10,se,2,1,"nz-descriptions-item",8),l.TgZ(11,"nz-descriptions-item",9),l._uU(12),l.qZA(),l.TgZ(13,"nz-descriptions-item",10),l._uU(14),l.qZA(),l.TgZ(15,"nz-descriptions-item",11),l._uU(16),l.qZA()()(),l.BQk()),2&N){const Y=q.ngIf,k=l.MAs(3),me=l.MAs(5);l.xp6(1),l.Q6J("nzTitle",k)("nzExtra",me),l.xp6(7),l.Q6J("nzColumn",1),l.xp6(1),l.Q6J("ngIf",Y.name.length>50),l.xp6(1),l.Q6J("ngIf",Y.diseaseAliases.length>0),l.xp6(2),l.hij(" ",Y.assertionCount," "),l.xp6(2),l.hij(" ",Y.evidenceItemCount," "),l.xp6(2),l.hij(" ",Y.molecularProfileCount," ")}}class j{constructor(q){this.gql=q}ngOnInit(){if(null==this.diseaseId)throw new Error("cvc-disease-popover requires valid diseaseId input.");this.disease$=this.gql.watch({diseaseId:this.diseaseId}).valueChanges.pipe((0,i.U)(({data:q})=>q?.diseasePopover),(0,m.h)(t.ep))}}j.\u0275fac=function(q){return new(q||j)(l.Y36(s.k7O))},j.\u0275cmp=l.Xpm({type:j,selectors:[["cvc-disease-popover"]],inputs:{diseaseId:"diseaseId"},decls:3,vars:3,consts:[["id","popover-content"],[4,"ngIf"],["nzBordered","false","id","card-content",3,"nzTitle","nzExtra"],["cardTitle",""],["linkout",""],["noDoid",""],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","Name","nzSpan","2",4,"ngIf"],["nzTitle","Aliases","nzSpan","2",4,"ngIf"],["nzTitle","Assertions","nzSpan","1"],["nzTitle","Evidence","nzSpan","1"],["nzTitle","Molecular Profiles","nzSpan","1"],["nz-icon","","nzType","civic-disease","nzTheme","twotone","nzTwotoneColor","#E62F76"],["tooltip","View on disease-ontology.org",3,"href",4,"ngIf","ngIfElse"],["tooltip","View on disease-ontology.org",3,"href"],["nz-typography","","nzType","secondary"],["nzTitle","Name","nzSpan","2"],["nzTitle","Aliases","nzSpan","2"]],template:function(q,Y){1&q&&(l.TgZ(0,"div",0),l.YNc(1,Z,17,8,"ng-container",1),l.ALo(2,"ngrxPush"),l.qZA()),2&q&&(l.xp6(1),l.Q6J("ngIf",l.lcZ(2,1,Y.disease$)))},dependencies:[L.O5,R.bd,T.R7,T.uj,M.Ls,b.ZU,O.l,F.fM,V.W],styles:["[_nghost-%COMP%]{display:block;margin:-8px -12px}[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}[_nghost-%COMP%]     .ant-descriptions-view{border:none}[_nghost-%COMP%]     #entity-child-counts{border-top:1px solid #f0f0f0;padding:8px}[_nghost-%COMP%]     #entity-child-counts nz-space{width:100%}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child nz-tag{margin-right:0}.popover-text[_ngcontent-%COMP%]{width:100%;padding:8px;border-bottom:1px solid #f0f0f0}#popover-content[_ngcontent-%COMP%]{min-width:350px;max-width:500px;min-height:125px}"]})},3638:(Et,Me,a)=>{a.d(Me,{t:()=>b});var t=a(6895),i=a(1971),m=a(9194),l=a(1102),s=a(4989),L=a(2635),R=a(8823),T=a(9444),M=a(4650);class b{}b.\u0275fac=function(F){return new(F||b)},b.\u0275mod=M.oAB({type:b}),b.\u0275inj=M.cJS({imports:[t.ez,L._N,L.pP,i.vh,m.q6,l.PV,R.ZJ,T.s,s.X]})},7491:(Et,Me,a)=>{a.d(Me,{n:()=>Z});var t=a(6654),i=a(4650),m=a(6895),l=a(9116),s=a(6672),L=a(6581),R=a(1102),T=a(2925),M=a(4557);function b(j,N){}function O(j,N){if(1&j&&(i.ynx(0),i.TgZ(1,"a",4),i.YNc(2,b,0,0,"ng-template",5),i.qZA(),i.BQk()),2&j){const q=i.oxw(),Y=i.MAs(2);i.xp6(1),i.Q6J("routerLink",q.disease.link),i.xp6(1),i.Q6J("ngTemplateOutlet",Y)}}function F(j,N){}function V(j,N){if(1&j&&i._UZ(0,"cvc-disease-popover",8),2&j){const q=i.oxw(2);i.Q6J("diseaseId",q.disease.id)}}function S(j,N){if(1&j){const q=i.EpF();i.TgZ(0,"nz-tag",6),i.NdJ("nzOnClose",function(k){i.CHM(q);const me=i.oxw();return i.KtG(me.itemClosed(k))}),i.YNc(1,F,0,0,"ng-template",5),i.qZA(),i.YNc(2,V,1,1,"ng-template",null,7,i.W1O)}if(2&j){const q=i.MAs(3),Y=i.oxw(),k=i.MAs(6);i.Q6J("nzPopoverMouseEnterDelay",Y.onCloseClicked?0:.5)("nzPopoverContent",q)("nzPopoverTrigger",Y.enablePopover?"hover":null)("nzMode",Y.onCloseClicked?"closeable":"default"),i.xp6(1),i.Q6J("ngTemplateOutlet",k)}}function e(j,N){}function P(j,N){if(1&j&&i.YNc(0,e,0,0,"ng-template",5),2&j){i.oxw();const q=i.MAs(2);i.Q6J("ngTemplateOutlet",q)}}function w(j,N){if(1&j&&(i.ynx(0),i._uU(1),i.ALo(2,"truncate"),i.BQk()),2&j){const q=i.oxw(2);i.xp6(1),i.hij(" ",i.xi3(2,1,q.disease.name,27)," ")}}function de(j,N){if(1&j&&i._uU(0),2&j){const q=i.oxw(2);i.hij(" ",q.disease.name," ")}}function se(j,N){if(1&j&&(i._UZ(0,"i",9),i.YNc(1,w,3,4,"ng-container",0),i.YNc(2,de,1,1,"ng-template",null,10,i.W1O)),2&j){const q=i.MAs(3),Y=i.oxw();i.xp6(1),i.Q6J("ngIf",Y.truncateLongName)("ngIfElse",q)}}class Z extends t.a{constructor(){super(...arguments),this.enablePopover=!0,this.truncateLongName=!1}set disease(N){if(!N)throw new Error("disease-tag disease Input requires LinkableDisease.");this._disease=N}get disease(){return this._disease}idFunction(){return this.disease.id}}Z.\u0275fac=function(){let j;return function(q){return(j||(j=i.n5z(Z)))(q||Z)}}(),Z.\u0275cmp=i.Xpm({type:Z,selectors:[["cvc-disease-tag"]],inputs:{disease:"disease",enablePopover:"enablePopover",truncateLongName:"truncateLongName"},features:[i.qOj],decls:7,vars:2,consts:[[4,"ngIf","ngIfElse"],["tag",""],["unlinked",""],["tagContent",""],[3,"routerLink"],[3,"ngTemplateOutlet"],["nz-popover","","nzPopoverPlacement","right",3,"nzPopoverMouseEnterDelay","nzPopoverContent","nzPopoverTrigger","nzMode","nzOnClose"],["diseasePopover",""],[3,"diseaseId"],["nz-icon","","nzType","civic-disease","nzTheme","twotone","nzTwotoneColor","#E62F76"],["fullName",""]],template:function(N,q){if(1&N&&(i.YNc(0,O,3,2,"ng-container",0),i.YNc(1,S,4,5,"ng-template",null,1,i.W1O),i.YNc(3,P,1,1,"ng-template",null,2,i.W1O),i.YNc(5,se,4,2,"ng-template",null,3,i.W1O)),2&N){const Y=i.MAs(4);i.Q6J("ngIf",q.linked)("ngIfElse",Y)}},dependencies:[m.O5,m.tP,l.rH,s.j,L.lU,R.Ls,T.I,M.W],encapsulation:2,changeDetection:0})},8845:(Et,Me,a)=>{a.d(Me,{Q:()=>M});var t=a(6895),i=a(9116),m=a(6672),l=a(6581),s=a(1102),L=a(3638),R=a(9444),T=a(4650);class M{}M.\u0275fac=function(O){return new(O||M)},M.\u0275mod=T.oAB({type:M}),M.\u0275inj=T.cJS({imports:[t.ez,i.Bz,m.X,l.$6,s.PV,R.s,L.t]})},285:(Et,Me,a)=>{a.d(Me,{_:()=>qt});var t=a(4004),i=a(9300),m=a(3240),l=a(4650),s=a(7630),L=a(6895),R=a(9116),T=a(1102),M=a(1971),b=a(3679),O=a(9194),F=a(6672),V=a(6903),S=a(8823),e=a(5797),P=a(7491),w=a(3172),de=a(783),se=a(4590),Z=a(5105),j=a(7230),N=a(2635),q=a(4110),Y=a(160);function k(lt,kt){if(1&lt&&(l.ynx(0),l._UZ(1,"i",17),l.ALo(2,"entityColor"),l._uU(3),l.BQk()),2&lt){const sn=l.oxw(2).ngIf;l.xp6(1),l.Q6J("nzTwotoneColor",l.lcZ(2,2,"EvidenceItem")),l.xp6(2),l.hij(" ",sn.name," ")}}function me(lt,kt){if(1&lt&&l._UZ(0,"cvc-status-tag",18),2&lt){const sn=l.oxw(2).ngIf;l.Q6J("status",sn.status)}}function fe(lt,kt){1&lt&&(l.TgZ(0,"nz-space"),l.YNc(1,k,4,4,"ng-container",15),l.YNc(2,me,1,1,"cvc-status-tag",16),l.qZA())}function ne(lt,kt){if(1&lt&&l._UZ(0,"cvc-molecular-profile-tag",19),2&lt){const sn=l.oxw().ngIf;l.Q6J("molecularProfile",sn.molecularProfile)("enablePopover",!1)("truncateLongName",!0)}}function Ce(lt,kt){if(1&lt&&(l.ynx(0),l._uU(1),l.BQk()),2&lt){const sn=kt.ngIf;l.xp6(1),l.hij(" ",sn," ")}}function H(lt,kt){if(1&lt&&(l.TgZ(0,"nz-descriptions",20)(1,"nz-descriptions-item",21),l._UZ(2,"cvc-mp-tag-name",22),l.qZA(),l.TgZ(3,"nz-descriptions-item",23),l._UZ(4,"cvc-source-tag",24),l.qZA()()),2&lt){const sn=l.oxw().ngIf;l.Q6J("nzColumn",1),l.xp6(2),l.Q6J("nameSegments",sn.molecularProfile.parsedName)("enablePopover",!1),l.xp6(2),l.Q6J("source",sn.source)("enablePopover",!1)}}function X(lt,kt){if(1&lt&&(l.ynx(0),l._UZ(1,"cvc-disease-tag",35),l.BQk()),2&lt){const sn=l.oxw(2).ngIf;l.xp6(1),l.Q6J("enablePopover",!1)("disease",sn.disease)("truncateLongName",!0)}}function ve(lt,kt){1&lt&&l._uU(0," N/A ")}function Ee(lt,kt){if(1&lt&&(l.TgZ(0,"span"),l._UZ(1,"cvc-therapy-tag",38),l.qZA()),2&lt){const sn=kt.$implicit;l.xp6(1),l.Q6J("enablePopover",!1)("therapy",sn)("truncateLongName",!0)}}function It(lt,kt){if(1&lt&&(l.ynx(0),l._uU(1),l.ALo(2,"titlecase"),l.BQk()),2&lt){const sn=l.oxw(3).ngIf;l.xp6(1),l.hij(" ",l.lcZ(2,1,sn.therapyInteractionType)," ")}}function St(lt,kt){if(1&lt&&(l.TgZ(0,"nz-descriptions-item",36),l.YNc(1,Ee,2,3,"span",37),l.YNc(2,It,3,3,"ng-container",1),l.qZA()),2&lt){const sn=l.oxw(2).ngIf;l.xp6(1),l.Q6J("ngForOf",sn.therapies),l.xp6(1),l.Q6J("ngIf",sn.therapies.length>1)}}function on(lt,kt){if(1&lt&&(l.TgZ(0,"span"),l._UZ(1,"cvc-phenotype-tag",40),l.qZA()),2&lt){const sn=kt.$implicit;l.xp6(1),l.Q6J("enablePopover",!1)("phenotype",sn)}}function it(lt,kt){if(1&lt&&(l.TgZ(0,"nz-descriptions-item",39),l.YNc(1,on,2,2,"span",37),l.qZA()),2&lt){const sn=l.oxw(2).ngIf;l.xp6(1),l.Q6J("ngForOf",sn.phenotypes)}}function mt(lt,kt){if(1&lt&&(l.TgZ(0,"nz-descriptions",20)(1,"nz-descriptions-item",25),l._uU(2),l.qZA(),l.TgZ(3,"nz-descriptions-item",26),l._uU(4),l.ALo(5,"evidenceEnumDisplay"),l.qZA(),l.TgZ(6,"nz-descriptions-item",27),l._uU(7),l.ALo(8,"evidenceEnumDisplay"),l.qZA(),l.TgZ(9,"nz-descriptions-item",28),l._uU(10),l.ALo(11,"evidenceEnumDisplay"),l.qZA(),l.TgZ(12,"nz-descriptions-item",29),l._uU(13),l._UZ(14,"i",30),l.qZA(),l.TgZ(15,"nz-descriptions-item",31),l.YNc(16,X,2,3,"ng-container",9),l.YNc(17,ve,1,0,"ng-template",null,32,l.W1O),l.qZA(),l.YNc(19,St,3,2,"nz-descriptions-item",33),l.YNc(20,it,2,1,"nz-descriptions-item",34),l.qZA()),2&lt){const sn=l.MAs(18),wn=l.oxw().ngIf;l.Q6J("nzColumn",2),l.xp6(2),l.hij(" ",wn.evidenceLevel," "),l.xp6(2),l.hij(" ",l.lcZ(5,10,wn.evidenceType)," "),l.xp6(3),l.hij(" ",l.lcZ(8,12,wn.evidenceDirection)," "),l.xp6(3),l.hij(" ",l.lcZ(11,14,wn.significance)," "),l.xp6(3),l.hij(" ",wn.evidenceRating,""),l.xp6(3),l.Q6J("ngIf",wn.disease)("ngIfElse",sn),l.xp6(3),l.Q6J("ngIf",wn.therapies.length>0),l.xp6(1),l.Q6J("ngIf",wn.phenotypes.length>0)}}function Pt(lt,kt){if(1&lt&&(l.TgZ(0,"a",41)(1,"nz-tag",42),l._UZ(2,"i",43),l._uU(3),l.qZA()()),2&lt){const sn=l.oxw().ngIf;l.MGl("routerLink","/evidence/",sn.id,"/flags"),l.xp6(3),l.hij(" Flags (",sn.flags.totalCount,") ")}}function Qt(lt,kt){if(1&lt&&(l.TgZ(0,"a",41)(1,"nz-tag",44),l._UZ(2,"i",45),l._uU(3),l.qZA()()),2&lt){const sn=l.oxw().ngIf;l.MGl("routerLink","/evidence/",sn.id,"/revisions"),l.xp6(3),l.hij(" Revisions (",sn.revisions.totalCount,") ")}}function mn(lt,kt){if(1&lt&&(l.TgZ(0,"a",41)(1,"nz-tag",46),l._UZ(2,"i",47),l._uU(3),l.qZA()()),2&lt){const sn=l.oxw().ngIf;l.MGl("routerLink","/evidence/",sn.id,"/comments"),l.xp6(3),l.hij(" Comments (",sn.comments.totalCount,") ")}}function Lt(lt,kt){if(1&lt&&(l.ynx(0),l.TgZ(1,"nz-card",3),l.YNc(2,fe,3,0,"ng-template",null,4,l.W1O),l.YNc(4,ne,1,3,"ng-template",null,5,l.W1O),l.TgZ(6,"nz-row")(7,"nz-col",6)(8,"div",7)(9,"p",8),l.YNc(10,Ce,2,1,"ng-container",9),l.qZA()()()(),l.TgZ(11,"nz-space",10),l.YNc(12,H,5,5,"nz-descriptions",11),l.YNc(13,mt,21,16,"nz-descriptions",11),l.qZA(),l.TgZ(14,"nz-row",12)(15,"nz-col",6)(16,"nz-space",13),l.YNc(17,Pt,4,2,"a",14),l.YNc(18,Qt,4,2,"a",14),l.YNc(19,mn,4,2,"a",14),l.qZA()()()(),l.BQk()),2&lt){const sn=kt.ngIf,wn=l.MAs(3),zn=l.MAs(5);l.oxw();const Yt=l.MAs(4);l.xp6(1),l.Q6J("nzTitle",wn)("nzExtra",zn),l.xp6(8),l.Q6J("nzEllipsisRows",4),l.xp6(1),l.Q6J("ngIf",sn.description)("ngIfElse",Yt)}}function yt(lt,kt){1&lt&&l._uU(0," Evidence item has not been provided a description.\n")}class qt{constructor(kt){this.gql=kt}ngOnInit(){if(null==this.evidenceId)throw new Error("cvc-evidence-popover requires valid evidenceId input.");this.evidence$=this.gql.watch({evidenceId:this.evidenceId}).valueChanges.pipe((0,t.U)(({data:kt})=>kt?.evidenceItem),(0,i.h)(m.ep))}}qt.\u0275fac=function(kt){return new(kt||qt)(l.Y36(s.Ybm))},qt.\u0275cmp=l.Xpm({type:qt,selectors:[["cvc-evidence-popover"]],inputs:{evidenceId:"evidenceId"},decls:5,vars:3,consts:[["id","popover-content"],[4,"ngIf"],["noDescription",""],["nzBordered","false","id","card-content",3,"nzTitle","nzExtra"],["cardTitle",""],["molecularProfile",""],["nzSpan","24"],[1,"popover-text"],["nz-typography","","nzEllipsis","","nzExpandable","",3,"nzEllipsisRows"],[4,"ngIf","ngIfElse"],["nzDirection","vertical","nzSize","small"],["nzSize","small","nzBordered","true",3,"nzColumn",4,"nzSpaceItem"],["id","entity-child-counts"],["nzSize","small"],[3,"routerLink",4,"nzSpaceItem"],[4,"nzSpaceItem"],["style","font-weight: normal",3,"status",4,"nzSpaceItem"],["nz-icon","","nzTheme","twotone","nzType","civic-evidence",3,"nzTwotoneColor"],[2,"font-weight","normal",3,"status"],[3,"molecularProfile","enablePopover","truncateLongName"],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","MP Expression"],[3,"nameSegments","enablePopover"],["nzTitle","Source","nzSpan","2"],[3,"source","enablePopover"],["nzTitle","Level"],["nzTitle","Type"],["nzTitle","Direction"],["nzTitle","Clinical Significance","nzSpan","2"],["nzTitle","Rating"],["nz-icon","","nzType","star","nzTheme","fill"],["nzTitle","Disease"],["noDisease",""],["nzTitle","Therapies","nzSpan","2",4,"ngIf"],["nzTitle","Phenotypes","nzSpan","2",4,"ngIf"],[3,"enablePopover","disease","truncateLongName"],["nzTitle","Therapies","nzSpan","2"],[4,"ngFor","ngForOf"],[3,"enablePopover","therapy","truncateLongName"],["nzTitle","Phenotypes","nzSpan","2"],[3,"enablePopover","phenotype"],[3,"routerLink"],["nzColor","red"],["nz-icon","","nzType","civic-flag"],["nzColor","orange"],["nz-icon","","nzType","civic-revision"],["nzColor","blue"],["nz-icon","","nzType","civic-comment"]],template:function(kt,sn){1&kt&&(l.TgZ(0,"div",0),l.YNc(1,Lt,20,5,"ng-container",1),l.ALo(2,"ngrxPush"),l.qZA(),l.YNc(3,yt,1,0,"ng-template",null,2,l.W1O)),2&kt&&(l.xp6(1),l.Q6J("ngIf",l.lcZ(2,1,sn.evidence$)))},dependencies:[L.sg,L.O5,R.rH,T.Ls,M.bd,b.t3,b.SK,O.R7,O.uj,F.j,V.NU,V.$1,S.ZU,e.T,P.n,w.i,de.T,se.h,Z.p,j.C,L.rS,N.fM,q.Do,Y.a],styles:["[_nghost-%COMP%]{display:block;margin:-8px -12px}[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}[_nghost-%COMP%]     .ant-descriptions-view{border:none}[_nghost-%COMP%]     #entity-child-counts{border-top:1px solid #f0f0f0;padding:8px}[_nghost-%COMP%]     #entity-child-counts nz-space{width:100%}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child nz-tag{margin-right:0}.popover-text[_ngcontent-%COMP%]{width:100%;padding:8px;border-bottom:1px solid #f0f0f0}#popover-content[_ngcontent-%COMP%]{min-width:350px;max-width:500px;min-height:125px}"]})},1698:(Et,Me,a)=>{a.d(Me,{f:()=>Z});var t=a(6895),i=a(1971),m=a(3679),l=a(9194),s=a(9116),L=a(6672),R=a(8845),T=a(3973),M=a(2635),b=a(6903),O=a(1102),F=a(9444),V=a(2811),S=a(592),e=a(8823),P=a(3309),w=a(4126),de=a(701),se=a(4650);class Z{}Z.\u0275fac=function(N){return new(N||Z)},Z.\u0275mod=se.oAB({type:Z}),Z.\u0275inj=se.cJS({imports:[t.ez,s.Bz,M._N,M.pP,O.PV,i.vh,m.Jb,l.q6,L.X,b.zf,e.ZJ,F.s,de.N,R.Q,T.y,V.s,S.x,w.u,P.r]})},4281:(Et,Me,a)=>{a.d(Me,{Q:()=>q});var t=a(3240),i=a(4004),m=a(9300),l=a(4650),s=a(7630),L=a(6895),R=a(9116),T=a(1971),M=a(3679),b=a(9194),O=a(6672),F=a(1102),V=a(6903),S=a(2635),e=a(160);function P(Y,k){if(1&Y&&(l._UZ(0,"i",11),l.ALo(1,"entityColor"),l._uU(2)),2&Y){const me=l.oxw().ngIf;l.Q6J("nzTwotoneColor",l.lcZ(1,2,"Gene")),l.xp6(2),l.hij(" ",me.officialName," ")}}function w(Y,k){if(1&Y&&(l.TgZ(0,"nz-tag"),l._uU(1),l.qZA()),2&Y){const me=k.$implicit;l.xp6(1),l.Oqu(me)}}function de(Y,k){if(1&Y&&(l.TgZ(0,"nz-descriptions-item",12),l.YNc(1,w,2,1,"nz-tag",13),l.qZA()),2&Y){const me=l.oxw().ngIf;l.xp6(1),l.Q6J("ngForOf",me.geneAliases)}}function se(Y,k){if(1&Y&&(l.TgZ(0,"a",14)(1,"nz-tag",15),l._UZ(2,"i",16),l._uU(3),l.qZA()()),2&Y){const me=l.oxw().ngIf;l.MGl("routerLink","/genes/",me.id,"/flags"),l.xp6(3),l.hij(" Flags (",me.flags.totalCount,") ")}}function Z(Y,k){if(1&Y&&(l.TgZ(0,"a",14)(1,"nz-tag",17),l._UZ(2,"i",18),l._uU(3),l.qZA()()),2&Y){const me=l.oxw().ngIf;l.MGl("routerLink","/genes/",me.id,"/revisions"),l.xp6(3),l.hij(" Revisions (",me.revisions.totalCount,") ")}}function j(Y,k){if(1&Y&&(l.TgZ(0,"a",14)(1,"nz-tag",19),l._UZ(2,"i",20),l._uU(3),l.qZA()()),2&Y){const me=l.oxw().ngIf;l.MGl("routerLink","/genes/",me.id,"/comments"),l.xp6(3),l.hij(" Comments (",me.comments.totalCount,") ")}}function N(Y,k){if(1&Y&&(l.ynx(0),l.TgZ(1,"nz-card",2),l.YNc(2,P,3,4,"ng-template",null,3,l.W1O),l.TgZ(4,"nz-descriptions",4),l.YNc(5,de,2,1,"nz-descriptions-item",5),l.TgZ(6,"nz-descriptions-item",6),l._uU(7),l.qZA()(),l.TgZ(8,"nz-row",7)(9,"nz-col",8)(10,"nz-space",9),l.YNc(11,se,4,2,"a",10),l.YNc(12,Z,4,2,"a",10),l.YNc(13,j,4,2,"a",10),l.qZA()()()(),l.BQk()),2&Y){const me=k.ngIf,fe=l.MAs(3);l.xp6(1),l.Q6J("nzTitle",fe),l.xp6(3),l.Q6J("nzColumn",2),l.xp6(1),l.Q6J("ngIf",me.geneAliases.length>0),l.xp6(2),l.hij(" ",me.variants.totalCount," ")}}class q{constructor(k){this.gql=k}ngOnInit(){if(null==this.geneId)throw new Error("cvc-gene-popover requires valid geneId input.");this.gene$=this.gql.watch({geneId:this.geneId}).valueChanges.pipe((0,i.U)(({data:k})=>k?.gene),(0,m.h)(t.ep))}}q.\u0275fac=function(k){return new(k||q)(l.Y36(s.rJ8))},q.\u0275cmp=l.Xpm({type:q,selectors:[["cvc-gene-popover"]],inputs:{geneId:"geneId"},decls:3,vars:3,consts:[["id","popover-content"],[4,"ngIf"],["nzBordered","false","id","card-content",3,"nzTitle"],["cardTitle",""],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","Aliases","nzSpan","2",4,"ngIf"],["nzTitle","Variants"],["id","entity-child-counts"],["nzSpan","24"],["nzSize","small"],[3,"routerLink",4,"nzSpaceItem"],["nz-icon","","nzTheme","twotone","nzType","civic-gene",3,"nzTwotoneColor"],["nzTitle","Aliases","nzSpan","2"],[4,"ngFor","ngForOf"],[3,"routerLink"],["nzColor","red"],["nz-icon","","nzType","civic-flag"],["nzColor","orange"],["nz-icon","","nzType","civic-revision"],["nzColor","blue"],["nz-icon","","nzType","civic-comment"]],template:function(k,me){1&k&&(l.TgZ(0,"div",0),l.YNc(1,N,14,4,"ng-container",1),l.ALo(2,"ngrxPush"),l.qZA()),2&k&&(l.xp6(1),l.Q6J("ngIf",l.lcZ(2,1,me.gene$)))},dependencies:[L.sg,L.O5,R.rH,T.bd,M.t3,M.SK,b.R7,b.uj,O.j,F.Ls,V.NU,V.$1,S.fM,e.a],styles:["[_nghost-%COMP%]{display:block;margin:-8px -12px}[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}[_nghost-%COMP%]     .ant-descriptions-view{border:none}[_nghost-%COMP%]     #entity-child-counts{border-top:1px solid #f0f0f0;padding:8px}[_nghost-%COMP%]     #entity-child-counts nz-space{width:100%}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child nz-tag{margin-right:0}.popover-text[_ngcontent-%COMP%]{width:100%;padding:8px;border-bottom:1px solid #f0f0f0}#popover-content[_ngcontent-%COMP%]{min-width:350px;max-width:500px;min-height:125px}"]})},6292:(Et,Me,a)=>{a.d(Me,{w:()=>F});var t=a(6895),i=a(9116),m=a(9444),l=a(2635),s=a(1971),L=a(9194),R=a(3679),T=a(1102),M=a(6903),b=a(6672),O=a(4650);class F{}F.\u0275fac=function(S){return new(S||F)},F.\u0275mod=O.oAB({type:F}),F.\u0275inj=O.cJS({imports:[t.ez,i.Bz,l._N,l.pP,s.vh,R.Jb,L.q6,b.X,T.PV,M.zf,m.s]})},3965:(Et,Me,a)=>{a.d(Me,{H:()=>q});var t=a(6654),i=a(9771),m=a(4650),l=a(6895),s=a(9116),L=a(6672),R=a(6581),T=a(1102),M=a(4281),b=a(1730),O=a(4557),F=a(160);function V(Y,k){}function S(Y,k){if(1&Y&&(m.ynx(0),m.TgZ(1,"a",4),m.YNc(2,V,0,0,"ng-template",5),m.qZA(),m.BQk()),2&Y){const me=m.oxw(),fe=m.MAs(2);m.xp6(1),m.Q6J("routerLink",me.gene.link),m.xp6(1),m.Q6J("ngTemplateOutlet",fe)}}function e(Y,k){}function P(Y,k){if(1&Y&&m._UZ(0,"cvc-gene-popover",8),2&Y){const me=m.oxw(2);m.Q6J("geneId",me.gene.id)}}function w(Y,k){if(1&Y){const me=m.EpF();m.TgZ(0,"nz-tag",6),m.NdJ("nzOnClose",function(ne){m.CHM(me);const Ce=m.oxw();return m.KtG(Ce.itemClosed(ne))}),m.YNc(1,e,0,0,"ng-template",5),m.qZA(),m.YNc(2,P,1,1,"ng-template",null,7,m.W1O)}if(2&Y){const me=m.MAs(3),fe=m.oxw(),ne=m.MAs(6);m.Q6J("nzPopoverMouseEnterDelay",fe.onCloseClicked?0:.5)("nzPopoverContent",me)("nzPopoverTrigger",fe.enablePopover?"hover":null)("nzMode",fe.onCloseClicked?"closeable":"default"),m.xp6(1),m.Q6J("ngTemplateOutlet",ne)}}function de(Y,k){}function se(Y,k){if(1&Y&&m.YNc(0,de,0,0,"ng-template",5),2&Y){m.oxw();const me=m.MAs(2);m.Q6J("ngTemplateOutlet",me)}}function Z(Y,k){if(1&Y&&(m.ynx(0),m._uU(1),m.ALo(2,"truncate"),m.BQk()),2&Y){const me=m.oxw(2);m.xp6(1),m.hij(" ",m.xi3(2,1,me.gene.name,12)," ")}}function j(Y,k){if(1&Y&&m._uU(0),2&Y){const me=m.oxw(2);m.hij(" ",me.gene.name," ")}}function N(Y,k){if(1&Y&&(m.TgZ(0,"cvc-icon-badges",9),m._UZ(1,"i",10),m.ALo(2,"entityColor"),m.qZA(),m.YNc(3,Z,3,4,"ng-container",0),m.YNc(4,j,1,1,"ng-template",null,11,m.W1O)),2&Y){const me=m.MAs(5),fe=m.oxw();m.Q6J("flagged",fe.gene.flagged)("entityColor",fe.iconColor),m.xp6(1),m.Q6J("nzTwotoneColor",m.lcZ(2,5,"Gene")),m.xp6(2),m.Q6J("ngIf",fe.truncateLongName)("ngIfElse",me)}}class q extends t.a{constructor(){super(),this.enablePopover=!0,this.truncateLongName=!1,this.iconColor=(0,i.f)("Gene")}idFunction(){return this.gene.id}ngOnInit(){if(super.ngOnInit(),void 0===this.gene)throw new Error("cvc-gene-tag requires LinkableGene input, none supplied.")}}q.\u0275fac=function(k){return new(k||q)},q.\u0275cmp=m.Xpm({type:q,selectors:[["cvc-gene-tag"]],inputs:{gene:"gene",enablePopover:"enablePopover",truncateLongName:"truncateLongName"},features:[m.qOj],decls:7,vars:2,consts:[[4,"ngIf","ngIfElse"],["tag",""],["unlinked",""],["tagContent",""],[3,"routerLink"],[3,"ngTemplateOutlet"],["nz-popover","",3,"nzPopoverMouseEnterDelay","nzPopoverContent","nzPopoverTrigger","nzMode","nzOnClose"],["genePopover",""],[3,"geneId"],[3,"flagged","entityColor"],["nz-icon","","nzType","civic-gene","nzTheme","twotone",3,"nzTwotoneColor"],["fullName",""]],template:function(k,me){if(1&k&&(m.YNc(0,S,3,2,"ng-container",0),m.YNc(1,w,4,5,"ng-template",null,1,m.W1O),m.YNc(3,se,1,1,"ng-template",null,2,m.W1O),m.YNc(5,N,6,7,"ng-template",null,3,m.W1O)),2&k){const fe=m.MAs(4);m.Q6J("ngIf",me.linked)("ngIfElse",fe)}},dependencies:[l.O5,l.tP,s.rH,L.j,R.lU,T.Ls,M.Q,b.b,O.W,F.a],encapsulation:2,changeDetection:0})},1229:(Et,Me,a)=>{a.d(Me,{U:()=>O});var t=a(6895),i=a(9116),m=a(6672),l=a(1102),s=a(6581),L=a(6292),R=a(9444),T=a(48),M=a(6429),b=a(4650);class O{}O.\u0275fac=function(V){return new(V||O)},O.\u0275mod=b.oAB({type:O}),O.\u0275inj=b.cJS({imports:[t.ez,i.Bz,m.X,s.$6,l.PV,T.mS,R.s,L.w,M.C]})},3314:(Et,Me,a)=>{a.d(Me,{_:()=>fe});var t=a(3240),i=a(4004),m=a(9300),l=a(4650),s=a(7630),L=a(6895),R=a(9116),T=a(1971),M=a(3679),b=a(9194),O=a(6672),F=a(1102),V=a(6903),S=a(6715),e=a(7230),P=a(2635);function w(ne,Ce){if(1&ne&&(l._UZ(0,"i",16),l._uU(1)),2&ne){const H=l.oxw().ngIf;l.xp6(1),l.hij(" ",H.name," ")}}function de(ne,Ce){if(1&ne&&(l.TgZ(0,"nz-descriptions-item",17),l._uU(1),l.qZA()),2&ne){const H=l.oxw().ngIf;l.xp6(1),l.hij(" ",H.evidenceItems.totalCount," ")}}function se(ne,Ce){if(1&ne&&(l.TgZ(0,"nz-descriptions-item",18),l._uU(1),l.qZA()),2&ne){const H=l.oxw().ngIf;l.xp6(1),l.hij(" ",H.assertions.totalCount," ")}}function Z(ne,Ce){if(1&ne&&(l.TgZ(0,"nz-tag"),l._uU(1),l.qZA()),2&ne){const H=Ce.$implicit;l.xp6(1),l.Oqu(H)}}function j(ne,Ce){if(1&ne&&(l.ynx(0),l.TgZ(1,"cvc-tag-list"),l.YNc(2,Z,2,1,"nz-tag",19),l.qZA(),l.BQk()),2&ne){const H=l.oxw().ngIf;l.xp6(2),l.Q6J("ngForOf",H.molecularProfileAliases)}}function N(ne,Ce){1&ne&&(l.TgZ(0,"span",20),l._uU(1,"None specified"),l.qZA())}function q(ne,Ce){if(1&ne&&(l.TgZ(0,"a",21)(1,"nz-tag",22),l._UZ(2,"i",23),l._uU(3),l.qZA()()),2&ne){const H=l.oxw().ngIf;l.MGl("routerLink","/molecular-profiles/",H.id,"/flags"),l.xp6(3),l.hij(" Flags (",H.flags.totalCount,") ")}}function Y(ne,Ce){if(1&ne&&(l.TgZ(0,"a",21)(1,"nz-tag",24),l._UZ(2,"i",25),l._uU(3),l.qZA()()),2&ne){const H=l.oxw().ngIf;l.MGl("routerLink","/molecular-profiles/",H.id,"/revisions"),l.xp6(3),l.hij(" Revisions (",H.revisions.totalCount,") ")}}function k(ne,Ce){if(1&ne&&(l.TgZ(0,"a",21)(1,"nz-tag",26),l._UZ(2,"i",27),l._uU(3),l.qZA()()),2&ne){const H=l.oxw().ngIf;l.MGl("routerLink","/molecular-profiles/",H.id,"/comments"),l.xp6(3),l.hij(" Comments (",H.comments.totalCount,") ")}}function me(ne,Ce){if(1&ne&&(l.ynx(0),l.TgZ(1,"nz-card",2),l.YNc(2,w,2,1,"ng-template",null,3,l.W1O),l.TgZ(4,"nz-descriptions",4)(5,"nz-descriptions-item",5),l._UZ(6,"cvc-mp-tag-name",6),l.qZA(),l.YNc(7,de,2,1,"nz-descriptions-item",7),l.YNc(8,se,2,1,"nz-descriptions-item",8),l.TgZ(9,"nz-descriptions-item",9),l.YNc(10,j,3,1,"ng-container",10),l.YNc(11,N,2,0,"ng-template",null,11,l.W1O),l.qZA()(),l.TgZ(13,"nz-row",12)(14,"nz-col",13)(15,"nz-space",14),l.YNc(16,q,4,2,"a",15),l.YNc(17,Y,4,2,"a",15),l.YNc(18,k,4,2,"a",15),l.qZA()()()(),l.BQk()),2&ne){const H=Ce.ngIf,X=l.MAs(3),ve=l.MAs(12);l.xp6(1),l.Q6J("nzTitle",X),l.xp6(3),l.Q6J("nzColumn",2),l.xp6(2),l.Q6J("nameSegments",H.parsedName)("enablePopover",!1),l.xp6(1),l.Q6J("ngIf",H.evidenceItems.totalCount>0),l.xp6(1),l.Q6J("ngIf",H.assertions.totalCount>0),l.xp6(2),l.Q6J("ngIf",H.molecularProfileAliases.length>0)("ngIfElse",ve)}}class fe{constructor(Ce){this.gql=Ce}ngOnInit(){if(void 0===this.molecularProfileId)throw new Error("Must pass a molecular profile ID into the molecular profile popover component.");this.molecularProfile$=this.gql.watch({molecularProfileId:this.molecularProfileId}).valueChanges.pipe((0,i.U)(({data:Ce})=>Ce?.molecularProfile),(0,m.h)(t.ep))}}fe.\u0275fac=function(Ce){return new(Ce||fe)(l.Y36(s.DkJ))},fe.\u0275cmp=l.Xpm({type:fe,selectors:[["cvc-molecular-profile-popover"]],inputs:{molecularProfileId:"molecularProfileId"},decls:3,vars:3,consts:[["id","popover-content"],[4,"ngIf"],["nzBordered","false","id","card-content",3,"nzTitle"],["cardTitle",""],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","MP Expression","nzSpan","2"],[3,"nameSegments","enablePopover"],["nzTitle","Evidence Items","nzSpan","2",4,"ngIf"],["nzTitle","Assertions","nzSpan","2",4,"ngIf"],["nzTitle","Aliases"],[4,"ngIf","ngIfElse"],["noAliases",""],["id","entity-child-counts"],["nzSpan","24"],["nzSize","small"],[3,"routerLink",4,"nzSpaceItem"],["nz-icon","","nzType","civic:molecularprofile"],["nzTitle","Evidence Items","nzSpan","2"],["nzTitle","Assertions","nzSpan","2"],[4,"ngFor","ngForOf"],["nz-typography","","nzType","secondary"],[3,"routerLink"],["nzColor","red"],["nz-icon","","nzType","civic-flag"],["nzColor","orange"],["nz-icon","","nzType","civic-revision"],["nzColor","blue"],["nz-icon","","nzType","civic-comment"]],template:function(Ce,H){1&Ce&&(l.TgZ(0,"div",0),l.YNc(1,me,19,8,"ng-container",1),l.ALo(2,"ngrxPush"),l.qZA()),2&Ce&&(l.xp6(1),l.Q6J("ngIf",l.lcZ(2,1,H.molecularProfile$)))},dependencies:[L.sg,L.O5,R.rH,T.bd,M.t3,M.SK,b.R7,b.uj,O.j,F.Ls,V.NU,V.$1,S.$,e.C,P.fM],styles:["[_nghost-%COMP%]{display:block;margin:-8px -12px}[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}[_nghost-%COMP%]     .ant-descriptions-view{border:none}[_nghost-%COMP%]     #entity-child-counts{border-top:1px solid #f0f0f0;padding:8px}[_nghost-%COMP%]     #entity-child-counts nz-space{width:100%}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child nz-tag{margin-right:0}.popover-text[_ngcontent-%COMP%]{width:100%;padding:8px;border-bottom:1px solid #f0f0f0}#popover-content[_ngcontent-%COMP%]{min-width:350px;max-width:500px;min-height:125px}"]})},4398:(Et,Me,a)=>{a.d(Me,{_:()=>e});var t=a(6895),i=a(9116),m=a(2635),l=a(1971),s=a(3679),L=a(9194),R=a(6672),T=a(1102),M=a(6903),b=a(1229),O=a(4989),F=a(3309),V=a(897),S=a(4650);class e{}e.\u0275fac=function(w){return new(w||e)},e.\u0275mod=S.oAB({type:e}),e.\u0275inj=S.cJS({imports:[t.ez,i.Bz,m._N,m.pP,l.vh,s.Jb,L.q6,R.X,T.PV,M.zf,b.U,O.X,V.$,F.r]})},7230:(Et,Me,a)=>{a.d(Me,{C:()=>V});var t=a(4650),i=a(6895),m=a(5457),l=a(3965);class L{constructor(){}}function R(S,e){if(1&S&&t._UZ(0,"span",3),2&S){const P=t.oxw().$implicit;t.Q6J("innerHtml",P.text,t.oJD)}}function T(S,e){if(1&S&&t._UZ(0,"cvc-gene-tag",6),2&S){const P=t.oxw().$implicit,w=t.oxw(3);t.Q6J("gene",P)("enablePopover",w.enablePopover)}}function M(S,e){if(1&S&&(t.ynx(0),t.YNc(1,T,1,2,"cvc-gene-tag",5),t.BQk()),2&S){const P=e.$implicit;t.xp6(1),t.Q6J("ngIf","Gene"==P.__typename)}}L.\u0275fac=function(e){return new(e||L)},L.\u0275cmp=t.Xpm({type:L,selectors:[["cvc-tag-group"]],ngContentSelectors:["*"],decls:1,vars:0,template:function(e,P){1&e&&(t.F$t(),t.Hsn(0))},styles:["[_nghost-%COMP%]    >*:first-child   nz-tag{border-top-right-radius:0;border-bottom-right-radius:0;margin-right:0}[_nghost-%COMP%]    >*:last-child   nz-tag{border-top-left-radius:0;border-bottom-left-radius:0;margin-left:-1px;border-left-color:#e9e9e9}"]});const b=function(S){return[S]};function O(S,e){if(1&S&&(t.ynx(0),t.TgZ(1,"cvc-tag-group"),t.YNc(2,M,2,1,"ng-container",0),t._UZ(3,"cvc-variant-tag",4),t.qZA(),t.BQk()),2&S){const P=t.oxw(),w=P.index,de=P.$implicit,se=t.oxw();t.xp6(2),t.Q6J("ngForOf",t.VKq(3,b,se.nameSegments[w-1])),t.xp6(1),t.Q6J("variant",de)("enablePopover",se.enablePopover)}}function F(S,e){if(1&S&&(t.ynx(0),t.YNc(1,R,1,1,"span",1),t.YNc(2,O,4,5,"ng-container",2),t.BQk()),2&S){const P=e.$implicit;t.xp6(1),t.Q6J("ngIf","MolecularProfileTextSegment"==P.__typename),t.xp6(1),t.Q6J("ngIf","Variant"==P.__typename)}}class V{constructor(){this.enablePopover=!0}ngOnInit(){if(void 0===this.nameSegments)throw new Error("Must pass a list of molecular profile name segments into mp name component.")}}V.\u0275fac=function(e){return new(e||V)},V.\u0275cmp=t.Xpm({type:V,selectors:[["cvc-mp-tag-name"]],inputs:{nameSegments:"nameSegments",enablePopover:"enablePopover"},decls:1,vars:1,consts:[[4,"ngFor","ngForOf"],["class","text-segment",3,"innerHtml",4,"ngIf"],[4,"ngIf"],[1,"text-segment",3,"innerHtml"],[3,"variant","enablePopover"],[3,"gene","enablePopover",4,"ngIf"],[3,"gene","enablePopover"]],template:function(e,P){1&e&&t.YNc(0,F,3,2,"ng-container",0),2&e&&t.Q6J("ngForOf",P.nameSegments)},dependencies:[i.sg,i.O5,m.I,l.H,L],styles:[".text-segment[_ngcontent-%COMP%]{display:inline-block;margin-right:8px;font-weight:700;color:#0009;font-size:14px;line-height:12px}"]})},3309:(Et,Me,a)=>{a.d(Me,{r:()=>T});var t=a(6895),i=a(7043),m=a(1229),l=a(6672),s=a(1102),L=a(4650);class R{}R.\u0275fac=function(b){return new(b||R)},R.\u0275mod=L.oAB({type:R}),R.\u0275inj=L.cJS({imports:[t.ez]});class T{}T.\u0275fac=function(b){return new(b||T)},T.\u0275mod=L.oAB({type:T}),T.\u0275inj=L.cJS({imports:[t.ez,l.X,s.PV,i.Q,m.U,R]})},5105:(Et,Me,a)=>{a.d(Me,{p:()=>me});var t=a(6654),i=a(9771),m=a(4650),l=a(6895),s=a(9116),L=a(6672),R=a(6581),T=a(1102),M=a(3314),b=a(4557);function O(fe,ne){}function F(fe,ne){if(1&fe&&(m.ynx(0),m.TgZ(1,"a",5),m.YNc(2,O,0,0,"ng-template",6),m.qZA(),m.BQk()),2&fe){const Ce=m.oxw(),H=m.MAs(2);m.xp6(1),m.Q6J("routerLink",Ce.molecularProfile.link),m.xp6(1),m.Q6J("ngTemplateOutlet",H)}}function V(fe,ne){}const S=function(fe){return{deprecated:fe}};function e(fe,ne){if(1&fe){const Ce=m.EpF();m.TgZ(0,"nz-tag",9),m.NdJ("nzOnClose",function(X){m.CHM(Ce);const ve=m.oxw(2);return m.KtG(ve.itemClosed(X))}),m.YNc(1,V,0,0,"ng-template",6),m.qZA()}if(2&fe){m.oxw();const Ce=m.MAs(2),H=m.oxw(),X=m.MAs(8);m.Q6J("ngClass",m.VKq(5,S,H.molecularProfile.deprecated))("nzPopoverMouseEnterDelay",H.onCloseClicked?0:.5)("nzPopoverContent",Ce)("nzMode",H.onCloseClicked?"closeable":"default"),m.xp6(1),m.Q6J("ngTemplateOutlet",X)}}function P(fe,ne){if(1&fe&&m._UZ(0,"cvc-molecular-profile-popover",11),2&fe){const Ce=m.oxw(3);m.Q6J("molecularProfileId",Ce.molecularProfile.id)}}function w(fe,ne){if(1&fe&&m.YNc(0,P,1,1,"cvc-molecular-profile-popover",10),2&fe){const Ce=m.oxw(2);m.Q6J("ngIf",Ce.enablePopover)}}function de(fe,ne){if(1&fe&&(m.YNc(0,e,2,7,"nz-tag",7),m.YNc(1,w,1,1,"ng-template",null,8,m.W1O)),2&fe){const Ce=m.oxw(),H=m.MAs(4);m.Q6J("ngIf",Ce.enablePopover)("ngIfElse",H)}}function se(fe,ne){}function Z(fe,ne){if(1&fe){const Ce=m.EpF();m.TgZ(0,"nz-tag",12),m.NdJ("nzOnClose",function(X){m.CHM(Ce);const ve=m.oxw();return m.KtG(ve.itemClosed(X))}),m.YNc(1,se,0,0,"ng-template",6),m.qZA()}if(2&fe){const Ce=m.oxw(),H=m.MAs(8);m.Q6J("nzMode",Ce.onCloseClicked?"closeable":"default")("ngClass",m.VKq(3,S,Ce.molecularProfile.deprecated)),m.xp6(1),m.Q6J("ngTemplateOutlet",H)}}function j(fe,ne){}function N(fe,ne){if(1&fe&&m.YNc(0,j,0,0,"ng-template",6),2&fe){m.oxw();const Ce=m.MAs(2);m.Q6J("ngTemplateOutlet",Ce)}}function q(fe,ne){if(1&fe&&(m.ynx(0),m._uU(1),m.ALo(2,"truncate"),m.BQk()),2&fe){const Ce=m.oxw(2);m.xp6(1),m.hij(" ",m.xi3(2,1,Ce.molecularProfile.name,Ce.truncationLength)," ")}}function Y(fe,ne){if(1&fe&&m._uU(0),2&fe){const Ce=m.oxw(2);m.hij(" ",Ce.molecularProfile.name," ")}}function k(fe,ne){if(1&fe&&(m._UZ(0,"i",13),m.YNc(1,q,3,4,"ng-container",0),m.YNc(2,Y,1,1,"ng-template",null,14,m.W1O)),2&fe){const Ce=m.MAs(3),H=m.oxw();m.Q6J("nzTwotoneColor",H.iconColor),m.xp6(1),m.Q6J("ngIf",H.truncateLongName)("ngIfElse",Ce)}}class me extends t.a{constructor(){super(),this.enablePopover=!0,this.truncateLongName=!1,this.truncationLength=20,this.iconColor=(0,i.f)("MolecularProfile")}idFunction(){return this.molecularProfile.id}ngOnInit(){if(super.ngOnInit(),void 0===this.molecularProfile)throw new Error("cvc-molecular-profile-tag requires LinkableMolecularProfile input, none supplied.");"number"==typeof this.truncateLongName&&(this.truncationLength=this.truncateLongName),"segments"in this.molecularProfile&&(this.molecularProfile.name=this.molecularProfile.segments.map(ne=>"text"in ne?ne.text:ne.name).join(" "))}}me.\u0275fac=function(ne){return new(ne||me)},me.\u0275cmp=m.Xpm({type:me,selectors:[["cvc-molecular-profile-tag"]],inputs:{molecularProfile:"molecularProfile",enablePopover:"enablePopover",truncateLongName:"truncateLongName"},features:[m.qOj],decls:9,vars:2,consts:[[4,"ngIf","ngIfElse"],["tag",""],["noPopover",""],["unlinked",""],["tagContent",""],[3,"routerLink"],[3,"ngTemplateOutlet"],["nz-popover","","nzPopoverTrigger","hover",3,"ngClass","nzPopoverMouseEnterDelay","nzPopoverContent","nzMode","nzOnClose",4,"ngIf","ngIfElse"],["popoverContent",""],["nz-popover","","nzPopoverTrigger","hover",3,"ngClass","nzPopoverMouseEnterDelay","nzPopoverContent","nzMode","nzOnClose"],[3,"molecularProfileId",4,"ngIf"],[3,"molecularProfileId"],[3,"nzMode","ngClass","nzOnClose"],["nz-icon","","nzType","civic-molecularprofile","nzTheme","twotone",3,"nzTwotoneColor"],["fullName",""]],template:function(ne,Ce){if(1&ne&&(m.YNc(0,F,3,2,"ng-container",0),m.YNc(1,de,3,2,"ng-template",null,1,m.W1O),m.YNc(3,Z,2,5,"ng-template",null,2,m.W1O),m.YNc(5,N,1,1,"ng-template",null,3,m.W1O),m.YNc(7,k,4,3,"ng-template",null,4,m.W1O)),2&ne){const H=m.MAs(6);m.Q6J("ngIf",Ce.linked)("ngIfElse",H)}},dependencies:[l.mk,l.O5,l.tP,s.rH,L.j,R.lU,T.Ls,M._,b.W],styles:["[_nghost-%COMP%]     nz-tag.rejected, [_nghost-%COMP%]     nz-tag.submitted, [_nghost-%COMP%]     nz-tag.accepted, [_nghost-%COMP%]     nz-tag.deprecated{border-right-width:2px}[_nghost-%COMP%]     nz-tag.rejected, [_nghost-%COMP%]     nz-tag.deprecated{border-color:#e6e6e6;background-color:#fff;color:#999999d9}[_nghost-%COMP%]     nz-tag.submitted{border-color:#ffe58f}[_nghost-%COMP%]     nz-tag.accepted{border-color:#b7eb8f}[_nghost-%COMP%]{display:inline-block}"],changeDetection:0})},4126:(Et,Me,a)=>{a.d(Me,{u:()=>M});var t=a(6895),i=a(9116),m=a(6672),l=a(1102),s=a(6581),L=a(9444),R=a(4398),T=a(4650);class M{}M.\u0275fac=function(O){return new(O||M)},M.\u0275mod=T.oAB({type:M}),M.\u0275inj=T.cJS({imports:[t.ez,i.Bz,m.X,s.$6,l.PV,L.s,R._]})},8305:(Et,Me,a)=>{a.d(Me,{S:()=>e});var t=a(3240),i=a(4004),m=a(9300),l=a(4650),s=a(7630),L=a(6895),R=a(1102),T=a(1971),M=a(6550),b=a(9194),O=a(2635);function F(P,w){if(1&P&&(l._UZ(0,"i",9),l._uU(1)),2&P){const de=l.oxw().ngIf;l.xp6(1),l.hij(" ",de.name," ")}}function V(P,w){if(1&P&&(l.TgZ(0,"cvc-link-tag",10),l._uU(1),l.qZA()),2&P){const de=l.oxw().ngIf;l.Q6J("href",de.url),l.xp6(1),l.hij(" ",de.hpoId," ")}}function S(P,w){if(1&P&&(l.ynx(0),l.TgZ(1,"nz-card",2),l.YNc(2,F,2,1,"ng-template",null,3,l.W1O),l.YNc(4,V,2,2,"ng-template",null,4,l.W1O),l.TgZ(6,"nz-descriptions",5)(7,"nz-descriptions-item",6),l._uU(8),l.qZA(),l.TgZ(9,"nz-descriptions-item",7),l._uU(10),l.qZA(),l.TgZ(11,"nz-descriptions-item",8),l._uU(12),l.qZA()()(),l.BQk()),2&P){const de=w.ngIf,se=l.MAs(3),Z=l.MAs(5);l.xp6(1),l.Q6J("nzTitle",se)("nzExtra",Z),l.xp6(5),l.Q6J("nzColumn",2),l.xp6(2),l.hij(" ",de.assertionCount," "),l.xp6(2),l.hij(" ",de.evidenceItemCount," "),l.xp6(2),l.hij(" ",de.molecularProfileCount," ")}}class e{constructor(w){this.gql=w}ngOnInit(){if(null==this.phenotypeId)throw new Error("cvc-phenotype-popover requires valid phenotypeId input.");this.phenotype$=this.gql.watch({phenotypeId:this.phenotypeId}).valueChanges.pipe((0,i.U)(({data:w})=>w?.phenotypePopover),(0,m.h)(t.ep))}}e.\u0275fac=function(w){return new(w||e)(l.Y36(s.OHm))},e.\u0275cmp=l.Xpm({type:e,selectors:[["cvc-phenotype-popover"]],inputs:{phenotypeId:"phenotypeId"},decls:3,vars:3,consts:[["id","popover-content"],[4,"ngIf"],["nzBordered","false","id","card-content",3,"nzTitle","nzExtra"],["cardTitle",""],["linkout",""],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","Assertions","nzSpan","2"],["nzTitle","Evidence","nzSpan","2"],["nzTitle","Molecular Profiles","nzSpan","2"],["nz-icon","","nzType","civic-phenotype","nzTheme","twotone","nzTwotoneColor","#2A63B6"],["tooltip","View in the Human Phenotype Ontology",3,"href"]],template:function(w,de){1&w&&(l.TgZ(0,"div",0),l.YNc(1,S,13,6,"ng-container",1),l.ALo(2,"ngrxPush"),l.qZA()),2&w&&(l.xp6(1),l.Q6J("ngIf",l.lcZ(2,1,de.phenotype$)))},dependencies:[L.O5,R.Ls,T.bd,M.l,b.R7,b.uj,O.fM],styles:["[_nghost-%COMP%]{display:block;margin:-8px -12px}[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}[_nghost-%COMP%]     .ant-descriptions-view{border:none}[_nghost-%COMP%]     #entity-child-counts{border-top:1px solid #f0f0f0;padding:8px}[_nghost-%COMP%]     #entity-child-counts nz-space{width:100%}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child nz-tag{margin-right:0}.popover-text[_ngcontent-%COMP%]{width:100%;padding:8px;border-bottom:1px solid #f0f0f0}#popover-content[_ngcontent-%COMP%]{min-width:350px;max-width:500px;min-height:125px}"]})},1028:(Et,Me,a)=>{a.d(Me,{I:()=>T});var t=a(6895),i=a(2635),m=a(1971),l=a(4989),s=a(9194),L=a(1102),R=a(4650);class T{}T.\u0275fac=function(b){return new(b||T)},T.\u0275mod=R.oAB({type:T}),T.\u0275inj=R.cJS({imports:[t.ez,i._N,i.pP,L.PV,m.vh,l.X,s.q6]})},3172:(Et,Me,a)=>{a.d(Me,{i:()=>Z});var t=a(6654),i=a(4650),m=a(6895),l=a(9116),s=a(6672),L=a(6581),R=a(1102),T=a(8305),M=a(160);function b(j,N){}function O(j,N){if(1&j&&(i.ynx(0),i.TgZ(1,"a",5),i.YNc(2,b,0,0,"ng-template",6),i.qZA(),i.BQk()),2&j){const q=i.oxw(),Y=i.MAs(2);i.xp6(1),i.Q6J("routerLink",q.phenotype.link),i.xp6(1),i.Q6J("ngTemplateOutlet",Y)}}function F(j,N){}function V(j,N){if(1&j&&i._UZ(0,"cvc-phenotype-popover",9),2&j){const q=i.oxw(2);i.Q6J("phenotypeId",q.phenotype.id)}}function S(j,N){if(1&j){const q=i.EpF();i.TgZ(0,"nz-tag",7),i.NdJ("nzOnClose",function(k){i.CHM(q);const me=i.oxw();return i.KtG(me.itemClosed(k))}),i.YNc(1,F,0,0,"ng-template",6),i.qZA(),i.YNc(2,V,1,1,"ng-template",null,8,i.W1O)}if(2&j){const q=i.MAs(3),Y=i.oxw(),k=i.MAs(8);i.Q6J("nzPopoverMouseEnterDelay",Y.onCloseClicked?0:.5)("nzPopoverContent",q)("nzPopoverTrigger",Y.enablePopover?"hover":null)("nzMode",Y.onCloseClicked?"closeable":"default"),i.xp6(1),i.Q6J("ngTemplateOutlet",k)}}function e(j,N){}function P(j,N){if(1&j){const q=i.EpF();i.TgZ(0,"nz-tag",10),i.NdJ("nzOnClose",function(k){i.CHM(q);const me=i.oxw();return i.KtG(me.itemClosed(k))}),i.YNc(1,e,0,0,"ng-template",6),i.qZA()}if(2&j){const q=i.oxw(),Y=i.MAs(8);i.Q6J("nzMode",q.onCloseClicked?"closeable":"default"),i.xp6(1),i.Q6J("ngTemplateOutlet",Y)}}function w(j,N){}function de(j,N){if(1&j&&i.YNc(0,w,0,0,"ng-template",6),2&j){i.oxw();const q=i.MAs(2);i.Q6J("ngTemplateOutlet",q)}}function se(j,N){if(1&j&&(i._UZ(0,"i",11),i.ALo(1,"entityColor"),i._uU(2)),2&j){const q=i.oxw();i.Q6J("nzTwotoneColor",i.lcZ(1,2,"Phenotype")),i.xp6(2),i.hij(" ",q.phenotype.name,"\n")}}class Z extends t.a{constructor(){super(...arguments),this.enablePopover=!0}set phenotype(N){if(!N)throw new Error("phenotype-tag phentype input requires LinkablePhenotype.");this._phenotype=N}get phenotype(){return this._phenotype}idFunction(){return this.phenotype.id}}Z.\u0275fac=function(){let j;return function(q){return(j||(j=i.n5z(Z)))(q||Z)}}(),Z.\u0275cmp=i.Xpm({type:Z,selectors:[["cvc-phenotype-tag"]],inputs:{phenotype:"phenotype",enablePopover:"enablePopover"},features:[i.qOj],decls:9,vars:2,consts:[[4,"ngIf","ngIfElse"],["tag",""],["noPopover",""],["unlinked",""],["tagContent",""],[3,"routerLink"],[3,"ngTemplateOutlet"],["nz-popover","","nzPopoverPlacement","right",3,"nzPopoverMouseEnterDelay","nzPopoverContent","nzPopoverTrigger","nzMode","nzOnClose"],["phenotypePopover",""],[3,"phenotypeId"],[3,"nzMode","nzOnClose"],["nz-icon","","nzTheme","twotone","nzType","civic-phenotype",3,"nzTwotoneColor"]],template:function(N,q){if(1&N&&(i.YNc(0,O,3,2,"ng-container",0),i.YNc(1,S,4,5,"ng-template",null,1,i.W1O),i.YNc(3,P,2,2,"ng-template",null,2,i.W1O),i.YNc(5,de,1,1,"ng-template",null,3,i.W1O),i.YNc(7,se,3,4,"ng-template",null,4,i.W1O)),2&N){const Y=i.MAs(6);i.Q6J("ngIf",q.linked)("ngIfElse",Y)}},dependencies:[m.O5,m.tP,l.rH,s.j,L.lU,R.Ls,T.S,M.a],styles:["[_nghost-%COMP%]{display:block}"],changeDetection:0})},3973:(Et,Me,a)=>{a.d(Me,{y:()=>M});var t=a(6895),i=a(9116),m=a(9444),l=a(1102),s=a(6581),L=a(6672),R=a(1028),T=a(4650);class M{}M.\u0275fac=function(O){return new(O||M)},M.\u0275mod=T.oAB({type:M}),M.\u0275inj=T.cJS({imports:[t.ez,i.Bz,L.X,s.$6,l.PV,R.I,m.s]})},1730:(Et,Me,a)=>{a.d(Me,{b:()=>M});var t=a(9771),i=a(4650),m=a(6895);const l=function(b){return{background:b}};function s(b,O){if(1&b&&i._UZ(0,"div",3),2&b){const F=i.oxw();i.Q6J("ngStyle",i.VKq(1,l,F.flagColor))}}function L(b,O){if(1&b&&i._UZ(0,"div",4),2&b){const F=i.oxw();i.Q6J("ngStyle",i.VKq(1,l,F.entityColor))}}function R(b,O){if(1&b&&i._UZ(0,"div",5),2&b){const F=i.oxw();i.Q6J("ngStyle",i.VKq(1,l,F.entityColor))}}class M{constructor(){this.hasRevisions=!1,this.flagged=!1,this.hasComments=!1,this.entityColor="#AAA",this.flagColor=(0,t.f)("Flag")}}M.\u0275fac=function(O){return new(O||M)},M.\u0275cmp=i.Xpm({type:M,selectors:[["cvc-icon-badges"]],inputs:{hasRevisions:"hasRevisions",flagged:"flagged",hasComments:"hasComments",entityColor:"entityColor"},ngContentSelectors:["*"],decls:4,vars:3,consts:[["class","cvc-badge badge-flags",3,"ngStyle",4,"ngIf"],["class","cvc-badge badge-revisions",3,"ngStyle",4,"ngIf"],["class","cvc-badge badge-comments",3,"ngStyle",4,"ngIf"],[1,"cvc-badge","badge-flags",3,"ngStyle"],[1,"cvc-badge","badge-revisions",3,"ngStyle"],[1,"cvc-badge","badge-comments",3,"ngStyle"]],template:function(O,F){1&O&&(i.F$t(),i.Hsn(0),i.YNc(1,s,1,3,"div",0),i.YNc(2,L,1,3,"div",1),i.YNc(3,R,1,3,"div",2)),2&O&&(i.xp6(1),i.Q6J("ngIf",F.flagged),i.xp6(1),i.Q6J("ngIf",F.hasRevisions),i.xp6(1),i.Q6J("ngIf",F.hasComments))},dependencies:[m.O5,m.PC],styles:["[_nghost-%COMP%]{display:inline-block;position:relative;line-height:1}.cvc-badge[_ngcontent-%COMP%]{position:absolute;z-index:auto;width:4px;min-width:4px;height:4px;border-radius:100%;box-shadow:0 0 0 1px #fff;background:#aaa}.cvc-badge.badge-revisions[_ngcontent-%COMP%]{top:.5px;right:.5px;transform:translate(50%,-50%)}.cvc-badge.badge-flags[_ngcontent-%COMP%]{top:.5px;left:.5px;transform:translate(-50%,-50%)}.cvc-badge.badge-comments[_ngcontent-%COMP%]{bottom:.5px;right:.5px;transform:translate(50%,50%)}"],changeDetection:0})},6429:(Et,Me,a)=>{a.d(Me,{C:()=>l});var t=a(6895),i=a(9444),m=a(4650);class l{}l.\u0275fac=function(L){return new(L||l)},l.\u0275mod=m.oAB({type:l}),l.\u0275inj=m.cJS({imports:[t.ez,i.s]})},6550:(Et,Me,a)=>{a.d(Me,{l:()=>L});var t=a(4650),i=a(7570),m=a(6672),l=a(1102);class L{set href(T){if(!T)throw new Error("link-tag link Input requires string.");this._href=T}get href(){return this._href?this._href:""}}L.\u0275fac=function(T){return new(T||L)},L.\u0275cmp=t.Xpm({type:L,selectors:[["cvc-link-tag"]],inputs:{href:"href",tooltip:"tooltip",iconName:"iconName"},ngContentSelectors:["*"],decls:4,vars:4,consts:[["target","_blank",3,"href"],["nzColor","default","nz-tooltip","",3,"nzTooltipTitle","nzTooltipTrigger"],["nz-icon","","nzTheme","outline",3,"nzType"]],template:function(T,M){1&T&&(t.F$t(),t.TgZ(0,"a",0)(1,"nz-tag",1),t._UZ(2,"i",2),t.Hsn(3),t.qZA()()),2&T&&(t.Q6J("href",M.href,t.LSH),t.xp6(1),t.Q6J("nzTooltipTitle",M.tooltip)("nzTooltipTrigger",M.tooltip?"hover":null),t.xp6(1),t.Q6J("nzType",M.iconName?M.iconName:"link"))},dependencies:[i.SY,m.j,l.Ls],encapsulation:2})},4989:(Et,Me,a)=>{a.d(Me,{X:()=>L});var t=a(6895),i=a(7570),m=a(6672),l=a(1102),s=a(4650);class L{}L.\u0275fac=function(T){return new(T||L)},L.\u0275mod=s.oAB({type:L}),L.\u0275inj=s.cJS({imports:[t.ez,i.cg,m.X,l.PV]})},2994:(Et,Me,a)=>{a.d(Me,{y:()=>L});var t=a(6895),i=a(2635),m=a(1102),l=a(6672),s=a(4650);class L{}L.\u0275fac=function(T){return new(T||L)},L.\u0275mod=s.oAB({type:L}),L.\u0275inj=s.cJS({imports:[t.ez,i._N,i.pP,l.X,m.PV]})},3388:(Et,Me,a)=>{a.d(Me,{H:()=>b});var t=a(1135),i=a(7445),m=a(590),l=a(4650),s=a(6895),L=a(6672),R=a(1102),T=a(2635);function M(O,F){1&O&&(l.TgZ(0,"nz-tag",1),l._UZ(1,"i",2),l.TgZ(2,"span"),l._uU(3,"End of results reached"),l.qZA()())}class b{set cvcShowTag(F){void 0!==F&&F&&this.showTag()}constructor(F){this.cdr=F,this.showTag$=new t.X(!1)}showTag(){!1===this.showTag$.getValue()&&(this.showTag$.next(!0),(0,i.F)(3e3).pipe((0,m.P)()).subscribe(()=>{this.showTag$.next(!1),this.cdr.detectChanges()}))}}b.\u0275fac=function(F){return new(F||b)(l.Y36(l.sBO))},b.\u0275cmp=l.Xpm({type:b,selectors:[["cvc-no-more-rows"]],inputs:{cvcShowTag:"cvcShowTag"},decls:2,vars:3,consts:[["nzColor","warning",4,"ngIf"],["nzColor","warning"],["nz-icon","","nzType","exclamation-circle"]],template:function(F,V){1&F&&(l.YNc(0,M,4,0,"nz-tag",0),l.ALo(1,"ngrxPush")),2&F&&l.Q6J("ngIf",l.lcZ(1,1,V.showTag$))},dependencies:[s.O5,L.j,R.Ls,T.fM],encapsulation:2,changeDetection:0})},4590:(Et,Me,a)=>{a.d(Me,{h:()=>O});var t=a(4650),i=a(6895),m=a(6672),l=a(1102);function s(F,V){1&F&&t._UZ(0,"i",7)}function L(F,V){1&F&&t._UZ(0,"i",8)}function R(F,V){1&F&&t._UZ(0,"i",9)}function T(F,V){1&F&&t._UZ(0,"i",10)}function M(F,V){1&F&&t._UZ(0,"i",10)}function b(F,V){if(1&F&&(t.TgZ(0,"nz-tag",1),t.ynx(1,2),t.YNc(2,s,1,0,"i",3),t.YNc(3,L,1,0,"i",4),t.YNc(4,R,1,0,"i",5),t.YNc(5,T,1,0,"i",6),t.YNc(6,M,1,0,"i",6),t.BQk(),t._uU(7),t.ALo(8,"titlecase"),t.qZA()),2&F){const S=t.oxw();t.Q6J("nzColor",S.tagStatus),t.xp6(1),t.Q6J("ngSwitch",S.tagStatus),t.xp6(1),t.Q6J("ngSwitchCase","success"),t.xp6(1),t.Q6J("ngSwitchCase","error"),t.xp6(1),t.Q6J("ngSwitchCase","warning"),t.xp6(1),t.Q6J("ngSwitchCase","processing"),t.xp6(1),t.Q6J("ngSwitchCase","default"),t.xp6(1),t.hij(" ",t.lcZ(8,8,S.status),"\n")}}class O{constructor(){this.statusColorMap={ACCEPTED:"success",REJECTED:"error",SUBMITTED:"warning",NEW:"processing",SUPERSEDED:"default",OPEN:"error",RESOLVED:"default"}}set status(V){this._status=V,V&&(this.tagStatus=this.statusColorMap[V])}get status(){return this._status}ngOnInit(){if(void 0===this.status)throw new Error("Must pass a valid EvidenceStatus or RevisionStatus to cvc-status-tag component")}}O.\u0275fac=function(V){return new(V||O)},O.\u0275cmp=t.Xpm({type:O,selectors:[["cvc-status-tag"]],inputs:{status:"status"},decls:1,vars:1,consts:[[3,"nzColor",4,"ngIf"],[3,"nzColor"],[3,"ngSwitch"],["nz-icon","","nzType","check-circle",4,"ngSwitchCase"],["nz-icon","","nzType","close-circle",4,"ngSwitchCase"],["nz-icon","","nzType","exclamation-circle",4,"ngSwitchCase"],["nz-icon","",4,"ngSwitchCase"],["nz-icon","","nzType","check-circle"],["nz-icon","","nzType","close-circle"],["nz-icon","","nzType","exclamation-circle"],["nz-icon",""]],template:function(V,S){1&V&&t.YNc(0,b,9,10,"nz-tag",0),2&V&&t.Q6J("ngIf",S.tagStatus)},dependencies:[i.O5,i.RF,i.n9,m.j,l.Ls,i.rS],encapsulation:2})},592:(Et,Me,a)=>{a.d(Me,{x:()=>s});var t=a(6895),i=a(6672),m=a(1102),l=a(4650);class s{}s.\u0275fac=function(R){return new(R||s)},s.\u0275mod=l.oAB({type:s}),s.\u0275inj=l.cJS({imports:[t.ez,i.X,m.PV]})},6715:(Et,Me,a)=>{a.d(Me,{$:()=>m});var t=a(4650);class m{constructor(){}ngOnInit(){}}m.\u0275fac=function(s){return new(s||m)},m.\u0275cmp=t.Xpm({type:m,selectors:[["cvc-tag-list"]],hostVars:4,hostBindings:function(s,L){2&s&&t.ekj("xs","xs"===L.size||!L.size)("sm","sm"===L.size)},inputs:{size:"size"},ngContentSelectors:["*"],decls:2,vars:0,consts:[[1,"tag-list"]],template:function(s,L){1&s&&(t.F$t(),t.TgZ(0,"div",0),t.Hsn(1),t.qZA())},styles:["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]   .tag-list[_ngcontent-%COMP%]    >*{display:inline-block}[_nghost-%COMP%]   .tag-list[_ngcontent-%COMP%]    >*:last-child{margin-right:-8px}.xs[_nghost-%COMP%]{margin-bottom:-4px}.xs[_nghost-%COMP%]   .tag-list[_ngcontent-%COMP%]    >*{margin-bottom:4px}.sm[_nghost-%COMP%]{margin-bottom:-8px}.sm[_nghost-%COMP%]   .tag-list[_ngcontent-%COMP%]    >*{margin-bottom:8px}"],changeDetection:0})},897:(Et,Me,a)=>{a.d(Me,{$:()=>m});var t=a(6895),i=a(4650);class m{}m.\u0275fac=function(s){return new(s||m)},m.\u0275mod=i.oAB({type:m}),m.\u0275inj=i.cJS({imports:[t.ez]})},2614:(Et,Me,a)=>{a.d(Me,{p:()=>Z});var t=a(3240),i=a(4004),m=a(9300),l=a(4650),s=a(7630),L=a(6895),R=a(1102),T=a(1971),M=a(9194),b=a(6550),O=a(6715),F=a(4049),V=a(2635);function S(j,N){if(1&j&&(l._UZ(0,"i",11),l._uU(1)),2&j){const q=l.oxw().ngIf;l.xp6(1),l.AsE(" ",q.displayType,":\xa0",q.citation," ")}}function e(j,N){if(1&j&&(l.TgZ(0,"cvc-link-tag",12),l._uU(1),l.qZA()),2&j){const q=l.oxw().ngIf;l.Q6J("href",q.sourceUrl)("tooltip","View on "+q.displayType),l.xp6(1),l.hij(" ",q.displayType+":"+q.citationId," ")}}function P(j,N){1&j&&l._UZ(0,"cvc-clinical-trial-tag",14),2&j&&l.Q6J("clinicalTrial",N.$implicit)("enablePopover",!1)}function w(j,N){if(1&j&&(l.ynx(0),l.TgZ(1,"cvc-tag-list"),l.YNc(2,P,1,2,"cvc-clinical-trial-tag",13),l.qZA(),l.BQk()),2&j){const q=l.oxw().ngIf;l.xp6(2),l.Q6J("ngForOf",q.clinicalTrials)}}function de(j,N){1&j&&l._uU(0," -- ")}function se(j,N){if(1&j&&(l.ynx(0),l.TgZ(1,"nz-card",2),l.YNc(2,S,2,2,"ng-template",null,3,l.W1O),l.YNc(4,e,2,3,"ng-template",null,4,l.W1O),l.TgZ(6,"nz-descriptions",5)(7,"nz-descriptions-item",6),l._uU(8),l.qZA(),l.TgZ(9,"nz-descriptions-item",7),l._uU(10),l.qZA(),l.TgZ(11,"nz-descriptions-item",8),l.YNc(12,w,3,1,"ng-container",9),l.YNc(13,de,1,0,"ng-template",null,10,l.W1O),l.qZA()()(),l.BQk()),2&j){const q=N.ngIf,Y=l.MAs(3),k=l.MAs(5),me=l.MAs(14);l.xp6(1),l.Q6J("nzTitle",Y)("nzExtra",k),l.xp6(5),l.Q6J("nzColumn",2),l.xp6(2),l.hij(" ",q.name," "),l.xp6(2),l.hij(" ",q.evidenceItemCount," "),l.xp6(2),l.Q6J("ngIf",q.clinicalTrials&&q.clinicalTrials.length>0)("ngIfElse",me)}}class Z{constructor(N){this.gql=N}ngOnInit(){if(null==this.sourceId)throw new Error("cvc-source-popover requires valid sourceId input.");this.source$=this.gql.watch({sourceId:this.sourceId}).valueChanges.pipe((0,i.U)(({data:N})=>N?.sourcePopover),(0,m.h)(t.ep))}}Z.\u0275fac=function(N){return new(N||Z)(l.Y36(s.TiL))},Z.\u0275cmp=l.Xpm({type:Z,selectors:[["cvc-source-popover"]],inputs:{sourceId:"sourceId"},decls:3,vars:3,consts:[["id","popover-content"],[4,"ngIf"],["nzBordered","false","id","card-content",3,"nzTitle","nzExtra"],["cardTitle",""],["linkout",""],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","Title","nzSpan","2"],["nzTitle","Evidence","nzSpan","2"],["nzTitle","Clinical Trials:","nzSpan","2"],[4,"ngIf","ngIfElse"],["noTrials",""],["nz-icon","","nzType","civic-source","nzTheme","twotone","nzTwotoneColor","#F9BA45"],[3,"href","tooltip"],[3,"clinicalTrial","enablePopover",4,"ngFor","ngForOf"],[3,"clinicalTrial","enablePopover"]],template:function(N,q){1&N&&(l.TgZ(0,"div",0),l.YNc(1,se,15,7,"ng-container",1),l.ALo(2,"ngrxPush"),l.qZA()),2&N&&(l.xp6(1),l.Q6J("ngIf",l.lcZ(2,1,q.source$)))},dependencies:[L.sg,L.O5,R.Ls,T.bd,M.R7,M.uj,b.l,O.$,F.G,V.fM],styles:["[_nghost-%COMP%]{display:block;margin:-8px -12px}[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}[_nghost-%COMP%]     .ant-descriptions-view{border:none}[_nghost-%COMP%]     #entity-child-counts{border-top:1px solid #f0f0f0;padding:8px}[_nghost-%COMP%]     #entity-child-counts nz-space{width:100%}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child nz-tag{margin-right:0}.popover-text[_ngcontent-%COMP%]{width:100%;padding:8px;border-bottom:1px solid #f0f0f0}#popover-content[_ngcontent-%COMP%]{min-width:350px;max-width:500px;min-height:125px}"]})},9736:(Et,Me,a)=>{a.d(Me,{n:()=>b});var t=a(6895),i=a(1971),m=a(4989),l=a(9194),s=a(897),L=a(2635),R=a(5453),T=a(1102),M=a(4650);class b{}b.\u0275fac=function(F){return new(F||b)},b.\u0275mod=M.oAB({type:b}),b.\u0275inj=M.cJS({imports:[t.ez,L._N,L.pP,T.PV,i.vh,l.q6,m.X,s.$,R.N]})},783:(Et,Me,a)=>{a.d(Me,{T:()=>Y});var t=a(6654),i=a(4650),m=a(7742),l=a(6895),s=a(9116),L=a(1102),R=a(6581),T=a(6672),M=a(2614),b=a(4557),O=a(160);function F(k,me){}function V(k,me){if(1&k&&(i.ynx(0),i.TgZ(1,"a",4),i.YNc(2,F,0,0,"ng-template",5),i.qZA(),i.BQk()),2&k){const fe=i.oxw(),ne=i.MAs(2);i.xp6(1),i.Q6J("routerLink",fe.source.link),i.xp6(1),i.Q6J("ngTemplateOutlet",ne)}}function S(k,me){}function e(k,me){if(1&k&&i._UZ(0,"cvc-source-popover",8),2&k){const fe=i.oxw(2);i.Q6J("sourceId",fe.source.id)}}function P(k,me){if(1&k){const fe=i.EpF();i.TgZ(0,"nz-tag",6),i.NdJ("nzPopoverVisibleChange",function(Ce){i.CHM(fe);const H=i.oxw();return i.KtG(H.popoverVisible=Ce)})("nzOnClose",function(Ce){i.CHM(fe);const H=i.oxw();return i.KtG(H.itemClosed(Ce))}),i.YNc(1,S,0,0,"ng-template",5),i.qZA(),i.YNc(2,e,1,1,"ng-template",null,7,i.W1O)}if(2&k){const fe=i.MAs(3),ne=i.oxw(),Ce=i.MAs(6);i.Q6J("nzPopoverMouseEnterDelay",ne.onCloseClicked?0:.5)("nzPopoverContent",fe)("nzPopoverTrigger",ne.enablePopover?"hover":null)("nzPopoverVisible",ne.popoverVisible)("nzMode",ne.onCloseClicked?"closeable":"default"),i.xp6(1),i.Q6J("ngTemplateOutlet",Ce)}}function w(k,me){}function de(k,me){if(1&k&&i.YNc(0,w,0,0,"ng-template",5),2&k){i.oxw();const fe=i.MAs(2);i.Q6J("ngTemplateOutlet",fe)}}function se(k,me){if(1&k&&(i.ynx(0),i._uU(1),i.ALo(2,"truncate"),i.BQk()),2&k){const fe=i.oxw(3);i.xp6(1),i.hij(" ",i.xi3(2,1,fe.displayName,50)," ")}}function Z(k,me){if(1&k&&(i.ynx(0),i._uU(1),i.BQk()),2&k){const fe=i.oxw(3);i.xp6(1),i.hij(" ",fe.displayName," ")}}function j(k,me){if(1&k&&(i.ynx(0),i.YNc(1,se,3,4,"ng-container",11),i.YNc(2,Z,2,1,"ng-container",11),i.BQk()),2&k){const fe=i.oxw(2);i.xp6(1),i.Q6J("ngIf",fe.truncateLongName),i.xp6(1),i.Q6J("ngIf",!fe.truncateLongName)}}function N(k,me){if(1&k&&i._uU(0),2&k){const fe=i.oxw(2);i.hij(" SID:",fe.source.id," ")}}function q(k,me){if(1&k&&(i._UZ(0,"i",9),i.ALo(1,"entityColor"),i.YNc(2,j,3,2,"ng-container",0),i.YNc(3,N,1,1,"ng-template",null,10,i.W1O)),2&k){const fe=i.MAs(4),ne=i.oxw();i.Q6J("nzTwotoneColor",i.lcZ(1,3,"Source")),i.xp6(2),i.Q6J("ngIf","normal"===ne.mode)("ngIfElse",fe)}}class Y extends t.a{set source(me){if(!me)throw new Error("source-tag source input requires SourceWithDisplayName or SourceWithCitation.");this._source=me,this.displayName="displayName"in this.source?this.source.displayName:this.sourceTypeDisplay.transform(this.source.sourceType)+": "+this.source.citation}get source(){return this._source}constructor(me){super(),this.sourceTypeDisplay=me,this.enablePopover=!0,this.linked=!0,this.mode="normal",this.truncateLongName=!1}idFunction(){return this.source.id}}Y.\u0275fac=function(me){return new(me||Y)(i.Y36(m.l))},Y.\u0275cmp=i.Xpm({type:Y,selectors:[["cvc-source-tag"]],inputs:{source:"source",enablePopover:"enablePopover",linked:"linked",mode:"mode",truncateLongName:"truncateLongName"},features:[i.qOj],decls:7,vars:2,consts:[[4,"ngIf","ngIfElse"],["tag",""],["unlinked",""],["tagContent",""],[3,"routerLink"],[3,"ngTemplateOutlet"],["nz-popover","","nzPopoverPlacement","right",3,"nzPopoverMouseEnterDelay","nzPopoverContent","nzPopoverTrigger","nzPopoverVisible","nzMode","nzPopoverVisibleChange","nzOnClose"],["sourcePopover",""],[3,"sourceId"],["nz-icon","","nzTheme","twotone","nzType","civic-source",3,"nzTwotoneColor"],["concise",""],[4,"ngIf"]],template:function(me,fe){if(1&me&&(i.YNc(0,V,3,2,"ng-container",0),i.YNc(1,P,4,6,"ng-template",null,1,i.W1O),i.YNc(3,de,1,1,"ng-template",null,2,i.W1O),i.YNc(5,q,5,5,"ng-template",null,3,i.W1O)),2&me){const ne=i.MAs(4);i.Q6J("ngIf",fe.linked)("ngIfElse",ne)}},dependencies:[l.O5,l.tP,s.rH,L.Ls,R.lU,T.j,M.p,b.W,O.a],styles:["[_nghost-%COMP%]{display:inline-block}"],changeDetection:0})},2811:(Et,Me,a)=>{a.d(Me,{s:()=>M});var t=a(6895),i=a(6581),m=a(9116),l=a(9736),s=a(6672),L=a(1102),R=a(9444),T=a(4650);class M{}M.\u0275fac=function(O){return new(O||M)},M.\u0275mod=T.oAB({type:M}),M.\u0275inj=T.cJS({imports:[t.ez,m.Bz,L.PV,i.$6,s.X,l.n,R.s]})},6818:(Et,Me,a)=>{a.d(Me,{a:()=>Y});var t=a(4004),i=a(9300),m=a(3240),l=a(4650),s=a(7630),L=a(6895),R=a(1971),T=a(9194),M=a(1102),b=a(8823),O=a(6672),F=a(7570),V=a(6550),S=a(2635),e=a(4557);function P(k,me){if(1&k&&(l._UZ(0,"i",12),l._uU(1),l.ALo(2,"truncate")),2&k){const fe=l.oxw().ngIf;l.xp6(1),l.hij(" ",l.xi3(2,1,fe.name,50)," ")}}function w(k,me){if(1&k&&(l.TgZ(0,"cvc-link-tag",14),l._uU(1),l.qZA()),2&k){const fe=l.oxw(2).ngIf;l.Q6J("href",fe.therapyUrl),l.xp6(1),l.hij(" ",fe.ncitId," ")}}function de(k,me){if(1&k&&l.YNc(0,w,2,2,"cvc-link-tag",13),2&k){const fe=l.oxw().ngIf,ne=l.MAs(7);l.Q6J("ngIf",fe.ncitId)("ngIfElse",ne)}}function se(k,me){1&k&&(l.TgZ(0,"span",15),l._uU(1,"No NCIt ID"),l.qZA())}function Z(k,me){if(1&k&&(l.TgZ(0,"nz-descriptions-item",16),l._uU(1),l.qZA()),2&k){const fe=l.oxw().ngIf;l.xp6(1),l.hij(" ",fe.name," ")}}function j(k,me){if(1&k&&(l.TgZ(0,"nz-tag",19),l._uU(1),l.ALo(2,"truncate"),l.qZA()),2&k){const fe=me.$implicit;l.Q6J("nzTooltipTitle",fe),l.xp6(1),l.Oqu(l.lcZ(2,2,fe))}}function N(k,me){if(1&k&&(l.TgZ(0,"nz-descriptions-item",17),l.YNc(1,j,3,4,"nz-tag",18),l.qZA()),2&k){const fe=l.oxw().ngIf;l.xp6(1),l.Q6J("ngForOf",fe.therapyAliases)}}function q(k,me){if(1&k&&(l.ynx(0),l.TgZ(1,"nz-card",2),l.YNc(2,P,3,4,"ng-template",null,3,l.W1O),l.YNc(4,de,1,2,"ng-template",null,4,l.W1O),l.YNc(6,se,2,0,"ng-template",null,5,l.W1O),l.TgZ(8,"nz-descriptions",6),l.YNc(9,Z,2,1,"nz-descriptions-item",7),l.YNc(10,N,2,1,"nz-descriptions-item",8),l.TgZ(11,"nz-descriptions-item",9),l._uU(12),l.qZA(),l.TgZ(13,"nz-descriptions-item",10),l._uU(14),l.qZA(),l.TgZ(15,"nz-descriptions-item",11),l._uU(16),l.qZA()()(),l.BQk()),2&k){const fe=me.ngIf,ne=l.MAs(3),Ce=l.MAs(5);l.xp6(1),l.Q6J("nzTitle",ne)("nzExtra",Ce),l.xp6(7),l.Q6J("nzColumn",2),l.xp6(1),l.Q6J("ngIf",fe.name.length>50),l.xp6(1),l.Q6J("ngIf",fe.therapyAliases.length>0),l.xp6(2),l.hij(" ",fe.assertionCount," "),l.xp6(2),l.hij(" ",fe.evidenceItemCount," "),l.xp6(2),l.hij(" ",fe.molecularProfileCount," ")}}class Y{constructor(me){this.gql=me}ngOnInit(){if(null==this.therapyId)throw new Error("cvc-therapy-popover requires valid therapyId input.");this.therapy$=this.gql.watch({therapyId:this.therapyId}).valueChanges.pipe((0,t.U)(({data:me})=>me?.therapyPopover),(0,i.h)(m.ep))}}Y.\u0275fac=function(me){return new(me||Y)(l.Y36(s.L8L))},Y.\u0275cmp=l.Xpm({type:Y,selectors:[["cvc-therapy-popover"]],inputs:{therapyId:"therapyId"},decls:3,vars:3,consts:[["id","popover-content"],[4,"ngIf"],["nzBordered","false","id","card-content",3,"nzTitle","nzExtra"],["cardTitle",""],["linkout",""],["noNcitId",""],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","Name","nzSpan","2",4,"ngIf"],["nzTitle","Aliases","nzSpan","2",4,"ngIf"],["nzTitle","Assertions","nzSpan","2"],["nzTitle","Evidence","nzSpan","2"],["nzTitle","Molecular Profiles","nzSpan","2"],["nz-icon","","nzType","civic-therapy","nzTheme","twotone","nzTwotoneColor","#AC3996"],["tooltip","View on NCI Thesaurus",3,"href",4,"ngIf","ngIfElse"],["tooltip","View on NCI Thesaurus",3,"href"],["nz-typography","","nzType","secondary"],["nzTitle","Name","nzSpan","2"],["nzTitle","Aliases","nzSpan","2"],["nz-tooltip","",3,"nzTooltipTitle",4,"ngFor","ngForOf"],["nz-tooltip","",3,"nzTooltipTitle"]],template:function(me,fe){1&me&&(l.TgZ(0,"div",0),l.YNc(1,q,17,8,"ng-container",1),l.ALo(2,"ngrxPush"),l.qZA()),2&me&&(l.xp6(1),l.Q6J("ngIf",l.lcZ(2,1,fe.therapy$)))},dependencies:[L.sg,L.O5,R.bd,T.R7,T.uj,M.Ls,b.ZU,O.j,F.SY,V.l,S.fM,e.W],styles:["[_nghost-%COMP%]{display:block;margin:-8px -12px}[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}[_nghost-%COMP%]     .ant-descriptions-view{border:none}[_nghost-%COMP%]     #entity-child-counts{border-top:1px solid #f0f0f0;padding:8px}[_nghost-%COMP%]     #entity-child-counts nz-space{width:100%}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child nz-tag{margin-right:0}.popover-text[_ngcontent-%COMP%]{width:100%;padding:8px;border-bottom:1px solid #f0f0f0}#popover-content[_ngcontent-%COMP%]{min-width:350px;max-width:500px;min-height:125px}"]})},8974:(Et,Me,a)=>{a.d(Me,{s:()=>V});var t=a(6895),i=a(9116),m=a(1971),l=a(9194),s=a(2635),L=a(4989),R=a(1102),T=a(8823),M=a(9444),b=a(6672),O=a(7570),F=a(4650);class V{}V.\u0275fac=function(e){return new(e||V)},V.\u0275mod=F.oAB({type:V}),V.\u0275inj=F.cJS({imports:[t.ez,i.Bz,s._N,s.pP,m.vh,l.q6,R.PV,T.ZJ,b.X,O.cg,L.X,M.s]})},5797:(Et,Me,a)=>{a.d(Me,{T:()=>Z});var t=a(6654),i=a(4650),m=a(6895),l=a(9116),s=a(6672),L=a(6581),R=a(1102),T=a(6818),M=a(4557);function b(j,N){}function O(j,N){if(1&j&&(i.ynx(0),i.TgZ(1,"a",4),i.YNc(2,b,0,0,"ng-template",5),i.qZA(),i.BQk()),2&j){const q=i.oxw(),Y=i.MAs(2);i.xp6(1),i.Q6J("routerLink",q.therapy.link),i.xp6(1),i.Q6J("ngTemplateOutlet",Y)}}function F(j,N){}function V(j,N){if(1&j&&i._UZ(0,"cvc-therapy-popover",8),2&j){const q=i.oxw(2);i.Q6J("therapyId",q.therapy.id)}}function S(j,N){if(1&j){const q=i.EpF();i.TgZ(0,"nz-tag",6),i.NdJ("nzOnClose",function(k){i.CHM(q);const me=i.oxw();return i.KtG(me.itemClosed(k))}),i.YNc(1,F,0,0,"ng-template",5),i.qZA(),i.YNc(2,V,1,1,"ng-template",null,7,i.W1O)}if(2&j){const q=i.MAs(3),Y=i.oxw(),k=i.MAs(6);i.Q6J("nzPopoverMouseEnterDelay",Y.onCloseClicked?0:.5)("nzPopoverContent",q)("nzPopoverTrigger",Y.enablePopover?"hover":null)("nzMode",Y.onCloseClicked?"closeable":"default"),i.xp6(1),i.Q6J("ngTemplateOutlet",k)}}function e(j,N){}function P(j,N){if(1&j&&i.YNc(0,e,0,0,"ng-template",5),2&j){i.oxw();const q=i.MAs(2);i.Q6J("ngTemplateOutlet",q)}}function w(j,N){if(1&j&&(i.ynx(0),i._uU(1),i.ALo(2,"truncate"),i.BQk()),2&j){const q=i.oxw(2);i.xp6(1),i.hij(" ",i.xi3(2,1,q.therapy.name,21)," ")}}function de(j,N){if(1&j&&i._uU(0),2&j){const q=i.oxw(2);i.hij(" ",q.therapy.name," ")}}function se(j,N){if(1&j&&(i._UZ(0,"i",9),i.YNc(1,w,3,4,"ng-container",0),i.YNc(2,de,1,1,"ng-template",null,10,i.W1O)),2&j){const q=i.MAs(3),Y=i.oxw();i.xp6(1),i.Q6J("ngIf",Y.truncateLongName)("ngIfElse",q)}}class Z extends t.a{constructor(){super(...arguments),this.enablePopover=!0,this.truncateLongName=!1}set therapy(N){if(!N)throw new Error("therapy-tag Input requires LinkableTherapy.");this._therapy=N}get therapy(){return this._therapy}idFunction(){return this.therapy.id}}Z.\u0275fac=function(){let j;return function(q){return(j||(j=i.n5z(Z)))(q||Z)}}(),Z.\u0275cmp=i.Xpm({type:Z,selectors:[["cvc-therapy-tag"]],inputs:{therapy:"therapy",enablePopover:"enablePopover",truncateLongName:"truncateLongName"},features:[i.qOj],decls:7,vars:2,consts:[[4,"ngIf","ngIfElse"],["tag",""],["unlinked",""],["tagContent",""],[3,"routerLink"],[3,"ngTemplateOutlet"],["nz-popover","","nzPopoverPlacement","right",3,"nzPopoverMouseEnterDelay","nzPopoverContent","nzPopoverTrigger","nzMode","nzOnClose"],["therapyPopover",""],[3,"therapyId"],["nz-icon","","nzType","civic-therapy","nzTheme","twotone","nzTwotoneColor","#AC3996"],["fullName",""]],template:function(N,q){if(1&N&&(i.YNc(0,O,3,2,"ng-container",0),i.YNc(1,S,4,5,"ng-template",null,1,i.W1O),i.YNc(3,P,1,1,"ng-template",null,2,i.W1O),i.YNc(5,se,4,2,"ng-template",null,3,i.W1O)),2&N){const Y=i.MAs(4);i.Q6J("ngIf",q.linked)("ngIfElse",Y)}},dependencies:[m.O5,m.tP,l.rH,s.j,L.lU,R.Ls,T.a,M.W],encapsulation:2,changeDetection:0})},701:(Et,Me,a)=>{a.d(Me,{N:()=>M});var t=a(6895),i=a(9116),m=a(6672),l=a(6581),s=a(1102),L=a(9444),R=a(8974),T=a(4650);class M{}M.\u0275fac=function(O){return new(O||M)},M.\u0275mod=T.oAB({type:M}),M.\u0275inj=T.cJS({imports:[t.ez,i.Bz,m.X,l.$6,s.PV,L.s,R.s]})},403:(Et,Me,a)=>{a.d(Me,{m:()=>fe});var t=a(3240),i=a(4004),m=a(9300),l=a(4650),s=a(7630),L=a(6895),R=a(9116),T=a(1971),M=a(3679),b=a(9194),O=a(6672),F=a(1102),V=a(6903),S=a(3965),e=a(6550),P=a(2635),w=a(160);function de(ne,Ce){if(1&ne&&(l._UZ(0,"i",13),l.ALo(1,"entityColor"),l._uU(2)),2&ne){const H=l.oxw().ngIf;l.Q6J("nzTwotoneColor",l.lcZ(1,2,"Variant")),l.xp6(2),l.hij(" ",H.name," ")}}function se(ne,Ce){if(1&ne&&l._UZ(0,"cvc-gene-tag",14),2&ne){const H=l.oxw().ngIf;l.Q6J("enablePopover",!1)("gene",H.gene)}}function Z(ne,Ce){if(1&ne&&(l.TgZ(0,"nz-tag"),l._uU(1),l.qZA()),2&ne){const H=Ce.$implicit;l.xp6(1),l.Oqu(H)}}function j(ne,Ce){if(1&ne&&(l.TgZ(0,"nz-descriptions-item",15),l.YNc(1,Z,2,1,"nz-tag",16),l.qZA()),2&ne){const H=l.oxw().ngIf;l.xp6(1),l.Q6J("ngForOf",H.variantAliases)}}function N(ne,Ce){if(1&ne&&(l.TgZ(0,"nz-descriptions-item",17)(1,"cvc-link-tag",18),l._uU(2),l.qZA()()),2&ne){const H=l.oxw().ngIf;l.xp6(1),l.MGl("href","https://reg.genome.network/allele/",H.alleleRegistryId,".html"),l.xp6(1),l.hij(" ",H.alleleRegistryId," ")}}function q(ne,Ce){if(1&ne&&(l.TgZ(0,"a",19)(1,"nz-tag",20),l._UZ(2,"i",21),l._uU(3),l.qZA()()),2&ne){const H=l.oxw().ngIf;l.MGl("routerLink","/variants/",H.id,"/flags"),l.xp6(3),l.hij(" Flags (",H.flags.totalCount,") ")}}function Y(ne,Ce){if(1&ne&&(l.TgZ(0,"a",19)(1,"nz-tag",22),l._UZ(2,"i",23),l._uU(3),l.qZA()()),2&ne){const H=l.oxw().ngIf;l.MGl("routerLink","/variants/",H.id,"/revisions"),l.xp6(3),l.hij(" Revisions (",H.revisions.totalCount,") ")}}function k(ne,Ce){if(1&ne&&(l.TgZ(0,"a",19)(1,"nz-tag",24),l._UZ(2,"i",25),l._uU(3),l.qZA()()),2&ne){const H=l.oxw().ngIf;l.MGl("routerLink","/variants/",H.id,"/comments"),l.xp6(3),l.hij(" Comments (",H.comments.totalCount,") ")}}function me(ne,Ce){if(1&ne&&(l.ynx(0),l.TgZ(1,"nz-card",2),l.YNc(2,de,3,4,"ng-template",null,3,l.W1O),l.YNc(4,se,1,2,"ng-template",null,4,l.W1O),l.TgZ(6,"nz-descriptions",5),l.YNc(7,j,2,1,"nz-descriptions-item",6),l.YNc(8,N,3,2,"nz-descriptions-item",7),l.TgZ(9,"nz-descriptions-item",8),l._uU(10),l.qZA()(),l.TgZ(11,"nz-row",9)(12,"nz-col",10)(13,"nz-space",11),l.YNc(14,q,4,2,"a",12),l.YNc(15,Y,4,2,"a",12),l.YNc(16,k,4,2,"a",12),l.qZA()()()(),l.BQk()),2&ne){const H=Ce.ngIf,X=l.MAs(3),ve=l.MAs(5);l.xp6(1),l.Q6J("nzTitle",X)("nzExtra",ve),l.xp6(5),l.Q6J("nzColumn",2),l.xp6(1),l.Q6J("ngIf",H.variantAliases.length>0),l.xp6(1),l.Q6J("ngIf",H.alleleRegistryId&&"unregistered"!=H.alleleRegistryId),l.xp6(2),l.hij(" ",H.molecularProfiles.totalCount," ")}}class fe{constructor(Ce){this.gql=Ce}ngOnInit(){if(void 0===this.variantId)throw new Error("Must pass a variant ID into the variant popover component.");this.variant$=this.gql.watch({variantId:this.variantId}).valueChanges.pipe((0,i.U)(({data:Ce})=>Ce?.variant),(0,m.h)(t.ep))}}fe.\u0275fac=function(Ce){return new(Ce||fe)(l.Y36(s.ZYZ))},fe.\u0275cmp=l.Xpm({type:fe,selectors:[["cvc-variant-popover"]],inputs:{variantId:"variantId"},decls:3,vars:3,consts:[["id","popover-content"],[4,"ngIf"],["nzBordered","false","id","card-content",3,"nzTitle","nzExtra"],["cardTitle",""],["gene",""],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","Aliases","nzSpan","2",4,"ngIf"],["nzTitle","Allele Registry ID","nzSpan","2",4,"ngIf"],["nzTitle","Molecular Profiles","nzSpan","2"],["id","entity-child-counts"],["nzSpan","24"],["nzSize","small"],[3,"routerLink",4,"nzSpaceItem"],["nz-icon","","nzTheme","twotone","nzType","civic-variant",3,"nzTwotoneColor"],[3,"enablePopover","gene"],["nzTitle","Aliases","nzSpan","2"],[4,"ngFor","ngForOf"],["nzTitle","Allele Registry ID","nzSpan","2"],["tooltip","View on the ClinGen Allele Registry",3,"href"],[3,"routerLink"],["nzColor","red"],["nz-icon","","nzType","civic-flag"],["nzColor","orange"],["nz-icon","","nzType","civic-revision"],["nzColor","blue"],["nz-icon","","nzType","civic-comment"]],template:function(Ce,H){1&Ce&&(l.TgZ(0,"div",0),l.YNc(1,me,17,6,"ng-container",1),l.ALo(2,"ngrxPush"),l.qZA()),2&Ce&&(l.xp6(1),l.Q6J("ngIf",l.lcZ(2,1,H.variant$)))},dependencies:[L.sg,L.O5,R.rH,T.bd,M.t3,M.SK,b.R7,b.uj,O.j,F.Ls,V.NU,V.$1,S.H,e.l,P.fM,w.a],styles:["[_nghost-%COMP%]{display:block;margin:-8px -12px}[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}[_nghost-%COMP%]     .ant-descriptions-view{border:none}[_nghost-%COMP%]     #entity-child-counts{border-top:1px solid #f0f0f0;padding:8px}[_nghost-%COMP%]     #entity-child-counts nz-space{width:100%}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child nz-tag{margin-right:0}.popover-text[_ngcontent-%COMP%]{width:100%;padding:8px;border-bottom:1px solid #f0f0f0}#popover-content[_ngcontent-%COMP%]{min-width:350px;max-width:500px;min-height:125px}"]})},2767:(Et,Me,a)=>{a.d(Me,{k:()=>S});var t=a(6895),i=a(9116),m=a(2635),l=a(1971),s=a(3679),L=a(9194),R=a(6672),T=a(1102),M=a(6903),b=a(1229),O=a(4989),F=a(9444),V=a(4650);class S{}S.\u0275fac=function(P){return new(P||S)},S.\u0275mod=V.oAB({type:S}),S.\u0275inj=V.cJS({imports:[t.ez,i.Bz,m._N,m.pP,l.vh,s.Jb,L.q6,R.X,T.PV,M.zf,F.s,b.U,O.X]})},5457:(Et,Me,a)=>{a.d(Me,{I:()=>Y});var t=a(6654),i=a(9771),m=a(4650),l=a(6895),s=a(9116),L=a(6672),R=a(6581),T=a(1102),M=a(403),b=a(1730),O=a(4557);function F(k,me){}function V(k,me){if(1&k&&(m.ynx(0),m.TgZ(1,"a",4),m.YNc(2,F,0,0,"ng-template",5),m.qZA(),m.BQk()),2&k){const fe=m.oxw(),ne=m.MAs(2);m.xp6(1),m.Q6J("routerLink",fe.variant.link),m.xp6(1),m.Q6J("ngTemplateOutlet",ne)}}function S(k,me){}function e(k,me){if(1&k&&m._UZ(0,"cvc-variant-popover",9),2&k){const fe=m.oxw(3);m.Q6J("variantId",fe.variant.id)}}function P(k,me){if(1&k&&m.YNc(0,e,1,1,"cvc-variant-popover",8),2&k){const fe=m.oxw(2);m.Q6J("ngIf",fe.enablePopover)}}const w=function(k){return{deprecated:k}};function de(k,me){if(1&k){const fe=m.EpF();m.TgZ(0,"nz-tag",6),m.NdJ("nzOnClose",function(Ce){m.CHM(fe);const H=m.oxw();return m.KtG(H.itemClosed(Ce))}),m.YNc(1,S,0,0,"ng-template",5),m.qZA(),m.YNc(2,P,1,1,"ng-template",null,7,m.W1O)}if(2&k){const fe=m.MAs(3),ne=m.oxw(),Ce=m.MAs(6);m.Q6J("ngClass",m.VKq(6,w,ne.variant.deprecated))("nzPopoverMouseEnterDelay",ne.onCloseClicked?0:.5)("nzPopoverContent",fe)("nzPopoverTrigger",ne.enablePopover?"hover":null)("nzMode",ne.onCloseClicked?"closeable":"default"),m.xp6(1),m.Q6J("ngTemplateOutlet",Ce)}}function se(k,me){}function Z(k,me){if(1&k&&m.YNc(0,se,0,0,"ng-template",5),2&k){m.oxw();const fe=m.MAs(2);m.Q6J("ngTemplateOutlet",fe)}}function j(k,me){if(1&k&&(m.ynx(0),m._uU(1),m.ALo(2,"truncate"),m.BQk()),2&k){const fe=m.oxw(2);m.xp6(1),m.hij(" ",m.xi3(2,1,fe.variant.name,20)," ")}}function N(k,me){if(1&k&&m._uU(0),2&k){const fe=m.oxw(2);m.hij(" ",fe.variant.name," ")}}function q(k,me){if(1&k&&(m.TgZ(0,"cvc-icon-badges",10),m._UZ(1,"i",11),m.qZA(),m.YNc(2,j,3,4,"ng-container",0),m.YNc(3,N,1,1,"ng-template",null,12,m.W1O)),2&k){const fe=m.MAs(4),ne=m.oxw();m.Q6J("flagged",ne.variant.flagged)("entityColor",ne.iconColor),m.xp6(1),m.Q6J("nzTwotoneColor",ne.iconColor),m.xp6(1),m.Q6J("ngIf",ne.truncateLongName)("ngIfElse",fe)}}class Y extends t.a{constructor(){super(),this.enablePopover=!0,this.truncateLongName=!1,this.iconColor=(0,i.f)("Variant")}idFunction(){return this.variant.id}ngOnInit(){if(super.ngOnInit(),void 0===this.variant)throw new Error("cvc-variant-tag requires LinkableVariant input, none supplied.")}}Y.\u0275fac=function(me){return new(me||Y)},Y.\u0275cmp=m.Xpm({type:Y,selectors:[["cvc-variant-tag"]],inputs:{variant:"variant",enablePopover:"enablePopover",truncateLongName:"truncateLongName"},features:[m.qOj],decls:7,vars:2,consts:[[4,"ngIf","ngIfElse"],["tag",""],["unlinked",""],["tagContent",""],[3,"routerLink"],[3,"ngTemplateOutlet"],["nz-popover","",3,"ngClass","nzPopoverMouseEnterDelay","nzPopoverContent","nzPopoverTrigger","nzMode","nzOnClose"],["popoverContent",""],[3,"variantId",4,"ngIf"],[3,"variantId"],[3,"flagged","entityColor"],["nz-icon","","nzType","civic-variant","nzTheme","twotone",3,"nzTwotoneColor"],["fullName",""]],template:function(me,fe){if(1&me&&(m.YNc(0,V,3,2,"ng-container",0),m.YNc(1,de,4,8,"ng-template",null,1,m.W1O),m.YNc(3,Z,1,1,"ng-template",null,2,m.W1O),m.YNc(5,q,5,5,"ng-template",null,3,m.W1O)),2&me){const ne=m.MAs(4);m.Q6J("ngIf",fe.linked)("ngIfElse",ne)}},dependencies:[l.mk,l.O5,l.tP,s.rH,L.j,R.lU,T.Ls,M.m,b.b,O.W],styles:["[_nghost-%COMP%]     nz-tag.rejected, [_nghost-%COMP%]     nz-tag.submitted, [_nghost-%COMP%]     nz-tag.accepted, [_nghost-%COMP%]     nz-tag.deprecated{border-right-width:2px}[_nghost-%COMP%]     nz-tag.rejected, [_nghost-%COMP%]     nz-tag.deprecated{border-color:#e6e6e6;background-color:#fff;color:#999999d9}[_nghost-%COMP%]     nz-tag.submitted{border-color:#ffe58f}[_nghost-%COMP%]     nz-tag.accepted{border-color:#b7eb8f}[_nghost-%COMP%]{display:inline-block}"],changeDetection:0})},7043:(Et,Me,a)=>{a.d(Me,{Q:()=>b});var t=a(6895),i=a(9116),m=a(6672),l=a(1102),s=a(6581),L=a(2767),R=a(9444),T=a(6429),M=a(4650);class b{}b.\u0275fac=function(F){return new(F||b)},b.\u0275mod=M.oAB({type:b}),b.\u0275inj=M.cJS({imports:[t.ez,i.Bz,m.X,s.$6,l.PV,R.s,L.k,T.C]})},9657:(Et,Me,a)=>{a.d(Me,{t:()=>i});var t=a(4650);class i{transform(l,s){return l?"verbose"==s?"TIER_I_LEVEL_A"===l?"Tier I - Level A":"TIER_I_LEVEL_B"===l?"Tier I - Level B":"TIER_II_LEVEL_C"===l?"Tier II - Level C":"TIER_II_LEVEL_D"===l?"Tier II - Level D":"TIER_III"===l?"Tier III":"TIER_IV"===l?"Tier IV":"Not Applicable":l.toUpperCase().replace("TIER","").replace("LEVEL","").replace(/ /g,"").replace(/_/g,""):""}}i.\u0275fac=function(l){return new(l||i)},i.\u0275pipe=t.Yjl({name:"formatAmp",type:i,pure:!0})},160:(Et,Me,a)=>{a.d(Me,{a:()=>m});var t=a(9771),i=a(4650);class m{transform(s){return(0,t.f)(s)}}m.\u0275fac=function(s){return new(s||m)},m.\u0275pipe=i.Yjl({name:"entityColor",type:m,pure:!0})},4110:(Et,Me,a)=>{a.d(Me,{Do:()=>L});var t=a(7630),i=a(915),m=a(4650);const l=new Map([[t.Sx0.A,"Validated association"],[t.Sx0.B,"Clinical evidence"],[t.Sx0.C,"Case study"],[t.Sx0.D,"Preclinical evidence"],[t.Sx0.E,"Inferential association"]]),s=new Map([[1,"One Star"],[2,"Two Stars"],[3,"Three Stars"],[4,"Four Stars"],[5,"Five Stars"]]);class L{transform(T,M="display-string"){return null==T?"":"short-string"===M&&1===T.toString().length?"string"==typeof T?T:T.toString():"icon-name"===M?"number"==typeof T?`civic-rating${T}`:1===T.length?`civic-level${T.toLowerCase()}`:`civic-${T.replace(/_/g,"").toLowerCase()}`:"number"==typeof T?s.get(T)||T.toString():1===T.length?l.get(T)||T:(0,i.E)(T)}}L.\u0275fac=function(T){return new(T||L)},L.\u0275pipe=m.Yjl({name:"evidenceEnumDisplay",type:L,pure:!0})},6204:(Et,Me,a)=>{a.d(Me,{v:()=>L});var t=a(7630);const i={evidenceType:{[t.kqt.Diagnostic]:"Evidence pertains to a variant's impact on patient diagnosis (cancer subtype)",[t.kqt.Functional]:"Evidence pertains to a variant that alters biological function from the reference state",[t.kqt.Oncogenic]:"Evidence pertains to a somatic variant's involvement in tumor pathogenesis as described by the Hallmarks of Cancer",[t.kqt.Predictive]:"Evidence pertains to a variant's effect on therapeutic response",[t.kqt.Predisposing]:"Evidence pertains to a germline variant's role in conferring susceptibility to disease (including pathogenicity evaluations)",[t.kqt.Prognostic]:"Evidence pertains to a variant's impact on disease progression, severity, or patient survival"},assertionType:{[t.uBv.Diagnostic]:"Assertion pertains to a variant's impact on patient diagnosis (cancer subtype)",[t.uBv.Predictive]:"Assertion pertains to a variant's effect on therapeutic response",[t.uBv.Predisposing]:"Assertion pertains to a germline variant's role in conferring susceptibility to disease (including pathogenicity evaluations)",[t.uBv.Prognostic]:"Assertion pertains to a variant's impact on disease progression, severity, or patient survival",[t.uBv.Oncogenic]:"Assertion pertains to a somatic variant's role in driving tumor formation, growth, and other processes related to the Hallmarks of Cancer"},variantOrigin:{[t.huM.Somatic]:"Variant is a mutation, found only in tumor cells, having arisen in a specific tissue (non-germ cell), and is not expected to be inherited or passed to offspring",[t.huM.RareGermline]:"Variant is found in every cell (not restricted to tumor/diseased cells) and is thought to exist in less than 1% of the population relevant to this evidence item",[t.huM.CommonGermline]:"Variant is found in every cell (not restricted to tumor/diseased cells) and is thought to exist in at least 1% of the population relevant to this evidence item",[t.huM.Unknown]:"The variant origin is uncertain based on the available evidence",[t.huM.Na]:"The variant type (e.g., expression) is not compatible (or easily classified) with the CIViC concept of variant origin",[t.huM.Mixed]:"Variants in the Molecular Profile span multiple Origin types."},evidenceLevel:{[t.Sx0.A]:"Proven/consensus association in human medicine",[t.Sx0.B]:"Clinical trial or other primary patient data supports association",[t.Sx0.C]:"Individual case reports from clinical journals",[t.Sx0.D]:"In vivo or in vitro models support association",[t.Sx0.E]:"Indirect evidence"},evidenceLevelBrief:{[t.Sx0.A]:"Validated association",[t.Sx0.B]:"Clinical evidence",[t.Sx0.C]:"Case Study",[t.Sx0.D]:"Preclinical evidence",[t.Sx0.E]:"Inferential association"},therapyInteractionType:{[t.wkr.Combination]:"The therapies listed were used as part of a combination therapy approach",[t.wkr.Sequential]:"The therapies listed were used at separate timepoints in the same treatment plan",[t.wkr.Substitutes]:"The therapies listed are often considered to be of the same family, or behave similarly in a treatment setting"},evidenceRating:{1:"Poor - Claim is not supported well by experimental evidence. Results are not reproducible, or have very small sample size. No follow-up is done to validate novel claims",2:"Adequate - Evidence is not well supported by experimental data, and little follow-up data is available. Experiments may lack proper controls, have small sample size, or are not statistically convincing",3:"Average - Evidence is convincing, but not supported by a breadth of experiments. May be smaller scale projects, or novel results without many follow-up experiments. Discrepancies from expected results are explained and not concerning",4:"Strong - Well supported evidence. Experiments are well controlled, and results are convincing. Any discrepancies from expected results are well-explained and not concerning",5:"Excellent - Solid, well supported evidence from a lab or journal with respected academic standing. Experiments are well controlled, and results are clean and reproducible across multiple replicates. Evidence confirmed using separate methods"}},m={significance:{PREDICTIVE:{ADVERSE_RESPONSE:{EvidenceItem:"Associated with an adverse response to theraputic treatment",Assertion:"Associated with an adverse response to theraputic treatment"},REDUCED_SENSITIVITY:{EvidenceItem:"Response to treatment is lower than seen in other treatment contexts",Assertion:"Response to treatment is lower than seen in other treatment contexts"},RESISTANCE:{EvidenceItem:"Associated with clinical or preclinical resistance to treatment",Assertion:"Associated with clinical or preclinical resistance to treatment"},SENSITIVITYRESPONSE:{EvidenceItem:"Associated with clinical or preclinical response to treatment",Assertion:"Associated with a clinical or preclinical response to treatment"},NA:{EvidenceItem:"Clinical Significance is not applicable",Assertion:"Clinical Significance is not applicable"}},DIAGNOSTIC:{POSITIVE:{EvidenceItem:"Associated with diagnosis of disease or subtype",Assertion:"Associated with diagnosis of disease or subtype"},NEGATIVE:{EvidenceItem:"Associated with lack of disease or subtype",Assertion:"Associated with lack of disease or subtype"}},PROGNOSTIC:{BETTER_OUTCOME:{EvidenceItem:"Demonstrates better than expected clinical outcome",Assertion:"Demonstrates better than expected clinical outcome"},POOR_OUTCOME:{EvidenceItem:"Demonstrates worse than expected clinical outcome",Assertion:"Demonstrates worse than expected clinical outcome"},Na:{EvidenceItem:"Clinical Significance is not applicable",Assertion:"Clinical Significance is not applicable"}},PREDISPOSING:{PATHOGENIC:{Assertion:"Very strong evidence the variant is pathogenic"},LIKELY_PATHOGENIC:{Assertion:"Strong evidence (>90% certainty) the variant is pathogenic"},BENIGN:{Assertion:"Very strong evidence the variant is benign"},LIKELY_BENIGN:{Assertion:"Not expected to have a major effect on disease"},UNCERTAIN_SIGNIFICANCE:{Assertion:"Does not meet the ACMG/AMP criteria for pathogenic/benign, or the evidence is conflicting"},Na:{EvidenceItem:"Clinical Significance is not applicable"},PREDISPOSITION:{EvidenceItem:"Germline variant has predisposing potential for cancer, and may meet ACMG/AMP criteria supporting pathogenic or benign classification."},PROTECTIVENESS:{EvidenceItem:"Germline variant has properties that protect individuals from acquiring cancer."}},ONCOGENIC:{ONCOGENICITY:{EvidenceItem:"Somatic variant has oncogenic potential for driving cancer, and may meet ClinGen/CGC/VICC criteria supporting pathogenic or benign classification."},PROTECTIVENESS:{EvidenceItem:"Somatic variant has a protective role and minimizes co-occuring driver variants, tumor malignancy, or other oncogenic tumor properties."},ONCOGENIC:{Assertion:"Very strong evidence the variant is oncogenic."},LIKELY_ONCOGENIC:{Assertion:"Strong evidence the variant is oncogenic."},BENIGN:{Assertion:"Very strong evidence the variant does not have oncogenic properties."},LIKELY_BENIGN:{Assertion:"Strong evidence the variant does not have oncogenic properties."},UNCERTAIN_SIGNIFICANCE:{Assertion:"Does not meet guideline criteria for oncogenic/benign, or the evidence is conflicting."}}},evidenceDirection:{PREDICTIVE:{SUPPORTS:{EvidenceItem:"The experiment or study supports this variant's response to a therapy"},DOES_NOT_SUPPORT:{EvidenceItem:"The experiment or study does not support, or was inconclusive of an interaction between this variant and a therapy"}},DIAGNOSTIC:{SUPPORTS:{EvidenceItem:"The experiment or study supports this variant's impact on the diagnosis of disease or subtype"},DOES_NOT_SUPPORT:{EvidenceItem:"The experiment or study does not support this variant's impact on diagnosis of disease or subtype"}},PROGNOSTIC:{SUPPORTS:{EvidenceItem:"The experiment or study supports this variant's impact on prognostic outcome"},DOES_NOT_SUPPORT:{EvidenceItem:"The experiment or study does not support a prognostic association between variant and outcome"}},PREDISPOSING:{Na:{EvidenceItem:"Evidence Direction is not applicable"},SUPPORTS:{EvidenceItem:"The evidence supports a pathogenic or a protective role for a germline variant in cancer."},DOES_NOT_SUPPORT:{EvidenceItem:"The evidence supports a benign (if Clinical Significance is Predisposition) or lack or protective (if Clinical Significance is Protectiveness) role for a germline variant in cancer."}},FUNCTIONAL:{SUPPORTS:{EvidenceItem:"The experiment or study supports this variant causing alteration or non-alteration of the gene product function"},DOES_NOT_SUPPORT:{EvidenceItem:"The experiment or study does not support this variant causing alteration or non-alteration of the gene product function"}},ONCOGENIC:{NA:{EvidenceItem:"Evidence Direction is not applicable for Oncogenic Evidence Type"},SUPPORTS:{EvidenceItem:"The evidence supports an oncogenic or protective role for a somatic variant"},DOES_NOT_SUPPORT:{EvidenceItem:"The evidence does not support an oncogenic or protective role for a somatic variant"}}},assertionDirection:{PREDICTIVE:{SUPPORTS:{Assertion:"The Assertion and associated Evidence Items support this variant's response to a therapy"},DOES_NOT_SUPPORT:{Assertion:"The Assertion and associated evidence does not support, or was inconclusive of an interaction between this variant and a therapy"}},DIAGNOSTIC:{SUPPORTS:{Assertion:"The Assertion and associated Evidence Items support this variant's impact on the diagnosis of disease or subtype"},DOES_NOT_SUPPORT:{Assertion:"The Assertion and associated evidence does not support this variant's impact on diagnosis of disease or subtype"}},PROGNOSTIC:{SUPPORTS:{Assertion:"The Assertion and associated Evidence Items support this variant's impact on prognostic outcome"},DOES_NOT_SUPPORT:{Assertion:"The Assertion and associated evidence does not support a prognostic association between variant and outcome"}},PREDISPOSING:{SUPPORTS:{Assertion:"The Assertion and associated Evidence Items support a variant's impact on predisposing outcome"}},FUNCTIONAL:{SUPPORTS:{Assertion:"The Assertion and associated Evidence Items support this variant causing alteration or non-alteration of the gene product function"},DOES_NOT_SUPPORT:{Assertion:"The Assertion and associated evidence does not support this variant causing alteration or non-alteration of the gene product function"}},ONCOGENIC:{SUPPORTS:{Assertion:"The Assertion and associated Evidence Items support a variant's oncogenic, benign, or uncertain significance"}}}};var s=a(4650);class L{transform(T,M,b,O){return M&&T?function l(R,T,M,b){let O;return O=M&&b?m[R][M][T][b]:i[R][T],O||""}(M,T,b,O):""}}L.\u0275fac=function(T){return new(T||L)},L.\u0275pipe=s.Yjl({name:"enumTooltip",type:L,pure:!0})},8926:(Et,Me,a)=>{a.d(Me,{A:()=>m});var t=a(4650),i=a(1481);class m{constructor(s){this.sanitizer=s}transform(s,L){if(!L||""==L)return s;const R=new RegExp(L,"gi"),T=s.match(R);if(!T)return s;let M=s.replace(R,`<span class='typeahead-match'>${T[0]}</span>`);return this.sanitizer.bypassSecurityTrustHtml(M)}}m.\u0275fac=function(s){return new(s||m)(t.Y36(i.H7,16))},m.\u0275pipe=t.Yjl({name:"highlightTypeahead",type:m,pure:!0})},9444:(Et,Me,a)=>{a.d(Me,{s:()=>l});var t=a(6895),i=a(7742),m=a(4650);class l{}l.\u0275fac=function(L){return new(L||l)},l.\u0275mod=m.oAB({type:l}),l.\u0275inj=m.cJS({providers:[i.l],imports:[t.ez]})},7742:(Et,Me,a)=>{a.d(Me,{l:()=>m});var t=a(6530),i=a(4650);class m{transform(s){return s?(0,t.c)(s):""}}m.\u0275fac=function(s){return new(s||m)},m.\u0275pipe=i.Yjl({name:"sourceTypeDisplay",type:m,pure:!0})},4557:(Et,Me,a)=>{a.d(Me,{W:()=>i});var t=a(4650);class i{constructor(){}transform(l,s=25){if(l.length>s){let R=l.slice(0,s);var L=R.lastIndexOf(" ");return R.slice(0,L)+"\u2026"}return l}}i.\u0275fac=function(l){return new(l||i)},i.\u0275pipe=t.Yjl({name:"truncate",type:i,pure:!0})},320:(Et,Me,a)=>{a.d(Me,{Z:()=>i});var t=a(4650);class i{transform(l){return l?`civic-${l.replace(/_/g,"").toLowerCase()}`:""}}i.\u0275fac=function(l){return new(l||i)},i.\u0275pipe=t.Yjl({name:"typenameToIcon",type:i,pure:!0})},9169:(Et,Me,a)=>{a.d(Me,{Y:()=>m});var t=a(1135),i=a(4650);class m{constructor(){this.networkError$=new t.X(void 0)}clearErrors(){this.networkError$.next(void 0)}}m.\u0275fac=function(s){return new(s||m)},m.\u0275prov=i.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"})},9350:(Et,Me,a)=>{a.d(Me,{a:()=>O});var b,t=a(655),i=a(7630),m=a(9933),l=a(4004),s=a(8675),L=a(4782),R=a(6579),T=a(4650),M=a(529);let O=((b=class{constructor(V,S){function e(j){return!(!j||j.role!==i.i44.Admin)}function P(j){return!(!j||j.role!==i.i44.Editor&&j.role!==i.i44.Admin)}function w(j){return!(!j||j.role!==i.i44.Curator)}function de(j){return!(!j||j.role!==i.i44.Curator&&j.role!==i.i44.Editor&&j.role!==i.i44.Admin)}function se(j){return!(!j||j.role!==i.i44.Editor&&j.role!==i.i44.Admin||!j.mostRecentConflictOfInterestStatement||j.mostRecentConflictOfInterestStatement?.coiStatus!=i.Mgx.Conflict&&j.mostRecentConflictOfInterestStatement?.coiStatus!=i.Mgx.Valid)}function Z(j){if(j.mostRecentOrganizationId)return j.organizations.find(N=>N.id===j.mostRecentOrganizationId)}this.viewerBaseGQL=V,this.http=S,this.initialViewer={mostRecentOrg:void 0,signedIn:!1,isAdmin:!1,isEditor:!1,isCurator:!1,canCurate:!1,canModerate:!1,invalidCoi:!0},this.queryRef=this.viewerBaseGQL.watch(void 0,{notifyOnNetworkStatusChange:!1}),this.viewer$=this.queryRef.valueChanges.pipe((0,R.j)("data","viewer"),(0,l.U)(j=>({...j,signedIn:null!=j,signedOut:null==j,canCurate:de(j),canModerate:se(j),isAdmin:e(j),isEditor:P(j),isCurator:w(j),organizations:null==j?[]:j.organizations,mostRecentOrg:null==j?void 0:Z(j),invalidCoi:P(j)&&(!j.mostRecentConflictOfInterestStatement||j.mostRecentConflictOfInterestStatement.coiStatus===i.Mgx.Expired||j.mostRecentConflictOfInterestStatement.coiStatus===i.Mgx.Missing)})),(0,s.O)(this.initialViewer),(0,L.d)(1)),this.signedIn$=this.viewer$.pipe((0,l.U)(j=>j.signedIn)),this.signedOut$=this.viewer$.pipe((0,l.U)(j=>j.signedOut)),this.isAdmin$=this.viewer$.pipe((0,l.U)(j=>e(j))),this.isEditor$=this.viewer$.pipe((0,l.U)(j=>P(j))),this.isCurator$=this.viewer$.pipe((0,l.U)(j=>w(j))),this.canCurate$=this.viewer$.pipe((0,l.U)(j=>de(j))),this.canModerate$=this.viewer$.pipe((0,l.U)(j=>se(j)))}signOut(){this.http.get("/api/sign_out").pipe((0,m.t)(this)).subscribe(()=>this.queryRef.refetch())}refetch(){this.queryRef.refetch()}}).\u0275fac=function(V){return new(V||b)(T.LFG(i.Tt7),T.LFG(M.eN))},b.\u0275prov=T.Yz7({token:b,factory:b.\u0275fac,providedIn:"root"}),b);O=(0,t.gn)([(0,m.c)()],O)},6654:(Et,Me,a)=>{a.d(Me,{a:()=>i});var t=a(4650);class i{constructor(){this.linked=!0,this.popoverVisible=!1}ngOnInit(){this.onCloseClicked&&(this.linked=!1)}itemClosed(l){this.popoverVisible=!1,this.onCloseClicked&&this.onCloseClicked(this.idFunction())}}i.\u0275fac=function(l){return new(l||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["ng-component"]],inputs:{onCloseClicked:"onCloseClicked",linked:"linked"},decls:0,vars:0,template:function(l,s){},encapsulation:2})},915:(Et,Me,a)=>{function t(i){if("number"==typeof i||"boolean"==typeof i)return i;let m;if("NA"===i)m=["Not Applicable"];else if("SENSITIVITYRESPONSE"===i)m=["Sensitivity","/","Response"];else{m=i.toLowerCase().replace(/_/g," ").split(" ");for(var l=0;l<m.length;l++)m[l]=m[l].charAt(0).toUpperCase()+m[l].slice(1)}return m.join(" ")}a.d(Me,{E:()=>t})},6530:(Et,Me,a)=>{function t(i){switch(i){case"ASCO":return"ASCO";case"PUBMED":return"PubMed";case"ASH":return"ASH";default:return i}}a.d(Me,{c:()=>t})},9771:(Et,Me,a)=>{a.d(Me,{f:()=>i});const t=new Map([["Assertion","#7243b5"],["ClinicalTrial","#ac3996"],["CoordinateSystem","#f68f37"],["Disease","#e62f76"],["Event","#1db8a9"],["EvidenceItem","#2a63b6"],["Gene","#07aff0"],["Therapy","#ac3996"],["MolecularProfile","#33b358"],["Phenotype","#1db8a9"],["Source","#f9ba45"],["Variant","#74d34c"],["VariantGroup","#74d34c"],["VariantType","#74d34c"],["Comment","#44d8ef"],["Event","#ffdb00"],["Flag","#e24759"],["Queue","#666699"],["Revision","#f0673a"],["Curator","#a0d8f5"],["Editor","#58a0c4"],["Admin","#58a0c4"],["Organization","#3d7b99"],["Rejected","#BBBBBB"],["Greyscale","#999999"]]);function i(m){let l="#AAAAAA";if(m){const s=t.get(m);s&&(l=s)}return l}},6123:(Et,Me,a)=>{a.d(Me,{U:()=>s});var t=a(7579),i=a(1135),m=a(2722),l=a(8746);class s{constructor(R){this.networkErrorService=R}mutate(R,T,M,b){let O=new t.x,F={isSubmitting$:new i.X(!1),submitSuccess$:new i.X(!1),submitError$:new i.X([]),cleanup:()=>{O.next(),O.complete()}};return F.isSubmitting$.next(!0),R.mutate(T,M).pipe((0,m.R)(O),(0,l.x)(()=>{F.isSubmitting$.next(!1)})).subscribe({next:V=>{V.data&&b&&b(V.data)},error:V=>{V.graphQLErrors.length>0?F.submitError$.next(V.graphQLErrors.map(S=>S.message)):V.networkError&&this.networkErrorService.networkError$.next(V.networkError),F.cleanup()},complete:()=>{F.submitError$.next([]),F.submitSuccess$.next(!0),this.networkErrorService.networkError$.next(void 0),F.cleanup()}}),F}}},9241:(Et,Me,a)=>{a.d(Me,{h:()=>m});var t=a(6895),i=a(4650);class m{}m.\u0275fac=function(s){return new(s||m)},m.\u0275mod=i.oAB({type:m}),m.\u0275inj=i.cJS({imports:[t.ez]})},6814:(Et,Me,a)=>{a.d(Me,{P:()=>V});var t=a(4650),i=a(6895),m=a(7570);function l(S,e){1&S&&(t.ynx(0),t._uU(1," N/A "),t.BQk())}function s(S,e){1&S&&(t.ynx(0),t._uU(1," Not applicable "),t.BQk())}function L(S,e){if(1&S&&(t.TgZ(0,"span",4),t.ynx(1,0),t.YNc(2,l,2,0,"ng-container",5),t.YNc(3,s,2,0,"ng-container",6),t.BQk(),t.qZA()),2&S){const P=t.oxw();t.xp6(1),t.Q6J("ngSwitch",P.cvcDisplayMode),t.xp6(1),t.Q6J("ngSwitchCase","small")}}function R(S,e){1&S&&(t.ynx(0),t._uU(1," \u2013\xa0\u2013 "),t.BQk())}function T(S,e){1&S&&(t.ynx(0),t._uU(1,"Not specified"),t.BQk())}function M(S,e){if(1&S&&(t.TgZ(0,"span",7),t.ynx(1,0),t.YNc(2,R,2,0,"ng-container",5),t.YNc(3,T,2,0,"ng-container",6),t.BQk(),t.qZA()),2&S){const P=t.oxw();t.xp6(1),t.Q6J("ngSwitch",P.cvcDisplayMode),t.xp6(1),t.Q6J("ngSwitchCase","small")}}function b(S,e){1&S&&(t.ynx(0),t._uU(1,"!?"),t.BQk())}function O(S,e){1&S&&(t.ynx(0),t._uU(1,"Unspecified"),t.BQk())}function F(S,e){if(1&S&&(t.TgZ(0,"span",8),t.ynx(1,0),t.YNc(2,b,2,0,"ng-container",5),t.YNc(3,O,2,0,"ng-container",6),t.BQk(),t.qZA()),2&S){const P=t.oxw();t.xp6(1),t.Q6J("ngSwitch",P.cvcDisplayMode),t.xp6(1),t.Q6J("ngSwitchCase","small")}}class V{constructor(){this.cvcEmptyCategory="not-applicable",this.cvcDisplayMode="default"}}V.\u0275fac=function(e){return new(e||V)},V.\u0275cmp=t.Xpm({type:V,selectors:[["cvc-empty-value"]],inputs:{cvcEmptyCategory:"cvcEmptyCategory",cvcDisplayMode:"cvcDisplayMode"},decls:4,vars:4,consts:[[3,"ngSwitch"],["class","empty-symbol not-applicable","nz-tooltip","","nzTooltipTitle","Value is not applicable",4,"ngSwitchCase"],["nz-tooltip","","nzTooltipTitle","Unspecified","class","empty-symbol unspecified","nz-tooltip","","nzTooltipTitle","Value is unspecified",4,"ngSwitchCase"],["nz-tooltip","","nzTooltipTitle","INVALID","class","empty-symbol invalid","nz-tooltip","","nzTooltipTitle","Error: value requires specification",4,"ngSwitchCase"],["nz-tooltip","","nzTooltipTitle","Value is not applicable",1,"empty-symbol","not-applicable"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"],["nz-tooltip","","nzTooltipTitle","Unspecified","nz-tooltip","","nzTooltipTitle","Value is unspecified",1,"empty-symbol","unspecified"],["nz-tooltip","","nzTooltipTitle","INVALID","nz-tooltip","","nzTooltipTitle","Error: value requires specification",1,"empty-symbol","invalid"]],template:function(e,P){1&e&&(t.ynx(0,0),t.YNc(1,L,4,2,"span",1),t.YNc(2,M,4,2,"span",2),t.YNc(3,F,4,2,"span",3),t.BQk()),2&e&&(t.Q6J("ngSwitch",P.cvcEmptyCategory),t.xp6(1),t.Q6J("ngSwitchCase","not-applicable"),t.xp6(1),t.Q6J("ngSwitchCase","unspecified"),t.xp6(1),t.Q6J("ngSwitchCase","invalid"))},dependencies:[i.RF,i.n9,i.ED,m.SY],styles:[".empty-symbol[_ngcontent-%COMP%]{font-style:oblique;display:inline-block;white-space:no-wrap}.empty-symbol.not-applicable[_ngcontent-%COMP%]{color:#ccc;font-weight:500}.empty-symbol.unspecified[_ngcontent-%COMP%]{display:inline-block;color:#ccc;font-weight:500;padding:0 3px}.empty-symbol.invalid[_ngcontent-%COMP%]{display:inline-block;color:#ff4d4f;font-weight:700}"]})},1371:(Et,Me,a)=>{a.d(Me,{M:()=>s});var t=a(6895),i=a(1102),m=a(7570),l=a(4650);class s{}s.\u0275fac=function(R){return new(R||s)},s.\u0275mod=l.oAB({type:s}),s.\u0275inj=l.cJS({imports:[t.ez,m.cg,i.PV]})},8699:(Et,Me,a)=>{a.d(Me,{J:()=>Ae});var t=a(4650),i=a(3595),m=a(6895),l=a(3314),s=a(2925),L=a(2614),R=a(6818),T=a(8305),M=a(285),b=a(4281),O=a(403);function F(Qe,ie){if(1&Qe&&t._UZ(0,"cvc-molecular-profile-popover",9),2&Qe){const K=t.oxw();t.Q6J("molecularProfileId",K.entity.entityId)}}function V(Qe,ie){if(1&Qe&&t._UZ(0,"cvc-disease-popover",10),2&Qe){const K=t.oxw();t.Q6J("diseaseId",K.entity.entityId)}}function S(Qe,ie){if(1&Qe&&t._UZ(0,"cvc-therapy-popover",11),2&Qe){const K=t.oxw();t.Q6J("therapyId",K.entity.entityId)}}function e(Qe,ie){if(1&Qe&&t._UZ(0,"cvc-source-popover",12),2&Qe){const K=t.oxw();t.Q6J("sourceId",K.entity.entityId)}}function P(Qe,ie){if(1&Qe&&t._UZ(0,"cvc-phenotype-popover",13),2&Qe){const K=t.oxw();t.Q6J("phenotypeId",K.entity.entityId)}}function w(Qe,ie){if(1&Qe&&t._UZ(0,"cvc-evidence-popover",14),2&Qe){const K=t.oxw();t.Q6J("evidenceId",K.entity.entityId)}}function de(Qe,ie){if(1&Qe&&t._UZ(0,"cvc-gene-popover",15),2&Qe){const K=t.oxw();t.Q6J("geneId",K.entity.entityId)}}function se(Qe,ie){if(1&Qe&&t._UZ(0,"cvc-variant-popover",16),2&Qe){const K=t.oxw();t.Q6J("variantId",K.entity.entityId)}}const Z=["MolecularProfile","Disease","Therapy","Phenotype","Source","Gene","Variant","EvidenceItem"];class j{ngOnInit(){if(null==this.entity)throw new Error("entity input is required for CvcEntityTagPopoverComponent")}}j.\u0275fac=function(ie){return new(ie||j)},j.\u0275cmp=t.Xpm({type:j,selectors:[["cvc-entity-tag-popover"]],inputs:{entity:"entity"},decls:9,vars:9,consts:[[3,"ngSwitch"],[3,"molecularProfileId",4,"ngSwitchCase"],[3,"diseaseId",4,"ngSwitchCase"],[3,"therapyId",4,"ngSwitchCase"],[3,"sourceId",4,"ngSwitchCase"],[3,"phenotypeId",4,"ngSwitchCase"],[3,"evidenceId",4,"ngSwitchCase"],[3,"geneId",4,"ngSwitchCase"],[3,"variantId",4,"ngSwitchCase"],[3,"molecularProfileId"],[3,"diseaseId"],[3,"therapyId"],[3,"sourceId"],[3,"phenotypeId"],[3,"evidenceId"],[3,"geneId"],[3,"variantId"]],template:function(ie,K){1&ie&&(t.ynx(0,0),t.YNc(1,F,1,1,"cvc-molecular-profile-popover",1),t.YNc(2,V,1,1,"cvc-disease-popover",2),t.YNc(3,S,1,1,"cvc-therapy-popover",3),t.YNc(4,e,1,1,"cvc-source-popover",4),t.YNc(5,P,1,1,"cvc-phenotype-popover",5),t.YNc(6,w,1,1,"cvc-evidence-popover",6),t.YNc(7,de,1,1,"cvc-gene-popover",7),t.YNc(8,se,1,1,"cvc-variant-popover",8),t.BQk()),2&ie&&(t.Q6J("ngSwitch",K.entity.entityType),t.xp6(1),t.Q6J("ngSwitchCase","MolecularProfile"),t.xp6(1),t.Q6J("ngSwitchCase","Disease"),t.xp6(1),t.Q6J("ngSwitchCase","Therapy"),t.xp6(1),t.Q6J("ngSwitchCase","Source"),t.xp6(1),t.Q6J("ngSwitchCase","Phenotype"),t.xp6(1),t.Q6J("ngSwitchCase","EvidenceItem"),t.xp6(1),t.Q6J("ngSwitchCase","Gene"),t.xp6(1),t.Q6J("ngSwitchCase","Variant"))},dependencies:[m.RF,m.n9,l._,s.I,L.p,R.a,T.S,M._,b.Q,O.m],encapsulation:2,changeDetection:0});var N=a(9116),q=a(1102),Y=a(6672),k=a(7570),me=a(6581),fe=a(8926),ne=a(160),Ce=a(320);function H(Qe,ie){}function X(Qe,ie){if(1&Qe){const K=t.EpF();t.TgZ(0,"span",6)(1,"nz-tag",7),t.NdJ("nzCheckedChange",function(){t.CHM(K);const Pe=t.oxw();return t.KtG(Pe.cvcTagCheckedChange)})("nzOnClose",function(Pe){t.CHM(K);const Ge=t.oxw();return t.KtG(Ge.cvcOnClose.next(Pe))}),t.TgZ(2,"span",8),t.YNc(3,H,0,0,"ng-template",9),t.qZA()()()}if(2&Qe){const K=t.oxw(),Te=t.MAs(6),Pe=t.MAs(8);t.xp6(1),t.Q6J("nzMode",K.cvcMode)("nzChecked",K.cvcTagChecked),t.xp6(1),t.Q6J("nzPopoverContent",K.cvcShowPopover&&K.popoverInput?Te:void 0),t.xp6(1),t.Q6J("ngTemplateOutlet",Pe)}}function ve(Qe,ie){}function Ee(Qe,ie){if(1&Qe&&(t.TgZ(0,"span",13),t.YNc(1,ve,0,0,"ng-template",9),t.qZA()),2&Qe){const K=t.oxw(2),Te=t.MAs(8);t.Q6J("nzTooltipTitle",K.entity.tooltip),t.xp6(1),t.Q6J("ngTemplateOutlet",Te)}}function It(Qe,ie){if(1&Qe){const K=t.EpF();t.TgZ(0,"span",10)(1,"nz-tag",11),t.NdJ("nzOnClose",function(Pe){t.CHM(K);const Ge=t.oxw();return t.KtG(Ge.cvcOnClose.next(Pe))}),t.YNc(2,Ee,2,2,"span",12),t.qZA()()}if(2&Qe){const K=t.oxw(),Te=t.MAs(4);t.xp6(1),t.Q6J("nzMode","closeable"),t.xp6(1),t.Q6J("ngIf",K.entity&&K.entity.tooltip)("ngIfElse",Te)}}function St(Qe,ie){}function on(Qe,ie){if(1&Qe&&(t.TgZ(0,"span",13),t.YNc(1,St,0,0,"ng-template",9),t.qZA()),2&Qe){const K=t.oxw(2),Te=t.MAs(8);t.Q6J("nzTooltipTitle",K.entity.tooltip),t.xp6(1),t.Q6J("ngTemplateOutlet",Te)}}function it(Qe,ie){if(1&Qe&&(t.TgZ(0,"span",14),t.YNc(1,on,2,2,"span",12),t.qZA()),2&Qe){const K=t.oxw(),Te=t.MAs(4);t.xp6(1),t.Q6J("ngIf",K.entity&&K.entity.tooltip)("ngIfElse",Te)}}function mt(Qe,ie){}function Pt(Qe,ie){if(1&Qe&&(t.TgZ(0,"span",8),t.YNc(1,mt,0,0,"ng-template",9),t.qZA()),2&Qe){const K=t.oxw(),Te=t.MAs(6),Pe=t.MAs(8);t.Q6J("nzPopoverContent",K.popoverInput?Te:void 0),t.xp6(1),t.Q6J("ngTemplateOutlet",Pe)}}function Qt(Qe,ie){if(1&Qe&&t._UZ(0,"cvc-entity-tag-popover",16),2&Qe){const K=t.oxw(2);t.Q6J("entity",K.popoverInput)}}function mn(Qe,ie){if(1&Qe&&t.YNc(0,Qt,1,1,"cvc-entity-tag-popover",15),2&Qe){const K=t.oxw();t.Q6J("ngIf",K.popoverInput)}}function Lt(Qe,ie){if(1&Qe&&(t.TgZ(0,"span"),t.GkF(1,9),t.qZA()),2&Qe){t.oxw();const K=t.MAs(4);t.xp6(1),t.Q6J("ngTemplateOutlet",K)}}function yt(Qe,ie){if(1&Qe&&(t.TgZ(0,"a",23),t.GkF(1,9),t.qZA()),2&Qe){t.oxw();const K=t.MAs(4),Te=t.oxw(2);t.Q6J("routerLink",Te.entity.link),t.xp6(1),t.Q6J("ngTemplateOutlet",K)}}function qt(Qe,ie){if(1&Qe&&(t._UZ(0,"span",26),t.ALo(1,"typenameToIcon"),t.ALo(2,"entityColor")),2&Qe){const K=t.oxw(4);t.Q6J("nzType",t.lcZ(1,2,K.typename))("nzTwotoneColor",t.lcZ(2,4,K.typename))}}function lt(Qe,ie){if(1&Qe&&(t.YNc(0,qt,3,6,"span",24),t._UZ(1,"span",25),t.ALo(2,"highlightTypeahead")),2&Qe){t.oxw(2);const K=t.MAs(4),Te=t.oxw();t.Q6J("ngIf",Te.typename)("ngIfElse",K),t.xp6(1),t.Q6J("innerHtml",t.xi3(2,3,Te.entity.name,Te.cvcEmphasize),t.oJD)}}function kt(Qe,ie){if(1&Qe&&(t.ynx(0),t.YNc(1,Lt,2,1,"span",20),t.YNc(2,yt,2,2,"a",21),t.YNc(3,lt,3,6,"ng-template",null,22,t.W1O),t.BQk()),2&Qe){const K=t.oxw(2);t.xp6(1),t.Q6J("ngIf",K.cvcDisableLink),t.xp6(1),t.Q6J("ngIf",!K.cvcDisableLink)}}function sn(Qe,ie){}function wn(Qe,ie){if(1&Qe&&(t.YNc(0,sn,0,0,"ng-template",9),t._uU(1)),2&Qe){t.oxw();const K=t.MAs(4),Te=t.oxw();t.Q6J("ngTemplateOutlet",K),t.xp6(1),t.hij(" CACHE-MISS (",Te.cvcCacheId,") ")}}function zn(Qe,ie){1&Qe&&t._UZ(0,"span",27)}function Yt(Qe,ie){if(1&Qe&&(t.YNc(0,kt,5,2,"ng-container",17),t.YNc(1,wn,2,2,"ng-template",null,18,t.W1O),t.YNc(3,zn,1,0,"ng-template",null,19,t.W1O)),2&Qe){const K=t.MAs(2),Te=t.oxw();t.Q6J("ngIf",Te.entity)("ngIfElse",K)}}function xt(Qe,ie){if(1&Qe&&t._UZ(0,"cvc-entity-tag-popover",16),2&Qe){const K=t.oxw(2);t.Q6J("entity",K.popoverInput)}}function Ye(Qe,ie){if(1&Qe&&t.YNc(0,xt,1,1,"cvc-entity-tag-popover",15),2&Qe){const K=t.oxw();t.Q6J("ngIf",K.popoverInput)}}const $e=Qe=>void 0!==Qe&&Qe.__typename&&Qe.id&&void 0!==Qe.name;class Ae{set cvcLinkableEntity(ie){ie&&this.setLinkableEntity(ie)}set cvcCacheId(ie){ie&&this.setCachedLinkableEntity(ie)}constructor(ie){this.apollo=ie,this.cvcContext="default",this.cvcMode="default",this.cvcDisableLink=!0,this.cvcTagChecked=!1,this.cvcHasTooltip=!1,this.cvcFullWidth=!1,this.cvcShowPopover=!1,this.cvcTagCheckedChange=new t.vpe,this.cvcOnClose=new t.vpe}hasPopover(ie){return Z.includes(ie)}setLinkableEntity(ie){$e(ie)&&(this.typename=ie.__typename,this.id=ie.id,this.entity=ie,this.setPopoverInput(ie))}setCachedLinkableEntity(ie){const[K,Te]=ie.split(":");if(this.typename=K,this.id=+Te,!this.typename||!this.id)return void console.error(`entity-tag received an invalid cacheId: ${ie}. Cache IDs must be in the format 'TYPENAME:ID'.`);let Pe;Pe=this.cvcDisableLink?this.cvcHasTooltip?{id:`${K}:${Te}`,fragment:i.Ps`
          fragment Linkable${K}Entity on ${K} {
            id
            name
            tooltip
          }
        `}:{id:`${K}:${Te}`,fragment:i.Ps`
          fragment Linkable${K}Entity on ${K} {
            id
            name
          }
        `}:{id:`${K}:${Te}`,fragment:i.Ps`
          fragment Linkable${K}Entity on ${K} {
            id
            name
            link
          }
        `};const Ge=this.apollo.client.readFragment(Pe);$e(Ge)?(this.setPopoverInput(Ge),this.entity=Ge):console.error(`entity-tag could not find cached entity ${ie}`)}setPopoverInput(ie){$e(ie)&&this.hasPopover(ie.__typename)&&(this.popoverInput={entityId:ie.id,entityType:ie.__typename})}ngOnChanges(ie){ie.cvcMode&&"checkable"===ie.cvcMode.currentValue&&(this.cvcDisableLink=!0),ie.cvcContext&&"default"!==ie.cvcContext.currentValue&&(this.cvcDisableLink=!0)}}Ae.\u0275fac=function(ie){return new(ie||Ae)(t.Y36(i._M))},Ae.\u0275cmp=t.Xpm({type:Ae,selectors:[["cvc-entity-tag"]],hostVars:40,hostBindings:function(ie,K){2&ie&&t.ekj("full-width",!0===K.cvcFullWidth)("label-max",void 0!==K.cvcTruncateLabel)("label-max-50","50px"===K.cvcTruncateLabel)("label-max-75","75px"===K.cvcTruncateLabel)("label-max-100","100px"===K.cvcTruncateLabel)("label-max-125","125px"===K.cvcTruncateLabel)("label-max-150","150px"===K.cvcTruncateLabel)("label-max-175","175px"===K.cvcTruncateLabel)("label-max-200","200px"===K.cvcTruncateLabel)("label-max-250","250px"===K.cvcTruncateLabel)("label-max-300","300px"===K.cvcTruncateLabel)("label-max-350","350px"===K.cvcTruncateLabel)("label-max-400","400px"===K.cvcTruncateLabel)("label-max-450","450px"===K.cvcTruncateLabel)("label-max-500","500px"===K.cvcTruncateLabel)("rejected","REJECTED"===K.cvcStatus)("accepted","ACCEPTED"===K.cvcStatus)("submitted","SUBMITTED"===K.cvcStatus)("new","NEW"===K.cvcStatus)("superseded","SUPERSEDED"===K.cvcStatus)},inputs:{cvcLinkableEntity:"cvcLinkableEntity",cvcCacheId:"cvcCacheId",cvcStatus:"cvcStatus",cvcContext:"cvcContext",cvcMode:"cvcMode",cvcEmphasize:"cvcEmphasize",cvcDisableLink:"cvcDisableLink",cvcTagChecked:"cvcTagChecked",cvcHasTooltip:"cvcHasTooltip",cvcFullWidth:"cvcFullWidth",cvcShowPopover:"cvcShowPopover",cvcTruncateLabel:"cvcTruncateLabel"},outputs:{cvcTagCheckedChange:"cvcTagCheckedChange",cvcOnClose:"cvcOnClose"},features:[t.TTD],decls:11,vars:3,consts:[["class","default",4,"ngIf"],["class","select-item",4,"ngIf"],["class","multi-select-item",4,"ngIf"],["noTooltip",""],["popoverContent",""],["tagContent",""],[1,"default"],[3,"nzMode","nzChecked","nzCheckedChange","nzOnClose"],["nz-popover","","nzPopoverTrigger","hover",3,"nzPopoverContent"],[3,"ngTemplateOutlet"],[1,"select-item"],[3,"nzMode","nzOnClose"],["nz-tooltip","",3,"nzTooltipTitle",4,"ngIf","ngIfElse"],["nz-tooltip","",3,"nzTooltipTitle"],[1,"multi-select-item"],[3,"entity",4,"ngIf"],[3,"entity"],[4,"ngIf","ngIfElse"],["cacheMiss",""],["noIcon",""],[4,"ngIf"],[3,"routerLink",4,"ngIf"],["tagLabel",""],[3,"routerLink"],["nz-icon","","nzTheme","twotone","class","tag-icon",3,"nzType","nzTwotoneColor",4,"ngIf","ngIfElse"],[1,"tag-label",3,"innerHtml"],["nz-icon","","nzTheme","twotone",1,"tag-icon",3,"nzType","nzTwotoneColor"],["nz-icon","","nzType","question-circle","nzTheme","outline",1,"tag-icon"]],template:function(ie,K){1&ie&&(t.YNc(0,X,4,4,"span",0),t.YNc(1,It,3,3,"span",1),t.YNc(2,it,2,2,"span",2),t.YNc(3,Pt,2,2,"ng-template",null,3,t.W1O),t.YNc(5,mn,1,1,"ng-template",null,4,t.W1O),t.YNc(7,Yt,5,2,"ng-template",null,5,t.W1O),t.YNc(9,Ye,1,1,"ng-template",null,4,t.W1O)),2&ie&&(t.Q6J("ngIf","default"===K.cvcContext),t.xp6(1),t.Q6J("ngIf","select-item"===K.cvcContext),t.xp6(1),t.Q6J("ngIf","multi-select-item"===K.cvcContext))},dependencies:[m.O5,m.tP,N.rH,q.Ls,Y.j,k.SY,me.lU,j,fe.A,ne.a,Ce.Z],styles:['.label-max-50[_nghost-%COMP%]   .tag-label[_ngcontent-%COMP%]{max-width:50px;overflow:hidden;text-overflow:ellipsis}.label-max-75[_nghost-%COMP%]   .tag-label[_ngcontent-%COMP%]{max-width:75px;overflow:hidden;text-overflow:ellipsis}.label-max-100[_nghost-%COMP%]   .tag-label[_ngcontent-%COMP%]{max-width:100px;overflow:hidden;text-overflow:ellipsis}.label-max-125[_nghost-%COMP%]   .tag-label[_ngcontent-%COMP%]{max-width:125px;overflow:hidden;text-overflow:ellipsis}.label-max-150[_nghost-%COMP%]   .tag-label[_ngcontent-%COMP%]{max-width:150px;overflow:hidden;text-overflow:ellipsis}.label-max-175[_nghost-%COMP%]   .tag-label[_ngcontent-%COMP%]{max-width:175px;overflow:hidden;text-overflow:ellipsis}.label-max-200[_nghost-%COMP%]   .tag-label[_ngcontent-%COMP%]{max-width:200px;overflow:hidden;text-overflow:ellipsis}.label-max-250[_nghost-%COMP%]   .tag-label[_ngcontent-%COMP%]{max-width:250px;overflow:hidden;text-overflow:ellipsis}.label-max-300[_nghost-%COMP%]   .tag-label[_ngcontent-%COMP%]{max-width:300px;overflow:hidden;text-overflow:ellipsis}.label-max-350[_nghost-%COMP%]   .tag-label[_ngcontent-%COMP%]{max-width:350px;overflow:hidden;text-overflow:ellipsis}.label-max-400[_nghost-%COMP%]   .tag-label[_ngcontent-%COMP%]{max-width:400px;overflow:hidden;text-overflow:ellipsis}.label-max-450[_nghost-%COMP%]   .tag-label[_ngcontent-%COMP%]{max-width:450px;overflow:hidden;text-overflow:ellipsis}.label-max-500[_nghost-%COMP%]   .tag-label[_ngcontent-%COMP%]{max-width:500px;overflow:hidden;text-overflow:ellipsis}.rejected[_nghost-%COMP%]   nz-tag[_ngcontent-%COMP%], .submitted[_nghost-%COMP%]   nz-tag[_ngcontent-%COMP%], .accepted[_nghost-%COMP%]   nz-tag[_ngcontent-%COMP%], .deprecated[_nghost-%COMP%]   nz-tag[_ngcontent-%COMP%]{border-right-width:2px}.rejected[_nghost-%COMP%]   nz-tag[_ngcontent-%COMP%], .deprecated[_nghost-%COMP%]   nz-tag[_ngcontent-%COMP%]{border-color:#e6e6e6;background-color:#fff;color:#999999d9}.submitted[_nghost-%COMP%]   nz-tag[_ngcontent-%COMP%]{border-color:#ffe58f}.accepted[_nghost-%COMP%]   nz-tag[_ngcontent-%COMP%]{border-color:#b7eb8f}.full-width[_nghost-%COMP%]   nz-tag[_ngcontent-%COMP%]{width:100%}.full-width[_nghost-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-label[_ngcontent-%COMP%]{width:100%}nz-tag[_ngcontent-%COMP%]{margin-right:0;margin-inline-end:4px}  -checkable{background-color:transparent;cursor:pointer}  -checkable:not(  -checkable-checked):hover{color:#1890ff}  -checkable:active,   -checkable-checked{color:#fff}  -checkable-checked{background-color:#1890ff}  -checkable:active{background-color:#096dd9}.default[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]{margin:0;padding:0 2px 0 0;margin-inline-end:4px;max-width:100%}.default[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon[_ngcontent-%COMP%]{display:inline-block;padding:3px 2px 3px 4px;margin:-3px 0}.default[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-label[_ngcontent-%COMP%]{display:inline-block;margin:-3px 0 -4px;padding:3px 3px 3px 2px;line-height:1}.default[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]     i.ant-tag-close-icon.anticon-close{transition:none;margin-left:3px}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]{margin:0;padding:0 2px 0 0;margin-inline-end:4px;max-width:100%}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon[_ngcontent-%COMP%]{display:inline-block;padding:3px 2px 3px 4px;margin:-3px 0}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-label[_ngcontent-%COMP%]{display:inline-block;margin:-3px 0 -4px;padding:3px 3px 3px 2px;line-height:1}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]     i.ant-tag-close-icon.anticon-close{transition:none;margin-left:3px}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-label[_ngcontent-%COMP%]{padding-right:0}.multi-select-item[_ngcontent-%COMP%]{display:inline-block;margin-top:-3px;margin-bottom:-3px;margin-left:-4px;padding-left:4px}.multi-select-item[_ngcontent-%COMP%]   .tag-icon[_ngcontent-%COMP%]:after{content:" "}.typeahead-match[_ngcontent-%COMP%]{font-weight:700}a.disabled[_ngcontent-%COMP%]{pointer-events:none}'],changeDetection:0})},3258:(Et,Me,a)=>{a.d(Me,{x:()=>se});var t=a(6895),i=a(1102),m=a(6672),l=a(9444),s=a(7570),L=a(9116),R=a(4650);class T{}T.\u0275fac=function(j){return new(j||T)},T.\u0275mod=R.oAB({type:T}),T.\u0275inj=R.cJS({imports:[t.ez]});var M=a(6581),b=a(3638),O=a(1698),F=a(6292),V=a(4398),S=a(1028),e=a(9736),P=a(8974),w=a(2767);class de{}de.\u0275fac=function(j){return new(j||de)},de.\u0275mod=R.oAB({type:de}),de.\u0275inj=R.cJS({imports:[t.ez,V._,b.t,e.n,P.s,S.I,O.f,F.w,w.k]});class se{}se.\u0275fac=function(j){return new(j||se)},se.\u0275mod=R.oAB({type:se}),se.\u0275inj=R.cJS({imports:[t.ez,L.Bz,i.PV,m.X,s.cg,M.$6,T,l.s,de,T]})},7830:(Et,Me,a)=>{a.d(Me,{F:()=>w});var M,t=a(655),i=a(9933),m=a(4650),l=a(9116),s=a(6895),L=a(5681),R=a(9597),T=a(2635);function b(de,se){if(1&de&&m._UZ(0,"nz-alert",6),2&de){m.oxw();const Z=m.MAs(3),j=m.oxw();m.MGl("nzMessage","Error Submitting ",j.entityType,""),m.Q6J("nzDescription",Z)}}function O(de,se){if(1&de&&(m.TgZ(0,"li"),m._uU(1),m.qZA()),2&de){const Z=se.$implicit;m.xp6(1),m.hij(" ",Z," ")}}function F(de,se){if(1&de&&(m.TgZ(0,"ul"),m.YNc(1,O,2,1,"li",7),m.qZA()),2&de){const Z=m.oxw().ngIf;m.xp6(1),m.Q6J("ngForOf",Z)}}function V(de,se){if(1&de&&(m.ynx(0),m.YNc(1,b,1,2,"nz-alert",4),m.YNc(2,F,2,1,"ng-template",null,5,m.W1O),m.BQk()),2&de){const Z=se.ngIf;m.xp6(1),m.Q6J("ngIf",Z.length>0)}}function S(de,se){if(1&de&&(m.ynx(0),m._UZ(1,"nz-alert",8),m.BQk()),2&de){const Z=m.oxw();m.xp6(1),m.MGl("nzMessage","",Z.entityType," Submitted"),m.Q6J("nzDescription",Z.successMessage?Z.successMessage:null)}}function e(de,se){1&de&&m.Hsn(0)}let w=((M=class{set mutationState(se){this._mutationState=se,this.currentTimer&&clearTimeout(this.currentTimer),se&&se.submitSuccess$.pipe((0,i.t)(this)).subscribe(Z=>{Z&&(this.currentTimer=setTimeout(()=>{this.redirectUrl&&this.router.navigateByUrl(this.redirectUrl)},2500))})}get mutationState(){return this._mutationState}constructor(se){this.router=se}ngOnInit(){}}).\u0275fac=function(se){return new(se||M)(m.Y36(l.F0))},M.\u0275cmp=m.Xpm({type:M,selectors:[["cvc-form-submission-status-display"]],inputs:{mutationState:"mutationState",entityType:"entityType",successMessage:"successMessage",redirectUrl:"redirectUrl"},ngContentSelectors:["*"],decls:8,vars:10,consts:[[3,"nzSpinning"],[4,"ngIf"],[4,"ngIf","ngIfElse"],["form",""],["nzType","error","nzShowIcon","",3,"nzMessage","nzDescription",4,"ngIf"],["errorList",""],["nzType","error","nzShowIcon","",3,"nzMessage","nzDescription"],[4,"ngFor","ngForOf"],["nzType","success","nzShowIcon","",3,"nzMessage","nzDescription"]],template:function(se,Z){if(1&se&&(m.F$t(),m.TgZ(0,"nz-spin",0),m.ALo(1,"ngrxPush"),m.YNc(2,V,4,1,"ng-container",1),m.ALo(3,"ngrxPush"),m.YNc(4,S,2,2,"ng-container",2),m.ALo(5,"ngrxPush"),m.YNc(6,e,1,0,"ng-template",null,3,m.W1O),m.qZA()),2&se){const j=m.MAs(7);m.Q6J("nzSpinning",m.lcZ(1,4,null==Z.mutationState?null:Z.mutationState.isSubmitting$)),m.xp6(2),m.Q6J("ngIf",m.lcZ(3,6,null==Z.mutationState?null:Z.mutationState.submitError$)),m.xp6(2),m.Q6J("ngIf",m.lcZ(5,8,null==Z.mutationState?null:Z.mutationState.submitSuccess$))("ngIfElse",j)}},dependencies:[s.sg,s.O5,L.W,R.r,T.fM],encapsulation:2,changeDetection:0}),M);w=(0,t.gn)([(0,i.c)()],w)},9676:(Et,Me,a)=>{a.d(Me,{g:()=>R});var t=a(6895),i=a(2635),m=a(9597),l=a(6903),s=a(5681),L=a(4650);class R{}R.\u0275fac=function(M){return new(M||R)},R.\u0275mod=L.oAB({type:R}),R.\u0275inj=L.cJS({imports:[t.ez,i.pP,s.j,m.L,l.zf]})},8484:(Et,Me,a)=>{a.d(Me,{S:()=>K1});var t=a(4006),i=a(9116),m=a(6212),l=a(4697),s=a(6704),L=a(317),R=a(5910);const T={paramKey:!0};class M{constructor(h){this.route=h}postPopulate(h){if(h.fieldGroup||h.fieldArray||!1===(h.props||{...T}).paramKey||(this.paramKey=this.getParamKey(h),!this.paramKey))return;const C=this.getRouteSub(this.route,h),le=h.hooks?.onDestroy;C&&le&&(h.hooks={...h.hooks,onDestroy:pt=>{C.unsubscribe(),le(pt)}})}getParamKey(h){const c=h.props;if("string"==typeof c.paramKey)return c.paramKey;if(h.key){if("string"==typeof h.key)return h.key;console.warn(`observe-query-param cannot use field key ${JSON.stringify(h.key)} of type ${typeof h.key} to observe a query param. Use prop.paramKey to specify a query param string, or define a string field.key.`)}}getRouteSub(h,c){const C=h.queryParams.pipe((0,R.g)(this.paramKey)).subscribe(le=>{const pt=c.formControl,Ft=le[this.paramKey];if(!Ft)return void C.unsubscribe();let Mn;try{Mn=JSON.parse(Ft)}catch(Vn){return console.warn(`observe-query-param failed to parse query param ${this.paramKey} for field ${c.id}: ${Vn}`),console.warn("Note: Query values are parsed as JSON, therefore enum strings must be enclosed in double-quotes, and numeric entity IDs must be bare, unquoted."),void C.unsubscribe()}if(Mn){if(Object.keys(Mn).length>0&&Mn.constructor===Object)return console.warn(`observe-query-param may only set primitive types or arrays of primitive types, param ${this.paramKey} is an object: ${JSON.stringify(Mn)}`),void C.unsubscribe();pt.setValue(Mn)}});return C}}var S=a(6895),e=a(4650),P=a(2635),w=a(3679),de=a(8823);function se(g,h){if(1&g&&(e.TgZ(0,"div",9),e.GkF(1,10),e.qZA()),2&g){e.oxw();const c=e.MAs(5);e.xp6(1),e.Q6J("ngTemplateOutlet",c)}}function Z(g,h){if(1&g&&(e.TgZ(0,"div",11),e.GkF(1,10),e.qZA()),2&g){e.oxw();const c=e.MAs(9);e.xp6(1),e.Q6J("ngTemplateOutlet",c)}}function j(g,h){if(1&g&&(e.TgZ(0,"div",12),e.GkF(1,10),e.qZA()),2&g){e.oxw();const c=e.MAs(7);e.xp6(1),e.Q6J("ngTemplateOutlet",c)}}function N(g,h){if(1&g&&(e.TgZ(0,"nz-form-label",17),e._UZ(1,"span",18),e.qZA()),2&g){const c=h.ngrxLet,C=e.oxw(3);e.Q6J("nzRequired",C.props.required)("nzFor",C.id)("nzNoColon",!0)("nzTooltipTitle",C.props.tooltip)("nzSpan",c.span?c.span:null),e.xp6(1),e.Q6J("nzContent",C.props.label)}}function q(g,h){if(1&g&&(e.ynx(0),e.YNc(1,N,2,6,"nz-form-label",16),e.BQk()),2&g){const c=e.oxw(2);e.xp6(1),e.Q6J("ngrxLet",c.wrapper.layout.label)}}function Y(g,h){if(1&g&&(e.TgZ(0,"nz-form-control",19),e.GkF(1,null,20),e.qZA()),2&g){const c=h.ngrxLet,C=e.oxw(2),le=e.MAs(11),pt=e.MAs(13);e.Q6J("nzExtra",C.wrapper.showExtra&&!C.showError?le:void 0)("nzValidateStatus",C.errorState)("nzErrorTip",pt)("nzSpan",C.props.hideLabel?24:c.span?c.span:null)}}const k=function(g,h,c,C){return{disabled:g,error:h,required:c,valid:C}};function me(g,h){if(1&g&&(e.TgZ(0,"nz-form-item",13),e.YNc(1,q,2,1,"ng-container",14),e.YNc(2,Y,3,4,"nz-form-control",15),e.qZA()),2&g){const c=e.oxw();e.Q6J("nzGutter",c.wrapper.layout.item.gutter)("ngClass",e.l5B(4,k,c.props.disabled,c.showError,c.props.required,"VALID"===c.field.formControl.status)),e.xp6(1),e.Q6J("ngIf",c.props.label&&!0!==c.props.hideLabel),e.xp6(1),e.Q6J("ngrxLet",c.wrapper.layout.control)}}const fe=function(g,h){return{disabled:g,error:h}};function ne(g,h){if(1&g&&(e.TgZ(0,"nz-form-label",24),e._UZ(1,"span",25),e.qZA()),2&g){const c=e.oxw(3);e.Q6J("ngClass",e.WLB(6,fe,c.props.disabled,c.showError))("nzRequired",c.props.required)("nzFor",c.id)("nzTooltipTitle",c.props.tooltip)("nzNoColon",!0),e.xp6(1),e.Q6J("nzContent",c.props.label)}}function Ce(g,h){if(1&g&&(e.ynx(0),e.YNc(1,ne,2,9,"nz-form-label",23),e.BQk()),2&g){const c=e.oxw(2);e.xp6(1),e.Q6J("ngrxLet",c.wrapper.layout.label)}}function H(g,h){if(1&g&&(e.TgZ(0,"nz-form-control",26),e.GkF(1,null,20),e.qZA()),2&g){const c=e.oxw(2),C=e.MAs(11),le=e.MAs(13);e.Q6J("nzExtra",c.wrapper.showExtra&&!c.showError?C:void 0)("nzValidateStatus",c.errorState)("nzErrorTip",le)}}function X(g,h){if(1&g&&(e.TgZ(0,"nz-form-item",21),e.YNc(1,Ce,2,1,"ng-container",14),e.YNc(2,H,3,3,"nz-form-control",22),e.qZA()),2&g){const c=e.oxw();e.Q6J("ngClass",e.l5B(3,k,c.props.disabled,c.showError,c.props.required,"VALID"===c.field.formControl.status)),e.xp6(1),e.Q6J("ngIf",c.props.label&&!0!==c.props.hideLabel),e.xp6(1),e.Q6J("ngrxLet",c.wrapper.layout.control)}}function ve(g,h){if(1&g&&(e.ynx(0),e.TgZ(1,"nz-form-label",28),e._UZ(2,"span",25),e.qZA(),e.BQk()),2&g){const c=e.oxw(2);e.xp6(1),e.Q6J("nzRequired",c.props.required)("nzTooltipTitle",c.props.tooltip)("nzFor",c.id)("nzNoColon",!0),e.xp6(1),e.Q6J("nzContent",c.props.label)}}function Ee(g,h){if(1&g&&e._UZ(0,"formly-validation-message",29),2&g){const c=e.oxw(3);e.Q6J("field",c.field)}}function It(g,h){if(1&g&&(e.TgZ(0,"nz-form-control",26),e.GkF(1,null,20),e.YNc(3,Ee,1,1,"ng-template",null,8,e.W1O),e.qZA()),2&g){const c=e.MAs(4),C=e.oxw(2),le=e.MAs(11);e.Q6J("nzExtra",C.wrapper.showExtra&&!C.showError?le:void 0)("nzValidateStatus",C.errorState)("nzErrorTip",c)}}function St(g,h){if(1&g&&(e.TgZ(0,"nz-form-item",27),e.YNc(1,ve,3,5,"ng-container",14),e.YNc(2,It,5,3,"nz-form-control",22),e.qZA()),2&g){const c=e.oxw();e.Q6J("ngClass",e.l5B(3,k,c.props.disabled,c.showError,c.props.required,"VALID"===c.field.formControl.status)),e.xp6(1),e.Q6J("ngIf",c.props.label&&!0!==c.props.hideLabel),e.xp6(1),e.Q6J("ngrxLet",c.wrapper.layout.control)}}function on(g,h){if(1&g&&e._UZ(0,"span",34),2&g){const c=e.oxw(2);e.Q6J("innerHTML",c.props.description,e.oJD)}}function it(g,h){if(1&g&&e._UZ(0,"span",35),2&g){const c=e.oxw(2);e.Q6J("innerHTML",c.props.description,e.oJD)}}function mt(g,h){if(1&g&&e._UZ(0,"span",36),2&g){const c=e.oxw(2);e.Q6J("innerHTML",c.props.description,e.oJD)}}function Pt(g,h){if(1&g&&(e.TgZ(0,"div",30),e.ynx(1,0),e.YNc(2,on,1,1,"span",31),e.YNc(3,it,1,1,"span",32),e.YNc(4,mt,1,1,"span",33),e.BQk(),e.qZA()),2&g){const c=e.oxw();e.xp6(1),e.Q6J("ngSwitch",c.props.extraType),e.xp6(1),e.Q6J("ngSwitchCase","prompt"),e.xp6(1),e.Q6J("ngSwitchCase","description")}}function Qt(g,h){if(1&g&&(e.TgZ(0,"div",37),e._UZ(1,"formly-validation-message",29),e.qZA()),2&g){const c=e.oxw();e.xp6(1),e.Q6J("field",c.field)}}class mn extends m.n2{get errorState(){return this.showError?"error":""}constructor(){super(),this.formLayout="vertical"}ngOnInit(){try{this.wrapper={layout:{item:{gutter:[6,12],...this.props.layout?.item?this.props.layout.item:void 0},label:{span:4,...this.props.layout?.label?this.props.layout.label:void 0},control:{span:20,...this.props.layout?.control?this.props.layout?.control:void 0}},showExtra:void 0===this.props.layout?.showExtra||this.props.layout.showExtra}}catch(h){console.error(h)}this.options.formState.formLayout&&(this.formLayout=this.options.formState.formLayout)}ngAfterViewInit(){this.options.formState.formLayout&&(this.formLayout=this.options.formState.formLayout)}}mn.\u0275fac=function(h){return new(h||mn)},mn.\u0275cmp=e.Xpm({type:mn,selectors:[["cvc-form-field-wrapper"]],features:[e.qOj],decls:14,vars:4,consts:[[3,"ngSwitch"],["class","layout-horizontal",4,"ngSwitchCase"],["class","layout-inline",4,"ngSwitchCase"],["class","layout-vertical",4,"ngSwitchCase"],["horizontalFieldWrapper",""],["verticalFieldWrapper",""],["inlineFieldWrapper",""],["descriptionTpl",""],["errorTpl",""],[1,"layout-horizontal"],[3,"ngTemplateOutlet"],[1,"layout-inline"],[1,"layout-vertical"],[1,"layout-horizontal",3,"nzGutter","ngClass"],[4,"ngIf"],[3,"nzExtra","nzValidateStatus","nzErrorTip","nzSpan",4,"ngrxLet"],[3,"nzRequired","nzFor","nzNoColon","nzTooltipTitle","nzSpan",4,"ngrxLet"],[3,"nzRequired","nzFor","nzNoColon","nzTooltipTitle","nzSpan"],["nz-typography","","nzEllipsis","",3,"nzContent"],[3,"nzExtra","nzValidateStatus","nzErrorTip","nzSpan"],["fieldComponent",""],[1,"layout-vertical",3,"ngClass"],[3,"nzExtra","nzValidateStatus","nzErrorTip",4,"ngrxLet"],[3,"ngClass","nzRequired","nzFor","nzTooltipTitle","nzNoColon",4,"ngrxLet"],[3,"ngClass","nzRequired","nzFor","nzTooltipTitle","nzNoColon"],["nz-typography","","nzEllipsis","",1,"label",3,"nzContent"],[3,"nzExtra","nzValidateStatus","nzErrorTip"],[1,"layout-inline",3,"ngClass"],[3,"nzRequired","nzTooltipTitle","nzFor","nzNoColon"],[3,"field"],[1,"form-field-description"],["class","extra-prompt",3,"innerHTML",4,"ngSwitchCase"],["class","extra-description",3,"innerHTML",4,"ngSwitchCase"],[3,"innerHTML",4,"ngSwitchDefault"],[1,"extra-prompt",3,"innerHTML"],[1,"extra-description",3,"innerHTML"],[3,"innerHTML"],[1,"cvc-form-field-validation"]],template:function(h,c){1&h&&(e.ynx(0,0),e.YNc(1,se,2,1,"div",1),e.YNc(2,Z,2,1,"div",2),e.YNc(3,j,2,1,"div",3),e.BQk(),e.YNc(4,me,3,9,"ng-template",null,4,e.W1O),e.YNc(6,X,3,8,"ng-template",null,5,e.W1O),e.YNc(8,St,3,8,"ng-template",null,6,e.W1O),e.YNc(10,Pt,5,3,"ng-template",null,7,e.W1O),e.YNc(12,Qt,2,1,"ng-template",null,8,e.W1O)),2&h&&(e.Q6J("ngSwitch",c.formLayout),e.xp6(1),e.Q6J("ngSwitchCase","horizontal"),e.xp6(1),e.Q6J("ngSwitchCase","inline"),e.xp6(1),e.Q6J("ngSwitchCase","vertical"))},dependencies:[S.mk,S.O5,S.tP,S.RF,S.n9,S.ED,P.eJ,w.t3,w.SK,s.Nx,s.iK,s.Fd,de.ZU,m.M2],styles:['.typeahead-match[_ngcontent-%COMP%]{font-weight:700}.layout-vertical[_ngcontent-%COMP%]     nz-form-item:first-of-type{flex-wrap:nowrap;flex-direction:column}.layout-horizontal[_ngcontent-%COMP%]     nz-form-item:first-of-type{flex-direction:inherit}.layout-horizontal[_ngcontent-%COMP%]     nz-form-item:first-of-type nz-form-label{text-align:right;line-height:28px;white-space:inherit;padding:inherit}.layout-inline[_ngcontent-%COMP%]     nz-form-item:first-of-type{flex-direction:inherit}.layout-inline[_ngcontent-%COMP%]     nz-form-item:first-of-type nz-form-label{height:28px;line-height:28px;white-space:inherit;padding:inherit}.cvc-form-field-validation[_ngcontent-%COMP%], .form-field-description[_ngcontent-%COMP%]{min-height:16px;line-height:1.2;margin-top:4px}.cvc-form-field-validation[_ngcontent-%COMP%]   .extra-prompt[_ngcontent-%COMP%], .form-field-description[_ngcontent-%COMP%]   .extra-prompt[_ngcontent-%COMP%]{font-weight:400}.cvc-form-field-validation[_ngcontent-%COMP%]   .extra-description[_ngcontent-%COMP%], .form-field-description[_ngcontent-%COMP%]   .extra-description[_ngcontent-%COMP%]{font-style:oblique}.cvc-form-field-validation[_ngcontent-%COMP%]{font-weight:600}nz-form-item.layout-horizontal[_ngcontent-%COMP%]     nz-form-label:first-of-type label.ant-form-item-required{font-weight:500}nz-form-item.layout-horizontal[_ngcontent-%COMP%]     nz-form-label:first-of-type label.ant-form-item-required:before{border:1px solid #ff4d4f;height:1em;content:""}nz-form-item.layout-horizontal[_ngcontent-%COMP%]     nz-form-label:first-of-type   span.label{padding-right:4px}nz-form-item.layout-horizontal[_ngcontent-%COMP%]     nz-form-label:first-of-type.disabled label   span.label{color:#00000073}nz-form-item.layout-horizontal[_ngcontent-%COMP%]     nz-form-label:first-of-type.error label   span.label{color:#ff4d4f}nz-form-item.layout-horizontal[_ngcontent-%COMP%]     nz-form-label:first-of-type.valid label   span.label{color:#ff4d4f}nz-form-item.layout-vertical[_ngcontent-%COMP%]{background-color:#fff;border:1px solid #d9d9d9;padding:4px 8px;border-radius:6px;margin-bottom:16px}nz-form-item.layout-vertical.disabled[_ngcontent-%COMP%]{border:1px solid #f5f5f5;background-color:#f5f5f5}nz-form-item.layout-vertical[_ngcontent-%COMP%]     nz-form-label:first-of-type label.ant-form-item-required{font-weight:500}nz-form-item.layout-vertical[_ngcontent-%COMP%]     nz-form-label:first-of-type label.ant-form-item-required:before{border:1px solid #ff4d4f;height:1em;content:""}nz-form-item.layout-vertical[_ngcontent-%COMP%]     nz-form-label:first-of-type   span.label{padding-right:4px}nz-form-item.layout-vertical[_ngcontent-%COMP%]     nz-form-label:first-of-type.disabled label   span.label{color:#00000073}nz-form-item.layout-vertical[_ngcontent-%COMP%]     nz-form-label:first-of-type.error label   span.label{color:#ff4d4f}nz-form-item.layout-vertical[_ngcontent-%COMP%]     nz-form-label:first-of-type.valid label   span.label{color:#ff4d4f}nz-form-item.layout-inline[_ngcontent-%COMP%]     nz-form-label:first-of-type{text-align:right;margin-right:6px}nz-form-item.layout-inline[_ngcontent-%COMP%]     nz-form-label:first-of-type label.ant-form-item-required{font-weight:500}nz-form-item.layout-inline[_ngcontent-%COMP%]     nz-form-label:first-of-type label.ant-form-item-required:before{border:1px solid #ff4d4f;height:1em;content:""}nz-form-item.layout-inline[_ngcontent-%COMP%]     nz-form-label:first-of-type   span.label{padding-right:4px}nz-form-item.layout-inline[_ngcontent-%COMP%]     nz-form-label:first-of-type.disabled label   span.label{color:#00000073}nz-form-item.layout-inline[_ngcontent-%COMP%]     nz-form-label:first-of-type.error label   span.label{color:#ff4d4f}nz-form-item.layout-inline[_ngcontent-%COMP%]     nz-form-label:first-of-type.valid label   span.label{color:#ff4d4f}'],changeDetection:0});var Lt=a(7570),yt=a(1102);const qt={wrappers:[{name:"form-field",component:mn}]};class lt{}lt.\u0275fac=function(h){return new(h||lt)},lt.\u0275mod=e.oAB({type:lt}),lt.\u0275inj=e.cJS({imports:[S.ez,P._N,P.pP,t.UX,s.U5,w.Jb,yt.PV,Lt.cg,de.ZJ,m.X0.forChild(qt)]});var kt=a(8213);class sn extends m.fS{constructor(){super(...arguments),this.defaultOptions={props:{indeterminate:!0,hideLabel:!0}}}ngAfterViewInit(){console.log(this.props)}}sn.\u0275fac=function(){let g;return function(c){return(g||(g=e.n5z(sn)))(c||sn)}}(),sn.\u0275cmp=e.Xpm({type:sn,selectors:[["cvc-checkbox"]],features:[e.qOj],decls:2,vars:4,consts:[["nz-checkbox","",3,"nzIndeterminate","formControl","formlyAttributes","ngModelChange"]],template:function(h,c){1&h&&(e.TgZ(0,"label",0),e.NdJ("ngModelChange",function(le){return c.props.change&&c.props.change(c.field,le)}),e._uU(1),e.qZA()),2&h&&(e.Q6J("nzIndeterminate",c.props.indeterminate&&null==c.formControl.value)("formControl",c.formControl)("formlyAttributes",c.field),e.xp6(1),e.hij(" ",c.props.label,"\n"))},dependencies:[t.JJ,t.oH,kt.Ie,m.JD],changeDetection:0});const wn={types:[{name:"checkbox",wrappers:["form-field"],component:sn}]};class zn{}zn.\u0275fac=function(h){return new(h||zn)},zn.\u0275mod=e.oAB({type:zn}),zn.\u0275inj=e.cJS({imports:[S.ez,t.UX,kt.Wr,m.X0.forChild(wn),lt]});var Yt=a(6672),xt=a(9444);class Ye{}Ye.\u0275fac=function(h){return new(h||Ye)},Ye.\u0275mod=e.oAB({type:Ye}),Ye.\u0275inj=e.cJS({imports:[S.ez,Yt.X,yt.PV,Lt.cg,xt.s]});var $e=a(7221),Ae=a(5635),Qe=a(8231);class ie{}ie.\u0275fac=function(h){return new(h||ie)},ie.\u0275mod=e.oAB({type:ie}),ie.\u0275inj=e.cJS({imports:[S.ez,t.UX,m.X0.forChild(),$e.F,yt.PV,s.U5,Qe.LV,Ae.o7,xt.s]});var K=a(915),Te=a(655),Pe=a(9933),Ge=a(9300),ot=a(1135),Ct=a(4004),Ut=a(6579);function $t(){var g;let h=((g=class extends m.fS{constructor(){super()}configureBaseField(){this.field?.options?.fieldChanges?(this.onModelChange$=this.field.options.fieldChanges.pipe((0,Ge.h)(C=>C.field.id===this.field.id),(0,Ut.j)("value")),this.onValueChange$=new ot.X(this.formControl.value?this.formControl.value:void 0),this.onModelChange$.pipe((0,Pe.t)(this)).subscribe(C=>{this.onValueChange$.next(C)}),this.field.options?.formState&&this.field.options.formState.fields&&(this.state=this.field.options.formState,this.autoConfigureStateValueChanges())):console.error(`${this.field.id} could not find its fieldChanges Observable, ensure configureBaseField() is called in this field's AfterViewInit hook.`)}autoConfigureStateValueChanges(){!this.field.key&&"string"==typeof this.field.key&&console.warn(`${this.field.id} cannot auto-configure state value changes, as its field key is not a string. field.key: `,this.field.key);const C=`${this.field.key}$`;this.state&&this.state.fields[C]?(this.stateValueChange$=this.state.fields[C],this.onValueChange$.pipe((0,Ct.U)(le=>null===le?void 0:le),(0,Pe.t)(this)).subscribe(le=>{this.stateValueChange$&&this.stateValueChange$.next(le)})):console.warn(`${this.field.id} could not find state field ${C} on form state. State: `,this.state)}}).\u0275fac=function(C){return new(C||g)},g.\u0275cmp=e.Xpm({type:g,selectors:[["ng-component"]],features:[e.qOj],decls:0,vars:0,template:function(C,le){},encapsulation:2}),g);return h=(0,Te.gn)([(0,Pe.c)()],h),h}var Ke=a(7579),nt=a(1365);function ht(){return function(h){class c extends h{configureEnumSelectField(le){this.selectOption$=new ot.X([]),this.onTagClose$=new Ke.x,this.optionEnum$=le.optionEnum$,this.changeDetectorRef=le.changeDetectorRef,this.optionTemplate$=le.optionTemplate$?le.optionTemplate$:new ot.X([]),this.optionTemplate$.pipe((0,nt.M)(this.optionEnum$),(0,Pe.t)(this)).subscribe(pt=>{this.emitSelectOptions(pt)}),this.onTagClose$.pipe((0,Pe.t)(this)).subscribe(pt=>{this.resetField()})}emitSelectOptions([le,pt]){this.selectOption$.next(pt.map((Ft,Mn)=>({label:le[Mn]||Ft,value:Ft}))),this.changeDetectorRef?this.changeDetectorRef.detectChanges():console.error(`${this.field.id}'s configureEnumTagField() requires valid ChangeDetectorRef option, none detected.`)}resetField(){this.formControl.setValue(this.props.isMultiSelect?[]:void 0)}}return c.\u0275fac=function(){let C;return function(pt){return(C||(C=e.n5z(c)))(pt||c)}}(),c.\u0275prov=e.Yz7({token:c,factory:c.\u0275fac}),c}}const _t=function Vt(g){for(var h=arguments.length,c=new Array(h>1?h-1:0),C=1;C<h;C++)c[C-1]=arguments[C];return c.reduce(function(le,pt){return pt(le)},g)},tn=function(){return[]};class Dt{constructor(){this.cvcSelectMode="default",this.cvcPlaceholder="Select an option",this.cvcOptions=[],this.cvcShowError=!1,this.cvcDisabled=!1,this.cvcAllowClear=!0,this.cvcCustomTemplate=null,this.cvcOnFocus=new e.vpe}}Dt.\u0275fac=function(h){return new(h||Dt)},Dt.\u0275cmp=e.Xpm({type:Dt,selectors:[["cvc-enum-select"]],inputs:{cvcFormControl:"cvcFormControl",cvcFormlyAttributes:"cvcFormlyAttributes",cvcSelectMode:"cvcSelectMode",cvcPlaceholder:"cvcPlaceholder",cvcOptions:"cvcOptions",cvcShowError:"cvcShowError",cvcDisabled:"cvcDisabled",cvcAllowClear:"cvcAllowClear",cvcModelChange:"cvcModelChange",cvcCustomTemplate:"cvcCustomTemplate"},outputs:{cvcOnFocus:"cvcOnFocus"},decls:1,vars:12,consts:[[3,"formControl","formlyAttributes","nzMode","nzPlaceHolder","nzOptions","nzCustomTemplate","nzOptionHeightPx","nzDisabled","nzAllowClear","nzFocus","ngModelChange"]],template:function(h,c){1&h&&(e.TgZ(0,"nz-select",0),e.NdJ("nzFocus",function(){return c.cvcOnFocus.next()})("ngModelChange",function(le){return c.cvcModelChange&&c.cvcModelChange(c.cvcFormlyAttributes,le)}),e.qZA()),2&h&&(e.ekj("ng-dirty",c.cvcShowError),e.Q6J("formControl",c.cvcFormControl)("formlyAttributes",c.cvcFormlyAttributes)("nzMode",c.cvcSelectMode)("nzPlaceHolder",c.cvcPlaceholder?c.cvcPlaceholder:"Select Value")("nzOptions",c.cvcOptions?c.cvcOptions:e.DdM(11,tn))("nzCustomTemplate",c.cvcCustomTemplate?c.cvcCustomTemplate:null)("nzOptionHeightPx",30)("nzDisabled",c.cvcDisabled)("nzAllowClear",c.cvcAllowClear))},dependencies:[t.JJ,t.oH,m.JD,Qe.Vq],changeDetection:0});var We=a(4110),U=a(8926);function I(g,h){}function J(g,h){if(1&g){const c=e.EpF();e.TgZ(0,"span",5)(1,"nz-tag",6),e.NdJ("nzOnClose",function(le){e.CHM(c);const pt=e.oxw();return e.KtG(pt.cvcOnClose.next(le))}),e.YNc(2,I,0,0,"ng-template",7),e.qZA()()}if(2&g){const c=e.oxw(),C=e.MAs(5);e.xp6(1),e.Q6J("nzMode",c.cvcMode)("nzTooltipTitle",c.cvcTooltip)("nzChecked",c.cvcChecked),e.xp6(1),e.Q6J("ngTemplateOutlet",C)}}function ze(g,h){}function dt(g,h){if(1&g&&(e.TgZ(0,"span",8)(1,"nz-tag",9),e.YNc(2,ze,0,0,"ng-template",7),e.qZA()()),2&g){const c=e.oxw(),C=e.MAs(5);e.xp6(1),e.Q6J("nzMode","checkable")("nzChecked",c.cvcChecked),e.xp6(1),e.Q6J("ngTemplateOutlet",C)}}function Le(g,h){}function ge(g,h){if(1&g){const c=e.EpF();e.TgZ(0,"span",10)(1,"nz-tag",11),e.NdJ("nzOnClose",function(le){e.CHM(c);const pt=e.oxw();return e.KtG(pt.cvcOnClose.next(le))}),e.YNc(2,Le,0,0,"ng-template",7),e.qZA()()}if(2&g){e.oxw();const c=e.MAs(5);e.xp6(1),e.Q6J("nzMode","closeable"),e.xp6(1),e.Q6J("ngTemplateOutlet",c)}}function Se(g,h){}function ut(g,h){if(1&g&&(e.TgZ(0,"span",12)(1,"nz-tag",13),e.YNc(2,Se,0,0,"ng-template",7),e.qZA()()),2&g){const c=e.oxw(),C=e.MAs(5);e.xp6(1),e.Q6J("nzMode","default")("nzTooltipTitle",c.cvcTooltip),e.xp6(1),e.Q6J("ngTemplateOutlet",C)}}const vt=function(g){return{"tag-icon-large":g}};function Jt(g,h){if(1&g&&(e._UZ(0,"i",16),e.ALo(1,"evidenceEnumDisplay")),2&g){const c=e.oxw(2);e.Q6J("nzType",!0===c.cvcShowIcon?e.xi3(1,5,c.cvcAttrValue,"icon-name"):c.cvcShowIcon)("nzTwotoneColor",c.cvcIconColor)("nzTheme",c.cvcIconTheme)("ngClass",e.VKq(8,vt,!0===c.cvcZoomIcon)),e.uIk("style","color: "+c.cvcIconColor,e.Ckj)}}function zt(g,h){if(1&g&&(e._UZ(0,"span",17),e.ALo(1,"highlightTypeahead"),e.ALo(2,"evidenceEnumDisplay")),2&g){const c=e.oxw(2);e.Q6J("innerHtml",e.xi3(1,1,e.xi3(2,4,c.cvcAttrValue,"display-string"===c.cvcShowLabel?c.cvcShowLabel:"short-string"),c.cvcEmphasize),e.oJD)}}function en(g,h){if(1&g&&(e.YNc(0,Jt,2,10,"i",14),e.YNc(1,zt,3,7,"span",15)),2&g){const c=e.oxw();e.Q6J("ngIf",c.cvcAttrValue&&c.cvcShowIcon),e.xp6(1),e.Q6J("ngIf",c.cvcShowLabel)}}class Ue{constructor(){this.cvcShowLabel="display-string",this.cvcShowIcon=!0,this.cvcZoomIcon=!1,this.cvcContext="default",this.cvcMode="default",this.cvcChecked=!1,this.cvcIconColor="#797979",this.cvcLabelColor="#434343",this.cvcIconTheme="outline",this.cvcFullWidth=!1,this.cvcOnClose=new e.vpe}ngOnChanges(h){h.cvcContext&&"compact"===h.cvcContext.currentValue&&(this.cvcShowIcon=!0,this.cvcShowLabel=!1,this.cvcZoomIcon=!0)}}Ue.\u0275fac=function(h){return new(h||Ue)},Ue.\u0275cmp=e.Xpm({type:Ue,selectors:[["cvc-attribute-tag"]],hostVars:2,hostBindings:function(h,c){2&h&&e.ekj("full-width",!0===c.cvcFullWidth)},inputs:{cvcAttrValue:"cvcAttrValue",cvcShowLabel:"cvcShowLabel",cvcShowIcon:"cvcShowIcon",cvcZoomIcon:"cvcZoomIcon",cvcTooltip:"cvcTooltip",cvcContext:"cvcContext",cvcMode:"cvcMode",cvcChecked:"cvcChecked",cvcEmphasize:"cvcEmphasize",cvcIconColor:"cvcIconColor",cvcLabelColor:"cvcLabelColor",cvcIconTheme:"cvcIconTheme",cvcFullWidth:"cvcFullWidth"},outputs:{cvcOnClose:"cvcOnClose"},features:[e.TTD],decls:6,vars:4,consts:[["class","default",4,"ngIf"],["class","menu-item",4,"ngIf"],["class","select-item",4,"ngIf"],["class","compact",4,"ngIf"],["tagContent",""],[1,"default"],["nz-tooltip","",3,"nzMode","nzTooltipTitle","nzChecked","nzOnClose"],[3,"ngTemplateOutlet"],[1,"menu-item"],[3,"nzMode","nzChecked"],[1,"select-item"],[3,"nzMode","nzOnClose"],[1,"compact"],["nz-tooltip","",3,"nzMode","nzTooltipTitle"],["nz-icon","","class","tag-icon",3,"nzType","nzTwotoneColor","nzTheme","ngClass",4,"ngIf"],["class","tag-label",3,"innerHtml",4,"ngIf"],["nz-icon","",1,"tag-icon",3,"nzType","nzTwotoneColor","nzTheme","ngClass"],[1,"tag-label",3,"innerHtml"]],template:function(h,c){1&h&&(e.YNc(0,J,3,4,"span",0),e.YNc(1,dt,3,3,"span",1),e.YNc(2,ge,3,2,"span",2),e.YNc(3,ut,3,3,"span",3),e.YNc(4,en,2,2,"ng-template",null,4,e.W1O)),2&h&&(e.Q6J("ngIf","default"===c.cvcContext),e.xp6(1),e.Q6J("ngIf","menu-item"===c.cvcContext),e.xp6(1),e.Q6J("ngIf","select-item"===c.cvcContext),e.xp6(1),e.Q6J("ngIf","compact"===c.cvcContext))},dependencies:[S.mk,S.O5,S.tP,Yt.j,yt.Ls,Lt.SY,We.Do,U.A],styles:['.full-width[_nghost-%COMP%]{width:100%}.full-width[_nghost-%COMP%]   nz-tag[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]   nz-tag[_ngcontent-%COMP%]{margin-right:0;margin-inline-end:4px}.default[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]{margin:0;padding:0 2px 0 0;margin-inline-end:4px;max-width:100%}.default[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon[_ngcontent-%COMP%], .default[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon-large[_ngcontent-%COMP%]{display:inline-block}.default[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon[_ngcontent-%COMP%]{padding:3px 2px 3px 4px;margin:-3px 0}.default[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon-large[_ngcontent-%COMP%]{padding:3px 2px 3px 4px;margin:-3px 0}.default[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon-large[_ngcontent-%COMP%]     svg{transform:scale(1.25)}.default[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-label[_ngcontent-%COMP%]{display:inline-block;margin:-3px 0 -4px;padding:3px 3px 3px 2px;line-height:1}.default[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]     i.ant-tag-close-icon.anticon-close{transition:none;margin-left:3px}.compact[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]{margin:0;padding:0 2px 0 0;margin-inline-end:4px;max-width:100%}.compact[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon[_ngcontent-%COMP%], .compact[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon-large[_ngcontent-%COMP%]{display:inline-block}.compact[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon[_ngcontent-%COMP%]{padding:3px 2px 3px 4px;margin:-3px 0}.compact[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon-large[_ngcontent-%COMP%]{padding:3px 2px 3px 4px;margin:-3px 0}.compact[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon-large[_ngcontent-%COMP%]     svg{transform:scale(1.25)}.compact[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-label[_ngcontent-%COMP%]{display:inline-block;margin:-3px 0 -4px;padding:3px 3px 3px 2px;line-height:1}.compact[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]     i.ant-tag-close-icon.anticon-close{transition:none;margin-left:3px}.menu-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]{background-color:#fff}.menu-item[_ngcontent-%COMP%]   nz-tag.ant-tag-checkable[_ngcontent-%COMP%]{border:1px solid #d9d9d9}.menu-item[_ngcontent-%COMP%]   nz-tag.ant-tag-checkable[_ngcontent-%COMP%]:active{background-color:#e6f7ff}.menu-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]:not(.menu-item   nz-tag.ant-tag-checkable-checked)[_ngcontent-%COMP%]:hover{color:#000000d9;border-color:#1890ff}.menu-item[_ngcontent-%COMP%]   nz-tag.ant-tag-checkable-checked[_ngcontent-%COMP%]{border:transparent;background-color:#fff;color:#000000d9}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]{margin:0;padding:0 2px 0 0;margin-inline-end:4px;max-width:100%}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon[_ngcontent-%COMP%], .select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon-large[_ngcontent-%COMP%]{display:inline-block}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon[_ngcontent-%COMP%]{padding:3px 2px 3px 4px;margin:-3px 0}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon-large[_ngcontent-%COMP%]{padding:3px 2px 3px 4px;margin:-3px 0}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon-large[_ngcontent-%COMP%]     svg{transform:scale(1.25)}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-label[_ngcontent-%COMP%]{display:inline-block;margin:-3px 0 -4px;padding:3px 3px 3px 2px;line-height:1}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]     i.ant-tag-close-icon.anticon-close{transition:none;margin-left:3px}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]{background:#f5f5f5;border:1px solid #f0f0f0}.multi-select-item[_ngcontent-%COMP%]{display:inline-block;margin-top:-3px;margin-bottom:-3px;margin-left:-4px;padding-left:4px}.multi-select-item[_ngcontent-%COMP%]   .tag-icon[_ngcontent-%COMP%]:after{content:" "}.typeahead-match[_ngcontent-%COMP%]{font-weight:700}'],changeDetection:0});const Ze=["optionTemplates"];function ft(g,h){if(1&g&&e._UZ(0,"cvc-attribute-tag",4),2&g){const c=e.oxw().$implicit;e.Q6J("cvcAttrValue",c)}}function Re(g,h){1&g&&(e.ynx(0),e.YNc(1,ft,1,1,"ng-template",null,3,e.W1O),e.BQk())}function He(g,h){if(1&g){const c=e.EpF();e.TgZ(0,"div",5)(1,"cvc-attribute-tag",6),e.NdJ("cvcOnClose",function(le){e.CHM(c);const pt=e.oxw();return e.KtG(pt.onTagClose$.next(le))}),e.qZA()()}if(2&g){const c=h.$implicit,C=e.oxw();e.xp6(1),e.Q6J("cvcAttrValue",c.nzValue)("cvcContext",C.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",C.props.isMultiSelect?"default":"closeable")}}const Ie={Evidence:{PREDICTIVE:{SUPPORTS:"Experiment or study supports the variant's response to a drug",DOES_NOT_SUPPORT:"Experiment or study does not support, or was inconclusive of an interaction between the variant and a drug"},DIAGNOSTIC:{SUPPORTS:"Experiment or study supports the variant's impact on the diagnosis of disease or subtype",DOES_NOT_SUPPORT:"Experiment or study does not support the variant's impact on diagnosis of disease or subtype"},PROGNOSTIC:{SUPPORTS:"Experiment or study supports the variant's impact on prognostic outcome",DOES_NOT_SUPPORT:"Experiment or study does not support a prognostic association between variant and outcome"},PREDISPOSING:{SUPPORTS:"Suggests a pathogenic or a protective role for a germline variant in cancer",DOES_NOT_SUPPORT:"Supports a benign (for Predisposition) or lack of protective (for Protectiveness) role for a germline variant in cancer."},FUNCTIONAL:{SUPPORTS:"Experiment or study supports the variant causing alteration or non-alteration of the gene product function",DOES_NOT_SUPPORT:"Experiment or study does not support the variant causing alteration or non-alteration of the gene product function"},ONCOGENIC:{NA:"Not Applicable for Oncogenic Evidence Type.",SUPPORTS:"Supports an oncogenic or protective role for a somatic variant.",DOES_NOT_SUPPORT:"Supports a benign (for Oncogenicity) or lack of protective (for Protectiveness) role for a somatic variant in cancer."}},Assertion:{PREDICTIVE:{SUPPORTS:"Support the variant's response to a drug",DOES_NOT_SUPPORT:"Does not support, or was inconclusive of an interaction between the variant and a drug"},DIAGNOSTIC:{SUPPORTS:"Supports the variant's impact on the diagnosis of disease or subtype",DOES_NOT_SUPPORT:"Does not support the variant's impact on diagnosis of disease or subtype"},PROGNOSTIC:{SUPPORTS:"Supports the variant's impact on prognostic outcome",DOES_NOT_SUPPORT:"Does not support a prognostic association between variant and outcome"},PREDISPOSING:{SUPPORTS:"Suggests a pathogenic or a protective role for a germline variant in cancer",DOES_NOT_SUPPORT:"Does not support an association between the variant and disease causation"},FUNCTIONAL:{SUPPORTS:"Supports the variant causing alteration or non-alteration of the gene product function",DOES_NOT_SUPPORT:"Does not support the variant causing alteration or non-alteration of the gene product function"},ONCOGENIC:{SUPPORTS:"Supports an oncogenic or protective role for a somatic variant",DOES_NOT_SUPPORT:"Does not support an association between the variant and disease causation"}}},pe=_t($t(),ht());class Oe extends pe{constructor(h){super(),this.cdr=h,this.defaultOptions={props:{label:"Direction",labelFn:c=>`${c} Direction`,required:!0,isMultiSelect:!1,placeholder:"Select Entity Direction",placeholderFn:(c,C)=>`Select ${C?C+" ":""}${c} Direction`,requireTypePromptFn:c=>`Select ${c} Type to select its Direction`}},this.directionEnum$=new ot.X([])}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEnumSelectField({optionEnum$:this.directionEnum$,optionTemplate$:this.optionTemplate$,changeDetectorRef:this.cdr})}configureStateConnections(){if(!this.state)return console.error(`${this.field.id} requires a form state to populate its options, none was found.`),void(this.placeholder$=new ot.X("ERROR: Form state not found"));if(this.props.label=this.props.labelFn(this.state.entityName),this.props.tooltip=`An indicator of whether the ${this.state.entityName} statement supports or refutes the clinical significance of an event.`,this.placeholder$=new ot.X(this.props.placeholderFn(this.state.entityName)),!this.state.enums.direction$)return void console.error(`${this.field.id} could not find form state's direction$ to populate select.`);this.state.enums.direction$.pipe((0,Pe.t)(this)).subscribe(c=>{this.directionEnum$.next(c)}),this.optionTemplates||console.info(`${this.field.id} could not find its optionTemplates QueryList to populate its select options, so simple text labels will be displayed.`),this.optionTemplate$=this.optionTemplates?.changes.pipe((0,Ct.U)(c=>c.map(C=>C)));const h=`${this.state.entityName.toLowerCase()}Type$`;this.state.fields[h]?(this.onEntityType$=this.state.fields[h],this.onEntityType$.pipe((0,Pe.t)(this)).subscribe(c=>{c?(this.props.disabled=!1,this.props.description=void 0,this.props.extraType=void 0,this.placeholder$.next(this.props.placeholderFn(this.state.entityName,(0,K.E)(c)))):(this.props.disabled=!0,this.props.description=this.props.requireTypePromptFn(this.state.entityName),this.props.extraType="prompt"),this.formControl.value&&this.formControl.setValue(void 0)}),this.onValueChange$.pipe((0,nt.M)(this.onEntityType$),(0,Pe.t)(this)).subscribe(([c,C])=>{!C||!c||!this.state||(this.props.extraType="description",this.props.description=Ie[this.state.entityName][C][c])})):console.error(`${this.field.id} could not find form state's ${h} to populate Direction options.`)}}Oe.\u0275fac=function(h){return new(h||Oe)(e.Y36(e.sBO))},Oe.\u0275cmp=e.Xpm({type:Oe,selectors:[["cvc-direction-select"]],viewQuery:function(h,c){if(1&h&&e.Gf(Ze,5,e.Rgc),2&h){let C;e.iGM(C=e.CRH())&&(c.optionTemplates=C)}},features:[e.qOj],decls:7,vars:15,consts:[[3,"cvcFormControl","cvcFormlyAttributes","cvcSelectMode","cvcPlaceholder","cvcCustomTemplate","cvcOptions","cvcShowError","cvcDisabled"],[4,"ngFor","ngForOf"],["selectedTemplate",""],["optionTemplates",""],[3,"cvcAttrValue"],[1,"ant-select-selection-item-content"],[3,"cvcAttrValue","cvcContext","cvcMode","cvcOnClose"]],template:function(h,c){if(1&h&&(e._UZ(0,"cvc-enum-select",0),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.YNc(3,Re,3,0,"ng-container",1),e.ALo(4,"ngrxPush"),e.YNc(5,He,2,3,"ng-template",null,2,e.W1O)),2&h){const C=e.MAs(6);e.Q6J("cvcFormControl",c.formControl)("cvcFormlyAttributes",c.field)("cvcSelectMode",c.props.isMultiSelect?"multiple":"default")("cvcPlaceholder",e.lcZ(1,9,c.placeholder$))("cvcCustomTemplate",C)("cvcOptions",e.lcZ(2,11,c.selectOption$))("cvcShowError",c.showError)("cvcDisabled",c.props.disabled),e.xp6(3),e.Q6J("ngForOf",e.lcZ(4,13,c.directionEnum$))}},dependencies:[S.sg,Dt,Ue,P.fM],changeDetection:0});const ae={types:[{name:"direction-select",wrappers:["form-field"],component:Oe}]};class tt{}tt.\u0275fac=function(h){return new(h||tt)},tt.\u0275mod=e.oAB({type:tt}),tt.\u0275inj=e.cJS({imports:[S.ez,t.UX,P._N,P.pP,m.X0.forChild(ae),lt,ie,Ye]});var be=a(2383),rt=a(3258),Zt=a(6903),nn=a(9597);class En{}En.\u0275fac=function(h){return new(h||En)},En.\u0275mod=e.oAB({type:En}),En.\u0275inj=e.cJS({imports:[S.ez,t.UX,P._N,P.pP,m.X0.forChild(),nn.L,yt.PV,Qe.LV,Ae.o7,s.U5,de.ZJ,be.ic,Zt.zf,rt.x,xt.s]});var ei=a(9676),Sn=a(6616),li=a(6960),Rn=a(6581),Ti=a(4707),ro=a(9751),Hi=a(5684),ui=a(9646),Ui=a(3900),Pi=a(1884),ho=a(457),Ni=a(8382),qi=a(9770),kn=a(8505),jn=a(3240),ii=a(9841);function eo(...g){let h=g[0],c=g[1];if(0===h.length)return(0,ui.of)(c?c([]):[]);const C=h.slice();return c&&C.push((...le)=>c(le)),ii.a.apply(null,C)}function vi(){return function(h){class c extends h{configureEntitySelectField(le){if(this.typeaheadQuery=le.typeaheadQuery,this.tagQuery=le.tagQuery,this.getTypeaheadVars=le.getTypeaheadVarsFn,this.getTypeahedResults=le.getTypeaheadResultsFn,this.getTagQueryVars=le.getTagQueryVarsFn,this.getTagQueryResults=le.getTagQueryResultsFn,this.getSelectedItemOption=le.getSelectedItemOptionFn,this.getSelectOptions=le.getSelectOptionsFn,this.typeaheadParam$=le.typeaheadParam$,this.typeaheadParamName$=le.typeaheadParamName$,this.selectOpen$=le.selectOpen$||new Ti.t,this.selectComponent=le.selectComponent,this.minSearchStrLength=le.minSearchStrLength||0,this.cdr=le.changeDetectorRef,this.onSearch$=new ot.X(void 0),this.isLoading$=new ro.y,this.result$=new ot.X([]),this.onPopulate$=new Ke.x,this.onTagClose$=new Ke.x,this.onOpenChange$=new Ke.x,this.onCreate$=new Ke.x,this.selectOption$=new ot.X(void 0),this.response$=this.onSearch$.pipe((0,Hi.T)(1),(0,Ge.h)(jn.ep),(0,Ge.h)(pt=>0===this.minSearchStrLength||pt.length>=this.minSearchStrLength),(0,nt.M)(void 0!==this.typeaheadParam$?this.typeaheadParam$:(0,ui.of)(void 0)),(0,Ui.w)(([pt,Ft])=>{const Mn=this.getTypeaheadVars(pt,Ft),Vn=Ji=>(this.queryRef=this.typeaheadQuery.watch(Ji),this.isLoading$=this.queryRef.valueChanges.pipe((0,Ut.j)("loading"),(0,Pi.x)()),this.queryRef.valueChanges),Bi=Ji=>(0,ho.D)(this.queryRef.refetch(Ji));return(0,Ni.s)(()=>void 0===this.queryRef,(0,qi.P)(()=>Vn(Mn)),(0,qi.P)(()=>Bi(Mn)))})),this.onOpenChange$.subscribe(pt=>{pt&&this.onSearch$.next("")}),this.response$.pipe((0,Ge.h)(pt=>void 0!==pt.data),(0,Ct.U)(pt=>this.getTypeahedResults(pt)),(0,Pe.t)(this)).subscribe(pt=>{this.result$.next(pt),0===pt.length&&this.selectOption$.next([]),this.cdr.detectChanges()}),this.optionTemplates?this.optionTemplates.changes.pipe((0,nt.M)(this.result$),(0,Pe.t)(this)).subscribe(([pt,Ft])=>{const Mn=this.getSelectOptions(Ft,pt);this.selectOption$.next(Mn),this.cdr.detectChanges()}):(console.warn(`${this.field.id} could not find reference to optionTemplates ViewChildren, options will only show entity name text.`),this.result$.pipe((0,Pe.t)(this)).subscribe(pt=>{this.selectOption$.next(pt.map(Ft=>({label:Ft.name,value:Ft.id})))})),this.onPopulate$.pipe((0,Ge.h)(jn.ep),(0,Ui.w)(pt=>eo(this.getTagQueries(pt))),(0,Ct.U)(pt=>pt.map(Ft=>this.getTagQueryResults(Ft))),(0,kn.b)(pt=>{this.result$.next(pt)}),(0,Pe.t)(this)).subscribe(pt=>{let Ft;if(this.field.props&&this.field.props.isMultiSelect){const Mn=[];pt.forEach(Vn=>Mn.push(Vn?.id||void 0)),Ft=Mn}else Ft=pt[0].id;this.formControl.setValue(Ft),this.selectOpen$.next(!1)}),this.formControl.value){const pt=this.formControl.value;if(Object.keys(pt).length>0&&pt.constructor===Object)return void console.error(`${this.field.id} prepopulated value must be a primitive or array of primitives, value is an object:`,pt);this.onPopulate$.next(pt)}this.onTagClose$.pipe((0,Pe.t)(this)).subscribe(pt=>{this.resetField()})}getTagQueries(le){return"number"==typeof le&&(le=[le]),le.map(Ft=>this.tagQuery.fetch(this.getTagQueryVars(Ft),{fetchPolicy:"cache-first"}).pipe((0,Ge.h)(Mn=>!!Mn.data)))}resetField(){this.formControl.setValue(void 0),this.result$&&this.result$.next([])}}return c.\u0275fac=function(){let C;return function(pt){return(C||(C=e.n5z(c)))(pt||c)}}(),c.\u0275prov=e.Yz7({token:c,factory:c.\u0275fac}),c}}var ni,xi=a(5698),bn=a(7630),gi=a(9468),yo=a(4986),Ho=a(4782);function Jo(g,h){1&g&&e._UZ(0,"span",5),2&g&&e.Q6J("nzType","loading")}function sr(g,h){if(1&g&&(e.ynx(0),e._uU(1),e.BQk()),2&g){const c=e.oxw(2);e.xp6(1),e.hij(" ",c.notFoundDisplay.message," ")}}const Ao=function(g,h,c){return{$implicit:g,createMsg:h,model:c}};function Ir(g,h){if(1&g&&e.GkF(0,6),2&g){const c=e.oxw(2);e.Q6J("ngTemplateOutlet",c.cvcAddEntity)("ngTemplateOutletContext",e.kEZ(2,Ao,c.notFoundDisplay.searchStr,c.notFoundDisplay.message,c.cvcAddEntityModel))}}function qe(g,h){if(1&g&&(e.YNc(0,Jo,1,1,"span",2),e.YNc(1,sr,2,1,"ng-container",3),e.YNc(2,Ir,1,6,"ng-container",4)),2&g){const c=e.oxw();e.Q6J("ngIf",c.notFoundDisplay.showSpinner),e.xp6(1),e.Q6J("ngIf",!c.notFoundDisplay.showAddForm),e.xp6(1),e.Q6J("ngIf",c.notFoundDisplay.showAddForm)}}const re=function(){return[]},Fe={search:(g,h,c)=>`Searching ${g} matching "${h}"...`,searchAll:(g,h,c)=>`Listing all ${g}...`,searchParam:(g,h,c)=>`Searching ${c} ${g} matching "${h}"...`,searchParamAll:(g,h,c)=>`Listing all ${c} ${g}...`,searchEnterQuery:(g,h,c,C)=>`Enter at least ${C} characters to search ${c} ${g}`,searchEnterQueryAll:(g,h,c,C)=>`Enter at least least ${C} characters to search ${g}`,empty:(g,h,c)=>`No ${g} found matching "${h}"`,emptyAll:(g,h,c)=>`No ${g} found.`,emptyParam:(g,h,c)=>`No ${c} ${g} found matching "${h}"`,emptyParamAll:(g,h,c)=>`No ${c} ${g} found`};let je=((ni=class{constructor(h){this.cdr=h,this.cvcEntityName={singular:"Entity",plural:"Entities"},this.cvcSelectMode="default",this.cvcLoading=!1,this.cvcOptions=void 0,this.cvcShowError=!1,this.cvcDisabled=!1,this.cvcAllowClear=!0,this.cvcBorderless=!1,this.cvcShowArrow=!1,this.cvcAutoClearSearchValue=!0,this.cvcSuffixIcon="search",this.cvcCustomTemplate=null,this.cvcDropdownExtra=null,this.cvcAddEntity=null,this.cvcMinSearchStrLength=0,this.cvcOnOpenChange=new e.vpe,this.cvcOnSearch=(new e.vpe).pipe((0,gi.p)(300,yo.z,{leading:!1,trailing:!0}),(0,Ho.d)(1)),this.cvcOnModelChange=new e.vpe,this.cvcSelectComponent=new e.vpe,this.messageOptions=Fe,this.onParamName$=new ot.X(void 0),this.onOption$=new ot.X([]),this.onOpenChange$=new ot.X(!1),this.onLoading$=new ot.X(!1),this.previousIsOpen=!1}ngAfterViewInit(){this.cvcSelectMessages&&(this.messageOptions={...this.messageOptions,...this.cvcSelectMessages}),this.nzSelectComponent?(this.cvcSelectComponent.next(this.nzSelectComponent),this.notFoundDisplay={searchStr:"",showSpinner:!0,showAddForm:!1,message:`Searching ${this.cvcEntityName.plural}...`},this.onOpenChange$.pipe((0,Pe.t)(this)).subscribe(h=>{this.cvcOnOpenChange.next(h)}),(0,ii.a)([this.onOpenChange$,this.cvcOnSearch,this.onParamName$,this.onOption$,this.onLoading$.pipe((0,Pi.x)())]).pipe((0,Ct.U)(([h,c,C,le,pt])=>{const Ft=this.cvcEntityName.plural,Mn=this.cvcMinSearchStrLength,Vn=null!==this.cvcAddEntity,Bi=!1===this.previousIsOpen&&!0===h;return this.previousIsOpen=h,Bi?this.getSelectInitDisplay(Ft,Mn,C):pt&&c.length>=Mn?this.getSelectSearchingDisplay(c,Ft,Mn,C):h&&!pt&&c.length>=Mn&&0===le.length?this.getSelectEmptyDisplay(c,Ft,C,Vn):{searchStr:"",showSpinner:!1,showAddForm:!1,message:""}}),(0,kn.b)(h=>{this.notFoundDisplay=h}),(0,Pe.t)(this)).subscribe()):console.error(`${this.cvcEntityName.singular} entity-select could not gain reference to its nzSelectComponent, aborting AfterViewInit()`)}getSelectInitDisplay(h,c,C){let le=this.messageOptions.searchAll,pt=!1;return 0==c?(pt=!0,le=void 0===C?this.messageOptions.searchAll:this.messageOptions.searchParamAll):c>0&&(pt=!1,le=void 0===C?this.messageOptions.searchEnterQueryAll:this.messageOptions.searchEnterQuery),{message:le(h,"",C,c),showSpinner:pt,showAddForm:!1,searchStr:""}}getSelectSearchingDisplay(h,c,C,le){let pt=this.messageOptions.searchAll;return pt=void 0===le?h.length>0?this.messageOptions.search:this.messageOptions.searchAll:h.length>0?this.messageOptions.searchParam:this.messageOptions.searchParamAll,{message:pt(c,h,le),showSpinner:!0,showAddForm:!1,searchStr:h}}getSelectEmptyDisplay(h,c,C,le){let pt=this.messageOptions.empty;return pt=void 0===C?h.length>0?this.messageOptions.empty:this.messageOptions.emptyAll:h.length>0?this.messageOptions.emptyParam:this.messageOptions.emptyParamAll,{message:pt(c,h,C),showSpinner:!1,showAddForm:le,searchStr:h}}ngOnChanges(h){if(h.cvcParamName&&this.onParamName$.next(h.cvcParamName.currentValue),h.cvcOptions){const c=h.cvcOptions.currentValue;void 0!==c&&this.onOption$.next(c)}if(h.cvcLoading){const c=h.cvcLoading.currentValue;void 0!==c&&this.onLoading$.next(c)}}}).\u0275fac=function(h){return new(h||ni)(e.Y36(e.sBO))},ni.\u0275cmp=e.Xpm({type:ni,selectors:[["cvc-entity-select"]],viewQuery:function(h,c){if(1&h&&e.Gf(Qe.Vq,5),2&h){let C;e.iGM(C=e.CRH())&&(c.nzSelectComponent=C.first)}},inputs:{cvcFormControl:"cvcFormControl",cvcFormlyAttributes:"cvcFormlyAttributes",cvcEntityName:"cvcEntityName",cvcSelectMessages:"cvcSelectMessages",cvcSelectMode:"cvcSelectMode",cvcPlaceholder:"cvcPlaceholder",cvcLoading:"cvcLoading",cvcOptions:"cvcOptions",cvcResults:"cvcResults",cvcShowError:"cvcShowError",cvcDisabled:"cvcDisabled",cvcAllowClear:"cvcAllowClear",cvcBorderless:"cvcBorderless",cvcShowArrow:"cvcShowArrow",cvcAutoClearSearchValue:"cvcAutoClearSearchValue",cvcSuffixIcon:"cvcSuffixIcon",cvcCustomTemplate:"cvcCustomTemplate",cvcDropdownExtra:"cvcDropdownExtra",cvcParamName:"cvcParamName",cvcAddEntity:"cvcAddEntity",cvcAddEntityModel:"cvcAddEntityModel",cvcSelectOpen:"cvcSelectOpen",cvcMinSearchStrLength:"cvcMinSearchStrLength"},outputs:{cvcOnOpenChange:"cvcOnOpenChange",cvcOnSearch:"cvcOnSearch",cvcOnModelChange:"cvcOnModelChange",cvcSelectComponent:"cvcSelectComponent"},features:[e.TTD],decls:3,vars:21,consts:[["nzShowSearch","","nzServerSearch","","nzAllowClear","",3,"nzDropdownMatchSelectWidth","formControl","formlyAttributes","nzMode","nzPlaceHolder","nzCustomTemplate","nzOptionHeightPx","nzDisabled","nzLoading","nzAllowClear","nzBorderless","nzSuffixIcon","nzShowArrow","nzAutoClearSearchValue","nzOptions","nzDropdownRender","nzNotFoundContent","nzOpen","nzOpenChange","nzOnSearch","ngModelChange"],["searchMessages",""],["nz-icon","",3,"nzType",4,"ngIf"],[4,"ngIf"],[3,"ngTemplateOutlet","ngTemplateOutletContext",4,"ngIf"],["nz-icon","",3,"nzType"],[3,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(h,c){if(1&h&&(e.TgZ(0,"nz-select",0),e.NdJ("nzOpenChange",function(le){return c.onOpenChange$.next(le)})("nzOnSearch",function(le){return c.cvcOnSearch.next(le)})("ngModelChange",function(le){return c.cvcOnModelChange.next(le)}),e.qZA(),e.YNc(1,qe,3,3,"ng-template",null,1,e.W1O)),2&h){const C=e.MAs(2);e.ekj("ng-dirty",c.cvcShowError),e.Q6J("nzDropdownMatchSelectWidth",!1)("formControl",c.cvcFormControl)("formlyAttributes",c.cvcFormlyAttributes)("nzMode",c.cvcSelectMode)("nzPlaceHolder",c.cvcPlaceholder||"Search "+c.cvcEntityName.plural)("nzCustomTemplate",c.cvcCustomTemplate||null)("nzOptionHeightPx",30)("nzDisabled",c.cvcDisabled)("nzLoading",c.cvcLoading)("nzAllowClear",c.cvcAllowClear)("nzBorderless",c.cvcBorderless)("nzSuffixIcon",c.cvcSuffixIcon)("nzShowArrow",c.cvcShowArrow)("nzAutoClearSearchValue",c.cvcAutoClearSearchValue)("nzOptions",c.cvcOptions||e.DdM(20,re))("nzDropdownRender",c.cvcDropdownExtra||null)("nzNotFoundContent",C)("nzOpen",c.cvcSelectOpen)}},dependencies:[S.O5,S.tP,t.JJ,t.oH,m.JD,yt.Ls,Qe.Vq],changeDetection:0}),ni);je=(0,Te.gn)([(0,Pe.c)({arrayName:"stateSubscriptions"})],je);var Pn,Tt=a(8699),Nt=a(6123),jt=a(9169),hn=a(7044),ln=a(1664),gn=a(7830);function Tn(g,h){if(1&g&&e._uU(0),2&g){const c=e.oxw();e.Oqu(c.successMessage)}}function xn(g,h){if(1&g&&(e.ynx(0),e._uU(1),e.BQk()),2&g){const c=e.oxw();e.xp6(1),e.hij(' "',c.model.name,'" ')}}const An=function(){return[0,0]};let Xn=((Pn=class{set cvcSearchString(h){h&&this.searchString$.next(h)}constructor(h,c){this.query=h,this.errors=c,this.cvcOnCreate=new e.vpe,this.form=new t.nJ({}),this.model={name:""},this.formLayout="horizontal",this.options={formState:{formLayout:this.formLayout}},this.onSubmit$=new Ke.x,this.searchString$=new ot.X(void 0),this.addDiseaseMutator=new Nt.U(this.errors),this.fields=[{key:"doid",type:"input",props:{label:"DOID",keydown:(C,le)=>{"Tab"===le.code&&le.stopPropagation()}}},{key:"name",props:{hidden:!0,required:!0}}],this.searchString$.pipe((0,Pe.t)(this)).subscribe(C=>{C&&(this.model.name=C)}),this.onSubmit$.pipe((0,Pe.t)(this)).subscribe(C=>{console.log("disease-quick-add form model submitted.",C),this.submitDisease(C)})}submitDisease(h){h.name?this.mutationState=this.addDiseaseMutator.mutate(this.query,this.model,{},c=>{console.log("disease-quick-add submit data callback",c),c.addDisease&&(this.successMessage=c.addDisease.new?`New Disease ${c.addDisease.disease.name} added.`:`Existing Disease ${c.addDisease.disease.name} with DOID ${c.addDisease.disease.doid} found. `,setTimeout(()=>{c&&c.addDisease&&this.cvcOnCreate.next(c.addDisease.disease.id)},1e3))}):console.error("disease-quick-add form submitDisease requires model with valid name.")}}).\u0275fac=function(h){return new(h||Pn)(e.Y36(bn.MPi),e.Y36(jt.Y))},Pn.\u0275cmp=e.Xpm({type:Pn,selectors:[["cvc-disease-quick-add-form"]],inputs:{cvcSearchString:"cvcSearchString"},outputs:{cvcOnCreate:"cvcOnCreate"},decls:11,vars:11,consts:[["entityType","Disease",3,"mutationState","successMessage"],["success",""],["nz-form","","nzLayout","horizontal",3,"formGroup","ngSubmit"],[3,"nzGutter"],["nzSpan","24"],[3,"form","fields","model","options","modelChange"],["nz-button","","nzType","primary","nzBlock","",3,"disabled"],[4,"ngIf"]],template:function(h,c){if(1&h&&(e.TgZ(0,"cvc-form-submission-status-display",0),e.YNc(1,Tn,1,1,"ng-template",null,1,e.W1O),e.TgZ(3,"form",2),e.NdJ("ngSubmit",function(){return c.onSubmit$.next(c.model)}),e.TgZ(4,"nz-row",3)(5,"nz-col",4)(6,"formly-form",5),e.NdJ("modelChange",function(le){return c.model=le}),e.qZA()(),e.TgZ(7,"nz-col",4)(8,"button",6),e._uU(9," Add Disease\xa0 "),e.YNc(10,xn,2,1,"ng-container",7),e.qZA()()()()()),2&h){const C=e.MAs(2);e.Q6J("mutationState",c.mutationState)("successMessage",C),e.xp6(3),e.Q6J("formGroup",c.form),e.xp6(1),e.Q6J("nzGutter",e.DdM(10,An)),e.xp6(2),e.Q6J("form",c.form)("fields",c.fields)("model",c.model)("options",c.options),e.xp6(2),e.Q6J("disabled",!c.form.valid),e.xp6(2),e.Q6J("ngIf",c.model.name)}},dependencies:[S.O5,t._Y,t.JL,t.sg,m.T7,Sn.ix,hn.w,ln.dQ,w.t3,w.SK,s.Lr,gn.F],encapsulation:2,changeDetection:0}),Pn);Xn=(0,Te.gn)([(0,Pe.c)()],Xn);const On=["addDisease"],Bn=["optionTemplates"];function Gn(g,h){if(1&g&&(e.ynx(0),e.TgZ(1,"strong"),e._uU(2,"DOID:"),e.qZA(),e._UZ(3,"span",9),e.ALo(4,"highlightTypeahead"),e.BQk()),2&g){const c=e.oxw(2).$implicit,C=e.oxw().ngrxLet;e.xp6(3),e.Q6J("innerHtml",e.xi3(4,1,c.doid,C),e.oJD)}}function pi(g,h){if(1&g&&(e.ynx(0),e._uU(1," \xa0 "),e.TgZ(2,"strong"),e._uU(3,"Aliases: "),e.qZA(),e.TgZ(4,"em"),e._UZ(5,"span",10),e.ALo(6,"highlightTypeahead"),e.qZA(),e.BQk()),2&g){const c=e.oxw(2).$implicit,C=e.oxw().ngrxLet;e.xp6(5),e.Q6J("innerHtml",e.xi3(6,1,c.diseaseAliases.join(", "),C),e.oJD)}}function ri(g,h){if(1&g&&(e._UZ(0,"cvc-entity-tag",6),e.TgZ(1,"span",7),e.YNc(2,Gn,5,4,"ng-container",8),e.YNc(3,pi,7,4,"ng-container",8),e._uU(4),e.qZA()),2&g){const c=e.oxw().$implicit,C=e.oxw().ngrxLet;e.Q6J("cvcDisableLink",!0)("cvcCacheId",c.__typename+":"+c.id)("cvcEmphasize",C),e.xp6(2),e.Q6J("ngIf",c.doid),e.xp6(1),e.Q6J("ngIf",c.diseaseAliases.length>0),e.xp6(1),e.hij(" ",C," ")}}function di(g,h){1&g&&(e.ynx(0),e.YNc(1,ri,5,6,"ng-template",null,5,e.W1O),e.BQk())}function Wi(g,h){if(1&g&&(e.ynx(0),e.YNc(1,di,3,0,"ng-container",4),e.ALo(2,"ngrxPush"),e.BQk()),2&g){const c=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,c.result$))}}function ji(g,h){if(1&g){const c=e.EpF();e.TgZ(0,"div",11)(1,"cvc-entity-tag",12),e.NdJ("cvcOnClose",function(){const pt=e.CHM(c).$implicit,Ft=e.oxw();return e.KtG(Ft.onTagClose$.next(pt.nzValue))}),e.qZA()()}if(2&g){const c=h.$implicit,C=e.oxw();e.xp6(1),e.Q6J("cvcCacheId","Disease:"+c.nzValue)("cvcContext",C.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",C.props.isMultiSelect?"default":"closeable")}}function yi(g,h){if(1&g){const c=e.EpF();e.TgZ(0,"cvc-disease-quick-add-form",13),e.NdJ("cvcOnCreate",function(le){e.CHM(c);const pt=e.oxw();return e.KtG(pt.onPopulate$.next(le))}),e.qZA()}2&g&&e.Q6J("cvcSearchString",h.$implicit)}const fi=_t($t(),vi());class Ri extends fi{constructor(h,c,C){super(),this.taq=h,this.tq=c,this.changeDetectorRef=C,this.defaultOptions={props:{entityName:{singular:"Disease",plural:"Diseases"},tooltip:"Cancer or cancer subtype that is a result of the described variant",isMultiSelect:!1,requireType:!0,placeholder:"Search Diseases",requireTypePromptFn:(le,pt)=>`Select an ${le} Type to select an associated Disease${pt?"(s)":""}`,addFormTitle:"Add a New Disease"}},this.placeholder$=new ot.X(void 0),this.selectOpen$=new Ti.t}ngAfterViewInit(){this.configureBaseField(),this.configureEntitySelectField({typeaheadQuery:this.taq,typeaheadParam$:void 0,tagQuery:this.tq,getTypeaheadVarsFn:this.getTypeaheadVarsFn,getTypeaheadResultsFn:this.getTypeaheadResultsFn,getTagQueryVarsFn:this.getTagQueryVarsFn,getTagQueryResultsFn:this.getTagQueryResultsFn,getSelectedItemOptionFn:this.getSelectedItemOptionFn,getSelectOptionsFn:this.getSelectOptionsFn,changeDetectorRef:this.changeDetectorRef,selectOpen$:this.selectOpen$,selectComponent:this.selectComponent}),this.state&&this.state.formReady$?this.state.formReady$.pipe((0,Ge.h)(h=>h),(0,xi.q)(1),(0,Pe.t)(this)).subscribe(h=>{this.configureField()}):this.configureField(),this.addForm&&(this.field.props.addFormContent=this.addForm)}configureField(){this.placeholder$.next(this.props.placeholder),this.configureStateConnections()}configureStateConnections(){if(this.state){if(this.state.requires.requiresDisease$?this.onRequiresDisease$=this.state.requires.requiresDisease$:console.warn(`${this.field.id} field's form provides a state, but could not find requiresDisease$ subject to attach.`),this.props.requireType){const h=`${this.state.entityName.toLowerCase()}Type$`;this.state.fields[h]?this.onEntityType$=this.state.fields[h]:console.error(`${this.field.id} requireType is true, however form state does not provide Subject ${h}.`)}!this.onRequiresDisease$||!this.onEntityType$||(0,ii.a)([this.onRequiresDisease$,this.onEntityType$,this.onValueChange$]).pipe((0,Pe.t)(this)).subscribe(([h,c,C])=>{this.onStateUpdates(h,c,C)})}}onStateUpdates(h,c,C){!h&&c&&(this.props.required=!1,this.props.disabled=!0,this.props.description=`${(0,K.E)(c)} ${this.state.entityName} does not include associated diseases`,this.props.extraType="prompt",this.cdr.markForCheck()),this.props.requireType&&!c&&(this.props.required=!1,this.props.disabled=!0,this.props.description=this.props.requireTypePromptFn(this.state.entityName,this.props.isMultiSelect),this.props.extraType="prompt"),h&&(this.props.required=!0,this.props.disabled=!1,this.props.description=void 0,this.props.extraType=void 0),(!h&&void 0!==C||this.props.requireType&&!c&&this.formControl.value)&&this.resetField()}getTypeaheadVarsFn(h){return{name:h}}getTypeaheadResultsFn(h){return h.data.diseaseTypeahead}getTagQueryVarsFn(h){return{id:h}}getTagQueryResultsFn(h){return h.data.disease}getSelectedItemOptionFn(h){return{value:h.id,label:h.name}}getSelectOptionsFn(h,c){return h.map((C,le)=>({label:c.get(le)||C.name,value:C.id}))}}Ri.\u0275fac=function(h){return new(h||Ri)(e.Y36(bn.RYL),e.Y36(bn.QVn),e.Y36(e.sBO))},Ri.\u0275cmp=e.Xpm({type:Ri,selectors:[["cvc-disease-select"]],viewQuery:function(h,c){if(1&h&&(e.Gf(On,7),e.Gf(Bn,5,e.Rgc)),2&h){let C;e.iGM(C=e.CRH())&&(c.addForm=C.first),e.iGM(C=e.CRH())&&(c.optionTemplates=C)}},features:[e.qOj],decls:12,vars:26,consts:[[3,"cvcAddEntity","cvcSelectMode","cvcCustomTemplate","cvcFormControl","cvcFormlyAttributes","cvcEntityName","cvcPlaceholder","cvcResults","cvcOptions","cvcShowError","cvcDisabled","cvcLoading","cvcSelectOpen","cvcOnSearch","cvcOnOpenChange","cvcSelectComponent","cvcOnModelChange"],[4,"ngrxLet"],["selectedTemplate",""],["addDisease",""],[4,"ngFor","ngForOf"],["optionTemplates",""],[3,"cvcDisableLink","cvcCacheId","cvcEmphasize"],["nz-typography","","nzType","secondary"],[4,"ngIf"],[3,"innerHtml"],["nz-typography","","nzType","secondary",3,"innerHtml"],[1,"ant-select-selection-item-content"],[3,"cvcCacheId","cvcContext","cvcMode","cvcOnClose"],[3,"cvcSearchString","cvcOnCreate"]],template:function(h,c){if(1&h&&(e.TgZ(0,"cvc-entity-select",0),e.NdJ("cvcOnSearch",function(le){return c.onSearch$.next(le)})("cvcOnOpenChange",function(le){return c.onOpenChange$.next(le)})("cvcSelectComponent",function(le){return c.selectComponent=le})("cvcOnModelChange",function(le){return c.props.change&&c.props.change(c.field,le)}),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.ALo(3,"ngrxPush"),e.ALo(4,"ngrxPush"),e.ALo(5,"ngrxPush"),e.ALo(6,"ngrxPush"),e.qZA(),e.YNc(7,Wi,3,3,"ng-container",1),e.YNc(8,ji,2,3,"ng-template",null,2,e.W1O),e.YNc(10,yi,1,1,"ng-template",null,3,e.W1O)),2&h){const C=e.MAs(9),le=e.MAs(11);e.Q6J("cvcAddEntity",le)("cvcSelectMode",c.props.isMultiSelect?"multiple":"default")("cvcCustomTemplate",C)("cvcFormControl",c.formControl)("cvcFormlyAttributes",c.field)("cvcEntityName",c.props.entityName)("cvcPlaceholder",e.lcZ(1,14,c.placeholder$))("cvcResults",e.lcZ(2,16,c.result$))("cvcOptions",e.lcZ(3,18,c.selectOption$))("cvcShowError",c.showError)("cvcDisabled",c.onRequiresDisease$&&!e.lcZ(4,20,c.onRequiresDisease$))("cvcLoading",e.lcZ(5,22,c.isLoading$))("cvcSelectOpen",e.lcZ(6,24,c.selectOpen$)),e.xp6(7),e.Q6J("ngrxLet",c.onSearch$)}},dependencies:[S.sg,S.O5,P.eJ,de.ZU,je,Tt.J,Xn,P.fM,U.A],changeDetection:0});const ao={types:[{name:"disease-select",wrappers:["form-field"],component:Ri,defaultOptions:{props:{label:"Disease"}}},{name:"disease-multi-select",wrappers:["form-field"],component:Ri,defaultOptions:{props:{isMultiSelect:!0,label:"Diseases"}}}]};class so{}so.\u0275fac=function(h){return new(h||so)},so.\u0275mod=e.oAB({type:so}),so.\u0275inj=e.cJS({imports:[S.ez,t.UX,P._N,P.pP,m.X0.forChild(ao),nn.L,Sn.sL,Qe.LV,Rn.$6,li.Qp,yt.PV,Ae.o7,w.Jb,Lt.cg,Zt.zf,s.U5,be.ic,de.ZJ,Yt.X,ei.g,lt,En,xt.s,rt.x]});var Ii=a(2994);class Li{}Li.\u0275fac=function(h){return new(h||Li)},Li.\u0275mod=e.oAB({type:Li}),Li.\u0275inj=e.cJS({imports:[S.ez,P._N,P.pP,de.ZJ]});var Gi=a(1971),Fo=a(9562),Yo=a(7096),Di=a(6675),po=a(5026),qo=a(8372),co=a(3595),Xo=a(2856),pr=a(6451),No=a(444);const Lo={isSelectCol:g=>"select"===g.type,isEntityTagCol:g=>"entity-tag"===g.type,isEnumTagCol:g=>"enum-tag"===g.type,isTextTagCol:g=>"text-tag"===g.type},Us=g=>void 0!==g.sort,fr=g=>void 0!==g.filter,$r={description:bn.Cp0.Description,disease:bn.Cp0.DiseaseName,evidenceDirection:bn.Cp0.EvidenceDirection,evidenceLevel:bn.Cp0.EvidenceLevel,evidenceRating:bn.Cp0.EvidenceRating,evidenceType:bn.Cp0.EvidenceType,id:bn.Cp0.Id,significance:bn.Cp0.Significance,status:bn.Cp0.Status,therapies:bn.Cp0.TherapyName,variantOrigin:bn.Cp0.VariantOrigin},mr={molecularProfile:"molecularProfileName",disease:"diseaseName",therapies:"therapyName",evidenceItem:"id"},Is=["selected","id"];class Ve{constructor(){this.sortStreams=[],this.filterStreams=[],this.config=this.configureColumnStreams([{key:"selected",label:"Select",type:"select",width:"25px",align:"center",fixedLeft:!0,checkbox:{th:{showCheckbox:!1},td:{showCheckbox:!0}}},{hidden:!0,key:"id",label:"ID",type:"default",width:"30px"},{hidden:!0,key:"status",label:"Status",type:"default",width:"50px"},{key:"id",label:"Evidence",type:"entity-tag",width:"95px",context:"evidenceItem",fixedLeft:!0,showStatus:!0,tag:{fullWidth:!0},sort:{default:"ascend"},filter:{inputType:"default",options:[{key:"EID",value:null}],transform:h=>h?+h.toString().replace(/EID/i,""):null}},{key:"molecularProfile",label:"Molecular Profile",type:"entity-tag",width:"240px",sort:{},tag:{truncateLabel:"200px"},filter:{inputType:"default",typename:"MolecularProfile",options:[{key:"Filter Therapy Names",value:null}]}},{key:"disease",type:"entity-tag",label:"Disease",width:"240px",sort:{},tag:{truncateLabel:"200px"},filter:{inputType:"default",typename:"Disease",options:[{key:"Filter Disease Names",value:null}]}},{key:"therapies",label:"Therapies",type:"entity-tag",width:"275px",sort:{},tag:{maxTags:2,truncateLabel:"150px"},filter:{inputType:"default",typename:"Therapy",options:[{key:"Filter Therapy Names",value:null}]}},{key:"therapyInteractionType",label:"INT",tooltip:"Therapy Interaction Type",type:"enum-tag",width:"40px",align:"center",emptyValueCategory:"not-applicable",sort:{},filter:{options:this.getAttributeFilters((0,No.o6)(bn.wkr))}},{key:"description",label:"DSC",tooltip:"Evidence Description",type:"text-tag",width:"40px",align:"center",fixedRight:!0,emptyValueCategory:"unspecified",sort:{},filter:{inputType:"default",options:[{key:"Search Descriptions",value:null}]}},{key:"evidenceType",label:"ET",tooltip:"Evidence Type",type:"enum-tag",width:"40px",align:"center",fixedRight:!0,sort:{},filter:{options:this.getAttributeFilters((0,No.o6)(bn.kqt))}},{key:"evidenceLevel",label:"EL",tooltip:"Evidence Level",type:"enum-tag",width:"40px",align:"center",fixedRight:!0,sort:{},filter:{options:this.getAttributeFilters((0,No.o6)(bn.Sx0))}},{key:"evidenceDirection",label:"ED",tooltip:"Evidence Direction",type:"enum-tag",width:"40px",align:"center",fixedRight:!0,sort:{},filter:{options:this.getAttributeFilters((0,No.o6)(bn.tI1))}},{key:"significance",label:"SI",tooltip:"Significance",type:"enum-tag",align:"center",width:"40px",fixedRight:!0,sort:{},filter:{options:this.getAttributeFilters((0,No.o6)(bn.y1h))}},{key:"evidenceRating",label:"ER",tooltip:"Evidence Rating",type:"enum-tag",width:"45px",align:"center",fixedRight:!0,tag:{showLabel:"short-string"},sort:{},filter:{options:[1,2,3,4,5].map(h=>({value:h,text:`${h} stars`}))}}])}get(){return this.config}getSortStreams(){return this.sortStreams}getFilterStreams(){return this.filterStreams}getAttributeFilters(h,c){return h.getValues().map(le=>({text:(0,K.E)(le),value:le,byDefault:c===le}))}configureColumnStreams(h){return h.forEach(c=>{const C=c;if(Us(C)&&(C.sort.changes=new ot.X({key:C.key,value:C.sort.default??null}),this.sortStreams.push(C.sort.changes)),fr(C)){const le=C.filter.options.find(pt=>pt.byDefault)?.value;C.filter.changes=new ot.X({key:C.key,value:le??null}),this.filterStreams.push(C.filter.changes)}}),h}}var $,Rt=a(6814);function ke(g,h){1&g&&e.GkF(0)}const At=function(g,h,c){return{$implicit:g,config:h,emphasize:c}};function rn(g,h){if(1&g&&(e.ynx(0),e.TgZ(1,"span",1),e.YNc(2,ke,1,0,"ng-container",2),e.qZA(),e.BQk()),2&g){const c=h.$implicit,C=e.oxw();e.xp6(2),e.Q6J("ngTemplateOutlet",C.cvcTagTemplate)("ngTemplateOutletContext",e.kEZ(2,At,c,C.config,null==C.config?null:C.config.emphasize))}}let Dn=(($=class{set cvcTagListConfig(h){!h||!h.tagList||!h.tag||(this.config=h,this.setEntities(h.tagList,h.tag))}constructor(){this.entities=[]}setEntities(h,c){this.entities=h&&0!==h.length&&0!==c.maxTags?h:[]}}).\u0275fac=function(h){return new(h||$)},$.\u0275cmp=e.Xpm({type:$,selectors:[["cvc-entity-tag-list"]],inputs:{cvcTagListConfig:"cvcTagListConfig",cvcTagTemplate:"cvcTagTemplate"},decls:1,vars:1,consts:[[4,"ngFor","ngForOf"],[1,"tag-container"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(h,c){1&h&&e.YNc(0,rn,3,6,"ng-container",0),2&h&&e.Q6J("ngForOf",c.entities)},dependencies:[S.sg,S.tP],styles:[".typeahead-match[_ngcontent-%COMP%]{font-weight:700}[_nghost-%COMP%]{display:inline-block;margin-bottom:-4px}.tag-container[_ngcontent-%COMP%]{display:inline-block;margin-bottom:4px}"],changeDetection:0}),$);Dn=(0,Te.gn)([(0,Pe.c)()],Dn);var ai=a(160),qn=a(320);function Ei(g,h){if(1&g&&(e._UZ(0,"span",6),e.ALo(1,"typenameToIcon"),e.ALo(2,"entityColor")),2&g){const c=h.$implicit;e.Q6J("nzType",e.lcZ(1,2,c.__typename))("nzTwotoneColor",e.lcZ(2,4,c.__typename))}}function Un(g,h){if(1&g&&(e.ynx(0),e.YNc(1,Ei,3,6,"span",5),e.BQk()),2&g){const c=e.oxw();e.xp6(1),e.Q6J("ngForOf",c.entities)}}function to(g,h){if(1&g&&(e.TgZ(0,"span",7)(1,"strong"),e._uU(2),e.qZA()(),e._UZ(3,"span",6),e.ALo(4,"typenameToIcon"),e.ALo(5,"entityColor")),2&g){const c=e.oxw();e.xp6(2),e.Oqu(c.entities.length),e.xp6(1),e.Q6J("nzType",e.lcZ(4,3,c.entities[0].__typename))("nzTwotoneColor",e.lcZ(5,5,c.entities[0].__typename))}}const no=function(g,h,c,C,le){return{tagList:g,tag:h,showPopover:c,status:C,emphasize:le}};function gr(g,h){if(1&g&&e._UZ(0,"cvc-entity-tag-list",11),2&g){const c=e.oxw(2);e.Q6J("cvcTagTemplate",c.cvcTagTemplate)("cvcTagListConfig",e.qbA(2,no,c.entities,c.config.tag,c.config.showPopover,c.config.status,c.config.emphasize))}}function go(g,h){1&g&&e._uU(0," Invalid config specified for entity-tag-list. ")}function Ur(g,h){if(1&g&&(e.TgZ(0,"div",8),e.YNc(1,gr,1,8,"cvc-entity-tag-list",9),e.qZA(),e.YNc(2,go,1,0,"ng-template",null,10,e.W1O)),2&g){const c=e.MAs(3),C=e.oxw();e.xp6(1),e.Q6J("ngIf",C.config)("ngIfElse",c)}}class io{set cvcCollectionTagConfig(h){!h||!h.tagList||!h.tag||(this.setConfig(h),this.setEntities(h.tagList))}constructor(){this.cvcShowMaxIcons=5,this.cvcShowFullLabels=!0,this.entities=[]}setConfig(h){this.config=this.cvcShowFullLabels?{...h,tag:{...h.tag,truncateLabel:void 0}}:h}setEntities(h){this.entities=h&&0!==h.length?h:[]}}io.\u0275fac=function(h){return new(h||io)},io.\u0275cmp=e.Xpm({type:io,selectors:[["cvc-entity-collection-tag"]],inputs:{cvcCollectionTagConfig:"cvcCollectionTagConfig",cvcTagTemplate:"cvcTagTemplate",cvcShowMaxIcons:"cvcShowMaxIcons",cvcShowFullLabels:"cvcShowFullLabels"},decls:9,vars:3,consts:[["nz-popover","","nzPopoverPlacement","top","nzPopoverTrigger","hover",3,"nzPopoverContent"],["nz-typography","","nzType","secondary",1,"plus-sign"],[4,"ngIf","ngIfElse"],["showCount",""],["tagListPopover",""],["class","entity-icon","nz-icon","","nzTheme","twotone",3,"nzType","nzTwotoneColor",4,"ngFor","ngForOf"],["nz-icon","","nzTheme","twotone",1,"entity-icon",3,"nzType","nzTwotoneColor"],["nz-typography","","nzType","secondary",1,"entity-count"],[1,"popover-container"],[3,"cvcTagTemplate","cvcTagListConfig",4,"ngIf","ngIfElse"],["noConfig",""],[3,"cvcTagTemplate","cvcTagListConfig"]],template:function(h,c){if(1&h&&(e.TgZ(0,"nz-tag",0)(1,"span",1)(2,"strong"),e._uU(3,"+"),e.qZA()(),e.YNc(4,Un,2,1,"ng-container",2),e.YNc(5,to,6,7,"ng-template",null,3,e.W1O),e.qZA(),e.YNc(7,Ur,4,2,"ng-template",null,4,e.W1O)),2&h){const C=e.MAs(6),le=e.MAs(8);e.Q6J("nzPopoverContent",le),e.xp6(4),e.Q6J("ngIf",c.entities.length<=c.cvcShowMaxIcons)("ngIfElse",C)}},dependencies:[S.sg,S.O5,Yt.j,de.ZU,Rn.lU,yt.Ls,Dn,ai.a,qn.Z],styles:["[_nghost-%COMP%]{display:inline-block}.popover-container[_ngcontent-%COMP%]{max-width:300px}nz-tag[_ngcontent-%COMP%]{margin:0;padding:0;margin-inline-end:4px}nz-tag[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-block}nz-tag[_ngcontent-%COMP%]   .plus-sign[_ngcontent-%COMP%]{padding:3px 3px 3px 4px;margin:-3px 0;line-height:1}nz-tag[_ngcontent-%COMP%]   .entity-icon[_ngcontent-%COMP%]:first-child{padding-left:2px}nz-tag[_ngcontent-%COMP%]   .entity-icon[_ngcontent-%COMP%]{margin:-3px 1px -4px -1px;padding:3px 0;line-height:1}nz-tag[_ngcontent-%COMP%]   .entity-icon[_ngcontent-%COMP%]:last-child{padding-right:3px}nz-tag[_ngcontent-%COMP%]   .entity-count[_ngcontent-%COMP%]{margin-left:-2px;padding-right:4px}"],changeDetection:0});var hi=a(3388);function vr(g,h){if(1&g&&(e.TgZ(0,"span",1),e._uU(1),e.ALo(2,"number"),e.ALo(3,"number"),e.qZA()),2&g){const c=h.ngIf;e.xp6(1),e.AsE(" ",e.lcZ(2,2,c.edgeCount)," of ",e.lcZ(3,4,c.filteredCount)," displayed\n")}}class xe{ngOnInit(){this.tableCountsInfo$=this.cvcTableCountsConnection.pipe((0,Ge.h)(h=>null!=h.totalCount||null!=h.filteredCount),(0,Ct.U)(h=>{const c=h.filteredCount,C=h.totalCount,le=h.edges;return null==c&&null==C&&console.log("Need to provide either filtered count or total count in the table counts component"),{edgeCount:le.length,filteredCount:c??C}}))}}xe.\u0275fac=function(h){return new(h||xe)},xe.\u0275cmp=e.Xpm({type:xe,selectors:[["cvc-table-counts"]],inputs:{cvcTableCountsConnection:"cvcTableCountsConnection"},decls:2,vars:3,consts:[["class","table-counts","nz-typography","","nzType","secondary",4,"ngIf"],["nz-typography","","nzType","secondary",1,"table-counts"]],template:function(h,c){1&h&&(e.YNc(0,vr,4,6,"span",0),e.ALo(1,"ngrxPush")),2&h&&e.Q6J("ngIf",e.lcZ(1,1,c.tableCountsInfo$))},dependencies:[S.O5,de.ZU,S.JJ,P.fM],styles:[":[_nghost-%COMP%]{border:1px solid red}.table-counts[_ngcontent-%COMP%]{display:inline-block}"],changeDetection:0});var at,ye=a(590),he=a(1520);let pn=((at=class{set cvcTableScrollerToIndex(h){void 0!==h&&this.scrollToIndex(h)}set cvcTableScrollerToOffset(h){void 0!==h&&this.scrollToIndex(h)}constructor(h){this.host=h,this.cvcTableScrollerOnScroll=new e.vpe,this.cvcTableScrollerOnFetch=new e.vpe,this.cvcTableScrollerTargetHeight=140,this.cvcTableScrollerFetchCount=50,this.onLoadThrottleTime=500,this.onScrollThrottleTime=250,this.onScrollDebounceTime=300}ngAfterViewInit(){if(!this.host||!this.host.cdkVirtualScrollViewport)throw new Error("cvcTableScroller directive could not obtain reference to host cdkVirtualScrollViewport.");this.viewport=this.host.cdkVirtualScrollViewport,this.scrolled$=this.viewport.elementScrolled(),this.rendered$=this.viewport.renderedRangeStream,this.rendered$.pipe((0,ye.P)()).subscribe(()=>this.viewport.checkViewportSize()),this.scrolled$.pipe((0,gi.p)(this.onScrollThrottleTime,yo.z,{leading:!0,trailing:!0}),(0,kn.b)(h=>this.cvcTableScrollerOnScroll.next("scroll")),(0,qo.b)(this.onScrollDebounceTime),(0,Pe.t)(this)).subscribe(h=>{this.cvcTableScrollerOnScroll.next("stop")}),this.scrolled$.pipe((0,Ct.U)(h=>this.viewport.measureScrollOffset("bottom")),(0,he.G)(),(0,Ge.h)(([h,c])=>c<h&&c<this.cvcTableScrollerTargetHeight),(0,gi.p)(this.onLoadThrottleTime),(0,Pe.t)(this)).subscribe(h=>{this.cvcTableScrollerOnScroll.next("bottom");try{this.loadMore(this.cvcTableScrollerPageInfo)}catch(c){console.error(c)}})}loadMore(h){const c=this.cvcTableScrollerQueryRef;if(!h&&c)throw new Error("table-scroll directive requires PageInfo to use provided QueryRef.");if(h&&!c)throw new Error("table-scroll directive requires valid QueryRef when PageInfo provided.");if(h&&c){const[C,le,pt]=[this.cvcTableScrollerFetchCount,h.hasNextPage,h.endCursor];if(!C||!pt)throw new Error("table-scroll PageInfo invalid.");if(!le)return;this.cvcTableScrollerOnFetch.next({first:C,after:pt})}}scrollToIndex(h){const[c,C]=[this.host,this.host.cdkVirtualScrollViewport];if(!c||!C)throw new Error("table-scroll scrollToIndex() cannot find host viewport.");C.scrollToIndex(h)}scrollToOffset(h){const[c,C]=[this.host,this.host.cdkVirtualScrollViewport];if(!c||!C)throw new Error("table-scroll scrollToOffset() cannot find host viewport.");C.scrollToOffset(h)}}).\u0275fac=function(h){return new(h||at)(e.Y36(Di.N8))},at.\u0275dir=e.lG2({type:at,selectors:[["","cvcTableScroller",""]],inputs:{cvcTableScrollerTargetHeight:"cvcTableScrollerTargetHeight",cvcTableScrollerQueryRef:"cvcTableScrollerQueryRef",cvcTableScrollerPageInfo:"cvcTableScrollerPageInfo",cvcTableScrollerFetchCount:"cvcTableScrollerFetchCount",cvcTableScrollerToIndex:"cvcTableScrollerToIndex",cvcTableScrollerToOffset:"cvcTableScrollerToOffset"},outputs:{cvcTableScrollerOnScroll:"cvcTableScrollerOnScroll",cvcTableScrollerOnFetch:"cvcTableScrollerOnFetch"}}),at);function Yn(g,h){1&g&&e._UZ(0,"span",8)}function fo(g,h){if(1&g){const c=e.EpF();e.TgZ(0,"span",9),e.NdJ("click",function(){e.CHM(c),e.oxw(2);const le=e.MAs(3),pt=e.oxw();return le.value="",e.KtG(pt.cvcModelChange.next(null))}),e.qZA()}}function fn(g,h){if(1&g&&(e.YNc(0,Yn,1,0,"span",6),e.YNc(1,fo,1,0,"span",7)),2&g){e.oxw();const c=e.MAs(3);e.Q6J("ngIf",!c.value),e.xp6(1),e.Q6J("ngIf",c.value)}}function Ci(g,h){if(1&g){const c=e.EpF();e.ynx(0),e.TgZ(1,"nz-input-group",2)(2,"input",3,4),e.NdJ("ngModelChange",function(le){e.CHM(c);const pt=e.oxw();return e.KtG(pt.cvcModelChange.next(le))}),e.qZA()(),e.YNc(4,fn,2,2,"ng-template",null,5,e.W1O),e.BQk()}if(2&g){const c=e.MAs(5),C=e.oxw();e.xp6(1),e.Q6J("nzSuffix",c),e.xp6(1),e.Q6J("placeholder",C.cvcPlaceholder)("ngModel",C.cvcModel)}}function Nr(g,h){if(1&g){const c=e.EpF();e.TgZ(0,"nz-input-number-group",10)(1,"nz-input-number",11,4),e.NdJ("ngModelChange",function(le){e.CHM(c);const pt=e.oxw();return e.KtG(pt.cvcModelChange.next(""===le?null:le))}),e.qZA()()}if(2&g){const c=e.oxw();let C;e.xp6(1),e.Q6J("nzPlaceHolder",null!==(C=c.cvcPlaceholder)&&void 0!==C?C:"")("ngModel",c.cvcModel)("nzMin",1)("nzStep",1)}}pn=(0,Te.gn)([(0,Pe.c)()],pn);class _r{constructor(){this.cvcModel=null,this.cvcModelChange=new e.vpe,this.cvcInputType="default"}}_r.\u0275fac=function(h){return new(h||_r)},_r.\u0275cmp=e.Xpm({type:_r,selectors:[["cvc-table-filter-input"]],inputs:{cvcModel:"cvcModel",cvcInputType:"cvcInputType",cvcPlaceholder:"cvcPlaceholder"},outputs:{cvcModelChange:"cvcModelChange"},decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["numericInput",""],["nzSize","small",3,"nzSuffix"],["nz-input","",3,"placeholder","ngModel","ngModelChange"],["filterInput",""],["suffixIcon",""],["nz-icon","","nzType","search","style","color: #ddd",4,"ngIf"],["nz-icon","","class","ant-input-clear-icon","nzTheme","fill","nzType","close-circle",3,"click",4,"ngIf"],["nz-icon","","nzType","search",2,"color","#ddd"],["nz-icon","","nzTheme","fill","nzType","close-circle",1,"ant-input-clear-icon",3,"click"],["nzSize","small"],[2,"width","100%",3,"nzPlaceHolder","ngModel","nzMin","nzStep","ngModelChange"]],template:function(h,c){if(1&h&&(e.YNc(0,Ci,6,3,"ng-container",0),e.YNc(1,Nr,3,4,"ng-template",null,1,e.W1O)),2&h){const C=e.MAs(2);e.Q6J("ngIf","default"===c.cvcInputType)("ngIfElse",C)}},dependencies:[S.O5,t.Fj,t.JJ,t.On,hn.w,yt.Ls,Ae.Zp,Ae.gB,Ae.ke,Yo._V,Yo.Rb],styles:[".typeahead-match[_ngcontent-%COMP%]{font-weight:700}  nz-input-group{border-color:#d9d9d9!important}"]});var yr,Zi=a(3325);function $c(g,h){if(1&g){const c=e.EpF();e.TgZ(0,"li",5),e.NdJ("click",function(){const pt=e.CHM(c).$implicit,Ft=e.oxw();return e.KtG(Ft.cvcOptionChange.next({key:Ft.cvcColumnKey,value:pt.value}))}),e._UZ(1,"cvc-attribute-tag",6),e.qZA()}if(2&g){const c=h.$implicit,C=e.oxw();e.Q6J("nzSelected",(null==C.cvcOption?null:C.cvcOption.value)===c.value),e.xp6(1),e.Q6J("cvcFullWidth",!0)("cvcChecked",(null==C.cvcOption?null:C.cvcOption.value)===c.value)("cvcAttrValue",c.value)}}class er{constructor(){this.cvcOptionChange=new e.vpe}}er.\u0275fac=function(h){return new(h||er)},er.\u0275cmp=e.Xpm({type:er,selectors:[["cvc-enum-filter-menu"]],inputs:{cvcColumnKey:"cvcColumnKey",cvcFilterOptions:"cvcFilterOptions",cvcOption:"cvcOption"},outputs:{cvcOptionChange:"cvcOptionChange"},decls:6,vars:2,consts:[["nz-menu",""],["nz-menu-item","",3,"nzSelected","click",4,"ngFor","ngForOf"],[2,"padding","3px"],["nz-button","","nzType","default","nzBlock","","nzSize","small",3,"disabled","click"],["nz-icon","","nzType","retweet","nzTheme","outline"],["nz-menu-item","",3,"nzSelected","click"],["cvcContext","menu-item",3,"cvcFullWidth","cvcChecked","cvcAttrValue"]],template:function(h,c){1&h&&(e.TgZ(0,"ul",0),e.YNc(1,$c,2,4,"li",1),e.TgZ(2,"li",2)(3,"button",3),e.NdJ("click",function(){return c.cvcOptionChange.next({key:c.cvcColumnKey,value:null})}),e._UZ(4,"span",4),e._uU(5," Reset "),e.qZA()()()),2&h&&(e.xp6(1),e.Q6J("ngForOf",c.cvcFilterOptions),e.xp6(2),e.Q6J("disabled",null===(null==c.cvcOption?null:c.cvcOption.value)))},dependencies:[S.sg,Ue,Sn.ix,hn.w,ln.dQ,Zi.wO,Zi.r9,yt.Ls],styles:[".typeahead-match[_ngcontent-%COMP%]{font-weight:700}[_nghost-%COMP%]     ul li:hover{background-color:#e6f7ff}[_nghost-%COMP%]     ul li.ant-dropdown-menu-item-selected{background-color:#1890ff}[_nghost-%COMP%]     ul li.ant-dropdown-menu-item-selected:active{background-color:#096dd9}"],changeDetection:0});class Wo{transform(h){return null!=h&&Array.isArray(h)}}Wo.\u0275fac=function(h){return new(h||Wo)},Wo.\u0275pipe=e.Yjl({name:"isArray",type:Wo,pure:!0});class tr{transform(h,c){return c(h)?h:void 0}}function js(g,h){if(1&g&&e._UZ(0,"th",14),2&g){const c=h.ngIf;let C;e.Q6J("nzShowCheckbox",c.checkbox.th.showCheckbox||!1)("nzWidth",c.width)("nzAlign",null!==(C=c.align)&&void 0!==C?C:"left")("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1)}}function Uc(g,h){if(1&g){const c=e.EpF();e.TgZ(0,"th",15),e.NdJ("nzSortOrderChange",function(le){const Ft=e.CHM(c).ngIf;return e.KtG(Ft.sort.changes.next({key:Ft.key,value:le}))}),e.ALo(1,"ngrxPush"),e.TgZ(2,"span",16),e._uU(3),e.qZA()()}if(2&g){const c=h.ngIf;let C,le;e.Q6J("nzColumnKey",c.key)("nzAlign",null!==(C=c.align)&&void 0!==C?C:"left")("nzWidth",c.width)("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1)("nzShowSort",void 0!==c.sort)("nzSortFn",!0)("nzSortOrder",(null==(le=e.lcZ(1,10,c.sort.changes))?null:le.value)||null),e.xp6(2),e.Q6J("nzTooltipTitle",c.tooltip),e.xp6(1),e.hij(" ",c.label," ")}}function Cr(g,h){if(1&g&&(e.TgZ(0,"th",17),e._uU(1),e.qZA()),2&g){const c=h.ngIf;let C;e.Q6J("nzColumnKey",c.key)("nzAlign",null!==(C=c.align)&&void 0!==C?C:"left")("nzWidth",c.width)("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1)("nzTooltipTitle",c.tooltip),e.xp6(1),e.hij(" ",c.label," ")}}function vo(g,h){if(1&g&&(e.TgZ(0,"th",17),e._uU(1),e.qZA()),2&g){const c=h.ngIf;let C;e.Q6J("nzColumnKey",c.key)("nzAlign",null!==(C=c.align)&&void 0!==C?C:"left")("nzWidth",c.width)("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1)("nzTooltipTitle",c.tooltip),e.xp6(1),e.hij(" ",c.label," ")}}function $o(g,h){if(1&g&&(e.ynx(0),e.YNc(1,js,1,5,"th",11),e.ALo(2,"guardType"),e.YNc(3,Uc,4,12,"th",12),e.ALo(4,"guardType"),e.YNc(5,Cr,2,7,"th",13),e.ALo(6,"guardType"),e.YNc(7,vo,2,7,"th",13),e.ALo(8,"guardType"),e.BQk()),2&g){const c=e.oxw().$implicit,C=e.oxw(2);e.xp6(1),e.Q6J("ngIf",e.xi3(2,4,c,C.colGuards.isSelectCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(4,7,c,C.colGuards.isEntityTagCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(6,10,c,C.colGuards.isEnumTagCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(8,13,c,C.colGuards.isTextTagCol))}}function qa(g,h){if(1&g&&(e.ynx(0),e.YNc(1,$o,9,16,"ng-container",10),e.BQk()),2&g){const c=h.$implicit;e.xp6(1),e.Q6J("ngIf",!c.hidden)}}function Do(g,h){if(1&g&&(e.TgZ(0,"th",22),e._uU(1," \xa0 "),e.qZA()),2&g){const c=h.ngIf;let C;e.Q6J("nzColumnKey",c.key)("nzAlign",null!==(C=c.align)&&void 0!==C?C:"left")("nzWidth",c.width)("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1)}}function nr(g,h){if(1&g){const c=e.EpF();e.TgZ(0,"cvc-table-filter-input",25),e.NdJ("cvcModelChange",function(le){const Ft=e.CHM(c).ngIf,Mn=e.oxw().ngIf;return e.KtG(Ft.changes.next(Ft.transform?{key:Mn.key,value:Ft.transform(le)}:{key:Mn.key,value:le}))}),e.qZA()}if(2&g){const c=e.oxw().ngIf;e.Q6J("cvcInputType",c.filter.inputType)("cvcPlaceholder",c.filter.options[0].key)("cvcModel",c.filter.options[0].value)}}function ns(g,h){if(1&g&&(e.TgZ(0,"th",23),e.YNc(1,nr,1,3,"cvc-table-filter-input",24),e.qZA()),2&g){const c=h.ngIf;let C;e.Q6J("nzColumnKey",c.key)("nzWidth",c.width)("nzAlign",null!==(C=c.align)&&void 0!==C?C:"left")("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1),e.xp6(1),e.Q6J("ngIf",c.filter)}}function Ca(g,h){if(1&g){const c=e.EpF();e.TgZ(0,"th",26,27),e.NdJ("nzSortOrderChange",function(le){const Ft=e.CHM(c).ngIf;return e.KtG(Ft.sort.changes.next({key:Ft.key,value:le}))}),e.ALo(2,"ngrxPush"),e.TgZ(3,"nz-filter-trigger",28,29),e.ALo(5,"ngrxPush"),e._UZ(6,"span",30),e.qZA(),e.TgZ(7,"nz-dropdown-menu",null,31)(9,"cvc-enum-filter-menu",32),e.NdJ("cvcOptionChange",function(le){const Ft=e.CHM(c).ngIf,Mn=e.MAs(4);return Ft.filter.changes.next(le),e.KtG(Mn.nzVisible=!1)}),e.ALo(10,"ngrxPush"),e.qZA()()()}if(2&g){const c=h.ngIf,C=e.MAs(8);let le,pt,Ft;e.Q6J("nzColumnKey",c.key)("nzWidth",c.width)("nzAlign",null!==(le=c.align)&&void 0!==le?le:"left")("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1)("nzShowSort",!0)("nzSortFn",!0)("nzSortOrder",(null==(pt=e.lcZ(2,15,c.sort.changes))?null:pt.value)||null)("nzShowFilter",void 0!==c.filter)("nzFilterFn",!0),e.xp6(3),e.Q6J("nzDropdownMenu",C)("nzActive",null!==(null==(Ft=e.lcZ(5,17,c.filter.changes))?null:Ft.value)),e.xp6(6),e.Q6J("cvcColumnKey",c.key)("cvcFilterOptions",c.filter.options)("cvcOption",e.lcZ(10,19,c.filter.changes))}}function Cs(g,h){if(1&g){const c=e.EpF();e.TgZ(0,"th",33,27)(2,"nz-filter-trigger",28),e.ALo(3,"ngrxPush"),e._UZ(4,"span",34),e.qZA(),e.TgZ(5,"nz-dropdown-menu",null,35)(7,"div",36)(8,"div",37)(9,"cvc-table-filter-input",38),e.NdJ("cvcModelChange",function(le){const Ft=e.CHM(c).ngIf;return e.KtG(Ft.filter.changes.next({key:Ft.key,value:le}))}),e.qZA()()()()()}if(2&g){const c=h.ngIf,C=e.MAs(6);let le,pt;e.Q6J("nzColumnKey",c.key)("nzWidth",c.width)("nzAlign",null!==(le=c.align)&&void 0!==le?le:"left")("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1)("nzFilterFn",!0),e.xp6(2),e.Q6J("nzDropdownMenu",C)("nzActive",null!==(null==(pt=e.lcZ(3,10,c.filter.changes))?null:pt.value)),e.xp6(7),e.Q6J("cvcPlaceholder",c.filter.options[0].key)("cvcModel",c.filter.options[0].value)}}function zs(g,h){if(1&g&&(e.ynx(0),e.YNc(1,Do,2,5,"th",18),e.ALo(2,"guardType"),e.YNc(3,ns,2,6,"th",19),e.ALo(4,"guardType"),e.YNc(5,Ca,11,21,"th",20),e.ALo(6,"guardType"),e.YNc(7,Cs,10,12,"th",21),e.ALo(8,"guardType"),e.BQk()),2&g){const c=e.oxw().$implicit,C=e.oxw(2);e.xp6(1),e.Q6J("ngIf",e.xi3(2,4,c,C.colGuards.isSelectCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(4,7,c,C.colGuards.isEntityTagCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(6,10,c,C.colGuards.isEnumTagCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(8,13,c,C.colGuards.isTextTagCol))}}function ko(g,h){if(1&g&&(e.ynx(0),e.YNc(1,zs,9,16,"ng-container",10),e.BQk()),2&g){const c=h.$implicit;e.xp6(1),e.Q6J("ngIf",!c.hidden)}}function Gs(g,h){if(1&g&&(e.TgZ(0,"thead")(1,"tr",7),e.YNc(2,qa,2,1,"ng-container",8),e.qZA(),e.TgZ(3,"tr",9),e.YNc(4,ko,2,1,"ng-container",8),e.qZA()()),2&g){const c=h.ngrxLet;e.xp6(2),e.Q6J("ngForOf",c),e.xp6(2),e.Q6J("ngForOf",c)}}function cr(g,h){if(1&g){const c=e.EpF();e.TgZ(0,"td",43),e.NdJ("nzCheckedChange",function(le){e.CHM(c);const pt=e.oxw(3).$implicit,Ft=e.oxw(2);return e.KtG(Ft.onRowSelected$.next({id:pt.id,selected:le}))}),e.qZA()}if(2&g){const c=h.ngIf,C=e.oxw(3).$implicit;let le;e.Q6J("nzChecked",C.selected)("nzAlign",null!==(le=c.align)&&void 0!==le?le:"left")("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1)}}function Qs(g,h){1&g&&e.GkF(0)}tr.\u0275fac=function(h){return new(h||tr)},tr.\u0275pipe=e.Yjl({name:"guardType",type:tr,pure:!0});const zr=function(g,h,c){return{$implicit:g,config:h,emphasize:c}};function As(g,h){if(1&g&&(e.ynx(0),e.YNc(1,Qs,1,0,"ng-container",49),e.ALo(2,"isArray"),e.ALo(3,"ngrxPush"),e.BQk()),2&g){const c=e.oxw().ngIf,C=e.oxw().ngIf,le=e.MAs(3),pt=e.MAs(5),Ft=e.oxw(3).$implicit;let Mn;e.xp6(1),e.Q6J("ngTemplateOutlet",e.lcZ(2,2,Ft[c])?le:pt)("ngTemplateOutletContext",e.kEZ(6,zr,Ft[c],C,null==(Mn=e.lcZ(3,4,C.filter.changes))?null:Mn.value))}}function is(g,h){if(1&g&&(e.ynx(0),e.YNc(1,As,4,10,"ng-container",48),e.BQk()),2&g){const c=h.ngIf;e.oxw();const C=e.MAs(7),le=e.oxw(3).$implicit;e.xp6(1),e.Q6J("ngIf",le[c])("ngIfElse",C)}}const Xa=function(g,h,c,C,le){return{tagList:g,tag:h,showPopover:c,status:C,emphasize:le}};function ir(g,h){if(1&g&&(e.ynx(0),e._UZ(1,"cvc-entity-collection-tag",51),e.BQk()),2&g){const c=e.oxw(2),C=c.config,le=c.$implicit,pt=c.emphasize;e.oxw();const Ft=e.MAs(5),Mn=e.oxw(5);e.xp6(1),e.Q6J("cvcCollectionTagConfig",e.qbA(3,Xa,le.slice(C.tag.maxTags,le.length),C.tag,!Mn.isScrolling,!0===C.showStatus?le.status:void 0,pt))("cvcTagTemplate",Ft)("cvcShowFullLabels",!0)}}function jc(g,h){if(1&g&&(e.ynx(0),e._UZ(1,"cvc-entity-tag-list",50),e.YNc(2,ir,2,9,"ng-container",10),e.BQk()),2&g){const c=e.oxw(),C=c.config,le=c.$implicit,pt=c.emphasize;e.oxw();const Ft=e.MAs(5),Mn=e.oxw(5);e.xp6(1),e.Q6J("cvcTagTemplate",Ft)("cvcTagListConfig",e.qbA(3,Xa,le.slice(0,C.tag.maxTags),C.tag,!Mn.isScrolling,!0===C.showStatus?le.status:void 0,pt)),e.xp6(1),e.Q6J("ngIf",le.slice(C.tag.maxTags,le.length).length>0)}}function os(g,h){if(1&g&&e.YNc(0,jc,3,9,"ng-container",48),2&g){const c=h.$implicit;e.oxw();const C=e.MAs(7);e.Q6J("ngIf",c.length>0)("ngIfElse",C)}}function Tr(g,h){if(1&g&&e._UZ(0,"cvc-entity-tag",52),2&g){const c=h.$implicit,C=h.config,le=h.emphasize,pt=e.oxw(6);let Ft;e.Q6J("cvcTruncateLabel",null==C.tag?null:C.tag.truncateLabel)("cvcLinkableEntity",c)("cvcEmphasize",le)("cvcShowPopover",!pt.isScrolling)("cvcStatus",!0===C.showStatus?c.status:void 0)("cvcFullWidth",null!==(Ft=null==C.tag?null:C.tag.fullWidth)&&void 0!==Ft&&Ft)}}function lr(g,h){if(1&g&&e._UZ(0,"cvc-empty-value",53),2&g){const c=e.oxw().ngIf;e.Q6J("cvcEmptyCategory",c.emptyValueCategory||"not-applicable")}}function Fs(g,h){if(1&g&&(e.TgZ(0,"td",44),e.YNc(1,is,2,2,"ng-container",10),e.YNc(2,os,1,2,"ng-template",null,45,e.W1O),e.YNc(4,Tr,1,6,"ng-template",null,46,e.W1O),e.YNc(6,lr,1,1,"ng-template",null,47,e.W1O),e.qZA()),2&g){const c=h.ngIf;let C;e.Q6J("nzAlign",null!==(C=c.align)&&void 0!==C?C:"left")("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1),e.xp6(1),e.Q6J("ngIf",c.context||c.key)}}function zo(g,h){if(1&g&&(e._UZ(0,"cvc-attribute-tag",56),e.ALo(1,"evidenceEnumDisplay")),2&g){const c=e.oxw().ngIf,C=e.oxw(3).$implicit,le=e.oxw(2);e.Q6J("cvcFullWidth",!0)("cvcAttrValue",C[c.key])("cvcTooltip",e.lcZ(1,3,!le.isScrolling&&C[c.key]))}}function rs(g,h){if(1&g&&e._UZ(0,"cvc-empty-value",57),2&g){const c=e.oxw().ngIf;e.Q6J("cvcEmptyCategory",c.emptyValueCategory||"unspecified")}}function Ki(g,h){if(1&g&&(e.TgZ(0,"td",44),e.YNc(1,zo,2,5,"cvc-attribute-tag",54),e.YNc(2,rs,1,1,"ng-template",null,55,e.W1O),e.qZA()),2&g){const c=h.ngIf,C=e.MAs(3),le=e.oxw(3).$implicit;let pt;e.Q6J("nzAlign",null!==(pt=c.align)&&void 0!==pt?pt:"left")("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1),e.xp6(1),e.Q6J("ngIf",le[c.key])("ngIfElse",C)}}function Ws(g,h){if(1&g&&(e.TgZ(0,"nz-tag",60),e._UZ(1,"span",61),e.qZA()),2&g){const c=e.oxw().ngIf,C=e.oxw(3).$implicit;e.Q6J("nzTooltipTitle",C[c.key])}}function ss(g,h){if(1&g&&e._UZ(0,"cvc-empty-value",53),2&g){const c=e.oxw().ngIf;e.Q6J("cvcEmptyCategory",c.emptyValueCategory||"unspecified")}}function Kl(g,h){if(1&g&&(e.TgZ(0,"td",44),e.YNc(1,Ws,2,1,"nz-tag",58),e.YNc(2,ss,1,1,"ng-template",null,59,e.W1O),e.qZA()),2&g){const c=h.ngIf,C=e.MAs(3),le=e.oxw(3).$implicit;let pt;e.Q6J("nzAlign",null!==(pt=c.align)&&void 0!==pt?pt:"left")("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1),e.xp6(1),e.Q6J("ngIf",le[c.key])("ngIfElse",C)}}function jr(g,h){if(1&g&&(e.ynx(0),e.YNc(1,cr,1,4,"td",41),e.ALo(2,"guardType"),e.YNc(3,Fs,8,4,"td",42),e.ALo(4,"guardType"),e.YNc(5,Ki,4,5,"td",42),e.ALo(6,"guardType"),e.YNc(7,Kl,4,5,"td",42),e.ALo(8,"guardType"),e.BQk()),2&g){const c=e.oxw().$implicit,C=e.oxw(3);e.xp6(1),e.Q6J("ngIf",e.xi3(2,4,c,C.colGuards.isSelectCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(4,7,c,C.colGuards.isEntityTagCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(6,10,c,C.colGuards.isEnumTagCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(8,13,c,C.colGuards.isTextTagCol))}}function Jl(g,h){if(1&g&&(e.ynx(0),e.YNc(1,jr,9,16,"ng-container",10),e.BQk()),2&g){const c=h.$implicit;e.xp6(1),e.Q6J("ngIf",!c.hidden)}}function te(g,h){if(1&g&&(e.TgZ(0,"tr",40),e.YNc(1,Jl,2,1,"ng-container",8),e.qZA()),2&g){const c=e.oxw().ngrxLet;e.xp6(1),e.Q6J("ngForOf",c)}}function Be(g,h){1&g&&(e.TgZ(0,"tbody"),e.YNc(1,te,2,1,"ng-template",39),e.qZA())}function ce(g,h){1&g&&e._UZ(0,"span",69)}function Xe(g,h){if(1&g){const c=e.EpF();e.TgZ(0,"span",70),e.NdJ("click",function(){e.CHM(c),e.oxw(2);const le=e.MAs(3),pt=e.oxw().filter;return le.value="",e.KtG(pt.changes.next({key:pt.key,value:null}))}),e.qZA()}}function Ot(g,h){if(1&g&&(e.YNc(0,ce,1,0,"span",67),e.YNc(1,Xe,1,0,"span",68)),2&g){e.oxw();const c=e.MAs(3);e.Q6J("ngIf",!c.value),e.xp6(1),e.Q6J("ngIf",c.value)}}function dn(g,h){if(1&g){const c=e.EpF();e.ynx(0),e.TgZ(1,"nz-input-group",63)(2,"input",64,65),e.NdJ("nzFilterChange",function(le){e.CHM(c);const pt=e.oxw().filter;return e.KtG(pt.changes.next({key:pt.key,value:le}))}),e.qZA()(),e.YNc(4,Ot,2,2,"ng-template",null,66,e.W1O),e.BQk()}if(2&g){const c=e.MAs(5),C=e.oxw().filter;e.xp6(1),e.Q6J("nzSuffix",c),e.xp6(1),e.Q6J("placeholder",C.placeholder)("ngModel",C.defaultValue)}}function vn(g,h){if(1&g){const c=e.EpF();e.TgZ(0,"nz-input-number-group",71)(1,"nz-input-number",72,65),e.NdJ("ngModelChange",function(le){e.CHM(c);const pt=e.oxw().filter;return e.KtG(pt.changes.next({key:pt.key,value:le}))}),e.qZA()()}if(2&g){const c=e.oxw().filter;e.xp6(1),e.Q6J("nzPlaceHolder",c.placeholder)("ngModel",c.defaultValue)("nzMin",1)("nzStep",1)}}function Qn(g,h){if(1&g&&(e.YNc(0,dn,6,3,"ng-container",48),e.YNc(1,vn,3,4,"ng-template",null,62,e.W1O)),2&g){const c=h.filter,C=e.MAs(2);e.Q6J("ngIf",void 0===c.inputType||"default"===c.inputType)("ngIfElse",C)}}const Oi=function(){return[6,6]};function Qi(g,h){1&g&&(e.TgZ(0,"nz-row",73)(1,"nz-col")(2,"span"),e._uU(3,"Use checkboxes to select or deselect EIDs"),e.qZA()()()),2&g&&e.Q6J("nzGutter",e.DdM(1,Oi))}function Vi(g,h){1&g&&(e.TgZ(0,"nz-tag",84),e._UZ(1,"i",85),e.TgZ(2,"span"),e._uU(3,"Loading\u2026"),e.qZA()())}const zi=function(g){return{$implicit:g}};function oo(g,h){if(1&g&&(e.TgZ(0,"nz-tag",88),e._UZ(1,"span",89),e.TgZ(2,"span",90),e._uU(3),e.qZA()()),2&g){e.oxw();const c=e.MAs(4),C=e.oxw().ngrxLet;e.xp6(2),e.Q6J("nzTooltipTitle",c)("nzTooltipTitleContext",e.VKq(3,zi,C.query)),e.xp6(1),e.hij(" Query Error",C.query.length>1?"s":""," ")}}function Xi(g,h){if(1&g&&(e.TgZ(0,"nz-tag",88)(1,"span",90)(2,"span",91)(3,"strong"),e._uU(4),e.qZA()()()()),2&g){e.oxw();const c=e.MAs(4),C=e.oxw().ngrxLet;e.xp6(1),e.Q6J("nzTooltipTitle",c)("nzTooltipTitleContext",e.VKq(3,zi,C.network)),e.xp6(3),e.hij(" Network Error",C.query.length>1?"s":""," ")}}function lo(g,h){if(1&g&&(e.TgZ(0,"div"),e._uU(1),e.qZA()),2&g){const c=h.$implicit;e.xp6(1),e.hij(" ",c.message," ")}}function Zo(g,h){1&g&&e.YNc(0,lo,2,1,"div",8),2&g&&e.Q6J("ngForOf",h.$implicit)}function To(g,h){if(1&g&&(e.ynx(0),e.YNc(1,oo,4,5,"nz-tag",86),e.YNc(2,Xi,5,5,"nz-tag",86),e.YNc(3,Zo,1,1,"ng-template",null,87,e.W1O),e.BQk()),2&g){const c=e.oxw().ngrxLet;e.xp6(1),e.Q6J("ngIf",c.query),e.xp6(1),e.Q6J("ngIf",c.network)}}function Lr(g,h){if(1&g&&(e.ynx(0),e.YNc(1,To,5,2,"ng-container",10),e.BQk()),2&g){const c=h.ngrxLet;e.xp6(1),e.Q6J("ngIf",c)}}function Ro(g,h){if(1&g){const c=e.EpF();e.TgZ(0,"div",92)(1,"nz-checkbox-group",93),e.NdJ("ngModelChange",function(le){e.CHM(c);const pt=e.oxw(2);return e.KtG(pt.onPreferenceChange$.next(le))}),e.ALo(2,"ngrxPush"),e.qZA()()}if(2&g){const c=e.oxw(2);e.xp6(1),e.Q6J("ngModel",e.lcZ(2,1,c.setPreference$))}}function as(g,h){if(1&g){const c=e.EpF();e.TgZ(0,"nz-row",73)(1,"nz-col",74),e.YNc(2,Vi,4,0,"nz-tag",75),e.ALo(3,"ngrxPush"),e.ALo(4,"ngrxPush"),e._UZ(5,"cvc-no-more-rows",76),e.ALo(6,"ngrxPush"),e.qZA(),e.TgZ(7,"nz-col",74),e.YNc(8,Lr,2,1,"ng-container",3),e.qZA(),e.TgZ(9,"nz-col",74),e._UZ(10,"cvc-table-counts",77),e.qZA(),e.TgZ(11,"nz-col",78)(12,"nz-button-group")(13,"button",79),e.NdJ("click",function(){e.CHM(c);const le=e.oxw();return e.KtG(le.onResetFilter$.next())}),e._UZ(14,"span",80),e.qZA(),e.TgZ(15,"button",81),e._UZ(16,"span",82),e.qZA()(),e.YNc(17,Ro,3,3,"ng-template",null,83,e.W1O),e.qZA()()}if(2&g){const c=e.MAs(18),C=e.oxw();e.Q6J("nzGutter",8),e.xp6(2),e.Q6J("ngIf",e.lcZ(3,7,C.loading$)&&e.lcZ(4,9,C.isFetchMore$)),e.xp6(3),e.Q6J("cvcShowTag",e.lcZ(6,11,C.noMoreRows$)),e.xp6(3),e.Q6J("ngrxLet",C.queryError$),e.xp6(2),e.Q6J("cvcTableCountsConnection",C.connection$),e.xp6(5),e.Q6J("nzPopoverContent",c)("nzPopoverTrigger","click")}}const Oo=function(){return[]},Ns=function(){return{x:"800px",y:"200px"}};let cs=((yr=class{constructor(h,c,C){this.queryGQL=h,this.apollo=c,this.cdr=C,this.cvcSelectedIdsChange=new e.vpe,this.isScrolling=!1,this.colGuards=Lo,this.onFetchMore$=new Ke.x,this.onPreferenceChange$=new ot.X([]),this.onResetFilter$=new Ke.x,this.onRowSelected$=new Ke.x,this.onScroll$=new ot.X("stop"),this.onSetSelectedRow$=new ot.X(new Set),this.queryError$=new Ke.x,this.queryRequest$=new Ke.x,this.queryResult$=new Ti.t(1),this.isFetchMore$=new ot.X(!1),this.noMoreRows$=new ot.X(!1),this.scrollToIndex$=new Ke.x,this.tableConfig=new Ve;const le=(0,ii.a)(this.tableConfig.getFilterStreams()),pt=(0,ii.a)(this.tableConfig.getSortStreams()).pipe((0,Ge.h)(Ft=>Ft.filter(Mn=>null!==Mn.value).length<=1));this.refetch$=(0,ii.a)([pt,le]).pipe((0,Ct.U)(([Ft,Mn])=>({query:"refetch",sort:Ft,filter:Mn}))),this.fetchMore$=this.onFetchMore$.pipe((0,Ct.U)(Ft=>({query:"fetchMore",fetchMore:{...Ft}}))),(0,pr.T)(this.refetch$,this.fetchMore$).pipe((0,qo.b)(50),(0,Pe.t)(this)).subscribe(Ft=>{const Mn=this.getQueryVars(Ft);this.queryRef?(this.queryError$.next({}),"refetch"===Ft.query?(this.isFetchMore$.next(!1),this.queryRef.refetch(Mn).then(Vn=>{(Vn.error||Vn.errors)&&this.queryError$.next(this.getRequestErrors(Vn))}).then(()=>{this.scrollToIndex$.next(0)})):(this.isFetchMore$.next(!0),this.queryRef.fetchMore({variables:Mn}).then(Vn=>{(Vn.error||Vn.errors)&&this.queryError$.next(this.getRequestErrors(Vn))}))):(this.isFetchMore$.next(!1),this.queryError$.next({}),this.queryRef=this.queryGQL.watch(Mn),this.queryRef.valueChanges.pipe((0,Pe.t)(this)).subscribe(Vn=>{this.queryResult$.next(Vn),(Vn.error||Vn.errors)&&this.queryError$.next(this.getRequestErrors(Vn))}))}),this.loading$=this.queryResult$.pipe((0,Ut.j)("loading"),(0,Pi.x)()),this.connection$=this.queryResult$.pipe((0,Ut.j)("data","evidenceItems"),(0,Ge.h)(jn.ep)),this.pageInfo$=this.connection$.pipe((0,Ut.j)("pageInfo"),(0,Ge.h)(jn.ep)),this.row$=(0,ii.a)([this.connection$.pipe((0,Ut.j)("edges"),(0,Ge.h)(jn.ep),(0,Ct.U)(Ft=>Ft.map(Mn=>Mn.node))),this.onSetSelectedRow$]).pipe((0,Ct.U)(([Ft,Mn])=>Ft.map(Vn=>{if(Vn)return{...Vn,evidenceItem:{__typename:"EvidenceItem",id:Vn.id,name:Vn.name,link:Vn.link,status:Vn.status},selected:Mn.has(Vn.id)}}))),this.col$=new ot.X(this.tableConfig.get()),this.setPreference$=this.col$.pipe((0,Ct.U)(Ft=>this.getColPrefsFromTableConfig(Ft))),this.onPreferenceChange$.pipe((0,nt.M)(this.col$),(0,Ct.U)(([Ft,Mn])=>this.getTableConfigFromColPrefs(Ft,Mn)),(0,Pe.t)(this)).subscribe(Ft=>{this.col$.next(Ft)}),this.onSetTableFilter$=new ot.X([]),this.onSetTableFilter$.pipe((0,Pe.t)(this)).subscribe(Ft=>{const Mn=this.col$.getValue();Ft.forEach(Vn=>{const Bi=Mn.find(Ji=>Ji.key===Vn.key);if(void 0!==Bi.filter.inputType){const Ji=Bi.filter.options[0];if(null===Vn.value)return Bi.filter.options=[{...Ji,value:null}],void Bi.filter.changes.next(Vn);if(Array.isArray(Vn.value)&&0===Vn.value.length)return Bi.filter.options=[{...Ji,value:null}],void Bi.filter.changes.next({...Vn,value:null});let Co;Array.isArray(Vn.value)?Vn.value.length>0&&(Co=Vn.value[0]):Co=Vn.value;const J1=Bi.filter.typename;if(!J1||!Co)return void console.error(`evidence-manager requires column config '${Bi.key}' provide a typename for cvcTablePrefs Input to set its filter`);const Tu=this.getEntityName(J1,Co);if(!Tu)return;Bi.filter.options=[{...Ji,value:Tu}],Bi.filter.changes.next({...Vn,value:Tu})}else fr(Bi)&&Bi.filter.changes.next(Vn)})}),this.onSetTablePref$=new ot.X([]),this.onSetTablePref$.pipe((0,nt.M)(this.setPreference$),(0,Ct.U)(([Ft,Mn])=>{const Vn=[];return Ft.forEach(Bi=>{let Ji=Mn.find(Co=>Co.value===Bi.value);Ji?Vn.push({...Ji,...Bi}):console.warn(`evidence-manager onSetTablePref$ received updated preferences for column '${Bi.value}', but a column with that key could not be found.`)}),Vn}),(0,Pe.t)(this)).subscribe(Ft=>{this.onPreferenceChange$.next(Ft)}),this.onRowSelected$.pipe((0,nt.M)(this.onSetSelectedRow$),(0,Pe.t)(this)).subscribe(([Ft,Mn])=>{Ft.selected?Mn.add(Ft.id):Mn.delete(Ft.id),this.onSetSelectedRow$.next(Mn),this.cvcSelectedIdsChange.next(Array.from(Mn))}),this.onScroll$.pipe((0,Ct.U)(Ft=>"stop"!==Ft),(0,Pi.x)(),(0,Pe.t)(this)).subscribe(Ft=>{this.isScrolling=Ft,this.cdr.detectChanges()}),this.onScroll$.pipe((0,Ge.h)(Ft=>"bottom"===Ft),(0,nt.M)(this.pageInfo$),(0,Ct.U)(([Ft,Mn])=>Mn),(0,Pe.t)(this)).subscribe(Ft=>{Ft.hasNextPage||(this.noMoreRows$.next(!0),this.cdr.detectChanges(),setInterval(()=>this.noMoreRows$.next(!1)))})}ngAfterViewInit(){this.onResetFilter$.pipe((0,nt.M)((0,ui.of)(this.tableConfig.get())),(0,Pe.t)(this)).subscribe(([h,c])=>{const C=[];c.forEach(le=>{if(Us(le)&&le.sort.changes&&le.sort.changes.next({key:le.key,value:le.sort.default??null}),fr(le)){const pt=le.filter.options.find(Ft=>1==Ft.byDefault)?.value;le.filter.changes&&le.filter.changes.next({key:le.key,value:pt||null})}C.push(le)}),this.col$.next(C)})}getQueryVars(h){const c=this.getQueryFilterParams(h);return{...this.getQuerySortParams(h),...c,...h.fetchMore}}getQuerySortParams(h){if(!h.sort)return;const C=h.sort.find(pt=>null!==pt.value);return C?{sortBy:{column:this.getSortColumnFromColKey(C.key),direction:"ascend"===C.value?bn.SrV.Asc:bn.SrV.Desc||void 0}}:void 0}getQueryFilterParams(h){let c={};return h.filter&&h.filter.forEach(C=>{c[mr[C.key]||C.key]=null===C.value||""===C.value?void 0:C.value}),c}getRequestErrors(h){return{query:h.errors,network:h.error}}getTableConfigFromColPrefs(h,c){return c.forEach(C=>{if(Is.find(pt=>pt===C.key))return;const le=h.find(pt=>pt.value===C.key);le&&(C.hidden=!le?.checked)}),[...c]}getColPrefsFromTableConfig(h){let c=[];return h.forEach(C=>{Is.find(le=>le===C.key)||c.push({label:C.tooltip||C.label,value:C.key,checked:!C.hidden})}),c}getSortColumnFromColKey(h){return $r[h]}getEntityName(h,c){const C={id:`${h}:${c}`,fragment:Xo.Ps`
                fragment Linkable${h}Entity on ${h} {
                  id
                  name
                  link
                }`},le=this.apollo.client.readFragment(C);if(le)return le.name;console.error(`evidence-manager onSetTableFilter$ could not find cached entity ${h}:${c} to populate input filter`)}trackByIndex(h,c){return c?.id}ngOnChanges(h){if(h.cvcTableSettings){const c=h.cvcTableSettings.currentValue;void 0!==c&&this.onSetTableFilter$.next(c.filters)}if(h.cvcSelectedIds){const c=h.cvcSelectedIds.currentValue,C=new Set;void 0!==c&&c.forEach(le=>C.add(le)),this.onSetSelectedRow$.next(C)}}}).\u0275fac=function(h){return new(h||yr)(e.Y36(bn.EH_),e.Y36(co._M),e.Y36(e.sBO))},yr.\u0275cmp=e.Xpm({type:yr,selectors:[["cvc-evidence-manager"]],inputs:{cvcTableSettings:"cvcTableSettings",cvcSelectedIds:"cvcSelectedIds"},outputs:{cvcSelectedIdsChange:"cvcSelectedIdsChange"},features:[e.TTD],decls:16,vars:27,consts:[["nzSize","small",3,"nzTitle","nzExtra"],["cvcTableScroller","",3,"nzData","cvcTableScrollerQueryRef","cvcTableScrollerPageInfo","cvcTableScrollerToIndex","nzScroll","nzVirtualForTrackBy","nzVirtualItemSize","nzSize","nzFrontPagination","nzShowPagination","nzLoading","cvcTableScrollerOnScroll","cvcTableScrollerOnFetch"],["virtualTable",""],[4,"ngrxLet"],["columnFilterInput",""],["cardTitle",""],["extraTemplate",""],[1,"col-header-row"],[4,"ngFor","ngForOf"],[1,"filter-row"],[4,"ngIf"],[3,"nzShowCheckbox","nzWidth","nzAlign","nzLeft","nzRight",4,"ngIf"],[3,"nzColumnKey","nzAlign","nzWidth","nzLeft","nzRight","nzShowSort","nzSortFn","nzSortOrder","nzSortOrderChange",4,"ngIf"],["nz-tooltip","",3,"nzColumnKey","nzAlign","nzWidth","nzLeft","nzRight","nzTooltipTitle",4,"ngIf"],[3,"nzShowCheckbox","nzWidth","nzAlign","nzLeft","nzRight"],[3,"nzColumnKey","nzAlign","nzWidth","nzLeft","nzRight","nzShowSort","nzSortFn","nzSortOrder","nzSortOrderChange"],["nz-tooltip","",1,"col-header-label",3,"nzTooltipTitle"],["nz-tooltip","",3,"nzColumnKey","nzAlign","nzWidth","nzLeft","nzRight","nzTooltipTitle"],[3,"nzColumnKey","nzAlign","nzWidth","nzLeft","nzRight",4,"ngIf"],[3,"nzColumnKey","nzWidth","nzAlign","nzLeft","nzRight",4,"ngIf"],["class","attribute-filter","nzCustomFilter","",3,"nzColumnKey","nzWidth","nzAlign","nzLeft","nzRight","nzShowSort","nzSortFn","nzSortOrder","nzShowFilter","nzFilterFn","nzSortOrderChange",4,"ngIf"],["class","attribute-filter","nzCustomFilter","",3,"nzColumnKey","nzWidth","nzAlign","nzLeft","nzRight","nzFilterFn",4,"ngIf"],[3,"nzColumnKey","nzAlign","nzWidth","nzLeft","nzRight"],[3,"nzColumnKey","nzWidth","nzAlign","nzLeft","nzRight"],[3,"cvcInputType","cvcPlaceholder","cvcModel","cvcModelChange",4,"ngIf"],[3,"cvcInputType","cvcPlaceholder","cvcModel","cvcModelChange"],["nzCustomFilter","",1,"attribute-filter",3,"nzColumnKey","nzWidth","nzAlign","nzLeft","nzRight","nzShowSort","nzSortFn","nzSortOrder","nzShowFilter","nzFilterFn","nzSortOrderChange"],["enumTableFilter",""],[3,"nzDropdownMenu","nzActive"],["enumTagFilterTrigger",""],["nz-icon","","nzType","filter","nzTheme","fill"],["enumFilterMenu","nzDropdownMenu"],[3,"cvcColumnKey","cvcFilterOptions","cvcOption","cvcOptionChange"],["nzCustomFilter","",1,"attribute-filter",3,"nzColumnKey","nzWidth","nzAlign","nzLeft","nzRight","nzFilterFn"],["nz-icon","","nzType","search"],["textTagFilterMenu","nzDropdownMenu"],[1,"ant-table-filter-dropdown"],[1,"custom-input-dropdown"],[3,"cvcPlaceholder","cvcModel","cvcModelChange"],["nz-virtual-scroll",""],[1,"data-row"],[3,"nzChecked","nzAlign","nzLeft","nzRight","nzCheckedChange",4,"ngIf"],[3,"nzAlign","nzLeft","nzRight",4,"ngIf"],[3,"nzChecked","nzAlign","nzLeft","nzRight","nzCheckedChange"],[3,"nzAlign","nzLeft","nzRight"],["entityTagList",""],["entityTag",""],["emptyEntityTagCell",""],[4,"ngIf","ngIfElse"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"cvcTagTemplate","cvcTagListConfig"],[3,"cvcCollectionTagConfig","cvcTagTemplate","cvcShowFullLabels"],[3,"cvcTruncateLabel","cvcLinkableEntity","cvcEmphasize","cvcShowPopover","cvcStatus","cvcFullWidth"],[3,"cvcEmptyCategory"],["cvcContext","compact",3,"cvcFullWidth","cvcAttrValue","cvcTooltip",4,"ngIf","ngIfElse"],["emptyEnumTagCell",""],["cvcContext","compact",3,"cvcFullWidth","cvcAttrValue","cvcTooltip"],["cvcDisplayMode","small",3,"cvcEmptyCategory"],["nz-tooltip","","style","width: 100%; cursor: help; color: #595959",3,"nzTooltipTitle",4,"ngIf","ngIfElse"],["emptyTextTagCell",""],["nz-tooltip","",2,"width","100%","cursor","help","color","#595959",3,"nzTooltipTitle"],["nz-icon","","nzType","align-left","nzTheme","outline"],["numericInput",""],["nzSize","small",3,"nzSuffix"],["nz-input","",3,"placeholder","ngModel","nzFilterChange"],["filterInput",""],["suffixIcon",""],["nz-icon","","nzType","search","style","color: #ddd",4,"ngIf"],["nz-icon","","class","ant-input-clear-icon","nzTheme","fill","nzType","close-circle",3,"click",4,"ngIf"],["nz-icon","","nzType","search",2,"color","#ddd"],["nz-icon","","nzTheme","fill","nzType","close-circle",1,"ant-input-clear-icon",3,"click"],["nzSize","small"],[2,"width","100%",3,"nzPlaceHolder","ngModel","nzMin","nzStep","ngModelChange"],[3,"nzGutter"],["nzFlex","auto"],["nzColor","processing",4,"ngIf"],[3,"cvcShowTag"],[3,"cvcTableCountsConnection"],["nzFlex","35px"],["nz-button","","type","button","nzType","default","nzSize","small",3,"click"],["nz-icon","","nzType","retweet","nzTheme","outline"],["nz-button","","nz-popover","","nzPopoverTitle","Visible Columns","type","button","nzType","default","nzSize","small",3,"nzPopoverContent","nzPopoverTrigger"],["nz-icon","","nzType","setting","nzTheme","outline"],["prefsPopover",""],["nzColor","processing"],["nz-icon","","nzType","sync","nzSpin",""],["nzColor","error","style","margin-left: 12px",4,"ngIf"],["queryError",""],["nzColor","error",2,"margin-left","12px"],["nz-icon","","nzType","question-circle","nzTheme","outline"],["nz-tooltip","",2,"cursor","help",3,"nzTooltipTitle","nzTooltipTitleContext"],["nz-typography",""],[1,"prefs-popover"],[3,"ngModel","ngModelChange"]],template:function(h,c){if(1&h&&(e.TgZ(0,"nz-card",0)(1,"nz-table",1,2),e.NdJ("cvcTableScrollerOnScroll",function(le){return c.onScroll$.next(le)})("cvcTableScrollerOnFetch",function(le){return c.onFetchMore$.next(le)}),e.ALo(3,"ngrxPush"),e.ALo(4,"ngrxPush"),e.ALo(5,"ngrxPush"),e.ALo(6,"ngrxPush"),e.ALo(7,"ngrxPush"),e.YNc(8,Gs,5,2,"thead",3),e.YNc(9,Be,2,0,"tbody",3),e.qZA()(),e.YNc(10,Qn,3,2,"ng-template",null,4,e.W1O),e.YNc(12,Qi,4,2,"ng-template",null,5,e.W1O),e.YNc(14,as,19,13,"ng-template",null,6,e.W1O)),2&h){const C=e.MAs(13),le=e.MAs(15);e.Q6J("nzTitle",C)("nzExtra",le),e.xp6(1),e.Q6J("nzData",e.lcZ(3,15,c.row$)||e.DdM(25,Oo))("cvcTableScrollerQueryRef",c.queryRef)("cvcTableScrollerPageInfo",e.lcZ(4,17,c.pageInfo$))("cvcTableScrollerToIndex",e.lcZ(5,19,c.scrollToIndex$))("nzScroll",e.DdM(26,Ns))("nzVirtualForTrackBy",c.trackByIndex)("nzVirtualItemSize",28)("nzSize","small")("nzFrontPagination",!1)("nzShowPagination",!1)("nzLoading",e.lcZ(6,21,c.loading$)&&!e.lcZ(7,23,c.isFetchMore$)),e.xp6(7),e.Q6J("ngrxLet",c.col$),e.xp6(1),e.Q6J("ngrxLet",c.col$)}},dependencies:[S.sg,S.O5,S.tP,Ue,Rt.P,io,Dn,Tt.J,hi.H,xe,t.Fj,t.JJ,t.On,P.eJ,Sn.ix,Sn.fY,hn.w,ln.dQ,Gi.bd,kt.ub,Fo.RR,w.t3,w.SK,yt.Ls,Ae.Zp,Ae.gB,Ae.ke,Yo._V,Yo.Rb,Rn.lU,Di.N8,Di.qD,Di.Uo,Di._C,Di.h7,Di.Om,Di.p0,Di.$Z,Di.zu,Di.qn,Di.Ql,Di.UX,Di.g6,Yt.j,Lt.SY,de.ZU,pn,_r,er,Wo,We.Do,tr,P.fM],styles:["[_nghost-%COMP%]{display:block}nz-card[_ngcontent-%COMP%]:first-of-type     .ant-card-body{padding:0;margin-top:1px}.table-info[_ngcontent-%COMP%]{margin-left:.5rem}tr.col-header-row[_ngcontent-%COMP%]   th.ant-table-cell[_ngcontent-%COMP%]{white-space:nowrap}tr.col-header-row[_ngcontent-%COMP%]   th.ant-table-cell.align-right[_ngcontent-%COMP%]     .ant-table-column-title{text-align:right}tr.filter-row[_ngcontent-%COMP%]   th.ant-table-cell[_ngcontent-%COMP%]{padding:3px 4px}tr.filter-row[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   nz-filter-trigger[_ngcontent-%COMP%]     span.ant-dropdown-trigger{margin-left:0;padding-right:12px}tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell[_ngcontent-%COMP%]{white-space:nowrap}tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell[_ngcontent-%COMP%]   .anticon.attribute-icon[_ngcontent-%COMP%]{color:#595959}tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell.overflow-ellipsis[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis}tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell.button-cell[_ngcontent-%COMP%]{padding:0}tr.data-row[_ngcontent-%COMP%]   td.align-right[_ngcontent-%COMP%], tr.col-header-row[_ngcontent-%COMP%]   th.ant-table-cell[_ngcontent-%COMP%]   .align-right[_ngcontent-%COMP%], tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell[_ngcontent-%COMP%]   .align-right[_ngcontent-%COMP%], tr.filter-row[_ngcontent-%COMP%]   th.ant-table-cell[_ngcontent-%COMP%]   .align-right[_ngcontent-%COMP%]{text-align:right}tr.data-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-of-type{padding-left:6px}tr.data-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-of-type   cvc-entity-tag[_ngcontent-%COMP%]{margin-left:6px}.ant-table-filter-dropdown[_ngcontent-%COMP%]{padding:8px}.prefs-popover[_ngcontent-%COMP%]     nz-checkbox-group:first-of-type label{display:block}.prefs-popover[_ngcontent-%COMP%]     nz-checkbox-group:first-of-type label span{display:inline-block}"],changeDetection:0}),yr);cs=(0,Te.gn)([(0,Pe.c)()],cs);const Gc=["optionTemplates"];function za(g,h){if(1&g){const c=e.EpF();e.TgZ(0,"nz-col",9)(1,"cvc-evidence-manager",10),e.NdJ("cvcSelectedIdsChange",function(le){e.CHM(c);const pt=e.oxw();return e.KtG(pt.onPopulate$.next(le))}),e.ALo(2,"ngrxPush"),e.ALo(3,"ngrxPush"),e.qZA()()}if(2&g){const c=e.oxw();e.xp6(1),e.Q6J("cvcSelectedIds",e.lcZ(2,2,c.onEid$))("cvcTableSettings",e.lcZ(3,4,c.tableSettingsChange$))}}function Qc(g,h){if(1&g&&e._UZ(0,"cvc-entity-tag",13),2&g){const c=e.oxw().$implicit,C=e.oxw().ngrxLet;e.Q6J("cvcDisableLink",!0)("cvcCacheId",c.__typename+":"+c.id)("cvcEmphasize",C)}}function Ts(g,h){1&g&&(e.ynx(0),e.YNc(1,Qc,1,3,"ng-template",null,12,e.W1O),e.BQk())}function Wc(g,h){if(1&g&&(e.ynx(0),e.YNc(1,Ts,3,0,"ng-container",11),e.ALo(2,"ngrxPush"),e.BQk()),2&g){const c=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,c.result$))}}function ur(g,h){if(1&g){const c=e.EpF();e.TgZ(0,"div",14)(1,"cvc-entity-tag",15),e.NdJ("cvcOnClose",function(){const pt=e.CHM(c).$implicit,Ft=e.oxw();return e.KtG(Ft.onTagClose$.next(pt.nzValue))}),e.qZA()()}if(2&g){const c=h.$implicit,C=e.oxw();e.xp6(1),e.Q6J("cvcCacheId","EvidenceItem:"+c.nzValue)("cvcContext",C.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",C.props.isMultiSelect?"default":"closeable")}}const Zc=function(){return[6,6]},Ms=function(g,h){return{show:g,hide:h}},ec=_t($t(),vi());class bo extends ec{constructor(h,c,C,le){super(),this.taq=h,this.tq=c,this.changeDetectorRef=C,this.apollo=le,this.synchronizedFields$=[],this.synchronizedRequired$=[],this.defaultOptions={props:{label:"Evidence Items",placeholder:"Select Evidence Items",isMultiSelect:!0,description:"Select Evidence by ID, or use the manager to select with filtering",entityName:{singular:"Evidence Item",plural:"Evidence Items"},minSearchStrLength:1}},this.synchronizedFieldToColMap=new Map([["molecularProfileId","molecularProfile"],["diseaseId","disease"],["therapyIds","therapies"]]),this.requiredFieldToColMap=new Map([["disease","requiresDisease$"],["therapies","requiresTherapy$"]]),this.onEid$=new Ti.t,this.onShowMgrClick$=new Ke.x,this.showMgr$=this.onShowMgrClick$.pipe((0,po.R)((pt,Ft)=>!pt,!1))}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEntitySelectField({typeaheadQuery:this.taq,tagQuery:this.tq,getTypeaheadVarsFn:this.getTypeaheadVarsFn,getTypeaheadResultsFn:this.getTypeaheadResultsFn,getTagQueryVarsFn:this.getTagQueryVarsFn,getTagQueryResultsFn:this.getTagQueryResultsFn,getSelectedItemOptionFn:this.getSelectedItemOptionFn,getSelectOptionsFn:this.getSelectOptionsFn,changeDetectorRef:this.changeDetectorRef,selectOpen$:this.selectOpen$,selectComponent:this.selectComponent}),this.onEid$.pipe((0,Pe.t)(this)).subscribe(),this.onEid$.next(this.formControl.value),this.onValueChange$.pipe((0,nt.M)(this.onEid$),(0,Pe.t)(this)).subscribe(([h,c])=>{Array.isArray(h)&&this.onEid$.next(h)})}configureStateConnections(){this.state&&(this.synchronizedFieldToColMap.forEach((h,c)=>{const C=this.state.fields[`${c}$`];C&&this.synchronizedFields$.push(C.pipe((0,Ct.U)(le=>({key:c,value:le??null}))))}),this.requiredFieldToColMap.forEach((h,c)=>{const C=this.state.requires[h];C&&this.synchronizedRequired$.push(C.pipe((0,Ct.U)(le=>({key:c,required:le}))))}),this.onFieldsChange$=(0,ii.a)(this.synchronizedFields$).pipe((0,Ct.U)(h=>{const c=[];return h.forEach(C=>{const le=this.synchronizedFieldToColMap.get(C.key);le&&c.push({key:le,value:C.value})}),c})),this.onRequiredChange$=(0,ii.a)(this.synchronizedRequired$).pipe((0,Ct.U)(h=>{const c=[];return h.forEach(C=>{c.push({value:C.key,checked:C.required})}),c})),this.tableSettingsChange$=(0,ii.a)([this.onFieldsChange$,this.onRequiredChange$]).pipe((0,Ct.U)(([h,c])=>({filters:h,preferences:c})),(0,qo.b)(100),(0,Ho.d)(1)))}getTypeaheadVarsFn(h,c){return{eid:+h.replace(/EID/i,"")}}getTypeaheadResultsFn(h){return h.data.evidenceItems.nodes}getTagQueryVarsFn(h){return{eid:h}}getTagQueryResultsFn(h){return h.data.evidenceItem}getSelectedItemOptionFn(h){return{value:h.id,label:`EID${h.id}`}}getSelectOptionsFn(h,c){return h.map((C,le)=>({label:c.get(le)||`EID${C.id}`,value:C.id}))}}bo.\u0275fac=function(h){return new(h||bo)(e.Y36(bn.olA),e.Y36(bn.EFm),e.Y36(e.sBO),e.Y36(co._M))},bo.\u0275cmp=e.Xpm({type:bo,selectors:[["cvc-evidence-select"]],viewQuery:function(h,c){if(1&h&&e.Gf(Gc,5,e.Rgc),2&h){let C;e.iGM(C=e.CRH())&&(c.optionTemplates=C)}},features:[e.qOj],decls:18,vars:36,consts:[[3,"nzGutter"],["nzFlex","auto"],[3,"cvcSelectMode","cvcMinSearchStrLength","cvcCustomTemplate","cvcFormControl","cvcFormlyAttributes","cvcEntityName","cvcPlaceholder","cvcResults","cvcOptions","cvcShowError","cvcDisabled","cvcLoading","cvcSelectOpen","cvcOnSearch","cvcOnOpenChange","cvcSelectComponent","cvcOnModelChange"],["nzFlex","50px"],["type","button","nz-button","","nzBlock","",1,"manager-button",3,"click"],["nz-icon","",3,"ngClass","nzType"],["nzSpan","24","class","manager-drawer",4,"ngIf"],[4,"ngrxLet"],["selectedTemplate",""],["nzSpan","24",1,"manager-drawer"],[3,"cvcSelectedIds","cvcTableSettings","cvcSelectedIdsChange"],[4,"ngFor","ngForOf"],["optionTemplates",""],[3,"cvcDisableLink","cvcCacheId","cvcEmphasize"],[1,"ant-select-selection-item-content"],[3,"cvcCacheId","cvcContext","cvcMode","cvcOnClose"]],template:function(h,c){if(1&h&&(e.TgZ(0,"nz-row",0)(1,"nz-col",1)(2,"cvc-entity-select",2),e.NdJ("cvcOnSearch",function(le){return c.onSearch$.next(le)})("cvcOnOpenChange",function(le){return c.onOpenChange$.next(le)})("cvcSelectComponent",function(le){return c.selectComponent=le})("cvcOnModelChange",function(le){return c.props.change&&c.props.change(c.field,le)}),e.ALo(3,"ngrxPush"),e.ALo(4,"ngrxPush"),e.ALo(5,"ngrxPush"),e.ALo(6,"ngrxPush"),e.qZA()(),e.TgZ(7,"nz-col",3)(8,"button",4),e.NdJ("click",function(){return c.onShowMgrClick$.next()}),e._UZ(9,"span",5),e.ALo(10,"ngrxPush"),e.ALo(11,"ngrxPush"),e._uU(12," Manager "),e.qZA()(),e.YNc(13,za,4,6,"nz-col",6),e.ALo(14,"ngrxPush"),e.qZA(),e.YNc(15,Wc,3,3,"ng-container",7),e.YNc(16,ur,2,3,"ng-template",null,8,e.W1O)),2&h){const C=e.MAs(17);e.Q6J("nzGutter",e.DdM(32,Zc)),e.xp6(2),e.Q6J("cvcSelectMode",c.props.isMultiSelect?"multiple":"default")("cvcMinSearchStrLength",c.props.minSearchStrLength)("cvcCustomTemplate",C)("cvcFormControl",c.formControl)("cvcFormlyAttributes",c.field)("cvcEntityName",c.props.entityName)("cvcPlaceholder",c.props.placeholder)("cvcResults",e.lcZ(3,18,c.result$))("cvcOptions",e.lcZ(4,20,c.selectOption$))("cvcShowError",c.showError)("cvcDisabled",c.props.disabled)("cvcLoading",e.lcZ(5,22,c.isLoading$))("cvcSelectOpen",e.lcZ(6,24,c.selectOpen$)),e.xp6(7),e.Q6J("ngClass",e.WLB(33,Ms,e.lcZ(10,26,c.showMgr$),!e.lcZ(11,28,c.showMgr$)))("nzType","caret-right"),e.xp6(4),e.Q6J("ngIf",e.lcZ(14,30,c.showMgr$)),e.xp6(2),e.Q6J("ngrxLet",c.onSearch$)}},dependencies:[S.mk,S.sg,S.O5,je,Tt.J,P.eJ,Sn.ix,hn.w,ln.dQ,w.t3,w.SK,yt.Ls,cs,P.fM],styles:[".manager-button[_ngcontent-%COMP%]   span.hide[_ngcontent-%COMP%]{transform:rotate(0);transition:transform .2s linear}.manager-button[_ngcontent-%COMP%]   span.show[_ngcontent-%COMP%]{transform:rotate(90deg);transition:transform .2s linear}"],changeDetection:0});var ql=a(1371);class Uo{}Uo.\u0275fac=function(h){return new(h||Uo)},Uo.\u0275mod=e.oAB({type:Uo}),Uo.\u0275inj=e.cJS({imports:[S.ez,yt.PV,Yt.X,Lt.cg,de.ZJ,xt.s,rt.x]});class bs{}bs.\u0275fac=function(h){return new(h||bs)},bs.\u0275mod=e.oAB({type:bs}),bs.\u0275inj=e.cJS({imports:[S.ez,Yt.X,de.ZJ,Rn.$6,yt.PV,Lt.cg,xt.s,Uo]});const Eo={types:[{name:"evidence-select",wrappers:["form-field"],component:bo},{name:"evidence-multi-select",wrappers:["form-field"],component:bo,defaultOptions:{props:{label:"Evidence Items",isMultiSelect:!0}}}]};class ls{}ls.\u0275fac=function(h){return new(h||ls)},ls.\u0275mod=e.oAB({type:ls}),ls.\u0275inj=e.cJS({imports:[S.ez,Ye,ql.M,bs,En,Uo,rt.x,Ii.y,xt.s,Li,m.X0.forChild(Eo),t.u5,P._N,Sn.sL,Gi.vh,kt.Wr,Fo.b1,s.U5,w.Jb,yt.PV,Ae.o7,Yo.Zf,Rn.$6,Di.HQ,Yt.X,Lt.cg,de.ZJ,P.pP]});const Gr=["optionTemplates"];function tc(g,h){if(1&g&&(e.ynx(0),e.TgZ(1,"em"),e._UZ(2,"span",9),e.ALo(3,"highlightTypeahead"),e.qZA(),e.BQk()),2&g){const c=e.oxw(2).$implicit,C=e.oxw().ngrxLet;e.xp6(2),e.Q6J("innerHtml",e.xi3(3,1,c.geneAliases.join(", "),C),e.oJD)}}function Ls(g,h){1&g&&e._uU(0,"--")}function Ta(g,h){if(1&g&&(e._UZ(0,"cvc-entity-tag",5),e.TgZ(1,"span",6),e.YNc(2,tc,4,4,"ng-container",7),e.YNc(3,Ls,1,0,"ng-template",null,8,e.W1O),e.qZA()),2&g){const c=e.MAs(4),C=e.oxw().$implicit,le=e.oxw().ngrxLet;e.Q6J("cvcDisableLink",!0)("cvcCacheId",C.__typename+":"+C.id)("cvcEmphasize",le),e.xp6(2),e.Q6J("ngIf",C.geneAliases.length>0)("ngIfElse",c)}}function nc(g,h){1&g&&(e.ynx(0),e.YNc(1,Ta,5,5,"ng-template",null,4,e.W1O),e.BQk())}function Xl(g,h){if(1&g&&(e.ynx(0),e.YNc(1,nc,3,0,"ng-container",3),e.ALo(2,"ngrxPush"),e.BQk()),2&g){const c=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,c.result$))}}function ic(g,h){if(1&g){const c=e.EpF();e.TgZ(0,"div",10)(1,"cvc-entity-tag",11),e.NdJ("cvcOnClose",function(){const pt=e.CHM(c).$implicit,Ft=e.oxw();return e.KtG(Ft.onTagClose$.next(pt.nzValue))}),e.qZA()()}if(2&g){const c=h.$implicit,C=e.oxw();e.xp6(1),e.Q6J("cvcCacheId","Gene:"+c.nzValue)("cvcContext",C.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",C.props.isMultiSelect?"default":"closeable")}}const oc=_t($t(),vi());class wo extends oc{constructor(h,c,C){super(),this.taq=h,this.tq=c,this.changeDetectorRef=C,this.defaultOptions={props:{label:"Gene",placeholder:"Search Genes",isMultiSelect:!1,entityName:{singular:"Gene",plural:"Genes"},description:"Entrez Gene Symbol"}}}ngAfterViewInit(){this.configureBaseField(),this.configureEntitySelectField({typeaheadQuery:this.taq,typeaheadParam$:void 0,tagQuery:this.tq,getTypeaheadVarsFn:this.getTypeaheadVarsFn,getTypeaheadResultsFn:this.getTypeaheadResultsFn,getTagQueryVarsFn:this.getTagQueryVarsFn,getTagQueryResultsFn:this.getTagQueryResultsFn,getSelectedItemOptionFn:this.getSelectedItemOptionFn,getSelectOptionsFn:this.getSelectOptionsFn,changeDetectorRef:this.changeDetectorRef,selectOpen$:this.selectOpen$,selectComponent:this.selectComponent})}getTypeaheadVarsFn(h){return{entrezSymbol:h}}getTypeaheadResultsFn(h){return h.data.geneTypeahead}getTagQueryVarsFn(h){return{geneId:h}}getTagQueryResultsFn(h){return h.data.gene}getSelectedItemOptionFn(h){return{value:h.id,label:h.name}}getSelectOptionsFn(h,c){return h.map((C,le)=>({label:c.get(le)||C.name,value:C.id}))}}wo.\u0275fac=function(h){return new(h||wo)(e.Y36(bn.czh),e.Y36(bn.HwR),e.Y36(e.sBO))},wo.\u0275cmp=e.Xpm({type:wo,selectors:[["cvc-gene-select"]],viewQuery:function(h,c){if(1&h&&e.Gf(Gr,5,e.Rgc),2&h){let C;e.iGM(C=e.CRH())&&(c.optionTemplates=C)}},features:[e.qOj],decls:7,vars:17,consts:[[3,"cvcSelectMode","cvcCustomTemplate","cvcFormControl","cvcFormlyAttributes","cvcPlaceholder","cvcEntityName","cvcResults","cvcOptions","cvcShowError","cvcLoading","cvcOnSearch","cvcOnOpenChange","cvcSelectComponent","cvcOnModelChange"],[4,"ngrxLet"],["selectedTemplate",""],[4,"ngFor","ngForOf"],["optionTemplates",""],[3,"cvcDisableLink","cvcCacheId","cvcEmphasize"],["nz-typography","","nzType","secondary"],[4,"ngIf","ngIfElse"],["noAliases",""],["nz-typography","","nzType","secondary",3,"innerHtml"],[1,"ant-select-selection-item-content"],[3,"cvcCacheId","cvcContext","cvcMode","cvcOnClose"]],template:function(h,c){if(1&h&&(e.TgZ(0,"cvc-entity-select",0),e.NdJ("cvcOnSearch",function(le){return c.onSearch$.next(le)})("cvcOnOpenChange",function(le){return c.onOpenChange$.next(le)})("cvcSelectComponent",function(le){return c.selectComponent=le})("cvcOnModelChange",function(le){return c.props.change&&c.props.change(c.field,le)}),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.ALo(3,"ngrxPush"),e.qZA(),e.YNc(4,Xl,3,3,"ng-container",1),e.YNc(5,ic,2,3,"ng-template",null,2,e.W1O)),2&h){const C=e.MAs(6);e.Q6J("cvcSelectMode",c.props.isMultiSelect?"multiple":"default")("cvcCustomTemplate",C)("cvcFormControl",c.formControl)("cvcFormlyAttributes",c.field)("cvcPlaceholder",c.props.placeholder)("cvcEntityName",c.props.entityName)("cvcResults",e.lcZ(1,11,c.result$))("cvcOptions",e.lcZ(2,13,c.selectOption$))("cvcShowError",c.showError)("cvcLoading",e.lcZ(3,15,c.isLoading$)),e.xp6(4),e.Q6J("ngrxLet",c.onSearch$)}},dependencies:[S.sg,S.O5,P.eJ,de.ZU,je,Tt.J,P.fM,U.A],changeDetection:0});const rc={types:[{name:"gene-select",wrappers:["form-field"],component:wo},{name:"gene-multi-select",wrappers:["form-field"],component:wo,defaultOptions:{props:{label:"Genes",isMultiSelect:!0}}}]};class us{}us.\u0275fac=function(h){return new(h||us)},us.\u0275mod=e.oAB({type:us}),us.\u0275inj=e.cJS({imports:[S.ez,t.UX,P._N,P.pP,m.X0.forChild(rc),nn.L,Sn.sL,Qe.LV,yt.PV,Ae.o7,Lt.cg,s.U5,be.ic,de.ZJ,Yt.X,lt,En,xt.s,rt.x]});const Ol=["optionTemplates"];function jo(g,h){if(1&g&&e._UZ(0,"cvc-attribute-tag",4),2&g){const c=e.oxw().$implicit;e.Q6J("cvcAttrValue",c)}}function sc(g,h){1&g&&(e.ynx(0),e.YNc(1,jo,1,1,"ng-template",null,3,e.W1O),e.BQk())}function Zs(g,h){if(1&g){const c=e.EpF();e.TgZ(0,"div",5)(1,"cvc-attribute-tag",6),e.NdJ("cvcOnClose",function(le){e.CHM(c);const pt=e.oxw();return e.KtG(pt.onTagClose$.next(le))}),e.qZA()()}if(2&g){const c=h.$implicit,C=e.oxw();e.xp6(1),e.Q6J("cvcAttrValue",c.nzValue)("cvcContext",C.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",C.props.isMultiSelect?"default":"closeable")}}const xu={COMBINATION:"Therapies specified were used as part of a combination therapy approach",SEQUENTIAL:"Therapies specified were used at separate timepoints in the same treatment plan",SUBSTITUTES:"Therapies specified are often considered to be of the same family, or behave similarly in a treatment setting"},ac=_t($t(),ht());class Ks extends ac{constructor(h){super(),this.cdr=h,this.defaultOptions={props:{label:"Therapy Interaction",placeholder:"Select Therapy Interaction",requireMultipleTherapies:!0,requireMultipleTherapiesPromptFn:()=>"A single associated therapy does not have an Interaction type",tooltip:"Characterizes the interaction of a multi-therapy treatment",extraType:"prompt"}},this.interactionEnum$=new ot.X([]),this.placeholder$=new ot.X(void 0)}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEnumSelectField({optionEnum$:this.interactionEnum$,optionTemplate$:this.optionTemplate$,changeDetectorRef:this.cdr})}configureStateConnections(){if(!this.state)return console.error(`${this.field.id} requires a form state to populate its options, none was found.`),void this.placeholder$.next("ERROR: Form state not found");this.placeholder$.next(this.props.placeholder),this.state.enums.interaction$?(this.state.enums.interaction$.pipe((0,Pe.t)(this)).subscribe(h=>{this.interactionEnum$.next(h)}),this.optionTemplates||console.error(`${this.field.id} could not find its optionTemplates QueryList to populate its select options, so simple text labels will be displayed.`),this.optionTemplate$=this.optionTemplates?.changes.pipe((0,Ct.U)(h=>h.map(c=>c))),this.onTherapies$=this.state.fields.therapyIds$,this.optionTemplates||console.warn(`${this.field.id} could not find state's fields.therapyIds$ to handle its required & disabled states.`),this.onTherapies$.pipe((0,Pe.t)(this)).subscribe(h=>{h&&0!=h.length?1==h.length?(this.props.description="A single associated therapy does not have an Interaction type",this.props.disabled=!0,this.props.required=!1,void 0!==this.formControl.value&&this.formControl.setValue(void 0)):(this.props.description="Select an Interaction Type",this.props.disabled=!1,this.props.required=!0):(this.props.disabled=!0,this.props.required=!1,this.props.description="Interaction type is not applicable when no therapies are selected.",void 0!==this.formControl.value&&this.formControl.setValue(void 0)),this.cdr.markForCheck()}),this.onValueChange$.pipe((0,Pe.t)(this)).subscribe(h=>{h?(this.props.description=xu[h],this.props.extraType="description"):this.props.extraType="prompt"})):console.error(`${this.field.id} could not find form state's interaction$ to populate select.`)}}Ks.\u0275fac=function(h){return new(h||Ks)(e.Y36(e.sBO))},Ks.\u0275cmp=e.Xpm({type:Ks,selectors:[["cvc-interaction-select"]],viewQuery:function(h,c){if(1&h&&e.Gf(Ol,5,e.Rgc),2&h){let C;e.iGM(C=e.CRH())&&(c.optionTemplates=C)}},features:[e.qOj],decls:7,vars:15,consts:[[3,"cvcFormControl","cvcFormlyAttributes","cvcSelectMode","cvcPlaceholder","cvcCustomTemplate","cvcOptions","cvcShowError","cvcDisabled"],[4,"ngFor","ngForOf"],["selectedTemplate",""],["optionTemplates",""],[3,"cvcAttrValue"],[1,"ant-select-selection-item-content"],[3,"cvcAttrValue","cvcContext","cvcMode","cvcOnClose"]],template:function(h,c){if(1&h&&(e._UZ(0,"cvc-enum-select",0),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.YNc(3,sc,3,0,"ng-container",1),e.ALo(4,"ngrxPush"),e.YNc(5,Zs,2,3,"ng-template",null,2,e.W1O)),2&h){const C=e.MAs(6);e.Q6J("cvcFormControl",c.formControl)("cvcFormlyAttributes",c.field)("cvcSelectMode",c.props.isMultiSelect?"multiple":"default")("cvcPlaceholder",e.lcZ(1,9,c.placeholder$))("cvcCustomTemplate",C)("cvcOptions",e.lcZ(2,11,c.selectOption$))("cvcShowError",c.showError)("cvcDisabled",c.props.disabled),e.xp6(3),e.Q6J("ngForOf",e.lcZ(4,13,c.interactionEnum$))}},dependencies:[S.sg,Dt,Ue,P.fM]});const ks={types:[{name:"interaction-select",wrappers:["form-field"],component:Ks}]};class Mr{}Mr.\u0275fac=function(h){return new(h||Mr)},Mr.\u0275mod=e.oAB({type:Mr}),Mr.\u0275inj=e.cJS({imports:[S.ez,t.UX,P._N,P.pP,m.X0.forChild(ks),lt,ie,Ye]});var ds=a(6204);const Ma=["optionTemplates"];function Js(g,h){if(1&g&&(e.TgZ(0,"nz-tag")(1,"strong"),e._uU(2),e.qZA(),e._uU(3),e.ALo(4,"enumTooltip"),e.qZA()),2&g){const c=e.oxw().$implicit;e.xp6(2),e.Oqu(c),e.xp6(1),e.hij(" - ",e.xi3(4,2,c,"evidenceLevelBrief")," ")}}function Kc(g,h){1&g&&(e.ynx(0),e.YNc(1,Js,5,5,"ng-template",null,3,e.W1O),e.BQk())}function hs(g,h){if(1&g){const c=e.EpF();e.TgZ(0,"nz-tag",7),e.NdJ("nzOnClose",function(le){e.CHM(c);const pt=e.oxw(2);return e.KtG(pt.onTagClose$.next(le))}),e.TgZ(1,"strong"),e._uU(2),e.qZA(),e._uU(3),e.ALo(4,"enumTooltip"),e.qZA()}if(2&g){const c=e.oxw().$implicit;e.xp6(2),e.Oqu(c.nzValue),e.xp6(1),e.hij(" - ",e.xi3(4,2,c.nzValue,"evidenceLevelBrief")," ")}}function r1(g,h){if(1&g&&(e.ynx(0),e._uU(1),e.ALo(2,"enumTooltip"),e.BQk()),2&g){const c=e.oxw().$implicit;e.xp6(1),e.hij(" ",e.xi3(2,1,c.nzValue,"evidenceLevelBrief")," ")}}function Jc(g,h){if(1&g&&(e.TgZ(0,"div",4),e.YNc(1,hs,5,5,"nz-tag",5),e.YNc(2,r1,3,4,"ng-container",6),e.qZA()),2&g){const c=e.oxw();e.xp6(1),e.Q6J("ngIf",!c.props.isMultiSelect),e.xp6(1),e.Q6J("ngIf",c.props.isMultiSelect)}}const Yi=new Map([[bn.Sx0.A,"Evidence shows consensus association in human medicine"],[bn.Sx0.B,"Evidence supports association using clinical trial or other primary patient data"],[bn.Sx0.C,"Evidence supports association using individual case reports from clinical journals"],[bn.Sx0.D,"Evidence supports association using in vivo or in vitro models"],[bn.Sx0.E,"Evidential association is inferential or indirect"]]),wl=_t($t(),ht());class ba extends wl{constructor(h){super(),this.cdr=h,this.defaultOptions={props:{label:"Evidence Level",required:!1,isMultiSelect:!1,placeholder:"Select Evidence Level"}},this.levelEnum$=new ot.X([])}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEnumSelectField({optionEnum$:this.levelEnum$,optionTemplate$:this.optionTemplate$,changeDetectorRef:this.cdr})}configureStateConnections(){this.props.tooltip="Type of study performed to produce the evidence statement",this.placeholder$=new ot.X(this.props.placeholder),this.levelEnum$.next((0,No.o6)(bn.Sx0).map(h=>h)),this.optionTemplates||console.error(`${this.field.id} could not find its optionTemplates QueryList to populate its select options, so simple text labels will be displayed.`),this.optionTemplate$=this.optionTemplates?.changes.pipe((0,Ct.U)(h=>h.map(c=>c))),this.onValueChange$.pipe((0,Pe.t)(this)).subscribe(h=>{this.props.description=h?Yi.get(h):void 0})}}ba.\u0275fac=function(h){return new(h||ba)(e.Y36(e.sBO))},ba.\u0275cmp=e.Xpm({type:ba,selectors:[["cvc-level-select"]],viewQuery:function(h,c){if(1&h&&e.Gf(Ma,5,e.Rgc),2&h){let C;e.iGM(C=e.CRH())&&(c.optionTemplates=C)}},features:[e.qOj],decls:7,vars:15,consts:[[3,"cvcFormControl","cvcFormlyAttributes","cvcSelectMode","cvcPlaceholder","cvcCustomTemplate","cvcOptions","cvcShowError","cvcDisabled"],[4,"ngFor","ngForOf"],["selectedTemplate",""],["optionTemplates",""],[1,"ant-select-selection-item-content"],["nzMode","closeable",3,"nzOnClose",4,"ngIf"],[4,"ngIf"],["nzMode","closeable",3,"nzOnClose"]],template:function(h,c){if(1&h&&(e._UZ(0,"cvc-enum-select",0),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.YNc(3,Kc,3,0,"ng-container",1),e.ALo(4,"ngrxPush"),e.YNc(5,Jc,3,2,"ng-template",null,2,e.W1O)),2&h){const C=e.MAs(6);e.Q6J("cvcFormControl",c.formControl)("cvcFormlyAttributes",c.field)("cvcSelectMode",c.props.isMultiSelect?"multiple":"default")("cvcPlaceholder",e.lcZ(1,9,c.placeholder$))("cvcCustomTemplate",C)("cvcOptions",e.lcZ(2,11,c.selectOption$))("cvcShowError",c.showError)("cvcDisabled",c.props.disabled),e.xp6(3),e.Q6J("ngForOf",e.lcZ(4,13,c.levelEnum$))}},dependencies:[S.sg,S.O5,Yt.j,Dt,P.fM,ds.v]});const qc={types:[{name:"level-select",wrappers:["form-field"],component:ba},{name:"level-multi-select",wrappers:["form-field"],component:ba,defaultOptions:{props:{label:"Levels",isMultiSelect:!0}}}]};class cc{}cc.\u0275fac=function(h){return new(h||cc)},cc.\u0275mod=e.oAB({type:cc}),cc.\u0275inj=e.cJS({imports:[S.ez,t.UX,P._N,P.pP,m.X0.forChild(qc),Yt.X,xt.s,lt,ie]});var lc,qs=a(4383);let Po=((lc=class{constructor(h){this.el=h,this.domChange=new e.vpe,this.changes=new MutationObserver(c=>{(0,ho.D)(c).pipe((0,Ct.U)(C=>{const le=C.target;return"class"===C.attributeName?{type:"class",change:le.classList.value,key:`${C.attributeName}:${le.classList.value}`}:"disabled"===C.attributeName?{type:"disabled",change:le.disabled,key:`${C.attributeName}:${le.disabled}`}:"hidden"===C.attributeName?{type:"hidden",change:le.hidden,key:`${C.attributeName}:${le.hidden}`}:{type:C.attributeName,change:"unknown change type",key:`${C.attributeName}:unknown-change-type`}}),(0,R.g)("key"),(0,Pe.t)(this)).subscribe(C=>{this.domChange.emit(C)})}),this.changes.observe(this.el.nativeElement,{attributeFilter:["class","disabled","hidden"],attributes:!0,childList:!1,subtree:!1})}ngAfterViewInit(){this.initialClass=this.el.nativeElement.classList.value}ngOnDestroy(){this.changes.disconnect()}}).\u0275fac=function(h){return new(h||lc)(e.Y36(e.SBq))},lc.\u0275dir=e.lG2({type:lc,selectors:[["button","cvcOrgSubmitButton",""]],outputs:{domChange:"domChange"}}),lc);Po=(0,Te.gn)([(0,Pe.c)()],Po);var br,Xs=a(9350);function eu(g,h){if(1&g&&(e.TgZ(0,"button",3),e._uU(1),e.qZA()),2&g){const c=e.oxw();e.Q6J("disabled",!c.form.valid),e.xp6(1),e.hij(" ",c.props.submitLabel," ")}}function uo(g,h){1&g&&e.GkF(0)}function Xc(g,h){if(1&g&&(e.ynx(0),e.YNc(1,uo,1,0,"ng-container",7),e.BQk()),2&g){e.oxw(2);const c=e.MAs(2);e.xp6(1),e.Q6J("ngTemplateOutlet",c)}}function Qr(g,h){1&g&&e.GkF(0)}function A(g,h){if(1&g&&(e.ynx(0),e._UZ(1,"nz-avatar",11),e.BQk()),2&g){const c=h.ngrxLet;e.xp6(1),e.Q6J("nzSrc",c.profileImagePath)("nzSize",16)("nzShape","square")}}function B(g,h){if(1&g&&(e.ynx(0),e.TgZ(1,"nz-button-group"),e.YNc(2,Qr,1,0,"ng-container",7),e.TgZ(3,"button",8),e.ALo(4,"ngrxPush"),e.ALo(5,"ngrxPush"),e.ALo(6,"ngrxPush"),e.TgZ(7,"span"),e._uU(8,"for"),e.qZA(),e.YNc(9,A,2,3,"ng-container",9),e._UZ(10,"i",10),e.qZA()(),e.BQk()),2&g){e.oxw();const c=e.MAs(4),C=e.oxw(),le=e.MAs(2);e.xp6(2),e.Q6J("ngTemplateOutlet",le),e.xp6(1),e.Q6J("ngClass",e.lcZ(4,6,C.buttonClass$))("hidden",e.lcZ(5,8,C.isHidden$))("disabled",e.lcZ(6,10,C.isDisabled$))("nzDropdownMenu",c),e.xp6(6),e.Q6J("ngrxLet",C.mostRecentOrg$)}}function E(g,h){if(1&g){const c=e.EpF();e.TgZ(0,"li",12),e.NdJ("click",function(){const pt=e.CHM(c).$implicit,Ft=e.oxw(2);return e.KtG(Ft.menuSelection$.next(pt.id))}),e._UZ(1,"nz-avatar",11),e._uU(2),e.qZA()}if(2&g){const c=h.$implicit;e.xp6(1),e.Q6J("nzSrc",null==c?null:c.profileImagePath)("nzSize",10)("nzShape","square"),e.xp6(1),e.hij(" ",c.name," ")}}function oe(g,h){if(1&g&&(e.ynx(0),e.YNc(1,Xc,2,1,"ng-container",2),e.YNc(2,B,11,12,"ng-container",2),e.TgZ(3,"nz-dropdown-menu",null,4)(5,"ul",5),e.YNc(6,E,3,4,"li",6),e.qZA()(),e.BQk()),2&g){const c=h.ngIf;e.xp6(1),e.Q6J("ngIf",c.length<=1),e.xp6(1),e.Q6J("ngIf",c.length>1),e.xp6(4),e.Q6J("ngForOf",c)}}let De=((br=class extends m.fS{constructor(h,c,C){super(),this.viewerService=h,this.cdr=c,this.apollo=C,this.menuSelection$=new Ke.x,this.baseButtonClass="org-dropdown-btn",this.defaultOptions={props:{submitLabel:"Submit"}},this.viewer$=this.viewerService.viewer$,this.organizations$=this.viewer$.pipe((0,Ut.j)("organizations")),this.mostRecentOrg$=this.viewer$.pipe((0,Ut.j)("mostRecentOrg")),this.isDisabled$=new Ke.x,this.isHidden$=new Ke.x,this.buttonClass$=new ot.X(this.baseButtonClass),this.subscriptions=[]}ngOnInit(){this.menuSelection$.pipe((0,nt.M)(this.viewer$)).subscribe(([le,pt])=>{const Ft={id:`User:${pt.id}`,fragment:co.Ps`
            fragment UserMostRecentOrgId on User {
              mostRecentOrganizationId
            }
          `,data:{mostRecentOrganizationId:le}};this.apollo.client.writeFragment(Ft)}),this.formUpdate$=new ot.X(this.form.status);const h=this.form.statusChanges.subscribe(le=>this.formUpdate$.next(le)),c=this.formUpdate$.subscribe(le=>this.cdr.detectChanges()),C=this.mostRecentOrg$.pipe((0,Ut.j)("id"),(0,Ge.h)(jn.ep)).subscribe(le=>{this.formControl.setValue(le)});this.subscriptions=this.subscriptions.concat([h,c,C])}ngAfterViewInit(){if(this.button&&this.button.domChange){const h=this.button.domChange.subscribe(c=>{"class"===c.type&&"string"==typeof c.change?this.buttonClass$.next(`${this.baseButtonClass} ${c.change}`):"disabled"===c.type&&"boolean"==typeof c.change?this.isDisabled$.next(c.change):"hidden"===c.type&&"boolean"==typeof c.change&&this.isHidden$.next(c.change)});this.subscriptions.push(h)}}}).\u0275fac=function(h){return new(h||br)(e.Y36(Xs.a),e.Y36(e.sBO),e.Y36(co._M))},br.\u0275cmp=e.Xpm({type:br,selectors:[["cvc-org-submit-button"]],viewQuery:function(h,c){if(1&h&&e.Gf(Po,5),2&h){let C;e.iGM(C=e.CRH())&&(c.button=C.first)}},features:[e.qOj],decls:5,vars:5,consts:[["type","hidden",3,"formControl","formlyAttributes"],["submitButton",""],[4,"ngIf"],["cvcOrgSubmitButton","","type","submit","nz-button","","nzType","primary",3,"disabled","nzDanger"],["orgMenu","nzDropdownMenu"],["nz-menu",""],["nz-menu-item","",3,"click",4,"ngFor","ngForOf"],[4,"ngTemplateOutlet"],["type","button","nz-button","","nz-dropdown","","nzTrigger","click",3,"ngClass","hidden","disabled","nzDropdownMenu"],[4,"ngrxLet"],["nz-icon","","nzType","down"],[3,"nzSrc","nzSize","nzShape"],["nz-menu-item","",3,"click"]],template:function(h,c){1&h&&(e._UZ(0,"input",0),e.YNc(1,eu,2,2,"ng-template",null,1,e.W1O),e.YNc(3,oe,7,3,"ng-container",2),e.ALo(4,"ngrxPush")),2&h&&(e.Q6J("formControl",c.formControl)("formlyAttributes",c.field),e.xp6(3),e.Q6J("ngIf",e.lcZ(4,3,c.organizations$)))},dependencies:[S.mk,S.sg,S.O5,S.tP,t.Fj,t.JJ,t.oH,P.eJ,m.JD,yt.Ls,qs.Dz,Sn.ix,Sn.fY,hn.w,ln.dQ,Zi.wO,Zi.r9,Fo.cm,Fo.RR,Fo.wA,Po,P.fM],styles:["[_nghost-%COMP%]{display:inline-block}[_nghost-%COMP%]     .ant-btn-dangerous.ant-btn-primary:first-child:not(:last-child){border-right-color:#ff4d4f}[_nghost-%COMP%]     .ant-btn-dangerous.ant-btn-primary:hover, [_nghost-%COMP%]     .ant-btn-dangerous.ant-btn-primary:focus{border-right-color:#fd7978}.org-dropdown-btn[_ngcontent-%COMP%]   nz-avatar[_ngcontent-%COMP%]{margin:-2px 6px 0;border:1px solid rgba(255,255,255,.3);background-color:#ffffffe6}.org-dropdown-btn.ant-btn-dangerous[_ngcontent-%COMP%]:last-child:not(:first-child), .org-dropdown-btn[_ngcontent-%COMP%]   .ant-btn-dangerous[_ngcontent-%COMP%] + .ant-btn-dangerous[_ngcontent-%COMP%]{border-left-color:#fd7978}"],changeDetection:0}),br);De=(0,Te.gn)([(0,Pe.c)({arrayName:"subscriptions"})],De);const et={types:[{name:"org-submit-button",component:De}]};class ct{}ct.\u0275fac=function(h){return new(h||ct)},ct.\u0275mod=e.oAB({type:ct}),ct.\u0275inj=e.cJS({imports:[S.ez,t.UX,P._N,P.pP,m.X0.forChild(et),yt.PV,qs.Rt,Sn.sL,Fo.b1]});const Wt=["optionTemplates"];function yn(g,h){if(1&g&&e._UZ(0,"cvc-attribute-tag",4),2&g){const c=e.oxw().$implicit;e.Q6J("cvcAttrValue",c)}}function Wn(g,h){1&g&&(e.ynx(0),e.YNc(1,yn,1,1,"ng-template",null,3,e.W1O),e.BQk())}function $n(g,h){if(1&g){const c=e.EpF();e.TgZ(0,"div",5)(1,"cvc-attribute-tag",6),e.NdJ("cvcOnClose",function(le){e.CHM(c);const pt=e.oxw();return e.KtG(pt.onTagClose$.next(le))}),e.qZA()()}if(2&g){const c=h.$implicit,C=e.oxw();e.xp6(1),e.Q6J("cvcAttrValue",c.nzValue)("cvcContext",C.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",C.props.isMultiSelect?"default":"closeable")}}const Ai=new Map([[bn.huM.Somatic,"Variant is a mutation, found only in tumor cells, having arisen in a specific tissue (non-germ cell), and is not expected to be inherited or passed to offspring."],[bn.huM.RareGermline,"Variant is found in every cell (not restricted to tumor/diseased cells) and is thought to exist in less than 1% of the population relevant to this evidence item."],[bn.huM.CommonGermline,"Variant is found in every cell (not restricted to tumor/diseased cells) and is thought to exist in at least 1% of the population relevant to this evidence item."],[bn.huM.Unknown,"The variant origin is uncertain based on the available evidence."],[bn.huM.Na,"The variant type (e.g., expression) is not compatible (or easily classified) with the CIViC concept of variant origin."]]),_o=_t($t(),ht());class Vo extends _o{constructor(h){super(),this.cdr=h,this.defaultOptions={props:{label:"Variant Origin",required:!1,isMultiSelect:!1,placeholder:"Select Variant Origin",tooltip:"Identifies whether the variant is inherited (germline mutation) or acquired (somatic mutation) in the context of the study"}},this.originEnum$=new ot.X([])}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEnumSelectField({optionEnum$:this.originEnum$,optionTemplate$:this.optionTemplate$,changeDetectorRef:this.cdr}),this.originEnum$.next(Array.from(Ai.keys()))}configureStateConnections(){this.optionTemplates||console.error(`${this.field.id} could not find its optionTemplates QueryList to populate its select options, so simple text labels will be displayed.`),this.optionTemplate$=this.optionTemplates?.changes.pipe((0,Ct.U)(h=>h.map(c=>c))),this.onValueChange$.pipe((0,Pe.t)(this)).subscribe(h=>{this.props.description=h?Ai.get(h):void 0})}}Vo.\u0275fac=function(h){return new(h||Vo)(e.Y36(e.sBO))},Vo.\u0275cmp=e.Xpm({type:Vo,selectors:[["cvc-origin-select"]],viewQuery:function(h,c){if(1&h&&e.Gf(Wt,5,e.Rgc),2&h){let C;e.iGM(C=e.CRH())&&(c.optionTemplates=C)}},features:[e.qOj],decls:6,vars:13,consts:[[3,"cvcFormControl","cvcFormlyAttributes","cvcSelectMode","cvcPlaceholder","cvcCustomTemplate","cvcOptions","cvcShowError","cvcDisabled"],[4,"ngFor","ngForOf"],["selectedTemplate",""],["optionTemplates",""],[3,"cvcAttrValue"],[1,"ant-select-selection-item-content"],[3,"cvcAttrValue","cvcContext","cvcMode","cvcOnClose"]],template:function(h,c){if(1&h&&(e._UZ(0,"cvc-enum-select",0),e.ALo(1,"ngrxPush"),e.YNc(2,Wn,3,0,"ng-container",1),e.ALo(3,"ngrxPush"),e.YNc(4,$n,2,3,"ng-template",null,2,e.W1O)),2&h){const C=e.MAs(5);e.Q6J("cvcFormControl",c.formControl)("cvcFormlyAttributes",c.field)("cvcSelectMode",c.props.isMultiSelect?"multiple":"default")("cvcPlaceholder",c.props.placeholder)("cvcCustomTemplate",C)("cvcOptions",e.lcZ(1,9,c.selectOption$))("cvcShowError",c.showError)("cvcDisabled",c.props.disabled),e.xp6(2),e.Q6J("ngForOf",e.lcZ(3,11,c.originEnum$))}},dependencies:[S.sg,Dt,Ue,P.fM]});const Er={types:[{name:"origin-select",wrappers:["form-field"],component:Vo},{name:"origin-multi-select",wrappers:["form-field"],component:Vo,defaultOptions:{props:{label:"Variant Origins",isMultiSelect:!0}}}]};class Go{}Go.\u0275fac=function(h){return new(h||Go)},Go.\u0275mod=e.oAB({type:Go}),Go.\u0275inj=e.cJS({imports:[S.ez,t.UX,P._N,P.pP,m.X0.forChild(Er),lt,ie,Ye]});const Wr=["optionTemplates"];function ea(g,h){if(1&g&&(e.ynx(0),e.TgZ(1,"em"),e._UZ(2,"span",8),e.ALo(3,"highlightTypeahead"),e.qZA(),e.BQk()),2&g){const c=e.oxw(2).$implicit,C=e.oxw().ngrxLet;e.xp6(2),e.Q6J("innerHtml",e.xi3(3,1,c.hpoId,C),e.oJD)}}function Pl(g,h){if(1&g&&(e._UZ(0,"cvc-entity-tag",5),e.TgZ(1,"span",6),e.YNc(2,ea,4,4,"ng-container",7),e.qZA()),2&g){const c=e.oxw().$implicit,C=e.oxw().ngrxLet;e.Q6J("cvcDisableLink",!0)("cvcCacheId",c.__typename+":"+c.id)("cvcEmphasize",C),e.xp6(2),e.Q6J("ngIf",c.hpoId)}}function ta(g,h){1&g&&(e.ynx(0),e.YNc(1,Pl,3,4,"ng-template",null,4,e.W1O),e.BQk())}function X1(g,h){if(1&g&&(e.ynx(0),e.YNc(1,ta,3,0,"ng-container",3),e.ALo(2,"ngrxPush"),e.BQk()),2&g){const c=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,c.result$))}}function Ea(g,h){if(1&g){const c=e.EpF();e.TgZ(0,"div",9)(1,"cvc-entity-tag",10),e.NdJ("cvcOnClose",function(){const pt=e.CHM(c).$implicit,Ft=e.oxw();return e.KtG(Ft.onTagClose$.next(pt.nzValue))}),e.qZA()()}if(2&g){const c=h.$implicit,C=e.oxw();e.xp6(1),e.Q6J("cvcCacheId","Phenotype:"+c.nzValue)("cvcContext",C.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",C.props.isMultiSelect?"default":"closeable")}}const tu=_t($t(),vi());class Zr extends tu{constructor(h,c,C){super(),this.taq=h,this.tq=c,this.changeDetectorRef=C,this.defaultOptions={props:{entityName:{singular:"Phenotype",plural:"Phenotypes"},isMultiSelect:!1,requireType:!0,tooltip:"Phenotype or phenotype combination which interacts with the specified variant",placeholders:{default:"Search Phenotypes",multiDefault:"Select Phenotype(s) (max MULTI_MAX)",requireTypePrompt:"Select an ENTITY_NAME Type to search Phenotypes"},description:'Please provide any <a href="https://hpo.jax.org/app/browse/term/HP:0000118" target="_blank">HPO phenotypes</a>, including <a href="https://hpo.jax.org/app/browse/term/HP:0003674" target="_blank">age of onset</a>.',extraType:"description"}},this.placeholder$=new ot.X(this.defaultOptions.props.placeholders.default)}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEntitySelectField({typeaheadQuery:this.taq,typeaheadParam$:void 0,tagQuery:this.tq,getTypeaheadVarsFn:this.getTypeaheadVarsFn,getTypeaheadResultsFn:this.getTypeaheadResultsFn,getTagQueryVarsFn:this.getTagQueryVarsFn,getTagQueryResultsFn:this.getTagQueryResultsFn,getSelectedItemOptionFn:this.getSelectedItemOptionFn,getSelectOptionsFn:this.getSelectOptionsFn,changeDetectorRef:this.changeDetectorRef,selectOpen$:this.selectOpen$,selectComponent:this.selectComponent}),this.configurePlaceholders()}configureStateConnections(){}configurePlaceholders(){}getTypeaheadVarsFn(h){return{name:h}}getTypeaheadResultsFn(h){return h.data.phenotypeTypeahead}getTagQueryVarsFn(h){return{id:h}}getTagQueryResultsFn(h){return h.data.phenotype}getSelectedItemOptionFn(h){return{value:h.id,label:h.name}}getSelectOptionsFn(h,c){return h.map((C,le)=>({label:c.get(le)||C.name,value:C.id}))}}Zr.\u0275fac=function(h){return new(h||Zr)(e.Y36(bn.zOE),e.Y36(bn.z_7),e.Y36(e.sBO))},Zr.\u0275cmp=e.Xpm({type:Zr,selectors:[["cvc-phenotype-select"]],viewQuery:function(h,c){if(1&h&&e.Gf(Wr,5,e.Rgc),2&h){let C;e.iGM(C=e.CRH())&&(c.optionTemplates=C)}},features:[e.qOj],decls:9,vars:22,consts:[[3,"cvcSelectMode","cvcCustomTemplate","cvcFormControl","cvcFormlyAttributes","cvcEntityName","cvcPlaceholder","cvcResults","cvcOptions","cvcShowError","cvcDisabled","cvcLoading","cvcOnSearch","cvcOnOpenChange","cvcOnModelChange"],[4,"ngrxLet"],["selectedTemplate",""],[4,"ngFor","ngForOf"],["optionTemplates",""],[3,"cvcDisableLink","cvcCacheId","cvcEmphasize"],["nz-typography","","nzType","secondary"],[4,"ngIf"],["nz-typography","","nzType","secondary",3,"innerHtml"],[1,"ant-select-selection-item-content"],[3,"cvcCacheId","cvcContext","cvcMode","cvcOnClose"]],template:function(h,c){if(1&h&&(e.TgZ(0,"cvc-entity-select",0),e.NdJ("cvcOnSearch",function(le){return c.onSearch$.next(le)})("cvcOnOpenChange",function(le){return c.onOpenChange$.next(le)})("cvcOnModelChange",function(le){return c.props.change&&c.props.change(c.field,le)}),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.ALo(3,"ngrxPush"),e.ALo(4,"ngrxPush"),e.ALo(5,"ngrxPush"),e.qZA(),e.YNc(6,X1,3,3,"ng-container",1),e.YNc(7,Ea,2,3,"ng-template",null,2,e.W1O)),2&h){const C=e.MAs(8);e.Q6J("cvcSelectMode",c.props.isMultiSelect?"multiple":"default")("cvcCustomTemplate",C)("cvcFormControl",c.formControl)("cvcFormlyAttributes",c.field)("cvcEntityName",c.props.entityName)("cvcPlaceholder",e.lcZ(1,12,c.placeholder$))("cvcResults",e.lcZ(2,14,c.result$))("cvcOptions",e.lcZ(3,16,c.selectOption$))("cvcShowError",c.showError)("cvcDisabled",c.onRequiresPhenotype$&&!e.lcZ(4,18,c.onRequiresPhenotype$))("cvcLoading",e.lcZ(5,20,c.isLoading$)),e.xp6(6),e.Q6J("ngrxLet",c.onSearch$)}},dependencies:[S.sg,S.O5,P.eJ,de.ZU,je,Tt.J,P.fM,U.A],changeDetection:0});const el={types:[{name:"phenotype-select",wrappers:["form-field"],component:Zr,defaultOptions:{props:{label:"Phenotype"}}},{name:"phenotype-multi-select",wrappers:["form-field"],component:Zr,defaultOptions:{props:{isMultiSelect:!0,label:"Phenotypes"}}}]};class Sr{}Sr.\u0275fac=function(h){return new(h||Sr)},Sr.\u0275mod=e.oAB({type:Sr}),Sr.\u0275inj=e.cJS({imports:[S.ez,t.UX,P._N,P.pP,m.X0.forChild(el),nn.L,Sn.sL,Qe.LV,Rn.$6,li.Qp,yt.PV,Ae.o7,w.Jb,Lt.cg,Zt.zf,s.U5,be.ic,de.ZJ,Yt.X,lt,En,xt.s,rt.x]});var uc=a(9521),dc=a(4968),tl=a(2722),Es=a(2536),Il=a(3303),ps=a(3187),s1=a(445);const nl=["nz-rate-item",""];function il(g,h){}function Ss(g,h){}function Du(g,h){1&g&&e._UZ(0,"span",4)}const hc=function(g){return{$implicit:g}},a1=["ulElement"];function Al(g,h){if(1&g){const c=e.EpF();e.TgZ(0,"li",3)(1,"div",4),e.NdJ("itemHover",function(le){const Ft=e.CHM(c).index,Mn=e.oxw();return e.KtG(Mn.onItemHover(Ft,le))})("itemClick",function(le){const Ft=e.CHM(c).index,Mn=e.oxw();return e.KtG(Mn.onItemClick(Ft,le))}),e.qZA()()}if(2&g){const c=h.index,C=e.oxw();e.Q6J("ngClass",C.starStyleArray[c]||"")("nzTooltipTitle",C.nzTooltips[c]),e.xp6(1),e.Q6J("allowHalf",C.nzAllowHalf)("character",C.nzCharacter)("index",c)}}let vh=(()=>{class g{constructor(){this.index=0,this.allowHalf=!1,this.itemHover=new e.vpe,this.itemClick=new e.vpe}hoverRate(c){this.itemHover.next(c&&this.allowHalf)}clickRate(c){this.itemClick.next(c&&this.allowHalf)}}return g.\u0275fac=function(c){return new(c||g)},g.\u0275cmp=e.Xpm({type:g,selectors:[["","nz-rate-item",""]],inputs:{character:"character",index:"index",allowHalf:"allowHalf"},outputs:{itemHover:"itemHover",itemClick:"itemClick"},exportAs:["nzRateItem"],attrs:nl,decls:6,vars:8,consts:[[1,"ant-rate-star-second",3,"mouseover","click"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"ant-rate-star-first",3,"mouseover","click"],["defaultCharacter",""],["nz-icon","","nzType","star","nzTheme","fill"]],template:function(c,C){if(1&c&&(e.TgZ(0,"div",0),e.NdJ("mouseover",function(pt){return C.hoverRate(!1),pt.stopPropagation()})("click",function(){return C.clickRate(!1)}),e.YNc(1,il,0,0,"ng-template",1),e.qZA(),e.TgZ(2,"div",2),e.NdJ("mouseover",function(pt){return C.hoverRate(!0),pt.stopPropagation()})("click",function(){return C.clickRate(!0)}),e.YNc(3,Ss,0,0,"ng-template",1),e.qZA(),e.YNc(4,Du,1,0,"ng-template",null,3,e.W1O)),2&c){const le=e.MAs(5);e.xp6(1),e.Q6J("ngTemplateOutlet",C.character||le)("ngTemplateOutletContext",e.VKq(4,hc,C.index)),e.xp6(2),e.Q6J("ngTemplateOutlet",C.character||le)("ngTemplateOutletContext",e.VKq(6,hc,C.index))}},dependencies:[S.tP,yt.Ls],encapsulation:2,changeDetection:0}),(0,Te.gn)([(0,ps.yF)()],g.prototype,"allowHalf",void 0),g})(),Fl=(()=>{class g{constructor(c,C,le,pt,Ft,Mn){this.nzConfigService=c,this.ngZone=C,this.renderer=le,this.cdr=pt,this.directionality=Ft,this.destroy$=Mn,this._nzModuleName="rate",this.nzAllowClear=!0,this.nzAllowHalf=!1,this.nzDisabled=!1,this.nzAutoFocus=!1,this.nzCount=5,this.nzTooltips=[],this.nzOnBlur=new e.vpe,this.nzOnFocus=new e.vpe,this.nzOnHoverChange=new e.vpe,this.nzOnKeyDown=new e.vpe,this.classMap={},this.starArray=[],this.starStyleArray=[],this.dir="ltr",this.hasHalf=!1,this.hoverValue=0,this.isFocused=!1,this._value=0,this.isNzDisableFirstChange=!0,this.onChange=()=>null,this.onTouched=()=>null}get nzValue(){return this._value}set nzValue(c){this._value!==c&&(this._value=c,this.hasHalf=!Number.isInteger(c),this.hoverValue=Math.ceil(c))}ngOnChanges(c){const{nzAutoFocus:C,nzCount:le,nzValue:pt}=c;if(C&&!C.isFirstChange()){const Ft=this.ulElement.nativeElement;this.nzAutoFocus&&!this.nzDisabled?this.renderer.setAttribute(Ft,"autofocus","autofocus"):this.renderer.removeAttribute(Ft,"autofocus")}le&&this.updateStarArray(),pt&&this.updateStarStyle()}ngOnInit(){this.nzConfigService.getConfigChangeEventForComponent("rate").pipe((0,tl.R)(this.destroy$)).subscribe(()=>this.cdr.markForCheck()),this.directionality.change.pipe((0,tl.R)(this.destroy$)).subscribe(c=>{this.dir=c,this.cdr.detectChanges()}),this.dir=this.directionality.value,this.ngZone.runOutsideAngular(()=>{(0,dc.R)(this.ulElement.nativeElement,"focus").pipe((0,tl.R)(this.destroy$)).subscribe(c=>{this.isFocused=!0,this.nzOnFocus.observers.length&&this.ngZone.run(()=>this.nzOnFocus.emit(c))}),(0,dc.R)(this.ulElement.nativeElement,"blur").pipe((0,tl.R)(this.destroy$)).subscribe(c=>{this.isFocused=!1,this.nzOnBlur.observers.length&&this.ngZone.run(()=>this.nzOnBlur.emit(c))})})}onItemClick(c,C){if(this.nzDisabled)return;this.hoverValue=c+1;const le=C?c+.5:c+1;this.nzValue===le?this.nzAllowClear&&(this.nzValue=0,this.onChange(this.nzValue)):(this.nzValue=le,this.onChange(this.nzValue)),this.updateStarStyle()}onItemHover(c,C){this.nzDisabled||this.hoverValue===c+1&&C===this.hasHalf||(this.hoverValue=c+1,this.hasHalf=C,this.nzOnHoverChange.emit(this.hoverValue),this.updateStarStyle())}onRateLeave(){this.hasHalf=!Number.isInteger(this.nzValue),this.hoverValue=Math.ceil(this.nzValue),this.updateStarStyle()}focus(){this.ulElement.nativeElement.focus()}blur(){this.ulElement.nativeElement.blur()}onKeyDown(c){const C=this.nzValue;c.keyCode===uc.SV&&this.nzValue<this.nzCount?this.nzValue+=this.nzAllowHalf?.5:1:c.keyCode===uc.oh&&this.nzValue>0&&(this.nzValue-=this.nzAllowHalf?.5:1),C!==this.nzValue&&(this.onChange(this.nzValue),this.nzOnKeyDown.emit(c),this.updateStarStyle(),this.cdr.markForCheck())}updateStarArray(){this.starArray=Array(this.nzCount).fill(0).map((c,C)=>C),this.updateStarStyle()}updateStarStyle(){this.starStyleArray=this.starArray.map(c=>{const C="ant-rate-star",le=c+1;return{[`${C}-full`]:le<this.hoverValue||!this.hasHalf&&le===this.hoverValue,[`${C}-half`]:this.hasHalf&&le===this.hoverValue,[`${C}-active`]:this.hasHalf&&le===this.hoverValue,[`${C}-zero`]:le>this.hoverValue,[`${C}-focused`]:this.hasHalf&&le===this.hoverValue&&this.isFocused}})}writeValue(c){this.nzValue=c||0,this.updateStarArray(),this.cdr.markForCheck()}setDisabledState(c){this.nzDisabled=this.isNzDisableFirstChange&&this.nzDisabled||c,this.isNzDisableFirstChange=!1,this.cdr.markForCheck()}registerOnChange(c){this.onChange=c}registerOnTouched(c){this.onTouched=c}}return g.\u0275fac=function(c){return new(c||g)(e.Y36(Es.jY),e.Y36(e.R0b),e.Y36(e.Qsj),e.Y36(e.sBO),e.Y36(s1.Is,8),e.Y36(Il.kn))},g.\u0275cmp=e.Xpm({type:g,selectors:[["nz-rate"]],viewQuery:function(c,C){if(1&c&&e.Gf(a1,7),2&c){let le;e.iGM(le=e.CRH())&&(C.ulElement=le.first)}},inputs:{nzAllowClear:"nzAllowClear",nzAllowHalf:"nzAllowHalf",nzDisabled:"nzDisabled",nzAutoFocus:"nzAutoFocus",nzCharacter:"nzCharacter",nzCount:"nzCount",nzTooltips:"nzTooltips"},outputs:{nzOnBlur:"nzOnBlur",nzOnFocus:"nzOnFocus",nzOnHoverChange:"nzOnHoverChange",nzOnKeyDown:"nzOnKeyDown"},exportAs:["nzRate"],features:[e._Bn([Il.kn,{provide:t.JU,useExisting:(0,e.Gpc)(()=>g),multi:!0}]),e.TTD],decls:3,vars:7,consts:[[1,"ant-rate",3,"ngClass","tabindex","keydown","mouseleave"],["ulElement",""],["class","ant-rate-star","nz-tooltip","",3,"ngClass","nzTooltipTitle",4,"ngFor","ngForOf"],["nz-tooltip","",1,"ant-rate-star",3,"ngClass","nzTooltipTitle"],["nz-rate-item","",3,"allowHalf","character","index","itemHover","itemClick"]],template:function(c,C){1&c&&(e.TgZ(0,"ul",0,1),e.NdJ("keydown",function(pt){return C.onKeyDown(pt),pt.preventDefault()})("mouseleave",function(pt){return C.onRateLeave(),pt.stopPropagation()}),e.YNc(2,Al,2,5,"li",2),e.qZA()),2&c&&(e.ekj("ant-rate-disabled",C.nzDisabled)("ant-rate-rtl","rtl"===C.dir),e.Q6J("ngClass",C.classMap)("tabindex",C.nzDisabled?-1:1),e.xp6(2),e.Q6J("ngForOf",C.starArray))},dependencies:[S.mk,S.sg,Lt.SY,vh],encapsulation:2,changeDetection:0}),(0,Te.gn)([(0,Es.oS)(),(0,ps.yF)()],g.prototype,"nzAllowClear",void 0),(0,Te.gn)([(0,Es.oS)(),(0,ps.yF)()],g.prototype,"nzAllowHalf",void 0),(0,Te.gn)([(0,ps.yF)()],g.prototype,"nzDisabled",void 0),(0,Te.gn)([(0,ps.yF)()],g.prototype,"nzAutoFocus",void 0),(0,Te.gn)([(0,ps.Rn)()],g.prototype,"nzCount",void 0),g})(),Nl=(()=>{class g{}return g.\u0275fac=function(c){return new(c||g)},g.\u0275mod=e.oAB({type:g}),g.\u0275inj=e.cJS({imports:[s1.vT,S.ez,yt.PV,Lt.cg]}),g})();const na={1:"Poor - Claim is not supported well by experimental evidence. Results are not reproducible, or have very small sample size. No follow-up is done to validate novel claims.",2:"Adequate - Evidence is not well supported by experimental data, and little follow-up data is available. Experiments may lack proper controls, have small sample size, or are not statistically convincing.",3:"Average - Evidence is convincing, but not supported by a breadth of experiments. May be smaller scale projects, or novel results without many follow-up experiments. Discrepancies from expected results are explained and not concerning.",4:"Strong - Well supported evidence. Experiments are well controlled, and results are convincing. Any discrepancies from expected results are well-explained and not concerning.",5:"Excellent - Solid, well supported evidence from a lab or journal with respected academic standing. Experiments are well controlled, and results are clean and reproducible across multiple replicates. Evidence confirmed using separate methods."},rl=_t($t(),ht());class Sa extends rl{constructor(){super(),this.defaultOptions={props:{label:"Evidence Rating",count:5,tooltip:"A representation of the curator's confidence in the quality of the summarized evidence",hoverText:[]}},this.rating$=new ot.X(void 0)}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.formControl.value&&this.rating$.next(this.formControl.value),Object.entries(na).map(([h,c])=>{this.props.hoverText.push(c)}),this.rating$.pipe((0,Pe.t)(this)).subscribe(h=>{this.formControl.setValue(h)}),this.onValueChange$.pipe((0,Pe.t)(this)).subscribe(h=>{this.props.description=h?na[h]:void 0})}configureStateConnections(){}}Sa.\u0275fac=function(h){return new(h||Sa)},Sa.\u0275cmp=e.Xpm({type:Sa,selectors:[["cvc-rating"]],features:[e.qOj],decls:2,vars:5,consts:[["type","hidden",3,"formControl","formlyAttributes"],[3,"ngModel","nzCount","nzTooltips","ngModelChange"]],template:function(h,c){1&h&&(e._UZ(0,"input",0),e.TgZ(1,"nz-rate",1),e.NdJ("ngModelChange",function(le){return c.rating$.next(le)}),e.qZA()),2&h&&(e.Q6J("formControl",c.formControl)("formlyAttributes",c.field),e.xp6(1),e.Q6J("ngModel",c.formControl.value)("nzCount",c.props.count)("nzTooltips",c.props.hoverText))},dependencies:[t.Fj,t.JJ,t.oH,t.On,m.JD,Fl],styles:["[_nghost-%COMP%]     nz-rate .anticon{font-size:160%}"],changeDetection:0});const xa={types:[{name:"rating",wrappers:["form-field"],component:Sa}]};class sl{}sl.\u0275fac=function(h){return new(h||sl)},sl.\u0275mod=e.oAB({type:sl}),sl.\u0275inj=e.cJS({imports:[S.ez,t.UX,P._N,P.pP,t.u5,m.X0.forChild(xa),Nl,xt.s,lt,ie]});const Da=["optionTemplates"];function ed(g,h){if(1&g&&e._UZ(0,"cvc-attribute-tag",4),2&g){const c=e.oxw().$implicit;e.Q6J("cvcAttrValue",c)}}function al(g,h){1&g&&(e.ynx(0),e.YNc(1,ed,1,1,"ng-template",null,3,e.W1O),e.BQk())}function c1(g,h){if(1&g){const c=e.EpF();e.TgZ(0,"div",5)(1,"cvc-attribute-tag",6),e.NdJ("cvcOnClose",function(le){e.CHM(c);const pt=e.oxw();return e.KtG(pt.onTagClose$.next(le))}),e.qZA()()}if(2&g){const c=h.$implicit,C=e.oxw();e.xp6(1),e.Q6J("cvcAttrValue",c.nzValue)("cvcContext",C.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",C.props.isMultiSelect?"default":"closeable")}}const Oa={Evidence:{PREDICTIVE:{SENSITIVITYRESPONSE:"Associated with a clinical or preclinical response to treatment",RESISTANCE:"Associated with clinical or preclinical resistance to treatment",ADVERSE_RESPONSE:"Associated with an adverse response to drug treatment",REDUCED_SENSITIVITY:"Response to treatment is lower than seen in other treatment contexts",NA:"Clinical Significance is not applicable."},DIAGNOSTIC:{POSITIVE:"Associated with diagnosis of disease or subtype",NEGATIVE:"Associated with lack of disease or subtype"},PROGNOSTIC:{BETTER_OUTCOME:"Demonstrates better than expected clinical outcome",POOR_OUTCOME:"Demonstrates worse than expected clinical outcome",NA:"Clinical Significance is not applicable."},PREDISPOSING:{PREDISPOSITION:"Germline variant has predisposing potential for cancer, and may meet select ACMG/AMP criteria supporting pathogenic or benign classification.",PROTECTIVENESS:"Germline variant has properties that protect individuals from acquiring cancer."},FUNCTIONAL:{GAIN_OF_FUNCTION:"Sequence variant confers an increase in normal gene function",LOSS_OF_FUNCTION:"Sequence variant confers a diminished or abolished function",UNALTERED_FUNCTION:"Gene product of sequence variant is unchanged",NEOMORPHIC:"Sequence variant creates a novel function",DOMINANT_NEGATIVE:"Sequence variant abrogates function of wildtype allele gene product",UNKNOWN:"Sequence variant that cannot be precisely defined by the other listed categories"},ONCOGENIC:{ONCOGENICITY:"Somatic variant has oncogenic potential for driving cancer, and may meet select ClinGen/CGC/VICC criteria supporting pathogenic or benign classification.",PROTECTIVENESS:"Somatic variant has a protective role against cancer."}},Assertion:{PREDICTIVE:{SENSITIVITYRESPONSE:"Associated with a clinical or preclinical response to treatment",RESISTANCE:"Associated with clinical or preclinical resistance to treatment",ADVERSE_RESPONSE:"Associated with an adverse response to drug treatment",REDUCED_SENSITIVITY:"Response to treatment is lower than seen in other treatment contexts",NA:"Clinical Significance is not applicable."},DIAGNOSTIC:{POSITIVE:"Associated with diagnosis of disease or subtype",NEGATIVE:"Associated with lack of disease or subtype"},PROGNOSTIC:{BETTER_OUTCOME:"Demonstrates better than expected clinical outcome",POOR_OUTCOME:"Demonstrates worse than expected clinical outcome",NA:"Clinical Significance is not applicable."},PREDISPOSING:{PATHOGENIC:"Very strong evidence the variant is pathogenic",LIKELY_PATHOGENIC:"Strong evidence (>90% certainty) the variant is pathogenic.",BENIGN:"Very strong evidence the variant is benign",LIKELY_BENIGN:"Not expected to have a major effect on disease",UNCERTAIN_SIGNIFICANCE:"Does not meet the ACMG/AMP criteria for pathogenic/benign, or the evidence is conflicting"},ONCOGENIC:{ONCOGENIC:"Very strong evidence the variant is oncogenic.",LIKELY_ONCOGENIC:"Strong evidence the variant is oncogenic.",BENIGN:"Very strong evidence the variant does not have oncogenic properties.",LIKELY_BENIGN:"Strong evidence the variant does not have oncogenic properties.",UNCERTAIN_SIGNIFICANCE:"Does not meet guideline criteria for oncogenic/benign, or the evidence is conflicting."}}},td=_t($t(),ht());class Rs extends td{constructor(h){super(),this.cdr=h,this.defaultOptions={props:{label:"Significance",required:!0,isMultiSelect:!1,placeholder:"Select Significance",placeholderFn:c=>`Select ${c?c+" ":""} Significance`,requireTypePromptFn:c=>`Select ${c} Type to select its Significance`,tooltip:"Clinical impact of the variant"}},this.significanceEnum$=new ot.X([])}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEnumSelectField({optionEnum$:this.significanceEnum$,optionTemplate$:this.optionTemplate$,changeDetectorRef:this.cdr})}configureStateConnections(){if(!this.state)return console.error(`${this.field.id} requires a form state to populate its options, none was found.`),void(this.placeholder$=new ot.X("ERROR: Form state not found"));if(this.placeholder$=new ot.X(this.props.placeholderFn(this.state.entityName)),!this.state.enums.significance$)return void console.error(`${this.field.id} could not find form state's enums.significance$ to populate select.`);this.state.enums.significance$.pipe((0,Pe.t)(this)).subscribe(c=>{this.significanceEnum$.next(c)}),this.optionTemplates||console.warn(`${this.field.id} could not find its optionTemplates QueryList to populate its select options, so simple text labels will be displayed.`),this.optionTemplate$=this.optionTemplates?.changes.pipe((0,Ct.U)(c=>c.map(C=>C)));const h=`${this.state.entityName.toLowerCase()}Type$`;this.state.fields[h]?(this.onTypeSelect$=this.state.fields[h],this.onTypeSelect$.pipe((0,Pe.t)(this)).subscribe(c=>{c?(this.props.disabled=!1,this.props.description=void 0,this.props.extraType=void 0,this.placeholder$.next(this.props.placeholderFn(this.state.entityName))):(this.props.disabled=!0,this.props.description=this.props.requireTypePromptFn(this.state.entityName),this.props.extraType="prompt"),this.formControl.value&&this.formControl.setValue(void 0)}),this.onValueChange$.pipe((0,nt.M)(this.onTypeSelect$),(0,Pe.t)(this)).subscribe(([c,C])=>{!C||!c||!this.state||(this.props.description=void 0,this.props.extraType="description",this.props.description=Oa[this.state.entityName][C][c])})):console.error(`${this.field.id} could not find form state's ${h} to populate Significance options.`)}}Rs.\u0275fac=function(h){return new(h||Rs)(e.Y36(e.sBO))},Rs.\u0275cmp=e.Xpm({type:Rs,selectors:[["cvc-significance-select"]],viewQuery:function(h,c){if(1&h&&e.Gf(Da,5,e.Rgc),2&h){let C;e.iGM(C=e.CRH())&&(c.optionTemplates=C)}},features:[e.qOj],decls:7,vars:15,consts:[[3,"cvcFormControl","cvcFormlyAttributes","cvcSelectMode","cvcPlaceholder","cvcCustomTemplate","cvcOptions","cvcShowError","cvcDisabled"],[4,"ngFor","ngForOf"],["selectedTemplate",""],["optionTemplates",""],[3,"cvcAttrValue"],[1,"ant-select-selection-item-content"],[3,"cvcAttrValue","cvcContext","cvcMode","cvcOnClose"]],template:function(h,c){if(1&h&&(e._UZ(0,"cvc-enum-select",0),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.YNc(3,al,3,0,"ng-container",1),e.ALo(4,"ngrxPush"),e.YNc(5,c1,2,3,"ng-template",null,2,e.W1O)),2&h){const C=e.MAs(6);e.Q6J("cvcFormControl",c.formControl)("cvcFormlyAttributes",c.field)("cvcSelectMode",c.props.isMultiSelect?"multiple":"default")("cvcPlaceholder",e.lcZ(1,9,c.placeholder$))("cvcCustomTemplate",C)("cvcOptions",e.lcZ(2,11,c.selectOption$))("cvcShowError",c.showError)("cvcDisabled",c.props.disabled),e.xp6(3),e.Q6J("ngForOf",e.lcZ(4,13,c.significanceEnum$))}},dependencies:[S.sg,Dt,Ue,P.fM]});const nu={types:[{name:"significance-select",wrappers:["form-field"],component:Rs}]};class xs{}xs.\u0275fac=function(h){return new(h||xs)},xs.\u0275mod=e.oAB({type:xs}),xs.\u0275inj=e.cJS({imports:[S.ez,t.UX,P._N,P.pP,m.X0.forChild(nu),lt,ie,Ye]});var pc,nd=a(2577),cl=a(8521),Ll=a(6530),ll=a(8675);function fc(g,h){1&g&&e._UZ(0,"span",9),2&g&&e.Q6J("nzType","loading")}function iu(g,h){if(1&g&&(e.ynx(0),e.YNc(1,fc,1,1,"span",8),e._uU(2,"\xa0 "),e.TgZ(3,"span"),e._uU(4),e.qZA(),e.BQk()),2&g){const c=h.ngrxLet;e.xp6(1),e.Q6J("ngIf",c.showSpinner),e.xp6(3),e.Oqu(c.message)}}function wa(g,h){if(1&g&&e._uU(0),2&g){const c=e.oxw();e.Oqu(c.successMessage)}}function l1(g,h){1&g&&(e.TgZ(0,"button",10),e._uU(1," Add Source "),e.qZA()),2&g&&e.Q6J("disabled",null===h.ngrxLet.citation)}const Pa=function(){return[0,0]};let Kr=((pc=class{constructor(h,c,C,le,pt){this.checkCitation=h,this.addRemoteCitation=c,this.errors=C,this.apollo=le,this.cdr=pt,this.cvcOnCreate=new e.vpe,this.messageOptions={empty:(Ft,Mn)=>`No ${Mn} Source with a citation ID of "${Ft}"`,searchCitation:(Ft,Mn)=>`Searching ${Mn} for a citation ID of "${Ft}"`,foundCitation:(Ft,Mn,Vn)=>`Found ${Mn} citation "${Vn}" with ID ${Ft}`,noCitation:(Ft,Mn)=>`No ${Mn} Source with a citation ID of "${Ft}" was found`},this.form=new t.nJ({}),this.model={citationId:"",sourceType:bn.yic.Pubmed},this.formLayout="horizontal",this.options={formState:{formLayout:this.formLayout}},this.onSubmit$=new Ke.x,this.citationId$=new ot.X(""),this.sourceType$=new ot.X(bn.yic.Pubmed),this.addSourceStubMutator=new Nt.U(this.errors),this.fields=[{key:"citationId",props:{hidden:!0}},{key:"sourceType",props:{hidden:!0}}],this.onSubmit$.pipe((0,Pe.t)(this)).subscribe(Ft=>{console.log("disease-quick-add form model submitted.",Ft),this.submitSourceStub()})}ngOnInit(){void 0!==this.model.citationId&&void 0!==this.model.sourceType?(this.queryRef=this.checkCitation.watch({citationId:this.model.citationId,sourceType:this.model.sourceType}),this.checkResult$=this.queryRef.valueChanges.pipe((0,Ct.U)(h=>({loading:h.loading,citation:h.data?h.data.remoteCitation:null,model:this.model})),(0,kn.b)(h=>{this.citationString=h.citation?h.citation:void 0})),this.citationId$.pipe((0,Pe.t)(this)).subscribe(h=>{this.model.sourceType&&this.queryRef.refetch({citationId:h,sourceType:this.model.sourceType})}),this.formMessageDisplay$=this.checkResult$.pipe((0,Ct.U)(h=>{const c=h.loading,C=h.citation,le=h.model;return c?{message:this.messageOptions.searchCitation(le.citationId,le.sourceType),showSpinner:!0}:c||null===C?c||null!==C?{message:"UNHANDLED MESSAGE STATE",showSpinner:!1}:{message:this.messageOptions.noCitation(le.citationId,le.sourceType),showSpinner:!1}:{message:this.messageOptions.foundCitation(le.citationId,(0,Ll.c)(le.sourceType),C),showSpinner:!1}}),(0,ll.O)({message:this.messageOptions.searchCitation(this.model.citationId,this.model.sourceType),showSpinner:!0}))):console.error("source-quick-add provided invalid initial model")}submitSourceStub(){void 0!==this.model.citationId&&void 0!==this.model.sourceType&&(this.mutationState=this.addSourceStubMutator.mutate(this.addRemoteCitation,{input:{citationId:this.model.citationId,sourceType:this.model.sourceType}},{},h=>{if(console.log("source-quick-add submit data callback",h),h.addRemoteCitation){this.successMessage=`New Source "${this.citationString}" added.`;const c=h.addRemoteCitation.newSource,C=(0,Ll.c)(this.model.sourceType),le=this.citationString?this.citationString:"NO CITATION",pt={query:co.Ps`
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
              `,data:{source:{__typename:"Source",id:c.id,name:`${C}: ${le}`,link:`sources/${c.id}`,citation:le,citationId:this.model.citationId,sourceType:this.model.sourceType}},variables:{id:c.id}};this.apollo.client.cache.writeQuery(pt)||console.error("source-quick-add.form Source writeQuery failed.",pt),setTimeout(()=>{const Mn={id:`Source:${c.id}`,fragment:co.Ps`
                  fragment LinkableSource on Source {
                    id
                    name
                    link
                  }
                `},Vn=this.apollo.client.cache.readFragment(Mn);null!==Vn&&this.cvcOnCreate.next(Vn.id)},1e3)}}))}ngOnChanges(h){if(h.cvcSourceType){const c=h.cvcSourceType.currentValue;this.sourceType$.next(c),this.model={...this.model,sourceType:c}}if(h.cvcCitationId){const c=h.cvcCitationId.currentValue;this.citationId$.next(c),this.model={...this.model,citationId:c}}}}).\u0275fac=function(h){return new(h||pc)(e.Y36(bn.qgP),e.Y36(bn.LHC),e.Y36(jt.Y),e.Y36(co._M),e.Y36(e.sBO))},pc.\u0275cmp=e.Xpm({type:pc,selectors:[["cvc-source-quick-add"]],inputs:{cvcSourceType:"cvcSourceType",cvcCitationId:"cvcCitationId"},outputs:{cvcOnCreate:"cvcOnCreate"},features:[e.TTD],decls:10,vars:11,consts:[[4,"ngrxLet"],["entityType","Source",3,"mutationState","successMessage"],["success",""],["nz-form","","nzLayout","horizontal",3,"formGroup","ngSubmit"],[3,"nzGutter"],["nzSpan","24"],[3,"form","fields","model","options","modelChange"],["nz-button","","nzType","primary","nzBlock","",3,"disabled",4,"ngrxLet"],["nz-icon","",3,"nzType",4,"ngIf"],["nz-icon","",3,"nzType"],["nz-button","","nzType","primary","nzBlock","",3,"disabled"]],template:function(h,c){if(1&h&&(e.YNc(0,iu,5,2,"ng-container",0),e.TgZ(1,"cvc-form-submission-status-display",1),e.YNc(2,wa,1,1,"ng-template",null,2,e.W1O),e.TgZ(4,"form",3),e.NdJ("ngSubmit",function(){return c.onSubmit$.next(c.model)}),e.TgZ(5,"nz-row",4)(6,"nz-col",5)(7,"formly-form",6),e.NdJ("modelChange",function(le){return c.model=le}),e.qZA()(),e.TgZ(8,"nz-col",5),e.YNc(9,l1,2,1,"button",7),e.qZA()()()()),2&h){const C=e.MAs(3);e.Q6J("ngrxLet",c.formMessageDisplay$),e.xp6(1),e.Q6J("mutationState",c.mutationState)("successMessage",C),e.xp6(3),e.Q6J("formGroup",c.form),e.xp6(1),e.Q6J("nzGutter",e.DdM(10,Pa)),e.xp6(2),e.Q6J("form",c.form)("fields",c.fields)("model",c.model)("options",c.options),e.xp6(2),e.Q6J("ngrxLet",c.checkResult$)}},dependencies:[S.O5,t._Y,t.JL,t.sg,P.eJ,m.T7,Sn.ix,hn.w,ln.dQ,yt.Ls,w.t3,w.SK,s.Lr,gn.F],changeDetection:0}),pc);Kr=(0,Te.gn)([(0,Pe.c)()],Kr);const mc=["optionTemplates"];function u1(g,h){if(1&g){const c=e.EpF();e.TgZ(0,"nz-col",9)(1,"nz-select",10),e.NdJ("ngModelChange",function(le){e.CHM(c);const pt=e.oxw();return e.KtG(pt.sourceType$.next(le))}),e.ALo(2,"ngrxPush"),e._UZ(3,"nz-option",11)(4,"nz-option",12)(5,"nz-option",13),e.qZA()()}if(2&g){const c=e.oxw();e.xp6(1),e.Q6J("nzOptionHeightPx",28)("ngModel",e.lcZ(2,2,c.sourceType$))}}function gc(g,h){1&g&&(e.TgZ(0,"div"),e._uU(1,"PMID:"),e.qZA())}function Ou(g,h){1&g&&(e.TgZ(0,"div"),e._uU(1,"ID:"),e.qZA())}function Vs(g,h){1&g&&(e.TgZ(0,"div"),e._uU(1,"doi.org/"),e.qZA())}function d1(g,h){if(1&g&&(e.TgZ(0,"nz-col",14),e.ynx(1,15),e.ALo(2,"ngrxPush"),e.YNc(3,gc,2,0,"div",16),e.YNc(4,Ou,2,0,"div",16),e.YNc(5,Vs,2,0,"div",16),e.BQk(),e.qZA()),2&g){const c=e.oxw();e.xp6(1),e.Q6J("ngSwitch",e.lcZ(2,4,c.sourceType$)),e.xp6(2),e.Q6J("ngSwitchCase","PUBMED"),e.xp6(1),e.Q6J("ngSwitchCase","ASCO"),e.xp6(1),e.Q6J("ngSwitchCase","ASH")}}function vc(g,h){if(1&g&&(e._UZ(0,"cvc-entity-tag",19),e.TgZ(1,"span",20),e._uU(2," ID: "),e._UZ(3,"span",21),e.ALo(4,"highlightTypeahead"),e.qZA()),2&g){const c=e.oxw().$implicit,C=e.oxw().ngrxLet;e.Q6J("cvcDisableLink",!0)("cvcCacheId",c.__typename+":"+c.id)("cvcEmphasize",C),e.xp6(3),e.Q6J("innerHtml",e.xi3(4,4,c.citationId.toString(),C),e.oJD)}}function h1(g,h){1&g&&(e.ynx(0),e.YNc(1,vc,5,7,"ng-template",null,18,e.W1O),e.BQk())}function Ia(g,h){if(1&g&&(e.ynx(0),e.YNc(1,h1,3,0,"ng-container",17),e.ALo(2,"ngrxPush"),e.BQk()),2&g){const c=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,c.result$))}}function p1(g,h){if(1&g){const c=e.EpF();e.TgZ(0,"div",22)(1,"cvc-entity-tag",23),e.NdJ("cvcOnClose",function(){const pt=e.CHM(c).$implicit,Ft=e.oxw();return e.KtG(Ft.onTagClose$.next(pt.nzValue))}),e.qZA()()}if(2&g){const c=h.$implicit,C=e.oxw();e.xp6(1),e.Q6J("cvcCacheId","Source:"+c.nzValue)("cvcContext",C.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",C.props.isMultiSelect?"default":"closeable")}}function _c(g,h){if(1&g){const c=e.EpF();e.TgZ(0,"cvc-source-quick-add",24),e.NdJ("cvcOnCreate",function(le){e.CHM(c);const pt=e.oxw();return e.KtG(pt.onPopulate$.next(le))}),e.qZA()}if(2&g){const c=h.model;e.Q6J("cvcCitationId",c.citationId)("cvcSourceType",c.sourceType)}}function dr(g,h){1&g&&(e.TgZ(0,"button",25),e._uU(1,"Add a New Source"),e.qZA())}const ia=function(){return[6,6]},oa=_t($t(),vi());class So extends oa{constructor(h,c,C){super(),this.taq=h,this.tq=c,this.changeDetectorRef=C,this.onModel$=new ro.y,this.defaultSourceType=bn.yic.Pubmed,this.defaultOptions={props:{entityName:{singular:"Source",plural:"Sources"},isMultiSelect:!1,minSearchStrLength:2,tooltip:"PubMed, ASCO, or ASH Abstract Source(s) that support items, statements or descriptions.",placeholders:{default:"Search PubMed, ASCO, and ASH Sources",contextualFn:le=>`Search ${le} Sources`},extraType:"prompt"}},this.sourceType$=new ot.X(this.defaultSourceType),this.sourceTypeName$=new ot.X((0,Ll.c)(this.defaultSourceType)),this.placeholder$=new ot.X(this.defaultOptions.props.placeholders.contextualFn((0,Ll.c)(this.defaultSourceType))),this.showTypeSelect$=new ro.y}ngAfterViewInit(){this.configureBaseField(),this.configureEntitySelectField({typeaheadQuery:this.taq,typeaheadParam$:this.sourceType$,typeaheadParamName$:this.sourceTypeName$||void 0,tagQuery:this.tq,getTypeaheadVarsFn:this.getTypeaheadVarsFn,getTypeaheadResultsFn:this.getTypeaheadResultsFn,getTagQueryVarsFn:this.getTagQueryVarsFn,getTagQueryResultsFn:this.getTagQueryResultsFn,getSelectedItemOptionFn:this.getSelectedItemOptionFn,getSelectOptionsFn:this.getSelectOptionsFn,changeDetectorRef:this.changeDetectorRef,selectOpen$:this.selectOpen$,selectComponent:this.selectComponent,minSearchStrLength:this.field.props.minSearchStrLength}),this.showTypeSelect$=this.onValueChange$.pipe((0,Ct.U)(h=>!!(!h||h&&Array.isArray(h)))),this.sourceType$.pipe((0,Pe.t)(this)).subscribe(h=>{const c=(0,Ll.c)(h);this.sourceTypeName$.next(c),this.placeholder$.next(this.props.placeholders.contextualFn(c))}),this.onModel$=(0,ii.a)([this.sourceType$,this.onSearch$]).pipe((0,Ct.U)(([h,c])=>({citationId:c,sourceType:h})))}getTypeaheadVarsFn(h,c=bn.yic.Pubmed){return{partialCitationId:h,sourceType:c}}getTypeaheadResultsFn(h){return h.data.sourceTypeahead}getTagQueryVarsFn(h){return{id:h}}getTagQueryResultsFn(h){return h.data.source}getSelectedItemOptionFn(h){return{value:h.id,label:h.name}}getSelectOptionsFn(h,c){return h.map((C,le)=>({label:c.get(le)||C.name,value:C.id}))}}So.\u0275fac=function(h){return new(h||So)(e.Y36(bn.aC3),e.Y36(bn.BYO),e.Y36(e.sBO))},So.\u0275cmp=e.Xpm({type:So,selectors:[["cvc-source-select"]],viewQuery:function(h,c){if(1&h&&e.Gf(mc,5,e.Rgc),2&h){let C;e.iGM(C=e.CRH())&&(c.optionTemplates=C)}},features:[e.qOj],decls:21,vars:39,consts:[[3,"nzGutter"],["nzFlex","80px",4,"ngIf"],["nzFlex","60px","class","prefix",4,"ngIf"],["nzFlex","auto"],[3,"cvcMinSearchStrLength","cvcSelectMode","cvcCustomTemplate","cvcFormControl","cvcFormlyAttributes","cvcEntityName","cvcPlaceholder","cvcResults","cvcOptions","cvcParamName","cvcShowError","cvcDisabled","cvcLoading","cvcAddEntity","cvcAddEntityModel","cvcSelectOpen","cvcOnSearch","cvcOnModelChange"],[4,"ngrxLet"],["selectedTemplate",""],["addSource",""],["addSourceBtn",""],["nzFlex","80px"],["nzSize","default","nzBlock","",3,"nzOptionHeightPx","ngModel","ngModelChange"],["nzValue","PUBMED","nzLabel","PubMed"],["nzValue","ASCO","nzLabel","ASCO"],["nzValue","ASH","nzLabel","ASH"],["nzFlex","60px",1,"prefix"],[3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngFor","ngForOf"],["optionTemplates",""],[3,"cvcDisableLink","cvcCacheId","cvcEmphasize"],["nz-typography","","nzType","secondary"],["nz-typography","","nzType","secondary",3,"innerHtml"],[1,"ant-select-selection-item-content"],[3,"cvcCacheId","cvcContext","cvcMode","cvcOnClose"],[3,"cvcCitationId","cvcSourceType","cvcOnCreate"],["type","button"]],template:function(h,c){if(1&h&&(e.TgZ(0,"nz-row",0),e.YNc(1,u1,6,4,"nz-col",1),e.ALo(2,"ngrxPush"),e.YNc(3,d1,6,6,"nz-col",2),e.ALo(4,"ngrxPush"),e.TgZ(5,"nz-col",3)(6,"cvc-entity-select",4),e.NdJ("cvcOnSearch",function(le){return c.onSearch$.next(le)})("cvcOnModelChange",function(le){return c.props.change&&c.props.change(c.field,le)}),e.ALo(7,"ngrxPush"),e.ALo(8,"ngrxPush"),e.ALo(9,"ngrxPush"),e.ALo(10,"ngrxPush"),e.ALo(11,"ngrxPush"),e.ALo(12,"ngrxPush"),e.ALo(13,"ngrxPush"),e.qZA()()(),e.YNc(14,Ia,3,3,"ng-container",5),e.YNc(15,p1,2,3,"ng-template",null,6,e.W1O),e.YNc(17,_c,1,2,"ng-template",null,7,e.W1O),e.YNc(19,dr,2,0,"ng-template",null,8,e.W1O)),2&h){const C=e.MAs(16),le=e.MAs(18);e.Q6J("nzGutter",e.DdM(38,ia)),e.xp6(1),e.Q6J("ngIf",e.lcZ(2,20,c.showTypeSelect$)),e.xp6(2),e.Q6J("ngIf",e.lcZ(4,22,c.showTypeSelect$)),e.xp6(3),e.Q6J("cvcMinSearchStrLength",c.props.minSearchStrLength)("cvcSelectMode",c.props.isMultiSelect?"multiple":"default")("cvcCustomTemplate",C)("cvcFormControl",c.formControl)("cvcFormlyAttributes",c.field)("cvcEntityName",c.props.entityName)("cvcPlaceholder",e.lcZ(7,24,c.placeholder$))("cvcResults",e.lcZ(8,26,c.result$))("cvcOptions",e.lcZ(9,28,c.selectOption$))("cvcParamName",e.lcZ(10,30,c.sourceTypeName$))("cvcShowError",c.showError)("cvcDisabled",c.props.disabled)("cvcLoading",e.lcZ(11,32,c.isLoading$))("cvcAddEntity",le)("cvcAddEntityModel",e.lcZ(12,34,c.onModel$))("cvcSelectOpen",e.lcZ(13,36,c.selectOpen$)),e.xp6(8),e.Q6J("ngrxLet",c.onSearch$)}},dependencies:[S.sg,S.O5,S.RF,S.n9,t.JJ,t.On,P.eJ,Qe.Ip,Qe.Vq,w.t3,w.SK,de.ZU,je,Tt.J,Kr,P.fM,U.A],styles:[".prefix[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{text-align:right;line-height:28px;color:#999}"],changeDetection:0});const Ds={types:[{name:"source-select",wrappers:["form-field"],component:So,defaultOptions:{props:{label:"Source"}}},{name:"source-multi-select",wrappers:["form-field"],component:So,defaultOptions:{props:{label:"Sources",isMultiSelect:!0}}}]};class Aa{}function ra(g){class h extends g{configureStringTagField(){this.onValueChange$?(this.tagLabel$=new Ke.x,this.onValueChange$.pipe((0,Pe.t)(this)).subscribe(C=>{this.tagLabel$.next(C?C.toString():void 0)}),this.onTagClose$=new Ke.x,this.onTagClose$.pipe((0,Pe.t)(this)).subscribe(C=>{this.formControl.setValue(void 0),this.tagLabel$.next(void 0)})):console.error(`${this.field.id} cannot find onValueChange$ Subject, ensure configureBaseField() has been called before configureDisplayStringTag in its AfterViewInit hook.`)}}return h.\u0275fac=function(){let c;return function(le){return(c||(c=e.n5z(h)))(le||h)}}(),h.\u0275prov=e.Yz7({token:h,factory:h.\u0275fac}),h}function m1(g,h){}function Fa(g,h){if(1&g){const c=e.EpF();e.TgZ(0,"span",4)(1,"nz-tag",5),e.NdJ("nzOnClose",function(le){e.CHM(c);const pt=e.oxw();return e.KtG(pt.cvcOnClose.next(le))}),e.YNc(2,m1,0,0,"ng-template",6),e.qZA()()}if(2&g){const c=e.oxw(),C=e.MAs(4);e.xp6(1),e.Q6J("nzMode",c.cvcMode),e.xp6(1),e.Q6J("ngTemplateOutlet",C)}}function wu(g,h){}function Na(g,h){if(1&g){const c=e.EpF();e.TgZ(0,"span",7)(1,"nz-tag",5),e.NdJ("nzOnClose",function(le){e.CHM(c);const pt=e.oxw();return e.KtG(pt.cvcOnClose.next(le))}),e.YNc(2,wu,0,0,"ng-template",6),e.qZA()()}if(2&g){e.oxw();const c=e.MAs(4);e.xp6(1),e.Q6J("nzMode","closeable"),e.xp6(1),e.Q6J("ngTemplateOutlet",c)}}function id(g,h){}function La(g,h){if(1&g&&(e.TgZ(0,"span",8),e.YNc(1,id,0,0,"ng-template",6),e.qZA()),2&g){e.oxw();const c=e.MAs(4);e.xp6(1),e.Q6J("ngTemplateOutlet",c)}}function g1(g,h){1&g&&e._UZ(0,"i",11)}function yc(g,h){if(1&g&&(e.YNc(0,g1,1,0,"i",9),e._UZ(1,"span",10),e.ALo(2,"highlightTypeahead")),2&g){const c=e.oxw();e.Q6J("ngIf",!c.cvcLabel),e.xp6(1),e.Q6J("innerHtml",c.cvcLabel?e.xi3(2,2,c.cvcLabel,c.cvcEmphasize):"?STRING?",e.oJD)}}Aa.\u0275fac=function(h){return new(h||Aa)},Aa.\u0275mod=e.oAB({type:Aa}),Aa.\u0275inj=e.cJS({imports:[S.ez,t.u5,t.UX,P._N,P.pP,m.X0.forChild(Ds),nn.L,Sn.sL,cl.aF,Qe.LV,Rn.$6,li.Qp,yt.PV,Ae.o7,w.Jb,Lt.cg,Zt.zf,s.U5,be.ic,de.ZJ,nd.S,Yt.X,ei.g,lt,En,xt.s,rt.x]});class Bs{constructor(){this.cvcMode="default",this.cvcContext="default",this.cvcOnClose=new e.vpe}}function sa(g,h){if(1&g){const c=e.EpF();e.TgZ(0,"cvc-string-tag",3),e.NdJ("cvcOnClose",function(){const pt=e.CHM(c).$implicit,Ft=e.oxw();return e.KtG(Ft.tagClosed(pt))}),e.qZA()}if(2&g){const c=h.$implicit;e.Q6J("cvcMode","closeable")("cvcLabel",c)}}Bs.\u0275fac=function(h){return new(h||Bs)},Bs.\u0275cmp=e.Xpm({type:Bs,selectors:[["cvc-string-tag"]],inputs:{cvcLabel:"cvcLabel",cvcEmphasize:"cvcEmphasize",cvcMode:"cvcMode",cvcContext:"cvcContext"},outputs:{cvcOnClose:"cvcOnClose"},decls:5,vars:3,consts:[["class","default",4,"ngIf"],["class","select-item",4,"ngIf"],["class","multi-select-item",4,"ngIf"],["tagContent",""],[1,"default"],[3,"nzMode","nzOnClose"],[3,"ngTemplateOutlet"],[1,"select-item"],[1,"multi-select-item"],["nz-icon","","nzType","question-circle","nzTheme","outline",4,"ngIf"],[3,"innerHtml"],["nz-icon","","nzType","question-circle","nzTheme","outline"]],template:function(h,c){1&h&&(e.YNc(0,Fa,3,2,"span",0),e.YNc(1,Na,3,2,"span",1),e.YNc(2,La,2,1,"span",2),e.YNc(3,yc,3,5,"ng-template",null,3,e.W1O)),2&h&&(e.Q6J("ngIf","default"===c.cvcContext),e.xp6(1),e.Q6J("ngIf","select-item"===c.cvcContext),e.xp6(1),e.Q6J("ngIf","multi-select-item"===c.cvcContext))},dependencies:[S.O5,S.tP,yt.Ls,Yt.j,U.A]});const v1=_t($t(),ra);class hr extends v1{constructor(h){super(),this.cdr=h,this.defaultOptions={modelOptions:{updateOn:"blur"},props:{label:"Enter value",placeholder:"Enter value and hit Return"}},this.tags$=new Ke.x,this.values=new Set}onEnter(h){let c=h.target;c.value&&(this.values.add(c.value),c.value="");let C=Array.from(this.values);this.tags$.next(C),this.formControl.setValue(C)}tagClosed(h){this.values.delete(h);let c=Array.from(this.values);this.tags$.next(c),this.formControl.setValue(c),this.tags$.next(c)}ngAfterViewInit(){this.configureBaseField(),this.configureStringTagField(),this.formControl.value&&Array.isArray(this.formControl.value)&&(this.formControl.value.forEach(h=>this.values.add(h)),this.tags$.next(this.formControl.value),this.cdr.detectChanges())}}hr.\u0275fac=function(h){return new(h||hr)(e.Y36(e.sBO))},hr.\u0275cmp=e.Xpm({type:hr,selectors:[["cvc-tag-input"]],features:[e.qOj],decls:5,vars:6,consts:[[3,"cvcMode","cvcLabel","cvcOnClose",4,"ngFor","ngForOf"],["nz-input","",3,"placeholder","keydown.enter"],["hidden","","nz-input","",3,"formControl","formlyAttributes"],[3,"cvcMode","cvcLabel","cvcOnClose"]],template:function(h,c){1&h&&(e.TgZ(0,"div"),e.YNc(1,sa,1,2,"cvc-string-tag",0),e.ALo(2,"ngrxPush"),e.TgZ(3,"input",1),e.NdJ("keydown.enter",function(le){return c.onEnter(le)}),e.qZA()(),e._UZ(4,"input",2)),2&h&&(e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,4,c.tags$)),e.xp6(2),e.Q6J("placeholder",c.props.placeholder),e.xp6(1),e.Q6J("formControl",c.formControl)("formlyAttributes",c.field))},dependencies:[S.sg,t.Fj,t.JJ,t.oH,m.JD,Ae.Zp,Bs,P.fM],changeDetection:0});class Os{}Os.\u0275fac=function(h){return new(h||Os)},Os.\u0275mod=e.oAB({type:Os}),Os.\u0275inj=e.cJS({imports:[S.ez,yt.PV,Yt.X,xt.s]});const Cc={types:[{name:"tag-input",wrappers:["form-field"],component:hr},{name:"tag-multi-input",wrappers:["form-field"],component:hr,defaultOptions:{props:{isRepeatItem:!0}}}]};class aa{}aa.\u0275fac=function(h){return new(h||aa)},aa.\u0275mod=e.oAB({type:aa}),aa.\u0275inj=e.cJS({imports:[S.ez,t.UX,P._N,P.pP,m.X0.forChild(Cc),$e.F,Ae.o7,s.U5,Os]});const ca=_t($t());class ka extends ca{constructor(){super(...arguments),this.defaultOptions={props:{label:"TEXTAREA!"}}}}ka.\u0275fac=function(){let g;return function(c){return(g||(g=e.n5z(ka)))(c||ka)}}(),ka.\u0275cmp=e.Xpm({type:ka,selectors:[["formly-field-nz-textarea"]],features:[e.qOj],decls:1,vars:3,consts:[["nz-input","",3,"rows","formControl","formlyAttributes"]],template:function(h,c){1&h&&e._UZ(0,"textarea",0),2&h&&e.Q6J("rows",c.props.rows?c.props.rows:2)("formControl",c.formControl)("formlyAttributes",c.field)},dependencies:[t.Fj,t.JJ,t.oH,m.JD,Ae.Zp],encapsulation:2,changeDetection:0});const fs={types:[{name:"textarea",component:ka,wrappers:["form-field"]}]};class la{}var Jr;function _1(g,h){1&g&&e._UZ(0,"span",7)}function ua(g,h){1&g&&e._UZ(0,"span",8)}la.\u0275fac=function(h){return new(h||la)},la.\u0275mod=e.oAB({type:la}),la.\u0275inj=e.cJS({imports:[S.ez,t.UX,m.X0.forChild(fs),Ae.o7,lt]});const y1=function(){return[0,0]},zc={name:void 0};let Pu=((Jr=class{set cvcSearchString(h){h&&this.searchString$.next(h)}constructor(h,c){this.query=h,this.errors=c,this.cvcOnCreate=new e.vpe,this.model=zc,this.form=new t.nJ({}),this.options={},this.onSubmit$=new Ke.x,this.searchString$=new ot.X(void 0),this.queryMutator=new Nt.U(this.errors),this.isSubmitting$=new ot.X(!1),this.submitSuccess$=new ot.X(!1),this.submitError$=new ot.X([]),this.addTherapyMutator=new Nt.U(this.errors),this.fields=[{key:"name",props:{hidden:!0,required:!0}}],this.searchString$.pipe((0,Pe.t)(this)).subscribe(C=>{this.model.name=C}),this.onSubmit$.pipe((0,Pe.t)(this)).subscribe(C=>{console.log("therapy-quick-add form model submitted.",C),this.submitTherapy(C)})}submitTherapy(h){if(!h.name)return void console.error("therapy-quick-add form submitTherapy requires model with valid name.");let c=this.addTherapyMutator.mutate(this.query,{name:h.name},{},C=>{console.log("therapy-quick-add submit data callback",C),C.addTherapy&&this.cvcOnCreate.next(C.addTherapy.therapy.id)});c.submitSuccess$.pipe((0,Pe.t)(this)).subscribe(C=>{console.log("therapy-quick-add submitSuccess$",C),this.submitSuccess$.next(C)}),c.submitError$.pipe((0,Pe.t)(this)).subscribe(C=>{console.log("therapy-quick-add submitError$",C),this.submitError$.next(C)}),c.isSubmitting$.pipe((0,Pe.t)(this)).subscribe(C=>{this.isSubmitting$.next(C)})}}).\u0275fac=function(h){return new(h||Jr)(e.Y36(bn.Y_K),e.Y36(jt.Y))},Jr.\u0275cmp=e.Xpm({type:Jr,selectors:[["cvc-therapy-quick-add-form"]],inputs:{cvcSearchString:"cvcSearchString"},outputs:{cvcOnCreate:"cvcOnCreate"},decls:14,vars:17,consts:[[3,"formGroup","ngSubmit"],[3,"nzGutter"],["nzSpan","24"],[3,"form","fields","model","options","modelChange"],["nz-button","","nzType","primary","nzBlock","",3,"disabled"],["nz-icon","","nzType","plus-circle","nzTheme","outline",4,"ngIf"],["nz-icon","","nzType","loading","nzTheme","outline",4,"ngIf"],["nz-icon","","nzType","plus-circle","nzTheme","outline"],["nz-icon","","nzType","loading","nzTheme","outline"]],template:function(h,c){1&h&&(e.TgZ(0,"form",0),e.NdJ("ngSubmit",function(){return c.onSubmit$.next(c.model)}),e.TgZ(1,"nz-row",1)(2,"nz-col",2)(3,"formly-form",3),e.NdJ("modelChange",function(le){return c.model=le}),e.qZA()(),e.TgZ(4,"nz-col",2)(5,"button",4),e.YNc(6,_1,1,0,"span",5),e.ALo(7,"ngrxPush"),e.YNc(8,ua,1,0,"span",6),e.ALo(9,"ngrxPush"),e._uU(10," Create Therapy\xa0"),e.TgZ(11,"i"),e._uU(12),e.ALo(13,"ngrxPush"),e.qZA()()()()()),2&h&&(e.Q6J("formGroup",c.form),e.xp6(1),e.Q6J("nzGutter",e.DdM(16,y1)),e.xp6(2),e.Q6J("form",c.form)("fields",c.fields)("model",c.model)("options",c.options),e.xp6(2),e.Q6J("disabled",!c.form.valid),e.xp6(1),e.Q6J("ngIf",!e.lcZ(7,10,c.isSubmitting$)),e.xp6(2),e.Q6J("ngIf",e.lcZ(9,12,c.isSubmitting$)),e.xp6(4),e.Oqu(e.lcZ(13,14,c.searchString$)))},dependencies:[S.O5,t._Y,t.JL,t.sg,m.T7,Sn.ix,hn.w,ln.dQ,yt.Ls,w.t3,w.SK,P.fM],encapsulation:2,changeDetection:0}),Jr);Pu=(0,Te.gn)([(0,Pe.c)()],Pu);const Tc=["optionTemplates"];function C1(g,h){if(1&g&&(e.ynx(0),e.TgZ(1,"strong"),e._uU(2,"NCIt ID:"),e.qZA(),e._UZ(3,"span",9),e.ALo(4,"highlightTypeahead"),e.BQk()),2&g){const c=e.oxw(2).$implicit,C=e.oxw().ngrxLet;e.xp6(3),e.Q6J("innerHtml",e.xi3(4,1,c.ncitId,C),e.oJD)}}function Mc(g,h){if(1&g&&(e.ynx(0),e._uU(1," Aliases: "),e.TgZ(2,"em"),e._UZ(3,"span",10),e.ALo(4,"highlightTypeahead"),e.qZA(),e.BQk()),2&g){const c=e.oxw(2).$implicit,C=e.oxw().ngrxLet;e.xp6(3),e.Q6J("innerHtml",e.xi3(4,1,c.therapyAliases.join(", "),C),e.oJD)}}function Iu(g,h){if(1&g&&(e._UZ(0,"cvc-entity-tag",6),e.TgZ(1,"span",7),e.YNc(2,C1,5,4,"ng-container",8),e.YNc(3,Mc,5,4,"ng-container",8),e.qZA()),2&g){const c=e.oxw().$implicit,C=e.oxw().ngrxLet;e.Q6J("cvcDisableLink",!0)("cvcCacheId",c.__typename+":"+c.id)("cvcEmphasize",C),e.xp6(2),e.Q6J("ngIf",c.ncitId),e.xp6(1),e.Q6J("ngIf",c.therapyAliases.length>0)}}function da(g,h){1&g&&(e.ynx(0),e.YNc(1,Iu,4,5,"ng-template",null,5,e.W1O),e.BQk())}function Au(g,h){if(1&g&&(e.ynx(0),e.YNc(1,da,3,0,"ng-container",4),e.ALo(2,"ngrxPush"),e.BQk()),2&g){const c=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,c.result$))}}function ha(g,h){if(1&g){const c=e.EpF();e.TgZ(0,"div",11)(1,"cvc-entity-tag",12),e.NdJ("cvcOnClose",function(){const pt=e.CHM(c).$implicit,Ft=e.oxw();return e.KtG(Ft.onTagClose$.next(pt.nzValue))}),e.qZA()()}if(2&g){const c=h.$implicit,C=e.oxw();e.xp6(1),e.Q6J("cvcCacheId","Therapy:"+c.nzValue)("cvcContext",C.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",C.props.isMultiSelect?"default":"closeable")}}function z1(g,h){if(1&g){const c=e.EpF();e.TgZ(0,"cvc-therapy-quick-add-form",13),e.NdJ("cvcOnCreate",function(le){e.CHM(c);const pt=e.oxw();return e.KtG(pt.onPopulate$.next(le))}),e.qZA()}2&g&&e.Q6J("cvcSearchString",h.$implicit)}const bc=_t($t(),vi());class Ra extends bc{constructor(h,c,C){super(),this.taq=h,this.tq=c,this.changeDetectorRef=C,this.defaultOptions={props:{entityName:{singular:"Therapy",plural:"Therapies"},isMultiSelect:!1,requireType:!0,tooltip:"Therapy or therapy combination which interacts with the specified variant",placeholder:"Search Therapies",requireTypePromptFn:(le,pt)=>`Select an ${le} Type to search associated Therapies`}},this.placeholder$=new ot.X(void 0)}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEntitySelectField({typeaheadQuery:this.taq,typeaheadParam$:void 0,tagQuery:this.tq,getTypeaheadVarsFn:this.getTypeaheadVarsFn,getTypeaheadResultsFn:this.getTypeaheadResultsFn,getTagQueryVarsFn:this.getTagQueryVarsFn,getTagQueryResultsFn:this.getTagQueryResultsFn,getSelectedItemOptionFn:this.getSelectedItemOptionFn,getSelectOptionsFn:this.getSelectOptionsFn,changeDetectorRef:this.changeDetectorRef,selectOpen$:this.selectOpen$,selectComponent:this.selectComponent}),this.configurePlaceholders()}configureStateConnections(){if(this.state&&(this.stateEntityName=this.state.entityName,this.state.requires.requiresTherapy$?this.onRequiresTherapy$=this.state.requires.requiresTherapy$:console.warn(`${this.field.id} field's form provides a state, but could not find requiresTherapy$ subject to attach.`),this.props.requireType)){const h=`${this.stateEntityName.toLowerCase()}Type$`;this.state.fields[h]?this.onEntityType$=this.state.fields[h]:console.error(`${this.field.id} requireType is true, however form state does not provide Subject ${h}.`)}}configurePlaceholders(){this.placeholder$.next(this.props.placeholder),this.onRequiresTherapy$&&this.onEntityType$&&(0,ii.a)([this.onRequiresTherapy$,this.onEntityType$]).pipe((0,Pi.x)(),(0,Pe.t)(this)).subscribe(([h,c])=>{!h&&c?(this.props.required=!1,this.props.disabled=!0,this.props.description=`${(0,K.E)(c)} ${this.state.entityName} does not include associated therapies`,this.props.extraType="prompt",this.resetField(),this.cdr.markForCheck()):this.props.requireType&&!c?(this.props.required=!1,this.props.disabled=!0,this.props.description=this.props.requireTypePromptFn(this.state.entityName,this.props.isMultiSelect),this.props.extraType="prompt"):h?(this.props.required=!0,this.props.disabled=!1,this.props.description=void 0,this.props.extraType=void 0):(!h&&this.formControl.value||this.props.requireType&&!c&&this.formControl.value)&&(this.resetField(),console.log("HERE2"))})}getTypeaheadVarsFn(h){return{name:h}}getTypeaheadResultsFn(h){return h.data.therapyTypeahead}getTagQueryVarsFn(h){return{id:h}}getTagQueryResultsFn(h){return h.data.therapy}getSelectedItemOptionFn(h){return{value:h.id,label:h.name}}getSelectOptionsFn(h,c){return h.map((C,le)=>({label:c.get(le)||C.name,value:C.id}))}}Ra.\u0275fac=function(h){return new(h||Ra)(e.Y36(bn.cIw),e.Y36(bn.sjj),e.Y36(e.sBO))},Ra.\u0275cmp=e.Xpm({type:Ra,selectors:[["cvc-therapy-select"]],viewQuery:function(h,c){if(1&h&&e.Gf(Tc,5,e.Rgc),2&h){let C;e.iGM(C=e.CRH())&&(c.optionTemplates=C)}},features:[e.qOj],decls:12,vars:26,consts:[[3,"cvcAddEntity","cvcCustomTemplate","cvcDisabled","cvcEntityName","cvcFormControl","cvcFormlyAttributes","cvcLoading","cvcOptions","cvcPlaceholder","cvcResults","cvcSelectMode","cvcShowError","cvcSelectOpen","cvcOnSearch","cvcOnOpenChange","cvcOnModelChange"],[4,"ngrxLet"],["selectedTemplate",""],["addTherapy",""],[4,"ngFor","ngForOf"],["optionTemplates",""],[3,"cvcDisableLink","cvcCacheId","cvcEmphasize"],["nz-typography","","nzType","secondary"],[4,"ngIf"],[3,"innerHtml"],["nz-typography","","nzType","secondary",3,"innerHtml"],[1,"ant-select-selection-item-content"],[3,"cvcCacheId","cvcContext","cvcMode","cvcOnClose"],[3,"cvcSearchString","cvcOnCreate"]],template:function(h,c){if(1&h&&(e.TgZ(0,"cvc-entity-select",0),e.NdJ("cvcOnSearch",function(le){return c.onSearch$.next(le)})("cvcOnOpenChange",function(le){return c.onOpenChange$.next(le)})("cvcOnModelChange",function(le){return c.props.change&&c.props.change(c.field,le)}),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.ALo(3,"ngrxPush"),e.ALo(4,"ngrxPush"),e.ALo(5,"ngrxPush"),e.ALo(6,"ngrxPush"),e.qZA(),e.YNc(7,Au,3,3,"ng-container",1),e.YNc(8,ha,2,3,"ng-template",null,2,e.W1O),e.YNc(10,z1,1,1,"ng-template",null,3,e.W1O)),2&h){const C=e.MAs(9),le=e.MAs(11);e.Q6J("cvcAddEntity",le)("cvcCustomTemplate",C)("cvcDisabled",c.onRequiresTherapy$&&!e.lcZ(1,14,c.onRequiresTherapy$))("cvcEntityName",c.props.entityName)("cvcFormControl",c.formControl)("cvcFormlyAttributes",c.field)("cvcLoading",e.lcZ(2,16,c.isLoading$))("cvcOptions",e.lcZ(3,18,c.selectOption$))("cvcPlaceholder",e.lcZ(4,20,c.placeholder$))("cvcResults",e.lcZ(5,22,c.result$))("cvcSelectMode",c.props.isMultiSelect?"multiple":"default")("cvcShowError",c.showError)("cvcSelectOpen",e.lcZ(6,24,c.selectOpen$)),e.xp6(7),e.Q6J("ngrxLet",c.onSearch$)}},dependencies:[S.sg,S.O5,P.eJ,de.ZU,je,Tt.J,Pu,P.fM,U.A],changeDetection:0});const Va={types:[{name:"therapy-select",wrappers:["form-field"],component:Ra,defaultOptions:{props:{label:"Therapy"}}},{name:"therapy-multi-select",wrappers:["form-field"],component:Ra,defaultOptions:{props:{label:"Therapies",isMultiSelect:!0}}}]};class qr{}qr.\u0275fac=function(h){return new(h||qr)},qr.\u0275mod=e.oAB({type:qr}),qr.\u0275inj=e.cJS({imports:[S.ez,t.UX,P._N,P.pP,m.X0.forChild(Va),nn.L,Sn.sL,Qe.LV,Rn.$6,li.Qp,yt.PV,Ae.o7,w.Jb,Lt.cg,Zt.zf,s.U5,be.ic,de.ZJ,Yt.X,lt,En,xt.s,rt.x]});const Ba=["optionTemplates"];function Fu(g,h){if(1&g&&e._UZ(0,"cvc-attribute-tag",4),2&g){const c=e.oxw().$implicit;e.Q6J("cvcAttrValue",c)}}function Ec(g,h){1&g&&(e.ynx(0),e.YNc(1,Fu,1,1,"ng-template",null,3,e.W1O),e.BQk())}function od(g,h){if(1&g){const c=e.EpF();e.TgZ(0,"div",5)(1,"cvc-attribute-tag",6),e.NdJ("cvcOnClose",function(le){e.CHM(c);const pt=e.oxw();return e.KtG(pt.onTagClose$.next(le))}),e.qZA()()}if(2&g){const c=h.$implicit,C=e.oxw();e.xp6(1),e.Q6J("cvcAttrValue",c.nzValue)("cvcContext",C.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",C.props.isMultiSelect?"default":"closeable")}}const Hs={DIAGNOSTIC:"Evidence pertains to a variant's impact on patient diagnosis (cancer subtype).",PREDICTIVE:"Evidence pertains to a variant's effect on therapeutic response.",PROGNOSTIC:"Evidence pertains to a variant's impact on disease progression, severity, or patient survival.",PREDISPOSING:"Evidence pertains to a germline variant's role in conferring susceptibility to disease (including pathogenicity evaluations).",ONCOGENIC:"Evidence pertains to a somatic variant's involvement in tumor pathogenesis as described by the Hallmarks of Cancer.",FUNCTIONAL:"Evidence pertains to a variant that alters biological function from the reference state."},T1=_t($t(),ht());class ms extends T1{constructor(h){super(),this.cdr=h,this.defaultOptions={props:{label:"ENTITY_NAME Type",entityName:{singular:"Entity",plural:"Entities"},placeholder:"Select an ENTITY_NAME Type",isMultiSelect:!1}},this.typeEnums$=new ot.X([])}ngAfterViewInit(){this.configureBaseField(),this.state&&this.state.formReady$?this.state.formReady$.pipe((0,Ge.h)(h=>h),(0,xi.q)(1),(0,Pe.t)(this)).subscribe(h=>{this.configureField()}):this.configureField()}configureField(){this.onValueChange$.pipe((0,Pe.t)(this)).subscribe(h=>{h?(this.props.description=Hs[h],this.props.extraType="description"):(this.props.description=void 0,this.props.extraType=void 0)}),this.state?(this.props.placeholder=this.props.placeholder.replace("ENTITY_NAME",this.state.entityName),this.props.label=this.props.label.replace("ENTITY_NAME",this.state.entityName),this.props.tooltip=`Type of clinical outcome associated with the ${this.state.entityName} statement.`,this.state.enums.entityType$?(this.state.enums.entityType$.pipe((0,Pe.t)(this)).subscribe(h=>{this.typeEnums$.next(h)}),this.optionTemplates||console.error(`${this.field.id} could not find its optionTemplates QueryList to populate its select options, so simple text labels will be displayed.`),this.optionTemplate$=this.optionTemplates?.changes.pipe((0,Ct.U)(h=>h.map(c=>c))),this.configureEnumSelect()):console.error(`${this.field.id} could not find state's enums.inputEnum$ to populate its select options.`)):console.error(`${this.field.id} requires a form state to configure itself, none was found.`)}configureEnumSelect(){this.configureEnumSelectField({optionEnum$:this.typeEnums$,optionTemplate$:this.optionTemplate$,changeDetectorRef:this.cdr})}}ms.\u0275fac=function(h){return new(h||ms)(e.Y36(e.sBO))},ms.\u0275cmp=e.Xpm({type:ms,selectors:[["cvc-type-select"]],viewQuery:function(h,c){if(1&h&&e.Gf(Ba,5,e.Rgc),2&h){let C;e.iGM(C=e.CRH())&&(c.optionTemplates=C)}},features:[e.qOj],decls:6,vars:13,consts:[[3,"cvcFormControl","cvcFormlyAttributes","cvcSelectMode","cvcPlaceholder","cvcCustomTemplate","cvcOptions","cvcShowError","cvcDisabled"],[4,"ngFor","ngForOf"],["selectedTemplate",""],["optionTemplates",""],[3,"cvcAttrValue"],[1,"ant-select-selection-item-content"],[3,"cvcAttrValue","cvcContext","cvcMode","cvcOnClose"]],template:function(h,c){if(1&h&&(e._UZ(0,"cvc-enum-select",0),e.ALo(1,"ngrxPush"),e.YNc(2,Ec,3,0,"ng-container",1),e.ALo(3,"ngrxPush"),e.YNc(4,od,2,3,"ng-template",null,2,e.W1O)),2&h){const C=e.MAs(5);e.Q6J("cvcFormControl",c.formControl)("cvcFormlyAttributes",c.field)("cvcSelectMode",c.props.isMultiSelect?"multiple":"default")("cvcPlaceholder",c.props.placeholder)("cvcCustomTemplate",C)("cvcOptions",e.lcZ(1,9,c.selectOption$))("cvcShowError",c.showError)("cvcDisabled",c.props.disabled),e.xp6(2),e.Q6J("ngForOf",e.lcZ(3,11,c.typeEnums$))}},dependencies:[S.sg,Ue,Dt,P.fM],changeDetection:0});const Nu={types:[{name:"type-select",wrappers:["form-field"],component:ms}]};class kr{}kr.\u0275fac=function(h){return new(h||kr)},kr.\u0275mod=e.oAB({type:kr}),kr.\u0275inj=e.cJS({imports:[S.ez,t.UX,P._N,P.pP,m.X0.forChild(Nu),lt,Ye,ie]});var ou=a(6805);function pa(g,h){const c="object"==typeof h;return new Promise((C,le)=>{let Ft,pt=!1;g.subscribe({next:Mn=>{Ft=Mn,pt=!0},error:le,complete:()=>{pt?C(Ft):c?C(h.defaultValue):le(new ou.K)}})})}const ul={isDefaultCol:g=>"default"===g.type,isSelectCol:g=>"select"===g.type,isEntityTagCol:g=>"entity-tag"===g.type,isEnumTagCol:g=>"enum-tag"===g.type,isTextTagCol:g=>"text-tag"===g.type},Ua=g=>void 0!==g.sort,dl=g=>void 0!==g.filter,xc={diseases:bn.pP7.DiseaseName,gene:bn.pP7.EntrezSymbol,therapies:bn.pP7.TherapyName,variant:bn.pP7.VariantName},ku={diseases:"diseaseName",therapies:"therapyName",variant:"variantName",gene:"entrezSymbol",aliases:"variantAlias"},fa=["selected","id"];class Rl{constructor(){this.sortStreams=[],this.filterStreams=[],this.config=this.configureColumnStreams([{key:"selected",label:"Select",type:"select",width:"25px",align:"center",fixedLeft:!0,checkbox:{th:{showCheckbox:!1},td:{showCheckbox:!0}}},{key:"id",label:"ID",hidden:!0,type:"hidden",width:"0px"},{key:"variant",label:"Variant",type:"entity-tag",width:"215px",context:"variant",fixedLeft:!0,showStatus:!0,tag:{fullWidth:!0,truncateLabel:"200px"},sort:{default:"ascend"},filter:{inputType:"default",options:[{key:"Filter Variant Name",value:null}]}},{key:"aliases",label:"Aliases",type:"default",width:"150px",objectKey:"name",sort:{},filter:{inputType:"default",options:[{key:"Filter Aliases",value:null}]}},{key:"gene",label:"Gene",type:"entity-tag",width:"135px",tag:{truncateLabel:"125px"},sort:{},filter:{inputType:"default",options:[{key:"Filter Gene Name",value:null}]}},{key:"diseases",label:"Diseases",type:"entity-tag",width:"250px",sort:{},tag:{maxTags:1,truncateLabel:"175px"},filter:{inputType:"default",typename:"Therapy",options:[{key:"Filter Therapy Names",value:null}]}},{key:"therapies",label:"Therapies",type:"entity-tag",width:"275px",sort:{},tag:{maxTags:2,truncateLabel:"150px"},filter:{inputType:"default",typename:"Therapy",options:[{key:"Filter Therapy Names",value:null}]}}])}get(){return this.config}getSortStreams(){return this.sortStreams}getFilterStreams(){return this.filterStreams}getAttributeFilters(h,c){return h.getValues().map(le=>({text:(0,K.E)(le),value:le,byDefault:c===le}))}configureColumnStreams(h){return h.forEach(c=>{const C=c;if(Ua(C)&&(C.sort.changes=new ot.X({key:C.key,value:C.sort.default??null}),this.sortStreams.push(C.sort.changes)),dl(C)){const le=C.filter.options.find(pt=>pt.byDefault)?.value;C.filter.changes=new ot.X({key:C.key,value:le??null}),this.filterStreams.push(C.filter.changes)}}),h}}var Rr;let Ys=((Rr=class{set cvcTableScrollerToIndex(h){void 0!==h&&this.scrollToIndex(h)}set cvcTableScrollerToOffset(h){void 0!==h&&this.scrollToIndex(h)}constructor(h){this.host=h,this.cvcTableScrollerOnScroll=new e.vpe,this.cvcTableScrollerOnFetch=new e.vpe,this.cvcTableScrollerTargetHeight=140,this.cvcTableScrollerFetchCount=50,this.onLoadThrottleTime=500,this.onScrollThrottleTime=250,this.onScrollDebounceTime=300}ngAfterViewInit(){if(!this.host||!this.host.cdkVirtualScrollViewport)throw new Error("cvcTableScroller directive could not obtain reference to host cdkVirtualScrollViewport.");this.viewport=this.host.cdkVirtualScrollViewport,this.scrolled$=this.viewport.elementScrolled(),this.rendered$=this.viewport.renderedRangeStream,this.rendered$.pipe((0,ye.P)()).subscribe(()=>this.viewport.checkViewportSize()),this.scrolled$.pipe((0,gi.p)(this.onScrollThrottleTime,yo.z,{leading:!0,trailing:!0}),(0,kn.b)(h=>this.cvcTableScrollerOnScroll.next("scroll")),(0,qo.b)(this.onScrollDebounceTime),(0,Pe.t)(this)).subscribe(h=>{this.cvcTableScrollerOnScroll.next("stop")}),this.scrolled$.pipe((0,Ct.U)(h=>this.viewport.measureScrollOffset("bottom")),(0,he.G)(),(0,Ge.h)(([h,c])=>c<h&&c<this.cvcTableScrollerTargetHeight),(0,gi.p)(this.onLoadThrottleTime),(0,Pe.t)(this)).subscribe(h=>{this.cvcTableScrollerOnScroll.next("bottom");try{this.loadMore(this.cvcTableScrollerPageInfo)}catch(c){console.error(c)}})}loadMore(h){const c=this.cvcTableScrollerQueryRef;if(!h&&c)throw new Error("table-scroll directive requires PageInfo to use provided QueryRef.");if(h&&!c)throw new Error("table-scroll directive requires valid QueryRef when PageInfo provided.");if(h&&c){const[C,le,pt]=[this.cvcTableScrollerFetchCount,h.hasNextPage,h.endCursor];if(!C||!pt)throw new Error("table-scroll PageInfo invalid.");if(!le)return;this.cvcTableScrollerOnFetch.next({first:C,after:pt})}}scrollToIndex(h){const[c,C]=[this.host,this.host.cdkVirtualScrollViewport];if(!c||!C)throw new Error("table-scroll scrollToIndex() cannot find host viewport.");C.scrollToIndex(h)}scrollToOffset(h){const[c,C]=[this.host,this.host.cdkVirtualScrollViewport];if(!c||!C)throw new Error("table-scroll scrollToOffset() cannot find host viewport.");C.scrollToOffset(h)}}).\u0275fac=function(h){return new(h||Rr)(e.Y36(Di.N8))},Rr.\u0275dir=e.lG2({type:Rr,selectors:[["","cvcTableScroller",""]],inputs:{cvcTableScrollerTargetHeight:"cvcTableScrollerTargetHeight",cvcTableScrollerQueryRef:"cvcTableScrollerQueryRef",cvcTableScrollerPageInfo:"cvcTableScrollerPageInfo",cvcTableScrollerFetchCount:"cvcTableScrollerFetchCount",cvcTableScrollerToIndex:"cvcTableScrollerToIndex",cvcTableScrollerToOffset:"cvcTableScrollerToOffset"},outputs:{cvcTableScrollerOnScroll:"cvcTableScrollerOnScroll",cvcTableScrollerOnFetch:"cvcTableScrollerOnFetch"}}),Rr);function Dc(g,h){1&g&&e._UZ(0,"span",8)}function b1(g,h){if(1&g){const c=e.EpF();e.TgZ(0,"span",9),e.NdJ("click",function(){e.CHM(c),e.oxw(2);const le=e.MAs(3),pt=e.oxw();return le.value="",e.KtG(pt.cvcModelChange.next(null))}),e.qZA()}}function hl(g,h){if(1&g&&(e.YNc(0,Dc,1,0,"span",6),e.YNc(1,b1,1,0,"span",7)),2&g){e.oxw();const c=e.MAs(3);e.Q6J("ngIf",!c.value),e.xp6(1),e.Q6J("ngIf",c.value)}}function E1(g,h){if(1&g){const c=e.EpF();e.ynx(0),e.TgZ(1,"nz-input-group",2)(2,"input",3,4),e.NdJ("ngModelChange",function(le){e.CHM(c);const pt=e.oxw();return e.KtG(pt.cvcModelChange.next(le))}),e.qZA()(),e.YNc(4,hl,2,2,"ng-template",null,5,e.W1O),e.BQk()}if(2&g){const c=e.MAs(5),C=e.oxw();e.xp6(1),e.Q6J("nzSuffix",c),e.xp6(1),e.Q6J("placeholder",C.cvcPlaceholder)("ngModel",C.cvcModel)}}function ma(g,h){if(1&g){const c=e.EpF();e.TgZ(0,"nz-input-number-group",10)(1,"nz-input-number",11,4),e.NdJ("ngModelChange",function(le){e.CHM(c);const pt=e.oxw();return e.KtG(pt.cvcModelChange.next(""===le?null:le))}),e.qZA()()}if(2&g){const c=e.oxw();let C;e.xp6(1),e.Q6J("nzPlaceHolder",null!==(C=c.cvcPlaceholder)&&void 0!==C?C:"")("ngModel",c.cvcModel)("nzMin",1)("nzStep",1)}}Ys=(0,Te.gn)([(0,Pe.c)()],Ys);class pl{constructor(){this.cvcModel=null,this.cvcModelChange=new e.vpe,this.cvcInputType="default"}}function ja(g,h){if(1&g){const c=e.EpF();e.TgZ(0,"li",5),e.NdJ("click",function(){const pt=e.CHM(c).$implicit,Ft=e.oxw();return e.KtG(Ft.cvcOptionChange.next({key:Ft.cvcColumnKey,value:pt.value}))}),e._UZ(1,"cvc-attribute-tag",6),e.qZA()}if(2&g){const c=h.$implicit,C=e.oxw();e.Q6J("nzSelected",(null==C.cvcOption?null:C.cvcOption.value)===c.value),e.xp6(1),e.Q6J("cvcFullWidth",!0)("cvcChecked",(null==C.cvcOption?null:C.cvcOption.value)===c.value)("cvcAttrValue",c.value)}}pl.\u0275fac=function(h){return new(h||pl)},pl.\u0275cmp=e.Xpm({type:pl,selectors:[["cvc-table-filter-input"]],inputs:{cvcModel:"cvcModel",cvcInputType:"cvcInputType",cvcPlaceholder:"cvcPlaceholder"},outputs:{cvcModelChange:"cvcModelChange"},decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["numericInput",""],["nzSize","small",3,"nzSuffix"],["nz-input","",3,"placeholder","ngModel","ngModelChange"],["filterInput",""],["suffixIcon",""],["nz-icon","","nzType","search","style","color: #ddd",4,"ngIf"],["nz-icon","","class","ant-input-clear-icon","nzTheme","fill","nzType","close-circle",3,"click",4,"ngIf"],["nz-icon","","nzType","search",2,"color","#ddd"],["nz-icon","","nzTheme","fill","nzType","close-circle",1,"ant-input-clear-icon",3,"click"],["nzSize","small"],[2,"width","100%",3,"nzPlaceHolder","ngModel","nzMin","nzStep","ngModelChange"]],template:function(h,c){if(1&h&&(e.YNc(0,E1,6,3,"ng-container",0),e.YNc(1,ma,3,4,"ng-template",null,1,e.W1O)),2&h){const C=e.MAs(2);e.Q6J("ngIf","default"===c.cvcInputType)("ngIfElse",C)}},dependencies:[S.O5,t.Fj,t.JJ,t.On,hn.w,yt.Ls,Ae.Zp,Ae.gB,Ae.ke,Yo._V,Yo.Rb]});class ga{constructor(){this.cvcOptionChange=new e.vpe}}var Vr;function Ru(g,h){if(1&g&&e._UZ(0,"th",14),2&g){const c=h.ngIf;let C;e.Q6J("nzShowCheckbox",c.checkbox.th.showCheckbox||!1)("nzWidth",c.width)("nzAlign",null!==(C=c.align)&&void 0!==C?C:"left")("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1)}}function Ga(g,h){if(1&g){const c=e.EpF();e.TgZ(0,"th",15),e.NdJ("nzSortOrderChange",function(le){const Ft=e.CHM(c).ngIf;return e.KtG(Ft.sort.changes.next({key:Ft.key,value:le}))}),e.ALo(1,"ngrxPush"),e.TgZ(2,"span",16),e._uU(3),e.qZA()()}if(2&g){const c=h.ngIf;let C,le;e.Q6J("nzColumnKey",c.key)("nzAlign",null!==(C=c.align)&&void 0!==C?C:"left")("nzWidth",c.width)("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1)("nzShowSort",void 0!==c.sort)("nzSortFn",!0)("nzSortOrder",(null==(le=e.lcZ(1,10,c.sort.changes))?null:le.value)||null),e.xp6(2),e.Q6J("nzTooltipTitle",c.tooltip),e.xp6(1),e.hij(" ",c.label," ")}}function Vu(g,h){if(1&g&&(e.TgZ(0,"th",17),e._uU(1),e.qZA()),2&g){const c=h.ngIf;let C;e.Q6J("nzColumnKey",c.key)("nzAlign",null!==(C=c.align)&&void 0!==C?C:"left")("nzWidth",c.width)("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1)("nzTooltipTitle",c.tooltip),e.xp6(1),e.hij(" ",c.label," ")}}function Xr(g,h){if(1&g&&(e.TgZ(0,"th",17),e._uU(1),e.qZA()),2&g){const c=h.ngIf;let C;e.Q6J("nzColumnKey",c.key)("nzAlign",null!==(C=c.align)&&void 0!==C?C:"left")("nzWidth",c.width)("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1)("nzTooltipTitle",c.tooltip),e.xp6(1),e.hij(" ",c.label," ")}}function S1(g,h){if(1&g&&(e.TgZ(0,"th",17),e._uU(1),e.qZA()),2&g){const c=h.ngIf;let C;e.Q6J("nzColumnKey",c.key)("nzAlign",null!==(C=c.align)&&void 0!==C?C:"left")("nzWidth",c.width)("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1)("nzTooltipTitle",c.tooltip),e.xp6(1),e.hij(" ",c.label," ")}}function Oc(g,h){if(1&g&&(e.ynx(0),e.YNc(1,Ru,1,5,"th",11),e.ALo(2,"guardType"),e.YNc(3,Ga,4,12,"th",12),e.ALo(4,"guardType"),e.YNc(5,Vu,2,7,"th",13),e.ALo(6,"guardType"),e.YNc(7,Xr,2,7,"th",13),e.ALo(8,"guardType"),e.YNc(9,S1,2,7,"th",13),e.ALo(10,"guardType"),e.BQk()),2&g){const c=e.oxw().$implicit,C=e.oxw(2);e.xp6(1),e.Q6J("ngIf",e.xi3(2,5,c,C.colGuards.isSelectCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(4,8,c,C.colGuards.isEntityTagCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(6,11,c,C.colGuards.isEnumTagCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(8,14,c,C.colGuards.isTextTagCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(10,17,c,C.colGuards.isDefaultCol))}}function x1(g,h){if(1&g&&(e.ynx(0),e.YNc(1,Oc,11,20,"ng-container",10),e.BQk()),2&g){const c=h.$implicit;e.xp6(1),e.Q6J("ngIf",!c.hidden)}}function wc(g,h){if(1&g&&(e.TgZ(0,"th",22),e._uU(1," \xa0 "),e.qZA()),2&g){const c=h.ngIf;let C;e.Q6J("nzColumnKey",c.key)("nzAlign",null!==(C=c.align)&&void 0!==C?C:"left")("nzWidth",c.width)("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1)}}function Bu(g,h){if(1&g){const c=e.EpF();e.TgZ(0,"cvc-table-filter-input",25),e.NdJ("cvcModelChange",function(le){const Ft=e.CHM(c).ngIf,Mn=e.oxw().ngIf;return e.KtG(Ft.changes.next({key:Mn.key,value:le}))}),e.qZA()}if(2&g){const c=e.oxw().ngIf;e.Q6J("cvcInputType",c.filter.inputType)("cvcPlaceholder",c.filter.options[0].key)("cvcModel",c.filter.options[0].value)}}function xr(g,h){if(1&g&&(e.TgZ(0,"th",23),e.YNc(1,Bu,1,3,"cvc-table-filter-input",24),e.qZA()),2&g){const c=h.ngIf;let C;e.Q6J("nzColumnKey",c.key)("nzWidth",c.width)("nzAlign",null!==(C=c.align)&&void 0!==C?C:"left")("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1),e.xp6(1),e.Q6J("ngIf",c.filter)}}function Pc(g,h){if(1&g){const c=e.EpF();e.TgZ(0,"th",26,27),e.NdJ("nzSortOrderChange",function(le){const Ft=e.CHM(c).ngIf;return e.KtG(Ft.sort.changes.next({key:Ft.key,value:le}))}),e.ALo(2,"ngrxPush"),e.TgZ(3,"nz-filter-trigger",28,29),e.ALo(5,"ngrxPush"),e._UZ(6,"span",30),e.qZA(),e.TgZ(7,"nz-dropdown-menu",null,31)(9,"cvc-enum-filter-menu",32),e.NdJ("cvcOptionChange",function(le){const Ft=e.CHM(c).ngIf,Mn=e.MAs(4);return Ft.filter.changes.next(le),e.KtG(Mn.nzVisible=!1)}),e.ALo(10,"ngrxPush"),e.qZA()()()}if(2&g){const c=h.ngIf,C=e.MAs(8);let le,pt,Ft;e.Q6J("nzColumnKey",c.key)("nzWidth",c.width)("nzAlign",null!==(le=c.align)&&void 0!==le?le:"left")("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1)("nzShowSort",!0)("nzSortFn",!0)("nzSortOrder",(null==(pt=e.lcZ(2,15,c.sort.changes))?null:pt.value)||null)("nzShowFilter",void 0!==c.filter)("nzFilterFn",!0),e.xp6(3),e.Q6J("nzDropdownMenu",C)("nzActive",null!==(null==(Ft=e.lcZ(5,17,c.filter.changes))?null:Ft.value)),e.xp6(6),e.Q6J("cvcColumnKey",c.key)("cvcFilterOptions",c.filter.options)("cvcOption",e.lcZ(10,19,c.filter.changes))}}function Ic(g,h){if(1&g){const c=e.EpF();e.TgZ(0,"th",33,27)(2,"nz-filter-trigger",28),e.ALo(3,"ngrxPush"),e._UZ(4,"span",34),e.qZA(),e.TgZ(5,"nz-dropdown-menu",null,35)(7,"div",36)(8,"div",37)(9,"cvc-table-filter-input",38),e.NdJ("cvcModelChange",function(le){const Ft=e.CHM(c).ngIf;return e.KtG(Ft.filter.changes.next({key:Ft.key,value:le}))}),e.qZA()()()()()}if(2&g){const c=h.ngIf,C=e.MAs(6);let le,pt;e.Q6J("nzColumnKey",c.key)("nzWidth",c.width)("nzAlign",null!==(le=c.align)&&void 0!==le?le:"left")("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1)("nzFilterFn",!0),e.xp6(2),e.Q6J("nzDropdownMenu",C)("nzActive",null!==(null==(pt=e.lcZ(3,10,c.filter.changes))?null:pt.value)),e.xp6(7),e.Q6J("cvcPlaceholder",c.filter.options[0].key)("cvcModel",c.filter.options[0].value)}}function kd(g,h){if(1&g){const c=e.EpF();e.TgZ(0,"cvc-table-filter-input",38),e.NdJ("cvcModelChange",function(le){const Ft=e.CHM(c).ngIf,Mn=e.oxw().ngIf;return e.KtG(Ft.changes.next({key:Mn.key,value:le}))}),e.qZA()}if(2&g){const c=e.oxw().ngIf;e.Q6J("cvcPlaceholder",c.filter.options[0].key)("cvcModel",c.filter.options[0].value)}}function Vl(g,h){if(1&g&&(e.TgZ(0,"th",23),e.YNc(1,kd,1,2,"cvc-table-filter-input",39),e.qZA()),2&g){const c=h.ngIf;let C;e.Q6J("nzColumnKey",c.key)("nzWidth",c.width)("nzAlign",null!==(C=c.align)&&void 0!==C?C:"left")("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1),e.xp6(1),e.Q6J("ngIf",c.filter)}}function sd(g,h){if(1&g&&(e.ynx(0),e.YNc(1,wc,2,5,"th",18),e.ALo(2,"guardType"),e.YNc(3,xr,2,6,"th",19),e.ALo(4,"guardType"),e.YNc(5,Pc,11,21,"th",20),e.ALo(6,"guardType"),e.YNc(7,Ic,10,12,"th",21),e.ALo(8,"guardType"),e.YNc(9,Vl,2,6,"th",19),e.ALo(10,"guardType"),e.BQk()),2&g){const c=e.oxw().$implicit,C=e.oxw(2);e.xp6(1),e.Q6J("ngIf",e.xi3(2,5,c,C.colGuards.isSelectCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(4,8,c,C.colGuards.isEntityTagCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(6,11,c,C.colGuards.isEnumTagCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(8,14,c,C.colGuards.isTextTagCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(10,17,c,C.colGuards.isDefaultCol))}}function fl(g,h){if(1&g&&(e.ynx(0),e.YNc(1,sd,11,20,"ng-container",10),e.BQk()),2&g){const c=h.$implicit;e.xp6(1),e.Q6J("ngIf",!c.hidden)}}function ad(g,h){if(1&g&&(e.TgZ(0,"thead")(1,"tr",7),e.YNc(2,x1,2,1,"ng-container",8),e.qZA(),e.TgZ(3,"tr",9),e.YNc(4,fl,2,1,"ng-container",8),e.qZA()()),2&g){const c=h.ngrxLet;e.xp6(2),e.Q6J("ngForOf",c),e.xp6(2),e.Q6J("ngForOf",c)}}function Ac(g,h){if(1&g){const c=e.EpF();e.TgZ(0,"td",45),e.NdJ("nzCheckedChange",function(le){e.CHM(c);const pt=e.oxw(3).$implicit,Ft=e.oxw(2);return e.KtG(Ft.onRowSelected$.next({id:pt.id,selected:le}))}),e.qZA()}if(2&g){const c=h.ngIf,C=e.oxw(3).$implicit;let le;e.Q6J("nzChecked",C.selected)("nzAlign",null!==(le=c.align)&&void 0!==le?le:"left")("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1)}}function Bl(g,h){1&g&&e.GkF(0)}ga.\u0275fac=function(h){return new(h||ga)},ga.\u0275cmp=e.Xpm({type:ga,selectors:[["cvc-enum-filter-menu"]],inputs:{cvcColumnKey:"cvcColumnKey",cvcFilterOptions:"cvcFilterOptions",cvcOption:"cvcOption"},outputs:{cvcOptionChange:"cvcOptionChange"},decls:6,vars:2,consts:[["nz-menu",""],["nz-menu-item","",3,"nzSelected","click",4,"ngFor","ngForOf"],[2,"padding","3px"],["nz-button","","nzType","default","nzBlock","","nzSize","small",3,"disabled","click"],["nz-icon","","nzType","retweet","nzTheme","outline"],["nz-menu-item","",3,"nzSelected","click"],["cvcContext","menu-item",3,"cvcFullWidth","cvcChecked","cvcAttrValue"]],template:function(h,c){1&h&&(e.TgZ(0,"ul",0),e.YNc(1,ja,2,4,"li",1),e.TgZ(2,"li",2)(3,"button",3),e.NdJ("click",function(){return c.cvcOptionChange.next({key:c.cvcColumnKey,value:null})}),e._UZ(4,"span",4),e._uU(5," Reset "),e.qZA()()()),2&h&&(e.xp6(1),e.Q6J("ngForOf",c.cvcFilterOptions),e.xp6(2),e.Q6J("disabled",null===(null==c.cvcOption?null:c.cvcOption.value)))},dependencies:[S.sg,Ue,Sn.ix,hn.w,ln.dQ,yt.Ls,Zi.wO,Zi.r9],styles:[".typeahead-match[_ngcontent-%COMP%]{font-weight:700}[_nghost-%COMP%]     ul li:hover{background-color:#e6f7ff}[_nghost-%COMP%]     ul li.ant-dropdown-menu-item-selected{background-color:#1890ff}[_nghost-%COMP%]     ul li.ant-dropdown-menu-item-selected:active{background-color:#096dd9}"],changeDetection:0});const ml=function(g,h,c){return{$implicit:g,config:h,emphasize:c}};function cd(g,h){if(1&g&&(e.ynx(0),e.YNc(1,Bl,1,0,"ng-container",51),e.ALo(2,"isArray"),e.ALo(3,"ngrxPush"),e.BQk()),2&g){const c=e.oxw().ngIf,C=e.oxw().ngIf,le=e.MAs(3),pt=e.MAs(5),Ft=e.oxw(3).$implicit;let Mn;e.xp6(1),e.Q6J("ngTemplateOutlet",e.lcZ(2,2,Ft[c])?le:pt)("ngTemplateOutletContext",e.kEZ(6,ml,Ft[c],C,null==(Mn=e.lcZ(3,4,C.filter.changes))?null:Mn.value))}}function gl(g,h){if(1&g&&(e.ynx(0),e.YNc(1,cd,4,10,"ng-container",50),e.BQk()),2&g){const c=h.ngIf;e.oxw();const C=e.MAs(7),le=e.oxw(3).$implicit;e.xp6(1),e.Q6J("ngIf",le[c])("ngIfElse",C)}}const Hl=function(g,h,c,C,le){return{tagList:g,tag:h,showPopover:c,status:C,emphasize:le}};function Dr(g,h){if(1&g&&(e.ynx(0),e._UZ(1,"cvc-entity-collection-tag",53),e.BQk()),2&g){const c=e.oxw(2),C=c.config,le=c.$implicit,pt=c.emphasize;e.oxw();const Ft=e.MAs(5),Mn=e.oxw(5);e.xp6(1),e.Q6J("cvcCollectionTagConfig",e.qbA(3,Hl,le.slice(C.tag.maxTags,le.length),C.tag,!Mn.isScrolling,!0===C.showStatus?le.status:void 0,pt))("cvcTagTemplate",Ft)("cvcShowFullLabels",!0)}}function va(g,h){if(1&g&&(e.ynx(0),e._UZ(1,"cvc-entity-tag-list",52),e.YNc(2,Dr,2,9,"ng-container",10),e.BQk()),2&g){const c=e.oxw(),C=c.config,le=c.$implicit,pt=c.emphasize;e.oxw();const Ft=e.MAs(5),Mn=e.oxw(5);e.xp6(1),e.Q6J("cvcTagTemplate",Ft)("cvcTagListConfig",e.qbA(3,Hl,le.slice(0,C.tag.maxTags),C.tag,!Mn.isScrolling,!0===C.showStatus?le.status:void 0,pt)),e.xp6(1),e.Q6J("ngIf",le.slice(C.tag.maxTags,le.length).length>0)}}function Fc(g,h){if(1&g&&e.YNc(0,va,3,9,"ng-container",50),2&g){const c=h.$implicit;e.oxw();const C=e.MAs(7);e.Q6J("ngIf",c.length>0)("ngIfElse",C)}}function D1(g,h){if(1&g&&e._UZ(0,"cvc-entity-tag",54),2&g){const c=h.$implicit,C=h.config,le=h.emphasize,pt=e.oxw(6);let Ft;e.Q6J("cvcTruncateLabel",null==C.tag?null:C.tag.truncateLabel)("cvcLinkableEntity",c)("cvcEmphasize",le)("cvcShowPopover",!pt.isScrolling)("cvcStatus",!0===C.showStatus?c.status:void 0)("cvcFullWidth",null!==(Ft=null==C.tag?null:C.tag.fullWidth)&&void 0!==Ft&&Ft)}}function gs(g,h){if(1&g&&e._UZ(0,"cvc-empty-value",55),2&g){const c=e.oxw().ngIf;e.Q6J("cvcEmptyCategory",c.emptyValueCategory||"unspecified")}}function ld(g,h){if(1&g&&(e.TgZ(0,"td",46),e.YNc(1,gl,2,2,"ng-container",10),e.YNc(2,Fc,1,2,"ng-template",null,47,e.W1O),e.YNc(4,D1,1,6,"ng-template",null,48,e.W1O),e.YNc(6,gs,1,1,"ng-template",null,49,e.W1O),e.qZA()),2&g){const c=h.ngIf;let C;e.Q6J("nzAlign",null!==(C=c.align)&&void 0!==C?C:"left")("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1),e.xp6(1),e.Q6J("ngIf",c.context||c.key)}}function Yl(g,h){if(1&g&&(e._UZ(0,"cvc-attribute-tag",58),e.ALo(1,"evidenceEnumDisplay")),2&g){const c=e.oxw().ngIf,C=e.oxw(3).$implicit,le=e.oxw(2);e.Q6J("cvcFullWidth",!0)("cvcAttrValue",C[c.key])("cvcTooltip",e.lcZ(1,3,!le.isScrolling&&C[c.key]))}}function ud(g,h){if(1&g&&e._UZ(0,"cvc-empty-value",55),2&g){const c=e.oxw().ngIf;e.Q6J("cvcEmptyCategory",c.emptyValueCategory||"unspecified")}}function Nc(g,h){if(1&g&&(e.TgZ(0,"td",46),e.YNc(1,Yl,2,5,"cvc-attribute-tag",56),e.YNc(2,ud,1,1,"ng-template",null,57,e.W1O),e.qZA()),2&g){const c=h.ngIf,C=e.MAs(3),le=e.oxw(3).$implicit;let pt;e.Q6J("nzAlign",null!==(pt=c.align)&&void 0!==pt?pt:"left")("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1),e.xp6(1),e.Q6J("ngIf",le[c.key])("ngIfElse",C)}}function ru(g,h){if(1&g&&(e.TgZ(0,"nz-tag",61),e._UZ(1,"span",62),e.qZA()),2&g){const c=e.oxw().ngIf,C=e.oxw(3).$implicit;e.Q6J("nzTooltipTitle",C[c.key])}}function vl(g,h){if(1&g&&e._UZ(0,"cvc-empty-value",55),2&g){const c=e.oxw().ngIf;e.Q6J("cvcEmptyCategory",c.emptyValueCategory||"unspecified")}}function Rd(g,h){if(1&g&&(e.TgZ(0,"td",46),e.YNc(1,ru,2,1,"nz-tag",59),e.YNc(2,vl,1,1,"ng-template",null,60,e.W1O),e.qZA()),2&g){const c=h.ngIf,C=e.MAs(3),le=e.oxw(3).$implicit;let pt;e.Q6J("nzAlign",null!==(pt=c.align)&&void 0!==pt?pt:"left")("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1),e.xp6(1),e.Q6J("ngIf",le[c.key])("ngIfElse",C)}}function Lc(g,h){1&g&&e.GkF(0)}const O1=function(g,h){return{$implicit:g,emphasize:h}};function _l(g,h){if(1&g&&(e.ynx(0),e.YNc(1,Lc,1,0,"ng-container",51),e.ALo(2,"isArray"),e.ALo(3,"ngrxPush"),e.BQk()),2&g){const c=h.ngIf,C=e.oxw().ngIf,le=e.MAs(3),pt=e.MAs(5);let Ft;e.xp6(1),e.Q6J("ngTemplateOutlet",e.lcZ(2,2,c)?le:pt)("ngTemplateOutletContext",e.WLB(6,O1,c,null==(Ft=e.lcZ(3,4,C.filter.changes))?null:Ft.value))}}function dd(g,h){1&g&&e.GkF(0)}function yl(g,h){1&g&&(e.ynx(0),e._uU(1,", "),e.BQk())}function ee(g,h){if(1&g&&(e.ynx(0),e.YNc(1,dd,1,0,"ng-container",51),e.YNc(2,yl,2,0,"ng-container",10),e.BQk()),2&g){const c=h.$implicit,C=h.last,le=e.oxw(2).emphasize;e.oxw();const pt=e.MAs(5);e.xp6(1),e.Q6J("ngTemplateOutlet",pt)("ngTemplateOutletContext",e.WLB(3,O1,c,le)),e.xp6(1),e.Q6J("ngIf",!C)}}function G(g,h){if(1&g&&(e.ynx(0),e.YNc(1,ee,3,6,"ng-container",8),e.BQk()),2&g){const c=e.oxw().$implicit;e.xp6(1),e.Q6J("ngForOf",c)}}function Vd(g,h){if(1&g&&e.YNc(0,G,2,1,"ng-container",50),2&g){const c=h.$implicit;e.oxw();const C=e.MAs(7);e.Q6J("ngIf",c.length>0)("ngIfElse",C)}}function hd(g,h){if(1&g&&(e._UZ(0,"span",67),e.ALo(1,"highlightTypeahead")),2&g){const c=h.$implicit,C=h.emphasize,le=e.oxw().ngIf;e.Q6J("innerHtml",e.xi3(1,1,le.objectKey?c[le.objectKey]:c,C),e.oJD)}}function _h(g,h){if(1&g&&e._UZ(0,"cvc-empty-value",55),2&g){const c=e.oxw().ngIf;e.Q6J("cvcEmptyCategory",c.emptyValueCategory||"unspecified")}}function Mo(g,h){if(1&g&&(e.TgZ(0,"td",63),e.YNc(1,_l,4,9,"ng-container",50),e.YNc(2,Vd,1,2,"ng-template",null,64,e.W1O),e.YNc(4,hd,2,4,"ng-template",null,65,e.W1O),e.YNc(6,_h,1,1,"ng-template",null,66,e.W1O),e.qZA()),2&g){const c=h.ngIf,C=e.MAs(7),le=e.oxw(3).$implicit;let pt;e.Q6J("nzAlign",null!==(pt=c.align)&&void 0!==pt?pt:"left")("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1),e.xp6(1),e.Q6J("ngIf",le[c.key])("ngIfElse",C)}}function su(g,h){if(1&g&&(e.ynx(0),e.YNc(1,Ac,1,4,"td",42),e.ALo(2,"guardType"),e.YNc(3,ld,8,4,"td",43),e.ALo(4,"guardType"),e.YNc(5,Nc,4,5,"td",43),e.ALo(6,"guardType"),e.YNc(7,Rd,4,5,"td",43),e.ALo(8,"guardType"),e.YNc(9,Mo,8,5,"td",44),e.ALo(10,"guardType"),e.BQk()),2&g){const c=e.oxw().$implicit,C=e.oxw(3);e.xp6(1),e.Q6J("ngIf",e.xi3(2,5,c,C.colGuards.isSelectCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(4,8,c,C.colGuards.isEntityTagCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(6,11,c,C.colGuards.isEnumTagCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(8,14,c,C.colGuards.isTextTagCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(10,17,c,C.colGuards.isDefaultCol))}}function pd(g,h){if(1&g&&(e.ynx(0),e.YNc(1,su,11,20,"ng-container",10),e.BQk()),2&g){const c=h.$implicit;e.xp6(1),e.Q6J("ngIf",!c.hidden)}}function Zn(g,h){if(1&g&&(e.TgZ(0,"tr",41),e.YNc(1,pd,2,1,"ng-container",8),e.qZA()),2&g){const c=e.oxw().ngrxLet;e.xp6(1),e.Q6J("ngForOf",c)}}function Io(g,h){1&g&&(e.TgZ(0,"tbody"),e.YNc(1,Zn,2,1,"ng-template",40),e.qZA())}function Hu(g,h){1&g&&e._UZ(0,"span",75)}function w1(g,h){if(1&g){const c=e.EpF();e.TgZ(0,"span",76),e.NdJ("click",function(){e.CHM(c),e.oxw(2);const le=e.MAs(3),pt=e.oxw().filter;return le.value="",e.KtG(pt.changes.next({key:pt.key,value:null}))}),e.qZA()}}function fd(g,h){if(1&g&&(e.YNc(0,Hu,1,0,"span",73),e.YNc(1,w1,1,0,"span",74)),2&g){e.oxw();const c=e.MAs(3);e.Q6J("ngIf",!c.value),e.xp6(1),e.Q6J("ngIf",c.value)}}function yh(g,h){if(1&g){const c=e.EpF();e.ynx(0),e.TgZ(1,"nz-input-group",69)(2,"input",70,71),e.NdJ("nzFilterChange",function(le){e.CHM(c);const pt=e.oxw().filter;return e.KtG(pt.changes.next({key:pt.key,value:le}))}),e.qZA()(),e.YNc(4,fd,2,2,"ng-template",null,72,e.W1O),e.BQk()}if(2&g){const c=e.MAs(5),C=e.oxw().filter;e.xp6(1),e.Q6J("nzSuffix",c),e.xp6(1),e.Q6J("placeholder",C.placeholder)("ngModel",C.defaultValue)}}function md(g,h){if(1&g){const c=e.EpF();e.TgZ(0,"nz-input-number-group",77)(1,"nz-input-number",78,71),e.NdJ("ngModelChange",function(le){e.CHM(c);const pt=e.oxw().filter;return e.KtG(pt.changes.next({key:pt.key,value:le}))}),e.qZA()()}if(2&g){const c=e.oxw().filter;e.xp6(1),e.Q6J("nzPlaceHolder",c.placeholder)("ngModel",c.defaultValue)("nzMin",1)("nzStep",1)}}function wi(g,h){if(1&g&&(e.YNc(0,yh,6,3,"ng-container",50),e.YNc(1,md,3,4,"ng-template",null,68,e.W1O)),2&g){const c=h.filter,C=e.MAs(2);e.Q6J("ngIf",void 0===c.inputType||"default"===c.inputType)("ngIfElse",C)}}const Bd=function(){return[6,6]};function au(g,h){1&g&&(e.TgZ(0,"nz-row",79)(1,"nz-col")(2,"span"),e._uU(3,"Use checkboxes to select or deselect EIDs"),e.qZA()()()),2&g&&e.Q6J("nzGutter",e.DdM(1,Bd))}function Yu(g,h){1&g&&(e.TgZ(0,"nz-tag",90),e._UZ(1,"i",91),e.TgZ(2,"span"),e._uU(3,"Loading\u2026"),e.qZA()())}const gd=function(g){return{$implicit:g}};function cu(g,h){if(1&g&&(e.TgZ(0,"nz-tag",94),e._UZ(1,"span",95),e.TgZ(2,"span",96),e._uU(3),e.qZA()()),2&g){e.oxw();const c=e.MAs(4),C=e.oxw().ngrxLet;e.xp6(2),e.Q6J("nzTooltipTitle",c)("nzTooltipTitleContext",e.VKq(3,gd,C.query)),e.xp6(1),e.hij(" Query Error",C.query.length>1?"s":""," ")}}function Cl(g,h){if(1&g&&(e.TgZ(0,"nz-tag",94)(1,"span",96)(2,"span",97)(3,"strong"),e._uU(4),e.qZA()()()()),2&g){e.oxw();const c=e.MAs(4),C=e.oxw().ngrxLet;e.xp6(1),e.Q6J("nzTooltipTitle",c)("nzTooltipTitleContext",e.VKq(3,gd,C.network)),e.xp6(3),e.hij(" Network Error",C.query.length>1?"s":""," ")}}function Hd(g,h){if(1&g&&(e.TgZ(0,"div"),e._uU(1),e.qZA()),2&g){const c=h.$implicit;e.xp6(1),e.hij(" ",c.message," ")}}function zl(g,h){1&g&&e.YNc(0,Hd,2,1,"div",8),2&g&&e.Q6J("ngForOf",h.$implicit)}function Yd(g,h){if(1&g&&(e.ynx(0),e.YNc(1,cu,4,5,"nz-tag",92),e.YNc(2,Cl,5,5,"nz-tag",92),e.YNc(3,zl,1,1,"ng-template",null,93,e.W1O),e.BQk()),2&g){const c=e.oxw().ngrxLet;e.xp6(1),e.Q6J("ngIf",c.query),e.xp6(1),e.Q6J("ngIf",c.network)}}function $d(g,h){if(1&g&&(e.ynx(0),e.YNc(1,Yd,5,2,"ng-container",10),e.BQk()),2&g){const c=h.ngrxLet;e.xp6(1),e.Q6J("ngIf",c)}}function $u(g,h){if(1&g){const c=e.EpF();e.TgZ(0,"div",98)(1,"nz-checkbox-group",99),e.NdJ("ngModelChange",function(le){e.CHM(c);const pt=e.oxw(2);return e.KtG(pt.onPreferenceChange$.next(le))}),e.ALo(2,"ngrxPush"),e.qZA()()}if(2&g){const c=e.oxw(2);e.xp6(1),e.Q6J("ngModel",e.lcZ(2,1,c.setPreference$))}}function Ud(g,h){if(1&g){const c=e.EpF();e.TgZ(0,"nz-row",79)(1,"nz-col",80),e.YNc(2,Yu,4,0,"nz-tag",81),e.ALo(3,"ngrxPush"),e.ALo(4,"ngrxPush"),e._UZ(5,"cvc-no-more-rows",82),e.ALo(6,"ngrxPush"),e.qZA(),e.TgZ(7,"nz-col",80),e.YNc(8,$d,2,1,"ng-container",3),e.qZA(),e.TgZ(9,"nz-col",80),e._UZ(10,"cvc-table-counts",83),e.qZA(),e.TgZ(11,"nz-col",84)(12,"nz-button-group")(13,"button",85),e.NdJ("click",function(){e.CHM(c);const le=e.oxw();return e.KtG(le.onResetFilter$.next())}),e._UZ(14,"span",86),e.qZA(),e.TgZ(15,"button",87),e._UZ(16,"span",88),e.qZA()(),e.YNc(17,$u,3,3,"ng-template",null,89,e.W1O),e.qZA()()}if(2&g){const c=e.MAs(18),C=e.oxw();e.Q6J("nzGutter",8),e.xp6(2),e.Q6J("ngIf",e.lcZ(3,7,C.loading$)&&e.lcZ(4,9,C.isFetchMore$)),e.xp6(3),e.Q6J("cvcShowTag",e.lcZ(6,11,C.noMoreRows$)),e.xp6(3),e.Q6J("ngrxLet",C.queryError$),e.xp6(2),e.Q6J("cvcTableCountsConnection",C.connection$),e.xp6(5),e.Q6J("nzPopoverContent",c)("nzPopoverTrigger","click")}}const oi=function(){return[]},P1=function(){return{x:"800px",y:"200px"}};let $l=((Vr=class{constructor(h,c,C){this.queryGQL=h,this.apollo=c,this.cdr=C,this.cvcSelectedIdsChange=new e.vpe,this.isScrolling=!1,this.colGuards=ul,this.onFetchMore$=new Ke.x,this.onPreferenceChange$=new ot.X([]),this.onResetFilter$=new Ke.x,this.onRowSelected$=new Ke.x,this.onScroll$=new ot.X("stop"),this.onSetSelectedRow$=new ot.X(new Set),this.queryError$=new Ke.x,this.queryRequest$=new Ke.x,this.queryResult$=new Ti.t(1),this.isFetchMore$=new ot.X(!1),this.noMoreRows$=new ot.X(!1),this.scrollToIndex$=new Ke.x,this.tableConfig=new Rl;const le=(0,ii.a)(this.tableConfig.getFilterStreams()),pt=(0,ii.a)(this.tableConfig.getSortStreams()).pipe((0,Ge.h)(Ft=>Ft.filter(Mn=>null!==Mn.value).length<=1));this.refetch$=(0,ii.a)([pt,le]).pipe((0,Ct.U)(([Ft,Mn])=>({query:"refetch",sort:Ft,filter:Mn}))),this.fetchMore$=this.onFetchMore$.pipe((0,Ct.U)(Ft=>({query:"fetchMore",fetchMore:{...Ft}}))),(0,pr.T)(this.refetch$,this.fetchMore$).pipe((0,qo.b)(50),(0,Pe.t)(this)).subscribe(Ft=>{const Mn=this.getQueryVars(Ft);this.queryRef?(this.queryError$.next({}),"refetch"===Ft.query?(this.isFetchMore$.next(!1),this.queryRef.refetch(Mn).then(Vn=>{(Vn.error||Vn.errors)&&this.queryError$.next(this.getRequestErrors(Vn))}).then(()=>{this.scrollToIndex$.next(0)})):(this.isFetchMore$.next(!0),this.queryRef.fetchMore({variables:Mn}).then(Vn=>{(Vn.error||Vn.errors)&&this.queryError$.next(this.getRequestErrors(Vn))}))):(this.isFetchMore$.next(!1),this.queryError$.next({}),this.queryRef=this.queryGQL.watch(Mn),this.queryRef.valueChanges.pipe((0,Pe.t)(this)).subscribe(Vn=>{this.queryResult$.next(Vn),(Vn.error||Vn.errors)&&this.queryError$.next(this.getRequestErrors(Vn))}))}),this.loading$=this.queryResult$.pipe((0,Ut.j)("loading"),(0,Pi.x)()),this.connection$=this.queryResult$.pipe((0,Ut.j)("data","browseVariants"),(0,Ge.h)(jn.ep)),this.pageInfo$=this.connection$.pipe((0,Ut.j)("pageInfo"),(0,Ge.h)(jn.ep)),this.row$=(0,ii.a)([this.connection$.pipe((0,Ut.j)("edges"),(0,Ge.h)(jn.ep),(0,Ct.U)(Ft=>Ft.map(Mn=>Mn.node))),this.onSetSelectedRow$]).pipe((0,Ct.U)(([Ft,Mn])=>Ft.map(Vn=>{if(Vn)return{...Vn,variant:{__typename:"Variant",id:Vn.id,name:Vn.name,link:Vn.link},gene:{__typename:"Gene",id:Vn.geneId,name:Vn.geneName,link:Vn.geneLink},selected:Mn.has(Vn.id)}}))),this.col$=new ot.X(this.tableConfig.get()),this.setPreference$=this.col$.pipe((0,Ct.U)(Ft=>this.getColPrefsFromTableConfig(Ft))),this.onPreferenceChange$.pipe((0,nt.M)(this.col$),(0,Ct.U)(([Ft,Mn])=>this.getTableConfigFromColPrefs(Ft,Mn)),(0,Pe.t)(this)).subscribe(Ft=>{this.col$.next(Ft)}),this.onSetTableFilter$=new ot.X([]),this.onSetTableFilter$.pipe((0,Pe.t)(this)).subscribe(Ft=>{const Mn=this.col$.getValue();Ft.forEach(Vn=>{const Bi=Mn.find(Ji=>Ji.key===Vn.key);if(void 0!==Bi.filter.inputType){const Ji=Bi.filter.options[0];if(null===Vn.value)return Bi.filter.options=[{...Ji,value:null}],void Bi.filter.changes.next(Vn);if(Array.isArray(Vn.value)&&0===Vn.value.length)return Bi.filter.options=[{...Ji,value:null}],void Bi.filter.changes.next({...Vn,value:null});let Co;Array.isArray(Vn.value)?Vn.value.length>0&&(Co=Vn.value[0]):Co=Vn.value;const J1=Bi.filter.typename;if(!J1||!Co)return void console.error(`variant-manager requires column config '${Bi.key}' provide a typename for cvcTablePrefs Input to set its filter`);const Tu=this.getEntityName(J1,Co);if(!Tu)return;Bi.filter.options=[{...Ji,value:Tu}],Bi.filter.changes.next({...Vn,value:Tu})}else dl(Bi)&&Bi.filter.changes.next(Vn)})}),this.onSetTablePref$=new ot.X([]),this.onSetTablePref$.pipe((0,nt.M)(this.setPreference$),(0,Ct.U)(([Ft,Mn])=>{const Vn=[];return Ft.forEach(Bi=>{let Ji=Mn.find(Co=>Co.value===Bi.value);Ji?Vn.push({...Ji,...Bi}):console.warn(`variant-manager onSetTablePref$ received updated preferences for column '${Bi.value}', but a column with that key could not be found.`)}),Vn}),(0,Pe.t)(this)).subscribe(Ft=>{this.onPreferenceChange$.next(Ft)}),this.onRowSelected$.pipe((0,nt.M)(this.onSetSelectedRow$),(0,Pe.t)(this)).subscribe(([Ft,Mn])=>{Ft.selected?Mn.add(Ft.id):Mn.delete(Ft.id),this.onSetSelectedRow$.next(Mn),this.cvcSelectedIdsChange.next(Array.from(Mn))}),this.onScroll$.pipe((0,Ct.U)(Ft=>"stop"!==Ft),(0,Pi.x)(),(0,Pe.t)(this)).subscribe(Ft=>{this.isScrolling=Ft,this.cdr.detectChanges()}),this.onScroll$.pipe((0,Ge.h)(Ft=>"bottom"===Ft),(0,nt.M)(this.pageInfo$),(0,Ct.U)(([Ft,Mn])=>Mn),(0,Pe.t)(this)).subscribe(Ft=>{Ft.hasNextPage||(this.noMoreRows$.next(!0),this.cdr.detectChanges(),setInterval(()=>this.noMoreRows$.next(!1)))})}ngAfterViewInit(){this.onResetFilter$.pipe((0,nt.M)((0,ui.of)(this.tableConfig.get())),(0,Pe.t)(this)).subscribe(([h,c])=>{const C=[];c.forEach(le=>{if(Ua(le)&&le.sort.changes&&le.sort.changes.next({key:le.key,value:le.sort.default??null}),dl(le)){const pt=le.filter.options.find(Ft=>1==Ft.byDefault)?.value;le.filter.changes&&le.filter.changes.next({key:le.key,value:pt||null})}C.push(le)}),this.col$.next(C)})}getQueryVars(h){const c=this.getQueryFilterParams(h);return{...this.getQuerySortParams(h),...c,...h.fetchMore}}getQuerySortParams(h){if(!h.sort)return;const C=h.sort.find(pt=>null!==pt.value);return C?{sortBy:{column:this.getSortColumnFromColKey(C.key),direction:"ascend"===C.value?bn.SrV.Asc:bn.SrV.Desc||void 0}}:void 0}getQueryFilterParams(h){let c={};return h.filter&&h.filter.forEach(C=>{c[ku[C.key]||C.key]=null===C.value||""===C.value?void 0:C.value}),c}getRequestErrors(h){return{query:h.errors,network:h.error}}getTableConfigFromColPrefs(h,c){return c.forEach(C=>{if(fa.find(pt=>pt===C.key))return;const le=h.find(pt=>pt.value===C.key);le&&(C.hidden=!le?.checked)}),[...c]}getColPrefsFromTableConfig(h){let c=[];return h.forEach(C=>{fa.find(le=>le===C.key)||c.push({label:C.tooltip||C.label,value:C.key,checked:!C.hidden})}),c}getSortColumnFromColKey(h){return xc[h]}getEntityName(h,c){const C={id:`${h}:${c}`,fragment:Xo.Ps`
                fragment Linkable${h}Entity on ${h} {
                  id
                  name
                  link
                }`},le=this.apollo.client.readFragment(C);if(le)return le.name;console.error(`variant-manager onSetTableFilter$ could not find cached entity ${h}:${c} to populate input filter`)}trackByIndex(h,c){return c?.id}ngOnChanges(h){if(h.cvcTableSettings){const c=h.cvcTableSettings.currentValue;void 0!==c&&this.onSetTableFilter$.next(c.filters)}if(h.cvcSelectedIds){const c=h.cvcSelectedIds.currentValue,C=new Set;void 0!==c&&c.forEach(le=>C.add(le)),this.onSetSelectedRow$.next(C)}}}).\u0275fac=function(h){return new(h||Vr)(e.Y36(bn.XQi),e.Y36(co._M),e.Y36(e.sBO))},Vr.\u0275cmp=e.Xpm({type:Vr,selectors:[["cvc-variant-manager"]],inputs:{cvcTableSettings:"cvcTableSettings",cvcSelectedIds:"cvcSelectedIds"},outputs:{cvcSelectedIdsChange:"cvcSelectedIdsChange"},features:[e.TTD],decls:16,vars:27,consts:[["nzSize","small",3,"nzTitle","nzExtra"],["cvcTableScroller","",3,"nzData","cvcTableScrollerQueryRef","cvcTableScrollerPageInfo","cvcTableScrollerToIndex","nzScroll","nzVirtualForTrackBy","nzVirtualItemSize","nzSize","nzFrontPagination","nzShowPagination","nzLoading","cvcTableScrollerOnScroll","cvcTableScrollerOnFetch"],["virtualTable",""],[4,"ngrxLet"],["columnFilterInput",""],["cardTitle",""],["extraTemplate",""],[1,"col-header-row"],[4,"ngFor","ngForOf"],[1,"filter-row"],[4,"ngIf"],[3,"nzShowCheckbox","nzWidth","nzAlign","nzLeft","nzRight",4,"ngIf"],[3,"nzColumnKey","nzAlign","nzWidth","nzLeft","nzRight","nzShowSort","nzSortFn","nzSortOrder","nzSortOrderChange",4,"ngIf"],["nz-tooltip","",3,"nzColumnKey","nzAlign","nzWidth","nzLeft","nzRight","nzTooltipTitle",4,"ngIf"],[3,"nzShowCheckbox","nzWidth","nzAlign","nzLeft","nzRight"],[3,"nzColumnKey","nzAlign","nzWidth","nzLeft","nzRight","nzShowSort","nzSortFn","nzSortOrder","nzSortOrderChange"],["nz-tooltip","",1,"col-header-label",3,"nzTooltipTitle"],["nz-tooltip","",3,"nzColumnKey","nzAlign","nzWidth","nzLeft","nzRight","nzTooltipTitle"],[3,"nzColumnKey","nzAlign","nzWidth","nzLeft","nzRight",4,"ngIf"],[3,"nzColumnKey","nzWidth","nzAlign","nzLeft","nzRight",4,"ngIf"],["class","attribute-filter","nzCustomFilter","",3,"nzColumnKey","nzWidth","nzAlign","nzLeft","nzRight","nzShowSort","nzSortFn","nzSortOrder","nzShowFilter","nzFilterFn","nzSortOrderChange",4,"ngIf"],["class","attribute-filter","nzCustomFilter","",3,"nzColumnKey","nzWidth","nzAlign","nzLeft","nzRight","nzFilterFn",4,"ngIf"],[3,"nzColumnKey","nzAlign","nzWidth","nzLeft","nzRight"],[3,"nzColumnKey","nzWidth","nzAlign","nzLeft","nzRight"],[3,"cvcInputType","cvcPlaceholder","cvcModel","cvcModelChange",4,"ngIf"],[3,"cvcInputType","cvcPlaceholder","cvcModel","cvcModelChange"],["nzCustomFilter","",1,"attribute-filter",3,"nzColumnKey","nzWidth","nzAlign","nzLeft","nzRight","nzShowSort","nzSortFn","nzSortOrder","nzShowFilter","nzFilterFn","nzSortOrderChange"],["enumTableFilter",""],[3,"nzDropdownMenu","nzActive"],["enumTagFilterTrigger",""],["nz-icon","","nzType","filter","nzTheme","fill"],["enumFilterMenu","nzDropdownMenu"],[3,"cvcColumnKey","cvcFilterOptions","cvcOption","cvcOptionChange"],["nzCustomFilter","",1,"attribute-filter",3,"nzColumnKey","nzWidth","nzAlign","nzLeft","nzRight","nzFilterFn"],["nz-icon","","nzType","search"],["textTagFilterMenu","nzDropdownMenu"],[1,"ant-table-filter-dropdown"],[1,"custom-input-dropdown"],[3,"cvcPlaceholder","cvcModel","cvcModelChange"],[3,"cvcPlaceholder","cvcModel","cvcModelChange",4,"ngIf"],["nz-virtual-scroll",""],[1,"data-row"],[3,"nzChecked","nzAlign","nzLeft","nzRight","nzCheckedChange",4,"ngIf"],[3,"nzAlign","nzLeft","nzRight",4,"ngIf"],["class","default-col-type",3,"nzAlign","nzLeft","nzRight",4,"ngIf"],[3,"nzChecked","nzAlign","nzLeft","nzRight","nzCheckedChange"],[3,"nzAlign","nzLeft","nzRight"],["entityTagList",""],["entityTag",""],["emptyEntityTagCell",""],[4,"ngIf","ngIfElse"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"cvcTagTemplate","cvcTagListConfig"],[3,"cvcCollectionTagConfig","cvcTagTemplate","cvcShowFullLabels"],[3,"cvcTruncateLabel","cvcLinkableEntity","cvcEmphasize","cvcShowPopover","cvcStatus","cvcFullWidth"],[3,"cvcEmptyCategory"],["cvcContext","compact",3,"cvcFullWidth","cvcAttrValue","cvcTooltip",4,"ngIf","ngIfElse"],["emptyEnumTagCell",""],["cvcContext","compact",3,"cvcFullWidth","cvcAttrValue","cvcTooltip"],["nz-tooltip","","style","width: 100%; cursor: help; color: #595959",3,"nzTooltipTitle",4,"ngIf","ngIfElse"],["emptyTextTagCell",""],["nz-tooltip","",2,"width","100%","cursor","help","color","#595959",3,"nzTooltipTitle"],["nz-icon","","nzType","align-left","nzTheme","outline"],[1,"default-col-type",3,"nzAlign","nzLeft","nzRight"],["staticList",""],["staticValue",""],["emptyDefaultCell",""],[3,"innerHtml"],["numericInput",""],["nzSize","small",3,"nzSuffix"],["nz-input","",3,"placeholder","ngModel","nzFilterChange"],["filterInput",""],["suffixIcon",""],["nz-icon","","nzType","search","style","color: #ddd",4,"ngIf"],["nz-icon","","class","ant-input-clear-icon","nzTheme","fill","nzType","close-circle",3,"click",4,"ngIf"],["nz-icon","","nzType","search",2,"color","#ddd"],["nz-icon","","nzTheme","fill","nzType","close-circle",1,"ant-input-clear-icon",3,"click"],["nzSize","small"],[2,"width","100%",3,"nzPlaceHolder","ngModel","nzMin","nzStep","ngModelChange"],[3,"nzGutter"],["nzFlex","auto"],["nzColor","processing",4,"ngIf"],[3,"cvcShowTag"],[3,"cvcTableCountsConnection"],["nzFlex","35px"],["nz-button","","type","button","nzType","default","nzSize","small",3,"click"],["nz-icon","","nzType","retweet","nzTheme","outline"],["nz-button","","nz-popover","","nzPopoverTitle","Visible Columns","type","button","nzType","default","nzSize","small",3,"nzPopoverContent","nzPopoverTrigger"],["nz-icon","","nzType","setting","nzTheme","outline"],["prefsPopover",""],["nzColor","processing"],["nz-icon","","nzType","sync","nzSpin",""],["nzColor","error","style","margin-left: 12px",4,"ngIf"],["queryError",""],["nzColor","error",2,"margin-left","12px"],["nz-icon","","nzType","question-circle","nzTheme","outline"],["nz-tooltip","",2,"cursor","help",3,"nzTooltipTitle","nzTooltipTitleContext"],["nz-typography",""],[1,"prefs-popover"],[3,"ngModel","ngModelChange"]],template:function(h,c){if(1&h&&(e.TgZ(0,"nz-card",0)(1,"nz-table",1,2),e.NdJ("cvcTableScrollerOnScroll",function(le){return c.onScroll$.next(le)})("cvcTableScrollerOnFetch",function(le){return c.onFetchMore$.next(le)}),e.ALo(3,"ngrxPush"),e.ALo(4,"ngrxPush"),e.ALo(5,"ngrxPush"),e.ALo(6,"ngrxPush"),e.ALo(7,"ngrxPush"),e.YNc(8,ad,5,2,"thead",3),e.YNc(9,Io,2,0,"tbody",3),e.qZA()(),e.YNc(10,wi,3,2,"ng-template",null,4,e.W1O),e.YNc(12,au,4,2,"ng-template",null,5,e.W1O),e.YNc(14,Ud,19,13,"ng-template",null,6,e.W1O)),2&h){const C=e.MAs(13),le=e.MAs(15);e.Q6J("nzTitle",C)("nzExtra",le),e.xp6(1),e.Q6J("nzData",e.lcZ(3,15,c.row$)||e.DdM(25,oi))("cvcTableScrollerQueryRef",c.queryRef)("cvcTableScrollerPageInfo",e.lcZ(4,17,c.pageInfo$))("cvcTableScrollerToIndex",e.lcZ(5,19,c.scrollToIndex$))("nzScroll",e.DdM(26,P1))("nzVirtualForTrackBy",c.trackByIndex)("nzVirtualItemSize",28)("nzSize","small")("nzFrontPagination",!1)("nzShowPagination",!1)("nzLoading",e.lcZ(6,21,c.loading$)&&!e.lcZ(7,23,c.isFetchMore$)),e.xp6(7),e.Q6J("ngrxLet",c.col$),e.xp6(1),e.Q6J("ngrxLet",c.col$)}},dependencies:[S.sg,S.O5,S.tP,Tt.J,xe,Dn,Ue,io,Rt.P,hi.H,t.Fj,t.JJ,t.On,P.eJ,Sn.ix,Sn.fY,hn.w,ln.dQ,w.t3,w.SK,yt.Ls,Ae.Zp,Ae.gB,Ae.ke,de.ZU,Gi.bd,kt.ub,Fo.RR,Yo._V,Yo.Rb,Rn.lU,Di.N8,Di.qD,Di.Uo,Di._C,Di.h7,Di.Om,Di.p0,Di.$Z,Di.zu,Di.qn,Di.Ql,Di.UX,Di.g6,Yt.j,Lt.SY,Ys,pl,ga,Wo,We.Do,U.A,tr,P.fM],styles:["[_nghost-%COMP%]{display:block}nz-card[_ngcontent-%COMP%]:first-of-type     .ant-card-body{padding:0;margin-top:1px}.table-info[_ngcontent-%COMP%]{margin-left:.5rem}tr.col-header-row[_ngcontent-%COMP%]   th.ant-table-cell[_ngcontent-%COMP%]{white-space:nowrap}tr.col-header-row[_ngcontent-%COMP%]   th.ant-table-cell.align-right[_ngcontent-%COMP%]     .ant-table-column-title{text-align:right}tr.filter-row[_ngcontent-%COMP%]   th.ant-table-cell[_ngcontent-%COMP%]{padding:3px 4px}tr.filter-row[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   nz-filter-trigger[_ngcontent-%COMP%]     span.ant-dropdown-trigger{margin-left:0;padding-right:12px}tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell[_ngcontent-%COMP%]{white-space:nowrap}tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell[_ngcontent-%COMP%]   .anticon.attribute-icon[_ngcontent-%COMP%]{color:#595959}tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell.overflow-ellipsis[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis}tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell.button-cell[_ngcontent-%COMP%]{padding:0}tr.data-row[_ngcontent-%COMP%]   td.align-right[_ngcontent-%COMP%], tr.col-header-row[_ngcontent-%COMP%]   th.ant-table-cell[_ngcontent-%COMP%]   .align-right[_ngcontent-%COMP%], tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell[_ngcontent-%COMP%]   .align-right[_ngcontent-%COMP%], tr.filter-row[_ngcontent-%COMP%]   th.ant-table-cell[_ngcontent-%COMP%]   .align-right[_ngcontent-%COMP%]{text-align:right}tr.data-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-of-type{padding-left:6px}tr.data-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-of-type   cvc-entity-tag[_ngcontent-%COMP%]{margin-left:6px}td.default-col-type[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis}.ant-table-filter-dropdown[_ngcontent-%COMP%]{padding:8px}.prefs-popover[_ngcontent-%COMP%]     nz-checkbox-group:first-of-type label{display:block}.prefs-popover[_ngcontent-%COMP%]     nz-checkbox-group:first-of-type label span{display:inline-block}"],changeDetection:0}),Vr);var kc;function lu(g,h){if(1&g&&(e.ynx(0),e.TgZ(1,"span"),e._uU(2),e.qZA(),e.BQk()),2&g){const c=h.ngrxLet;e.xp6(2),e.Oqu(c.message)}}function Tl(g,h){if(1&g&&e._uU(0),2&g){const c=e.oxw();e.Oqu(c.successMessage)}}$l=(0,Te.gn)([(0,Pe.c)()],$l);const vd=function(){return[0,0]};let uu=((kc=class{set cvcGeneId(h){h&&this.geneId$.next(h)}set cvcGeneName(h){h&&this.geneName$.next(h)}set cvcSearchString(h){h&&this.searchString$.next(h)}constructor(h,c){this.query=h,this.errors=c,this.cvcOnCreate=new e.vpe,this.form=new t.nJ({}),this.model={name:""},this.formLayout="horizontal",this.options={formState:{formLayout:this.formLayout}},this.onSubmit$=new Ke.x,this.searchString$=new ot.X(void 0),this.geneName$=new ot.X(void 0),this.geneId$=new ot.X(void 0),this.formMessageDisplay$=new ot.X({message:"Variant does not exist, create it?"}),this.queryMutator=new Nt.U(this.errors),this.addVariantMutator=new Nt.U(this.errors),this.minNameLength=3,this.fields=[{key:"geneId",hide:!0,props:{required:!0}},{key:"name",hide:!0,props:{minLength:this.minNameLength,required:!0}}],this.geneId$.pipe((0,Pe.t)(this)).subscribe(C=>{this.model.geneId=C}),this.searchString$.pipe((0,Pe.t)(this)).subscribe(C=>{this.model.name=C,this.formMessageDisplay$.next(void 0!==C&&C.length<this.minNameLength?{message:`New Variant name must be at least ${this.minNameLength} characters.`}:{message:"Variant does not exist, create it?"})}),this.onSubmit$.pipe((0,Pe.t)(this)).subscribe(C=>{console.log("variant-quick-add form model submitted.",C),this.submitVariant(C)})}submitVariant(h){h.name&&h.geneId?this.mutationState=this.addVariantMutator.mutate(this.query,{name:h.name,geneId:h.geneId},{},c=>{console.log("variant-quick-add submit data callback",c),c.addVariant&&(this.formMessageDisplay$.next({message:void 0}),setTimeout(()=>{c&&c.addVariant&&this.cvcOnCreate.next(c.addVariant.variant.id)},1e3))}):console.error("variant-quick-add form submitVariant requires model with valid name and geneId.")}ngOnChanges(h){if(h.cvcGeneId){const c=h.cvcGeneId.currentValue;this.geneId$.next(c),this.model={...this.model,geneId:c}}h.cvcGeneName&&this.geneName$.next(h.cvcGeneName.currentValue),h.cvcSearchString&&(this.model={...this.model,name:h.cvcSearchString.currentValue})}}).\u0275fac=function(h){return new(h||kc)(e.Y36(bn.MCG),e.Y36(jt.Y))},kc.\u0275cmp=e.Xpm({type:kc,selectors:[["cvc-variant-quick-add-form"]],inputs:{cvcGeneId:"cvcGeneId",cvcGeneName:"cvcGeneName",cvcSearchString:"cvcSearchString"},outputs:{cvcOnCreate:"cvcOnCreate"},features:[e.TTD],decls:18,vars:17,consts:[[4,"ngrxLet"],["entityType","Variant",3,"mutationState","successMessage"],["success",""],[3,"formGroup","ngSubmit"],[3,"nzGutter"],["nzSpan","24"],[3,"form","fields","model","options","modelChange"],["nz-button","","nzType","primary","nzBlock","",3,"disabled"]],template:function(h,c){if(1&h&&(e.YNc(0,lu,3,1,"ng-container",0),e.TgZ(1,"cvc-form-submission-status-display",1),e.YNc(2,Tl,1,1,"ng-template",null,2,e.W1O),e.TgZ(4,"form",3),e.NdJ("ngSubmit",function(){return c.onSubmit$.next(c.model)}),e.TgZ(5,"nz-row",4)(6,"nz-col",5)(7,"formly-form",6),e.NdJ("modelChange",function(le){return c.model=le}),e.qZA()(),e.TgZ(8,"nz-col",5)(9,"button",7),e._uU(10," Add\xa0 "),e.TgZ(11,"strong"),e._uU(12),e.ALo(13,"ngrxPush"),e.qZA(),e._uU(14," \xa0Variant\xa0"),e.TgZ(15,"i"),e._uU(16),e.ALo(17,"ngrxPush"),e.qZA()()()()()()),2&h){const C=e.MAs(3);e.Q6J("ngrxLet",c.formMessageDisplay$),e.xp6(1),e.Q6J("mutationState",c.mutationState)("successMessage",C),e.xp6(3),e.Q6J("formGroup",c.form),e.xp6(1),e.Q6J("nzGutter",e.DdM(16,vd)),e.xp6(2),e.Q6J("form",c.form)("fields",c.fields)("model",c.model)("options",c.options),e.xp6(2),e.Q6J("disabled",!c.form.valid),e.xp6(3),e.Oqu(e.lcZ(13,12,c.geneName$)),e.xp6(4),e.Oqu(e.lcZ(17,14,c.searchString$))}},dependencies:[gn.F,m.T7,t._Y,t.JL,P.eJ,Sn.ix,hn.w,ln.dQ,w.t3,w.SK,t.sg,P.fM],encapsulation:2,changeDetection:0}),kc);uu=(0,Te.gn)([(0,Pe.c)()],uu);const _a=["optionTemplates"],Ch=function(g,h){return{show:g,hide:h}};function _d(g,h){if(1&g){const c=e.EpF();e.TgZ(0,"nz-col",8)(1,"button",9),e.NdJ("click",function(){e.CHM(c);const le=e.oxw();return e.KtG(le.onShowMgrClick$.next())}),e._UZ(2,"span",10),e.ALo(3,"ngrxPush"),e.ALo(4,"ngrxPush"),e._uU(5," Manager "),e.qZA()()}if(2&g){const c=e.oxw();e.xp6(2),e.Q6J("ngClass",e.WLB(6,Ch,e.lcZ(3,2,c.showMgr$),!e.lcZ(4,4,c.showMgr$)))("nzType","caret-right")}}function Ml(g,h){if(1&g){const c=e.EpF();e.TgZ(0,"nz-col",11)(1,"cvc-variant-manager",12),e.NdJ("cvcSelectedIdsChange",function(le){e.CHM(c);const pt=e.oxw();return e.KtG(pt.onPopulate$.next(le))}),e.ALo(2,"ngrxPush"),e.qZA()()}if(2&g){const c=e.oxw();e.xp6(1),e.Q6J("cvcSelectedIds",e.lcZ(2,1,c.onVid$))}}function vs(g,h){if(1&g&&(e.ynx(0),e.TgZ(1,"em"),e._UZ(2,"span",19),e.ALo(3,"highlightTypeahead"),e.qZA(),e.BQk()),2&g){const c=e.oxw(2).$implicit,C=e.oxw().ngrxLet;e.xp6(2),e.Q6J("innerHtml",e.xi3(3,1,c.variantAliases.join(", "),C),e.oJD)}}function yd(g,h){1&g&&e._uU(0,"--")}function Cd(g,h){if(1&g&&(e._UZ(0,"cvc-entity-tag",15),e.TgZ(1,"span",16),e._uU(2," Aliases: "),e.YNc(3,vs,4,4,"ng-container",17),e.YNc(4,yd,1,0,"ng-template",null,18,e.W1O),e.qZA()),2&g){const c=e.MAs(5),C=e.oxw().$implicit,le=e.oxw().ngrxLet;e.Q6J("cvcDisableLink",!0)("cvcCacheId",C.__typename+":"+C.id)("cvcEmphasize",le),e.xp6(3),e.Q6J("ngIf",C.variantAliases.length>0)("ngIfElse",c)}}function zh(g,h){1&g&&(e.ynx(0),e.YNc(1,Cd,6,5,"ng-template",null,14,e.W1O),e.BQk())}function Th(g,h){if(1&g&&(e.ynx(0),e.YNc(1,zh,3,0,"ng-container",13),e.ALo(2,"ngrxPush"),e.BQk()),2&g){const c=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,c.result$))}}function jd(g,h){if(1&g){const c=e.EpF();e.TgZ(0,"div",20)(1,"cvc-entity-tag",21),e.NdJ("cvcOnClose",function(){const pt=e.CHM(c).$implicit,Ft=e.oxw();return e.KtG(Ft.onTagClose$.next(pt.nzValue))}),e.qZA()()}if(2&g){const c=h.$implicit,C=e.oxw();e.xp6(1),e.Q6J("cvcCacheId","Variant:"+c.nzValue)("cvcContext",C.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",C.props.isMultiSelect?"default":"closeable")}}function Ul(g,h){if(1&g){const c=e.EpF();e.TgZ(0,"cvc-variant-quick-add-form",22),e.NdJ("cvcOnCreate",function(le){e.CHM(c);const pt=e.oxw();return e.KtG(pt.onPopulate$.next(le))}),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.qZA()}if(2&g){const c=h.$implicit,C=e.oxw();e.Q6J("cvcSearchString",c)("cvcGeneId",e.lcZ(1,3,C.onGeneId$))("cvcGeneName",e.lcZ(2,5,C.onGeneName$))}}const Mh=function(){return[6,6]},bh=_t($t(),vi());class Qa extends bh{constructor(h,c,C,le){super(),this.taq=h,this.tq=c,this.geneQuery=C,this.changeDetectorRef=le,this.onModel$=new ro.y,this.defaultOptions={props:{label:"Variant",placeholder:"Search Variants",requireGene:!0,requireGenePlaceholderFn:pt=>`Search ${pt} Variants`,requireGenePrompt:"Select a Gene to search its Variants",isMultiSelect:!1,entityName:{singular:"Variant",plural:"Variants"},showManagerBtn:!1}},this.onGeneName$=new ot.X(void 0),this.onVid$=new Ti.t,this.onShowMgrClick$=new Ke.x,this.showMgr$=this.onShowMgrClick$.pipe((0,po.R)((pt,Ft)=>!pt,!1))}ngAfterViewInit(){this.configureBaseField(),this.configureEntitySelectField({typeaheadQuery:this.taq,tagQuery:this.tq,getTypeaheadVarsFn:this.getTypeaheadVarsFn,getTypeaheadResultsFn:this.getTypeaheadResultsFn,getTagQueryVarsFn:this.getTagQueryVarsFn,getTagQueryResultsFn:this.getTagQueryResultsFn,getSelectedItemOptionFn:this.getSelectedItemOptionFn,getSelectOptionsFn:this.getSelectOptionsFn,changeDetectorRef:this.changeDetectorRef,selectOpen$:this.selectOpen$,selectComponent:this.selectComponent}),this.state&&this.state.formReady$?this.state.formReady$.pipe((0,Ge.h)(h=>h),(0,xi.q)(1),(0,Pe.t)(this)).subscribe(h=>{this.configureField()}):this.configureField()}configureField(){this.configureStateConnections(),this.onVid$.pipe((0,Pe.t)(this)).subscribe(),this.onVid$.next(this.formControl.value),this.onModel$=(0,ii.a)([this.onGeneId$,this.onSearch$]).pipe((0,Ct.U)(([h,c])=>({geneId:h,name:c}))),this.onValueChange$.pipe((0,nt.M)(this.onVid$),(0,Pe.t)(this)).subscribe(([h,c])=>{Array.isArray(h)&&this.onVid$.next(h)})}configureStateConnections(){if(this.state&&this.props.requireGene){if(!this.state?.fields.geneId$)return void console.error(`${this.field.id} requireGene is set, but no geneId$ subject found on state.`);this.onGeneId$=this.state.fields.geneId$,this.onGeneId$.pipe((0,Pe.t)(this)).subscribe(h=>{this.onGeneId(h)})}}getTypeaheadVarsFn(h){return{name:h,geneId:this.selectedGeneId}}getTypeaheadResultsFn(h){return h.data.variants.nodes}getTagQueryVarsFn(h){return{variantId:h}}getTagQueryResultsFn(h){return h.data.variant}getSelectedItemOptionFn(h){return{value:h.id,label:h.name}}getSelectOptionsFn(h,c){return h.map((C,le)=>({label:c.get(le)||C.name,value:C.id}))}onGeneId(h){this.selectedGeneId=h,!h&&this.props.requireGene?(this.resetField(),this.props.description=this.props.requireGenePrompt,this.props.placeholder="Select A Gene",this.props.extraType="prompt",this.onGeneName$.next(void 0)):h&&(this.props.description=void 0,this.props.extraType=void 0,pa(this.geneQuery.fetch({geneId:h},{fetchPolicy:"cache-first"})).then(({data:c})=>{c?.gene?.name?(this.props.placeholder=this.props.requireGene?this.props.requireGenePlaceholderFn(c.gene.name):this.props.placeholder,this.onGeneName$.next(c.gene.name)):console.error(`${this.field.id} could not fetch gene name for Gene:${h}.`)}))}}Qa.\u0275fac=function(h){return new(h||Qa)(e.Y36(bn.nSb),e.Y36(bn.dDn),e.Y36(bn.DzV),e.Y36(e.sBO))},Qa.\u0275cmp=e.Xpm({type:Qa,selectors:[["ng-component"]],viewQuery:function(h,c){if(1&h&&e.Gf(_a,5,e.Rgc),2&h){let C;e.iGM(C=e.CRH())&&(c.optionTemplates=C)}},features:[e.qOj],decls:18,vars:36,consts:[[3,"nzGutter"],["nzFlex","auto"],[3,"cvcAddEntity","cvcAddEntityModel","cvcSelectMode","cvcCustomTemplate","cvcFormControl","cvcFormlyAttributes","cvcEntityName","cvcPlaceholder","cvcResults","cvcDisabled","cvcOptions","cvcSelectOpen","cvcShowError","cvcLoading","cvcParamName","cvcOnSearch","cvcOnOpenChange","cvcOnModelChange"],["nzFlex","50px",4,"ngIf"],["nzSpan","24","class","manager-drawer",4,"ngIf"],[4,"ngrxLet"],["selectedTemplate",""],["addVariant",""],["nzFlex","50px"],["type","button","nz-button","","nzBlock","",1,"manager-button",3,"click"],["nz-icon","",3,"ngClass","nzType"],["nzSpan","24",1,"manager-drawer"],[3,"cvcSelectedIds","cvcSelectedIdsChange"],[4,"ngFor","ngForOf"],["optionTemplates",""],[3,"cvcDisableLink","cvcCacheId","cvcEmphasize"],["nz-typography","","nzType","secondary"],[4,"ngIf","ngIfElse"],["noAliases",""],["nz-typography","","nzType","secondary",3,"innerHtml"],[1,"ant-select-selection-item-content"],[3,"cvcCacheId","cvcContext","cvcMode","cvcOnClose"],[3,"cvcSearchString","cvcGeneId","cvcGeneName","cvcOnCreate"]],template:function(h,c){if(1&h&&(e.TgZ(0,"nz-row",0)(1,"nz-col",1)(2,"cvc-entity-select",2),e.NdJ("cvcOnSearch",function(le){return c.onSearch$.next(le)})("cvcOnOpenChange",function(le){return c.onOpenChange$.next(le)})("cvcOnModelChange",function(le){return c.props.change&&c.props.change(c.field,le)}),e.ALo(3,"ngrxPush"),e.ALo(4,"ngrxPush"),e.ALo(5,"ngrxPush"),e.ALo(6,"ngrxPush"),e.ALo(7,"ngrxPush"),e.ALo(8,"ngrxPush"),e.ALo(9,"ngrxPush"),e.qZA()(),e.YNc(10,_d,6,9,"nz-col",3),e.YNc(11,Ml,3,3,"nz-col",4),e.ALo(12,"ngrxPush"),e.qZA(),e.YNc(13,Th,3,3,"ng-container",5),e.YNc(14,jd,2,3,"ng-template",null,6,e.W1O),e.YNc(16,Ul,3,7,"ng-template",null,7,e.W1O)),2&h){const C=e.MAs(15),le=e.MAs(17);e.Q6J("nzGutter",e.DdM(35,Mh)),e.xp6(2),e.Q6J("cvcAddEntity",le)("cvcAddEntityModel",e.lcZ(3,19,c.onModel$))("cvcSelectMode",c.props.isMultiSelect?"multiple":"default")("cvcCustomTemplate",C)("cvcFormControl",c.formControl)("cvcFormlyAttributes",c.field)("cvcEntityName",c.props.entityName)("cvcPlaceholder",c.props.placeholder)("cvcResults",e.lcZ(4,21,c.result$))("cvcDisabled",c.props.requireGene&&!e.lcZ(5,23,c.onGeneId$))("cvcOptions",e.lcZ(6,25,c.selectOption$))("cvcSelectOpen",e.lcZ(7,27,c.selectOpen$))("cvcShowError",c.showError)("cvcLoading",e.lcZ(8,29,c.isLoading$))("cvcParamName",e.lcZ(9,31,c.onGeneName$)),e.xp6(8),e.Q6J("ngIf",c.props.showManagerBtn),e.xp6(1),e.Q6J("ngIf",e.lcZ(12,33,c.showMgr$)),e.xp6(2),e.Q6J("ngrxLet",c.onSearch$)}},dependencies:[S.mk,S.sg,S.O5,je,Tt.J,P.eJ,Sn.ix,hn.w,ln.dQ,w.t3,w.SK,yt.Ls,de.ZU,$l,uu,U.A,P.fM],styles:[".typeahead-match[_ngcontent-%COMP%]{font-weight:700}  nz-input-group{border-color:#d9d9d9!important}"],changeDetection:0});const I1={types:[{name:"variant-select",wrappers:["form-field"],component:Qa},{name:"variant-multi-select",wrappers:["form-field"],component:Qa,defaultOptions:{props:{label:"Variants",isMultiSelect:!0}}}]};class Wa{}Wa.\u0275fac=function(h){return new(h||Wa)},Wa.\u0275mod=e.oAB({type:Wa}),Wa.\u0275inj=e.cJS({imports:[S.ez,En,rt.x,lt,ei.g,xt.s,Li,Uo,Ye,bs,ql.M,Ii.y,m.X0.forChild(I1),t.u5,P._N,nn.L,be.ic,Sn.sL,s.U5,w.Jb,yt.PV,Ae.o7,li.Qp,Qe.LV,de.ZJ,Sn.sL,Gi.vh,kt.Wr,Fo.b1,s.U5,w.Jb,yt.PV,Ae.o7,Yo.Zf,Rn.$6,Di.HQ,Yt.X,Lt.cg,de.ZJ,P.pP,t.UX]});var zd=a(3309),Td=a(2539);const A1=/\(/g,Eh=/\)/g,Md=/AND|OR/i,Za=/^(?<not>NOT\s)?\s*#VID(?<variantId>\d+)$/i,Gd=/\s+/;function du(g){return bd(g.replace(A1," ( ").replace(Eh," ) "))}function bd(g){let c,h=g.split(Gd),C=0,le=[],pt=[],Ft=[];for(let Ji of h)if("("==Ji)0!=C&&le.push(Ji),C+=1;else if(")"==Ji)if(C-=1,0==C){let Co=bd(le.join(" "));if("errorMessage"in Co)return Co;Ft.push(Co),pt.push("EXPR"),le=[]}else le.push(Ji);else C>0?le.push(Ji):pt.push(Ji);let Mn=0;for(let Ji of pt){let Co=Md.test(Ji);if(Co&&Mn==h.length-1)return{errorMessage:"Trailing boolean operator found. You cannot end your profile with an operator."};if(Co&&0==Mn)return{errorMessage:"The expression cannot start with AND/OR"};if(Co&&!c)c=F1(Ji);else if(Co&&c&&F1(Ji)!==c)return{errorMessage:"You cannot mix and match AND/OR in a single segment. Use parenthesis to logically group your variants."};Mn++}let Vn=[],Bi=pt.join(" ").split(Md);for(let Ji of Bi.map(Co=>Co.trim())){let Co=Za.exec(Ji);if(null===Co){if("EXPR"!==Ji)return{errorMessage:`Variant ${Ji} does not match the expected format. The token should be a #VID prepended with an optional NOT.`}}else Vn.push({not:!!Co[1],variantId:parseInt(Co[2])})}return{booleanOperator:c,variantComponents:Vn,complexComponents:Ft}}function F1(g){return"AND"==g.toUpperCase()?bn._Wm.And:bn._Wm.Or}var jl,Qd=a(7230);class hu{constructor(h){this.apollo=h,this.cvcOnSelect=new e.vpe,this.cvcOnVariantSelect=new e.vpe,this.modelChange$=new ot.X(void 0),this.layout="horizontal",this.finderState={formLayout:this.layout,fields:{geneId$:new ot.X(void 0),variantId$:new ot.X(void 0),variantMolecularProfile$:new ot.X(void 0)}},this.form=new t.nJ({}),this.model={geneId:void 0,variantId:void 0},this.options={formState:this.finderState},this.config=[{wrappers:["field-grid"],props:{grid:{cols:2}},fieldGroup:[{key:"geneId",type:"gene-select",props:{placeholder:"Select MP Gene",hideLabel:!0,layout:{showExtra:!1}}},{key:"variantId",type:"variant-select",props:{placeholder:"Select MP Variant",requireGene:!0,layout:{showExtra:!1},hideLabel:!0}}]}]}modelChange(h){if(!h?.variantId)return;const c=this.getSelectedVariant(h.variantId);c&&(this.model={geneId:void 0,variantId:void 0},this.cvcOnSelect.next(c.singleVariantMolecularProfile),this.cvcOnVariantSelect.next(c))}getSelectedVariant(h){if(!h)return;const c={id:`Variant:${h}`,fragment:co.Ps`
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
      `};let C;try{C=this.apollo.client.readFragment(c)}catch(le){console.error(le)}if(C)return C;console.error("MpFinderForm could not resolve its Variant from the cache")}}function N1(g,h){1&g&&e._uU(0,"Added new Molecular Profile")}function Wd(g,h){if(1&g&&(e.TgZ(0,"span",11),e._uU(1),e.qZA()),2&g){const c=h.ngIf;e.xp6(1),e.hij(" ",c," ")}}function pu(g,h){if(1&g&&(e.TgZ(0,"span",11),e._uU(1),e.qZA()),2&g){const c=h.ngIf;e.xp6(1),e.hij(" ",c," ")}}function Ed(g,h){if(1&g&&(e.TgZ(0,"span",11),e._UZ(1,"cvc-mp-tag-name",12),e.qZA()),2&g){const c=h.ngIf;e.xp6(1),e.Q6J("nameSegments",c)}}function Zd(g,h){if(1&g){const c=e.EpF();e.TgZ(0,"button",13),e.NdJ("click",function(){const pt=e.CHM(c).ngIf,Ft=e.oxw();return e.KtG(Ft.cvcOnSelect.next(pt))}),e.ALo(1,"ngrxPush"),e._uU(2," Select MP "),e.qZA()}if(2&g){const c=e.oxw();e.Q6J("disabled",e.lcZ(1,1,c.expressionError$))}}function L1(g,h){if(1&g){const c=e.EpF();e.TgZ(0,"button",13),e.NdJ("click",function(){e.CHM(c);const le=e.oxw();return e.KtG(le.onCreateNewMp$.next())}),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e._uU(3," Add MP "),e.qZA()}if(2&g){const c=e.oxw();e.Q6J("disabled",e.lcZ(1,1,c.expressionError$)||!e.lcZ(2,3,c.expressionSegment$))}}hu.\u0275fac=function(h){return new(h||hu)(e.Y36(co._M))},hu.\u0275cmp=e.Xpm({type:hu,selectors:[["cvc-mp-finder"]],outputs:{cvcOnSelect:"cvcOnSelect",cvcOnVariantSelect:"cvcOnVariantSelect"},decls:2,vars:6,consts:[["nz-form","",3,"nzLayout","formGroup"],[3,"form","fields","model","options","modelChange"]],template:function(h,c){1&h&&(e.TgZ(0,"form",0)(1,"formly-form",1),e.NdJ("modelChange",function(le){return c.modelChange(le)}),e.qZA()()),2&h&&(e.Q6J("nzLayout",c.layout)("formGroup",c.form),e.xp6(1),e.Q6J("form",c.form)("fields",c.config)("model",c.model)("options",c.options))},dependencies:[t._Y,t.JL,t.sg,m.T7,s.Lr],styles:["[_nghost-%COMP%]{display:block;width:100%}"],changeDetection:0});const Vc=function(){return[6,6]},k1=function(g){return{active:g}};let R1=((jl=class{constructor(h,c,C,le){this.previewMpGql=h,this.createMolecularProfileGql=c,this.mpEditorPrepopulate=C,this.networkErrorService=le,this.cvcOnSelect=new e.vpe,this.cvcOnEditPrepopulated=new e.vpe,this.expressionMessages={initial:"Start constructing a complex molecular profile to preview it here"},this.createMolecularProfileMutator=new Nt.U(this.networkErrorService),this.onInputChange$=new ot.X(void 0),this.onVariantSelect$=new Ke.x,this.onCreateNewMp$=new Ke.x,this.inputValue$=new ot.X(""),this.expressionError$=new ot.X(void 0),this.expressionMessage$=new ot.X(this.expressionMessages.initial),this.expressionSegment$=new Ke.x,this.existingMp$=new Ke.x}ngAfterViewInit(){this.onInputChange$.pipe((0,Ge.h)(jn.ep),(0,Ge.h)(h=>h.length>0),(0,Ct.U)(h=>{let c=du(h);return void 0!==this.cvcPrepopulateWithId&&this.cvcOnEditPrepopulated.next(!0),"errorMessage"in c?c.errorMessage:this.previewQueryRef.refetch({mpStructure:c})}),(0,Pe.t)(this)).subscribe(h=>{"string"==typeof h?(this.expressionMessage$.next(void 0),this.expressionError$.next(h),this.expressionSegment$.next(void 0)):h.then(({data:c,errors:C})=>{if(C)this.expressionMessage$.next(void 0),this.expressionError$.next(C.map(le=>le.message).join("\n")),this.expressionSegment$.next(void 0);else{this.expressionSegment$.next(c.previewMolecularProfileName.segments),this.expressionMessage$.next(void 0),this.expressionError$.next(void 0);this.existingMp$.next(c.previewMolecularProfileName.existingMolecularProfile||void 0)}})}),this.onVariantSelect$.pipe((0,nt.M)(this.onInputChange$),(0,Ct.U)(([h,c])=>c&&0!=c.length?`${c} #VID${h.id}`:`#VID${h.id}`),(0,Pe.t)(this)).subscribe(h=>{this.inputValue$.next(h),this.onInputChange$.next(h)}),this.previewQueryRef=this.previewMpGql.watch({}),this.previewMpName$=this.previewQueryRef.valueChanges.pipe((0,Ut.j)("data","previewMolecularProfileName"),(0,Ge.h)(jn.ep),(0,Ct.U)(h=>h.segments),(0,Pe.t)(this)),this.previewMpAlreadyExists$=this.previewQueryRef.valueChanges.pipe((0,Ut.j)("data","previewMolecularProfileName"),(0,Ge.h)(jn.ep),(0,Ct.U)(h=>h.existingMolecularProfile),(0,Pe.t)(this)),this.previewDeprecatedVariants$=this.previewQueryRef.valueChanges.pipe((0,Ut.j)("data","previewMolecularProfileName"),(0,Ge.h)(jn.ep),(0,Ct.U)(h=>h.deprecatedVariants),(0,Pe.t)(this)),this.onCreateNewMp$.pipe((0,nt.M)(this.onInputChange$),(0,Pe.t)(this)).subscribe(([h,c])=>{if(!c||0===c.length)return;let C=du(c);"errorMessage"in C||(this.state=this.createMolecularProfileMutator.mutate(this.createMolecularProfileGql,{mpStructure:C},{},le=>{setTimeout(()=>{le.createMolecularProfile&&this.cvcOnSelect.next(le.createMolecularProfile.molecularProfile)},1e3)}))})}prepopulateMp(h){if(!h)return this.expressionSegment$.next(void 0),this.expressionMessage$.next(this.expressionMessages.initial),void this.inputValue$.next("");pa(this.mpEditorPrepopulate.fetch({mpId:h},{fetchPolicy:"cache-first"})).then(({data:c})=>{if(!c?.molecularProfile?.id)return void console.error(`MpExpressionEditor could not fetch MolecalarProfile:${h} to prepulate editor fields.`);const C=c.molecularProfile.rawName.replace(/#GID(\d+)/g,"").trim();this.inputValue$.next(C),this.onInputChange$.next(C)})}ngOnChanges(h){h.cvcPrepopulateWithId&&this.prepopulateMp(h.cvcPrepopulateWithId.currentValue)}}).\u0275fac=function(h){return new(h||jl)(e.Y36(bn.mki),e.Y36(bn.zpu),e.Y36(bn.vjc),e.Y36(jt.Y))},jl.\u0275cmp=e.Xpm({type:jl,selectors:[["cvc-mp-expression-editor"]],inputs:{cvcPrepopulateWithId:"cvcPrepopulateWithId"},outputs:{cvcOnSelect:"cvcOnSelect",cvcOnEditPrepopulated:"cvcOnEditPrepopulated"},features:[e.TTD],decls:34,vars:31,consts:[["entityType","Molecular Profile",3,"mutationState","successMessage"],["success",""],[3,"nzGutter"],["nzFlex","100px"],[1,"finder-label"],["nzFlex","auto"],[1,"expression-preview",3,"ngClass"],["nz-typography","","nzType","secondary",4,"ngIf"],["type","button","nz-button","","nzType","primary","nzBlock","",3,"disabled","click",4,"ngIf"],["nz-input","","rows","1","placeholder","Enter #VID[id] and boolean tokens to construct a Molecular Profile expression.",2,"width","100%",3,"ngModel","ngModelChange"],[3,"cvcOnVariantSelect"],["nz-typography","","nzType","secondary"],[3,"nameSegments"],["type","button","nz-button","","nzType","primary","nzBlock","",3,"disabled","click"]],template:function(h,c){if(1&h&&(e.TgZ(0,"cvc-form-submission-status-display",0),e.YNc(1,N1,1,0,"ng-template",null,1,e.W1O),e.TgZ(3,"nz-row",2)(4,"nz-col",3)(5,"div",4),e._uU(6,"Preview:"),e.qZA()(),e.TgZ(7,"nz-col",5)(8,"div",6),e.ALo(9,"ngrxPush"),e.YNc(10,Wd,2,1,"span",7),e.ALo(11,"ngrxPush"),e.YNc(12,pu,2,1,"span",7),e.ALo(13,"ngrxPush"),e.YNc(14,Ed,2,1,"span",7),e.ALo(15,"ngrxPush"),e.qZA()(),e.TgZ(16,"nz-col",3),e.YNc(17,Zd,3,3,"button",8),e.ALo(18,"ngrxPush"),e.YNc(19,L1,4,5,"button",8),e.ALo(20,"ngrxPush"),e.qZA()(),e.TgZ(21,"nz-row",2)(22,"nz-col",3)(23,"div",4),e._uU(24,"Editor:"),e.qZA()(),e.TgZ(25,"nz-col",5)(26,"textarea",9),e.NdJ("ngModelChange",function(le){return c.onInputChange$.next(le)}),e.ALo(27,"ngrxPush"),e.qZA()()(),e.TgZ(28,"nz-row",2)(29,"nz-col",3)(30,"div",4),e._uU(31,"Append #VID:"),e.qZA()(),e.TgZ(32,"nz-col",5)(33,"cvc-mp-finder",10),e.NdJ("cvcOnVariantSelect",function(le){return c.onVariantSelect$.next(le)}),e.qZA()()()()),2&h){const C=e.MAs(2);e.Q6J("mutationState",c.state)("successMessage",C),e.xp6(3),e.Q6J("nzGutter",e.DdM(26,Vc)),e.xp6(5),e.Q6J("ngClass",e.VKq(27,k1,void 0!==e.lcZ(9,12,c.expressionSegment$))),e.xp6(2),e.Q6J("ngIf",e.lcZ(11,14,c.expressionMessage$)),e.xp6(2),e.Q6J("ngIf",e.lcZ(13,16,c.expressionError$)),e.xp6(2),e.Q6J("ngIf",e.lcZ(15,18,c.expressionSegment$)),e.xp6(3),e.Q6J("ngIf",e.lcZ(18,20,c.existingMp$)),e.xp6(2),e.Q6J("ngIf",!e.lcZ(20,22,c.existingMp$)),e.xp6(2),e.Q6J("nzGutter",e.DdM(29,Vc)),e.xp6(5),e.Q6J("ngModel",e.lcZ(27,24,c.inputValue$)),e.xp6(2),e.Q6J("nzGutter",e.DdM(30,Vc))}},dependencies:[S.mk,S.O5,t.Fj,t.JJ,t.On,Sn.ix,hn.w,ln.dQ,Ae.Zp,w.t3,w.SK,de.ZU,gn.F,Qd.C,hu,P.fM],styles:["[_nghost-%COMP%]{display:block;background-color:#f6f6f6;border:1px solid #DEDEDE;border-radius:4px;padding:8px}.expression-preview[_ngcontent-%COMP%]{width:100%;padding:3px;background-color:#f5f5f5;border:1px solid #CCCCCC;border-radius:2px}.expression-preview.active[_ngcontent-%COMP%]{background-color:#fff}.finder-label[_ngcontent-%COMP%]{font-weight:500;line-height:26px;text-align:right}"],changeDetection:0}),jl);R1=(0,Te.gn)([(0,Pe.c)()],R1);const Sd=["optionTemplates"];function Sh(g,h){if(1&g){const c=e.EpF();e.TgZ(0,"cvc-mp-finder",11),e.NdJ("cvcOnSelect",function(le){e.CHM(c);const pt=e.oxw(2);return e.KtG(pt.onMpSelect$.next(le))}),e.qZA()}}function Kd(g,h){1&g&&(e.TgZ(0,"div",12),e._uU(1," \xa0 "),e.TgZ(2,"span",13)(3,"i"),e._uU(4," Select a Molecular Profile with the expression editor "),e.qZA()()())}function rp(g,h){if(1&g){const c=e.EpF();e.TgZ(0,"cvc-entity-select",14),e.NdJ("cvcOnSearch",function(le){e.CHM(c);const pt=e.oxw(2);return e.KtG(pt.onSearch$.next(le))})("cvcOnModelChange",function(le){e.CHM(c);const pt=e.oxw(2);return e.KtG(pt.props.change&&pt.props.change(pt.field,le))}),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.ALo(3,"ngrxPush"),e.qZA()}if(2&g){const c=e.oxw(2),C=e.MAs(13);e.Q6J("cvcSelectMode",c.props.isMultiSelect?"multiple":"default")("cvcCustomTemplate",C)("cvcFormControl",c.formControl)("cvcFormlyAttributes",c.field)("cvcEntityName",c.props.entityName)("cvcPlaceholder",c.props.placeholder)("cvcResults",e.lcZ(1,15,c.result$))("cvcDisabled",c.props.disabled)("cvcAllowClear",!1)("cvcOptions",e.lcZ(2,17,c.selectOption$))("cvcShowError",c.showError)("cvcLoading",e.lcZ(3,19,c.isLoading$))("cvcBorderless",!0)("cvcSuffixIcon",null)("cvcShowArrow",!1)}}function xh(g,h){if(1&g&&(e.ynx(0),e.YNc(1,Sh,1,0,"cvc-mp-finder",8),e.YNc(2,Kd,5,0,"div",9),e.YNc(3,rp,4,21,"cvc-entity-select",10),e.BQk()),2&g){const c=h.ngrxLet,C=e.oxw();e.xp6(1),e.Q6J("ngIf",c.showFinder&&!C.editorOpen),e.xp6(1),e.Q6J("ngIf",!c.showSelect&&C.editorOpen),e.xp6(1),e.Q6J("ngIf",c.showSelect)}}function bl(g,h){if(1&g){const c=e.EpF();e.TgZ(0,"nz-col",15)(1,"cvc-mp-expression-editor",16),e.NdJ("cvcOnEditPrepopulated",function(le){e.CHM(c);const pt=e.oxw();return e.KtG(pt.onEditPrepopulated$.next(le))})("cvcOnSelect",function(le){e.CHM(c);const pt=e.oxw();return e.KtG(pt.onMpSelect$.next(le))}),e.ALo(2,"ngrxPush"),e.qZA()()}if(2&g){const c=e.oxw();e.xp6(1),e.Q6J("cvcPrepopulateWithId",e.lcZ(2,1,c.onMpId$))}}function Bc(g,h){if(1&g&&(e.ynx(0),e.TgZ(1,"em"),e._UZ(2,"span",23),e.ALo(3,"highlightTypeahead"),e.qZA(),e.BQk()),2&g){const c=e.oxw(2).$implicit,C=e.oxw().ngrxLet;e.xp6(2),e.Q6J("innerHtml",e.xi3(3,1,c.molecularProfileAliases.join(", "),C),e.oJD)}}function Dh(g,h){1&g&&e._uU(0,"--")}function Jd(g,h){if(1&g&&(e._UZ(0,"cvc-entity-tag",19),e.TgZ(1,"span",20),e._uU(2," Aliases: "),e.YNc(3,Bc,4,4,"ng-container",21),e.YNc(4,Dh,1,0,"ng-template",null,22,e.W1O),e.qZA()),2&g){const c=e.MAs(5),C=e.oxw().$implicit,le=e.oxw().ngrxLet;e.Q6J("cvcDisableLink",!0)("cvcCacheId",C.__typename+":"+C.id)("cvcEmphasize",le),e.xp6(3),e.Q6J("ngIf",C.molecularProfileAliases.length>0)("ngIfElse",c)}}function Oh(g,h){1&g&&(e.ynx(0),e.YNc(1,Jd,6,5,"ng-template",null,18,e.W1O),e.BQk())}function fu(g,h){if(1&g&&(e.ynx(0),e.YNc(1,Oh,3,0,"ng-container",17),e.ALo(2,"ngrxPush"),e.BQk()),2&g){const c=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,c.result$))}}function V1(g,h){if(1&g){const c=e.EpF();e.TgZ(0,"div",24)(1,"cvc-entity-tag",25),e.NdJ("cvcOnClose",function(){const pt=e.CHM(c).$implicit,Ft=e.oxw();return e.KtG(Ft.onTagClose$.next(pt.nzValue))}),e.qZA()()}if(2&g){const c=h.$implicit,C=e.oxw();e.xp6(1),e.Q6J("cvcCacheId","MolecularProfile:"+c.nzValue)("cvcContext",C.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",C.props.isMultiSelect?"default":"closeable")}}const sp=function(){return[8,12]},qd=function(g,h){return{show:g,hide:h}},Uu=_t($t(),vi());class ju extends Uu{constructor(h,c,C,le){super(),this.taq=h,this.tq=c,this.changeDetectorRef=C,this.apollo=le,this.showExpression=!1,this.editorOpen=!1,this.defaultOptions={props:{label:"Molecular Profile",placeholder:"Search Molecular Profiles",isMultiSelect:!1,description:"Select a Gene and Variant to specify a simple Molecular Profile, or use the Editor to specify a complex Molecular Profile",extraType:"prompt",entityName:{singular:"Molecular Profile",plural:"Molecular Profiles"},minSearchStrLength:1}},this.onMpSelect$=new ot.X(void 0),this.onMpId$=new Ti.t,this.onShowExpClick$=new Ke.x,this.showExp$=this.onShowExpClick$.pipe((0,po.R)((pt,Ft)=>!pt,!1),(0,kn.b)(pt=>this.editorOpen=pt)),this.selectDisplay$=new ot.X({showFinder:!0,showSelect:!1}),this.onEditPrepopulated$=new ot.X(!1)}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEntitySelectField({typeaheadQuery:this.taq,tagQuery:this.tq,getTypeaheadVarsFn:this.getTypeaheadVarsFn,getTypeaheadResultsFn:this.getTypeaheadResultsFn,getTagQueryVarsFn:this.getTagQueryVarsFn,getTagQueryResultsFn:this.getTagQueryResultsFn,getSelectedItemOptionFn:this.getSelectedItemOptionFn,getSelectOptionsFn:this.getSelectOptionsFn,changeDetectorRef:this.changeDetectorRef,selectOpen$:this.selectOpen$,selectComponent:this.selectComponent}),this.initialDescription=this.props.description,this.onValueChange$.pipe((0,Pe.t)(this)).subscribe(h=>{const c=void 0!==h;this.selectDisplay$.next({showFinder:!c,showSelect:c}),this.onMpId$.next(h),this.props.description=h?void 0:this.initialDescription}),this.onMpSelect$.pipe((0,Ge.h)(jn.ep),(0,Pe.t)(this)).subscribe(h=>{this.selectOption$.next([{label:h.name,value:h.id}]),this.editorOpen&&this.onShowExpClick$.next(),this.cdr.detectChanges(),this.field.formControl.setValue(h.id)})}configureStateConnections(){}getTypeaheadVarsFn(h,c){return{name:h,geneId:c}}getTypeaheadResultsFn(h){return h.data.molecularProfiles.nodes}getTagQueryVarsFn(h){return{molecularProfileId:h}}getTagQueryResultsFn(h){return h.data.molecularProfile}getSelectedItemOptionFn(h){return{value:h.id,label:h.name}}getSelectOptionsFn(h,c){return h.map((C,le)=>({label:c.get(le)||C.name,value:C.id}))}}ju.\u0275fac=function(h){return new(h||ju)(e.Y36(bn.F4e),e.Y36(bn.dGO),e.Y36(e.sBO),e.Y36(co._M))},ju.\u0275cmp=e.Xpm({type:ju,selectors:[["ng-component"]],viewQuery:function(h,c){if(1&h&&e.Gf(Sd,5,e.Rgc),2&h){let C;e.iGM(C=e.CRH())&&(c.optionTemplates=C)}},features:[e.qOj],decls:14,vars:16,consts:[[3,"nzGutter"],["nzFlex","auto"],[4,"ngrxLet"],["nzFlex","50px"],["type","button","nz-button","","nzBlock","",1,"expression-button",3,"click"],["nz-icon","",3,"ngClass","nzType"],["nzSpan","24","class","editor-drawer",4,"ngIf"],["selectedTemplate",""],[3,"cvcOnSelect",4,"ngIf"],["class","editor-message",4,"ngIf"],[3,"cvcSelectMode","cvcCustomTemplate","cvcFormControl","cvcFormlyAttributes","cvcEntityName","cvcPlaceholder","cvcResults","cvcDisabled","cvcAllowClear","cvcOptions","cvcShowError","cvcLoading","cvcBorderless","cvcSuffixIcon","cvcShowArrow","cvcOnSearch","cvcOnModelChange",4,"ngIf"],[3,"cvcOnSelect"],[1,"editor-message"],["nz-typography","","nzEllipsis","","nzType","secondary"],[3,"cvcSelectMode","cvcCustomTemplate","cvcFormControl","cvcFormlyAttributes","cvcEntityName","cvcPlaceholder","cvcResults","cvcDisabled","cvcAllowClear","cvcOptions","cvcShowError","cvcLoading","cvcBorderless","cvcSuffixIcon","cvcShowArrow","cvcOnSearch","cvcOnModelChange"],["nzSpan","24",1,"editor-drawer"],[3,"cvcPrepopulateWithId","cvcOnEditPrepopulated","cvcOnSelect"],[4,"ngFor","ngForOf"],["optionTemplates",""],[3,"cvcDisableLink","cvcCacheId","cvcEmphasize"],["nz-typography","","nzType","secondary"],[4,"ngIf","ngIfElse"],["noAliases",""],["nz-typography","","nzType","secondary",3,"innerHtml"],[1,"ant-select-selection-item-content"],[3,"cvcCacheId","cvcContext","cvcMode","cvcOnClose"]],template:function(h,c){1&h&&(e.TgZ(0,"nz-row",0)(1,"nz-col",1),e.YNc(2,xh,4,3,"ng-container",2),e.qZA(),e.TgZ(3,"nz-col",3)(4,"button",4),e.NdJ("click",function(){return c.onShowExpClick$.next()}),e._UZ(5,"span",5),e.ALo(6,"ngrxPush"),e.ALo(7,"ngrxPush"),e._uU(8,"Editor "),e.qZA()(),e.YNc(9,bl,3,3,"nz-col",6),e.ALo(10,"ngrxPush"),e.qZA(),e.YNc(11,fu,3,3,"ng-container",2),e.YNc(12,V1,2,3,"ng-template",null,7,e.W1O)),2&h&&(e.Q6J("nzGutter",e.DdM(12,sp)),e.xp6(2),e.Q6J("ngrxLet",c.selectDisplay$),e.xp6(3),e.Q6J("ngClass",e.WLB(13,qd,e.lcZ(6,6,c.showExp$),!e.lcZ(7,8,c.showExp$)))("nzType","caret-right"),e.xp6(4),e.Q6J("ngIf",e.lcZ(10,10,c.showExp$)),e.xp6(2),e.Q6J("ngrxLet",c.onSearch$))},dependencies:[S.mk,S.sg,S.O5,P.eJ,Sn.ix,hn.w,ln.dQ,yt.Ls,w.t3,w.SK,de.ZU,je,Tt.J,R1,hu,P.fM,U.A],styles:["form[_ngcontent-%COMP%]   span.hide[_ngcontent-%COMP%], .expression-button[_ngcontent-%COMP%]   span.hide[_ngcontent-%COMP%]{transform:rotate(0);transition:transform .2s linear}form[_ngcontent-%COMP%]   span.show[_ngcontent-%COMP%], .expression-button[_ngcontent-%COMP%]   span.show[_ngcontent-%COMP%]{transform:rotate(90deg);transition:transform .2s linear}.editor-message[_ngcontent-%COMP%]{padding:3px;border:1px solid #cccccc;border-radius:2px}"],data:{animation:[Td.mF,Td.MC]},changeDetection:0});const wh={types:[{name:"molecular-profile-select",wrappers:["form-field"],component:ju},{name:"molecular-profile-multi-select",wrappers:["form-field"],component:ju,defaultOptions:{props:{label:"Molecular Profiles",isMultiSelect:!0}}}]};class Gu{}Gu.\u0275fac=function(h){return new(h||Gu)},Gu.\u0275mod=e.oAB({type:Gu}),Gu.\u0275inj=e.cJS({imports:[S.ez,t.u5,t.UX,P._N,P.pP,m.X0.forChild(wh),nn.L,Sn.sL,Qe.LV,li.Qp,yt.PV,Ae.o7,w.Jb,Zt.zf,s.U5,be.ic,de.ZJ,ei.g,zd.r,lt,En,xt.s,rt.x]});var ap=a(9657);const $i=["optionTemplates"];function xd(g,h){if(1&g&&(e.TgZ(0,"nz-tag")(1,"strong"),e._uU(2),e.ALo(3,"formatAmp"),e.qZA()(),e.TgZ(4,"span",4),e._uU(5),e.qZA()),2&g){const c=e.oxw().$implicit,C=e.oxw();e.xp6(2),e.Oqu(e.xi3(3,2,c,"verbose")),e.xp6(3),e.Oqu(C.descriptionForCategory(c))}}function Xd(g,h){1&g&&(e.ynx(0),e.YNc(1,xd,6,5,"ng-template",null,3,e.W1O),e.BQk())}function Ph(g,h){if(1&g){const c=e.EpF();e.TgZ(0,"nz-tag",8),e.NdJ("nzOnClose",function(le){e.CHM(c);const pt=e.oxw(2);return e.KtG(pt.onTagClose$.next(le))}),e.TgZ(1,"strong"),e._uU(2),e.ALo(3,"formatAmp"),e.qZA()()}if(2&g){const c=e.oxw().$implicit;e.xp6(2),e.Oqu(e.xi3(3,1,c.nzValue,"verbose"))}}function Ih(g,h){if(1&g&&(e.ynx(0),e._uU(1),e.ALo(2,"formatAmp"),e.BQk()),2&g){const c=e.oxw().$implicit;e.xp6(1),e.hij(" ",e.xi3(2,1,c.nzValue,"verbose")," ")}}function Ah(g,h){if(1&g&&(e.TgZ(0,"div",5),e.YNc(1,Ph,4,4,"nz-tag",6),e.YNc(2,Ih,3,4,"ng-container",7),e.qZA()),2&g){const c=e.oxw();e.xp6(1),e.Q6J("ngIf",!c.props.isMultiSelect),e.xp6(1),e.Q6J("ngIf",c.props.isMultiSelect)}}const eh=new Map([[bn.iwm.Na,"Not Applicable"],[bn.iwm.TierILevelA,"Biomarkers showing therapeutic response to FDA-approved therapy, or therapy included in professional guidelines."],[bn.iwm.TierILevelB,"Biomarkers showing therapeutic response based on well-powered studies with consensus from experts in the field."],[bn.iwm.TierIiLevelC,"FDA-approved therapies for different tumor types or investigational therapies, or multiple small published studies with some consensus."],[bn.iwm.TierIiLevelD,"Biomarkers that show plausible therapeutic significance based on preclinical studies."],[bn.iwm.TierIii,"Somatic variants in cancer genes reported in the same or different cancer types with unknown clinical significance and variants in cancer genes that have not been reported in any cancers."],[bn.iwm.TierIv,"Benign or likely benign germline variants observed at significant allele frequencies in the general population or specific subpopulation."]]),th=_t($t(),ht());class mu extends th{constructor(h){super(),this.cdr=h,this.defaultOptions={props:{label:"AMP/ASCO/CAP Category",required:!1,isMultiSelect:!1,placeholder:"Select AMP/ASCO/CAP Category"}},this.ampCategoryEnum$=new ot.X([])}descriptionForCategory(h){return eh.get(h)}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEnumSelectField({optionEnum$:this.ampCategoryEnum$,optionTemplate$:this.optionTemplate$,changeDetectorRef:this.cdr}),this.configurePlaceholder()}configureStateConnections(){this.props.tooltip="If applicable, please provide the AMP/ASCO/CAP somatic variant classification.",this.ampCategoryEnum$.next((0,No.o6)(bn.iwm).map(h=>h)),this.optionTemplates||console.error(`${this.field.id} could not find its optionTemplates QueryList to populate its select options, so simple text labels will be displayed.`),this.optionTemplate$=this.optionTemplates?.changes.pipe((0,Ct.U)(h=>h.map(c=>c))),this.state&&(this.state.requires.requiresAmpLevel$?this.onRequiresAmpCategory$=this.state.requires.requiresAmpLevel$:console.warn(`${this.field.id} field's form provides a state, but could not find requiresAmpLevel$ subject to attach.`),this.onValueChange$.pipe((0,Pe.t)(this)).subscribe(h=>{h?(this.props.extraType=void 0,this.props.description=eh.get(h)):this.props.description="Select an Assertion Type to select its AMP Category"}))}configurePlaceholder(){this.placeholder$=new ot.X(this.props.placeholder),this.onRequiresAmpCategory$&&this.onRequiresAmpCategory$.pipe((0,Pi.x)(),(0,Pe.t)(this)).subscribe(h=>{this.props.extraType=void 0,h?(this.formControl.value||(this.props.extraType="description",this.props.description='Please provide the AMP/ASCO/CAP <a href="https://pubmed.ncbi.nlm.nih.gov/27993330/" target="_blank">somatic variant classification</a>.'),this.props.required=!0,this.props.disabled=!1):(this.props.required=!1,this.props.disabled=!0,this.resetField()),this.cdr.markForCheck()})}}mu.\u0275fac=function(h){return new(h||mu)(e.Y36(e.sBO))},mu.\u0275cmp=e.Xpm({type:mu,selectors:[["cvc-amp-category-select"]],viewQuery:function(h,c){if(1&h&&e.Gf($i,5,e.Rgc),2&h){let C;e.iGM(C=e.CRH())&&(c.optionTemplates=C)}},features:[e.qOj],decls:7,vars:15,consts:[[3,"cvcFormControl","cvcFormlyAttributes","cvcSelectMode","cvcPlaceholder","cvcCustomTemplate","cvcOptions","cvcShowError","cvcDisabled"],[4,"ngFor","ngForOf"],["selectedTemplate",""],["optionTemplates",""],["nz-typography","","nzType","secondary"],[1,"ant-select-selection-item-content"],["nzMode","closeable",3,"nzOnClose",4,"ngIf"],[4,"ngIf"],["nzMode","closeable",3,"nzOnClose"]],template:function(h,c){if(1&h&&(e._UZ(0,"cvc-enum-select",0),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.YNc(3,Xd,3,0,"ng-container",1),e.ALo(4,"ngrxPush"),e.YNc(5,Ah,3,2,"ng-template",null,2,e.W1O)),2&h){const C=e.MAs(6);e.Q6J("cvcFormControl",c.formControl)("cvcFormlyAttributes",c.field)("cvcSelectMode",c.props.isMultiSelect?"multiple":"default")("cvcPlaceholder",e.lcZ(1,9,c.placeholder$))("cvcCustomTemplate",C)("cvcOptions",e.lcZ(2,11,c.selectOption$))("cvcShowError",c.showError)("cvcDisabled",c.props.disabled),e.xp6(3),e.Q6J("ngForOf",e.lcZ(4,13,c.ampCategoryEnum$))}},dependencies:[S.sg,S.O5,Yt.j,de.ZU,Dt,P.fM,ap.t]});const gu={types:[{name:"amp-category-select",wrappers:["form-field"],component:mu},{name:"amp-category-multi-select",wrappers:["form-field"],component:mu,defaultOptions:{props:{label:"AMP/ASCO/CAP Categories",isMultiSelect:!0}}}]};class vu{}vu.\u0275fac=function(h){return new(h||vu)},vu.\u0275mod=e.oAB({type:vu}),vu.\u0275inj=e.cJS({imports:[S.ez,t.UX,P._N,P.pP,m.X0.forChild(gu),Yt.X,de.ZJ,xt.s,lt,ie]});const _i=["optionTemplates"];function Gl(g,h){if(1&g&&(e.ynx(0),e.TgZ(1,"em")(2,"span",6),e._uU(3),e.qZA()(),e.BQk()),2&g){const c=e.oxw(2).$implicit;e.xp6(3),e.Oqu(c.description)}}function nh(g,h){if(1&g&&(e.TgZ(0,"nz-tag",5),e._uU(1),e.qZA(),e.TgZ(2,"span",6),e.YNc(3,Gl,4,1,"ng-container",7),e.qZA()),2&g){const c=e.oxw().$implicit;e.xp6(1),e.Oqu(c.code),e.xp6(2),e.Q6J("ngIf",c.description)}}function ih(g,h){1&g&&(e.ynx(0),e.YNc(1,nh,4,2,"ng-template",null,4,e.W1O),e.BQk())}function _u(g,h){if(1&g&&(e.ynx(0),e.YNc(1,ih,3,0,"ng-container",3),e.ALo(2,"ngrxPush"),e.BQk()),2&g){const c=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,c.result$))}}function z(g,h){if(1&g){const c=e.EpF();e.TgZ(0,"div",8)(1,"cvc-entity-tag",9),e.NdJ("cvcOnClose",function(){const pt=e.CHM(c).$implicit,Ft=e.oxw();return e.KtG(Ft.onTagClose$.next(pt.nzValue))}),e.qZA()()}if(2&g){const c=h.$implicit,C=e.oxw();e.xp6(1),e.Q6J("cvcDisableLink",!0)("cvcHasTooltip",!0)("cvcCacheId","AcmgCode:"+c.nzValue)("cvcContext",C.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",C.props.isMultiSelect?"default":"closeable")}}const d=_t($t(),vi());class p extends d{constructor(h,c,C){super(),this.taq=h,this.tq=c,this.changeDetectorRef=C,this.defaultOptions={props:{entityName:{singular:"ACMG/AMP Code",plural:"ACMG/AMP Codes"},isMultiSelect:!1,requireType:!0,tooltip:"If applicable, please provide evidence criteria from the standards and guidelines for interpretation of sequence variants from ACMG/AMP.",placeholder:"Search ACMG/AMP Codes",requireTypePromptFn:(le,pt)=>`Select an ${le} Type to search associated ACMG Code(s)`}},this.placeholder$=new ot.X(void 0)}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEntitySelectField({typeaheadQuery:this.taq,typeaheadParam$:void 0,tagQuery:this.tq,getTypeaheadVarsFn:this.getTypeaheadVarsFn,getTypeaheadResultsFn:this.getTypeaheadResultsFn,getTagQueryVarsFn:this.getTagQueryVarsFn,getTagQueryResultsFn:this.getTagQueryResultsFn,getSelectedItemOptionFn:this.getSelectedItemOptionFn,getSelectOptionsFn:this.getSelectOptionsFn,changeDetectorRef:this.changeDetectorRef,selectComponent:this.selectComponent}),this.configurePlaceholders()}configureStateConnections(){if(this.state&&(this.stateEntityName=this.state.entityName,this.state.requires.requiresAcmgCodes$?this.onRequiresAcmgCode$=this.state.requires.requiresAcmgCodes$:console.warn(`${this.field.id} field's form provides a state, but could not find requiresAcmgCodes$ subject to attach.`),this.props.requireType)){const h=`${this.stateEntityName.toLowerCase()}Type$`;this.state.fields[h]?this.onEntityType$=this.state.fields[h]:console.error(`${this.field.id} requireType is true, however form state does not provide Subject ${h}.`)}}configurePlaceholders(){this.placeholder$.next(this.props.placeholders),this.onRequiresAcmgCode$&&this.onEntityType$&&(0,ii.a)([this.onRequiresAcmgCode$,this.onEntityType$]).pipe((0,Pi.x)(),(0,Pe.t)(this)).subscribe(([h,c])=>{!h&&c?(this.props.required=!1,this.props.disabled=!0,this.props.description=`${(0,K.E)(c)} ${this.state.entityName} does not include associated ACMG/AMP Code(s)`,this.props.extraType="prompt",this.resetField(),this.cdr.markForCheck()):this.props.requireType&&!c?(this.props.required=!1,this.props.disabled=!0,this.props.description=this.props.requireTypePromptFn(this.state.entityName,this.props.isMultiSelect),this.props.extraType="prompt"):h?(this.props.required=!0,this.props.disabled=!1,this.props.description='Please provide evidence criteria from the standards and guidelines for interpretation of sequence variants from ACMG/AMP in <a href="https://pubmed.ncbi.nlm.nih.gov/25741868/" target="_blank">Richards et. al. 2015</a>.',this.props.extraType="description"):(!h&&this.formControl.value||this.props.requireType&&!c&&this.formControl.value)&&this.resetField()})}getTypeaheadVarsFn(h){return{code:h}}getTypeaheadResultsFn(h){return h.data.acmgCodesTypeahead}getTagQueryResultsFn(h){return h.data.acmgCode}getTagQueryVarsFn(h){return{id:h}}getSelectedItemOptionFn(h){return{value:h.id,label:h.code}}getSelectOptionsFn(h,c){return h.map((C,le)=>(console.log(C),{label:c.get(le)||C.code,value:C.id}))}}p.\u0275fac=function(h){return new(h||p)(e.Y36(bn.O2u),e.Y36(bn.AIY),e.Y36(e.sBO))},p.\u0275cmp=e.Xpm({type:p,selectors:[["cvc-acmg-code-select"]],viewQuery:function(h,c){if(1&h&&e.Gf(_i,5,e.Rgc),2&h){let C;e.iGM(C=e.CRH())&&(c.optionTemplates=C)}},features:[e.qOj],decls:9,vars:22,consts:[[3,"cvcSelectMode","cvcCustomTemplate","cvcFormControl","cvcFormlyAttributes","cvcEntityName","cvcPlaceholder","cvcResults","cvcOptions","cvcShowError","cvcDisabled","cvcLoading","cvcOnSearch","cvcOnOpenChange","cvcOnModelChange"],[4,"ngrxLet"],["selectedTemplate",""],[4,"ngFor","ngForOf"],["optionTemplates",""],["nz-tooltip",""],["nz-typography","","nzType","secondary"],[4,"ngIf"],[1,"ant-select-selection-item-content"],[3,"cvcDisableLink","cvcHasTooltip","cvcCacheId","cvcContext","cvcMode","cvcOnClose"]],template:function(h,c){if(1&h&&(e.TgZ(0,"cvc-entity-select",0),e.NdJ("cvcOnSearch",function(le){return c.onSearch$.next(le)})("cvcOnOpenChange",function(le){return c.onOpenChange$.next(le)})("cvcOnModelChange",function(le){return c.props.change&&c.props.change(c.field,le)}),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.ALo(3,"ngrxPush"),e.ALo(4,"ngrxPush"),e.ALo(5,"ngrxPush"),e.qZA(),e.YNc(6,_u,3,3,"ng-container",1),e.YNc(7,z,2,5,"ng-template",null,2,e.W1O)),2&h){const C=e.MAs(8);e.Q6J("cvcSelectMode",c.props.isMultiSelect?"multiple":"default")("cvcCustomTemplate",C)("cvcFormControl",c.formControl)("cvcFormlyAttributes",c.field)("cvcEntityName",c.props.entityName)("cvcPlaceholder",e.lcZ(1,12,c.placeholder$))("cvcResults",e.lcZ(2,14,c.result$))("cvcOptions",e.lcZ(3,16,c.selectOption$))("cvcShowError",c.showError)("cvcDisabled",c.onRequiresAcmgCode$&&!e.lcZ(4,18,c.onRequiresAcmgCode$))("cvcLoading",e.lcZ(5,20,c.isLoading$)),e.xp6(6),e.Q6J("ngrxLet",c.onSearch$)}},dependencies:[S.sg,S.O5,P.eJ,Lt.SY,de.ZU,Yt.j,je,Tt.J,P.fM],changeDetection:0});const v={types:[{name:"acmg-code-select",wrappers:["form-field"],component:p,defaultOptions:{props:{label:"ACMG/AMP Code"}}},{name:"acmg-code-multi-select",wrappers:["form-field"],component:p,defaultOptions:{props:{isMultiSelect:!0,label:"ACMG/AMP Code(s)"}}}]};class y{}y.\u0275fac=function(h){return new(h||y)},y.\u0275mod=e.oAB({type:y}),y.\u0275inj=e.cJS({imports:[S.ez,t.UX,P._N,P.pP,m.X0.forChild(v),nn.L,Sn.sL,Qe.LV,Rn.$6,li.Qp,yt.PV,Ae.o7,w.Jb,Lt.cg,Zt.zf,s.U5,be.ic,de.ZJ,Yt.X,lt,En,xt.s,rt.x,Os]});const D=["optionTemplates"];function W(g,h){if(1&g&&(e.ynx(0),e.TgZ(1,"em")(2,"span",6),e._uU(3),e.qZA()(),e.BQk()),2&g){const c=e.oxw(2).$implicit;e.xp6(3),e.Oqu(c.description)}}function _e(g,h){if(1&g&&(e.TgZ(0,"nz-tag",5),e._uU(1),e.qZA(),e.TgZ(2,"span",6),e.YNc(3,W,4,1,"ng-container",7),e.qZA()),2&g){const c=e.oxw().$implicit;e.xp6(1),e.Oqu(c.code),e.xp6(2),e.Q6J("ngIf",c.description)}}function we(g,h){1&g&&(e.ynx(0),e.YNc(1,_e,4,2,"ng-template",null,4,e.W1O),e.BQk())}function Je(g,h){if(1&g&&(e.ynx(0),e.YNc(1,we,3,0,"ng-container",3),e.ALo(2,"ngrxPush"),e.BQk()),2&g){const c=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,c.result$))}}function gt(g,h){if(1&g){const c=e.EpF();e.TgZ(0,"div",8)(1,"cvc-entity-tag",9),e.NdJ("cvcOnClose",function(){const pt=e.CHM(c).$implicit,Ft=e.oxw();return e.KtG(Ft.onTagClose$.next(pt.nzValue))}),e.qZA()()}if(2&g){const c=h.$implicit,C=e.oxw();e.xp6(1),e.Q6J("cvcDisableLink",!0)("cvcHasTooltip",!0)("cvcCacheId","ClingenCode:"+c.nzValue)("cvcContext",C.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",C.props.isMultiSelect?"default":"closeable")}}const Mt=_t($t(),vi());class wt extends Mt{constructor(h,c,C){super(),this.taq=h,this.tq=c,this.changeDetectorRef=C,this.exclusiveCodes=new Set,this.exclusiveSelected=!1,this.defaultOptions={props:{entityName:{singular:"ClinGen/CGC/VICC Code",plural:"ClinGen/CGC/VICC Codes"},isMultiSelect:!1,requireType:!0,tooltip:"If applicable, please provide evidence classifications from the Standards for the classification of pathogenicity of somatic variants in cancer (oncogenicity).",placeholder:"Search ClinGen/CGC/VICC Codes",requireTypePromptFn:(le,pt)=>`Select an ${le} Type to search associated ClinGen Code(s)`}},this.placeholder$=new ot.X(void 0)}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEntitySelectField({typeaheadQuery:this.taq,typeaheadParam$:void 0,tagQuery:this.tq,getTypeaheadVarsFn:this.getTypeaheadVarsFn,getTypeaheadResultsFn:this.getTypeaheadResultsFn,getTagQueryVarsFn:this.getTagQueryVarsFn,getTagQueryResultsFn:this.getTagQueryResultsFn,getSelectedItemOptionFn:this.getSelectedItemOptionFn,getSelectOptionsFn:this.getSelectOptionsFn,changeDetectorRef:this.changeDetectorRef,selectComponent:this.selectComponent}),this.configurePlaceholders(),this.onValueChange$.pipe((0,Pe.t)(this)).subscribe(h=>{if(h&&Array.isArray(h)&&h.length>1){const c=h.find(C=>this.exclusiveCodes.has(C));c?(this.previousDescription=this.props.description,this.previousDescriptionType=this.props.extraType,this.props.description="You have selected N/A which precludes selecting any other codes. Please remove it if you wish to select additional codes.",this.exclusiveSelected=!0,this.formControl.setValue([c])):this.exclusiveSelected=!1}this.previousDescription&&!this.exclusiveSelected&&(this.props.description=this.previousDescription,this.props.extraType=this.previousDescriptionType),this.cdr.detectChanges()})}configureStateConnections(){if(this.state&&(this.stateEntityName=this.state.entityName,this.state.requires.requiresClingenCodes$?this.onRequiresClingenCode$=this.state.requires.requiresClingenCodes$:console.warn(`${this.field.id} field's form provides a state, but could not find requiresClingenCodes$ subject to attach.`),this.props.requireType)){const h=`${this.stateEntityName.toLowerCase()}Type$`;this.state.fields[h]?this.onEntityType$=this.state.fields[h]:console.error(`${this.field.id} requireType is true, however form state does not provide Subject ${h}.`)}}configurePlaceholders(){this.placeholder$.next(this.props.placeholders),this.onRequiresClingenCode$&&this.onEntityType$&&(0,ii.a)([this.onRequiresClingenCode$,this.onEntityType$]).pipe((0,Pi.x)(),(0,Pe.t)(this)).subscribe(([h,c])=>{!h&&c?(this.props.required=!1,this.props.disabled=!0,this.props.description=`${(0,K.E)(c)} ${this.state.entityName} does not include associated ClinGen/CGC/VICC Code(s)`,this.props.extraType="prompt",this.resetField(),this.cdr.markForCheck()):this.props.requireType&&!c?(this.props.required=!1,this.props.disabled=!0,this.props.description=this.props.requireTypePromptFn(this.state.entityName,this.props.isMultiSelect),this.props.extraType="prompt"):h?(this.props.required=!0,this.props.disabled=!1,this.props.description='Please provide the evidence classifications from the Standards for the classification of pathogenicity of somatic variants in cancer (oncogenicity) in <a href="https://pubmed.ncbi.nlm.nih.gov/25741868/" target="_blank">Horak et. al. 2022.</a>.',this.props.extraType="description"):(!h&&this.formControl.value||this.props.requireType&&!c&&this.formControl.value)&&this.resetField()})}getTypeaheadVarsFn(h){return{code:h}}getTypeaheadResultsFn(h){return h.data.clingenCodesTypeahead.forEach(c=>{c.exclusive&&this.exclusiveCodes.add(c.id)}),h.data.clingenCodesTypeahead}getTagQueryResultsFn(h){return h.data.clingenCode}getTagQueryVarsFn(h){return{id:h}}getSelectedItemOptionFn(h){return{value:h.id,label:h.code}}getSelectOptionsFn(h,c){return h.map((C,le)=>({label:c.get(le)||C.code,value:C.id}))}}wt.\u0275fac=function(h){return new(h||wt)(e.Y36(bn.E2B),e.Y36(bn.R8F),e.Y36(e.sBO))},wt.\u0275cmp=e.Xpm({type:wt,selectors:[["cvc-clingen-code-select"]],viewQuery:function(h,c){if(1&h&&e.Gf(D,5,e.Rgc),2&h){let C;e.iGM(C=e.CRH())&&(c.optionTemplates=C)}},features:[e.qOj],decls:9,vars:22,consts:[[3,"cvcSelectMode","cvcCustomTemplate","cvcFormControl","cvcFormlyAttributes","cvcEntityName","cvcPlaceholder","cvcResults","cvcOptions","cvcShowError","cvcDisabled","cvcLoading","cvcOnSearch","cvcOnOpenChange","cvcOnModelChange"],[4,"ngrxLet"],["selectedTemplate",""],[4,"ngFor","ngForOf"],["optionTemplates",""],["nz-tooltip",""],["nz-typography","","nzType","secondary"],[4,"ngIf"],[1,"ant-select-selection-item-content"],[3,"cvcDisableLink","cvcHasTooltip","cvcCacheId","cvcContext","cvcMode","cvcOnClose"]],template:function(h,c){if(1&h&&(e.TgZ(0,"cvc-entity-select",0),e.NdJ("cvcOnSearch",function(le){return c.onSearch$.next(le)})("cvcOnOpenChange",function(le){return c.onOpenChange$.next(le)})("cvcOnModelChange",function(le){return c.props.change&&c.props.change(c.field,le)}),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.ALo(3,"ngrxPush"),e.ALo(4,"ngrxPush"),e.ALo(5,"ngrxPush"),e.qZA(),e.YNc(6,Je,3,3,"ng-container",1),e.YNc(7,gt,2,5,"ng-template",null,2,e.W1O)),2&h){const C=e.MAs(8);e.Q6J("cvcSelectMode",c.props.isMultiSelect?"multiple":"default")("cvcCustomTemplate",C)("cvcFormControl",c.formControl)("cvcFormlyAttributes",c.field)("cvcEntityName",c.props.entityName)("cvcPlaceholder",e.lcZ(1,12,c.placeholder$))("cvcResults",e.lcZ(2,14,c.result$))("cvcOptions",e.lcZ(3,16,c.selectOption$))("cvcShowError",c.showError)("cvcDisabled",c.onRequiresClingenCode$&&!e.lcZ(4,18,c.onRequiresClingenCode$))("cvcLoading",e.lcZ(5,20,c.isLoading$)),e.xp6(6),e.Q6J("ngrxLet",c.onSearch$)}},dependencies:[S.sg,S.O5,P.eJ,Lt.SY,de.ZU,Yt.j,je,Tt.J,P.fM],changeDetection:0});const Bt={types:[{name:"clingen-code-select",wrappers:["form-field"],component:wt,defaultOptions:{props:{label:"ClinGen/CGC/VICC Code"}}},{name:"clingen-code-multi-select",wrappers:["form-field"],component:wt,defaultOptions:{props:{isMultiSelect:!0,label:"ClinGen/CGC/VICC Code(s)"}}}]};class Gt{}Gt.\u0275fac=function(h){return new(h||Gt)},Gt.\u0275mod=e.oAB({type:Gt}),Gt.\u0275inj=e.cJS({imports:[S.ez,t.UX,P._N,P.pP,m.X0.forChild(Bt),nn.L,Sn.sL,Qe.LV,Rn.$6,li.Qp,yt.PV,Ae.o7,w.Jb,Lt.cg,Zt.zf,s.U5,be.ic,de.ZJ,Yt.X,lt,En,xt.s,rt.x,Os]});const Ht=["optionTemplates"];function an(g,h){if(1&g&&(e.TgZ(0,"nz-tag",5),e._uU(1),e.qZA()),2&g){const c=e.oxw().$implicit;e.xp6(1),e.Oqu(c.name)}}function _n(g,h){1&g&&(e.ynx(0),e.YNc(1,an,2,1,"ng-template",null,4,e.W1O),e.BQk())}function Ln(g,h){if(1&g&&(e.ynx(0),e.YNc(1,_n,3,0,"ng-container",3),e.ALo(2,"ngrxPush"),e.BQk()),2&g){const c=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,c.result$))}}function Xt(g,h){if(1&g){const c=e.EpF();e.TgZ(0,"div",6)(1,"cvc-entity-tag",7),e.NdJ("cvcOnClose",function(){const pt=e.CHM(c).$implicit,Ft=e.oxw();return e.KtG(Ft.onTagClose$.next(pt.nzValue))}),e.qZA()()}if(2&g){const c=h.$implicit,C=e.oxw();e.xp6(1),e.Q6J("cvcDisableLink",!0)("cvcCacheId","NccnGuideline:"+c.nzValue)("cvcContext",C.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",C.props.isMultiSelect?"default":"closeable")}}const un=_t($t(),vi());class In extends un{constructor(h,c,C){super(),this.taq=h,this.tq=c,this.changeDetectorRef=C,this.defaultOptions={props:{entityName:{singular:"NCCN Guideline",plural:"NCCN Guidelines"},isMultiSelect:!1,requireType:!1,tooltip:"If applicable, please provide cancer (e.g., Breast Cancer) for the appropriate NCCN guideline.",placeholder:"Search NCCN Guidelines"}},this.placeholder$=new ot.X(void 0)}ngAfterViewInit(){this.configureBaseField(),this.configureEntitySelectField({typeaheadQuery:this.taq,typeaheadParam$:void 0,tagQuery:this.tq,getTypeaheadVarsFn:this.getTypeaheadVarsFn,getTypeaheadResultsFn:this.getTypeaheadResultsFn,getTagQueryVarsFn:this.getTagQueryVarsFn,getTagQueryResultsFn:this.getTagQueryResultsFn,getSelectedItemOptionFn:this.getSelectedItemOptionFn,getSelectOptionsFn:this.getSelectOptionsFn,changeDetectorRef:this.changeDetectorRef,selectComponent:this.selectComponent})}getTypeaheadVarsFn(h){return{name:h}}getTypeaheadResultsFn(h){return h.data.nccnGuidelinesTypeahead}getTagQueryResultsFn(h){return h.data.nccnGuideline}getTagQueryVarsFn(h){return{id:h}}getSelectedItemOptionFn(h){return{value:h.id,label:h.name}}getSelectOptionsFn(h,c){return h.map((C,le)=>({label:c.get(le)||C.name,value:C.id}))}}In.\u0275fac=function(h){return new(h||In)(e.Y36(bn.sA8),e.Y36(bn.N$2),e.Y36(e.sBO))},In.\u0275cmp=e.Xpm({type:In,selectors:[["cvc-nccn-guideline-select"]],viewQuery:function(h,c){if(1&h&&e.Gf(Ht,5,e.Rgc),2&h){let C;e.iGM(C=e.CRH())&&(c.optionTemplates=C)}},features:[e.qOj],decls:8,vars:20,consts:[[3,"cvcSelectMode","cvcCustomTemplate","cvcFormControl","cvcFormlyAttributes","cvcEntityName","cvcPlaceholder","cvcResults","cvcOptions","cvcShowError","cvcDisabled","cvcLoading","cvcOnSearch","cvcOnOpenChange","cvcOnModelChange"],[4,"ngrxLet"],["selectedTemplate",""],[4,"ngFor","ngForOf"],["optionTemplates",""],["nz-tooltip",""],[1,"ant-select-selection-item-content"],[3,"cvcDisableLink","cvcCacheId","cvcContext","cvcMode","cvcOnClose"]],template:function(h,c){if(1&h&&(e.TgZ(0,"cvc-entity-select",0),e.NdJ("cvcOnSearch",function(le){return c.onSearch$.next(le)})("cvcOnOpenChange",function(le){return c.onOpenChange$.next(le)})("cvcOnModelChange",function(le){return c.props.change&&c.props.change(c.field,le)}),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.ALo(3,"ngrxPush"),e.ALo(4,"ngrxPush"),e.qZA(),e.YNc(5,Ln,3,3,"ng-container",1),e.YNc(6,Xt,2,4,"ng-template",null,2,e.W1O)),2&h){const C=e.MAs(7);e.Q6J("cvcSelectMode",c.props.isMultiSelect?"multiple":"default")("cvcCustomTemplate",C)("cvcFormControl",c.formControl)("cvcFormlyAttributes",c.field)("cvcEntityName",c.props.entityName)("cvcPlaceholder",e.lcZ(1,12,c.placeholder$))("cvcResults",e.lcZ(2,14,c.result$))("cvcOptions",e.lcZ(3,16,c.selectOption$))("cvcShowError",c.showError)("cvcDisabled",!1)("cvcLoading",e.lcZ(4,18,c.isLoading$)),e.xp6(5),e.Q6J("ngrxLet",c.onSearch$)}},dependencies:[S.sg,P.eJ,Lt.SY,Yt.j,je,Tt.J,P.fM],changeDetection:0});const Fn={types:[{name:"nccn-guideline-select",wrappers:["form-field"],component:In,defaultOptions:{props:{label:"NCCN Guideline"}}},{name:"nccn-guideline-multi-select",wrappers:["form-field"],component:In,defaultOptions:{props:{isMultiSelect:!0,label:"NCCN Guideline(s)"}}}]};class Jn{}Jn.\u0275fac=function(h){return new(h||Jn)},Jn.\u0275mod=e.oAB({type:Jn}),Jn.\u0275inj=e.cJS({imports:[S.ez,t.UX,P._N,P.pP,m.X0.forChild(Fn),nn.L,Sn.sL,Qe.LV,Rn.$6,li.Qp,yt.PV,Ae.o7,w.Jb,Lt.cg,Zt.zf,s.U5,be.ic,de.ZJ,Yt.X,lt,En,xt.s,rt.x,Os]});const Mi=_t($t());class mo extends Mi{constructor(h){super(),this.cdr=h,this.defaultDescription="Please enter the version of the NCCN guideline you're referencing in the format <strong>Version.Year</strong>",this.defaultOptions={validators:{nccnVersionNumber:{expression:c=>{if(c.value){if(/^\d{1,2}\.\d{4}$/.test(c.value)){let C=+c.value.split(".")[1];return C>=2e3&&C<=(new Date).getFullYear()+1}return!1}return!0},message:(c,C)=>`"${C.formControl?.value}" does not fit the format Version.Year`}},props:{label:"NCCN Guideline Version",extraType:"description",description:this.defaultDescription}}}ngAfterViewInit(){this.configureBaseField(),this.state&&this.state.formReady$?this.state.formReady$.pipe((0,Ge.h)(h=>h),(0,xi.q)(1),(0,Pe.t)(this)).subscribe(h=>{this.configureField()}):this.configureField()}configureField(){this.state?.fields.nccnGuidelineId$.pipe((0,Pe.t)(this)).subscribe(h=>{h?(this.props.disabled=!1,this.props.required=!0,this.props.extraType="description",this.props.description=this.defaultDescription):(this.props.disabled=!0,this.props.required=!1,this.props.extraType="prompt",this.props.description="NCCN Guideline Version is only required when NCCN Guideline is specified.",this.formControl.setValue(void 0))})}}mo.\u0275fac=function(h){return new(h||mo)(e.Y36(e.sBO))},mo.\u0275cmp=e.Xpm({type:mo,selectors:[["cvc-nccn-guideline-version-input"]],features:[e.qOj],decls:1,vars:2,consts:[["nz-input","","placeholder","ex: 1.2023",3,"formControl","formlyAttributes"]],template:function(h,c){1&h&&e._UZ(0,"input",0),2&h&&e.Q6J("formControl",c.formControl)("formlyAttributes",c.field)},dependencies:[t.Fj,t.JJ,t.oH,m.JD,Ae.Zp],encapsulation:2,changeDetection:0});const xo={types:[{name:"nccn-guideline-version-input",component:mo,wrappers:["form-field"]}]};class _s{}_s.\u0275fac=function(h){return new(h||_s)},_s.\u0275mod=e.oAB({type:_s}),_s.\u0275inj=e.cJS({imports:[S.ez,t.UX,m.X0.forChild(xo),Ae.o7,lt]});const Or=_t($t());class or extends Or{constructor(){super(...arguments),this.defaultDescription="Check this if the referenced therapy is approved for use by the FDA in the specific disease associated with the Assertion (as in a listing <a href='https://www.cancer.gov/about-cancer/treatment/drugs/cancer-type' target='_blank'>here</a>.)",this.defaultOptions={props:{hideLabel:!1,label:"FDA Regulatory Approval",description:this.defaultDescription}}}ngAfterViewInit(){this.configureBaseField(),this.state&&(this.state.formReady$?this.state.formReady$.pipe((0,Ge.h)(h=>h),(0,xi.q)(1),(0,Pe.t)(this)).subscribe(h=>{this.configureField()}):this.configureField())}configureField(){this.state?.requires.allowsFdaApproval$.pipe((0,Pe.t)(this)).subscribe(h=>{h?(this.props.disabled=!1,this.props.extraType="description",this.props.description=this.defaultDescription,void 0===this.formControl.value&&this.formControl.setValue(!1)):(this.props.disabled=!0,this.props.description="FDA Regulatory Approval does not apply to this Assertion Type",this.formControl.setValue(void 0))})}}or.\u0275fac=function(){let g;return function(c){return(g||(g=e.n5z(or)))(c||or)}}(),or.\u0275cmp=e.Xpm({type:or,selectors:[["cvc-fda-regulatory-approval-checkbox"]],features:[e.qOj],decls:2,vars:4,consts:[["nz-checkbox","",3,"nzIndeterminate","formControl","formlyAttributes","ngModelChange"]],template:function(h,c){1&h&&(e.TgZ(0,"label",0),e.NdJ("ngModelChange",function(le){return c.props.change&&c.props.change(c.field,le)}),e._uU(1),e.qZA()),2&h&&(e.Q6J("nzIndeterminate",c.props.indeterminate&&null==c.formControl.value)("formControl",c.formControl)("formlyAttributes",c.field),e.xp6(1),e.hij(" ",c.props.label,"\n"))},dependencies:[t.JJ,t.oH,kt.Ie,m.JD],changeDetection:0});const oh={types:[{name:"fda-regulatory-approval-checkbox",wrappers:["form-field"],component:or}]};class El{}El.\u0275fac=function(h){return new(h||El)},El.\u0275mod=e.oAB({type:El}),El.\u0275inj=e.cJS({imports:[S.ez,t.UX,kt.Wr,m.X0.forChild(oh),lt]});const ti=_t($t());class ci extends ti{constructor(){super(...arguments),this.defaultDescription='Select Yes if an FDA approved companion test exists for the variant and therapy associated with the Assertion (such as tests listed <a href="https://www.fda.gov/medical-devices/in-vitro-diagnostics/list-cleared-or-approved-companion-diagnostic-devices-in-vitro-and-imaging-tools" target="_blank">here</a>).',this.defaultOptions={props:{hideLabel:!1,label:"FDA Companion Test",description:this.defaultDescription}}}ngAfterViewInit(){this.configureBaseField(),this.state&&(this.state.formReady$?this.state.formReady$.pipe((0,Ge.h)(h=>h),(0,xi.q)(1),(0,Pe.t)(this)).subscribe(h=>{this.configureField()}):this.configureField())}configureField(){this.state?.fields.fdaRegulatoryApproval$.pipe((0,Pe.t)(this)).subscribe(h=>{h?(this.props.disabled=!1,this.props.extraType="description",this.props.description=this.defaultDescription,void 0===this.formControl.value&&this.formControl.setValue(!1)):(this.props.disabled=!0,this.props.description="FDA Companion Test only applies when Regulatory Approval is selected",this.formControl.setValue(void 0))})}}ci.\u0275fac=function(){let g;return function(c){return(g||(g=e.n5z(ci)))(c||ci)}}(),ci.\u0275cmp=e.Xpm({type:ci,selectors:[["cvc-fda-companion-test-checkbox"]],features:[e.qOj],decls:2,vars:4,consts:[["nz-checkbox","",3,"nzIndeterminate","formControl","formlyAttributes","ngModelChange"]],template:function(h,c){1&h&&(e.TgZ(0,"label",0),e.NdJ("ngModelChange",function(le){return c.props.change&&c.props.change(c.field,le)}),e._uU(1),e.qZA()),2&h&&(e.Q6J("nzIndeterminate",c.props.indeterminate&&null==c.formControl.value)("formControl",c.formControl)("formlyAttributes",c.field),e.xp6(1),e.hij(" ",c.props.label,"\n"))},dependencies:[t.JJ,t.oH,kt.Ie,m.JD],changeDetection:0});const mi={types:[{name:"fda-companion-test-checkbox",wrappers:["form-field"],component:ci}]};class ki{}ki.\u0275fac=function(h){return new(h||ki)},ki.\u0275mod=e.oAB({type:ki}),ki.\u0275inj=e.cJS({imports:[S.ez,t.UX,kt.Wr,m.X0.forChild(mi),lt]});const Ko=["optionTemplates"];function Hc(g,h){if(1&g&&(e.TgZ(0,"nz-tag")(1,"strong"),e._uU(2),e.qZA()()),2&g){const c=e.oxw().$implicit;e.xp6(2),e.Oqu(c)}}function es(g,h){1&g&&(e.ynx(0),e.YNc(1,Hc,3,1,"ng-template",null,3,e.W1O),e.BQk())}function Sl(g,h){if(1&g){const c=e.EpF();e.TgZ(0,"nz-tag",7),e.NdJ("nzOnClose",function(le){e.CHM(c);const pt=e.oxw(2);return e.KtG(pt.onTagClose$.next(le))}),e.TgZ(1,"strong"),e._uU(2),e.qZA()()}if(2&g){const c=e.oxw().$implicit;e.xp6(2),e.Oqu(c.nzValue)}}function Bo(g,h){if(1&g&&(e.ynx(0),e._uU(1),e.BQk()),2&g){const c=e.oxw().$implicit;e.xp6(1),e.hij(" ",c.nzValue," ")}}function Ql(g,h){if(1&g&&(e.TgZ(0,"div",4),e.YNc(1,Sl,3,1,"nz-tag",5),e.YNc(2,Bo,2,1,"ng-container",6),e.qZA()),2&g){const c=e.oxw();e.xp6(1),e.Q6J("ngIf",!c.props.isMultiSelect),e.xp6(1),e.Q6J("ngIf",c.props.isMultiSelect)}}const rh=_t($t(),ht());class Qo extends rh{constructor(h){super(),this.cdr=h,this.defaultOptions={props:{label:"Reference Build",required:!1,isMultiSelect:!1,description:"Select the human genome reference sequence from which these coordinates are obtained",placeholder:"Select Reference Build"}},this.buildEnum$=new ot.X([])}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEnumSelectField({optionEnum$:this.buildEnum$,optionTemplate$:this.optionTemplate$,changeDetectorRef:this.cdr})}configureStateConnections(){this.placeholder$=new ot.X(this.props.placeholder),this.buildEnum$.next((0,No.o6)(bn.JDX).map(h=>h)),this.optionTemplates||console.error(`${this.field.id} could not find its optionTemplates QueryList to populate its select options, so simple text labels will be displayed.`),this.optionTemplate$=this.optionTemplates?.changes.pipe((0,Ct.U)(h=>h.map(c=>c)))}}Qo.\u0275fac=function(h){return new(h||Qo)(e.Y36(e.sBO))},Qo.\u0275cmp=e.Xpm({type:Qo,selectors:[["cvc-reference-build-select"]],viewQuery:function(h,c){if(1&h&&e.Gf(Ko,5,e.Rgc),2&h){let C;e.iGM(C=e.CRH())&&(c.optionTemplates=C)}},features:[e.qOj],decls:7,vars:15,consts:[[3,"cvcFormControl","cvcFormlyAttributes","cvcSelectMode","cvcPlaceholder","cvcCustomTemplate","cvcOptions","cvcShowError","cvcDisabled"],[4,"ngFor","ngForOf"],["selectedTemplate",""],["optionTemplates",""],[1,"ant-select-selection-item-content"],["nzMode","closeable",3,"nzOnClose",4,"ngIf"],[4,"ngIf"],["nzMode","closeable",3,"nzOnClose"]],template:function(h,c){if(1&h&&(e._UZ(0,"cvc-enum-select",0),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.YNc(3,es,3,0,"ng-container",1),e.ALo(4,"ngrxPush"),e.YNc(5,Ql,3,2,"ng-template",null,2,e.W1O)),2&h){const C=e.MAs(6);e.Q6J("cvcFormControl",c.formControl)("cvcFormlyAttributes",c.field)("cvcSelectMode",c.props.isMultiSelect?"multiple":"default")("cvcPlaceholder",e.lcZ(1,9,c.placeholder$))("cvcCustomTemplate",C)("cvcOptions",e.lcZ(2,11,c.selectOption$))("cvcShowError",c.showError)("cvcDisabled",c.props.disabled),e.xp6(3),e.Q6J("ngForOf",e.lcZ(4,13,c.buildEnum$))}},dependencies:[S.sg,S.O5,Yt.j,Dt,P.fM]});const xl={types:[{name:"reference-build-select",wrappers:["form-field"],component:Qo},{name:"reference-build-multi-select",wrappers:["form-field"],component:Qo,defaultOptions:{props:{label:"Levels",isMultiSelect:!0}}}]};class wr{}wr.\u0275fac=function(h){return new(h||wr)},wr.\u0275mod=e.oAB({type:wr}),wr.\u0275inj=e.cJS({imports:[S.ez,t.UX,P._N,P.pP,m.X0.forChild(xl),Yt.X,xt.s,lt,ie]});const B1=["optionTemplates"];function yu(g,h){if(1&g&&(e.ynx(0),e.TgZ(1,"em"),e._UZ(2,"span",8),e.ALo(3,"highlightTypeahead"),e.qZA(),e.BQk()),2&g){const c=e.oxw(2).$implicit,C=e.oxw().ngrxLet;e.xp6(2),e.Q6J("innerHtml",e.xi3(3,1,c.soid,C),e.oJD)}}function H1(g,h){if(1&g&&(e._UZ(0,"cvc-entity-tag",5),e.TgZ(1,"span",6),e.YNc(2,yu,4,4,"ng-container",7),e.qZA()),2&g){const c=e.oxw().$implicit,C=e.oxw().ngrxLet;e.Q6J("cvcDisableLink",!0)("cvcCacheId",c.__typename+":"+c.id)("cvcEmphasize",C),e.xp6(2),e.Q6J("ngIf",c.soid)}}function Fh(g,h){1&g&&(e.ynx(0),e.YNc(1,H1,3,4,"ng-template",null,4,e.W1O),e.BQk())}function Dd(g,h){if(1&g&&(e.ynx(0),e.YNc(1,Fh,3,0,"ng-container",3),e.ALo(2,"ngrxPush"),e.BQk()),2&g){const c=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,c.result$))}}function Nh(g,h){if(1&g){const c=e.EpF();e.TgZ(0,"div",9)(1,"cvc-entity-tag",10),e.NdJ("cvcOnClose",function(){const pt=e.CHM(c).$implicit,Ft=e.oxw();return e.KtG(Ft.onTagClose$.next(pt.nzValue))}),e.qZA()()}if(2&g){const c=h.$implicit,C=e.oxw();e.xp6(1),e.Q6J("cvcCacheId","VariantType:"+c.nzValue)("cvcContext",C.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",C.props.isMultiSelect?"default":"closeable")}}const sh=_t($t(),vi());class Qu extends sh{constructor(h,c,C){super(),this.taq=h,this.tq=c,this.changeDetectorRef=C,this.defaultOptions={props:{entityName:{singular:"VariantType",plural:"VariantTypes"},isMultiSelect:!1,placeholders:{default:"Search Variant Types",multiDefault:"Select VariantType(s)"},description:'Add one or more variant types from the <a href="http://www.sequenceontology.org/browser/" target="_blank">Sequence Ontology</a> (e.g., missense, loss-of-function). Be specific as possible, avoid the addition of root concepts, and use the sequence_variant tree of the sequence ontology.',extraType:"prompt"}},this.placeholder$=new ot.X(this.defaultOptions.props.placeholders.default)}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEntitySelectField({typeaheadQuery:this.taq,typeaheadParam$:void 0,tagQuery:this.tq,getTypeaheadVarsFn:this.getTypeaheadVarsFn,getTypeaheadResultsFn:this.getTypeaheadResultsFn,getTagQueryVarsFn:this.getTagQueryVarsFn,getTagQueryResultsFn:this.getTagQueryResultsFn,getSelectedItemOptionFn:this.getSelectedItemOptionFn,getSelectOptionsFn:this.getSelectOptionsFn,changeDetectorRef:this.changeDetectorRef,selectOpen$:this.selectOpen$,selectComponent:this.selectComponent}),this.configurePlaceholders()}configureStateConnections(){}configurePlaceholders(){}getTypeaheadVarsFn(h){return{name:h}}getTypeaheadResultsFn(h){return h.data.variantTypeTypeahead}getTagQueryVarsFn(h){return{id:h}}getTagQueryResultsFn(h){return h.data.variantType}getSelectedItemOptionFn(h){return{value:h.id,label:h.name}}getSelectOptionsFn(h,c){return h.map((C,le)=>({label:c.get(le)||C.name,value:C.id}))}}Qu.\u0275fac=function(h){return new(h||Qu)(e.Y36(bn.jmY),e.Y36(bn._nE),e.Y36(e.sBO))},Qu.\u0275cmp=e.Xpm({type:Qu,selectors:[["cvc-variant-type-select"]],viewQuery:function(h,c){if(1&h&&e.Gf(B1,5,e.Rgc),2&h){let C;e.iGM(C=e.CRH())&&(c.optionTemplates=C)}},features:[e.qOj],decls:8,vars:19,consts:[[3,"cvcSelectMode","cvcCustomTemplate","cvcFormControl","cvcFormlyAttributes","cvcEntityName","cvcPlaceholder","cvcResults","cvcOptions","cvcShowError","cvcLoading","cvcOnSearch","cvcOnOpenChange","cvcOnModelChange"],[4,"ngrxLet"],["selectedTemplate",""],[4,"ngFor","ngForOf"],["optionTemplates",""],[3,"cvcDisableLink","cvcCacheId","cvcEmphasize"],["nz-typography","","nzType","secondary"],[4,"ngIf"],["nz-typography","","nzType","secondary",3,"innerHtml"],[1,"ant-select-selection-item-content"],[3,"cvcCacheId","cvcContext","cvcMode","cvcOnClose"]],template:function(h,c){if(1&h&&(e.TgZ(0,"cvc-entity-select",0),e.NdJ("cvcOnSearch",function(le){return c.onSearch$.next(le)})("cvcOnOpenChange",function(le){return c.onOpenChange$.next(le)})("cvcOnModelChange",function(le){return c.props.change&&c.props.change(c.field,le)}),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.ALo(3,"ngrxPush"),e.ALo(4,"ngrxPush"),e.qZA(),e.YNc(5,Dd,3,3,"ng-container",1),e.YNc(6,Nh,2,3,"ng-template",null,2,e.W1O)),2&h){const C=e.MAs(7);e.Q6J("cvcSelectMode",c.props.isMultiSelect?"multiple":"default")("cvcCustomTemplate",C)("cvcFormControl",c.formControl)("cvcFormlyAttributes",c.field)("cvcEntityName",c.props.entityName)("cvcPlaceholder",e.lcZ(1,11,c.placeholder$))("cvcResults",e.lcZ(2,13,c.result$))("cvcOptions",e.lcZ(3,15,c.selectOption$))("cvcShowError",c.showError)("cvcLoading",e.lcZ(4,17,c.isLoading$)),e.xp6(5),e.Q6J("ngrxLet",c.onSearch$)}},dependencies:[S.sg,S.O5,P.eJ,de.ZU,je,Tt.J,P.fM,U.A],changeDetection:0});const Lh={types:[{name:"variant-type-select",wrappers:["form-field"],component:Qu,defaultOptions:{props:{label:"Variant Type"}}},{name:"variant-type-multi-select",wrappers:["form-field"],component:Qu,defaultOptions:{props:{isMultiSelect:!0,label:"Variant Types"}}}]};class Cu{}Cu.\u0275fac=function(h){return new(h||Cu)},Cu.\u0275mod=e.oAB({type:Cu}),Cu.\u0275inj=e.cJS({imports:[S.ez,t.UX,P._N,P.pP,m.X0.forChild(Lh),nn.L,Sn.sL,Qe.LV,Rn.$6,li.Qp,yt.PV,Ae.o7,w.Jb,Lt.cg,Zt.zf,s.U5,be.ic,de.ZJ,Yt.X,lt,En,xt.s,rt.x]});var Yc=a(9289);function cp(g,h){if(1&g){const c=e.EpF();e.TgZ(0,"cvc-string-tag",5),e.NdJ("cvcOnClose",function(){const pt=e.CHM(c).$implicit,Ft=e.oxw(2);return e.KtG(Ft.tagClosed(pt))}),e.qZA()}if(2&g){const c=h.$implicit;e.Q6J("cvcMode","closeable")("cvcLabel",c)}}function kh(g,h){if(1&g){const c=e.EpF();e.TgZ(0,"div"),e.YNc(1,cp,1,2,"cvc-string-tag",3),e.ALo(2,"ngrxPush"),e.TgZ(3,"input",4),e.NdJ("keydown.enter",function(le){e.CHM(c);const pt=e.oxw();return e.KtG(pt.onEnter(le))}),e.qZA()()}if(2&g){const c=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,2,c.clinvarIds$)),e.xp6(2),e.Q6J("placeholder",c.props.placeholder)}}const wp=_t($t(),ra);class Y1 extends wp{constructor(h){super(),this.cdr=h,this.defaultOptions={modelOptions:{updateOn:"blur"},props:{label:"Enter value",placeholder:"Enter value and hit Return"}},this.clinvarIds$=new ot.X([]),this.values=new Set,this.showClinvarIdEntry$=new ot.X(!1),this.selectModel=void 0,this.selectOptions=[{value:Yc.li.NotApplicable,label:"Clinvar IDs not applicable for this variant"},{value:Yc.li.NoneFound,label:"Clinvar IDs do not exist for this variant"},{value:Yc.li.Found,label:"Clinvar IDs were found for this variant"},{value:void 0,label:""}]}optionSelected(h){const c=h;this.values.clear(),this.clinvarIds$.next([]),null!=c?c==Yc.li.Found?(this.showClinvarIdEntry$.next(!0),this.formControl.setValue([])):c==Yc.li.NoneFound?(this.showClinvarIdEntry$.next(!1),this.formControl.setValue(["NONE FOUND"])):c==Yc.li.NotApplicable&&(console.log("HERE"),this.showClinvarIdEntry$.next(!1),this.formControl.setValue(["NA"])):(this.showClinvarIdEntry$.next(!1),this.formControl.setValue([]),this.clinvarIds$.next([]))}onEnter(h){let c=h.target;c.value&&(this.values.add(c.value),c.value="");let C=Array.from(this.values);this.clinvarIds$.next(C),this.formControl.setValue(C)}tagClosed(h){this.values.delete(h);let c=Array.from(this.values);this.clinvarIds$.next(c),this.formControl.setValue(c),this.clinvarIds$.next(c)}ngAfterViewInit(){this.configureBaseField(),this.configureStringTagField();const h=this.formControl.value;h&&Array.isArray(h)&&("NONE FOUND"==h[0]?this.selectModel=Yc.li.NoneFound:"N/A"==h[0]?this.selectModel=Yc.li.NotApplicable:(this.selectModel=Yc.li.Found,h.forEach(c=>this.values.add(c)),this.showClinvarIdEntry$.next(!0)),this.clinvarIds$.next(h),this.cdr.detectChanges())}}Y1.\u0275fac=function(h){return new(h||Y1)(e.Y36(e.sBO))},Y1.\u0275cmp=e.Xpm({type:Y1,selectors:[["cvc-clinvar-input"]],features:[e.qOj],decls:4,vars:7,consts:[["nzAllowClear","",3,"nzOptions","ngModel","ngModelChange"],[4,"ngIf"],["hidden","","nz-input","",3,"formControl","formlyAttributes"],[3,"cvcMode","cvcLabel","cvcOnClose",4,"ngFor","ngForOf"],["nz-input","",3,"placeholder","keydown.enter"],[3,"cvcMode","cvcLabel","cvcOnClose"]],template:function(h,c){1&h&&(e.TgZ(0,"nz-select",0),e.NdJ("ngModelChange",function(le){return c.optionSelected(le)}),e.qZA(),e.YNc(1,kh,4,4,"div",1),e.ALo(2,"ngrxPush"),e._UZ(3,"input",2)),2&h&&(e.Q6J("nzOptions",c.selectOptions)("ngModel",c.selectModel),e.xp6(1),e.Q6J("ngIf",e.lcZ(2,5,c.showClinvarIdEntry$)),e.xp6(2),e.Q6J("formControl",c.formControl)("formlyAttributes",c.field))},dependencies:[S.sg,S.O5,t.Fj,t.JJ,t.oH,t.On,m.JD,Ae.Zp,Qe.Vq,Bs,P.fM],changeDetection:0});const lp={types:[{name:"clinvar-input",wrappers:["form-field"],component:Y1},{name:"clinvar-multi-input",wrappers:["form-field"],component:Y1,defaultOptions:{props:{isRepeatItem:!0}}}]};class $1{}$1.\u0275fac=function(h){return new(h||$1)},$1.\u0275mod=e.oAB({type:$1}),$1.\u0275inj=e.cJS({imports:[S.ez,t.UX,t.u5,P._N,P.pP,m.X0.forChild(lp),$e.F,Ae.o7,s.U5,Qe.LV,Os]});class Wu{}var Zu;function Pp(g,h){if(1&g&&e._uU(0),2&g){const c=e.oxw();e.hij(" ",c.props.addFormTitle,"\n")}}Wu.\u0275fac=function(h){return new(h||Wu)},Wu.\u0275mod=e.oAB({type:Wu}),Wu.\u0275inj=e.cJS({imports:[S.ez,ct,qr,kr,us,Wa,xs,tt,so,Mr,zn,cc,sl,Go,Aa,la,aa,Sr,Gu,ls,vu,y,Gt,Jn,_s,El,ki,wr,Cu,$1]});const Ip=function(){return[6,6]};let ws=((Zu=class extends m.n2{constructor(){super(),this.contentTemplate$=new Ti.t}ngAfterViewInit(){this.field.props&&this.field.props.addFormContent?this.contentTemplate$.next(this.field.props.addFormContent):console.error(`${this.field.id} add-entity-form wrapper failed to find parent field's props.addFormContent TemplateRef.`)}}).\u0275fac=function(h){return new(h||Zu)},Zu.\u0275cmp=e.Xpm({type:Zu,selectors:[["cvc-add-entity-form-wrapper"]],features:[e.qOj],decls:10,vars:7,consts:[[3,"nzGutter"],["nzFlex","auto"],["fieldComponent",""],["nzFlex","20px"],["type","button","nz-button","","nzType","primary","nzSize","default","nzShape","circle","nz-popover","",3,"disabled","nzPopoverTitle","nzPopoverContent"],["nz-icon","","nzType","plus-circle","nzTheme","outline"],["titleTemplate",""]],template:function(h,c){if(1&h&&(e.TgZ(0,"nz-row",0)(1,"nz-col",1),e.GkF(2,null,2),e.qZA(),e.TgZ(4,"nz-col",3)(5,"button",4),e.ALo(6,"ngrxPush"),e._UZ(7,"span",5),e.qZA()()(),e.YNc(8,Pp,1,1,"ng-template",null,6,e.W1O)),2&h){const C=e.MAs(9);e.Q6J("nzGutter",e.DdM(6,Ip)),e.xp6(5),e.Q6J("disabled",null==c.field.props?null:c.field.props.disabled)("nzPopoverTitle",C)("nzPopoverContent",e.lcZ(6,4,c.contentTemplate$))}},dependencies:[Sn.ix,hn.w,ln.dQ,Rn.lU,yt.Ls,w.t3,w.SK,P.fM],styles:[".add-button[_ngcontent-%COMP%]{font-size:24px;color:#cfcfdf}"],changeDetection:0}),Zu);ws=(0,Te.gn)([(0,Pe.c)()],ws);const up={wrappers:[{name:"add-entity-form",component:ws}]};class U1{}U1.\u0275fac=function(h){return new(h||U1)},U1.\u0275mod=e.oAB({type:U1}),U1.\u0275inj=e.cJS({imports:[S.ez,P.pP,m.X0.forChild(up),Sn.sL,Rn.$6,yt.PV,w.Jb]});class Od extends m.n2{get errorState(){return this.showError?"error":""}ngOnInit(){this.props.grid={cols:2,...this.props.grid?this.props.grid:void 0}}}Od.\u0275fac=function(){let g;return function(c){return(g||(g=e.n5z(Od)))(c||Od)}}(),Od.\u0275cmp=e.Xpm({type:Od,selectors:[["cvc-field-grid"]],features:[e.qOj],decls:3,vars:1,consts:[[1,"field-grid",3,"ngClass"],["fieldComponent",""]],template:function(h,c){1&h&&(e.TgZ(0,"div",0),e.GkF(1,null,1),e.qZA()),2&h&&e.Q6J("ngClass","cols-"+c.props.grid.cols)},dependencies:[S.mk],styles:[".field-grid.cols-2[_ngcontent-%COMP%]     formly-group:first-of-type{display:grid;grid-template-columns:repeat(2,1fr);gap:8px}.field-grid.cols-3[_ngcontent-%COMP%]     formly-group:first-of-type{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}.field-grid.cols-4[_ngcontent-%COMP%]     formly-group:first-of-type{display:grid;grid-template-columns:repeat(4,1fr);gap:8px}"],changeDetection:0});const Rh={wrappers:[{name:"field-grid",component:Od}]};class Ku{}function Ap(g,h){if(1&g&&(e.TgZ(0,"nz-col",4),e._UZ(1,"formly-field",5),e.qZA()),2&g){const c=h.$implicit;e.Q6J("nzSpan",(null==c.props?null:c.props.colSpan)||12),e.xp6(1),e.Q6J("field",c)}}function Fp(g,h){}Ku.\u0275fac=function(h){return new(h||Ku)},Ku.\u0275mod=e.oAB({type:Ku}),Ku.\u0275inj=e.cJS({imports:[S.ez,t.UX,s.U5,w.Jb,m.X0.forChild(Rh)]});const Np=function(){return[6,6]};class wd extends m.n2{get errorState(){return this.showError?"error":""}constructor(){super()}ngOnInit(){this.props.gutterHorizontal=this.props.gutterHorizontal||8,this.props.gutterVertical=this.props.gutterVertical||8}}wd.\u0275fac=function(h){return new(h||wd)},wd.\u0275cmp=e.Xpm({type:wd,selectors:[["cvc-form-card"]],features:[e.qOj],decls:5,vars:5,consts:[[3,"nzTitle","nzExtra"],[3,"nzGutter"],[3,"nzSpan",4,"ngFor","ngForOf"],["cardExtra",""],[3,"nzSpan"],[3,"field"]],template:function(h,c){if(1&h&&(e.TgZ(0,"nz-card",0)(1,"nz-row",1),e.YNc(2,Ap,2,2,"nz-col",2),e.qZA()(),e.YNc(3,Fp,0,0,"ng-template",null,3,e.W1O)),2&h){const C=e.MAs(4);e.Q6J("nzTitle",c.props.title)("nzExtra",C),e.xp6(1),e.Q6J("nzGutter",e.DdM(4,Np)),e.xp6(1),e.Q6J("ngForOf",c.field.fieldGroup)}},dependencies:[S.sg,m.cw,w.t3,w.SK,Gi.bd]});const Lp={wrappers:[{name:"form-card",component:wd}]};class zu{}zu.\u0275fac=function(h){return new(h||zu)},zu.\u0275mod=e.oAB({type:zu}),zu.\u0275inj=e.cJS({imports:[S.ez,t.u5,m.X0.forChild(Lp),w.Jb,Gi.vh,kt.Wr]});class j1 extends m.n2{ngOnInit(){}}j1.\u0275fac=function(){let g;return function(c){return(g||(g=e.n5z(j1)))(c||j1)}}(),j1.\u0275cmp=e.Xpm({type:j1,selectors:[["cvc-form-footer"]],features:[e.qOj],decls:4,vars:0,consts:[[1,"form-footer"],["nzSpan","24",1,"submit-col"],["fieldComponent",""]],template:function(h,c){1&h&&(e.TgZ(0,"nz-row",0)(1,"nz-col",1),e.GkF(2,null,2),e.qZA()())},dependencies:[w.t3,w.SK],styles:[".form-footer[_ngcontent-%COMP%]{margin-top:1em;border-radius:8px;background-color:#f0f0f0;padding:1em}.submit-col[_ngcontent-%COMP%]{text-align:right}"],changeDetection:0});const kp={wrappers:[{name:"form-footer",component:j1}]};class G1{}G1.\u0275fac=function(h){return new(h||G1)},G1.\u0275mod=e.oAB({type:G1}),G1.\u0275inj=e.cJS({imports:[S.ez,w.Jb,m.X0.forChild(kp)]});var Rp=a(9241),Ka=a(9194),Dl=a(6152),Pd=a(3513);class Ju{}Ju.\u0275fac=function(h){return new(h||Ju)},Ju.\u0275mod=e.oAB({type:Ju}),Ju.\u0275inj=e.cJS({imports:[S.ez,P._N,P.pP,yt.PV,w.Jb,Gi.vh,Pd.we,Ka.q6,Dl.Ph,Yt.X,de.ZJ,L.s]});class qu{}qu.\u0275fac=function(h){return new(h||qu)},qu.\u0275mod=e.oAB({type:qu}),qu.\u0275inj=e.cJS({imports:[S.ez,P._N,P.pP,Sn.sL,qs.Rt,Fo.b1]});var Vp=a(2340);const Bp={VALID:"success",INVALID:"error",PENDING:"processing",DISABLED:"default"};class Q1{constructor(){this.tagColor="default"}set cvcFormControlStatus(h){this._status=h,this.tagColor=h?Bp[h]:"default"}get cvcFormControlStatus(){return this._status}}function Bh(g,h){if(1&g&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&g){const c=e.oxw(2).ctrl;e.xp6(1),e.hij(" ",c.value," ")}}function Hp(g,h){1&g&&(e.TgZ(0,"span",8),e._uU(1," undefined "),e.qZA())}function Yp(g,h){if(1&g&&(e.TgZ(0,"nz-list-item")(1,"nz-list-item-meta")(2,"nz-list-item-meta-title"),e._uU(3),e.qZA(),e.TgZ(4,"nz-list-item-meta-description"),e.YNc(5,Bh,2,1,"span",5),e.YNc(6,Hp,2,0,"span",6),e.qZA()(),e.TgZ(7,"nz-list-item-extra"),e._UZ(8,"cvc-form-status-tag",7),e.qZA()()),2&g){const c=e.oxw(),C=c.key,le=c.ctrl;e.xp6(3),e.hij(" ",C," "),e.xp6(2),e.Q6J("ngIf",le.value),e.xp6(1),e.Q6J("ngIf",!le.value),e.xp6(2),e.Q6J("cvcFormControlStatus",le.status)}}function ah(g,h){}Q1.\u0275fac=function(h){return new(h||Q1)},Q1.\u0275cmp=e.Xpm({type:Q1,selectors:[["cvc-form-status-tag"]],inputs:{cvcFormControlStatus:"cvcFormControlStatus"},decls:3,vars:4,consts:[[3,"nzColor"]],template:function(h,c){1&h&&(e.TgZ(0,"nz-tag",0),e._uU(1),e.ALo(2,"lowercase"),e.qZA()),2&h&&(e.Q6J("nzColor",c.tagColor),e.xp6(1),e.hij(" ",c.cvcFormControlStatus?e.lcZ(2,2,c.cvcFormControlStatus):"UNKNOWN","\n"))},dependencies:[Yt.j,S.i8]});const ch=function(g,h){return{key:g,ctrl:h}};function lh(g,h){if(1&g&&e.YNc(0,ah,0,0,"ng-template",12),2&g){const c=h.$implicit;e.oxw(3);const C=e.MAs(3);e.Q6J("ngTemplateOutlet",C)("ngTemplateOutletContext",e.WLB(2,ch,c.key,c.value))}}function v4(g,h){if(1&g&&(e.TgZ(0,"strong"),e._uU(1),e.qZA()),2&g){const c=e.oxw(2).key;e.xp6(1),e.Oqu(c)}}function Hh(g,h){if(1&g&&(e.TgZ(0,"nz-list-item")(1,"nz-card",9)(2,"nz-list",10),e.YNc(3,lh,1,5,null,4),e.ALo(4,"keyvalue"),e.qZA()(),e.YNc(5,v4,2,1,"ng-template",null,11,e.W1O),e.qZA()),2&g){const c=e.oxw(),C=c.key,le=c.ctrl;e.xp6(1),e.Q6J("nzTitle",C),e.xp6(2),e.Q6J("ngForOf",e.lcZ(4,2,le.controls))}}function _4(g,h){if(1&g&&(e.YNc(0,Yp,9,4,"nz-list-item",5),e.YNc(1,Hh,7,4,"nz-list-item",5)),2&g){const c=h.ctrl;e.Q6J("ngIf",!c.controls),e.xp6(1),e.Q6J("ngIf",c.controls)}}function dp(g,h){}function hp(g,h){if(1&g&&e.YNc(0,dp,0,0,"ng-template",12),2&g){const c=h.$implicit;e.oxw();const C=e.MAs(3);e.Q6J("ngTemplateOutlet",C)("ngTemplateOutletContext",e.WLB(2,ch,c.key,c.value))}}function pp(g,h){if(1&g&&(e.ynx(0),e.TgZ(1,"nz-list",2),e.YNc(2,_4,2,2,"ng-template",null,3,e.W1O),e.qZA(),e.YNc(4,hp,1,5,null,4),e.ALo(5,"keyvalue"),e.BQk()),2&g){const c=h.ngIf;e.xp6(4),e.Q6J("ngForOf",e.lcZ(5,1,c.controls))}}function fp(g,h){1&g&&e._uU(0," No AbstractFormControl provided. ")}class Xu{set cvcAbstractControl(h){if(!h)throw new Error("cvc-form-debug-field-list requires valid cvcFormControl Input.");this._cvcFormControl=h,this.formControl=h}get cvcFormControl(){return this._cvcFormControl}constructor(){}ngOnInit(){}}var $s;function uh(g,h){if(1&g&&(e.ynx(0),e._UZ(1,"ngx-json-viewer",9),e.BQk()),2&g){const c=e.oxw();e.xp6(1),e.Q6J("json",c.watchModel)}}function dh(g,h){if(1&g&&(e.ynx(0),e.TgZ(1,"nz-descriptions",10)(2,"nz-descriptions-item",11),e._UZ(3,"cvc-form-status-tag",12),e.qZA(),e.TgZ(4,"nz-descriptions-item",13),e._uU(5),e.qZA(),e.TgZ(6,"nz-descriptions-item",14),e._uU(7),e.qZA(),e.TgZ(8,"nz-descriptions-item",15),e._uU(9),e.qZA(),e.TgZ(10,"nz-descriptions-item",16),e._uU(11),e.qZA(),e.TgZ(12,"nz-descriptions-item",17),e._uU(13),e.qZA()(),e.BQk()),2&g){const c=e.oxw();e.xp6(1),e.Q6J("nzColumn",1),e.xp6(2),e.Q6J("cvcFormControlStatus",null==c.cvcForm?null:c.cvcForm.status),e.xp6(2),e.hij(" ",null==c.cvcForm?null:c.cvcForm.pending," "),e.xp6(2),e.hij(" ",null==c.cvcForm?null:c.cvcForm.touched," "),e.xp6(2),e.hij(" ",null==c.cvcForm?null:c.cvcForm.valid," "),e.xp6(2),e.hij(" ",null==c.cvcForm?null:c.cvcForm.dirty," "),e.xp6(2),e.hij(" ",null==c.cvcForm?null:c.cvcForm.enabled," ")}}function Id(g,h){if(1&g&&(e.ynx(0),e._UZ(1,"cvc-form-debug-field-list",18),e.BQk()),2&g){const c=e.oxw();e.xp6(1),e.Q6J("cvcAbstractControl",c.cvcForm)}}function $p(g,h){1&g&&(e.ynx(0),e._uU(1," State Content "),e.BQk())}function mp(g,h){if(1&g&&(e.TgZ(0,"nz-row")(1,"nz-col",19),e._uU(2," Form Details "),e.qZA(),e.TgZ(3,"nz-col",20),e._UZ(4,"cvc-form-status-tag",12),e.qZA()()),2&g){const c=e.oxw();e.xp6(4),e.Q6J("cvcFormControlStatus",null==c.cvcForm?null:c.cvcForm.status)}}Xu.\u0275fac=function(h){return new(h||Xu)},Xu.\u0275cmp=e.Xpm({type:Xu,selectors:[["cvc-form-debug-field-list"]],inputs:{cvcAbstractControl:"cvcAbstractControl"},decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["noFormControl",""],["nzSize","small"],["ctrlTemplateRef",""],[4,"ngFor","ngForOf"],[4,"ngIf"],["style","padding: 0px 4px; color: white; background-color: #ccc",4,"ngIf"],[3,"cvcFormControlStatus"],[2,"padding","0px 4px","color","white","background-color","#ccc"],["nzSize","small",2,"width","100%",3,"nzTitle"],["nzSize","small",2,"padding","0"],["cardExtra",""],[3,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(h,c){if(1&h&&(e.YNc(0,pp,6,3,"ng-container",0),e.YNc(1,fp,1,0,"ng-template",null,1,e.W1O)),2&h){const C=e.MAs(2);e.Q6J("ngIf",c.formControl)("ngIfElse",C)}},dependencies:[S.sg,S.O5,S.tP,Gi.bd,Dl.n_,Dl.AA,Dl.yi,Dl.IO,Dl.Pb,Dl.yw,Q1,S.Nd],styles:["[_nghost-%COMP%]     nz-card .ant-card-body{padding:6px 0}"]});let hh=(($s=class{constructor(h){this.cdr=h,this.selectedIndex=0}ngOnInit(){if(!this.cvcForm)throw new Error("cvc-form-debug requires valid cvcForm Input.");this.valueChange$=new ot.X(this.cvcForm.value),this.statusChange$=new ot.X(this.cvcForm.status),this.formChange$=eo([this.statusChange$,this.valueChange$]),this.watchModel=this.cvcModel,this.subscriptions=[this.cvcForm.valueChanges.subscribe(h=>{this.watchModel={...this.cvcModel},this.valueChange$.next(h)}),this.cvcForm.statusChanges.subscribe(h=>{this.statusChange$.next(h)}),this.formChange$.subscribe(h=>{this.cdr.detectChanges()})]}}).\u0275fac=function(h){return new(h||$s)(e.Y36(e.sBO))},$s.\u0275cmp=e.Xpm({type:$s,selectors:[["cvc-form-debug"]],inputs:{cvcForm:"cvcForm",cvcModel:"cvcModel"},decls:14,vars:7,consts:[["nzSize","small","nzBordered","true",3,"nzTitle"],["nzSize","small",3,"nzSelectedIndex","nzSelectedIndexChange"],["nzTitle","Model"],["nzTitle","Controls"],["nzTitle","State"],["nzTitle","Form Status"],[3,"ngSwitch"],[4,"ngSwitchCase"],["cardTitle",""],[3,"json"],["nzBordered","","nzSize","small",3,"nzColumn"],["nzTitle","status"],[3,"cvcFormControlStatus"],["nzTitle","pending"],["nzTitle","touched"],["nzTitle","valid"],["nzTitle","dirty"],["nzTitle","enabled"],[3,"cvcAbstractControl"],["nzFlex","2"],["nzFlex","3",1,"form-status-col"]],template:function(h,c){if(1&h&&(e.TgZ(0,"nz-card",0)(1,"nz-card-tab")(2,"nz-tabset",1),e.NdJ("nzSelectedIndexChange",function(le){return c.selectedIndex=le}),e._UZ(3,"nz-tab",2)(4,"nz-tab",3)(5,"nz-tab",4)(6,"nz-tab",5),e.qZA()(),e.ynx(7,6),e.YNc(8,uh,2,1,"ng-container",7),e.YNc(9,dh,14,7,"ng-container",7),e.YNc(10,Id,2,1,"ng-container",7),e.YNc(11,$p,2,0,"ng-container",7),e.BQk(),e.qZA(),e.YNc(12,mp,5,1,"ng-template",null,8,e.W1O)),2&h){const C=e.MAs(13);e.Q6J("nzTitle",C),e.xp6(2),e.Q6J("nzSelectedIndex",c.selectedIndex),e.xp6(5),e.Q6J("ngSwitch",c.selectedIndex),e.xp6(1),e.Q6J("ngSwitchCase",0),e.xp6(1),e.Q6J("ngSwitchCase",3),e.xp6(1),e.Q6J("ngSwitchCase",1),e.xp6(1),e.Q6J("ngSwitchCase",2)}},dependencies:[S.RF,S.n9,w.t3,w.SK,Gi.bd,Gi._i,Pd.xH,Pd.xw,Ka.R7,Ka.uj,L.Y,Xu,Q1],styles:["[_nghost-%COMP%]{display:block}.form-status-col[_ngcontent-%COMP%]{text-align:right}.form-status-col[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]:last-child{margin-right:0}"],changeDetection:0}),$s);var W1;function gp(g,h){if(1&g&&(e.TgZ(0,"nz-col",4),e._UZ(1,"cvc-form-debug",5),e.qZA()),2&g){const c=e.oxw();e.Q6J("nzSpan",8),e.xp6(1),e.Q6J("cvcForm",c.form)("cvcModel",c.model)}}hh=(0,Te.gn)([(0,Pe.c)({arrayName:"subscriptions"})],hh);const Ad=function(){return[8,8]};let vp=((W1=class extends m.n2{constructor(h){super()}get errorState(){return this.showError?"error":""}ngOnInit(){this.props.title=this.props.title||"Form Card",this.props.submitLabel=this.props.submitLabel||"Submit",this.props.showDevPanel=!Vp.N.production&&(this.props.showDevPanel||false)}}).\u0275fac=function(h){return new(h||W1)(e.Y36(e.sBO))},W1.\u0275cmp=e.Xpm({type:W1,selectors:[["cvc-form-layout-wrapper"]],features:[e.qOj],decls:5,vars:4,consts:[[3,"nzGutter"],[1,"form-col",3,"nzSpan"],["fieldComponent",""],["class","status-col",3,"nzSpan",4,"ngIf"],[1,"status-col",3,"nzSpan"],[3,"cvcForm","cvcModel"]],template:function(h,c){1&h&&(e.TgZ(0,"nz-row",0)(1,"nz-col",1),e.GkF(2,null,2),e.qZA(),e.YNc(4,gp,2,3,"nz-col",3),e.qZA()),2&h&&(e.Q6J("nzGutter",e.DdM(3,Ad)),e.xp6(1),e.Q6J("nzSpan",c.props.showDevPanel?16:24),e.xp6(3),e.Q6J("ngIf",c.props.showDevPanel))},dependencies:[S.O5,w.t3,w.SK,hh],changeDetection:0}),W1);vp=(0,Te.gn)([(0,Pe.c)({arrayName:"subscriptions"})],vp);const Up={wrappers:[{name:"form-layout",component:vp}]};class Z1{}Z1.\u0275fac=function(h){return new(h||Z1)},Z1.\u0275mod=e.oAB({type:Z1}),Z1.\u0275inj=e.cJS({imports:[S.ez,m.X0.forChild(Up),Sn.sL,Gi.vh,yt.PV,Yt.X,Pd.we,Rn.$6,Dl.Ph,w.Jb,Rp.h,qu,Ju,L.s]});class e1{}e1.\u0275fac=function(h){return new(h||e1)},e1.\u0275mod=e.oAB({type:e1}),e1.\u0275inj=e.cJS({imports:[S.ez,Z1,zu,G1,lt,Ku,U1]});class K1{}K1.\u0275fac=function(h){return new(h||K1)},K1.\u0275mod=e.oAB({type:K1}),K1.\u0275inj=e.cJS({providers:[{provide:m.l7,multi:!0,useFactory:function b(g){return{extensions:[{name:"observeQueryParam",extension:new M(g)}]}},deps:[i.gz]}],imports:[m.X0.forRoot({extras:{immutable:!1,lazyRender:!0},validationMessages:[{name:"required",message:"This field is required."},{name:"minLength",message:(g,h)=>`This field has a minimum length of ${h.templateOptions?.minLength}.`},{name:"maxLength",message:(g,h)=>`This field has a maximum length of ${h.templateOptions?.maxLength}.`},{name:"min",message:(g,h)=>`This field has a minimum value of ${h.templateOptions?.min}.`},{name:"max",message:(g,h)=>`This field has a maximum value of ${h.templateOptions?.max}.`},{name:"pattern",message:(g,h)=>`This field's value must fit the pattern ${h.templateOptions?.pattern}.`},{name:"integer",message:(g,h)=>"Value must be an integer."},{name:"nucleotide",message:(g,h)=>"Value must only contain A, C, T, G, and/or /."},{name:"clinvar",message:(g,h)=>"Value must be an integer."}],validators:[{name:"integer",validation:(g,h)=>""===g.value||null==g.value||/^\d+$/.test(g.value)?null:{integer:!0}},{name:"nucleotide",validation:(g,h)=>""===g.value||null==g.value||/^[ACTG\/]+$/.test(g.value)?null:{nucleotide:!0}},{name:"clinvar",validation:(g,h)=>{for(var c of g.value)if(""!==c&&null!=c&&!/^\d+$/.test(c))return{clinvar:!0};return null}}]}),t.UX,s.U5,l.u,e1,L.s,t.UX,m.X0,l.u,s.U5,e1,Wu]})},9289:(Et,Me,a)=>{function t(M){let b={value:void 0,unset:void 0};return M&&M.trim().length>0?b.value=M.trim():b.unset=!0,b}function i(M){let b={value:void 0,unset:void 0};return void 0!==M?b.value=M:b.unset=!0,b}a.d(Me,{aP:()=>T,li:()=>m,uP:()=>i,xt:()=>t});var m=(()=>{return(M=m||(m={}))[M.NotApplicable=0]="NotApplicable",M[M.NoneFound=1]="NoneFound",M[M.Found=2]="Found",m;var M})();const T=[{value:void 0,label:""},{value:"1",label:"1"},{value:"2",label:"2"},{value:"3",label:"3"},{value:"4",label:"4"},{value:"5",label:"5"},{value:"6",label:"6"},{value:"7",label:"7"},{value:"8",label:"8"},{value:"9",label:"9"},{value:"10",label:"10"},{value:"11",label:"11"},{value:"12",label:"12"},{value:"13",label:"13"},{value:"14",label:"14"},{value:"15",label:"15"},{value:"16",label:"16"},{value:"17",label:"17"},{value:"18",label:"18"},{value:"19",label:"19"},{value:"20",label:"20"},{value:"21",label:"21"},{value:"22",label:"22"},{value:"X",label:"X"},{value:"Y",label:"Y"},{value:"MT",label:"MT"}]},7630:(Et,Me,a)=>{a.d(Me,{A4J:()=>cr,A94:()=>Ya,AIY:()=>Vs,AMF:()=>ja,AO2:()=>P,B0s:()=>Go,B97:()=>js,BQZ:()=>k,BTF:()=>qn,BYO:()=>ha,Bk6:()=>Ic,Bo4:()=>yl,Cp0:()=>j,D9L:()=>Ea,Del:()=>Oc,DkJ:()=>Yn,DzV:()=>Da,E1C:()=>ol,E2B:()=>vc,E8d:()=>b,EFm:()=>Fa,EH_:()=>Ds,EwB:()=>ea,F1Y:()=>xs,F3s:()=>mn,F4e:()=>yc,FB1:()=>xt,FJi:()=>it,FNv:()=>X,FOU:()=>ta,Fvz:()=>fe,GYx:()=>Gr,Gbq:()=>ar,Gnp:()=>Ac,HUC:()=>wn,Hmr:()=>oo,HwR:()=>La,IP1:()=>nl,IRu:()=>Yt,IZ6:()=>Ki,JDX:()=>on,Kk:()=>Ve,Kmw:()=>za,L5n:()=>Cs,L8L:()=>ss,LHC:()=>Mc,LLl:()=>Ms,LUc:()=>Qr,LiH:()=>Dr,Lr0:()=>Xr,MCG:()=>Hs,MNv:()=>fa,MPi:()=>_c,MYm:()=>zr,Mgx:()=>O,MsG:()=>H,N$2:()=>Jr,NQC:()=>St,O2u:()=>gc,OHm:()=>tr,OIL:()=>io,OfU:()=>F,P_b:()=>Fr,Q4m:()=>ac,QVn:()=>oa,Qtd:()=>Yl,Qzn:()=>Do,R8F:()=>Ia,R8w:()=>e,RTy:()=>N,RYL:()=>ia,Rdc:()=>Oo,SrV:()=>Pt,Sx0:()=>se,T1I:()=>dc,TNk:()=>hl,Tg0:()=>Vr,TiL:()=>zo,Tq1:()=>At,Tt7:()=>cs,UIR:()=>fr,UWf:()=>ir,VZq:()=>$o,WFw:()=>Vo,WGV:()=>wc,WOS:()=>Ga,WRV:()=>os,X5f:()=>Zi,XQi:()=>Ec,Xft:()=>fc,Y6e:()=>wa,YMi:()=>Dn,Y_K:()=>bc,Ybm:()=>Un,ZYZ:()=>lo,Zo2:()=>Ot,_3P:()=>L,_Wm:()=>M,_eC:()=>uo,_jb:()=>is,_nE:()=>Ha,aC3:()=>da,bgg:()=>Ts,c$m:()=>ur,cCu:()=>ma,cEv:()=>te,cIw:()=>Va,cMj:()=>Ua,czh:()=>Na,d4o:()=>Ye,dDn:()=>kr,dGO:()=>sa,db2:()=>xr,eDl:()=>mc,eJ3:()=>Pa,eY8:()=>no,ejK:()=>$a,fow:()=>ve,fwG:()=>Vi,g0X:()=>Vl,ghc:()=>at,h01:()=>V,hVB:()=>fl,h_Y:()=>Rs,huM:()=>$e,i44:()=>zn,iGM:()=>bo,iJT:()=>_l,iST:()=>mr,io:()=>er,iwm:()=>m,jMx:()=>gs,jmY:()=>pa,jw9:()=>Lt,k7O:()=>$,kQf:()=>ko,kQl:()=>yt,kqt:()=>Y,l$X:()=>Ro,l4w:()=>hc,lYz:()=>It,lcA:()=>Nr,m$d:()=>Fc,m55:()=>q,mII:()=>Uo,mdl:()=>s,mki:()=>hr,mpB:()=>kt,nSb:()=>ms,nnL:()=>ll,o71:()=>lt,oRL:()=>Ce,olA:()=>ra,otH:()=>ns,pHu:()=>Rr,pP7:()=>Qe,pR8:()=>Sr,q1D:()=>vl,q8c:()=>ye,q9q:()=>fn,qf4:()=>vn,qgP:()=>Tc,rJ8:()=>vr,rZD:()=>mt,rzy:()=>go,sA8:()=>fs,sBY:()=>Dc,sLD:()=>ml,sfv:()=>me,sjj:()=>Ba,tI1:()=>de,tJ6:()=>ce,tWC:()=>cl,td:()=>Lo,ti:()=>Cr,tji:()=>xa,tw_:()=>Oi,u4i:()=>R,uBv:()=>T,ubO:()=>Lc,vMt:()=>Eo,vjc:()=>Cc,vv6:()=>Al,vz2:()=>jr,wJ2:()=>w,wRZ:()=>ps,wbP:()=>Ss,wg3:()=>xc,wkr:()=>sn,wpb:()=>Ae,xlL:()=>Ee,y1h:()=>Z,yic:()=>Qt,yqR:()=>gl,z8D:()=>Sc,zOE:()=>ua,z_7:()=>zc,zpu:()=>ca,zwS:()=>To});var t=a(3595),i=a(4650),m=(()=>{return(ee=m||(m={})).Na="NA",ee.TierIii="TIER_III",ee.TierIiLevelC="TIER_II_LEVEL_C",ee.TierIiLevelD="TIER_II_LEVEL_D",ee.TierIv="TIER_IV",ee.TierILevelA="TIER_I_LEVEL_A",ee.TierILevelB="TIER_I_LEVEL_B",m;var ee})(),s=(()=>{return(ee=s||(s={})).DoesNotSupport="DOES_NOT_SUPPORT",ee.Supports="SUPPORTS",s;var ee})(),L=(()=>{return(ee=L||(L={})).AdverseResponse="ADVERSE_RESPONSE",ee.Benign="BENIGN",ee.BetterOutcome="BETTER_OUTCOME",ee.LikelyBenign="LIKELY_BENIGN",ee.LikelyOncogenic="LIKELY_ONCOGENIC",ee.LikelyPathogenic="LIKELY_PATHOGENIC",ee.Na="NA",ee.Negative="NEGATIVE",ee.Oncogenic="ONCOGENIC",ee.Pathogenic="PATHOGENIC",ee.PoorOutcome="POOR_OUTCOME",ee.Positive="POSITIVE",ee.ReducedSensitivity="REDUCED_SENSITIVITY",ee.Resistance="RESISTANCE",ee.Sensitivityresponse="SENSITIVITYRESPONSE",ee.UncertainSignificance="UNCERTAIN_SIGNIFICANCE",L;var ee})(),R=(()=>{return(ee=R||(R={})).AmpLevel="AMP_LEVEL",ee.AssertionDirection="ASSERTION_DIRECTION",ee.AssertionType="ASSERTION_TYPE",ee.DiseaseName="DISEASE_NAME",ee.EvidenceItemsCount="EVIDENCE_ITEMS_COUNT",ee.Id="ID",ee.Significance="SIGNIFICANCE",ee.Status="STATUS",ee.Summary="SUMMARY",ee.TherapyName="THERAPY_NAME",R;var ee})(),T=(()=>{return(ee=T||(T={})).Diagnostic="DIAGNOSTIC",ee.Oncogenic="ONCOGENIC",ee.Predictive="PREDICTIVE",ee.Predisposing="PREDISPOSING",ee.Prognostic="PROGNOSTIC",T;var ee})(),M=(()=>{return(ee=M||(M={})).And="AND",ee.Or="OR",M;var ee})(),b=(()=>{return(ee=b||(b={})).EvidenceItemCount="EVIDENCE_ITEM_COUNT",ee.Name="NAME",ee.NctId="NCT_ID",ee.SourceCount="SOURCE_COUNT",b;var ee})(),O=(()=>{return(ee=O||(O={})).Conflict="CONFLICT",ee.Expired="EXPIRED",ee.Missing="MISSING",ee.Valid="VALID",O;var ee})(),F=(()=>{return(ee=F||(F={})).Assertion="ASSERTION",ee.EvidenceItem="EVIDENCE_ITEM",ee.Gene="GENE",ee.MolecularProfile="MOLECULAR_PROFILE",ee.Source="SOURCE",ee.Variant="VARIANT",ee.VariantGroup="VARIANT_GROUP",F;var ee})(),V=(()=>{return(ee=V||(V={})).Created="CREATED",ee.LastModified="LAST_MODIFIED",V;var ee})(),e=(()=>{return(ee=e||(e={})).AssertionCount="ASSERTION_COUNT",ee.Doid="DOID",ee.EvidenceItemCount="EVIDENCE_ITEM_COUNT",ee.GeneCount="GENE_COUNT",ee.Name="NAME",ee.VariantCount="VARIANT_COUNT",e;var ee})(),P=(()=>{return(ee=P||(P={})).Accepted="ACCEPTED",ee.AssertionAccepted="ASSERTION_ACCEPTED",ee.AssertionRejected="ASSERTION_REJECTED",ee.AssertionReverted="ASSERTION_REVERTED",ee.AssertionSubmitted="ASSERTION_SUBMITTED",ee.Commented="COMMENTED",ee.CuratedSourceSuggestion="CURATED_SOURCE_SUGGESTION",ee.DeprecatedMolecularProfile="DEPRECATED_MOLECULAR_PROFILE",ee.DeprecatedVariant="DEPRECATED_VARIANT",ee.Flagged="FLAGGED",ee.FlagResolved="FLAG_RESOLVED",ee.PublicationSuggested="PUBLICATION_SUGGESTED",ee.Rejected="REJECTED",ee.RejectedSourceSuggestion="REJECTED_SOURCE_SUGGESTION",ee.RequeuedSourceSuggestion="REQUEUED_SOURCE_SUGGESTION",ee.Reverted="REVERTED",ee.RevisionAccepted="REVISION_ACCEPTED",ee.RevisionRejected="REVISION_REJECTED",ee.RevisionSuggested="REVISION_SUGGESTED",ee.RevisionSuperseded="REVISION_SUPERSEDED",ee.Submitted="SUBMITTED",P;var ee})(),w=(()=>{return(ee=w||(w={})).Organization="ORGANIZATION",ee.Subject="SUBJECT",ee.Unscoped="UNSCOPED",ee.User="USER",w;var ee})(),de=(()=>{return(ee=de||(de={})).DoesNotSupport="DOES_NOT_SUPPORT",ee.Na="NA",ee.Supports="SUPPORTS",de;var ee})(),se=(()=>{return(ee=se||(se={})).A="A",ee.B="B",ee.C="C",ee.D="D",ee.E="E",se;var ee})(),Z=(()=>{return(ee=Z||(Z={})).AdverseResponse="ADVERSE_RESPONSE",ee.Benign="BENIGN",ee.BetterOutcome="BETTER_OUTCOME",ee.DominantNegative="DOMINANT_NEGATIVE",ee.GainOfFunction="GAIN_OF_FUNCTION",ee.LikelyBenign="LIKELY_BENIGN",ee.LikelyPathogenic="LIKELY_PATHOGENIC",ee.LossOfFunction="LOSS_OF_FUNCTION",ee.Na="NA",ee.Negative="NEGATIVE",ee.Neomorphic="NEOMORPHIC",ee.Oncogenicity="ONCOGENICITY",ee.Pathogenic="PATHOGENIC",ee.PoorOutcome="POOR_OUTCOME",ee.Positive="POSITIVE",ee.Predisposition="PREDISPOSITION",ee.Protectiveness="PROTECTIVENESS",ee.ReducedSensitivity="REDUCED_SENSITIVITY",ee.Resistance="RESISTANCE",ee.Sensitivityresponse="SENSITIVITYRESPONSE",ee.UnalteredFunction="UNALTERED_FUNCTION",ee.UncertainSignificance="UNCERTAIN_SIGNIFICANCE",ee.Unknown="UNKNOWN",Z;var ee})(),j=(()=>{return(ee=j||(j={})).Description="DESCRIPTION",ee.DiseaseName="DISEASE_NAME",ee.EvidenceDirection="EVIDENCE_DIRECTION",ee.EvidenceLevel="EVIDENCE_LEVEL",ee.EvidenceRating="EVIDENCE_RATING",ee.EvidenceType="EVIDENCE_TYPE",ee.Id="ID",ee.Significance="SIGNIFICANCE",ee.Status="STATUS",ee.TherapyName="THERAPY_NAME",ee.VariantOrigin="VARIANT_ORIGIN",j;var ee})(),N=(()=>{return(ee=N||(N={})).Accepted="ACCEPTED",ee.Rejected="REJECTED",ee.Submitted="SUBMITTED",N;var ee})(),q=(()=>{return(ee=q||(q={})).Accepted="ACCEPTED",ee.All="ALL",ee.Rejected="REJECTED",ee.Submitted="SUBMITTED",q;var ee})(),Y=(()=>{return(ee=Y||(Y={})).Diagnostic="DIAGNOSTIC",ee.Functional="FUNCTIONAL",ee.Oncogenic="ONCOGENIC",ee.Predictive="PREDICTIVE",ee.Predisposing="PREDISPOSING",ee.Prognostic="PROGNOSTIC",Y;var ee})(),k=(()=>{return(ee=k||(k={})).Open="OPEN",ee.Resolved="RESOLVED",k;var ee})(),me=(()=>{return(ee=me||(me={})).Assertion="ASSERTION",ee.EvidenceItem="EVIDENCE_ITEM",ee.Gene="GENE",ee.MolecularProfile="MOLECULAR_PROFILE",ee.Variant="VARIANT",ee.VariantGroup="VARIANT_GROUP",me;var ee})(),fe=(()=>{return(ee=fe||(fe={})).AssertionCount="assertionCount",ee.DiseaseName="diseaseName",ee.EntrezSymbol="entrezSymbol",ee.EvidenceItemCount="evidenceItemCount",ee.GeneAlias="geneAlias",ee.MolecularProfileCount="molecularProfileCount",ee.TherapyName="therapyName",ee.VariantCount="variantCount",fe;var ee})(),Ce=(()=>{return(ee=Ce||(Ce={})).Assertion="ASSERTION",ee.EvidenceItem="EVIDENCE_ITEM",ee.Gene="GENE",ee.MolecularProfile="MOLECULAR_PROFILE",ee.Variant="VARIANT",ee.VariantGroup="VARIANT_GROUP",Ce;var ee})(),H=(()=>{return(ee=H||(H={})).All="ALL",ee.WithAccepted="WITH_ACCEPTED",ee.WithAcceptedOrSubmitted="WITH_ACCEPTED_OR_SUBMITTED",ee.WithSubmitted="WITH_SUBMITTED",H;var ee})(),X=(()=>{return(ee=X||(X={})).AssertionCount="assertionCount",ee.EvidenceItemCount="evidenceItemCount",ee.MolecularProfileScore="molecularProfileScore",ee.VariantCount="variantCount",X;var ee})(),ve=(()=>{return(ee=ve||(ve={})).Mention="MENTION",ee.Subscription="SUBSCRIPTION",ve;var ee})(),Ee=(()=>{return(ee=Ee||(Ee={})).Id="ID",ee.Name="NAME",Ee;var ee})(),It=(()=>{return(ee=It||(It={})).AssertionCount="ASSERTION_COUNT",ee.EvidenceItemCount="EVIDENCE_ITEM_COUNT",ee.HpoId="HPO_ID",ee.Name="NAME",It;var ee})(),St=(()=>{return(ee=St||(St={})).Read="READ",ee.Unread="UNREAD",St;var ee})(),on=(()=>{return(ee=on||(on={})).Grch37="GRCH37",ee.Grch38="GRCH38",ee.Ncbi36="NCBI36",on;var ee})(),it=(()=>{return(ee=it||(it={})).Accepted="ACCEPTED",ee.New="NEW",ee.Rejected="REJECTED",ee.Superseded="SUPERSEDED",it;var ee})(),mt=(()=>{return(ee=mt||(mt={})).Assertion="ASSERTION",ee.EvidenceItem="EVIDENCE_ITEM",ee.Gene="GENE",ee.MolecularProfile="MOLECULAR_PROFILE",ee.Revision="REVISION",ee.Variant="VARIANT",ee.VariantGroup="VARIANT_GROUP",mt;var ee})(),Pt=(()=>{return(ee=Pt||(Pt={})).Asc="ASC",ee.Desc="DESC",Pt;var ee})(),Qt=(()=>{return(ee=Qt||(Qt={})).Asco="ASCO",ee.Ash="ASH",ee.Pubmed="PUBMED",Qt;var ee})(),mn=(()=>{return(ee=mn||(mn={})).Curated="CURATED",ee.New="NEW",ee.Rejected="REJECTED",mn;var ee})(),Lt=(()=>{return(ee=Lt||(Lt={})).Citation="CITATION",ee.CitationId="CITATION_ID",ee.CreatedAt="CREATED_AT",ee.DiseaseName="DISEASE_NAME",ee.SourceType="SOURCE_TYPE",ee.Submitter="SUBMITTER",Lt;var ee})(),yt=(()=>{return(ee=yt||(yt={})).Authors="AUTHORS",ee.CitationId="CITATION_ID",ee.EvidenceCount="EVIDENCE_COUNT",ee.Journal="JOURNAL",ee.Name="NAME",ee.SourceType="SOURCE_TYPE",ee.SuggestionCount="SUGGESTION_COUNT",ee.Year="YEAR",yt;var ee})(),lt=(()=>{return(ee=lt||(lt={})).Assertion="ASSERTION",ee.EvidenceItem="EVIDENCE_ITEM",ee.Gene="GENE",ee.MolecularProfile="MOLECULAR_PROFILE",ee.Revision="REVISION",ee.SourceSuggestion="SOURCE_SUGGESTION",ee.Variant="VARIANT",ee.VariantGroup="VARIANT_GROUP",lt;var ee})(),kt=(()=>{return(ee=kt||(kt={})).Assertion="ASSERTION",ee.EvidenceItem="EVIDENCE_ITEM",ee.Gene="GENE",ee.MolecularProfile="MOLECULAR_PROFILE",ee.Revision="REVISION",ee.Role="ROLE",ee.Variant="VARIANT",ee.VariantGroup="VARIANT_GROUP",kt;var ee})(),sn=(()=>{return(ee=sn||(sn={})).Combination="COMBINATION",ee.Sequential="SEQUENTIAL",ee.Substitutes="SUBSTITUTES",sn;var ee})(),wn=(()=>{return(ee=wn||(wn={})).AssertionCount="ASSERTION_COUNT",ee.EvidenceItemCount="EVIDENCE_ITEM_COUNT",ee.Name="NAME",ee.NcitId="NCIT_ID",wn;var ee})(),zn=(()=>{return(ee=zn||(zn={})).Admin="ADMIN",ee.Curator="CURATOR",ee.Editor="EDITOR",zn;var ee})(),Yt=(()=>{return(ee=Yt||(Yt={})).Id="ID",ee.LastAction="LAST_ACTION",ee.Name="NAME",ee.Role="ROLE",Yt;var ee})(),xt=(()=>{return(ee=xt||(xt={})).EvidenceItemCount="EVIDENCE_ITEM_COUNT",ee.GeneNames="GENE_NAMES",ee.Name="NAME",ee.VariantCount="VARIANT_COUNT",ee.VariantNames="VARIANT_NAMES",xt;var ee})(),Ye=(()=>{return(ee=Ye||(Ye={})).CoordinateEnd="COORDINATE_END",ee.CoordinateStart="COORDINATE_START",ee.Name="NAME",Ye;var ee})(),$e=(()=>{return(ee=$e||($e={})).CommonGermline="COMMON_GERMLINE",ee.Mixed="MIXED",ee.Na="NA",ee.RareGermline="RARE_GERMLINE",ee.Somatic="SOMATIC",ee.Unknown="UNKNOWN",$e;var ee})(),Ae=(()=>{return(ee=Ae||(Ae={})).Name="NAME",ee.Soid="SOID",ee.VariantCount="VARIANT_COUNT",Ae;var ee})(),Qe=(()=>{return(ee=Qe||(Qe={})).DiseaseName="diseaseName",ee.EntrezSymbol="entrezSymbol",ee.TherapyName="therapyName",ee.VariantName="variantName",Qe;var ee})();const ie=t.Ps`
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
    `,K=t.Ps`
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
    ${ie}`,Te=t.Ps`
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
    ${ie}`,Pe=t.Ps`
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
    `,ot=t.Ps`
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
    `,Ct=t.Ps`
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
      revisionsetId
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
      revisionsetId
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
    ${Ut}`,Ke=t.Ps`
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
    ${ie}`,nt=t.Ps`
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
    ${ie}`,ht=t.Ps`
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
    `,Vt=t.Ps`
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
    ${ht}`,_t=t.Ps`
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
    `,tn=t.Ps`
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
    `,Dt=t.Ps`
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
    `,U=t.Ps`
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
    `,I=t.Ps`
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
    `,J=t.Ps`
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
  revisionsetId
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
    `,Jt=t.Ps`
    fragment subscriptionId on Subscription {
  id
  __typename
}
    `,zt=t.Ps`
    fragment TimepointCount on TimePointCounts {
  allTime
  newThisMonth
  newThisWeek
  newThisYear
}
    `,en=t.Ps`
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
    `,Ue=t.Ps`
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
    `,Ze=t.Ps`
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
    `,pe=t.Ps`
    fragment BrowseVariantGroupRowFields on BrowseVariantGroup {
  id
  name
  link
  geneNames
  variantNames
  variantCount
  evidenceItemCount
}
    `,Oe=t.Ps`
    fragment variantTypePopover on VariantTypePopover {
  id
  name
  url
  soid
  variantCount
}
    `,ae=t.Ps`
    fragment VariantTypeBrowseTableRowFields on BrowseVariantType {
  id
  name
  soid
  url
  variantCount
  link
}
    `,tt=t.Ps`
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
    `,En=t.Ps`
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
    `,ei=t.Ps`
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
    `,Sn=t.Ps`
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
    `,li=t.Ps`
    fragment AddDiseaseFields on AddDiseasePayload {
  new
  disease {
    id
    name
    displayName
  }
}
    `,Rn=t.Ps`
    fragment GeneTypeaheadFields on Gene {
  id
  name
  geneAliases
  entrezId
}
    `,Ti=t.Ps`
    fragment SourceTypeaheadResult on Source {
  id
  name
  citation
  citationId
  sourceType
}
    `,ro=t.Ps`
    fragment SourceStubFields on SourceStub {
  id
  citationId
  sourceType
}
    `,ui=(t.Ps`
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
    `),Ui=t.Ps`
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
    `,Pi=t.Ps`
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
    `,Ni=(t.Ps`
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
    `),qi=t.Ps`
    fragment DiseaseSelectTypeaheadFields on Disease {
  id
  name
  link
  displayName
  doid
  diseaseAliases
}
    `,kn=t.Ps`
    fragment TherapySelectTypeaheadFields on Therapy {
  id
  name
  link
  ncitId
  therapyAliases
}
    `,jn=t.Ps`
    fragment PhenotypeSelectTypeaheadFields on Phenotype {
  id
  name
  link
  hpoId
}
    `,ii=t.Ps`
    fragment SourceSelectTypeaheadFields on Source {
  id
  name
  link
  citation
  citationId
  sourceType
}
    `,eo=t.Ps`
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
    ${Ni}
${qi}
${kn}
${jn}
${ii}`,vi=t.Ps`
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
    `,xi=t.Ps`
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
    `,gi=t.Ps`
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
    `,yo=t.Ps`
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
    `,Ho=t.Ps`
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
    ${Ni}
${qi}
${kn}
${jn}
${ii}`,ni=t.Ps`
    fragment CoordinateFields on Coordinate {
  chromosome
  representativeTranscript
  start
  stop
}
    `,Jo=t.Ps`
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
    ${ni}`,sr=t.Ps`
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
    `,Ao=t.Ps`
    fragment AcmgCodeSelectTypeaheadFields on AcmgCode {
  id
  code
  name
  description
  tooltip
}
    `,Ir=t.Ps`
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
    ${qi}`,re=t.Ps`
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
    ${ie}`,Fe=t.Ps`
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
    `,je=t.Ps`
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
    `,jt=t.Ps`
    fragment QuickAddTherapyFields on AddTherapyPayload {
  new
  therapy {
    ...TherapySelectTypeaheadFields
  }
}
    ${kn}`,ln=(t.Ps`
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
    `),Pn=(t.Ps`
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
    `,xn=t.Ps`
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
    ${ie}`,An=t.Ps`
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
    `,Xn=t.Ps`
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
    ${An}`,On=t.Ps`
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
    `,Bn=t.Ps`
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
    ${ie}`,Gn=t.Ps`
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
    `,pi=t.Ps`
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
    `,ri=t.Ps`
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
      revisionsetId
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
    `,di=t.Ps`
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
    ${ri}`,Wi=t.Ps`
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
    `,ji=t.Ps`
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
    ${Wi}
${ie}`,yi=t.Ps`
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
    `,fi=t.Ps`
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
    `,Ri=t.Ps`
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
    `,ao=t.Ps`
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
    `,so=t.Ps`
    fragment SourceDetailFields on Source {
  id
  citation
  sourceUrl
  displayType
  citationId
}
    `,Ii=t.Ps`
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
    `,Li=t.Ps`
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
    `,Gi=t.Ps`
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
    ${Li}`,Fo=t.Ps`
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
    `,Yo=t.Ps`
    fragment notificationOrganization on Organization {
  id
  name
}
    `,Di=t.Ps`
    fragment notificationOriginatingUsers on User {
  id
  displayName
}
    `,po=t.Ps`
    fragment notificationFeedSubjects on EventSubjectWithCount {
  subject {
    id
    __typename
    name
  }
  occuranceCount
}
    `,qo=t.Ps`
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
    ${Ut}`,co=t.Ps`
    fragment subscribable on Subscribable {
  id
  entityType
  __typename
}
    `,Xo=t.Ps`
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
    `,pr=t.Ps`
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
    `,No=t.Ps`
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
    ${ri}`,Ps=t.Ps`
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
    `,Hr=t.Ps`
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
    ${Ps}`,Ar=t.Ps`
    query AssertionPopover($assertionId: Int!) {
  assertion(id: $assertionId) {
    ...assertionPopover
  }
}
    ${K}`;class ar extends t.AE{constructor(G){super(G),this.document=Ar}}ar.\u0275fac=function(G){return new(G||ar)(i.LFG(t._M))},ar.\u0275prov=i.Yz7({token:ar,factory:ar.\u0275fac,providedIn:"root"});const Yr=t.Ps`
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
    ${Te}`;class Lo extends t.AE{constructor(G){super(G),this.document=Yr}}Lo.\u0275fac=function(G){return new(G||Lo)(i.LFG(t._M))},Lo.\u0275prov=i.Yz7({token:Lo,factory:Lo.\u0275fac,providedIn:"root"});const Us=t.Ps`
    query ClinicalTrialPopover($clinicalTrialId: Int!) {
  clinicalTrials(id: $clinicalTrialId) {
    edges {
      node {
        ...clinicalTrialPopover
      }
    }
  }
}
    ${Pe}`;class fr extends t.AE{constructor(G){super(G),this.document=Us}}fr.\u0275fac=function(G){return new(G||fr)(i.LFG(t._M))},fr.\u0275prov=i.Yz7({token:fr,factory:fr.\u0275fac,providedIn:"root"});const ts=t.Ps`
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
    ${Ge}`;class Fr extends t.AE{constructor(G){super(G),this.document=ts}}Fr.\u0275fac=function(G){return new(G||Fr)(i.LFG(t._M))},Fr.\u0275prov=i.Yz7({token:Fr,factory:Fr.\u0275fac,providedIn:"root"});const $r=t.Ps`
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
    ${ri}`;class mr extends t.AE{constructor(G){super(G),this.document=$r}}mr.\u0275fac=function(G){return new(G||mr)(i.LFG(t._M))},mr.\u0275prov=i.Yz7({token:mr,factory:mr.\u0275fac,providedIn:"root"});const Is=t.Ps`
    query CommentPopover($commentId: Int!) {
  comment(id: $commentId) {
    ...commentPopover
  }
}
    ${ot}`;class Ve extends t.AE{constructor(G){super(G),this.document=Is}}Ve.\u0275fac=function(G){return new(G||Ve)(i.LFG(t._M))},Ve.\u0275prov=i.Yz7({token:Ve,factory:Ve.\u0275fac,providedIn:"root"});const Rt=t.Ps`
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
    `;class $ extends t.AE{constructor(G){super(G),this.document=Rt}}$.\u0275fac=function(G){return new(G||$)(i.LFG(t._M))},$.\u0275prov=i.Yz7({token:$,factory:$.\u0275fac,providedIn:"root"});const ke=t.Ps`
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
    ${Ct}`;class At extends t.AE{constructor(G){super(G),this.document=ke}}At.\u0275fac=function(G){return new(G||At)(i.LFG(t._M))},At.\u0275prov=i.Yz7({token:At,factory:At.\u0275fac,providedIn:"root"});const rn=t.Ps`
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
    `;class Dn extends t.AE{constructor(G){super(G),this.document=rn}}Dn.\u0275fac=function(G){return new(G||Dn)(i.LFG(t._M))},Dn.\u0275prov=i.Yz7({token:Dn,factory:Dn.\u0275fac,providedIn:"root"});const ai=t.Ps`
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
    ${$t}`;class qn extends t.AE{constructor(G){super(G),this.document=ai}}qn.\u0275fac=function(G){return new(G||qn)(i.LFG(t._M))},qn.\u0275prov=i.Yz7({token:qn,factory:qn.\u0275fac,providedIn:"root"});const Ei=t.Ps`
    query EvidencePopover($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...evidencePopover
  }
}
    ${Ke}`;class Un extends t.AE{constructor(G){super(G),this.document=Ei}}Un.\u0275fac=function(G){return new(G||Un)(i.LFG(t._M))},Un.\u0275prov=i.Yz7({token:Un,factory:Un.\u0275fac,providedIn:"root"});const to=t.Ps`
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
    ${nt}`;class no extends t.AE{constructor(G){super(G),this.document=to}}no.\u0275fac=function(G){return new(G||no)(i.LFG(t._M))},no.\u0275prov=i.Yz7({token:no,factory:no.\u0275fac,providedIn:"root"});const gr=t.Ps`
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
    ${Vt}`;class go extends t.AE{constructor(G){super(G),this.document=gr}}go.\u0275fac=function(G){return new(G||go)(i.LFG(t._M))},go.\u0275prov=i.Yz7({token:go,factory:go.\u0275fac,providedIn:"root"});const Ur=t.Ps`
    query FlagPopover($flagId: Int!) {
  flag(id: $flagId) {
    ...flagPopover
  }
}
    ${_t}`;class io extends t.AE{constructor(G){super(G),this.document=Ur}}io.\u0275fac=function(G){return new(G||io)(i.LFG(t._M))},io.\u0275prov=i.Yz7({token:io,factory:io.\u0275fac,providedIn:"root"});const hi=t.Ps`
    query GenePopover($geneId: Int!) {
  gene(id: $geneId) {
    ...genePopover
  }
}
    ${tn}`;class vr extends t.AE{constructor(G){super(G),this.document=hi}}vr.\u0275fac=function(G){return new(G||vr)(i.LFG(t._M))},vr.\u0275prov=i.Yz7({token:vr,factory:vr.\u0275fac,providedIn:"root"});const xe=t.Ps`
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
    ${Dt}`;class ye extends t.AE{constructor(G){super(G),this.document=xe}}ye.\u0275fac=function(G){return new(G||ye)(i.LFG(t._M))},ye.\u0275prov=i.Yz7({token:ye,factory:ye.\u0275fac,providedIn:"root"});const he=t.Ps`
    query Quicksearch($query: String!, $types: [SearchableEntities!], $highlightMatches: Boolean) {
  search(query: $query, types: $types, highlightMatches: $highlightMatches) {
    ...QuicksearchResult
  }
}
    ${We}`;class at extends t.AE{constructor(G){super(G),this.document=he}}at.\u0275fac=function(G){return new(G||at)(i.LFG(t._M))},at.\u0275prov=i.Yz7({token:at,factory:at.\u0275fac,providedIn:"root"});const pn=t.Ps`
    query MolecularProfilePopover($molecularProfileId: Int!) {
  molecularProfile(id: $molecularProfileId) {
    ...molecularProfilePopoverFields
  }
}
    ${U}`;class Yn extends t.AE{constructor(G){super(G),this.document=pn}}Yn.\u0275fac=function(G){return new(G||Yn)(i.LFG(t._M))},Yn.\u0275prov=i.Yz7({token:Yn,factory:Yn.\u0275fac,providedIn:"root"});const fo=t.Ps`
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
    ${I}`;class fn extends t.AE{constructor(G){super(G),this.document=fo}}fn.\u0275fac=function(G){return new(G||fn)(i.LFG(t._M))},fn.\u0275prov=i.Yz7({token:fn,factory:fn.\u0275fac,providedIn:"root"});const Ci=t.Ps`
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
    ${J}`;class Nr extends t.AE{constructor(G){super(G),this.document=Ci}}Nr.\u0275fac=function(G){return new(G||Nr)(i.LFG(t._M))},Nr.\u0275prov=i.Yz7({token:Nr,factory:Nr.\u0275fac,providedIn:"root"});const _r=t.Ps`
    query OrgPopover($orgId: Int!) {
  organization(id: $orgId) {
    ...orgPopover
  }
}
    ${ze}`;class Zi extends t.AE{constructor(G){super(G),this.document=_r}}Zi.\u0275fac=function(G){return new(G||Zi)(i.LFG(t._M))},Zi.\u0275prov=i.Yz7({token:Zi,factory:Zi.\u0275fac,providedIn:"root"});const $c=t.Ps`
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
    ${dt}`;class er extends t.AE{constructor(G){super(G),this.document=$c}}er.\u0275fac=function(G){return new(G||er)(i.LFG(t._M))},er.\u0275prov=i.Yz7({token:er,factory:er.\u0275fac,providedIn:"root"});const Wo=t.Ps`
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
    `;class tr extends t.AE{constructor(G){super(G),this.document=Wo}}tr.\u0275fac=function(G){return new(G||tr)(i.LFG(t._M))},tr.\u0275prov=i.Yz7({token:tr,factory:tr.\u0275fac,providedIn:"root"});const yr=t.Ps`
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
    ${Le}`;class js extends t.AE{constructor(G){super(G),this.document=yr}}js.\u0275fac=function(G){return new(G||js)(i.LFG(t._M))},js.\u0275prov=i.Yz7({token:js,factory:js.\u0275fac,providedIn:"root"});const Uc=t.Ps`
    mutation AcceptRevision($input: AcceptRevisionsInput!) {
  acceptRevisions(input: $input) {
    revisions {
      id
      __typename
    }
  }
}
    `;class Cr extends t.mm{constructor(G){super(G),this.document=Uc}}Cr.\u0275fac=function(G){return new(G||Cr)(i.LFG(t._M))},Cr.\u0275prov=i.Yz7({token:Cr,factory:Cr.\u0275fac,providedIn:"root"});const vo=t.Ps`
    mutation RejectRevision($input: RejectRevisionsInput!) {
  rejectRevisions(input: $input) {
    revisions {
      id
      __typename
    }
  }
}
    `;class $o extends t.mm{constructor(G){super(G),this.document=vo}}$o.\u0275fac=function(G){return new(G||$o)(i.LFG(t._M))},$o.\u0275prov=i.Yz7({token:$o,factory:$o.\u0275fac,providedIn:"root"});const qa=t.Ps`
    query ValidateRevisionsForAcceptance($ids: [Int!]!) {
  validateRevisionsForAcceptance(revisionIds: $ids) {
    genericErrors
    validationErrors {
      ...validationError
    }
  }
}
    ${ge}`;class Do extends t.AE{constructor(G){super(G),this.document=qa}}Do.\u0275fac=function(G){return new(G||Do)(i.LFG(t._M))},Do.\u0275prov=i.Yz7({token:Do,factory:Do.\u0275fac,providedIn:"root"});const nr=t.Ps`
    query RevisionPopover($revisionId: Int!) {
  revision(id: $revisionId) {
    ...revisionPopover
  }
}
    ${Se}`;class ns extends t.AE{constructor(G){super(G),this.document=nr}}ns.\u0275fac=function(G){return new(G||ns)(i.LFG(t._M))},ns.\u0275prov=i.Yz7({token:ns,factory:ns.\u0275fac,providedIn:"root"});const Ca=t.Ps`
    query Revisions($subject: ModeratedInput, $first: Int, $last: Int, $before: String, $after: String, $fieldName: String, $originatingUserId: Int, $resolvingUserId: Int, $revisionsetId: String, $status: RevisionStatus) {
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
    revisionsetId: $revisionsetId
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
    ${ut}`;class Cs extends t.AE{constructor(G){super(G),this.document=Ca}}Cs.\u0275fac=function(G){return new(G||Cs)(i.LFG(t._M))},Cs.\u0275prov=i.Yz7({token:Cs,factory:Cs.\u0275fac,providedIn:"root"});const zs=t.Ps`
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
    ${vt}`;class ko extends t.AE{constructor(G){super(G),this.document=zs}}ko.\u0275fac=function(G){return new(G||ko)(i.LFG(t._M))},ko.\u0275prov=i.Yz7({token:ko,factory:ko.\u0275fac,providedIn:"root"});const Gs=t.Ps`
    query SubscriptionForEntity($subscribable: SubscribableInput!) {
  subscriptionForEntity(subscribable: $subscribable) {
    ...subscriptionId
  }
}
    ${Jt}`;class cr extends t.AE{constructor(G){super(G),this.document=Gs}}cr.\u0275fac=function(G){return new(G||cr)(i.LFG(t._M))},cr.\u0275prov=i.Yz7({token:cr,factory:cr.\u0275fac,providedIn:"root"});const Qs=t.Ps`
    mutation ModerateEvidenceItem($input: ModerateEvidenceItemInput!) {
  moderateEvidenceItem(input: $input) {
    evidenceItem {
      id
    }
  }
}
    `;class zr extends t.mm{constructor(G){super(G),this.document=Qs}}zr.\u0275fac=function(G){return new(G||zr)(i.LFG(t._M))},zr.\u0275prov=i.Yz7({token:zr,factory:zr.\u0275fac,providedIn:"root"});const As=t.Ps`
    mutation ModerateAssertion($input: ModerateAssertionInput!) {
  moderateAssertion(input: $input) {
    assertion {
      id
    }
  }
}
    `;class is extends t.mm{constructor(G){super(G),this.document=As}}is.\u0275fac=function(G){return new(G||is)(i.LFG(t._M))},is.\u0275prov=i.Yz7({token:is,factory:is.\u0275fac,providedIn:"root"});const Xa=t.Ps`
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
    ${zt}`;class ir extends t.AE{constructor(G){super(G),this.document=Xa}}ir.\u0275fac=function(G){return new(G||ir)(i.LFG(t._M))},ir.\u0275prov=i.Yz7({token:ir,factory:ir.\u0275fac,providedIn:"root"});const jc=t.Ps`
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
    ${en}`;class os extends t.AE{constructor(G){super(G),this.document=jc}}os.\u0275fac=function(G){return new(G||os)(i.LFG(t._M))},os.\u0275prov=i.Yz7({token:os,factory:os.\u0275fac,providedIn:"root"});const Tr=t.Ps`
    mutation UpdateSourceSuggestionStatus($input: UpdateSourceSuggestionStatusInput!) {
  updateSourceSuggestionStatus(input: $input) {
    sourceSuggestion {
      id
      status
    }
  }
}
    `;class lr extends t.mm{constructor(G){super(G),this.document=Tr}}lr.\u0275fac=function(G){return new(G||lr)(i.LFG(t._M))},lr.\u0275prov=i.Yz7({token:lr,factory:lr.\u0275fac,providedIn:"root"});const Fs=t.Ps`
    query SourcePopover($sourceId: Int!) {
  sourcePopover(id: $sourceId) {
    ...sourcePopover
  }
}
    ${Ue}`;class zo extends t.AE{constructor(G){super(G),this.document=Fs}}zo.\u0275fac=function(G){return new(G||zo)(i.LFG(t._M))},zo.\u0275prov=i.Yz7({token:zo,factory:zo.\u0275fac,providedIn:"root"});const rs=t.Ps`
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
    ${Ze}`;class Ki extends t.AE{constructor(G){super(G),this.document=rs}}Ki.\u0275fac=function(G){return new(G||Ki)(i.LFG(t._M))},Ki.\u0275prov=i.Yz7({token:Ki,factory:Ki.\u0275fac,providedIn:"root"});const Ws=t.Ps`
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
    `;class ss extends t.AE{constructor(G){super(G),this.document=Ws}}ss.\u0275fac=function(G){return new(G||ss)(i.LFG(t._M))},ss.\u0275prov=i.Yz7({token:ss,factory:ss.\u0275fac,providedIn:"root"});const Kl=t.Ps`
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
    ${ft}`;class jr extends t.AE{constructor(G){super(G),this.document=Kl}}jr.\u0275fac=function(G){return new(G||jr)(i.LFG(t._M))},jr.\u0275prov=i.Yz7({token:jr,factory:jr.\u0275fac,providedIn:"root"});const Jl=t.Ps`
    query UserPopover($userId: Int!) {
  user(id: $userId) {
    ...popoverUser
  }
}
    ${Re}`;class te extends t.AE{constructor(G){super(G),this.document=Jl}}te.\u0275fac=function(G){return new(G||te)(i.LFG(t._M))},te.\u0275prov=i.Yz7({token:te,factory:te.\u0275fac,providedIn:"root"});const Be=t.Ps`
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
    ${He}`;class ce extends t.AE{constructor(G){super(G),this.document=Be}}ce.\u0275fac=function(G){return new(G||ce)(i.LFG(t._M))},ce.\u0275prov=i.Yz7({token:ce,factory:ce.\u0275fac,providedIn:"root"});const Xe=t.Ps`
    query VariantGroupPopover($variantGroupId: Int!) {
  variantGroup(id: $variantGroupId) {
    ...variantGroupPopoverFields
  }
}
    ${Ie}`;class Ot extends t.AE{constructor(G){super(G),this.document=Xe}}Ot.\u0275fac=function(G){return new(G||Ot)(i.LFG(t._M))},Ot.\u0275prov=i.Yz7({token:Ot,factory:Ot.\u0275fac,providedIn:"root"});const dn=t.Ps`
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
    ${pe}`;class vn extends t.AE{constructor(G){super(G),this.document=dn}}vn.\u0275fac=function(G){return new(G||vn)(i.LFG(t._M))},vn.\u0275prov=i.Yz7({token:vn,factory:vn.\u0275fac,providedIn:"root"});const Qn=t.Ps`
    query VariantTypePopover($variantTypeId: Int!) {
  variantTypePopover(id: $variantTypeId) {
    ...variantTypePopover
  }
}
    ${Oe}`;class Oi extends t.AE{constructor(G){super(G),this.document=Qn}}Oi.\u0275fac=function(G){return new(G||Oi)(i.LFG(t._M))},Oi.\u0275prov=i.Yz7({token:Oi,factory:Oi.\u0275fac,providedIn:"root"});const Qi=t.Ps`
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
    ${ae}`;class Vi extends t.AE{constructor(G){super(G),this.document=Qi}}Vi.\u0275fac=function(G){return new(G||Vi)(i.LFG(t._M))},Vi.\u0275prov=i.Yz7({token:Vi,factory:Vi.\u0275fac,providedIn:"root"});const zi=t.Ps`
    query CoordinatesCard($variantId: Int!) {
  variant(id: $variantId) {
    ...CoordinatesCardFields
  }
}
    ${tt}`;class oo extends t.AE{constructor(G){super(G),this.document=zi}}oo.\u0275fac=function(G){return new(G||oo)(i.LFG(t._M))},oo.\u0275prov=i.Yz7({token:oo,factory:oo.\u0275fac,providedIn:"root"});const Xi=t.Ps`
    query VariantPopover($variantId: Int!) {
  variant(id: $variantId) {
    ...variantPopoverFields
  }
}
    ${be}`;class lo extends t.AE{constructor(G){super(G),this.document=Xi}}lo.\u0275fac=function(G){return new(G||lo)(i.LFG(t._M))},lo.\u0275prov=i.Yz7({token:lo,factory:lo.\u0275fac,providedIn:"root"});const Zo=t.Ps`
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
    ${Zt}`;class To extends t.AE{constructor(G){super(G),this.document=Zo}}To.\u0275fac=function(G){return new(G||To)(i.LFG(t._M))},To.\u0275prov=i.Yz7({token:To,factory:To.\u0275fac,providedIn:"root"});const Lr=t.Ps`
    query VariantTypesForGene($geneId: Int) {
  variantTypes(geneId: $geneId, first: 50) {
    edges {
      node {
        ...menuVariantType
      }
    }
  }
}
    ${rt}`;class Ro extends t.AE{constructor(G){super(G),this.document=Lr}}Ro.\u0275fac=function(G){return new(G||Ro)(i.LFG(t._M))},Ro.\u0275prov=i.Yz7({token:Ro,factory:Ro.\u0275fac,providedIn:"root"});const as=t.Ps`
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
    ${nn}`;class Oo extends t.AE{constructor(G){super(G),this.document=as}}Oo.\u0275fac=function(G){return new(G||Oo)(i.LFG(t._M))},Oo.\u0275prov=i.Yz7({token:Oo,factory:Oo.\u0275fac,providedIn:"root"});const Ns=t.Ps`
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
    `;class cs extends t.AE{constructor(G){super(G),this.document=Ns}}cs.\u0275fac=function(G){return new(G||cs)(i.LFG(t._M))},cs.\u0275prov=i.Yz7({token:cs,factory:cs.\u0275fac,providedIn:"root"});const Gc=t.Ps`
    query ViewerNotificationCount {
  notifications {
    unreadCount
  }
}
    `;class za extends t.AE{constructor(G){super(G),this.document=Gc}}za.\u0275fac=function(G){return new(G||za)(i.LFG(t._M))},za.\u0275prov=i.Yz7({token:za,factory:za.\u0275fac,providedIn:"root"});const Qc=t.Ps`
    query AssertionRevisableFields($assertionId: Int!) {
  assertion(id: $assertionId) {
    ...RevisableAssertionFields
  }
}
    ${En}`;class Ts extends t.AE{constructor(G){super(G),this.document=Qc}}Ts.\u0275fac=function(G){return new(G||Ts)(i.LFG(t._M))},Ts.\u0275prov=i.Yz7({token:Ts,factory:Ts.\u0275fac,providedIn:"root"});const Wc=t.Ps`
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
    `;class ur extends t.mm{constructor(G){super(G),this.document=Wc}}ur.\u0275fac=function(G){return new(G||ur)(i.LFG(t._M))},ur.\u0275prov=i.Yz7({token:ur,factory:ur.\u0275fac,providedIn:"root"});const Zc=t.Ps`
    mutation SubmitAssertion($input: SubmitAssertionInput!) {
  submitAssertion(input: $input) {
    clientMutationId
    assertion {
      id
    }
  }
}
    `;class Ms extends t.mm{constructor(G){super(G),this.document=Zc}}Ms.\u0275fac=function(G){return new(G||Ms)(i.LFG(t._M))},Ms.\u0275prov=i.Yz7({token:Ms,factory:Ms.\u0275fac,providedIn:"root"});const ec=t.Ps`
    mutation AddComment($input: AddCommentInput!) {
  addComment(input: $input) {
    clientMutationId
    comment {
      ...commentListNode
    }
  }
}
    ${ri}`;class bo extends t.mm{constructor(G){super(G),this.document=ec}}bo.\u0275fac=function(G){return new(G||bo)(i.LFG(t._M))},bo.\u0275prov=i.Yz7({token:bo,factory:bo.\u0275fac,providedIn:"root"});const ql=t.Ps`
    query previewComment($commentText: String!) {
  previewCommentText(commentText: $commentText) {
    ...previewComment
  }
}
    ${ei}`;class Uo extends t.AE{constructor(G){super(G),this.document=ql}}Uo.\u0275fac=function(G){return new(G||Uo)(i.LFG(t._M))},Uo.\u0275prov=i.Yz7({token:Uo,factory:Uo.\u0275fac,providedIn:"root"});const bs=t.Ps`
    query userTypeahead($queryTerm: String!) {
  userTypeahead(queryTerm: $queryTerm) {
    username
  }
}
    `;class Eo extends t.AE{constructor(G){super(G),this.document=bs}}Eo.\u0275fac=function(G){return new(G||Eo)(i.LFG(t._M))},Eo.\u0275prov=i.Yz7({token:Eo,factory:Eo.\u0275fac,providedIn:"root"});const ls=t.Ps`
    query entityTypeahead($queryTerm: String!) {
  entityTypeahead(queryTerm: $queryTerm) {
    entityId
    tagType
    displayName
  }
}
    `;class Gr extends t.AE{constructor(G){super(G),this.document=ls}}Gr.\u0275fac=function(G){return new(G||Gr)(i.LFG(t._M))},Gr.\u0275prov=i.Yz7({token:Gr,factory:Gr.\u0275fac,providedIn:"root"});const tc=t.Ps`
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
    ${Sn}`;class Ls extends t.AE{constructor(G){super(G),this.document=tc}}Ls.\u0275fac=function(G){return new(G||Ls)(i.LFG(t._M))},Ls.\u0275prov=i.Yz7({token:Ls,factory:Ls.\u0275fac,providedIn:"root"});const Ta=t.Ps`
    mutation createMolecularProfile($mpStructure: MolecularProfileComponentInput!) {
  createMolecularProfile(input: {structure: $mpStructure}) {
    molecularProfile {
      id
      name
      link
    }
  }
}
    `;class nc extends t.mm{constructor(G){super(G),this.document=Ta}}nc.\u0275fac=function(G){return new(G||nc)(i.LFG(t._M))},nc.\u0275prov=i.Yz7({token:nc,factory:nc.\u0275fac,providedIn:"root"});const Xl=t.Ps`
    query AcmgCodeTypeahead($code: String!) {
  acmgCodesTypeahead(queryTerm: $code) {
    id
    code
    description
    name
    tooltip
  }
}
    `;class ic extends t.AE{constructor(G){super(G),this.document=Xl}}ic.\u0275fac=function(G){return new(G||ic)(i.LFG(t._M))},ic.\u0275prov=i.Yz7({token:ic,factory:ic.\u0275fac,providedIn:"root"});const oc=t.Ps`
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
    `;class wo extends t.AE{constructor(G){super(G),this.document=oc}}wo.\u0275fac=function(G){return new(G||wo)(i.LFG(t._M))},wo.\u0275prov=i.Yz7({token:wo,factory:wo.\u0275fac,providedIn:"root"});const rc=t.Ps`
    query DiseaseTypeahead($name: String!) {
  diseaseTypeahead(queryTerm: $name) {
    id
    name
    displayName
    doid
    diseaseAliases
  }
}
    `;class us extends t.AE{constructor(G){super(G),this.document=rc}}us.\u0275fac=function(G){return new(G||us)(i.LFG(t._M))},us.\u0275prov=i.Yz7({token:us,factory:us.\u0275fac,providedIn:"root"});const Ol=t.Ps`
    mutation AddDisease($name: String!, $doid: String) {
  addDisease(input: {name: $name, doid: $doid}) {
    ...AddDiseaseFields
  }
}
    ${li}`;class jo extends t.mm{constructor(G){super(G),this.document=Ol}}jo.\u0275fac=function(G){return new(G||jo)(i.LFG(t._M))},jo.\u0275prov=i.Yz7({token:jo,factory:jo.\u0275fac,providedIn:"root"});const sc=t.Ps`
    query EvidenceTypeahead($id: Int!) {
  evidenceItem(id: $id) {
    id
    status
    name
  }
}
    `;class Zs extends t.AE{constructor(G){super(G),this.document=sc}}Zs.\u0275fac=function(G){return new(G||Zs)(i.LFG(t._M))},Zs.\u0275prov=i.Yz7({token:Zs,factory:Zs.\u0275fac,providedIn:"root"});const xu=t.Ps`
    query GeneTypeahead($entrezSymbol: String!) {
  geneTypeahead(queryTerm: $entrezSymbol) {
    ...GeneTypeaheadFields
  }
}
    ${Rn}`;class ac extends t.AE{constructor(G){super(G),this.document=xu}}ac.\u0275fac=function(G){return new(G||ac)(i.LFG(t._M))},ac.\u0275prov=i.Yz7({token:ac,factory:ac.\u0275fac,providedIn:"root"});const Ks=t.Ps`
    query NccnGuidelineTypeahead($name: String!) {
  nccnGuidelinesTypeahead(queryTerm: $name) {
    id
    name
  }
}
    `;class ks extends t.AE{constructor(G){super(G),this.document=Ks}}ks.\u0275fac=function(G){return new(G||ks)(i.LFG(t._M))},ks.\u0275prov=i.Yz7({token:ks,factory:ks.\u0275fac,providedIn:"root"});const Mr=t.Ps`
    query PhenotypeTypeahead($name: String!) {
  phenotypeTypeahead(queryTerm: $name) {
    hpoId
    id
    name
  }
}
    `;class ds extends t.AE{constructor(G){super(G),this.document=Mr}}ds.\u0275fac=function(G){return new(G||ds)(i.LFG(t._M))},ds.\u0275prov=i.Yz7({token:ds,factory:ds.\u0275fac,providedIn:"root"});const Ma=t.Ps`
    query CitationExistenceCheck($sourceType: SourceSource!, $citationId: String!) {
  remoteCitation(sourceType: $sourceType, citationId: $citationId)
}
    `;class Js extends t.AE{constructor(G){super(G),this.document=Ma}}Js.\u0275fac=function(G){return new(G||Js)(i.LFG(t._M))},Js.\u0275prov=i.Yz7({token:Js,factory:Js.\u0275fac,providedIn:"root"});const Kc=t.Ps`
    mutation CreateSourceStub($input: AddRemoteCitationInput!) {
  addRemoteCitation(input: $input) {
    newSource {
      id
      citationId
      sourceType
    }
  }
}
    `;class hs extends t.mm{constructor(G){super(G),this.document=Kc}}hs.\u0275fac=function(G){return new(G||hs)(i.LFG(t._M))},hs.\u0275prov=i.Yz7({token:hs,factory:hs.\u0275fac,providedIn:"root"});const r1=t.Ps`
    query CitationTypeahead($partialCitationId: String!, $sourceType: SourceSource!) {
  sourceTypeahead(citationId: $partialCitationId, sourceType: $sourceType) {
    ...SourceTypeaheadResult
  }
}
    ${Ti}`;class Jc extends t.AE{constructor(G){super(G),this.document=r1}}Jc.\u0275fac=function(G){return new(G||Jc)(i.LFG(t._M))},Jc.\u0275prov=i.Yz7({token:Jc,factory:Jc.\u0275fac,providedIn:"root"});const Yi=t.Ps`
    query CheckRemoteCitation($sourceType: SourceSource!, $citationId: String!) {
  remoteCitation(sourceType: $sourceType, citationId: $citationId)
}
    `;class wl extends t.AE{constructor(G){super(G),this.document=Yi}}wl.\u0275fac=function(G){return new(G||wl)(i.LFG(t._M))},wl.\u0275prov=i.Yz7({token:wl,factory:wl.\u0275fac,providedIn:"root"});const ba=t.Ps`
    mutation AddRemoteCitation($input: AddRemoteCitationInput!) {
  addRemoteCitation(input: $input) {
    newSource {
      ...SourceStubFields
    }
  }
}
    ${ro}`;class qc extends t.mm{constructor(G){super(G),this.document=ba}}qc.\u0275fac=function(G){return new(G||qc)(i.LFG(t._M))},qc.\u0275prov=i.Yz7({token:qc,factory:qc.\u0275fac,providedIn:"root"});const cc=t.Ps`
    query SourceTypeahead($partialCitationId: String!, $sourceType: SourceSource!) {
  sourceTypeahead(citationId: $partialCitationId, sourceType: $sourceType) {
    ...SourceTypeaheadResult
  }
}
    ${Ti}`;class qs extends t.AE{constructor(G){super(G),this.document=cc}}qs.\u0275fac=function(G){return new(G||qs)(i.LFG(t._M))},qs.\u0275prov=i.Yz7({token:qs,factory:qs.\u0275fac,providedIn:"root"});const lc=t.Ps`
    query TherapyTypeahead($name: String!) {
  therapyTypeahead(queryTerm: $name) {
    id
    name
    ncitId
    therapyAliases
  }
}
    `;class Po extends t.AE{constructor(G){super(G),this.document=lc}}Po.\u0275fac=function(G){return new(G||Po)(i.LFG(t._M))},Po.\u0275prov=i.Yz7({token:Po,factory:Po.\u0275fac,providedIn:"root"});const Xs=t.Ps`
    mutation AddTherapy($name: String!, $ncitId: String) {
  addTherapy(input: {name: $name, ncitId: $ncitId}) {
    ...AddTherapyFields
  }
}
    ${ui}`;class br extends t.mm{constructor(G){super(G),this.document=Xs}}br.\u0275fac=function(G){return new(G||br)(i.LFG(t._M))},br.\u0275prov=i.Yz7({token:br,factory:br.\u0275fac,providedIn:"root"});const eu=t.Ps`
    query VariantTypeahead($name: String!, $geneId: Int) {
  variants(name: $name, geneId: $geneId, first: 20) {
    nodes {
      ...VariantTypeaheadFields
    }
  }
}
    ${Ui}`;class uo extends t.AE{constructor(G){super(G),this.document=eu}}uo.\u0275fac=function(G){return new(G||uo)(i.LFG(t._M))},uo.\u0275prov=i.Yz7({token:uo,factory:uo.\u0275fac,providedIn:"root"});const Xc=t.Ps`
    mutation AddVariant($name: String!, $geneId: Int!) {
  addVariant(input: {name: $name, geneId: $geneId}) {
    ...AddVariantFields
  }
}
    ${Pi}`;class Qr extends t.mm{constructor(G){super(G),this.document=Xc}}Qr.\u0275fac=function(G){return new(G||Qr)(i.LFG(t._M))},Qr.\u0275prov=i.Yz7({token:Qr,factory:Qr.\u0275fac,providedIn:"root"});const A=t.Ps`
    query VariantSelect($name: String!, $geneId: Int) {
  variants(name: $name, first: 20, geneId: $geneId) {
    nodes {
      ...VariantTypeaheadFields
    }
  }
}
    ${Ui}`;class B extends t.AE{constructor(G){super(G),this.document=A}}B.\u0275fac=function(G){return new(G||B)(i.LFG(t._M))},B.\u0275prov=i.Yz7({token:B,factory:B.\u0275fac,providedIn:"root"});const E=t.Ps`
    query VariantTypeTypeahead($name: String!) {
  variantTypeTypeahead(queryTerm: $name) {
    name
    soid
    id
  }
}
    `;class oe extends t.AE{constructor(G){super(G),this.document=E}}oe.\u0275fac=function(G){return new(G||oe)(i.LFG(t._M))},oe.\u0275prov=i.Yz7({token:oe,factory:oe.\u0275fac,providedIn:"root"});const De=t.Ps`
    query EvidenceItemRevisableFields($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...RevisableEvidenceFields
  }
}
    ${eo}`;class et extends t.AE{constructor(G){super(G),this.document=De}}et.\u0275fac=function(G){return new(G||et)(i.LFG(t._M))},et.\u0275prov=i.Yz7({token:et,factory:et.\u0275fac,providedIn:"root"});const ct=t.Ps`
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
    `;class Wt extends t.mm{constructor(G){super(G),this.document=ct}}Wt.\u0275fac=function(G){return new(G||Wt)(i.LFG(t._M))},Wt.\u0275prov=i.Yz7({token:Wt,factory:Wt.\u0275fac,providedIn:"root"});const yn=t.Ps`
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
    `;class Wn extends t.AE{constructor(G){super(G),this.document=yn}}Wn.\u0275fac=function(G){return new(G||Wn)(i.LFG(t._M))},Wn.\u0275prov=i.Yz7({token:Wn,factory:Wn.\u0275fac,providedIn:"root"});const $n=t.Ps`
    query EvidenceSubmittableFields($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...SubmittableEvidenceFields
  }
}
    ${vi}`;class Ai extends t.AE{constructor(G){super(G),this.document=$n}}Ai.\u0275fac=function(G){return new(G||Ai)(i.LFG(t._M))},Ai.\u0275prov=i.Yz7({token:Ai,factory:Ai.\u0275fac,providedIn:"root"});const _o=t.Ps`
    mutation SubmitEvidenceItem($input: SubmitEvidenceItemInput!) {
  submitEvidence(input: $input) {
    clientMutationId
    evidenceItem {
      id
    }
  }
}
    `;class Vo extends t.mm{constructor(G){super(G),this.document=_o}}Vo.\u0275fac=function(G){return new(G||Vo)(i.LFG(t._M))},Vo.\u0275prov=i.Yz7({token:Vo,factory:Vo.\u0275fac,providedIn:"root"});const Er=t.Ps`
    mutation FlagEntity($input: FlagEntityInput!) {
  flagEntity(input: $input) {
    flag {
      id
    }
  }
}
    `;class Go extends t.mm{constructor(G){super(G),this.document=Er}}Go.\u0275fac=function(G){return new(G||Go)(i.LFG(t._M))},Go.\u0275prov=i.Yz7({token:Go,factory:Go.\u0275fac,providedIn:"root"});const Wr=t.Ps`
    mutation ResolveFlag($input: ResolveFlagInput!) {
  resolveFlag(input: $input) {
    flag {
      id
    }
  }
}
    `;class ea extends t.mm{constructor(G){super(G),this.document=Wr}}ea.\u0275fac=function(G){return new(G||ea)(i.LFG(t._M))},ea.\u0275prov=i.Yz7({token:ea,factory:ea.\u0275fac,providedIn:"root"});const Pl=t.Ps`
    query GeneRevisableFields($geneId: Int!) {
  gene(id: $geneId) {
    ...RevisableGeneFields
  }
}
    ${xi}`;class ta extends t.AE{constructor(G){super(G),this.document=Pl}}ta.\u0275fac=function(G){return new(G||ta)(i.LFG(t._M))},ta.\u0275prov=i.Yz7({token:ta,factory:ta.\u0275fac,providedIn:"root"});const X1=t.Ps`
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
    `;class Ea extends t.mm{constructor(G){super(G),this.document=X1}}Ea.\u0275fac=function(G){return new(G||Ea)(i.LFG(t._M))},Ea.\u0275prov=i.Yz7({token:Ea,factory:Ea.\u0275fac,providedIn:"root"});const tu=t.Ps`
    query GeneAdvancedSearch($query: GeneSearchFilter!) {
  searchGenes(query: $query, createPermalink: true) {
    ...AdvancedSearchPermalink
  }
}
    ${bn}`;class Zr extends t.AE{constructor(G){super(G),this.document=tu}}Zr.\u0275fac=function(G){return new(G||Zr)(i.LFG(t._M))},Zr.\u0275prov=i.Yz7({token:Zr,factory:Zr.\u0275fac,providedIn:"root"});const el=t.Ps`
    query MolecularProfileRevisableFields($molecularProfileId: Int!) {
  molecularProfile(id: $molecularProfileId) {
    ...RevisableMolecularProfileFields
  }
}
    ${gi}`;class Sr extends t.AE{constructor(G){super(G),this.document=el}}Sr.\u0275fac=function(G){return new(G||Sr)(i.LFG(t._M))},Sr.\u0275prov=i.Yz7({token:Sr,factory:Sr.\u0275fac,providedIn:"root"});const uc=t.Ps`
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
    `;class dc extends t.mm{constructor(G){super(G),this.document=uc}}dc.\u0275fac=function(G){return new(G||dc)(i.LFG(t._M))},dc.\u0275prov=i.Yz7({token:dc,factory:dc.\u0275fac,providedIn:"root"});const tl=t.Ps`
    mutation SuggestSource($input: SuggestSourceInput!) {
  suggestSource(input: $input) {
    clientMutationId
    sourceSuggestion {
      id
    }
  }
}
    `;class Es extends t.mm{constructor(G){super(G),this.document=tl}}Es.\u0275fac=function(G){return new(G||Es)(i.LFG(t._M))},Es.\u0275prov=i.Yz7({token:Es,factory:Es.\u0275fac,providedIn:"root"});const Il=t.Ps`
    mutation UpdateSourceSuggestion($input: UpdateSourceSuggestionStatusInput!) {
  updateSourceSuggestionStatus(input: $input) {
    sourceSuggestion {
      id
      status
    }
  }
}
    `;class ps extends t.mm{constructor(G){super(G),this.document=Il}}ps.\u0275fac=function(G){return new(G||ps)(i.LFG(t._M))},ps.\u0275prov=i.Yz7({token:ps,factory:ps.\u0275fac,providedIn:"root"});const s1=t.Ps`
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
    `;class nl extends t.mm{constructor(G){super(G),this.document=s1}}nl.\u0275fac=function(G){return new(G||nl)(i.LFG(t._M))},nl.\u0275prov=i.Yz7({token:nl,factory:nl.\u0275fac,providedIn:"root"});const il=t.Ps`
    mutation UpdateUserProfile($input: EditUserInput!) {
  editUser(input: $input) {
    user {
      id
    }
  }
}
    `;class Ss extends t.mm{constructor(G){super(G),this.document=il}}Ss.\u0275fac=function(G){return new(G||Ss)(i.LFG(t._M))},Ss.\u0275prov=i.Yz7({token:Ss,factory:Ss.\u0275fac,providedIn:"root"});const Du=t.Ps`
    query Countries {
  countries {
    id
    name
  }
}
    `;class hc extends t.AE{constructor(G){super(G),this.document=Du}}hc.\u0275fac=function(G){return new(G||hc)(i.LFG(t._M))},hc.\u0275prov=i.Yz7({token:hc,factory:hc.\u0275fac,providedIn:"root"});const a1=t.Ps`
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
    `;class Al extends t.mm{constructor(G){super(G),this.document=a1}}Al.\u0275fac=function(G){return new(G||Al)(i.LFG(t._M))},Al.\u0275prov=i.Yz7({token:Al,factory:Al.\u0275fac,providedIn:"root"});const vh=t.Ps`
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
    `;class ol extends t.AE{constructor(G){super(G),this.document=vh}}ol.\u0275fac=function(G){return new(G||ol)(i.LFG(t._M))},ol.\u0275prov=i.Yz7({token:ol,factory:ol.\u0275fac,providedIn:"root"});const Fl=t.Ps`
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
    `;class Nl extends t.mm{constructor(G){super(G),this.document=Fl}}Nl.\u0275fac=function(G){return new(G||Nl)(i.LFG(t._M))},Nl.\u0275prov=i.Yz7({token:Nl,factory:Nl.\u0275fac,providedIn:"root"});const na=t.Ps`
    query VariantGroupSubmittableFields($variantGroupId: Int!) {
  variantGroup(id: $variantGroupId) {
    ...SubmittableVariantGroupFields
  }
}
    ${yo}`;class rl extends t.AE{constructor(G){super(G),this.document=na}}rl.\u0275fac=function(G){return new(G||rl)(i.LFG(t._M))},rl.\u0275prov=i.Yz7({token:rl,factory:rl.\u0275fac,providedIn:"root"});const Sa=t.Ps`
    mutation SubmitVariantGroup($input: SubmitVariantGroupInput!) {
  submitVariantGroup(input: $input) {
    clientMutationId
    variantGroup {
      id
    }
  }
}
    `;class xa extends t.mm{constructor(G){super(G),this.document=Sa}}xa.\u0275fac=function(G){return new(G||xa)(i.LFG(t._M))},xa.\u0275prov=i.Yz7({token:xa,factory:xa.\u0275fac,providedIn:"root"});const sl=t.Ps`
    query LinkableGene($geneId: Int!) {
  gene(id: $geneId) {
    id
    name
    link
  }
}
    `;class Da extends t.AE{constructor(G){super(G),this.document=sl}}Da.\u0275fac=function(G){return new(G||Da)(i.LFG(t._M))},Da.\u0275prov=i.Yz7({token:Da,factory:Da.\u0275fac,providedIn:"root"});const ed=t.Ps`
    query LinkableVariant($variantId: Int!) {
  variant(id: $variantId) {
    id
    name
    link
  }
}
    `;class al extends t.AE{constructor(G){super(G),this.document=ed}}al.\u0275fac=function(G){return new(G||al)(i.LFG(t._M))},al.\u0275prov=i.Yz7({token:al,factory:al.\u0275fac,providedIn:"root"});const c1=t.Ps`
    query LinkableTherapy($therapyId: Int!) {
  therapy(id: $therapyId) {
    id
    name
    link
  }
}
    `;class Oa extends t.AE{constructor(G){super(G),this.document=c1}}Oa.\u0275fac=function(G){return new(G||Oa)(i.LFG(t._M))},Oa.\u0275prov=i.Yz7({token:Oa,factory:Oa.\u0275fac,providedIn:"root"});const td=t.Ps`
    query EvidenceItemRevisableFields2($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...RevisableEvidenceFields2
  }
}
    ${Ho}`;class Rs extends t.AE{constructor(G){super(G),this.document=td}}Rs.\u0275fac=function(G){return new(G||Rs)(i.LFG(t._M))},Rs.\u0275prov=i.Yz7({token:Rs,factory:Rs.\u0275fac,providedIn:"root"});const nu=t.Ps`
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
    `;class xs extends t.mm{constructor(G){super(G),this.document=nu}}xs.\u0275fac=function(G){return new(G||xs)(i.LFG(t._M))},xs.\u0275prov=i.Yz7({token:xs,factory:xs.\u0275fac,providedIn:"root"});const nd=t.Ps`
    mutation SubmitSource($input: SuggestSourceInput!) {
  suggestSource(input: $input) {
    clientMutationId
    sourceSuggestion {
      id
    }
  }
}
    `;class cl extends t.mm{constructor(G){super(G),this.document=nd}}cl.\u0275fac=function(G){return new(G||cl)(i.LFG(t._M))},cl.\u0275prov=i.Yz7({token:cl,factory:cl.\u0275fac,providedIn:"root"});const Ll=t.Ps`
    query VariantRevisableFields($variantId: Int!) {
  variant(id: $variantId) {
    ...RevisableVariantFields
  }
}
    ${Jo}`;class ll extends t.AE{constructor(G){super(G),this.document=Ll}}ll.\u0275fac=function(G){return new(G||ll)(i.LFG(t._M))},ll.\u0275prov=i.Yz7({token:ll,factory:ll.\u0275fac,providedIn:"root"});const pc=t.Ps`
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
    `;class fc extends t.mm{constructor(G){super(G),this.document=pc}}fc.\u0275fac=function(G){return new(G||fc)(i.LFG(t._M))},fc.\u0275prov=i.Yz7({token:fc,factory:fc.\u0275fac,providedIn:"root"});const iu=t.Ps`
    query VariantGroupRevisableFields2($variantGroupId: Int!) {
  variantGroup(id: $variantGroupId) {
    ...VariantGroupRevisableFields2
  }
}
    ${sr}`;class wa extends t.AE{constructor(G){super(G),this.document=iu}}wa.\u0275fac=function(G){return new(G||wa)(i.LFG(t._M))},wa.\u0275prov=i.Yz7({token:wa,factory:wa.\u0275fac,providedIn:"root"});const l1=t.Ps`
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
    `;class Pa extends t.mm{constructor(G){super(G),this.document=l1}}Pa.\u0275fac=function(G){return new(G||Pa)(i.LFG(t._M))},Pa.\u0275prov=i.Yz7({token:Pa,factory:Pa.\u0275fac,providedIn:"root"});const Kr=t.Ps`
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
    `;class mc extends t.AE{constructor(G){super(G),this.document=Kr}}mc.\u0275fac=function(G){return new(G||mc)(i.LFG(t._M))},mc.\u0275prov=i.Yz7({token:mc,factory:mc.\u0275fac,providedIn:"root"});const u1=t.Ps`
    query AcmgCodeSelectTypeahead($code: String!) {
  acmgCodesTypeahead(queryTerm: $code) {
    ...AcmgCodeSelectTypeaheadFields
  }
}
    ${Ao}`;class gc extends t.AE{constructor(G){super(G),this.document=u1}}gc.\u0275fac=function(G){return new(G||gc)(i.LFG(t._M))},gc.\u0275prov=i.Yz7({token:gc,factory:gc.\u0275fac,providedIn:"root"});const Ou=t.Ps`
    query AcmgCodeSelectTag($id: Int!) {
  acmgCode(id: $id) {
    ...AcmgCodeSelectTypeaheadFields
  }
}
    ${Ao}`;class Vs extends t.AE{constructor(G){super(G),this.document=Ou}}Vs.\u0275fac=function(G){return new(G||Vs)(i.LFG(t._M))},Vs.\u0275prov=i.Yz7({token:Vs,factory:Vs.\u0275fac,providedIn:"root"});const d1=t.Ps`
    query ClingenCodeSelectTypeahead($code: String!) {
  clingenCodesTypeahead(queryTerm: $code) {
    ...ClingenCodeSelectTypeaheadFields
  }
}
    ${Ir}`;class vc extends t.AE{constructor(G){super(G),this.document=d1}}vc.\u0275fac=function(G){return new(G||vc)(i.LFG(t._M))},vc.\u0275prov=i.Yz7({token:vc,factory:vc.\u0275fac,providedIn:"root"});const h1=t.Ps`
    query ClingenCodeSelectTag($id: Int!) {
  clingenCode(id: $id) {
    ...ClingenCodeSelectTypeaheadFields
  }
}
    ${Ir}`;class Ia extends t.AE{constructor(G){super(G),this.document=h1}}Ia.\u0275fac=function(G){return new(G||Ia)(i.LFG(t._M))},Ia.\u0275prov=i.Yz7({token:Ia,factory:Ia.\u0275fac,providedIn:"root"});const p1=t.Ps`
    mutation QuickAddDisease($name: String!, $doid: String) {
  addDisease(input: {name: $name, doid: $doid}) {
    ...QuickAddDiseaseFields
  }
}
    ${qe}`;class _c extends t.mm{constructor(G){super(G),this.document=p1}}_c.\u0275fac=function(G){return new(G||_c)(i.LFG(t._M))},_c.\u0275prov=i.Yz7({token:_c,factory:_c.\u0275fac,providedIn:"root"});const dr=t.Ps`
    query DiseaseSelectTypeahead($name: String!) {
  diseaseTypeahead(queryTerm: $name) {
    ...DiseaseSelectTypeaheadFields
  }
}
    ${qi}`;class ia extends t.AE{constructor(G){super(G),this.document=dr}}ia.\u0275fac=function(G){return new(G||ia)(i.LFG(t._M))},ia.\u0275prov=i.Yz7({token:ia,factory:ia.\u0275fac,providedIn:"root"});const f1=t.Ps`
    query DiseaseSelectTag($id: Int!) {
  disease(id: $id) {
    ...DiseaseSelectTypeaheadFields
  }
}
    ${qi}`;class oa extends t.AE{constructor(G){super(G),this.document=f1}}oa.\u0275fac=function(G){return new(G||oa)(i.LFG(t._M))},oa.\u0275prov=i.Yz7({token:oa,factory:oa.\u0275fac,providedIn:"root"});const So=t.Ps`
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
    ${re}`;class Ds extends t.AE{constructor(G){super(G),this.document=So}}Ds.\u0275fac=function(G){return new(G||Ds)(i.LFG(t._M))},Ds.\u0275prov=i.Yz7({token:Ds,factory:Ds.\u0275fac,providedIn:"root"});const Aa=t.Ps`
    query EvidenceSelectTypeahead($eid: Int!) {
  evidenceItems(id: $eid) {
    nodes {
      ...EvidenceSelectTypeaheadFields
    }
  }
}
    ${Fe}`;class ra extends t.AE{constructor(G){super(G),this.document=Aa}}ra.\u0275fac=function(G){return new(G||ra)(i.LFG(t._M))},ra.\u0275prov=i.Yz7({token:ra,factory:ra.\u0275fac,providedIn:"root"});const m1=t.Ps`
    query EvidenceSelectTag($eid: Int!) {
  evidenceItem(id: $eid) {
    ...EvidenceSelectTypeaheadFields
  }
}
    ${Fe}`;class Fa extends t.AE{constructor(G){super(G),this.document=m1}}Fa.\u0275fac=function(G){return new(G||Fa)(i.LFG(t._M))},Fa.\u0275prov=i.Yz7({token:Fa,factory:Fa.\u0275fac,providedIn:"root"});const wu=t.Ps`
    query GeneSelectTypeahead($entrezSymbol: String!) {
  geneTypeahead(queryTerm: $entrezSymbol) {
    ...GeneSelectTypeaheadFields
  }
}
    ${je}`;class Na extends t.AE{constructor(G){super(G),this.document=wu}}Na.\u0275fac=function(G){return new(G||Na)(i.LFG(t._M))},Na.\u0275prov=i.Yz7({token:Na,factory:Na.\u0275fac,providedIn:"root"});const id=t.Ps`
    query GeneSelectTag($geneId: Int!) {
  gene(id: $geneId) {
    ...GeneSelectTypeaheadFields
  }
}
    ${je}`;class La extends t.AE{constructor(G){super(G),this.document=id}}La.\u0275fac=function(G){return new(G||La)(i.LFG(t._M))},La.\u0275prov=i.Yz7({token:La,factory:La.\u0275fac,providedIn:"root"});const g1=t.Ps`
    query MolecularProfileSelectTypeahead($name: String!, $geneId: Int) {
  molecularProfiles(name: $name, geneId: $geneId, first: 25) {
    nodes {
      ...MolecularProfileSelectTypeaheadFields
    }
  }
}
    ${Ni}`;class yc extends t.AE{constructor(G){super(G),this.document=g1}}yc.\u0275fac=function(G){return new(G||yc)(i.LFG(t._M))},yc.\u0275prov=i.Yz7({token:yc,factory:yc.\u0275fac,providedIn:"root"});const Bs=t.Ps`
    query MolecularProfileSelectTag($molecularProfileId: Int!) {
  molecularProfile(id: $molecularProfileId) {
    ...MolecularProfileSelectTypeaheadFields
  }
}
    ${Ni}`;class sa extends t.AE{constructor(G){super(G),this.document=Bs}}sa.\u0275fac=function(G){return new(G||sa)(i.LFG(t._M))},sa.\u0275prov=i.Yz7({token:sa,factory:sa.\u0275fac,providedIn:"root"});const v1=t.Ps`
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
    ${Tt}`;class hr extends t.AE{constructor(G){super(G),this.document=v1}}hr.\u0275fac=function(G){return new(G||hr)(i.LFG(t._M))},hr.\u0275prov=i.Yz7({token:hr,factory:hr.\u0275fac,providedIn:"root"});const Os=t.Ps`
    query MpExpressionEditorPrepopulate($mpId: Int!) {
  molecularProfile(id: $mpId) {
    id
    parsedName {
      ...MolecularProfileParsedName
    }
    rawName
  }
}
    ${ie}`;class Cc extends t.AE{constructor(G){super(G),this.document=Os}}Cc.\u0275fac=function(G){return new(G||Cc)(i.LFG(t._M))},Cc.\u0275prov=i.Yz7({token:Cc,factory:Cc.\u0275fac,providedIn:"root"});const aa=t.Ps`
    mutation CreateMolecularProfile2($mpStructure: MolecularProfileComponentInput!) {
  createMolecularProfile(input: {structure: $mpStructure}) {
    molecularProfile {
      id
      name
      link
    }
  }
}
    `;class ca extends t.mm{constructor(G){super(G),this.document=aa}}ca.\u0275fac=function(G){return new(G||ca)(i.LFG(t._M))},ca.\u0275prov=i.Yz7({token:ca,factory:ca.\u0275fac,providedIn:"root"});const ka=t.Ps`
    query NccnGuidelineSelectTypeahead($name: String!) {
  nccnGuidelinesTypeahead(queryTerm: $name) {
    ...NccnGuidelineSelectTypeaheadFields
  }
}
    ${Nt}`;class fs extends t.AE{constructor(G){super(G),this.document=ka}}fs.\u0275fac=function(G){return new(G||fs)(i.LFG(t._M))},fs.\u0275prov=i.Yz7({token:fs,factory:fs.\u0275fac,providedIn:"root"});const la=t.Ps`
    query NccnGuidelineSelectTag($id: Int!) {
  nccnGuideline(id: $id) {
    ...NccnGuidelineSelectTypeaheadFields
  }
}
    ${Nt}`;class Jr extends t.AE{constructor(G){super(G),this.document=la}}Jr.\u0275fac=function(G){return new(G||Jr)(i.LFG(t._M))},Jr.\u0275prov=i.Yz7({token:Jr,factory:Jr.\u0275fac,providedIn:"root"});const _1=t.Ps`
    query PhenotypeSelectTypeahead($name: String!) {
  phenotypeTypeahead(queryTerm: $name) {
    ...PhenotypeSelectTypeaheadFields
  }
}
    ${jn}`;class ua extends t.AE{constructor(G){super(G),this.document=_1}}ua.\u0275fac=function(G){return new(G||ua)(i.LFG(t._M))},ua.\u0275prov=i.Yz7({token:ua,factory:ua.\u0275fac,providedIn:"root"});const y1=t.Ps`
    query PhenotypeSelectTag($id: Int!) {
  phenotype(id: $id) {
    ...PhenotypeSelectTypeaheadFields
  }
}
    ${jn}`;class zc extends t.AE{constructor(G){super(G),this.document=y1}}zc.\u0275fac=function(G){return new(G||zc)(i.LFG(t._M))},zc.\u0275prov=i.Yz7({token:zc,factory:zc.\u0275fac,providedIn:"root"});const Pu=t.Ps`
    query QuickAddSourceCheckCitation($sourceType: SourceSource!, $citationId: String!) {
  remoteCitation(sourceType: $sourceType, citationId: $citationId)
}
    `;class Tc extends t.AE{constructor(G){super(G),this.document=Pu}}Tc.\u0275fac=function(G){return new(G||Tc)(i.LFG(t._M))},Tc.\u0275prov=i.Yz7({token:Tc,factory:Tc.\u0275fac,providedIn:"root"});const C1=t.Ps`
    mutation QuickAddSourceRemoteCitation($input: AddRemoteCitationInput!) {
  addRemoteCitation(input: $input) {
    newSource {
      id
      citationId
      sourceType
    }
  }
}
    `;class Mc extends t.mm{constructor(G){super(G),this.document=C1}}Mc.\u0275fac=function(G){return new(G||Mc)(i.LFG(t._M))},Mc.\u0275prov=i.Yz7({token:Mc,factory:Mc.\u0275fac,providedIn:"root"});const Iu=t.Ps`
    query SourceSelectTypeahead($partialCitationId: String!, $sourceType: SourceSource!) {
  sourceTypeahead(citationId: $partialCitationId, sourceType: $sourceType) {
    ...SourceSelectTypeaheadFields
  }
}
    ${ii}`;class da extends t.AE{constructor(G){super(G),this.document=Iu}}da.\u0275fac=function(G){return new(G||da)(i.LFG(t._M))},da.\u0275prov=i.Yz7({token:da,factory:da.\u0275fac,providedIn:"root"});const Au=t.Ps`
    query SourceSelectTag($id: Int!) {
  source(id: $id) {
    ...SourceSelectTypeaheadFields
  }
}
    ${ii}`;class ha extends t.AE{constructor(G){super(G),this.document=Au}}ha.\u0275fac=function(G){return new(G||ha)(i.LFG(t._M))},ha.\u0275prov=i.Yz7({token:ha,factory:ha.\u0275fac,providedIn:"root"});const z1=t.Ps`
    mutation QuickAddTherapy($name: String!, $ncitId: String) {
  addTherapy(input: {name: $name, ncitId: $ncitId}) {
    ...QuickAddTherapyFields
  }
}
    ${jt}`;class bc extends t.mm{constructor(G){super(G),this.document=z1}}bc.\u0275fac=function(G){return new(G||bc)(i.LFG(t._M))},bc.\u0275prov=i.Yz7({token:bc,factory:bc.\u0275fac,providedIn:"root"});const Ra=t.Ps`
    query TherapySelectTypeahead($name: String!) {
  therapyTypeahead(queryTerm: $name) {
    ...TherapySelectTypeaheadFields
  }
}
    ${kn}`;class Va extends t.AE{constructor(G){super(G),this.document=Ra}}Va.\u0275fac=function(G){return new(G||Va)(i.LFG(t._M))},Va.\u0275prov=i.Yz7({token:Va,factory:Va.\u0275fac,providedIn:"root"});const qr=t.Ps`
    query TherapySelectTag($id: Int!) {
  therapy(id: $id) {
    ...TherapySelectTypeaheadFields
  }
}
    ${kn}`;class Ba extends t.AE{constructor(G){super(G),this.document=qr}}Ba.\u0275fac=function(G){return new(G||Ba)(i.LFG(t._M))},Ba.\u0275prov=i.Yz7({token:Ba,factory:Ba.\u0275fac,providedIn:"root"});const Fu=t.Ps`
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
    ${nn}`;class Ec extends t.AE{constructor(G){super(G),this.document=Fu}}Ec.\u0275fac=function(G){return new(G||Ec)(i.LFG(t._M))},Ec.\u0275prov=i.Yz7({token:Ec,factory:Ec.\u0275fac,providedIn:"root"});const od=t.Ps`
    mutation QuickAddVariant($name: String!, $geneId: Int!) {
  addVariant(input: {name: $name, geneId: $geneId}) {
    ...AddVariantFields
  }
}
    ${Pi}`;class Hs extends t.mm{constructor(G){super(G),this.document=od}}Hs.\u0275fac=function(G){return new(G||Hs)(i.LFG(t._M))},Hs.\u0275prov=i.Yz7({token:Hs,factory:Hs.\u0275fac,providedIn:"root"});const T1=t.Ps`
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
    ${ln}`;class ms extends t.AE{constructor(G){super(G),this.document=T1}}ms.\u0275fac=function(G){return new(G||ms)(i.LFG(t._M))},ms.\u0275prov=i.Yz7({token:ms,factory:ms.\u0275fac,providedIn:"root"});const Nu=t.Ps`
    query VariantSelectTag($variantId: Int!) {
  variant(id: $variantId) {
    ...VariantSelectTypeaheadFields
  }
}
    ${ln}`;class kr extends t.AE{constructor(G){super(G),this.document=Nu}}kr.\u0275fac=function(G){return new(G||kr)(i.LFG(t._M))},kr.\u0275prov=i.Yz7({token:kr,factory:kr.\u0275fac,providedIn:"root"});const ou=t.Ps`
    query VariantTypeSelectTypeahead($name: String!) {
  variantTypeTypeahead(queryTerm: $name) {
    ...VariantTypeSelectTypeaheadFields
  }
}
    ${Pn}`;class pa extends t.AE{constructor(G){super(G),this.document=ou}}pa.\u0275fac=function(G){return new(G||pa)(i.LFG(t._M))},pa.\u0275prov=i.Yz7({token:pa,factory:pa.\u0275fac,providedIn:"root"});const kl=t.Ps`
    query VariantTypeSelectTag($id: Int!) {
  variantType(id: $id) {
    ...VariantTypeSelectTypeaheadFields
  }
}
    ${Pn}`;class Ha extends t.AE{constructor(G){super(G),this.document=kl}}Ha.\u0275fac=function(G){return new(G||Ha)(i.LFG(t._M))},Ha.\u0275prov=i.Yz7({token:Ha,factory:Ha.\u0275fac,providedIn:"root"});const M1=t.Ps`
    query AssertionDetail($assertionId: Int!) {
  assertion(id: $assertionId) {
    ...AssertionDetailFields
  }
}
    ${Tn}`;class Ya extends t.AE{constructor(G){super(G),this.document=M1}}Ya.\u0275fac=function(G){return new(G||Ya)(i.LFG(t._M))},Ya.\u0275prov=i.Yz7({token:Ya,factory:Ya.\u0275fac,providedIn:"root"});const Lu=t.Ps`
    query AssertionSummary($assertionId: Int!) {
  assertion(id: $assertionId) {
    ...AssertionSummaryFields
  }
}
    ${xn}`;class $a extends t.AE{constructor(G){super(G),this.document=Lu}}$a.\u0275fac=function(G){return new(G||$a)(i.LFG(t._M))},$a.\u0275prov=i.Yz7({token:$a,factory:$a.\u0275fac,providedIn:"root"});const ul=t.Ps`
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
    `;class Ua extends t.AE{constructor(G){super(G),this.document=ul}}Ua.\u0275fac=function(G){return new(G||Ua)(i.LFG(t._M))},Ua.\u0275prov=i.Yz7({token:Ua,factory:Ua.\u0275fac,providedIn:"root"});const dl=t.Ps`
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
    `;class Sc extends t.AE{constructor(G){super(G),this.document=dl}}Sc.\u0275fac=function(G){return new(G||Sc)(i.LFG(t._M))},Sc.\u0275prov=i.Yz7({token:Sc,factory:Sc.\u0275fac,providedIn:"root"});const rd=t.Ps`
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
    `;class xc extends t.AE{constructor(G){super(G),this.document=rd}}xc.\u0275fac=function(G){return new(G||xc)(i.LFG(t._M))},xc.\u0275prov=i.Yz7({token:xc,factory:xc.\u0275fac,providedIn:"root"});const ku=t.Ps`
    query DiseasesSummary($diseaseId: Int!) {
  disease(id: $diseaseId) {
    ...DiseasesSummaryFields
  }
}
    ${Xn}`;class fa extends t.AE{constructor(G){super(G),this.document=ku}}fa.\u0275fac=function(G){return new(G||fa)(i.LFG(t._M))},fa.\u0275prov=i.Yz7({token:fa,factory:fa.\u0275fac,providedIn:"root"});const Rl=t.Ps`
    query EvidenceDetail($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...EvidenceDetailFields
  }
}
    ${On}`;class Rr extends t.AE{constructor(G){super(G),this.document=Rl}}Rr.\u0275fac=function(G){return new(G||Rr)(i.LFG(t._M))},Rr.\u0275prov=i.Yz7({token:Rr,factory:Rr.\u0275fac,providedIn:"root"});const Ys=t.Ps`
    query EvidenceSummary($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...EvidenceSummaryFields
  }
}
    ${Bn}`;class Dc extends t.AE{constructor(G){super(G),this.document=Ys}}Dc.\u0275fac=function(G){return new(G||Dc)(i.LFG(t._M))},Dc.\u0275prov=i.Yz7({token:Dc,factory:Dc.\u0275fac,providedIn:"root"});const b1=t.Ps`
    query GeneDetail($geneId: Int!) {
  gene(id: $geneId) {
    ...GeneDetailFields
  }
}
    ${Gn}`;class hl extends t.AE{constructor(G){super(G),this.document=b1}}hl.\u0275fac=function(G){return new(G||hl)(i.LFG(t._M))},hl.\u0275prov=i.Yz7({token:hl,factory:hl.\u0275fac,providedIn:"root"});const E1=t.Ps`
    query GenesSummary($geneId: Int!) {
  gene(id: $geneId) {
    ...GeneSummaryFields
  }
}
    ${pi}`;class ma extends t.AE{constructor(G){super(G),this.document=E1}}ma.\u0275fac=function(G){return new(G||ma)(i.LFG(t._M))},ma.\u0275prov=i.Yz7({token:ma,factory:ma.\u0275fac,providedIn:"root"});const pl=t.Ps`
    query MolecularProfileDetail($mpId: Int!) {
  molecularProfile(id: $mpId) {
    ...MolecularProfileDetailFields
  }
}
    ${di}`;class ja extends t.AE{constructor(G){super(G),this.document=pl}}ja.\u0275fac=function(G){return new(G||ja)(i.LFG(t._M))},ja.\u0275prov=i.Yz7({token:ja,factory:ja.\u0275fac,providedIn:"root"});const ga=t.Ps`
    query MolecularProfileSummary($mpId: Int!) {
  molecularProfile(id: $mpId) {
    ...MolecularProfileSummaryFields
  }
}
    ${ji}`;class Vr extends t.AE{constructor(G){super(G),this.document=ga}}Vr.\u0275fac=function(G){return new(G||Vr)(i.LFG(t._M))},Vr.\u0275prov=i.Yz7({token:Vr,factory:Vr.\u0275fac,providedIn:"root"});const Ru=t.Ps`
    query OrganizationDetail($organizationId: Int!) {
  organization(id: $organizationId) {
    ...OrganizationDetailFields
  }
}
    ${yi}`;class Ga extends t.AE{constructor(G){super(G),this.document=Ru}}Ga.\u0275fac=function(G){return new(G||Ga)(i.LFG(t._M))},Ga.\u0275prov=i.Yz7({token:Ga,factory:Ga.\u0275fac,providedIn:"root"});const Vu=t.Ps`
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
    ${fi}`;class Xr extends t.AE{constructor(G){super(G),this.document=Vu}}Xr.\u0275fac=function(G){return new(G||Xr)(i.LFG(t._M))},Xr.\u0275prov=i.Yz7({token:Xr,factory:Xr.\u0275fac,providedIn:"root"});const S1=t.Ps`
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
    ${Ri}`;class Oc extends t.AE{constructor(G){super(G),this.document=S1}}Oc.\u0275fac=function(G){return new(G||Oc)(i.LFG(t._M))},Oc.\u0275prov=i.Yz7({token:Oc,factory:Oc.\u0275fac,providedIn:"root"});const x1=t.Ps`
    query PhenotypeDetail($phenotypeId: Int!) {
  phenotype(id: $phenotypeId) {
    id
    name
    hpoId
    url
    link
  }
}
    `;class wc extends t.AE{constructor(G){super(G),this.document=x1}}wc.\u0275fac=function(G){return new(G||wc)(i.LFG(t._M))},wc.\u0275prov=i.Yz7({token:wc,factory:wc.\u0275fac,providedIn:"root"});const Bu=t.Ps`
    query DataReleases {
  dataReleases {
    ...Release
  }
}
    ${ao}`;class xr extends t.AE{constructor(G){super(G),this.document=Bu}}xr.\u0275fac=function(G){return new(G||xr)(i.LFG(t._M))},xr.\u0275prov=i.Yz7({token:xr,factory:xr.\u0275fac,providedIn:"root"});const Pc=t.Ps`
    query SourceDetail($sourceId: Int!) {
  source(id: $sourceId) {
    ...SourceDetailFields
  }
}
    ${so}`;class Ic extends t.AE{constructor(G){super(G),this.document=Pc}}Ic.\u0275fac=function(G){return new(G||Ic)(i.LFG(t._M))},Ic.\u0275prov=i.Yz7({token:Ic,factory:Ic.\u0275fac,providedIn:"root"});const kd=t.Ps`
    query SourceSummary($sourceId: Int!) {
  source(id: $sourceId) {
    ...SourceSummaryFields
  }
}
    ${Ii}`;class Vl extends t.AE{constructor(G){super(G),this.document=kd}}Vl.\u0275fac=function(G){return new(G||Vl)(i.LFG(t._M))},Vl.\u0275prov=i.Yz7({token:Vl,factory:Vl.\u0275fac,providedIn:"root"});const sd=t.Ps`
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
    `;class fl extends t.AE{constructor(G){super(G),this.document=sd}}fl.\u0275fac=function(G){return new(G||fl)(i.LFG(t._M))},fl.\u0275prov=i.Yz7({token:fl,factory:fl.\u0275fac,providedIn:"root"});const ad=t.Ps`
    query TherapiesSummary($therapyId: Int!) {
  therapy(id: $therapyId) {
    ...TherapiesSummaryFields
  }
}
    ${Gi}`;class Ac extends t.AE{constructor(G){super(G),this.document=ad}}Ac.\u0275fac=function(G){return new(G||Ac)(i.LFG(t._M))},Ac.\u0275prov=i.Yz7({token:Ac,factory:Ac.\u0275fac,providedIn:"root"});const Bl=t.Ps`
    query UserDetail($userId: Int!) {
  user(id: $userId) {
    ...UserDetailFields
  }
}
    ${Fo}`;class ml extends t.AE{constructor(G){super(G),this.document=Bl}}ml.\u0275fac=function(G){return new(G||ml)(i.LFG(t._M))},ml.\u0275prov=i.Yz7({token:ml,factory:ml.\u0275fac,providedIn:"root"});const cd=t.Ps`
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
    ${po}
${Di}
${Yo}
${qo}`;class gl extends t.AE{constructor(G){super(G),this.document=cd}}gl.\u0275fac=function(G){return new(G||gl)(i.LFG(t._M))},gl.\u0275prov=i.Yz7({token:gl,factory:gl.\u0275fac,providedIn:"root"});const Hl=t.Ps`
    mutation UpdateNotificationStatus($input: UpdateNotificationStatusInput!) {
  updateNotificationStatus(input: $input) {
    notifications {
      ...notificationNode
    }
  }
}
    ${qo}`;class Dr extends t.mm{constructor(G){super(G),this.document=Hl}}Dr.\u0275fac=function(G){return new(G||Dr)(i.LFG(t._M))},Dr.\u0275prov=i.Yz7({token:Dr,factory:Dr.\u0275fac,providedIn:"root"});const va=t.Ps`
    mutation Unsubscribe($input: UnsubscribeInput!) {
  unsubscribe(input: $input) {
    unsubscribedEntities {
      ...subscribable
    }
  }
}
    ${co}`;class Fc extends t.mm{constructor(G){super(G),this.document=va}}Fc.\u0275fac=function(G){return new(G||Fc)(i.LFG(t._M))},Fc.\u0275prov=i.Yz7({token:Fc,factory:Fc.\u0275fac,providedIn:"root"});const D1=t.Ps`
    mutation Subscribe($input: SubscribeInput!) {
  subscribe(input: $input) {
    subscriptions {
      id
    }
  }
}
    `;class gs extends t.mm{constructor(G){super(G),this.document=D1}}gs.\u0275fac=function(G){return new(G||gs)(i.LFG(t._M))},gs.\u0275prov=i.Yz7({token:gs,factory:gs.\u0275fac,providedIn:"root"});const ld=t.Ps`
    query VariantGroupDetail($variantGroupId: Int!) {
  variantGroup(id: $variantGroupId) {
    ...VariantGroupDetailFields
  }
}
    ${Xo}`;class Yl extends t.AE{constructor(G){super(G),this.document=ld}}Yl.\u0275fac=function(G){return new(G||Yl)(i.LFG(t._M))},Yl.\u0275prov=i.Yz7({token:Yl,factory:Yl.\u0275fac,providedIn:"root"});const ud=t.Ps`
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
          revisionsetId
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
    `;class Nc extends t.AE{constructor(G){super(G),this.document=ud}}Nc.\u0275fac=function(G){return new(G||Nc)(i.LFG(t._M))},Nc.\u0275prov=i.Yz7({token:Nc,factory:Nc.\u0275fac,providedIn:"root"});const ru=t.Ps`
    query VariantGroupsSummary($variantGroupId: Int!) {
  variantGroup(id: $variantGroupId) {
    ...VariantGroupSummaryFields
  }
}
    ${pr}`;class vl extends t.AE{constructor(G){super(G),this.document=ru}}vl.\u0275fac=function(G){return new(G||vl)(i.LFG(t._M))},vl.\u0275prov=i.Yz7({token:vl,factory:vl.\u0275fac,providedIn:"root"});const Rd=t.Ps`
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
    `;class Lc extends t.AE{constructor(G){super(G),this.document=Rd}}Lc.\u0275fac=function(G){return new(G||Lc)(i.LFG(t._M))},Lc.\u0275prov=i.Yz7({token:Lc,factory:Lc.\u0275fac,providedIn:"root"});const O1=t.Ps`
    query VariantDetail($variantId: Int!) {
  variant(id: $variantId) {
    ...VariantDetailFields
  }
}
    ${No}`;class _l extends t.AE{constructor(G){super(G),this.document=O1}}_l.\u0275fac=function(G){return new(G||_l)(i.LFG(t._M))},_l.\u0275prov=i.Yz7({token:_l,factory:_l.\u0275fac,providedIn:"root"});const dd=t.Ps`
    query VariantSummary($variantId: Int!) {
  variant(id: $variantId) {
    ...VariantSummaryFields
  }
}