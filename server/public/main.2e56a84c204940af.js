"use strict";(self.webpackChunkmain=self.webpackChunkmain||[]).push([[179],{4265:(xt,Se,a)=>{a.d(Se,{T6:()=>L,VD:()=>Y,WE:()=>Q,Yt:()=>M,lC:()=>v,py:()=>k,rW:()=>i,s:()=>P,ve:()=>s,vq:()=>U});var t=a(6337);function i(e,F,R){return{r:255*(0,t.sh)(e,255),g:255*(0,t.sh)(F,255),b:255*(0,t.sh)(R,255)}}function v(e,F,R){e=(0,t.sh)(e,255),F=(0,t.sh)(F,255),R=(0,t.sh)(R,255);var ge=Math.max(e,F,R),ze=Math.min(e,F,R),K=0,N=0,V=(ge+ze)/2;if(ge===ze)N=0,K=0;else{var O=ge-ze;switch(N=V>.5?O/(2-ge-ze):O/(ge+ze),ge){case e:K=(F-R)/O+(F<R?6:0);break;case F:K=(R-e)/O+2;break;case R:K=(e-F)/O+4}K/=6}return{h:K,s:N,l:V}}function d(e,F,R){return R<0&&(R+=1),R>1&&(R-=1),R<1/6?e+6*R*(F-e):R<.5?F:R<2/3?e+(F-e)*(2/3-R)*6:e}function s(e,F,R){var ge,ze,K;if(e=(0,t.sh)(e,360),F=(0,t.sh)(F,100),R=(0,t.sh)(R,100),0===F)ze=R,K=R,ge=R;else{var N=R<.5?R*(1+F):R+F-R*F,V=2*R-N;ge=d(V,N,e+1/3),ze=d(V,N,e),K=d(V,N,e-1/3)}return{r:255*ge,g:255*ze,b:255*K}}function k(e,F,R){e=(0,t.sh)(e,255),F=(0,t.sh)(F,255),R=(0,t.sh)(R,255);var ge=Math.max(e,F,R),ze=Math.min(e,F,R),K=0,N=ge,V=ge-ze,O=0===ge?0:V/ge;if(ge===ze)K=0;else{switch(ge){case e:K=(F-R)/V+(F<R?6:0);break;case F:K=(R-e)/V+2;break;case R:K=(e-F)/V+4}K/=6}return{h:K,s:O,v:N}}function Q(e,F,R){e=6*(0,t.sh)(e,360),F=(0,t.sh)(F,100),R=(0,t.sh)(R,100);var ge=Math.floor(e),ze=e-ge,K=R*(1-F),N=R*(1-ze*F),V=R*(1-(1-ze)*F),O=ge%6;return{r:255*[R,N,K,K,V,R][O],g:255*[V,R,R,N,K,K][O],b:255*[K,K,V,R,R,N][O]}}function U(e,F,R,ge){var ze=[(0,t.FZ)(Math.round(e).toString(16)),(0,t.FZ)(Math.round(F).toString(16)),(0,t.FZ)(Math.round(R).toString(16))];return ge&&ze[0].startsWith(ze[0].charAt(1))&&ze[1].startsWith(ze[1].charAt(1))&&ze[2].startsWith(ze[2].charAt(1))?ze[0].charAt(0)+ze[1].charAt(0)+ze[2].charAt(0):ze.join("")}function P(e,F,R,ge,ze){var K=[(0,t.FZ)(Math.round(e).toString(16)),(0,t.FZ)(Math.round(F).toString(16)),(0,t.FZ)(Math.round(R).toString(16)),(0,t.FZ)(w(ge))];return ze&&K[0].startsWith(K[0].charAt(1))&&K[1].startsWith(K[1].charAt(1))&&K[2].startsWith(K[2].charAt(1))&&K[3].startsWith(K[3].charAt(1))?K[0].charAt(0)+K[1].charAt(0)+K[2].charAt(0)+K[3].charAt(0):K.join("")}function w(e){return Math.round(255*parseFloat(e)).toString(16)}function L(e){return Y(e)/255}function Y(e){return parseInt(e,16)}function M(e){return{r:e>>16,g:(65280&e)>>8,b:255&e}}},1309:(xt,Se,a)=>{a.d(Se,{R:()=>t});var t={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"}},6379:(xt,Se,a)=>{a.d(Se,{uA:()=>d});var t=a(4265),i=a(1309),v=a(6337);function d(Y){var M={r:0,g:0,b:0},e=1,F=null,R=null,ge=null,ze=!1,K=!1;return"string"==typeof Y&&(Y=function w(Y){if(0===(Y=Y.trim().toLowerCase()).length)return!1;var M=!1;if(i.R[Y])Y=i.R[Y],M=!0;else if("transparent"===Y)return{r:0,g:0,b:0,a:0,format:"name"};var e=S.rgb.exec(Y);return e?{r:e[1],g:e[2],b:e[3]}:(e=S.rgba.exec(Y))?{r:e[1],g:e[2],b:e[3],a:e[4]}:(e=S.hsl.exec(Y))?{h:e[1],s:e[2],l:e[3]}:(e=S.hsla.exec(Y))?{h:e[1],s:e[2],l:e[3],a:e[4]}:(e=S.hsv.exec(Y))?{h:e[1],s:e[2],v:e[3]}:(e=S.hsva.exec(Y))?{h:e[1],s:e[2],v:e[3],a:e[4]}:(e=S.hex8.exec(Y))?{r:(0,t.VD)(e[1]),g:(0,t.VD)(e[2]),b:(0,t.VD)(e[3]),a:(0,t.T6)(e[4]),format:M?"name":"hex8"}:(e=S.hex6.exec(Y))?{r:(0,t.VD)(e[1]),g:(0,t.VD)(e[2]),b:(0,t.VD)(e[3]),format:M?"name":"hex"}:(e=S.hex4.exec(Y))?{r:(0,t.VD)(e[1]+e[1]),g:(0,t.VD)(e[2]+e[2]),b:(0,t.VD)(e[3]+e[3]),a:(0,t.T6)(e[4]+e[4]),format:M?"name":"hex8"}:!!(e=S.hex3.exec(Y))&&{r:(0,t.VD)(e[1]+e[1]),g:(0,t.VD)(e[2]+e[2]),b:(0,t.VD)(e[3]+e[3]),format:M?"name":"hex"}}(Y)),"object"==typeof Y&&(L(Y.r)&&L(Y.g)&&L(Y.b)?(M=(0,t.rW)(Y.r,Y.g,Y.b),ze=!0,K="%"===String(Y.r).substr(-1)?"prgb":"rgb"):L(Y.h)&&L(Y.s)&&L(Y.v)?(F=(0,v.JX)(Y.s),R=(0,v.JX)(Y.v),M=(0,t.WE)(Y.h,F,R),ze=!0,K="hsv"):L(Y.h)&&L(Y.s)&&L(Y.l)&&(F=(0,v.JX)(Y.s),ge=(0,v.JX)(Y.l),M=(0,t.ve)(Y.h,F,ge),ze=!0,K="hsl"),Object.prototype.hasOwnProperty.call(Y,"a")&&(e=Y.a)),e=(0,v.Yq)(e),{ok:ze,format:Y.format||K,r:Math.min(255,Math.max(M.r,0)),g:Math.min(255,Math.max(M.g,0)),b:Math.min(255,Math.max(M.b,0)),a:e}}var Q="(?:".concat("[-\\+]?\\d*\\.\\d+%?",")|(?:").concat("[-\\+]?\\d+%?",")"),U="[\\s|\\(]+(".concat(Q,")[,|\\s]+(").concat(Q,")[,|\\s]+(").concat(Q,")\\s*\\)?"),P="[\\s|\\(]+(".concat(Q,")[,|\\s]+(").concat(Q,")[,|\\s]+(").concat(Q,")[,|\\s]+(").concat(Q,")\\s*\\)?"),S={CSS_UNIT:new RegExp(Q),rgb:new RegExp("rgb"+U),rgba:new RegExp("rgba"+P),hsl:new RegExp("hsl"+U),hsla:new RegExp("hsla"+P),hsv:new RegExp("hsv"+U),hsva:new RegExp("hsva"+P),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function L(Y){return!!S.CSS_UNIT.exec(String(Y))}},6337:(xt,Se,a)=>{function t(U,P){(function v(U){return"string"==typeof U&&-1!==U.indexOf(".")&&1===parseFloat(U)})(U)&&(U="100%");var S=function d(U){return"string"==typeof U&&-1!==U.indexOf("%")}(U);return U=360===P?U:Math.min(P,Math.max(0,parseFloat(U))),S&&(U=parseInt(String(U*P),10)/100),Math.abs(U-P)<1e-6?1:U=360===P?(U<0?U%P+P:U%P)/parseFloat(String(P)):U%P/parseFloat(String(P))}function i(U){return Math.min(1,Math.max(0,U))}function s(U){return U=parseFloat(U),(isNaN(U)||U<0||U>1)&&(U=1),U}function k(U){return U<=1?"".concat(100*Number(U),"%"):U}function Q(U){return 1===U.length?"0"+U:String(U)}a.d(Se,{FZ:()=>Q,JX:()=>k,V2:()=>i,Yq:()=>s,sh:()=>t})},3369:(xt,Se,a)=>{a.d(Se,{G:()=>W});var t=a(5879),i=a(6814),v=a(4190),d=a(551),s=a(5695),k=a(7417),Q=a(5676),U=a(7398),P=a(2181),S=a(313),w=a(2962),L=a(8125),Y=a(3317),M=a(8091),e=a(2616);function F(ve,G){if(1&ve&&(t._UZ(0,"i",9),t.ALo(1,"entityColor"),t._uU(2)),2&ve){const se=t.oxw().ngIf;t.Q6J("nzTwotoneColor",t.lcZ(1,2,"ClinicalTrial")),t.xp6(2),t.hij(" ",se.nctId," ")}}function R(ve,G){if(1&ve&&(t.TgZ(0,"cvc-link-tag",10),t._uU(1," View on clinicaltrials.gov "),t.qZA()),2&ve){const se=t.oxw().ngIf;t.Q6J("href",se.url)}}function ge(ve,G){if(1&ve&&(t.ynx(0),t.TgZ(1,"nz-card",2),t.YNc(2,F,3,4,"ng-template",null,3,t.W1O),t.YNc(4,R,2,1,"ng-template",null,4,t.W1O),t.TgZ(6,"nz-descriptions",5)(7,"nz-descriptions-item",6),t._uU(8),t.qZA(),t.TgZ(9,"nz-descriptions-item",7),t._uU(10),t.qZA(),t.TgZ(11,"nz-descriptions-item",8),t._uU(12),t.qZA()()(),t.BQk()),2&ve){const se=G.ngIf,fe=t.MAs(3),be=t.MAs(5);t.xp6(1),t.Q6J("nzTitle",fe)("nzExtra",be),t.xp6(5),t.Q6J("nzColumn",2),t.xp6(2),t.hij(" ",se.name," "),t.xp6(2),t.hij(" ",se.sourceCount," "),t.xp6(2),t.hij(" ",se.evidenceCount," ")}}let ze=(()=>{class ve{constructor(se){this.gql=se}ngOnInit(){if(null==this.clinicalTrialId)throw new Error("cvc-clinical-trial-popover requires valid clinicalTrialId input.");this.clinicalTrial$=this.gql.watch({clinicalTrialId:this.clinicalTrialId}).valueChanges.pipe((0,U.U)(({data:se})=>se?.clinicalTrials.edges[0]?.node),(0,P.h)(Q.ep))}}return ve.\u0275fac=function(se){return new(se||ve)(t.Y36(S.UIR))},ve.\u0275cmp=t.Xpm({type:ve,selectors:[["cvc-clinical-trial-popover"]],inputs:{clinicalTrialId:"clinicalTrialId"},decls:3,vars:3,consts:[["id","popover-content"],[4,"ngIf"],["nzBordered","false","id","card-content",3,"nzTitle","nzExtra"],["cardTitle",""],["linkout",""],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","Name","nzSpan","2"],["nzTitle","Sources","nzSpan","2"],["nzTitle","Evidence","nzSpan","2"],["nz-icon","","nzTheme","twotone","nzType","civic-clinicaltrial",3,"nzTwotoneColor"],[3,"href"]],template:function(se,fe){1&se&&(t.TgZ(0,"div",0),t.YNc(1,ge,13,6,"ng-container",1),t.ALo(2,"ngrxPush"),t.qZA()),2&se&&(t.xp6(1),t.Q6J("ngIf",t.lcZ(2,1,fe.clinicalTrial$)))},dependencies:[i.O5,w.bd,d.Ls,L.R7,L.uj,Y.l,M.fM,e.a],styles:["[_nghost-%COMP%]{display:block;margin:-8px -12px}[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}[_nghost-%COMP%]     .ant-descriptions-view{border:none}[_nghost-%COMP%]     #entity-child-counts{border-top:1px solid #f0f0f0;padding:8px}[_nghost-%COMP%]     #entity-child-counts nz-space{width:100%}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child nz-tag{margin-right:0}.popover-text[_ngcontent-%COMP%]{width:100%;padding:8px;border-bottom:1px solid #f0f0f0}#popover-content[_ngcontent-%COMP%]{min-width:350px;max-width:500px;min-height:125px}"]}),ve})();function K(ve,G){}function N(ve,G){if(1&ve&&(t.ynx(0),t.TgZ(1,"a",4),t.YNc(2,K,0,0,"ng-template",5),t.qZA(),t.BQk()),2&ve){const se=t.oxw(),fe=t.MAs(2);t.xp6(1),t.Q6J("routerLink",se.clinicalTrial.link),t.xp6(1),t.Q6J("ngTemplateOutlet",fe)}}function V(ve,G){}function O(ve,G){if(1&ve&&t._UZ(0,"cvc-clinical-trial-popover",8),2&ve){const se=t.oxw(2);t.Q6J("clinicalTrialId",se.clinicalTrial.id)}}function A(ve,G){if(1&ve&&(t.TgZ(0,"nz-tag",6),t.YNc(1,V,0,0,"ng-template",5),t.qZA(),t.YNc(2,O,1,1,"ng-template",null,7,t.W1O)),2&ve){const se=t.MAs(3),fe=t.oxw(),be=t.MAs(6);t.Q6J("nzPopoverMouseEnterDelay",.5)("nzPopoverContent",se)("nzPopoverTrigger",fe.enablePopover?"hover":null),t.xp6(1),t.Q6J("ngTemplateOutlet",be)}}function x(ve,G){}function pe(ve,G){if(1&ve&&t.YNc(0,x,0,0,"ng-template",5),2&ve){t.oxw();const se=t.MAs(2);t.Q6J("ngTemplateOutlet",se)}}function de(ve,G){if(1&ve&&(t._UZ(0,"i",9),t.ALo(1,"entityColor"),t._uU(2)),2&ve){const se=t.oxw();t.Q6J("nzTwotoneColor",t.lcZ(1,2,"ClinicalTrial")),t.xp6(2),t.hij(" ",se.clinicalTrial.nctId,"\n")}}let W=(()=>{class ve{set clinicalTrial(se){if(!se)throw new Error("clinical-trial-tag clinicalTrial Input requires LinkableClinicalTrial.");this._clinicalTrial=se}get clinicalTrial(){return this._clinicalTrial}constructor(){this.linked=!0,this.enablePopover=!0}}return ve.\u0275fac=function(se){return new(se||ve)},ve.\u0275cmp=t.Xpm({type:ve,selectors:[["cvc-clinical-trial-tag"]],inputs:{clinicalTrial:"clinicalTrial",linked:"linked",enablePopover:"enablePopover"},decls:7,vars:2,consts:[[4,"ngIf","ngIfElse"],["tag",""],["unlinked",""],["tagContent",""],[3,"routerLink"],[3,"ngTemplateOutlet"],["nz-popover","","nzPopoverPlacement","right",3,"nzPopoverMouseEnterDelay","nzPopoverContent","nzPopoverTrigger"],["clinicalTrialPopover",""],[3,"clinicalTrialId"],["nz-icon","","nzTheme","twotone","nzType","civic-clinicaltrial",3,"nzTwotoneColor"]],template:function(se,fe){if(1&se&&(t.YNc(0,N,3,2,"ng-container",0),t.YNc(1,A,4,4,"ng-template",null,1,t.W1O),t.YNc(3,pe,1,1,"ng-template",null,2,t.W1O),t.YNc(5,de,3,4,"ng-template",null,3,t.W1O)),2&se){const be=t.MAs(4);t.Q6J("ngIf",fe.linked)("ngIfElse",be)}},dependencies:[i.O5,i.tP,v.rH,d.Ls,s.j,k.lU,ze,e.a],styles:["[_nghost-%COMP%]{display:block}"]}),ve})()},4605:(xt,Se,a)=>{a.d(Se,{N:()=>L});var t=a(6814),i=a(4190),v=a(5695),d=a(7417),s=a(6067),k=a(2524),Q=a(2962),U=a(8125),P=a(551),S=a(5879);let w=(()=>{class Y{}return Y.\u0275fac=function(e){return new(e||Y)},Y.\u0275mod=S.oAB({type:Y}),Y.\u0275inj=S.cJS({imports:[t.ez,Q.vh,P.PV,U.q6,s.X,k.s]}),Y})(),L=(()=>{class Y{}return Y.\u0275fac=function(e){return new(e||Y)},Y.\u0275mod=S.oAB({type:Y}),Y.\u0275inj=S.cJS({imports:[t.ez,i.Bz,P.PV,v.X,d.$6,w,k.s]}),Y})()},2851:(xt,Se,a)=>{a.d(Se,{I:()=>N});var t=a(5676),i=a(7398),v=a(2181),d=a(5879),s=a(313),k=a(6814),Q=a(2962),U=a(8125),P=a(551),S=a(2392),w=a(3317),L=a(8091),Y=a(5869);function M(V,O){if(1&V&&(d._UZ(0,"i",12),d._uU(1),d.ALo(2,"truncate")),2&V){const A=d.oxw().ngIf;d.xp6(1),d.hij(" ",d.xi3(2,1,A.name,50)," ")}}function e(V,O){if(1&V&&(d.TgZ(0,"cvc-link-tag",14),d._uU(1),d.qZA()),2&V){const A=d.oxw(2).ngIf;d.Q6J("href",A.diseaseUrl),d.xp6(1),d.hij(" DOID: ",A.doid," ")}}function F(V,O){if(1&V&&d.YNc(0,e,2,2,"cvc-link-tag",13),2&V){const A=d.oxw().ngIf,x=d.MAs(7);d.Q6J("ngIf",A.doid)("ngIfElse",x)}}function R(V,O){1&V&&(d.TgZ(0,"span",15),d._uU(1,"No DOID"),d.qZA())}function ge(V,O){if(1&V&&(d.TgZ(0,"nz-descriptions-item",16),d._uU(1),d.qZA()),2&V){const A=d.oxw().ngIf;d.xp6(1),d.hij(" ",A.name," ")}}function ze(V,O){if(1&V&&(d.TgZ(0,"nz-descriptions-item",17),d._uU(1),d.qZA()),2&V){const A=d.oxw().ngIf;d.xp6(1),d.hij(" ",A.diseaseAliases.join(", ")," ")}}function K(V,O){if(1&V&&(d.ynx(0),d.TgZ(1,"nz-card",2),d.YNc(2,M,3,4,"ng-template",null,3,d.W1O),d.YNc(4,F,1,2,"ng-template",null,4,d.W1O),d.YNc(6,R,2,0,"ng-template",null,5,d.W1O),d.TgZ(8,"nz-descriptions",6),d.YNc(9,ge,2,1,"nz-descriptions-item",7),d.YNc(10,ze,2,1,"nz-descriptions-item",8),d.TgZ(11,"nz-descriptions-item",9),d._uU(12),d.qZA(),d.TgZ(13,"nz-descriptions-item",10),d._uU(14),d.qZA(),d.TgZ(15,"nz-descriptions-item",11),d._uU(16),d.qZA()()(),d.BQk()),2&V){const A=O.ngIf,x=d.MAs(3),pe=d.MAs(5);d.xp6(1),d.Q6J("nzTitle",x)("nzExtra",pe),d.xp6(7),d.Q6J("nzColumn",1),d.xp6(1),d.Q6J("ngIf",A.name.length>50),d.xp6(1),d.Q6J("ngIf",A.diseaseAliases.length>0),d.xp6(2),d.hij(" ",A.assertionCount," "),d.xp6(2),d.hij(" ",A.evidenceItemCount," "),d.xp6(2),d.hij(" ",A.molecularProfileCount," ")}}let N=(()=>{class V{constructor(A){this.gql=A}ngOnInit(){if(null==this.diseaseId)throw new Error("cvc-disease-popover requires valid diseaseId input.");this.disease$=this.gql.watch({diseaseId:this.diseaseId}).valueChanges.pipe((0,i.U)(({data:A})=>A?.diseasePopover),(0,v.h)(t.ep))}}return V.\u0275fac=function(A){return new(A||V)(d.Y36(s.k7O))},V.\u0275cmp=d.Xpm({type:V,selectors:[["cvc-disease-popover"]],inputs:{diseaseId:"diseaseId"},decls:3,vars:3,consts:[["id","popover-content"],[4,"ngIf"],["nzBordered","false","id","card-content",3,"nzTitle","nzExtra"],["cardTitle",""],["linkout",""],["noDoid",""],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","Name","nzSpan","2",4,"ngIf"],["nzTitle","Aliases","nzSpan","2",4,"ngIf"],["nzTitle","Assertions","nzSpan","1"],["nzTitle","Evidence","nzSpan","1"],["nzTitle","Molecular Profiles","nzSpan","1"],["nz-icon","","nzType","civic-disease","nzTheme","twotone","nzTwotoneColor","#E62F76"],["tooltip","View on disease-ontology.org",3,"href",4,"ngIf","ngIfElse"],["tooltip","View on disease-ontology.org",3,"href"],["nz-typography","","nzType","secondary"],["nzTitle","Name","nzSpan","2"],["nzTitle","Aliases","nzSpan","2"]],template:function(A,x){1&A&&(d.TgZ(0,"div",0),d.YNc(1,K,17,8,"ng-container",1),d.ALo(2,"ngrxPush"),d.qZA()),2&A&&(d.xp6(1),d.Q6J("ngIf",d.lcZ(2,1,x.disease$)))},dependencies:[k.O5,Q.bd,U.R7,U.uj,P.Ls,S.ZU,w.l,L.fM,Y.W],styles:["[_nghost-%COMP%]{display:block;margin:-8px -12px}[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}[_nghost-%COMP%]     .ant-descriptions-view{border:none}[_nghost-%COMP%]     #entity-child-counts{border-top:1px solid #f0f0f0;padding:8px}[_nghost-%COMP%]     #entity-child-counts nz-space{width:100%}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child nz-tag{margin-right:0}.popover-text[_ngcontent-%COMP%]{width:100%;padding:8px;border-bottom:1px solid #f0f0f0}#popover-content[_ngcontent-%COMP%]{min-width:350px;max-width:500px;min-height:125px}"]}),V})()},5687:(xt,Se,a)=>{a.d(Se,{t:()=>P});var t=a(6814),i=a(2962),v=a(8125),d=a(551),s=a(6067),k=a(2392),Q=a(2524),U=a(5879);let P=(()=>{class S{}return S.\u0275fac=function(L){return new(L||S)},S.\u0275mod=U.oAB({type:S}),S.\u0275inj=U.cJS({imports:[t.ez,i.vh,v.q6,d.PV,k.ZJ,Q.s,s.X]}),S})()},9775:(xt,Se,a)=>{a.d(Se,{n:()=>K});var t=a(8130),i=a(5879),v=a(6814),d=a(4190),s=a(5695),k=a(7417),Q=a(551),U=a(2851),P=a(5869);function S(N,V){}function w(N,V){if(1&N&&(i.ynx(0),i.TgZ(1,"a",4),i.YNc(2,S,0,0,"ng-template",5),i.qZA(),i.BQk()),2&N){const O=i.oxw(),A=i.MAs(2);i.xp6(1),i.Q6J("routerLink",O.disease.link),i.xp6(1),i.Q6J("ngTemplateOutlet",A)}}function L(N,V){}function Y(N,V){if(1&N&&i._UZ(0,"cvc-disease-popover",8),2&N){const O=i.oxw(2);i.Q6J("diseaseId",O.disease.id)}}function M(N,V){if(1&N){const O=i.EpF();i.TgZ(0,"nz-tag",6),i.NdJ("nzOnClose",function(x){i.CHM(O);const pe=i.oxw();return i.KtG(pe.itemClosed(x))}),i.YNc(1,L,0,0,"ng-template",5),i.qZA(),i.YNc(2,Y,1,1,"ng-template",null,7,i.W1O)}if(2&N){const O=i.MAs(3),A=i.oxw(),x=i.MAs(6);i.Q6J("nzPopoverMouseEnterDelay",A.onCloseClicked?0:.5)("nzPopoverContent",O)("nzPopoverTrigger",A.enablePopover?"hover":null)("nzMode",A.onCloseClicked?"closeable":"default"),i.xp6(1),i.Q6J("ngTemplateOutlet",x)}}function e(N,V){}function F(N,V){if(1&N&&i.YNc(0,e,0,0,"ng-template",5),2&N){i.oxw();const O=i.MAs(2);i.Q6J("ngTemplateOutlet",O)}}function R(N,V){if(1&N&&(i.ynx(0),i._uU(1),i.ALo(2,"truncate"),i.BQk()),2&N){const O=i.oxw(2);i.xp6(1),i.hij(" ",i.xi3(2,1,O.disease.name,27)," ")}}function ge(N,V){if(1&N&&i._uU(0),2&N){const O=i.oxw(2);i.hij(" ",O.disease.name," ")}}function ze(N,V){if(1&N&&(i._UZ(0,"i",9),i.YNc(1,R,3,4,"ng-container",0),i.YNc(2,ge,1,1,"ng-template",null,10,i.W1O)),2&N){const O=i.MAs(3),A=i.oxw();i.xp6(1),i.Q6J("ngIf",A.truncateLongName)("ngIfElse",O)}}let K=(()=>{class N extends t.a{constructor(){super(...arguments),this.enablePopover=!0,this.truncateLongName=!1}set disease(O){if(!O)throw new Error("disease-tag disease Input requires LinkableDisease.");this._disease=O}get disease(){return this._disease}idFunction(){return this.disease.id}}return N.\u0275fac=function(){let V;return function(A){return(V||(V=i.n5z(N)))(A||N)}}(),N.\u0275cmp=i.Xpm({type:N,selectors:[["cvc-disease-tag"]],inputs:{disease:"disease",enablePopover:"enablePopover",truncateLongName:"truncateLongName"},features:[i.qOj],decls:7,vars:2,consts:[[4,"ngIf","ngIfElse"],["tag",""],["unlinked",""],["tagContent",""],[3,"routerLink"],[3,"ngTemplateOutlet"],["nz-popover","","nzPopoverPlacement","right",3,"nzPopoverMouseEnterDelay","nzPopoverContent","nzPopoverTrigger","nzMode","nzOnClose"],["diseasePopover",""],[3,"diseaseId"],["nz-icon","","nzType","civic-disease","nzTheme","twotone","nzTwotoneColor","#E62F76"],["fullName",""]],template:function(O,A){if(1&O&&(i.YNc(0,w,3,2,"ng-container",0),i.YNc(1,M,4,5,"ng-template",null,1,i.W1O),i.YNc(3,F,1,1,"ng-template",null,2,i.W1O),i.YNc(5,ze,4,2,"ng-template",null,3,i.W1O)),2&O){const x=i.MAs(4);i.Q6J("ngIf",A.linked)("ngIfElse",x)}},dependencies:[v.O5,v.tP,d.rH,s.j,k.lU,Q.Ls,U.I,P.W],encapsulation:2,changeDetection:0}),N})()},3396:(xt,Se,a)=>{a.d(Se,{Q:()=>P});var t=a(6814),i=a(4190),v=a(5695),d=a(7417),s=a(551),k=a(5687),Q=a(2524),U=a(5879);let P=(()=>{class S{}return S.\u0275fac=function(L){return new(L||S)},S.\u0275mod=U.oAB({type:S}),S.\u0275inj=U.cJS({imports:[t.ez,i.Bz,v.X,d.$6,s.PV,Q.s,k.t]}),S})()},8213:(xt,Se,a)=>{a.d(Se,{_:()=>Ct});var t=a(7398),i=a(2181),v=a(5676),d=a(5879),s=a(313),k=a(6814),Q=a(4190),U=a(551),P=a(2962),S=a(95),w=a(8125),L=a(5695),Y=a(2574),M=a(2392),e=a(4770),F=a(9775),R=a(3897),ge=a(4138),ze=a(2384),K=a(2606),N=a(5095),V=a(8091),O=a(6967),A=a(2616);function x(je,Yt){if(1&je&&(d.ynx(0),d._UZ(1,"i",17),d.ALo(2,"entityColor"),d._uU(3),d.BQk()),2&je){const qt=d.oxw(2).ngIf;d.xp6(1),d.Q6J("nzTwotoneColor",d.lcZ(2,2,"EvidenceItem")),d.xp6(2),d.hij(" ",qt.name," ")}}function pe(je,Yt){if(1&je&&d._UZ(0,"cvc-status-tag",18),2&je){const qt=d.oxw(2).ngIf;d.Q6J("status",qt.status)}}function de(je,Yt){1&je&&(d.TgZ(0,"nz-space"),d.YNc(1,x,4,4,"ng-container",15),d.YNc(2,pe,1,1,"cvc-status-tag",16),d.qZA())}function W(je,Yt){if(1&je&&d._UZ(0,"cvc-molecular-profile-tag",19),2&je){const qt=d.oxw().ngIf;d.Q6J("molecularProfile",qt.molecularProfile)("enablePopover",!1)("truncateLongName",!0)}}function ve(je,Yt){if(1&je&&(d.ynx(0),d._uU(1),d.BQk()),2&je){const qt=Yt.ngIf;d.xp6(1),d.hij(" ",qt," ")}}function G(je,Yt){if(1&je&&(d.TgZ(0,"nz-descriptions",20)(1,"nz-descriptions-item",21),d._UZ(2,"cvc-mp-tag-name",22),d.qZA(),d.TgZ(3,"nz-descriptions-item",23),d._UZ(4,"cvc-source-tag",24),d.qZA()()),2&je){const qt=d.oxw().ngIf;d.Q6J("nzColumn",1),d.xp6(2),d.Q6J("nameSegments",qt.molecularProfile.parsedName)("enablePopover",!1),d.xp6(2),d.Q6J("source",qt.source)("enablePopover",!1)}}function se(je,Yt){if(1&je&&(d.ynx(0),d._UZ(1,"cvc-disease-tag",35),d.BQk()),2&je){const qt=d.oxw(2).ngIf;d.xp6(1),d.Q6J("enablePopover",!1)("disease",qt.disease)("truncateLongName",!0)}}function fe(je,Yt){1&je&&d._uU(0," N/A ")}function be(je,Yt){if(1&je&&(d.TgZ(0,"span"),d._UZ(1,"cvc-therapy-tag",38),d.qZA()),2&je){const qt=Yt.$implicit;d.xp6(1),d.Q6J("enablePopover",!1)("therapy",qt)("truncateLongName",!0)}}function Ft(je,Yt){if(1&je&&(d.ynx(0),d._uU(1),d.ALo(2,"titlecase"),d.BQk()),2&je){const qt=d.oxw(3).ngIf;d.xp6(1),d.hij(" ",d.lcZ(2,1,qt.therapyInteractionType)," ")}}function Dt(je,Yt){if(1&je&&(d.TgZ(0,"nz-descriptions-item",36),d.YNc(1,be,2,3,"span",37),d.YNc(2,Ft,3,3,"ng-container",1),d.qZA()),2&je){const qt=d.oxw(2).ngIf;d.xp6(1),d.Q6J("ngForOf",qt.therapies),d.xp6(1),d.Q6J("ngIf",qt.therapies.length>1)}}function nn(je,Yt){if(1&je&&(d.TgZ(0,"span"),d._UZ(1,"cvc-phenotype-tag",40),d.qZA()),2&je){const qt=Yt.$implicit;d.xp6(1),d.Q6J("enablePopover",!1)("phenotype",qt)}}function Et(je,Yt){if(1&je&&(d.TgZ(0,"nz-descriptions-item",39),d.YNc(1,nn,2,2,"span",37),d.qZA()),2&je){const qt=d.oxw(2).ngIf;d.xp6(1),d.Q6J("ngForOf",qt.phenotypes)}}function Ht(je,Yt){if(1&je&&(d.TgZ(0,"nz-descriptions",20)(1,"nz-descriptions-item",25),d._uU(2),d.qZA(),d.TgZ(3,"nz-descriptions-item",26),d._uU(4),d.ALo(5,"evidenceEnumDisplay"),d.qZA(),d.TgZ(6,"nz-descriptions-item",27),d._uU(7),d.ALo(8,"evidenceEnumDisplay"),d.qZA(),d.TgZ(9,"nz-descriptions-item",28),d._uU(10),d.ALo(11,"evidenceEnumDisplay"),d.qZA(),d.TgZ(12,"nz-descriptions-item",29),d._uU(13),d._UZ(14,"i",30),d.qZA(),d.TgZ(15,"nz-descriptions-item",31),d.YNc(16,se,2,3,"ng-container",9),d.YNc(17,fe,1,0,"ng-template",null,32,d.W1O),d.qZA(),d.YNc(19,Dt,3,2,"nz-descriptions-item",33),d.YNc(20,Et,2,1,"nz-descriptions-item",34),d.qZA()),2&je){const qt=d.MAs(18),vn=d.oxw().ngIf;d.Q6J("nzColumn",2),d.xp6(2),d.hij(" ",vn.evidenceLevel," "),d.xp6(2),d.hij(" ",d.lcZ(5,10,vn.evidenceType)," "),d.xp6(3),d.hij(" ",d.lcZ(8,12,vn.evidenceDirection)," "),d.xp6(3),d.hij(" ",d.lcZ(11,14,vn.significance)," "),d.xp6(3),d.hij(" ",vn.evidenceRating,""),d.xp6(3),d.Q6J("ngIf",vn.disease)("ngIfElse",qt),d.xp6(3),d.Q6J("ngIf",vn.therapies.length>0),d.xp6(1),d.Q6J("ngIf",vn.phenotypes.length>0)}}function tn(je,Yt){if(1&je&&(d.TgZ(0,"a",41)(1,"nz-tag",42),d._UZ(2,"i",43),d._uU(3),d.qZA()()),2&je){const qt=d.oxw().ngIf;d.MGl("routerLink","/evidence/",qt.id,"/flags"),d.xp6(3),d.hij(" Flags (",qt.flags.totalCount,") ")}}function un(je,Yt){if(1&je&&(d.TgZ(0,"a",41)(1,"nz-tag",44),d._UZ(2,"i",45),d._uU(3),d.qZA()()),2&je){const qt=d.oxw().ngIf;d.MGl("routerLink","/evidence/",qt.id,"/revisions"),d.xp6(3),d.hij(" Revisions (",qt.revisions.totalCount,") ")}}function In(je,Yt){if(1&je&&(d.TgZ(0,"a",41)(1,"nz-tag",46),d._UZ(2,"i",47),d._uU(3),d.qZA()()),2&je){const qt=d.oxw().ngIf;d.MGl("routerLink","/evidence/",qt.id,"/comments"),d.xp6(3),d.hij(" Comments (",qt.comments.totalCount,") ")}}function Xe(je,Yt){if(1&je&&(d.ynx(0),d.TgZ(1,"nz-card",3),d.YNc(2,de,3,0,"ng-template",null,4,d.W1O),d.YNc(4,W,1,3,"ng-template",null,5,d.W1O),d.TgZ(6,"nz-row")(7,"nz-col",6)(8,"div",7)(9,"p",8),d.YNc(10,ve,2,1,"ng-container",9),d.qZA()()()(),d.TgZ(11,"nz-space",10),d.YNc(12,G,5,5,"nz-descriptions",11),d.YNc(13,Ht,21,16,"nz-descriptions",11),d.qZA(),d.TgZ(14,"nz-row",12)(15,"nz-col",6)(16,"nz-space",13),d.YNc(17,tn,4,2,"a",14),d.YNc(18,un,4,2,"a",14),d.YNc(19,In,4,2,"a",14),d.qZA()()()(),d.BQk()),2&je){const qt=Yt.ngIf,vn=d.MAs(3),Dn=d.MAs(5);d.oxw();const Wt=d.MAs(4);d.xp6(1),d.Q6J("nzTitle",vn)("nzExtra",Dn),d.xp6(8),d.Q6J("nzEllipsisRows",4),d.xp6(1),d.Q6J("ngIf",qt.description)("ngIfElse",Wt)}}function Re(je,Yt){1&je&&d._uU(0," Evidence item has not been provided a description.\n")}let Ct=(()=>{class je{constructor(qt){this.gql=qt}ngOnInit(){if(null==this.evidenceId)throw new Error("cvc-evidence-popover requires valid evidenceId input.");this.evidence$=this.gql.watch({evidenceId:this.evidenceId}).valueChanges.pipe((0,t.U)(({data:qt})=>qt?.evidenceItem),(0,i.h)(v.ep))}}return je.\u0275fac=function(qt){return new(qt||je)(d.Y36(s.Ybm))},je.\u0275cmp=d.Xpm({type:je,selectors:[["cvc-evidence-popover"]],inputs:{evidenceId:"evidenceId"},decls:5,vars:3,consts:[["id","popover-content"],[4,"ngIf"],["noDescription",""],["nzBordered","false","id","card-content",3,"nzTitle","nzExtra"],["cardTitle",""],["molecularProfile",""],["nzSpan","24"],[1,"popover-text"],["nz-typography","","nzEllipsis","","nzExpandable","",3,"nzEllipsisRows"],[4,"ngIf","ngIfElse"],["nzDirection","vertical","nzSize","small"],["nzSize","small","nzBordered","true",3,"nzColumn",4,"nzSpaceItem"],["id","entity-child-counts"],["nzSize","small"],[3,"routerLink",4,"nzSpaceItem"],[4,"nzSpaceItem"],["style","font-weight: normal",3,"status",4,"nzSpaceItem"],["nz-icon","","nzTheme","twotone","nzType","civic-evidence",3,"nzTwotoneColor"],[2,"font-weight","normal",3,"status"],[3,"molecularProfile","enablePopover","truncateLongName"],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","MP Expression"],[3,"nameSegments","enablePopover"],["nzTitle","Source","nzSpan","2"],[3,"source","enablePopover"],["nzTitle","Level"],["nzTitle","Type"],["nzTitle","Direction"],["nzTitle","Clinical Significance","nzSpan","2"],["nzTitle","Rating"],["nz-icon","","nzType","star","nzTheme","fill"],["nzTitle","Disease"],["noDisease",""],["nzTitle","Therapies","nzSpan","2",4,"ngIf"],["nzTitle","Phenotypes","nzSpan","2",4,"ngIf"],[3,"enablePopover","disease","truncateLongName"],["nzTitle","Therapies","nzSpan","2"],[4,"ngFor","ngForOf"],[3,"enablePopover","therapy","truncateLongName"],["nzTitle","Phenotypes","nzSpan","2"],[3,"enablePopover","phenotype"],[3,"routerLink"],["nzColor","red"],["nz-icon","","nzType","civic-flag"],["nzColor","orange"],["nz-icon","","nzType","civic-revision"],["nzColor","blue"],["nz-icon","","nzType","civic-comment"]],template:function(qt,vn){1&qt&&(d.TgZ(0,"div",0),d.YNc(1,Xe,20,5,"ng-container",1),d.ALo(2,"ngrxPush"),d.qZA(),d.YNc(3,Re,1,0,"ng-template",null,2,d.W1O)),2&qt&&(d.xp6(1),d.Q6J("ngIf",d.lcZ(2,1,vn.evidence$)))},dependencies:[k.sg,k.O5,Q.rH,U.Ls,P.bd,S.t3,S.SK,w.R7,w.uj,L.j,Y.NU,Y.$1,M.ZU,e.T,F.n,R.i,ge.T,ze.h,K.p,N.C,k.rS,V.fM,O.Do,A.a],styles:["[_nghost-%COMP%]{display:block;margin:-8px -12px}[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}[_nghost-%COMP%]     .ant-descriptions-view{border:none}[_nghost-%COMP%]     #entity-child-counts{border-top:1px solid #f0f0f0;padding:8px}[_nghost-%COMP%]     #entity-child-counts nz-space{width:100%}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child nz-tag{margin-right:0}.popover-text[_ngcontent-%COMP%]{width:100%;padding:8px;border-bottom:1px solid #f0f0f0}#popover-content[_ngcontent-%COMP%]{min-width:350px;max-width:500px;min-height:125px}"]}),je})()},1855:(xt,Se,a)=>{a.d(Se,{f:()=>ze});var t=a(6814),i=a(2962),v=a(95),d=a(8125),s=a(4190),k=a(5695),Q=a(3396),U=a(3043),P=a(2574),S=a(551),w=a(2524),L=a(8641),Y=a(2655),M=a(2392),e=a(9858),F=a(8527),R=a(6061),ge=a(5879);let ze=(()=>{class K{}return K.\u0275fac=function(V){return new(V||K)},K.\u0275mod=ge.oAB({type:K}),K.\u0275inj=ge.cJS({imports:[t.ez,s.Bz,S.PV,i.vh,v.Jb,d.q6,k.X,P.zf,M.ZJ,w.s,R.N,Q.Q,U.y,L.s,Y.x,F.u,e.r]}),K})()},1598:(xt,Se,a)=>{a.d(Se,{Q:()=>O});var t=a(5676),i=a(7398),v=a(2181),d=a(5879),s=a(313),k=a(6814),Q=a(4190),U=a(2962),P=a(95),S=a(8125),w=a(5695),L=a(551),Y=a(2574),M=a(8091),e=a(2616);function F(A,x){if(1&A&&(d._UZ(0,"i",11),d.ALo(1,"entityColor"),d._uU(2)),2&A){const pe=d.oxw().ngIf;d.Q6J("nzTwotoneColor",d.lcZ(1,2,"Gene")),d.xp6(2),d.hij(" ",pe.officialName," ")}}function R(A,x){if(1&A&&(d.TgZ(0,"nz-tag"),d._uU(1),d.qZA()),2&A){const pe=x.$implicit;d.xp6(1),d.Oqu(pe)}}function ge(A,x){if(1&A&&(d.TgZ(0,"nz-descriptions-item",12),d.YNc(1,R,2,1,"nz-tag",13),d.qZA()),2&A){const pe=d.oxw().ngIf;d.xp6(1),d.Q6J("ngForOf",pe.geneAliases)}}function ze(A,x){if(1&A&&(d.TgZ(0,"a",14)(1,"nz-tag",15),d._UZ(2,"i",16),d._uU(3),d.qZA()()),2&A){const pe=d.oxw().ngIf;d.MGl("routerLink","/genes/",pe.id,"/flags"),d.xp6(3),d.hij(" Flags (",pe.flags.totalCount,") ")}}function K(A,x){if(1&A&&(d.TgZ(0,"a",14)(1,"nz-tag",17),d._UZ(2,"i",18),d._uU(3),d.qZA()()),2&A){const pe=d.oxw().ngIf;d.MGl("routerLink","/genes/",pe.id,"/revisions"),d.xp6(3),d.hij(" Revisions (",pe.revisions.totalCount,") ")}}function N(A,x){if(1&A&&(d.TgZ(0,"a",14)(1,"nz-tag",19),d._UZ(2,"i",20),d._uU(3),d.qZA()()),2&A){const pe=d.oxw().ngIf;d.MGl("routerLink","/genes/",pe.id,"/comments"),d.xp6(3),d.hij(" Comments (",pe.comments.totalCount,") ")}}function V(A,x){if(1&A&&(d.ynx(0),d.TgZ(1,"nz-card",2),d.YNc(2,F,3,4,"ng-template",null,3,d.W1O),d.TgZ(4,"nz-descriptions",4),d.YNc(5,ge,2,1,"nz-descriptions-item",5),d.TgZ(6,"nz-descriptions-item",6),d._uU(7),d.qZA()(),d.TgZ(8,"nz-row",7)(9,"nz-col",8)(10,"nz-space",9),d.YNc(11,ze,4,2,"a",10),d.YNc(12,K,4,2,"a",10),d.YNc(13,N,4,2,"a",10),d.qZA()()()(),d.BQk()),2&A){const pe=x.ngIf,de=d.MAs(3);d.xp6(1),d.Q6J("nzTitle",de),d.xp6(3),d.Q6J("nzColumn",2),d.xp6(1),d.Q6J("ngIf",pe.geneAliases.length>0),d.xp6(2),d.hij(" ",pe.variants.totalCount," ")}}let O=(()=>{class A{constructor(pe){this.gql=pe}ngOnInit(){if(null==this.geneId)throw new Error("cvc-gene-popover requires valid geneId input.");this.gene$=this.gql.watch({geneId:this.geneId}).valueChanges.pipe((0,i.U)(({data:pe})=>pe?.gene),(0,v.h)(t.ep))}}return A.\u0275fac=function(pe){return new(pe||A)(d.Y36(s.rJ8))},A.\u0275cmp=d.Xpm({type:A,selectors:[["cvc-gene-popover"]],inputs:{geneId:"geneId"},decls:3,vars:3,consts:[["id","popover-content"],[4,"ngIf"],["nzBordered","false","id","card-content",3,"nzTitle"],["cardTitle",""],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","Aliases","nzSpan","2",4,"ngIf"],["nzTitle","Variants"],["id","entity-child-counts"],["nzSpan","24"],["nzSize","small"],[3,"routerLink",4,"nzSpaceItem"],["nz-icon","","nzTheme","twotone","nzType","civic-gene",3,"nzTwotoneColor"],["nzTitle","Aliases","nzSpan","2"],[4,"ngFor","ngForOf"],[3,"routerLink"],["nzColor","red"],["nz-icon","","nzType","civic-flag"],["nzColor","orange"],["nz-icon","","nzType","civic-revision"],["nzColor","blue"],["nz-icon","","nzType","civic-comment"]],template:function(pe,de){1&pe&&(d.TgZ(0,"div",0),d.YNc(1,V,14,4,"ng-container",1),d.ALo(2,"ngrxPush"),d.qZA()),2&pe&&(d.xp6(1),d.Q6J("ngIf",d.lcZ(2,1,de.gene$)))},dependencies:[k.sg,k.O5,Q.rH,U.bd,P.t3,P.SK,S.R7,S.uj,w.j,L.Ls,Y.NU,Y.$1,M.fM,e.a],styles:["[_nghost-%COMP%]{display:block;margin:-8px -12px}[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}[_nghost-%COMP%]     .ant-descriptions-view{border:none}[_nghost-%COMP%]     #entity-child-counts{border-top:1px solid #f0f0f0;padding:8px}[_nghost-%COMP%]     #entity-child-counts nz-space{width:100%}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child nz-tag{margin-right:0}.popover-text[_ngcontent-%COMP%]{width:100%;padding:8px;border-bottom:1px solid #f0f0f0}#popover-content[_ngcontent-%COMP%]{min-width:350px;max-width:500px;min-height:125px}"]}),A})()},9021:(xt,Se,a)=>{a.d(Se,{w:()=>w});var t=a(6814),i=a(4190),v=a(2524),d=a(2962),s=a(8125),k=a(95),Q=a(551),U=a(2574),P=a(5695),S=a(5879);let w=(()=>{class L{}return L.\u0275fac=function(M){return new(M||L)},L.\u0275mod=S.oAB({type:L}),L.\u0275inj=S.cJS({imports:[t.ez,i.Bz,d.vh,k.Jb,s.q6,P.X,Q.PV,U.zf,v.s]}),L})()},4121:(xt,Se,a)=>{a.d(Se,{H:()=>O});var t=a(8130),i=a(2023),v=a(5879),d=a(6814),s=a(4190),k=a(5695),Q=a(7417),U=a(551),P=a(1598),S=a(3103),w=a(5869),L=a(2616);function Y(A,x){}function M(A,x){if(1&A&&(v.ynx(0),v.TgZ(1,"a",4),v.YNc(2,Y,0,0,"ng-template",5),v.qZA(),v.BQk()),2&A){const pe=v.oxw(),de=v.MAs(2);v.xp6(1),v.Q6J("routerLink",pe.gene.link),v.xp6(1),v.Q6J("ngTemplateOutlet",de)}}function e(A,x){}function F(A,x){if(1&A&&v._UZ(0,"cvc-gene-popover",8),2&A){const pe=v.oxw(2);v.Q6J("geneId",pe.gene.id)}}function R(A,x){if(1&A){const pe=v.EpF();v.TgZ(0,"nz-tag",6),v.NdJ("nzOnClose",function(W){v.CHM(pe);const ve=v.oxw();return v.KtG(ve.itemClosed(W))}),v.YNc(1,e,0,0,"ng-template",5),v.qZA(),v.YNc(2,F,1,1,"ng-template",null,7,v.W1O)}if(2&A){const pe=v.MAs(3),de=v.oxw(),W=v.MAs(6);v.Q6J("nzPopoverMouseEnterDelay",de.onCloseClicked?0:.5)("nzPopoverContent",pe)("nzPopoverTrigger",de.enablePopover?"hover":null)("nzMode",de.onCloseClicked?"closeable":"default"),v.xp6(1),v.Q6J("ngTemplateOutlet",W)}}function ge(A,x){}function ze(A,x){if(1&A&&v.YNc(0,ge,0,0,"ng-template",5),2&A){v.oxw();const pe=v.MAs(2);v.Q6J("ngTemplateOutlet",pe)}}function K(A,x){if(1&A&&(v.ynx(0),v._uU(1),v.ALo(2,"truncate"),v.BQk()),2&A){const pe=v.oxw(2);v.xp6(1),v.hij(" ",v.xi3(2,1,pe.gene.name,12)," ")}}function N(A,x){if(1&A&&v._uU(0),2&A){const pe=v.oxw(2);v.hij(" ",pe.gene.name," ")}}function V(A,x){if(1&A&&(v.TgZ(0,"cvc-icon-badges",9),v._UZ(1,"i",10),v.ALo(2,"entityColor"),v.qZA(),v.YNc(3,K,3,4,"ng-container",0),v.YNc(4,N,1,1,"ng-template",null,11,v.W1O)),2&A){const pe=v.MAs(5),de=v.oxw();v.Q6J("flagged",de.gene.flagged)("entityColor",de.iconColor),v.xp6(1),v.Q6J("nzTwotoneColor",v.lcZ(2,5,"Gene")),v.xp6(2),v.Q6J("ngIf",de.truncateLongName)("ngIfElse",pe)}}let O=(()=>{class A extends t.a{constructor(){super(),this.enablePopover=!0,this.truncateLongName=!1,this.iconColor=(0,i.f)("Gene")}idFunction(){return this.gene.id}ngOnInit(){if(super.ngOnInit(),void 0===this.gene)throw new Error("cvc-gene-tag requires LinkableGene input, none supplied.")}}return A.\u0275fac=function(pe){return new(pe||A)},A.\u0275cmp=v.Xpm({type:A,selectors:[["cvc-gene-tag"]],inputs:{gene:"gene",enablePopover:"enablePopover",truncateLongName:"truncateLongName"},features:[v.qOj],decls:7,vars:2,consts:[[4,"ngIf","ngIfElse"],["tag",""],["unlinked",""],["tagContent",""],[3,"routerLink"],[3,"ngTemplateOutlet"],["nz-popover","",3,"nzPopoverMouseEnterDelay","nzPopoverContent","nzPopoverTrigger","nzMode","nzOnClose"],["genePopover",""],[3,"geneId"],[3,"flagged","entityColor"],["nz-icon","","nzType","civic-gene","nzTheme","twotone",3,"nzTwotoneColor"],["fullName",""]],template:function(pe,de){if(1&pe&&(v.YNc(0,M,3,2,"ng-container",0),v.YNc(1,R,4,5,"ng-template",null,1,v.W1O),v.YNc(3,ze,1,1,"ng-template",null,2,v.W1O),v.YNc(5,V,6,7,"ng-template",null,3,v.W1O)),2&pe){const W=v.MAs(4);v.Q6J("ngIf",de.linked)("ngIfElse",W)}},dependencies:[d.O5,d.tP,s.rH,k.j,Q.lU,U.Ls,P.Q,S.b,w.W,L.a],encapsulation:2,changeDetection:0}),A})()},5956:(xt,Se,a)=>{a.d(Se,{U:()=>w});var t=a(6814),i=a(4190),v=a(5695),d=a(551),s=a(7417),k=a(9021),Q=a(2524),U=a(3640),P=a(3146),S=a(5879);let w=(()=>{class L{}return L.\u0275fac=function(M){return new(M||L)},L.\u0275mod=S.oAB({type:L}),L.\u0275inj=S.cJS({imports:[t.ez,i.Bz,v.X,s.$6,d.PV,U.mS,Q.s,k.w,P.C]}),L})()},156:(xt,Se,a)=>{a.d(Se,{_:()=>de});var t=a(5676),i=a(7398),v=a(2181),d=a(5879),s=a(313),k=a(6814),Q=a(4190),U=a(2962),P=a(95),S=a(8125),w=a(5695),L=a(551),Y=a(2574),M=a(1887),e=a(5095),F=a(8091);function R(W,ve){if(1&W&&(d._UZ(0,"i",16),d._uU(1)),2&W){const G=d.oxw().ngIf;d.xp6(1),d.hij(" ",G.name," ")}}function ge(W,ve){if(1&W&&(d.TgZ(0,"nz-descriptions-item",17),d._uU(1),d.qZA()),2&W){const G=d.oxw().ngIf;d.xp6(1),d.hij(" ",G.evidenceItems.totalCount," ")}}function ze(W,ve){if(1&W&&(d.TgZ(0,"nz-descriptions-item",18),d._uU(1),d.qZA()),2&W){const G=d.oxw().ngIf;d.xp6(1),d.hij(" ",G.assertions.totalCount," ")}}function K(W,ve){if(1&W&&(d.TgZ(0,"nz-tag"),d._uU(1),d.qZA()),2&W){const G=ve.$implicit;d.xp6(1),d.Oqu(G)}}function N(W,ve){if(1&W&&(d.ynx(0),d.TgZ(1,"cvc-tag-list"),d.YNc(2,K,2,1,"nz-tag",19),d.qZA(),d.BQk()),2&W){const G=d.oxw().ngIf;d.xp6(2),d.Q6J("ngForOf",G.molecularProfileAliases)}}function V(W,ve){1&W&&(d.TgZ(0,"span",20),d._uU(1,"None specified"),d.qZA())}function O(W,ve){if(1&W&&(d.TgZ(0,"a",21)(1,"nz-tag",22),d._UZ(2,"i",23),d._uU(3),d.qZA()()),2&W){const G=d.oxw().ngIf;d.MGl("routerLink","/molecular-profiles/",G.id,"/flags"),d.xp6(3),d.hij(" Flags (",G.flags.totalCount,") ")}}function A(W,ve){if(1&W&&(d.TgZ(0,"a",21)(1,"nz-tag",24),d._UZ(2,"i",25),d._uU(3),d.qZA()()),2&W){const G=d.oxw().ngIf;d.MGl("routerLink","/molecular-profiles/",G.id,"/revisions"),d.xp6(3),d.hij(" Revisions (",G.revisions.totalCount,") ")}}function x(W,ve){if(1&W&&(d.TgZ(0,"a",21)(1,"nz-tag",26),d._UZ(2,"i",27),d._uU(3),d.qZA()()),2&W){const G=d.oxw().ngIf;d.MGl("routerLink","/molecular-profiles/",G.id,"/comments"),d.xp6(3),d.hij(" Comments (",G.comments.totalCount,") ")}}function pe(W,ve){if(1&W&&(d.ynx(0),d.TgZ(1,"nz-card",2),d.YNc(2,R,2,1,"ng-template",null,3,d.W1O),d.TgZ(4,"nz-descriptions",4)(5,"nz-descriptions-item",5),d._UZ(6,"cvc-mp-tag-name",6),d.qZA(),d.YNc(7,ge,2,1,"nz-descriptions-item",7),d.YNc(8,ze,2,1,"nz-descriptions-item",8),d.TgZ(9,"nz-descriptions-item",9),d.YNc(10,N,3,1,"ng-container",10),d.YNc(11,V,2,0,"ng-template",null,11,d.W1O),d.qZA()(),d.TgZ(13,"nz-row",12)(14,"nz-col",13)(15,"nz-space",14),d.YNc(16,O,4,2,"a",15),d.YNc(17,A,4,2,"a",15),d.YNc(18,x,4,2,"a",15),d.qZA()()()(),d.BQk()),2&W){const G=ve.ngIf,se=d.MAs(3),fe=d.MAs(12);d.xp6(1),d.Q6J("nzTitle",se),d.xp6(3),d.Q6J("nzColumn",2),d.xp6(2),d.Q6J("nameSegments",G.parsedName)("enablePopover",!1),d.xp6(1),d.Q6J("ngIf",G.evidenceItems.totalCount>0),d.xp6(1),d.Q6J("ngIf",G.assertions.totalCount>0),d.xp6(2),d.Q6J("ngIf",G.molecularProfileAliases.length>0)("ngIfElse",fe)}}let de=(()=>{class W{constructor(G){this.gql=G}ngOnInit(){if(void 0===this.molecularProfileId)throw new Error("Must pass a molecular profile ID into the molecular profile popover component.");this.molecularProfile$=this.gql.watch({molecularProfileId:this.molecularProfileId}).valueChanges.pipe((0,i.U)(({data:G})=>G?.molecularProfile),(0,v.h)(t.ep))}}return W.\u0275fac=function(G){return new(G||W)(d.Y36(s.DkJ))},W.\u0275cmp=d.Xpm({type:W,selectors:[["cvc-molecular-profile-popover"]],inputs:{molecularProfileId:"molecularProfileId"},decls:3,vars:3,consts:[["id","popover-content"],[4,"ngIf"],["nzBordered","false","id","card-content",3,"nzTitle"],["cardTitle",""],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","MP Expression","nzSpan","2"],[3,"nameSegments","enablePopover"],["nzTitle","Evidence Items","nzSpan","2",4,"ngIf"],["nzTitle","Assertions","nzSpan","2",4,"ngIf"],["nzTitle","Aliases"],[4,"ngIf","ngIfElse"],["noAliases",""],["id","entity-child-counts"],["nzSpan","24"],["nzSize","small"],[3,"routerLink",4,"nzSpaceItem"],["nz-icon","","nzType","civic:molecularprofile"],["nzTitle","Evidence Items","nzSpan","2"],["nzTitle","Assertions","nzSpan","2"],[4,"ngFor","ngForOf"],["nz-typography","","nzType","secondary"],[3,"routerLink"],["nzColor","red"],["nz-icon","","nzType","civic-flag"],["nzColor","orange"],["nz-icon","","nzType","civic-revision"],["nzColor","blue"],["nz-icon","","nzType","civic-comment"]],template:function(G,se){1&G&&(d.TgZ(0,"div",0),d.YNc(1,pe,19,8,"ng-container",1),d.ALo(2,"ngrxPush"),d.qZA()),2&G&&(d.xp6(1),d.Q6J("ngIf",d.lcZ(2,1,se.molecularProfile$)))},dependencies:[k.sg,k.O5,Q.rH,U.bd,P.t3,P.SK,S.R7,S.uj,w.j,L.Ls,Y.NU,Y.$1,M.$,e.C,F.fM],styles:["[_nghost-%COMP%]{display:block;margin:-8px -12px}[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}[_nghost-%COMP%]     .ant-descriptions-view{border:none}[_nghost-%COMP%]     #entity-child-counts{border-top:1px solid #f0f0f0;padding:8px}[_nghost-%COMP%]     #entity-child-counts nz-space{width:100%}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child nz-tag{margin-right:0}.popover-text[_ngcontent-%COMP%]{width:100%;padding:8px;border-bottom:1px solid #f0f0f0}#popover-content[_ngcontent-%COMP%]{min-width:350px;max-width:500px;min-height:125px}"]}),W})()},2064:(xt,Se,a)=>{a.d(Se,{_:()=>M});var t=a(6814),i=a(4190),v=a(2962),d=a(95),s=a(8125),k=a(5695),Q=a(551),U=a(2574),P=a(5956),S=a(6067),w=a(9858),L=a(366),Y=a(5879);let M=(()=>{class e{}return e.\u0275fac=function(R){return new(R||e)},e.\u0275mod=Y.oAB({type:e}),e.\u0275inj=Y.cJS({imports:[t.ez,i.Bz,v.vh,d.Jb,s.q6,k.X,Q.PV,U.zf,P.U,S.X,L.$,w.r]}),e})()},5095:(xt,Se,a)=>{a.d(Se,{C:()=>Y});var t=a(5879),i=a(6814),v=a(9408),d=a(4121);const s=["*"];let k=(()=>{class M{constructor(){}}return M.\u0275fac=function(F){return new(F||M)},M.\u0275cmp=t.Xpm({type:M,selectors:[["cvc-tag-group"]],ngContentSelectors:s,decls:1,vars:0,template:function(F,R){1&F&&(t.F$t(),t.Hsn(0))},styles:["[_nghost-%COMP%]    >*:first-child   nz-tag{border-top-right-radius:0;border-bottom-right-radius:0;margin-right:0}[_nghost-%COMP%]    >*:last-child   nz-tag{border-top-left-radius:0;border-bottom-left-radius:0;margin-left:-1px;border-left-color:#e9e9e9}"]}),M})();function Q(M,e){if(1&M&&t._UZ(0,"span",3),2&M){const F=t.oxw().$implicit;t.Q6J("innerHtml",F.text,t.oJD)}}function U(M,e){if(1&M&&t._UZ(0,"cvc-gene-tag",6),2&M){const F=t.oxw().$implicit,R=t.oxw(3);t.Q6J("gene",F)("enablePopover",R.enablePopover)}}function P(M,e){if(1&M&&(t.ynx(0),t.YNc(1,U,1,2,"cvc-gene-tag",5),t.BQk()),2&M){const F=e.$implicit;t.xp6(1),t.Q6J("ngIf","Gene"==F.__typename)}}const S=function(M){return[M]};function w(M,e){if(1&M&&(t.ynx(0),t.TgZ(1,"cvc-tag-group"),t.YNc(2,P,2,1,"ng-container",0),t._UZ(3,"cvc-variant-tag",4),t.qZA(),t.BQk()),2&M){const F=t.oxw(),R=F.index,ge=F.$implicit,ze=t.oxw();t.xp6(2),t.Q6J("ngForOf",t.VKq(3,S,ze.nameSegments[R-1])),t.xp6(1),t.Q6J("variant",ge)("enablePopover",ze.enablePopover)}}function L(M,e){if(1&M&&(t.ynx(0),t.YNc(1,Q,1,1,"span",1),t.YNc(2,w,4,5,"ng-container",2),t.BQk()),2&M){const F=e.$implicit;t.xp6(1),t.Q6J("ngIf","MolecularProfileTextSegment"==F.__typename),t.xp6(1),t.Q6J("ngIf","Variant"==F.__typename)}}let Y=(()=>{class M{constructor(){this.enablePopover=!0}ngOnInit(){if(void 0===this.nameSegments)throw new Error("Must pass a list of molecular profile name segments into mp name component.")}}return M.\u0275fac=function(F){return new(F||M)},M.\u0275cmp=t.Xpm({type:M,selectors:[["cvc-mp-tag-name"]],inputs:{nameSegments:"nameSegments",enablePopover:"enablePopover"},decls:1,vars:1,consts:[[4,"ngFor","ngForOf"],["class","text-segment",3,"innerHtml",4,"ngIf"],[4,"ngIf"],[1,"text-segment",3,"innerHtml"],[3,"variant","enablePopover"],[3,"gene","enablePopover",4,"ngIf"],[3,"gene","enablePopover"]],template:function(F,R){1&F&&t.YNc(0,L,3,2,"ng-container",0),2&F&&t.Q6J("ngForOf",R.nameSegments)},dependencies:[i.sg,i.O5,v.I,d.H,k],styles:[".text-segment[_ngcontent-%COMP%]{display:inline-block;margin-right:8px;font-weight:700;color:#0009;font-size:14px;line-height:12px}"]}),M})()},9858:(xt,Se,a)=>{a.d(Se,{r:()=>U});var t=a(6814),i=a(7528),v=a(5956),d=a(5695),s=a(551),k=a(5879);let Q=(()=>{class P{}return P.\u0275fac=function(w){return new(w||P)},P.\u0275mod=k.oAB({type:P}),P.\u0275inj=k.cJS({imports:[t.ez]}),P})(),U=(()=>{class P{}return P.\u0275fac=function(w){return new(w||P)},P.\u0275mod=k.oAB({type:P}),P.\u0275inj=k.cJS({imports:[t.ez,d.X,s.PV,i.Q,v.U,Q]}),P})()},2606:(xt,Se,a)=>{a.d(Se,{p:()=>pe});var t=a(8130),i=a(2023),v=a(5879),d=a(6814),s=a(4190),k=a(5695),Q=a(7417),U=a(551),P=a(156),S=a(5869);function w(de,W){}function L(de,W){if(1&de&&(v.ynx(0),v.TgZ(1,"a",5),v.YNc(2,w,0,0,"ng-template",6),v.qZA(),v.BQk()),2&de){const ve=v.oxw(),G=v.MAs(2);v.xp6(1),v.Q6J("routerLink",ve.molecularProfile.link),v.xp6(1),v.Q6J("ngTemplateOutlet",G)}}function Y(de,W){}const M=function(de){return{deprecated:de}};function e(de,W){if(1&de){const ve=v.EpF();v.TgZ(0,"nz-tag",9),v.NdJ("nzOnClose",function(se){v.CHM(ve);const fe=v.oxw(2);return v.KtG(fe.itemClosed(se))}),v.YNc(1,Y,0,0,"ng-template",6),v.qZA()}if(2&de){v.oxw();const ve=v.MAs(2),G=v.oxw(),se=v.MAs(8);v.Q6J("ngClass",v.VKq(5,M,G.molecularProfile.deprecated))("nzPopoverMouseEnterDelay",G.onCloseClicked?0:.5)("nzPopoverContent",ve)("nzMode",G.onCloseClicked?"closeable":"default"),v.xp6(1),v.Q6J("ngTemplateOutlet",se)}}function F(de,W){if(1&de&&v._UZ(0,"cvc-molecular-profile-popover",11),2&de){const ve=v.oxw(3);v.Q6J("molecularProfileId",ve.molecularProfile.id)}}function R(de,W){if(1&de&&v.YNc(0,F,1,1,"cvc-molecular-profile-popover",10),2&de){const ve=v.oxw(2);v.Q6J("ngIf",ve.enablePopover)}}function ge(de,W){if(1&de&&(v.YNc(0,e,2,7,"nz-tag",7),v.YNc(1,R,1,1,"ng-template",null,8,v.W1O)),2&de){const ve=v.oxw(),G=v.MAs(4);v.Q6J("ngIf",ve.enablePopover)("ngIfElse",G)}}function ze(de,W){}function K(de,W){if(1&de){const ve=v.EpF();v.TgZ(0,"nz-tag",12),v.NdJ("nzOnClose",function(se){v.CHM(ve);const fe=v.oxw();return v.KtG(fe.itemClosed(se))}),v.YNc(1,ze,0,0,"ng-template",6),v.qZA()}if(2&de){const ve=v.oxw(),G=v.MAs(8);v.Q6J("nzMode",ve.onCloseClicked?"closeable":"default")("ngClass",v.VKq(3,M,ve.molecularProfile.deprecated)),v.xp6(1),v.Q6J("ngTemplateOutlet",G)}}function N(de,W){}function V(de,W){if(1&de&&v.YNc(0,N,0,0,"ng-template",6),2&de){v.oxw();const ve=v.MAs(2);v.Q6J("ngTemplateOutlet",ve)}}function O(de,W){if(1&de&&(v.ynx(0),v._uU(1),v.ALo(2,"truncate"),v.BQk()),2&de){const ve=v.oxw(2);v.xp6(1),v.hij(" ",v.xi3(2,1,ve.molecularProfile.name,ve.truncationLength)," ")}}function A(de,W){if(1&de&&v._uU(0),2&de){const ve=v.oxw(2);v.hij(" ",ve.molecularProfile.name," ")}}function x(de,W){if(1&de&&(v._UZ(0,"i",13),v.YNc(1,O,3,4,"ng-container",0),v.YNc(2,A,1,1,"ng-template",null,14,v.W1O)),2&de){const ve=v.MAs(3),G=v.oxw();v.Q6J("nzTwotoneColor",G.iconColor),v.xp6(1),v.Q6J("ngIf",G.truncateLongName)("ngIfElse",ve)}}let pe=(()=>{class de extends t.a{constructor(){super(),this.enablePopover=!0,this.truncateLongName=!1,this.truncationLength=20,this.iconColor=(0,i.f)("MolecularProfile")}idFunction(){return this.molecularProfile.id}ngOnInit(){if(super.ngOnInit(),void 0===this.molecularProfile)throw new Error("cvc-molecular-profile-tag requires LinkableMolecularProfile input, none supplied.");"number"==typeof this.truncateLongName&&(this.truncationLength=this.truncateLongName),"segments"in this.molecularProfile&&(this.molecularProfile.name=this.molecularProfile.segments.map(ve=>"text"in ve?ve.text:ve.name).join(" "))}}return de.\u0275fac=function(ve){return new(ve||de)},de.\u0275cmp=v.Xpm({type:de,selectors:[["cvc-molecular-profile-tag"]],inputs:{molecularProfile:"molecularProfile",enablePopover:"enablePopover",truncateLongName:"truncateLongName"},features:[v.qOj],decls:9,vars:2,consts:[[4,"ngIf","ngIfElse"],["tag",""],["noPopover",""],["unlinked",""],["tagContent",""],[3,"routerLink"],[3,"ngTemplateOutlet"],["nz-popover","","nzPopoverTrigger","hover",3,"ngClass","nzPopoverMouseEnterDelay","nzPopoverContent","nzMode","nzOnClose",4,"ngIf","ngIfElse"],["popoverContent",""],["nz-popover","","nzPopoverTrigger","hover",3,"ngClass","nzPopoverMouseEnterDelay","nzPopoverContent","nzMode","nzOnClose"],[3,"molecularProfileId",4,"ngIf"],[3,"molecularProfileId"],[3,"nzMode","ngClass","nzOnClose"],["nz-icon","","nzType","civic-molecularprofile","nzTheme","twotone",3,"nzTwotoneColor"],["fullName",""]],template:function(ve,G){if(1&ve&&(v.YNc(0,L,3,2,"ng-container",0),v.YNc(1,ge,3,2,"ng-template",null,1,v.W1O),v.YNc(3,K,2,5,"ng-template",null,2,v.W1O),v.YNc(5,V,1,1,"ng-template",null,3,v.W1O),v.YNc(7,x,4,3,"ng-template",null,4,v.W1O)),2&ve){const se=v.MAs(6);v.Q6J("ngIf",G.linked)("ngIfElse",se)}},dependencies:[d.mk,d.O5,d.tP,s.rH,k.j,Q.lU,U.Ls,P._,S.W],styles:["[_nghost-%COMP%]     nz-tag.rejected, [_nghost-%COMP%]     nz-tag.submitted, [_nghost-%COMP%]     nz-tag.accepted, [_nghost-%COMP%]     nz-tag.deprecated{border-right-width:2px}[_nghost-%COMP%]     nz-tag.rejected, [_nghost-%COMP%]     nz-tag.deprecated{border-color:#e6e6e6;background-color:#fff;color:#999999d9}[_nghost-%COMP%]     nz-tag.submitted{border-color:#ffe58f}[_nghost-%COMP%]     nz-tag.accepted{border-color:#b7eb8f}[_nghost-%COMP%]{display:inline-block}"],changeDetection:0}),de})()},8527:(xt,Se,a)=>{a.d(Se,{u:()=>P});var t=a(6814),i=a(4190),v=a(5695),d=a(551),s=a(7417),k=a(2524),Q=a(2064),U=a(5879);let P=(()=>{class S{}return S.\u0275fac=function(L){return new(L||S)},S.\u0275mod=U.oAB({type:S}),S.\u0275inj=U.cJS({imports:[t.ez,i.Bz,v.X,s.$6,d.PV,k.s,Q._]}),S})()},4402:(xt,Se,a)=>{a.d(Se,{S:()=>e});var t=a(5676),i=a(7398),v=a(2181),d=a(5879),s=a(313),k=a(6814),Q=a(551),U=a(2962),P=a(3317),S=a(8125),w=a(8091);function L(F,R){if(1&F&&(d._UZ(0,"i",9),d._uU(1)),2&F){const ge=d.oxw().ngIf;d.xp6(1),d.hij(" ",ge.name," ")}}function Y(F,R){if(1&F&&(d.TgZ(0,"cvc-link-tag",10),d._uU(1),d.qZA()),2&F){const ge=d.oxw().ngIf;d.Q6J("href",ge.url),d.xp6(1),d.hij(" ",ge.hpoId," ")}}function M(F,R){if(1&F&&(d.ynx(0),d.TgZ(1,"nz-card",2),d.YNc(2,L,2,1,"ng-template",null,3,d.W1O),d.YNc(4,Y,2,2,"ng-template",null,4,d.W1O),d.TgZ(6,"nz-descriptions",5)(7,"nz-descriptions-item",6),d._uU(8),d.qZA(),d.TgZ(9,"nz-descriptions-item",7),d._uU(10),d.qZA(),d.TgZ(11,"nz-descriptions-item",8),d._uU(12),d.qZA()()(),d.BQk()),2&F){const ge=R.ngIf,ze=d.MAs(3),K=d.MAs(5);d.xp6(1),d.Q6J("nzTitle",ze)("nzExtra",K),d.xp6(5),d.Q6J("nzColumn",2),d.xp6(2),d.hij(" ",ge.assertionCount," "),d.xp6(2),d.hij(" ",ge.evidenceItemCount," "),d.xp6(2),d.hij(" ",ge.molecularProfileCount," ")}}let e=(()=>{class F{constructor(ge){this.gql=ge}ngOnInit(){if(null==this.phenotypeId)throw new Error("cvc-phenotype-popover requires valid phenotypeId input.");this.phenotype$=this.gql.watch({phenotypeId:this.phenotypeId}).valueChanges.pipe((0,i.U)(({data:ge})=>ge?.phenotypePopover),(0,v.h)(t.ep))}}return F.\u0275fac=function(ge){return new(ge||F)(d.Y36(s.OHm))},F.\u0275cmp=d.Xpm({type:F,selectors:[["cvc-phenotype-popover"]],inputs:{phenotypeId:"phenotypeId"},decls:3,vars:3,consts:[["id","popover-content"],[4,"ngIf"],["nzBordered","false","id","card-content",3,"nzTitle","nzExtra"],["cardTitle",""],["linkout",""],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","Assertions","nzSpan","2"],["nzTitle","Evidence","nzSpan","2"],["nzTitle","Molecular Profiles","nzSpan","2"],["nz-icon","","nzType","civic-phenotype","nzTheme","twotone","nzTwotoneColor","#2A63B6"],["tooltip","View in the Human Phenotype Ontology",3,"href"]],template:function(ge,ze){1&ge&&(d.TgZ(0,"div",0),d.YNc(1,M,13,6,"ng-container",1),d.ALo(2,"ngrxPush"),d.qZA()),2&ge&&(d.xp6(1),d.Q6J("ngIf",d.lcZ(2,1,ze.phenotype$)))},dependencies:[k.O5,Q.Ls,U.bd,P.l,S.R7,S.uj,w.fM],styles:["[_nghost-%COMP%]{display:block;margin:-8px -12px}[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}[_nghost-%COMP%]     .ant-descriptions-view{border:none}[_nghost-%COMP%]     #entity-child-counts{border-top:1px solid #f0f0f0;padding:8px}[_nghost-%COMP%]     #entity-child-counts nz-space{width:100%}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child nz-tag{margin-right:0}.popover-text[_ngcontent-%COMP%]{width:100%;padding:8px;border-bottom:1px solid #f0f0f0}#popover-content[_ngcontent-%COMP%]{min-width:350px;max-width:500px;min-height:125px}"]}),F})()},1332:(xt,Se,a)=>{a.d(Se,{I:()=>Q});var t=a(6814),i=a(2962),v=a(6067),d=a(8125),s=a(551),k=a(5879);let Q=(()=>{class U{}return U.\u0275fac=function(S){return new(S||U)},U.\u0275mod=k.oAB({type:U}),U.\u0275inj=k.cJS({imports:[t.ez,s.PV,i.vh,v.X,d.q6]}),U})()},3897:(xt,Se,a)=>{a.d(Se,{i:()=>K});var t=a(8130),i=a(5879),v=a(6814),d=a(4190),s=a(5695),k=a(7417),Q=a(551),U=a(4402),P=a(2616);function S(N,V){}function w(N,V){if(1&N&&(i.ynx(0),i.TgZ(1,"a",5),i.YNc(2,S,0,0,"ng-template",6),i.qZA(),i.BQk()),2&N){const O=i.oxw(),A=i.MAs(2);i.xp6(1),i.Q6J("routerLink",O.phenotype.link),i.xp6(1),i.Q6J("ngTemplateOutlet",A)}}function L(N,V){}function Y(N,V){if(1&N&&i._UZ(0,"cvc-phenotype-popover",9),2&N){const O=i.oxw(2);i.Q6J("phenotypeId",O.phenotype.id)}}function M(N,V){if(1&N){const O=i.EpF();i.TgZ(0,"nz-tag",7),i.NdJ("nzOnClose",function(x){i.CHM(O);const pe=i.oxw();return i.KtG(pe.itemClosed(x))}),i.YNc(1,L,0,0,"ng-template",6),i.qZA(),i.YNc(2,Y,1,1,"ng-template",null,8,i.W1O)}if(2&N){const O=i.MAs(3),A=i.oxw(),x=i.MAs(8);i.Q6J("nzPopoverMouseEnterDelay",A.onCloseClicked?0:.5)("nzPopoverContent",O)("nzPopoverTrigger",A.enablePopover?"hover":null)("nzMode",A.onCloseClicked?"closeable":"default"),i.xp6(1),i.Q6J("ngTemplateOutlet",x)}}function e(N,V){}function F(N,V){if(1&N){const O=i.EpF();i.TgZ(0,"nz-tag",10),i.NdJ("nzOnClose",function(x){i.CHM(O);const pe=i.oxw();return i.KtG(pe.itemClosed(x))}),i.YNc(1,e,0,0,"ng-template",6),i.qZA()}if(2&N){const O=i.oxw(),A=i.MAs(8);i.Q6J("nzMode",O.onCloseClicked?"closeable":"default"),i.xp6(1),i.Q6J("ngTemplateOutlet",A)}}function R(N,V){}function ge(N,V){if(1&N&&i.YNc(0,R,0,0,"ng-template",6),2&N){i.oxw();const O=i.MAs(2);i.Q6J("ngTemplateOutlet",O)}}function ze(N,V){if(1&N&&(i._UZ(0,"i",11),i.ALo(1,"entityColor"),i._uU(2)),2&N){const O=i.oxw();i.Q6J("nzTwotoneColor",i.lcZ(1,2,"Phenotype")),i.xp6(2),i.hij(" ",O.phenotype.name,"\n")}}let K=(()=>{class N extends t.a{constructor(){super(...arguments),this.enablePopover=!0}set phenotype(O){if(!O)throw new Error("phenotype-tag phentype input requires LinkablePhenotype.");this._phenotype=O}get phenotype(){return this._phenotype}idFunction(){return this.phenotype.id}}return N.\u0275fac=function(){let V;return function(A){return(V||(V=i.n5z(N)))(A||N)}}(),N.\u0275cmp=i.Xpm({type:N,selectors:[["cvc-phenotype-tag"]],inputs:{phenotype:"phenotype",enablePopover:"enablePopover"},features:[i.qOj],decls:9,vars:2,consts:[[4,"ngIf","ngIfElse"],["tag",""],["noPopover",""],["unlinked",""],["tagContent",""],[3,"routerLink"],[3,"ngTemplateOutlet"],["nz-popover","","nzPopoverPlacement","right",3,"nzPopoverMouseEnterDelay","nzPopoverContent","nzPopoverTrigger","nzMode","nzOnClose"],["phenotypePopover",""],[3,"phenotypeId"],[3,"nzMode","nzOnClose"],["nz-icon","","nzTheme","twotone","nzType","civic-phenotype",3,"nzTwotoneColor"]],template:function(O,A){if(1&O&&(i.YNc(0,w,3,2,"ng-container",0),i.YNc(1,M,4,5,"ng-template",null,1,i.W1O),i.YNc(3,F,2,2,"ng-template",null,2,i.W1O),i.YNc(5,ge,1,1,"ng-template",null,3,i.W1O),i.YNc(7,ze,3,4,"ng-template",null,4,i.W1O)),2&O){const x=i.MAs(6);i.Q6J("ngIf",A.linked)("ngIfElse",x)}},dependencies:[v.O5,v.tP,d.rH,s.j,k.lU,Q.Ls,U.S,P.a],styles:["[_nghost-%COMP%]{display:block}"],changeDetection:0}),N})()},3043:(xt,Se,a)=>{a.d(Se,{y:()=>P});var t=a(6814),i=a(4190),v=a(2524),d=a(551),s=a(7417),k=a(5695),Q=a(1332),U=a(5879);let P=(()=>{class S{}return S.\u0275fac=function(L){return new(L||S)},S.\u0275mod=U.oAB({type:S}),S.\u0275inj=U.cJS({imports:[t.ez,i.Bz,k.X,s.$6,d.PV,Q.I,v.s]}),S})()},3103:(xt,Se,a)=>{a.d(Se,{b:()=>P});var t=a(2023),i=a(5879),v=a(6814);const d=function(S){return{background:S}};function s(S,w){if(1&S&&i._UZ(0,"div",3),2&S){const L=i.oxw();i.Q6J("ngStyle",i.VKq(1,d,L.flagColor))}}function k(S,w){if(1&S&&i._UZ(0,"div",4),2&S){const L=i.oxw();i.Q6J("ngStyle",i.VKq(1,d,L.entityColor))}}function Q(S,w){if(1&S&&i._UZ(0,"div",5),2&S){const L=i.oxw();i.Q6J("ngStyle",i.VKq(1,d,L.entityColor))}}const U=["*"];let P=(()=>{class S{constructor(){this.hasRevisions=!1,this.flagged=!1,this.hasComments=!1,this.entityColor="#AAA",this.flagColor=(0,t.f)("Flag")}}return S.\u0275fac=function(L){return new(L||S)},S.\u0275cmp=i.Xpm({type:S,selectors:[["cvc-icon-badges"]],inputs:{hasRevisions:"hasRevisions",flagged:"flagged",hasComments:"hasComments",entityColor:"entityColor"},ngContentSelectors:U,decls:4,vars:3,consts:[["class","cvc-badge badge-flags",3,"ngStyle",4,"ngIf"],["class","cvc-badge badge-revisions",3,"ngStyle",4,"ngIf"],["class","cvc-badge badge-comments",3,"ngStyle",4,"ngIf"],[1,"cvc-badge","badge-flags",3,"ngStyle"],[1,"cvc-badge","badge-revisions",3,"ngStyle"],[1,"cvc-badge","badge-comments",3,"ngStyle"]],template:function(L,Y){1&L&&(i.F$t(),i.Hsn(0),i.YNc(1,s,1,3,"div",0),i.YNc(2,k,1,3,"div",1),i.YNc(3,Q,1,3,"div",2)),2&L&&(i.xp6(1),i.Q6J("ngIf",Y.flagged),i.xp6(1),i.Q6J("ngIf",Y.hasRevisions),i.xp6(1),i.Q6J("ngIf",Y.hasComments))},dependencies:[v.O5,v.PC],styles:["[_nghost-%COMP%]{display:inline-block;position:relative;line-height:1}.cvc-badge[_ngcontent-%COMP%]{position:absolute;z-index:auto;width:4px;min-width:4px;height:4px;border-radius:100%;box-shadow:0 0 0 1px #fff;background:#aaa}.cvc-badge.badge-revisions[_ngcontent-%COMP%]{top:.5px;right:.5px;transform:translate(50%,-50%)}.cvc-badge.badge-flags[_ngcontent-%COMP%]{top:.5px;left:.5px;transform:translate(-50%,-50%)}.cvc-badge.badge-comments[_ngcontent-%COMP%]{bottom:.5px;right:.5px;transform:translate(50%,50%)}"],changeDetection:0}),S})()},3146:(xt,Se,a)=>{a.d(Se,{C:()=>d});var t=a(6814),i=a(2524),v=a(5879);let d=(()=>{class s{}return s.\u0275fac=function(Q){return new(Q||s)},s.\u0275mod=v.oAB({type:s}),s.\u0275inj=v.cJS({imports:[t.ez,i.s]}),s})()},3317:(xt,Se,a)=>{a.d(Se,{l:()=>k});var t=a(5879),i=a(6109),v=a(5695),d=a(551);const s=["*"];let k=(()=>{class Q{set href(P){if(!P)throw new Error("link-tag link Input requires string.");this._href=P}get href(){return this._href?this._href:""}}return Q.\u0275fac=function(P){return new(P||Q)},Q.\u0275cmp=t.Xpm({type:Q,selectors:[["cvc-link-tag"]],inputs:{href:"href",tooltip:"tooltip",iconName:"iconName"},ngContentSelectors:s,decls:4,vars:4,consts:[["target","_blank",3,"href"],["nzColor","default","nz-tooltip","",3,"nzTooltipTitle","nzTooltipTrigger"],["nz-icon","","nzTheme","outline",3,"nzType"]],template:function(P,S){1&P&&(t.F$t(),t.TgZ(0,"a",0)(1,"nz-tag",1),t._UZ(2,"i",2),t.Hsn(3),t.qZA()()),2&P&&(t.Q6J("href",S.href,t.LSH),t.xp6(1),t.Q6J("nzTooltipTitle",S.tooltip)("nzTooltipTrigger",S.tooltip?"hover":null),t.xp6(1),t.Q6J("nzType",S.iconName?S.iconName:"link"))},dependencies:[i.SY,v.j,d.Ls],encapsulation:2}),Q})()},6067:(xt,Se,a)=>{a.d(Se,{X:()=>k});var t=a(6814),i=a(6109),v=a(5695),d=a(551),s=a(5879);let k=(()=>{class Q{}return Q.\u0275fac=function(P){return new(P||Q)},Q.\u0275mod=s.oAB({type:Q}),Q.\u0275inj=s.cJS({imports:[t.ez,i.cg,v.X,d.PV]}),Q})()},9154:(xt,Se,a)=>{a.d(Se,{y:()=>s});var t=a(6814),i=a(551),v=a(5695),d=a(5879);let s=(()=>{class k{}return k.\u0275fac=function(U){return new(U||k)},k.\u0275mod=d.oAB({type:k}),k.\u0275inj=d.cJS({imports:[t.ez,v.X,i.PV]}),k})()},3489:(xt,Se,a)=>{a.d(Se,{H:()=>S});var t=a(5619),i=a(1687),v=a(1374),d=a(5879),s=a(6814),k=a(5695),Q=a(551),U=a(8091);function P(w,L){1&w&&(d.TgZ(0,"nz-tag",1),d._UZ(1,"i",2),d.TgZ(2,"span"),d._uU(3,"End of results reached"),d.qZA()())}let S=(()=>{class w{set cvcShowTag(Y){void 0!==Y&&Y&&this.showTag()}constructor(Y){this.cdr=Y,this.showTag$=new t.X(!1)}showTag(){!1===this.showTag$.getValue()&&(this.showTag$.next(!0),(0,i.F)(3e3).pipe((0,v.P)()).subscribe(()=>{this.showTag$.next(!1),this.cdr.detectChanges()}))}}return w.\u0275fac=function(Y){return new(Y||w)(d.Y36(d.sBO))},w.\u0275cmp=d.Xpm({type:w,selectors:[["cvc-no-more-rows"]],inputs:{cvcShowTag:"cvcShowTag"},decls:2,vars:3,consts:[["nzColor","warning",4,"ngIf"],["nzColor","warning"],["nz-icon","","nzType","exclamation-circle"]],template:function(Y,M){1&Y&&(d.YNc(0,P,4,0,"nz-tag",0),d.ALo(1,"ngrxPush")),2&Y&&d.Q6J("ngIf",d.lcZ(1,1,M.showTag$))},dependencies:[s.O5,k.j,Q.Ls,U.fM],encapsulation:2,changeDetection:0}),w})()},2384:(xt,Se,a)=>{a.d(Se,{h:()=>w});var t=a(5879),i=a(6814),v=a(5695),d=a(551);function s(L,Y){1&L&&t._UZ(0,"i",7)}function k(L,Y){1&L&&t._UZ(0,"i",8)}function Q(L,Y){1&L&&t._UZ(0,"i",9)}function U(L,Y){1&L&&t._UZ(0,"i",10)}function P(L,Y){1&L&&t._UZ(0,"i",10)}function S(L,Y){if(1&L&&(t.TgZ(0,"nz-tag",1),t.ynx(1,2),t.YNc(2,s,1,0,"i",3),t.YNc(3,k,1,0,"i",4),t.YNc(4,Q,1,0,"i",5),t.YNc(5,U,1,0,"i",6),t.YNc(6,P,1,0,"i",6),t.BQk(),t._uU(7),t.ALo(8,"titlecase"),t.qZA()),2&L){const M=t.oxw();t.Q6J("nzColor",M.tagStatus),t.xp6(1),t.Q6J("ngSwitch",M.tagStatus),t.xp6(1),t.Q6J("ngSwitchCase","success"),t.xp6(1),t.Q6J("ngSwitchCase","error"),t.xp6(1),t.Q6J("ngSwitchCase","warning"),t.xp6(1),t.Q6J("ngSwitchCase","processing"),t.xp6(1),t.Q6J("ngSwitchCase","default"),t.xp6(1),t.hij(" ",t.lcZ(8,8,M.status),"\n")}}let w=(()=>{class L{constructor(){this.statusColorMap={ACCEPTED:"success",REJECTED:"error",SUBMITTED:"warning",NEW:"processing",SUPERSEDED:"default",OPEN:"error",RESOLVED:"default"}}set status(M){this._status=M,M&&(this.tagStatus=this.statusColorMap[M])}get status(){return this._status}ngOnInit(){if(void 0===this.status)throw new Error("Must pass a valid EvidenceStatus or RevisionStatus to cvc-status-tag component")}}return L.\u0275fac=function(M){return new(M||L)},L.\u0275cmp=t.Xpm({type:L,selectors:[["cvc-status-tag"]],inputs:{status:"status"},decls:1,vars:1,consts:[[3,"nzColor",4,"ngIf"],[3,"nzColor"],[3,"ngSwitch"],["nz-icon","","nzType","check-circle",4,"ngSwitchCase"],["nz-icon","","nzType","close-circle",4,"ngSwitchCase"],["nz-icon","","nzType","exclamation-circle",4,"ngSwitchCase"],["nz-icon","",4,"ngSwitchCase"],["nz-icon","","nzType","check-circle"],["nz-icon","","nzType","close-circle"],["nz-icon","","nzType","exclamation-circle"],["nz-icon",""]],template:function(M,e){1&M&&t.YNc(0,S,9,10,"nz-tag",0),2&M&&t.Q6J("ngIf",e.tagStatus)},dependencies:[i.O5,i.RF,i.n9,v.j,d.Ls,i.rS],encapsulation:2}),L})()},2655:(xt,Se,a)=>{a.d(Se,{x:()=>s});var t=a(6814),i=a(5695),v=a(551),d=a(5879);let s=(()=>{class k{}return k.\u0275fac=function(U){return new(U||k)},k.\u0275mod=d.oAB({type:k}),k.\u0275inj=d.cJS({imports:[t.ez,i.X,v.PV]}),k})()},1887:(xt,Se,a)=>{a.d(Se,{$:()=>v});var t=a(5879);const i=["*"];let v=(()=>{class d{constructor(){}ngOnInit(){}}return d.\u0275fac=function(k){return new(k||d)},d.\u0275cmp=t.Xpm({type:d,selectors:[["cvc-tag-list"]],hostVars:4,hostBindings:function(k,Q){2&k&&t.ekj("xs","xs"===Q.size||!Q.size)("sm","sm"===Q.size)},inputs:{size:"size"},ngContentSelectors:i,decls:2,vars:0,consts:[[1,"tag-list"]],template:function(k,Q){1&k&&(t.F$t(),t.TgZ(0,"div",0),t.Hsn(1),t.qZA())},styles:["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]   .tag-list[_ngcontent-%COMP%]    >*{display:inline-block}[_nghost-%COMP%]   .tag-list[_ngcontent-%COMP%]    >*:last-child{margin-right:-8px}.xs[_nghost-%COMP%]{margin-bottom:-4px}.xs[_nghost-%COMP%]   .tag-list[_ngcontent-%COMP%]    >*{margin-bottom:4px}.sm[_nghost-%COMP%]{margin-bottom:-8px}.sm[_nghost-%COMP%]   .tag-list[_ngcontent-%COMP%]    >*{margin-bottom:8px}"],changeDetection:0}),d})()},366:(xt,Se,a)=>{a.d(Se,{$:()=>v});var t=a(6814),i=a(5879);let v=(()=>{class d{}return d.\u0275fac=function(k){return new(k||d)},d.\u0275mod=i.oAB({type:d}),d.\u0275inj=i.cJS({imports:[t.ez]}),d})()},1813:(xt,Se,a)=>{a.d(Se,{p:()=>K});var t=a(5676),i=a(7398),v=a(2181),d=a(5879),s=a(313),k=a(6814),Q=a(551),U=a(2962),P=a(8125),S=a(3317),w=a(1887),L=a(3369),Y=a(8091);function M(N,V){if(1&N&&(d._UZ(0,"i",11),d._uU(1)),2&N){const O=d.oxw().ngIf;d.xp6(1),d.AsE(" ",O.displayType,":\xa0",O.citation," ")}}function e(N,V){if(1&N&&(d.TgZ(0,"cvc-link-tag",12),d._uU(1),d.qZA()),2&N){const O=d.oxw().ngIf;d.Q6J("href",O.sourceUrl)("tooltip","View on "+O.displayType),d.xp6(1),d.hij(" ",O.displayType+":"+O.citationId," ")}}function F(N,V){1&N&&d._UZ(0,"cvc-clinical-trial-tag",14),2&N&&d.Q6J("clinicalTrial",V.$implicit)("enablePopover",!1)}function R(N,V){if(1&N&&(d.ynx(0),d.TgZ(1,"cvc-tag-list"),d.YNc(2,F,1,2,"cvc-clinical-trial-tag",13),d.qZA(),d.BQk()),2&N){const O=d.oxw().ngIf;d.xp6(2),d.Q6J("ngForOf",O.clinicalTrials)}}function ge(N,V){1&N&&d._uU(0," -- ")}function ze(N,V){if(1&N&&(d.ynx(0),d.TgZ(1,"nz-card",2),d.YNc(2,M,2,2,"ng-template",null,3,d.W1O),d.YNc(4,e,2,3,"ng-template",null,4,d.W1O),d.TgZ(6,"nz-descriptions",5)(7,"nz-descriptions-item",6),d._uU(8),d.qZA(),d.TgZ(9,"nz-descriptions-item",7),d._uU(10),d.qZA(),d.TgZ(11,"nz-descriptions-item",8),d.YNc(12,R,3,1,"ng-container",9),d.YNc(13,ge,1,0,"ng-template",null,10,d.W1O),d.qZA()()(),d.BQk()),2&N){const O=V.ngIf,A=d.MAs(3),x=d.MAs(5),pe=d.MAs(14);d.xp6(1),d.Q6J("nzTitle",A)("nzExtra",x),d.xp6(5),d.Q6J("nzColumn",2),d.xp6(2),d.hij(" ",O.name," "),d.xp6(2),d.hij(" ",O.evidenceItemCount," "),d.xp6(2),d.Q6J("ngIf",O.clinicalTrials&&O.clinicalTrials.length>0)("ngIfElse",pe)}}let K=(()=>{class N{constructor(O){this.gql=O}ngOnInit(){if(null==this.sourceId)throw new Error("cvc-source-popover requires valid sourceId input.");this.source$=this.gql.watch({sourceId:this.sourceId}).valueChanges.pipe((0,i.U)(({data:O})=>O?.sourcePopover),(0,v.h)(t.ep))}}return N.\u0275fac=function(O){return new(O||N)(d.Y36(s.TiL))},N.\u0275cmp=d.Xpm({type:N,selectors:[["cvc-source-popover"]],inputs:{sourceId:"sourceId"},decls:3,vars:3,consts:[["id","popover-content"],[4,"ngIf"],["nzBordered","false","id","card-content",3,"nzTitle","nzExtra"],["cardTitle",""],["linkout",""],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","Title","nzSpan","2"],["nzTitle","Evidence","nzSpan","2"],["nzTitle","Clinical Trials:","nzSpan","2"],[4,"ngIf","ngIfElse"],["noTrials",""],["nz-icon","","nzType","civic-source","nzTheme","twotone","nzTwotoneColor","#F9BA45"],[3,"href","tooltip"],[3,"clinicalTrial","enablePopover",4,"ngFor","ngForOf"],[3,"clinicalTrial","enablePopover"]],template:function(O,A){1&O&&(d.TgZ(0,"div",0),d.YNc(1,ze,15,7,"ng-container",1),d.ALo(2,"ngrxPush"),d.qZA()),2&O&&(d.xp6(1),d.Q6J("ngIf",d.lcZ(2,1,A.source$)))},dependencies:[k.sg,k.O5,Q.Ls,U.bd,P.R7,P.uj,S.l,w.$,L.G,Y.fM],styles:["[_nghost-%COMP%]{display:block;margin:-8px -12px}[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}[_nghost-%COMP%]     .ant-descriptions-view{border:none}[_nghost-%COMP%]     #entity-child-counts{border-top:1px solid #f0f0f0;padding:8px}[_nghost-%COMP%]     #entity-child-counts nz-space{width:100%}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child nz-tag{margin-right:0}.popover-text[_ngcontent-%COMP%]{width:100%;padding:8px;border-bottom:1px solid #f0f0f0}#popover-content[_ngcontent-%COMP%]{min-width:350px;max-width:500px;min-height:125px}"]}),N})()},6247:(xt,Se,a)=>{a.d(Se,{n:()=>P});var t=a(6814),i=a(2962),v=a(6067),d=a(8125),s=a(366),k=a(4605),Q=a(551),U=a(5879);let P=(()=>{class S{}return S.\u0275fac=function(L){return new(L||S)},S.\u0275mod=U.oAB({type:S}),S.\u0275inj=U.cJS({imports:[t.ez,Q.PV,i.vh,d.q6,v.X,s.$,k.N]}),S})()},4138:(xt,Se,a)=>{a.d(Se,{T:()=>A});var t=a(8130),i=a(5879),v=a(7023),d=a(6814),s=a(4190),k=a(551),Q=a(7417),U=a(5695),P=a(1813),S=a(5869),w=a(2616);function L(x,pe){}function Y(x,pe){if(1&x&&(i.ynx(0),i.TgZ(1,"a",4),i.YNc(2,L,0,0,"ng-template",5),i.qZA(),i.BQk()),2&x){const de=i.oxw(),W=i.MAs(2);i.xp6(1),i.Q6J("routerLink",de.source.link),i.xp6(1),i.Q6J("ngTemplateOutlet",W)}}function M(x,pe){}function e(x,pe){if(1&x&&i._UZ(0,"cvc-source-popover",8),2&x){const de=i.oxw(2);i.Q6J("sourceId",de.source.id)}}function F(x,pe){if(1&x){const de=i.EpF();i.TgZ(0,"nz-tag",6),i.NdJ("nzPopoverVisibleChange",function(ve){i.CHM(de);const G=i.oxw();return i.KtG(G.popoverVisible=ve)})("nzOnClose",function(ve){i.CHM(de);const G=i.oxw();return i.KtG(G.itemClosed(ve))}),i.YNc(1,M,0,0,"ng-template",5),i.qZA(),i.YNc(2,e,1,1,"ng-template",null,7,i.W1O)}if(2&x){const de=i.MAs(3),W=i.oxw(),ve=i.MAs(6);i.Q6J("nzPopoverMouseEnterDelay",W.onCloseClicked?0:.5)("nzPopoverContent",de)("nzPopoverTrigger",W.enablePopover?"hover":null)("nzPopoverVisible",W.popoverVisible)("nzMode",W.onCloseClicked?"closeable":"default"),i.xp6(1),i.Q6J("ngTemplateOutlet",ve)}}function R(x,pe){}function ge(x,pe){if(1&x&&i.YNc(0,R,0,0,"ng-template",5),2&x){i.oxw();const de=i.MAs(2);i.Q6J("ngTemplateOutlet",de)}}function ze(x,pe){if(1&x&&(i.ynx(0),i._uU(1),i.ALo(2,"truncate"),i.BQk()),2&x){const de=i.oxw(3);i.xp6(1),i.hij(" ",i.xi3(2,1,de.displayName,50)," ")}}function K(x,pe){if(1&x&&(i.ynx(0),i._uU(1),i.BQk()),2&x){const de=i.oxw(3);i.xp6(1),i.hij(" ",de.displayName," ")}}function N(x,pe){if(1&x&&(i.ynx(0),i.YNc(1,ze,3,4,"ng-container",11),i.YNc(2,K,2,1,"ng-container",11),i.BQk()),2&x){const de=i.oxw(2);i.xp6(1),i.Q6J("ngIf",de.truncateLongName),i.xp6(1),i.Q6J("ngIf",!de.truncateLongName)}}function V(x,pe){if(1&x&&i._uU(0),2&x){const de=i.oxw(2);i.hij(" SID:",de.source.id," ")}}function O(x,pe){if(1&x&&(i._UZ(0,"i",9),i.ALo(1,"entityColor"),i.YNc(2,N,3,2,"ng-container",0),i.YNc(3,V,1,1,"ng-template",null,10,i.W1O)),2&x){const de=i.MAs(4),W=i.oxw();i.Q6J("nzTwotoneColor",i.lcZ(1,3,"Source")),i.xp6(2),i.Q6J("ngIf","normal"===W.mode)("ngIfElse",de)}}let A=(()=>{class x extends t.a{set source(de){if(!de)throw new Error("source-tag source input requires SourceWithDisplayName or SourceWithCitation.");this._source=de,this.displayName="displayName"in this.source?this.source.displayName:this.sourceTypeDisplay.transform(this.source.sourceType)+": "+this.source.citation}get source(){return this._source}constructor(de){super(),this.sourceTypeDisplay=de,this.enablePopover=!0,this.linked=!0,this.mode="normal",this.truncateLongName=!1}idFunction(){return this.source.id}}return x.\u0275fac=function(de){return new(de||x)(i.Y36(v.l))},x.\u0275cmp=i.Xpm({type:x,selectors:[["cvc-source-tag"]],inputs:{source:"source",enablePopover:"enablePopover",linked:"linked",mode:"mode",truncateLongName:"truncateLongName"},features:[i.qOj],decls:7,vars:2,consts:[[4,"ngIf","ngIfElse"],["tag",""],["unlinked",""],["tagContent",""],[3,"routerLink"],[3,"ngTemplateOutlet"],["nz-popover","","nzPopoverPlacement","right",3,"nzPopoverMouseEnterDelay","nzPopoverContent","nzPopoverTrigger","nzPopoverVisible","nzMode","nzPopoverVisibleChange","nzOnClose"],["sourcePopover",""],[3,"sourceId"],["nz-icon","","nzTheme","twotone","nzType","civic-source",3,"nzTwotoneColor"],["concise",""],[4,"ngIf"]],template:function(de,W){if(1&de&&(i.YNc(0,Y,3,2,"ng-container",0),i.YNc(1,F,4,6,"ng-template",null,1,i.W1O),i.YNc(3,ge,1,1,"ng-template",null,2,i.W1O),i.YNc(5,O,5,5,"ng-template",null,3,i.W1O)),2&de){const ve=i.MAs(4);i.Q6J("ngIf",W.linked)("ngIfElse",ve)}},dependencies:[d.O5,d.tP,s.rH,k.Ls,Q.lU,U.j,P.p,S.W,w.a],styles:["[_nghost-%COMP%]{display:inline-block}"],changeDetection:0}),x})()},8641:(xt,Se,a)=>{a.d(Se,{s:()=>P});var t=a(6814),i=a(7417),v=a(4190),d=a(6247),s=a(5695),k=a(551),Q=a(2524),U=a(5879);let P=(()=>{class S{}return S.\u0275fac=function(L){return new(L||S)},S.\u0275mod=U.oAB({type:S}),S.\u0275inj=U.cJS({imports:[t.ez,v.Bz,k.PV,i.$6,s.X,d.n,Q.s]}),S})()},96:(xt,Se,a)=>{a.d(Se,{a:()=>A});var t=a(7398),i=a(2181),v=a(5676),d=a(5879),s=a(313),k=a(6814),Q=a(2962),U=a(8125),P=a(551),S=a(2392),w=a(5695),L=a(6109),Y=a(3317),M=a(8091),e=a(5869);function F(x,pe){if(1&x&&(d._UZ(0,"i",12),d._uU(1),d.ALo(2,"truncate")),2&x){const de=d.oxw().ngIf;d.xp6(1),d.hij(" ",d.xi3(2,1,de.name,50)," ")}}function R(x,pe){if(1&x&&(d.TgZ(0,"cvc-link-tag",14),d._uU(1),d.qZA()),2&x){const de=d.oxw(2).ngIf;d.Q6J("href",de.therapyUrl),d.xp6(1),d.hij(" ",de.ncitId," ")}}function ge(x,pe){if(1&x&&d.YNc(0,R,2,2,"cvc-link-tag",13),2&x){const de=d.oxw().ngIf,W=d.MAs(7);d.Q6J("ngIf",de.ncitId)("ngIfElse",W)}}function ze(x,pe){1&x&&(d.TgZ(0,"span",15),d._uU(1,"No NCIt ID"),d.qZA())}function K(x,pe){if(1&x&&(d.TgZ(0,"nz-descriptions-item",16),d._uU(1),d.qZA()),2&x){const de=d.oxw().ngIf;d.xp6(1),d.hij(" ",de.name," ")}}function N(x,pe){if(1&x&&(d.TgZ(0,"nz-tag",19),d._uU(1),d.ALo(2,"truncate"),d.qZA()),2&x){const de=pe.$implicit;d.Q6J("nzTooltipTitle",de),d.xp6(1),d.Oqu(d.lcZ(2,2,de))}}function V(x,pe){if(1&x&&(d.TgZ(0,"nz-descriptions-item",17),d.YNc(1,N,3,4,"nz-tag",18),d.qZA()),2&x){const de=d.oxw().ngIf;d.xp6(1),d.Q6J("ngForOf",de.therapyAliases)}}function O(x,pe){if(1&x&&(d.ynx(0),d.TgZ(1,"nz-card",2),d.YNc(2,F,3,4,"ng-template",null,3,d.W1O),d.YNc(4,ge,1,2,"ng-template",null,4,d.W1O),d.YNc(6,ze,2,0,"ng-template",null,5,d.W1O),d.TgZ(8,"nz-descriptions",6),d.YNc(9,K,2,1,"nz-descriptions-item",7),d.YNc(10,V,2,1,"nz-descriptions-item",8),d.TgZ(11,"nz-descriptions-item",9),d._uU(12),d.qZA(),d.TgZ(13,"nz-descriptions-item",10),d._uU(14),d.qZA(),d.TgZ(15,"nz-descriptions-item",11),d._uU(16),d.qZA()()(),d.BQk()),2&x){const de=pe.ngIf,W=d.MAs(3),ve=d.MAs(5);d.xp6(1),d.Q6J("nzTitle",W)("nzExtra",ve),d.xp6(7),d.Q6J("nzColumn",2),d.xp6(1),d.Q6J("ngIf",de.name.length>50),d.xp6(1),d.Q6J("ngIf",de.therapyAliases.length>0),d.xp6(2),d.hij(" ",de.assertionCount," "),d.xp6(2),d.hij(" ",de.evidenceItemCount," "),d.xp6(2),d.hij(" ",de.molecularProfileCount," ")}}let A=(()=>{class x{constructor(de){this.gql=de}ngOnInit(){if(null==this.therapyId)throw new Error("cvc-therapy-popover requires valid therapyId input.");this.therapy$=this.gql.watch({therapyId:this.therapyId}).valueChanges.pipe((0,t.U)(({data:de})=>de?.therapyPopover),(0,i.h)(v.ep))}}return x.\u0275fac=function(de){return new(de||x)(d.Y36(s.L8L))},x.\u0275cmp=d.Xpm({type:x,selectors:[["cvc-therapy-popover"]],inputs:{therapyId:"therapyId"},decls:3,vars:3,consts:[["id","popover-content"],[4,"ngIf"],["nzBordered","false","id","card-content",3,"nzTitle","nzExtra"],["cardTitle",""],["linkout",""],["noNcitId",""],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","Name","nzSpan","2",4,"ngIf"],["nzTitle","Aliases","nzSpan","2",4,"ngIf"],["nzTitle","Assertions","nzSpan","2"],["nzTitle","Evidence","nzSpan","2"],["nzTitle","Molecular Profiles","nzSpan","2"],["nz-icon","","nzType","civic-therapy","nzTheme","twotone","nzTwotoneColor","#AC3996"],["tooltip","View on NCI Thesaurus",3,"href",4,"ngIf","ngIfElse"],["tooltip","View on NCI Thesaurus",3,"href"],["nz-typography","","nzType","secondary"],["nzTitle","Name","nzSpan","2"],["nzTitle","Aliases","nzSpan","2"],["nz-tooltip","",3,"nzTooltipTitle",4,"ngFor","ngForOf"],["nz-tooltip","",3,"nzTooltipTitle"]],template:function(de,W){1&de&&(d.TgZ(0,"div",0),d.YNc(1,O,17,8,"ng-container",1),d.ALo(2,"ngrxPush"),d.qZA()),2&de&&(d.xp6(1),d.Q6J("ngIf",d.lcZ(2,1,W.therapy$)))},dependencies:[k.sg,k.O5,Q.bd,U.R7,U.uj,P.Ls,S.ZU,w.j,L.SY,Y.l,M.fM,e.W],styles:["[_nghost-%COMP%]{display:block;margin:-8px -12px}[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}[_nghost-%COMP%]     .ant-descriptions-view{border:none}[_nghost-%COMP%]     #entity-child-counts{border-top:1px solid #f0f0f0;padding:8px}[_nghost-%COMP%]     #entity-child-counts nz-space{width:100%}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child nz-tag{margin-right:0}.popover-text[_ngcontent-%COMP%]{width:100%;padding:8px;border-bottom:1px solid #f0f0f0}#popover-content[_ngcontent-%COMP%]{min-width:350px;max-width:500px;min-height:125px}"]}),x})()},1207:(xt,Se,a)=>{a.d(Se,{s:()=>L});var t=a(6814),i=a(4190),v=a(2962),d=a(8125),s=a(6067),k=a(551),Q=a(2392),U=a(2524),P=a(5695),S=a(6109),w=a(5879);let L=(()=>{class Y{}return Y.\u0275fac=function(e){return new(e||Y)},Y.\u0275mod=w.oAB({type:Y}),Y.\u0275inj=w.cJS({imports:[t.ez,i.Bz,v.vh,d.q6,k.PV,Q.ZJ,P.X,S.cg,s.X,U.s]}),Y})()},4770:(xt,Se,a)=>{a.d(Se,{T:()=>K});var t=a(8130),i=a(5879),v=a(6814),d=a(4190),s=a(5695),k=a(7417),Q=a(551),U=a(96),P=a(5869);function S(N,V){}function w(N,V){if(1&N&&(i.ynx(0),i.TgZ(1,"a",4),i.YNc(2,S,0,0,"ng-template",5),i.qZA(),i.BQk()),2&N){const O=i.oxw(),A=i.MAs(2);i.xp6(1),i.Q6J("routerLink",O.therapy.link),i.xp6(1),i.Q6J("ngTemplateOutlet",A)}}function L(N,V){}function Y(N,V){if(1&N&&i._UZ(0,"cvc-therapy-popover",8),2&N){const O=i.oxw(2);i.Q6J("therapyId",O.therapy.id)}}function M(N,V){if(1&N){const O=i.EpF();i.TgZ(0,"nz-tag",6),i.NdJ("nzOnClose",function(x){i.CHM(O);const pe=i.oxw();return i.KtG(pe.itemClosed(x))}),i.YNc(1,L,0,0,"ng-template",5),i.qZA(),i.YNc(2,Y,1,1,"ng-template",null,7,i.W1O)}if(2&N){const O=i.MAs(3),A=i.oxw(),x=i.MAs(6);i.Q6J("nzPopoverMouseEnterDelay",A.onCloseClicked?0:.5)("nzPopoverContent",O)("nzPopoverTrigger",A.enablePopover?"hover":null)("nzMode",A.onCloseClicked?"closeable":"default"),i.xp6(1),i.Q6J("ngTemplateOutlet",x)}}function e(N,V){}function F(N,V){if(1&N&&i.YNc(0,e,0,0,"ng-template",5),2&N){i.oxw();const O=i.MAs(2);i.Q6J("ngTemplateOutlet",O)}}function R(N,V){if(1&N&&(i.ynx(0),i._uU(1),i.ALo(2,"truncate"),i.BQk()),2&N){const O=i.oxw(2);i.xp6(1),i.hij(" ",i.xi3(2,1,O.therapy.name,21)," ")}}function ge(N,V){if(1&N&&i._uU(0),2&N){const O=i.oxw(2);i.hij(" ",O.therapy.name," ")}}function ze(N,V){if(1&N&&(i._UZ(0,"i",9),i.YNc(1,R,3,4,"ng-container",0),i.YNc(2,ge,1,1,"ng-template",null,10,i.W1O)),2&N){const O=i.MAs(3),A=i.oxw();i.xp6(1),i.Q6J("ngIf",A.truncateLongName)("ngIfElse",O)}}let K=(()=>{class N extends t.a{constructor(){super(...arguments),this.enablePopover=!0,this.truncateLongName=!1}set therapy(O){if(!O)throw new Error("therapy-tag Input requires LinkableTherapy.");this._therapy=O}get therapy(){return this._therapy}idFunction(){return this.therapy.id}}return N.\u0275fac=function(){let V;return function(A){return(V||(V=i.n5z(N)))(A||N)}}(),N.\u0275cmp=i.Xpm({type:N,selectors:[["cvc-therapy-tag"]],inputs:{therapy:"therapy",enablePopover:"enablePopover",truncateLongName:"truncateLongName"},features:[i.qOj],decls:7,vars:2,consts:[[4,"ngIf","ngIfElse"],["tag",""],["unlinked",""],["tagContent",""],[3,"routerLink"],[3,"ngTemplateOutlet"],["nz-popover","","nzPopoverPlacement","right",3,"nzPopoverMouseEnterDelay","nzPopoverContent","nzPopoverTrigger","nzMode","nzOnClose"],["therapyPopover",""],[3,"therapyId"],["nz-icon","","nzType","civic-therapy","nzTheme","twotone","nzTwotoneColor","#AC3996"],["fullName",""]],template:function(O,A){if(1&O&&(i.YNc(0,w,3,2,"ng-container",0),i.YNc(1,M,4,5,"ng-template",null,1,i.W1O),i.YNc(3,F,1,1,"ng-template",null,2,i.W1O),i.YNc(5,ze,4,2,"ng-template",null,3,i.W1O)),2&O){const x=i.MAs(4);i.Q6J("ngIf",A.linked)("ngIfElse",x)}},dependencies:[v.O5,v.tP,d.rH,s.j,k.lU,Q.Ls,U.a,P.W],encapsulation:2,changeDetection:0}),N})()},6061:(xt,Se,a)=>{a.d(Se,{N:()=>P});var t=a(6814),i=a(4190),v=a(5695),d=a(7417),s=a(551),k=a(2524),Q=a(1207),U=a(5879);let P=(()=>{class S{}return S.\u0275fac=function(L){return new(L||S)},S.\u0275mod=U.oAB({type:S}),S.\u0275inj=U.cJS({imports:[t.ez,i.Bz,v.X,d.$6,s.PV,k.s,Q.s]}),S})()},8545:(xt,Se,a)=>{a.d(Se,{m:()=>de});var t=a(5676),i=a(7398),v=a(2181),d=a(5879),s=a(313),k=a(6814),Q=a(4190),U=a(2962),P=a(95),S=a(8125),w=a(5695),L=a(551),Y=a(2574),M=a(4121),e=a(3317),F=a(8091),R=a(2616);function ge(W,ve){if(1&W&&(d._UZ(0,"i",13),d.ALo(1,"entityColor"),d._uU(2)),2&W){const G=d.oxw().ngIf;d.Q6J("nzTwotoneColor",d.lcZ(1,2,"Variant")),d.xp6(2),d.hij(" ",G.name," ")}}function ze(W,ve){if(1&W&&d._UZ(0,"cvc-gene-tag",14),2&W){const G=d.oxw().ngIf;d.Q6J("enablePopover",!1)("gene",G.gene)}}function K(W,ve){if(1&W&&(d.TgZ(0,"nz-tag"),d._uU(1),d.qZA()),2&W){const G=ve.$implicit;d.xp6(1),d.Oqu(G)}}function N(W,ve){if(1&W&&(d.TgZ(0,"nz-descriptions-item",15),d.YNc(1,K,2,1,"nz-tag",16),d.qZA()),2&W){const G=d.oxw().ngIf;d.xp6(1),d.Q6J("ngForOf",G.variantAliases)}}function V(W,ve){if(1&W&&(d.TgZ(0,"nz-descriptions-item",17)(1,"cvc-link-tag",18),d._uU(2),d.qZA()()),2&W){const G=d.oxw().ngIf;d.xp6(1),d.MGl("href","https://reg.genome.network/allele/",G.alleleRegistryId,".html"),d.xp6(1),d.hij(" ",G.alleleRegistryId," ")}}function O(W,ve){if(1&W&&(d.TgZ(0,"a",19)(1,"nz-tag",20),d._UZ(2,"i",21),d._uU(3),d.qZA()()),2&W){const G=d.oxw().ngIf;d.MGl("routerLink","/variants/",G.id,"/flags"),d.xp6(3),d.hij(" Flags (",G.flags.totalCount,") ")}}function A(W,ve){if(1&W&&(d.TgZ(0,"a",19)(1,"nz-tag",22),d._UZ(2,"i",23),d._uU(3),d.qZA()()),2&W){const G=d.oxw().ngIf;d.MGl("routerLink","/variants/",G.id,"/revisions"),d.xp6(3),d.hij(" Revisions (",G.revisions.totalCount,") ")}}function x(W,ve){if(1&W&&(d.TgZ(0,"a",19)(1,"nz-tag",24),d._UZ(2,"i",25),d._uU(3),d.qZA()()),2&W){const G=d.oxw().ngIf;d.MGl("routerLink","/variants/",G.id,"/comments"),d.xp6(3),d.hij(" Comments (",G.comments.totalCount,") ")}}function pe(W,ve){if(1&W&&(d.ynx(0),d.TgZ(1,"nz-card",2),d.YNc(2,ge,3,4,"ng-template",null,3,d.W1O),d.YNc(4,ze,1,2,"ng-template",null,4,d.W1O),d.TgZ(6,"nz-descriptions",5),d.YNc(7,N,2,1,"nz-descriptions-item",6),d.YNc(8,V,3,2,"nz-descriptions-item",7),d.TgZ(9,"nz-descriptions-item",8),d._uU(10),d.qZA()(),d.TgZ(11,"nz-row",9)(12,"nz-col",10)(13,"nz-space",11),d.YNc(14,O,4,2,"a",12),d.YNc(15,A,4,2,"a",12),d.YNc(16,x,4,2,"a",12),d.qZA()()()(),d.BQk()),2&W){const G=ve.ngIf,se=d.MAs(3),fe=d.MAs(5);d.xp6(1),d.Q6J("nzTitle",se)("nzExtra",fe),d.xp6(5),d.Q6J("nzColumn",2),d.xp6(1),d.Q6J("ngIf",G.variantAliases.length>0),d.xp6(1),d.Q6J("ngIf",G.alleleRegistryId&&"unregistered"!=G.alleleRegistryId),d.xp6(2),d.hij(" ",G.molecularProfiles.totalCount," ")}}let de=(()=>{class W{constructor(G){this.gql=G}ngOnInit(){if(void 0===this.variantId)throw new Error("Must pass a variant ID into the variant popover component.");this.variant$=this.gql.watch({variantId:this.variantId}).valueChanges.pipe((0,i.U)(({data:G})=>G?.variant),(0,v.h)(t.ep))}}return W.\u0275fac=function(G){return new(G||W)(d.Y36(s.ZYZ))},W.\u0275cmp=d.Xpm({type:W,selectors:[["cvc-variant-popover"]],inputs:{variantId:"variantId"},decls:3,vars:3,consts:[["id","popover-content"],[4,"ngIf"],["nzBordered","false","id","card-content",3,"nzTitle","nzExtra"],["cardTitle",""],["gene",""],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","Aliases","nzSpan","2",4,"ngIf"],["nzTitle","Allele Registry ID","nzSpan","2",4,"ngIf"],["nzTitle","Molecular Profiles","nzSpan","2"],["id","entity-child-counts"],["nzSpan","24"],["nzSize","small"],[3,"routerLink",4,"nzSpaceItem"],["nz-icon","","nzTheme","twotone","nzType","civic-variant",3,"nzTwotoneColor"],[3,"enablePopover","gene"],["nzTitle","Aliases","nzSpan","2"],[4,"ngFor","ngForOf"],["nzTitle","Allele Registry ID","nzSpan","2"],["tooltip","View on the ClinGen Allele Registry",3,"href"],[3,"routerLink"],["nzColor","red"],["nz-icon","","nzType","civic-flag"],["nzColor","orange"],["nz-icon","","nzType","civic-revision"],["nzColor","blue"],["nz-icon","","nzType","civic-comment"]],template:function(G,se){1&G&&(d.TgZ(0,"div",0),d.YNc(1,pe,17,6,"ng-container",1),d.ALo(2,"ngrxPush"),d.qZA()),2&G&&(d.xp6(1),d.Q6J("ngIf",d.lcZ(2,1,se.variant$)))},dependencies:[k.sg,k.O5,Q.rH,U.bd,P.t3,P.SK,S.R7,S.uj,w.j,L.Ls,Y.NU,Y.$1,M.H,e.l,F.fM,R.a],styles:["[_nghost-%COMP%]{display:block;margin:-8px -12px}[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}[_nghost-%COMP%]     .ant-descriptions-view{border:none}[_nghost-%COMP%]     #entity-child-counts{border-top:1px solid #f0f0f0;padding:8px}[_nghost-%COMP%]     #entity-child-counts nz-space{width:100%}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child nz-tag{margin-right:0}.popover-text[_ngcontent-%COMP%]{width:100%;padding:8px;border-bottom:1px solid #f0f0f0}#popover-content[_ngcontent-%COMP%]{min-width:350px;max-width:500px;min-height:125px}"]}),W})()},6446:(xt,Se,a)=>{a.d(Se,{k:()=>Y});var t=a(6814),i=a(4190),v=a(2962),d=a(95),s=a(8125),k=a(5695),Q=a(551),U=a(2574),P=a(5956),S=a(6067),w=a(2524),L=a(5879);let Y=(()=>{class M{}return M.\u0275fac=function(F){return new(F||M)},M.\u0275mod=L.oAB({type:M}),M.\u0275inj=L.cJS({imports:[t.ez,i.Bz,v.vh,d.Jb,s.q6,k.X,Q.PV,U.zf,w.s,P.U,S.X]}),M})()},9408:(xt,Se,a)=>{a.d(Se,{I:()=>A});var t=a(8130),i=a(2023),v=a(5879),d=a(6814),s=a(4190),k=a(5695),Q=a(7417),U=a(551),P=a(8545),S=a(3103),w=a(5869);function L(x,pe){}function Y(x,pe){if(1&x&&(v.ynx(0),v.TgZ(1,"a",4),v.YNc(2,L,0,0,"ng-template",5),v.qZA(),v.BQk()),2&x){const de=v.oxw(),W=v.MAs(2);v.xp6(1),v.Q6J("routerLink",de.variant.link),v.xp6(1),v.Q6J("ngTemplateOutlet",W)}}function M(x,pe){}function e(x,pe){if(1&x&&v._UZ(0,"cvc-variant-popover",9),2&x){const de=v.oxw(3);v.Q6J("variantId",de.variant.id)}}function F(x,pe){if(1&x&&v.YNc(0,e,1,1,"cvc-variant-popover",8),2&x){const de=v.oxw(2);v.Q6J("ngIf",de.enablePopover)}}const R=function(x){return{deprecated:x}};function ge(x,pe){if(1&x){const de=v.EpF();v.TgZ(0,"nz-tag",6),v.NdJ("nzOnClose",function(ve){v.CHM(de);const G=v.oxw();return v.KtG(G.itemClosed(ve))}),v.YNc(1,M,0,0,"ng-template",5),v.qZA(),v.YNc(2,F,1,1,"ng-template",null,7,v.W1O)}if(2&x){const de=v.MAs(3),W=v.oxw(),ve=v.MAs(6);v.Q6J("ngClass",v.VKq(6,R,W.variant.deprecated))("nzPopoverMouseEnterDelay",W.onCloseClicked?0:.5)("nzPopoverContent",de)("nzPopoverTrigger",W.enablePopover?"hover":null)("nzMode",W.onCloseClicked?"closeable":"default"),v.xp6(1),v.Q6J("ngTemplateOutlet",ve)}}function ze(x,pe){}function K(x,pe){if(1&x&&v.YNc(0,ze,0,0,"ng-template",5),2&x){v.oxw();const de=v.MAs(2);v.Q6J("ngTemplateOutlet",de)}}function N(x,pe){if(1&x&&(v.ynx(0),v._uU(1),v.ALo(2,"truncate"),v.BQk()),2&x){const de=v.oxw(2);v.xp6(1),v.hij(" ",v.xi3(2,1,de.variant.name,20)," ")}}function V(x,pe){if(1&x&&v._uU(0),2&x){const de=v.oxw(2);v.hij(" ",de.variant.name," ")}}function O(x,pe){if(1&x&&(v.TgZ(0,"cvc-icon-badges",10),v._UZ(1,"i",11),v.qZA(),v.YNc(2,N,3,4,"ng-container",0),v.YNc(3,V,1,1,"ng-template",null,12,v.W1O)),2&x){const de=v.MAs(4),W=v.oxw();v.Q6J("flagged",W.variant.flagged)("entityColor",W.iconColor),v.xp6(1),v.Q6J("nzTwotoneColor",W.iconColor),v.xp6(1),v.Q6J("ngIf",W.truncateLongName)("ngIfElse",de)}}let A=(()=>{class x extends t.a{constructor(){super(),this.enablePopover=!0,this.truncateLongName=!1,this.iconColor=(0,i.f)("Variant")}idFunction(){return this.variant.id}ngOnInit(){if(super.ngOnInit(),void 0===this.variant)throw new Error("cvc-variant-tag requires LinkableVariant input, none supplied.")}}return x.\u0275fac=function(de){return new(de||x)},x.\u0275cmp=v.Xpm({type:x,selectors:[["cvc-variant-tag"]],inputs:{variant:"variant",enablePopover:"enablePopover",truncateLongName:"truncateLongName"},features:[v.qOj],decls:7,vars:2,consts:[[4,"ngIf","ngIfElse"],["tag",""],["unlinked",""],["tagContent",""],[3,"routerLink"],[3,"ngTemplateOutlet"],["nz-popover","",3,"ngClass","nzPopoverMouseEnterDelay","nzPopoverContent","nzPopoverTrigger","nzMode","nzOnClose"],["popoverContent",""],[3,"variantId",4,"ngIf"],[3,"variantId"],[3,"flagged","entityColor"],["nz-icon","","nzType","civic-variant","nzTheme","twotone",3,"nzTwotoneColor"],["fullName",""]],template:function(de,W){if(1&de&&(v.YNc(0,Y,3,2,"ng-container",0),v.YNc(1,ge,4,8,"ng-template",null,1,v.W1O),v.YNc(3,K,1,1,"ng-template",null,2,v.W1O),v.YNc(5,O,5,5,"ng-template",null,3,v.W1O)),2&de){const ve=v.MAs(4);v.Q6J("ngIf",W.linked)("ngIfElse",ve)}},dependencies:[d.mk,d.O5,d.tP,s.rH,k.j,Q.lU,U.Ls,P.m,S.b,w.W],styles:["[_nghost-%COMP%]     nz-tag.rejected, [_nghost-%COMP%]     nz-tag.submitted, [_nghost-%COMP%]     nz-tag.accepted, [_nghost-%COMP%]     nz-tag.deprecated{border-right-width:2px}[_nghost-%COMP%]     nz-tag.rejected, [_nghost-%COMP%]     nz-tag.deprecated{border-color:#e6e6e6;background-color:#fff;color:#999999d9}[_nghost-%COMP%]     nz-tag.submitted{border-color:#ffe58f}[_nghost-%COMP%]     nz-tag.accepted{border-color:#b7eb8f}[_nghost-%COMP%]{display:inline-block}"],changeDetection:0}),x})()},7528:(xt,Se,a)=>{a.d(Se,{Q:()=>S});var t=a(6814),i=a(4190),v=a(5695),d=a(551),s=a(7417),k=a(6446),Q=a(2524),U=a(3146),P=a(5879);let S=(()=>{class w{}return w.\u0275fac=function(Y){return new(Y||w)},w.\u0275mod=P.oAB({type:w}),w.\u0275inj=P.cJS({imports:[t.ez,i.Bz,v.X,s.$6,d.PV,Q.s,k.k,U.C]}),w})()},3702:(xt,Se,a)=>{a.d(Se,{t:()=>i});var t=a(5879);let i=(()=>{class v{transform(s,k){return s?"verbose"==k?"TIER_I_LEVEL_A"===s?"Tier I - Level A":"TIER_I_LEVEL_B"===s?"Tier I - Level B":"TIER_II_LEVEL_C"===s?"Tier II - Level C":"TIER_II_LEVEL_D"===s?"Tier II - Level D":"TIER_III"===s?"Tier III":"TIER_IV"===s?"Tier IV":"Not Applicable":s.toUpperCase().replace("TIER","").replace("LEVEL","").replace(/ /g,"").replace(/_/g,""):""}}return v.\u0275fac=function(s){return new(s||v)},v.\u0275pipe=t.Yjl({name:"formatAmp",type:v,pure:!0}),v})()},2616:(xt,Se,a)=>{a.d(Se,{a:()=>v});var t=a(2023),i=a(5879);let v=(()=>{class d{transform(k){return(0,t.f)(k)}}return d.\u0275fac=function(k){return new(k||d)},d.\u0275pipe=i.Yjl({name:"entityColor",type:d,pure:!0}),d})()},6967:(xt,Se,a)=>{a.d(Se,{Do:()=>k});var t=a(313),i=a(2),v=a(5879);const d=new Map([[t.Sx0.A,"Validated association"],[t.Sx0.B,"Clinical evidence"],[t.Sx0.C,"Case study"],[t.Sx0.D,"Preclinical evidence"],[t.Sx0.E,"Inferential association"]]),s=new Map([[1,"One Star"],[2,"Two Stars"],[3,"Three Stars"],[4,"Four Stars"],[5,"Five Stars"]]);let k=(()=>{class Q{transform(P,S="display-string"){return null==P?"":"short-string"===S&&1===P.toString().length?"string"==typeof P?P:P.toString():"icon-name"===S?"number"==typeof P?`civic-rating${P}`:1===P.length?`civic-level${P.toLowerCase()}`:`civic-${P.replace(/_/g,"").toLowerCase()}`:"number"==typeof P?s.get(P)||P.toString():1===P.length?d.get(P)||P:(0,i.E)(P)}}return Q.\u0275fac=function(P){return new(P||Q)},Q.\u0275pipe=v.Yjl({name:"evidenceEnumDisplay",type:Q,pure:!0}),Q})()},8004:(xt,Se,a)=>{a.d(Se,{v:()=>k});var t=a(313);const i={evidenceType:{[t.kqt.Diagnostic]:"Evidence pertains to a variant's impact on patient diagnosis (cancer subtype)",[t.kqt.Functional]:"Evidence pertains to a variant that alters biological function from the reference state",[t.kqt.Oncogenic]:"Evidence pertains to a somatic variant's involvement in tumor pathogenesis as described by the Hallmarks of Cancer",[t.kqt.Predictive]:"Evidence pertains to a variant's effect on therapeutic response",[t.kqt.Predisposing]:"Evidence pertains to a germline variant's role in conferring susceptibility to disease (including pathogenicity evaluations)",[t.kqt.Prognostic]:"Evidence pertains to a variant's impact on disease progression, severity, or patient survival"},assertionType:{[t.uBv.Diagnostic]:"Assertion pertains to a variant's impact on patient diagnosis (cancer subtype)",[t.uBv.Predictive]:"Assertion pertains to a variant's effect on therapeutic response",[t.uBv.Predisposing]:"Assertion pertains to a germline variant's role in conferring susceptibility to disease (including pathogenicity evaluations)",[t.uBv.Prognostic]:"Assertion pertains to a variant's impact on disease progression, severity, or patient survival",[t.uBv.Oncogenic]:"Assertion pertains to a somatic variant's role in driving tumor formation, growth, and other processes related to the Hallmarks of Cancer"},variantOrigin:{[t.huM.Somatic]:"Variant is a mutation, found only in tumor cells, having arisen in a specific tissue (non-germ cell), and is not expected to be inherited or passed to offspring",[t.huM.RareGermline]:"Variant is found in every cell (not restricted to tumor/diseased cells) and is thought to exist in less than 1% of the population relevant to this evidence item",[t.huM.CommonGermline]:"Variant is found in every cell (not restricted to tumor/diseased cells) and is thought to exist in at least 1% of the population relevant to this evidence item",[t.huM.Unknown]:"The variant origin is uncertain based on the available evidence",[t.huM.Na]:"The variant type (e.g., expression) is not compatible (or easily classified) with the CIViC concept of variant origin",[t.huM.Combined]:"Variants in the Molecular Profile span multiple Origin types."},evidenceLevel:{[t.Sx0.A]:"Proven/consensus association in human medicine",[t.Sx0.B]:"Clinical trial or other primary patient data supports association",[t.Sx0.C]:"Individual case reports from clinical journals",[t.Sx0.D]:"In vivo or in vitro models support association",[t.Sx0.E]:"Indirect evidence"},evidenceLevelBrief:{[t.Sx0.A]:"Validated association",[t.Sx0.B]:"Clinical evidence",[t.Sx0.C]:"Case Study",[t.Sx0.D]:"Preclinical evidence",[t.Sx0.E]:"Inferential association"},therapyInteractionType:{[t.wkr.Combination]:"The therapies listed were used as part of a combination therapy approach",[t.wkr.Sequential]:"The therapies listed were used at separate timepoints in the same treatment plan",[t.wkr.Substitutes]:"The therapies listed are often considered to be of the same family, or behave similarly in a treatment setting"},evidenceRating:{1:"Poor - Claim is not supported well by experimental evidence. Results are not reproducible, or have very small sample size. No follow-up is done to validate novel claims",2:"Adequate - Evidence is not well supported by experimental data, and little follow-up data is available. Experiments may lack proper controls, have small sample size, or are not statistically convincing",3:"Average - Evidence is convincing, but not supported by a breadth of experiments. May be smaller scale projects, or novel results without many follow-up experiments. Discrepancies from expected results are explained and not concerning",4:"Strong - Well supported evidence. Experiments are well controlled, and results are convincing. Any discrepancies from expected results are well-explained and not concerning",5:"Excellent - Solid, well supported evidence from a lab or journal with respected academic standing. Experiments are well controlled, and results are clean and reproducible across multiple replicates. Evidence confirmed using separate methods"}},v={significance:{PREDICTIVE:{ADVERSE_RESPONSE:{EvidenceItem:"Associated with an adverse response to theraputic treatment",Assertion:"Associated with an adverse response to theraputic treatment"},REDUCED_SENSITIVITY:{EvidenceItem:"Response to treatment is lower than seen in other treatment contexts",Assertion:"Response to treatment is lower than seen in other treatment contexts"},RESISTANCE:{EvidenceItem:"Associated with clinical or preclinical resistance to treatment",Assertion:"Associated with clinical or preclinical resistance to treatment"},SENSITIVITYRESPONSE:{EvidenceItem:"Associated with clinical or preclinical response to treatment",Assertion:"Associated with a clinical or preclinical response to treatment"},NA:{EvidenceItem:"Clinical Significance is not applicable",Assertion:"Clinical Significance is not applicable"}},DIAGNOSTIC:{POSITIVE:{EvidenceItem:"Associated with diagnosis of disease or subtype",Assertion:"Associated with diagnosis of disease or subtype"},NEGATIVE:{EvidenceItem:"Associated with lack of disease or subtype",Assertion:"Associated with lack of disease or subtype"}},PROGNOSTIC:{BETTER_OUTCOME:{EvidenceItem:"Demonstrates better than expected clinical outcome",Assertion:"Demonstrates better than expected clinical outcome"},POOR_OUTCOME:{EvidenceItem:"Demonstrates worse than expected clinical outcome",Assertion:"Demonstrates worse than expected clinical outcome"},Na:{EvidenceItem:"Clinical Significance is not applicable",Assertion:"Clinical Significance is not applicable"}},PREDISPOSING:{PATHOGENIC:{Assertion:"Very strong evidence the variant is pathogenic"},LIKELY_PATHOGENIC:{Assertion:"Strong evidence (>90% certainty) the variant is pathogenic"},BENIGN:{Assertion:"Very strong evidence the variant is benign"},LIKELY_BENIGN:{Assertion:"Not expected to have a major effect on disease"},UNCERTAIN_SIGNIFICANCE:{Assertion:"Does not meet the ACMG/AMP criteria for pathogenic/benign, or the evidence is conflicting"},Na:{EvidenceItem:"Clinical Significance is not applicable"},PREDISPOSITION:{EvidenceItem:"Germline variant has predisposing potential for cancer, and may meet ACMG/AMP criteria supporting pathogenic or benign classification."},PROTECTIVENESS:{EvidenceItem:"Germline variant has properties that protect individuals from acquiring cancer."}},ONCOGENIC:{ONCOGENICITY:{EvidenceItem:"Somatic variant has oncogenic potential for driving cancer, and may meet ClinGen/CGC/VICC criteria supporting pathogenic or benign classification."},PROTECTIVENESS:{EvidenceItem:"Somatic variant has a protective role and minimizes co-occuring driver variants, tumor malignancy, or other oncogenic tumor properties."},ONCOGENIC:{Assertion:"Very strong evidence the variant is oncogenic."},LIKELY_ONCOGENIC:{Assertion:"Strong evidence the variant is oncogenic."},BENIGN:{Assertion:"Very strong evidence the variant does not have oncogenic properties."},LIKELY_BENIGN:{Assertion:"Strong evidence the variant does not have oncogenic properties."},UNCERTAIN_SIGNIFICANCE:{Assertion:"Does not meet guideline criteria for oncogenic/benign, or the evidence is conflicting."}}},evidenceDirection:{PREDICTIVE:{SUPPORTS:{EvidenceItem:"The experiment or study supports this variant's response to a therapy"},DOES_NOT_SUPPORT:{EvidenceItem:"The experiment or study does not support, or was inconclusive of an interaction between this variant and a therapy"}},DIAGNOSTIC:{SUPPORTS:{EvidenceItem:"The experiment or study supports this variant's impact on the diagnosis of disease or subtype"},DOES_NOT_SUPPORT:{EvidenceItem:"The experiment or study does not support this variant's impact on diagnosis of disease or subtype"}},PROGNOSTIC:{SUPPORTS:{EvidenceItem:"The experiment or study supports this variant's impact on prognostic outcome"},DOES_NOT_SUPPORT:{EvidenceItem:"The experiment or study does not support a prognostic association between variant and outcome"}},PREDISPOSING:{Na:{EvidenceItem:"Evidence Direction is not applicable"},SUPPORTS:{EvidenceItem:"The evidence supports a pathogenic or a protective role for a germline variant in cancer."},DOES_NOT_SUPPORT:{EvidenceItem:"The evidence supports a benign (if Clinical Significance is Predisposition) or lack or protective (if Clinical Significance is Protectiveness) role for a germline variant in cancer."}},FUNCTIONAL:{SUPPORTS:{EvidenceItem:"The experiment or study supports this variant causing alteration or non-alteration of the gene product function"},DOES_NOT_SUPPORT:{EvidenceItem:"The experiment or study does not support this variant causing alteration or non-alteration of the gene product function"}},ONCOGENIC:{NA:{EvidenceItem:"Evidence Direction is not applicable for Oncogenic Evidence Type"},SUPPORTS:{EvidenceItem:"The evidence supports an oncogenic or protective role for a somatic variant"},DOES_NOT_SUPPORT:{EvidenceItem:"The evidence does not support an oncogenic or protective role for a somatic variant"}}},assertionDirection:{PREDICTIVE:{SUPPORTS:{Assertion:"The Assertion and associated Evidence Items support this variant's response to a therapy"},DOES_NOT_SUPPORT:{Assertion:"The Assertion and associated evidence does not support, or was inconclusive of an interaction between this variant and a therapy"}},DIAGNOSTIC:{SUPPORTS:{Assertion:"The Assertion and associated Evidence Items support this variant's impact on the diagnosis of disease or subtype"},DOES_NOT_SUPPORT:{Assertion:"The Assertion and associated evidence does not support this variant's impact on diagnosis of disease or subtype"}},PROGNOSTIC:{SUPPORTS:{Assertion:"The Assertion and associated Evidence Items support this variant's impact on prognostic outcome"},DOES_NOT_SUPPORT:{Assertion:"The Assertion and associated evidence does not support a prognostic association between variant and outcome"}},PREDISPOSING:{SUPPORTS:{Assertion:"The Assertion and associated Evidence Items support a variant's impact on predisposing outcome"}},FUNCTIONAL:{SUPPORTS:{Assertion:"The Assertion and associated Evidence Items support this variant causing alteration or non-alteration of the gene product function"},DOES_NOT_SUPPORT:{Assertion:"The Assertion and associated evidence does not support this variant causing alteration or non-alteration of the gene product function"}},ONCOGENIC:{SUPPORTS:{Assertion:"The Assertion and associated Evidence Items support a variant's oncogenic, benign, or uncertain significance"}}}};var s=a(5879);let k=(()=>{class Q{transform(P,S,w=void 0,L=void 0){return S&&P?function d(Q,U,P,S){let w;return w=P&&S?v[Q][P][U][S]:i[Q][U],w||""}(S,P,w,L):""}}return Q.\u0275fac=function(P){return new(P||Q)},Q.\u0275pipe=s.Yjl({name:"enumTooltip",type:Q,pure:!0}),Q})()},7334:(xt,Se,a)=>{a.d(Se,{A:()=>v});var t=a(5879),i=a(6593);let v=(()=>{class d{constructor(k){this.sanitizer=k}transform(k,Q){if(!Q||""==Q)return k;const U=new RegExp(Q,"gi"),P=k.match(U);if(!P)return k;let S=k.replace(U,`<span class='typeahead-match'>${P[0]}</span>`);return this.sanitizer.bypassSecurityTrustHtml(S)}}return d.\u0275fac=function(k){return new(k||d)(t.Y36(i.H7,16))},d.\u0275pipe=t.Yjl({name:"highlightTypeahead",type:d,pure:!0}),d})()},2524:(xt,Se,a)=>{a.d(Se,{s:()=>d});var t=a(6814),i=a(7023),v=a(5879);let d=(()=>{class s{}return s.\u0275fac=function(Q){return new(Q||s)},s.\u0275mod=v.oAB({type:s}),s.\u0275inj=v.cJS({providers:[i.l],imports:[t.ez]}),s})()},7023:(xt,Se,a)=>{a.d(Se,{l:()=>v});var t=a(2666),i=a(5879);let v=(()=>{class d{transform(k){return k?(0,t.c)(k):""}}return d.\u0275fac=function(k){return new(k||d)},d.\u0275pipe=i.Yjl({name:"sourceTypeDisplay",type:d,pure:!0}),d})()},5869:(xt,Se,a)=>{a.d(Se,{W:()=>i});var t=a(5879);let i=(()=>{class v{constructor(){}transform(s,k=25){if(s.length>k){let U=s.slice(0,k);var Q=U.lastIndexOf(" ");return U.slice(0,Q)+"\u2026"}return s}}return v.\u0275fac=function(s){return new(s||v)},v.\u0275pipe=t.Yjl({name:"truncate",type:v,pure:!0}),v})()},1201:(xt,Se,a)=>{a.d(Se,{Z:()=>i});var t=a(5879);let i=(()=>{class v{transform(s){return s?`civic-${s.replace(/_/g,"").toLowerCase()}`:""}}return v.\u0275fac=function(s){return new(s||v)},v.\u0275pipe=t.Yjl({name:"typenameToIcon",type:v,pure:!0}),v})()},7473:(xt,Se,a)=>{a.d(Se,{Y:()=>v});var t=a(5619),i=a(5879);let v=(()=>{class d{constructor(){this.networkError$=new t.X(void 0)}clearErrors(){this.networkError$.next(void 0)}}return d.\u0275fac=function(k){return new(k||d)},d.\u0275prov=i.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"}),d})()},951:(xt,Se,a)=>{a.d(Se,{a:()=>w});var S,t=a(655),i=a(313),v=a(1791),d=a(7398),s=a(7921),k=a(7081),Q=a(4223),U=a(5879),P=a(9862);let w=((S=class{constructor(Y,M){function e(N){return!(!N||N.role!==i.i44.Admin)}function F(N){return!(!N||N.role!==i.i44.Editor&&N.role!==i.i44.Admin)}function R(N){return!(!N||N.role!==i.i44.Curator)}function ge(N){return!(!N||N.role!==i.i44.Curator&&N.role!==i.i44.Editor&&N.role!==i.i44.Admin)}function ze(N){return!(!N||N.role!==i.i44.Editor&&N.role!==i.i44.Admin||!N.mostRecentConflictOfInterestStatement||N.mostRecentConflictOfInterestStatement?.coiStatus!=i.Mgx.Conflict&&N.mostRecentConflictOfInterestStatement?.coiStatus!=i.Mgx.Valid)}function K(N){if(N.mostRecentOrganizationId)return N.organizations.find(V=>V.id===N.mostRecentOrganizationId)}this.viewerBaseGQL=Y,this.http=M,this.initialViewer={mostRecentOrg:void 0,signedIn:!1,isAdmin:!1,isEditor:!1,isCurator:!1,canCurate:!1,canModerate:!1,invalidCoi:!0},this.queryRef=this.viewerBaseGQL.watch(void 0,{notifyOnNetworkStatusChange:!1}),this.viewer$=this.queryRef.valueChanges.pipe((0,Q.j)("data","viewer"),(0,d.U)(N=>({...N,signedIn:null!=N,signedOut:null==N,canCurate:ge(N),canModerate:ze(N),isAdmin:e(N),isEditor:F(N),isCurator:R(N),organizations:null==N?[]:N.organizations,mostRecentOrg:null==N?void 0:K(N),invalidCoi:F(N)&&(!N.mostRecentConflictOfInterestStatement||N.mostRecentConflictOfInterestStatement.coiStatus===i.Mgx.Expired||N.mostRecentConflictOfInterestStatement.coiStatus===i.Mgx.Missing)})),(0,s.O)(this.initialViewer),(0,k.d)(1)),this.signedIn$=this.viewer$.pipe((0,d.U)(N=>N.signedIn)),this.signedOut$=this.viewer$.pipe((0,d.U)(N=>N.signedOut)),this.isAdmin$=this.viewer$.pipe((0,d.U)(N=>e(N))),this.isEditor$=this.viewer$.pipe((0,d.U)(N=>F(N))),this.isCurator$=this.viewer$.pipe((0,d.U)(N=>R(N))),this.canCurate$=this.viewer$.pipe((0,d.U)(N=>ge(N))),this.canModerate$=this.viewer$.pipe((0,d.U)(N=>ze(N)))}signOut(){this.http.get("/api/sign_out").pipe((0,v.t)(this)).subscribe(()=>this.queryRef.refetch())}refetch(){this.queryRef.refetch()}}).\u0275fac=function(Y){return new(Y||S)(U.LFG(i.Tt7),U.LFG(P.eN))},S.\u0275prov=U.Yz7({token:S,factory:S.\u0275fac,providedIn:"root"}),S);w=(0,t.gn)([(0,v.c)()],w)},8130:(xt,Se,a)=>{a.d(Se,{a:()=>i});var t=a(5879);let i=(()=>{class v{constructor(){this.linked=!0,this.popoverVisible=!1}ngOnInit(){this.onCloseClicked&&(this.linked=!1)}itemClosed(s){this.popoverVisible=!1,this.onCloseClicked&&this.onCloseClicked(this.idFunction())}}return v.\u0275fac=function(s){return new(s||v)},v.\u0275cmp=t.Xpm({type:v,selectors:[["ng-component"]],inputs:{onCloseClicked:"onCloseClicked",linked:"linked"},decls:0,vars:0,template:function(s,k){},encapsulation:2}),v})()},2:(xt,Se,a)=>{function t(i){if("number"==typeof i||"boolean"==typeof i)return i;let v;if("NA"===i)v=["Not Applicable"];else if("SENSITIVITYRESPONSE"===i)v=["Sensitivity","/","Response"];else{v=i.toLowerCase().replace(/_/g," ").split(" ");for(var d=0;d<v.length;d++)v[d]=v[d].charAt(0).toUpperCase()+v[d].slice(1)}return v.join(" ")}a.d(Se,{E:()=>t})},2666:(xt,Se,a)=>{function t(i){switch(i){case"ASCO":return"ASCO";case"PUBMED":return"PubMed";case"ASH":return"ASH";default:return i}}a.d(Se,{c:()=>t})},2023:(xt,Se,a)=>{a.d(Se,{f:()=>i});const t=new Map([["Assertion","#7243b5"],["ClinicalTrial","#ac3996"],["CoordinateSystem","#f68f37"],["Disease","#e62f76"],["Event","#1db8a9"],["EvidenceItem","#2a63b6"],["Gene","#07aff0"],["Therapy","#ac3996"],["MolecularProfile","#33b358"],["Phenotype","#1db8a9"],["Source","#f9ba45"],["Variant","#74d34c"],["VariantGroup","#74d34c"],["VariantType","#74d34c"],["Comment","#44d8ef"],["Event","#ffdb00"],["Flag","#e24759"],["Queue","#666699"],["Revision","#f0673a"],["Curator","#a0d8f5"],["Editor","#58a0c4"],["Admin","#58a0c4"],["Organization","#3d7b99"],["Rejected","#BBBBBB"],["Greyscale","#999999"]]);function i(v){let d="#AAAAAA";if(v){const s=t.get(v);s&&(d=s)}return d}},2024:(xt,Se,a)=>{a.d(Se,{U:()=>s});var t=a(8645),i=a(5619),v=a(9773),d=a(4716);class s{constructor(Q){this.networkErrorService=Q}mutate(Q,U,P,S){let w=new t.x,L={isSubmitting$:new i.X(!1),submitSuccess$:new i.X(!1),submitError$:new i.X([]),cleanup:()=>{w.next(),w.complete()}};return L.isSubmitting$.next(!0),Q.mutate(U,P).pipe((0,v.R)(w),(0,d.x)(()=>{L.isSubmitting$.next(!1)})).subscribe({next:Y=>{Y.data&&S&&S(Y.data)},error:Y=>{Y.graphQLErrors.length>0?L.submitError$.next(Y.graphQLErrors.map(M=>M.message)):Y.networkError&&this.networkErrorService.networkError$.next(Y.networkError),L.cleanup()},complete:()=>{L.submitError$.next([]),L.submitSuccess$.next(!0),this.networkErrorService.networkError$.next(void 0),L.cleanup()}}),L}}},9333:(xt,Se,a)=>{a.d(Se,{h:()=>v});var t=a(6814),i=a(5879);let v=(()=>{class d{}return d.\u0275fac=function(k){return new(k||d)},d.\u0275mod=i.oAB({type:d}),d.\u0275inj=i.cJS({imports:[t.ez]}),d})()},7871:(xt,Se,a)=>{a.d(Se,{P:()=>Y});var t=a(5879),i=a(6814),v=a(6109);function d(M,e){1&M&&(t.ynx(0),t._uU(1," N/A "),t.BQk())}function s(M,e){1&M&&(t.ynx(0),t._uU(1," Not applicable "),t.BQk())}function k(M,e){if(1&M&&(t.TgZ(0,"span",4),t.ynx(1,0),t.YNc(2,d,2,0,"ng-container",5),t.YNc(3,s,2,0,"ng-container",6),t.BQk(),t.qZA()),2&M){const F=t.oxw();t.xp6(1),t.Q6J("ngSwitch",F.cvcDisplayMode),t.xp6(1),t.Q6J("ngSwitchCase","small")}}function Q(M,e){1&M&&(t.ynx(0),t._uU(1," \u2013\xa0\u2013 "),t.BQk())}function U(M,e){1&M&&(t.ynx(0),t._uU(1,"Not specified"),t.BQk())}function P(M,e){if(1&M&&(t.TgZ(0,"span",7),t.ynx(1,0),t.YNc(2,Q,2,0,"ng-container",5),t.YNc(3,U,2,0,"ng-container",6),t.BQk(),t.qZA()),2&M){const F=t.oxw();t.xp6(1),t.Q6J("ngSwitch",F.cvcDisplayMode),t.xp6(1),t.Q6J("ngSwitchCase","small")}}function S(M,e){1&M&&(t.ynx(0),t._uU(1,"!?"),t.BQk())}function w(M,e){1&M&&(t.ynx(0),t._uU(1,"Unspecified"),t.BQk())}function L(M,e){if(1&M&&(t.TgZ(0,"span",8),t.ynx(1,0),t.YNc(2,S,2,0,"ng-container",5),t.YNc(3,w,2,0,"ng-container",6),t.BQk(),t.qZA()),2&M){const F=t.oxw();t.xp6(1),t.Q6J("ngSwitch",F.cvcDisplayMode),t.xp6(1),t.Q6J("ngSwitchCase","small")}}let Y=(()=>{class M{constructor(){this.cvcEmptyCategory="not-applicable",this.cvcDisplayMode="default"}}return M.\u0275fac=function(F){return new(F||M)},M.\u0275cmp=t.Xpm({type:M,selectors:[["cvc-empty-value"]],inputs:{cvcEmptyCategory:"cvcEmptyCategory",cvcDisplayMode:"cvcDisplayMode"},decls:4,vars:4,consts:[[3,"ngSwitch"],["class","empty-symbol not-applicable","nz-tooltip","","nzTooltipTitle","Value is not applicable",4,"ngSwitchCase"],["nz-tooltip","","nzTooltipTitle","Unspecified","class","empty-symbol unspecified","nz-tooltip","","nzTooltipTitle","Value is unspecified",4,"ngSwitchCase"],["nz-tooltip","","nzTooltipTitle","INVALID","class","empty-symbol invalid","nz-tooltip","","nzTooltipTitle","Error: value requires specification",4,"ngSwitchCase"],["nz-tooltip","","nzTooltipTitle","Value is not applicable",1,"empty-symbol","not-applicable"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"],["nz-tooltip","","nzTooltipTitle","Unspecified","nz-tooltip","","nzTooltipTitle","Value is unspecified",1,"empty-symbol","unspecified"],["nz-tooltip","","nzTooltipTitle","INVALID","nz-tooltip","","nzTooltipTitle","Error: value requires specification",1,"empty-symbol","invalid"]],template:function(F,R){1&F&&(t.ynx(0,0),t.YNc(1,k,4,2,"span",1),t.YNc(2,P,4,2,"span",2),t.YNc(3,L,4,2,"span",3),t.BQk()),2&F&&(t.Q6J("ngSwitch",R.cvcEmptyCategory),t.xp6(1),t.Q6J("ngSwitchCase","not-applicable"),t.xp6(1),t.Q6J("ngSwitchCase","unspecified"),t.xp6(1),t.Q6J("ngSwitchCase","invalid"))},dependencies:[i.RF,i.n9,i.ED,v.SY],styles:[".empty-symbol[_ngcontent-%COMP%]{font-style:oblique;display:inline-block;white-space:no-wrap}.empty-symbol.not-applicable[_ngcontent-%COMP%]{color:#ccc;font-weight:500}.empty-symbol.unspecified[_ngcontent-%COMP%]{display:inline-block;color:#ccc;font-weight:500;padding:0 3px}.empty-symbol.invalid[_ngcontent-%COMP%]{display:inline-block;color:#ff4d4f;font-weight:700}"]}),M})()},3517:(xt,Se,a)=>{a.d(Se,{M:()=>s});var t=a(6814),i=a(551),v=a(6109),d=a(5879);let s=(()=>{class k{}return k.\u0275fac=function(U){return new(U||k)},k.\u0275mod=d.oAB({type:k}),k.\u0275inj=d.cJS({imports:[t.ez,v.cg,i.PV]}),k})()},3670:(xt,Se,a)=>{a.d(Se,{J:()=>Pe});var t=a(5879),i=a(9111),v=a(6814),d=a(156),s=a(2851),k=a(1813),Q=a(96),U=a(4402),P=a(8213),S=a(1598),w=a(8545);function L(We,He){if(1&We&&t._UZ(0,"cvc-molecular-profile-popover",9),2&We){const Oe=t.oxw();t.Q6J("molecularProfileId",Oe.entity.entityId)}}function Y(We,He){if(1&We&&t._UZ(0,"cvc-disease-popover",10),2&We){const Oe=t.oxw();t.Q6J("diseaseId",Oe.entity.entityId)}}function M(We,He){if(1&We&&t._UZ(0,"cvc-therapy-popover",11),2&We){const Oe=t.oxw();t.Q6J("therapyId",Oe.entity.entityId)}}function e(We,He){if(1&We&&t._UZ(0,"cvc-source-popover",12),2&We){const Oe=t.oxw();t.Q6J("sourceId",Oe.entity.entityId)}}function F(We,He){if(1&We&&t._UZ(0,"cvc-phenotype-popover",13),2&We){const Oe=t.oxw();t.Q6J("phenotypeId",Oe.entity.entityId)}}function R(We,He){if(1&We&&t._UZ(0,"cvc-evidence-popover",14),2&We){const Oe=t.oxw();t.Q6J("evidenceId",Oe.entity.entityId)}}function ge(We,He){if(1&We&&t._UZ(0,"cvc-gene-popover",15),2&We){const Oe=t.oxw();t.Q6J("geneId",Oe.entity.entityId)}}function ze(We,He){if(1&We&&t._UZ(0,"cvc-variant-popover",16),2&We){const Oe=t.oxw();t.Q6J("variantId",Oe.entity.entityId)}}const K=["MolecularProfile","Disease","Therapy","Phenotype","Source","Gene","Variant","EvidenceItem"];let N=(()=>{class We{ngOnInit(){if(null==this.entity)throw new Error("entity input is required for CvcEntityTagPopoverComponent")}}return We.\u0275fac=function(Oe){return new(Oe||We)},We.\u0275cmp=t.Xpm({type:We,selectors:[["cvc-entity-tag-popover"]],inputs:{entity:"entity"},decls:9,vars:9,consts:[[3,"ngSwitch"],[3,"molecularProfileId",4,"ngSwitchCase"],[3,"diseaseId",4,"ngSwitchCase"],[3,"therapyId",4,"ngSwitchCase"],[3,"sourceId",4,"ngSwitchCase"],[3,"phenotypeId",4,"ngSwitchCase"],[3,"evidenceId",4,"ngSwitchCase"],[3,"geneId",4,"ngSwitchCase"],[3,"variantId",4,"ngSwitchCase"],[3,"molecularProfileId"],[3,"diseaseId"],[3,"therapyId"],[3,"sourceId"],[3,"phenotypeId"],[3,"evidenceId"],[3,"geneId"],[3,"variantId"]],template:function(Oe,ne){1&Oe&&(t.ynx(0,0),t.YNc(1,L,1,1,"cvc-molecular-profile-popover",1),t.YNc(2,Y,1,1,"cvc-disease-popover",2),t.YNc(3,M,1,1,"cvc-therapy-popover",3),t.YNc(4,e,1,1,"cvc-source-popover",4),t.YNc(5,F,1,1,"cvc-phenotype-popover",5),t.YNc(6,R,1,1,"cvc-evidence-popover",6),t.YNc(7,ge,1,1,"cvc-gene-popover",7),t.YNc(8,ze,1,1,"cvc-variant-popover",8),t.BQk()),2&Oe&&(t.Q6J("ngSwitch",ne.entity.entityType),t.xp6(1),t.Q6J("ngSwitchCase","MolecularProfile"),t.xp6(1),t.Q6J("ngSwitchCase","Disease"),t.xp6(1),t.Q6J("ngSwitchCase","Therapy"),t.xp6(1),t.Q6J("ngSwitchCase","Source"),t.xp6(1),t.Q6J("ngSwitchCase","Phenotype"),t.xp6(1),t.Q6J("ngSwitchCase","EvidenceItem"),t.xp6(1),t.Q6J("ngSwitchCase","Gene"),t.xp6(1),t.Q6J("ngSwitchCase","Variant"))},dependencies:[v.RF,v.n9,d._,s.I,k.p,Q.a,U.S,P._,S.Q,w.m],encapsulation:2,changeDetection:0}),We})();var V=a(4190),O=a(551),A=a(5695),x=a(6109),pe=a(7417),de=a(7334),W=a(2616),ve=a(1201);function G(We,He){}function se(We,He){if(1&We){const Oe=t.EpF();t.TgZ(0,"span",6)(1,"nz-tag",7),t.NdJ("nzCheckedChange",function(){t.CHM(Oe);const ce=t.oxw();return t.KtG(ce.cvcTagCheckedChange)})("nzOnClose",function(ce){t.CHM(Oe);const De=t.oxw();return t.KtG(De.cvcOnClose.next(ce))}),t.TgZ(2,"span",8),t.YNc(3,G,0,0,"ng-template",9),t.qZA()()()}if(2&We){const Oe=t.oxw(),ne=t.MAs(6),ce=t.MAs(8);t.xp6(1),t.Q6J("nzMode",Oe.cvcMode)("nzChecked",Oe.cvcTagChecked),t.xp6(1),t.Q6J("nzPopoverContent",Oe.cvcShowPopover&&Oe.popoverInput?ne:void 0),t.xp6(1),t.Q6J("ngTemplateOutlet",ce)}}function fe(We,He){}function be(We,He){if(1&We&&(t.TgZ(0,"span",13),t.YNc(1,fe,0,0,"ng-template",9),t.qZA()),2&We){const Oe=t.oxw(2),ne=t.MAs(8);t.Q6J("nzTooltipTitle",Oe.entity.tooltip),t.xp6(1),t.Q6J("ngTemplateOutlet",ne)}}function Ft(We,He){if(1&We){const Oe=t.EpF();t.TgZ(0,"span",10)(1,"nz-tag",11),t.NdJ("nzOnClose",function(ce){t.CHM(Oe);const De=t.oxw();return t.KtG(De.cvcOnClose.next(ce))}),t.YNc(2,be,2,2,"span",12),t.qZA()()}if(2&We){const Oe=t.oxw(),ne=t.MAs(4);t.xp6(1),t.Q6J("nzMode","closeable"),t.xp6(1),t.Q6J("ngIf",Oe.entity&&Oe.entity.tooltip)("ngIfElse",ne)}}function Dt(We,He){}function nn(We,He){if(1&We&&(t.TgZ(0,"span",13),t.YNc(1,Dt,0,0,"ng-template",9),t.qZA()),2&We){const Oe=t.oxw(2),ne=t.MAs(8);t.Q6J("nzTooltipTitle",Oe.entity.tooltip),t.xp6(1),t.Q6J("ngTemplateOutlet",ne)}}function Et(We,He){if(1&We&&(t.TgZ(0,"span",14),t.YNc(1,nn,2,2,"span",12),t.qZA()),2&We){const Oe=t.oxw(),ne=t.MAs(4);t.xp6(1),t.Q6J("ngIf",Oe.entity&&Oe.entity.tooltip)("ngIfElse",ne)}}function Ht(We,He){}function tn(We,He){if(1&We&&(t.TgZ(0,"span",8),t.YNc(1,Ht,0,0,"ng-template",9),t.qZA()),2&We){const Oe=t.oxw(),ne=t.MAs(6),ce=t.MAs(8);t.Q6J("nzPopoverContent",Oe.popoverInput?ne:void 0),t.xp6(1),t.Q6J("ngTemplateOutlet",ce)}}function un(We,He){if(1&We&&t._UZ(0,"cvc-entity-tag-popover",16),2&We){const Oe=t.oxw(2);t.Q6J("entity",Oe.popoverInput)}}function In(We,He){if(1&We&&t.YNc(0,un,1,1,"cvc-entity-tag-popover",15),2&We){const Oe=t.oxw();t.Q6J("ngIf",Oe.popoverInput)}}function Xe(We,He){if(1&We&&(t.TgZ(0,"span"),t.GkF(1,9),t.qZA()),2&We){t.oxw();const Oe=t.MAs(4);t.xp6(1),t.Q6J("ngTemplateOutlet",Oe)}}function Re(We,He){if(1&We&&(t.TgZ(0,"a",23),t.GkF(1,9),t.qZA()),2&We){t.oxw();const Oe=t.MAs(4),ne=t.oxw(2);t.Q6J("routerLink",ne.entity.link),t.xp6(1),t.Q6J("ngTemplateOutlet",Oe)}}function Ct(We,He){if(1&We&&(t._UZ(0,"span",26),t.ALo(1,"typenameToIcon"),t.ALo(2,"entityColor")),2&We){const Oe=t.oxw(4);t.Q6J("nzType",t.lcZ(1,2,Oe.typename))("nzTwotoneColor",t.lcZ(2,4,Oe.typename))}}function je(We,He){if(1&We&&(t.YNc(0,Ct,3,6,"span",24),t._UZ(1,"span",25),t.ALo(2,"highlightTypeahead")),2&We){t.oxw(2);const Oe=t.MAs(4),ne=t.oxw();t.Q6J("ngIf",ne.typename)("ngIfElse",Oe),t.xp6(1),t.Q6J("innerHtml",t.xi3(2,3,ne.entity.name,ne.cvcEmphasize),t.oJD)}}function Yt(We,He){if(1&We&&(t.ynx(0),t.YNc(1,Xe,2,1,"span",20),t.YNc(2,Re,2,2,"a",21),t.YNc(3,je,3,6,"ng-template",null,22,t.W1O),t.BQk()),2&We){const Oe=t.oxw(2);t.xp6(1),t.Q6J("ngIf",Oe.cvcDisableLink),t.xp6(1),t.Q6J("ngIf",!Oe.cvcDisableLink)}}function qt(We,He){}function vn(We,He){if(1&We&&(t.YNc(0,qt,0,0,"ng-template",9),t._uU(1)),2&We){t.oxw();const Oe=t.MAs(4),ne=t.oxw();t.Q6J("ngTemplateOutlet",Oe),t.xp6(1),t.hij(" CACHE-MISS (",ne.cvcCacheId,") ")}}function Dn(We,He){1&We&&t._UZ(0,"span",27)}function Wt(We,He){if(1&We&&(t.YNc(0,Yt,5,2,"ng-container",17),t.YNc(1,vn,2,2,"ng-template",null,18,t.W1O),t.YNc(3,Dn,1,0,"ng-template",null,19,t.W1O)),2&We){const Oe=t.MAs(2),ne=t.oxw();t.Q6J("ngIf",ne.entity)("ngIfElse",Oe)}}function It(We,He){if(1&We&&t._UZ(0,"cvc-entity-tag-popover",16),2&We){const Oe=t.oxw(2);t.Q6J("entity",Oe.popoverInput)}}function $e(We,He){if(1&We&&t.YNc(0,It,1,1,"cvc-entity-tag-popover",15),2&We){const Oe=t.oxw();t.Q6J("ngIf",Oe.popoverInput)}}const Ve=We=>void 0!==We&&We.__typename&&We.id&&void 0!==We.name;let Pe=(()=>{class We{set cvcLinkableEntity(Oe){Oe&&this.setLinkableEntity(Oe)}set cvcCacheId(Oe){Oe&&this.setCachedLinkableEntity(Oe)}constructor(Oe){this.apollo=Oe,this.cvcContext="default",this.cvcMode="default",this.cvcDisableLink=!0,this.cvcTagChecked=!1,this.cvcHasTooltip=!1,this.cvcFullWidth=!1,this.cvcShowPopover=!1,this.cvcTagCheckedChange=new t.vpe,this.cvcOnClose=new t.vpe}hasPopover(Oe){return K.includes(Oe)}setLinkableEntity(Oe){Ve(Oe)&&(this.typename=Oe.__typename,this.id=Oe.id,this.entity=Oe,this.setPopoverInput(Oe))}setCachedLinkableEntity(Oe){const[ne,ce]=Oe.split(":");if(this.typename=ne,this.id=+ce,!this.typename||!this.id)return void console.error(`entity-tag received an invalid cacheId: ${Oe}. Cache IDs must be in the format 'TYPENAME:ID'.`);let De;De=this.cvcDisableLink?this.cvcHasTooltip?{id:`${ne}:${ce}`,fragment:i.Ps`
          fragment Linkable${ne}Entity on ${ne} {
            id
            name
            tooltip
          }
        `}:{id:`${ne}:${ce}`,fragment:i.Ps`
          fragment Linkable${ne}Entity on ${ne} {
            id
            name
          }
        `}:{id:`${ne}:${ce}`,fragment:i.Ps`
          fragment Linkable${ne}Entity on ${ne} {
            id
            name
            link
          }
        `};const Ge=this.apollo.client.readFragment(De);Ve(Ge)?(this.setPopoverInput(Ge),this.entity=Ge):console.error(`entity-tag could not find cached entity ${Oe}`)}setPopoverInput(Oe){Ve(Oe)&&this.hasPopover(Oe.__typename)&&(this.popoverInput={entityId:Oe.id,entityType:Oe.__typename})}ngOnChanges(Oe){Oe.cvcMode&&"checkable"===Oe.cvcMode.currentValue&&(this.cvcDisableLink=!0),Oe.cvcContext&&"default"!==Oe.cvcContext.currentValue&&(this.cvcDisableLink=!0)}}return We.\u0275fac=function(Oe){return new(Oe||We)(t.Y36(i._M))},We.\u0275cmp=t.Xpm({type:We,selectors:[["cvc-entity-tag"]],hostVars:40,hostBindings:function(Oe,ne){2&Oe&&t.ekj("full-width",!0===ne.cvcFullWidth)("label-max",void 0!==ne.cvcTruncateLabel)("label-max-50","50px"===ne.cvcTruncateLabel)("label-max-75","75px"===ne.cvcTruncateLabel)("label-max-100","100px"===ne.cvcTruncateLabel)("label-max-125","125px"===ne.cvcTruncateLabel)("label-max-150","150px"===ne.cvcTruncateLabel)("label-max-175","175px"===ne.cvcTruncateLabel)("label-max-200","200px"===ne.cvcTruncateLabel)("label-max-250","250px"===ne.cvcTruncateLabel)("label-max-300","300px"===ne.cvcTruncateLabel)("label-max-350","350px"===ne.cvcTruncateLabel)("label-max-400","400px"===ne.cvcTruncateLabel)("label-max-450","450px"===ne.cvcTruncateLabel)("label-max-500","500px"===ne.cvcTruncateLabel)("rejected","REJECTED"===ne.cvcStatus)("accepted","ACCEPTED"===ne.cvcStatus)("submitted","SUBMITTED"===ne.cvcStatus)("new","NEW"===ne.cvcStatus)("superseded","SUPERSEDED"===ne.cvcStatus)},inputs:{cvcLinkableEntity:"cvcLinkableEntity",cvcCacheId:"cvcCacheId",cvcStatus:"cvcStatus",cvcContext:"cvcContext",cvcMode:"cvcMode",cvcEmphasize:"cvcEmphasize",cvcDisableLink:"cvcDisableLink",cvcTagChecked:"cvcTagChecked",cvcHasTooltip:"cvcHasTooltip",cvcFullWidth:"cvcFullWidth",cvcShowPopover:"cvcShowPopover",cvcTruncateLabel:"cvcTruncateLabel"},outputs:{cvcTagCheckedChange:"cvcTagCheckedChange",cvcOnClose:"cvcOnClose"},features:[t.TTD],decls:11,vars:3,consts:[["class","default",4,"ngIf"],["class","select-item",4,"ngIf"],["class","multi-select-item",4,"ngIf"],["noTooltip",""],["popoverContent",""],["tagContent",""],[1,"default"],[3,"nzMode","nzChecked","nzCheckedChange","nzOnClose"],["nz-popover","","nzPopoverTrigger","hover",3,"nzPopoverContent"],[3,"ngTemplateOutlet"],[1,"select-item"],[3,"nzMode","nzOnClose"],["nz-tooltip","",3,"nzTooltipTitle",4,"ngIf","ngIfElse"],["nz-tooltip","",3,"nzTooltipTitle"],[1,"multi-select-item"],[3,"entity",4,"ngIf"],[3,"entity"],[4,"ngIf","ngIfElse"],["cacheMiss",""],["noIcon",""],[4,"ngIf"],[3,"routerLink",4,"ngIf"],["tagLabel",""],[3,"routerLink"],["nz-icon","","nzTheme","twotone","class","tag-icon",3,"nzType","nzTwotoneColor",4,"ngIf","ngIfElse"],[1,"tag-label",3,"innerHtml"],["nz-icon","","nzTheme","twotone",1,"tag-icon",3,"nzType","nzTwotoneColor"],["nz-icon","","nzType","question-circle","nzTheme","outline",1,"tag-icon"]],template:function(Oe,ne){1&Oe&&(t.YNc(0,se,4,4,"span",0),t.YNc(1,Ft,3,3,"span",1),t.YNc(2,Et,2,2,"span",2),t.YNc(3,tn,2,2,"ng-template",null,3,t.W1O),t.YNc(5,In,1,1,"ng-template",null,4,t.W1O),t.YNc(7,Wt,5,2,"ng-template",null,5,t.W1O),t.YNc(9,$e,1,1,"ng-template",null,4,t.W1O)),2&Oe&&(t.Q6J("ngIf","default"===ne.cvcContext),t.xp6(1),t.Q6J("ngIf","select-item"===ne.cvcContext),t.xp6(1),t.Q6J("ngIf","multi-select-item"===ne.cvcContext))},dependencies:[v.O5,v.tP,V.rH,O.Ls,A.j,x.SY,pe.lU,N,de.A,W.a,ve.Z],styles:['.label-max-50[_nghost-%COMP%]   .tag-label[_ngcontent-%COMP%]{max-width:50px;overflow:hidden;text-overflow:ellipsis}.label-max-75[_nghost-%COMP%]   .tag-label[_ngcontent-%COMP%]{max-width:75px;overflow:hidden;text-overflow:ellipsis}.label-max-100[_nghost-%COMP%]   .tag-label[_ngcontent-%COMP%]{max-width:100px;overflow:hidden;text-overflow:ellipsis}.label-max-125[_nghost-%COMP%]   .tag-label[_ngcontent-%COMP%]{max-width:125px;overflow:hidden;text-overflow:ellipsis}.label-max-150[_nghost-%COMP%]   .tag-label[_ngcontent-%COMP%]{max-width:150px;overflow:hidden;text-overflow:ellipsis}.label-max-175[_nghost-%COMP%]   .tag-label[_ngcontent-%COMP%]{max-width:175px;overflow:hidden;text-overflow:ellipsis}.label-max-200[_nghost-%COMP%]   .tag-label[_ngcontent-%COMP%]{max-width:200px;overflow:hidden;text-overflow:ellipsis}.label-max-250[_nghost-%COMP%]   .tag-label[_ngcontent-%COMP%]{max-width:250px;overflow:hidden;text-overflow:ellipsis}.label-max-300[_nghost-%COMP%]   .tag-label[_ngcontent-%COMP%]{max-width:300px;overflow:hidden;text-overflow:ellipsis}.label-max-350[_nghost-%COMP%]   .tag-label[_ngcontent-%COMP%]{max-width:350px;overflow:hidden;text-overflow:ellipsis}.label-max-400[_nghost-%COMP%]   .tag-label[_ngcontent-%COMP%]{max-width:400px;overflow:hidden;text-overflow:ellipsis}.label-max-450[_nghost-%COMP%]   .tag-label[_ngcontent-%COMP%]{max-width:450px;overflow:hidden;text-overflow:ellipsis}.label-max-500[_nghost-%COMP%]   .tag-label[_ngcontent-%COMP%]{max-width:500px;overflow:hidden;text-overflow:ellipsis}.rejected[_nghost-%COMP%]   nz-tag[_ngcontent-%COMP%], .submitted[_nghost-%COMP%]   nz-tag[_ngcontent-%COMP%], .accepted[_nghost-%COMP%]   nz-tag[_ngcontent-%COMP%], .deprecated[_nghost-%COMP%]   nz-tag[_ngcontent-%COMP%]{border-right-width:2px}.rejected[_nghost-%COMP%]   nz-tag[_ngcontent-%COMP%], .deprecated[_nghost-%COMP%]   nz-tag[_ngcontent-%COMP%]{border-color:#e6e6e6;background-color:#fff;color:#999999d9}.submitted[_nghost-%COMP%]   nz-tag[_ngcontent-%COMP%]{border-color:#ffe58f}.accepted[_nghost-%COMP%]   nz-tag[_ngcontent-%COMP%]{border-color:#b7eb8f}.full-width[_nghost-%COMP%]   nz-tag[_ngcontent-%COMP%]{width:100%}.full-width[_nghost-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-label[_ngcontent-%COMP%]{width:100%}nz-tag[_ngcontent-%COMP%]{margin-right:0;margin-inline-end:4px}  -checkable{background-color:transparent;cursor:pointer}  -checkable:not(  -checkable-checked):hover{color:#1890ff}  -checkable:active,   -checkable-checked{color:#fff}  -checkable-checked{background-color:#1890ff}  -checkable:active{background-color:#096dd9}.default[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]{margin:0;padding:0 2px 0 0;margin-inline-end:4px;max-width:100%}.default[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon[_ngcontent-%COMP%]{display:inline-block;padding:3px 2px 3px 4px;margin:-3px 0}.default[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-label[_ngcontent-%COMP%]{display:inline-block;font-weight:400;margin:-3px 0 -4px;padding:3px 3px 3px 2px;line-height:1}.default[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]     i.ant-tag-close-icon.anticon-close{transition:none;margin-left:3px}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]{margin:0;padding:0 2px 0 0;margin-inline-end:4px;max-width:100%}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon[_ngcontent-%COMP%]{display:inline-block;padding:3px 2px 3px 4px;margin:-3px 0}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-label[_ngcontent-%COMP%]{display:inline-block;font-weight:400;margin:-3px 0 -4px;padding:3px 3px 3px 2px;line-height:1}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]     i.ant-tag-close-icon.anticon-close{transition:none;margin-left:3px}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-label[_ngcontent-%COMP%]{padding-right:0}.multi-select-item[_ngcontent-%COMP%]{display:inline-block;margin-top:-3px;margin-bottom:-3px;margin-left:-4px;padding-left:4px}.multi-select-item[_ngcontent-%COMP%]   .tag-icon[_ngcontent-%COMP%]:after{content:" "}.typeahead-match[_ngcontent-%COMP%]{font-weight:700}a.disabled[_ngcontent-%COMP%]{pointer-events:none}'],changeDetection:0}),We})()},3328:(xt,Se,a)=>{a.d(Se,{x:()=>ze});var t=a(6814),i=a(551),v=a(5695),d=a(2524),s=a(6109),k=a(4190),Q=a(5879);let U=(()=>{class K{}return K.\u0275fac=function(V){return new(V||K)},K.\u0275mod=Q.oAB({type:K}),K.\u0275inj=Q.cJS({imports:[t.ez]}),K})();var P=a(7417),S=a(5687),w=a(1855),L=a(9021),Y=a(2064),M=a(1332),e=a(6247),F=a(1207),R=a(6446);let ge=(()=>{class K{}return K.\u0275fac=function(V){return new(V||K)},K.\u0275mod=Q.oAB({type:K}),K.\u0275inj=Q.cJS({imports:[t.ez,Y._,S.t,e.n,F.s,M.I,w.f,L.w,R.k]}),K})(),ze=(()=>{class K{}return K.\u0275fac=function(V){return new(V||K)},K.\u0275mod=Q.oAB({type:K}),K.\u0275inj=Q.cJS({imports:[t.ez,k.Bz,i.PV,v.X,s.cg,P.$6,U,d.s,ge,U]}),K})()},4634:(xt,Se,a)=>{a.d(Se,{F:()=>R});var P,t=a(655),i=a(1791),v=a(5879),d=a(4190),s=a(6814),k=a(2669),Q=a(3903),U=a(8091);function S(ge,ze){if(1&ge&&v._UZ(0,"nz-alert",6),2&ge){v.oxw();const K=v.MAs(3),N=v.oxw();v.MGl("nzMessage","Error Submitting ",N.entityType,""),v.Q6J("nzDescription",K)}}function w(ge,ze){if(1&ge&&(v.TgZ(0,"li"),v._uU(1),v.qZA()),2&ge){const K=ze.$implicit;v.xp6(1),v.hij(" ",K," ")}}function L(ge,ze){if(1&ge&&(v.TgZ(0,"ul"),v.YNc(1,w,2,1,"li",7),v.qZA()),2&ge){const K=v.oxw().ngIf;v.xp6(1),v.Q6J("ngForOf",K)}}function Y(ge,ze){if(1&ge&&(v.ynx(0),v.YNc(1,S,1,2,"nz-alert",4),v.YNc(2,L,2,1,"ng-template",null,5,v.W1O),v.BQk()),2&ge){const K=ze.ngIf;v.xp6(1),v.Q6J("ngIf",K.length>0)}}function M(ge,ze){if(1&ge&&(v.ynx(0),v._UZ(1,"nz-alert",8),v.BQk()),2&ge){const K=v.oxw();v.xp6(1),v.MGl("nzMessage","",K.entityType," Submitted"),v.Q6J("nzDescription",K.successMessage?K.successMessage:null)}}function e(ge,ze){1&ge&&v.Hsn(0)}let R=((P=class{set mutationState(ze){this._mutationState=ze,this.currentTimer&&clearTimeout(this.currentTimer),ze&&ze.submitSuccess$.pipe((0,i.t)(this)).subscribe(K=>{K&&(this.currentTimer=setTimeout(()=>{this.redirectUrl&&this.router.navigateByUrl(this.redirectUrl)},2500))})}get mutationState(){return this._mutationState}constructor(ze){this.router=ze}ngOnInit(){}}).\u0275fac=function(ze){return new(ze||P)(v.Y36(d.F0))},P.\u0275cmp=v.Xpm({type:P,selectors:[["cvc-form-submission-status-display"]],inputs:{mutationState:"mutationState",entityType:"entityType",successMessage:"successMessage",redirectUrl:"redirectUrl"},ngContentSelectors:["*"],decls:8,vars:10,consts:[[3,"nzSpinning"],[4,"ngIf"],[4,"ngIf","ngIfElse"],["form",""],["nzType","error","nzShowIcon","",3,"nzMessage","nzDescription",4,"ngIf"],["errorList",""],["nzType","error","nzShowIcon","",3,"nzMessage","nzDescription"],[4,"ngFor","ngForOf"],["nzType","success","nzShowIcon","",3,"nzMessage","nzDescription"]],template:function(ze,K){if(1&ze&&(v.F$t(),v.TgZ(0,"nz-spin",0),v.ALo(1,"ngrxPush"),v.YNc(2,Y,4,1,"ng-container",1),v.ALo(3,"ngrxPush"),v.YNc(4,M,2,2,"ng-container",2),v.ALo(5,"ngrxPush"),v.YNc(6,e,1,0,"ng-template",null,3,v.W1O),v.qZA()),2&ze){const N=v.MAs(7);v.Q6J("nzSpinning",v.lcZ(1,4,null==K.mutationState?null:K.mutationState.isSubmitting$)),v.xp6(2),v.Q6J("ngIf",v.lcZ(3,6,null==K.mutationState?null:K.mutationState.submitError$)),v.xp6(2),v.Q6J("ngIf",v.lcZ(5,8,null==K.mutationState?null:K.mutationState.submitSuccess$))("ngIfElse",N)}},dependencies:[s.sg,s.O5,k.W,Q.r,U.fM],encapsulation:2,changeDetection:0}),P);R=(0,t.gn)([(0,i.c)()],R)},5106:(xt,Se,a)=>{a.d(Se,{g:()=>k});var t=a(6814),i=a(3903),v=a(2574),d=a(2669),s=a(5879);let k=(()=>{class Q{}return Q.\u0275fac=function(P){return new(P||Q)},Q.\u0275mod=s.oAB({type:Q}),Q.\u0275inj=s.cJS({imports:[t.ez,d.j,i.L,v.zf]}),Q})()},6683:(xt,Se,a)=>{a.d(Se,{S:()=>N2});var t=a(6223),i=a(4190),v=a(5545),d=a(19),s=a(3599),k=a(279),Q=a(6180);const U={paramKey:!0};class P{constructor(y){this.route=y}postPopulate(y){if(y.fieldGroup||y.fieldArray||!1===(y.props||{...U}).paramKey||(this.paramKey=this.getParamKey(y),!this.paramKey))return;const m=this.getRouteSub(this.route,y),j=y.hooks?.onDestroy;m&&j&&(y.hooks={...y.hooks,onDestroy:Be=>{m.unsubscribe(),j(Be)}})}getParamKey(y){const c=y.props;if("string"==typeof c.paramKey)return c.paramKey;if(y.key){if("string"==typeof y.key)return y.key;console.warn(`observe-query-param cannot use field key ${JSON.stringify(y.key)} of type ${typeof y.key} to observe a query param. Use prop.paramKey to specify a query param string, or define a string field.key.`)}}getRouteSub(y,c){const m=y.queryParams.pipe((0,Q.g)(this.paramKey)).subscribe(j=>{const Be=c.formControl,Mt=j[this.paramKey];if(!Mt)return void m.unsubscribe();let bn;try{bn=JSON.parse(Mt)}catch(Hn){return console.warn(`observe-query-param failed to parse query param ${this.paramKey} for field ${c.id}: ${Hn}`),console.warn("Note: Query values are parsed as JSON, therefore enum strings must be enclosed in double-quotes, and numeric entity IDs must be bare, unquoted."),void m.unsubscribe()}if(bn){if(Object.keys(bn).length>0&&bn.constructor===Object)return console.warn(`observe-query-param may only set primitive types or arrays of primitive types, param ${this.paramKey} is an object: ${JSON.stringify(bn)}`),void m.unsubscribe();Be.setValue(bn)}});return m}}function S(u){return{extensions:[{name:"observeQueryParam",extension:new P(u)}]}}const Y={extras:{immutable:!1,lazyRender:!0},validationMessages:[{name:"required",message:"This field is required."},{name:"minLength",message:(u,y)=>`This field has a minimum length of ${y.templateOptions?.minLength}.`},{name:"maxLength",message:(u,y)=>`This field has a maximum length of ${y.templateOptions?.maxLength}.`},{name:"min",message:(u,y)=>`This field has a minimum value of ${y.templateOptions?.min}.`},{name:"max",message:(u,y)=>`This field has a maximum value of ${y.templateOptions?.max}.`},{name:"pattern",message:(u,y)=>`This field's value must fit the pattern ${y.templateOptions?.pattern}.`},{name:"integer",message:(u,y)=>"Value must be an integer."},{name:"nucleotide",message:(u,y)=>"Value must only contain A, C, T, G, and/or /."},{name:"clinvar",message:(u,y)=>"Value must be an integer."}],validators:[{name:"integer",validation:(u,y)=>""===u.value||null==u.value||/^\d+$/.test(u.value)?null:{integer:!0}},{name:"nucleotide",validation:(u,y)=>""===u.value||null==u.value||/^[ACTG\/]+$/.test(u.value)?null:{nucleotide:!0}},{name:"clinvar",validation:(u,y)=>{for(var c of u.value)if(""!==c&&null!=c&&!/^\d+$/.test(c))return{clinvar:!0};return null}}]};var M=a(6814),e=a(5879),F=a(8091),R=a(95),ge=a(2392);function ze(u,y){if(1&u&&(e.TgZ(0,"div",9),e.GkF(1,10),e.qZA()),2&u){e.oxw();const c=e.MAs(5);e.xp6(1),e.Q6J("ngTemplateOutlet",c)}}function K(u,y){if(1&u&&(e.TgZ(0,"div",11),e.GkF(1,10),e.qZA()),2&u){e.oxw();const c=e.MAs(9);e.xp6(1),e.Q6J("ngTemplateOutlet",c)}}function N(u,y){if(1&u&&(e.TgZ(0,"div",12),e.GkF(1,10),e.qZA()),2&u){e.oxw();const c=e.MAs(7);e.xp6(1),e.Q6J("ngTemplateOutlet",c)}}function V(u,y){if(1&u&&(e.TgZ(0,"nz-form-label",17),e._UZ(1,"span",18),e.qZA()),2&u){const c=y.ngrxLet,m=e.oxw(3);e.Q6J("nzRequired",m.props.required)("nzFor",m.id)("nzNoColon",!0)("nzTooltipTitle",m.props.tooltip)("nzSpan",c.span?c.span:null),e.xp6(1),e.Q6J("nzContent",m.props.label)}}function O(u,y){if(1&u&&(e.ynx(0),e.YNc(1,V,2,6,"nz-form-label",16),e.BQk()),2&u){const c=e.oxw(2);e.xp6(1),e.Q6J("ngrxLet",c.wrapper.layout.label)}}function A(u,y){if(1&u&&(e.TgZ(0,"nz-form-control",19),e.GkF(1,null,20),e.qZA()),2&u){const c=y.ngrxLet,m=e.oxw(2),j=e.MAs(11),Be=e.MAs(13);e.Q6J("nzExtra",m.wrapper.showExtra&&!m.showError?j:void 0)("nzValidateStatus",m.errorState)("nzErrorTip",Be)("nzSpan",m.props.hideLabel?24:c.span?c.span:null)}}const x=function(u,y,c,m){return{disabled:u,error:y,required:c,valid:m}};function pe(u,y){if(1&u&&(e.TgZ(0,"nz-form-item",13),e.YNc(1,O,2,1,"ng-container",14),e.YNc(2,A,3,4,"nz-form-control",15),e.qZA()),2&u){const c=e.oxw();e.Q6J("nzGutter",c.wrapper.layout.item.gutter)("ngClass",e.l5B(4,x,c.props.disabled,c.showError,c.props.required,"VALID"===c.field.formControl.status)),e.xp6(1),e.Q6J("ngIf",c.props.label&&!0!==c.props.hideLabel),e.xp6(1),e.Q6J("ngrxLet",c.wrapper.layout.control)}}const de=function(u,y){return{disabled:u,error:y}};function W(u,y){if(1&u&&(e.TgZ(0,"nz-form-label",24),e._UZ(1,"span",25),e.qZA()),2&u){const c=e.oxw(3);e.Q6J("ngClass",e.WLB(6,de,c.props.disabled,c.showError))("nzRequired",c.props.required)("nzFor",c.id)("nzTooltipTitle",c.props.tooltip)("nzNoColon",!0),e.xp6(1),e.Q6J("nzContent",c.props.label)}}function ve(u,y){if(1&u&&(e.ynx(0),e.YNc(1,W,2,9,"nz-form-label",23),e.BQk()),2&u){const c=e.oxw(2);e.xp6(1),e.Q6J("ngrxLet",c.wrapper.layout.label)}}function G(u,y){if(1&u&&(e.TgZ(0,"nz-form-control",26),e.GkF(1,null,20),e.qZA()),2&u){const c=e.oxw(2),m=e.MAs(11),j=e.MAs(13);e.Q6J("nzExtra",c.wrapper.showExtra&&!c.showError?m:void 0)("nzValidateStatus",c.errorState)("nzErrorTip",j)}}function se(u,y){if(1&u&&(e.TgZ(0,"nz-form-item",21),e.YNc(1,ve,2,1,"ng-container",14),e.YNc(2,G,3,3,"nz-form-control",22),e.qZA()),2&u){const c=e.oxw();e.Q6J("ngClass",e.l5B(3,x,c.props.disabled,c.showError,c.props.required,"VALID"===c.field.formControl.status)),e.xp6(1),e.Q6J("ngIf",c.props.label&&!0!==c.props.hideLabel),e.xp6(1),e.Q6J("ngrxLet",c.wrapper.layout.control)}}function fe(u,y){if(1&u&&(e.ynx(0),e.TgZ(1,"nz-form-label",28),e._UZ(2,"span",25),e.qZA(),e.BQk()),2&u){const c=e.oxw(2);e.xp6(1),e.Q6J("nzRequired",c.props.required)("nzTooltipTitle",c.props.tooltip)("nzFor",c.id)("nzNoColon",!0),e.xp6(1),e.Q6J("nzContent",c.props.label)}}function be(u,y){if(1&u&&e._UZ(0,"formly-validation-message",29),2&u){const c=e.oxw(3);e.Q6J("field",c.field)}}function Ft(u,y){if(1&u&&(e.TgZ(0,"nz-form-control",26),e.GkF(1,null,20),e.YNc(3,be,1,1,"ng-template",null,8,e.W1O),e.qZA()),2&u){const c=e.MAs(4),m=e.oxw(2),j=e.MAs(11);e.Q6J("nzExtra",m.wrapper.showExtra&&!m.showError?j:void 0)("nzValidateStatus",m.errorState)("nzErrorTip",c)}}function Dt(u,y){if(1&u&&(e.TgZ(0,"nz-form-item",27),e.YNc(1,fe,3,5,"ng-container",14),e.YNc(2,Ft,5,3,"nz-form-control",22),e.qZA()),2&u){const c=e.oxw();e.Q6J("ngClass",e.l5B(3,x,c.props.disabled,c.showError,c.props.required,"VALID"===c.field.formControl.status)),e.xp6(1),e.Q6J("ngIf",c.props.label&&!0!==c.props.hideLabel),e.xp6(1),e.Q6J("ngrxLet",c.wrapper.layout.control)}}function nn(u,y){if(1&u&&e._UZ(0,"span",34),2&u){const c=e.oxw(2);e.Q6J("innerHTML",c.props.description,e.oJD)}}function Et(u,y){if(1&u&&e._UZ(0,"span",35),2&u){const c=e.oxw(2);e.Q6J("innerHTML",c.props.description,e.oJD)}}function Ht(u,y){if(1&u&&e._UZ(0,"span",36),2&u){const c=e.oxw(2);e.Q6J("innerHTML",c.props.description,e.oJD)}}function tn(u,y){if(1&u&&(e.TgZ(0,"div",30),e.ynx(1,0),e.YNc(2,nn,1,1,"span",31),e.YNc(3,Et,1,1,"span",32),e.YNc(4,Ht,1,1,"span",33),e.BQk(),e.qZA()),2&u){const c=e.oxw();e.xp6(1),e.Q6J("ngSwitch",c.props.extraType),e.xp6(1),e.Q6J("ngSwitchCase","prompt"),e.xp6(1),e.Q6J("ngSwitchCase","description")}}function un(u,y){if(1&u&&(e.TgZ(0,"div",37),e._UZ(1,"formly-validation-message",29),e.qZA()),2&u){const c=e.oxw();e.xp6(1),e.Q6J("field",c.field)}}let In=(()=>{class u extends v.n2{get errorState(){return this.showError?"error":""}constructor(){super(),this.formLayout="vertical"}ngOnInit(){try{this.wrapper={layout:{item:{gutter:[6,12],...this.props.layout?.item?this.props.layout.item:void 0},label:{span:4,...this.props.layout?.label?this.props.layout.label:void 0},control:{span:20,...this.props.layout?.control?this.props.layout?.control:void 0}},showExtra:void 0===this.props.layout?.showExtra||this.props.layout.showExtra}}catch(c){console.error(c)}this.options.formState.formLayout&&(this.formLayout=this.options.formState.formLayout)}ngAfterViewInit(){this.options.formState.formLayout&&(this.formLayout=this.options.formState.formLayout)}}return u.\u0275fac=function(c){return new(c||u)},u.\u0275cmp=e.Xpm({type:u,selectors:[["cvc-form-field-wrapper"]],features:[e.qOj],decls:14,vars:4,consts:[[3,"ngSwitch"],["class","layout-horizontal",4,"ngSwitchCase"],["class","layout-inline",4,"ngSwitchCase"],["class","layout-vertical",4,"ngSwitchCase"],["horizontalFieldWrapper",""],["verticalFieldWrapper",""],["inlineFieldWrapper",""],["descriptionTpl",""],["errorTpl",""],[1,"layout-horizontal"],[3,"ngTemplateOutlet"],[1,"layout-inline"],[1,"layout-vertical"],[1,"layout-horizontal",3,"nzGutter","ngClass"],[4,"ngIf"],[3,"nzExtra","nzValidateStatus","nzErrorTip","nzSpan",4,"ngrxLet"],[3,"nzRequired","nzFor","nzNoColon","nzTooltipTitle","nzSpan",4,"ngrxLet"],[3,"nzRequired","nzFor","nzNoColon","nzTooltipTitle","nzSpan"],["nz-typography","","nzEllipsis","",3,"nzContent"],[3,"nzExtra","nzValidateStatus","nzErrorTip","nzSpan"],["fieldComponent",""],[1,"layout-vertical",3,"ngClass"],[3,"nzExtra","nzValidateStatus","nzErrorTip",4,"ngrxLet"],[3,"ngClass","nzRequired","nzFor","nzTooltipTitle","nzNoColon",4,"ngrxLet"],[3,"ngClass","nzRequired","nzFor","nzTooltipTitle","nzNoColon"],["nz-typography","","nzEllipsis","",1,"label",3,"nzContent"],[3,"nzExtra","nzValidateStatus","nzErrorTip"],[1,"layout-inline",3,"ngClass"],[3,"nzRequired","nzTooltipTitle","nzFor","nzNoColon"],[3,"field"],[1,"form-field-description"],["class","extra-prompt",3,"innerHTML",4,"ngSwitchCase"],["class","extra-description",3,"innerHTML",4,"ngSwitchCase"],[3,"innerHTML",4,"ngSwitchDefault"],[1,"extra-prompt",3,"innerHTML"],[1,"extra-description",3,"innerHTML"],[3,"innerHTML"],[1,"cvc-form-field-validation"]],template:function(c,m){1&c&&(e.ynx(0,0),e.YNc(1,ze,2,1,"div",1),e.YNc(2,K,2,1,"div",2),e.YNc(3,N,2,1,"div",3),e.BQk(),e.YNc(4,pe,3,9,"ng-template",null,4,e.W1O),e.YNc(6,se,3,8,"ng-template",null,5,e.W1O),e.YNc(8,Dt,3,8,"ng-template",null,6,e.W1O),e.YNc(10,tn,5,3,"ng-template",null,7,e.W1O),e.YNc(12,un,2,1,"ng-template",null,8,e.W1O)),2&c&&(e.Q6J("ngSwitch",m.formLayout),e.xp6(1),e.Q6J("ngSwitchCase","horizontal"),e.xp6(1),e.Q6J("ngSwitchCase","inline"),e.xp6(1),e.Q6J("ngSwitchCase","vertical"))},dependencies:[M.mk,M.O5,M.tP,M.RF,M.n9,M.ED,F.eJ,R.t3,R.SK,s.Nx,s.iK,s.Fd,ge.ZU,v.M2],styles:['.typeahead-match[_ngcontent-%COMP%]{font-weight:700}.layout-vertical[_ngcontent-%COMP%]     nz-form-item:first-of-type{flex-wrap:nowrap;flex-direction:column}.layout-horizontal[_ngcontent-%COMP%]     nz-form-item:first-of-type{flex-direction:inherit}.layout-horizontal[_ngcontent-%COMP%]     nz-form-item:first-of-type nz-form-label{text-align:right;line-height:28px;white-space:inherit;padding:inherit}.layout-inline[_ngcontent-%COMP%]     nz-form-item:first-of-type{flex-direction:inherit}.layout-inline[_ngcontent-%COMP%]     nz-form-item:first-of-type nz-form-label{height:28px;line-height:28px;white-space:inherit;padding:inherit}.cvc-form-field-validation[_ngcontent-%COMP%], .form-field-description[_ngcontent-%COMP%]{min-height:16px;line-height:1.2;margin-top:4px}.cvc-form-field-validation[_ngcontent-%COMP%]   .extra-prompt[_ngcontent-%COMP%], .form-field-description[_ngcontent-%COMP%]   .extra-prompt[_ngcontent-%COMP%]{font-weight:400}.cvc-form-field-validation[_ngcontent-%COMP%]   .extra-description[_ngcontent-%COMP%], .form-field-description[_ngcontent-%COMP%]   .extra-description[_ngcontent-%COMP%]{font-style:oblique}.cvc-form-field-validation[_ngcontent-%COMP%]{font-weight:600}nz-form-item.layout-horizontal[_ngcontent-%COMP%]     nz-form-label:first-of-type label.ant-form-item-required{font-weight:500}nz-form-item.layout-horizontal[_ngcontent-%COMP%]     nz-form-label:first-of-type label.ant-form-item-required:before{border:1px solid #ff4d4f;height:1em;content:""}nz-form-item.layout-horizontal[_ngcontent-%COMP%]     nz-form-label:first-of-type   span.label{padding-right:4px}nz-form-item.layout-horizontal[_ngcontent-%COMP%]     nz-form-label:first-of-type.disabled label   span.label{color:#00000073}nz-form-item.layout-horizontal[_ngcontent-%COMP%]     nz-form-label:first-of-type.error label   span.label{color:#ff4d4f}nz-form-item.layout-horizontal[_ngcontent-%COMP%]     nz-form-label:first-of-type.valid label   span.label{color:#ff4d4f}nz-form-item.layout-vertical[_ngcontent-%COMP%]{background-color:#fff;border:1px solid #d9d9d9;padding:4px 8px;border-radius:6px;margin-bottom:16px}nz-form-item.layout-vertical.disabled[_ngcontent-%COMP%]{border:1px solid #f5f5f5;background-color:#f5f5f5}nz-form-item.layout-vertical[_ngcontent-%COMP%]     nz-form-label:first-of-type label.ant-form-item-required{font-weight:500}nz-form-item.layout-vertical[_ngcontent-%COMP%]     nz-form-label:first-of-type label.ant-form-item-required:before{border:1px solid #ff4d4f;height:1em;content:""}nz-form-item.layout-vertical[_ngcontent-%COMP%]     nz-form-label:first-of-type   span.label{padding-right:4px}nz-form-item.layout-vertical[_ngcontent-%COMP%]     nz-form-label:first-of-type.disabled label   span.label{color:#00000073}nz-form-item.layout-vertical[_ngcontent-%COMP%]     nz-form-label:first-of-type.error label   span.label{color:#ff4d4f}nz-form-item.layout-vertical[_ngcontent-%COMP%]     nz-form-label:first-of-type.valid label   span.label{color:#ff4d4f}nz-form-item.layout-inline[_ngcontent-%COMP%]     nz-form-label:first-of-type{text-align:right;margin-right:6px}nz-form-item.layout-inline[_ngcontent-%COMP%]     nz-form-label:first-of-type label.ant-form-item-required{font-weight:500}nz-form-item.layout-inline[_ngcontent-%COMP%]     nz-form-label:first-of-type label.ant-form-item-required:before{border:1px solid #ff4d4f;height:1em;content:""}nz-form-item.layout-inline[_ngcontent-%COMP%]     nz-form-label:first-of-type   span.label{padding-right:4px}nz-form-item.layout-inline[_ngcontent-%COMP%]     nz-form-label:first-of-type.disabled label   span.label{color:#00000073}nz-form-item.layout-inline[_ngcontent-%COMP%]     nz-form-label:first-of-type.error label   span.label{color:#ff4d4f}nz-form-item.layout-inline[_ngcontent-%COMP%]     nz-form-label:first-of-type.valid label   span.label{color:#ff4d4f}'],changeDetection:0}),u})();var Xe=a(6109),Re=a(551);const Ct={wrappers:[{name:"form-field",component:In}]};let je=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,t.UX,s.U5,R.Jb,Re.PV,Xe.cg,ge.ZJ,v.X0.forChild(Ct)]}),u})();var Yt=a(2612);const vn={types:[{name:"checkbox",wrappers:["form-field"],component:(()=>{class u extends v.fS{constructor(){super(...arguments),this.defaultOptions={props:{indeterminate:!0,hideLabel:!0}}}ngAfterViewInit(){console.log(this.props)}}return u.\u0275fac=function(){let y;return function(m){return(y||(y=e.n5z(u)))(m||u)}}(),u.\u0275cmp=e.Xpm({type:u,selectors:[["cvc-checkbox"]],features:[e.qOj],decls:2,vars:4,consts:[["nz-checkbox","",3,"nzIndeterminate","formControl","formlyAttributes","ngModelChange"]],template:function(c,m){1&c&&(e.TgZ(0,"label",0),e.NdJ("ngModelChange",function(Be){return m.props.change&&m.props.change(m.field,Be)}),e._uU(1),e.qZA()),2&c&&(e.Q6J("nzIndeterminate",m.props.indeterminate&&null==m.formControl.value)("formControl",m.formControl)("formlyAttributes",m.field),e.xp6(1),e.hij(" ",m.props.label,"\n"))},dependencies:[t.JJ,t.oH,Yt.Ie,v.JD],changeDetection:0}),u})()}]};let Dn=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,t.UX,Yt.Wr,v.X0.forChild(vn),je]}),u})();var Wt=a(5695),It=a(2524);let $e=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,Wt.X,Re.PV,Xe.cg,It.s]}),u})();var Ve=a(7248),Pe=a(824),We=a(9691);let He=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,t.UX,v.X0.forChild(),Ve.F,Re.PV,s.U5,We.LV,Pe.o7,It.s]}),u})();var Oe=a(2),ne=a(655),ce=a(1791),De=a(2181),Ge=a(5619),vt=a(7398),rn=a(4223);function _n(){var u;let y=((u=class extends v.fS{configureBaseField(){this.field?.options?.fieldChanges?(this.onModelChange$=this.field.options.fieldChanges.pipe((0,De.h)(m=>m.field.id===this.field.id),(0,rn.j)("value")),this.onValueChange$=new Ge.X(this.formControl.value?this.formControl.value:void 0),this.onModelChange$.pipe((0,ce.t)(this)).subscribe(m=>{this.onValueChange$.next(m)}),this.field.options?.formState&&this.field.options.formState.fields&&(this.state=this.field.options.formState,this.autoConfigureStateValueChanges())):console.error(`${this.field.id} could not find its fieldChanges Observable, ensure configureBaseField() is called in this field's AfterViewInit hook.`)}autoConfigureStateValueChanges(){!this.field.key&&"string"==typeof this.field.key&&console.warn(`${this.field.id} cannot auto-configure state value changes, as its field key is not a string. field.key: `,this.field.key);const m=`${this.field.key}$`;this.state&&this.state.fields[m]?(this.stateValueChange$=this.state.fields[m],this.onValueChange$.pipe((0,vt.U)(j=>null===j?void 0:j),(0,ce.t)(this)).subscribe(j=>{this.stateValueChange$&&this.stateValueChange$.next(j)})):console.warn(`${this.field.id} could not find state field ${m} on form state. State: `,this.state)}}).\u0275fac=function(){let c;return function(j){return(c||(c=e.n5z(u)))(j||u)}}(),u.\u0275prov=e.Yz7({token:u,factory:u.\u0275fac}),u);return y=(0,ne.gn)([(0,ce.c)()],y),y}var st=a(8645),it=a(2460);function lt(){return function(y){return(()=>{class m extends y{configureEnumSelectField(Be){this.selectOption$=new Ge.X([]),this.onTagClose$=new st.x,this.optionEnum$=Be.optionEnum$,this.changeDetectorRef=Be.changeDetectorRef,this.optionTemplate$=Be.optionTemplate$?Be.optionTemplate$:new Ge.X([]),this.optionTemplate$.pipe((0,it.M)(this.optionEnum$),(0,ce.t)(this)).subscribe(Mt=>{this.emitSelectOptions(Mt)}),this.onTagClose$.pipe((0,ce.t)(this)).subscribe(Mt=>{this.resetField()})}emitSelectOptions([Be,Mt]){this.selectOption$.next(Mt.map((bn,Hn)=>({label:Be[Hn]||bn,value:bn}))),this.changeDetectorRef?this.changeDetectorRef.detectChanges():console.error(`${this.field.id}'s configureEnumTagField() requires valid ChangeDetectorRef option, none detected.`)}resetField(){this.formControl.setValue(this.props.isMultiSelect?[]:void 0)}}return m.\u0275fac=function(){let j;return function(Mt){return(j||(j=e.n5z(m)))(Mt||m)}}(),m.\u0275prov=e.Yz7({token:m,factory:m.\u0275fac}),m})()}}var wt=a(836);const Lt=function Ot(u){for(var y=arguments.length,c=new Array(y>1?y-1:0),m=1;m<y;m++)c[m-1]=arguments[m];return c.reduce(function(j,Be){return Be(j)},u)},Gt=function(){return[]};let Ke=(()=>{class u{constructor(){this.cvcSelectMode="default",this.cvcPlaceholder="Select an option",this.cvcOptions=[],this.cvcShowError=!1,this.cvcDisabled=!1,this.cvcAllowClear=!0,this.cvcCustomTemplate=null,this.cvcOnFocus=new e.vpe}}return u.\u0275fac=function(c){return new(c||u)},u.\u0275cmp=e.Xpm({type:u,selectors:[["cvc-enum-select"]],inputs:{cvcFormControl:"cvcFormControl",cvcFormlyAttributes:"cvcFormlyAttributes",cvcSelectMode:"cvcSelectMode",cvcPlaceholder:"cvcPlaceholder",cvcOptions:"cvcOptions",cvcShowError:"cvcShowError",cvcDisabled:"cvcDisabled",cvcAllowClear:"cvcAllowClear",cvcModelChange:"cvcModelChange",cvcCustomTemplate:"cvcCustomTemplate"},outputs:{cvcOnFocus:"cvcOnFocus"},decls:1,vars:12,consts:[[3,"formControl","formlyAttributes","nzMode","nzPlaceHolder","nzOptions","nzCustomTemplate","nzOptionHeightPx","nzDisabled","nzAllowClear","nzFocus","ngModelChange"]],template:function(c,m){1&c&&(e.TgZ(0,"nz-select",0),e.NdJ("nzFocus",function(){return m.cvcOnFocus.next()})("ngModelChange",function(Be){return m.cvcModelChange&&m.cvcModelChange(m.cvcFormlyAttributes,Be)}),e.qZA()),2&c&&(e.ekj("ng-dirty",m.cvcShowError),e.Q6J("formControl",m.cvcFormControl)("formlyAttributes",m.cvcFormlyAttributes)("nzMode",m.cvcSelectMode)("nzPlaceHolder",m.cvcPlaceholder?m.cvcPlaceholder:"Select Value")("nzOptions",m.cvcOptions?m.cvcOptions:e.DdM(11,Gt))("nzCustomTemplate",m.cvcCustomTemplate?m.cvcCustomTemplate:null)("nzOptionHeightPx",30)("nzDisabled",m.cvcDisabled)("nzAllowClear",m.cvcAllowClear))},dependencies:[t.JJ,t.oH,v.JD,We.Vq],changeDetection:0}),u})();var J=a(6967),I=a(7334);function q(u,y){}function Me(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"span",5)(1,"nz-tag",6),e.NdJ("nzOnClose",function(j){e.CHM(c);const Be=e.oxw();return e.KtG(Be.cvcOnClose.next(j))}),e.YNc(2,q,0,0,"ng-template",7),e.qZA()()}if(2&u){const c=e.oxw(),m=e.MAs(5);e.xp6(1),e.Q6J("nzMode",c.cvcMode)("nzTooltipTitle",c.cvcTooltip)("nzChecked",c.cvcChecked),e.xp6(1),e.Q6J("ngTemplateOutlet",m)}}function _t(u,y){}function tt(u,y){if(1&u&&(e.TgZ(0,"span",8)(1,"nz-tag",9),e.YNc(2,_t,0,0,"ng-template",7),e.qZA()()),2&u){const c=e.oxw(),m=e.MAs(5);e.xp6(1),e.Q6J("nzMode","checkable")("nzChecked",c.cvcChecked),e.xp6(1),e.Q6J("ngTemplateOutlet",m)}}function Je(u,y){}function rt(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"span",10)(1,"nz-tag",11),e.NdJ("nzOnClose",function(j){e.CHM(c);const Be=e.oxw();return e.KtG(Be.cvcOnClose.next(j))}),e.YNc(2,Je,0,0,"ng-template",7),e.qZA()()}if(2&u){e.oxw();const c=e.MAs(5);e.xp6(1),e.Q6J("nzMode","closeable"),e.xp6(1),e.Q6J("ngTemplateOutlet",c)}}function Nt(u,y){}function Tt(u,y){if(1&u&&(e.TgZ(0,"span",12)(1,"nz-tag",13),e.YNc(2,Nt,0,0,"ng-template",7),e.qZA()()),2&u){const c=e.oxw(),m=e.MAs(5);e.xp6(1),e.Q6J("nzMode","default")("nzTooltipTitle",c.cvcTooltip),e.xp6(1),e.Q6J("ngTemplateOutlet",m)}}const mn=function(u){return{"tag-icon-large":u}};function Ze(u,y){if(1&u&&(e._UZ(0,"i",16),e.ALo(1,"evidenceEnumDisplay")),2&u){const c=e.oxw(2);e.Q6J("nzType",!0===c.cvcShowIcon?e.xi3(1,5,c.cvcAttrValue,"icon-name"):c.cvcShowIcon)("nzTwotoneColor",c.cvcIconColor)("nzTheme",c.cvcIconTheme)("ngClass",e.VKq(8,mn,!0===c.cvcZoomIcon)),e.uIk("style","color: "+c.cvcIconColor,e.Ckj)}}function ut(u,y){if(1&u&&(e._UZ(0,"span",17),e.ALo(1,"highlightTypeahead"),e.ALo(2,"evidenceEnumDisplay")),2&u){const c=e.oxw(2);e.Q6J("innerHtml",e.xi3(1,1,e.xi3(2,4,c.cvcAttrValue,"display-string"===c.cvcShowLabel?c.cvcShowLabel:"short-string"),c.cvcEmphasize),e.oJD)}}function le(u,y){if(1&u&&(e.YNc(0,Ze,2,10,"i",14),e.YNc(1,ut,3,7,"span",15)),2&u){const c=e.oxw();e.Q6J("ngIf",c.cvcAttrValue&&c.cvcShowIcon),e.xp6(1),e.Q6J("ngIf",c.cvcShowLabel)}}let ye=(()=>{class u{constructor(){this.cvcShowLabel="display-string",this.cvcShowIcon=!0,this.cvcZoomIcon=!1,this.cvcContext="default",this.cvcMode="default",this.cvcChecked=!1,this.cvcIconColor="#797979",this.cvcLabelColor="#434343",this.cvcIconTheme="outline",this.cvcFullWidth=!1,this.cvcOnClose=new e.vpe}ngOnChanges(c){c.cvcContext&&"compact"===c.cvcContext.currentValue&&(this.cvcShowIcon=!0,this.cvcShowLabel=!1,this.cvcZoomIcon=!0)}}return u.\u0275fac=function(c){return new(c||u)},u.\u0275cmp=e.Xpm({type:u,selectors:[["cvc-attribute-tag"]],hostVars:2,hostBindings:function(c,m){2&c&&e.ekj("full-width",!0===m.cvcFullWidth)},inputs:{cvcAttrValue:"cvcAttrValue",cvcShowLabel:"cvcShowLabel",cvcShowIcon:"cvcShowIcon",cvcZoomIcon:"cvcZoomIcon",cvcTooltip:"cvcTooltip",cvcContext:"cvcContext",cvcMode:"cvcMode",cvcChecked:"cvcChecked",cvcEmphasize:"cvcEmphasize",cvcIconColor:"cvcIconColor",cvcLabelColor:"cvcLabelColor",cvcIconTheme:"cvcIconTheme",cvcFullWidth:"cvcFullWidth"},outputs:{cvcOnClose:"cvcOnClose"},features:[e.TTD],decls:6,vars:4,consts:[["class","default",4,"ngIf"],["class","menu-item",4,"ngIf"],["class","select-item",4,"ngIf"],["class","compact",4,"ngIf"],["tagContent",""],[1,"default"],["nz-tooltip","",3,"nzMode","nzTooltipTitle","nzChecked","nzOnClose"],[3,"ngTemplateOutlet"],[1,"menu-item"],[3,"nzMode","nzChecked"],[1,"select-item"],[3,"nzMode","nzOnClose"],[1,"compact"],["nz-tooltip","",3,"nzMode","nzTooltipTitle"],["nz-icon","","class","tag-icon",3,"nzType","nzTwotoneColor","nzTheme","ngClass",4,"ngIf"],["class","tag-label",3,"innerHtml",4,"ngIf"],["nz-icon","",1,"tag-icon",3,"nzType","nzTwotoneColor","nzTheme","ngClass"],[1,"tag-label",3,"innerHtml"]],template:function(c,m){1&c&&(e.YNc(0,Me,3,4,"span",0),e.YNc(1,tt,3,3,"span",1),e.YNc(2,rt,3,2,"span",2),e.YNc(3,Tt,3,3,"span",3),e.YNc(4,le,2,2,"ng-template",null,4,e.W1O)),2&c&&(e.Q6J("ngIf","default"===m.cvcContext),e.xp6(1),e.Q6J("ngIf","menu-item"===m.cvcContext),e.xp6(1),e.Q6J("ngIf","select-item"===m.cvcContext),e.xp6(1),e.Q6J("ngIf","compact"===m.cvcContext))},dependencies:[M.mk,M.O5,M.tP,Wt.j,Re.Ls,Xe.SY,J.Do,I.A],styles:['.full-width[_nghost-%COMP%]{width:100%}.full-width[_nghost-%COMP%]   nz-tag[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]   nz-tag[_ngcontent-%COMP%]{margin-right:0;margin-inline-end:4px}.default[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]{margin:0;padding:0 2px 0 0;margin-inline-end:4px;max-width:100%}.default[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon[_ngcontent-%COMP%], .default[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon-large[_ngcontent-%COMP%]{display:inline-block}.default[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon[_ngcontent-%COMP%]{padding:3px 2px 3px 4px;margin:-3px 0}.default[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon-large[_ngcontent-%COMP%]{padding:3px 2px 3px 4px;margin:-3px 0}.default[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon-large[_ngcontent-%COMP%]     svg{transform:scale(1.25)}.default[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-label[_ngcontent-%COMP%]{display:inline-block;margin:-3px 0 -4px;padding:3px 3px 3px 2px;line-height:1}.default[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]     i.ant-tag-close-icon.anticon-close{transition:none;margin-left:3px}.compact[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]{margin:0;padding:0 2px 0 0;margin-inline-end:4px;max-width:100%}.compact[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon[_ngcontent-%COMP%], .compact[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon-large[_ngcontent-%COMP%]{display:inline-block}.compact[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon[_ngcontent-%COMP%]{padding:3px 2px 3px 4px;margin:-3px 0}.compact[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon-large[_ngcontent-%COMP%]{padding:3px 2px 3px 4px;margin:-3px 0}.compact[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon-large[_ngcontent-%COMP%]     svg{transform:scale(1.25)}.compact[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-label[_ngcontent-%COMP%]{display:inline-block;margin:-3px 0 -4px;padding:3px 3px 3px 2px;line-height:1}.compact[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]     i.ant-tag-close-icon.anticon-close{transition:none;margin-left:3px}.menu-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]{background-color:#fff}.menu-item[_ngcontent-%COMP%]   nz-tag.ant-tag-checkable[_ngcontent-%COMP%]{border:1px solid #d9d9d9}.menu-item[_ngcontent-%COMP%]   nz-tag.ant-tag-checkable[_ngcontent-%COMP%]:active{background-color:#e6f7ff}.menu-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]:not(.menu-item   nz-tag.ant-tag-checkable-checked)[_ngcontent-%COMP%]:hover{color:#000000d9;border-color:#1890ff}.menu-item[_ngcontent-%COMP%]   nz-tag.ant-tag-checkable-checked[_ngcontent-%COMP%]{border:transparent;background-color:#fff;color:#000000d9}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]{margin:0;padding:0 2px 0 0;margin-inline-end:4px;max-width:100%}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon[_ngcontent-%COMP%], .select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon-large[_ngcontent-%COMP%]{display:inline-block}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon[_ngcontent-%COMP%]{padding:3px 2px 3px 4px;margin:-3px 0}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon-large[_ngcontent-%COMP%]{padding:3px 2px 3px 4px;margin:-3px 0}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon-large[_ngcontent-%COMP%]     svg{transform:scale(1.25)}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-label[_ngcontent-%COMP%]{display:inline-block;margin:-3px 0 -4px;padding:3px 3px 3px 2px;line-height:1}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]     i.ant-tag-close-icon.anticon-close{transition:none;margin-left:3px}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]{background:#f5f5f5;border:1px solid #f0f0f0}.multi-select-item[_ngcontent-%COMP%]{display:inline-block;margin-top:-3px;margin-bottom:-3px;margin-left:-4px;padding-left:4px}.multi-select-item[_ngcontent-%COMP%]   .tag-icon[_ngcontent-%COMP%]:after{content:" "}.typeahead-match[_ngcontent-%COMP%]{font-weight:700}'],changeDetection:0}),u})();const mt=["optionTemplates"];function Ae(u,y){if(1&u&&e._UZ(0,"cvc-attribute-tag",4),2&u){const c=e.oxw().$implicit;e.Q6J("cvcAttrValue",c)}}function at(u,y){1&u&&(e.ynx(0),e.YNc(1,Ae,1,1,"ng-template",null,3,e.W1O),e.BQk())}function Bt(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"div",5)(1,"cvc-attribute-tag",6),e.NdJ("cvcOnClose",function(j){e.CHM(c);const Be=e.oxw();return e.KtG(Be.onTagClose$.next(j))}),e.qZA()()}if(2&u){const c=y.$implicit,m=e.oxw();e.xp6(1),e.Q6J("cvcAttrValue",c.nzValue)("cvcContext",m.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",m.props.isMultiSelect?"default":"closeable")}}const ln={Evidence:{PREDICTIVE:{SUPPORTS:"Experiment or study supports the variant's response to a drug",DOES_NOT_SUPPORT:"Experiment or study does not support, or was inconclusive of an interaction between the variant and a drug"},DIAGNOSTIC:{SUPPORTS:"Experiment or study supports the variant's impact on the diagnosis of disease or subtype",DOES_NOT_SUPPORT:"Experiment or study does not support the variant's impact on diagnosis of disease or subtype"},PROGNOSTIC:{SUPPORTS:"Experiment or study supports the variant's impact on prognostic outcome",DOES_NOT_SUPPORT:"Experiment or study does not support a prognostic association between variant and outcome"},PREDISPOSING:{SUPPORTS:"Suggests a pathogenic or a protective role for a germline variant in cancer",DOES_NOT_SUPPORT:"Supports a benign (for Predisposition) or lack of protective (for Protectiveness) role for a germline variant in cancer."},FUNCTIONAL:{SUPPORTS:"Experiment or study supports the variant causing alteration or non-alteration of the gene product function",DOES_NOT_SUPPORT:"Experiment or study does not support the variant causing alteration or non-alteration of the gene product function"},ONCOGENIC:{NA:"Not Applicable for Oncogenic Evidence Type.",SUPPORTS:"Supports an oncogenic or protective role for a somatic variant.",DOES_NOT_SUPPORT:"Supports a benign (for Oncogenicity) or lack of protective (for Protectiveness) role for a somatic variant in cancer."}},Assertion:{PREDICTIVE:{SUPPORTS:"Support the variant's response to a drug",DOES_NOT_SUPPORT:"Does not support, or was inconclusive of an interaction between the variant and a drug"},DIAGNOSTIC:{SUPPORTS:"Supports the variant's impact on the diagnosis of disease or subtype",DOES_NOT_SUPPORT:"Does not support the variant's impact on diagnosis of disease or subtype"},PROGNOSTIC:{SUPPORTS:"Supports the variant's impact on prognostic outcome",DOES_NOT_SUPPORT:"Does not support a prognostic association between variant and outcome"},PREDISPOSING:{SUPPORTS:"Suggests a pathogenic or a protective role for a germline variant in cancer",DOES_NOT_SUPPORT:"Does not support an association between the variant and disease causation"},FUNCTIONAL:{SUPPORTS:"Supports the variant causing alteration or non-alteration of the gene product function",DOES_NOT_SUPPORT:"Does not support the variant causing alteration or non-alteration of the gene product function"},ONCOGENIC:{SUPPORTS:"Supports an oncogenic or protective role for a somatic variant",DOES_NOT_SUPPORT:"Does not support an association between the variant and disease causation"}}},At=Lt(_n(),lt()),ft={types:[{name:"direction-select",wrappers:["form-field"],component:(()=>{class u extends At{constructor(c){super(),this.cdr=c,this.defaultOptions={props:{label:"Direction",labelFn:m=>`${m} Direction`,required:!0,isMultiSelect:!1,placeholder:"Select Entity Direction",placeholderFn:(m,j)=>`Select ${j?j+" ":""}${m} Direction`,requireTypePromptFn:m=>`Select ${m} Type to select its Direction`,formMode:"add"}},this.directionEnum$=new Ge.X([])}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEnumSelectField({optionEnum$:this.directionEnum$,optionTemplate$:this.optionTemplate$,changeDetectorRef:this.cdr})}configureStateConnections(){if(!this.state)return console.error(`${this.field.id} requires a form state to populate its options, none was found.`),void(this.placeholder$=new Ge.X("ERROR: Form state not found"));if(this.props.label=this.props.labelFn(this.state.entityName),this.props.tooltip=`An indicator of whether the ${this.state.entityName} statement supports or refutes the clinical significance of an event.`,this.placeholder$=new Ge.X(this.props.placeholderFn(this.state.entityName)),!this.state.enums.direction$)return void console.error(`${this.field.id} could not find form state's direction$ to populate select.`);this.state.enums.direction$.pipe((0,ce.t)(this)).subscribe(m=>{this.directionEnum$.next(m)}),this.optionTemplates||console.info(`${this.field.id} could not find its optionTemplates QueryList to populate its select options, so simple text labels will be displayed.`),this.optionTemplate$=this.optionTemplates?.changes.pipe((0,vt.U)(m=>m.map(j=>j)));const c=`${this.state.entityName.toLowerCase()}Type$`;this.state.fields[c]?(this.onEntityType$=this.state.fields[c],this.onEntityType$.pipe((0,wt.T)("add"===this.props.formMode?0:1),(0,ce.t)(this)).subscribe(m=>{m?(this.props.disabled=!1,this.props.description=void 0,this.props.extraType=void 0,this.placeholder$.next(this.props.placeholderFn(this.state.entityName,(0,Oe.E)(m)))):(this.props.disabled=!0,this.props.description=this.props.requireTypePromptFn(this.state.entityName),this.props.extraType="prompt"),this.formControl.value&&this.formControl.setValue(void 0)}),this.onValueChange$.pipe((0,it.M)(this.onEntityType$),(0,ce.t)(this)).subscribe(([m,j])=>{!j||!m||!this.state||(this.props.extraType="description",this.props.description=ln[this.state.entityName][j][m])})):console.error(`${this.field.id} could not find form state's ${c} to populate Direction options.`)}}return u.\u0275fac=function(c){return new(c||u)(e.Y36(e.sBO))},u.\u0275cmp=e.Xpm({type:u,selectors:[["cvc-direction-select"]],viewQuery:function(c,m){if(1&c&&e.Gf(mt,5,e.Rgc),2&c){let j;e.iGM(j=e.CRH())&&(m.optionTemplates=j)}},features:[e.qOj],decls:7,vars:15,consts:[[3,"cvcFormControl","cvcFormlyAttributes","cvcSelectMode","cvcPlaceholder","cvcCustomTemplate","cvcOptions","cvcShowError","cvcDisabled"],[4,"ngFor","ngForOf"],["selectedTemplate",""],["optionTemplates",""],[3,"cvcAttrValue"],[1,"ant-select-selection-item-content"],[3,"cvcAttrValue","cvcContext","cvcMode","cvcOnClose"]],template:function(c,m){if(1&c&&(e._UZ(0,"cvc-enum-select",0),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.YNc(3,at,3,0,"ng-container",1),e.ALo(4,"ngrxPush"),e.YNc(5,Bt,2,3,"ng-template",null,2,e.W1O)),2&c){const j=e.MAs(6);e.Q6J("cvcFormControl",m.formControl)("cvcFormlyAttributes",m.field)("cvcSelectMode",m.props.isMultiSelect?"multiple":"default")("cvcPlaceholder",e.lcZ(1,9,m.placeholder$))("cvcCustomTemplate",j)("cvcOptions",e.lcZ(2,11,m.selectOption$))("cvcShowError",m.showError)("cvcDisabled",m.props.disabled),e.xp6(3),e.Q6J("ngForOf",e.lcZ(4,13,m.directionEnum$))}},dependencies:[M.sg,Ke,ye,F.fM],changeDetection:0}),u})()}]};let oe=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,t.UX,v.X0.forChild(ft),je,He,$e]}),u})();var B=a(5717),Te=a(3328),Ye=a(2574),yt=a(3903);let Kt=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,t.UX,v.X0.forChild(),yt.L,Re.PV,We.LV,Pe.o7,s.U5,ge.ZJ,B.ic,Ye.zf,Te.x,It.s]}),u})();var Zt=a(5106),On=a(2840),zn=a(67),Wn=a(7417),Mo=a(7328),Co=a(5592),$o=a(2096),Ko=a(4664),ko=a(3997),So=a(9666),eo=a(2428),Jo=a(4911),Lo=a(9397),zo=a(5676),vo=a(2572);function ci(...u){let y=u[0],c=u[1];if(0===y.length)return(0,$o.of)(c?c([]):[]);const m=y.slice();return c&&m.push((...j)=>c(j)),vo.a.apply(null,m)}function ni(){return function(y){return(()=>{class m extends y{configureEntitySelectField(Be){if(this.typeaheadQuery=Be.typeaheadQuery,this.tagQuery=Be.tagQuery,this.getTypeaheadVars=Be.getTypeaheadVarsFn,this.getTypeahedResults=Be.getTypeaheadResultsFn,this.getTagQueryVars=Be.getTagQueryVarsFn,this.getTagQueryResults=Be.getTagQueryResultsFn,this.getSelectedItemOption=Be.getSelectedItemOptionFn,this.getSelectOptions=Be.getSelectOptionsFn,this.typeaheadParam$=Be.typeaheadParam$,this.typeaheadParamName$=Be.typeaheadParamName$,this.selectOpen$=Be.selectOpen$||new Mo.t,this.selectComponent=Be.selectComponent,this.minSearchStrLength=Be.minSearchStrLength||0,this.cdr=Be.changeDetectorRef,this.onSearch$=new Ge.X(void 0),this.isLoading$=new Co.y,this.result$=new Ge.X([]),this.onPopulate$=new st.x,this.onTagClose$=new st.x,this.onOpenChange$=new st.x,this.onCreate$=new st.x,this.selectOption$=new Ge.X(void 0),this.response$=this.onSearch$.pipe((0,wt.T)(1),(0,De.h)(zo.ep),(0,De.h)(Mt=>0===this.minSearchStrLength||Mt.length>=this.minSearchStrLength),(0,it.M)(void 0!==this.typeaheadParam$?this.typeaheadParam$:(0,$o.of)(void 0)),(0,Ko.w)(([Mt,bn])=>{const Hn=this.getTypeaheadVars(Mt,bn),Bo=er=>(this.queryRef=this.typeaheadQuery.watch(er),this.isLoading$=this.queryRef.valueChanges.pipe((0,rn.j)("loading"),(0,ko.x)()),this.queryRef.valueChanges),Wi=er=>(0,So.D)(this.queryRef.refetch(er));return(0,eo.s)(()=>void 0===this.queryRef,(0,Jo.P)(()=>Bo(Hn)),(0,Jo.P)(()=>Wi(Hn)))})),this.onOpenChange$.subscribe(Mt=>{Mt&&this.onSearch$.next("")}),this.response$.pipe((0,De.h)(Mt=>void 0!==Mt.data),(0,vt.U)(Mt=>this.getTypeahedResults(Mt)),(0,ce.t)(this)).subscribe(Mt=>{this.result$.next(Mt),0===Mt.length&&this.selectOption$.next([]),this.cdr.detectChanges()}),this.optionTemplates?this.optionTemplates.changes.pipe((0,it.M)(this.result$),(0,ce.t)(this)).subscribe(([Mt,bn])=>{const Hn=this.getSelectOptions(bn,Mt);this.selectOption$.next(Hn),this.cdr.detectChanges()}):(console.warn(`${this.field.id} could not find reference to optionTemplates ViewChildren, options will only show entity name text.`),this.result$.pipe((0,ce.t)(this)).subscribe(Mt=>{this.selectOption$.next(Mt.map(bn=>({label:bn.name,value:bn.id})))})),this.onPopulate$.pipe((0,De.h)(zo.ep),(0,Ko.w)(Mt=>ci(this.getTagQueries(Mt))),(0,vt.U)(Mt=>Mt.map(bn=>this.getTagQueryResults(bn))),(0,Lo.b)(Mt=>{this.result$.next(Mt)}),(0,ce.t)(this)).subscribe(Mt=>{let bn;if(this.field.props&&this.field.props.isMultiSelect){const Hn=[];Mt.forEach(Bo=>Hn.push(Bo?.id||void 0)),bn=Hn}else bn=Mt[0].id;this.formControl.setValue(bn),this.selectOpen$.next(!1)}),this.formControl.value){const Mt=this.formControl.value;if(Object.keys(Mt).length>0&&Mt.constructor===Object)return void console.error(`${this.field.id} prepopulated value must be a primitive or array of primitives, value is an object:`,Mt);this.onPopulate$.next(Mt)}this.onTagClose$.pipe((0,ce.t)(this)).subscribe(Mt=>{this.resetField()})}getTagQueries(Be){return"number"==typeof Be&&(Be=[Be]),Be.map(bn=>this.tagQuery.fetch(this.getTagQueryVars(bn),{fetchPolicy:"cache-first"}).pipe((0,De.h)(Hn=>!!Hn.data)))}resetField(){this.formControl.setValue(void 0),this.result$&&this.result$.next([])}}return m.\u0275fac=function(){let j;return function(Mt){return(j||(j=e.n5z(m)))(Mt||m)}}(),m.\u0275prov=e.Yz7({token:m,factory:m.\u0275fac}),m})()}}var ki,Ei=a(8180),Nn=a(313),xi=a(8753),Ii=a(6321),Di=a(7081);function br(u,y){1&u&&e._UZ(0,"span",5),2&u&&e.Q6J("nzType","loading")}function Nr(u,y){if(1&u&&(e.ynx(0),e._uU(1),e.BQk()),2&u){const c=e.oxw(2);e.xp6(1),e.hij(" ",c.notFoundDisplay.message," ")}}const Mi=function(u,y,c){return{$implicit:u,createMsg:y,model:c}};function lr(u,y){if(1&u&&e.GkF(0,6),2&u){const c=e.oxw(2);e.Q6J("ngTemplateOutlet",c.cvcAddEntity)("ngTemplateOutletContext",e.kEZ(2,Mi,c.notFoundDisplay.searchStr,c.notFoundDisplay.message,c.cvcAddEntityModel))}}function Zi(u,y){if(1&u&&(e.YNc(0,br,1,1,"span",2),e.YNc(1,Nr,2,1,"ng-container",3),e.YNc(2,lr,1,6,"ng-container",4)),2&u){const c=e.oxw();e.Q6J("ngIf",c.notFoundDisplay.showSpinner),e.xp6(1),e.Q6J("ngIf",!c.notFoundDisplay.showAddForm),e.xp6(1),e.Q6J("ngIf",c.notFoundDisplay.showAddForm)}}const vr=function(){return[]},tr={search:(u,y,c)=>`Searching ${u} matching "${y}"...`,searchAll:(u,y,c)=>`Listing all ${u}...`,searchParam:(u,y,c)=>`Searching ${c} ${u} matching "${y}"...`,searchParamAll:(u,y,c)=>`Listing all ${c} ${u}...`,searchEnterQuery:(u,y,c,m)=>`Enter at least ${m} characters to search ${c} ${u}`,searchEnterQueryAll:(u,y,c,m)=>`Enter at least least ${m} characters to search ${u}`,empty:(u,y,c)=>`No ${u} found matching "${y}"`,emptyAll:(u,y,c)=>`No ${u} found.`,emptyParam:(u,y,c)=>`No ${c} ${u} found matching "${y}"`,emptyParamAll:(u,y,c)=>`No ${c} ${u} found`};let Kn=((ki=class{constructor(y){this.cdr=y,this.cvcEntityName={singular:"Entity",plural:"Entities"},this.cvcSelectMode="default",this.cvcLoading=!1,this.cvcOptions=void 0,this.cvcShowError=!1,this.cvcDisabled=!1,this.cvcAllowClear=!0,this.cvcBorderless=!1,this.cvcShowArrow=!1,this.cvcAutoClearSearchValue=!0,this.cvcSuffixIcon="search",this.cvcCustomTemplate=null,this.cvcDropdownExtra=null,this.cvcAddEntity=null,this.cvcMinSearchStrLength=0,this.cvcOnOpenChange=new e.vpe,this.cvcOnSearch=(new e.vpe).pipe((0,xi.p)(300,Ii.z,{leading:!1,trailing:!0}),(0,Di.d)(1)),this.cvcOnModelChange=new e.vpe,this.cvcSelectComponent=new e.vpe,this.messageOptions=tr,this.onParamName$=new Ge.X(void 0),this.onOption$=new Ge.X([]),this.onOpenChange$=new Ge.X(!1),this.onLoading$=new Ge.X(!1),this.previousIsOpen=!1}ngAfterViewInit(){this.cvcSelectMessages&&(this.messageOptions={...this.messageOptions,...this.cvcSelectMessages}),this.nzSelectComponent?(this.cvcSelectComponent.next(this.nzSelectComponent),this.notFoundDisplay={searchStr:"",showSpinner:!0,showAddForm:!1,message:`Searching ${this.cvcEntityName.plural}...`},this.onOpenChange$.pipe((0,ce.t)(this)).subscribe(y=>{this.cvcOnOpenChange.next(y)}),(0,vo.a)([this.onOpenChange$,this.cvcOnSearch,this.onParamName$,this.onOption$,this.onLoading$.pipe((0,ko.x)())]).pipe((0,vt.U)(([y,c,m,j,Be])=>{const Mt=this.cvcEntityName.plural,bn=this.cvcMinSearchStrLength,Hn=null!==this.cvcAddEntity,Bo=!1===this.previousIsOpen&&!0===y;return this.previousIsOpen=y,Bo?this.getSelectInitDisplay(Mt,bn,m):Be&&c.length>=bn?this.getSelectSearchingDisplay(c,Mt,bn,m):y&&!Be&&c.length>=bn&&0===j.length?this.getSelectEmptyDisplay(c,Mt,m,Hn):{searchStr:"",showSpinner:!1,showAddForm:!1,message:""}}),(0,Lo.b)(y=>{this.notFoundDisplay=y}),(0,ce.t)(this)).subscribe()):console.error(`${this.cvcEntityName.singular} entity-select could not gain reference to its nzSelectComponent, aborting AfterViewInit()`)}getSelectInitDisplay(y,c,m){let j=this.messageOptions.searchAll,Be=!1;return 0==c?(Be=!0,j=void 0===m?this.messageOptions.searchAll:this.messageOptions.searchParamAll):c>0&&(Be=!1,j=void 0===m?this.messageOptions.searchEnterQueryAll:this.messageOptions.searchEnterQuery),{message:j(y,"",m,c),showSpinner:Be,showAddForm:!1,searchStr:""}}getSelectSearchingDisplay(y,c,m,j){let Be=this.messageOptions.searchAll;return Be=void 0===j?y.length>0?this.messageOptions.search:this.messageOptions.searchAll:y.length>0?this.messageOptions.searchParam:this.messageOptions.searchParamAll,{message:Be(c,y,j),showSpinner:!0,showAddForm:!1,searchStr:y}}getSelectEmptyDisplay(y,c,m,j){let Be=this.messageOptions.empty;return Be=void 0===m?y.length>0?this.messageOptions.empty:this.messageOptions.emptyAll:y.length>0?this.messageOptions.emptyParam:this.messageOptions.emptyParamAll,{message:Be(c,y,m),showSpinner:!1,showAddForm:j,searchStr:y}}ngOnChanges(y){if(y.cvcParamName&&this.onParamName$.next(y.cvcParamName.currentValue),y.cvcOptions){const c=y.cvcOptions.currentValue;void 0!==c&&this.onOption$.next(c)}if(y.cvcLoading){const c=y.cvcLoading.currentValue;void 0!==c&&this.onLoading$.next(c)}}}).\u0275fac=function(y){return new(y||ki)(e.Y36(e.sBO))},ki.\u0275cmp=e.Xpm({type:ki,selectors:[["cvc-entity-select"]],viewQuery:function(y,c){if(1&y&&e.Gf(We.Vq,5),2&y){let m;e.iGM(m=e.CRH())&&(c.nzSelectComponent=m.first)}},inputs:{cvcFormControl:"cvcFormControl",cvcFormlyAttributes:"cvcFormlyAttributes",cvcEntityName:"cvcEntityName",cvcSelectMessages:"cvcSelectMessages",cvcSelectMode:"cvcSelectMode",cvcPlaceholder:"cvcPlaceholder",cvcLoading:"cvcLoading",cvcOptions:"cvcOptions",cvcResults:"cvcResults",cvcShowError:"cvcShowError",cvcDisabled:"cvcDisabled",cvcAllowClear:"cvcAllowClear",cvcBorderless:"cvcBorderless",cvcShowArrow:"cvcShowArrow",cvcAutoClearSearchValue:"cvcAutoClearSearchValue",cvcSuffixIcon:"cvcSuffixIcon",cvcCustomTemplate:"cvcCustomTemplate",cvcDropdownExtra:"cvcDropdownExtra",cvcParamName:"cvcParamName",cvcAddEntity:"cvcAddEntity",cvcAddEntityModel:"cvcAddEntityModel",cvcSelectOpen:"cvcSelectOpen",cvcMinSearchStrLength:"cvcMinSearchStrLength"},outputs:{cvcOnOpenChange:"cvcOnOpenChange",cvcOnSearch:"cvcOnSearch",cvcOnModelChange:"cvcOnModelChange",cvcSelectComponent:"cvcSelectComponent"},features:[e.TTD],decls:3,vars:21,consts:[["nzShowSearch","","nzServerSearch","","nzAllowClear","",3,"nzDropdownMatchSelectWidth","formControl","formlyAttributes","nzMode","nzPlaceHolder","nzCustomTemplate","nzOptionHeightPx","nzDisabled","nzLoading","nzAllowClear","nzBorderless","nzSuffixIcon","nzShowArrow","nzAutoClearSearchValue","nzOptions","nzDropdownRender","nzNotFoundContent","nzOpen","nzOpenChange","nzOnSearch","ngModelChange"],["searchMessages",""],["nz-icon","",3,"nzType",4,"ngIf"],[4,"ngIf"],[3,"ngTemplateOutlet","ngTemplateOutletContext",4,"ngIf"],["nz-icon","",3,"nzType"],[3,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(y,c){if(1&y&&(e.TgZ(0,"nz-select",0),e.NdJ("nzOpenChange",function(j){return c.onOpenChange$.next(j)})("nzOnSearch",function(j){return c.cvcOnSearch.next(j)})("ngModelChange",function(j){return c.cvcOnModelChange.next(j)}),e.qZA(),e.YNc(1,Zi,3,3,"ng-template",null,1,e.W1O)),2&y){const m=e.MAs(2);e.ekj("ng-dirty",c.cvcShowError),e.Q6J("nzDropdownMatchSelectWidth",!0)("formControl",c.cvcFormControl)("formlyAttributes",c.cvcFormlyAttributes)("nzMode",c.cvcSelectMode)("nzPlaceHolder",c.cvcPlaceholder||"Search "+c.cvcEntityName.plural)("nzCustomTemplate",c.cvcCustomTemplate||null)("nzOptionHeightPx",30)("nzDisabled",c.cvcDisabled)("nzLoading",c.cvcLoading)("nzAllowClear",c.cvcAllowClear)("nzBorderless",c.cvcBorderless)("nzSuffixIcon",c.cvcSuffixIcon)("nzShowArrow",c.cvcShowArrow)("nzAutoClearSearchValue",c.cvcAutoClearSearchValue)("nzOptions",c.cvcOptions||e.DdM(20,vr))("nzDropdownRender",c.cvcDropdownExtra||null)("nzNotFoundContent",m)("nzOpen",c.cvcSelectOpen)}},dependencies:[M.O5,M.tP,t.JJ,t.oH,v.JD,Re.Ls,We.Vq],changeDetection:0}),ki);Kn=(0,ne.gn)([(0,ce.c)({arrayName:"stateSubscriptions"})],Kn);var gi,xo=a(3670),Ho=a(2024),Xo=a(7473),To=a(855),jo=a(1958),Oi=a(4634);function _r(u,y){if(1&u&&e._uU(0),2&u){const c=e.oxw();e.Oqu(c.successMessage)}}function Gi(u,y){if(1&u&&(e.ynx(0),e._uU(1),e.BQk()),2&u){const c=e.oxw();e.xp6(1),e.hij(' "',c.model.name,'" ')}}const qo=function(){return[0,0]};let jn=((gi=class{set cvcSearchString(y){y&&this.searchString$.next(y)}constructor(y,c){this.query=y,this.errors=c,this.cvcOnCreate=new e.vpe,this.form=new t.nJ({}),this.model={name:""},this.formLayout="horizontal",this.options={formState:{formLayout:this.formLayout}},this.onSubmit$=new st.x,this.searchString$=new Ge.X(void 0),this.addDiseaseMutator=new Ho.U(this.errors),this.fields=[{key:"doid",type:"input",props:{label:"DOID",keydown:(m,j)=>{"Tab"===j.code&&j.stopPropagation()}}},{key:"name",props:{hidden:!0,required:!0}}],this.searchString$.pipe((0,ce.t)(this)).subscribe(m=>{m&&(this.model.name=m)}),this.onSubmit$.pipe((0,ce.t)(this)).subscribe(m=>{console.log("disease-quick-add form model submitted.",m),this.submitDisease(m)})}submitDisease(y){y.name?this.mutationState=this.addDiseaseMutator.mutate(this.query,this.model,{},c=>{console.log("disease-quick-add submit data callback",c),c.addDisease&&(this.successMessage=c.addDisease.new?`New Disease ${c.addDisease.disease.name} added.`:`Existing Disease ${c.addDisease.disease.name} with DOID ${c.addDisease.disease.doid} found. `,setTimeout(()=>{c&&c.addDisease&&this.cvcOnCreate.next(c.addDisease.disease.id)},1e3))}):console.error("disease-quick-add form submitDisease requires model with valid name.")}}).\u0275fac=function(y){return new(y||gi)(e.Y36(Nn.MPi),e.Y36(Xo.Y))},gi.\u0275cmp=e.Xpm({type:gi,selectors:[["cvc-disease-quick-add-form"]],inputs:{cvcSearchString:"cvcSearchString"},outputs:{cvcOnCreate:"cvcOnCreate"},decls:11,vars:11,consts:[["entityType","Disease",3,"mutationState","successMessage"],["success",""],["nz-form","","nzLayout","horizontal",3,"formGroup","ngSubmit"],[3,"nzGutter"],["nzSpan","24"],[3,"form","fields","model","options","modelChange"],["nz-button","","nzType","primary","nzBlock","",3,"disabled"],[4,"ngIf"]],template:function(y,c){if(1&y&&(e.TgZ(0,"cvc-form-submission-status-display",0),e.YNc(1,_r,1,1,"ng-template",null,1,e.W1O),e.TgZ(3,"form",2),e.NdJ("ngSubmit",function(){return c.onSubmit$.next(c.model)}),e.TgZ(4,"nz-row",3)(5,"nz-col",4)(6,"formly-form",5),e.NdJ("modelChange",function(j){return c.model=j}),e.qZA()(),e.TgZ(7,"nz-col",4)(8,"button",6),e._uU(9," Add Disease\xa0 "),e.YNc(10,Gi,2,1,"ng-container",7),e.qZA()()()()()),2&y){const m=e.MAs(2);e.Q6J("mutationState",c.mutationState)("successMessage",m),e.xp6(3),e.Q6J("formGroup",c.form),e.xp6(1),e.Q6J("nzGutter",e.DdM(10,qo)),e.xp6(2),e.Q6J("form",c.form)("fields",c.fields)("model",c.model)("options",c.options),e.xp6(2),e.Q6J("disabled",!c.form.valid),e.xp6(2),e.Q6J("ngIf",c.model.name)}},dependencies:[M.O5,t._Y,t.JL,t.sg,v.T7,On.ix,To.w,jo.dQ,R.t3,R.SK,s.Lr,Oi.F],encapsulation:2,changeDetection:0}),gi);jn=(0,ne.gn)([(0,ce.c)()],jn);const ao=["addDisease"],Ue=["optionTemplates"];function ae(u,y){if(1&u&&(e.ynx(0),e.TgZ(1,"strong"),e._uU(2,"DOID:"),e.qZA(),e._UZ(3,"span",9),e.ALo(4,"highlightTypeahead"),e.BQk()),2&u){const c=e.oxw(2).$implicit,m=e.oxw().ngrxLet;e.xp6(3),e.Q6J("innerHtml",e.xi3(4,1,c.doid,m),e.oJD)}}function we(u,y){if(1&u&&(e.ynx(0),e._uU(1," \xa0 "),e.TgZ(2,"strong"),e._uU(3,"Aliases: "),e.qZA(),e.TgZ(4,"em"),e._UZ(5,"span",10),e.ALo(6,"highlightTypeahead"),e.qZA(),e.BQk()),2&u){const c=e.oxw(2).$implicit,m=e.oxw().ngrxLet;e.xp6(5),e.Q6J("nzTooltipTitle",c.diseaseAliases.join(", "))("innerHtml",e.xi3(6,2,c.diseaseAliases.join(", "),m),e.oJD)}}function Qe(u,y){if(1&u&&(e._UZ(0,"cvc-entity-tag",6),e.TgZ(1,"span",7),e.YNc(2,ae,5,4,"ng-container",8),e.YNc(3,we,7,5,"ng-container",8),e._uU(4),e.qZA()),2&u){const c=e.oxw().$implicit,m=e.oxw().ngrxLet;e.Q6J("cvcDisableLink",!0)("cvcCacheId",c.__typename+":"+c.id)("cvcEmphasize",m),e.xp6(2),e.Q6J("ngIf",c.doid),e.xp6(1),e.Q6J("ngIf",c.diseaseAliases.length>0),e.xp6(1),e.hij(" ",m," ")}}function zt(u,y){1&u&&(e.ynx(0),e.YNc(1,Qe,5,6,"ng-template",null,5,e.W1O),e.BQk())}function kt(u,y){if(1&u&&(e.ynx(0),e.YNc(1,zt,3,0,"ng-container",4),e.ALo(2,"ngrxPush"),e.BQk()),2&u){const c=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,c.result$))}}function en(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"div",11)(1,"cvc-entity-tag",12),e.NdJ("cvcOnClose",function(){const Be=e.CHM(c).$implicit,Mt=e.oxw();return e.KtG(Mt.onTagClose$.next(Be.nzValue))}),e.qZA()()}if(2&u){const c=y.$implicit,m=e.oxw();e.xp6(1),e.Q6J("cvcCacheId","Disease:"+c.nzValue)("cvcContext",m.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",m.props.isMultiSelect?"default":"closeable")}}function hn(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"cvc-disease-quick-add-form",13),e.NdJ("cvcOnCreate",function(j){e.CHM(c);const Be=e.oxw();return e.KtG(Be.onPopulate$.next(j))}),e.qZA()}2&u&&e.Q6J("cvcSearchString",y.$implicit)}const Jt=Lt(_n(),ni());let yn=(()=>{class u extends Jt{constructor(c,m,j){super(),this.taq=c,this.tq=m,this.changeDetectorRef=j,this.defaultOptions={props:{entityName:{singular:"Disease",plural:"Diseases"},tooltip:"Cancer or cancer subtype that is a result of the described variant",isMultiSelect:!1,requireType:!0,placeholder:"Search Diseases",requireTypePromptFn:(Be,Mt)=>`Select an ${Be} Type to select an associated Disease${Mt?"(s)":""}`,addFormTitle:"Add a New Disease"}},this.placeholder$=new Ge.X(void 0),this.selectOpen$=new Mo.t}ngAfterViewInit(){this.configureBaseField(),this.configureEntitySelectField({typeaheadQuery:this.taq,typeaheadParam$:void 0,tagQuery:this.tq,getTypeaheadVarsFn:this.getTypeaheadVarsFn,getTypeaheadResultsFn:this.getTypeaheadResultsFn,getTagQueryVarsFn:this.getTagQueryVarsFn,getTagQueryResultsFn:this.getTagQueryResultsFn,getSelectedItemOptionFn:this.getSelectedItemOptionFn,getSelectOptionsFn:this.getSelectOptionsFn,changeDetectorRef:this.changeDetectorRef,selectOpen$:this.selectOpen$,selectComponent:this.selectComponent}),this.state&&this.state.formReady$?this.state.formReady$.pipe((0,De.h)(c=>c),(0,Ei.q)(1),(0,ce.t)(this)).subscribe(c=>{this.configureField()}):this.configureField(),this.addForm&&(this.field.props.addFormContent=this.addForm)}configureField(){this.placeholder$.next(this.props.placeholder),this.configureStateConnections()}configureStateConnections(){if(this.state){if(this.state.requires.requiresDisease$?this.onRequiresDisease$=this.state.requires.requiresDisease$:console.warn(`${this.field.id} field's form provides a state, but could not find requiresDisease$ subject to attach.`),this.props.requireType){const c=`${this.state.entityName.toLowerCase()}Type$`;this.state.fields[c]?this.onEntityType$=this.state.fields[c]:console.error(`${this.field.id} requireType is true, however form state does not provide Subject ${c}.`)}!this.onRequiresDisease$||!this.onEntityType$||(0,vo.a)([this.onRequiresDisease$,this.onEntityType$,this.onValueChange$]).pipe((0,ce.t)(this)).subscribe(([c,m,j])=>{this.onStateUpdates(c,m,j)})}}onStateUpdates(c,m,j){!c&&m&&(this.props.required=!1,this.props.disabled=!0,this.props.description=`${(0,Oe.E)(m)} ${this.state.entityName} does not include associated diseases`,this.props.extraType="prompt",this.cdr.markForCheck()),this.props.requireType&&!m&&(this.props.required=!1,this.props.disabled=!0,this.props.description=this.props.requireTypePromptFn(this.state.entityName,this.props.isMultiSelect),this.props.extraType="prompt"),c&&(this.props.required=!0,this.props.disabled=!1,this.props.description=void 0,this.props.extraType=void 0),(!c&&void 0!==j||this.props.requireType&&!m&&this.formControl.value)&&this.resetField()}getTypeaheadVarsFn(c){return{name:c}}getTypeaheadResultsFn(c){return c.data.diseaseTypeahead}getTagQueryVarsFn(c){return{id:c}}getTagQueryResultsFn(c){return c.data.disease}getSelectedItemOptionFn(c){return{value:c.id,label:c.name}}getSelectOptionsFn(c,m){return c.map((j,Be)=>({label:m.get(Be)||j.name,value:j.id}))}}return u.\u0275fac=function(c){return new(c||u)(e.Y36(Nn.RYL),e.Y36(Nn.QVn),e.Y36(e.sBO))},u.\u0275cmp=e.Xpm({type:u,selectors:[["cvc-disease-select"]],viewQuery:function(c,m){if(1&c&&(e.Gf(ao,7),e.Gf(Ue,5,e.Rgc)),2&c){let j;e.iGM(j=e.CRH())&&(m.addForm=j.first),e.iGM(j=e.CRH())&&(m.optionTemplates=j)}},features:[e.qOj],decls:12,vars:26,consts:[[3,"cvcAddEntity","cvcSelectMode","cvcCustomTemplate","cvcFormControl","cvcFormlyAttributes","cvcEntityName","cvcPlaceholder","cvcResults","cvcOptions","cvcShowError","cvcDisabled","cvcLoading","cvcSelectOpen","cvcOnSearch","cvcOnOpenChange","cvcSelectComponent","cvcOnModelChange"],[4,"ngrxLet"],["selectedTemplate",""],["addDisease",""],[4,"ngFor","ngForOf"],["optionTemplates",""],[3,"cvcDisableLink","cvcCacheId","cvcEmphasize"],["nz-typography","","nzType","secondary"],[4,"ngIf"],[3,"innerHtml"],["nz-typography","","nzType","secondary","nz-tooltip","",3,"nzTooltipTitle","innerHtml"],[1,"ant-select-selection-item-content"],[3,"cvcCacheId","cvcContext","cvcMode","cvcOnClose"],[3,"cvcSearchString","cvcOnCreate"]],template:function(c,m){if(1&c&&(e.TgZ(0,"cvc-entity-select",0),e.NdJ("cvcOnSearch",function(Be){return m.onSearch$.next(Be)})("cvcOnOpenChange",function(Be){return m.onOpenChange$.next(Be)})("cvcSelectComponent",function(Be){return m.selectComponent=Be})("cvcOnModelChange",function(Be){return m.props.change&&m.props.change(m.field,Be)}),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.ALo(3,"ngrxPush"),e.ALo(4,"ngrxPush"),e.ALo(5,"ngrxPush"),e.ALo(6,"ngrxPush"),e.qZA(),e.YNc(7,kt,3,3,"ng-container",1),e.YNc(8,en,2,3,"ng-template",null,2,e.W1O),e.YNc(10,hn,1,1,"ng-template",null,3,e.W1O)),2&c){const j=e.MAs(9),Be=e.MAs(11);e.Q6J("cvcAddEntity",Be)("cvcSelectMode",m.props.isMultiSelect?"multiple":"default")("cvcCustomTemplate",j)("cvcFormControl",m.formControl)("cvcFormlyAttributes",m.field)("cvcEntityName",m.props.entityName)("cvcPlaceholder",e.lcZ(1,14,m.placeholder$))("cvcResults",e.lcZ(2,16,m.result$))("cvcOptions",e.lcZ(3,18,m.selectOption$))("cvcShowError",m.showError)("cvcDisabled",m.onRequiresDisease$&&!e.lcZ(4,20,m.onRequiresDisease$))("cvcLoading",e.lcZ(5,22,m.isLoading$))("cvcSelectOpen",e.lcZ(6,24,m.selectOpen$)),e.xp6(7),e.Q6J("ngrxLet",m.onSearch$)}},dependencies:[M.sg,M.O5,F.eJ,Xe.SY,ge.ZU,Kn,xo.J,jn,F.fM,I.A],changeDetection:0}),u})();const Rn={types:[{name:"disease-select",wrappers:["form-field"],component:yn,defaultOptions:{props:{label:"Disease"}}},{name:"disease-multi-select",wrappers:["form-field"],component:yn,defaultOptions:{props:{isMultiSelect:!0,label:"Diseases"}}}]};let Mn=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,t.UX,v.X0.forChild(Rn),yt.L,On.sL,We.LV,Wn.$6,zn.Qp,Re.PV,Pe.o7,R.Jb,Xe.cg,Ye.zf,s.U5,B.ic,ge.ZJ,Wt.X,Zt.g,je,Kt,It.s,Te.x]}),u})();var dn=a(9154);let En=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,ge.ZJ]}),u})();var Gn=a(2962),Fn=a(2787),Bn=a(8373),Ln=a(3740),go=a(6699),Jn=a(3620),co=a(9111),Do=a(9377),qn=a(3019),bo=a(3742);const Po={isSelectCol:u=>"select"===u.type,isEntityTagCol:u=>"entity-tag"===u.type,isEnumTagCol:u=>"enum-tag"===u.type,isTextTagCol:u=>"text-tag"===u.type},Ao=u=>void 0!==u.sort,Hi=u=>void 0!==u.filter,Ki={description:Nn.Cp0.Description,disease:Nn.Cp0.DiseaseName,evidenceDirection:Nn.Cp0.EvidenceDirection,evidenceLevel:Nn.Cp0.EvidenceLevel,evidenceRating:Nn.Cp0.EvidenceRating,evidenceType:Nn.Cp0.EvidenceType,id:Nn.Cp0.Id,significance:Nn.Cp0.Significance,status:Nn.Cp0.Status,therapies:Nn.Cp0.TherapyName,variantOrigin:Nn.Cp0.VariantOrigin},Ai={molecularProfile:"molecularProfileName",disease:"diseaseName",therapies:"therapyName",evidenceItem:"id"},Yi=["selected","id"];class ui{constructor(){this.sortStreams=[],this.filterStreams=[],this.config=this.configureColumnStreams([{key:"selected",label:"Select",type:"select",width:"25px",align:"center",fixedLeft:!0,checkbox:{th:{showCheckbox:!1},td:{showCheckbox:!0}}},{hidden:!0,key:"id",label:"ID",type:"default",width:"30px"},{hidden:!0,key:"status",label:"Status",type:"default",width:"50px"},{key:"id",label:"Evidence",type:"entity-tag",width:"95px",context:"evidenceItem",fixedLeft:!0,showStatus:!0,tag:{fullWidth:!0},sort:{default:"ascend"},filter:{inputType:"default",options:[{key:"EID",value:null}],transform:y=>y?+y.toString().replace(/EID/i,""):null}},{key:"molecularProfile",label:"Molecular Profile",type:"entity-tag",width:"240px",sort:{},tag:{truncateLabel:"200px"},filter:{inputType:"default",typename:"MolecularProfile",options:[{key:"Filter Therapy Names",value:null}]}},{key:"disease",type:"entity-tag",label:"Disease",width:"240px",sort:{},tag:{truncateLabel:"200px"},filter:{inputType:"default",typename:"Disease",options:[{key:"Filter Disease Names",value:null}]}},{key:"therapies",label:"Therapies",type:"entity-tag",width:"275px",sort:{},tag:{maxTags:2,truncateLabel:"150px"},filter:{inputType:"default",typename:"Therapy",options:[{key:"Filter Therapy Names",value:null}]}},{key:"therapyInteractionType",label:"INT",tooltip:"Therapy Interaction Type",type:"enum-tag",width:"40px",align:"center",emptyValueCategory:"not-applicable",sort:{},filter:{options:this.getAttributeFilters((0,bo.o6)(Nn.wkr))}},{key:"description",label:"DSC",tooltip:"Evidence Description",type:"text-tag",width:"40px",align:"center",fixedRight:!0,emptyValueCategory:"unspecified",sort:{},filter:{inputType:"default",options:[{key:"Search Descriptions",value:null}]}},{key:"evidenceType",label:"ET",tooltip:"Evidence Type",type:"enum-tag",width:"40px",align:"center",fixedRight:!0,sort:{},filter:{options:this.getAttributeFilters((0,bo.o6)(Nn.kqt))}},{key:"evidenceLevel",label:"EL",tooltip:"Evidence Level",type:"enum-tag",width:"40px",align:"center",fixedRight:!0,sort:{},filter:{options:this.getAttributeFilters((0,bo.o6)(Nn.Sx0))}},{key:"evidenceDirection",label:"ED",tooltip:"Evidence Direction",type:"enum-tag",width:"40px",align:"center",fixedRight:!0,sort:{},filter:{options:this.getAttributeFilters((0,bo.o6)(Nn.tI1))}},{key:"significance",label:"SI",tooltip:"Significance",type:"enum-tag",align:"center",width:"40px",fixedRight:!0,sort:{},filter:{options:this.getAttributeFilters((0,bo.o6)(Nn.y1h))}},{key:"evidenceRating",label:"ER",tooltip:"Evidence Rating",type:"enum-tag",width:"45px",align:"center",fixedRight:!0,tag:{showLabel:"short-string"},sort:{},filter:{options:[1,2,3,4,5].map(y=>({value:y,text:`${y} stars`}))}}])}get(){return this.config}getSortStreams(){return this.sortStreams}getFilterStreams(){return this.filterStreams}getAttributeFilters(y,c){return y.getValues().map(j=>({text:(0,Oe.E)(j),value:j,byDefault:c===j}))}configureColumnStreams(y){return y.forEach(c=>{const m=c;if(Ao(m)&&(m.sort.changes=new Ge.X({key:m.key,value:m.sort.default??null}),this.sortStreams.push(m.sort.changes)),Hi(m)){const j=m.filter.options.find(Be=>Be.byDefault)?.value;m.filter.changes=new Ge.X({key:m.key,value:j??null}),this.filterStreams.push(m.filter.changes)}}),y}}var Rt,Le=a(7871);function Z(u,y){1&u&&e.GkF(0)}const ke=function(u,y,c){return{$implicit:u,config:y,emphasize:c}};function $t(u,y){if(1&u&&(e.ynx(0),e.TgZ(1,"span",1),e.YNc(2,Z,1,0,"ng-container",2),e.qZA(),e.BQk()),2&u){const c=y.$implicit,m=e.oxw();e.xp6(2),e.Q6J("ngTemplateOutlet",m.cvcTagTemplate)("ngTemplateOutletContext",e.kEZ(2,ke,c,m.config,null==m.config?null:m.config.emphasize))}}let sn=((Rt=class{set cvcTagListConfig(y){!y||!y.tagList||!y.tag||(this.config=y,this.setEntities(y.tagList,y.tag))}constructor(){this.entities=[]}setEntities(y,c){this.entities=y&&0!==y.length&&0!==c.maxTags?y:[]}}).\u0275fac=function(y){return new(y||Rt)},Rt.\u0275cmp=e.Xpm({type:Rt,selectors:[["cvc-entity-tag-list"]],inputs:{cvcTagListConfig:"cvcTagListConfig",cvcTagTemplate:"cvcTagTemplate"},decls:1,vars:1,consts:[[4,"ngFor","ngForOf"],[1,"tag-container"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(y,c){1&y&&e.YNc(0,$t,3,6,"ng-container",0),2&y&&e.Q6J("ngForOf",c.entities)},dependencies:[M.sg,M.tP],styles:[".typeahead-match[_ngcontent-%COMP%]{font-weight:700}[_nghost-%COMP%]{display:inline-block;margin-bottom:-4px}.tag-container[_ngcontent-%COMP%]{display:inline-block;margin-bottom:4px}"],changeDetection:0}),Rt);sn=(0,ne.gn)([(0,ce.c)()],sn);var Yn=a(2616),uo=a(1201);function po(u,y){if(1&u&&(e._UZ(0,"span",6),e.ALo(1,"typenameToIcon"),e.ALo(2,"entityColor")),2&u){const c=y.$implicit;e.Q6J("nzType",e.lcZ(1,2,c.__typename))("nzTwotoneColor",e.lcZ(2,4,c.__typename))}}function Yo(u,y){if(1&u&&(e.ynx(0),e.YNc(1,po,3,6,"span",5),e.BQk()),2&u){const c=e.oxw();e.xp6(1),e.Q6J("ngForOf",c.entities)}}function ei(u,y){if(1&u&&(e.TgZ(0,"span",7)(1,"strong"),e._uU(2),e.qZA()(),e._UZ(3,"span",6),e.ALo(4,"typenameToIcon"),e.ALo(5,"entityColor")),2&u){const c=e.oxw();e.xp6(2),e.Oqu(c.entities.length),e.xp6(1),e.Q6J("nzType",e.lcZ(4,3,c.entities[0].__typename))("nzTwotoneColor",e.lcZ(5,5,c.entities[0].__typename))}}const lo=function(u,y,c,m,j){return{tagList:u,tag:y,showPopover:c,status:m,emphasize:j}};function Ri(u,y){if(1&u&&e._UZ(0,"cvc-entity-tag-list",11),2&u){const c=e.oxw(2);e.Q6J("cvcTagTemplate",c.cvcTagTemplate)("cvcTagListConfig",e.qbA(2,lo,c.entities,c.config.tag,c.config.showPopover,c.config.status,c.config.emphasize))}}function Fi(u,y){1&u&&e._uU(0," Invalid config specified for entity-tag-list. ")}function yr(u,y){if(1&u&&(e.TgZ(0,"div",8),e.YNc(1,Ri,1,8,"cvc-entity-tag-list",9),e.qZA(),e.YNc(2,Fi,1,0,"ng-template",null,10,e.W1O)),2&u){const c=e.MAs(3),m=e.oxw();e.xp6(1),e.Q6J("ngIf",m.config)("ngIfElse",c)}}let ns=(()=>{class u{set cvcCollectionTagConfig(c){!c||!c.tagList||!c.tag||(this.setConfig(c),this.setEntities(c.tagList))}constructor(){this.cvcShowMaxIcons=5,this.cvcShowFullLabels=!0,this.entities=[]}setConfig(c){this.config=this.cvcShowFullLabels?{...c,tag:{...c.tag,truncateLabel:void 0}}:c}setEntities(c){this.entities=c&&0!==c.length?c:[]}}return u.\u0275fac=function(c){return new(c||u)},u.\u0275cmp=e.Xpm({type:u,selectors:[["cvc-entity-collection-tag"]],inputs:{cvcCollectionTagConfig:"cvcCollectionTagConfig",cvcTagTemplate:"cvcTagTemplate",cvcShowMaxIcons:"cvcShowMaxIcons",cvcShowFullLabels:"cvcShowFullLabels"},decls:9,vars:3,consts:[["nz-popover","","nzPopoverPlacement","top","nzPopoverTrigger","hover",3,"nzPopoverContent"],["nz-typography","","nzType","secondary",1,"plus-sign"],[4,"ngIf","ngIfElse"],["showCount",""],["tagListPopover",""],["class","entity-icon","nz-icon","","nzTheme","twotone",3,"nzType","nzTwotoneColor",4,"ngFor","ngForOf"],["nz-icon","","nzTheme","twotone",1,"entity-icon",3,"nzType","nzTwotoneColor"],["nz-typography","","nzType","secondary",1,"entity-count"],[1,"popover-container"],[3,"cvcTagTemplate","cvcTagListConfig",4,"ngIf","ngIfElse"],["noConfig",""],[3,"cvcTagTemplate","cvcTagListConfig"]],template:function(c,m){if(1&c&&(e.TgZ(0,"nz-tag",0)(1,"span",1)(2,"strong"),e._uU(3,"+"),e.qZA()(),e.YNc(4,Yo,2,1,"ng-container",2),e.YNc(5,ei,6,7,"ng-template",null,3,e.W1O),e.qZA(),e.YNc(7,yr,4,2,"ng-template",null,4,e.W1O)),2&c){const j=e.MAs(6),Be=e.MAs(8);e.Q6J("nzPopoverContent",Be),e.xp6(4),e.Q6J("ngIf",m.entities.length<=m.cvcShowMaxIcons)("ngIfElse",j)}},dependencies:[M.sg,M.O5,Wt.j,ge.ZU,Wn.lU,Re.Ls,sn,Yn.a,uo.Z],styles:["[_nghost-%COMP%]{display:inline-block}.popover-container[_ngcontent-%COMP%]{max-width:300px}nz-tag[_ngcontent-%COMP%]{margin:0;padding:0;margin-inline-end:4px}nz-tag[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-block}nz-tag[_ngcontent-%COMP%]   .plus-sign[_ngcontent-%COMP%]{padding:3px 3px 3px 4px;margin:-3px 0;line-height:1}nz-tag[_ngcontent-%COMP%]   .entity-icon[_ngcontent-%COMP%]:first-child{padding-left:2px}nz-tag[_ngcontent-%COMP%]   .entity-icon[_ngcontent-%COMP%]{margin:-3px 1px -4px -1px;padding:3px 0;line-height:1}nz-tag[_ngcontent-%COMP%]   .entity-icon[_ngcontent-%COMP%]:last-child{padding-right:3px}nz-tag[_ngcontent-%COMP%]   .entity-count[_ngcontent-%COMP%]{margin-left:-2px;padding-right:4px}"],changeDetection:0}),u})();var Ee=a(3489);function Ce(u,y){if(1&u&&(e.TgZ(0,"span",1),e._uU(1),e.ALo(2,"number"),e.ALo(3,"number"),e.qZA()),2&u){const c=y.ngIf;e.xp6(1),e.AsE(" ",e.lcZ(2,2,c.edgeCount)," of ",e.lcZ(3,4,c.filteredCount)," displayed\n")}}let he=(()=>{class u{ngOnInit(){this.tableCountsInfo$=this.cvcTableCountsConnection.pipe((0,De.h)(c=>null!=c.totalCount||null!=c.filteredCount),(0,vt.U)(c=>{const m=c.filteredCount,j=c.totalCount,Be=c.edges;return null==m&&null==j&&console.log("Need to provide either filtered count or total count in the table counts component"),{edgeCount:Be.length,filteredCount:m??j}}))}}return u.\u0275fac=function(c){return new(c||u)},u.\u0275cmp=e.Xpm({type:u,selectors:[["cvc-table-counts2"]],inputs:{cvcTableCountsConnection:"cvcTableCountsConnection"},decls:2,vars:3,consts:[["class","table-counts","nz-typography","","nzType","secondary",4,"ngIf"],["nz-typography","","nzType","secondary",1,"table-counts"]],template:function(c,m){1&c&&(e.YNc(0,Ce,4,6,"span",0),e.ALo(1,"ngrxPush")),2&c&&e.Q6J("ngIf",e.lcZ(1,1,m.tableCountsInfo$))},dependencies:[M.O5,ge.ZU,M.JJ,F.fM],styles:[":[_nghost-%COMP%]{border:1px solid red}.table-counts[_ngcontent-%COMP%]{display:inline-block}"],changeDetection:0}),u})();var Qn,ct=a(1374),Cn=a(9384);let _i=((Qn=class{set cvcTableScrollerToIndex(y){void 0!==y&&this.scrollToIndex(y)}set cvcTableScrollerToOffset(y){void 0!==y&&this.scrollToIndex(y)}constructor(y){this.host=y,this.cvcTableScrollerOnScroll=new e.vpe,this.cvcTableScrollerOnFetch=new e.vpe,this.cvcTableScrollerTargetHeight=140,this.cvcTableScrollerFetchCount=50,this.onLoadThrottleTime=500,this.onScrollThrottleTime=250,this.onScrollDebounceTime=300}ngAfterViewInit(){if(!this.host||!this.host.cdkVirtualScrollViewport)throw new Error("cvcTableScroller directive could not obtain reference to host cdkVirtualScrollViewport.");this.viewport=this.host.cdkVirtualScrollViewport,this.scrolled$=this.viewport.elementScrolled(),this.rendered$=this.viewport.renderedRangeStream,this.rendered$.pipe((0,ct.P)()).subscribe(()=>this.viewport.checkViewportSize()),this.scrolled$.pipe((0,xi.p)(this.onScrollThrottleTime,Ii.z,{leading:!0,trailing:!0}),(0,Lo.b)(y=>this.cvcTableScrollerOnScroll.next("scroll")),(0,Jn.b)(this.onScrollDebounceTime),(0,ce.t)(this)).subscribe(y=>{this.cvcTableScrollerOnScroll.next("stop")}),this.scrolled$.pipe((0,vt.U)(y=>this.viewport.measureScrollOffset("bottom")),(0,Cn.G)(),(0,De.h)(([y,c])=>c<y&&c<this.cvcTableScrollerTargetHeight),(0,xi.p)(this.onLoadThrottleTime),(0,ce.t)(this)).subscribe(y=>{this.cvcTableScrollerOnScroll.next("bottom");try{this.loadMore(this.cvcTableScrollerPageInfo)}catch(c){console.error(c)}})}loadMore(y){const c=this.cvcTableScrollerQueryRef;if(!y&&c)throw new Error("table-scroll directive requires PageInfo to use provided QueryRef.");if(y&&!c)throw new Error("table-scroll directive requires valid QueryRef when PageInfo provided.");if(y&&c){const[m,j,Be]=[this.cvcTableScrollerFetchCount,y.hasNextPage,y.endCursor];if(!m||!Be)throw new Error("table-scroll PageInfo invalid.");if(!j)return;this.cvcTableScrollerOnFetch.next({first:m,after:Be})}}scrollToIndex(y){const[c,m]=[this.host,this.host.cdkVirtualScrollViewport];if(!c||!m)throw new Error("table-scroll scrollToIndex() cannot find host viewport.");m.scrollToIndex(y)}scrollToOffset(y){const[c,m]=[this.host,this.host.cdkVirtualScrollViewport];if(!c||!m)throw new Error("table-scroll scrollToOffset() cannot find host viewport.");m.scrollToOffset(y)}}).\u0275fac=function(y){return new(y||Qn)(e.Y36(Ln.N8))},Qn.\u0275dir=e.lG2({type:Qn,selectors:[["","cvcTableScroller",""]],inputs:{cvcTableScrollerTargetHeight:"cvcTableScrollerTargetHeight",cvcTableScrollerQueryRef:"cvcTableScrollerQueryRef",cvcTableScrollerPageInfo:"cvcTableScrollerPageInfo",cvcTableScrollerFetchCount:"cvcTableScrollerFetchCount",cvcTableScrollerToIndex:"cvcTableScrollerToIndex",cvcTableScrollerToOffset:"cvcTableScrollerToOffset"},outputs:{cvcTableScrollerOnScroll:"cvcTableScrollerOnScroll",cvcTableScrollerOnFetch:"cvcTableScrollerOnFetch"}}),Qn);function di(u,y){1&u&&e._UZ(0,"span",8)}function Lr(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"span",9),e.NdJ("click",function(){e.CHM(c),e.oxw(2);const j=e.MAs(3),Be=e.oxw();return j.value="",e.KtG(Be.cvcModelChange.next(null))}),e.qZA()}}function xs(u,y){if(1&u&&(e.YNc(0,di,1,0,"span",6),e.YNc(1,Lr,1,0,"span",7)),2&u){e.oxw();const c=e.MAs(3);e.Q6J("ngIf",!c.value),e.xp6(1),e.Q6J("ngIf",c.value)}}function ya(u,y){if(1&u){const c=e.EpF();e.ynx(0),e.TgZ(1,"nz-input-group",2)(2,"input",3,4),e.NdJ("ngModelChange",function(j){e.CHM(c);const Be=e.oxw();return e.KtG(Be.cvcModelChange.next(j))}),e.qZA()(),e.YNc(4,xs,2,2,"ng-template",null,5,e.W1O),e.BQk()}if(2&u){const c=e.MAs(5),m=e.oxw();e.xp6(1),e.Q6J("nzSuffix",c),e.xp6(1),e.Q6J("placeholder",m.cvcPlaceholder)("ngModel",m.cvcModel)}}function Bs(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"nz-input-number-group",10)(1,"nz-input-number",11,4),e.NdJ("ngModelChange",function(j){e.CHM(c);const Be=e.oxw();return e.KtG(Be.cvcModelChange.next(""===j?null:j))}),e.qZA()()}if(2&u){const c=e.oxw();let m;e.xp6(1),e.Q6J("nzPlaceHolder",null!==(m=c.cvcPlaceholder)&&void 0!==m?m:"")("ngModel",c.cvcModel)("nzMin",1)("nzStep",1)}}_i=(0,ne.gn)([(0,ce.c)()],_i);let Hs=(()=>{class u{constructor(){this.cvcModel=null,this.cvcModelChange=new e.vpe,this.cvcInputType="default"}}return u.\u0275fac=function(c){return new(c||u)},u.\u0275cmp=e.Xpm({type:u,selectors:[["cvc-table-filter-input"]],inputs:{cvcModel:"cvcModel",cvcInputType:"cvcInputType",cvcPlaceholder:"cvcPlaceholder"},outputs:{cvcModelChange:"cvcModelChange"},decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["numericInput",""],["nzSize","small",3,"nzSuffix"],["nz-input","",3,"placeholder","ngModel","ngModelChange"],["filterInput",""],["suffixIcon",""],["nz-icon","","nzType","search","style","color: #ddd",4,"ngIf"],["nz-icon","","class","ant-input-clear-icon","nzTheme","fill","nzType","close-circle",3,"click",4,"ngIf"],["nz-icon","","nzType","search",2,"color","#ddd"],["nz-icon","","nzTheme","fill","nzType","close-circle",1,"ant-input-clear-icon",3,"click"],["nzSize","small"],[2,"width","100%",3,"nzPlaceHolder","ngModel","nzMin","nzStep","ngModelChange"]],template:function(c,m){if(1&c&&(e.YNc(0,ya,6,3,"ng-container",0),e.YNc(1,Bs,3,4,"ng-template",null,1,e.W1O)),2&c){const j=e.MAs(2);e.Q6J("ngIf","default"===m.cvcInputType)("ngIfElse",j)}},dependencies:[M.O5,t.Fj,t.JJ,t.On,To.w,Re.Ls,Pe.Zp,Pe.gB,Pe.ke,Bn._V,Bn.Rb],styles:[".typeahead-match[_ngcontent-%COMP%]{font-weight:700}  nz-input-group{border-color:#d9d9d9!important}"]}),u})();var Cr=a(3460);function nc(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"li",5),e.NdJ("click",function(){const Be=e.CHM(c).$implicit,Mt=e.oxw();return e.KtG(Mt.cvcOptionChange.next({key:Mt.cvcColumnKey,value:Be.value}))}),e._UZ(1,"cvc-attribute-tag",6),e.qZA()}if(2&u){const c=y.$implicit,m=e.oxw();e.Q6J("nzSelected",(null==m.cvcOption?null:m.cvcOption.value)===c.value),e.xp6(1),e.Q6J("cvcFullWidth",!0)("cvcChecked",(null==m.cvcOption?null:m.cvcOption.value)===c.value)("cvcAttrValue",c.value)}}let Kr=(()=>{class u{constructor(){this.cvcOptionChange=new e.vpe}}return u.\u0275fac=function(c){return new(c||u)},u.\u0275cmp=e.Xpm({type:u,selectors:[["cvc-enum-filter-menu"]],inputs:{cvcColumnKey:"cvcColumnKey",cvcFilterOptions:"cvcFilterOptions",cvcOption:"cvcOption"},outputs:{cvcOptionChange:"cvcOptionChange"},decls:6,vars:2,consts:[["nz-menu",""],["nz-menu-item","",3,"nzSelected","click",4,"ngFor","ngForOf"],[2,"padding","3px"],["nz-button","","nzType","default","nzBlock","","nzSize","small",3,"disabled","click"],["nz-icon","","nzType","retweet","nzTheme","outline"],["nz-menu-item","",3,"nzSelected","click"],["cvcContext","menu-item",3,"cvcFullWidth","cvcChecked","cvcAttrValue"]],template:function(c,m){1&c&&(e.TgZ(0,"ul",0),e.YNc(1,nc,2,4,"li",1),e.TgZ(2,"li",2)(3,"button",3),e.NdJ("click",function(){return m.cvcOptionChange.next({key:m.cvcColumnKey,value:null})}),e._UZ(4,"span",4),e._uU(5," Reset "),e.qZA()()()),2&c&&(e.xp6(1),e.Q6J("ngForOf",m.cvcFilterOptions),e.xp6(2),e.Q6J("disabled",null===(null==m.cvcOption?null:m.cvcOption.value)))},dependencies:[M.sg,ye,On.ix,To.w,jo.dQ,Cr.wO,Cr.r9,Re.Ls],styles:[".typeahead-match[_ngcontent-%COMP%]{font-weight:700}[_nghost-%COMP%]     ul li:hover{background-color:#e6f7ff}[_nghost-%COMP%]     ul li.ant-dropdown-menu-item-selected{background-color:#1890ff}[_nghost-%COMP%]     ul li.ant-dropdown-menu-item-selected:active{background-color:#096dd9}"],changeDetection:0}),u})(),kr=(()=>{class u{transform(c){return null!=c&&Array.isArray(c)}}return u.\u0275fac=function(c){return new(c||u)},u.\u0275pipe=e.Yjl({name:"isArray",type:u,pure:!0}),u})(),nr=(()=>{class u{transform(c,m){return m(c)?c:void 0}}return u.\u0275fac=function(c){return new(c||u)},u.\u0275pipe=e.Yjl({name:"guardType",type:u,pure:!0}),u})();var ur;function yi(u,y){if(1&u&&e._UZ(0,"th",14),2&u){const c=y.ngIf;let m;e.Q6J("nzShowCheckbox",c.checkbox.th.showCheckbox||!1)("nzWidth",c.width)("nzAlign",null!==(m=c.align)&&void 0!==m?m:"left")("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1)}}function dr(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"th",15),e.NdJ("nzSortOrderChange",function(j){const Mt=e.CHM(c).ngIf;return e.KtG(Mt.sort.changes.next({key:Mt.key,value:j}))}),e.ALo(1,"ngrxPush"),e.TgZ(2,"span",16),e._uU(3),e.qZA()()}if(2&u){const c=y.ngIf;let m,j;e.Q6J("nzColumnKey",c.key)("nzAlign",null!==(m=c.align)&&void 0!==m?m:"left")("nzWidth",c.width)("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1)("nzShowSort",void 0!==c.sort)("nzSortFn",!0)("nzSortOrder",(null==(j=e.lcZ(1,10,c.sort.changes))?null:j.value)||null),e.xp6(2),e.Q6J("nzTooltipTitle",c.tooltip),e.xp6(1),e.hij(" ",c.label," ")}}function Ds(u,y){if(1&u&&(e.TgZ(0,"th",17),e._uU(1),e.qZA()),2&u){const c=y.ngIf;let m;e.Q6J("nzColumnKey",c.key)("nzAlign",null!==(m=c.align)&&void 0!==m?m:"left")("nzWidth",c.width)("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1)("nzTooltipTitle",c.tooltip),e.xp6(1),e.hij(" ",c.label," ")}}function Rr(u,y){if(1&u&&(e.TgZ(0,"th",17),e._uU(1),e.qZA()),2&u){const c=y.ngIf;let m;e.Q6J("nzColumnKey",c.key)("nzAlign",null!==(m=c.align)&&void 0!==m?m:"left")("nzWidth",c.width)("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1)("nzTooltipTitle",c.tooltip),e.xp6(1),e.hij(" ",c.label," ")}}function Sr(u,y){if(1&u&&(e.ynx(0),e.YNc(1,yi,1,5,"th",11),e.ALo(2,"guardType"),e.YNc(3,dr,4,12,"th",12),e.ALo(4,"guardType"),e.YNc(5,Ds,2,7,"th",13),e.ALo(6,"guardType"),e.YNc(7,Rr,2,7,"th",13),e.ALo(8,"guardType"),e.BQk()),2&u){const c=e.oxw().$implicit,m=e.oxw(2);e.xp6(1),e.Q6J("ngIf",e.xi3(2,4,c,m.colGuards.isSelectCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(4,7,c,m.colGuards.isEntityTagCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(6,10,c,m.colGuards.isEnumTagCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(8,13,c,m.colGuards.isTextTagCol))}}function Jr(u,y){if(1&u&&(e.ynx(0),e.YNc(1,Sr,9,16,"ng-container",10),e.BQk()),2&u){const c=y.$implicit;e.xp6(1),e.Q6J("ngIf",!c.hidden)}}function Ys(u,y){if(1&u&&(e.TgZ(0,"th",22),e._uU(1," \xa0 "),e.qZA()),2&u){const c=y.ngIf;let m;e.Q6J("nzColumnKey",c.key)("nzAlign",null!==(m=c.align)&&void 0!==m?m:"left")("nzWidth",c.width)("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1)}}function Vr(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"cvc-table-filter-input",25),e.NdJ("cvcModelChange",function(j){const Mt=e.CHM(c).ngIf,bn=e.oxw().ngIf;return e.KtG(Mt.changes.next(Mt.transform?{key:bn.key,value:Mt.transform(j)}:{key:bn.key,value:j}))}),e.qZA()}if(2&u){const c=e.oxw().ngIf;e.Q6J("cvcInputType",c.filter.inputType)("cvcPlaceholder",c.filter.options[0].key)("cvcModel",c.filter.options[0].value)}}function us(u,y){if(1&u&&(e.TgZ(0,"th",23),e.YNc(1,Vr,1,3,"cvc-table-filter-input",24),e.qZA()),2&u){const c=y.ngIf;let m;e.Q6J("nzColumnKey",c.key)("nzWidth",c.width)("nzAlign",null!==(m=c.align)&&void 0!==m?m:"left")("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1),e.xp6(1),e.Q6J("ngIf",c.filter)}}function pr(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"th",26,27),e.NdJ("nzSortOrderChange",function(j){const Mt=e.CHM(c).ngIf;return e.KtG(Mt.sort.changes.next({key:Mt.key,value:j}))}),e.ALo(2,"ngrxPush"),e.TgZ(3,"nz-filter-trigger",28,29),e.ALo(5,"ngrxPush"),e._UZ(6,"span",30),e.qZA(),e.TgZ(7,"nz-dropdown-menu",null,31)(9,"cvc-enum-filter-menu",32),e.NdJ("cvcOptionChange",function(j){const Mt=e.CHM(c).ngIf,bn=e.MAs(4);return Mt.filter.changes.next(j),e.KtG(bn.nzVisible=!1)}),e.ALo(10,"ngrxPush"),e.qZA()()()}if(2&u){const c=y.ngIf,m=e.MAs(8);let j,Be,Mt;e.Q6J("nzColumnKey",c.key)("nzWidth",c.width)("nzAlign",null!==(j=c.align)&&void 0!==j?j:"left")("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1)("nzShowSort",!0)("nzSortFn",!0)("nzSortOrder",(null==(Be=e.lcZ(2,15,c.sort.changes))?null:Be.value)||null)("nzShowFilter",void 0!==c.filter)("nzFilterFn",!0),e.xp6(3),e.Q6J("nzDropdownMenu",m)("nzActive",null!==(null==(Mt=e.lcZ(5,17,c.filter.changes))?null:Mt.value)),e.xp6(6),e.Q6J("cvcColumnKey",c.key)("cvcFilterOptions",c.filter.options)("cvcOption",e.lcZ(10,19,c.filter.changes))}}function oc(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"th",33,27)(2,"nz-filter-trigger",28),e.ALo(3,"ngrxPush"),e._UZ(4,"span",34),e.qZA(),e.TgZ(5,"nz-dropdown-menu",null,35)(7,"div",36)(8,"div",37)(9,"cvc-table-filter-input",38),e.NdJ("cvcModelChange",function(j){const Mt=e.CHM(c).ngIf;return e.KtG(Mt.filter.changes.next({key:Mt.key,value:j}))}),e.qZA()()()()()}if(2&u){const c=y.ngIf,m=e.MAs(6);let j,Be;e.Q6J("nzColumnKey",c.key)("nzWidth",c.width)("nzAlign",null!==(j=c.align)&&void 0!==j?j:"left")("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1)("nzFilterFn",!0),e.xp6(2),e.Q6J("nzDropdownMenu",m)("nzActive",null!==(null==(Be=e.lcZ(3,10,c.filter.changes))?null:Be.value)),e.xp6(7),e.Q6J("cvcPlaceholder",c.filter.options[0].key)("cvcModel",c.filter.options[0].value)}}function Er(u,y){if(1&u&&(e.ynx(0),e.YNc(1,Ys,2,5,"th",18),e.ALo(2,"guardType"),e.YNc(3,us,2,6,"th",19),e.ALo(4,"guardType"),e.YNc(5,pr,11,21,"th",20),e.ALo(6,"guardType"),e.YNc(7,oc,10,12,"th",21),e.ALo(8,"guardType"),e.BQk()),2&u){const c=e.oxw().$implicit,m=e.oxw(2);e.xp6(1),e.Q6J("ngIf",e.xi3(2,4,c,m.colGuards.isSelectCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(4,7,c,m.colGuards.isEntityTagCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(6,10,c,m.colGuards.isEnumTagCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(8,13,c,m.colGuards.isTextTagCol))}}function Ca(u,y){if(1&u&&(e.ynx(0),e.YNc(1,Er,9,16,"ng-container",10),e.BQk()),2&u){const c=y.$implicit;e.xp6(1),e.Q6J("ngIf",!c.hidden)}}function Yc(u,y){if(1&u&&(e.TgZ(0,"thead")(1,"tr",7),e.YNc(2,Jr,2,1,"ng-container",8),e.qZA(),e.TgZ(3,"tr",9),e.YNc(4,Ca,2,1,"ng-container",8),e.qZA()()),2&u){const c=y.ngrxLet;e.xp6(2),e.Q6J("ngForOf",c),e.xp6(2),e.Q6J("ngForOf",c)}}function ic(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"td",43),e.NdJ("nzCheckedChange",function(j){e.CHM(c);const Be=e.oxw(3).$implicit,Mt=e.oxw(2);return e.KtG(Mt.onRowSelected$.next({id:Be.id,selected:j}))}),e.qZA()}if(2&u){const c=y.ngIf,m=e.oxw(3).$implicit;let j;e.Q6J("nzChecked",m.selected)("nzAlign",null!==(j=c.align)&&void 0!==j?j:"left")("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1)}}function xr(u,y){1&u&&e.GkF(0)}const or=function(u,y,c){return{$implicit:u,config:y,emphasize:c}};function os(u,y){if(1&u&&(e.ynx(0),e.YNc(1,xr,1,0,"ng-container",49),e.ALo(2,"isArray"),e.ALo(3,"ngrxPush"),e.BQk()),2&u){const c=e.oxw().ngIf,m=e.oxw().ngIf,j=e.MAs(3),Be=e.MAs(5),Mt=e.oxw(3).$implicit;let bn;e.xp6(1),e.Q6J("ngTemplateOutlet",e.lcZ(2,2,Mt[c])?j:Be)("ngTemplateOutletContext",e.kEZ(6,or,Mt[c],m,null==(bn=e.lcZ(3,4,m.filter.changes))?null:bn.value))}}function Br(u,y){if(1&u&&(e.ynx(0),e.YNc(1,os,4,10,"ng-container",48),e.BQk()),2&u){const c=y.ngIf;e.oxw();const m=e.MAs(7),j=e.oxw(3).$implicit;e.xp6(1),e.Q6J("ngIf",j[c])("ngIfElse",m)}}const ds=function(u,y,c,m,j){return{tagList:u,tag:y,showPopover:c,status:m,emphasize:j}};function ps(u,y){if(1&u&&(e.ynx(0),e._UZ(1,"cvc-entity-collection-tag",51),e.BQk()),2&u){const c=e.oxw(2),m=c.config,j=c.$implicit,Be=c.emphasize;e.oxw();const Mt=e.MAs(5),bn=e.oxw(5);e.xp6(1),e.Q6J("cvcCollectionTagConfig",e.qbA(3,ds,j.slice(m.tag.maxTags,j.length),m.tag,!bn.isScrolling,!0===m.showStatus?j.status:void 0,Be))("cvcTagTemplate",Mt)("cvcShowFullLabels",!0)}}function $s(u,y){if(1&u&&(e.ynx(0),e._UZ(1,"cvc-entity-tag-list",50),e.YNc(2,ps,2,9,"ng-container",10),e.BQk()),2&u){const c=e.oxw(),m=c.config,j=c.$implicit,Be=c.emphasize;e.oxw();const Mt=e.MAs(5),bn=e.oxw(5);e.xp6(1),e.Q6J("cvcTagTemplate",Mt)("cvcTagListConfig",e.qbA(3,ds,j.slice(0,m.tag.maxTags),m.tag,!bn.isScrolling,!0===m.showStatus?j.status:void 0,Be)),e.xp6(1),e.Q6J("ngIf",j.slice(m.tag.maxTags,j.length).length>0)}}function hs(u,y){if(1&u&&e.YNc(0,$s,3,9,"ng-container",48),2&u){const c=y.$implicit;e.oxw();const m=e.MAs(7);e.Q6J("ngIf",c.length>0)("ngIfElse",m)}}function Os(u,y){if(1&u&&e._UZ(0,"cvc-entity-tag",52),2&u){const c=y.$implicit,m=y.config,j=y.emphasize,Be=e.oxw(6);let Mt;e.Q6J("cvcTruncateLabel",null==m.tag?null:m.tag.truncateLabel)("cvcLinkableEntity",c)("cvcEmphasize",j)("cvcShowPopover",!Be.isScrolling)("cvcStatus",!0===m.showStatus?c.status:void 0)("cvcFullWidth",null!==(Mt=null==m.tag?null:m.tag.fullWidth)&&void 0!==Mt&&Mt)}}function rc(u,y){if(1&u&&e._UZ(0,"cvc-empty-value",53),2&u){const c=e.oxw().ngIf;e.Q6J("cvcEmptyCategory",c.emptyValueCategory||"not-applicable")}}function Us(u,y){if(1&u&&(e.TgZ(0,"td",44),e.YNc(1,Br,2,2,"ng-container",10),e.YNc(2,hs,1,2,"ng-template",null,45,e.W1O),e.YNc(4,Os,1,6,"ng-template",null,46,e.W1O),e.YNc(6,rc,1,1,"ng-template",null,47,e.W1O),e.qZA()),2&u){const c=y.ngIf;let m;e.Q6J("nzAlign",null!==(m=c.align)&&void 0!==m?m:"left")("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1),e.xp6(1),e.Q6J("ngIf",c.context||c.key)}}function Gs(u,y){if(1&u&&(e._UZ(0,"cvc-attribute-tag",56),e.ALo(1,"evidenceEnumDisplay")),2&u){const c=e.oxw().ngIf,m=e.oxw(3).$implicit,j=e.oxw(2);e.Q6J("cvcFullWidth",!0)("cvcAttrValue",m[c.key])("cvcTooltip",e.lcZ(1,3,!j.isScrolling&&m[c.key]))}}function Qs(u,y){if(1&u&&e._UZ(0,"cvc-empty-value",57),2&u){const c=e.oxw().ngIf;e.Q6J("cvcEmptyCategory",c.emptyValueCategory||"unspecified")}}function $i(u,y){if(1&u&&(e.TgZ(0,"td",44),e.YNc(1,Gs,2,5,"cvc-attribute-tag",54),e.YNc(2,Qs,1,1,"ng-template",null,55,e.W1O),e.qZA()),2&u){const c=y.ngIf,m=e.MAs(3),j=e.oxw(3).$implicit;let Be;e.Q6J("nzAlign",null!==(Be=c.align)&&void 0!==Be?Be:"left")("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1),e.xp6(1),e.Q6J("ngIf",j[c.key])("ngIfElse",m)}}function Ni(u,y){if(1&u&&(e.TgZ(0,"nz-tag",60),e._UZ(1,"span",61),e.qZA()),2&u){const c=e.oxw().ngIf,m=e.oxw(3).$implicit;e.Q6J("nzTooltipTitle",m[c.key])}}function js(u,y){if(1&u&&e._UZ(0,"cvc-empty-value",53),2&u){const c=e.oxw().ngIf;e.Q6J("cvcEmptyCategory",c.emptyValueCategory||"unspecified")}}function oi(u,y){if(1&u&&(e.TgZ(0,"td",44),e.YNc(1,Ni,2,1,"nz-tag",58),e.YNc(2,js,1,1,"ng-template",null,59,e.W1O),e.qZA()),2&u){const c=y.ngIf,m=e.MAs(3),j=e.oxw(3).$implicit;let Be;e.Q6J("nzAlign",null!==(Be=c.align)&&void 0!==Be?Be:"left")("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1),e.xp6(1),e.Q6J("ngIf",j[c.key])("ngIfElse",m)}}function Hr(u,y){if(1&u&&(e.ynx(0),e.YNc(1,ic,1,4,"td",41),e.ALo(2,"guardType"),e.YNc(3,Us,8,4,"td",42),e.ALo(4,"guardType"),e.YNc(5,$i,4,5,"td",42),e.ALo(6,"guardType"),e.YNc(7,oi,4,5,"td",42),e.ALo(8,"guardType"),e.BQk()),2&u){const c=e.oxw().$implicit,m=e.oxw(3);e.xp6(1),e.Q6J("ngIf",e.xi3(2,4,c,m.colGuards.isSelectCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(4,7,c,m.colGuards.isEntityTagCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(6,10,c,m.colGuards.isEnumTagCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(8,13,c,m.colGuards.isTextTagCol))}}function re(u,y){if(1&u&&(e.ynx(0),e.YNc(1,Hr,9,16,"ng-container",10),e.BQk()),2&u){const c=y.$implicit;e.xp6(1),e.Q6J("ngIf",!c.hidden)}}function Ne(u,y){if(1&u&&(e.TgZ(0,"tr",40),e.YNc(1,re,2,1,"ng-container",8),e.qZA()),2&u){const c=e.oxw().ngrxLet;e.xp6(1),e.Q6J("ngForOf",c)}}function me(u,y){1&u&&(e.TgZ(0,"tbody"),e.YNc(1,Ne,2,1,"ng-template",39),e.qZA())}function et(u,y){1&u&&e._UZ(0,"span",69)}function Pt(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"span",70),e.NdJ("click",function(){e.CHM(c),e.oxw(2);const j=e.MAs(3),Be=e.oxw().filter;return j.value="",e.KtG(Be.changes.next({key:Be.key,value:null}))}),e.qZA()}}function pn(u,y){if(1&u&&(e.YNc(0,et,1,0,"span",67),e.YNc(1,Pt,1,0,"span",68)),2&u){e.oxw();const c=e.MAs(3);e.Q6J("ngIf",!c.value),e.xp6(1),e.Q6J("ngIf",c.value)}}function Tn(u,y){if(1&u){const c=e.EpF();e.ynx(0),e.TgZ(1,"nz-input-group",63)(2,"input",64,65),e.NdJ("nzFilterChange",function(j){e.CHM(c);const Be=e.oxw().filter;return e.KtG(Be.changes.next({key:Be.key,value:j}))}),e.qZA()(),e.YNc(4,pn,2,2,"ng-template",null,66,e.W1O),e.BQk()}if(2&u){const c=e.MAs(5),m=e.oxw().filter;e.xp6(1),e.Q6J("nzSuffix",c),e.xp6(1),e.Q6J("placeholder",m.placeholder)("ngModel",m.defaultValue)}}function to(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"nz-input-number-group",71)(1,"nz-input-number",72,65),e.NdJ("ngModelChange",function(j){e.CHM(c);const Be=e.oxw().filter;return e.KtG(Be.changes.next({key:Be.key,value:j}))}),e.qZA()()}if(2&u){const c=e.oxw().filter;e.xp6(1),e.Q6J("nzPlaceHolder",c.placeholder)("ngModel",c.defaultValue)("nzMin",1)("nzStep",1)}}function Go(u,y){if(1&u&&(e.YNc(0,Tn,6,3,"ng-container",48),e.YNc(1,to,3,4,"ng-template",null,62,e.W1O)),2&u){const c=y.filter,m=e.MAs(2);e.Q6J("ngIf",void 0===c.inputType||"default"===c.inputType)("ngIfElse",m)}}const ho=function(){return[6,6]};function Ro(u,y){1&u&&(e.TgZ(0,"nz-row",73)(1,"nz-col")(2,"span"),e._uU(3,"Use checkboxes to select or deselect EIDs"),e.qZA()()()),2&u&&e.Q6J("nzGutter",e.DdM(1,ho))}function Oo(u,y){1&u&&(e.TgZ(0,"nz-tag",84),e._UZ(1,"i",85),e.TgZ(2,"span"),e._uU(3,"Loading\u2026"),e.qZA()())}const ai=function(u){return{$implicit:u}};function Wo(u,y){if(1&u&&(e.TgZ(0,"nz-tag",88),e._UZ(1,"span",89),e.TgZ(2,"span",90),e._uU(3),e.qZA()()),2&u){e.oxw();const c=e.MAs(4),m=e.oxw().ngrxLet;e.xp6(2),e.Q6J("nzTooltipTitle",c)("nzTooltipTitleContext",e.VKq(3,ai,m.query)),e.xp6(1),e.hij(" Query Error",m.query.length>1?"s":""," ")}}function Ci(u,y){if(1&u&&(e.TgZ(0,"nz-tag",88)(1,"span",90)(2,"span",91)(3,"strong"),e._uU(4),e.qZA()()()()),2&u){e.oxw();const c=e.MAs(4),m=e.oxw().ngrxLet;e.xp6(1),e.Q6J("nzTooltipTitle",c)("nzTooltipTitleContext",e.VKq(3,ai,m.network)),e.xp6(3),e.hij(" Network Error",m.query.length>1?"s":""," ")}}function zi(u,y){if(1&u&&(e.TgZ(0,"div"),e._uU(1),e.qZA()),2&u){const c=y.$implicit;e.xp6(1),e.hij(" ",c.message," ")}}function ro(u,y){1&u&&e.YNc(0,zi,2,1,"div",8),2&u&&e.Q6J("ngForOf",y.$implicit)}function hr(u,y){if(1&u&&(e.ynx(0),e.YNc(1,Wo,4,5,"nz-tag",86),e.YNc(2,Ci,5,5,"nz-tag",86),e.YNc(3,ro,1,1,"ng-template",null,87,e.W1O),e.BQk()),2&u){const c=e.oxw().ngrxLet;e.xp6(1),e.Q6J("ngIf",c.query),e.xp6(1),e.Q6J("ngIf",c.network)}}function ir(u,y){if(1&u&&(e.ynx(0),e.YNc(1,hr,5,2,"ng-container",10),e.BQk()),2&u){const c=y.ngrxLet;e.xp6(1),e.Q6J("ngIf",c)}}function Yr(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"div",92)(1,"nz-checkbox-group",93),e.NdJ("ngModelChange",function(j){e.CHM(c);const Be=e.oxw(2);return e.KtG(Be.onPreferenceChange$.next(j))}),e.ALo(2,"ngrxPush"),e.qZA()()}if(2&u){const c=e.oxw(2);e.xp6(1),e.Q6J("ngModel",e.lcZ(2,1,c.setPreference$))}}function Dr(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"nz-row",73)(1,"nz-col",74),e.YNc(2,Oo,4,0,"nz-tag",75),e.ALo(3,"ngrxPush"),e.ALo(4,"ngrxPush"),e._UZ(5,"cvc-no-more-rows",76),e.ALo(6,"ngrxPush"),e.qZA(),e.TgZ(7,"nz-col",74),e.YNc(8,ir,2,1,"ng-container",3),e.qZA(),e.TgZ(9,"nz-col",74),e._UZ(10,"cvc-table-counts2",77),e.qZA(),e.TgZ(11,"nz-col",78)(12,"nz-button-group")(13,"button",79),e.NdJ("click",function(){e.CHM(c);const j=e.oxw();return e.KtG(j.onResetFilter$.next())}),e._UZ(14,"span",80),e.qZA(),e.TgZ(15,"button",81),e._UZ(16,"span",82),e.qZA()(),e.YNc(17,Yr,3,3,"ng-template",null,83,e.W1O),e.qZA()()}if(2&u){const c=e.MAs(18),m=e.oxw();e.Q6J("nzGutter",8),e.xp6(2),e.Q6J("ngIf",e.lcZ(3,7,m.loading$)&&e.lcZ(4,9,m.isFetchMore$)),e.xp6(3),e.Q6J("cvcShowTag",e.lcZ(6,11,m.noMoreRows$)),e.xp6(3),e.Q6J("ngrxLet",m.queryError$),e.xp6(2),e.Q6J("cvcTableCountsConnection",m.connection$),e.xp6(5),e.Q6J("nzPopoverContent",c)("nzPopoverTrigger","click")}}const rr=function(){return[]},za=function(){return{x:"800px",y:"200px"}};let Or=((ur=class{constructor(y,c,m){this.queryGQL=y,this.apollo=c,this.cdr=m,this.cvcSelectedIdsChange=new e.vpe,this.isScrolling=!1,this.colGuards=Po,this.onFetchMore$=new st.x,this.onPreferenceChange$=new Ge.X([]),this.onResetFilter$=new st.x,this.onRowSelected$=new st.x,this.onScroll$=new Ge.X("stop"),this.onSetSelectedRow$=new Ge.X(new Set),this.queryError$=new st.x,this.queryRequest$=new st.x,this.queryResult$=new Mo.t(1),this.isFetchMore$=new Ge.X(!1),this.noMoreRows$=new Ge.X(!1),this.scrollToIndex$=new st.x,this.tableConfig=new ui;const j=(0,vo.a)(this.tableConfig.getFilterStreams()),Be=(0,vo.a)(this.tableConfig.getSortStreams()).pipe((0,De.h)(Mt=>Mt.filter(bn=>null!==bn.value).length<=1));this.refetch$=(0,vo.a)([Be,j]).pipe((0,vt.U)(([Mt,bn])=>({query:"refetch",sort:Mt,filter:bn}))),this.fetchMore$=this.onFetchMore$.pipe((0,vt.U)(Mt=>({query:"fetchMore",fetchMore:{...Mt}}))),(0,qn.T)(this.refetch$,this.fetchMore$).pipe((0,Jn.b)(50),(0,ce.t)(this)).subscribe(Mt=>{const bn=this.getQueryVars(Mt);this.queryRef?(this.queryError$.next({}),"refetch"===Mt.query?(this.isFetchMore$.next(!1),this.queryRef.refetch(bn).then(Hn=>{(Hn.error||Hn.errors)&&this.queryError$.next(this.getRequestErrors(Hn))}).then(()=>{this.scrollToIndex$.next(0)})):(this.isFetchMore$.next(!0),this.queryRef.fetchMore({variables:bn}).then(Hn=>{(Hn.error||Hn.errors)&&this.queryError$.next(this.getRequestErrors(Hn))}))):(this.isFetchMore$.next(!1),this.queryError$.next({}),this.queryRef=this.queryGQL.watch(bn),this.queryRef.valueChanges.pipe((0,ce.t)(this)).subscribe(Hn=>{this.queryResult$.next(Hn),(Hn.error||Hn.errors)&&this.queryError$.next(this.getRequestErrors(Hn))}))}),this.loading$=this.queryResult$.pipe((0,rn.j)("loading"),(0,ko.x)()),this.connection$=this.queryResult$.pipe((0,rn.j)("data","evidenceItems"),(0,De.h)(zo.ep)),this.pageInfo$=this.connection$.pipe((0,rn.j)("pageInfo"),(0,De.h)(zo.ep)),this.row$=(0,vo.a)([this.connection$.pipe((0,rn.j)("edges"),(0,De.h)(zo.ep),(0,vt.U)(Mt=>Mt.map(bn=>bn.node))),this.onSetSelectedRow$]).pipe((0,vt.U)(([Mt,bn])=>Mt.map(Hn=>{if(Hn)return{...Hn,evidenceItem:{__typename:"EvidenceItem",id:Hn.id,name:Hn.name,link:Hn.link,status:Hn.status},selected:bn.has(Hn.id)}}))),this.col$=new Ge.X(this.tableConfig.get()),this.setPreference$=this.col$.pipe((0,vt.U)(Mt=>this.getColPrefsFromTableConfig(Mt))),this.onPreferenceChange$.pipe((0,it.M)(this.col$),(0,vt.U)(([Mt,bn])=>this.getTableConfigFromColPrefs(Mt,bn)),(0,ce.t)(this)).subscribe(Mt=>{this.col$.next(Mt)}),this.onSetTableFilter$=new Ge.X([]),this.onSetTableFilter$.pipe((0,ce.t)(this)).subscribe(Mt=>{const bn=this.col$.getValue();Mt.forEach(Hn=>{const Bo=bn.find(Wi=>Wi.key===Hn.key);if(void 0!==Bo.filter.inputType){const Wi=Bo.filter.options[0];if(null===Hn.value)return Bo.filter.options=[{...Wi,value:null}],void Bo.filter.changes.next(Hn);if(Array.isArray(Hn.value)&&0===Hn.value.length)return Bo.filter.options=[{...Wi,value:null}],void Bo.filter.changes.next({...Hn,value:null});let er;Array.isArray(Hn.value)?Hn.value.length>0&&(er=Hn.value[0]):er=Hn.value;const Bl=Bo.filter.typename;if(!Bl||!er)return void console.error(`evidence-manager requires column config '${Bo.key}' provide a typename for cvcTablePrefs Input to set its filter`);const ec=this.getEntityName(Bl,er);if(!ec)return;Bo.filter.options=[{...Wi,value:ec}],Bo.filter.changes.next({...Hn,value:ec})}else Hi(Bo)&&Bo.filter.changes.next(Hn)})}),this.onSetTablePref$=new Ge.X([]),this.onSetTablePref$.pipe((0,it.M)(this.setPreference$),(0,vt.U)(([Mt,bn])=>{const Hn=[];return Mt.forEach(Bo=>{let Wi=bn.find(er=>er.value===Bo.value);Wi?Hn.push({...Wi,...Bo}):console.warn(`evidence-manager onSetTablePref$ received updated preferences for column '${Bo.value}', but a column with that key could not be found.`)}),Hn}),(0,ce.t)(this)).subscribe(Mt=>{this.onPreferenceChange$.next(Mt)}),this.onRowSelected$.pipe((0,it.M)(this.onSetSelectedRow$),(0,ce.t)(this)).subscribe(([Mt,bn])=>{Mt.selected?bn.add(Mt.id):bn.delete(Mt.id),this.onSetSelectedRow$.next(bn),this.cvcSelectedIdsChange.next(Array.from(bn))}),this.onScroll$.pipe((0,vt.U)(Mt=>"stop"!==Mt),(0,ko.x)(),(0,ce.t)(this)).subscribe(Mt=>{this.isScrolling=Mt,this.cdr.detectChanges()}),this.onScroll$.pipe((0,De.h)(Mt=>"bottom"===Mt),(0,it.M)(this.pageInfo$),(0,vt.U)(([Mt,bn])=>bn),(0,ce.t)(this)).subscribe(Mt=>{Mt.hasNextPage||(this.noMoreRows$.next(!0),this.cdr.detectChanges(),setInterval(()=>this.noMoreRows$.next(!1)))})}ngAfterViewInit(){this.onResetFilter$.pipe((0,it.M)((0,$o.of)(this.tableConfig.get())),(0,ce.t)(this)).subscribe(([y,c])=>{const m=[];c.forEach(j=>{if(Ao(j)&&j.sort.changes&&j.sort.changes.next({key:j.key,value:j.sort.default??null}),Hi(j)){const Be=j.filter.options.find(Mt=>1==Mt.byDefault)?.value;j.filter.changes&&j.filter.changes.next({key:j.key,value:Be||null})}m.push(j)}),this.col$.next(m)})}getQueryVars(y){const c=this.getQueryFilterParams(y);return{...this.getQuerySortParams(y),...c,...y.fetchMore}}getQuerySortParams(y){if(!y.sort)return;const m=y.sort.find(Be=>null!==Be.value);return m?{sortBy:{column:this.getSortColumnFromColKey(m.key),direction:"ascend"===m.value?Nn.SrV.Asc:Nn.SrV.Desc||void 0}}:void 0}getQueryFilterParams(y){let c={};return y.filter&&y.filter.forEach(m=>{c[Ai[m.key]||m.key]=null===m.value||""===m.value?void 0:m.value}),c}getRequestErrors(y){return{query:y.errors,network:y.error}}getTableConfigFromColPrefs(y,c){return c.forEach(m=>{if(Yi.find(Be=>Be===m.key))return;const j=y.find(Be=>Be.value===m.key);j&&(m.hidden=!j?.checked)}),[...c]}getColPrefsFromTableConfig(y){let c=[];return y.forEach(m=>{Yi.find(j=>j===m.key)||c.push({label:m.tooltip||m.label,value:m.key,checked:!m.hidden})}),c}getSortColumnFromColKey(y){return Ki[y]}getEntityName(y,c){const m={id:`${y}:${c}`,fragment:Do.Ps`
                fragment Linkable${y}Entity on ${y} {
                  id
                  name
                  link
                }`},j=this.apollo.client.readFragment(m);if(j)return j.name;console.error(`evidence-manager onSetTableFilter$ could not find cached entity ${y}:${c} to populate input filter`)}trackByIndex(y,c){return c?.id}ngOnChanges(y){if(y.cvcTableSettings){const c=y.cvcTableSettings.currentValue;void 0!==c&&this.onSetTableFilter$.next(c.filters)}if(y.cvcSelectedIds){const c=y.cvcSelectedIds.currentValue,m=new Set;void 0!==c&&c.forEach(j=>m.add(j)),this.onSetSelectedRow$.next(m)}}}).\u0275fac=function(y){return new(y||ur)(e.Y36(Nn.EH_),e.Y36(co._M),e.Y36(e.sBO))},ur.\u0275cmp=e.Xpm({type:ur,selectors:[["cvc-evidence-manager"]],inputs:{cvcTableSettings:"cvcTableSettings",cvcSelectedIds:"cvcSelectedIds"},outputs:{cvcSelectedIdsChange:"cvcSelectedIdsChange"},features:[e.TTD],decls:16,vars:27,consts:[["nzSize","small",3,"nzTitle","nzExtra"],["cvcTableScroller","",3,"nzData","cvcTableScrollerQueryRef","cvcTableScrollerPageInfo","cvcTableScrollerToIndex","nzScroll","nzVirtualForTrackBy","nzVirtualItemSize","nzSize","nzFrontPagination","nzShowPagination","nzLoading","cvcTableScrollerOnScroll","cvcTableScrollerOnFetch"],["virtualTable",""],[4,"ngrxLet"],["columnFilterInput",""],["cardTitle",""],["extraTemplate",""],[1,"col-header-row"],[4,"ngFor","ngForOf"],[1,"filter-row"],[4,"ngIf"],[3,"nzShowCheckbox","nzWidth","nzAlign","nzLeft","nzRight",4,"ngIf"],[3,"nzColumnKey","nzAlign","nzWidth","nzLeft","nzRight","nzShowSort","nzSortFn","nzSortOrder","nzSortOrderChange",4,"ngIf"],["nz-tooltip","",3,"nzColumnKey","nzAlign","nzWidth","nzLeft","nzRight","nzTooltipTitle",4,"ngIf"],[3,"nzShowCheckbox","nzWidth","nzAlign","nzLeft","nzRight"],[3,"nzColumnKey","nzAlign","nzWidth","nzLeft","nzRight","nzShowSort","nzSortFn","nzSortOrder","nzSortOrderChange"],["nz-tooltip","",1,"col-header-label",3,"nzTooltipTitle"],["nz-tooltip","",3,"nzColumnKey","nzAlign","nzWidth","nzLeft","nzRight","nzTooltipTitle"],[3,"nzColumnKey","nzAlign","nzWidth","nzLeft","nzRight",4,"ngIf"],[3,"nzColumnKey","nzWidth","nzAlign","nzLeft","nzRight",4,"ngIf"],["class","attribute-filter","nzCustomFilter","",3,"nzColumnKey","nzWidth","nzAlign","nzLeft","nzRight","nzShowSort","nzSortFn","nzSortOrder","nzShowFilter","nzFilterFn","nzSortOrderChange",4,"ngIf"],["class","attribute-filter","nzCustomFilter","",3,"nzColumnKey","nzWidth","nzAlign","nzLeft","nzRight","nzFilterFn",4,"ngIf"],[3,"nzColumnKey","nzAlign","nzWidth","nzLeft","nzRight"],[3,"nzColumnKey","nzWidth","nzAlign","nzLeft","nzRight"],[3,"cvcInputType","cvcPlaceholder","cvcModel","cvcModelChange",4,"ngIf"],[3,"cvcInputType","cvcPlaceholder","cvcModel","cvcModelChange"],["nzCustomFilter","",1,"attribute-filter",3,"nzColumnKey","nzWidth","nzAlign","nzLeft","nzRight","nzShowSort","nzSortFn","nzSortOrder","nzShowFilter","nzFilterFn","nzSortOrderChange"],["enumTableFilter",""],[3,"nzDropdownMenu","nzActive"],["enumTagFilterTrigger",""],["nz-icon","","nzType","filter","nzTheme","fill"],["enumFilterMenu","nzDropdownMenu"],[3,"cvcColumnKey","cvcFilterOptions","cvcOption","cvcOptionChange"],["nzCustomFilter","",1,"attribute-filter",3,"nzColumnKey","nzWidth","nzAlign","nzLeft","nzRight","nzFilterFn"],["nz-icon","","nzType","search"],["textTagFilterMenu","nzDropdownMenu"],[1,"ant-table-filter-dropdown"],[1,"custom-input-dropdown"],[3,"cvcPlaceholder","cvcModel","cvcModelChange"],["nz-virtual-scroll",""],[1,"data-row"],[3,"nzChecked","nzAlign","nzLeft","nzRight","nzCheckedChange",4,"ngIf"],[3,"nzAlign","nzLeft","nzRight",4,"ngIf"],[3,"nzChecked","nzAlign","nzLeft","nzRight","nzCheckedChange"],[3,"nzAlign","nzLeft","nzRight"],["entityTagList",""],["entityTag",""],["emptyEntityTagCell",""],[4,"ngIf","ngIfElse"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"cvcTagTemplate","cvcTagListConfig"],[3,"cvcCollectionTagConfig","cvcTagTemplate","cvcShowFullLabels"],[3,"cvcTruncateLabel","cvcLinkableEntity","cvcEmphasize","cvcShowPopover","cvcStatus","cvcFullWidth"],[3,"cvcEmptyCategory"],["cvcContext","compact",3,"cvcFullWidth","cvcAttrValue","cvcTooltip",4,"ngIf","ngIfElse"],["emptyEnumTagCell",""],["cvcContext","compact",3,"cvcFullWidth","cvcAttrValue","cvcTooltip"],["cvcDisplayMode","small",3,"cvcEmptyCategory"],["nz-tooltip","","style","width: 100%; cursor: help; color: #595959",3,"nzTooltipTitle",4,"ngIf","ngIfElse"],["emptyTextTagCell",""],["nz-tooltip","",2,"width","100%","cursor","help","color","#595959",3,"nzTooltipTitle"],["nz-icon","","nzType","align-left","nzTheme","outline"],["numericInput",""],["nzSize","small",3,"nzSuffix"],["nz-input","",3,"placeholder","ngModel","nzFilterChange"],["filterInput",""],["suffixIcon",""],["nz-icon","","nzType","search","style","color: #ddd",4,"ngIf"],["nz-icon","","class","ant-input-clear-icon","nzTheme","fill","nzType","close-circle",3,"click",4,"ngIf"],["nz-icon","","nzType","search",2,"color","#ddd"],["nz-icon","","nzTheme","fill","nzType","close-circle",1,"ant-input-clear-icon",3,"click"],["nzSize","small"],[2,"width","100%",3,"nzPlaceHolder","ngModel","nzMin","nzStep","ngModelChange"],[3,"nzGutter"],["nzFlex","auto"],["nzColor","processing",4,"ngIf"],[3,"cvcShowTag"],[3,"cvcTableCountsConnection"],["nzFlex","35px"],["nz-button","","type","button","nzType","default","nzSize","small",3,"click"],["nz-icon","","nzType","retweet","nzTheme","outline"],["nz-button","","nz-popover","","nzPopoverTitle","Visible Columns","type","button","nzType","default","nzSize","small",3,"nzPopoverContent","nzPopoverTrigger"],["nz-icon","","nzType","setting","nzTheme","outline"],["prefsPopover",""],["nzColor","processing"],["nz-icon","","nzType","sync","nzSpin",""],["nzColor","error","style","margin-left: 12px",4,"ngIf"],["queryError",""],["nzColor","error",2,"margin-left","12px"],["nz-icon","","nzType","question-circle","nzTheme","outline"],["nz-tooltip","",2,"cursor","help",3,"nzTooltipTitle","nzTooltipTitleContext"],["nz-typography",""],[1,"prefs-popover"],[3,"ngModel","ngModelChange"]],template:function(y,c){if(1&y&&(e.TgZ(0,"nz-card",0)(1,"nz-table",1,2),e.NdJ("cvcTableScrollerOnScroll",function(j){return c.onScroll$.next(j)})("cvcTableScrollerOnFetch",function(j){return c.onFetchMore$.next(j)}),e.ALo(3,"ngrxPush"),e.ALo(4,"ngrxPush"),e.ALo(5,"ngrxPush"),e.ALo(6,"ngrxPush"),e.ALo(7,"ngrxPush"),e.YNc(8,Yc,5,2,"thead",3),e.YNc(9,me,2,0,"tbody",3),e.qZA()(),e.YNc(10,Go,3,2,"ng-template",null,4,e.W1O),e.YNc(12,Ro,4,2,"ng-template",null,5,e.W1O),e.YNc(14,Dr,19,13,"ng-template",null,6,e.W1O)),2&y){const m=e.MAs(13),j=e.MAs(15);e.Q6J("nzTitle",m)("nzExtra",j),e.xp6(1),e.Q6J("nzData",e.lcZ(3,15,c.row$)||e.DdM(25,rr))("cvcTableScrollerQueryRef",c.queryRef)("cvcTableScrollerPageInfo",e.lcZ(4,17,c.pageInfo$))("cvcTableScrollerToIndex",e.lcZ(5,19,c.scrollToIndex$))("nzScroll",e.DdM(26,za))("nzVirtualForTrackBy",c.trackByIndex)("nzVirtualItemSize",28)("nzSize","small")("nzFrontPagination",!1)("nzShowPagination",!1)("nzLoading",e.lcZ(6,21,c.loading$)&&!e.lcZ(7,23,c.isFetchMore$)),e.xp6(7),e.Q6J("ngrxLet",c.col$),e.xp6(1),e.Q6J("ngrxLet",c.col$)}},dependencies:[M.sg,M.O5,M.tP,ye,Le.P,ns,sn,xo.J,Ee.H,he,t.Fj,t.JJ,t.On,F.eJ,On.ix,On.fY,To.w,jo.dQ,Gn.bd,Yt.ub,Fn.RR,R.t3,R.SK,Re.Ls,Pe.Zp,Pe.gB,Pe.ke,Bn._V,Bn.Rb,Wn.lU,Ln.N8,Ln.qD,Ln.Uo,Ln._C,Ln.h7,Ln.Om,Ln.p0,Ln.$Z,Ln.zu,Ln.qn,Ln.Ql,Ln.UX,Ln.g6,Wt.j,Xe.SY,ge.ZU,_i,Hs,Kr,kr,J.Do,nr,F.fM],styles:["[_nghost-%COMP%]{display:block}nz-card[_ngcontent-%COMP%]:first-of-type     .ant-card-body{padding:0;margin-top:1px}.table-info[_ngcontent-%COMP%]{margin-left:.5rem}tr.col-header-row[_ngcontent-%COMP%]   th.ant-table-cell[_ngcontent-%COMP%]{white-space:nowrap}tr.col-header-row[_ngcontent-%COMP%]   th.ant-table-cell.align-right[_ngcontent-%COMP%]     .ant-table-column-title{text-align:right}tr.filter-row[_ngcontent-%COMP%]   th.ant-table-cell[_ngcontent-%COMP%]{padding:3px 4px}tr.filter-row[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   nz-filter-trigger[_ngcontent-%COMP%]     span.ant-dropdown-trigger{margin-left:0;padding-right:12px}tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell[_ngcontent-%COMP%]{white-space:nowrap}tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell[_ngcontent-%COMP%]   .anticon.attribute-icon[_ngcontent-%COMP%]{color:#595959}tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell.overflow-ellipsis[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis}tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell.button-cell[_ngcontent-%COMP%]{padding:0}tr.data-row[_ngcontent-%COMP%]   td.align-right[_ngcontent-%COMP%], tr.col-header-row[_ngcontent-%COMP%]   th.ant-table-cell[_ngcontent-%COMP%]   .align-right[_ngcontent-%COMP%], tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell[_ngcontent-%COMP%]   .align-right[_ngcontent-%COMP%], tr.filter-row[_ngcontent-%COMP%]   th.ant-table-cell[_ngcontent-%COMP%]   .align-right[_ngcontent-%COMP%]{text-align:right}tr.data-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-of-type{padding-left:6px}tr.data-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-of-type   cvc-entity-tag[_ngcontent-%COMP%]{margin-left:6px}.ant-table-filter-dropdown[_ngcontent-%COMP%]{padding:8px}.prefs-popover[_ngcontent-%COMP%]     nz-checkbox-group:first-of-type label{display:block}.prefs-popover[_ngcontent-%COMP%]     nz-checkbox-group:first-of-type label span{display:inline-block}"],changeDetection:0}),ur);Or=(0,ne.gn)([(0,ce.c)()],Or);const fs=["optionTemplates"];function sc(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"nz-col",9)(1,"cvc-evidence-manager",10),e.NdJ("cvcSelectedIdsChange",function(j){e.CHM(c);const Be=e.oxw();return e.KtG(Be.onPopulate$.next(j))}),e.ALo(2,"ngrxPush"),e.ALo(3,"ngrxPush"),e.qZA()()}if(2&u){const c=e.oxw();e.xp6(1),e.Q6J("cvcSelectedIds",e.lcZ(2,2,c.onEid$))("cvcTableSettings",e.lcZ(3,4,c.tableSettingsChange$))}}function Ul(u,y){if(1&u&&e._UZ(0,"cvc-entity-tag",13),2&u){const c=e.oxw().$implicit,m=e.oxw().ngrxLet;e.Q6J("cvcDisableLink",!0)("cvcCacheId",c.__typename+":"+c.id)("cvcEmphasize",m)}}function ac(u,y){1&u&&(e.ynx(0),e.YNc(1,Ul,1,3,"ng-template",null,12,e.W1O),e.BQk())}function $r(u,y){if(1&u&&(e.ynx(0),e.YNc(1,ac,3,0,"ng-container",11),e.ALo(2,"ngrxPush"),e.BQk()),2&u){const c=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,c.result$))}}function wn(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"div",14)(1,"cvc-entity-tag",15),e.NdJ("cvcOnClose",function(){const Be=e.CHM(c).$implicit,Mt=e.oxw();return e.KtG(Mt.onTagClose$.next(Be.nzValue))}),e.qZA()()}if(2&u){const c=y.$implicit,m=e.oxw();e.xp6(1),e.Q6J("cvcCacheId","EvidenceItem:"+c.nzValue)("cvcContext",m.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",m.props.isMultiSelect?"default":"closeable")}}const Vo=function(){return[6,6]},$c=function(u,y){return{show:u,hide:y}},Ws=Lt(_n(),ni());let bi=(()=>{class u extends Ws{constructor(c,m,j,Be){super(),this.taq=c,this.tq=m,this.changeDetectorRef=j,this.apollo=Be,this.synchronizedFields$=[],this.synchronizedRequired$=[],this.defaultOptions={props:{label:"Evidence Items",placeholder:"Select Evidence Items",isMultiSelect:!0,description:"Select Evidence by ID, or use the manager to select with filtering",entityName:{singular:"Evidence Item",plural:"Evidence Items"},minSearchStrLength:1}},this.synchronizedFieldToColMap=new Map([["molecularProfileId","molecularProfile"],["diseaseId","disease"],["therapyIds","therapies"]]),this.requiredFieldToColMap=new Map([["disease","requiresDisease$"],["therapies","requiresTherapy$"]]),this.onEid$=new Mo.t,this.onShowMgrClick$=new st.x,this.showMgr$=this.onShowMgrClick$.pipe((0,go.R)((Mt,bn)=>!Mt,!1))}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEntitySelectField({typeaheadQuery:this.taq,tagQuery:this.tq,getTypeaheadVarsFn:this.getTypeaheadVarsFn,getTypeaheadResultsFn:this.getTypeaheadResultsFn,getTagQueryVarsFn:this.getTagQueryVarsFn,getTagQueryResultsFn:this.getTagQueryResultsFn,getSelectedItemOptionFn:this.getSelectedItemOptionFn,getSelectOptionsFn:this.getSelectOptionsFn,changeDetectorRef:this.changeDetectorRef,selectOpen$:this.selectOpen$,selectComponent:this.selectComponent}),this.onEid$.pipe((0,ce.t)(this)).subscribe(),this.onEid$.next(this.formControl.value),this.onValueChange$.pipe((0,it.M)(this.onEid$),(0,ce.t)(this)).subscribe(([c,m])=>{Array.isArray(c)&&this.onEid$.next(c)})}configureStateConnections(){this.state&&(this.synchronizedFieldToColMap.forEach((c,m)=>{const j=this.state.fields[`${m}$`];j&&this.synchronizedFields$.push(j.pipe((0,vt.U)(Be=>({key:m,value:Be??null}))))}),this.requiredFieldToColMap.forEach((c,m)=>{const j=this.state.requires[c];j&&this.synchronizedRequired$.push(j.pipe((0,vt.U)(Be=>({key:m,required:Be}))))}),this.onFieldsChange$=(0,vo.a)(this.synchronizedFields$).pipe((0,vt.U)(c=>{const m=[];return c.forEach(j=>{const Be=this.synchronizedFieldToColMap.get(j.key);Be&&m.push({key:Be,value:j.value})}),m})),this.onRequiredChange$=(0,vo.a)(this.synchronizedRequired$).pipe((0,vt.U)(c=>{const m=[];return c.forEach(j=>{m.push({value:j.key,checked:j.required})}),m})),this.tableSettingsChange$=(0,vo.a)([this.onFieldsChange$,this.onRequiredChange$]).pipe((0,vt.U)(([c,m])=>({filters:c,preferences:m})),(0,Jn.b)(100),(0,Di.d)(1)))}getTypeaheadVarsFn(c,m){return{eid:+c.replace(/EID/i,"")}}getTypeaheadResultsFn(c){return c.data.evidenceItems.nodes}getTagQueryVarsFn(c){return{eid:c}}getTagQueryResultsFn(c){return c.data.evidenceItem}getSelectedItemOptionFn(c){return{value:c.id,label:`EID${c.id}`}}getSelectOptionsFn(c,m){return c.map((j,Be)=>({label:m.get(Be)||`EID${j.id}`,value:j.id}))}}return u.\u0275fac=function(c){return new(c||u)(e.Y36(Nn.olA),e.Y36(Nn.EFm),e.Y36(e.sBO),e.Y36(co._M))},u.\u0275cmp=e.Xpm({type:u,selectors:[["cvc-evidence-select"]],viewQuery:function(c,m){if(1&c&&e.Gf(fs,5,e.Rgc),2&c){let j;e.iGM(j=e.CRH())&&(m.optionTemplates=j)}},features:[e.qOj],decls:18,vars:36,consts:[[3,"nzGutter"],["nzFlex","auto"],[3,"cvcSelectMode","cvcMinSearchStrLength","cvcCustomTemplate","cvcFormControl","cvcFormlyAttributes","cvcEntityName","cvcPlaceholder","cvcResults","cvcOptions","cvcShowError","cvcDisabled","cvcLoading","cvcSelectOpen","cvcOnSearch","cvcOnOpenChange","cvcSelectComponent","cvcOnModelChange"],["nzFlex","50px"],["type","button","nz-button","","nzBlock","",1,"manager-button",3,"click"],["nz-icon","",3,"ngClass","nzType"],["nzSpan","24","class","manager-drawer",4,"ngIf"],[4,"ngrxLet"],["selectedTemplate",""],["nzSpan","24",1,"manager-drawer"],[3,"cvcSelectedIds","cvcTableSettings","cvcSelectedIdsChange"],[4,"ngFor","ngForOf"],["optionTemplates",""],[3,"cvcDisableLink","cvcCacheId","cvcEmphasize"],[1,"ant-select-selection-item-content"],[3,"cvcCacheId","cvcContext","cvcMode","cvcOnClose"]],template:function(c,m){if(1&c&&(e.TgZ(0,"nz-row",0)(1,"nz-col",1)(2,"cvc-entity-select",2),e.NdJ("cvcOnSearch",function(Be){return m.onSearch$.next(Be)})("cvcOnOpenChange",function(Be){return m.onOpenChange$.next(Be)})("cvcSelectComponent",function(Be){return m.selectComponent=Be})("cvcOnModelChange",function(Be){return m.props.change&&m.props.change(m.field,Be)}),e.ALo(3,"ngrxPush"),e.ALo(4,"ngrxPush"),e.ALo(5,"ngrxPush"),e.ALo(6,"ngrxPush"),e.qZA()(),e.TgZ(7,"nz-col",3)(8,"button",4),e.NdJ("click",function(){return m.onShowMgrClick$.next()}),e._UZ(9,"span",5),e.ALo(10,"ngrxPush"),e.ALo(11,"ngrxPush"),e._uU(12," Manager "),e.qZA()(),e.YNc(13,sc,4,6,"nz-col",6),e.ALo(14,"ngrxPush"),e.qZA(),e.YNc(15,$r,3,3,"ng-container",7),e.YNc(16,wn,2,3,"ng-template",null,8,e.W1O)),2&c){const j=e.MAs(17);e.Q6J("nzGutter",e.DdM(32,Vo)),e.xp6(2),e.Q6J("cvcSelectMode",m.props.isMultiSelect?"multiple":"default")("cvcMinSearchStrLength",m.props.minSearchStrLength)("cvcCustomTemplate",j)("cvcFormControl",m.formControl)("cvcFormlyAttributes",m.field)("cvcEntityName",m.props.entityName)("cvcPlaceholder",m.props.placeholder)("cvcResults",e.lcZ(3,18,m.result$))("cvcOptions",e.lcZ(4,20,m.selectOption$))("cvcShowError",m.showError)("cvcDisabled",m.props.disabled)("cvcLoading",e.lcZ(5,22,m.isLoading$))("cvcSelectOpen",e.lcZ(6,24,m.selectOpen$)),e.xp6(7),e.Q6J("ngClass",e.WLB(33,$c,e.lcZ(10,26,m.showMgr$),!e.lcZ(11,28,m.showMgr$)))("nzType","caret-right"),e.xp6(4),e.Q6J("ngIf",e.lcZ(14,30,m.showMgr$)),e.xp6(2),e.Q6J("ngrxLet",m.onSearch$)}},dependencies:[M.mk,M.sg,M.O5,Kn,xo.J,F.eJ,On.ix,To.w,jo.dQ,R.t3,R.SK,Re.Ls,Or,F.fM],styles:[".manager-button[_ngcontent-%COMP%]   span.hide[_ngcontent-%COMP%]{transform:rotate(0);transition:transform .2s linear}.manager-button[_ngcontent-%COMP%]   span.show[_ngcontent-%COMP%]{transform:rotate(90deg);transition:transform .2s linear}"],changeDetection:0}),u})();var is=a(3517);let wr=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,Re.PV,Wt.X,Xe.cg,ge.ZJ,It.s,Te.x]}),u})(),fr=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,Wt.X,ge.ZJ,Wn.$6,Re.PV,Xe.cg,It.s,wr]}),u})();const Ta={types:[{name:"evidence-select",wrappers:["form-field"],component:bi},{name:"evidence-multi-select",wrappers:["form-field"],component:bi,defaultOptions:{props:{label:"Evidence Items",isMultiSelect:!0}}}]};let Uc=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,$e,is.M,fr,Kt,wr,Te.x,dn.y,It.s,En,v.X0.forChild(Ta),t.u5,On.sL,Gn.vh,Yt.Wr,Fn.b1,s.U5,R.Jb,Re.PV,Pe.o7,Bn.Zf,Wn.$6,Ln.HQ,Wt.X,Xe.cg,ge.ZJ]}),u})();const Zs=["optionTemplates"];function Ed(u,y){if(1&u&&(e.ynx(0),e.TgZ(1,"em"),e._UZ(2,"span",9),e.ALo(3,"highlightTypeahead"),e.qZA(),e.BQk()),2&u){const c=e.oxw(2).$implicit,m=e.oxw().ngrxLet;e.xp6(2),e.Q6J("nzTooltipTitle",c.geneAliases.join(", "))("innerHtml",e.xi3(3,2,c.geneAliases.join(", "),m),e.oJD)}}function Gl(u,y){1&u&&e._uU(0,"--")}function sr(u,y){if(1&u&&(e._UZ(0,"cvc-entity-tag",5),e.TgZ(1,"span",6),e.YNc(2,Ed,4,5,"ng-container",7),e.YNc(3,Gl,1,0,"ng-template",null,8,e.W1O),e.qZA()),2&u){const c=e.MAs(4),m=e.oxw().$implicit,j=e.oxw().ngrxLet;e.Q6J("cvcDisableLink",!0)("cvcCacheId",m.__typename+":"+m.id)("cvcEmphasize",j),e.xp6(2),e.Q6J("ngIf",m.geneAliases.length>0)("ngIfElse",c)}}function qr(u,y){1&u&&(e.ynx(0),e.YNc(1,sr,5,5,"ng-template",null,4,e.W1O),e.BQk())}function Ks(u,y){if(1&u&&(e.ynx(0),e.YNc(1,qr,3,0,"ng-container",3),e.ALo(2,"ngrxPush"),e.BQk()),2&u){const c=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,c.result$))}}function ws(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"div",10)(1,"cvc-entity-tag",11),e.NdJ("cvcOnClose",function(){const Be=e.CHM(c).$implicit,Mt=e.oxw();return e.KtG(Mt.onTagClose$.next(Be.nzValue))}),e.qZA()()}if(2&u){const c=y.$implicit,m=e.oxw();e.xp6(1),e.Q6J("cvcCacheId","Gene:"+c.nzValue)("cvcContext",m.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",m.props.isMultiSelect?"default":"closeable")}}const Xr=Lt(_n(),ni());let Gc=(()=>{class u extends Xr{constructor(c,m,j){super(),this.taq=c,this.tq=m,this.changeDetectorRef=j,this.defaultOptions={props:{label:"Gene",placeholder:"Search Genes",isMultiSelect:!1,entityName:{singular:"Gene",plural:"Genes"},description:"Entrez Gene Symbol"}}}ngAfterViewInit(){this.configureBaseField(),this.configureEntitySelectField({typeaheadQuery:this.taq,typeaheadParam$:void 0,tagQuery:this.tq,getTypeaheadVarsFn:this.getTypeaheadVarsFn,getTypeaheadResultsFn:this.getTypeaheadResultsFn,getTagQueryVarsFn:this.getTagQueryVarsFn,getTagQueryResultsFn:this.getTagQueryResultsFn,getSelectedItemOptionFn:this.getSelectedItemOptionFn,getSelectOptionsFn:this.getSelectOptionsFn,changeDetectorRef:this.changeDetectorRef,selectOpen$:this.selectOpen$,selectComponent:this.selectComponent})}getTypeaheadVarsFn(c){return{entrezSymbol:c}}getTypeaheadResultsFn(c){return c.data.geneTypeahead}getTagQueryVarsFn(c){return{geneId:c}}getTagQueryResultsFn(c){return c.data.gene}getSelectedItemOptionFn(c){return{value:c.id,label:c.name}}getSelectOptionsFn(c,m){return c.map((j,Be)=>({label:m.get(Be)||j.name,value:j.id}))}}return u.\u0275fac=function(c){return new(c||u)(e.Y36(Nn.czh),e.Y36(Nn.HwR),e.Y36(e.sBO))},u.\u0275cmp=e.Xpm({type:u,selectors:[["cvc-gene-select"]],viewQuery:function(c,m){if(1&c&&e.Gf(Zs,5,e.Rgc),2&c){let j;e.iGM(j=e.CRH())&&(m.optionTemplates=j)}},features:[e.qOj],decls:7,vars:17,consts:[[3,"cvcSelectMode","cvcCustomTemplate","cvcFormControl","cvcFormlyAttributes","cvcPlaceholder","cvcEntityName","cvcResults","cvcOptions","cvcShowError","cvcLoading","cvcOnSearch","cvcOnOpenChange","cvcSelectComponent","cvcOnModelChange"],[4,"ngrxLet"],["selectedTemplate",""],[4,"ngFor","ngForOf"],["optionTemplates",""],[3,"cvcDisableLink","cvcCacheId","cvcEmphasize"],["nz-typography","","nzType","secondary"],[4,"ngIf","ngIfElse"],["noAliases",""],["nz-typography","","nzType","secondary","nz-tooltip","",3,"nzTooltipTitle","innerHtml"],[1,"ant-select-selection-item-content"],[3,"cvcCacheId","cvcContext","cvcMode","cvcOnClose"]],template:function(c,m){if(1&c&&(e.TgZ(0,"cvc-entity-select",0),e.NdJ("cvcOnSearch",function(Be){return m.onSearch$.next(Be)})("cvcOnOpenChange",function(Be){return m.onOpenChange$.next(Be)})("cvcSelectComponent",function(Be){return m.selectComponent=Be})("cvcOnModelChange",function(Be){return m.props.change&&m.props.change(m.field,Be)}),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.ALo(3,"ngrxPush"),e.qZA(),e.YNc(4,Ks,3,3,"ng-container",1),e.YNc(5,ws,2,3,"ng-template",null,2,e.W1O)),2&c){const j=e.MAs(6);e.Q6J("cvcSelectMode",m.props.isMultiSelect?"multiple":"default")("cvcCustomTemplate",j)("cvcFormControl",m.formControl)("cvcFormlyAttributes",m.field)("cvcPlaceholder",m.props.placeholder)("cvcEntityName",m.props.entityName)("cvcResults",e.lcZ(1,11,m.result$))("cvcOptions",e.lcZ(2,13,m.selectOption$))("cvcShowError",m.showError)("cvcLoading",e.lcZ(3,15,m.isLoading$)),e.xp6(4),e.Q6J("ngrxLet",m.onSearch$)}},dependencies:[M.sg,M.O5,F.eJ,Xe.SY,ge.ZU,Kn,xo.J,F.fM,I.A],changeDetection:0}),u})();const Qc={types:[{name:"gene-select",wrappers:["form-field"],component:Gc},{name:"gene-multi-select",wrappers:["form-field"],component:Gc,defaultOptions:{props:{label:"Genes",isMultiSelect:!0}}}]};let Ql=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,t.UX,v.X0.forChild(Qc),yt.L,On.sL,We.LV,Re.PV,Pe.o7,Xe.cg,s.U5,B.ic,ge.ZJ,Wt.X,je,Kt,It.s,Te.x]}),u})();const jl=["optionTemplates"];function cc(u,y){if(1&u&&e._UZ(0,"cvc-attribute-tag",4),2&u){const c=e.oxw().$implicit;e.Q6J("cvcAttrValue",c)}}function lc(u,y){1&u&&(e.ynx(0),e.YNc(1,cc,1,1,"ng-template",null,3,e.W1O),e.BQk())}function uc(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"div",5)(1,"cvc-attribute-tag",6),e.NdJ("cvcOnClose",function(j){e.CHM(c);const Be=e.oxw();return e.KtG(Be.onTagClose$.next(j))}),e.qZA()()}if(2&u){const c=y.$implicit,m=e.oxw();e.xp6(1),e.Q6J("cvcAttrValue",c.nzValue)("cvcContext",m.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",m.props.isMultiSelect?"default":"closeable")}}const Ma={COMBINATION:"Therapies specified were used as part of a combination therapy approach",SEQUENTIAL:"Therapies specified were used at separate timepoints in the same treatment plan",SUBSTITUTES:"Therapies specified are often considered to be of the same family, or behave similarly in a treatment setting"},dc=Lt(_n(),lt()),Wc={types:[{name:"interaction-select",wrappers:["form-field"],component:(()=>{class u extends dc{constructor(c){super(),this.cdr=c,this.defaultOptions={props:{label:"Therapy Interaction",placeholder:"Select Therapy Interaction",requireMultipleTherapies:!0,requireMultipleTherapiesPromptFn:()=>"A single associated therapy does not have an Interaction type",tooltip:"Characterizes the interaction of a multi-therapy treatment",extraType:"prompt"}},this.interactionEnum$=new Ge.X([]),this.placeholder$=new Ge.X(void 0)}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEnumSelectField({optionEnum$:this.interactionEnum$,optionTemplate$:this.optionTemplate$,changeDetectorRef:this.cdr})}configureStateConnections(){if(!this.state)return console.error(`${this.field.id} requires a form state to populate its options, none was found.`),void this.placeholder$.next("ERROR: Form state not found");this.placeholder$.next(this.props.placeholder),this.state.enums.interaction$?(this.state.enums.interaction$.pipe((0,ce.t)(this)).subscribe(c=>{this.interactionEnum$.next(c)}),this.optionTemplates||console.error(`${this.field.id} could not find its optionTemplates QueryList to populate its select options, so simple text labels will be displayed.`),this.optionTemplate$=this.optionTemplates?.changes.pipe((0,vt.U)(c=>c.map(m=>m))),this.onTherapies$=this.state.fields.therapyIds$,this.optionTemplates||console.warn(`${this.field.id} could not find state's fields.therapyIds$ to handle its required & disabled states.`),this.onTherapies$.pipe((0,ce.t)(this)).subscribe(c=>{c&&0!=c.length?1==c.length?(this.props.description="A single associated therapy does not have an Interaction type",this.props.disabled=!0,this.props.required=!1,void 0!==this.formControl.value&&this.formControl.setValue(void 0)):(this.props.description="Select an Interaction Type",this.props.disabled=!1,this.props.required=!0):(this.props.disabled=!0,this.props.required=!1,this.props.description="Interaction type is not applicable when no therapies are selected.",void 0!==this.formControl.value&&this.formControl.setValue(void 0)),this.cdr.markForCheck()}),this.onValueChange$.pipe((0,ce.t)(this)).subscribe(c=>{c?(this.props.description=Ma[c],this.props.extraType="description"):this.props.extraType="prompt"})):console.error(`${this.field.id} could not find form state's interaction$ to populate select.`)}}return u.\u0275fac=function(c){return new(c||u)(e.Y36(e.sBO))},u.\u0275cmp=e.Xpm({type:u,selectors:[["cvc-interaction-select"]],viewQuery:function(c,m){if(1&c&&e.Gf(jl,5,e.Rgc),2&c){let j;e.iGM(j=e.CRH())&&(m.optionTemplates=j)}},features:[e.qOj],decls:7,vars:15,consts:[[3,"cvcFormControl","cvcFormlyAttributes","cvcSelectMode","cvcPlaceholder","cvcCustomTemplate","cvcOptions","cvcShowError","cvcDisabled"],[4,"ngFor","ngForOf"],["selectedTemplate",""],["optionTemplates",""],[3,"cvcAttrValue"],[1,"ant-select-selection-item-content"],[3,"cvcAttrValue","cvcContext","cvcMode","cvcOnClose"]],template:function(c,m){if(1&c&&(e._UZ(0,"cvc-enum-select",0),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.YNc(3,lc,3,0,"ng-container",1),e.ALo(4,"ngrxPush"),e.YNc(5,uc,2,3,"ng-template",null,2,e.W1O)),2&c){const j=e.MAs(6);e.Q6J("cvcFormControl",m.formControl)("cvcFormlyAttributes",m.field)("cvcSelectMode",m.props.isMultiSelect?"multiple":"default")("cvcPlaceholder",e.lcZ(1,9,m.placeholder$))("cvcCustomTemplate",j)("cvcOptions",e.lcZ(2,11,m.selectOption$))("cvcShowError",m.showError)("cvcDisabled",m.props.disabled),e.xp6(3),e.Q6J("ngForOf",e.lcZ(4,13,m.interactionEnum$))}},dependencies:[M.sg,Ke,ye,F.fM]}),u})()}]};let pc=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,t.UX,v.X0.forChild(Wc),je,He,$e]}),u})();var Wl=a(8004);const Zl=["optionTemplates"];function Kl(u,y){if(1&u&&(e.TgZ(0,"nz-tag")(1,"strong"),e._uU(2),e.qZA(),e._uU(3),e.ALo(4,"enumTooltip"),e.qZA()),2&u){const c=e.oxw().$implicit;e.xp6(2),e.Oqu(c),e.xp6(1),e.hij(" - ",e.xi3(4,2,c,"evidenceLevelBrief")," ")}}function Zc(u,y){1&u&&(e.ynx(0),e.YNc(1,Kl,5,5,"ng-template",null,3,e.W1O),e.BQk())}function H(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"nz-tag",7),e.NdJ("nzOnClose",function(j){e.CHM(c);const Be=e.oxw(2);return e.KtG(Be.onTagClose$.next(j))}),e.TgZ(1,"strong"),e._uU(2),e.qZA(),e._uU(3),e.ALo(4,"enumTooltip"),e.qZA()}if(2&u){const c=e.oxw().$implicit;e.xp6(2),e.Oqu(c.nzValue),e.xp6(1),e.hij(" - ",e.xi3(4,2,c.nzValue,"evidenceLevelBrief")," ")}}function te(u,y){if(1&u&&(e.ynx(0),e._uU(1),e.ALo(2,"enumTooltip"),e.BQk()),2&u){const c=e.oxw().$implicit;e.xp6(1),e.hij(" ",e.xi3(2,1,c.nzValue,"evidenceLevelBrief")," ")}}function D(u,y){if(1&u&&(e.TgZ(0,"div",4),e.YNc(1,H,5,5,"nz-tag",5),e.YNc(2,te,3,4,"ng-container",6),e.qZA()),2&u){const c=e.oxw();e.xp6(1),e.Q6J("ngIf",!c.props.isMultiSelect),e.xp6(1),e.Q6J("ngIf",c.props.isMultiSelect)}}const ue=new Map([[Nn.Sx0.A,"Evidence shows consensus association in human medicine"],[Nn.Sx0.B,"Evidence supports association using clinical trial or other primary patient data"],[Nn.Sx0.C,"Evidence supports association using individual case reports from clinical journals"],[Nn.Sx0.D,"Evidence supports association using in vivo or in vitro models"],[Nn.Sx0.E,"Evidential association is inferential or indirect"]]),Fe=Lt(_n(),lt());let ht=(()=>{class u extends Fe{constructor(c){super(),this.cdr=c,this.defaultOptions={props:{label:"Evidence Level",required:!1,isMultiSelect:!1,placeholder:"Select Evidence Level"}},this.levelEnum$=new Ge.X([])}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEnumSelectField({optionEnum$:this.levelEnum$,optionTemplate$:this.optionTemplate$,changeDetectorRef:this.cdr})}configureStateConnections(){this.props.tooltip="Type of study performed to produce the evidence statement",this.placeholder$=new Ge.X(this.props.placeholder),this.levelEnum$.next((0,bo.o6)(Nn.Sx0).map(c=>c)),this.optionTemplates||console.error(`${this.field.id} could not find its optionTemplates QueryList to populate its select options, so simple text labels will be displayed.`),this.optionTemplate$=this.optionTemplates?.changes.pipe((0,vt.U)(c=>c.map(m=>m))),this.onValueChange$.pipe((0,ce.t)(this)).subscribe(c=>{this.props.description=c?ue.get(c):void 0})}}return u.\u0275fac=function(c){return new(c||u)(e.Y36(e.sBO))},u.\u0275cmp=e.Xpm({type:u,selectors:[["cvc-level-select"]],viewQuery:function(c,m){if(1&c&&e.Gf(Zl,5,e.Rgc),2&c){let j;e.iGM(j=e.CRH())&&(m.optionTemplates=j)}},features:[e.qOj],decls:7,vars:15,consts:[[3,"cvcFormControl","cvcFormlyAttributes","cvcSelectMode","cvcPlaceholder","cvcCustomTemplate","cvcOptions","cvcShowError","cvcDisabled"],[4,"ngFor","ngForOf"],["selectedTemplate",""],["optionTemplates",""],[1,"ant-select-selection-item-content"],["nzMode","closeable",3,"nzOnClose",4,"ngIf"],[4,"ngIf"],["nzMode","closeable",3,"nzOnClose"]],template:function(c,m){if(1&c&&(e._UZ(0,"cvc-enum-select",0),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.YNc(3,Zc,3,0,"ng-container",1),e.ALo(4,"ngrxPush"),e.YNc(5,D,3,2,"ng-template",null,2,e.W1O)),2&c){const j=e.MAs(6);e.Q6J("cvcFormControl",m.formControl)("cvcFormlyAttributes",m.field)("cvcSelectMode",m.props.isMultiSelect?"multiple":"default")("cvcPlaceholder",e.lcZ(1,9,m.placeholder$))("cvcCustomTemplate",j)("cvcOptions",e.lcZ(2,11,m.selectOption$))("cvcShowError",m.showError)("cvcDisabled",m.props.disabled),e.xp6(3),e.Q6J("ngForOf",e.lcZ(4,13,m.levelEnum$))}},dependencies:[M.sg,M.O5,Wt.j,Ke,F.fM,Wl.v]}),u})();const gt={types:[{name:"level-select",wrappers:["form-field"],component:ht},{name:"level-multi-select",wrappers:["form-field"],component:ht,defaultOptions:{props:{label:"Levels",isMultiSelect:!0}}}]};let an=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,t.UX,v.X0.forChild(gt),Wt.X,It.s,je,He]}),u})();var no,An=a(6928);let so=((no=class{constructor(y){this.el=y,this.domChange=new e.vpe,this.changes=new MutationObserver(c=>{(0,So.D)(c).pipe((0,vt.U)(m=>{const j=m.target;return"class"===m.attributeName?{type:"class",change:j.classList.value,key:`${m.attributeName}:${j.classList.value}`}:"disabled"===m.attributeName?{type:"disabled",change:j.disabled,key:`${m.attributeName}:${j.disabled}`}:"hidden"===m.attributeName?{type:"hidden",change:j.hidden,key:`${m.attributeName}:${j.hidden}`}:{type:m.attributeName,change:"unknown change type",key:`${m.attributeName}:unknown-change-type`}}),(0,Q.g)("key"),(0,ce.t)(this)).subscribe(m=>{this.domChange.emit(m)})}),this.changes.observe(this.el.nativeElement,{attributeFilter:["class","disabled","hidden"],attributes:!0,childList:!1,subtree:!1})}ngAfterViewInit(){this.initialClass=this.el.nativeElement.classList.value}ngOnDestroy(){this.changes.disconnect()}}).\u0275fac=function(y){return new(y||no)(e.Y36(e.SBq))},no.\u0275dir=e.lG2({type:no,selectors:[["button","cvcOrgSubmitButton",""]],outputs:{domChange:"domChange"}}),no);so=(0,ne.gn)([(0,ce.c)()],so);var pi,Qo=a(951);function Js(u,y){if(1&u&&(e.TgZ(0,"button",3),e._uU(1),e.qZA()),2&u){const c=e.oxw();e.Q6J("disabled",!c.form.valid),e.xp6(1),e.hij(" ",c.props.submitLabel," ")}}function Ur(u,y){1&u&&e.GkF(0)}function Gr(u,y){if(1&u&&(e.ynx(0),e.YNc(1,Ur,1,0,"ng-container",7),e.BQk()),2&u){e.oxw(2);const c=e.MAs(2);e.xp6(1),e.Q6J("ngTemplateOutlet",c)}}function Vi(u,y){1&u&&e.GkF(0)}function Pr(u,y){if(1&u&&(e.ynx(0),e._UZ(1,"nz-avatar",11),e.BQk()),2&u){const c=y.ngrxLet,m=e.oxw(2).ngIf;e.xp6(1),e.Q6J("nzSrc",c?c.profileImagePath:m[0].profileImagePath)("nzSize",16)("nzShape","square")}}function a1(u,y){if(1&u&&(e.ynx(0),e.TgZ(1,"nz-button-group"),e.YNc(2,Vi,1,0,"ng-container",7),e.TgZ(3,"button",8),e.ALo(4,"ngrxPush"),e.ALo(5,"ngrxPush"),e.ALo(6,"ngrxPush"),e.TgZ(7,"span"),e._uU(8,"for"),e.qZA(),e.YNc(9,Pr,2,3,"ng-container",9),e._UZ(10,"i",10),e.qZA()(),e.BQk()),2&u){e.oxw();const c=e.MAs(4),m=e.oxw(),j=e.MAs(2);e.xp6(2),e.Q6J("ngTemplateOutlet",j),e.xp6(1),e.Q6J("ngClass",e.lcZ(4,6,m.buttonClass$))("hidden",e.lcZ(5,8,m.isHidden$))("disabled",e.lcZ(6,10,m.isDisabled$))("nzDropdownMenu",c),e.xp6(6),e.Q6J("ngrxLet",m.mostRecentOrg$)}}function c1(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"li",12),e.NdJ("click",function(){const Be=e.CHM(c).$implicit,Mt=e.oxw(2);return e.KtG(Mt.menuSelection$.next(Be.id))}),e._UZ(1,"nz-avatar",11),e._uU(2),e.qZA()}if(2&u){const c=y.$implicit;e.xp6(1),e.Q6J("nzSrc",null==c?null:c.profileImagePath)("nzSize",10)("nzShape","square"),e.xp6(1),e.hij(" ",c.name," ")}}function l1(u,y){if(1&u&&(e.ynx(0),e.YNc(1,Gr,2,1,"ng-container",2),e.YNc(2,a1,11,12,"ng-container",2),e.TgZ(3,"nz-dropdown-menu",null,4)(5,"ul",5),e.YNc(6,c1,3,4,"li",6),e.qZA()(),e.BQk()),2&u){const c=y.ngIf;e.xp6(1),e.Q6J("ngIf",c.length<=1),e.xp6(1),e.Q6J("ngIf",c.length>1),e.xp6(4),e.Q6J("ngForOf",c)}}let Ps=((pi=class extends v.fS{constructor(y,c,m){super(),this.viewerService=y,this.cdr=c,this.apollo=m,this.menuSelection$=new st.x,this.baseButtonClass="org-dropdown-btn",this.defaultOptions={props:{submitLabel:"Submit"}},this.viewer$=this.viewerService.viewer$,this.organizations$=this.viewer$.pipe((0,rn.j)("organizations")),this.mostRecentOrg$=this.viewer$.pipe((0,rn.j)("mostRecentOrg")),this.isDisabled$=new st.x,this.isHidden$=new st.x,this.buttonClass$=new Ge.X(this.baseButtonClass),this.subscriptions=[]}ngOnInit(){this.menuSelection$.pipe((0,it.M)(this.viewer$)).subscribe(([j,Be])=>{const Mt={id:`User:${Be.id}`,fragment:co.Ps`
            fragment UserMostRecentOrgId on User {
              mostRecentOrganizationId
            }
          `,data:{mostRecentOrganizationId:j}};this.apollo.client.writeFragment(Mt)}),this.formUpdate$=new Ge.X(this.form.status);const y=this.form.statusChanges.subscribe(j=>this.formUpdate$.next(j)),c=this.formUpdate$.subscribe(j=>this.cdr.detectChanges()),m=this.mostRecentOrg$.pipe((0,rn.j)("id"),(0,De.h)(zo.ep)).subscribe(j=>{this.formControl.setValue(j)});this.subscriptions=this.subscriptions.concat([y,c,m])}ngAfterViewInit(){if(this.button&&this.button.domChange){const y=this.button.domChange.subscribe(c=>{"class"===c.type&&"string"==typeof c.change?this.buttonClass$.next(`${this.baseButtonClass} ${c.change}`):"disabled"===c.type&&"boolean"==typeof c.change?this.isDisabled$.next(c.change):"hidden"===c.type&&"boolean"==typeof c.change&&this.isHidden$.next(c.change)});this.subscriptions.push(y)}}}).\u0275fac=function(y){return new(y||pi)(e.Y36(Qo.a),e.Y36(e.sBO),e.Y36(co._M))},pi.\u0275cmp=e.Xpm({type:pi,selectors:[["cvc-org-submit-button"]],viewQuery:function(y,c){if(1&y&&e.Gf(so,5),2&y){let m;e.iGM(m=e.CRH())&&(c.button=m.first)}},features:[e.qOj],decls:5,vars:5,consts:[["type","hidden",3,"formControl","formlyAttributes"],["submitButton",""],[4,"ngIf"],["cvcOrgSubmitButton","","type","submit","nz-button","","nzType","primary",3,"disabled","nzDanger"],["orgMenu","nzDropdownMenu"],["nz-menu",""],["nz-menu-item","",3,"click",4,"ngFor","ngForOf"],[4,"ngTemplateOutlet"],["type","button","nz-button","","nz-dropdown","","nzTrigger","click",3,"ngClass","hidden","disabled","nzDropdownMenu"],[4,"ngrxLet"],["nz-icon","","nzType","down"],[3,"nzSrc","nzSize","nzShape"],["nz-menu-item","",3,"click"]],template:function(y,c){1&y&&(e._UZ(0,"input",0),e.YNc(1,Js,2,2,"ng-template",null,1,e.W1O),e.YNc(3,l1,7,3,"ng-container",2),e.ALo(4,"ngrxPush")),2&y&&(e.Q6J("formControl",c.formControl)("formlyAttributes",c.field),e.xp6(3),e.Q6J("ngIf",e.lcZ(4,3,c.organizations$)))},dependencies:[M.mk,M.sg,M.O5,M.tP,t.Fj,t.JJ,t.oH,F.eJ,v.JD,Re.Ls,An.Dz,On.ix,On.fY,To.w,jo.dQ,Cr.wO,Cr.r9,Fn.cm,Fn.RR,Fn.wA,so,F.fM],styles:["[_nghost-%COMP%]{display:inline-block}[_nghost-%COMP%]     .ant-btn-dangerous.ant-btn-primary:first-child:not(:last-child){border-right-color:#ff4d4f}[_nghost-%COMP%]     .ant-btn-dangerous.ant-btn-primary:hover, [_nghost-%COMP%]     .ant-btn-dangerous.ant-btn-primary:focus{border-right-color:#fd7978}.org-dropdown-btn[_ngcontent-%COMP%]   nz-avatar[_ngcontent-%COMP%]{margin:-2px 6px 0;border:1px solid rgba(255,255,255,.3);background-color:#ffffffe6}.org-dropdown-btn.ant-btn-dangerous[_ngcontent-%COMP%]:last-child:not(:first-child), .org-dropdown-btn[_ngcontent-%COMP%]   .ant-btn-dangerous[_ngcontent-%COMP%] + .ant-btn-dangerous[_ngcontent-%COMP%]{border-left-color:#fd7978}"],changeDetection:0}),pi);Ps=(0,ne.gn)([(0,ce.c)({arrayName:"subscriptions"})],Ps);const ba={types:[{name:"org-submit-button",component:Ps}]};let Kc=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,t.UX,v.X0.forChild(ba),Re.PV,An.Rt,On.sL,Fn.b1]}),u})();const cp=["optionTemplates"];function Jl(u,y){if(1&u&&e._UZ(0,"cvc-attribute-tag",4),2&u){const c=e.oxw().$implicit;e.Q6J("cvcAttrValue",c)}}function u1(u,y){1&u&&(e.ynx(0),e.YNc(1,Jl,1,1,"ng-template",null,3,e.W1O),e.BQk())}function xd(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"div",5)(1,"cvc-attribute-tag",6),e.NdJ("cvcOnClose",function(j){e.CHM(c);const Be=e.oxw();return e.KtG(Be.onTagClose$.next(j))}),e.qZA()()}if(2&u){const c=y.$implicit,m=e.oxw();e.xp6(1),e.Q6J("cvcAttrValue",c.nzValue)("cvcContext",m.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",m.props.isMultiSelect?"default":"closeable")}}const Jc=new Map([[Nn.huM.Somatic,"Variant is a mutation, found only in tumor cells, having arisen in a specific tissue (non-germ cell), and is not expected to be inherited or passed to offspring."],[Nn.huM.RareGermline,"Variant is found in every cell (not restricted to tumor/diseased cells) and is thought to exist in less than 1% of the population relevant to this evidence item."],[Nn.huM.CommonGermline,"Variant is found in every cell (not restricted to tumor/diseased cells) and is thought to exist in at least 1% of the population relevant to this evidence item."],[Nn.huM.Combined," Variants in the corresponding Complex Molecular Profile have heterogeneous origins."],[Nn.huM.Unknown,"The variant origin is uncertain based on the available evidence."],[Nn.huM.Na,"The variant type (e.g., expression) is not compatible (or easily classified) with the CIViC concept of variant origin."]]),Dd=Lt(_n(),lt());let d1=(()=>{class u extends Dd{constructor(c){super(),this.cdr=c,this.defaultOptions={props:{label:"Variant Origin",required:!1,isMultiSelect:!1,placeholder:"Select Variant Origin",tooltip:"Identifies whether the variant is inherited (germline mutation) or acquired (somatic mutation) in the context of the study"}},this.originEnum$=new Ge.X([])}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEnumSelectField({optionEnum$:this.originEnum$,optionTemplate$:this.optionTemplate$,changeDetectorRef:this.cdr}),this.originEnum$.next(Array.from(Jc.keys()))}configureStateConnections(){this.optionTemplates||console.error(`${this.field.id} could not find its optionTemplates QueryList to populate its select options, so simple text labels will be displayed.`),this.optionTemplate$=this.optionTemplates?.changes.pipe((0,vt.U)(c=>c.map(m=>m))),this.onValueChange$.pipe((0,ce.t)(this)).subscribe(c=>{this.props.description=c?Jc.get(c):void 0})}}return u.\u0275fac=function(c){return new(c||u)(e.Y36(e.sBO))},u.\u0275cmp=e.Xpm({type:u,selectors:[["cvc-origin-select"]],viewQuery:function(c,m){if(1&c&&e.Gf(cp,5,e.Rgc),2&c){let j;e.iGM(j=e.CRH())&&(m.optionTemplates=j)}},features:[e.qOj],decls:6,vars:13,consts:[[3,"cvcFormControl","cvcFormlyAttributes","cvcSelectMode","cvcPlaceholder","cvcCustomTemplate","cvcOptions","cvcShowError","cvcDisabled"],[4,"ngFor","ngForOf"],["selectedTemplate",""],["optionTemplates",""],[3,"cvcAttrValue"],[1,"ant-select-selection-item-content"],[3,"cvcAttrValue","cvcContext","cvcMode","cvcOnClose"]],template:function(c,m){if(1&c&&(e._UZ(0,"cvc-enum-select",0),e.ALo(1,"ngrxPush"),e.YNc(2,u1,3,0,"ng-container",1),e.ALo(3,"ngrxPush"),e.YNc(4,xd,2,3,"ng-template",null,2,e.W1O)),2&c){const j=e.MAs(5);e.Q6J("cvcFormControl",m.formControl)("cvcFormlyAttributes",m.field)("cvcSelectMode",m.props.isMultiSelect?"multiple":"default")("cvcPlaceholder",m.props.placeholder)("cvcCustomTemplate",j)("cvcOptions",e.lcZ(1,9,m.selectOption$))("cvcShowError",m.showError)("cvcDisabled",m.props.disabled),e.xp6(2),e.Q6J("ngForOf",e.lcZ(3,11,m.originEnum$))}},dependencies:[M.sg,Ke,ye,F.fM]}),u})();const ql={types:[{name:"origin-select",wrappers:["form-field"],component:d1},{name:"origin-multi-select",wrappers:["form-field"],component:d1,defaultOptions:{props:{label:"Variant Origins",isMultiSelect:!0}}}]};let hc=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,t.UX,v.X0.forChild(ql),je,He,$e]}),u})();const Xl=["optionTemplates"];function Is(u,y){if(1&u&&(e.ynx(0),e.TgZ(1,"em"),e._UZ(2,"span",8),e.ALo(3,"highlightTypeahead"),e.qZA(),e.BQk()),2&u){const c=e.oxw(2).$implicit,m=e.oxw().ngrxLet;e.xp6(2),e.Q6J("innerHtml",e.xi3(3,1,c.hpoId,m),e.oJD)}}function fc(u,y){if(1&u&&(e._UZ(0,"cvc-entity-tag",5),e.TgZ(1,"span",6),e.YNc(2,Is,4,4,"ng-container",7),e.qZA()),2&u){const c=e.oxw().$implicit,m=e.oxw().ngrxLet;e.Q6J("cvcDisableLink",!0)("cvcCacheId",c.__typename+":"+c.id)("cvcEmphasize",m),e.xp6(2),e.Q6J("ngIf",c.hpoId)}}function mc(u,y){1&u&&(e.ynx(0),e.YNc(1,fc,3,4,"ng-template",null,4,e.W1O),e.BQk())}function p1(u,y){if(1&u&&(e.ynx(0),e.YNc(1,mc,3,0,"ng-container",3),e.ALo(2,"ngrxPush"),e.BQk()),2&u){const c=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,c.result$))}}function eu(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"div",9)(1,"cvc-entity-tag",10),e.NdJ("cvcOnClose",function(){const Be=e.CHM(c).$implicit,Mt=e.oxw();return e.KtG(Mt.onTagClose$.next(Be.nzValue))}),e.qZA()()}if(2&u){const c=y.$implicit,m=e.oxw();e.xp6(1),e.Q6J("cvcCacheId","Phenotype:"+c.nzValue)("cvcContext",m.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",m.props.isMultiSelect?"default":"closeable")}}const h1=Lt(_n(),ni());let f1=(()=>{class u extends h1{constructor(c,m,j){super(),this.taq=c,this.tq=m,this.changeDetectorRef=j,this.defaultOptions={props:{entityName:{singular:"Phenotype",plural:"Phenotypes"},isMultiSelect:!1,requireType:!0,tooltip:"Phenotype or phenotype combination which interacts with the specified variant",placeholders:{default:"Search Phenotypes",multiDefault:"Select Phenotype(s) (max MULTI_MAX)",requireTypePrompt:"Select an ENTITY_NAME Type to search Phenotypes"},description:'Please provide any <a href="https://hpo.jax.org/app/browse/term/HP:0000118" target="_blank">HPO phenotypes</a>, including <a href="https://hpo.jax.org/app/browse/term/HP:0003674" target="_blank">age of onset</a>.',extraType:"description"}},this.placeholder$=new Ge.X(this.defaultOptions.props.placeholders.default)}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEntitySelectField({typeaheadQuery:this.taq,typeaheadParam$:void 0,tagQuery:this.tq,getTypeaheadVarsFn:this.getTypeaheadVarsFn,getTypeaheadResultsFn:this.getTypeaheadResultsFn,getTagQueryVarsFn:this.getTagQueryVarsFn,getTagQueryResultsFn:this.getTagQueryResultsFn,getSelectedItemOptionFn:this.getSelectedItemOptionFn,getSelectOptionsFn:this.getSelectOptionsFn,changeDetectorRef:this.changeDetectorRef,selectOpen$:this.selectOpen$,selectComponent:this.selectComponent}),this.configurePlaceholders()}configureStateConnections(){}configurePlaceholders(){}getTypeaheadVarsFn(c){return{name:c}}getTypeaheadResultsFn(c){return c.data.phenotypeTypeahead}getTagQueryVarsFn(c){return{id:c}}getTagQueryResultsFn(c){return c.data.phenotype}getSelectedItemOptionFn(c){return{value:c.id,label:c.name}}getSelectOptionsFn(c,m){return c.map((j,Be)=>({label:m.get(Be)||j.name,value:j.id}))}}return u.\u0275fac=function(c){return new(c||u)(e.Y36(Nn.zOE),e.Y36(Nn.z_7),e.Y36(e.sBO))},u.\u0275cmp=e.Xpm({type:u,selectors:[["cvc-phenotype-select"]],viewQuery:function(c,m){if(1&c&&e.Gf(Xl,5,e.Rgc),2&c){let j;e.iGM(j=e.CRH())&&(m.optionTemplates=j)}},features:[e.qOj],decls:9,vars:22,consts:[[3,"cvcSelectMode","cvcCustomTemplate","cvcFormControl","cvcFormlyAttributes","cvcEntityName","cvcPlaceholder","cvcResults","cvcOptions","cvcShowError","cvcDisabled","cvcLoading","cvcOnSearch","cvcOnOpenChange","cvcOnModelChange"],[4,"ngrxLet"],["selectedTemplate",""],[4,"ngFor","ngForOf"],["optionTemplates",""],[3,"cvcDisableLink","cvcCacheId","cvcEmphasize"],["nz-typography","","nzType","secondary"],[4,"ngIf"],["nz-typography","","nzType","secondary",3,"innerHtml"],[1,"ant-select-selection-item-content"],[3,"cvcCacheId","cvcContext","cvcMode","cvcOnClose"]],template:function(c,m){if(1&c&&(e.TgZ(0,"cvc-entity-select",0),e.NdJ("cvcOnSearch",function(Be){return m.onSearch$.next(Be)})("cvcOnOpenChange",function(Be){return m.onOpenChange$.next(Be)})("cvcOnModelChange",function(Be){return m.props.change&&m.props.change(m.field,Be)}),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.ALo(3,"ngrxPush"),e.ALo(4,"ngrxPush"),e.ALo(5,"ngrxPush"),e.qZA(),e.YNc(6,p1,3,3,"ng-container",1),e.YNc(7,eu,2,3,"ng-template",null,2,e.W1O)),2&c){const j=e.MAs(8);e.Q6J("cvcSelectMode",m.props.isMultiSelect?"multiple":"default")("cvcCustomTemplate",j)("cvcFormControl",m.formControl)("cvcFormlyAttributes",m.field)("cvcEntityName",m.props.entityName)("cvcPlaceholder",e.lcZ(1,12,m.placeholder$))("cvcResults",e.lcZ(2,14,m.result$))("cvcOptions",e.lcZ(3,16,m.selectOption$))("cvcShowError",m.showError)("cvcDisabled",m.onRequiresPhenotype$&&!e.lcZ(4,18,m.onRequiresPhenotype$))("cvcLoading",e.lcZ(5,20,m.isLoading$)),e.xp6(6),e.Q6J("ngrxLet",m.onSearch$)}},dependencies:[M.sg,M.O5,F.eJ,ge.ZU,Kn,xo.J,F.fM,I.A],changeDetection:0}),u})();const es={types:[{name:"phenotype-select",wrappers:["form-field"],component:f1,defaultOptions:{props:{label:"Phenotype"}}},{name:"phenotype-multi-select",wrappers:["form-field"],component:f1,defaultOptions:{props:{isMultiSelect:!0,label:"Phenotypes"}}}]};let m1=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,t.UX,v.X0.forChild(es),yt.L,On.sL,We.LV,Wn.$6,zn.Qp,Re.PV,Pe.o7,R.Jb,Xe.cg,Ye.zf,s.U5,B.ic,ge.ZJ,Wt.X,je,Kt,It.s,Te.x]}),u})();var Sa=a(6028),Ea=a(2438),qs=a(9773),xa=a(874),gc=a(9087),Da=a(7754),tu=a(9388);const g1=["nz-rate-item",""];function nu(u,y){}function ou(u,y){}function vc(u,y){1&u&&e._UZ(0,"span",4)}const Xs=function(u){return{$implicit:u}},ms=["ulElement"];function iu(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"li",3)(1,"div",4),e.NdJ("itemHover",function(j){const Mt=e.CHM(c).index,bn=e.oxw();return e.KtG(bn.onItemHover(Mt,j))})("itemClick",function(j){const Mt=e.CHM(c).index,bn=e.oxw();return e.KtG(bn.onItemClick(Mt,j))}),e.qZA()()}if(2&u){const c=y.index,m=e.oxw();e.Q6J("ngClass",m.starStyleArray[c]||"")("nzTooltipTitle",m.nzTooltips[c]),e.xp6(1),e.Q6J("allowHalf",m.nzAllowHalf)("character",m.nzCharacter)("index",c)}}let qc=(()=>{class u{constructor(){this.index=0,this.allowHalf=!1,this.itemHover=new e.vpe,this.itemClick=new e.vpe}hoverRate(c){this.itemHover.next(c&&this.allowHalf)}clickRate(c){this.itemClick.next(c&&this.allowHalf)}}return u.\u0275fac=function(c){return new(c||u)},u.\u0275cmp=e.Xpm({type:u,selectors:[["","nz-rate-item",""]],inputs:{character:"character",index:"index",allowHalf:"allowHalf"},outputs:{itemHover:"itemHover",itemClick:"itemClick"},exportAs:["nzRateItem"],attrs:g1,decls:6,vars:8,consts:[[1,"ant-rate-star-second",3,"mouseover","click"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"ant-rate-star-first",3,"mouseover","click"],["defaultCharacter",""],["nz-icon","","nzType","star","nzTheme","fill"]],template:function(c,m){if(1&c&&(e.TgZ(0,"div",0),e.NdJ("mouseover",function(Be){return m.hoverRate(!1),Be.stopPropagation()})("click",function(){return m.clickRate(!1)}),e.YNc(1,nu,0,0,"ng-template",1),e.qZA(),e.TgZ(2,"div",2),e.NdJ("mouseover",function(Be){return m.hoverRate(!0),Be.stopPropagation()})("click",function(){return m.clickRate(!0)}),e.YNc(3,ou,0,0,"ng-template",1),e.qZA(),e.YNc(4,vc,1,0,"ng-template",null,3,e.W1O)),2&c){const j=e.MAs(5);e.xp6(1),e.Q6J("ngTemplateOutlet",m.character||j)("ngTemplateOutletContext",e.VKq(4,Xs,m.index)),e.xp6(2),e.Q6J("ngTemplateOutlet",m.character||j)("ngTemplateOutletContext",e.VKq(6,Xs,m.index))}},dependencies:[M.tP,Re.Ls],encapsulation:2,changeDetection:0}),(0,ne.gn)([(0,Da.yF)()],u.prototype,"allowHalf",void 0),u})(),ea=(()=>{class u{get nzValue(){return this._value}set nzValue(c){this._value!==c&&(this._value=c,this.hasHalf=!Number.isInteger(c),this.hoverValue=Math.ceil(c))}constructor(c,m,j,Be,Mt,bn){this.nzConfigService=c,this.ngZone=m,this.renderer=j,this.cdr=Be,this.directionality=Mt,this.destroy$=bn,this._nzModuleName="rate",this.nzAllowClear=!0,this.nzAllowHalf=!1,this.nzDisabled=!1,this.nzAutoFocus=!1,this.nzCount=5,this.nzTooltips=[],this.nzOnBlur=new e.vpe,this.nzOnFocus=new e.vpe,this.nzOnHoverChange=new e.vpe,this.nzOnKeyDown=new e.vpe,this.classMap={},this.starArray=[],this.starStyleArray=[],this.dir="ltr",this.hasHalf=!1,this.hoverValue=0,this.isFocused=!1,this._value=0,this.isNzDisableFirstChange=!0,this.onChange=()=>null,this.onTouched=()=>null}ngOnChanges(c){const{nzAutoFocus:m,nzCount:j,nzValue:Be}=c;if(m&&!m.isFirstChange()){const Mt=this.ulElement.nativeElement;this.nzAutoFocus&&!this.nzDisabled?this.renderer.setAttribute(Mt,"autofocus","autofocus"):this.renderer.removeAttribute(Mt,"autofocus")}j&&this.updateStarArray(),Be&&this.updateStarStyle()}ngOnInit(){this.nzConfigService.getConfigChangeEventForComponent("rate").pipe((0,qs.R)(this.destroy$)).subscribe(()=>this.cdr.markForCheck()),this.directionality.change.pipe((0,qs.R)(this.destroy$)).subscribe(c=>{this.dir=c,this.cdr.detectChanges()}),this.dir=this.directionality.value,this.ngZone.runOutsideAngular(()=>{(0,Ea.R)(this.ulElement.nativeElement,"focus").pipe((0,qs.R)(this.destroy$)).subscribe(c=>{this.isFocused=!0,this.nzOnFocus.observers.length&&this.ngZone.run(()=>this.nzOnFocus.emit(c))}),(0,Ea.R)(this.ulElement.nativeElement,"blur").pipe((0,qs.R)(this.destroy$)).subscribe(c=>{this.isFocused=!1,this.nzOnBlur.observers.length&&this.ngZone.run(()=>this.nzOnBlur.emit(c))})})}onItemClick(c,m){if(this.nzDisabled)return;this.hoverValue=c+1;const j=m?c+.5:c+1;this.nzValue===j?this.nzAllowClear&&(this.nzValue=0,this.onChange(this.nzValue)):(this.nzValue=j,this.onChange(this.nzValue)),this.updateStarStyle()}onItemHover(c,m){this.nzDisabled||this.hoverValue===c+1&&m===this.hasHalf||(this.hoverValue=c+1,this.hasHalf=m,this.nzOnHoverChange.emit(this.hoverValue),this.updateStarStyle())}onRateLeave(){this.hasHalf=!Number.isInteger(this.nzValue),this.hoverValue=Math.ceil(this.nzValue),this.updateStarStyle()}focus(){this.ulElement.nativeElement.focus()}blur(){this.ulElement.nativeElement.blur()}onKeyDown(c){const m=this.nzValue;c.keyCode===Sa.SV&&this.nzValue<this.nzCount?this.nzValue+=this.nzAllowHalf?.5:1:c.keyCode===Sa.oh&&this.nzValue>0&&(this.nzValue-=this.nzAllowHalf?.5:1),m!==this.nzValue&&(this.onChange(this.nzValue),this.nzOnKeyDown.emit(c),this.updateStarStyle(),this.cdr.markForCheck())}updateStarArray(){this.starArray=Array(this.nzCount).fill(0).map((c,m)=>m),this.updateStarStyle()}updateStarStyle(){this.starStyleArray=this.starArray.map(c=>{const m="ant-rate-star",j=c+1;return{[`${m}-full`]:j<this.hoverValue||!this.hasHalf&&j===this.hoverValue,[`${m}-half`]:this.hasHalf&&j===this.hoverValue,[`${m}-active`]:this.hasHalf&&j===this.hoverValue,[`${m}-zero`]:j>this.hoverValue,[`${m}-focused`]:this.hasHalf&&j===this.hoverValue&&this.isFocused}})}writeValue(c){this.nzValue=c||0,this.updateStarArray(),this.cdr.markForCheck()}setDisabledState(c){this.nzDisabled=this.isNzDisableFirstChange&&this.nzDisabled||c,this.isNzDisableFirstChange=!1,this.cdr.markForCheck()}registerOnChange(c){this.onChange=c}registerOnTouched(c){this.onTouched=c}}return u.\u0275fac=function(c){return new(c||u)(e.Y36(xa.jY),e.Y36(e.R0b),e.Y36(e.Qsj),e.Y36(e.sBO),e.Y36(tu.Is,8),e.Y36(gc.kn))},u.\u0275cmp=e.Xpm({type:u,selectors:[["nz-rate"]],viewQuery:function(c,m){if(1&c&&e.Gf(ms,7),2&c){let j;e.iGM(j=e.CRH())&&(m.ulElement=j.first)}},inputs:{nzAllowClear:"nzAllowClear",nzAllowHalf:"nzAllowHalf",nzDisabled:"nzDisabled",nzAutoFocus:"nzAutoFocus",nzCharacter:"nzCharacter",nzCount:"nzCount",nzTooltips:"nzTooltips"},outputs:{nzOnBlur:"nzOnBlur",nzOnFocus:"nzOnFocus",nzOnHoverChange:"nzOnHoverChange",nzOnKeyDown:"nzOnKeyDown"},exportAs:["nzRate"],features:[e._Bn([gc.kn,{provide:t.JU,useExisting:(0,e.Gpc)(()=>u),multi:!0}]),e.TTD],decls:3,vars:7,consts:[[1,"ant-rate",3,"ngClass","tabindex","keydown","mouseleave"],["ulElement",""],["class","ant-rate-star","nz-tooltip","",3,"ngClass","nzTooltipTitle",4,"ngFor","ngForOf"],["nz-tooltip","",1,"ant-rate-star",3,"ngClass","nzTooltipTitle"],["nz-rate-item","",3,"allowHalf","character","index","itemHover","itemClick"]],template:function(c,m){1&c&&(e.TgZ(0,"ul",0,1),e.NdJ("keydown",function(Be){return m.onKeyDown(Be),Be.preventDefault()})("mouseleave",function(Be){return m.onRateLeave(),Be.stopPropagation()}),e.YNc(2,iu,2,5,"li",2),e.qZA()),2&c&&(e.ekj("ant-rate-disabled",m.nzDisabled)("ant-rate-rtl","rtl"===m.dir),e.Q6J("ngClass",m.classMap)("tabindex",m.nzDisabled?-1:1),e.xp6(2),e.Q6J("ngForOf",m.starArray))},dependencies:[M.mk,M.sg,Xe.SY,qc],encapsulation:2,changeDetection:0}),(0,ne.gn)([(0,xa.oS)(),(0,Da.yF)()],u.prototype,"nzAllowClear",void 0),(0,ne.gn)([(0,xa.oS)(),(0,Da.yF)()],u.prototype,"nzAllowHalf",void 0),(0,ne.gn)([(0,Da.yF)()],u.prototype,"nzDisabled",void 0),(0,ne.gn)([(0,Da.yF)()],u.prototype,"nzAutoFocus",void 0),(0,ne.gn)([(0,Da.Rn)()],u.prototype,"nzCount",void 0),u})(),v1=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[tu.vT,M.ez,Re.PV,Xe.cg]}),u})();const Xc={1:"Poor - Claim is not supported well by experimental evidence. Results are not reproducible, or have very small sample size. No follow-up is done to validate novel claims.",2:"Adequate - Evidence is not well supported by experimental data, and little follow-up data is available. Experiments may lack proper controls, have small sample size, or are not statistically convincing.",3:"Average - Evidence is convincing, but not supported by a breadth of experiments. May be smaller scale projects, or novel results without many follow-up experiments. Discrepancies from expected results are explained and not concerning.",4:"Strong - Well supported evidence. Experiments are well controlled, and results are convincing. Any discrepancies from expected results are well-explained and not concerning.",5:"Excellent - Solid, well supported evidence from a lab or journal with respected academic standing. Experiments are well controlled, and results are clean and reproducible across multiple replicates. Evidence confirmed using separate methods."},el=Lt(_n(),lt()),tl={types:[{name:"rating",wrappers:["form-field"],component:(()=>{class u extends el{constructor(){super(),this.defaultOptions={props:{label:"Evidence Rating",count:5,tooltip:"A representation of the curator's confidence in the quality of the summarized evidence",hoverText:[]}},this.rating$=new Ge.X(void 0)}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.formControl.value&&this.rating$.next(this.formControl.value),Object.entries(Xc).map(([c,m])=>{this.props.hoverText.push(m)}),this.rating$.pipe((0,ce.t)(this)).subscribe(c=>{this.formControl.setValue(c)}),this.onValueChange$.pipe((0,ce.t)(this)).subscribe(c=>{this.props.description=c?Xc[c]:void 0})}configureStateConnections(){}}return u.\u0275fac=function(c){return new(c||u)},u.\u0275cmp=e.Xpm({type:u,selectors:[["cvc-rating"]],features:[e.qOj],decls:2,vars:5,consts:[["type","hidden",3,"formControl","formlyAttributes"],[3,"ngModel","nzCount","nzTooltips","ngModelChange"]],template:function(c,m){1&c&&(e._UZ(0,"input",0),e.TgZ(1,"nz-rate",1),e.NdJ("ngModelChange",function(Be){return m.rating$.next(Be)}),e.qZA()),2&c&&(e.Q6J("formControl",m.formControl)("formlyAttributes",m.field),e.xp6(1),e.Q6J("ngModel",m.formControl.value)("nzCount",m.props.count)("nzTooltips",m.props.hoverText))},dependencies:[t.Fj,t.JJ,t.oH,t.On,v.JD,ea],styles:["[_nghost-%COMP%]     nz-rate .anticon{font-size:160%}"],changeDetection:0}),u})()}]};let yc=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,t.UX,t.u5,v.X0.forChild(tl),v1,It.s,je,He]}),u})();const As=["optionTemplates"];function ta(u,y){if(1&u&&e._UZ(0,"cvc-attribute-tag",4),2&u){const c=e.oxw().$implicit;e.Q6J("cvcAttrValue",c)}}function na(u,y){1&u&&(e.ynx(0),e.YNc(1,ta,1,1,"ng-template",null,3,e.W1O),e.BQk())}function ru(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"div",5)(1,"cvc-attribute-tag",6),e.NdJ("cvcOnClose",function(j){e.CHM(c);const Be=e.oxw();return e.KtG(Be.onTagClose$.next(j))}),e.qZA()()}if(2&u){const c=y.$implicit,m=e.oxw();e.xp6(1),e.Q6J("cvcAttrValue",c.nzValue)("cvcContext",m.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",m.props.isMultiSelect?"default":"closeable")}}const nl={Evidence:{PREDICTIVE:{SENSITIVITYRESPONSE:"Associated with a clinical or preclinical response to treatment",RESISTANCE:"Associated with clinical or preclinical resistance to treatment",ADVERSE_RESPONSE:"Associated with an adverse response to drug treatment",REDUCED_SENSITIVITY:"Response to treatment is lower than seen in other treatment contexts",NA:"Clinical Significance is not applicable."},DIAGNOSTIC:{POSITIVE:"Associated with diagnosis of disease or subtype",NEGATIVE:"Associated with lack of disease or subtype"},PROGNOSTIC:{BETTER_OUTCOME:"Demonstrates better than expected clinical outcome",POOR_OUTCOME:"Demonstrates worse than expected clinical outcome",NA:"Clinical Significance is not applicable."},PREDISPOSING:{PREDISPOSITION:"Germline variant has predisposing potential for cancer, and may meet select ACMG/AMP criteria supporting pathogenic or benign classification.",PROTECTIVENESS:"Germline variant has properties that protect individuals from acquiring cancer."},FUNCTIONAL:{GAIN_OF_FUNCTION:"Sequence variant confers an increase in normal gene function",LOSS_OF_FUNCTION:"Sequence variant confers a diminished or abolished function",UNALTERED_FUNCTION:"Gene product of sequence variant is unchanged",NEOMORPHIC:"Sequence variant creates a novel function",DOMINANT_NEGATIVE:"Sequence variant abrogates function of wildtype allele gene product",UNKNOWN:"Sequence variant that cannot be precisely defined by the other listed categories"},ONCOGENIC:{ONCOGENICITY:"Somatic variant has oncogenic potential for driving cancer, and may meet select ClinGen/CGC/VICC criteria supporting pathogenic or benign classification.",PROTECTIVENESS:"Somatic variant has a protective role against cancer."}},Assertion:{PREDICTIVE:{SENSITIVITYRESPONSE:"Associated with a clinical or preclinical response to treatment",RESISTANCE:"Associated with clinical or preclinical resistance to treatment",ADVERSE_RESPONSE:"Associated with an adverse response to drug treatment",REDUCED_SENSITIVITY:"Response to treatment is lower than seen in other treatment contexts",NA:"Clinical Significance is not applicable."},DIAGNOSTIC:{POSITIVE:"Associated with diagnosis of disease or subtype",NEGATIVE:"Associated with lack of disease or subtype"},PROGNOSTIC:{BETTER_OUTCOME:"Demonstrates better than expected clinical outcome",POOR_OUTCOME:"Demonstrates worse than expected clinical outcome",NA:"Clinical Significance is not applicable."},PREDISPOSING:{PATHOGENIC:"Very strong evidence the variant is pathogenic",LIKELY_PATHOGENIC:"Strong evidence (>90% certainty) the variant is pathogenic.",BENIGN:"Very strong evidence the variant is benign",LIKELY_BENIGN:"Not expected to have a major effect on disease",UNCERTAIN_SIGNIFICANCE:"Does not meet the ACMG/AMP criteria for pathogenic/benign, or the evidence is conflicting"},ONCOGENIC:{ONCOGENIC:"Very strong evidence the variant is oncogenic.",LIKELY_ONCOGENIC:"Strong evidence the variant is oncogenic.",BENIGN:"Very strong evidence the variant does not have oncogenic properties.",LIKELY_BENIGN:"Strong evidence the variant does not have oncogenic properties.",UNCERTAIN_SIGNIFICANCE:"Does not meet guideline criteria for oncogenic/benign, or the evidence is conflicting."}}},oa=Lt(_n(),lt()),su={types:[{name:"significance-select",wrappers:["form-field"],component:(()=>{class u extends oa{constructor(c){super(),this.cdr=c,this.defaultOptions={props:{label:"Significance",required:!0,isMultiSelect:!1,placeholder:"Select Significance",placeholderFn:m=>`Select ${m?m+" ":""} Significance`,requireTypePromptFn:m=>`Select ${m} Type to select its Significance`,tooltip:"Clinical impact of the variant",formMode:"add"}},this.significanceEnum$=new Ge.X([])}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEnumSelectField({optionEnum$:this.significanceEnum$,optionTemplate$:this.optionTemplate$,changeDetectorRef:this.cdr})}configureStateConnections(){if(!this.state)return console.error(`${this.field.id} requires a form state to populate its options, none was found.`),void(this.placeholder$=new Ge.X("ERROR: Form state not found"));if(this.placeholder$=new Ge.X(this.props.placeholderFn(this.state.entityName)),!this.state.enums.significance$)return void console.error(`${this.field.id} could not find form state's enums.significance$ to populate select.`);this.state.enums.significance$.pipe((0,ce.t)(this)).subscribe(m=>{this.significanceEnum$.next(m)}),this.optionTemplates||console.warn(`${this.field.id} could not find its optionTemplates QueryList to populate its select options, so simple text labels will be displayed.`),this.optionTemplate$=this.optionTemplates?.changes.pipe((0,vt.U)(m=>m.map(j=>j)));const c=`${this.state.entityName.toLowerCase()}Type$`;this.state.fields[c]?(this.onTypeSelect$=this.state.fields[c],this.onTypeSelect$.pipe((0,wt.T)("add"===this.props.formMode?0:1),(0,ce.t)(this)).subscribe(m=>{m?(this.props.disabled=!1,this.props.description=void 0,this.props.extraType=void 0,this.placeholder$.next(this.props.placeholderFn(this.state.entityName))):(this.props.disabled=!0,this.props.description=this.props.requireTypePromptFn(this.state.entityName),this.props.extraType="prompt"),this.formControl.value&&this.formControl.setValue(void 0)}),this.onValueChange$.pipe((0,it.M)(this.onTypeSelect$),(0,ce.t)(this)).subscribe(([m,j])=>{!j||!m||!this.state||(this.props.description=void 0,this.props.extraType="description",this.props.description=nl[this.state.entityName][j][m])})):console.error(`${this.field.id} could not find form state's ${c} to populate Significance options.`)}}return u.\u0275fac=function(c){return new(c||u)(e.Y36(e.sBO))},u.\u0275cmp=e.Xpm({type:u,selectors:[["cvc-significance-select"]],viewQuery:function(c,m){if(1&c&&e.Gf(As,5,e.Rgc),2&c){let j;e.iGM(j=e.CRH())&&(m.optionTemplates=j)}},features:[e.qOj],decls:7,vars:15,consts:[[3,"cvcFormControl","cvcFormlyAttributes","cvcSelectMode","cvcPlaceholder","cvcCustomTemplate","cvcOptions","cvcShowError","cvcDisabled"],[4,"ngFor","ngForOf"],["selectedTemplate",""],["optionTemplates",""],[3,"cvcAttrValue"],[1,"ant-select-selection-item-content"],[3,"cvcAttrValue","cvcContext","cvcMode","cvcOnClose"]],template:function(c,m){if(1&c&&(e._UZ(0,"cvc-enum-select",0),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.YNc(3,na,3,0,"ng-container",1),e.ALo(4,"ngrxPush"),e.YNc(5,ru,2,3,"ng-template",null,2,e.W1O)),2&c){const j=e.MAs(6);e.Q6J("cvcFormControl",m.formControl)("cvcFormlyAttributes",m.field)("cvcSelectMode",m.props.isMultiSelect?"multiple":"default")("cvcPlaceholder",e.lcZ(1,9,m.placeholder$))("cvcCustomTemplate",j)("cvcOptions",e.lcZ(2,11,m.selectOption$))("cvcShowError",m.showError)("cvcDisabled",m.props.disabled),e.xp6(3),e.Q6J("ngForOf",e.lcZ(4,13,m.significanceEnum$))}},dependencies:[M.sg,Ke,ye,F.fM]}),u})()}]};let y1=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,t.UX,v.X0.forChild(su),je,He,$e]}),u})();var ia,C1=a(6987),z1=a(7907),Oa=a(2666),T1=a(7921);function ra(u,y){1&u&&e._UZ(0,"span",9),2&u&&e.Q6J("nzType","loading")}function M1(u,y){if(1&u&&(e.ynx(0),e.YNc(1,ra,1,1,"span",8),e._uU(2,"\xa0 "),e.TgZ(3,"span"),e._uU(4),e.qZA(),e.BQk()),2&u){const c=y.ngrxLet;e.xp6(1),e.Q6J("ngIf",c.showSpinner),e.xp6(3),e.Oqu(c.message)}}function b1(u,y){if(1&u&&e._uU(0),2&u){const c=e.oxw();e.Oqu(c.successMessage)}}function Li(u,y){1&u&&(e.TgZ(0,"button",10),e._uU(1," Add Source "),e.qZA()),2&u&&e.Q6J("disabled",null===y.ngrxLet.citation)}const ol=function(){return[0,0]};let gs=((ia=class{constructor(y,c,m,j,Be){this.checkCitation=y,this.addRemoteCitation=c,this.errors=m,this.apollo=j,this.cdr=Be,this.cvcOnCreate=new e.vpe,this.messageOptions={empty:(Mt,bn)=>`No ${bn} Source with a citation ID of "${Mt}"`,searchCitation:(Mt,bn)=>`Searching ${bn} for a citation ID of "${Mt}"`,foundCitation:(Mt,bn,Hn)=>`Found ${bn} citation "${Hn}" with ID ${Mt}`,noCitation:(Mt,bn)=>`No ${bn} Source with a citation ID of "${Mt}" was found`},this.form=new t.nJ({}),this.model={citationId:"",sourceType:Nn.yic.Pubmed},this.formLayout="horizontal",this.options={formState:{formLayout:this.formLayout}},this.onSubmit$=new st.x,this.citationId$=new Ge.X(""),this.sourceType$=new Ge.X(Nn.yic.Pubmed),this.addSourceStubMutator=new Ho.U(this.errors),this.fields=[{key:"citationId",props:{hidden:!0}},{key:"sourceType",props:{hidden:!0}}],this.onSubmit$.pipe((0,ce.t)(this)).subscribe(Mt=>{console.log("disease-quick-add form model submitted.",Mt),this.submitSourceStub()})}ngOnInit(){void 0!==this.model.citationId&&void 0!==this.model.sourceType?(this.queryRef=this.checkCitation.watch({citationId:this.model.citationId,sourceType:this.model.sourceType}),this.checkResult$=this.queryRef.valueChanges.pipe((0,vt.U)(y=>({loading:y.loading,citation:y.data?y.data.remoteCitation:null,model:this.model})),(0,Lo.b)(y=>{this.citationString=y.citation?y.citation:void 0})),this.citationId$.pipe((0,ce.t)(this)).subscribe(y=>{this.model.sourceType&&this.queryRef.refetch({citationId:y,sourceType:this.model.sourceType})}),this.formMessageDisplay$=this.checkResult$.pipe((0,vt.U)(y=>{const c=y.loading,m=y.citation,j=y.model;return c?{message:this.messageOptions.searchCitation(j.citationId,j.sourceType),showSpinner:!0}:c||null===m?c||null!==m?{message:"UNHANDLED MESSAGE STATE",showSpinner:!1}:{message:this.messageOptions.noCitation(j.citationId,j.sourceType),showSpinner:!1}:{message:this.messageOptions.foundCitation(j.citationId,(0,Oa.c)(j.sourceType),m),showSpinner:!1}}),(0,T1.O)({message:this.messageOptions.searchCitation(this.model.citationId,this.model.sourceType),showSpinner:!0}))):console.error("source-quick-add provided invalid initial model")}submitSourceStub(){void 0!==this.model.citationId&&void 0!==this.model.sourceType&&(this.mutationState=this.addSourceStubMutator.mutate(this.addRemoteCitation,{input:{citationId:this.model.citationId,sourceType:this.model.sourceType}},{},y=>{if(console.log("source-quick-add submit data callback",y),y.addRemoteCitation){this.successMessage=`New Source "${this.citationString}" added.`;const c=y.addRemoteCitation.newSource,m=(0,Oa.c)(this.model.sourceType),j=this.citationString?this.citationString:"NO CITATION",Be={query:co.Ps`
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
              `,data:{source:{__typename:"Source",id:c.id,name:`${m}: ${j}`,link:`sources/${c.id}`,citation:j,citationId:this.model.citationId,sourceType:this.model.sourceType}},variables:{id:c.id}};this.apollo.client.cache.writeQuery(Be)||console.error("source-quick-add.form Source writeQuery failed.",Be),setTimeout(()=>{const bn={id:`Source:${c.id}`,fragment:co.Ps`
                  fragment LinkableSource on Source {
                    id
                    name
                    link
                  }
                `},Hn=this.apollo.client.cache.readFragment(bn);null!==Hn&&this.cvcOnCreate.next(Hn.id)},1e3)}}))}ngOnChanges(y){if(y.cvcSourceType){const c=y.cvcSourceType.currentValue;this.sourceType$.next(c),this.model={...this.model,sourceType:c}}if(y.cvcCitationId){const c=y.cvcCitationId.currentValue;this.citationId$.next(c),this.model={...this.model,citationId:c}}}}).\u0275fac=function(y){return new(y||ia)(e.Y36(Nn.qgP),e.Y36(Nn.LHC),e.Y36(Xo.Y),e.Y36(co._M),e.Y36(e.sBO))},ia.\u0275cmp=e.Xpm({type:ia,selectors:[["cvc-source-quick-add"]],inputs:{cvcSourceType:"cvcSourceType",cvcCitationId:"cvcCitationId"},outputs:{cvcOnCreate:"cvcOnCreate"},features:[e.TTD],decls:10,vars:11,consts:[[4,"ngrxLet"],["entityType","Source",3,"mutationState","successMessage"],["success",""],["nz-form","","nzLayout","horizontal",3,"formGroup","ngSubmit"],[3,"nzGutter"],["nzSpan","24"],[3,"form","fields","model","options","modelChange"],["nz-button","","nzType","primary","nzBlock","",3,"disabled",4,"ngrxLet"],["nz-icon","",3,"nzType",4,"ngIf"],["nz-icon","",3,"nzType"],["nz-button","","nzType","primary","nzBlock","",3,"disabled"]],template:function(y,c){if(1&y&&(e.YNc(0,M1,5,2,"ng-container",0),e.TgZ(1,"cvc-form-submission-status-display",1),e.YNc(2,b1,1,1,"ng-template",null,2,e.W1O),e.TgZ(4,"form",3),e.NdJ("ngSubmit",function(){return c.onSubmit$.next(c.model)}),e.TgZ(5,"nz-row",4)(6,"nz-col",5)(7,"formly-form",6),e.NdJ("modelChange",function(j){return c.model=j}),e.qZA()(),e.TgZ(8,"nz-col",5),e.YNc(9,Li,2,1,"button",7),e.qZA()()()()),2&y){const m=e.MAs(3);e.Q6J("ngrxLet",c.formMessageDisplay$),e.xp6(1),e.Q6J("mutationState",c.mutationState)("successMessage",m),e.xp6(3),e.Q6J("formGroup",c.form),e.xp6(1),e.Q6J("nzGutter",e.DdM(10,ol)),e.xp6(2),e.Q6J("form",c.form)("fields",c.fields)("model",c.model)("options",c.options),e.xp6(2),e.Q6J("ngrxLet",c.checkResult$)}},dependencies:[M.O5,t._Y,t.JL,t.sg,F.eJ,v.T7,On.ix,To.w,jo.dQ,Re.Ls,R.t3,R.SK,s.Lr,Oi.F],changeDetection:0}),ia);gs=(0,ne.gn)([(0,ce.c)()],gs);const au=["optionTemplates"];function zr(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"nz-col",9)(1,"nz-select",10),e.NdJ("ngModelChange",function(j){e.CHM(c);const Be=e.oxw();return e.KtG(Be.sourceType$.next(j))}),e.ALo(2,"ngrxPush"),e._UZ(3,"nz-option",11)(4,"nz-option",12)(5,"nz-option",13),e.qZA()()}if(2&u){const c=e.oxw();e.xp6(1),e.Q6J("nzOptionHeightPx",28)("ngModel",e.lcZ(2,2,c.sourceType$))}}function sa(u,y){1&u&&(e.TgZ(0,"div"),e._uU(1,"PMID:"),e.qZA())}function il(u,y){1&u&&(e.TgZ(0,"div"),e._uU(1,"ID:"),e.qZA())}function wa(u,y){1&u&&(e.TgZ(0,"div"),e._uU(1,"doi.org/"),e.qZA())}function aa(u,y){if(1&u&&(e.TgZ(0,"nz-col",14),e.ynx(1,15),e.ALo(2,"ngrxPush"),e.YNc(3,sa,2,0,"div",16),e.YNc(4,il,2,0,"div",16),e.YNc(5,wa,2,0,"div",16),e.BQk(),e.qZA()),2&u){const c=e.oxw();e.xp6(1),e.Q6J("ngSwitch",e.lcZ(2,4,c.sourceType$)),e.xp6(2),e.Q6J("ngSwitchCase","PUBMED"),e.xp6(1),e.Q6J("ngSwitchCase","ASCO"),e.xp6(1),e.Q6J("ngSwitchCase","ASH")}}function cu(u,y){if(1&u&&(e._UZ(0,"cvc-entity-tag",19),e.TgZ(1,"span",20),e._uU(2," ID: "),e._UZ(3,"span",21),e.ALo(4,"highlightTypeahead"),e.qZA()),2&u){const c=e.oxw().$implicit,m=e.oxw().ngrxLet;e.Q6J("cvcDisableLink",!0)("cvcCacheId",c.__typename+":"+c.id)("cvcEmphasize",m),e.xp6(3),e.Q6J("innerHtml",e.xi3(4,4,c.citationId.toString(),m),e.oJD)}}function S1(u,y){1&u&&(e.ynx(0),e.YNc(1,cu,5,7,"ng-template",null,18,e.W1O),e.BQk())}function rl(u,y){if(1&u&&(e.ynx(0),e.YNc(1,S1,3,0,"ng-container",17),e.ALo(2,"ngrxPush"),e.BQk()),2&u){const c=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,c.result$))}}function E1(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"div",22)(1,"cvc-entity-tag",23),e.NdJ("cvcOnClose",function(){const Be=e.CHM(c).$implicit,Mt=e.oxw();return e.KtG(Mt.onTagClose$.next(Be.nzValue))}),e.qZA()()}if(2&u){const c=y.$implicit,m=e.oxw();e.xp6(1),e.Q6J("cvcCacheId","Source:"+c.nzValue)("cvcContext",m.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",m.props.isMultiSelect?"default":"closeable")}}function mr(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"cvc-source-quick-add",24),e.NdJ("cvcOnCreate",function(j){e.CHM(c);const Be=e.oxw();return e.KtG(Be.onPopulate$.next(j))}),e.qZA()}if(2&u){const c=y.model;e.Q6J("cvcCitationId",c.citationId)("cvcSourceType",c.sourceType)}}function Cc(u,y){1&u&&(e.TgZ(0,"button",25),e._uU(1,"Add a New Source"),e.qZA())}const vs=function(){return[6,6]},sl=Lt(_n(),ni());let al=(()=>{class u extends sl{constructor(c,m,j){super(),this.taq=c,this.tq=m,this.changeDetectorRef=j,this.onModel$=new Co.y,this.defaultSourceType=Nn.yic.Pubmed,this.defaultOptions={props:{entityName:{singular:"Source",plural:"Sources"},isMultiSelect:!1,minSearchStrLength:2,tooltip:"PubMed, ASCO, or ASH Abstract Source(s) that support items, statements or descriptions.",placeholders:{default:"Search PubMed, ASCO, and ASH Sources",contextualFn:Be=>`Search ${Be} Sources`},extraType:"prompt"}},this.sourceType$=new Ge.X(this.defaultSourceType),this.sourceTypeName$=new Ge.X((0,Oa.c)(this.defaultSourceType)),this.placeholder$=new Ge.X(this.defaultOptions.props.placeholders.contextualFn((0,Oa.c)(this.defaultSourceType))),this.showTypeSelect$=new Co.y}ngAfterViewInit(){this.configureBaseField(),this.configureEntitySelectField({typeaheadQuery:this.taq,typeaheadParam$:this.sourceType$,typeaheadParamName$:this.sourceTypeName$||void 0,tagQuery:this.tq,getTypeaheadVarsFn:this.getTypeaheadVarsFn,getTypeaheadResultsFn:this.getTypeaheadResultsFn,getTagQueryVarsFn:this.getTagQueryVarsFn,getTagQueryResultsFn:this.getTagQueryResultsFn,getSelectedItemOptionFn:this.getSelectedItemOptionFn,getSelectOptionsFn:this.getSelectOptionsFn,changeDetectorRef:this.changeDetectorRef,selectOpen$:this.selectOpen$,selectComponent:this.selectComponent,minSearchStrLength:this.field.props.minSearchStrLength}),this.showTypeSelect$=this.onValueChange$.pipe((0,vt.U)(c=>!!(!c||c&&Array.isArray(c)))),this.sourceType$.pipe((0,ce.t)(this)).subscribe(c=>{const m=(0,Oa.c)(c);this.sourceTypeName$.next(m),this.placeholder$.next(this.props.placeholders.contextualFn(m))}),this.onModel$=(0,vo.a)([this.sourceType$,this.onSearch$]).pipe((0,vt.U)(([c,m])=>({citationId:m,sourceType:c})))}getTypeaheadVarsFn(c,m=Nn.yic.Pubmed){return{partialCitationId:c,sourceType:m}}getTypeaheadResultsFn(c){return c.data.sourceTypeahead}getTagQueryVarsFn(c){return{id:c}}getTagQueryResultsFn(c){return c.data.source}getSelectedItemOptionFn(c){return{value:c.id,label:c.name}}getSelectOptionsFn(c,m){return c.map((j,Be)=>({label:m.get(Be)||j.name,value:j.id}))}}return u.\u0275fac=function(c){return new(c||u)(e.Y36(Nn.aC3),e.Y36(Nn.BYO),e.Y36(e.sBO))},u.\u0275cmp=e.Xpm({type:u,selectors:[["cvc-source-select"]],viewQuery:function(c,m){if(1&c&&e.Gf(au,5,e.Rgc),2&c){let j;e.iGM(j=e.CRH())&&(m.optionTemplates=j)}},features:[e.qOj],decls:21,vars:39,consts:[[3,"nzGutter"],["nzFlex","80px",4,"ngIf"],["nzFlex","60px","class","prefix",4,"ngIf"],["nzFlex","auto"],[3,"cvcMinSearchStrLength","cvcSelectMode","cvcCustomTemplate","cvcFormControl","cvcFormlyAttributes","cvcEntityName","cvcPlaceholder","cvcResults","cvcOptions","cvcParamName","cvcShowError","cvcDisabled","cvcLoading","cvcAddEntity","cvcAddEntityModel","cvcSelectOpen","cvcOnSearch","cvcOnModelChange"],[4,"ngrxLet"],["selectedTemplate",""],["addSource",""],["addSourceBtn",""],["nzFlex","80px"],["nzSize","default","nzBlock","",3,"nzOptionHeightPx","ngModel","ngModelChange"],["nzValue","PUBMED","nzLabel","PubMed"],["nzValue","ASCO","nzLabel","ASCO"],["nzValue","ASH","nzLabel","ASH"],["nzFlex","60px",1,"prefix"],[3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngFor","ngForOf"],["optionTemplates",""],[3,"cvcDisableLink","cvcCacheId","cvcEmphasize"],["nz-typography","","nzType","secondary"],["nz-typography","","nzType","secondary",3,"innerHtml"],[1,"ant-select-selection-item-content"],[3,"cvcCacheId","cvcContext","cvcMode","cvcOnClose"],[3,"cvcCitationId","cvcSourceType","cvcOnCreate"],["type","button"]],template:function(c,m){if(1&c&&(e.TgZ(0,"nz-row",0),e.YNc(1,zr,6,4,"nz-col",1),e.ALo(2,"ngrxPush"),e.YNc(3,aa,6,6,"nz-col",2),e.ALo(4,"ngrxPush"),e.TgZ(5,"nz-col",3)(6,"cvc-entity-select",4),e.NdJ("cvcOnSearch",function(Be){return m.onSearch$.next(Be)})("cvcOnModelChange",function(Be){return m.props.change&&m.props.change(m.field,Be)}),e.ALo(7,"ngrxPush"),e.ALo(8,"ngrxPush"),e.ALo(9,"ngrxPush"),e.ALo(10,"ngrxPush"),e.ALo(11,"ngrxPush"),e.ALo(12,"ngrxPush"),e.ALo(13,"ngrxPush"),e.qZA()()(),e.YNc(14,rl,3,3,"ng-container",5),e.YNc(15,E1,2,3,"ng-template",null,6,e.W1O),e.YNc(17,mr,1,2,"ng-template",null,7,e.W1O),e.YNc(19,Cc,2,0,"ng-template",null,8,e.W1O)),2&c){const j=e.MAs(16),Be=e.MAs(18);e.Q6J("nzGutter",e.DdM(38,vs)),e.xp6(1),e.Q6J("ngIf",e.lcZ(2,20,m.showTypeSelect$)),e.xp6(2),e.Q6J("ngIf",e.lcZ(4,22,m.showTypeSelect$)),e.xp6(3),e.Q6J("cvcMinSearchStrLength",m.props.minSearchStrLength)("cvcSelectMode",m.props.isMultiSelect?"multiple":"default")("cvcCustomTemplate",j)("cvcFormControl",m.formControl)("cvcFormlyAttributes",m.field)("cvcEntityName",m.props.entityName)("cvcPlaceholder",e.lcZ(7,24,m.placeholder$))("cvcResults",e.lcZ(8,26,m.result$))("cvcOptions",e.lcZ(9,28,m.selectOption$))("cvcParamName",e.lcZ(10,30,m.sourceTypeName$))("cvcShowError",m.showError)("cvcDisabled",m.props.disabled)("cvcLoading",e.lcZ(11,32,m.isLoading$))("cvcAddEntity",Be)("cvcAddEntityModel",e.lcZ(12,34,m.onModel$))("cvcSelectOpen",e.lcZ(13,36,m.selectOpen$)),e.xp6(8),e.Q6J("ngrxLet",m.onSearch$)}},dependencies:[M.sg,M.O5,M.RF,M.n9,t.JJ,t.On,F.eJ,We.Ip,We.Vq,R.t3,R.SK,ge.ZU,Kn,xo.J,gs,F.fM,I.A],styles:[".prefix[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{text-align:right;line-height:28px;color:#999}"],changeDetection:0}),u})();const lu={types:[{name:"source-select",wrappers:["form-field"],component:al,defaultOptions:{props:{label:"Source"}}},{name:"source-multi-select",wrappers:["form-field"],component:al,defaultOptions:{props:{label:"Sources",isMultiSelect:!0}}}]};let uu=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,t.u5,t.UX,v.X0.forChild(lu),yt.L,On.sL,z1.aF,We.LV,Wn.$6,zn.Qp,Re.PV,Pe.o7,R.Jb,Xe.cg,Ye.zf,s.U5,B.ic,ge.ZJ,C1.S,Wt.X,Zt.g,je,Kt,It.s,Te.x]}),u})();function cl(u){return(()=>{class c extends u{configureStringTagField(){this.onValueChange$?(this.tagLabel$=new st.x,this.onValueChange$.pipe((0,ce.t)(this)).subscribe(j=>{this.tagLabel$.next(j?j.toString():void 0)}),this.onTagClose$=new st.x,this.onTagClose$.pipe((0,ce.t)(this)).subscribe(j=>{this.formControl.setValue(void 0),this.tagLabel$.next(void 0)})):console.error(`${this.field.id} cannot find onValueChange$ Subject, ensure configureBaseField() has been called before configureDisplayStringTag in its AfterViewInit hook.`)}}return c.\u0275fac=function(){let m;return function(Be){return(m||(m=e.n5z(c)))(Be||c)}}(),c.\u0275prov=e.Yz7({token:c,factory:c.\u0275fac}),c})()}function du(u,y){}function pu(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"span",4)(1,"nz-tag",5),e.NdJ("nzOnClose",function(j){e.CHM(c);const Be=e.oxw();return e.KtG(Be.cvcOnClose.next(j))}),e.YNc(2,du,0,0,"ng-template",6),e.qZA()()}if(2&u){const c=e.oxw(),m=e.MAs(4);e.xp6(1),e.Q6J("nzMode",c.cvcMode),e.xp6(1),e.Q6J("ngTemplateOutlet",m)}}function zc(u,y){}function Pa(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"span",7)(1,"nz-tag",5),e.NdJ("nzOnClose",function(j){e.CHM(c);const Be=e.oxw();return e.KtG(Be.cvcOnClose.next(j))}),e.YNc(2,zc,0,0,"ng-template",6),e.qZA()()}if(2&u){e.oxw();const c=e.MAs(4);e.xp6(1),e.Q6J("nzMode","closeable"),e.xp6(1),e.Q6J("ngTemplateOutlet",c)}}function ll(u,y){}function Ia(u,y){if(1&u&&(e.TgZ(0,"span",8),e.YNc(1,ll,0,0,"ng-template",6),e.qZA()),2&u){e.oxw();const c=e.MAs(4);e.xp6(1),e.Q6J("ngTemplateOutlet",c)}}function hu(u,y){1&u&&e._UZ(0,"i",11)}function Aa(u,y){if(1&u&&(e.YNc(0,hu,1,0,"i",9),e._UZ(1,"span",10),e.ALo(2,"highlightTypeahead")),2&u){const c=e.oxw();e.Q6J("ngIf",!c.cvcLabel),e.xp6(1),e.Q6J("innerHtml",c.cvcLabel?e.xi3(2,2,c.cvcLabel,c.cvcEmphasize):"?STRING?",e.oJD)}}let ul=(()=>{class u{constructor(){this.cvcMode="default",this.cvcContext="default",this.cvcOnClose=new e.vpe}}return u.\u0275fac=function(c){return new(c||u)},u.\u0275cmp=e.Xpm({type:u,selectors:[["cvc-string-tag"]],inputs:{cvcLabel:"cvcLabel",cvcEmphasize:"cvcEmphasize",cvcMode:"cvcMode",cvcContext:"cvcContext"},outputs:{cvcOnClose:"cvcOnClose"},decls:5,vars:3,consts:[["class","default",4,"ngIf"],["class","select-item",4,"ngIf"],["class","multi-select-item",4,"ngIf"],["tagContent",""],[1,"default"],[3,"nzMode","nzOnClose"],[3,"ngTemplateOutlet"],[1,"select-item"],[1,"multi-select-item"],["nz-icon","","nzType","question-circle","nzTheme","outline",4,"ngIf"],[3,"innerHtml"],["nz-icon","","nzType","question-circle","nzTheme","outline"]],template:function(c,m){1&c&&(e.YNc(0,pu,3,2,"span",0),e.YNc(1,Pa,3,2,"span",1),e.YNc(2,Ia,2,1,"span",2),e.YNc(3,Aa,3,5,"ng-template",null,3,e.W1O)),2&c&&(e.Q6J("ngIf","default"===m.cvcContext),e.xp6(1),e.Q6J("ngIf","select-item"===m.cvcContext),e.xp6(1),e.Q6J("ngIf","multi-select-item"===m.cvcContext))},dependencies:[M.O5,M.tP,Re.Ls,Wt.j,I.A]}),u})();function dl(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"cvc-string-tag",3),e.NdJ("cvcOnClose",function(){const Be=e.CHM(c).$implicit,Mt=e.oxw();return e.KtG(Mt.tagClosed(Be))}),e.qZA()}if(2&u){const c=y.$implicit,m=e.oxw();e.Q6J("cvcMode",m.props.disabled?"default":"closeable")("cvcLabel",c)}}const Tc=Lt(_n(),cl);let ca=(()=>{class u extends Tc{constructor(c){super(),this.cdr=c,this.defaultOptions={modelOptions:{updateOn:"blur"},props:{label:"Enter value",placeholder:"Enter value and hit Return"}},this.tags$=new st.x,this.values=new Set}onEnter(c){let m=c.target;m.value&&(this.values.add(m.value),m.value="");let j=Array.from(this.values);this.tags$.next(j),this.formControl.setValue(j)}tagClosed(c){this.values.delete(c);let m=Array.from(this.values);this.tags$.next(m),this.formControl.setValue(m),this.tags$.next(m)}ngAfterViewInit(){this.configureBaseField(),this.configureStringTagField(),this.formControl.value&&Array.isArray(this.formControl.value)&&(this.formControl.value.forEach(c=>this.values.add(c)),this.tags$.next(this.formControl.value),this.cdr.detectChanges())}}return u.\u0275fac=function(c){return new(c||u)(e.Y36(e.sBO))},u.\u0275cmp=e.Xpm({type:u,selectors:[["cvc-tag-input"]],features:[e.qOj],decls:5,vars:7,consts:[[3,"cvcMode","cvcLabel","cvcOnClose",4,"ngFor","ngForOf"],["nz-input","",3,"disabled","placeholder","keydown.enter"],["hidden","","nz-input","",3,"formControl","formlyAttributes"],[3,"cvcMode","cvcLabel","cvcOnClose"]],template:function(c,m){1&c&&(e.TgZ(0,"div"),e.YNc(1,dl,1,2,"cvc-string-tag",0),e.ALo(2,"ngrxPush"),e.TgZ(3,"input",1),e.NdJ("keydown.enter",function(Be){return m.onEnter(Be)}),e.qZA()(),e._UZ(4,"input",2)),2&c&&(e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,5,m.tags$)),e.xp6(2),e.Q6J("disabled",m.props.disabled)("placeholder",m.props.placeholder),e.xp6(1),e.Q6J("formControl",m.formControl)("formlyAttributes",m.field))},dependencies:[M.sg,t.Fj,t.JJ,t.oH,v.JD,Pe.Zp,ul,F.fM],changeDetection:0}),u})(),Fs=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,Re.PV,Wt.X,It.s]}),u})();const pl={types:[{name:"tag-input",wrappers:["form-field"],component:ca},{name:"tag-multi-input",wrappers:["form-field"],component:ca,defaultOptions:{props:{isRepeatItem:!0}}}]};let fu=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,t.UX,v.X0.forChild(pl),Ve.F,Pe.o7,s.U5,Fs]}),u})();const Ns=Lt(_n()),mu={types:[{name:"textarea",component:(()=>{class u extends Ns{constructor(){super(...arguments),this.defaultOptions={props:{label:"TEXTAREA!"}}}}return u.\u0275fac=function(){let y;return function(m){return(y||(y=e.n5z(u)))(m||u)}}(),u.\u0275cmp=e.Xpm({type:u,selectors:[["formly-field-nz-textarea"]],features:[e.qOj],decls:1,vars:3,consts:[["nz-input","",3,"rows","formControl","formlyAttributes"]],template:function(c,m){1&c&&e._UZ(0,"textarea",0),2&c&&e.Q6J("rows",m.props.rows?m.props.rows:2)("formControl",m.formControl)("formlyAttributes",m.field)},dependencies:[t.Fj,t.JJ,t.oH,v.JD,Pe.Zp],encapsulation:2,changeDetection:0}),u})(),wrappers:["form-field"]}]};let x1=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,t.UX,v.X0.forChild(mu),Pe.o7,je]}),u})();var _s;function gu(u,y){1&u&&e._UZ(0,"span",7)}function D1(u,y){1&u&&e._UZ(0,"span",8)}const vu=function(){return[0,0]},_u={name:void 0};let Na=((_s=class{set cvcSearchString(y){y&&this.searchString$.next(y)}constructor(y,c){this.query=y,this.errors=c,this.cvcOnCreate=new e.vpe,this.model=_u,this.form=new t.nJ({}),this.options={},this.onSubmit$=new st.x,this.searchString$=new Ge.X(void 0),this.queryMutator=new Ho.U(this.errors),this.isSubmitting$=new Ge.X(!1),this.submitSuccess$=new Ge.X(!1),this.submitError$=new Ge.X([]),this.addTherapyMutator=new Ho.U(this.errors),this.fields=[{key:"name",props:{hidden:!0,required:!0}}],this.searchString$.pipe((0,ce.t)(this)).subscribe(m=>{this.model.name=m}),this.onSubmit$.pipe((0,ce.t)(this)).subscribe(m=>{console.log("therapy-quick-add form model submitted.",m),this.submitTherapy(m)})}submitTherapy(y){if(!y.name)return void console.error("therapy-quick-add form submitTherapy requires model with valid name.");let c=this.addTherapyMutator.mutate(this.query,{name:y.name},{},m=>{console.log("therapy-quick-add submit data callback",m),m.addTherapy&&this.cvcOnCreate.next(m.addTherapy.therapy.id)});c.submitSuccess$.pipe((0,ce.t)(this)).subscribe(m=>{console.log("therapy-quick-add submitSuccess$",m),this.submitSuccess$.next(m)}),c.submitError$.pipe((0,ce.t)(this)).subscribe(m=>{console.log("therapy-quick-add submitError$",m),this.submitError$.next(m)}),c.isSubmitting$.pipe((0,ce.t)(this)).subscribe(m=>{this.isSubmitting$.next(m)})}}).\u0275fac=function(y){return new(y||_s)(e.Y36(Nn.Y_K),e.Y36(Xo.Y))},_s.\u0275cmp=e.Xpm({type:_s,selectors:[["cvc-therapy-quick-add-form"]],inputs:{cvcSearchString:"cvcSearchString"},outputs:{cvcOnCreate:"cvcOnCreate"},decls:14,vars:17,consts:[[3,"formGroup","ngSubmit"],[3,"nzGutter"],["nzSpan","24"],[3,"form","fields","model","options","modelChange"],["nz-button","","nzType","primary","nzBlock","",3,"disabled"],["nz-icon","","nzType","plus-circle","nzTheme","outline",4,"ngIf"],["nz-icon","","nzType","loading","nzTheme","outline",4,"ngIf"],["nz-icon","","nzType","plus-circle","nzTheme","outline"],["nz-icon","","nzType","loading","nzTheme","outline"]],template:function(y,c){1&y&&(e.TgZ(0,"form",0),e.NdJ("ngSubmit",function(){return c.onSubmit$.next(c.model)}),e.TgZ(1,"nz-row",1)(2,"nz-col",2)(3,"formly-form",3),e.NdJ("modelChange",function(j){return c.model=j}),e.qZA()(),e.TgZ(4,"nz-col",2)(5,"button",4),e.YNc(6,gu,1,0,"span",5),e.ALo(7,"ngrxPush"),e.YNc(8,D1,1,0,"span",6),e.ALo(9,"ngrxPush"),e._uU(10," Create Therapy\xa0"),e.TgZ(11,"i"),e._uU(12),e.ALo(13,"ngrxPush"),e.qZA()()()()()),2&y&&(e.Q6J("formGroup",c.form),e.xp6(1),e.Q6J("nzGutter",e.DdM(16,vu)),e.xp6(2),e.Q6J("form",c.form)("fields",c.fields)("model",c.model)("options",c.options),e.xp6(2),e.Q6J("disabled",!c.form.valid),e.xp6(1),e.Q6J("ngIf",!e.lcZ(7,10,c.isSubmitting$)),e.xp6(2),e.Q6J("ngIf",e.lcZ(9,12,c.isSubmitting$)),e.xp6(4),e.Oqu(e.lcZ(13,14,c.searchString$)))},dependencies:[M.O5,t._Y,t.JL,t.sg,v.T7,On.ix,To.w,jo.dQ,Re.Ls,R.t3,R.SK,F.fM],encapsulation:2,changeDetection:0}),_s);Na=(0,ne.gn)([(0,ce.c)()],Na);const La=["optionTemplates"];function hl(u,y){if(1&u&&(e.ynx(0),e.TgZ(1,"strong"),e._uU(2,"NCIt ID:"),e.qZA(),e._UZ(3,"span",9),e.ALo(4,"highlightTypeahead"),e.BQk()),2&u){const c=e.oxw(2).$implicit,m=e.oxw().ngrxLet;e.xp6(3),e.Q6J("innerHtml",e.xi3(4,1,c.ncitId,m),e.oJD)}}function yu(u,y){if(1&u&&(e.ynx(0),e.TgZ(1,"strong"),e._uU(2,"Aliases: "),e.qZA(),e.TgZ(3,"em"),e._UZ(4,"span",10),e.ALo(5,"highlightTypeahead"),e.qZA(),e.BQk()),2&u){const c=e.oxw(2).$implicit,m=e.oxw().ngrxLet;e.xp6(4),e.Q6J("nzTooltipTitle",c.therapyAliases.join(", "))("innerHtml",e.xi3(5,2,c.therapyAliases.join(", "),m),e.oJD)}}function fl(u,y){if(1&u&&(e._UZ(0,"cvc-entity-tag",6),e.TgZ(1,"span",7),e.YNc(2,hl,5,4,"ng-container",8),e.YNc(3,yu,6,5,"ng-container",8),e.qZA()),2&u){const c=e.oxw().$implicit,m=e.oxw().ngrxLet;e.Q6J("cvcDisableLink",!0)("cvcCacheId",c.__typename+":"+c.id)("cvcEmphasize",m),e.xp6(2),e.Q6J("ngIf",c.ncitId),e.xp6(1),e.Q6J("ngIf",c.therapyAliases.length>0)}}function O1(u,y){1&u&&(e.ynx(0),e.YNc(1,fl,4,5,"ng-template",null,5,e.W1O),e.BQk())}function ml(u,y){if(1&u&&(e.ynx(0),e.YNc(1,O1,3,0,"ng-container",4),e.ALo(2,"ngrxPush"),e.BQk()),2&u){const c=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,c.result$))}}function w1(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"div",11)(1,"cvc-entity-tag",12),e.NdJ("cvcOnClose",function(){const Be=e.CHM(c).$implicit,Mt=e.oxw();return e.KtG(Mt.onTagClose$.next(Be.nzValue))}),e.qZA()()}if(2&u){const c=y.$implicit,m=e.oxw();e.xp6(1),e.Q6J("cvcCacheId","Therapy:"+c.nzValue)("cvcContext",m.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",m.props.isMultiSelect?"default":"closeable")}}function Cu(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"cvc-therapy-quick-add-form",13),e.NdJ("cvcOnCreate",function(j){e.CHM(c);const Be=e.oxw();return e.KtG(Be.onPopulate$.next(j))}),e.qZA()}2&u&&e.Q6J("cvcSearchString",y.$implicit)}const zu=Lt(_n(),ni());let ka=(()=>{class u extends zu{constructor(c,m,j){super(),this.taq=c,this.tq=m,this.changeDetectorRef=j,this.defaultOptions={props:{entityName:{singular:"Therapy",plural:"Therapies"},isMultiSelect:!1,requireType:!0,tooltip:"Therapy or therapy combination which interacts with the specified variant",placeholder:"Search Therapies",requireTypePromptFn:(Be,Mt)=>`Select an ${Be} Type to search associated Therapies`}},this.placeholder$=new Ge.X(void 0)}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEntitySelectField({typeaheadQuery:this.taq,typeaheadParam$:void 0,tagQuery:this.tq,getTypeaheadVarsFn:this.getTypeaheadVarsFn,getTypeaheadResultsFn:this.getTypeaheadResultsFn,getTagQueryVarsFn:this.getTagQueryVarsFn,getTagQueryResultsFn:this.getTagQueryResultsFn,getSelectedItemOptionFn:this.getSelectedItemOptionFn,getSelectOptionsFn:this.getSelectOptionsFn,changeDetectorRef:this.changeDetectorRef,selectOpen$:this.selectOpen$,selectComponent:this.selectComponent}),this.configurePlaceholders()}configureStateConnections(){if(this.state&&(this.stateEntityName=this.state.entityName,this.state.requires.requiresTherapy$?this.onRequiresTherapy$=this.state.requires.requiresTherapy$:console.warn(`${this.field.id} field's form provides a state, but could not find requiresTherapy$ subject to attach.`),this.props.requireType)){const c=`${this.stateEntityName.toLowerCase()}Type$`;this.state.fields[c]?this.onEntityType$=this.state.fields[c]:console.error(`${this.field.id} requireType is true, however form state does not provide Subject ${c}.`)}}configurePlaceholders(){this.placeholder$.next(this.props.placeholder),this.onRequiresTherapy$&&this.onEntityType$&&(0,vo.a)([this.onRequiresTherapy$,this.onEntityType$]).pipe((0,ko.x)(),(0,ce.t)(this)).subscribe(([c,m])=>{!c&&m?(this.props.required=!1,this.props.disabled=!0,this.props.description=`${(0,Oe.E)(m)} ${this.state.entityName} does not include associated therapies`,this.props.extraType="prompt",this.resetField(),this.cdr.markForCheck()):this.props.requireType&&!m?(this.props.required=!1,this.props.disabled=!0,this.props.description=this.props.requireTypePromptFn(this.state.entityName,this.props.isMultiSelect),this.props.extraType="prompt"):c?(this.props.required=!0,this.props.disabled=!1,this.props.description=void 0,this.props.extraType=void 0):(!c&&this.formControl.value||this.props.requireType&&!m&&this.formControl.value)&&(this.resetField(),console.log("HERE2"))})}getTypeaheadVarsFn(c){return{name:c}}getTypeaheadResultsFn(c){return c.data.therapyTypeahead}getTagQueryVarsFn(c){return{id:c}}getTagQueryResultsFn(c){return c.data.therapy}getSelectedItemOptionFn(c){return{value:c.id,label:c.name}}getSelectOptionsFn(c,m){return c.map((j,Be)=>({label:m.get(Be)||j.name,value:j.id}))}}return u.\u0275fac=function(c){return new(c||u)(e.Y36(Nn.cIw),e.Y36(Nn.sjj),e.Y36(e.sBO))},u.\u0275cmp=e.Xpm({type:u,selectors:[["cvc-therapy-select"]],viewQuery:function(c,m){if(1&c&&e.Gf(La,5,e.Rgc),2&c){let j;e.iGM(j=e.CRH())&&(m.optionTemplates=j)}},features:[e.qOj],decls:12,vars:26,consts:[[3,"cvcAddEntity","cvcCustomTemplate","cvcDisabled","cvcEntityName","cvcFormControl","cvcFormlyAttributes","cvcLoading","cvcOptions","cvcPlaceholder","cvcResults","cvcSelectMode","cvcShowError","cvcSelectOpen","cvcOnSearch","cvcOnOpenChange","cvcOnModelChange"],[4,"ngrxLet"],["selectedTemplate",""],["addTherapy",""],[4,"ngFor","ngForOf"],["optionTemplates",""],[3,"cvcDisableLink","cvcCacheId","cvcEmphasize"],["nz-typography","","nzType","secondary"],[4,"ngIf"],[3,"innerHtml"],["nz-typography","","nzType","secondary","nz-tooltip","",3,"nzTooltipTitle","innerHtml"],[1,"ant-select-selection-item-content"],[3,"cvcCacheId","cvcContext","cvcMode","cvcOnClose"],[3,"cvcSearchString","cvcOnCreate"]],template:function(c,m){if(1&c&&(e.TgZ(0,"cvc-entity-select",0),e.NdJ("cvcOnSearch",function(Be){return m.onSearch$.next(Be)})("cvcOnOpenChange",function(Be){return m.onOpenChange$.next(Be)})("cvcOnModelChange",function(Be){return m.props.change&&m.props.change(m.field,Be)}),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.ALo(3,"ngrxPush"),e.ALo(4,"ngrxPush"),e.ALo(5,"ngrxPush"),e.ALo(6,"ngrxPush"),e.qZA(),e.YNc(7,ml,3,3,"ng-container",1),e.YNc(8,w1,2,3,"ng-template",null,2,e.W1O),e.YNc(10,Cu,1,1,"ng-template",null,3,e.W1O)),2&c){const j=e.MAs(9),Be=e.MAs(11);e.Q6J("cvcAddEntity",Be)("cvcCustomTemplate",j)("cvcDisabled",m.onRequiresTherapy$&&!e.lcZ(1,14,m.onRequiresTherapy$))("cvcEntityName",m.props.entityName)("cvcFormControl",m.formControl)("cvcFormlyAttributes",m.field)("cvcLoading",e.lcZ(2,16,m.isLoading$))("cvcOptions",e.lcZ(3,18,m.selectOption$))("cvcPlaceholder",e.lcZ(4,20,m.placeholder$))("cvcResults",e.lcZ(5,22,m.result$))("cvcSelectMode",m.props.isMultiSelect?"multiple":"default")("cvcShowError",m.showError)("cvcSelectOpen",e.lcZ(6,24,m.selectOpen$)),e.xp6(7),e.Q6J("ngrxLet",m.onSearch$)}},dependencies:[M.sg,M.O5,F.eJ,Xe.SY,ge.ZU,Kn,xo.J,Na,F.fM,I.A],changeDetection:0}),u})();const P1={types:[{name:"therapy-select",wrappers:["form-field"],component:ka,defaultOptions:{props:{label:"Therapy"}}},{name:"therapy-multi-select",wrappers:["form-field"],component:ka,defaultOptions:{props:{label:"Therapies",isMultiSelect:!0}}}]};let I1=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,t.UX,v.X0.forChild(P1),yt.L,On.sL,We.LV,Wn.$6,zn.Qp,Re.PV,Pe.o7,R.Jb,Xe.cg,Ye.zf,s.U5,B.ic,ge.ZJ,Wt.X,je,Kt,It.s,Te.x]}),u})();const Mc=["optionTemplates"];function A1(u,y){if(1&u&&e._UZ(0,"cvc-attribute-tag",4),2&u){const c=e.oxw().$implicit;e.Q6J("cvcAttrValue",c)}}function F1(u,y){1&u&&(e.ynx(0),e.YNc(1,A1,1,1,"ng-template",null,3,e.W1O),e.BQk())}function N1(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"div",5)(1,"cvc-attribute-tag",6),e.NdJ("cvcOnClose",function(j){e.CHM(c);const Be=e.oxw();return e.KtG(Be.onTagClose$.next(j))}),e.qZA()()}if(2&u){const c=y.$implicit,m=e.oxw();e.xp6(1),e.Q6J("cvcAttrValue",c.nzValue)("cvcContext",m.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",m.props.isMultiSelect?"default":"closeable")}}const L1={DIAGNOSTIC:"Evidence pertains to a variant's impact on patient diagnosis (cancer subtype).",PREDICTIVE:"Evidence pertains to a variant's effect on therapeutic response.",PROGNOSTIC:"Evidence pertains to a variant's impact on disease progression, severity, or patient survival.",PREDISPOSING:"Evidence pertains to a germline variant's role in conferring susceptibility to disease (including pathogenicity evaluations).",ONCOGENIC:"Evidence pertains to a somatic variant's involvement in tumor pathogenesis as described by the Hallmarks of Cancer.",FUNCTIONAL:"Evidence pertains to a variant that alters biological function from the reference state."},k1=Lt(_n(),lt()),Ra={types:[{name:"type-select",wrappers:["form-field"],component:(()=>{class u extends k1{constructor(c){super(),this.cdr=c,this.defaultOptions={props:{label:"ENTITY_NAME Type",entityName:{singular:"Entity",plural:"Entities"},placeholder:"Select an ENTITY_NAME Type",isMultiSelect:!1}},this.typeEnums$=new Ge.X([])}ngAfterViewInit(){this.configureBaseField(),this.state&&this.state.formReady$?this.state.formReady$.pipe((0,De.h)(c=>c),(0,Ei.q)(1),(0,ce.t)(this)).subscribe(c=>{this.configureField()}):this.configureField()}configureField(){this.onValueChange$.pipe((0,ce.t)(this)).subscribe(c=>{c?(this.props.description=L1[c],this.props.extraType="description"):(this.props.description=void 0,this.props.extraType=void 0)}),this.state?(this.props.placeholder=this.props.placeholder.replace("ENTITY_NAME",this.state.entityName),this.props.label=this.props.label.replace("ENTITY_NAME",this.state.entityName),this.props.tooltip=`Type of clinical outcome associated with the ${this.state.entityName} statement.`,this.state.enums.entityType$?(this.state.enums.entityType$.pipe((0,ce.t)(this)).subscribe(c=>{this.typeEnums$.next(c)}),this.optionTemplates||console.error(`${this.field.id} could not find its optionTemplates QueryList to populate its select options, so simple text labels will be displayed.`),this.optionTemplate$=this.optionTemplates?.changes.pipe((0,vt.U)(c=>c.map(m=>m))),this.configureEnumSelect()):console.error(`${this.field.id} could not find state's enums.inputEnum$ to populate its select options.`)):console.error(`${this.field.id} requires a form state to configure itself, none was found.`)}configureEnumSelect(){this.configureEnumSelectField({optionEnum$:this.typeEnums$,optionTemplate$:this.optionTemplate$,changeDetectorRef:this.cdr})}}return u.\u0275fac=function(c){return new(c||u)(e.Y36(e.sBO))},u.\u0275cmp=e.Xpm({type:u,selectors:[["cvc-type-select"]],viewQuery:function(c,m){if(1&c&&e.Gf(Mc,5,e.Rgc),2&c){let j;e.iGM(j=e.CRH())&&(m.optionTemplates=j)}},features:[e.qOj],decls:6,vars:13,consts:[[3,"cvcFormControl","cvcFormlyAttributes","cvcSelectMode","cvcPlaceholder","cvcCustomTemplate","cvcOptions","cvcShowError","cvcDisabled"],[4,"ngFor","ngForOf"],["selectedTemplate",""],["optionTemplates",""],[3,"cvcAttrValue"],[1,"ant-select-selection-item-content"],[3,"cvcAttrValue","cvcContext","cvcMode","cvcOnClose"]],template:function(c,m){if(1&c&&(e._UZ(0,"cvc-enum-select",0),e.ALo(1,"ngrxPush"),e.YNc(2,F1,3,0,"ng-container",1),e.ALo(3,"ngrxPush"),e.YNc(4,N1,2,3,"ng-template",null,2,e.W1O)),2&c){const j=e.MAs(5);e.Q6J("cvcFormControl",m.formControl)("cvcFormlyAttributes",m.field)("cvcSelectMode",m.props.isMultiSelect?"multiple":"default")("cvcPlaceholder",m.props.placeholder)("cvcCustomTemplate",j)("cvcOptions",e.lcZ(1,9,m.selectOption$))("cvcShowError",m.showError)("cvcDisabled",m.props.disabled),e.xp6(2),e.Q6J("ngForOf",e.lcZ(3,11,m.typeEnums$))}},dependencies:[M.sg,ye,Ke,F.fM],changeDetection:0}),u})()}]};let Va=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,t.UX,v.X0.forChild(Ra),je,$e,He]}),u})();var gl=a(6973);function bc(u,y){const c="object"==typeof y;return new Promise((m,j)=>{let Mt,Be=!1;u.subscribe({next:bn=>{Mt=bn,Be=!0},error:j,complete:()=>{Be?m(Mt):c?m(y.defaultValue):j(new gl.K)}})})}const Qr={isDefaultCol:u=>"default"===u.type,isSelectCol:u=>"select"===u.type,isEntityTagCol:u=>"entity-tag"===u.type,isEnumTagCol:u=>"enum-tag"===u.type,isTextTagCol:u=>"text-tag"===u.type},yl=u=>void 0!==u.sort,Ec=u=>void 0!==u.filter,xc={diseases:Nn.pP7.DiseaseName,gene:Nn.pP7.EntrezSymbol,therapies:Nn.pP7.TherapyName,variant:Nn.pP7.VariantName},Su={diseases:"diseaseName",therapies:"therapyName",variant:"variantName",gene:"entrezSymbol",aliases:"variantAlias"},Cl=["selected","id"];class Eu{constructor(){this.sortStreams=[],this.filterStreams=[],this.config=this.configureColumnStreams([{key:"selected",label:"Select",type:"select",width:"25px",align:"center",fixedLeft:!0,checkbox:{th:{showCheckbox:!1},td:{showCheckbox:!0}}},{key:"id",label:"ID",hidden:!0,type:"hidden",width:"0px"},{key:"variant",label:"Variant",type:"entity-tag",width:"215px",context:"variant",fixedLeft:!0,showStatus:!0,tag:{fullWidth:!0,truncateLabel:"200px"},sort:{default:"ascend"},filter:{inputType:"default",options:[{key:"Filter Variant Name",value:null}]}},{key:"aliases",label:"Aliases",type:"default",width:"150px",objectKey:"name",sort:{},filter:{inputType:"default",options:[{key:"Filter Aliases",value:null}]}},{key:"gene",label:"Gene",type:"entity-tag",width:"135px",tag:{truncateLabel:"125px"},sort:{},filter:{inputType:"default",options:[{key:"Filter Gene Name",value:null}]}},{key:"diseases",label:"Diseases",type:"entity-tag",width:"250px",sort:{},tag:{maxTags:1,truncateLabel:"175px"},filter:{inputType:"default",typename:"Therapy",options:[{key:"Filter Therapy Names",value:null}]}},{key:"therapies",label:"Therapies",type:"entity-tag",width:"275px",sort:{},tag:{maxTags:2,truncateLabel:"150px"},filter:{inputType:"default",typename:"Therapy",options:[{key:"Filter Therapy Names",value:null}]}}])}get(){return this.config}getSortStreams(){return this.sortStreams}getFilterStreams(){return this.filterStreams}getAttributeFilters(y,c){return y.getValues().map(j=>({text:(0,Oe.E)(j),value:j,byDefault:c===j}))}configureColumnStreams(y){return y.forEach(c=>{const m=c;if(yl(m)&&(m.sort.changes=new Ge.X({key:m.key,value:m.sort.default??null}),this.sortStreams.push(m.sort.changes)),Ec(m)){const j=m.filter.options.find(Be=>Be.byDefault)?.value;m.filter.changes=new Ge.X({key:m.key,value:j??null}),this.filterStreams.push(m.filter.changes)}}),y}}var ys;let Dc=((ys=class{set cvcTableScrollerToIndex(y){void 0!==y&&this.scrollToIndex(y)}set cvcTableScrollerToOffset(y){void 0!==y&&this.scrollToIndex(y)}constructor(y){this.host=y,this.cvcTableScrollerOnScroll=new e.vpe,this.cvcTableScrollerOnFetch=new e.vpe,this.cvcTableScrollerTargetHeight=140,this.cvcTableScrollerFetchCount=50,this.onLoadThrottleTime=500,this.onScrollThrottleTime=250,this.onScrollDebounceTime=300}ngAfterViewInit(){if(!this.host||!this.host.cdkVirtualScrollViewport)throw new Error("cvcTableScroller directive could not obtain reference to host cdkVirtualScrollViewport.");this.viewport=this.host.cdkVirtualScrollViewport,this.scrolled$=this.viewport.elementScrolled(),this.rendered$=this.viewport.renderedRangeStream,this.rendered$.pipe((0,ct.P)()).subscribe(()=>this.viewport.checkViewportSize()),this.scrolled$.pipe((0,xi.p)(this.onScrollThrottleTime,Ii.z,{leading:!0,trailing:!0}),(0,Lo.b)(y=>this.cvcTableScrollerOnScroll.next("scroll")),(0,Jn.b)(this.onScrollDebounceTime),(0,ce.t)(this)).subscribe(y=>{this.cvcTableScrollerOnScroll.next("stop")}),this.scrolled$.pipe((0,vt.U)(y=>this.viewport.measureScrollOffset("bottom")),(0,Cn.G)(),(0,De.h)(([y,c])=>c<y&&c<this.cvcTableScrollerTargetHeight),(0,xi.p)(this.onLoadThrottleTime),(0,ce.t)(this)).subscribe(y=>{this.cvcTableScrollerOnScroll.next("bottom");try{this.loadMore(this.cvcTableScrollerPageInfo)}catch(c){console.error(c)}})}loadMore(y){const c=this.cvcTableScrollerQueryRef;if(!y&&c)throw new Error("table-scroll directive requires PageInfo to use provided QueryRef.");if(y&&!c)throw new Error("table-scroll directive requires valid QueryRef when PageInfo provided.");if(y&&c){const[m,j,Be]=[this.cvcTableScrollerFetchCount,y.hasNextPage,y.endCursor];if(!m||!Be)throw new Error("table-scroll PageInfo invalid.");if(!j)return;this.cvcTableScrollerOnFetch.next({first:m,after:Be})}}scrollToIndex(y){const[c,m]=[this.host,this.host.cdkVirtualScrollViewport];if(!c||!m)throw new Error("table-scroll scrollToIndex() cannot find host viewport.");m.scrollToIndex(y)}scrollToOffset(y){const[c,m]=[this.host,this.host.cdkVirtualScrollViewport];if(!c||!m)throw new Error("table-scroll scrollToOffset() cannot find host viewport.");m.scrollToOffset(y)}}).\u0275fac=function(y){return new(y||ys)(e.Y36(Ln.N8))},ys.\u0275dir=e.lG2({type:ys,selectors:[["","cvcTableScroller",""]],inputs:{cvcTableScrollerTargetHeight:"cvcTableScrollerTargetHeight",cvcTableScrollerQueryRef:"cvcTableScrollerQueryRef",cvcTableScrollerPageInfo:"cvcTableScrollerPageInfo",cvcTableScrollerFetchCount:"cvcTableScrollerFetchCount",cvcTableScrollerToIndex:"cvcTableScrollerToIndex",cvcTableScrollerToOffset:"cvcTableScrollerToOffset"},outputs:{cvcTableScrollerOnScroll:"cvcTableScrollerOnScroll",cvcTableScrollerOnFetch:"cvcTableScrollerOnFetch"}}),ys);function xu(u,y){1&u&&e._UZ(0,"span",8)}function Ji(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"span",9),e.NdJ("click",function(){e.CHM(c),e.oxw(2);const j=e.MAs(3),Be=e.oxw();return j.value="",e.KtG(Be.cvcModelChange.next(null))}),e.qZA()}}function Oc(u,y){if(1&u&&(e.YNc(0,xu,1,0,"span",6),e.YNc(1,Ji,1,0,"span",7)),2&u){e.oxw();const c=e.MAs(3);e.Q6J("ngIf",!c.value),e.xp6(1),e.Q6J("ngIf",c.value)}}function zl(u,y){if(1&u){const c=e.EpF();e.ynx(0),e.TgZ(1,"nz-input-group",2)(2,"input",3,4),e.NdJ("ngModelChange",function(j){e.CHM(c);const Be=e.oxw();return e.KtG(Be.cvcModelChange.next(j))}),e.qZA()(),e.YNc(4,Oc,2,2,"ng-template",null,5,e.W1O),e.BQk()}if(2&u){const c=e.MAs(5),m=e.oxw();e.xp6(1),e.Q6J("nzSuffix",c),e.xp6(1),e.Q6J("placeholder",m.cvcPlaceholder)("ngModel",m.cvcModel)}}function wc(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"nz-input-number-group",10)(1,"nz-input-number",11,4),e.NdJ("ngModelChange",function(j){e.CHM(c);const Be=e.oxw();return e.KtG(Be.cvcModelChange.next(""===j?null:j))}),e.qZA()()}if(2&u){const c=e.oxw();let m;e.xp6(1),e.Q6J("nzPlaceHolder",null!==(m=c.cvcPlaceholder)&&void 0!==m?m:"")("ngModel",c.cvcModel)("nzMin",1)("nzStep",1)}}Dc=(0,ne.gn)([(0,ce.c)()],Dc);let Qi=(()=>{class u{constructor(){this.cvcModel=null,this.cvcModelChange=new e.vpe,this.cvcInputType="default"}}return u.\u0275fac=function(c){return new(c||u)},u.\u0275cmp=e.Xpm({type:u,selectors:[["cvc-variant-table-filter-input"]],inputs:{cvcModel:"cvcModel",cvcInputType:"cvcInputType",cvcPlaceholder:"cvcPlaceholder"},outputs:{cvcModelChange:"cvcModelChange"},decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["numericInput",""],["nzSize","small",3,"nzSuffix"],["nz-input","",3,"placeholder","ngModel","ngModelChange"],["filterInput",""],["suffixIcon",""],["nz-icon","","nzType","search","style","color: #ddd",4,"ngIf"],["nz-icon","","class","ant-input-clear-icon","nzTheme","fill","nzType","close-circle",3,"click",4,"ngIf"],["nz-icon","","nzType","search",2,"color","#ddd"],["nz-icon","","nzTheme","fill","nzType","close-circle",1,"ant-input-clear-icon",3,"click"],["nzSize","small"],[2,"width","100%",3,"nzPlaceHolder","ngModel","nzMin","nzStep","ngModelChange"]],template:function(c,m){if(1&c&&(e.YNc(0,zl,6,3,"ng-container",0),e.YNc(1,wc,3,4,"ng-template",null,1,e.W1O)),2&c){const j=e.MAs(2);e.Q6J("ngIf","default"===m.cvcInputType)("ngIfElse",j)}},dependencies:[M.O5,t.Fj,t.JJ,t.On,To.w,Re.Ls,Pe.Zp,Pe.gB,Pe.ke,Bn._V,Bn.Rb]}),u})();function ua(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"li",5),e.NdJ("click",function(){const Be=e.CHM(c).$implicit,Mt=e.oxw();return e.KtG(Mt.cvcOptionChange.next({key:Mt.cvcColumnKey,value:Be.value}))}),e._UZ(1,"cvc-attribute-tag",6),e.qZA()}if(2&u){const c=y.$implicit,m=e.oxw();e.Q6J("nzSelected",(null==m.cvcOption?null:m.cvcOption.value)===c.value),e.xp6(1),e.Q6J("cvcFullWidth",!0)("cvcChecked",(null==m.cvcOption?null:m.cvcOption.value)===c.value)("cvcAttrValue",c.value)}}let Tl=(()=>{class u{constructor(){this.cvcOptionChange=new e.vpe}}return u.\u0275fac=function(c){return new(c||u)},u.\u0275cmp=e.Xpm({type:u,selectors:[["cvc-variant-enum-filter-menu"]],inputs:{cvcColumnKey:"cvcColumnKey",cvcFilterOptions:"cvcFilterOptions",cvcOption:"cvcOption"},outputs:{cvcOptionChange:"cvcOptionChange"},decls:6,vars:2,consts:[["nz-menu",""],["nz-menu-item","",3,"nzSelected","click",4,"ngFor","ngForOf"],[2,"padding","3px"],["nz-button","","nzType","default","nzBlock","","nzSize","small",3,"disabled","click"],["nz-icon","","nzType","retweet","nzTheme","outline"],["nz-menu-item","",3,"nzSelected","click"],["cvcContext","menu-item",3,"cvcFullWidth","cvcChecked","cvcAttrValue"]],template:function(c,m){1&c&&(e.TgZ(0,"ul",0),e.YNc(1,ua,2,4,"li",1),e.TgZ(2,"li",2)(3,"button",3),e.NdJ("click",function(){return m.cvcOptionChange.next({key:m.cvcColumnKey,value:null})}),e._UZ(4,"span",4),e._uU(5," Reset "),e.qZA()()()),2&c&&(e.xp6(1),e.Q6J("ngForOf",m.cvcFilterOptions),e.xp6(2),e.Q6J("disabled",null===(null==m.cvcOption?null:m.cvcOption.value)))},dependencies:[M.sg,ye,On.ix,To.w,jo.dQ,Re.Ls,Cr.wO,Cr.r9],styles:[".typeahead-match[_ngcontent-%COMP%]{font-weight:700}[_nghost-%COMP%]     ul li:hover{background-color:#e6f7ff}[_nghost-%COMP%]     ul li.ant-dropdown-menu-item-selected{background-color:#1890ff}[_nghost-%COMP%]     ul li.ant-dropdown-menu-item-selected:active{background-color:#096dd9}"],changeDetection:0}),u})();var da;function wd(u,y){if(1&u&&e._UZ(0,"th",14),2&u){const c=y.ngIf;let m;e.Q6J("nzShowCheckbox",c.checkbox.th.showCheckbox||!1)("nzWidth",c.width)("nzAlign",null!==(m=c.align)&&void 0!==m?m:"left")("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1)}}function V1(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"th",15),e.NdJ("nzSortOrderChange",function(j){const Mt=e.CHM(c).ngIf;return e.KtG(Mt.sort.changes.next({key:Mt.key,value:j}))}),e.ALo(1,"ngrxPush"),e.TgZ(2,"span",16),e._uU(3),e.qZA()()}if(2&u){const c=y.ngIf;let m,j;e.Q6J("nzColumnKey",c.key)("nzAlign",null!==(m=c.align)&&void 0!==m?m:"left")("nzWidth",c.width)("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1)("nzShowSort",void 0!==c.sort)("nzSortFn",!0)("nzSortOrder",(null==(j=e.lcZ(1,10,c.sort.changes))?null:j.value)||null),e.xp6(2),e.Q6J("nzTooltipTitle",c.tooltip),e.xp6(1),e.hij(" ",c.label," ")}}function B1(u,y){if(1&u&&(e.TgZ(0,"th",17),e._uU(1),e.qZA()),2&u){const c=y.ngIf;let m;e.Q6J("nzColumnKey",c.key)("nzAlign",null!==(m=c.align)&&void 0!==m?m:"left")("nzWidth",c.width)("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1)("nzTooltipTitle",c.tooltip),e.xp6(1),e.hij(" ",c.label," ")}}function Du(u,y){if(1&u&&(e.TgZ(0,"th",17),e._uU(1),e.qZA()),2&u){const c=y.ngIf;let m;e.Q6J("nzColumnKey",c.key)("nzAlign",null!==(m=c.align)&&void 0!==m?m:"left")("nzWidth",c.width)("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1)("nzTooltipTitle",c.tooltip),e.xp6(1),e.hij(" ",c.label," ")}}function H1(u,y){if(1&u&&(e.TgZ(0,"th",17),e._uU(1),e.qZA()),2&u){const c=y.ngIf;let m;e.Q6J("nzColumnKey",c.key)("nzAlign",null!==(m=c.align)&&void 0!==m?m:"left")("nzWidth",c.width)("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1)("nzTooltipTitle",c.tooltip),e.xp6(1),e.hij(" ",c.label," ")}}function Y1(u,y){if(1&u&&(e.ynx(0),e.YNc(1,wd,1,5,"th",11),e.ALo(2,"guardType"),e.YNc(3,V1,4,12,"th",12),e.ALo(4,"guardType"),e.YNc(5,B1,2,7,"th",13),e.ALo(6,"guardType"),e.YNc(7,Du,2,7,"th",13),e.ALo(8,"guardType"),e.YNc(9,H1,2,7,"th",13),e.ALo(10,"guardType"),e.BQk()),2&u){const c=e.oxw().$implicit,m=e.oxw(2);e.xp6(1),e.Q6J("ngIf",e.xi3(2,5,c,m.colGuards.isSelectCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(4,8,c,m.colGuards.isEntityTagCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(6,11,c,m.colGuards.isEnumTagCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(8,14,c,m.colGuards.isTextTagCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(10,17,c,m.colGuards.isDefaultCol))}}function $1(u,y){if(1&u&&(e.ynx(0),e.YNc(1,Y1,11,20,"ng-container",10),e.BQk()),2&u){const c=y.$implicit;e.xp6(1),e.Q6J("ngIf",!c.hidden)}}function U1(u,y){if(1&u&&(e.TgZ(0,"th",22),e._uU(1," \xa0 "),e.qZA()),2&u){const c=y.ngIf;let m;e.Q6J("nzColumnKey",c.key)("nzAlign",null!==(m=c.align)&&void 0!==m?m:"left")("nzWidth",c.width)("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1)}}function Ml(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"cvc-variant-table-filter-input",25),e.NdJ("cvcModelChange",function(j){const Mt=e.CHM(c).ngIf,bn=e.oxw().ngIf;return e.KtG(Mt.changes.next({key:bn.key,value:j}))}),e.qZA()}if(2&u){const c=e.oxw().ngIf;e.Q6J("cvcInputType",c.filter.inputType)("cvcPlaceholder",c.filter.options[0].key)("cvcModel",c.filter.options[0].value)}}function Pc(u,y){if(1&u&&(e.TgZ(0,"th",23),e.YNc(1,Ml,1,3,"cvc-variant-table-filter-input",24),e.qZA()),2&u){const c=y.ngIf;let m;e.Q6J("nzColumnKey",c.key)("nzWidth",c.width)("nzAlign",null!==(m=c.align)&&void 0!==m?m:"left")("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1),e.xp6(1),e.Q6J("ngIf",c.filter)}}function Ou(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"th",26,27),e.NdJ("nzSortOrderChange",function(j){const Mt=e.CHM(c).ngIf;return e.KtG(Mt.sort.changes.next({key:Mt.key,value:j}))}),e.ALo(2,"ngrxPush"),e.TgZ(3,"nz-filter-trigger",28,29),e.ALo(5,"ngrxPush"),e._UZ(6,"span",30),e.qZA(),e.TgZ(7,"nz-dropdown-menu",null,31)(9,"cvc-variant-enum-filter-menu",32),e.NdJ("cvcOptionChange",function(j){const Mt=e.CHM(c).ngIf,bn=e.MAs(4);return Mt.filter.changes.next(j),e.KtG(bn.nzVisible=!1)}),e.ALo(10,"ngrxPush"),e.qZA()()()}if(2&u){const c=y.ngIf,m=e.MAs(8);let j,Be,Mt;e.Q6J("nzColumnKey",c.key)("nzWidth",c.width)("nzAlign",null!==(j=c.align)&&void 0!==j?j:"left")("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1)("nzShowSort",!0)("nzSortFn",!0)("nzSortOrder",(null==(Be=e.lcZ(2,15,c.sort.changes))?null:Be.value)||null)("nzShowFilter",void 0!==c.filter)("nzFilterFn",!0),e.xp6(3),e.Q6J("nzDropdownMenu",m)("nzActive",null!==(null==(Mt=e.lcZ(5,17,c.filter.changes))?null:Mt.value)),e.xp6(6),e.Q6J("cvcColumnKey",c.key)("cvcFilterOptions",c.filter.options)("cvcOption",e.lcZ(10,19,c.filter.changes))}}function rs(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"th",33,27)(2,"nz-filter-trigger",28),e.ALo(3,"ngrxPush"),e._UZ(4,"span",34),e.qZA(),e.TgZ(5,"nz-dropdown-menu",null,35)(7,"div",36)(8,"div",37)(9,"cvc-variant-table-filter-input",38),e.NdJ("cvcModelChange",function(j){const Mt=e.CHM(c).ngIf;return e.KtG(Mt.filter.changes.next({key:Mt.key,value:j}))}),e.qZA()()()()()}if(2&u){const c=y.ngIf,m=e.MAs(6);let j,Be;e.Q6J("nzColumnKey",c.key)("nzWidth",c.width)("nzAlign",null!==(j=c.align)&&void 0!==j?j:"left")("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1)("nzFilterFn",!0),e.xp6(2),e.Q6J("nzDropdownMenu",m)("nzActive",null!==(null==(Be=e.lcZ(3,10,c.filter.changes))?null:Be.value)),e.xp6(7),e.Q6J("cvcPlaceholder",c.filter.options[0].key)("cvcModel",c.filter.options[0].value)}}function G1(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"cvc-variant-table-filter-input",38),e.NdJ("cvcModelChange",function(j){const Mt=e.CHM(c).ngIf,bn=e.oxw().ngIf;return e.KtG(Mt.changes.next({key:bn.key,value:j}))}),e.qZA()}if(2&u){const c=e.oxw().ngIf;e.Q6J("cvcPlaceholder",c.filter.options[0].key)("cvcModel",c.filter.options[0].value)}}function Q1(u,y){if(1&u&&(e.TgZ(0,"th",23),e.YNc(1,G1,1,2,"cvc-variant-table-filter-input",39),e.qZA()),2&u){const c=y.ngIf;let m;e.Q6J("nzColumnKey",c.key)("nzWidth",c.width)("nzAlign",null!==(m=c.align)&&void 0!==m?m:"left")("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1),e.xp6(1),e.Q6J("ngIf",c.filter)}}function wu(u,y){if(1&u&&(e.ynx(0),e.YNc(1,U1,2,5,"th",18),e.ALo(2,"guardType"),e.YNc(3,Pc,2,6,"th",19),e.ALo(4,"guardType"),e.YNc(5,Ou,11,21,"th",20),e.ALo(6,"guardType"),e.YNc(7,rs,10,12,"th",21),e.ALo(8,"guardType"),e.YNc(9,Q1,2,6,"th",19),e.ALo(10,"guardType"),e.BQk()),2&u){const c=e.oxw().$implicit,m=e.oxw(2);e.xp6(1),e.Q6J("ngIf",e.xi3(2,5,c,m.colGuards.isSelectCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(4,8,c,m.colGuards.isEntityTagCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(6,11,c,m.colGuards.isEnumTagCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(8,14,c,m.colGuards.isTextTagCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(10,17,c,m.colGuards.isDefaultCol))}}function bl(u,y){if(1&u&&(e.ynx(0),e.YNc(1,wu,11,20,"ng-container",10),e.BQk()),2&u){const c=y.$implicit;e.xp6(1),e.Q6J("ngIf",!c.hidden)}}function Sl(u,y){if(1&u&&(e.TgZ(0,"thead")(1,"tr",7),e.YNc(2,$1,2,1,"ng-container",8),e.qZA(),e.TgZ(3,"tr",9),e.YNc(4,bl,2,1,"ng-container",8),e.qZA()()),2&u){const c=y.ngrxLet;e.xp6(2),e.Q6J("ngForOf",c),e.xp6(2),e.Q6J("ngForOf",c)}}function pa(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"td",45),e.NdJ("nzCheckedChange",function(j){e.CHM(c);const Be=e.oxw(3).$implicit,Mt=e.oxw(2);return e.KtG(Mt.onRowSelected$.next({id:Be.id,selected:j}))}),e.qZA()}if(2&u){const c=y.ngIf,m=e.oxw(3).$implicit;let j;e.Q6J("nzChecked",m.selected)("nzAlign",null!==(j=c.align)&&void 0!==j?j:"left")("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1)}}function Ha(u,y){1&u&&e.GkF(0)}const Pu=function(u,y,c){return{$implicit:u,config:y,emphasize:c}};function Ic(u,y){if(1&u&&(e.ynx(0),e.YNc(1,Ha,1,0,"ng-container",51),e.ALo(2,"isArray"),e.ALo(3,"ngrxPush"),e.BQk()),2&u){const c=e.oxw().ngIf,m=e.oxw().ngIf,j=e.MAs(3),Be=e.MAs(5),Mt=e.oxw(3).$implicit;let bn;e.xp6(1),e.Q6J("ngTemplateOutlet",e.lcZ(2,2,Mt[c])?j:Be)("ngTemplateOutletContext",e.kEZ(6,Pu,Mt[c],m,null==(bn=e.lcZ(3,4,m.filter.changes))?null:bn.value))}}function Ya(u,y){if(1&u&&(e.ynx(0),e.YNc(1,Ic,4,10,"ng-container",50),e.BQk()),2&u){const c=y.ngIf;e.oxw();const m=e.MAs(7),j=e.oxw(3).$implicit;e.xp6(1),e.Q6J("ngIf",j[c])("ngIfElse",m)}}const Iu=function(u,y,c,m,j){return{tagList:u,tag:y,showPopover:c,status:m,emphasize:j}};function j1(u,y){if(1&u&&(e.ynx(0),e._UZ(1,"cvc-entity-collection-tag",53),e.BQk()),2&u){const c=e.oxw(2),m=c.config,j=c.$implicit,Be=c.emphasize;e.oxw();const Mt=e.MAs(5),bn=e.oxw(5);e.xp6(1),e.Q6J("cvcCollectionTagConfig",e.qbA(3,Iu,j.slice(m.tag.maxTags,j.length),m.tag,!bn.isScrolling,!0===m.showStatus?j.status:void 0,Be))("cvcTagTemplate",Mt)("cvcShowFullLabels",!0)}}function W1(u,y){if(1&u&&(e.ynx(0),e._UZ(1,"cvc-entity-tag-list",52),e.YNc(2,j1,2,9,"ng-container",10),e.BQk()),2&u){const c=e.oxw(),m=c.config,j=c.$implicit,Be=c.emphasize;e.oxw();const Mt=e.MAs(5),bn=e.oxw(5);e.xp6(1),e.Q6J("cvcTagTemplate",Mt)("cvcTagListConfig",e.qbA(3,Iu,j.slice(0,m.tag.maxTags),m.tag,!bn.isScrolling,!0===m.showStatus?j.status:void 0,Be)),e.xp6(1),e.Q6J("ngIf",j.slice(m.tag.maxTags,j.length).length>0)}}function Z1(u,y){if(1&u&&e.YNc(0,W1,3,9,"ng-container",50),2&u){const c=y.$implicit;e.oxw();const m=e.MAs(7);e.Q6J("ngIf",c.length>0)("ngIfElse",m)}}function K1(u,y){if(1&u&&e._UZ(0,"cvc-entity-tag",54),2&u){const c=y.$implicit,m=y.config,j=y.emphasize,Be=e.oxw(6);let Mt;e.Q6J("cvcTruncateLabel",null==m.tag?null:m.tag.truncateLabel)("cvcLinkableEntity",c)("cvcEmphasize",j)("cvcShowPopover",!Be.isScrolling)("cvcStatus",!0===m.showStatus?c.status:void 0)("cvcFullWidth",null!==(Mt=null==m.tag?null:m.tag.fullWidth)&&void 0!==Mt&&Mt)}}function J1(u,y){if(1&u&&e._UZ(0,"cvc-empty-value",55),2&u){const c=e.oxw().ngIf;e.Q6J("cvcEmptyCategory",c.emptyValueCategory||"unspecified")}}function Au(u,y){if(1&u&&(e.TgZ(0,"td",46),e.YNc(1,Ya,2,2,"ng-container",10),e.YNc(2,Z1,1,2,"ng-template",null,47,e.W1O),e.YNc(4,K1,1,6,"ng-template",null,48,e.W1O),e.YNc(6,J1,1,1,"ng-template",null,49,e.W1O),e.qZA()),2&u){const c=y.ngIf;let m;e.Q6J("nzAlign",null!==(m=c.align)&&void 0!==m?m:"left")("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1),e.xp6(1),e.Q6J("ngIf",c.context||c.key)}}function El(u,y){if(1&u&&(e._UZ(0,"cvc-attribute-tag",58),e.ALo(1,"evidenceEnumDisplay")),2&u){const c=e.oxw().ngIf,m=e.oxw(3).$implicit,j=e.oxw(2);e.Q6J("cvcFullWidth",!0)("cvcAttrValue",m[c.key])("cvcTooltip",e.lcZ(1,3,!j.isScrolling&&m[c.key]))}}function Fu(u,y){if(1&u&&e._UZ(0,"cvc-empty-value",55),2&u){const c=e.oxw().ngIf;e.Q6J("cvcEmptyCategory",c.emptyValueCategory||"unspecified")}}function xl(u,y){if(1&u&&(e.TgZ(0,"td",46),e.YNc(1,El,2,5,"cvc-attribute-tag",56),e.YNc(2,Fu,1,1,"ng-template",null,57,e.W1O),e.qZA()),2&u){const c=y.ngIf,m=e.MAs(3),j=e.oxw(3).$implicit;let Be;e.Q6J("nzAlign",null!==(Be=c.align)&&void 0!==Be?Be:"left")("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1),e.xp6(1),e.Q6J("ngIf",j[c.key])("ngIfElse",m)}}function Pd(u,y){if(1&u&&(e.TgZ(0,"nz-tag",61),e._UZ(1,"span",62),e.qZA()),2&u){const c=e.oxw().ngIf,m=e.oxw(3).$implicit;e.Q6J("nzTooltipTitle",m[c.key])}}function Id(u,y){if(1&u&&e._UZ(0,"cvc-empty-value",55),2&u){const c=e.oxw().ngIf;e.Q6J("cvcEmptyCategory",c.emptyValueCategory||"unspecified")}}function Dl(u,y){if(1&u&&(e.TgZ(0,"td",46),e.YNc(1,Pd,2,1,"nz-tag",59),e.YNc(2,Id,1,1,"ng-template",null,60,e.W1O),e.qZA()),2&u){const c=y.ngIf,m=e.MAs(3),j=e.oxw(3).$implicit;let Be;e.Q6J("nzAlign",null!==(Be=c.align)&&void 0!==Be?Be:"left")("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1),e.xp6(1),e.Q6J("ngIf",j[c.key])("ngIfElse",m)}}function Nu(u,y){1&u&&e.GkF(0)}const ss=function(u,y){return{$implicit:u,emphasize:y}};function Zn(u,y){if(1&u&&(e.ynx(0),e.YNc(1,Nu,1,0,"ng-container",51),e.ALo(2,"isArray"),e.ALo(3,"ngrxPush"),e.BQk()),2&u){const c=y.ngIf,m=e.oxw().ngIf,j=e.MAs(3),Be=e.MAs(5);let Mt;e.xp6(1),e.Q6J("ngTemplateOutlet",e.lcZ(2,2,c)?j:Be)("ngTemplateOutletContext",e.WLB(6,ss,c,null==(Mt=e.lcZ(3,4,m.filter.changes))?null:Mt.value))}}function Si(u,y){1&u&&e.GkF(0)}function $a(u,y){1&u&&(e.ynx(0),e._uU(1,", "),e.BQk())}function Ol(u,y){if(1&u&&(e.ynx(0),e.YNc(1,Si,1,0,"ng-container",51),e.YNc(2,$a,2,0,"ng-container",10),e.BQk()),2&u){const c=y.$implicit,m=y.last,j=e.oxw(2).emphasize;e.oxw();const Be=e.MAs(5);e.xp6(1),e.Q6J("ngTemplateOutlet",Be)("ngTemplateOutletContext",e.WLB(3,ss,c,j)),e.xp6(1),e.Q6J("ngIf",!m)}}function Ls(u,y){if(1&u&&(e.ynx(0),e.YNc(1,Ol,3,6,"ng-container",8),e.BQk()),2&u){const c=e.oxw().$implicit;e.xp6(1),e.Q6J("ngForOf",c)}}function z(u,y){if(1&u&&e.YNc(0,Ls,2,1,"ng-container",50),2&u){const c=y.$implicit;e.oxw();const m=e.MAs(7);e.Q6J("ngIf",c.length>0)("ngIfElse",m)}}function ot(u,y){if(1&u&&(e._UZ(0,"span",67),e.ALo(1,"highlightTypeahead")),2&u){const c=y.$implicit,m=y.emphasize,j=e.oxw().ngIf;e.Q6J("innerHtml",e.xi3(1,1,j.objectKey?c[j.objectKey]:c,m),e.oJD)}}function ee(u,y){if(1&u&&e._UZ(0,"cvc-empty-value",55),2&u){const c=e.oxw().ngIf;e.Q6J("cvcEmptyCategory",c.emptyValueCategory||"unspecified")}}function Lu(u,y){if(1&u&&(e.TgZ(0,"td",63),e.YNc(1,Zn,4,9,"ng-container",50),e.YNc(2,z,1,2,"ng-template",null,64,e.W1O),e.YNc(4,ot,2,4,"ng-template",null,65,e.W1O),e.YNc(6,ee,1,1,"ng-template",null,66,e.W1O),e.qZA()),2&u){const c=y.ngIf,m=e.MAs(7),j=e.oxw(3).$implicit;let Be;e.Q6J("nzAlign",null!==(Be=c.align)&&void 0!==Be?Be:"left")("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1),e.xp6(1),e.Q6J("ngIf",j[c.key])("ngIfElse",m)}}function ku(u,y){if(1&u&&(e.ynx(0),e.YNc(1,pa,1,4,"td",42),e.ALo(2,"guardType"),e.YNc(3,Au,8,4,"td",43),e.ALo(4,"guardType"),e.YNc(5,xl,4,5,"td",43),e.ALo(6,"guardType"),e.YNc(7,Dl,4,5,"td",43),e.ALo(8,"guardType"),e.YNc(9,Lu,8,5,"td",44),e.ALo(10,"guardType"),e.BQk()),2&u){const c=e.oxw().$implicit,m=e.oxw(3);e.xp6(1),e.Q6J("ngIf",e.xi3(2,5,c,m.colGuards.isSelectCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(4,8,c,m.colGuards.isEntityTagCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(6,11,c,m.colGuards.isEnumTagCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(8,14,c,m.colGuards.isTextTagCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(10,17,c,m.colGuards.isDefaultCol))}}function Ru(u,y){if(1&u&&(e.ynx(0),e.YNc(1,ku,11,20,"ng-container",10),e.BQk()),2&u){const c=y.$implicit;e.xp6(1),e.Q6J("ngIf",!c.hidden)}}function wl(u,y){if(1&u&&(e.TgZ(0,"tr",41),e.YNc(1,Ru,2,1,"ng-container",8),e.qZA()),2&u){const c=e.oxw().ngrxLet;e.xp6(1),e.Q6J("ngForOf",c)}}function Cs(u,y){1&u&&(e.TgZ(0,"tbody"),e.YNc(1,wl,2,1,"ng-template",40),e.qZA())}function ks(u,y){1&u&&e._UZ(0,"span",75)}function Pl(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"span",76),e.NdJ("click",function(){e.CHM(c),e.oxw(2);const j=e.MAs(3),Be=e.oxw().filter;return j.value="",e.KtG(Be.changes.next({key:Be.key,value:null}))}),e.qZA()}}function jr(u,y){if(1&u&&(e.YNc(0,ks,1,0,"span",73),e.YNc(1,Pl,1,0,"span",74)),2&u){e.oxw();const c=e.MAs(3);e.Q6J("ngIf",!c.value),e.xp6(1),e.Q6J("ngIf",c.value)}}function Ad(u,y){if(1&u){const c=e.EpF();e.ynx(0),e.TgZ(1,"nz-input-group",69)(2,"input",70,71),e.NdJ("nzFilterChange",function(j){e.CHM(c);const Be=e.oxw().filter;return e.KtG(Be.changes.next({key:Be.key,value:j}))}),e.qZA()(),e.YNc(4,jr,2,2,"ng-template",null,72,e.W1O),e.BQk()}if(2&u){const c=e.MAs(5),m=e.oxw().filter;e.xp6(1),e.Q6J("nzSuffix",c),e.xp6(1),e.Q6J("placeholder",m.placeholder)("ngModel",m.defaultValue)}}function q1(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"nz-input-number-group",77)(1,"nz-input-number",78,71),e.NdJ("ngModelChange",function(j){e.CHM(c);const Be=e.oxw().filter;return e.KtG(Be.changes.next({key:Be.key,value:j}))}),e.qZA()()}if(2&u){const c=e.oxw().filter;e.xp6(1),e.Q6J("nzPlaceHolder",c.placeholder)("ngModel",c.defaultValue)("nzMin",1)("nzStep",1)}}function Ua(u,y){if(1&u&&(e.YNc(0,Ad,6,3,"ng-container",50),e.YNc(1,q1,3,4,"ng-template",null,68,e.W1O)),2&u){const c=y.filter,m=e.MAs(2);e.Q6J("ngIf",void 0===c.inputType||"default"===c.inputType)("ngIfElse",m)}}const X1=function(){return[6,6]};function wi(u,y){1&u&&(e.TgZ(0,"nz-row",79)(1,"nz-col")(2,"span"),e._uU(3,"Use checkboxes to select or deselect EIDs"),e.qZA()()()),2&u&&e.Q6J("nzGutter",e.DdM(1,X1))}function qi(u,y){1&u&&(e.TgZ(0,"nz-tag",90),e._UZ(1,"i",91),e.TgZ(2,"span"),e._uU(3,"Loading\u2026"),e.qZA()())}const Ac=function(u){return{$implicit:u}};function Fd(u,y){if(1&u&&(e.TgZ(0,"nz-tag",94),e._UZ(1,"span",95),e.TgZ(2,"span",96),e._uU(3),e.qZA()()),2&u){e.oxw();const c=e.MAs(4),m=e.oxw().ngrxLet;e.xp6(2),e.Q6J("nzTooltipTitle",c)("nzTooltipTitleContext",e.VKq(3,Ac,m.query)),e.xp6(1),e.hij(" Query Error",m.query.length>1?"s":""," ")}}function ed(u,y){if(1&u&&(e.TgZ(0,"nz-tag",94)(1,"span",96)(2,"span",97)(3,"strong"),e._uU(4),e.qZA()()()()),2&u){e.oxw();const c=e.MAs(4),m=e.oxw().ngrxLet;e.xp6(1),e.Q6J("nzTooltipTitle",c)("nzTooltipTitleContext",e.VKq(3,Ac,m.network)),e.xp6(3),e.hij(" Network Error",m.query.length>1?"s":""," ")}}function Nd(u,y){if(1&u&&(e.TgZ(0,"div"),e._uU(1),e.qZA()),2&u){const c=y.$implicit;e.xp6(1),e.hij(" ",c.message," ")}}function Il(u,y){1&u&&e.YNc(0,Nd,2,1,"div",8),2&u&&e.Q6J("ngForOf",y.$implicit)}function Vu(u,y){if(1&u&&(e.ynx(0),e.YNc(1,Fd,4,5,"nz-tag",92),e.YNc(2,ed,5,5,"nz-tag",92),e.YNc(3,Il,1,1,"ng-template",null,93,e.W1O),e.BQk()),2&u){const c=e.oxw().ngrxLet;e.xp6(1),e.Q6J("ngIf",c.query),e.xp6(1),e.Q6J("ngIf",c.network)}}function Ga(u,y){if(1&u&&(e.ynx(0),e.YNc(1,Vu,5,2,"ng-container",10),e.BQk()),2&u){const c=y.ngrxLet;e.xp6(1),e.Q6J("ngIf",c)}}function ha(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"div",98)(1,"nz-checkbox-group",99),e.NdJ("ngModelChange",function(j){e.CHM(c);const Be=e.oxw(2);return e.KtG(Be.onPreferenceChange$.next(j))}),e.ALo(2,"ngrxPush"),e.qZA()()}if(2&u){const c=e.oxw(2);e.xp6(1),e.Q6J("ngModel",e.lcZ(2,1,c.setPreference$))}}function td(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"nz-row",79)(1,"nz-col",80),e.YNc(2,qi,4,0,"nz-tag",81),e.ALo(3,"ngrxPush"),e.ALo(4,"ngrxPush"),e._UZ(5,"cvc-no-more-rows",82),e.ALo(6,"ngrxPush"),e.qZA(),e.TgZ(7,"nz-col",80),e.YNc(8,Ga,2,1,"ng-container",3),e.qZA(),e.TgZ(9,"nz-col",80),e._UZ(10,"cvc-table-counts2",83),e.qZA(),e.TgZ(11,"nz-col",84)(12,"nz-button-group")(13,"button",85),e.NdJ("click",function(){e.CHM(c);const j=e.oxw();return e.KtG(j.onResetFilter$.next())}),e._UZ(14,"span",86),e.qZA(),e.TgZ(15,"button",87),e._UZ(16,"span",88),e.qZA()(),e.YNc(17,ha,3,3,"ng-template",null,89,e.W1O),e.qZA()()}if(2&u){const c=e.MAs(18),m=e.oxw();e.Q6J("nzGutter",8),e.xp6(2),e.Q6J("ngIf",e.lcZ(3,7,m.loading$)&&e.lcZ(4,9,m.isFetchMore$)),e.xp6(3),e.Q6J("cvcShowTag",e.lcZ(6,11,m.noMoreRows$)),e.xp6(3),e.Q6J("ngrxLet",m.queryError$),e.xp6(2),e.Q6J("cvcTableCountsConnection",m.connection$),e.xp6(5),e.Q6J("nzPopoverContent",c)("nzPopoverTrigger","click")}}const Al=function(){return[]},up=function(){return{x:"800px",y:"200px"}};let Fc=((da=class{constructor(y,c,m){this.queryGQL=y,this.apollo=c,this.cdr=m,this.cvcSelectedIdsChange=new e.vpe,this.isScrolling=!1,this.colGuards=Qr,this.onFetchMore$=new st.x,this.onPreferenceChange$=new Ge.X([]),this.onResetFilter$=new st.x,this.onRowSelected$=new st.x,this.onScroll$=new Ge.X("stop"),this.onSetSelectedRow$=new Ge.X(new Set),this.queryError$=new st.x,this.queryRequest$=new st.x,this.queryResult$=new Mo.t(1),this.isFetchMore$=new Ge.X(!1),this.noMoreRows$=new Ge.X(!1),this.scrollToIndex$=new st.x,this.tableConfig=new Eu;const j=(0,vo.a)(this.tableConfig.getFilterStreams()),Be=(0,vo.a)(this.tableConfig.getSortStreams()).pipe((0,De.h)(Mt=>Mt.filter(bn=>null!==bn.value).length<=1));this.refetch$=(0,vo.a)([Be,j]).pipe((0,vt.U)(([Mt,bn])=>({query:"refetch",sort:Mt,filter:bn}))),this.fetchMore$=this.onFetchMore$.pipe((0,vt.U)(Mt=>({query:"fetchMore",fetchMore:{...Mt}}))),(0,qn.T)(this.refetch$,this.fetchMore$).pipe((0,Jn.b)(50),(0,ce.t)(this)).subscribe(Mt=>{const bn=this.getQueryVars(Mt);this.queryRef?(this.queryError$.next({}),"refetch"===Mt.query?(this.isFetchMore$.next(!1),this.queryRef.refetch(bn).then(Hn=>{(Hn.error||Hn.errors)&&this.queryError$.next(this.getRequestErrors(Hn))}).then(()=>{this.scrollToIndex$.next(0)})):(this.isFetchMore$.next(!0),this.queryRef.fetchMore({variables:bn}).then(Hn=>{(Hn.error||Hn.errors)&&this.queryError$.next(this.getRequestErrors(Hn))}))):(this.isFetchMore$.next(!1),this.queryError$.next({}),this.queryRef=this.queryGQL.watch(bn),this.queryRef.valueChanges.pipe((0,ce.t)(this)).subscribe(Hn=>{this.queryResult$.next(Hn),(Hn.error||Hn.errors)&&this.queryError$.next(this.getRequestErrors(Hn))}))}),this.loading$=this.queryResult$.pipe((0,rn.j)("loading"),(0,ko.x)()),this.connection$=this.queryResult$.pipe((0,rn.j)("data","browseVariants"),(0,De.h)(zo.ep)),this.pageInfo$=this.connection$.pipe((0,rn.j)("pageInfo"),(0,De.h)(zo.ep)),this.row$=(0,vo.a)([this.connection$.pipe((0,rn.j)("edges"),(0,De.h)(zo.ep),(0,vt.U)(Mt=>Mt.map(bn=>bn.node))),this.onSetSelectedRow$]).pipe((0,vt.U)(([Mt,bn])=>Mt.map(Hn=>{if(Hn)return{...Hn,variant:{__typename:"Variant",id:Hn.id,name:Hn.name,link:Hn.link},gene:{__typename:"Gene",id:Hn.geneId,name:Hn.geneName,link:Hn.geneLink},selected:bn.has(Hn.id)}}))),this.col$=new Ge.X(this.tableConfig.get()),this.setPreference$=this.col$.pipe((0,vt.U)(Mt=>this.getColPrefsFromTableConfig(Mt))),this.onPreferenceChange$.pipe((0,it.M)(this.col$),(0,vt.U)(([Mt,bn])=>this.getTableConfigFromColPrefs(Mt,bn)),(0,ce.t)(this)).subscribe(Mt=>{this.col$.next(Mt)}),this.onSetTableFilter$=new Ge.X([]),this.onSetTableFilter$.pipe((0,ce.t)(this)).subscribe(Mt=>{const bn=this.col$.getValue();Mt.forEach(Hn=>{const Bo=bn.find(Wi=>Wi.key===Hn.key);if(void 0!==Bo.filter.inputType){const Wi=Bo.filter.options[0];if(null===Hn.value)return Bo.filter.options=[{...Wi,value:null}],void Bo.filter.changes.next(Hn);if(Array.isArray(Hn.value)&&0===Hn.value.length)return Bo.filter.options=[{...Wi,value:null}],void Bo.filter.changes.next({...Hn,value:null});let er;Array.isArray(Hn.value)?Hn.value.length>0&&(er=Hn.value[0]):er=Hn.value;const Bl=Bo.filter.typename;if(!Bl||!er)return void console.error(`variant-manager requires column config '${Bo.key}' provide a typename for cvcTablePrefs Input to set its filter`);const ec=this.getEntityName(Bl,er);if(!ec)return;Bo.filter.options=[{...Wi,value:ec}],Bo.filter.changes.next({...Hn,value:ec})}else Ec(Bo)&&Bo.filter.changes.next(Hn)})}),this.onSetTablePref$=new Ge.X([]),this.onSetTablePref$.pipe((0,it.M)(this.setPreference$),(0,vt.U)(([Mt,bn])=>{const Hn=[];return Mt.forEach(Bo=>{let Wi=bn.find(er=>er.value===Bo.value);Wi?Hn.push({...Wi,...Bo}):console.warn(`variant-manager onSetTablePref$ received updated preferences for column '${Bo.value}', but a column with that key could not be found.`)}),Hn}),(0,ce.t)(this)).subscribe(Mt=>{this.onPreferenceChange$.next(Mt)}),this.onRowSelected$.pipe((0,it.M)(this.onSetSelectedRow$),(0,ce.t)(this)).subscribe(([Mt,bn])=>{Mt.selected?bn.add(Mt.id):bn.delete(Mt.id),this.onSetSelectedRow$.next(bn),this.cvcSelectedIdsChange.next(Array.from(bn))}),this.onScroll$.pipe((0,vt.U)(Mt=>"stop"!==Mt),(0,ko.x)(),(0,ce.t)(this)).subscribe(Mt=>{this.isScrolling=Mt,this.cdr.detectChanges()}),this.onScroll$.pipe((0,De.h)(Mt=>"bottom"===Mt),(0,it.M)(this.pageInfo$),(0,vt.U)(([Mt,bn])=>bn),(0,ce.t)(this)).subscribe(Mt=>{Mt.hasNextPage||(this.noMoreRows$.next(!0),this.cdr.detectChanges(),setInterval(()=>this.noMoreRows$.next(!1)))})}ngAfterViewInit(){this.onResetFilter$.pipe((0,it.M)((0,$o.of)(this.tableConfig.get())),(0,ce.t)(this)).subscribe(([y,c])=>{const m=[];c.forEach(j=>{if(yl(j)&&j.sort.changes&&j.sort.changes.next({key:j.key,value:j.sort.default??null}),Ec(j)){const Be=j.filter.options.find(Mt=>1==Mt.byDefault)?.value;j.filter.changes&&j.filter.changes.next({key:j.key,value:Be||null})}m.push(j)}),this.col$.next(m)})}getQueryVars(y){const c=this.getQueryFilterParams(y);return{...this.getQuerySortParams(y),...c,...y.fetchMore}}getQuerySortParams(y){if(!y.sort)return;const m=y.sort.find(Be=>null!==Be.value);return m?{sortBy:{column:this.getSortColumnFromColKey(m.key),direction:"ascend"===m.value?Nn.SrV.Asc:Nn.SrV.Desc||void 0}}:void 0}getQueryFilterParams(y){let c={};return y.filter&&y.filter.forEach(m=>{c[Su[m.key]||m.key]=null===m.value||""===m.value?void 0:m.value}),c}getRequestErrors(y){return{query:y.errors,network:y.error}}getTableConfigFromColPrefs(y,c){return c.forEach(m=>{if(Cl.find(Be=>Be===m.key))return;const j=y.find(Be=>Be.value===m.key);j&&(m.hidden=!j?.checked)}),[...c]}getColPrefsFromTableConfig(y){let c=[];return y.forEach(m=>{Cl.find(j=>j===m.key)||c.push({label:m.tooltip||m.label,value:m.key,checked:!m.hidden})}),c}getSortColumnFromColKey(y){return xc[y]}getEntityName(y,c){const m={id:`${y}:${c}`,fragment:Do.Ps`
                fragment Linkable${y}Entity on ${y} {
                  id
                  name
                  link
                }`},j=this.apollo.client.readFragment(m);if(j)return j.name;console.error(`variant-manager onSetTableFilter$ could not find cached entity ${y}:${c} to populate input filter`)}trackByIndex(y,c){return c?.id}ngOnChanges(y){if(y.cvcTableSettings){const c=y.cvcTableSettings.currentValue;void 0!==c&&this.onSetTableFilter$.next(c.filters)}if(y.cvcSelectedIds){const c=y.cvcSelectedIds.currentValue,m=new Set;void 0!==c&&c.forEach(j=>m.add(j)),this.onSetSelectedRow$.next(m)}}}).\u0275fac=function(y){return new(y||da)(e.Y36(Nn.XQi),e.Y36(co._M),e.Y36(e.sBO))},da.\u0275cmp=e.Xpm({type:da,selectors:[["cvc-variant-manager"]],inputs:{cvcTableSettings:"cvcTableSettings",cvcSelectedIds:"cvcSelectedIds"},outputs:{cvcSelectedIdsChange:"cvcSelectedIdsChange"},features:[e.TTD],decls:16,vars:27,consts:[["nzSize","small",3,"nzTitle","nzExtra"],["cvcTableScroller","",3,"nzData","cvcTableScrollerQueryRef","cvcTableScrollerPageInfo","cvcTableScrollerToIndex","nzScroll","nzVirtualForTrackBy","nzVirtualItemSize","nzSize","nzFrontPagination","nzShowPagination","nzLoading","cvcTableScrollerOnScroll","cvcTableScrollerOnFetch"],["virtualTable",""],[4,"ngrxLet"],["columnFilterInput",""],["cardTitle",""],["extraTemplate",""],[1,"col-header-row"],[4,"ngFor","ngForOf"],[1,"filter-row"],[4,"ngIf"],[3,"nzShowCheckbox","nzWidth","nzAlign","nzLeft","nzRight",4,"ngIf"],[3,"nzColumnKey","nzAlign","nzWidth","nzLeft","nzRight","nzShowSort","nzSortFn","nzSortOrder","nzSortOrderChange",4,"ngIf"],["nz-tooltip","",3,"nzColumnKey","nzAlign","nzWidth","nzLeft","nzRight","nzTooltipTitle",4,"ngIf"],[3,"nzShowCheckbox","nzWidth","nzAlign","nzLeft","nzRight"],[3,"nzColumnKey","nzAlign","nzWidth","nzLeft","nzRight","nzShowSort","nzSortFn","nzSortOrder","nzSortOrderChange"],["nz-tooltip","",1,"col-header-label",3,"nzTooltipTitle"],["nz-tooltip","",3,"nzColumnKey","nzAlign","nzWidth","nzLeft","nzRight","nzTooltipTitle"],[3,"nzColumnKey","nzAlign","nzWidth","nzLeft","nzRight",4,"ngIf"],[3,"nzColumnKey","nzWidth","nzAlign","nzLeft","nzRight",4,"ngIf"],["class","attribute-filter","nzCustomFilter","",3,"nzColumnKey","nzWidth","nzAlign","nzLeft","nzRight","nzShowSort","nzSortFn","nzSortOrder","nzShowFilter","nzFilterFn","nzSortOrderChange",4,"ngIf"],["class","attribute-filter","nzCustomFilter","",3,"nzColumnKey","nzWidth","nzAlign","nzLeft","nzRight","nzFilterFn",4,"ngIf"],[3,"nzColumnKey","nzAlign","nzWidth","nzLeft","nzRight"],[3,"nzColumnKey","nzWidth","nzAlign","nzLeft","nzRight"],[3,"cvcInputType","cvcPlaceholder","cvcModel","cvcModelChange",4,"ngIf"],[3,"cvcInputType","cvcPlaceholder","cvcModel","cvcModelChange"],["nzCustomFilter","",1,"attribute-filter",3,"nzColumnKey","nzWidth","nzAlign","nzLeft","nzRight","nzShowSort","nzSortFn","nzSortOrder","nzShowFilter","nzFilterFn","nzSortOrderChange"],["enumTableFilter",""],[3,"nzDropdownMenu","nzActive"],["enumTagFilterTrigger",""],["nz-icon","","nzType","filter","nzTheme","fill"],["enumFilterMenu","nzDropdownMenu"],[3,"cvcColumnKey","cvcFilterOptions","cvcOption","cvcOptionChange"],["nzCustomFilter","",1,"attribute-filter",3,"nzColumnKey","nzWidth","nzAlign","nzLeft","nzRight","nzFilterFn"],["nz-icon","","nzType","search"],["textTagFilterMenu","nzDropdownMenu"],[1,"ant-table-filter-dropdown"],[1,"custom-input-dropdown"],[3,"cvcPlaceholder","cvcModel","cvcModelChange"],[3,"cvcPlaceholder","cvcModel","cvcModelChange",4,"ngIf"],["nz-virtual-scroll",""],[1,"data-row"],[3,"nzChecked","nzAlign","nzLeft","nzRight","nzCheckedChange",4,"ngIf"],[3,"nzAlign","nzLeft","nzRight",4,"ngIf"],["class","default-col-type",3,"nzAlign","nzLeft","nzRight",4,"ngIf"],[3,"nzChecked","nzAlign","nzLeft","nzRight","nzCheckedChange"],[3,"nzAlign","nzLeft","nzRight"],["entityTagList",""],["entityTag",""],["emptyEntityTagCell",""],[4,"ngIf","ngIfElse"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"cvcTagTemplate","cvcTagListConfig"],[3,"cvcCollectionTagConfig","cvcTagTemplate","cvcShowFullLabels"],[3,"cvcTruncateLabel","cvcLinkableEntity","cvcEmphasize","cvcShowPopover","cvcStatus","cvcFullWidth"],[3,"cvcEmptyCategory"],["cvcContext","compact",3,"cvcFullWidth","cvcAttrValue","cvcTooltip",4,"ngIf","ngIfElse"],["emptyEnumTagCell",""],["cvcContext","compact",3,"cvcFullWidth","cvcAttrValue","cvcTooltip"],["nz-tooltip","","style","width: 100%; cursor: help; color: #595959",3,"nzTooltipTitle",4,"ngIf","ngIfElse"],["emptyTextTagCell",""],["nz-tooltip","",2,"width","100%","cursor","help","color","#595959",3,"nzTooltipTitle"],["nz-icon","","nzType","align-left","nzTheme","outline"],[1,"default-col-type",3,"nzAlign","nzLeft","nzRight"],["staticList",""],["staticValue",""],["emptyDefaultCell",""],[3,"innerHtml"],["numericInput",""],["nzSize","small",3,"nzSuffix"],["nz-input","",3,"placeholder","ngModel","nzFilterChange"],["filterInput",""],["suffixIcon",""],["nz-icon","","nzType","search","style","color: #ddd",4,"ngIf"],["nz-icon","","class","ant-input-clear-icon","nzTheme","fill","nzType","close-circle",3,"click",4,"ngIf"],["nz-icon","","nzType","search",2,"color","#ddd"],["nz-icon","","nzTheme","fill","nzType","close-circle",1,"ant-input-clear-icon",3,"click"],["nzSize","small"],[2,"width","100%",3,"nzPlaceHolder","ngModel","nzMin","nzStep","ngModelChange"],[3,"nzGutter"],["nzFlex","auto"],["nzColor","processing",4,"ngIf"],[3,"cvcShowTag"],[3,"cvcTableCountsConnection"],["nzFlex","35px"],["nz-button","","type","button","nzType","default","nzSize","small",3,"click"],["nz-icon","","nzType","retweet","nzTheme","outline"],["nz-button","","nz-popover","","nzPopoverTitle","Visible Columns","type","button","nzType","default","nzSize","small",3,"nzPopoverContent","nzPopoverTrigger"],["nz-icon","","nzType","setting","nzTheme","outline"],["prefsPopover",""],["nzColor","processing"],["nz-icon","","nzType","sync","nzSpin",""],["nzColor","error","style","margin-left: 12px",4,"ngIf"],["queryError",""],["nzColor","error",2,"margin-left","12px"],["nz-icon","","nzType","question-circle","nzTheme","outline"],["nz-tooltip","",2,"cursor","help",3,"nzTooltipTitle","nzTooltipTitleContext"],["nz-typography",""],[1,"prefs-popover"],[3,"ngModel","ngModelChange"]],template:function(y,c){if(1&y&&(e.TgZ(0,"nz-card",0)(1,"nz-table",1,2),e.NdJ("cvcTableScrollerOnScroll",function(j){return c.onScroll$.next(j)})("cvcTableScrollerOnFetch",function(j){return c.onFetchMore$.next(j)}),e.ALo(3,"ngrxPush"),e.ALo(4,"ngrxPush"),e.ALo(5,"ngrxPush"),e.ALo(6,"ngrxPush"),e.ALo(7,"ngrxPush"),e.YNc(8,Sl,5,2,"thead",3),e.YNc(9,Cs,2,0,"tbody",3),e.qZA()(),e.YNc(10,Ua,3,2,"ng-template",null,4,e.W1O),e.YNc(12,wi,4,2,"ng-template",null,5,e.W1O),e.YNc(14,td,19,13,"ng-template",null,6,e.W1O)),2&y){const m=e.MAs(13),j=e.MAs(15);e.Q6J("nzTitle",m)("nzExtra",j),e.xp6(1),e.Q6J("nzData",e.lcZ(3,15,c.row$)||e.DdM(25,Al))("cvcTableScrollerQueryRef",c.queryRef)("cvcTableScrollerPageInfo",e.lcZ(4,17,c.pageInfo$))("cvcTableScrollerToIndex",e.lcZ(5,19,c.scrollToIndex$))("nzScroll",e.DdM(26,up))("nzVirtualForTrackBy",c.trackByIndex)("nzVirtualItemSize",28)("nzSize","small")("nzFrontPagination",!1)("nzShowPagination",!1)("nzLoading",e.lcZ(6,21,c.loading$)&&!e.lcZ(7,23,c.isFetchMore$)),e.xp6(7),e.Q6J("ngrxLet",c.col$),e.xp6(1),e.Q6J("ngrxLet",c.col$)}},dependencies:[M.sg,M.O5,M.tP,xo.J,he,sn,ye,ns,Le.P,Ee.H,t.Fj,t.JJ,t.On,F.eJ,On.ix,On.fY,To.w,jo.dQ,R.t3,R.SK,Re.Ls,Pe.Zp,Pe.gB,Pe.ke,ge.ZU,Gn.bd,Yt.ub,Fn.RR,Bn._V,Bn.Rb,Wn.lU,Ln.N8,Ln.qD,Ln.Uo,Ln._C,Ln.h7,Ln.Om,Ln.p0,Ln.$Z,Ln.zu,Ln.qn,Ln.Ql,Ln.UX,Ln.g6,Wt.j,Xe.SY,Dc,Qi,Tl,kr,J.Do,I.A,nr,F.fM],styles:["[_nghost-%COMP%]{display:block}nz-card[_ngcontent-%COMP%]:first-of-type     .ant-card-body{padding:0;margin-top:1px}.table-info[_ngcontent-%COMP%]{margin-left:.5rem}tr.col-header-row[_ngcontent-%COMP%]   th.ant-table-cell[_ngcontent-%COMP%]{white-space:nowrap}tr.col-header-row[_ngcontent-%COMP%]   th.ant-table-cell.align-right[_ngcontent-%COMP%]     .ant-table-column-title{text-align:right}tr.filter-row[_ngcontent-%COMP%]   th.ant-table-cell[_ngcontent-%COMP%]{padding:3px 4px}tr.filter-row[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   nz-filter-trigger[_ngcontent-%COMP%]     span.ant-dropdown-trigger{margin-left:0;padding-right:12px}tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell[_ngcontent-%COMP%]{white-space:nowrap}tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell[_ngcontent-%COMP%]   .anticon.attribute-icon[_ngcontent-%COMP%]{color:#595959}tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell.overflow-ellipsis[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis}tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell.button-cell[_ngcontent-%COMP%]{padding:0}tr.data-row[_ngcontent-%COMP%]   td.align-right[_ngcontent-%COMP%], tr.col-header-row[_ngcontent-%COMP%]   th.ant-table-cell[_ngcontent-%COMP%]   .align-right[_ngcontent-%COMP%], tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell[_ngcontent-%COMP%]   .align-right[_ngcontent-%COMP%], tr.filter-row[_ngcontent-%COMP%]   th.ant-table-cell[_ngcontent-%COMP%]   .align-right[_ngcontent-%COMP%]{text-align:right}tr.data-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-of-type{padding-left:6px}tr.data-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-of-type   cvc-entity-tag[_ngcontent-%COMP%]{margin-left:6px}td.default-col-type[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis}.ant-table-filter-dropdown[_ngcontent-%COMP%]{padding:8px}.prefs-popover[_ngcontent-%COMP%]     nz-checkbox-group:first-of-type label{display:block}.prefs-popover[_ngcontent-%COMP%]     nz-checkbox-group:first-of-type label span{display:inline-block}"],changeDetection:0}),da);var Rs;function Qa(u,y){if(1&u&&(e.ynx(0),e.TgZ(1,"span"),e._uU(2),e.qZA(),e.BQk()),2&u){const c=y.ngrxLet;e.xp6(2),e.Oqu(c.message)}}function Fl(u,y){if(1&u&&e._uU(0),2&u){const c=e.oxw();e.Oqu(c.successMessage)}}Fc=(0,ne.gn)([(0,ce.c)()],Fc);const ja=function(){return[0,0]};let Nl=((Rs=class{set cvcGeneId(y){y&&this.geneId$.next(y)}set cvcGeneName(y){y&&this.geneName$.next(y)}set cvcSearchString(y){y&&this.searchString$.next(y)}constructor(y,c){this.query=y,this.errors=c,this.cvcOnCreate=new e.vpe,this.form=new t.nJ({}),this.model={name:""},this.formLayout="horizontal",this.options={formState:{formLayout:this.formLayout}},this.onSubmit$=new st.x,this.searchString$=new Ge.X(void 0),this.geneName$=new Ge.X(void 0),this.geneId$=new Ge.X(void 0),this.formMessageDisplay$=new Ge.X({message:"Variant does not exist, create it?"}),this.queryMutator=new Ho.U(this.errors),this.addVariantMutator=new Ho.U(this.errors),this.minNameLength=3,this.fields=[{key:"geneId",hide:!0,props:{required:!0}},{key:"name",hide:!0,props:{minLength:this.minNameLength,required:!0}}],this.geneId$.pipe((0,ce.t)(this)).subscribe(m=>{this.model.geneId=m}),this.searchString$.pipe((0,ce.t)(this)).subscribe(m=>{this.model.name=m,this.formMessageDisplay$.next(void 0!==m&&m.length<this.minNameLength?{message:`New Variant name must be at least ${this.minNameLength} characters.`}:{message:"Variant does not exist, create it?"})}),this.onSubmit$.pipe((0,ce.t)(this)).subscribe(m=>{console.log("variant-quick-add form model submitted.",m),this.submitVariant(m)})}submitVariant(y){y.name&&y.geneId?this.mutationState=this.addVariantMutator.mutate(this.query,{name:y.name,geneId:y.geneId},{},c=>{console.log("variant-quick-add submit data callback",c),c.addVariant&&(this.formMessageDisplay$.next({message:void 0}),setTimeout(()=>{c&&c.addVariant&&this.cvcOnCreate.next(c.addVariant.variant.id)},1e3))}):console.error("variant-quick-add form submitVariant requires model with valid name and geneId.")}ngOnChanges(y){if(y.cvcGeneId){const c=y.cvcGeneId.currentValue;this.geneId$.next(c),this.model={...this.model,geneId:c}}y.cvcGeneName&&this.geneName$.next(y.cvcGeneName.currentValue),y.cvcSearchString&&(this.model={...this.model,name:y.cvcSearchString.currentValue})}}).\u0275fac=function(y){return new(y||Rs)(e.Y36(Nn.MCG),e.Y36(Xo.Y))},Rs.\u0275cmp=e.Xpm({type:Rs,selectors:[["cvc-variant-quick-add-form"]],inputs:{cvcGeneId:"cvcGeneId",cvcGeneName:"cvcGeneName",cvcSearchString:"cvcSearchString"},outputs:{cvcOnCreate:"cvcOnCreate"},features:[e.TTD],decls:18,vars:17,consts:[[4,"ngrxLet"],["entityType","Variant",3,"mutationState","successMessage"],["success",""],[3,"formGroup","ngSubmit"],[3,"nzGutter"],["nzSpan","24"],[3,"form","fields","model","options","modelChange"],["nz-button","","nzType","primary","nzBlock","",3,"disabled"]],template:function(y,c){if(1&y&&(e.YNc(0,Qa,3,1,"ng-container",0),e.TgZ(1,"cvc-form-submission-status-display",1),e.YNc(2,Fl,1,1,"ng-template",null,2,e.W1O),e.TgZ(4,"form",3),e.NdJ("ngSubmit",function(){return c.onSubmit$.next(c.model)}),e.TgZ(5,"nz-row",4)(6,"nz-col",5)(7,"formly-form",6),e.NdJ("modelChange",function(j){return c.model=j}),e.qZA()(),e.TgZ(8,"nz-col",5)(9,"button",7),e._uU(10," Add\xa0 "),e.TgZ(11,"strong"),e._uU(12),e.ALo(13,"ngrxPush"),e.qZA(),e._uU(14," \xa0Variant\xa0"),e.TgZ(15,"i"),e._uU(16),e.ALo(17,"ngrxPush"),e.qZA()()()()()()),2&y){const m=e.MAs(3);e.Q6J("ngrxLet",c.formMessageDisplay$),e.xp6(1),e.Q6J("mutationState",c.mutationState)("successMessage",m),e.xp6(3),e.Q6J("formGroup",c.form),e.xp6(1),e.Q6J("nzGutter",e.DdM(16,ja)),e.xp6(2),e.Q6J("form",c.form)("fields",c.fields)("model",c.model)("options",c.options),e.xp6(2),e.Q6J("disabled",!c.form.valid),e.xp6(3),e.Oqu(e.lcZ(13,12,c.geneName$)),e.xp6(4),e.Oqu(e.lcZ(17,14,c.searchString$))}},dependencies:[Oi.F,v.T7,t._Y,t.JL,F.eJ,On.ix,To.w,jo.dQ,R.t3,R.SK,t.sg,F.fM],encapsulation:2,changeDetection:0}),Rs);Nl=(0,ne.gn)([(0,ce.c)()],Nl);const Bu=["optionTemplates"],nd=function(u,y){return{show:u,hide:y}};function Ir(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"nz-col",9)(1,"button",10),e.NdJ("click",function(){e.CHM(c);const j=e.oxw();return e.KtG(j.onShowMgrClick$.next())}),e._UZ(2,"span",11),e.ALo(3,"ngrxPush"),e.ALo(4,"ngrxPush"),e._uU(5," Manager "),e.qZA()()}if(2&u){const c=e.oxw();e.xp6(2),e.Q6J("ngClass",e.WLB(6,nd,e.lcZ(3,2,c.showMgr$),!e.lcZ(4,4,c.showMgr$)))("nzType","caret-right")}}function dp(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"nz-col",12)(1,"cvc-variant-manager",13),e.NdJ("cvcSelectedIdsChange",function(j){e.CHM(c);const Be=e.oxw();return e.KtG(Be.onPopulate$.next(j))}),e.ALo(2,"ngrxPush"),e.qZA()()}if(2&u){const c=e.oxw();e.xp6(1),e.Q6J("cvcSelectedIds",e.lcZ(2,1,c.onVid$))}}function pp(u,y){if(1&u&&(e.ynx(0),e.TgZ(1,"em"),e._UZ(2,"span",20),e.ALo(3,"highlightTypeahead"),e.qZA(),e.BQk()),2&u){const c=e.oxw(2).$implicit,m=e.oxw().ngrxLet;e.xp6(2),e.Q6J("nzTooltipTitle",c.variantAliases.join(", "))("innerHtml",e.xi3(3,2,c.variantAliases.join(", "),m),e.oJD)}}function Ll(u,y){1&u&&e._uU(0,"--")}function fa(u,y){if(1&u&&(e._UZ(0,"cvc-entity-tag",16),e.TgZ(1,"span",17)(2,"strong"),e._uU(3,"Aliases:"),e.qZA(),e.YNc(4,pp,4,5,"ng-container",18),e.YNc(5,Ll,1,0,"ng-template",null,19,e.W1O),e.qZA()),2&u){const c=e.MAs(6),m=e.oxw().$implicit,j=e.oxw().ngrxLet;e.Q6J("cvcDisableLink",!0)("cvcCacheId",m.__typename+":"+m.id)("cvcEmphasize",j),e.xp6(4),e.Q6J("ngIf",m.variantAliases.length>0)("ngIfElse",c)}}function Ld(u,y){1&u&&(e.ynx(0),e.YNc(1,fa,7,5,"ng-template",null,15,e.W1O),e.BQk())}function Vs(u,y){if(1&u&&(e.ynx(0),e.YNc(1,Ld,3,0,"ng-container",14),e.ALo(2,"ngrxPush"),e.BQk()),2&u){const c=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,c.result$))}}function Nc(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"div",21)(1,"cvc-entity-tag",22),e.NdJ("cvcOnClose",function(){const Be=e.CHM(c).$implicit,Mt=e.oxw();return e.KtG(Mt.onTagClose$.next(Be.nzValue))}),e.qZA()()}if(2&u){const c=y.$implicit,m=e.oxw();e.xp6(1),e.Q6J("cvcCacheId","Variant:"+c.nzValue)("cvcContext",m.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",m.props.isMultiSelect?"default":"closeable")}}function hp(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"cvc-variant-quick-add-form",23),e.NdJ("cvcOnCreate",function(j){e.CHM(c);const Be=e.oxw();return e.KtG(Be.onPopulate$.next(j))}),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.qZA()}if(2&u){const c=y.$implicit,m=e.oxw();e.Q6J("cvcSearchString",c)("cvcGeneId",e.lcZ(1,3,m.onGeneId$))("cvcGeneName",e.lcZ(2,5,m.onGeneName$))}}const fp=function(){return[6,6]},mp=Lt(_n(),ni());let kd=(()=>{class u extends mp{constructor(c,m,j,Be){super(),this.taq=c,this.tq=m,this.geneQuery=j,this.changeDetectorRef=Be,this.onModel$=new Co.y,this.defaultOptions={props:{label:"Variant",placeholder:"Search Variants",requireGene:!0,requireGenePlaceholderFn:Mt=>`Search ${Mt} Variants`,requireGenePrompt:"Select a Gene to search its Variants",isMultiSelect:!1,entityName:{singular:"Variant",plural:"Variants"},showManagerBtn:!1}},this.onGeneName$=new Ge.X(void 0),this.onVid$=new Mo.t,this.onShowMgrClick$=new st.x,this.showMgr$=this.onShowMgrClick$.pipe((0,go.R)((Mt,bn)=>!Mt,!1))}ngAfterViewInit(){this.configureBaseField(),this.configureEntitySelectField({typeaheadQuery:this.taq,tagQuery:this.tq,getTypeaheadVarsFn:this.getTypeaheadVarsFn,getTypeaheadResultsFn:this.getTypeaheadResultsFn,getTagQueryVarsFn:this.getTagQueryVarsFn,getTagQueryResultsFn:this.getTagQueryResultsFn,getSelectedItemOptionFn:this.getSelectedItemOptionFn,getSelectOptionsFn:this.getSelectOptionsFn,changeDetectorRef:this.changeDetectorRef,selectOpen$:this.selectOpen$,selectComponent:this.selectComponent}),this.state&&this.state.formReady$?this.state.formReady$.pipe((0,De.h)(c=>c),(0,Ei.q)(1),(0,ce.t)(this)).subscribe(c=>{this.configureField()}):this.configureField()}configureField(){this.configureStateConnections(),this.onVid$.pipe((0,ce.t)(this)).subscribe(),this.onVid$.next(this.formControl.value),this.onModel$=(0,vo.a)([this.onGeneId$,this.onSearch$]).pipe((0,vt.U)(([c,m])=>({geneId:c,name:m}))),this.onValueChange$.pipe((0,it.M)(this.onVid$),(0,ce.t)(this)).subscribe(([c,m])=>{Array.isArray(c)&&this.onVid$.next(c)})}configureStateConnections(){if(this.state&&this.props.requireGene){if(!this.state?.fields.geneId$)return void console.error(`${this.field.id} requireGene is set, but no geneId$ subject found on state.`);this.onGeneId$=this.state.fields.geneId$,this.onGeneId$.pipe((0,ce.t)(this)).subscribe(c=>{this.onGeneId(c)})}}getTypeaheadVarsFn(c){return{name:c,geneId:this.selectedGeneId}}getTypeaheadResultsFn(c){return c.data.variants.nodes}getTagQueryVarsFn(c){return{variantId:c}}getTagQueryResultsFn(c){return c.data.variant}getSelectedItemOptionFn(c){return{value:c.id,label:c.name}}getSelectOptionsFn(c,m){return c.map((j,Be)=>({label:m.get(Be)||j.name,value:j.id}))}onGeneId(c){this.selectedGeneId=c,!c&&this.props.requireGene?(this.resetField(),this.props.description=this.props.requireGenePrompt,this.props.placeholder="Select a Variant",this.props.extraType="prompt",this.onGeneName$.next(void 0)):c&&(this.props.description=void 0,this.props.extraType=void 0,bc(this.geneQuery.fetch({geneId:c},{fetchPolicy:"cache-first"})).then(({data:m})=>{m?.gene?.name?(this.props.placeholder=this.props.requireGene?this.props.requireGenePlaceholderFn(m.gene.name):this.props.placeholder,this.onGeneName$.next(m.gene.name)):console.error(`${this.field.id} could not fetch gene name for Gene:${c}.`)}))}}return u.\u0275fac=function(c){return new(c||u)(e.Y36(Nn.nSb),e.Y36(Nn.dDn),e.Y36(Nn.DzV),e.Y36(e.sBO))},u.\u0275cmp=e.Xpm({type:u,selectors:[["ng-component"]],viewQuery:function(c,m){if(1&c&&e.Gf(Bu,5,e.Rgc),2&c){let j;e.iGM(j=e.CRH())&&(m.optionTemplates=j)}},features:[e.qOj],decls:20,vars:39,consts:[[3,"nzGutter"],["nzFlex","auto"],["nz-tooltip","","nzTooltipTitle","Select a Gene to enable field.",3,"nzTooltipTrigger"],[3,"cvcAddEntity","cvcAddEntityModel","cvcSelectMode","cvcCustomTemplate","cvcFormControl","cvcFormlyAttributes","cvcEntityName","cvcPlaceholder","cvcResults","cvcDisabled","cvcOptions","cvcSelectOpen","cvcShowError","cvcLoading","cvcParamName","cvcOnSearch","cvcOnOpenChange","cvcOnModelChange"],["nzFlex","50px",4,"ngIf"],["nzSpan","24","class","manager-drawer",4,"ngIf"],[4,"ngrxLet"],["selectedTemplate",""],["addVariant",""],["nzFlex","50px"],["type","button","nz-button","","nzBlock","",1,"manager-button",3,"click"],["nz-icon","",3,"ngClass","nzType"],["nzSpan","24",1,"manager-drawer"],[3,"cvcSelectedIds","cvcSelectedIdsChange"],[4,"ngFor","ngForOf"],["optionTemplates",""],[3,"cvcDisableLink","cvcCacheId","cvcEmphasize"],["nz-typography","","nzType","secondary"],[4,"ngIf","ngIfElse"],["noAliases",""],["nz-typography","","nzType","secondary","nz-tooltip","",3,"nzTooltipTitle","innerHtml"],[1,"ant-select-selection-item-content"],[3,"cvcCacheId","cvcContext","cvcMode","cvcOnClose"],[3,"cvcSearchString","cvcGeneId","cvcGeneName","cvcOnCreate"]],template:function(c,m){if(1&c&&(e.TgZ(0,"nz-row",0)(1,"nz-col",1)(2,"span",2),e.ALo(3,"ngrxPush"),e.TgZ(4,"cvc-entity-select",3),e.NdJ("cvcOnSearch",function(Be){return m.onSearch$.next(Be)})("cvcOnOpenChange",function(Be){return m.onOpenChange$.next(Be)})("cvcOnModelChange",function(Be){return m.props.change&&m.props.change(m.field,Be)}),e.ALo(5,"ngrxPush"),e.ALo(6,"ngrxPush"),e.ALo(7,"ngrxPush"),e.ALo(8,"ngrxPush"),e.ALo(9,"ngrxPush"),e.ALo(10,"ngrxPush"),e.ALo(11,"ngrxPush"),e.qZA()()(),e.YNc(12,Ir,6,9,"nz-col",4),e.YNc(13,dp,3,3,"nz-col",5),e.ALo(14,"ngrxPush"),e.qZA(),e.YNc(15,Vs,3,3,"ng-container",6),e.YNc(16,Nc,2,3,"ng-template",null,7,e.W1O),e.YNc(18,hp,3,7,"ng-template",null,8,e.W1O)),2&c){const j=e.MAs(17),Be=e.MAs(19);e.Q6J("nzGutter",e.DdM(38,fp)),e.xp6(2),e.Q6J("nzTooltipTrigger",m.props.requireGene&&!e.lcZ(3,20,m.onGeneId$)?"hover":null),e.xp6(2),e.Q6J("cvcAddEntity",Be)("cvcAddEntityModel",e.lcZ(5,22,m.onModel$))("cvcSelectMode",m.props.isMultiSelect?"multiple":"default")("cvcCustomTemplate",j)("cvcFormControl",m.formControl)("cvcFormlyAttributes",m.field)("cvcEntityName",m.props.entityName)("cvcPlaceholder",m.props.placeholder)("cvcResults",e.lcZ(6,24,m.result$))("cvcDisabled",m.props.requireGene&&!e.lcZ(7,26,m.onGeneId$))("cvcOptions",e.lcZ(8,28,m.selectOption$))("cvcSelectOpen",e.lcZ(9,30,m.selectOpen$))("cvcShowError",m.showError)("cvcLoading",e.lcZ(10,32,m.isLoading$))("cvcParamName",e.lcZ(11,34,m.onGeneName$)),e.xp6(8),e.Q6J("ngIf",m.props.showManagerBtn),e.xp6(1),e.Q6J("ngIf",e.lcZ(14,36,m.showMgr$)),e.xp6(2),e.Q6J("ngrxLet",m.onSearch$)}},dependencies:[M.mk,M.sg,M.O5,Kn,xo.J,F.eJ,On.ix,To.w,jo.dQ,R.t3,R.SK,Re.Ls,ge.ZU,Xe.SY,Fc,Nl,I.A,F.fM],styles:[".typeahead-match[_ngcontent-%COMP%]{font-weight:700}  nz-input-group{border-color:#d9d9d9!important}"],changeDetection:0}),u})();const kl={types:[{name:"variant-select",wrappers:["form-field"],component:kd},{name:"variant-multi-select",wrappers:["form-field"],component:kd,defaultOptions:{props:{label:"Variants",isMultiSelect:!0}}}]};let Rd=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,Kt,Te.x,je,Zt.g,It.s,En,wr,$e,fr,is.M,dn.y,v.X0.forChild(kl),t.u5,yt.L,B.ic,On.sL,s.U5,R.Jb,Re.PV,Pe.o7,zn.Qp,We.LV,ge.ZJ,On.sL,Gn.vh,Yt.Wr,Fn.b1,s.U5,R.Jb,Re.PV,Pe.o7,Bn.Zf,Wn.$6,Ln.HQ,Wt.X,Xe.cg,ge.ZJ,t.UX]}),u})();var Hu=a(9858),ar=a(6976),od=a(4194);const id=/\(/g,Vd=/\)/g,Lc=/AND|OR/i,Ar=/^(?<not>NOT\s)?\s*#VID(?<variantId>\d+)$/i,kc=/\s+/,Rl="EXPR";function rd(u){return Yu(u.replace(id," ( ").replace(Vd," ) "))}function Yu(u){let c,y=u.split(kc),m=0,j=[],Be=[],Mt=[];for(let Tr of y)if("("==Tr)0!=m&&j.push(Tr),m+=1;else if(")"==Tr)if(m-=1,0==m){let Mr=Yu(j.join(" "));if("errorMessage"in Mr)return Mr;Mt.push(Mr),Be.push(Rl),j=[]}else j.push(Tr);else m>0?j.push(Tr):Be.push(Tr);const bn={errorType:"trailingBoolean",errorMessage:"Expressions may not end with AND / OR boolean operators."},Hn={errorType:"initialBoolean",errorMessage:"Expressions may not start with AND / OR boolean operators."},Bo={errorType:"multipleBoolean",errorMessage:"Multiple boolean operators found."},Wi={errorType:"incompleteExpression",errorMessage:"Ensure that parenthetical clauses are closed."};let er=0;for(let Tr of Be){let Mr=Lc.test(Tr);if(Mr&&0==er)return Hn;if(Mr&&er===y.length-1)return bn;if(Mr&&!c)c=sd(Tr);else if(Mr&&c&&sd(Tr)!==c)return Bo;er++}let Bl=[],ec=Be.join(" ").split(Lc);for(let Tr of ec.map(Mr=>Mr.trim())){let Mr=Ar.exec(Tr);if(null===Mr){if(0===Tr.length)return Wi;if("NOT"===Tr||"NOT"===Tr.split(" ").pop())return{errorType:"incompleteNOT",errorMessage:"NOT operator must be followed by a valid #VID."};if(Tr!==Rl)return{errorType:"invalidToken",errorMessage:`Token '${Tr}' does not match the expected format.`}}else Bl.push({not:!!Mr[1],variantId:parseInt(Mr[2])})}return{booleanOperator:c,variantComponents:Bl,complexComponents:Mt}}function sd(u){return"AND"==u.toUpperCase()?Nn._Wm.And:Nn._Wm.Or}var gp=a(5095);let vp=(()=>{class u{constructor(c){this.apollo=c,this.cvcOnSelect=new e.vpe,this.cvcOnVariantSelect=new e.vpe,this.modelChange$=new Ge.X(void 0),this.layout="horizontal",this.finderState={formLayout:this.layout,fields:{geneId$:new Ge.X(void 0),variantId$:new Ge.X(void 0),variantMolecularProfile$:new Ge.X(void 0)}},this.form=new t.nJ({}),this.model={geneId:void 0,variantId:void 0},this.options={formState:this.finderState},this.config=[{wrappers:["field-grid"],props:{grid:{cols:2}},fieldGroup:[{key:"geneId",type:"gene-select",props:{placeholder:"Select MP Gene",hideLabel:!0,layout:{showExtra:!1}}},{key:"variantId",type:"variant-select",props:{placeholder:"Select MP Variant",requireGene:!0,layout:{showExtra:!1},hideLabel:!0}}]}]}modelChange(c){if(!c?.variantId)return;const m=this.getSelectedVariant(c.variantId);m&&(this.model={geneId:void 0,variantId:void 0},this.cvcOnSelect.next(m.singleVariantMolecularProfile),this.cvcOnVariantSelect.next(m))}getSelectedVariant(c){if(!c)return;const m={id:`Variant:${c}`,fragment:co.Ps`
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
      `};let j;try{j=this.apollo.client.readFragment(m)}catch(Be){console.error(Be)}if(j)return j;console.error("MpFinderForm could not resolve its Variant from the cache")}}return u.\u0275fac=function(c){return new(c||u)(e.Y36(co._M))},u.\u0275cmp=e.Xpm({type:u,selectors:[["cvc-mp-finder"]],outputs:{cvcOnSelect:"cvcOnSelect",cvcOnVariantSelect:"cvcOnVariantSelect"},decls:2,vars:6,consts:[["nz-form","",3,"nzLayout","formGroup"],[3,"form","fields","model","options","modelChange"]],template:function(c,m){1&c&&(e.TgZ(0,"form",0)(1,"formly-form",1),e.NdJ("modelChange",function(Be){return m.modelChange(Be)}),e.qZA()()),2&c&&(e.Q6J("nzLayout",m.layout)("formGroup",m.form),e.xp6(1),e.Q6J("form",m.form)("fields",m.config)("model",m.model)("options",m.options))},dependencies:[t._Y,t.JL,t.sg,v.T7,s.Lr],styles:["[_nghost-%COMP%]{display:block;width:100%}"],changeDetection:0}),u})();function $u(u,y){1&u&&(e.ynx(0),e.TgZ(1,"p"),e._uU(2," The expression contains open parentheses. Please ensure that all parenthetical expressions are closed. "),e.qZA(),e.BQk())}function Vl(u,y){1&u&&(e.ynx(0),e.TgZ(1,"p"),e._uU(2," Complete the expression by appending a "),e.TgZ(3,"strong"),e._uU(4,"#VID"),e.qZA(),e._uU(5," token to the incomplete boolean expression. "),e.qZA(),e.BQk())}function Bd(u,y){1&u&&(e.ynx(0),e.TgZ(1,"p"),e._uU(2," MP Expressions may not begin with an "),e.TgZ(3,"strong"),e._uU(4,"AND"),e.qZA(),e._uU(5," or "),e.TgZ(6,"strong"),e._uU(7,"OR"),e.qZA(),e._uU(8," boolean. Ensure the expression begins with a "),e.TgZ(9,"strong"),e._uU(10,"#VID"),e.qZA(),e._uU(11," or "),e.TgZ(12,"strong"),e._uU(13,"NOT #VID"),e.qZA(),e._uU(14," token. "),e.qZA(),e.BQk())}function Hd(u,y){1&u&&(e.ynx(0),e.TgZ(1,"p"),e._uU(2," Molecular Profile expressions use a simple domain-specific language to specify complex MPs using boolean expressions to combine variants. These expressions may contain: "),e.qZA(),e.TgZ(3,"ul")(4,"li"),e._uU(5," Variant Tokens - "),e.TgZ(6,"strong"),e._uU(7,"#VID"),e.qZA(),e._uU(8," or "),e.TgZ(9,"strong"),e._uU(10,"NOT #VID"),e.qZA(),e._uU(11,'followed by a valid Variant ID, e.g. "#VID123" '),e.qZA(),e.TgZ(12,"li"),e._uU(13,"Boolean Tokens - "),e.TgZ(14,"strong"),e._uU(15,"AND"),e.qZA(),e._uU(16,", "),e.TgZ(17,"strong"),e._uU(18,"OR"),e.qZA()(),e.TgZ(19,"li"),e._uU(20," Parentheses - "),e.TgZ(21,"strong"),e._uU(22,"("),e.qZA(),e._uU(23," or "),e.TgZ(24,"strong"),e._uU(25,")"),e.qZA(),e._uU(26,", for grouping tokens into nested expressions "),e.qZA()(),e.TgZ(27,"p")(28,"strong"),e._uU(29,"Invalid Token"),e.qZA(),e._uU(30," errors occur if the parser encounters any text or token that does not match those listed above. "),e.qZA(),e.BQk())}function Yd(u,y){1&u&&(e.ynx(0),e.TgZ(1,"p"),e._uU(2," A single expression may not include more than one "),e.TgZ(3,"strong"),e._uU(4,"AND"),e.qZA(),e._uU(5," or "),e.TgZ(6,"strong"),e._uU(7,"OR"),e.qZA(),e._uU(8," boolean operator. To construct complex expressions, use parentheses. "),e.qZA(),e.TgZ(9,"p"),e._uU(10," For example, the expression "),e.TgZ(11,"strong"),e._uU(12,"#VID12 AND #VID2220 OR #VID456"),e.qZA(),e._uU(13," is invalid, but the expression "),e.TgZ(14,"strong"),e._uU(15,"#VID12 AND (#VID2220 OR #VID456)"),e.qZA(),e._uU(16," is valid. The parentheses create a nested expression independent of the outer expression. "),e.qZA(),e.BQk())}function $d(u,y){1&u&&(e.ynx(0),e.TgZ(1,"p"),e._uU(2," Complete the expression by appending a "),e.TgZ(3,"strong"),e._uU(4,"#VID"),e.qZA(),e._uU(5," token to the incomplete boolean expression. "),e.qZA(),e.BQk())}function Ud(u,y){1&u&&(e.ynx(0),e.TgZ(1,"p"),e._uU(2," The expression contains a Variant ID that cannot be matched to any Variant in the CIViC database. Please re-check the Variant ID, or create a new one by following these steps: "),e.qZA(),e.TgZ(3,"ol")(4,"li"),e._uU(5,"click the 'Variant' button,"),e.qZA(),e.TgZ(6,"li"),e._uU(7,"enter a Gene name, then select a Gene"),e.qZA(),e.TgZ(8,"li"),e._uU(9,"enter the Variant name"),e.qZA(),e.TgZ(10,"li"),e._uU(11," click the 'Create Variant' button that will appear if name does not match any CIViC Variants "),e.qZA()(),e.BQk())}function ad(u,y){1&u&&(e.ynx(0),e.TgZ(1,"p"),e._uU(2," An expression may not contain multiple instances of the same Variant. Either remove the variant or change the expression. For example, "),e.TgZ(3,"strong"),e._uU(4,"(#VID123 AND #VID456) OR (#VID123 AND #VID789)"),e.qZA(),e._uU(5,", which is invalid, is logically identical to the valid MP expression "),e.TgZ(6,"strong"),e._uU(7,"#VID123 AND (#VID456 OR #VID789)"),e.qZA(),e._uU(8,". "),e.qZA(),e.BQk())}function Uu(u,y){1&u&&(e.ynx(0),e.TgZ(1,"p"),e._uU(2," The Molecular Profile editor allows the selection or creation of complex Molecular Profiles by writing Molecular Profile Expressions. These expressions are composed with a simple language consisting of Variant tokens, boolean operators, and parentheses. For example: "),e.qZA(),e.TgZ(3,"blockquote")(4,"strong"),e._uU(5,"#VID12 AND #VID2220"),e.qZA(),e._UZ(6,"br"),e.TgZ(7,"strong"),e._uU(8,"#VID12 OR #VID2220"),e.qZA(),e._UZ(9,"br"),e.TgZ(10,"strong"),e._uU(11,"#VID12 AND NOT #VID2220"),e.qZA(),e._UZ(12,"br"),e.TgZ(13,"strong"),e._uU(14,"#VID12 AND #VID2220 AND (#VID456 OR #VID123)"),e.qZA(),e._UZ(15,"br"),e.TgZ(16,"strong"),e._uU(17,"#VID12 OR #VID2220 OR (NOT #VID456 AND #VID123)"),e.qZA(),e._UZ(18,"br"),e.qZA(),e.TgZ(19,"p")(20,"strong"),e._uU(21,"Variant Tokens"),e.qZA(),e._UZ(22,"br"),e._uU(23," Variant tokens are composed of a CIViC Variant ID prepended with "),e.TgZ(24,"strong"),e._uU(25,"#VID"),e.qZA(),e._uU(26,", and refer to specific CIViC Variants. For example, "),e.TgZ(27,"strong"),e._uU(28,"#VID12"),e.qZA(),e._uU(29," refers to "),e.TgZ(30,"strong"),e._uU(31,"BRAF V600E"),e.qZA(),e._uU(32,"; "),e.TgZ(33,"strong"),e._uU(34,"#VID2220"),e.qZA(),e._uU(35," refers to "),e.TgZ(36,"strong"),e._uU(37,"ALK FUSION"),e.qZA(),e._uU(38,". If you don\u2019t know the CIViC ID of a Variant, you can search for Variants by name using the \u2018Variant\u2019 or \u2018NOT Variant\u2019 buttons below. These interfaces can also be used to add a Variant that\u2019s not yet in CIViC. "),e.qZA(),e.TgZ(39,"p")(40,"strong"),e._uU(41,"Boolean Operators"),e.qZA(),e._UZ(42,"br"),e._uU(43," MP Expressions with more than a single variant must include boolean operators - "),e.TgZ(44,"strong"),e._uU(45,"AND"),e.qZA(),e._uU(46,", "),e.TgZ(47,"strong"),e._uU(48,"OR"),e.qZA(),e._uU(49,", and "),e.TgZ(50,"strong"),e._uU(51,"NOT"),e.qZA(),e._uU(52," - indicating their relationship. For example, the expression "),e.TgZ(53,"strong"),e._uU(54,"#VID12 AND #VID2220"),e.qZA(),e._uU(55," describes a MP that includes both "),e.TgZ(56,"strong"),e._uU(57,"BRAF V600E"),e.qZA(),e._uU(58," and "),e.TgZ(59,"strong"),e._uU(60,"ALK FUSION"),e.qZA(),e._uU(61,". "),e.qZA(),e.TgZ(62,"p")(63,"strong"),e._uU(64,"Parentheses"),e.qZA(),e._UZ(65,"br"),e._uU(66," Expressions cannot have both "),e.TgZ(67,"strong"),e._uU(68,"AND"),e.qZA(),e._uU(69," and "),e.TgZ(70,"strong"),e._uU(71,"OR"),e.qZA(),e._uU(72," operators within the same expression. To construct complex MPs that require multiple operators, one must use parentheses to create embedded expressions. "),e.qZA(),e.TgZ(73,"p")(74,"strong"),e._uU(75,"NOTE:"),e.qZA(),e._uU(76," Be sure to read the help text provided along with every alert message by hovering over 'Syntax Assistance'. "),e.qZA(),e.BQk())}let cd=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275cmp=e.Xpm({type:u,selectors:[["cvc-mp-editor-popover-help"]],inputs:{cvcErrorType:"cvcErrorType"},decls:11,vars:9,consts:[[1,"help-content"],[3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"]],template:function(c,m){1&c&&(e.TgZ(0,"div",0),e.ynx(1,1),e.YNc(2,$u,3,0,"ng-container",2),e.YNc(3,Vl,6,0,"ng-container",2),e.YNc(4,Bd,15,0,"ng-container",2),e.YNc(5,Hd,31,0,"ng-container",2),e.YNc(6,Yd,17,0,"ng-container",2),e.YNc(7,$d,6,0,"ng-container",2),e.YNc(8,Ud,12,0,"ng-container",2),e.YNc(9,ad,9,0,"ng-container",2),e.YNc(10,Uu,77,0,"ng-container",3),e.BQk(),e.qZA()),2&c&&(e.xp6(1),e.Q6J("ngSwitch",m.cvcErrorType),e.xp6(1),e.Q6J("ngSwitchCase","incompleteExpression"),e.xp6(1),e.Q6J("ngSwitchCase","incompleteNOT"),e.xp6(1),e.Q6J("ngSwitchCase","initialBoolean"),e.xp6(1),e.Q6J("ngSwitchCase","invalidToken"),e.xp6(1),e.Q6J("ngSwitchCase","multipleBoolean"),e.xp6(1),e.Q6J("ngSwitchCase","trailingBoolean"),e.xp6(1),e.Q6J("ngSwitchCase","unknownVariant"),e.xp6(1),e.Q6J("ngSwitchCase","identicalVariants"))},dependencies:[M.RF,M.n9,M.ED],styles:[".help-content[_ngcontent-%COMP%]{max-width:500px}blockquote[_ngcontent-%COMP%]{margin-left:1em}"]}),u})();var zs;const Gd=["expressionEditor"];function ld(u,y){1&u&&e._uU(0,"Added new Molecular Profile")}function Kp(u,y){if(1&u&&e._UZ(0,"cvc-mp-tag-name",24),2&u){const c=e.oxw().ngrxLet;e.Q6J("nameSegments",c)}}function Bi(u,y){1&u&&(e.TgZ(0,"span",25),e._uU(1," Valid Molecular Profile expressions will be previewed here. "),e.qZA())}function Gu(u,y){if(1&u&&(e.ynx(0),e.YNc(1,Kp,1,1,"cvc-mp-tag-name",22),e.YNc(2,Bi,2,0,"span",23),e.BQk()),2&u){const c=y.ngrxLet;e.xp6(1),e.Q6J("ngIf",c),e.xp6(1),e.Q6J("ngIf",!c)}}function ma(u,y){1&u&&e._UZ(0,"cvc-mp-editor-popover-help")}function ud(u,y){if(1&u&&(e.TgZ(0,"button",28),e._UZ(1,"span",29),e._uU(2," GETTING STARTED "),e.qZA(),e.YNc(3,ma,1,0,"ng-template",null,30,e.W1O)),2&u){const c=e.MAs(4);e.Q6J("nzPopoverContent",c)}}function dd(u,y){if(1&u&&(e.ynx(0),e._UZ(1,"nz-alert",26),e.YNc(2,ud,5,1,"ng-template",null,27,e.W1O),e.BQk()),2&u){const c=y.ngIf,m=e.MAs(3);e.xp6(1),e.Q6J("nzMessage",c)("nzAction",m)}}function Qd(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"button",34),e.NdJ("click",function(){e.CHM(c);const j=e.oxw(3).ngrxLet,Be=e.oxw();return e.KtG(Be.cvcOnSelect.next(j))}),e._uU(1," Select this MP "),e.qZA()}}function jd(u,y){if(1&u&&(e._uU(0," Molecular Profile "),e.TgZ(1,"strong"),e._uU(2),e.qZA(),e._uU(3," found. ")),2&u){const c=e.oxw(3).ngrxLet;e.xp6(2),e.Oqu(c.name)}}function Wa(u,y){if(1&u&&(e.ynx(0),e._UZ(1,"nz-alert",31),e.YNc(2,Qd,2,0,"ng-template",null,32,e.W1O),e.YNc(4,jd,4,1,"ng-template",null,33,e.W1O),e.BQk()),2&u){const c=e.MAs(3),m=e.MAs(5);e.xp6(1),e.Q6J("nzMessage",m)("nzAction",c)}}function pd(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"button",37),e.NdJ("click",function(){e.CHM(c);const j=e.oxw(4);return e.KtG(j.onCreateNewMp$.next())}),e._uU(1," Create New MP "),e.qZA()}}function Wd(u,y){1&u&&e._uU(0," Molecular Profile not found, create it? ")}function Jp(u,y){if(1&u&&(e.ynx(0),e._UZ(1,"nz-alert",31),e.YNc(2,pd,2,0,"ng-template",null,35,e.W1O),e.YNc(4,Wd,1,0,"ng-template",null,36,e.W1O),e.BQk()),2&u){const c=e.MAs(3),m=e.MAs(5);e.xp6(1),e.Q6J("nzMessage",m)("nzAction",c)}}function hd(u,y){if(1&u&&(e.ynx(0),e.YNc(1,Wa,6,2,"ng-container",6),e.YNc(2,Jp,6,2,"ng-container",6),e.BQk()),2&u){const c=e.oxw().ngrxLet;e.xp6(1),e.Q6J("ngIf",void 0!==c),e.xp6(1),e.Q6J("ngIf",void 0===c)}}function Qu(u,y){if(1&u&&(e.ynx(0),e.YNc(1,hd,3,2,"ng-container",6),e.ALo(2,"ngrxPush"),e.ALo(3,"ngrxPush"),e.BQk()),2&u){const c=e.oxw();e.xp6(1),e.Q6J("ngIf",!e.lcZ(2,1,c.expressionError$)&&!e.lcZ(3,3,c.expressionMessage$))}}function ii(u,y){if(1&u&&(e.TgZ(0,"button",40),e._UZ(1,"span",29),e._uU(2," SYNTAX ASSISTANCE "),e.qZA()),2&u){const c=e.oxw().helpContent;e.Q6J("nzPopoverContent",c)}}function ju(u,y){if(1&u&&(e._UZ(0,"nz-alert",38),e.YNc(1,ii,3,1,"ng-template",null,39,e.W1O)),2&u){const c=y.$implicit,m=e.MAs(2);e.Q6J("nzMessage",c.errorMessage)("nzAction",m)}}function _p(u,y){1&u&&e.GkF(0)}function mi(u,y){1&u&&e._UZ(0,"cvc-mp-editor-popover-help",46)}const Ts=function(u,y){return{$implicit:u,helpContent:y}};function fd(u,y){if(1&u&&(e.ynx(0),e.YNc(1,_p,1,0,"ng-container",44),e.YNc(2,mi,1,0,"ng-template",null,45,e.W1O),e.BQk()),2&u){const c=e.MAs(3),m=e.oxw().ngIf;e.oxw();const j=e.MAs(14);e.xp6(1),e.Q6J("ngTemplateOutlet",j)("ngTemplateOutletContext",e.WLB(2,Ts,m,c))}}function yp(u,y){1&u&&e.GkF(0)}function Zd(u,y){1&u&&e._UZ(0,"cvc-mp-editor-popover-help",48)}function Kd(u,y){if(1&u&&(e.ynx(0),e.YNc(1,yp,1,0,"ng-container",44),e.YNc(2,Zd,1,0,"ng-template",null,47,e.W1O),e.BQk()),2&u){const c=e.MAs(3),m=e.oxw().ngIf;e.oxw();const j=e.MAs(14);e.xp6(1),e.Q6J("ngTemplateOutlet",j)("ngTemplateOutletContext",e.WLB(2,Ts,m,c))}}function md(u,y){1&u&&e.GkF(0)}function qp(u,y){1&u&&e._UZ(0,"cvc-mp-editor-popover-help",50)}function gd(u,y){if(1&u&&(e.ynx(0),e.YNc(1,md,1,0,"ng-container",44),e.YNc(2,qp,1,0,"ng-template",null,49,e.W1O),e.BQk()),2&u){const c=e.MAs(3),m=e.oxw().ngIf;e.oxw();const j=e.MAs(14);e.xp6(1),e.Q6J("ngTemplateOutlet",j)("ngTemplateOutletContext",e.WLB(2,Ts,m,c))}}function Cp(u,y){1&u&&e.GkF(0)}function vd(u,y){1&u&&e._UZ(0,"cvc-mp-editor-popover-help",52)}function Jd(u,y){if(1&u&&(e.ynx(0),e.YNc(1,Cp,1,0,"ng-container",44),e.YNc(2,vd,1,0,"ng-template",null,51,e.W1O),e.BQk()),2&u){const c=e.MAs(3),m=e.oxw().ngIf;e.oxw();const j=e.MAs(14);e.xp6(1),e.Q6J("ngTemplateOutlet",j)("ngTemplateOutletContext",e.WLB(2,Ts,m,c))}}function qd(u,y){1&u&&e.GkF(0)}function Za(u,y){1&u&&e._UZ(0,"cvc-mp-editor-popover-help",54)}function zp(u,y){if(1&u&&(e.ynx(0),e.YNc(1,qd,1,0,"ng-container",44),e.YNc(2,Za,1,0,"ng-template",null,53,e.W1O),e.BQk()),2&u){const c=e.MAs(3),m=e.oxw().ngIf;e.oxw();const j=e.MAs(14);e.xp6(1),e.Q6J("ngTemplateOutlet",j)("ngTemplateOutletContext",e.WLB(2,Ts,m,c))}}function _d(u,y){1&u&&e.GkF(0)}function T(u,y){1&u&&e._UZ(0,"cvc-mp-editor-popover-help",56)}function p(u,y){if(1&u&&(e.ynx(0),e.YNc(1,_d,1,0,"ng-container",44),e.YNc(2,T,1,0,"ng-template",null,55,e.W1O),e.BQk()),2&u){const c=e.MAs(3),m=e.oxw().ngIf;e.oxw();const j=e.MAs(14);e.xp6(1),e.Q6J("ngTemplateOutlet",j)("ngTemplateOutletContext",e.WLB(2,Ts,m,c))}}function h(u,y){1&u&&e.GkF(0)}function g(u,y){1&u&&(e.ynx(0),e._UZ(1,"cvc-mp-editor-popover-help",58),e.BQk())}function C(u,y){1&u&&(e.ynx(0),e._UZ(1,"cvc-mp-editor-popover-help",59),e.BQk())}function E(u,y){if(1&u&&(e.YNc(0,g,2,0,"ng-container",6),e.YNc(1,C,2,0,"ng-container",6)),2&u){const c=e.oxw(2).ngIf;e.Q6J("ngIf",c.errorMessage.split(" ").includes("multiple")),e.xp6(1),e.Q6J("ngIf",c.errorMessage.split(" ").includes("found."))}}function X(u,y){if(1&u&&(e.ynx(0),e.YNc(1,h,1,0,"ng-container",44),e.YNc(2,E,2,2,"ng-template",null,57,e.W1O),e.BQk()),2&u){const c=e.MAs(3),m=e.oxw().ngIf;e.oxw();const j=e.MAs(14);e.xp6(1),e.Q6J("ngTemplateOutlet",j)("ngTemplateOutletContext",e.WLB(2,Ts,m,c))}}function _e(u,y){if(1&u&&(e.ynx(0),e.TgZ(1,"pre"),e._uU(2),e.ALo(3,"json"),e.qZA(),e.BQk()),2&u){const c=e.oxw().ngIf;e.xp6(2),e.hij("              ",e.lcZ(3,1,c),"\n            ")}}function xe(u,y){if(1&u&&(e.ynx(0)(1,41),e.YNc(2,fd,4,5,"ng-container",42),e.YNc(3,Kd,4,5,"ng-container",42),e.YNc(4,gd,4,5,"ng-container",42),e.YNc(5,Jd,4,5,"ng-container",42),e.YNc(6,zp,4,5,"ng-container",42),e.YNc(7,p,4,5,"ng-container",42),e.YNc(8,X,4,5,"ng-container",42),e.YNc(9,_e,4,3,"ng-container",43),e.BQk()()),2&u){const c=y.ngIf;e.xp6(1),e.Q6J("ngSwitch",c.errorType),e.xp6(1),e.Q6J("ngSwitchCase","invalidToken"),e.xp6(1),e.Q6J("ngSwitchCase","trailingBoolean"),e.xp6(1),e.Q6J("ngSwitchCase","initialBoolean"),e.xp6(1),e.Q6J("ngSwitchCase","multipleBoolean"),e.xp6(1),e.Q6J("ngSwitchCase","incompleteExpression"),e.xp6(1),e.Q6J("ngSwitchCase","incompleteNOT"),e.xp6(1),e.Q6J("ngSwitchCase","queryError")}}function qe(u,y){1&u&&(e.TgZ(0,"span",25),e._uU(1," Append: "),e.qZA())}function pt(u,y){if(1&u&&(e.TgZ(0,"button",60)(1,"strong"),e._uU(2,"Variant"),e.qZA()()),2&u){e.oxw();const c=e.MAs(37);e.Q6J("nzPopoverContent",c)}}function St(u,y){if(1&u&&(e.TgZ(0,"button",61)(1,"strong"),e._uU(2,"NOT Variant"),e.qZA()()),2&u){e.oxw();const c=e.MAs(39);e.Q6J("nzPopoverContent",c)}}function Vt(u,y){1&u&&(e.TgZ(0,"span",62),e._uU(1," | "),e.qZA())}function Ut(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"button",63),e.NdJ("click",function(){e.CHM(c);const j=e.oxw();return e.KtG(j.onAppendInput$.next("AND"))}),e.TgZ(1,"strong"),e._uU(2,"AND"),e.qZA()()}}function jt(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"button",63),e.NdJ("click",function(){e.CHM(c);const j=e.oxw();return e.KtG(j.onAppendInput$.next("OR"))}),e.TgZ(1,"strong"),e._uU(2,"OR"),e.qZA()()}}function Qt(u,y){1&u&&(e.TgZ(0,"span",62),e._uU(1," | "),e.qZA())}function fn(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"button",63),e.NdJ("click",function(){e.CHM(c);const j=e.oxw();return e.KtG(j.onAppendInput$.next("("))}),e.TgZ(1,"strong"),e._uU(2,"("),e.qZA()()}}function Sn(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"button",63),e.NdJ("click",function(){e.CHM(c);const j=e.oxw();return e.KtG(j.onAppendInput$.next(")"))}),e.TgZ(1,"strong"),e._uU(2,")"),e.qZA()()}}const Vn=function(){return[6,8]};function on(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"div",64)(1,"nz-row",2)(2,"nz-col",3)(3,"p",65),e._uU(4," Select a Gene and Variant to append its #VID. "),e.qZA()(),e.TgZ(5,"nz-col",3)(6,"cvc-mp-finder",66),e.NdJ("cvcOnVariantSelect",function(j){e.CHM(c);const Be=e.oxw();return e.KtG(Be.onVariantSelect$.next({variant:j,prependNot:!1}))}),e.qZA()()()()}2&u&&(e.xp6(1),e.Q6J("nzGutter",e.DdM(1,Vn)))}function gn(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"div",64)(1,"nz-row",2)(2,"nz-col",3)(3,"p",65),e._uU(4," Select a Gene and Variant to append its #VID, prepended with NOT boolean. "),e.qZA()(),e.TgZ(5,"nz-col",3)(6,"cvc-mp-finder",66),e.NdJ("cvcOnVariantSelect",function(j){e.CHM(c);const Be=e.oxw();return e.KtG(Be.onVariantSelect$.next({variant:j,prependNot:!0}))}),e.qZA()()()()}2&u&&(e.xp6(1),e.Q6J("nzGutter",e.DdM(1,Vn)))}function Un(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"nz-list-item")(1,"nz-list-item-meta")(2,"nz-list-item-meta-title"),e._UZ(3,"cvc-entity-tag",70),e.qZA(),e.TgZ(4,"nz-list-item-meta-description"),e._uU(5),e.qZA()(),e.TgZ(6,"ul",71)(7,"nz-list-item-action")(8,"button",72),e.NdJ("click",function(){const Be=e.CHM(c).$implicit,Mt=e.oxw(2);return e.KtG(Mt.onSelectExample$.next(Be))}),e._uU(9," Select "),e.qZA()()()()}if(2&u){const c=y.$implicit;e.xp6(3),e.Q6J("cvcLinkableEntity",c.mp),e.xp6(2),e.hij(" ",c.description," ")}}function kn(u,y){if(1&u&&(e.TgZ(0,"div",67)(1,"nz-list",68),e.YNc(2,Un,10,2,"nz-list-item",69),e.qZA()()),2&u){const c=e.oxw();e.xp6(2),e.Q6J("ngForOf",c.exampleExpressions)}}const io=function(u){return{active:u}};let wo=((zs=class{constructor(y,c,m,j){this.previewMpGql=y,this.createMolecularProfileGql=c,this.mpEditorPrepopulate=m,this.networkErrorService=j,this.cvcOnSelect=new e.vpe,this.expressionMessages={initial:"Use the editor below to construct a molecular profile."},this.exampleExpressions=[{mp:{__typename:"MolecularProfile",id:9999,name:"BRAF V600E AND EGFR L858R AND EGFR T790M"},expression:"#VID12 AND #VID33 AND #VID34",description:"BRAF V600E, EGFR L858R, and EGFR T790M must all be observed."},{mp:{__typename:"MolecularProfile",id:9999,name:"BRAF V600E AND NOT EGFR L858R"},expression:"#VID12 AND NOT #VID33",description:"BRAF V600E must be observed and EGFR L858R must be absent."},{mp:{__typename:"MolecularProfile",id:9999,name:"BRAF V600E OR EGFR L858R OR EGFR T790M"},expression:"#VID12 OR #VID33 OR #VID34",description:"Either BRAF V600E, or EGFR L858R, or EGFR T790M must be observed."},{mp:{__typename:"MolecularProfile",id:9999,name:"BRAF V600E AND (EGFR L858R OR EGFR T790M)"},expression:"#VID12 AND (#VID33 OR #VID34)",description:"BRAF V600E must be observed and either EGFR L858R or EGFR T790M must be observed."},{mp:{__typename:"MolecularProfile",id:9999,name:"NOT KIT D816V"},expression:"NOT #VID4353",description:"KIT D816V must be absent."}],this.createMolecularProfileMutator=new Ho.U(this.networkErrorService),this.onInputChange$=new Ge.X(void 0),this.onAppendInput$=new st.x,this.onVariantSelect$=new st.x,this.onCreateNewMp$=new st.x,this.onSelectExample$=new st.x,this.inputValue$=new Ge.X(""),this.expressionError$=new Ge.X(void 0),this.expressionHelp$=new Ge.X(void 0),this.expressionMessage$=new Ge.X(this.expressionMessages.initial),this.expressionSegment$=new st.x,this.existingMp$=new st.x}ngAfterViewInit(){this.onInputChange$.pipe((0,Jn.b)(250),(0,Lo.b)(y=>{y||this.expressionSegment$.next(void 0)}),(0,De.h)(zo.ep),(0,Lo.b)(y=>{0===y.length&&(this.expressionMessage$.next(this.expressionMessages.initial),this.expressionError$.next(void 0))}),(0,De.h)(y=>y.length>0),(0,De.h)(y=>" "!==y[y.length-1]),(0,vt.U)(y=>{let c=rd(y);return"errorMessage"in c?c:this.previewQueryRef.refetch({mpStructure:c})}),(0,ce.t)(this)).subscribe(y=>{if(this.isMpParseError(y)){const c=y;this.expressionMessage$.next(void 0),this.expressionError$.next(c),this.expressionSegment$.next(void 0)}else y.then(({data:m,errors:j})=>{if(j)this.expressionMessage$.next(void 0),this.expressionError$.next({errorType:"queryError",errorMessage:j.map(Be=>Be.message).join("\n")}),this.expressionSegment$.next(void 0);else{this.expressionSegment$.next(m.previewMolecularProfileName.segments),this.expressionMessage$.next(void 0),this.expressionError$.next(void 0);this.existingMp$.next(m.previewMolecularProfileName.existingMolecularProfile||void 0)}})}),this.onAppendInput$.pipe((0,ce.t)(this)).subscribe(y=>{if(this.expressionEditor){const c=this.expressionEditor.nativeElement,j=`${c.value}${/\s+$/.test(y)?y:" "+y}`;c.value=j,this.inputValue$.next(j),this.onInputChange$.next(j)}}),this.onSelectExample$.pipe((0,ce.t)(this)).subscribe(y=>{this.expressionEditor&&(this.expressionEditor.nativeElement.value=y.expression,this.inputValue$.next(y.expression),this.onInputChange$.next(y.expression))}),this.onVariantSelect$.pipe((0,it.M)(this.onInputChange$),(0,vt.U)(([y,c])=>{const m=`${y.prependNot?"NOT ":""}#VID${y.variant.id}`;return c&&0!=c.trim().length?`${c.trim()} ${m}`:m}),(0,ce.t)(this)).subscribe(y=>{this.inputValue$.next(y),this.onInputChange$.next(y)}),this.previewQueryRef=this.previewMpGql.watch({}),this.previewMpName$=this.previewQueryRef.valueChanges.pipe((0,rn.j)("data","previewMolecularProfileName"),(0,De.h)(zo.ep),(0,vt.U)(y=>y.segments),(0,ce.t)(this)),this.previewMpAlreadyExists$=this.previewQueryRef.valueChanges.pipe((0,rn.j)("data","previewMolecularProfileName"),(0,De.h)(zo.ep),(0,vt.U)(y=>y.existingMolecularProfile),(0,ce.t)(this)),this.previewDeprecatedVariants$=this.previewQueryRef.valueChanges.pipe((0,rn.j)("data","previewMolecularProfileName"),(0,De.h)(zo.ep),(0,vt.U)(y=>y.deprecatedVariants),(0,ce.t)(this)),this.onCreateNewMp$.pipe((0,it.M)(this.onInputChange$),(0,ce.t)(this)).subscribe(([y,c])=>{if(!c||0===c.length)return;let m=rd(c);"errorMessage"in m||(this.state=this.createMolecularProfileMutator.mutate(this.createMolecularProfileGql,{mpStructure:m},{},j=>{setTimeout(()=>{j.createMolecularProfile&&this.cvcOnSelect.next(j.createMolecularProfile.molecularProfile)},1e3)}))})}isMpParseError(y){return void 0!==y.errorMessage}prepopulateMp(y){if(!y)return this.expressionSegment$.next(void 0),this.expressionMessage$.next(this.expressionMessages.initial),void this.inputValue$.next("");bc(this.mpEditorPrepopulate.fetch({mpId:y},{fetchPolicy:"cache-first"})).then(({data:c})=>{if(!c?.molecularProfile?.id)return void console.error(`MpExpressionEditor could not fetch MolecularProfile:${y} to prepolate editor fields.`);const m=c.molecularProfile.rawName.replace(/#GID(\d+)/g,"").trim();this.inputValue$.next(m),this.onInputChange$.next(m)})}ngOnChanges(y){y.cvcPrepopulateWithId&&this.prepopulateMp(y.cvcPrepopulateWithId.currentValue)}}).\u0275fac=function(y){return new(y||zs)(e.Y36(Nn.mki),e.Y36(Nn.zpu),e.Y36(Nn.vjc),e.Y36(Xo.Y))},zs.\u0275cmp=e.Xpm({type:zs,selectors:[["cvc-mp-expression-editor"]],viewQuery:function(y,c){if(1&y&&e.Gf(Gd,5),2&y){let m;e.iGM(m=e.CRH())&&(c.expressionEditor=m.first)}},inputs:{cvcPrepopulateWithId:"cvcPrepopulateWithId"},outputs:{cvcOnSelect:"cvcOnSelect"},features:[e.TTD],decls:42,vars:23,consts:[["entityType","Molecular Profile",3,"mutationState","successMessage"],["success",""],[3,"nzGutter"],["nzSpan","24"],[1,"expression-preview",3,"ngClass"],[4,"ngrxLet"],[4,"ngIf"],["errorAlert",""],["nz-input","","rows","1","placeholder","Enter or edit a Molecular Expression here.",2,"width","100%",3,"ngModel","ngModelChange"],["expressionEditor",""],[1,"btn-row"],["nzFlex","80px"],["nzBlock","","nz-button","","nzType","primary","nzShape","round","nzSize","small","nz-popover","","nzPopoverTitle","Select a Profile to view its expression","nzPopoverTrigger","click","nzPopoverPlacement","bottomLeft",3,"nzPopoverContent"],["nzFlex","auto",2,"text-align","right"],["nz-typography","","nzType","secondary",4,"nzSpaceItem"],["type","button","nz-button","","nz-popover","","nzPopoverTitle","Append Variant #VID","nzPopoverTrigger","click","nzSize","small","nzShape","round","nzType","primary","nzPopoverPlacement","bottom",3,"nzPopoverContent",4,"nzSpaceItem"],["type","button","nz-button","","nz-popover","","nzPopoverTitle","Append Variant NOT #VID","nzPopoverTrigger","click","nzSize","small","nzShape","round","nzType","primary","nzPopoverPlacement","bottom",3,"nzPopoverContent",4,"nzSpaceItem"],["class","btn-divider",4,"nzSpaceItem"],["type","button","nz-button","","nzType","primary","nzSize","small","nzShape","round",3,"click",4,"nzSpaceItem"],["appendVariant",""],["appendNotVariant",""],["expressionExamples",""],[3,"nameSegments",4,"ngIf"],["nz-typography","","nzType","secondary",4,"ngIf"],[3,"nameSegments"],["nz-typography","","nzType","secondary"],["nzType","info","nzShowIcon","",3,"nzMessage","nzAction"],["messageAction",""],["type","button","nz-button","","nzType","dashed","nzSize","small","nzShape","round","nz-popover","","nzPopoverTrigger","hover",3,"nzPopoverContent"],["nz-icon","","nzType","question-circle","nzTheme","fill"],["gettingStartedHelp",""],["nzType","success","nzShowIcon","",3,"nzMessage","nzAction"],["selectAction",""],["foundMessage",""],["type","button","nz-button","","nzType","primary","nzSize","small","nzBlock","",3,"click"],["createAction",""],["createMessage",""],["type","button","nz-button","","nzSize","small","nzType","primary","nzBlock","",3,"click"],["nzType","error","nzShowIcon","",3,"nzMessage","nzAction"],["errorAction",""],["nz-button","","nzDanger","","nzType","text","nzSize","small","nzShape","round","nz-popover","","nzPopoverTrigger","hover",3,"nzPopoverContent"],[3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["invalidTokenHelp",""],["cvcErrorType","invalidToken"],["trailingBooleanHelp",""],["cvcErrorType","trailingBoolean"],["initialBooleanHelp",""],["cvcErrorType","initialBoolean"],["multipleBooleanHelp",""],["cvcErrorType","multipleBoolean"],["incompleteExpressionHelp",""],["cvcErrorType","incompleteExpression"],["incompleteNOTHelp",""],["cvcErrorType","incompleteNOT"],["queryErrorHelp",""],["cvcErrorType","identicalVariants"],["cvcErrorType","unknownVariant"],["type","button","nz-button","","nz-popover","","nzPopoverTitle","Append Variant #VID","nzPopoverTrigger","click","nzSize","small","nzShape","round","nzType","primary","nzPopoverPlacement","bottom",3,"nzPopoverContent"],["type","button","nz-button","","nz-popover","","nzPopoverTitle","Append Variant NOT #VID","nzPopoverTrigger","click","nzSize","small","nzShape","round","nzType","primary","nzPopoverPlacement","bottom",3,"nzPopoverContent"],[1,"btn-divider"],["type","button","nz-button","","nzType","primary","nzSize","small","nzShape","round",3,"click"],[1,"append-popover-contents"],["nz-typography","","nzType","secondary",2,"margin","0","padding-bottom","2px"],[3,"cvcOnVariantSelect"],[2,"min-width","525px","margin","-8px -12px"],["nzSize","small","nzItemLayout","horizontal"],[4,"ngFor","ngForOf"],[3,"cvcLinkableEntity"],["nz-list-item-actions",""],["type","button","nz-button","","nzType","primary","nzSize","small",3,"click"]],template:function(y,c){if(1&y&&(e.TgZ(0,"cvc-form-submission-status-display",0),e.YNc(1,ld,1,0,"ng-template",null,1,e.W1O),e.TgZ(3,"nz-row",2)(4,"nz-col",3)(5,"div",4),e.ALo(6,"ngrxPush"),e.YNc(7,Gu,3,2,"ng-container",5),e.ALo(8,"ngrxPush"),e.qZA()(),e.TgZ(9,"nz-col",3),e.YNc(10,dd,4,2,"ng-container",6),e.ALo(11,"ngrxPush"),e.YNc(12,Qu,4,5,"ng-container",5),e.YNc(13,ju,3,2,"ng-template",null,7,e.W1O),e.YNc(15,xe,10,8,"ng-container",6),e.ALo(16,"ngrxPush"),e.qZA(),e.TgZ(17,"nz-col",3)(18,"textarea",8,9),e.NdJ("ngModelChange",function(j){return c.onInputChange$.next(j)}),e.ALo(20,"ngrxPush"),e.qZA()()(),e.TgZ(21,"nz-row",10)(22,"nz-col",11)(23,"button",12),e._uU(24," Examples "),e.qZA()(),e.TgZ(25,"nz-col",13)(26,"nz-space"),e.YNc(27,qe,2,0,"span",14),e.YNc(28,pt,3,1,"button",15),e.YNc(29,St,3,1,"button",16),e.YNc(30,Vt,2,0,"span",17),e.YNc(31,Ut,3,0,"button",18),e.YNc(32,jt,3,0,"button",18),e.YNc(33,Qt,2,0,"span",17),e.YNc(34,fn,3,0,"button",18),e.YNc(35,Sn,3,0,"button",18),e.qZA()(),e.YNc(36,on,7,2,"ng-template",null,19,e.W1O),e.YNc(38,gn,7,2,"ng-template",null,20,e.W1O),e.YNc(40,kn,3,1,"ng-template",null,21,e.W1O),e.qZA()()),2&y){const m=e.MAs(2),j=e.MAs(41);e.Q6J("mutationState",c.state)("successMessage",m),e.xp6(3),e.Q6J("nzGutter",e.DdM(20,Vn)),e.xp6(2),e.Q6J("ngClass",e.VKq(21,io,void 0!==e.lcZ(6,10,c.expressionSegment$))),e.xp6(2),e.Q6J("ngrxLet",e.lcZ(8,12,c.expressionSegment$)),e.xp6(3),e.Q6J("ngIf",e.lcZ(11,14,c.expressionMessage$)),e.xp6(2),e.Q6J("ngrxLet",c.existingMp$),e.xp6(3),e.Q6J("ngIf",e.lcZ(16,16,c.expressionError$)),e.xp6(3),e.Q6J("ngModel",e.lcZ(20,18,c.inputValue$)),e.xp6(5),e.Q6J("nzPopoverContent",j)}},dependencies:[M.mk,M.sg,M.O5,M.tP,M.RF,M.n9,M.ED,t.Fj,t.JJ,t.On,F.eJ,yt.r,On.ix,To.w,jo.dQ,Re.Ls,Pe.Zp,R.t3,R.SK,Ye.NU,Ye.$1,ge.ZU,Wn.lU,ar.n_,ar.AA,ar.yi,ar.IO,ar.Pb,ar.nk,ar.KC,Oi.F,gp.C,xo.J,vp,cd,M.Ts,F.fM],styles:["[_nghost-%COMP%]{display:block;background-color:#f6f6f6;border:1px solid #dedede;border-radius:4px;padding:8px}.expression-preview[_ngcontent-%COMP%]{width:100%;padding:8px;border:1px solid #dedede;border-radius:4px}.expression-preview.active[_ngcontent-%COMP%]{background-color:#fff}.append-popover-contents[_ngcontent-%COMP%]{min-width:450px}.help-content[_ngcontent-%COMP%]{max-width:500px}.btn-row[_ngcontent-%COMP%]{margin-top:10px;flex-wrap:nowrap}.btn-row[_ngcontent-%COMP%]   .btn-divider[_ngcontent-%COMP%]{color:#aaa}"],changeDetection:0}),zs);wo=(0,ne.gn)([(0,ce.c)()],wo);const hi=["optionTemplates"];function Pi(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"cvc-mp-finder",11),e.NdJ("cvcOnSelect",function(j){e.CHM(c);const Be=e.oxw(2);return e.KtG(Be.onMpSelect$.next(j))}),e.qZA()}}function as(u,y){1&u&&(e.TgZ(0,"div",12),e._uU(1," \xa0 "),e.TgZ(2,"span",13)(3,"i"),e._uU(4,"Select or create a Molecular Profile with the expression editor "),e.qZA()()())}function ji(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"div",14)(1,"cvc-entity-select",15),e.NdJ("cvcOnSearch",function(j){e.CHM(c);const Be=e.oxw(2);return e.KtG(Be.onSearch$.next(j))})("cvcOnModelChange",function(j){e.CHM(c);const Be=e.oxw(2);return e.KtG(Be.props.change&&Be.props.change(Be.field,j))}),e.ALo(2,"ngrxPush"),e.ALo(3,"ngrxPush"),e.ALo(4,"ngrxPush"),e.qZA()()}if(2&u){const c=e.oxw(2),m=e.MAs(13);e.xp6(1),e.Q6J("cvcSelectMode",c.props.isMultiSelect?"multiple":"default")("cvcCustomTemplate",m)("cvcFormControl",c.formControl)("cvcFormlyAttributes",c.field)("cvcEntityName",c.props.entityName)("cvcPlaceholder",c.props.placeholder)("cvcResults",e.lcZ(2,15,c.result$))("cvcDisabled",c.props.disabled)("cvcAllowClear",!1)("cvcOptions",e.lcZ(3,17,c.selectOption$))("cvcShowError",c.showError)("cvcLoading",e.lcZ(4,19,c.isLoading$))("cvcBorderless",!0)("cvcSuffixIcon",null)("cvcShowArrow",!1)}}function Xi(u,y){if(1&u&&(e.ynx(0),e.YNc(1,Pi,1,0,"cvc-mp-finder",8),e.YNc(2,as,5,0,"div",9),e.YNc(3,ji,5,21,"div",10),e.BQk()),2&u){const c=y.ngrxLet,m=e.oxw();e.xp6(1),e.Q6J("ngIf",c.showFinder&&!m.editorOpen),e.xp6(1),e.Q6J("ngIf",m.editorOpen),e.xp6(1),e.Q6J("ngIf",c.showSelect&&!m.editorOpen)}}function Wu(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"nz-col",16)(1,"cvc-mp-expression-editor",17),e.NdJ("cvcOnSelect",function(j){e.CHM(c);const Be=e.oxw();return e.KtG(Be.onMpSelect$.next(j))}),e.ALo(2,"ngrxPush"),e.qZA()()}if(2&u){const c=e.oxw();e.xp6(1),e.Q6J("cvcPrepopulateWithId",e.lcZ(2,1,c.onMpId$))}}function Zu(u,y){if(1&u&&(e.ynx(0),e.TgZ(1,"em"),e._UZ(2,"span",24),e.ALo(3,"highlightTypeahead"),e.qZA(),e.BQk()),2&u){const c=e.oxw(2).$implicit,m=e.oxw().ngrxLet;e.xp6(2),e.Q6J("innerHtml",e.xi3(3,1,c.molecularProfileAliases.join(", "),m),e.oJD)}}function oo(u,y){1&u&&e._uU(0,"--")}function fo(u,y){if(1&u&&(e._UZ(0,"cvc-entity-tag",20),e.TgZ(1,"span",21),e._uU(2," Aliases: "),e.YNc(3,Zu,4,4,"ng-container",22),e.YNc(4,oo,1,0,"ng-template",null,23,e.W1O),e.qZA()),2&u){const c=e.MAs(5),m=e.oxw().$implicit,j=e.oxw().ngrxLet;e.Q6J("cvcDisableLink",!0)("cvcCacheId",m.__typename+":"+m.id)("cvcEmphasize",j),e.xp6(3),e.Q6J("ngIf",m.molecularProfileAliases.length>0)("ngIfElse",c)}}function _o(u,y){1&u&&(e.ynx(0),e.YNc(1,fo,6,5,"ng-template",null,19,e.W1O),e.BQk())}function Zo(u,y){if(1&u&&(e.ynx(0),e.YNc(1,_o,3,0,"ng-container",18),e.ALo(2,"ngrxPush"),e.BQk()),2&u){const c=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,c.result$))}}function Ui(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"div",25)(1,"cvc-entity-tag",26),e.NdJ("cvcOnClose",function(){const Be=e.CHM(c).$implicit,Mt=e.oxw();return e.KtG(Mt.onTagClose$.next(Be.nzValue))}),e.qZA()()}if(2&u){const c=y.$implicit,m=e.oxw();e.xp6(1),e.Q6J("cvcCacheId","MolecularProfile:"+c.nzValue)("cvcContext",m.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",m.props.isMultiSelect?"default":"closeable")}}const Wr=function(){return[8,12]},ts=function(u,y){return{show:u,hide:y}},Ms=Lt(_n(),ni());let Ti=(()=>{class u extends Ms{constructor(c,m,j,Be){super(),this.taq=c,this.tq=m,this.changeDetectorRef=j,this.apollo=Be,this.editorOpen=!1,this.defaultOptions={props:{label:"Molecular Profile",placeholder:"Search Molecular Profiles",isMultiSelect:!1,description:"Select a Gene and Variant to specify a simple Molecular Profile.",extraType:"prompt",entityName:{singular:"Molecular Profile",plural:"Molecular Profiles"},minSearchStrLength:1}},this.onMpSelect$=new Ge.X(void 0),this.onMpId$=new Mo.t,this.onShowExpClick$=new st.x,this.showExp$=this.onShowExpClick$.pipe((0,go.R)((Mt,bn)=>!Mt,!1),(0,Lo.b)(Mt=>this.editorOpen=Mt)),this.selectDisplay$=new Ge.X({showFinder:!0,showSelect:!1})}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEntitySelectField({typeaheadQuery:this.taq,tagQuery:this.tq,getTypeaheadVarsFn:this.getTypeaheadVarsFn,getTypeaheadResultsFn:this.getTypeaheadResultsFn,getTagQueryVarsFn:this.getTagQueryVarsFn,getTagQueryResultsFn:this.getTagQueryResultsFn,getSelectedItemOptionFn:this.getSelectedItemOptionFn,getSelectOptionsFn:this.getSelectOptionsFn,changeDetectorRef:this.changeDetectorRef,selectOpen$:this.selectOpen$,selectComponent:this.selectComponent}),this.initialDescription=this.props.description,this.onValueChange$.pipe((0,ce.t)(this)).subscribe(c=>{const m=void 0!==c;this.selectDisplay$.next({showFinder:!m,showSelect:m}),this.onMpId$.next(c),this.props.description=c?void 0:this.initialDescription}),this.onMpSelect$.pipe((0,ce.t)(this)).subscribe(c=>{c?(this.selectOption$.next([{label:c.name,value:c.id}]),this.editorOpen&&this.onShowExpClick$.next(),this.cdr.detectChanges(),this.field.formControl.setValue(c.id)):this.selectDisplay$.next({showFinder:!0,showSelect:!1})})}configureStateConnections(){}getTypeaheadVarsFn(c,m){return{name:c,geneId:m}}getTypeaheadResultsFn(c){return c.data.molecularProfiles.nodes}getTagQueryVarsFn(c){return{molecularProfileId:c}}getTagQueryResultsFn(c){return c.data.molecularProfile}getSelectedItemOptionFn(c){return{value:c.id,label:c.name}}getSelectOptionsFn(c,m){return c.map((j,Be)=>({label:m.get(Be)||j.name,value:j.id}))}}return u.\u0275fac=function(c){return new(c||u)(e.Y36(Nn.F4e),e.Y36(Nn.dGO),e.Y36(e.sBO),e.Y36(co._M))},u.\u0275cmp=e.Xpm({type:u,selectors:[["ng-component"]],viewQuery:function(c,m){if(1&c&&e.Gf(hi,5,e.Rgc),2&c){let j;e.iGM(j=e.CRH())&&(m.optionTemplates=j)}},features:[e.qOj],decls:14,vars:16,consts:[[3,"nzGutter"],["nzFlex","auto"],[4,"ngrxLet"],["nzFlex","50px"],["type","button","nz-button","","nzBlock","","nz-tooltip","","nzTooltipTitle","Add/Edit Complex MP Expression",1,"expression-button",3,"click"],["nz-icon","",3,"ngClass","nzType"],["nzSpan","24","class","editor-drawer",4,"ngIf"],["selectedTemplate",""],[3,"cvcOnSelect",4,"ngIf"],["class","editor-message",4,"ngIf"],["style","display: inline-block",4,"ngIf"],[3,"cvcOnSelect"],[1,"editor-message"],["nz-typography","","nzEllipsis","","nzType","secondary"],[2,"display","inline-block"],[3,"cvcSelectMode","cvcCustomTemplate","cvcFormControl","cvcFormlyAttributes","cvcEntityName","cvcPlaceholder","cvcResults","cvcDisabled","cvcAllowClear","cvcOptions","cvcShowError","cvcLoading","cvcBorderless","cvcSuffixIcon","cvcShowArrow","cvcOnSearch","cvcOnModelChange"],["nzSpan","24",1,"editor-drawer"],[3,"cvcPrepopulateWithId","cvcOnSelect"],[4,"ngFor","ngForOf"],["optionTemplates",""],[3,"cvcDisableLink","cvcCacheId","cvcEmphasize"],["nz-typography","","nzType","secondary"],[4,"ngIf","ngIfElse"],["noAliases",""],["nz-typography","","nzType","secondary",3,"innerHtml"],[1,"ant-select-selection-item-content"],[3,"cvcCacheId","cvcContext","cvcMode","cvcOnClose"]],template:function(c,m){1&c&&(e.TgZ(0,"nz-row",0)(1,"nz-col",1),e.YNc(2,Xi,4,3,"ng-container",2),e.qZA(),e.TgZ(3,"nz-col",3)(4,"button",4),e.NdJ("click",function(){return m.onShowExpClick$.next()}),e._UZ(5,"span",5),e.ALo(6,"ngrxPush"),e.ALo(7,"ngrxPush"),e._uU(8,"Editor "),e.qZA()(),e.YNc(9,Wu,3,3,"nz-col",6),e.ALo(10,"ngrxPush"),e.qZA(),e.YNc(11,Zo,3,3,"ng-container",2),e.YNc(12,Ui,2,3,"ng-template",null,7,e.W1O)),2&c&&(e.Q6J("nzGutter",e.DdM(12,Wr)),e.xp6(2),e.Q6J("ngrxLet",m.selectDisplay$),e.xp6(3),e.Q6J("ngClass",e.WLB(13,ts,e.lcZ(6,6,m.showExp$),!e.lcZ(7,8,m.showExp$)))("nzType","caret-right"),e.xp6(4),e.Q6J("ngIf",e.lcZ(10,10,m.showExp$)),e.xp6(2),e.Q6J("ngrxLet",m.onSearch$))},dependencies:[M.mk,M.sg,M.O5,F.eJ,On.ix,To.w,jo.dQ,Re.Ls,R.t3,R.SK,ge.ZU,Xe.SY,Kn,xo.J,wo,vp,F.fM,I.A],styles:["form[_ngcontent-%COMP%]   span.hide[_ngcontent-%COMP%], .expression-button[_ngcontent-%COMP%]   span.hide[_ngcontent-%COMP%]{transform:rotate(0);transition:transform .2s linear}form[_ngcontent-%COMP%]   span.show[_ngcontent-%COMP%], .expression-button[_ngcontent-%COMP%]   span.show[_ngcontent-%COMP%]{transform:rotate(90deg);transition:transform .2s linear}.editor-message[_ngcontent-%COMP%]{padding:3px;background-color:#f5f5f5;cursor:default;border-radius:2px}"],data:{animation:[od.mF,od.MC]},changeDetection:0}),u})();const yd={types:[{name:"molecular-profile-select",wrappers:["form-field"],component:Ti},{name:"molecular-profile-multi-select",wrappers:["form-field"],component:Ti,defaultOptions:{props:{label:"Molecular Profiles",isMultiSelect:!0}}}]};let Tp=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,t.u5,t.UX,v.X0.forChild(yd),yt.L,On.sL,We.LV,zn.Qp,Re.PV,Pe.o7,R.Jb,Ye.zf,s.U5,B.ic,ge.ZJ,Xe.cg,Wn.$6,Ye.zf,Yt.Wr,ar.Ph,Zt.g,Hu.r,je,Kt,It.s,Te.x]}),u})();var gr=a(3702);const ga=["optionTemplates"];function Zr(u,y){if(1&u&&(e.TgZ(0,"nz-tag")(1,"strong"),e._uU(2),e.ALo(3,"formatAmp"),e.qZA()(),e.TgZ(4,"span",4),e._uU(5),e.qZA()),2&u){const c=e.oxw().$implicit,m=e.oxw();e.xp6(2),e.Oqu(e.xi3(3,2,c,"verbose")),e.xp6(3),e.Oqu(m.descriptionForCategory(c))}}function Ku(u,y){1&u&&(e.ynx(0),e.YNc(1,Zr,6,5,"ng-template",null,3,e.W1O),e.BQk())}function Cd(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"nz-tag",8),e.NdJ("nzOnClose",function(j){e.CHM(c);const Be=e.oxw(2);return e.KtG(Be.onTagClose$.next(j))}),e.TgZ(1,"strong"),e._uU(2),e.ALo(3,"formatAmp"),e.qZA()()}if(2&u){const c=e.oxw().$implicit;e.xp6(2),e.Oqu(e.xi3(3,1,c.nzValue,"verbose"))}}function c2(u,y){if(1&u&&(e.ynx(0),e._uU(1),e.ALo(2,"formatAmp"),e.BQk()),2&u){const c=e.oxw().$implicit;e.xp6(1),e.hij(" ",e.xi3(2,1,c.nzValue,"verbose")," ")}}function t4(u,y){if(1&u&&(e.TgZ(0,"div",5),e.YNc(1,Cd,4,4,"nz-tag",6),e.YNc(2,c2,3,4,"ng-container",7),e.qZA()),2&u){const c=e.oxw();e.xp6(1),e.Q6J("ngIf",!c.props.isMultiSelect),e.xp6(1),e.Q6J("ngIf",c.props.isMultiSelect)}}const Xd=new Map([[Nn.iwm.Na,"Not Applicable"],[Nn.iwm.TierILevelA,"Biomarkers showing therapeutic response to FDA-approved therapy, or therapy included in professional guidelines."],[Nn.iwm.TierILevelB,"Biomarkers showing therapeutic response based on well-powered studies with consensus from experts in the field."],[Nn.iwm.TierIiLevelC,"FDA-approved therapies for different tumor types or investigational therapies, or multiple small published studies with some consensus."],[Nn.iwm.TierIiLevelD,"Biomarkers that show plausible therapeutic significance based on preclinical studies."],[Nn.iwm.TierIii,"Somatic variants in cancer genes reported in the same or different cancer types with unknown clinical significance and variants in cancer genes that have not been reported in any cancers."],[Nn.iwm.TierIv,"Benign or likely benign germline variants observed at significant allele frequencies in the general population or specific subpopulation."]]),Mp=Lt(_n(),lt());let Xp=(()=>{class u extends Mp{constructor(c){super(),this.cdr=c,this.defaultOptions={props:{label:"AMP/ASCO/CAP Category",required:!1,isMultiSelect:!1,placeholder:"Select AMP/ASCO/CAP Category"}},this.ampCategoryEnum$=new Ge.X([])}descriptionForCategory(c){return Xd.get(c)}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEnumSelectField({optionEnum$:this.ampCategoryEnum$,optionTemplate$:this.optionTemplate$,changeDetectorRef:this.cdr}),this.configurePlaceholder()}configureStateConnections(){this.props.tooltip="If applicable, please provide the AMP/ASCO/CAP somatic variant classification.",this.ampCategoryEnum$.next((0,bo.o6)(Nn.iwm).map(c=>c)),this.optionTemplates||console.error(`${this.field.id} could not find its optionTemplates QueryList to populate its select options, so simple text labels will be displayed.`),this.optionTemplate$=this.optionTemplates?.changes.pipe((0,vt.U)(c=>c.map(m=>m))),this.state&&(this.state.requires.requiresAmpLevel$?this.onRequiresAmpCategory$=this.state.requires.requiresAmpLevel$:console.warn(`${this.field.id} field's form provides a state, but could not find requiresAmpLevel$ subject to attach.`),this.onValueChange$.pipe((0,ce.t)(this)).subscribe(c=>{c?(this.props.extraType=void 0,this.props.description=Xd.get(c)):this.props.description="Select an Assertion Type to select its AMP Category"}))}configurePlaceholder(){this.placeholder$=new Ge.X(this.props.placeholder),this.onRequiresAmpCategory$&&this.onRequiresAmpCategory$.pipe((0,ko.x)(),(0,ce.t)(this)).subscribe(c=>{this.props.extraType=void 0,c?(this.formControl.value||(this.props.extraType="description",this.props.description='Please provide the AMP/ASCO/CAP <a href="https://pubmed.ncbi.nlm.nih.gov/27993330/" target="_blank">somatic variant classification</a>.'),this.props.required=!0,this.props.disabled=!1):(this.props.required=!1,this.props.disabled=!0,this.resetField()),this.cdr.markForCheck()})}}return u.\u0275fac=function(c){return new(c||u)(e.Y36(e.sBO))},u.\u0275cmp=e.Xpm({type:u,selectors:[["cvc-amp-category-select"]],viewQuery:function(c,m){if(1&c&&e.Gf(ga,5,e.Rgc),2&c){let j;e.iGM(j=e.CRH())&&(m.optionTemplates=j)}},features:[e.qOj],decls:7,vars:15,consts:[[3,"cvcFormControl","cvcFormlyAttributes","cvcSelectMode","cvcPlaceholder","cvcCustomTemplate","cvcOptions","cvcShowError","cvcDisabled"],[4,"ngFor","ngForOf"],["selectedTemplate",""],["optionTemplates",""],["nz-typography","","nzType","secondary"],[1,"ant-select-selection-item-content"],["nzMode","closeable",3,"nzOnClose",4,"ngIf"],[4,"ngIf"],["nzMode","closeable",3,"nzOnClose"]],template:function(c,m){if(1&c&&(e._UZ(0,"cvc-enum-select",0),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.YNc(3,Ku,3,0,"ng-container",1),e.ALo(4,"ngrxPush"),e.YNc(5,t4,3,2,"ng-template",null,2,e.W1O)),2&c){const j=e.MAs(6);e.Q6J("cvcFormControl",m.formControl)("cvcFormlyAttributes",m.field)("cvcSelectMode",m.props.isMultiSelect?"multiple":"default")("cvcPlaceholder",e.lcZ(1,9,m.placeholder$))("cvcCustomTemplate",j)("cvcOptions",e.lcZ(2,11,m.selectOption$))("cvcShowError",m.showError)("cvcDisabled",m.props.disabled),e.xp6(3),e.Q6J("ngForOf",e.lcZ(4,13,m.ampCategoryEnum$))}},dependencies:[M.sg,M.O5,Wt.j,ge.ZU,Ke,F.fM,gr.t]}),u})();const eh={types:[{name:"amp-category-select",wrappers:["form-field"],component:Xp},{name:"amp-category-multi-select",wrappers:["form-field"],component:Xp,defaultOptions:{props:{label:"AMP/ASCO/CAP Categories",isMultiSelect:!0}}}]};let bp=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,t.UX,v.X0.forChild(eh),Wt.X,ge.ZJ,It.s,je,He]}),u})();const ep=["optionTemplates"];function th(u,y){if(1&u&&(e.ynx(0),e.TgZ(1,"em")(2,"span",6),e._uU(3),e.qZA()(),e.BQk()),2&u){const c=e.oxw(2).$implicit;e.xp6(3),e.Oqu(c.description)}}function nh(u,y){if(1&u&&(e.TgZ(0,"nz-tag",5),e._uU(1),e.qZA(),e.TgZ(2,"span",6),e.YNc(3,th,4,1,"ng-container",7),e.qZA()),2&u){const c=e.oxw().$implicit;e.xp6(1),e.Oqu(c.code),e.xp6(2),e.Q6J("ngIf",c.description)}}function n4(u,y){1&u&&(e.ynx(0),e.YNc(1,nh,4,2,"ng-template",null,4,e.W1O),e.BQk())}function oh(u,y){if(1&u&&(e.ynx(0),e.YNc(1,n4,3,0,"ng-container",3),e.ALo(2,"ngrxPush"),e.BQk()),2&u){const c=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,c.result$))}}function l2(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"div",8)(1,"cvc-entity-tag",9),e.NdJ("cvcOnClose",function(){const Be=e.CHM(c).$implicit,Mt=e.oxw();return e.KtG(Mt.onTagClose$.next(Be.nzValue))}),e.qZA()()}if(2&u){const c=y.$implicit,m=e.oxw();e.xp6(1),e.Q6J("cvcDisableLink",!0)("cvcHasTooltip",!0)("cvcCacheId","AcmgCode:"+c.nzValue)("cvcContext",m.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",m.props.isMultiSelect?"default":"closeable")}}const o4=Lt(_n(),ni());let Ju=(()=>{class u extends o4{constructor(c,m,j){super(),this.taq=c,this.tq=m,this.changeDetectorRef=j,this.defaultOptions={props:{entityName:{singular:"ACMG/AMP Code",plural:"ACMG/AMP Codes"},isMultiSelect:!1,requireType:!0,tooltip:"If applicable, please provide evidence criteria from the standards and guidelines for interpretation of sequence variants from ACMG/AMP.",placeholder:"Search ACMG/AMP Codes",requireTypePromptFn:(Be,Mt)=>`Select an ${Be} Type to search associated ACMG Code(s)`}},this.placeholder$=new Ge.X(void 0)}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEntitySelectField({typeaheadQuery:this.taq,typeaheadParam$:void 0,tagQuery:this.tq,getTypeaheadVarsFn:this.getTypeaheadVarsFn,getTypeaheadResultsFn:this.getTypeaheadResultsFn,getTagQueryVarsFn:this.getTagQueryVarsFn,getTagQueryResultsFn:this.getTagQueryResultsFn,getSelectedItemOptionFn:this.getSelectedItemOptionFn,getSelectOptionsFn:this.getSelectOptionsFn,changeDetectorRef:this.changeDetectorRef,selectComponent:this.selectComponent}),this.configurePlaceholders()}configureStateConnections(){if(this.state&&(this.stateEntityName=this.state.entityName,this.state.requires.requiresAcmgCodes$?this.onRequiresAcmgCode$=this.state.requires.requiresAcmgCodes$:console.warn(`${this.field.id} field's form provides a state, but could not find requiresAcmgCodes$ subject to attach.`),this.props.requireType)){const c=`${this.stateEntityName.toLowerCase()}Type$`;this.state.fields[c]?this.onEntityType$=this.state.fields[c]:console.error(`${this.field.id} requireType is true, however form state does not provide Subject ${c}.`)}}configurePlaceholders(){this.placeholder$.next(this.props.placeholders),this.onRequiresAcmgCode$&&this.onEntityType$&&(0,vo.a)([this.onRequiresAcmgCode$,this.onEntityType$]).pipe((0,ko.x)(),(0,ce.t)(this)).subscribe(([c,m])=>{!c&&m?(this.props.required=!1,this.props.disabled=!0,this.props.description=`${(0,Oe.E)(m)} ${this.state.entityName} does not include associated ACMG/AMP Code(s)`,this.props.extraType="prompt",this.resetField(),this.cdr.markForCheck()):this.props.requireType&&!m?(this.props.required=!1,this.props.disabled=!0,this.props.description=this.props.requireTypePromptFn(this.state.entityName,this.props.isMultiSelect),this.props.extraType="prompt"):c?(this.props.required=!0,this.props.disabled=!1,this.props.description='Please provide evidence criteria from the standards and guidelines for interpretation of sequence variants from ACMG/AMP in <a href="https://pubmed.ncbi.nlm.nih.gov/25741868/" target="_blank">Richards et. al. 2015</a>.',this.props.extraType="description"):(!c&&this.formControl.value||this.props.requireType&&!m&&this.formControl.value)&&this.resetField()})}getTypeaheadVarsFn(c){return{code:c}}getTypeaheadResultsFn(c){return c.data.acmgCodesTypeahead}getTagQueryResultsFn(c){return c.data.acmgCode}getTagQueryVarsFn(c){return{id:c}}getSelectedItemOptionFn(c){return{value:c.id,label:c.code}}getSelectOptionsFn(c,m){return c.map((j,Be)=>(console.log(j),{label:m.get(Be)||j.code,value:j.id}))}}return u.\u0275fac=function(c){return new(c||u)(e.Y36(Nn.O2u),e.Y36(Nn.AIY),e.Y36(e.sBO))},u.\u0275cmp=e.Xpm({type:u,selectors:[["cvc-acmg-code-select"]],viewQuery:function(c,m){if(1&c&&e.Gf(ep,5,e.Rgc),2&c){let j;e.iGM(j=e.CRH())&&(m.optionTemplates=j)}},features:[e.qOj],decls:9,vars:22,consts:[[3,"cvcSelectMode","cvcCustomTemplate","cvcFormControl","cvcFormlyAttributes","cvcEntityName","cvcPlaceholder","cvcResults","cvcOptions","cvcShowError","cvcDisabled","cvcLoading","cvcOnSearch","cvcOnOpenChange","cvcOnModelChange"],[4,"ngrxLet"],["selectedTemplate",""],[4,"ngFor","ngForOf"],["optionTemplates",""],["nz-tooltip",""],["nz-typography","","nzType","secondary"],[4,"ngIf"],[1,"ant-select-selection-item-content"],[3,"cvcDisableLink","cvcHasTooltip","cvcCacheId","cvcContext","cvcMode","cvcOnClose"]],template:function(c,m){if(1&c&&(e.TgZ(0,"cvc-entity-select",0),e.NdJ("cvcOnSearch",function(Be){return m.onSearch$.next(Be)})("cvcOnOpenChange",function(Be){return m.onOpenChange$.next(Be)})("cvcOnModelChange",function(Be){return m.props.change&&m.props.change(m.field,Be)}),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.ALo(3,"ngrxPush"),e.ALo(4,"ngrxPush"),e.ALo(5,"ngrxPush"),e.qZA(),e.YNc(6,oh,3,3,"ng-container",1),e.YNc(7,l2,2,5,"ng-template",null,2,e.W1O)),2&c){const j=e.MAs(8);e.Q6J("cvcSelectMode",m.props.isMultiSelect?"multiple":"default")("cvcCustomTemplate",j)("cvcFormControl",m.formControl)("cvcFormlyAttributes",m.field)("cvcEntityName",m.props.entityName)("cvcPlaceholder",e.lcZ(1,12,m.placeholder$))("cvcResults",e.lcZ(2,14,m.result$))("cvcOptions",e.lcZ(3,16,m.selectOption$))("cvcShowError",m.showError)("cvcDisabled",m.onRequiresAcmgCode$&&!e.lcZ(4,18,m.onRequiresAcmgCode$))("cvcLoading",e.lcZ(5,20,m.isLoading$)),e.xp6(6),e.Q6J("ngrxLet",m.onSearch$)}},dependencies:[M.sg,M.O5,F.eJ,Xe.SY,ge.ZU,Wt.j,Kn,xo.J,F.fM],changeDetection:0}),u})();const r4={types:[{name:"acmg-code-select",wrappers:["form-field"],component:Ju,defaultOptions:{props:{label:"ACMG/AMP Code"}}},{name:"acmg-code-multi-select",wrappers:["form-field"],component:Ju,defaultOptions:{props:{isMultiSelect:!0,label:"ACMG/AMP Code(s)"}}}]};let qu=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,t.UX,v.X0.forChild(r4),yt.L,On.sL,We.LV,Wn.$6,zn.Qp,Re.PV,Pe.o7,R.Jb,Xe.cg,Ye.zf,s.U5,B.ic,ge.ZJ,Wt.X,je,Kt,It.s,Te.x,Fs]}),u})();const zd=["optionTemplates"];function s4(u,y){if(1&u&&(e.ynx(0),e.TgZ(1,"em")(2,"span",6),e._uU(3),e.qZA()(),e.BQk()),2&u){const c=e.oxw(2).$implicit;e.xp6(3),e.Oqu(c.description)}}function ih(u,y){if(1&u&&(e.TgZ(0,"nz-tag",5),e._uU(1),e.qZA(),e.TgZ(2,"span",6),e.YNc(3,s4,4,1,"ng-container",7),e.qZA()),2&u){const c=e.oxw().$implicit;e.xp6(1),e.Oqu(c.code),e.xp6(2),e.Q6J("ngIf",c.description)}}function a4(u,y){1&u&&(e.ynx(0),e.YNc(1,ih,4,2,"ng-template",null,4,e.W1O),e.BQk())}function c4(u,y){if(1&u&&(e.ynx(0),e.YNc(1,a4,3,0,"ng-container",3),e.ALo(2,"ngrxPush"),e.BQk()),2&u){const c=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,c.result$))}}function l4(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"div",8)(1,"cvc-entity-tag",9),e.NdJ("cvcOnClose",function(){const Be=e.CHM(c).$implicit,Mt=e.oxw();return e.KtG(Mt.onTagClose$.next(Be.nzValue))}),e.qZA()()}if(2&u){const c=y.$implicit,m=e.oxw();e.xp6(1),e.Q6J("cvcDisableLink",!0)("cvcHasTooltip",!0)("cvcCacheId","ClingenCode:"+c.nzValue)("cvcContext",m.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",m.props.isMultiSelect?"default":"closeable")}}const rh=Lt(_n(),ni());let sh=(()=>{class u extends rh{constructor(c,m,j){super(),this.taq=c,this.tq=m,this.changeDetectorRef=j,this.exclusiveCodes=new Set,this.exclusiveSelected=!1,this.defaultOptions={props:{entityName:{singular:"ClinGen/CGC/VICC Code",plural:"ClinGen/CGC/VICC Codes"},isMultiSelect:!1,requireType:!0,tooltip:"If applicable, please provide evidence classifications from the Standards for the classification of pathogenicity of somatic variants in cancer (oncogenicity).",placeholder:"Search ClinGen/CGC/VICC Codes",requireTypePromptFn:(Be,Mt)=>`Select an ${Be} Type to search associated ClinGen Code(s)`}},this.placeholder$=new Ge.X(void 0)}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEntitySelectField({typeaheadQuery:this.taq,typeaheadParam$:void 0,tagQuery:this.tq,getTypeaheadVarsFn:this.getTypeaheadVarsFn,getTypeaheadResultsFn:this.getTypeaheadResultsFn,getTagQueryVarsFn:this.getTagQueryVarsFn,getTagQueryResultsFn:this.getTagQueryResultsFn,getSelectedItemOptionFn:this.getSelectedItemOptionFn,getSelectOptionsFn:this.getSelectOptionsFn,changeDetectorRef:this.changeDetectorRef,selectComponent:this.selectComponent}),this.configurePlaceholders(),this.onValueChange$.pipe((0,ce.t)(this)).subscribe(c=>{if(c&&Array.isArray(c)&&c.length>1){const m=c.find(j=>this.exclusiveCodes.has(j));m?(this.previousDescription=this.props.description,this.previousDescriptionType=this.props.extraType,this.props.description="You have selected N/A which precludes selecting any other codes. Please remove it if you wish to select additional codes.",this.exclusiveSelected=!0,this.formControl.setValue([m])):this.exclusiveSelected=!1}this.previousDescription&&!this.exclusiveSelected&&(this.props.description=this.previousDescription,this.props.extraType=this.previousDescriptionType),this.cdr.detectChanges()})}configureStateConnections(){if(this.state&&(this.stateEntityName=this.state.entityName,this.state.requires.requiresClingenCodes$?this.onRequiresClingenCode$=this.state.requires.requiresClingenCodes$:console.warn(`${this.field.id} field's form provides a state, but could not find requiresClingenCodes$ subject to attach.`),this.props.requireType)){const c=`${this.stateEntityName.toLowerCase()}Type$`;this.state.fields[c]?this.onEntityType$=this.state.fields[c]:console.error(`${this.field.id} requireType is true, however form state does not provide Subject ${c}.`)}}configurePlaceholders(){this.placeholder$.next(this.props.placeholders),this.onRequiresClingenCode$&&this.onEntityType$&&(0,vo.a)([this.onRequiresClingenCode$,this.onEntityType$]).pipe((0,ko.x)(),(0,ce.t)(this)).subscribe(([c,m])=>{!c&&m?(this.props.required=!1,this.props.disabled=!0,this.props.description=`${(0,Oe.E)(m)} ${this.state.entityName} does not include associated ClinGen/CGC/VICC Code(s)`,this.props.extraType="prompt",this.resetField(),this.cdr.markForCheck()):this.props.requireType&&!m?(this.props.required=!1,this.props.disabled=!0,this.props.description=this.props.requireTypePromptFn(this.state.entityName,this.props.isMultiSelect),this.props.extraType="prompt"):c?(this.props.required=!0,this.props.disabled=!1,this.props.description='Please provide the evidence classifications from the Standards for the classification of pathogenicity of somatic variants in cancer (oncogenicity) in <a href="https://pubmed.ncbi.nlm.nih.gov/25741868/" target="_blank">Horak et. al. 2022.</a>.',this.props.extraType="description"):(!c&&this.formControl.value||this.props.requireType&&!m&&this.formControl.value)&&this.resetField()})}getTypeaheadVarsFn(c){return{code:c}}getTypeaheadResultsFn(c){return c.data.clingenCodesTypeahead.forEach(m=>{m.exclusive&&this.exclusiveCodes.add(m.id)}),c.data.clingenCodesTypeahead}getTagQueryResultsFn(c){return c.data.clingenCode}getTagQueryVarsFn(c){return{id:c}}getSelectedItemOptionFn(c){return{value:c.id,label:c.code}}getSelectOptionsFn(c,m){return c.map((j,Be)=>({label:m.get(Be)||j.code,value:j.id}))}}return u.\u0275fac=function(c){return new(c||u)(e.Y36(Nn.E2B),e.Y36(Nn.R8F),e.Y36(e.sBO))},u.\u0275cmp=e.Xpm({type:u,selectors:[["cvc-clingen-code-select"]],viewQuery:function(c,m){if(1&c&&e.Gf(zd,5,e.Rgc),2&c){let j;e.iGM(j=e.CRH())&&(m.optionTemplates=j)}},features:[e.qOj],decls:9,vars:22,consts:[[3,"cvcSelectMode","cvcCustomTemplate","cvcFormControl","cvcFormlyAttributes","cvcEntityName","cvcPlaceholder","cvcResults","cvcOptions","cvcShowError","cvcDisabled","cvcLoading","cvcOnSearch","cvcOnOpenChange","cvcOnModelChange"],[4,"ngrxLet"],["selectedTemplate",""],[4,"ngFor","ngForOf"],["optionTemplates",""],["nz-tooltip",""],["nz-typography","","nzType","secondary"],[4,"ngIf"],[1,"ant-select-selection-item-content"],[3,"cvcDisableLink","cvcHasTooltip","cvcCacheId","cvcContext","cvcMode","cvcOnClose"]],template:function(c,m){if(1&c&&(e.TgZ(0,"cvc-entity-select",0),e.NdJ("cvcOnSearch",function(Be){return m.onSearch$.next(Be)})("cvcOnOpenChange",function(Be){return m.onOpenChange$.next(Be)})("cvcOnModelChange",function(Be){return m.props.change&&m.props.change(m.field,Be)}),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.ALo(3,"ngrxPush"),e.ALo(4,"ngrxPush"),e.ALo(5,"ngrxPush"),e.qZA(),e.YNc(6,c4,3,3,"ng-container",1),e.YNc(7,l4,2,5,"ng-template",null,2,e.W1O)),2&c){const j=e.MAs(8);e.Q6J("cvcSelectMode",m.props.isMultiSelect?"multiple":"default")("cvcCustomTemplate",j)("cvcFormControl",m.formControl)("cvcFormlyAttributes",m.field)("cvcEntityName",m.props.entityName)("cvcPlaceholder",e.lcZ(1,12,m.placeholder$))("cvcResults",e.lcZ(2,14,m.result$))("cvcOptions",e.lcZ(3,16,m.selectOption$))("cvcShowError",m.showError)("cvcDisabled",m.onRequiresClingenCode$&&!e.lcZ(4,18,m.onRequiresClingenCode$))("cvcLoading",e.lcZ(5,20,m.isLoading$)),e.xp6(6),e.Q6J("ngrxLet",m.onSearch$)}},dependencies:[M.sg,M.O5,F.eJ,Xe.SY,ge.ZU,Wt.j,Kn,xo.J,F.fM],changeDetection:0}),u})();const Sp={types:[{name:"clingen-code-select",wrappers:["form-field"],component:sh,defaultOptions:{props:{label:"ClinGen/CGC/VICC Code"}}},{name:"clingen-code-multi-select",wrappers:["form-field"],component:sh,defaultOptions:{props:{isMultiSelect:!0,label:"ClinGen/CGC/VICC Code(s)"}}}]};let Td=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,t.UX,v.X0.forChild(Sp),yt.L,On.sL,We.LV,Wn.$6,zn.Qp,Re.PV,Pe.o7,R.Jb,Xe.cg,Ye.zf,s.U5,B.ic,ge.ZJ,Wt.X,je,Kt,It.s,Te.x,Fs]}),u})();const ah=["optionTemplates"];function u2(u,y){if(1&u&&(e.TgZ(0,"nz-tag",5),e._uU(1),e.qZA()),2&u){const c=e.oxw().$implicit;e.xp6(1),e.Oqu(c.name)}}function Ep(u,y){1&u&&(e.ynx(0),e.YNc(1,u2,2,1,"ng-template",null,4,e.W1O),e.BQk())}function Xu(u,y){if(1&u&&(e.ynx(0),e.YNc(1,Ep,3,0,"ng-container",3),e.ALo(2,"ngrxPush"),e.BQk()),2&u){const c=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,c.result$))}}function tp(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"div",6)(1,"cvc-entity-tag",7),e.NdJ("cvcOnClose",function(){const Be=e.CHM(c).$implicit,Mt=e.oxw();return e.KtG(Mt.onTagClose$.next(Be.nzValue))}),e.qZA()()}if(2&u){const c=y.$implicit,m=e.oxw();e.xp6(1),e.Q6J("cvcDisableLink",!0)("cvcCacheId","NccnGuideline:"+c.nzValue)("cvcContext",m.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",m.props.isMultiSelect?"default":"closeable")}}const ch=Lt(_n(),ni());let xp=(()=>{class u extends ch{constructor(c,m,j){super(),this.taq=c,this.tq=m,this.changeDetectorRef=j,this.defaultOptions={props:{entityName:{singular:"NCCN Guideline",plural:"NCCN Guidelines"},isMultiSelect:!1,requireType:!1,tooltip:"If applicable, please provide cancer (e.g., Breast Cancer) for the appropriate NCCN guideline.",placeholder:"Search NCCN Guidelines"}},this.placeholder$=new Ge.X(void 0)}ngAfterViewInit(){this.configureBaseField(),this.configureEntitySelectField({typeaheadQuery:this.taq,typeaheadParam$:void 0,tagQuery:this.tq,getTypeaheadVarsFn:this.getTypeaheadVarsFn,getTypeaheadResultsFn:this.getTypeaheadResultsFn,getTagQueryVarsFn:this.getTagQueryVarsFn,getTagQueryResultsFn:this.getTagQueryResultsFn,getSelectedItemOptionFn:this.getSelectedItemOptionFn,getSelectOptionsFn:this.getSelectOptionsFn,changeDetectorRef:this.changeDetectorRef,selectComponent:this.selectComponent})}getTypeaheadVarsFn(c){return{name:c}}getTypeaheadResultsFn(c){return c.data.nccnGuidelinesTypeahead}getTagQueryResultsFn(c){return c.data.nccnGuideline}getTagQueryVarsFn(c){return{id:c}}getSelectedItemOptionFn(c){return{value:c.id,label:c.name}}getSelectOptionsFn(c,m){return c.map((j,Be)=>({label:m.get(Be)||j.name,value:j.id}))}}return u.\u0275fac=function(c){return new(c||u)(e.Y36(Nn.sA8),e.Y36(Nn.N$2),e.Y36(e.sBO))},u.\u0275cmp=e.Xpm({type:u,selectors:[["cvc-nccn-guideline-select"]],viewQuery:function(c,m){if(1&c&&e.Gf(ah,5,e.Rgc),2&c){let j;e.iGM(j=e.CRH())&&(m.optionTemplates=j)}},features:[e.qOj],decls:8,vars:20,consts:[[3,"cvcSelectMode","cvcCustomTemplate","cvcFormControl","cvcFormlyAttributes","cvcEntityName","cvcPlaceholder","cvcResults","cvcOptions","cvcShowError","cvcDisabled","cvcLoading","cvcOnSearch","cvcOnOpenChange","cvcOnModelChange"],[4,"ngrxLet"],["selectedTemplate",""],[4,"ngFor","ngForOf"],["optionTemplates",""],["nz-tooltip",""],[1,"ant-select-selection-item-content"],[3,"cvcDisableLink","cvcCacheId","cvcContext","cvcMode","cvcOnClose"]],template:function(c,m){if(1&c&&(e.TgZ(0,"cvc-entity-select",0),e.NdJ("cvcOnSearch",function(Be){return m.onSearch$.next(Be)})("cvcOnOpenChange",function(Be){return m.onOpenChange$.next(Be)})("cvcOnModelChange",function(Be){return m.props.change&&m.props.change(m.field,Be)}),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.ALo(3,"ngrxPush"),e.ALo(4,"ngrxPush"),e.qZA(),e.YNc(5,Xu,3,3,"ng-container",1),e.YNc(6,tp,2,4,"ng-template",null,2,e.W1O)),2&c){const j=e.MAs(7);e.Q6J("cvcSelectMode",m.props.isMultiSelect?"multiple":"default")("cvcCustomTemplate",j)("cvcFormControl",m.formControl)("cvcFormlyAttributes",m.field)("cvcEntityName",m.props.entityName)("cvcPlaceholder",e.lcZ(1,12,m.placeholder$))("cvcResults",e.lcZ(2,14,m.result$))("cvcOptions",e.lcZ(3,16,m.selectOption$))("cvcShowError",m.showError)("cvcDisabled",!1)("cvcLoading",e.lcZ(4,18,m.isLoading$)),e.xp6(5),e.Q6J("ngrxLet",m.onSearch$)}},dependencies:[M.sg,F.eJ,Xe.SY,Wt.j,Kn,xo.J,F.fM],changeDetection:0}),u})();const u4={types:[{name:"nccn-guideline-select",wrappers:["form-field"],component:xp,defaultOptions:{props:{label:"NCCN Guideline"}}},{name:"nccn-guideline-multi-select",wrappers:["form-field"],component:xp,defaultOptions:{props:{isMultiSelect:!0,label:"NCCN Guideline(s)"}}}]};let d4=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,t.UX,v.X0.forChild(u4),yt.L,On.sL,We.LV,Wn.$6,zn.Qp,Re.PV,Pe.o7,R.Jb,Xe.cg,Ye.zf,s.U5,B.ic,ge.ZJ,Wt.X,je,Kt,It.s,Te.x,Fs]}),u})();const p4=Lt(_n()),lh={types:[{name:"nccn-guideline-version-input",component:(()=>{class u extends p4{constructor(c){super(),this.cdr=c,this.defaultDescription="Please enter the version of the NCCN guideline you're referencing in the format <strong>Version.Year</strong>",this.defaultOptions={validators:{nccnVersionNumber:{expression:m=>{if(m.value){if(/^\d{1,2}\.\d{4}$/.test(m.value)){let j=+m.value.split(".")[1];return j>=2e3&&j<=(new Date).getFullYear()+1}return!1}return!0},message:(m,j)=>`"${j.formControl?.value}" does not fit the format Version.Year`}},props:{label:"NCCN Guideline Version",extraType:"description",description:this.defaultDescription}}}ngAfterViewInit(){this.configureBaseField(),this.state&&this.state.formReady$?this.state.formReady$.pipe((0,De.h)(c=>c),(0,Ei.q)(1),(0,ce.t)(this)).subscribe(c=>{this.configureField()}):this.configureField()}configureField(){this.state?.fields.nccnGuidelineId$.pipe((0,ce.t)(this)).subscribe(c=>{c?(this.props.disabled=!1,this.props.required=!0,this.props.extraType="description",this.props.description=this.defaultDescription):(this.props.disabled=!0,this.props.required=!1,this.props.extraType="prompt",this.props.description="NCCN Guideline Version is only required when NCCN Guideline is specified.",this.formControl.setValue(void 0))})}}return u.\u0275fac=function(c){return new(c||u)(e.Y36(e.sBO))},u.\u0275cmp=e.Xpm({type:u,selectors:[["cvc-nccn-guideline-version-input"]],features:[e.qOj],decls:1,vars:2,consts:[["nz-input","","placeholder","ex: 1.2023",3,"formControl","formlyAttributes"]],template:function(c,m){1&c&&e._UZ(0,"input",0),2&c&&e.Q6J("formControl",m.formControl)("formlyAttributes",m.field)},dependencies:[t.Fj,t.JJ,t.oH,v.JD,Pe.Zp],encapsulation:2,changeDetection:0}),u})(),wrappers:["form-field"]}]};let h4=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,t.UX,v.X0.forChild(lh),Pe.o7,je]}),u})();const Dp=Lt(_n()),Ka={types:[{name:"fda-regulatory-approval-checkbox",wrappers:["form-field"],component:(()=>{class u extends Dp{constructor(){super(...arguments),this.defaultDescription="Check this if the referenced therapy is approved for use by the FDA in the specific disease associated with the Assertion (as in a listing <a href='https://www.cancer.gov/about-cancer/treatment/drugs/cancer-type' target='_blank'>here</a>.)",this.defaultOptions={props:{hideLabel:!1,label:"FDA Regulatory Approval",description:this.defaultDescription}}}ngAfterViewInit(){this.configureBaseField(),this.state&&(this.state.formReady$?this.state.formReady$.pipe((0,De.h)(c=>c),(0,Ei.q)(1),(0,ce.t)(this)).subscribe(c=>{this.configureField()}):this.configureField())}configureField(){this.state?.requires.allowsFdaApproval$.pipe((0,ce.t)(this)).subscribe(c=>{c?(this.props.disabled=!1,this.props.extraType="description",this.props.description=this.defaultDescription,void 0===this.formControl.value&&this.formControl.setValue(!1)):(this.props.disabled=!0,this.props.description="FDA Regulatory Approval does not apply to this Assertion Type",this.formControl.setValue(void 0))})}}return u.\u0275fac=function(){let y;return function(m){return(y||(y=e.n5z(u)))(m||u)}}(),u.\u0275cmp=e.Xpm({type:u,selectors:[["cvc-fda-regulatory-approval-checkbox"]],features:[e.qOj],decls:2,vars:4,consts:[["nz-checkbox","",3,"nzIndeterminate","formControl","formlyAttributes","ngModelChange"]],template:function(c,m){1&c&&(e.TgZ(0,"label",0),e.NdJ("ngModelChange",function(Be){return m.props.change&&m.props.change(m.field,Be)}),e._uU(1),e.qZA()),2&c&&(e.Q6J("nzIndeterminate",m.props.indeterminate&&null==m.formControl.value)("formControl",m.formControl)("formlyAttributes",m.field),e.xp6(1),e.hij(" ",m.props.label,"\n"))},dependencies:[t.JJ,t.oH,Yt.Ie,v.JD],changeDetection:0}),u})()}]};let uh=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,t.UX,Yt.Wr,v.X0.forChild(Ka),je]}),u})();const p2=Lt(_n()),f2={types:[{name:"fda-companion-test-checkbox",wrappers:["form-field"],component:(()=>{class u extends p2{constructor(){super(...arguments),this.defaultDescription='Select Yes if an FDA approved companion test exists for the variant and therapy associated with the Assertion (such as tests listed <a href="https://www.fda.gov/medical-devices/in-vitro-diagnostics/list-cleared-or-approved-companion-diagnostic-devices-in-vitro-and-imaging-tools" target="_blank">here</a>).',this.defaultOptions={props:{hideLabel:!1,label:"FDA Companion Test",description:this.defaultDescription}}}ngAfterViewInit(){this.configureBaseField(),this.state&&(this.state.formReady$?this.state.formReady$.pipe((0,De.h)(c=>c),(0,Ei.q)(1),(0,ce.t)(this)).subscribe(c=>{this.configureField()}):this.configureField())}configureField(){this.state?.fields.fdaRegulatoryApproval$.pipe((0,ce.t)(this)).subscribe(c=>{c?(this.props.disabled=!1,this.props.extraType="description",this.props.description=this.defaultDescription,void 0===this.formControl.value&&this.formControl.setValue(!1)):(this.props.disabled=!0,this.props.description="FDA Companion Test only applies when Regulatory Approval is selected",this.formControl.setValue(void 0))})}}return u.\u0275fac=function(){let y;return function(m){return(y||(y=e.n5z(u)))(m||u)}}(),u.\u0275cmp=e.Xpm({type:u,selectors:[["cvc-fda-companion-test-checkbox"]],features:[e.qOj],decls:2,vars:4,consts:[["nz-checkbox","",3,"nzIndeterminate","formControl","formlyAttributes","ngModelChange"]],template:function(c,m){1&c&&(e.TgZ(0,"label",0),e.NdJ("ngModelChange",function(Be){return m.props.change&&m.props.change(m.field,Be)}),e._uU(1),e.qZA()),2&c&&(e.Q6J("nzIndeterminate",m.props.indeterminate&&null==m.formControl.value)("formControl",m.formControl)("formlyAttributes",m.field),e.xp6(1),e.hij(" ",m.props.label,"\n"))},dependencies:[t.JJ,t.oH,Yt.Ie,v.JD],changeDetection:0}),u})()}]};let m2=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,t.UX,Yt.Wr,v.X0.forChild(f2),je]}),u})();const dh=["optionTemplates"];function ph(u,y){if(1&u&&(e.TgZ(0,"nz-tag")(1,"strong"),e._uU(2),e.qZA()()),2&u){const c=e.oxw().$implicit;e.xp6(2),e.Oqu(c)}}function g2(u,y){1&u&&(e.ynx(0),e.YNc(1,ph,3,1,"ng-template",null,3,e.W1O),e.BQk())}function hh(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"nz-tag",7),e.NdJ("nzOnClose",function(j){e.CHM(c);const Be=e.oxw(2);return e.KtG(Be.onTagClose$.next(j))}),e.TgZ(1,"strong"),e._uU(2),e.qZA()()}if(2&u){const c=e.oxw().$implicit;e.xp6(2),e.Oqu(c.nzValue)}}function Md(u,y){if(1&u&&(e.ynx(0),e._uU(1),e.BQk()),2&u){const c=e.oxw().$implicit;e.xp6(1),e.hij(" ",c.nzValue," ")}}function fh(u,y){if(1&u&&(e.TgZ(0,"div",4),e.YNc(1,hh,3,1,"nz-tag",5),e.YNc(2,Md,2,1,"ng-container",6),e.qZA()),2&u){const c=e.oxw();e.xp6(1),e.Q6J("ngIf",!c.props.isMultiSelect),e.xp6(1),e.Q6J("ngIf",c.props.isMultiSelect)}}const mh=Lt(_n(),lt());let Op=(()=>{class u extends mh{constructor(c){super(),this.cdr=c,this.defaultOptions={props:{label:"Reference Build",required:!1,isMultiSelect:!1,description:"Select the human genome reference sequence from which these coordinates are obtained",placeholder:"Select Reference Build"}},this.buildEnum$=new Ge.X([])}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEnumSelectField({optionEnum$:this.buildEnum$,optionTemplate$:this.optionTemplate$,changeDetectorRef:this.cdr})}configureStateConnections(){this.placeholder$=new Ge.X(this.props.placeholder),this.buildEnum$.next((0,bo.o6)(Nn.JDX).map(c=>c)),this.optionTemplates||console.error(`${this.field.id} could not find its optionTemplates QueryList to populate its select options, so simple text labels will be displayed.`),this.optionTemplate$=this.optionTemplates?.changes.pipe((0,vt.U)(c=>c.map(m=>m)))}}return u.\u0275fac=function(c){return new(c||u)(e.Y36(e.sBO))},u.\u0275cmp=e.Xpm({type:u,selectors:[["cvc-reference-build-select"]],viewQuery:function(c,m){if(1&c&&e.Gf(dh,5,e.Rgc),2&c){let j;e.iGM(j=e.CRH())&&(m.optionTemplates=j)}},features:[e.qOj],decls:7,vars:15,consts:[[3,"cvcFormControl","cvcFormlyAttributes","cvcSelectMode","cvcPlaceholder","cvcCustomTemplate","cvcOptions","cvcShowError","cvcDisabled"],[4,"ngFor","ngForOf"],["selectedTemplate",""],["optionTemplates",""],[1,"ant-select-selection-item-content"],["nzMode","closeable",3,"nzOnClose",4,"ngIf"],[4,"ngIf"],["nzMode","closeable",3,"nzOnClose"]],template:function(c,m){if(1&c&&(e._UZ(0,"cvc-enum-select",0),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.YNc(3,g2,3,0,"ng-container",1),e.ALo(4,"ngrxPush"),e.YNc(5,fh,3,2,"ng-template",null,2,e.W1O)),2&c){const j=e.MAs(6);e.Q6J("cvcFormControl",m.formControl)("cvcFormlyAttributes",m.field)("cvcSelectMode",m.props.isMultiSelect?"multiple":"default")("cvcPlaceholder",e.lcZ(1,9,m.placeholder$))("cvcCustomTemplate",j)("cvcOptions",e.lcZ(2,11,m.selectOption$))("cvcShowError",m.showError)("cvcDisabled",m.props.disabled),e.xp6(3),e.Q6J("ngForOf",e.lcZ(4,13,m.buildEnum$))}},dependencies:[M.sg,M.O5,Wt.j,Ke,F.fM]}),u})();const Fo={types:[{name:"reference-build-select",wrappers:["form-field"],component:Op},{name:"reference-build-multi-select",wrappers:["form-field"],component:Op,defaultOptions:{props:{label:"Levels",isMultiSelect:!0}}}]};let gh=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,t.UX,v.X0.forChild(Fo),Wt.X,It.s,je,He]}),u})();const vh=["optionTemplates"];function v2(u,y){if(1&u&&(e.ynx(0),e.TgZ(1,"em"),e._UZ(2,"span",8),e.ALo(3,"highlightTypeahead"),e.qZA(),e.BQk()),2&u){const c=e.oxw(2).$implicit,m=e.oxw().ngrxLet;e.xp6(2),e.Q6J("innerHtml",e.xi3(3,1,c.soid,m),e.oJD)}}function f4(u,y){if(1&u&&(e._UZ(0,"cvc-entity-tag",5),e.TgZ(1,"span",6),e.YNc(2,v2,4,4,"ng-container",7),e.qZA()),2&u){const c=e.oxw().$implicit,m=e.oxw().ngrxLet;e.Q6J("cvcDisableLink",!0)("cvcCacheId",c.__typename+":"+c.id)("cvcEmphasize",m),e.xp6(2),e.Q6J("ngIf",c.soid)}}function _h(u,y){1&u&&(e.ynx(0),e.YNc(1,f4,3,4,"ng-template",null,4,e.W1O),e.BQk())}function m4(u,y){if(1&u&&(e.ynx(0),e.YNc(1,_h,3,0,"ng-container",3),e.ALo(2,"ngrxPush"),e.BQk()),2&u){const c=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,c.result$))}}function g4(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"div",9)(1,"cvc-entity-tag",10),e.NdJ("cvcOnClose",function(){const Be=e.CHM(c).$implicit,Mt=e.oxw();return e.KtG(Mt.onTagClose$.next(Be.nzValue))}),e.qZA()()}if(2&u){const c=y.$implicit,m=e.oxw();e.xp6(1),e.Q6J("cvcCacheId","VariantType:"+c.nzValue)("cvcContext",m.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",m.props.isMultiSelect?"default":"closeable")}}const yh=Lt(_n(),ni());let Ch=(()=>{class u extends yh{constructor(c,m,j){super(),this.taq=c,this.tq=m,this.changeDetectorRef=j,this.defaultOptions={props:{entityName:{singular:"VariantType",plural:"VariantTypes"},isMultiSelect:!1,placeholders:{default:"Search Variant Types",multiDefault:"Select VariantType(s)"},description:'Add one or more variant types from the <a href="http://www.sequenceontology.org/browser/" target="_blank">Sequence Ontology</a> (e.g., missense, loss-of-function). Be specific as possible, avoid the addition of root concepts, and use the sequence_variant tree of the sequence ontology.',extraType:"prompt"}},this.placeholder$=new Ge.X(this.defaultOptions.props.placeholders.default)}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEntitySelectField({typeaheadQuery:this.taq,typeaheadParam$:void 0,tagQuery:this.tq,getTypeaheadVarsFn:this.getTypeaheadVarsFn,getTypeaheadResultsFn:this.getTypeaheadResultsFn,getTagQueryVarsFn:this.getTagQueryVarsFn,getTagQueryResultsFn:this.getTagQueryResultsFn,getSelectedItemOptionFn:this.getSelectedItemOptionFn,getSelectOptionsFn:this.getSelectOptionsFn,changeDetectorRef:this.changeDetectorRef,selectOpen$:this.selectOpen$,selectComponent:this.selectComponent}),this.configurePlaceholders()}configureStateConnections(){}configurePlaceholders(){}getTypeaheadVarsFn(c){return{name:c}}getTypeaheadResultsFn(c){return c.data.variantTypeTypeahead}getTagQueryVarsFn(c){return{id:c}}getTagQueryResultsFn(c){return c.data.variantType}getSelectedItemOptionFn(c){return{value:c.id,label:c.name}}getSelectOptionsFn(c,m){return c.map((j,Be)=>({label:m.get(Be)||j.name,value:j.id}))}}return u.\u0275fac=function(c){return new(c||u)(e.Y36(Nn.jmY),e.Y36(Nn._nE),e.Y36(e.sBO))},u.\u0275cmp=e.Xpm({type:u,selectors:[["cvc-variant-type-select"]],viewQuery:function(c,m){if(1&c&&e.Gf(vh,5,e.Rgc),2&c){let j;e.iGM(j=e.CRH())&&(m.optionTemplates=j)}},features:[e.qOj],decls:8,vars:19,consts:[[3,"cvcSelectMode","cvcCustomTemplate","cvcFormControl","cvcFormlyAttributes","cvcEntityName","cvcPlaceholder","cvcResults","cvcOptions","cvcShowError","cvcLoading","cvcOnSearch","cvcOnOpenChange","cvcOnModelChange"],[4,"ngrxLet"],["selectedTemplate",""],[4,"ngFor","ngForOf"],["optionTemplates",""],[3,"cvcDisableLink","cvcCacheId","cvcEmphasize"],["nz-typography","","nzType","secondary"],[4,"ngIf"],["nz-typography","","nzType","secondary",3,"innerHtml"],[1,"ant-select-selection-item-content"],[3,"cvcCacheId","cvcContext","cvcMode","cvcOnClose"]],template:function(c,m){if(1&c&&(e.TgZ(0,"cvc-entity-select",0),e.NdJ("cvcOnSearch",function(Be){return m.onSearch$.next(Be)})("cvcOnOpenChange",function(Be){return m.onOpenChange$.next(Be)})("cvcOnModelChange",function(Be){return m.props.change&&m.props.change(m.field,Be)}),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.ALo(3,"ngrxPush"),e.ALo(4,"ngrxPush"),e.qZA(),e.YNc(5,m4,3,3,"ng-container",1),e.YNc(6,g4,2,3,"ng-template",null,2,e.W1O)),2&c){const j=e.MAs(7);e.Q6J("cvcSelectMode",m.props.isMultiSelect?"multiple":"default")("cvcCustomTemplate",j)("cvcFormControl",m.formControl)("cvcFormlyAttributes",m.field)("cvcEntityName",m.props.entityName)("cvcPlaceholder",e.lcZ(1,11,m.placeholder$))("cvcResults",e.lcZ(2,13,m.result$))("cvcOptions",e.lcZ(3,15,m.selectOption$))("cvcShowError",m.showError)("cvcLoading",e.lcZ(4,17,m.isLoading$)),e.xp6(5),e.Q6J("ngrxLet",m.onSearch$)}},dependencies:[M.sg,M.O5,F.eJ,ge.ZU,Kn,xo.J,F.fM,I.A],changeDetection:0}),u})();const zh={types:[{name:"variant-type-select",wrappers:["form-field"],component:Ch,defaultOptions:{props:{label:"Variant Type"}}},{name:"variant-type-multi-select",wrappers:["form-field"],component:Ch,defaultOptions:{props:{isMultiSelect:!0,label:"Variant Types"}}}]};let v4=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,t.UX,v.X0.forChild(zh),yt.L,On.sL,We.LV,Wn.$6,zn.Qp,Re.PV,Pe.o7,R.Jb,Xe.cg,Ye.zf,s.U5,B.ic,ge.ZJ,Wt.X,je,Kt,It.s,Te.x]}),u})();var Ja=a(2701);function _2(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"cvc-string-tag",5),e.NdJ("cvcOnClose",function(){const Be=e.CHM(c).$implicit,Mt=e.oxw(2);return e.KtG(Mt.tagClosed(Be))}),e.qZA()}if(2&u){const c=y.$implicit;e.Q6J("cvcMode","closeable")("cvcLabel",c)}}function Th(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"div"),e.YNc(1,_2,1,2,"cvc-string-tag",3),e.ALo(2,"ngrxPush"),e.TgZ(3,"input",4),e.NdJ("keydown.enter",function(j){e.CHM(c);const Be=e.oxw();return e.KtG(Be.onEnter(j))}),e.qZA()()}if(2&u){const c=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,2,c.clinvarIds$)),e.xp6(2),e.Q6J("placeholder",c.props.placeholder)}}const Mh=Lt(_n(),cl);let qa=(()=>{class u extends Mh{constructor(c){super(),this.cdr=c,this.defaultOptions={modelOptions:{updateOn:"blur"},props:{label:"Enter value",placeholder:"Enter value and hit Return"}},this.clinvarIds$=new Ge.X([]),this.values=new Set,this.showClinvarIdEntry$=new Ge.X(!1),this.selectModel=void 0,this.selectOptions=[{value:Ja.li.NotApplicable,label:"Clinvar IDs not applicable for this variant"},{value:Ja.li.NoneFound,label:"Clinvar IDs do not exist for this variant"},{value:Ja.li.Found,label:"Clinvar IDs were found for this variant"},{value:void 0,label:""}]}optionSelected(c){const m=c;this.values.clear(),this.clinvarIds$.next([]),null!=m?m==Ja.li.Found?(this.showClinvarIdEntry$.next(!0),this.formControl.setValue([])):m==Ja.li.NoneFound?(this.showClinvarIdEntry$.next(!1),this.formControl.setValue(["NONE FOUND"])):m==Ja.li.NotApplicable&&(console.log("HERE"),this.showClinvarIdEntry$.next(!1),this.formControl.setValue(["NA"])):(this.showClinvarIdEntry$.next(!1),this.formControl.setValue([]),this.clinvarIds$.next([]))}onEnter(c){let m=c.target;m.value&&(this.values.add(m.value),m.value="");let j=Array.from(this.values);this.clinvarIds$.next(j),this.formControl.setValue(j)}tagClosed(c){this.values.delete(c);let m=Array.from(this.values);this.clinvarIds$.next(m),this.formControl.setValue(m),this.clinvarIds$.next(m)}ngAfterViewInit(){this.configureBaseField(),this.configureStringTagField();const c=this.formControl.value;c&&Array.isArray(c)&&("NONE FOUND"==c[0]?this.selectModel=Ja.li.NoneFound:"N/A"==c[0]?this.selectModel=Ja.li.NotApplicable:(this.selectModel=Ja.li.Found,c.forEach(m=>this.values.add(m)),this.showClinvarIdEntry$.next(!0)),this.clinvarIds$.next(c),this.cdr.detectChanges())}}return u.\u0275fac=function(c){return new(c||u)(e.Y36(e.sBO))},u.\u0275cmp=e.Xpm({type:u,selectors:[["cvc-clinvar-input"]],features:[e.qOj],decls:4,vars:7,consts:[["nzAllowClear","",3,"nzOptions","ngModel","ngModelChange"],[4,"ngIf"],["hidden","","nz-input","",3,"formControl","formlyAttributes"],[3,"cvcMode","cvcLabel","cvcOnClose",4,"ngFor","ngForOf"],["nz-input","",3,"placeholder","keydown.enter"],[3,"cvcMode","cvcLabel","cvcOnClose"]],template:function(c,m){1&c&&(e.TgZ(0,"nz-select",0),e.NdJ("ngModelChange",function(Be){return m.optionSelected(Be)}),e.qZA(),e.YNc(1,Th,4,4,"div",1),e.ALo(2,"ngrxPush"),e._UZ(3,"input",2)),2&c&&(e.Q6J("nzOptions",m.selectOptions)("ngModel",m.selectModel),e.xp6(1),e.Q6J("ngIf",e.lcZ(2,5,m.showClinvarIdEntry$)),e.xp6(2),e.Q6J("formControl",m.formControl)("formlyAttributes",m.field))},dependencies:[M.sg,M.O5,t.Fj,t.JJ,t.oH,t.On,v.JD,Pe.Zp,We.Vq,ul,F.fM],changeDetection:0}),u})();const t1={types:[{name:"clinvar-input",wrappers:["form-field"],component:qa},{name:"clinvar-multi-input",wrappers:["form-field"],component:qa,defaultOptions:{props:{isRepeatItem:!0}}}]};let bh=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,t.UX,t.u5,v.X0.forChild(t1),Ve.F,Pe.o7,s.U5,We.LV,Fs]}),u})();const np={types:[{name:"cvc-cancel-button",component:(()=>{class u extends v.fS{constructor(c){super(),this.location=c}cancelClicked(){this.location.back()}}return u.\u0275fac=function(c){return new(c||u)(e.Y36(M.Ye))},u.\u0275cmp=e.Xpm({type:u,selectors:[["cvc-cancel-button"]],features:[e.qOj],decls:2,vars:0,consts:[["nz-button","","type","button","nzType","default","nzDanger","",1,"cancel-button",3,"click"]],template:function(c,m){1&c&&(e.TgZ(0,"button",0),e.NdJ("click",function(){return m.cancelClicked()}),e._uU(1," Cancel\n"),e.qZA())},dependencies:[On.ix,To.w,jo.dQ],styles:[".cancel-button[_ngcontent-%COMP%]{margin-right:10px}"],changeDetection:0}),u})()}]};let n1=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,t.UX,v.X0.forChild(np),On.sL]}),u})(),wp=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,Kc,I1,Va,Ql,Rd,y1,oe,Mn,pc,Dn,an,yc,hc,uu,x1,fu,m1,Tp,Uc,bp,qu,Td,d4,h4,uh,m2,gh,v4,bh,n1]}),u})();var va;function Sh(u,y){if(1&u&&e._uU(0),2&u){const c=e.oxw();e.hij(" ",c.props.addFormTitle,"\n")}}const Pp=function(){return[6,6]};let o1=((va=class extends v.n2{constructor(){super(),this.contentTemplate$=new Mo.t}ngAfterViewInit(){this.field.props&&this.field.props.addFormContent?this.contentTemplate$.next(this.field.props.addFormContent):console.error(`${this.field.id} add-entity-form wrapper failed to find parent field's props.addFormContent TemplateRef.`)}}).\u0275fac=function(y){return new(y||va)},va.\u0275cmp=e.Xpm({type:va,selectors:[["cvc-add-entity-form-wrapper"]],features:[e.qOj],decls:10,vars:7,consts:[[3,"nzGutter"],["nzFlex","auto"],["fieldComponent",""],["nzFlex","20px"],["type","button","nz-button","","nzType","primary","nzSize","default","nzShape","circle","nz-popover","",3,"disabled","nzPopoverTitle","nzPopoverContent"],["nz-icon","","nzType","plus-circle","nzTheme","outline"],["titleTemplate",""]],template:function(y,c){if(1&y&&(e.TgZ(0,"nz-row",0)(1,"nz-col",1),e.GkF(2,null,2),e.qZA(),e.TgZ(4,"nz-col",3)(5,"button",4),e.ALo(6,"ngrxPush"),e._UZ(7,"span",5),e.qZA()()(),e.YNc(8,Sh,1,1,"ng-template",null,6,e.W1O)),2&y){const m=e.MAs(9);e.Q6J("nzGutter",e.DdM(6,Pp)),e.xp6(5),e.Q6J("disabled",null==c.field.props?null:c.field.props.disabled)("nzPopoverTitle",m)("nzPopoverContent",e.lcZ(6,4,c.contentTemplate$))}},dependencies:[On.ix,To.w,jo.dQ,Wn.lU,Re.Ls,R.t3,R.SK,F.fM],styles:[".add-button[_ngcontent-%COMP%]{font-size:24px;color:#cfcfdf}"],changeDetection:0}),va);o1=(0,ne.gn)([(0,ce.c)()],o1);const op={wrappers:[{name:"add-entity-form",component:o1}]};let Eh=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,v.X0.forChild(op),On.sL,Wn.$6,Re.PV,R.Jb]}),u})();const _4={wrappers:[{name:"field-grid",component:(()=>{class u extends v.n2{get errorState(){return this.showError?"error":""}ngOnInit(){this.props.grid={cols:2,...this.props.grid?this.props.grid:void 0}}}return u.\u0275fac=function(){let y;return function(m){return(y||(y=e.n5z(u)))(m||u)}}(),u.\u0275cmp=e.Xpm({type:u,selectors:[["cvc-field-grid"]],features:[e.qOj],decls:3,vars:1,consts:[[1,"field-grid",3,"ngClass"],["fieldComponent",""]],template:function(c,m){1&c&&(e.TgZ(0,"div",0),e.GkF(1,null,1),e.qZA()),2&c&&e.Q6J("ngClass","cols-"+m.props.grid.cols)},dependencies:[M.mk],styles:[".field-grid.cols-2[_ngcontent-%COMP%]     formly-group:first-of-type{display:grid;grid-template-columns:repeat(2,1fr);gap:8px}.field-grid.cols-3[_ngcontent-%COMP%]     formly-group:first-of-type{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}.field-grid.cols-4[_ngcontent-%COMP%]     formly-group:first-of-type{display:grid;grid-template-columns:repeat(4,1fr);gap:8px}"],changeDetection:0}),u})()}]};let y4=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,t.UX,s.U5,R.Jb,v.X0.forChild(_4)]}),u})();function C4(u,y){if(1&u&&(e.TgZ(0,"nz-col",4),e._UZ(1,"formly-field",5),e.qZA()),2&u){const c=y.$implicit;e.Q6J("nzSpan",(null==c.props?null:c.props.colSpan)||12),e.xp6(1),e.Q6J("field",c)}}function Dh(u,y){}const z4=function(){return[6,6]},T4={wrappers:[{name:"form-card",component:(()=>{class u extends v.n2{get errorState(){return this.showError?"error":""}constructor(){super()}ngOnInit(){this.props.gutterHorizontal=this.props.gutterHorizontal||8,this.props.gutterVertical=this.props.gutterVertical||8}}return u.\u0275fac=function(c){return new(c||u)},u.\u0275cmp=e.Xpm({type:u,selectors:[["cvc-form-card"]],features:[e.qOj],decls:5,vars:5,consts:[[3,"nzTitle","nzExtra"],[3,"nzGutter"],[3,"nzSpan",4,"ngFor","ngForOf"],["cardExtra",""],[3,"nzSpan"],[3,"field"]],template:function(c,m){if(1&c&&(e.TgZ(0,"nz-card",0)(1,"nz-row",1),e.YNc(2,C4,2,2,"nz-col",2),e.qZA()(),e.YNc(3,Dh,0,0,"ng-template",null,3,e.W1O)),2&c){const j=e.MAs(4);e.Q6J("nzTitle",m.props.title)("nzExtra",j),e.xp6(1),e.Q6J("nzGutter",e.DdM(4,z4)),e.xp6(1),e.Q6J("ngForOf",m.field.fieldGroup)}},dependencies:[M.sg,v.cw,R.t3,R.SK,Gn.bd]}),u})()}]};let wh=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,t.u5,v.X0.forChild(T4),R.Jb,Gn.vh,Yt.Wr]}),u})();const T2={wrappers:[{name:"form-footer",component:(()=>{class u extends v.n2{ngOnInit(){}}return u.\u0275fac=function(){let y;return function(m){return(y||(y=e.n5z(u)))(m||u)}}(),u.\u0275cmp=e.Xpm({type:u,selectors:[["cvc-form-footer"]],features:[e.qOj],decls:4,vars:0,consts:[[1,"form-footer"],["nzSpan","24",1,"submit-col"],["fieldComponent",""]],template:function(c,m){1&c&&(e.TgZ(0,"nz-row",0)(1,"nz-col",1),e.GkF(2,null,2),e.qZA()())},dependencies:[R.t3,R.SK],styles:[".form-footer[_ngcontent-%COMP%]{margin-top:1em;border-radius:8px;background-color:#f0f0f0;padding:1em}.submit-col[_ngcontent-%COMP%]{text-align:right}"],changeDetection:0}),u})()}]};let bs=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,R.Jb,v.X0.forChild(T2)]}),u})();var M2=a(9333),Ph=a(8125),Ih=a(9382);let Ah=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,Re.PV,R.Jb,Gn.vh,Ih.we,Ph.q6,ar.Ph,Wt.X,ge.ZJ,k.s]}),u})(),b4=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,On.sL,An.Rt,Fn.b1]}),u})();var b2=a(553);const S2={VALID:"success",INVALID:"error",PENDING:"processing",DISABLED:"default"};let S4=(()=>{class u{constructor(){this.tagColor="default"}set cvcFormControlStatus(c){this._status=c,this.tagColor=c?S2[c]:"default"}get cvcFormControlStatus(){return this._status}}return u.\u0275fac=function(c){return new(c||u)},u.\u0275cmp=e.Xpm({type:u,selectors:[["cvc-form-status-tag"]],inputs:{cvcFormControlStatus:"cvcFormControlStatus"},decls:3,vars:4,consts:[[3,"nzColor"]],template:function(c,m){1&c&&(e.TgZ(0,"nz-tag",0),e._uU(1),e.ALo(2,"lowercase"),e.qZA()),2&c&&(e.Q6J("nzColor",m.tagColor),e.xp6(1),e.hij(" ",m.cvcFormControlStatus?e.lcZ(2,2,m.cvcFormControlStatus):"UNKNOWN","\n"))},dependencies:[Wt.j,M.i8]}),u})();function E4(u,y){if(1&u&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&u){const c=e.oxw(2).ctrl;e.xp6(1),e.hij(" ",c.value," ")}}function E2(u,y){1&u&&(e.TgZ(0,"span",8),e._uU(1," undefined "),e.qZA())}function x2(u,y){if(1&u&&(e.TgZ(0,"nz-list-item")(1,"nz-list-item-meta")(2,"nz-list-item-meta-title"),e._uU(3),e.qZA(),e.TgZ(4,"nz-list-item-meta-description"),e.YNc(5,E4,2,1,"span",5),e.YNc(6,E2,2,0,"span",6),e.qZA()(),e.TgZ(7,"nz-list-item-extra"),e._UZ(8,"cvc-form-status-tag",7),e.qZA()()),2&u){const c=e.oxw(),m=c.key,j=c.ctrl;e.xp6(3),e.hij(" ",m," "),e.xp6(2),e.Q6J("ngIf",j.value),e.xp6(1),e.Q6J("ngIf",!j.value),e.xp6(2),e.Q6J("cvcFormControlStatus",j.status)}}function Fh(u,y){}const x4=function(u,y){return{key:u,ctrl:y}};function D2(u,y){if(1&u&&e.YNc(0,Fh,0,0,"ng-template",12),2&u){const c=y.$implicit;e.oxw(3);const m=e.MAs(3);e.Q6J("ngTemplateOutlet",m)("ngTemplateOutletContext",e.WLB(2,x4,c.key,c.value))}}function O2(u,y){if(1&u&&(e.TgZ(0,"strong"),e._uU(1),e.qZA()),2&u){const c=e.oxw(2).key;e.xp6(1),e.Oqu(c)}}function w2(u,y){if(1&u&&(e.TgZ(0,"nz-list-item")(1,"nz-card",9)(2,"nz-list",10),e.YNc(3,D2,1,5,null,4),e.ALo(4,"keyvalue"),e.qZA()(),e.YNc(5,O2,2,1,"ng-template",null,11,e.W1O),e.qZA()),2&u){const c=e.oxw(),m=c.key,j=c.ctrl;e.xp6(1),e.Q6J("nzTitle",m),e.xp6(2),e.Q6J("ngForOf",e.lcZ(4,2,j.controls))}}function P2(u,y){if(1&u&&(e.YNc(0,x2,9,4,"nz-list-item",5),e.YNc(1,w2,7,4,"nz-list-item",5)),2&u){const c=y.ctrl;e.Q6J("ngIf",!c.controls),e.xp6(1),e.Q6J("ngIf",c.controls)}}function Xa(u,y){}function Nh(u,y){if(1&u&&e.YNc(0,Xa,0,0,"ng-template",12),2&u){const c=y.$implicit;e.oxw();const m=e.MAs(3);e.Q6J("ngTemplateOutlet",m)("ngTemplateOutletContext",e.WLB(2,x4,c.key,c.value))}}function I2(u,y){if(1&u&&(e.ynx(0),e.TgZ(1,"nz-list",2),e.YNc(2,P2,2,2,"ng-template",null,3,e.W1O),e.qZA(),e.YNc(4,Nh,1,5,null,4),e.ALo(5,"keyvalue"),e.BQk()),2&u){const c=y.ngIf;e.xp6(4),e.Q6J("ngForOf",e.lcZ(5,1,c.controls))}}function D4(u,y){1&u&&e._uU(0," No AbstractFormControl provided. ")}let A2=(()=>{class u{set cvcAbstractControl(c){if(!c)throw new Error("cvc-form-debug-field-list requires valid cvcFormControl Input.");this._cvcFormControl=c,this.formControl=c}get cvcFormControl(){return this._cvcFormControl}constructor(){}ngOnInit(){}}return u.\u0275fac=function(c){return new(c||u)},u.\u0275cmp=e.Xpm({type:u,selectors:[["cvc-form-debug-field-list"]],inputs:{cvcAbstractControl:"cvcAbstractControl"},decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["noFormControl",""],["nzSize","small"],["ctrlTemplateRef",""],[4,"ngFor","ngForOf"],[4,"ngIf"],["style","padding: 0px 4px; color: white; background-color: #ccc",4,"ngIf"],[3,"cvcFormControlStatus"],[2,"padding","0px 4px","color","white","background-color","#ccc"],["nzSize","small",2,"width","100%",3,"nzTitle"],["nzSize","small",2,"padding","0"],["cardExtra",""],[3,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(c,m){if(1&c&&(e.YNc(0,I2,6,3,"ng-container",0),e.YNc(1,D4,1,0,"ng-template",null,1,e.W1O)),2&c){const j=e.MAs(2);e.Q6J("ngIf",m.formControl)("ngIfElse",j)}},dependencies:[M.sg,M.O5,M.tP,Gn.bd,ar.n_,ar.AA,ar.yi,ar.IO,ar.Pb,ar.yw,S4,M.Nd],styles:["[_nghost-%COMP%]     nz-card .ant-card-body{padding:6px 0}"]}),u})();var r1;function O4(u,y){if(1&u&&(e.ynx(0),e._UZ(1,"ngx-json-viewer",9),e.BQk()),2&u){const c=e.oxw();e.xp6(1),e.Q6J("json",c.watchModel)}}function Ip(u,y){if(1&u&&(e.ynx(0),e.TgZ(1,"nz-descriptions",10)(2,"nz-descriptions-item",11),e._UZ(3,"cvc-form-status-tag",12),e.qZA(),e.TgZ(4,"nz-descriptions-item",13),e._uU(5),e.qZA(),e.TgZ(6,"nz-descriptions-item",14),e._uU(7),e.qZA(),e.TgZ(8,"nz-descriptions-item",15),e._uU(9),e.qZA(),e.TgZ(10,"nz-descriptions-item",16),e._uU(11),e.qZA(),e.TgZ(12,"nz-descriptions-item",17),e._uU(13),e.qZA()(),e.BQk()),2&u){const c=e.oxw();e.xp6(1),e.Q6J("nzColumn",1),e.xp6(2),e.Q6J("cvcFormControlStatus",null==c.cvcForm?null:c.cvcForm.status),e.xp6(2),e.hij(" ",null==c.cvcForm?null:c.cvcForm.pending," "),e.xp6(2),e.hij(" ",null==c.cvcForm?null:c.cvcForm.touched," "),e.xp6(2),e.hij(" ",null==c.cvcForm?null:c.cvcForm.valid," "),e.xp6(2),e.hij(" ",null==c.cvcForm?null:c.cvcForm.dirty," "),e.xp6(2),e.hij(" ",null==c.cvcForm?null:c.cvcForm.enabled," ")}}function Lh(u,y){if(1&u&&(e.ynx(0),e._UZ(1,"cvc-form-debug-field-list",18),e.BQk()),2&u){const c=e.oxw();e.xp6(1),e.Q6J("cvcAbstractControl",c.cvcForm)}}function W0(u,y){1&u&&(e.ynx(0),e._uU(1," State Content "),e.BQk())}function w4(u,y){if(1&u&&(e.TgZ(0,"nz-row")(1,"nz-col",19),e._uU(2," Form Details "),e.qZA(),e.TgZ(3,"nz-col",20),e._UZ(4,"cvc-form-status-tag",12),e.qZA()()),2&u){const c=e.oxw();e.xp6(4),e.Q6J("cvcFormControlStatus",null==c.cvcForm?null:c.cvcForm.status)}}let Ap=((r1=class{constructor(y){this.cdr=y,this.selectedIndex=0}ngOnInit(){if(!this.cvcForm)throw new Error("cvc-form-debug requires valid cvcForm Input.");this.valueChange$=new Ge.X(this.cvcForm.value),this.statusChange$=new Ge.X(this.cvcForm.status),this.formChange$=ci([this.statusChange$,this.valueChange$]),this.watchModel=this.cvcModel,this.subscriptions=[this.cvcForm.valueChanges.subscribe(y=>{this.watchModel={...this.cvcModel},this.valueChange$.next(y)}),this.cvcForm.statusChanges.subscribe(y=>{this.statusChange$.next(y)}),this.formChange$.subscribe(y=>{this.cdr.detectChanges()})]}}).\u0275fac=function(y){return new(y||r1)(e.Y36(e.sBO))},r1.\u0275cmp=e.Xpm({type:r1,selectors:[["cvc-form-debug"]],inputs:{cvcForm:"cvcForm",cvcModel:"cvcModel"},decls:14,vars:7,consts:[["nzSize","small","nzBordered","true",3,"nzTitle"],["nzSize","small",3,"nzSelectedIndex","nzSelectedIndexChange"],["nzTitle","Model"],["nzTitle","Controls"],["nzTitle","State"],["nzTitle","Form Status"],[3,"ngSwitch"],[4,"ngSwitchCase"],["cardTitle",""],[3,"json"],["nzBordered","","nzSize","small",3,"nzColumn"],["nzTitle","status"],[3,"cvcFormControlStatus"],["nzTitle","pending"],["nzTitle","touched"],["nzTitle","valid"],["nzTitle","dirty"],["nzTitle","enabled"],[3,"cvcAbstractControl"],["nzFlex","2"],["nzFlex","3",1,"form-status-col"]],template:function(y,c){if(1&y&&(e.TgZ(0,"nz-card",0)(1,"nz-card-tab")(2,"nz-tabset",1),e.NdJ("nzSelectedIndexChange",function(j){return c.selectedIndex=j}),e._UZ(3,"nz-tab",2)(4,"nz-tab",3)(5,"nz-tab",4)(6,"nz-tab",5),e.qZA()(),e.ynx(7,6),e.YNc(8,O4,2,1,"ng-container",7),e.YNc(9,Ip,14,7,"ng-container",7),e.YNc(10,Lh,2,1,"ng-container",7),e.YNc(11,W0,2,0,"ng-container",7),e.BQk(),e.qZA(),e.YNc(12,w4,5,1,"ng-template",null,8,e.W1O)),2&y){const m=e.MAs(13);e.Q6J("nzTitle",m),e.xp6(2),e.Q6J("nzSelectedIndex",c.selectedIndex),e.xp6(5),e.Q6J("ngSwitch",c.selectedIndex),e.xp6(1),e.Q6J("ngSwitchCase",0),e.xp6(1),e.Q6J("ngSwitchCase",3),e.xp6(1),e.Q6J("ngSwitchCase",1),e.xp6(1),e.Q6J("ngSwitchCase",2)}},dependencies:[M.RF,M.n9,R.t3,R.SK,Gn.bd,Gn._i,Ih.xH,Ih.xw,Ph.R7,Ph.uj,k.Y,A2,S4],styles:["[_nghost-%COMP%]{display:block}.form-status-col[_ngcontent-%COMP%]{text-align:right}.form-status-col[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]:last-child{margin-right:0}"],changeDetection:0}),r1);var s1;function P4(u,y){if(1&u&&(e.TgZ(0,"nz-col",4),e._UZ(1,"cvc-form-debug",5),e.qZA()),2&u){const c=e.oxw();e.Q6J("nzSpan",8),e.xp6(1),e.Q6J("cvcForm",c.form)("cvcModel",c.model)}}Ap=(0,ne.gn)([(0,ce.c)({arrayName:"subscriptions"})],Ap);const kh=function(){return[8,8]};let Rh=((s1=class extends v.n2{constructor(y){super()}get errorState(){return this.showError?"error":""}ngOnInit(){this.props.title=this.props.title||"Form Card",this.props.submitLabel=this.props.submitLabel||"Submit",this.props.showDevPanel=!b2.N.production&&(this.props.showDevPanel||false)}}).\u0275fac=function(y){return new(y||s1)(e.Y36(e.sBO))},s1.\u0275cmp=e.Xpm({type:s1,selectors:[["cvc-form-layout-wrapper"]],features:[e.qOj],decls:5,vars:4,consts:[[3,"nzGutter"],[1,"form-col",3,"nzSpan"],["fieldComponent",""],["class","status-col",3,"nzSpan",4,"ngIf"],[1,"status-col",3,"nzSpan"],[3,"cvcForm","cvcModel"]],template:function(y,c){1&y&&(e.TgZ(0,"nz-row",0)(1,"nz-col",1),e.GkF(2,null,2),e.qZA(),e.YNc(4,P4,2,3,"nz-col",3),e.qZA()),2&y&&(e.Q6J("nzGutter",e.DdM(3,kh)),e.xp6(1),e.Q6J("nzSpan",c.props.showDevPanel?16:24),e.xp6(3),e.Q6J("ngIf",c.props.showDevPanel))},dependencies:[M.O5,R.t3,R.SK,Ap],changeDetection:0}),s1);Rh=(0,ne.gn)([(0,ce.c)({arrayName:"subscriptions"})],Rh);const F2={wrappers:[{name:"form-layout",component:Rh}]};let Vh=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,v.X0.forChild(F2),On.sL,Gn.vh,Re.PV,Wt.X,Ih.we,Wn.$6,ar.Ph,R.Jb,M2.h,b4,Ah,k.s]}),u})(),I4=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,Vh,wh,bs,je,y4,Eh]}),u})(),N2=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({providers:[{provide:v.l7,multi:!0,useFactory:S,deps:[i.gz]}],imports:[v.X0.forRoot(Y),t.UX,s.U5,d.u,I4,k.s,t.UX,v.X0,d.u,s.U5,I4,wp]}),u})()},2701:(xt,Se,a)=>{function t(P){let S={value:void 0,unset:void 0};return P&&P.trim().length>0?S.value=P.trim():S.unset=!0,S}function i(P){let S={value:void 0,unset:void 0};return void 0!==P?S.value=P:S.unset=!0,S}a.d(Se,{aP:()=>U,li:()=>v,uP:()=>i,xt:()=>t});var v=(()=>((v=v||{})[v.NotApplicable=0]="NotApplicable",v[v.NoneFound=1]="NoneFound",v[v.Found=2]="Found",v))();const U=[{value:void 0,label:""},{value:"1",label:"1"},{value:"2",label:"2"},{value:"3",label:"3"},{value:"4",label:"4"},{value:"5",label:"5"},{value:"6",label:"6"},{value:"7",label:"7"},{value:"8",label:"8"},{value:"9",label:"9"},{value:"10",label:"10"},{value:"11",label:"11"},{value:"12",label:"12"},{value:"13",label:"13"},{value:"14",label:"14"},{value:"15",label:"15"},{value:"16",label:"16"},{value:"17",label:"17"},{value:"18",label:"18"},{value:"19",label:"19"},{value:"20",label:"20"},{value:"21",label:"21"},{value:"22",label:"22"},{value:"X",label:"X"},{value:"Y",label:"Y"},{value:"MT",label:"MT"}]},313:(xt,Se,a)=>{a.d(Se,{A4J:()=>ic,A94:()=>Sc,AIY:()=>cu,AMF:()=>da,AO2:()=>F,B0s:()=>hc,B97:()=>yi,BQZ:()=>x,BTF:()=>uo,BYO:()=>zu,Bk6:()=>Q1,Bo4:()=>Ls,Cp0:()=>N,D9L:()=>eu,Del:()=>U1,DkJ:()=>di,DzV:()=>As,E1C:()=>_c,E2B:()=>rl,E8d:()=>S,EFm:()=>Pa,EH_:()=>cl,EwB:()=>Is,F1Y:()=>y1,F3s:()=>In,F4e:()=>dl,FB1:()=>It,FJi:()=>Et,FNv:()=>se,FOU:()=>mc,Fvz:()=>de,GYx:()=>Zs,Gbq:()=>li,Gnp:()=>Pu,HUC:()=>vn,Hmr:()=>Wo,HwR:()=>Aa,IP1:()=>g1,IRu:()=>Wt,IZ6:()=>$i,JDX:()=>nn,Kk:()=>ui,Kmw:()=>sc,L5n:()=>oc,L8L:()=>js,LHC:()=>O1,LLl:()=>$c,LUc:()=>Vi,LiH:()=>Z1,Lr0:()=>Y1,MCG:()=>R1,MNv:()=>ys,MPi:()=>vs,MYm:()=>or,Mgx:()=>w,MsG:()=>G,N$2:()=>D1,NQC:()=>Dt,O2u:()=>wa,OHm:()=>nr,OIL:()=>ns,OfU:()=>L,P_b:()=>fi,Q4m:()=>dc,QVn:()=>lu,Qtd:()=>xl,Qzn:()=>Ys,R8F:()=>mr,R8w:()=>e,RTy:()=>V,RYL:()=>sl,Rdc:()=>rr,SrV:()=>tn,Sx0:()=>ze,T1I:()=>Ea,TNk:()=>wc,Tg0:()=>V1,TiL:()=>Gs,Tq1:()=>ke,Tt7:()=>Or,UIR:()=>Hi,UWf:()=>ps,VZq:()=>Sr,WFw:()=>d1,WGV:()=>Pc,WOS:()=>Du,WRV:()=>hs,X5f:()=>Cr,XQi:()=>L1,Xft:()=>b1,Y6e:()=>ol,YMi:()=>sn,Y_K:()=>P1,Ybm:()=>Yo,ZYZ:()=>zi,Zo2:()=>pn,_3P:()=>k,_Wm:()=>P,_eC:()=>Ur,_jb:()=>Br,_nE:()=>Tu,aC3:()=>w1,bgg:()=>ac,c$m:()=>wn,cCu:()=>ua,cEv:()=>Ne,cIw:()=>Mc,cMj:()=>Mu,czh:()=>Ia,d4o:()=>$e,dDn:()=>bc,dGO:()=>ca,db2:()=>rs,eDl:()=>sa,eJ3:()=>au,eY8:()=>lo,ejK:()=>yl,fow:()=>fe,fwG:()=>Oo,g0X:()=>bl,ghc:()=>Qn,h01:()=>Y,hVB:()=>pa,h_Y:()=>Od,huM:()=>Ve,i44:()=>Dn,iGM:()=>bi,iJT:()=>$a,iST:()=>Ai,io:()=>Kr,iwm:()=>v,jMx:()=>El,jmY:()=>la,jw9:()=>Xe,k7O:()=>Rt,kQf:()=>Ca,kQl:()=>Re,kqt:()=>A,l$X:()=>Yr,l4w:()=>Xs,lYz:()=>Ft,lcA:()=>Bs,m$d:()=>J1,m55:()=>O,mII:()=>wr,mdl:()=>s,mki:()=>pl,mpB:()=>Yt,nSb:()=>Va,nnL:()=>ra,o71:()=>je,oRL:()=>ve,olA:()=>pu,otH:()=>us,pHu:()=>xu,pP7:()=>We,pR8:()=>m1,q1D:()=>Nu,q8c:()=>ct,q9q:()=>xs,qf4:()=>to,qgP:()=>yu,rJ8:()=>Ce,rZD:()=>Ht,rzy:()=>Fi,sA8:()=>_s,sBY:()=>Oc,sLD:()=>Ya,sfv:()=>pe,sjj:()=>F1,tI1:()=>ge,tJ6:()=>et,tWC:()=>T1,td:()=>Po,ti:()=>Ds,tji:()=>tl,tw_:()=>ho,u4i:()=>Q,uBv:()=>U,ubO:()=>Zn,vMt:()=>Ta,vjc:()=>Ns,vv6:()=>iu,vxe:()=>z1,vz2:()=>Hr,wJ2:()=>R,wRZ:()=>Da,wbP:()=>ou,wg3:()=>Cl,wkr:()=>qt,wpb:()=>Pe,xlL:()=>be,y1h:()=>K,yic:()=>un,yqR:()=>j1,z8D:()=>xc,zOE:()=>_u,z_7:()=>La,zpu:()=>mu,zwS:()=>hr});var t=a(9111),i=a(5879),v=(()=>((v=v||{}).Na="NA",v.TierIii="TIER_III",v.TierIiLevelC="TIER_II_LEVEL_C",v.TierIiLevelD="TIER_II_LEVEL_D",v.TierIv="TIER_IV",v.TierILevelA="TIER_I_LEVEL_A",v.TierILevelB="TIER_I_LEVEL_B",v))(),s=(()=>((s=s||{}).DoesNotSupport="DOES_NOT_SUPPORT",s.Supports="SUPPORTS",s))(),k=(()=>((k=k||{}).AdverseResponse="ADVERSE_RESPONSE",k.Benign="BENIGN",k.BetterOutcome="BETTER_OUTCOME",k.LikelyBenign="LIKELY_BENIGN",k.LikelyOncogenic="LIKELY_ONCOGENIC",k.LikelyPathogenic="LIKELY_PATHOGENIC",k.Na="NA",k.Negative="NEGATIVE",k.Oncogenic="ONCOGENIC",k.Pathogenic="PATHOGENIC",k.PoorOutcome="POOR_OUTCOME",k.Positive="POSITIVE",k.ReducedSensitivity="REDUCED_SENSITIVITY",k.Resistance="RESISTANCE",k.Sensitivityresponse="SENSITIVITYRESPONSE",k.UncertainSignificance="UNCERTAIN_SIGNIFICANCE",k))(),Q=(()=>((Q=Q||{}).AmpLevel="AMP_LEVEL",Q.AssertionDirection="ASSERTION_DIRECTION",Q.AssertionType="ASSERTION_TYPE",Q.DiseaseName="DISEASE_NAME",Q.EvidenceItemsCount="EVIDENCE_ITEMS_COUNT",Q.Id="ID",Q.Significance="SIGNIFICANCE",Q.Status="STATUS",Q.Summary="SUMMARY",Q.TherapyName="THERAPY_NAME",Q))(),U=(()=>((U=U||{}).Diagnostic="DIAGNOSTIC",U.Oncogenic="ONCOGENIC",U.Predictive="PREDICTIVE",U.Predisposing="PREDISPOSING",U.Prognostic="PROGNOSTIC",U))(),P=(()=>((P=P||{}).And="AND",P.Or="OR",P))(),S=(()=>((S=S||{}).EvidenceItemCount="EVIDENCE_ITEM_COUNT",S.Name="NAME",S.NctId="NCT_ID",S.SourceCount="SOURCE_COUNT",S))(),w=(()=>((w=w||{}).Conflict="CONFLICT",w.Expired="EXPIRED",w.Missing="MISSING",w.Valid="VALID",w))(),L=(()=>((L=L||{}).Assertion="ASSERTION",L.EvidenceItem="EVIDENCE_ITEM",L.Gene="GENE",L.MolecularProfile="MOLECULAR_PROFILE",L.Source="SOURCE",L.Variant="VARIANT",L.VariantGroup="VARIANT_GROUP",L))(),Y=(()=>((Y=Y||{}).Created="CREATED",Y.LastModified="LAST_MODIFIED",Y))(),e=(()=>((e=e||{}).AssertionCount="ASSERTION_COUNT",e.Doid="DOID",e.EvidenceItemCount="EVIDENCE_ITEM_COUNT",e.GeneCount="GENE_COUNT",e.Name="NAME",e.VariantCount="VARIANT_COUNT",e))(),F=(()=>((F=F||{}).Accepted="ACCEPTED",F.AssertionAccepted="ASSERTION_ACCEPTED",F.AssertionRejected="ASSERTION_REJECTED",F.AssertionReverted="ASSERTION_REVERTED",F.AssertionSubmitted="ASSERTION_SUBMITTED",F.Commented="COMMENTED",F.CuratedSourceSuggestion="CURATED_SOURCE_SUGGESTION",F.DeprecatedMolecularProfile="DEPRECATED_MOLECULAR_PROFILE",F.DeprecatedVariant="DEPRECATED_VARIANT",F.Flagged="FLAGGED",F.FlagResolved="FLAG_RESOLVED",F.PublicationSuggested="PUBLICATION_SUGGESTED",F.Rejected="REJECTED",F.RejectedSourceSuggestion="REJECTED_SOURCE_SUGGESTION",F.RequeuedSourceSuggestion="REQUEUED_SOURCE_SUGGESTION",F.Reverted="REVERTED",F.RevisionAccepted="REVISION_ACCEPTED",F.RevisionRejected="REVISION_REJECTED",F.RevisionSuggested="REVISION_SUGGESTED",F.RevisionSuperseded="REVISION_SUPERSEDED",F.Submitted="SUBMITTED",F))(),R=(()=>((R=R||{}).Organization="ORGANIZATION",R.Subject="SUBJECT",R.Unscoped="UNSCOPED",R.User="USER",R))(),ge=(()=>((ge=ge||{}).DoesNotSupport="DOES_NOT_SUPPORT",ge.Na="NA",ge.Supports="SUPPORTS",ge))(),ze=(()=>((ze=ze||{}).A="A",ze.B="B",ze.C="C",ze.D="D",ze.E="E",ze))(),K=(()=>((K=K||{}).AdverseResponse="ADVERSE_RESPONSE",K.Benign="BENIGN",K.BetterOutcome="BETTER_OUTCOME",K.DominantNegative="DOMINANT_NEGATIVE",K.GainOfFunction="GAIN_OF_FUNCTION",K.LikelyBenign="LIKELY_BENIGN",K.LikelyPathogenic="LIKELY_PATHOGENIC",K.LossOfFunction="LOSS_OF_FUNCTION",K.Na="NA",K.Negative="NEGATIVE",K.Neomorphic="NEOMORPHIC",K.Oncogenicity="ONCOGENICITY",K.Pathogenic="PATHOGENIC",K.PoorOutcome="POOR_OUTCOME",K.Positive="POSITIVE",K.Predisposition="PREDISPOSITION",K.Protectiveness="PROTECTIVENESS",K.ReducedSensitivity="REDUCED_SENSITIVITY",K.Resistance="RESISTANCE",K.Sensitivityresponse="SENSITIVITYRESPONSE",K.UnalteredFunction="UNALTERED_FUNCTION",K.UncertainSignificance="UNCERTAIN_SIGNIFICANCE",K.Unknown="UNKNOWN",K))(),N=(()=>((N=N||{}).Description="DESCRIPTION",N.DiseaseName="DISEASE_NAME",N.EvidenceDirection="EVIDENCE_DIRECTION",N.EvidenceLevel="EVIDENCE_LEVEL",N.EvidenceRating="EVIDENCE_RATING",N.EvidenceType="EVIDENCE_TYPE",N.Id="ID",N.Significance="SIGNIFICANCE",N.Status="STATUS",N.TherapyName="THERAPY_NAME",N.VariantOrigin="VARIANT_ORIGIN",N))(),V=(()=>((V=V||{}).Accepted="ACCEPTED",V.Rejected="REJECTED",V.Submitted="SUBMITTED",V))(),O=(()=>((O=O||{}).Accepted="ACCEPTED",O.All="ALL",O.Rejected="REJECTED",O.Submitted="SUBMITTED",O))(),A=(()=>((A=A||{}).Diagnostic="DIAGNOSTIC",A.Functional="FUNCTIONAL",A.Oncogenic="ONCOGENIC",A.Predictive="PREDICTIVE",A.Predisposing="PREDISPOSING",A.Prognostic="PROGNOSTIC",A))(),x=(()=>((x=x||{}).Open="OPEN",x.Resolved="RESOLVED",x))(),pe=(()=>((pe=pe||{}).Assertion="ASSERTION",pe.EvidenceItem="EVIDENCE_ITEM",pe.Gene="GENE",pe.MolecularProfile="MOLECULAR_PROFILE",pe.Variant="VARIANT",pe.VariantGroup="VARIANT_GROUP",pe))(),de=(()=>((de=de||{}).AssertionCount="assertionCount",de.DiseaseName="diseaseName",de.EntrezSymbol="entrezSymbol",de.EvidenceItemCount="evidenceItemCount",de.GeneAlias="geneAlias",de.MolecularProfileCount="molecularProfileCount",de.TherapyName="therapyName",de.VariantCount="variantCount",de))(),ve=(()=>((ve=ve||{}).Assertion="ASSERTION",ve.EvidenceItem="EVIDENCE_ITEM",ve.Gene="GENE",ve.MolecularProfile="MOLECULAR_PROFILE",ve.Variant="VARIANT",ve.VariantGroup="VARIANT_GROUP",ve))(),G=(()=>((G=G||{}).All="ALL",G.WithAccepted="WITH_ACCEPTED",G.WithAcceptedOrSubmitted="WITH_ACCEPTED_OR_SUBMITTED",G.WithSubmitted="WITH_SUBMITTED",G))(),se=(()=>((se=se||{}).AssertionCount="assertionCount",se.EvidenceItemCount="evidenceItemCount",se.MolecularProfileScore="molecularProfileScore",se.VariantCount="variantCount",se))(),fe=(()=>((fe=fe||{}).Mention="MENTION",fe.Subscription="SUBSCRIPTION",fe))(),be=(()=>((be=be||{}).Id="ID",be.Name="NAME",be))(),Ft=(()=>((Ft=Ft||{}).AssertionCount="ASSERTION_COUNT",Ft.EvidenceItemCount="EVIDENCE_ITEM_COUNT",Ft.HpoId="HPO_ID",Ft.Name="NAME",Ft))(),Dt=(()=>((Dt=Dt||{}).Read="READ",Dt.Unread="UNREAD",Dt))(),nn=(()=>((nn=nn||{}).Grch37="GRCH37",nn.Grch38="GRCH38",nn.Ncbi36="NCBI36",nn))(),Et=(()=>((Et=Et||{}).Accepted="ACCEPTED",Et.New="NEW",Et.Rejected="REJECTED",Et.Superseded="SUPERSEDED",Et))(),Ht=(()=>((Ht=Ht||{}).Assertion="ASSERTION",Ht.EvidenceItem="EVIDENCE_ITEM",Ht.Gene="GENE",Ht.MolecularProfile="MOLECULAR_PROFILE",Ht.Revision="REVISION",Ht.Variant="VARIANT",Ht.VariantGroup="VARIANT_GROUP",Ht))(),tn=(()=>((tn=tn||{}).Asc="ASC",tn.Desc="DESC",tn))(),un=(()=>((un=un||{}).Asco="ASCO",un.Ash="ASH",un.Pubmed="PUBMED",un))(),In=(()=>((In=In||{}).Curated="CURATED",In.New="NEW",In.Rejected="REJECTED",In))(),Xe=(()=>((Xe=Xe||{}).Citation="CITATION",Xe.CitationId="CITATION_ID",Xe.CreatedAt="CREATED_AT",Xe.DiseaseName="DISEASE_NAME",Xe.SourceType="SOURCE_TYPE",Xe.Submitter="SUBMITTER",Xe))(),Re=(()=>((Re=Re||{}).Authors="AUTHORS",Re.CitationId="CITATION_ID",Re.EvidenceCount="EVIDENCE_COUNT",Re.Journal="JOURNAL",Re.Name="NAME",Re.SourceType="SOURCE_TYPE",Re.SuggestionCount="SUGGESTION_COUNT",Re.Year="YEAR",Re))(),je=(()=>((je=je||{}).Assertion="ASSERTION",je.EvidenceItem="EVIDENCE_ITEM",je.Gene="GENE",je.MolecularProfile="MOLECULAR_PROFILE",je.Revision="REVISION",je.SourceSuggestion="SOURCE_SUGGESTION",je.Variant="VARIANT",je.VariantGroup="VARIANT_GROUP",je))(),Yt=(()=>((Yt=Yt||{}).Assertion="ASSERTION",Yt.EvidenceItem="EVIDENCE_ITEM",Yt.Gene="GENE",Yt.MolecularProfile="MOLECULAR_PROFILE",Yt.Revision="REVISION",Yt.Role="ROLE",Yt.Variant="VARIANT",Yt.VariantGroup="VARIANT_GROUP",Yt))(),qt=(()=>((qt=qt||{}).Combination="COMBINATION",qt.Sequential="SEQUENTIAL",qt.Substitutes="SUBSTITUTES",qt))(),vn=(()=>((vn=vn||{}).AssertionCount="ASSERTION_COUNT",vn.EvidenceItemCount="EVIDENCE_ITEM_COUNT",vn.Name="NAME",vn.NcitId="NCIT_ID",vn))(),Dn=(()=>((Dn=Dn||{}).Admin="ADMIN",Dn.Curator="CURATOR",Dn.Editor="EDITOR",Dn))(),Wt=(()=>((Wt=Wt||{}).Id="ID",Wt.LastAction="LAST_ACTION",Wt.Name="NAME",Wt.Role="ROLE",Wt))(),It=(()=>((It=It||{}).EvidenceItemCount="EVIDENCE_ITEM_COUNT",It.GeneNames="GENE_NAMES",It.Name="NAME",It.VariantCount="VARIANT_COUNT",It.VariantNames="VARIANT_NAMES",It))(),$e=(()=>(($e=$e||{}).CoordinateEnd="COORDINATE_END",$e.CoordinateStart="COORDINATE_START",$e.Name="NAME",$e))(),Ve=(()=>((Ve=Ve||{}).Combined="COMBINED",Ve.CommonGermline="COMMON_GERMLINE",Ve.Na="NA",Ve.RareGermline="RARE_GERMLINE",Ve.Somatic="SOMATIC",Ve.Unknown="UNKNOWN",Ve))(),Pe=(()=>((Pe=Pe||{}).Name="NAME",Pe.Soid="SOID",Pe.VariantCount="VARIANT_COUNT",Pe))(),We=(()=>((We=We||{}).DiseaseName="diseaseName",We.EntrezSymbol="entrezSymbol",We.TherapyName="therapyName",We.VariantName="variantName",We))();const He=t.Ps`
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
    `,Oe=t.Ps`
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
    ${He}`,ne=t.Ps`
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
    ${He}`,ce=t.Ps`
    fragment clinicalTrialPopover on BrowseClinicalTrial {
  id
  name
  nctId
  url
  sourceCount
  evidenceCount
}
    `,De=t.Ps`
    fragment BrowseClinicalTrialsRowFields on BrowseClinicalTrial {
  id
  name
  nctId
  evidenceCount
  sourceCount
  link
}
    `,Ge=t.Ps`
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
    `,vt=t.Ps`
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
    `,rn=t.Ps`
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
    `,_n=t.Ps`
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
    ${rn}`,st=t.Ps`
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
    ${He}`,it=t.Ps`
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
    ${He}`,lt=t.Ps`
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
    `,wt=t.Ps`
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
    ${lt}`,Ot=t.Ps`
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
    `,Lt=t.Ps`
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
    `,Gt=t.Ps`
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
    `,Ke=t.Ps`
    fragment QuicksearchResult on SearchResult {
  id
  resultType
  name
  matchingText
}
    `,J=t.Ps`
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
    `,q=t.Ps`
    fragment menuMolecularProfile on MolecularProfile {
  id
  name
  link
  flagged
}
    `,Me=t.Ps`
    fragment orgPopover on Organization {
  id
  profileImagePath(size: 64)
  name
  description
  url
}
    `,_t=t.Ps`
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
    `,tt=t.Ps`
    fragment PhenotypeBrowseTableRowFields on BrowsePhenotype {
  id
  name
  hpoId
  url
  assertionCount
  evidenceCount
  link
}
    `,Je=t.Ps`
    fragment validationError on FieldValidationError {
  fieldName
  error
}
    `,rt=t.Ps`
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
    `,Nt=t.Ps`
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
    `,Tt=t.Ps`
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
    `,mn=t.Ps`
    fragment subscriptionId on Subscription {
  id
  __typename
}
    `,Ze=t.Ps`
    fragment TimepointCount on TimePointCounts {
  allTime
  newThisMonth
  newThisWeek
  newThisYear
}
    `,ut=t.Ps`
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
    `,le=t.Ps`
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
    `,ye=t.Ps`
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
    `,mt=t.Ps`
    fragment TherapyBrowseTableRowFields on BrowseTherapy {
  id
  name
  ncitId
  therapyUrl
  assertionCount
  evidenceCount
  link
}
    `,Ae=t.Ps`
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
    `,at=t.Ps`
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
    `,Bt=t.Ps`
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
    `,ln=t.Ps`
    fragment BrowseVariantGroupRowFields on BrowseVariantGroup {
  id
  name
  link
  geneNames
  variantNames
  variantCount
  evidenceItemCount
}
    `,At=t.Ps`
    fragment variantTypePopover on VariantTypePopover {
  id
  name
  url
  soid
  variantCount
}
    `,dt=t.Ps`
    fragment VariantTypeBrowseTableRowFields on BrowseVariantType {
  id
  name
  soid
  url
  variantCount
  link
}
    `,ft=t.Ps`
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
    `,oe=t.Ps`
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
    `,B=t.Ps`
    fragment menuVariantType on BrowseVariantType {
  id
  name
  link
}
    `,Te=t.Ps`
    fragment menuVariant on Variant {
  id
  name
  link
  flagged
}
    `,Ye=t.Ps`
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
    `,yt=t.Ps`
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
    `,Kt=t.Ps`
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
    `,Zt=t.Ps`
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
    `,On=t.Ps`
    fragment AddDiseaseFields on AddDiseasePayload {
  new
  disease {
    id
    name
    displayName
  }
}
    `,zn=t.Ps`
    fragment GeneTypeaheadFields on Gene {
  id
  name
  geneAliases
  entrezId
}
    `,Wn=t.Ps`
    fragment SourceTypeaheadResult on Source {
  id
  name
  citation
  citationId
  sourceType
}
    `,Mo=t.Ps`
    fragment SourceStubFields on SourceStub {
  id
  citationId
  sourceType
}
    `,$o=(t.Ps`
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
    `),Ko=t.Ps`
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
    `,ko=t.Ps`
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
    `,eo=(t.Ps`
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
    `),Jo=t.Ps`
    fragment DiseaseSelectTypeaheadFields on Disease {
  id
  name
  link
  displayName
  doid
  diseaseAliases
}
    `,Lo=t.Ps`
    fragment TherapySelectTypeaheadFields on Therapy {
  id
  name
  link
  ncitId
  therapyAliases
}
    `,zo=t.Ps`
    fragment PhenotypeSelectTypeaheadFields on Phenotype {
  id
  name
  link
  hpoId
}
    `,vo=t.Ps`
    fragment SourceSelectTypeaheadFields on Source {
  id
  name
  link
  citation
  citationId
  sourceType
}
    `,ci=t.Ps`
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
    ${eo}
${Jo}
${Lo}
${zo}
${vo}`,ni=t.Ps`
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
    `,Ei=t.Ps`
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
    `,Nn=t.Ps`
    fragment AdvancedSearchPermalink on AdvancedSearchResult {
  permalinkId
}
    `,xi=t.Ps`
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
  isComplex
}
    `,Ii=t.Ps`
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
    `,Di=t.Ps`
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
    ${eo}
${Jo}
${Lo}
${zo}
${vo}`,ki=t.Ps`
    fragment CoordinateFields on Coordinate {
  chromosome
  representativeTranscript
  start
  stop
}
    `,br=t.Ps`
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
    ${ki}`,Nr=t.Ps`
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
    `,Mi=t.Ps`
    fragment AcmgCodeSelectTypeaheadFields on AcmgCode {
  id
  code
  name
  description
  tooltip
}
    `,lr=t.Ps`
    fragment ClingenCodeSelectTypeaheadFields on ClingenCode {
  id
  code
  name
  description
  tooltip
  exclusive
}
    `,Zi=t.Ps`
    fragment QuickAddDiseaseFields on AddDiseasePayload {
  new
  disease {
    ...DiseaseSelectTypeaheadFields
  }
}
    ${Jo}`,vr=t.Ps`
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
    ${He}`,tr=t.Ps`
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
    `,Kn=t.Ps`
    fragment GeneSelectTypeaheadFields on Gene {
  id
  entrezId
  name
  geneAliases
  link
}
    `,xo=t.Ps`
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
    `,Ho=t.Ps`
    fragment NccnGuidelineSelectTypeaheadFields on NccnGuideline {
  id
  name
}
    `,Xo=t.Ps`
    fragment QuickAddTherapyFields on AddTherapyPayload {
  new
  therapy {
    ...TherapySelectTypeaheadFields
  }
}
    ${Lo}`,jo=(t.Ps`
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
    `),gi=(t.Ps`
    fragment QuickAddVariantFields on AddVariantPayload {
  clientMutationId
  new
  variant {
    ...VariantSelectTypeaheadFields
  }
}
    ${jo}`,t.Ps`
    fragment VariantTypeSelectTypeaheadFields on VariantType {
  id
  name
  link
  soid
}
    `),_r=t.Ps`
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
    `,Gi=t.Ps`
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
    ${He}`,qo=t.Ps`
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
    `,jn=t.Ps`
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
    ${qo}`,ao=t.Ps`
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
    `,Ue=t.Ps`
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
    ${He}`,ae=t.Ps`
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
    `,we=t.Ps`
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
    `,Qe=t.Ps`
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
    `,zt=t.Ps`
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
    ${Qe}`,kt=t.Ps`
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
    `,en=t.Ps`
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
    ${kt}
${He}`,hn=t.Ps`
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
    `,Jt=t.Ps`
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
    `,yn=t.Ps`
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
    `,Rn=t.Ps`
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
    `,Mn=t.Ps`
    fragment SourceDetailFields on Source {
  id
  citation
  sourceUrl
  displayType
  citationId
  comments {
    totalCount
  }
}
    `,dn=t.Ps`
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
    `,En=t.Ps`
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
    `,Gn=t.Ps`
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
    ${En}`,Fn=t.Ps`
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
    `,Bn=t.Ps`
    fragment notificationOrganization on Organization {
  id
  name
}
    `,Ln=t.Ps`
    fragment notificationOriginatingUsers on User {
  id
  displayName
}
    `,go=t.Ps`
    fragment notificationFeedSubjects on EventSubjectWithCount {
  subject {
    id
    __typename
    name
  }
  occuranceCount
}
    `,Jn=t.Ps`
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
    ${rn}`,co=t.Ps`
    fragment subscribable on Subscribable {
  id
  entityType
  __typename
}
    `,Do=t.Ps`
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
    `,qn=t.Ps`
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
    `,bo=t.Ps`
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
    ${Qe}`,Io=t.Ps`
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
    `,Uo=t.Ps`
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
    ${Io}`,yo=t.Ps`
    query AssertionPopover($assertionId: Int!) {
  assertion(id: $assertionId) {
    ...assertionPopover
  }
}
    ${Oe}`;let li=(()=>{class z extends t.AE{constructor(ee){super(ee),this.document=yo}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const vi=t.Ps`
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
    ${ne}`;let Po=(()=>{class z extends t.AE{constructor(ee){super(ee),this.document=vi}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const Ao=t.Ps`
    query ClinicalTrialPopover($clinicalTrialId: Int!) {
  clinicalTrials(id: $clinicalTrialId) {
    edges {
      node {
        ...clinicalTrialPopover
      }
    }
  }
}
    ${ce}`;let Hi=(()=>{class z extends t.AE{constructor(ee){super(ee),this.document=Ao}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const si=t.Ps`
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
    ${De}`;let fi=(()=>{class z extends t.AE{constructor(ee){super(ee),this.document=si}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const Ki=t.Ps`
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
    ${Qe}`;let Ai=(()=>{class z extends t.AE{constructor(ee){super(ee),this.document=Ki}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const Yi=t.Ps`
    query CommentPopover($commentId: Int!) {
  comment(id: $commentId) {
    ...commentPopover
  }
}
    ${Ge}`;let ui=(()=>{class z extends t.AE{constructor(ee){super(ee),this.document=Yi}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const Le=t.Ps`
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
    `;let Rt=(()=>{class z extends t.AE{constructor(ee){super(ee),this.document=Le}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const Z=t.Ps`
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
    ${vt}`;let ke=(()=>{class z extends t.AE{constructor(ee){super(ee),this.document=Z}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const $t=t.Ps`
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
    `;let sn=(()=>{class z extends t.AE{constructor(ee){super(ee),this.document=$t}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const Yn=t.Ps`
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
    ${_n}`;let uo=(()=>{class z extends t.AE{constructor(ee){super(ee),this.document=Yn}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const po=t.Ps`
    query EvidencePopover($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...evidencePopover
  }
}
    ${st}`;let Yo=(()=>{class z extends t.AE{constructor(ee){super(ee),this.document=po}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const ei=t.Ps`
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
    ${it}`;let lo=(()=>{class z extends t.AE{constructor(ee){super(ee),this.document=ei}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const Ri=t.Ps`
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
    ${wt}`;let Fi=(()=>{class z extends t.AE{constructor(ee){super(ee),this.document=Ri}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const yr=t.Ps`
    query FlagPopover($flagId: Int!) {
  flag(id: $flagId) {
    ...flagPopover
  }
}
    ${Ot}`;let ns=(()=>{class z extends t.AE{constructor(ee){super(ee),this.document=yr}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const Ee=t.Ps`
    query GenePopover($geneId: Int!) {
  gene(id: $geneId) {
    ...genePopover
  }
}
    ${Lt}`;let Ce=(()=>{class z extends t.AE{constructor(ee){super(ee),this.document=Ee}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const he=t.Ps`
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
    ${Gt}`;let ct=(()=>{class z extends t.AE{constructor(ee){super(ee),this.document=he}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const Cn=t.Ps`
    query Quicksearch($query: String!, $types: [SearchableEntities!], $highlightMatches: Boolean) {
  search(query: $query, types: $types, highlightMatches: $highlightMatches) {
    ...QuicksearchResult
  }
}
    ${Ke}`;let Qn=(()=>{class z extends t.AE{constructor(ee){super(ee),this.document=Cn}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const _i=t.Ps`
    query MolecularProfilePopover($molecularProfileId: Int!) {
  molecularProfile(id: $molecularProfileId) {
    ...molecularProfilePopoverFields
  }
}
    ${J}`;let di=(()=>{class z extends t.AE{constructor(ee){super(ee),this.document=_i}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const Lr=t.Ps`
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
    ${I}`;let xs=(()=>{class z extends t.AE{constructor(ee){super(ee),this.document=Lr}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const ya=t.Ps`
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
    ${q}`;let Bs=(()=>{class z extends t.AE{constructor(ee){super(ee),this.document=ya}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const Hs=t.Ps`
    query OrgPopover($orgId: Int!) {
  organization(id: $orgId) {
    ...orgPopover
  }
}
    ${Me}`;let Cr=(()=>{class z extends t.AE{constructor(ee){super(ee),this.document=Hs}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const nc=t.Ps`
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
    ${_t}`;let Kr=(()=>{class z extends t.AE{constructor(ee){super(ee),this.document=nc}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const kr=t.Ps`
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
    `;let nr=(()=>{class z extends t.AE{constructor(ee){super(ee),this.document=kr}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const ur=t.Ps`
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
    ${tt}`;let yi=(()=>{class z extends t.AE{constructor(ee){super(ee),this.document=ur}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const dr=t.Ps`
    mutation AcceptRevision($input: AcceptRevisionsInput!) {
  acceptRevisions(input: $input) {
    revisions {
      id
      __typename
    }
  }
}
    `;let Ds=(()=>{class z extends t.mm{constructor(ee){super(ee),this.document=dr}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const Rr=t.Ps`
    mutation RejectRevision($input: RejectRevisionsInput!) {
  rejectRevisions(input: $input) {
    revisions {
      id
      __typename
    }
  }
}
    `;let Sr=(()=>{class z extends t.mm{constructor(ee){super(ee),this.document=Rr}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const Jr=t.Ps`
    query ValidateRevisionsForAcceptance($ids: [Int!]!) {
  validateRevisionsForAcceptance(revisionIds: $ids) {
    genericErrors
    validationErrors {
      ...validationError
    }
  }
}
    ${Je}`;let Ys=(()=>{class z extends t.AE{constructor(ee){super(ee),this.document=Jr}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const Vr=t.Ps`
    query RevisionPopover($revisionId: Int!) {
  revision(id: $revisionId) {
    ...revisionPopover
  }
}
    ${rt}`;let us=(()=>{class z extends t.AE{constructor(ee){super(ee),this.document=Vr}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const pr=t.Ps`
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
    ${Nt}`;let oc=(()=>{class z extends t.AE{constructor(ee){super(ee),this.document=pr}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const Er=t.Ps`
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
    ${Tt}`;let Ca=(()=>{class z extends t.AE{constructor(ee){super(ee),this.document=Er}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const Yc=t.Ps`
    query SubscriptionForEntity($subscribable: SubscribableInput!) {
  subscriptionForEntity(subscribable: $subscribable) {
    ...subscriptionId
  }
}
    ${mn}`;let ic=(()=>{class z extends t.AE{constructor(ee){super(ee),this.document=Yc}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const xr=t.Ps`
    mutation ModerateEvidenceItem($input: ModerateEvidenceItemInput!) {
  moderateEvidenceItem(input: $input) {
    evidenceItem {
      id
    }
  }
}
    `;let or=(()=>{class z extends t.mm{constructor(ee){super(ee),this.document=xr}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const os=t.Ps`
    mutation ModerateAssertion($input: ModerateAssertionInput!) {
  moderateAssertion(input: $input) {
    assertion {
      id
    }
  }
}
    `;let Br=(()=>{class z extends t.mm{constructor(ee){super(ee),this.document=os}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const ds=t.Ps`
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
    ${Ze}`;let ps=(()=>{class z extends t.AE{constructor(ee){super(ee),this.document=ds}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const $s=t.Ps`
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
    ${ut}`;let hs=(()=>{class z extends t.AE{constructor(ee){super(ee),this.document=$s}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();t.Ps`
    mutation UpdateSourceSuggestionStatus($input: UpdateSourceSuggestionStatusInput!) {
  updateSourceSuggestionStatus(input: $input) {
    sourceSuggestion {
      id
      status
    }
  }
}
    `;const Us=t.Ps`
    query SourcePopover($sourceId: Int!) {
  sourcePopover(id: $sourceId) {
    ...sourcePopover
  }
}
    ${le}`;let Gs=(()=>{class z extends t.AE{constructor(ee){super(ee),this.document=Us}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const Qs=t.Ps`
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
    ${ye}`;let $i=(()=>{class z extends t.AE{constructor(ee){super(ee),this.document=Qs}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const Ni=t.Ps`
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
    `;let js=(()=>{class z extends t.AE{constructor(ee){super(ee),this.document=Ni}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const oi=t.Ps`
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
    ${mt}`;let Hr=(()=>{class z extends t.AE{constructor(ee){super(ee),this.document=oi}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const re=t.Ps`
    query UserPopover($userId: Int!) {
  user(id: $userId) {
    ...popoverUser
  }
}
    ${Ae}`;let Ne=(()=>{class z extends t.AE{constructor(ee){super(ee),this.document=re}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const me=t.Ps`
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
    ${at}`;let et=(()=>{class z extends t.AE{constructor(ee){super(ee),this.document=me}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const Pt=t.Ps`
    query VariantGroupPopover($variantGroupId: Int!) {
  variantGroup(id: $variantGroupId) {
    ...variantGroupPopoverFields
  }
}
    ${Bt}`;let pn=(()=>{class z extends t.AE{constructor(ee){super(ee),this.document=Pt}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const Tn=t.Ps`
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
    ${ln}`;let to=(()=>{class z extends t.AE{constructor(ee){super(ee),this.document=Tn}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const Go=t.Ps`
    query VariantTypePopover($variantTypeId: Int!) {
  variantTypePopover(id: $variantTypeId) {
    ...variantTypePopover
  }
}
    ${At}`;let ho=(()=>{class z extends t.AE{constructor(ee){super(ee),this.document=Go}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const Ro=t.Ps`
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
    ${dt}`;let Oo=(()=>{class z extends t.AE{constructor(ee){super(ee),this.document=Ro}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const ai=t.Ps`
    query CoordinatesCard($variantId: Int!) {
  variant(id: $variantId) {
    ...CoordinatesCardFields
  }
}
    ${ft}`;let Wo=(()=>{class z extends t.AE{constructor(ee){super(ee),this.document=ai}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const Ci=t.Ps`
    query VariantPopover($variantId: Int!) {
  variant(id: $variantId) {
    ...variantPopoverFields
  }
}
    ${oe}`;let zi=(()=>{class z extends t.AE{constructor(ee){super(ee),this.document=Ci}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const ro=t.Ps`
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
    ${Te}`;let hr=(()=>{class z extends t.AE{constructor(ee){super(ee),this.document=ro}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const ir=t.Ps`
    query VariantTypesForGene($geneId: Int) {
  variantTypes(geneId: $geneId, first: 50) {
    edges {
      node {
        ...menuVariantType
      }
    }
  }
}
    ${B}`;let Yr=(()=>{class z extends t.AE{constructor(ee){super(ee),this.document=ir}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const Dr=t.Ps`
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
    ${Ye}`;let rr=(()=>{class z extends t.AE{constructor(ee){super(ee),this.document=Dr}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const za=t.Ps`
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
    `;let Or=(()=>{class z extends t.AE{constructor(ee){super(ee),this.document=za}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const fs=t.Ps`
    query ViewerNotificationCount {
  notifications {
    unreadCount
  }
}
    `;let sc=(()=>{class z extends t.AE{constructor(ee){super(ee),this.document=fs}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const Ul=t.Ps`
    query AssertionRevisableFields($assertionId: Int!) {
  assertion(id: $assertionId) {
    ...RevisableAssertionFields
  }
}
    ${yt}`;let ac=(()=>{class z extends t.AE{constructor(ee){super(ee),this.document=Ul}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const $r=t.Ps`
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
    `;let wn=(()=>{class z extends t.mm{constructor(ee){super(ee),this.document=$r}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const Vo=t.Ps`
    mutation SubmitAssertion($input: SubmitAssertionInput!) {
  submitAssertion(input: $input) {
    clientMutationId
    assertion {
      id
    }
  }
}
    `;let $c=(()=>{class z extends t.mm{constructor(ee){super(ee),this.document=Vo}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const Ws=t.Ps`
    mutation AddComment($input: AddCommentInput!) {
  addComment(input: $input) {
    clientMutationId
    comment {
      ...commentListNode
    }
  }
}
    ${Qe}`;let bi=(()=>{class z extends t.mm{constructor(ee){super(ee),this.document=Ws}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const is=t.Ps`
    query previewComment($commentText: String!) {
  previewCommentText(commentText: $commentText) {
    ...previewComment
  }
}
    ${Kt}`;let wr=(()=>{class z extends t.AE{constructor(ee){super(ee),this.document=is}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const fr=t.Ps`
    query userTypeahead($queryTerm: String!) {
  userTypeahead(queryTerm: $queryTerm) {
    username
  }
}
    `;let Ta=(()=>{class z extends t.AE{constructor(ee){super(ee),this.document=fr}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const Uc=t.Ps`
    query entityTypeahead($queryTerm: String!) {
  entityTypeahead(queryTerm: $queryTerm) {
    entityId
    tagType
    displayName
  }
}
    `;let Zs=(()=>{class z extends t.AE{constructor(ee){super(ee),this.document=Uc}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();t.Ps`
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
    ${Zt}`,t.Ps`
    mutation createMolecularProfile($mpStructure: MolecularProfileComponentInput!) {
  createMolecularProfile(input: {structure: $mpStructure}) {
    molecularProfile {
      id
      name
      link
    }
  }
}
    `,t.Ps`
    query AcmgCodeTypeahead($code: String!) {
  acmgCodesTypeahead(queryTerm: $code) {
    id
    code
    description
    name
    tooltip
  }
}
    `,t.Ps`
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
    `,t.Ps`
    query DiseaseTypeahead($name: String!) {
  diseaseTypeahead(queryTerm: $name) {
    id
    name
    displayName
    doid
    diseaseAliases
  }
}
    `,t.Ps`
    mutation AddDisease($name: String!, $doid: String) {
  addDisease(input: {name: $name, doid: $doid}) {
    ...AddDiseaseFields
  }
}
    ${On}`,t.Ps`
    query EvidenceTypeahead($id: Int!) {
  evidenceItem(id: $id) {
    id
    status
    name
  }
}
    `;const Ma=t.Ps`
    query GeneTypeahead($entrezSymbol: String!) {
  geneTypeahead(queryTerm: $entrezSymbol) {
    ...GeneTypeaheadFields
  }
}
    ${zn}`;let dc=(()=>{class z extends t.AE{constructor(ee){super(ee),this.document=Ma}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();t.Ps`
    query NccnGuidelineTypeahead($name: String!) {
  nccnGuidelinesTypeahead(queryTerm: $name) {
    id
    name
  }
}
    `,t.Ps`
    query PhenotypeTypeahead($name: String!) {
  phenotypeTypeahead(queryTerm: $name) {
    hpoId
    id
    name
  }
}
    `,t.Ps`
    query CitationExistenceCheck($sourceType: SourceSource!, $citationId: String!) {
  remoteCitation(sourceType: $sourceType, citationId: $citationId)
}
    `,t.Ps`
    mutation CreateSourceStub($input: AddRemoteCitationInput!) {
  addRemoteCitation(input: $input) {
    newSource {
      id
      citationId
      sourceType
    }
  }
}
    `,t.Ps`
    query CitationTypeahead($partialCitationId: String!, $sourceType: SourceSource!) {
  sourceTypeahead(citationId: $partialCitationId, sourceType: $sourceType) {
    ...SourceTypeaheadResult
  }
}
    ${Wn}`,t.Ps`
    query CheckRemoteCitation($sourceType: SourceSource!, $citationId: String!) {
  remoteCitation(sourceType: $sourceType, citationId: $citationId)
}
    `,t.Ps`
    mutation AddRemoteCitation($input: AddRemoteCitationInput!) {
  addRemoteCitation(input: $input) {
    newSource {
      ...SourceStubFields
    }
  }
}
    ${Mo}`,t.Ps`
    query SourceTypeahead($partialCitationId: String!, $sourceType: SourceSource!) {
  sourceTypeahead(citationId: $partialCitationId, sourceType: $sourceType) {
    ...SourceTypeaheadResult
  }
}
    ${Wn}`,t.Ps`
    query TherapyTypeahead($name: String!) {
  therapyTypeahead(queryTerm: $name) {
    id
    name
    ncitId
    therapyAliases
  }
}
    `,t.Ps`
    mutation AddTherapy($name: String!, $ncitId: String) {
  addTherapy(input: {name: $name, ncitId: $ncitId}) {
    ...AddTherapyFields
  }
}
    ${$o}`;const Js=t.Ps`
    query VariantTypeahead($name: String!, $geneId: Int) {
  variants(name: $name, geneId: $geneId, first: 20) {
    nodes {
      ...VariantTypeaheadFields
    }
  }
}
    ${Ko}`;let Ur=(()=>{class z extends t.AE{constructor(ee){super(ee),this.document=Js}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const Gr=t.Ps`
    mutation AddVariant($name: String!, $geneId: Int!) {
  addVariant(input: {name: $name, geneId: $geneId}) {
    ...AddVariantFields
  }
}
    ${ko}`;let Vi=(()=>{class z extends t.mm{constructor(ee){super(ee),this.document=Gr}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();t.Ps`
    query VariantSelect($name: String!, $geneId: Int) {
  variants(name: $name, first: 20, geneId: $geneId) {
    nodes {
      ...VariantTypeaheadFields
    }
  }
}
    ${Ko}`,t.Ps`
    query VariantTypeTypeahead($name: String!) {
  variantTypeTypeahead(queryTerm: $name) {
    name
    soid
    id
  }
}
    `,t.Ps`
    query EvidenceItemRevisableFields($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...RevisableEvidenceFields
  }
}
    ${ci}`,t.Ps`
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
    `,t.Ps`
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
    `,t.Ps`
    query EvidenceSubmittableFields($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...SubmittableEvidenceFields
  }
}
    ${ni}`;const Dd=t.Ps`
    mutation SubmitEvidenceItem($input: SubmitEvidenceItemInput!) {
  submitEvidence(input: $input) {
    clientMutationId
    evidenceItem {
      id
    }
  }
}
    `;let d1=(()=>{class z extends t.mm{constructor(ee){super(ee),this.document=Dd}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const ql=t.Ps`
    mutation FlagEntity($input: FlagEntityInput!) {
  flagEntity(input: $input) {
    flag {
      id
    }
  }
}
    `;let hc=(()=>{class z extends t.mm{constructor(ee){super(ee),this.document=ql}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const Xl=t.Ps`
    mutation ResolveFlag($input: ResolveFlagInput!) {
  resolveFlag(input: $input) {
    flag {
      id
    }
  }
}
    `;let Is=(()=>{class z extends t.mm{constructor(ee){super(ee),this.document=Xl}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const fc=t.Ps`
    query GeneRevisableFields($geneId: Int!) {
  gene(id: $geneId) {
    ...RevisableGeneFields
  }
}
    ${Ei}`;let mc=(()=>{class z extends t.AE{constructor(ee){super(ee),this.document=fc}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const p1=t.Ps`
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
    `;let eu=(()=>{class z extends t.mm{constructor(ee){super(ee),this.document=p1}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();t.Ps`
    query GeneAdvancedSearch($query: GeneSearchFilter!) {
  searchGenes(query: $query, createPermalink: true) {
    ...AdvancedSearchPermalink
  }
}
    ${Nn}`;const es=t.Ps`
    query MolecularProfileRevisableFields($molecularProfileId: Int!) {
  molecularProfile(id: $molecularProfileId) {
    ...RevisableMolecularProfileFields
  }
}
    ${xi}`;let m1=(()=>{class z extends t.AE{constructor(ee){super(ee),this.document=es}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const Sa=t.Ps`
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
    `;let Ea=(()=>{class z extends t.mm{constructor(ee){super(ee),this.document=Sa}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();t.Ps`
    mutation SuggestSource($input: SuggestSourceInput!) {
  suggestSource(input: $input) {
    clientMutationId
    sourceSuggestion {
      id
    }
  }
}
    `;const gc=t.Ps`
    mutation UpdateSourceSuggestion($input: UpdateSourceSuggestionStatusInput!) {
  updateSourceSuggestionStatus(input: $input) {
    sourceSuggestion {
      id
      status
    }
  }
}
    `;let Da=(()=>{class z extends t.mm{constructor(ee){super(ee),this.document=gc}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const tu=t.Ps`
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
    `;let g1=(()=>{class z extends t.mm{constructor(ee){super(ee),this.document=tu}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const nu=t.Ps`
    mutation UpdateUserProfile($input: EditUserInput!) {
  editUser(input: $input) {
    user {
      id
    }
  }
}
    `;let ou=(()=>{class z extends t.mm{constructor(ee){super(ee),this.document=nu}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const vc=t.Ps`
    query Countries {
  countries {
    id
    name
  }
}
    `;let Xs=(()=>{class z extends t.AE{constructor(ee){super(ee),this.document=vc}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const ms=t.Ps`
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
    `;let iu=(()=>{class z extends t.mm{constructor(ee){super(ee),this.document=ms}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const qc=t.Ps`
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
    `;let _c=(()=>{class z extends t.AE{constructor(ee){super(ee),this.document=qc}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();t.Ps`
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
    `,t.Ps`
    query VariantGroupSubmittableFields($variantGroupId: Int!) {
  variantGroup(id: $variantGroupId) {
    ...SubmittableVariantGroupFields
  }
}
    ${Ii}`;const _1=t.Ps`
    mutation SubmitVariantGroup($input: SubmitVariantGroupInput!) {
  submitVariantGroup(input: $input) {
    clientMutationId
    variantGroup {
      id
    }
  }
}
    `;let tl=(()=>{class z extends t.mm{constructor(ee){super(ee),this.document=_1}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const yc=t.Ps`
    query LinkableGene($geneId: Int!) {
  gene(id: $geneId) {
    id
    name
    link
  }
}
    `;let As=(()=>{class z extends t.AE{constructor(ee){super(ee),this.document=yc}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();t.Ps`
    query LinkableVariant($variantId: Int!) {
  variant(id: $variantId) {
    id
    name
    link
  }
}
    `,t.Ps`
    query LinkableTherapy($therapyId: Int!) {
  therapy(id: $therapyId) {
    id
    name
    link
  }
}
    `;const oa=t.Ps`
    query EvidenceItemRevisableFields2($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...RevisableEvidenceFields2
  }
}
    ${Di}`;let Od=(()=>{class z extends t.AE{constructor(ee){super(ee),this.document=oa}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const su=t.Ps`
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
    `;let y1=(()=>{class z extends t.mm{constructor(ee){super(ee),this.document=su}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const C1=t.Ps`
    query ExistingEvidenceCount($molecularProfileId: Int!, $sourceId: Int!) {
  evidenceItems(molecularProfileId: $molecularProfileId, sourceId: $sourceId) {
    totalCount
  }
}
    `;let z1=(()=>{class z extends t.AE{constructor(ee){super(ee),this.document=C1}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const Oa=t.Ps`
    mutation SubmitSource($input: SuggestSourceInput!) {
  suggestSource(input: $input) {
    clientMutationId
    sourceSuggestion {
      id
    }
  }
}
    `;let T1=(()=>{class z extends t.mm{constructor(ee){super(ee),this.document=Oa}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const ia=t.Ps`
    query VariantRevisableFields($variantId: Int!) {
  variant(id: $variantId) {
    ...RevisableVariantFields
  }
}
    ${br}`;let ra=(()=>{class z extends t.AE{constructor(ee){super(ee),this.document=ia}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const M1=t.Ps`
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
    `;let b1=(()=>{class z extends t.mm{constructor(ee){super(ee),this.document=M1}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const Li=t.Ps`
    query VariantGroupRevisableFields2($variantGroupId: Int!) {
  variantGroup(id: $variantGroupId) {
    ...VariantGroupRevisableFields2
  }
}
    ${Nr}`;let ol=(()=>{class z extends t.AE{constructor(ee){super(ee),this.document=Li}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const gs=t.Ps`
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
    `;let au=(()=>{class z extends t.mm{constructor(ee){super(ee),this.document=gs}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const zr=t.Ps`
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
    `;let sa=(()=>{class z extends t.AE{constructor(ee){super(ee),this.document=zr}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const il=t.Ps`
    query AcmgCodeSelectTypeahead($code: String!) {
  acmgCodesTypeahead(queryTerm: $code) {
    ...AcmgCodeSelectTypeaheadFields
  }
}
    ${Mi}`;let wa=(()=>{class z extends t.AE{constructor(ee){super(ee),this.document=il}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const aa=t.Ps`
    query AcmgCodeSelectTag($id: Int!) {
  acmgCode(id: $id) {
    ...AcmgCodeSelectTypeaheadFields
  }
}
    ${Mi}`;let cu=(()=>{class z extends t.AE{constructor(ee){super(ee),this.document=aa}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const S1=t.Ps`
    query ClingenCodeSelectTypeahead($code: String!) {
  clingenCodesTypeahead(queryTerm: $code) {
    ...ClingenCodeSelectTypeaheadFields
  }
}
    ${lr}`;let rl=(()=>{class z extends t.AE{constructor(ee){super(ee),this.document=S1}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const E1=t.Ps`
    query ClingenCodeSelectTag($id: Int!) {
  clingenCode(id: $id) {
    ...ClingenCodeSelectTypeaheadFields
  }
}
    ${lr}`;let mr=(()=>{class z extends t.AE{constructor(ee){super(ee),this.document=E1}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const Cc=t.Ps`
    mutation QuickAddDisease($name: String!, $doid: String) {
  addDisease(input: {name: $name, doid: $doid}) {
    ...QuickAddDiseaseFields
  }
}
    ${Zi}`;let vs=(()=>{class z extends t.mm{constructor(ee){super(ee),this.document=Cc}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const lp=t.Ps`
    query DiseaseSelectTypeahead($name: String!) {
  diseaseTypeahead(queryTerm: $name) {
    ...DiseaseSelectTypeaheadFields
  }
}
    ${Jo}`;let sl=(()=>{class z extends t.AE{constructor(ee){super(ee),this.document=lp}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const al=t.Ps`
    query DiseaseSelectTag($id: Int!) {
  disease(id: $id) {
    ...DiseaseSelectTypeaheadFields
  }
}
    ${Jo}`;let lu=(()=>{class z extends t.AE{constructor(ee){super(ee),this.document=al}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const uu=t.Ps`
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
    ${vr}`;let cl=(()=>{class z extends t.AE{constructor(ee){super(ee),this.document=uu}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const du=t.Ps`
    query EvidenceSelectTypeahead($eid: Int!) {
  evidenceItems(id: $eid) {
    nodes {
      ...EvidenceSelectTypeaheadFields
    }
  }
}
    ${tr}`;let pu=(()=>{class z extends t.AE{constructor(ee){super(ee),this.document=du}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const zc=t.Ps`
    query EvidenceSelectTag($eid: Int!) {
  evidenceItem(id: $eid) {
    ...EvidenceSelectTypeaheadFields
  }
}
    ${tr}`;let Pa=(()=>{class z extends t.AE{constructor(ee){super(ee),this.document=zc}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const ll=t.Ps`
    query GeneSelectTypeahead($entrezSymbol: String!) {
  geneTypeahead(queryTerm: $entrezSymbol) {
    ...GeneSelectTypeaheadFields
  }
}
    ${Kn}`;let Ia=(()=>{class z extends t.AE{constructor(ee){super(ee),this.document=ll}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const hu=t.Ps`
    query GeneSelectTag($geneId: Int!) {
  gene(id: $geneId) {
    ...GeneSelectTypeaheadFields
  }
}
    ${Kn}`;let Aa=(()=>{class z extends t.AE{constructor(ee){super(ee),this.document=hu}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const ul=t.Ps`
    query MolecularProfileSelectTypeahead($name: String!, $geneId: Int) {
  molecularProfiles(name: $name, geneId: $geneId, first: 25) {
    nodes {
      ...MolecularProfileSelectTypeaheadFields
    }
  }
}
    ${eo}`;let dl=(()=>{class z extends t.AE{constructor(ee){super(ee),this.document=ul}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const Tc=t.Ps`
    query MolecularProfileSelectTag($molecularProfileId: Int!) {
  molecularProfile(id: $molecularProfileId) {
    ...MolecularProfileSelectTypeaheadFields
  }
}
    ${eo}`;let ca=(()=>{class z extends t.AE{constructor(ee){super(ee),this.document=Tc}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const Fs=t.Ps`
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
    ${xo}`;let pl=(()=>{class z extends t.AE{constructor(ee){super(ee),this.document=Fs}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const fu=t.Ps`
    query MpExpressionEditorPrepopulate($mpId: Int!) {
  molecularProfile(id: $mpId) {
    id
    parsedName {
      ...MolecularProfileParsedName
    }
    rawName
  }
}
    ${He}`;let Ns=(()=>{class z extends t.AE{constructor(ee){super(ee),this.document=fu}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const Fa=t.Ps`
    mutation CreateMolecularProfile2($mpStructure: MolecularProfileComponentInput!) {
  createMolecularProfile(input: {structure: $mpStructure}) {
    molecularProfile {
      id
      name
      link
    }
  }
}
    `;let mu=(()=>{class z extends t.mm{constructor(ee){super(ee),this.document=Fa}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const x1=t.Ps`
    query NccnGuidelineSelectTypeahead($name: String!) {
  nccnGuidelinesTypeahead(queryTerm: $name) {
    ...NccnGuidelineSelectTypeaheadFields
  }
}
    ${Ho}`;let _s=(()=>{class z extends t.AE{constructor(ee){super(ee),this.document=x1}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const gu=t.Ps`
    query NccnGuidelineSelectTag($id: Int!) {
  nccnGuideline(id: $id) {
    ...NccnGuidelineSelectTypeaheadFields
  }
}
    ${Ho}`;let D1=(()=>{class z extends t.AE{constructor(ee){super(ee),this.document=gu}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const vu=t.Ps`
    query PhenotypeSelectTypeahead($name: String!) {
  phenotypeTypeahead(queryTerm: $name) {
    ...PhenotypeSelectTypeaheadFields
  }
}
    ${zo}`;let _u=(()=>{class z extends t.AE{constructor(ee){super(ee),this.document=vu}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const Na=t.Ps`
    query PhenotypeSelectTag($id: Int!) {
  phenotype(id: $id) {
    ...PhenotypeSelectTypeaheadFields
  }
}
    ${zo}`;let La=(()=>{class z extends t.AE{constructor(ee){super(ee),this.document=Na}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const hl=t.Ps`
    query QuickAddSourceCheckCitation($sourceType: SourceSource!, $citationId: String!) {
  remoteCitation(sourceType: $sourceType, citationId: $citationId)
}
    `;let yu=(()=>{class z extends t.AE{constructor(ee){super(ee),this.document=hl}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const fl=t.Ps`
    mutation QuickAddSourceRemoteCitation($input: AddRemoteCitationInput!) {
  addRemoteCitation(input: $input) {
    newSource {
      id
      citationId
      sourceType
    }
  }
}
    `;let O1=(()=>{class z extends t.mm{constructor(ee){super(ee),this.document=fl}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const ml=t.Ps`
    query SourceSelectTypeahead($partialCitationId: String!, $sourceType: SourceSource!) {
  sourceTypeahead(citationId: $partialCitationId, sourceType: $sourceType) {
    ...SourceSelectTypeaheadFields
  }
}
    ${vo}`;let w1=(()=>{class z extends t.AE{constructor(ee){super(ee),this.document=ml}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const Cu=t.Ps`
    query SourceSelectTag($id: Int!) {
  source(id: $id) {
    ...SourceSelectTypeaheadFields
  }
}
    ${vo}`;let zu=(()=>{class z extends t.AE{constructor(ee){super(ee),this.document=Cu}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const ka=t.Ps`
    mutation QuickAddTherapy($name: String!, $ncitId: String) {
  addTherapy(input: {name: $name, ncitId: $ncitId}) {
    ...QuickAddTherapyFields
  }
}
    ${Xo}`;let P1=(()=>{class z extends t.mm{constructor(ee){super(ee),this.document=ka}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const I1=t.Ps`
    query TherapySelectTypeahead($name: String!) {
  therapyTypeahead(queryTerm: $name) {
    ...TherapySelectTypeaheadFields
  }
}
    ${Lo}`;let Mc=(()=>{class z extends t.AE{constructor(ee){super(ee),this.document=I1}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const A1=t.Ps`
    query TherapySelectTag($id: Int!) {
  therapy(id: $id) {
    ...TherapySelectTypeaheadFields
  }
}
    ${Lo}`;let F1=(()=>{class z extends t.AE{constructor(ee){super(ee),this.document=A1}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const N1=t.Ps`
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
    ${Ye}`;let L1=(()=>{class z extends t.AE{constructor(ee){super(ee),this.document=N1}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const k1=t.Ps`
    mutation QuickAddVariant($name: String!, $geneId: Int!) {
  addVariant(input: {name: $name, geneId: $geneId}) {
    ...AddVariantFields
  }
}
    ${ko}`;let R1=(()=>{class z extends t.mm{constructor(ee){super(ee),this.document=k1}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const Ra=t.Ps`
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
    ${jo}`;let Va=(()=>{class z extends t.AE{constructor(ee){super(ee),this.document=Ra}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const gl=t.Ps`
    query VariantSelectTag($variantId: Int!) {
  variant(id: $variantId) {
    ...VariantSelectTypeaheadFields
  }
}
    ${jo}`;let bc=(()=>{class z extends t.AE{constructor(ee){super(ee),this.document=gl}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const vl=t.Ps`
    query VariantTypeSelectTypeahead($name: String!) {
  variantTypeTypeahead(queryTerm: $name) {
    ...VariantTypeSelectTypeaheadFields
  }
}
    ${gi}`;let la=(()=>{class z extends t.AE{constructor(ee){super(ee),this.document=vl}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const _l=t.Ps`
    query VariantTypeSelectTag($id: Int!) {
  variantType(id: $id) {
    ...VariantTypeSelectTypeaheadFields
  }
}
    ${gi}`;let Tu=(()=>{class z extends t.AE{constructor(ee){super(ee),this.document=_l}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const Ba=t.Ps`
    query AssertionDetail($assertionId: Int!) {
  assertion(id: $assertionId) {
    ...AssertionDetailFields
  }
}
    ${_r}`;let Sc=(()=>{class z extends t.AE{constructor(ee){super(ee),this.document=Ba}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const Qr=t.Ps`
    query AssertionSummary($assertionId: Int!) {
  assertion(id: $assertionId) {
    ...AssertionSummaryFields
  }
}
    ${Gi}`;let yl=(()=>{class z extends t.AE{constructor(ee){super(ee),this.document=Qr}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const Ec=t.Ps`
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
    `;let Mu=(()=>{class z extends t.AE{constructor(ee){super(ee),this.document=Ec}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const bu=t.Ps`
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
    `;let xc=(()=>{class z extends t.AE{constructor(ee){super(ee),this.document=bu}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const Su=t.Ps`
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
    `;let Cl=(()=>{class z extends t.AE{constructor(ee){super(ee),this.document=Su}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const Eu=t.Ps`
    query DiseasesSummary($diseaseId: Int!) {
  disease(id: $diseaseId) {
    ...DiseasesSummaryFields
  }
}
    ${jn}`;let ys=(()=>{class z extends t.AE{constructor(ee){super(ee),this.document=Eu}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const Dc=t.Ps`
    query EvidenceDetail($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...EvidenceDetailFields
  }
}
    ${ao}`;let xu=(()=>{class z extends t.AE{constructor(ee){super(ee),this.document=Dc}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const Ji=t.Ps`
    query EvidenceSummary($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...EvidenceSummaryFields
  }
}
    ${Ue}`;let Oc=(()=>{class z extends t.AE{constructor(ee){super(ee),this.document=Ji}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const zl=t.Ps`
    query GeneDetail($geneId: Int!) {
  gene(id: $geneId) {
    ...GeneDetailFields
  }
}
    ${ae}`;let wc=(()=>{class z extends t.AE{constructor(ee){super(ee),this.document=zl}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const Qi=t.Ps`
    query GenesSummary($geneId: Int!) {
  gene(id: $geneId) {
    ...GeneSummaryFields
  }
}
    ${we}`;let ua=(()=>{class z extends t.AE{constructor(ee){super(ee),this.document=Qi}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const Tl=t.Ps`
    query MolecularProfileDetail($mpId: Int!) {
  molecularProfile(id: $mpId) {
    ...MolecularProfileDetailFields
  }
}
    ${zt}`;let da=(()=>{class z extends t.AE{constructor(ee){super(ee),this.document=Tl}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const wd=t.Ps`
    query MolecularProfileSummary($mpId: Int!) {
  molecularProfile(id: $mpId) {
    ...MolecularProfileSummaryFields
  }
}
    ${en}`;let V1=(()=>{class z extends t.AE{constructor(ee){super(ee),this.document=wd}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const B1=t.Ps`
    query OrganizationDetail($organizationId: Int!) {
  organization(id: $organizationId) {
    ...OrganizationDetailFields
  }
}
    ${hn}`;let Du=(()=>{class z extends t.AE{constructor(ee){super(ee),this.document=B1}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const H1=t.Ps`
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
    ${Jt}`;let Y1=(()=>{class z extends t.AE{constructor(ee){super(ee),this.document=H1}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const $1=t.Ps`
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
    ${yn}`;let U1=(()=>{class z extends t.AE{constructor(ee){super(ee),this.document=$1}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const Ml=t.Ps`
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
    `;let Pc=(()=>{class z extends t.AE{constructor(ee){super(ee),this.document=Ml}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const Ou=t.Ps`
    query DataReleases {
  dataReleases {
    ...Release
  }
}
    ${Rn}`;let rs=(()=>{class z extends t.AE{constructor(ee){super(ee),this.document=Ou}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const G1=t.Ps`
    query SourceDetail($sourceId: Int!) {
  source(id: $sourceId) {
    ...SourceDetailFields
  }
}
    ${Mn}`;let Q1=(()=>{class z extends t.AE{constructor(ee){super(ee),this.document=G1}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const wu=t.Ps`
    query SourceSummary($sourceId: Int!) {
  source(id: $sourceId) {
    ...SourceSummaryFields
  }
}
    ${dn}`;let bl=(()=>{class z extends t.AE{constructor(ee){super(ee),this.document=wu}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const Sl=t.Ps`
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
    `;let pa=(()=>{class z extends t.AE{constructor(ee){super(ee),this.document=Sl}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const Ha=t.Ps`
    query TherapiesSummary($therapyId: Int!) {
  therapy(id: $therapyId) {
    ...TherapiesSummaryFields
  }
}
    ${Gn}`;let Pu=(()=>{class z extends t.AE{constructor(ee){super(ee),this.document=Ha}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const Ic=t.Ps`
    query UserDetail($userId: Int!) {
  user(id: $userId) {
    ...UserDetailFields
  }
}
    ${Fn}`;let Ya=(()=>{class z extends t.AE{constructor(ee){super(ee),this.document=Ic}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const Iu=t.Ps`
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
    ${go}
${Ln}
${Bn}
${Jn}`;let j1=(()=>{class z extends t.AE{constructor(ee){super(ee),this.document=Iu}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const W1=t.Ps`
    mutation UpdateNotificationStatus($input: UpdateNotificationStatusInput!) {
  updateNotificationStatus(input: $input) {
    notifications {
      ...notificationNode
    }
  }
}
    ${Jn}`;let Z1=(()=>{class z extends t.mm{constructor(ee){super(ee),this.document=W1}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const K1=t.Ps`
    mutation Unsubscribe($input: UnsubscribeInput!) {
  unsubscribe(input: $input) {
    unsubscribedEntities {
      ...subscribable
    }
  }
}
    ${co}`;let J1=(()=>{class z extends t.mm{constructor(ee){super(ee),this.document=K1}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const Au=t.Ps`
    mutation Subscribe($input: SubscribeInput!) {
  subscribe(input: $input) {
    subscriptions {
      id
    }
  }
}
    `;let El=(()=>{class z extends t.mm{constructor(ee){super(ee),this.document=Au}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const Fu=t.Ps`
    query VariantGroupDetail($variantGroupId: Int!) {
  variantGroup(id: $variantGroupId) {
    ...VariantGroupDetailFields
  }
}
    ${Do}`;let xl=(()=>{class z extends t.AE{constructor(ee){super(ee),this.document=Fu}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();t.Ps`
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
    `;const Dl=t.Ps`
    query VariantGroupsSummary($variantGroupId: Int!) {
  variantGroup(id: $variantGroupId) {
    ...VariantGroupSummaryFields
  }
}
    ${qn}`;let Nu=(()=>{class z extends t.AE{constructor(ee){super(ee),this.document=Dl}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const ss=t.Ps`
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
    `;let Zn=(()=>{class z extends t.AE{constructor(ee){super(ee),this.document=ss}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const Si=t.Ps`
    query VariantDetail($variantId: Int!) {
  variant(id: $variantId) {
    ...VariantDetailFields
  }
}
    ${bo}`;let $a=(()=>{class z extends t.AE{constructor(ee){super(ee),this.document=Si}}return z.\u0275fac=function(ee){return new(ee||z)(i.LFG(t._M))},z.\u0275prov=i.Yz7({token:z,factory:z.\u0275fac,providedIn:"root"}),z})();const Ol=t.Ps`
    query VariantSummary($variantId: Int!) {
  variant(id: $variantId) {
    ...VariantSummaryFields
  }
}