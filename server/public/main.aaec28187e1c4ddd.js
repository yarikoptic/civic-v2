"use strict";(self.webpackChunkmain=self.webpackChunkmain||[]).push([[179],{8809:(Pt,we,a)=>{a.d(we,{T6:()=>F,VD:()=>B,WE:()=>L,Yt:()=>S,lC:()=>m,py:()=>N,rW:()=>o,s:()=>x,ve:()=>s,vq:()=>T});var t=a(2567);function o(e,P,O){return{r:255*(0,t.sh)(e,255),g:255*(0,t.sh)(P,255),b:255*(0,t.sh)(O,255)}}function m(e,P,O){e=(0,t.sh)(e,255),P=(0,t.sh)(P,255),O=(0,t.sh)(O,255);var he=Math.max(e,P,O),ce=Math.min(e,P,O),te=0,ie=0,R=(he+ce)/2;if(he===ce)ie=0,te=0;else{var re=he-ce;switch(ie=R>.5?re/(2-he-ce):re/(he+ce),he){case e:te=(P-O)/re+(P<O?6:0);break;case P:te=(O-e)/re+2;break;case O:te=(e-P)/re+4}te/=6}return{h:te,s:ie,l:R}}function f(e,P,O){return O<0&&(O+=1),O>1&&(O-=1),O<1/6?e+6*O*(P-e):O<.5?P:O<2/3?e+(P-e)*(2/3-O)*6:e}function s(e,P,O){var he,ce,te;if(e=(0,t.sh)(e,360),P=(0,t.sh)(P,100),O=(0,t.sh)(O,100),0===P)ce=O,te=O,he=O;else{var ie=O<.5?O*(1+P):O+P-O*P,R=2*O-ie;he=f(R,ie,e+1/3),ce=f(R,ie,e),te=f(R,ie,e-1/3)}return{r:255*he,g:255*ce,b:255*te}}function N(e,P,O){e=(0,t.sh)(e,255),P=(0,t.sh)(P,255),O=(0,t.sh)(O,255);var he=Math.max(e,P,O),ce=Math.min(e,P,O),te=0,ie=he,R=he-ce,re=0===he?0:R/he;if(he===ce)te=0;else{switch(he){case e:te=(P-O)/R+(P<O?6:0);break;case P:te=(O-e)/R+2;break;case O:te=(e-P)/R+4}te/=6}return{h:te,s:re,v:ie}}function L(e,P,O){e=6*(0,t.sh)(e,360),P=(0,t.sh)(P,100),O=(0,t.sh)(O,100);var he=Math.floor(e),ce=e-he,te=O*(1-P),ie=O*(1-ce*P),R=O*(1-(1-ce)*P),re=he%6;return{r:255*[O,ie,te,te,R,O][re],g:255*[R,O,O,ie,te,te][re],b:255*[te,te,R,O,O,ie][re]}}function T(e,P,O,he){var ce=[(0,t.FZ)(Math.round(e).toString(16)),(0,t.FZ)(Math.round(P).toString(16)),(0,t.FZ)(Math.round(O).toString(16))];return he&&ce[0].startsWith(ce[0].charAt(1))&&ce[1].startsWith(ce[1].charAt(1))&&ce[2].startsWith(ce[2].charAt(1))?ce[0].charAt(0)+ce[1].charAt(0)+ce[2].charAt(0):ce.join("")}function x(e,P,O,he,ce){var te=[(0,t.FZ)(Math.round(e).toString(16)),(0,t.FZ)(Math.round(P).toString(16)),(0,t.FZ)(Math.round(O).toString(16)),(0,t.FZ)(w(he))];return ce&&te[0].startsWith(te[0].charAt(1))&&te[1].startsWith(te[1].charAt(1))&&te[2].startsWith(te[2].charAt(1))&&te[3].startsWith(te[3].charAt(1))?te[0].charAt(0)+te[1].charAt(0)+te[2].charAt(0)+te[3].charAt(0):te.join("")}function w(e){return Math.round(255*parseFloat(e)).toString(16)}function F(e){return B(e)/255}function B(e){return parseInt(e,16)}function S(e){return{r:e>>16,g:(65280&e)>>8,b:255&e}}},3487:(Pt,we,a)=>{a.d(we,{R:()=>t});var t={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"}},7952:(Pt,we,a)=>{a.d(we,{uA:()=>f});var t=a(8809),o=a(3487),m=a(2567);function f(B){var S={r:0,g:0,b:0},e=1,P=null,O=null,he=null,ce=!1,te=!1;return"string"==typeof B&&(B=function w(B){if(0===(B=B.trim().toLowerCase()).length)return!1;var S=!1;if(o.R[B])B=o.R[B],S=!0;else if("transparent"===B)return{r:0,g:0,b:0,a:0,format:"name"};var e=D.rgb.exec(B);return e?{r:e[1],g:e[2],b:e[3]}:(e=D.rgba.exec(B))?{r:e[1],g:e[2],b:e[3],a:e[4]}:(e=D.hsl.exec(B))?{h:e[1],s:e[2],l:e[3]}:(e=D.hsla.exec(B))?{h:e[1],s:e[2],l:e[3],a:e[4]}:(e=D.hsv.exec(B))?{h:e[1],s:e[2],v:e[3]}:(e=D.hsva.exec(B))?{h:e[1],s:e[2],v:e[3],a:e[4]}:(e=D.hex8.exec(B))?{r:(0,t.VD)(e[1]),g:(0,t.VD)(e[2]),b:(0,t.VD)(e[3]),a:(0,t.T6)(e[4]),format:S?"name":"hex8"}:(e=D.hex6.exec(B))?{r:(0,t.VD)(e[1]),g:(0,t.VD)(e[2]),b:(0,t.VD)(e[3]),format:S?"name":"hex"}:(e=D.hex4.exec(B))?{r:(0,t.VD)(e[1]+e[1]),g:(0,t.VD)(e[2]+e[2]),b:(0,t.VD)(e[3]+e[3]),a:(0,t.T6)(e[4]+e[4]),format:S?"name":"hex8"}:!!(e=D.hex3.exec(B))&&{r:(0,t.VD)(e[1]+e[1]),g:(0,t.VD)(e[2]+e[2]),b:(0,t.VD)(e[3]+e[3]),format:S?"name":"hex"}}(B)),"object"==typeof B&&(F(B.r)&&F(B.g)&&F(B.b)?(S=(0,t.rW)(B.r,B.g,B.b),ce=!0,te="%"===String(B.r).substr(-1)?"prgb":"rgb"):F(B.h)&&F(B.s)&&F(B.v)?(P=(0,m.JX)(B.s),O=(0,m.JX)(B.v),S=(0,t.WE)(B.h,P,O),ce=!0,te="hsv"):F(B.h)&&F(B.s)&&F(B.l)&&(P=(0,m.JX)(B.s),he=(0,m.JX)(B.l),S=(0,t.ve)(B.h,P,he),ce=!0,te="hsl"),Object.prototype.hasOwnProperty.call(B,"a")&&(e=B.a)),e=(0,m.Yq)(e),{ok:ce,format:B.format||te,r:Math.min(255,Math.max(S.r,0)),g:Math.min(255,Math.max(S.g,0)),b:Math.min(255,Math.max(S.b,0)),a:e}}var L="(?:".concat("[-\\+]?\\d*\\.\\d+%?",")|(?:").concat("[-\\+]?\\d+%?",")"),T="[\\s|\\(]+(".concat(L,")[,|\\s]+(").concat(L,")[,|\\s]+(").concat(L,")\\s*\\)?"),x="[\\s|\\(]+(".concat(L,")[,|\\s]+(").concat(L,")[,|\\s]+(").concat(L,")[,|\\s]+(").concat(L,")\\s*\\)?"),D={CSS_UNIT:new RegExp(L),rgb:new RegExp("rgb"+T),rgba:new RegExp("rgba"+x),hsl:new RegExp("hsl"+T),hsla:new RegExp("hsla"+x),hsv:new RegExp("hsv"+T),hsva:new RegExp("hsva"+x),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function F(B){return Boolean(D.CSS_UNIT.exec(String(B)))}},5192:(Pt,we,a)=>{a.d(we,{C:()=>s});var t=a(8809),o=a(3487),m=a(7952),f=a(2567),s=function(){function L(T,x){var D;if(void 0===T&&(T=""),void 0===x&&(x={}),T instanceof L)return T;"number"==typeof T&&(T=(0,t.Yt)(T)),this.originalInput=T;var w=(0,m.uA)(T);this.originalInput=T,this.r=w.r,this.g=w.g,this.b=w.b,this.a=w.a,this.roundA=Math.round(100*this.a)/100,this.format=null!==(D=x.format)&&void 0!==D?D:w.format,this.gradientType=x.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=w.ok}return L.prototype.isDark=function(){return this.getBrightness()<128},L.prototype.isLight=function(){return!this.isDark()},L.prototype.getBrightness=function(){var T=this.toRgb();return(299*T.r+587*T.g+114*T.b)/1e3},L.prototype.getLuminance=function(){var T=this.toRgb(),F=T.r/255,B=T.g/255,S=T.b/255;return.2126*(F<=.03928?F/12.92:Math.pow((F+.055)/1.055,2.4))+.7152*(B<=.03928?B/12.92:Math.pow((B+.055)/1.055,2.4))+.0722*(S<=.03928?S/12.92:Math.pow((S+.055)/1.055,2.4))},L.prototype.getAlpha=function(){return this.a},L.prototype.setAlpha=function(T){return this.a=(0,f.Yq)(T),this.roundA=Math.round(100*this.a)/100,this},L.prototype.isMonochrome=function(){return 0===this.toHsl().s},L.prototype.toHsv=function(){var T=(0,t.py)(this.r,this.g,this.b);return{h:360*T.h,s:T.s,v:T.v,a:this.a}},L.prototype.toHsvString=function(){var T=(0,t.py)(this.r,this.g,this.b),x=Math.round(360*T.h),D=Math.round(100*T.s),w=Math.round(100*T.v);return 1===this.a?"hsv(".concat(x,", ").concat(D,"%, ").concat(w,"%)"):"hsva(".concat(x,", ").concat(D,"%, ").concat(w,"%, ").concat(this.roundA,")")},L.prototype.toHsl=function(){var T=(0,t.lC)(this.r,this.g,this.b);return{h:360*T.h,s:T.s,l:T.l,a:this.a}},L.prototype.toHslString=function(){var T=(0,t.lC)(this.r,this.g,this.b),x=Math.round(360*T.h),D=Math.round(100*T.s),w=Math.round(100*T.l);return 1===this.a?"hsl(".concat(x,", ").concat(D,"%, ").concat(w,"%)"):"hsla(".concat(x,", ").concat(D,"%, ").concat(w,"%, ").concat(this.roundA,")")},L.prototype.toHex=function(T){return void 0===T&&(T=!1),(0,t.vq)(this.r,this.g,this.b,T)},L.prototype.toHexString=function(T){return void 0===T&&(T=!1),"#"+this.toHex(T)},L.prototype.toHex8=function(T){return void 0===T&&(T=!1),(0,t.s)(this.r,this.g,this.b,this.a,T)},L.prototype.toHex8String=function(T){return void 0===T&&(T=!1),"#"+this.toHex8(T)},L.prototype.toRgb=function(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}},L.prototype.toRgbString=function(){var T=Math.round(this.r),x=Math.round(this.g),D=Math.round(this.b);return 1===this.a?"rgb(".concat(T,", ").concat(x,", ").concat(D,")"):"rgba(".concat(T,", ").concat(x,", ").concat(D,", ").concat(this.roundA,")")},L.prototype.toPercentageRgb=function(){var T=function(x){return"".concat(Math.round(100*(0,f.sh)(x,255)),"%")};return{r:T(this.r),g:T(this.g),b:T(this.b),a:this.a}},L.prototype.toPercentageRgbString=function(){var T=function(x){return Math.round(100*(0,f.sh)(x,255))};return 1===this.a?"rgb(".concat(T(this.r),"%, ").concat(T(this.g),"%, ").concat(T(this.b),"%)"):"rgba(".concat(T(this.r),"%, ").concat(T(this.g),"%, ").concat(T(this.b),"%, ").concat(this.roundA,")")},L.prototype.toName=function(){if(0===this.a)return"transparent";if(this.a<1)return!1;for(var T="#"+(0,t.vq)(this.r,this.g,this.b,!1),x=0,D=Object.entries(o.R);x<D.length;x++){var w=D[x];if(T===w[1])return w[0]}return!1},L.prototype.toString=function(T){var x=Boolean(T);T=T??this.format;var D=!1;return!x&&this.a<1&&this.a>=0&&(T.startsWith("hex")||"name"===T)?"name"===T&&0===this.a?this.toName():this.toRgbString():("rgb"===T&&(D=this.toRgbString()),"prgb"===T&&(D=this.toPercentageRgbString()),("hex"===T||"hex6"===T)&&(D=this.toHexString()),"hex3"===T&&(D=this.toHexString(!0)),"hex4"===T&&(D=this.toHex8String(!0)),"hex8"===T&&(D=this.toHex8String()),"name"===T&&(D=this.toName()),"hsl"===T&&(D=this.toHslString()),"hsv"===T&&(D=this.toHsvString()),D||this.toHexString())},L.prototype.toNumber=function(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)},L.prototype.clone=function(){return new L(this.toString())},L.prototype.lighten=function(T){void 0===T&&(T=10);var x=this.toHsl();return x.l+=T/100,x.l=(0,f.V2)(x.l),new L(x)},L.prototype.brighten=function(T){void 0===T&&(T=10);var x=this.toRgb();return x.r=Math.max(0,Math.min(255,x.r-Math.round(-T/100*255))),x.g=Math.max(0,Math.min(255,x.g-Math.round(-T/100*255))),x.b=Math.max(0,Math.min(255,x.b-Math.round(-T/100*255))),new L(x)},L.prototype.darken=function(T){void 0===T&&(T=10);var x=this.toHsl();return x.l-=T/100,x.l=(0,f.V2)(x.l),new L(x)},L.prototype.tint=function(T){return void 0===T&&(T=10),this.mix("white",T)},L.prototype.shade=function(T){return void 0===T&&(T=10),this.mix("black",T)},L.prototype.desaturate=function(T){void 0===T&&(T=10);var x=this.toHsl();return x.s-=T/100,x.s=(0,f.V2)(x.s),new L(x)},L.prototype.saturate=function(T){void 0===T&&(T=10);var x=this.toHsl();return x.s+=T/100,x.s=(0,f.V2)(x.s),new L(x)},L.prototype.greyscale=function(){return this.desaturate(100)},L.prototype.spin=function(T){var x=this.toHsl(),D=(x.h+T)%360;return x.h=D<0?360+D:D,new L(x)},L.prototype.mix=function(T,x){void 0===x&&(x=50);var D=this.toRgb(),w=new L(T).toRgb(),F=x/100;return new L({r:(w.r-D.r)*F+D.r,g:(w.g-D.g)*F+D.g,b:(w.b-D.b)*F+D.b,a:(w.a-D.a)*F+D.a})},L.prototype.analogous=function(T,x){void 0===T&&(T=6),void 0===x&&(x=30);var D=this.toHsl(),w=360/x,F=[this];for(D.h=(D.h-(w*T>>1)+720)%360;--T;)D.h=(D.h+w)%360,F.push(new L(D));return F},L.prototype.complement=function(){var T=this.toHsl();return T.h=(T.h+180)%360,new L(T)},L.prototype.monochromatic=function(T){void 0===T&&(T=6);for(var x=this.toHsv(),D=x.h,w=x.s,F=x.v,B=[],S=1/T;T--;)B.push(new L({h:D,s:w,v:F})),F=(F+S)%1;return B},L.prototype.splitcomplement=function(){var T=this.toHsl(),x=T.h;return[this,new L({h:(x+72)%360,s:T.s,l:T.l}),new L({h:(x+216)%360,s:T.s,l:T.l})]},L.prototype.onBackground=function(T){var x=this.toRgb(),D=new L(T).toRgb();return new L({r:D.r+(x.r-D.r)*x.a,g:D.g+(x.g-D.g)*x.a,b:D.b+(x.b-D.b)*x.a})},L.prototype.triad=function(){return this.polyad(3)},L.prototype.tetrad=function(){return this.polyad(4)},L.prototype.polyad=function(T){for(var x=this.toHsl(),D=x.h,w=[this],F=360/T,B=1;B<T;B++)w.push(new L({h:(D+B*F)%360,s:x.s,l:x.l}));return w},L.prototype.equals=function(T){return this.toRgbString()===new L(T).toRgbString()},L}()},2567:(Pt,we,a)=>{function t(T,x){(function m(T){return"string"==typeof T&&-1!==T.indexOf(".")&&1===parseFloat(T)})(T)&&(T="100%");var D=function f(T){return"string"==typeof T&&-1!==T.indexOf("%")}(T);return T=360===x?T:Math.min(x,Math.max(0,parseFloat(T))),D&&(T=parseInt(String(T*x),10)/100),Math.abs(T-x)<1e-6?1:T=360===x?(T<0?T%x+x:T%x)/parseFloat(String(x)):T%x/parseFloat(String(x))}function o(T){return Math.min(1,Math.max(0,T))}function s(T){return T=parseFloat(T),(isNaN(T)||T<0||T>1)&&(T=1),T}function N(T){return T<=1?"".concat(100*Number(T),"%"):T}function L(T){return 1===T.length?"0"+T:String(T)}a.d(we,{FZ:()=>L,JX:()=>N,V2:()=>o,Yq:()=>s,sh:()=>t})},4049:(Pt,we,a)=>{a.d(we,{G:()=>pe});var t=a(4650),o=a(6895),m=a(9116),f=a(1102),s=a(6672),N=a(6581),L=a(3240),T=a(4004),x=a(9300),D=a(7630),w=a(1971),F=a(9194),B=a(6550),S=a(2635),e=a(160);function P(xe,j){if(1&xe&&(t._UZ(0,"i",9),t.ALo(1,"entityColor"),t._uU(2)),2&xe){const Z=t.oxw().ngIf;t.Q6J("nzTwotoneColor",t.lcZ(1,2,"ClinicalTrial")),t.xp6(2),t.hij(" ",Z.nctId," ")}}function O(xe,j){if(1&xe&&(t.TgZ(0,"cvc-link-tag",10),t._uU(1," View on clinicaltrials.gov "),t.qZA()),2&xe){const Z=t.oxw().ngIf;t.Q6J("href",Z.url)}}function he(xe,j){if(1&xe&&(t.ynx(0),t.TgZ(1,"nz-card",2),t.YNc(2,P,3,4,"ng-template",null,3,t.W1O),t.YNc(4,O,2,1,"ng-template",null,4,t.W1O),t.TgZ(6,"nz-descriptions",5)(7,"nz-descriptions-item",6),t._uU(8),t.qZA(),t.TgZ(9,"nz-descriptions-item",7),t._uU(10),t.qZA(),t.TgZ(11,"nz-descriptions-item",8),t._uU(12),t.qZA()()(),t.BQk()),2&xe){const Z=j.ngIf,fe=t.MAs(3),Ce=t.MAs(5);t.xp6(1),t.Q6J("nzTitle",fe)("nzExtra",Ce),t.xp6(5),t.Q6J("nzColumn",2),t.xp6(2),t.hij(" ",Z.name," "),t.xp6(2),t.hij(" ",Z.sourceCount," "),t.xp6(2),t.hij(" ",Z.evidenceCount," ")}}class ce{constructor(j){this.gql=j}ngOnInit(){if(null==this.clinicalTrialId)throw new Error("cvc-clinical-trial-popover requires valid clinicalTrialId input.");this.clinicalTrial$=this.gql.watch({clinicalTrialId:this.clinicalTrialId}).valueChanges.pipe((0,T.U)(({data:j})=>j?.clinicalTrials.edges[0]?.node),(0,x.h)(L.ep))}}function te(xe,j){}function ie(xe,j){if(1&xe&&(t.ynx(0),t.TgZ(1,"a",4),t.YNc(2,te,0,0,"ng-template",5),t.qZA(),t.BQk()),2&xe){const Z=t.oxw(),fe=t.MAs(2);t.xp6(1),t.Q6J("routerLink",Z.clinicalTrial.link),t.xp6(1),t.Q6J("ngTemplateOutlet",fe)}}function R(xe,j){}function re(xe,j){if(1&xe&&t._UZ(0,"cvc-clinical-trial-popover",8),2&xe){const Z=t.oxw(2);t.Q6J("clinicalTrialId",Z.clinicalTrial.id)}}function X(xe,j){if(1&xe&&(t.TgZ(0,"nz-tag",6),t.YNc(1,R,0,0,"ng-template",5),t.qZA(),t.YNc(2,re,1,1,"ng-template",null,7,t.W1O)),2&xe){const Z=t.MAs(3),fe=t.oxw(),Ce=t.MAs(6);t.Q6J("nzPopoverMouseEnterDelay",.5)("nzPopoverContent",Z)("nzPopoverTrigger",fe.enablePopover?"hover":null),t.xp6(1),t.Q6J("ngTemplateOutlet",Ce)}}function G(xe,j){}function De(xe,j){if(1&xe&&t.YNc(0,G,0,0,"ng-template",5),2&xe){t.oxw();const Z=t.MAs(2);t.Q6J("ngTemplateOutlet",Z)}}function Ie(xe,j){if(1&xe&&(t._UZ(0,"i",9),t.ALo(1,"entityColor"),t._uU(2)),2&xe){const Z=t.oxw();t.Q6J("nzTwotoneColor",t.lcZ(1,2,"ClinicalTrial")),t.xp6(2),t.hij(" ",Z.clinicalTrial.nctId,"\n")}}ce.\u0275fac=function(j){return new(j||ce)(t.Y36(D.UIR))},ce.\u0275cmp=t.Xpm({type:ce,selectors:[["cvc-clinical-trial-popover"]],inputs:{clinicalTrialId:"clinicalTrialId"},decls:3,vars:3,consts:[["id","popover-content"],[4,"ngIf"],["nzBordered","false","id","card-content",3,"nzTitle","nzExtra"],["cardTitle",""],["linkout",""],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","Name","nzSpan","2"],["nzTitle","Sources","nzSpan","2"],["nzTitle","Evidence","nzSpan","2"],["nz-icon","","nzTheme","twotone","nzType","civic-clinicaltrial",3,"nzTwotoneColor"],[3,"href"]],template:function(j,Z){1&j&&(t.TgZ(0,"div",0),t.YNc(1,he,13,6,"ng-container",1),t.ALo(2,"ngrxPush"),t.qZA()),2&j&&(t.xp6(1),t.Q6J("ngIf",t.lcZ(2,1,Z.clinicalTrial$)))},dependencies:[o.O5,w.bd,f.Ls,F.R7,F.uj,B.l,S.fM,e.a],styles:["[_nghost-%COMP%]{display:block;margin:-8px -12px}[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}[_nghost-%COMP%]     .ant-descriptions-view{border:none}[_nghost-%COMP%]     #entity-child-counts{border-top:1px solid #f0f0f0;padding:8px}[_nghost-%COMP%]     #entity-child-counts nz-space{width:100%}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child nz-tag{margin-right:0}.popover-text[_ngcontent-%COMP%]{width:100%;padding:8px;border-bottom:1px solid #f0f0f0}#popover-content[_ngcontent-%COMP%]{min-width:350px;max-width:500px;min-height:125px}"]});class pe{set clinicalTrial(j){if(!j)throw new Error("clinical-trial-tag clinicalTrial Input requires LinkableClinicalTrial.");this._clinicalTrial=j}get clinicalTrial(){return this._clinicalTrial}constructor(){this.linked=!0,this.enablePopover=!0}}pe.\u0275fac=function(j){return new(j||pe)},pe.\u0275cmp=t.Xpm({type:pe,selectors:[["cvc-clinical-trial-tag"]],inputs:{clinicalTrial:"clinicalTrial",linked:"linked",enablePopover:"enablePopover"},decls:7,vars:2,consts:[[4,"ngIf","ngIfElse"],["tag",""],["unlinked",""],["tagContent",""],[3,"routerLink"],[3,"ngTemplateOutlet"],["nz-popover","","nzPopoverPlacement","right",3,"nzPopoverMouseEnterDelay","nzPopoverContent","nzPopoverTrigger"],["clinicalTrialPopover",""],[3,"clinicalTrialId"],["nz-icon","","nzTheme","twotone","nzType","civic-clinicaltrial",3,"nzTwotoneColor"]],template:function(j,Z){if(1&j&&(t.YNc(0,ie,3,2,"ng-container",0),t.YNc(1,X,4,4,"ng-template",null,1,t.W1O),t.YNc(3,De,1,1,"ng-template",null,2,t.W1O),t.YNc(5,Ie,3,4,"ng-template",null,3,t.W1O)),2&j){const fe=t.MAs(4);t.Q6J("ngIf",Z.linked)("ngIfElse",fe)}},dependencies:[o.O5,o.tP,m.rH,f.Ls,s.j,N.lU,ce,e.a],styles:["[_nghost-%COMP%]{display:block}"]})},5453:(Pt,we,a)=>{a.d(we,{N:()=>B});var t=a(6895),o=a(9116),m=a(6672),f=a(6581),s=a(4989),N=a(9444),L=a(2635),T=a(1971),x=a(9194),D=a(1102),w=a(4650);class F{}F.\u0275fac=function(e){return new(e||F)},F.\u0275mod=w.oAB({type:F}),F.\u0275inj=w.cJS({imports:[t.ez,L._N,L.pP,T.vh,D.PV,x.q6,s.X,N.s]});class B{}B.\u0275fac=function(e){return new(e||B)},B.\u0275mod=w.oAB({type:B}),B.\u0275inj=w.cJS({imports:[t.ez,o.Bz,D.PV,m.X,f.$6,F,N.s]})},2925:(Pt,we,a)=>{a.d(we,{I:()=>ie});var t=a(3240),o=a(4004),m=a(9300),f=a(4650),s=a(7630),N=a(6895),L=a(1971),T=a(9194),x=a(1102),D=a(8823),w=a(6550),F=a(2635),B=a(4557);function S(R,re){if(1&R&&(f._UZ(0,"i",12),f._uU(1),f.ALo(2,"truncate")),2&R){const X=f.oxw().ngIf;f.xp6(1),f.hij(" ",f.xi3(2,1,X.name,50)," ")}}function e(R,re){if(1&R&&(f.TgZ(0,"cvc-link-tag",14),f._uU(1),f.qZA()),2&R){const X=f.oxw(2).ngIf;f.Q6J("href",X.diseaseUrl),f.xp6(1),f.hij(" DOID: ",X.doid," ")}}function P(R,re){if(1&R&&f.YNc(0,e,2,2,"cvc-link-tag",13),2&R){const X=f.oxw().ngIf,G=f.MAs(7);f.Q6J("ngIf",X.doid)("ngIfElse",G)}}function O(R,re){1&R&&(f.TgZ(0,"span",15),f._uU(1,"No DOID"),f.qZA())}function he(R,re){if(1&R&&(f.TgZ(0,"nz-descriptions-item",16),f._uU(1),f.qZA()),2&R){const X=f.oxw().ngIf;f.xp6(1),f.hij(" ",X.name," ")}}function ce(R,re){if(1&R&&(f.TgZ(0,"nz-descriptions-item",17),f._uU(1),f.qZA()),2&R){const X=f.oxw().ngIf;f.xp6(1),f.hij(" ",X.diseaseAliases.join(", ")," ")}}function te(R,re){if(1&R&&(f.ynx(0),f.TgZ(1,"nz-card",2),f.YNc(2,S,3,4,"ng-template",null,3,f.W1O),f.YNc(4,P,1,2,"ng-template",null,4,f.W1O),f.YNc(6,O,2,0,"ng-template",null,5,f.W1O),f.TgZ(8,"nz-descriptions",6),f.YNc(9,he,2,1,"nz-descriptions-item",7),f.YNc(10,ce,2,1,"nz-descriptions-item",8),f.TgZ(11,"nz-descriptions-item",9),f._uU(12),f.qZA(),f.TgZ(13,"nz-descriptions-item",10),f._uU(14),f.qZA(),f.TgZ(15,"nz-descriptions-item",11),f._uU(16),f.qZA()()(),f.BQk()),2&R){const X=re.ngIf,G=f.MAs(3),De=f.MAs(5);f.xp6(1),f.Q6J("nzTitle",G)("nzExtra",De),f.xp6(7),f.Q6J("nzColumn",1),f.xp6(1),f.Q6J("ngIf",X.name.length>50),f.xp6(1),f.Q6J("ngIf",X.diseaseAliases.length>0),f.xp6(2),f.hij(" ",X.assertionCount," "),f.xp6(2),f.hij(" ",X.evidenceItemCount," "),f.xp6(2),f.hij(" ",X.molecularProfileCount," ")}}class ie{constructor(re){this.gql=re}ngOnInit(){if(null==this.diseaseId)throw new Error("cvc-disease-popover requires valid diseaseId input.");this.disease$=this.gql.watch({diseaseId:this.diseaseId}).valueChanges.pipe((0,o.U)(({data:re})=>re?.diseasePopover),(0,m.h)(t.ep))}}ie.\u0275fac=function(re){return new(re||ie)(f.Y36(s.k7O))},ie.\u0275cmp=f.Xpm({type:ie,selectors:[["cvc-disease-popover"]],inputs:{diseaseId:"diseaseId"},decls:3,vars:3,consts:[["id","popover-content"],[4,"ngIf"],["nzBordered","false","id","card-content",3,"nzTitle","nzExtra"],["cardTitle",""],["linkout",""],["noDoid",""],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","Name","nzSpan","2",4,"ngIf"],["nzTitle","Aliases","nzSpan","2",4,"ngIf"],["nzTitle","Assertions","nzSpan","1"],["nzTitle","Evidence","nzSpan","1"],["nzTitle","Molecular Profiles","nzSpan","1"],["nz-icon","","nzType","civic-disease","nzTheme","twotone","nzTwotoneColor","#E62F76"],["tooltip","View on disease-ontology.org",3,"href",4,"ngIf","ngIfElse"],["tooltip","View on disease-ontology.org",3,"href"],["nz-typography","","nzType","secondary"],["nzTitle","Name","nzSpan","2"],["nzTitle","Aliases","nzSpan","2"]],template:function(re,X){1&re&&(f.TgZ(0,"div",0),f.YNc(1,te,17,8,"ng-container",1),f.ALo(2,"ngrxPush"),f.qZA()),2&re&&(f.xp6(1),f.Q6J("ngIf",f.lcZ(2,1,X.disease$)))},dependencies:[N.O5,L.bd,T.R7,T.uj,x.Ls,D.ZU,w.l,F.fM,B.W],styles:["[_nghost-%COMP%]{display:block;margin:-8px -12px}[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}[_nghost-%COMP%]     .ant-descriptions-view{border:none}[_nghost-%COMP%]     #entity-child-counts{border-top:1px solid #f0f0f0;padding:8px}[_nghost-%COMP%]     #entity-child-counts nz-space{width:100%}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child nz-tag{margin-right:0}.popover-text[_ngcontent-%COMP%]{width:100%;padding:8px;border-bottom:1px solid #f0f0f0}#popover-content[_ngcontent-%COMP%]{min-width:350px;max-width:500px;min-height:125px}"]})},3638:(Pt,we,a)=>{a.d(we,{t:()=>D});var t=a(6895),o=a(1971),m=a(9194),f=a(1102),s=a(4989),N=a(2635),L=a(8823),T=a(9444),x=a(4650);class D{}D.\u0275fac=function(F){return new(F||D)},D.\u0275mod=x.oAB({type:D}),D.\u0275inj=x.cJS({imports:[t.ez,N._N,N.pP,o.vh,m.q6,f.PV,L.ZJ,T.s,s.X]})},3193:(Pt,we,a)=>{a.d(we,{H:()=>It});var t=a(6654),o=a(9771),m=a(4650),f=a(6895),s=a(9116),N=a(6672),L=a(6581),T=a(1102),x=a(3240),D=a(4004),w=a(9300),F=a(7630),B=a(1971),S=a(3679),e=a(9194),P=a(6903),O=a(2635),he=a(160);function ce(wt,un){if(1&wt&&(m._UZ(0,"i",11),m.ALo(1,"entityColor"),m._uU(2)),2&wt){const Et=m.oxw().ngIf;m.Q6J("nzTwotoneColor",m.lcZ(1,2,"Gene")),m.xp6(2),m.hij(" ",Et.officialName," ")}}function te(wt,un){if(1&wt&&(m.TgZ(0,"nz-tag"),m._uU(1),m.qZA()),2&wt){const Et=un.$implicit;m.xp6(1),m.Oqu(Et)}}function ie(wt,un){if(1&wt&&(m.TgZ(0,"nz-descriptions-item",12),m.YNc(1,te,2,1,"nz-tag",13),m.qZA()),2&wt){const Et=m.oxw().ngIf;m.xp6(1),m.Q6J("ngForOf",Et.geneAliases)}}function R(wt,un){if(1&wt&&(m.TgZ(0,"a",14)(1,"nz-tag",15),m._UZ(2,"i",16),m._uU(3),m.qZA()()),2&wt){const Et=m.oxw().ngIf;m.MGl("routerLink","/genes/",Et.id,"/flags"),m.xp6(3),m.hij(" Flags (",Et.flags.totalCount,") ")}}function re(wt,un){if(1&wt&&(m.TgZ(0,"a",14)(1,"nz-tag",17),m._UZ(2,"i",18),m._uU(3),m.qZA()()),2&wt){const Et=m.oxw().ngIf;m.MGl("routerLink","/genes/",Et.id,"/revisions"),m.xp6(3),m.hij(" Revisions (",Et.revisions.totalCount,") ")}}function X(wt,un){if(1&wt&&(m.TgZ(0,"a",14)(1,"nz-tag",19),m._UZ(2,"i",20),m._uU(3),m.qZA()()),2&wt){const Et=m.oxw().ngIf;m.MGl("routerLink","/genes/",Et.id,"/comments"),m.xp6(3),m.hij(" Comments (",Et.comments.totalCount,") ")}}function G(wt,un){if(1&wt&&(m.ynx(0),m.TgZ(1,"nz-card",2),m.YNc(2,ce,3,4,"ng-template",null,3,m.W1O),m.TgZ(4,"nz-descriptions",4),m.YNc(5,ie,2,1,"nz-descriptions-item",5),m.TgZ(6,"nz-descriptions-item",6),m._uU(7),m.qZA()(),m.TgZ(8,"nz-row",7)(9,"nz-col",8)(10,"nz-space",9),m.YNc(11,R,4,2,"a",10),m.YNc(12,re,4,2,"a",10),m.YNc(13,X,4,2,"a",10),m.qZA()()()(),m.BQk()),2&wt){const Et=un.ngIf,gt=m.MAs(3);m.xp6(1),m.Q6J("nzTitle",gt),m.xp6(3),m.Q6J("nzColumn",2),m.xp6(1),m.Q6J("ngIf",Et.geneAliases.length>0),m.xp6(2),m.hij(" ",Et.variants.totalCount," ")}}class De{constructor(un){this.gql=un}ngOnInit(){if(null==this.geneId)throw new Error("cvc-gene-popover requires valid geneId input.");this.gene$=this.gql.watch({geneId:this.geneId}).valueChanges.pipe((0,D.U)(({data:un})=>un?.gene),(0,w.h)(x.ep))}}De.\u0275fac=function(un){return new(un||De)(m.Y36(F.rJ8))},De.\u0275cmp=m.Xpm({type:De,selectors:[["cvc-gene-popover"]],inputs:{geneId:"geneId"},decls:3,vars:3,consts:[["id","popover-content"],[4,"ngIf"],["nzBordered","false","id","card-content",3,"nzTitle"],["cardTitle",""],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","Aliases","nzSpan","2",4,"ngIf"],["nzTitle","Variants"],["id","entity-child-counts"],["nzSpan","24"],["nzSize","small"],[3,"routerLink",4,"nzSpaceItem"],["nz-icon","","nzTheme","twotone","nzType","civic-gene",3,"nzTwotoneColor"],["nzTitle","Aliases","nzSpan","2"],[4,"ngFor","ngForOf"],[3,"routerLink"],["nzColor","red"],["nz-icon","","nzType","civic-flag"],["nzColor","orange"],["nz-icon","","nzType","civic-revision"],["nzColor","blue"],["nz-icon","","nzType","civic-comment"]],template:function(un,Et){1&un&&(m.TgZ(0,"div",0),m.YNc(1,G,14,4,"ng-container",1),m.ALo(2,"ngrxPush"),m.qZA()),2&un&&(m.xp6(1),m.Q6J("ngIf",m.lcZ(2,1,Et.gene$)))},dependencies:[f.sg,f.O5,s.rH,B.bd,S.t3,S.SK,e.R7,e.uj,N.j,T.Ls,P.NU,P.$1,O.fM,he.a],styles:["[_nghost-%COMP%]{display:block;margin:-8px -12px}[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}[_nghost-%COMP%]     .ant-descriptions-view{border:none}[_nghost-%COMP%]     #entity-child-counts{border-top:1px solid #f0f0f0;padding:8px}[_nghost-%COMP%]     #entity-child-counts nz-space{width:100%}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child nz-tag{margin-right:0}.popover-text[_ngcontent-%COMP%]{width:100%;padding:8px;border-bottom:1px solid #f0f0f0}#popover-content[_ngcontent-%COMP%]{min-width:350px;max-width:500px;min-height:125px}"]});var Ie=a(1730),pe=a(4557);function xe(wt,un){}function j(wt,un){if(1&wt&&(m.ynx(0),m.TgZ(1,"a",4),m.YNc(2,xe,0,0,"ng-template",5),m.qZA(),m.BQk()),2&wt){const Et=m.oxw(),gt=m.MAs(2);m.xp6(1),m.Q6J("routerLink",Et.gene.link),m.xp6(1),m.Q6J("ngTemplateOutlet",gt)}}function Z(wt,un){}function fe(wt,un){if(1&wt&&m._UZ(0,"cvc-gene-popover",8),2&wt){const Et=m.oxw(2);m.Q6J("geneId",Et.gene.id)}}function Ce(wt,un){if(1&wt){const Et=m.EpF();m.TgZ(0,"nz-tag",6),m.NdJ("nzOnClose",function(Xt){m.CHM(Et);const yt=m.oxw();return m.KtG(yt.itemClosed(Xt))}),m.YNc(1,Z,0,0,"ng-template",5),m.qZA(),m.YNc(2,fe,1,1,"ng-template",null,7,m.W1O)}if(2&wt){const Et=m.MAs(3),gt=m.oxw(),Xt=m.MAs(6);m.Q6J("nzPopoverMouseEnterDelay",gt.onCloseClicked?0:.5)("nzPopoverContent",Et)("nzPopoverTrigger",gt.enablePopover?"hover":null)("nzMode",gt.onCloseClicked?"closeable":"default"),m.xp6(1),m.Q6J("ngTemplateOutlet",Xt)}}function kt(wt,un){}function Ot(wt,un){if(1&wt&&m.YNc(0,kt,0,0,"ng-template",5),2&wt){m.oxw();const Et=m.MAs(2);m.Q6J("ngTemplateOutlet",Et)}}function rn(wt,un){if(1&wt&&(m.ynx(0),m._uU(1),m.ALo(2,"truncate"),m.BQk()),2&wt){const Et=m.oxw(2);m.xp6(1),m.hij(" ",m.xi3(2,1,Et.gene.name,12)," ")}}function nt(wt,un){if(1&wt&&m._uU(0),2&wt){const Et=m.oxw(2);m.hij(" ",Et.gene.name," ")}}function pt(wt,un){if(1&wt&&(m.TgZ(0,"cvc-icon-badges",9),m._UZ(1,"i",10),m.ALo(2,"entityColor"),m.qZA(),m.YNc(3,rn,3,4,"ng-container",0),m.YNc(4,nt,1,1,"ng-template",null,11,m.W1O)),2&wt){const Et=m.MAs(5),gt=m.oxw();m.Q6J("flagged",gt.gene.flagged)("entityColor",gt.iconColor),m.xp6(1),m.Q6J("nzTwotoneColor",m.lcZ(2,5,"Gene")),m.xp6(2),m.Q6J("ngIf",gt.truncateLongName)("ngIfElse",Et)}}class It extends t.a{constructor(){super(),this.enablePopover=!0,this.truncateLongName=!1,this.iconColor=(0,o.f)("Gene")}idFunction(){return this.gene.id}ngOnInit(){if(super.ngOnInit(),void 0===this.gene)throw new Error("cvc-gene-tag requires LinkableGene input, none supplied.")}}It.\u0275fac=function(un){return new(un||It)},It.\u0275cmp=m.Xpm({type:It,selectors:[["cvc-gene-tag"]],inputs:{gene:"gene",enablePopover:"enablePopover",truncateLongName:"truncateLongName"},features:[m.qOj],decls:7,vars:2,consts:[[4,"ngIf","ngIfElse"],["tag",""],["unlinked",""],["tagContent",""],[3,"routerLink"],[3,"ngTemplateOutlet"],["nz-popover","",3,"nzPopoverMouseEnterDelay","nzPopoverContent","nzPopoverTrigger","nzMode","nzOnClose"],["genePopover",""],[3,"geneId"],[3,"flagged","entityColor"],["nz-icon","","nzType","civic-gene","nzTheme","twotone",3,"nzTwotoneColor"],["fullName",""]],template:function(un,Et){if(1&un&&(m.YNc(0,j,3,2,"ng-container",0),m.YNc(1,Ce,4,5,"ng-template",null,1,m.W1O),m.YNc(3,Ot,1,1,"ng-template",null,2,m.W1O),m.YNc(5,pt,6,7,"ng-template",null,3,m.W1O)),2&un){const gt=m.MAs(4);m.Q6J("ngIf",Et.linked)("ngIfElse",gt)}},dependencies:[f.O5,f.tP,s.rH,N.j,L.lU,T.Ls,De,Ie.b,pe.W,he.a],encapsulation:2,changeDetection:0})},3309:(Pt,we,a)=>{a.d(we,{U:()=>P});var t=a(6895),o=a(9116),m=a(6672),f=a(1102),s=a(6581),N=a(9444),L=a(2635),T=a(1971),x=a(9194),D=a(3679),w=a(6903),F=a(4650);class B{}B.\u0275fac=function(he){return new(he||B)},B.\u0275mod=F.oAB({type:B}),B.\u0275inj=F.cJS({imports:[t.ez,o.Bz,L._N,L.pP,T.vh,D.Jb,x.q6,m.X,f.PV,w.zf,N.s]});var S=a(48),e=a(6429);class P{}P.\u0275fac=function(he){return new(he||P)},P.\u0275mod=F.oAB({type:P}),P.\u0275inj=F.cJS({imports:[t.ez,o.Bz,m.X,s.$6,f.PV,S.mS,N.s,B,e.C]})},3314:(Pt,we,a)=>{a.d(we,{_:()=>Ie});var t=a(3240),o=a(4004),m=a(9300),f=a(4650),s=a(7630),N=a(6895),L=a(9116),T=a(1971),x=a(3679),D=a(9194),w=a(6672),F=a(1102),B=a(6903),S=a(6715),e=a(7230),P=a(2635);function O(pe,xe){if(1&pe&&(f._UZ(0,"i",16),f._uU(1)),2&pe){const j=f.oxw().ngIf;f.xp6(1),f.hij(" ",j.name," ")}}function he(pe,xe){if(1&pe&&(f.TgZ(0,"nz-descriptions-item",17),f._uU(1),f.qZA()),2&pe){const j=f.oxw().ngIf;f.xp6(1),f.hij(" ",j.evidenceItems.totalCount," ")}}function ce(pe,xe){if(1&pe&&(f.TgZ(0,"nz-descriptions-item",18),f._uU(1),f.qZA()),2&pe){const j=f.oxw().ngIf;f.xp6(1),f.hij(" ",j.assertions.totalCount," ")}}function te(pe,xe){if(1&pe&&(f.TgZ(0,"nz-tag"),f._uU(1),f.qZA()),2&pe){const j=xe.$implicit;f.xp6(1),f.Oqu(j)}}function ie(pe,xe){if(1&pe&&(f.ynx(0),f.TgZ(1,"cvc-tag-list"),f.YNc(2,te,2,1,"nz-tag",19),f.qZA(),f.BQk()),2&pe){const j=f.oxw().ngIf;f.xp6(2),f.Q6J("ngForOf",j.molecularProfileAliases)}}function R(pe,xe){1&pe&&(f.TgZ(0,"span",20),f._uU(1,"None specified"),f.qZA())}function re(pe,xe){if(1&pe&&(f.TgZ(0,"a",21)(1,"nz-tag",22),f._UZ(2,"i",23),f._uU(3),f.qZA()()),2&pe){const j=f.oxw().ngIf;f.MGl("routerLink","/molecular-profiles/",j.id,"/flags"),f.xp6(3),f.hij(" Flags (",j.flags.totalCount,") ")}}function X(pe,xe){if(1&pe&&(f.TgZ(0,"a",21)(1,"nz-tag",24),f._UZ(2,"i",25),f._uU(3),f.qZA()()),2&pe){const j=f.oxw().ngIf;f.MGl("routerLink","/molecular-profiles/",j.id,"/revisions"),f.xp6(3),f.hij(" Revisions (",j.revisions.totalCount,") ")}}function G(pe,xe){if(1&pe&&(f.TgZ(0,"a",21)(1,"nz-tag",26),f._UZ(2,"i",27),f._uU(3),f.qZA()()),2&pe){const j=f.oxw().ngIf;f.MGl("routerLink","/molecular-profiles/",j.id,"/comments"),f.xp6(3),f.hij(" Comments (",j.comments.totalCount,") ")}}function De(pe,xe){if(1&pe&&(f.ynx(0),f.TgZ(1,"nz-card",2),f.YNc(2,O,2,1,"ng-template",null,3,f.W1O),f.TgZ(4,"nz-descriptions",4)(5,"nz-descriptions-item",5),f._UZ(6,"cvc-mp-tag-name",6),f.qZA(),f.YNc(7,he,2,1,"nz-descriptions-item",7),f.YNc(8,ce,2,1,"nz-descriptions-item",8),f.TgZ(9,"nz-descriptions-item",9),f.YNc(10,ie,3,1,"ng-container",10),f.YNc(11,R,2,0,"ng-template",null,11,f.W1O),f.qZA()(),f.TgZ(13,"nz-row",12)(14,"nz-col",13)(15,"nz-space",14),f.YNc(16,re,4,2,"a",15),f.YNc(17,X,4,2,"a",15),f.YNc(18,G,4,2,"a",15),f.qZA()()()(),f.BQk()),2&pe){const j=xe.ngIf,Z=f.MAs(3),fe=f.MAs(12);f.xp6(1),f.Q6J("nzTitle",Z),f.xp6(3),f.Q6J("nzColumn",2),f.xp6(2),f.Q6J("nameSegments",j.parsedName)("enablePopover",!1),f.xp6(1),f.Q6J("ngIf",j.evidenceItems.totalCount>0),f.xp6(1),f.Q6J("ngIf",j.assertions.totalCount>0),f.xp6(2),f.Q6J("ngIf",j.molecularProfileAliases.length>0)("ngIfElse",fe)}}class Ie{constructor(xe){this.gql=xe}ngOnInit(){if(void 0===this.molecularProfileId)throw new Error("Must pass a molecular profile ID into the molecular profile popover component.");this.molecularProfile$=this.gql.watch({molecularProfileId:this.molecularProfileId}).valueChanges.pipe((0,o.U)(({data:xe})=>xe?.molecularProfile),(0,m.h)(t.ep))}}Ie.\u0275fac=function(xe){return new(xe||Ie)(f.Y36(s.DkJ))},Ie.\u0275cmp=f.Xpm({type:Ie,selectors:[["cvc-molecular-profile-popover"]],inputs:{molecularProfileId:"molecularProfileId"},decls:3,vars:3,consts:[["id","popover-content"],[4,"ngIf"],["nzBordered","false","id","card-content",3,"nzTitle"],["cardTitle",""],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","MP Expression","nzSpan","2"],[3,"nameSegments","enablePopover"],["nzTitle","Evidence Items","nzSpan","2",4,"ngIf"],["nzTitle","Assertions","nzSpan","2",4,"ngIf"],["nzTitle","Aliases"],[4,"ngIf","ngIfElse"],["noAliases",""],["id","entity-child-counts"],["nzSpan","24"],["nzSize","small"],[3,"routerLink",4,"nzSpaceItem"],["nz-icon","","nzType","civic:molecularprofile"],["nzTitle","Evidence Items","nzSpan","2"],["nzTitle","Assertions","nzSpan","2"],[4,"ngFor","ngForOf"],["nz-typography","","nzType","secondary"],[3,"routerLink"],["nzColor","red"],["nz-icon","","nzType","civic-flag"],["nzColor","orange"],["nz-icon","","nzType","civic-revision"],["nzColor","blue"],["nz-icon","","nzType","civic-comment"]],template:function(xe,j){1&xe&&(f.TgZ(0,"div",0),f.YNc(1,De,19,8,"ng-container",1),f.ALo(2,"ngrxPush"),f.qZA()),2&xe&&(f.xp6(1),f.Q6J("ngIf",f.lcZ(2,1,j.molecularProfile$)))},dependencies:[N.sg,N.O5,L.rH,T.bd,x.t3,x.SK,D.R7,D.uj,w.j,F.Ls,B.NU,B.$1,S.$,e.C,P.fM],styles:["[_nghost-%COMP%]{display:block;margin:-8px -12px}[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}[_nghost-%COMP%]     .ant-descriptions-view{border:none}[_nghost-%COMP%]     #entity-child-counts{border-top:1px solid #f0f0f0;padding:8px}[_nghost-%COMP%]     #entity-child-counts nz-space{width:100%}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child nz-tag{margin-right:0}.popover-text[_ngcontent-%COMP%]{width:100%;padding:8px;border-bottom:1px solid #f0f0f0}#popover-content[_ngcontent-%COMP%]{min-width:350px;max-width:500px;min-height:125px}"]})},4398:(Pt,we,a)=>{a.d(we,{_:()=>e});var t=a(6895),o=a(9116),m=a(2635),f=a(1971),s=a(3679),N=a(9194),L=a(6672),T=a(1102),x=a(6903),D=a(3309),w=a(4989),F=a(2190),B=a(897),S=a(4650);class e{}e.\u0275fac=function(O){return new(O||e)},e.\u0275mod=S.oAB({type:e}),e.\u0275inj=S.cJS({imports:[t.ez,o.Bz,m._N,m.pP,f.vh,s.Jb,N.q6,L.X,T.PV,x.zf,D.U,w.X,B.$,F.r]})},7230:(Pt,we,a)=>{a.d(we,{C:()=>B});var t=a(4650),o=a(6895),m=a(8664),f=a(3193);class N{constructor(){}}function L(S,e){if(1&S&&t._UZ(0,"span",3),2&S){const P=t.oxw().$implicit;t.Q6J("innerHtml",P.text,t.oJD)}}function T(S,e){if(1&S&&t._UZ(0,"cvc-gene-tag",6),2&S){const P=t.oxw().$implicit,O=t.oxw(3);t.Q6J("gene",P)("enablePopover",O.enablePopover)}}function x(S,e){if(1&S&&(t.ynx(0),t.YNc(1,T,1,2,"cvc-gene-tag",5),t.BQk()),2&S){const P=e.$implicit;t.xp6(1),t.Q6J("ngIf","Gene"==P.__typename)}}N.\u0275fac=function(e){return new(e||N)},N.\u0275cmp=t.Xpm({type:N,selectors:[["cvc-tag-group"]],ngContentSelectors:["*"],decls:1,vars:0,template:function(e,P){1&e&&(t.F$t(),t.Hsn(0))},styles:["[_nghost-%COMP%]    >*:first-child   nz-tag{border-top-right-radius:0;border-bottom-right-radius:0;margin-right:0}[_nghost-%COMP%]    >*:last-child   nz-tag{border-top-left-radius:0;border-bottom-left-radius:0;margin-left:-1px;border-left-color:#e9e9e9}"]});const D=function(S){return[S]};function w(S,e){if(1&S&&(t.ynx(0),t.TgZ(1,"cvc-tag-group"),t.YNc(2,x,2,1,"ng-container",0),t._UZ(3,"cvc-variant-tag",4),t.qZA(),t.BQk()),2&S){const P=t.oxw(),O=P.index,he=P.$implicit,ce=t.oxw();t.xp6(2),t.Q6J("ngForOf",t.VKq(3,D,ce.nameSegments[O-1])),t.xp6(1),t.Q6J("variant",he)("enablePopover",ce.enablePopover)}}function F(S,e){if(1&S&&(t.ynx(0),t.YNc(1,L,1,1,"span",1),t.YNc(2,w,4,5,"ng-container",2),t.BQk()),2&S){const P=e.$implicit;t.xp6(1),t.Q6J("ngIf","MolecularProfileTextSegment"==P.__typename),t.xp6(1),t.Q6J("ngIf","Variant"==P.__typename)}}class B{constructor(){this.enablePopover=!0}ngOnInit(){if(void 0===this.nameSegments)throw new Error("Must pass a list of molecular profile name segments into mp name component.")}}B.\u0275fac=function(e){return new(e||B)},B.\u0275cmp=t.Xpm({type:B,selectors:[["cvc-mp-tag-name"]],inputs:{nameSegments:"nameSegments",enablePopover:"enablePopover"},decls:1,vars:1,consts:[[4,"ngFor","ngForOf"],["class","text-segment",3,"innerHtml",4,"ngIf"],[4,"ngIf"],[1,"text-segment",3,"innerHtml"],[3,"variant","enablePopover"],[3,"gene","enablePopover",4,"ngIf"],[3,"gene","enablePopover"]],template:function(e,P){1&e&&t.YNc(0,F,3,2,"ng-container",0),2&e&&t.Q6J("ngForOf",P.nameSegments)},dependencies:[o.sg,o.O5,m.I,f.H,N],styles:[".text-segment[_ngcontent-%COMP%]{display:inline-block;margin-right:8px;font-weight:700;color:#0009;font-size:14px;line-height:12px}"]})},2190:(Pt,we,a)=>{a.d(we,{r:()=>T});var t=a(6895),o=a(4867),m=a(3309),f=a(6672),s=a(1102),N=a(4650);class L{}L.\u0275fac=function(D){return new(D||L)},L.\u0275mod=N.oAB({type:L}),L.\u0275inj=N.cJS({imports:[t.ez]});class T{}T.\u0275fac=function(D){return new(D||T)},T.\u0275mod=N.oAB({type:T}),T.\u0275inj=N.cJS({imports:[t.ez,f.X,s.PV,o.Q,m.U,L]})},8305:(Pt,we,a)=>{a.d(we,{S:()=>e});var t=a(3240),o=a(4004),m=a(9300),f=a(4650),s=a(7630),N=a(6895),L=a(1102),T=a(1971),x=a(6550),D=a(9194),w=a(2635);function F(P,O){if(1&P&&(f._UZ(0,"i",9),f._uU(1)),2&P){const he=f.oxw().ngIf;f.xp6(1),f.hij(" ",he.name," ")}}function B(P,O){if(1&P&&(f.TgZ(0,"cvc-link-tag",10),f._uU(1),f.qZA()),2&P){const he=f.oxw().ngIf;f.Q6J("href",he.url),f.xp6(1),f.hij(" ",he.hpoId," ")}}function S(P,O){if(1&P&&(f.ynx(0),f.TgZ(1,"nz-card",2),f.YNc(2,F,2,1,"ng-template",null,3,f.W1O),f.YNc(4,B,2,2,"ng-template",null,4,f.W1O),f.TgZ(6,"nz-descriptions",5)(7,"nz-descriptions-item",6),f._uU(8),f.qZA(),f.TgZ(9,"nz-descriptions-item",7),f._uU(10),f.qZA(),f.TgZ(11,"nz-descriptions-item",8),f._uU(12),f.qZA()()(),f.BQk()),2&P){const he=O.ngIf,ce=f.MAs(3),te=f.MAs(5);f.xp6(1),f.Q6J("nzTitle",ce)("nzExtra",te),f.xp6(5),f.Q6J("nzColumn",2),f.xp6(2),f.hij(" ",he.assertionCount," "),f.xp6(2),f.hij(" ",he.evidenceItemCount," "),f.xp6(2),f.hij(" ",he.molecularProfileCount," ")}}class e{constructor(O){this.gql=O}ngOnInit(){if(null==this.phenotypeId)throw new Error("cvc-phenotype-popover requires valid phenotypeId input.");this.phenotype$=this.gql.watch({phenotypeId:this.phenotypeId}).valueChanges.pipe((0,o.U)(({data:O})=>O?.phenotypePopover),(0,m.h)(t.ep))}}e.\u0275fac=function(O){return new(O||e)(f.Y36(s.OHm))},e.\u0275cmp=f.Xpm({type:e,selectors:[["cvc-phenotype-popover"]],inputs:{phenotypeId:"phenotypeId"},decls:3,vars:3,consts:[["id","popover-content"],[4,"ngIf"],["nzBordered","false","id","card-content",3,"nzTitle","nzExtra"],["cardTitle",""],["linkout",""],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","Assertions","nzSpan","2"],["nzTitle","Evidence","nzSpan","2"],["nzTitle","Molecular Profiles","nzSpan","2"],["nz-icon","","nzType","civic-phenotype","nzTheme","twotone","nzTwotoneColor","#2A63B6"],["tooltip","View in the Human Phenotype Ontology",3,"href"]],template:function(O,he){1&O&&(f.TgZ(0,"div",0),f.YNc(1,S,13,6,"ng-container",1),f.ALo(2,"ngrxPush"),f.qZA()),2&O&&(f.xp6(1),f.Q6J("ngIf",f.lcZ(2,1,he.phenotype$)))},dependencies:[N.O5,L.Ls,T.bd,x.l,D.R7,D.uj,w.fM],styles:["[_nghost-%COMP%]{display:block;margin:-8px -12px}[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}[_nghost-%COMP%]     .ant-descriptions-view{border:none}[_nghost-%COMP%]     #entity-child-counts{border-top:1px solid #f0f0f0;padding:8px}[_nghost-%COMP%]     #entity-child-counts nz-space{width:100%}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child nz-tag{margin-right:0}.popover-text[_ngcontent-%COMP%]{width:100%;padding:8px;border-bottom:1px solid #f0f0f0}#popover-content[_ngcontent-%COMP%]{min-width:350px;max-width:500px;min-height:125px}"]})},1028:(Pt,we,a)=>{a.d(we,{I:()=>T});var t=a(6895),o=a(2635),m=a(1971),f=a(4989),s=a(9194),N=a(1102),L=a(4650);class T{}T.\u0275fac=function(D){return new(D||T)},T.\u0275mod=L.oAB({type:T}),T.\u0275inj=L.cJS({imports:[t.ez,o._N,o.pP,N.PV,m.vh,f.X,s.q6]})},1730:(Pt,we,a)=>{a.d(we,{b:()=>x});var t=a(9771),o=a(4650),m=a(6895);const f=function(D){return{background:D}};function s(D,w){if(1&D&&o._UZ(0,"div",3),2&D){const F=o.oxw();o.Q6J("ngStyle",o.VKq(1,f,F.flagColor))}}function N(D,w){if(1&D&&o._UZ(0,"div",4),2&D){const F=o.oxw();o.Q6J("ngStyle",o.VKq(1,f,F.entityColor))}}function L(D,w){if(1&D&&o._UZ(0,"div",5),2&D){const F=o.oxw();o.Q6J("ngStyle",o.VKq(1,f,F.entityColor))}}class x{constructor(){this.hasRevisions=!1,this.flagged=!1,this.hasComments=!1,this.entityColor="#AAA",this.flagColor=(0,t.f)("Flag")}}x.\u0275fac=function(w){return new(w||x)},x.\u0275cmp=o.Xpm({type:x,selectors:[["cvc-icon-badges"]],inputs:{hasRevisions:"hasRevisions",flagged:"flagged",hasComments:"hasComments",entityColor:"entityColor"},ngContentSelectors:["*"],decls:4,vars:3,consts:[["class","cvc-badge badge-flags",3,"ngStyle",4,"ngIf"],["class","cvc-badge badge-revisions",3,"ngStyle",4,"ngIf"],["class","cvc-badge badge-comments",3,"ngStyle",4,"ngIf"],[1,"cvc-badge","badge-flags",3,"ngStyle"],[1,"cvc-badge","badge-revisions",3,"ngStyle"],[1,"cvc-badge","badge-comments",3,"ngStyle"]],template:function(w,F){1&w&&(o.F$t(),o.Hsn(0),o.YNc(1,s,1,3,"div",0),o.YNc(2,N,1,3,"div",1),o.YNc(3,L,1,3,"div",2)),2&w&&(o.xp6(1),o.Q6J("ngIf",F.flagged),o.xp6(1),o.Q6J("ngIf",F.hasRevisions),o.xp6(1),o.Q6J("ngIf",F.hasComments))},dependencies:[m.O5,m.PC],styles:["[_nghost-%COMP%]{display:inline-block;position:relative;line-height:1}.cvc-badge[_ngcontent-%COMP%]{position:absolute;z-index:auto;width:4px;min-width:4px;height:4px;border-radius:100%;box-shadow:0 0 0 1px #fff;background:#aaa}.cvc-badge.badge-revisions[_ngcontent-%COMP%]{top:.5px;right:.5px;transform:translate(50%,-50%)}.cvc-badge.badge-flags[_ngcontent-%COMP%]{top:.5px;left:.5px;transform:translate(-50%,-50%)}.cvc-badge.badge-comments[_ngcontent-%COMP%]{bottom:.5px;right:.5px;transform:translate(50%,50%)}"],changeDetection:0})},6429:(Pt,we,a)=>{a.d(we,{C:()=>f});var t=a(6895),o=a(9444),m=a(4650);class f{}f.\u0275fac=function(N){return new(N||f)},f.\u0275mod=m.oAB({type:f}),f.\u0275inj=m.cJS({imports:[t.ez,o.s]})},6550:(Pt,we,a)=>{a.d(we,{l:()=>N});var t=a(4650),o=a(7570),m=a(6672),f=a(1102);class N{set href(T){if(!T)throw new Error("link-tag link Input requires string.");this._href=T}get href(){return this._href?this._href:""}}N.\u0275fac=function(T){return new(T||N)},N.\u0275cmp=t.Xpm({type:N,selectors:[["cvc-link-tag"]],inputs:{href:"href",tooltip:"tooltip",iconName:"iconName"},ngContentSelectors:["*"],decls:4,vars:4,consts:[["target","_blank",3,"href"],["nzColor","default","nz-tooltip","",3,"nzTooltipTitle","nzTooltipTrigger"],["nz-icon","","nzTheme","outline",3,"nzType"]],template:function(T,x){1&T&&(t.F$t(),t.TgZ(0,"a",0)(1,"nz-tag",1),t._UZ(2,"i",2),t.Hsn(3),t.qZA()()),2&T&&(t.Q6J("href",x.href,t.LSH),t.xp6(1),t.Q6J("nzTooltipTitle",x.tooltip)("nzTooltipTrigger",x.tooltip?"hover":null),t.xp6(1),t.Q6J("nzType",x.iconName?x.iconName:"link"))},dependencies:[o.SY,m.j,f.Ls],encapsulation:2})},4989:(Pt,we,a)=>{a.d(we,{X:()=>N});var t=a(6895),o=a(7570),m=a(6672),f=a(1102),s=a(4650);class N{}N.\u0275fac=function(T){return new(T||N)},N.\u0275mod=s.oAB({type:N}),N.\u0275inj=s.cJS({imports:[t.ez,o.cg,m.X,f.PV]})},2994:(Pt,we,a)=>{a.d(we,{y:()=>N});var t=a(6895),o=a(2635),m=a(1102),f=a(6672),s=a(4650);class N{}N.\u0275fac=function(T){return new(T||N)},N.\u0275mod=s.oAB({type:N}),N.\u0275inj=s.cJS({imports:[t.ez,o._N,o.pP,f.X,m.PV]})},3388:(Pt,we,a)=>{a.d(we,{H:()=>D});var t=a(1135),o=a(7445),m=a(590),f=a(4650),s=a(6895),N=a(6672),L=a(1102),T=a(2635);function x(w,F){1&w&&(f.TgZ(0,"nz-tag",1),f._UZ(1,"i",2),f.TgZ(2,"span"),f._uU(3,"End of results reached"),f.qZA()())}class D{set cvcShowTag(F){void 0!==F&&F&&this.showTag()}constructor(F){this.cdr=F,this.showTag$=new t.X(!1)}showTag(){!1===this.showTag$.getValue()&&(this.showTag$.next(!0),(0,o.F)(3e3).pipe((0,m.P)()).subscribe(()=>{this.showTag$.next(!1),this.cdr.detectChanges()}))}}D.\u0275fac=function(F){return new(F||D)(f.Y36(f.sBO))},D.\u0275cmp=f.Xpm({type:D,selectors:[["cvc-no-more-rows"]],inputs:{cvcShowTag:"cvcShowTag"},decls:2,vars:3,consts:[["nzColor","warning",4,"ngIf"],["nzColor","warning"],["nz-icon","","nzType","exclamation-circle"]],template:function(F,B){1&F&&(f.YNc(0,x,4,0,"nz-tag",0),f.ALo(1,"ngrxPush")),2&F&&f.Q6J("ngIf",f.lcZ(1,1,B.showTag$))},dependencies:[s.O5,N.j,L.Ls,T.fM],encapsulation:2,changeDetection:0})},6715:(Pt,we,a)=>{a.d(we,{$:()=>m});var t=a(4650);class m{constructor(){}ngOnInit(){}}m.\u0275fac=function(s){return new(s||m)},m.\u0275cmp=t.Xpm({type:m,selectors:[["cvc-tag-list"]],hostVars:4,hostBindings:function(s,N){2&s&&t.ekj("xs","xs"===N.size||!N.size)("sm","sm"===N.size)},inputs:{size:"size"},ngContentSelectors:["*"],decls:2,vars:0,consts:[[1,"tag-list"]],template:function(s,N){1&s&&(t.F$t(),t.TgZ(0,"div",0),t.Hsn(1),t.qZA())},styles:["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]   .tag-list[_ngcontent-%COMP%]    >*{display:inline-block}[_nghost-%COMP%]   .tag-list[_ngcontent-%COMP%]    >*:last-child{margin-right:-8px}.xs[_nghost-%COMP%]{margin-bottom:-4px}.xs[_nghost-%COMP%]   .tag-list[_ngcontent-%COMP%]    >*{margin-bottom:4px}.sm[_nghost-%COMP%]{margin-bottom:-8px}.sm[_nghost-%COMP%]   .tag-list[_ngcontent-%COMP%]    >*{margin-bottom:8px}"],changeDetection:0})},897:(Pt,we,a)=>{a.d(we,{$:()=>m});var t=a(6895),o=a(4650);class m{}m.\u0275fac=function(s){return new(s||m)},m.\u0275mod=o.oAB({type:m}),m.\u0275inj=o.cJS({imports:[t.ez]})},2614:(Pt,we,a)=>{a.d(we,{p:()=>te});var t=a(3240),o=a(4004),m=a(9300),f=a(4650),s=a(7630),N=a(6895),L=a(1102),T=a(1971),x=a(9194),D=a(6550),w=a(6715),F=a(4049),B=a(2635);function S(ie,R){if(1&ie&&(f._UZ(0,"i",11),f._uU(1)),2&ie){const re=f.oxw().ngIf;f.xp6(1),f.AsE(" ",re.displayType,":\xa0",re.citation," ")}}function e(ie,R){if(1&ie&&(f.TgZ(0,"cvc-link-tag",12),f._uU(1),f.qZA()),2&ie){const re=f.oxw().ngIf;f.Q6J("href",re.sourceUrl)("tooltip","View on "+re.displayType),f.xp6(1),f.hij(" ",re.displayType+":"+re.citationId," ")}}function P(ie,R){1&ie&&f._UZ(0,"cvc-clinical-trial-tag",14),2&ie&&f.Q6J("clinicalTrial",R.$implicit)("enablePopover",!1)}function O(ie,R){if(1&ie&&(f.ynx(0),f.TgZ(1,"cvc-tag-list"),f.YNc(2,P,1,2,"cvc-clinical-trial-tag",13),f.qZA(),f.BQk()),2&ie){const re=f.oxw().ngIf;f.xp6(2),f.Q6J("ngForOf",re.clinicalTrials)}}function he(ie,R){1&ie&&f._uU(0," -- ")}function ce(ie,R){if(1&ie&&(f.ynx(0),f.TgZ(1,"nz-card",2),f.YNc(2,S,2,2,"ng-template",null,3,f.W1O),f.YNc(4,e,2,3,"ng-template",null,4,f.W1O),f.TgZ(6,"nz-descriptions",5)(7,"nz-descriptions-item",6),f._uU(8),f.qZA(),f.TgZ(9,"nz-descriptions-item",7),f._uU(10),f.qZA(),f.TgZ(11,"nz-descriptions-item",8),f.YNc(12,O,3,1,"ng-container",9),f.YNc(13,he,1,0,"ng-template",null,10,f.W1O),f.qZA()()(),f.BQk()),2&ie){const re=R.ngIf,X=f.MAs(3),G=f.MAs(5),De=f.MAs(14);f.xp6(1),f.Q6J("nzTitle",X)("nzExtra",G),f.xp6(5),f.Q6J("nzColumn",2),f.xp6(2),f.hij(" ",re.name," "),f.xp6(2),f.hij(" ",re.evidenceItemCount," "),f.xp6(2),f.Q6J("ngIf",re.clinicalTrials&&re.clinicalTrials.length>0)("ngIfElse",De)}}class te{constructor(R){this.gql=R}ngOnInit(){if(null==this.sourceId)throw new Error("cvc-source-popover requires valid sourceId input.");this.source$=this.gql.watch({sourceId:this.sourceId}).valueChanges.pipe((0,o.U)(({data:R})=>R?.sourcePopover),(0,m.h)(t.ep))}}te.\u0275fac=function(R){return new(R||te)(f.Y36(s.TiL))},te.\u0275cmp=f.Xpm({type:te,selectors:[["cvc-source-popover"]],inputs:{sourceId:"sourceId"},decls:3,vars:3,consts:[["id","popover-content"],[4,"ngIf"],["nzBordered","false","id","card-content",3,"nzTitle","nzExtra"],["cardTitle",""],["linkout",""],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","Title","nzSpan","2"],["nzTitle","Evidence","nzSpan","2"],["nzTitle","Clinical Trials:","nzSpan","2"],[4,"ngIf","ngIfElse"],["noTrials",""],["nz-icon","","nzType","civic-source","nzTheme","twotone","nzTwotoneColor","#F9BA45"],[3,"href","tooltip"],[3,"clinicalTrial","enablePopover",4,"ngFor","ngForOf"],[3,"clinicalTrial","enablePopover"]],template:function(R,re){1&R&&(f.TgZ(0,"div",0),f.YNc(1,ce,15,7,"ng-container",1),f.ALo(2,"ngrxPush"),f.qZA()),2&R&&(f.xp6(1),f.Q6J("ngIf",f.lcZ(2,1,re.source$)))},dependencies:[N.sg,N.O5,L.Ls,T.bd,x.R7,x.uj,D.l,w.$,F.G,B.fM],styles:["[_nghost-%COMP%]{display:block;margin:-8px -12px}[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}[_nghost-%COMP%]     .ant-descriptions-view{border:none}[_nghost-%COMP%]     #entity-child-counts{border-top:1px solid #f0f0f0;padding:8px}[_nghost-%COMP%]     #entity-child-counts nz-space{width:100%}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child nz-tag{margin-right:0}.popover-text[_ngcontent-%COMP%]{width:100%;padding:8px;border-bottom:1px solid #f0f0f0}#popover-content[_ngcontent-%COMP%]{min-width:350px;max-width:500px;min-height:125px}"]})},9736:(Pt,we,a)=>{a.d(we,{n:()=>D});var t=a(6895),o=a(1971),m=a(4989),f=a(9194),s=a(897),N=a(2635),L=a(5453),T=a(1102),x=a(4650);class D{}D.\u0275fac=function(F){return new(F||D)},D.\u0275mod=x.oAB({type:D}),D.\u0275inj=x.cJS({imports:[t.ez,N._N,N.pP,T.PV,o.vh,f.q6,m.X,s.$,L.N]})},6818:(Pt,we,a)=>{a.d(we,{a:()=>X});var t=a(4004),o=a(9300),m=a(3240),f=a(4650),s=a(7630),N=a(6895),L=a(1971),T=a(9194),x=a(1102),D=a(8823),w=a(6672),F=a(7570),B=a(6550),S=a(2635),e=a(4557);function P(G,De){if(1&G&&(f._UZ(0,"i",12),f._uU(1),f.ALo(2,"truncate")),2&G){const Ie=f.oxw().ngIf;f.xp6(1),f.hij(" ",f.xi3(2,1,Ie.name,50)," ")}}function O(G,De){if(1&G&&(f.TgZ(0,"cvc-link-tag",14),f._uU(1),f.qZA()),2&G){const Ie=f.oxw(2).ngIf;f.Q6J("href",Ie.therapyUrl),f.xp6(1),f.hij(" ",Ie.ncitId," ")}}function he(G,De){if(1&G&&f.YNc(0,O,2,2,"cvc-link-tag",13),2&G){const Ie=f.oxw().ngIf,pe=f.MAs(7);f.Q6J("ngIf",Ie.ncitId)("ngIfElse",pe)}}function ce(G,De){1&G&&(f.TgZ(0,"span",15),f._uU(1,"No NCIt ID"),f.qZA())}function te(G,De){if(1&G&&(f.TgZ(0,"nz-descriptions-item",16),f._uU(1),f.qZA()),2&G){const Ie=f.oxw().ngIf;f.xp6(1),f.hij(" ",Ie.name," ")}}function ie(G,De){if(1&G&&(f.TgZ(0,"nz-tag",19),f._uU(1),f.ALo(2,"truncate"),f.qZA()),2&G){const Ie=De.$implicit;f.Q6J("nzTooltipTitle",Ie),f.xp6(1),f.Oqu(f.lcZ(2,2,Ie))}}function R(G,De){if(1&G&&(f.TgZ(0,"nz-descriptions-item",17),f.YNc(1,ie,3,4,"nz-tag",18),f.qZA()),2&G){const Ie=f.oxw().ngIf;f.xp6(1),f.Q6J("ngForOf",Ie.therapyAliases)}}function re(G,De){if(1&G&&(f.ynx(0),f.TgZ(1,"nz-card",2),f.YNc(2,P,3,4,"ng-template",null,3,f.W1O),f.YNc(4,he,1,2,"ng-template",null,4,f.W1O),f.YNc(6,ce,2,0,"ng-template",null,5,f.W1O),f.TgZ(8,"nz-descriptions",6),f.YNc(9,te,2,1,"nz-descriptions-item",7),f.YNc(10,R,2,1,"nz-descriptions-item",8),f.TgZ(11,"nz-descriptions-item",9),f._uU(12),f.qZA(),f.TgZ(13,"nz-descriptions-item",10),f._uU(14),f.qZA(),f.TgZ(15,"nz-descriptions-item",11),f._uU(16),f.qZA()()(),f.BQk()),2&G){const Ie=De.ngIf,pe=f.MAs(3),xe=f.MAs(5);f.xp6(1),f.Q6J("nzTitle",pe)("nzExtra",xe),f.xp6(7),f.Q6J("nzColumn",2),f.xp6(1),f.Q6J("ngIf",Ie.name.length>50),f.xp6(1),f.Q6J("ngIf",Ie.therapyAliases.length>0),f.xp6(2),f.hij(" ",Ie.assertionCount," "),f.xp6(2),f.hij(" ",Ie.evidenceItemCount," "),f.xp6(2),f.hij(" ",Ie.molecularProfileCount," ")}}class X{constructor(De){this.gql=De}ngOnInit(){if(null==this.therapyId)throw new Error("cvc-therapy-popover requires valid therapyId input.");this.therapy$=this.gql.watch({therapyId:this.therapyId}).valueChanges.pipe((0,t.U)(({data:De})=>De?.therapyPopover),(0,o.h)(m.ep))}}X.\u0275fac=function(De){return new(De||X)(f.Y36(s.L8L))},X.\u0275cmp=f.Xpm({type:X,selectors:[["cvc-therapy-popover"]],inputs:{therapyId:"therapyId"},decls:3,vars:3,consts:[["id","popover-content"],[4,"ngIf"],["nzBordered","false","id","card-content",3,"nzTitle","nzExtra"],["cardTitle",""],["linkout",""],["noNcitId",""],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","Name","nzSpan","2",4,"ngIf"],["nzTitle","Aliases","nzSpan","2",4,"ngIf"],["nzTitle","Assertions","nzSpan","2"],["nzTitle","Evidence","nzSpan","2"],["nzTitle","Molecular Profiles","nzSpan","2"],["nz-icon","","nzType","civic-therapy","nzTheme","twotone","nzTwotoneColor","#AC3996"],["tooltip","View on NCI Thesaurus",3,"href",4,"ngIf","ngIfElse"],["tooltip","View on NCI Thesaurus",3,"href"],["nz-typography","","nzType","secondary"],["nzTitle","Name","nzSpan","2"],["nzTitle","Aliases","nzSpan","2"],["nz-tooltip","",3,"nzTooltipTitle",4,"ngFor","ngForOf"],["nz-tooltip","",3,"nzTooltipTitle"]],template:function(De,Ie){1&De&&(f.TgZ(0,"div",0),f.YNc(1,re,17,8,"ng-container",1),f.ALo(2,"ngrxPush"),f.qZA()),2&De&&(f.xp6(1),f.Q6J("ngIf",f.lcZ(2,1,Ie.therapy$)))},dependencies:[N.sg,N.O5,L.bd,T.R7,T.uj,x.Ls,D.ZU,w.j,F.SY,B.l,S.fM,e.W],styles:["[_nghost-%COMP%]{display:block;margin:-8px -12px}[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}[_nghost-%COMP%]     .ant-descriptions-view{border:none}[_nghost-%COMP%]     #entity-child-counts{border-top:1px solid #f0f0f0;padding:8px}[_nghost-%COMP%]     #entity-child-counts nz-space{width:100%}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child nz-tag{margin-right:0}.popover-text[_ngcontent-%COMP%]{width:100%;padding:8px;border-bottom:1px solid #f0f0f0}#popover-content[_ngcontent-%COMP%]{min-width:350px;max-width:500px;min-height:125px}"]})},8974:(Pt,we,a)=>{a.d(we,{s:()=>B});var t=a(6895),o=a(9116),m=a(1971),f=a(9194),s=a(2635),N=a(4989),L=a(1102),T=a(8823),x=a(9444),D=a(6672),w=a(7570),F=a(4650);class B{}B.\u0275fac=function(e){return new(e||B)},B.\u0275mod=F.oAB({type:B}),B.\u0275inj=F.cJS({imports:[t.ez,o.Bz,s._N,s.pP,m.vh,f.q6,L.PV,T.ZJ,D.X,w.cg,N.X,x.s]})},8664:(Pt,we,a)=>{a.d(we,{I:()=>yt});var t=a(6654),o=a(9771),m=a(4650),f=a(6895),s=a(9116),N=a(6672),L=a(6581),T=a(1102),x=a(3240),D=a(4004),w=a(9300),F=a(7630),B=a(1971),S=a(3679),e=a(9194),P=a(6903),O=a(3193),he=a(6550),ce=a(2635),te=a(160);function ie(Dt,an){if(1&Dt&&(m._UZ(0,"i",13),m.ALo(1,"entityColor"),m._uU(2)),2&Dt){const mn=m.oxw().ngIf;m.Q6J("nzTwotoneColor",m.lcZ(1,2,"Variant")),m.xp6(2),m.hij(" ",mn.name," ")}}function R(Dt,an){if(1&Dt&&m._UZ(0,"cvc-gene-tag",14),2&Dt){const mn=m.oxw().ngIf;m.Q6J("enablePopover",!1)("gene",mn.gene)}}function re(Dt,an){if(1&Dt&&(m.TgZ(0,"nz-tag"),m._uU(1),m.qZA()),2&Dt){const mn=an.$implicit;m.xp6(1),m.Oqu(mn)}}function X(Dt,an){if(1&Dt&&(m.TgZ(0,"nz-descriptions-item",15),m.YNc(1,re,2,1,"nz-tag",16),m.qZA()),2&Dt){const mn=m.oxw().ngIf;m.xp6(1),m.Q6J("ngForOf",mn.variantAliases)}}function G(Dt,an){if(1&Dt&&(m.TgZ(0,"nz-descriptions-item",17)(1,"cvc-link-tag",18),m._uU(2),m.qZA()()),2&Dt){const mn=m.oxw().ngIf;m.xp6(1),m.MGl("href","https://reg.genome.network/allele/",mn.alleleRegistryId,".html"),m.xp6(1),m.hij(" ",mn.alleleRegistryId," ")}}function De(Dt,an){if(1&Dt&&(m.TgZ(0,"a",19)(1,"nz-tag",20),m._UZ(2,"i",21),m._uU(3),m.qZA()()),2&Dt){const mn=m.oxw().ngIf;m.MGl("routerLink","/variants/",mn.id,"/flags"),m.xp6(3),m.hij(" Flags (",mn.flags.totalCount,") ")}}function Ie(Dt,an){if(1&Dt&&(m.TgZ(0,"a",19)(1,"nz-tag",22),m._UZ(2,"i",23),m._uU(3),m.qZA()()),2&Dt){const mn=m.oxw().ngIf;m.MGl("routerLink","/variants/",mn.id,"/revisions"),m.xp6(3),m.hij(" Revisions (",mn.revisions.totalCount,") ")}}function pe(Dt,an){if(1&Dt&&(m.TgZ(0,"a",19)(1,"nz-tag",24),m._UZ(2,"i",25),m._uU(3),m.qZA()()),2&Dt){const mn=m.oxw().ngIf;m.MGl("routerLink","/variants/",mn.id,"/comments"),m.xp6(3),m.hij(" Comments (",mn.comments.totalCount,") ")}}function xe(Dt,an){if(1&Dt&&(m.ynx(0),m.TgZ(1,"nz-card",2),m.YNc(2,ie,3,4,"ng-template",null,3,m.W1O),m.YNc(4,R,1,2,"ng-template",null,4,m.W1O),m.TgZ(6,"nz-descriptions",5),m.YNc(7,X,2,1,"nz-descriptions-item",6),m.YNc(8,G,3,2,"nz-descriptions-item",7),m.TgZ(9,"nz-descriptions-item",8),m._uU(10),m.qZA()(),m.TgZ(11,"nz-row",9)(12,"nz-col",10)(13,"nz-space",11),m.YNc(14,De,4,2,"a",12),m.YNc(15,Ie,4,2,"a",12),m.YNc(16,pe,4,2,"a",12),m.qZA()()()(),m.BQk()),2&Dt){const mn=an.ngIf,jt=m.MAs(3),bt=m.MAs(5);m.xp6(1),m.Q6J("nzTitle",jt)("nzExtra",bt),m.xp6(5),m.Q6J("nzColumn",2),m.xp6(1),m.Q6J("ngIf",mn.variantAliases.length>0),m.xp6(1),m.Q6J("ngIf",mn.alleleRegistryId&&"unregistered"!=mn.alleleRegistryId),m.xp6(2),m.hij(" ",mn.molecularProfiles.totalCount," ")}}class j{constructor(an){this.gql=an}ngOnInit(){if(void 0===this.variantId)throw new Error("Must pass a variant ID into the variant popover component.");this.variant$=this.gql.watch({variantId:this.variantId}).valueChanges.pipe((0,D.U)(({data:an})=>an?.variant),(0,w.h)(x.ep))}}j.\u0275fac=function(an){return new(an||j)(m.Y36(F.ZYZ))},j.\u0275cmp=m.Xpm({type:j,selectors:[["cvc-variant-popover"]],inputs:{variantId:"variantId"},decls:3,vars:3,consts:[["id","popover-content"],[4,"ngIf"],["nzBordered","false","id","card-content",3,"nzTitle","nzExtra"],["cardTitle",""],["gene",""],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","Aliases","nzSpan","2",4,"ngIf"],["nzTitle","Allele Registry ID","nzSpan","2",4,"ngIf"],["nzTitle","Molecular Profiles","nzSpan","2"],["id","entity-child-counts"],["nzSpan","24"],["nzSize","small"],[3,"routerLink",4,"nzSpaceItem"],["nz-icon","","nzTheme","twotone","nzType","civic-variant",3,"nzTwotoneColor"],[3,"enablePopover","gene"],["nzTitle","Aliases","nzSpan","2"],[4,"ngFor","ngForOf"],["nzTitle","Allele Registry ID","nzSpan","2"],["tooltip","View on the ClinGen Allele Registry",3,"href"],[3,"routerLink"],["nzColor","red"],["nz-icon","","nzType","civic-flag"],["nzColor","orange"],["nz-icon","","nzType","civic-revision"],["nzColor","blue"],["nz-icon","","nzType","civic-comment"]],template:function(an,mn){1&an&&(m.TgZ(0,"div",0),m.YNc(1,xe,17,6,"ng-container",1),m.ALo(2,"ngrxPush"),m.qZA()),2&an&&(m.xp6(1),m.Q6J("ngIf",m.lcZ(2,1,mn.variant$)))},dependencies:[f.sg,f.O5,s.rH,B.bd,S.t3,S.SK,e.R7,e.uj,N.j,T.Ls,P.NU,P.$1,O.H,he.l,ce.fM,te.a],styles:["[_nghost-%COMP%]{display:block;margin:-8px -12px}[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}[_nghost-%COMP%]     .ant-descriptions-view{border:none}[_nghost-%COMP%]     #entity-child-counts{border-top:1px solid #f0f0f0;padding:8px}[_nghost-%COMP%]     #entity-child-counts nz-space{width:100%}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child nz-tag{margin-right:0}.popover-text[_ngcontent-%COMP%]{width:100%;padding:8px;border-bottom:1px solid #f0f0f0}#popover-content[_ngcontent-%COMP%]{min-width:350px;max-width:500px;min-height:125px}"]});var Z=a(1730),fe=a(4557);function Ce(Dt,an){}function kt(Dt,an){if(1&Dt&&(m.ynx(0),m.TgZ(1,"a",4),m.YNc(2,Ce,0,0,"ng-template",5),m.qZA(),m.BQk()),2&Dt){const mn=m.oxw(),jt=m.MAs(2);m.xp6(1),m.Q6J("routerLink",mn.variant.link),m.xp6(1),m.Q6J("ngTemplateOutlet",jt)}}function Ot(Dt,an){}function rn(Dt,an){if(1&Dt&&m._UZ(0,"cvc-variant-popover",9),2&Dt){const mn=m.oxw(3);m.Q6J("variantId",mn.variant.id)}}function nt(Dt,an){if(1&Dt&&m.YNc(0,rn,1,1,"cvc-variant-popover",8),2&Dt){const mn=m.oxw(2);m.Q6J("ngIf",mn.enablePopover)}}const pt=function(Dt){return{deprecated:Dt}};function It(Dt,an){if(1&Dt){const mn=m.EpF();m.TgZ(0,"nz-tag",6),m.NdJ("nzOnClose",function(bt){m.CHM(mn);const ct=m.oxw();return m.KtG(ct.itemClosed(bt))}),m.YNc(1,Ot,0,0,"ng-template",5),m.qZA(),m.YNc(2,nt,1,1,"ng-template",null,7,m.W1O)}if(2&Dt){const mn=m.MAs(3),jt=m.oxw(),bt=m.MAs(6);m.Q6J("ngClass",m.VKq(6,pt,jt.variant.deprecated))("nzPopoverMouseEnterDelay",jt.onCloseClicked?0:.5)("nzPopoverContent",mn)("nzPopoverTrigger",jt.enablePopover?"hover":null)("nzMode",jt.onCloseClicked?"closeable":"default"),m.xp6(1),m.Q6J("ngTemplateOutlet",bt)}}function wt(Dt,an){}function un(Dt,an){if(1&Dt&&m.YNc(0,wt,0,0,"ng-template",5),2&Dt){m.oxw();const mn=m.MAs(2);m.Q6J("ngTemplateOutlet",mn)}}function Et(Dt,an){if(1&Dt&&(m.ynx(0),m._uU(1),m.ALo(2,"truncate"),m.BQk()),2&Dt){const mn=m.oxw(2);m.xp6(1),m.hij(" ",m.xi3(2,1,mn.variant.name,20)," ")}}function gt(Dt,an){if(1&Dt&&m._uU(0),2&Dt){const mn=m.oxw(2);m.hij(" ",mn.variant.name," ")}}function Xt(Dt,an){if(1&Dt&&(m.TgZ(0,"cvc-icon-badges",10),m._UZ(1,"i",11),m.qZA(),m.YNc(2,Et,3,4,"ng-container",0),m.YNc(3,gt,1,1,"ng-template",null,12,m.W1O)),2&Dt){const mn=m.MAs(4),jt=m.oxw();m.Q6J("flagged",jt.variant.flagged)("entityColor",jt.iconColor),m.xp6(1),m.Q6J("nzTwotoneColor",jt.iconColor),m.xp6(1),m.Q6J("ngIf",jt.truncateLongName)("ngIfElse",mn)}}class yt extends t.a{constructor(){super(),this.enablePopover=!0,this.truncateLongName=!1,this.iconColor=(0,o.f)("Variant")}idFunction(){return this.variant.id}ngOnInit(){if(super.ngOnInit(),void 0===this.variant)throw new Error("cvc-variant-tag requires LinkableVariant input, none supplied.")}}yt.\u0275fac=function(an){return new(an||yt)},yt.\u0275cmp=m.Xpm({type:yt,selectors:[["cvc-variant-tag"]],inputs:{variant:"variant",enablePopover:"enablePopover",truncateLongName:"truncateLongName"},features:[m.qOj],decls:7,vars:2,consts:[[4,"ngIf","ngIfElse"],["tag",""],["unlinked",""],["tagContent",""],[3,"routerLink"],[3,"ngTemplateOutlet"],["nz-popover","",3,"ngClass","nzPopoverMouseEnterDelay","nzPopoverContent","nzPopoverTrigger","nzMode","nzOnClose"],["popoverContent",""],[3,"variantId",4,"ngIf"],[3,"variantId"],[3,"flagged","entityColor"],["nz-icon","","nzType","civic-variant","nzTheme","twotone",3,"nzTwotoneColor"],["fullName",""]],template:function(an,mn){if(1&an&&(m.YNc(0,kt,3,2,"ng-container",0),m.YNc(1,It,4,8,"ng-template",null,1,m.W1O),m.YNc(3,un,1,1,"ng-template",null,2,m.W1O),m.YNc(5,Xt,5,5,"ng-template",null,3,m.W1O)),2&an){const jt=m.MAs(4);m.Q6J("ngIf",mn.linked)("ngIfElse",jt)}},dependencies:[f.mk,f.O5,f.tP,s.rH,N.j,L.lU,T.Ls,j,Z.b,fe.W],styles:["[_nghost-%COMP%]     nz-tag.rejected, [_nghost-%COMP%]     nz-tag.submitted, [_nghost-%COMP%]     nz-tag.accepted, [_nghost-%COMP%]     nz-tag.deprecated{border-right-width:2px}[_nghost-%COMP%]     nz-tag.rejected, [_nghost-%COMP%]     nz-tag.deprecated{border-color:#e6e6e6;background-color:#fff;color:#999999d9}[_nghost-%COMP%]     nz-tag.submitted{border-color:#ffe58f}[_nghost-%COMP%]     nz-tag.accepted{border-color:#b7eb8f}[_nghost-%COMP%]{display:inline-block}"],changeDetection:0})},4867:(Pt,we,a)=>{a.d(we,{Q:()=>O});var t=a(6895),o=a(9116),m=a(6672),f=a(1102),s=a(6581),N=a(2635),L=a(1971),T=a(3679),x=a(9194),D=a(6903),w=a(3309),F=a(4989),B=a(9444),S=a(4650);class e{}e.\u0275fac=function(ce){return new(ce||e)},e.\u0275mod=S.oAB({type:e}),e.\u0275inj=S.cJS({imports:[t.ez,o.Bz,N._N,N.pP,L.vh,T.Jb,x.q6,m.X,f.PV,D.zf,B.s,w.U,F.X]});var P=a(6429);class O{}O.\u0275fac=function(ce){return new(ce||O)},O.\u0275mod=S.oAB({type:O}),O.\u0275inj=S.cJS({imports:[t.ez,o.Bz,m.X,s.$6,f.PV,B.s,e,P.C]})},9657:(Pt,we,a)=>{a.d(we,{t:()=>o});var t=a(4650);class o{transform(f,s){return f?"verbose"==s?"TIER_I_LEVEL_A"===f?"Tier I - Level A":"TIER_I_LEVEL_B"===f?"Tier I - Level B":"TIER_II_LEVEL_C"===f?"Tier II - Level C":"TIER_II_LEVEL_D"===f?"Tier II - Level D":"TIER_III"===f?"Tier III":"TIER_IV"===f?"Tier IV":"Not Applicable":f.toUpperCase().replace("TIER","").replace("LEVEL","").replace(/ /g,"").replace(/_/g,""):""}}o.\u0275fac=function(f){return new(f||o)},o.\u0275pipe=t.Yjl({name:"formatAmp",type:o,pure:!0})},160:(Pt,we,a)=>{a.d(we,{a:()=>m});var t=a(9771),o=a(4650);class m{transform(s){return(0,t.f)(s)}}m.\u0275fac=function(s){return new(s||m)},m.\u0275pipe=o.Yjl({name:"entityColor",type:m,pure:!0})},4110:(Pt,we,a)=>{a.d(we,{Do:()=>N});var t=a(7630),o=a(915),m=a(4650);const f=new Map([[t.Sx0.A,"Validated association"],[t.Sx0.B,"Clinical evidence"],[t.Sx0.C,"Case study"],[t.Sx0.D,"Preclinical evidence"],[t.Sx0.E,"Inferential association"]]),s=new Map([[1,"One Star"],[2,"Two Stars"],[3,"Three Stars"],[4,"Four Stars"],[5,"Five Stars"]]);class N{transform(T,x="display-string"){return null==T?"":"short-string"===x&&1===T.toString().length?"string"==typeof T?T:T.toString():"icon-name"===x?"number"==typeof T?`civic-rating${T}`:1===T.length?`civic-level${T.toLowerCase()}`:`civic-${T.replace(/_/g,"").toLowerCase()}`:"number"==typeof T?s.get(T)||T.toString():1===T.length?f.get(T)||T:(0,o.E)(T)}}N.\u0275fac=function(T){return new(T||N)},N.\u0275pipe=m.Yjl({name:"evidenceEnumDisplay",type:N,pure:!0})},6204:(Pt,we,a)=>{a.d(we,{v:()=>N});var t=a(7630);const o={evidenceType:{[t.kqt.Diagnostic]:"Evidence pertains to a variant's impact on patient diagnosis (cancer subtype)",[t.kqt.Functional]:"Evidence pertains to a variant that alters biological function from the reference state",[t.kqt.Oncogenic]:"Evidence pertains to a somatic variant's involvement in tumor pathogenesis as described by the Hallmarks of Cancer",[t.kqt.Predictive]:"Evidence pertains to a variant's effect on therapeutic response",[t.kqt.Predisposing]:"Evidence pertains to a germline variant's role in conferring susceptibility to disease (including pathogenicity evaluations)",[t.kqt.Prognostic]:"Evidence pertains to a variant's impact on disease progression, severity, or patient survival"},assertionType:{[t.uBv.Diagnostic]:"Assertion pertains to a variant's impact on patient diagnosis (cancer subtype)",[t.uBv.Predictive]:"Assertion pertains to a variant's effect on therapeutic response",[t.uBv.Predisposing]:"Assertion pertains to a germline variant's role in conferring susceptibility to disease (including pathogenicity evaluations)",[t.uBv.Prognostic]:"Assertion pertains to a variant's impact on disease progression, severity, or patient survival",[t.uBv.Oncogenic]:"Assertion pertains to a somatic variant's role in driving tumor formation, growth, and other processes related to the Hallmarks of Cancer"},variantOrigin:{[t.huM.Somatic]:"Variant is a mutation, found only in tumor cells, having arisen in a specific tissue (non-germ cell), and is not expected to be inherited or passed to offspring",[t.huM.RareGermline]:"Variant is found in every cell (not restricted to tumor/diseased cells) and is thought to exist in less than 1% of the population relevant to this evidence item",[t.huM.CommonGermline]:"Variant is found in every cell (not restricted to tumor/diseased cells) and is thought to exist in at least 1% of the population relevant to this evidence item",[t.huM.Unknown]:"The variant origin is uncertain based on the available evidence",[t.huM.Na]:"The variant type (e.g., expression) is not compatible (or easily classified) with the CIViC concept of variant origin",[t.huM.Mixed]:"Variants in the Molecular Profile span multiple Origin types."},evidenceLevel:{[t.Sx0.A]:"Proven/consensus association in human medicine",[t.Sx0.B]:"Clinical trial or other primary patient data supports association",[t.Sx0.C]:"Individual case reports from clinical journals",[t.Sx0.D]:"In vivo or in vitro models support association",[t.Sx0.E]:"Indirect evidence"},evidenceLevelBrief:{[t.Sx0.A]:"Validated association",[t.Sx0.B]:"Clinical evidence",[t.Sx0.C]:"Case Study",[t.Sx0.D]:"Preclinical evidence",[t.Sx0.E]:"Inferential association"},therapyInteractionType:{[t.wkr.Combination]:"The therapies listed were used as part of a combination therapy approach",[t.wkr.Sequential]:"The therapies listed were used at separate timepoints in the same treatment plan",[t.wkr.Substitutes]:"The therapies listed are often considered to be of the same family, or behave similarly in a treatment setting"},evidenceRating:{1:"Poor - Claim is not supported well by experimental evidence. Results are not reproducible, or have very small sample size. No follow-up is done to validate novel claims",2:"Adequate - Evidence is not well supported by experimental data, and little follow-up data is available. Experiments may lack proper controls, have small sample size, or are not statistically convincing",3:"Average - Evidence is convincing, but not supported by a breadth of experiments. May be smaller scale projects, or novel results without many follow-up experiments. Discrepancies from expected results are explained and not concerning",4:"Strong - Well supported evidence. Experiments are well controlled, and results are convincing. Any discrepancies from expected results are well-explained and not concerning",5:"Excellent - Solid, well supported evidence from a lab or journal with respected academic standing. Experiments are well controlled, and results are clean and reproducible across multiple replicates. Evidence confirmed using separate methods"}},m={significance:{PREDICTIVE:{ADVERSE_RESPONSE:{EvidenceItem:"Associated with an adverse response to theraputic treatment",Assertion:"Associated with an adverse response to theraputic treatment"},REDUCED_SENSITIVITY:{EvidenceItem:"Response to treatment is lower than seen in other treatment contexts",Assertion:"Response to treatment is lower than seen in other treatment contexts"},RESISTANCE:{EvidenceItem:"Associated with clinical or preclinical resistance to treatment",Assertion:"Associated with clinical or preclinical resistance to treatment"},SENSITIVITYRESPONSE:{EvidenceItem:"Associated with clinical or preclinical response to treatment",Assertion:"Associated with a clinical or preclinical response to treatment"},NA:{EvidenceItem:"Clinical Significance is not applicable",Assertion:"Clinical Significance is not applicable"}},DIAGNOSTIC:{POSITIVE:{EvidenceItem:"Associated with diagnosis of disease or subtype",Assertion:"Associated with diagnosis of disease or subtype"},NEGATIVE:{EvidenceItem:"Associated with lack of disease or subtype",Assertion:"Associated with lack of disease or subtype"}},PROGNOSTIC:{BETTER_OUTCOME:{EvidenceItem:"Demonstrates better than expected clinical outcome",Assertion:"Demonstrates better than expected clinical outcome"},POOR_OUTCOME:{EvidenceItem:"Demonstrates worse than expected clinical outcome",Assertion:"Demonstrates worse than expected clinical outcome"},Na:{EvidenceItem:"Clinical Significance is not applicable",Assertion:"Clinical Significance is not applicable"}},PREDISPOSING:{PATHOGENIC:{Assertion:"Very strong evidence the variant is pathogenic"},LIKELY_PATHOGENIC:{Assertion:"Strong evidence (>90% certainty) the variant is pathogenic"},BENIGN:{Assertion:"Very strong evidence the variant is benign"},LIKELY_BENIGN:{Assertion:"Not expected to have a major effect on disease"},UNCERTAIN_SIGNIFICANCE:{Assertion:"Does not meet the ACMG/AMP criteria for pathogenic/benign, or the evidence is conflicting"},Na:{EvidenceItem:"Clinical Significance is not applicable"},PREDISPOSITION:{EvidenceItem:"Germline variant has predisposing potential for cancer, and may meet ACMG/AMP criteria supporting pathogenic or benign classification."},PROTECTIVENESS:{EvidenceItem:"Germline variant has properties that protect individuals from acquiring cancer."}},ONCOGENIC:{ONCOGENICITY:{EvidenceItem:"Somatic variant has oncogenic potential for driving cancer, and may meet ClinGen/CGC/VICC criteria supporting pathogenic or benign classification."},PROTECTIVENESS:{EvidenceItem:"Somatic variant has a protective role and minimizes co-occuring driver variants, tumor malignancy, or other oncogenic tumor properties."},ONCOGENIC:{Assertion:"Very strong evidence the variant is oncogenic."},LIKELY_ONCOGENIC:{Assertion:"Strong evidence the variant is oncogenic."},BENIGN:{Assertion:"Very strong evidence the variant does not have oncogenic properties."},LIKELY_BENIGN:{Assertion:"Strong evidence the variant does not have oncogenic properties."},UNCERTAIN_SIGNIFICANCE:{Assertion:"Does not meet guideline criteria for oncogenic/benign, or the evidence is conflicting."}}},evidenceDirection:{PREDICTIVE:{SUPPORTS:{EvidenceItem:"The experiment or study supports this variant's response to a therapy"},DOES_NOT_SUPPORT:{EvidenceItem:"The experiment or study does not support, or was inconclusive of an interaction between this variant and a therapy"}},DIAGNOSTIC:{SUPPORTS:{EvidenceItem:"The experiment or study supports this variant's impact on the diagnosis of disease or subtype"},DOES_NOT_SUPPORT:{EvidenceItem:"The experiment or study does not support this variant's impact on diagnosis of disease or subtype"}},PROGNOSTIC:{SUPPORTS:{EvidenceItem:"The experiment or study supports this variant's impact on prognostic outcome"},DOES_NOT_SUPPORT:{EvidenceItem:"The experiment or study does not support a prognostic association between variant and outcome"}},PREDISPOSING:{Na:{EvidenceItem:"Evidence Direction is not applicable"},SUPPORTS:{EvidenceItem:"The evidence supports a pathogenic or a protective role for a germline variant in cancer."},DOES_NOT_SUPPORT:{EvidenceItem:"The evidence supports a benign (if Clinical Significance is Predisposition) or lack or protective (if Clinical Significance is Protectiveness) role for a germline variant in cancer."}},FUNCTIONAL:{SUPPORTS:{EvidenceItem:"The experiment or study supports this variant causing alteration or non-alteration of the gene product function"},DOES_NOT_SUPPORT:{EvidenceItem:"The experiment or study does not support this variant causing alteration or non-alteration of the gene product function"}},ONCOGENIC:{NA:{EvidenceItem:"Evidence Direction is not applicable for Oncogenic Evidence Type"},SUPPORTS:{EvidenceItem:"The evidence supports an oncogenic or protective role for a somatic variant"},DOES_NOT_SUPPORT:{EvidenceItem:"The evidence does not support an oncogenic or protective role for a somatic variant"}}},assertionDirection:{PREDICTIVE:{SUPPORTS:{Assertion:"The Assertion and associated Evidence Items support this variant's response to a therapy"},DOES_NOT_SUPPORT:{Assertion:"The Assertion and associated evidence does not support, or was inconclusive of an interaction between this variant and a therapy"}},DIAGNOSTIC:{SUPPORTS:{Assertion:"The Assertion and associated Evidence Items support this variant's impact on the diagnosis of disease or subtype"},DOES_NOT_SUPPORT:{Assertion:"The Assertion and associated evidence does not support this variant's impact on diagnosis of disease or subtype"}},PROGNOSTIC:{SUPPORTS:{Assertion:"The Assertion and associated Evidence Items support this variant's impact on prognostic outcome"},DOES_NOT_SUPPORT:{Assertion:"The Assertion and associated evidence does not support a prognostic association between variant and outcome"}},PREDISPOSING:{SUPPORTS:{Assertion:"The Assertion and associated Evidence Items support a variant's impact on predisposing outcome"}},FUNCTIONAL:{SUPPORTS:{Assertion:"The Assertion and associated Evidence Items support this variant causing alteration or non-alteration of the gene product function"},DOES_NOT_SUPPORT:{Assertion:"The Assertion and associated evidence does not support this variant causing alteration or non-alteration of the gene product function"}},ONCOGENIC:{SUPPORTS:{Assertion:"The Assertion and associated Evidence Items support a variant's oncogenic, benign, or uncertain significance"}}}};var s=a(4650);class N{transform(T,x,D,w){return x&&T?function f(L,T,x,D){let w;return w=x&&D?m[L][x][T][D]:o[L][T],w||""}(x,T,D,w):""}}N.\u0275fac=function(T){return new(T||N)},N.\u0275pipe=s.Yjl({name:"enumTooltip",type:N,pure:!0})},8926:(Pt,we,a)=>{a.d(we,{A:()=>m});var t=a(4650),o=a(1481);class m{constructor(s){this.sanitizer=s}transform(s,N){if(!N||""==N)return s;const L=new RegExp(N,"gi"),T=s.match(L);if(!T)return s;let x=s.replace(L,`<span class='typeahead-match'>${T[0]}</span>`);return this.sanitizer.bypassSecurityTrustHtml(x)}}m.\u0275fac=function(s){return new(s||m)(t.Y36(o.H7,16))},m.\u0275pipe=t.Yjl({name:"highlightTypeahead",type:m,pure:!0})},9444:(Pt,we,a)=>{a.d(we,{s:()=>f});var t=a(6895),o=a(7742),m=a(4650);class f{}f.\u0275fac=function(N){return new(N||f)},f.\u0275mod=m.oAB({type:f}),f.\u0275inj=m.cJS({providers:[o.l],imports:[t.ez]})},7742:(Pt,we,a)=>{a.d(we,{l:()=>m});var t=a(6530),o=a(4650);class m{transform(s){return s?(0,t.c)(s):""}}m.\u0275fac=function(s){return new(s||m)},m.\u0275pipe=o.Yjl({name:"sourceTypeDisplay",type:m,pure:!0})},4557:(Pt,we,a)=>{a.d(we,{W:()=>o});var t=a(4650);class o{constructor(){}transform(f,s=25){if(f.length>s){let L=f.slice(0,s);var N=L.lastIndexOf(" ");return L.slice(0,N)+"\u2026"}return f}}o.\u0275fac=function(f){return new(f||o)},o.\u0275pipe=t.Yjl({name:"truncate",type:o,pure:!0})},320:(Pt,we,a)=>{a.d(we,{Z:()=>o});var t=a(4650);class o{transform(f){return f?`civic-${f.replace(/_/g,"").toLowerCase()}`:""}}o.\u0275fac=function(f){return new(f||o)},o.\u0275pipe=t.Yjl({name:"typenameToIcon",type:o,pure:!0})},9169:(Pt,we,a)=>{a.d(we,{Y:()=>m});var t=a(1135),o=a(4650);class m{constructor(){this.networkError$=new t.X(void 0)}clearErrors(){this.networkError$.next(void 0)}}m.\u0275fac=function(s){return new(s||m)},m.\u0275prov=o.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"})},9350:(Pt,we,a)=>{a.d(we,{a:()=>w});var D,t=a(655),o=a(7630),m=a(9933),f=a(4004),s=a(8675),N=a(4782),L=a(6579),T=a(4650),x=a(529);let w=((D=class{constructor(B,S){function e(ie){return!(!ie||ie.role!==o.i44.Admin)}function P(ie){return!(!ie||ie.role!==o.i44.Editor&&ie.role!==o.i44.Admin)}function O(ie){return!(!ie||ie.role!==o.i44.Curator)}function he(ie){return!(!ie||ie.role!==o.i44.Curator&&ie.role!==o.i44.Editor&&ie.role!==o.i44.Admin)}function ce(ie){return!(!ie||ie.role!==o.i44.Editor&&ie.role!==o.i44.Admin||!ie.mostRecentConflictOfInterestStatement||ie.mostRecentConflictOfInterestStatement?.coiStatus!=o.Mgx.Conflict&&ie.mostRecentConflictOfInterestStatement?.coiStatus!=o.Mgx.Valid)}function te(ie){if(ie.mostRecentOrganizationId)return ie.organizations.find(R=>R.id===ie.mostRecentOrganizationId)}this.viewerBaseGQL=B,this.http=S,this.initialViewer={mostRecentOrg:void 0,signedIn:!1,isAdmin:!1,isEditor:!1,isCurator:!1,canCurate:!1,canModerate:!1,invalidCoi:!0},this.queryRef=this.viewerBaseGQL.watch(void 0,{notifyOnNetworkStatusChange:!1}),this.viewer$=this.queryRef.valueChanges.pipe((0,L.j)("data","viewer"),(0,f.U)(ie=>({...ie,signedIn:null!=ie,signedOut:null==ie,canCurate:he(ie),canModerate:ce(ie),isAdmin:e(ie),isEditor:P(ie),isCurator:O(ie),organizations:null==ie?[]:ie.organizations,mostRecentOrg:null==ie?void 0:te(ie),invalidCoi:P(ie)&&(!ie.mostRecentConflictOfInterestStatement||ie.mostRecentConflictOfInterestStatement.coiStatus===o.Mgx.Expired||ie.mostRecentConflictOfInterestStatement.coiStatus===o.Mgx.Missing)})),(0,s.O)(this.initialViewer),(0,N.d)(1)),this.signedIn$=this.viewer$.pipe((0,f.U)(ie=>ie.signedIn)),this.signedOut$=this.viewer$.pipe((0,f.U)(ie=>ie.signedOut)),this.isAdmin$=this.viewer$.pipe((0,f.U)(ie=>e(ie))),this.isEditor$=this.viewer$.pipe((0,f.U)(ie=>P(ie))),this.isCurator$=this.viewer$.pipe((0,f.U)(ie=>O(ie))),this.canCurate$=this.viewer$.pipe((0,f.U)(ie=>he(ie))),this.canModerate$=this.viewer$.pipe((0,f.U)(ie=>ce(ie)))}signOut(){this.http.get("/api/sign_out").pipe((0,m.t)(this)).subscribe(()=>this.queryRef.refetch())}refetch(){this.queryRef.refetch()}}).\u0275fac=function(B){return new(B||D)(T.LFG(o.Tt7),T.LFG(x.eN))},D.\u0275prov=T.Yz7({token:D,factory:D.\u0275fac,providedIn:"root"}),D);w=(0,t.gn)([(0,m.c)()],w)},6654:(Pt,we,a)=>{a.d(we,{a:()=>o});var t=a(4650);class o{constructor(){this.linked=!0,this.popoverVisible=!1}ngOnInit(){this.onCloseClicked&&(this.linked=!1)}itemClosed(f){this.popoverVisible=!1,this.onCloseClicked&&this.onCloseClicked(this.idFunction())}}o.\u0275fac=function(f){return new(f||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["ng-component"]],inputs:{onCloseClicked:"onCloseClicked",linked:"linked"},decls:0,vars:0,template:function(f,s){},encapsulation:2})},915:(Pt,we,a)=>{function t(o){if("number"==typeof o||"boolean"==typeof o)return o;let m;if("NA"===o)m=["Not Applicable"];else if("SENSITIVITYRESPONSE"===o)m=["Sensitivity","/","Response"];else{m=o.toLowerCase().replace(/_/g," ").split(" ");for(var f=0;f<m.length;f++)m[f]=m[f].charAt(0).toUpperCase()+m[f].slice(1)}return m.join(" ")}a.d(we,{E:()=>t})},6530:(Pt,we,a)=>{function t(o){switch(o){case"ASCO":return"ASCO";case"PUBMED":return"PubMed";case"ASH":return"ASH";default:return o}}a.d(we,{c:()=>t})},9771:(Pt,we,a)=>{a.d(we,{f:()=>o});const t=new Map([["Assertion","#7243b5"],["ClinicalTrial","#ac3996"],["CoordinateSystem","#f68f37"],["Disease","#e62f76"],["Event","#1db8a9"],["EvidenceItem","#2a63b6"],["Gene","#07aff0"],["Therapy","#ac3996"],["MolecularProfile","#33b358"],["Phenotype","#1db8a9"],["Source","#f9ba45"],["Variant","#74d34c"],["VariantGroup","#74d34c"],["VariantType","#74d34c"],["Comment","#44d8ef"],["Event","#ffdb00"],["Flag","#e24759"],["Queue","#666699"],["Revision","#f0673a"],["Curator","#a0d8f5"],["Editor","#58a0c4"],["Admin","#58a0c4"],["Organization","#3d7b99"],["Rejected","#BBBBBB"],["Greyscale","#999999"]]);function o(m){let f="#AAAAAA";if(m){const s=t.get(m);s&&(f=s)}return f}},6123:(Pt,we,a)=>{a.d(we,{U:()=>s});var t=a(7579),o=a(1135),m=a(2722),f=a(8746);class s{constructor(L){this.networkErrorService=L}mutate(L,T,x,D){let w=new t.x,F={isSubmitting$:new o.X(!1),submitSuccess$:new o.X(!1),submitError$:new o.X([]),cleanup:()=>{w.next(),w.complete()}};return F.isSubmitting$.next(!0),L.mutate(T,x).pipe((0,m.R)(w),(0,f.x)(()=>{F.isSubmitting$.next(!1)})).subscribe({next:B=>{B.data&&D&&D(B.data)},error:B=>{B.graphQLErrors.length>0?F.submitError$.next(B.graphQLErrors.map(S=>S.message)):B.networkError&&this.networkErrorService.networkError$.next(B.networkError),F.cleanup()},complete:()=>{F.submitError$.next([]),F.submitSuccess$.next(!0),this.networkErrorService.networkError$.next(void 0),F.cleanup()}}),F}}},9241:(Pt,we,a)=>{a.d(we,{h:()=>m});var t=a(6895),o=a(4650);class m{}m.\u0275fac=function(s){return new(s||m)},m.\u0275mod=o.oAB({type:m}),m.\u0275inj=o.cJS({imports:[t.ez]})},6814:(Pt,we,a)=>{a.d(we,{P:()=>B});var t=a(4650),o=a(6895),m=a(7570);function f(S,e){1&S&&(t.ynx(0),t._uU(1," N/A "),t.BQk())}function s(S,e){1&S&&(t.ynx(0),t._uU(1," Not applicable "),t.BQk())}function N(S,e){if(1&S&&(t.TgZ(0,"span",4),t.ynx(1,0),t.YNc(2,f,2,0,"ng-container",5),t.YNc(3,s,2,0,"ng-container",6),t.BQk(),t.qZA()),2&S){const P=t.oxw();t.xp6(1),t.Q6J("ngSwitch",P.cvcDisplayMode),t.xp6(1),t.Q6J("ngSwitchCase","small")}}function L(S,e){1&S&&(t.ynx(0),t._uU(1," \u2013\xa0\u2013 "),t.BQk())}function T(S,e){1&S&&(t.ynx(0),t._uU(1,"Not specified"),t.BQk())}function x(S,e){if(1&S&&(t.TgZ(0,"span",7),t.ynx(1,0),t.YNc(2,L,2,0,"ng-container",5),t.YNc(3,T,2,0,"ng-container",6),t.BQk(),t.qZA()),2&S){const P=t.oxw();t.xp6(1),t.Q6J("ngSwitch",P.cvcDisplayMode),t.xp6(1),t.Q6J("ngSwitchCase","small")}}function D(S,e){1&S&&(t.ynx(0),t._uU(1,"!?"),t.BQk())}function w(S,e){1&S&&(t.ynx(0),t._uU(1,"Unspecified"),t.BQk())}function F(S,e){if(1&S&&(t.TgZ(0,"span",8),t.ynx(1,0),t.YNc(2,D,2,0,"ng-container",5),t.YNc(3,w,2,0,"ng-container",6),t.BQk(),t.qZA()),2&S){const P=t.oxw();t.xp6(1),t.Q6J("ngSwitch",P.cvcDisplayMode),t.xp6(1),t.Q6J("ngSwitchCase","small")}}class B{constructor(){this.cvcEmptyCategory="not-applicable",this.cvcDisplayMode="default"}}B.\u0275fac=function(e){return new(e||B)},B.\u0275cmp=t.Xpm({type:B,selectors:[["cvc-empty-value"]],inputs:{cvcEmptyCategory:"cvcEmptyCategory",cvcDisplayMode:"cvcDisplayMode"},decls:4,vars:4,consts:[[3,"ngSwitch"],["class","empty-symbol not-applicable","nz-tooltip","","nzTooltipTitle","Value is not applicable",4,"ngSwitchCase"],["nz-tooltip","","nzTooltipTitle","Unspecified","class","empty-symbol unspecified","nz-tooltip","","nzTooltipTitle","Value is unspecified",4,"ngSwitchCase"],["nz-tooltip","","nzTooltipTitle","INVALID","class","empty-symbol invalid","nz-tooltip","","nzTooltipTitle","Error: value requires specification",4,"ngSwitchCase"],["nz-tooltip","","nzTooltipTitle","Value is not applicable",1,"empty-symbol","not-applicable"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"],["nz-tooltip","","nzTooltipTitle","Unspecified","nz-tooltip","","nzTooltipTitle","Value is unspecified",1,"empty-symbol","unspecified"],["nz-tooltip","","nzTooltipTitle","INVALID","nz-tooltip","","nzTooltipTitle","Error: value requires specification",1,"empty-symbol","invalid"]],template:function(e,P){1&e&&(t.ynx(0,0),t.YNc(1,N,4,2,"span",1),t.YNc(2,x,4,2,"span",2),t.YNc(3,F,4,2,"span",3),t.BQk()),2&e&&(t.Q6J("ngSwitch",P.cvcEmptyCategory),t.xp6(1),t.Q6J("ngSwitchCase","not-applicable"),t.xp6(1),t.Q6J("ngSwitchCase","unspecified"),t.xp6(1),t.Q6J("ngSwitchCase","invalid"))},dependencies:[o.RF,o.n9,o.ED,m.SY],styles:[".empty-symbol[_ngcontent-%COMP%]{font-style:oblique;display:inline-block;cursor:help;white-space:no-wrap}.empty-symbol.not-applicable[_ngcontent-%COMP%]{color:#ccc;font-weight:500}.empty-symbol.unspecified[_ngcontent-%COMP%]{display:inline-block;color:#ccc;font-weight:500;padding:0 3px}.empty-symbol.invalid[_ngcontent-%COMP%]{display:inline-block;color:#ff4d4f;font-weight:700}"]})},1371:(Pt,we,a)=>{a.d(we,{M:()=>s});var t=a(6895),o=a(1102),m=a(7570),f=a(4650);class s{}s.\u0275fac=function(L){return new(L||s)},s.\u0275mod=f.oAB({type:s}),s.\u0275inj=f.cJS({imports:[t.ez,m.cg,o.PV]})},8699:(Pt,we,a)=>{a.d(we,{J:()=>mn});var t=a(4650),o=a(3595),m=a(6895),f=a(3314),s=a(2925),N=a(2614),L=a(6818),T=a(8305);function x(jt,bt){if(1&jt&&t._UZ(0,"cvc-molecular-profile-popover",6),2&jt){const ct=t.oxw();t.Q6J("molecularProfileId",ct.entity.entityId)}}function D(jt,bt){if(1&jt&&t._UZ(0,"cvc-disease-popover",7),2&jt){const ct=t.oxw();t.Q6J("diseaseId",ct.entity.entityId)}}function w(jt,bt){if(1&jt&&t._UZ(0,"cvc-therapy-popover",8),2&jt){const ct=t.oxw();t.Q6J("therapyId",ct.entity.entityId)}}function F(jt,bt){if(1&jt&&t._UZ(0,"cvc-source-popover",9),2&jt){const ct=t.oxw();t.Q6J("sourceId",ct.entity.entityId)}}function B(jt,bt){if(1&jt&&t._UZ(0,"cvc-phenotype-popover",10),2&jt){const ct=t.oxw();t.Q6J("phenotypeId",ct.entity.entityId)}}const S=["MolecularProfile","Disease","Therapy","Phenotype","Source","EvidenceItem"];class e{ngOnInit(){if(null==this.entity)throw new Error("entity input is required for CvcEntityTagPopoverComponent")}}e.\u0275fac=function(bt){return new(bt||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["cvc-entity-tag-popover"]],inputs:{entity:"entity"},decls:6,vars:6,consts:[[3,"ngSwitch"],[3,"molecularProfileId",4,"ngSwitchCase"],[3,"diseaseId",4,"ngSwitchCase"],[3,"therapyId",4,"ngSwitchCase"],[3,"sourceId",4,"ngSwitchCase"],[3,"phenotypeId",4,"ngSwitchCase"],[3,"molecularProfileId"],[3,"diseaseId"],[3,"therapyId"],[3,"sourceId"],[3,"phenotypeId"]],template:function(bt,ct){1&bt&&(t.ynx(0,0),t.YNc(1,x,1,1,"cvc-molecular-profile-popover",1),t.YNc(2,D,1,1,"cvc-disease-popover",2),t.YNc(3,w,1,1,"cvc-therapy-popover",3),t.YNc(4,F,1,1,"cvc-source-popover",4),t.YNc(5,B,1,1,"cvc-phenotype-popover",5),t.BQk()),2&bt&&(t.Q6J("ngSwitch",ct.entity.entityType),t.xp6(1),t.Q6J("ngSwitchCase","MolecularProfile"),t.xp6(1),t.Q6J("ngSwitchCase","Disease"),t.xp6(1),t.Q6J("ngSwitchCase","Therapy"),t.xp6(1),t.Q6J("ngSwitchCase","Source"),t.xp6(1),t.Q6J("ngSwitchCase","Phenotype"))},dependencies:[m.RF,m.n9,f._,s.I,N.p,L.a,T.S],encapsulation:2,changeDetection:0});var P=a(9116),O=a(1102),he=a(6672),ce=a(7570),te=a(6581),ie=a(8926),R=a(160),re=a(320);function X(jt,bt){}function G(jt,bt){if(1&jt){const ct=t.EpF();t.TgZ(0,"span",6)(1,"nz-tag",7),t.NdJ("nzCheckedChange",function(){t.CHM(ct);const $e=t.oxw();return t.KtG($e.cvcTagCheckedChange)})("nzOnClose",function($e){t.CHM(ct);const Pe=t.oxw();return t.KtG(Pe.cvcOnClose.next($e))}),t.TgZ(2,"span",8),t.YNc(3,X,0,0,"ng-template",9),t.qZA()()()}if(2&jt){const ct=t.oxw(),ke=t.MAs(6),$e=t.MAs(8);t.xp6(1),t.Q6J("nzMode",ct.cvcMode)("nzChecked",ct.cvcTagChecked),t.xp6(1),t.Q6J("nzPopoverContent",ct.cvcShowPopover&&ct.popoverInput?ke:void 0),t.xp6(1),t.Q6J("ngTemplateOutlet",$e)}}function De(jt,bt){}function Ie(jt,bt){if(1&jt&&(t.TgZ(0,"span",13),t.YNc(1,De,0,0,"ng-template",9),t.qZA()),2&jt){const ct=t.oxw(2),ke=t.MAs(8);t.Q6J("nzTooltipTitle",ct.entity.tooltip),t.xp6(1),t.Q6J("ngTemplateOutlet",ke)}}function pe(jt,bt){if(1&jt){const ct=t.EpF();t.TgZ(0,"span",10)(1,"nz-tag",11),t.NdJ("nzOnClose",function($e){t.CHM(ct);const Pe=t.oxw();return t.KtG(Pe.cvcOnClose.next($e))}),t.YNc(2,Ie,2,2,"span",12),t.qZA()()}if(2&jt){const ct=t.oxw(),ke=t.MAs(4);t.xp6(1),t.Q6J("nzMode","closeable"),t.xp6(1),t.Q6J("ngIf",ct.entity&&ct.entity.tooltip)("ngIfElse",ke)}}function xe(jt,bt){}function j(jt,bt){if(1&jt&&(t.TgZ(0,"span",13),t.YNc(1,xe,0,0,"ng-template",9),t.qZA()),2&jt){const ct=t.oxw(2),ke=t.MAs(8);t.Q6J("nzTooltipTitle",ct.entity.tooltip),t.xp6(1),t.Q6J("ngTemplateOutlet",ke)}}function Z(jt,bt){if(1&jt&&(t.TgZ(0,"span",14),t.YNc(1,j,2,2,"span",12),t.qZA()),2&jt){const ct=t.oxw(),ke=t.MAs(4);t.xp6(1),t.Q6J("ngIf",ct.entity&&ct.entity.tooltip)("ngIfElse",ke)}}function fe(jt,bt){}function Ce(jt,bt){if(1&jt&&(t.TgZ(0,"span",8),t.YNc(1,fe,0,0,"ng-template",9),t.qZA()),2&jt){const ct=t.oxw(),ke=t.MAs(6),$e=t.MAs(8);t.Q6J("nzPopoverContent",ct.popoverInput?ke:void 0),t.xp6(1),t.Q6J("ngTemplateOutlet",$e)}}function kt(jt,bt){if(1&jt&&t._UZ(0,"cvc-entity-tag-popover",16),2&jt){const ct=t.oxw(2);t.Q6J("entity",ct.popoverInput)}}function Ot(jt,bt){if(1&jt&&t.YNc(0,kt,1,1,"cvc-entity-tag-popover",15),2&jt){const ct=t.oxw();t.Q6J("ngIf",ct.popoverInput)}}function rn(jt,bt){if(1&jt&&(t.TgZ(0,"span"),t.GkF(1,9),t.qZA()),2&jt){t.oxw();const ct=t.MAs(4);t.xp6(1),t.Q6J("ngTemplateOutlet",ct)}}function nt(jt,bt){if(1&jt&&(t.TgZ(0,"a",23),t.GkF(1,9),t.qZA()),2&jt){t.oxw();const ct=t.MAs(4),ke=t.oxw(2);t.Q6J("routerLink",ke.entity.link),t.xp6(1),t.Q6J("ngTemplateOutlet",ct)}}function pt(jt,bt){if(1&jt&&(t._UZ(0,"span",26),t.ALo(1,"typenameToIcon"),t.ALo(2,"entityColor")),2&jt){const ct=t.oxw(4);t.Q6J("nzType",t.lcZ(1,2,ct.typename))("nzTwotoneColor",t.lcZ(2,4,ct.typename))}}function It(jt,bt){if(1&jt&&(t.YNc(0,pt,3,6,"span",24),t._UZ(1,"span",25),t.ALo(2,"highlightTypeahead")),2&jt){t.oxw(2);const ct=t.MAs(4),ke=t.oxw();t.Q6J("ngIf",ke.typename)("ngIfElse",ct),t.xp6(1),t.Q6J("innerHtml",t.xi3(2,3,ke.entity.name,ke.cvcEmphasize),t.oJD)}}function wt(jt,bt){if(1&jt&&(t.ynx(0),t.YNc(1,rn,2,1,"span",20),t.YNc(2,nt,2,2,"a",21),t.YNc(3,It,3,6,"ng-template",null,22,t.W1O),t.BQk()),2&jt){const ct=t.oxw(2);t.xp6(1),t.Q6J("ngIf",ct.cvcDisableLink),t.xp6(1),t.Q6J("ngIf",!ct.cvcDisableLink)}}function un(jt,bt){}function Et(jt,bt){if(1&jt&&(t.YNc(0,un,0,0,"ng-template",9),t._uU(1)),2&jt){t.oxw();const ct=t.MAs(4),ke=t.oxw();t.Q6J("ngTemplateOutlet",ct),t.xp6(1),t.hij(" CACHE-MISS (",ke.cvcCacheId,") ")}}function gt(jt,bt){1&jt&&t._UZ(0,"span",27)}function Xt(jt,bt){if(1&jt&&(t.YNc(0,wt,5,2,"ng-container",17),t.YNc(1,Et,2,2,"ng-template",null,18,t.W1O),t.YNc(3,gt,1,0,"ng-template",null,19,t.W1O)),2&jt){const ct=t.MAs(2),ke=t.oxw();t.Q6J("ngIf",ke.entity)("ngIfElse",ct)}}function yt(jt,bt){if(1&jt&&t._UZ(0,"cvc-entity-tag-popover",16),2&jt){const ct=t.oxw(2);t.Q6J("entity",ct.popoverInput)}}function Dt(jt,bt){if(1&jt&&t.YNc(0,yt,1,1,"cvc-entity-tag-popover",15),2&jt){const ct=t.oxw();t.Q6J("ngIf",ct.popoverInput)}}const an=jt=>void 0!==jt&&jt.__typename&&jt.id&&void 0!==jt.name;class mn{set cvcLinkableEntity(bt){bt&&this.setLinkableEntity(bt)}set cvcCacheId(bt){bt&&this.setCachedLinkableEntity(bt)}constructor(bt){this.apollo=bt,this.cvcContext="default",this.cvcMode="default",this.cvcDisableLink=!1,this.cvcTagChecked=!1,this.cvcHasTooltip=!1,this.cvcFullWidth=!1,this.cvcShowPopover=!1,this.cvcTagCheckedChange=new t.vpe,this.cvcOnClose=new t.vpe}hasPopover(bt){return S.includes(bt)}setLinkableEntity(bt){an(bt)&&(this.typename=bt.__typename,this.id=bt.id,this.entity=bt,this.setPopoverInput(bt))}setCachedLinkableEntity(bt){const[ct,ke]=bt.split(":");if(this.typename=ct,this.id=+ke,!this.typename||!this.id)return void console.error(`entity-tag received an invalid cacheId: ${bt}. Cache IDs must be in the format 'TYPENAME:ID'.`);let $e;$e=this.cvcDisableLink?this.cvcHasTooltip?{id:`${ct}:${ke}`,fragment:o.Ps`
          fragment Linkable${ct}Entity on ${ct} {
            id
            name
            tooltip
          }
        `}:{id:`${ct}:${ke}`,fragment:o.Ps`
          fragment Linkable${ct}Entity on ${ct} {
            id
            name
          }
        `}:{id:`${ct}:${ke}`,fragment:o.Ps`
          fragment Linkable${ct}Entity on ${ct} {
            id
            name
            link
          }
        `};const Pe=this.apollo.client.readFragment($e);an(Pe)?(this.setPopoverInput(Pe),this.entity=Pe):console.error(`entity-tag could not find cached entity ${bt}`)}setPopoverInput(bt){an(bt)&&this.hasPopover(bt.__typename)&&(this.popoverInput={entityId:bt.id,entityType:bt.__typename})}ngOnChanges(bt){bt.cvcMode&&"checkable"===bt.cvcMode.currentValue&&(this.cvcDisableLink=!0),bt.cvcContext&&"default"!==bt.cvcContext.currentValue&&(this.cvcDisableLink=!0)}}mn.\u0275fac=function(bt){return new(bt||mn)(t.Y36(o._M))},mn.\u0275cmp=t.Xpm({type:mn,selectors:[["cvc-entity-tag"]],hostVars:40,hostBindings:function(bt,ct){2&bt&&t.ekj("full-width",!0===ct.cvcFullWidth)("label-max",void 0!==ct.cvcTruncateLabel)("label-max-50","50px"===ct.cvcTruncateLabel)("label-max-75","75px"===ct.cvcTruncateLabel)("label-max-100","100px"===ct.cvcTruncateLabel)("label-max-125","125px"===ct.cvcTruncateLabel)("label-max-150","150px"===ct.cvcTruncateLabel)("label-max-175","175px"===ct.cvcTruncateLabel)("label-max-200","200px"===ct.cvcTruncateLabel)("label-max-250","250px"===ct.cvcTruncateLabel)("label-max-300","300px"===ct.cvcTruncateLabel)("label-max-350","350px"===ct.cvcTruncateLabel)("label-max-400","400px"===ct.cvcTruncateLabel)("label-max-450","450px"===ct.cvcTruncateLabel)("label-max-500","500px"===ct.cvcTruncateLabel)("rejected","REJECTED"===ct.cvcStatus)("accepted","ACCEPTED"===ct.cvcStatus)("submitted","SUBMITTED"===ct.cvcStatus)("new","NEW"===ct.cvcStatus)("superseded","SUPERSEDED"===ct.cvcStatus)},inputs:{cvcLinkableEntity:"cvcLinkableEntity",cvcCacheId:"cvcCacheId",cvcStatus:"cvcStatus",cvcContext:"cvcContext",cvcMode:"cvcMode",cvcEmphasize:"cvcEmphasize",cvcDisableLink:"cvcDisableLink",cvcTagChecked:"cvcTagChecked",cvcHasTooltip:"cvcHasTooltip",cvcFullWidth:"cvcFullWidth",cvcShowPopover:"cvcShowPopover",cvcTruncateLabel:"cvcTruncateLabel"},outputs:{cvcTagCheckedChange:"cvcTagCheckedChange",cvcOnClose:"cvcOnClose"},features:[t.TTD],decls:11,vars:3,consts:[["class","default",4,"ngIf"],["class","select-item",4,"ngIf"],["class","multi-select-item",4,"ngIf"],["noTooltip",""],["popoverContent",""],["tagContent",""],[1,"default"],[3,"nzMode","nzChecked","nzCheckedChange","nzOnClose"],["nz-popover","","nzPopoverTrigger","hover",3,"nzPopoverContent"],[3,"ngTemplateOutlet"],[1,"select-item"],[3,"nzMode","nzOnClose"],["nz-tooltip","",3,"nzTooltipTitle",4,"ngIf","ngIfElse"],["nz-tooltip","",3,"nzTooltipTitle"],[1,"multi-select-item"],[3,"entity",4,"ngIf"],[3,"entity"],[4,"ngIf","ngIfElse"],["cacheMiss",""],["noIcon",""],[4,"ngIf"],[3,"routerLink",4,"ngIf"],["tagLabel",""],[3,"routerLink"],["nz-icon","","nzTheme","twotone","class","tag-icon",3,"nzType","nzTwotoneColor",4,"ngIf","ngIfElse"],[1,"tag-label",3,"innerHtml"],["nz-icon","","nzTheme","twotone",1,"tag-icon",3,"nzType","nzTwotoneColor"],["nz-icon","","nzType","question-circle","nzTheme","outline",1,"tag-icon"]],template:function(bt,ct){1&bt&&(t.YNc(0,G,4,4,"span",0),t.YNc(1,pe,3,3,"span",1),t.YNc(2,Z,2,2,"span",2),t.YNc(3,Ce,2,2,"ng-template",null,3,t.W1O),t.YNc(5,Ot,1,1,"ng-template",null,4,t.W1O),t.YNc(7,Xt,5,2,"ng-template",null,5,t.W1O),t.YNc(9,Dt,1,1,"ng-template",null,4,t.W1O)),2&bt&&(t.Q6J("ngIf","default"===ct.cvcContext),t.xp6(1),t.Q6J("ngIf","select-item"===ct.cvcContext),t.xp6(1),t.Q6J("ngIf","multi-select-item"===ct.cvcContext))},dependencies:[m.O5,m.tP,P.rH,O.Ls,he.j,ce.SY,te.lU,e,ie.A,R.a,re.Z],styles:['.label-max-50[_nghost-%COMP%]   .tag-label[_ngcontent-%COMP%]{max-width:50px;overflow:hidden;text-overflow:ellipsis}.label-max-75[_nghost-%COMP%]   .tag-label[_ngcontent-%COMP%]{max-width:75px;overflow:hidden;text-overflow:ellipsis}.label-max-100[_nghost-%COMP%]   .tag-label[_ngcontent-%COMP%]{max-width:100px;overflow:hidden;text-overflow:ellipsis}.label-max-125[_nghost-%COMP%]   .tag-label[_ngcontent-%COMP%]{max-width:125px;overflow:hidden;text-overflow:ellipsis}.label-max-150[_nghost-%COMP%]   .tag-label[_ngcontent-%COMP%]{max-width:150px;overflow:hidden;text-overflow:ellipsis}.label-max-175[_nghost-%COMP%]   .tag-label[_ngcontent-%COMP%]{max-width:175px;overflow:hidden;text-overflow:ellipsis}.label-max-200[_nghost-%COMP%]   .tag-label[_ngcontent-%COMP%]{max-width:200px;overflow:hidden;text-overflow:ellipsis}.label-max-250[_nghost-%COMP%]   .tag-label[_ngcontent-%COMP%]{max-width:250px;overflow:hidden;text-overflow:ellipsis}.label-max-300[_nghost-%COMP%]   .tag-label[_ngcontent-%COMP%]{max-width:300px;overflow:hidden;text-overflow:ellipsis}.label-max-350[_nghost-%COMP%]   .tag-label[_ngcontent-%COMP%]{max-width:350px;overflow:hidden;text-overflow:ellipsis}.label-max-400[_nghost-%COMP%]   .tag-label[_ngcontent-%COMP%]{max-width:400px;overflow:hidden;text-overflow:ellipsis}.label-max-450[_nghost-%COMP%]   .tag-label[_ngcontent-%COMP%]{max-width:450px;overflow:hidden;text-overflow:ellipsis}.label-max-500[_nghost-%COMP%]   .tag-label[_ngcontent-%COMP%]{max-width:500px;overflow:hidden;text-overflow:ellipsis}.rejected[_nghost-%COMP%]   nz-tag[_ngcontent-%COMP%], .submitted[_nghost-%COMP%]   nz-tag[_ngcontent-%COMP%], .accepted[_nghost-%COMP%]   nz-tag[_ngcontent-%COMP%], .deprecated[_nghost-%COMP%]   nz-tag[_ngcontent-%COMP%]{border-right-width:2px}.rejected[_nghost-%COMP%]   nz-tag[_ngcontent-%COMP%], .deprecated[_nghost-%COMP%]   nz-tag[_ngcontent-%COMP%]{border-color:#e6e6e6;background-color:#fff;color:#999999d9}.submitted[_nghost-%COMP%]   nz-tag[_ngcontent-%COMP%]{border-color:#ffe58f}.accepted[_nghost-%COMP%]   nz-tag[_ngcontent-%COMP%]{border-color:#b7eb8f}.full-width[_nghost-%COMP%]   nz-tag[_ngcontent-%COMP%]{width:100%}.full-width[_nghost-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-label[_ngcontent-%COMP%]{width:100%}nz-tag[_ngcontent-%COMP%]{margin-right:0;margin-inline-end:4px}  -checkable{background-color:transparent;cursor:pointer}  -checkable:not(  -checkable-checked):hover{color:#1890ff}  -checkable:active,   -checkable-checked{color:#fff}  -checkable-checked{background-color:#1890ff}  -checkable:active{background-color:#096dd9}.default[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]{margin:0;padding:0 2px 0 0;margin-inline-end:4px;max-width:100%}.default[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon[_ngcontent-%COMP%]{display:inline-block;padding:3px 2px 3px 4px;margin:-3px 0}.default[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-label[_ngcontent-%COMP%]{display:inline-block;margin:-3px 0 -4px;padding:3px 3px 3px 2px;line-height:1}.default[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]     i.ant-tag-close-icon.anticon-close{transition:none;margin-left:3px}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]{margin:0;padding:0 2px 0 0;margin-inline-end:4px;max-width:100%}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon[_ngcontent-%COMP%]{display:inline-block;padding:3px 2px 3px 4px;margin:-3px 0}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-label[_ngcontent-%COMP%]{display:inline-block;margin:-3px 0 -4px;padding:3px 3px 3px 2px;line-height:1}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]     i.ant-tag-close-icon.anticon-close{transition:none;margin-left:3px}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-label[_ngcontent-%COMP%]{padding-right:0}.multi-select-item[_ngcontent-%COMP%]{display:inline-block;margin-top:-3px;margin-bottom:-3px;margin-left:-4px;padding-left:4px}.multi-select-item[_ngcontent-%COMP%]   .tag-icon[_ngcontent-%COMP%]:after{content:" "}.typeahead-match[_ngcontent-%COMP%]{font-weight:700}a.disabled[_ngcontent-%COMP%]{pointer-events:none}'],changeDetection:0})},3258:(Pt,we,a)=>{a.d(we,{x:()=>P});var t=a(6895),o=a(1102),m=a(6672),f=a(9444),s=a(7570),N=a(9116),L=a(4650);class T{}T.\u0275fac=function(he){return new(he||T)},T.\u0275mod=L.oAB({type:T}),T.\u0275inj=L.cJS({imports:[t.ez]});var x=a(6581),D=a(3638),w=a(4398),F=a(1028),B=a(9736),S=a(8974);class e{}e.\u0275fac=function(he){return new(he||e)},e.\u0275mod=L.oAB({type:e}),e.\u0275inj=L.cJS({imports:[t.ez,w._,D.t,B.n,S.s,F.I]});class P{}P.\u0275fac=function(he){return new(he||P)},P.\u0275mod=L.oAB({type:P}),P.\u0275inj=L.cJS({imports:[t.ez,N.Bz,o.PV,m.X,s.cg,x.$6,T,f.s,e,T]})},7830:(Pt,we,a)=>{a.d(we,{F:()=>B});var t=a(4650),o=a(6895),m=a(5681),f=a(9597),s=a(2635);function N(S,e){if(1&S&&t._UZ(0,"nz-alert",6),2&S){t.oxw();const P=t.MAs(3),O=t.oxw();t.MGl("nzMessage","Error Submitting ",O.entityType,""),t.Q6J("nzDescription",P)}}function L(S,e){if(1&S&&(t.TgZ(0,"li"),t._uU(1),t.qZA()),2&S){const P=e.$implicit;t.xp6(1),t.hij(" ",P," ")}}function T(S,e){if(1&S&&(t.TgZ(0,"ul"),t.YNc(1,L,2,1,"li",7),t.qZA()),2&S){const P=t.oxw().ngIf;t.xp6(1),t.Q6J("ngForOf",P)}}function x(S,e){if(1&S&&(t.ynx(0),t.YNc(1,N,1,2,"nz-alert",4),t.YNc(2,T,2,1,"ng-template",null,5,t.W1O),t.BQk()),2&S){const P=e.ngIf;t.xp6(1),t.Q6J("ngIf",P.length>0)}}function D(S,e){if(1&S&&(t.ynx(0),t._UZ(1,"nz-alert",8),t.BQk()),2&S){const P=t.oxw();t.xp6(1),t.MGl("nzMessage","",P.entityType," Submitted"),t.Q6J("nzDescription",P.successMessage?P.successMessage:null)}}function w(S,e){1&S&&t.Hsn(0)}class B{ngOnInit(){}}B.\u0275fac=function(e){return new(e||B)},B.\u0275cmp=t.Xpm({type:B,selectors:[["cvc-form-submission-status-display"]],inputs:{mutationState:"mutationState",entityType:"entityType",successMessage:"successMessage"},ngContentSelectors:["*"],decls:8,vars:10,consts:[[3,"nzSpinning"],[4,"ngIf"],[4,"ngIf","ngIfElse"],["form",""],["nzType","error","nzShowIcon","",3,"nzMessage","nzDescription",4,"ngIf"],["errorList",""],["nzType","error","nzShowIcon","",3,"nzMessage","nzDescription"],[4,"ngFor","ngForOf"],["nzType","success","nzShowIcon","",3,"nzMessage","nzDescription"]],template:function(e,P){if(1&e&&(t.F$t(),t.TgZ(0,"nz-spin",0),t.ALo(1,"ngrxPush"),t.YNc(2,x,4,1,"ng-container",1),t.ALo(3,"ngrxPush"),t.YNc(4,D,2,2,"ng-container",2),t.ALo(5,"ngrxPush"),t.YNc(6,w,1,0,"ng-template",null,3,t.W1O),t.qZA()),2&e){const O=t.MAs(7);t.Q6J("nzSpinning",t.lcZ(1,4,null==P.mutationState?null:P.mutationState.isSubmitting$)),t.xp6(2),t.Q6J("ngIf",t.lcZ(3,6,null==P.mutationState?null:P.mutationState.submitError$)),t.xp6(2),t.Q6J("ngIf",t.lcZ(5,8,null==P.mutationState?null:P.mutationState.submitSuccess$))("ngIfElse",O)}},dependencies:[o.sg,o.O5,m.W,f.r,s.fM],encapsulation:2,changeDetection:0})},9676:(Pt,we,a)=>{a.d(we,{g:()=>L});var t=a(6895),o=a(2635),m=a(9597),f=a(6903),s=a(5681),N=a(4650);class L{}L.\u0275fac=function(x){return new(x||L)},L.\u0275mod=N.oAB({type:L}),L.\u0275inj=N.cJS({imports:[t.ez,o.pP,s.j,m.L,f.zf]})},8484:(Pt,we,a)=>{a.d(we,{S:()=>Gs});var t=a(4006),o=a(9116),m=a(6212),f=a(4697),s=a(6704),N=a(317),L=a(5910);const T={paramKey:!0};class x{constructor(d){this.route=d}postPopulate(d){if(d.fieldGroup||d.fieldArray||!1===(d.props||{...T}).paramKey||(this.paramKey=this.getParamKey(d),!this.paramKey))return;const z=this.getRouteSub(this.route,d),se=d.hooks?.onDestroy;z&&se&&(d.hooks={...d.hooks,onDestroy:mt=>{z.unsubscribe(),se(mt)}})}getParamKey(d){const c=d.props;if("string"==typeof c.paramKey)return c.paramKey;if(d.key){if("string"==typeof d.key)return d.key;console.warn(`observe-query-param cannot use field key ${JSON.stringify(d.key)} of type ${typeof d.key} to observe a query param. Use prop.paramKey to specify a query param string, or define a string field.key.`)}}getRouteSub(d,c){const z=d.queryParams.pipe((0,L.g)(this.paramKey)).subscribe(se=>{const mt=c.formControl,Vt=se[this.paramKey];if(!Vt)return void z.unsubscribe();let Mn;try{Mn=JSON.parse(Vt)}catch(Rn){return console.warn(`observe-query-param failed to parse query param ${this.paramKey} for field ${c.id}: ${Rn}`),console.warn("Note: Query values are parsed as JSON, therefore enum strings must be enclosed in double-quotes, and numeric entity IDs must be bare, unquoted."),void z.unsubscribe()}if(Mn){if(Object.keys(Mn).length>0&&Mn.constructor===Object)return console.warn(`observe-query-param may only set primitive types or arrays of primitive types, param ${this.paramKey} is an object: ${JSON.stringify(Mn)}`),void z.unsubscribe();mt.setValue(Mn)}});return z}}var S=a(6895),e=a(4650),P=a(2635),O=a(3679),he=a(8823);function ce(v,d){if(1&v&&(e.TgZ(0,"div",9),e.GkF(1,10),e.qZA()),2&v){e.oxw();const c=e.MAs(5);e.xp6(1),e.Q6J("ngTemplateOutlet",c)}}function te(v,d){if(1&v&&(e.TgZ(0,"div",11),e.GkF(1,10),e.qZA()),2&v){e.oxw();const c=e.MAs(9);e.xp6(1),e.Q6J("ngTemplateOutlet",c)}}function ie(v,d){if(1&v&&(e.TgZ(0,"div",12),e.GkF(1,10),e.qZA()),2&v){e.oxw();const c=e.MAs(7);e.xp6(1),e.Q6J("ngTemplateOutlet",c)}}function R(v,d){if(1&v&&(e.TgZ(0,"nz-form-label",17),e._UZ(1,"span",18),e.qZA()),2&v){const c=d.ngrxLet,z=e.oxw(3);e.Q6J("nzRequired",z.props.required)("nzFor",z.id)("nzNoColon",!0)("nzTooltipTitle",z.props.tooltip)("nzSpan",c.span?c.span:null),e.xp6(1),e.Q6J("nzContent",z.props.label)}}function re(v,d){if(1&v&&(e.ynx(0),e.YNc(1,R,2,6,"nz-form-label",16),e.BQk()),2&v){const c=e.oxw(2);e.xp6(1),e.Q6J("ngrxLet",c.wrapper.layout.label)}}function X(v,d){if(1&v&&(e.TgZ(0,"nz-form-control",19),e.GkF(1,null,20),e.qZA()),2&v){const c=d.ngrxLet,z=e.oxw(2),se=e.MAs(11),mt=e.MAs(13);e.Q6J("nzExtra",z.wrapper.showExtra&&!z.showError?se:void 0)("nzValidateStatus",z.errorState)("nzErrorTip",mt)("nzSpan",z.props.hideLabel?24:c.span?c.span:null)}}const G=function(v,d,c,z){return{disabled:v,error:d,required:c,valid:z}};function De(v,d){if(1&v&&(e.TgZ(0,"nz-form-item",13),e.YNc(1,re,2,1,"ng-container",14),e.YNc(2,X,3,4,"nz-form-control",15),e.qZA()),2&v){const c=e.oxw();e.Q6J("nzGutter",c.wrapper.layout.item.gutter)("ngClass",e.l5B(4,G,c.props.disabled,c.showError,c.props.required,"VALID"===c.field.formControl.status)),e.xp6(1),e.Q6J("ngIf",c.props.label&&!0!==c.props.hideLabel),e.xp6(1),e.Q6J("ngrxLet",c.wrapper.layout.control)}}const Ie=function(v,d){return{disabled:v,error:d}};function pe(v,d){if(1&v&&(e.TgZ(0,"nz-form-label",24),e._UZ(1,"span",25),e.qZA()),2&v){const c=e.oxw(3);e.Q6J("ngClass",e.WLB(6,Ie,c.props.disabled,c.showError))("nzRequired",c.props.required)("nzFor",c.id)("nzTooltipTitle",c.props.tooltip)("nzNoColon",!0),e.xp6(1),e.Q6J("nzContent",c.props.label)}}function xe(v,d){if(1&v&&(e.ynx(0),e.YNc(1,pe,2,9,"nz-form-label",23),e.BQk()),2&v){const c=e.oxw(2);e.xp6(1),e.Q6J("ngrxLet",c.wrapper.layout.label)}}function j(v,d){if(1&v&&(e.TgZ(0,"nz-form-control",26),e.GkF(1,null,20),e.qZA()),2&v){const c=e.oxw(2),z=e.MAs(11),se=e.MAs(13);e.Q6J("nzExtra",c.wrapper.showExtra&&!c.showError?z:void 0)("nzValidateStatus",c.errorState)("nzErrorTip",se)}}function Z(v,d){if(1&v&&(e.TgZ(0,"nz-form-item",21),e.YNc(1,xe,2,1,"ng-container",14),e.YNc(2,j,3,3,"nz-form-control",22),e.qZA()),2&v){const c=e.oxw();e.Q6J("ngClass",e.l5B(3,G,c.props.disabled,c.showError,c.props.required,"VALID"===c.field.formControl.status)),e.xp6(1),e.Q6J("ngIf",c.props.label&&!0!==c.props.hideLabel),e.xp6(1),e.Q6J("ngrxLet",c.wrapper.layout.control)}}function fe(v,d){if(1&v&&(e.ynx(0),e.TgZ(1,"nz-form-label",28),e._UZ(2,"span",25),e.qZA(),e.BQk()),2&v){const c=e.oxw(2);e.xp6(1),e.Q6J("nzRequired",c.props.required)("nzTooltipTitle",c.props.tooltip)("nzFor",c.id)("nzNoColon",!0),e.xp6(1),e.Q6J("nzContent",c.props.label)}}function Ce(v,d){if(1&v&&e._UZ(0,"formly-validation-message",29),2&v){const c=e.oxw(3);e.Q6J("field",c.field)}}function kt(v,d){if(1&v&&(e.TgZ(0,"nz-form-control",26),e.GkF(1,null,20),e.YNc(3,Ce,1,1,"ng-template",null,8,e.W1O),e.qZA()),2&v){const c=e.MAs(4),z=e.oxw(2),se=e.MAs(11);e.Q6J("nzExtra",z.wrapper.showExtra&&!z.showError?se:void 0)("nzValidateStatus",z.errorState)("nzErrorTip",c)}}function Ot(v,d){if(1&v&&(e.TgZ(0,"nz-form-item",27),e.YNc(1,fe,3,5,"ng-container",14),e.YNc(2,kt,5,3,"nz-form-control",22),e.qZA()),2&v){const c=e.oxw();e.Q6J("ngClass",e.l5B(3,G,c.props.disabled,c.showError,c.props.required,"VALID"===c.field.formControl.status)),e.xp6(1),e.Q6J("ngIf",c.props.label&&!0!==c.props.hideLabel),e.xp6(1),e.Q6J("ngrxLet",c.wrapper.layout.control)}}function rn(v,d){if(1&v&&e._UZ(0,"span",34),2&v){const c=e.oxw(2);e.Q6J("innerHTML",c.props.description,e.oJD)}}function nt(v,d){if(1&v&&e._UZ(0,"span",35),2&v){const c=e.oxw(2);e.Q6J("innerHTML",c.props.description,e.oJD)}}function pt(v,d){if(1&v&&e._UZ(0,"span",36),2&v){const c=e.oxw(2);e.Q6J("innerHTML",c.props.description,e.oJD)}}function It(v,d){if(1&v&&(e.TgZ(0,"div",30),e.ynx(1,0),e.YNc(2,rn,1,1,"span",31),e.YNc(3,nt,1,1,"span",32),e.YNc(4,pt,1,1,"span",33),e.BQk(),e.qZA()),2&v){const c=e.oxw();e.xp6(1),e.Q6J("ngSwitch",c.props.extraType),e.xp6(1),e.Q6J("ngSwitchCase","prompt"),e.xp6(1),e.Q6J("ngSwitchCase","description")}}function wt(v,d){if(1&v&&(e.TgZ(0,"div",37),e._UZ(1,"formly-validation-message",29),e.qZA()),2&v){const c=e.oxw();e.xp6(1),e.Q6J("field",c.field)}}class un extends m.n2{get errorState(){return this.showError?"error":""}constructor(){super(),this.formLayout="vertical"}ngOnInit(){try{this.wrapper={layout:{item:{gutter:[6,12],...this.props.layout?.item?this.props.layout.item:void 0},label:{span:4,...this.props.layout?.label?this.props.layout.label:void 0},control:{span:20,...this.props.layout?.control?this.props.layout?.control:void 0}},showExtra:void 0===this.props.layout?.showExtra||this.props.layout.showExtra}}catch(d){console.error(d)}this.options.formState.formLayout&&(this.formLayout=this.options.formState.formLayout)}ngAfterViewInit(){this.options.formState.formLayout&&(this.formLayout=this.options.formState.formLayout)}}un.\u0275fac=function(d){return new(d||un)},un.\u0275cmp=e.Xpm({type:un,selectors:[["cvc-form-field-wrapper"]],features:[e.qOj],decls:14,vars:4,consts:[[3,"ngSwitch"],["class","layout-horizontal",4,"ngSwitchCase"],["class","layout-inline",4,"ngSwitchCase"],["class","layout-vertical",4,"ngSwitchCase"],["horizontalFieldWrapper",""],["verticalFieldWrapper",""],["inlineFieldWrapper",""],["descriptionTpl",""],["errorTpl",""],[1,"layout-horizontal"],[3,"ngTemplateOutlet"],[1,"layout-inline"],[1,"layout-vertical"],[1,"layout-horizontal",3,"nzGutter","ngClass"],[4,"ngIf"],[3,"nzExtra","nzValidateStatus","nzErrorTip","nzSpan",4,"ngrxLet"],[3,"nzRequired","nzFor","nzNoColon","nzTooltipTitle","nzSpan",4,"ngrxLet"],[3,"nzRequired","nzFor","nzNoColon","nzTooltipTitle","nzSpan"],["nz-typography","","nzEllipsis","",3,"nzContent"],[3,"nzExtra","nzValidateStatus","nzErrorTip","nzSpan"],["fieldComponent",""],[1,"layout-vertical",3,"ngClass"],[3,"nzExtra","nzValidateStatus","nzErrorTip",4,"ngrxLet"],[3,"ngClass","nzRequired","nzFor","nzTooltipTitle","nzNoColon",4,"ngrxLet"],[3,"ngClass","nzRequired","nzFor","nzTooltipTitle","nzNoColon"],["nz-typography","","nzEllipsis","",1,"label",3,"nzContent"],[3,"nzExtra","nzValidateStatus","nzErrorTip"],[1,"layout-inline",3,"ngClass"],[3,"nzRequired","nzTooltipTitle","nzFor","nzNoColon"],[3,"field"],[1,"form-field-description"],["class","extra-prompt",3,"innerHTML",4,"ngSwitchCase"],["class","extra-description",3,"innerHTML",4,"ngSwitchCase"],[3,"innerHTML",4,"ngSwitchDefault"],[1,"extra-prompt",3,"innerHTML"],[1,"extra-description",3,"innerHTML"],[3,"innerHTML"],[1,"cvc-form-field-validation"]],template:function(d,c){1&d&&(e.ynx(0,0),e.YNc(1,ce,2,1,"div",1),e.YNc(2,te,2,1,"div",2),e.YNc(3,ie,2,1,"div",3),e.BQk(),e.YNc(4,De,3,9,"ng-template",null,4,e.W1O),e.YNc(6,Z,3,8,"ng-template",null,5,e.W1O),e.YNc(8,Ot,3,8,"ng-template",null,6,e.W1O),e.YNc(10,It,5,3,"ng-template",null,7,e.W1O),e.YNc(12,wt,2,1,"ng-template",null,8,e.W1O)),2&d&&(e.Q6J("ngSwitch",c.formLayout),e.xp6(1),e.Q6J("ngSwitchCase","horizontal"),e.xp6(1),e.Q6J("ngSwitchCase","inline"),e.xp6(1),e.Q6J("ngSwitchCase","vertical"))},dependencies:[S.mk,S.O5,S.tP,S.RF,S.n9,S.ED,P.eJ,O.t3,O.SK,s.Nx,s.iK,s.Fd,he.ZU,m.M2],styles:['.typeahead-match[_ngcontent-%COMP%]{font-weight:700}.layout-vertical[_ngcontent-%COMP%]     nz-form-item:first-of-type{flex-wrap:nowrap;flex-direction:column}.layout-horizontal[_ngcontent-%COMP%]     nz-form-item:first-of-type{flex-direction:inherit}.layout-horizontal[_ngcontent-%COMP%]     nz-form-item:first-of-type nz-form-label{text-align:right;line-height:28px;white-space:inherit;padding:inherit}.layout-inline[_ngcontent-%COMP%]     nz-form-item:first-of-type{flex-direction:inherit}.layout-inline[_ngcontent-%COMP%]     nz-form-item:first-of-type nz-form-label{height:28px;line-height:28px;white-space:inherit;padding:inherit}.cvc-form-field-validation[_ngcontent-%COMP%], .form-field-description[_ngcontent-%COMP%]{min-height:16px;line-height:1.2;margin-top:4px}.cvc-form-field-validation[_ngcontent-%COMP%]   .extra-prompt[_ngcontent-%COMP%], .form-field-description[_ngcontent-%COMP%]   .extra-prompt[_ngcontent-%COMP%]{font-weight:400}.cvc-form-field-validation[_ngcontent-%COMP%]   .extra-description[_ngcontent-%COMP%], .form-field-description[_ngcontent-%COMP%]   .extra-description[_ngcontent-%COMP%]{font-style:oblique}.cvc-form-field-validation[_ngcontent-%COMP%]{font-weight:600}nz-form-item.layout-horizontal[_ngcontent-%COMP%]     nz-form-label:first-of-type label.ant-form-item-required{font-weight:500}nz-form-item.layout-horizontal[_ngcontent-%COMP%]     nz-form-label:first-of-type label.ant-form-item-required:before{border:1px solid #ff4d4f;height:1em;content:""}nz-form-item.layout-horizontal[_ngcontent-%COMP%]     nz-form-label:first-of-type   span.label{padding-right:4px}nz-form-item.layout-horizontal[_ngcontent-%COMP%]     nz-form-label:first-of-type.disabled label   span.label{color:#00000073}nz-form-item.layout-horizontal[_ngcontent-%COMP%]     nz-form-label:first-of-type.error label   span.label{color:#ff4d4f}nz-form-item.layout-horizontal[_ngcontent-%COMP%]     nz-form-label:first-of-type.valid label   span.label{color:#ff4d4f}nz-form-item.layout-vertical[_ngcontent-%COMP%]{background-color:#fff;border:1px solid #d9d9d9;padding:4px 8px;border-radius:6px;margin-bottom:16px}nz-form-item.layout-vertical.disabled[_ngcontent-%COMP%]{border:1px solid #f5f5f5;background-color:#f5f5f5}nz-form-item.layout-vertical[_ngcontent-%COMP%]     nz-form-label:first-of-type label.ant-form-item-required{font-weight:500}nz-form-item.layout-vertical[_ngcontent-%COMP%]     nz-form-label:first-of-type label.ant-form-item-required:before{border:1px solid #ff4d4f;height:1em;content:""}nz-form-item.layout-vertical[_ngcontent-%COMP%]     nz-form-label:first-of-type   span.label{padding-right:4px}nz-form-item.layout-vertical[_ngcontent-%COMP%]     nz-form-label:first-of-type.disabled label   span.label{color:#00000073}nz-form-item.layout-vertical[_ngcontent-%COMP%]     nz-form-label:first-of-type.error label   span.label{color:#ff4d4f}nz-form-item.layout-vertical[_ngcontent-%COMP%]     nz-form-label:first-of-type.valid label   span.label{color:#ff4d4f}nz-form-item.layout-inline[_ngcontent-%COMP%]     nz-form-label:first-of-type{text-align:right;margin-right:6px}nz-form-item.layout-inline[_ngcontent-%COMP%]     nz-form-label:first-of-type label.ant-form-item-required{font-weight:500}nz-form-item.layout-inline[_ngcontent-%COMP%]     nz-form-label:first-of-type label.ant-form-item-required:before{border:1px solid #ff4d4f;height:1em;content:""}nz-form-item.layout-inline[_ngcontent-%COMP%]     nz-form-label:first-of-type   span.label{padding-right:4px}nz-form-item.layout-inline[_ngcontent-%COMP%]     nz-form-label:first-of-type.disabled label   span.label{color:#00000073}nz-form-item.layout-inline[_ngcontent-%COMP%]     nz-form-label:first-of-type.error label   span.label{color:#ff4d4f}nz-form-item.layout-inline[_ngcontent-%COMP%]     nz-form-label:first-of-type.valid label   span.label{color:#ff4d4f}'],changeDetection:0});var Et=a(7570),gt=a(1102);const Xt={wrappers:[{name:"form-field",component:un}]};class yt{}yt.\u0275fac=function(d){return new(d||yt)},yt.\u0275mod=e.oAB({type:yt}),yt.\u0275inj=e.cJS({imports:[S.ez,P._N,P.pP,t.UX,s.U5,O.Jb,gt.PV,Et.cg,he.ZJ,m.X0.forChild(Xt)]});var Dt=a(8213);class an extends m.fS{constructor(){super(...arguments),this.defaultOptions={props:{indeterminate:!0,hideLabel:!0}}}ngAfterViewInit(){console.log(this.props)}}an.\u0275fac=function(){let v;return function(c){return(v||(v=e.n5z(an)))(c||an)}}(),an.\u0275cmp=e.Xpm({type:an,selectors:[["cvc-checkbox"]],features:[e.qOj],decls:2,vars:4,consts:[["nz-checkbox","",3,"nzIndeterminate","formControl","formlyAttributes","ngModelChange"]],template:function(d,c){1&d&&(e.TgZ(0,"label",0),e.NdJ("ngModelChange",function(se){return c.props.change&&c.props.change(c.field,se)}),e._uU(1),e.qZA()),2&d&&(e.Q6J("nzIndeterminate",c.props.indeterminate&&null==c.formControl.value)("formControl",c.formControl)("formlyAttributes",c.field),e.xp6(1),e.hij(" ",c.props.label,"\n"))},dependencies:[t.JJ,t.oH,Dt.Ie,m.JD],changeDetection:0});const mn={types:[{name:"checkbox",wrappers:["form-field"],component:an}]};class jt{}jt.\u0275fac=function(d){return new(d||jt)},jt.\u0275mod=e.oAB({type:jt}),jt.\u0275inj=e.cJS({imports:[S.ez,t.UX,Dt.Wr,m.X0.forChild(mn),yt]});var bt=a(6672),ct=a(9444);class ke{}ke.\u0275fac=function(d){return new(d||ke)},ke.\u0275mod=e.oAB({type:ke}),ke.\u0275inj=e.cJS({imports:[S.ez,bt.X,gt.PV,Et.cg,ct.s]});var $e=a(7221),Pe=a(5635),Tt=a(8231);class me{}me.\u0275fac=function(d){return new(d||me)},me.\u0275mod=e.oAB({type:me}),me.\u0275inj=e.cJS({imports:[S.ez,t.UX,m.X0.forChild(),$e.F,gt.PV,s.U5,Tt.LV,Pe.o7,ct.s]});var ue=a(915),ze=a(655),Ae=a(9933),Ge=a(9300),it=a(1135),Ct=a(4004),Gt=a(6579);function Ut(){var v;let d=((v=class extends m.fS{constructor(){super()}configureBaseField(){this.field?.options?.fieldChanges?(this.onModelChange$=this.field.options.fieldChanges.pipe((0,Ge.h)(z=>z.field.id===this.field.id),(0,Gt.j)("value")),this.onValueChange$=new it.X(this.formControl.value?this.formControl.value:void 0),this.onModelChange$.pipe((0,Ae.t)(this)).subscribe(z=>{this.onValueChange$.next(z)}),this.field.options?.formState&&this.field.options.formState.fields&&(this.state=this.field.options.formState,this.autoConfigureStateValueChanges())):console.error(`${this.field.id} could not find its fieldChanges Observable, ensure configureBaseField() is called in this field's AfterViewInit hook.`)}autoConfigureStateValueChanges(){!this.field.key&&"string"==typeof this.field.key&&console.warn(`${this.field.id} cannot auto-configure state value changes, as its field key is not a string. field.key: `,this.field.key);const z=`${this.field.key}$`;this.state&&this.state.fields[z]?(this.stateValueChange$=this.state.fields[z],this.onValueChange$.pipe((0,Ct.U)(se=>null===se?void 0:se),(0,Ae.t)(this)).subscribe(se=>{this.stateValueChange$&&this.stateValueChange$.next(se)})):console.warn(`${this.field.id} could not find state field ${z} on form state. State: `,this.state)}}).\u0275fac=function(z){return new(z||v)},v.\u0275cmp=e.Xpm({type:v,selectors:[["ng-component"]],features:[e.qOj],decls:0,vars:0,template:function(z,se){},encapsulation:2}),v);return d=(0,ze.gn)([(0,Ae.c)()],d),d}var Ze=a(7579),tt=a(1365);function dt(){return function(d){class c extends d{configureEnumSelectField(se){this.selectOption$=new it.X([]),this.onTagClose$=new Ze.x,this.optionEnum$=se.optionEnum$,this.changeDetectorRef=se.changeDetectorRef,this.optionTemplate$=se.optionTemplate$?se.optionTemplate$:new it.X([]),this.optionTemplate$.pipe((0,tt.M)(this.optionEnum$),(0,Ae.t)(this)).subscribe(mt=>{this.emitSelectOptions(mt)}),this.onTagClose$.pipe((0,Ae.t)(this)).subscribe(mt=>{this.resetField()})}emitSelectOptions([se,mt]){this.selectOption$.next(mt.map((Vt,Mn)=>({label:se[Mn]||Vt,value:Vt}))),this.changeDetectorRef?this.changeDetectorRef.detectChanges():console.error(`${this.field.id}'s configureEnumTagField() requires valid ChangeDetectorRef option, none detected.`)}resetField(){this.formControl.setValue(this.props.isMultiSelect?[]:void 0)}}return c.\u0275fac=function(){let z;return function(mt){return(z||(z=e.n5z(c)))(mt||c)}}(),c.\u0275prov=e.Yz7({token:c,factory:c.\u0275fac}),c}}const _t=function Ht(v){for(var d=arguments.length,c=new Array(d>1?d-1:0),z=1;z<d;z++)c[z-1]=arguments[z];return c.reduce(function(se,mt){return mt(se)},v)},nn=function(){return[]};class At{constructor(){this.cvcSelectMode="default",this.cvcPlaceholder="Select an option",this.cvcOptions=[],this.cvcShowError=!1,this.cvcDisabled=!1,this.cvcAllowClear=!0,this.cvcCustomTemplate=null,this.cvcOnFocus=new e.vpe}}At.\u0275fac=function(d){return new(d||At)},At.\u0275cmp=e.Xpm({type:At,selectors:[["cvc-enum-select"]],inputs:{cvcFormControl:"cvcFormControl",cvcFormlyAttributes:"cvcFormlyAttributes",cvcSelectMode:"cvcSelectMode",cvcPlaceholder:"cvcPlaceholder",cvcOptions:"cvcOptions",cvcShowError:"cvcShowError",cvcDisabled:"cvcDisabled",cvcAllowClear:"cvcAllowClear",cvcModelChange:"cvcModelChange",cvcCustomTemplate:"cvcCustomTemplate"},outputs:{cvcOnFocus:"cvcOnFocus"},decls:1,vars:12,consts:[[3,"formControl","formlyAttributes","nzMode","nzPlaceHolder","nzOptions","nzCustomTemplate","nzOptionHeightPx","nzDisabled","nzAllowClear","nzFocus","ngModelChange"]],template:function(d,c){1&d&&(e.TgZ(0,"nz-select",0),e.NdJ("nzFocus",function(){return c.cvcOnFocus.next()})("ngModelChange",function(se){return c.cvcModelChange&&c.cvcModelChange(c.cvcFormlyAttributes,se)}),e.qZA()),2&d&&(e.ekj("ng-dirty",c.cvcShowError),e.Q6J("formControl",c.cvcFormControl)("formlyAttributes",c.cvcFormlyAttributes)("nzMode",c.cvcSelectMode)("nzPlaceHolder",c.cvcPlaceholder?c.cvcPlaceholder:"Select Value")("nzOptions",c.cvcOptions?c.cvcOptions:e.DdM(11,nn))("nzCustomTemplate",c.cvcCustomTemplate?c.cvcCustomTemplate:null)("nzOptionHeightPx",30)("nzDisabled",c.cvcDisabled)("nzAllowClear",c.cvcAllowClear))},dependencies:[t.JJ,t.oH,m.JD,Tt.Vq],changeDetection:0});var Qe=a(4110),H=a(8926);function I(v,d){}function Q(v,d){if(1&v){const c=e.EpF();e.TgZ(0,"span",5)(1,"nz-tag",6),e.NdJ("nzOnClose",function(se){e.CHM(c);const mt=e.oxw();return e.KtG(mt.cvcOnClose.next(se))}),e.YNc(2,I,0,0,"ng-template",7),e.qZA()()}if(2&v){const c=e.oxw(),z=e.MAs(5);e.xp6(1),e.Q6J("nzMode",c.cvcMode)("nzTooltipTitle",c.cvcTooltip)("nzChecked",c.cvcChecked),e.xp6(1),e.Q6J("ngTemplateOutlet",z)}}function _e(v,d){}function ut(v,d){if(1&v&&(e.TgZ(0,"span",8)(1,"nz-tag",9),e.YNc(2,_e,0,0,"ng-template",7),e.qZA()()),2&v){const c=e.oxw(),z=e.MAs(5);e.xp6(1),e.Q6J("nzMode","checkable")("nzChecked",c.cvcChecked),e.xp6(1),e.Q6J("ngTemplateOutlet",z)}}function Le(v,d){}function de(v,d){if(1&v){const c=e.EpF();e.TgZ(0,"span",10)(1,"nz-tag",11),e.NdJ("nzOnClose",function(se){e.CHM(c);const mt=e.oxw();return e.KtG(mt.cvcOnClose.next(se))}),e.YNc(2,Le,0,0,"ng-template",7),e.qZA()()}if(2&v){e.oxw();const c=e.MAs(5);e.xp6(1),e.Q6J("nzMode","closeable"),e.xp6(1),e.Q6J("ngTemplateOutlet",c)}}function Te(v,d){}function lt(v,d){if(1&v&&(e.TgZ(0,"span",12)(1,"nz-tag",13),e.YNc(2,Te,0,0,"ng-template",7),e.qZA()()),2&v){const c=e.oxw(),z=e.MAs(5);e.xp6(1),e.Q6J("nzMode","default")("nzTooltipTitle",c.cvcTooltip),e.xp6(1),e.Q6J("ngTemplateOutlet",z)}}const vt=function(v){return{"tag-icon-large":v}};function qt(v,d){if(1&v&&(e._UZ(0,"i",16),e.ALo(1,"evidenceEnumDisplay")),2&v){const c=e.oxw(2);e.Q6J("nzType",!0===c.cvcShowIcon?e.xi3(1,5,c.cvcAttrValue,"icon-name"):c.cvcShowIcon)("nzTwotoneColor",c.cvcIconColor)("nzTheme",c.cvcIconTheme)("ngClass",e.VKq(8,vt,!0===c.cvcZoomIcon)),e.uIk("style","color: "+c.cvcIconColor,e.Ckj)}}function zt(v,d){if(1&v&&(e._UZ(0,"span",17),e.ALo(1,"highlightTypeahead"),e.ALo(2,"evidenceEnumDisplay")),2&v){const c=e.oxw(2);e.Q6J("innerHtml",e.xi3(1,1,e.xi3(2,4,c.cvcAttrValue,"display-string"===c.cvcShowLabel?c.cvcShowLabel:"short-string"),c.cvcEmphasize),e.oJD)}}function tn(v,d){if(1&v&&(e.YNc(0,qt,2,10,"i",14),e.YNc(1,zt,3,7,"span",15)),2&v){const c=e.oxw();e.Q6J("ngIf",c.cvcAttrValue&&c.cvcShowIcon),e.xp6(1),e.Q6J("ngIf",c.cvcShowLabel)}}class Ue{constructor(){this.cvcShowLabel="display-string",this.cvcShowIcon=!0,this.cvcZoomIcon=!1,this.cvcContext="default",this.cvcMode="default",this.cvcChecked=!1,this.cvcIconColor="#797979",this.cvcLabelColor="#434343",this.cvcIconTheme="outline",this.cvcFullWidth=!1,this.cvcOnClose=new e.vpe}ngOnChanges(d){d.cvcContext&&"compact"===d.cvcContext.currentValue&&(this.cvcShowIcon=!0,this.cvcShowLabel=!1,this.cvcZoomIcon=!0)}}Ue.\u0275fac=function(d){return new(d||Ue)},Ue.\u0275cmp=e.Xpm({type:Ue,selectors:[["cvc-attribute-tag"]],hostVars:2,hostBindings:function(d,c){2&d&&e.ekj("full-width",!0===c.cvcFullWidth)},inputs:{cvcAttrValue:"cvcAttrValue",cvcShowLabel:"cvcShowLabel",cvcShowIcon:"cvcShowIcon",cvcZoomIcon:"cvcZoomIcon",cvcTooltip:"cvcTooltip",cvcContext:"cvcContext",cvcMode:"cvcMode",cvcChecked:"cvcChecked",cvcEmphasize:"cvcEmphasize",cvcIconColor:"cvcIconColor",cvcLabelColor:"cvcLabelColor",cvcIconTheme:"cvcIconTheme",cvcFullWidth:"cvcFullWidth"},outputs:{cvcOnClose:"cvcOnClose"},features:[e.TTD],decls:6,vars:4,consts:[["class","default",4,"ngIf"],["class","menu-item",4,"ngIf"],["class","select-item",4,"ngIf"],["class","compact",4,"ngIf"],["tagContent",""],[1,"default"],["nz-tooltip","",3,"nzMode","nzTooltipTitle","nzChecked","nzOnClose"],[3,"ngTemplateOutlet"],[1,"menu-item"],[3,"nzMode","nzChecked"],[1,"select-item"],[3,"nzMode","nzOnClose"],[1,"compact"],["nz-tooltip","",3,"nzMode","nzTooltipTitle"],["nz-icon","","class","tag-icon",3,"nzType","nzTwotoneColor","nzTheme","ngClass",4,"ngIf"],["class","tag-label",3,"innerHtml",4,"ngIf"],["nz-icon","",1,"tag-icon",3,"nzType","nzTwotoneColor","nzTheme","ngClass"],[1,"tag-label",3,"innerHtml"]],template:function(d,c){1&d&&(e.YNc(0,Q,3,4,"span",0),e.YNc(1,ut,3,3,"span",1),e.YNc(2,de,3,2,"span",2),e.YNc(3,lt,3,3,"span",3),e.YNc(4,tn,2,2,"ng-template",null,4,e.W1O)),2&d&&(e.Q6J("ngIf","default"===c.cvcContext),e.xp6(1),e.Q6J("ngIf","menu-item"===c.cvcContext),e.xp6(1),e.Q6J("ngIf","select-item"===c.cvcContext),e.xp6(1),e.Q6J("ngIf","compact"===c.cvcContext))},dependencies:[S.mk,S.O5,S.tP,bt.j,gt.Ls,Et.SY,Qe.Do,H.A],styles:['.full-width[_nghost-%COMP%]{width:100%}.full-width[_nghost-%COMP%]   nz-tag[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]   nz-tag[_ngcontent-%COMP%]{cursor:help;margin-right:0;margin-inline-end:4px}.default[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]{margin:0;padding:0 2px 0 0;margin-inline-end:4px;max-width:100%}.default[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon[_ngcontent-%COMP%], .default[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon-large[_ngcontent-%COMP%]{display:inline-block}.default[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon[_ngcontent-%COMP%]{padding:3px 2px 3px 4px;margin:-3px 0}.default[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon-large[_ngcontent-%COMP%]{padding:3px 2px 3px 4px;margin:-3px 0}.default[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon-large[_ngcontent-%COMP%]     svg{transform:scale(1.25)}.default[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-label[_ngcontent-%COMP%]{display:inline-block;margin:-3px 0 -4px;padding:3px 3px 3px 2px;line-height:1}.default[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]     i.ant-tag-close-icon.anticon-close{transition:none;margin-left:3px}.compact[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]{margin:0;padding:0 2px 0 0;margin-inline-end:4px;max-width:100%}.compact[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon[_ngcontent-%COMP%], .compact[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon-large[_ngcontent-%COMP%]{display:inline-block}.compact[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon[_ngcontent-%COMP%]{padding:3px 2px 3px 4px;margin:-3px 0}.compact[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon-large[_ngcontent-%COMP%]{padding:3px 2px 3px 4px;margin:-3px 0}.compact[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon-large[_ngcontent-%COMP%]     svg{transform:scale(1.25)}.compact[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-label[_ngcontent-%COMP%]{display:inline-block;margin:-3px 0 -4px;padding:3px 3px 3px 2px;line-height:1}.compact[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]     i.ant-tag-close-icon.anticon-close{transition:none;margin-left:3px}.menu-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]{background-color:#fff}.menu-item[_ngcontent-%COMP%]   nz-tag.ant-tag-checkable[_ngcontent-%COMP%]{border:1px solid #d9d9d9}.menu-item[_ngcontent-%COMP%]   nz-tag.ant-tag-checkable[_ngcontent-%COMP%]:active{background-color:#e6f7ff}.menu-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]:not(.menu-item   nz-tag.ant-tag-checkable-checked)[_ngcontent-%COMP%]:hover{color:#000000d9;border-color:#1890ff}.menu-item[_ngcontent-%COMP%]   nz-tag.ant-tag-checkable-checked[_ngcontent-%COMP%]{border:transparent;background-color:#fff;color:#000000d9}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]{margin:0;padding:0 2px 0 0;margin-inline-end:4px;max-width:100%}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon[_ngcontent-%COMP%], .select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon-large[_ngcontent-%COMP%]{display:inline-block}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon[_ngcontent-%COMP%]{padding:3px 2px 3px 4px;margin:-3px 0}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon-large[_ngcontent-%COMP%]{padding:3px 2px 3px 4px;margin:-3px 0}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon-large[_ngcontent-%COMP%]     svg{transform:scale(1.25)}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-label[_ngcontent-%COMP%]{display:inline-block;margin:-3px 0 -4px;padding:3px 3px 3px 2px;line-height:1}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]     i.ant-tag-close-icon.anticon-close{transition:none;margin-left:3px}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]{background:#f5f5f5;border:1px solid #f0f0f0}.multi-select-item[_ngcontent-%COMP%]{display:inline-block;margin-top:-3px;margin-bottom:-3px;margin-left:-4px;padding-left:4px}.multi-select-item[_ngcontent-%COMP%]   .tag-icon[_ngcontent-%COMP%]:after{content:" "}.typeahead-match[_ngcontent-%COMP%]{font-weight:700}'],changeDetection:0});const We=["optionTemplates"];function ft(v,d){if(1&v&&e._UZ(0,"cvc-attribute-tag",4),2&v){const c=e.oxw().$implicit;e.Q6J("cvcAttrValue",c)}}function Ve(v,d){1&v&&(e.ynx(0),e.YNc(1,ft,1,1,"ng-template",null,3,e.W1O),e.BQk())}function Ye(v,d){if(1&v){const c=e.EpF();e.TgZ(0,"div",5)(1,"cvc-attribute-tag",6),e.NdJ("cvcOnClose",function(se){e.CHM(c);const mt=e.oxw();return e.KtG(mt.onTagClose$.next(se))}),e.qZA()()}if(2&v){const c=d.$implicit,z=e.oxw();e.xp6(1),e.Q6J("cvcAttrValue",c.nzValue)("cvcContext",z.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",z.props.isMultiSelect?"default":"closeable")}}const Oe={Evidence:{PREDICTIVE:{SUPPORTS:"Experiment or study supports the variant's response to a drug",DOES_NOT_SUPPORT:"Experiment or study does not support, or was inconclusive of an interaction between the variant and a drug"},DIAGNOSTIC:{SUPPORTS:"Experiment or study supports the variant's impact on the diagnosis of disease or subtype",DOES_NOT_SUPPORT:"Experiment or study does not support the variant's impact on diagnosis of disease or subtype"},PROGNOSTIC:{SUPPORTS:"Experiment or study supports the variant's impact on prognostic outcome",DOES_NOT_SUPPORT:"Experiment or study does not support a prognostic association between variant and outcome"},PREDISPOSING:{SUPPORTS:"Suggests a pathogenic or a protective role for a germline variant in cancer",DOES_NOT_SUPPORT:"Supports a benign (for Predisposition) or lack of protective (for Protectiveness) role for a germline variant in cancer."},FUNCTIONAL:{SUPPORTS:"Experiment or study supports the variant causing alteration or non-alteration of the gene product function",DOES_NOT_SUPPORT:"Experiment or study does not support the variant causing alteration or non-alteration of the gene product function"},ONCOGENIC:{NA:"Not Applicable for Oncogenic Evidence Type.",SUPPORTS:"Supports an oncogenic or protective role for a somatic variant.",DOES_NOT_SUPPORT:"Supports a benign (for Oncogenicity) or lack of protective (for Protectiveness) role for a somatic variant in cancer."}},Assertion:{PREDICTIVE:{SUPPORTS:"Support the variant's response to a drug",DOES_NOT_SUPPORT:"Does not support, or was inconclusive of an interaction between the variant and a drug"},DIAGNOSTIC:{SUPPORTS:"Supports the variant's impact on the diagnosis of disease or subtype",DOES_NOT_SUPPORT:"Does not support the variant's impact on diagnosis of disease or subtype"},PROGNOSTIC:{SUPPORTS:"Supports the variant's impact on prognostic outcome",DOES_NOT_SUPPORT:"Does not support a prognostic association between variant and outcome"},PREDISPOSING:{SUPPORTS:"Suggests a pathogenic or a protective role for a germline variant in cancer",DOES_NOT_SUPPORT:"Does not support an association between the variant and disease causation"},FUNCTIONAL:{SUPPORTS:"Supports the variant causing alteration or non-alteration of the gene product function",DOES_NOT_SUPPORT:"Does not support the variant causing alteration or non-alteration of the gene product function"},ONCOGENIC:{SUPPORTS:"Supports an oncogenic or protective role for a somatic variant",DOES_NOT_SUPPORT:"Does not support an association between the variant and disease causation"}}},le=_t(Ut(),dt());class Ee extends le{constructor(d){super(),this.cdr=d,this.defaultOptions={props:{label:"Direction",labelFn:c=>`${c} Direction`,required:!0,isMultiSelect:!1,placeholder:"Select Entity Direction",placeholderFn:(c,z)=>`Select ${z?z+" ":""}${c} Direction`,requireTypePromptFn:c=>`Select ${c} Type to select its Direction`}},this.directionEnum$=new it.X([])}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEnumSelectField({optionEnum$:this.directionEnum$,optionTemplate$:this.optionTemplate$,changeDetectorRef:this.cdr})}configureStateConnections(){if(!this.state)return console.error(`${this.field.id} requires a form state to populate its options, none was found.`),void(this.placeholder$=new it.X("ERROR: Form state not found"));if(this.props.label=this.props.labelFn(this.state.entityName),this.props.tooltip=`An indicator of whether the ${this.state.entityName} statement supports or refutes the clinical significance of an event.`,this.placeholder$=new it.X(this.props.placeholderFn(this.state.entityName)),!this.state.enums.direction$)return void console.error(`${this.field.id} could not find form state's direction$ to populate select.`);this.state.enums.direction$.pipe((0,Ae.t)(this)).subscribe(c=>{this.directionEnum$.next(c)}),this.optionTemplates||console.info(`${this.field.id} could not find its optionTemplates QueryList to populate its select options, so simple text labels will be displayed.`),this.optionTemplate$=this.optionTemplates?.changes.pipe((0,Ct.U)(c=>c.map(z=>z)));const d=`${this.state.entityName.toLowerCase()}Type$`;this.state.fields[d]?(this.onEntityType$=this.state.fields[d],this.onEntityType$.pipe((0,Ae.t)(this)).subscribe(c=>{c?(this.props.disabled=!1,this.props.description=void 0,this.props.extraType=void 0,this.placeholder$.next(this.props.placeholderFn(this.state.entityName,(0,ue.E)(c)))):(this.props.disabled=!0,this.props.description=this.props.requireTypePromptFn(this.state.entityName),this.props.extraType="prompt",this.formControl.value&&this.formControl.setValue(void 0))}),this.onValueChange$.pipe((0,tt.M)(this.onEntityType$),(0,Ae.t)(this)).subscribe(([c,z])=>{!z||!c||!this.state||(this.props.extraType="description",this.props.description=Oe[this.state.entityName][z][c])})):console.error(`${this.field.id} could not find form state's ${d} to populate Direction options.`)}}Ee.\u0275fac=function(d){return new(d||Ee)(e.Y36(e.sBO))},Ee.\u0275cmp=e.Xpm({type:Ee,selectors:[["cvc-direction-select"]],viewQuery:function(d,c){if(1&d&&e.Gf(We,5,e.Rgc),2&d){let z;e.iGM(z=e.CRH())&&(c.optionTemplates=z)}},features:[e.qOj],decls:7,vars:15,consts:[[3,"cvcFormControl","cvcFormlyAttributes","cvcSelectMode","cvcPlaceholder","cvcCustomTemplate","cvcOptions","cvcShowError","cvcDisabled"],[4,"ngFor","ngForOf"],["selectedTemplate",""],["optionTemplates",""],[3,"cvcAttrValue"],[1,"ant-select-selection-item-content"],[3,"cvcAttrValue","cvcContext","cvcMode","cvcOnClose"]],template:function(d,c){if(1&d&&(e._UZ(0,"cvc-enum-select",0),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.YNc(3,Ve,3,0,"ng-container",1),e.ALo(4,"ngrxPush"),e.YNc(5,Ye,2,3,"ng-template",null,2,e.W1O)),2&d){const z=e.MAs(6);e.Q6J("cvcFormControl",c.formControl)("cvcFormlyAttributes",c.field)("cvcSelectMode",c.props.isMultiSelect?"multiple":"default")("cvcPlaceholder",e.lcZ(1,9,c.placeholder$))("cvcCustomTemplate",z)("cvcOptions",e.lcZ(2,11,c.selectOption$))("cvcShowError",c.showError)("cvcDisabled",c.props.disabled),e.xp6(3),e.Q6J("ngForOf",e.lcZ(4,13,c.directionEnum$))}},dependencies:[S.sg,At,Ue,P.fM],changeDetection:0});const ee={types:[{name:"direction-select",wrappers:["form-field"],component:Ee}]};class et{}et.\u0275fac=function(d){return new(d||et)},et.\u0275mod=e.oAB({type:et}),et.\u0275inj=e.cJS({imports:[S.ez,t.UX,P._N,P.pP,m.X0.forChild(ee),yt,me,ke]});var ye=a(2383),ot=a(3258),Jt=a(6903),on=a(9597);class En{}En.\u0275fac=function(d){return new(d||En)},En.\u0275mod=e.oAB({type:En}),En.\u0275inj=e.cJS({imports:[S.ez,t.UX,P._N,P.pP,m.X0.forChild(),on.L,gt.PV,Tt.LV,Pe.o7,s.U5,he.ZJ,ye.ic,Jt.zf,ot.x,ct.s]});var Xn=a(9676),xn=a(6616),ci=a(6960),Vn=a(6581),Ti=a(4707),ro=a(9751),Bi=a(5684),li=a(9646),Yi=a(3900),Pi=a(1884),ho=a(457),Ni=a(8382),Ki=a(9770),Ln=a(8505),jn=a(3240),ii=a(9841);function eo(...v){let d=v[0],c=v[1];if(0===d.length)return(0,li.of)(c?c([]):[]);const z=d.slice();return c&&z.push((...se)=>c(se)),ii.a.apply(null,z)}function vi(){return function(d){class c extends d{configureEntitySelectField(se){if(this.typeaheadQuery=se.typeaheadQuery,this.tagQuery=se.tagQuery,this.getTypeaheadVars=se.getTypeaheadVarsFn,this.getTypeahedResults=se.getTypeaheadResultsFn,this.getTagQueryVars=se.getTagQueryVarsFn,this.getTagQueryResults=se.getTagQueryResultsFn,this.getSelectedItemOption=se.getSelectedItemOptionFn,this.getSelectOptions=se.getSelectOptionsFn,this.typeaheadParam$=se.typeaheadParam$,this.typeaheadParamName$=se.typeaheadParamName$,this.selectOpen$=se.selectOpen$||new Ti.t,this.selectComponent=se.selectComponent,this.minSearchStrLength=se.minSearchStrLength||0,this.cdr=se.changeDetectorRef,this.onSearch$=new it.X(void 0),this.isLoading$=new ro.y,this.result$=new it.X([]),this.onPopulate$=new Ze.x,this.onTagClose$=new Ze.x,this.onOpenChange$=new Ze.x,this.onCreate$=new Ze.x,this.selectOption$=new it.X(void 0),this.response$=this.onSearch$.pipe((0,Bi.T)(1),(0,Ge.h)(jn.ep),(0,Ge.h)(mt=>0===this.minSearchStrLength||mt.length>=this.minSearchStrLength),(0,tt.M)(void 0!==this.typeaheadParam$?this.typeaheadParam$:(0,li.of)(void 0)),(0,Yi.w)(([mt,Vt])=>{const Mn=this.getTypeaheadVars(mt,Vt),Rn=qi=>(this.queryRef=this.typeaheadQuery.watch(qi),this.isLoading$=this.queryRef.valueChanges.pipe((0,Gt.j)("loading"),(0,Pi.x)()),this.queryRef.valueChanges),Vi=qi=>(0,ho.D)(this.queryRef.refetch(qi));return(0,Ni.s)(()=>void 0===this.queryRef,(0,Ki.P)(()=>Rn(Mn)),(0,Ki.P)(()=>Vi(Mn)))})),this.onOpenChange$.subscribe(mt=>{mt&&this.onSearch$.next("")}),this.response$.pipe((0,Ge.h)(mt=>void 0!==mt.data),(0,Ct.U)(mt=>this.getTypeahedResults(mt)),(0,Ae.t)(this)).subscribe(mt=>{this.result$.next(mt),0===mt.length&&this.selectOption$.next([]),this.cdr.detectChanges()}),this.optionTemplates?this.optionTemplates.changes.pipe((0,tt.M)(this.result$),(0,Ae.t)(this)).subscribe(([mt,Vt])=>{const Mn=this.getSelectOptions(Vt,mt);this.selectOption$.next(Mn),this.cdr.detectChanges()}):(console.warn(`${this.field.id} could not find reference to optionTemplates ViewChildren, options will only show entity name text.`),this.result$.pipe((0,Ae.t)(this)).subscribe(mt=>{this.selectOption$.next(mt.map(Vt=>({label:Vt.name,value:Vt.id})))})),this.onPopulate$.pipe((0,Ge.h)(jn.ep),(0,Yi.w)(mt=>eo(this.getTagQueries(mt))),(0,Ct.U)(mt=>mt.map(Vt=>this.getTagQueryResults(Vt))),(0,Ln.b)(mt=>{this.result$.next(mt)}),(0,Ae.t)(this)).subscribe(mt=>{let Vt;if(this.field.props&&this.field.props.isMultiSelect){const Mn=[];mt.forEach(Rn=>Mn.push(Rn?.id||void 0)),Vt=Mn}else Vt=mt[0].id;this.formControl.setValue(Vt),this.selectOpen$.next(!1)}),this.formControl.value){const mt=this.formControl.value;if(Object.keys(mt).length>0&&mt.constructor===Object)return void console.error(`${this.field.id} prepopulated value must be a primitive or array of primitives, value is an object:`,mt);this.onPopulate$.next(mt)}this.onTagClose$.pipe((0,Ae.t)(this)).subscribe(mt=>{this.resetField()})}getTagQueries(se){return"number"==typeof se&&(se=[se]),se.map(Vt=>this.tagQuery.fetch(this.getTagQueryVars(Vt),{fetchPolicy:"cache-first"}).pipe((0,Ge.h)(Mn=>!!Mn.data)))}resetField(){this.formControl.setValue(void 0),this.result$&&this.result$.next([])}}return c.\u0275fac=function(){let z;return function(mt){return(z||(z=e.n5z(c)))(mt||c)}}(),c.\u0275prov=e.Yz7({token:c,factory:c.\u0275fac}),c}}var ni,Di=a(5698),Sn=a(7630),gi=a(9468),yo=a(4986),$o=a(4782);function qo(v,d){1&v&&e._UZ(0,"span",5),2&v&&e.Q6J("nzType","loading")}function sr(v,d){if(1&v&&(e.ynx(0),e._uU(1),e.BQk()),2&v){const c=e.oxw(2);e.xp6(1),e.hij(" ",c.notFoundDisplay.message," ")}}const Fo=function(v,d,c){return{$implicit:v,createMsg:d,model:c}};function Pr(v,d){if(1&v&&e.GkF(0,6),2&v){const c=e.oxw(2);e.Q6J("ngTemplateOutlet",c.cvcAddEntity)("ngTemplateOutletContext",e.kEZ(2,Fo,c.notFoundDisplay.searchStr,c.notFoundDisplay.message,c.cvcAddEntityModel))}}function Ke(v,d){if(1&v&&(e.YNc(0,qo,1,1,"span",2),e.YNc(1,sr,2,1,"ng-container",3),e.YNc(2,Pr,1,6,"ng-container",4)),2&v){const c=e.oxw();e.Q6J("ngIf",c.notFoundDisplay.showSpinner),e.xp6(1),e.Q6J("ngIf",!c.notFoundDisplay.showAddForm),e.xp6(1),e.Q6J("ngIf",c.notFoundDisplay.showAddForm)}}const q=function(){return[]},Fe={search:(v,d,c)=>`Searching ${v} matching "${d}"...`,searchAll:(v,d,c)=>`Listing all ${v}...`,searchParam:(v,d,c)=>`Searching ${c} ${v} matching "${d}"...`,searchParamAll:(v,d,c)=>`Listing all ${c} ${v}...`,searchEnterQuery:(v,d,c,z)=>`Enter at least ${z} characters to search ${c} ${v}`,searchEnterQueryAll:(v,d,c,z)=>`Enter at least least ${z} characters to search ${v}`,empty:(v,d,c)=>`No ${v} found matching "${d}"`,emptyAll:(v,d,c)=>`No ${v} found.`,emptyParam:(v,d,c)=>`No ${c} ${v} found matching "${d}"`,emptyParamAll:(v,d,c)=>`No ${c} ${v} found`};let je=((ni=class{constructor(d){this.cdr=d,this.cvcEntityName={singular:"Entity",plural:"Entities"},this.cvcSelectMode="default",this.cvcLoading=!1,this.cvcOptions=void 0,this.cvcShowError=!1,this.cvcDisabled=!1,this.cvcAllowClear=!0,this.cvcBorderless=!1,this.cvcShowArrow=!1,this.cvcAutoClearSearchValue=!0,this.cvcSuffixIcon="search",this.cvcCustomTemplate=null,this.cvcDropdownExtra=null,this.cvcAddEntity=null,this.cvcMinSearchStrLength=0,this.cvcOnOpenChange=new e.vpe,this.cvcOnSearch=(new e.vpe).pipe((0,gi.p)(300,yo.z,{leading:!1,trailing:!0}),(0,$o.d)(1)),this.cvcOnModelChange=new e.vpe,this.cvcSelectComponent=new e.vpe,this.messageOptions=Fe,this.onParamName$=new it.X(void 0),this.onOption$=new it.X([]),this.onOpenChange$=new it.X(!1),this.onLoading$=new it.X(!1),this.previousIsOpen=!1}ngAfterViewInit(){this.cvcSelectMessages&&(this.messageOptions={...this.messageOptions,...this.cvcSelectMessages}),this.nzSelectComponent?(this.cvcSelectComponent.next(this.nzSelectComponent),this.notFoundDisplay={searchStr:"",showSpinner:!0,showAddForm:!1,message:`Searching ${this.cvcEntityName.plural}...`},this.onOpenChange$.pipe((0,Ae.t)(this)).subscribe(d=>{this.cvcOnOpenChange.next(d)}),(0,ii.a)([this.onOpenChange$,this.cvcOnSearch,this.onParamName$,this.onOption$,this.onLoading$.pipe((0,Pi.x)())]).pipe((0,Ct.U)(([d,c,z,se,mt])=>{const Vt=this.cvcEntityName.plural,Mn=this.cvcMinSearchStrLength,Rn=null!==this.cvcAddEntity,Vi=!1===this.previousIsOpen&&!0===d;return this.previousIsOpen=d,Vi?this.getSelectInitDisplay(Vt,Mn,z):mt&&c.length>=Mn?this.getSelectSearchingDisplay(c,Vt,Mn,z):d&&!mt&&c.length>=Mn&&0===se.length?this.getSelectEmptyDisplay(c,Vt,z,Rn):{searchStr:"",showSpinner:!1,showAddForm:!1,message:"RESETTING SELECT DISPLAY"}}),(0,Ln.b)(d=>{this.notFoundDisplay=d}),(0,Ae.t)(this)).subscribe()):console.error(`${this.cvcEntityName.singular} entity-select could not gain reference to its nzSelectComponent, aborting AfterViewInit()`)}getSelectInitDisplay(d,c,z){let se=this.messageOptions.searchAll,mt=!1;return 0==c?(mt=!0,se=void 0===z?this.messageOptions.searchAll:this.messageOptions.searchParamAll):c>0&&(mt=!1,se=void 0===z?this.messageOptions.searchEnterQueryAll:this.messageOptions.searchEnterQuery),{message:se(d,"",z,c),showSpinner:mt,showAddForm:!1,searchStr:""}}getSelectSearchingDisplay(d,c,z,se){let mt=this.messageOptions.searchAll;return mt=void 0===se?d.length>0?this.messageOptions.search:this.messageOptions.searchAll:d.length>0?this.messageOptions.searchParam:this.messageOptions.searchParamAll,{message:mt(c,d,se),showSpinner:!0,showAddForm:!1,searchStr:d}}getSelectEmptyDisplay(d,c,z,se){let mt=this.messageOptions.empty;return mt=void 0===z?d.length>0?this.messageOptions.empty:this.messageOptions.emptyAll:d.length>0?this.messageOptions.emptyParam:this.messageOptions.emptyParamAll,{message:mt(c,d,z),showSpinner:!1,showAddForm:se,searchStr:d}}ngOnChanges(d){if(d.cvcParamName&&this.onParamName$.next(d.cvcParamName.currentValue),d.cvcOptions){const c=d.cvcOptions.currentValue;void 0!==c&&this.onOption$.next(c)}if(d.cvcLoading){const c=d.cvcLoading.currentValue;void 0!==c&&this.onLoading$.next(c)}}}).\u0275fac=function(d){return new(d||ni)(e.Y36(e.sBO))},ni.\u0275cmp=e.Xpm({type:ni,selectors:[["cvc-entity-select"]],viewQuery:function(d,c){if(1&d&&e.Gf(Tt.Vq,5),2&d){let z;e.iGM(z=e.CRH())&&(c.nzSelectComponent=z.first)}},inputs:{cvcFormControl:"cvcFormControl",cvcFormlyAttributes:"cvcFormlyAttributes",cvcEntityName:"cvcEntityName",cvcSelectMessages:"cvcSelectMessages",cvcSelectMode:"cvcSelectMode",cvcPlaceholder:"cvcPlaceholder",cvcLoading:"cvcLoading",cvcOptions:"cvcOptions",cvcResults:"cvcResults",cvcShowError:"cvcShowError",cvcDisabled:"cvcDisabled",cvcAllowClear:"cvcAllowClear",cvcBorderless:"cvcBorderless",cvcShowArrow:"cvcShowArrow",cvcAutoClearSearchValue:"cvcAutoClearSearchValue",cvcSuffixIcon:"cvcSuffixIcon",cvcCustomTemplate:"cvcCustomTemplate",cvcDropdownExtra:"cvcDropdownExtra",cvcParamName:"cvcParamName",cvcAddEntity:"cvcAddEntity",cvcAddEntityModel:"cvcAddEntityModel",cvcSelectOpen:"cvcSelectOpen",cvcMinSearchStrLength:"cvcMinSearchStrLength"},outputs:{cvcOnOpenChange:"cvcOnOpenChange",cvcOnSearch:"cvcOnSearch",cvcOnModelChange:"cvcOnModelChange",cvcSelectComponent:"cvcSelectComponent"},features:[e.TTD],decls:3,vars:21,consts:[["nzShowSearch","","nzServerSearch","","nzAllowClear","",3,"nzDropdownMatchSelectWidth","formControl","formlyAttributes","nzMode","nzPlaceHolder","nzCustomTemplate","nzOptionHeightPx","nzDisabled","nzLoading","nzAllowClear","nzBorderless","nzSuffixIcon","nzShowArrow","nzAutoClearSearchValue","nzOptions","nzDropdownRender","nzNotFoundContent","nzOpen","nzOpenChange","nzOnSearch","ngModelChange"],["searchMessages",""],["nz-icon","",3,"nzType",4,"ngIf"],[4,"ngIf"],[3,"ngTemplateOutlet","ngTemplateOutletContext",4,"ngIf"],["nz-icon","",3,"nzType"],[3,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(d,c){if(1&d&&(e.TgZ(0,"nz-select",0),e.NdJ("nzOpenChange",function(se){return c.onOpenChange$.next(se)})("nzOnSearch",function(se){return c.cvcOnSearch.next(se)})("ngModelChange",function(se){return c.cvcOnModelChange.next(se)}),e.qZA(),e.YNc(1,Ke,3,3,"ng-template",null,1,e.W1O)),2&d){const z=e.MAs(2);e.ekj("ng-dirty",c.cvcShowError),e.Q6J("nzDropdownMatchSelectWidth",!1)("formControl",c.cvcFormControl)("formlyAttributes",c.cvcFormlyAttributes)("nzMode",c.cvcSelectMode)("nzPlaceHolder",c.cvcPlaceholder||"Search "+c.cvcEntityName.plural)("nzCustomTemplate",c.cvcCustomTemplate||null)("nzOptionHeightPx",30)("nzDisabled",c.cvcDisabled)("nzLoading",c.cvcLoading)("nzAllowClear",c.cvcAllowClear)("nzBorderless",c.cvcBorderless)("nzSuffixIcon",c.cvcSuffixIcon)("nzShowArrow",c.cvcShowArrow)("nzAutoClearSearchValue",c.cvcAutoClearSearchValue)("nzOptions",c.cvcOptions||e.DdM(20,q))("nzDropdownRender",c.cvcDropdownExtra||null)("nzNotFoundContent",z)("nzOpen",c.cvcSelectOpen)}},dependencies:[S.O5,S.tP,t.JJ,t.oH,m.JD,gt.Ls,Tt.Vq],changeDetection:0}),ni);je=(0,ze.gn)([(0,Ae.c)({arrayName:"stateSubscriptions"})],je);var Pn,Mt=a(8699),Rt=a(6123),Qt=a(9169),fn=a(7044),hn=a(1664),_n=a(7830);function bn(v,d){if(1&v&&e._uU(0),2&v){const c=e.oxw();e.Oqu(c.successMessage)}}function Dn(v,d){if(1&v&&(e.ynx(0),e._uU(1),e.BQk()),2&v){const c=e.oxw();e.xp6(1),e.hij(' "',c.model.name,'" ')}}const In=function(){return[0,0]};let qn=((Pn=class{set cvcSearchString(d){d&&this.searchString$.next(d)}constructor(d,c){this.query=d,this.errors=c,this.cvcOnCreate=new e.vpe,this.form=new t.nJ({}),this.model={name:""},this.formLayout="horizontal",this.options={formState:{formLayout:this.formLayout}},this.onSubmit$=new Ze.x,this.searchString$=new it.X(void 0),this.addDiseaseMutator=new Rt.U(this.errors),this.fields=[{key:"doid",type:"input",props:{label:"DOID",keydown:(z,se)=>{"Tab"===se.code&&se.stopPropagation()}}},{key:"name",props:{hidden:!0,required:!0}}],this.searchString$.pipe((0,Ae.t)(this)).subscribe(z=>{z&&(this.model.name=z)}),this.onSubmit$.pipe((0,Ae.t)(this)).subscribe(z=>{console.log("disease-quick-add form model submitted.",z),this.submitDisease(z)})}submitDisease(d){d.name?this.mutationState=this.addDiseaseMutator.mutate(this.query,this.model,{},c=>{console.log("disease-quick-add submit data callback",c),c.addDisease&&(this.successMessage=c.addDisease.new?`New Disease ${c.addDisease.disease.name} added.`:`Existing Disease ${c.addDisease.disease.name} with DOID ${c.addDisease.disease.doid} found. `,setTimeout(()=>{c&&c.addDisease&&this.cvcOnCreate.next(c.addDisease.disease.id)},1e3))}):console.error("disease-quick-add form submitDisease requires model with valid name.")}}).\u0275fac=function(d){return new(d||Pn)(e.Y36(Sn.MPi),e.Y36(Qt.Y))},Pn.\u0275cmp=e.Xpm({type:Pn,selectors:[["cvc-disease-quick-add-form"]],inputs:{cvcSearchString:"cvcSearchString"},outputs:{cvcOnCreate:"cvcOnCreate"},decls:11,vars:11,consts:[["entityType","Disease",3,"mutationState","successMessage"],["success",""],["nz-form","","nzLayout","horizontal",3,"formGroup","ngSubmit"],[3,"nzGutter"],["nzSpan","24"],[3,"form","fields","model","options","modelChange"],["nz-button","","nzType","primary","nzBlock","",3,"disabled"],[4,"ngIf"]],template:function(d,c){if(1&d&&(e.TgZ(0,"cvc-form-submission-status-display",0),e.YNc(1,bn,1,1,"ng-template",null,1,e.W1O),e.TgZ(3,"form",2),e.NdJ("ngSubmit",function(){return c.onSubmit$.next(c.model)}),e.TgZ(4,"nz-row",3)(5,"nz-col",4)(6,"formly-form",5),e.NdJ("modelChange",function(se){return c.model=se}),e.qZA()(),e.TgZ(7,"nz-col",4)(8,"button",6),e._uU(9," Add Disease\xa0 "),e.YNc(10,Dn,2,1,"ng-container",7),e.qZA()()()()()),2&d){const z=e.MAs(2);e.Q6J("mutationState",c.mutationState)("successMessage",z),e.xp6(3),e.Q6J("formGroup",c.form),e.xp6(1),e.Q6J("nzGutter",e.DdM(10,In)),e.xp6(2),e.Q6J("form",c.form)("fields",c.fields)("model",c.model)("options",c.options),e.xp6(2),e.Q6J("disabled",!c.form.valid),e.xp6(2),e.Q6J("ngIf",c.model.name)}},dependencies:[S.O5,t._Y,t.JL,t.sg,m.T7,xn.ix,fn.w,hn.dQ,O.t3,O.SK,s.Lr,_n.F],encapsulation:2,changeDetection:0}),Pn);qn=(0,ze.gn)([(0,Ae.c)()],qn);const wn=["addDisease"],Bn=["optionTemplates"];function Gn(v,d){if(1&v&&(e.ynx(0),e.TgZ(1,"strong"),e._uU(2,"DOID:"),e.qZA(),e._UZ(3,"span",9),e.ALo(4,"highlightTypeahead"),e.BQk()),2&v){const c=e.oxw(2).$implicit,z=e.oxw().ngrxLet;e.xp6(3),e.Q6J("innerHtml",e.xi3(4,1,c.doid,z),e.oJD)}}function pi(v,d){if(1&v&&(e.ynx(0),e._uU(1," \xa0 "),e.TgZ(2,"strong"),e._uU(3,"Aliases: "),e.qZA(),e.TgZ(4,"em"),e._UZ(5,"span",10),e.ALo(6,"highlightTypeahead"),e.qZA(),e.BQk()),2&v){const c=e.oxw(2).$implicit,z=e.oxw().ngrxLet;e.xp6(5),e.Q6J("innerHtml",e.xi3(6,1,c.diseaseAliases.join(", "),z),e.oJD)}}function ri(v,d){if(1&v&&(e._UZ(0,"cvc-entity-tag",6),e.TgZ(1,"span",7),e.YNc(2,Gn,5,4,"ng-container",8),e.YNc(3,pi,7,4,"ng-container",8),e._uU(4),e.qZA()),2&v){const c=e.oxw().$implicit,z=e.oxw().ngrxLet;e.Q6J("cvcDisableLink",!0)("cvcCacheId",c.__typename+":"+c.id)("cvcEmphasize",z),e.xp6(2),e.Q6J("ngIf",c.doid),e.xp6(1),e.Q6J("ngIf",c.diseaseAliases.length>0),e.xp6(1),e.hij(" ",z," ")}}function ui(v,d){1&v&&(e.ynx(0),e.YNc(1,ri,5,6,"ng-template",null,5,e.W1O),e.BQk())}function Qi(v,d){if(1&v&&(e.ynx(0),e.YNc(1,ui,3,0,"ng-container",4),e.ALo(2,"ngrxPush"),e.BQk()),2&v){const c=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,c.result$))}}function Ui(v,d){if(1&v){const c=e.EpF();e.TgZ(0,"div",11)(1,"cvc-entity-tag",12),e.NdJ("cvcOnClose",function(){const mt=e.CHM(c).$implicit,Vt=e.oxw();return e.KtG(Vt.onTagClose$.next(mt.nzValue))}),e.qZA()()}if(2&v){const c=d.$implicit,z=e.oxw();e.xp6(1),e.Q6J("cvcCacheId","Disease:"+c.nzValue)("cvcContext",z.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",z.props.isMultiSelect?"default":"closeable")}}function yi(v,d){if(1&v){const c=e.EpF();e.TgZ(0,"cvc-disease-quick-add-form",13),e.NdJ("cvcOnCreate",function(se){e.CHM(c);const mt=e.oxw();return e.KtG(mt.onPopulate$.next(se))}),e.qZA()}2&v&&e.Q6J("cvcSearchString",d.$implicit)}const fi=_t(Ut(),vi());class Li extends fi{constructor(d,c,z){super(),this.taq=d,this.tq=c,this.changeDetectorRef=z,this.defaultOptions={props:{entityName:{singular:"Disease",plural:"Diseases"},tooltip:"Cancer or cancer subtype that is a result of the described variant",isMultiSelect:!1,requireType:!0,placeholder:"Search Diseases",requireTypePromptFn:(se,mt)=>`Select an ${se} Type to select an associated Disease${mt?"(s)":""}`,addFormTitle:"Add a New Disease"}},this.placeholder$=new it.X(void 0),this.selectOpen$=new Ti.t}ngAfterViewInit(){this.configureBaseField(),this.configureEntitySelectField({typeaheadQuery:this.taq,typeaheadParam$:void 0,tagQuery:this.tq,getTypeaheadVarsFn:this.getTypeaheadVarsFn,getTypeaheadResultsFn:this.getTypeaheadResultsFn,getTagQueryVarsFn:this.getTagQueryVarsFn,getTagQueryResultsFn:this.getTagQueryResultsFn,getSelectedItemOptionFn:this.getSelectedItemOptionFn,getSelectOptionsFn:this.getSelectOptionsFn,changeDetectorRef:this.changeDetectorRef,selectOpen$:this.selectOpen$,selectComponent:this.selectComponent}),this.state&&this.state.formReady$?this.state.formReady$.pipe((0,Ge.h)(d=>d),(0,Di.q)(1),(0,Ae.t)(this)).subscribe(d=>{this.configureField()}):this.configureField(),this.addForm&&(this.field.props.addFormContent=this.addForm)}configureField(){this.placeholder$.next(this.props.placeholder),this.configureStateConnections()}configureStateConnections(){if(this.state){if(this.state.requires.requiresDisease$?this.onRequiresDisease$=this.state.requires.requiresDisease$:console.warn(`${this.field.id} field's form provides a state, but could not find requiresDisease$ subject to attach.`),this.props.requireType){const d=`${this.state.entityName.toLowerCase()}Type$`;this.state.fields[d]?this.onEntityType$=this.state.fields[d]:console.error(`${this.field.id} requireType is true, however form state does not provide Subject ${d}.`)}!this.onRequiresDisease$||!this.onEntityType$||(0,ii.a)([this.onRequiresDisease$,this.onEntityType$,this.onValueChange$]).pipe((0,Ae.t)(this)).subscribe(([d,c,z])=>{this.onStateUpdates(d,c,z)})}}onStateUpdates(d,c,z){!d&&c&&(this.props.required=!1,this.props.disabled=!0,this.props.description=`${(0,ue.E)(c)} ${this.state.entityName} does not include associated diseases`,this.props.extraType="prompt",this.cdr.markForCheck()),this.props.requireType&&!c&&(this.props.required=!1,this.props.disabled=!0,this.props.description=this.props.requireTypePromptFn(this.state.entityName,this.props.isMultiSelect),this.props.extraType="prompt"),d&&(this.props.required=!0,this.props.disabled=!1,this.props.description=void 0,this.props.extraType=void 0),(!d&&void 0!==z||this.props.requireType&&!c&&this.formControl.value)&&this.resetField()}getTypeaheadVarsFn(d){return{name:d}}getTypeaheadResultsFn(d){return d.data.diseaseTypeahead}getTagQueryVarsFn(d){return{id:d}}getTagQueryResultsFn(d){return d.data.disease}getSelectedItemOptionFn(d){return{value:d.id,label:d.name}}getSelectOptionsFn(d,c){return d.map((z,se)=>({label:c.get(se)||z.name,value:z.id}))}}Li.\u0275fac=function(d){return new(d||Li)(e.Y36(Sn.RYL),e.Y36(Sn.QVn),e.Y36(e.sBO))},Li.\u0275cmp=e.Xpm({type:Li,selectors:[["cvc-disease-select"]],viewQuery:function(d,c){if(1&d&&(e.Gf(wn,7),e.Gf(Bn,5,e.Rgc)),2&d){let z;e.iGM(z=e.CRH())&&(c.addForm=z.first),e.iGM(z=e.CRH())&&(c.optionTemplates=z)}},features:[e.qOj],decls:12,vars:26,consts:[[3,"cvcAddEntity","cvcSelectMode","cvcCustomTemplate","cvcFormControl","cvcFormlyAttributes","cvcEntityName","cvcPlaceholder","cvcResults","cvcOptions","cvcShowError","cvcDisabled","cvcLoading","cvcSelectOpen","cvcOnSearch","cvcOnOpenChange","cvcSelectComponent","cvcOnModelChange"],[4,"ngrxLet"],["selectedTemplate",""],["addDisease",""],[4,"ngFor","ngForOf"],["optionTemplates",""],[3,"cvcDisableLink","cvcCacheId","cvcEmphasize"],["nz-typography","","nzType","secondary"],[4,"ngIf"],[3,"innerHtml"],["nz-typography","","nzType","secondary",3,"innerHtml"],[1,"ant-select-selection-item-content"],[3,"cvcCacheId","cvcContext","cvcMode","cvcOnClose"],[3,"cvcSearchString","cvcOnCreate"]],template:function(d,c){if(1&d&&(e.TgZ(0,"cvc-entity-select",0),e.NdJ("cvcOnSearch",function(se){return c.onSearch$.next(se)})("cvcOnOpenChange",function(se){return c.onOpenChange$.next(se)})("cvcSelectComponent",function(se){return c.selectComponent=se})("cvcOnModelChange",function(se){return c.props.change&&c.props.change(c.field,se)}),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.ALo(3,"ngrxPush"),e.ALo(4,"ngrxPush"),e.ALo(5,"ngrxPush"),e.ALo(6,"ngrxPush"),e.qZA(),e.YNc(7,Qi,3,3,"ng-container",1),e.YNc(8,Ui,2,3,"ng-template",null,2,e.W1O),e.YNc(10,yi,1,1,"ng-template",null,3,e.W1O)),2&d){const z=e.MAs(9),se=e.MAs(11);e.Q6J("cvcAddEntity",se)("cvcSelectMode",c.props.isMultiSelect?"multiple":"default")("cvcCustomTemplate",z)("cvcFormControl",c.formControl)("cvcFormlyAttributes",c.field)("cvcEntityName",c.props.entityName)("cvcPlaceholder",e.lcZ(1,14,c.placeholder$))("cvcResults",e.lcZ(2,16,c.result$))("cvcOptions",e.lcZ(3,18,c.selectOption$))("cvcShowError",c.showError)("cvcDisabled",c.onRequiresDisease$&&!e.lcZ(4,20,c.onRequiresDisease$))("cvcLoading",e.lcZ(5,22,c.isLoading$))("cvcSelectOpen",e.lcZ(6,24,c.selectOpen$)),e.xp6(7),e.Q6J("ngrxLet",c.onSearch$)}},dependencies:[S.sg,S.O5,P.eJ,he.ZU,je,Mt.J,qn,P.fM,H.A],changeDetection:0});const ao={types:[{name:"disease-select",wrappers:["form-field"],component:Li,defaultOptions:{props:{label:"Disease"}}},{name:"disease-multi-select",wrappers:["form-field"],component:Li,defaultOptions:{props:{isMultiSelect:!0,label:"Diseases"}}}]};class so{}so.\u0275fac=function(d){return new(d||so)},so.\u0275mod=e.oAB({type:so}),so.\u0275inj=e.cJS({imports:[S.ez,t.UX,P._N,P.pP,m.X0.forChild(ao),on.L,xn.sL,Tt.LV,Vn.$6,ci.Qp,gt.PV,Pe.o7,O.Jb,Et.cg,Jt.zf,s.U5,ye.ic,he.ZJ,bt.X,Xn.g,yt,En,ct.s,ot.x]});var Ii=a(2994);class ki{}ki.\u0275fac=function(d){return new(d||ki)},ki.\u0275mod=e.oAB({type:ki}),ki.\u0275inj=e.cJS({imports:[S.ez,P._N,P.pP,he.ZJ]});var ji=a(1971),No=a(9562),Yo=a(7096),Oi=a(6675),po=a(5026),Xo=a(8372),co=a(3595),er=a(2856),pr=a(6451),ko=a(444);const Lo={isSelectCol:v=>"select"===v.type,isEntityTagCol:v=>"entity-tag"===v.type,isEnumTagCol:v=>"enum-tag"===v.type,isTextTagCol:v=>"text-tag"===v.type},Qs=v=>void 0!==v.sort,fr=v=>void 0!==v.filter,$r={description:Sn.Cp0.Description,disease:Sn.Cp0.DiseaseName,evidenceDirection:Sn.Cp0.EvidenceDirection,evidenceLevel:Sn.Cp0.EvidenceLevel,evidenceRating:Sn.Cp0.EvidenceRating,evidenceType:Sn.Cp0.EvidenceType,id:Sn.Cp0.Id,significance:Sn.Cp0.Significance,status:Sn.Cp0.Status,therapies:Sn.Cp0.TherapyName,variantOrigin:Sn.Cp0.VariantOrigin},mr={molecularProfile:"molecularProfileName",disease:"diseaseName",therapies:"therapyName",evidenceItem:"id"},As=["selected","id"];class Be{constructor(){this.sortStreams=[],this.filterStreams=[],this.config=this.configureColumnStreams([{key:"selected",label:"Select",type:"select",width:"25px",align:"center",fixedLeft:!0,checkbox:{th:{showCheckbox:!1},td:{showCheckbox:!0}}},{hidden:!0,key:"id",label:"ID",type:"default",width:"30px"},{hidden:!0,key:"status",label:"Status",type:"default",width:"50px"},{key:"id",label:"Evidence",type:"entity-tag",width:"95px",context:"evidenceItem",fixedLeft:!0,showStatus:!0,tag:{fullWidth:!0},sort:{default:"ascend"},filter:{inputType:"numeric",options:[{key:"EID",value:null}]}},{key:"molecularProfile",label:"Molecular Profile",type:"entity-tag",width:"240px",sort:{},tag:{truncateLabel:"200px"},filter:{inputType:"default",typename:"MolecularProfile",options:[{key:"Filter Therapy Names",value:null}]}},{key:"disease",type:"entity-tag",label:"Disease",width:"240px",sort:{},tag:{truncateLabel:"200px"},filter:{inputType:"default",typename:"Disease",options:[{key:"Filter Disease Names",value:null}]}},{key:"therapies",label:"Therapies",type:"entity-tag",width:"275px",sort:{},tag:{maxTags:2,truncateLabel:"150px"},filter:{inputType:"default",typename:"Therapy",options:[{key:"Filter Therapy Names",value:null}]}},{key:"therapyInteractionType",label:"INT",tooltip:"Therapy Interaction Type",type:"enum-tag",width:"40px",align:"center",emptyValueCategory:"not-applicable",sort:{},filter:{options:this.getAttributeFilters((0,ko.o6)(Sn.wkr))}},{key:"description",label:"DSC",tooltip:"Evidence Description",type:"text-tag",width:"40px",align:"center",fixedRight:!0,emptyValueCategory:"unspecified",sort:{},filter:{inputType:"default",options:[{key:"Search Descriptions",value:null}]}},{key:"evidenceType",label:"ET",tooltip:"Evidence Type",type:"enum-tag",width:"40px",align:"center",fixedRight:!0,sort:{},filter:{options:this.getAttributeFilters((0,ko.o6)(Sn.kqt))}},{key:"evidenceLevel",label:"EL",tooltip:"Evidence Level",type:"enum-tag",width:"40px",align:"center",fixedRight:!0,sort:{},filter:{options:this.getAttributeFilters((0,ko.o6)(Sn.Sx0))}},{key:"evidenceDirection",label:"ED",tooltip:"Evidence Direction",type:"enum-tag",width:"40px",align:"center",fixedRight:!0,sort:{},filter:{options:this.getAttributeFilters((0,ko.o6)(Sn.tI1))}},{key:"significance",label:"SI",tooltip:"Significance",type:"enum-tag",align:"center",width:"40px",fixedRight:!0,sort:{},filter:{options:this.getAttributeFilters((0,ko.o6)(Sn.y1h))}},{key:"evidenceRating",label:"ER",tooltip:"Evidence Rating",type:"enum-tag",width:"45px",align:"center",fixedRight:!0,tag:{showLabel:"short-string"},sort:{},filter:{options:[1,2,3,4,5].map(d=>({value:d,text:`${d} stars`}))}}])}get(){return this.config}getSortStreams(){return this.sortStreams}getFilterStreams(){return this.filterStreams}getAttributeFilters(d,c){return d.getValues().map(se=>({text:(0,ue.E)(se),value:se,byDefault:c===se}))}configureColumnStreams(d){return d.forEach(c=>{const z=c;if(Qs(z)&&(z.sort.changes=new it.X({key:z.key,value:z.sort.default??null}),this.sortStreams.push(z.sort.changes)),fr(z)){const se=z.filter.options.find(mt=>mt.byDefault)?.value;z.filter.changes=new it.X({key:z.key,value:se??null}),this.filterStreams.push(z.filter.changes)}}),d}}var V,Bt=a(6814);function Re(v,d){1&v&&e.GkF(0)}const Lt=function(v,d,c){return{$implicit:v,config:d,emphasize:c}};function sn(v,d){if(1&v&&(e.ynx(0),e.TgZ(1,"span",1),e.YNc(2,Re,1,0,"ng-container",2),e.qZA(),e.BQk()),2&v){const c=d.$implicit,z=e.oxw();e.xp6(2),e.Q6J("ngTemplateOutlet",z.cvcTagTemplate)("ngTemplateOutletContext",e.kEZ(2,Lt,c,z.config,null==z.config?null:z.config.emphasize))}}let On=((V=class{set cvcTagListConfig(d){!d||!d.tagList||!d.tag||(this.config=d,this.setEntities(d.tagList,d.tag))}constructor(){this.entities=[]}setEntities(d,c){this.entities=d&&0!==d.length&&0!==c.maxTags?d:[]}}).\u0275fac=function(d){return new(d||V)},V.\u0275cmp=e.Xpm({type:V,selectors:[["cvc-entity-tag-list"]],inputs:{cvcTagListConfig:"cvcTagListConfig",cvcTagTemplate:"cvcTagTemplate"},decls:1,vars:1,consts:[[4,"ngFor","ngForOf"],[1,"tag-container"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(d,c){1&d&&e.YNc(0,sn,3,6,"ng-container",0),2&d&&e.Q6J("ngForOf",c.entities)},dependencies:[S.sg,S.tP],styles:[".typeahead-match[_ngcontent-%COMP%]{font-weight:700}[_nghost-%COMP%]{display:inline-block;margin-bottom:-4px}.tag-container[_ngcontent-%COMP%]{display:inline-block;margin-bottom:4px}"],changeDetection:0}),V);On=(0,ze.gn)([(0,Ae.c)()],On);var ai=a(160),Kn=a(320);function Ei(v,d){if(1&v&&(e._UZ(0,"span",6),e.ALo(1,"typenameToIcon"),e.ALo(2,"entityColor")),2&v){const c=d.$implicit;e.Q6J("nzType",e.lcZ(1,2,c.__typename))("nzTwotoneColor",e.lcZ(2,4,c.__typename))}}function Un(v,d){if(1&v&&(e.ynx(0),e.YNc(1,Ei,3,6,"span",5),e.BQk()),2&v){const c=e.oxw();e.xp6(1),e.Q6J("ngForOf",c.entities)}}function to(v,d){if(1&v&&(e.TgZ(0,"span",7)(1,"strong"),e._uU(2),e.qZA()(),e._UZ(3,"span",6),e.ALo(4,"typenameToIcon"),e.ALo(5,"entityColor")),2&v){const c=e.oxw();e.xp6(2),e.Oqu(c.entities.length),e.xp6(1),e.Q6J("nzType",e.lcZ(4,3,c.entities[0].__typename))("nzTwotoneColor",e.lcZ(5,5,c.entities[0].__typename))}}const no=function(v,d,c,z,se){return{tagList:v,tag:d,showPopover:c,status:z,emphasize:se}};function gr(v,d){if(1&v&&e._UZ(0,"cvc-entity-tag-list",11),2&v){const c=e.oxw(2);e.Q6J("cvcTagTemplate",c.cvcTagTemplate)("cvcTagListConfig",e.qbA(2,no,c.entities,c.config.tag,c.config.showPopover,c.config.status,c.config.emphasize))}}function mo(v,d){1&v&&e._uU(0," Invalid config specified for entity-tag-list. ")}function Yr(v,d){if(1&v&&(e.TgZ(0,"div",8),e.YNc(1,gr,1,8,"cvc-entity-tag-list",9),e.qZA(),e.YNc(2,mo,1,0,"ng-template",null,10,e.W1O)),2&v){const c=e.MAs(3),z=e.oxw();e.xp6(1),e.Q6J("ngIf",z.config)("ngIfElse",c)}}class io{set cvcCollectionTagConfig(d){!d||!d.tagList||!d.tag||(this.setConfig(d),this.setEntities(d.tagList))}constructor(){this.cvcShowMaxIcons=5,this.cvcShowFullLabels=!0,this.entities=[]}setConfig(d){this.config=this.cvcShowFullLabels?{...d,tag:{...d.tag,truncateLabel:void 0}}:d}setEntities(d){this.entities=d&&0!==d.length?d:[]}}io.\u0275fac=function(d){return new(d||io)},io.\u0275cmp=e.Xpm({type:io,selectors:[["cvc-entity-collection-tag"]],inputs:{cvcCollectionTagConfig:"cvcCollectionTagConfig",cvcTagTemplate:"cvcTagTemplate",cvcShowMaxIcons:"cvcShowMaxIcons",cvcShowFullLabels:"cvcShowFullLabels"},decls:9,vars:3,consts:[["nz-popover","","nzPopoverPlacement","top","nzPopoverTrigger","hover",3,"nzPopoverContent"],["nz-typography","","nzType","secondary",1,"plus-sign"],[4,"ngIf","ngIfElse"],["showCount",""],["tagListPopover",""],["class","entity-icon","nz-icon","","nzTheme","twotone",3,"nzType","nzTwotoneColor",4,"ngFor","ngForOf"],["nz-icon","","nzTheme","twotone",1,"entity-icon",3,"nzType","nzTwotoneColor"],["nz-typography","","nzType","secondary",1,"entity-count"],[1,"popover-container"],[3,"cvcTagTemplate","cvcTagListConfig",4,"ngIf","ngIfElse"],["noConfig",""],[3,"cvcTagTemplate","cvcTagListConfig"]],template:function(d,c){if(1&d&&(e.TgZ(0,"nz-tag",0)(1,"span",1)(2,"strong"),e._uU(3,"+"),e.qZA()(),e.YNc(4,Un,2,1,"ng-container",2),e.YNc(5,to,6,7,"ng-template",null,3,e.W1O),e.qZA(),e.YNc(7,Yr,4,2,"ng-template",null,4,e.W1O)),2&d){const z=e.MAs(6),se=e.MAs(8);e.Q6J("nzPopoverContent",se),e.xp6(4),e.Q6J("ngIf",c.entities.length<=c.cvcShowMaxIcons)("ngIfElse",z)}},dependencies:[S.sg,S.O5,bt.j,he.ZU,Vn.lU,gt.Ls,On,ai.a,Kn.Z],styles:["[_nghost-%COMP%]{display:inline-block}.popover-container[_ngcontent-%COMP%]{max-width:300px}nz-tag[_ngcontent-%COMP%]{margin:0;padding:0;margin-inline-end:4px;cursor:help}nz-tag[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-block}nz-tag[_ngcontent-%COMP%]   .plus-sign[_ngcontent-%COMP%]{padding:3px 3px 3px 4px;margin:-3px 0;line-height:1}nz-tag[_ngcontent-%COMP%]   .entity-icon[_ngcontent-%COMP%]:first-child{padding-left:2px}nz-tag[_ngcontent-%COMP%]   .entity-icon[_ngcontent-%COMP%]{margin:-3px 1px -4px -1px;padding:3px 0;line-height:1}nz-tag[_ngcontent-%COMP%]   .entity-icon[_ngcontent-%COMP%]:last-child{padding-right:3px}nz-tag[_ngcontent-%COMP%]   .entity-count[_ngcontent-%COMP%]{margin-left:-2px;padding-right:4px}"],changeDetection:0});var di=a(3388);function vr(v,d){if(1&v&&(e.TgZ(0,"span",1),e._uU(1),e.ALo(2,"number"),e.ALo(3,"number"),e.qZA()),2&v){const c=d.ngIf;e.xp6(1),e.AsE(" ",e.lcZ(2,2,c.edgeCount)," of ",e.lcZ(3,4,c.filteredCount)," displayed\n")}}class be{ngOnInit(){this.tableCountsInfo$=this.cvcTableCountsConnection.pipe((0,Ge.h)(d=>null!=d.totalCount||null!=d.filteredCount),(0,Ct.U)(d=>{const c=d.filteredCount,z=d.totalCount,se=d.edges;return null==c&&null==z&&console.log("Need to provide either filtered count or total count in the table counts component"),{edgeCount:se.length,filteredCount:c??z}}))}}be.\u0275fac=function(d){return new(d||be)},be.\u0275cmp=e.Xpm({type:be,selectors:[["cvc-table-counts"]],inputs:{cvcTableCountsConnection:"cvcTableCountsConnection"},decls:2,vars:3,consts:[["class","table-counts","nz-typography","","nzType","secondary",4,"ngIf"],["nz-typography","","nzType","secondary",1,"table-counts"]],template:function(d,c){1&d&&(e.YNc(0,vr,4,6,"span",0),e.ALo(1,"ngrxPush")),2&d&&e.Q6J("ngIf",e.lcZ(1,1,c.tableCountsInfo$))},dependencies:[S.O5,he.ZU,S.JJ,P.fM],styles:[":[_nghost-%COMP%]{border:1px solid red}.table-counts[_ngcontent-%COMP%]{display:inline-block}"],changeDetection:0});var st,ve=a(590),ae=a(1520);let gn=((st=class{set cvcTableScrollerToIndex(d){void 0!==d&&this.scrollToIndex(d)}set cvcTableScrollerToOffset(d){void 0!==d&&this.scrollToIndex(d)}constructor(d){this.host=d,this.cvcTableScrollerOnScroll=new e.vpe,this.cvcTableScrollerOnFetch=new e.vpe,this.cvcTableScrollerTargetHeight=140,this.cvcTableScrollerFetchCount=50,this.onLoadThrottleTime=500,this.onScrollThrottleTime=250,this.onScrollDebounceTime=300}ngAfterViewInit(){if(!this.host||!this.host.cdkVirtualScrollViewport)throw new Error("cvcTableScroller directive could not obtain reference to host cdkVirtualScrollViewport.");this.viewport=this.host.cdkVirtualScrollViewport,this.scrolled$=this.viewport.elementScrolled(),this.rendered$=this.viewport.renderedRangeStream,this.rendered$.pipe((0,ve.P)()).subscribe(()=>this.viewport.checkViewportSize()),this.scrolled$.pipe((0,gi.p)(this.onScrollThrottleTime,yo.z,{leading:!0,trailing:!0}),(0,Ln.b)(d=>this.cvcTableScrollerOnScroll.next("scroll")),(0,Xo.b)(this.onScrollDebounceTime),(0,Ae.t)(this)).subscribe(d=>{this.cvcTableScrollerOnScroll.next("stop")}),this.scrolled$.pipe((0,Ct.U)(d=>this.viewport.measureScrollOffset("bottom")),(0,ae.G)(),(0,Ge.h)(([d,c])=>c<d&&c<this.cvcTableScrollerTargetHeight),(0,gi.p)(this.onLoadThrottleTime),(0,Ae.t)(this)).subscribe(d=>{this.cvcTableScrollerOnScroll.next("bottom");try{this.loadMore(this.cvcTableScrollerPageInfo)}catch(c){console.error(c)}})}loadMore(d){const c=this.cvcTableScrollerQueryRef;if(!d&&c)throw new Error("table-scroll directive requires PageInfo to use provided QueryRef.");if(d&&!c)throw new Error("table-scroll directive requires valid QueryRef when PageInfo provided.");if(d&&c){const[z,se,mt]=[this.cvcTableScrollerFetchCount,d.hasNextPage,d.endCursor];if(!z||!mt)throw new Error("table-scroll PageInfo invalid.");if(!se)return;this.cvcTableScrollerOnFetch.next({first:z,after:mt})}}scrollToIndex(d){const[c,z]=[this.host,this.host.cdkVirtualScrollViewport];if(!c||!z)throw new Error("table-scroll scrollToIndex() cannot find host viewport.");z.scrollToIndex(d)}scrollToOffset(d){const[c,z]=[this.host,this.host.cdkVirtualScrollViewport];if(!c||!z)throw new Error("table-scroll scrollToOffset() cannot find host viewport.");z.scrollToOffset(d)}}).\u0275fac=function(d){return new(d||st)(e.Y36(Oi.N8))},st.\u0275dir=e.lG2({type:st,selectors:[["","cvcTableScroller",""]],inputs:{cvcTableScrollerTargetHeight:"cvcTableScrollerTargetHeight",cvcTableScrollerQueryRef:"cvcTableScrollerQueryRef",cvcTableScrollerPageInfo:"cvcTableScrollerPageInfo",cvcTableScrollerFetchCount:"cvcTableScrollerFetchCount",cvcTableScrollerToIndex:"cvcTableScrollerToIndex",cvcTableScrollerToOffset:"cvcTableScrollerToOffset"},outputs:{cvcTableScrollerOnScroll:"cvcTableScrollerOnScroll",cvcTableScrollerOnFetch:"cvcTableScrollerOnFetch"}}),st);function $n(v,d){1&v&&e._UZ(0,"span",8)}function fo(v,d){if(1&v){const c=e.EpF();e.TgZ(0,"span",9),e.NdJ("click",function(){e.CHM(c),e.oxw(2);const se=e.MAs(3),mt=e.oxw();return se.value="",e.KtG(mt.cvcModelChange.next(null))}),e.qZA()}}function vn(v,d){if(1&v&&(e.YNc(0,$n,1,0,"span",6),e.YNc(1,fo,1,0,"span",7)),2&v){e.oxw();const c=e.MAs(3);e.Q6J("ngIf",!c.value),e.xp6(1),e.Q6J("ngIf",c.value)}}function Ci(v,d){if(1&v){const c=e.EpF();e.ynx(0),e.TgZ(1,"nz-input-group",2)(2,"input",3,4),e.NdJ("ngModelChange",function(se){e.CHM(c);const mt=e.oxw();return e.KtG(mt.cvcModelChange.next(se))}),e.qZA()(),e.YNc(4,vn,2,2,"ng-template",null,5,e.W1O),e.BQk()}if(2&v){const c=e.MAs(5),z=e.oxw();e.xp6(1),e.Q6J("nzSuffix",c),e.xp6(1),e.Q6J("placeholder",z.cvcPlaceholder)("ngModel",z.cvcModel)}}function Fr(v,d){if(1&v){const c=e.EpF();e.TgZ(0,"nz-input-number-group",10)(1,"nz-input-number",11,4),e.NdJ("ngModelChange",function(se){e.CHM(c);const mt=e.oxw();return e.KtG(mt.cvcModelChange.next(""===se?null:se))}),e.qZA()()}if(2&v){const c=e.oxw();let z;e.xp6(1),e.Q6J("nzPlaceHolder",null!==(z=c.cvcPlaceholder)&&void 0!==z?z:"")("ngModel",c.cvcModel)("nzMin",1)("nzStep",1)}}gn=(0,ze.gn)([(0,Ae.c)()],gn);class _r{constructor(){this.cvcModel=null,this.cvcModelChange=new e.vpe,this.cvcInputType="default"}}_r.\u0275fac=function(d){return new(d||_r)},_r.\u0275cmp=e.Xpm({type:_r,selectors:[["cvc-table-filter-input"]],inputs:{cvcModel:"cvcModel",cvcInputType:"cvcInputType",cvcPlaceholder:"cvcPlaceholder"},outputs:{cvcModelChange:"cvcModelChange"},decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["numericInput",""],["nzSize","small",3,"nzSuffix"],["nz-input","",3,"placeholder","ngModel","ngModelChange"],["filterInput",""],["suffixIcon",""],["nz-icon","","nzType","search","style","color: #ddd",4,"ngIf"],["nz-icon","","class","ant-input-clear-icon","nzTheme","fill","nzType","close-circle",3,"click",4,"ngIf"],["nz-icon","","nzType","search",2,"color","#ddd"],["nz-icon","","nzTheme","fill","nzType","close-circle",1,"ant-input-clear-icon",3,"click"],["nzSize","small"],[2,"width","100%",3,"nzPlaceHolder","ngModel","nzMin","nzStep","ngModelChange"]],template:function(d,c){if(1&d&&(e.YNc(0,Ci,6,3,"ng-container",0),e.YNc(1,Fr,3,4,"ng-template",null,1,e.W1O)),2&d){const z=e.MAs(2);e.Q6J("ngIf","default"===c.cvcInputType)("ngIfElse",z)}},dependencies:[S.O5,t.Fj,t.JJ,t.On,fn.w,gt.Ls,Pe.Zp,Pe.gB,Pe.ke,Yo._V,Yo.Rb]});var yr,Wi=a(3325);function jc(v,d){if(1&v){const c=e.EpF();e.TgZ(0,"li",5),e.NdJ("click",function(){const mt=e.CHM(c).$implicit,Vt=e.oxw();return e.KtG(Vt.cvcOptionChange.next({key:Vt.cvcColumnKey,value:mt.value}))}),e._UZ(1,"cvc-attribute-tag",6),e.qZA()}if(2&v){const c=d.$implicit,z=e.oxw();e.Q6J("nzSelected",(null==z.cvcOption?null:z.cvcOption.value)===c.value),e.xp6(1),e.Q6J("cvcFullWidth",!0)("cvcChecked",(null==z.cvcOption?null:z.cvcOption.value)===c.value)("cvcAttrValue",c.value)}}class tr{constructor(){this.cvcOptionChange=new e.vpe}}tr.\u0275fac=function(d){return new(d||tr)},tr.\u0275cmp=e.Xpm({type:tr,selectors:[["cvc-enum-filter-menu"]],inputs:{cvcColumnKey:"cvcColumnKey",cvcFilterOptions:"cvcFilterOptions",cvcOption:"cvcOption"},outputs:{cvcOptionChange:"cvcOptionChange"},decls:6,vars:2,consts:[["nz-menu",""],["nz-menu-item","",3,"nzSelected","click",4,"ngFor","ngForOf"],[2,"padding","3px"],["nz-button","","nzType","default","nzBlock","","nzSize","small",3,"disabled","click"],["nz-icon","","nzType","retweet","nzTheme","outline"],["nz-menu-item","",3,"nzSelected","click"],["cvcContext","menu-item",3,"cvcFullWidth","cvcChecked","cvcAttrValue"]],template:function(d,c){1&d&&(e.TgZ(0,"ul",0),e.YNc(1,jc,2,4,"li",1),e.TgZ(2,"li",2)(3,"button",3),e.NdJ("click",function(){return c.cvcOptionChange.next({key:c.cvcColumnKey,value:null})}),e._UZ(4,"span",4),e._uU(5," Reset "),e.qZA()()()),2&d&&(e.xp6(1),e.Q6J("ngForOf",c.cvcFilterOptions),e.xp6(2),e.Q6J("disabled",null===(null==c.cvcOption?null:c.cvcOption.value)))},dependencies:[S.sg,Ue,xn.ix,fn.w,hn.dQ,Wi.wO,Wi.r9,gt.Ls],styles:[".typeahead-match[_ngcontent-%COMP%]{font-weight:700}[_nghost-%COMP%]     ul li:hover{background-color:#e6f7ff}[_nghost-%COMP%]     ul li.ant-dropdown-menu-item-selected{background-color:#1890ff}[_nghost-%COMP%]     ul li.ant-dropdown-menu-item-selected:active{background-color:#096dd9}"],changeDetection:0});class Wo{transform(d){return null!=d&&Array.isArray(d)}}Wo.\u0275fac=function(d){return new(d||Wo)},Wo.\u0275pipe=e.Yjl({name:"isArray",type:Wo,pure:!0});class nr{transform(d,c){return c(d)?d:void 0}}function Ws(v,d){if(1&v&&e._UZ(0,"th",14),2&v){const c=d.ngIf;let z;e.Q6J("nzShowCheckbox",c.checkbox.th.showCheckbox||!1)("nzWidth",c.width)("nzAlign",null!==(z=c.align)&&void 0!==z?z:"left")("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1)}}function Gc(v,d){if(1&v){const c=e.EpF();e.TgZ(0,"th",15),e.NdJ("nzSortOrderChange",function(se){const Vt=e.CHM(c).ngIf;return e.KtG(Vt.sort.changes.next({key:Vt.key,value:se}))}),e.ALo(1,"ngrxPush"),e.TgZ(2,"span",16),e._uU(3),e.qZA()()}if(2&v){const c=d.ngIf;let z,se;e.Q6J("nzColumnKey",c.key)("nzAlign",null!==(z=c.align)&&void 0!==z?z:"left")("nzWidth",c.width)("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1)("nzShowSort",void 0!==c.sort)("nzSortFn",!0)("nzSortOrder",(null==(se=e.lcZ(1,10,c.sort.changes))?null:se.value)||null),e.xp6(2),e.Q6J("nzTooltipTitle",c.tooltip),e.xp6(1),e.hij(" ",c.label," ")}}function Cr(v,d){if(1&v&&(e.TgZ(0,"th",17),e._uU(1),e.qZA()),2&v){const c=d.ngIf;let z;e.Q6J("nzColumnKey",c.key)("nzAlign",null!==(z=c.align)&&void 0!==z?z:"left")("nzWidth",c.width)("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1)("nzTooltipTitle",c.tooltip),e.xp6(1),e.hij(" ",c.label," ")}}function go(v,d){if(1&v&&(e.TgZ(0,"th",17),e._uU(1),e.qZA()),2&v){const c=d.ngIf;let z;e.Q6J("nzColumnKey",c.key)("nzAlign",null!==(z=c.align)&&void 0!==z?z:"left")("nzWidth",c.width)("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1)("nzTooltipTitle",c.tooltip),e.xp6(1),e.hij(" ",c.label," ")}}function Uo(v,d){if(1&v&&(e.ynx(0),e.YNc(1,Ws,1,5,"th",11),e.ALo(2,"guardType"),e.YNc(3,Gc,4,12,"th",12),e.ALo(4,"guardType"),e.YNc(5,Cr,2,7,"th",13),e.ALo(6,"guardType"),e.YNc(7,go,2,7,"th",13),e.ALo(8,"guardType"),e.BQk()),2&v){const c=e.oxw().$implicit,z=e.oxw(2);e.xp6(1),e.Q6J("ngIf",e.xi3(2,4,c,z.colGuards.isSelectCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(4,7,c,z.colGuards.isEntityTagCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(6,10,c,z.colGuards.isEnumTagCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(8,13,c,z.colGuards.isTextTagCol))}}function tc(v,d){if(1&v&&(e.ynx(0),e.YNc(1,Uo,9,16,"ng-container",10),e.BQk()),2&v){const c=d.$implicit;e.xp6(1),e.Q6J("ngIf",!c.hidden)}}function Oo(v,d){if(1&v&&(e.TgZ(0,"th",22),e._uU(1," \xa0 "),e.qZA()),2&v){const c=d.ngIf;let z;e.Q6J("nzColumnKey",c.key)("nzAlign",null!==(z=c.align)&&void 0!==z?z:"left")("nzWidth",c.width)("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1)}}function ir(v,d){if(1&v){const c=e.EpF();e.TgZ(0,"cvc-table-filter-input",25),e.NdJ("cvcModelChange",function(se){const Vt=e.CHM(c).ngIf,Mn=e.oxw().ngIf;return e.KtG(Vt.changes.next({key:Mn.key,value:se}))}),e.qZA()}if(2&v){const c=e.oxw().ngIf;e.Q6J("cvcInputType",c.filter.inputType)("cvcPlaceholder",c.filter.options[0].key)("cvcModel",c.filter.options[0].value)}}function ns(v,d){if(1&v&&(e.TgZ(0,"th",23),e.YNc(1,ir,1,3,"cvc-table-filter-input",24),e.qZA()),2&v){const c=d.ngIf;let z;e.Q6J("nzColumnKey",c.key)("nzWidth",c.width)("nzAlign",null!==(z=c.align)&&void 0!==z?z:"left")("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1),e.xp6(1),e.Q6J("ngIf",c.filter)}}function Sa(v,d){if(1&v){const c=e.EpF();e.TgZ(0,"th",26,27),e.NdJ("nzSortOrderChange",function(se){const Vt=e.CHM(c).ngIf;return e.KtG(Vt.sort.changes.next({key:Vt.key,value:se}))}),e.ALo(2,"ngrxPush"),e.TgZ(3,"nz-filter-trigger",28,29),e.ALo(5,"ngrxPush"),e._UZ(6,"span",30),e.qZA(),e.TgZ(7,"nz-dropdown-menu",null,31)(9,"cvc-enum-filter-menu",32),e.NdJ("cvcOptionChange",function(se){const Vt=e.CHM(c).ngIf,Mn=e.MAs(4);return Vt.filter.changes.next(se),e.KtG(Mn.nzVisible=!1)}),e.ALo(10,"ngrxPush"),e.qZA()()()}if(2&v){const c=d.ngIf,z=e.MAs(8);let se,mt,Vt;e.Q6J("nzColumnKey",c.key)("nzWidth",c.width)("nzAlign",null!==(se=c.align)&&void 0!==se?se:"left")("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1)("nzShowSort",!0)("nzSortFn",!0)("nzSortOrder",(null==(mt=e.lcZ(2,15,c.sort.changes))?null:mt.value)||null)("nzShowFilter",void 0!==c.filter)("nzFilterFn",!0),e.xp6(3),e.Q6J("nzDropdownMenu",z)("nzActive",null!==(null==(Vt=e.lcZ(5,17,c.filter.changes))?null:Vt.value)),e.xp6(6),e.Q6J("cvcColumnKey",c.key)("cvcFilterOptions",c.filter.options)("cvcOption",e.lcZ(10,19,c.filter.changes))}}function zs(v,d){if(1&v){const c=e.EpF();e.TgZ(0,"th",33,27)(2,"nz-filter-trigger",28),e.ALo(3,"ngrxPush"),e._UZ(4,"span",34),e.qZA(),e.TgZ(5,"nz-dropdown-menu",null,35)(7,"div",36)(8,"div",37)(9,"cvc-table-filter-input",38),e.NdJ("cvcModelChange",function(se){const Vt=e.CHM(c).ngIf;return e.KtG(Vt.filter.changes.next({key:Vt.key,value:se}))}),e.qZA()()()()()}if(2&v){const c=d.ngIf,z=e.MAs(6);let se,mt;e.Q6J("nzColumnKey",c.key)("nzWidth",c.width)("nzAlign",null!==(se=c.align)&&void 0!==se?se:"left")("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1)("nzFilterFn",!0),e.xp6(2),e.Q6J("nzDropdownMenu",z)("nzActive",null!==(null==(mt=e.lcZ(3,10,c.filter.changes))?null:mt.value)),e.xp6(7),e.Q6J("cvcPlaceholder",c.filter.options[0].key)("cvcModel",c.filter.options[0].value)}}function Ts(v,d){if(1&v&&(e.ynx(0),e.YNc(1,Oo,2,5,"th",18),e.ALo(2,"guardType"),e.YNc(3,ns,2,6,"th",19),e.ALo(4,"guardType"),e.YNc(5,Sa,11,21,"th",20),e.ALo(6,"guardType"),e.YNc(7,zs,10,12,"th",21),e.ALo(8,"guardType"),e.BQk()),2&v){const c=e.oxw().$implicit,z=e.oxw(2);e.xp6(1),e.Q6J("ngIf",e.xi3(2,4,c,z.colGuards.isSelectCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(4,7,c,z.colGuards.isEntityTagCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(6,10,c,z.colGuards.isEnumTagCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(8,13,c,z.colGuards.isTextTagCol))}}function Ro(v,d){if(1&v&&(e.ynx(0),e.YNc(1,Ts,9,16,"ng-container",10),e.BQk()),2&v){const c=d.$implicit;e.xp6(1),e.Q6J("ngIf",!c.hidden)}}function Zs(v,d){if(1&v&&(e.TgZ(0,"thead")(1,"tr",7),e.YNc(2,tc,2,1,"ng-container",8),e.qZA(),e.TgZ(3,"tr",9),e.YNc(4,Ro,2,1,"ng-container",8),e.qZA()()),2&v){const c=d.ngrxLet;e.xp6(2),e.Q6J("ngForOf",c),e.xp6(2),e.Q6J("ngForOf",c)}}function cr(v,d){if(1&v){const c=e.EpF();e.TgZ(0,"td",43),e.NdJ("nzCheckedChange",function(se){e.CHM(c);const mt=e.oxw(3).$implicit,Vt=e.oxw(2);return e.KtG(Vt.onRowSelected$.next({id:mt.id,selected:se}))}),e.qZA()}if(2&v){const c=d.ngIf,z=e.oxw(3).$implicit;let se;e.Q6J("nzChecked",z.selected)("nzAlign",null!==(se=c.align)&&void 0!==se?se:"left")("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1)}}function Js(v,d){1&v&&e.GkF(0)}nr.\u0275fac=function(d){return new(d||nr)},nr.\u0275pipe=e.Yjl({name:"guardType",type:nr,pure:!0});const zr=function(v,d,c){return{$implicit:v,config:d,emphasize:c}};function Fs(v,d){if(1&v&&(e.ynx(0),e.YNc(1,Js,1,0,"ng-container",49),e.ALo(2,"isArray"),e.ALo(3,"ngrxPush"),e.BQk()),2&v){const c=e.oxw().ngIf,z=e.oxw().ngIf,se=e.MAs(3),mt=e.MAs(5),Vt=e.oxw(3).$implicit;let Mn;e.xp6(1),e.Q6J("ngTemplateOutlet",e.lcZ(2,2,Vt[c])?se:mt)("ngTemplateOutletContext",e.kEZ(6,zr,Vt[c],z,null==(Mn=e.lcZ(3,4,z.filter.changes))?null:Mn.value))}}function is(v,d){if(1&v&&(e.ynx(0),e.YNc(1,Fs,4,10,"ng-container",48),e.BQk()),2&v){const c=d.ngIf;e.oxw();const z=e.MAs(7),se=e.oxw(3).$implicit;e.xp6(1),e.Q6J("ngIf",se[c])("ngIfElse",z)}}const nc=function(v,d,c,z,se){return{tagList:v,tag:d,showPopover:c,status:z,emphasize:se}};function or(v,d){if(1&v&&(e.ynx(0),e._UZ(1,"cvc-entity-collection-tag",51),e.BQk()),2&v){const c=e.oxw(2),z=c.config,se=c.$implicit,mt=c.emphasize;e.oxw();const Vt=e.MAs(5),Mn=e.oxw(5);e.xp6(1),e.Q6J("cvcCollectionTagConfig",e.qbA(3,nc,se.slice(z.tag.maxTags,se.length),z.tag,!Mn.isScrolling,!0===z.showStatus?se.status:void 0,mt))("cvcTagTemplate",Vt)("cvcShowFullLabels",!0)}}function Qc(v,d){if(1&v&&(e.ynx(0),e._UZ(1,"cvc-entity-tag-list",50),e.YNc(2,or,2,9,"ng-container",10),e.BQk()),2&v){const c=e.oxw(),z=c.config,se=c.$implicit,mt=c.emphasize;e.oxw();const Vt=e.MAs(5),Mn=e.oxw(5);e.xp6(1),e.Q6J("cvcTagTemplate",Vt)("cvcTagListConfig",e.qbA(3,nc,se.slice(0,z.tag.maxTags),z.tag,!Mn.isScrolling,!0===z.showStatus?se.status:void 0,mt)),e.xp6(1),e.Q6J("ngIf",se.slice(z.tag.maxTags,se.length).length>0)}}function os(v,d){if(1&v&&e.YNc(0,Qc,3,9,"ng-container",48),2&v){const c=d.$implicit;e.oxw();const z=e.MAs(7);e.Q6J("ngIf",c.length>0)("ngIfElse",z)}}function Tr(v,d){if(1&v&&e._UZ(0,"cvc-entity-tag",52),2&v){const c=d.$implicit,z=d.config,se=d.emphasize,mt=e.oxw(6);let Vt;e.Q6J("cvcTruncateLabel",null==z.tag?null:z.tag.truncateLabel)("cvcLinkableEntity",c)("cvcEmphasize",se)("cvcShowPopover",!mt.isScrolling)("cvcStatus",!0===z.showStatus?c.status:void 0)("cvcFullWidth",null!==(Vt=null==z.tag?null:z.tag.fullWidth)&&void 0!==Vt&&Vt)}}function lr(v,d){if(1&v&&e._UZ(0,"cvc-empty-value",53),2&v){const c=e.oxw().ngIf;e.Q6J("cvcEmptyCategory",c.emptyValueCategory||"not-applicable")}}function Ns(v,d){if(1&v&&(e.TgZ(0,"td",44),e.YNc(1,is,2,2,"ng-container",10),e.YNc(2,os,1,2,"ng-template",null,45,e.W1O),e.YNc(4,Tr,1,6,"ng-template",null,46,e.W1O),e.YNc(6,lr,1,1,"ng-template",null,47,e.W1O),e.qZA()),2&v){const c=d.ngIf;let z;e.Q6J("nzAlign",null!==(z=c.align)&&void 0!==z?z:"left")("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1),e.xp6(1),e.Q6J("ngIf",c.context||c.key)}}function zo(v,d){if(1&v&&(e._UZ(0,"cvc-attribute-tag",56),e.ALo(1,"evidenceEnumDisplay")),2&v){const c=e.oxw().ngIf,z=e.oxw(3).$implicit,se=e.oxw(2);e.Q6J("cvcFullWidth",!0)("cvcAttrValue",z[c.key])("cvcTooltip",e.lcZ(1,3,!se.isScrolling&&z[c.key]))}}function rs(v,d){if(1&v&&e._UZ(0,"cvc-empty-value",57),2&v){const c=e.oxw().ngIf;e.Q6J("cvcEmptyCategory",c.emptyValueCategory||"unspecified")}}function Zi(v,d){if(1&v&&(e.TgZ(0,"td",44),e.YNc(1,zo,2,5,"cvc-attribute-tag",54),e.YNc(2,rs,1,1,"ng-template",null,55,e.W1O),e.qZA()),2&v){const c=d.ngIf,z=e.MAs(3),se=e.oxw(3).$implicit;let mt;e.Q6J("nzAlign",null!==(mt=c.align)&&void 0!==mt?mt:"left")("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1),e.xp6(1),e.Q6J("ngIf",se[c.key])("ngIfElse",z)}}function Ks(v,d){if(1&v&&(e.TgZ(0,"nz-tag",60),e._UZ(1,"span",61),e.qZA()),2&v){const c=e.oxw().ngIf,z=e.oxw(3).$implicit;e.Q6J("nzTooltipTitle",z[c.key])}}function ss(v,d){if(1&v&&e._UZ(0,"cvc-empty-value",53),2&v){const c=e.oxw().ngIf;e.Q6J("cvcEmptyCategory",c.emptyValueCategory||"unspecified")}}function eu(v,d){if(1&v&&(e.TgZ(0,"td",44),e.YNc(1,Ks,2,1,"nz-tag",58),e.YNc(2,ss,1,1,"ng-template",null,59,e.W1O),e.qZA()),2&v){const c=d.ngIf,z=e.MAs(3),se=e.oxw(3).$implicit;let mt;e.Q6J("nzAlign",null!==(mt=c.align)&&void 0!==mt?mt:"left")("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1),e.xp6(1),e.Q6J("ngIf",se[c.key])("ngIfElse",z)}}function Ur(v,d){if(1&v&&(e.ynx(0),e.YNc(1,cr,1,4,"td",41),e.ALo(2,"guardType"),e.YNc(3,Ns,8,4,"td",42),e.ALo(4,"guardType"),e.YNc(5,Zi,4,5,"td",42),e.ALo(6,"guardType"),e.YNc(7,eu,4,5,"td",42),e.ALo(8,"guardType"),e.BQk()),2&v){const c=e.oxw().$implicit,z=e.oxw(3);e.xp6(1),e.Q6J("ngIf",e.xi3(2,4,c,z.colGuards.isSelectCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(4,7,c,z.colGuards.isEntityTagCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(6,10,c,z.colGuards.isEnumTagCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(8,13,c,z.colGuards.isTextTagCol))}}function tu(v,d){if(1&v&&(e.ynx(0),e.YNc(1,Ur,9,16,"ng-container",10),e.BQk()),2&v){const c=d.$implicit;e.xp6(1),e.Q6J("ngIf",!c.hidden)}}function J(v,d){if(1&v&&(e.TgZ(0,"tr",40),e.YNc(1,tu,2,1,"ng-container",8),e.qZA()),2&v){const c=e.oxw().ngrxLet;e.xp6(1),e.Q6J("ngForOf",c)}}function He(v,d){1&v&&(e.TgZ(0,"tbody"),e.YNc(1,J,2,1,"ng-template",39),e.qZA())}function ne(v,d){1&v&&e._UZ(0,"span",69)}function qe(v,d){if(1&v){const c=e.EpF();e.TgZ(0,"span",70),e.NdJ("click",function(){e.CHM(c),e.oxw(2);const se=e.MAs(3),mt=e.oxw().filter;return se.value="",e.KtG(mt.changes.next({key:mt.key,value:null}))}),e.qZA()}}function Ft(v,d){if(1&v&&(e.YNc(0,ne,1,0,"span",67),e.YNc(1,qe,1,0,"span",68)),2&v){e.oxw();const c=e.MAs(3);e.Q6J("ngIf",!c.value),e.xp6(1),e.Q6J("ngIf",c.value)}}function pn(v,d){if(1&v){const c=e.EpF();e.ynx(0),e.TgZ(1,"nz-input-group",63)(2,"input",64,65),e.NdJ("nzFilterChange",function(se){e.CHM(c);const mt=e.oxw().filter;return e.KtG(mt.changes.next({key:mt.key,value:se}))}),e.qZA()(),e.YNc(4,Ft,2,2,"ng-template",null,66,e.W1O),e.BQk()}if(2&v){const c=e.MAs(5),z=e.oxw().filter;e.xp6(1),e.Q6J("nzSuffix",c),e.xp6(1),e.Q6J("placeholder",z.placeholder)("ngModel",z.defaultValue)}}function yn(v,d){if(1&v){const c=e.EpF();e.TgZ(0,"nz-input-number-group",71)(1,"nz-input-number",72,65),e.NdJ("ngModelChange",function(se){e.CHM(c);const mt=e.oxw().filter;return e.KtG(mt.changes.next({key:mt.key,value:se}))}),e.qZA()()}if(2&v){const c=e.oxw().filter;e.xp6(1),e.Q6J("nzPlaceHolder",c.placeholder)("ngModel",c.defaultValue)("nzMin",1)("nzStep",1)}}function Qn(v,d){if(1&v&&(e.YNc(0,pn,6,3,"ng-container",48),e.YNc(1,yn,3,4,"ng-template",null,62,e.W1O)),2&v){const c=d.filter,z=e.MAs(2);e.Q6J("ngIf",void 0===c.inputType||"default"===c.inputType)("ngIfElse",z)}}const wi=function(){return[6,6]};function Gi(v,d){1&v&&(e.TgZ(0,"nz-row",73)(1,"nz-col")(2,"span"),e._uU(3,"Use checkboxes to select or deselect EIDs"),e.qZA()()()),2&v&&e.Q6J("nzGutter",e.DdM(1,wi))}function Ri(v,d){1&v&&(e.TgZ(0,"nz-tag",84),e._UZ(1,"i",85),e.TgZ(2,"span"),e._uU(3,"Loading\u2026"),e.qZA()())}const zi=function(v){return{$implicit:v}};function oo(v,d){if(1&v&&(e.TgZ(0,"nz-tag",88),e._UZ(1,"span",89),e.TgZ(2,"span",90),e._uU(3),e.qZA()()),2&v){e.oxw();const c=e.MAs(4),z=e.oxw().ngrxLet;e.xp6(2),e.Q6J("nzTooltipTitle",c)("nzTooltipTitleContext",e.VKq(3,zi,z.query)),e.xp6(1),e.hij(" Query Error",z.query.length>1?"s":""," ")}}function Xi(v,d){if(1&v&&(e.TgZ(0,"nz-tag",88)(1,"span",90)(2,"span",91)(3,"strong"),e._uU(4),e.qZA()()()()),2&v){e.oxw();const c=e.MAs(4),z=e.oxw().ngrxLet;e.xp6(1),e.Q6J("nzTooltipTitle",c)("nzTooltipTitleContext",e.VKq(3,zi,z.network)),e.xp6(3),e.hij(" Network Error",z.query.length>1?"s":""," ")}}function lo(v,d){if(1&v&&(e.TgZ(0,"div"),e._uU(1),e.qZA()),2&v){const c=d.$implicit;e.xp6(1),e.hij(" ",c.message," ")}}function Zo(v,d){1&v&&e.YNc(0,lo,2,1,"div",8),2&v&&e.Q6J("ngForOf",d.$implicit)}function To(v,d){if(1&v&&(e.ynx(0),e.YNc(1,oo,4,5,"nz-tag",86),e.YNc(2,Xi,5,5,"nz-tag",86),e.YNc(3,Zo,1,1,"ng-template",null,87,e.W1O),e.BQk()),2&v){const c=e.oxw().ngrxLet;e.xp6(1),e.Q6J("ngIf",c.query),e.xp6(1),e.Q6J("ngIf",c.network)}}function Nr(v,d){if(1&v&&(e.ynx(0),e.YNc(1,To,5,2,"ng-container",10),e.BQk()),2&v){const c=d.ngrxLet;e.xp6(1),e.Q6J("ngIf",c)}}function Vo(v,d){if(1&v){const c=e.EpF();e.TgZ(0,"div",92)(1,"nz-checkbox-group",93),e.NdJ("ngModelChange",function(se){e.CHM(c);const mt=e.oxw(2);return e.KtG(mt.onPreferenceChange$.next(se))}),e.ALo(2,"ngrxPush"),e.qZA()()}if(2&v){const c=e.oxw(2);e.xp6(1),e.Q6J("ngModel",e.lcZ(2,1,c.setPreference$))}}function as(v,d){if(1&v){const c=e.EpF();e.TgZ(0,"nz-row",73)(1,"nz-col",74),e.YNc(2,Ri,4,0,"nz-tag",75),e.ALo(3,"ngrxPush"),e.ALo(4,"ngrxPush"),e._UZ(5,"cvc-no-more-rows",76),e.ALo(6,"ngrxPush"),e.qZA(),e.TgZ(7,"nz-col",74),e.YNc(8,Nr,2,1,"ng-container",3),e.qZA(),e.TgZ(9,"nz-col",74),e._UZ(10,"cvc-table-counts",77),e.qZA(),e.TgZ(11,"nz-col",78)(12,"nz-button-group")(13,"button",79),e.NdJ("click",function(){e.CHM(c);const se=e.oxw();return e.KtG(se.onResetFilter$.next())}),e._UZ(14,"span",80),e.qZA(),e.TgZ(15,"button",81),e._UZ(16,"span",82),e.qZA()(),e.YNc(17,Vo,3,3,"ng-template",null,83,e.W1O),e.qZA()()}if(2&v){const c=e.MAs(18),z=e.oxw();e.Q6J("nzGutter",8),e.xp6(2),e.Q6J("ngIf",e.lcZ(3,7,z.loading$)&&e.lcZ(4,9,z.isFetchMore$)),e.xp6(3),e.Q6J("cvcShowTag",e.lcZ(6,11,z.noMoreRows$)),e.xp6(3),e.Q6J("ngrxLet",z.queryError$),e.xp6(2),e.Q6J("cvcTableCountsConnection",z.connection$),e.xp6(5),e.Q6J("nzPopoverContent",c)("nzPopoverTrigger","click")}}const wo=function(){return[]},ks=function(){return{x:"800px",y:"200px"}};let cs=((yr=class{constructor(d,c,z){this.queryGQL=d,this.apollo=c,this.cdr=z,this.cvcSelectedIdsChange=new e.vpe,this.isScrolling=!1,this.colGuards=Lo,this.onFetchMore$=new Ze.x,this.onPreferenceChange$=new it.X([]),this.onResetFilter$=new Ze.x,this.onRowSelected$=new Ze.x,this.onScroll$=new it.X("stop"),this.onSetSelectedRow$=new it.X(new Set),this.queryError$=new Ze.x,this.queryRequest$=new Ze.x,this.queryResult$=new Ti.t(1),this.isFetchMore$=new it.X(!1),this.noMoreRows$=new it.X(!1),this.scrollToIndex$=new Ze.x,this.tableConfig=new Be;const se=(0,ii.a)(this.tableConfig.getFilterStreams()),mt=(0,ii.a)(this.tableConfig.getSortStreams()).pipe((0,Ge.h)(Vt=>Vt.filter(Mn=>null!==Mn.value).length<=1));this.refetch$=(0,ii.a)([mt,se]).pipe((0,Ct.U)(([Vt,Mn])=>({query:"refetch",sort:Vt,filter:Mn}))),this.fetchMore$=this.onFetchMore$.pipe((0,Ct.U)(Vt=>({query:"fetchMore",fetchMore:{...Vt}}))),(0,pr.T)(this.refetch$,this.fetchMore$).pipe((0,Xo.b)(50),(0,Ae.t)(this)).subscribe(Vt=>{const Mn=this.getQueryVars(Vt);this.queryRef?(this.queryError$.next({}),"refetch"===Vt.query?(this.isFetchMore$.next(!1),this.queryRef.refetch(Mn).then(Rn=>{(Rn.error||Rn.errors)&&this.queryError$.next(this.getRequestErrors(Rn))}).then(()=>{this.scrollToIndex$.next(0)})):(this.isFetchMore$.next(!0),this.queryRef.fetchMore({variables:Mn}).then(Rn=>{(Rn.error||Rn.errors)&&this.queryError$.next(this.getRequestErrors(Rn))}))):(this.isFetchMore$.next(!1),this.queryError$.next({}),this.queryRef=this.queryGQL.watch(Mn),this.queryRef.valueChanges.pipe((0,Ae.t)(this)).subscribe(Rn=>{this.queryResult$.next(Rn),(Rn.error||Rn.errors)&&this.queryError$.next(this.getRequestErrors(Rn))}))}),this.loading$=this.queryResult$.pipe((0,Gt.j)("loading"),(0,Pi.x)()),this.connection$=this.queryResult$.pipe((0,Gt.j)("data","evidenceItems"),(0,Ge.h)(jn.ep)),this.pageInfo$=this.connection$.pipe((0,Gt.j)("pageInfo"),(0,Ge.h)(jn.ep)),this.row$=(0,ii.a)([this.connection$.pipe((0,Gt.j)("edges"),(0,Ge.h)(jn.ep),(0,Ct.U)(Vt=>Vt.map(Mn=>Mn.node))),this.onSetSelectedRow$]).pipe((0,Ct.U)(([Vt,Mn])=>Vt.map(Rn=>{if(Rn)return{...Rn,evidenceItem:{__typename:"EvidenceItem",id:Rn.id,name:Rn.name,link:Rn.link,status:Rn.status},selected:Mn.has(Rn.id)}}))),this.col$=new it.X(this.tableConfig.get()),this.setPreference$=this.col$.pipe((0,Ct.U)(Vt=>this.getColPrefsFromTableConfig(Vt))),this.onPreferenceChange$.pipe((0,tt.M)(this.col$),(0,Ct.U)(([Vt,Mn])=>this.getTableConfigFromColPrefs(Vt,Mn)),(0,Ae.t)(this)).subscribe(Vt=>{this.col$.next(Vt)}),this.onSetTableFilter$=new it.X([]),this.onSetTableFilter$.pipe((0,Ae.t)(this)).subscribe(Vt=>{const Mn=this.col$.getValue();Vt.forEach(Rn=>{const Vi=Mn.find(qi=>qi.key===Rn.key);if(void 0!==Vi.filter.inputType){const qi=Vi.filter.options[0];if(null===Rn.value)return Vi.filter.options=[{...qi,value:null}],void Vi.filter.changes.next(Rn);if(Array.isArray(Rn.value)&&0===Rn.value.length)return Vi.filter.options=[{...qi,value:null}],void Vi.filter.changes.next({...Rn,value:null});let Co;Array.isArray(Rn.value)?Rn.value.length>0&&(Co=Rn.value[0]):Co=Rn.value;const W1=Vi.filter.typename;if(!W1||!Co)return void console.error(`evidence-manager requires column config '${Vi.key}' provide a typename for cvcTablePrefs Input to set its filter`);const qu=this.getEntityName(W1,Co);if(!qu)return;Vi.filter.options=[{...qi,value:qu}],Vi.filter.changes.next({...Rn,value:qu})}else fr(Vi)&&Vi.filter.changes.next(Rn)})}),this.onSetTablePref$=new it.X([]),this.onSetTablePref$.pipe((0,tt.M)(this.setPreference$),(0,Ct.U)(([Vt,Mn])=>{const Rn=[];return Vt.forEach(Vi=>{let qi=Mn.find(Co=>Co.value===Vi.value);qi?Rn.push({...qi,...Vi}):console.warn(`evidence-manager onSetTablePref$ received updated preferences for column '${Vi.value}', but a column with that key could not be found.`)}),Rn}),(0,Ae.t)(this)).subscribe(Vt=>{this.onPreferenceChange$.next(Vt)}),this.onRowSelected$.pipe((0,tt.M)(this.onSetSelectedRow$),(0,Ae.t)(this)).subscribe(([Vt,Mn])=>{Vt.selected?Mn.add(Vt.id):Mn.delete(Vt.id),this.onSetSelectedRow$.next(Mn),this.cvcSelectedIdsChange.next(Array.from(Mn))}),this.onScroll$.pipe((0,Ct.U)(Vt=>"stop"!==Vt),(0,Pi.x)(),(0,Ae.t)(this)).subscribe(Vt=>{this.isScrolling=Vt,this.cdr.detectChanges()}),this.onScroll$.pipe((0,Ge.h)(Vt=>"bottom"===Vt),(0,tt.M)(this.pageInfo$),(0,Ct.U)(([Vt,Mn])=>Mn),(0,Ae.t)(this)).subscribe(Vt=>{Vt.hasNextPage||(this.noMoreRows$.next(!0),this.cdr.detectChanges(),setInterval(()=>this.noMoreRows$.next(!1)))})}ngAfterViewInit(){this.onResetFilter$.pipe((0,tt.M)((0,li.of)(this.tableConfig.get())),(0,Ae.t)(this)).subscribe(([d,c])=>{const z=[];c.forEach(se=>{if(Qs(se)&&se.sort.changes&&se.sort.changes.next({key:se.key,value:se.sort.default??null}),fr(se)){const mt=se.filter.options.find(Vt=>1==Vt.byDefault)?.value;se.filter.changes&&se.filter.changes.next({key:se.key,value:mt||null})}z.push(se)}),this.col$.next(z)})}getQueryVars(d){const c=this.getQueryFilterParams(d);return{...this.getQuerySortParams(d),...c,...d.fetchMore}}getQuerySortParams(d){if(!d.sort)return;const z=d.sort.find(mt=>null!==mt.value);return z?{sortBy:{column:this.getSortColumnFromColKey(z.key),direction:"ascend"===z.value?Sn.SrV.Asc:Sn.SrV.Desc||void 0}}:void 0}getQueryFilterParams(d){let c={};return d.filter&&d.filter.forEach(z=>{c[mr[z.key]||z.key]=null===z.value||""===z.value?void 0:z.value}),c}getRequestErrors(d){return{query:d.errors,network:d.error}}getTableConfigFromColPrefs(d,c){return c.forEach(z=>{if(As.find(mt=>mt===z.key))return;const se=d.find(mt=>mt.value===z.key);se&&(z.hidden=!se?.checked)}),[...c]}getColPrefsFromTableConfig(d){let c=[];return d.forEach(z=>{As.find(se=>se===z.key)||c.push({label:z.tooltip||z.label,value:z.key,checked:!z.hidden})}),c}getSortColumnFromColKey(d){return $r[d]}getEntityName(d,c){const z={id:`${d}:${c}`,fragment:er.Ps`
                fragment Linkable${d}Entity on ${d} {
                  id
                  name
                  link
                }`},se=this.apollo.client.readFragment(z);if(se)return se.name;console.error(`evidence-manager onSetTableFilter$ could not find cached entity ${d}:${c} to populate input filter`)}trackByIndex(d,c){return c?.id}ngOnChanges(d){if(d.cvcTableSettings){const c=d.cvcTableSettings.currentValue;void 0!==c&&this.onSetTableFilter$.next(c.filters)}if(d.cvcSelectedIds){const c=d.cvcSelectedIds.currentValue,z=new Set;void 0!==c&&c.forEach(se=>z.add(se)),this.onSetSelectedRow$.next(z)}}}).\u0275fac=function(d){return new(d||yr)(e.Y36(Sn.EH_),e.Y36(co._M),e.Y36(e.sBO))},yr.\u0275cmp=e.Xpm({type:yr,selectors:[["cvc-evidence-manager"]],inputs:{cvcTableSettings:"cvcTableSettings",cvcSelectedIds:"cvcSelectedIds"},outputs:{cvcSelectedIdsChange:"cvcSelectedIdsChange"},features:[e.TTD],decls:16,vars:27,consts:[["nzSize","small",3,"nzTitle","nzExtra"],["cvcTableScroller","",3,"nzData","cvcTableScrollerQueryRef","cvcTableScrollerPageInfo","cvcTableScrollerToIndex","nzScroll","nzVirtualForTrackBy","nzVirtualItemSize","nzSize","nzFrontPagination","nzShowPagination","nzLoading","cvcTableScrollerOnScroll","cvcTableScrollerOnFetch"],["virtualTable",""],[4,"ngrxLet"],["columnFilterInput",""],["cardTitle",""],["extraTemplate",""],[1,"col-header-row"],[4,"ngFor","ngForOf"],[1,"filter-row"],[4,"ngIf"],[3,"nzShowCheckbox","nzWidth","nzAlign","nzLeft","nzRight",4,"ngIf"],[3,"nzColumnKey","nzAlign","nzWidth","nzLeft","nzRight","nzShowSort","nzSortFn","nzSortOrder","nzSortOrderChange",4,"ngIf"],["nz-tooltip","",3,"nzColumnKey","nzAlign","nzWidth","nzLeft","nzRight","nzTooltipTitle",4,"ngIf"],[3,"nzShowCheckbox","nzWidth","nzAlign","nzLeft","nzRight"],[3,"nzColumnKey","nzAlign","nzWidth","nzLeft","nzRight","nzShowSort","nzSortFn","nzSortOrder","nzSortOrderChange"],["nz-tooltip","",1,"col-header-label",3,"nzTooltipTitle"],["nz-tooltip","",3,"nzColumnKey","nzAlign","nzWidth","nzLeft","nzRight","nzTooltipTitle"],[3,"nzColumnKey","nzAlign","nzWidth","nzLeft","nzRight",4,"ngIf"],[3,"nzColumnKey","nzWidth","nzAlign","nzLeft","nzRight",4,"ngIf"],["class","attribute-filter","nzCustomFilter","",3,"nzColumnKey","nzWidth","nzAlign","nzLeft","nzRight","nzShowSort","nzSortFn","nzSortOrder","nzShowFilter","nzFilterFn","nzSortOrderChange",4,"ngIf"],["class","attribute-filter","nzCustomFilter","",3,"nzColumnKey","nzWidth","nzAlign","nzLeft","nzRight","nzFilterFn",4,"ngIf"],[3,"nzColumnKey","nzAlign","nzWidth","nzLeft","nzRight"],[3,"nzColumnKey","nzWidth","nzAlign","nzLeft","nzRight"],[3,"cvcInputType","cvcPlaceholder","cvcModel","cvcModelChange",4,"ngIf"],[3,"cvcInputType","cvcPlaceholder","cvcModel","cvcModelChange"],["nzCustomFilter","",1,"attribute-filter",3,"nzColumnKey","nzWidth","nzAlign","nzLeft","nzRight","nzShowSort","nzSortFn","nzSortOrder","nzShowFilter","nzFilterFn","nzSortOrderChange"],["enumTableFilter",""],[3,"nzDropdownMenu","nzActive"],["enumTagFilterTrigger",""],["nz-icon","","nzType","filter","nzTheme","fill"],["enumFilterMenu","nzDropdownMenu"],[3,"cvcColumnKey","cvcFilterOptions","cvcOption","cvcOptionChange"],["nzCustomFilter","",1,"attribute-filter",3,"nzColumnKey","nzWidth","nzAlign","nzLeft","nzRight","nzFilterFn"],["nz-icon","","nzType","search"],["textTagFilterMenu","nzDropdownMenu"],[1,"ant-table-filter-dropdown"],[1,"custom-input-dropdown"],[3,"cvcPlaceholder","cvcModel","cvcModelChange"],["nz-virtual-scroll",""],[1,"data-row"],[3,"nzChecked","nzAlign","nzLeft","nzRight","nzCheckedChange",4,"ngIf"],[3,"nzAlign","nzLeft","nzRight",4,"ngIf"],[3,"nzChecked","nzAlign","nzLeft","nzRight","nzCheckedChange"],[3,"nzAlign","nzLeft","nzRight"],["entityTagList",""],["entityTag",""],["emptyEntityTagCell",""],[4,"ngIf","ngIfElse"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"cvcTagTemplate","cvcTagListConfig"],[3,"cvcCollectionTagConfig","cvcTagTemplate","cvcShowFullLabels"],[3,"cvcTruncateLabel","cvcLinkableEntity","cvcEmphasize","cvcShowPopover","cvcStatus","cvcFullWidth"],[3,"cvcEmptyCategory"],["cvcContext","compact",3,"cvcFullWidth","cvcAttrValue","cvcTooltip",4,"ngIf","ngIfElse"],["emptyEnumTagCell",""],["cvcContext","compact",3,"cvcFullWidth","cvcAttrValue","cvcTooltip"],["cvcDisplayMode","small",3,"cvcEmptyCategory"],["nz-tooltip","","style","width: 100%; cursor: help; color: #595959",3,"nzTooltipTitle",4,"ngIf","ngIfElse"],["emptyTextTagCell",""],["nz-tooltip","",2,"width","100%","cursor","help","color","#595959",3,"nzTooltipTitle"],["nz-icon","","nzType","align-left","nzTheme","outline"],["numericInput",""],["nzSize","small",3,"nzSuffix"],["nz-input","",3,"placeholder","ngModel","nzFilterChange"],["filterInput",""],["suffixIcon",""],["nz-icon","","nzType","search","style","color: #ddd",4,"ngIf"],["nz-icon","","class","ant-input-clear-icon","nzTheme","fill","nzType","close-circle",3,"click",4,"ngIf"],["nz-icon","","nzType","search",2,"color","#ddd"],["nz-icon","","nzTheme","fill","nzType","close-circle",1,"ant-input-clear-icon",3,"click"],["nzSize","small"],[2,"width","100%",3,"nzPlaceHolder","ngModel","nzMin","nzStep","ngModelChange"],[3,"nzGutter"],["nzFlex","auto"],["nzColor","processing",4,"ngIf"],[3,"cvcShowTag"],[3,"cvcTableCountsConnection"],["nzFlex","35px"],["nz-button","","type","button","nzType","default","nzSize","small",3,"click"],["nz-icon","","nzType","retweet","nzTheme","outline"],["nz-button","","nz-popover","","nzPopoverTitle","Visible Columns","type","button","nzType","default","nzSize","small",3,"nzPopoverContent","nzPopoverTrigger"],["nz-icon","","nzType","setting","nzTheme","outline"],["prefsPopover",""],["nzColor","processing"],["nz-icon","","nzType","sync","nzSpin",""],["nzColor","error","style","margin-left: 12px",4,"ngIf"],["queryError",""],["nzColor","error",2,"margin-left","12px"],["nz-icon","","nzType","question-circle","nzTheme","outline"],["nz-tooltip","",2,"cursor","help",3,"nzTooltipTitle","nzTooltipTitleContext"],["nz-typography",""],[1,"prefs-popover"],[3,"ngModel","ngModelChange"]],template:function(d,c){if(1&d&&(e.TgZ(0,"nz-card",0)(1,"nz-table",1,2),e.NdJ("cvcTableScrollerOnScroll",function(se){return c.onScroll$.next(se)})("cvcTableScrollerOnFetch",function(se){return c.onFetchMore$.next(se)}),e.ALo(3,"ngrxPush"),e.ALo(4,"ngrxPush"),e.ALo(5,"ngrxPush"),e.ALo(6,"ngrxPush"),e.ALo(7,"ngrxPush"),e.YNc(8,Zs,5,2,"thead",3),e.YNc(9,He,2,0,"tbody",3),e.qZA()(),e.YNc(10,Qn,3,2,"ng-template",null,4,e.W1O),e.YNc(12,Gi,4,2,"ng-template",null,5,e.W1O),e.YNc(14,as,19,13,"ng-template",null,6,e.W1O)),2&d){const z=e.MAs(13),se=e.MAs(15);e.Q6J("nzTitle",z)("nzExtra",se),e.xp6(1),e.Q6J("nzData",e.lcZ(3,15,c.row$)||e.DdM(25,wo))("cvcTableScrollerQueryRef",c.queryRef)("cvcTableScrollerPageInfo",e.lcZ(4,17,c.pageInfo$))("cvcTableScrollerToIndex",e.lcZ(5,19,c.scrollToIndex$))("nzScroll",e.DdM(26,ks))("nzVirtualForTrackBy",c.trackByIndex)("nzVirtualItemSize",28)("nzSize","small")("nzFrontPagination",!1)("nzShowPagination",!1)("nzLoading",e.lcZ(6,21,c.loading$)&&!e.lcZ(7,23,c.isFetchMore$)),e.xp6(7),e.Q6J("ngrxLet",c.col$),e.xp6(1),e.Q6J("ngrxLet",c.col$)}},dependencies:[S.sg,S.O5,S.tP,Ue,Bt.P,io,On,Mt.J,di.H,be,t.Fj,t.JJ,t.On,P.eJ,xn.ix,xn.fY,fn.w,hn.dQ,ji.bd,Dt.ub,No.RR,O.t3,O.SK,gt.Ls,Pe.Zp,Pe.gB,Pe.ke,Yo._V,Yo.Rb,Vn.lU,Oi.N8,Oi.qD,Oi.Uo,Oi._C,Oi.h7,Oi.Om,Oi.p0,Oi.$Z,Oi.zu,Oi.qn,Oi.Ql,Oi.UX,Oi.g6,bt.j,Et.SY,he.ZU,gn,_r,tr,Wo,Qe.Do,nr,P.fM],styles:["[_nghost-%COMP%]{display:block}nz-card[_ngcontent-%COMP%]:first-of-type     .ant-card-body{padding:0;margin-top:1px}.table-info[_ngcontent-%COMP%]{margin-left:.5rem}tr.col-header-row[_ngcontent-%COMP%]   th.ant-table-cell[_ngcontent-%COMP%]{white-space:nowrap}tr.col-header-row[_ngcontent-%COMP%]   th.ant-table-cell.align-right[_ngcontent-%COMP%]     .ant-table-column-title{text-align:right}tr.filter-row[_ngcontent-%COMP%]   th.ant-table-cell[_ngcontent-%COMP%]{padding:3px 4px}tr.filter-row[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   nz-filter-trigger[_ngcontent-%COMP%]     span.ant-dropdown-trigger{margin-left:0;padding-right:12px}tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell[_ngcontent-%COMP%]{white-space:nowrap}tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell[_ngcontent-%COMP%]   .anticon.attribute-icon[_ngcontent-%COMP%]{color:#595959}tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell.overflow-ellipsis[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis}tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell.button-cell[_ngcontent-%COMP%]{padding:0}tr.data-row[_ngcontent-%COMP%]   td.align-right[_ngcontent-%COMP%], tr.col-header-row[_ngcontent-%COMP%]   th.ant-table-cell[_ngcontent-%COMP%]   .align-right[_ngcontent-%COMP%], tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell[_ngcontent-%COMP%]   .align-right[_ngcontent-%COMP%], tr.filter-row[_ngcontent-%COMP%]   th.ant-table-cell[_ngcontent-%COMP%]   .align-right[_ngcontent-%COMP%]{text-align:right}tr.data-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-of-type{padding-left:6px}tr.data-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-of-type   cvc-entity-tag[_ngcontent-%COMP%]{margin-left:6px}.ant-table-filter-dropdown[_ngcontent-%COMP%]{padding:8px}.prefs-popover[_ngcontent-%COMP%]     nz-checkbox-group:first-of-type label{display:block}.prefs-popover[_ngcontent-%COMP%]     nz-checkbox-group:first-of-type label span{display:inline-block}"],changeDetection:0}),yr);cs=(0,ze.gn)([(0,Ae.c)()],cs);const Wc=["optionTemplates"];function Ea(v,d){if(1&v){const c=e.EpF();e.TgZ(0,"nz-col",9)(1,"cvc-evidence-manager",10),e.NdJ("cvcSelectedIdsChange",function(se){e.CHM(c);const mt=e.oxw();return e.KtG(mt.onPopulate$.next(se))}),e.ALo(2,"ngrxPush"),e.ALo(3,"ngrxPush"),e.qZA()()}if(2&v){const c=e.oxw();e.xp6(1),e.Q6J("cvcSelectedIds",e.lcZ(2,2,c.onEid$))("cvcTableSettings",e.lcZ(3,4,c.tableSettingsChange$))}}function Zc(v,d){if(1&v&&e._UZ(0,"cvc-entity-tag",13),2&v){const c=e.oxw().$implicit,z=e.oxw().ngrxLet;e.Q6J("cvcDisableLink",!0)("cvcCacheId",c.__typename+":"+c.id)("cvcEmphasize",z)}}function bs(v,d){1&v&&(e.ynx(0),e.YNc(1,Zc,1,3,"ng-template",null,12,e.W1O),e.BQk())}function Jc(v,d){if(1&v&&(e.ynx(0),e.YNc(1,bs,3,0,"ng-container",11),e.ALo(2,"ngrxPush"),e.BQk()),2&v){const c=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,c.result$))}}function ur(v,d){if(1&v){const c=e.EpF();e.TgZ(0,"div",14)(1,"cvc-entity-tag",15),e.NdJ("cvcOnClose",function(){const mt=e.CHM(c).$implicit,Vt=e.oxw();return e.KtG(Vt.onTagClose$.next(mt.nzValue))}),e.qZA()()}if(2&v){const c=d.$implicit,z=e.oxw();e.xp6(1),e.Q6J("cvcCacheId","EvidenceItem:"+c.nzValue)("cvcContext",z.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",z.props.isMultiSelect?"default":"closeable")}}const Kc=function(){return[6,6]},Ms=function(v,d){return{show:v,hide:d}},ic=_t(Ut(),vi());class Mo extends ic{constructor(d,c,z,se){super(),this.taq=d,this.tq=c,this.changeDetectorRef=z,this.apollo=se,this.synchronizedFields$=[],this.synchronizedRequired$=[],this.defaultOptions={props:{label:"Evidence Items",placeholder:"Select Evidence Items",isMultiSelect:!0,description:"Select Evidence by ID, or use the manager to select with filtering",entityName:{singular:"Evidence Item",plural:"Evidence Items"},minSearchStrLength:1}},this.synchronizedFieldToColMap=new Map([["molecularProfileId","molecularProfile"],["diseaseId","disease"],["therapyIds","therapies"],["assertionType","evidenceType"],["assertionDirection","evidenceDirection"],["significance","significance"]]),this.requiredFieldToColMap=new Map([["disease","requiresDisease$"],["therapies","requiresTherapy$"]]),this.onEid$=new Ti.t,this.onShowMgrClick$=new Ze.x,this.showMgr$=this.onShowMgrClick$.pipe((0,po.R)((mt,Vt)=>!mt,!1))}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEntitySelectField({typeaheadQuery:this.taq,tagQuery:this.tq,getTypeaheadVarsFn:this.getTypeaheadVarsFn,getTypeaheadResultsFn:this.getTypeaheadResultsFn,getTagQueryVarsFn:this.getTagQueryVarsFn,getTagQueryResultsFn:this.getTagQueryResultsFn,getSelectedItemOptionFn:this.getSelectedItemOptionFn,getSelectOptionsFn:this.getSelectOptionsFn,changeDetectorRef:this.changeDetectorRef,selectOpen$:this.selectOpen$,selectComponent:this.selectComponent}),this.onEid$.pipe((0,Ae.t)(this)).subscribe(),this.onEid$.next(this.formControl.value),this.onValueChange$.pipe((0,tt.M)(this.onEid$),(0,Ae.t)(this)).subscribe(([d,c])=>{Array.isArray(d)&&this.onEid$.next(d)})}configureStateConnections(){this.state&&(this.synchronizedFieldToColMap.forEach((d,c)=>{const z=this.state.fields[`${c}$`];z&&this.synchronizedFields$.push(z.pipe((0,Ct.U)(se=>({key:c,value:se??null}))))}),this.requiredFieldToColMap.forEach((d,c)=>{const z=this.state.requires[d];z&&this.synchronizedRequired$.push(z.pipe((0,Ct.U)(se=>({key:c,required:se}))))}),this.onFieldsChange$=(0,ii.a)(this.synchronizedFields$).pipe((0,Ct.U)(d=>{const c=[];return d.forEach(z=>{const se=this.synchronizedFieldToColMap.get(z.key);se&&c.push({key:se,value:z.value})}),c})),this.onRequiredChange$=(0,ii.a)(this.synchronizedRequired$).pipe((0,Ct.U)(d=>{const c=[];return d.forEach(z=>{c.push({value:z.key,checked:z.required})}),c})),this.tableSettingsChange$=(0,ii.a)([this.onFieldsChange$,this.onRequiredChange$]).pipe((0,Ct.U)(([d,c])=>({filters:d,preferences:c})),(0,Xo.b)(100),(0,$o.d)(1)))}getTypeaheadVarsFn(d,c){return{eid:+d}}getTypeaheadResultsFn(d){return d.data.evidenceItems.nodes}getTagQueryVarsFn(d){return{eid:d}}getTagQueryResultsFn(d){return d.data.evidenceItem}getSelectedItemOptionFn(d){return{value:d.id,label:`EID${d.id}`}}getSelectOptionsFn(d,c){return d.map((z,se)=>({label:c.get(se)||`EID${z.id}`,value:z.id}))}}Mo.\u0275fac=function(d){return new(d||Mo)(e.Y36(Sn.olA),e.Y36(Sn.EFm),e.Y36(e.sBO),e.Y36(co._M))},Mo.\u0275cmp=e.Xpm({type:Mo,selectors:[["cvc-evidence-select"]],viewQuery:function(d,c){if(1&d&&e.Gf(Wc,5,e.Rgc),2&d){let z;e.iGM(z=e.CRH())&&(c.optionTemplates=z)}},features:[e.qOj],decls:18,vars:36,consts:[[3,"nzGutter"],["nzFlex","auto"],[3,"cvcSelectMode","cvcMinSearchStrLength","cvcCustomTemplate","cvcFormControl","cvcFormlyAttributes","cvcEntityName","cvcPlaceholder","cvcResults","cvcOptions","cvcShowError","cvcDisabled","cvcLoading","cvcSelectOpen","cvcOnSearch","cvcOnOpenChange","cvcSelectComponent","cvcOnModelChange"],["nzFlex","50px"],["type","button","nz-button","","nzBlock","",1,"manager-button",3,"click"],["nz-icon","",3,"ngClass","nzType"],["nzSpan","24","class","manager-drawer",4,"ngIf"],[4,"ngrxLet"],["selectedTemplate",""],["nzSpan","24",1,"manager-drawer"],[3,"cvcSelectedIds","cvcTableSettings","cvcSelectedIdsChange"],[4,"ngFor","ngForOf"],["optionTemplates",""],[3,"cvcDisableLink","cvcCacheId","cvcEmphasize"],[1,"ant-select-selection-item-content"],[3,"cvcCacheId","cvcContext","cvcMode","cvcOnClose"]],template:function(d,c){if(1&d&&(e.TgZ(0,"nz-row",0)(1,"nz-col",1)(2,"cvc-entity-select",2),e.NdJ("cvcOnSearch",function(se){return c.onSearch$.next(se)})("cvcOnOpenChange",function(se){return c.onOpenChange$.next(se)})("cvcSelectComponent",function(se){return c.selectComponent=se})("cvcOnModelChange",function(se){return c.props.change&&c.props.change(c.field,se)}),e.ALo(3,"ngrxPush"),e.ALo(4,"ngrxPush"),e.ALo(5,"ngrxPush"),e.ALo(6,"ngrxPush"),e.qZA()(),e.TgZ(7,"nz-col",3)(8,"button",4),e.NdJ("click",function(){return c.onShowMgrClick$.next()}),e._UZ(9,"span",5),e.ALo(10,"ngrxPush"),e.ALo(11,"ngrxPush"),e._uU(12," Manager "),e.qZA()(),e.YNc(13,Ea,4,6,"nz-col",6),e.ALo(14,"ngrxPush"),e.qZA(),e.YNc(15,Jc,3,3,"ng-container",7),e.YNc(16,ur,2,3,"ng-template",null,8,e.W1O)),2&d){const z=e.MAs(17);e.Q6J("nzGutter",e.DdM(32,Kc)),e.xp6(2),e.Q6J("cvcSelectMode",c.props.isMultiSelect?"multiple":"default")("cvcMinSearchStrLength",c.props.minSearchStrLength)("cvcCustomTemplate",z)("cvcFormControl",c.formControl)("cvcFormlyAttributes",c.field)("cvcEntityName",c.props.entityName)("cvcPlaceholder",c.props.placeholder)("cvcResults",e.lcZ(3,18,c.result$))("cvcOptions",e.lcZ(4,20,c.selectOption$))("cvcShowError",c.showError)("cvcDisabled",c.props.disabled)("cvcLoading",e.lcZ(5,22,c.isLoading$))("cvcSelectOpen",e.lcZ(6,24,c.selectOpen$)),e.xp6(7),e.Q6J("ngClass",e.WLB(33,Ms,e.lcZ(10,26,c.showMgr$),!e.lcZ(11,28,c.showMgr$)))("nzType","caret-right"),e.xp6(4),e.Q6J("ngIf",e.lcZ(14,30,c.showMgr$)),e.xp6(2),e.Q6J("ngrxLet",c.onSearch$)}},dependencies:[S.mk,S.sg,S.O5,je,Mt.J,P.eJ,xn.ix,fn.w,hn.dQ,O.t3,O.SK,gt.Ls,cs,P.fM],styles:[".manager-button[_ngcontent-%COMP%]   span.hide[_ngcontent-%COMP%]{transform:rotate(0);transition:transform .2s linear}.manager-button[_ngcontent-%COMP%]   span.show[_ngcontent-%COMP%]{transform:rotate(90deg);transition:transform .2s linear}"],changeDetection:0});var nu=a(1371);class jo{}jo.\u0275fac=function(d){return new(d||jo)},jo.\u0275mod=e.oAB({type:jo}),jo.\u0275inj=e.cJS({imports:[S.ez,gt.PV,bt.X,Et.cg,he.ZJ,ct.s,ot.x]});class Ss{}Ss.\u0275fac=function(d){return new(d||Ss)},Ss.\u0275mod=e.oAB({type:Ss}),Ss.\u0275inj=e.cJS({imports:[S.ez,bt.X,he.ZJ,Vn.$6,gt.PV,Et.cg,ct.s,jo]});const So={types:[{name:"evidence-select",wrappers:["form-field"],component:Mo},{name:"evidence-multi-select",wrappers:["form-field"],component:Mo,defaultOptions:{props:{label:"Evidence Items",isMultiSelect:!0}}}]};class ls{}ls.\u0275fac=function(d){return new(d||ls)},ls.\u0275mod=e.oAB({type:ls}),ls.\u0275inj=e.cJS({imports:[S.ez,ke,nu.M,Ss,En,jo,ot.x,Ii.y,ct.s,ki,m.X0.forChild(So),t.u5,P._N,xn.sL,ji.vh,Dt.Wr,No.b1,s.U5,O.Jb,gt.PV,Pe.o7,Yo.Zf,Vn.$6,Oi.HQ,bt.X,Et.cg,he.ZJ,P.pP]});const jr=["optionTemplates"];function oc(v,d){if(1&v&&(e.ynx(0),e.TgZ(1,"em"),e._UZ(2,"span",9),e.ALo(3,"highlightTypeahead"),e.qZA(),e.BQk()),2&v){const c=e.oxw(2).$implicit,z=e.oxw().ngrxLet;e.xp6(2),e.Q6J("innerHtml",e.xi3(3,1,c.geneAliases.join(", "),z),e.oJD)}}function Ls(v,d){1&v&&e._uU(0,"--")}function xa(v,d){if(1&v&&(e._UZ(0,"cvc-entity-tag",5),e.TgZ(1,"span",6),e.YNc(2,oc,4,4,"ng-container",7),e.YNc(3,Ls,1,0,"ng-template",null,8,e.W1O),e.qZA()),2&v){const c=e.MAs(4),z=e.oxw().$implicit,se=e.oxw().ngrxLet;e.Q6J("cvcDisableLink",!0)("cvcCacheId",z.__typename+":"+z.id)("cvcEmphasize",se),e.xp6(2),e.Q6J("ngIf",z.geneAliases.length>0)("ngIfElse",c)}}function rc(v,d){1&v&&(e.ynx(0),e.YNc(1,xa,5,5,"ng-template",null,4,e.W1O),e.BQk())}function iu(v,d){if(1&v&&(e.ynx(0),e.YNc(1,rc,3,0,"ng-container",3),e.ALo(2,"ngrxPush"),e.BQk()),2&v){const c=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,c.result$))}}function sc(v,d){if(1&v){const c=e.EpF();e.TgZ(0,"div",10)(1,"cvc-entity-tag",11),e.NdJ("cvcOnClose",function(){const mt=e.CHM(c).$implicit,Vt=e.oxw();return e.KtG(Vt.onTagClose$.next(mt.nzValue))}),e.qZA()()}if(2&v){const c=d.$implicit,z=e.oxw();e.xp6(1),e.Q6J("cvcCacheId","Gene:"+c.nzValue)("cvcContext",z.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",z.props.isMultiSelect?"default":"closeable")}}const ac=_t(Ut(),vi());class Po extends ac{constructor(d,c,z){super(),this.taq=d,this.tq=c,this.changeDetectorRef=z,this.defaultOptions={props:{label:"Gene",placeholder:"Search Genes",isMultiSelect:!1,entityName:{singular:"Gene",plural:"Genes"},description:"Entrez Gene Symbol"}}}ngAfterViewInit(){this.configureBaseField(),this.configureEntitySelectField({typeaheadQuery:this.taq,typeaheadParam$:void 0,tagQuery:this.tq,getTypeaheadVarsFn:this.getTypeaheadVarsFn,getTypeaheadResultsFn:this.getTypeaheadResultsFn,getTagQueryVarsFn:this.getTagQueryVarsFn,getTagQueryResultsFn:this.getTagQueryResultsFn,getSelectedItemOptionFn:this.getSelectedItemOptionFn,getSelectOptionsFn:this.getSelectOptionsFn,changeDetectorRef:this.changeDetectorRef,selectOpen$:this.selectOpen$,selectComponent:this.selectComponent})}getTypeaheadVarsFn(d){return{entrezSymbol:d}}getTypeaheadResultsFn(d){return d.data.geneTypeahead}getTagQueryVarsFn(d){return{geneId:d}}getTagQueryResultsFn(d){return d.data.gene}getSelectedItemOptionFn(d){return{value:d.id,label:d.name}}getSelectOptionsFn(d,c){return d.map((z,se)=>({label:c.get(se)||z.name,value:z.id}))}}Po.\u0275fac=function(d){return new(d||Po)(e.Y36(Sn.czh),e.Y36(Sn.HwR),e.Y36(e.sBO))},Po.\u0275cmp=e.Xpm({type:Po,selectors:[["cvc-gene-select"]],viewQuery:function(d,c){if(1&d&&e.Gf(jr,5,e.Rgc),2&d){let z;e.iGM(z=e.CRH())&&(c.optionTemplates=z)}},features:[e.qOj],decls:7,vars:17,consts:[[3,"cvcSelectMode","cvcCustomTemplate","cvcFormControl","cvcFormlyAttributes","cvcPlaceholder","cvcEntityName","cvcResults","cvcOptions","cvcShowError","cvcLoading","cvcOnSearch","cvcOnOpenChange","cvcSelectComponent","cvcOnModelChange"],[4,"ngrxLet"],["selectedTemplate",""],[4,"ngFor","ngForOf"],["optionTemplates",""],[3,"cvcDisableLink","cvcCacheId","cvcEmphasize"],["nz-typography","","nzType","secondary"],[4,"ngIf","ngIfElse"],["noAliases",""],["nz-typography","","nzType","secondary",3,"innerHtml"],[1,"ant-select-selection-item-content"],[3,"cvcCacheId","cvcContext","cvcMode","cvcOnClose"]],template:function(d,c){if(1&d&&(e.TgZ(0,"cvc-entity-select",0),e.NdJ("cvcOnSearch",function(se){return c.onSearch$.next(se)})("cvcOnOpenChange",function(se){return c.onOpenChange$.next(se)})("cvcSelectComponent",function(se){return c.selectComponent=se})("cvcOnModelChange",function(se){return c.props.change&&c.props.change(c.field,se)}),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.ALo(3,"ngrxPush"),e.qZA(),e.YNc(4,iu,3,3,"ng-container",1),e.YNc(5,sc,2,3,"ng-template",null,2,e.W1O)),2&d){const z=e.MAs(6);e.Q6J("cvcSelectMode",c.props.isMultiSelect?"multiple":"default")("cvcCustomTemplate",z)("cvcFormControl",c.formControl)("cvcFormlyAttributes",c.field)("cvcPlaceholder",c.props.placeholder)("cvcEntityName",c.props.entityName)("cvcResults",e.lcZ(1,11,c.result$))("cvcOptions",e.lcZ(2,13,c.selectOption$))("cvcShowError",c.showError)("cvcLoading",e.lcZ(3,15,c.isLoading$)),e.xp6(4),e.Q6J("ngrxLet",c.onSearch$)}},dependencies:[S.sg,S.O5,P.eJ,he.ZU,je,Mt.J,P.fM,H.A],changeDetection:0});const cc={types:[{name:"gene-select",wrappers:["form-field"],component:Po},{name:"gene-multi-select",wrappers:["form-field"],component:Po,defaultOptions:{props:{label:"Genes",isMultiSelect:!0}}}]};class us{}us.\u0275fac=function(d){return new(d||us)},us.\u0275mod=e.oAB({type:us}),us.\u0275inj=e.cJS({imports:[S.ez,t.UX,P._N,P.pP,m.X0.forChild(cc),on.L,xn.sL,Tt.LV,gt.PV,Pe.o7,Et.cg,s.U5,ye.ic,he.ZJ,bt.X,yt,En,ct.s,ot.x]});const Fl=["optionTemplates"];function Go(v,d){if(1&v&&e._UZ(0,"cvc-attribute-tag",4),2&v){const c=e.oxw().$implicit;e.Q6J("cvcAttrValue",c)}}function lc(v,d){1&v&&(e.ynx(0),e.YNc(1,Go,1,1,"ng-template",null,3,e.W1O),e.BQk())}function qs(v,d){if(1&v){const c=e.EpF();e.TgZ(0,"div",5)(1,"cvc-attribute-tag",6),e.NdJ("cvcOnClose",function(se){e.CHM(c);const mt=e.oxw();return e.KtG(mt.onTagClose$.next(se))}),e.qZA()()}if(2&v){const c=d.$implicit,z=e.oxw();e.xp6(1),e.Q6J("cvcAttrValue",c.nzValue)("cvcContext",z.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",z.props.isMultiSelect?"default":"closeable")}}const Du={COMBINATION:"Therapies specified were used as part of a combination therapy approach",SEQUENTIAL:"Therapies specified were used at separate timepoints in the same treatment plan",SUBSTITUTES:"Therapies specified are often considered to be of the same family, or behave similarly in a treatment setting"},uc=_t(Ut(),dt());class Xs extends uc{constructor(d){super(),this.cdr=d,this.defaultOptions={props:{label:"Therapy Interaction",placeholder:"Select Therapy Interaction",requireMultipleTherapies:!0,requireMultipleTherapiesPromptFn:()=>"A single associated therapy does not have an Interaction type",tooltip:"Characterizes the interaction of a multi-therapy treatment",extraType:"prompt"}},this.interactionEnum$=new it.X([]),this.placeholder$=new it.X(void 0)}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEnumSelectField({optionEnum$:this.interactionEnum$,optionTemplate$:this.optionTemplate$,changeDetectorRef:this.cdr})}configureStateConnections(){if(!this.state)return console.error(`${this.field.id} requires a form state to populate its options, none was found.`),void this.placeholder$.next("ERROR: Form state not found");this.placeholder$.next(this.props.placeholder),this.state.enums.interaction$?(this.state.enums.interaction$.pipe((0,Ae.t)(this)).subscribe(d=>{this.interactionEnum$.next(d)}),this.optionTemplates||console.error(`${this.field.id} could not find its optionTemplates QueryList to populate its select options, so simple text labels will be displayed.`),this.optionTemplate$=this.optionTemplates?.changes.pipe((0,Ct.U)(d=>d.map(c=>c))),this.onTherapies$=this.state.fields.therapyIds$,this.optionTemplates||console.warn(`${this.field.id} could not find state's fields.therapyIds$ to handle its required & disabled states.`),this.onTherapies$.pipe((0,Ae.t)(this)).subscribe(d=>{d&&0!=d.length?1==d.length?(this.props.description="A single associated therapy does not have an Interaction type",this.props.disabled=!0,this.props.required=!1,void 0!==this.formControl.value&&this.formControl.setValue(void 0)):(this.props.description="Select an Interaction Type",this.props.disabled=!1,this.props.required=!0):(this.props.disabled=!0,this.props.required=!1,this.props.description="Interaction type is not applicable when no therapies are selected.",void 0!==this.formControl.value&&this.formControl.setValue(void 0)),this.cdr.markForCheck()}),this.onValueChange$.pipe((0,Ae.t)(this)).subscribe(d=>{d?(this.props.description=Du[d],this.props.extraType="description"):this.props.extraType="prompt"})):console.error(`${this.field.id} could not find form state's interaction$ to populate select.`)}}Xs.\u0275fac=function(d){return new(d||Xs)(e.Y36(e.sBO))},Xs.\u0275cmp=e.Xpm({type:Xs,selectors:[["cvc-interaction-select"]],viewQuery:function(d,c){if(1&d&&e.Gf(Fl,5,e.Rgc),2&d){let z;e.iGM(z=e.CRH())&&(c.optionTemplates=z)}},features:[e.qOj],decls:7,vars:15,consts:[[3,"cvcFormControl","cvcFormlyAttributes","cvcSelectMode","cvcPlaceholder","cvcCustomTemplate","cvcOptions","cvcShowError","cvcDisabled"],[4,"ngFor","ngForOf"],["selectedTemplate",""],["optionTemplates",""],[3,"cvcAttrValue"],[1,"ant-select-selection-item-content"],[3,"cvcAttrValue","cvcContext","cvcMode","cvcOnClose"]],template:function(d,c){if(1&d&&(e._UZ(0,"cvc-enum-select",0),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.YNc(3,lc,3,0,"ng-container",1),e.ALo(4,"ngrxPush"),e.YNc(5,qs,2,3,"ng-template",null,2,e.W1O)),2&d){const z=e.MAs(6);e.Q6J("cvcFormControl",c.formControl)("cvcFormlyAttributes",c.field)("cvcSelectMode",c.props.isMultiSelect?"multiple":"default")("cvcPlaceholder",e.lcZ(1,9,c.placeholder$))("cvcCustomTemplate",z)("cvcOptions",e.lcZ(2,11,c.selectOption$))("cvcShowError",c.showError)("cvcDisabled",c.props.disabled),e.xp6(3),e.Q6J("ngForOf",e.lcZ(4,13,c.interactionEnum$))}},dependencies:[S.sg,At,Ue,P.fM]});const Rs={types:[{name:"interaction-select",wrappers:["form-field"],component:Xs}]};class br{}br.\u0275fac=function(d){return new(d||br)},br.\u0275mod=e.oAB({type:br}),br.\u0275inj=e.cJS({imports:[S.ez,t.UX,P._N,P.pP,m.X0.forChild(Rs),yt,me,ke]});var ds=a(6204);const Da=["optionTemplates"];function ea(v,d){if(1&v&&(e.TgZ(0,"nz-tag")(1,"strong"),e._uU(2),e.qZA(),e._uU(3),e.ALo(4,"enumTooltip"),e.qZA()),2&v){const c=e.oxw().$implicit;e.xp6(2),e.Oqu(c),e.xp6(1),e.hij(" - ",e.xi3(4,2,c,"evidenceLevelBrief")," ")}}function qc(v,d){1&v&&(e.ynx(0),e.YNc(1,ea,5,5,"ng-template",null,3,e.W1O),e.BQk())}function hs(v,d){if(1&v){const c=e.EpF();e.TgZ(0,"nz-tag",7),e.NdJ("nzOnClose",function(se){e.CHM(c);const mt=e.oxw(2);return e.KtG(mt.onTagClose$.next(se))}),e.TgZ(1,"strong"),e._uU(2),e.qZA(),e._uU(3),e.ALo(4,"enumTooltip"),e.qZA()}if(2&v){const c=e.oxw().$implicit;e.xp6(2),e.Oqu(c.nzValue),e.xp6(1),e.hij(" - ",e.xi3(4,2,c.nzValue,"evidenceLevelBrief")," ")}}function n1(v,d){if(1&v&&(e.ynx(0),e._uU(1),e.ALo(2,"enumTooltip"),e.BQk()),2&v){const c=e.oxw().$implicit;e.xp6(1),e.hij(" ",e.xi3(2,1,c.nzValue,"evidenceLevelBrief")," ")}}function Xc(v,d){if(1&v&&(e.TgZ(0,"div",4),e.YNc(1,hs,5,5,"nz-tag",5),e.YNc(2,n1,3,4,"ng-container",6),e.qZA()),2&v){const c=e.oxw();e.xp6(1),e.Q6J("ngIf",!c.props.isMultiSelect),e.xp6(1),e.Q6J("ngIf",c.props.isMultiSelect)}}const Hi=new Map([[Sn.Sx0.A,"Evidence shows consensus association in human medicine"],[Sn.Sx0.B,"Evidence supports association using clinical trial or other primary patient data"],[Sn.Sx0.C,"Evidence supports association using individual case reports from clinical journals"],[Sn.Sx0.D,"Evidence supports association using in vivo or in vitro models"],[Sn.Sx0.E,"Evidential association is inferential or indirect"]]),Nl=_t(Ut(),dt());class Oa extends Nl{constructor(d){super(),this.cdr=d,this.defaultOptions={props:{label:"Evidence Level",required:!1,isMultiSelect:!1,placeholder:"Select Evidence Level"}},this.levelEnum$=new it.X([])}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEnumSelectField({optionEnum$:this.levelEnum$,optionTemplate$:this.optionTemplate$,changeDetectorRef:this.cdr})}configureStateConnections(){this.props.tooltip="Type of study performed to produce the evidence statement",this.placeholder$=new it.X(this.props.placeholder),this.levelEnum$.next((0,ko.o6)(Sn.Sx0).map(d=>d)),this.optionTemplates||console.error(`${this.field.id} could not find its optionTemplates QueryList to populate its select options, so simple text labels will be displayed.`),this.optionTemplate$=this.optionTemplates?.changes.pipe((0,Ct.U)(d=>d.map(c=>c))),this.onValueChange$.pipe((0,Ae.t)(this)).subscribe(d=>{this.props.description=d?Hi.get(d):void 0})}}Oa.\u0275fac=function(d){return new(d||Oa)(e.Y36(e.sBO))},Oa.\u0275cmp=e.Xpm({type:Oa,selectors:[["cvc-level-select"]],viewQuery:function(d,c){if(1&d&&e.Gf(Da,5,e.Rgc),2&d){let z;e.iGM(z=e.CRH())&&(c.optionTemplates=z)}},features:[e.qOj],decls:7,vars:15,consts:[[3,"cvcFormControl","cvcFormlyAttributes","cvcSelectMode","cvcPlaceholder","cvcCustomTemplate","cvcOptions","cvcShowError","cvcDisabled"],[4,"ngFor","ngForOf"],["selectedTemplate",""],["optionTemplates",""],[1,"ant-select-selection-item-content"],["nzMode","closeable",3,"nzOnClose",4,"ngIf"],[4,"ngIf"],["nzMode","closeable",3,"nzOnClose"]],template:function(d,c){if(1&d&&(e._UZ(0,"cvc-enum-select",0),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.YNc(3,qc,3,0,"ng-container",1),e.ALo(4,"ngrxPush"),e.YNc(5,Xc,3,2,"ng-template",null,2,e.W1O)),2&d){const z=e.MAs(6);e.Q6J("cvcFormControl",c.formControl)("cvcFormlyAttributes",c.field)("cvcSelectMode",c.props.isMultiSelect?"multiple":"default")("cvcPlaceholder",e.lcZ(1,9,c.placeholder$))("cvcCustomTemplate",z)("cvcOptions",e.lcZ(2,11,c.selectOption$))("cvcShowError",c.showError)("cvcDisabled",c.props.disabled),e.xp6(3),e.Q6J("ngForOf",e.lcZ(4,13,c.levelEnum$))}},dependencies:[S.sg,S.O5,bt.j,At,P.fM,ds.v]});const el={types:[{name:"level-select",wrappers:["form-field"],component:Oa},{name:"level-multi-select",wrappers:["form-field"],component:Oa,defaultOptions:{props:{label:"Levels",isMultiSelect:!0}}}]};class dc{}dc.\u0275fac=function(d){return new(d||dc)},dc.\u0275mod=e.oAB({type:dc}),dc.\u0275inj=e.cJS({imports:[S.ez,t.UX,P._N,P.pP,m.X0.forChild(el),bt.X,ct.s,yt,me]});var hc,ta=a(4383);let Io=((hc=class{constructor(d){this.el=d,this.domChange=new e.vpe,this.changes=new MutationObserver(c=>{(0,ho.D)(c).pipe((0,Ct.U)(z=>{const se=z.target;return"class"===z.attributeName?{type:"class",change:se.classList.value,key:`${z.attributeName}:${se.classList.value}`}:"disabled"===z.attributeName?{type:"disabled",change:se.disabled,key:`${z.attributeName}:${se.disabled}`}:"hidden"===z.attributeName?{type:"hidden",change:se.hidden,key:`${z.attributeName}:${se.hidden}`}:{type:z.attributeName,change:"unknown change type",key:`${z.attributeName}:unknown-change-type`}}),(0,L.g)("key"),(0,Ae.t)(this)).subscribe(z=>{this.domChange.emit(z)})}),this.changes.observe(this.el.nativeElement,{attributeFilter:["class","disabled","hidden"],attributes:!0,childList:!1,subtree:!1})}ngAfterViewInit(){this.initialClass=this.el.nativeElement.classList.value}ngOnDestroy(){this.changes.disconnect()}}).\u0275fac=function(d){return new(d||hc)(e.Y36(e.SBq))},hc.\u0275dir=e.lG2({type:hc,selectors:[["button","cvcOrgSubmitButton",""]],outputs:{domChange:"domChange"}}),hc);Io=(0,ze.gn)([(0,Ae.c)()],Io);var Mr,na=a(9350);function ou(v,d){if(1&v&&(e.TgZ(0,"button",3),e._uU(1),e.qZA()),2&v){const c=e.oxw();e.Q6J("disabled",!c.form.valid),e.xp6(1),e.hij(" ",c.props.submitLabel," ")}}function uo(v,d){1&v&&e.GkF(0)}function tl(v,d){if(1&v&&(e.ynx(0),e.YNc(1,uo,1,0,"ng-container",7),e.BQk()),2&v){e.oxw(2);const c=e.MAs(2);e.xp6(1),e.Q6J("ngTemplateOutlet",c)}}function Gr(v,d){1&v&&e.GkF(0)}function A(v,d){if(1&v&&(e.ynx(0),e._UZ(1,"nz-avatar",11),e.BQk()),2&v){const c=d.ngrxLet;e.xp6(1),e.Q6J("nzSrc",c.profileImagePath)("nzSize",16)("nzShape","square")}}function k(v,d){if(1&v&&(e.ynx(0),e.TgZ(1,"nz-button-group"),e.YNc(2,Gr,1,0,"ng-container",7),e.TgZ(3,"button",8),e.ALo(4,"ngrxPush"),e.ALo(5,"ngrxPush"),e.ALo(6,"ngrxPush"),e.TgZ(7,"span"),e._uU(8,"for"),e.qZA(),e.YNc(9,A,2,3,"ng-container",9),e._UZ(10,"i",10),e.qZA()(),e.BQk()),2&v){e.oxw();const c=e.MAs(4),z=e.oxw(),se=e.MAs(2);e.xp6(2),e.Q6J("ngTemplateOutlet",se),e.xp6(1),e.Q6J("ngClass",e.lcZ(4,6,z.buttonClass$))("hidden",e.lcZ(5,8,z.isHidden$))("disabled",e.lcZ(6,10,z.isDisabled$))("nzDropdownMenu",c),e.xp6(6),e.Q6J("ngrxLet",z.mostRecentOrg$)}}function b(v,d){if(1&v){const c=e.EpF();e.TgZ(0,"li",12),e.NdJ("click",function(){const mt=e.CHM(c).$implicit,Vt=e.oxw(2);return e.KtG(Vt.menuSelection$.next(mt.id))}),e._UZ(1,"nz-avatar",11),e._uU(2),e.qZA()}if(2&v){const c=d.$implicit;e.xp6(1),e.Q6J("nzSrc",null==c?null:c.profileImagePath)("nzSize",10)("nzShape","square"),e.xp6(1),e.hij(" ",c.name," ")}}function K(v,d){if(1&v&&(e.ynx(0),e.YNc(1,tl,2,1,"ng-container",2),e.YNc(2,k,11,12,"ng-container",2),e.TgZ(3,"nz-dropdown-menu",null,4)(5,"ul",5),e.YNc(6,b,3,4,"li",6),e.qZA()(),e.BQk()),2&v){const c=d.ngIf;e.xp6(1),e.Q6J("ngIf",c.length<=1),e.xp6(1),e.Q6J("ngIf",c.length>1),e.xp6(4),e.Q6J("ngForOf",c)}}let Me=((Mr=class extends m.fS{constructor(d,c,z){super(),this.viewerService=d,this.cdr=c,this.apollo=z,this.menuSelection$=new Ze.x,this.baseButtonClass="org-dropdown-btn",this.defaultOptions={props:{submitLabel:"Submit"}},this.viewer$=this.viewerService.viewer$,this.organizations$=this.viewer$.pipe((0,Gt.j)("organizations")),this.mostRecentOrg$=this.viewer$.pipe((0,Gt.j)("mostRecentOrg")),this.isDisabled$=new Ze.x,this.isHidden$=new Ze.x,this.buttonClass$=new it.X(this.baseButtonClass),this.subscriptions=[]}ngOnInit(){this.menuSelection$.pipe((0,tt.M)(this.viewer$)).subscribe(([se,mt])=>{const Vt={id:`User:${mt.id}`,fragment:co.Ps`
            fragment UserMostRecentOrgId on User {
              mostRecentOrganizationId
            }
          `,data:{mostRecentOrganizationId:se}};this.apollo.client.writeFragment(Vt)}),this.formUpdate$=new it.X(this.form.status);const d=this.form.statusChanges.subscribe(se=>this.formUpdate$.next(se)),c=this.formUpdate$.subscribe(se=>this.cdr.detectChanges()),z=this.mostRecentOrg$.pipe((0,Gt.j)("id"),(0,Ge.h)(jn.ep)).subscribe(se=>{this.formControl.setValue(se)});this.subscriptions=this.subscriptions.concat([d,c,z])}ngAfterViewInit(){if(this.button&&this.button.domChange){const d=this.button.domChange.subscribe(c=>{"class"===c.type&&"string"==typeof c.change?this.buttonClass$.next(`${this.baseButtonClass} ${c.change}`):"disabled"===c.type&&"boolean"==typeof c.change?this.isDisabled$.next(c.change):"hidden"===c.type&&"boolean"==typeof c.change&&this.isHidden$.next(c.change)});this.subscriptions.push(d)}}}).\u0275fac=function(d){return new(d||Mr)(e.Y36(na.a),e.Y36(e.sBO),e.Y36(co._M))},Mr.\u0275cmp=e.Xpm({type:Mr,selectors:[["cvc-org-submit-button"]],viewQuery:function(d,c){if(1&d&&e.Gf(Io,5),2&d){let z;e.iGM(z=e.CRH())&&(c.button=z.first)}},features:[e.qOj],decls:5,vars:5,consts:[["type","hidden",3,"formControl","formlyAttributes"],["submitButton",""],[4,"ngIf"],["cvcOrgSubmitButton","","type","submit","nz-button","","nzType","primary",3,"disabled","nzDanger"],["orgMenu","nzDropdownMenu"],["nz-menu",""],["nz-menu-item","",3,"click",4,"ngFor","ngForOf"],[4,"ngTemplateOutlet"],["type","button","nz-button","","nz-dropdown","","nzTrigger","click",3,"ngClass","hidden","disabled","nzDropdownMenu"],[4,"ngrxLet"],["nz-icon","","nzType","down"],[3,"nzSrc","nzSize","nzShape"],["nz-menu-item","",3,"click"]],template:function(d,c){1&d&&(e._UZ(0,"input",0),e.YNc(1,ou,2,2,"ng-template",null,1,e.W1O),e.YNc(3,K,7,3,"ng-container",2),e.ALo(4,"ngrxPush")),2&d&&(e.Q6J("formControl",c.formControl)("formlyAttributes",c.field),e.xp6(3),e.Q6J("ngIf",e.lcZ(4,3,c.organizations$)))},dependencies:[S.mk,S.sg,S.O5,S.tP,t.Fj,t.JJ,t.oH,P.eJ,m.JD,gt.Ls,ta.Dz,xn.ix,xn.fY,fn.w,hn.dQ,Wi.wO,Wi.r9,No.cm,No.RR,No.wA,Io,P.fM],styles:["[_nghost-%COMP%]{display:inline-block}[_nghost-%COMP%]     .ant-btn-dangerous.ant-btn-primary:first-child:not(:last-child){border-right-color:#ff4d4f}[_nghost-%COMP%]     .ant-btn-dangerous.ant-btn-primary:hover, [_nghost-%COMP%]     .ant-btn-dangerous.ant-btn-primary:focus{border-right-color:#fd7978}.org-dropdown-btn[_ngcontent-%COMP%]   nz-avatar[_ngcontent-%COMP%]{margin:-2px 6px 0;border:1px solid rgba(255,255,255,.3);background-color:#ffffffe6}.org-dropdown-btn.ant-btn-dangerous[_ngcontent-%COMP%]:last-child:not(:first-child), .org-dropdown-btn[_ngcontent-%COMP%]   .ant-btn-dangerous[_ngcontent-%COMP%] + .ant-btn-dangerous[_ngcontent-%COMP%]{border-left-color:#fd7978}"],changeDetection:0}),Mr);Me=(0,ze.gn)([(0,Ae.c)({arrayName:"subscriptions"})],Me);const Xe={types:[{name:"org-submit-button",component:Me}]};class at{}at.\u0275fac=function(d){return new(d||at)},at.\u0275mod=e.oAB({type:at}),at.\u0275inj=e.cJS({imports:[S.ez,t.UX,P._N,P.pP,m.X0.forChild(Xe),gt.PV,ta.Rt,xn.sL,No.b1]});const Zt=["optionTemplates"];function zn(v,d){if(1&v&&e._UZ(0,"cvc-attribute-tag",4),2&v){const c=e.oxw().$implicit;e.Q6J("cvcAttrValue",c)}}function Wn(v,d){1&v&&(e.ynx(0),e.YNc(1,zn,1,1,"ng-template",null,3,e.W1O),e.BQk())}function Yn(v,d){if(1&v){const c=e.EpF();e.TgZ(0,"div",5)(1,"cvc-attribute-tag",6),e.NdJ("cvcOnClose",function(se){e.CHM(c);const mt=e.oxw();return e.KtG(mt.onTagClose$.next(se))}),e.qZA()()}if(2&v){const c=d.$implicit,z=e.oxw();e.xp6(1),e.Q6J("cvcAttrValue",c.nzValue)("cvcContext",z.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",z.props.isMultiSelect?"default":"closeable")}}const Ai=new Map([[Sn.huM.Somatic,"Variant is a mutation, found only in tumor cells, having arisen in a specific tissue (non-germ cell), and is not expected to be inherited or passed to offspring."],[Sn.huM.RareGermline,"Variant is found in every cell (not restricted to tumor/diseased cells) and is thought to exist in less than 1% of the population relevant to this evidence item."],[Sn.huM.CommonGermline,"Variant is found in every cell (not restricted to tumor/diseased cells) and is thought to exist in at least 1% of the population relevant to this evidence item."],[Sn.huM.Unknown,"The variant origin is uncertain based on the available evidence."],[Sn.huM.Na,"The variant type (e.g., expression) is not compatible (or easily classified) with the CIViC concept of variant origin."]]),vo=_t(Ut(),dt());class Bo extends vo{constructor(d){super(),this.cdr=d,this.defaultOptions={props:{label:"Variant Origin",required:!1,isMultiSelect:!1,placeholder:"Select Variant Origin",tooltip:"Identifies whether the variant is inherited (germline mutation) or acquired (somatic mutation) in the context of the study"}},this.originEnum$=new it.X([])}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEnumSelectField({optionEnum$:this.originEnum$,optionTemplate$:this.optionTemplate$,changeDetectorRef:this.cdr}),this.originEnum$.next(Array.from(Ai.keys()))}configureStateConnections(){this.optionTemplates||console.error(`${this.field.id} could not find its optionTemplates QueryList to populate its select options, so simple text labels will be displayed.`),this.optionTemplate$=this.optionTemplates?.changes.pipe((0,Ct.U)(d=>d.map(c=>c))),this.onValueChange$.pipe((0,Ae.t)(this)).subscribe(d=>{this.props.description=d?Ai.get(d):void 0})}}Bo.\u0275fac=function(d){return new(d||Bo)(e.Y36(e.sBO))},Bo.\u0275cmp=e.Xpm({type:Bo,selectors:[["cvc-origin-select"]],viewQuery:function(d,c){if(1&d&&e.Gf(Zt,5,e.Rgc),2&d){let z;e.iGM(z=e.CRH())&&(c.optionTemplates=z)}},features:[e.qOj],decls:6,vars:13,consts:[[3,"cvcFormControl","cvcFormlyAttributes","cvcSelectMode","cvcPlaceholder","cvcCustomTemplate","cvcOptions","cvcShowError","cvcDisabled"],[4,"ngFor","ngForOf"],["selectedTemplate",""],["optionTemplates",""],[3,"cvcAttrValue"],[1,"ant-select-selection-item-content"],[3,"cvcAttrValue","cvcContext","cvcMode","cvcOnClose"]],template:function(d,c){if(1&d&&(e._UZ(0,"cvc-enum-select",0),e.ALo(1,"ngrxPush"),e.YNc(2,Wn,3,0,"ng-container",1),e.ALo(3,"ngrxPush"),e.YNc(4,Yn,2,3,"ng-template",null,2,e.W1O)),2&d){const z=e.MAs(5);e.Q6J("cvcFormControl",c.formControl)("cvcFormlyAttributes",c.field)("cvcSelectMode",c.props.isMultiSelect?"multiple":"default")("cvcPlaceholder",c.props.placeholder)("cvcCustomTemplate",z)("cvcOptions",e.lcZ(1,9,c.selectOption$))("cvcShowError",c.showError)("cvcDisabled",c.props.disabled),e.xp6(2),e.Q6J("ngForOf",e.lcZ(3,11,c.originEnum$))}},dependencies:[S.sg,At,Ue,P.fM]});const Sr={types:[{name:"origin-select",wrappers:["form-field"],component:Bo},{name:"origin-multi-select",wrappers:["form-field"],component:Bo,defaultOptions:{props:{label:"Variant Origins",isMultiSelect:!0}}}]};class Qo{}Qo.\u0275fac=function(d){return new(d||Qo)},Qo.\u0275mod=e.oAB({type:Qo}),Qo.\u0275inj=e.cJS({imports:[S.ez,t.UX,P._N,P.pP,m.X0.forChild(Sr),yt,me,ke]});const Qr=["optionTemplates"];function ia(v,d){if(1&v&&(e.ynx(0),e.TgZ(1,"em"),e._UZ(2,"span",8),e.ALo(3,"highlightTypeahead"),e.qZA(),e.BQk()),2&v){const c=e.oxw(2).$implicit,z=e.oxw().ngrxLet;e.xp6(2),e.Q6J("innerHtml",e.xi3(3,1,c.hpoId,z),e.oJD)}}function kl(v,d){if(1&v&&(e._UZ(0,"cvc-entity-tag",5),e.TgZ(1,"span",6),e.YNc(2,ia,4,4,"ng-container",7),e.qZA()),2&v){const c=e.oxw().$implicit,z=e.oxw().ngrxLet;e.Q6J("cvcDisableLink",!0)("cvcCacheId",c.__typename+":"+c.id)("cvcEmphasize",z),e.xp6(2),e.Q6J("ngIf",c.hpoId)}}function oa(v,d){1&v&&(e.ynx(0),e.YNc(1,kl,3,4,"ng-template",null,4,e.W1O),e.BQk())}function J1(v,d){if(1&v&&(e.ynx(0),e.YNc(1,oa,3,0,"ng-container",3),e.ALo(2,"ngrxPush"),e.BQk()),2&v){const c=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,c.result$))}}function wa(v,d){if(1&v){const c=e.EpF();e.TgZ(0,"div",9)(1,"cvc-entity-tag",10),e.NdJ("cvcOnClose",function(){const mt=e.CHM(c).$implicit,Vt=e.oxw();return e.KtG(Vt.onTagClose$.next(mt.nzValue))}),e.qZA()()}if(2&v){const c=d.$implicit,z=e.oxw();e.xp6(1),e.Q6J("cvcCacheId","Phenotype:"+c.nzValue)("cvcContext",z.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",z.props.isMultiSelect?"default":"closeable")}}const ru=_t(Ut(),vi());class Wr extends ru{constructor(d,c,z){super(),this.taq=d,this.tq=c,this.changeDetectorRef=z,this.defaultOptions={props:{entityName:{singular:"Phenotype",plural:"Phenotypes"},isMultiSelect:!1,requireType:!0,tooltip:"Phenotype or phenotype combination which interacts with the specified variant",placeholders:{default:"Search Phenotypes",multiDefault:"Select Phenotype(s) (max MULTI_MAX)",requireTypePrompt:"Select an ENTITY_NAME Type to search Phenotypes"},description:'Please provide any <a href="https://hpo.jax.org/app/browse/term/HP:0000118" target="_blank">HPO phenotypes</a>, including <a href="https://hpo.jax.org/app/browse/term/HP:0003674" target="_blank">age of onset</a>.',extraType:"description"}},this.placeholder$=new it.X(this.defaultOptions.props.placeholders.default)}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEntitySelectField({typeaheadQuery:this.taq,typeaheadParam$:void 0,tagQuery:this.tq,getTypeaheadVarsFn:this.getTypeaheadVarsFn,getTypeaheadResultsFn:this.getTypeaheadResultsFn,getTagQueryVarsFn:this.getTagQueryVarsFn,getTagQueryResultsFn:this.getTagQueryResultsFn,getSelectedItemOptionFn:this.getSelectedItemOptionFn,getSelectOptionsFn:this.getSelectOptionsFn,changeDetectorRef:this.changeDetectorRef,selectOpen$:this.selectOpen$,selectComponent:this.selectComponent}),this.configurePlaceholders()}configureStateConnections(){}configurePlaceholders(){}getTypeaheadVarsFn(d){return{name:d}}getTypeaheadResultsFn(d){return d.data.phenotypeTypeahead}getTagQueryVarsFn(d){return{id:d}}getTagQueryResultsFn(d){return d.data.phenotype}getSelectedItemOptionFn(d){return{value:d.id,label:d.name}}getSelectOptionsFn(d,c){return d.map((z,se)=>({label:c.get(se)||z.name,value:z.id}))}}Wr.\u0275fac=function(d){return new(d||Wr)(e.Y36(Sn.zOE),e.Y36(Sn.z_7),e.Y36(e.sBO))},Wr.\u0275cmp=e.Xpm({type:Wr,selectors:[["cvc-phenotype-select"]],viewQuery:function(d,c){if(1&d&&e.Gf(Qr,5,e.Rgc),2&d){let z;e.iGM(z=e.CRH())&&(c.optionTemplates=z)}},features:[e.qOj],decls:9,vars:22,consts:[[3,"cvcSelectMode","cvcCustomTemplate","cvcFormControl","cvcFormlyAttributes","cvcEntityName","cvcPlaceholder","cvcResults","cvcOptions","cvcShowError","cvcDisabled","cvcLoading","cvcOnSearch","cvcOnOpenChange","cvcOnModelChange"],[4,"ngrxLet"],["selectedTemplate",""],[4,"ngFor","ngForOf"],["optionTemplates",""],[3,"cvcDisableLink","cvcCacheId","cvcEmphasize"],["nz-typography","","nzType","secondary"],[4,"ngIf"],["nz-typography","","nzType","secondary",3,"innerHtml"],[1,"ant-select-selection-item-content"],[3,"cvcCacheId","cvcContext","cvcMode","cvcOnClose"]],template:function(d,c){if(1&d&&(e.TgZ(0,"cvc-entity-select",0),e.NdJ("cvcOnSearch",function(se){return c.onSearch$.next(se)})("cvcOnOpenChange",function(se){return c.onOpenChange$.next(se)})("cvcOnModelChange",function(se){return c.props.change&&c.props.change(c.field,se)}),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.ALo(3,"ngrxPush"),e.ALo(4,"ngrxPush"),e.ALo(5,"ngrxPush"),e.qZA(),e.YNc(6,J1,3,3,"ng-container",1),e.YNc(7,wa,2,3,"ng-template",null,2,e.W1O)),2&d){const z=e.MAs(8);e.Q6J("cvcSelectMode",c.props.isMultiSelect?"multiple":"default")("cvcCustomTemplate",z)("cvcFormControl",c.formControl)("cvcFormlyAttributes",c.field)("cvcEntityName",c.props.entityName)("cvcPlaceholder",e.lcZ(1,12,c.placeholder$))("cvcResults",e.lcZ(2,14,c.result$))("cvcOptions",e.lcZ(3,16,c.selectOption$))("cvcShowError",c.showError)("cvcDisabled",c.onRequiresPhenotype$&&!e.lcZ(4,18,c.onRequiresPhenotype$))("cvcLoading",e.lcZ(5,20,c.isLoading$)),e.xp6(6),e.Q6J("ngrxLet",c.onSearch$)}},dependencies:[S.sg,S.O5,P.eJ,he.ZU,je,Mt.J,P.fM,H.A],changeDetection:0});const nl={types:[{name:"phenotype-select",wrappers:["form-field"],component:Wr,defaultOptions:{props:{label:"Phenotype"}}},{name:"phenotype-multi-select",wrappers:["form-field"],component:Wr,defaultOptions:{props:{isMultiSelect:!0,label:"Phenotypes"}}}]};class Er{}Er.\u0275fac=function(d){return new(d||Er)},Er.\u0275mod=e.oAB({type:Er}),Er.\u0275inj=e.cJS({imports:[S.ez,t.UX,P._N,P.pP,m.X0.forChild(nl),on.L,xn.sL,Tt.LV,Vn.$6,ci.Qp,gt.PV,Pe.o7,O.Jb,Et.cg,Jt.zf,s.U5,ye.ic,he.ZJ,bt.X,yt,En,ct.s,ot.x]});var pc=a(9521),fc=a(4968),il=a(2722),Es=a(2536),Ll=a(3303),ps=a(3187),o1=a(445);const ol=["nz-rate-item",""];function rl(v,d){}function xs(v,d){}function Ou(v,d){1&v&&e._UZ(0,"span",4)}const mc=function(v){return{$implicit:v}},r1=["ulElement"];function Rl(v,d){if(1&v){const c=e.EpF();e.TgZ(0,"li",3)(1,"div",4),e.NdJ("itemHover",function(se){const Vt=e.CHM(c).index,Mn=e.oxw();return e.KtG(Mn.onItemHover(Vt,se))})("itemClick",function(se){const Vt=e.CHM(c).index,Mn=e.oxw();return e.KtG(Mn.onItemClick(Vt,se))}),e.qZA()()}if(2&v){const c=d.index,z=e.oxw();e.Q6J("ngClass",z.starStyleArray[c]||"")("nzTooltipTitle",z.nzTooltips[c]),e.xp6(1),e.Q6J("allowHalf",z.nzAllowHalf)("character",z.nzCharacter)("index",c)}}let ah=(()=>{class v{constructor(){this.index=0,this.allowHalf=!1,this.itemHover=new e.vpe,this.itemClick=new e.vpe}hoverRate(c){this.itemHover.next(c&&this.allowHalf)}clickRate(c){this.itemClick.next(c&&this.allowHalf)}}return v.\u0275fac=function(c){return new(c||v)},v.\u0275cmp=e.Xpm({type:v,selectors:[["","nz-rate-item",""]],inputs:{character:"character",index:"index",allowHalf:"allowHalf"},outputs:{itemHover:"itemHover",itemClick:"itemClick"},exportAs:["nzRateItem"],attrs:ol,decls:6,vars:8,consts:[[1,"ant-rate-star-second",3,"mouseover","click"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"ant-rate-star-first",3,"mouseover","click"],["defaultCharacter",""],["nz-icon","","nzType","star","nzTheme","fill"]],template:function(c,z){if(1&c&&(e.TgZ(0,"div",0),e.NdJ("mouseover",function(mt){return z.hoverRate(!1),mt.stopPropagation()})("click",function(){return z.clickRate(!1)}),e.YNc(1,rl,0,0,"ng-template",1),e.qZA(),e.TgZ(2,"div",2),e.NdJ("mouseover",function(mt){return z.hoverRate(!0),mt.stopPropagation()})("click",function(){return z.clickRate(!0)}),e.YNc(3,xs,0,0,"ng-template",1),e.qZA(),e.YNc(4,Ou,1,0,"ng-template",null,3,e.W1O)),2&c){const se=e.MAs(5);e.xp6(1),e.Q6J("ngTemplateOutlet",z.character||se)("ngTemplateOutletContext",e.VKq(4,mc,z.index)),e.xp6(2),e.Q6J("ngTemplateOutlet",z.character||se)("ngTemplateOutletContext",e.VKq(6,mc,z.index))}},dependencies:[S.tP,gt.Ls],encapsulation:2,changeDetection:0}),(0,ze.gn)([(0,ps.yF)()],v.prototype,"allowHalf",void 0),v})(),Vl=(()=>{class v{constructor(c,z,se,mt,Vt,Mn){this.nzConfigService=c,this.ngZone=z,this.renderer=se,this.cdr=mt,this.directionality=Vt,this.destroy$=Mn,this._nzModuleName="rate",this.nzAllowClear=!0,this.nzAllowHalf=!1,this.nzDisabled=!1,this.nzAutoFocus=!1,this.nzCount=5,this.nzTooltips=[],this.nzOnBlur=new e.vpe,this.nzOnFocus=new e.vpe,this.nzOnHoverChange=new e.vpe,this.nzOnKeyDown=new e.vpe,this.classMap={},this.starArray=[],this.starStyleArray=[],this.dir="ltr",this.hasHalf=!1,this.hoverValue=0,this.isFocused=!1,this._value=0,this.isNzDisableFirstChange=!0,this.onChange=()=>null,this.onTouched=()=>null}get nzValue(){return this._value}set nzValue(c){this._value!==c&&(this._value=c,this.hasHalf=!Number.isInteger(c),this.hoverValue=Math.ceil(c))}ngOnChanges(c){const{nzAutoFocus:z,nzCount:se,nzValue:mt}=c;if(z&&!z.isFirstChange()){const Vt=this.ulElement.nativeElement;this.nzAutoFocus&&!this.nzDisabled?this.renderer.setAttribute(Vt,"autofocus","autofocus"):this.renderer.removeAttribute(Vt,"autofocus")}se&&this.updateStarArray(),mt&&this.updateStarStyle()}ngOnInit(){this.nzConfigService.getConfigChangeEventForComponent("rate").pipe((0,il.R)(this.destroy$)).subscribe(()=>this.cdr.markForCheck()),this.directionality.change.pipe((0,il.R)(this.destroy$)).subscribe(c=>{this.dir=c,this.cdr.detectChanges()}),this.dir=this.directionality.value,this.ngZone.runOutsideAngular(()=>{(0,fc.R)(this.ulElement.nativeElement,"focus").pipe((0,il.R)(this.destroy$)).subscribe(c=>{this.isFocused=!0,this.nzOnFocus.observers.length&&this.ngZone.run(()=>this.nzOnFocus.emit(c))}),(0,fc.R)(this.ulElement.nativeElement,"blur").pipe((0,il.R)(this.destroy$)).subscribe(c=>{this.isFocused=!1,this.nzOnBlur.observers.length&&this.ngZone.run(()=>this.nzOnBlur.emit(c))})})}onItemClick(c,z){if(this.nzDisabled)return;this.hoverValue=c+1;const se=z?c+.5:c+1;this.nzValue===se?this.nzAllowClear&&(this.nzValue=0,this.onChange(this.nzValue)):(this.nzValue=se,this.onChange(this.nzValue)),this.updateStarStyle()}onItemHover(c,z){this.nzDisabled||this.hoverValue===c+1&&z===this.hasHalf||(this.hoverValue=c+1,this.hasHalf=z,this.nzOnHoverChange.emit(this.hoverValue),this.updateStarStyle())}onRateLeave(){this.hasHalf=!Number.isInteger(this.nzValue),this.hoverValue=Math.ceil(this.nzValue),this.updateStarStyle()}focus(){this.ulElement.nativeElement.focus()}blur(){this.ulElement.nativeElement.blur()}onKeyDown(c){const z=this.nzValue;c.keyCode===pc.SV&&this.nzValue<this.nzCount?this.nzValue+=this.nzAllowHalf?.5:1:c.keyCode===pc.oh&&this.nzValue>0&&(this.nzValue-=this.nzAllowHalf?.5:1),z!==this.nzValue&&(this.onChange(this.nzValue),this.nzOnKeyDown.emit(c),this.updateStarStyle(),this.cdr.markForCheck())}updateStarArray(){this.starArray=Array(this.nzCount).fill(0).map((c,z)=>z),this.updateStarStyle()}updateStarStyle(){this.starStyleArray=this.starArray.map(c=>{const z="ant-rate-star",se=c+1;return{[`${z}-full`]:se<this.hoverValue||!this.hasHalf&&se===this.hoverValue,[`${z}-half`]:this.hasHalf&&se===this.hoverValue,[`${z}-active`]:this.hasHalf&&se===this.hoverValue,[`${z}-zero`]:se>this.hoverValue,[`${z}-focused`]:this.hasHalf&&se===this.hoverValue&&this.isFocused}})}writeValue(c){this.nzValue=c||0,this.updateStarArray(),this.cdr.markForCheck()}setDisabledState(c){this.nzDisabled=this.isNzDisableFirstChange&&this.nzDisabled||c,this.isNzDisableFirstChange=!1,this.cdr.markForCheck()}registerOnChange(c){this.onChange=c}registerOnTouched(c){this.onTouched=c}}return v.\u0275fac=function(c){return new(c||v)(e.Y36(Es.jY),e.Y36(e.R0b),e.Y36(e.Qsj),e.Y36(e.sBO),e.Y36(o1.Is,8),e.Y36(Ll.kn))},v.\u0275cmp=e.Xpm({type:v,selectors:[["nz-rate"]],viewQuery:function(c,z){if(1&c&&e.Gf(r1,7),2&c){let se;e.iGM(se=e.CRH())&&(z.ulElement=se.first)}},inputs:{nzAllowClear:"nzAllowClear",nzAllowHalf:"nzAllowHalf",nzDisabled:"nzDisabled",nzAutoFocus:"nzAutoFocus",nzCharacter:"nzCharacter",nzCount:"nzCount",nzTooltips:"nzTooltips"},outputs:{nzOnBlur:"nzOnBlur",nzOnFocus:"nzOnFocus",nzOnHoverChange:"nzOnHoverChange",nzOnKeyDown:"nzOnKeyDown"},exportAs:["nzRate"],features:[e._Bn([Ll.kn,{provide:t.JU,useExisting:(0,e.Gpc)(()=>v),multi:!0}]),e.TTD],decls:3,vars:7,consts:[[1,"ant-rate",3,"ngClass","tabindex","keydown","mouseleave"],["ulElement",""],["class","ant-rate-star","nz-tooltip","",3,"ngClass","nzTooltipTitle",4,"ngFor","ngForOf"],["nz-tooltip","",1,"ant-rate-star",3,"ngClass","nzTooltipTitle"],["nz-rate-item","",3,"allowHalf","character","index","itemHover","itemClick"]],template:function(c,z){1&c&&(e.TgZ(0,"ul",0,1),e.NdJ("keydown",function(mt){return z.onKeyDown(mt),mt.preventDefault()})("mouseleave",function(mt){return z.onRateLeave(),mt.stopPropagation()}),e.YNc(2,Rl,2,5,"li",2),e.qZA()),2&c&&(e.ekj("ant-rate-disabled",z.nzDisabled)("ant-rate-rtl","rtl"===z.dir),e.Q6J("ngClass",z.classMap)("tabindex",z.nzDisabled?-1:1),e.xp6(2),e.Q6J("ngForOf",z.starArray))},dependencies:[S.mk,S.sg,Et.SY,ah],encapsulation:2,changeDetection:0}),(0,ze.gn)([(0,Es.oS)(),(0,ps.yF)()],v.prototype,"nzAllowClear",void 0),(0,ze.gn)([(0,Es.oS)(),(0,ps.yF)()],v.prototype,"nzAllowHalf",void 0),(0,ze.gn)([(0,ps.yF)()],v.prototype,"nzDisabled",void 0),(0,ze.gn)([(0,ps.yF)()],v.prototype,"nzAutoFocus",void 0),(0,ze.gn)([(0,ps.Rn)()],v.prototype,"nzCount",void 0),v})(),Bl=(()=>{class v{}return v.\u0275fac=function(c){return new(c||v)},v.\u0275mod=e.oAB({type:v}),v.\u0275inj=e.cJS({imports:[o1.vT,S.ez,gt.PV,Et.cg]}),v})();const ra={1:"Poor - Claim is not supported well by experimental evidence. Results are not reproducible, or have very small sample size. No follow-up is done to validate novel claims.",2:"Adequate - Evidence is not well supported by experimental data, and little follow-up data is available. Experiments may lack proper controls, have small sample size, or are not statistically convincing.",3:"Average - Evidence is convincing, but not supported by a breadth of experiments. May be smaller scale projects, or novel results without many follow-up experiments. Discrepancies from expected results are explained and not concerning.",4:"Strong - Well supported evidence. Experiments are well controlled, and results are convincing. Any discrepancies from expected results are well-explained and not concerning.",5:"Excellent - Solid, well supported evidence from a lab or journal with respected academic standing. Experiments are well controlled, and results are clean and reproducible across multiple replicates. Evidence confirmed using separate methods."},al=_t(Ut(),dt());class Pa extends al{constructor(){super(),this.defaultOptions={props:{label:"Evidence Rating",count:5,tooltip:"A representation of the curator's confidence in the quality of the summarized evidence",hoverText:[]}},this.rating$=new it.X(void 0)}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.formControl.value&&this.rating$.next(this.formControl.value),Object.entries(ra).map(([d,c])=>{this.props.hoverText.push(c)}),this.rating$.pipe((0,Ae.t)(this)).subscribe(d=>{this.formControl.setValue(d)}),this.onValueChange$.pipe((0,Ae.t)(this)).subscribe(d=>{this.props.description=d?ra[d]:void 0})}configureStateConnections(){}}Pa.\u0275fac=function(d){return new(d||Pa)},Pa.\u0275cmp=e.Xpm({type:Pa,selectors:[["cvc-rating"]],features:[e.qOj],decls:2,vars:5,consts:[["type","hidden",3,"formControl","formlyAttributes"],[3,"ngModel","nzCount","nzTooltips","ngModelChange"]],template:function(d,c){1&d&&(e._UZ(0,"input",0),e.TgZ(1,"nz-rate",1),e.NdJ("ngModelChange",function(se){return c.rating$.next(se)}),e.qZA()),2&d&&(e.Q6J("formControl",c.formControl)("formlyAttributes",c.field),e.xp6(1),e.Q6J("ngModel",c.formControl.value)("nzCount",c.props.count)("nzTooltips",c.props.hoverText))},dependencies:[t.Fj,t.JJ,t.oH,t.On,m.JD,Vl],styles:["[_nghost-%COMP%]     nz-rate .anticon{font-size:160%}"],changeDetection:0});const Ia={types:[{name:"rating",wrappers:["form-field"],component:Pa}]};class cl{}cl.\u0275fac=function(d){return new(d||cl)},cl.\u0275mod=e.oAB({type:cl}),cl.\u0275inj=e.cJS({imports:[S.ez,t.UX,P._N,P.pP,t.u5,m.X0.forChild(Ia),Bl,ct.s,yt,me]});const Aa=["optionTemplates"];function K1(v,d){if(1&v&&e._UZ(0,"cvc-attribute-tag",4),2&v){const c=e.oxw().$implicit;e.Q6J("cvcAttrValue",c)}}function ll(v,d){1&v&&(e.ynx(0),e.YNc(1,K1,1,1,"ng-template",null,3,e.W1O),e.BQk())}function s1(v,d){if(1&v){const c=e.EpF();e.TgZ(0,"div",5)(1,"cvc-attribute-tag",6),e.NdJ("cvcOnClose",function(se){e.CHM(c);const mt=e.oxw();return e.KtG(mt.onTagClose$.next(se))}),e.qZA()()}if(2&v){const c=d.$implicit,z=e.oxw();e.xp6(1),e.Q6J("cvcAttrValue",c.nzValue)("cvcContext",z.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",z.props.isMultiSelect?"default":"closeable")}}const Fa={Evidence:{PREDICTIVE:{SENSITIVITYRESPONSE:"Associated with a clinical or preclinical response to treatment",RESISTANCE:"Associated with clinical or preclinical resistance to treatment",ADVERSE_RESPONSE:"Associated with an adverse response to drug treatment",REDUCED_SENSITIVITY:"Response to treatment is lower than seen in other treatment contexts",NA:"Clinical Significance is not applicable."},DIAGNOSTIC:{POSITIVE:"Associated with diagnosis of disease or subtype",NEGATIVE:"Associated with lack of disease or subtype"},PROGNOSTIC:{BETTER_OUTCOME:"Demonstrates better than expected clinical outcome",POOR_OUTCOME:"Demonstrates worse than expected clinical outcome",NA:"Clinical Significance is not applicable."},PREDISPOSING:{PREDISPOSITION:"Germline variant has predisposing potential for cancer, and may meet select ACMG/AMP criteria supporting pathogenic or benign classification.",PROTECTIVENESS:"Germline variant has properties that protect individuals from acquiring cancer."},FUNCTIONAL:{GAIN_OF_FUNCTION:"Sequence variant confers an increase in normal gene function",LOSS_OF_FUNCTION:"Sequence variant confers a diminished or abolished function",UNALTERED_FUNCTION:"Gene product of sequence variant is unchanged",NEOMORPHIC:"Sequence variant creates a novel function",DOMINANT_NEGATIVE:"Sequence variant abrogates function of wildtype allele gene product",UNKNOWN:"Sequence variant that cannot be precisely defined by the other listed categories"},ONCOGENIC:{ONCOGENICITY:"Somatic variant has oncogenic potential for driving cancer, and may meet select ClinGen/CGC/VICC criteria supporting pathogenic or benign classification.",PROTECTIVENESS:"Somatic variant has a protective role against cancer."}},Assertion:{PREDICTIVE:{SENSITIVITYRESPONSE:"Associated with a clinical or preclinical response to treatment",RESISTANCE:"Associated with clinical or preclinical resistance to treatment",ADVERSE_RESPONSE:"Associated with an adverse response to drug treatment",REDUCED_SENSITIVITY:"Response to treatment is lower than seen in other treatment contexts",NA:"Clinical Significance is not applicable."},DIAGNOSTIC:{POSITIVE:"Associated with diagnosis of disease or subtype",NEGATIVE:"Associated with lack of disease or subtype"},PROGNOSTIC:{BETTER_OUTCOME:"Demonstrates better than expected clinical outcome",POOR_OUTCOME:"Demonstrates worse than expected clinical outcome",NA:"Clinical Significance is not applicable."},PREDISPOSING:{PATHOGENIC:"Very strong evidence the variant is pathogenic",LIKELY_PATHOGENIC:"Strong evidence (>90% certainty) the variant is pathogenic.",BENIGN:"Very strong evidence the variant is benign",LIKELY_BENIGN:"Not expected to have a major effect on disease",UNCERTAIN_SIGNIFICANCE:"Does not meet the ACMG/AMP criteria for pathogenic/benign, or the evidence is conflicting"},ONCOGENIC:{ONCOGENIC:"Very strong evidence the variant is oncogenic.",LIKELY_ONCOGENIC:"Strong evidence the variant is oncogenic.",BENIGN:"Very strong evidence the variant does not have oncogenic properties.",LIKELY_BENIGN:"Strong evidence the variant does not have oncogenic properties.",UNCERTAIN_SIGNIFICANCE:"Does not meet guideline criteria for oncogenic/benign, or the evidence is conflicting."}}},q1=_t(Ut(),dt());class Vs extends q1{constructor(d){super(),this.cdr=d,this.defaultOptions={props:{label:"Clinical Significance",required:!0,isMultiSelect:!1,placeholder:"Select Clinical Significance",placeholderFn:c=>`Select ${c?c+" ":""}Clinical Significance`,requireTypePromptFn:c=>`Select ${c} Type to select its Clinical Significance`,tooltip:"Clinical impact of the variant"}},this.significanceEnum$=new it.X([])}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEnumSelectField({optionEnum$:this.significanceEnum$,optionTemplate$:this.optionTemplate$,changeDetectorRef:this.cdr})}configureStateConnections(){if(!this.state)return console.error(`${this.field.id} requires a form state to populate its options, none was found.`),void(this.placeholder$=new it.X("ERROR: Form state not found"));if(this.placeholder$=new it.X(this.props.placeholderFn(this.state.entityName)),!this.state.enums.significance$)return void console.error(`${this.field.id} could not find form state's enums.significance$ to populate select.`);this.state.enums.significance$.pipe((0,Ae.t)(this)).subscribe(c=>{this.significanceEnum$.next(c)}),this.optionTemplates||console.warn(`${this.field.id} could not find its optionTemplates QueryList to populate its select options, so simple text labels will be displayed.`),this.optionTemplate$=this.optionTemplates?.changes.pipe((0,Ct.U)(c=>c.map(z=>z)));const d=`${this.state.entityName.toLowerCase()}Type$`;this.state.fields[d]?(this.onTypeSelect$=this.state.fields[d],this.onTypeSelect$.pipe((0,Ae.t)(this)).subscribe(c=>{c?(this.props.disabled=!1,this.props.description=void 0,this.props.extraType=void 0,this.placeholder$.next(this.props.placeholderFn(this.state.entityName))):(this.props.disabled=!0,this.props.description=this.props.requireTypePromptFn(this.state.entityName),this.props.extraType="prompt",this.formControl.value&&this.formControl.setValue(void 0))}),this.onValueChange$.pipe((0,tt.M)(this.onTypeSelect$),(0,Ae.t)(this)).subscribe(([c,z])=>{!z||!c||!this.state||(this.props.description=void 0,this.props.extraType="description",this.props.description=Fa[this.state.entityName][z][c])})):console.error(`${this.field.id} could not find form state's ${d} to populate Significance options.`)}}Vs.\u0275fac=function(d){return new(d||Vs)(e.Y36(e.sBO))},Vs.\u0275cmp=e.Xpm({type:Vs,selectors:[["cvc-significance-select"]],viewQuery:function(d,c){if(1&d&&e.Gf(Aa,5,e.Rgc),2&d){let z;e.iGM(z=e.CRH())&&(c.optionTemplates=z)}},features:[e.qOj],decls:7,vars:15,consts:[[3,"cvcFormControl","cvcFormlyAttributes","cvcSelectMode","cvcPlaceholder","cvcCustomTemplate","cvcOptions","cvcShowError","cvcDisabled"],[4,"ngFor","ngForOf"],["selectedTemplate",""],["optionTemplates",""],[3,"cvcAttrValue"],[1,"ant-select-selection-item-content"],[3,"cvcAttrValue","cvcContext","cvcMode","cvcOnClose"]],template:function(d,c){if(1&d&&(e._UZ(0,"cvc-enum-select",0),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.YNc(3,ll,3,0,"ng-container",1),e.ALo(4,"ngrxPush"),e.YNc(5,s1,2,3,"ng-template",null,2,e.W1O)),2&d){const z=e.MAs(6);e.Q6J("cvcFormControl",c.formControl)("cvcFormlyAttributes",c.field)("cvcSelectMode",c.props.isMultiSelect?"multiple":"default")("cvcPlaceholder",e.lcZ(1,9,c.placeholder$))("cvcCustomTemplate",z)("cvcOptions",e.lcZ(2,11,c.selectOption$))("cvcShowError",c.showError)("cvcDisabled",c.props.disabled),e.xp6(3),e.Q6J("ngForOf",e.lcZ(4,13,c.significanceEnum$))}},dependencies:[S.sg,At,Ue,P.fM]});const su={types:[{name:"significance-select",wrappers:["form-field"],component:Vs}]};class Ds{}Ds.\u0275fac=function(d){return new(d||Ds)},Ds.\u0275mod=e.oAB({type:Ds}),Ds.\u0275inj=e.cJS({imports:[S.ez,t.UX,P._N,P.pP,m.X0.forChild(su),yt,me,ke]});var gc,X1=a(2577),ul=a(8521),Hl=a(6530),dl=a(8675);function vc(v,d){1&v&&e._UZ(0,"span",9),2&v&&e.Q6J("nzType","loading")}function au(v,d){if(1&v&&(e.ynx(0),e.YNc(1,vc,1,1,"span",8),e._uU(2,"\xa0 "),e.TgZ(3,"span"),e._uU(4),e.qZA(),e.BQk()),2&v){const c=d.ngrxLet;e.xp6(1),e.Q6J("ngIf",c.showSpinner),e.xp6(3),e.Oqu(c.message)}}function Na(v,d){if(1&v&&e._uU(0),2&v){const c=e.oxw();e.Oqu(c.successMessage)}}function a1(v,d){1&v&&(e.TgZ(0,"button",10),e._uU(1," Add Source "),e.qZA()),2&v&&e.Q6J("disabled",null===d.ngrxLet.citation)}const ka=function(){return[0,0]};let Zr=((gc=class{constructor(d,c,z,se,mt){this.checkCitation=d,this.addRemoteCitation=c,this.errors=z,this.apollo=se,this.cdr=mt,this.cvcOnCreate=new e.vpe,this.messageOptions={empty:(Vt,Mn)=>`No ${Mn} Source with a citation ID of "${Vt}"`,searchCitation:(Vt,Mn)=>`Searching ${Mn} for a citation ID of "${Vt}"`,foundCitation:(Vt,Mn,Rn)=>`Found ${Mn} citation "${Rn}" with ID ${Vt}`,noCitation:(Vt,Mn)=>`No ${Mn} Source with a citation ID of "${Vt}" was found`},this.form=new t.nJ({}),this.model={citationId:"",sourceType:Sn.yic.Pubmed},this.formLayout="horizontal",this.options={formState:{formLayout:this.formLayout}},this.onSubmit$=new Ze.x,this.citationId$=new it.X(""),this.sourceType$=new it.X(Sn.yic.Pubmed),this.addSourceStubMutator=new Rt.U(this.errors),this.fields=[{key:"citationId",props:{hidden:!0}},{key:"sourceType",props:{hidden:!0}}],this.onSubmit$.pipe((0,Ae.t)(this)).subscribe(Vt=>{console.log("disease-quick-add form model submitted.",Vt),this.submitSourceStub()})}ngOnInit(){void 0!==this.model.citationId&&void 0!==this.model.sourceType?(this.queryRef=this.checkCitation.watch({citationId:this.model.citationId,sourceType:this.model.sourceType}),this.checkResult$=this.queryRef.valueChanges.pipe((0,Ct.U)(d=>({loading:d.loading,citation:d.data?d.data.remoteCitation:null,model:this.model})),(0,Ln.b)(d=>{this.citationString=d.citation?d.citation:void 0})),this.citationId$.pipe((0,Ae.t)(this)).subscribe(d=>{this.model.sourceType&&this.queryRef.refetch({citationId:d,sourceType:this.model.sourceType})}),this.formMessageDisplay$=this.checkResult$.pipe((0,Ct.U)(d=>{const c=d.loading,z=d.citation,se=d.model;return c?{message:this.messageOptions.searchCitation(se.citationId,se.sourceType),showSpinner:!0}:c||null===z?c||null!==z?{message:"UNHANDLED MESSAGE STATE",showSpinner:!1}:{message:this.messageOptions.noCitation(se.citationId,se.sourceType),showSpinner:!1}:{message:this.messageOptions.foundCitation(se.citationId,(0,Hl.c)(se.sourceType),z),showSpinner:!1}}),(0,dl.O)({message:this.messageOptions.searchCitation(this.model.citationId,this.model.sourceType),showSpinner:!0}))):console.error("source-quick-add provided invalid initial model")}submitSourceStub(){void 0!==this.model.citationId&&void 0!==this.model.sourceType&&(this.mutationState=this.addSourceStubMutator.mutate(this.addRemoteCitation,{input:{citationId:this.model.citationId,sourceType:this.model.sourceType}},{},d=>{if(console.log("source-quick-add submit data callback",d),d.addRemoteCitation){this.successMessage=`New Source "${this.citationString}" added.`;const c=d.addRemoteCitation.newSource,z=(0,Hl.c)(this.model.sourceType),se=this.citationString?this.citationString:"NO CITATION",mt={query:co.Ps`
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
              `,data:{source:{__typename:"Source",id:c.id,name:`${z}: ${se}`,link:`sources/${c.id}`,citation:se,citationId:this.model.citationId,sourceType:this.model.sourceType}},variables:{id:c.id}};this.apollo.client.cache.writeQuery(mt)||console.error("source-quick-add.form Source writeQuery failed.",mt),setTimeout(()=>{const Mn={id:`Source:${c.id}`,fragment:co.Ps`
                  fragment LinkableSource on Source {
                    id
                    name
                    link
                  }
                `},Rn=this.apollo.client.cache.readFragment(Mn);null!==Rn&&this.cvcOnCreate.next(Rn.id)},1e3)}}))}ngOnChanges(d){if(d.cvcSourceType){const c=d.cvcSourceType.currentValue;this.sourceType$.next(c),this.model={...this.model,sourceType:c}}if(d.cvcCitationId){const c=d.cvcCitationId.currentValue;this.citationId$.next(c),this.model={...this.model,citationId:c}}}}).\u0275fac=function(d){return new(d||gc)(e.Y36(Sn.qgP),e.Y36(Sn.LHC),e.Y36(Qt.Y),e.Y36(co._M),e.Y36(e.sBO))},gc.\u0275cmp=e.Xpm({type:gc,selectors:[["cvc-source-quick-add"]],inputs:{cvcSourceType:"cvcSourceType",cvcCitationId:"cvcCitationId"},outputs:{cvcOnCreate:"cvcOnCreate"},features:[e.TTD],decls:10,vars:11,consts:[[4,"ngrxLet"],["entityType","Source",3,"mutationState","successMessage"],["success",""],["nz-form","","nzLayout","horizontal",3,"formGroup","ngSubmit"],[3,"nzGutter"],["nzSpan","24"],[3,"form","fields","model","options","modelChange"],["nz-button","","nzType","primary","nzBlock","",3,"disabled",4,"ngrxLet"],["nz-icon","",3,"nzType",4,"ngIf"],["nz-icon","",3,"nzType"],["nz-button","","nzType","primary","nzBlock","",3,"disabled"]],template:function(d,c){if(1&d&&(e.YNc(0,au,5,2,"ng-container",0),e.TgZ(1,"cvc-form-submission-status-display",1),e.YNc(2,Na,1,1,"ng-template",null,2,e.W1O),e.TgZ(4,"form",3),e.NdJ("ngSubmit",function(){return c.onSubmit$.next(c.model)}),e.TgZ(5,"nz-row",4)(6,"nz-col",5)(7,"formly-form",6),e.NdJ("modelChange",function(se){return c.model=se}),e.qZA()(),e.TgZ(8,"nz-col",5),e.YNc(9,a1,2,1,"button",7),e.qZA()()()()),2&d){const z=e.MAs(3);e.Q6J("ngrxLet",c.formMessageDisplay$),e.xp6(1),e.Q6J("mutationState",c.mutationState)("successMessage",z),e.xp6(3),e.Q6J("formGroup",c.form),e.xp6(1),e.Q6J("nzGutter",e.DdM(10,ka)),e.xp6(2),e.Q6J("form",c.form)("fields",c.fields)("model",c.model)("options",c.options),e.xp6(2),e.Q6J("ngrxLet",c.checkResult$)}},dependencies:[S.O5,t._Y,t.JL,t.sg,P.eJ,m.T7,xn.ix,fn.w,hn.dQ,gt.Ls,O.t3,O.SK,s.Lr,_n.F],changeDetection:0}),gc);Zr=(0,ze.gn)([(0,Ae.c)()],Zr);const _c=["optionTemplates"];function c1(v,d){if(1&v){const c=e.EpF();e.TgZ(0,"nz-col",9)(1,"nz-select",10),e.NdJ("ngModelChange",function(se){e.CHM(c);const mt=e.oxw();return e.KtG(mt.sourceType$.next(se))}),e.ALo(2,"ngrxPush"),e._UZ(3,"nz-option",11)(4,"nz-option",12)(5,"nz-option",13),e.qZA()()}if(2&v){const c=e.oxw();e.xp6(1),e.Q6J("nzOptionHeightPx",28)("ngModel",e.lcZ(2,2,c.sourceType$))}}function yc(v,d){1&v&&(e.TgZ(0,"div"),e._uU(1,"PMID:"),e.qZA())}function wu(v,d){1&v&&(e.TgZ(0,"div"),e._uU(1,"ID:"),e.qZA())}function Bs(v,d){1&v&&(e.TgZ(0,"div"),e._uU(1,"doi.org/"),e.qZA())}function l1(v,d){if(1&v&&(e.TgZ(0,"nz-col",14),e.ynx(1,15),e.ALo(2,"ngrxPush"),e.YNc(3,yc,2,0,"div",16),e.YNc(4,wu,2,0,"div",16),e.YNc(5,Bs,2,0,"div",16),e.BQk(),e.qZA()),2&v){const c=e.oxw();e.xp6(1),e.Q6J("ngSwitch",e.lcZ(2,4,c.sourceType$)),e.xp6(2),e.Q6J("ngSwitchCase","PUBMED"),e.xp6(1),e.Q6J("ngSwitchCase","ASCO"),e.xp6(1),e.Q6J("ngSwitchCase","ASH")}}function Cc(v,d){if(1&v&&(e._UZ(0,"cvc-entity-tag",19),e.TgZ(1,"span",20),e._uU(2," ID: "),e._UZ(3,"span",21),e.ALo(4,"highlightTypeahead"),e.qZA()),2&v){const c=e.oxw().$implicit,z=e.oxw().ngrxLet;e.Q6J("cvcDisableLink",!0)("cvcCacheId",c.__typename+":"+c.id)("cvcEmphasize",z),e.xp6(3),e.Q6J("innerHtml",e.xi3(4,4,c.citationId.toString(),z),e.oJD)}}function u1(v,d){1&v&&(e.ynx(0),e.YNc(1,Cc,5,7,"ng-template",null,18,e.W1O),e.BQk())}function La(v,d){if(1&v&&(e.ynx(0),e.YNc(1,u1,3,0,"ng-container",17),e.ALo(2,"ngrxPush"),e.BQk()),2&v){const c=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,c.result$))}}function d1(v,d){if(1&v){const c=e.EpF();e.TgZ(0,"div",22)(1,"cvc-entity-tag",23),e.NdJ("cvcOnClose",function(){const mt=e.CHM(c).$implicit,Vt=e.oxw();return e.KtG(Vt.onTagClose$.next(mt.nzValue))}),e.qZA()()}if(2&v){const c=d.$implicit,z=e.oxw();e.xp6(1),e.Q6J("cvcCacheId","Source:"+c.nzValue)("cvcContext",z.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",z.props.isMultiSelect?"default":"closeable")}}function zc(v,d){if(1&v){const c=e.EpF();e.TgZ(0,"cvc-source-quick-add",24),e.NdJ("cvcOnCreate",function(se){e.CHM(c);const mt=e.oxw();return e.KtG(mt.onPopulate$.next(se))}),e.qZA()}if(2&v){const c=d.model;e.Q6J("cvcCitationId",c.citationId)("cvcSourceType",c.sourceType)}}function dr(v,d){1&v&&(e.TgZ(0,"button",25),e._uU(1,"Add a New Source"),e.qZA())}const sa=function(){return[6,6]},aa=_t(Ut(),vi());class Eo extends aa{constructor(d,c,z){super(),this.taq=d,this.tq=c,this.changeDetectorRef=z,this.onModel$=new ro.y,this.defaultSourceType=Sn.yic.Pubmed,this.defaultOptions={props:{entityName:{singular:"Source",plural:"Sources"},isMultiSelect:!1,minSearchStrLength:2,tooltip:"PubMed, ASCO, or ASH Abstract Source(s) that support items, statements or descriptions.",placeholders:{default:"Search PubMed, ASCO, and ASH Sources",contextualFn:se=>`Search ${se} Sources`},extraType:"prompt"}},this.sourceType$=new it.X(this.defaultSourceType),this.sourceTypeName$=new it.X((0,Hl.c)(this.defaultSourceType)),this.placeholder$=new it.X(this.defaultOptions.props.placeholders.contextualFn((0,Hl.c)(this.defaultSourceType))),this.showTypeSelect$=new ro.y}ngAfterViewInit(){this.configureBaseField(),this.configureEntitySelectField({typeaheadQuery:this.taq,typeaheadParam$:this.sourceType$,typeaheadParamName$:this.sourceTypeName$||void 0,tagQuery:this.tq,getTypeaheadVarsFn:this.getTypeaheadVarsFn,getTypeaheadResultsFn:this.getTypeaheadResultsFn,getTagQueryVarsFn:this.getTagQueryVarsFn,getTagQueryResultsFn:this.getTagQueryResultsFn,getSelectedItemOptionFn:this.getSelectedItemOptionFn,getSelectOptionsFn:this.getSelectOptionsFn,changeDetectorRef:this.changeDetectorRef,selectOpen$:this.selectOpen$,selectComponent:this.selectComponent,minSearchStrLength:this.field.props.minSearchStrLength}),this.showTypeSelect$=this.onValueChange$.pipe((0,Ct.U)(d=>!!(!d||d&&Array.isArray(d)))),this.sourceType$.pipe((0,Ae.t)(this)).subscribe(d=>{const c=(0,Hl.c)(d);this.sourceTypeName$.next(c),this.placeholder$.next(this.props.placeholders.contextualFn(c))}),this.onModel$=(0,ii.a)([this.sourceType$,this.onSearch$]).pipe((0,Ct.U)(([d,c])=>({citationId:c,sourceType:d})))}getTypeaheadVarsFn(d,c=Sn.yic.Pubmed){return{partialCitationId:d,sourceType:c}}getTypeaheadResultsFn(d){return d.data.sourceTypeahead}getTagQueryVarsFn(d){return{id:d}}getTagQueryResultsFn(d){return d.data.source}getSelectedItemOptionFn(d){return{value:d.id,label:d.name}}getSelectOptionsFn(d,c){return d.map((z,se)=>({label:c.get(se)||z.name,value:z.id}))}}Eo.\u0275fac=function(d){return new(d||Eo)(e.Y36(Sn.aC3),e.Y36(Sn.BYO),e.Y36(e.sBO))},Eo.\u0275cmp=e.Xpm({type:Eo,selectors:[["cvc-source-select"]],viewQuery:function(d,c){if(1&d&&e.Gf(_c,5,e.Rgc),2&d){let z;e.iGM(z=e.CRH())&&(c.optionTemplates=z)}},features:[e.qOj],decls:21,vars:39,consts:[[3,"nzGutter"],["nzFlex","80px",4,"ngIf"],["nzFlex","60px","class","prefix",4,"ngIf"],["nzFlex","auto"],[3,"cvcMinSearchStrLength","cvcSelectMode","cvcCustomTemplate","cvcFormControl","cvcFormlyAttributes","cvcEntityName","cvcPlaceholder","cvcResults","cvcOptions","cvcParamName","cvcShowError","cvcDisabled","cvcLoading","cvcAddEntity","cvcAddEntityModel","cvcSelectOpen","cvcOnSearch","cvcOnModelChange"],[4,"ngrxLet"],["selectedTemplate",""],["addSource",""],["addSourceBtn",""],["nzFlex","80px"],["nzSize","default","nzBlock","",3,"nzOptionHeightPx","ngModel","ngModelChange"],["nzValue","PUBMED","nzLabel","PubMed"],["nzValue","ASCO","nzLabel","ASCO"],["nzValue","ASH","nzLabel","ASH"],["nzFlex","60px",1,"prefix"],[3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngFor","ngForOf"],["optionTemplates",""],[3,"cvcDisableLink","cvcCacheId","cvcEmphasize"],["nz-typography","","nzType","secondary"],["nz-typography","","nzType","secondary",3,"innerHtml"],[1,"ant-select-selection-item-content"],[3,"cvcCacheId","cvcContext","cvcMode","cvcOnClose"],[3,"cvcCitationId","cvcSourceType","cvcOnCreate"],["type","button"]],template:function(d,c){if(1&d&&(e.TgZ(0,"nz-row",0),e.YNc(1,c1,6,4,"nz-col",1),e.ALo(2,"ngrxPush"),e.YNc(3,l1,6,6,"nz-col",2),e.ALo(4,"ngrxPush"),e.TgZ(5,"nz-col",3)(6,"cvc-entity-select",4),e.NdJ("cvcOnSearch",function(se){return c.onSearch$.next(se)})("cvcOnModelChange",function(se){return c.props.change&&c.props.change(c.field,se)}),e.ALo(7,"ngrxPush"),e.ALo(8,"ngrxPush"),e.ALo(9,"ngrxPush"),e.ALo(10,"ngrxPush"),e.ALo(11,"ngrxPush"),e.ALo(12,"ngrxPush"),e.ALo(13,"ngrxPush"),e.qZA()()(),e.YNc(14,La,3,3,"ng-container",5),e.YNc(15,d1,2,3,"ng-template",null,6,e.W1O),e.YNc(17,zc,1,2,"ng-template",null,7,e.W1O),e.YNc(19,dr,2,0,"ng-template",null,8,e.W1O)),2&d){const z=e.MAs(16),se=e.MAs(18);e.Q6J("nzGutter",e.DdM(38,sa)),e.xp6(1),e.Q6J("ngIf",e.lcZ(2,20,c.showTypeSelect$)),e.xp6(2),e.Q6J("ngIf",e.lcZ(4,22,c.showTypeSelect$)),e.xp6(3),e.Q6J("cvcMinSearchStrLength",c.props.minSearchStrLength)("cvcSelectMode",c.props.isMultiSelect?"multiple":"default")("cvcCustomTemplate",z)("cvcFormControl",c.formControl)("cvcFormlyAttributes",c.field)("cvcEntityName",c.props.entityName)("cvcPlaceholder",e.lcZ(7,24,c.placeholder$))("cvcResults",e.lcZ(8,26,c.result$))("cvcOptions",e.lcZ(9,28,c.selectOption$))("cvcParamName",e.lcZ(10,30,c.sourceTypeName$))("cvcShowError",c.showError)("cvcDisabled",c.props.disabled)("cvcLoading",e.lcZ(11,32,c.isLoading$))("cvcAddEntity",se)("cvcAddEntityModel",e.lcZ(12,34,c.onModel$))("cvcSelectOpen",e.lcZ(13,36,c.selectOpen$)),e.xp6(8),e.Q6J("ngrxLet",c.onSearch$)}},dependencies:[S.sg,S.O5,S.RF,S.n9,t.JJ,t.On,P.eJ,Tt.Ip,Tt.Vq,O.t3,O.SK,he.ZU,je,Mt.J,Zr,P.fM,H.A],styles:[".prefix[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{text-align:right;line-height:28px;color:#999}"],changeDetection:0});const Os={types:[{name:"source-select",wrappers:["form-field"],component:Eo,defaultOptions:{props:{label:"Source"}}},{name:"source-multi-select",wrappers:["form-field"],component:Eo,defaultOptions:{props:{label:"Sources",isMultiSelect:!0}}}]};class Ra{}function ca(v){class d extends v{configureStringTagField(){this.onValueChange$?(this.tagLabel$=new Ze.x,this.onValueChange$.pipe((0,Ae.t)(this)).subscribe(z=>{this.tagLabel$.next(z?z.toString():void 0)}),this.onTagClose$=new Ze.x,this.onTagClose$.pipe((0,Ae.t)(this)).subscribe(z=>{this.formControl.setValue(void 0),this.tagLabel$.next(void 0)})):console.error(`${this.field.id} cannot find onValueChange$ Subject, ensure configureBaseField() has been called before configureDisplayStringTag in its AfterViewInit hook.`)}}return d.\u0275fac=function(){let c;return function(se){return(c||(c=e.n5z(d)))(se||d)}}(),d.\u0275prov=e.Yz7({token:d,factory:d.\u0275fac}),d}function p1(v,d){}function Va(v,d){if(1&v){const c=e.EpF();e.TgZ(0,"span",4)(1,"nz-tag",5),e.NdJ("nzOnClose",function(se){e.CHM(c);const mt=e.oxw();return e.KtG(mt.cvcOnClose.next(se))}),e.YNc(2,p1,0,0,"ng-template",6),e.qZA()()}if(2&v){const c=e.oxw(),z=e.MAs(4);e.xp6(1),e.Q6J("nzMode",c.cvcMode),e.xp6(1),e.Q6J("ngTemplateOutlet",z)}}function Pu(v,d){}function Ba(v,d){if(1&v){const c=e.EpF();e.TgZ(0,"span",7)(1,"nz-tag",5),e.NdJ("nzOnClose",function(se){e.CHM(c);const mt=e.oxw();return e.KtG(mt.cvcOnClose.next(se))}),e.YNc(2,Pu,0,0,"ng-template",6),e.qZA()()}if(2&v){e.oxw();const c=e.MAs(4);e.xp6(1),e.Q6J("nzMode","closeable"),e.xp6(1),e.Q6J("ngTemplateOutlet",c)}}function ed(v,d){}function Ha(v,d){if(1&v&&(e.TgZ(0,"span",8),e.YNc(1,ed,0,0,"ng-template",6),e.qZA()),2&v){e.oxw();const c=e.MAs(4);e.xp6(1),e.Q6J("ngTemplateOutlet",c)}}function f1(v,d){1&v&&e._UZ(0,"i",11)}function Tc(v,d){if(1&v&&(e.YNc(0,f1,1,0,"i",9),e._UZ(1,"span",10),e.ALo(2,"highlightTypeahead")),2&v){const c=e.oxw();e.Q6J("ngIf",!c.cvcLabel),e.xp6(1),e.Q6J("innerHtml",c.cvcLabel?e.xi3(2,2,c.cvcLabel,c.cvcEmphasize):"?STRING?",e.oJD)}}Ra.\u0275fac=function(d){return new(d||Ra)},Ra.\u0275mod=e.oAB({type:Ra}),Ra.\u0275inj=e.cJS({imports:[S.ez,t.u5,t.UX,P._N,P.pP,m.X0.forChild(Os),on.L,xn.sL,ul.aF,Tt.LV,Vn.$6,ci.Qp,gt.PV,Pe.o7,O.Jb,Et.cg,Jt.zf,s.U5,ye.ic,he.ZJ,X1.S,bt.X,Xn.g,yt,En,ct.s,ot.x]});class Hs{constructor(){this.cvcMode="default",this.cvcContext="default",this.cvcOnClose=new e.vpe}}function la(v,d){if(1&v){const c=e.EpF();e.TgZ(0,"cvc-string-tag",3),e.NdJ("cvcOnClose",function(){const mt=e.CHM(c).$implicit,Vt=e.oxw();return e.KtG(Vt.tagClosed(mt))}),e.qZA()}if(2&v){const c=d.$implicit;e.Q6J("cvcMode","closeable")("cvcLabel",c)}}Hs.\u0275fac=function(d){return new(d||Hs)},Hs.\u0275cmp=e.Xpm({type:Hs,selectors:[["cvc-string-tag"]],inputs:{cvcLabel:"cvcLabel",cvcEmphasize:"cvcEmphasize",cvcMode:"cvcMode",cvcContext:"cvcContext"},outputs:{cvcOnClose:"cvcOnClose"},decls:5,vars:3,consts:[["class","default",4,"ngIf"],["class","select-item",4,"ngIf"],["class","multi-select-item",4,"ngIf"],["tagContent",""],[1,"default"],[3,"nzMode","nzOnClose"],[3,"ngTemplateOutlet"],[1,"select-item"],[1,"multi-select-item"],["nz-icon","","nzType","question-circle","nzTheme","outline",4,"ngIf"],[3,"innerHtml"],["nz-icon","","nzType","question-circle","nzTheme","outline"]],template:function(d,c){1&d&&(e.YNc(0,Va,3,2,"span",0),e.YNc(1,Ba,3,2,"span",1),e.YNc(2,Ha,2,1,"span",2),e.YNc(3,Tc,3,5,"ng-template",null,3,e.W1O)),2&d&&(e.Q6J("ngIf","default"===c.cvcContext),e.xp6(1),e.Q6J("ngIf","select-item"===c.cvcContext),e.xp6(1),e.Q6J("ngIf","multi-select-item"===c.cvcContext))},dependencies:[S.O5,S.tP,gt.Ls,bt.j,H.A]});const m1=_t(Ut(),ca);class hr extends m1{constructor(d){super(),this.cdr=d,this.defaultOptions={modelOptions:{updateOn:"blur"},props:{label:"Enter value",placeholder:"Enter value and hit Return"}},this.tags$=new Ze.x,this.values=new Set}onEnter(d){let c=d.target;c.value&&(this.values.add(c.value),c.value="");let z=Array.from(this.values);this.tags$.next(z),this.formControl.setValue(z)}tagClosed(d){this.values.delete(d);let c=Array.from(this.values);this.tags$.next(c),this.formControl.setValue(c),this.tags$.next(c)}ngAfterViewInit(){this.configureBaseField(),this.configureStringTagField(),this.formControl.value&&Array.isArray(this.formControl.value)&&(this.formControl.value.forEach(d=>this.values.add(d)),this.tags$.next(this.formControl.value),this.cdr.detectChanges())}}hr.\u0275fac=function(d){return new(d||hr)(e.Y36(e.sBO))},hr.\u0275cmp=e.Xpm({type:hr,selectors:[["cvc-tag-input"]],features:[e.qOj],decls:5,vars:6,consts:[[3,"cvcMode","cvcLabel","cvcOnClose",4,"ngFor","ngForOf"],["nz-input","",3,"placeholder","keydown.enter"],["hidden","","nz-input","",3,"formControl","formlyAttributes"],[3,"cvcMode","cvcLabel","cvcOnClose"]],template:function(d,c){1&d&&(e.TgZ(0,"div"),e.YNc(1,la,1,2,"cvc-string-tag",0),e.ALo(2,"ngrxPush"),e.TgZ(3,"input",1),e.NdJ("keydown.enter",function(se){return c.onEnter(se)}),e.qZA()(),e._UZ(4,"input",2)),2&d&&(e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,4,c.tags$)),e.xp6(2),e.Q6J("placeholder",c.props.placeholder),e.xp6(1),e.Q6J("formControl",c.formControl)("formlyAttributes",c.field))},dependencies:[S.sg,t.Fj,t.JJ,t.oH,m.JD,Pe.Zp,Hs,P.fM],changeDetection:0});class ws{}ws.\u0275fac=function(d){return new(d||ws)},ws.\u0275mod=e.oAB({type:ws}),ws.\u0275inj=e.cJS({imports:[S.ez,gt.PV,bt.X,ct.s]});const bc={types:[{name:"tag-input",wrappers:["form-field"],component:hr},{name:"tag-multi-input",wrappers:["form-field"],component:hr,defaultOptions:{props:{isRepeatItem:!0}}}]};class ua{}ua.\u0275fac=function(d){return new(d||ua)},ua.\u0275mod=e.oAB({type:ua}),ua.\u0275inj=e.cJS({imports:[S.ez,t.UX,P._N,P.pP,m.X0.forChild(bc),$e.F,Pe.o7,s.U5,ws]});const da=_t(Ut());class $a extends da{constructor(){super(...arguments),this.defaultOptions={props:{label:"TEXTAREA!"}}}}$a.\u0275fac=function(){let v;return function(c){return(v||(v=e.n5z($a)))(c||$a)}}(),$a.\u0275cmp=e.Xpm({type:$a,selectors:[["formly-field-nz-textarea"]],features:[e.qOj],decls:1,vars:3,consts:[["nz-input","",3,"rows","formControl","formlyAttributes"]],template:function(d,c){1&d&&e._UZ(0,"textarea",0),2&d&&e.Q6J("rows",c.props.rows?c.props.rows:2)("formControl",c.formControl)("formlyAttributes",c.field)},dependencies:[t.Fj,t.JJ,t.oH,m.JD,Pe.Zp],encapsulation:2,changeDetection:0});const fs={types:[{name:"textarea",component:$a,wrappers:["form-field"]}]};class ha{}var Jr;function g1(v,d){1&v&&e._UZ(0,"span",7)}function pa(v,d){1&v&&e._UZ(0,"span",8)}ha.\u0275fac=function(d){return new(d||ha)},ha.\u0275mod=e.oAB({type:ha}),ha.\u0275inj=e.cJS({imports:[S.ez,t.UX,m.X0.forChild(fs),Pe.o7,yt]});const v1=function(){return[0,0]},Mc={name:void 0};let Iu=((Jr=class{set cvcSearchString(d){d&&this.searchString$.next(d)}constructor(d,c){this.query=d,this.errors=c,this.cvcOnCreate=new e.vpe,this.model=Mc,this.form=new t.nJ({}),this.options={},this.onSubmit$=new Ze.x,this.searchString$=new it.X(void 0),this.queryMutator=new Rt.U(this.errors),this.isSubmitting$=new it.X(!1),this.submitSuccess$=new it.X(!1),this.submitError$=new it.X([]),this.addTherapyMutator=new Rt.U(this.errors),this.fields=[{key:"name",props:{hidden:!0,required:!0}}],this.searchString$.pipe((0,Ae.t)(this)).subscribe(z=>{this.model.name=z}),this.onSubmit$.pipe((0,Ae.t)(this)).subscribe(z=>{console.log("therapy-quick-add form model submitted.",z),this.submitTherapy(z)})}submitTherapy(d){if(!d.name)return void console.error("therapy-quick-add form submitTherapy requires model with valid name.");let c=this.addTherapyMutator.mutate(this.query,{name:d.name},{},z=>{console.log("therapy-quick-add submit data callback",z),z.addTherapy&&this.cvcOnCreate.next(z.addTherapy.therapy.id)});c.submitSuccess$.pipe((0,Ae.t)(this)).subscribe(z=>{console.log("therapy-quick-add submitSuccess$",z),this.submitSuccess$.next(z)}),c.submitError$.pipe((0,Ae.t)(this)).subscribe(z=>{console.log("therapy-quick-add submitError$",z),this.submitError$.next(z)}),c.isSubmitting$.pipe((0,Ae.t)(this)).subscribe(z=>{this.isSubmitting$.next(z)})}}).\u0275fac=function(d){return new(d||Jr)(e.Y36(Sn.Y_K),e.Y36(Qt.Y))},Jr.\u0275cmp=e.Xpm({type:Jr,selectors:[["cvc-therapy-quick-add-form"]],inputs:{cvcSearchString:"cvcSearchString"},outputs:{cvcOnCreate:"cvcOnCreate"},decls:14,vars:17,consts:[[3,"formGroup","ngSubmit"],[3,"nzGutter"],["nzSpan","24"],[3,"form","fields","model","options","modelChange"],["nz-button","","nzType","primary","nzBlock","",3,"disabled"],["nz-icon","","nzType","plus-circle","nzTheme","outline",4,"ngIf"],["nz-icon","","nzType","loading","nzTheme","outline",4,"ngIf"],["nz-icon","","nzType","plus-circle","nzTheme","outline"],["nz-icon","","nzType","loading","nzTheme","outline"]],template:function(d,c){1&d&&(e.TgZ(0,"form",0),e.NdJ("ngSubmit",function(){return c.onSubmit$.next(c.model)}),e.TgZ(1,"nz-row",1)(2,"nz-col",2)(3,"formly-form",3),e.NdJ("modelChange",function(se){return c.model=se}),e.qZA()(),e.TgZ(4,"nz-col",2)(5,"button",4),e.YNc(6,g1,1,0,"span",5),e.ALo(7,"ngrxPush"),e.YNc(8,pa,1,0,"span",6),e.ALo(9,"ngrxPush"),e._uU(10," Create Therapy\xa0"),e.TgZ(11,"i"),e._uU(12),e.ALo(13,"ngrxPush"),e.qZA()()()()()),2&d&&(e.Q6J("formGroup",c.form),e.xp6(1),e.Q6J("nzGutter",e.DdM(16,v1)),e.xp6(2),e.Q6J("form",c.form)("fields",c.fields)("model",c.model)("options",c.options),e.xp6(2),e.Q6J("disabled",!c.form.valid),e.xp6(1),e.Q6J("ngIf",!e.lcZ(7,10,c.isSubmitting$)),e.xp6(2),e.Q6J("ngIf",e.lcZ(9,12,c.isSubmitting$)),e.xp6(4),e.Oqu(e.lcZ(13,14,c.searchString$)))},dependencies:[S.O5,t._Y,t.JL,t.sg,m.T7,xn.ix,fn.w,hn.dQ,gt.Ls,O.t3,O.SK,P.fM],encapsulation:2,changeDetection:0}),Jr);Iu=(0,ze.gn)([(0,Ae.c)()],Iu);const Sc=["optionTemplates"];function _1(v,d){if(1&v&&(e.ynx(0),e.TgZ(1,"strong"),e._uU(2,"NCIt ID:"),e.qZA(),e._UZ(3,"span",9),e.ALo(4,"highlightTypeahead"),e.BQk()),2&v){const c=e.oxw(2).$implicit,z=e.oxw().ngrxLet;e.xp6(3),e.Q6J("innerHtml",e.xi3(4,1,c.ncitId,z),e.oJD)}}function Ec(v,d){if(1&v&&(e.ynx(0),e._uU(1," Aliases: "),e.TgZ(2,"em"),e._UZ(3,"span",10),e.ALo(4,"highlightTypeahead"),e.qZA(),e.BQk()),2&v){const c=e.oxw(2).$implicit,z=e.oxw().ngrxLet;e.xp6(3),e.Q6J("innerHtml",e.xi3(4,1,c.therapyAliases.join(", "),z),e.oJD)}}function Au(v,d){if(1&v&&(e._UZ(0,"cvc-entity-tag",6),e.TgZ(1,"span",7),e.YNc(2,_1,5,4,"ng-container",8),e.YNc(3,Ec,5,4,"ng-container",8),e.qZA()),2&v){const c=e.oxw().$implicit,z=e.oxw().ngrxLet;e.Q6J("cvcDisableLink",!0)("cvcCacheId",c.__typename+":"+c.id)("cvcEmphasize",z),e.xp6(2),e.Q6J("ngIf",c.ncitId),e.xp6(1),e.Q6J("ngIf",c.therapyAliases.length>0)}}function fa(v,d){1&v&&(e.ynx(0),e.YNc(1,Au,4,5,"ng-template",null,5,e.W1O),e.BQk())}function Fu(v,d){if(1&v&&(e.ynx(0),e.YNc(1,fa,3,0,"ng-container",4),e.ALo(2,"ngrxPush"),e.BQk()),2&v){const c=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,c.result$))}}function ma(v,d){if(1&v){const c=e.EpF();e.TgZ(0,"div",11)(1,"cvc-entity-tag",12),e.NdJ("cvcOnClose",function(){const mt=e.CHM(c).$implicit,Vt=e.oxw();return e.KtG(Vt.onTagClose$.next(mt.nzValue))}),e.qZA()()}if(2&v){const c=d.$implicit,z=e.oxw();e.xp6(1),e.Q6J("cvcCacheId","Therapy:"+c.nzValue)("cvcContext",z.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",z.props.isMultiSelect?"default":"closeable")}}function y1(v,d){if(1&v){const c=e.EpF();e.TgZ(0,"cvc-therapy-quick-add-form",13),e.NdJ("cvcOnCreate",function(se){e.CHM(c);const mt=e.oxw();return e.KtG(mt.onPopulate$.next(se))}),e.qZA()}2&v&&e.Q6J("cvcSearchString",d.$implicit)}const xc=_t(Ut(),vi());class Ya extends xc{constructor(d,c,z){super(),this.taq=d,this.tq=c,this.changeDetectorRef=z,this.defaultOptions={props:{entityName:{singular:"Therapy",plural:"Therapies"},isMultiSelect:!1,requireType:!0,tooltip:"Therapy or therapy combination which interacts with the specified variant",placeholder:"Search Therapies",requireTypePromptFn:(se,mt)=>`Select an ${se} Type to search associated Therapies`}},this.placeholder$=new it.X(void 0)}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEntitySelectField({typeaheadQuery:this.taq,typeaheadParam$:void 0,tagQuery:this.tq,getTypeaheadVarsFn:this.getTypeaheadVarsFn,getTypeaheadResultsFn:this.getTypeaheadResultsFn,getTagQueryVarsFn:this.getTagQueryVarsFn,getTagQueryResultsFn:this.getTagQueryResultsFn,getSelectedItemOptionFn:this.getSelectedItemOptionFn,getSelectOptionsFn:this.getSelectOptionsFn,changeDetectorRef:this.changeDetectorRef,selectOpen$:this.selectOpen$,selectComponent:this.selectComponent}),this.configurePlaceholders()}configureStateConnections(){if(this.state&&(this.stateEntityName=this.state.entityName,this.state.requires.requiresTherapy$?this.onRequiresTherapy$=this.state.requires.requiresTherapy$:console.warn(`${this.field.id} field's form provides a state, but could not find requiresTherapy$ subject to attach.`),this.props.requireType)){const d=`${this.stateEntityName.toLowerCase()}Type$`;this.state.fields[d]?this.onEntityType$=this.state.fields[d]:console.error(`${this.field.id} requireType is true, however form state does not provide Subject ${d}.`)}}configurePlaceholders(){this.placeholder$.next(this.props.placeholder),this.onRequiresTherapy$&&this.onEntityType$&&(0,ii.a)([this.onRequiresTherapy$,this.onEntityType$]).pipe((0,Pi.x)(),(0,Ae.t)(this)).subscribe(([d,c])=>{!d&&c?(this.props.required=!1,this.props.disabled=!0,this.props.description=`${(0,ue.E)(c)} ${this.state.entityName} does not include associated therapies`,this.props.extraType="prompt",this.resetField(),console.log("HERE"),this.cdr.markForCheck()):this.props.requireType&&!c?(this.props.required=!1,this.props.disabled=!0,this.props.description=this.props.requireTypePromptFn(this.state.entityName,this.props.isMultiSelect),this.props.extraType="prompt"):d?(this.props.required=!0,this.props.disabled=!1,this.props.description=void 0,this.props.extraType=void 0):(!d&&this.formControl.value||this.props.requireType&&!c&&this.formControl.value)&&(this.resetField(),console.log("HERE2"))})}getTypeaheadVarsFn(d){return{name:d}}getTypeaheadResultsFn(d){return d.data.therapyTypeahead}getTagQueryVarsFn(d){return{id:d}}getTagQueryResultsFn(d){return d.data.therapy}getSelectedItemOptionFn(d){return{value:d.id,label:d.name}}getSelectOptionsFn(d,c){return d.map((z,se)=>({label:c.get(se)||z.name,value:z.id}))}}Ya.\u0275fac=function(d){return new(d||Ya)(e.Y36(Sn.cIw),e.Y36(Sn.sjj),e.Y36(e.sBO))},Ya.\u0275cmp=e.Xpm({type:Ya,selectors:[["cvc-therapy-select"]],viewQuery:function(d,c){if(1&d&&e.Gf(Sc,5,e.Rgc),2&d){let z;e.iGM(z=e.CRH())&&(c.optionTemplates=z)}},features:[e.qOj],decls:12,vars:26,consts:[[3,"cvcAddEntity","cvcCustomTemplate","cvcDisabled","cvcEntityName","cvcFormControl","cvcFormlyAttributes","cvcLoading","cvcOptions","cvcPlaceholder","cvcResults","cvcSelectMode","cvcShowError","cvcSelectOpen","cvcOnSearch","cvcOnOpenChange","cvcOnModelChange"],[4,"ngrxLet"],["selectedTemplate",""],["addTherapy",""],[4,"ngFor","ngForOf"],["optionTemplates",""],[3,"cvcDisableLink","cvcCacheId","cvcEmphasize"],["nz-typography","","nzType","secondary"],[4,"ngIf"],[3,"innerHtml"],["nz-typography","","nzType","secondary",3,"innerHtml"],[1,"ant-select-selection-item-content"],[3,"cvcCacheId","cvcContext","cvcMode","cvcOnClose"],[3,"cvcSearchString","cvcOnCreate"]],template:function(d,c){if(1&d&&(e.TgZ(0,"cvc-entity-select",0),e.NdJ("cvcOnSearch",function(se){return c.onSearch$.next(se)})("cvcOnOpenChange",function(se){return c.onOpenChange$.next(se)})("cvcOnModelChange",function(se){return c.props.change&&c.props.change(c.field,se)}),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.ALo(3,"ngrxPush"),e.ALo(4,"ngrxPush"),e.ALo(5,"ngrxPush"),e.ALo(6,"ngrxPush"),e.qZA(),e.YNc(7,Fu,3,3,"ng-container",1),e.YNc(8,ma,2,3,"ng-template",null,2,e.W1O),e.YNc(10,y1,1,1,"ng-template",null,3,e.W1O)),2&d){const z=e.MAs(9),se=e.MAs(11);e.Q6J("cvcAddEntity",se)("cvcCustomTemplate",z)("cvcDisabled",c.onRequiresTherapy$&&!e.lcZ(1,14,c.onRequiresTherapy$))("cvcEntityName",c.props.entityName)("cvcFormControl",c.formControl)("cvcFormlyAttributes",c.field)("cvcLoading",e.lcZ(2,16,c.isLoading$))("cvcOptions",e.lcZ(3,18,c.selectOption$))("cvcPlaceholder",e.lcZ(4,20,c.placeholder$))("cvcResults",e.lcZ(5,22,c.result$))("cvcSelectMode",c.props.isMultiSelect?"multiple":"default")("cvcShowError",c.showError)("cvcSelectOpen",e.lcZ(6,24,c.selectOpen$)),e.xp6(7),e.Q6J("ngrxLet",c.onSearch$)}},dependencies:[S.sg,S.O5,P.eJ,he.ZU,je,Mt.J,Iu,P.fM,H.A],changeDetection:0});const Ua={types:[{name:"therapy-select",wrappers:["form-field"],component:Ya,defaultOptions:{props:{label:"Therapy"}}},{name:"therapy-multi-select",wrappers:["form-field"],component:Ya,defaultOptions:{props:{label:"Therapies",isMultiSelect:!0}}}]};class Kr{}Kr.\u0275fac=function(d){return new(d||Kr)},Kr.\u0275mod=e.oAB({type:Kr}),Kr.\u0275inj=e.cJS({imports:[S.ez,t.UX,P._N,P.pP,m.X0.forChild(Ua),on.L,xn.sL,Tt.LV,Vn.$6,ci.Qp,gt.PV,Pe.o7,O.Jb,Et.cg,Jt.zf,s.U5,ye.ic,he.ZJ,bt.X,yt,En,ct.s,ot.x]});const ja=["optionTemplates"];function Nu(v,d){if(1&v&&e._UZ(0,"cvc-attribute-tag",4),2&v){const c=e.oxw().$implicit;e.Q6J("cvcAttrValue",c)}}function Dc(v,d){1&v&&(e.ynx(0),e.YNc(1,Nu,1,1,"ng-template",null,3,e.W1O),e.BQk())}function td(v,d){if(1&v){const c=e.EpF();e.TgZ(0,"div",5)(1,"cvc-attribute-tag",6),e.NdJ("cvcOnClose",function(se){e.CHM(c);const mt=e.oxw();return e.KtG(mt.onTagClose$.next(se))}),e.qZA()()}if(2&v){const c=d.$implicit,z=e.oxw();e.xp6(1),e.Q6J("cvcAttrValue",c.nzValue)("cvcContext",z.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",z.props.isMultiSelect?"default":"closeable")}}const $s={DIAGNOSTIC:"Evidence pertains to a variant's impact on patient diagnosis (cancer subtype).",PREDICTIVE:"Evidence pertains to a variant's effect on therapeutic response.",PROGNOSTIC:"Evidence pertains to a variant's impact on disease progression, severity, or patient survival.",PREDISPOSING:"Evidence pertains to a germline variant's role in conferring susceptibility to disease (including pathogenicity evaluations).",ONCOGENIC:"Evidence pertains to a somatic variant's involvement in tumor pathogenesis as described by the Hallmarks of Cancer.",FUNCTIONAL:"Evidence pertains to a variant that alters biological function from the reference state."},C1=_t(Ut(),dt());class ms extends C1{constructor(d){super(),this.cdr=d,this.defaultOptions={props:{label:"ENTITY_NAME Type",entityName:{singular:"Entity",plural:"Entities"},placeholder:"Select an ENTITY_NAME Type",isMultiSelect:!1}},this.typeEnums$=new it.X([])}ngAfterViewInit(){this.configureBaseField(),this.state&&this.state.formReady$?this.state.formReady$.pipe((0,Ge.h)(d=>d),(0,Di.q)(1),(0,Ae.t)(this)).subscribe(d=>{this.configureField()}):this.configureField()}configureField(){this.onValueChange$.pipe((0,Ae.t)(this)).subscribe(d=>{d?(this.props.description=$s[d],this.props.extraType="description"):(this.props.description=void 0,this.props.extraType=void 0)}),this.state?(this.props.placeholder=this.props.placeholder.replace("ENTITY_NAME",this.state.entityName),this.props.label=this.props.label.replace("ENTITY_NAME",this.state.entityName),this.props.tooltip=`Type of clinical outcome associated with the ${this.state.entityName} statement.`,this.state.enums.entityType$?(this.state.enums.entityType$.pipe((0,Ae.t)(this)).subscribe(d=>{this.typeEnums$.next(d)}),this.optionTemplates||console.error(`${this.field.id} could not find its optionTemplates QueryList to populate its select options, so simple text labels will be displayed.`),this.optionTemplate$=this.optionTemplates?.changes.pipe((0,Ct.U)(d=>d.map(c=>c))),this.configureEnumSelect()):console.error(`${this.field.id} could not find state's enums.inputEnum$ to populate its select options.`)):console.error(`${this.field.id} requires a form state to configure itself, none was found.`)}configureEnumSelect(){this.configureEnumSelectField({optionEnum$:this.typeEnums$,optionTemplate$:this.optionTemplate$,changeDetectorRef:this.cdr})}}ms.\u0275fac=function(d){return new(d||ms)(e.Y36(e.sBO))},ms.\u0275cmp=e.Xpm({type:ms,selectors:[["cvc-type-select"]],viewQuery:function(d,c){if(1&d&&e.Gf(ja,5,e.Rgc),2&d){let z;e.iGM(z=e.CRH())&&(c.optionTemplates=z)}},features:[e.qOj],decls:6,vars:13,consts:[[3,"cvcFormControl","cvcFormlyAttributes","cvcSelectMode","cvcPlaceholder","cvcCustomTemplate","cvcOptions","cvcShowError","cvcDisabled"],[4,"ngFor","ngForOf"],["selectedTemplate",""],["optionTemplates",""],[3,"cvcAttrValue"],[1,"ant-select-selection-item-content"],[3,"cvcAttrValue","cvcContext","cvcMode","cvcOnClose"]],template:function(d,c){if(1&d&&(e._UZ(0,"cvc-enum-select",0),e.ALo(1,"ngrxPush"),e.YNc(2,Dc,3,0,"ng-container",1),e.ALo(3,"ngrxPush"),e.YNc(4,td,2,3,"ng-template",null,2,e.W1O)),2&d){const z=e.MAs(5);e.Q6J("cvcFormControl",c.formControl)("cvcFormlyAttributes",c.field)("cvcSelectMode",c.props.isMultiSelect?"multiple":"default")("cvcPlaceholder",c.props.placeholder)("cvcCustomTemplate",z)("cvcOptions",e.lcZ(1,9,c.selectOption$))("cvcShowError",c.showError)("cvcDisabled",c.props.disabled),e.xp6(2),e.Q6J("ngForOf",e.lcZ(3,11,c.typeEnums$))}},dependencies:[S.sg,Ue,At,P.fM],changeDetection:0});const ku={types:[{name:"type-select",wrappers:["form-field"],component:ms}]};class kr{}kr.\u0275fac=function(d){return new(d||kr)},kr.\u0275mod=e.oAB({type:kr}),kr.\u0275inj=e.cJS({imports:[S.ez,t.UX,P._N,P.pP,m.X0.forChild(ku),yt,ke,me]});var cu=a(6805);function ga(v,d){const c="object"==typeof d;return new Promise((z,se)=>{let Vt,mt=!1;v.subscribe({next:Mn=>{Vt=Mn,mt=!0},error:se,complete:()=>{mt?z(Vt):c?z(d.defaultValue):se(new cu.K)}})})}const va={isSelectCol:v=>"select"===v.type,isEntityTagCol:v=>"entity-tag"===v.type,isEnumTagCol:v=>"enum-tag"===v.type,isTextTagCol:v=>"text-tag"===v.type},Oc=v=>void 0!==v.sort,_a=v=>void 0!==v.filter,T1={diseases:Sn.pP7.DiseaseName,gene:Sn.pP7.EntrezSymbol,therapies:Sn.pP7.TherapyName,variant:Sn.pP7.VariantName},wc={diseases:"diseaseName",therapies:"therapyName",variant:"variantName",gene:"entrezSymbol"},du=["selected","id"];class Wa{constructor(){this.sortStreams=[],this.filterStreams=[],this.config=this.configureColumnStreams([{key:"selected",label:"Select",type:"select",width:"25px",align:"center",fixedLeft:!0,checkbox:{th:{showCheckbox:!1},td:{showCheckbox:!0}}},{hidden:!0,key:"id",label:"ID",type:"default",width:"30px"},{key:"variant",label:"Variant",type:"entity-tag",width:"215px",context:"variant",fixedLeft:!0,showStatus:!0,tag:{fullWidth:!0,truncateLabel:"200px"},sort:{default:"ascend"},filter:{inputType:"default",options:[{key:"Filter Variant Name",value:null}]}},{key:"gene",label:"Gene",type:"entity-tag",width:"135px",tag:{truncateLabel:"125px"},sort:{},filter:{inputType:"default",options:[{key:"Filter Gene Name",value:null}]}},{key:"diseases",label:"Diseases",type:"entity-tag",width:"250px",sort:{},tag:{maxTags:1,truncateLabel:"175px"},filter:{inputType:"default",typename:"Therapy",options:[{key:"Filter Therapy Names",value:null}]}},{key:"therapies",label:"Therapies",type:"entity-tag",width:"275px",sort:{},tag:{maxTags:2,truncateLabel:"150px"},filter:{inputType:"default",typename:"Therapy",options:[{key:"Filter Therapy Names",value:null}]}}])}get(){return this.config}getSortStreams(){return this.sortStreams}getFilterStreams(){return this.filterStreams}getAttributeFilters(d,c){return d.getValues().map(se=>({text:(0,ue.E)(se),value:se,byDefault:c===se}))}configureColumnStreams(d){return d.forEach(c=>{const z=c;if(Oc(z)&&(z.sort.changes=new it.X({key:z.key,value:z.sort.default??null}),this.sortStreams.push(z.sort.changes)),_a(z)){const se=z.filter.options.find(mt=>mt.byDefault)?.value;z.filter.changes=new it.X({key:z.key,value:se??null}),this.filterStreams.push(z.filter.changes)}}),d}}var Ys;let Ps=((Ys=class{set cvcTableScrollerToIndex(d){void 0!==d&&this.scrollToIndex(d)}set cvcTableScrollerToOffset(d){void 0!==d&&this.scrollToIndex(d)}constructor(d){this.host=d,this.cvcTableScrollerOnScroll=new e.vpe,this.cvcTableScrollerOnFetch=new e.vpe,this.cvcTableScrollerTargetHeight=140,this.cvcTableScrollerFetchCount=50,this.onLoadThrottleTime=500,this.onScrollThrottleTime=250,this.onScrollDebounceTime=300}ngAfterViewInit(){if(!this.host||!this.host.cdkVirtualScrollViewport)throw new Error("cvcTableScroller directive could not obtain reference to host cdkVirtualScrollViewport.");this.viewport=this.host.cdkVirtualScrollViewport,this.scrolled$=this.viewport.elementScrolled(),this.rendered$=this.viewport.renderedRangeStream,this.rendered$.pipe((0,ve.P)()).subscribe(()=>this.viewport.checkViewportSize()),this.scrolled$.pipe((0,gi.p)(this.onScrollThrottleTime,yo.z,{leading:!0,trailing:!0}),(0,Ln.b)(d=>this.cvcTableScrollerOnScroll.next("scroll")),(0,Xo.b)(this.onScrollDebounceTime),(0,Ae.t)(this)).subscribe(d=>{this.cvcTableScrollerOnScroll.next("stop")}),this.scrolled$.pipe((0,Ct.U)(d=>this.viewport.measureScrollOffset("bottom")),(0,ae.G)(),(0,Ge.h)(([d,c])=>c<d&&c<this.cvcTableScrollerTargetHeight),(0,gi.p)(this.onLoadThrottleTime),(0,Ae.t)(this)).subscribe(d=>{this.cvcTableScrollerOnScroll.next("bottom");try{this.loadMore(this.cvcTableScrollerPageInfo)}catch(c){console.error(c)}})}loadMore(d){const c=this.cvcTableScrollerQueryRef;if(!d&&c)throw new Error("table-scroll directive requires PageInfo to use provided QueryRef.");if(d&&!c)throw new Error("table-scroll directive requires valid QueryRef when PageInfo provided.");if(d&&c){const[z,se,mt]=[this.cvcTableScrollerFetchCount,d.hasNextPage,d.endCursor];if(!z||!mt)throw new Error("table-scroll PageInfo invalid.");if(!se)return;this.cvcTableScrollerOnFetch.next({first:z,after:mt})}}scrollToIndex(d){const[c,z]=[this.host,this.host.cdkVirtualScrollViewport];if(!c||!z)throw new Error("table-scroll scrollToIndex() cannot find host viewport.");z.scrollToIndex(d)}scrollToOffset(d){const[c,z]=[this.host,this.host.cdkVirtualScrollViewport];if(!c||!z)throw new Error("table-scroll scrollToOffset() cannot find host viewport.");z.scrollToOffset(d)}}).\u0275fac=function(d){return new(d||Ys)(e.Y36(Oi.N8))},Ys.\u0275dir=e.lG2({type:Ys,selectors:[["","cvcTableScroller",""]],inputs:{cvcTableScrollerTargetHeight:"cvcTableScrollerTargetHeight",cvcTableScrollerQueryRef:"cvcTableScrollerQueryRef",cvcTableScrollerPageInfo:"cvcTableScrollerPageInfo",cvcTableScrollerFetchCount:"cvcTableScrollerFetchCount",cvcTableScrollerToIndex:"cvcTableScrollerToIndex",cvcTableScrollerToOffset:"cvcTableScrollerToOffset"},outputs:{cvcTableScrollerOnScroll:"cvcTableScrollerOnScroll",cvcTableScrollerOnFetch:"cvcTableScrollerOnFetch"}}),Ys);function Za(v,d){1&v&&e._UZ(0,"span",8)}function Pc(v,d){if(1&v){const c=e.EpF();e.TgZ(0,"span",9),e.NdJ("click",function(){e.CHM(c),e.oxw(2);const se=e.MAs(3),mt=e.oxw();return se.value="",e.KtG(mt.cvcModelChange.next(null))}),e.qZA()}}function b1(v,d){if(1&v&&(e.YNc(0,Za,1,0,"span",6),e.YNc(1,Pc,1,0,"span",7)),2&v){e.oxw();const c=e.MAs(3);e.Q6J("ngIf",!c.value),e.xp6(1),e.Q6J("ngIf",c.value)}}function pl(v,d){if(1&v){const c=e.EpF();e.ynx(0),e.TgZ(1,"nz-input-group",2)(2,"input",3,4),e.NdJ("ngModelChange",function(se){e.CHM(c);const mt=e.oxw();return e.KtG(mt.cvcModelChange.next(se))}),e.qZA()(),e.YNc(4,b1,2,2,"ng-template",null,5,e.W1O),e.BQk()}if(2&v){const c=e.MAs(5),z=e.oxw();e.xp6(1),e.Q6J("nzSuffix",c),e.xp6(1),e.Q6J("placeholder",z.cvcPlaceholder)("ngModel",z.cvcModel)}}function M1(v,d){if(1&v){const c=e.EpF();e.TgZ(0,"nz-input-number-group",10)(1,"nz-input-number",11,4),e.NdJ("ngModelChange",function(se){e.CHM(c);const mt=e.oxw();return e.KtG(mt.cvcModelChange.next(""===se?null:se))}),e.qZA()()}if(2&v){const c=e.oxw();let z;e.xp6(1),e.Q6J("nzPlaceHolder",null!==(z=c.cvcPlaceholder)&&void 0!==z?z:"")("ngModel",c.cvcModel)("nzMin",1)("nzStep",1)}}Ps=(0,ze.gn)([(0,Ae.c)()],Ps);class qr{constructor(){this.cvcModel=null,this.cvcModelChange=new e.vpe,this.cvcInputType="default"}}function S1(v,d){if(1&v){const c=e.EpF();e.TgZ(0,"li",5),e.NdJ("click",function(){const mt=e.CHM(c).$implicit,Vt=e.oxw();return e.KtG(Vt.cvcOptionChange.next({key:Vt.cvcColumnKey,value:mt.value}))}),e._UZ(1,"cvc-attribute-tag",6),e.qZA()}if(2&v){const c=d.$implicit,z=e.oxw();e.Q6J("nzSelected",(null==z.cvcOption?null:z.cvcOption.value)===c.value),e.xp6(1),e.Q6J("cvcFullWidth",!0)("cvcChecked",(null==z.cvcOption?null:z.cvcOption.value)===c.value)("cvcAttrValue",c.value)}}qr.\u0275fac=function(d){return new(d||qr)},qr.\u0275cmp=e.Xpm({type:qr,selectors:[["cvc-table-filter-input"]],inputs:{cvcModel:"cvcModel",cvcInputType:"cvcInputType",cvcPlaceholder:"cvcPlaceholder"},outputs:{cvcModelChange:"cvcModelChange"},decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["numericInput",""],["nzSize","small",3,"nzSuffix"],["nz-input","",3,"placeholder","ngModel","ngModelChange"],["filterInput",""],["suffixIcon",""],["nz-icon","","nzType","search","style","color: #ddd",4,"ngIf"],["nz-icon","","class","ant-input-clear-icon","nzTheme","fill","nzType","close-circle",3,"click",4,"ngIf"],["nz-icon","","nzType","search",2,"color","#ddd"],["nz-icon","","nzTheme","fill","nzType","close-circle",1,"ant-input-clear-icon",3,"click"],["nzSize","small"],[2,"width","100%",3,"nzPlaceHolder","ngModel","nzMin","nzStep","ngModelChange"]],template:function(d,c){if(1&d&&(e.YNc(0,pl,6,3,"ng-container",0),e.YNc(1,M1,3,4,"ng-template",null,1,e.W1O)),2&d){const z=e.MAs(2);e.Q6J("ngIf","default"===c.cvcInputType)("ngIfElse",z)}},dependencies:[S.O5,t.Fj,t.JJ,t.On,fn.w,gt.Ls,Pe.Zp,Pe.gB,Pe.ke,Yo._V,Yo.Rb]});class gs{constructor(){this.cvcOptionChange=new e.vpe}}var Us;function ya(v,d){if(1&v&&e._UZ(0,"th",14),2&v){const c=d.ngIf;let z;e.Q6J("nzShowCheckbox",c.checkbox.th.showCheckbox||!1)("nzWidth",c.width)("nzAlign",null!==(z=c.align)&&void 0!==z?z:"left")("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1)}}function Ru(v,d){if(1&v){const c=e.EpF();e.TgZ(0,"th",15),e.NdJ("nzSortOrderChange",function(se){const Vt=e.CHM(c).ngIf;return e.KtG(Vt.sort.changes.next({key:Vt.key,value:se}))}),e.ALo(1,"ngrxPush"),e.TgZ(2,"span",16),e._uU(3),e.qZA()()}if(2&v){const c=d.ngIf;let z,se;e.Q6J("nzColumnKey",c.key)("nzAlign",null!==(z=c.align)&&void 0!==z?z:"left")("nzWidth",c.width)("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1)("nzShowSort",void 0!==c.sort)("nzSortFn",!0)("nzSortOrder",(null==(se=e.lcZ(1,10,c.sort.changes))?null:se.value)||null),e.xp6(2),e.Q6J("nzTooltipTitle",c.tooltip),e.xp6(1),e.hij(" ",c.label," ")}}function Ja(v,d){if(1&v&&(e.TgZ(0,"th",17),e._uU(1),e.qZA()),2&v){const c=d.ngIf;let z;e.Q6J("nzColumnKey",c.key)("nzAlign",null!==(z=c.align)&&void 0!==z?z:"left")("nzWidth",c.width)("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1)("nzTooltipTitle",c.tooltip),e.xp6(1),e.hij(" ",c.label," ")}}function Vu(v,d){if(1&v&&(e.TgZ(0,"th",17),e._uU(1),e.qZA()),2&v){const c=d.ngIf;let z;e.Q6J("nzColumnKey",c.key)("nzAlign",null!==(z=c.align)&&void 0!==z?z:"left")("nzWidth",c.width)("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1)("nzTooltipTitle",c.tooltip),e.xp6(1),e.hij(" ",c.label," ")}}function Xr(v,d){if(1&v&&(e.ynx(0),e.YNc(1,ya,1,5,"th",11),e.ALo(2,"guardType"),e.YNc(3,Ru,4,12,"th",12),e.ALo(4,"guardType"),e.YNc(5,Ja,2,7,"th",13),e.ALo(6,"guardType"),e.YNc(7,Vu,2,7,"th",13),e.ALo(8,"guardType"),e.BQk()),2&v){const c=e.oxw().$implicit,z=e.oxw(2);e.xp6(1),e.Q6J("ngIf",e.xi3(2,4,c,z.colGuards.isSelectCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(4,7,c,z.colGuards.isEntityTagCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(6,10,c,z.colGuards.isEnumTagCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(8,13,c,z.colGuards.isTextTagCol))}}function E1(v,d){if(1&v&&(e.ynx(0),e.YNc(1,Xr,9,16,"ng-container",10),e.BQk()),2&v){const c=d.$implicit;e.xp6(1),e.Q6J("ngIf",!c.hidden)}}function Ic(v,d){if(1&v&&(e.TgZ(0,"th",22),e._uU(1," \xa0 "),e.qZA()),2&v){const c=d.ngIf;let z;e.Q6J("nzColumnKey",c.key)("nzAlign",null!==(z=c.align)&&void 0!==z?z:"left")("nzWidth",c.width)("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1)}}function x1(v,d){if(1&v){const c=e.EpF();e.TgZ(0,"cvc-table-filter-input",25),e.NdJ("cvcModelChange",function(se){const Vt=e.CHM(c).ngIf,Mn=e.oxw().ngIf;return e.KtG(Vt.changes.next({key:Mn.key,value:se}))}),e.qZA()}if(2&v){const c=e.oxw().ngIf;e.Q6J("cvcInputType",c.filter.inputType)("cvcPlaceholder",c.filter.options[0].key)("cvcModel",c.filter.options[0].value)}}function Ac(v,d){if(1&v&&(e.TgZ(0,"th",23),e.YNc(1,x1,1,3,"cvc-table-filter-input",24),e.qZA()),2&v){const c=d.ngIf;let z;e.Q6J("nzColumnKey",c.key)("nzWidth",c.width)("nzAlign",null!==(z=c.align)&&void 0!==z?z:"left")("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1),e.xp6(1),e.Q6J("ngIf",c.filter)}}function Bu(v,d){if(1&v){const c=e.EpF();e.TgZ(0,"th",26,27),e.NdJ("nzSortOrderChange",function(se){const Vt=e.CHM(c).ngIf;return e.KtG(Vt.sort.changes.next({key:Vt.key,value:se}))}),e.ALo(2,"ngrxPush"),e.TgZ(3,"nz-filter-trigger",28,29),e.ALo(5,"ngrxPush"),e._UZ(6,"span",30),e.qZA(),e.TgZ(7,"nz-dropdown-menu",null,31)(9,"cvc-enum-filter-menu",32),e.NdJ("cvcOptionChange",function(se){const Vt=e.CHM(c).ngIf,Mn=e.MAs(4);return Vt.filter.changes.next(se),e.KtG(Mn.nzVisible=!1)}),e.ALo(10,"ngrxPush"),e.qZA()()()}if(2&v){const c=d.ngIf,z=e.MAs(8);let se,mt,Vt;e.Q6J("nzColumnKey",c.key)("nzWidth",c.width)("nzAlign",null!==(se=c.align)&&void 0!==se?se:"left")("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1)("nzShowSort",!0)("nzSortFn",!0)("nzSortOrder",(null==(mt=e.lcZ(2,15,c.sort.changes))?null:mt.value)||null)("nzShowFilter",void 0!==c.filter)("nzFilterFn",!0),e.xp6(3),e.Q6J("nzDropdownMenu",z)("nzActive",null!==(null==(Vt=e.lcZ(5,17,c.filter.changes))?null:Vt.value)),e.xp6(6),e.Q6J("cvcColumnKey",c.key)("cvcFilterOptions",c.filter.options)("cvcOption",e.lcZ(10,19,c.filter.changes))}}function xr(v,d){if(1&v){const c=e.EpF();e.TgZ(0,"th",33,27)(2,"nz-filter-trigger",28),e.ALo(3,"ngrxPush"),e._UZ(4,"span",34),e.qZA(),e.TgZ(5,"nz-dropdown-menu",null,35)(7,"div",36)(8,"div",37)(9,"cvc-table-filter-input",38),e.NdJ("cvcModelChange",function(se){const Vt=e.CHM(c).ngIf;return e.KtG(Vt.filter.changes.next({key:Vt.key,value:se}))}),e.qZA()()()()()}if(2&v){const c=d.ngIf,z=e.MAs(6);let se,mt;e.Q6J("nzColumnKey",c.key)("nzWidth",c.width)("nzAlign",null!==(se=c.align)&&void 0!==se?se:"left")("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1)("nzFilterFn",!0),e.xp6(2),e.Q6J("nzDropdownMenu",z)("nzActive",null!==(null==(mt=e.lcZ(3,10,c.filter.changes))?null:mt.value)),e.xp6(7),e.Q6J("cvcPlaceholder",c.filter.options[0].key)("cvcModel",c.filter.options[0].value)}}function Fc(v,d){if(1&v&&(e.ynx(0),e.YNc(1,Ic,2,5,"th",18),e.ALo(2,"guardType"),e.YNc(3,Ac,2,6,"th",19),e.ALo(4,"guardType"),e.YNc(5,Bu,11,21,"th",20),e.ALo(6,"guardType"),e.YNc(7,xr,10,12,"th",21),e.ALo(8,"guardType"),e.BQk()),2&v){const c=e.oxw().$implicit,z=e.oxw(2);e.xp6(1),e.Q6J("ngIf",e.xi3(2,4,c,z.colGuards.isSelectCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(4,7,c,z.colGuards.isEntityTagCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(6,10,c,z.colGuards.isEnumTagCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(8,13,c,z.colGuards.isTextTagCol))}}function Nc(v,d){if(1&v&&(e.ynx(0),e.YNc(1,Fc,9,16,"ng-container",10),e.BQk()),2&v){const c=d.$implicit;e.xp6(1),e.Q6J("ngIf",!c.hidden)}}function Dd(v,d){if(1&v&&(e.TgZ(0,"thead")(1,"tr",7),e.YNc(2,E1,2,1,"ng-container",8),e.qZA(),e.TgZ(3,"tr",9),e.YNc(4,Nc,2,1,"ng-container",8),e.qZA()()),2&v){const c=d.ngrxLet;e.xp6(2),e.Q6J("ngForOf",c),e.xp6(2),e.Q6J("ngForOf",c)}}function $l(v,d){if(1&v){const c=e.EpF();e.TgZ(0,"td",43),e.NdJ("nzCheckedChange",function(se){e.CHM(c);const mt=e.oxw(3).$implicit,Vt=e.oxw(2);return e.KtG(Vt.onRowSelected$.next({id:mt.id,selected:se}))}),e.qZA()}if(2&v){const c=d.ngIf,z=e.oxw(3).$implicit;let se;e.Q6J("nzChecked",z.selected)("nzAlign",null!==(se=c.align)&&void 0!==se?se:"left")("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1)}}function nd(v,d){1&v&&e.GkF(0)}gs.\u0275fac=function(d){return new(d||gs)},gs.\u0275cmp=e.Xpm({type:gs,selectors:[["cvc-enum-filter-menu"]],inputs:{cvcColumnKey:"cvcColumnKey",cvcFilterOptions:"cvcFilterOptions",cvcOption:"cvcOption"},outputs:{cvcOptionChange:"cvcOptionChange"},decls:6,vars:2,consts:[["nz-menu",""],["nz-menu-item","",3,"nzSelected","click",4,"ngFor","ngForOf"],[2,"padding","3px"],["nz-button","","nzType","default","nzBlock","","nzSize","small",3,"disabled","click"],["nz-icon","","nzType","retweet","nzTheme","outline"],["nz-menu-item","",3,"nzSelected","click"],["cvcContext","menu-item",3,"cvcFullWidth","cvcChecked","cvcAttrValue"]],template:function(d,c){1&d&&(e.TgZ(0,"ul",0),e.YNc(1,S1,2,4,"li",1),e.TgZ(2,"li",2)(3,"button",3),e.NdJ("click",function(){return c.cvcOptionChange.next({key:c.cvcColumnKey,value:null})}),e._UZ(4,"span",4),e._uU(5," Reset "),e.qZA()()()),2&d&&(e.xp6(1),e.Q6J("ngForOf",c.cvcFilterOptions),e.xp6(2),e.Q6J("disabled",null===(null==c.cvcOption?null:c.cvcOption.value)))},dependencies:[S.sg,Ue,xn.ix,fn.w,hn.dQ,gt.Ls,Wi.wO,Wi.r9],styles:[".typeahead-match[_ngcontent-%COMP%]{font-weight:700}[_nghost-%COMP%]     ul li:hover{background-color:#e6f7ff}[_nghost-%COMP%]     ul li.ant-dropdown-menu-item-selected{background-color:#1890ff}[_nghost-%COMP%]     ul li.ant-dropdown-menu-item-selected:active{background-color:#096dd9}"],changeDetection:0});const fl=function(v,d,c){return{$implicit:v,config:d,emphasize:c}};function id(v,d){if(1&v&&(e.ynx(0),e.YNc(1,nd,1,0,"ng-container",49),e.ALo(2,"isArray"),e.ALo(3,"ngrxPush"),e.BQk()),2&v){const c=e.oxw().ngIf,z=e.oxw().ngIf,se=e.MAs(3),mt=e.MAs(5),Vt=e.oxw(3).$implicit;let Mn;e.xp6(1),e.Q6J("ngTemplateOutlet",e.lcZ(2,2,Vt[c])?se:mt)("ngTemplateOutletContext",e.kEZ(6,fl,Vt[c],z,null==(Mn=e.lcZ(3,4,z.filter.changes))?null:Mn.value))}}function kc(v,d){if(1&v&&(e.ynx(0),e.YNc(1,id,4,10,"ng-container",48),e.BQk()),2&v){const c=d.ngIf;e.oxw();const z=e.MAs(7),se=e.oxw(3).$implicit;e.xp6(1),e.Q6J("ngIf",se[c])("ngIfElse",z)}}const ml=function(v,d,c,z,se){return{tagList:v,tag:d,showPopover:c,status:z,emphasize:se}};function gl(v,d){if(1&v&&(e.ynx(0),e._UZ(1,"cvc-entity-collection-tag",51),e.BQk()),2&v){const c=e.oxw(2),z=c.config,se=c.$implicit,mt=c.emphasize;e.oxw();const Vt=e.MAs(5),Mn=e.oxw(5);e.xp6(1),e.Q6J("cvcCollectionTagConfig",e.qbA(3,ml,se.slice(z.tag.maxTags,se.length),z.tag,!Mn.isScrolling,!0===z.showStatus?se.status:void 0,mt))("cvcTagTemplate",Vt)("cvcShowFullLabels",!0)}}function od(v,d){if(1&v&&(e.ynx(0),e._UZ(1,"cvc-entity-tag-list",50),e.YNc(2,gl,2,9,"ng-container",10),e.BQk()),2&v){const c=e.oxw(),z=c.config,se=c.$implicit,mt=c.emphasize;e.oxw();const Vt=e.MAs(5),Mn=e.oxw(5);e.xp6(1),e.Q6J("cvcTagTemplate",Vt)("cvcTagListConfig",e.qbA(3,ml,se.slice(0,z.tag.maxTags),z.tag,!Mn.isScrolling,!0===z.showStatus?se.status:void 0,mt)),e.xp6(1),e.Q6J("ngIf",se.slice(z.tag.maxTags,se.length).length>0)}}function vl(v,d){if(1&v&&e.YNc(0,od,3,9,"ng-container",48),2&v){const c=d.$implicit;e.oxw();const z=e.MAs(7);e.Q6J("ngIf",c.length>0)("ngIfElse",z)}}function hu(v,d){if(1&v&&e._UZ(0,"cvc-entity-tag",52),2&v){const c=d.$implicit,z=d.config,se=d.emphasize,mt=e.oxw(6);let Vt;e.Q6J("cvcTruncateLabel",null==z.tag?null:z.tag.truncateLabel)("cvcLinkableEntity",c)("cvcEmphasize",se)("cvcShowPopover",!mt.isScrolling)("cvcStatus",!0===z.showStatus?c.status:void 0)("cvcFullWidth",null!==(Vt=null==z.tag?null:z.tag.fullWidth)&&void 0!==Vt&&Vt)}}function Dr(v,d){if(1&v&&e._UZ(0,"cvc-empty-value",53),2&v){const c=e.oxw().ngIf;e.Q6J("cvcEmptyCategory",c.emptyValueCategory||"unspecified")}}function Ca(v,d){if(1&v&&(e.TgZ(0,"td",44),e.YNc(1,kc,2,2,"ng-container",10),e.YNc(2,vl,1,2,"ng-template",null,45,e.W1O),e.YNc(4,hu,1,6,"ng-template",null,46,e.W1O),e.YNc(6,Dr,1,1,"ng-template",null,47,e.W1O),e.qZA()),2&v){const c=d.ngIf;let z;e.Q6J("nzAlign",null!==(z=c.align)&&void 0!==z?z:"left")("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1),e.xp6(1),e.Q6J("ngIf",c.context||c.key)}}function Lc(v,d){if(1&v&&(e._UZ(0,"cvc-attribute-tag",56),e.ALo(1,"evidenceEnumDisplay")),2&v){const c=e.oxw().ngIf,z=e.oxw(3).$implicit,se=e.oxw(2);e.Q6J("cvcFullWidth",!0)("cvcAttrValue",z[c.key])("cvcTooltip",e.lcZ(1,3,!se.isScrolling&&z[c.key]))}}function D1(v,d){if(1&v&&e._UZ(0,"cvc-empty-value",53),2&v){const c=e.oxw().ngIf;e.Q6J("cvcEmptyCategory",c.emptyValueCategory||"unspecified")}}function vs(v,d){if(1&v&&(e.TgZ(0,"td",44),e.YNc(1,Lc,2,5,"cvc-attribute-tag",54),e.YNc(2,D1,1,1,"ng-template",null,55,e.W1O),e.qZA()),2&v){const c=d.ngIf,z=e.MAs(3),se=e.oxw(3).$implicit;let mt;e.Q6J("nzAlign",null!==(mt=c.align)&&void 0!==mt?mt:"left")("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1),e.xp6(1),e.Q6J("ngIf",se[c.key])("ngIfElse",z)}}function rd(v,d){if(1&v&&(e.TgZ(0,"nz-tag",59),e._UZ(1,"span",60),e.qZA()),2&v){const c=e.oxw().ngIf,z=e.oxw(3).$implicit;e.Q6J("nzTooltipTitle",z[c.key])}}function Yl(v,d){if(1&v&&e._UZ(0,"cvc-empty-value",53),2&v){const c=e.oxw().ngIf;e.Q6J("cvcEmptyCategory",c.emptyValueCategory||"unspecified")}}function sd(v,d){if(1&v&&(e.TgZ(0,"td",44),e.YNc(1,rd,2,1,"nz-tag",57),e.YNc(2,Yl,1,1,"ng-template",null,58,e.W1O),e.qZA()),2&v){const c=d.ngIf,z=e.MAs(3),se=e.oxw(3).$implicit;let mt;e.Q6J("nzAlign",null!==(mt=c.align)&&void 0!==mt?mt:"left")("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1),e.xp6(1),e.Q6J("ngIf",se[c.key])("ngIfElse",z)}}function Rc(v,d){if(1&v&&(e.ynx(0),e.YNc(1,$l,1,4,"td",41),e.ALo(2,"guardType"),e.YNc(3,Ca,8,4,"td",42),e.ALo(4,"guardType"),e.YNc(5,vs,4,5,"td",42),e.ALo(6,"guardType"),e.YNc(7,sd,4,5,"td",42),e.ALo(8,"guardType"),e.BQk()),2&v){const c=e.oxw().$implicit,z=e.oxw(3);e.xp6(1),e.Q6J("ngIf",e.xi3(2,4,c,z.colGuards.isSelectCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(4,7,c,z.colGuards.isEntityTagCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(6,10,c,z.colGuards.isEnumTagCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(8,13,c,z.colGuards.isTextTagCol))}}function pu(v,d){if(1&v&&(e.ynx(0),e.YNc(1,Rc,9,16,"ng-container",10),e.BQk()),2&v){const c=d.$implicit;e.xp6(1),e.Q6J("ngIf",!c.hidden)}}function _l(v,d){if(1&v&&(e.TgZ(0,"tr",40),e.YNc(1,pu,2,1,"ng-container",8),e.qZA()),2&v){const c=e.oxw().ngrxLet;e.xp6(1),e.Q6J("ngForOf",c)}}function Od(v,d){1&v&&(e.TgZ(0,"tbody"),e.YNc(1,_l,2,1,"ng-template",39),e.qZA())}function Vc(v,d){1&v&&e._UZ(0,"span",68)}function ad(v,d){if(1&v){const c=e.EpF();e.TgZ(0,"span",69),e.NdJ("click",function(){e.CHM(c),e.oxw(2);const se=e.MAs(3),mt=e.oxw().filter;return se.value="",e.KtG(mt.changes.next({key:mt.key,value:null}))}),e.qZA()}}function yl(v,d){if(1&v&&(e.YNc(0,Vc,1,0,"span",66),e.YNc(1,ad,1,0,"span",67)),2&v){e.oxw();const c=e.MAs(3);e.Q6J("ngIf",!c.value),e.xp6(1),e.Q6J("ngIf",c.value)}}function cd(v,d){if(1&v){const c=e.EpF();e.ynx(0),e.TgZ(1,"nz-input-group",62)(2,"input",63,64),e.NdJ("nzFilterChange",function(se){e.CHM(c);const mt=e.oxw().filter;return e.KtG(mt.changes.next({key:mt.key,value:se}))}),e.qZA()(),e.YNc(4,yl,2,2,"ng-template",null,65,e.W1O),e.BQk()}if(2&v){const c=e.MAs(5),z=e.oxw().filter;e.xp6(1),e.Q6J("nzSuffix",c),e.xp6(1),e.Q6J("placeholder",z.placeholder)("ngModel",z.defaultValue)}}function Cl(v,d){if(1&v){const c=e.EpF();e.TgZ(0,"nz-input-number-group",70)(1,"nz-input-number",71,64),e.NdJ("ngModelChange",function(se){e.CHM(c);const mt=e.oxw().filter;return e.KtG(mt.changes.next({key:mt.key,value:se}))}),e.qZA()()}if(2&v){const c=e.oxw().filter;e.xp6(1),e.Q6J("nzPlaceHolder",c.placeholder)("ngModel",c.defaultValue)("nzMin",1)("nzStep",1)}}function W(v,d){if(1&v&&(e.YNc(0,cd,6,3,"ng-container",48),e.YNc(1,Cl,3,4,"ng-template",null,61,e.W1O)),2&v){const c=d.filter,z=e.MAs(2);e.Q6J("ngIf",void 0===c.inputType||"default"===c.inputType)("ngIfElse",z)}}const $=function(){return[6,6]};function wd(v,d){1&v&&(e.TgZ(0,"nz-row",72)(1,"nz-col")(2,"span"),e._uU(3,"Use checkboxes to select or deselect EIDs"),e.qZA()()()),2&v&&e.Q6J("nzGutter",e.DdM(1,$))}function ld(v,d){1&v&&(e.TgZ(0,"nz-tag",83),e._UZ(1,"i",84),e.TgZ(2,"span"),e._uU(3,"Loading\u2026"),e.qZA()())}const Pd=function(v){return{$implicit:v}};function bo(v,d){if(1&v&&(e.TgZ(0,"nz-tag",87),e._UZ(1,"span",88),e.TgZ(2,"span",89),e._uU(3),e.qZA()()),2&v){e.oxw();const c=e.MAs(4),z=e.oxw().ngrxLet;e.xp6(2),e.Q6J("nzTooltipTitle",c)("nzTooltipTitleContext",e.VKq(3,Pd,z.query)),e.xp6(1),e.hij(" Query Error",z.query.length>1?"s":""," ")}}function fu(v,d){if(1&v&&(e.TgZ(0,"nz-tag",87)(1,"span",89)(2,"span",90)(3,"strong"),e._uU(4),e.qZA()()()()),2&v){e.oxw();const c=e.MAs(4),z=e.oxw().ngrxLet;e.xp6(1),e.Q6J("nzTooltipTitle",c)("nzTooltipTitleContext",e.VKq(3,Pd,z.network)),e.xp6(3),e.hij(" Network Error",z.query.length>1?"s":""," ")}}function ud(v,d){if(1&v&&(e.TgZ(0,"div"),e._uU(1),e.qZA()),2&v){const c=d.$implicit;e.xp6(1),e.hij(" ",c.message," ")}}function Zn(v,d){1&v&&e.YNc(0,ud,2,1,"div",8),2&v&&e.Q6J("ngForOf",d.$implicit)}function Ao(v,d){if(1&v&&(e.ynx(0),e.YNc(1,bo,4,5,"nz-tag",85),e.YNc(2,fu,5,5,"nz-tag",85),e.YNc(3,Zn,1,1,"ng-template",null,86,e.W1O),e.BQk()),2&v){const c=e.oxw().ngrxLet;e.xp6(1),e.Q6J("ngIf",c.query),e.xp6(1),e.Q6J("ngIf",c.network)}}function Hu(v,d){if(1&v&&(e.ynx(0),e.YNc(1,Ao,5,2,"ng-container",10),e.BQk()),2&v){const c=d.ngrxLet;e.xp6(1),e.Q6J("ngIf",c)}}function O1(v,d){if(1&v){const c=e.EpF();e.TgZ(0,"div",91)(1,"nz-checkbox-group",92),e.NdJ("ngModelChange",function(se){e.CHM(c);const mt=e.oxw(2);return e.KtG(mt.onPreferenceChange$.next(se))}),e.ALo(2,"ngrxPush"),e.qZA()()}if(2&v){const c=e.oxw(2);e.xp6(1),e.Q6J("ngModel",e.lcZ(2,1,c.setPreference$))}}function dd(v,d){if(1&v){const c=e.EpF();e.TgZ(0,"nz-row",72)(1,"nz-col",73),e.YNc(2,ld,4,0,"nz-tag",74),e.ALo(3,"ngrxPush"),e.ALo(4,"ngrxPush"),e._UZ(5,"cvc-no-more-rows",75),e.ALo(6,"ngrxPush"),e.qZA(),e.TgZ(7,"nz-col",73),e.YNc(8,Hu,2,1,"ng-container",3),e.qZA(),e.TgZ(9,"nz-col",73),e._UZ(10,"cvc-table-counts",76),e.qZA(),e.TgZ(11,"nz-col",77)(12,"nz-button-group")(13,"button",78),e.NdJ("click",function(){e.CHM(c);const se=e.oxw();return e.KtG(se.onResetFilter$.next())}),e._UZ(14,"span",79),e.qZA(),e.TgZ(15,"button",80),e._UZ(16,"span",81),e.qZA()(),e.YNc(17,O1,3,3,"ng-template",null,82,e.W1O),e.qZA()()}if(2&v){const c=e.MAs(18),z=e.oxw();e.Q6J("nzGutter",8),e.xp6(2),e.Q6J("ngIf",e.lcZ(3,7,z.loading$)&&e.lcZ(4,9,z.isFetchMore$)),e.xp6(3),e.Q6J("cvcShowTag",e.lcZ(6,11,z.noMoreRows$)),e.xp6(3),e.Q6J("ngrxLet",z.queryError$),e.xp6(2),e.Q6J("cvcTableCountsConnection",z.connection$),e.xp6(5),e.Q6J("nzPopoverContent",c)("nzPopoverTrigger","click")}}const ch=function(){return[]},hd=function(){return{x:"800px",y:"200px"}};let bi=((Us=class{constructor(d,c,z){this.queryGQL=d,this.apollo=c,this.cdr=z,this.cvcSelectedIdsChange=new e.vpe,this.isScrolling=!1,this.colGuards=va,this.onFetchMore$=new Ze.x,this.onPreferenceChange$=new it.X([]),this.onResetFilter$=new Ze.x,this.onRowSelected$=new Ze.x,this.onScroll$=new it.X("stop"),this.onSetSelectedRow$=new it.X(new Set),this.queryError$=new Ze.x,this.queryRequest$=new Ze.x,this.queryResult$=new Ti.t(1),this.isFetchMore$=new it.X(!1),this.noMoreRows$=new it.X(!1),this.scrollToIndex$=new Ze.x,this.tableConfig=new Wa;const se=(0,ii.a)(this.tableConfig.getFilterStreams()),mt=(0,ii.a)(this.tableConfig.getSortStreams()).pipe((0,Ge.h)(Vt=>Vt.filter(Mn=>null!==Mn.value).length<=1));this.refetch$=(0,ii.a)([mt,se]).pipe((0,Ct.U)(([Vt,Mn])=>({query:"refetch",sort:Vt,filter:Mn}))),this.fetchMore$=this.onFetchMore$.pipe((0,Ct.U)(Vt=>({query:"fetchMore",fetchMore:{...Vt}}))),(0,pr.T)(this.refetch$,this.fetchMore$).pipe((0,Xo.b)(50),(0,Ae.t)(this)).subscribe(Vt=>{const Mn=this.getQueryVars(Vt);this.queryRef?(this.queryError$.next({}),"refetch"===Vt.query?(this.isFetchMore$.next(!1),this.queryRef.refetch(Mn).then(Rn=>{(Rn.error||Rn.errors)&&this.queryError$.next(this.getRequestErrors(Rn))}).then(()=>{this.scrollToIndex$.next(0)})):(this.isFetchMore$.next(!0),this.queryRef.fetchMore({variables:Mn}).then(Rn=>{(Rn.error||Rn.errors)&&this.queryError$.next(this.getRequestErrors(Rn))}))):(this.isFetchMore$.next(!1),this.queryError$.next({}),this.queryRef=this.queryGQL.watch(Mn),this.queryRef.valueChanges.pipe((0,Ae.t)(this)).subscribe(Rn=>{this.queryResult$.next(Rn),(Rn.error||Rn.errors)&&this.queryError$.next(this.getRequestErrors(Rn))}))}),this.loading$=this.queryResult$.pipe((0,Gt.j)("loading"),(0,Pi.x)()),this.connection$=this.queryResult$.pipe((0,Gt.j)("data","browseVariants"),(0,Ge.h)(jn.ep)),this.pageInfo$=this.connection$.pipe((0,Gt.j)("pageInfo"),(0,Ge.h)(jn.ep)),this.row$=(0,ii.a)([this.connection$.pipe((0,Gt.j)("edges"),(0,Ge.h)(jn.ep),(0,Ct.U)(Vt=>Vt.map(Mn=>Mn.node))),this.onSetSelectedRow$]).pipe((0,Ct.U)(([Vt,Mn])=>Vt.map(Rn=>{if(Rn)return{...Rn,variant:{__typename:"Variant",id:Rn.id,name:Rn.name,link:Rn.link},gene:{__typename:"Gene",id:Rn.geneId,name:Rn.geneName,link:Rn.geneLink},selected:Mn.has(Rn.id)}}))),this.col$=new it.X(this.tableConfig.get()),this.setPreference$=this.col$.pipe((0,Ct.U)(Vt=>this.getColPrefsFromTableConfig(Vt))),this.onPreferenceChange$.pipe((0,tt.M)(this.col$),(0,Ct.U)(([Vt,Mn])=>this.getTableConfigFromColPrefs(Vt,Mn)),(0,Ae.t)(this)).subscribe(Vt=>{this.col$.next(Vt)}),this.onSetTableFilter$=new it.X([]),this.onSetTableFilter$.pipe((0,Ae.t)(this)).subscribe(Vt=>{const Mn=this.col$.getValue();Vt.forEach(Rn=>{const Vi=Mn.find(qi=>qi.key===Rn.key);if(void 0!==Vi.filter.inputType){const qi=Vi.filter.options[0];if(null===Rn.value)return Vi.filter.options=[{...qi,value:null}],void Vi.filter.changes.next(Rn);if(Array.isArray(Rn.value)&&0===Rn.value.length)return Vi.filter.options=[{...qi,value:null}],void Vi.filter.changes.next({...Rn,value:null});let Co;Array.isArray(Rn.value)?Rn.value.length>0&&(Co=Rn.value[0]):Co=Rn.value;const W1=Vi.filter.typename;if(!W1||!Co)return void console.error(`variant-manager requires column config '${Vi.key}' provide a typename for cvcTablePrefs Input to set its filter`);const qu=this.getEntityName(W1,Co);if(!qu)return;Vi.filter.options=[{...qi,value:qu}],Vi.filter.changes.next({...Rn,value:qu})}else _a(Vi)&&Vi.filter.changes.next(Rn)})}),this.onSetTablePref$=new it.X([]),this.onSetTablePref$.pipe((0,tt.M)(this.setPreference$),(0,Ct.U)(([Vt,Mn])=>{const Rn=[];return Vt.forEach(Vi=>{let qi=Mn.find(Co=>Co.value===Vi.value);qi?Rn.push({...qi,...Vi}):console.warn(`variant-manager onSetTablePref$ received updated preferences for column '${Vi.value}', but a column with that key could not be found.`)}),Rn}),(0,Ae.t)(this)).subscribe(Vt=>{this.onPreferenceChange$.next(Vt)}),this.onRowSelected$.pipe((0,tt.M)(this.onSetSelectedRow$),(0,Ae.t)(this)).subscribe(([Vt,Mn])=>{Vt.selected?Mn.add(Vt.id):Mn.delete(Vt.id),this.onSetSelectedRow$.next(Mn),this.cvcSelectedIdsChange.next(Array.from(Mn))}),this.onScroll$.pipe((0,Ct.U)(Vt=>"stop"!==Vt),(0,Pi.x)(),(0,Ae.t)(this)).subscribe(Vt=>{this.isScrolling=Vt,this.cdr.detectChanges()}),this.onScroll$.pipe((0,Ge.h)(Vt=>"bottom"===Vt),(0,tt.M)(this.pageInfo$),(0,Ct.U)(([Vt,Mn])=>Mn),(0,Ae.t)(this)).subscribe(Vt=>{Vt.hasNextPage||(this.noMoreRows$.next(!0),this.cdr.detectChanges(),setInterval(()=>this.noMoreRows$.next(!1)))})}ngAfterViewInit(){this.onResetFilter$.pipe((0,tt.M)((0,li.of)(this.tableConfig.get())),(0,Ae.t)(this)).subscribe(([d,c])=>{const z=[];c.forEach(se=>{if(Oc(se)&&se.sort.changes&&se.sort.changes.next({key:se.key,value:se.sort.default??null}),_a(se)){const mt=se.filter.options.find(Vt=>1==Vt.byDefault)?.value;se.filter.changes&&se.filter.changes.next({key:se.key,value:mt||null})}z.push(se)}),this.col$.next(z)})}getQueryVars(d){const c=this.getQueryFilterParams(d);return{...this.getQuerySortParams(d),...c,...d.fetchMore}}getQuerySortParams(d){if(!d.sort)return;const z=d.sort.find(mt=>null!==mt.value);return z?{sortBy:{column:this.getSortColumnFromColKey(z.key),direction:"ascend"===z.value?Sn.SrV.Asc:Sn.SrV.Desc||void 0}}:void 0}getQueryFilterParams(d){let c={};return d.filter&&d.filter.forEach(z=>{c[wc[z.key]||z.key]=null===z.value||""===z.value?void 0:z.value}),c}getRequestErrors(d){return{query:d.errors,network:d.error}}getTableConfigFromColPrefs(d,c){return c.forEach(z=>{if(du.find(mt=>mt===z.key))return;const se=d.find(mt=>mt.value===z.key);se&&(z.hidden=!se?.checked)}),[...c]}getColPrefsFromTableConfig(d){let c=[];return d.forEach(z=>{du.find(se=>se===z.key)||c.push({label:z.tooltip||z.label,value:z.key,checked:!z.hidden})}),c}getSortColumnFromColKey(d){return T1[d]}getEntityName(d,c){const z={id:`${d}:${c}`,fragment:er.Ps`
                fragment Linkable${d}Entity on ${d} {
                  id
                  name
                  link
                }`},se=this.apollo.client.readFragment(z);if(se)return se.name;console.error(`variant-manager onSetTableFilter$ could not find cached entity ${d}:${c} to populate input filter`)}trackByIndex(d,c){return c?.id}ngOnChanges(d){if(d.cvcTableSettings){const c=d.cvcTableSettings.currentValue;void 0!==c&&this.onSetTableFilter$.next(c.filters)}if(d.cvcSelectedIds){const c=d.cvcSelectedIds.currentValue,z=new Set;void 0!==c&&c.forEach(se=>z.add(se)),this.onSetSelectedRow$.next(z)}}}).\u0275fac=function(d){return new(d||Us)(e.Y36(Sn.XQi),e.Y36(co._M),e.Y36(e.sBO))},Us.\u0275cmp=e.Xpm({type:Us,selectors:[["cvc-variant-manager"]],inputs:{cvcTableSettings:"cvcTableSettings",cvcSelectedIds:"cvcSelectedIds"},outputs:{cvcSelectedIdsChange:"cvcSelectedIdsChange"},features:[e.TTD],decls:16,vars:27,consts:[["nzSize","small",3,"nzTitle","nzExtra"],["cvcTableScroller","",3,"nzData","cvcTableScrollerQueryRef","cvcTableScrollerPageInfo","cvcTableScrollerToIndex","nzScroll","nzVirtualForTrackBy","nzVirtualItemSize","nzSize","nzFrontPagination","nzShowPagination","nzLoading","cvcTableScrollerOnScroll","cvcTableScrollerOnFetch"],["virtualTable",""],[4,"ngrxLet"],["columnFilterInput",""],["cardTitle",""],["extraTemplate",""],[1,"col-header-row"],[4,"ngFor","ngForOf"],[1,"filter-row"],[4,"ngIf"],[3,"nzShowCheckbox","nzWidth","nzAlign","nzLeft","nzRight",4,"ngIf"],[3,"nzColumnKey","nzAlign","nzWidth","nzLeft","nzRight","nzShowSort","nzSortFn","nzSortOrder","nzSortOrderChange",4,"ngIf"],["nz-tooltip","",3,"nzColumnKey","nzAlign","nzWidth","nzLeft","nzRight","nzTooltipTitle",4,"ngIf"],[3,"nzShowCheckbox","nzWidth","nzAlign","nzLeft","nzRight"],[3,"nzColumnKey","nzAlign","nzWidth","nzLeft","nzRight","nzShowSort","nzSortFn","nzSortOrder","nzSortOrderChange"],["nz-tooltip","",1,"col-header-label",3,"nzTooltipTitle"],["nz-tooltip","",3,"nzColumnKey","nzAlign","nzWidth","nzLeft","nzRight","nzTooltipTitle"],[3,"nzColumnKey","nzAlign","nzWidth","nzLeft","nzRight",4,"ngIf"],[3,"nzColumnKey","nzWidth","nzAlign","nzLeft","nzRight",4,"ngIf"],["class","attribute-filter","nzCustomFilter","",3,"nzColumnKey","nzWidth","nzAlign","nzLeft","nzRight","nzShowSort","nzSortFn","nzSortOrder","nzShowFilter","nzFilterFn","nzSortOrderChange",4,"ngIf"],["class","attribute-filter","nzCustomFilter","",3,"nzColumnKey","nzWidth","nzAlign","nzLeft","nzRight","nzFilterFn",4,"ngIf"],[3,"nzColumnKey","nzAlign","nzWidth","nzLeft","nzRight"],[3,"nzColumnKey","nzWidth","nzAlign","nzLeft","nzRight"],[3,"cvcInputType","cvcPlaceholder","cvcModel","cvcModelChange",4,"ngIf"],[3,"cvcInputType","cvcPlaceholder","cvcModel","cvcModelChange"],["nzCustomFilter","",1,"attribute-filter",3,"nzColumnKey","nzWidth","nzAlign","nzLeft","nzRight","nzShowSort","nzSortFn","nzSortOrder","nzShowFilter","nzFilterFn","nzSortOrderChange"],["enumTableFilter",""],[3,"nzDropdownMenu","nzActive"],["enumTagFilterTrigger",""],["nz-icon","","nzType","filter","nzTheme","fill"],["enumFilterMenu","nzDropdownMenu"],[3,"cvcColumnKey","cvcFilterOptions","cvcOption","cvcOptionChange"],["nzCustomFilter","",1,"attribute-filter",3,"nzColumnKey","nzWidth","nzAlign","nzLeft","nzRight","nzFilterFn"],["nz-icon","","nzType","search"],["textTagFilterMenu","nzDropdownMenu"],[1,"ant-table-filter-dropdown"],[1,"custom-input-dropdown"],[3,"cvcPlaceholder","cvcModel","cvcModelChange"],["nz-virtual-scroll",""],[1,"data-row"],[3,"nzChecked","nzAlign","nzLeft","nzRight","nzCheckedChange",4,"ngIf"],[3,"nzAlign","nzLeft","nzRight",4,"ngIf"],[3,"nzChecked","nzAlign","nzLeft","nzRight","nzCheckedChange"],[3,"nzAlign","nzLeft","nzRight"],["entityTagList",""],["entityTag",""],["emptyEntityTagCell",""],[4,"ngIf","ngIfElse"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"cvcTagTemplate","cvcTagListConfig"],[3,"cvcCollectionTagConfig","cvcTagTemplate","cvcShowFullLabels"],[3,"cvcTruncateLabel","cvcLinkableEntity","cvcEmphasize","cvcShowPopover","cvcStatus","cvcFullWidth"],[3,"cvcEmptyCategory"],["cvcContext","compact",3,"cvcFullWidth","cvcAttrValue","cvcTooltip",4,"ngIf","ngIfElse"],["emptyEnumTagCell",""],["cvcContext","compact",3,"cvcFullWidth","cvcAttrValue","cvcTooltip"],["nz-tooltip","","style","width: 100%; cursor: help; color: #595959",3,"nzTooltipTitle",4,"ngIf","ngIfElse"],["emptyTextTagCell",""],["nz-tooltip","",2,"width","100%","cursor","help","color","#595959",3,"nzTooltipTitle"],["nz-icon","","nzType","align-left","nzTheme","outline"],["numericInput",""],["nzSize","small",3,"nzSuffix"],["nz-input","",3,"placeholder","ngModel","nzFilterChange"],["filterInput",""],["suffixIcon",""],["nz-icon","","nzType","search","style","color: #ddd",4,"ngIf"],["nz-icon","","class","ant-input-clear-icon","nzTheme","fill","nzType","close-circle",3,"click",4,"ngIf"],["nz-icon","","nzType","search",2,"color","#ddd"],["nz-icon","","nzTheme","fill","nzType","close-circle",1,"ant-input-clear-icon",3,"click"],["nzSize","small"],[2,"width","100%",3,"nzPlaceHolder","ngModel","nzMin","nzStep","ngModelChange"],[3,"nzGutter"],["nzFlex","auto"],["nzColor","processing",4,"ngIf"],[3,"cvcShowTag"],[3,"cvcTableCountsConnection"],["nzFlex","35px"],["nz-button","","type","button","nzType","default","nzSize","small",3,"click"],["nz-icon","","nzType","retweet","nzTheme","outline"],["nz-button","","nz-popover","","nzPopoverTitle","Visible Columns","type","button","nzType","default","nzSize","small",3,"nzPopoverContent","nzPopoverTrigger"],["nz-icon","","nzType","setting","nzTheme","outline"],["prefsPopover",""],["nzColor","processing"],["nz-icon","","nzType","sync","nzSpin",""],["nzColor","error","style","margin-left: 12px",4,"ngIf"],["queryError",""],["nzColor","error",2,"margin-left","12px"],["nz-icon","","nzType","question-circle","nzTheme","outline"],["nz-tooltip","",2,"cursor","help",3,"nzTooltipTitle","nzTooltipTitleContext"],["nz-typography",""],[1,"prefs-popover"],[3,"ngModel","ngModelChange"]],template:function(d,c){if(1&d&&(e.TgZ(0,"nz-card",0)(1,"nz-table",1,2),e.NdJ("cvcTableScrollerOnScroll",function(se){return c.onScroll$.next(se)})("cvcTableScrollerOnFetch",function(se){return c.onFetchMore$.next(se)}),e.ALo(3,"ngrxPush"),e.ALo(4,"ngrxPush"),e.ALo(5,"ngrxPush"),e.ALo(6,"ngrxPush"),e.ALo(7,"ngrxPush"),e.YNc(8,Dd,5,2,"thead",3),e.YNc(9,Od,2,0,"tbody",3),e.qZA()(),e.YNc(10,W,3,2,"ng-template",null,4,e.W1O),e.YNc(12,wd,4,2,"ng-template",null,5,e.W1O),e.YNc(14,dd,19,13,"ng-template",null,6,e.W1O)),2&d){const z=e.MAs(13),se=e.MAs(15);e.Q6J("nzTitle",z)("nzExtra",se),e.xp6(1),e.Q6J("nzData",e.lcZ(3,15,c.row$)||e.DdM(25,ch))("cvcTableScrollerQueryRef",c.queryRef)("cvcTableScrollerPageInfo",e.lcZ(4,17,c.pageInfo$))("cvcTableScrollerToIndex",e.lcZ(5,19,c.scrollToIndex$))("nzScroll",e.DdM(26,hd))("nzVirtualForTrackBy",c.trackByIndex)("nzVirtualItemSize",28)("nzSize","small")("nzFrontPagination",!1)("nzShowPagination",!1)("nzLoading",e.lcZ(6,21,c.loading$)&&!e.lcZ(7,23,c.isFetchMore$)),e.xp6(7),e.Q6J("ngrxLet",c.col$),e.xp6(1),e.Q6J("ngrxLet",c.col$)}},dependencies:[S.sg,S.O5,S.tP,Mt.J,be,On,Ue,io,Bt.P,di.H,t.Fj,t.JJ,t.On,P.eJ,xn.ix,xn.fY,fn.w,hn.dQ,O.t3,O.SK,gt.Ls,Pe.Zp,Pe.gB,Pe.ke,he.ZU,ji.bd,Dt.ub,No.RR,Yo._V,Yo.Rb,Vn.lU,Oi.N8,Oi.qD,Oi.Uo,Oi._C,Oi.h7,Oi.Om,Oi.p0,Oi.$Z,Oi.zu,Oi.qn,Oi.Ql,Oi.UX,Oi.g6,bt.j,Et.SY,Ps,qr,gs,Wo,Qe.Do,nr,P.fM],styles:["[_nghost-%COMP%]{display:block}nz-card[_ngcontent-%COMP%]:first-of-type     .ant-card-body{padding:0;margin-top:1px}.table-info[_ngcontent-%COMP%]{margin-left:.5rem}tr.col-header-row[_ngcontent-%COMP%]   th.ant-table-cell[_ngcontent-%COMP%]{white-space:nowrap}tr.col-header-row[_ngcontent-%COMP%]   th.ant-table-cell.align-right[_ngcontent-%COMP%]     .ant-table-column-title{text-align:right}tr.filter-row[_ngcontent-%COMP%]   th.ant-table-cell[_ngcontent-%COMP%]{padding:3px 4px}tr.filter-row[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   nz-filter-trigger[_ngcontent-%COMP%]     span.ant-dropdown-trigger{margin-left:0;padding-right:12px}tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell[_ngcontent-%COMP%]{white-space:nowrap}tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell[_ngcontent-%COMP%]   .anticon.attribute-icon[_ngcontent-%COMP%]{color:#595959}tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell.overflow-ellipsis[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis}tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell.button-cell[_ngcontent-%COMP%]{padding:0}tr.data-row[_ngcontent-%COMP%]   td.align-right[_ngcontent-%COMP%], tr.col-header-row[_ngcontent-%COMP%]   th.ant-table-cell[_ngcontent-%COMP%]   .align-right[_ngcontent-%COMP%], tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell[_ngcontent-%COMP%]   .align-right[_ngcontent-%COMP%], tr.filter-row[_ngcontent-%COMP%]   th.ant-table-cell[_ngcontent-%COMP%]   .align-right[_ngcontent-%COMP%]{text-align:right}tr.data-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-of-type{padding-left:6px}tr.data-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-of-type   cvc-entity-tag[_ngcontent-%COMP%]{margin-left:6px}.ant-table-filter-dropdown[_ngcontent-%COMP%]{padding:8px}.prefs-popover[_ngcontent-%COMP%]     nz-checkbox-group:first-of-type label{display:block}.prefs-popover[_ngcontent-%COMP%]     nz-checkbox-group:first-of-type label span{display:inline-block}"],changeDetection:0}),Us);var Ul;function mu(v,d){if(1&v&&(e.ynx(0),e.TgZ(1,"span"),e._uU(2),e.qZA(),e.BQk()),2&v){const c=d.ngrxLet;e.xp6(2),e.Oqu(c.message)}}function $u(v,d){if(1&v&&e._uU(0),2&v){const c=e.oxw();e.Oqu(c.successMessage)}}bi=(0,ze.gn)([(0,Ae.c)()],bi);const Id=function(){return[0,0]};let zl=((Ul=class{set cvcGeneId(d){d&&this.geneId$.next(d)}set cvcGeneName(d){d&&this.geneName$.next(d)}set cvcSearchString(d){d&&this.searchString$.next(d)}constructor(d,c){this.query=d,this.errors=c,this.cvcOnCreate=new e.vpe,this.form=new t.nJ({}),this.model={name:""},this.formLayout="horizontal",this.options={formState:{formLayout:this.formLayout}},this.onSubmit$=new Ze.x,this.searchString$=new it.X(void 0),this.geneName$=new it.X(void 0),this.geneId$=new it.X(void 0),this.formMessageDisplay$=new it.X({message:"Variant does not exist, create it?"}),this.queryMutator=new Rt.U(this.errors),this.addVariantMutator=new Rt.U(this.errors),this.minNameLength=3,this.fields=[{key:"geneId",hide:!0,props:{required:!0}},{key:"name",hide:!0,props:{minLength:this.minNameLength,required:!0}}],this.geneId$.pipe((0,Ae.t)(this)).subscribe(z=>{this.model.geneId=z}),this.searchString$.pipe((0,Ae.t)(this)).subscribe(z=>{this.model.name=z,this.formMessageDisplay$.next(void 0!==z&&z.length<this.minNameLength?{message:`New Variant name must be at least ${this.minNameLength} characters.`}:{message:"Variant does not exist, create it?"})}),this.onSubmit$.pipe((0,Ae.t)(this)).subscribe(z=>{console.log("variant-quick-add form model submitted.",z),this.submitVariant(z)})}submitVariant(d){d.name&&d.geneId?this.mutationState=this.addVariantMutator.mutate(this.query,{name:d.name,geneId:d.geneId},{},c=>{console.log("variant-quick-add submit data callback",c),c.addVariant&&(this.formMessageDisplay$.next({message:void 0}),setTimeout(()=>{c&&c.addVariant&&this.cvcOnCreate.next(c.addVariant.variant.id)},1e3))}):console.error("variant-quick-add form submitVariant requires model with valid name and geneId.")}ngOnChanges(d){if(d.cvcGeneId){const c=d.cvcGeneId.currentValue;this.geneId$.next(c),this.model={...this.model,geneId:c}}d.cvcGeneName&&this.geneName$.next(d.cvcGeneName.currentValue),d.cvcSearchString&&(this.model={...this.model,name:d.cvcSearchString.currentValue})}}).\u0275fac=function(d){return new(d||Ul)(e.Y36(Sn.MCG),e.Y36(Qt.Y))},Ul.\u0275cmp=e.Xpm({type:Ul,selectors:[["cvc-variant-quick-add-form"]],inputs:{cvcGeneId:"cvcGeneId",cvcGeneName:"cvcGeneName",cvcSearchString:"cvcSearchString"},outputs:{cvcOnCreate:"cvcOnCreate"},features:[e.TTD],decls:18,vars:17,consts:[[4,"ngrxLet"],["entityType","Variant",3,"mutationState","successMessage"],["success",""],[3,"formGroup","ngSubmit"],[3,"nzGutter"],["nzSpan","24"],[3,"form","fields","model","options","modelChange"],["nz-button","","nzType","primary","nzBlock","",3,"disabled"]],template:function(d,c){if(1&d&&(e.YNc(0,mu,3,1,"ng-container",0),e.TgZ(1,"cvc-form-submission-status-display",1),e.YNc(2,$u,1,1,"ng-template",null,2,e.W1O),e.TgZ(4,"form",3),e.NdJ("ngSubmit",function(){return c.onSubmit$.next(c.model)}),e.TgZ(5,"nz-row",4)(6,"nz-col",5)(7,"formly-form",6),e.NdJ("modelChange",function(se){return c.model=se}),e.qZA()(),e.TgZ(8,"nz-col",5)(9,"button",7),e._uU(10," Add\xa0 "),e.TgZ(11,"strong"),e._uU(12),e.ALo(13,"ngrxPush"),e.qZA(),e._uU(14," \xa0Variant\xa0"),e.TgZ(15,"i"),e._uU(16),e.ALo(17,"ngrxPush"),e.qZA()()()()()()),2&d){const z=e.MAs(3);e.Q6J("ngrxLet",c.formMessageDisplay$),e.xp6(1),e.Q6J("mutationState",c.mutationState)("successMessage",z),e.xp6(3),e.Q6J("formGroup",c.form),e.xp6(1),e.Q6J("nzGutter",e.DdM(16,Id)),e.xp6(2),e.Q6J("form",c.form)("fields",c.fields)("model",c.model)("options",c.options),e.xp6(2),e.Q6J("disabled",!c.form.valid),e.xp6(3),e.Oqu(e.lcZ(13,12,c.geneName$)),e.xp6(4),e.Oqu(e.lcZ(17,14,c.searchString$))}},dependencies:[_n.F,m.T7,t._Y,t.JL,P.eJ,xn.ix,fn.w,hn.dQ,O.t3,O.SK,t.sg,P.fM],encapsulation:2,changeDetection:0}),Ul);zl=(0,ze.gn)([(0,Ae.c)()],zl);const Tl=["optionTemplates"],Ad=function(v,d){return{show:v,hide:d}};function bl(v,d){if(1&v){const c=e.EpF();e.TgZ(0,"nz-col",8)(1,"button",9),e.NdJ("click",function(){e.CHM(c);const se=e.oxw();return e.KtG(se.onShowMgrClick$.next())}),e._UZ(2,"span",10),e.ALo(3,"ngrxPush"),e.ALo(4,"ngrxPush"),e._uU(5," Manager "),e.qZA()()}if(2&v){const c=e.oxw();e.xp6(2),e.Q6J("ngClass",e.WLB(6,Ad,e.lcZ(3,2,c.showMgr$),!e.lcZ(4,4,c.showMgr$)))("nzType","caret-right")}}function Fd(v,d){if(1&v){const c=e.EpF();e.TgZ(0,"nz-col",11)(1,"cvc-variant-manager",12),e.NdJ("cvcSelectedIdsChange",function(se){e.CHM(c);const mt=e.oxw();return e.KtG(mt.onPopulate$.next(se))}),e.ALo(2,"ngrxPush"),e.qZA()()}if(2&v){const c=e.oxw();e.xp6(1),e.Q6J("cvcSelectedIds",e.lcZ(2,1,c.onVid$))}}function Nd(v,d){if(1&v&&(e.ynx(0),e.TgZ(1,"em"),e._UZ(2,"span",19),e.ALo(3,"highlightTypeahead"),e.qZA(),e.BQk()),2&v){const c=e.oxw(2).$implicit,z=e.oxw().ngrxLet;e.xp6(2),e.Q6J("innerHtml",e.xi3(3,1,c.variantAliases.join(", "),z),e.oJD)}}function Yu(v,d){1&v&&e._uU(0,"--")}function kd(v,d){if(1&v&&(e._UZ(0,"cvc-entity-tag",15),e.TgZ(1,"span",16),e._uU(2," Aliases: "),e.YNc(3,Nd,4,4,"ng-container",17),e.YNc(4,Yu,1,0,"ng-template",null,18,e.W1O),e.qZA()),2&v){const c=e.MAs(5),z=e.oxw().$implicit,se=e.oxw().ngrxLet;e.Q6J("cvcDisableLink",!0)("cvcCacheId",z.__typename+":"+z.id)("cvcEmphasize",se),e.xp6(3),e.Q6J("ngIf",z.variantAliases.length>0)("ngIfElse",c)}}function oi(v,d){1&v&&(e.ynx(0),e.YNc(1,kd,6,5,"ng-template",null,14,e.W1O),e.BQk())}function w1(v,d){if(1&v&&(e.ynx(0),e.YNc(1,oi,3,0,"ng-container",13),e.ALo(2,"ngrxPush"),e.BQk()),2&v){const c=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,c.result$))}}function Uu(v,d){if(1&v){const c=e.EpF();e.TgZ(0,"div",20)(1,"cvc-entity-tag",21),e.NdJ("cvcOnClose",function(){const mt=e.CHM(c).$implicit,Vt=e.oxw();return e.KtG(Vt.onTagClose$.next(mt.nzValue))}),e.qZA()()}if(2&v){const c=d.$implicit,z=e.oxw();e.xp6(1),e.Q6J("cvcCacheId","Variant:"+c.nzValue)("cvcContext",z.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",z.props.isMultiSelect?"default":"closeable")}}function P1(v,d){if(1&v){const c=e.EpF();e.TgZ(0,"cvc-variant-quick-add-form",22),e.NdJ("cvcOnCreate",function(se){e.CHM(c);const mt=e.oxw();return e.KtG(mt.onPopulate$.next(se))}),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.qZA()}if(2&v){const c=d.$implicit,z=e.oxw();e.Q6J("cvcSearchString",c)("cvcGeneId",e.lcZ(1,3,z.onGeneId$))("cvcGeneName",e.lcZ(2,5,z.onGeneName$))}}const gu=function(){return[6,6]},Ml=_t(Ut(),vi());class Sl extends Ml{constructor(d,c,z,se){super(),this.taq=d,this.tq=c,this.geneQuery=z,this.changeDetectorRef=se,this.onModel$=new ro.y,this.defaultOptions={props:{label:"Variant",placeholder:"Search Variants",requireGene:!0,requireGenePlaceholderFn:mt=>`Search ${mt} Variants`,requireGenePrompt:"Select a Gene to search its Variants",isMultiSelect:!1,entityName:{singular:"Variant",plural:"Variants"},showManagerBtn:!1}},this.onGeneName$=new it.X(void 0),this.onVid$=new Ti.t,this.onShowMgrClick$=new Ze.x,this.showMgr$=this.onShowMgrClick$.pipe((0,po.R)((mt,Vt)=>!mt,!1))}ngAfterViewInit(){this.configureBaseField(),this.configureEntitySelectField({typeaheadQuery:this.taq,tagQuery:this.tq,getTypeaheadVarsFn:this.getTypeaheadVarsFn,getTypeaheadResultsFn:this.getTypeaheadResultsFn,getTagQueryVarsFn:this.getTagQueryVarsFn,getTagQueryResultsFn:this.getTagQueryResultsFn,getSelectedItemOptionFn:this.getSelectedItemOptionFn,getSelectOptionsFn:this.getSelectOptionsFn,changeDetectorRef:this.changeDetectorRef,selectOpen$:this.selectOpen$,selectComponent:this.selectComponent}),this.state&&this.state.formReady$?this.state.formReady$.pipe((0,Ge.h)(d=>d),(0,Di.q)(1),(0,Ae.t)(this)).subscribe(d=>{this.configureField()}):this.configureField()}configureField(){this.configureStateConnections(),this.onVid$.pipe((0,Ae.t)(this)).subscribe(),this.onVid$.next(this.formControl.value),this.onModel$=(0,ii.a)([this.onGeneId$,this.onSearch$]).pipe((0,Ct.U)(([d,c])=>({geneId:d,name:c}))),this.onValueChange$.pipe((0,tt.M)(this.onVid$),(0,Ae.t)(this)).subscribe(([d,c])=>{Array.isArray(d)&&this.onVid$.next(d)})}configureStateConnections(){if(this.state&&this.props.requireGene){if(!this.state?.fields.geneId$)return void console.error(`${this.field.id} requireGene is set, but no geneId$ subject found on state.`);this.onGeneId$=this.state.fields.geneId$,this.onGeneId$.pipe((0,Ae.t)(this)).subscribe(d=>{this.onGeneId(d)})}}getTypeaheadVarsFn(d){return{name:d,geneId:this.selectedGeneId}}getTypeaheadResultsFn(d){return d.data.variants.nodes}getTagQueryVarsFn(d){return{variantId:d}}getTagQueryResultsFn(d){return d.data.variant}getSelectedItemOptionFn(d){return{value:d.id,label:d.name}}getSelectOptionsFn(d,c){return d.map((z,se)=>({label:c.get(se)||z.name,value:z.id}))}onGeneId(d){this.selectedGeneId=d,!d&&this.props.requireGene?(this.resetField(),this.props.description=this.props.requireGenePrompt,this.props.placeholder="Select A Gene",this.props.extraType="prompt",this.onGeneName$.next(void 0)):d&&(this.props.description=void 0,this.props.extraType=void 0,ga(this.geneQuery.fetch({geneId:d},{fetchPolicy:"cache-first"})).then(({data:c})=>{c?.gene?.name?(this.props.placeholder=this.props.requireGene?this.props.requireGenePlaceholderFn(c.gene.name):this.props.placeholder,this.onGeneName$.next(c.gene.name)):console.error(`${this.field.id} could not fetch gene name for Gene:${d}.`)}))}}Sl.\u0275fac=function(d){return new(d||Sl)(e.Y36(Sn.nSb),e.Y36(Sn.dDn),e.Y36(Sn.DzV),e.Y36(e.sBO))},Sl.\u0275cmp=e.Xpm({type:Sl,selectors:[["ng-component"]],viewQuery:function(d,c){if(1&d&&e.Gf(Tl,5,e.Rgc),2&d){let z;e.iGM(z=e.CRH())&&(c.optionTemplates=z)}},features:[e.qOj],decls:18,vars:36,consts:[[3,"nzGutter"],["nzFlex","auto"],[3,"cvcAddEntity","cvcAddEntityModel","cvcSelectMode","cvcCustomTemplate","cvcFormControl","cvcFormlyAttributes","cvcEntityName","cvcPlaceholder","cvcResults","cvcDisabled","cvcOptions","cvcSelectOpen","cvcShowError","cvcLoading","cvcParamName","cvcOnSearch","cvcOnOpenChange","cvcOnModelChange"],["nzFlex","50px",4,"ngIf"],["nzSpan","24","class","manager-drawer",4,"ngIf"],[4,"ngrxLet"],["selectedTemplate",""],["addVariant",""],["nzFlex","50px"],["type","button","nz-button","","nzBlock","",1,"manager-button",3,"click"],["nz-icon","",3,"ngClass","nzType"],["nzSpan","24",1,"manager-drawer"],[3,"cvcSelectedIds","cvcSelectedIdsChange"],[4,"ngFor","ngForOf"],["optionTemplates",""],[3,"cvcDisableLink","cvcCacheId","cvcEmphasize"],["nz-typography","","nzType","secondary"],[4,"ngIf","ngIfElse"],["noAliases",""],["nz-typography","","nzType","secondary",3,"innerHtml"],[1,"ant-select-selection-item-content"],[3,"cvcCacheId","cvcContext","cvcMode","cvcOnClose"],[3,"cvcSearchString","cvcGeneId","cvcGeneName","cvcOnCreate"]],template:function(d,c){if(1&d&&(e.TgZ(0,"nz-row",0)(1,"nz-col",1)(2,"cvc-entity-select",2),e.NdJ("cvcOnSearch",function(se){return c.onSearch$.next(se)})("cvcOnOpenChange",function(se){return c.onOpenChange$.next(se)})("cvcOnModelChange",function(se){return c.props.change&&c.props.change(c.field,se)}),e.ALo(3,"ngrxPush"),e.ALo(4,"ngrxPush"),e.ALo(5,"ngrxPush"),e.ALo(6,"ngrxPush"),e.ALo(7,"ngrxPush"),e.ALo(8,"ngrxPush"),e.ALo(9,"ngrxPush"),e.qZA()(),e.YNc(10,bl,6,9,"nz-col",3),e.YNc(11,Fd,3,3,"nz-col",4),e.ALo(12,"ngrxPush"),e.qZA(),e.YNc(13,w1,3,3,"ng-container",5),e.YNc(14,Uu,2,3,"ng-template",null,6,e.W1O),e.YNc(16,P1,3,7,"ng-template",null,7,e.W1O)),2&d){const z=e.MAs(15),se=e.MAs(17);e.Q6J("nzGutter",e.DdM(35,gu)),e.xp6(2),e.Q6J("cvcAddEntity",se)("cvcAddEntityModel",e.lcZ(3,19,c.onModel$))("cvcSelectMode",c.props.isMultiSelect?"multiple":"default")("cvcCustomTemplate",z)("cvcFormControl",c.formControl)("cvcFormlyAttributes",c.field)("cvcEntityName",c.props.entityName)("cvcPlaceholder",c.props.placeholder)("cvcResults",e.lcZ(4,21,c.result$))("cvcDisabled",c.props.requireGene&&!e.lcZ(5,23,c.onGeneId$))("cvcOptions",e.lcZ(6,25,c.selectOption$))("cvcSelectOpen",e.lcZ(7,27,c.selectOpen$))("cvcShowError",c.showError)("cvcLoading",e.lcZ(8,29,c.isLoading$))("cvcParamName",e.lcZ(9,31,c.onGeneName$)),e.xp6(8),e.Q6J("ngIf",c.props.showManagerBtn),e.xp6(1),e.Q6J("ngIf",e.lcZ(12,33,c.showMgr$)),e.xp6(2),e.Q6J("ngrxLet",c.onSearch$)}},dependencies:[S.mk,S.sg,S.O5,je,Mt.J,P.eJ,xn.ix,fn.w,hn.dQ,O.t3,O.SK,gt.Ls,he.ZU,bi,zl,H.A,P.fM],changeDetection:0});const I1={types:[{name:"variant-select",wrappers:["form-field"],component:Sl},{name:"variant-multi-select",wrappers:["form-field"],component:Sl,defaultOptions:{props:{label:"Variants",isMultiSelect:!0}}}]};class Lr{}Lr.\u0275fac=function(d){return new(d||Lr)},Lr.\u0275mod=e.oAB({type:Lr}),Lr.\u0275inj=e.cJS({imports:[S.ez,En,ot.x,yt,Xn.g,ct.s,ki,jo,ke,Ss,nu.M,Ii.y,m.X0.forChild(I1),t.u5,P._N,on.L,ye.ic,xn.sL,s.U5,O.Jb,gt.PV,Pe.o7,ci.Qp,Tt.LV,he.ZJ,xn.sL,ji.vh,Dt.Wr,No.b1,s.U5,O.Jb,gt.PV,Pe.o7,Yo.Zf,Vn.$6,Oi.HQ,bt.X,Et.cg,he.ZJ,P.pP,t.UX]});var lh=a(2190),A1=a(2539);const El=/\(/g,_s=/\)/g,F1=/AND|OR/i,pd=/^(?<not>NOT\s)?\s*#VID(?<variantId>\d+)$/i,uh=/\s+/;function fd(v){return xl(v.replace(El," ( ").replace(_s," ) "))}function xl(v){let c,d=v.split(uh),z=0,se=[],mt=[],Vt=[];for(let qi of d)if("("==qi)0!=z&&se.push(qi),z+=1;else if(")"==qi)if(z-=1,0==z){let Co=xl(se.join(" "));if("errorMessage"in Co)return Co;Vt.push(Co),mt.push("EXPR"),se=[]}else se.push(qi);else z>0?se.push(qi):mt.push(qi);let Mn=0;for(let qi of mt){let Co=F1.test(qi);if(Co&&Mn==d.length-1)return{errorMessage:"Trailing boolean operator found. You cannot end your profile with an operator."};if(Co&&0==Mn)return{errorMessage:"The expression cannot start with AND/OR"};if(Co&&!c)c=Rd(qi);else if(Co&&c&&Rd(qi)!==c)return{errorMessage:"You cannot mix and match AND/OR in a single segment. Use parenthesis to logically group your variants."};Mn++}let Rn=[],Vi=mt.join(" ").split(F1);for(let qi of Vi.map(Co=>Co.trim())){let Co=pd.exec(qi);if(null===Co){if("EXPR"!==qi)return{errorMessage:`Variant ${qi} does not match the expected format. The token should be a #VID prepended with an optional NOT.`}}else Rn.push({not:!!Co[1],variantId:parseInt(Co[2])})}return{booleanOperator:c,variantComponents:Rn,complexComponents:Vt}}function Rd(v){return"AND"==v.toUpperCase()?Sn._Wm.And:Sn._Wm.Or}var Bc,dh=a(7230);class Ka{constructor(d){this.apollo=d,this.cvcOnSelect=new e.vpe,this.cvcOnVariantSelect=new e.vpe,this.modelChange$=new it.X(void 0),this.layout="horizontal",this.finderState={formLayout:this.layout,fields:{geneId$:new it.X(void 0),variantId$:new it.X(void 0),variantMolecularProfile$:new it.X(void 0)}},this.form=new t.nJ({}),this.model={geneId:void 0,variantId:void 0},this.options={formState:this.finderState},this.config=[{wrappers:["field-grid"],props:{grid:{cols:2}},fieldGroup:[{key:"geneId",type:"gene-select",props:{placeholder:"Select MP Gene",hideLabel:!0,layout:{showExtra:!1}}},{key:"variantId",type:"variant-select",props:{placeholder:"Select MP Variant",requireGene:!0,layout:{showExtra:!1},hideLabel:!0}}]}]}modelChange(d){if(!d?.variantId)return;const c=this.getSelectedVariant(d.variantId);c&&(this.model={geneId:void 0,variantId:void 0},this.cvcOnSelect.next(c.singleVariantMolecularProfile),this.cvcOnVariantSelect.next(c))}getSelectedVariant(d){if(!d)return;const c={id:`Variant:${d}`,fragment:co.Ps`
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
      `};let z;try{z=this.apollo.client.readFragment(c)}catch(se){console.error(se)}if(z)return z;console.error("MpFinderForm could not resolve its Variant from the cache")}}function ju(v,d){1&v&&e._uU(0,"Added new Molecular Profile")}function md(v,d){if(1&v&&(e.TgZ(0,"span",11),e._uU(1),e.qZA()),2&v){const c=d.ngIf;e.xp6(1),e.hij(" ",c," ")}}function Vd(v,d){if(1&v&&(e.TgZ(0,"span",11),e._uU(1),e.qZA()),2&v){const c=d.ngIf;e.xp6(1),e.hij(" ",c," ")}}function N1(v,d){if(1&v&&(e.TgZ(0,"span",11),e._UZ(1,"cvc-mp-tag-name",12),e.qZA()),2&v){const c=d.ngIf;e.xp6(1),e.Q6J("nameSegments",c)}}function hh(v,d){if(1&v){const c=e.EpF();e.TgZ(0,"button",13),e.NdJ("click",function(){const mt=e.CHM(c).ngIf,Vt=e.oxw();return e.KtG(Vt.cvcOnSelect.next(mt))}),e.ALo(1,"ngrxPush"),e._uU(2," Select MP "),e.qZA()}if(2&v){const c=e.oxw();e.Q6J("disabled",e.lcZ(1,1,c.expressionError$))}}function Bd(v,d){if(1&v){const c=e.EpF();e.TgZ(0,"button",13),e.NdJ("click",function(){e.CHM(c);const se=e.oxw();return e.KtG(se.onCreateNewMp$.next())}),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e._uU(3," Add MP "),e.qZA()}if(2&v){const c=e.oxw();e.Q6J("disabled",e.lcZ(1,1,c.expressionError$)||!e.lcZ(2,3,c.expressionSegment$))}}Ka.\u0275fac=function(d){return new(d||Ka)(e.Y36(co._M))},Ka.\u0275cmp=e.Xpm({type:Ka,selectors:[["cvc-mp-finder"]],outputs:{cvcOnSelect:"cvcOnSelect",cvcOnVariantSelect:"cvcOnVariantSelect"},decls:2,vars:6,consts:[["nz-form","",3,"nzLayout","formGroup"],[3,"form","fields","model","options","modelChange"]],template:function(d,c){1&d&&(e.TgZ(0,"form",0)(1,"formly-form",1),e.NdJ("modelChange",function(se){return c.modelChange(se)}),e.qZA()()),2&d&&(e.Q6J("nzLayout",c.layout)("formGroup",c.form),e.xp6(1),e.Q6J("form",c.form)("fields",c.config)("model",c.model)("options",c.options))},dependencies:[t._Y,t.JL,t.sg,m.T7,s.Lr],styles:["[_nghost-%COMP%]{display:block;width:100%}"],changeDetection:0});const js=function(){return[6,6]},Hd=function(v){return{active:v}};let qa=((Bc=class{constructor(d,c,z,se){this.previewMpGql=d,this.createMolecularProfileGql=c,this.mpEditorPrepopulate=z,this.networkErrorService=se,this.cvcOnSelect=new e.vpe,this.cvcOnEditPrepopulated=new e.vpe,this.expressionMessages={initial:"Start constructing a complex molecular profile to preview it here"},this.createMolecularProfileMutator=new Rt.U(this.networkErrorService),this.onInputChange$=new it.X(void 0),this.onVariantSelect$=new Ze.x,this.onCreateNewMp$=new Ze.x,this.inputValue$=new it.X(""),this.expressionError$=new it.X(void 0),this.expressionMessage$=new it.X(this.expressionMessages.initial),this.expressionSegment$=new Ze.x,this.existingMp$=new Ze.x}ngAfterViewInit(){this.onInputChange$.pipe((0,Ge.h)(jn.ep),(0,Ge.h)(d=>d.length>0),(0,Ct.U)(d=>{let c=fd(d);return void 0!==this.cvcPrepopulateWithId&&this.cvcOnEditPrepopulated.next(!0),"errorMessage"in c?c.errorMessage:this.previewQueryRef.refetch({mpStructure:c})}),(0,Ae.t)(this)).subscribe(d=>{"string"==typeof d?(this.expressionMessage$.next(void 0),this.expressionError$.next(d),this.expressionSegment$.next(void 0)):d.then(({data:c,errors:z})=>{if(z)this.expressionMessage$.next(void 0),this.expressionError$.next(z.map(se=>se.message).join("\n")),this.expressionSegment$.next(void 0);else{this.expressionSegment$.next(c.previewMolecularProfileName.segments),this.expressionMessage$.next(void 0),this.expressionError$.next(void 0);this.existingMp$.next(c.previewMolecularProfileName.existingMolecularProfile||void 0)}})}),this.onVariantSelect$.pipe((0,tt.M)(this.onInputChange$),(0,Ct.U)(([d,c])=>c&&0!=c.length?`${c} #VID${d.id}`:`#VID${d.id}`),(0,Ae.t)(this)).subscribe(d=>{this.inputValue$.next(d),this.onInputChange$.next(d)}),this.previewQueryRef=this.previewMpGql.watch({}),this.previewMpName$=this.previewQueryRef.valueChanges.pipe((0,Gt.j)("data","previewMolecularProfileName"),(0,Ge.h)(jn.ep),(0,Ct.U)(d=>d.segments),(0,Ae.t)(this)),this.previewMpAlreadyExists$=this.previewQueryRef.valueChanges.pipe((0,Gt.j)("data","previewMolecularProfileName"),(0,Ge.h)(jn.ep),(0,Ct.U)(d=>d.existingMolecularProfile),(0,Ae.t)(this)),this.previewDeprecatedVariants$=this.previewQueryRef.valueChanges.pipe((0,Gt.j)("data","previewMolecularProfileName"),(0,Ge.h)(jn.ep),(0,Ct.U)(d=>d.deprecatedVariants),(0,Ae.t)(this)),this.onCreateNewMp$.pipe((0,tt.M)(this.onInputChange$),(0,Ae.t)(this)).subscribe(([d,c])=>{if(!c||0===c.length)return;let z=fd(c);"errorMessage"in z||(this.state=this.createMolecularProfileMutator.mutate(this.createMolecularProfileGql,{mpStructure:z},{},se=>{setTimeout(()=>{se.createMolecularProfile&&this.cvcOnSelect.next(se.createMolecularProfile.molecularProfile)},1e3)}))})}prepopulateMp(d){if(!d)return this.expressionSegment$.next(void 0),this.expressionMessage$.next(this.expressionMessages.initial),void this.inputValue$.next("");ga(this.mpEditorPrepopulate.fetch({mpId:d},{fetchPolicy:"cache-first"})).then(({data:c})=>{if(!c?.molecularProfile?.id)return void console.error(`MpExpressionEditor could not fetch MolecalarProfile:${d} to prepulate editor fields.`);const z=c.molecularProfile.rawName.replace(/#GID(\d+)/g,"").trim();this.inputValue$.next(z),this.onInputChange$.next(z)})}ngOnChanges(d){d.cvcPrepopulateWithId&&this.prepopulateMp(d.cvcPrepopulateWithId.currentValue)}}).\u0275fac=function(d){return new(d||Bc)(e.Y36(Sn.mki),e.Y36(Sn.zpu),e.Y36(Sn.vjc),e.Y36(Qt.Y))},Bc.\u0275cmp=e.Xpm({type:Bc,selectors:[["cvc-mp-expression-editor"]],inputs:{cvcPrepopulateWithId:"cvcPrepopulateWithId"},outputs:{cvcOnSelect:"cvcOnSelect",cvcOnEditPrepopulated:"cvcOnEditPrepopulated"},features:[e.TTD],decls:34,vars:31,consts:[["entityType","Molecular Profile",3,"mutationState","successMessage"],["success",""],[3,"nzGutter"],["nzFlex","100px"],[1,"finder-label"],["nzFlex","auto"],[1,"expression-preview",3,"ngClass"],["nz-typography","","nzType","secondary",4,"ngIf"],["type","button","nz-button","","nzType","primary","nzBlock","",3,"disabled","click",4,"ngIf"],["nz-input","","rows","1","placeholder","Enter #VID[id] and boolean tokens to construct a Molecular Profile expression.",2,"width","100%",3,"ngModel","ngModelChange"],[3,"cvcOnVariantSelect"],["nz-typography","","nzType","secondary"],[3,"nameSegments"],["type","button","nz-button","","nzType","primary","nzBlock","",3,"disabled","click"]],template:function(d,c){if(1&d&&(e.TgZ(0,"cvc-form-submission-status-display",0),e.YNc(1,ju,1,0,"ng-template",null,1,e.W1O),e.TgZ(3,"nz-row",2)(4,"nz-col",3)(5,"div",4),e._uU(6,"Preview:"),e.qZA()(),e.TgZ(7,"nz-col",5)(8,"div",6),e.ALo(9,"ngrxPush"),e.YNc(10,md,2,1,"span",7),e.ALo(11,"ngrxPush"),e.YNc(12,Vd,2,1,"span",7),e.ALo(13,"ngrxPush"),e.YNc(14,N1,2,1,"span",7),e.ALo(15,"ngrxPush"),e.qZA()(),e.TgZ(16,"nz-col",3),e.YNc(17,hh,3,3,"button",8),e.ALo(18,"ngrxPush"),e.YNc(19,Bd,4,5,"button",8),e.ALo(20,"ngrxPush"),e.qZA()(),e.TgZ(21,"nz-row",2)(22,"nz-col",3)(23,"div",4),e._uU(24,"Editor:"),e.qZA()(),e.TgZ(25,"nz-col",5)(26,"textarea",9),e.NdJ("ngModelChange",function(se){return c.onInputChange$.next(se)}),e.ALo(27,"ngrxPush"),e.qZA()()(),e.TgZ(28,"nz-row",2)(29,"nz-col",3)(30,"div",4),e._uU(31,"Append #VID:"),e.qZA()(),e.TgZ(32,"nz-col",5)(33,"cvc-mp-finder",10),e.NdJ("cvcOnVariantSelect",function(se){return c.onVariantSelect$.next(se)}),e.qZA()()()()),2&d){const z=e.MAs(2);e.Q6J("mutationState",c.state)("successMessage",z),e.xp6(3),e.Q6J("nzGutter",e.DdM(26,js)),e.xp6(5),e.Q6J("ngClass",e.VKq(27,Hd,void 0!==e.lcZ(9,12,c.expressionSegment$))),e.xp6(2),e.Q6J("ngIf",e.lcZ(11,14,c.expressionMessage$)),e.xp6(2),e.Q6J("ngIf",e.lcZ(13,16,c.expressionError$)),e.xp6(2),e.Q6J("ngIf",e.lcZ(15,18,c.expressionSegment$)),e.xp6(3),e.Q6J("ngIf",e.lcZ(18,20,c.existingMp$)),e.xp6(2),e.Q6J("ngIf",!e.lcZ(20,22,c.existingMp$)),e.xp6(2),e.Q6J("nzGutter",e.DdM(29,js)),e.xp6(5),e.Q6J("ngModel",e.lcZ(27,24,c.inputValue$)),e.xp6(2),e.Q6J("nzGutter",e.DdM(30,js))}},dependencies:[S.mk,S.O5,t.Fj,t.JJ,t.On,xn.ix,fn.w,hn.dQ,Pe.Zp,O.t3,O.SK,he.ZU,_n.F,dh.C,Ka,P.fM],styles:["[_nghost-%COMP%]{display:block;background-color:#f6f6f6;border:1px solid #DEDEDE;border-radius:4px;padding:8px}.expression-preview[_ngcontent-%COMP%]{width:100%;padding:3px;background-color:#f5f5f5;border:1px solid #CCCCCC;border-radius:2px}.expression-preview.active[_ngcontent-%COMP%]{background-color:#fff}.finder-label[_ngcontent-%COMP%]{font-weight:500;line-height:26px;text-align:right}"],changeDetection:0}),Bc);qa=(0,ze.gn)([(0,Ae.c)()],qa);const Gu=["optionTemplates"];function $d(v,d){if(1&v){const c=e.EpF();e.TgZ(0,"cvc-mp-finder",11),e.NdJ("cvcOnSelect",function(se){e.CHM(c);const mt=e.oxw(2);return e.KtG(mt.onMpSelect$.next(se))}),e.qZA()}}function gd(v,d){1&v&&(e.TgZ(0,"div",12),e._uU(1," \xa0 "),e.TgZ(2,"span",13)(3,"i"),e._uU(4," Select a Molecular Profile with the expression editor "),e.qZA()()())}function Yd(v,d){if(1&v){const c=e.EpF();e.TgZ(0,"cvc-entity-select",14),e.NdJ("cvcOnSearch",function(se){e.CHM(c);const mt=e.oxw(2);return e.KtG(mt.onSearch$.next(se))})("cvcOnModelChange",function(se){e.CHM(c);const mt=e.oxw(2);return e.KtG(mt.props.change&&mt.props.change(mt.field,se))}),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.ALo(3,"ngrxPush"),e.qZA()}if(2&v){const c=e.oxw(2),z=e.MAs(13);e.Q6J("cvcSelectMode",c.props.isMultiSelect?"multiple":"default")("cvcCustomTemplate",z)("cvcFormControl",c.formControl)("cvcFormlyAttributes",c.field)("cvcEntityName",c.props.entityName)("cvcPlaceholder",c.props.placeholder)("cvcResults",e.lcZ(1,15,c.result$))("cvcDisabled",c.props.disabled)("cvcAllowClear",!1)("cvcOptions",e.lcZ(2,17,c.selectOption$))("cvcShowError",c.showError)("cvcLoading",e.lcZ(3,19,c.isLoading$))("cvcBorderless",!0)("cvcSuffixIcon",null)("cvcShowArrow",!1)}}function ph(v,d){if(1&v&&(e.ynx(0),e.YNc(1,$d,1,0,"cvc-mp-finder",8),e.YNc(2,gd,5,0,"div",9),e.YNc(3,Yd,4,21,"cvc-entity-select",10),e.BQk()),2&v){const c=d.ngrxLet,z=e.oxw();e.xp6(1),e.Q6J("ngIf",c.showFinder&&!z.editorOpen),e.xp6(1),e.Q6J("ngIf",!c.showSelect&&z.editorOpen),e.xp6(1),e.Q6J("ngIf",c.showSelect)}}function Ud(v,d){if(1&v){const c=e.EpF();e.TgZ(0,"nz-col",15)(1,"cvc-mp-expression-editor",16),e.NdJ("cvcOnEditPrepopulated",function(se){e.CHM(c);const mt=e.oxw();return e.KtG(mt.onEditPrepopulated$.next(se))})("cvcOnSelect",function(se){e.CHM(c);const mt=e.oxw();return e.KtG(mt.onMpSelect$.next(se))}),e.ALo(2,"ngrxPush"),e.qZA()()}if(2&v){const c=e.oxw();e.xp6(1),e.Q6J("cvcPrepopulateWithId",e.lcZ(2,1,c.onMpId$))}}function k1(v,d){if(1&v&&(e.ynx(0),e.TgZ(1,"em"),e._UZ(2,"span",23),e.ALo(3,"highlightTypeahead"),e.qZA(),e.BQk()),2&v){const c=e.oxw(2).$implicit,z=e.oxw().ngrxLet;e.xp6(2),e.Q6J("innerHtml",e.xi3(3,1,c.molecularProfileAliases.join(", "),z),e.oJD)}}function jd(v,d){1&v&&e._uU(0,"--")}function vu(v,d){if(1&v&&(e._UZ(0,"cvc-entity-tag",19),e.TgZ(1,"span",20),e._uU(2," Aliases: "),e.YNc(3,k1,4,4,"ng-container",21),e.YNc(4,jd,1,0,"ng-template",null,22,e.W1O),e.qZA()),2&v){const c=e.MAs(5),z=e.oxw().$implicit,se=e.oxw().ngrxLet;e.Q6J("cvcDisableLink",!0)("cvcCacheId",z.__typename+":"+z.id)("cvcEmphasize",se),e.xp6(3),e.Q6J("ngIf",z.molecularProfileAliases.length>0)("ngIfElse",c)}}function vd(v,d){1&v&&(e.ynx(0),e.YNc(1,vu,6,5,"ng-template",null,18,e.W1O),e.BQk())}function Gd(v,d){if(1&v&&(e.ynx(0),e.YNc(1,vd,3,0,"ng-container",17),e.ALo(2,"ngrxPush"),e.BQk()),2&v){const c=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,c.result$))}}function L1(v,d){if(1&v){const c=e.EpF();e.TgZ(0,"div",24)(1,"cvc-entity-tag",25),e.NdJ("cvcOnClose",function(){const mt=e.CHM(c).$implicit,Vt=e.oxw();return e.KtG(Vt.onTagClose$.next(mt.nzValue))}),e.qZA()()}if(2&v){const c=d.$implicit,z=e.oxw();e.xp6(1),e.Q6J("cvcCacheId","MolecularProfile:"+c.nzValue)("cvcContext",z.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",z.props.isMultiSelect?"default":"closeable")}}const jl=function(){return[8,12]},R1=function(v,d){return{show:v,hide:d}},Qd=_t(Ut(),vi());class Dl extends Qd{constructor(d,c,z,se){super(),this.taq=d,this.tq=c,this.changeDetectorRef=z,this.apollo=se,this.showExpression=!1,this.editorOpen=!1,this.defaultOptions={props:{label:"Molecular Profile",placeholder:"Search Molecular Profiles",isMultiSelect:!1,description:"Select a Gene and Variant to specify a simple Molecular Profile, or use the Editor to specify a complex Molecular Profile",extraType:"prompt",entityName:{singular:"Molecular Profile",plural:"Molecular Profiles"},minSearchStrLength:1}},this.onMpSelect$=new it.X(void 0),this.onMpId$=new Ti.t,this.onShowExpClick$=new Ze.x,this.showExp$=this.onShowExpClick$.pipe((0,po.R)((mt,Vt)=>!mt,!1),(0,Ln.b)(mt=>this.editorOpen=mt)),this.selectDisplay$=new it.X({showFinder:!0,showSelect:!1}),this.onEditPrepopulated$=new it.X(!1)}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEntitySelectField({typeaheadQuery:this.taq,tagQuery:this.tq,getTypeaheadVarsFn:this.getTypeaheadVarsFn,getTypeaheadResultsFn:this.getTypeaheadResultsFn,getTagQueryVarsFn:this.getTagQueryVarsFn,getTagQueryResultsFn:this.getTagQueryResultsFn,getSelectedItemOptionFn:this.getSelectedItemOptionFn,getSelectOptionsFn:this.getSelectOptionsFn,changeDetectorRef:this.changeDetectorRef,selectOpen$:this.selectOpen$,selectComponent:this.selectComponent}),this.initialDescription=this.props.description,this.onValueChange$.pipe((0,Ae.t)(this)).subscribe(d=>{const c=void 0!==d;this.selectDisplay$.next({showFinder:!c,showSelect:c}),this.onMpId$.next(d),this.props.description=d?void 0:this.initialDescription}),this.onMpSelect$.pipe((0,Ge.h)(jn.ep),(0,Ae.t)(this)).subscribe(d=>{this.selectOption$.next([{label:d.name,value:d.id}]),this.editorOpen&&this.onShowExpClick$.next(),this.cdr.detectChanges(),this.field.formControl.setValue(d.id)})}configureStateConnections(){}getTypeaheadVarsFn(d,c){return{name:d,geneId:c}}getTypeaheadResultsFn(d){return d.data.molecularProfiles.nodes}getTagQueryVarsFn(d){return{molecularProfileId:d}}getTagQueryResultsFn(d){return d.data.molecularProfile}getSelectedItemOptionFn(d){return{value:d.id,label:d.name}}getSelectOptionsFn(d,c){return d.map((z,se)=>({label:c.get(se)||z.name,value:z.id}))}}Dl.\u0275fac=function(d){return new(d||Dl)(e.Y36(Sn.F4e),e.Y36(Sn.dGO),e.Y36(e.sBO),e.Y36(co._M))},Dl.\u0275cmp=e.Xpm({type:Dl,selectors:[["ng-component"]],viewQuery:function(d,c){if(1&d&&e.Gf(Gu,5,e.Rgc),2&d){let z;e.iGM(z=e.CRH())&&(c.optionTemplates=z)}},features:[e.qOj],decls:14,vars:16,consts:[[3,"nzGutter"],["nzFlex","auto"],[4,"ngrxLet"],["nzFlex","50px"],["type","button","nz-button","","nzBlock","",1,"expression-button",3,"click"],["nz-icon","",3,"ngClass","nzType"],["nzSpan","24","class","editor-drawer",4,"ngIf"],["selectedTemplate",""],[3,"cvcOnSelect",4,"ngIf"],["class","editor-message",4,"ngIf"],[3,"cvcSelectMode","cvcCustomTemplate","cvcFormControl","cvcFormlyAttributes","cvcEntityName","cvcPlaceholder","cvcResults","cvcDisabled","cvcAllowClear","cvcOptions","cvcShowError","cvcLoading","cvcBorderless","cvcSuffixIcon","cvcShowArrow","cvcOnSearch","cvcOnModelChange",4,"ngIf"],[3,"cvcOnSelect"],[1,"editor-message"],["nz-typography","","nzEllipsis","","nzType","secondary"],[3,"cvcSelectMode","cvcCustomTemplate","cvcFormControl","cvcFormlyAttributes","cvcEntityName","cvcPlaceholder","cvcResults","cvcDisabled","cvcAllowClear","cvcOptions","cvcShowError","cvcLoading","cvcBorderless","cvcSuffixIcon","cvcShowArrow","cvcOnSearch","cvcOnModelChange"],["nzSpan","24",1,"editor-drawer"],[3,"cvcPrepopulateWithId","cvcOnEditPrepopulated","cvcOnSelect"],[4,"ngFor","ngForOf"],["optionTemplates",""],[3,"cvcDisableLink","cvcCacheId","cvcEmphasize"],["nz-typography","","nzType","secondary"],[4,"ngIf","ngIfElse"],["noAliases",""],["nz-typography","","nzType","secondary",3,"innerHtml"],[1,"ant-select-selection-item-content"],[3,"cvcCacheId","cvcContext","cvcMode","cvcOnClose"]],template:function(d,c){1&d&&(e.TgZ(0,"nz-row",0)(1,"nz-col",1),e.YNc(2,ph,4,3,"ng-container",2),e.qZA(),e.TgZ(3,"nz-col",3)(4,"button",4),e.NdJ("click",function(){return c.onShowExpClick$.next()}),e._UZ(5,"span",5),e.ALo(6,"ngrxPush"),e.ALo(7,"ngrxPush"),e._uU(8,"Editor "),e.qZA()(),e.YNc(9,Ud,3,3,"nz-col",6),e.ALo(10,"ngrxPush"),e.qZA(),e.YNc(11,Gd,3,3,"ng-container",2),e.YNc(12,L1,2,3,"ng-template",null,7,e.W1O)),2&d&&(e.Q6J("nzGutter",e.DdM(12,jl)),e.xp6(2),e.Q6J("ngrxLet",c.selectDisplay$),e.xp6(3),e.Q6J("ngClass",e.WLB(13,R1,e.lcZ(6,6,c.showExp$),!e.lcZ(7,8,c.showExp$)))("nzType","caret-right"),e.xp6(4),e.Q6J("ngIf",e.lcZ(10,10,c.showExp$)),e.xp6(2),e.Q6J("ngrxLet",c.onSearch$))},dependencies:[S.mk,S.sg,S.O5,P.eJ,xn.ix,fn.w,hn.dQ,gt.Ls,O.t3,O.SK,he.ZU,je,Mt.J,qa,Ka,P.fM,H.A],styles:["form[_ngcontent-%COMP%]   span.hide[_ngcontent-%COMP%], .expression-button[_ngcontent-%COMP%]   span.hide[_ngcontent-%COMP%]{transform:rotate(0);transition:transform .2s linear}form[_ngcontent-%COMP%]   span.show[_ngcontent-%COMP%], .expression-button[_ngcontent-%COMP%]   span.show[_ngcontent-%COMP%]{transform:rotate(90deg);transition:transform .2s linear}.editor-message[_ngcontent-%COMP%]{padding:3px;border:1px solid #cccccc;border-radius:2px}"],data:{animation:[A1.mF,A1.MC]},changeDetection:0});const fh={types:[{name:"molecular-profile-select",wrappers:["form-field"],component:Dl},{name:"molecular-profile-multi-select",wrappers:["form-field"],component:Dl,defaultOptions:{props:{label:"Molecular Profiles",isMultiSelect:!0}}}]};class Gl{}Gl.\u0275fac=function(d){return new(d||Gl)},Gl.\u0275mod=e.oAB({type:Gl}),Gl.\u0275inj=e.cJS({imports:[S.ez,t.u5,t.UX,P._N,P.pP,m.X0.forChild(fh),on.L,xn.sL,Tt.LV,ci.Qp,gt.PV,Pe.o7,O.Jb,Jt.zf,s.U5,ye.ic,he.ZJ,Xn.g,lh.r,yt,En,ct.s,ot.x]});var Wh=a(9657);const mh=["optionTemplates"];function Ol(v,d){if(1&v&&(e.TgZ(0,"nz-tag")(1,"strong"),e._uU(2),e.ALo(3,"formatAmp"),e.qZA()(),e.TgZ(4,"span",4),e._uU(5),e.qZA()),2&v){const c=e.oxw().$implicit,z=e.oxw();e.xp6(2),e.Oqu(e.xi3(3,2,c,"verbose")),e.xp6(3),e.Oqu(z.descriptionForCategory(c))}}function Hc(v,d){1&v&&(e.ynx(0),e.YNc(1,Ol,6,5,"ng-template",null,3,e.W1O),e.BQk())}function gh(v,d){if(1&v){const c=e.EpF();e.TgZ(0,"nz-tag",8),e.NdJ("nzOnClose",function(se){e.CHM(c);const mt=e.oxw(2);return e.KtG(mt.onTagClose$.next(se))}),e.TgZ(1,"strong"),e._uU(2),e.ALo(3,"formatAmp"),e.qZA()()}if(2&v){const c=e.oxw().$implicit;e.xp6(2),e.Oqu(e.xi3(3,1,c.nzValue,"verbose"))}}function Wd(v,d){if(1&v&&(e.ynx(0),e._uU(1),e.ALo(2,"formatAmp"),e.BQk()),2&v){const c=e.oxw().$implicit;e.xp6(1),e.hij(" ",e.xi3(2,1,c.nzValue,"verbose")," ")}}function vh(v,d){if(1&v&&(e.TgZ(0,"div",5),e.YNc(1,gh,4,4,"nz-tag",6),e.YNc(2,Wd,3,4,"ng-container",7),e.qZA()),2&v){const c=e.oxw();e.xp6(1),e.Q6J("ngIf",!c.props.isMultiSelect),e.xp6(1),e.Q6J("ngIf",c.props.isMultiSelect)}}const Ql=new Map([[Sn.iwm.Na,"Not Applicable"],[Sn.iwm.TierILevelA,"Biomarkers showing therapeutic response to FDA-approved therapy, or therapy included in professional guidelines."],[Sn.iwm.TierILevelB,"Biomarkers showing therapeutic response based on well-powered studies with consensus from experts in the field."],[Sn.iwm.TierIiLevelC,"FDA-approved therapies for different tumor types or investigational therapies, or multiple small published studies with some consensus."],[Sn.iwm.TierIiLevelD,"Biomarkers that show plausible therapeutic significance based on preclinical studies."],[Sn.iwm.TierIii,"Somatic variants in cancer genes reported in the same or different cancer types with unknown clinical significance and variants in cancer genes that have not been reported in any cancers."],[Sn.iwm.TierIv,"Benign or likely benign germline variants observed at significant allele frequencies in the general population or specific subpopulation."]]),V1=_t(Ut(),dt());class Qu extends V1{constructor(d){super(),this.cdr=d,this.defaultOptions={props:{label:"AMP/ASCO/CAP Category",required:!1,isMultiSelect:!1,placeholder:"Select AMP/ASCO/CAP Category"}},this.ampCategoryEnum$=new it.X([])}descriptionForCategory(d){return Ql.get(d)}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEnumSelectField({optionEnum$:this.ampCategoryEnum$,optionTemplate$:this.optionTemplate$,changeDetectorRef:this.cdr}),this.configurePlaceholder()}configureStateConnections(){this.props.tooltip="If applicable, please provide the AMP/ASCO/CAP somatic variant classification.",this.ampCategoryEnum$.next((0,ko.o6)(Sn.iwm).map(d=>d)),this.optionTemplates||console.error(`${this.field.id} could not find its optionTemplates QueryList to populate its select options, so simple text labels will be displayed.`),this.optionTemplate$=this.optionTemplates?.changes.pipe((0,Ct.U)(d=>d.map(c=>c))),this.state&&(this.state.requires.requiresAmpLevel$?this.onRequiresAmpCategory$=this.state.requires.requiresAmpLevel$:console.warn(`${this.field.id} field's form provides a state, but could not find requiresAmpLevel$ subject to attach.`),this.onValueChange$.pipe((0,Ae.t)(this)).subscribe(d=>{d?(this.props.extraType=void 0,this.props.description=Ql.get(d)):this.props.description="Select an Assertion Type to select its AMP Category"}))}configurePlaceholder(){this.placeholder$=new it.X(this.props.placeholder),this.onRequiresAmpCategory$&&this.onRequiresAmpCategory$.pipe((0,Pi.x)(),(0,Ae.t)(this)).subscribe(d=>{this.props.extraType=void 0,d?(this.formControl.value||(this.props.extraType="description",this.props.description='Please provide the AMP/ASCO/CAP <a href="https://pubmed.ncbi.nlm.nih.gov/27993330/" target="_blank">somatic variant classification</a>.'),this.props.required=!0,this.props.disabled=!1):(this.props.required=!1,this.props.disabled=!0,this.resetField()),this.cdr.markForCheck()})}}Qu.\u0275fac=function(d){return new(d||Qu)(e.Y36(e.sBO))},Qu.\u0275cmp=e.Xpm({type:Qu,selectors:[["cvc-amp-category-select"]],viewQuery:function(d,c){if(1&d&&e.Gf(mh,5,e.Rgc),2&d){let z;e.iGM(z=e.CRH())&&(c.optionTemplates=z)}},features:[e.qOj],decls:7,vars:15,consts:[[3,"cvcFormControl","cvcFormlyAttributes","cvcSelectMode","cvcPlaceholder","cvcCustomTemplate","cvcOptions","cvcShowError","cvcDisabled"],[4,"ngFor","ngForOf"],["selectedTemplate",""],["optionTemplates",""],["nz-typography","","nzType","secondary"],[1,"ant-select-selection-item-content"],["nzMode","closeable",3,"nzOnClose",4,"ngIf"],[4,"ngIf"],["nzMode","closeable",3,"nzOnClose"]],template:function(d,c){if(1&d&&(e._UZ(0,"cvc-enum-select",0),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.YNc(3,Hc,3,0,"ng-container",1),e.ALo(4,"ngrxPush"),e.YNc(5,vh,3,2,"ng-template",null,2,e.W1O)),2&d){const z=e.MAs(6);e.Q6J("cvcFormControl",c.formControl)("cvcFormlyAttributes",c.field)("cvcSelectMode",c.props.isMultiSelect?"multiple":"default")("cvcPlaceholder",e.lcZ(1,9,c.placeholder$))("cvcCustomTemplate",z)("cvcOptions",e.lcZ(2,11,c.selectOption$))("cvcShowError",c.showError)("cvcDisabled",c.props.disabled),e.xp6(3),e.Q6J("ngForOf",e.lcZ(4,13,c.ampCategoryEnum$))}},dependencies:[S.sg,S.O5,bt.j,he.ZU,At,P.fM,Wh.t]});const Zd={types:[{name:"amp-category-select",wrappers:["form-field"],component:Qu},{name:"amp-category-multi-select",wrappers:["form-field"],component:Qu,defaultOptions:{props:{label:"AMP/ASCO/CAP Categories",isMultiSelect:!0}}}]};class Xa{}Xa.\u0275fac=function(d){return new(d||Xa)},Xa.\u0275mod=e.oAB({type:Xa}),Xa.\u0275inj=e.cJS({imports:[S.ez,t.UX,P._N,P.pP,m.X0.forChild(Zd),bt.X,he.ZJ,ct.s,yt,me]});const Zh=["optionTemplates"];function _h(v,d){if(1&v&&(e.ynx(0),e.TgZ(1,"em")(2,"span",6),e._uU(3),e.qZA()(),e.BQk()),2&v){const c=e.oxw(2).$implicit;e.xp6(3),e.Oqu(c.description)}}function Jh(v,d){if(1&v&&(e.TgZ(0,"nz-tag",5),e._uU(1),e.qZA(),e.TgZ(2,"span",6),e.YNc(3,_h,4,1,"ng-container",7),e.qZA()),2&v){const c=e.oxw().$implicit;e.xp6(1),e.Oqu(c.code),e.xp6(2),e.Q6J("ngIf",c.description)}}function Kh(v,d){1&v&&(e.ynx(0),e.YNc(1,Jh,4,2,"ng-template",null,4,e.W1O),e.BQk())}function $i(v,d){if(1&v&&(e.ynx(0),e.YNc(1,Kh,3,0,"ng-container",3),e.ALo(2,"ngrxPush"),e.BQk()),2&v){const c=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,c.result$))}}function _d(v,d){if(1&v){const c=e.EpF();e.TgZ(0,"div",8)(1,"cvc-entity-tag",9),e.NdJ("cvcOnClose",function(){const mt=e.CHM(c).$implicit,Vt=e.oxw();return e.KtG(Vt.onTagClose$.next(mt.nzValue))}),e.qZA()()}if(2&v){const c=d.$implicit,z=e.oxw();e.xp6(1),e.Q6J("cvcDisableLink",!0)("cvcHasTooltip",!0)("cvcCacheId","AcmgCode:"+c.nzValue)("cvcContext",z.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",z.props.isMultiSelect?"default":"closeable")}}const Jd=_t(Ut(),vi());class _u extends Jd{constructor(d,c,z){super(),this.taq=d,this.tq=c,this.changeDetectorRef=z,this.defaultOptions={props:{entityName:{singular:"ACMG/AMP Code",plural:"ACMG/AMP Codes"},isMultiSelect:!1,requireType:!0,tooltip:"If applicable, please provide evidence criteria from the standards and guidelines for interpretation of sequence variants from ACMG/AMP.",placeholder:"Search ACMG/AMP Codes",requireTypePromptFn:(se,mt)=>`Select an ${se} Type to search associated ACMG Code(s)`}},this.placeholder$=new it.X(void 0)}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEntitySelectField({typeaheadQuery:this.taq,typeaheadParam$:void 0,tagQuery:this.tq,getTypeaheadVarsFn:this.getTypeaheadVarsFn,getTypeaheadResultsFn:this.getTypeaheadResultsFn,getTagQueryVarsFn:this.getTagQueryVarsFn,getTagQueryResultsFn:this.getTagQueryResultsFn,getSelectedItemOptionFn:this.getSelectedItemOptionFn,getSelectOptionsFn:this.getSelectOptionsFn,changeDetectorRef:this.changeDetectorRef,selectComponent:this.selectComponent}),this.configurePlaceholders()}configureStateConnections(){if(this.state&&(this.stateEntityName=this.state.entityName,this.state.requires.requiresAcmgCodes$?this.onRequiresAcmgCode$=this.state.requires.requiresAcmgCodes$:console.warn(`${this.field.id} field's form provides a state, but could not find requiresAcmgCodes$ subject to attach.`),this.props.requireType)){const d=`${this.stateEntityName.toLowerCase()}Type$`;this.state.fields[d]?this.onEntityType$=this.state.fields[d]:console.error(`${this.field.id} requireType is true, however form state does not provide Subject ${d}.`)}}configurePlaceholders(){this.placeholder$.next(this.props.placeholders),this.onRequiresAcmgCode$&&this.onEntityType$&&(0,ii.a)([this.onRequiresAcmgCode$,this.onEntityType$]).pipe((0,Pi.x)(),(0,Ae.t)(this)).subscribe(([d,c])=>{!d&&c?(this.props.required=!1,this.props.disabled=!0,this.props.description=`${(0,ue.E)(c)} ${this.state.entityName} does not include associated ACMG/AMP Code(s)`,this.props.extraType="prompt",this.resetField(),this.cdr.markForCheck()):this.props.requireType&&!c?(this.props.required=!1,this.props.disabled=!0,this.props.description=this.props.requireTypePromptFn(this.state.entityName,this.props.isMultiSelect),this.props.extraType="prompt"):d?(this.props.required=!0,this.props.disabled=!1,this.props.description='Please provide evidence criteria from the standards and guidelines for interpretation of sequence variants from ACMG/AMP in <a href="https://pubmed.ncbi.nlm.nih.gov/25741868/" target="_blank">Richards et. al. 2015</a>.',this.props.extraType="description"):(!d&&this.formControl.value||this.props.requireType&&!c&&this.formControl.value)&&this.resetField()})}getTypeaheadVarsFn(d){return{code:d}}getTypeaheadResultsFn(d){return d.data.acmgCodesTypeahead}getTagQueryResultsFn(d){return d.data.acmgCode}getTagQueryVarsFn(d){return{id:d}}getSelectedItemOptionFn(d){return{value:d.id,label:d.code}}getSelectOptionsFn(d,c){return d.map((z,se)=>(console.log(z),{label:c.get(se)||z.code,value:z.id}))}}_u.\u0275fac=function(d){return new(d||_u)(e.Y36(Sn.O2u),e.Y36(Sn.AIY),e.Y36(e.sBO))},_u.\u0275cmp=e.Xpm({type:_u,selectors:[["cvc-acmg-code-select"]],viewQuery:function(d,c){if(1&d&&e.Gf(Zh,5,e.Rgc),2&d){let z;e.iGM(z=e.CRH())&&(c.optionTemplates=z)}},features:[e.qOj],decls:9,vars:22,consts:[[3,"cvcSelectMode","cvcCustomTemplate","cvcFormControl","cvcFormlyAttributes","cvcEntityName","cvcPlaceholder","cvcResults","cvcOptions","cvcShowError","cvcDisabled","cvcLoading","cvcOnSearch","cvcOnOpenChange","cvcOnModelChange"],[4,"ngrxLet"],["selectedTemplate",""],[4,"ngFor","ngForOf"],["optionTemplates",""],["nz-tooltip",""],["nz-typography","","nzType","secondary"],[4,"ngIf"],[1,"ant-select-selection-item-content"],[3,"cvcDisableLink","cvcHasTooltip","cvcCacheId","cvcContext","cvcMode","cvcOnClose"]],template:function(d,c){if(1&d&&(e.TgZ(0,"cvc-entity-select",0),e.NdJ("cvcOnSearch",function(se){return c.onSearch$.next(se)})("cvcOnOpenChange",function(se){return c.onOpenChange$.next(se)})("cvcOnModelChange",function(se){return c.props.change&&c.props.change(c.field,se)}),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.ALo(3,"ngrxPush"),e.ALo(4,"ngrxPush"),e.ALo(5,"ngrxPush"),e.qZA(),e.YNc(6,$i,3,3,"ng-container",1),e.YNc(7,_d,2,5,"ng-template",null,2,e.W1O)),2&d){const z=e.MAs(8);e.Q6J("cvcSelectMode",c.props.isMultiSelect?"multiple":"default")("cvcCustomTemplate",z)("cvcFormControl",c.formControl)("cvcFormlyAttributes",c.field)("cvcEntityName",c.props.entityName)("cvcPlaceholder",e.lcZ(1,12,c.placeholder$))("cvcResults",e.lcZ(2,14,c.result$))("cvcOptions",e.lcZ(3,16,c.selectOption$))("cvcShowError",c.showError)("cvcDisabled",c.onRequiresAcmgCode$&&!e.lcZ(4,18,c.onRequiresAcmgCode$))("cvcLoading",e.lcZ(5,20,c.isLoading$)),e.xp6(6),e.Q6J("ngrxLet",c.onSearch$)}},dependencies:[S.sg,S.O5,P.eJ,Et.SY,he.ZU,bt.j,je,Mt.J,P.fM],changeDetection:0});const yh={types:[{name:"acmg-code-select",wrappers:["form-field"],component:_u,defaultOptions:{props:{label:"ACMG/AMP Code"}}},{name:"acmg-code-multi-select",wrappers:["form-field"],component:_u,defaultOptions:{props:{isMultiSelect:!0,label:"ACMG/AMP Code(s)"}}}]};class yu{}yu.\u0275fac=function(d){return new(d||yu)},yu.\u0275mod=e.oAB({type:yu}),yu.\u0275inj=e.cJS({imports:[S.ez,t.UX,P._N,P.pP,m.X0.forChild(yh),on.L,xn.sL,Tt.LV,Vn.$6,ci.Qp,gt.PV,Pe.o7,O.Jb,Et.cg,Jt.zf,s.U5,ye.ic,he.ZJ,bt.X,yt,En,ct.s,ot.x,ws]});const Ch=["optionTemplates"];function Kd(v,d){if(1&v&&(e.ynx(0),e.TgZ(1,"em")(2,"span",6),e._uU(3),e.qZA()(),e.BQk()),2&v){const c=e.oxw(2).$implicit;e.xp6(3),e.Oqu(c.description)}}function zh(v,d){if(1&v&&(e.TgZ(0,"nz-tag",5),e._uU(1),e.qZA(),e.TgZ(2,"span",6),e.YNc(3,Kd,4,1,"ng-container",7),e.qZA()),2&v){const c=e.oxw().$implicit;e.xp6(1),e.Oqu(c.code),e.xp6(2),e.Q6J("ngIf",c.description)}}function Cu(v,d){1&v&&(e.ynx(0),e.YNc(1,zh,4,2,"ng-template",null,4,e.W1O),e.BQk())}function Th(v,d){if(1&v&&(e.ynx(0),e.YNc(1,Cu,3,0,"ng-container",3),e.ALo(2,"ngrxPush"),e.BQk()),2&v){const c=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,c.result$))}}function _i(v,d){if(1&v){const c=e.EpF();e.TgZ(0,"div",8)(1,"cvc-entity-tag",9),e.NdJ("cvcOnClose",function(){const mt=e.CHM(c).$implicit,Vt=e.oxw();return e.KtG(Vt.onTagClose$.next(mt.nzValue))}),e.qZA()()}if(2&v){const c=d.$implicit,z=e.oxw();e.xp6(1),e.Q6J("cvcDisableLink",!0)("cvcHasTooltip",!0)("cvcCacheId","ClingenCode:"+c.nzValue)("cvcContext",z.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",z.props.isMultiSelect?"default":"closeable")}}const Wl=_t(Ut(),vi());class Zl extends Wl{constructor(d,c,z){super(),this.taq=d,this.tq=c,this.changeDetectorRef=z,this.exclusiveCodes=new Set,this.exclusiveSelected=!1,this.defaultOptions={props:{entityName:{singular:"ClinGen/CGC/VICC Code",plural:"ClinGen/CGC/VICC Codes"},isMultiSelect:!1,requireType:!0,tooltip:"If applicable, please provide evidence classifications from the Standards for the classification of pathogenicity of somatic variants in cancer (oncogenicity).",placeholder:"Search ClinGen/CGC/VICC Codes",requireTypePromptFn:(se,mt)=>`Select an ${se} Type to search associated ClinGen Code(s)`}},this.placeholder$=new it.X(void 0)}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEntitySelectField({typeaheadQuery:this.taq,typeaheadParam$:void 0,tagQuery:this.tq,getTypeaheadVarsFn:this.getTypeaheadVarsFn,getTypeaheadResultsFn:this.getTypeaheadResultsFn,getTagQueryVarsFn:this.getTagQueryVarsFn,getTagQueryResultsFn:this.getTagQueryResultsFn,getSelectedItemOptionFn:this.getSelectedItemOptionFn,getSelectOptionsFn:this.getSelectOptionsFn,changeDetectorRef:this.changeDetectorRef,selectComponent:this.selectComponent}),this.configurePlaceholders(),this.onValueChange$.pipe((0,Ae.t)(this)).subscribe(d=>{if(d&&Array.isArray(d)&&d.length>1){const c=d.find(z=>this.exclusiveCodes.has(z));c?(this.previousDescription=this.props.description,this.previousDescriptionType=this.props.extraType,this.props.description="You have selected N/A which precludes selecting any other codes. Please remove it if you wish to select additional codes.",this.exclusiveSelected=!0,this.formControl.setValue([c])):this.exclusiveSelected=!1}this.previousDescription&&!this.exclusiveSelected&&(this.props.description=this.previousDescription,this.props.extraType=this.previousDescriptionType),this.cdr.detectChanges()})}configureStateConnections(){if(this.state&&(this.stateEntityName=this.state.entityName,this.state.requires.requiresClingenCodes$?this.onRequiresClingenCode$=this.state.requires.requiresClingenCodes$:console.warn(`${this.field.id} field's form provides a state, but could not find requiresClingenCodes$ subject to attach.`),this.props.requireType)){const d=`${this.stateEntityName.toLowerCase()}Type$`;this.state.fields[d]?this.onEntityType$=this.state.fields[d]:console.error(`${this.field.id} requireType is true, however form state does not provide Subject ${d}.`)}}configurePlaceholders(){this.placeholder$.next(this.props.placeholders),this.onRequiresClingenCode$&&this.onEntityType$&&(0,ii.a)([this.onRequiresClingenCode$,this.onEntityType$]).pipe((0,Pi.x)(),(0,Ae.t)(this)).subscribe(([d,c])=>{!d&&c?(this.props.required=!1,this.props.disabled=!0,this.props.description=`${(0,ue.E)(c)} ${this.state.entityName} does not include associated ClinGen/CGC/VICC Code(s)`,this.props.extraType="prompt",this.resetField(),this.cdr.markForCheck()):this.props.requireType&&!c?(this.props.required=!1,this.props.disabled=!0,this.props.description=this.props.requireTypePromptFn(this.state.entityName,this.props.isMultiSelect),this.props.extraType="prompt"):d?(this.props.required=!0,this.props.disabled=!1,this.props.description='Please provide the evidence classifications from the Standards for the classification of pathogenicity of somatic variants in cancer (oncogenicity) in <a href="https://pubmed.ncbi.nlm.nih.gov/25741868/" target="_blank">Horak et. al. 2022.</a>.',this.props.extraType="description"):(!d&&this.formControl.value||this.props.requireType&&!c&&this.formControl.value)&&this.resetField()})}getTypeaheadVarsFn(d){return{code:d}}getTypeaheadResultsFn(d){return d.data.clingenCodesTypeahead.forEach(c=>{c.exclusive&&this.exclusiveCodes.add(c.id)}),d.data.clingenCodesTypeahead}getTagQueryResultsFn(d){return d.data.clingenCode}getTagQueryVarsFn(d){return{id:d}}getSelectedItemOptionFn(d){return{value:d.id,label:d.code}}getSelectOptionsFn(d,c){return d.map((z,se)=>({label:c.get(se)||z.code,value:z.id}))}}Zl.\u0275fac=function(d){return new(d||Zl)(e.Y36(Sn.E2B),e.Y36(Sn.R8F),e.Y36(e.sBO))},Zl.\u0275cmp=e.Xpm({type:Zl,selectors:[["cvc-clingen-code-select"]],viewQuery:function(d,c){if(1&d&&e.Gf(Ch,5,e.Rgc),2&d){let z;e.iGM(z=e.CRH())&&(c.optionTemplates=z)}},features:[e.qOj],decls:9,vars:22,consts:[[3,"cvcSelectMode","cvcCustomTemplate","cvcFormControl","cvcFormlyAttributes","cvcEntityName","cvcPlaceholder","cvcResults","cvcOptions","cvcShowError","cvcDisabled","cvcLoading","cvcOnSearch","cvcOnOpenChange","cvcOnModelChange"],[4,"ngrxLet"],["selectedTemplate",""],[4,"ngFor","ngForOf"],["optionTemplates",""],["nz-tooltip",""],["nz-typography","","nzType","secondary"],[4,"ngIf"],[1,"ant-select-selection-item-content"],[3,"cvcDisableLink","cvcHasTooltip","cvcCacheId","cvcContext","cvcMode","cvcOnClose"]],template:function(d,c){if(1&d&&(e.TgZ(0,"cvc-entity-select",0),e.NdJ("cvcOnSearch",function(se){return c.onSearch$.next(se)})("cvcOnOpenChange",function(se){return c.onOpenChange$.next(se)})("cvcOnModelChange",function(se){return c.props.change&&c.props.change(c.field,se)}),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.ALo(3,"ngrxPush"),e.ALo(4,"ngrxPush"),e.ALo(5,"ngrxPush"),e.qZA(),e.YNc(6,Th,3,3,"ng-container",1),e.YNc(7,_i,2,5,"ng-template",null,2,e.W1O)),2&d){const z=e.MAs(8);e.Q6J("cvcSelectMode",c.props.isMultiSelect?"multiple":"default")("cvcCustomTemplate",z)("cvcFormControl",c.formControl)("cvcFormlyAttributes",c.field)("cvcEntityName",c.props.entityName)("cvcPlaceholder",e.lcZ(1,12,c.placeholder$))("cvcResults",e.lcZ(2,14,c.result$))("cvcOptions",e.lcZ(3,16,c.selectOption$))("cvcShowError",c.showError)("cvcDisabled",c.onRequiresClingenCode$&&!e.lcZ(4,18,c.onRequiresClingenCode$))("cvcLoading",e.lcZ(5,20,c.isLoading$)),e.xp6(6),e.Q6J("ngrxLet",c.onSearch$)}},dependencies:[S.sg,S.O5,P.eJ,Et.SY,he.ZU,bt.j,je,Mt.J,P.fM],changeDetection:0});const qd={types:[{name:"clingen-code-select",wrappers:["form-field"],component:Zl,defaultOptions:{props:{label:"ClinGen/CGC/VICC Code"}}},{name:"clingen-code-multi-select",wrappers:["form-field"],component:Zl,defaultOptions:{props:{isMultiSelect:!0,label:"ClinGen/CGC/VICC Code(s)"}}}]};class za{}za.\u0275fac=function(d){return new(d||za)},za.\u0275mod=e.oAB({type:za}),za.\u0275inj=e.cJS({imports:[S.ez,t.UX,P._N,P.pP,m.X0.forChild(qd),on.L,xn.sL,Tt.LV,Vn.$6,ci.Qp,gt.PV,Pe.o7,O.Jb,Et.cg,Jt.zf,s.U5,ye.ic,he.ZJ,bt.X,yt,En,ct.s,ot.x,ws]});const C=["optionTemplates"];function u(v,d){if(1&v&&(e.TgZ(0,"nz-tag",5),e._uU(1),e.qZA()),2&v){const c=e.oxw().$implicit;e.xp6(1),e.Oqu(c.name)}}function h(v,d){1&v&&(e.ynx(0),e.YNc(1,u,2,1,"ng-template",null,4,e.W1O),e.BQk())}function g(v,d){if(1&v&&(e.ynx(0),e.YNc(1,h,3,0,"ng-container",3),e.ALo(2,"ngrxPush"),e.BQk()),2&v){const c=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,c.result$))}}function y(v,d){if(1&v){const c=e.EpF();e.TgZ(0,"div",6)(1,"cvc-entity-tag",7),e.NdJ("cvcOnClose",function(){const mt=e.CHM(c).$implicit,Vt=e.oxw();return e.KtG(Vt.onTagClose$.next(mt.nzValue))}),e.qZA()()}if(2&v){const c=d.$implicit,z=e.oxw();e.xp6(1),e.Q6J("cvcDisableLink",!0)("cvcCacheId","NccnGuideline:"+c.nzValue)("cvcContext",z.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",z.props.isMultiSelect?"default":"closeable")}}const E=_t(Ut(),vi());class U extends E{constructor(d,c,z){super(),this.taq=d,this.tq=c,this.changeDetectorRef=z,this.defaultOptions={props:{entityName:{singular:"NCCN Guideline",plural:"NCCN Guidelines"},isMultiSelect:!1,requireType:!1,tooltip:"If applicable, please provide cancer (e.g., Breast Cancer) for the appropriate NCCN guideline.",placeholder:"Search NCCN Guidelines"}},this.placeholder$=new it.X(void 0)}ngAfterViewInit(){this.configureBaseField(),this.configureEntitySelectField({typeaheadQuery:this.taq,typeaheadParam$:void 0,tagQuery:this.tq,getTypeaheadVarsFn:this.getTypeaheadVarsFn,getTypeaheadResultsFn:this.getTypeaheadResultsFn,getTagQueryVarsFn:this.getTagQueryVarsFn,getTagQueryResultsFn:this.getTagQueryResultsFn,getSelectedItemOptionFn:this.getSelectedItemOptionFn,getSelectOptionsFn:this.getSelectOptionsFn,changeDetectorRef:this.changeDetectorRef,selectComponent:this.selectComponent})}getTypeaheadVarsFn(d){return{name:d}}getTypeaheadResultsFn(d){return d.data.nccnGuidelinesTypeahead}getTagQueryResultsFn(d){return d.data.nccnGuideline}getTagQueryVarsFn(d){return{id:d}}getSelectedItemOptionFn(d){return{value:d.id,label:d.name}}getSelectOptionsFn(d,c){return d.map((z,se)=>({label:c.get(se)||z.name,value:z.id}))}}U.\u0275fac=function(d){return new(d||U)(e.Y36(Sn.sA8),e.Y36(Sn.N$2),e.Y36(e.sBO))},U.\u0275cmp=e.Xpm({type:U,selectors:[["cvc-nccn-guideline-select"]],viewQuery:function(d,c){if(1&d&&e.Gf(C,5,e.Rgc),2&d){let z;e.iGM(z=e.CRH())&&(c.optionTemplates=z)}},features:[e.qOj],decls:8,vars:20,consts:[[3,"cvcSelectMode","cvcCustomTemplate","cvcFormControl","cvcFormlyAttributes","cvcEntityName","cvcPlaceholder","cvcResults","cvcOptions","cvcShowError","cvcDisabled","cvcLoading","cvcOnSearch","cvcOnOpenChange","cvcOnModelChange"],[4,"ngrxLet"],["selectedTemplate",""],[4,"ngFor","ngForOf"],["optionTemplates",""],["nz-tooltip",""],[1,"ant-select-selection-item-content"],[3,"cvcDisableLink","cvcCacheId","cvcContext","cvcMode","cvcOnClose"]],template:function(d,c){if(1&d&&(e.TgZ(0,"cvc-entity-select",0),e.NdJ("cvcOnSearch",function(se){return c.onSearch$.next(se)})("cvcOnOpenChange",function(se){return c.onOpenChange$.next(se)})("cvcOnModelChange",function(se){return c.props.change&&c.props.change(c.field,se)}),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.ALo(3,"ngrxPush"),e.ALo(4,"ngrxPush"),e.qZA(),e.YNc(5,g,3,3,"ng-container",1),e.YNc(6,y,2,4,"ng-template",null,2,e.W1O)),2&d){const z=e.MAs(7);e.Q6J("cvcSelectMode",c.props.isMultiSelect?"multiple":"default")("cvcCustomTemplate",z)("cvcFormControl",c.formControl)("cvcFormlyAttributes",c.field)("cvcEntityName",c.props.entityName)("cvcPlaceholder",e.lcZ(1,12,c.placeholder$))("cvcResults",e.lcZ(2,14,c.result$))("cvcOptions",e.lcZ(3,16,c.selectOption$))("cvcShowError",c.showError)("cvcDisabled",!1)("cvcLoading",e.lcZ(4,18,c.isLoading$)),e.xp6(5),e.Q6J("ngrxLet",c.onSearch$)}},dependencies:[S.sg,P.eJ,Et.SY,bt.j,je,Mt.J,P.fM],changeDetection:0});const ge={types:[{name:"nccn-guideline-select",wrappers:["form-field"],component:U,defaultOptions:{props:{label:"NCCN Guideline"}}},{name:"nccn-guideline-multi-select",wrappers:["form-field"],component:U,defaultOptions:{props:{isMultiSelect:!0,label:"NCCN Guideline(s)"}}}]};class Se{}Se.\u0275fac=function(d){return new(d||Se)},Se.\u0275mod=e.oAB({type:Se}),Se.\u0275inj=e.cJS({imports:[S.ez,t.UX,P._N,P.pP,m.X0.forChild(ge),on.L,xn.sL,Tt.LV,Vn.$6,ci.Qp,gt.PV,Pe.o7,O.Jb,Et.cg,Jt.zf,s.U5,ye.ic,he.ZJ,bt.X,yt,En,ct.s,ot.x,ws]});const Je=_t(Ut());class ht extends Je{constructor(d){super(),this.cdr=d,this.defaultDescription="Please enter the version of the NCCN guideline you're referencing in the format <strong>Year.Version</strong>",this.defaultOptions={validators:{nccnVersionNumber:{expression:c=>!c.value||/^\d{1,2}\.\d{4}$/.test(c.value),message:(c,z)=>`"${z.formControl?.value}" does not fit the format Version.Year`}},props:{label:"NCCN Guideline Version",extraType:"description",description:this.defaultDescription}}}ngAfterViewInit(){this.configureBaseField(),this.state&&this.state.formReady$?this.state.formReady$.pipe((0,Ge.h)(d=>d),(0,Di.q)(1),(0,Ae.t)(this)).subscribe(d=>{this.configureField()}):this.configureField()}configureField(){this.state?.fields.nccnGuidelineId$.pipe((0,Ae.t)(this)).subscribe(d=>{d?(this.props.disabled=!1,this.props.required=!0,this.props.extraType="description",this.props.description=this.defaultDescription):(this.props.disabled=!0,this.props.required=!1,this.props.extraType="prompt",this.props.description="NCCN Guideline Version is only required when NCCN Guideline is specified.",this.formControl.setValue(void 0))})}}ht.\u0275fac=function(d){return new(d||ht)(e.Y36(e.sBO))},ht.\u0275cmp=e.Xpm({type:ht,selectors:[["cvc-nccn-guideline-version-input"]],features:[e.qOj],decls:1,vars:2,consts:[["nz-input","","placeholder","ex: 1.2023",3,"formControl","formlyAttributes"]],template:function(d,c){1&d&&e._UZ(0,"input",0),2&d&&e.Q6J("formControl",c.formControl)("formlyAttributes",c.field)},dependencies:[t.Fj,t.JJ,t.oH,m.JD,Pe.Zp],encapsulation:2,changeDetection:0});const St={types:[{name:"nccn-guideline-version-input",component:ht,wrappers:["form-field"]}]};class Nt{}Nt.\u0275fac=function(d){return new(d||Nt)},Nt.\u0275mod=e.oAB({type:Nt}),Nt.\u0275inj=e.cJS({imports:[S.ez,t.UX,m.X0.forChild(St),Pe.o7,yt]});const $t=_t(Ut());class Wt extends $t{constructor(){super(...arguments),this.defaultDescription="Check this if the referenced therapy is approved for use by the FDA in the specific disease associated with the Assertion (as in a listing <a href='https://www.cancer.gov/about-cancer/treatment/drugs/cancer-type' target='_blank'>here</a>.)",this.defaultOptions={props:{hideLabel:!1,label:"FDA Regulatory Approval",description:this.defaultDescription}}}ngAfterViewInit(){this.configureBaseField(),this.state&&(this.state.formReady$?this.state.formReady$.pipe((0,Ge.h)(d=>d),(0,Di.q)(1),(0,Ae.t)(this)).subscribe(d=>{this.configureField()}):this.configureField())}configureField(){this.state?.requires.allowsFdaApproval$.pipe((0,Ae.t)(this)).subscribe(d=>{d?(this.props.disabled=!1,this.props.extraType="description",this.props.description=this.defaultDescription,void 0===this.formControl.value&&this.formControl.setValue(!1)):(this.props.disabled=!0,this.props.description="FDA Regulatory Approval does not apply to this Assertion Type",this.formControl.setValue(void 0))})}}Wt.\u0275fac=function(){let v;return function(c){return(v||(v=e.n5z(Wt)))(c||Wt)}}(),Wt.\u0275cmp=e.Xpm({type:Wt,selectors:[["cvc-fda-regulatory-approval-checkbox"]],features:[e.qOj],decls:2,vars:4,consts:[["nz-checkbox","",3,"nzIndeterminate","formControl","formlyAttributes","ngModelChange"]],template:function(d,c){1&d&&(e.TgZ(0,"label",0),e.NdJ("ngModelChange",function(se){return c.props.change&&c.props.change(c.field,se)}),e._uU(1),e.qZA()),2&d&&(e.Q6J("nzIndeterminate",c.props.indeterminate&&null==c.formControl.value)("formControl",c.formControl)("formlyAttributes",c.field),e.xp6(1),e.hij(" ",c.props.label,"\n"))},dependencies:[t.JJ,t.oH,Dt.Ie,m.JD],changeDetection:0});const Yt={types:[{name:"fda-regulatory-approval-checkbox",wrappers:["form-field"],component:Wt}]};class cn{}cn.\u0275fac=function(d){return new(d||cn)},cn.\u0275mod=e.oAB({type:cn}),cn.\u0275inj=e.cJS({imports:[S.ez,t.UX,Dt.Wr,m.X0.forChild(Yt),yt]});const Cn=_t(Ut());class Fn extends Cn{constructor(){super(...arguments),this.defaultDescription='Select Yes if an FDA approved companion test exists for the variant and therapy associated with the Assertion (such as tests listed <a href="https://www.fda.gov/medical-devices/in-vitro-diagnostics/list-cleared-or-approved-companion-diagnostic-devices-in-vitro-and-imaging-tools" target="_blank">here</a>).',this.defaultOptions={props:{hideLabel:!1,label:"FDA Companion Test",description:this.defaultDescription}}}ngAfterViewInit(){this.configureBaseField(),this.state&&(this.state.formReady$?this.state.formReady$.pipe((0,Ge.h)(d=>d),(0,Di.q)(1),(0,Ae.t)(this)).subscribe(d=>{this.configureField()}):this.configureField())}configureField(){this.state?.fields.fdaRegulatoryApproval$.pipe((0,Ae.t)(this)).subscribe(d=>{d?(this.props.disabled=!1,this.props.extraType="description",this.props.description=this.defaultDescription,void 0===this.formControl.value&&this.formControl.setValue(!1)):(this.props.disabled=!0,this.props.description="FDA Companion Test only applies when Regulatory Approval is selected",this.formControl.setValue(void 0))})}}Fn.\u0275fac=function(){let v;return function(c){return(v||(v=e.n5z(Fn)))(c||Fn)}}(),Fn.\u0275cmp=e.Xpm({type:Fn,selectors:[["cvc-fda-companion-test-checkbox"]],features:[e.qOj],decls:2,vars:4,consts:[["nz-checkbox","",3,"nzIndeterminate","formControl","formlyAttributes","ngModelChange"]],template:function(d,c){1&d&&(e.TgZ(0,"label",0),e.NdJ("ngModelChange",function(se){return c.props.change&&c.props.change(c.field,se)}),e._uU(1),e.qZA()),2&d&&(e.Q6J("nzIndeterminate",c.props.indeterminate&&null==c.formControl.value)("formControl",c.formControl)("formlyAttributes",c.field),e.xp6(1),e.hij(" ",c.props.label,"\n"))},dependencies:[t.JJ,t.oH,Dt.Ie,m.JD],changeDetection:0});const en={types:[{name:"fda-companion-test-checkbox",wrappers:["form-field"],component:Fn}]};class dn{}dn.\u0275fac=function(d){return new(d||dn)},dn.\u0275mod=e.oAB({type:dn}),dn.\u0275inj=e.cJS({imports:[S.ez,t.UX,Dt.Wr,m.X0.forChild(en),yt]});const Nn=["optionTemplates"];function An(v,d){if(1&v&&(e.TgZ(0,"nz-tag")(1,"strong"),e._uU(2),e.qZA()()),2&v){const c=e.oxw().$implicit;e.xp6(2),e.Oqu(c)}}function ei(v,d){1&v&&(e.ynx(0),e.YNc(1,An,3,1,"ng-template",null,3,e.W1O),e.BQk())}function Mi(v,d){if(1&v){const c=e.EpF();e.TgZ(0,"nz-tag",7),e.NdJ("nzOnClose",function(se){e.CHM(c);const mt=e.oxw(2);return e.KtG(mt.onTagClose$.next(se))}),e.TgZ(1,"strong"),e._uU(2),e.qZA()()}if(2&v){const c=e.oxw().$implicit;e.xp6(2),e.Oqu(c.nzValue)}}function xo(v,d){if(1&v&&(e.ynx(0),e._uU(1),e.BQk()),2&v){const c=e.oxw().$implicit;e.xp6(1),e.hij(" ",c.nzValue," ")}}function Do(v,d){if(1&v&&(e.TgZ(0,"div",4),e.YNc(1,Mi,3,1,"nz-tag",5),e.YNc(2,xo,2,1,"ng-container",6),e.qZA()),2&v){const c=e.oxw();e.xp6(1),e.Q6J("ngIf",!c.props.isMultiSelect),e.xp6(1),e.Q6J("ngIf",c.props.isMultiSelect)}}const $c=_t(Ut(),dt());class Ho extends $c{constructor(d){super(),this.cdr=d,this.defaultOptions={props:{label:"Reference Build",required:!1,isMultiSelect:!1,description:"Select the human genome reference sequence from which these coordinates are obtained",placeholder:"Select Reference Build"}},this.buildEnum$=new it.X([])}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEnumSelectField({optionEnum$:this.buildEnum$,optionTemplate$:this.optionTemplate$,changeDetectorRef:this.cdr})}configureStateConnections(){this.placeholder$=new it.X(this.props.placeholder),this.buildEnum$.next((0,ko.o6)(Sn.JDX).map(d=>d)),this.optionTemplates||console.error(`${this.field.id} could not find its optionTemplates QueryList to populate its select options, so simple text labels will be displayed.`),this.optionTemplate$=this.optionTemplates?.changes.pipe((0,Ct.U)(d=>d.map(c=>c)))}}Ho.\u0275fac=function(d){return new(d||Ho)(e.Y36(e.sBO))},Ho.\u0275cmp=e.Xpm({type:Ho,selectors:[["cvc-reference-build-select"]],viewQuery:function(d,c){if(1&d&&e.Gf(Nn,5,e.Rgc),2&d){let z;e.iGM(z=e.CRH())&&(c.optionTemplates=z)}},features:[e.qOj],decls:7,vars:15,consts:[[3,"cvcFormControl","cvcFormlyAttributes","cvcSelectMode","cvcPlaceholder","cvcCustomTemplate","cvcOptions","cvcShowError","cvcDisabled"],[4,"ngFor","ngForOf"],["selectedTemplate",""],["optionTemplates",""],[1,"ant-select-selection-item-content"],["nzMode","closeable",3,"nzOnClose",4,"ngIf"],[4,"ngIf"],["nzMode","closeable",3,"nzOnClose"]],template:function(d,c){if(1&d&&(e._UZ(0,"cvc-enum-select",0),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.YNc(3,ei,3,0,"ng-container",1),e.ALo(4,"ngrxPush"),e.YNc(5,Do,3,2,"ng-template",null,2,e.W1O)),2&d){const z=e.MAs(6);e.Q6J("cvcFormControl",c.formControl)("cvcFormlyAttributes",c.field)("cvcSelectMode",c.props.isMultiSelect?"multiple":"default")("cvcPlaceholder",e.lcZ(1,9,c.placeholder$))("cvcCustomTemplate",z)("cvcOptions",e.lcZ(2,11,c.selectOption$))("cvcShowError",c.showError)("cvcDisabled",c.props.disabled),e.xp6(3),e.Q6J("ngForOf",e.lcZ(4,13,c.buildEnum$))}},dependencies:[S.sg,S.O5,bt.j,At,P.fM]});const ys={types:[{name:"reference-build-select",wrappers:["form-field"],component:Ho},{name:"reference-build-multi-select",wrappers:["form-field"],component:Ho,defaultOptions:{props:{label:"Levels",isMultiSelect:!0}}}]};class Jl{}Jl.\u0275fac=function(d){return new(d||Jl)},Jl.\u0275mod=e.oAB({type:Jl}),Jl.\u0275inj=e.cJS({imports:[S.ez,t.UX,P._N,P.pP,m.X0.forChild(ys),bt.X,ct.s,yt,me]});const yd=["optionTemplates"];function ti(v,d){if(1&v&&(e.ynx(0),e.TgZ(1,"em"),e._UZ(2,"span",8),e.ALo(3,"highlightTypeahead"),e.qZA(),e.BQk()),2&v){const c=e.oxw(2).$implicit,z=e.oxw().ngrxLet;e.xp6(2),e.Q6J("innerHtml",e.xi3(3,1,c.soid,z),e.oJD)}}function hi(v,d){if(1&v&&(e._UZ(0,"cvc-entity-tag",5),e.TgZ(1,"span",6),e.YNc(2,ti,4,4,"ng-container",7),e.qZA()),2&v){const c=e.oxw().$implicit,z=e.oxw().ngrxLet;e.Q6J("cvcDisableLink",!0)("cvcCacheId",c.__typename+":"+c.id)("cvcEmphasize",z),e.xp6(2),e.Q6J("ngIf",c.soid)}}function mi(v,d){1&v&&(e.ynx(0),e.YNc(1,hi,3,4,"ng-template",null,4,e.W1O),e.BQk())}function Ji(v,d){if(1&v&&(e.ynx(0),e.YNc(1,mi,3,0,"ng-container",3),e.ALo(2,"ngrxPush"),e.BQk()),2&v){const c=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,c.result$))}}function Jo(v,d){if(1&v){const c=e.EpF();e.TgZ(0,"div",9)(1,"cvc-entity-tag",10),e.NdJ("cvcOnClose",function(){const mt=e.CHM(c).$implicit,Vt=e.oxw();return e.KtG(Vt.onTagClose$.next(mt.nzValue))}),e.qZA()()}if(2&v){const c=d.$implicit,z=e.oxw();e.xp6(1),e.Q6J("cvcCacheId","VariantType:"+c.nzValue)("cvcContext",z.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",z.props.isMultiSelect?"default":"closeable")}}const Yc=_t(Ut(),vi());class Ko extends Yc{constructor(d,c,z){super(),this.taq=d,this.tq=c,this.changeDetectorRef=z,this.defaultOptions={props:{entityName:{singular:"VariantType",plural:"VariantTypes"},isMultiSelect:!1,placeholders:{default:"Search Variant Types",multiDefault:"Select VariantType(s)"},description:'Add one or more variant types from the <a href="http://www.sequenceontology.org/browser/" target="_blank">Sequence Ontology</a> (e.g., missense, loss-of-function). Be specific as possible, avoid the addition of root concepts, and use the sequence_variant tree of the sequence ontology.',extraType:"prompt"}},this.placeholder$=new it.X(this.defaultOptions.props.placeholders.default)}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEntitySelectField({typeaheadQuery:this.taq,typeaheadParam$:void 0,tagQuery:this.tq,getTypeaheadVarsFn:this.getTypeaheadVarsFn,getTypeaheadResultsFn:this.getTypeaheadResultsFn,getTagQueryVarsFn:this.getTagQueryVarsFn,getTagQueryResultsFn:this.getTagQueryResultsFn,getSelectedItemOptionFn:this.getSelectedItemOptionFn,getSelectOptionsFn:this.getSelectOptionsFn,changeDetectorRef:this.changeDetectorRef,selectOpen$:this.selectOpen$,selectComponent:this.selectComponent}),this.configurePlaceholders()}configureStateConnections(){}configurePlaceholders(){}getTypeaheadVarsFn(d){return{name:d}}getTypeaheadResultsFn(d){return d.data.variantTypeTypeahead}getTagQueryVarsFn(d){return{id:d}}getTagQueryResultsFn(d){return d.data.variantType}getSelectedItemOptionFn(d){return{value:d.id,label:d.name}}getSelectOptionsFn(d,c){return d.map((z,se)=>({label:c.get(se)||z.name,value:z.id}))}}Ko.\u0275fac=function(d){return new(d||Ko)(e.Y36(Sn.jmY),e.Y36(Sn._nE),e.Y36(e.sBO))},Ko.\u0275cmp=e.Xpm({type:Ko,selectors:[["cvc-variant-type-select"]],viewQuery:function(d,c){if(1&d&&e.Gf(yd,5,e.Rgc),2&d){let z;e.iGM(z=e.CRH())&&(c.optionTemplates=z)}},features:[e.qOj],decls:8,vars:19,consts:[[3,"cvcSelectMode","cvcCustomTemplate","cvcFormControl","cvcFormlyAttributes","cvcEntityName","cvcPlaceholder","cvcResults","cvcOptions","cvcShowError","cvcLoading","cvcOnSearch","cvcOnOpenChange","cvcOnModelChange"],[4,"ngrxLet"],["selectedTemplate",""],[4,"ngFor","ngForOf"],["optionTemplates",""],[3,"cvcDisableLink","cvcCacheId","cvcEmphasize"],["nz-typography","","nzType","secondary"],[4,"ngIf"],["nz-typography","","nzType","secondary",3,"innerHtml"],[1,"ant-select-selection-item-content"],[3,"cvcCacheId","cvcContext","cvcMode","cvcOnClose"]],template:function(d,c){if(1&d&&(e.TgZ(0,"cvc-entity-select",0),e.NdJ("cvcOnSearch",function(se){return c.onSearch$.next(se)})("cvcOnOpenChange",function(se){return c.onOpenChange$.next(se)})("cvcOnModelChange",function(se){return c.props.change&&c.props.change(c.field,se)}),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.ALo(3,"ngrxPush"),e.ALo(4,"ngrxPush"),e.qZA(),e.YNc(5,Ji,3,3,"ng-container",1),e.YNc(6,Jo,2,3,"ng-template",null,2,e.W1O)),2&d){const z=e.MAs(7);e.Q6J("cvcSelectMode",c.props.isMultiSelect?"multiple":"default")("cvcCustomTemplate",z)("cvcFormControl",c.formControl)("cvcFormlyAttributes",c.field)("cvcEntityName",c.props.entityName)("cvcPlaceholder",e.lcZ(1,11,c.placeholder$))("cvcResults",e.lcZ(2,13,c.result$))("cvcOptions",e.lcZ(3,15,c.selectOption$))("cvcShowError",c.showError)("cvcLoading",e.lcZ(4,17,c.isLoading$)),e.xp6(5),e.Q6J("ngrxLet",c.onSearch$)}},dependencies:[S.sg,S.O5,P.eJ,he.ZU,je,Mt.J,P.fM,H.A],changeDetection:0});const wl={types:[{name:"variant-type-select",wrappers:["form-field"],component:Ko,defaultOptions:{props:{label:"Variant Type"}}},{name:"variant-type-multi-select",wrappers:["form-field"],component:Ko,defaultOptions:{props:{isMultiSelect:!0,label:"Variant Types"}}}]};class _o{}_o.\u0275fac=function(d){return new(d||_o)},_o.\u0275mod=e.oAB({type:_o}),_o.\u0275inj=e.cJS({imports:[S.ez,t.UX,P._N,P.pP,m.X0.forChild(wl),on.L,xn.sL,Tt.LV,Vn.$6,ci.Qp,gt.PV,Pe.o7,O.Jb,Et.cg,Jt.zf,s.U5,ye.ic,he.ZJ,bt.X,yt,En,ct.s,ot.x]});var es=a(9289);function Xd(v,d){if(1&v){const c=e.EpF();e.TgZ(0,"cvc-string-tag",5),e.NdJ("cvcOnClose",function(){const mt=e.CHM(c).$implicit,Vt=e.oxw(2);return e.KtG(Vt.tagClosed(mt))}),e.qZA()}if(2&v){const c=d.$implicit;e.Q6J("cvcMode","closeable")("cvcLabel",c)}}function Rr(v,d){if(1&v){const c=e.EpF();e.TgZ(0,"div"),e.YNc(1,Xd,1,2,"cvc-string-tag",3),e.ALo(2,"ngrxPush"),e.TgZ(3,"input",4),e.NdJ("keydown.enter",function(se){e.CHM(c);const mt=e.oxw();return e.KtG(mt.onEnter(se))}),e.qZA()()}if(2&v){const c=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,2,c.clinvarIds$)),e.xp6(2),e.Q6J("placeholder",c.props.placeholder)}}const Pl=_t(Ut(),ca);class Or extends Pl{constructor(d){super(),this.cdr=d,this.defaultOptions={modelOptions:{updateOn:"blur"},props:{label:"Enter value",placeholder:"Enter value and hit Return"}},this.clinvarIds$=new it.X([]),this.values=new Set,this.showClinvarIdEntry$=new it.X(!1),this.selectModel=void 0,this.selectOptions=[{value:es.li.NotApplicable,label:"Clinvar IDs not applicable for this variant"},{value:es.li.NoneFound,label:"Clinvar IDs do not exist for this variant"},{value:es.li.Found,label:"Clinvar IDs were found for this variant"},{value:void 0,label:""}]}optionSelected(d){const c=d;this.values.clear(),this.clinvarIds$.next([]),null!=c?c==es.li.Found?(this.showClinvarIdEntry$.next(!0),this.formControl.setValue([])):c==es.li.NoneFound?(this.showClinvarIdEntry$.next(!1),this.formControl.setValue(["NONE FOUND"])):c==es.li.NotApplicable&&(console.log("HERE"),this.showClinvarIdEntry$.next(!1),this.formControl.setValue(["NA"])):(this.showClinvarIdEntry$.next(!1),this.formControl.setValue([]),this.clinvarIds$.next([]))}onEnter(d){let c=d.target;c.value&&(this.values.add(c.value),c.value="");let z=Array.from(this.values);this.clinvarIds$.next(z),this.formControl.setValue(z)}tagClosed(d){this.values.delete(d);let c=Array.from(this.values);this.clinvarIds$.next(c),this.formControl.setValue(c),this.clinvarIds$.next(c)}ngAfterViewInit(){this.configureBaseField(),this.configureStringTagField();const d=this.formControl.value;d&&Array.isArray(d)&&("NONE FOUND"==d[0]?this.selectModel=es.li.NoneFound:"N/A"==d[0]?this.selectModel=es.li.NotApplicable:(this.selectModel=es.li.Found,d.forEach(c=>this.values.add(c)),this.showClinvarIdEntry$.next(!0)),this.clinvarIds$.next(d),this.cdr.detectChanges())}}Or.\u0275fac=function(d){return new(d||Or)(e.Y36(e.sBO))},Or.\u0275cmp=e.Xpm({type:Or,selectors:[["cvc-clinvar-input"]],features:[e.qOj],decls:4,vars:7,consts:[["nzAllowClear","",3,"nzOptions","ngModel","ngModelChange"],[4,"ngIf"],["hidden","","nz-input","",3,"formControl","formlyAttributes"],[3,"cvcMode","cvcLabel","cvcOnClose",4,"ngFor","ngForOf"],["nz-input","",3,"placeholder","keydown.enter"],[3,"cvcMode","cvcLabel","cvcOnClose"]],template:function(d,c){1&d&&(e.TgZ(0,"nz-select",0),e.NdJ("ngModelChange",function(se){return c.optionSelected(se)}),e.qZA(),e.YNc(1,Rr,4,4,"div",1),e.ALo(2,"ngrxPush"),e._UZ(3,"input",2)),2&d&&(e.Q6J("nzOptions",c.selectOptions)("ngModel",c.selectModel),e.xp6(1),e.Q6J("ngIf",e.lcZ(2,5,c.showClinvarIdEntry$)),e.xp6(2),e.Q6J("formControl",c.formControl)("formlyAttributes",c.field))},dependencies:[S.sg,S.O5,t.Fj,t.JJ,t.oH,t.On,m.JD,Pe.Zp,Tt.Vq,Hs,P.fM],changeDetection:0});const B1={types:[{name:"clinvar-input",wrappers:["form-field"],component:Or},{name:"clinvar-multi-input",wrappers:["form-field"],component:Or,defaultOptions:{props:{isRepeatItem:!0}}}]};class Ta{}Ta.\u0275fac=function(d){return new(d||Ta)},Ta.\u0275mod=e.oAB({type:Ta}),Ta.\u0275inj=e.cJS({imports:[S.ez,t.UX,t.u5,P._N,P.pP,m.X0.forChild(B1),$e.F,Pe.o7,s.U5,Tt.LV,ws]});class Uc{}var zu;function Cd(v,d){if(1&v&&e._uU(0),2&v){const c=e.oxw();e.hij(" ",c.props.addFormTitle,"\n")}}Uc.\u0275fac=function(d){return new(d||Uc)},Uc.\u0275mod=e.oAB({type:Uc}),Uc.\u0275inj=e.cJS({imports:[S.ez,at,Kr,kr,us,Lr,Ds,et,so,br,jt,dc,cl,Qo,Ra,ha,ua,Er,Gl,ls,Xa,yu,za,Se,Nt,cn,dn,Jl,_o,Ta]});const bh=function(){return[6,6]};let H1=((zu=class extends m.n2{constructor(){super(),this.contentTemplate$=new Ti.t}ngAfterViewInit(){this.field.props&&this.field.props.addFormContent?this.contentTemplate$.next(this.field.props.addFormContent):console.error(`${this.field.id} add-entity-form wrapper failed to find parent field's props.addFormContent TemplateRef.`)}}).\u0275fac=function(d){return new(d||zu)},zu.\u0275cmp=e.Xpm({type:zu,selectors:[["cvc-add-entity-form-wrapper"]],features:[e.qOj],decls:10,vars:7,consts:[[3,"nzGutter"],["nzFlex","auto"],["fieldComponent",""],["nzFlex","20px"],["type","button","nz-button","","nzType","primary","nzSize","default","nzShape","circle","nz-popover","",3,"disabled","nzPopoverTitle","nzPopoverContent"],["nz-icon","","nzType","plus-circle","nzTheme","outline"],["titleTemplate",""]],template:function(d,c){if(1&d&&(e.TgZ(0,"nz-row",0)(1,"nz-col",1),e.GkF(2,null,2),e.qZA(),e.TgZ(4,"nz-col",3)(5,"button",4),e.ALo(6,"ngrxPush"),e._UZ(7,"span",5),e.qZA()()(),e.YNc(8,Cd,1,1,"ng-template",null,6,e.W1O)),2&d){const z=e.MAs(9);e.Q6J("nzGutter",e.DdM(6,bh)),e.xp6(5),e.Q6J("disabled",null==c.field.props?null:c.field.props.disabled)("nzPopoverTitle",z)("nzPopoverContent",e.lcZ(6,4,c.contentTemplate$))}},dependencies:[xn.ix,fn.w,hn.dQ,Vn.lU,gt.Ls,O.t3,O.SK,P.fM],styles:[".add-button[_ngcontent-%COMP%]{font-size:24px;color:#cfcfdf}"],changeDetection:0}),zu);H1=(0,ze.gn)([(0,Ae.c)()],H1);const qh={wrappers:[{name:"add-entity-form",component:H1}]};class Tu{}Tu.\u0275fac=function(d){return new(d||Tu)},Tu.\u0275mod=e.oAB({type:Tu}),Tu.\u0275inj=e.cJS({imports:[S.ez,P.pP,m.X0.forChild(qh),xn.sL,Vn.$6,gt.PV,O.Jb]});class bu extends m.n2{get errorState(){return this.showError?"error":""}ngOnInit(){this.props.grid={cols:2,...this.props.grid?this.props.grid:void 0}}}bu.\u0275fac=function(){let v;return function(c){return(v||(v=e.n5z(bu)))(c||bu)}}(),bu.\u0275cmp=e.Xpm({type:bu,selectors:[["cvc-field-grid"]],features:[e.qOj],decls:3,vars:1,consts:[[1,"field-grid",3,"ngClass"],["fieldComponent",""]],template:function(d,c){1&d&&(e.TgZ(0,"div",0),e.GkF(1,null,1),e.qZA()),2&d&&e.Q6J("ngClass","cols-"+c.props.grid.cols)},dependencies:[S.mk],styles:[".field-grid.cols-2[_ngcontent-%COMP%]     formly-group:first-of-type{display:grid;grid-template-columns:repeat(2,1fr);gap:8px}.field-grid.cols-3[_ngcontent-%COMP%]     formly-group:first-of-type{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}.field-grid.cols-4[_ngcontent-%COMP%]     formly-group:first-of-type{display:grid;grid-template-columns:repeat(4,1fr);gap:8px}"],changeDetection:0});const Mh={wrappers:[{name:"field-grid",component:bu}]};class Wu{}function Sh(v,d){if(1&v&&(e.TgZ(0,"nz-col",4),e._UZ(1,"formly-field",5),e.qZA()),2&v){const c=d.$implicit;e.Q6J("nzSpan",(null==c.props?null:c.props.colSpan)||12),e.xp6(1),e.Q6J("field",c)}}function C4(v,d){}Wu.\u0275fac=function(d){return new(d||Wu)},Wu.\u0275mod=e.oAB({type:Wu}),Wu.\u0275inj=e.cJS({imports:[S.ez,t.UX,s.U5,O.Jb,m.X0.forChild(Mh)]});const z4=function(){return[6,6]};class zd extends m.n2{get errorState(){return this.showError?"error":""}constructor(){super()}ngOnInit(){this.props.gutterHorizontal=this.props.gutterHorizontal||8,this.props.gutterVertical=this.props.gutterVertical||8}}zd.\u0275fac=function(d){return new(d||zd)},zd.\u0275cmp=e.Xpm({type:zd,selectors:[["cvc-form-card"]],features:[e.qOj],decls:5,vars:5,consts:[[3,"nzTitle","nzExtra"],[3,"nzGutter"],[3,"nzSpan",4,"ngFor","ngForOf"],["cardExtra",""],[3,"nzSpan"],[3,"field"]],template:function(d,c){if(1&d&&(e.TgZ(0,"nz-card",0)(1,"nz-row",1),e.YNc(2,Sh,2,2,"nz-col",2),e.qZA()(),e.YNc(3,C4,0,0,"ng-template",null,3,e.W1O)),2&d){const z=e.MAs(4);e.Q6J("nzTitle",c.props.title)("nzExtra",z),e.xp6(1),e.Q6J("nzGutter",e.DdM(4,z4)),e.xp6(1),e.Q6J("ngForOf",c.field.fieldGroup)}},dependencies:[S.sg,m.cw,O.t3,O.SK,ji.bd]});const Xh={wrappers:[{name:"form-card",component:zd}]};class Zu{}Zu.\u0275fac=function(d){return new(d||Zu)},Zu.\u0275mod=e.oAB({type:Zu}),Zu.\u0275inj=e.cJS({imports:[S.ez,t.u5,m.X0.forChild(Xh),O.Jb,ji.vh,Dt.Wr]});class $1 extends m.n2{ngOnInit(){}}$1.\u0275fac=function(){let v;return function(c){return(v||(v=e.n5z($1)))(c||$1)}}(),$1.\u0275cmp=e.Xpm({type:$1,selectors:[["cvc-form-footer"]],features:[e.qOj],decls:4,vars:0,consts:[[1,"form-footer"],["nzSpan","24",1,"submit-col"],["fieldComponent",""]],template:function(d,c){1&d&&(e.TgZ(0,"nz-row",0)(1,"nz-col",1),e.GkF(2,null,2),e.qZA()())},dependencies:[O.t3,O.SK],styles:[".form-footer[_ngcontent-%COMP%]{margin-top:1em;border-radius:8px;background-color:#f0f0f0;padding:1em}.submit-col[_ngcontent-%COMP%]{text-align:right}"],changeDetection:0});const ba={wrappers:[{name:"form-footer",component:$1}]};class Ju{}Ju.\u0275fac=function(d){return new(d||Ju)},Ju.\u0275mod=e.oAB({type:Ju}),Ju.\u0275inj=e.cJS({imports:[S.ez,O.Jb,m.X0.forChild(ba)]});var T4=a(9241),e4=a(9194),Il=a(6152),Td=a(3513);class Y1{}Y1.\u0275fac=function(d){return new(d||Y1)},Y1.\u0275mod=e.oAB({type:Y1}),Y1.\u0275inj=e.cJS({imports:[S.ez,P._N,P.pP,gt.PV,O.Jb,ji.vh,Td.we,e4.q6,Il.Ph,bt.X,he.ZJ,N.s]});class U1{}U1.\u0275fac=function(d){return new(d||U1)},U1.\u0275mod=e.oAB({type:U1}),U1.\u0275inj=e.cJS({imports:[S.ez,P._N,P.pP,xn.sL,ta.Rt,No.b1]});var b4=a(2340);const t4={VALID:"success",INVALID:"error",PENDING:"processing",DISABLED:"default"};class j1{constructor(){this.tagColor="default"}set cvcFormControlStatus(d){this._status=d,this.tagColor=d?t4[d]:"default"}get cvcFormControlStatus(){return this._status}}function M4(v,d){if(1&v&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&v){const c=e.oxw(2).ctrl;e.xp6(1),e.hij(" ",c.value," ")}}function xh(v,d){1&v&&(e.TgZ(0,"span",8),e._uU(1," undefined "),e.qZA())}function S4(v,d){if(1&v&&(e.TgZ(0,"nz-list-item")(1,"nz-list-item-meta")(2,"nz-list-item-meta-title"),e._uU(3),e.qZA(),e.TgZ(4,"nz-list-item-meta-description"),e.YNc(5,M4,2,1,"span",5),e.YNc(6,xh,2,0,"span",6),e.qZA()(),e.TgZ(7,"nz-list-item-extra"),e._UZ(8,"cvc-form-status-tag",7),e.qZA()()),2&v){const c=e.oxw(),z=c.key,se=c.ctrl;e.xp6(3),e.hij(" ",z," "),e.xp6(2),e.Q6J("ngIf",se.value),e.xp6(1),e.Q6J("ngIf",!se.value),e.xp6(2),e.Q6J("cvcFormControlStatus",se.status)}}function E4(v,d){}j1.\u0275fac=function(d){return new(d||j1)},j1.\u0275cmp=e.Xpm({type:j1,selectors:[["cvc-form-status-tag"]],inputs:{cvcFormControlStatus:"cvcFormControlStatus"},decls:3,vars:4,consts:[[3,"nzColor"]],template:function(d,c){1&d&&(e.TgZ(0,"nz-tag",0),e._uU(1),e.ALo(2,"lowercase"),e.qZA()),2&d&&(e.Q6J("nzColor",c.tagColor),e.xp6(1),e.hij(" ",c.cvcFormControlStatus?e.lcZ(2,2,c.cvcFormControlStatus):"UNKNOWN","\n"))},dependencies:[bt.j,S.i8]});const n4=function(v,d){return{key:v,ctrl:d}};function x4(v,d){if(1&v&&e.YNc(0,E4,0,0,"ng-template",12),2&v){const c=d.$implicit;e.oxw(3);const z=e.MAs(3);e.Q6J("ngTemplateOutlet",z)("ngTemplateOutletContext",e.WLB(2,n4,c.key,c.value))}}function D4(v,d){if(1&v&&(e.TgZ(0,"strong"),e._uU(1),e.qZA()),2&v){const c=e.oxw(2).key;e.xp6(1),e.Oqu(c)}}function Al(v,d){if(1&v&&(e.TgZ(0,"nz-list-item")(1,"nz-card",9)(2,"nz-list",10),e.YNc(3,x4,1,5,null,4),e.ALo(4,"keyvalue"),e.qZA()(),e.YNc(5,D4,2,1,"ng-template",null,11,e.W1O),e.qZA()),2&v){const c=e.oxw(),z=c.key,se=c.ctrl;e.xp6(1),e.Q6J("nzTitle",z),e.xp6(2),e.Q6J("ngForOf",e.lcZ(4,2,se.controls))}}function Dh(v,d){if(1&v&&(e.YNc(0,S4,9,4,"nz-list-item",5),e.YNc(1,Al,7,4,"nz-list-item",5)),2&v){const c=d.ctrl;e.Q6J("ngIf",!c.controls),e.xp6(1),e.Q6J("ngIf",c.controls)}}function o4(v,d){}function r4(v,d){if(1&v&&e.YNc(0,o4,0,0,"ng-template",12),2&v){const c=d.$implicit;e.oxw();const z=e.MAs(3);e.Q6J("ngTemplateOutlet",z)("ngTemplateOutletContext",e.WLB(2,n4,c.key,c.value))}}function s4(v,d){if(1&v&&(e.ynx(0),e.TgZ(1,"nz-list",2),e.YNc(2,Dh,2,2,"ng-template",null,3,e.W1O),e.qZA(),e.YNc(4,r4,1,5,null,4),e.ALo(5,"keyvalue"),e.BQk()),2&v){const c=d.ngIf;e.xp6(4),e.Q6J("ngForOf",e.lcZ(5,1,c.controls))}}function O4(v,d){1&v&&e._uU(0," No AbstractFormControl provided. ")}class bd{set cvcAbstractControl(d){if(!d)throw new Error("cvc-form-debug-field-list requires valid cvcFormControl Input.");this._cvcFormControl=d,this.formControl=d}get cvcFormControl(){return this._cvcFormControl}constructor(){}ngOnInit(){}}var G1;function Oh(v,d){if(1&v&&(e.ynx(0),e._UZ(1,"ngx-json-viewer",9),e.BQk()),2&v){const c=e.oxw();e.xp6(1),e.Q6J("json",c.watchModel)}}function w4(v,d){if(1&v&&(e.ynx(0),e.TgZ(1,"nz-descriptions",10)(2,"nz-descriptions-item",11),e._UZ(3,"cvc-form-status-tag",12),e.qZA(),e.TgZ(4,"nz-descriptions-item",13),e._uU(5),e.qZA(),e.TgZ(6,"nz-descriptions-item",14),e._uU(7),e.qZA(),e.TgZ(8,"nz-descriptions-item",15),e._uU(9),e.qZA(),e.TgZ(10,"nz-descriptions-item",16),e._uU(11),e.qZA(),e.TgZ(12,"nz-descriptions-item",17),e._uU(13),e.qZA()(),e.BQk()),2&v){const c=e.oxw();e.xp6(1),e.Q6J("nzColumn",1),e.xp6(2),e.Q6J("cvcFormControlStatus",null==c.cvcForm?null:c.cvcForm.status),e.xp6(2),e.hij(" ",null==c.cvcForm?null:c.cvcForm.pending," "),e.xp6(2),e.hij(" ",null==c.cvcForm?null:c.cvcForm.touched," "),e.xp6(2),e.hij(" ",null==c.cvcForm?null:c.cvcForm.valid," "),e.xp6(2),e.hij(" ",null==c.cvcForm?null:c.cvcForm.dirty," "),e.xp6(2),e.hij(" ",null==c.cvcForm?null:c.cvcForm.enabled," ")}}function P4(v,d){if(1&v&&(e.ynx(0),e._UZ(1,"cvc-form-debug-field-list",18),e.BQk()),2&v){const c=e.oxw();e.xp6(1),e.Q6J("cvcAbstractControl",c.cvcForm)}}function eh(v,d){1&v&&(e.ynx(0),e._uU(1," State Content "),e.BQk())}function wh(v,d){if(1&v&&(e.TgZ(0,"nz-row")(1,"nz-col",19),e._uU(2," Form Details "),e.qZA(),e.TgZ(3,"nz-col",20),e._UZ(4,"cvc-form-status-tag",12),e.qZA()()),2&v){const c=e.oxw();e.xp6(4),e.Q6J("cvcFormControlStatus",null==c.cvcForm?null:c.cvcForm.status)}}bd.\u0275fac=function(d){return new(d||bd)},bd.\u0275cmp=e.Xpm({type:bd,selectors:[["cvc-form-debug-field-list"]],inputs:{cvcAbstractControl:"cvcAbstractControl"},decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["noFormControl",""],["nzSize","small"],["ctrlTemplateRef",""],[4,"ngFor","ngForOf"],[4,"ngIf"],["style","padding: 0px 4px; color: white; background-color: #ccc",4,"ngIf"],[3,"cvcFormControlStatus"],[2,"padding","0px 4px","color","white","background-color","#ccc"],["nzSize","small",2,"width","100%",3,"nzTitle"],["nzSize","small",2,"padding","0"],["cardExtra",""],[3,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(d,c){if(1&d&&(e.YNc(0,s4,6,3,"ng-container",0),e.YNc(1,O4,1,0,"ng-template",null,1,e.W1O)),2&d){const z=e.MAs(2);e.Q6J("ngIf",c.formControl)("ngIfElse",z)}},dependencies:[S.sg,S.O5,S.tP,ji.bd,Il.n_,Il.AA,Il.yi,Il.IO,Il.Pb,Il.yw,j1,S.Nd],styles:["[_nghost-%COMP%]     nz-card .ant-card-body{padding:6px 0}"]});let Q1=((G1=class{constructor(d){this.cdr=d,this.selectedIndex=0}ngOnInit(){if(!this.cvcForm)throw new Error("cvc-form-debug requires valid cvcForm Input.");this.valueChange$=new it.X(this.cvcForm.value),this.statusChange$=new it.X(this.cvcForm.status),this.formChange$=eo([this.statusChange$,this.valueChange$]),this.watchModel=this.cvcModel,this.subscriptions=[this.cvcForm.valueChanges.subscribe(d=>{this.watchModel={...this.cvcModel},this.valueChange$.next(d)}),this.cvcForm.statusChanges.subscribe(d=>{this.statusChange$.next(d)}),this.formChange$.subscribe(d=>{this.cdr.detectChanges()})]}}).\u0275fac=function(d){return new(d||G1)(e.Y36(e.sBO))},G1.\u0275cmp=e.Xpm({type:G1,selectors:[["cvc-form-debug"]],inputs:{cvcForm:"cvcForm",cvcModel:"cvcModel"},decls:14,vars:7,consts:[["nzSize","small","nzBordered","true",3,"nzTitle"],["nzSize","small",3,"nzSelectedIndex","nzSelectedIndexChange"],["nzTitle","Model"],["nzTitle","Controls"],["nzTitle","State"],["nzTitle","Form Status"],[3,"ngSwitch"],[4,"ngSwitchCase"],["cardTitle",""],[3,"json"],["nzBordered","","nzSize","small",3,"nzColumn"],["nzTitle","status"],[3,"cvcFormControlStatus"],["nzTitle","pending"],["nzTitle","touched"],["nzTitle","valid"],["nzTitle","dirty"],["nzTitle","enabled"],[3,"cvcAbstractControl"],["nzFlex","2"],["nzFlex","3",1,"form-status-col"]],template:function(d,c){if(1&d&&(e.TgZ(0,"nz-card",0)(1,"nz-card-tab")(2,"nz-tabset",1),e.NdJ("nzSelectedIndexChange",function(se){return c.selectedIndex=se}),e._UZ(3,"nz-tab",2)(4,"nz-tab",3)(5,"nz-tab",4)(6,"nz-tab",5),e.qZA()(),e.ynx(7,6),e.YNc(8,Oh,2,1,"ng-container",7),e.YNc(9,w4,14,7,"ng-container",7),e.YNc(10,P4,2,1,"ng-container",7),e.YNc(11,eh,2,0,"ng-container",7),e.BQk(),e.qZA(),e.YNc(12,wh,5,1,"ng-template",null,8,e.W1O)),2&d){const z=e.MAs(13);e.Q6J("nzTitle",z),e.xp6(2),e.Q6J("nzSelectedIndex",c.selectedIndex),e.xp6(5),e.Q6J("ngSwitch",c.selectedIndex),e.xp6(1),e.Q6J("ngSwitchCase",0),e.xp6(1),e.Q6J("ngSwitchCase",3),e.xp6(1),e.Q6J("ngSwitchCase",1),e.xp6(1),e.Q6J("ngSwitchCase",2)}},dependencies:[S.RF,S.n9,O.t3,O.SK,ji.bd,ji._i,Td.xH,Td.xw,e4.R7,e4.uj,N.Y,bd,j1],styles:["[_nghost-%COMP%]{display:block}.form-status-col[_ngcontent-%COMP%]{text-align:right}.form-status-col[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]:last-child{margin-right:0}"],changeDetection:0}),G1);var Md;function Ph(v,d){if(1&v&&(e.TgZ(0,"nz-col",4),e._UZ(1,"cvc-form-debug",5),e.qZA()),2&v){const c=e.oxw();e.Q6J("nzSpan",8),e.xp6(1),e.Q6J("cvcForm",c.form)("cvcModel",c.model)}}Q1=(0,ze.gn)([(0,Ae.c)({arrayName:"subscriptions"})],Q1);const rp=function(){return[8,8]};let nh=((Md=class extends m.n2{constructor(d){super()}get errorState(){return this.showError?"error":""}ngOnInit(){this.props.title=this.props.title||"Form Card",this.props.submitLabel=this.props.submitLabel||"Submit",this.props.showDevPanel=!b4.N.production&&(this.props.showDevPanel||false)}}).\u0275fac=function(d){return new(d||Md)(e.Y36(e.sBO))},Md.\u0275cmp=e.Xpm({type:Md,selectors:[["cvc-form-layout-wrapper"]],features:[e.qOj],decls:5,vars:4,consts:[[3,"nzGutter"],[1,"form-col",3,"nzSpan"],["fieldComponent",""],["class","status-col",3,"nzSpan",4,"ngIf"],[1,"status-col",3,"nzSpan"],[3,"cvcForm","cvcModel"]],template:function(d,c){1&d&&(e.TgZ(0,"nz-row",0)(1,"nz-col",1),e.GkF(2,null,2),e.qZA(),e.YNc(4,Ph,2,3,"nz-col",3),e.qZA()),2&d&&(e.Q6J("nzGutter",e.DdM(3,rp)),e.xp6(1),e.Q6J("nzSpan",c.props.showDevPanel?16:24),e.xp6(3),e.Q6J("ngIf",c.props.showDevPanel))},dependencies:[S.O5,O.t3,O.SK,Q1],changeDetection:0}),Md);nh=(0,ze.gn)([(0,Ae.c)({arrayName:"subscriptions"})],nh);const a4={wrappers:[{name:"form-layout",component:nh}]};class Ku{}Ku.\u0275fac=function(d){return new(d||Ku)},Ku.\u0275mod=e.oAB({type:Ku}),Ku.\u0275inj=e.cJS({imports:[S.ez,m.X0.forChild(a4),xn.sL,ji.vh,gt.PV,bt.X,Td.we,Vn.$6,Il.Ph,O.Jb,T4.h,U1,Y1,N.s]});class Kl{}Kl.\u0275fac=function(d){return new(d||Kl)},Kl.\u0275mod=e.oAB({type:Kl}),Kl.\u0275inj=e.cJS({imports:[S.ez,Ku,Zu,Ju,yt,Wu,Tu]});class Gs{}Gs.\u0275fac=function(d){return new(d||Gs)},Gs.\u0275mod=e.oAB({type:Gs}),Gs.\u0275inj=e.cJS({providers:[{provide:m.l7,multi:!0,useFactory:function D(v){return{extensions:[{name:"observeQueryParam",extension:new x(v)}]}},deps:[o.gz]}],imports:[m.X0.forRoot({extras:{immutable:!1,lazyRender:!0},validationMessages:[{name:"required",message:"This field is required."},{name:"minLength",message:(v,d)=>`This field has a minimum length of ${d.templateOptions?.minLength}.`},{name:"maxLength",message:(v,d)=>`This field has a maximum length of ${d.templateOptions?.maxLength}.`},{name:"min",message:(v,d)=>`This field has a minimum value of ${d.templateOptions?.min}.`},{name:"max",message:(v,d)=>`This field has a maximum value of ${d.templateOptions?.max}.`},{name:"pattern",message:(v,d)=>`This field's value must fit the pattern ${d.templateOptions?.pattern}.`},{name:"integer",message:(v,d)=>"Value must be an integer."},{name:"nucleotide",message:(v,d)=>"Value must only contain A, C, T, G, and/or /."},{name:"clinvar",message:(v,d)=>"Value must be an integer."}],validators:[{name:"integer",validation:(v,d)=>""===v.value||null==v.value||/^\d+$/.test(v.value)?null:{integer:!0}},{name:"nucleotide",validation:(v,d)=>""===v.value||null==v.value||/^[ACTG\/]+$/.test(v.value)?null:{nucleotide:!0}},{name:"clinvar",validation:(v,d)=>{for(var c of v.value)if(""!==c&&null!=c&&!/^\d+$/.test(c))return{clinvar:!0};return null}}]}),t.UX,s.U5,f.u,Kl,N.s,t.UX,m.X0,f.u,s.U5,Kl,Uc]})},9289:(Pt,we,a)=>{function t(x){let D={value:void 0,unset:void 0};return x&&x.trim().length>0?D.value=x.trim():D.unset=!0,D}function o(x){let D={value:void 0,unset:void 0};return void 0!==x?D.value=x:D.unset=!0,D}a.d(we,{aP:()=>T,li:()=>m,uP:()=>o,xt:()=>t});var m=(()=>{return(x=m||(m={}))[x.NotApplicable=0]="NotApplicable",x[x.NoneFound=1]="NoneFound",x[x.Found=2]="Found",m;var x})();const T=[{value:void 0,label:""},{value:"1",label:"1"},{value:"2",label:"2"},{value:"3",label:"3"},{value:"4",label:"4"},{value:"5",label:"5"},{value:"6",label:"6"},{value:"7",label:"7"},{value:"8",label:"8"},{value:"9",label:"9"},{value:"10",label:"10"},{value:"11",label:"11"},{value:"12",label:"12"},{value:"13",label:"13"},{value:"14",label:"14"},{value:"15",label:"15"},{value:"16",label:"16"},{value:"17",label:"17"},{value:"18",label:"18"},{value:"19",label:"19"},{value:"20",label:"20"},{value:"21",label:"21"},{value:"22",label:"22"},{value:"X",label:"X"},{value:"Y",label:"Y"},{value:"MT",label:"MT"}]},7630:(Pt,we,a)=>{a.d(we,{A4J:()=>cr,A94:()=>Qa,AIY:()=>Bs,AMF:()=>gs,AO2:()=>P,B0s:()=>Qo,B97:()=>Ws,BQZ:()=>G,BTF:()=>Kn,BYO:()=>ma,Bk6:()=>Nc,Bo4:()=>Cl,Cp0:()=>ie,D9L:()=>wa,Del:()=>Ic,DkJ:()=>$n,DzV:()=>Aa,E1C:()=>sl,E2B:()=>Cc,E8d:()=>D,EFm:()=>Va,EH_:()=>Os,EwB:()=>ia,F1Y:()=>Ds,F3s:()=>un,F4e:()=>Tc,FB1:()=>ct,FJi:()=>nt,FNv:()=>Z,FOU:()=>oa,Fvz:()=>Ie,GYx:()=>jr,Gbq:()=>ar,Gnp:()=>kc,HUC:()=>mn,Hmr:()=>oo,HwR:()=>Ha,IP1:()=>ol,IRu:()=>bt,IZ6:()=>Zi,JDX:()=>rn,Kk:()=>Be,Kmw:()=>Ea,L5n:()=>zs,L8L:()=>ss,LHC:()=>Ec,LLl:()=>Ms,LUc:()=>Gr,LiH:()=>Dr,Lr0:()=>Xr,MCG:()=>$s,MNv:()=>Wa,MPi:()=>zc,MYm:()=>zr,Mgx:()=>w,MsG:()=>j,N$2:()=>Jr,NQC:()=>Ot,O2u:()=>yc,OHm:()=>nr,OIL:()=>io,OfU:()=>F,P_b:()=>Ar,Q4m:()=>uc,QVn:()=>aa,Qtd:()=>Yl,Qzn:()=>Oo,R8F:()=>La,R8w:()=>e,RTy:()=>R,RYL:()=>sa,Rdc:()=>wo,SrV:()=>It,Sx0:()=>ce,T1I:()=>fc,TNk:()=>pl,Tg0:()=>ya,TiL:()=>zo,Tq1:()=>Lt,Tt7:()=>cs,UIR:()=>fr,UWf:()=>or,VZq:()=>Uo,WFw:()=>Bo,WGV:()=>Ac,WOS:()=>Ja,WRV:()=>os,X5f:()=>Wi,XQi:()=>Dc,Xft:()=>vc,Y6e:()=>Na,YMi:()=>On,Y_K:()=>xc,Ybm:()=>Un,ZYZ:()=>lo,Zo2:()=>Ft,_3P:()=>N,_Wm:()=>x,_eC:()=>uo,_jb:()=>is,_nE:()=>Ga,aC3:()=>fa,bgg:()=>bs,c$m:()=>ur,cCu:()=>qr,cEv:()=>J,cIw:()=>Ua,cMj:()=>_a,czh:()=>Ba,d4o:()=>ke,dDn:()=>kr,dGO:()=>la,db2:()=>xr,eDl:()=>_c,eJ3:()=>ka,eY8:()=>no,ejK:()=>va,fow:()=>fe,fwG:()=>Ri,g0X:()=>$l,ghc:()=>st,h01:()=>B,hVB:()=>fl,h_Y:()=>Vs,huM:()=>$e,i44:()=>jt,iGM:()=>Mo,iJT:()=>yl,iST:()=>mr,io:()=>tr,iwm:()=>m,jMx:()=>vs,jmY:()=>ga,jw9:()=>Et,k7O:()=>V,kQf:()=>Ro,kQl:()=>gt,kqt:()=>X,l$X:()=>Vo,l4w:()=>mc,lYz:()=>kt,lcA:()=>Fr,m$d:()=>Lc,m55:()=>re,mII:()=>jo,mdl:()=>s,mki:()=>hr,mpB:()=>Dt,nSb:()=>ms,nnL:()=>dl,o71:()=>yt,oRL:()=>xe,olA:()=>ca,otH:()=>ns,pHu:()=>Ps,pP7:()=>Tt,pR8:()=>Er,q1D:()=>_l,q8c:()=>ve,q9q:()=>vn,qf4:()=>yn,qgP:()=>Sc,rJ8:()=>vr,rZD:()=>pt,rzy:()=>mo,sA8:()=>fs,sBY:()=>Pc,sLD:()=>gl,sfv:()=>De,sjj:()=>ja,tI1:()=>he,tJ6:()=>ne,tWC:()=>ul,td:()=>Lo,ti:()=>Cr,tji:()=>Ia,tw_:()=>wi,u4i:()=>L,uBv:()=>T,ubO:()=>Vc,vMt:()=>So,vjc:()=>bc,vv6:()=>Rl,vz2:()=>Ur,wJ2:()=>O,wRZ:()=>ps,wbP:()=>xs,wg3:()=>wc,wkr:()=>an,wpb:()=>Pe,xlL:()=>Ce,y1h:()=>te,yic:()=>wt,yqR:()=>vl,z8D:()=>hl,zOE:()=>pa,z_7:()=>Mc,zpu:()=>da,zwS:()=>To});var t=a(3595),o=a(4650),m=(()=>{return(W=m||(m={})).Na="NA",W.TierIii="TIER_III",W.TierIiLevelC="TIER_II_LEVEL_C",W.TierIiLevelD="TIER_II_LEVEL_D",W.TierIv="TIER_IV",W.TierILevelA="TIER_I_LEVEL_A",W.TierILevelB="TIER_I_LEVEL_B",m;var W})(),s=(()=>{return(W=s||(s={})).DoesNotSupport="DOES_NOT_SUPPORT",W.Supports="SUPPORTS",s;var W})(),N=(()=>{return(W=N||(N={})).AdverseResponse="ADVERSE_RESPONSE",W.Benign="BENIGN",W.BetterOutcome="BETTER_OUTCOME",W.LikelyBenign="LIKELY_BENIGN",W.LikelyOncogenic="LIKELY_ONCOGENIC",W.LikelyPathogenic="LIKELY_PATHOGENIC",W.Na="NA",W.Negative="NEGATIVE",W.Oncogenic="ONCOGENIC",W.Pathogenic="PATHOGENIC",W.PoorOutcome="POOR_OUTCOME",W.Positive="POSITIVE",W.ReducedSensitivity="REDUCED_SENSITIVITY",W.Resistance="RESISTANCE",W.Sensitivityresponse="SENSITIVITYRESPONSE",W.UncertainSignificance="UNCERTAIN_SIGNIFICANCE",N;var W})(),L=(()=>{return(W=L||(L={})).AmpLevel="AMP_LEVEL",W.AssertionDirection="ASSERTION_DIRECTION",W.AssertionType="ASSERTION_TYPE",W.DiseaseName="DISEASE_NAME",W.EvidenceItemsCount="EVIDENCE_ITEMS_COUNT",W.Id="ID",W.Significance="SIGNIFICANCE",W.Status="STATUS",W.Summary="SUMMARY",W.TherapyName="THERAPY_NAME",L;var W})(),T=(()=>{return(W=T||(T={})).Diagnostic="DIAGNOSTIC",W.Oncogenic="ONCOGENIC",W.Predictive="PREDICTIVE",W.Predisposing="PREDISPOSING",W.Prognostic="PROGNOSTIC",T;var W})(),x=(()=>{return(W=x||(x={})).And="AND",W.Or="OR",x;var W})(),D=(()=>{return(W=D||(D={})).EvidenceItemCount="EVIDENCE_ITEM_COUNT",W.Name="NAME",W.NctId="NCT_ID",W.SourceCount="SOURCE_COUNT",D;var W})(),w=(()=>{return(W=w||(w={})).Conflict="CONFLICT",W.Expired="EXPIRED",W.Missing="MISSING",W.Valid="VALID",w;var W})(),F=(()=>{return(W=F||(F={})).Assertion="ASSERTION",W.EvidenceItem="EVIDENCE_ITEM",W.Gene="GENE",W.MolecularProfile="MOLECULAR_PROFILE",W.Source="SOURCE",W.Variant="VARIANT",W.VariantGroup="VARIANT_GROUP",F;var W})(),B=(()=>{return(W=B||(B={})).Created="CREATED",W.LastModified="LAST_MODIFIED",B;var W})(),e=(()=>{return(W=e||(e={})).AssertionCount="ASSERTION_COUNT",W.Doid="DOID",W.EvidenceItemCount="EVIDENCE_ITEM_COUNT",W.GeneCount="GENE_COUNT",W.Name="NAME",W.VariantCount="VARIANT_COUNT",e;var W})(),P=(()=>{return(W=P||(P={})).Accepted="ACCEPTED",W.AssertionAccepted="ASSERTION_ACCEPTED",W.AssertionRejected="ASSERTION_REJECTED",W.AssertionReverted="ASSERTION_REVERTED",W.AssertionSubmitted="ASSERTION_SUBMITTED",W.Commented="COMMENTED",W.CuratedSourceSuggestion="CURATED_SOURCE_SUGGESTION",W.DeprecatedMolecularProfile="DEPRECATED_MOLECULAR_PROFILE",W.DeprecatedVariant="DEPRECATED_VARIANT",W.Flagged="FLAGGED",W.FlagResolved="FLAG_RESOLVED",W.PublicationSuggested="PUBLICATION_SUGGESTED",W.Rejected="REJECTED",W.RejectedSourceSuggestion="REJECTED_SOURCE_SUGGESTION",W.RequeuedSourceSuggestion="REQUEUED_SOURCE_SUGGESTION",W.Reverted="REVERTED",W.RevisionAccepted="REVISION_ACCEPTED",W.RevisionRejected="REVISION_REJECTED",W.RevisionSuggested="REVISION_SUGGESTED",W.RevisionSuperseded="REVISION_SUPERSEDED",W.Submitted="SUBMITTED",P;var W})(),O=(()=>{return(W=O||(O={})).Organization="ORGANIZATION",W.Subject="SUBJECT",W.Unscoped="UNSCOPED",W.User="USER",O;var W})(),he=(()=>{return(W=he||(he={})).DoesNotSupport="DOES_NOT_SUPPORT",W.Na="NA",W.Supports="SUPPORTS",he;var W})(),ce=(()=>{return(W=ce||(ce={})).A="A",W.B="B",W.C="C",W.D="D",W.E="E",ce;var W})(),te=(()=>{return(W=te||(te={})).AdverseResponse="ADVERSE_RESPONSE",W.Benign="BENIGN",W.BetterOutcome="BETTER_OUTCOME",W.DominantNegative="DOMINANT_NEGATIVE",W.GainOfFunction="GAIN_OF_FUNCTION",W.LikelyBenign="LIKELY_BENIGN",W.LikelyPathogenic="LIKELY_PATHOGENIC",W.LossOfFunction="LOSS_OF_FUNCTION",W.Na="NA",W.Negative="NEGATIVE",W.Neomorphic="NEOMORPHIC",W.Oncogenicity="ONCOGENICITY",W.Pathogenic="PATHOGENIC",W.PoorOutcome="POOR_OUTCOME",W.Positive="POSITIVE",W.Predisposition="PREDISPOSITION",W.Protectiveness="PROTECTIVENESS",W.ReducedSensitivity="REDUCED_SENSITIVITY",W.Resistance="RESISTANCE",W.Sensitivityresponse="SENSITIVITYRESPONSE",W.UnalteredFunction="UNALTERED_FUNCTION",W.UncertainSignificance="UNCERTAIN_SIGNIFICANCE",W.Unknown="UNKNOWN",te;var W})(),ie=(()=>{return(W=ie||(ie={})).Description="DESCRIPTION",W.DiseaseName="DISEASE_NAME",W.EvidenceDirection="EVIDENCE_DIRECTION",W.EvidenceLevel="EVIDENCE_LEVEL",W.EvidenceRating="EVIDENCE_RATING",W.EvidenceType="EVIDENCE_TYPE",W.Id="ID",W.Significance="SIGNIFICANCE",W.Status="STATUS",W.TherapyName="THERAPY_NAME",W.VariantOrigin="VARIANT_ORIGIN",ie;var W})(),R=(()=>{return(W=R||(R={})).Accepted="ACCEPTED",W.Rejected="REJECTED",W.Submitted="SUBMITTED",R;var W})(),re=(()=>{return(W=re||(re={})).Accepted="ACCEPTED",W.All="ALL",W.Rejected="REJECTED",W.Submitted="SUBMITTED",re;var W})(),X=(()=>{return(W=X||(X={})).Diagnostic="DIAGNOSTIC",W.Functional="FUNCTIONAL",W.Oncogenic="ONCOGENIC",W.Predictive="PREDICTIVE",W.Predisposing="PREDISPOSING",W.Prognostic="PROGNOSTIC",X;var W})(),G=(()=>{return(W=G||(G={})).Open="OPEN",W.Resolved="RESOLVED",G;var W})(),De=(()=>{return(W=De||(De={})).Assertion="ASSERTION",W.EvidenceItem="EVIDENCE_ITEM",W.Gene="GENE",W.MolecularProfile="MOLECULAR_PROFILE",W.Variant="VARIANT",W.VariantGroup="VARIANT_GROUP",De;var W})(),Ie=(()=>{return(W=Ie||(Ie={})).AssertionCount="assertionCount",W.DiseaseName="diseaseName",W.EntrezSymbol="entrezSymbol",W.EvidenceItemCount="evidenceItemCount",W.GeneAlias="geneAlias",W.MolecularProfileCount="molecularProfileCount",W.TherapyName="therapyName",W.VariantCount="variantCount",Ie;var W})(),xe=(()=>{return(W=xe||(xe={})).Assertion="ASSERTION",W.EvidenceItem="EVIDENCE_ITEM",W.Gene="GENE",W.MolecularProfile="MOLECULAR_PROFILE",W.Variant="VARIANT",W.VariantGroup="VARIANT_GROUP",xe;var W})(),j=(()=>{return(W=j||(j={})).All="ALL",W.WithAccepted="WITH_ACCEPTED",W.WithAcceptedOrSubmitted="WITH_ACCEPTED_OR_SUBMITTED",W.WithSubmitted="WITH_SUBMITTED",j;var W})(),Z=(()=>{return(W=Z||(Z={})).AssertionCount="assertionCount",W.EvidenceItemCount="evidenceItemCount",W.MolecularProfileScore="molecularProfileScore",W.VariantCount="variantCount",Z;var W})(),fe=(()=>{return(W=fe||(fe={})).Mention="MENTION",W.Subscription="SUBSCRIPTION",fe;var W})(),Ce=(()=>{return(W=Ce||(Ce={})).Id="ID",W.Name="NAME",Ce;var W})(),kt=(()=>{return(W=kt||(kt={})).AssertionCount="ASSERTION_COUNT",W.EvidenceItemCount="EVIDENCE_ITEM_COUNT",W.HpoId="HPO_ID",W.Name="NAME",kt;var W})(),Ot=(()=>{return(W=Ot||(Ot={})).Read="READ",W.Unread="UNREAD",Ot;var W})(),rn=(()=>{return(W=rn||(rn={})).Grch37="GRCH37",W.Grch38="GRCH38",W.Ncbi36="NCBI36",rn;var W})(),nt=(()=>{return(W=nt||(nt={})).Accepted="ACCEPTED",W.New="NEW",W.Rejected="REJECTED",W.Superseded="SUPERSEDED",nt;var W})(),pt=(()=>{return(W=pt||(pt={})).Assertion="ASSERTION",W.EvidenceItem="EVIDENCE_ITEM",W.Gene="GENE",W.MolecularProfile="MOLECULAR_PROFILE",W.Revision="REVISION",W.Variant="VARIANT",W.VariantGroup="VARIANT_GROUP",pt;var W})(),It=(()=>{return(W=It||(It={})).Asc="ASC",W.Desc="DESC",It;var W})(),wt=(()=>{return(W=wt||(wt={})).Asco="ASCO",W.Ash="ASH",W.Pubmed="PUBMED",wt;var W})(),un=(()=>{return(W=un||(un={})).Curated="CURATED",W.New="NEW",W.Rejected="REJECTED",un;var W})(),Et=(()=>{return(W=Et||(Et={})).Citation="CITATION",W.CitationId="CITATION_ID",W.CreatedAt="CREATED_AT",W.DiseaseName="DISEASE_NAME",W.SourceType="SOURCE_TYPE",W.Submitter="SUBMITTER",Et;var W})(),gt=(()=>{return(W=gt||(gt={})).Authors="AUTHORS",W.CitationId="CITATION_ID",W.EvidenceCount="EVIDENCE_COUNT",W.Journal="JOURNAL",W.Name="NAME",W.SourceType="SOURCE_TYPE",W.SuggestionCount="SUGGESTION_COUNT",W.Year="YEAR",gt;var W})(),yt=(()=>{return(W=yt||(yt={})).Assertion="ASSERTION",W.EvidenceItem="EVIDENCE_ITEM",W.Gene="GENE",W.MolecularProfile="MOLECULAR_PROFILE",W.Revision="REVISION",W.SourceSuggestion="SOURCE_SUGGESTION",W.Variant="VARIANT",W.VariantGroup="VARIANT_GROUP",yt;var W})(),Dt=(()=>{return(W=Dt||(Dt={})).Assertion="ASSERTION",W.EvidenceItem="EVIDENCE_ITEM",W.Gene="GENE",W.MolecularProfile="MOLECULAR_PROFILE",W.Revision="REVISION",W.Role="ROLE",W.Variant="VARIANT",W.VariantGroup="VARIANT_GROUP",Dt;var W})(),an=(()=>{return(W=an||(an={})).Combination="COMBINATION",W.Sequential="SEQUENTIAL",W.Substitutes="SUBSTITUTES",an;var W})(),mn=(()=>{return(W=mn||(mn={})).AssertionCount="ASSERTION_COUNT",W.EvidenceItemCount="EVIDENCE_ITEM_COUNT",W.Name="NAME",W.NcitId="NCIT_ID",mn;var W})(),jt=(()=>{return(W=jt||(jt={})).Admin="ADMIN",W.Curator="CURATOR",W.Editor="EDITOR",jt;var W})(),bt=(()=>{return(W=bt||(bt={})).Id="ID",W.LastAction="LAST_ACTION",W.Name="NAME",W.Role="ROLE",bt;var W})(),ct=(()=>{return(W=ct||(ct={})).EvidenceItemCount="EVIDENCE_ITEM_COUNT",W.GeneNames="GENE_NAMES",W.Name="NAME",W.VariantCount="VARIANT_COUNT",W.VariantNames="VARIANT_NAMES",ct;var W})(),ke=(()=>{return(W=ke||(ke={})).CoordinateEnd="COORDINATE_END",W.CoordinateStart="COORDINATE_START",W.Name="NAME",ke;var W})(),$e=(()=>{return(W=$e||($e={})).CommonGermline="COMMON_GERMLINE",W.Mixed="MIXED",W.Na="NA",W.RareGermline="RARE_GERMLINE",W.Somatic="SOMATIC",W.Unknown="UNKNOWN",$e;var W})(),Pe=(()=>{return(W=Pe||(Pe={})).Name="NAME",W.Soid="SOID",W.VariantCount="VARIANT_COUNT",Pe;var W})(),Tt=(()=>{return(W=Tt||(Tt={})).DiseaseName="diseaseName",W.EntrezSymbol="entrezSymbol",W.TherapyName="therapyName",W.VariantName="variantName",Tt;var W})();const me=t.Ps`
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
    `,ue=t.Ps`
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
    ${me}`,ze=t.Ps`
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
    ${me}`,Ae=t.Ps`
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
    `,Gt=t.Ps`
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
    `,Ut=t.Ps`
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
    ${Gt}`,Ze=t.Ps`
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
    ${me}`,tt=t.Ps`
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
    ${me}`,dt=t.Ps`
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
    `,Ht=t.Ps`
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
    ${dt}`,_t=t.Ps`
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
    `,nn=t.Ps`
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
    `,At=t.Ps`
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
    `,Qe=t.Ps`
    fragment QuicksearchResult on SearchResult {
  id
  resultType
  name
  matchingText
}
    `,H=t.Ps`
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
    `,Q=t.Ps`
    fragment menuMolecularProfile on MolecularProfile {
  id
  name
  link
  flagged
}
    `,_e=t.Ps`
    fragment orgPopover on Organization {
  id
  profileImagePath(size: 64)
  name
  description
  url
}
    `,ut=t.Ps`
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
    `,de=t.Ps`
    fragment validationError on FieldValidationError {
  fieldName
  error
}
    `,Te=t.Ps`
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
    `,lt=t.Ps`
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
    `,qt=t.Ps`
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
    `,We=t.Ps`
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
    `,Ve=t.Ps`
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
    `,Ye=t.Ps`
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
    `,Oe=t.Ps`
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
    `,le=t.Ps`
    fragment BrowseVariantGroupRowFields on BrowseVariantGroup {
  id
  name
  link
  geneNames
  variantNames
  variantCount
  evidenceItemCount
}
    `,Ee=t.Ps`
    fragment variantTypePopover on VariantTypePopover {
  id
  name
  url
  soid
  variantCount
}
    `,ee=t.Ps`
    fragment VariantTypeBrowseTableRowFields on BrowseVariantType {
  id
  name
  soid
  url
  variantCount
  link
}
    `,et=t.Ps`
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
    `,ye=t.Ps`
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
    `,ot=t.Ps`
    fragment menuVariantType on BrowseVariantType {
  id
  name
  link
}
    `,Jt=t.Ps`
    fragment menuVariant on Variant {
  id
  name
  link
  flagged
}
    `,on=t.Ps`
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
    `,Xn=t.Ps`
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
    `,xn=t.Ps`
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
    `,ci=t.Ps`
    fragment AddDiseaseFields on AddDiseasePayload {
  new
  disease {
    id
    name
    displayName
  }
}
    `,Vn=t.Ps`
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
    `,li=(t.Ps`
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
    `),Yi=t.Ps`
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
    `),Ki=t.Ps`
    fragment DiseaseSelectTypeaheadFields on Disease {
  id
  name
  link
  displayName
  doid
  diseaseAliases
}
    `,Ln=t.Ps`
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
${Ki}
${Ln}
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
    `,Di=t.Ps`
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
    `,Sn=t.Ps`
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
    `,$o=t.Ps`
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
${Ki}
${Ln}
${jn}
${ii}`,ni=t.Ps`
    fragment CoordinateFields on Coordinate {
  chromosome
  representativeTranscript
  start
  stop
}
    `,qo=t.Ps`
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
    `,Fo=t.Ps`
    fragment AcmgCodeSelectTypeaheadFields on AcmgCode {
  id
  code
  name
  description
  tooltip
}
    `,Pr=t.Ps`
    fragment ClingenCodeSelectTypeaheadFields on ClingenCode {
  id
  code
  name
  description
  tooltip
  exclusive
}
    `,Ke=t.Ps`
    fragment QuickAddDiseaseFields on AddDiseasePayload {
  new
  disease {
    ...DiseaseSelectTypeaheadFields
  }
}
    ${Ki}`,q=t.Ps`
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
    ${me}`,Fe=t.Ps`
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
    `,Mt=t.Ps`
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
    `,Rt=t.Ps`
    fragment NccnGuidelineSelectTypeaheadFields on NccnGuideline {
  id
  name
}
    `,Qt=t.Ps`
    fragment QuickAddTherapyFields on AddTherapyPayload {
  new
  therapy {
    ...TherapySelectTypeaheadFields
  }
}
    ${Ln}`,hn=(t.Ps`
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
    ${hn}`,t.Ps`
    fragment VariantTypeSelectTypeaheadFields on VariantType {
  id
  name
  link
  soid
}
    `),bn=t.Ps`
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
    `,Dn=t.Ps`
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
    ${me}`,In=t.Ps`
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
    `,qn=t.Ps`
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
    ${In}`,wn=t.Ps`
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
    ${me}`,Gn=t.Ps`
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
    `,ui=t.Ps`
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
    ${ri}`,Qi=t.Ps`
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
    `,Ui=t.Ps`
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
    ${Qi}
${me}`,yi=t.Ps`
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
    `,Li=t.Ps`
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
    `,ki=t.Ps`
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
    `,ji=t.Ps`
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
    ${ki}`,No=t.Ps`
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
    `,Oi=t.Ps`
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
    `,Xo=t.Ps`
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
    ${Gt}`,co=t.Ps`
    fragment subscribable on Subscribable {
  id
  entityType
  __typename
}
    `,er=t.Ps`
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
    `,ko=t.Ps`
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
    ${ri}`,Is=t.Ps`
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
    ${Is}`,Ir=t.Ps`
    query AssertionPopover($assertionId: Int!) {
  assertion(id: $assertionId) {
    ...assertionPopover
  }
}
    ${ue}`;class ar extends t.AE{constructor($){super($),this.document=Ir}}ar.\u0275fac=function($){return new($||ar)(o.LFG(t._M))},ar.\u0275prov=o.Yz7({token:ar,factory:ar.\u0275fac,providedIn:"root"});const Hr=t.Ps`
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
    ${ze}`;class Lo extends t.AE{constructor($){super($),this.document=Hr}}Lo.\u0275fac=function($){return new($||Lo)(o.LFG(t._M))},Lo.\u0275prov=o.Yz7({token:Lo,factory:Lo.\u0275fac,providedIn:"root"});const Qs=t.Ps`
    query ClinicalTrialPopover($clinicalTrialId: Int!) {
  clinicalTrials(id: $clinicalTrialId) {
    edges {
      node {
        ...clinicalTrialPopover
      }
    }
  }
}
    ${Ae}`;class fr extends t.AE{constructor($){super($),this.document=Qs}}fr.\u0275fac=function($){return new($||fr)(o.LFG(t._M))},fr.\u0275prov=o.Yz7({token:fr,factory:fr.\u0275fac,providedIn:"root"});const ts=t.Ps`
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
    ${Ge}`;class Ar extends t.AE{constructor($){super($),this.document=ts}}Ar.\u0275fac=function($){return new($||Ar)(o.LFG(t._M))},Ar.\u0275prov=o.Yz7({token:Ar,factory:Ar.\u0275fac,providedIn:"root"});const $r=t.Ps`
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
    ${ri}`;class mr extends t.AE{constructor($){super($),this.document=$r}}mr.\u0275fac=function($){return new($||mr)(o.LFG(t._M))},mr.\u0275prov=o.Yz7({token:mr,factory:mr.\u0275fac,providedIn:"root"});const As=t.Ps`
    query CommentPopover($commentId: Int!) {
  comment(id: $commentId) {
    ...commentPopover
  }
}
    ${it}`;class Be extends t.AE{constructor($){super($),this.document=As}}Be.\u0275fac=function($){return new($||Be)(o.LFG(t._M))},Be.\u0275prov=o.Yz7({token:Be,factory:Be.\u0275fac,providedIn:"root"});const Bt=t.Ps`
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
    `;class V extends t.AE{constructor($){super($),this.document=Bt}}V.\u0275fac=function($){return new($||V)(o.LFG(t._M))},V.\u0275prov=o.Yz7({token:V,factory:V.\u0275fac,providedIn:"root"});const Re=t.Ps`
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
    ${Ct}`;class Lt extends t.AE{constructor($){super($),this.document=Re}}Lt.\u0275fac=function($){return new($||Lt)(o.LFG(t._M))},Lt.\u0275prov=o.Yz7({token:Lt,factory:Lt.\u0275fac,providedIn:"root"});const sn=t.Ps`
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
    `;class On extends t.AE{constructor($){super($),this.document=sn}}On.\u0275fac=function($){return new($||On)(o.LFG(t._M))},On.\u0275prov=o.Yz7({token:On,factory:On.\u0275fac,providedIn:"root"});const ai=t.Ps`
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
    ${Ut}`;class Kn extends t.AE{constructor($){super($),this.document=ai}}Kn.\u0275fac=function($){return new($||Kn)(o.LFG(t._M))},Kn.\u0275prov=o.Yz7({token:Kn,factory:Kn.\u0275fac,providedIn:"root"});const Ei=t.Ps`
    query EvidencePopover($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...evidencePopover
  }
}
    ${Ze}`;class Un extends t.AE{constructor($){super($),this.document=Ei}}Un.\u0275fac=function($){return new($||Un)(o.LFG(t._M))},Un.\u0275prov=o.Yz7({token:Un,factory:Un.\u0275fac,providedIn:"root"});const to=t.Ps`
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
    ${tt}`;class no extends t.AE{constructor($){super($),this.document=to}}no.\u0275fac=function($){return new($||no)(o.LFG(t._M))},no.\u0275prov=o.Yz7({token:no,factory:no.\u0275fac,providedIn:"root"});const gr=t.Ps`
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
    ${Ht}`;class mo extends t.AE{constructor($){super($),this.document=gr}}mo.\u0275fac=function($){return new($||mo)(o.LFG(t._M))},mo.\u0275prov=o.Yz7({token:mo,factory:mo.\u0275fac,providedIn:"root"});const Yr=t.Ps`
    query FlagPopover($flagId: Int!) {
  flag(id: $flagId) {
    ...flagPopover
  }
}
    ${_t}`;class io extends t.AE{constructor($){super($),this.document=Yr}}io.\u0275fac=function($){return new($||io)(o.LFG(t._M))},io.\u0275prov=o.Yz7({token:io,factory:io.\u0275fac,providedIn:"root"});const di=t.Ps`
    query GenePopover($geneId: Int!) {
  gene(id: $geneId) {
    ...genePopover
  }
}
    ${nn}`;class vr extends t.AE{constructor($){super($),this.document=di}}vr.\u0275fac=function($){return new($||vr)(o.LFG(t._M))},vr.\u0275prov=o.Yz7({token:vr,factory:vr.\u0275fac,providedIn:"root"});const be=t.Ps`
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
    ${At}`;class ve extends t.AE{constructor($){super($),this.document=be}}ve.\u0275fac=function($){return new($||ve)(o.LFG(t._M))},ve.\u0275prov=o.Yz7({token:ve,factory:ve.\u0275fac,providedIn:"root"});const ae=t.Ps`
    query Quicksearch($query: String!, $types: [SearchableEntities!], $highlightMatches: Boolean) {
  search(query: $query, types: $types, highlightMatches: $highlightMatches) {
    ...QuicksearchResult
  }
}
    ${Qe}`;class st extends t.AE{constructor($){super($),this.document=ae}}st.\u0275fac=function($){return new($||st)(o.LFG(t._M))},st.\u0275prov=o.Yz7({token:st,factory:st.\u0275fac,providedIn:"root"});const gn=t.Ps`
    query MolecularProfilePopover($molecularProfileId: Int!) {
  molecularProfile(id: $molecularProfileId) {
    ...molecularProfilePopoverFields
  }
}
    ${H}`;class $n extends t.AE{constructor($){super($),this.document=gn}}$n.\u0275fac=function($){return new($||$n)(o.LFG(t._M))},$n.\u0275prov=o.Yz7({token:$n,factory:$n.\u0275fac,providedIn:"root"});const fo=t.Ps`
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
    ${I}`;class vn extends t.AE{constructor($){super($),this.document=fo}}vn.\u0275fac=function($){return new($||vn)(o.LFG(t._M))},vn.\u0275prov=o.Yz7({token:vn,factory:vn.\u0275fac,providedIn:"root"});const Ci=t.Ps`
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
    ${Q}`;class Fr extends t.AE{constructor($){super($),this.document=Ci}}Fr.\u0275fac=function($){return new($||Fr)(o.LFG(t._M))},Fr.\u0275prov=o.Yz7({token:Fr,factory:Fr.\u0275fac,providedIn:"root"});const _r=t.Ps`
    query OrgPopover($orgId: Int!) {
  organization(id: $orgId) {
    ...orgPopover
  }
}
    ${_e}`;class Wi extends t.AE{constructor($){super($),this.document=_r}}Wi.\u0275fac=function($){return new($||Wi)(o.LFG(t._M))},Wi.\u0275prov=o.Yz7({token:Wi,factory:Wi.\u0275fac,providedIn:"root"});const jc=t.Ps`
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
    ${ut}`;class tr extends t.AE{constructor($){super($),this.document=jc}}tr.\u0275fac=function($){return new($||tr)(o.LFG(t._M))},tr.\u0275prov=o.Yz7({token:tr,factory:tr.\u0275fac,providedIn:"root"});const Wo=t.Ps`
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
    `;class nr extends t.AE{constructor($){super($),this.document=Wo}}nr.\u0275fac=function($){return new($||nr)(o.LFG(t._M))},nr.\u0275prov=o.Yz7({token:nr,factory:nr.\u0275fac,providedIn:"root"});const yr=t.Ps`
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
    ${Le}`;class Ws extends t.AE{constructor($){super($),this.document=yr}}Ws.\u0275fac=function($){return new($||Ws)(o.LFG(t._M))},Ws.\u0275prov=o.Yz7({token:Ws,factory:Ws.\u0275fac,providedIn:"root"});const Gc=t.Ps`
    mutation AcceptRevision($input: AcceptRevisionsInput!) {
  acceptRevisions(input: $input) {
    revisions {
      id
      __typename
    }
  }
}
    `;class Cr extends t.mm{constructor($){super($),this.document=Gc}}Cr.\u0275fac=function($){return new($||Cr)(o.LFG(t._M))},Cr.\u0275prov=o.Yz7({token:Cr,factory:Cr.\u0275fac,providedIn:"root"});const go=t.Ps`
    mutation RejectRevision($input: RejectRevisionsInput!) {
  rejectRevisions(input: $input) {
    revisions {
      id
      __typename
    }
  }
}
    `;class Uo extends t.mm{constructor($){super($),this.document=go}}Uo.\u0275fac=function($){return new($||Uo)(o.LFG(t._M))},Uo.\u0275prov=o.Yz7({token:Uo,factory:Uo.\u0275fac,providedIn:"root"});const tc=t.Ps`
    query ValidateRevisionsForAcceptance($ids: [Int!]!) {
  validateRevisionsForAcceptance(revisionIds: $ids) {
    genericErrors
    validationErrors {
      ...validationError
    }
  }
}
    ${de}`;class Oo extends t.AE{constructor($){super($),this.document=tc}}Oo.\u0275fac=function($){return new($||Oo)(o.LFG(t._M))},Oo.\u0275prov=o.Yz7({token:Oo,factory:Oo.\u0275fac,providedIn:"root"});const ir=t.Ps`
    query RevisionPopover($revisionId: Int!) {
  revision(id: $revisionId) {
    ...revisionPopover
  }
}
    ${Te}`;class ns extends t.AE{constructor($){super($),this.document=ir}}ns.\u0275fac=function($){return new($||ns)(o.LFG(t._M))},ns.\u0275prov=o.Yz7({token:ns,factory:ns.\u0275fac,providedIn:"root"});const Sa=t.Ps`
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
    ${lt}`;class zs extends t.AE{constructor($){super($),this.document=Sa}}zs.\u0275fac=function($){return new($||zs)(o.LFG(t._M))},zs.\u0275prov=o.Yz7({token:zs,factory:zs.\u0275fac,providedIn:"root"});const Ts=t.Ps`
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
    ${vt}`;class Ro extends t.AE{constructor($){super($),this.document=Ts}}Ro.\u0275fac=function($){return new($||Ro)(o.LFG(t._M))},Ro.\u0275prov=o.Yz7({token:Ro,factory:Ro.\u0275fac,providedIn:"root"});const Zs=t.Ps`
    query SubscriptionForEntity($subscribable: SubscribableInput!) {
  subscriptionForEntity(subscribable: $subscribable) {
    ...subscriptionId
  }
}
    ${qt}`;class cr extends t.AE{constructor($){super($),this.document=Zs}}cr.\u0275fac=function($){return new($||cr)(o.LFG(t._M))},cr.\u0275prov=o.Yz7({token:cr,factory:cr.\u0275fac,providedIn:"root"});const Js=t.Ps`
    mutation ModerateEvidenceItem($input: ModerateEvidenceItemInput!) {
  moderateEvidenceItem(input: $input) {
    evidenceItem {
      id
    }
  }
}
    `;class zr extends t.mm{constructor($){super($),this.document=Js}}zr.\u0275fac=function($){return new($||zr)(o.LFG(t._M))},zr.\u0275prov=o.Yz7({token:zr,factory:zr.\u0275fac,providedIn:"root"});const Fs=t.Ps`
    mutation ModerateAssertion($input: ModerateAssertionInput!) {
  moderateAssertion(input: $input) {
    assertion {
      id
    }
  }
}
    `;class is extends t.mm{constructor($){super($),this.document=Fs}}is.\u0275fac=function($){return new($||is)(o.LFG(t._M))},is.\u0275prov=o.Yz7({token:is,factory:is.\u0275fac,providedIn:"root"});const nc=t.Ps`
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
    ${zt}`;class or extends t.AE{constructor($){super($),this.document=nc}}or.\u0275fac=function($){return new($||or)(o.LFG(t._M))},or.\u0275prov=o.Yz7({token:or,factory:or.\u0275fac,providedIn:"root"});const Qc=t.Ps`
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
    ${tn}`;class os extends t.AE{constructor($){super($),this.document=Qc}}os.\u0275fac=function($){return new($||os)(o.LFG(t._M))},os.\u0275prov=o.Yz7({token:os,factory:os.\u0275fac,providedIn:"root"});const Tr=t.Ps`
    mutation UpdateSourceSuggestionStatus($input: UpdateSourceSuggestionStatusInput!) {
  updateSourceSuggestionStatus(input: $input) {
    sourceSuggestion {
      id
      status
    }
  }
}
    `;class lr extends t.mm{constructor($){super($),this.document=Tr}}lr.\u0275fac=function($){return new($||lr)(o.LFG(t._M))},lr.\u0275prov=o.Yz7({token:lr,factory:lr.\u0275fac,providedIn:"root"});const Ns=t.Ps`
    query SourcePopover($sourceId: Int!) {
  sourcePopover(id: $sourceId) {
    ...sourcePopover
  }
}
    ${Ue}`;class zo extends t.AE{constructor($){super($),this.document=Ns}}zo.\u0275fac=function($){return new($||zo)(o.LFG(t._M))},zo.\u0275prov=o.Yz7({token:zo,factory:zo.\u0275fac,providedIn:"root"});const rs=t.Ps`
    query BrowseSources($first: Int, $last: Int, $before: String, $after: String, $sortBy: SourcesSort, $name: String, $year: Int, $sourceType: SourceSource, $citationId: Int, $author: String, $journal: String, $clinicalTrialId: Int) {
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
    ${We}`;class Zi extends t.AE{constructor($){super($),this.document=rs}}Zi.\u0275fac=function($){return new($||Zi)(o.LFG(t._M))},Zi.\u0275prov=o.Yz7({token:Zi,factory:Zi.\u0275fac,providedIn:"root"});const Ks=t.Ps`
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
    `;class ss extends t.AE{constructor($){super($),this.document=Ks}}ss.\u0275fac=function($){return new($||ss)(o.LFG(t._M))},ss.\u0275prov=o.Yz7({token:ss,factory:ss.\u0275fac,providedIn:"root"});const eu=t.Ps`
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
    ${ft}`;class Ur extends t.AE{constructor($){super($),this.document=eu}}Ur.\u0275fac=function($){return new($||Ur)(o.LFG(t._M))},Ur.\u0275prov=o.Yz7({token:Ur,factory:Ur.\u0275fac,providedIn:"root"});const tu=t.Ps`
    query UserPopover($userId: Int!) {
  user(id: $userId) {
    ...popoverUser
  }
}
    ${Ve}`;class J extends t.AE{constructor($){super($),this.document=tu}}J.\u0275fac=function($){return new($||J)(o.LFG(t._M))},J.\u0275prov=o.Yz7({token:J,factory:J.\u0275fac,providedIn:"root"});const He=t.Ps`
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
    ${Ye}`;class ne extends t.AE{constructor($){super($),this.document=He}}ne.\u0275fac=function($){return new($||ne)(o.LFG(t._M))},ne.\u0275prov=o.Yz7({token:ne,factory:ne.\u0275fac,providedIn:"root"});const qe=t.Ps`
    query VariantGroupPopover($variantGroupId: Int!) {
  variantGroup(id: $variantGroupId) {
    ...variantGroupPopoverFields
  }
}
    ${Oe}`;class Ft extends t.AE{constructor($){super($),this.document=qe}}Ft.\u0275fac=function($){return new($||Ft)(o.LFG(t._M))},Ft.\u0275prov=o.Yz7({token:Ft,factory:Ft.\u0275fac,providedIn:"root"});const pn=t.Ps`
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
    ${le}`;class yn extends t.AE{constructor($){super($),this.document=pn}}yn.\u0275fac=function($){return new($||yn)(o.LFG(t._M))},yn.\u0275prov=o.Yz7({token:yn,factory:yn.\u0275fac,providedIn:"root"});const Qn=t.Ps`
    query VariantTypePopover($variantTypeId: Int!) {
  variantTypePopover(id: $variantTypeId) {
    ...variantTypePopover
  }
}
    ${Ee}`;class wi extends t.AE{constructor($){super($),this.document=Qn}}wi.\u0275fac=function($){return new($||wi)(o.LFG(t._M))},wi.\u0275prov=o.Yz7({token:wi,factory:wi.\u0275fac,providedIn:"root"});const Gi=t.Ps`
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
    ${ee}`;class Ri extends t.AE{constructor($){super($),this.document=Gi}}Ri.\u0275fac=function($){return new($||Ri)(o.LFG(t._M))},Ri.\u0275prov=o.Yz7({token:Ri,factory:Ri.\u0275fac,providedIn:"root"});const zi=t.Ps`
    query CoordinatesCard($variantId: Int!) {
  variant(id: $variantId) {
    ...CoordinatesCardFields
  }
}
    ${et}`;class oo extends t.AE{constructor($){super($),this.document=zi}}oo.\u0275fac=function($){return new($||oo)(o.LFG(t._M))},oo.\u0275prov=o.Yz7({token:oo,factory:oo.\u0275fac,providedIn:"root"});const Xi=t.Ps`
    query VariantPopover($variantId: Int!) {
  variant(id: $variantId) {
    ...variantPopoverFields
  }
}
    ${ye}`;class lo extends t.AE{constructor($){super($),this.document=Xi}}lo.\u0275fac=function($){return new($||lo)(o.LFG(t._M))},lo.\u0275prov=o.Yz7({token:lo,factory:lo.\u0275fac,providedIn:"root"});const Zo=t.Ps`
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
    ${Jt}`;class To extends t.AE{constructor($){super($),this.document=Zo}}To.\u0275fac=function($){return new($||To)(o.LFG(t._M))},To.\u0275prov=o.Yz7({token:To,factory:To.\u0275fac,providedIn:"root"});const Nr=t.Ps`
    query VariantTypesForGene($geneId: Int) {
  variantTypes(geneId: $geneId, first: 50) {
    edges {
      node {
        ...menuVariantType
      }
    }
  }
}
    ${ot}`;class Vo extends t.AE{constructor($){super($),this.document=Nr}}Vo.\u0275fac=function($){return new($||Vo)(o.LFG(t._M))},Vo.\u0275prov=o.Yz7({token:Vo,factory:Vo.\u0275fac,providedIn:"root"});const as=t.Ps`
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
    ${on}`;class wo extends t.AE{constructor($){super($),this.document=as}}wo.\u0275fac=function($){return new($||wo)(o.LFG(t._M))},wo.\u0275prov=o.Yz7({token:wo,factory:wo.\u0275fac,providedIn:"root"});const ks=t.Ps`
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
    `;class cs extends t.AE{constructor($){super($),this.document=ks}}cs.\u0275fac=function($){return new($||cs)(o.LFG(t._M))},cs.\u0275prov=o.Yz7({token:cs,factory:cs.\u0275fac,providedIn:"root"});const Wc=t.Ps`
    query ViewerNotificationCount {
  notifications {
    unreadCount
  }
}
    `;class Ea extends t.AE{constructor($){super($),this.document=Wc}}Ea.\u0275fac=function($){return new($||Ea)(o.LFG(t._M))},Ea.\u0275prov=o.Yz7({token:Ea,factory:Ea.\u0275fac,providedIn:"root"});const Zc=t.Ps`
    query AssertionRevisableFields($assertionId: Int!) {
  assertion(id: $assertionId) {
    ...RevisableAssertionFields
  }
}
    ${En}`;class bs extends t.AE{constructor($){super($),this.document=Zc}}bs.\u0275fac=function($){return new($||bs)(o.LFG(t._M))},bs.\u0275prov=o.Yz7({token:bs,factory:bs.\u0275fac,providedIn:"root"});const Jc=t.Ps`
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
    `;class ur extends t.mm{constructor($){super($),this.document=Jc}}ur.\u0275fac=function($){return new($||ur)(o.LFG(t._M))},ur.\u0275prov=o.Yz7({token:ur,factory:ur.\u0275fac,providedIn:"root"});const Kc=t.Ps`
    mutation SubmitAssertion($input: SubmitAssertionInput!) {
  submitAssertion(input: $input) {
    clientMutationId
    assertion {
      id
    }
  }
}
    `;class Ms extends t.mm{constructor($){super($),this.document=Kc}}Ms.\u0275fac=function($){return new($||Ms)(o.LFG(t._M))},Ms.\u0275prov=o.Yz7({token:Ms,factory:Ms.\u0275fac,providedIn:"root"});const ic=t.Ps`
    mutation AddComment($input: AddCommentInput!) {
  addComment(input: $input) {
    clientMutationId
    comment {
      ...commentListNode
    }
  }
}
    ${ri}`;class Mo extends t.mm{constructor($){super($),this.document=ic}}Mo.\u0275fac=function($){return new($||Mo)(o.LFG(t._M))},Mo.\u0275prov=o.Yz7({token:Mo,factory:Mo.\u0275fac,providedIn:"root"});const nu=t.Ps`
    query previewComment($commentText: String!) {
  previewCommentText(commentText: $commentText) {
    ...previewComment
  }
}
    ${Xn}`;class jo extends t.AE{constructor($){super($),this.document=nu}}jo.\u0275fac=function($){return new($||jo)(o.LFG(t._M))},jo.\u0275prov=o.Yz7({token:jo,factory:jo.\u0275fac,providedIn:"root"});const Ss=t.Ps`
    query userTypeahead($queryTerm: String!) {
  userTypeahead(queryTerm: $queryTerm) {
    username
  }
}
    `;class So extends t.AE{constructor($){super($),this.document=Ss}}So.\u0275fac=function($){return new($||So)(o.LFG(t._M))},So.\u0275prov=o.Yz7({token:So,factory:So.\u0275fac,providedIn:"root"});const ls=t.Ps`
    query entityTypeahead($queryTerm: String!) {
  entityTypeahead(queryTerm: $queryTerm) {
    entityId
    tagType
    displayName
  }
}
    `;class jr extends t.AE{constructor($){super($),this.document=ls}}jr.\u0275fac=function($){return new($||jr)(o.LFG(t._M))},jr.\u0275prov=o.Yz7({token:jr,factory:jr.\u0275fac,providedIn:"root"});const oc=t.Ps`
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
    ${xn}`;class Ls extends t.AE{constructor($){super($),this.document=oc}}Ls.\u0275fac=function($){return new($||Ls)(o.LFG(t._M))},Ls.\u0275prov=o.Yz7({token:Ls,factory:Ls.\u0275fac,providedIn:"root"});const xa=t.Ps`
    mutation createMolecularProfile($mpStructure: MolecularProfileComponentInput!) {
  createMolecularProfile(input: {structure: $mpStructure}) {
    molecularProfile {
      id
      name
      link
    }
  }
}
    `;class rc extends t.mm{constructor($){super($),this.document=xa}}rc.\u0275fac=function($){return new($||rc)(o.LFG(t._M))},rc.\u0275prov=o.Yz7({token:rc,factory:rc.\u0275fac,providedIn:"root"});const iu=t.Ps`
    query AcmgCodeTypeahead($code: String!) {
  acmgCodesTypeahead(queryTerm: $code) {
    id
    code
    description
    name
    tooltip
  }
}
    `;class sc extends t.AE{constructor($){super($),this.document=iu}}sc.\u0275fac=function($){return new($||sc)(o.LFG(t._M))},sc.\u0275prov=o.Yz7({token:sc,factory:sc.\u0275fac,providedIn:"root"});const ac=t.Ps`
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
    `;class Po extends t.AE{constructor($){super($),this.document=ac}}Po.\u0275fac=function($){return new($||Po)(o.LFG(t._M))},Po.\u0275prov=o.Yz7({token:Po,factory:Po.\u0275fac,providedIn:"root"});const cc=t.Ps`
    query DiseaseTypeahead($name: String!) {
  diseaseTypeahead(queryTerm: $name) {
    id
    name
    displayName
    doid
    diseaseAliases
  }
}
    `;class us extends t.AE{constructor($){super($),this.document=cc}}us.\u0275fac=function($){return new($||us)(o.LFG(t._M))},us.\u0275prov=o.Yz7({token:us,factory:us.\u0275fac,providedIn:"root"});const Fl=t.Ps`
    mutation AddDisease($name: String!, $doid: String) {
  addDisease(input: {name: $name, doid: $doid}) {
    ...AddDiseaseFields
  }
}
    ${ci}`;class Go extends t.mm{constructor($){super($),this.document=Fl}}Go.\u0275fac=function($){return new($||Go)(o.LFG(t._M))},Go.\u0275prov=o.Yz7({token:Go,factory:Go.\u0275fac,providedIn:"root"});const lc=t.Ps`
    query EvidenceTypeahead($id: Int!) {
  evidenceItem(id: $id) {
    id
    status
    name
  }
}
    `;class qs extends t.AE{constructor($){super($),this.document=lc}}qs.\u0275fac=function($){return new($||qs)(o.LFG(t._M))},qs.\u0275prov=o.Yz7({token:qs,factory:qs.\u0275fac,providedIn:"root"});const Du=t.Ps`
    query GeneTypeahead($entrezSymbol: String!) {
  geneTypeahead(queryTerm: $entrezSymbol) {
    ...GeneTypeaheadFields
  }
}
    ${Vn}`;class uc extends t.AE{constructor($){super($),this.document=Du}}uc.\u0275fac=function($){return new($||uc)(o.LFG(t._M))},uc.\u0275prov=o.Yz7({token:uc,factory:uc.\u0275fac,providedIn:"root"});const Xs=t.Ps`
    query NccnGuidelineTypeahead($name: String!) {
  nccnGuidelinesTypeahead(queryTerm: $name) {
    id
    name
  }
}
    `;class Rs extends t.AE{constructor($){super($),this.document=Xs}}Rs.\u0275fac=function($){return new($||Rs)(o.LFG(t._M))},Rs.\u0275prov=o.Yz7({token:Rs,factory:Rs.\u0275fac,providedIn:"root"});const br=t.Ps`
    query PhenotypeTypeahead($name: String!) {
  phenotypeTypeahead(queryTerm: $name) {
    hpoId
    id
    name
  }
}
    `;class ds extends t.AE{constructor($){super($),this.document=br}}ds.\u0275fac=function($){return new($||ds)(o.LFG(t._M))},ds.\u0275prov=o.Yz7({token:ds,factory:ds.\u0275fac,providedIn:"root"});const Da=t.Ps`
    query CitationExistenceCheck($sourceType: SourceSource!, $citationId: String!) {
  remoteCitation(sourceType: $sourceType, citationId: $citationId)
}
    `;class ea extends t.AE{constructor($){super($),this.document=Da}}ea.\u0275fac=function($){return new($||ea)(o.LFG(t._M))},ea.\u0275prov=o.Yz7({token:ea,factory:ea.\u0275fac,providedIn:"root"});const qc=t.Ps`
    mutation CreateSourceStub($input: AddRemoteCitationInput!) {
  addRemoteCitation(input: $input) {
    newSource {
      id
      citationId
      sourceType
    }
  }
}
    `;class hs extends t.mm{constructor($){super($),this.document=qc}}hs.\u0275fac=function($){return new($||hs)(o.LFG(t._M))},hs.\u0275prov=o.Yz7({token:hs,factory:hs.\u0275fac,providedIn:"root"});const n1=t.Ps`
    query CitationTypeahead($partialCitationId: String!, $sourceType: SourceSource!) {
  sourceTypeahead(citationId: $partialCitationId, sourceType: $sourceType) {
    ...SourceTypeaheadResult
  }
}
    ${Ti}`;class Xc extends t.AE{constructor($){super($),this.document=n1}}Xc.\u0275fac=function($){return new($||Xc)(o.LFG(t._M))},Xc.\u0275prov=o.Yz7({token:Xc,factory:Xc.\u0275fac,providedIn:"root"});const Hi=t.Ps`
    query CheckRemoteCitation($sourceType: SourceSource!, $citationId: String!) {
  remoteCitation(sourceType: $sourceType, citationId: $citationId)
}
    `;class Nl extends t.AE{constructor($){super($),this.document=Hi}}Nl.\u0275fac=function($){return new($||Nl)(o.LFG(t._M))},Nl.\u0275prov=o.Yz7({token:Nl,factory:Nl.\u0275fac,providedIn:"root"});const Oa=t.Ps`
    mutation AddRemoteCitation($input: AddRemoteCitationInput!) {
  addRemoteCitation(input: $input) {
    newSource {
      ...SourceStubFields
    }
  }
}
    ${ro}`;class el extends t.mm{constructor($){super($),this.document=Oa}}el.\u0275fac=function($){return new($||el)(o.LFG(t._M))},el.\u0275prov=o.Yz7({token:el,factory:el.\u0275fac,providedIn:"root"});const dc=t.Ps`
    query SourceTypeahead($partialCitationId: String!, $sourceType: SourceSource!) {
  sourceTypeahead(citationId: $partialCitationId, sourceType: $sourceType) {
    ...SourceTypeaheadResult
  }
}
    ${Ti}`;class ta extends t.AE{constructor($){super($),this.document=dc}}ta.\u0275fac=function($){return new($||ta)(o.LFG(t._M))},ta.\u0275prov=o.Yz7({token:ta,factory:ta.\u0275fac,providedIn:"root"});const hc=t.Ps`
    query TherapyTypeahead($name: String!) {
  therapyTypeahead(queryTerm: $name) {
    id
    name
    ncitId
    therapyAliases
  }
}
    `;class Io extends t.AE{constructor($){super($),this.document=hc}}Io.\u0275fac=function($){return new($||Io)(o.LFG(t._M))},Io.\u0275prov=o.Yz7({token:Io,factory:Io.\u0275fac,providedIn:"root"});const na=t.Ps`
    mutation AddTherapy($name: String!, $ncitId: String) {
  addTherapy(input: {name: $name, ncitId: $ncitId}) {
    ...AddTherapyFields
  }
}
    ${li}`;class Mr extends t.mm{constructor($){super($),this.document=na}}Mr.\u0275fac=function($){return new($||Mr)(o.LFG(t._M))},Mr.\u0275prov=o.Yz7({token:Mr,factory:Mr.\u0275fac,providedIn:"root"});const ou=t.Ps`
    query VariantTypeahead($name: String!, $geneId: Int) {
  variants(name: $name, geneId: $geneId, first: 20) {
    nodes {
      ...VariantTypeaheadFields
    }
  }
}
    ${Yi}`;class uo extends t.AE{constructor($){super($),this.document=ou}}uo.\u0275fac=function($){return new($||uo)(o.LFG(t._M))},uo.\u0275prov=o.Yz7({token:uo,factory:uo.\u0275fac,providedIn:"root"});const tl=t.Ps`
    mutation AddVariant($name: String!, $geneId: Int!) {
  addVariant(input: {name: $name, geneId: $geneId}) {
    ...AddVariantFields
  }
}
    ${Pi}`;class Gr extends t.mm{constructor($){super($),this.document=tl}}Gr.\u0275fac=function($){return new($||Gr)(o.LFG(t._M))},Gr.\u0275prov=o.Yz7({token:Gr,factory:Gr.\u0275fac,providedIn:"root"});const A=t.Ps`
    query VariantSelect($name: String!, $geneId: Int) {
  variants(name: $name, first: 20, geneId: $geneId) {
    nodes {
      ...VariantTypeaheadFields
    }
  }
}
    ${Yi}`;class k extends t.AE{constructor($){super($),this.document=A}}k.\u0275fac=function($){return new($||k)(o.LFG(t._M))},k.\u0275prov=o.Yz7({token:k,factory:k.\u0275fac,providedIn:"root"});const b=t.Ps`
    query VariantTypeTypeahead($name: String!) {
  variantTypeTypeahead(queryTerm: $name) {
    name
    soid
    id
  }
}
    `;class K extends t.AE{constructor($){super($),this.document=b}}K.\u0275fac=function($){return new($||K)(o.LFG(t._M))},K.\u0275prov=o.Yz7({token:K,factory:K.\u0275fac,providedIn:"root"});const Me=t.Ps`
    query EvidenceItemRevisableFields($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...RevisableEvidenceFields
  }
}
    ${eo}`;class Xe extends t.AE{constructor($){super($),this.document=Me}}Xe.\u0275fac=function($){return new($||Xe)(o.LFG(t._M))},Xe.\u0275prov=o.Yz7({token:Xe,factory:Xe.\u0275fac,providedIn:"root"});const at=t.Ps`
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
    `;class Zt extends t.mm{constructor($){super($),this.document=at}}Zt.\u0275fac=function($){return new($||Zt)(o.LFG(t._M))},Zt.\u0275prov=o.Yz7({token:Zt,factory:Zt.\u0275fac,providedIn:"root"});const zn=t.Ps`
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
    `;class Wn extends t.AE{constructor($){super($),this.document=zn}}Wn.\u0275fac=function($){return new($||Wn)(o.LFG(t._M))},Wn.\u0275prov=o.Yz7({token:Wn,factory:Wn.\u0275fac,providedIn:"root"});const Yn=t.Ps`
    query EvidenceSubmittableFields($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...SubmittableEvidenceFields
  }
}
    ${vi}`;class Ai extends t.AE{constructor($){super($),this.document=Yn}}Ai.\u0275fac=function($){return new($||Ai)(o.LFG(t._M))},Ai.\u0275prov=o.Yz7({token:Ai,factory:Ai.\u0275fac,providedIn:"root"});const vo=t.Ps`
    mutation SubmitEvidenceItem($input: SubmitEvidenceItemInput!) {
  submitEvidence(input: $input) {
    clientMutationId
    evidenceItem {
      id
    }
  }
}
    `;class Bo extends t.mm{constructor($){super($),this.document=vo}}Bo.\u0275fac=function($){return new($||Bo)(o.LFG(t._M))},Bo.\u0275prov=o.Yz7({token:Bo,factory:Bo.\u0275fac,providedIn:"root"});const Sr=t.Ps`
    mutation FlagEntity($input: FlagEntityInput!) {
  flagEntity(input: $input) {
    flag {
      id
    }
  }
}
    `;class Qo extends t.mm{constructor($){super($),this.document=Sr}}Qo.\u0275fac=function($){return new($||Qo)(o.LFG(t._M))},Qo.\u0275prov=o.Yz7({token:Qo,factory:Qo.\u0275fac,providedIn:"root"});const Qr=t.Ps`
    mutation ResolveFlag($input: ResolveFlagInput!) {
  resolveFlag(input: $input) {
    flag {
      id
    }
  }
}
    `;class ia extends t.mm{constructor($){super($),this.document=Qr}}ia.\u0275fac=function($){return new($||ia)(o.LFG(t._M))},ia.\u0275prov=o.Yz7({token:ia,factory:ia.\u0275fac,providedIn:"root"});const kl=t.Ps`
    query GeneRevisableFields($geneId: Int!) {
  gene(id: $geneId) {
    ...RevisableGeneFields
  }
}
    ${Di}`;class oa extends t.AE{constructor($){super($),this.document=kl}}oa.\u0275fac=function($){return new($||oa)(o.LFG(t._M))},oa.\u0275prov=o.Yz7({token:oa,factory:oa.\u0275fac,providedIn:"root"});const J1=t.Ps`
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
    `;class wa extends t.mm{constructor($){super($),this.document=J1}}wa.\u0275fac=function($){return new($||wa)(o.LFG(t._M))},wa.\u0275prov=o.Yz7({token:wa,factory:wa.\u0275fac,providedIn:"root"});const ru=t.Ps`
    query GeneAdvancedSearch($query: GeneSearchFilter!) {
  searchGenes(query: $query, createPermalink: true) {
    ...AdvancedSearchPermalink
  }
}
    ${Sn}`;class Wr extends t.AE{constructor($){super($),this.document=ru}}Wr.\u0275fac=function($){return new($||Wr)(o.LFG(t._M))},Wr.\u0275prov=o.Yz7({token:Wr,factory:Wr.\u0275fac,providedIn:"root"});const nl=t.Ps`
    query MolecularProfileRevisableFields($molecularProfileId: Int!) {
  molecularProfile(id: $molecularProfileId) {
    ...RevisableMolecularProfileFields
  }
}
    ${gi}`;class Er extends t.AE{constructor($){super($),this.document=nl}}Er.\u0275fac=function($){return new($||Er)(o.LFG(t._M))},Er.\u0275prov=o.Yz7({token:Er,factory:Er.\u0275fac,providedIn:"root"});const pc=t.Ps`
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
    `;class fc extends t.mm{constructor($){super($),this.document=pc}}fc.\u0275fac=function($){return new($||fc)(o.LFG(t._M))},fc.\u0275prov=o.Yz7({token:fc,factory:fc.\u0275fac,providedIn:"root"});const il=t.Ps`
    mutation SuggestSource($input: SuggestSourceInput!) {
  suggestSource(input: $input) {
    clientMutationId
    sourceSuggestion {
      id
    }
  }
}
    `;class Es extends t.mm{constructor($){super($),this.document=il}}Es.\u0275fac=function($){return new($||Es)(o.LFG(t._M))},Es.\u0275prov=o.Yz7({token:Es,factory:Es.\u0275fac,providedIn:"root"});const Ll=t.Ps`
    mutation UpdateSourceSuggestion($input: UpdateSourceSuggestionStatusInput!) {
  updateSourceSuggestionStatus(input: $input) {
    sourceSuggestion {
      id
      status
    }
  }
}
    `;class ps extends t.mm{constructor($){super($),this.document=Ll}}ps.\u0275fac=function($){return new($||ps)(o.LFG(t._M))},ps.\u0275prov=o.Yz7({token:ps,factory:ps.\u0275fac,providedIn:"root"});const o1=t.Ps`
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
    `;class ol extends t.mm{constructor($){super($),this.document=o1}}ol.\u0275fac=function($){return new($||ol)(o.LFG(t._M))},ol.\u0275prov=o.Yz7({token:ol,factory:ol.\u0275fac,providedIn:"root"});const rl=t.Ps`
    mutation UpdateUserProfile($input: EditUserInput!) {
  editUser(input: $input) {
    user {
      id
    }
  }
}
    `;class xs extends t.mm{constructor($){super($),this.document=rl}}xs.\u0275fac=function($){return new($||xs)(o.LFG(t._M))},xs.\u0275prov=o.Yz7({token:xs,factory:xs.\u0275fac,providedIn:"root"});const Ou=t.Ps`
    query Countries {
  countries {
    id
    name
  }
}
    `;class mc extends t.AE{constructor($){super($),this.document=Ou}}mc.\u0275fac=function($){return new($||mc)(o.LFG(t._M))},mc.\u0275prov=o.Yz7({token:mc,factory:mc.\u0275fac,providedIn:"root"});const r1=t.Ps`
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
    `;class Rl extends t.mm{constructor($){super($),this.document=r1}}Rl.\u0275fac=function($){return new($||Rl)(o.LFG(t._M))},Rl.\u0275prov=o.Yz7({token:Rl,factory:Rl.\u0275fac,providedIn:"root"});const ah=t.Ps`
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
    `;class sl extends t.AE{constructor($){super($),this.document=ah}}sl.\u0275fac=function($){return new($||sl)(o.LFG(t._M))},sl.\u0275prov=o.Yz7({token:sl,factory:sl.\u0275fac,providedIn:"root"});const Vl=t.Ps`
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
    `;class Bl extends t.mm{constructor($){super($),this.document=Vl}}Bl.\u0275fac=function($){return new($||Bl)(o.LFG(t._M))},Bl.\u0275prov=o.Yz7({token:Bl,factory:Bl.\u0275fac,providedIn:"root"});const ra=t.Ps`
    query VariantGroupSubmittableFields($variantGroupId: Int!) {
  variantGroup(id: $variantGroupId) {
    ...SubmittableVariantGroupFields
  }
}
    ${yo}`;class al extends t.AE{constructor($){super($),this.document=ra}}al.\u0275fac=function($){return new($||al)(o.LFG(t._M))},al.\u0275prov=o.Yz7({token:al,factory:al.\u0275fac,providedIn:"root"});const Pa=t.Ps`
    mutation SubmitVariantGroup($input: SubmitVariantGroupInput!) {
  submitVariantGroup(input: $input) {
    clientMutationId
    variantGroup {
      id
    }
  }
}
    `;class Ia extends t.mm{constructor($){super($),this.document=Pa}}Ia.\u0275fac=function($){return new($||Ia)(o.LFG(t._M))},Ia.\u0275prov=o.Yz7({token:Ia,factory:Ia.\u0275fac,providedIn:"root"});const cl=t.Ps`
    query LinkableGene($geneId: Int!) {
  gene(id: $geneId) {
    id
    name
    link
  }
}
    `;class Aa extends t.AE{constructor($){super($),this.document=cl}}Aa.\u0275fac=function($){return new($||Aa)(o.LFG(t._M))},Aa.\u0275prov=o.Yz7({token:Aa,factory:Aa.\u0275fac,providedIn:"root"});const K1=t.Ps`
    query LinkableVariant($variantId: Int!) {
  variant(id: $variantId) {
    id
    name
    link
  }
}
    `;class ll extends t.AE{constructor($){super($),this.document=K1}}ll.\u0275fac=function($){return new($||ll)(o.LFG(t._M))},ll.\u0275prov=o.Yz7({token:ll,factory:ll.\u0275fac,providedIn:"root"});const s1=t.Ps`
    query LinkableTherapy($therapyId: Int!) {
  therapy(id: $therapyId) {
    id
    name
    link
  }
}
    `;class Fa extends t.AE{constructor($){super($),this.document=s1}}Fa.\u0275fac=function($){return new($||Fa)(o.LFG(t._M))},Fa.\u0275prov=o.Yz7({token:Fa,factory:Fa.\u0275fac,providedIn:"root"});const q1=t.Ps`
    query EvidenceItemRevisableFields2($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...RevisableEvidenceFields2
  }
}
    ${$o}`;class Vs extends t.AE{constructor($){super($),this.document=q1}}Vs.\u0275fac=function($){return new($||Vs)(o.LFG(t._M))},Vs.\u0275prov=o.Yz7({token:Vs,factory:Vs.\u0275fac,providedIn:"root"});const su=t.Ps`
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
    `;class Ds extends t.mm{constructor($){super($),this.document=su}}Ds.\u0275fac=function($){return new($||Ds)(o.LFG(t._M))},Ds.\u0275prov=o.Yz7({token:Ds,factory:Ds.\u0275fac,providedIn:"root"});const X1=t.Ps`
    mutation SubmitSource($input: SuggestSourceInput!) {
  suggestSource(input: $input) {
    clientMutationId
    sourceSuggestion {
      id
    }
  }
}
    `;class ul extends t.mm{constructor($){super($),this.document=X1}}ul.\u0275fac=function($){return new($||ul)(o.LFG(t._M))},ul.\u0275prov=o.Yz7({token:ul,factory:ul.\u0275fac,providedIn:"root"});const Hl=t.Ps`
    query VariantRevisableFields($variantId: Int!) {
  variant(id: $variantId) {
    ...RevisableVariantFields
  }
}
    ${qo}`;class dl extends t.AE{constructor($){super($),this.document=Hl}}dl.\u0275fac=function($){return new($||dl)(o.LFG(t._M))},dl.\u0275prov=o.Yz7({token:dl,factory:dl.\u0275fac,providedIn:"root"});const gc=t.Ps`
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
    `;class vc extends t.mm{constructor($){super($),this.document=gc}}vc.\u0275fac=function($){return new($||vc)(o.LFG(t._M))},vc.\u0275prov=o.Yz7({token:vc,factory:vc.\u0275fac,providedIn:"root"});const au=t.Ps`
    query VariantGroupRevisableFields2($variantGroupId: Int!) {
  variantGroup(id: $variantGroupId) {
    ...VariantGroupRevisableFields2
  }
}
    ${sr}`;class Na extends t.AE{constructor($){super($),this.document=au}}Na.\u0275fac=function($){return new($||Na)(o.LFG(t._M))},Na.\u0275prov=o.Yz7({token:Na,factory:Na.\u0275fac,providedIn:"root"});const a1=t.Ps`
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
    `;class ka extends t.mm{constructor($){super($),this.document=a1}}ka.\u0275fac=function($){return new($||ka)(o.LFG(t._M))},ka.\u0275prov=o.Yz7({token:ka,factory:ka.\u0275fac,providedIn:"root"});const Zr=t.Ps`
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
    `;class _c extends t.AE{constructor($){super($),this.document=Zr}}_c.\u0275fac=function($){return new($||_c)(o.LFG(t._M))},_c.\u0275prov=o.Yz7({token:_c,factory:_c.\u0275fac,providedIn:"root"});const c1=t.Ps`
    query AcmgCodeSelectTypeahead($code: String!) {
  acmgCodesTypeahead(queryTerm: $code) {
    ...AcmgCodeSelectTypeaheadFields
  }
}
    ${Fo}`;class yc extends t.AE{constructor($){super($),this.document=c1}}yc.\u0275fac=function($){return new($||yc)(o.LFG(t._M))},yc.\u0275prov=o.Yz7({token:yc,factory:yc.\u0275fac,providedIn:"root"});const wu=t.Ps`
    query AcmgCodeSelectTag($id: Int!) {
  acmgCode(id: $id) {
    ...AcmgCodeSelectTypeaheadFields
  }
}
    ${Fo}`;class Bs extends t.AE{constructor($){super($),this.document=wu}}Bs.\u0275fac=function($){return new($||Bs)(o.LFG(t._M))},Bs.\u0275prov=o.Yz7({token:Bs,factory:Bs.\u0275fac,providedIn:"root"});const l1=t.Ps`
    query ClingenCodeSelectTypeahead($code: String!) {
  clingenCodesTypeahead(queryTerm: $code) {
    ...ClingenCodeSelectTypeaheadFields
  }
}
    ${Pr}`;class Cc extends t.AE{constructor($){super($),this.document=l1}}Cc.\u0275fac=function($){return new($||Cc)(o.LFG(t._M))},Cc.\u0275prov=o.Yz7({token:Cc,factory:Cc.\u0275fac,providedIn:"root"});const u1=t.Ps`
    query ClingenCodeSelectTag($id: Int!) {
  clingenCode(id: $id) {
    ...ClingenCodeSelectTypeaheadFields
  }
}
    ${Pr}`;class La extends t.AE{constructor($){super($),this.document=u1}}La.\u0275fac=function($){return new($||La)(o.LFG(t._M))},La.\u0275prov=o.Yz7({token:La,factory:La.\u0275fac,providedIn:"root"});const d1=t.Ps`
    mutation QuickAddDisease($name: String!, $doid: String) {
  addDisease(input: {name: $name, doid: $doid}) {
    ...QuickAddDiseaseFields
  }
}
    ${Ke}`;class zc extends t.mm{constructor($){super($),this.document=d1}}zc.\u0275fac=function($){return new($||zc)(o.LFG(t._M))},zc.\u0275prov=o.Yz7({token:zc,factory:zc.\u0275fac,providedIn:"root"});const dr=t.Ps`
    query DiseaseSelectTypeahead($name: String!) {
  diseaseTypeahead(queryTerm: $name) {
    ...DiseaseSelectTypeaheadFields
  }
}
    ${Ki}`;class sa extends t.AE{constructor($){super($),this.document=dr}}sa.\u0275fac=function($){return new($||sa)(o.LFG(t._M))},sa.\u0275prov=o.Yz7({token:sa,factory:sa.\u0275fac,providedIn:"root"});const h1=t.Ps`
    query DiseaseSelectTag($id: Int!) {
  disease(id: $id) {
    ...DiseaseSelectTypeaheadFields
  }
}
    ${Ki}`;class aa extends t.AE{constructor($){super($),this.document=h1}}aa.\u0275fac=function($){return new($||aa)(o.LFG(t._M))},aa.\u0275prov=o.Yz7({token:aa,factory:aa.\u0275fac,providedIn:"root"});const Eo=t.Ps`
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
    ${q}`;class Os extends t.AE{constructor($){super($),this.document=Eo}}Os.\u0275fac=function($){return new($||Os)(o.LFG(t._M))},Os.\u0275prov=o.Yz7({token:Os,factory:Os.\u0275fac,providedIn:"root"});const Ra=t.Ps`
    query EvidenceSelectTypeahead($eid: Int!) {
  evidenceItems(id: $eid) {
    nodes {
      ...EvidenceSelectTypeaheadFields
    }
  }
}
    ${Fe}`;class ca extends t.AE{constructor($){super($),this.document=Ra}}ca.\u0275fac=function($){return new($||ca)(o.LFG(t._M))},ca.\u0275prov=o.Yz7({token:ca,factory:ca.\u0275fac,providedIn:"root"});const p1=t.Ps`
    query EvidenceSelectTag($eid: Int!) {
  evidenceItem(id: $eid) {
    ...EvidenceSelectTypeaheadFields
  }
}
    ${Fe}`;class Va extends t.AE{constructor($){super($),this.document=p1}}Va.\u0275fac=function($){return new($||Va)(o.LFG(t._M))},Va.\u0275prov=o.Yz7({token:Va,factory:Va.\u0275fac,providedIn:"root"});const Pu=t.Ps`
    query GeneSelectTypeahead($entrezSymbol: String!) {
  geneTypeahead(queryTerm: $entrezSymbol) {
    ...GeneSelectTypeaheadFields
  }
}
    ${je}`;class Ba extends t.AE{constructor($){super($),this.document=Pu}}Ba.\u0275fac=function($){return new($||Ba)(o.LFG(t._M))},Ba.\u0275prov=o.Yz7({token:Ba,factory:Ba.\u0275fac,providedIn:"root"});const ed=t.Ps`
    query GeneSelectTag($geneId: Int!) {
  gene(id: $geneId) {
    ...GeneSelectTypeaheadFields
  }
}
    ${je}`;class Ha extends t.AE{constructor($){super($),this.document=ed}}Ha.\u0275fac=function($){return new($||Ha)(o.LFG(t._M))},Ha.\u0275prov=o.Yz7({token:Ha,factory:Ha.\u0275fac,providedIn:"root"});const f1=t.Ps`
    query MolecularProfileSelectTypeahead($name: String!, $geneId: Int) {
  molecularProfiles(name: $name, geneId: $geneId, first: 25) {
    nodes {
      ...MolecularProfileSelectTypeaheadFields
    }
  }
}
    ${Ni}`;class Tc extends t.AE{constructor($){super($),this.document=f1}}Tc.\u0275fac=function($){return new($||Tc)(o.LFG(t._M))},Tc.\u0275prov=o.Yz7({token:Tc,factory:Tc.\u0275fac,providedIn:"root"});const Hs=t.Ps`
    query MolecularProfileSelectTag($molecularProfileId: Int!) {
  molecularProfile(id: $molecularProfileId) {
    ...MolecularProfileSelectTypeaheadFields
  }
}
    ${Ni}`;class la extends t.AE{constructor($){super($),this.document=Hs}}la.\u0275fac=function($){return new($||la)(o.LFG(t._M))},la.\u0275prov=o.Yz7({token:la,factory:la.\u0275fac,providedIn:"root"});const m1=t.Ps`
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
    ${Mt}`;class hr extends t.AE{constructor($){super($),this.document=m1}}hr.\u0275fac=function($){return new($||hr)(o.LFG(t._M))},hr.\u0275prov=o.Yz7({token:hr,factory:hr.\u0275fac,providedIn:"root"});const ws=t.Ps`
    query MpExpressionEditorPrepopulate($mpId: Int!) {
  molecularProfile(id: $mpId) {
    id
    parsedName {
      ...MolecularProfileParsedName
    }
    rawName
  }
}
    ${me}`;class bc extends t.AE{constructor($){super($),this.document=ws}}bc.\u0275fac=function($){return new($||bc)(o.LFG(t._M))},bc.\u0275prov=o.Yz7({token:bc,factory:bc.\u0275fac,providedIn:"root"});const ua=t.Ps`
    mutation CreateMolecularProfile2($mpStructure: MolecularProfileComponentInput!) {
  createMolecularProfile(input: {structure: $mpStructure}) {
    molecularProfile {
      id
      name
      link
    }
  }
}
    `;class da extends t.mm{constructor($){super($),this.document=ua}}da.\u0275fac=function($){return new($||da)(o.LFG(t._M))},da.\u0275prov=o.Yz7({token:da,factory:da.\u0275fac,providedIn:"root"});const $a=t.Ps`
    query NccnGuidelineSelectTypeahead($name: String!) {
  nccnGuidelinesTypeahead(queryTerm: $name) {
    ...NccnGuidelineSelectTypeaheadFields
  }
}
    ${Rt}`;class fs extends t.AE{constructor($){super($),this.document=$a}}fs.\u0275fac=function($){return new($||fs)(o.LFG(t._M))},fs.\u0275prov=o.Yz7({token:fs,factory:fs.\u0275fac,providedIn:"root"});const ha=t.Ps`
    query NccnGuidelineSelectTag($id: Int!) {
  nccnGuideline(id: $id) {
    ...NccnGuidelineSelectTypeaheadFields
  }
}
    ${Rt}`;class Jr extends t.AE{constructor($){super($),this.document=ha}}Jr.\u0275fac=function($){return new($||Jr)(o.LFG(t._M))},Jr.\u0275prov=o.Yz7({token:Jr,factory:Jr.\u0275fac,providedIn:"root"});const g1=t.Ps`
    query PhenotypeSelectTypeahead($name: String!) {
  phenotypeTypeahead(queryTerm: $name) {
    ...PhenotypeSelectTypeaheadFields
  }
}
    ${jn}`;class pa extends t.AE{constructor($){super($),this.document=g1}}pa.\u0275fac=function($){return new($||pa)(o.LFG(t._M))},pa.\u0275prov=o.Yz7({token:pa,factory:pa.\u0275fac,providedIn:"root"});const v1=t.Ps`
    query PhenotypeSelectTag($id: Int!) {
  phenotype(id: $id) {
    ...PhenotypeSelectTypeaheadFields
  }
}
    ${jn}`;class Mc extends t.AE{constructor($){super($),this.document=v1}}Mc.\u0275fac=function($){return new($||Mc)(o.LFG(t._M))},Mc.\u0275prov=o.Yz7({token:Mc,factory:Mc.\u0275fac,providedIn:"root"});const Iu=t.Ps`
    query QuickAddSourceCheckCitation($sourceType: SourceSource!, $citationId: String!) {
  remoteCitation(sourceType: $sourceType, citationId: $citationId)
}
    `;class Sc extends t.AE{constructor($){super($),this.document=Iu}}Sc.\u0275fac=function($){return new($||Sc)(o.LFG(t._M))},Sc.\u0275prov=o.Yz7({token:Sc,factory:Sc.\u0275fac,providedIn:"root"});const _1=t.Ps`
    mutation QuickAddSourceRemoteCitation($input: AddRemoteCitationInput!) {
  addRemoteCitation(input: $input) {
    newSource {
      id
      citationId
      sourceType
    }
  }
}
    `;class Ec extends t.mm{constructor($){super($),this.document=_1}}Ec.\u0275fac=function($){return new($||Ec)(o.LFG(t._M))},Ec.\u0275prov=o.Yz7({token:Ec,factory:Ec.\u0275fac,providedIn:"root"});const Au=t.Ps`
    query SourceSelectTypeahead($partialCitationId: String!, $sourceType: SourceSource!) {
  sourceTypeahead(citationId: $partialCitationId, sourceType: $sourceType) {
    ...SourceSelectTypeaheadFields
  }
}
    ${ii}`;class fa extends t.AE{constructor($){super($),this.document=Au}}fa.\u0275fac=function($){return new($||fa)(o.LFG(t._M))},fa.\u0275prov=o.Yz7({token:fa,factory:fa.\u0275fac,providedIn:"root"});const Fu=t.Ps`
    query SourceSelectTag($id: Int!) {
  source(id: $id) {
    ...SourceSelectTypeaheadFields
  }
}
    ${ii}`;class ma extends t.AE{constructor($){super($),this.document=Fu}}ma.\u0275fac=function($){return new($||ma)(o.LFG(t._M))},ma.\u0275prov=o.Yz7({token:ma,factory:ma.\u0275fac,providedIn:"root"});const y1=t.Ps`
    mutation QuickAddTherapy($name: String!, $ncitId: String) {
  addTherapy(input: {name: $name, ncitId: $ncitId}) {
    ...QuickAddTherapyFields
  }
}
    ${Qt}`;class xc extends t.mm{constructor($){super($),this.document=y1}}xc.\u0275fac=function($){return new($||xc)(o.LFG(t._M))},xc.\u0275prov=o.Yz7({token:xc,factory:xc.\u0275fac,providedIn:"root"});const Ya=t.Ps`
    query TherapySelectTypeahead($name: String!) {
  therapyTypeahead(queryTerm: $name) {
    ...TherapySelectTypeaheadFields
  }
}
    ${Ln}`;class Ua extends t.AE{constructor($){super($),this.document=Ya}}Ua.\u0275fac=function($){return new($||Ua)(o.LFG(t._M))},Ua.\u0275prov=o.Yz7({token:Ua,factory:Ua.\u0275fac,providedIn:"root"});const Kr=t.Ps`
    query TherapySelectTag($id: Int!) {
  therapy(id: $id) {
    ...TherapySelectTypeaheadFields
  }
}
    ${Ln}`;class ja extends t.AE{constructor($){super($),this.document=Kr}}ja.\u0275fac=function($){return new($||ja)(o.LFG(t._M))},ja.\u0275prov=o.Yz7({token:ja,factory:ja.\u0275fac,providedIn:"root"});const Nu=t.Ps`
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
    ${on}`;class Dc extends t.AE{constructor($){super($),this.document=Nu}}Dc.\u0275fac=function($){return new($||Dc)(o.LFG(t._M))},Dc.\u0275prov=o.Yz7({token:Dc,factory:Dc.\u0275fac,providedIn:"root"});const td=t.Ps`
    mutation QuickAddVariant($name: String!, $geneId: Int!) {
  addVariant(input: {name: $name, geneId: $geneId}) {
    ...AddVariantFields
  }
}
    ${Pi}`;class $s extends t.mm{constructor($){super($),this.document=td}}$s.\u0275fac=function($){return new($||$s)(o.LFG(t._M))},$s.\u0275prov=o.Yz7({token:$s,factory:$s.\u0275fac,providedIn:"root"});const C1=t.Ps`
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
    ${hn}`;class ms extends t.AE{constructor($){super($),this.document=C1}}ms.\u0275fac=function($){return new($||ms)(o.LFG(t._M))},ms.\u0275prov=o.Yz7({token:ms,factory:ms.\u0275fac,providedIn:"root"});const ku=t.Ps`
    query VariantSelectTag($variantId: Int!) {
  variant(id: $variantId) {
    ...VariantSelectTypeaheadFields
  }
}
    ${hn}`;class kr extends t.AE{constructor($){super($),this.document=ku}}kr.\u0275fac=function($){return new($||kr)(o.LFG(t._M))},kr.\u0275prov=o.Yz7({token:kr,factory:kr.\u0275fac,providedIn:"root"});const cu=t.Ps`
    query VariantTypeSelectTypeahead($name: String!) {
  variantTypeTypeahead(queryTerm: $name) {
    ...VariantTypeSelectTypeaheadFields
  }
}
    ${Pn}`;class ga extends t.AE{constructor($){super($),this.document=cu}}ga.\u0275fac=function($){return new($||ga)(o.LFG(t._M))},ga.\u0275prov=o.Yz7({token:ga,factory:ga.\u0275fac,providedIn:"root"});const lu=t.Ps`
    query VariantTypeSelectTag($id: Int!) {
  variantType(id: $id) {
    ...VariantTypeSelectTypeaheadFields
  }
}
    ${Pn}`;class Ga extends t.AE{constructor($){super($),this.document=lu}}Ga.\u0275fac=function($){return new($||Ga)(o.LFG(t._M))},Ga.\u0275prov=o.Yz7({token:Ga,factory:Ga.\u0275fac,providedIn:"root"});const z1=t.Ps`
    query AssertionDetail($assertionId: Int!) {
  assertion(id: $assertionId) {
    ...AssertionDetailFields
  }
}
    ${bn}`;class Qa extends t.AE{constructor($){super($),this.document=z1}}Qa.\u0275fac=function($){return new($||Qa)(o.LFG(t._M))},Qa.\u0275prov=o.Yz7({token:Qa,factory:Qa.\u0275fac,providedIn:"root"});const Lu=t.Ps`
    query AssertionSummary($assertionId: Int!) {
  assertion(id: $assertionId) {
    ...AssertionSummaryFields
  }
}
    ${Dn}`;class va extends t.AE{constructor($){super($),this.document=Lu}}va.\u0275fac=function($){return new($||va)(o.LFG(t._M))},va.\u0275prov=o.Yz7({token:va,factory:va.\u0275fac,providedIn:"root"});const Oc=t.Ps`
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
    `;class _a extends t.AE{constructor($){super($),this.document=Oc}}_a.\u0275fac=function($){return new($||_a)(o.LFG(t._M))},_a.\u0275prov=o.Yz7({token:_a,factory:_a.\u0275fac,providedIn:"root"});const uu=t.Ps`
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
    `;class hl extends t.AE{constructor($){super($),this.document=uu}}hl.\u0275fac=function($){return new($||hl)(o.LFG(t._M))},hl.\u0275prov=o.Yz7({token:hl,factory:hl.\u0275fac,providedIn:"root"});const T1=t.Ps`
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
    `;class wc extends t.AE{constructor($){super($),this.document=T1}}wc.\u0275fac=function($){return new($||wc)(o.LFG(t._M))},wc.\u0275prov=o.Yz7({token:wc,factory:wc.\u0275fac,providedIn:"root"});const du=t.Ps`
    query DiseasesSummary($diseaseId: Int!) {
  disease(id: $diseaseId) {
    ...DiseasesSummaryFields
  }
}
    ${qn}`;class Wa extends t.AE{constructor($){super($),this.document=du}}Wa.\u0275fac=function($){return new($||Wa)(o.LFG(t._M))},Wa.\u0275prov=o.Yz7({token:Wa,factory:Wa.\u0275fac,providedIn:"root"});const Ys=t.Ps`
    query EvidenceDetail($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...EvidenceDetailFields
  }
}
    ${wn}`;class Ps extends t.AE{constructor($){super($),this.document=Ys}}Ps.\u0275fac=function($){return new($||Ps)(o.LFG(t._M))},Ps.\u0275prov=o.Yz7({token:Ps,factory:Ps.\u0275fac,providedIn:"root"});const Za=t.Ps`
    query EvidenceSummary($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...EvidenceSummaryFields
  }
}
    ${Bn}`;class Pc extends t.AE{constructor($){super($),this.document=Za}}Pc.\u0275fac=function($){return new($||Pc)(o.LFG(t._M))},Pc.\u0275prov=o.Yz7({token:Pc,factory:Pc.\u0275fac,providedIn:"root"});const b1=t.Ps`
    query GeneDetail($geneId: Int!) {
  gene(id: $geneId) {
    ...GeneDetailFields
  }
}
    ${Gn}`;class pl extends t.AE{constructor($){super($),this.document=b1}}pl.\u0275fac=function($){return new($||pl)(o.LFG(t._M))},pl.\u0275prov=o.Yz7({token:pl,factory:pl.\u0275fac,providedIn:"root"});const M1=t.Ps`
    query GenesSummary($geneId: Int!) {
  gene(id: $geneId) {
    ...GeneSummaryFields
  }
}
    ${pi}`;class qr extends t.AE{constructor($){super($),this.document=M1}}qr.\u0275fac=function($){return new($||qr)(o.LFG(t._M))},qr.\u0275prov=o.Yz7({token:qr,factory:qr.\u0275fac,providedIn:"root"});const S1=t.Ps`
    query MolecularProfileDetail($mpId: Int!) {
  molecularProfile(id: $mpId) {
    ...MolecularProfileDetailFields
  }
}
    ${ui}`;class gs extends t.AE{constructor($){super($),this.document=S1}}gs.\u0275fac=function($){return new($||gs)(o.LFG(t._M))},gs.\u0275prov=o.Yz7({token:gs,factory:gs.\u0275fac,providedIn:"root"});const Us=t.Ps`
    query MolecularProfileSummary($mpId: Int!) {
  molecularProfile(id: $mpId) {
    ...MolecularProfileSummaryFields
  }
}
    ${Ui}`;class ya extends t.AE{constructor($){super($),this.document=Us}}ya.\u0275fac=function($){return new($||ya)(o.LFG(t._M))},ya.\u0275prov=o.Yz7({token:ya,factory:ya.\u0275fac,providedIn:"root"});const Ru=t.Ps`
    query OrganizationDetail($organizationId: Int!) {
  organization(id: $organizationId) {
    ...OrganizationDetailFields
  }
}
    ${yi}`;class Ja extends t.AE{constructor($){super($),this.document=Ru}}Ja.\u0275fac=function($){return new($||Ja)(o.LFG(t._M))},Ja.\u0275prov=o.Yz7({token:Ja,factory:Ja.\u0275fac,providedIn:"root"});const Vu=t.Ps`
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
    ${fi}`;class Xr extends t.AE{constructor($){super($),this.document=Vu}}Xr.\u0275fac=function($){return new($||Xr)(o.LFG(t._M))},Xr.\u0275prov=o.Yz7({token:Xr,factory:Xr.\u0275fac,providedIn:"root"});const E1=t.Ps`
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
    ${Li}`;class Ic extends t.AE{constructor($){super($),this.document=E1}}Ic.\u0275fac=function($){return new($||Ic)(o.LFG(t._M))},Ic.\u0275prov=o.Yz7({token:Ic,factory:Ic.\u0275fac,providedIn:"root"});const x1=t.Ps`
    query PhenotypeDetail($phenotypeId: Int!) {
  phenotype(id: $phenotypeId) {
    id
    name
    hpoId
    url
    link
  }
}
    `;class Ac extends t.AE{constructor($){super($),this.document=x1}}Ac.\u0275fac=function($){return new($||Ac)(o.LFG(t._M))},Ac.\u0275prov=o.Yz7({token:Ac,factory:Ac.\u0275fac,providedIn:"root"});const Bu=t.Ps`
    query DataReleases {
  dataReleases {
    ...Release
  }
}
    ${ao}`;class xr extends t.AE{constructor($){super($),this.document=Bu}}xr.\u0275fac=function($){return new($||xr)(o.LFG(t._M))},xr.\u0275prov=o.Yz7({token:xr,factory:xr.\u0275fac,providedIn:"root"});const Fc=t.Ps`
    query SourceDetail($sourceId: Int!) {
  source(id: $sourceId) {
    ...SourceDetailFields
  }
}
    ${so}`;class Nc extends t.AE{constructor($){super($),this.document=Fc}}Nc.\u0275fac=function($){return new($||Nc)(o.LFG(t._M))},Nc.\u0275prov=o.Yz7({token:Nc,factory:Nc.\u0275fac,providedIn:"root"});const Dd=t.Ps`
    query SourceSummary($sourceId: Int!) {
  source(id: $sourceId) {
    ...SourceSummaryFields
  }
}
    ${Ii}`;class $l extends t.AE{constructor($){super($),this.document=Dd}}$l.\u0275fac=function($){return new($||$l)(o.LFG(t._M))},$l.\u0275prov=o.Yz7({token:$l,factory:$l.\u0275fac,providedIn:"root"});const nd=t.Ps`
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
    `;class fl extends t.AE{constructor($){super($),this.document=nd}}fl.\u0275fac=function($){return new($||fl)(o.LFG(t._M))},fl.\u0275prov=o.Yz7({token:fl,factory:fl.\u0275fac,providedIn:"root"});const id=t.Ps`
    query TherapiesSummary($therapyId: Int!) {
  therapy(id: $therapyId) {
    ...TherapiesSummaryFields
  }
}
    ${ji}`;class kc extends t.AE{constructor($){super($),this.document=id}}kc.\u0275fac=function($){return new($||kc)(o.LFG(t._M))},kc.\u0275prov=o.Yz7({token:kc,factory:kc.\u0275fac,providedIn:"root"});const ml=t.Ps`
    query UserDetail($userId: Int!) {
  user(id: $userId) {
    ...UserDetailFields
  }
}
    ${No}`;class gl extends t.AE{constructor($){super($),this.document=ml}}gl.\u0275fac=function($){return new($||gl)(o.LFG(t._M))},gl.\u0275prov=o.Yz7({token:gl,factory:gl.\u0275fac,providedIn:"root"});const od=t.Ps`
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
${Oi}
${Yo}
${Xo}`;class vl extends t.AE{constructor($){super($),this.document=od}}vl.\u0275fac=function($){return new($||vl)(o.LFG(t._M))},vl.\u0275prov=o.Yz7({token:vl,factory:vl.\u0275fac,providedIn:"root"});const hu=t.Ps`
    mutation UpdateNotificationStatus($input: UpdateNotificationStatusInput!) {
  updateNotificationStatus(input: $input) {
    notifications {
      ...notificationNode
    }
  }
}
    ${Xo}`;class Dr extends t.mm{constructor($){super($),this.document=hu}}Dr.\u0275fac=function($){return new($||Dr)(o.LFG(t._M))},Dr.\u0275prov=o.Yz7({token:Dr,factory:Dr.\u0275fac,providedIn:"root"});const Ca=t.Ps`
    mutation Unsubscribe($input: UnsubscribeInput!) {
  unsubscribe(input: $input) {
    unsubscribedEntities {
      ...subscribable
    }
  }
}
    ${co}`;class Lc extends t.mm{constructor($){super($),this.document=Ca}}Lc.\u0275fac=function($){return new($||Lc)(o.LFG(t._M))},Lc.\u0275prov=o.Yz7({token:Lc,factory:Lc.\u0275fac,providedIn:"root"});const D1=t.Ps`
    mutation Subscribe($input: SubscribeInput!) {
  subscribe(input: $input) {
    subscriptions {
      id
    }
  }
}
    `;class vs extends t.mm{constructor($){super($),this.document=D1}}vs.\u0275fac=function($){return new($||vs)(o.LFG(t._M))},vs.\u0275prov=o.Yz7({token:vs,factory:vs.\u0275fac,providedIn:"root"});const rd=t.Ps`
    query VariantGroupDetail($variantGroupId: Int!) {
  variantGroup(id: $variantGroupId) {
    ...VariantGroupDetailFields
  }
}
    ${er}`;class Yl extends t.AE{constructor($){super($),this.document=rd}}Yl.\u0275fac=function($){return new($||Yl)(o.LFG(t._M))},Yl.\u0275prov=o.Yz7({token:Yl,factory:Yl.\u0275fac,providedIn:"root"});const sd=t.Ps`
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
    `;class Rc extends t.AE{constructor($){super($),this.document=sd}}Rc.\u0275fac=function($){return new($||Rc)(o.LFG(t._M))},Rc.\u0275prov=o.Yz7({token:Rc,factory:Rc.\u0275fac,providedIn:"root"});const pu=t.Ps`
    query VariantGroupsSummary($variantGroupId: Int!) {
  variantGroup(id: $variantGroupId) {
    ...VariantGroupSummaryFields
  }
}
    ${pr}`;class _l extends t.AE{constructor($){super($),this.document=pu}}_l.\u0275fac=function($){return new($||_l)(o.LFG(t._M))},_l.\u0275prov=o.Yz7({token:_l,factory:_l.\u0275fac,providedIn:"root"});const Od=t.Ps`
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
    `;class Vc extends t.AE{constructor($){super($),this.document=Od}}Vc.\u0275fac=function($){return new($||Vc)(o.LFG(t._M))},Vc.\u0275prov=o.Yz7({token:Vc,factory:Vc.\u0275fac,providedIn:"root"});const ad=t.Ps`
    query VariantDetail($variantId: Int!) {
  variant(id: $variantId) {
    ...VariantDetailFields
  }
}
    ${ko}`;class yl extends t.AE{constructor($){super($),this.document=ad}}yl.\u0275fac=function($){return new($||yl)(o.LFG(t._M))},yl.\u0275prov=o.Yz7({token:yl,factory:yl.\u0275fac,providedIn:"root"});const cd=t.Ps`
    query VariantSummary($variantId: Int!) {
  variant(id: $variantId) {
    ...VariantSummaryFields
  }
}