"use strict";(self.webpackChunkmain=self.webpackChunkmain||[]).push([[179],{4265:(Et,be,c)=>{c.d(be,{T6:()=>A,VD:()=>U,WE:()=>R,Yt:()=>O,lC:()=>_,py:()=>L,rW:()=>i,s:()=>P,ve:()=>a,vq:()=>j});var t=c(6337);function i(E,H,G){return{r:255*(0,t.sh)(E,255),g:255*(0,t.sh)(H,255),b:255*(0,t.sh)(G,255)}}function _(E,H,G){E=(0,t.sh)(E,255),H=(0,t.sh)(H,255),G=(0,t.sh)(G,255);var Te=Math.max(E,H,G),me=Math.min(E,H,G),K=0,N=0,V=(Te+me)/2;if(Te===me)N=0,K=0;else{var S=Te-me;switch(N=V>.5?S/(2-Te-me):S/(Te+me),Te){case E:K=(H-G)/S+(H<G?6:0);break;case H:K=(G-E)/S+2;break;case G:K=(E-H)/S+4}K/=6}return{h:K,s:N,l:V}}function e(E,H,G){return G<0&&(G+=1),G>1&&(G-=1),G<1/6?E+6*G*(H-E):G<.5?H:G<2/3?E+(H-E)*(2/3-G)*6:E}function a(E,H,G){var Te,me,K;if(E=(0,t.sh)(E,360),H=(0,t.sh)(H,100),G=(0,t.sh)(G,100),0===H)me=G,K=G,Te=G;else{var N=G<.5?G*(1+H):G+H-G*H,V=2*G-N;Te=e(V,N,E+1/3),me=e(V,N,E),K=e(V,N,E-1/3)}return{r:255*Te,g:255*me,b:255*K}}function L(E,H,G){E=(0,t.sh)(E,255),H=(0,t.sh)(H,255),G=(0,t.sh)(G,255);var Te=Math.max(E,H,G),me=Math.min(E,H,G),K=0,N=Te,V=Te-me,S=0===Te?0:V/Te;if(Te===me)K=0;else{switch(Te){case E:K=(H-G)/V+(H<G?6:0);break;case H:K=(G-E)/V+2;break;case G:K=(E-H)/V+4}K/=6}return{h:K,s:S,v:N}}function R(E,H,G){E=6*(0,t.sh)(E,360),H=(0,t.sh)(H,100),G=(0,t.sh)(G,100);var Te=Math.floor(E),me=E-Te,K=G*(1-H),N=G*(1-me*H),V=G*(1-(1-me)*H),S=Te%6;return{r:255*[G,N,K,K,V,G][S],g:255*[V,G,G,N,K,K][S],b:255*[K,K,V,G,G,N][S]}}function j(E,H,G,Te){var me=[(0,t.FZ)(Math.round(E).toString(16)),(0,t.FZ)(Math.round(H).toString(16)),(0,t.FZ)(Math.round(G).toString(16))];return Te&&me[0].startsWith(me[0].charAt(1))&&me[1].startsWith(me[1].charAt(1))&&me[2].startsWith(me[2].charAt(1))?me[0].charAt(0)+me[1].charAt(0)+me[2].charAt(0):me.join("")}function P(E,H,G,Te,me){var K=[(0,t.FZ)(Math.round(E).toString(16)),(0,t.FZ)(Math.round(H).toString(16)),(0,t.FZ)(Math.round(G).toString(16)),(0,t.FZ)(F(Te))];return me&&K[0].startsWith(K[0].charAt(1))&&K[1].startsWith(K[1].charAt(1))&&K[2].startsWith(K[2].charAt(1))&&K[3].startsWith(K[3].charAt(1))?K[0].charAt(0)+K[1].charAt(0)+K[2].charAt(0)+K[3].charAt(0):K.join("")}function F(E){return Math.round(255*parseFloat(E)).toString(16)}function A(E){return U(E)/255}function U(E){return parseInt(E,16)}function O(E){return{r:E>>16,g:(65280&E)>>8,b:255&E}}},1309:(Et,be,c)=>{c.d(be,{R:()=>t});var t={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"}},6379:(Et,be,c)=>{c.d(be,{uA:()=>e});var t=c(4265),i=c(1309),_=c(6337);function e(U){var O={r:0,g:0,b:0},E=1,H=null,G=null,Te=null,me=!1,K=!1;return"string"==typeof U&&(U=function F(U){if(0===(U=U.trim().toLowerCase()).length)return!1;var O=!1;if(i.R[U])U=i.R[U],O=!0;else if("transparent"===U)return{r:0,g:0,b:0,a:0,format:"name"};var E=M.rgb.exec(U);return E?{r:E[1],g:E[2],b:E[3]}:(E=M.rgba.exec(U))?{r:E[1],g:E[2],b:E[3],a:E[4]}:(E=M.hsl.exec(U))?{h:E[1],s:E[2],l:E[3]}:(E=M.hsla.exec(U))?{h:E[1],s:E[2],l:E[3],a:E[4]}:(E=M.hsv.exec(U))?{h:E[1],s:E[2],v:E[3]}:(E=M.hsva.exec(U))?{h:E[1],s:E[2],v:E[3],a:E[4]}:(E=M.hex8.exec(U))?{r:(0,t.VD)(E[1]),g:(0,t.VD)(E[2]),b:(0,t.VD)(E[3]),a:(0,t.T6)(E[4]),format:O?"name":"hex8"}:(E=M.hex6.exec(U))?{r:(0,t.VD)(E[1]),g:(0,t.VD)(E[2]),b:(0,t.VD)(E[3]),format:O?"name":"hex"}:(E=M.hex4.exec(U))?{r:(0,t.VD)(E[1]+E[1]),g:(0,t.VD)(E[2]+E[2]),b:(0,t.VD)(E[3]+E[3]),a:(0,t.T6)(E[4]+E[4]),format:O?"name":"hex8"}:!!(E=M.hex3.exec(U))&&{r:(0,t.VD)(E[1]+E[1]),g:(0,t.VD)(E[2]+E[2]),b:(0,t.VD)(E[3]+E[3]),format:O?"name":"hex"}}(U)),"object"==typeof U&&(A(U.r)&&A(U.g)&&A(U.b)?(O=(0,t.rW)(U.r,U.g,U.b),me=!0,K="%"===String(U.r).substr(-1)?"prgb":"rgb"):A(U.h)&&A(U.s)&&A(U.v)?(H=(0,_.JX)(U.s),G=(0,_.JX)(U.v),O=(0,t.WE)(U.h,H,G),me=!0,K="hsv"):A(U.h)&&A(U.s)&&A(U.l)&&(H=(0,_.JX)(U.s),Te=(0,_.JX)(U.l),O=(0,t.ve)(U.h,H,Te),me=!0,K="hsl"),Object.prototype.hasOwnProperty.call(U,"a")&&(E=U.a)),E=(0,_.Yq)(E),{ok:me,format:U.format||K,r:Math.min(255,Math.max(O.r,0)),g:Math.min(255,Math.max(O.g,0)),b:Math.min(255,Math.max(O.b,0)),a:E}}var R="(?:".concat("[-\\+]?\\d*\\.\\d+%?",")|(?:").concat("[-\\+]?\\d+%?",")"),j="[\\s|\\(]+(".concat(R,")[,|\\s]+(").concat(R,")[,|\\s]+(").concat(R,")\\s*\\)?"),P="[\\s|\\(]+(".concat(R,")[,|\\s]+(").concat(R,")[,|\\s]+(").concat(R,")[,|\\s]+(").concat(R,")\\s*\\)?"),M={CSS_UNIT:new RegExp(R),rgb:new RegExp("rgb"+j),rgba:new RegExp("rgba"+P),hsl:new RegExp("hsl"+j),hsla:new RegExp("hsla"+P),hsv:new RegExp("hsv"+j),hsva:new RegExp("hsva"+P),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function A(U){return!!M.CSS_UNIT.exec(String(U))}},6337:(Et,be,c)=>{function t(j,P){(function _(j){return"string"==typeof j&&-1!==j.indexOf(".")&&1===parseFloat(j)})(j)&&(j="100%");var M=function e(j){return"string"==typeof j&&-1!==j.indexOf("%")}(j);return j=360===P?j:Math.min(P,Math.max(0,parseFloat(j))),M&&(j=parseInt(String(j*P),10)/100),Math.abs(j-P)<1e-6?1:j=360===P?(j<0?j%P+P:j%P)/parseFloat(String(P)):j%P/parseFloat(String(P))}function i(j){return Math.min(1,Math.max(0,j))}function a(j){return j=parseFloat(j),(isNaN(j)||j<0||j>1)&&(j=1),j}function L(j){return j<=1?"".concat(100*Number(j),"%"):j}function R(j){return 1===j.length?"0"+j:String(j)}c.d(be,{FZ:()=>R,JX:()=>L,V2:()=>i,Yq:()=>a,sh:()=>t})},3369:(Et,be,c)=>{c.d(be,{G:()=>Q});var t=c(5879),i=c(6814),_=c(4190),e=c(551),a=c(5695),L=c(7417),R=c(5676),j=c(7398),P=c(2181),M=c(313),F=c(2962),A=c(8125),U=c(3317),O=c(8091),E=c(2616);function H(de,pe){if(1&de&&(t._UZ(0,"i",9),t.ALo(1,"entityColor"),t._uU(2)),2&de){const he=t.oxw().ngIf;t.Q6J("nzTwotoneColor",t.lcZ(1,2,"ClinicalTrial")),t.xp6(2),t.hij(" ",he.nctId," ")}}function G(de,pe){if(1&de&&(t.TgZ(0,"cvc-link-tag",10),t._uU(1," View on clinicaltrials.gov "),t.qZA()),2&de){const he=t.oxw().ngIf;t.Q6J("href",he.url)}}function Te(de,pe){if(1&de&&(t.ynx(0),t.TgZ(1,"nz-card",2),t.YNc(2,H,3,4,"ng-template",null,3,t.W1O),t.YNc(4,G,2,1,"ng-template",null,4,t.W1O),t.TgZ(6,"nz-descriptions",5)(7,"nz-descriptions-item",6),t._uU(8),t.qZA(),t.TgZ(9,"nz-descriptions-item",7),t._uU(10),t.qZA(),t.TgZ(11,"nz-descriptions-item",8),t._uU(12),t.qZA()()(),t.BQk()),2&de){const he=pe.ngIf,Se=t.MAs(3),ke=t.MAs(5);t.xp6(1),t.Q6J("nzTitle",Se)("nzExtra",ke),t.xp6(5),t.Q6J("nzColumn",2),t.xp6(2),t.hij(" ",he.name," "),t.xp6(2),t.hij(" ",he.sourceCount," "),t.xp6(2),t.hij(" ",he.evidenceCount," ")}}let me=(()=>{class de{constructor(he){this.gql=he}ngOnInit(){if(null==this.clinicalTrialId)throw new Error("cvc-clinical-trial-popover requires valid clinicalTrialId input.");this.clinicalTrial$=this.gql.watch({clinicalTrialId:this.clinicalTrialId}).valueChanges.pipe((0,j.U)(({data:he})=>he?.clinicalTrials.edges[0]?.node),(0,P.h)(R.ep))}}return de.\u0275fac=function(he){return new(he||de)(t.Y36(M.UIR))},de.\u0275cmp=t.Xpm({type:de,selectors:[["cvc-clinical-trial-popover"]],inputs:{clinicalTrialId:"clinicalTrialId"},decls:3,vars:3,consts:[["id","popover-content"],[4,"ngIf"],["nzBordered","false","id","card-content",3,"nzTitle","nzExtra"],["cardTitle",""],["linkout",""],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","Name","nzSpan","2"],["nzTitle","Sources","nzSpan","2"],["nzTitle","Evidence","nzSpan","2"],["nz-icon","","nzTheme","twotone","nzType","civic-clinicaltrial",3,"nzTwotoneColor"],[3,"href"]],template:function(he,Se){1&he&&(t.TgZ(0,"div",0),t.YNc(1,Te,13,6,"ng-container",1),t.ALo(2,"ngrxPush"),t.qZA()),2&he&&(t.xp6(1),t.Q6J("ngIf",t.lcZ(2,1,Se.clinicalTrial$)))},dependencies:[i.O5,F.bd,e.Ls,A.R7,A.uj,U.l,O.fM,E.a],styles:["[_nghost-%COMP%]{display:block;margin:-8px -12px}[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}[_nghost-%COMP%]     .ant-descriptions-view{border:none}[_nghost-%COMP%]     #entity-child-counts{border-top:1px solid #f0f0f0;padding:8px}[_nghost-%COMP%]     #entity-child-counts nz-space{width:100%}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child nz-tag{margin-right:0}.popover-text[_ngcontent-%COMP%]{width:100%;padding:8px;border-bottom:1px solid #f0f0f0}#popover-content[_ngcontent-%COMP%]{min-width:350px;max-width:500px;min-height:125px}"]}),de})();function K(de,pe){}function N(de,pe){if(1&de&&(t.ynx(0),t.TgZ(1,"a",4),t.YNc(2,K,0,0,"ng-template",5),t.qZA(),t.BQk()),2&de){const he=t.oxw(),Se=t.MAs(2);t.xp6(1),t.Q6J("routerLink",he.clinicalTrial.link),t.xp6(1),t.Q6J("ngTemplateOutlet",Se)}}function V(de,pe){}function S(de,pe){if(1&de&&t._UZ(0,"cvc-clinical-trial-popover",8),2&de){const he=t.oxw(2);t.Q6J("clinicalTrialId",he.clinicalTrial.id)}}function I(de,pe){if(1&de&&(t.TgZ(0,"nz-tag",6),t.YNc(1,V,0,0,"ng-template",5),t.qZA(),t.YNc(2,S,1,1,"ng-template",null,7,t.W1O)),2&de){const he=t.MAs(3),Se=t.oxw(),ke=t.MAs(6);t.Q6J("nzPopoverMouseEnterDelay",.5)("nzPopoverContent",he)("nzPopoverTrigger",Se.enablePopover?"hover":null),t.xp6(1),t.Q6J("ngTemplateOutlet",ke)}}function b(de,pe){}function re(de,pe){if(1&de&&t.YNc(0,b,0,0,"ng-template",5),2&de){t.oxw();const he=t.MAs(2);t.Q6J("ngTemplateOutlet",he)}}function le(de,pe){if(1&de&&(t._UZ(0,"i",9),t.ALo(1,"entityColor"),t._uU(2)),2&de){const he=t.oxw();t.Q6J("nzTwotoneColor",t.lcZ(1,2,"ClinicalTrial")),t.xp6(2),t.hij(" ",he.clinicalTrial.nctId,"\n")}}let Q=(()=>{class de{set clinicalTrial(he){if(!he)throw new Error("clinical-trial-tag clinicalTrial Input requires LinkableClinicalTrial.");this._clinicalTrial=he}get clinicalTrial(){return this._clinicalTrial}constructor(){this.linked=!0,this.enablePopover=!0}}return de.\u0275fac=function(he){return new(he||de)},de.\u0275cmp=t.Xpm({type:de,selectors:[["cvc-clinical-trial-tag"]],inputs:{clinicalTrial:"clinicalTrial",linked:"linked",enablePopover:"enablePopover"},decls:7,vars:2,consts:[[4,"ngIf","ngIfElse"],["tag",""],["unlinked",""],["tagContent",""],[3,"routerLink"],[3,"ngTemplateOutlet"],["nz-popover","","nzPopoverPlacement","right",3,"nzPopoverMouseEnterDelay","nzPopoverContent","nzPopoverTrigger"],["clinicalTrialPopover",""],[3,"clinicalTrialId"],["nz-icon","","nzTheme","twotone","nzType","civic-clinicaltrial",3,"nzTwotoneColor"]],template:function(he,Se){if(1&he&&(t.YNc(0,N,3,2,"ng-container",0),t.YNc(1,I,4,4,"ng-template",null,1,t.W1O),t.YNc(3,re,1,1,"ng-template",null,2,t.W1O),t.YNc(5,le,3,4,"ng-template",null,3,t.W1O)),2&he){const ke=t.MAs(4);t.Q6J("ngIf",Se.linked)("ngIfElse",ke)}},dependencies:[i.O5,i.tP,_.rH,e.Ls,a.j,L.lU,me,E.a],styles:["[_nghost-%COMP%]{display:block}"]}),de})()},4605:(Et,be,c)=>{c.d(be,{N:()=>A});var t=c(6814),i=c(4190),_=c(5695),e=c(7417),a=c(6067),L=c(2524),R=c(2962),j=c(8125),P=c(551),M=c(5879);let F=(()=>{class U{}return U.\u0275fac=function(E){return new(E||U)},U.\u0275mod=M.oAB({type:U}),U.\u0275inj=M.cJS({imports:[t.ez,R.vh,P.PV,j.q6,a.X,L.s]}),U})(),A=(()=>{class U{}return U.\u0275fac=function(E){return new(E||U)},U.\u0275mod=M.oAB({type:U}),U.\u0275inj=M.cJS({imports:[t.ez,i.Bz,P.PV,_.X,e.$6,F,L.s]}),U})()},2851:(Et,be,c)=>{c.d(be,{I:()=>N});var t=c(5676),i=c(7398),_=c(2181),e=c(5879),a=c(313),L=c(6814),R=c(2962),j=c(8125),P=c(551),M=c(2392),F=c(3317),A=c(8091),U=c(5869);function O(V,S){if(1&V&&(e._UZ(0,"i",12),e._uU(1),e.ALo(2,"truncate")),2&V){const I=e.oxw().ngIf;e.xp6(1),e.hij(" ",e.xi3(2,1,I.name,50)," ")}}function E(V,S){if(1&V&&(e.TgZ(0,"cvc-link-tag",14),e._uU(1),e.qZA()),2&V){const I=e.oxw(2).ngIf;e.Q6J("href",I.diseaseUrl),e.xp6(1),e.hij(" DOID: ",I.doid," ")}}function H(V,S){if(1&V&&e.YNc(0,E,2,2,"cvc-link-tag",13),2&V){const I=e.oxw().ngIf,b=e.MAs(7);e.Q6J("ngIf",I.doid)("ngIfElse",b)}}function G(V,S){1&V&&(e.TgZ(0,"span",15),e._uU(1,"No DOID"),e.qZA())}function Te(V,S){if(1&V&&(e.TgZ(0,"nz-descriptions-item",16),e._uU(1),e.qZA()),2&V){const I=e.oxw().ngIf;e.xp6(1),e.hij(" ",I.name," ")}}function me(V,S){if(1&V&&(e.TgZ(0,"nz-descriptions-item",17),e._uU(1),e.qZA()),2&V){const I=e.oxw().ngIf;e.xp6(1),e.hij(" ",I.diseaseAliases.join(", ")," ")}}function K(V,S){if(1&V&&(e.ynx(0),e.TgZ(1,"nz-card",2),e.YNc(2,O,3,4,"ng-template",null,3,e.W1O),e.YNc(4,H,1,2,"ng-template",null,4,e.W1O),e.YNc(6,G,2,0,"ng-template",null,5,e.W1O),e.TgZ(8,"nz-descriptions",6),e.YNc(9,Te,2,1,"nz-descriptions-item",7),e.YNc(10,me,2,1,"nz-descriptions-item",8),e.TgZ(11,"nz-descriptions-item",9),e._uU(12),e.qZA(),e.TgZ(13,"nz-descriptions-item",10),e._uU(14),e.qZA(),e.TgZ(15,"nz-descriptions-item",11),e._uU(16),e.qZA()()(),e.BQk()),2&V){const I=S.ngIf,b=e.MAs(3),re=e.MAs(5);e.xp6(1),e.Q6J("nzTitle",b)("nzExtra",re),e.xp6(7),e.Q6J("nzColumn",1),e.xp6(1),e.Q6J("ngIf",I.name.length>50),e.xp6(1),e.Q6J("ngIf",I.diseaseAliases.length>0),e.xp6(2),e.hij(" ",I.assertionCount," "),e.xp6(2),e.hij(" ",I.evidenceItemCount," "),e.xp6(2),e.hij(" ",I.molecularProfileCount," ")}}let N=(()=>{class V{constructor(I){this.gql=I}ngOnInit(){if(null==this.diseaseId)throw new Error("cvc-disease-popover requires valid diseaseId input.");this.disease$=this.gql.watch({diseaseId:this.diseaseId}).valueChanges.pipe((0,i.U)(({data:I})=>I?.diseasePopover),(0,_.h)(t.ep))}}return V.\u0275fac=function(I){return new(I||V)(e.Y36(a.k7O))},V.\u0275cmp=e.Xpm({type:V,selectors:[["cvc-disease-popover"]],inputs:{diseaseId:"diseaseId"},decls:3,vars:3,consts:[["id","popover-content"],[4,"ngIf"],["nzBordered","false","id","card-content",3,"nzTitle","nzExtra"],["cardTitle",""],["linkout",""],["noDoid",""],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","Name","nzSpan","2",4,"ngIf"],["nzTitle","Aliases","nzSpan","2",4,"ngIf"],["nzTitle","Assertions","nzSpan","1"],["nzTitle","Evidence","nzSpan","1"],["nzTitle","Molecular Profiles","nzSpan","1"],["nz-icon","","nzType","civic-disease","nzTheme","twotone","nzTwotoneColor","#E62F76"],["tooltip","View on disease-ontology.org",3,"href",4,"ngIf","ngIfElse"],["tooltip","View on disease-ontology.org",3,"href"],["nz-typography","","nzType","secondary"],["nzTitle","Name","nzSpan","2"],["nzTitle","Aliases","nzSpan","2"]],template:function(I,b){1&I&&(e.TgZ(0,"div",0),e.YNc(1,K,17,8,"ng-container",1),e.ALo(2,"ngrxPush"),e.qZA()),2&I&&(e.xp6(1),e.Q6J("ngIf",e.lcZ(2,1,b.disease$)))},dependencies:[L.O5,R.bd,j.R7,j.uj,P.Ls,M.ZU,F.l,A.fM,U.W],styles:["[_nghost-%COMP%]{display:block;margin:-8px -12px}[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}[_nghost-%COMP%]     .ant-descriptions-view{border:none}[_nghost-%COMP%]     #entity-child-counts{border-top:1px solid #f0f0f0;padding:8px}[_nghost-%COMP%]     #entity-child-counts nz-space{width:100%}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child nz-tag{margin-right:0}.popover-text[_ngcontent-%COMP%]{width:100%;padding:8px;border-bottom:1px solid #f0f0f0}#popover-content[_ngcontent-%COMP%]{min-width:350px;max-width:500px;min-height:125px}"]}),V})()},5687:(Et,be,c)=>{c.d(be,{t:()=>P});var t=c(6814),i=c(2962),_=c(8125),e=c(551),a=c(6067),L=c(2392),R=c(2524),j=c(5879);let P=(()=>{class M{}return M.\u0275fac=function(A){return new(A||M)},M.\u0275mod=j.oAB({type:M}),M.\u0275inj=j.cJS({imports:[t.ez,i.vh,_.q6,e.PV,L.ZJ,R.s,a.X]}),M})()},9775:(Et,be,c)=>{c.d(be,{n:()=>K});var t=c(8130),i=c(5879),_=c(6814),e=c(4190),a=c(5695),L=c(7417),R=c(551),j=c(2851),P=c(5869);function M(N,V){}function F(N,V){if(1&N&&(i.ynx(0),i.TgZ(1,"a",4),i.YNc(2,M,0,0,"ng-template",5),i.qZA(),i.BQk()),2&N){const S=i.oxw(),I=i.MAs(2);i.xp6(1),i.Q6J("routerLink",S.disease.link),i.xp6(1),i.Q6J("ngTemplateOutlet",I)}}function A(N,V){}function U(N,V){if(1&N&&i._UZ(0,"cvc-disease-popover",8),2&N){const S=i.oxw(2);i.Q6J("diseaseId",S.disease.id)}}function O(N,V){if(1&N){const S=i.EpF();i.TgZ(0,"nz-tag",6),i.NdJ("nzOnClose",function(b){i.CHM(S);const re=i.oxw();return i.KtG(re.itemClosed(b))}),i.YNc(1,A,0,0,"ng-template",5),i.qZA(),i.YNc(2,U,1,1,"ng-template",null,7,i.W1O)}if(2&N){const S=i.MAs(3),I=i.oxw(),b=i.MAs(6);i.Q6J("nzPopoverMouseEnterDelay",I.onCloseClicked?0:.5)("nzPopoverContent",S)("nzPopoverTrigger",I.enablePopover?"hover":null)("nzMode",I.onCloseClicked?"closeable":"default"),i.xp6(1),i.Q6J("ngTemplateOutlet",b)}}function E(N,V){}function H(N,V){if(1&N&&i.YNc(0,E,0,0,"ng-template",5),2&N){i.oxw();const S=i.MAs(2);i.Q6J("ngTemplateOutlet",S)}}function G(N,V){if(1&N&&(i.ynx(0),i._uU(1),i.ALo(2,"truncate"),i.BQk()),2&N){const S=i.oxw(2);i.xp6(1),i.hij(" ",i.xi3(2,1,S.disease.name,27)," ")}}function Te(N,V){if(1&N&&i._uU(0),2&N){const S=i.oxw(2);i.hij(" ",S.disease.name," ")}}function me(N,V){if(1&N&&(i._UZ(0,"i",9),i.YNc(1,G,3,4,"ng-container",0),i.YNc(2,Te,1,1,"ng-template",null,10,i.W1O)),2&N){const S=i.MAs(3),I=i.oxw();i.xp6(1),i.Q6J("ngIf",I.truncateLongName)("ngIfElse",S)}}let K=(()=>{class N extends t.a{constructor(){super(...arguments),this.enablePopover=!0,this.truncateLongName=!1}set disease(S){if(!S)throw new Error("disease-tag disease Input requires LinkableDisease.");this._disease=S}get disease(){return this._disease}idFunction(){return this.disease.id}}return N.\u0275fac=function(){let V;return function(I){return(V||(V=i.n5z(N)))(I||N)}}(),N.\u0275cmp=i.Xpm({type:N,selectors:[["cvc-disease-tag"]],inputs:{disease:"disease",enablePopover:"enablePopover",truncateLongName:"truncateLongName"},features:[i.qOj],decls:7,vars:2,consts:[[4,"ngIf","ngIfElse"],["tag",""],["unlinked",""],["tagContent",""],[3,"routerLink"],[3,"ngTemplateOutlet"],["nz-popover","","nzPopoverPlacement","right",3,"nzPopoverMouseEnterDelay","nzPopoverContent","nzPopoverTrigger","nzMode","nzOnClose"],["diseasePopover",""],[3,"diseaseId"],["nz-icon","","nzType","civic-disease","nzTheme","twotone","nzTwotoneColor","#E62F76"],["fullName",""]],template:function(S,I){if(1&S&&(i.YNc(0,F,3,2,"ng-container",0),i.YNc(1,O,4,5,"ng-template",null,1,i.W1O),i.YNc(3,H,1,1,"ng-template",null,2,i.W1O),i.YNc(5,me,4,2,"ng-template",null,3,i.W1O)),2&S){const b=i.MAs(4);i.Q6J("ngIf",I.linked)("ngIfElse",b)}},dependencies:[_.O5,_.tP,e.rH,a.j,L.lU,R.Ls,j.I,P.W],encapsulation:2,changeDetection:0}),N})()},3396:(Et,be,c)=>{c.d(be,{Q:()=>P});var t=c(6814),i=c(4190),_=c(5695),e=c(7417),a=c(551),L=c(5687),R=c(2524),j=c(5879);let P=(()=>{class M{}return M.\u0275fac=function(A){return new(A||M)},M.\u0275mod=j.oAB({type:M}),M.\u0275inj=j.cJS({imports:[t.ez,i.Bz,_.X,e.$6,a.PV,R.s,L.t]}),M})()},8213:(Et,be,c)=>{c.d(be,{_:()=>gt});var t=c(7398),i=c(2181),_=c(5676),e=c(5879),a=c(313),L=c(6814),R=c(4190),j=c(551),P=c(2962),M=c(95),F=c(8125),A=c(5695),U=c(2574),O=c(2392),E=c(4770),H=c(9775),G=c(3897),Te=c(4138),me=c(2384),K=c(2606),N=c(5095),V=c(8091),S=c(6967),I=c(2616);function b(Ze,jt){if(1&Ze&&(e.ynx(0),e._UZ(1,"i",17),e.ALo(2,"entityColor"),e._uU(3),e.BQk()),2&Ze){const Zt=e.oxw(2).ngIf;e.xp6(1),e.Q6J("nzTwotoneColor",e.lcZ(2,2,"EvidenceItem")),e.xp6(2),e.hij(" ",Zt.name," ")}}function re(Ze,jt){if(1&Ze&&e._UZ(0,"cvc-status-tag",18),2&Ze){const Zt=e.oxw(2).ngIf;e.Q6J("status",Zt.status)}}function le(Ze,jt){1&Ze&&(e.TgZ(0,"nz-space"),e.YNc(1,b,4,4,"ng-container",15),e.YNc(2,re,1,1,"cvc-status-tag",16),e.qZA())}function Q(Ze,jt){if(1&Ze&&e._UZ(0,"cvc-molecular-profile-tag",19),2&Ze){const Zt=e.oxw().ngIf;e.Q6J("molecularProfile",Zt.molecularProfile)("enablePopover",!1)("truncateLongName",!0)}}function de(Ze,jt){if(1&Ze&&(e.ynx(0),e._uU(1),e.BQk()),2&Ze){const Zt=jt.ngIf;e.xp6(1),e.hij(" ",Zt," ")}}function pe(Ze,jt){if(1&Ze&&(e.TgZ(0,"nz-descriptions",20)(1,"nz-descriptions-item",21),e._UZ(2,"cvc-mp-tag-name",22),e.qZA(),e.TgZ(3,"nz-descriptions-item",23),e._UZ(4,"cvc-source-tag",24),e.qZA()()),2&Ze){const Zt=e.oxw().ngIf;e.Q6J("nzColumn",1),e.xp6(2),e.Q6J("nameSegments",Zt.molecularProfile.parsedName)("enablePopover",!1),e.xp6(2),e.Q6J("source",Zt.source)("enablePopover",!1)}}function he(Ze,jt){if(1&Ze&&(e.ynx(0),e._UZ(1,"cvc-disease-tag",35),e.BQk()),2&Ze){const Zt=e.oxw(2).ngIf;e.xp6(1),e.Q6J("enablePopover",!1)("disease",Zt.disease)("truncateLongName",!0)}}function Se(Ze,jt){1&Ze&&e._uU(0," N/A ")}function ke(Ze,jt){if(1&Ze&&(e.TgZ(0,"span"),e._UZ(1,"cvc-therapy-tag",38),e.qZA()),2&Ze){const Zt=jt.$implicit;e.xp6(1),e.Q6J("enablePopover",!1)("therapy",Zt)("truncateLongName",!0)}}function Ft(Ze,jt){if(1&Ze&&(e.ynx(0),e._uU(1),e.ALo(2,"titlecase"),e.BQk()),2&Ze){const Zt=e.oxw(3).ngIf;e.xp6(1),e.hij(" ",e.lcZ(2,1,Zt.therapyInteractionType)," ")}}function wt(Ze,jt){if(1&Ze&&(e.TgZ(0,"nz-descriptions-item",36),e.YNc(1,ke,2,3,"span",37),e.YNc(2,Ft,3,3,"ng-container",1),e.qZA()),2&Ze){const Zt=e.oxw(2).ngIf;e.xp6(1),e.Q6J("ngForOf",Zt.therapies),e.xp6(1),e.Q6J("ngIf",Zt.therapies.length>1)}}function tn(Ze,jt){if(1&Ze&&(e.TgZ(0,"span"),e._UZ(1,"cvc-phenotype-tag",40),e.qZA()),2&Ze){const Zt=jt.$implicit;e.xp6(1),e.Q6J("enablePopover",!1)("phenotype",Zt)}}function xt(Ze,jt){if(1&Ze&&(e.TgZ(0,"nz-descriptions-item",39),e.YNc(1,tn,2,2,"span",37),e.qZA()),2&Ze){const Zt=e.oxw(2).ngIf;e.xp6(1),e.Q6J("ngForOf",Zt.phenotypes)}}function $t(Ze,jt){if(1&Ze&&(e.TgZ(0,"nz-descriptions",20)(1,"nz-descriptions-item",25),e._uU(2),e.qZA(),e.TgZ(3,"nz-descriptions-item",26),e._uU(4),e.ALo(5,"evidenceEnumDisplay"),e.qZA(),e.TgZ(6,"nz-descriptions-item",27),e._uU(7),e.ALo(8,"evidenceEnumDisplay"),e.qZA(),e.TgZ(9,"nz-descriptions-item",28),e._uU(10),e.ALo(11,"evidenceEnumDisplay"),e.qZA(),e.TgZ(12,"nz-descriptions-item",29),e._uU(13),e._UZ(14,"i",30),e.qZA(),e.TgZ(15,"nz-descriptions-item",31),e.YNc(16,he,2,3,"ng-container",9),e.YNc(17,Se,1,0,"ng-template",null,32,e.W1O),e.qZA(),e.YNc(19,wt,3,2,"nz-descriptions-item",33),e.YNc(20,xt,2,1,"nz-descriptions-item",34),e.qZA()),2&Ze){const Zt=e.MAs(18),yn=e.oxw().ngIf;e.Q6J("nzColumn",2),e.xp6(2),e.hij(" ",yn.evidenceLevel," "),e.xp6(2),e.hij(" ",e.lcZ(5,10,yn.evidenceType)," "),e.xp6(3),e.hij(" ",e.lcZ(8,12,yn.evidenceDirection)," "),e.xp6(3),e.hij(" ",e.lcZ(11,14,yn.significance)," "),e.xp6(3),e.hij(" ",yn.evidenceRating,""),e.xp6(3),e.Q6J("ngIf",yn.disease)("ngIfElse",Zt),e.xp6(3),e.Q6J("ngIf",yn.therapies.length>0),e.xp6(1),e.Q6J("ngIf",yn.phenotypes.length>0)}}function Xt(Ze,jt){if(1&Ze&&(e.TgZ(0,"a",41)(1,"nz-tag",42),e._UZ(2,"i",43),e._uU(3),e.qZA()()),2&Ze){const Zt=e.oxw().ngIf;e.MGl("routerLink","/evidence/",Zt.id,"/flags"),e.xp6(3),e.hij(" Flags (",Zt.flags.totalCount,") ")}}function un(Ze,jt){if(1&Ze&&(e.TgZ(0,"a",41)(1,"nz-tag",44),e._UZ(2,"i",45),e._uU(3),e.qZA()()),2&Ze){const Zt=e.oxw().ngIf;e.MGl("routerLink","/evidence/",Zt.id,"/revisions"),e.xp6(3),e.hij(" Revisions (",Zt.revisions.totalCount,") ")}}function Ln(Ze,jt){if(1&Ze&&(e.TgZ(0,"a",41)(1,"nz-tag",46),e._UZ(2,"i",47),e._uU(3),e.qZA()()),2&Ze){const Zt=e.oxw().ngIf;e.MGl("routerLink","/evidence/",Zt.id,"/comments"),e.xp6(3),e.hij(" Comments (",Zt.comments.totalCount,") ")}}function rt(Ze,jt){if(1&Ze&&(e.ynx(0),e.TgZ(1,"nz-card",3),e.YNc(2,le,3,0,"ng-template",null,4,e.W1O),e.YNc(4,Q,1,3,"ng-template",null,5,e.W1O),e.TgZ(6,"nz-row")(7,"nz-col",6)(8,"div",7)(9,"p",8),e.YNc(10,de,2,1,"ng-container",9),e.qZA()()()(),e.TgZ(11,"nz-space",10),e.YNc(12,pe,5,5,"nz-descriptions",11),e.YNc(13,$t,21,16,"nz-descriptions",11),e.qZA(),e.TgZ(14,"nz-row",12)(15,"nz-col",6)(16,"nz-space",13),e.YNc(17,Xt,4,2,"a",14),e.YNc(18,un,4,2,"a",14),e.YNc(19,Ln,4,2,"a",14),e.qZA()()()(),e.BQk()),2&Ze){const Zt=jt.ngIf,yn=e.MAs(3),wn=e.MAs(5);e.oxw();const rn=e.MAs(4);e.xp6(1),e.Q6J("nzTitle",yn)("nzExtra",wn),e.xp6(8),e.Q6J("nzEllipsisRows",4),e.xp6(1),e.Q6J("ngIf",Zt.description)("ngIfElse",rn)}}function $e(Ze,jt){1&Ze&&e._uU(0," Evidence item has not been provided a description.\n")}let gt=(()=>{class Ze{constructor(Zt){this.gql=Zt}ngOnInit(){if(null==this.evidenceId)throw new Error("cvc-evidence-popover requires valid evidenceId input.");this.evidence$=this.gql.watch({evidenceId:this.evidenceId}).valueChanges.pipe((0,t.U)(({data:Zt})=>Zt?.evidenceItem),(0,i.h)(_.ep))}}return Ze.\u0275fac=function(Zt){return new(Zt||Ze)(e.Y36(a.Ybm))},Ze.\u0275cmp=e.Xpm({type:Ze,selectors:[["cvc-evidence-popover"]],inputs:{evidenceId:"evidenceId"},decls:5,vars:3,consts:[["id","popover-content"],[4,"ngIf"],["noDescription",""],["nzBordered","false","id","card-content",3,"nzTitle","nzExtra"],["cardTitle",""],["molecularProfile",""],["nzSpan","24"],[1,"popover-text"],["nz-typography","","nzEllipsis","","nzExpandable","",3,"nzEllipsisRows"],[4,"ngIf","ngIfElse"],["nzDirection","vertical","nzSize","small"],["nzSize","small","nzBordered","true",3,"nzColumn",4,"nzSpaceItem"],["id","entity-child-counts"],["nzSize","small"],[3,"routerLink",4,"nzSpaceItem"],[4,"nzSpaceItem"],["style","font-weight: normal",3,"status",4,"nzSpaceItem"],["nz-icon","","nzTheme","twotone","nzType","civic-evidence",3,"nzTwotoneColor"],[2,"font-weight","normal",3,"status"],[3,"molecularProfile","enablePopover","truncateLongName"],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","MP Expression"],[3,"nameSegments","enablePopover"],["nzTitle","Source","nzSpan","2"],[3,"source","enablePopover"],["nzTitle","Level"],["nzTitle","Type"],["nzTitle","Direction"],["nzTitle","Clinical Significance","nzSpan","2"],["nzTitle","Rating"],["nz-icon","","nzType","star","nzTheme","fill"],["nzTitle","Disease"],["noDisease",""],["nzTitle","Therapies","nzSpan","2",4,"ngIf"],["nzTitle","Phenotypes","nzSpan","2",4,"ngIf"],[3,"enablePopover","disease","truncateLongName"],["nzTitle","Therapies","nzSpan","2"],[4,"ngFor","ngForOf"],[3,"enablePopover","therapy","truncateLongName"],["nzTitle","Phenotypes","nzSpan","2"],[3,"enablePopover","phenotype"],[3,"routerLink"],["nzColor","red"],["nz-icon","","nzType","civic-flag"],["nzColor","orange"],["nz-icon","","nzType","civic-revision"],["nzColor","blue"],["nz-icon","","nzType","civic-comment"]],template:function(Zt,yn){1&Zt&&(e.TgZ(0,"div",0),e.YNc(1,rt,20,5,"ng-container",1),e.ALo(2,"ngrxPush"),e.qZA(),e.YNc(3,$e,1,0,"ng-template",null,2,e.W1O)),2&Zt&&(e.xp6(1),e.Q6J("ngIf",e.lcZ(2,1,yn.evidence$)))},dependencies:[L.sg,L.O5,R.rH,j.Ls,P.bd,M.t3,M.SK,F.R7,F.uj,A.j,U.NU,U.$1,O.ZU,E.T,H.n,G.i,Te.T,me.h,K.p,N.C,L.rS,V.fM,S.Do,I.a],styles:["[_nghost-%COMP%]{display:block;margin:-8px -12px}[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}[_nghost-%COMP%]     .ant-descriptions-view{border:none}[_nghost-%COMP%]     #entity-child-counts{border-top:1px solid #f0f0f0;padding:8px}[_nghost-%COMP%]     #entity-child-counts nz-space{width:100%}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child nz-tag{margin-right:0}.popover-text[_ngcontent-%COMP%]{width:100%;padding:8px;border-bottom:1px solid #f0f0f0}#popover-content[_ngcontent-%COMP%]{min-width:350px;max-width:500px;min-height:125px}"]}),Ze})()},1855:(Et,be,c)=>{c.d(be,{f:()=>me});var t=c(6814),i=c(2962),_=c(95),e=c(8125),a=c(4190),L=c(5695),R=c(3396),j=c(3043),P=c(2574),M=c(551),F=c(2524),A=c(8641),U=c(2655),O=c(2392),E=c(9858),H=c(8527),G=c(6061),Te=c(5879);let me=(()=>{class K{}return K.\u0275fac=function(V){return new(V||K)},K.\u0275mod=Te.oAB({type:K}),K.\u0275inj=Te.cJS({imports:[t.ez,a.Bz,M.PV,i.vh,_.Jb,e.q6,L.X,P.zf,O.ZJ,F.s,G.N,R.Q,j.y,A.s,U.x,H.u,E.r]}),K})()},1598:(Et,be,c)=>{c.d(be,{Q:()=>S});var t=c(5676),i=c(7398),_=c(2181),e=c(5879),a=c(313),L=c(6814),R=c(4190),j=c(2962),P=c(95),M=c(8125),F=c(5695),A=c(551),U=c(2574),O=c(8091),E=c(2616);function H(I,b){if(1&I&&(e._UZ(0,"i",11),e.ALo(1,"entityColor"),e._uU(2)),2&I){const re=e.oxw().ngIf;e.Q6J("nzTwotoneColor",e.lcZ(1,2,"Gene")),e.xp6(2),e.hij(" ",re.officialName," ")}}function G(I,b){if(1&I&&(e.TgZ(0,"nz-tag"),e._uU(1),e.qZA()),2&I){const re=b.$implicit;e.xp6(1),e.Oqu(re)}}function Te(I,b){if(1&I&&(e.TgZ(0,"nz-descriptions-item",12),e.YNc(1,G,2,1,"nz-tag",13),e.qZA()),2&I){const re=e.oxw().ngIf;e.xp6(1),e.Q6J("ngForOf",re.geneAliases)}}function me(I,b){if(1&I&&(e.TgZ(0,"a",14)(1,"nz-tag",15),e._UZ(2,"i",16),e._uU(3),e.qZA()()),2&I){const re=e.oxw().ngIf;e.MGl("routerLink","/genes/",re.id,"/flags"),e.xp6(3),e.hij(" Flags (",re.flags.totalCount,") ")}}function K(I,b){if(1&I&&(e.TgZ(0,"a",14)(1,"nz-tag",17),e._UZ(2,"i",18),e._uU(3),e.qZA()()),2&I){const re=e.oxw().ngIf;e.MGl("routerLink","/genes/",re.id,"/revisions"),e.xp6(3),e.hij(" Revisions (",re.revisions.totalCount,") ")}}function N(I,b){if(1&I&&(e.TgZ(0,"a",14)(1,"nz-tag",19),e._UZ(2,"i",20),e._uU(3),e.qZA()()),2&I){const re=e.oxw().ngIf;e.MGl("routerLink","/genes/",re.id,"/comments"),e.xp6(3),e.hij(" Comments (",re.comments.totalCount,") ")}}function V(I,b){if(1&I&&(e.ynx(0),e.TgZ(1,"nz-card",2),e.YNc(2,H,3,4,"ng-template",null,3,e.W1O),e.TgZ(4,"nz-descriptions",4),e.YNc(5,Te,2,1,"nz-descriptions-item",5),e.TgZ(6,"nz-descriptions-item",6),e._uU(7),e.qZA()(),e.TgZ(8,"nz-row",7)(9,"nz-col",8)(10,"nz-space",9),e.YNc(11,me,4,2,"a",10),e.YNc(12,K,4,2,"a",10),e.YNc(13,N,4,2,"a",10),e.qZA()()()(),e.BQk()),2&I){const re=b.ngIf,le=e.MAs(3);e.xp6(1),e.Q6J("nzTitle",le),e.xp6(3),e.Q6J("nzColumn",2),e.xp6(1),e.Q6J("ngIf",re.geneAliases.length>0),e.xp6(2),e.hij(" ",re.variants.totalCount," ")}}let S=(()=>{class I{constructor(re){this.gql=re}ngOnInit(){if(null==this.geneId)throw new Error("cvc-gene-popover requires valid geneId input.");this.gene$=this.gql.watch({geneId:this.geneId}).valueChanges.pipe((0,i.U)(({data:re})=>re?.gene),(0,_.h)(t.ep))}}return I.\u0275fac=function(re){return new(re||I)(e.Y36(a.rJ8))},I.\u0275cmp=e.Xpm({type:I,selectors:[["cvc-gene-popover"]],inputs:{geneId:"geneId"},decls:3,vars:3,consts:[["id","popover-content"],[4,"ngIf"],["nzBordered","false","id","card-content",3,"nzTitle"],["cardTitle",""],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","Aliases","nzSpan","2",4,"ngIf"],["nzTitle","Variants"],["id","entity-child-counts"],["nzSpan","24"],["nzSize","small"],[3,"routerLink",4,"nzSpaceItem"],["nz-icon","","nzTheme","twotone","nzType","civic-gene",3,"nzTwotoneColor"],["nzTitle","Aliases","nzSpan","2"],[4,"ngFor","ngForOf"],[3,"routerLink"],["nzColor","red"],["nz-icon","","nzType","civic-flag"],["nzColor","orange"],["nz-icon","","nzType","civic-revision"],["nzColor","blue"],["nz-icon","","nzType","civic-comment"]],template:function(re,le){1&re&&(e.TgZ(0,"div",0),e.YNc(1,V,14,4,"ng-container",1),e.ALo(2,"ngrxPush"),e.qZA()),2&re&&(e.xp6(1),e.Q6J("ngIf",e.lcZ(2,1,le.gene$)))},dependencies:[L.sg,L.O5,R.rH,j.bd,P.t3,P.SK,M.R7,M.uj,F.j,A.Ls,U.NU,U.$1,O.fM,E.a],styles:["[_nghost-%COMP%]{display:block;margin:-8px -12px}[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}[_nghost-%COMP%]     .ant-descriptions-view{border:none}[_nghost-%COMP%]     #entity-child-counts{border-top:1px solid #f0f0f0;padding:8px}[_nghost-%COMP%]     #entity-child-counts nz-space{width:100%}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child nz-tag{margin-right:0}.popover-text[_ngcontent-%COMP%]{width:100%;padding:8px;border-bottom:1px solid #f0f0f0}#popover-content[_ngcontent-%COMP%]{min-width:350px;max-width:500px;min-height:125px}"]}),I})()},9021:(Et,be,c)=>{c.d(be,{w:()=>F});var t=c(6814),i=c(4190),_=c(2524),e=c(2962),a=c(8125),L=c(95),R=c(551),j=c(2574),P=c(5695),M=c(5879);let F=(()=>{class A{}return A.\u0275fac=function(O){return new(O||A)},A.\u0275mod=M.oAB({type:A}),A.\u0275inj=M.cJS({imports:[t.ez,i.Bz,e.vh,L.Jb,a.q6,P.X,R.PV,j.zf,_.s]}),A})()},4121:(Et,be,c)=>{c.d(be,{H:()=>S});var t=c(8130),i=c(2023),_=c(5879),e=c(6814),a=c(4190),L=c(5695),R=c(7417),j=c(551),P=c(1598),M=c(3103),F=c(5869),A=c(2616);function U(I,b){}function O(I,b){if(1&I&&(_.ynx(0),_.TgZ(1,"a",4),_.YNc(2,U,0,0,"ng-template",5),_.qZA(),_.BQk()),2&I){const re=_.oxw(),le=_.MAs(2);_.xp6(1),_.Q6J("routerLink",re.gene.link),_.xp6(1),_.Q6J("ngTemplateOutlet",le)}}function E(I,b){}function H(I,b){if(1&I&&_._UZ(0,"cvc-gene-popover",8),2&I){const re=_.oxw(2);_.Q6J("geneId",re.gene.id)}}function G(I,b){if(1&I){const re=_.EpF();_.TgZ(0,"nz-tag",6),_.NdJ("nzOnClose",function(Q){_.CHM(re);const de=_.oxw();return _.KtG(de.itemClosed(Q))}),_.YNc(1,E,0,0,"ng-template",5),_.qZA(),_.YNc(2,H,1,1,"ng-template",null,7,_.W1O)}if(2&I){const re=_.MAs(3),le=_.oxw(),Q=_.MAs(6);_.Q6J("nzPopoverMouseEnterDelay",le.onCloseClicked?0:.5)("nzPopoverContent",re)("nzPopoverTrigger",le.enablePopover?"hover":null)("nzMode",le.onCloseClicked?"closeable":"default"),_.xp6(1),_.Q6J("ngTemplateOutlet",Q)}}function Te(I,b){}function me(I,b){if(1&I&&_.YNc(0,Te,0,0,"ng-template",5),2&I){_.oxw();const re=_.MAs(2);_.Q6J("ngTemplateOutlet",re)}}function K(I,b){if(1&I&&(_.ynx(0),_._uU(1),_.ALo(2,"truncate"),_.BQk()),2&I){const re=_.oxw(2);_.xp6(1),_.hij(" ",_.xi3(2,1,re.gene.name,12)," ")}}function N(I,b){if(1&I&&_._uU(0),2&I){const re=_.oxw(2);_.hij(" ",re.gene.name," ")}}function V(I,b){if(1&I&&(_.TgZ(0,"cvc-icon-badges",9),_._UZ(1,"i",10),_.ALo(2,"entityColor"),_.qZA(),_.YNc(3,K,3,4,"ng-container",0),_.YNc(4,N,1,1,"ng-template",null,11,_.W1O)),2&I){const re=_.MAs(5),le=_.oxw();_.Q6J("flagged",le.gene.flagged)("entityColor",le.iconColor),_.xp6(1),_.Q6J("nzTwotoneColor",_.lcZ(2,5,"Gene")),_.xp6(2),_.Q6J("ngIf",le.truncateLongName)("ngIfElse",re)}}let S=(()=>{class I extends t.a{constructor(){super(),this.enablePopover=!0,this.truncateLongName=!1,this.iconColor=(0,i.f)("Gene")}idFunction(){return this.gene.id}ngOnInit(){if(super.ngOnInit(),void 0===this.gene)throw new Error("cvc-gene-tag requires LinkableGene input, none supplied.")}}return I.\u0275fac=function(re){return new(re||I)},I.\u0275cmp=_.Xpm({type:I,selectors:[["cvc-gene-tag"]],inputs:{gene:"gene",enablePopover:"enablePopover",truncateLongName:"truncateLongName"},features:[_.qOj],decls:7,vars:2,consts:[[4,"ngIf","ngIfElse"],["tag",""],["unlinked",""],["tagContent",""],[3,"routerLink"],[3,"ngTemplateOutlet"],["nz-popover","",3,"nzPopoverMouseEnterDelay","nzPopoverContent","nzPopoverTrigger","nzMode","nzOnClose"],["genePopover",""],[3,"geneId"],[3,"flagged","entityColor"],["nz-icon","","nzType","civic-gene","nzTheme","twotone",3,"nzTwotoneColor"],["fullName",""]],template:function(re,le){if(1&re&&(_.YNc(0,O,3,2,"ng-container",0),_.YNc(1,G,4,5,"ng-template",null,1,_.W1O),_.YNc(3,me,1,1,"ng-template",null,2,_.W1O),_.YNc(5,V,6,7,"ng-template",null,3,_.W1O)),2&re){const Q=_.MAs(4);_.Q6J("ngIf",le.linked)("ngIfElse",Q)}},dependencies:[e.O5,e.tP,a.rH,L.j,R.lU,j.Ls,P.Q,M.b,F.W,A.a],encapsulation:2,changeDetection:0}),I})()},5956:(Et,be,c)=>{c.d(be,{U:()=>F});var t=c(6814),i=c(4190),_=c(5695),e=c(551),a=c(7417),L=c(9021),R=c(2524),j=c(3640),P=c(3146),M=c(5879);let F=(()=>{class A{}return A.\u0275fac=function(O){return new(O||A)},A.\u0275mod=M.oAB({type:A}),A.\u0275inj=M.cJS({imports:[t.ez,i.Bz,_.X,a.$6,e.PV,j.mS,R.s,L.w,P.C]}),A})()},156:(Et,be,c)=>{c.d(be,{_:()=>le});var t=c(5676),i=c(7398),_=c(2181),e=c(5879),a=c(313),L=c(6814),R=c(4190),j=c(2962),P=c(95),M=c(8125),F=c(5695),A=c(551),U=c(2574),O=c(1887),E=c(5095),H=c(8091);function G(Q,de){if(1&Q&&(e._UZ(0,"i",16),e._uU(1)),2&Q){const pe=e.oxw().ngIf;e.xp6(1),e.hij(" ",pe.name," ")}}function Te(Q,de){if(1&Q&&(e.TgZ(0,"nz-descriptions-item",17),e._uU(1),e.qZA()),2&Q){const pe=e.oxw().ngIf;e.xp6(1),e.hij(" ",pe.evidenceItems.totalCount," ")}}function me(Q,de){if(1&Q&&(e.TgZ(0,"nz-descriptions-item",18),e._uU(1),e.qZA()),2&Q){const pe=e.oxw().ngIf;e.xp6(1),e.hij(" ",pe.assertions.totalCount," ")}}function K(Q,de){if(1&Q&&(e.TgZ(0,"nz-tag"),e._uU(1),e.qZA()),2&Q){const pe=de.$implicit;e.xp6(1),e.Oqu(pe)}}function N(Q,de){if(1&Q&&(e.ynx(0),e.TgZ(1,"cvc-tag-list"),e.YNc(2,K,2,1,"nz-tag",19),e.qZA(),e.BQk()),2&Q){const pe=e.oxw().ngIf;e.xp6(2),e.Q6J("ngForOf",pe.molecularProfileAliases)}}function V(Q,de){1&Q&&(e.TgZ(0,"span",20),e._uU(1,"None specified"),e.qZA())}function S(Q,de){if(1&Q&&(e.TgZ(0,"a",21)(1,"nz-tag",22),e._UZ(2,"i",23),e._uU(3),e.qZA()()),2&Q){const pe=e.oxw().ngIf;e.MGl("routerLink","/molecular-profiles/",pe.id,"/flags"),e.xp6(3),e.hij(" Flags (",pe.flags.totalCount,") ")}}function I(Q,de){if(1&Q&&(e.TgZ(0,"a",21)(1,"nz-tag",24),e._UZ(2,"i",25),e._uU(3),e.qZA()()),2&Q){const pe=e.oxw().ngIf;e.MGl("routerLink","/molecular-profiles/",pe.id,"/revisions"),e.xp6(3),e.hij(" Revisions (",pe.revisions.totalCount,") ")}}function b(Q,de){if(1&Q&&(e.TgZ(0,"a",21)(1,"nz-tag",26),e._UZ(2,"i",27),e._uU(3),e.qZA()()),2&Q){const pe=e.oxw().ngIf;e.MGl("routerLink","/molecular-profiles/",pe.id,"/comments"),e.xp6(3),e.hij(" Comments (",pe.comments.totalCount,") ")}}function re(Q,de){if(1&Q&&(e.ynx(0),e.TgZ(1,"nz-card",2),e.YNc(2,G,2,1,"ng-template",null,3,e.W1O),e.TgZ(4,"nz-descriptions",4)(5,"nz-descriptions-item",5),e._UZ(6,"cvc-mp-tag-name",6),e.qZA(),e.YNc(7,Te,2,1,"nz-descriptions-item",7),e.YNc(8,me,2,1,"nz-descriptions-item",8),e.TgZ(9,"nz-descriptions-item",9),e.YNc(10,N,3,1,"ng-container",10),e.YNc(11,V,2,0,"ng-template",null,11,e.W1O),e.qZA()(),e.TgZ(13,"nz-row",12)(14,"nz-col",13)(15,"nz-space",14),e.YNc(16,S,4,2,"a",15),e.YNc(17,I,4,2,"a",15),e.YNc(18,b,4,2,"a",15),e.qZA()()()(),e.BQk()),2&Q){const pe=de.ngIf,he=e.MAs(3),Se=e.MAs(12);e.xp6(1),e.Q6J("nzTitle",he),e.xp6(3),e.Q6J("nzColumn",2),e.xp6(2),e.Q6J("nameSegments",pe.parsedName)("enablePopover",!1),e.xp6(1),e.Q6J("ngIf",pe.evidenceItems.totalCount>0),e.xp6(1),e.Q6J("ngIf",pe.assertions.totalCount>0),e.xp6(2),e.Q6J("ngIf",pe.molecularProfileAliases.length>0)("ngIfElse",Se)}}let le=(()=>{class Q{constructor(pe){this.gql=pe}ngOnInit(){if(void 0===this.molecularProfileId)throw new Error("Must pass a molecular profile ID into the molecular profile popover component.");this.molecularProfile$=this.gql.watch({molecularProfileId:this.molecularProfileId}).valueChanges.pipe((0,i.U)(({data:pe})=>pe?.molecularProfile),(0,_.h)(t.ep))}}return Q.\u0275fac=function(pe){return new(pe||Q)(e.Y36(a.DkJ))},Q.\u0275cmp=e.Xpm({type:Q,selectors:[["cvc-molecular-profile-popover"]],inputs:{molecularProfileId:"molecularProfileId"},decls:3,vars:3,consts:[["id","popover-content"],[4,"ngIf"],["nzBordered","false","id","card-content",3,"nzTitle"],["cardTitle",""],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","MP Expression","nzSpan","2"],[3,"nameSegments","enablePopover"],["nzTitle","Evidence Items","nzSpan","2",4,"ngIf"],["nzTitle","Assertions","nzSpan","2",4,"ngIf"],["nzTitle","Aliases"],[4,"ngIf","ngIfElse"],["noAliases",""],["id","entity-child-counts"],["nzSpan","24"],["nzSize","small"],[3,"routerLink",4,"nzSpaceItem"],["nz-icon","","nzType","civic:molecularprofile"],["nzTitle","Evidence Items","nzSpan","2"],["nzTitle","Assertions","nzSpan","2"],[4,"ngFor","ngForOf"],["nz-typography","","nzType","secondary"],[3,"routerLink"],["nzColor","red"],["nz-icon","","nzType","civic-flag"],["nzColor","orange"],["nz-icon","","nzType","civic-revision"],["nzColor","blue"],["nz-icon","","nzType","civic-comment"]],template:function(pe,he){1&pe&&(e.TgZ(0,"div",0),e.YNc(1,re,19,8,"ng-container",1),e.ALo(2,"ngrxPush"),e.qZA()),2&pe&&(e.xp6(1),e.Q6J("ngIf",e.lcZ(2,1,he.molecularProfile$)))},dependencies:[L.sg,L.O5,R.rH,j.bd,P.t3,P.SK,M.R7,M.uj,F.j,A.Ls,U.NU,U.$1,O.$,E.C,H.fM],styles:["[_nghost-%COMP%]{display:block;margin:-8px -12px}[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}[_nghost-%COMP%]     .ant-descriptions-view{border:none}[_nghost-%COMP%]     #entity-child-counts{border-top:1px solid #f0f0f0;padding:8px}[_nghost-%COMP%]     #entity-child-counts nz-space{width:100%}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child nz-tag{margin-right:0}.popover-text[_ngcontent-%COMP%]{width:100%;padding:8px;border-bottom:1px solid #f0f0f0}#popover-content[_ngcontent-%COMP%]{min-width:350px;max-width:500px;min-height:125px}"]}),Q})()},2064:(Et,be,c)=>{c.d(be,{_:()=>O});var t=c(6814),i=c(4190),_=c(2962),e=c(95),a=c(8125),L=c(5695),R=c(551),j=c(2574),P=c(5956),M=c(6067),F=c(9858),A=c(366),U=c(5879);let O=(()=>{class E{}return E.\u0275fac=function(G){return new(G||E)},E.\u0275mod=U.oAB({type:E}),E.\u0275inj=U.cJS({imports:[t.ez,i.Bz,_.vh,e.Jb,a.q6,L.X,R.PV,j.zf,P.U,M.X,A.$,F.r]}),E})()},5095:(Et,be,c)=>{c.d(be,{C:()=>U});var t=c(5879),i=c(6814),_=c(9408),e=c(4121);const a=["*"];let L=(()=>{class O{constructor(){}}return O.\u0275fac=function(H){return new(H||O)},O.\u0275cmp=t.Xpm({type:O,selectors:[["cvc-tag-group"]],ngContentSelectors:a,decls:1,vars:0,template:function(H,G){1&H&&(t.F$t(),t.Hsn(0))},styles:["[_nghost-%COMP%]    >*:first-child   nz-tag{border-top-right-radius:0;border-bottom-right-radius:0;margin-right:0}[_nghost-%COMP%]    >*:last-child   nz-tag{border-top-left-radius:0;border-bottom-left-radius:0;margin-left:-1px;border-left-color:#e9e9e9}"]}),O})();function R(O,E){if(1&O&&t._UZ(0,"span",3),2&O){const H=t.oxw().$implicit;t.Q6J("innerHtml",H.text,t.oJD)}}function j(O,E){if(1&O&&t._UZ(0,"cvc-gene-tag",6),2&O){const H=t.oxw().$implicit,G=t.oxw(3);t.Q6J("gene",H)("enablePopover",G.enablePopover)}}function P(O,E){if(1&O&&(t.ynx(0),t.YNc(1,j,1,2,"cvc-gene-tag",5),t.BQk()),2&O){const H=E.$implicit;t.xp6(1),t.Q6J("ngIf","Gene"==H.__typename)}}const M=function(O){return[O]};function F(O,E){if(1&O&&(t.ynx(0),t.TgZ(1,"cvc-tag-group"),t.YNc(2,P,2,1,"ng-container",0),t._UZ(3,"cvc-variant-tag",4),t.qZA(),t.BQk()),2&O){const H=t.oxw(),G=H.index,Te=H.$implicit,me=t.oxw();t.xp6(2),t.Q6J("ngForOf",t.VKq(3,M,me.nameSegments[G-1])),t.xp6(1),t.Q6J("variant",Te)("enablePopover",me.enablePopover)}}function A(O,E){if(1&O&&(t.ynx(0),t.YNc(1,R,1,1,"span",1),t.YNc(2,F,4,5,"ng-container",2),t.BQk()),2&O){const H=E.$implicit;t.xp6(1),t.Q6J("ngIf","MolecularProfileTextSegment"==H.__typename),t.xp6(1),t.Q6J("ngIf","Variant"==H.__typename)}}let U=(()=>{class O{constructor(){this.enablePopover=!0}ngOnInit(){if(void 0===this.nameSegments)throw new Error("Must pass a list of molecular profile name segments into mp name component.")}}return O.\u0275fac=function(H){return new(H||O)},O.\u0275cmp=t.Xpm({type:O,selectors:[["cvc-mp-tag-name"]],inputs:{nameSegments:"nameSegments",enablePopover:"enablePopover"},decls:1,vars:1,consts:[[4,"ngFor","ngForOf"],["class","text-segment",3,"innerHtml",4,"ngIf"],[4,"ngIf"],[1,"text-segment",3,"innerHtml"],[3,"variant","enablePopover"],[3,"gene","enablePopover",4,"ngIf"],[3,"gene","enablePopover"]],template:function(H,G){1&H&&t.YNc(0,A,3,2,"ng-container",0),2&H&&t.Q6J("ngForOf",G.nameSegments)},dependencies:[i.sg,i.O5,_.I,e.H,L],styles:[".text-segment[_ngcontent-%COMP%]{display:inline-block;margin-right:8px;font-weight:700;color:#0009;font-size:14px;line-height:12px}"]}),O})()},9858:(Et,be,c)=>{c.d(be,{r:()=>j});var t=c(6814),i=c(7528),_=c(5956),e=c(5695),a=c(551),L=c(5879);let R=(()=>{class P{}return P.\u0275fac=function(F){return new(F||P)},P.\u0275mod=L.oAB({type:P}),P.\u0275inj=L.cJS({imports:[t.ez]}),P})(),j=(()=>{class P{}return P.\u0275fac=function(F){return new(F||P)},P.\u0275mod=L.oAB({type:P}),P.\u0275inj=L.cJS({imports:[t.ez,e.X,a.PV,i.Q,_.U,R]}),P})()},2606:(Et,be,c)=>{c.d(be,{p:()=>re});var t=c(8130),i=c(2023),_=c(5879),e=c(6814),a=c(4190),L=c(5695),R=c(7417),j=c(551),P=c(156),M=c(5869);function F(le,Q){}function A(le,Q){if(1&le&&(_.ynx(0),_.TgZ(1,"a",5),_.YNc(2,F,0,0,"ng-template",6),_.qZA(),_.BQk()),2&le){const de=_.oxw(),pe=_.MAs(2);_.xp6(1),_.Q6J("routerLink",de.molecularProfile.link),_.xp6(1),_.Q6J("ngTemplateOutlet",pe)}}function U(le,Q){}const O=function(le){return{deprecated:le}};function E(le,Q){if(1&le){const de=_.EpF();_.TgZ(0,"nz-tag",9),_.NdJ("nzOnClose",function(he){_.CHM(de);const Se=_.oxw(2);return _.KtG(Se.itemClosed(he))}),_.YNc(1,U,0,0,"ng-template",6),_.qZA()}if(2&le){_.oxw();const de=_.MAs(2),pe=_.oxw(),he=_.MAs(8);_.Q6J("ngClass",_.VKq(5,O,pe.molecularProfile.deprecated))("nzPopoverMouseEnterDelay",pe.onCloseClicked?0:.5)("nzPopoverContent",de)("nzMode",pe.onCloseClicked?"closeable":"default"),_.xp6(1),_.Q6J("ngTemplateOutlet",he)}}function H(le,Q){if(1&le&&_._UZ(0,"cvc-molecular-profile-popover",11),2&le){const de=_.oxw(3);_.Q6J("molecularProfileId",de.molecularProfile.id)}}function G(le,Q){if(1&le&&_.YNc(0,H,1,1,"cvc-molecular-profile-popover",10),2&le){const de=_.oxw(2);_.Q6J("ngIf",de.enablePopover)}}function Te(le,Q){if(1&le&&(_.YNc(0,E,2,7,"nz-tag",7),_.YNc(1,G,1,1,"ng-template",null,8,_.W1O)),2&le){const de=_.oxw(),pe=_.MAs(4);_.Q6J("ngIf",de.enablePopover)("ngIfElse",pe)}}function me(le,Q){}function K(le,Q){if(1&le){const de=_.EpF();_.TgZ(0,"nz-tag",12),_.NdJ("nzOnClose",function(he){_.CHM(de);const Se=_.oxw();return _.KtG(Se.itemClosed(he))}),_.YNc(1,me,0,0,"ng-template",6),_.qZA()}if(2&le){const de=_.oxw(),pe=_.MAs(8);_.Q6J("nzMode",de.onCloseClicked?"closeable":"default")("ngClass",_.VKq(3,O,de.molecularProfile.deprecated)),_.xp6(1),_.Q6J("ngTemplateOutlet",pe)}}function N(le,Q){}function V(le,Q){if(1&le&&_.YNc(0,N,0,0,"ng-template",6),2&le){_.oxw();const de=_.MAs(2);_.Q6J("ngTemplateOutlet",de)}}function S(le,Q){if(1&le&&(_.ynx(0),_._uU(1),_.ALo(2,"truncate"),_.BQk()),2&le){const de=_.oxw(2);_.xp6(1),_.hij(" ",_.xi3(2,1,de.molecularProfile.name,de.truncationLength)," ")}}function I(le,Q){if(1&le&&_._uU(0),2&le){const de=_.oxw(2);_.hij(" ",de.molecularProfile.name," ")}}function b(le,Q){if(1&le&&(_._UZ(0,"i",13),_.YNc(1,S,3,4,"ng-container",0),_.YNc(2,I,1,1,"ng-template",null,14,_.W1O)),2&le){const de=_.MAs(3),pe=_.oxw();_.Q6J("nzTwotoneColor",pe.iconColor),_.xp6(1),_.Q6J("ngIf",pe.truncateLongName)("ngIfElse",de)}}let re=(()=>{class le extends t.a{constructor(){super(),this.enablePopover=!0,this.truncateLongName=!1,this.truncationLength=20,this.iconColor=(0,i.f)("MolecularProfile")}idFunction(){return this.molecularProfile.id}ngOnInit(){if(super.ngOnInit(),void 0===this.molecularProfile)throw new Error("cvc-molecular-profile-tag requires LinkableMolecularProfile input, none supplied.");"number"==typeof this.truncateLongName&&(this.truncationLength=this.truncateLongName),"segments"in this.molecularProfile&&(this.molecularProfile.name=this.molecularProfile.segments.map(de=>"text"in de?de.text:de.name).join(" "))}}return le.\u0275fac=function(de){return new(de||le)},le.\u0275cmp=_.Xpm({type:le,selectors:[["cvc-molecular-profile-tag"]],inputs:{molecularProfile:"molecularProfile",enablePopover:"enablePopover",truncateLongName:"truncateLongName"},features:[_.qOj],decls:9,vars:2,consts:[[4,"ngIf","ngIfElse"],["tag",""],["noPopover",""],["unlinked",""],["tagContent",""],[3,"routerLink"],[3,"ngTemplateOutlet"],["nz-popover","","nzPopoverTrigger","hover",3,"ngClass","nzPopoverMouseEnterDelay","nzPopoverContent","nzMode","nzOnClose",4,"ngIf","ngIfElse"],["popoverContent",""],["nz-popover","","nzPopoverTrigger","hover",3,"ngClass","nzPopoverMouseEnterDelay","nzPopoverContent","nzMode","nzOnClose"],[3,"molecularProfileId",4,"ngIf"],[3,"molecularProfileId"],[3,"nzMode","ngClass","nzOnClose"],["nz-icon","","nzType","civic-molecularprofile","nzTheme","twotone",3,"nzTwotoneColor"],["fullName",""]],template:function(de,pe){if(1&de&&(_.YNc(0,A,3,2,"ng-container",0),_.YNc(1,Te,3,2,"ng-template",null,1,_.W1O),_.YNc(3,K,2,5,"ng-template",null,2,_.W1O),_.YNc(5,V,1,1,"ng-template",null,3,_.W1O),_.YNc(7,b,4,3,"ng-template",null,4,_.W1O)),2&de){const he=_.MAs(6);_.Q6J("ngIf",pe.linked)("ngIfElse",he)}},dependencies:[e.mk,e.O5,e.tP,a.rH,L.j,R.lU,j.Ls,P._,M.W],styles:["[_nghost-%COMP%]     nz-tag.rejected, [_nghost-%COMP%]     nz-tag.submitted, [_nghost-%COMP%]     nz-tag.accepted, [_nghost-%COMP%]     nz-tag.deprecated{border-right-width:2px}[_nghost-%COMP%]     nz-tag.rejected, [_nghost-%COMP%]     nz-tag.deprecated{border-color:#e6e6e6;background-color:#fff;color:#999999d9}[_nghost-%COMP%]     nz-tag.submitted{border-color:#ffe58f}[_nghost-%COMP%]     nz-tag.accepted{border-color:#b7eb8f}[_nghost-%COMP%]{display:inline-block}"],changeDetection:0}),le})()},8527:(Et,be,c)=>{c.d(be,{u:()=>P});var t=c(6814),i=c(4190),_=c(5695),e=c(551),a=c(7417),L=c(2524),R=c(2064),j=c(5879);let P=(()=>{class M{}return M.\u0275fac=function(A){return new(A||M)},M.\u0275mod=j.oAB({type:M}),M.\u0275inj=j.cJS({imports:[t.ez,i.Bz,_.X,a.$6,e.PV,L.s,R._]}),M})()},4402:(Et,be,c)=>{c.d(be,{S:()=>E});var t=c(5676),i=c(7398),_=c(2181),e=c(5879),a=c(313),L=c(6814),R=c(551),j=c(2962),P=c(3317),M=c(8125),F=c(8091);function A(H,G){if(1&H&&(e._UZ(0,"i",9),e._uU(1)),2&H){const Te=e.oxw().ngIf;e.xp6(1),e.hij(" ",Te.name," ")}}function U(H,G){if(1&H&&(e.TgZ(0,"cvc-link-tag",10),e._uU(1),e.qZA()),2&H){const Te=e.oxw().ngIf;e.Q6J("href",Te.url),e.xp6(1),e.hij(" ",Te.hpoId," ")}}function O(H,G){if(1&H&&(e.ynx(0),e.TgZ(1,"nz-card",2),e.YNc(2,A,2,1,"ng-template",null,3,e.W1O),e.YNc(4,U,2,2,"ng-template",null,4,e.W1O),e.TgZ(6,"nz-descriptions",5)(7,"nz-descriptions-item",6),e._uU(8),e.qZA(),e.TgZ(9,"nz-descriptions-item",7),e._uU(10),e.qZA(),e.TgZ(11,"nz-descriptions-item",8),e._uU(12),e.qZA()()(),e.BQk()),2&H){const Te=G.ngIf,me=e.MAs(3),K=e.MAs(5);e.xp6(1),e.Q6J("nzTitle",me)("nzExtra",K),e.xp6(5),e.Q6J("nzColumn",2),e.xp6(2),e.hij(" ",Te.assertionCount," "),e.xp6(2),e.hij(" ",Te.evidenceItemCount," "),e.xp6(2),e.hij(" ",Te.molecularProfileCount," ")}}let E=(()=>{class H{constructor(Te){this.gql=Te}ngOnInit(){if(null==this.phenotypeId)throw new Error("cvc-phenotype-popover requires valid phenotypeId input.");this.phenotype$=this.gql.watch({phenotypeId:this.phenotypeId}).valueChanges.pipe((0,i.U)(({data:Te})=>Te?.phenotypePopover),(0,_.h)(t.ep))}}return H.\u0275fac=function(Te){return new(Te||H)(e.Y36(a.OHm))},H.\u0275cmp=e.Xpm({type:H,selectors:[["cvc-phenotype-popover"]],inputs:{phenotypeId:"phenotypeId"},decls:3,vars:3,consts:[["id","popover-content"],[4,"ngIf"],["nzBordered","false","id","card-content",3,"nzTitle","nzExtra"],["cardTitle",""],["linkout",""],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","Assertions","nzSpan","2"],["nzTitle","Evidence","nzSpan","2"],["nzTitle","Molecular Profiles","nzSpan","2"],["nz-icon","","nzType","civic-phenotype","nzTheme","twotone","nzTwotoneColor","#2A63B6"],["tooltip","View in the Human Phenotype Ontology",3,"href"]],template:function(Te,me){1&Te&&(e.TgZ(0,"div",0),e.YNc(1,O,13,6,"ng-container",1),e.ALo(2,"ngrxPush"),e.qZA()),2&Te&&(e.xp6(1),e.Q6J("ngIf",e.lcZ(2,1,me.phenotype$)))},dependencies:[L.O5,R.Ls,j.bd,P.l,M.R7,M.uj,F.fM],styles:["[_nghost-%COMP%]{display:block;margin:-8px -12px}[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}[_nghost-%COMP%]     .ant-descriptions-view{border:none}[_nghost-%COMP%]     #entity-child-counts{border-top:1px solid #f0f0f0;padding:8px}[_nghost-%COMP%]     #entity-child-counts nz-space{width:100%}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child nz-tag{margin-right:0}.popover-text[_ngcontent-%COMP%]{width:100%;padding:8px;border-bottom:1px solid #f0f0f0}#popover-content[_ngcontent-%COMP%]{min-width:350px;max-width:500px;min-height:125px}"]}),H})()},1332:(Et,be,c)=>{c.d(be,{I:()=>R});var t=c(6814),i=c(2962),_=c(6067),e=c(8125),a=c(551),L=c(5879);let R=(()=>{class j{}return j.\u0275fac=function(M){return new(M||j)},j.\u0275mod=L.oAB({type:j}),j.\u0275inj=L.cJS({imports:[t.ez,a.PV,i.vh,_.X,e.q6]}),j})()},3897:(Et,be,c)=>{c.d(be,{i:()=>K});var t=c(8130),i=c(5879),_=c(6814),e=c(4190),a=c(5695),L=c(7417),R=c(551),j=c(4402),P=c(2616);function M(N,V){}function F(N,V){if(1&N&&(i.ynx(0),i.TgZ(1,"a",5),i.YNc(2,M,0,0,"ng-template",6),i.qZA(),i.BQk()),2&N){const S=i.oxw(),I=i.MAs(2);i.xp6(1),i.Q6J("routerLink",S.phenotype.link),i.xp6(1),i.Q6J("ngTemplateOutlet",I)}}function A(N,V){}function U(N,V){if(1&N&&i._UZ(0,"cvc-phenotype-popover",9),2&N){const S=i.oxw(2);i.Q6J("phenotypeId",S.phenotype.id)}}function O(N,V){if(1&N){const S=i.EpF();i.TgZ(0,"nz-tag",7),i.NdJ("nzOnClose",function(b){i.CHM(S);const re=i.oxw();return i.KtG(re.itemClosed(b))}),i.YNc(1,A,0,0,"ng-template",6),i.qZA(),i.YNc(2,U,1,1,"ng-template",null,8,i.W1O)}if(2&N){const S=i.MAs(3),I=i.oxw(),b=i.MAs(8);i.Q6J("nzPopoverMouseEnterDelay",I.onCloseClicked?0:.5)("nzPopoverContent",S)("nzPopoverTrigger",I.enablePopover?"hover":null)("nzMode",I.onCloseClicked?"closeable":"default"),i.xp6(1),i.Q6J("ngTemplateOutlet",b)}}function E(N,V){}function H(N,V){if(1&N){const S=i.EpF();i.TgZ(0,"nz-tag",10),i.NdJ("nzOnClose",function(b){i.CHM(S);const re=i.oxw();return i.KtG(re.itemClosed(b))}),i.YNc(1,E,0,0,"ng-template",6),i.qZA()}if(2&N){const S=i.oxw(),I=i.MAs(8);i.Q6J("nzMode",S.onCloseClicked?"closeable":"default"),i.xp6(1),i.Q6J("ngTemplateOutlet",I)}}function G(N,V){}function Te(N,V){if(1&N&&i.YNc(0,G,0,0,"ng-template",6),2&N){i.oxw();const S=i.MAs(2);i.Q6J("ngTemplateOutlet",S)}}function me(N,V){if(1&N&&(i._UZ(0,"i",11),i.ALo(1,"entityColor"),i._uU(2)),2&N){const S=i.oxw();i.Q6J("nzTwotoneColor",i.lcZ(1,2,"Phenotype")),i.xp6(2),i.hij(" ",S.phenotype.name,"\n")}}let K=(()=>{class N extends t.a{constructor(){super(...arguments),this.enablePopover=!0}set phenotype(S){if(!S)throw new Error("phenotype-tag phentype input requires LinkablePhenotype.");this._phenotype=S}get phenotype(){return this._phenotype}idFunction(){return this.phenotype.id}}return N.\u0275fac=function(){let V;return function(I){return(V||(V=i.n5z(N)))(I||N)}}(),N.\u0275cmp=i.Xpm({type:N,selectors:[["cvc-phenotype-tag"]],inputs:{phenotype:"phenotype",enablePopover:"enablePopover"},features:[i.qOj],decls:9,vars:2,consts:[[4,"ngIf","ngIfElse"],["tag",""],["noPopover",""],["unlinked",""],["tagContent",""],[3,"routerLink"],[3,"ngTemplateOutlet"],["nz-popover","","nzPopoverPlacement","right",3,"nzPopoverMouseEnterDelay","nzPopoverContent","nzPopoverTrigger","nzMode","nzOnClose"],["phenotypePopover",""],[3,"phenotypeId"],[3,"nzMode","nzOnClose"],["nz-icon","","nzTheme","twotone","nzType","civic-phenotype",3,"nzTwotoneColor"]],template:function(S,I){if(1&S&&(i.YNc(0,F,3,2,"ng-container",0),i.YNc(1,O,4,5,"ng-template",null,1,i.W1O),i.YNc(3,H,2,2,"ng-template",null,2,i.W1O),i.YNc(5,Te,1,1,"ng-template",null,3,i.W1O),i.YNc(7,me,3,4,"ng-template",null,4,i.W1O)),2&S){const b=i.MAs(6);i.Q6J("ngIf",I.linked)("ngIfElse",b)}},dependencies:[_.O5,_.tP,e.rH,a.j,L.lU,R.Ls,j.S,P.a],styles:["[_nghost-%COMP%]{display:block}"],changeDetection:0}),N})()},3043:(Et,be,c)=>{c.d(be,{y:()=>P});var t=c(6814),i=c(4190),_=c(2524),e=c(551),a=c(7417),L=c(5695),R=c(1332),j=c(5879);let P=(()=>{class M{}return M.\u0275fac=function(A){return new(A||M)},M.\u0275mod=j.oAB({type:M}),M.\u0275inj=j.cJS({imports:[t.ez,i.Bz,L.X,a.$6,e.PV,R.I,_.s]}),M})()},3103:(Et,be,c)=>{c.d(be,{b:()=>P});var t=c(2023),i=c(5879),_=c(6814);const e=function(M){return{background:M}};function a(M,F){if(1&M&&i._UZ(0,"div",3),2&M){const A=i.oxw();i.Q6J("ngStyle",i.VKq(1,e,A.flagColor))}}function L(M,F){if(1&M&&i._UZ(0,"div",4),2&M){const A=i.oxw();i.Q6J("ngStyle",i.VKq(1,e,A.entityColor))}}function R(M,F){if(1&M&&i._UZ(0,"div",5),2&M){const A=i.oxw();i.Q6J("ngStyle",i.VKq(1,e,A.entityColor))}}const j=["*"];let P=(()=>{class M{constructor(){this.hasRevisions=!1,this.flagged=!1,this.hasComments=!1,this.entityColor="#AAA",this.flagColor=(0,t.f)("Flag")}}return M.\u0275fac=function(A){return new(A||M)},M.\u0275cmp=i.Xpm({type:M,selectors:[["cvc-icon-badges"]],inputs:{hasRevisions:"hasRevisions",flagged:"flagged",hasComments:"hasComments",entityColor:"entityColor"},ngContentSelectors:j,decls:4,vars:3,consts:[["class","cvc-badge badge-flags",3,"ngStyle",4,"ngIf"],["class","cvc-badge badge-revisions",3,"ngStyle",4,"ngIf"],["class","cvc-badge badge-comments",3,"ngStyle",4,"ngIf"],[1,"cvc-badge","badge-flags",3,"ngStyle"],[1,"cvc-badge","badge-revisions",3,"ngStyle"],[1,"cvc-badge","badge-comments",3,"ngStyle"]],template:function(A,U){1&A&&(i.F$t(),i.Hsn(0),i.YNc(1,a,1,3,"div",0),i.YNc(2,L,1,3,"div",1),i.YNc(3,R,1,3,"div",2)),2&A&&(i.xp6(1),i.Q6J("ngIf",U.flagged),i.xp6(1),i.Q6J("ngIf",U.hasRevisions),i.xp6(1),i.Q6J("ngIf",U.hasComments))},dependencies:[_.O5,_.PC],styles:["[_nghost-%COMP%]{display:inline-block;position:relative;line-height:1}.cvc-badge[_ngcontent-%COMP%]{position:absolute;z-index:auto;width:4px;min-width:4px;height:4px;border-radius:100%;box-shadow:0 0 0 1px #fff;background:#aaa}.cvc-badge.badge-revisions[_ngcontent-%COMP%]{top:.5px;right:.5px;transform:translate(50%,-50%)}.cvc-badge.badge-flags[_ngcontent-%COMP%]{top:.5px;left:.5px;transform:translate(-50%,-50%)}.cvc-badge.badge-comments[_ngcontent-%COMP%]{bottom:.5px;right:.5px;transform:translate(50%,50%)}"],changeDetection:0}),M})()},3146:(Et,be,c)=>{c.d(be,{C:()=>e});var t=c(6814),i=c(2524),_=c(5879);let e=(()=>{class a{}return a.\u0275fac=function(R){return new(R||a)},a.\u0275mod=_.oAB({type:a}),a.\u0275inj=_.cJS({imports:[t.ez,i.s]}),a})()},3317:(Et,be,c)=>{c.d(be,{l:()=>L});var t=c(5879),i=c(6109),_=c(5695),e=c(551);const a=["*"];let L=(()=>{class R{set href(P){if(!P)throw new Error("link-tag link Input requires string.");this._href=P}get href(){return this._href?this._href:""}}return R.\u0275fac=function(P){return new(P||R)},R.\u0275cmp=t.Xpm({type:R,selectors:[["cvc-link-tag"]],inputs:{href:"href",tooltip:"tooltip",iconName:"iconName"},ngContentSelectors:a,decls:4,vars:4,consts:[["target","_blank",3,"href"],["nzColor","default","nz-tooltip","",3,"nzTooltipTitle","nzTooltipTrigger"],["nz-icon","","nzTheme","outline",3,"nzType"]],template:function(P,M){1&P&&(t.F$t(),t.TgZ(0,"a",0)(1,"nz-tag",1),t._UZ(2,"i",2),t.Hsn(3),t.qZA()()),2&P&&(t.Q6J("href",M.href,t.LSH),t.xp6(1),t.Q6J("nzTooltipTitle",M.tooltip)("nzTooltipTrigger",M.tooltip?"hover":null),t.xp6(1),t.Q6J("nzType",M.iconName?M.iconName:"link"))},dependencies:[i.SY,_.j,e.Ls],encapsulation:2}),R})()},6067:(Et,be,c)=>{c.d(be,{X:()=>L});var t=c(6814),i=c(6109),_=c(5695),e=c(551),a=c(5879);let L=(()=>{class R{}return R.\u0275fac=function(P){return new(P||R)},R.\u0275mod=a.oAB({type:R}),R.\u0275inj=a.cJS({imports:[t.ez,i.cg,_.X,e.PV]}),R})()},9154:(Et,be,c)=>{c.d(be,{y:()=>a});var t=c(6814),i=c(551),_=c(5695),e=c(5879);let a=(()=>{class L{}return L.\u0275fac=function(j){return new(j||L)},L.\u0275mod=e.oAB({type:L}),L.\u0275inj=e.cJS({imports:[t.ez,_.X,i.PV]}),L})()},3489:(Et,be,c)=>{c.d(be,{H:()=>M});var t=c(5619),i=c(1687),_=c(1374),e=c(5879),a=c(6814),L=c(5695),R=c(551),j=c(8091);function P(F,A){1&F&&(e.TgZ(0,"nz-tag",1),e._UZ(1,"i",2),e.TgZ(2,"span"),e._uU(3,"End of results reached"),e.qZA()())}let M=(()=>{class F{set cvcShowTag(U){void 0!==U&&U&&this.showTag()}constructor(U){this.cdr=U,this.showTag$=new t.X(!1)}showTag(){!1===this.showTag$.getValue()&&(this.showTag$.next(!0),(0,i.F)(3e3).pipe((0,_.P)()).subscribe(()=>{this.showTag$.next(!1),this.cdr.detectChanges()}))}}return F.\u0275fac=function(U){return new(U||F)(e.Y36(e.sBO))},F.\u0275cmp=e.Xpm({type:F,selectors:[["cvc-no-more-rows"]],inputs:{cvcShowTag:"cvcShowTag"},decls:2,vars:3,consts:[["nzColor","warning",4,"ngIf"],["nzColor","warning"],["nz-icon","","nzType","exclamation-circle"]],template:function(U,O){1&U&&(e.YNc(0,P,4,0,"nz-tag",0),e.ALo(1,"ngrxPush")),2&U&&e.Q6J("ngIf",e.lcZ(1,1,O.showTag$))},dependencies:[a.O5,L.j,R.Ls,j.fM],encapsulation:2,changeDetection:0}),F})()},2384:(Et,be,c)=>{c.d(be,{h:()=>F});var t=c(5879),i=c(6814),_=c(5695),e=c(551);function a(A,U){1&A&&t._UZ(0,"i",7)}function L(A,U){1&A&&t._UZ(0,"i",8)}function R(A,U){1&A&&t._UZ(0,"i",9)}function j(A,U){1&A&&t._UZ(0,"i",10)}function P(A,U){1&A&&t._UZ(0,"i",10)}function M(A,U){if(1&A&&(t.TgZ(0,"nz-tag",1),t.ynx(1,2),t.YNc(2,a,1,0,"i",3),t.YNc(3,L,1,0,"i",4),t.YNc(4,R,1,0,"i",5),t.YNc(5,j,1,0,"i",6),t.YNc(6,P,1,0,"i",6),t.BQk(),t._uU(7),t.ALo(8,"titlecase"),t.qZA()),2&A){const O=t.oxw();t.Q6J("nzColor",O.tagStatus),t.xp6(1),t.Q6J("ngSwitch",O.tagStatus),t.xp6(1),t.Q6J("ngSwitchCase","success"),t.xp6(1),t.Q6J("ngSwitchCase","error"),t.xp6(1),t.Q6J("ngSwitchCase","warning"),t.xp6(1),t.Q6J("ngSwitchCase","processing"),t.xp6(1),t.Q6J("ngSwitchCase","default"),t.xp6(1),t.hij(" ",t.lcZ(8,8,O.status),"\n")}}let F=(()=>{class A{constructor(){this.statusColorMap={ACCEPTED:"success",REJECTED:"error",SUBMITTED:"warning",NEW:"processing",SUPERSEDED:"default",OPEN:"error",RESOLVED:"default"}}set status(O){this._status=O,O&&(this.tagStatus=this.statusColorMap[O])}get status(){return this._status}ngOnInit(){if(void 0===this.status)throw new Error("Must pass a valid EvidenceStatus or RevisionStatus to cvc-status-tag component")}}return A.\u0275fac=function(O){return new(O||A)},A.\u0275cmp=t.Xpm({type:A,selectors:[["cvc-status-tag"]],inputs:{status:"status"},decls:1,vars:1,consts:[[3,"nzColor",4,"ngIf"],[3,"nzColor"],[3,"ngSwitch"],["nz-icon","","nzType","check-circle",4,"ngSwitchCase"],["nz-icon","","nzType","close-circle",4,"ngSwitchCase"],["nz-icon","","nzType","exclamation-circle",4,"ngSwitchCase"],["nz-icon","",4,"ngSwitchCase"],["nz-icon","","nzType","check-circle"],["nz-icon","","nzType","close-circle"],["nz-icon","","nzType","exclamation-circle"],["nz-icon",""]],template:function(O,E){1&O&&t.YNc(0,M,9,10,"nz-tag",0),2&O&&t.Q6J("ngIf",E.tagStatus)},dependencies:[i.O5,i.RF,i.n9,_.j,e.Ls,i.rS],encapsulation:2}),A})()},2655:(Et,be,c)=>{c.d(be,{x:()=>a});var t=c(6814),i=c(5695),_=c(551),e=c(5879);let a=(()=>{class L{}return L.\u0275fac=function(j){return new(j||L)},L.\u0275mod=e.oAB({type:L}),L.\u0275inj=e.cJS({imports:[t.ez,i.X,_.PV]}),L})()},1887:(Et,be,c)=>{c.d(be,{$:()=>_});var t=c(5879);const i=["*"];let _=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(L){return new(L||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["cvc-tag-list"]],hostVars:4,hostBindings:function(L,R){2&L&&t.ekj("xs","xs"===R.size||!R.size)("sm","sm"===R.size)},inputs:{size:"size"},ngContentSelectors:i,decls:2,vars:0,consts:[[1,"tag-list"]],template:function(L,R){1&L&&(t.F$t(),t.TgZ(0,"div",0),t.Hsn(1),t.qZA())},styles:["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]   .tag-list[_ngcontent-%COMP%]    >*{display:inline-block}[_nghost-%COMP%]   .tag-list[_ngcontent-%COMP%]    >*:last-child{margin-right:-8px}.xs[_nghost-%COMP%]{margin-bottom:-4px}.xs[_nghost-%COMP%]   .tag-list[_ngcontent-%COMP%]    >*{margin-bottom:4px}.sm[_nghost-%COMP%]{margin-bottom:-8px}.sm[_nghost-%COMP%]   .tag-list[_ngcontent-%COMP%]    >*{margin-bottom:8px}"],changeDetection:0}),e})()},366:(Et,be,c)=>{c.d(be,{$:()=>_});var t=c(6814),i=c(5879);let _=(()=>{class e{}return e.\u0275fac=function(L){return new(L||e)},e.\u0275mod=i.oAB({type:e}),e.\u0275inj=i.cJS({imports:[t.ez]}),e})()},1813:(Et,be,c)=>{c.d(be,{p:()=>K});var t=c(5676),i=c(7398),_=c(2181),e=c(5879),a=c(313),L=c(6814),R=c(551),j=c(2962),P=c(8125),M=c(3317),F=c(1887),A=c(3369),U=c(8091);function O(N,V){if(1&N&&(e._UZ(0,"i",12),e._uU(1)),2&N){const S=e.oxw().ngIf;e.xp6(1),e.AsE(" ",S.displayType,":\xa0",S.citation," ")}}function E(N,V){if(1&N&&(e.TgZ(0,"cvc-link-tag",13),e._uU(1),e.qZA()),2&N){const S=e.oxw().ngIf;e.Q6J("href",S.sourceUrl)("tooltip","View on "+S.displayType),e.xp6(1),e.hij(" ",S.displayType+":"+S.citationId," ")}}function H(N,V){1&N&&e._UZ(0,"cvc-clinical-trial-tag",15),2&N&&e.Q6J("clinicalTrial",V.$implicit)("enablePopover",!1)}function G(N,V){if(1&N&&(e.ynx(0),e.TgZ(1,"cvc-tag-list"),e.YNc(2,H,1,2,"cvc-clinical-trial-tag",14),e.qZA(),e.BQk()),2&N){const S=e.oxw().ngIf;e.xp6(2),e.Q6J("ngForOf",S.clinicalTrials)}}function Te(N,V){1&N&&e._uU(0," -- ")}function me(N,V){if(1&N&&(e.ynx(0),e.TgZ(1,"nz-card",2),e.YNc(2,O,2,2,"ng-template",null,3,e.W1O),e.YNc(4,E,2,3,"ng-template",null,4,e.W1O),e.TgZ(6,"nz-descriptions",5)(7,"nz-descriptions-item",6),e._uU(8),e.qZA(),e.TgZ(9,"nz-descriptions-item",7),e._uU(10),e.qZA(),e.TgZ(11,"nz-descriptions-item",8),e._uU(12),e.qZA(),e.TgZ(13,"nz-descriptions-item",9),e.YNc(14,G,3,1,"ng-container",10),e.YNc(15,Te,1,0,"ng-template",null,11,e.W1O),e.qZA()()(),e.BQk()),2&N){const S=V.ngIf,I=e.MAs(3),b=e.MAs(5),re=e.MAs(16);e.xp6(1),e.Q6J("nzTitle",I)("nzExtra",b),e.xp6(5),e.Q6J("nzColumn",2),e.xp6(2),e.hij(" ",S.title," "),e.xp6(2),e.hij(" ",S.fullJournalTitle," "),e.xp6(2),e.hij(" ",S.evidenceItemCount," "),e.xp6(2),e.Q6J("ngIf",S.clinicalTrials&&S.clinicalTrials.length>0)("ngIfElse",re)}}let K=(()=>{class N{constructor(S){this.gql=S}ngOnInit(){if(null==this.sourceId)throw new Error("cvc-source-popover requires valid sourceId input.");this.source$=this.gql.watch({sourceId:this.sourceId}).valueChanges.pipe((0,i.U)(({data:S})=>S?.sourcePopover),(0,_.h)(t.ep))}}return N.\u0275fac=function(S){return new(S||N)(e.Y36(a.TiL))},N.\u0275cmp=e.Xpm({type:N,selectors:[["cvc-source-popover"]],inputs:{sourceId:"sourceId"},decls:3,vars:3,consts:[["id","popover-content"],[4,"ngIf"],["nzBordered","false","id","card-content",3,"nzTitle","nzExtra"],["cardTitle",""],["linkout",""],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","Title","nzSpan","2"],["nzTitle","Journal","nzSpan","2"],["nzTitle","Evidence","nzSpan","2"],["nzTitle","Clinical Trials:","nzSpan","2"],[4,"ngIf","ngIfElse"],["noTrials",""],["nz-icon","","nzType","civic-source","nzTheme","twotone","nzTwotoneColor","#F9BA45"],[3,"href","tooltip"],[3,"clinicalTrial","enablePopover",4,"ngFor","ngForOf"],[3,"clinicalTrial","enablePopover"]],template:function(S,I){1&S&&(e.TgZ(0,"div",0),e.YNc(1,me,17,8,"ng-container",1),e.ALo(2,"ngrxPush"),e.qZA()),2&S&&(e.xp6(1),e.Q6J("ngIf",e.lcZ(2,1,I.source$)))},dependencies:[L.sg,L.O5,R.Ls,j.bd,P.R7,P.uj,M.l,F.$,A.G,U.fM],styles:["[_nghost-%COMP%]{display:block;margin:-8px -12px}[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}[_nghost-%COMP%]     .ant-descriptions-view{border:none}[_nghost-%COMP%]     #entity-child-counts{border-top:1px solid #f0f0f0;padding:8px}[_nghost-%COMP%]     #entity-child-counts nz-space{width:100%}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child nz-tag{margin-right:0}.popover-text[_ngcontent-%COMP%]{width:100%;padding:8px;border-bottom:1px solid #f0f0f0}#popover-content[_ngcontent-%COMP%]{min-width:350px;max-width:500px;min-height:125px}"]}),N})()},6247:(Et,be,c)=>{c.d(be,{n:()=>P});var t=c(6814),i=c(2962),_=c(6067),e=c(8125),a=c(366),L=c(4605),R=c(551),j=c(5879);let P=(()=>{class M{}return M.\u0275fac=function(A){return new(A||M)},M.\u0275mod=j.oAB({type:M}),M.\u0275inj=j.cJS({imports:[t.ez,R.PV,i.vh,e.q6,_.X,a.$,L.N]}),M})()},4138:(Et,be,c)=>{c.d(be,{T:()=>I});var t=c(8130),i=c(5879),_=c(7023),e=c(6814),a=c(4190),L=c(551),R=c(7417),j=c(5695),P=c(1813),M=c(5869),F=c(2616);function A(b,re){}function U(b,re){if(1&b&&(i.ynx(0),i.TgZ(1,"a",4),i.YNc(2,A,0,0,"ng-template",5),i.qZA(),i.BQk()),2&b){const le=i.oxw(),Q=i.MAs(2);i.xp6(1),i.Q6J("routerLink",le.source.link),i.xp6(1),i.Q6J("ngTemplateOutlet",Q)}}function O(b,re){}function E(b,re){if(1&b&&i._UZ(0,"cvc-source-popover",8),2&b){const le=i.oxw(2);i.Q6J("sourceId",le.source.id)}}function H(b,re){if(1&b){const le=i.EpF();i.TgZ(0,"nz-tag",6),i.NdJ("nzPopoverVisibleChange",function(de){i.CHM(le);const pe=i.oxw();return i.KtG(pe.popoverVisible=de)})("nzOnClose",function(de){i.CHM(le);const pe=i.oxw();return i.KtG(pe.itemClosed(de))}),i.YNc(1,O,0,0,"ng-template",5),i.qZA(),i.YNc(2,E,1,1,"ng-template",null,7,i.W1O)}if(2&b){const le=i.MAs(3),Q=i.oxw(),de=i.MAs(6);i.Q6J("nzPopoverMouseEnterDelay",Q.onCloseClicked?0:.5)("nzPopoverContent",le)("nzPopoverTrigger",Q.enablePopover?"hover":null)("nzPopoverVisible",Q.popoverVisible)("nzMode",Q.onCloseClicked?"closeable":"default"),i.xp6(1),i.Q6J("ngTemplateOutlet",de)}}function G(b,re){}function Te(b,re){if(1&b&&i.YNc(0,G,0,0,"ng-template",5),2&b){i.oxw();const le=i.MAs(2);i.Q6J("ngTemplateOutlet",le)}}function me(b,re){if(1&b&&(i.ynx(0),i._uU(1),i.ALo(2,"truncate"),i.BQk()),2&b){const le=i.oxw(3);i.xp6(1),i.hij(" ",i.xi3(2,1,le.displayName,50)," ")}}function K(b,re){if(1&b&&(i.ynx(0),i._uU(1),i.BQk()),2&b){const le=i.oxw(3);i.xp6(1),i.hij(" ",le.displayName," ")}}function N(b,re){if(1&b&&(i.ynx(0),i.YNc(1,me,3,4,"ng-container",11),i.YNc(2,K,2,1,"ng-container",11),i.BQk()),2&b){const le=i.oxw(2);i.xp6(1),i.Q6J("ngIf",le.truncateLongName),i.xp6(1),i.Q6J("ngIf",!le.truncateLongName)}}function V(b,re){if(1&b&&i._uU(0),2&b){const le=i.oxw(2);i.hij(" SID:",le.source.id," ")}}function S(b,re){if(1&b&&(i._UZ(0,"i",9),i.ALo(1,"entityColor"),i.YNc(2,N,3,2,"ng-container",0),i.YNc(3,V,1,1,"ng-template",null,10,i.W1O)),2&b){const le=i.MAs(4),Q=i.oxw();i.Q6J("nzTwotoneColor",i.lcZ(1,3,"Source")),i.xp6(2),i.Q6J("ngIf","normal"===Q.mode)("ngIfElse",le)}}let I=(()=>{class b extends t.a{set source(le){if(!le)throw new Error("source-tag source input requires SourceWithDisplayName or SourceWithCitation.");this._source=le,this.displayName="displayName"in this.source?this.source.displayName:this.sourceTypeDisplay.transform(this.source.sourceType)+": "+this.source.citation}get source(){return this._source}constructor(le){super(),this.sourceTypeDisplay=le,this.enablePopover=!0,this.linked=!0,this.mode="normal",this.truncateLongName=!1}idFunction(){return this.source.id}}return b.\u0275fac=function(le){return new(le||b)(i.Y36(_.l))},b.\u0275cmp=i.Xpm({type:b,selectors:[["cvc-source-tag"]],inputs:{source:"source",enablePopover:"enablePopover",linked:"linked",mode:"mode",truncateLongName:"truncateLongName"},features:[i.qOj],decls:7,vars:2,consts:[[4,"ngIf","ngIfElse"],["tag",""],["unlinked",""],["tagContent",""],[3,"routerLink"],[3,"ngTemplateOutlet"],["nz-popover","","nzPopoverPlacement","right",3,"nzPopoverMouseEnterDelay","nzPopoverContent","nzPopoverTrigger","nzPopoverVisible","nzMode","nzPopoverVisibleChange","nzOnClose"],["sourcePopover",""],[3,"sourceId"],["nz-icon","","nzTheme","twotone","nzType","civic-source",3,"nzTwotoneColor"],["concise",""],[4,"ngIf"]],template:function(le,Q){if(1&le&&(i.YNc(0,U,3,2,"ng-container",0),i.YNc(1,H,4,6,"ng-template",null,1,i.W1O),i.YNc(3,Te,1,1,"ng-template",null,2,i.W1O),i.YNc(5,S,5,5,"ng-template",null,3,i.W1O)),2&le){const de=i.MAs(4);i.Q6J("ngIf",Q.linked)("ngIfElse",de)}},dependencies:[e.O5,e.tP,a.rH,L.Ls,R.lU,j.j,P.p,M.W,F.a],styles:["[_nghost-%COMP%]{display:inline-block}"],changeDetection:0}),b})()},8641:(Et,be,c)=>{c.d(be,{s:()=>P});var t=c(6814),i=c(7417),_=c(4190),e=c(6247),a=c(5695),L=c(551),R=c(2524),j=c(5879);let P=(()=>{class M{}return M.\u0275fac=function(A){return new(A||M)},M.\u0275mod=j.oAB({type:M}),M.\u0275inj=j.cJS({imports:[t.ez,_.Bz,L.PV,i.$6,a.X,e.n,R.s]}),M})()},96:(Et,be,c)=>{c.d(be,{a:()=>I});var t=c(7398),i=c(2181),_=c(5676),e=c(5879),a=c(313),L=c(6814),R=c(2962),j=c(8125),P=c(551),M=c(2392),F=c(5695),A=c(6109),U=c(3317),O=c(8091),E=c(5869);function H(b,re){if(1&b&&(e._UZ(0,"i",12),e._uU(1),e.ALo(2,"truncate")),2&b){const le=e.oxw().ngIf;e.xp6(1),e.hij(" ",e.xi3(2,1,le.name,50)," ")}}function G(b,re){if(1&b&&(e.TgZ(0,"cvc-link-tag",14),e._uU(1),e.qZA()),2&b){const le=e.oxw(2).ngIf;e.Q6J("href",le.therapyUrl),e.xp6(1),e.hij(" ",le.ncitId," ")}}function Te(b,re){if(1&b&&e.YNc(0,G,2,2,"cvc-link-tag",13),2&b){const le=e.oxw().ngIf,Q=e.MAs(7);e.Q6J("ngIf",le.ncitId)("ngIfElse",Q)}}function me(b,re){1&b&&(e.TgZ(0,"span",15),e._uU(1,"No NCIt ID"),e.qZA())}function K(b,re){if(1&b&&(e.TgZ(0,"nz-descriptions-item",16),e._uU(1),e.qZA()),2&b){const le=e.oxw().ngIf;e.xp6(1),e.hij(" ",le.name," ")}}function N(b,re){if(1&b&&(e.TgZ(0,"nz-tag",19),e._uU(1),e.ALo(2,"truncate"),e.qZA()),2&b){const le=re.$implicit;e.Q6J("nzTooltipTitle",le),e.xp6(1),e.Oqu(e.lcZ(2,2,le))}}function V(b,re){if(1&b&&(e.TgZ(0,"nz-descriptions-item",17),e.YNc(1,N,3,4,"nz-tag",18),e.qZA()),2&b){const le=e.oxw().ngIf;e.xp6(1),e.Q6J("ngForOf",le.therapyAliases)}}function S(b,re){if(1&b&&(e.ynx(0),e.TgZ(1,"nz-card",2),e.YNc(2,H,3,4,"ng-template",null,3,e.W1O),e.YNc(4,Te,1,2,"ng-template",null,4,e.W1O),e.YNc(6,me,2,0,"ng-template",null,5,e.W1O),e.TgZ(8,"nz-descriptions",6),e.YNc(9,K,2,1,"nz-descriptions-item",7),e.YNc(10,V,2,1,"nz-descriptions-item",8),e.TgZ(11,"nz-descriptions-item",9),e._uU(12),e.qZA(),e.TgZ(13,"nz-descriptions-item",10),e._uU(14),e.qZA(),e.TgZ(15,"nz-descriptions-item",11),e._uU(16),e.qZA()()(),e.BQk()),2&b){const le=re.ngIf,Q=e.MAs(3),de=e.MAs(5);e.xp6(1),e.Q6J("nzTitle",Q)("nzExtra",de),e.xp6(7),e.Q6J("nzColumn",2),e.xp6(1),e.Q6J("ngIf",le.name.length>50),e.xp6(1),e.Q6J("ngIf",le.therapyAliases.length>0),e.xp6(2),e.hij(" ",le.assertionCount," "),e.xp6(2),e.hij(" ",le.evidenceItemCount," "),e.xp6(2),e.hij(" ",le.molecularProfileCount," ")}}let I=(()=>{class b{constructor(le){this.gql=le}ngOnInit(){if(null==this.therapyId)throw new Error("cvc-therapy-popover requires valid therapyId input.");this.therapy$=this.gql.watch({therapyId:this.therapyId}).valueChanges.pipe((0,t.U)(({data:le})=>le?.therapyPopover),(0,i.h)(_.ep))}}return b.\u0275fac=function(le){return new(le||b)(e.Y36(a.L8L))},b.\u0275cmp=e.Xpm({type:b,selectors:[["cvc-therapy-popover"]],inputs:{therapyId:"therapyId"},decls:3,vars:3,consts:[["id","popover-content"],[4,"ngIf"],["nzBordered","false","id","card-content",3,"nzTitle","nzExtra"],["cardTitle",""],["linkout",""],["noNcitId",""],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","Name","nzSpan","2",4,"ngIf"],["nzTitle","Aliases","nzSpan","2",4,"ngIf"],["nzTitle","Assertions","nzSpan","2"],["nzTitle","Evidence","nzSpan","2"],["nzTitle","Molecular Profiles","nzSpan","2"],["nz-icon","","nzType","civic-therapy","nzTheme","twotone","nzTwotoneColor","#AC3996"],["tooltip","View on NCI Thesaurus",3,"href",4,"ngIf","ngIfElse"],["tooltip","View on NCI Thesaurus",3,"href"],["nz-typography","","nzType","secondary"],["nzTitle","Name","nzSpan","2"],["nzTitle","Aliases","nzSpan","2"],["nz-tooltip","",3,"nzTooltipTitle",4,"ngFor","ngForOf"],["nz-tooltip","",3,"nzTooltipTitle"]],template:function(le,Q){1&le&&(e.TgZ(0,"div",0),e.YNc(1,S,17,8,"ng-container",1),e.ALo(2,"ngrxPush"),e.qZA()),2&le&&(e.xp6(1),e.Q6J("ngIf",e.lcZ(2,1,Q.therapy$)))},dependencies:[L.sg,L.O5,R.bd,j.R7,j.uj,P.Ls,M.ZU,F.j,A.SY,U.l,O.fM,E.W],styles:["[_nghost-%COMP%]{display:block;margin:-8px -12px}[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}[_nghost-%COMP%]     .ant-descriptions-view{border:none}[_nghost-%COMP%]     #entity-child-counts{border-top:1px solid #f0f0f0;padding:8px}[_nghost-%COMP%]     #entity-child-counts nz-space{width:100%}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child nz-tag{margin-right:0}.popover-text[_ngcontent-%COMP%]{width:100%;padding:8px;border-bottom:1px solid #f0f0f0}#popover-content[_ngcontent-%COMP%]{min-width:350px;max-width:500px;min-height:125px}"]}),b})()},1207:(Et,be,c)=>{c.d(be,{s:()=>A});var t=c(6814),i=c(4190),_=c(2962),e=c(8125),a=c(6067),L=c(551),R=c(2392),j=c(2524),P=c(5695),M=c(6109),F=c(5879);let A=(()=>{class U{}return U.\u0275fac=function(E){return new(E||U)},U.\u0275mod=F.oAB({type:U}),U.\u0275inj=F.cJS({imports:[t.ez,i.Bz,_.vh,e.q6,L.PV,R.ZJ,P.X,M.cg,a.X,j.s]}),U})()},4770:(Et,be,c)=>{c.d(be,{T:()=>K});var t=c(8130),i=c(5879),_=c(6814),e=c(4190),a=c(5695),L=c(7417),R=c(551),j=c(96),P=c(5869);function M(N,V){}function F(N,V){if(1&N&&(i.ynx(0),i.TgZ(1,"a",4),i.YNc(2,M,0,0,"ng-template",5),i.qZA(),i.BQk()),2&N){const S=i.oxw(),I=i.MAs(2);i.xp6(1),i.Q6J("routerLink",S.therapy.link),i.xp6(1),i.Q6J("ngTemplateOutlet",I)}}function A(N,V){}function U(N,V){if(1&N&&i._UZ(0,"cvc-therapy-popover",8),2&N){const S=i.oxw(2);i.Q6J("therapyId",S.therapy.id)}}function O(N,V){if(1&N){const S=i.EpF();i.TgZ(0,"nz-tag",6),i.NdJ("nzOnClose",function(b){i.CHM(S);const re=i.oxw();return i.KtG(re.itemClosed(b))}),i.YNc(1,A,0,0,"ng-template",5),i.qZA(),i.YNc(2,U,1,1,"ng-template",null,7,i.W1O)}if(2&N){const S=i.MAs(3),I=i.oxw(),b=i.MAs(6);i.Q6J("nzPopoverMouseEnterDelay",I.onCloseClicked?0:.5)("nzPopoverContent",S)("nzPopoverTrigger",I.enablePopover?"hover":null)("nzMode",I.onCloseClicked?"closeable":"default"),i.xp6(1),i.Q6J("ngTemplateOutlet",b)}}function E(N,V){}function H(N,V){if(1&N&&i.YNc(0,E,0,0,"ng-template",5),2&N){i.oxw();const S=i.MAs(2);i.Q6J("ngTemplateOutlet",S)}}function G(N,V){if(1&N&&(i.ynx(0),i._uU(1),i.ALo(2,"truncate"),i.BQk()),2&N){const S=i.oxw(2);i.xp6(1),i.hij(" ",i.xi3(2,1,S.therapy.name,21)," ")}}function Te(N,V){if(1&N&&i._uU(0),2&N){const S=i.oxw(2);i.hij(" ",S.therapy.name," ")}}function me(N,V){if(1&N&&(i._UZ(0,"i",9),i.YNc(1,G,3,4,"ng-container",0),i.YNc(2,Te,1,1,"ng-template",null,10,i.W1O)),2&N){const S=i.MAs(3),I=i.oxw();i.xp6(1),i.Q6J("ngIf",I.truncateLongName)("ngIfElse",S)}}let K=(()=>{class N extends t.a{constructor(){super(...arguments),this.enablePopover=!0,this.truncateLongName=!1}set therapy(S){if(!S)throw new Error("therapy-tag Input requires LinkableTherapy.");this._therapy=S}get therapy(){return this._therapy}idFunction(){return this.therapy.id}}return N.\u0275fac=function(){let V;return function(I){return(V||(V=i.n5z(N)))(I||N)}}(),N.\u0275cmp=i.Xpm({type:N,selectors:[["cvc-therapy-tag"]],inputs:{therapy:"therapy",enablePopover:"enablePopover",truncateLongName:"truncateLongName"},features:[i.qOj],decls:7,vars:2,consts:[[4,"ngIf","ngIfElse"],["tag",""],["unlinked",""],["tagContent",""],[3,"routerLink"],[3,"ngTemplateOutlet"],["nz-popover","","nzPopoverPlacement","right",3,"nzPopoverMouseEnterDelay","nzPopoverContent","nzPopoverTrigger","nzMode","nzOnClose"],["therapyPopover",""],[3,"therapyId"],["nz-icon","","nzType","civic-therapy","nzTheme","twotone","nzTwotoneColor","#AC3996"],["fullName",""]],template:function(S,I){if(1&S&&(i.YNc(0,F,3,2,"ng-container",0),i.YNc(1,O,4,5,"ng-template",null,1,i.W1O),i.YNc(3,H,1,1,"ng-template",null,2,i.W1O),i.YNc(5,me,4,2,"ng-template",null,3,i.W1O)),2&S){const b=i.MAs(4);i.Q6J("ngIf",I.linked)("ngIfElse",b)}},dependencies:[_.O5,_.tP,e.rH,a.j,L.lU,R.Ls,j.a,P.W],encapsulation:2,changeDetection:0}),N})()},6061:(Et,be,c)=>{c.d(be,{N:()=>P});var t=c(6814),i=c(4190),_=c(5695),e=c(7417),a=c(551),L=c(2524),R=c(1207),j=c(5879);let P=(()=>{class M{}return M.\u0275fac=function(A){return new(A||M)},M.\u0275mod=j.oAB({type:M}),M.\u0275inj=j.cJS({imports:[t.ez,i.Bz,_.X,e.$6,a.PV,L.s,R.s]}),M})()},8545:(Et,be,c)=>{c.d(be,{m:()=>le});var t=c(5676),i=c(7398),_=c(2181),e=c(5879),a=c(313),L=c(6814),R=c(4190),j=c(2962),P=c(95),M=c(8125),F=c(5695),A=c(551),U=c(2574),O=c(4121),E=c(3317),H=c(8091),G=c(2616);function Te(Q,de){if(1&Q&&(e._UZ(0,"i",13),e.ALo(1,"entityColor"),e._uU(2)),2&Q){const pe=e.oxw().ngIf;e.Q6J("nzTwotoneColor",e.lcZ(1,2,"Variant")),e.xp6(2),e.hij(" ",pe.name," ")}}function me(Q,de){if(1&Q&&e._UZ(0,"cvc-gene-tag",14),2&Q){const pe=e.oxw().ngIf;e.Q6J("enablePopover",!1)("gene",pe.gene)}}function K(Q,de){if(1&Q&&(e.TgZ(0,"nz-tag"),e._uU(1),e.qZA()),2&Q){const pe=de.$implicit;e.xp6(1),e.Oqu(pe)}}function N(Q,de){if(1&Q&&(e.TgZ(0,"nz-descriptions-item",15),e.YNc(1,K,2,1,"nz-tag",16),e.qZA()),2&Q){const pe=e.oxw().ngIf;e.xp6(1),e.Q6J("ngForOf",pe.variantAliases)}}function V(Q,de){if(1&Q&&(e.TgZ(0,"nz-descriptions-item",17)(1,"cvc-link-tag",18),e._uU(2),e.qZA()()),2&Q){const pe=e.oxw().ngIf;e.xp6(1),e.MGl("href","https://reg.genome.network/allele/",pe.alleleRegistryId,".html"),e.xp6(1),e.hij(" ",pe.alleleRegistryId," ")}}function S(Q,de){if(1&Q&&(e.TgZ(0,"a",19)(1,"nz-tag",20),e._UZ(2,"i",21),e._uU(3),e.qZA()()),2&Q){const pe=e.oxw().ngIf;e.MGl("routerLink","/variants/",pe.id,"/flags"),e.xp6(3),e.hij(" Flags (",pe.flags.totalCount,") ")}}function I(Q,de){if(1&Q&&(e.TgZ(0,"a",19)(1,"nz-tag",22),e._UZ(2,"i",23),e._uU(3),e.qZA()()),2&Q){const pe=e.oxw().ngIf;e.MGl("routerLink","/variants/",pe.id,"/revisions"),e.xp6(3),e.hij(" Revisions (",pe.revisions.totalCount,") ")}}function b(Q,de){if(1&Q&&(e.TgZ(0,"a",19)(1,"nz-tag",24),e._UZ(2,"i",25),e._uU(3),e.qZA()()),2&Q){const pe=e.oxw().ngIf;e.MGl("routerLink","/variants/",pe.id,"/comments"),e.xp6(3),e.hij(" Comments (",pe.comments.totalCount,") ")}}function re(Q,de){if(1&Q&&(e.ynx(0),e.TgZ(1,"nz-card",2),e.YNc(2,Te,3,4,"ng-template",null,3,e.W1O),e.YNc(4,me,1,2,"ng-template",null,4,e.W1O),e.TgZ(6,"nz-descriptions",5),e.YNc(7,N,2,1,"nz-descriptions-item",6),e.YNc(8,V,3,2,"nz-descriptions-item",7),e.TgZ(9,"nz-descriptions-item",8),e._uU(10),e.qZA()(),e.TgZ(11,"nz-row",9)(12,"nz-col",10)(13,"nz-space",11),e.YNc(14,S,4,2,"a",12),e.YNc(15,I,4,2,"a",12),e.YNc(16,b,4,2,"a",12),e.qZA()()()(),e.BQk()),2&Q){const pe=de.ngIf,he=e.MAs(3),Se=e.MAs(5);e.xp6(1),e.Q6J("nzTitle",he)("nzExtra",Se),e.xp6(5),e.Q6J("nzColumn",2),e.xp6(1),e.Q6J("ngIf",pe.variantAliases.length>0),e.xp6(1),e.Q6J("ngIf",pe.alleleRegistryId&&"unregistered"!=pe.alleleRegistryId),e.xp6(2),e.hij(" ",pe.molecularProfiles.totalCount," ")}}let le=(()=>{class Q{constructor(pe){this.gql=pe}ngOnInit(){if(void 0===this.variantId)throw new Error("Must pass a variant ID into the variant popover component.");this.variant$=this.gql.watch({variantId:this.variantId}).valueChanges.pipe((0,i.U)(({data:pe})=>pe?.variant),(0,_.h)(t.ep))}}return Q.\u0275fac=function(pe){return new(pe||Q)(e.Y36(a.ZYZ))},Q.\u0275cmp=e.Xpm({type:Q,selectors:[["cvc-variant-popover"]],inputs:{variantId:"variantId"},decls:3,vars:3,consts:[["id","popover-content"],[4,"ngIf"],["nzBordered","false","id","card-content",3,"nzTitle","nzExtra"],["cardTitle",""],["gene",""],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","Aliases","nzSpan","2",4,"ngIf"],["nzTitle","Allele Registry ID","nzSpan","2",4,"ngIf"],["nzTitle","Molecular Profiles","nzSpan","2"],["id","entity-child-counts"],["nzSpan","24"],["nzSize","small"],[3,"routerLink",4,"nzSpaceItem"],["nz-icon","","nzTheme","twotone","nzType","civic-variant",3,"nzTwotoneColor"],[3,"enablePopover","gene"],["nzTitle","Aliases","nzSpan","2"],[4,"ngFor","ngForOf"],["nzTitle","Allele Registry ID","nzSpan","2"],["tooltip","View on the ClinGen Allele Registry",3,"href"],[3,"routerLink"],["nzColor","red"],["nz-icon","","nzType","civic-flag"],["nzColor","orange"],["nz-icon","","nzType","civic-revision"],["nzColor","blue"],["nz-icon","","nzType","civic-comment"]],template:function(pe,he){1&pe&&(e.TgZ(0,"div",0),e.YNc(1,re,17,6,"ng-container",1),e.ALo(2,"ngrxPush"),e.qZA()),2&pe&&(e.xp6(1),e.Q6J("ngIf",e.lcZ(2,1,he.variant$)))},dependencies:[L.sg,L.O5,R.rH,j.bd,P.t3,P.SK,M.R7,M.uj,F.j,A.Ls,U.NU,U.$1,O.H,E.l,H.fM,G.a],styles:["[_nghost-%COMP%]{display:block;margin:-8px -12px}[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}[_nghost-%COMP%]     .ant-descriptions-view{border:none}[_nghost-%COMP%]     #entity-child-counts{border-top:1px solid #f0f0f0;padding:8px}[_nghost-%COMP%]     #entity-child-counts nz-space{width:100%}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child nz-tag{margin-right:0}.popover-text[_ngcontent-%COMP%]{width:100%;padding:8px;border-bottom:1px solid #f0f0f0}#popover-content[_ngcontent-%COMP%]{min-width:350px;max-width:500px;min-height:125px}"]}),Q})()},6446:(Et,be,c)=>{c.d(be,{k:()=>U});var t=c(6814),i=c(4190),_=c(2962),e=c(95),a=c(8125),L=c(5695),R=c(551),j=c(2574),P=c(5956),M=c(6067),F=c(2524),A=c(5879);let U=(()=>{class O{}return O.\u0275fac=function(H){return new(H||O)},O.\u0275mod=A.oAB({type:O}),O.\u0275inj=A.cJS({imports:[t.ez,i.Bz,_.vh,e.Jb,a.q6,L.X,R.PV,j.zf,F.s,P.U,M.X]}),O})()},9408:(Et,be,c)=>{c.d(be,{I:()=>I});var t=c(8130),i=c(2023),_=c(5879),e=c(6814),a=c(4190),L=c(5695),R=c(7417),j=c(551),P=c(8545),M=c(3103),F=c(5869);function A(b,re){}function U(b,re){if(1&b&&(_.ynx(0),_.TgZ(1,"a",4),_.YNc(2,A,0,0,"ng-template",5),_.qZA(),_.BQk()),2&b){const le=_.oxw(),Q=_.MAs(2);_.xp6(1),_.Q6J("routerLink",le.variant.link),_.xp6(1),_.Q6J("ngTemplateOutlet",Q)}}function O(b,re){}function E(b,re){if(1&b&&_._UZ(0,"cvc-variant-popover",9),2&b){const le=_.oxw(3);_.Q6J("variantId",le.variant.id)}}function H(b,re){if(1&b&&_.YNc(0,E,1,1,"cvc-variant-popover",8),2&b){const le=_.oxw(2);_.Q6J("ngIf",le.enablePopover)}}const G=function(b){return{deprecated:b}};function Te(b,re){if(1&b){const le=_.EpF();_.TgZ(0,"nz-tag",6),_.NdJ("nzOnClose",function(de){_.CHM(le);const pe=_.oxw();return _.KtG(pe.itemClosed(de))}),_.YNc(1,O,0,0,"ng-template",5),_.qZA(),_.YNc(2,H,1,1,"ng-template",null,7,_.W1O)}if(2&b){const le=_.MAs(3),Q=_.oxw(),de=_.MAs(6);_.Q6J("ngClass",_.VKq(6,G,Q.variant.deprecated))("nzPopoverMouseEnterDelay",Q.onCloseClicked?0:.5)("nzPopoverContent",le)("nzPopoverTrigger",Q.enablePopover?"hover":null)("nzMode",Q.onCloseClicked?"closeable":"default"),_.xp6(1),_.Q6J("ngTemplateOutlet",de)}}function me(b,re){}function K(b,re){if(1&b&&_.YNc(0,me,0,0,"ng-template",5),2&b){_.oxw();const le=_.MAs(2);_.Q6J("ngTemplateOutlet",le)}}function N(b,re){if(1&b&&(_.ynx(0),_._uU(1),_.ALo(2,"truncate"),_.BQk()),2&b){const le=_.oxw(2);_.xp6(1),_.hij(" ",_.xi3(2,1,le.variant.name,20)," ")}}function V(b,re){if(1&b&&_._uU(0),2&b){const le=_.oxw(2);_.hij(" ",le.variant.name," ")}}function S(b,re){if(1&b&&(_.TgZ(0,"cvc-icon-badges",10),_._UZ(1,"i",11),_.qZA(),_.YNc(2,N,3,4,"ng-container",0),_.YNc(3,V,1,1,"ng-template",null,12,_.W1O)),2&b){const le=_.MAs(4),Q=_.oxw();_.Q6J("flagged",Q.variant.flagged)("entityColor",Q.iconColor),_.xp6(1),_.Q6J("nzTwotoneColor",Q.iconColor),_.xp6(1),_.Q6J("ngIf",Q.truncateLongName)("ngIfElse",le)}}let I=(()=>{class b extends t.a{constructor(){super(),this.enablePopover=!0,this.truncateLongName=!1,this.iconColor=(0,i.f)("Variant")}idFunction(){return this.variant.id}ngOnInit(){if(super.ngOnInit(),void 0===this.variant)throw new Error("cvc-variant-tag requires LinkableVariant input, none supplied.")}}return b.\u0275fac=function(le){return new(le||b)},b.\u0275cmp=_.Xpm({type:b,selectors:[["cvc-variant-tag"]],inputs:{variant:"variant",enablePopover:"enablePopover",truncateLongName:"truncateLongName"},features:[_.qOj],decls:7,vars:2,consts:[[4,"ngIf","ngIfElse"],["tag",""],["unlinked",""],["tagContent",""],[3,"routerLink"],[3,"ngTemplateOutlet"],["nz-popover","",3,"ngClass","nzPopoverMouseEnterDelay","nzPopoverContent","nzPopoverTrigger","nzMode","nzOnClose"],["popoverContent",""],[3,"variantId",4,"ngIf"],[3,"variantId"],[3,"flagged","entityColor"],["nz-icon","","nzType","civic-variant","nzTheme","twotone",3,"nzTwotoneColor"],["fullName",""]],template:function(le,Q){if(1&le&&(_.YNc(0,U,3,2,"ng-container",0),_.YNc(1,Te,4,8,"ng-template",null,1,_.W1O),_.YNc(3,K,1,1,"ng-template",null,2,_.W1O),_.YNc(5,S,5,5,"ng-template",null,3,_.W1O)),2&le){const de=_.MAs(4);_.Q6J("ngIf",Q.linked)("ngIfElse",de)}},dependencies:[e.mk,e.O5,e.tP,a.rH,L.j,R.lU,j.Ls,P.m,M.b,F.W],styles:["[_nghost-%COMP%]     nz-tag.rejected, [_nghost-%COMP%]     nz-tag.submitted, [_nghost-%COMP%]     nz-tag.accepted, [_nghost-%COMP%]     nz-tag.deprecated{border-right-width:2px}[_nghost-%COMP%]     nz-tag.rejected, [_nghost-%COMP%]     nz-tag.deprecated{border-color:#e6e6e6;background-color:#fff;color:#999999d9}[_nghost-%COMP%]     nz-tag.submitted{border-color:#ffe58f}[_nghost-%COMP%]     nz-tag.accepted{border-color:#b7eb8f}[_nghost-%COMP%]{display:inline-block}"],changeDetection:0}),b})()},7528:(Et,be,c)=>{c.d(be,{Q:()=>M});var t=c(6814),i=c(4190),_=c(5695),e=c(551),a=c(7417),L=c(6446),R=c(2524),j=c(3146),P=c(5879);let M=(()=>{class F{}return F.\u0275fac=function(U){return new(U||F)},F.\u0275mod=P.oAB({type:F}),F.\u0275inj=P.cJS({imports:[t.ez,i.Bz,_.X,a.$6,e.PV,R.s,L.k,j.C]}),F})()},3702:(Et,be,c)=>{c.d(be,{t:()=>i});var t=c(5879);let i=(()=>{class _{transform(a,L){return a?"verbose"==L?"TIER_I_LEVEL_A"===a?"Tier I - Level A":"TIER_I_LEVEL_B"===a?"Tier I - Level B":"TIER_II_LEVEL_C"===a?"Tier II - Level C":"TIER_II_LEVEL_D"===a?"Tier II - Level D":"TIER_III"===a?"Tier III":"TIER_IV"===a?"Tier IV":"Not Applicable":a.toUpperCase().replace("TIER","").replace("LEVEL","").replace(/ /g,"").replace(/_/g,""):""}}return _.\u0275fac=function(a){return new(a||_)},_.\u0275pipe=t.Yjl({name:"formatAmp",type:_,pure:!0}),_})()},2616:(Et,be,c)=>{c.d(be,{a:()=>_});var t=c(2023),i=c(5879);let _=(()=>{class e{transform(L){return(0,t.f)(L)}}return e.\u0275fac=function(L){return new(L||e)},e.\u0275pipe=i.Yjl({name:"entityColor",type:e,pure:!0}),e})()},6967:(Et,be,c)=>{c.d(be,{Do:()=>L});var t=c(313),i=c(2),_=c(5879);const e=new Map([[t.Sx0.A,"Validated association"],[t.Sx0.B,"Clinical evidence"],[t.Sx0.C,"Case study"],[t.Sx0.D,"Preclinical evidence"],[t.Sx0.E,"Inferential association"]]),a=new Map([[1,"One Star"],[2,"Two Stars"],[3,"Three Stars"],[4,"Four Stars"],[5,"Five Stars"]]);let L=(()=>{class R{transform(P,M="display-string"){return null==P?"":"short-string"===M&&1===P.toString().length?"string"==typeof P?P:P.toString():"icon-name"===M?"number"==typeof P?`civic-rating${P}`:1===P.length?`civic-level${P.toLowerCase()}`:`civic-${P.replace(/_/g,"").toLowerCase()}`:"number"==typeof P?a.get(P)||P.toString():1===P.length?e.get(P)||P:(0,i.E)(P)}}return R.\u0275fac=function(P){return new(P||R)},R.\u0275pipe=_.Yjl({name:"evidenceEnumDisplay",type:R,pure:!0}),R})()},8004:(Et,be,c)=>{c.d(be,{v:()=>L});var t=c(313);const i={evidenceType:{[t.kqt.Diagnostic]:"Evidence pertains to a variant's impact on patient diagnosis (cancer subtype)",[t.kqt.Functional]:"Evidence pertains to a variant that alters biological function from the reference state",[t.kqt.Oncogenic]:"Evidence pertains to a somatic variant's involvement in tumor pathogenesis as described by the Hallmarks of Cancer",[t.kqt.Predictive]:"Evidence pertains to a variant's effect on therapeutic response",[t.kqt.Predisposing]:"Evidence pertains to a germline variant's role in conferring susceptibility to disease (including pathogenicity evaluations)",[t.kqt.Prognostic]:"Evidence pertains to a variant's impact on disease progression, severity, or patient survival"},assertionType:{[t.uBv.Diagnostic]:"Assertion pertains to a variant's impact on patient diagnosis (cancer subtype)",[t.uBv.Predictive]:"Assertion pertains to a variant's effect on therapeutic response",[t.uBv.Predisposing]:"Assertion pertains to a germline variant's role in conferring susceptibility to disease (including pathogenicity evaluations)",[t.uBv.Prognostic]:"Assertion pertains to a variant's impact on disease progression, severity, or patient survival",[t.uBv.Oncogenic]:"Assertion pertains to a somatic variant's role in driving tumor formation, growth, and other processes related to the Hallmarks of Cancer"},variantOrigin:{[t.huM.Somatic]:"Variant is a mutation, found only in tumor cells, having arisen in a specific tissue (non-germ cell), and is not expected to be inherited or passed to offspring",[t.huM.RareGermline]:"Variant is found in every cell (not restricted to tumor/diseased cells) and is thought to exist in less than 1% of the population relevant to this evidence item",[t.huM.CommonGermline]:"Variant is found in every cell (not restricted to tumor/diseased cells) and is thought to exist in at least 1% of the population relevant to this evidence item",[t.huM.Unknown]:"The variant origin is uncertain based on the available evidence",[t.huM.Na]:"The variant type (e.g., expression) is not compatible (or easily classified) with the CIViC concept of variant origin",[t.huM.Combined]:"Variants in the Molecular Profile span multiple Origin types."},evidenceLevel:{[t.Sx0.A]:"Proven/consensus association in human medicine",[t.Sx0.B]:"Clinical trial or other primary patient data supports association",[t.Sx0.C]:"Individual case reports from clinical journals",[t.Sx0.D]:"In vivo or in vitro models support association",[t.Sx0.E]:"Indirect evidence"},evidenceLevelBrief:{[t.Sx0.A]:"Validated association",[t.Sx0.B]:"Clinical evidence",[t.Sx0.C]:"Case Study",[t.Sx0.D]:"Preclinical evidence",[t.Sx0.E]:"Inferential association"},therapyInteractionType:{[t.wkr.Combination]:"The therapies listed were used as part of a combination therapy approach",[t.wkr.Sequential]:"The therapies listed were used at separate timepoints in the same treatment plan",[t.wkr.Substitutes]:"The therapies listed are often considered to be of the same family, or behave similarly in a treatment setting"},evidenceRating:{1:"Poor - Claim is not supported well by experimental evidence. Results are not reproducible, or have very small sample size. No follow-up is done to validate novel claims",2:"Adequate - Evidence is not well supported by experimental data, and little follow-up data is available. Experiments may lack proper controls, have small sample size, or are not statistically convincing",3:"Average - Evidence is convincing, but not supported by a breadth of experiments. May be smaller scale projects, or novel results without many follow-up experiments. Discrepancies from expected results are explained and not concerning",4:"Strong - Well supported evidence. Experiments are well controlled, and results are convincing. Any discrepancies from expected results are well-explained and not concerning",5:"Excellent - Solid, well supported evidence from a lab or journal with respected academic standing. Experiments are well controlled, and results are clean and reproducible across multiple replicates. Evidence confirmed using separate methods"}},_={significance:{PREDICTIVE:{ADVERSE_RESPONSE:{EvidenceItem:"Associated with an adverse response to theraputic treatment",Assertion:"Associated with an adverse response to theraputic treatment"},REDUCED_SENSITIVITY:{EvidenceItem:"Response to treatment is lower than seen in other treatment contexts",Assertion:"Response to treatment is lower than seen in other treatment contexts"},RESISTANCE:{EvidenceItem:"Associated with clinical or preclinical resistance to treatment",Assertion:"Associated with clinical or preclinical resistance to treatment"},SENSITIVITYRESPONSE:{EvidenceItem:"Associated with clinical or preclinical response to treatment",Assertion:"Associated with a clinical or preclinical response to treatment"},NA:{EvidenceItem:"Clinical Significance is not applicable",Assertion:"Clinical Significance is not applicable"}},DIAGNOSTIC:{POSITIVE:{EvidenceItem:"Associated with diagnosis of disease or subtype",Assertion:"Associated with diagnosis of disease or subtype"},NEGATIVE:{EvidenceItem:"Associated with lack of disease or subtype",Assertion:"Associated with lack of disease or subtype"}},PROGNOSTIC:{BETTER_OUTCOME:{EvidenceItem:"Demonstrates better than expected clinical outcome",Assertion:"Demonstrates better than expected clinical outcome"},POOR_OUTCOME:{EvidenceItem:"Demonstrates worse than expected clinical outcome",Assertion:"Demonstrates worse than expected clinical outcome"},Na:{EvidenceItem:"Clinical Significance is not applicable",Assertion:"Clinical Significance is not applicable"}},PREDISPOSING:{PATHOGENIC:{Assertion:"Very strong evidence the variant is pathogenic"},LIKELY_PATHOGENIC:{Assertion:"Strong evidence (>90% certainty) the variant is pathogenic"},BENIGN:{Assertion:"Very strong evidence the variant is benign"},LIKELY_BENIGN:{Assertion:"Not expected to have a major effect on disease"},UNCERTAIN_SIGNIFICANCE:{Assertion:"Does not meet the ACMG/AMP criteria for pathogenic/benign, or the evidence is conflicting"},Na:{EvidenceItem:"Clinical Significance is not applicable"},PREDISPOSITION:{EvidenceItem:"Germline variant has predisposing potential for cancer, and may meet ACMG/AMP criteria supporting pathogenic or benign classification."},PROTECTIVENESS:{EvidenceItem:"Germline variant has properties that protect individuals from acquiring cancer."}},ONCOGENIC:{ONCOGENICITY:{EvidenceItem:"Somatic variant has oncogenic potential for driving cancer, and may meet ClinGen/CGC/VICC criteria supporting pathogenic or benign classification."},PROTECTIVENESS:{EvidenceItem:"Somatic variant has a protective role and minimizes co-occuring driver variants, tumor malignancy, or other oncogenic tumor properties."},ONCOGENIC:{Assertion:"Very strong evidence the variant is oncogenic."},LIKELY_ONCOGENIC:{Assertion:"Strong evidence the variant is oncogenic."},BENIGN:{Assertion:"Very strong evidence the variant does not have oncogenic properties."},LIKELY_BENIGN:{Assertion:"Strong evidence the variant does not have oncogenic properties."},UNCERTAIN_SIGNIFICANCE:{Assertion:"Does not meet guideline criteria for oncogenic/benign, or the evidence is conflicting."}}},evidenceDirection:{PREDICTIVE:{SUPPORTS:{EvidenceItem:"The experiment or study supports this variant's response to a therapy"},DOES_NOT_SUPPORT:{EvidenceItem:"The experiment or study does not support, or was inconclusive of an interaction between this variant and a therapy"}},DIAGNOSTIC:{SUPPORTS:{EvidenceItem:"The experiment or study supports this variant's impact on the diagnosis of disease or subtype"},DOES_NOT_SUPPORT:{EvidenceItem:"The experiment or study does not support this variant's impact on diagnosis of disease or subtype"}},PROGNOSTIC:{SUPPORTS:{EvidenceItem:"The experiment or study supports this variant's impact on prognostic outcome"},DOES_NOT_SUPPORT:{EvidenceItem:"The experiment or study does not support a prognostic association between variant and outcome"}},PREDISPOSING:{Na:{EvidenceItem:"Evidence Direction is not applicable"},SUPPORTS:{EvidenceItem:"The evidence supports a pathogenic or a protective role for a germline variant in cancer."},DOES_NOT_SUPPORT:{EvidenceItem:"The evidence supports a benign (if Clinical Significance is Predisposition) or lack or protective (if Clinical Significance is Protectiveness) role for a germline variant in cancer."}},FUNCTIONAL:{SUPPORTS:{EvidenceItem:"The experiment or study supports this variant causing alteration or non-alteration of the gene product function"},DOES_NOT_SUPPORT:{EvidenceItem:"The experiment or study does not support this variant causing alteration or non-alteration of the gene product function"}},ONCOGENIC:{NA:{EvidenceItem:"Evidence Direction is not applicable for Oncogenic Evidence Type"},SUPPORTS:{EvidenceItem:"The evidence supports an oncogenic or protective role for a somatic variant"},DOES_NOT_SUPPORT:{EvidenceItem:"The evidence does not support an oncogenic or protective role for a somatic variant"}}},assertionDirection:{PREDICTIVE:{SUPPORTS:{Assertion:"The Assertion and associated Evidence Items support this variant's response to a therapy"},DOES_NOT_SUPPORT:{Assertion:"The Assertion and associated evidence does not support, or was inconclusive of an interaction between this variant and a therapy"}},DIAGNOSTIC:{SUPPORTS:{Assertion:"The Assertion and associated Evidence Items support this variant's impact on the diagnosis of disease or subtype"},DOES_NOT_SUPPORT:{Assertion:"The Assertion and associated evidence does not support this variant's impact on diagnosis of disease or subtype"}},PROGNOSTIC:{SUPPORTS:{Assertion:"The Assertion and associated Evidence Items support this variant's impact on prognostic outcome"},DOES_NOT_SUPPORT:{Assertion:"The Assertion and associated evidence does not support a prognostic association between variant and outcome"}},PREDISPOSING:{SUPPORTS:{Assertion:"The Assertion and associated Evidence Items support a variant's impact on predisposing outcome"}},FUNCTIONAL:{SUPPORTS:{Assertion:"The Assertion and associated Evidence Items support this variant causing alteration or non-alteration of the gene product function"},DOES_NOT_SUPPORT:{Assertion:"The Assertion and associated evidence does not support this variant causing alteration or non-alteration of the gene product function"}},ONCOGENIC:{SUPPORTS:{Assertion:"The Assertion and associated Evidence Items support a variant's oncogenic, benign, or uncertain significance"}}}};var a=c(5879);let L=(()=>{class R{transform(P,M,F=void 0,A=void 0){return M&&P?function e(R,j,P,M){let F;return F=P&&M?_[R][P][j][M]:i[R][j],F||""}(M,P,F,A):""}}return R.\u0275fac=function(P){return new(P||R)},R.\u0275pipe=a.Yjl({name:"enumTooltip",type:R,pure:!0}),R})()},7334:(Et,be,c)=>{c.d(be,{A:()=>_});var t=c(5879),i=c(6593);let _=(()=>{class e{constructor(L){this.sanitizer=L}transform(L,R){if(!R||""==R)return L;const j=new RegExp(R,"gi"),P=L.match(j);if(!P)return L;let M=L.replace(j,`<span class='typeahead-match'>${P[0]}</span>`);return this.sanitizer.bypassSecurityTrustHtml(M)}}return e.\u0275fac=function(L){return new(L||e)(t.Y36(i.H7,16))},e.\u0275pipe=t.Yjl({name:"highlightTypeahead",type:e,pure:!0}),e})()},2524:(Et,be,c)=>{c.d(be,{s:()=>e});var t=c(6814),i=c(7023),_=c(5879);let e=(()=>{class a{}return a.\u0275fac=function(R){return new(R||a)},a.\u0275mod=_.oAB({type:a}),a.\u0275inj=_.cJS({providers:[i.l],imports:[t.ez]}),a})()},7023:(Et,be,c)=>{c.d(be,{l:()=>_});var t=c(2666),i=c(5879);let _=(()=>{class e{transform(L){return L?(0,t.c)(L):""}}return e.\u0275fac=function(L){return new(L||e)},e.\u0275pipe=i.Yjl({name:"sourceTypeDisplay",type:e,pure:!0}),e})()},5869:(Et,be,c)=>{c.d(be,{W:()=>i});var t=c(5879);let i=(()=>{class _{constructor(){}transform(a,L=25){if(a.length>L){let j=a.slice(0,L);var R=j.lastIndexOf(" ");return j.slice(0,R)+"\u2026"}return a}}return _.\u0275fac=function(a){return new(a||_)},_.\u0275pipe=t.Yjl({name:"truncate",type:_,pure:!0}),_})()},1201:(Et,be,c)=>{c.d(be,{Z:()=>i});var t=c(5879);let i=(()=>{class _{transform(a){return a?`civic-${a.replace(/_/g,"").toLowerCase()}`:""}}return _.\u0275fac=function(a){return new(a||_)},_.\u0275pipe=t.Yjl({name:"typenameToIcon",type:_,pure:!0}),_})()},7473:(Et,be,c)=>{c.d(be,{Y:()=>_});var t=c(5619),i=c(5879);let _=(()=>{class e{constructor(){this.networkError$=new t.X(void 0)}clearErrors(){this.networkError$.next(void 0)}}return e.\u0275fac=function(L){return new(L||e)},e.\u0275prov=i.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},951:(Et,be,c)=>{c.d(be,{a:()=>F});var M,t=c(655),i=c(313),_=c(1791),e=c(7398),a=c(7921),L=c(7081),R=c(4223),j=c(5879),P=c(9862);let F=((M=class{constructor(U,O){function E(N){return!(!N||N.role!==i.i44.Admin)}function H(N){return!(!N||N.role!==i.i44.Editor&&N.role!==i.i44.Admin)}function G(N){return!(!N||N.role!==i.i44.Curator)}function Te(N){return!(!N||N.role!==i.i44.Curator&&N.role!==i.i44.Editor&&N.role!==i.i44.Admin)}function me(N){return!(!N||N.role!==i.i44.Editor&&N.role!==i.i44.Admin||!N.mostRecentConflictOfInterestStatement||N.mostRecentConflictOfInterestStatement?.coiStatus!=i.Mgx.Conflict&&N.mostRecentConflictOfInterestStatement?.coiStatus!=i.Mgx.Valid)}function K(N){if(N.mostRecentOrganizationId)return N.organizations.find(V=>V.id===N.mostRecentOrganizationId)}this.viewerBaseGQL=U,this.http=O,this.initialViewer={mostRecentOrg:void 0,signedIn:!1,isAdmin:!1,isEditor:!1,isCurator:!1,canCurate:!1,canModerate:!1,invalidCoi:!0},this.queryRef=this.viewerBaseGQL.watch(void 0,{notifyOnNetworkStatusChange:!1}),this.viewer$=this.queryRef.valueChanges.pipe((0,R.j)("data","viewer"),(0,e.U)(N=>({...N,signedIn:null!=N,signedOut:null==N,canCurate:Te(N),canModerate:me(N),isAdmin:E(N),isEditor:H(N),isCurator:G(N),organizations:null==N?[]:N.organizations,mostRecentOrg:null==N?void 0:K(N),invalidCoi:H(N)&&(!N.mostRecentConflictOfInterestStatement||N.mostRecentConflictOfInterestStatement.coiStatus===i.Mgx.Expired||N.mostRecentConflictOfInterestStatement.coiStatus===i.Mgx.Missing)})),(0,a.O)(this.initialViewer),(0,L.d)(1)),this.signedIn$=this.viewer$.pipe((0,e.U)(N=>N.signedIn)),this.signedOut$=this.viewer$.pipe((0,e.U)(N=>N.signedOut)),this.isAdmin$=this.viewer$.pipe((0,e.U)(N=>E(N))),this.isEditor$=this.viewer$.pipe((0,e.U)(N=>H(N))),this.isCurator$=this.viewer$.pipe((0,e.U)(N=>G(N))),this.canCurate$=this.viewer$.pipe((0,e.U)(N=>Te(N))),this.canModerate$=this.viewer$.pipe((0,e.U)(N=>me(N)))}signOut(){this.http.get("/api/sign_out").pipe((0,_.t)(this)).subscribe(()=>this.queryRef.refetch())}refetch(){this.queryRef.refetch()}}).\u0275fac=function(U){return new(U||M)(j.LFG(i.Tt7),j.LFG(P.eN))},M.\u0275prov=j.Yz7({token:M,factory:M.\u0275fac,providedIn:"root"}),M);F=(0,t.gn)([(0,_.c)()],F)},8130:(Et,be,c)=>{c.d(be,{a:()=>i});var t=c(5879);let i=(()=>{class _{constructor(){this.linked=!0,this.popoverVisible=!1}ngOnInit(){this.onCloseClicked&&(this.linked=!1)}itemClosed(a){this.popoverVisible=!1,this.onCloseClicked&&this.onCloseClicked(this.idFunction())}}return _.\u0275fac=function(a){return new(a||_)},_.\u0275cmp=t.Xpm({type:_,selectors:[["ng-component"]],inputs:{onCloseClicked:"onCloseClicked",linked:"linked"},decls:0,vars:0,template:function(a,L){},encapsulation:2}),_})()},2:(Et,be,c)=>{function t(i){if("number"==typeof i||"boolean"==typeof i)return i;let _;if("NA"===i)_=["Not Applicable"];else if("SENSITIVITYRESPONSE"===i)_=["Sensitivity","/","Response"];else{_=i.toLowerCase().replace(/_/g," ").split(" ");for(var e=0;e<_.length;e++)_[e]=_[e].charAt(0).toUpperCase()+_[e].slice(1)}return _.join(" ")}c.d(be,{E:()=>t})},2666:(Et,be,c)=>{function t(i){switch(i){case"ASCO":return"ASCO";case"PUBMED":return"PubMed";case"ASH":return"ASH";default:return i}}c.d(be,{c:()=>t})},2023:(Et,be,c)=>{c.d(be,{f:()=>i});const t=new Map([["Assertion","#7243b5"],["ClinicalTrial","#ac3996"],["CoordinateSystem","#f68f37"],["Disease","#e62f76"],["Event","#1db8a9"],["EvidenceItem","#2a63b6"],["Gene","#07aff0"],["MolecularProfile","#33b358"],["NccnGuideline","#49566D"],["Phenotype","#1db8a9"],["Source","#f9ba45"],["Therapy","#ac3996"],["Variant","#74d34c"],["VariantGroup","#74d34c"],["VariantType","#74d34c"],["Comment","#44d8ef"],["Event","#ffdb00"],["Flag","#e24759"],["Queue","#666699"],["Revision","#f0673a"],["Curator","#a0d8f5"],["Editor","#58a0c4"],["Admin","#58a0c4"],["Organization","#3d7b99"],["Rejected","#BBBBBB"],["Greyscale","#999999"]]);function i(_){let e="#AAAAAA";if(_){const a=t.get(_);a&&(e=a)}return e}},2024:(Et,be,c)=>{c.d(be,{U:()=>a});var t=c(8645),i=c(5619),_=c(9773),e=c(4716);class a{constructor(R){this.networkErrorService=R}mutate(R,j,P,M){let F=new t.x,A={isSubmitting$:new i.X(!1),submitSuccess$:new i.X(!1),submitError$:new i.X([]),cleanup:()=>{F.next(),F.complete()}};return A.isSubmitting$.next(!0),R.mutate(j,P).pipe((0,_.R)(F),(0,e.x)(()=>{A.isSubmitting$.next(!1)})).subscribe({next:U=>{U.data&&M&&M(U.data)},error:U=>{U.graphQLErrors.length>0?A.submitError$.next(U.graphQLErrors.map(O=>O.message)):U.networkError&&this.networkErrorService.networkError$.next(U.networkError),A.cleanup()},complete:()=>{A.submitError$.next([]),A.submitSuccess$.next(!0),this.networkErrorService.networkError$.next(void 0),A.cleanup()}}),A}}},9333:(Et,be,c)=>{c.d(be,{h:()=>_});var t=c(6814),i=c(5879);let _=(()=>{class e{}return e.\u0275fac=function(L){return new(L||e)},e.\u0275mod=i.oAB({type:e}),e.\u0275inj=i.cJS({imports:[t.ez]}),e})()},8656:(Et,be,c)=>{c.d(be,{P:()=>U});var t=c(5879),i=c(6814),_=c(6109);function e(O,E){1&O&&(t.ynx(0),t._uU(1," N/A "),t.BQk())}function a(O,E){1&O&&(t.ynx(0),t._uU(1," Not applicable "),t.BQk())}function L(O,E){if(1&O&&(t.TgZ(0,"span",4),t.ynx(1,0),t.YNc(2,e,2,0,"ng-container",5),t.YNc(3,a,2,0,"ng-container",6),t.BQk(),t.qZA()),2&O){const H=t.oxw();t.xp6(1),t.Q6J("ngSwitch",H.cvcDisplayMode),t.xp6(1),t.Q6J("ngSwitchCase","small")}}function R(O,E){1&O&&(t.ynx(0),t._uU(1," \u2013\xa0\u2013 "),t.BQk())}function j(O,E){1&O&&(t.ynx(0),t._uU(1,"Not specified"),t.BQk())}function P(O,E){if(1&O&&(t.TgZ(0,"span",7),t.ynx(1,0),t.YNc(2,R,2,0,"ng-container",5),t.YNc(3,j,2,0,"ng-container",6),t.BQk(),t.qZA()),2&O){const H=t.oxw();t.xp6(1),t.Q6J("ngSwitch",H.cvcDisplayMode),t.xp6(1),t.Q6J("ngSwitchCase","small")}}function M(O,E){1&O&&(t.ynx(0),t._uU(1,"!?"),t.BQk())}function F(O,E){1&O&&(t.ynx(0),t._uU(1,"Unspecified"),t.BQk())}function A(O,E){if(1&O&&(t.TgZ(0,"span",8),t.ynx(1,0),t.YNc(2,M,2,0,"ng-container",5),t.YNc(3,F,2,0,"ng-container",6),t.BQk(),t.qZA()),2&O){const H=t.oxw();t.xp6(1),t.Q6J("ngSwitch",H.cvcDisplayMode),t.xp6(1),t.Q6J("ngSwitchCase","small")}}let U=(()=>{class O{constructor(){this.cvcEmptyCategory="not-applicable",this.cvcDisplayMode="default"}}return O.\u0275fac=function(H){return new(H||O)},O.\u0275cmp=t.Xpm({type:O,selectors:[["cvc-empty-value"]],inputs:{cvcEmptyCategory:"cvcEmptyCategory",cvcDisplayMode:"cvcDisplayMode"},decls:4,vars:4,consts:[[3,"ngSwitch"],["class","empty-symbol not-applicable","nz-tooltip","","nzTooltipTitle","Value is not applicable",4,"ngSwitchCase"],["nz-tooltip","","nzTooltipTitle","Unspecified","class","empty-symbol unspecified","nz-tooltip","","nzTooltipTitle","Value is unspecified",4,"ngSwitchCase"],["nz-tooltip","","nzTooltipTitle","INVALID","class","empty-symbol invalid","nz-tooltip","","nzTooltipTitle","Error: value requires specification",4,"ngSwitchCase"],["nz-tooltip","","nzTooltipTitle","Value is not applicable",1,"empty-symbol","not-applicable"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"],["nz-tooltip","","nzTooltipTitle","Unspecified","nz-tooltip","","nzTooltipTitle","Value is unspecified",1,"empty-symbol","unspecified"],["nz-tooltip","","nzTooltipTitle","INVALID","nz-tooltip","","nzTooltipTitle","Error: value requires specification",1,"empty-symbol","invalid"]],template:function(H,G){1&H&&(t.ynx(0,0),t.YNc(1,L,4,2,"span",1),t.YNc(2,P,4,2,"span",2),t.YNc(3,A,4,2,"span",3),t.BQk()),2&H&&(t.Q6J("ngSwitch",G.cvcEmptyCategory),t.xp6(1),t.Q6J("ngSwitchCase","not-applicable"),t.xp6(1),t.Q6J("ngSwitchCase","unspecified"),t.xp6(1),t.Q6J("ngSwitchCase","invalid"))},dependencies:[i.RF,i.n9,i.ED,_.SY],styles:[".empty-symbol[_ngcontent-%COMP%]{font-style:oblique;display:inline-block;white-space:no-wrap}.empty-symbol.not-applicable[_ngcontent-%COMP%]{color:#ccc;font-weight:500}.empty-symbol.unspecified[_ngcontent-%COMP%]{display:inline-block;color:#ccc;font-weight:500;padding:0 3px}.empty-symbol.invalid[_ngcontent-%COMP%]{display:inline-block;color:#ff4d4f;font-weight:700}"]}),O})()},821:(Et,be,c)=>{c.d(be,{M:()=>a});var t=c(6814),i=c(551),_=c(6109),e=c(5879);let a=(()=>{class L{}return L.\u0275fac=function(j){return new(j||L)},L.\u0275mod=e.oAB({type:L}),L.\u0275inj=e.cJS({imports:[t.ez,_.cg,i.PV]}),L})()},9835:(Et,be,c)=>{c.d(be,{J:()=>zt});var t=c(5879),i=c(9111),_=c(6814),e=c(156),a=c(2851),L=c(1813),R=c(96),j=c(4402),P=c(8213),M=c(1598),F=c(8545);function A(lt,He){if(1&lt&&t._UZ(0,"cvc-molecular-profile-popover",9),2&lt){const Ne=t.oxw();t.Q6J("molecularProfileId",Ne.entity.entityId)}}function U(lt,He){if(1&lt&&t._UZ(0,"cvc-disease-popover",10),2&lt){const Ne=t.oxw();t.Q6J("diseaseId",Ne.entity.entityId)}}function O(lt,He){if(1&lt&&t._UZ(0,"cvc-therapy-popover",11),2&lt){const Ne=t.oxw();t.Q6J("therapyId",Ne.entity.entityId)}}function E(lt,He){if(1&lt&&t._UZ(0,"cvc-source-popover",12),2&lt){const Ne=t.oxw();t.Q6J("sourceId",Ne.entity.entityId)}}function H(lt,He){if(1&lt&&t._UZ(0,"cvc-phenotype-popover",13),2&lt){const Ne=t.oxw();t.Q6J("phenotypeId",Ne.entity.entityId)}}function G(lt,He){if(1&lt&&t._UZ(0,"cvc-evidence-popover",14),2&lt){const Ne=t.oxw();t.Q6J("evidenceId",Ne.entity.entityId)}}function Te(lt,He){if(1&lt&&t._UZ(0,"cvc-gene-popover",15),2&lt){const Ne=t.oxw();t.Q6J("geneId",Ne.entity.entityId)}}function me(lt,He){if(1&lt&&t._UZ(0,"cvc-variant-popover",16),2&lt){const Ne=t.oxw();t.Q6J("variantId",Ne.entity.entityId)}}const K=["MolecularProfile","Disease","Therapy","Phenotype","Source","Gene","Variant","EvidenceItem"];let N=(()=>{class lt{ngOnInit(){if(null==this.entity)throw new Error("entity input is required for CvcEntityTagPopoverComponent")}}return lt.\u0275fac=function(Ne){return new(Ne||lt)},lt.\u0275cmp=t.Xpm({type:lt,selectors:[["cvc-entity-tag-popover"]],inputs:{entity:"entity"},decls:9,vars:9,consts:[[3,"ngSwitch"],[3,"molecularProfileId",4,"ngSwitchCase"],[3,"diseaseId",4,"ngSwitchCase"],[3,"therapyId",4,"ngSwitchCase"],[3,"sourceId",4,"ngSwitchCase"],[3,"phenotypeId",4,"ngSwitchCase"],[3,"evidenceId",4,"ngSwitchCase"],[3,"geneId",4,"ngSwitchCase"],[3,"variantId",4,"ngSwitchCase"],[3,"molecularProfileId"],[3,"diseaseId"],[3,"therapyId"],[3,"sourceId"],[3,"phenotypeId"],[3,"evidenceId"],[3,"geneId"],[3,"variantId"]],template:function(Ne,ie){1&Ne&&(t.ynx(0,0),t.YNc(1,A,1,1,"cvc-molecular-profile-popover",1),t.YNc(2,U,1,1,"cvc-disease-popover",2),t.YNc(3,O,1,1,"cvc-therapy-popover",3),t.YNc(4,E,1,1,"cvc-source-popover",4),t.YNc(5,H,1,1,"cvc-phenotype-popover",5),t.YNc(6,G,1,1,"cvc-evidence-popover",6),t.YNc(7,Te,1,1,"cvc-gene-popover",7),t.YNc(8,me,1,1,"cvc-variant-popover",8),t.BQk()),2&Ne&&(t.Q6J("ngSwitch",ie.entity.entityType),t.xp6(1),t.Q6J("ngSwitchCase","MolecularProfile"),t.xp6(1),t.Q6J("ngSwitchCase","Disease"),t.xp6(1),t.Q6J("ngSwitchCase","Therapy"),t.xp6(1),t.Q6J("ngSwitchCase","Source"),t.xp6(1),t.Q6J("ngSwitchCase","Phenotype"),t.xp6(1),t.Q6J("ngSwitchCase","EvidenceItem"),t.xp6(1),t.Q6J("ngSwitchCase","Gene"),t.xp6(1),t.Q6J("ngSwitchCase","Variant"))},dependencies:[_.RF,_.n9,e._,a.I,L.p,R.a,j.S,P._,M.Q,F.m],encapsulation:2,changeDetection:0}),lt})();var V=c(4190),S=c(551),I=c(5695),b=c(6109),re=c(7417),le=c(7334),Q=c(2616),de=c(1201);function pe(lt,He){}function he(lt,He){if(1&lt){const Ne=t.EpF();t.TgZ(0,"span",6)(1,"nz-tag",7),t.NdJ("nzCheckedChange",function(){t.CHM(Ne);const Me=t.oxw();return t.KtG(Me.cvcTagCheckedChange)})("nzOnClose",function(Me){t.CHM(Ne);const Fe=t.oxw();return t.KtG(Fe.cvcOnClose.next(Me))}),t.TgZ(2,"span",8),t.YNc(3,pe,0,0,"ng-template",9),t.qZA()()()}if(2&lt){const Ne=t.oxw(),ie=t.MAs(6),Me=t.MAs(8);t.xp6(1),t.Q6J("nzMode",Ne.cvcMode)("nzChecked",Ne.cvcTagChecked),t.xp6(1),t.Q6J("nzPopoverContent",Ne.cvcShowPopover&&Ne.popoverInput?ie:void 0),t.xp6(1),t.Q6J("ngTemplateOutlet",Me)}}function Se(lt,He){}function ke(lt,He){if(1&lt&&(t.TgZ(0,"span",13),t.YNc(1,Se,0,0,"ng-template",9),t.qZA()),2&lt){const Ne=t.oxw(2),ie=t.MAs(8);t.Q6J("nzTooltipTitle",Ne.entity.tooltip),t.xp6(1),t.Q6J("ngTemplateOutlet",ie)}}function Ft(lt,He){if(1&lt){const Ne=t.EpF();t.TgZ(0,"span",10)(1,"nz-tag",11),t.NdJ("nzOnClose",function(Me){t.CHM(Ne);const Fe=t.oxw();return t.KtG(Fe.cvcOnClose.next(Me))}),t.YNc(2,ke,2,2,"span",12),t.qZA()()}if(2&lt){const Ne=t.oxw(),ie=t.MAs(4);t.xp6(1),t.Q6J("nzMode","closeable"),t.xp6(1),t.Q6J("ngIf",Ne.entity&&Ne.entity.tooltip)("ngIfElse",ie)}}function wt(lt,He){}function tn(lt,He){if(1&lt&&(t.TgZ(0,"span",13),t.YNc(1,wt,0,0,"ng-template",9),t.qZA()),2&lt){const Ne=t.oxw(2),ie=t.MAs(8);t.Q6J("nzTooltipTitle",Ne.entity.tooltip),t.xp6(1),t.Q6J("ngTemplateOutlet",ie)}}function xt(lt,He){if(1&lt&&(t.TgZ(0,"span",14),t.YNc(1,tn,2,2,"span",12),t.qZA()),2&lt){const Ne=t.oxw(),ie=t.MAs(4);t.xp6(1),t.Q6J("ngIf",Ne.entity&&Ne.entity.tooltip)("ngIfElse",ie)}}function $t(lt,He){}function Xt(lt,He){if(1&lt&&(t.TgZ(0,"span",8),t.YNc(1,$t,0,0,"ng-template",9),t.qZA()),2&lt){const Ne=t.oxw(),ie=t.MAs(6),Me=t.MAs(8);t.Q6J("nzPopoverContent",Ne.popoverInput?ie:void 0),t.xp6(1),t.Q6J("ngTemplateOutlet",Me)}}function un(lt,He){if(1&lt&&t._UZ(0,"cvc-entity-tag-popover",16),2&lt){const Ne=t.oxw(2);t.Q6J("entity",Ne.popoverInput)}}function Ln(lt,He){if(1&lt&&t.YNc(0,un,1,1,"cvc-entity-tag-popover",15),2&lt){const Ne=t.oxw();t.Q6J("ngIf",Ne.popoverInput)}}function rt(lt,He){if(1&lt&&(t.TgZ(0,"span"),t.GkF(1,9),t.qZA()),2&lt){t.oxw();const Ne=t.MAs(4);t.xp6(1),t.Q6J("ngTemplateOutlet",Ne)}}function $e(lt,He){if(1&lt&&(t.TgZ(0,"a",23),t.GkF(1,9),t.qZA()),2&lt){t.oxw();const Ne=t.MAs(4),ie=t.oxw(2);t.Q6J("routerLink",ie.entity.link),t.xp6(1),t.Q6J("ngTemplateOutlet",Ne)}}function gt(lt,He){if(1&lt&&(t._UZ(0,"span",26),t.ALo(1,"typenameToIcon"),t.ALo(2,"entityColor")),2&lt){const Ne=t.oxw(4);t.Q6J("nzType",t.lcZ(1,2,Ne.typename))("nzTwotoneColor",t.lcZ(2,4,Ne.typename))}}function Ze(lt,He){if(1&lt&&(t.YNc(0,gt,3,6,"span",24),t._UZ(1,"span",25),t.ALo(2,"highlightTypeahead")),2&lt){t.oxw(2);const Ne=t.MAs(4),ie=t.oxw();t.Q6J("ngIf",ie.typename&&ie.cvcShowIcon)("ngIfElse",Ne),t.xp6(1),t.Q6J("innerHtml",t.xi3(2,3,ie.entity.name,ie.cvcEmphasize),t.oJD)}}function jt(lt,He){if(1&lt&&(t.ynx(0),t.YNc(1,rt,2,1,"span",20),t.YNc(2,$e,2,2,"a",21),t.YNc(3,Ze,3,6,"ng-template",null,22,t.W1O),t.BQk()),2&lt){const Ne=t.oxw(2);t.xp6(1),t.Q6J("ngIf",Ne.cvcDisableLink),t.xp6(1),t.Q6J("ngIf",!Ne.cvcDisableLink)}}function Zt(lt,He){}function yn(lt,He){if(1&lt&&(t.YNc(0,Zt,0,0,"ng-template",9),t._uU(1)),2&lt){t.oxw();const Ne=t.MAs(4),ie=t.oxw();t.Q6J("ngTemplateOutlet",Ne),t.xp6(1),t.hij(" CACHE-MISS (",ie.cvcCacheId,") ")}}function wn(lt,He){1&lt&&t._UZ(0,"span",27)}function rn(lt,He){if(1&lt&&(t.YNc(0,jt,5,2,"ng-container",17),t.YNc(1,yn,2,2,"ng-template",null,18,t.W1O),t.YNc(3,wn,1,0,"ng-template",null,19,t.W1O)),2&lt){const Ne=t.MAs(2),ie=t.oxw();t.Q6J("ngIf",ie.entity)("ngIfElse",Ne)}}function mn(lt,He){if(1&lt&&t._UZ(0,"cvc-entity-tag-popover",16),2&lt){const Ne=t.oxw(2);t.Q6J("entity",Ne.popoverInput)}}function je(lt,He){if(1&lt&&t.YNc(0,mn,1,1,"cvc-entity-tag-popover",15),2&lt){const Ne=t.oxw();t.Q6J("ngIf",Ne.popoverInput)}}const It=lt=>void 0!==lt&&lt.__typename&&lt.id&&void 0!==lt.name;let zt=(()=>{class lt{set cvcLinkableEntity(Ne){Ne&&this.setLinkableEntity(Ne)}set cvcCacheId(Ne){Ne&&this.setCachedLinkableEntity(Ne)}constructor(Ne){this.apollo=Ne,this.cvcContext="default",this.cvcMode="default",this.cvcDisableLink=!0,this.cvcTagChecked=!1,this.cvcHasTooltip=!1,this.cvcFullWidth=!1,this.cvcShowPopover=!1,this.cvcShowIcon=!0,this.cvcTagCheckedChange=new t.vpe,this.cvcOnClose=new t.vpe}hasPopover(Ne){return K.includes(Ne)}setLinkableEntity(Ne){It(Ne)&&(this.typename=Ne.__typename,this.id=Ne.id,this.entity=Ne,this.setPopoverInput(Ne))}setCachedLinkableEntity(Ne){const[ie,Me]=Ne.split(":");if(this.typename=ie,this.id=+Me,!this.typename||!this.id)return void console.error(`entity-tag received an invalid cacheId: ${Ne}. Cache IDs must be in the format 'TYPENAME:ID'.`);let Fe;Fe=this.cvcDisableLink?this.cvcHasTooltip?{id:`${ie}:${Me}`,fragment:i.Ps`
          fragment Linkable${ie}Entity on ${ie} {
            id
            name
            tooltip
          }
        `}:{id:`${ie}:${Me}`,fragment:i.Ps`
          fragment Linkable${ie}Entity on ${ie} {
            id
            name
          }
        `}:{id:`${ie}:${Me}`,fragment:i.Ps`
          fragment Linkable${ie}Entity on ${ie} {
            id
            name
            link
          }
        `};const it=this.apollo.client.readFragment(Fe);It(it)?(this.setPopoverInput(it),this.entity=it):console.error(`entity-tag could not find cached entity ${Ne}`)}setPopoverInput(Ne){It(Ne)&&this.hasPopover(Ne.__typename)&&(this.popoverInput={entityId:Ne.id,entityType:Ne.__typename})}ngOnChanges(Ne){Ne.cvcMode&&"checkable"===Ne.cvcMode.currentValue&&(this.cvcDisableLink=!0),Ne.cvcContext&&"default"!==Ne.cvcContext.currentValue&&(this.cvcDisableLink=!0)}}return lt.\u0275fac=function(Ne){return new(Ne||lt)(t.Y36(i._M))},lt.\u0275cmp=t.Xpm({type:lt,selectors:[["cvc-entity-tag"]],hostVars:40,hostBindings:function(Ne,ie){2&Ne&&t.ekj("full-width",!0===ie.cvcFullWidth)("label-max",void 0!==ie.cvcTruncateLabel)("label-max-50","50px"===ie.cvcTruncateLabel)("label-max-75","75px"===ie.cvcTruncateLabel)("label-max-100","100px"===ie.cvcTruncateLabel)("label-max-125","125px"===ie.cvcTruncateLabel)("label-max-150","150px"===ie.cvcTruncateLabel)("label-max-175","175px"===ie.cvcTruncateLabel)("label-max-200","200px"===ie.cvcTruncateLabel)("label-max-250","250px"===ie.cvcTruncateLabel)("label-max-300","300px"===ie.cvcTruncateLabel)("label-max-350","350px"===ie.cvcTruncateLabel)("label-max-400","400px"===ie.cvcTruncateLabel)("label-max-450","450px"===ie.cvcTruncateLabel)("label-max-500","500px"===ie.cvcTruncateLabel)("rejected","REJECTED"===ie.cvcStatus)("accepted","ACCEPTED"===ie.cvcStatus)("submitted","SUBMITTED"===ie.cvcStatus)("new","NEW"===ie.cvcStatus)("superseded","SUPERSEDED"===ie.cvcStatus)},inputs:{cvcLinkableEntity:"cvcLinkableEntity",cvcCacheId:"cvcCacheId",cvcStatus:"cvcStatus",cvcContext:"cvcContext",cvcMode:"cvcMode",cvcEmphasize:"cvcEmphasize",cvcDisableLink:"cvcDisableLink",cvcTagChecked:"cvcTagChecked",cvcHasTooltip:"cvcHasTooltip",cvcFullWidth:"cvcFullWidth",cvcShowPopover:"cvcShowPopover",cvcShowIcon:"cvcShowIcon",cvcTruncateLabel:"cvcTruncateLabel"},outputs:{cvcTagCheckedChange:"cvcTagCheckedChange",cvcOnClose:"cvcOnClose"},features:[t.TTD],decls:11,vars:3,consts:[["class","default",4,"ngIf"],["class","select-item",4,"ngIf"],["class","multi-select-item",4,"ngIf"],["noTooltip",""],["popoverContent",""],["tagContent",""],[1,"default"],[3,"nzMode","nzChecked","nzCheckedChange","nzOnClose"],["nz-popover","","nzPopoverTrigger","hover",3,"nzPopoverContent"],[3,"ngTemplateOutlet"],[1,"select-item"],[3,"nzMode","nzOnClose"],["nz-tooltip","",3,"nzTooltipTitle",4,"ngIf","ngIfElse"],["nz-tooltip","",3,"nzTooltipTitle"],[1,"multi-select-item"],[3,"entity",4,"ngIf"],[3,"entity"],[4,"ngIf","ngIfElse"],["cacheMiss",""],["noIcon",""],[4,"ngIf"],[3,"routerLink",4,"ngIf"],["tagLabel",""],[3,"routerLink"],["nz-icon","","nzTheme","twotone","class","tag-icon",3,"nzType","nzTwotoneColor",4,"ngIf","ngIfElse"],[1,"tag-label",3,"innerHtml"],["nz-icon","","nzTheme","twotone",1,"tag-icon",3,"nzType","nzTwotoneColor"],[1,"tag-no-icon"]],template:function(Ne,ie){1&Ne&&(t.YNc(0,he,4,4,"span",0),t.YNc(1,Ft,3,3,"span",1),t.YNc(2,xt,2,2,"span",2),t.YNc(3,Xt,2,2,"ng-template",null,3,t.W1O),t.YNc(5,Ln,1,1,"ng-template",null,4,t.W1O),t.YNc(7,rn,5,2,"ng-template",null,5,t.W1O),t.YNc(9,je,1,1,"ng-template",null,4,t.W1O)),2&Ne&&(t.Q6J("ngIf","default"===ie.cvcContext),t.xp6(1),t.Q6J("ngIf","select-item"===ie.cvcContext),t.xp6(1),t.Q6J("ngIf","multi-select-item"===ie.cvcContext))},dependencies:[_.O5,_.tP,V.rH,S.Ls,I.j,b.SY,re.lU,N,le.A,Q.a,de.Z],styles:['.hide-dropdown[_ngcontent-%COMP%]{display:none}.label-max-50[_nghost-%COMP%]   .tag-label[_ngcontent-%COMP%]{max-width:50px;overflow:hidden;text-overflow:ellipsis}.label-max-75[_nghost-%COMP%]   .tag-label[_ngcontent-%COMP%]{max-width:75px;overflow:hidden;text-overflow:ellipsis}.label-max-100[_nghost-%COMP%]   .tag-label[_ngcontent-%COMP%]{max-width:100px;overflow:hidden;text-overflow:ellipsis}.label-max-125[_nghost-%COMP%]   .tag-label[_ngcontent-%COMP%]{max-width:125px;overflow:hidden;text-overflow:ellipsis}.label-max-150[_nghost-%COMP%]   .tag-label[_ngcontent-%COMP%]{max-width:150px;overflow:hidden;text-overflow:ellipsis}.label-max-175[_nghost-%COMP%]   .tag-label[_ngcontent-%COMP%]{max-width:175px;overflow:hidden;text-overflow:ellipsis}.label-max-200[_nghost-%COMP%]   .tag-label[_ngcontent-%COMP%]{max-width:200px;overflow:hidden;text-overflow:ellipsis}.label-max-250[_nghost-%COMP%]   .tag-label[_ngcontent-%COMP%]{max-width:250px;overflow:hidden;text-overflow:ellipsis}.label-max-300[_nghost-%COMP%]   .tag-label[_ngcontent-%COMP%]{max-width:300px;overflow:hidden;text-overflow:ellipsis}.label-max-350[_nghost-%COMP%]   .tag-label[_ngcontent-%COMP%]{max-width:350px;overflow:hidden;text-overflow:ellipsis}.label-max-400[_nghost-%COMP%]   .tag-label[_ngcontent-%COMP%]{max-width:400px;overflow:hidden;text-overflow:ellipsis}.label-max-450[_nghost-%COMP%]   .tag-label[_ngcontent-%COMP%]{max-width:450px;overflow:hidden;text-overflow:ellipsis}.label-max-500[_nghost-%COMP%]   .tag-label[_ngcontent-%COMP%]{max-width:500px;overflow:hidden;text-overflow:ellipsis}.rejected[_nghost-%COMP%]   nz-tag[_ngcontent-%COMP%], .submitted[_nghost-%COMP%]   nz-tag[_ngcontent-%COMP%], .accepted[_nghost-%COMP%]   nz-tag[_ngcontent-%COMP%], .deprecated[_nghost-%COMP%]   nz-tag[_ngcontent-%COMP%]{border-right-width:2px}.rejected[_nghost-%COMP%]   nz-tag[_ngcontent-%COMP%], .deprecated[_nghost-%COMP%]   nz-tag[_ngcontent-%COMP%]{border-color:#e6e6e6;background-color:#fff;color:#999999d9}.submitted[_nghost-%COMP%]   nz-tag[_ngcontent-%COMP%]{border-color:#ffe58f}.accepted[_nghost-%COMP%]   nz-tag[_ngcontent-%COMP%]{border-color:#b7eb8f}.full-width[_nghost-%COMP%]   nz-tag[_ngcontent-%COMP%]{width:100%}.full-width[_nghost-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-label[_ngcontent-%COMP%]{width:100%}nz-tag[_ngcontent-%COMP%]{margin-right:0;margin-inline-end:4px}  -checkable{background-color:transparent;cursor:pointer}  -checkable:not(  -checkable-checked):hover{color:#1890ff}  -checkable:active,   -checkable-checked{color:#fff}  -checkable-checked{background-color:#1890ff}  -checkable:active{background-color:#096dd9}.default[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]{margin:0;padding:0 2px 0 0;margin-inline-end:4px;max-width:100%}.default[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon[_ngcontent-%COMP%]{display:inline-block;padding:3px 2px 3px 4px;margin:-3px 0}.default[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-no-icon[_ngcontent-%COMP%]{display:inline-block;width:4px}.default[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-label[_ngcontent-%COMP%]{display:inline-block;font-weight:400;margin:-3px 0 -4px;padding:3px 3px 3px 2px;line-height:1}.default[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]     i.ant-tag-close-icon.anticon-close{transition:none;margin-left:3px}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]{margin:0;padding:0 2px 0 0;margin-inline-end:4px;max-width:100%}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon[_ngcontent-%COMP%]{display:inline-block;padding:3px 2px 3px 4px;margin:-3px 0}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-no-icon[_ngcontent-%COMP%]{display:inline-block;width:4px}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-label[_ngcontent-%COMP%]{display:inline-block;font-weight:400;margin:-3px 0 -4px;padding:3px 3px 3px 2px;line-height:1}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]     i.ant-tag-close-icon.anticon-close{transition:none;margin-left:3px}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-label[_ngcontent-%COMP%]{padding-right:0}.multi-select-item[_ngcontent-%COMP%]{display:inline-block;margin-top:-3px;margin-bottom:-3px;margin-left:-4px;padding-left:4px}.multi-select-item[_ngcontent-%COMP%]   .tag-icon[_ngcontent-%COMP%]:after{content:" "}.typeahead-match[_ngcontent-%COMP%]{font-weight:700}a.disabled[_ngcontent-%COMP%]{pointer-events:none}'],changeDetection:0}),lt})()},188:(Et,be,c)=>{c.d(be,{x:()=>me});var t=c(6814),i=c(551),_=c(5695),e=c(2524),a=c(6109),L=c(4190),R=c(5879);let j=(()=>{class K{}return K.\u0275fac=function(V){return new(V||K)},K.\u0275mod=R.oAB({type:K}),K.\u0275inj=R.cJS({imports:[t.ez]}),K})();var P=c(7417),M=c(5687),F=c(1855),A=c(9021),U=c(2064),O=c(1332),E=c(6247),H=c(1207),G=c(6446);let Te=(()=>{class K{}return K.\u0275fac=function(V){return new(V||K)},K.\u0275mod=R.oAB({type:K}),K.\u0275inj=R.cJS({imports:[t.ez,U._,M.t,E.n,H.s,O.I,F.f,A.w,G.k]}),K})(),me=(()=>{class K{}return K.\u0275fac=function(V){return new(V||K)},K.\u0275mod=R.oAB({type:K}),K.\u0275inj=R.cJS({imports:[t.ez,L.Bz,i.PV,_.X,a.cg,P.$6,j,e.s,Te,j]}),K})()},9928:(Et,be,c)=>{c.d(be,{F:()=>G});var P,t=c(655),i=c(1791),_=c(5879),e=c(4190),a=c(6814),L=c(2669),R=c(3903),j=c(8091);function M(Te,me){if(1&Te&&_._UZ(0,"nz-alert",6),2&Te){_.oxw();const K=_.MAs(3),N=_.oxw();_.MGl("nzMessage","Error Submitting ",N.entityType,""),_.Q6J("nzDescription",K)}}function F(Te,me){if(1&Te&&(_.TgZ(0,"li"),_._uU(1),_.qZA()),2&Te){const K=me.$implicit;_.xp6(1),_.hij(" ",K," ")}}function A(Te,me){if(1&Te&&(_.TgZ(0,"ul"),_.YNc(1,F,2,1,"li",7),_.qZA()),2&Te){const K=_.oxw().ngIf;_.xp6(1),_.Q6J("ngForOf",K)}}function U(Te,me){if(1&Te&&(_.ynx(0),_.YNc(1,M,1,2,"nz-alert",4),_.YNc(2,A,2,1,"ng-template",null,5,_.W1O),_.BQk()),2&Te){const K=me.ngIf;_.xp6(1),_.Q6J("ngIf",K.length>0)}}function O(Te,me){if(1&Te&&(_.ynx(0),_._UZ(1,"nz-alert",8),_.BQk()),2&Te){const K=_.oxw();_.xp6(1),_.MGl("nzMessage","",K.entityType," Submitted"),_.Q6J("nzDescription",K.successMessage?K.successMessage:null)}}function E(Te,me){1&Te&&_.Hsn(0)}let G=((P=class{set mutationState(me){this._mutationState=me,this.currentTimer&&clearTimeout(this.currentTimer),me&&me.submitSuccess$.pipe((0,i.t)(this)).subscribe(K=>{K&&(this.currentTimer=setTimeout(()=>{this.redirectUrl&&this.router.navigateByUrl(this.redirectUrl)},2500))})}get mutationState(){return this._mutationState}constructor(me){this.router=me}ngOnInit(){}}).\u0275fac=function(me){return new(me||P)(_.Y36(e.F0))},P.\u0275cmp=_.Xpm({type:P,selectors:[["cvc-form-submission-status-display"]],inputs:{mutationState:"mutationState",entityType:"entityType",successMessage:"successMessage",redirectUrl:"redirectUrl"},ngContentSelectors:["*"],decls:8,vars:10,consts:[[3,"nzSpinning"],[4,"ngIf"],[4,"ngIf","ngIfElse"],["form",""],["nzType","error","nzShowIcon","",3,"nzMessage","nzDescription",4,"ngIf"],["errorList",""],["nzType","error","nzShowIcon","",3,"nzMessage","nzDescription"],[4,"ngFor","ngForOf"],["nzType","success","nzShowIcon","",3,"nzMessage","nzDescription"]],template:function(me,K){if(1&me&&(_.F$t(),_.TgZ(0,"nz-spin",0),_.ALo(1,"ngrxPush"),_.YNc(2,U,4,1,"ng-container",1),_.ALo(3,"ngrxPush"),_.YNc(4,O,2,2,"ng-container",2),_.ALo(5,"ngrxPush"),_.YNc(6,E,1,0,"ng-template",null,3,_.W1O),_.qZA()),2&me){const N=_.MAs(7);_.Q6J("nzSpinning",_.lcZ(1,4,null==K.mutationState?null:K.mutationState.isSubmitting$)),_.xp6(2),_.Q6J("ngIf",_.lcZ(3,6,null==K.mutationState?null:K.mutationState.submitError$)),_.xp6(2),_.Q6J("ngIf",_.lcZ(5,8,null==K.mutationState?null:K.mutationState.submitSuccess$))("ngIfElse",N)}},dependencies:[a.sg,a.O5,L.W,R.r,j.fM],encapsulation:2,changeDetection:0}),P);G=(0,t.gn)([(0,i.c)()],G)},1227:(Et,be,c)=>{c.d(be,{g:()=>L});var t=c(6814),i=c(3903),_=c(2574),e=c(2669),a=c(5879);let L=(()=>{class R{}return R.\u0275fac=function(P){return new(P||R)},R.\u0275mod=a.oAB({type:R}),R.\u0275inj=a.cJS({imports:[t.ez,e.j,i.L,_.zf]}),R})()},7165:(Et,be,c)=>{c.d(be,{S:()=>_d});var t=c(6223),i=c(4190),_=c(5545),e=c(5879),a=c(6814),L=c(3599),R=c(95);function j(l,g){if(1&l&&(e.ynx(0),e.TgZ(1,"nz-form-label",4),e._uU(2),e.qZA(),e.BQk()),2&l){const s=e.oxw();e.xp6(1),e.Q6J("nzRequired",s.props.required&&!0!==s.props.hideRequiredMarker)("nzFor",s.id),e.xp6(1),e.hij(" ",s.props.label," ")}}function P(l,g){if(1&l&&e._UZ(0,"formly-validation-message",5),2&l){const s=e.oxw();e.Q6J("field",s.field)}}let M=(()=>{class l extends _.n2{get errorState(){return this.showError?"error":""}}return l.\u0275fac=function(){let g;return function(p){return(g||(g=e.n5z(l)))(p||l)}}(),l.\u0275cmp=e.Xpm({type:l,selectors:[["formly-wrapper-nz-form-field"]],features:[e.qOj],decls:7,vars:4,consts:[[4,"ngIf"],[3,"nzValidateStatus","nzErrorTip","nzExtra"],["fieldComponent",""],["errorTpl",""],[3,"nzRequired","nzFor"],[3,"field"]],template:function(s,p){if(1&s&&(e.TgZ(0,"nz-form-item"),e.YNc(1,j,3,3,"ng-container",0),e.TgZ(2,"nz-form-control",1),e.GkF(3,null,2),e.YNc(5,P,1,1,"ng-template",null,3,e.W1O),e.qZA()()),2&s){const w=e.MAs(6);e.xp6(1),e.Q6J("ngIf",p.props.label&&!0!==p.props.hideLabel),e.xp6(1),e.Q6J("nzValidateStatus",p.errorState)("nzErrorTip",w)("nzExtra",p.props.description)}},dependencies:[L.Nx,L.iK,L.Fd,_.M2,R.SK,a.O5,R.t3],encapsulation:2}),l})(),F=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[[a.ez,t.UX,L.U5,_.X0.forChild({wrappers:[{name:"form-field",component:M}]})]]}),l})();var A=c(824),U=c(655),O=c(6028),E=c(8645),H=c(2438),G=c(3019),Te=c(3997),me=c(9773),K=c(7921),N=c(4664),V=c(1631),S=c(7398),I=c(9087),b=c(7754),re=c(4300),le=c(9388),Q=c(883),de=c(551),pe=c(8324);const he=["upHandler"],Se=["downHandler"],ke=["inputElement"];function Ft(l,g){if(1&l&&e._UZ(0,"nz-form-item-feedback-icon",11),2&l){const s=e.oxw();e.Q6J("status",s.status)}}const wt=["nz-input-number-group-slot",""];function tn(l,g){if(1&l&&e._UZ(0,"span",2),2&l){const s=e.oxw();e.Q6J("nzType",s.icon)}}function xt(l,g){if(1&l&&(e.ynx(0),e._uU(1),e.BQk()),2&l){const s=e.oxw();e.xp6(1),e.Oqu(s.template)}}const $t=["*"];function Xt(l,g){if(1&l&&e._UZ(0,"div",7),2&l){const s=e.oxw(2);e.Q6J("icon",s.nzAddOnBeforeIcon)("template",s.nzAddOnBefore)}}function un(l,g){}function Ln(l,g){if(1&l&&(e.TgZ(0,"div",8),e.YNc(1,un,0,0,"ng-template",9),e.qZA()),2&l){const s=e.oxw(2),p=e.MAs(4);e.ekj("ant-input-number-affix-wrapper-disabled",s.disabled)("ant-input-number-affix-wrapper-sm",s.isSmall)("ant-input-number-affix-wrapper-lg",s.isLarge)("ant-input-number-affix-wrapper-focused",s.focused),e.Q6J("ngClass",s.affixInGroupStatusCls),e.xp6(1),e.Q6J("ngTemplateOutlet",p)}}function rt(l,g){if(1&l&&e._UZ(0,"span",7),2&l){const s=e.oxw(2);e.Q6J("icon",s.nzAddOnAfterIcon)("template",s.nzAddOnAfter)}}function $e(l,g){if(1&l&&(e.TgZ(0,"span",4),e.YNc(1,Xt,1,2,"div",5),e.YNc(2,Ln,2,10,"div",6),e.YNc(3,rt,1,2,"span",5),e.qZA()),2&l){const s=e.oxw(),p=e.MAs(6);e.xp6(1),e.Q6J("ngIf",s.nzAddOnBefore||s.nzAddOnBeforeIcon),e.xp6(1),e.Q6J("ngIf",s.isAffix||s.hasFeedback)("ngIfElse",p),e.xp6(1),e.Q6J("ngIf",s.nzAddOnAfter||s.nzAddOnAfterIcon)}}function gt(l,g){}function Ze(l,g){if(1&l&&e.YNc(0,gt,0,0,"ng-template",9),2&l){e.oxw(2);const s=e.MAs(4);e.Q6J("ngTemplateOutlet",s)}}function jt(l,g){if(1&l&&e.YNc(0,Ze,1,1,"ng-template",10),2&l){const s=e.oxw(),p=e.MAs(6);e.Q6J("ngIf",s.isAffix)("ngIfElse",p)}}function Zt(l,g){if(1&l&&e._UZ(0,"span",13),2&l){const s=e.oxw(2);e.Q6J("icon",s.nzPrefixIcon)("template",s.nzPrefix)}}function yn(l,g){}function wn(l,g){if(1&l&&e._UZ(0,"nz-form-item-feedback-icon",16),2&l){const s=e.oxw(3);e.Q6J("status",s.status)}}function rn(l,g){if(1&l&&(e.TgZ(0,"span",14),e.YNc(1,wn,1,1,"nz-form-item-feedback-icon",15),e.qZA()),2&l){const s=e.oxw(2);e.Q6J("icon",s.nzSuffixIcon)("template",s.nzSuffix),e.xp6(1),e.Q6J("ngIf",s.isFeedback)}}function mn(l,g){if(1&l&&(e.YNc(0,Zt,1,2,"span",11),e.YNc(1,yn,0,0,"ng-template",9),e.YNc(2,rn,2,3,"span",12)),2&l){const s=e.oxw(),p=e.MAs(6);e.Q6J("ngIf",s.nzPrefix||s.nzPrefixIcon),e.xp6(1),e.Q6J("ngTemplateOutlet",p),e.xp6(1),e.Q6J("ngIf",s.nzSuffix||s.nzSuffixIcon||s.isFeedback)}}function je(l,g){if(1&l&&e._UZ(0,"nz-form-item-feedback-icon",16),2&l){const s=e.oxw(3);e.Q6J("status",s.status)}}function It(l,g){if(1&l&&(e.TgZ(0,"span",18),e.YNc(1,je,1,1,"nz-form-item-feedback-icon",15),e.qZA()),2&l){const s=e.oxw(2);e.xp6(1),e.Q6J("ngIf",s.isFeedback)}}function zt(l,g){if(1&l&&(e.Hsn(0),e.YNc(1,It,2,1,"span",17)),2&l){const s=e.oxw();e.xp6(1),e.Q6J("ngIf",!s.isAddOn&&!s.isAffix&&s.isFeedback)}}let lt=(()=>{class l{onModelChange(s){this.parsedValue=this.nzParser(s),this.inputElement.nativeElement.value=`${this.parsedValue}`;const p=this.getCurrentValidValue(this.parsedValue);this.setValue(p)}getCurrentValidValue(s){let p=s;return p=""===p?"":this.isNotCompleteNumber(p)?this.value:`${this.getValidValue(p)}`,this.toNumber(p)}isNotCompleteNumber(s){return isNaN(s)||""===s||null===s||!(!s||s.toString().indexOf(".")!==s.toString().length-1)}getValidValue(s){let p=parseFloat(s);return isNaN(p)?s:(p<this.nzMin&&(p=this.nzMin),p>this.nzMax&&(p=this.nzMax),p)}toNumber(s){if(this.isNotCompleteNumber(s))return s;const p=String(s);if(p.indexOf(".")>=0&&(0,b.DX)(this.nzPrecision)){if("function"==typeof this.nzPrecisionMode)return this.nzPrecisionMode(s,this.nzPrecision);if("cut"===this.nzPrecisionMode){const w=p.split(".");return w[1]=w[1].slice(0,this.nzPrecision),Number(w.join("."))}return Number(Number(s).toFixed(this.nzPrecision))}return Number(s)}getRatio(s){let p=1;return s.metaKey||s.ctrlKey?p=.1:s.shiftKey&&(p=10),p}down(s,p){this.isFocused||this.focus(),this.step("down",s,p)}up(s,p){this.isFocused||this.focus(),this.step("up",s,p)}getPrecision(s){const p=s.toString();if(p.indexOf("e-")>=0)return parseInt(p.slice(p.indexOf("e-")+2),10);let w=0;return p.indexOf(".")>=0&&(w=p.length-p.indexOf(".")-1),w}getMaxPrecision(s,p){if((0,b.DX)(this.nzPrecision))return this.nzPrecision;const w=this.getPrecision(p),ze=this.getPrecision(this.nzStep),ft=this.getPrecision(s);return s?Math.max(ft,w+ze):w+ze}getPrecisionFactor(s,p){const w=this.getMaxPrecision(s,p);return Math.pow(10,w)}upStep(s,p){const w=this.getPrecisionFactor(s,p),ze=Math.abs(this.getMaxPrecision(s,p));let ft;return ft="number"==typeof s?((w*s+w*this.nzStep*p)/w).toFixed(ze):this.nzMin===-1/0?this.nzStep:this.nzMin,this.toNumber(ft)}downStep(s,p){const w=this.getPrecisionFactor(s,p),ze=Math.abs(this.getMaxPrecision(s,p));let ft;return ft="number"==typeof s?((w*s-w*this.nzStep*p)/w).toFixed(ze):this.nzMin===-1/0?-this.nzStep:this.nzMin,this.toNumber(ft)}step(s,p,w=1){if(this.stop(),p.preventDefault(),this.nzDisabled)return;const ze=this.getCurrentValidValue(this.parsedValue)||0;let ft=0;"up"===s?ft=this.upStep(ze,w):"down"===s&&(ft=this.downStep(ze,w));const vn=ft>this.nzMax||ft<this.nzMin;ft>this.nzMax?ft=this.nzMax:ft<this.nzMin&&(ft=this.nzMin),this.setValue(ft),this.updateDisplayValue(ft),this.isFocused=!0,!vn&&(this.autoStepTimer=setTimeout(()=>{this[s](p,w)},300))}stop(){this.autoStepTimer&&clearTimeout(this.autoStepTimer)}setValue(s){if(`${this.value}`!=`${s}`&&this.onChange(s),this.value=s,this.parsedValue=s,this.disabledUp=this.disabledDown=!1,s||0===s){const p=Number(s);p>=this.nzMax&&(this.disabledUp=!0),p<=this.nzMin&&(this.disabledDown=!0)}}updateDisplayValue(s){const p=(0,b.DX)(this.nzFormatter(s))?this.nzFormatter(s):"";this.displayValue=p,this.inputElement.nativeElement.value=`${p}`}writeValue(s){this.value=s,this.setValue(s),this.updateDisplayValue(s),this.cdr.markForCheck()}registerOnChange(s){this.onChange=s}registerOnTouched(s){this.onTouched=s}setDisabledState(s){this.nzDisabled=this.isNzDisableFirstChange&&this.nzDisabled||s,this.isNzDisableFirstChange=!1,this.disabled$.next(this.nzDisabled),this.cdr.markForCheck()}focus(){this.focusMonitor.focusVia(this.inputElement,"keyboard")}blur(){this.inputElement.nativeElement.blur()}constructor(s,p,w,ze,ft,vn,Sn,Co,mi){this.ngZone=s,this.elementRef=p,this.cdr=w,this.focusMonitor=ze,this.renderer=ft,this.directionality=vn,this.destroy$=Sn,this.nzFormStatusService=Co,this.nzFormNoStatusService=mi,this.isNzDisableFirstChange=!0,this.isFocused=!1,this.disabled$=new E.x,this.disabledUp=!1,this.disabledDown=!1,this.dir="ltr",this.prefixCls="ant-input-number",this.status="",this.statusCls={},this.hasFeedback=!1,this.onChange=()=>{},this.onTouched=()=>{},this.nzBlur=new e.vpe,this.nzFocus=new e.vpe,this.nzSize="default",this.nzMin=-1/0,this.nzMax=1/0,this.nzParser=Ii=>Ii.trim().replace(/\u3002/g,".").replace(/[^\w\.-]+/g,""),this.nzPrecisionMode="toFixed",this.nzPlaceHolder="",this.nzStatus="",this.nzStep=1,this.nzInputMode="decimal",this.nzId=null,this.nzDisabled=!1,this.nzReadOnly=!1,this.nzAutoFocus=!1,this.nzBorderless=!1,this.nzFormatter=Ii=>Ii}ngOnInit(){this.nzFormStatusService?.formStatusChanges.pipe((0,Te.x)((s,p)=>s.status===p.status&&s.hasFeedback===p.hasFeedback),(0,me.R)(this.destroy$)).subscribe(({status:s,hasFeedback:p})=>{this.setStatusStyles(s,p)}),this.focusMonitor.monitor(this.elementRef,!0).pipe((0,me.R)(this.destroy$)).subscribe(s=>{s?(this.isFocused=!0,this.nzFocus.emit()):(this.isFocused=!1,this.updateDisplayValue(this.value),this.nzBlur.emit(),Promise.resolve().then(()=>this.onTouched()))}),this.dir=this.directionality.value,this.directionality.change.pipe((0,me.R)(this.destroy$)).subscribe(s=>{this.dir=s}),this.setupHandlersListeners(),this.ngZone.runOutsideAngular(()=>{(0,H.R)(this.inputElement.nativeElement,"keyup").pipe((0,me.R)(this.destroy$)).subscribe(()=>this.stop()),(0,H.R)(this.inputElement.nativeElement,"keydown").pipe((0,me.R)(this.destroy$)).subscribe(s=>{const{keyCode:p}=s;p!==O.LH&&p!==O.JH&&p!==O.K5||this.ngZone.run(()=>{if(p===O.LH){const w=this.getRatio(s);this.up(s,w),this.stop()}else if(p===O.JH){const w=this.getRatio(s);this.down(s,w),this.stop()}else this.updateDisplayValue(this.value);this.cdr.markForCheck()})})})}ngOnChanges(s){const{nzStatus:p,nzDisabled:w}=s;if(s.nzFormatter&&!s.nzFormatter.isFirstChange()){const ze=this.getCurrentValidValue(this.parsedValue);this.setValue(ze),this.updateDisplayValue(ze)}w&&this.disabled$.next(this.nzDisabled),p&&this.setStatusStyles(this.nzStatus,this.hasFeedback)}ngAfterViewInit(){this.nzAutoFocus&&this.focus()}ngOnDestroy(){this.focusMonitor.stopMonitoring(this.elementRef)}setupHandlersListeners(){this.ngZone.runOutsideAngular(()=>{(0,G.T)((0,H.R)(this.upHandler.nativeElement,"mouseup"),(0,H.R)(this.upHandler.nativeElement,"mouseleave"),(0,H.R)(this.downHandler.nativeElement,"mouseup"),(0,H.R)(this.downHandler.nativeElement,"mouseleave")).pipe((0,me.R)(this.destroy$)).subscribe(()=>this.stop())})}setStatusStyles(s,p){this.status=s,this.hasFeedback=p,this.cdr.markForCheck(),this.statusCls=(0,b.Zu)(this.prefixCls,s,p),Object.keys(this.statusCls).forEach(w=>{this.statusCls[w]?this.renderer.addClass(this.elementRef.nativeElement,w):this.renderer.removeClass(this.elementRef.nativeElement,w)})}}return l.\u0275fac=function(s){return new(s||l)(e.Y36(e.R0b),e.Y36(e.SBq),e.Y36(e.sBO),e.Y36(re.tE),e.Y36(e.Qsj),e.Y36(le.Is,8),e.Y36(I.kn),e.Y36(Q.kH,8),e.Y36(Q.yW,8))},l.\u0275cmp=e.Xpm({type:l,selectors:[["nz-input-number"]],viewQuery:function(s,p){if(1&s&&(e.Gf(he,7),e.Gf(Se,7),e.Gf(ke,7)),2&s){let w;e.iGM(w=e.CRH())&&(p.upHandler=w.first),e.iGM(w=e.CRH())&&(p.downHandler=w.first),e.iGM(w=e.CRH())&&(p.inputElement=w.first)}},hostAttrs:[1,"ant-input-number"],hostVars:16,hostBindings:function(s,p){2&s&&e.ekj("ant-input-number-in-form-item",!!p.nzFormStatusService)("ant-input-number-focused",p.isFocused)("ant-input-number-lg","large"===p.nzSize)("ant-input-number-sm","small"===p.nzSize)("ant-input-number-disabled",p.nzDisabled)("ant-input-number-readonly",p.nzReadOnly)("ant-input-number-rtl","rtl"===p.dir)("ant-input-number-borderless",p.nzBorderless)},inputs:{nzSize:"nzSize",nzMin:"nzMin",nzMax:"nzMax",nzParser:"nzParser",nzPrecision:"nzPrecision",nzPrecisionMode:"nzPrecisionMode",nzPlaceHolder:"nzPlaceHolder",nzStatus:"nzStatus",nzStep:"nzStep",nzInputMode:"nzInputMode",nzId:"nzId",nzDisabled:"nzDisabled",nzReadOnly:"nzReadOnly",nzAutoFocus:"nzAutoFocus",nzBorderless:"nzBorderless",nzFormatter:"nzFormatter"},outputs:{nzBlur:"nzBlur",nzFocus:"nzFocus"},exportAs:["nzInputNumber"],features:[e._Bn([{provide:t.JU,useExisting:(0,e.Gpc)(()=>l),multi:!0},I.kn]),e.TTD],decls:11,vars:15,consts:[[1,"ant-input-number-handler-wrap"],["unselectable","unselectable",1,"ant-input-number-handler","ant-input-number-handler-up",3,"mousedown"],["upHandler",""],["nz-icon","","nzType","up",1,"ant-input-number-handler-up-inner"],["unselectable","unselectable",1,"ant-input-number-handler","ant-input-number-handler-down",3,"mousedown"],["downHandler",""],["nz-icon","","nzType","down",1,"ant-input-number-handler-down-inner"],[1,"ant-input-number-input-wrap"],["autocomplete","off",1,"ant-input-number-input",3,"disabled","placeholder","readOnly","ngModel","ngModelChange"],["inputElement",""],["class","ant-input-number-suffix",3,"status",4,"ngIf"],[1,"ant-input-number-suffix",3,"status"]],template:function(s,p){1&s&&(e.TgZ(0,"div",0)(1,"span",1,2),e.NdJ("mousedown",function(ze){return p.up(ze)}),e._UZ(3,"span",3),e.qZA(),e.TgZ(4,"span",4,5),e.NdJ("mousedown",function(ze){return p.down(ze)}),e._UZ(6,"span",6),e.qZA()(),e.TgZ(7,"div",7)(8,"input",8,9),e.NdJ("ngModelChange",function(ze){return p.onModelChange(ze)}),e.qZA()(),e.YNc(10,Ft,1,1,"nz-form-item-feedback-icon",10)),2&s&&(e.xp6(1),e.ekj("ant-input-number-handler-up-disabled",p.disabledUp),e.xp6(3),e.ekj("ant-input-number-handler-down-disabled",p.disabledDown),e.xp6(4),e.Q6J("disabled",p.nzDisabled)("placeholder",p.nzPlaceHolder)("readOnly",p.nzReadOnly)("ngModel",p.displayValue),e.uIk("id",p.nzId)("autofocus",p.nzAutoFocus?"autofocus":null)("min",p.nzMin)("max",p.nzMax)("step",p.nzStep)("inputmode",p.nzInputMode),e.xp6(2),e.Q6J("ngIf",p.hasFeedback&&!!p.status&&!p.nzFormNoStatusService))},dependencies:[a.O5,t.Fj,t.JJ,t.On,de.Ls,Q.w_],encapsulation:2,changeDetection:0}),(0,U.gn)([(0,b.yF)()],l.prototype,"nzDisabled",void 0),(0,U.gn)([(0,b.yF)()],l.prototype,"nzReadOnly",void 0),(0,U.gn)([(0,b.yF)()],l.prototype,"nzAutoFocus",void 0),(0,U.gn)([(0,b.yF)()],l.prototype,"nzBorderless",void 0),l})(),He=(()=>{class l{constructor(){this.icon=null,this.type=null,this.template=null}}return l.\u0275fac=function(s){return new(s||l)},l.\u0275cmp=e.Xpm({type:l,selectors:[["","nz-input-number-group-slot",""]],hostVars:6,hostBindings:function(s,p){2&s&&e.ekj("ant-input-number-group-addon","addon"===p.type)("ant-input-number-prefix","prefix"===p.type)("ant-input-number-suffix","suffix"===p.type)},inputs:{icon:"icon",type:"type",template:"template"},attrs:wt,ngContentSelectors:$t,decls:3,vars:2,consts:[["nz-icon","",3,"nzType",4,"ngIf"],[4,"nzStringTemplateOutlet"],["nz-icon","",3,"nzType"]],template:function(s,p){1&s&&(e.F$t(),e.YNc(0,tn,1,1,"span",0),e.YNc(1,xt,2,1,"ng-container",1),e.Hsn(2)),2&s&&(e.Q6J("ngIf",p.icon),e.xp6(1),e.Q6J("nzStringTemplateOutlet",p.template))},dependencies:[a.O5,pe.f,de.Ls],encapsulation:2,changeDetection:0}),l})(),ie=(()=>{class l{constructor(s,p,w,ze,ft,vn,Sn){this.focusMonitor=s,this.elementRef=p,this.renderer=w,this.cdr=ze,this.directionality=ft,this.nzFormStatusService=vn,this.nzFormNoStatusService=Sn,this.nzAddOnBeforeIcon=null,this.nzAddOnAfterIcon=null,this.nzPrefixIcon=null,this.nzSuffixIcon=null,this.nzStatus="",this.nzSize="default",this.nzCompact=!1,this.isLarge=!1,this.isSmall=!1,this.isAffix=!1,this.isAddOn=!1,this.isFeedback=!1,this.focused=!1,this.disabled=!1,this.dir="ltr",this.prefixCls="ant-input-number",this.affixStatusCls={},this.groupStatusCls={},this.affixInGroupStatusCls={},this.status="",this.hasFeedback=!1,this.destroy$=new E.x}updateChildrenInputSize(){this.listOfNzInputNumberComponent&&this.listOfNzInputNumberComponent.forEach(s=>s.nzSize=this.nzSize)}ngOnInit(){this.nzFormStatusService?.formStatusChanges.pipe((0,Te.x)((s,p)=>s.status===p.status&&s.hasFeedback===p.hasFeedback),(0,me.R)(this.destroy$)).subscribe(({status:s,hasFeedback:p})=>{this.setStatusStyles(s,p)}),this.focusMonitor.monitor(this.elementRef,!0).pipe((0,me.R)(this.destroy$)).subscribe(s=>{this.focused=!!s,this.cdr.markForCheck()}),this.dir=this.directionality.value,this.directionality.change?.pipe((0,me.R)(this.destroy$)).subscribe(s=>{this.dir=s})}ngAfterContentInit(){this.updateChildrenInputSize();const s=this.listOfNzInputNumberComponent.changes.pipe((0,K.O)(this.listOfNzInputNumberComponent));s.pipe((0,N.w)(p=>(0,G.T)(s,...p.map(w=>w.disabled$))),(0,V.z)(()=>s),(0,S.U)(p=>p.some(w=>w.nzDisabled)),(0,me.R)(this.destroy$)).subscribe(p=>{this.disabled=p,this.cdr.markForCheck()})}ngOnChanges(s){const{nzSize:p,nzSuffix:w,nzPrefix:ze,nzPrefixIcon:ft,nzSuffixIcon:vn,nzAddOnAfter:Sn,nzAddOnBefore:Co,nzAddOnAfterIcon:mi,nzAddOnBeforeIcon:Ii,nzStatus:ba}=s;p&&(this.updateChildrenInputSize(),this.isLarge="large"===this.nzSize,this.isSmall="small"===this.nzSize),(w||ze||ft||vn)&&(this.isAffix=!!(this.nzSuffix||this.nzPrefix||this.nzPrefixIcon||this.nzSuffixIcon)),(Sn||Co||mi||Ii)&&(this.isAddOn=!!(this.nzAddOnAfter||this.nzAddOnBefore||this.nzAddOnAfterIcon||this.nzAddOnBeforeIcon),this.nzFormNoStatusService?.noFormStatus?.next(this.isAddOn)),ba&&this.setStatusStyles(this.nzStatus,this.hasFeedback)}ngOnDestroy(){this.focusMonitor.stopMonitoring(this.elementRef),this.destroy$.next(),this.destroy$.complete()}setStatusStyles(s,p){this.status=s,this.hasFeedback=p,this.isFeedback=!!s&&p,this.isAffix=!!(this.nzSuffix||this.nzPrefix||this.nzPrefixIcon||this.nzSuffixIcon)||!this.isAddOn&&p,this.affixInGroupStatusCls=this.isAffix||this.isFeedback?this.affixStatusCls=(0,b.Zu)(`${this.prefixCls}-affix-wrapper`,s,p):{},this.cdr.markForCheck(),this.affixStatusCls=(0,b.Zu)(`${this.prefixCls}-affix-wrapper`,this.isAddOn?"":s,!this.isAddOn&&p),this.groupStatusCls=(0,b.Zu)(`${this.prefixCls}-group-wrapper`,this.isAddOn?s:"",!!this.isAddOn&&p);const ze={...this.affixStatusCls,...this.groupStatusCls};Object.keys(ze).forEach(ft=>{ze[ft]?this.renderer.addClass(this.elementRef.nativeElement,ft):this.renderer.removeClass(this.elementRef.nativeElement,ft)})}}return l.\u0275fac=function(s){return new(s||l)(e.Y36(re.tE),e.Y36(e.SBq),e.Y36(e.Qsj),e.Y36(e.sBO),e.Y36(le.Is,8),e.Y36(Q.kH,8),e.Y36(Q.yW,8))},l.\u0275cmp=e.Xpm({type:l,selectors:[["nz-input-number-group"]],contentQueries:function(s,p,w){if(1&s&&e.Suo(w,lt,5),2&s){let ze;e.iGM(ze=e.CRH())&&(p.listOfNzInputNumberComponent=ze)}},hostVars:24,hostBindings:function(s,p){2&s&&e.ekj("ant-input-number-group",p.nzCompact)("ant-input-number-group-compact",p.nzCompact)("ant-input-number-group-wrapper",p.isAddOn)("ant-input-number-group-wrapper-rtl",p.isAddOn&&"rtl"===p.dir)("ant-input-number-group-wrapper-lg",p.isAddOn&&p.isLarge)("ant-input-number-group-wrapper-sm",p.isAddOn&&p.isSmall)("ant-input-number-affix-wrapper",!p.isAddOn&&p.isAffix)("ant-input-number-affix-wrapper-rtl",!p.isAddOn&&"rtl"===p.dir)("ant-input-number-affix-wrapper-focused",!p.isAddOn&&p.isAffix&&p.focused)("ant-input-number-affix-wrapper-disabled",!p.isAddOn&&p.isAffix&&p.disabled)("ant-input-number-affix-wrapper-lg",!p.isAddOn&&p.isAffix&&p.isLarge)("ant-input-number-affix-wrapper-sm",!p.isAddOn&&p.isAffix&&p.isSmall)},inputs:{nzAddOnBeforeIcon:"nzAddOnBeforeIcon",nzAddOnAfterIcon:"nzAddOnAfterIcon",nzPrefixIcon:"nzPrefixIcon",nzSuffixIcon:"nzSuffixIcon",nzAddOnBefore:"nzAddOnBefore",nzAddOnAfter:"nzAddOnAfter",nzPrefix:"nzPrefix",nzStatus:"nzStatus",nzSuffix:"nzSuffix",nzSize:"nzSize",nzCompact:"nzCompact"},exportAs:["nzInputNumberGroup"],features:[e._Bn([Q.yW]),e.TTD],ngContentSelectors:$t,decls:7,vars:2,consts:[["class","ant-input-number-wrapper ant-input-number-group",4,"ngIf","ngIfElse"],["noAddOnTemplate",""],["affixTemplate",""],["contentTemplate",""],[1,"ant-input-number-wrapper","ant-input-number-group"],["nz-input-number-group-slot","","type","addon",3,"icon","template",4,"ngIf"],["class","ant-input-number-affix-wrapper",3,"ant-input-number-affix-wrapper-disabled","ant-input-number-affix-wrapper-sm","ant-input-number-affix-wrapper-lg","ant-input-number-affix-wrapper-focused","ngClass",4,"ngIf","ngIfElse"],["nz-input-number-group-slot","","type","addon",3,"icon","template"],[1,"ant-input-number-affix-wrapper",3,"ngClass"],[3,"ngTemplateOutlet"],[3,"ngIf","ngIfElse"],["nz-input-number-group-slot","","type","prefix",3,"icon","template",4,"ngIf"],["nz-input-number-group-slot","","type","suffix",3,"icon","template",4,"ngIf"],["nz-input-number-group-slot","","type","prefix",3,"icon","template"],["nz-input-number-group-slot","","type","suffix",3,"icon","template"],[3,"status",4,"ngIf"],[3,"status"],["nz-input-number-group-slot","","type","suffix",4,"ngIf"],["nz-input-number-group-slot","","type","suffix"]],template:function(s,p){if(1&s&&(e.F$t(),e.YNc(0,$e,4,4,"span",0),e.YNc(1,jt,1,2,"ng-template",null,1,e.W1O),e.YNc(3,mn,3,3,"ng-template",null,2,e.W1O),e.YNc(5,zt,2,1,"ng-template",null,3,e.W1O)),2&s){const w=e.MAs(2);e.Q6J("ngIf",p.isAddOn)("ngIfElse",w)}},dependencies:[a.mk,a.O5,a.tP,Q.w_,He],encapsulation:2,changeDetection:0}),(0,U.gn)([(0,b.yF)()],l.prototype,"nzCompact",void 0),l})(),Me=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[le.vT,a.ez,t.u5,pe.T,de.PV,Q.mJ]}),l})();function Fe(l,g){if(1&l&&e._UZ(0,"input",2),2&l){const s=e.oxw();e.Q6J("formControl",s.formControl)("type",s.props.type||"text")("formlyAttributes",s.field)}}function it(l,g){if(1&l&&e._UZ(0,"nz-input-number",3),2&l){const s=e.oxw();e.Q6J("formControl",s.formControl)("formlyAttributes",s.field)}}let Dt=(()=>{class l extends _.fS{}return l.\u0275fac=function(){let g;return function(p){return(g||(g=e.n5z(l)))(p||l)}}(),l.\u0275cmp=e.Xpm({type:l,selectors:[["formly-field-nz-input"]],features:[e.qOj],decls:3,vars:2,consts:[["nz-input","",3,"formControl","type","formlyAttributes",4,"ngIf","ngIfElse"],["numberTmp",""],["nz-input","",3,"formControl","type","formlyAttributes"],[3,"formControl","formlyAttributes"]],template:function(s,p){if(1&s&&(e.YNc(0,Fe,1,3,"input",0),e.YNc(1,it,1,2,"ng-template",null,1,e.W1O)),2&s){const w=e.MAs(2);e.Q6J("ngIf","number"!==p.props.type)("ngIfElse",w)}},dependencies:[lt,a.O5,A.Zp,t.Fj,t.JJ,t.oH,_.JD],encapsulation:2,changeDetection:0}),l})(),ln=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[[a.ez,t.UX,A.o7,Me,F,_.X0.forChild({types:[{name:"input",component:Dt,wrappers:["form-field"]},{name:"string",extends:"input"},{name:"number",extends:"input",defaultOptions:{props:{type:"number"}}},{name:"integer",extends:"input",defaultOptions:{props:{type:"number"}}}]})]]}),l})(),En=(()=>{class l extends _.fS{}return l.\u0275fac=function(){let g;return function(p){return(g||(g=e.n5z(l)))(p||l)}}(),l.\u0275cmp=e.Xpm({type:l,selectors:[["formly-field-nz-textarea"]],features:[e.qOj],decls:1,vars:2,consts:[["nz-input","",3,"formControl","formlyAttributes"]],template:function(s,p){1&s&&e._UZ(0,"textarea",0),2&s&&e.Q6J("formControl",p.formControl)("formlyAttributes",p.field)},dependencies:[A.Zp,t.Fj,t.JJ,t.oH,_.JD],encapsulation:2,changeDetection:0}),l})(),ht=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[[a.ez,t.UX,A.o7,F,_.X0.forChild({types:[{name:"textarea",component:En,wrappers:["form-field"]}]})]]}),l})();var ot=c(5592),Be=c(5619),yt=c(2181),St=c(9397);let Ut=(()=>{class l{transform(s,p){return s instanceof ot.y?this.dispose():s=this.observableOf(s,p),s.pipe((0,S.U)(w=>this.transformOptions(w,p)))}ngOnDestroy(){this.dispose()}transformOptions(s,p){const w=this.transformSelectProps(p),ze=[],ft={};return s?.forEach(vn=>{const Sn=this.transformOption(vn,w);if(Sn.group){const Co=ft[Sn.label];void 0===Co?ft[Sn.label]=ze.push(Sn)-1:Sn.group.forEach(mi=>ze[Co].group.push(mi))}else ze.push(Sn)}),ze}transformOption(s,p){const w=p.groupProp(s);return Array.isArray(w)?{label:p.labelProp(s),group:w.map(ze=>this.transformOption(ze,p))}:(s={label:p.labelProp(s),value:p.valueProp(s),disabled:!!p.disabledProp(s)},w?{label:w,group:[s]}:s)}transformSelectProps(s){const p=s?.props||s?.templateOptions||{},w=ze=>"function"==typeof ze?ze:ft=>ft[ze];return{groupProp:w(p.groupProp||"group"),labelProp:w(p.labelProp||"label"),valueProp:w(p.valueProp||"value"),disabledProp:w(p.disabledProp||"disabled")}}dispose(){this._options&&(this._options.complete(),this._options=null),this._subscription&&(this._subscription.unsubscribe(),this._subscription=null)}observableOf(s,p){return this.dispose(),p&&p.options&&p.options.fieldChanges&&(this._subscription=p.options.fieldChanges.pipe((0,yt.h)(({property:w,type:ze,field:ft})=>"expressionChanges"===ze&&(0===w.indexOf("templateOptions.options")||0===w.indexOf("props.options"))&&ft===p&&Array.isArray(ft.props.options)&&!!this._options),(0,St.b)(()=>this._options.next(p.props.options))).subscribe()),this._options=new Be.X(s),this._options.asObservable()}}return l.\u0275fac=function(s){return new(s||l)},l.\u0275pipe=e.Yjl({name:"formlySelectOptions",type:l,pure:!0}),l})(),Bt=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({}),l})();var Qe=c(7907);function J(l,g){if(1&l&&(e.TgZ(0,"label",2),e._uU(1),e.qZA()),2&l){const s=g.$implicit;e.Q6J("nzValue",s.value)("nzDisabled",s.disabled),e.xp6(1),e.hij(" ",s.label," ")}}let k=(()=>{class l extends _.fS{}return l.\u0275fac=function(){let g;return function(p){return(g||(g=e.n5z(l)))(p||l)}}(),l.\u0275cmp=e.Xpm({type:l,selectors:[["formly-field-nz-radio"]],features:[e.qOj],decls:4,vars:7,consts:[[3,"formControl","ngModelChange"],["nz-radio","",3,"nzValue","nzDisabled",4,"ngFor","ngForOf"],["nz-radio","",3,"nzValue","nzDisabled"]],template:function(s,p){1&s&&(e.TgZ(0,"nz-radio-group",0),e.NdJ("ngModelChange",function(ze){return p.props.change&&p.props.change(p.field,ze)}),e.YNc(1,J,2,3,"label",1),e.ALo(2,"async"),e.ALo(3,"formlySelectOptions"),e.qZA()),2&s&&(e.Q6J("formControl",p.formControl),e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,2,e.xi3(3,4,p.props.options,p.field))))},dependencies:[Qe.Dg,Qe.Of,t.JJ,t.oH,a.sg,a.Ov,Ut],encapsulation:2,changeDetection:0}),l})(),Z=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[[a.ez,t.UX,Qe.aF,F,Bt,_.X0.forChild({types:[{name:"radio",component:k,wrappers:["form-field"]}]})]]}),l})();var ye=c(2612);let vt=(()=>{class l extends _.fS{constructor(){super(...arguments),this.defaultOptions={props:{indeterminate:!0,hideLabel:!0}}}}return l.\u0275fac=function(){let g;return function(p){return(g||(g=e.n5z(l)))(p||l)}}(),l.\u0275cmp=e.Xpm({type:l,selectors:[["formly-field-nz-checkbox"]],features:[e.qOj],decls:2,vars:4,consts:[["nz-checkbox","",3,"nzIndeterminate","formControl","formlyAttributes","ngModelChange"]],template:function(s,p){1&s&&(e.TgZ(0,"label",0),e.NdJ("ngModelChange",function(ze){return p.props.change&&p.props.change(p.field,ze)}),e._uU(1),e.qZA()),2&s&&(e.Q6J("nzIndeterminate",p.props.indeterminate&&null==p.formControl.value)("formControl",p.formControl)("formlyAttributes",p.field),e.xp6(1),e.hij(" ",p.props.label," "))},dependencies:[ye.Ie,t.JJ,t.oH,_.JD],encapsulation:2,changeDetection:0}),l})(),qe=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[[a.ez,t.UX,ye.Wr,F,_.X0.forChild({types:[{name:"checkbox",component:vt,wrappers:["form-field"]},{name:"boolean",extends:"checkbox"}]})]]}),l})();var Ye=c(9691);function Xe(l,g){if(1&l&&e._UZ(0,"nz-option",6),2&l){const s=g.$implicit;e.Q6J("nzValue",s.value)("nzDisabled",s.disabled)("nzLabel",s.label)}}function At(l,g){if(1&l&&(e.TgZ(0,"nz-option-group",4),e.YNc(1,Xe,1,3,"nz-option",5),e.qZA()),2&l){const s=e.oxw().$implicit;e.Q6J("nzLabel",s.label),e.xp6(1),e.Q6J("ngForOf",s.group)}}function Tt(l,g){if(1&l&&e._UZ(0,"nz-option",6),2&l){const s=e.oxw().$implicit;e.Q6J("nzValue",s.value)("nzDisabled",s.disabled)("nzLabel",s.label)}}function fn(l,g){if(1&l&&(e.ynx(0),e.YNc(1,At,2,2,"nz-option-group",2),e.YNc(2,Tt,1,3,"nz-option",3),e.BQk()),2&l){const s=g.$implicit;e.xp6(1),e.Q6J("ngIf",s.group),e.xp6(1),e.Q6J("ngIf",!s.group)}}let Ge=(()=>{class l extends _.fS{}return l.\u0275fac=function(){let g;return function(p){return(g||(g=e.n5z(l)))(p||l)}}(),l.\u0275cmp=e.Xpm({type:l,selectors:[["formly-field-nz-select"]],features:[e.qOj],decls:4,vars:12,consts:[[3,"nzPlaceHolder","formControl","formlyAttributes","nzMode","ngModelChange"],[4,"ngFor","ngForOf"],[3,"nzLabel",4,"ngIf"],[3,"nzValue","nzDisabled","nzLabel",4,"ngIf"],[3,"nzLabel"],[3,"nzValue","nzDisabled","nzLabel",4,"ngFor","ngForOf"],[3,"nzValue","nzDisabled","nzLabel"]],template:function(s,p){1&s&&(e.TgZ(0,"nz-select",0),e.NdJ("ngModelChange",function(ze){return p.props.change&&p.props.change(p.field,ze)}),e.YNc(1,fn,3,2,"ng-container",1),e.ALo(2,"async"),e.ALo(3,"formlySelectOptions"),e.qZA()),2&s&&(e.ekj("ng-dirty",p.showError),e.Q6J("nzPlaceHolder",p.props.placeholder)("formControl",p.formControl)("formlyAttributes",p.field)("nzMode",p.props.multiple?"multiple":"default"),e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,7,e.xi3(3,9,p.props.options,p.field))))},dependencies:[Ye.Vq,Ye.Yy,Ye.Ip,t.JJ,t.oH,_.JD,a.sg,a.O5,a.Ov,Ut],encapsulation:2,changeDetection:0}),l})(),st=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[[a.ez,t.UX,Ye.LV,F,Bt,_.X0.forChild({types:[{name:"select",component:Ge,wrappers:["form-field"]},{name:"enum",extends:"select"}]})]]}),l})(),ae=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[[F,ln,ht,Z,qe,st]]}),l})();var _e=c(279);function pt(l,g){return(0,Te.x)((s,p)=>g?g(s[l],p[l]):s[l]===p[l])}const we={paramKey:!0};class nt{constructor(g){this.route=g}postPopulate(g){if(g.fieldGroup||g.fieldArray||!1===(g.props||{...we}).paramKey||(this.paramKey=this.getParamKey(g),!this.paramKey))return;const p=this.getRouteSub(this.route,g),w=g.hooks?.onDestroy;p&&w&&(g.hooks={...g.hooks,onDestroy:ze=>{p.unsubscribe(),w(ze)}})}getParamKey(g){const s=g.props;if("string"==typeof s.paramKey)return s.paramKey;if(g.key){if("string"==typeof g.key)return g.key;console.warn(`observe-query-param cannot use field key ${JSON.stringify(g.key)} of type ${typeof g.key} to observe a query param. Use prop.paramKey to specify a query param string, or define a string field.key.`)}}getRouteSub(g,s){const p=g.queryParams.pipe(pt(this.paramKey)).subscribe(w=>{const ze=s.formControl,ft=w[this.paramKey];if(!ft)return void p.unsubscribe();let vn;try{vn=JSON.parse(ft)}catch(Sn){return console.warn(`observe-query-param failed to parse query param ${this.paramKey} for field ${s.id}: ${Sn}`),console.warn("Note: Query values are parsed as JSON, therefore enum strings must be enclosed in double-quotes, and numeric entity IDs must be bare, unquoted."),void p.unsubscribe()}if(vn){if(Object.keys(vn).length>0&&vn.constructor===Object)return console.warn(`observe-query-param may only set primitive types or arrays of primitive types, param ${this.paramKey} is an object: ${JSON.stringify(vn)}`),void p.unsubscribe();ze.setValue(vn)}});return p}}function kt(l){return{extensions:[{name:"observeQueryParam",extension:new nt(l)}]}}const at={extras:{immutable:!1,lazyRender:!0},validationMessages:[{name:"required",message:"This field is required."},{name:"minLength",message:(l,g)=>`This field has a minimum length of ${g.templateOptions?.minLength}.`},{name:"maxLength",message:(l,g)=>`This field has a maximum length of ${g.templateOptions?.maxLength}.`},{name:"min",message:(l,g)=>`This field has a minimum value of ${g.templateOptions?.min}.`},{name:"max",message:(l,g)=>`This field has a maximum value of ${g.templateOptions?.max}.`},{name:"pattern",message:(l,g)=>`This field's value must fit the pattern ${g.templateOptions?.pattern}.`},{name:"integer",message:(l,g)=>"Value must be an integer."},{name:"nucleotide",message:(l,g)=>"Value must only contain A, C, T, G, and/or /."},{name:"clinvar",message:(l,g)=>"Value must be an integer."}],validators:[{name:"integer",validation:(l,g)=>""===l.value||null==l.value||/^\d+$/.test(l.value)?null:{integer:!0}},{name:"nucleotide",validation:(l,g)=>""===l.value||null==l.value||/^[ACTG\/]+$/.test(l.value)?null:{nucleotide:!0}},{name:"clinvar",validation:(l,g)=>{for(var s of l.value)if(""!==s&&null!=s&&!/^\d+$/.test(s))return{clinvar:!0};return null}}]};var tt=c(2524),X=c(2392),B=c(5717),Ce=c(188),Re=c(2574),_t=c(3903),en=c(6987);let Gt=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[a.ez,t.UX,_.X0.forChild(),_t.L,de.PV,Ye.LV,A.o7,L.U5,X.ZJ,B.ic,Re.zf,en.S,Ce.x,tt.s]}),l})();var An=c(5695);let Tn=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[a.ez,de.PV,An.X,tt.s]}),l})();const so=function(l,g){return{disabled:l,error:g}};function Bo(l,g){if(1&l&&(e.ynx(0),e.TgZ(1,"nz-form-label",6),e._UZ(2,"span",7),e.qZA(),e.BQk()),2&l){const s=e.oxw();e.xp6(1),e.Q6J("ngClass",e.WLB(6,so,s.props.disabled,s.showError))("nzRequired",s.props.required)("nzFor",s.id)("nzTooltipTitle",s.props.tooltip)("nzNoColon",!0),e.xp6(1),e.Q6J("nzContent",s.props.label)}}function xo(l,g){if(1&l&&e._UZ(0,"span",13),2&l){const s=e.oxw(2);e.Q6J("innerHTML",s.props.description,e.oJD)}}function ii(l,g){if(1&l&&e._UZ(0,"span",14),2&l){const s=e.oxw(2);e.Q6J("innerHTML",s.props.description,e.oJD)}}function ri(l,g){if(1&l&&e._UZ(0,"span",15),2&l){const s=e.oxw(2);e.Q6J("innerHTML",s.props.description,e.oJD)}}function _i(l,g){if(1&l&&(e.TgZ(0,"div",8),e.ynx(1,9),e.YNc(2,xo,1,1,"span",10),e.YNc(3,ii,1,1,"span",11),e.YNc(4,ri,1,1,"span",12),e.BQk(),e.qZA()),2&l){const s=e.oxw();e.xp6(1),e.Q6J("ngSwitch",s.props.extraType),e.xp6(1),e.Q6J("ngSwitchCase","prompt"),e.xp6(1),e.Q6J("ngSwitchCase","description")}}function Po(l,g){if(1&l&&e._UZ(0,"formly-validation-message",18),2&l){const s=e.oxw(2);e.Q6J("field",s.field)}}function Xn(l,g){if(1&l&&(e.TgZ(0,"div",16),e.YNc(1,Po,1,1,"formly-validation-message",17),e.qZA()),2&l){const s=e.oxw();e.xp6(1),e.Q6J("ngIf",s.props.showErrorTip)}}const ui=function(l,g,s,p){return{disabled:l,error:g,required:s,valid:p}},si={};let Zo=(()=>{class l extends _.n2{get errorState(){return this.showError?"error":""}constructor(s){super(),this.cdr=s,this.formLayout="vertical",this.wrapperOptions={...si}}ngOnInit(){this.props.showExtra=this.props.showExtra??!0,this.props.extraType=this.props.extraType??"prompt",this.props.showErrorTip=this.props.showErrorTip??!0,this.props.formFieldOptions&&(this.wrapperOptions={...this.wrapperOptions,...this.props.formFieldOptions}),this.options.formState.formLayout&&(this.formLayout=this.options.formState.formLayout)}ngAfterViewInit(){this.cdr.detectChanges()}}return l.\u0275fac=function(s){return new(s||l)(e.Y36(e.sBO))},l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-form-field-wrapper"]],hostVars:6,hostBindings:function(s,p){2&s&&e.ekj("layout-horizontal","horizontal"===p.formLayout)("layout-vertical","vertical"===p.formLayout)("layout-inline","inline"===p.formLayout)},features:[e.qOj],decls:9,vars:10,consts:[[3,"ngClass"],[4,"ngIf"],[3,"nzExtra","nzValidateStatus","nzErrorTip"],["fieldComponent",""],["descriptionTpl",""],["errorTpl",""],[3,"ngClass","nzRequired","nzFor","nzTooltipTitle","nzNoColon"],["nz-typography","","nzEllipsis","",1,"label",3,"nzContent"],[1,"form-field-description"],[3,"ngSwitch"],["class","extra-prompt",3,"innerHTML",4,"ngSwitchCase"],["class","extra-description",3,"innerHTML",4,"ngSwitchCase"],[3,"innerHTML",4,"ngSwitchDefault"],[1,"extra-prompt",3,"innerHTML"],[1,"extra-description",3,"innerHTML"],[3,"innerHTML"],[1,"cvc-form-field-validation"],[3,"field",4,"ngIf"],[3,"field"]],template:function(s,p){if(1&s&&(e.TgZ(0,"nz-form-item",0),e.YNc(1,Bo,3,9,"ng-container",1),e.TgZ(2,"nz-form-control",2),e.GkF(3,null,3),e.qZA()(),e.YNc(5,_i,5,3,"ng-template",null,4,e.W1O),e.YNc(7,Xn,2,1,"ng-template",null,5,e.W1O)),2&s){const w=e.MAs(6),ze=e.MAs(8);e.Q6J("ngClass",e.l5B(5,ui,p.props.disabled,p.showError,p.props.required,"VALID"===p.field.formControl.status&&!0===p.field.formControl.touched)),e.xp6(1),e.Q6J("ngIf",p.props.label&&!0!==p.props.hideLabel),e.xp6(1),e.Q6J("nzExtra",p.props.showExtra&&!p.showError?w:void 0)("nzValidateStatus",p.errorState)("nzErrorTip",ze)}},dependencies:[a.mk,a.O5,a.RF,a.n9,a.ED,R.t3,R.SK,L.Nx,L.iK,L.Fd,X.ZU,_.M2],styles:['.typeahead-match[_ngcontent-%COMP%]{font-weight:700}.hide-dropdown[_ngcontent-%COMP%]{display:none}[_nghost-%COMP%] > nz-form-item[_ngcontent-%COMP%]{border-radius:4px;margin-top:8px;margin-bottom:0}[_nghost-%COMP%] > nz-form-item[_ngcontent-%COMP%] > nz-form-label[_ngcontent-%COMP%]   span.label[_ngcontent-%COMP%]{color:#096dd9}[_nghost-%COMP%] > nz-form-item[_ngcontent-%COMP%] > nz-form-label[_ngcontent-%COMP%]     span.anticon{margin-left:.25em}[_nghost-%COMP%] > nz-form-item[_ngcontent-%COMP%] > nz-form-label[_ngcontent-%COMP%]     span.anticon path{color:#69c0ff}[_nghost-%COMP%] > nz-form-item[_ngcontent-%COMP%]   .form-row-wrapped[_nghost-%COMP%] > nz-form-item[_ngcontent-%COMP%], .form-row-wrapped   [_nghost-%COMP%] > nz-form-item[_ngcontent-%COMP%]{margin-top:0;margin-bottom:0}[_nghost-%COMP%] > nz-form-item.required[_ngcontent-%COMP%] > nz-form-label[_ngcontent-%COMP%]     label:before{border:1px solid #096dd9;height:1em;content:""}[_nghost-%COMP%] > nz-form-item.required[_ngcontent-%COMP%] > nz-form-label[_ngcontent-%COMP%]     label span.label{color:#096dd9;font-weight:600}[_nghost-%COMP%] > nz-form-item.required[_ngcontent-%COMP%] > nz-form-label[_ngcontent-%COMP%]     label   span.anticon path{color:#40a9ff}[_nghost-%COMP%] > nz-form-item.error[_ngcontent-%COMP%] > nz-form-label[_ngcontent-%COMP%]     label:before{border-color:#cf1322}[_nghost-%COMP%] > nz-form-item.error[_ngcontent-%COMP%] > nz-form-label[_ngcontent-%COMP%]     label span.label{color:#cf1322}[_nghost-%COMP%] > nz-form-item.error[_ngcontent-%COMP%] > nz-form-label[_ngcontent-%COMP%]     label   span.anticon path{color:#ff4d4f}[_nghost-%COMP%] > nz-form-item.valid[_ngcontent-%COMP%] > nz-form-label[_ngcontent-%COMP%]     label:before{border-color:#389e0d}[_nghost-%COMP%] > nz-form-item.valid[_ngcontent-%COMP%] > nz-form-label[_ngcontent-%COMP%]     label span.label{color:#389e0d}[_nghost-%COMP%] > nz-form-item.valid[_ngcontent-%COMP%] > nz-form-label[_ngcontent-%COMP%]     label   span.anticon path{color:#73d13d}[_nghost-%COMP%] > nz-form-item.disabled[_ngcontent-%COMP%] > nz-form-label[_ngcontent-%COMP%]     label:before{border-color:#00000073}[_nghost-%COMP%] > nz-form-item.disabled[_ngcontent-%COMP%] > nz-form-label[_ngcontent-%COMP%]     label span.label{color:#00000073}[_nghost-%COMP%] > nz-form-item.disabled[_ngcontent-%COMP%] > nz-form-label[_ngcontent-%COMP%]     label   span.anticon path{color:#d9d9d9}.layout-vertical[_nghost-%COMP%] > nz-form-item[_ngcontent-%COMP%]{background-color:#e6f7ff;border:1px solid #e6f7ff;padding:4px 8px}.layout-vertical[_nghost-%COMP%] > nz-form-item.required[_ngcontent-%COMP%]{background-color:#e6f7ff;border:1px solid #69c0ff}.layout-vertical[_nghost-%COMP%] > nz-form-item.error[_ngcontent-%COMP%]{background-color:#fff1f0;border:1px solid #ff7875}.layout-vertical[_nghost-%COMP%] > nz-form-item.valid[_ngcontent-%COMP%]{background-color:#f6ffed;border:1px solid #95de64}.layout-vertical[_nghost-%COMP%] > nz-form-item.disabled[_ngcontent-%COMP%]{background-color:#f5f5f5;border:1px solid #f5f5f5}.cvc-form-field-validation[_ngcontent-%COMP%], .form-field-description[_ngcontent-%COMP%]{min-height:16px;line-height:1.2;margin-top:4px}.cvc-form-field-validation[_ngcontent-%COMP%]   .extra-prompt[_ngcontent-%COMP%], .form-field-description[_ngcontent-%COMP%]   .extra-prompt[_ngcontent-%COMP%]{font-weight:400}.cvc-form-field-validation[_ngcontent-%COMP%]   .extra-description[_ngcontent-%COMP%], .form-field-description[_ngcontent-%COMP%]   .extra-description[_ngcontent-%COMP%]{font-style:oblique}.cvc-form-field-validation[_ngcontent-%COMP%]{font-weight:600}'],changeDetection:0}),l})();var eo=c(6109);const Si={wrappers:[{name:"form-field",component:Zo}]};let No=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[a.ez,t.UX,L.U5,eo.cg,X.ZJ,_.X0.forChild(Si)]}),l})();var zo=c(2840),yi=c(67),Wo=c(7417),Di=c(2),zn=c(1791),ai=c(4223);function Lo(){var l;let g=((l=class extends _.fS{configureBaseField(){this.field?.options?.fieldChanges?(this.onModelChange$=this.field.options.fieldChanges.pipe((0,yt.h)(p=>p.field.id===this.field.id),(0,ai.j)("value")),this.formControl.value?(this.onValueChange$=new Be.X(this.formControl.value),Array.isArray(this.formControl.value)?this.field.formControl.value.length>0&&this.formControl.markAsTouched():this.formControl.markAsTouched()):this.onValueChange$=new Be.X(void 0),this.onModelChange$.pipe((0,zn.t)(this)).subscribe(p=>{this.onValueChange$.next(p)}),this.field.options?.formState&&this.field.options.formState.fields&&(this.state=this.field.options.formState,this.autoConfigureStateValueChanges())):console.error(`${this.field.id} could not find its fieldChanges Observable, ensure configureBaseField() is called in this field's AfterViewInit hook.`)}autoConfigureStateValueChanges(){!this.field.key&&"string"==typeof this.field.key&&console.warn(`${this.field.id} cannot auto-configure state value changes, as its field key is not a string. field.key: `,this.field.key);const p=`${this.field.key}$`;this.state&&this.state.fields[p]?(this.stateValueChange$=this.state.fields[p],this.onValueChange$.pipe((0,S.U)(w=>null===w?void 0:w),(0,zn.t)(this)).subscribe(w=>{this.stateValueChange$&&this.stateValueChange$.next(w)})):console.warn(`${this.field.id} could not find state field ${p} on form state. State: `,this.state)}}).\u0275fac=function(){let s;return function(w){return(s||(s=e.n5z(l)))(w||l)}}(),l.\u0275prov=e.Yz7({token:l,factory:l.\u0275fac}),l);return g=(0,U.gn)([(0,zn.c)()],g),g}var Qi=c(7328),Oi=c(836),ni=c(2460),Bi=c(2096),dr=c(9666),_r=c(2428),ao=c(4911),ko=c(5676),Io=c(2572);function di(...l){let g=l[0],s=l[1];if(0===g.length)return(0,Bi.of)(s?s([]):[]);const p=g.slice();return s&&p.push((...w)=>s(w)),Io.a.apply(null,p)}function Fo(){return function(g){return(()=>{class p extends g{configureEntitySelectField(ze){if(this.typeaheadQuery=ze.typeaheadQuery,this.tagQuery=ze.tagQuery,this.getTypeaheadVars=ze.getTypeaheadVarsFn,this.getTypeahedResults=ze.getTypeaheadResultsFn,this.getTagQueryVars=ze.getTagQueryVarsFn,this.getTagQueryResults=ze.getTagQueryResultsFn,this.getSelectedItemOption=ze.getSelectedItemOptionFn,this.getSelectOptions=ze.getSelectOptionsFn,this.typeaheadParam$=ze.typeaheadParam$,this.typeaheadParamName$=ze.typeaheadParamName$,this.selectOpen$=ze.selectOpen$||new Qi.t,this.selectComponent=ze.selectComponent,this.minSearchStrLength=ze.minSearchStrLength||0,this.cdr=ze.changeDetectorRef,this.onSearch$=new Be.X(void 0),this.isLoading$=new ot.y,this.result$=new Be.X([]),this.onPopulate$=new E.x,this.onTagClose$=new E.x,this.onOpenChange$=new E.x,this.onCreate$=new E.x,this.selectOption$=new Be.X(void 0),this.response$=this.onSearch$.pipe((0,Oi.T)(1),(0,yt.h)(ko.ep),(0,yt.h)(ft=>0===this.minSearchStrLength||ft.length>=this.minSearchStrLength),(0,ni.M)(void 0!==this.typeaheadParam$?this.typeaheadParam$:(0,Bi.of)(void 0)),(0,N.w)(([ft,vn])=>{const Sn=this.getTypeaheadVars(ft,vn),Co=Ii=>(this.queryRef=this.typeaheadQuery.watch(Ii),this.isLoading$=this.queryRef.valueChanges.pipe((0,ai.j)("loading"),(0,Te.x)()),this.queryRef.valueChanges),mi=Ii=>(0,dr.D)(this.queryRef.refetch(Ii));return(0,_r.s)(()=>void 0===this.queryRef,(0,ao.P)(()=>Co(Sn)),(0,ao.P)(()=>mi(Sn)))})),this.onOpenChange$.subscribe(ft=>{ft&&this.onSearch$.next("")}),this.response$.pipe((0,yt.h)(ft=>void 0!==ft.data),(0,S.U)(ft=>this.getTypeahedResults(ft)),(0,zn.t)(this)).subscribe(ft=>{this.result$.next(ft),0===ft.length&&this.selectOption$.next([]),this.cdr.detectChanges()}),this.optionTemplates?this.optionTemplates.changes.pipe((0,ni.M)(this.result$),(0,zn.t)(this)).subscribe(([ft,vn])=>{const Sn=this.getSelectOptions(vn,ft);this.selectOption$.next(Sn),this.cdr.detectChanges()}):(console.warn(`${this.field.id} could not find reference to optionTemplates ViewChildren, options will only show entity name text.`),this.result$.pipe((0,zn.t)(this)).subscribe(ft=>{this.selectOption$.next(ft.map(vn=>({label:vn.name,value:vn.id})))})),this.onPopulate$.pipe((0,yt.h)(ko.ep),(0,N.w)(ft=>di(this.getTagQueries(ft))),(0,S.U)(ft=>ft.map(vn=>this.getTagQueryResults(vn))),(0,St.b)(ft=>{this.result$.next(ft)}),(0,zn.t)(this)).subscribe(ft=>{let vn;if(this.field.props&&this.field.props.isMultiSelect){const Sn=[];ft.forEach(Co=>Sn.push(Co?.id||void 0)),vn=Sn}else vn=ft[0].id;this.formControl.setValue(vn),this.selectOpen$.next(!1)}),this.formControl.value){const ft=this.formControl.value;if(Object.keys(ft).length>0&&ft.constructor===Object)return void console.error(`${this.field.id} prepopulated value must be a primitive or array of primitives, value is an object:`,ft);this.onPopulate$.next(ft)}this.onTagClose$.pipe((0,zn.t)(this)).subscribe(ft=>{this.resetField()})}getTagQueries(ze){return"number"==typeof ze&&(ze=[ze]),ze.map(vn=>this.tagQuery.fetch(this.getTagQueryVars(vn),{fetchPolicy:"cache-first"}).pipe((0,yt.h)(Sn=>!!Sn.data)))}resetField(){this.formControl.setValue(void 0),this.result$&&this.result$.next([])}}return p.\u0275fac=function(){let w;return function(ft){return(w||(w=e.n5z(p)))(ft||p)}}(),p.\u0275prov=e.Yz7({token:p,factory:p.\u0275fac}),p})()}}const To=function er(l){for(var g=arguments.length,s=new Array(g>1?g-1:0),p=1;p<g;p++)s[p-1]=arguments[p];return s.reduce(function(w,ze){return ze(w)},l)};var no,Nn=c(313),lo=c(8091),Ri=c(8753),Xo=c(6321),jn=c(7081);function Ve(l,g){1&l&&e._UZ(0,"span",5),2&l&&e.Q6J("nzType","loading")}function oe(l,g){if(1&l&&(e.YNc(0,Ve,1,1,"span",4),e.ynx(1),e._uU(2),e.BQk()),2&l){const s=e.oxw().ngrxLet;e.Q6J("ngIf",s.showSpinner),e.xp6(2),e.hij(" ",s.message," ")}}const De=function(l,g,s){return{$implicit:l,createMsg:g,model:s}};function Ue(l,g){if(1&l&&(e._UZ(0,"nz-divider"),e.TgZ(1,"div",6),e.GkF(2,7),e.qZA()),2&l){const s=e.oxw().ngrxLet,p=e.oxw();e.xp6(2),e.Q6J("ngTemplateOutlet",p.cvcAddEntity)("ngTemplateOutletContext",e.kEZ(2,De,s.searchStr,s.message,p.cvcAddEntityModel))}}const Ct=function(){return[]};function Nt(l,g){if(1&l){const s=e.EpF();e.ynx(0),e.TgZ(1,"nz-select",1),e.NdJ("nzOpenChange",function(w){e.CHM(s);const ze=e.oxw();return e.KtG(ze.onOpenChange$.next(w))})("nzOnSearch",function(w){e.CHM(s);const ze=e.oxw();return e.KtG(ze.cvcOnSearch.next(w))})("ngModelChange",function(w){e.CHM(s);const ze=e.oxw();return e.KtG(ze.cvcOnModelChange.next(w))}),e.qZA(),e.YNc(2,oe,3,2,"ng-template",null,2,e.W1O),e.YNc(4,Ue,3,6,"ng-template",null,3,e.W1O),e.BQk()}if(2&l){const s=g.ngrxLet,p=e.MAs(3),w=e.MAs(5),ze=e.oxw();e.xp6(1),e.ekj("ng-dirty",ze.cvcShowError),e.Q6J("nzDropdownMatchSelectWidth",!0)("formControl",ze.cvcFormControl)("formlyAttributes",ze.cvcFormlyAttributes)("nzMode",ze.cvcSelectMode)("nzPlaceHolder",ze.cvcPlaceholder||"Search "+ze.cvcEntityName.plural)("nzCustomTemplate",ze.cvcCustomTemplate||null)("nzOptionHeightPx",30)("nzDisabled",ze.cvcDisabled)("nzLoading",ze.cvcLoading)("nzAllowClear",ze.cvcAllowClear)("nzBorderless",ze.cvcBorderless)("nzSuffixIcon",ze.cvcSuffixIcon)("nzShowArrow",ze.cvcShowArrow)("nzAutoClearSearchValue",ze.cvcAutoClearSearchValue)("nzOptions",ze.cvcOptions||e.DdM(20,Ct))("nzDropdownRender",s.showAddForm?w:null)("nzNotFoundContent",p)("nzOpen",ze.cvcSelectOpen)}}const Jt={search:(l,g,s)=>`Searching ${l} matching "${g}"...`,searchAll:(l,g,s)=>`Listing all ${l}...`,searchParam:(l,g,s)=>`Searching ${s} ${l} matching "${g}"...`,searchParamAll:(l,g,s)=>`Listing all ${s} ${l}...`,searchEnterQuery:(l,g,s,p)=>`Enter at least ${p} characters to search ${s} ${l}`,searchEnterQueryAll:(l,g,s,p)=>`Enter at least least ${p} characters to search ${l}`,empty:(l,g,s)=>`No ${l} found matching "${g}"`,emptyAll:(l,g,s)=>`No ${l} found.`,emptyParam:(l,g,s)=>`No ${s} ${l} found matching "${g}"`,emptyParamAll:(l,g,s)=>`No ${s} ${l} found`};let sn=((no=class{constructor(){this.cvcEntityName={singular:"Entity",plural:"Entities"},this.cvcSelectMode="default",this.cvcLoading=!1,this.cvcOptions=void 0,this.cvcShowError=!1,this.cvcDisabled=!1,this.cvcAllowClear=!0,this.cvcBorderless=!1,this.cvcShowArrow=!1,this.cvcAutoClearSearchValue=!0,this.cvcSuffixIcon="search",this.cvcCustomTemplate=null,this.cvcAddEntity=null,this.cvcMinSearchStrLength=0,this.cvcAddEntityBehavior=(g,s)=>g.length>this.cvcMinSearchStrLength&&0===s.length,this.cvcOnOpenChange=new e.vpe,this.cvcOnSearch=(new e.vpe).pipe((0,Ri.p)(300,Xo.z,{leading:!1,trailing:!0}),(0,jn.d)(1)),this.cvcOnModelChange=new e.vpe,this.cvcSelectComponent=new e.vpe,this.messageOptions=Jt,this.onParamName$=new Be.X(void 0),this.onOption$=new Be.X([]),this.onOpenChange$=new Be.X(!1),this.onLoading$=new Be.X(!1),this.notFoundDisplay$=new Be.X({searchStr:"",showSpinner:!0,showAddForm:!1,message:`Searching ${this.cvcEntityName.plural}...`}),this.previousIsOpen=!1}ngAfterViewInit(){this.cvcSelectMessages&&(this.messageOptions={...this.messageOptions,...this.cvcSelectMessages}),this.nzSelectComponent?(this.cvcSelectComponent.next(this.nzSelectComponent),this.onOpenChange$.pipe((0,zn.t)(this)).subscribe(g=>{this.cvcOnOpenChange.next(g)}),(0,Io.a)([this.onOpenChange$,this.cvcOnSearch,this.onParamName$,this.onOption$,this.onLoading$.pipe((0,Te.x)())]).pipe((0,S.U)(([g,s,p,w,ze])=>{const ft=this.cvcEntityName.plural,vn=this.cvcMinSearchStrLength,Sn=null!==this.cvcAddEntity,Co=!1===this.previousIsOpen&&!0===g;if(this.previousIsOpen=g,Co)return this.getSelectInitDisplay(ft,vn,p);if(ze&&s.length>=vn){const mi=this.cvcAddEntityBehavior(s,this.cvcResults||[]);return this.getSelectSearchingDisplay(s,ft,vn,p,Sn,mi)}return g&&!ze&&s.length>=vn&&0===w.length?this.getSelectEmptyDisplay(s,ft,p,Sn):{searchStr:"",showSpinner:!1,showAddForm:Sn&&this.cvcAddEntityBehavior(s,this.cvcResults||[]),message:""}}),(0,St.b)(g=>{this.notFoundDisplay$.next(g)}),(0,zn.t)(this)).subscribe()):console.error(`${this.cvcEntityName.singular} entity-select could not gain reference to its nzSelectComponent, aborting AfterViewInit()`)}getSelectInitDisplay(g,s,p){let w=this.messageOptions.searchAll,ze=!1;return 0==s?(ze=!0,w=void 0===p?this.messageOptions.searchAll:this.messageOptions.searchParamAll):s>0&&(ze=!1,w=void 0===p?this.messageOptions.searchEnterQueryAll:this.messageOptions.searchEnterQuery),{message:w(g,"",p,s),showSpinner:ze,showAddForm:!1,searchStr:""}}getSelectSearchingDisplay(g,s,p,w,ze,ft=!1){let vn=this.messageOptions.searchAll;return vn=void 0===w?g.length>0?this.messageOptions.search:this.messageOptions.searchAll:g.length>0?this.messageOptions.searchParam:this.messageOptions.searchParamAll,{message:vn(s,g,w),showSpinner:!0,showAddForm:ze&&ft,searchStr:g}}getSelectEmptyDisplay(g,s,p,w){let ze=this.messageOptions.empty;return ze=void 0===p?g.length>0?this.messageOptions.empty:this.messageOptions.emptyAll:g.length>0?this.messageOptions.emptyParam:this.messageOptions.emptyParamAll,{message:ze(s,g,p),showSpinner:!1,showAddForm:w,searchStr:g}}ngOnChanges(g){if(g.cvcParamName&&this.onParamName$.next(g.cvcParamName.currentValue),g.cvcOptions){const s=g.cvcOptions.currentValue;void 0!==s&&this.onOption$.next(s)}if(g.cvcLoading){const s=g.cvcLoading.currentValue;void 0!==s&&this.onLoading$.next(s)}}}).\u0275fac=function(g){return new(g||no)},no.\u0275cmp=e.Xpm({type:no,selectors:[["cvc-entity-select"]],viewQuery:function(g,s){if(1&g&&e.Gf(Ye.Vq,5),2&g){let p;e.iGM(p=e.CRH())&&(s.nzSelectComponent=p.first)}},inputs:{cvcFormControl:"cvcFormControl",cvcFormlyAttributes:"cvcFormlyAttributes",cvcEntityName:"cvcEntityName",cvcSelectMessages:"cvcSelectMessages",cvcSelectMode:"cvcSelectMode",cvcPlaceholder:"cvcPlaceholder",cvcLoading:"cvcLoading",cvcOptions:"cvcOptions",cvcResults:"cvcResults",cvcShowError:"cvcShowError",cvcDisabled:"cvcDisabled",cvcAllowClear:"cvcAllowClear",cvcBorderless:"cvcBorderless",cvcShowArrow:"cvcShowArrow",cvcAutoClearSearchValue:"cvcAutoClearSearchValue",cvcSuffixIcon:"cvcSuffixIcon",cvcCustomTemplate:"cvcCustomTemplate",cvcParamName:"cvcParamName",cvcAddEntity:"cvcAddEntity",cvcAddEntityModel:"cvcAddEntityModel",cvcMinSearchStrLength:"cvcMinSearchStrLength",cvcAddEntityBehavior:"cvcAddEntityBehavior",cvcSelectOpen:"cvcSelectOpen"},outputs:{cvcOnOpenChange:"cvcOnOpenChange",cvcOnSearch:"cvcOnSearch",cvcOnModelChange:"cvcOnModelChange",cvcSelectComponent:"cvcSelectComponent"},features:[e.TTD],decls:1,vars:1,consts:[[4,"ngrxLet"],["nzShowSearch","","nzServerSearch","","nzAllowClear","",3,"nzDropdownMatchSelectWidth","formControl","formlyAttributes","nzMode","nzPlaceHolder","nzCustomTemplate","nzOptionHeightPx","nzDisabled","nzLoading","nzAllowClear","nzBorderless","nzSuffixIcon","nzShowArrow","nzAutoClearSearchValue","nzOptions","nzDropdownRender","nzNotFoundContent","nzOpen","nzOpenChange","nzOnSearch","ngModelChange"],["searchMessages",""],["addForm",""],["nz-icon","",3,"nzType",4,"ngIf"],["nz-icon","",3,"nzType"],[1,"add-form-container"],[3,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(g,s){1&g&&e.YNc(0,Nt,6,21,"ng-container",0),2&g&&e.Q6J("ngrxLet",s.notFoundDisplay$)},dependencies:[a.O5,a.tP,t.JJ,t.oH,lo.eJ,_.JD,de.Ls,Ye.Vq,en.g],styles:["nz-divider[_ngcontent-%COMP%]{margin:4px 0 0}.add-form-container[_ngcontent-%COMP%]{padding:4px 8px 8px}"],changeDetection:0}),no);sn=(0,U.gn)([(0,zn.c)({arrayName:"stateSubscriptions"})],sn);var Qt=c(9835);const _n=["optionTemplates"];function Rn(l,g){if(1&l&&(e.ynx(0),e.TgZ(1,"em")(2,"span",6),e._uU(3),e.qZA()(),e.BQk()),2&l){const s=e.oxw(2).$implicit;e.xp6(3),e.Oqu(s.description)}}function bn(l,g){if(1&l&&(e.TgZ(0,"nz-tag",5),e._uU(1),e.qZA(),e.TgZ(2,"span",6),e.YNc(3,Rn,4,1,"ng-container",7),e.qZA()),2&l){const s=e.oxw().$implicit;e.xp6(1),e.Oqu(s.code),e.xp6(2),e.Q6J("ngIf",s.description)}}function dn(l,g){1&l&&(e.ynx(0),e.YNc(1,bn,4,2,"ng-template",null,4,e.W1O),e.BQk())}function On(l,g){if(1&l&&(e.ynx(0),e.YNc(1,dn,3,0,"ng-container",3),e.ALo(2,"ngrxPush"),e.BQk()),2&l){const s=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,s.result$))}}function Qn(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"div",8)(1,"cvc-entity-tag",9),e.NdJ("cvcOnClose",function(){const ze=e.CHM(s).$implicit,ft=e.oxw();return e.KtG(ft.onTagClose$.next(ze.nzValue))}),e.qZA()()}if(2&l){const s=g.$implicit,p=e.oxw();e.xp6(1),e.Q6J("cvcDisableLink",!0)("cvcHasTooltip",!0)("cvcCacheId","AcmgCode:"+s.nzValue)("cvcContext",p.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",p.props.isMultiSelect?"default":"closeable")}}const Vn=To(Lo(),Fo());let Un=(()=>{class l extends Vn{constructor(s,p,w){super(),this.taq=s,this.tq=p,this.changeDetectorRef=w,this.defaultOptions={props:{entityName:{singular:"ACMG/AMP Code",plural:"ACMG/AMP Codes"},isMultiSelect:!1,requireType:!0,tooltip:"If applicable, please provide evidence criteria from the standards and guidelines for interpretation of sequence variants from ACMG/AMP.",placeholder:"Search ACMG/AMP Codes",requireTypePromptFn:(ze,ft)=>`Select an ${ze} Type to search associated ACMG Code(s)`}},this.placeholder$=new Be.X(void 0)}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEntitySelectField({typeaheadQuery:this.taq,typeaheadParam$:void 0,tagQuery:this.tq,getTypeaheadVarsFn:this.getTypeaheadVarsFn,getTypeaheadResultsFn:this.getTypeaheadResultsFn,getTagQueryVarsFn:this.getTagQueryVarsFn,getTagQueryResultsFn:this.getTagQueryResultsFn,getSelectedItemOptionFn:this.getSelectedItemOptionFn,getSelectOptionsFn:this.getSelectOptionsFn,changeDetectorRef:this.changeDetectorRef,selectComponent:this.selectComponent}),this.configurePlaceholders()}configureStateConnections(){if(this.state&&(this.stateEntityName=this.state.entityName,this.state.requires.requiresAcmgCodes$?this.onRequiresAcmgCode$=this.state.requires.requiresAcmgCodes$:console.warn(`${this.field.id} field's form provides a state, but could not find requiresAcmgCodes$ subject to attach.`),this.props.requireType)){const s=`${this.stateEntityName.toLowerCase()}Type$`;this.state.fields[s]?this.onEntityType$=this.state.fields[s]:console.error(`${this.field.id} requireType is true, however form state does not provide Subject ${s}.`)}}configurePlaceholders(){this.placeholder$.next(this.props.placeholders),this.onRequiresAcmgCode$&&this.onEntityType$&&(0,Io.a)([this.onRequiresAcmgCode$,this.onEntityType$]).pipe((0,Te.x)(),(0,zn.t)(this)).subscribe(([s,p])=>{!s&&p?(this.props.required=!1,this.props.disabled=!0,this.props.description=`${(0,Di.E)(p)} ${this.state.entityName} does not include associated ACMG/AMP Code(s)`,this.props.extraType="prompt",this.resetField(),this.cdr.markForCheck()):this.props.requireType&&!p?(this.props.required=!1,this.props.disabled=!0,this.props.description=this.props.requireTypePromptFn(this.state.entityName,this.props.isMultiSelect),this.props.extraType="prompt"):s?(this.props.required=!0,this.props.disabled=!1,this.props.description='Please provide evidence criteria from the standards and guidelines for interpretation of sequence variants from ACMG/AMP in <a href="https://pubmed.ncbi.nlm.nih.gov/25741868/" target="_blank">Richards et. al. 2015</a>. Review all codes and select each one that applies. If a code is not applied, it is inferred to not be met.',this.props.extraType="description"):(!s&&this.formControl.value||this.props.requireType&&!p&&this.formControl.value)&&this.resetField()})}getTypeaheadVarsFn(s){return{code:s}}getTypeaheadResultsFn(s){return s.data.acmgCodesTypeahead}getTagQueryResultsFn(s){return s.data.acmgCode}getTagQueryVarsFn(s){return{id:s}}getSelectedItemOptionFn(s){return{value:s.id,label:s.code}}getSelectOptionsFn(s,p){return s.map((w,ze)=>(console.log(w),{label:p.get(ze)||w.code,value:w.id}))}}return l.\u0275fac=function(s){return new(s||l)(e.Y36(Nn.O2u),e.Y36(Nn.AIY),e.Y36(e.sBO))},l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-acmg-code-select"]],viewQuery:function(s,p){if(1&s&&e.Gf(_n,5,e.Rgc),2&s){let w;e.iGM(w=e.CRH())&&(p.optionTemplates=w)}},features:[e.qOj],decls:9,vars:22,consts:[[3,"cvcSelectMode","cvcCustomTemplate","cvcFormControl","cvcFormlyAttributes","cvcEntityName","cvcPlaceholder","cvcResults","cvcOptions","cvcShowError","cvcDisabled","cvcLoading","cvcOnSearch","cvcOnOpenChange","cvcOnModelChange"],[4,"ngrxLet"],["selectedTemplate",""],[4,"ngFor","ngForOf"],["optionTemplates",""],["nz-tooltip",""],["nz-typography","","nzType","secondary"],[4,"ngIf"],[1,"ant-select-selection-item-content"],[3,"cvcDisableLink","cvcHasTooltip","cvcCacheId","cvcContext","cvcMode","cvcOnClose"]],template:function(s,p){if(1&s&&(e.TgZ(0,"cvc-entity-select",0),e.NdJ("cvcOnSearch",function(ze){return p.onSearch$.next(ze)})("cvcOnOpenChange",function(ze){return p.onOpenChange$.next(ze)})("cvcOnModelChange",function(ze){return p.props.change&&p.props.change(p.field,ze)}),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.ALo(3,"ngrxPush"),e.ALo(4,"ngrxPush"),e.ALo(5,"ngrxPush"),e.qZA(),e.YNc(6,On,3,3,"ng-container",1),e.YNc(7,Qn,2,5,"ng-template",null,2,e.W1O)),2&s){const w=e.MAs(8);e.Q6J("cvcSelectMode",p.props.isMultiSelect?"multiple":"default")("cvcCustomTemplate",w)("cvcFormControl",p.formControl)("cvcFormlyAttributes",p.field)("cvcEntityName",p.props.entityName)("cvcPlaceholder",e.lcZ(1,12,p.placeholder$))("cvcResults",e.lcZ(2,14,p.result$))("cvcOptions",e.lcZ(3,16,p.selectOption$))("cvcShowError",p.showError)("cvcDisabled",p.onRequiresAcmgCode$&&!e.lcZ(4,18,p.onRequiresAcmgCode$))("cvcLoading",e.lcZ(5,20,p.isLoading$)),e.xp6(6),e.Q6J("ngrxLet",p.onSearch$)}},dependencies:[a.sg,a.O5,lo.eJ,eo.SY,X.ZU,An.j,sn,Qt.J,lo.fM],changeDetection:0}),l})();const Zn={types:[{name:"acmg-code-select",wrappers:["form-field"],component:Un,defaultOptions:{props:{label:"ACMG/AMP Code"}}},{name:"acmg-code-multi-select",wrappers:["form-field"],component:Un,defaultOptions:{props:{isMultiSelect:!0,label:"ACMG/AMP Code(s)"}}}]};let yo=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[a.ez,t.UX,_.X0.forChild(Zn),_t.L,zo.sL,Ye.LV,Wo.$6,yi.Qp,de.PV,A.o7,R.Jb,eo.cg,Re.zf,L.U5,B.ic,X.ZJ,An.X,No,Gt,tt.s,Ce.x,Tn]}),l})(),Kn=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[a.ez,t.UX,_.X0.forChild(),de.PV,L.U5,Ye.LV,A.o7,tt.s]}),l})();function go(){return function(g){return(()=>{class p extends g{configureEnumSelectField(ze){this.selectOption$=new Be.X([]),this.onTagClose$=new E.x,this.optionEnum$=ze.optionEnum$,this.changeDetectorRef=ze.changeDetectorRef,this.optionTemplate$=ze.optionTemplate$?ze.optionTemplate$:new Be.X([]),this.optionTemplate$.pipe((0,ni.M)(this.optionEnum$),(0,zn.t)(this)).subscribe(ft=>{this.emitSelectOptions(ft)}),this.onTagClose$.pipe((0,zn.t)(this)).subscribe(ft=>{this.resetField()})}emitSelectOptions([ze,ft]){this.selectOption$.next(ft.map((vn,Sn)=>({label:ze[Sn]||vn,value:vn}))),this.changeDetectorRef?this.changeDetectorRef.detectChanges():console.error(`${this.field.id}'s configureEnumTagField() requires valid ChangeDetectorRef option, none detected.`)}resetField(){this.formControl.setValue(this.props.isMultiSelect?[]:void 0)}}return p.\u0275fac=function(){let w;return function(ft){return(w||(w=e.n5z(p)))(ft||p)}}(),p.\u0275prov=e.Yz7({token:p,factory:p.\u0275fac}),p})()}}var So=c(3742);const qn=function(){return[]};let Do=(()=>{class l{constructor(){this.cvcSelectMode="default",this.cvcPlaceholder="Select an option",this.cvcOptions=[],this.cvcShowError=!1,this.cvcDisabled=!1,this.cvcAllowClear=!0,this.cvcCustomTemplate=null,this.cvcOnFocus=new e.vpe}}return l.\u0275fac=function(s){return new(s||l)},l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-enum-select"]],inputs:{cvcFormControl:"cvcFormControl",cvcFormlyAttributes:"cvcFormlyAttributes",cvcSelectMode:"cvcSelectMode",cvcPlaceholder:"cvcPlaceholder",cvcOptions:"cvcOptions",cvcShowError:"cvcShowError",cvcDisabled:"cvcDisabled",cvcAllowClear:"cvcAllowClear",cvcModelChange:"cvcModelChange",cvcCustomTemplate:"cvcCustomTemplate"},outputs:{cvcOnFocus:"cvcOnFocus"},decls:1,vars:12,consts:[[3,"formControl","formlyAttributes","nzMode","nzPlaceHolder","nzOptions","nzCustomTemplate","nzOptionHeightPx","nzDisabled","nzAllowClear","nzFocus","ngModelChange"]],template:function(s,p){1&s&&(e.TgZ(0,"nz-select",0),e.NdJ("nzFocus",function(){return p.cvcOnFocus.next()})("ngModelChange",function(ze){return p.cvcModelChange&&p.cvcModelChange(p.cvcFormlyAttributes,ze)}),e.qZA()),2&s&&(e.ekj("ng-dirty",p.cvcShowError),e.Q6J("formControl",p.cvcFormControl)("formlyAttributes",p.cvcFormlyAttributes)("nzMode",p.cvcSelectMode)("nzPlaceHolder",p.cvcPlaceholder?p.cvcPlaceholder:"Select Value")("nzOptions",p.cvcOptions?p.cvcOptions:e.DdM(11,qn))("nzCustomTemplate",p.cvcCustomTemplate?p.cvcCustomTemplate:null)("nzOptionHeightPx",30)("nzDisabled",p.cvcDisabled)("nzAllowClear",p.cvcAllowClear))},dependencies:[t.JJ,t.oH,_.JD,Ye.Vq],changeDetection:0}),l})();var Vo=c(3702);const qo=["optionTemplates"];function Mo(l,g){if(1&l&&(e.TgZ(0,"nz-tag")(1,"strong"),e._uU(2),e.ALo(3,"formatAmp"),e.qZA()(),e.TgZ(4,"span",4),e._uU(5),e.qZA()),2&l){const s=e.oxw().$implicit,p=e.oxw();e.xp6(2),e.Oqu(e.xi3(3,2,s,"verbose")),e.xp6(3),e.Oqu(p.descriptionForCategory(s))}}function Mi(l,g){1&l&&(e.ynx(0),e.YNc(1,Mo,6,5,"ng-template",null,3,e.W1O),e.BQk())}function wi(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"nz-tag",8),e.NdJ("nzOnClose",function(w){e.CHM(s);const ze=e.oxw(2);return e.KtG(ze.onTagClose$.next(w))}),e.TgZ(1,"strong"),e._uU(2),e.ALo(3,"formatAmp"),e.qZA()()}if(2&l){const s=e.oxw().$implicit;e.xp6(2),e.Oqu(e.xi3(3,1,s.nzValue,"verbose"))}}function Ro(l,g){if(1&l&&(e.ynx(0),e._uU(1),e.ALo(2,"formatAmp"),e.BQk()),2&l){const s=e.oxw().$implicit;e.xp6(1),e.hij(" ",e.xi3(2,1,s.nzValue,"verbose")," ")}}function Yo(l,g){if(1&l&&(e.TgZ(0,"div",5),e.YNc(1,wi,4,4,"nz-tag",6),e.YNc(2,Ro,3,4,"ng-container",7),e.qZA()),2&l){const s=e.oxw();e.xp6(1),e.Q6J("ngIf",!s.props.isMultiSelect),e.xp6(1),e.Q6J("ngIf",s.props.isMultiSelect)}}const or=new Map([[Nn.iwm.Na,"Not Applicable"],[Nn.iwm.TierILevelA,"Biomarkers showing therapeutic response to FDA-approved therapy, or therapy included in professional guidelines."],[Nn.iwm.TierILevelB,"Biomarkers showing therapeutic response based on well-powered studies with consensus from experts in the field."],[Nn.iwm.TierIiLevelC,"FDA-approved therapies for different tumor types or investigational therapies, or multiple small published studies with some consensus."],[Nn.iwm.TierIiLevelD,"Biomarkers that show plausible therapeutic significance based on preclinical studies."],[Nn.iwm.TierIii,"Somatic variants in cancer genes reported in the same or different cancer types with unknown clinical significance and variants in cancer genes that have not been reported in any cancers."],[Nn.iwm.TierIv,"Benign or likely benign germline variants observed at significant allele frequencies in the general population or specific subpopulation."]]),Ci=To(Lo(),go());let zi=(()=>{class l extends Ci{constructor(s){super(),this.cdr=s,this.defaultOptions={props:{label:"AMP/ASCO/CAP Category",required:!1,isMultiSelect:!1,placeholder:"Select AMP/ASCO/CAP Category"}},this.ampCategoryEnum$=new Be.X([])}descriptionForCategory(s){return or.get(s)}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEnumSelectField({optionEnum$:this.ampCategoryEnum$,optionTemplate$:this.optionTemplate$,changeDetectorRef:this.cdr}),this.configurePlaceholder()}configureStateConnections(){this.props.tooltip="If applicable, please provide the AMP/ASCO/CAP somatic variant classification.",this.ampCategoryEnum$.next((0,So.o6)(Nn.iwm).map(s=>s)),this.optionTemplates||console.error(`${this.field.id} could not find its optionTemplates QueryList to populate its select options, so simple text labels will be displayed.`),this.optionTemplate$=this.optionTemplates?.changes.pipe((0,S.U)(s=>s.map(p=>p))),this.state&&(this.state.requires.requiresAmpLevel$?this.onRequiresAmpCategory$=this.state.requires.requiresAmpLevel$:console.warn(`${this.field.id} field's form provides a state, but could not find requiresAmpLevel$ subject to attach.`),this.onValueChange$.pipe((0,zn.t)(this)).subscribe(s=>{s?(this.props.extraType=void 0,this.props.description=or.get(s)):this.props.description="Select an Assertion Type to select its AMP Category"}))}configurePlaceholder(){this.placeholder$=new Be.X(this.props.placeholder),this.onRequiresAmpCategory$&&this.onRequiresAmpCategory$.pipe((0,Te.x)(),(0,zn.t)(this)).subscribe(s=>{this.props.extraType=void 0,s?(this.formControl.value||(this.props.extraType="description",this.props.description='Please provide the AMP/ASCO/CAP <a href="https://pubmed.ncbi.nlm.nih.gov/27993330/" target="_blank">somatic variant classification</a>.'),this.props.required=!0,this.props.disabled=!1):(this.props.required=!1,this.props.disabled=!0,this.resetField()),this.cdr.markForCheck()})}}return l.\u0275fac=function(s){return new(s||l)(e.Y36(e.sBO))},l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-amp-category-select"]],viewQuery:function(s,p){if(1&s&&e.Gf(qo,5,e.Rgc),2&s){let w;e.iGM(w=e.CRH())&&(p.optionTemplates=w)}},features:[e.qOj],decls:7,vars:15,consts:[[3,"cvcFormControl","cvcFormlyAttributes","cvcSelectMode","cvcPlaceholder","cvcCustomTemplate","cvcOptions","cvcShowError","cvcDisabled"],[4,"ngFor","ngForOf"],["selectedTemplate",""],["optionTemplates",""],["nz-typography","","nzType","secondary"],[1,"ant-select-selection-item-content"],["nzMode","closeable",3,"nzOnClose",4,"ngIf"],[4,"ngIf"],["nzMode","closeable",3,"nzOnClose"]],template:function(s,p){if(1&s&&(e._UZ(0,"cvc-enum-select",0),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.YNc(3,Mi,3,0,"ng-container",1),e.ALo(4,"ngrxPush"),e.YNc(5,Yo,3,2,"ng-template",null,2,e.W1O)),2&s){const w=e.MAs(6);e.Q6J("cvcFormControl",p.formControl)("cvcFormlyAttributes",p.field)("cvcSelectMode",p.props.isMultiSelect?"multiple":"default")("cvcPlaceholder",e.lcZ(1,9,p.placeholder$))("cvcCustomTemplate",w)("cvcOptions",e.lcZ(2,11,p.selectOption$))("cvcShowError",p.showError)("cvcDisabled",p.props.disabled),e.xp6(3),e.Q6J("ngForOf",e.lcZ(4,13,p.ampCategoryEnum$))}},dependencies:[a.sg,a.O5,An.j,X.ZU,Do,lo.fM,Vo.t]}),l})();const cr={types:[{name:"amp-category-select",wrappers:["form-field"],component:zi},{name:"amp-category-multi-select",wrappers:["form-field"],component:zi,defaultOptions:{props:{label:"AMP/ASCO/CAP Categories",isMultiSelect:!0}}}]};let Hi=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[a.ez,t.UX,_.X0.forChild(cr),An.X,X.ZJ,tt.s,No,Kn]}),l})();const ir=To(Lo()),Ae={types:[{name:"checkbox",wrappers:["form-field"],component:(()=>{class l extends ir{constructor(){super(...arguments),this.defaultOptions={props:{indeterminate:!0,hideLabel:!0}}}ngAfterViewInit(){console.log(this.props)}}return l.\u0275fac=function(){let g;return function(p){return(g||(g=e.n5z(l)))(p||l)}}(),l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-checkbox"]],features:[e.qOj],decls:2,vars:4,consts:[["nz-checkbox","",3,"nzIndeterminate","formControl","formlyAttributes","ngModelChange"]],template:function(s,p){1&s&&(e.TgZ(0,"label",0),e.NdJ("ngModelChange",function(ze){return p.props.change&&p.props.change(p.field,ze)}),e._uU(1),e.qZA()),2&s&&(e.Q6J("nzIndeterminate",p.props.indeterminate&&null==p.formControl.value)("formControl",p.formControl)("formlyAttributes",p.field),e.xp6(1),e.hij(" ",p.props.label,"\n"))},dependencies:[t.JJ,t.oH,ye.Ie,_.JD],changeDetection:0}),l})()}]};let Rt=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[a.ez,t.UX,ye.Wr,_.X0.forChild(Ae),No]}),l})();function W(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"input",2),e.NdJ("ngModelChange",function(w){e.CHM(s);const ze=e.oxw();return e.KtG(ze.onValueChange$.next(w))}),e.qZA()}if(2&l){const s=e.oxw();e.Q6J("formControl",s.formControl)("type",s.props.type||"text")("formlyAttributes",s.field)}}function Le(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"nz-input-number",3),e.NdJ("ngModelChange",function(w){e.CHM(s);const ze=e.oxw();return e.KtG(ze.onValueChange$.next(w))}),e.qZA()}if(2&l){const s=e.oxw();e.Q6J("formControl",s.formControl)("formlyAttributes",s.field)}}const Vt=To(Lo());let on=(()=>{class l extends Vt{constructor(){super()}ngAfterViewInit(){this.configureBaseField()}}return l.\u0275fac=function(s){return new(s||l)},l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-base-input"]],features:[e.qOj],decls:3,vars:2,consts:[["nz-input","",3,"formControl","type","formlyAttributes","ngModelChange",4,"ngIf","ngIfElse"],["numberTmp",""],["nz-input","",3,"formControl","type","formlyAttributes","ngModelChange"],[3,"formControl","formlyAttributes","ngModelChange"]],template:function(s,p){if(1&s&&(e.YNc(0,W,1,3,"input",0),e.YNc(1,Le,1,2,"ng-template",null,1,e.W1O)),2&s){const w=e.MAs(2);e.Q6J("ngIf","number"!==p.props.type)("ngIfElse",w)}},dependencies:[a.O5,t.Fj,t.JJ,t.oH,A.Zp,lt,_.JD],encapsulation:2,changeDetection:0}),l})(),Bn=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[a.ez,t.UX,A.o7,Me,_.X0.forChild({types:[{name:"base-input",component:on,wrappers:["form-field"]},{name:"base-string",extends:"base-input"},{name:"base-number",extends:"base-input",defaultOptions:{props:{type:"number"}}},{name:"base-integer",extends:"base-input",defaultOptions:{props:{type:"number"}}}]})]}),l})();function fo(l,g){if(1&l&&e._UZ(0,"nz-option",6),2&l){const s=g.$implicit;e.Q6J("nzValue",s.value)("nzDisabled",s.disabled)("nzLabel",s.label)}}function mo(l,g){if(1&l&&(e.TgZ(0,"nz-option-group",4),e.YNc(1,fo,1,3,"nz-option",5),e.qZA()),2&l){const s=e.oxw().$implicit;e.Q6J("nzLabel",s.label),e.xp6(1),e.Q6J("ngForOf",s.group)}}function Ko(l,g){if(1&l&&e._UZ(0,"nz-option",6),2&l){const s=e.oxw().$implicit;e.Q6J("nzValue",s.value)("nzDisabled",s.disabled)("nzLabel",s.label)}}function ci(l,g){if(1&l&&(e.ynx(0),e.YNc(1,mo,2,2,"nz-option-group",2),e.YNc(2,Ko,1,3,"nz-option",3),e.BQk()),2&l){const s=g.$implicit;e.xp6(1),e.Q6J("ngIf",s.group),e.xp6(1),e.Q6J("ngIf",!s.group)}}const po=To(Lo());let Wi=(()=>{class l extends po{constructor(){super(),this.defaultOptions={props:{isMultiSelect:!1}}}ngAfterViewInit(){this.configureBaseField()}}return l.\u0275fac=function(s){return new(s||l)},l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-base-select"]],features:[e.qOj],decls:4,vars:12,consts:[[3,"nzPlaceHolder","formControl","formlyAttributes","nzMode","ngModelChange"],[4,"ngFor","ngForOf"],[3,"nzLabel",4,"ngIf"],[3,"nzValue","nzDisabled","nzLabel",4,"ngIf"],[3,"nzLabel"],[3,"nzValue","nzDisabled","nzLabel",4,"ngFor","ngForOf"],[3,"nzValue","nzDisabled","nzLabel"]],template:function(s,p){1&s&&(e.TgZ(0,"nz-select",0),e.NdJ("ngModelChange",function(ze){return p.props.change&&p.props.change(p.field,ze)}),e.YNc(1,ci,3,2,"ng-container",1),e.ALo(2,"async"),e.ALo(3,"formlySelectOptions"),e.qZA()),2&s&&(e.ekj("ng-dirty",p.showError),e.Q6J("nzPlaceHolder",void 0!==p.props.placeholder?p.props.placeholder:null)("formControl",p.formControl)("formlyAttributes",p.field)("nzMode",p.props.isMultiSelect?"multiple":"default"),e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,7,e.xi3(3,9,p.props.options,p.field))))},dependencies:[a.sg,a.O5,t.JJ,t.oH,Ye.Ip,Ye.Vq,Ye.Yy,_.JD,a.Ov,Ut],encapsulation:2,changeDetection:0}),l})(),Yi=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[a.ez,t.UX,Ye.LV,F,Bt,_.X0.forChild({types:[{name:"base-select",component:Wi,wrappers:["form-field"]},{name:"enum",extends:"select"},{name:"base-multi-select",extends:"level-select",defaultOptions:{props:{isMultiSelect:!0}}}]})]}),l})();const Er=To(Lo()),Ee={types:[{name:"base-textarea",component:(()=>{class l extends Er{constructor(){super(),this.defaultOptions={props:{autosize:!1}}}ngAfterViewInit(){this.configureBaseField()}}return l.\u0275fac=function(s){return new(s||l)},l.\u0275cmp=e.Xpm({type:l,selectors:[["formly-field-nz-textarea"]],features:[e.qOj],decls:1,vars:5,consts:[["nz-input","",3,"nzAutosize","rows","formControl","placeholder","formlyAttributes"]],template:function(s,p){1&s&&e._UZ(0,"textarea",0),2&s&&e.Q6J("nzAutosize",p.props.autosize)("rows",p.props.rows?p.props.rows:2)("formControl",p.formControl)("placeholder",p.props.placeholder)("formlyAttributes",p.field)},dependencies:[t.Fj,t.JJ,t.oH,_.JD,A.Zp,A.rh],encapsulation:2,changeDetection:0}),l})(),wrappers:["form-field"]}]};let ve=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[a.ez,t.UX,_.X0.forChild(Ee),A.o7,No]}),l})();var ue=c(855),et=c(1958);const Gn={types:[{name:"cvc-cancel-button",component:(()=>{class l extends _.fS{constructor(s){super(),this.location=s}cancelClicked(){this.location.back()}}return l.\u0275fac=function(s){return new(s||l)(e.Y36(a.Ye))},l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-cancel-button"]],features:[e.qOj],decls:2,vars:0,consts:[["nz-button","","type","button","nzType","default","nzDanger","",1,"cancel-button",3,"click"]],template:function(s,p){1&s&&(e.TgZ(0,"button",0),e.NdJ("click",function(){return p.cancelClicked()}),e._uU(1," Cancel\n"),e.qZA())},dependencies:[zo.ix,ue.w,et.dQ],styles:[".cancel-button[_ngcontent-%COMP%]{margin-right:10px}"],changeDetection:0}),l})()}]};let Ai=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[a.ez,t.UX,_.X0.forChild(Gn),zo.sL]}),l})();const bi=["optionTemplates"];function Yr(l,g){if(1&l&&(e.ynx(0),e.TgZ(1,"em")(2,"span",6),e._uU(3),e.qZA()(),e.BQk()),2&l){const s=e.oxw(2).$implicit;e.xp6(3),e.Oqu(s.description)}}function Ns(l,g){if(1&l&&(e.TgZ(0,"nz-tag",5),e._uU(1),e.qZA(),e.TgZ(2,"span",6),e.YNc(3,Yr,4,1,"ng-container",7),e.qZA()),2&l){const s=e.oxw().$implicit;e.xp6(1),e.Oqu(s.code),e.xp6(2),e.Q6J("ngIf",s.description)}}function Sa(l,g){1&l&&(e.ynx(0),e.YNc(1,Ns,4,2,"ng-template",null,4,e.W1O),e.BQk())}function Ks(l,g){if(1&l&&(e.ynx(0),e.YNc(1,Sa,3,0,"ng-container",3),e.ALo(2,"ngrxPush"),e.BQk()),2&l){const s=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,s.result$))}}function Js(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"div",8)(1,"cvc-entity-tag",9),e.NdJ("cvcOnClose",function(){const ze=e.CHM(s).$implicit,ft=e.oxw();return e.KtG(ft.onTagClose$.next(ze.nzValue))}),e.qZA()()}if(2&l){const s=g.$implicit,p=e.oxw();e.xp6(1),e.Q6J("cvcDisableLink",!0)("cvcHasTooltip",!0)("cvcCacheId","ClingenCode:"+s.nzValue)("cvcContext",p.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",p.props.isMultiSelect?"default":"closeable")}}const fs=To(Lo(),Fo());let Ea=(()=>{class l extends fs{constructor(s,p,w){super(),this.taq=s,this.tq=p,this.changeDetectorRef=w,this.exclusiveCodes=new Set,this.exclusiveSelected=!1,this.defaultOptions={props:{entityName:{singular:"ClinGen/CGC/VICC Code",plural:"ClinGen/CGC/VICC Codes"},isMultiSelect:!1,requireType:!0,tooltip:"If applicable, please provide evidence classifications from the Standards for the classification of pathogenicity of somatic variants in cancer (oncogenicity).",placeholder:"Search ClinGen/CGC/VICC Codes",requireTypePromptFn:(ze,ft)=>`Select an ${ze} Type to search associated ClinGen Code(s)`}},this.placeholder$=new Be.X(void 0)}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEntitySelectField({typeaheadQuery:this.taq,typeaheadParam$:void 0,tagQuery:this.tq,getTypeaheadVarsFn:this.getTypeaheadVarsFn,getTypeaheadResultsFn:this.getTypeaheadResultsFn,getTagQueryVarsFn:this.getTagQueryVarsFn,getTagQueryResultsFn:this.getTagQueryResultsFn,getSelectedItemOptionFn:this.getSelectedItemOptionFn,getSelectOptionsFn:this.getSelectOptionsFn,changeDetectorRef:this.changeDetectorRef,selectComponent:this.selectComponent}),this.configurePlaceholders(),this.onValueChange$.pipe((0,zn.t)(this)).subscribe(s=>{if(s&&Array.isArray(s)&&s.length>1){const p=s.find(w=>this.exclusiveCodes.has(w));p?(this.previousDescription=this.props.description,this.previousDescriptionType=this.props.extraType,this.props.description="You have selected N/A which precludes selecting any other codes. Please remove it if you wish to select additional codes.",this.exclusiveSelected=!0,this.formControl.setValue([p])):this.exclusiveSelected=!1}this.previousDescription&&!this.exclusiveSelected&&(this.props.description=this.previousDescription,this.props.extraType=this.previousDescriptionType),this.cdr.detectChanges()})}configureStateConnections(){if(this.state&&(this.stateEntityName=this.state.entityName,this.state.requires.requiresClingenCodes$?this.onRequiresClingenCode$=this.state.requires.requiresClingenCodes$:console.warn(`${this.field.id} field's form provides a state, but could not find requiresClingenCodes$ subject to attach.`),this.props.requireType)){const s=`${this.stateEntityName.toLowerCase()}Type$`;this.state.fields[s]?this.onEntityType$=this.state.fields[s]:console.error(`${this.field.id} requireType is true, however form state does not provide Subject ${s}.`)}}configurePlaceholders(){this.placeholder$.next(this.props.placeholders),this.onRequiresClingenCode$&&this.onEntityType$&&(0,Io.a)([this.onRequiresClingenCode$,this.onEntityType$]).pipe((0,Te.x)(),(0,zn.t)(this)).subscribe(([s,p])=>{!s&&p?(this.props.required=!1,this.props.disabled=!0,this.props.description=`${(0,Di.E)(p)} ${this.state.entityName} does not include associated ClinGen/CGC/VICC Code(s)`,this.props.extraType="prompt",this.resetField(),this.cdr.markForCheck()):this.props.requireType&&!p?(this.props.required=!1,this.props.disabled=!0,this.props.description=this.props.requireTypePromptFn(this.state.entityName,this.props.isMultiSelect),this.props.extraType="prompt"):s?(this.props.required=!0,this.props.disabled=!1,this.props.description='Please provide the evidence classifications from the Standards for the classification of pathogenicity of somatic variants in cancer (oncogenicity) in <a href="https://pubmed.ncbi.nlm.nih.gov/25741868/" target="_blank">Horak et. al. 2022.</a>. Review all codes and select each one that applies. If a code is not applied, it is inferred to not be met.',this.props.extraType="description"):(!s&&this.formControl.value||this.props.requireType&&!p&&this.formControl.value)&&this.resetField()})}getTypeaheadVarsFn(s){return{code:s}}getTypeaheadResultsFn(s){return s.data.clingenCodesTypeahead.forEach(p=>{p.exclusive&&this.exclusiveCodes.add(p.id)}),s.data.clingenCodesTypeahead}getTagQueryResultsFn(s){return s.data.clingenCode}getTagQueryVarsFn(s){return{id:s}}getSelectedItemOptionFn(s){return{value:s.id,label:s.code}}getSelectOptionsFn(s,p){return s.map((w,ze)=>({label:p.get(ze)||w.code,value:w.id}))}}return l.\u0275fac=function(s){return new(s||l)(e.Y36(Nn.E2B),e.Y36(Nn.R8F),e.Y36(e.sBO))},l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-clingen-code-select"]],viewQuery:function(s,p){if(1&s&&e.Gf(bi,5,e.Rgc),2&s){let w;e.iGM(w=e.CRH())&&(p.optionTemplates=w)}},features:[e.qOj],decls:9,vars:22,consts:[[3,"cvcSelectMode","cvcCustomTemplate","cvcFormControl","cvcFormlyAttributes","cvcEntityName","cvcPlaceholder","cvcResults","cvcOptions","cvcShowError","cvcDisabled","cvcLoading","cvcOnSearch","cvcOnOpenChange","cvcOnModelChange"],[4,"ngrxLet"],["selectedTemplate",""],[4,"ngFor","ngForOf"],["optionTemplates",""],["nz-tooltip",""],["nz-typography","","nzType","secondary"],[4,"ngIf"],[1,"ant-select-selection-item-content"],[3,"cvcDisableLink","cvcHasTooltip","cvcCacheId","cvcContext","cvcMode","cvcOnClose"]],template:function(s,p){if(1&s&&(e.TgZ(0,"cvc-entity-select",0),e.NdJ("cvcOnSearch",function(ze){return p.onSearch$.next(ze)})("cvcOnOpenChange",function(ze){return p.onOpenChange$.next(ze)})("cvcOnModelChange",function(ze){return p.props.change&&p.props.change(p.field,ze)}),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.ALo(3,"ngrxPush"),e.ALo(4,"ngrxPush"),e.ALo(5,"ngrxPush"),e.qZA(),e.YNc(6,Ks,3,3,"ng-container",1),e.YNc(7,Js,2,5,"ng-template",null,2,e.W1O)),2&s){const w=e.MAs(8);e.Q6J("cvcSelectMode",p.props.isMultiSelect?"multiple":"default")("cvcCustomTemplate",w)("cvcFormControl",p.formControl)("cvcFormlyAttributes",p.field)("cvcEntityName",p.props.entityName)("cvcPlaceholder",e.lcZ(1,12,p.placeholder$))("cvcResults",e.lcZ(2,14,p.result$))("cvcOptions",e.lcZ(3,16,p.selectOption$))("cvcShowError",p.showError)("cvcDisabled",p.onRequiresClingenCode$&&!e.lcZ(4,18,p.onRequiresClingenCode$))("cvcLoading",e.lcZ(5,20,p.isLoading$)),e.xp6(6),e.Q6J("ngrxLet",p.onSearch$)}},dependencies:[a.sg,a.O5,lo.eJ,eo.SY,X.ZU,An.j,sn,Qt.J,lo.fM],changeDetection:0}),l})();const Jr={types:[{name:"clingen-code-select",wrappers:["form-field"],component:Ea,defaultOptions:{props:{label:"ClinGen/CGC/VICC Code"}}},{name:"clingen-code-multi-select",wrappers:["form-field"],component:Ea,defaultOptions:{props:{isMultiSelect:!0,label:"ClinGen/CGC/VICC Code(s)"}}}]};let qr=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[a.ez,t.UX,_.X0.forChild(Jr),_t.L,zo.sL,Ye.LV,Wo.$6,yi.Qp,de.PV,A.o7,R.Jb,eo.cg,Re.zf,L.U5,B.ic,X.ZJ,An.X,No,Gt,tt.s,Ce.x,Tn]}),l})();function pr(l){return(()=>{class s extends l{configureStringTagField(){this.tagLabel$=new E.x,this.onTagClose$=new E.x,this.onTagClose$.pipe((0,zn.t)(this)).subscribe(w=>{this.formControl.setValue(void 0),this.tagLabel$.next(void 0)})}}return s.\u0275fac=function(){let p;return function(ze){return(p||(p=e.n5z(s)))(ze||s)}}(),s.\u0275prov=e.Yz7({token:s,factory:s.\u0275fac}),s})()}var pi,rr=c(1022);function yr(l,g){if(1&l&&(e.TgZ(0,"label",5),e._uU(1),e.qZA()),2&l){const s=g.$implicit;e.Q6J("nzValue",s.value)("nzTooltipTitle",s.tooltip),e.xp6(1),e.hij(" ",s.label," ")}}function Ls(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"nz-col",2)(1,"nz-radio-group",3),e.NdJ("ngModelChange",function(w){e.CHM(s);const ze=e.oxw();return e.KtG(ze.existenceChange$.next(w))}),e.ALo(2,"ngrxPush"),e.YNc(3,yr,2,3,"label",4),e.qZA()()}if(2&l){const s=e.oxw();e.xp6(1),e.Q6J("ngModel",e.lcZ(2,2,s.existenceModel$)),e.xp6(2),e.Q6J("ngForOf",s.selectOptions)}}function $r(l,g){if(1&l&&e._UZ(0,"nz-option",8),2&l){const s=g.$implicit;e.Q6J("nzLabel",s)("nzValue",s)("nzHide",!0)}}function Lr(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"nz-col",2)(1,"nz-select",6),e.NdJ("ngModelChange",function(w){e.CHM(s);const ze=e.oxw();return e.KtG(ze.onValueChange$.next(w))}),e.YNc(2,$r,1,3,"nz-option",7),e.qZA()()}if(2&l){const s=e.oxw();e.xp6(1),e.Q6J("formControl",s.formControl)("formlyAttributes",s.field),e.xp6(1),e.Q6J("ngForOf",s.formControl.value)}}const Xr=function(){return[8,8]},qs=To(Lo(),pr);let Cr=((pi=class extends qs{constructor(g){super(),this.cdr=g,this.defaultOptions={modelOptions:{updateOn:"blur"},props:{label:"Enter value",placeholder:"Enter value and hit Return",description:"Specify if Clinvar IDs exist, or if they are not applicable for this variant."}},this.clinvarIds$=new Be.X([]),this.values=new Set,this.showClinvarIdEntry$=new Be.X(!1),this.selectModel=void 0,this.selectOptions=[{value:void 0,label:"Unspecified",tooltip:"Existence of ClinVar IDs for this variant is unspecified."},{value:rr.li.NotApplicable,label:"Not Applicable",tooltip:"ClinVar IDs are not applicable to this variant."},{value:rr.li.NoneFound,label:"Were Not Found",tooltip:"A search was performed, and no ClinVar IDs were found."},{value:rr.li.Found,label:"Were Found",tooltip:"A search was performed, and ClinVar IDs were found (enter IDs below)."}],this.existenceChange$=new E.x,this.existenceModel$=new Be.X(void 0),this.showTagSelect$=new Be.X(!1)}ngAfterViewInit(){this.configureBaseField(),this.configureStringTagField(),this.onValueChange$.pipe((0,zn.t)(this)).subscribe(g=>{void 0===g?(this.existenceModel$.next(void 0),this.showTagSelect$.next(!1)):g.includes("NONE FOUND")||g.includes("NA")?(g.includes("NONE FOUND")?this.existenceModel$.next(rr.li.NoneFound):g.includes("NA")&&this.existenceModel$.next(rr.li.NotApplicable),this.showTagSelect$.next(!1)):(this.existenceModel$.next(rr.li.Found),this.showTagSelect$.next(!0))}),this.existenceChange$.pipe((0,S.U)(g=>{const s=this.formControl.value;void 0===g&&void 0!==this.formControl.value?this.formControl.setValue(void 0):g!==rr.li.NoneFound||s.includes("NONE FOUND")?g!==rr.li.NotApplicable||s.includes("NA")?g===rr.li.Found&&(void 0===s||s.includes("NONE FOUND")||s.includes("NA"))&&this.formControl.setValue([]):this.formControl.setValue(["NA"]):this.formControl.setValue(["NONE FOUND"])}),(0,zn.t)(this)).subscribe()}}).\u0275fac=function(g){return new(g||pi)(e.Y36(e.sBO))},pi.\u0275cmp=e.Xpm({type:pi,selectors:[["cvc-clinvar-input"]],features:[e.qOj],decls:4,vars:6,consts:[[3,"nzGutter"],["nzSpan","24",4,"ngIf"],["nzSpan","24"],["nzName","existence",3,"ngModel","ngModelChange"],["nz-radio-button","","nz-tooltip","",3,"nzValue","nzTooltipTitle",4,"ngFor","ngForOf"],["nz-radio-button","","nz-tooltip","",3,"nzValue","nzTooltipTitle"],["nzMode","tags","nzPlaceHolder","Enter ClinVar IDs","nzAllowClear","","nzDropdownClassName","hide-dropdown",3,"formControl","formlyAttributes","ngModelChange"],[3,"nzLabel","nzValue","nzHide",4,"ngFor","ngForOf"],[3,"nzLabel","nzValue","nzHide"]],template:function(g,s){1&g&&(e.TgZ(0,"nz-row",0),e.YNc(1,Ls,4,4,"nz-col",1),e.YNc(2,Lr,3,3,"nz-col",1),e.ALo(3,"ngrxPush"),e.qZA()),2&g&&(e.Q6J("nzGutter",e.DdM(5,Xr)),e.xp6(1),e.Q6J("ngIf",s.props.showExistenceOptions),e.xp6(1),e.Q6J("ngIf",e.lcZ(3,3,s.showTagSelect$)))},dependencies:[a.sg,a.O5,t.JJ,t.On,t.oH,_.JD,R.t3,R.SK,Qe.Of,Qe.Bq,Qe.Dg,Ye.Ip,Ye.Vq,eo.SY,lo.fM],changeDetection:0}),pi);Cr=(0,U.gn)([(0,zn.c)()],Cr);const ms={types:[{name:"clinvar-input",wrappers:["form-field"],component:Cr,defaultOptions:{props:{isRepeatItem:!1,showExistenceOptions:!1}}},{name:"clinvar-multi-input",wrappers:["form-field"],component:Cr,defaultOptions:{props:{isRepeatItem:!0,showExistenceOptions:!0}}}]};let zr=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[a.ez,t.u5,t.UX,_.X0.forChild(ms),L.U5,R.Jb,A.o7,Qe.aF,Ye.LV,eo.cg,tt.s]}),l})();var es=c(8180);const kr=To(Lo()),Zc={types:[{name:"fda-companion-test-checkbox",wrappers:["form-field"],component:(()=>{class l extends kr{constructor(){super(...arguments),this.defaultDescription='Select Yes if an FDA approved companion test exists for the variant and therapy associated with the Assertion (such as tests listed <a href="https://www.fda.gov/medical-devices/in-vitro-diagnostics/list-cleared-or-approved-companion-diagnostic-devices-in-vitro-and-imaging-tools" target="_blank">here</a>).',this.defaultOptions={props:{hideLabel:!1,label:"FDA Companion Test",description:this.defaultDescription}}}ngAfterViewInit(){this.configureBaseField(),this.state&&(this.state.formReady$?this.state.formReady$.pipe((0,yt.h)(s=>s),(0,es.q)(1),(0,zn.t)(this)).subscribe(s=>{this.configureField()}):this.configureField())}configureField(){this.state?.fields.fdaRegulatoryApproval$.pipe((0,zn.t)(this)).subscribe(s=>{s?(this.props.disabled=!1,this.props.extraType="description",this.props.description=this.defaultDescription,void 0===this.formControl.value&&this.formControl.setValue(!1)):(this.props.disabled=!0,this.props.description="FDA Companion Test only applies when Regulatory Approval is selected",this.formControl.setValue(void 0))})}}return l.\u0275fac=function(){let g;return function(p){return(g||(g=e.n5z(l)))(p||l)}}(),l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-fda-companion-test-checkbox"]],features:[e.qOj],decls:2,vars:4,consts:[["nz-checkbox","",3,"nzIndeterminate","formControl","formlyAttributes","ngModelChange"]],template:function(s,p){1&s&&(e.TgZ(0,"label",0),e.NdJ("ngModelChange",function(ze){return p.props.change&&p.props.change(p.field,ze)}),e._uU(1),e.qZA()),2&s&&(e.Q6J("nzIndeterminate",p.props.indeterminate&&null==p.formControl.value)("formControl",p.formControl)("formlyAttributes",p.field),e.xp6(1),e.hij(" ",p.props.label,"\n"))},dependencies:[t.JJ,t.oH,ye.Ie,_.JD],changeDetection:0}),l})()}]};let nc=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[a.ez,t.UX,ye.Wr,_.X0.forChild(Zc),No]}),l})();const Rr=To(Lo()),as={types:[{name:"fda-regulatory-approval-checkbox",wrappers:["form-field"],component:(()=>{class l extends Rr{constructor(){super(...arguments),this.defaultDescription="Check this if the referenced therapy is approved for use by the FDA in the specific disease associated with the Assertion (as in a listing <a href='https://www.cancer.gov/about-cancer/treatment/drugs/cancer-type' target='_blank'>here</a>.)",this.defaultOptions={props:{hideLabel:!1,label:"FDA Regulatory Approval",description:this.defaultDescription}}}ngAfterViewInit(){this.configureBaseField(),this.state&&(this.state.formReady$?this.state.formReady$.pipe((0,yt.h)(s=>s),(0,es.q)(1),(0,zn.t)(this)).subscribe(s=>{this.configureField()}):this.configureField())}configureField(){this.state?.requires.allowsFdaApproval$.pipe((0,zn.t)(this)).subscribe(s=>{s?(this.props.disabled=!1,this.props.extraType="description",this.props.description=this.defaultDescription,void 0===this.formControl.value&&this.formControl.setValue(!1)):(this.props.disabled=!0,this.props.description="FDA Regulatory Approval does not apply to this Assertion Type",this.formControl.setValue(void 0))})}}return l.\u0275fac=function(){let g;return function(p){return(g||(g=e.n5z(l)))(p||l)}}(),l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-fda-regulatory-approval-checkbox"]],features:[e.qOj],decls:2,vars:4,consts:[["nz-checkbox","",3,"nzIndeterminate","formControl","formlyAttributes","ngModelChange"]],template:function(s,p){1&s&&(e.TgZ(0,"label",0),e.NdJ("ngModelChange",function(ze){return p.props.change&&p.props.change(p.field,ze)}),e._uU(1),e.qZA()),2&s&&(e.Q6J("nzIndeterminate",p.props.indeterminate&&null==p.formControl.value)("formControl",p.formControl)("formlyAttributes",p.field),e.xp6(1),e.hij(" ",p.props.label,"\n"))},dependencies:[t.JJ,t.oH,ye.Ie,_.JD],changeDetection:0}),l})()}]};let Ur=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[a.ez,t.UX,ye.Wr,_.X0.forChild(as),No]}),l})(),xr=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[a.ez,An.X,de.PV,eo.cg,tt.s]}),l})();var ts=c(6967),hr=c(7334);function gs(l,g){}function vs(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"span",5)(1,"nz-tag",6),e.NdJ("nzOnClose",function(w){e.CHM(s);const ze=e.oxw();return e.KtG(ze.cvcOnClose.next(w))}),e.YNc(2,gs,0,0,"ng-template",7),e.qZA()()}if(2&l){const s=e.oxw(),p=e.MAs(5);e.xp6(1),e.Q6J("nzMode",s.cvcMode)("nzTooltipTitle",s.cvcTooltip)("nzChecked",s.cvcChecked),e.xp6(1),e.Q6J("ngTemplateOutlet",p)}}function xa(l,g){}function Xs(l,g){if(1&l&&(e.TgZ(0,"span",8)(1,"nz-tag",9),e.YNc(2,xa,0,0,"ng-template",7),e.qZA()()),2&l){const s=e.oxw(),p=e.MAs(5);e.xp6(1),e.Q6J("nzMode","checkable")("nzChecked",s.cvcChecked),e.xp6(1),e.Q6J("ngTemplateOutlet",p)}}function ea(l,g){}function ta(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"span",10)(1,"nz-tag",11),e.NdJ("nzOnClose",function(w){e.CHM(s);const ze=e.oxw();return e.KtG(ze.cvcOnClose.next(w))}),e.YNc(2,ea,0,0,"ng-template",7),e.qZA()()}if(2&l){e.oxw();const s=e.MAs(5);e.xp6(1),e.Q6J("nzMode","closeable"),e.xp6(1),e.Q6J("ngTemplateOutlet",s)}}function tr(l,g){}function $i(l,g){if(1&l&&(e.TgZ(0,"span",12)(1,"nz-tag",13),e.YNc(2,tr,0,0,"ng-template",7),e.qZA()()),2&l){const s=e.oxw(),p=e.MAs(5);e.xp6(1),e.Q6J("nzMode","default")("nzTooltipTitle",s.cvcTooltip),e.xp6(1),e.Q6J("ngTemplateOutlet",p)}}const na=function(l){return{"tag-icon-large":l}};function gi(l,g){if(1&l&&(e._UZ(0,"i",16),e.ALo(1,"evidenceEnumDisplay")),2&l){const s=e.oxw(2);e.Q6J("nzType",!0===s.cvcShowIcon?e.xi3(1,5,s.cvcAttrValue,"icon-name"):s.cvcShowIcon)("nzTwotoneColor",s.cvcIconColor)("nzTheme",s.cvcIconTheme)("ngClass",e.VKq(8,na,!0===s.cvcZoomIcon)),e.uIk("style","color: "+s.cvcIconColor,e.Ckj)}}function jr(l,g){if(1&l&&(e._UZ(0,"span",17),e.ALo(1,"highlightTypeahead"),e.ALo(2,"evidenceEnumDisplay")),2&l){const s=e.oxw(2);e.Q6J("innerHtml",e.xi3(1,1,e.xi3(2,4,s.cvcAttrValue,"display-string"===s.cvcShowLabel?s.cvcShowLabel:"short-string"),s.cvcEmphasize),e.oJD)}}function ne(l,g){if(1&l&&(e.YNc(0,gi,2,10,"i",14),e.YNc(1,jr,3,7,"span",15)),2&l){const s=e.oxw();e.Q6J("ngIf",s.cvcAttrValue&&s.cvcShowIcon),e.xp6(1),e.Q6J("ngIf",s.cvcShowLabel)}}let Ie=(()=>{class l{constructor(){this.cvcShowLabel="display-string",this.cvcShowIcon=!0,this.cvcZoomIcon=!1,this.cvcContext="default",this.cvcMode="default",this.cvcChecked=!1,this.cvcIconColor="#797979",this.cvcLabelColor="#434343",this.cvcIconTheme="outline",this.cvcFullWidth=!1,this.cvcOnClose=new e.vpe}ngOnChanges(s){s.cvcContext&&"compact"===s.cvcContext.currentValue&&(this.cvcShowIcon=!0,this.cvcShowLabel=!1,this.cvcZoomIcon=!0)}}return l.\u0275fac=function(s){return new(s||l)},l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-attribute-tag"]],hostVars:2,hostBindings:function(s,p){2&s&&e.ekj("full-width",!0===p.cvcFullWidth)},inputs:{cvcAttrValue:"cvcAttrValue",cvcShowLabel:"cvcShowLabel",cvcShowIcon:"cvcShowIcon",cvcZoomIcon:"cvcZoomIcon",cvcTooltip:"cvcTooltip",cvcContext:"cvcContext",cvcMode:"cvcMode",cvcChecked:"cvcChecked",cvcEmphasize:"cvcEmphasize",cvcIconColor:"cvcIconColor",cvcLabelColor:"cvcLabelColor",cvcIconTheme:"cvcIconTheme",cvcFullWidth:"cvcFullWidth"},outputs:{cvcOnClose:"cvcOnClose"},features:[e.TTD],decls:6,vars:4,consts:[["class","default",4,"ngIf"],["class","menu-item",4,"ngIf"],["class","select-item",4,"ngIf"],["class","compact",4,"ngIf"],["tagContent",""],[1,"default"],["nz-tooltip","",3,"nzMode","nzTooltipTitle","nzChecked","nzOnClose"],[3,"ngTemplateOutlet"],[1,"menu-item"],[3,"nzMode","nzChecked"],[1,"select-item"],[3,"nzMode","nzOnClose"],[1,"compact"],["nz-tooltip","",3,"nzMode","nzTooltipTitle"],["nz-icon","","class","tag-icon",3,"nzType","nzTwotoneColor","nzTheme","ngClass",4,"ngIf"],["class","tag-label",3,"innerHtml",4,"ngIf"],["nz-icon","",1,"tag-icon",3,"nzType","nzTwotoneColor","nzTheme","ngClass"],[1,"tag-label",3,"innerHtml"]],template:function(s,p){1&s&&(e.YNc(0,vs,3,4,"span",0),e.YNc(1,Xs,3,3,"span",1),e.YNc(2,ta,3,2,"span",2),e.YNc(3,$i,3,3,"span",3),e.YNc(4,ne,2,2,"ng-template",null,4,e.W1O)),2&s&&(e.Q6J("ngIf","default"===p.cvcContext),e.xp6(1),e.Q6J("ngIf","menu-item"===p.cvcContext),e.xp6(1),e.Q6J("ngIf","select-item"===p.cvcContext),e.xp6(1),e.Q6J("ngIf","compact"===p.cvcContext))},dependencies:[a.mk,a.O5,a.tP,An.j,de.Ls,eo.SY,ts.Do,hr.A],styles:['.hide-dropdown[_ngcontent-%COMP%]{display:none}.full-width[_nghost-%COMP%]{width:100%}.full-width[_nghost-%COMP%]   nz-tag[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]   nz-tag[_ngcontent-%COMP%]{margin-right:0;margin-inline-end:4px}.default[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]{margin:0;padding:0 2px 0 0;margin-inline-end:4px;max-width:100%}.default[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon[_ngcontent-%COMP%], .default[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon-large[_ngcontent-%COMP%]{display:inline-block}.default[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon[_ngcontent-%COMP%]{padding:3px 2px 3px 4px;margin:-3px 0}.default[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon-large[_ngcontent-%COMP%]{padding:3px 2px 3px 4px;margin:-3px 0}.default[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon-large[_ngcontent-%COMP%]     svg{transform:scale(1.25)}.default[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-label[_ngcontent-%COMP%]{display:inline-block;margin:-3px 0 -4px;padding:3px 3px 3px 2px;line-height:1}.default[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]     i.ant-tag-close-icon.anticon-close{transition:none;margin-left:3px}.compact[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]{margin:0;padding:0 2px 0 0;margin-inline-end:4px;max-width:100%}.compact[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon[_ngcontent-%COMP%], .compact[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon-large[_ngcontent-%COMP%]{display:inline-block}.compact[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon[_ngcontent-%COMP%]{padding:3px 2px 3px 4px;margin:-3px 0}.compact[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon-large[_ngcontent-%COMP%]{padding:3px 2px 3px 4px;margin:-3px 0}.compact[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon-large[_ngcontent-%COMP%]     svg{transform:scale(1.25)}.compact[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-label[_ngcontent-%COMP%]{display:inline-block;margin:-3px 0 -4px;padding:3px 3px 3px 2px;line-height:1}.compact[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]     i.ant-tag-close-icon.anticon-close{transition:none;margin-left:3px}.menu-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]{background-color:#fff}.menu-item[_ngcontent-%COMP%]   nz-tag.ant-tag-checkable[_ngcontent-%COMP%]{border:1px solid #d9d9d9}.menu-item[_ngcontent-%COMP%]   nz-tag.ant-tag-checkable[_ngcontent-%COMP%]:active{background-color:#e6f7ff}.menu-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]:not(.menu-item   nz-tag.ant-tag-checkable-checked)[_ngcontent-%COMP%]:hover{color:#000000d9;border-color:#1890ff}.menu-item[_ngcontent-%COMP%]   nz-tag.ant-tag-checkable-checked[_ngcontent-%COMP%]{border:transparent;background-color:#fff;color:#000000d9}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]{margin:0;padding:0 2px 0 0;margin-inline-end:4px;max-width:100%}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon[_ngcontent-%COMP%], .select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon-large[_ngcontent-%COMP%]{display:inline-block}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon[_ngcontent-%COMP%]{padding:3px 2px 3px 4px;margin:-3px 0}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon-large[_ngcontent-%COMP%]{padding:3px 2px 3px 4px;margin:-3px 0}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon-large[_ngcontent-%COMP%]     svg{transform:scale(1.25)}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-label[_ngcontent-%COMP%]{display:inline-block;margin:-3px 0 -4px;padding:3px 3px 3px 2px;line-height:1}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]     i.ant-tag-close-icon.anticon-close{transition:none;margin-left:3px}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]{background:#f5f5f5;border:1px solid #f0f0f0}.multi-select-item[_ngcontent-%COMP%]{display:inline-block;margin-top:-3px;margin-bottom:-3px;margin-left:-4px;padding-left:4px}.multi-select-item[_ngcontent-%COMP%]   .tag-icon[_ngcontent-%COMP%]:after{content:" "}.typeahead-match[_ngcontent-%COMP%]{font-weight:700}'],changeDetection:0}),l})();const fe=["optionTemplates"];function Ke(l,g){if(1&l&&e._UZ(0,"cvc-attribute-tag",4),2&l){const s=e.oxw().$implicit;e.Q6J("cvcAttrValue",s)}}function Ot(l,g){1&l&&(e.ynx(0),e.YNc(1,Ke,1,1,"ng-template",null,3,e.W1O),e.BQk())}function pn(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"div",5)(1,"cvc-attribute-tag",6),e.NdJ("cvcOnClose",function(w){e.CHM(s);const ze=e.oxw();return e.KtG(ze.onTagClose$.next(w))}),e.qZA()()}if(2&l){const s=g.$implicit,p=e.oxw();e.xp6(1),e.Q6J("cvcAttrValue",s.nzValue)("cvcContext",p.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",p.props.isMultiSelect?"default":"closeable")}}const Mn={Evidence:{PREDICTIVE:{SUPPORTS:"Experiment or study supports the variant's response to a drug",DOES_NOT_SUPPORT:"Experiment or study does not support, or was inconclusive of an interaction between the variant and a drug"},DIAGNOSTIC:{SUPPORTS:"Experiment or study supports the variant's impact on the diagnosis of disease or subtype",DOES_NOT_SUPPORT:"Experiment or study does not support the variant's impact on diagnosis of disease or subtype"},PROGNOSTIC:{SUPPORTS:"Experiment or study supports the variant's impact on prognostic outcome",DOES_NOT_SUPPORT:"Experiment or study does not support a prognostic association between variant and outcome"},PREDISPOSING:{SUPPORTS:"Suggests a pathogenic or a protective role for a germline variant in cancer",DOES_NOT_SUPPORT:"Supports a benign (for Predisposition) or lack of protective (for Protectiveness) role for a germline variant in cancer."},FUNCTIONAL:{SUPPORTS:"Experiment or study supports the variant causing alteration or non-alteration of the gene product function",DOES_NOT_SUPPORT:"Experiment or study does not support the variant causing alteration or non-alteration of the gene product function"},ONCOGENIC:{NA:"Not Applicable for Oncogenic Evidence Type.",SUPPORTS:"Supports an oncogenic or protective role for a somatic variant.",DOES_NOT_SUPPORT:"Supports a benign (for Oncogenicity) or lack of protective (for Protectiveness) role for a somatic variant in cancer."}},Assertion:{PREDICTIVE:{SUPPORTS:"Supports the variant's response to a drug",DOES_NOT_SUPPORT:"Does not support, or was inconclusive of an interaction between the variant and a drug"},DIAGNOSTIC:{SUPPORTS:"Supports the variant's impact on the diagnosis of disease or subtype",DOES_NOT_SUPPORT:"Does not support the variant's impact on diagnosis of disease or subtype"},PROGNOSTIC:{SUPPORTS:"Supports the variant's impact on prognostic outcome",DOES_NOT_SUPPORT:"Does not support a prognostic association between variant and outcome"},PREDISPOSING:{SUPPORTS:"Suggests a pathogenic or a protective role for a germline variant in cancer",DOES_NOT_SUPPORT:"Does not support an association between the variant and disease causation"},FUNCTIONAL:{SUPPORTS:"Supports the variant causing alteration or non-alteration of the gene product function",DOES_NOT_SUPPORT:"Does not support the variant causing alteration or non-alteration of the gene product function"},ONCOGENIC:{SUPPORTS:"Supports an oncogenic or protective role for a somatic variant",DOES_NOT_SUPPORT:"Does not support an association between the variant and disease causation"}}},to=To(Lo(),go()),vo={types:[{name:"direction-select",wrappers:["form-field"],component:(()=>{class l extends to{constructor(s){super(),this.cdr=s,this.defaultOptions={props:{label:"Direction",labelFn:p=>`${p} Direction`,required:!0,isMultiSelect:!1,placeholder:"Select Entity Direction",placeholderFn:(p,w)=>`Select ${w?w+" ":""}${p} Direction`,requireTypePromptFn:p=>`Select ${p} Type to select its Direction`,formMode:"add"}},this.directionEnum$=new Be.X([])}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEnumSelectField({optionEnum$:this.directionEnum$,optionTemplate$:this.optionTemplate$,changeDetectorRef:this.cdr})}configureStateConnections(){if(!this.state)return console.error(`${this.field.id} requires a form state to populate its options, none was found.`),void(this.placeholder$=new Be.X("ERROR: Form state not found"));if(this.props.label=this.props.labelFn(this.state.entityName),this.props.tooltip=`An indicator of whether the ${this.state.entityName} statement supports or refutes the clinical significance of an event.`,this.placeholder$=new Be.X(this.props.placeholderFn(this.state.entityName)),!this.state.enums.direction$)return void console.error(`${this.field.id} could not find form state's direction$ to populate select.`);this.state.enums.direction$.pipe((0,zn.t)(this)).subscribe(p=>{this.directionEnum$.next(p)}),this.optionTemplates||console.info(`${this.field.id} could not find its optionTemplates QueryList to populate its select options, so simple text labels will be displayed.`),this.optionTemplate$=this.optionTemplates?.changes.pipe((0,S.U)(p=>p.map(w=>w)));const s=`${this.state.entityName.toLowerCase()}Type$`;this.state.fields[s]?(this.onEntityType$=this.state.fields[s],this.onEntityType$.pipe((0,Oi.T)("add"===this.props.formMode?0:1),(0,zn.t)(this)).subscribe(p=>{p?(this.props.disabled=!1,this.props.description=void 0,this.props.extraType=void 0,this.placeholder$.next(this.props.placeholderFn(this.state.entityName,(0,Di.E)(p)))):(this.props.disabled=!0,this.props.description=this.props.requireTypePromptFn(this.state.entityName),this.props.extraType="prompt"),this.formControl.value&&this.formControl.setValue(void 0)}),this.onValueChange$.pipe((0,ni.M)(this.onEntityType$),(0,zn.t)(this)).subscribe(([p,w])=>{!w||!p||!this.state||(this.props.extraType="description",this.props.description=Mn[this.state.entityName][w][p],this.field.formControl.markAsTouched())})):console.error(`${this.field.id} could not find form state's ${s} to populate Direction options.`)}}return l.\u0275fac=function(s){return new(s||l)(e.Y36(e.sBO))},l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-direction-select"]],viewQuery:function(s,p){if(1&s&&e.Gf(fe,5,e.Rgc),2&s){let w;e.iGM(w=e.CRH())&&(p.optionTemplates=w)}},features:[e.qOj],decls:7,vars:15,consts:[[3,"cvcFormControl","cvcFormlyAttributes","cvcSelectMode","cvcPlaceholder","cvcCustomTemplate","cvcOptions","cvcShowError","cvcDisabled"],[4,"ngFor","ngForOf"],["selectedTemplate",""],["optionTemplates",""],[3,"cvcAttrValue"],[1,"ant-select-selection-item-content"],[3,"cvcAttrValue","cvcContext","cvcMode","cvcOnClose"]],template:function(s,p){if(1&s&&(e._UZ(0,"cvc-enum-select",0),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.YNc(3,Ot,3,0,"ng-container",1),e.ALo(4,"ngrxPush"),e.YNc(5,pn,2,3,"ng-template",null,2,e.W1O)),2&s){const w=e.MAs(6);e.Q6J("cvcFormControl",p.formControl)("cvcFormlyAttributes",p.field)("cvcSelectMode",p.props.isMultiSelect?"multiple":"default")("cvcPlaceholder",e.lcZ(1,9,p.placeholder$))("cvcCustomTemplate",w)("cvcOptions",e.lcZ(2,11,p.selectOption$))("cvcShowError",p.showError)("cvcDisabled",p.props.disabled),e.xp6(3),e.Q6J("ngForOf",e.lcZ(4,13,p.directionEnum$))}},dependencies:[a.sg,Do,Ie,lo.fM],changeDetection:0}),l})()}]};let Uo=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[a.ez,t.UX,_.X0.forChild(vo),No,Kn,xr]}),l})();var hi,Oo=c(1227),oi=c(2024),jo=c(7473),Ti=c(9928);function co(l,g){if(1&l&&e._uU(0),2&l){const s=e.oxw();e.Oqu(s.successMessage)}}function Mr(l,g){if(1&l&&(e.ynx(0),e._uU(1),e.BQk()),2&l){const s=e.oxw();e.xp6(1),e.hij(' "',s.model.name,'" ')}}const fr=function(){return[0,0]};let Dr=((hi=class{set cvcSearchString(g){g&&this.searchString$.next(g)}constructor(g,s){this.query=g,this.errors=s,this.cvcOnCreate=new e.vpe,this.form=new t.nJ({}),this.model={name:""},this.formLayout="horizontal",this.options={formState:{formLayout:this.formLayout}},this.onSubmit$=new E.x,this.searchString$=new Be.X(void 0),this.addDiseaseMutator=new oi.U(this.errors),this.fields=[{key:"doid",type:"base-input",props:{label:"DOID",keydown:(p,w)=>{"Tab"===w.code&&w.stopPropagation()}}},{key:"name",props:{hidden:!0,required:!0}}],this.searchString$.pipe((0,zn.t)(this)).subscribe(p=>{p&&(this.model.name=p)}),this.onSubmit$.pipe((0,zn.t)(this)).subscribe(p=>{console.log("disease-quick-add form model submitted.",p),this.submitDisease(p)})}submitDisease(g){g.name?this.mutationState=this.addDiseaseMutator.mutate(this.query,this.model,{},s=>{console.log("disease-quick-add submit data callback",s),s.addDisease&&(this.successMessage=s.addDisease.new?`New Disease ${s.addDisease.disease.name} added.`:`Existing Disease ${s.addDisease.disease.name} with DOID ${s.addDisease.disease.doid} found. `,setTimeout(()=>{s&&s.addDisease&&this.cvcOnCreate.next(s.addDisease.disease.id)},1e3))}):console.error("disease-quick-add form submitDisease requires model with valid name.")}}).\u0275fac=function(g){return new(g||hi)(e.Y36(Nn.MPi),e.Y36(jo.Y))},hi.\u0275cmp=e.Xpm({type:hi,selectors:[["cvc-disease-quick-add-form"]],inputs:{cvcSearchString:"cvcSearchString"},outputs:{cvcOnCreate:"cvcOnCreate"},decls:11,vars:11,consts:[["entityType","Disease",3,"mutationState","successMessage"],["success",""],["nz-form","","nzLayout","horizontal",3,"formGroup","ngSubmit"],[3,"nzGutter"],["nzSpan","24"],[3,"form","fields","model","options","modelChange"],["nz-button","","nzType","primary","nzBlock","",3,"disabled"],[4,"ngIf"]],template:function(g,s){if(1&g&&(e.TgZ(0,"cvc-form-submission-status-display",0),e.YNc(1,co,1,1,"ng-template",null,1,e.W1O),e.TgZ(3,"form",2),e.NdJ("ngSubmit",function(){return s.onSubmit$.next(s.model)}),e.TgZ(4,"nz-row",3)(5,"nz-col",4)(6,"formly-form",5),e.NdJ("modelChange",function(w){return s.model=w}),e.qZA()(),e.TgZ(7,"nz-col",4)(8,"button",6),e._uU(9," Add Disease\xa0 "),e.YNc(10,Mr,2,1,"ng-container",7),e.qZA()()()()()),2&g){const p=e.MAs(2);e.Q6J("mutationState",s.mutationState)("successMessage",p),e.xp6(3),e.Q6J("formGroup",s.form),e.xp6(1),e.Q6J("nzGutter",e.DdM(10,fr)),e.xp6(2),e.Q6J("form",s.form)("fields",s.fields)("model",s.model)("options",s.options),e.xp6(2),e.Q6J("disabled",!s.form.valid),e.xp6(2),e.Q6J("ngIf",s.model.name)}},dependencies:[a.O5,t._Y,t.JL,t.sg,_.T7,zo.ix,ue.w,et.dQ,R.t3,R.SK,L.Lr,Ti.F],encapsulation:2,changeDetection:0}),hi);Dr=(0,U.gn)([(0,zn.c)()],Dr);const Vr=["optionTemplates"];function mr(l,g){if(1&l&&(e.ynx(0),e.TgZ(1,"strong"),e._uU(2,"DOID:"),e.qZA(),e._UZ(3,"span",9),e.ALo(4,"highlightTypeahead"),e.BQk()),2&l){const s=e.oxw(2).$implicit,p=e.oxw().ngrxLet;e.xp6(3),e.Q6J("innerHtml",e.xi3(4,1,s.doid,p),e.oJD)}}function Da(l,g){if(1&l&&(e.ynx(0),e._uU(1," \xa0 "),e.TgZ(2,"strong"),e._uU(3,"Aliases: "),e.qZA(),e.TgZ(4,"em"),e._UZ(5,"span",10),e.ALo(6,"highlightTypeahead"),e.qZA(),e.BQk()),2&l){const s=e.oxw(2).$implicit,p=e.oxw().ngrxLet;e.xp6(5),e.Q6J("nzTooltipTitle",s.diseaseAliases.join(", "))("innerHtml",e.xi3(6,2,s.diseaseAliases.join(", "),p),e.oJD)}}function ns(l,g){if(1&l&&(e._UZ(0,"cvc-entity-tag",6),e.TgZ(1,"span",7),e.YNc(2,mr,5,4,"ng-container",8),e.YNc(3,Da,7,5,"ng-container",8),e._uU(4),e.qZA()),2&l){const s=e.oxw().$implicit,p=e.oxw().ngrxLet;e.Q6J("cvcDisableLink",!0)("cvcCacheId",s.__typename+":"+s.id)("cvcEmphasize",p),e.xp6(2),e.Q6J("ngIf",s.doid),e.xp6(1),e.Q6J("ngIf",s.diseaseAliases.length>0),e.xp6(1),e.hij(" ",p," ")}}function _s(l,g){1&l&&(e.ynx(0),e.YNc(1,ns,5,6,"ng-template",null,5,e.W1O),e.BQk())}function oc(l,g){if(1&l&&(e.ynx(0),e.YNc(1,_s,3,0,"ng-container",4),e.ALo(2,"ngrxPush"),e.BQk()),2&l){const s=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,s.result$))}}function jl(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"div",11)(1,"cvc-entity-tag",12),e.NdJ("cvcOnClose",function(){const ze=e.CHM(s).$implicit,ft=e.oxw();return e.KtG(ft.onTagClose$.next(ze.nzValue))}),e.qZA()()}if(2&l){const s=g.$implicit,p=e.oxw();e.xp6(1),e.Q6J("cvcCacheId","Disease:"+s.nzValue)("cvcContext",p.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",p.props.isMultiSelect?"default":"closeable")}}function ic(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"cvc-disease-quick-add-form",13),e.NdJ("cvcOnCreate",function(w){e.CHM(s);const ze=e.oxw();return e.KtG(ze.onPopulate$.next(w))}),e.qZA()}2&l&&e.Q6J("cvcSearchString",g.$implicit)}const Gr=To(Lo(),Fo());let Pn=(()=>{class l extends Gr{constructor(s,p,w){super(),this.taq=s,this.tq=p,this.changeDetectorRef=w,this.defaultOptions={props:{entityName:{singular:"Disease",plural:"Diseases"},tooltip:"Cancer or cancer subtype that is a result of the described variant",isMultiSelect:!1,requireType:!0,placeholder:"Search Diseases",requireTypePromptFn:(ze,ft)=>`Select an ${ze} Type to select an associated Disease${ft?"(s)":""}`,addFormTitle:"Add a New Disease"}},this.placeholder$=new Be.X(void 0),this.selectOpen$=new Qi.t}ngAfterViewInit(){this.configureBaseField(),this.configureEntitySelectField({typeaheadQuery:this.taq,typeaheadParam$:void 0,tagQuery:this.tq,getTypeaheadVarsFn:this.getTypeaheadVarsFn,getTypeaheadResultsFn:this.getTypeaheadResultsFn,getTagQueryVarsFn:this.getTagQueryVarsFn,getTagQueryResultsFn:this.getTagQueryResultsFn,getSelectedItemOptionFn:this.getSelectedItemOptionFn,getSelectOptionsFn:this.getSelectOptionsFn,changeDetectorRef:this.changeDetectorRef,selectOpen$:this.selectOpen$,selectComponent:this.selectComponent}),this.state&&this.state.formReady$?this.state.formReady$.pipe((0,yt.h)(s=>s),(0,es.q)(1),(0,zn.t)(this)).subscribe(s=>{this.configureField()}):this.configureField()}configureField(){this.placeholder$.next(this.props.placeholder),this.configureStateConnections()}configureStateConnections(){if(this.state){if(this.state.requires.requiresDisease$?this.onRequiresDisease$=this.state.requires.requiresDisease$:console.warn(`${this.field.id} field's form provides a state, but could not find requiresDisease$ subject to attach.`),this.props.requireType){const s=`${this.state.entityName.toLowerCase()}Type$`;this.state.fields[s]?this.onEntityType$=this.state.fields[s]:console.error(`${this.field.id} requireType is true, however form state does not provide Subject ${s}.`)}!this.onRequiresDisease$||!this.onEntityType$||(0,Io.a)([this.onRequiresDisease$,this.onEntityType$,this.onValueChange$]).pipe((0,zn.t)(this)).subscribe(([s,p,w])=>{this.onStateUpdates(s,p,w)})}}onStateUpdates(s,p,w){!s&&p&&(this.props.required=!1,this.props.disabled=!0,this.props.description=`${(0,Di.E)(p)} ${this.state.entityName} does not include associated diseases`,this.props.extraType="prompt",this.cdr.markForCheck()),this.props.requireType&&!p&&(this.props.required=!1,this.props.disabled=!0,this.props.description=this.props.requireTypePromptFn(this.state.entityName,this.props.isMultiSelect),this.props.extraType="prompt"),s&&(this.props.required=!0,this.props.disabled=!1,this.props.description=void 0,this.props.extraType=void 0),(!s&&void 0!==w||this.props.requireType&&!p&&this.formControl.value)&&this.resetField()}getTypeaheadVarsFn(s){return{name:s}}getTypeaheadResultsFn(s){return s.data.diseaseTypeahead}getTagQueryVarsFn(s){return{id:s}}getTagQueryResultsFn(s){return s.data.disease}getSelectedItemOptionFn(s){return{value:s.id,label:s.name}}getSelectOptionsFn(s,p){return s.map((w,ze)=>({label:p.get(ze)||w.name,value:w.id}))}}return l.\u0275fac=function(s){return new(s||l)(e.Y36(Nn.RYL),e.Y36(Nn.QVn),e.Y36(e.sBO))},l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-disease-select"]],viewQuery:function(s,p){if(1&s&&e.Gf(Vr,5,e.Rgc),2&s){let w;e.iGM(w=e.CRH())&&(p.optionTemplates=w)}},features:[e.qOj],decls:12,vars:26,consts:[[3,"cvcAddEntity","cvcSelectMode","cvcCustomTemplate","cvcFormControl","cvcFormlyAttributes","cvcEntityName","cvcPlaceholder","cvcResults","cvcOptions","cvcShowError","cvcDisabled","cvcLoading","cvcSelectOpen","cvcOnSearch","cvcOnOpenChange","cvcSelectComponent","cvcOnModelChange"],[4,"ngrxLet"],["selectedTemplate",""],["addDisease",""],[4,"ngFor","ngForOf"],["optionTemplates",""],[3,"cvcDisableLink","cvcCacheId","cvcEmphasize"],["nz-typography","","nzType","secondary"],[4,"ngIf"],[3,"innerHtml"],["nz-typography","","nzType","secondary","nz-tooltip","",3,"nzTooltipTitle","innerHtml"],[1,"ant-select-selection-item-content"],[3,"cvcCacheId","cvcContext","cvcMode","cvcOnClose"],[3,"cvcSearchString","cvcOnCreate"]],template:function(s,p){if(1&s&&(e.TgZ(0,"cvc-entity-select",0),e.NdJ("cvcOnSearch",function(ze){return p.onSearch$.next(ze)})("cvcOnOpenChange",function(ze){return p.onOpenChange$.next(ze)})("cvcSelectComponent",function(ze){return p.selectComponent=ze})("cvcOnModelChange",function(ze){return p.props.change&&p.props.change(p.field,ze)}),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.ALo(3,"ngrxPush"),e.ALo(4,"ngrxPush"),e.ALo(5,"ngrxPush"),e.ALo(6,"ngrxPush"),e.qZA(),e.YNc(7,oc,3,3,"ng-container",1),e.YNc(8,jl,2,3,"ng-template",null,2,e.W1O),e.YNc(10,ic,1,1,"ng-template",null,3,e.W1O)),2&s){const w=e.MAs(9),ze=e.MAs(11);e.Q6J("cvcAddEntity",ze)("cvcSelectMode",p.props.isMultiSelect?"multiple":"default")("cvcCustomTemplate",w)("cvcFormControl",p.formControl)("cvcFormlyAttributes",p.field)("cvcEntityName",p.props.entityName)("cvcPlaceholder",e.lcZ(1,14,p.placeholder$))("cvcResults",e.lcZ(2,16,p.result$))("cvcOptions",e.lcZ(3,18,p.selectOption$))("cvcShowError",p.showError)("cvcDisabled",p.onRequiresDisease$&&!e.lcZ(4,20,p.onRequiresDisease$))("cvcLoading",e.lcZ(5,22,p.isLoading$))("cvcSelectOpen",e.lcZ(6,24,p.selectOpen$)),e.xp6(7),e.Q6J("ngrxLet",p.onSearch$)}},dependencies:[a.sg,a.O5,lo.eJ,eo.SY,X.ZU,sn,Qt.J,Dr,lo.fM,hr.A],changeDetection:0}),l})();const Go={types:[{name:"disease-select",wrappers:["form-field"],component:Pn,defaultOptions:{props:{label:"Disease"}}},{name:"disease-multi-select",wrappers:["form-field"],component:Pn,defaultOptions:{props:{isMultiSelect:!0,label:"Diseases"}}}]};let Kc=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[a.ez,t.UX,_.X0.forChild(Go),_t.L,zo.sL,Ye.LV,Wo.$6,yi.Qp,de.PV,A.o7,R.Jb,eo.cg,Re.zf,L.U5,B.ic,X.ZJ,An.X,Oo.g,No,Gt,tt.s,Ce.x]}),l})();const oa=["optionTemplates"];function Fi(l,g){if(1&l&&e._UZ(0,"cvc-attribute-tag",4),2&l){const s=e.oxw().$implicit;e.Q6J("cvcAttrValue",s)}}function ys(l,g){1&l&&(e.ynx(0),e.YNc(1,Fi,1,1,"ng-template",null,3,e.W1O),e.BQk())}function os(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"div",5)(1,"cvc-attribute-tag",6),e.NdJ("cvcOnClose",function(w){e.CHM(s);const ze=e.oxw();return e.KtG(ze.onTagClose$.next(w))}),e.qZA()()}if(2&l){const s=g.$implicit,p=e.oxw();e.xp6(1),e.Q6J("cvcAttrValue",s.nzValue)("cvcContext",p.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",p.props.isMultiSelect?"default":"closeable")}}const Or={DIAGNOSTIC:"Evidence pertains to a variant's impact on patient diagnosis (cancer subtype).",PREDICTIVE:"Evidence pertains to a variant's effect on therapeutic response.",PROGNOSTIC:"Evidence pertains to a variant's impact on disease progression, severity, or patient survival.",PREDISPOSING:"Evidence pertains to a germline variant's role in conferring susceptibility to disease (including pathogenicity evaluations).",ONCOGENIC:"Evidence pertains to a somatic variant's involvement in tumor pathogenesis as described by the Hallmarks of Cancer.",FUNCTIONAL:"Evidence pertains to a variant that alters biological function from the reference state."},Oa=To(Lo(),go()),ia={types:[{name:"type-select",wrappers:["form-field"],component:(()=>{class l extends Oa{constructor(s){super(),this.cdr=s,this.defaultOptions={props:{label:"ENTITY_NAME Type",entityName:{singular:"Entity",plural:"Entities"},placeholder:"Select an ENTITY_NAME Type",isMultiSelect:!1}},this.typeEnums$=new Be.X([])}ngAfterViewInit(){this.configureBaseField(),this.state&&this.state.formReady$?this.state.formReady$.pipe((0,yt.h)(s=>s),(0,es.q)(1),(0,zn.t)(this)).subscribe(s=>{this.configureField()}):this.configureField()}configureField(){this.onValueChange$.pipe((0,zn.t)(this)).subscribe(s=>{s?(this.props.description=Or[s],this.props.extraType="description",this.field.formControl.markAsTouched()):(this.props.description=void 0,this.props.extraType=void 0)}),this.state?(this.props.placeholder=this.props.placeholder.replace("ENTITY_NAME",this.state.entityName),this.props.label=this.props.label.replace("ENTITY_NAME",this.state.entityName),this.props.tooltip=`Type of clinical outcome associated with the ${this.state.entityName} statement.`,this.state.enums.entityType$?(this.state.enums.entityType$.pipe((0,zn.t)(this)).subscribe(s=>{this.typeEnums$.next(s)}),this.optionTemplates||console.error(`${this.field.id} could not find its optionTemplates QueryList to populate its select options, so simple text labels will be displayed.`),this.optionTemplate$=this.optionTemplates?.changes.pipe((0,S.U)(s=>s.map(p=>p))),this.configureEnumSelect()):console.error(`${this.field.id} could not find state's enums.inputEnum$ to populate its select options.`)):console.error(`${this.field.id} requires a form state to configure itself, none was found.`)}configureEnumSelect(){this.configureEnumSelectField({optionEnum$:this.typeEnums$,optionTemplate$:this.optionTemplate$,changeDetectorRef:this.cdr})}}return l.\u0275fac=function(s){return new(s||l)(e.Y36(e.sBO))},l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-type-select"]],viewQuery:function(s,p){if(1&s&&e.Gf(oa,5,e.Rgc),2&s){let w;e.iGM(w=e.CRH())&&(p.optionTemplates=w)}},features:[e.qOj],decls:6,vars:13,consts:[[3,"cvcFormControl","cvcFormlyAttributes","cvcSelectMode","cvcPlaceholder","cvcCustomTemplate","cvcOptions","cvcShowError","cvcDisabled"],[4,"ngFor","ngForOf"],["selectedTemplate",""],["optionTemplates",""],[3,"cvcAttrValue"],[1,"ant-select-selection-item-content"],[3,"cvcAttrValue","cvcContext","cvcMode","cvcOnClose"]],template:function(s,p){if(1&s&&(e._UZ(0,"cvc-enum-select",0),e.ALo(1,"ngrxPush"),e.YNc(2,ys,3,0,"ng-container",1),e.ALo(3,"ngrxPush"),e.YNc(4,os,2,3,"ng-template",null,2,e.W1O)),2&s){const w=e.MAs(5);e.Q6J("cvcFormControl",p.formControl)("cvcFormlyAttributes",p.field)("cvcSelectMode",p.props.isMultiSelect?"multiple":"default")("cvcPlaceholder",p.props.placeholder)("cvcCustomTemplate",w)("cvcOptions",e.lcZ(1,9,p.selectOption$))("cvcShowError",p.showError)("cvcDisabled",p.props.disabled),e.xp6(2),e.Q6J("ngForOf",e.lcZ(3,11,p.typeEnums$))}},dependencies:[a.sg,Ie,Do,lo.fM],changeDetection:0}),l})()}]};let r1=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[a.ez,t.UX,_.X0.forChild(ia),No,xr,Kn]}),l})();var rc=c(9154);let sr=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[a.ez,X.ZJ]}),l})();var Vi=c(2962),Br=c(2787),Qo=c(3740),wr=c(6699),Cs=c(3620),sc=c(1757),Pr=c(9111),ac=c(9377);const wa={isSelectCol:l=>"select"===l.type,isEntityTagCol:l=>"entity-tag"===l.type,isEnumTagCol:l=>"enum-tag"===l.type,isTextTagCol:l=>"text-tag"===l.type},Pa=l=>void 0!==l.sort,ks=l=>void 0!==l.filter,Wl={description:Nn.Cp0.Description,disease:Nn.Cp0.DiseaseName,evidenceDirection:Nn.Cp0.EvidenceDirection,evidenceLevel:Nn.Cp0.EvidenceLevel,evidenceRating:Nn.Cp0.EvidenceRating,evidenceType:Nn.Cp0.EvidenceType,id:Nn.Cp0.Id,significance:Nn.Cp0.Significance,status:Nn.Cp0.Status,therapies:Nn.Cp0.TherapyName,variantOrigin:Nn.Cp0.VariantOrigin},qc={molecularProfile:"molecularProfileName",disease:"diseaseName",therapies:"therapyName",evidenceItem:"id"},Y=["selected","id"];class ee{constructor(){this.sortStreams=[],this.filterStreams=[],this.config=this.configureColumnStreams([{key:"selected",label:"Select",type:"select",width:"25px",align:"center",fixedLeft:!0,checkbox:{th:{showCheckbox:!1},td:{showCheckbox:!0}}},{hidden:!0,key:"id",label:"ID",type:"default",width:"30px"},{hidden:!0,key:"status",label:"Status",type:"default",width:"50px"},{key:"id",label:"Evidence",type:"entity-tag",width:"95px",context:"evidenceItem",fixedLeft:!0,showStatus:!0,tag:{fullWidth:!0},sort:{default:"ascend"},filter:{inputType:"default",options:[{key:"EID",value:null}],transform:g=>g?+g.toString().replace(/EID/i,""):null}},{key:"molecularProfile",label:"Molecular Profile",type:"entity-tag",width:"240px",sort:{},tag:{truncateLabel:"200px"},filter:{inputType:"default",typename:"MolecularProfile",options:[{key:"Filter Therapy Names",value:null}]}},{key:"disease",type:"entity-tag",label:"Disease",width:"240px",sort:{},tag:{truncateLabel:"200px"},filter:{inputType:"default",typename:"Disease",options:[{key:"Filter Disease Names",value:null}]}},{key:"therapies",label:"Therapies",type:"entity-tag",width:"275px",sort:{},tag:{maxTags:2,truncateLabel:"150px"},filter:{inputType:"default",typename:"Therapy",options:[{key:"Filter Therapy Names",value:null}]}},{key:"therapyInteractionType",label:"INT",tooltip:"Therapy Interaction Type",type:"enum-tag",width:"40px",align:"center",emptyValueCategory:"not-applicable",sort:{},filter:{options:this.getAttributeFilters((0,So.o6)(Nn.wkr))}},{key:"description",label:"DSC",tooltip:"Evidence Description",type:"text-tag",width:"40px",align:"center",fixedRight:!0,emptyValueCategory:"unspecified",sort:{},filter:{inputType:"default",options:[{key:"Search Descriptions",value:null}]}},{key:"evidenceType",label:"ET",tooltip:"Evidence Type",type:"enum-tag",width:"40px",align:"center",fixedRight:!0,sort:{},filter:{options:this.getAttributeFilters((0,So.o6)(Nn.kqt))}},{key:"evidenceLevel",label:"EL",tooltip:"Evidence Level",type:"enum-tag",width:"40px",align:"center",fixedRight:!0,sort:{},filter:{options:this.getAttributeFilters((0,So.o6)(Nn.Sx0))}},{key:"evidenceDirection",label:"ED",tooltip:"Evidence Direction",type:"enum-tag",width:"40px",align:"center",fixedRight:!0,sort:{},filter:{options:this.getAttributeFilters((0,So.o6)(Nn.tI1))}},{key:"significance",label:"SI",tooltip:"Significance",type:"enum-tag",align:"center",width:"40px",fixedRight:!0,sort:{},filter:{options:this.getAttributeFilters((0,So.o6)(Nn.y1h))}},{key:"evidenceRating",label:"ER",tooltip:"Evidence Rating",type:"enum-tag",width:"45px",align:"center",fixedRight:!0,tag:{showLabel:"short-string"},sort:{},filter:{options:[1,2,3,4,5].map(g=>({value:g,text:`${g} stars`}))}}])}get(){return this.config}getSortStreams(){return this.sortStreams}getFilterStreams(){return this.filterStreams}getAttributeFilters(g,s){return g.getValues().map(w=>({text:(0,Di.E)(w),value:w,byDefault:s===w}))}configureColumnStreams(g){return g.forEach(s=>{const p=s;if(Pa(p)&&(p.sort.changes=new Be.X({key:p.key,value:p.sort.default??null}),this.sortStreams.push(p.sort.changes)),ks(p)){const w=p.filter.options.find(ze=>ze.byDefault)?.value;p.filter.changes=new Be.X({key:p.key,value:w??null}),this.filterStreams.push(p.filter.changes)}}),g}}var ce,D=c(8656);function Pe(l,g){1&l&&e.GkF(0)}const ut=function(l,g,s){return{$implicit:l,config:g,emphasize:s}};function mt(l,g){if(1&l&&(e.ynx(0),e.TgZ(1,"span",1),e.YNc(2,Pe,1,0,"ng-container",2),e.qZA(),e.BQk()),2&l){const s=g.$implicit,p=e.oxw();e.xp6(2),e.Q6J("ngTemplateOutlet",p.cvcTagTemplate)("ngTemplateOutletContext",e.kEZ(2,ut,s,p.config,null==p.config?null:p.config.emphasize))}}let nn=((ce=class{set cvcTagListConfig(g){!g||!g.tagList||!g.tag||(this.config=g,this.setEntities(g.tagList,g.tag))}constructor(){this.entities=[]}setEntities(g,s){this.entities=g&&0!==g.length&&0!==s.maxTags?g:[]}}).\u0275fac=function(g){return new(g||ce)},ce.\u0275cmp=e.Xpm({type:ce,selectors:[["cvc-entity-tag-list"]],inputs:{cvcTagListConfig:"cvcTagListConfig",cvcTagTemplate:"cvcTagTemplate"},decls:1,vars:1,consts:[[4,"ngFor","ngForOf"],[1,"tag-container"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(g,s){1&g&&e.YNc(0,mt,3,6,"ng-container",0),2&g&&e.Q6J("ngForOf",s.entities)},dependencies:[a.sg,a.tP],styles:[".typeahead-match[_ngcontent-%COMP%]{font-weight:700}.hide-dropdown[_ngcontent-%COMP%]{display:none}[_nghost-%COMP%]{display:inline-block;margin-bottom:-4px}.tag-container[_ngcontent-%COMP%]{display:inline-block;margin-bottom:4px}"],changeDetection:0}),ce);nn=(0,U.gn)([(0,zn.c)()],nn);var Fn=c(2616),io=c(1201);function uo(l,g){if(1&l&&(e._UZ(0,"span",6),e.ALo(1,"typenameToIcon"),e.ALo(2,"entityColor")),2&l){const s=g.$implicit;e.Q6J("nzType",e.lcZ(1,2,s.__typename))("nzTwotoneColor",e.lcZ(2,4,s.__typename))}}function Jo(l,g){if(1&l&&(e.ynx(0),e.YNc(1,uo,3,6,"span",5),e.BQk()),2&l){const s=e.oxw();e.xp6(1),e.Q6J("ngForOf",s.entities)}}function Ni(l,g){if(1&l&&(e.TgZ(0,"span",7)(1,"strong"),e._uU(2),e.qZA()(),e._UZ(3,"span",6),e.ALo(4,"typenameToIcon"),e.ALo(5,"entityColor")),2&l){const s=e.oxw();e.xp6(2),e.Oqu(s.entities.length),e.xp6(1),e.Q6J("nzType",e.lcZ(4,3,s.entities[0].__typename))("nzTwotoneColor",e.lcZ(5,5,s.entities[0].__typename))}}const ra=function(l,g,s,p,w){return{tagList:l,tag:g,showPopover:s,status:p,emphasize:w}};function Qr(l,g){if(1&l&&e._UZ(0,"cvc-entity-tag-list",11),2&l){const s=e.oxw(2);e.Q6J("cvcTagTemplate",s.cvcTagTemplate)("cvcTagListConfig",e.qbA(2,ra,s.entities,s.config.tag,s.config.showPopover,s.config.status,s.config.emphasize))}}function Wr(l,g){1&l&&e._uU(0," Invalid config specified for entity-tag-list. ")}function Zi(l,g){if(1&l&&(e.TgZ(0,"div",8),e.YNc(1,Qr,1,8,"cvc-entity-tag-list",9),e.qZA(),e.YNc(2,Wr,1,0,"ng-template",null,10,e.W1O)),2&l){const s=e.MAs(3),p=e.oxw();e.xp6(1),e.Q6J("ngIf",p.config)("ngIfElse",s)}}let br=(()=>{class l{set cvcCollectionTagConfig(s){!s||!s.tagList||!s.tag||(this.setConfig(s),this.setEntities(s.tagList))}constructor(){this.cvcShowMaxIcons=5,this.cvcShowFullLabels=!0,this.entities=[]}setConfig(s){this.config=this.cvcShowFullLabels?{...s,tag:{...s.tag,truncateLabel:void 0}}:s}setEntities(s){this.entities=s&&0!==s.length?s:[]}}return l.\u0275fac=function(s){return new(s||l)},l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-entity-collection-tag"]],inputs:{cvcCollectionTagConfig:"cvcCollectionTagConfig",cvcTagTemplate:"cvcTagTemplate",cvcShowMaxIcons:"cvcShowMaxIcons",cvcShowFullLabels:"cvcShowFullLabels"},decls:9,vars:3,consts:[["nz-popover","","nzPopoverPlacement","top","nzPopoverTrigger","hover",3,"nzPopoverContent"],["nz-typography","","nzType","secondary",1,"plus-sign"],[4,"ngIf","ngIfElse"],["showCount",""],["tagListPopover",""],["class","entity-icon","nz-icon","","nzTheme","twotone",3,"nzType","nzTwotoneColor",4,"ngFor","ngForOf"],["nz-icon","","nzTheme","twotone",1,"entity-icon",3,"nzType","nzTwotoneColor"],["nz-typography","","nzType","secondary",1,"entity-count"],[1,"popover-container"],[3,"cvcTagTemplate","cvcTagListConfig",4,"ngIf","ngIfElse"],["noConfig",""],[3,"cvcTagTemplate","cvcTagListConfig"]],template:function(s,p){if(1&s&&(e.TgZ(0,"nz-tag",0)(1,"span",1)(2,"strong"),e._uU(3,"+"),e.qZA()(),e.YNc(4,Jo,2,1,"ng-container",2),e.YNc(5,Ni,6,7,"ng-template",null,3,e.W1O),e.qZA(),e.YNc(7,Zi,4,2,"ng-template",null,4,e.W1O)),2&s){const w=e.MAs(6),ze=e.MAs(8);e.Q6J("nzPopoverContent",ze),e.xp6(4),e.Q6J("ngIf",p.entities.length<=p.cvcShowMaxIcons)("ngIfElse",w)}},dependencies:[a.sg,a.O5,An.j,X.ZU,Wo.lU,de.Ls,nn,Fn.a,io.Z],styles:["[_nghost-%COMP%]{display:inline-block}.popover-container[_ngcontent-%COMP%]{max-width:300px}nz-tag[_ngcontent-%COMP%]{margin:0;padding:0;margin-inline-end:4px}nz-tag[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-block}nz-tag[_ngcontent-%COMP%]   .plus-sign[_ngcontent-%COMP%]{padding:3px 3px 3px 4px;margin:-3px 0;line-height:1}nz-tag[_ngcontent-%COMP%]   .entity-icon[_ngcontent-%COMP%]:first-child{padding-left:2px}nz-tag[_ngcontent-%COMP%]   .entity-icon[_ngcontent-%COMP%]{margin:-3px 1px -4px -1px;padding:3px 0;line-height:1}nz-tag[_ngcontent-%COMP%]   .entity-icon[_ngcontent-%COMP%]:last-child{padding-right:3px}nz-tag[_ngcontent-%COMP%]   .entity-count[_ngcontent-%COMP%]{margin-left:-2px;padding-right:4px}"],changeDetection:0}),l})();var Xc=c(3489);function Zl(l,g){if(1&l&&(e.TgZ(0,"span",1),e._uU(1),e.ALo(2,"number"),e.ALo(3,"number"),e.qZA()),2&l){const s=g.ngIf;e.xp6(1),e.AsE(" ",e.lcZ(2,2,s.edgeCount)," of ",e.lcZ(3,4,s.filteredCount)," displayed\n")}}let el=(()=>{class l{ngOnInit(){this.tableCountsInfo$=this.cvcTableCountsConnection.pipe((0,yt.h)(s=>null!=s.totalCount||null!=s.filteredCount),(0,S.U)(s=>{const p=s.filteredCount,w=s.totalCount,ze=s.edges;return null==p&&null==w&&console.log("Need to provide either filtered count or total count in the table counts component"),{edgeCount:ze.length,filteredCount:p??w}}))}}return l.\u0275fac=function(s){return new(s||l)},l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-table-counts2"]],inputs:{cvcTableCountsConnection:"cvcTableCountsConnection"},decls:2,vars:3,consts:[["class","table-counts","nz-typography","","nzType","secondary",4,"ngIf"],["nz-typography","","nzType","secondary",1,"table-counts"]],template:function(s,p){1&s&&(e.YNc(0,Zl,4,6,"span",0),e.ALo(1,"ngrxPush")),2&s&&e.Q6J("ngIf",e.lcZ(1,1,p.tableCountsInfo$))},dependencies:[a.O5,X.ZU,a.JJ,lo.fM],styles:[":[_nghost-%COMP%]{border:1px solid red}.table-counts[_ngcontent-%COMP%]{display:inline-block}"],changeDetection:0}),l})();var cs,Rs=c(1374),Vs=c(9384);let Kl=((cs=class{set cvcTableScrollerToIndex(g){void 0!==g&&this.scrollToIndex(g)}set cvcTableScrollerToOffset(g){void 0!==g&&this.scrollToIndex(g)}constructor(g){this.host=g,this.cvcTableScrollerOnScroll=new e.vpe,this.cvcTableScrollerOnFetch=new e.vpe,this.cvcTableScrollerTargetHeight=140,this.cvcTableScrollerFetchCount=50,this.onLoadThrottleTime=500,this.onScrollThrottleTime=250,this.onScrollDebounceTime=300}ngAfterViewInit(){if(!this.host||!this.host.cdkVirtualScrollViewport)throw new Error("cvcTableScroller directive could not obtain reference to host cdkVirtualScrollViewport.");this.viewport=this.host.cdkVirtualScrollViewport,this.scrolled$=this.viewport.elementScrolled(),this.rendered$=this.viewport.renderedRangeStream,this.rendered$.pipe((0,Rs.P)()).subscribe(()=>this.viewport.checkViewportSize()),this.scrolled$.pipe((0,Ri.p)(this.onScrollThrottleTime,Xo.z,{leading:!0,trailing:!0}),(0,St.b)(g=>this.cvcTableScrollerOnScroll.next("scroll")),(0,Cs.b)(this.onScrollDebounceTime),(0,zn.t)(this)).subscribe(g=>{this.cvcTableScrollerOnScroll.next("stop")}),this.scrolled$.pipe((0,S.U)(g=>this.viewport.measureScrollOffset("bottom")),(0,Vs.G)(),(0,yt.h)(([g,s])=>s<g&&s<this.cvcTableScrollerTargetHeight),(0,Ri.p)(this.onLoadThrottleTime),(0,zn.t)(this)).subscribe(g=>{this.cvcTableScrollerOnScroll.next("bottom");try{this.loadMore(this.cvcTableScrollerPageInfo)}catch(s){console.error(s)}})}loadMore(g){const s=this.cvcTableScrollerQueryRef;if(!g&&s)throw new Error("table-scroll directive requires PageInfo to use provided QueryRef.");if(g&&!s)throw new Error("table-scroll directive requires valid QueryRef when PageInfo provided.");if(g&&s){const[p,w,ze]=[this.cvcTableScrollerFetchCount,g.hasNextPage,g.endCursor];if(!p||!ze)throw new Error("table-scroll PageInfo invalid.");if(!w)return;this.cvcTableScrollerOnFetch.next({first:p,after:ze})}}scrollToIndex(g){const[s,p]=[this.host,this.host.cdkVirtualScrollViewport];if(!s||!p)throw new Error("table-scroll scrollToIndex() cannot find host viewport.");p.scrollToIndex(g)}scrollToOffset(g){const[s,p]=[this.host,this.host.cdkVirtualScrollViewport];if(!s||!p)throw new Error("table-scroll scrollToOffset() cannot find host viewport.");p.scrollToOffset(g)}}).\u0275fac=function(g){return new(g||cs)(e.Y36(Qo.N8))},cs.\u0275dir=e.lG2({type:cs,selectors:[["","cvcTableScroller",""]],inputs:{cvcTableScrollerTargetHeight:"cvcTableScrollerTargetHeight",cvcTableScrollerQueryRef:"cvcTableScrollerQueryRef",cvcTableScrollerPageInfo:"cvcTableScrollerPageInfo",cvcTableScrollerFetchCount:"cvcTableScrollerFetchCount",cvcTableScrollerToIndex:"cvcTableScrollerToIndex",cvcTableScrollerToOffset:"cvcTableScrollerToOffset"},outputs:{cvcTableScrollerOnScroll:"cvcTableScrollerOnScroll",cvcTableScrollerOnFetch:"cvcTableScrollerOnFetch"}}),cs);function tl(l,g){1&l&&e._UZ(0,"span",8)}function a1(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"span",9),e.NdJ("click",function(){e.CHM(s),e.oxw(2);const w=e.MAs(3),ze=e.oxw();return w.value="",e.KtG(ze.cvcModelChange.next(null))}),e.qZA()}}function zd(l,g){if(1&l&&(e.YNc(0,tl,1,0,"span",6),e.YNc(1,a1,1,0,"span",7)),2&l){e.oxw();const s=e.MAs(3);e.Q6J("ngIf",!s.value),e.xp6(1),e.Q6J("ngIf",s.value)}}function Jl(l,g){if(1&l){const s=e.EpF();e.ynx(0),e.TgZ(1,"nz-input-group",2)(2,"input",3,4),e.NdJ("ngModelChange",function(w){e.CHM(s);const ze=e.oxw();return e.KtG(ze.cvcModelChange.next(w))}),e.qZA()(),e.YNc(4,zd,2,2,"ng-template",null,5,e.W1O),e.BQk()}if(2&l){const s=e.MAs(5),p=e.oxw();e.xp6(1),e.Q6J("nzSuffix",s),e.xp6(1),e.Q6J("placeholder",p.cvcPlaceholder)("ngModel",p.cvcModel)}}function dp(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"nz-input-number-group",10)(1,"nz-input-number",11,4),e.NdJ("ngModelChange",function(w){e.CHM(s);const ze=e.oxw();return e.KtG(ze.cvcModelChange.next(""===w?null:w))}),e.qZA()()}if(2&l){const s=e.oxw();let p;e.xp6(1),e.Q6J("nzPlaceHolder",null!==(p=s.cvcPlaceholder)&&void 0!==p?p:"")("ngModel",s.cvcModel)("nzMin",1)("nzStep",1)}}Kl=(0,U.gn)([(0,zn.c)()],Kl);let Td=(()=>{class l{constructor(){this.cvcModel=null,this.cvcModelChange=new e.vpe,this.cvcInputType="default"}}return l.\u0275fac=function(s){return new(s||l)},l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-table-filter-input"]],inputs:{cvcModel:"cvcModel",cvcInputType:"cvcInputType",cvcPlaceholder:"cvcPlaceholder"},outputs:{cvcModelChange:"cvcModelChange"},decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["numericInput",""],["nzSize","small",3,"nzSuffix"],["nz-input","",3,"placeholder","ngModel","ngModelChange"],["filterInput",""],["suffixIcon",""],["nz-icon","","nzType","search","style","color: #ddd",4,"ngIf"],["nz-icon","","class","ant-input-clear-icon","nzTheme","fill","nzType","close-circle",3,"click",4,"ngIf"],["nz-icon","","nzType","search",2,"color","#ddd"],["nz-icon","","nzTheme","fill","nzType","close-circle",1,"ant-input-clear-icon",3,"click"],["nzSize","small"],[2,"width","100%",3,"nzPlaceHolder","ngModel","nzMin","nzStep","ngModelChange"]],template:function(s,p){if(1&s&&(e.YNc(0,Jl,6,3,"ng-container",0),e.YNc(1,dp,3,4,"ng-template",null,1,e.W1O)),2&s){const w=e.MAs(2);e.Q6J("ngIf","default"===p.cvcInputType)("ngIfElse",w)}},dependencies:[a.O5,t.Fj,t.JJ,t.On,ue.w,de.Ls,A.Zp,A.gB,A.ke,lt,ie],styles:[".typeahead-match[_ngcontent-%COMP%]{font-weight:700}.hide-dropdown[_ngcontent-%COMP%]{display:none}  nz-input-group{border-color:#d9d9d9!important}"]}),l})();var Ia=c(3460);function pc(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"li",5),e.NdJ("click",function(){const ze=e.CHM(s).$implicit,ft=e.oxw();return e.KtG(ft.cvcOptionChange.next({key:ft.cvcColumnKey,value:ze.value}))}),e._UZ(1,"cvc-attribute-tag",6),e.qZA()}if(2&l){const s=g.$implicit,p=e.oxw();e.Q6J("nzSelected",(null==p.cvcOption?null:p.cvcOption.value)===s.value),e.xp6(1),e.Q6J("cvcFullWidth",!0)("cvcChecked",(null==p.cvcOption?null:p.cvcOption.value)===s.value)("cvcAttrValue",s.value)}}let ql=(()=>{class l{constructor(){this.cvcOptionChange=new e.vpe}}return l.\u0275fac=function(s){return new(s||l)},l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-enum-filter-menu"]],inputs:{cvcColumnKey:"cvcColumnKey",cvcFilterOptions:"cvcFilterOptions",cvcOption:"cvcOption"},outputs:{cvcOptionChange:"cvcOptionChange"},decls:6,vars:2,consts:[["nz-menu",""],["nz-menu-item","",3,"nzSelected","click",4,"ngFor","ngForOf"],[2,"padding","3px"],["nz-button","","nzType","default","nzBlock","","nzSize","small",3,"disabled","click"],["nz-icon","","nzType","retweet","nzTheme","outline"],["nz-menu-item","",3,"nzSelected","click"],["cvcContext","menu-item",3,"cvcFullWidth","cvcChecked","cvcAttrValue"]],template:function(s,p){1&s&&(e.TgZ(0,"ul",0),e.YNc(1,pc,2,4,"li",1),e.TgZ(2,"li",2)(3,"button",3),e.NdJ("click",function(){return p.cvcOptionChange.next({key:p.cvcColumnKey,value:null})}),e._UZ(4,"span",4),e._uU(5," Reset "),e.qZA()()()),2&s&&(e.xp6(1),e.Q6J("ngForOf",p.cvcFilterOptions),e.xp6(2),e.Q6J("disabled",null===(null==p.cvcOption?null:p.cvcOption.value)))},dependencies:[a.sg,Ie,zo.ix,ue.w,et.dQ,Ia.wO,Ia.r9,de.Ls],styles:[".typeahead-match[_ngcontent-%COMP%]{font-weight:700}.hide-dropdown[_ngcontent-%COMP%]{display:none}[_nghost-%COMP%]     ul li:hover{background-color:#e6f7ff}[_nghost-%COMP%]     ul li.ant-dropdown-menu-item-selected{background-color:#1890ff}[_nghost-%COMP%]     ul li.ant-dropdown-menu-item-selected:active{background-color:#096dd9}"],changeDetection:0}),l})(),zs=(()=>{class l{transform(s){return null!=s&&Array.isArray(s)}}return l.\u0275fac=function(s){return new(s||l)},l.\u0275pipe=e.Yjl({name:"isArray",type:l,pure:!0}),l})(),Aa=(()=>{class l{transform(s,p){return p(s)?s:void 0}}return l.\u0275fac=function(s){return new(s||l)},l.\u0275pipe=e.Yjl({name:"guardType",type:l,pure:!0}),l})();var ls;function c1(l,g){if(1&l&&e._UZ(0,"th",14),2&l){const s=g.ngIf;let p;e.Q6J("nzShowCheckbox",s.checkbox.th.showCheckbox||!1)("nzWidth",s.width)("nzAlign",null!==(p=s.align)&&void 0!==p?p:"left")("nzLeft",s.fixedLeft||!1)("nzRight",s.fixedRight||!1)}}function Xl(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"th",15),e.NdJ("nzSortOrderChange",function(w){const ft=e.CHM(s).ngIf;return e.KtG(ft.sort.changes.next({key:ft.key,value:w}))}),e.ALo(1,"ngrxPush"),e.TgZ(2,"span",16),e._uU(3),e.qZA()()}if(2&l){const s=g.ngIf;let p,w;e.Q6J("nzColumnKey",s.key)("nzAlign",null!==(p=s.align)&&void 0!==p?p:"left")("nzWidth",s.width)("nzLeft",s.fixedLeft||!1)("nzRight",s.fixedRight||!1)("nzShowSort",void 0!==s.sort)("nzSortFn",!0)("nzSortOrder",(null==(w=e.lcZ(1,10,s.sort.changes))?null:w.value)||null),e.xp6(2),e.Q6J("nzTooltipTitle",s.tooltip),e.xp6(1),e.hij(" ",s.label," ")}}function eu(l,g){if(1&l&&(e.TgZ(0,"th",17),e._uU(1),e.qZA()),2&l){const s=g.ngIf;let p;e.Q6J("nzColumnKey",s.key)("nzAlign",null!==(p=s.align)&&void 0!==p?p:"left")("nzWidth",s.width)("nzLeft",s.fixedLeft||!1)("nzRight",s.fixedRight||!1)("nzTooltipTitle",s.tooltip),e.xp6(1),e.hij(" ",s.label," ")}}function l1(l,g){if(1&l&&(e.TgZ(0,"th",17),e._uU(1),e.qZA()),2&l){const s=g.ngIf;let p;e.Q6J("nzColumnKey",s.key)("nzAlign",null!==(p=s.align)&&void 0!==p?p:"left")("nzWidth",s.width)("nzLeft",s.fixedLeft||!1)("nzRight",s.fixedRight||!1)("nzTooltipTitle",s.tooltip),e.xp6(1),e.hij(" ",s.label," ")}}function is(l,g){if(1&l&&(e.ynx(0),e.YNc(1,c1,1,5,"th",11),e.ALo(2,"guardType"),e.YNc(3,Xl,4,12,"th",12),e.ALo(4,"guardType"),e.YNc(5,eu,2,7,"th",13),e.ALo(6,"guardType"),e.YNc(7,l1,2,7,"th",13),e.ALo(8,"guardType"),e.BQk()),2&l){const s=e.oxw().$implicit,p=e.oxw(2);e.xp6(1),e.Q6J("ngIf",e.xi3(2,4,s,p.colGuards.isSelectCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(4,7,s,p.colGuards.isEntityTagCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(6,10,s,p.colGuards.isEnumTagCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(8,13,s,p.colGuards.isTextTagCol))}}function u1(l,g){if(1&l&&(e.ynx(0),e.YNc(1,is,9,16,"ng-container",10),e.BQk()),2&l){const s=g.$implicit;e.xp6(1),e.Q6J("ngIf",!s.hidden)}}function hc(l,g){if(1&l&&(e.TgZ(0,"th",22),e._uU(1," \xa0 "),e.qZA()),2&l){const s=g.ngIf;let p;e.Q6J("nzColumnKey",s.key)("nzAlign",null!==(p=s.align)&&void 0!==p?p:"left")("nzWidth",s.width)("nzLeft",s.fixedLeft||!1)("nzRight",s.fixedRight||!1)}}function fc(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"cvc-table-filter-input",25),e.NdJ("cvcModelChange",function(w){const ft=e.CHM(s).ngIf,vn=e.oxw().ngIf;return e.KtG(ft.changes.next(ft.transform?{key:vn.key,value:ft.transform(w)}:{key:vn.key,value:w}))}),e.qZA()}if(2&l){const s=e.oxw().ngIf;e.Q6J("cvcInputType",s.filter.inputType)("cvcPlaceholder",s.filter.options[0].key)("cvcModel",s.filter.options[0].value)}}function mc(l,g){if(1&l&&(e.TgZ(0,"th",23),e.YNc(1,fc,1,3,"cvc-table-filter-input",24),e.qZA()),2&l){const s=g.ngIf;let p;e.Q6J("nzColumnKey",s.key)("nzWidth",s.width)("nzAlign",null!==(p=s.align)&&void 0!==p?p:"left")("nzLeft",s.fixedLeft||!1)("nzRight",s.fixedRight||!1),e.xp6(1),e.Q6J("ngIf",s.filter)}}function gc(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"th",26,27),e.NdJ("nzSortOrderChange",function(w){const ft=e.CHM(s).ngIf;return e.KtG(ft.sort.changes.next({key:ft.key,value:w}))}),e.ALo(2,"ngrxPush"),e.TgZ(3,"nz-filter-trigger",28,29),e.ALo(5,"ngrxPush"),e._UZ(6,"span",30),e.qZA(),e.TgZ(7,"nz-dropdown-menu",null,31)(9,"cvc-enum-filter-menu",32),e.NdJ("cvcOptionChange",function(w){const ft=e.CHM(s).ngIf,vn=e.MAs(4);return ft.filter.changes.next(w),e.KtG(vn.nzVisible=!1)}),e.ALo(10,"ngrxPush"),e.qZA()()()}if(2&l){const s=g.ngIf,p=e.MAs(8);let w,ze,ft;e.Q6J("nzColumnKey",s.key)("nzWidth",s.width)("nzAlign",null!==(w=s.align)&&void 0!==w?w:"left")("nzLeft",s.fixedLeft||!1)("nzRight",s.fixedRight||!1)("nzShowSort",!0)("nzSortFn",!0)("nzSortOrder",(null==(ze=e.lcZ(2,15,s.sort.changes))?null:ze.value)||null)("nzShowFilter",void 0!==s.filter)("nzFilterFn",!0),e.xp6(3),e.Q6J("nzDropdownMenu",p)("nzActive",null!==(null==(ft=e.lcZ(5,17,s.filter.changes))?null:ft.value)),e.xp6(6),e.Q6J("cvcColumnKey",s.key)("cvcFilterOptions",s.filter.options)("cvcOption",e.lcZ(10,19,s.filter.changes))}}function nl(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"th",33,27)(2,"nz-filter-trigger",28),e.ALo(3,"ngrxPush"),e._UZ(4,"span",34),e.qZA(),e.TgZ(5,"nz-dropdown-menu",null,35)(7,"div",36)(8,"div",37)(9,"cvc-table-filter-input",38),e.NdJ("cvcModelChange",function(w){const ft=e.CHM(s).ngIf;return e.KtG(ft.filter.changes.next({key:ft.key,value:w}))}),e.qZA()()()()()}if(2&l){const s=g.ngIf,p=e.MAs(6);let w,ze;e.Q6J("nzColumnKey",s.key)("nzWidth",s.width)("nzAlign",null!==(w=s.align)&&void 0!==w?w:"left")("nzLeft",s.fixedLeft||!1)("nzRight",s.fixedRight||!1)("nzFilterFn",!0),e.xp6(2),e.Q6J("nzDropdownMenu",p)("nzActive",null!==(null==(ze=e.lcZ(3,10,s.filter.changes))?null:ze.value)),e.xp6(7),e.Q6J("cvcPlaceholder",s.filter.options[0].key)("cvcModel",s.filter.options[0].value)}}function Md(l,g){if(1&l&&(e.ynx(0),e.YNc(1,hc,2,5,"th",18),e.ALo(2,"guardType"),e.YNc(3,mc,2,6,"th",19),e.ALo(4,"guardType"),e.YNc(5,gc,11,21,"th",20),e.ALo(6,"guardType"),e.YNc(7,nl,10,12,"th",21),e.ALo(8,"guardType"),e.BQk()),2&l){const s=e.oxw().$implicit,p=e.oxw(2);e.xp6(1),e.Q6J("ngIf",e.xi3(2,4,s,p.colGuards.isSelectCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(4,7,s,p.colGuards.isEntityTagCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(6,10,s,p.colGuards.isEnumTagCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(8,13,s,p.colGuards.isTextTagCol))}}function d1(l,g){if(1&l&&(e.ynx(0),e.YNc(1,Md,9,16,"ng-container",10),e.BQk()),2&l){const s=g.$implicit;e.xp6(1),e.Q6J("ngIf",!s.hidden)}}function p1(l,g){if(1&l&&(e.TgZ(0,"thead")(1,"tr",7),e.YNc(2,u1,2,1,"ng-container",8),e.qZA(),e.TgZ(3,"tr",9),e.YNc(4,d1,2,1,"ng-container",8),e.qZA()()),2&l){const s=g.ngrxLet;e.xp6(2),e.Q6J("ngForOf",s),e.xp6(2),e.Q6J("ngForOf",s)}}function tu(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"td",43),e.NdJ("nzCheckedChange",function(w){e.CHM(s);const ze=e.oxw(3).$implicit,ft=e.oxw(2);return e.KtG(ft.onRowSelected$.next({id:ze.id,selected:w}))}),e.qZA()}if(2&l){const s=g.ngIf,p=e.oxw(3).$implicit;let w;e.Q6J("nzChecked",p.selected)("nzAlign",null!==(w=s.align)&&void 0!==w?w:"left")("nzLeft",s.fixedLeft||!1)("nzRight",s.fixedRight||!1)}}function nu(l,g){1&l&&e.GkF(0)}const vc=function(l,g,s){return{$implicit:l,config:g,emphasize:s}};function Fa(l,g){if(1&l&&(e.ynx(0),e.YNc(1,nu,1,0,"ng-container",49),e.ALo(2,"isArray"),e.ALo(3,"ngrxPush"),e.BQk()),2&l){const s=e.oxw().ngIf,p=e.oxw().ngIf,w=e.MAs(3),ze=e.MAs(5),ft=e.oxw(3).$implicit;let vn;e.xp6(1),e.Q6J("ngTemplateOutlet",e.lcZ(2,2,ft[s])?w:ze)("ngTemplateOutletContext",e.kEZ(6,vc,ft[s],p,null==(vn=e.lcZ(3,4,p.filter.changes))?null:vn.value))}}function Ts(l,g){if(1&l&&(e.ynx(0),e.YNc(1,Fa,4,10,"ng-container",48),e.BQk()),2&l){const s=g.ngIf;e.oxw();const p=e.MAs(7),w=e.oxw(3).$implicit;e.xp6(1),e.Q6J("ngIf",w[s])("ngIfElse",p)}}const ou=function(l,g,s,p,w){return{tagList:l,tag:g,showPopover:s,status:p,emphasize:w}};function iu(l,g){if(1&l&&(e.ynx(0),e._UZ(1,"cvc-entity-collection-tag",51),e.BQk()),2&l){const s=e.oxw(2),p=s.config,w=s.$implicit,ze=s.emphasize;e.oxw();const ft=e.MAs(5),vn=e.oxw(5);e.xp6(1),e.Q6J("cvcCollectionTagConfig",e.qbA(3,ou,w.slice(p.tag.maxTags,w.length),p.tag,!vn.isScrolling,!0===p.showStatus?w.status:void 0,ze))("cvcTagTemplate",ft)("cvcShowFullLabels",!0)}}function ol(l,g){if(1&l&&(e.ynx(0),e._UZ(1,"cvc-entity-tag-list",50),e.YNc(2,iu,2,9,"ng-container",10),e.BQk()),2&l){const s=e.oxw(),p=s.config,w=s.$implicit,ze=s.emphasize;e.oxw();const ft=e.MAs(5),vn=e.oxw(5);e.xp6(1),e.Q6J("cvcTagTemplate",ft)("cvcTagListConfig",e.qbA(3,ou,w.slice(0,p.tag.maxTags),p.tag,!vn.isScrolling,!0===p.showStatus?w.status:void 0,ze)),e.xp6(1),e.Q6J("ngIf",w.slice(p.tag.maxTags,w.length).length>0)}}function Bs(l,g){if(1&l&&e.YNc(0,ol,3,9,"ng-container",48),2&l){const s=g.$implicit;e.oxw();const p=e.MAs(7);e.Q6J("ngIf",s.length>0)("ngIfElse",p)}}function ru(l,g){if(1&l&&e._UZ(0,"cvc-entity-tag",52),2&l){const s=g.$implicit,p=g.config,w=g.emphasize,ze=e.oxw(6);let ft;e.Q6J("cvcTruncateLabel",null==p.tag?null:p.tag.truncateLabel)("cvcLinkableEntity",s)("cvcEmphasize",w)("cvcShowPopover",!ze.isScrolling)("cvcStatus",!0===p.showStatus?s.status:void 0)("cvcFullWidth",null!==(ft=null==p.tag?null:p.tag.fullWidth)&&void 0!==ft&&ft)}}function il(l,g){if(1&l&&e._UZ(0,"cvc-empty-value",53),2&l){const s=e.oxw().ngIf;e.Q6J("cvcEmptyCategory",s.emptyValueCategory||"not-applicable")}}function _c(l,g){if(1&l&&(e.TgZ(0,"td",44),e.YNc(1,Ts,2,2,"ng-container",10),e.YNc(2,Bs,1,2,"ng-template",null,45,e.W1O),e.YNc(4,ru,1,6,"ng-template",null,46,e.W1O),e.YNc(6,il,1,1,"ng-template",null,47,e.W1O),e.qZA()),2&l){const s=g.ngIf;let p;e.Q6J("nzAlign",null!==(p=s.align)&&void 0!==p?p:"left")("nzLeft",s.fixedLeft||!1)("nzRight",s.fixedRight||!1),e.xp6(1),e.Q6J("ngIf",s.context||s.key)}}function su(l,g){if(1&l&&(e._UZ(0,"cvc-attribute-tag",56),e.ALo(1,"evidenceEnumDisplay")),2&l){const s=e.oxw().ngIf,p=e.oxw(3).$implicit,w=e.oxw(2);e.Q6J("cvcFullWidth",!0)("cvcAttrValue",p[s.key])("cvcTooltip",e.lcZ(1,3,!w.isScrolling&&p[s.key]))}}function rl(l,g){if(1&l&&e._UZ(0,"cvc-empty-value",57),2&l){const s=e.oxw().ngIf;e.Q6J("cvcEmptyCategory",s.emptyValueCategory||"unspecified")}}function yc(l,g){if(1&l&&(e.TgZ(0,"td",44),e.YNc(1,su,2,5,"cvc-attribute-tag",54),e.YNc(2,rl,1,1,"ng-template",null,55,e.W1O),e.qZA()),2&l){const s=g.ngIf,p=e.MAs(3),w=e.oxw(3).$implicit;let ze;e.Q6J("nzAlign",null!==(ze=s.align)&&void 0!==ze?ze:"left")("nzLeft",s.fixedLeft||!1)("nzRight",s.fixedRight||!1),e.xp6(1),e.Q6J("ngIf",w[s.key])("ngIfElse",p)}}function Hs(l,g){if(1&l&&(e.TgZ(0,"nz-tag",60),e._UZ(1,"span",61),e.qZA()),2&l){const s=e.oxw().ngIf,p=e.oxw(3).$implicit;e.Q6J("nzTooltipTitle",p[s.key])}}function Ys(l,g){if(1&l&&e._UZ(0,"cvc-empty-value",53),2&l){const s=e.oxw().ngIf;e.Q6J("cvcEmptyCategory",s.emptyValueCategory||"unspecified")}}function $s(l,g){if(1&l&&(e.TgZ(0,"td",44),e.YNc(1,Hs,2,1,"nz-tag",58),e.YNc(2,Ys,1,1,"ng-template",null,59,e.W1O),e.qZA()),2&l){const s=g.ngIf,p=e.MAs(3),w=e.oxw(3).$implicit;let ze;e.Q6J("nzAlign",null!==(ze=s.align)&&void 0!==ze?ze:"left")("nzLeft",s.fixedLeft||!1)("nzRight",s.fixedRight||!1),e.xp6(1),e.Q6J("ngIf",w[s.key])("ngIfElse",p)}}function sl(l,g){if(1&l&&(e.ynx(0),e.YNc(1,tu,1,4,"td",41),e.ALo(2,"guardType"),e.YNc(3,_c,8,4,"td",42),e.ALo(4,"guardType"),e.YNc(5,yc,4,5,"td",42),e.ALo(6,"guardType"),e.YNc(7,$s,4,5,"td",42),e.ALo(8,"guardType"),e.BQk()),2&l){const s=e.oxw().$implicit,p=e.oxw(3);e.xp6(1),e.Q6J("ngIf",e.xi3(2,4,s,p.colGuards.isSelectCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(4,7,s,p.colGuards.isEntityTagCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(6,10,s,p.colGuards.isEnumTagCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(8,13,s,p.colGuards.isTextTagCol))}}function Cc(l,g){if(1&l&&(e.ynx(0),e.YNc(1,sl,9,16,"ng-container",10),e.BQk()),2&l){const s=g.$implicit;e.xp6(1),e.Q6J("ngIf",!s.hidden)}}function sa(l,g){if(1&l&&(e.TgZ(0,"tr",40),e.YNc(1,Cc,2,1,"ng-container",8),e.qZA()),2&l){const s=e.oxw().ngrxLet;e.xp6(1),e.Q6J("ngForOf",s)}}function h1(l,g){1&l&&(e.TgZ(0,"tbody"),e.YNc(1,sa,2,1,"ng-template",39),e.qZA())}function au(l,g){1&l&&e._UZ(0,"span",69)}function f1(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"span",70),e.NdJ("click",function(){e.CHM(s),e.oxw(2);const w=e.MAs(3),ze=e.oxw().filter;return w.value="",e.KtG(ze.changes.next({key:ze.key,value:null}))}),e.qZA()}}function m1(l,g){if(1&l&&(e.YNc(0,au,1,0,"span",67),e.YNc(1,f1,1,0,"span",68)),2&l){e.oxw();const s=e.MAs(3);e.Q6J("ngIf",!s.value),e.xp6(1),e.Q6J("ngIf",s.value)}}function g1(l,g){if(1&l){const s=e.EpF();e.ynx(0),e.TgZ(1,"nz-input-group",63)(2,"input",64,65),e.NdJ("nzFilterChange",function(w){e.CHM(s);const ze=e.oxw().filter;return e.KtG(ze.changes.next({key:ze.key,value:w}))}),e.qZA()(),e.YNc(4,m1,2,2,"ng-template",null,66,e.W1O),e.BQk()}if(2&l){const s=e.MAs(5),p=e.oxw().filter;e.xp6(1),e.Q6J("nzSuffix",s),e.xp6(1),e.Q6J("placeholder",p.placeholder)("ngModel",p.defaultValue)}}function v1(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"nz-input-number-group",71)(1,"nz-input-number",72,65),e.NdJ("ngModelChange",function(w){e.CHM(s);const ze=e.oxw().filter;return e.KtG(ze.changes.next({key:ze.key,value:w}))}),e.qZA()()}if(2&l){const s=e.oxw().filter;e.xp6(1),e.Q6J("nzPlaceHolder",s.placeholder)("ngModel",s.defaultValue)("nzMin",1)("nzStep",1)}}function _1(l,g){if(1&l&&(e.YNc(0,g1,6,3,"ng-container",48),e.YNc(1,v1,3,4,"ng-template",null,62,e.W1O)),2&l){const s=g.filter,p=e.MAs(2);e.Q6J("ngIf",void 0===s.inputType||"default"===s.inputType)("ngIfElse",p)}}const y1=function(){return[6,6]};function aa(l,g){1&l&&(e.TgZ(0,"nz-row",73)(1,"nz-col")(2,"span"),e._uU(3,"Use checkboxes to select or deselect EIDs"),e.qZA()()()),2&l&&e.Q6J("nzGutter",e.DdM(1,y1))}function C1(l,g){1&l&&(e.TgZ(0,"nz-tag",84),e._UZ(1,"i",85),e.TgZ(2,"span"),e._uU(3,"Loading\u2026"),e.qZA()())}const cu=function(l){return{$implicit:l}};function Ui(l,g){if(1&l&&(e.TgZ(0,"nz-tag",88),e._UZ(1,"span",89),e.TgZ(2,"span",90),e._uU(3),e.qZA()()),2&l){e.oxw();const s=e.MAs(4),p=e.oxw().ngrxLet;e.xp6(2),e.Q6J("nzTooltipTitle",s)("nzTooltipTitleContext",e.VKq(3,cu,p.query)),e.xp6(1),e.hij(" Query Error",p.query.length>1?"s":""," ")}}function al(l,g){if(1&l&&(e.TgZ(0,"nz-tag",88)(1,"span",90)(2,"span",91)(3,"strong"),e._uU(4),e.qZA()()()()),2&l){e.oxw();const s=e.MAs(4),p=e.oxw().ngrxLet;e.xp6(1),e.Q6J("nzTooltipTitle",s)("nzTooltipTitleContext",e.VKq(3,cu,p.network)),e.xp6(3),e.hij(" Network Error",p.query.length>1?"s":""," ")}}function ca(l,g){if(1&l&&(e.TgZ(0,"div"),e._uU(1),e.qZA()),2&l){const s=g.$implicit;e.xp6(1),e.hij(" ",s.message," ")}}function lu(l,g){1&l&&e.YNc(0,ca,2,1,"div",8),2&l&&e.Q6J("ngForOf",g.$implicit)}function Ir(l,g){if(1&l&&(e.ynx(0),e.YNc(1,Ui,4,5,"nz-tag",86),e.YNc(2,al,5,5,"nz-tag",86),e.YNc(3,lu,1,1,"ng-template",null,87,e.W1O),e.BQk()),2&l){const s=e.oxw().ngrxLet;e.xp6(1),e.Q6J("ngIf",s.query),e.xp6(1),e.Q6J("ngIf",s.network)}}function la(l,g){if(1&l&&(e.ynx(0),e.YNc(1,Ir,5,2,"ng-container",10),e.BQk()),2&l){const s=g.ngrxLet;e.xp6(1),e.Q6J("ngIf",s)}}function cl(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"div",92)(1,"nz-checkbox-group",93),e.NdJ("ngModelChange",function(w){e.CHM(s);const ze=e.oxw(2);return e.KtG(ze.onPreferenceChange$.next(w))}),e.ALo(2,"ngrxPush"),e.qZA()()}if(2&l){const s=e.oxw(2);e.xp6(1),e.Q6J("ngModel",e.lcZ(2,1,s.setPreference$))}}function Na(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"nz-row",73)(1,"nz-col",74),e.YNc(2,C1,4,0,"nz-tag",75),e.ALo(3,"ngrxPush"),e.ALo(4,"ngrxPush"),e._UZ(5,"cvc-no-more-rows",76),e.ALo(6,"ngrxPush"),e.qZA(),e.TgZ(7,"nz-col",74),e.YNc(8,la,2,1,"ng-container",3),e.qZA(),e.TgZ(9,"nz-col",74),e._UZ(10,"cvc-table-counts2",77),e.qZA(),e.TgZ(11,"nz-col",78)(12,"nz-button-group")(13,"button",79),e.NdJ("click",function(){e.CHM(s);const w=e.oxw();return e.KtG(w.onResetFilter$.next())}),e._UZ(14,"span",80),e.qZA(),e.TgZ(15,"button",81),e._UZ(16,"span",82),e.qZA()(),e.YNc(17,cl,3,3,"ng-template",null,83,e.W1O),e.qZA()()}if(2&l){const s=e.MAs(18),p=e.oxw();e.Q6J("nzGutter",8),e.xp6(2),e.Q6J("ngIf",e.lcZ(3,7,p.loading$)&&e.lcZ(4,9,p.isFetchMore$)),e.xp6(3),e.Q6J("cvcShowTag",e.lcZ(6,11,p.noMoreRows$)),e.xp6(3),e.Q6J("ngrxLet",p.queryError$),e.xp6(2),e.Q6J("cvcTableCountsConnection",p.connection$),e.xp6(5),e.Q6J("nzPopoverContent",s)("nzPopoverTrigger","click")}}const ua=function(){return[]},uu=function(){return{x:"800px",y:"200px"}};let ll=((ls=class{constructor(g,s,p){this.queryGQL=g,this.apollo=s,this.cdr=p,this.cvcSelectedIdsChange=new e.vpe,this.isScrolling=!1,this.colGuards=wa,this.onFetchMore$=new E.x,this.onPreferenceChange$=new Be.X([]),this.onResetFilter$=new E.x,this.onRowSelected$=new E.x,this.onScroll$=new Be.X("stop"),this.onSetSelectedRow$=new Be.X(new Set),this.queryError$=new E.x,this.queryRequest$=new E.x,this.queryResult$=new Qi.t(1),this.isFetchMore$=new Be.X(!1),this.noMoreRows$=new Be.X(!1),this.scrollToIndex$=new E.x,this.tableConfig=new ee;const w=(0,Io.a)(this.tableConfig.getFilterStreams()),ze=(0,Io.a)(this.tableConfig.getSortStreams()).pipe((0,yt.h)(ft=>ft.filter(vn=>null!==vn.value).length<=1));this.refetch$=(0,Io.a)([ze,w]).pipe((0,S.U)(([ft,vn])=>({query:"refetch",sort:ft,filter:vn}))),this.fetchMore$=this.onFetchMore$.pipe((0,S.U)(ft=>({query:"fetchMore",fetchMore:{...ft}}))),(0,G.T)(this.refetch$,this.fetchMore$).pipe((0,Cs.b)(50),(0,zn.t)(this)).subscribe(ft=>{const vn=this.getQueryVars(ft);this.queryRef?(this.queryError$.next({}),"refetch"===ft.query?(this.isFetchMore$.next(!1),this.queryRef.refetch(vn).then(Sn=>{(Sn.error||Sn.errors)&&this.queryError$.next(this.getRequestErrors(Sn))}).then(()=>{this.scrollToIndex$.next(0)})):(this.isFetchMore$.next(!0),this.queryRef.fetchMore({variables:vn}).then(Sn=>{(Sn.error||Sn.errors)&&this.queryError$.next(this.getRequestErrors(Sn))}))):(this.isFetchMore$.next(!1),this.queryError$.next({}),this.queryRef=this.queryGQL.watch(vn),this.queryRef.valueChanges.pipe((0,zn.t)(this)).subscribe(Sn=>{this.queryResult$.next(Sn),(Sn.error||Sn.errors)&&this.queryError$.next(this.getRequestErrors(Sn))}))}),this.loading$=this.queryResult$.pipe((0,ai.j)("loading"),(0,Te.x)()),this.connection$=this.queryResult$.pipe((0,ai.j)("data","evidenceItems"),(0,yt.h)(ko.ep)),this.pageInfo$=this.connection$.pipe((0,ai.j)("pageInfo"),(0,yt.h)(ko.ep)),this.row$=(0,Io.a)([this.connection$.pipe((0,ai.j)("edges"),(0,yt.h)(ko.ep),(0,S.U)(ft=>ft.map(vn=>vn.node))),this.onSetSelectedRow$]).pipe((0,S.U)(([ft,vn])=>ft.map(Sn=>{if(Sn)return{...Sn,evidenceItem:{__typename:"EvidenceItem",id:Sn.id,name:Sn.name,link:Sn.link,status:Sn.status},selected:vn.has(Sn.id)}}))),this.col$=new Be.X(this.tableConfig.get()),this.setPreference$=this.col$.pipe((0,S.U)(ft=>this.getColPrefsFromTableConfig(ft))),this.onPreferenceChange$.pipe((0,ni.M)(this.col$),(0,S.U)(([ft,vn])=>this.getTableConfigFromColPrefs(ft,vn)),(0,zn.t)(this)).subscribe(ft=>{this.col$.next(ft)}),this.onSetTableFilter$=new Be.X([]),this.onSetTableFilter$.pipe((0,zn.t)(this)).subscribe(ft=>{const vn=this.col$.getValue();ft.forEach(Sn=>{const Co=vn.find(mi=>mi.key===Sn.key);if(void 0!==Co.filter.inputType){const mi=Co.filter.options[0];if(null===Sn.value)return Co.filter.options=[{...mi,value:null}],void Co.filter.changes.next(Sn);if(Array.isArray(Sn.value)&&0===Sn.value.length)return Co.filter.options=[{...mi,value:null}],void Co.filter.changes.next({...Sn,value:null});let Ii;Array.isArray(Sn.value)?Sn.value.length>0&&(Ii=Sn.value[0]):Ii=Sn.value;const ba=Co.filter.typename;if(!ba||!Ii)return void console.error(`evidence-manager requires column config '${Co.key}' provide a typename for cvcTablePrefs Input to set its filter`);const ec=this.getEntityName(ba,Ii);if(!ec)return;Co.filter.options=[{...mi,value:ec}],Co.filter.changes.next({...Sn,value:ec})}else ks(Co)&&Co.filter.changes.next(Sn)})}),this.onSetTablePref$=new Be.X([]),this.onSetTablePref$.pipe((0,ni.M)(this.setPreference$),(0,S.U)(([ft,vn])=>{const Sn=[];return ft.forEach(Co=>{let mi=vn.find(Ii=>Ii.value===Co.value);mi?Sn.push({...mi,...Co}):console.warn(`evidence-manager onSetTablePref$ received updated preferences for column '${Co.value}', but a column with that key could not be found.`)}),Sn}),(0,zn.t)(this)).subscribe(ft=>{this.onPreferenceChange$.next(ft)}),this.onRowSelected$.pipe((0,ni.M)(this.onSetSelectedRow$),(0,zn.t)(this)).subscribe(([ft,vn])=>{ft.selected?vn.add(ft.id):vn.delete(ft.id),this.onSetSelectedRow$.next(vn),this.cvcSelectedIdsChange.next(Array.from(vn))}),this.onScroll$.pipe((0,S.U)(ft=>"stop"!==ft),(0,Te.x)(),(0,zn.t)(this)).subscribe(ft=>{this.isScrolling=ft,this.cdr.detectChanges()}),this.onScroll$.pipe((0,yt.h)(ft=>"bottom"===ft),(0,ni.M)(this.pageInfo$),(0,S.U)(([ft,vn])=>vn),(0,zn.t)(this)).subscribe(ft=>{ft.hasNextPage||(this.noMoreRows$.next(!0),this.cdr.detectChanges(),setInterval(()=>this.noMoreRows$.next(!1)))})}ngAfterViewInit(){this.onResetFilter$.pipe((0,ni.M)((0,Bi.of)(this.tableConfig.get())),(0,zn.t)(this)).subscribe(([g,s])=>{const p=[];s.forEach(w=>{if(Pa(w)&&w.sort.changes&&w.sort.changes.next({key:w.key,value:w.sort.default??null}),ks(w)){const ze=w.filter.options.find(ft=>1==ft.byDefault)?.value;w.filter.changes&&w.filter.changes.next({key:w.key,value:ze||null})}p.push(w)}),this.col$.next(p)})}getQueryVars(g){const s=this.getQueryFilterParams(g);return{...this.getQuerySortParams(g),...s,...g.fetchMore}}getQuerySortParams(g){if(!g.sort)return;const p=g.sort.find(ze=>null!==ze.value);return p?{sortBy:{column:this.getSortColumnFromColKey(p.key),direction:"ascend"===p.value?Nn.SrV.Asc:Nn.SrV.Desc||void 0}}:void 0}getQueryFilterParams(g){let s={};return g.filter&&g.filter.forEach(p=>{s[qc[p.key]||p.key]=null===p.value||""===p.value?void 0:p.value}),s}getRequestErrors(g){return{query:g.errors,network:g.error}}getTableConfigFromColPrefs(g,s){return s.forEach(p=>{if(Y.find(ze=>ze===p.key))return;const w=g.find(ze=>ze.value===p.key);w&&(p.hidden=!w?.checked)}),[...s]}getColPrefsFromTableConfig(g){let s=[];return g.forEach(p=>{Y.find(w=>w===p.key)||s.push({label:p.tooltip||p.label,value:p.key,checked:!p.hidden})}),s}getSortColumnFromColKey(g){return Wl[g]}getEntityName(g,s){const p={id:`${g}:${s}`,fragment:ac.Ps`
                fragment Linkable${g}Entity on ${g} {
                  id
                  name
                  link
                }`},w=this.apollo.client.readFragment(p);if(w)return w.name;console.error(`evidence-manager onSetTableFilter$ could not find cached entity ${g}:${s} to populate input filter`)}trackByIndex(g,s){return s?.id}ngOnChanges(g){if(g.cvcTableSettings){const s=g.cvcTableSettings.currentValue;void 0!==s&&this.onSetTableFilter$.next(s.filters)}if(g.cvcSelectedIds){const s=g.cvcSelectedIds.currentValue,p=new Set;void 0!==s&&s.forEach(w=>p.add(w)),this.onSetSelectedRow$.next(p)}}}).\u0275fac=function(g){return new(g||ls)(e.Y36(Nn.EH_),e.Y36(Pr._M),e.Y36(e.sBO))},ls.\u0275cmp=e.Xpm({type:ls,selectors:[["cvc-evidence-manager"]],inputs:{cvcTableSettings:"cvcTableSettings",cvcSelectedIds:"cvcSelectedIds"},outputs:{cvcSelectedIdsChange:"cvcSelectedIdsChange"},features:[e.TTD],decls:16,vars:27,consts:[["nzSize","small",3,"nzTitle","nzExtra"],["cvcTableScroller","",3,"nzData","cvcTableScrollerQueryRef","cvcTableScrollerPageInfo","cvcTableScrollerToIndex","nzScroll","nzVirtualForTrackBy","nzVirtualItemSize","nzSize","nzFrontPagination","nzShowPagination","nzLoading","cvcTableScrollerOnScroll","cvcTableScrollerOnFetch"],["virtualTable",""],[4,"ngrxLet"],["columnFilterInput",""],["cardTitle",""],["extraTemplate",""],[1,"col-header-row"],[4,"ngFor","ngForOf"],[1,"filter-row"],[4,"ngIf"],[3,"nzShowCheckbox","nzWidth","nzAlign","nzLeft","nzRight",4,"ngIf"],[3,"nzColumnKey","nzAlign","nzWidth","nzLeft","nzRight","nzShowSort","nzSortFn","nzSortOrder","nzSortOrderChange",4,"ngIf"],["nz-tooltip","",3,"nzColumnKey","nzAlign","nzWidth","nzLeft","nzRight","nzTooltipTitle",4,"ngIf"],[3,"nzShowCheckbox","nzWidth","nzAlign","nzLeft","nzRight"],[3,"nzColumnKey","nzAlign","nzWidth","nzLeft","nzRight","nzShowSort","nzSortFn","nzSortOrder","nzSortOrderChange"],["nz-tooltip","",1,"col-header-label",3,"nzTooltipTitle"],["nz-tooltip","",3,"nzColumnKey","nzAlign","nzWidth","nzLeft","nzRight","nzTooltipTitle"],[3,"nzColumnKey","nzAlign","nzWidth","nzLeft","nzRight",4,"ngIf"],[3,"nzColumnKey","nzWidth","nzAlign","nzLeft","nzRight",4,"ngIf"],["class","attribute-filter","nzCustomFilter","",3,"nzColumnKey","nzWidth","nzAlign","nzLeft","nzRight","nzShowSort","nzSortFn","nzSortOrder","nzShowFilter","nzFilterFn","nzSortOrderChange",4,"ngIf"],["class","attribute-filter","nzCustomFilter","",3,"nzColumnKey","nzWidth","nzAlign","nzLeft","nzRight","nzFilterFn",4,"ngIf"],[3,"nzColumnKey","nzAlign","nzWidth","nzLeft","nzRight"],[3,"nzColumnKey","nzWidth","nzAlign","nzLeft","nzRight"],[3,"cvcInputType","cvcPlaceholder","cvcModel","cvcModelChange",4,"ngIf"],[3,"cvcInputType","cvcPlaceholder","cvcModel","cvcModelChange"],["nzCustomFilter","",1,"attribute-filter",3,"nzColumnKey","nzWidth","nzAlign","nzLeft","nzRight","nzShowSort","nzSortFn","nzSortOrder","nzShowFilter","nzFilterFn","nzSortOrderChange"],["enumTableFilter",""],[3,"nzDropdownMenu","nzActive"],["enumTagFilterTrigger",""],["nz-icon","","nzType","filter","nzTheme","fill"],["enumFilterMenu","nzDropdownMenu"],[3,"cvcColumnKey","cvcFilterOptions","cvcOption","cvcOptionChange"],["nzCustomFilter","",1,"attribute-filter",3,"nzColumnKey","nzWidth","nzAlign","nzLeft","nzRight","nzFilterFn"],["nz-icon","","nzType","search"],["textTagFilterMenu","nzDropdownMenu"],[1,"ant-table-filter-dropdown"],[1,"custom-input-dropdown"],[3,"cvcPlaceholder","cvcModel","cvcModelChange"],["nz-virtual-scroll",""],[1,"data-row"],[3,"nzChecked","nzAlign","nzLeft","nzRight","nzCheckedChange",4,"ngIf"],[3,"nzAlign","nzLeft","nzRight",4,"ngIf"],[3,"nzChecked","nzAlign","nzLeft","nzRight","nzCheckedChange"],[3,"nzAlign","nzLeft","nzRight"],["entityTagList",""],["entityTag",""],["emptyEntityTagCell",""],[4,"ngIf","ngIfElse"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"cvcTagTemplate","cvcTagListConfig"],[3,"cvcCollectionTagConfig","cvcTagTemplate","cvcShowFullLabels"],[3,"cvcTruncateLabel","cvcLinkableEntity","cvcEmphasize","cvcShowPopover","cvcStatus","cvcFullWidth"],[3,"cvcEmptyCategory"],["cvcContext","compact",3,"cvcFullWidth","cvcAttrValue","cvcTooltip",4,"ngIf","ngIfElse"],["emptyEnumTagCell",""],["cvcContext","compact",3,"cvcFullWidth","cvcAttrValue","cvcTooltip"],["cvcDisplayMode","small",3,"cvcEmptyCategory"],["nz-tooltip","","style","width: 100%; cursor: help; color: #595959",3,"nzTooltipTitle",4,"ngIf","ngIfElse"],["emptyTextTagCell",""],["nz-tooltip","",2,"width","100%","cursor","help","color","#595959",3,"nzTooltipTitle"],["nz-icon","","nzType","align-left","nzTheme","outline"],["numericInput",""],["nzSize","small",3,"nzSuffix"],["nz-input","",3,"placeholder","ngModel","nzFilterChange"],["filterInput",""],["suffixIcon",""],["nz-icon","","nzType","search","style","color: #ddd",4,"ngIf"],["nz-icon","","class","ant-input-clear-icon","nzTheme","fill","nzType","close-circle",3,"click",4,"ngIf"],["nz-icon","","nzType","search",2,"color","#ddd"],["nz-icon","","nzTheme","fill","nzType","close-circle",1,"ant-input-clear-icon",3,"click"],["nzSize","small"],[2,"width","100%",3,"nzPlaceHolder","ngModel","nzMin","nzStep","ngModelChange"],[3,"nzGutter"],["nzFlex","auto"],["nzColor","processing",4,"ngIf"],[3,"cvcShowTag"],[3,"cvcTableCountsConnection"],["nzFlex","35px"],["nz-button","","type","button","nzType","default","nzSize","small",3,"click"],["nz-icon","","nzType","retweet","nzTheme","outline"],["nz-button","","nz-popover","","nzPopoverTitle","Visible Columns","type","button","nzType","default","nzSize","small",3,"nzPopoverContent","nzPopoverTrigger"],["nz-icon","","nzType","setting","nzTheme","outline"],["prefsPopover",""],["nzColor","processing"],["nz-icon","","nzType","sync","nzSpin",""],["nzColor","error","style","margin-left: 12px",4,"ngIf"],["queryError",""],["nzColor","error",2,"margin-left","12px"],["nz-icon","","nzType","question-circle","nzTheme","outline"],["nz-tooltip","",2,"cursor","help",3,"nzTooltipTitle","nzTooltipTitleContext"],["nz-typography",""],[1,"prefs-popover"],[3,"ngModel","ngModelChange"]],template:function(g,s){if(1&g&&(e.TgZ(0,"nz-card",0)(1,"nz-table",1,2),e.NdJ("cvcTableScrollerOnScroll",function(w){return s.onScroll$.next(w)})("cvcTableScrollerOnFetch",function(w){return s.onFetchMore$.next(w)}),e.ALo(3,"ngrxPush"),e.ALo(4,"ngrxPush"),e.ALo(5,"ngrxPush"),e.ALo(6,"ngrxPush"),e.ALo(7,"ngrxPush"),e.YNc(8,p1,5,2,"thead",3),e.YNc(9,h1,2,0,"tbody",3),e.qZA()(),e.YNc(10,_1,3,2,"ng-template",null,4,e.W1O),e.YNc(12,aa,4,2,"ng-template",null,5,e.W1O),e.YNc(14,Na,19,13,"ng-template",null,6,e.W1O)),2&g){const p=e.MAs(13),w=e.MAs(15);e.Q6J("nzTitle",p)("nzExtra",w),e.xp6(1),e.Q6J("nzData",e.lcZ(3,15,s.row$)||e.DdM(25,ua))("cvcTableScrollerQueryRef",s.queryRef)("cvcTableScrollerPageInfo",e.lcZ(4,17,s.pageInfo$))("cvcTableScrollerToIndex",e.lcZ(5,19,s.scrollToIndex$))("nzScroll",e.DdM(26,uu))("nzVirtualForTrackBy",s.trackByIndex)("nzVirtualItemSize",28)("nzSize","small")("nzFrontPagination",!1)("nzShowPagination",!1)("nzLoading",e.lcZ(6,21,s.loading$)&&!e.lcZ(7,23,s.isFetchMore$)),e.xp6(7),e.Q6J("ngrxLet",s.col$),e.xp6(1),e.Q6J("ngrxLet",s.col$)}},dependencies:[a.sg,a.O5,a.tP,Ie,D.P,br,nn,Qt.J,Xc.H,el,t.Fj,t.JJ,t.On,lo.eJ,zo.ix,zo.fY,ue.w,et.dQ,Vi.bd,ye.ub,Br.RR,R.t3,R.SK,de.Ls,A.Zp,A.gB,A.ke,lt,ie,Wo.lU,Qo.N8,Qo.qD,Qo.Uo,Qo._C,Qo.h7,Qo.Om,Qo.p0,Qo.$Z,Qo.zu,Qo.qn,Qo.Ql,Qo.UX,Qo.g6,An.j,eo.SY,X.ZU,Kl,Td,ql,zs,ts.Do,Aa,lo.fM],styles:["[_nghost-%COMP%]{display:block}nz-card[_ngcontent-%COMP%]:first-of-type     .ant-card-body{padding:0;margin-top:1px}.table-info[_ngcontent-%COMP%]{margin-left:.5rem}tr.col-header-row[_ngcontent-%COMP%]   th.ant-table-cell[_ngcontent-%COMP%]{white-space:nowrap}tr.col-header-row[_ngcontent-%COMP%]   th.ant-table-cell.align-right[_ngcontent-%COMP%]     .ant-table-column-title{text-align:right}tr.filter-row[_ngcontent-%COMP%]   th.ant-table-cell[_ngcontent-%COMP%]{padding:3px 4px}tr.filter-row[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   nz-filter-trigger[_ngcontent-%COMP%]     span.ant-dropdown-trigger{margin-left:0;padding-right:12px}tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell[_ngcontent-%COMP%]{white-space:nowrap}tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell[_ngcontent-%COMP%]   .anticon.attribute-icon[_ngcontent-%COMP%]{color:#595959}tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell.overflow-ellipsis[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis}tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell.button-cell[_ngcontent-%COMP%]{padding:0}tr.data-row[_ngcontent-%COMP%]   td.align-right[_ngcontent-%COMP%], tr.col-header-row[_ngcontent-%COMP%]   th.ant-table-cell[_ngcontent-%COMP%]   .align-right[_ngcontent-%COMP%], tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell[_ngcontent-%COMP%]   .align-right[_ngcontent-%COMP%], tr.filter-row[_ngcontent-%COMP%]   th.ant-table-cell[_ngcontent-%COMP%]   .align-right[_ngcontent-%COMP%]{text-align:right}tr.data-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-of-type{padding-left:6px}tr.data-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-of-type   cvc-entity-tag[_ngcontent-%COMP%]{margin-left:6px}.ant-table-filter-dropdown[_ngcontent-%COMP%]{padding:8px}.prefs-popover[_ngcontent-%COMP%]     nz-checkbox-group:first-of-type label{display:block}.prefs-popover[_ngcontent-%COMP%]     nz-checkbox-group:first-of-type label span{display:inline-block}"],changeDetection:0}),ls);ll=(0,U.gn)([(0,zn.c)()],ll);const ul=["optionTemplates"];function z1(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"nz-col",9)(1,"cvc-evidence-manager",10),e.NdJ("cvcSelectedIdsChange",function(w){e.CHM(s);const ze=e.oxw();return e.KtG(ze.onPopulate$.next(w))}),e.ALo(2,"ngrxPush"),e.ALo(3,"ngrxPush"),e.qZA()()}if(2&l){const s=e.oxw();e.xp6(1),e.Q6J("cvcSelectedIds",e.lcZ(2,2,s.onEid$))("cvcTableSettings",e.lcZ(3,4,s.tableSettingsChange$))}}function Sr(l,g){if(1&l&&e._UZ(0,"cvc-entity-tag",13),2&l){const s=e.oxw().$implicit,p=e.oxw().ngrxLet;e.Q6J("cvcDisableLink",!0)("cvcCacheId",s.__typename+":"+s.id)("cvcEmphasize",p)}}function zc(l,g){1&l&&(e.ynx(0),e.YNc(1,Sr,1,3,"ng-template",null,12,e.W1O),e.BQk())}function Ms(l,g){if(1&l&&(e.ynx(0),e.YNc(1,zc,3,0,"ng-container",11),e.ALo(2,"ngrxPush"),e.BQk()),2&l){const s=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,s.result$))}}function bd(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"div",14)(1,"cvc-entity-tag",15),e.NdJ("cvcOnClose",function(){const ze=e.CHM(s).$implicit,ft=e.oxw();return e.KtG(ft.onTagClose$.next(ze.nzValue))}),e.qZA()()}if(2&l){const s=g.$implicit,p=e.oxw();e.xp6(1),e.Q6J("cvcCacheId","EvidenceItem:"+s.nzValue)("cvcContext",p.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",p.props.isMultiSelect?"default":"closeable")}}const dl=function(){return[6,6]},du=function(l,g){return{show:l,hide:g}},pu=To(Lo(),Fo());let pl=(()=>{class l extends pu{constructor(s,p,w,ze){super(),this.taq=s,this.tq=p,this.changeDetectorRef=w,this.apollo=ze,this.synchronizedFields$=[],this.synchronizedRequired$=[],this.defaultOptions={props:{label:"Evidence Items",placeholder:"Select Evidence Items",isMultiSelect:!0,description:"Select Evidence by ID, or use the manager to select with filtering",entityName:{singular:"Evidence Item",plural:"Evidence Items"},minSearchStrLength:1}},this.synchronizedFieldToColMap=new Map([["molecularProfileId","molecularProfile"],["diseaseId","disease"],["therapyIds","therapies"]]),this.requiredFieldToColMap=new Map([["disease","requiresDisease$"],["therapies","requiresTherapy$"]]),this.onEid$=new Qi.t,this.onShowMgrClick$=new E.x,this.showMgr$=this.onShowMgrClick$.pipe((0,wr.R)((ft,vn)=>!ft,!1))}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEntitySelectField({typeaheadQuery:this.taq,tagQuery:this.tq,getTypeaheadVarsFn:this.getTypeaheadVarsFn,getTypeaheadResultsFn:this.getTypeaheadResultsFn,getTagQueryVarsFn:this.getTagQueryVarsFn,getTagQueryResultsFn:this.getTagQueryResultsFn,getSelectedItemOptionFn:this.getSelectedItemOptionFn,getSelectOptionsFn:this.getSelectOptionsFn,changeDetectorRef:this.changeDetectorRef,selectOpen$:this.selectOpen$,selectComponent:this.selectComponent}),this.onEid$.pipe((0,sc._)("evidence-select onEid$"),(0,zn.t)(this)).subscribe(),void 0!==this.formControl.value&&0!==this.formControl.value.length&&this.onEid$.next(this.formControl.value),this.onValueChange$.pipe((0,ni.M)(this.onEid$),(0,zn.t)(this)).subscribe(([s,p])=>{Array.isArray(s)&&this.onEid$.next(s)})}configureStateConnections(){this.state&&(this.synchronizedFieldToColMap.forEach((s,p)=>{const w=this.state.fields[`${p}$`];w&&this.synchronizedFields$.push(w.pipe((0,S.U)(ze=>({key:p,value:ze??null}))))}),this.requiredFieldToColMap.forEach((s,p)=>{const w=this.state.requires[s];w&&this.synchronizedRequired$.push(w.pipe((0,S.U)(ze=>({key:p,required:ze}))))}),this.onFieldsChange$=(0,Io.a)(this.synchronizedFields$).pipe((0,S.U)(s=>{const p=[];return s.forEach(w=>{const ze=this.synchronizedFieldToColMap.get(w.key);ze&&p.push({key:ze,value:w.value})}),p})),this.onRequiredChange$=(0,Io.a)(this.synchronizedRequired$).pipe((0,S.U)(s=>{const p=[];return s.forEach(w=>{p.push({value:w.key,checked:w.required})}),p})),this.tableSettingsChange$=(0,Io.a)([this.onFieldsChange$,this.onRequiredChange$]).pipe((0,S.U)(([s,p])=>({filters:s,preferences:p})),(0,Cs.b)(100),(0,jn.d)(1)))}getTypeaheadVarsFn(s,p){return{eid:+s.replace(/EID/i,"")}}getTypeaheadResultsFn(s){return s.data.evidenceItems.nodes}getTagQueryVarsFn(s){return{eid:s}}getTagQueryResultsFn(s){return s.data.evidenceItem}getSelectedItemOptionFn(s){return{value:s.id,label:`EID${s.id}`}}getSelectOptionsFn(s,p){return s.map((w,ze)=>({label:p.get(ze)||`EID${w.id}`,value:w.id}))}}return l.\u0275fac=function(s){return new(s||l)(e.Y36(Nn.olA),e.Y36(Nn.EFm),e.Y36(e.sBO),e.Y36(Pr._M))},l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-evidence-select"]],viewQuery:function(s,p){if(1&s&&e.Gf(ul,5,e.Rgc),2&s){let w;e.iGM(w=e.CRH())&&(p.optionTemplates=w)}},features:[e.qOj],decls:18,vars:36,consts:[[3,"nzGutter"],["nzFlex","auto"],[3,"cvcSelectMode","cvcMinSearchStrLength","cvcCustomTemplate","cvcFormControl","cvcFormlyAttributes","cvcEntityName","cvcPlaceholder","cvcResults","cvcOptions","cvcShowError","cvcDisabled","cvcLoading","cvcSelectOpen","cvcOnSearch","cvcOnOpenChange","cvcSelectComponent","cvcOnModelChange"],["nzFlex","50px"],["type","button","nz-button","","nzBlock","",1,"manager-button",3,"click"],["nz-icon","",3,"ngClass","nzType"],["nzSpan","24","class","manager-drawer",4,"ngIf"],[4,"ngrxLet"],["selectedTemplate",""],["nzSpan","24",1,"manager-drawer"],[3,"cvcSelectedIds","cvcTableSettings","cvcSelectedIdsChange"],[4,"ngFor","ngForOf"],["optionTemplates",""],[3,"cvcDisableLink","cvcCacheId","cvcEmphasize"],[1,"ant-select-selection-item-content"],[3,"cvcCacheId","cvcContext","cvcMode","cvcOnClose"]],template:function(s,p){if(1&s&&(e.TgZ(0,"nz-row",0)(1,"nz-col",1)(2,"cvc-entity-select",2),e.NdJ("cvcOnSearch",function(ze){return p.onSearch$.next(ze)})("cvcOnOpenChange",function(ze){return p.onOpenChange$.next(ze)})("cvcSelectComponent",function(ze){return p.selectComponent=ze})("cvcOnModelChange",function(ze){return p.props.change&&p.props.change(p.field,ze)}),e.ALo(3,"ngrxPush"),e.ALo(4,"ngrxPush"),e.ALo(5,"ngrxPush"),e.ALo(6,"ngrxPush"),e.qZA()(),e.TgZ(7,"nz-col",3)(8,"button",4),e.NdJ("click",function(){return p.onShowMgrClick$.next()}),e._UZ(9,"span",5),e.ALo(10,"ngrxPush"),e.ALo(11,"ngrxPush"),e._uU(12," Manager "),e.qZA()(),e.YNc(13,z1,4,6,"nz-col",6),e.ALo(14,"ngrxPush"),e.qZA(),e.YNc(15,Ms,3,3,"ng-container",7),e.YNc(16,bd,2,3,"ng-template",null,8,e.W1O)),2&s){const w=e.MAs(17);e.Q6J("nzGutter",e.DdM(32,dl)),e.xp6(2),e.Q6J("cvcSelectMode",p.props.isMultiSelect?"multiple":"default")("cvcMinSearchStrLength",p.props.minSearchStrLength)("cvcCustomTemplate",w)("cvcFormControl",p.formControl)("cvcFormlyAttributes",p.field)("cvcEntityName",p.props.entityName)("cvcPlaceholder",p.props.placeholder)("cvcResults",e.lcZ(3,18,p.result$))("cvcOptions",e.lcZ(4,20,p.selectOption$))("cvcShowError",p.showError)("cvcDisabled",p.props.disabled)("cvcLoading",e.lcZ(5,22,p.isLoading$))("cvcSelectOpen",e.lcZ(6,24,p.selectOpen$)),e.xp6(7),e.Q6J("ngClass",e.WLB(33,du,e.lcZ(10,26,p.showMgr$),!e.lcZ(11,28,p.showMgr$)))("nzType","caret-right"),e.xp6(4),e.Q6J("ngIf",e.lcZ(14,30,p.showMgr$)),e.xp6(2),e.Q6J("ngrxLet",p.onSearch$)}},dependencies:[a.mk,a.sg,a.O5,sn,Qt.J,lo.eJ,zo.ix,ue.w,et.dQ,R.t3,R.SK,de.Ls,ll,lo.fM],styles:[".manager-button[_ngcontent-%COMP%]   span.hide[_ngcontent-%COMP%]{transform:rotate(0);transition:transform .2s linear}.manager-button[_ngcontent-%COMP%]   span.show[_ngcontent-%COMP%]{transform:rotate(90deg);transition:transform .2s linear}"],changeDetection:0}),l})();var hl=c(821);let Tc=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[a.ez,de.PV,An.X,eo.cg,X.ZJ,tt.s,Ce.x]}),l})(),fl=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[a.ez,An.X,X.ZJ,Wo.$6,de.PV,eo.cg,tt.s,Tc]}),l})();const Mc={types:[{name:"evidence-select",wrappers:["form-field"],component:pl},{name:"evidence-multi-select",wrappers:["form-field"],component:pl,defaultOptions:{props:{label:"Evidence Items",isMultiSelect:!0}}}]};let La=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[a.ez,xr,hl.M,fl,Gt,Tc,Ce.x,rc.y,tt.s,sr,_.X0.forChild(Mc),t.u5,zo.sL,Vi.vh,ye.Wr,Br.b1,L.U5,R.Jb,de.PV,A.o7,Me,Wo.$6,Qo.HQ,An.X,eo.cg,X.ZJ]}),l})();const ml=["optionTemplates"];function ka(l,g){if(1&l&&(e.ynx(0),e.TgZ(1,"em"),e._UZ(2,"span",9),e.ALo(3,"highlightTypeahead"),e.qZA(),e.BQk()),2&l){const s=e.oxw(2).$implicit,p=e.oxw().ngrxLet;e.xp6(2),e.Q6J("nzTooltipTitle",s.geneAliases.join(", "))("innerHtml",e.xi3(3,2,s.geneAliases.join(", "),p),e.oJD)}}function hu(l,g){1&l&&e._uU(0,"--")}function Ra(l,g){if(1&l&&(e._UZ(0,"cvc-entity-tag",5),e.TgZ(1,"span",6),e.YNc(2,ka,4,5,"ng-container",7),e.YNc(3,hu,1,0,"ng-template",null,8,e.W1O),e.qZA()),2&l){const s=e.MAs(4),p=e.oxw().$implicit,w=e.oxw().ngrxLet;e.Q6J("cvcDisableLink",!0)("cvcCacheId",p.__typename+":"+p.id)("cvcEmphasize",w),e.xp6(2),e.Q6J("ngIf",p.geneAliases.length>0)("ngIfElse",s)}}function fu(l,g){1&l&&(e.ynx(0),e.YNc(1,Ra,5,5,"ng-template",null,4,e.W1O),e.BQk())}function gl(l,g){if(1&l&&(e.ynx(0),e.YNc(1,fu,3,0,"ng-container",3),e.ALo(2,"ngrxPush"),e.BQk()),2&l){const s=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,s.result$))}}function bc(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"div",10)(1,"cvc-entity-tag",11),e.NdJ("cvcOnClose",function(){const ze=e.CHM(s).$implicit,ft=e.oxw();return e.KtG(ft.onTagClose$.next(ze.nzValue))}),e.qZA()()}if(2&l){const s=g.$implicit,p=e.oxw();e.xp6(1),e.Q6J("cvcCacheId","Gene:"+s.nzValue)("cvcContext",p.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",p.props.isMultiSelect?"default":"closeable")}}const Va=To(Lo(),Fo());let Sc=(()=>{class l extends Va{constructor(s,p,w){super(),this.taq=s,this.tq=p,this.changeDetectorRef=w,this.defaultOptions={props:{label:"Gene",placeholder:"Search Genes",isMultiSelect:!1,entityName:{singular:"Gene",plural:"Genes"},description:"Entrez Gene Symbol"}}}ngAfterViewInit(){this.configureBaseField(),this.configureEntitySelectField({typeaheadQuery:this.taq,typeaheadParam$:void 0,tagQuery:this.tq,getTypeaheadVarsFn:this.getTypeaheadVarsFn,getTypeaheadResultsFn:this.getTypeaheadResultsFn,getTagQueryVarsFn:this.getTagQueryVarsFn,getTagQueryResultsFn:this.getTagQueryResultsFn,getSelectedItemOptionFn:this.getSelectedItemOptionFn,getSelectOptionsFn:this.getSelectOptionsFn,changeDetectorRef:this.changeDetectorRef,selectOpen$:this.selectOpen$,selectComponent:this.selectComponent})}getTypeaheadVarsFn(s){return{entrezSymbol:s}}getTypeaheadResultsFn(s){return s.data.geneTypeahead}getTagQueryVarsFn(s){return{geneId:s}}getTagQueryResultsFn(s){return s.data.gene}getSelectedItemOptionFn(s){return{value:s.id,label:s.name}}getSelectOptionsFn(s,p){return s.map((w,ze)=>({label:p.get(ze)||w.name,value:w.id}))}}return l.\u0275fac=function(s){return new(s||l)(e.Y36(Nn.czh),e.Y36(Nn.HwR),e.Y36(e.sBO))},l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-gene-select"]],viewQuery:function(s,p){if(1&s&&e.Gf(ml,5,e.Rgc),2&s){let w;e.iGM(w=e.CRH())&&(p.optionTemplates=w)}},features:[e.qOj],decls:7,vars:17,consts:[[3,"cvcSelectMode","cvcCustomTemplate","cvcFormControl","cvcFormlyAttributes","cvcPlaceholder","cvcEntityName","cvcResults","cvcOptions","cvcShowError","cvcLoading","cvcOnSearch","cvcOnOpenChange","cvcSelectComponent","cvcOnModelChange"],[4,"ngrxLet"],["selectedTemplate",""],[4,"ngFor","ngForOf"],["optionTemplates",""],[3,"cvcDisableLink","cvcCacheId","cvcEmphasize"],["nz-typography","","nzType","secondary"],[4,"ngIf","ngIfElse"],["noAliases",""],["nz-typography","","nzType","secondary","nz-tooltip","",3,"nzTooltipTitle","innerHtml"],[1,"ant-select-selection-item-content"],[3,"cvcCacheId","cvcContext","cvcMode","cvcOnClose"]],template:function(s,p){if(1&s&&(e.TgZ(0,"cvc-entity-select",0),e.NdJ("cvcOnSearch",function(ze){return p.onSearch$.next(ze)})("cvcOnOpenChange",function(ze){return p.onOpenChange$.next(ze)})("cvcSelectComponent",function(ze){return p.selectComponent=ze})("cvcOnModelChange",function(ze){return p.props.change&&p.props.change(p.field,ze)}),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.ALo(3,"ngrxPush"),e.qZA(),e.YNc(4,gl,3,3,"ng-container",1),e.YNc(5,bc,2,3,"ng-template",null,2,e.W1O)),2&s){const w=e.MAs(6);e.Q6J("cvcSelectMode",p.props.isMultiSelect?"multiple":"default")("cvcCustomTemplate",w)("cvcFormControl",p.formControl)("cvcFormlyAttributes",p.field)("cvcPlaceholder",p.props.placeholder)("cvcEntityName",p.props.entityName)("cvcResults",e.lcZ(1,11,p.result$))("cvcOptions",e.lcZ(2,13,p.selectOption$))("cvcShowError",p.showError)("cvcLoading",e.lcZ(3,15,p.isLoading$)),e.xp6(4),e.Q6J("ngrxLet",p.onSearch$)}},dependencies:[a.sg,a.O5,lo.eJ,eo.SY,X.ZU,sn,Qt.J,lo.fM,hr.A],changeDetection:0}),l})();const vl={types:[{name:"gene-select",wrappers:["form-field"],component:Sc},{name:"gene-multi-select",wrappers:["form-field"],component:Sc,defaultOptions:{props:{label:"Genes",isMultiSelect:!0}}}]};let mu=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[a.ez,t.UX,_.X0.forChild(vl),_t.L,zo.sL,Ye.LV,de.PV,A.o7,eo.cg,L.U5,B.ic,X.ZJ,An.X,No,Gt,tt.s,Ce.x]}),l})();const Us=["optionTemplates"];function da(l,g){if(1&l&&e._UZ(0,"cvc-attribute-tag",4),2&l){const s=e.oxw().$implicit;e.Q6J("cvcAttrValue",s)}}function gu(l,g){1&l&&(e.ynx(0),e.YNc(1,da,1,1,"ng-template",null,3,e.W1O),e.BQk())}function T1(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"div",5)(1,"cvc-attribute-tag",6),e.NdJ("cvcOnClose",function(w){e.CHM(s);const ze=e.oxw();return e.KtG(ze.onTagClose$.next(w))}),e.qZA()()}if(2&l){const s=g.$implicit,p=e.oxw();e.xp6(1),e.Q6J("cvcAttrValue",s.nzValue)("cvcContext",p.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",p.props.isMultiSelect?"default":"closeable")}}const _l={COMBINATION:"Therapies specified were used as part of a combination therapy approach",SEQUENTIAL:"Therapies specified were used at separate timepoints in the same treatment plan",SUBSTITUTES:"Therapies specified are often considered to be of the same family, or behave similarly in a treatment setting"},vu=To(Lo(),go()),_u={types:[{name:"interaction-select",wrappers:["form-field"],component:(()=>{class l extends vu{constructor(s){super(),this.cdr=s,this.defaultOptions={props:{label:"Therapy Interaction",placeholder:"Select Therapy Interaction",requireMultipleTherapies:!0,requireMultipleTherapiesPromptFn:()=>"A single associated therapy does not have an Interaction type",tooltip:"Characterizes the interaction of a multi-therapy treatment"}},this.interactionEnum$=new Be.X([]),this.placeholder$=new Be.X(void 0)}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEnumSelectField({optionEnum$:this.interactionEnum$,optionTemplate$:this.optionTemplate$,changeDetectorRef:this.cdr})}configureStateConnections(){if(!this.state)return console.error(`${this.field.id} requires a form state to populate its options, none was found.`),void this.placeholder$.next("ERROR: Form state not found");this.placeholder$.next(this.props.placeholder),this.state.enums.interaction$?(this.state.enums.interaction$.pipe((0,zn.t)(this)).subscribe(s=>{this.interactionEnum$.next(s)}),this.optionTemplates||console.error(`${this.field.id} could not find its optionTemplates QueryList to populate its select options, so simple text labels will be displayed.`),this.optionTemplate$=this.optionTemplates?.changes.pipe((0,S.U)(s=>s.map(p=>p))),this.onTherapies$=this.state.fields.therapyIds$,this.optionTemplates||console.warn(`${this.field.id} could not find state's fields.therapyIds$ to handle its required & disabled states.`),this.onTherapies$.pipe((0,zn.t)(this)).subscribe(s=>{s&&0!=s.length?1==s.length?(this.props.description="A single associated therapy does not have an Interaction type",this.props.disabled=!0,this.props.required=!1,void 0!==this.formControl.value&&this.formControl.setValue(void 0)):(this.props.description="Select an Interaction Type",this.props.disabled=!1,this.props.required=!0):(this.props.disabled=!0,this.props.required=!1,this.props.description="Interaction type is not applicable when no therapies are selected.",void 0!==this.formControl.value&&this.formControl.setValue(void 0)),this.cdr.markForCheck()}),this.onValueChange$.pipe((0,zn.t)(this)).subscribe(s=>{s?(this.props.description=_l[s],this.props.extraType="description"):(this.props.extraType="prompt",this.field.formControl.markAsTouched())})):console.error(`${this.field.id} could not find form state's interaction$ to populate select.`)}}return l.\u0275fac=function(s){return new(s||l)(e.Y36(e.sBO))},l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-interaction-select"]],viewQuery:function(s,p){if(1&s&&e.Gf(Us,5,e.Rgc),2&s){let w;e.iGM(w=e.CRH())&&(p.optionTemplates=w)}},features:[e.qOj],decls:7,vars:15,consts:[[3,"cvcFormControl","cvcFormlyAttributes","cvcSelectMode","cvcPlaceholder","cvcCustomTemplate","cvcOptions","cvcShowError","cvcDisabled"],[4,"ngFor","ngForOf"],["selectedTemplate",""],["optionTemplates",""],[3,"cvcAttrValue"],[1,"ant-select-selection-item-content"],[3,"cvcAttrValue","cvcContext","cvcMode","cvcOnClose"]],template:function(s,p){if(1&s&&(e._UZ(0,"cvc-enum-select",0),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.YNc(3,gu,3,0,"ng-container",1),e.ALo(4,"ngrxPush"),e.YNc(5,T1,2,3,"ng-template",null,2,e.W1O)),2&s){const w=e.MAs(6);e.Q6J("cvcFormControl",p.formControl)("cvcFormlyAttributes",p.field)("cvcSelectMode",p.props.isMultiSelect?"multiple":"default")("cvcPlaceholder",e.lcZ(1,9,p.placeholder$))("cvcCustomTemplate",w)("cvcOptions",e.lcZ(2,11,p.selectOption$))("cvcShowError",p.showError)("cvcDisabled",p.props.disabled),e.xp6(3),e.Q6J("ngForOf",e.lcZ(4,13,p.interactionEnum$))}},dependencies:[a.sg,Do,Ie,lo.fM]}),l})()}]};let yu=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[a.ez,t.UX,_.X0.forChild(_u),No,Kn,xr]}),l})();var yl=c(8004);const Ba=["optionTemplates"];function Cl(l,g){if(1&l&&(e.TgZ(0,"nz-tag")(1,"strong"),e._uU(2),e.qZA(),e._uU(3),e.ALo(4,"enumTooltip"),e.qZA()),2&l){const s=e.oxw().$implicit;e.xp6(2),e.Oqu(s),e.xp6(1),e.hij(" - ",e.xi3(4,2,s,"evidenceLevelBrief")," ")}}function Cu(l,g){1&l&&(e.ynx(0),e.YNc(1,Cl,5,5,"ng-template",null,3,e.W1O),e.BQk())}function zl(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"nz-tag",7),e.NdJ("nzOnClose",function(w){e.CHM(s);const ze=e.oxw(2);return e.KtG(ze.onTagClose$.next(w))}),e.TgZ(1,"strong"),e._uU(2),e.qZA(),e._uU(3),e.ALo(4,"enumTooltip"),e.qZA()}if(2&l){const s=e.oxw().$implicit;e.xp6(2),e.Oqu(s.nzValue),e.xp6(1),e.hij(" - ",e.xi3(4,2,s.nzValue,"evidenceLevelBrief")," ")}}function M1(l,g){if(1&l&&(e.ynx(0),e.TgZ(1,"strong"),e._uU(2),e.qZA(),e._uU(3),e.ALo(4,"enumTooltip"),e.BQk()),2&l){const s=e.oxw().$implicit;e.xp6(2),e.Oqu(s.nzValue),e.xp6(1),e.hij(" - ",e.xi3(4,2,s.nzValue,"evidenceLevelBrief")," ")}}function Tl(l,g){if(1&l&&(e.TgZ(0,"div",4),e.YNc(1,zl,5,5,"nz-tag",5),e.YNc(2,M1,5,5,"ng-container",6),e.qZA()),2&l){const s=e.oxw();e.xp6(1),e.Q6J("ngIf",!s.props.isMultiSelect),e.xp6(1),e.Q6J("ngIf",s.props.isMultiSelect)}}const b1=new Map([[Nn.Sx0.A,"Evidence shows consensus association in human medicine"],[Nn.Sx0.B,"Evidence supports association using clinical trial or other primary patient data"],[Nn.Sx0.C,"Evidence supports association using individual case reports from clinical journals"],[Nn.Sx0.D,"Evidence supports association using in vivo or in vitro models"],[Nn.Sx0.E,"Evidential association is inferential or indirect"]]),zu=To(Lo(),go()),Ec={types:[{name:"level-select",wrappers:["form-field"],component:(()=>{class l extends zu{constructor(s){super(),this.cdr=s,this.defaultOptions={props:{label:"Evidence Level",required:!1,isMultiSelect:!1,placeholder:"Select Evidence Level",extraType:"description"}},this.levelEnum$=new Be.X([])}ngAfterViewInit(){this.configureBaseField(),this.state&&this.state.formReady$?this.state.formReady$.pipe((0,yt.h)(s=>s),(0,es.q)(1),(0,zn.t)(this)).subscribe(s=>{this.configureField()}):this.configureField()}configureField(){this.props.tooltip="Type of study performed to produce the evidence statement",this.levelEnum$.next((0,So.o6)(Nn.Sx0).map(s=>s)),this.optionTemplates||console.error(`${this.field.id} could not find its optionTemplates QueryList to populate its select options, so simple text labels will be displayed.`),this.optionTemplate$=this.optionTemplates?.changes.pipe((0,S.U)(s=>s.map(p=>p))),this.onValueChange$.pipe((0,zn.t)(this)).subscribe(s=>{s?(this.props.description=b1.get(s),this.field.formControl.markAsTouched()):this.props.description=void 0}),this.configureEnumSelectField({optionEnum$:this.levelEnum$,optionTemplate$:this.optionTemplate$,changeDetectorRef:this.cdr})}}return l.\u0275fac=function(s){return new(s||l)(e.Y36(e.sBO))},l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-level-select"]],viewQuery:function(s,p){if(1&s&&e.Gf(Ba,5,e.Rgc),2&s){let w;e.iGM(w=e.CRH())&&(p.optionTemplates=w)}},features:[e.qOj],decls:6,vars:13,consts:[[3,"cvcFormControl","cvcFormlyAttributes","cvcSelectMode","cvcPlaceholder","cvcCustomTemplate","cvcOptions","cvcShowError","cvcDisabled"],[4,"ngFor","ngForOf"],["selectedTemplate",""],["optionTemplates",""],[1,"ant-select-selection-item-content"],["nzMode","closeable",3,"nzOnClose",4,"ngIf"],[4,"ngIf"],["nzMode","closeable",3,"nzOnClose"]],template:function(s,p){if(1&s&&(e._UZ(0,"cvc-enum-select",0),e.ALo(1,"ngrxPush"),e.YNc(2,Cu,3,0,"ng-container",1),e.ALo(3,"ngrxPush"),e.YNc(4,Tl,3,2,"ng-template",null,2,e.W1O)),2&s){const w=e.MAs(5);e.Q6J("cvcFormControl",p.formControl)("cvcFormlyAttributes",p.field)("cvcSelectMode",p.props.isMultiSelect?"multiple":"default")("cvcPlaceholder",p.props.placeholder)("cvcCustomTemplate",w)("cvcOptions",e.lcZ(1,9,p.selectOption$))("cvcShowError",p.showError)("cvcDisabled",p.props.disabled),e.xp6(2),e.Q6J("ngForOf",e.lcZ(3,11,p.levelEnum$))}},dependencies:[a.sg,a.O5,An.j,Do,lo.fM,yl.v],changeDetection:0}),l})()},{name:"level-multi-select",extends:"level-select",defaultOptions:{props:{label:"Levels",isMultiSelect:!0}}}]};let E1=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[a.ez,t.UX,_.X0.forChild(Ec),An.X,tt.s,No,Kn]}),l})();var x1=c(9858),Ki=c(6976),Tu=c(4194);const D1=/\(/g,O1=/\)/g,Mu=/AND|OR/i,w1=/^(?<not>NOT\s)?\s*#VID(?<variantId>\d+)$/i,bu=/\s+/,pa="EXPR";function ha(l){return xc(l.replace(D1," ( ").replace(O1," ) "))}function xc(l){let s,g=l.split(bu),p=0,w=[],ze=[],ft=[];for(let Nr of g)if("("==Nr)0!=p&&w.push(Nr),p+=1;else if(")"==Nr)if(p-=1,0==p){let ss=xc(w.join(" "));if("errorMessage"in ss)return ss;ft.push(ss),ze.push(pa),w=[]}else w.push(Nr);else p>0?w.push(Nr):ze.push(Nr);const vn={errorType:"trailingBoolean",errorMessage:"Expressions may not end with AND / OR boolean operators."},Sn={errorType:"initialBoolean",errorMessage:"Expressions may not start with AND / OR boolean operators."},Co={errorType:"multipleBoolean",errorMessage:"Multiple boolean operators found."},mi={errorType:"incompleteExpression",errorMessage:"Ensure that parenthetical clauses are closed."};let Ii=0;for(let Nr of ze){let ss=Mu.test(Nr);if(ss&&0==Ii)return Sn;if(ss&&Ii===g.length-1)return vn;if(ss&&!s)s=Dc(Nr);else if(ss&&s&&Dc(Nr)!==s)return Co;Ii++}let ba=[],ec=ze.join(" ").split(Mu);for(let Nr of ec.map(ss=>ss.trim())){let ss=w1.exec(Nr);if(null===ss){if(0===Nr.length)return mi;if("NOT"===Nr||"NOT"===Nr.split(" ").pop())return{errorType:"incompleteNOT",errorMessage:"NOT operator must be followed by a valid #VID."};if(Nr!==pa)return{errorType:"invalidToken",errorMessage:`Token '${Nr}' does not match the expected format.`}}else ba.push({not:!!ss[1],variantId:parseInt(ss[2])})}return{booleanOperator:s,variantComponents:ba,complexComponents:ft}}function Dc(l){return"AND"==l.toUpperCase()?Nn._Wm.And:Nn._Wm.Or}var Ml=c(6973);function bs(l,g){const s="object"==typeof g;return new Promise((p,w)=>{let ft,ze=!1;l.subscribe({next:vn=>{ft=vn,ze=!0},error:w,complete:()=>{ze?p(ft):s?p(g.defaultValue):w(new Ml.K)}})})}var Ha=c(951),bl=c(5095);let js=(()=>{class l{constructor(s){this.apollo=s,this.cvcOnSelect=new e.vpe,this.cvcOnVariantSelect=new e.vpe,this.modelChange$=new Be.X(void 0),this.finderState={formLayout:"horizontal",fields:{geneId$:new Be.X(void 0),variantId$:new Be.X(void 0),variantMolecularProfile$:new Be.X(void 0)}},this.form=new t.nJ({}),this.model={geneId:void 0,variantId:void 0},this.options={formState:this.finderState},this.config=[{wrappers:["form-row"],props:{formRowOptions:{gutter:[8,0],span:12}},fieldGroup:[{key:"geneId",type:"gene-select",props:{placeholder:"Select MP Gene",hideLabel:!0,showExtra:!1,showErrorTip:!1,required:!0}},{key:"variantId",type:"variant-select",props:{placeholder:"Select MP Variant",hideLabel:!0,required:!0,showExtra:!1,showErrorTip:!1,requireGene:!0}}]}]}modelChange(s){if(!s?.variantId)return;const p=this.getSelectedVariant(s.variantId);p&&(this.model={geneId:void 0,variantId:void 0},this.cvcOnSelect.next(p.singleVariantMolecularProfile),this.cvcOnVariantSelect.next(p))}getSelectedVariant(s){if(!s)return;const p={id:`Variant:${s}`,fragment:Pr.Ps`
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
      `};let w;try{w=this.apollo.client.readFragment(p)}catch(ze){console.error(ze)}if(w)return w;console.error("MpFinderForm could not resolve its Variant from the cache")}}return l.\u0275fac=function(s){return new(s||l)(e.Y36(Pr._M))},l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-mp-finder"]],outputs:{cvcOnSelect:"cvcOnSelect",cvcOnVariantSelect:"cvcOnVariantSelect"},decls:2,vars:6,consts:[["nz-form","",3,"formGroup","nzLayout"],[3,"form","fields","model","options","modelChange"]],template:function(s,p){1&s&&(e.TgZ(0,"form",0)(1,"formly-form",1),e.NdJ("modelChange",function(ze){return p.modelChange(ze)}),e.qZA()()),2&s&&(e.Q6J("formGroup",p.form)("nzLayout",p.finderState.formLayout),e.xp6(1),e.Q6J("form",p.form)("fields",p.config)("model",p.model)("options",p.options))},dependencies:[t._Y,t.JL,t.sg,_.T7,L.Lr],styles:["[_nghost-%COMP%]{display:block;width:100%}"],changeDetection:0}),l})();function Ya(l,g){1&l&&(e.ynx(0),e.TgZ(1,"p"),e._uU(2," The expression contains open parentheses. Please ensure that all parenthetical expressions are closed. "),e.qZA(),e.BQk())}function Zr(l,g){1&l&&(e.ynx(0),e.TgZ(1,"p"),e._uU(2," Complete the expression by appending a "),e.TgZ(3,"strong"),e._uU(4,"#VID"),e.qZA(),e._uU(5," token to the incomplete boolean expression. "),e.qZA(),e.BQk())}function Su(l,g){1&l&&(e.ynx(0),e.TgZ(1,"p"),e._uU(2," MP Expressions may not begin with an "),e.TgZ(3,"strong"),e._uU(4,"AND"),e.qZA(),e._uU(5," or "),e.TgZ(6,"strong"),e._uU(7,"OR"),e.qZA(),e._uU(8," boolean. Ensure the expression begins with a "),e.TgZ(9,"strong"),e._uU(10,"#VID"),e.qZA(),e._uU(11," or "),e.TgZ(12,"strong"),e._uU(13,"NOT #VID"),e.qZA(),e._uU(14," token. "),e.qZA(),e.BQk())}function Eu(l,g){1&l&&(e.ynx(0),e.TgZ(1,"p"),e._uU(2," Molecular Profile expressions use a simple domain-specific language to specify complex MPs using boolean expressions to combine variants. These expressions may contain: "),e.qZA(),e.TgZ(3,"ul")(4,"li"),e._uU(5," Variant Tokens - "),e.TgZ(6,"strong"),e._uU(7,"#VID"),e.qZA(),e._uU(8," or "),e.TgZ(9,"strong"),e._uU(10,"NOT #VID"),e.qZA(),e._uU(11,'followed by a valid Variant ID, e.g. "#VID123" '),e.qZA(),e.TgZ(12,"li"),e._uU(13,"Boolean Tokens - "),e.TgZ(14,"strong"),e._uU(15,"AND"),e.qZA(),e._uU(16,", "),e.TgZ(17,"strong"),e._uU(18,"OR"),e.qZA()(),e.TgZ(19,"li"),e._uU(20," Parentheses - "),e.TgZ(21,"strong"),e._uU(22,"("),e.qZA(),e._uU(23," or "),e.TgZ(24,"strong"),e._uU(25,")"),e.qZA(),e._uU(26,", for grouping tokens into nested expressions "),e.qZA()(),e.TgZ(27,"p")(28,"strong"),e._uU(29,"Invalid Token"),e.qZA(),e._uU(30," errors occur if the parser encounters any text or token that does not match those listed above. "),e.qZA(),e.BQk())}function xu(l,g){1&l&&(e.ynx(0),e.TgZ(1,"p"),e._uU(2," A single expression may not include more than one "),e.TgZ(3,"strong"),e._uU(4,"AND"),e.qZA(),e._uU(5," or "),e.TgZ(6,"strong"),e._uU(7,"OR"),e.qZA(),e._uU(8," boolean operator. To construct complex expressions, use parentheses. "),e.qZA(),e.TgZ(9,"p"),e._uU(10," For example, the expression "),e.TgZ(11,"strong"),e._uU(12,"#VID12 AND #VID2220 OR #VID456"),e.qZA(),e._uU(13," is invalid, but the expression "),e.TgZ(14,"strong"),e._uU(15,"#VID12 AND (#VID2220 OR #VID456)"),e.qZA(),e._uU(16," is valid. The parentheses create a nested expression independent of the outer expression. "),e.qZA(),e.BQk())}function Sl(l,g){1&l&&(e.ynx(0),e.TgZ(1,"p"),e._uU(2," Complete the expression by appending a "),e.TgZ(3,"strong"),e._uU(4,"#VID"),e.qZA(),e._uU(5," token to the incomplete boolean expression. "),e.qZA(),e.BQk())}function Oc(l,g){1&l&&(e.ynx(0),e.TgZ(1,"p"),e._uU(2," The expression contains a Variant ID that cannot be matched to any Variant in the CIViC database. Please re-check the Variant ID, or create a new one by following these steps: "),e.qZA(),e.TgZ(3,"ol")(4,"li"),e._uU(5,"click the 'Variant' button,"),e.qZA(),e.TgZ(6,"li"),e._uU(7,"enter a Gene name, then select a Gene"),e.qZA(),e.TgZ(8,"li"),e._uU(9,"enter the Variant name"),e.qZA(),e.TgZ(10,"li"),e._uU(11," click the 'Create Variant' button that will appear if name does not match any CIViC Variants "),e.qZA()(),e.BQk())}function Du(l,g){1&l&&(e.ynx(0),e.TgZ(1,"p"),e._uU(2," An expression may not contain multiple instances of the same Variant. Either remove the variant or change the expression. For example, "),e.TgZ(3,"strong"),e._uU(4,"(#VID123 AND #VID456) OR (#VID123 AND #VID789)"),e.qZA(),e._uU(5,", which is invalid, is logically identical to the valid MP expression "),e.TgZ(6,"strong"),e._uU(7,"#VID123 AND (#VID456 OR #VID789)"),e.qZA(),e._uU(8,". "),e.qZA(),e.BQk())}function Ou(l,g){1&l&&(e.ynx(0),e.TgZ(1,"p"),e._uU(2," The Molecular Profile editor allows the selection or creation of complex Molecular Profiles by writing Molecular Profile Expressions. These expressions are composed with a simple language consisting of Variant tokens, boolean operators, and parentheses. For example: "),e.qZA(),e.TgZ(3,"blockquote")(4,"strong"),e._uU(5,"#VID12 AND #VID2220"),e.qZA(),e._UZ(6,"br"),e.TgZ(7,"strong"),e._uU(8,"#VID12 OR #VID2220"),e.qZA(),e._UZ(9,"br"),e.TgZ(10,"strong"),e._uU(11,"#VID12 AND NOT #VID2220"),e.qZA(),e._UZ(12,"br"),e.TgZ(13,"strong"),e._uU(14,"#VID12 AND #VID2220 AND (#VID456 OR #VID123)"),e.qZA(),e._UZ(15,"br"),e.TgZ(16,"strong"),e._uU(17,"#VID12 OR #VID2220 OR (NOT #VID456 AND #VID123)"),e.qZA(),e._UZ(18,"br"),e.qZA(),e.TgZ(19,"p")(20,"strong"),e._uU(21,"Variant Tokens"),e.qZA(),e._UZ(22,"br"),e._uU(23," Variant tokens are composed of a CIViC Variant ID prepended with "),e.TgZ(24,"strong"),e._uU(25,"#VID"),e.qZA(),e._uU(26,", and refer to specific CIViC Variants. For example, "),e.TgZ(27,"strong"),e._uU(28,"#VID12"),e.qZA(),e._uU(29," refers to "),e.TgZ(30,"strong"),e._uU(31,"BRAF V600E"),e.qZA(),e._uU(32,"; "),e.TgZ(33,"strong"),e._uU(34,"#VID2220"),e.qZA(),e._uU(35," refers to "),e.TgZ(36,"strong"),e._uU(37,"ALK FUSION"),e.qZA(),e._uU(38,". If you don\u2019t know the CIViC ID of a Variant, you can search for Variants by name using the \u2018Variant\u2019 or \u2018NOT Variant\u2019 buttons below. These interfaces can also be used to add a Variant that\u2019s not yet in CIViC. "),e.qZA(),e.TgZ(39,"p")(40,"strong"),e._uU(41,"Boolean Operators"),e.qZA(),e._UZ(42,"br"),e._uU(43," MP Expressions with more than a single variant must include boolean operators - "),e.TgZ(44,"strong"),e._uU(45,"AND"),e.qZA(),e._uU(46,", "),e.TgZ(47,"strong"),e._uU(48,"OR"),e.qZA(),e._uU(49,", and "),e.TgZ(50,"strong"),e._uU(51,"NOT"),e.qZA(),e._uU(52," - indicating their relationship. For example, the expression "),e.TgZ(53,"strong"),e._uU(54,"#VID12 AND #VID2220"),e.qZA(),e._uU(55," describes a MP that includes both "),e.TgZ(56,"strong"),e._uU(57,"BRAF V600E"),e.qZA(),e._uU(58," and "),e.TgZ(59,"strong"),e._uU(60,"ALK FUSION"),e.qZA(),e._uU(61,". "),e.qZA(),e.TgZ(62,"p")(63,"strong"),e._uU(64,"Parentheses"),e.qZA(),e._UZ(65,"br"),e._uU(66," Expressions cannot have both "),e.TgZ(67,"strong"),e._uU(68,"AND"),e.qZA(),e._uU(69," and "),e.TgZ(70,"strong"),e._uU(71,"OR"),e.qZA(),e._uU(72," operators within the same expression. To construct complex MPs that require multiple operators, one must use parentheses to create embedded expressions. "),e.qZA(),e.TgZ(73,"p")(74,"strong"),e._uU(75,"NOTE:"),e.qZA(),e._uU(76," Be sure to read the help text provided along with every alert message by hovering over 'Syntax Assistance'. "),e.qZA(),e.BQk())}let wu=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-mp-editor-popover-help"]],inputs:{cvcErrorType:"cvcErrorType"},decls:11,vars:9,consts:[[1,"help-content"],[3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"]],template:function(s,p){1&s&&(e.TgZ(0,"div",0),e.ynx(1,1),e.YNc(2,Ya,3,0,"ng-container",2),e.YNc(3,Zr,6,0,"ng-container",2),e.YNc(4,Su,15,0,"ng-container",2),e.YNc(5,Eu,31,0,"ng-container",2),e.YNc(6,xu,17,0,"ng-container",2),e.YNc(7,Sl,6,0,"ng-container",2),e.YNc(8,Oc,12,0,"ng-container",2),e.YNc(9,Du,9,0,"ng-container",2),e.YNc(10,Ou,77,0,"ng-container",3),e.BQk(),e.qZA()),2&s&&(e.xp6(1),e.Q6J("ngSwitch",p.cvcErrorType),e.xp6(1),e.Q6J("ngSwitchCase","incompleteExpression"),e.xp6(1),e.Q6J("ngSwitchCase","incompleteNOT"),e.xp6(1),e.Q6J("ngSwitchCase","initialBoolean"),e.xp6(1),e.Q6J("ngSwitchCase","invalidToken"),e.xp6(1),e.Q6J("ngSwitchCase","multipleBoolean"),e.xp6(1),e.Q6J("ngSwitchCase","trailingBoolean"),e.xp6(1),e.Q6J("ngSwitchCase","unknownVariant"),e.xp6(1),e.Q6J("ngSwitchCase","identicalVariants"))},dependencies:[a.RF,a.n9,a.ED],styles:[".help-content[_ngcontent-%COMP%]{max-width:500px}blockquote[_ngcontent-%COMP%]{margin-left:1em}"]}),l})();var Ss;const Pu=["expressionEditor"];function Iu(l,g){1&l&&e._uU(0,"Added new Molecular Profile")}function lr(l,g){if(1&l&&e._UZ(0,"cvc-mp-tag-name",24),2&l){const s=e.oxw().ngrxLet;e.Q6J("nameSegments",s)}}function wc(l,g){1&l&&(e.TgZ(0,"span",25),e._uU(1," Valid Molecular Profile expressions will be previewed here. "),e.qZA())}function El(l,g){if(1&l&&(e.ynx(0),e.YNc(1,lr,1,1,"cvc-mp-tag-name",22),e.YNc(2,wc,2,0,"span",23),e.BQk()),2&l){const s=g.ngrxLet;e.xp6(1),e.Q6J("ngIf",s),e.xp6(1),e.Q6J("ngIf",!s)}}function Pc(l,g){1&l&&e._UZ(0,"cvc-mp-editor-popover-help")}function ar(l,g){if(1&l&&(e.TgZ(0,"button",28),e._UZ(1,"span",29),e._uU(2," GETTING STARTED "),e.qZA(),e.YNc(3,Pc,1,0,"ng-template",null,30,e.W1O)),2&l){const s=e.MAs(4);e.Q6J("nzPopoverContent",s)}}function fa(l,g){if(1&l&&(e.ynx(0),e._UZ(1,"nz-alert",26),e.YNc(2,ar,5,1,"ng-template",null,27,e.W1O),e.BQk()),2&l){const s=g.ngIf,p=e.MAs(3);e.xp6(1),e.Q6J("nzMessage",s)("nzAction",p)}}function xl(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"button",34),e.NdJ("click",function(){e.CHM(s);const w=e.oxw(3).ngrxLet,ze=e.oxw();return e.KtG(ze.cvcOnSelect.next(w))}),e._uU(1," Select this MP "),e.qZA()}}function Dl(l,g){if(1&l&&(e._uU(0," Molecular Profile "),e.TgZ(1,"strong"),e._uU(2),e.qZA(),e._uU(3," found. ")),2&l){const s=e.oxw(3).ngrxLet;e.xp6(2),e.Oqu(s.name)}}function Ed(l,g){if(1&l&&(e.ynx(0),e._UZ(1,"nz-alert",31),e.YNc(2,xl,2,0,"ng-template",null,32,e.W1O),e.YNc(4,Dl,4,1,"ng-template",null,33,e.W1O),e.BQk()),2&l){const s=e.MAs(3),p=e.MAs(5);e.xp6(1),e.Q6J("nzMessage",p)("nzAction",s)}}function P1(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"button",37),e.NdJ("click",function(){e.CHM(s);const w=e.oxw(4);return e.KtG(w.onCreateNewMp$.next())}),e._uU(1," Create New MP "),e.qZA()}}function xd(l,g){1&l&&e._uU(0," Molecular Profile not found, create it? ")}function Au(l,g){if(1&l&&(e.ynx(0),e._UZ(1,"nz-alert",31),e.YNc(2,P1,2,0,"ng-template",null,35,e.W1O),e.YNc(4,xd,1,0,"ng-template",null,36,e.W1O),e.BQk()),2&l){const s=e.MAs(3),p=e.MAs(5);e.xp6(1),e.Q6J("nzMessage",p)("nzAction",s)}}function I1(l,g){if(1&l&&(e.ynx(0),e.YNc(1,Ed,6,2,"ng-container",6),e.YNc(2,Au,6,2,"ng-container",6),e.BQk()),2&l){const s=e.oxw().ngrxLet;e.xp6(1),e.Q6J("ngIf",void 0!==s),e.xp6(1),e.Q6J("ngIf",void 0===s)}}function Fu(l,g){if(1&l&&(e.ynx(0),e.YNc(1,I1,3,2,"ng-container",6),e.ALo(2,"ngrxPush"),e.ALo(3,"ngrxPush"),e.BQk()),2&l){const s=e.oxw();e.xp6(1),e.Q6J("ngIf",!e.lcZ(2,1,s.expressionError$)&&!e.lcZ(3,3,s.expressionMessage$))}}function Dd(l,g){if(1&l&&(e.TgZ(0,"button",40),e._UZ(1,"span",29),e._uU(2," SYNTAX ASSISTANCE "),e.qZA()),2&l){const s=e.oxw().helpContent;e.Q6J("nzPopoverContent",s)}}function A1(l,g){if(1&l&&(e._UZ(0,"nz-alert",38),e.YNc(1,Dd,3,1,"ng-template",null,39,e.W1O)),2&l){const s=g.$implicit,p=e.MAs(2);e.Q6J("nzMessage",s.errorMessage)("nzAction",p)}}function Ol(l,g){1&l&&e.GkF(0)}function Ic(l,g){1&l&&e._UZ(0,"cvc-mp-editor-popover-help",46)}const Gs=function(l,g){return{$implicit:l,helpContent:g}};function ma(l,g){if(1&l&&(e.ynx(0),e.YNc(1,Ol,1,0,"ng-container",44),e.YNc(2,Ic,1,0,"ng-template",null,45,e.W1O),e.BQk()),2&l){const s=e.MAs(3),p=e.oxw().ngIf;e.oxw();const w=e.MAs(14);e.xp6(1),e.Q6J("ngTemplateOutlet",w)("ngTemplateOutletContext",e.WLB(2,Gs,p,s))}}function $a(l,g){1&l&&e.GkF(0)}function y(l,g){1&l&&e._UZ(0,"cvc-mp-editor-popover-help",48)}function ct(l,g){if(1&l&&(e.ynx(0),e.YNc(1,$a,1,0,"ng-container",44),e.YNc(2,y,1,0,"ng-template",null,47,e.W1O),e.BQk()),2&l){const s=e.MAs(3),p=e.oxw().ngIf;e.oxw();const w=e.MAs(14);e.xp6(1),e.Q6J("ngTemplateOutlet",w)("ngTemplateOutletContext",e.WLB(2,Gs,p,s))}}function se(l,g){1&l&&e.GkF(0)}function F1(l,g){1&l&&e._UZ(0,"cvc-mp-editor-popover-help",50)}function Ua(l,g){if(1&l&&(e.ynx(0),e.YNc(1,se,1,0,"ng-container",44),e.YNc(2,F1,1,0,"ng-template",null,49,e.W1O),e.BQk()),2&l){const s=e.MAs(3),p=e.oxw().ngIf;e.oxw();const w=e.MAs(14);e.xp6(1),e.Q6J("ngTemplateOutlet",w)("ngTemplateOutletContext",e.WLB(2,Gs,p,s))}}function Nu(l,g){1&l&&e.GkF(0)}function N1(l,g){1&l&&e._UZ(0,"cvc-mp-editor-popover-help",52)}function L1(l,g){if(1&l&&(e.ynx(0),e.YNc(1,Nu,1,0,"ng-container",44),e.YNc(2,N1,1,0,"ng-template",null,51,e.W1O),e.BQk()),2&l){const s=e.MAs(3),p=e.oxw().ngIf;e.oxw();const w=e.MAs(14);e.xp6(1),e.Q6J("ngTemplateOutlet",w)("ngTemplateOutletContext",e.WLB(2,Gs,p,s))}}function wl(l,g){1&l&&e.GkF(0)}function Od(l,g){1&l&&e._UZ(0,"cvc-mp-editor-popover-help",54)}function pp(l,g){if(1&l&&(e.ynx(0),e.YNc(1,wl,1,0,"ng-container",44),e.YNc(2,Od,1,0,"ng-template",null,53,e.W1O),e.BQk()),2&l){const s=e.MAs(3),p=e.oxw().ngIf;e.oxw();const w=e.MAs(14);e.xp6(1),e.Q6J("ngTemplateOutlet",w)("ngTemplateOutletContext",e.WLB(2,Gs,p,s))}}function hp(l,g){1&l&&e.GkF(0)}function fp(l,g){1&l&&e._UZ(0,"cvc-mp-editor-popover-help",56)}function mp(l,g){if(1&l&&(e.ynx(0),e.YNc(1,hp,1,0,"ng-container",44),e.YNc(2,fp,1,0,"ng-template",null,55,e.W1O),e.BQk()),2&l){const s=e.MAs(3),p=e.oxw().ngIf;e.oxw();const w=e.MAs(14);e.xp6(1),e.Q6J("ngTemplateOutlet",w)("ngTemplateOutletContext",e.WLB(2,Gs,p,s))}}function gp(l,g){1&l&&e.GkF(0)}function wd(l,g){1&l&&(e.ynx(0),e._UZ(1,"cvc-mp-editor-popover-help",58),e.BQk())}function k1(l,g){1&l&&(e.ynx(0),e._UZ(1,"cvc-mp-editor-popover-help",59),e.BQk())}function Pd(l,g){if(1&l&&(e.YNc(0,wd,2,0,"ng-container",6),e.YNc(1,k1,2,0,"ng-container",6)),2&l){const s=e.oxw(2).ngIf;e.Q6J("ngIf",s.errorMessage.split(" ").includes("multiple")),e.xp6(1),e.Q6J("ngIf",s.errorMessage.split(" ").includes("found."))}}function R1(l,g){if(1&l&&(e.ynx(0),e.YNc(1,gp,1,0,"ng-container",44),e.YNc(2,Pd,2,2,"ng-template",null,57,e.W1O),e.BQk()),2&l){const s=e.MAs(3),p=e.oxw().ngIf;e.oxw();const w=e.MAs(14);e.xp6(1),e.Q6J("ngTemplateOutlet",w)("ngTemplateOutletContext",e.WLB(2,Gs,p,s))}}function vp(l,g){if(1&l&&(e.ynx(0),e.TgZ(1,"pre"),e._uU(2),e.ALo(3,"json"),e.qZA(),e.BQk()),2&l){const s=e.oxw().ngIf;e.xp6(2),e.hij("              ",e.lcZ(3,1,s),"\n            ")}}function _p(l,g){if(1&l&&(e.ynx(0)(1,41),e.YNc(2,ma,4,5,"ng-container",42),e.YNc(3,ct,4,5,"ng-container",42),e.YNc(4,Ua,4,5,"ng-container",42),e.YNc(5,L1,4,5,"ng-container",42),e.YNc(6,pp,4,5,"ng-container",42),e.YNc(7,mp,4,5,"ng-container",42),e.YNc(8,R1,4,5,"ng-container",42),e.YNc(9,vp,4,3,"ng-container",43),e.BQk()()),2&l){const s=g.ngIf;e.xp6(1),e.Q6J("ngSwitch",s.errorType),e.xp6(1),e.Q6J("ngSwitchCase","invalidToken"),e.xp6(1),e.Q6J("ngSwitchCase","trailingBoolean"),e.xp6(1),e.Q6J("ngSwitchCase","initialBoolean"),e.xp6(1),e.Q6J("ngSwitchCase","multipleBoolean"),e.xp6(1),e.Q6J("ngSwitchCase","incompleteExpression"),e.xp6(1),e.Q6J("ngSwitchCase","incompleteNOT"),e.xp6(1),e.Q6J("ngSwitchCase","queryError")}}function V1(l,g){1&l&&(e.TgZ(0,"span",25),e._uU(1," Append: "),e.qZA())}function Id(l,g){if(1&l&&(e.TgZ(0,"button",60)(1,"strong"),e._uU(2,"Variant"),e.qZA()()),2&l){e.oxw();const s=e.MAs(37);e.Q6J("nzPopoverContent",s)}}function ja(l,g){if(1&l&&(e.TgZ(0,"button",61)(1,"strong"),e._uU(2,"NOT Variant"),e.qZA()()),2&l){e.oxw();const s=e.MAs(39);e.Q6J("nzPopoverContent",s)}}function B1(l,g){1&l&&(e.TgZ(0,"span",62),e._uU(1," | "),e.qZA())}function Wn(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"button",63),e.NdJ("click",function(){e.CHM(s);const w=e.oxw();return e.KtG(w.onAppendInput$.next("AND"))}),e.TgZ(1,"strong"),e._uU(2,"AND"),e.qZA()()}}function ji(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"button",63),e.NdJ("click",function(){e.CHM(s);const w=e.oxw();return e.KtG(w.onAppendInput$.next("OR"))}),e.TgZ(1,"strong"),e._uU(2,"OR"),e.qZA()()}}function Lu(l,g){1&l&&(e.TgZ(0,"span",62),e._uU(1," | "),e.qZA())}function Ga(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"button",63),e.NdJ("click",function(){e.CHM(s);const w=e.oxw();return e.KtG(w.onAppendInput$.next("("))}),e.TgZ(1,"strong"),e._uU(2,"("),e.qZA()()}}function ku(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"button",63),e.NdJ("click",function(){e.CHM(s);const w=e.oxw();return e.KtG(w.onAppendInput$.next(")"))}),e.TgZ(1,"strong"),e._uU(2,")"),e.qZA()()}}const Ru=function(){return[6,8]};function H1(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"div",64)(1,"nz-row",2)(2,"nz-col",3)(3,"p",65),e._uU(4," Select a Gene and Variant to append its #VID. "),e.qZA()(),e.TgZ(5,"nz-col",3)(6,"cvc-mp-finder",66),e.NdJ("cvcOnVariantSelect",function(w){e.CHM(s);const ze=e.oxw();return e.KtG(ze.onVariantSelect$.next({variant:w,prependNot:!1}))}),e.qZA()()()()}2&l&&(e.xp6(1),e.Q6J("nzGutter",e.DdM(1,Ru)))}function Eo(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"div",64)(1,"nz-row",2)(2,"nz-col",3)(3,"p",65),e._uU(4," Select a Gene and Variant to append its #VID, prepended with NOT boolean. "),e.qZA()(),e.TgZ(5,"nz-col",3)(6,"cvc-mp-finder",66),e.NdJ("cvcOnVariantSelect",function(w){e.CHM(s);const ze=e.oxw();return e.KtG(ze.onVariantSelect$.next({variant:w,prependNot:!0}))}),e.qZA()()()()}2&l&&(e.xp6(1),e.Q6J("nzGutter",e.DdM(1,Ru)))}function Pl(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"nz-list-item")(1,"nz-list-item-meta")(2,"nz-list-item-meta-title"),e._UZ(3,"cvc-entity-tag",70),e.qZA(),e.TgZ(4,"nz-list-item-meta-description"),e._uU(5),e.qZA()(),e.TgZ(6,"ul",71)(7,"nz-list-item-action")(8,"button",72),e.NdJ("click",function(){const ze=e.CHM(s).$implicit,ft=e.oxw(2);return e.KtG(ft.onSelectExample$.next(ze))}),e._uU(9," Select "),e.qZA()()()()}if(2&l){const s=g.$implicit;e.xp6(3),e.Q6J("cvcLinkableEntity",s.mp),e.xp6(2),e.hij(" ",s.description," ")}}function Y1(l,g){if(1&l&&(e.TgZ(0,"div",67)(1,"nz-list",68),e.YNc(2,Pl,10,2,"nz-list-item",69),e.qZA()()),2&l){const s=e.oxw();e.xp6(2),e.Q6J("ngForOf",s.exampleExpressions)}}const Ac=function(l){return{active:l}};let ga=((Ss=class{constructor(g,s,p,w,ze){this.previewMpGql=g,this.createMolecularProfileGql=s,this.mpEditorPrepopulate=p,this.networkErrorService=w,this.viewerService=ze,this.cvcOnSelect=new e.vpe,this.expressionMessages={initial:"Use the editor below to construct a molecular profile."},this.exampleExpressions=[{mp:{__typename:"MolecularProfile",id:9999,name:"BRAF V600E AND EGFR L858R AND EGFR T790M"},expression:"#VID12 AND #VID33 AND #VID34",description:"BRAF V600E, EGFR L858R, and EGFR T790M must all be observed."},{mp:{__typename:"MolecularProfile",id:9999,name:"BRAF V600E AND NOT EGFR L858R"},expression:"#VID12 AND NOT #VID33",description:"BRAF V600E must be observed and EGFR L858R must be absent."},{mp:{__typename:"MolecularProfile",id:9999,name:"BRAF V600E OR EGFR L858R OR EGFR T790M"},expression:"#VID12 OR #VID33 OR #VID34",description:"Either BRAF V600E, or EGFR L858R, or EGFR T790M must be observed."},{mp:{__typename:"MolecularProfile",id:9999,name:"BRAF V600E AND (EGFR L858R OR EGFR T790M)"},expression:"#VID12 AND (#VID33 OR #VID34)",description:"BRAF V600E must be observed and either EGFR L858R or EGFR T790M must be observed."},{mp:{__typename:"MolecularProfile",id:9999,name:"NOT KIT D816V"},expression:"NOT #VID4353",description:"KIT D816V must be absent."}],this.createMolecularProfileMutator=new oi.U(this.networkErrorService),this.onInputChange$=new Be.X(void 0),this.onAppendInput$=new E.x,this.onVariantSelect$=new E.x,this.onCreateNewMp$=new E.x,this.onSelectExample$=new E.x,this.inputValue$=new Be.X(""),this.expressionError$=new Be.X(void 0),this.expressionHelp$=new Be.X(void 0),this.expressionMessage$=new Be.X(this.expressionMessages.initial),this.expressionSegment$=new E.x,this.existingMp$=new E.x,this.viewer$=this.viewerService.viewer$,this.mostRecentOrg$=this.viewer$.pipe((0,ai.j)("mostRecentOrg"))}ngAfterViewInit(){this.mostRecentOrg$.pipe((0,zn.t)(this)).subscribe(g=>{this.mostRecentOrgId=g?.id}),this.onInputChange$.pipe((0,Cs.b)(250),(0,St.b)(g=>{g||this.expressionSegment$.next(void 0)}),(0,yt.h)(ko.ep),(0,St.b)(g=>{0===g.length&&(this.expressionMessage$.next(this.expressionMessages.initial),this.expressionError$.next(void 0))}),(0,yt.h)(g=>g.length>0),(0,yt.h)(g=>" "!==g[g.length-1]),(0,S.U)(g=>{let s=ha(g);return"errorMessage"in s?s:this.previewQueryRef.refetch({mpStructure:s})}),(0,zn.t)(this)).subscribe(g=>{if(this.isMpParseError(g)){const s=g;this.expressionMessage$.next(void 0),this.expressionError$.next(s),this.expressionSegment$.next(void 0)}else g.then(({data:p,errors:w})=>{if(w)this.expressionMessage$.next(void 0),this.expressionError$.next({errorType:"queryError",errorMessage:w.map(ze=>ze.message).join("\n")}),this.expressionSegment$.next(void 0);else{this.expressionSegment$.next(p.previewMolecularProfileName.segments),this.expressionMessage$.next(void 0),this.expressionError$.next(void 0);this.existingMp$.next(p.previewMolecularProfileName.existingMolecularProfile||void 0)}})}),this.onAppendInput$.pipe((0,zn.t)(this)).subscribe(g=>{if(this.expressionEditor){const s=this.expressionEditor.nativeElement,w=`${s.value}${/\s+$/.test(g)?g:" "+g}`;s.value=w,this.inputValue$.next(w),this.onInputChange$.next(w)}}),this.onSelectExample$.pipe((0,zn.t)(this)).subscribe(g=>{this.expressionEditor&&(this.expressionEditor.nativeElement.value=g.expression,this.inputValue$.next(g.expression),this.onInputChange$.next(g.expression))}),this.onVariantSelect$.pipe((0,ni.M)(this.onInputChange$),(0,S.U)(([g,s])=>{const p=`${g.prependNot?"NOT ":""}#VID${g.variant.id}`;return s&&0!=s.trim().length?`${s.trim()} ${p}`:p}),(0,zn.t)(this)).subscribe(g=>{this.inputValue$.next(g),this.onInputChange$.next(g)}),this.previewQueryRef=this.previewMpGql.watch({}),this.previewMpName$=this.previewQueryRef.valueChanges.pipe((0,ai.j)("data","previewMolecularProfileName"),(0,yt.h)(ko.ep),(0,S.U)(g=>g.segments),(0,zn.t)(this)),this.previewMpAlreadyExists$=this.previewQueryRef.valueChanges.pipe((0,ai.j)("data","previewMolecularProfileName"),(0,yt.h)(ko.ep),(0,S.U)(g=>g.existingMolecularProfile),(0,zn.t)(this)),this.previewDeprecatedVariants$=this.previewQueryRef.valueChanges.pipe((0,ai.j)("data","previewMolecularProfileName"),(0,yt.h)(ko.ep),(0,S.U)(g=>g.deprecatedVariants),(0,zn.t)(this)),this.onCreateNewMp$.pipe((0,ni.M)(this.onInputChange$),(0,zn.t)(this)).subscribe(([g,s])=>{if(!s||0===s.length)return;let p=ha(s);"errorMessage"in p||(this.state=this.createMolecularProfileMutator.mutate(this.createMolecularProfileGql,{mpStructure:p,organizationId:this.mostRecentOrgId},{},w=>{setTimeout(()=>{w.createMolecularProfile&&this.cvcOnSelect.next(w.createMolecularProfile.molecularProfile)},1e3)}))})}isMpParseError(g){return void 0!==g.errorMessage}prepopulateMp(g){if(!g)return this.expressionSegment$.next(void 0),this.expressionMessage$.next(this.expressionMessages.initial),void this.inputValue$.next("");bs(this.mpEditorPrepopulate.fetch({mpId:g},{fetchPolicy:"cache-first"})).then(({data:s})=>{if(!s?.molecularProfile?.id)return void console.error(`MpExpressionEditor could not fetch MolecularProfile:${g} to prepolate editor fields.`);const p=s.molecularProfile.rawName.replace(/#GID(\d+)/g,"").trim();this.inputValue$.next(p),this.onInputChange$.next(p)})}ngOnChanges(g){g.cvcPrepopulateWithId&&this.prepopulateMp(g.cvcPrepopulateWithId.currentValue)}}).\u0275fac=function(g){return new(g||Ss)(e.Y36(Nn.mki),e.Y36(Nn.zpu),e.Y36(Nn.vjc),e.Y36(jo.Y),e.Y36(Ha.a))},Ss.\u0275cmp=e.Xpm({type:Ss,selectors:[["cvc-mp-expression-editor"]],viewQuery:function(g,s){if(1&g&&e.Gf(Pu,5),2&g){let p;e.iGM(p=e.CRH())&&(s.expressionEditor=p.first)}},inputs:{cvcPrepopulateWithId:"cvcPrepopulateWithId"},outputs:{cvcOnSelect:"cvcOnSelect"},features:[e.TTD],decls:42,vars:23,consts:[["entityType","Molecular Profile",3,"mutationState","successMessage"],["success",""],[3,"nzGutter"],["nzSpan","24"],[1,"expression-preview",3,"ngClass"],[4,"ngrxLet"],[4,"ngIf"],["errorAlert",""],["nz-input","","rows","1","placeholder","Enter or edit a Molecular Expression here.",2,"width","100%",3,"ngModel","ngModelChange"],["expressionEditor",""],[1,"btn-row"],["nzFlex","80px"],["nzBlock","","nz-button","","nzType","primary","nzShape","round","nzSize","small","nz-popover","","nzPopoverTitle","Select a Profile to view its expression","nzPopoverTrigger","click","nzPopoverPlacement","bottomLeft",3,"nzPopoverContent"],["nzFlex","auto",2,"text-align","right"],["nz-typography","","nzType","secondary",4,"nzSpaceItem"],["type","button","nz-button","","nz-popover","","nzPopoverTitle","Append Variant #VID","nzPopoverTrigger","click","nzSize","small","nzShape","round","nzType","primary","nzPopoverPlacement","bottom",3,"nzPopoverContent",4,"nzSpaceItem"],["type","button","nz-button","","nz-popover","","nzPopoverTitle","Append Variant NOT #VID","nzPopoverTrigger","click","nzSize","small","nzShape","round","nzType","primary","nzPopoverPlacement","bottom",3,"nzPopoverContent",4,"nzSpaceItem"],["class","btn-divider",4,"nzSpaceItem"],["type","button","nz-button","","nzType","primary","nzSize","small","nzShape","round",3,"click",4,"nzSpaceItem"],["appendVariant",""],["appendNotVariant",""],["expressionExamples",""],[3,"nameSegments",4,"ngIf"],["nz-typography","","nzType","secondary",4,"ngIf"],[3,"nameSegments"],["nz-typography","","nzType","secondary"],["nzType","info","nzShowIcon","",3,"nzMessage","nzAction"],["messageAction",""],["type","button","nz-button","","nzType","dashed","nzSize","small","nzShape","round","nz-popover","","nzPopoverTrigger","hover",3,"nzPopoverContent"],["nz-icon","","nzType","question-circle","nzTheme","fill"],["gettingStartedHelp",""],["nzType","success","nzShowIcon","",3,"nzMessage","nzAction"],["selectAction",""],["foundMessage",""],["type","button","nz-button","","nzType","primary","nzSize","small","nzBlock","",3,"click"],["createAction",""],["createMessage",""],["type","button","nz-button","","nzSize","small","nzType","primary","nzBlock","",3,"click"],["nzType","error","nzShowIcon","",3,"nzMessage","nzAction"],["errorAction",""],["nz-button","","nzDanger","","nzType","text","nzSize","small","nzShape","round","nz-popover","","nzPopoverTrigger","hover",3,"nzPopoverContent"],[3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["invalidTokenHelp",""],["cvcErrorType","invalidToken"],["trailingBooleanHelp",""],["cvcErrorType","trailingBoolean"],["initialBooleanHelp",""],["cvcErrorType","initialBoolean"],["multipleBooleanHelp",""],["cvcErrorType","multipleBoolean"],["incompleteExpressionHelp",""],["cvcErrorType","incompleteExpression"],["incompleteNOTHelp",""],["cvcErrorType","incompleteNOT"],["queryErrorHelp",""],["cvcErrorType","identicalVariants"],["cvcErrorType","unknownVariant"],["type","button","nz-button","","nz-popover","","nzPopoverTitle","Append Variant #VID","nzPopoverTrigger","click","nzSize","small","nzShape","round","nzType","primary","nzPopoverPlacement","bottom",3,"nzPopoverContent"],["type","button","nz-button","","nz-popover","","nzPopoverTitle","Append Variant NOT #VID","nzPopoverTrigger","click","nzSize","small","nzShape","round","nzType","primary","nzPopoverPlacement","bottom",3,"nzPopoverContent"],[1,"btn-divider"],["type","button","nz-button","","nzType","primary","nzSize","small","nzShape","round",3,"click"],[1,"append-popover-contents"],["nz-typography","","nzType","secondary",2,"margin","0","padding-bottom","2px"],[3,"cvcOnVariantSelect"],[2,"min-width","525px","margin","-8px -12px"],["nzSize","small","nzItemLayout","horizontal"],[4,"ngFor","ngForOf"],[3,"cvcLinkableEntity"],["nz-list-item-actions",""],["type","button","nz-button","","nzType","primary","nzSize","small",3,"click"]],template:function(g,s){if(1&g&&(e.TgZ(0,"cvc-form-submission-status-display",0),e.YNc(1,Iu,1,0,"ng-template",null,1,e.W1O),e.TgZ(3,"nz-row",2)(4,"nz-col",3)(5,"div",4),e.ALo(6,"ngrxPush"),e.YNc(7,El,3,2,"ng-container",5),e.ALo(8,"ngrxPush"),e.qZA()(),e.TgZ(9,"nz-col",3),e.YNc(10,fa,4,2,"ng-container",6),e.ALo(11,"ngrxPush"),e.YNc(12,Fu,4,5,"ng-container",5),e.YNc(13,A1,3,2,"ng-template",null,7,e.W1O),e.YNc(15,_p,10,8,"ng-container",6),e.ALo(16,"ngrxPush"),e.qZA(),e.TgZ(17,"nz-col",3)(18,"textarea",8,9),e.NdJ("ngModelChange",function(w){return s.onInputChange$.next(w)}),e.ALo(20,"ngrxPush"),e.qZA()()(),e.TgZ(21,"nz-row",10)(22,"nz-col",11)(23,"button",12),e._uU(24," Examples "),e.qZA()(),e.TgZ(25,"nz-col",13)(26,"nz-space"),e.YNc(27,V1,2,0,"span",14),e.YNc(28,Id,3,1,"button",15),e.YNc(29,ja,3,1,"button",16),e.YNc(30,B1,2,0,"span",17),e.YNc(31,Wn,3,0,"button",18),e.YNc(32,ji,3,0,"button",18),e.YNc(33,Lu,2,0,"span",17),e.YNc(34,Ga,3,0,"button",18),e.YNc(35,ku,3,0,"button",18),e.qZA()(),e.YNc(36,H1,7,2,"ng-template",null,19,e.W1O),e.YNc(38,Eo,7,2,"ng-template",null,20,e.W1O),e.YNc(40,Y1,3,1,"ng-template",null,21,e.W1O),e.qZA()()),2&g){const p=e.MAs(2),w=e.MAs(41);e.Q6J("mutationState",s.state)("successMessage",p),e.xp6(3),e.Q6J("nzGutter",e.DdM(20,Ru)),e.xp6(2),e.Q6J("ngClass",e.VKq(21,Ac,void 0!==e.lcZ(6,10,s.expressionSegment$))),e.xp6(2),e.Q6J("ngrxLet",e.lcZ(8,12,s.expressionSegment$)),e.xp6(3),e.Q6J("ngIf",e.lcZ(11,14,s.expressionMessage$)),e.xp6(2),e.Q6J("ngrxLet",s.existingMp$),e.xp6(3),e.Q6J("ngIf",e.lcZ(16,16,s.expressionError$)),e.xp6(3),e.Q6J("ngModel",e.lcZ(20,18,s.inputValue$)),e.xp6(5),e.Q6J("nzPopoverContent",w)}},dependencies:[a.mk,a.sg,a.O5,a.tP,a.RF,a.n9,a.ED,t.Fj,t.JJ,t.On,lo.eJ,_t.r,zo.ix,ue.w,et.dQ,de.Ls,A.Zp,R.t3,R.SK,Re.NU,Re.$1,X.ZU,Wo.lU,Ki.n_,Ki.AA,Ki.yi,Ki.IO,Ki.Pb,Ki.nk,Ki.KC,Ti.F,bl.C,Qt.J,js,wu,a.Ts,lo.fM],styles:["[_nghost-%COMP%]{display:block;background-color:#f6f6f6;border:1px solid #dedede;border-radius:4px;padding:8px}.expression-preview[_ngcontent-%COMP%]{width:100%;padding:8px;border:1px solid #dedede;border-radius:4px}.expression-preview.active[_ngcontent-%COMP%]{background-color:#fff}.append-popover-contents[_ngcontent-%COMP%]{min-width:450px}.help-content[_ngcontent-%COMP%]{max-width:500px}.btn-row[_ngcontent-%COMP%]{margin-top:10px;flex-wrap:nowrap}.btn-row[_ngcontent-%COMP%]   .btn-divider[_ngcontent-%COMP%]{color:#aaa}"],changeDetection:0}),Ss);ga=(0,U.gn)([(0,zn.c)()],ga);const Qa=["optionTemplates"];function Es(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"cvc-mp-finder",11),e.NdJ("cvcOnSelect",function(w){e.CHM(s);const ze=e.oxw(2);return e.KtG(ze.onMpSelect$.next(w))}),e.qZA()}}function Fc(l,g){1&l&&(e.TgZ(0,"div",12),e._uU(1," \xa0 "),e.TgZ(2,"span",13)(3,"i"),e._uU(4,"Select or create a Molecular Profile with the expression editor "),e.qZA()()())}function us(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"div",14)(1,"div",15)(2,"cvc-entity-select",16),e.NdJ("cvcOnSearch",function(w){e.CHM(s);const ze=e.oxw(2);return e.KtG(ze.onSearch$.next(w))})("cvcOnModelChange",function(w){e.CHM(s);const ze=e.oxw(2);return e.KtG(ze.props.change&&ze.props.change(ze.field,w))}),e.ALo(3,"ngrxPush"),e.ALo(4,"ngrxPush"),e.ALo(5,"ngrxPush"),e.qZA()()()}if(2&l){const s=e.oxw(2),p=e.MAs(13);e.xp6(2),e.Q6J("cvcSelectMode",s.props.isMultiSelect?"multiple":"default")("cvcCustomTemplate",p)("cvcFormControl",s.formControl)("cvcFormlyAttributes",s.field)("cvcEntityName",s.props.entityName)("cvcPlaceholder",s.props.placeholder)("cvcResults",e.lcZ(3,15,s.result$))("cvcDisabled",s.props.disabled)("cvcAllowClear",!1)("cvcOptions",e.lcZ(4,17,s.selectOption$))("cvcShowError",s.showError)("cvcLoading",e.lcZ(5,19,s.isLoading$))("cvcBorderless",!0)("cvcSuffixIcon",null)("cvcShowArrow",!1)}}function $1(l,g){if(1&l&&(e.ynx(0),e.YNc(1,Es,1,0,"cvc-mp-finder",8),e.YNc(2,Fc,5,0,"div",9),e.YNc(3,us,6,21,"div",10),e.BQk()),2&l){const s=g.ngrxLet,p=e.oxw();e.xp6(1),e.Q6J("ngIf",s.showFinder&&!p.editorOpen),e.xp6(1),e.Q6J("ngIf",p.editorOpen),e.xp6(1),e.Q6J("ngIf",s.showSelect&&!p.editorOpen)}}function Il(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"nz-col",17)(1,"cvc-mp-expression-editor",18),e.NdJ("cvcOnSelect",function(w){e.CHM(s);const ze=e.oxw();return e.KtG(ze.onMpSelect$.next(w))}),e.ALo(2,"ngrxPush"),e.qZA()()}if(2&l){const s=e.oxw();e.xp6(1),e.Q6J("cvcPrepopulateWithId",e.lcZ(2,1,s.onMpId$))}}function U1(l,g){if(1&l&&(e.ynx(0),e.TgZ(1,"em"),e._UZ(2,"span",25),e.ALo(3,"highlightTypeahead"),e.qZA(),e.BQk()),2&l){const s=e.oxw(2).$implicit,p=e.oxw().ngrxLet;e.xp6(2),e.Q6J("innerHtml",e.xi3(3,1,s.molecularProfileAliases.join(", "),p),e.oJD)}}function Vu(l,g){1&l&&e._uU(0,"--")}function Gi(l,g){if(1&l&&(e._UZ(0,"cvc-entity-tag",21),e.TgZ(1,"span",22),e._uU(2," Aliases: "),e.YNc(3,U1,4,4,"ng-container",23),e.YNc(4,Vu,1,0,"ng-template",null,24,e.W1O),e.qZA()),2&l){const s=e.MAs(5),p=e.oxw().$implicit,w=e.oxw().ngrxLet;e.Q6J("cvcDisableLink",!0)("cvcCacheId",p.__typename+":"+p.id)("cvcEmphasize",w),e.xp6(3),e.Q6J("ngIf",p.molecularProfileAliases.length>0)("ngIfElse",s)}}function ur(l,g){1&l&&(e.ynx(0),e.YNc(1,Gi,6,5,"ng-template",null,20,e.W1O),e.BQk())}function Al(l,g){if(1&l&&(e.ynx(0),e.YNc(1,ur,3,0,"ng-container",19),e.ALo(2,"ngrxPush"),e.BQk()),2&l){const s=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,s.result$))}}function j1(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"div",26)(1,"cvc-entity-tag",27),e.NdJ("cvcOnClose",function(){const ze=e.CHM(s).$implicit,ft=e.oxw();return e.KtG(ft.onTagClose$.next(ze.nzValue))}),e.qZA()()}if(2&l){const s=g.$implicit,p=e.oxw();e.xp6(1),e.Q6J("cvcCacheId","MolecularProfile:"+s.nzValue)("cvcContext",p.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",p.props.isMultiSelect?"default":"closeable")}}const G1=function(){return[8,12]},Bu=function(l,g){return{show:l,hide:g}},Fl=To(Lo(),Fo());let Wa=(()=>{class l extends Fl{constructor(s,p,w,ze){super(),this.taq=s,this.tq=p,this.changeDetectorRef=w,this.apollo=ze,this.editorOpen=!1,this.defaultOptions={props:{label:"Molecular Profile",placeholder:"Search Molecular Profiles",tooltip:"A single variant (Simple Molecular Profile) or a combination of variants (Complex Molecular Profile) relevant to the curated assertion.",isMultiSelect:!1,description:"Select a Gene and Variant to specify a simple Molecular Profile.",entityName:{singular:"Molecular Profile",plural:"Molecular Profiles"},minSearchStrLength:1}},this.onMpSelect$=new Be.X(void 0),this.onMpId$=new Qi.t,this.onShowExpClick$=new E.x,this.showExp$=this.onShowExpClick$.pipe((0,wr.R)((ft,vn)=>!ft,!1),(0,St.b)(ft=>this.editorOpen=ft)),this.selectDisplay$=new Be.X({showFinder:!0,showSelect:!1})}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEntitySelectField({typeaheadQuery:this.taq,tagQuery:this.tq,getTypeaheadVarsFn:this.getTypeaheadVarsFn,getTypeaheadResultsFn:this.getTypeaheadResultsFn,getTagQueryVarsFn:this.getTagQueryVarsFn,getTagQueryResultsFn:this.getTagQueryResultsFn,getSelectedItemOptionFn:this.getSelectedItemOptionFn,getSelectOptionsFn:this.getSelectOptionsFn,changeDetectorRef:this.changeDetectorRef,selectOpen$:this.selectOpen$,selectComponent:this.selectComponent}),this.initialDescription=this.props.description,this.onValueChange$.pipe((0,zn.t)(this)).subscribe(s=>{const p=void 0!==s;this.selectDisplay$.next({showFinder:!p,showSelect:p}),this.onMpId$.next(s),this.props.description=s?void 0:this.initialDescription}),this.onMpSelect$.pipe((0,zn.t)(this)).subscribe(s=>{s?(this.selectOption$.next([{label:s.name,value:s.id}]),this.editorOpen&&this.onShowExpClick$.next(),this.cdr.detectChanges(),this.field.formControl.setValue(s.id),this.field.formControl.markAsTouched()):this.selectDisplay$.next({showFinder:!0,showSelect:!1})})}configureStateConnections(){}getTypeaheadVarsFn(s,p){return{name:s,geneId:p}}getTypeaheadResultsFn(s){return s.data.molecularProfiles.nodes}getTagQueryVarsFn(s){return{molecularProfileId:s}}getTagQueryResultsFn(s){return s.data.molecularProfile}getSelectedItemOptionFn(s){return{value:s.id,label:s.name}}getSelectOptionsFn(s,p){return s.map((w,ze)=>({label:p.get(ze)||w.name,value:w.id}))}}return l.\u0275fac=function(s){return new(s||l)(e.Y36(Nn.F4e),e.Y36(Nn.dGO),e.Y36(e.sBO),e.Y36(Pr._M))},l.\u0275cmp=e.Xpm({type:l,selectors:[["ng-component"]],viewQuery:function(s,p){if(1&s&&e.Gf(Qa,5,e.Rgc),2&s){let w;e.iGM(w=e.CRH())&&(p.optionTemplates=w)}},features:[e.qOj],decls:14,vars:16,consts:[[3,"nzGutter"],["nzFlex","auto"],[4,"ngrxLet"],["nzFlex","50px"],["type","button","nz-button","","nzBlock","","nz-tooltip","","nzTooltipTitle","Add/Edit Complex MP Expression",1,"expression-button",3,"click"],["nz-icon","",3,"ngClass","nzType"],["nzSpan","24","class","editor-drawer",4,"ngIf"],["selectedTemplate",""],[3,"cvcOnSelect",4,"ngIf"],["class","editor-message",4,"ngIf"],["class","select-container",4,"ngIf"],[3,"cvcOnSelect"],[1,"editor-message"],["nz-typography","","nzEllipsis","","nzType","secondary"],[1,"select-container"],[1,"limit-select-width"],[3,"cvcSelectMode","cvcCustomTemplate","cvcFormControl","cvcFormlyAttributes","cvcEntityName","cvcPlaceholder","cvcResults","cvcDisabled","cvcAllowClear","cvcOptions","cvcShowError","cvcLoading","cvcBorderless","cvcSuffixIcon","cvcShowArrow","cvcOnSearch","cvcOnModelChange"],["nzSpan","24",1,"editor-drawer"],[3,"cvcPrepopulateWithId","cvcOnSelect"],[4,"ngFor","ngForOf"],["optionTemplates",""],[3,"cvcDisableLink","cvcCacheId","cvcEmphasize"],["nz-typography","","nzType","secondary"],[4,"ngIf","ngIfElse"],["noAliases",""],["nz-typography","","nzType","secondary",3,"innerHtml"],[1,"ant-select-selection-item-content"],[3,"cvcCacheId","cvcContext","cvcMode","cvcOnClose"]],template:function(s,p){1&s&&(e.TgZ(0,"nz-row",0)(1,"nz-col",1),e.YNc(2,$1,4,3,"ng-container",2),e.qZA(),e.TgZ(3,"nz-col",3)(4,"button",4),e.NdJ("click",function(){return p.onShowExpClick$.next()}),e._UZ(5,"span",5),e.ALo(6,"ngrxPush"),e.ALo(7,"ngrxPush"),e._uU(8,"Editor "),e.qZA()(),e.YNc(9,Il,3,3,"nz-col",6),e.ALo(10,"ngrxPush"),e.qZA(),e.YNc(11,Al,3,3,"ng-container",2),e.YNc(12,j1,2,3,"ng-template",null,7,e.W1O)),2&s&&(e.Q6J("nzGutter",e.DdM(12,G1)),e.xp6(2),e.Q6J("ngrxLet",p.selectDisplay$),e.xp6(3),e.Q6J("ngClass",e.WLB(13,Bu,e.lcZ(6,6,p.showExp$),!e.lcZ(7,8,p.showExp$)))("nzType","caret-right"),e.xp6(4),e.Q6J("ngIf",e.lcZ(10,10,p.showExp$)),e.xp6(2),e.Q6J("ngrxLet",p.onSearch$))},dependencies:[a.mk,a.sg,a.O5,lo.eJ,zo.ix,ue.w,et.dQ,de.Ls,R.t3,R.SK,X.ZU,eo.SY,sn,Qt.J,ga,js,lo.fM,hr.A],styles:["form[_ngcontent-%COMP%]   span.hide[_ngcontent-%COMP%], .expression-button[_ngcontent-%COMP%]   span.hide[_ngcontent-%COMP%]{transform:rotate(0);transition:transform .2s linear}form[_ngcontent-%COMP%]   span.show[_ngcontent-%COMP%], .expression-button[_ngcontent-%COMP%]   span.show[_ngcontent-%COMP%]{transform:rotate(90deg);transition:transform .2s linear}.editor-message[_ngcontent-%COMP%]{padding:3px;background-color:#f5f5f5;cursor:default;border-radius:2px}.select-container[_ngcontent-%COMP%]{padding:0;background-color:#fff;cursor:default;border-radius:2px;border:1px solid #d9d9d9}.select-container[_ngcontent-%COMP%]   .limit-select-width[_ngcontent-%COMP%]{display:inline-block;margin-top:-1px;margin-bottom:-1px}"],data:{animation:[Tu.mF,Tu.MC]},changeDetection:0}),l})();const Ad={types:[{name:"molecular-profile-select",wrappers:["form-field"],component:Wa},{name:"molecular-profile-multi-select",wrappers:["form-field"],component:Wa,defaultOptions:{props:{label:"Molecular Profiles",isMultiSelect:!0}}}]};let va=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[a.ez,t.u5,t.UX,_.X0.forChild(Ad),_t.L,zo.sL,Ye.LV,yi.Qp,de.PV,A.o7,R.Jb,Re.zf,L.U5,B.ic,X.ZJ,eo.cg,Wo.$6,Re.zf,ye.Wr,Ki.Ph,Oo.g,x1.r,No,Gt,tt.s,Ce.x]}),l})();const Fd=["optionTemplates"];function Nc(l,g){if(1&l&&(e.TgZ(0,"nz-tag",5),e._uU(1),e.qZA()),2&l){const s=e.oxw().$implicit;e.xp6(1),e.Oqu(s.name)}}function Q1(l,g){1&l&&(e.ynx(0),e.YNc(1,Nc,2,1,"ng-template",null,4,e.W1O),e.BQk())}function Nd(l,g){if(1&l&&(e.ynx(0),e.YNc(1,Q1,3,0,"ng-container",3),e.ALo(2,"ngrxPush"),e.BQk()),2&l){const s=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,s.result$))}}function _a(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"div",6)(1,"cvc-entity-tag",7),e.NdJ("cvcOnClose",function(){const ze=e.CHM(s).$implicit,ft=e.oxw();return e.KtG(ft.onTagClose$.next(ze.nzValue))}),e.qZA()()}if(2&l){const s=g.$implicit,p=e.oxw();e.xp6(1),e.Q6J("cvcDisableLink",!0)("cvcCacheId","NccnGuideline:"+s.nzValue)("cvcContext",p.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",p.props.isMultiSelect?"default":"closeable")("cvcShowIcon",!1)}}const Lc=To(Lo(),Fo());let Nl=(()=>{class l extends Lc{constructor(s,p,w){super(),this.taq=s,this.tq=p,this.changeDetectorRef=w,this.defaultOptions={props:{entityName:{singular:"NCCN Guideline",plural:"NCCN Guidelines"},isMultiSelect:!1,requireType:!1,tooltip:"If applicable, please provide cancer (e.g., Breast Cancer) for the appropriate NCCN guideline.",placeholder:"Search NCCN Guidelines"}},this.placeholder$=new Be.X(void 0)}ngAfterViewInit(){this.configureBaseField(),this.configureEntitySelectField({typeaheadQuery:this.taq,typeaheadParam$:void 0,tagQuery:this.tq,getTypeaheadVarsFn:this.getTypeaheadVarsFn,getTypeaheadResultsFn:this.getTypeaheadResultsFn,getTagQueryVarsFn:this.getTagQueryVarsFn,getTagQueryResultsFn:this.getTagQueryResultsFn,getSelectedItemOptionFn:this.getSelectedItemOptionFn,getSelectOptionsFn:this.getSelectOptionsFn,changeDetectorRef:this.changeDetectorRef,selectComponent:this.selectComponent})}getTypeaheadVarsFn(s){return{name:s}}getTypeaheadResultsFn(s){return s.data.nccnGuidelinesTypeahead}getTagQueryResultsFn(s){return s.data.nccnGuideline}getTagQueryVarsFn(s){return{id:s}}getSelectedItemOptionFn(s){return{value:s.id,label:s.name}}getSelectOptionsFn(s,p){return s.map((w,ze)=>({label:p.get(ze)||w.name,value:w.id}))}}return l.\u0275fac=function(s){return new(s||l)(e.Y36(Nn.sA8),e.Y36(Nn.N$2),e.Y36(e.sBO))},l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-nccn-guideline-select"]],viewQuery:function(s,p){if(1&s&&e.Gf(Fd,5,e.Rgc),2&s){let w;e.iGM(w=e.CRH())&&(p.optionTemplates=w)}},features:[e.qOj],decls:8,vars:20,consts:[[3,"cvcSelectMode","cvcCustomTemplate","cvcFormControl","cvcFormlyAttributes","cvcEntityName","cvcPlaceholder","cvcResults","cvcOptions","cvcShowError","cvcDisabled","cvcLoading","cvcOnSearch","cvcOnOpenChange","cvcOnModelChange"],[4,"ngrxLet"],["selectedTemplate",""],[4,"ngFor","ngForOf"],["optionTemplates",""],["nz-tooltip",""],[1,"ant-select-selection-item-content"],[3,"cvcDisableLink","cvcCacheId","cvcContext","cvcMode","cvcShowIcon","cvcOnClose"]],template:function(s,p){if(1&s&&(e.TgZ(0,"cvc-entity-select",0),e.NdJ("cvcOnSearch",function(ze){return p.onSearch$.next(ze)})("cvcOnOpenChange",function(ze){return p.onOpenChange$.next(ze)})("cvcOnModelChange",function(ze){return p.props.change&&p.props.change(p.field,ze)}),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.ALo(3,"ngrxPush"),e.ALo(4,"ngrxPush"),e.qZA(),e.YNc(5,Nd,3,3,"ng-container",1),e.YNc(6,_a,2,5,"ng-template",null,2,e.W1O)),2&s){const w=e.MAs(7);e.Q6J("cvcSelectMode",p.props.isMultiSelect?"multiple":"default")("cvcCustomTemplate",w)("cvcFormControl",p.formControl)("cvcFormlyAttributes",p.field)("cvcEntityName",p.props.entityName)("cvcPlaceholder",e.lcZ(1,12,p.placeholder$))("cvcResults",e.lcZ(2,14,p.result$))("cvcOptions",e.lcZ(3,16,p.selectOption$))("cvcShowError",p.showError)("cvcDisabled",!1)("cvcLoading",e.lcZ(4,18,p.isLoading$)),e.xp6(5),e.Q6J("ngrxLet",p.onSearch$)}},dependencies:[a.sg,lo.eJ,eo.SY,An.j,sn,Qt.J,lo.fM],changeDetection:0}),l})();const kc={types:[{name:"nccn-guideline-select",wrappers:["form-field"],component:Nl,defaultOptions:{props:{label:"NCCN Guideline"}}},{name:"nccn-guideline-multi-select",wrappers:["form-field"],component:Nl,defaultOptions:{props:{isMultiSelect:!0,label:"NCCN Guideline(s)"}}}]};let W1=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[a.ez,t.UX,_.X0.forChild(kc),_t.L,zo.sL,Ye.LV,Wo.$6,yi.Qp,de.PV,A.o7,R.Jb,eo.cg,Re.zf,L.U5,B.ic,X.ZJ,An.X,No,Gt,tt.s,Ce.x,Tn]}),l})();const Hu=To(Lo()),ya={types:[{name:"nccn-guideline-version-input",component:(()=>{class l extends Hu{constructor(s){super(),this.cdr=s,this.defaultDescription="Please enter the version of the NCCN guideline you're referencing in the format <strong>Version.Year</strong>",this.defaultOptions={validators:{nccnVersionNumber:{expression:p=>{if(p.value){if(/^\d{1,2}\.\d{4}$/.test(p.value)){let w=+p.value.split(".")[1];return w>=2e3&&w<=(new Date).getFullYear()+1}return!1}return!0},message:(p,w)=>`"${w.formControl?.value}" does not fit the format Version.Year`}},props:{label:"NCCN Guideline Version",extraType:"description",description:this.defaultDescription}}}ngAfterViewInit(){this.configureBaseField(),this.state&&this.state.formReady$?this.state.formReady$.pipe((0,yt.h)(s=>s),(0,es.q)(1),(0,zn.t)(this)).subscribe(s=>{this.configureField()}):this.configureField()}configureField(){this.state?.fields.nccnGuidelineId$.pipe((0,zn.t)(this)).subscribe(s=>{s?(this.props.disabled=!1,this.props.required=!0,this.props.extraType="description",this.props.description=this.defaultDescription):(this.props.disabled=!0,this.props.required=!1,this.props.extraType="prompt",this.props.description="NCCN Guideline Version is only required when NCCN Guideline is specified.",this.formControl.setValue(void 0))})}}return l.\u0275fac=function(s){return new(s||l)(e.Y36(e.sBO))},l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-nccn-guideline-version-input"]],features:[e.qOj],decls:1,vars:2,consts:[["nz-input","","placeholder","ex: 1.2023",3,"formControl","formlyAttributes"]],template:function(s,p){1&s&&e._UZ(0,"input",0),2&s&&e.Q6J("formControl",p.formControl)("formlyAttributes",p.field)},dependencies:[t.Fj,t.JJ,t.oH,_.JD,A.Zp],encapsulation:2,changeDetection:0}),l})(),wrappers:["form-field"]}]};let yp=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[a.ez,t.UX,_.X0.forChild(ya),A.o7,No]}),l})();var xs,Ld=c(6928);let ds=((xs=class{constructor(g){this.el=g,this.domChange=new e.vpe,this.changes=new MutationObserver(s=>{(0,dr.D)(s).pipe((0,S.U)(p=>{const w=p.target;return"class"===p.attributeName?{type:"class",change:w.classList.value,key:`${p.attributeName}:${w.classList.value}`}:"disabled"===p.attributeName?{type:"disabled",change:w.disabled,key:`${p.attributeName}:${w.disabled}`}:"hidden"===p.attributeName?{type:"hidden",change:w.hidden,key:`${p.attributeName}:${w.hidden}`}:{type:p.attributeName,change:"unknown change type",key:`${p.attributeName}:unknown-change-type`}}),pt("key"),(0,zn.t)(this)).subscribe(p=>{this.domChange.emit(p)})}),this.changes.observe(this.el.nativeElement,{attributeFilter:["class","disabled","hidden"],attributes:!0,childList:!1,subtree:!1})}ngAfterViewInit(){this.initialClass=this.el.nativeElement.classList.value}ngOnDestroy(){this.changes.disconnect()}}).\u0275fac=function(g){return new(g||xs)(e.Y36(e.SBq))},xs.\u0275dir=e.lG2({type:xs,selectors:[["button","cvcOrgSubmitButton",""]],outputs:{domChange:"domChange"}}),xs);var Ar;function Rc(l,g){if(1&l&&(e.TgZ(0,"button",3),e._uU(1),e.qZA()),2&l){const s=g.ngrxLet,p=e.oxw();e.Q6J("disabled",!p.form.valid)("nzTooltipTrigger",s?"hover":null)("nzTooltipTitle","For "+(null==s?null:s.name)),e.xp6(1),e.hij(" ",p.props.submitLabel," ")}}ds=(0,U.gn)([(0,zn.c)()],ds);const Cp=function(l,g,s){return{"btn-right":l,"btn-left":g,"btn-center":s}};let Z1=((Ar=class extends _.fS{constructor(g,s,p){super(),this.viewerService=g,this.cdr=s,this.apollo=p,this.menuSelection$=new E.x,this.baseButtonClass="org-dropdown-btn",this.defaultOptions={props:{submitLabel:"Submit"}},this.viewer$=this.viewerService.viewer$,this.organizations$=this.viewer$.pipe((0,ai.j)("organizations")),this.mostRecentOrg$=this.viewer$.pipe((0,ai.j)("mostRecentOrg")),this.isDisabled$=new E.x,this.isHidden$=new E.x,this.buttonClass$=new Be.X(this.baseButtonClass),this.subscriptions=[]}ngOnInit(){this.menuSelection$.pipe((0,ni.M)(this.viewer$)).subscribe(([w,ze])=>{const ft={id:`User:${ze.id}`,fragment:Pr.Ps`
            fragment UserMostRecentOrgId on User {
              mostRecentOrganizationId
            }
          `,data:{mostRecentOrganizationId:w}};this.apollo.client.writeFragment(ft)}),this.formUpdate$=new Be.X(this.form.status);const g=this.form.statusChanges.subscribe(w=>this.formUpdate$.next(w)),s=this.formUpdate$.subscribe(w=>this.cdr.detectChanges()),p=this.mostRecentOrg$.pipe((0,ai.j)("id"),(0,yt.h)(ko.ep)).subscribe(w=>{this.formControl.setValue(w)});this.subscriptions=this.subscriptions.concat([g,s,p])}ngAfterViewInit(){if(this.button&&this.button.domChange){const g=this.button.domChange.subscribe(s=>{"class"===s.type&&"string"==typeof s.change?this.buttonClass$.next(`${this.baseButtonClass} ${s.change}`):"disabled"===s.type&&"boolean"==typeof s.change?this.isDisabled$.next(s.change):"hidden"===s.type&&"boolean"==typeof s.change&&this.isHidden$.next(s.change)});this.subscriptions.push(g)}}}).\u0275fac=function(g){return new(g||Ar)(e.Y36(Ha.a),e.Y36(e.sBO),e.Y36(Pr._M))},Ar.\u0275cmp=e.Xpm({type:Ar,selectors:[["cvc-org-submit-button"]],viewQuery:function(g,s){if(1&g&&e.Gf(ds,5),2&g){let p;e.iGM(p=e.CRH())&&(s.button=p.first)}},features:[e.qOj],decls:3,vars:8,consts:[["type","hidden",3,"formControl","formlyAttributes"],[1,"btn-aligner",3,"ngClass"],["cvcOrgSubmitButton","","type","submit","nz-button","","nzType","primary","nz-tooltip","",3,"disabled","nzDanger","nzTooltipTrigger","nzTooltipTitle",4,"ngrxLet"],["cvcOrgSubmitButton","","type","submit","nz-button","","nzType","primary","nz-tooltip","",3,"disabled","nzDanger","nzTooltipTrigger","nzTooltipTitle"]],template:function(g,s){1&g&&(e._UZ(0,"input",0),e.TgZ(1,"div",1),e.YNc(2,Rc,2,4,"button",2),e.qZA()),2&g&&(e.Q6J("formControl",s.formControl)("formlyAttributes",s.field),e.xp6(1),e.Q6J("ngClass",e.kEZ(4,Cp,"right"===s.props.align,"left"===s.props.align,"center"===s.props.align)),e.xp6(1),e.Q6J("ngrxLet",s.mostRecentOrg$))},dependencies:[a.mk,t.Fj,t.JJ,t.oH,lo.eJ,_.JD,zo.ix,ue.w,et.dQ,eo.SY,ds],styles:[".btn-aligner[_ngcontent-%COMP%]{width:100%}.btn-aligner.btn-right[_ngcontent-%COMP%]{text-align:right}.btn-aligner.btn-left[_ngcontent-%COMP%]{text-align:left}.btn-aligner.btn-center[_ngcontent-%COMP%]{text-align:center}"],changeDetection:0}),Ar);Z1=(0,U.gn)([(0,zn.c)({arrayName:"subscriptions"})],Z1);const zp={types:[{name:"org-submit-button",component:Z1}]};let Tp=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[a.ez,t.UX,_.X0.forChild(zp),de.PV,Ld.Rt,zo.sL,Br.b1,eo.cg]}),l})();const Mp=["optionTemplates"];function Ll(l,g){if(1&l&&e._UZ(0,"cvc-attribute-tag",4),2&l){const s=e.oxw().$implicit;e.Q6J("cvcAttrValue",s)}}function K1(l,g){1&l&&(e.ynx(0),e.YNc(1,Ll,1,1,"ng-template",null,3,e.W1O),e.BQk())}function J1(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"div",5)(1,"cvc-attribute-tag",6),e.NdJ("cvcOnClose",function(w){e.CHM(s);const ze=e.oxw();return e.KtG(ze.onTagClose$.next(w))}),e.qZA()()}if(2&l){const s=g.$implicit,p=e.oxw();e.xp6(1),e.Q6J("cvcAttrValue",s.nzValue)("cvcContext",p.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",p.props.isMultiSelect?"default":"closeable")}}const q1=new Map([[Nn.huM.Somatic,"Variant is a mutation, found only in tumor cells, having arisen in a specific tissue (non-germ cell), and is not expected to be inherited or passed to offspring."],[Nn.huM.RareGermline,"Variant is found in every cell (not restricted to tumor/diseased cells) and is thought to exist in less than 1% of the population relevant to this evidence item."],[Nn.huM.CommonGermline,"Variant is found in every cell (not restricted to tumor/diseased cells) and is thought to exist in at least 1% of the population relevant to this evidence item."],[Nn.huM.Combined," Variants in the corresponding Complex Molecular Profile have heterogeneous origins."],[Nn.huM.Unknown,"The variant origin is uncertain based on the available evidence."],[Nn.huM.Na,"The variant type (e.g., expression) is not compatible (or easily classified) with the CIViC concept of variant origin."]]),kd=To(Lo(),go());let Yu=(()=>{class l extends kd{constructor(s){super(),this.cdr=s,this.defaultOptions={props:{label:"Variant Origin",required:!1,isMultiSelect:!1,placeholder:"Select Variant Origin",tooltip:"Identifies whether the variant is inherited (germline mutation) or acquired (somatic mutation) in the context of the study"}},this.originEnum$=new Be.X([])}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEnumSelectField({optionEnum$:this.originEnum$,optionTemplate$:this.optionTemplate$,changeDetectorRef:this.cdr}),this.originEnum$.next(Array.from(q1.keys()))}configureStateConnections(){this.optionTemplates||console.error(`${this.field.id} could not find its optionTemplates QueryList to populate its select options, so simple text labels will be displayed.`),this.optionTemplate$=this.optionTemplates?.changes.pipe((0,S.U)(s=>s.map(p=>p))),this.onValueChange$.pipe((0,zn.t)(this)).subscribe(s=>{s?(this.props.description=q1.get(s),this.props.extraType="description"):(this.props.description=void 0,this.props.extraType="prompt")})}}return l.\u0275fac=function(s){return new(s||l)(e.Y36(e.sBO))},l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-origin-select"]],viewQuery:function(s,p){if(1&s&&e.Gf(Mp,5,e.Rgc),2&s){let w;e.iGM(w=e.CRH())&&(p.optionTemplates=w)}},features:[e.qOj],decls:6,vars:13,consts:[[3,"cvcFormControl","cvcFormlyAttributes","cvcSelectMode","cvcPlaceholder","cvcCustomTemplate","cvcOptions","cvcShowError","cvcDisabled"],[4,"ngFor","ngForOf"],["selectedTemplate",""],["optionTemplates",""],[3,"cvcAttrValue"],[1,"ant-select-selection-item-content"],[3,"cvcAttrValue","cvcContext","cvcMode","cvcOnClose"]],template:function(s,p){if(1&s&&(e._UZ(0,"cvc-enum-select",0),e.ALo(1,"ngrxPush"),e.YNc(2,K1,3,0,"ng-container",1),e.ALo(3,"ngrxPush"),e.YNc(4,J1,2,3,"ng-template",null,2,e.W1O)),2&s){const w=e.MAs(5);e.Q6J("cvcFormControl",p.formControl)("cvcFormlyAttributes",p.field)("cvcSelectMode",p.props.isMultiSelect?"multiple":"default")("cvcPlaceholder",p.props.placeholder)("cvcCustomTemplate",w)("cvcOptions",e.lcZ(1,9,p.selectOption$))("cvcShowError",p.showError)("cvcDisabled",p.props.disabled),e.xp6(2),e.Q6J("ngForOf",e.lcZ(3,11,p.originEnum$))}},dependencies:[a.sg,Do,Ie,lo.fM]}),l})();const kl={types:[{name:"origin-select",wrappers:["form-field"],component:Yu},{name:"origin-multi-select",wrappers:["form-field"],component:Yu,defaultOptions:{props:{label:"Variant Origins",isMultiSelect:!0}}}]};let Ds=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[a.ez,t.UX,_.X0.forChild(kl),No,Kn,xr]}),l})();const Os=["optionTemplates"];function X1(l,g){if(1&l&&(e.ynx(0),e.TgZ(1,"em"),e._UZ(2,"span",8),e.ALo(3,"highlightTypeahead"),e.qZA(),e.BQk()),2&l){const s=e.oxw(2).$implicit,p=e.oxw().ngrxLet;e.xp6(2),e.Q6J("innerHtml",e.xi3(3,1,s.hpoId,p),e.oJD)}}function $u(l,g){if(1&l&&(e._UZ(0,"cvc-entity-tag",5),e.TgZ(1,"span",6),e.YNc(2,X1,4,4,"ng-container",7),e.qZA()),2&l){const s=e.oxw().$implicit,p=e.oxw().ngrxLet;e.Q6J("cvcDisableLink",!0)("cvcCacheId",s.__typename+":"+s.id)("cvcEmphasize",p),e.xp6(2),e.Q6J("ngIf",s.hpoId)}}function Rd(l,g){1&l&&(e.ynx(0),e.YNc(1,$u,3,4,"ng-template",null,4,e.W1O),e.BQk())}function Vd(l,g){if(1&l&&(e.ynx(0),e.YNc(1,Rd,3,0,"ng-container",3),e.ALo(2,"ngrxPush"),e.BQk()),2&l){const s=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,s.result$))}}function bp(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"div",9)(1,"cvc-entity-tag",10),e.NdJ("cvcOnClose",function(){const ze=e.CHM(s).$implicit,ft=e.oxw();return e.KtG(ft.onTagClose$.next(ze.nzValue))}),e.qZA()()}if(2&l){const s=g.$implicit,p=e.oxw();e.xp6(1),e.Q6J("cvcCacheId","Phenotype:"+s.nzValue)("cvcContext",p.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",p.props.isMultiSelect?"default":"closeable")}}const Sp=To(Lo(),Fo());let Uu=(()=>{class l extends Sp{constructor(s,p,w){super(),this.taq=s,this.tq=p,this.changeDetectorRef=w,this.defaultOptions={props:{entityName:{singular:"Phenotype",plural:"Phenotypes"},isMultiSelect:!1,requireType:!0,tooltip:"Phenotype or phenotype combination which interacts with the specified variant",placeholders:{default:"Search Phenotypes",multiDefault:"Select Phenotype(s) (max MULTI_MAX)",requireTypePrompt:"Select an ENTITY_NAME Type to search Phenotypes"},description:'Please provide any <a href="https://hpo.jax.org/app/browse/term/HP:0000118" target="_blank">HPO phenotypes</a>, including <a href="https://hpo.jax.org/app/browse/term/HP:0003674" target="_blank">age of onset</a>.',extraType:"prompt"}},this.placeholder$=new Be.X(this.defaultOptions.props.placeholders.default)}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEntitySelectField({typeaheadQuery:this.taq,typeaheadParam$:void 0,tagQuery:this.tq,getTypeaheadVarsFn:this.getTypeaheadVarsFn,getTypeaheadResultsFn:this.getTypeaheadResultsFn,getTagQueryVarsFn:this.getTagQueryVarsFn,getTagQueryResultsFn:this.getTagQueryResultsFn,getSelectedItemOptionFn:this.getSelectedItemOptionFn,getSelectOptionsFn:this.getSelectOptionsFn,changeDetectorRef:this.changeDetectorRef,selectOpen$:this.selectOpen$,selectComponent:this.selectComponent}),this.configurePlaceholders()}configureStateConnections(){}configurePlaceholders(){}getTypeaheadVarsFn(s){return{name:s}}getTypeaheadResultsFn(s){return s.data.phenotypeTypeahead}getTagQueryVarsFn(s){return{id:s}}getTagQueryResultsFn(s){return s.data.phenotype}getSelectedItemOptionFn(s){return{value:s.id,label:s.name}}getSelectOptionsFn(s,p){return s.map((w,ze)=>({label:p.get(ze)||w.name,value:w.id}))}}return l.\u0275fac=function(s){return new(s||l)(e.Y36(Nn.zOE),e.Y36(Nn.z_7),e.Y36(e.sBO))},l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-phenotype-select"]],viewQuery:function(s,p){if(1&s&&e.Gf(Os,5,e.Rgc),2&s){let w;e.iGM(w=e.CRH())&&(p.optionTemplates=w)}},features:[e.qOj],decls:9,vars:22,consts:[[3,"cvcSelectMode","cvcCustomTemplate","cvcFormControl","cvcFormlyAttributes","cvcEntityName","cvcPlaceholder","cvcResults","cvcOptions","cvcShowError","cvcDisabled","cvcLoading","cvcOnSearch","cvcOnOpenChange","cvcOnModelChange"],[4,"ngrxLet"],["selectedTemplate",""],[4,"ngFor","ngForOf"],["optionTemplates",""],[3,"cvcDisableLink","cvcCacheId","cvcEmphasize"],["nz-typography","","nzType","secondary"],[4,"ngIf"],["nz-typography","","nzType","secondary",3,"innerHtml"],[1,"ant-select-selection-item-content"],[3,"cvcCacheId","cvcContext","cvcMode","cvcOnClose"]],template:function(s,p){if(1&s&&(e.TgZ(0,"cvc-entity-select",0),e.NdJ("cvcOnSearch",function(ze){return p.onSearch$.next(ze)})("cvcOnOpenChange",function(ze){return p.onOpenChange$.next(ze)})("cvcOnModelChange",function(ze){return p.props.change&&p.props.change(p.field,ze)}),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.ALo(3,"ngrxPush"),e.ALo(4,"ngrxPush"),e.ALo(5,"ngrxPush"),e.qZA(),e.YNc(6,Vd,3,3,"ng-container",1),e.YNc(7,bp,2,3,"ng-template",null,2,e.W1O)),2&s){const w=e.MAs(8);e.Q6J("cvcSelectMode",p.props.isMultiSelect?"multiple":"default")("cvcCustomTemplate",w)("cvcFormControl",p.formControl)("cvcFormlyAttributes",p.field)("cvcEntityName",p.props.entityName)("cvcPlaceholder",e.lcZ(1,12,p.placeholder$))("cvcResults",e.lcZ(2,14,p.result$))("cvcOptions",e.lcZ(3,16,p.selectOption$))("cvcShowError",p.showError)("cvcDisabled",p.onRequiresPhenotype$&&!e.lcZ(4,18,p.onRequiresPhenotype$))("cvcLoading",e.lcZ(5,20,p.isLoading$)),e.xp6(6),e.Q6J("ngrxLet",p.onSearch$)}},dependencies:[a.sg,a.O5,lo.eJ,X.ZU,sn,Qt.J,lo.fM,hr.A],changeDetection:0}),l})();const ju={types:[{name:"phenotype-select",wrappers:["form-field"],component:Uu,defaultOptions:{props:{label:"Phenotype"}}},{name:"phenotype-multi-select",wrappers:["form-field"],component:Uu,defaultOptions:{props:{isMultiSelect:!0,label:"Phenotypes"}}}]};let ed=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[a.ez,t.UX,_.X0.forChild(ju),_t.L,zo.sL,Ye.LV,Wo.$6,yi.Qp,de.PV,A.o7,R.Jb,eo.cg,Re.zf,L.U5,B.ic,X.ZJ,An.X,No,Gt,tt.s,Ce.x]}),l})();var td=c(874);const Gu=["nz-rate-item",""];function Ep(l,g){}function Bd(l,g){}function Hd(l,g){1&l&&e._UZ(0,"span",4)}const Qu=function(l){return{$implicit:l}},Rl=["ulElement"];function Vl(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"li",3)(1,"div",4),e.NdJ("itemHover",function(w){const ft=e.CHM(s).index,vn=e.oxw();return e.KtG(vn.onItemHover(ft,w))})("itemClick",function(w){const ft=e.CHM(s).index,vn=e.oxw();return e.KtG(vn.onItemClick(ft,w))}),e.qZA()()}if(2&l){const s=g.index,p=e.oxw();e.Q6J("ngClass",p.starStyleArray[s]||"")("nzTooltipTitle",p.nzTooltips[s]),e.xp6(1),e.Q6J("allowHalf",p.nzAllowHalf)("character",p.nzCharacter)("index",s)}}let nd=(()=>{class l{constructor(){this.index=0,this.allowHalf=!1,this.itemHover=new e.vpe,this.itemClick=new e.vpe}hoverRate(s){this.itemHover.next(s&&this.allowHalf)}clickRate(s){this.itemClick.next(s&&this.allowHalf)}}return l.\u0275fac=function(s){return new(s||l)},l.\u0275cmp=e.Xpm({type:l,selectors:[["","nz-rate-item",""]],inputs:{character:"character",index:"index",allowHalf:"allowHalf"},outputs:{itemHover:"itemHover",itemClick:"itemClick"},exportAs:["nzRateItem"],attrs:Gu,decls:6,vars:8,consts:[[1,"ant-rate-star-second",3,"mouseover","click"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"ant-rate-star-first",3,"mouseover","click"],["defaultCharacter",""],["nz-icon","","nzType","star","nzTheme","fill"]],template:function(s,p){if(1&s&&(e.TgZ(0,"div",0),e.NdJ("mouseover",function(ze){return p.hoverRate(!1),ze.stopPropagation()})("click",function(){return p.clickRate(!1)}),e.YNc(1,Ep,0,0,"ng-template",1),e.qZA(),e.TgZ(2,"div",2),e.NdJ("mouseover",function(ze){return p.hoverRate(!0),ze.stopPropagation()})("click",function(){return p.clickRate(!0)}),e.YNc(3,Bd,0,0,"ng-template",1),e.qZA(),e.YNc(4,Hd,1,0,"ng-template",null,3,e.W1O)),2&s){const w=e.MAs(5);e.xp6(1),e.Q6J("ngTemplateOutlet",p.character||w)("ngTemplateOutletContext",e.VKq(4,Qu,p.index)),e.xp6(2),e.Q6J("ngTemplateOutlet",p.character||w)("ngTemplateOutletContext",e.VKq(6,Qu,p.index))}},dependencies:[a.tP,de.Ls],encapsulation:2,changeDetection:0}),(0,U.gn)([(0,b.yF)()],l.prototype,"allowHalf",void 0),l})(),xp=(()=>{class l{get nzValue(){return this._value}set nzValue(s){this._value!==s&&(this._value=s,this.hasHalf=!Number.isInteger(s),this.hoverValue=Math.ceil(s))}constructor(s,p,w,ze,ft,vn){this.nzConfigService=s,this.ngZone=p,this.renderer=w,this.cdr=ze,this.directionality=ft,this.destroy$=vn,this._nzModuleName="rate",this.nzAllowClear=!0,this.nzAllowHalf=!1,this.nzDisabled=!1,this.nzAutoFocus=!1,this.nzCount=5,this.nzTooltips=[],this.nzOnBlur=new e.vpe,this.nzOnFocus=new e.vpe,this.nzOnHoverChange=new e.vpe,this.nzOnKeyDown=new e.vpe,this.classMap={},this.starArray=[],this.starStyleArray=[],this.dir="ltr",this.hasHalf=!1,this.hoverValue=0,this.isFocused=!1,this._value=0,this.isNzDisableFirstChange=!0,this.onChange=()=>null,this.onTouched=()=>null}ngOnChanges(s){const{nzAutoFocus:p,nzCount:w,nzValue:ze}=s;if(p&&!p.isFirstChange()){const ft=this.ulElement.nativeElement;this.nzAutoFocus&&!this.nzDisabled?this.renderer.setAttribute(ft,"autofocus","autofocus"):this.renderer.removeAttribute(ft,"autofocus")}w&&this.updateStarArray(),ze&&this.updateStarStyle()}ngOnInit(){this.nzConfigService.getConfigChangeEventForComponent("rate").pipe((0,me.R)(this.destroy$)).subscribe(()=>this.cdr.markForCheck()),this.directionality.change.pipe((0,me.R)(this.destroy$)).subscribe(s=>{this.dir=s,this.cdr.detectChanges()}),this.dir=this.directionality.value,this.ngZone.runOutsideAngular(()=>{(0,H.R)(this.ulElement.nativeElement,"focus").pipe((0,me.R)(this.destroy$)).subscribe(s=>{this.isFocused=!0,this.nzOnFocus.observers.length&&this.ngZone.run(()=>this.nzOnFocus.emit(s))}),(0,H.R)(this.ulElement.nativeElement,"blur").pipe((0,me.R)(this.destroy$)).subscribe(s=>{this.isFocused=!1,this.nzOnBlur.observers.length&&this.ngZone.run(()=>this.nzOnBlur.emit(s))})})}onItemClick(s,p){if(this.nzDisabled)return;this.hoverValue=s+1;const w=p?s+.5:s+1;this.nzValue===w?this.nzAllowClear&&(this.nzValue=0,this.onChange(this.nzValue)):(this.nzValue=w,this.onChange(this.nzValue)),this.updateStarStyle()}onItemHover(s,p){this.nzDisabled||this.hoverValue===s+1&&p===this.hasHalf||(this.hoverValue=s+1,this.hasHalf=p,this.nzOnHoverChange.emit(this.hoverValue),this.updateStarStyle())}onRateLeave(){this.hasHalf=!Number.isInteger(this.nzValue),this.hoverValue=Math.ceil(this.nzValue),this.updateStarStyle()}focus(){this.ulElement.nativeElement.focus()}blur(){this.ulElement.nativeElement.blur()}onKeyDown(s){const p=this.nzValue;s.keyCode===O.SV&&this.nzValue<this.nzCount?this.nzValue+=this.nzAllowHalf?.5:1:s.keyCode===O.oh&&this.nzValue>0&&(this.nzValue-=this.nzAllowHalf?.5:1),p!==this.nzValue&&(this.onChange(this.nzValue),this.nzOnKeyDown.emit(s),this.updateStarStyle(),this.cdr.markForCheck())}updateStarArray(){this.starArray=Array(this.nzCount).fill(0).map((s,p)=>p),this.updateStarStyle()}updateStarStyle(){this.starStyleArray=this.starArray.map(s=>{const p="ant-rate-star",w=s+1;return{[`${p}-full`]:w<this.hoverValue||!this.hasHalf&&w===this.hoverValue,[`${p}-half`]:this.hasHalf&&w===this.hoverValue,[`${p}-active`]:this.hasHalf&&w===this.hoverValue,[`${p}-zero`]:w>this.hoverValue,[`${p}-focused`]:this.hasHalf&&w===this.hoverValue&&this.isFocused}})}writeValue(s){this.nzValue=s||0,this.updateStarArray(),this.cdr.markForCheck()}setDisabledState(s){this.nzDisabled=this.isNzDisableFirstChange&&this.nzDisabled||s,this.isNzDisableFirstChange=!1,this.cdr.markForCheck()}registerOnChange(s){this.onChange=s}registerOnTouched(s){this.onTouched=s}}return l.\u0275fac=function(s){return new(s||l)(e.Y36(td.jY),e.Y36(e.R0b),e.Y36(e.Qsj),e.Y36(e.sBO),e.Y36(le.Is,8),e.Y36(I.kn))},l.\u0275cmp=e.Xpm({type:l,selectors:[["nz-rate"]],viewQuery:function(s,p){if(1&s&&e.Gf(Rl,7),2&s){let w;e.iGM(w=e.CRH())&&(p.ulElement=w.first)}},inputs:{nzAllowClear:"nzAllowClear",nzAllowHalf:"nzAllowHalf",nzDisabled:"nzDisabled",nzAutoFocus:"nzAutoFocus",nzCharacter:"nzCharacter",nzCount:"nzCount",nzTooltips:"nzTooltips"},outputs:{nzOnBlur:"nzOnBlur",nzOnFocus:"nzOnFocus",nzOnHoverChange:"nzOnHoverChange",nzOnKeyDown:"nzOnKeyDown"},exportAs:["nzRate"],features:[e._Bn([I.kn,{provide:t.JU,useExisting:(0,e.Gpc)(()=>l),multi:!0}]),e.TTD],decls:3,vars:7,consts:[[1,"ant-rate",3,"ngClass","tabindex","keydown","mouseleave"],["ulElement",""],["class","ant-rate-star","nz-tooltip","",3,"ngClass","nzTooltipTitle",4,"ngFor","ngForOf"],["nz-tooltip","",1,"ant-rate-star",3,"ngClass","nzTooltipTitle"],["nz-rate-item","",3,"allowHalf","character","index","itemHover","itemClick"]],template:function(s,p){1&s&&(e.TgZ(0,"ul",0,1),e.NdJ("keydown",function(ze){return p.onKeyDown(ze),ze.preventDefault()})("mouseleave",function(ze){return p.onRateLeave(),ze.stopPropagation()}),e.YNc(2,Vl,2,5,"li",2),e.qZA()),2&s&&(e.ekj("ant-rate-disabled",p.nzDisabled)("ant-rate-rtl","rtl"===p.dir),e.Q6J("ngClass",p.classMap)("tabindex",p.nzDisabled?-1:1),e.xp6(2),e.Q6J("ngForOf",p.starArray))},dependencies:[a.mk,a.sg,eo.SY,nd],encapsulation:2,changeDetection:0}),(0,U.gn)([(0,td.oS)(),(0,b.yF)()],l.prototype,"nzAllowClear",void 0),(0,U.gn)([(0,td.oS)(),(0,b.yF)()],l.prototype,"nzAllowHalf",void 0),(0,U.gn)([(0,b.yF)()],l.prototype,"nzDisabled",void 0),(0,U.gn)([(0,b.yF)()],l.prototype,"nzAutoFocus",void 0),(0,U.gn)([(0,b.Rn)()],l.prototype,"nzCount",void 0),l})(),nr=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[le.vT,a.ez,de.PV,eo.cg]}),l})();const od={1:"Poor - Claim is not supported well by experimental evidence. Results are not reproducible, or have very small sample size. No follow-up is done to validate novel claims.",2:"Adequate - Evidence is not well supported by experimental data, and little follow-up data is available. Experiments may lack proper controls, have small sample size, or are not statistically convincing.",3:"Average - Evidence is convincing, but not supported by a breadth of experiments. May be smaller scale projects, or novel results without many follow-up experiments. Discrepancies from expected results are explained and not concerning.",4:"Strong - Well supported evidence. Experiments are well controlled, and results are convincing. Any discrepancies from expected results are well-explained and not concerning.",5:"Excellent - Solid, well supported evidence from a lab or journal with respected academic standing. Experiments are well controlled, and results are clean and reproducible across multiple replicates. Evidence confirmed using separate methods."},Zu=To(Lo(),go()),id={types:[{name:"rating",wrappers:["form-field"],component:(()=>{class l extends Zu{constructor(){super(),this.defaultOptions={props:{label:"Evidence Rating",count:5,tooltip:"A representation of the curator's confidence in the quality of the summarized evidence",hoverText:[]}},this.rating$=new Be.X(void 0)}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.formControl.value&&this.rating$.next(this.formControl.value),Object.entries(od).map(([s,p])=>{this.props.hoverText.push(p)}),this.rating$.pipe((0,zn.t)(this)).subscribe(s=>{this.formControl.setValue(s)}),this.onValueChange$.pipe((0,zn.t)(this)).subscribe(s=>{s&&0!==s?(this.props.description=od[s],this.props.extraType="description"):(this.formControl.setValue(void 0),this.props.description=void 0,this.props.extraType="prompt")})}configureStateConnections(){}}return l.\u0275fac=function(s){return new(s||l)},l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-rating"]],features:[e.qOj],decls:3,vars:5,consts:[["type","hidden",3,"formControl","formlyAttributes"],[1,"rate-block"],[3,"ngModel","nzCount","nzTooltips","ngModelChange"]],template:function(s,p){1&s&&(e._UZ(0,"input",0),e.TgZ(1,"div",1)(2,"nz-rate",2),e.NdJ("ngModelChange",function(ze){return p.rating$.next(ze)}),e.qZA()()),2&s&&(e.Q6J("formControl",p.formControl)("formlyAttributes",p.field),e.xp6(2),e.Q6J("ngModel",p.formControl.value)("nzCount",p.props.count)("nzTooltips",p.props.hoverText))},dependencies:[t.Fj,t.JJ,t.oH,t.On,_.JD,xp],styles:["[_nghost-%COMP%]   .rate-block[_ngcontent-%COMP%]{display:inline-block;background-color:#fff;border-radius:2px;padding:2px 4px;margin-top:-4px}[_nghost-%COMP%]     nz-rate .anticon{font-size:160%}"],changeDetection:0}),l})()}]};let Dp=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[a.ez,t.UX,t.u5,_.X0.forChild(id),nr,tt.s,No,Kn]}),l})();const Yd=["optionTemplates"];function $d(l,g){if(1&l&&(e.TgZ(0,"nz-tag")(1,"strong"),e._uU(2),e.qZA()()),2&l){const s=e.oxw().$implicit;e.xp6(2),e.Oqu(s)}}function za(l,g){1&l&&(e.ynx(0),e.YNc(1,$d,3,1,"ng-template",null,3,e.W1O),e.BQk())}function rd(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"nz-tag",7),e.NdJ("nzOnClose",function(w){e.CHM(s);const ze=e.oxw(2);return e.KtG(ze.onTagClose$.next(w))}),e.TgZ(1,"strong"),e._uU(2),e.qZA()()}if(2&l){const s=e.oxw().$implicit;e.xp6(2),e.Oqu(s.nzValue)}}function eh(l,g){if(1&l&&(e.ynx(0),e._uU(1),e.BQk()),2&l){const s=e.oxw().$implicit;e.xp6(1),e.hij(" ",s.nzValue," ")}}function th(l,g){if(1&l&&(e.TgZ(0,"div",4),e.YNc(1,rd,3,1,"nz-tag",5),e.YNc(2,eh,2,1,"ng-container",6),e.qZA()),2&l){const s=e.oxw();e.xp6(1),e.Q6J("ngIf",!s.props.isMultiSelect),e.xp6(1),e.Q6J("ngIf",s.props.isMultiSelect)}}const Ta=To(Lo(),go());let fi=(()=>{class l extends Ta{constructor(s){super(),this.cdr=s,this.defaultOptions={props:{label:"Reference Build",required:!1,isMultiSelect:!1,description:"Select the human genome reference sequence from which these coordinates are obtained",placeholder:"Select Reference Build"}},this.buildEnum$=new Be.X([])}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEnumSelectField({optionEnum$:this.buildEnum$,optionTemplate$:this.optionTemplate$,changeDetectorRef:this.cdr})}configureStateConnections(){this.placeholder$=new Be.X(this.props.placeholder),this.buildEnum$.next((0,So.o6)(Nn.JDX).map(s=>s)),this.optionTemplates||console.error(`${this.field.id} could not find its optionTemplates QueryList to populate its select options, so simple text labels will be displayed.`),this.optionTemplate$=this.optionTemplates?.changes.pipe((0,S.U)(s=>s.map(p=>p)))}}return l.\u0275fac=function(s){return new(s||l)(e.Y36(e.sBO))},l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-reference-build-select"]],viewQuery:function(s,p){if(1&s&&e.Gf(Yd,5,e.Rgc),2&s){let w;e.iGM(w=e.CRH())&&(p.optionTemplates=w)}},features:[e.qOj],decls:7,vars:15,consts:[[3,"cvcFormControl","cvcFormlyAttributes","cvcSelectMode","cvcPlaceholder","cvcCustomTemplate","cvcOptions","cvcShowError","cvcDisabled"],[4,"ngFor","ngForOf"],["selectedTemplate",""],["optionTemplates",""],[1,"ant-select-selection-item-content"],["nzMode","closeable",3,"nzOnClose",4,"ngIf"],[4,"ngIf"],["nzMode","closeable",3,"nzOnClose"]],template:function(s,p){if(1&s&&(e._UZ(0,"cvc-enum-select",0),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.YNc(3,za,3,0,"ng-container",1),e.ALo(4,"ngrxPush"),e.YNc(5,th,3,2,"ng-template",null,2,e.W1O)),2&s){const w=e.MAs(6);e.Q6J("cvcFormControl",p.formControl)("cvcFormlyAttributes",p.field)("cvcSelectMode",p.props.isMultiSelect?"multiple":"default")("cvcPlaceholder",e.lcZ(1,9,p.placeholder$))("cvcCustomTemplate",w)("cvcOptions",e.lcZ(2,11,p.selectOption$))("cvcShowError",p.showError)("cvcDisabled",p.props.disabled),e.xp6(3),e.Q6J("ngForOf",e.lcZ(4,13,p.buildEnum$))}},dependencies:[a.sg,a.O5,An.j,Do,lo.fM]}),l})();const Ku={types:[{name:"reference-build-select",wrappers:["form-field"],component:fi},{name:"reference-build-multi-select",wrappers:["form-field"],component:fi,defaultOptions:{props:{label:"Levels",isMultiSelect:!0}}}]};let Op=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[a.ez,t.UX,_.X0.forChild(Ku),An.X,tt.s,No,Kn]}),l})();const wp=["optionTemplates"];function xi(l,g){if(1&l&&e._UZ(0,"cvc-attribute-tag",4),2&l){const s=e.oxw().$implicit;e.Q6J("cvcAttrValue",s)}}function Bl(l,g){1&l&&(e.ynx(0),e.YNc(1,xi,1,1,"ng-template",null,3,e.W1O),e.BQk())}function Pp(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"div",5)(1,"cvc-attribute-tag",6),e.NdJ("cvcOnClose",function(w){e.CHM(s);const ze=e.oxw();return e.KtG(ze.onTagClose$.next(w))}),e.qZA()()}if(2&l){const s=g.$implicit,p=e.oxw();e.xp6(1),e.Q6J("cvcAttrValue",s.nzValue)("cvcContext",p.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",p.props.isMultiSelect?"default":"closeable")}}const Ud={Evidence:{PREDICTIVE:{SENSITIVITYRESPONSE:"Associated with a clinical or preclinical response to treatment",RESISTANCE:"Associated with clinical or preclinical resistance to treatment",ADVERSE_RESPONSE:"Associated with an adverse response to drug treatment",REDUCED_SENSITIVITY:"Response to treatment is lower than seen in other treatment contexts",NA:"Clinical Significance is not applicable."},DIAGNOSTIC:{POSITIVE:"Associated with diagnosis of disease or subtype",NEGATIVE:"Associated with lack of disease or subtype"},PROGNOSTIC:{BETTER_OUTCOME:"Demonstrates better than expected clinical outcome",POOR_OUTCOME:"Demonstrates worse than expected clinical outcome",NA:"Clinical Significance is not applicable."},PREDISPOSING:{PREDISPOSITION:"Germline variant has predisposing potential for cancer, and may meet select ACMG/AMP criteria supporting pathogenic or benign classification.",PROTECTIVENESS:"Germline variant has properties that protect individuals from acquiring cancer."},FUNCTIONAL:{GAIN_OF_FUNCTION:"Sequence variant confers an increase in normal gene function",LOSS_OF_FUNCTION:"Sequence variant confers a diminished or abolished function",UNALTERED_FUNCTION:"Gene product of sequence variant is unchanged",NEOMORPHIC:"Sequence variant creates a novel function",DOMINANT_NEGATIVE:"Sequence variant abrogates function of wildtype allele gene product",UNKNOWN:"Sequence variant that cannot be precisely defined by the other listed categories"},ONCOGENIC:{ONCOGENICITY:"Somatic variant has oncogenic potential for driving cancer, and may meet select ClinGen/CGC/VICC criteria supporting pathogenic or benign classification.",PROTECTIVENESS:"Somatic variant has a protective role against cancer."}},Assertion:{PREDICTIVE:{SENSITIVITYRESPONSE:"Associated with a clinical or preclinical response to treatment",RESISTANCE:"Associated with clinical or preclinical resistance to treatment",ADVERSE_RESPONSE:"Associated with an adverse response to drug treatment",REDUCED_SENSITIVITY:"Response to treatment is lower than seen in other treatment contexts",NA:"Clinical Significance is not applicable."},DIAGNOSTIC:{POSITIVE:"Associated with diagnosis of disease or subtype",NEGATIVE:"Associated with lack of disease or subtype"},PROGNOSTIC:{BETTER_OUTCOME:"Demonstrates better than expected clinical outcome",POOR_OUTCOME:"Demonstrates worse than expected clinical outcome",NA:"Clinical Significance is not applicable."},PREDISPOSING:{PATHOGENIC:"Very strong evidence the variant is pathogenic",LIKELY_PATHOGENIC:"Strong evidence (>90% certainty) the variant is pathogenic.",BENIGN:"Very strong evidence the variant is benign",LIKELY_BENIGN:"Not expected to have a major effect on disease",UNCERTAIN_SIGNIFICANCE:"Does not meet the ACMG/AMP criteria for pathogenic/benign, or the evidence is conflicting"},ONCOGENIC:{ONCOGENIC:"Very strong evidence the variant is oncogenic.",LIKELY_ONCOGENIC:"Strong evidence the variant is oncogenic.",BENIGN:"Very strong evidence the variant does not have oncogenic properties.",LIKELY_BENIGN:"Strong evidence the variant does not have oncogenic properties.",UNCERTAIN_SIGNIFICANCE:"Does not meet guideline criteria for oncogenic/benign, or the evidence is conflicting."}}},jd=To(Lo(),go()),nh={types:[{name:"significance-select",wrappers:["form-field"],component:(()=>{class l extends jd{constructor(s){super(),this.cdr=s,this.defaultOptions={props:{label:"Significance",required:!0,isMultiSelect:!1,placeholder:"Select Significance",placeholderFn:p=>`Select ${p?p+" ":""} Significance`,requireTypePromptFn:p=>`Select ${p} Type to select its Significance`,tooltip:"Clinical impact of the variant",formMode:"add"}},this.significanceEnum$=new Be.X([])}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEnumSelectField({optionEnum$:this.significanceEnum$,optionTemplate$:this.optionTemplate$,changeDetectorRef:this.cdr})}configureStateConnections(){if(!this.state)return console.error(`${this.field.id} requires a form state to populate its options, none was found.`),void(this.placeholder$=new Be.X("ERROR: Form state not found"));if(this.placeholder$=new Be.X(this.props.placeholderFn(this.state.entityName)),!this.state.enums.significance$)return void console.error(`${this.field.id} could not find form state's enums.significance$ to populate select.`);this.state.enums.significance$.pipe((0,zn.t)(this)).subscribe(p=>{this.significanceEnum$.next(p)}),this.optionTemplates||console.warn(`${this.field.id} could not find its optionTemplates QueryList to populate its select options, so simple text labels will be displayed.`),this.optionTemplate$=this.optionTemplates?.changes.pipe((0,S.U)(p=>p.map(w=>w)));const s=`${this.state.entityName.toLowerCase()}Type$`;this.state.fields[s]?(this.onTypeSelect$=this.state.fields[s],this.onTypeSelect$.pipe((0,Oi.T)("add"===this.props.formMode?0:1),(0,zn.t)(this)).subscribe(p=>{p?(this.props.disabled=!1,this.props.description=void 0,this.props.extraType=void 0,this.placeholder$.next(this.props.placeholderFn(this.state.entityName))):(this.props.disabled=!0,this.props.description=this.props.requireTypePromptFn(this.state.entityName),this.props.extraType="prompt"),this.formControl.value&&this.formControl.setValue(void 0)}),this.onValueChange$.pipe((0,ni.M)(this.onTypeSelect$),(0,zn.t)(this)).subscribe(([p,w])=>{!w||!p||!this.state||(this.props.description=void 0,this.props.extraType="description",this.props.description=Ud[this.state.entityName][w][p],this.field.formControl.markAsTouched())})):console.error(`${this.field.id} could not find form state's ${s} to populate Significance options.`)}}return l.\u0275fac=function(s){return new(s||l)(e.Y36(e.sBO))},l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-significance-select"]],viewQuery:function(s,p){if(1&s&&e.Gf(wp,5,e.Rgc),2&s){let w;e.iGM(w=e.CRH())&&(p.optionTemplates=w)}},features:[e.qOj],decls:7,vars:15,consts:[[3,"cvcFormControl","cvcFormlyAttributes","cvcSelectMode","cvcPlaceholder","cvcCustomTemplate","cvcOptions","cvcShowError","cvcDisabled"],[4,"ngFor","ngForOf"],["selectedTemplate",""],["optionTemplates",""],[3,"cvcAttrValue"],[1,"ant-select-selection-item-content"],[3,"cvcAttrValue","cvcContext","cvcMode","cvcOnClose"]],template:function(s,p){if(1&s&&(e._UZ(0,"cvc-enum-select",0),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.YNc(3,Bl,3,0,"ng-container",1),e.ALo(4,"ngrxPush"),e.YNc(5,Pp,2,3,"ng-template",null,2,e.W1O)),2&s){const w=e.MAs(6);e.Q6J("cvcFormControl",p.formControl)("cvcFormlyAttributes",p.field)("cvcSelectMode",p.props.isMultiSelect?"multiple":"default")("cvcPlaceholder",e.lcZ(1,9,p.placeholder$))("cvcCustomTemplate",w)("cvcOptions",e.lcZ(2,11,p.selectOption$))("cvcShowError",p.showError)("cvcDisabled",p.props.disabled),e.xp6(3),e.Q6J("ngForOf",e.lcZ(4,13,p.significanceEnum$))}},dependencies:[a.sg,Do,Ie,lo.fM]}),l})()}]};let sd=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[a.ez,t.UX,_.X0.forChild(nh),No,Kn,xr]}),l})();var Ma,Hl=c(2666);function Qd(l,g){1&l&&e._UZ(0,"span",9),2&l&&e.Q6J("nzType","loading")}function Wd(l,g){if(1&l&&(e.ynx(0),e.YNc(1,Qd,1,1,"span",8),e._uU(2,"\xa0 "),e.TgZ(3,"span"),e._uU(4),e.qZA(),e.BQk()),2&l){const s=g.ngrxLet;e.xp6(1),e.Q6J("ngIf",s.showSpinner),e.xp6(3),e.Oqu(s.message)}}function Ka(l,g){if(1&l&&e._uU(0),2&l){const s=e.oxw();e.Oqu(s.successMessage)}}function Ip(l,g){1&l&&(e.TgZ(0,"button",10),e._uU(1," Add Source "),e.qZA()),2&l&&e.Q6J("disabled",null===g.ngrxLet.citation)}const ad=function(){return[0,0]};let Vc=((Ma=class{constructor(g,s,p,w,ze){this.checkCitation=g,this.addRemoteCitation=s,this.errors=p,this.apollo=w,this.cdr=ze,this.cvcOnCreate=new e.vpe,this.messageOptions={empty:(ft,vn)=>`No ${vn} Source with a citation ID of "${ft}"`,searchCitation:(ft,vn)=>`Searching ${vn} for a citation ID of "${ft}"`,foundCitation:(ft,vn,Sn)=>`Found ${vn} citation "${Sn}" with ID ${ft}`,noCitation:(ft,vn)=>`No ${vn} Source with a citation ID of "${ft}" was found`},this.form=new t.nJ({}),this.model={citationId:"",sourceType:Nn.yic.Pubmed},this.formLayout="horizontal",this.options={formState:{formLayout:this.formLayout}},this.onSubmit$=new E.x,this.citationId$=new Be.X(""),this.sourceType$=new Be.X(Nn.yic.Pubmed),this.addSourceStubMutator=new oi.U(this.errors),this.fields=[{key:"citationId",props:{hidden:!0}},{key:"sourceType",props:{hidden:!0}}],this.onSubmit$.pipe((0,zn.t)(this)).subscribe(ft=>{console.log("disease-quick-add form model submitted.",ft),this.submitSourceStub()})}ngOnInit(){void 0!==this.model.citationId&&void 0!==this.model.sourceType?(this.queryRef=this.checkCitation.watch({citationId:this.model.citationId,sourceType:this.model.sourceType}),this.checkResult$=this.queryRef.valueChanges.pipe((0,S.U)(g=>({loading:g.loading,citation:g.data?g.data.remoteCitation:null,model:this.model})),(0,St.b)(g=>{this.citationString=g.citation?g.citation:void 0})),this.citationId$.pipe((0,zn.t)(this)).subscribe(g=>{this.model.sourceType&&this.queryRef.refetch({citationId:g,sourceType:this.model.sourceType})}),this.formMessageDisplay$=this.checkResult$.pipe((0,S.U)(g=>{const s=g.loading,p=g.citation,w=g.model;return s?{message:this.messageOptions.searchCitation(w.citationId,w.sourceType),showSpinner:!0}:s||null===p?s||null!==p?{message:"UNHANDLED MESSAGE STATE",showSpinner:!1}:{message:this.messageOptions.noCitation(w.citationId,w.sourceType),showSpinner:!1}:{message:this.messageOptions.foundCitation(w.citationId,(0,Hl.c)(w.sourceType),p),showSpinner:!1}}),(0,K.O)({message:this.messageOptions.searchCitation(this.model.citationId,this.model.sourceType),showSpinner:!0}))):console.error("source-quick-add provided invalid initial model")}submitSourceStub(){void 0!==this.model.citationId&&void 0!==this.model.sourceType&&(this.mutationState=this.addSourceStubMutator.mutate(this.addRemoteCitation,{input:{citationId:this.model.citationId,sourceType:this.model.sourceType}},{},g=>{if(console.log("source-quick-add submit data callback",g),g.addRemoteCitation){this.successMessage=`New Source "${this.citationString}" added.`;const s=g.addRemoteCitation.newSource,p=(0,Hl.c)(this.model.sourceType),w=this.citationString?this.citationString:"NO CITATION",ze={query:Pr.Ps`
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
              `,data:{source:{__typename:"Source",id:s.id,name:`${p}: ${w}`,link:`sources/${s.id}`,citation:w,citationId:this.model.citationId,sourceType:this.model.sourceType}},variables:{id:s.id}};this.apollo.client.cache.writeQuery(ze)||console.error("source-quick-add.form Source writeQuery failed.",ze),setTimeout(()=>{const vn={id:`Source:${s.id}`,fragment:Pr.Ps`
                  fragment LinkableSource on Source {
                    id
                    name
                    link
                  }
                `},Sn=this.apollo.client.cache.readFragment(vn);null!==Sn&&this.cvcOnCreate.next(Sn.id)},1e3)}}))}ngOnChanges(g){if(g.cvcSourceType){const s=g.cvcSourceType.currentValue;this.sourceType$.next(s),this.model={...this.model,sourceType:s}}if(g.cvcCitationId){const s=g.cvcCitationId.currentValue;this.citationId$.next(s),this.model={...this.model,citationId:s}}}}).\u0275fac=function(g){return new(g||Ma)(e.Y36(Nn.qgP),e.Y36(Nn.LHC),e.Y36(jo.Y),e.Y36(Pr._M),e.Y36(e.sBO))},Ma.\u0275cmp=e.Xpm({type:Ma,selectors:[["cvc-source-quick-add"]],inputs:{cvcSourceType:"cvcSourceType",cvcCitationId:"cvcCitationId"},outputs:{cvcOnCreate:"cvcOnCreate"},features:[e.TTD],decls:10,vars:11,consts:[[4,"ngrxLet"],["entityType","Source",3,"mutationState","successMessage"],["success",""],["nz-form","","nzLayout","horizontal",3,"formGroup","ngSubmit"],[3,"nzGutter"],["nzSpan","24"],[3,"form","fields","model","options","modelChange"],["nz-button","","nzType","primary","nzBlock","",3,"disabled",4,"ngrxLet"],["nz-icon","",3,"nzType",4,"ngIf"],["nz-icon","",3,"nzType"],["nz-button","","nzType","primary","nzBlock","",3,"disabled"]],template:function(g,s){if(1&g&&(e.YNc(0,Wd,5,2,"ng-container",0),e.TgZ(1,"cvc-form-submission-status-display",1),e.YNc(2,Ka,1,1,"ng-template",null,2,e.W1O),e.TgZ(4,"form",3),e.NdJ("ngSubmit",function(){return s.onSubmit$.next(s.model)}),e.TgZ(5,"nz-row",4)(6,"nz-col",5)(7,"formly-form",6),e.NdJ("modelChange",function(w){return s.model=w}),e.qZA()(),e.TgZ(8,"nz-col",5),e.YNc(9,Ip,2,1,"button",7),e.qZA()()()()),2&g){const p=e.MAs(3);e.Q6J("ngrxLet",s.formMessageDisplay$),e.xp6(1),e.Q6J("mutationState",s.mutationState)("successMessage",p),e.xp6(3),e.Q6J("formGroup",s.form),e.xp6(1),e.Q6J("nzGutter",e.DdM(10,ad)),e.xp6(2),e.Q6J("form",s.form)("fields",s.fields)("model",s.model)("options",s.options),e.xp6(2),e.Q6J("ngrxLet",s.checkResult$)}},dependencies:[a.O5,t._Y,t.JL,t.sg,lo.eJ,_.T7,zo.ix,ue.w,et.dQ,de.Ls,R.t3,R.SK,L.Lr,Ti.F],changeDetection:0}),Ma);Vc=(0,U.gn)([(0,zn.c)()],Vc);const z=["optionTemplates"];function d(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"nz-col",9)(1,"nz-select",10),e.NdJ("ngModelChange",function(w){e.CHM(s);const ze=e.oxw();return e.KtG(ze.sourceType$.next(w))}),e.ALo(2,"ngrxPush"),e._UZ(3,"nz-option",11)(4,"nz-option",12)(5,"nz-option",13),e.qZA()()}if(2&l){const s=e.oxw();e.xp6(1),e.Q6J("nzOptionHeightPx",28)("ngModel",e.lcZ(2,2,s.sourceType$))}}function h(l,g){1&l&&(e.TgZ(0,"div"),e._uU(1,"PMID:"),e.qZA())}function m(l,g){1&l&&(e.TgZ(0,"div"),e._uU(1,"ID:"),e.qZA())}function C(l,g){1&l&&(e.TgZ(0,"div"),e._uU(1,"doi.org/"),e.qZA())}function x(l,g){if(1&l&&(e.TgZ(0,"nz-col",14),e.ynx(1,15),e.ALo(2,"ngrxPush"),e.YNc(3,h,2,0,"div",16),e.YNc(4,m,2,0,"div",16),e.YNc(5,C,2,0,"div",16),e.BQk(),e.qZA()),2&l){const s=e.oxw();e.xp6(1),e.Q6J("ngSwitch",e.lcZ(2,4,s.sourceType$)),e.xp6(2),e.Q6J("ngSwitchCase","PUBMED"),e.xp6(1),e.Q6J("ngSwitchCase","ASCO"),e.xp6(1),e.Q6J("ngSwitchCase","ASH")}}function q(l,g){if(1&l&&(e._UZ(0,"cvc-entity-tag",19),e.TgZ(1,"span",20),e._uU(2," ID: "),e._UZ(3,"span",21),e.ALo(4,"highlightTypeahead"),e.qZA()),2&l){const s=e.oxw().$implicit,p=e.oxw().ngrxLet;e.Q6J("cvcDisableLink",!0)("cvcCacheId",s.__typename+":"+s.id)("cvcEmphasize",p),e.xp6(3),e.Q6J("innerHtml",e.xi3(4,4,s.citationId.toString(),p),e.oJD)}}function ge(l,g){1&l&&(e.ynx(0),e.YNc(1,q,5,7,"ng-template",null,18,e.W1O),e.BQk())}function xe(l,g){if(1&l&&(e.ynx(0),e.YNc(1,ge,3,0,"ng-container",17),e.ALo(2,"ngrxPush"),e.BQk()),2&l){const s=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,s.result$))}}function We(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"div",22)(1,"cvc-entity-tag",23),e.NdJ("cvcOnClose",function(){const ze=e.CHM(s).$implicit,ft=e.oxw();return e.KtG(ft.onTagClose$.next(ze.nzValue))}),e.qZA()()}if(2&l){const s=g.$implicit,p=e.oxw();e.xp6(1),e.Q6J("cvcCacheId","Source:"+s.nzValue)("cvcContext",p.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",p.props.isMultiSelect?"default":"closeable")}}function dt(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"cvc-source-quick-add",24),e.NdJ("cvcOnCreate",function(w){e.CHM(s);const ze=e.oxw();return e.KtG(ze.onPopulate$.next(w))}),e.qZA()}if(2&l){const s=g.model;e.Q6J("cvcCitationId",s.citationId)("cvcSourceType",s.sourceType)}}function bt(l,g){1&l&&(e.TgZ(0,"button",25),e._uU(1,"Add a New Source"),e.qZA())}const Lt=function(){return[6,6]},Wt=To(Lo(),Fo());let Yt=(()=>{class l extends Wt{constructor(s,p,w){super(),this.taq=s,this.tq=p,this.changeDetectorRef=w,this.onModel$=new ot.y,this.defaultSourceType=Nn.yic.Pubmed,this.defaultOptions={props:{entityName:{singular:"Source",plural:"Sources"},isMultiSelect:!1,minSearchStrLength:2,tooltip:"PubMed, ASCO, or ASH Abstract Source(s) that support items, statements or descriptions.",placeholders:{default:"Search PubMed, ASCO, and ASH Sources",contextualFn:ze=>`Search ${ze} Sources`},description:"Select Source type, then enter its ID to search Sources"}},this.sourceType$=new Be.X(this.defaultSourceType),this.sourceTypeName$=new Be.X((0,Hl.c)(this.defaultSourceType)),this.placeholder$=new Be.X(this.defaultOptions.props.placeholders.contextualFn((0,Hl.c)(this.defaultSourceType))),this.showTypeSelect$=new ot.y}ngAfterViewInit(){this.configureBaseField(),this.configureEntitySelectField({typeaheadQuery:this.taq,typeaheadParam$:this.sourceType$,typeaheadParamName$:this.sourceTypeName$||void 0,tagQuery:this.tq,getTypeaheadVarsFn:this.getTypeaheadVarsFn,getTypeaheadResultsFn:this.getTypeaheadResultsFn,getTagQueryVarsFn:this.getTagQueryVarsFn,getTagQueryResultsFn:this.getTagQueryResultsFn,getSelectedItemOptionFn:this.getSelectedItemOptionFn,getSelectOptionsFn:this.getSelectOptionsFn,changeDetectorRef:this.changeDetectorRef,selectOpen$:this.selectOpen$,selectComponent:this.selectComponent,minSearchStrLength:this.field.props.minSearchStrLength}),this.initialDescription=this.props.description,this.showTypeSelect$=this.onValueChange$.pipe((0,S.U)(s=>!!(!s||s&&Array.isArray(s)))),this.sourceType$.pipe((0,zn.t)(this)).subscribe(s=>{const p=(0,Hl.c)(s);this.sourceTypeName$.next(p),this.placeholder$.next(this.props.placeholders.contextualFn(p))}),this.onModel$=(0,Io.a)([this.sourceType$,this.onSearch$]).pipe((0,S.U)(([s,p])=>({citationId:p,sourceType:s}))),this.onValueChange$.pipe((0,zn.t)(this)).subscribe(s=>{this.props.description=s?void 0:this.initialDescription})}getTypeaheadVarsFn(s,p=Nn.yic.Pubmed){return{partialCitationId:s,sourceType:p}}getTypeaheadResultsFn(s){return s.data.sourceTypeahead}getTagQueryVarsFn(s){return{id:s}}getTagQueryResultsFn(s){return s.data.source}getSelectedItemOptionFn(s){return{value:s.id,label:s.name}}getSelectOptionsFn(s,p){return s.map((w,ze)=>({label:p.get(ze)||w.name,value:w.id}))}}return l.\u0275fac=function(s){return new(s||l)(e.Y36(Nn.aC3),e.Y36(Nn.BYO),e.Y36(e.sBO))},l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-source-select"]],viewQuery:function(s,p){if(1&s&&e.Gf(z,5,e.Rgc),2&s){let w;e.iGM(w=e.CRH())&&(p.optionTemplates=w)}},features:[e.qOj],decls:21,vars:39,consts:[[1,"select-layout",3,"nzGutter"],["nzFlex","80px",4,"ngIf"],["nzFlex","60px","class","prefix",4,"ngIf"],["nzFlex","auto"],[3,"cvcMinSearchStrLength","cvcSelectMode","cvcCustomTemplate","cvcFormControl","cvcFormlyAttributes","cvcEntityName","cvcPlaceholder","cvcResults","cvcOptions","cvcParamName","cvcShowError","cvcDisabled","cvcLoading","cvcAddEntity","cvcAddEntityModel","cvcSelectOpen","cvcOnSearch","cvcOnModelChange"],[4,"ngrxLet"],["selectedTemplate",""],["addSource",""],["addSourceBtn",""],["nzFlex","80px"],["nzSize","default","nzBlock","",3,"nzOptionHeightPx","ngModel","ngModelChange"],["nzValue","PUBMED","nzLabel","PubMed"],["nzValue","ASCO","nzLabel","ASCO"],["nzValue","ASH","nzLabel","ASH"],["nzFlex","60px",1,"prefix"],[3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngFor","ngForOf"],["optionTemplates",""],[3,"cvcDisableLink","cvcCacheId","cvcEmphasize"],["nz-typography","","nzType","secondary"],["nz-typography","","nzType","secondary",3,"innerHtml"],[1,"ant-select-selection-item-content"],[3,"cvcCacheId","cvcContext","cvcMode","cvcOnClose"],[3,"cvcCitationId","cvcSourceType","cvcOnCreate"],["type","button"]],template:function(s,p){if(1&s&&(e.TgZ(0,"nz-row",0),e.YNc(1,d,6,4,"nz-col",1),e.ALo(2,"ngrxPush"),e.YNc(3,x,6,6,"nz-col",2),e.ALo(4,"ngrxPush"),e.TgZ(5,"nz-col",3)(6,"cvc-entity-select",4),e.NdJ("cvcOnSearch",function(ze){return p.onSearch$.next(ze)})("cvcOnModelChange",function(ze){return p.props.change&&p.props.change(p.field,ze)}),e.ALo(7,"ngrxPush"),e.ALo(8,"ngrxPush"),e.ALo(9,"ngrxPush"),e.ALo(10,"ngrxPush"),e.ALo(11,"ngrxPush"),e.ALo(12,"ngrxPush"),e.ALo(13,"ngrxPush"),e.qZA()()(),e.YNc(14,xe,3,3,"ng-container",5),e.YNc(15,We,2,3,"ng-template",null,6,e.W1O),e.YNc(17,dt,1,2,"ng-template",null,7,e.W1O),e.YNc(19,bt,2,0,"ng-template",null,8,e.W1O)),2&s){const w=e.MAs(16),ze=e.MAs(18);e.Q6J("nzGutter",e.DdM(38,Lt)),e.xp6(1),e.Q6J("ngIf",e.lcZ(2,20,p.showTypeSelect$)),e.xp6(2),e.Q6J("ngIf",e.lcZ(4,22,p.showTypeSelect$)),e.xp6(3),e.Q6J("cvcMinSearchStrLength",p.props.minSearchStrLength)("cvcSelectMode",p.props.isMultiSelect?"multiple":"default")("cvcCustomTemplate",w)("cvcFormControl",p.formControl)("cvcFormlyAttributes",p.field)("cvcEntityName",p.props.entityName)("cvcPlaceholder",e.lcZ(7,24,p.placeholder$))("cvcResults",e.lcZ(8,26,p.result$))("cvcOptions",e.lcZ(9,28,p.selectOption$))("cvcParamName",e.lcZ(10,30,p.sourceTypeName$))("cvcShowError",p.showError)("cvcDisabled",p.props.disabled)("cvcLoading",e.lcZ(11,32,p.isLoading$))("cvcAddEntity",ze)("cvcAddEntityModel",e.lcZ(12,34,p.onModel$))("cvcSelectOpen",e.lcZ(13,36,p.selectOpen$)),e.xp6(8),e.Q6J("ngrxLet",p.onSearch$)}},dependencies:[a.sg,a.O5,a.RF,a.n9,t.JJ,t.On,lo.eJ,Ye.Ip,Ye.Vq,R.t3,R.SK,X.ZU,sn,Qt.J,Vc,lo.fM,hr.A],styles:[".prefix[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{text-align:right;line-height:28px;color:#999}.select-layout[_ngcontent-%COMP%]{flex-wrap:nowrap}"],changeDetection:0}),l})();const hn={types:[{name:"source-select",wrappers:["form-field"],component:Yt,defaultOptions:{props:{label:"Source"}}},{name:"source-multi-select",wrappers:["form-field"],component:Yt,defaultOptions:{props:{label:"Sources",isMultiSelect:!0}}}]};let xn=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[a.ez,t.u5,t.UX,_.X0.forChild(hn),_t.L,zo.sL,Qe.aF,Ye.LV,Wo.$6,yi.Qp,de.PV,A.o7,R.Jb,eo.cg,Re.zf,L.U5,B.ic,X.ZJ,en.S,An.X,Oo.g,No,Gt,tt.s,Ce.x]}),l})();function Yn(l,g){if(1&l&&e._UZ(0,"nz-option",4),2&l){const s=g.$implicit;e.Q6J("nzLabel",s)("nzValue",s)("nzHide",!0)}}function qt(l,g){if(1&l){const s=e.EpF();e.ynx(0),e.TgZ(1,"nz-select",2),e.NdJ("ngModelChange",function(w){e.CHM(s);const ze=e.oxw();return e.KtG(ze.onValueChange$.next(w))}),e.YNc(2,Yn,1,3,"nz-option",3),e.qZA(),e.BQk()}if(2&l){const s=e.oxw();e.xp6(1),e.Q6J("formControl",s.formControl)("formlyAttributes",s.field),e.xp6(1),e.Q6J("ngForOf",s.formControl.value)}}function gn(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"nz-tag",7),e.NdJ("nzOnClose",function(w){e.CHM(s);const ze=e.oxw(2);return e.KtG(ze.onTagClose$.next(w))}),e._uU(1),e.qZA()}if(2&l){const s=g.ngIf;e.Q6J("nzMode","closeable"),e.xp6(1),e.hij(" ",s," ")}}function $n(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"input",10,11),e.NdJ("keydown.enter",function(){e.CHM(s);const w=e.MAs(1);return e.KtG(w.blur())}),e.qZA()}if(2&l){const s=e.oxw(3);e.Q6J("formControl",s.formControl)("type",s.props.type||"text")("formlyAttributes",s.field)}}function kn(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"nz-input-number",12,13),e.NdJ("keydown.enter",function(){e.CHM(s);const w=e.MAs(1);return e.KtG(w.blur())}),e.qZA()}if(2&l){const s=e.oxw(3);e.Q6J("formControl",s.formControl)("formlyAttributes",s.field)}}function ro(l,g){if(1&l&&(e.ynx(0),e.YNc(1,$n,2,3,"input",8),e.YNc(2,kn,2,2,"ng-template",null,9,e.W1O),e.BQk()),2&l){const s=e.MAs(3),p=e.oxw(2);e.xp6(1),e.Q6J("ngIf","number"!==p.props.type)("ngIfElse",s)}}function wo(l,g){if(1&l&&(e.YNc(0,gn,2,2,"nz-tag",5),e.ALo(1,"ngrxPush"),e.YNc(2,ro,4,2,"ng-container",6),e.ALo(3,"ngrxPush")),2&l){const s=e.oxw();e.Q6J("ngIf",e.lcZ(1,2,s.tagLabel$)),e.xp6(2),e.Q6J("ngIf",!e.lcZ(3,4,s.tagLabel$))}}const Li=To(Lo(),pr);let Pi=(()=>{class l extends Li{constructor(){super(),this.defaultOptions={modelOptions:{updateOn:"blur"},props:{label:"Enter value"}}}ngAfterViewInit(){this.configureBaseField(),this.configureStringTagField()}}return l.\u0275fac=function(s){return new(s||l)},l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-tag-input"]],features:[e.qOj],decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["singleInputField",""],["nzMode","tags","nzPlaceHolder","Please select","nzAllowClear","","nzDropdownClassName","hide-dropdown",3,"formControl","formlyAttributes","ngModelChange"],[3,"nzLabel","nzValue","nzHide",4,"ngFor","ngForOf"],[3,"nzLabel","nzValue","nzHide"],[3,"nzMode","nzOnClose",4,"ngIf"],[4,"ngIf"],[3,"nzMode","nzOnClose"],["nz-input","",3,"formControl","type","formlyAttributes","keydown.enter",4,"ngIf","ngIfElse"],["numberTmp",""],["nz-input","",3,"formControl","type","formlyAttributes","keydown.enter"],["baseInputTxt",""],[3,"formControl","formlyAttributes","keydown.enter"],["baseInputNum",""]],template:function(s,p){if(1&s&&(e.YNc(0,qt,3,3,"ng-container",0),e.YNc(1,wo,4,6,"ng-template",null,1,e.W1O)),2&s){const w=e.MAs(2);e.Q6J("ngIf",p.props.isMultiInput)("ngIfElse",w)}},dependencies:[a.sg,a.O5,t.Fj,t.JJ,t.oH,_.JD,A.Zp,Ye.Ip,Ye.Vq,An.j,lo.fM],changeDetection:0}),l})();const ps={types:[{name:"tag-input",wrappers:["form-field"],component:Pi},{name:"tag-multi-input",wrappers:["form-field"],component:Pi,defaultOptions:{props:{isMultiInput:!0}}}]};let Ji=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[a.ez,t.UX,_.X0.forChild(ps),L.U5,A.o7,Ye.LV,An.X,Tn]}),l})();var qi;function Ju(l,g){1&l&&e._UZ(0,"span",7)}function Bc(l,g){1&l&&e._UZ(0,"span",8)}const oo=function(){return[0,0]},ho={name:void 0};let bo=((qi=class{set cvcSearchString(g){g&&this.searchString$.next(g)}constructor(g,s){this.query=g,this.errors=s,this.cvcOnCreate=new e.vpe,this.model=ho,this.form=new t.nJ({}),this.options={},this.onSubmit$=new E.x,this.searchString$=new Be.X(void 0),this.queryMutator=new oi.U(this.errors),this.isSubmitting$=new Be.X(!1),this.submitSuccess$=new Be.X(!1),this.submitError$=new Be.X([]),this.addTherapyMutator=new oi.U(this.errors),this.fields=[{key:"name",props:{hidden:!0,required:!0}}],this.searchString$.pipe((0,zn.t)(this)).subscribe(p=>{this.model.name=p}),this.onSubmit$.pipe((0,zn.t)(this)).subscribe(p=>{this.submitTherapy(p)})}submitTherapy(g){if(!g.name)return void console.error("therapy-quick-add form submitTherapy requires model with valid name.");let s=this.addTherapyMutator.mutate(this.query,{name:g.name},{},p=>{console.log("therapy-quick-add submit data callback",p),p.addTherapy&&this.cvcOnCreate.next(p.addTherapy.therapy.id)});s.submitSuccess$.pipe((0,zn.t)(this)).subscribe(p=>{console.log("therapy-quick-add submitSuccess$",p),this.submitSuccess$.next(p)}),s.submitError$.pipe((0,zn.t)(this)).subscribe(p=>{console.log("therapy-quick-add submitError$",p),this.submitError$.next(p)}),s.isSubmitting$.pipe((0,zn.t)(this)).subscribe(p=>{this.isSubmitting$.next(p)})}}).\u0275fac=function(g){return new(g||qi)(e.Y36(Nn.Y_K),e.Y36(jo.Y))},qi.\u0275cmp=e.Xpm({type:qi,selectors:[["cvc-therapy-quick-add-form"]],inputs:{cvcSearchString:"cvcSearchString"},outputs:{cvcOnCreate:"cvcOnCreate"},decls:14,vars:17,consts:[[3,"formGroup","ngSubmit"],[3,"nzGutter"],["nzSpan","24"],[3,"form","fields","model","options","modelChange"],["nz-button","","nzType","primary","nzBlock","",3,"disabled"],["nz-icon","","nzType","plus-circle","nzTheme","outline",4,"ngIf"],["nz-icon","","nzType","loading","nzTheme","outline",4,"ngIf"],["nz-icon","","nzType","plus-circle","nzTheme","outline"],["nz-icon","","nzType","loading","nzTheme","outline"]],template:function(g,s){1&g&&(e.TgZ(0,"form",0),e.NdJ("ngSubmit",function(){return s.onSubmit$.next(s.model)}),e.TgZ(1,"nz-row",1)(2,"nz-col",2)(3,"formly-form",3),e.NdJ("modelChange",function(w){return s.model=w}),e.qZA()(),e.TgZ(4,"nz-col",2)(5,"button",4),e.YNc(6,Ju,1,0,"span",5),e.ALo(7,"ngrxPush"),e.YNc(8,Bc,1,0,"span",6),e.ALo(9,"ngrxPush"),e._uU(10," Create Therapy\xa0"),e.TgZ(11,"i"),e._uU(12),e.ALo(13,"ngrxPush"),e.qZA()()()()()),2&g&&(e.Q6J("formGroup",s.form),e.xp6(1),e.Q6J("nzGutter",e.DdM(16,oo)),e.xp6(2),e.Q6J("form",s.form)("fields",s.fields)("model",s.model)("options",s.options),e.xp6(2),e.Q6J("disabled",!s.form.valid),e.xp6(1),e.Q6J("ngIf",!e.lcZ(7,10,s.isSubmitting$)),e.xp6(2),e.Q6J("ngIf",e.lcZ(9,12,s.isSubmitting$)),e.xp6(4),e.Oqu(e.lcZ(13,14,s.searchString$)))},dependencies:[a.O5,t._Y,t.JL,t.sg,_.T7,zo.ix,ue.w,et.dQ,de.Ls,R.t3,R.SK,lo.fM],encapsulation:2,changeDetection:0}),qi);bo=(0,U.gn)([(0,zn.c)()],bo);const ti=["optionTemplates"];function Xi(l,g){if(1&l&&(e.ynx(0),e.TgZ(1,"strong"),e._uU(2,"NCIt ID:"),e.qZA(),e._UZ(3,"span",9),e.ALo(4,"highlightTypeahead"),e.BQk()),2&l){const s=e.oxw(2).$implicit,p=e.oxw().ngrxLet;e.xp6(3),e.Q6J("innerHtml",e.xi3(4,1,s.ncitId,p),e.oJD)}}function Qs(l,g){if(1&l&&(e.ynx(0),e.TgZ(1,"strong"),e._uU(2,"Aliases: "),e.qZA(),e.TgZ(3,"em"),e._UZ(4,"span",10),e.ALo(5,"highlightTypeahead"),e.qZA(),e.BQk()),2&l){const s=e.oxw(2).$implicit,p=e.oxw().ngrxLet;e.xp6(4),e.Q6J("nzTooltipTitle",s.therapyAliases.join(", "))("innerHtml",e.xi3(5,2,s.therapyAliases.join(", "),p),e.oJD)}}function Fr(l,g){if(1&l&&(e._UZ(0,"cvc-entity-tag",6),e.TgZ(1,"span",7),e.YNc(2,Xi,5,4,"ng-container",8),e.YNc(3,Qs,6,5,"ng-container",8),e.qZA()),2&l){const s=e.oxw().$implicit,p=e.oxw().ngrxLet;e.Q6J("cvcDisableLink",!0)("cvcCacheId",s.__typename+":"+s.id)("cvcEmphasize",p),e.xp6(2),e.Q6J("ngIf",s.ncitId),e.xp6(1),e.Q6J("ngIf",s.therapyAliases.length>0)}}function ws(l,g){1&l&&(e.ynx(0),e.YNc(1,Fr,4,5,"ng-template",null,5,e.W1O),e.BQk())}function ki(l,g){if(1&l&&(e.ynx(0),e.YNc(1,ws,3,0,"ng-container",4),e.ALo(2,"ngrxPush"),e.BQk()),2&l){const s=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,s.result$))}}function Zd(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"div",11)(1,"cvc-entity-tag",12),e.NdJ("cvcOnClose",function(){const ze=e.CHM(s).$implicit,ft=e.oxw();return e.KtG(ft.onTagClose$.next(ze.nzValue))}),e.qZA()()}if(2&l){const s=g.$implicit,p=e.oxw();e.xp6(1),e.Q6J("cvcCacheId","Therapy:"+s.nzValue)("cvcContext",p.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",p.props.isMultiSelect?"default":"closeable")}}function Ap(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"cvc-therapy-quick-add-form",13),e.NdJ("cvcOnCreate",function(w){e.CHM(s);const ze=e.oxw();return e.KtG(ze.onPopulate$.next(w))}),e.qZA()}2&l&&e.Q6J("cvcSearchString",g.$implicit)}const gr=To(Lo(),Fo());let Ws=(()=>{class l extends gr{constructor(s,p,w){super(),this.taq=s,this.tq=p,this.changeDetectorRef=w,this.defaultOptions={props:{entityName:{singular:"Therapy",plural:"Therapies"},isMultiSelect:!1,requireType:!0,tooltip:"Therapy or therapy combination which interacts with the specified variant",placeholder:"Search Therapies",requireTypePromptFn:(ze,ft)=>`Select an ${ze} Type to search associated Therapies`}},this.placeholder$=new Be.X(void 0)}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEntitySelectField({typeaheadQuery:this.taq,typeaheadParam$:void 0,tagQuery:this.tq,getTypeaheadVarsFn:this.getTypeaheadVarsFn,getTypeaheadResultsFn:this.getTypeaheadResultsFn,getTagQueryVarsFn:this.getTagQueryVarsFn,getTagQueryResultsFn:this.getTagQueryResultsFn,getSelectedItemOptionFn:this.getSelectedItemOptionFn,getSelectOptionsFn:this.getSelectOptionsFn,changeDetectorRef:this.changeDetectorRef,selectOpen$:this.selectOpen$,selectComponent:this.selectComponent}),this.configurePlaceholders()}configureStateConnections(){if(this.state&&(this.stateEntityName=this.state.entityName,this.state.requires.requiresTherapy$?this.onRequiresTherapy$=this.state.requires.requiresTherapy$:console.warn(`${this.field.id} field's form provides a state, but could not find requiresTherapy$ subject to attach.`),this.props.requireType)){const s=`${this.stateEntityName.toLowerCase()}Type$`;this.state.fields[s]?this.onEntityType$=this.state.fields[s]:console.error(`${this.field.id} requireType is true, however form state does not provide Subject ${s}.`)}}configurePlaceholders(){this.placeholder$.next(this.props.placeholder),this.onRequiresTherapy$&&this.onEntityType$&&(0,Io.a)([this.onRequiresTherapy$,this.onEntityType$]).pipe((0,Te.x)(),(0,zn.t)(this)).subscribe(([s,p])=>{!s&&p?(this.props.required=!1,this.props.disabled=!0,this.props.description=`${(0,Di.E)(p)} ${this.state.entityName} does not include associated therapies`,this.props.extraType="prompt",this.resetField(),this.cdr.markForCheck()):this.props.requireType&&!p?(this.props.required=!1,this.props.disabled=!0,this.props.description=this.props.requireTypePromptFn(this.state.entityName,this.props.isMultiSelect),this.props.extraType="prompt"):s?(this.props.required=!0,this.props.disabled=!1,this.props.description=void 0,this.props.extraType=void 0):(!s&&this.formControl.value||this.props.requireType&&!p&&this.formControl.value)&&(this.resetField(),console.log("HERE2"))})}getTypeaheadVarsFn(s){return{name:s}}getTypeaheadResultsFn(s){return s.data.therapyTypeahead}getTagQueryVarsFn(s){return{id:s}}getTagQueryResultsFn(s){return s.data.therapy}getSelectedItemOptionFn(s){return{value:s.id,label:s.name}}getSelectOptionsFn(s,p){return s.map((w,ze)=>({label:p.get(ze)||w.name,value:w.id}))}}return l.\u0275fac=function(s){return new(s||l)(e.Y36(Nn.cIw),e.Y36(Nn.sjj),e.Y36(e.sBO))},l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-therapy-select"]],viewQuery:function(s,p){if(1&s&&e.Gf(ti,5,e.Rgc),2&s){let w;e.iGM(w=e.CRH())&&(p.optionTemplates=w)}},features:[e.qOj],decls:12,vars:26,consts:[[3,"cvcAddEntity","cvcCustomTemplate","cvcDisabled","cvcEntityName","cvcFormControl","cvcFormlyAttributes","cvcLoading","cvcOptions","cvcPlaceholder","cvcResults","cvcSelectMode","cvcShowError","cvcSelectOpen","cvcOnSearch","cvcOnOpenChange","cvcOnModelChange"],[4,"ngrxLet"],["selectedTemplate",""],["addTherapy",""],[4,"ngFor","ngForOf"],["optionTemplates",""],[3,"cvcDisableLink","cvcCacheId","cvcEmphasize"],["nz-typography","","nzType","secondary"],[4,"ngIf"],[3,"innerHtml"],["nz-typography","","nzType","secondary","nz-tooltip","",3,"nzTooltipTitle","innerHtml"],[1,"ant-select-selection-item-content"],[3,"cvcCacheId","cvcContext","cvcMode","cvcOnClose"],[3,"cvcSearchString","cvcOnCreate"]],template:function(s,p){if(1&s&&(e.TgZ(0,"cvc-entity-select",0),e.NdJ("cvcOnSearch",function(ze){return p.onSearch$.next(ze)})("cvcOnOpenChange",function(ze){return p.onOpenChange$.next(ze)})("cvcOnModelChange",function(ze){return p.props.change&&p.props.change(p.field,ze)}),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.ALo(3,"ngrxPush"),e.ALo(4,"ngrxPush"),e.ALo(5,"ngrxPush"),e.ALo(6,"ngrxPush"),e.qZA(),e.YNc(7,ki,3,3,"ng-container",1),e.YNc(8,Zd,2,3,"ng-template",null,2,e.W1O),e.YNc(10,Ap,1,1,"ng-template",null,3,e.W1O)),2&s){const w=e.MAs(9),ze=e.MAs(11);e.Q6J("cvcAddEntity",ze)("cvcCustomTemplate",w)("cvcDisabled",p.onRequiresTherapy$&&!e.lcZ(1,14,p.onRequiresTherapy$))("cvcEntityName",p.props.entityName)("cvcFormControl",p.formControl)("cvcFormlyAttributes",p.field)("cvcLoading",e.lcZ(2,16,p.isLoading$))("cvcOptions",e.lcZ(3,18,p.selectOption$))("cvcPlaceholder",e.lcZ(4,20,p.placeholder$))("cvcResults",e.lcZ(5,22,p.result$))("cvcSelectMode",p.props.isMultiSelect?"multiple":"default")("cvcShowError",p.showError)("cvcSelectOpen",e.lcZ(6,24,p.selectOpen$)),e.xp6(7),e.Q6J("ngrxLet",p.onSearch$)}},dependencies:[a.sg,a.O5,lo.eJ,eo.SY,X.ZU,sn,Qt.J,bo,lo.fM,hr.A],changeDetection:0}),l})();const rs={types:[{name:"therapy-select",wrappers:["form-field"],component:Ws,defaultOptions:{props:{label:"Therapy"}}},{name:"therapy-multi-select",wrappers:["form-field"],component:Ws,defaultOptions:{props:{label:"Therapies",isMultiSelect:!0}}}]};let qu=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[a.ez,t.UX,_.X0.forChild(rs),_t.L,zo.sL,Ye.LV,Wo.$6,yi.Qp,de.PV,A.o7,R.Jb,eo.cg,Re.zf,L.U5,B.ic,X.ZJ,An.X,No,Gt,tt.s,Ce.x]}),l})();const Fp={isDefaultCol:l=>"default"===l.type,isSelectCol:l=>"select"===l.type,isEntityTagCol:l=>"entity-tag"===l.type,isEnumTagCol:l=>"enum-tag"===l.type,isTextTagCol:l=>"text-tag"===l.type},cd=l=>void 0!==l.sort,Jd=l=>void 0!==l.filter,sh={diseases:Nn.pP7.DiseaseName,gene:Nn.pP7.EntrezSymbol,therapies:Nn.pP7.TherapyName,variant:Nn.pP7.VariantName},D2={diseases:"diseaseName",therapies:"therapyName",variant:"variantName",gene:"entrezSymbol",aliases:"variantAlias"},ah=["selected","id"];class ld{constructor(){this.sortStreams=[],this.filterStreams=[],this.config=this.configureColumnStreams([{key:"selected",label:"Select",type:"select",width:"25px",align:"center",fixedLeft:!0,checkbox:{th:{showCheckbox:!1},td:{showCheckbox:!0}}},{key:"id",label:"ID",hidden:!0,type:"hidden",width:"0px"},{key:"variant",label:"Variant",type:"entity-tag",width:"215px",context:"variant",fixedLeft:!0,showStatus:!0,tag:{fullWidth:!0,truncateLabel:"200px"},sort:{default:"ascend"},filter:{inputType:"default",options:[{key:"Filter Variant Name",value:null}]}},{key:"aliases",label:"Aliases",type:"default",width:"150px",objectKey:"name",sort:{},filter:{inputType:"default",options:[{key:"Filter Aliases",value:null}]}},{key:"gene",label:"Gene",type:"entity-tag",width:"135px",tag:{truncateLabel:"125px"},sort:{},filter:{inputType:"default",options:[{key:"Filter Gene Name",value:null}]}},{key:"diseases",label:"Diseases",type:"entity-tag",width:"250px",sort:{},tag:{maxTags:1,truncateLabel:"175px"},filter:{inputType:"default",typename:"Therapy",options:[{key:"Filter Therapy Names",value:null}]}},{key:"therapies",label:"Therapies",type:"entity-tag",width:"275px",sort:{},tag:{maxTags:2,truncateLabel:"150px"},filter:{inputType:"default",typename:"Therapy",options:[{key:"Filter Therapy Names",value:null}]}}])}get(){return this.config}getSortStreams(){return this.sortStreams}getFilterStreams(){return this.filterStreams}getAttributeFilters(g,s){return g.getValues().map(w=>({text:(0,Di.E)(w),value:w,byDefault:s===w}))}configureColumnStreams(g){return g.forEach(s=>{const p=s;if(cd(p)&&(p.sort.changes=new Be.X({key:p.key,value:p.sort.default??null}),this.sortStreams.push(p.sort.changes)),Jd(p)){const w=p.filter.options.find(ze=>ze.byDefault)?.value;p.filter.changes=new Be.X({key:p.key,value:w??null}),this.filterStreams.push(p.filter.changes)}}),g}}var Xu;let Hc=((Xu=class{set cvcTableScrollerToIndex(g){void 0!==g&&this.scrollToIndex(g)}set cvcTableScrollerToOffset(g){void 0!==g&&this.scrollToIndex(g)}constructor(g){this.host=g,this.cvcTableScrollerOnScroll=new e.vpe,this.cvcTableScrollerOnFetch=new e.vpe,this.cvcTableScrollerTargetHeight=140,this.cvcTableScrollerFetchCount=50,this.onLoadThrottleTime=500,this.onScrollThrottleTime=250,this.onScrollDebounceTime=300}ngAfterViewInit(){if(!this.host||!this.host.cdkVirtualScrollViewport)throw new Error("cvcTableScroller directive could not obtain reference to host cdkVirtualScrollViewport.");this.viewport=this.host.cdkVirtualScrollViewport,this.scrolled$=this.viewport.elementScrolled(),this.rendered$=this.viewport.renderedRangeStream,this.rendered$.pipe((0,Rs.P)()).subscribe(()=>this.viewport.checkViewportSize()),this.scrolled$.pipe((0,Ri.p)(this.onScrollThrottleTime,Xo.z,{leading:!0,trailing:!0}),(0,St.b)(g=>this.cvcTableScrollerOnScroll.next("scroll")),(0,Cs.b)(this.onScrollDebounceTime),(0,zn.t)(this)).subscribe(g=>{this.cvcTableScrollerOnScroll.next("stop")}),this.scrolled$.pipe((0,S.U)(g=>this.viewport.measureScrollOffset("bottom")),(0,Vs.G)(),(0,yt.h)(([g,s])=>s<g&&s<this.cvcTableScrollerTargetHeight),(0,Ri.p)(this.onLoadThrottleTime),(0,zn.t)(this)).subscribe(g=>{this.cvcTableScrollerOnScroll.next("bottom");try{this.loadMore(this.cvcTableScrollerPageInfo)}catch(s){console.error(s)}})}loadMore(g){const s=this.cvcTableScrollerQueryRef;if(!g&&s)throw new Error("table-scroll directive requires PageInfo to use provided QueryRef.");if(g&&!s)throw new Error("table-scroll directive requires valid QueryRef when PageInfo provided.");if(g&&s){const[p,w,ze]=[this.cvcTableScrollerFetchCount,g.hasNextPage,g.endCursor];if(!p||!ze)throw new Error("table-scroll PageInfo invalid.");if(!w)return;this.cvcTableScrollerOnFetch.next({first:p,after:ze})}}scrollToIndex(g){const[s,p]=[this.host,this.host.cdkVirtualScrollViewport];if(!s||!p)throw new Error("table-scroll scrollToIndex() cannot find host viewport.");p.scrollToIndex(g)}scrollToOffset(g){const[s,p]=[this.host,this.host.cdkVirtualScrollViewport];if(!s||!p)throw new Error("table-scroll scrollToOffset() cannot find host viewport.");p.scrollToOffset(g)}}).\u0275fac=function(g){return new(g||Xu)(e.Y36(Qo.N8))},Xu.\u0275dir=e.lG2({type:Xu,selectors:[["","cvcTableScroller",""]],inputs:{cvcTableScrollerTargetHeight:"cvcTableScrollerTargetHeight",cvcTableScrollerQueryRef:"cvcTableScrollerQueryRef",cvcTableScrollerPageInfo:"cvcTableScrollerPageInfo",cvcTableScrollerFetchCount:"cvcTableScrollerFetchCount",cvcTableScrollerToIndex:"cvcTableScrollerToIndex",cvcTableScrollerToOffset:"cvcTableScrollerToOffset"},outputs:{cvcTableScrollerOnScroll:"cvcTableScrollerOnScroll",cvcTableScrollerOnFetch:"cvcTableScrollerOnFetch"}}),Xu);function ud(l,g){1&l&&e._UZ(0,"span",8)}function l4(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"span",9),e.NdJ("click",function(){e.CHM(s),e.oxw(2);const w=e.MAs(3),ze=e.oxw();return w.value="",e.KtG(ze.cvcModelChange.next(null))}),e.qZA()}}function ch(l,g){if(1&l&&(e.YNc(0,ud,1,0,"span",6),e.YNc(1,l4,1,0,"span",7)),2&l){e.oxw();const s=e.MAs(3);e.Q6J("ngIf",!s.value),e.xp6(1),e.Q6J("ngIf",s.value)}}function u4(l,g){if(1&l){const s=e.EpF();e.ynx(0),e.TgZ(1,"nz-input-group",2)(2,"input",3,4),e.NdJ("ngModelChange",function(w){e.CHM(s);const ze=e.oxw();return e.KtG(ze.cvcModelChange.next(w))}),e.qZA()(),e.YNc(4,ch,2,2,"ng-template",null,5,e.W1O),e.BQk()}if(2&l){const s=e.MAs(5),p=e.oxw();e.xp6(1),e.Q6J("nzSuffix",s),e.xp6(1),e.Q6J("placeholder",p.cvcPlaceholder)("ngModel",p.cvcModel)}}function d4(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"nz-input-number-group",10)(1,"nz-input-number",11,4),e.NdJ("ngModelChange",function(w){e.CHM(s);const ze=e.oxw();return e.KtG(ze.cvcModelChange.next(""===w?null:w))}),e.qZA()()}if(2&l){const s=e.oxw();let p;e.xp6(1),e.Q6J("nzPlaceHolder",null!==(p=s.cvcPlaceholder)&&void 0!==p?p:"")("ngModel",s.cvcModel)("nzMin",1)("nzStep",1)}}Hc=(0,U.gn)([(0,zn.c)()],Hc);let p4=(()=>{class l{constructor(){this.cvcModel=null,this.cvcModelChange=new e.vpe,this.cvcInputType="default"}}return l.\u0275fac=function(s){return new(s||l)},l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-variant-table-filter-input"]],inputs:{cvcModel:"cvcModel",cvcInputType:"cvcInputType",cvcPlaceholder:"cvcPlaceholder"},outputs:{cvcModelChange:"cvcModelChange"},decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["numericInput",""],["nzSize","small",3,"nzSuffix"],["nz-input","",3,"placeholder","ngModel","ngModelChange"],["filterInput",""],["suffixIcon",""],["nz-icon","","nzType","search","style","color: #ddd",4,"ngIf"],["nz-icon","","class","ant-input-clear-icon","nzTheme","fill","nzType","close-circle",3,"click",4,"ngIf"],["nz-icon","","nzType","search",2,"color","#ddd"],["nz-icon","","nzTheme","fill","nzType","close-circle",1,"ant-input-clear-icon",3,"click"],["nzSize","small"],[2,"width","100%",3,"nzPlaceHolder","ngModel","nzMin","nzStep","ngModelChange"]],template:function(s,p){if(1&s&&(e.YNc(0,u4,6,3,"ng-container",0),e.YNc(1,d4,3,4,"ng-template",null,1,e.W1O)),2&s){const w=e.MAs(2);e.Q6J("ngIf","default"===p.cvcInputType)("ngIfElse",w)}},dependencies:[a.O5,t.Fj,t.JJ,t.On,ue.w,de.Ls,A.Zp,A.gB,A.ke,lt,ie]}),l})();function lh(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"li",5),e.NdJ("click",function(){const ze=e.CHM(s).$implicit,ft=e.oxw();return e.KtG(ft.cvcOptionChange.next({key:ft.cvcColumnKey,value:ze.value}))}),e._UZ(1,"cvc-attribute-tag",6),e.qZA()}if(2&l){const s=g.$implicit,p=e.oxw();e.Q6J("nzSelected",(null==p.cvcOption?null:p.cvcOption.value)===s.value),e.xp6(1),e.Q6J("cvcFullWidth",!0)("cvcChecked",(null==p.cvcOption?null:p.cvcOption.value)===s.value)("cvcAttrValue",s.value)}}let h4=(()=>{class l{constructor(){this.cvcOptionChange=new e.vpe}}return l.\u0275fac=function(s){return new(s||l)},l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-variant-enum-filter-menu"]],inputs:{cvcColumnKey:"cvcColumnKey",cvcFilterOptions:"cvcFilterOptions",cvcOption:"cvcOption"},outputs:{cvcOptionChange:"cvcOptionChange"},decls:6,vars:2,consts:[["nz-menu",""],["nz-menu-item","",3,"nzSelected","click",4,"ngFor","ngForOf"],[2,"padding","3px"],["nz-button","","nzType","default","nzBlock","","nzSize","small",3,"disabled","click"],["nz-icon","","nzType","retweet","nzTheme","outline"],["nz-menu-item","",3,"nzSelected","click"],["cvcContext","menu-item",3,"cvcFullWidth","cvcChecked","cvcAttrValue"]],template:function(s,p){1&s&&(e.TgZ(0,"ul",0),e.YNc(1,lh,2,4,"li",1),e.TgZ(2,"li",2)(3,"button",3),e.NdJ("click",function(){return p.cvcOptionChange.next({key:p.cvcColumnKey,value:null})}),e._UZ(4,"span",4),e._uU(5," Reset "),e.qZA()()()),2&s&&(e.xp6(1),e.Q6J("ngForOf",p.cvcFilterOptions),e.xp6(2),e.Q6J("disabled",null===(null==p.cvcOption?null:p.cvcOption.value)))},dependencies:[a.sg,Ie,zo.ix,ue.w,et.dQ,de.Ls,Ia.wO,Ia.r9],styles:[".typeahead-match[_ngcontent-%COMP%]{font-weight:700}.hide-dropdown[_ngcontent-%COMP%]{display:none}[_nghost-%COMP%]     ul li:hover{background-color:#e6f7ff}[_nghost-%COMP%]     ul li.ant-dropdown-menu-item-selected{background-color:#1890ff}[_nghost-%COMP%]     ul li.ant-dropdown-menu-item-selected:active{background-color:#096dd9}"],changeDetection:0}),l})();var Yc;function dd(l,g){if(1&l&&e._UZ(0,"th",14),2&l){const s=g.ngIf;let p;e.Q6J("nzShowCheckbox",s.checkbox.th.showCheckbox||!1)("nzWidth",s.width)("nzAlign",null!==(p=s.align)&&void 0!==p?p:"left")("nzLeft",s.fixedLeft||!1)("nzRight",s.fixedRight||!1)}}function uh(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"th",15),e.NdJ("nzSortOrderChange",function(w){const ft=e.CHM(s).ngIf;return e.KtG(ft.sort.changes.next({key:ft.key,value:w}))}),e.ALo(1,"ngrxPush"),e.TgZ(2,"span",16),e._uU(3),e.qZA()()}if(2&l){const s=g.ngIf;let p,w;e.Q6J("nzColumnKey",s.key)("nzAlign",null!==(p=s.align)&&void 0!==p?p:"left")("nzWidth",s.width)("nzLeft",s.fixedLeft||!1)("nzRight",s.fixedRight||!1)("nzShowSort",void 0!==s.sort)("nzSortFn",!0)("nzSortOrder",(null==(w=e.lcZ(1,10,s.sort.changes))?null:w.value)||null),e.xp6(2),e.Q6J("nzTooltipTitle",s.tooltip),e.xp6(1),e.hij(" ",s.label," ")}}function O2(l,g){if(1&l&&(e.TgZ(0,"th",17),e._uU(1),e.qZA()),2&l){const s=g.ngIf;let p;e.Q6J("nzColumnKey",s.key)("nzAlign",null!==(p=s.align)&&void 0!==p?p:"left")("nzWidth",s.width)("nzLeft",s.fixedLeft||!1)("nzRight",s.fixedRight||!1)("nzTooltipTitle",s.tooltip),e.xp6(1),e.hij(" ",s.label," ")}}function Np(l,g){if(1&l&&(e.TgZ(0,"th",17),e._uU(1),e.qZA()),2&l){const s=g.ngIf;let p;e.Q6J("nzColumnKey",s.key)("nzAlign",null!==(p=s.align)&&void 0!==p?p:"left")("nzWidth",s.width)("nzLeft",s.fixedLeft||!1)("nzRight",s.fixedRight||!1)("nzTooltipTitle",s.tooltip),e.xp6(1),e.hij(" ",s.label," ")}}function e1(l,g){if(1&l&&(e.TgZ(0,"th",17),e._uU(1),e.qZA()),2&l){const s=g.ngIf;let p;e.Q6J("nzColumnKey",s.key)("nzAlign",null!==(p=s.align)&&void 0!==p?p:"left")("nzWidth",s.width)("nzLeft",s.fixedLeft||!1)("nzRight",s.fixedRight||!1)("nzTooltipTitle",s.tooltip),e.xp6(1),e.hij(" ",s.label," ")}}function qd(l,g){if(1&l&&(e.ynx(0),e.YNc(1,dd,1,5,"th",11),e.ALo(2,"guardType"),e.YNc(3,uh,4,12,"th",12),e.ALo(4,"guardType"),e.YNc(5,O2,2,7,"th",13),e.ALo(6,"guardType"),e.YNc(7,Np,2,7,"th",13),e.ALo(8,"guardType"),e.YNc(9,e1,2,7,"th",13),e.ALo(10,"guardType"),e.BQk()),2&l){const s=e.oxw().$implicit,p=e.oxw(2);e.xp6(1),e.Q6J("ngIf",e.xi3(2,5,s,p.colGuards.isSelectCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(4,8,s,p.colGuards.isEntityTagCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(6,11,s,p.colGuards.isEnumTagCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(8,14,s,p.colGuards.isTextTagCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(10,17,s,p.colGuards.isDefaultCol))}}function dh(l,g){if(1&l&&(e.ynx(0),e.YNc(1,qd,11,20,"ng-container",10),e.BQk()),2&l){const s=g.$implicit;e.xp6(1),e.Q6J("ngIf",!s.hidden)}}function ph(l,g){if(1&l&&(e.TgZ(0,"th",22),e._uU(1," \xa0 "),e.qZA()),2&l){const s=g.ngIf;let p;e.Q6J("nzColumnKey",s.key)("nzAlign",null!==(p=s.align)&&void 0!==p?p:"left")("nzWidth",s.width)("nzLeft",s.fixedLeft||!1)("nzRight",s.fixedRight||!1)}}function f4(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"cvc-variant-table-filter-input",25),e.NdJ("cvcModelChange",function(w){const ft=e.CHM(s).ngIf,vn=e.oxw().ngIf;return e.KtG(ft.changes.next({key:vn.key,value:w}))}),e.qZA()}if(2&l){const s=e.oxw().ngIf;e.Q6J("cvcInputType",s.filter.inputType)("cvcPlaceholder",s.filter.options[0].key)("cvcModel",s.filter.options[0].value)}}function m4(l,g){if(1&l&&(e.TgZ(0,"th",23),e.YNc(1,f4,1,3,"cvc-variant-table-filter-input",24),e.qZA()),2&l){const s=g.ngIf;let p;e.Q6J("nzColumnKey",s.key)("nzWidth",s.width)("nzAlign",null!==(p=s.align)&&void 0!==p?p:"left")("nzLeft",s.fixedLeft||!1)("nzRight",s.fixedRight||!1),e.xp6(1),e.Q6J("ngIf",s.filter)}}function g4(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"th",26,27),e.NdJ("nzSortOrderChange",function(w){const ft=e.CHM(s).ngIf;return e.KtG(ft.sort.changes.next({key:ft.key,value:w}))}),e.ALo(2,"ngrxPush"),e.TgZ(3,"nz-filter-trigger",28,29),e.ALo(5,"ngrxPush"),e._UZ(6,"span",30),e.qZA(),e.TgZ(7,"nz-dropdown-menu",null,31)(9,"cvc-variant-enum-filter-menu",32),e.NdJ("cvcOptionChange",function(w){const ft=e.CHM(s).ngIf,vn=e.MAs(4);return ft.filter.changes.next(w),e.KtG(vn.nzVisible=!1)}),e.ALo(10,"ngrxPush"),e.qZA()()()}if(2&l){const s=g.ngIf,p=e.MAs(8);let w,ze,ft;e.Q6J("nzColumnKey",s.key)("nzWidth",s.width)("nzAlign",null!==(w=s.align)&&void 0!==w?w:"left")("nzLeft",s.fixedLeft||!1)("nzRight",s.fixedRight||!1)("nzShowSort",!0)("nzSortFn",!0)("nzSortOrder",(null==(ze=e.lcZ(2,15,s.sort.changes))?null:ze.value)||null)("nzShowFilter",void 0!==s.filter)("nzFilterFn",!0),e.xp6(3),e.Q6J("nzDropdownMenu",p)("nzActive",null!==(null==(ft=e.lcZ(5,17,s.filter.changes))?null:ft.value)),e.xp6(6),e.Q6J("cvcColumnKey",s.key)("cvcFilterOptions",s.filter.options)("cvcOption",e.lcZ(10,19,s.filter.changes))}}function v4(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"th",33,27)(2,"nz-filter-trigger",28),e.ALo(3,"ngrxPush"),e._UZ(4,"span",34),e.qZA(),e.TgZ(5,"nz-dropdown-menu",null,35)(7,"div",36)(8,"div",37)(9,"cvc-variant-table-filter-input",38),e.NdJ("cvcModelChange",function(w){const ft=e.CHM(s).ngIf;return e.KtG(ft.filter.changes.next({key:ft.key,value:w}))}),e.qZA()()()()()}if(2&l){const s=g.ngIf,p=e.MAs(6);let w,ze;e.Q6J("nzColumnKey",s.key)("nzWidth",s.width)("nzAlign",null!==(w=s.align)&&void 0!==w?w:"left")("nzLeft",s.fixedLeft||!1)("nzRight",s.fixedRight||!1)("nzFilterFn",!0),e.xp6(2),e.Q6J("nzDropdownMenu",p)("nzActive",null!==(null==(ze=e.lcZ(3,10,s.filter.changes))?null:ze.value)),e.xp6(7),e.Q6J("cvcPlaceholder",s.filter.options[0].key)("cvcModel",s.filter.options[0].value)}}function hh(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"cvc-variant-table-filter-input",38),e.NdJ("cvcModelChange",function(w){const ft=e.CHM(s).ngIf,vn=e.oxw().ngIf;return e.KtG(ft.changes.next({key:vn.key,value:w}))}),e.qZA()}if(2&l){const s=e.oxw().ngIf;e.Q6J("cvcPlaceholder",s.filter.options[0].key)("cvcModel",s.filter.options[0].value)}}function _4(l,g){if(1&l&&(e.TgZ(0,"th",23),e.YNc(1,hh,1,2,"cvc-variant-table-filter-input",39),e.qZA()),2&l){const s=g.ngIf;let p;e.Q6J("nzColumnKey",s.key)("nzWidth",s.width)("nzAlign",null!==(p=s.align)&&void 0!==p?p:"left")("nzLeft",s.fixedLeft||!1)("nzRight",s.fixedRight||!1),e.xp6(1),e.Q6J("ngIf",s.filter)}}function Lp(l,g){if(1&l&&(e.ynx(0),e.YNc(1,ph,2,5,"th",18),e.ALo(2,"guardType"),e.YNc(3,m4,2,6,"th",19),e.ALo(4,"guardType"),e.YNc(5,g4,11,21,"th",20),e.ALo(6,"guardType"),e.YNc(7,v4,10,12,"th",21),e.ALo(8,"guardType"),e.YNc(9,_4,2,6,"th",19),e.ALo(10,"guardType"),e.BQk()),2&l){const s=e.oxw().$implicit,p=e.oxw(2);e.xp6(1),e.Q6J("ngIf",e.xi3(2,5,s,p.colGuards.isSelectCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(4,8,s,p.colGuards.isEntityTagCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(6,11,s,p.colGuards.isEnumTagCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(8,14,s,p.colGuards.isTextTagCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(10,17,s,p.colGuards.isDefaultCol))}}function Yl(l,g){if(1&l&&(e.ynx(0),e.YNc(1,Lp,11,20,"ng-container",10),e.BQk()),2&l){const s=g.$implicit;e.xp6(1),e.Q6J("ngIf",!s.hidden)}}function Ja(l,g){if(1&l&&(e.TgZ(0,"thead")(1,"tr",7),e.YNc(2,dh,2,1,"ng-container",8),e.qZA(),e.TgZ(3,"tr",9),e.YNc(4,Yl,2,1,"ng-container",8),e.qZA()()),2&l){const s=g.ngrxLet;e.xp6(2),e.Q6J("ngForOf",s),e.xp6(2),e.Q6J("ngForOf",s)}}function fh(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"td",45),e.NdJ("nzCheckedChange",function(w){e.CHM(s);const ze=e.oxw(3).$implicit,ft=e.oxw(2);return e.KtG(ft.onRowSelected$.next({id:ze.id,selected:w}))}),e.qZA()}if(2&l){const s=g.ngIf,p=e.oxw(3).$implicit;let w;e.Q6J("nzChecked",p.selected)("nzAlign",null!==(w=s.align)&&void 0!==w?w:"left")("nzLeft",s.fixedLeft||!1)("nzRight",s.fixedRight||!1)}}function w2(l,g){1&l&&e.GkF(0)}const y4=function(l,g,s){return{$implicit:l,config:g,emphasize:s}};function P2(l,g){if(1&l&&(e.ynx(0),e.YNc(1,w2,1,0,"ng-container",51),e.ALo(2,"isArray"),e.ALo(3,"ngrxPush"),e.BQk()),2&l){const s=e.oxw().ngIf,p=e.oxw().ngIf,w=e.MAs(3),ze=e.MAs(5),ft=e.oxw(3).$implicit;let vn;e.xp6(1),e.Q6J("ngTemplateOutlet",e.lcZ(2,2,ft[s])?w:ze)("ngTemplateOutletContext",e.kEZ(6,y4,ft[s],p,null==(vn=e.lcZ(3,4,p.filter.changes))?null:vn.value))}}function I2(l,g){if(1&l&&(e.ynx(0),e.YNc(1,P2,4,10,"ng-container",50),e.BQk()),2&l){const s=g.ngIf;e.oxw();const p=e.MAs(7),w=e.oxw(3).$implicit;e.xp6(1),e.Q6J("ngIf",w[s])("ngIfElse",p)}}const kp=function(l,g,s,p,w){return{tagList:l,tag:g,showPopover:s,status:p,emphasize:w}};function mh(l,g){if(1&l&&(e.ynx(0),e._UZ(1,"cvc-entity-collection-tag",53),e.BQk()),2&l){const s=e.oxw(2),p=s.config,w=s.$implicit,ze=s.emphasize;e.oxw();const ft=e.MAs(5),vn=e.oxw(5);e.xp6(1),e.Q6J("cvcCollectionTagConfig",e.qbA(3,kp,w.slice(p.tag.maxTags,w.length),p.tag,!vn.isScrolling,!0===p.showStatus?w.status:void 0,ze))("cvcTagTemplate",ft)("cvcShowFullLabels",!0)}}function A2(l,g){if(1&l&&(e.ynx(0),e._UZ(1,"cvc-entity-tag-list",52),e.YNc(2,mh,2,9,"ng-container",10),e.BQk()),2&l){const s=e.oxw(),p=s.config,w=s.$implicit,ze=s.emphasize;e.oxw();const ft=e.MAs(5),vn=e.oxw(5);e.xp6(1),e.Q6J("cvcTagTemplate",ft)("cvcTagListConfig",e.qbA(3,kp,w.slice(0,p.tag.maxTags),p.tag,!vn.isScrolling,!0===p.showStatus?w.status:void 0,ze)),e.xp6(1),e.Q6J("ngIf",w.slice(p.tag.maxTags,w.length).length>0)}}function gh(l,g){if(1&l&&e.YNc(0,A2,3,9,"ng-container",50),2&l){const s=g.$implicit;e.oxw();const p=e.MAs(7);e.Q6J("ngIf",s.length>0)("ngIfElse",p)}}function pd(l,g){if(1&l&&e._UZ(0,"cvc-entity-tag",54),2&l){const s=g.$implicit,p=g.config,w=g.emphasize,ze=e.oxw(6);let ft;e.Q6J("cvcTruncateLabel",null==p.tag?null:p.tag.truncateLabel)("cvcLinkableEntity",s)("cvcEmphasize",w)("cvcShowPopover",!ze.isScrolling)("cvcStatus",!0===p.showStatus?s.status:void 0)("cvcFullWidth",null!==(ft=null==p.tag?null:p.tag.fullWidth)&&void 0!==ft&&ft)}}function vh(l,g){if(1&l&&e._UZ(0,"cvc-empty-value",55),2&l){const s=e.oxw().ngIf;e.Q6J("cvcEmptyCategory",s.emptyValueCategory||"unspecified")}}function _h(l,g){if(1&l&&(e.TgZ(0,"td",46),e.YNc(1,I2,2,2,"ng-container",10),e.YNc(2,gh,1,2,"ng-template",null,47,e.W1O),e.YNc(4,pd,1,6,"ng-template",null,48,e.W1O),e.YNc(6,vh,1,1,"ng-template",null,49,e.W1O),e.qZA()),2&l){const s=g.ngIf;let p;e.Q6J("nzAlign",null!==(p=s.align)&&void 0!==p?p:"left")("nzLeft",s.fixedLeft||!1)("nzRight",s.fixedRight||!1),e.xp6(1),e.Q6J("ngIf",s.context||s.key)}}function yh(l,g){if(1&l&&(e._UZ(0,"cvc-attribute-tag",58),e.ALo(1,"evidenceEnumDisplay")),2&l){const s=e.oxw().ngIf,p=e.oxw(3).$implicit,w=e.oxw(2);e.Q6J("cvcFullWidth",!0)("cvcAttrValue",p[s.key])("cvcTooltip",e.lcZ(1,3,!w.isScrolling&&p[s.key]))}}function Ho(l,g){if(1&l&&e._UZ(0,"cvc-empty-value",55),2&l){const s=e.oxw().ngIf;e.Q6J("cvcEmptyCategory",s.emptyValueCategory||"unspecified")}}function Ch(l,g){if(1&l&&(e.TgZ(0,"td",46),e.YNc(1,yh,2,5,"cvc-attribute-tag",56),e.YNc(2,Ho,1,1,"ng-template",null,57,e.W1O),e.qZA()),2&l){const s=g.ngIf,p=e.MAs(3),w=e.oxw(3).$implicit;let ze;e.Q6J("nzAlign",null!==(ze=s.align)&&void 0!==ze?ze:"left")("nzLeft",s.fixedLeft||!1)("nzRight",s.fixedRight||!1),e.xp6(1),e.Q6J("ngIf",w[s.key])("ngIfElse",p)}}function zh(l,g){if(1&l&&(e.TgZ(0,"nz-tag",61),e._UZ(1,"span",62),e.qZA()),2&l){const s=e.oxw().ngIf,p=e.oxw(3).$implicit;e.Q6J("nzTooltipTitle",p[s.key])}}function F2(l,g){if(1&l&&e._UZ(0,"cvc-empty-value",55),2&l){const s=e.oxw().ngIf;e.Q6J("cvcEmptyCategory",s.emptyValueCategory||"unspecified")}}function C4(l,g){if(1&l&&(e.TgZ(0,"td",46),e.YNc(1,zh,2,1,"nz-tag",59),e.YNc(2,F2,1,1,"ng-template",null,60,e.W1O),e.qZA()),2&l){const s=g.ngIf,p=e.MAs(3),w=e.oxw(3).$implicit;let ze;e.Q6J("nzAlign",null!==(ze=s.align)&&void 0!==ze?ze:"left")("nzLeft",s.fixedLeft||!1)("nzRight",s.fixedRight||!1),e.xp6(1),e.Q6J("ngIf",w[s.key])("ngIfElse",p)}}function Th(l,g){1&l&&e.GkF(0)}const Mh=function(l,g){return{$implicit:l,emphasize:g}};function z4(l,g){if(1&l&&(e.ynx(0),e.YNc(1,Th,1,0,"ng-container",51),e.ALo(2,"isArray"),e.ALo(3,"ngrxPush"),e.BQk()),2&l){const s=g.ngIf,p=e.oxw().ngIf,w=e.MAs(3),ze=e.MAs(5);let ft;e.xp6(1),e.Q6J("ngTemplateOutlet",e.lcZ(2,2,s)?w:ze)("ngTemplateOutletContext",e.WLB(6,Mh,s,null==(ft=e.lcZ(3,4,p.filter.changes))?null:ft.value))}}function bh(l,g){1&l&&e.GkF(0)}function T4(l,g){1&l&&(e.ynx(0),e._uU(1,", "),e.BQk())}function Sh(l,g){if(1&l&&(e.ynx(0),e.YNc(1,bh,1,0,"ng-container",51),e.YNc(2,T4,2,0,"ng-container",10),e.BQk()),2&l){const s=g.$implicit,p=g.last,w=e.oxw(2).emphasize;e.oxw();const ze=e.MAs(5);e.xp6(1),e.Q6J("ngTemplateOutlet",ze)("ngTemplateOutletContext",e.WLB(3,Mh,s,w)),e.xp6(1),e.Q6J("ngIf",!p)}}function M4(l,g){if(1&l&&(e.ynx(0),e.YNc(1,Sh,3,6,"ng-container",8),e.BQk()),2&l){const s=e.oxw().$implicit;e.xp6(1),e.Q6J("ngForOf",s)}}function b4(l,g){if(1&l&&e.YNc(0,M4,2,1,"ng-container",50),2&l){const s=g.$implicit;e.oxw();const p=e.MAs(7);e.Q6J("ngIf",s.length>0)("ngIfElse",p)}}function N2(l,g){if(1&l&&(e._UZ(0,"span",67),e.ALo(1,"highlightTypeahead")),2&l){const s=g.$implicit,p=g.emphasize,w=e.oxw().ngIf;e.Q6J("innerHtml",e.xi3(1,1,w.objectKey?s[w.objectKey]:s,p),e.oJD)}}function Eh(l,g){if(1&l&&e._UZ(0,"cvc-empty-value",55),2&l){const s=e.oxw().ngIf;e.Q6J("cvcEmptyCategory",s.emptyValueCategory||"unspecified")}}function xh(l,g){if(1&l&&(e.TgZ(0,"td",63),e.YNc(1,z4,4,9,"ng-container",50),e.YNc(2,b4,1,2,"ng-template",null,64,e.W1O),e.YNc(4,N2,2,4,"ng-template",null,65,e.W1O),e.YNc(6,Eh,1,1,"ng-template",null,66,e.W1O),e.qZA()),2&l){const s=g.ngIf,p=e.MAs(7),w=e.oxw(3).$implicit;let ze;e.Q6J("nzAlign",null!==(ze=s.align)&&void 0!==ze?ze:"left")("nzLeft",s.fixedLeft||!1)("nzRight",s.fixedRight||!1),e.xp6(1),e.Q6J("ngIf",w[s.key])("ngIfElse",p)}}function $c(l,g){if(1&l&&(e.ynx(0),e.YNc(1,fh,1,4,"td",42),e.ALo(2,"guardType"),e.YNc(3,_h,8,4,"td",43),e.ALo(4,"guardType"),e.YNc(5,Ch,4,5,"td",43),e.ALo(6,"guardType"),e.YNc(7,C4,4,5,"td",43),e.ALo(8,"guardType"),e.YNc(9,xh,8,5,"td",44),e.ALo(10,"guardType"),e.BQk()),2&l){const s=e.oxw().$implicit,p=e.oxw(3);e.xp6(1),e.Q6J("ngIf",e.xi3(2,5,s,p.colGuards.isSelectCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(4,8,s,p.colGuards.isEntityTagCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(6,11,s,p.colGuards.isEnumTagCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(8,14,s,p.colGuards.isTextTagCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(10,17,s,p.colGuards.isDefaultCol))}}function t1(l,g){if(1&l&&(e.ynx(0),e.YNc(1,$c,11,20,"ng-container",10),e.BQk()),2&l){const s=g.$implicit;e.xp6(1),e.Q6J("ngIf",!s.hidden)}}function Dh(l,g){if(1&l&&(e.TgZ(0,"tr",41),e.YNc(1,t1,2,1,"ng-container",8),e.qZA()),2&l){const s=e.oxw().ngrxLet;e.xp6(1),e.Q6J("ngForOf",s)}}function S4(l,g){1&l&&(e.TgZ(0,"tbody"),e.YNc(1,Dh,2,1,"ng-template",40),e.qZA())}function Xd(l,g){1&l&&e._UZ(0,"span",75)}function n1(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"span",76),e.NdJ("click",function(){e.CHM(s),e.oxw(2);const w=e.MAs(3),ze=e.oxw().filter;return w.value="",e.KtG(ze.changes.next({key:ze.key,value:null}))}),e.qZA()}}function Rp(l,g){if(1&l&&(e.YNc(0,Xd,1,0,"span",73),e.YNc(1,n1,1,0,"span",74)),2&l){e.oxw();const s=e.MAs(3);e.Q6J("ngIf",!s.value),e.xp6(1),e.Q6J("ngIf",s.value)}}function hd(l,g){if(1&l){const s=e.EpF();e.ynx(0),e.TgZ(1,"nz-input-group",69)(2,"input",70,71),e.NdJ("nzFilterChange",function(w){e.CHM(s);const ze=e.oxw().filter;return e.KtG(ze.changes.next({key:ze.key,value:w}))}),e.qZA()(),e.YNc(4,Rp,2,2,"ng-template",null,72,e.W1O),e.BQk()}if(2&l){const s=e.MAs(5),p=e.oxw().filter;e.xp6(1),e.Q6J("nzSuffix",s),e.xp6(1),e.Q6J("placeholder",p.placeholder)("ngModel",p.defaultValue)}}function Oh(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"nz-input-number-group",77)(1,"nz-input-number",78,71),e.NdJ("ngModelChange",function(w){e.CHM(s);const ze=e.oxw().filter;return e.KtG(ze.changes.next({key:ze.key,value:w}))}),e.qZA()()}if(2&l){const s=e.oxw().filter;e.xp6(1),e.Q6J("nzPlaceHolder",s.placeholder)("ngModel",s.defaultValue)("nzMin",1)("nzStep",1)}}function Vp(l,g){if(1&l&&(e.YNc(0,hd,6,3,"ng-container",50),e.YNc(1,Oh,3,4,"ng-template",null,68,e.W1O)),2&l){const s=g.filter,p=e.MAs(2);e.Q6J("ngIf",void 0===s.inputType||"default"===s.inputType)("ngIfElse",p)}}const ep=function(){return[6,6]};function tp(l,g){1&l&&(e.TgZ(0,"nz-row",79)(1,"nz-col")(2,"span"),e._uU(3,"Use checkboxes to select or deselect Variants"),e.qZA()()()),2&l&&e.Q6J("nzGutter",e.DdM(1,ep))}function wh(l,g){1&l&&(e.TgZ(0,"nz-tag",90),e._UZ(1,"i",91),e.TgZ(2,"span"),e._uU(3,"Loading\u2026"),e.qZA()())}const np=function(l){return{$implicit:l}};function E4(l,g){if(1&l&&(e.TgZ(0,"nz-tag",94),e._UZ(1,"span",95),e.TgZ(2,"span",96),e._uU(3),e.qZA()()),2&l){e.oxw();const s=e.MAs(4),p=e.oxw().ngrxLet;e.xp6(2),e.Q6J("nzTooltipTitle",s)("nzTooltipTitleContext",e.VKq(3,np,p.query)),e.xp6(1),e.hij(" Query Error",p.query.length>1?"s":""," ")}}function x4(l,g){if(1&l&&(e.TgZ(0,"nz-tag",94)(1,"span",96)(2,"span",97)(3,"strong"),e._uU(4),e.qZA()()()()),2&l){e.oxw();const s=e.MAs(4),p=e.oxw().ngrxLet;e.xp6(1),e.Q6J("nzTooltipTitle",s)("nzTooltipTitleContext",e.VKq(3,np,p.network)),e.xp6(3),e.hij(" Network Error",p.query.length>1?"s":""," ")}}function D4(l,g){if(1&l&&(e.TgZ(0,"div"),e._uU(1),e.qZA()),2&l){const s=g.$implicit;e.xp6(1),e.hij(" ",s.message," ")}}function Ph(l,g){1&l&&e.YNc(0,D4,2,1,"div",8),2&l&&e.Q6J("ngForOf",g.$implicit)}function O4(l,g){if(1&l&&(e.ynx(0),e.YNc(1,E4,4,5,"nz-tag",92),e.YNc(2,x4,5,5,"nz-tag",92),e.YNc(3,Ph,1,1,"ng-template",null,93,e.W1O),e.BQk()),2&l){const s=e.oxw().ngrxLet;e.xp6(1),e.Q6J("ngIf",s.query),e.xp6(1),e.Q6J("ngIf",s.network)}}function w4(l,g){if(1&l&&(e.ynx(0),e.YNc(1,O4,5,2,"ng-container",10),e.BQk()),2&l){const s=g.ngrxLet;e.xp6(1),e.Q6J("ngIf",s)}}function P4(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"div",98)(1,"nz-checkbox-group",99),e.NdJ("ngModelChange",function(w){e.CHM(s);const ze=e.oxw(2);return e.KtG(ze.onPreferenceChange$.next(w))}),e.ALo(2,"ngrxPush"),e.qZA()()}if(2&l){const s=e.oxw(2);e.xp6(1),e.Q6J("ngModel",e.lcZ(2,1,s.setPreference$))}}function I4(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"nz-row",79)(1,"nz-col",80),e.YNc(2,wh,4,0,"nz-tag",81),e.ALo(3,"ngrxPush"),e.ALo(4,"ngrxPush"),e._UZ(5,"cvc-no-more-rows",82),e.ALo(6,"ngrxPush"),e.qZA(),e.TgZ(7,"nz-col",80),e.YNc(8,w4,2,1,"ng-container",3),e.qZA(),e.TgZ(9,"nz-col",80),e._UZ(10,"cvc-table-counts2",83),e.qZA(),e.TgZ(11,"nz-col",84)(12,"nz-button-group")(13,"button",85),e.NdJ("click",function(){e.CHM(s);const w=e.oxw();return e.KtG(w.onResetFilter$.next())}),e._UZ(14,"span",86),e.qZA(),e.TgZ(15,"button",87),e._UZ(16,"span",88),e.qZA()(),e.YNc(17,P4,3,3,"ng-template",null,89,e.W1O),e.qZA()()}if(2&l){const s=e.MAs(18),p=e.oxw();e.Q6J("nzGutter",8),e.xp6(2),e.Q6J("ngIf",e.lcZ(3,7,p.loading$)&&e.lcZ(4,9,p.isFetchMore$)),e.xp6(3),e.Q6J("cvcShowTag",e.lcZ(6,11,p.noMoreRows$)),e.xp6(3),e.Q6J("ngrxLet",p.queryError$),e.xp6(2),e.Q6J("cvcTableCountsConnection",p.connection$),e.xp6(5),e.Q6J("nzPopoverContent",s)("nzPopoverTrigger","click")}}const Ih=function(){return[]},Ah=function(){return{x:"800px",y:"200px"}};let Bp=((Yc=class{constructor(g,s,p){this.queryGQL=g,this.apollo=s,this.cdr=p,this.cvcSelectedIdsChange=new e.vpe,this.isScrolling=!1,this.colGuards=Fp,this.onFetchMore$=new E.x,this.onPreferenceChange$=new Be.X([]),this.onResetFilter$=new E.x,this.onRowSelected$=new E.x,this.onScroll$=new Be.X("stop"),this.onSetSelectedRow$=new Be.X(new Set),this.queryError$=new E.x,this.queryRequest$=new E.x,this.queryResult$=new Qi.t(1),this.isFetchMore$=new Be.X(!1),this.noMoreRows$=new Be.X(!1),this.scrollToIndex$=new E.x,this.tableConfig=new ld;const w=(0,Io.a)(this.tableConfig.getFilterStreams()),ze=(0,Io.a)(this.tableConfig.getSortStreams()).pipe((0,yt.h)(ft=>ft.filter(vn=>null!==vn.value).length<=1));this.refetch$=(0,Io.a)([ze,w]).pipe((0,S.U)(([ft,vn])=>({query:"refetch",sort:ft,filter:vn}))),this.fetchMore$=this.onFetchMore$.pipe((0,S.U)(ft=>({query:"fetchMore",fetchMore:{...ft}}))),(0,G.T)(this.refetch$,this.fetchMore$).pipe((0,Cs.b)(50),(0,zn.t)(this)).subscribe(ft=>{const vn=this.getQueryVars(ft);this.queryRef?(this.queryError$.next({}),"refetch"===ft.query?(this.isFetchMore$.next(!1),this.queryRef.refetch(vn).then(Sn=>{(Sn.error||Sn.errors)&&this.queryError$.next(this.getRequestErrors(Sn))}).then(()=>{this.scrollToIndex$.next(0)})):(this.isFetchMore$.next(!0),this.queryRef.fetchMore({variables:vn}).then(Sn=>{(Sn.error||Sn.errors)&&this.queryError$.next(this.getRequestErrors(Sn))}))):(this.isFetchMore$.next(!1),this.queryError$.next({}),this.queryRef=this.queryGQL.watch(vn),this.queryRef.valueChanges.pipe((0,zn.t)(this)).subscribe(Sn=>{this.queryResult$.next(Sn),(Sn.error||Sn.errors)&&this.queryError$.next(this.getRequestErrors(Sn))}))}),this.loading$=this.queryResult$.pipe((0,ai.j)("loading"),(0,Te.x)()),this.connection$=this.queryResult$.pipe((0,ai.j)("data","browseVariants"),(0,yt.h)(ko.ep)),this.pageInfo$=this.connection$.pipe((0,ai.j)("pageInfo"),(0,yt.h)(ko.ep)),this.row$=(0,Io.a)([this.connection$.pipe((0,ai.j)("edges"),(0,yt.h)(ko.ep),(0,S.U)(ft=>ft.map(vn=>vn.node))),this.onSetSelectedRow$]).pipe((0,S.U)(([ft,vn])=>ft.map(Sn=>{if(Sn)return{...Sn,variant:{__typename:"Variant",id:Sn.id,name:Sn.name,link:Sn.link},gene:{__typename:"Gene",id:Sn.geneId,name:Sn.geneName,link:Sn.geneLink},selected:vn.has(Sn.id)}}))),this.col$=new Be.X(this.tableConfig.get()),this.setPreference$=this.col$.pipe((0,S.U)(ft=>this.getColPrefsFromTableConfig(ft))),this.onPreferenceChange$.pipe((0,ni.M)(this.col$),(0,S.U)(([ft,vn])=>this.getTableConfigFromColPrefs(ft,vn)),(0,zn.t)(this)).subscribe(ft=>{this.col$.next(ft)}),this.onSetTableFilter$=new Be.X([]),this.onSetTableFilter$.pipe((0,zn.t)(this)).subscribe(ft=>{const vn=this.col$.getValue();ft.forEach(Sn=>{const Co=vn.find(mi=>mi.key===Sn.key);if(void 0!==Co.filter.inputType){const mi=Co.filter.options[0];if(null===Sn.value)return Co.filter.options=[{...mi,value:null}],void Co.filter.changes.next(Sn);if(Array.isArray(Sn.value)&&0===Sn.value.length)return Co.filter.options=[{...mi,value:null}],void Co.filter.changes.next({...Sn,value:null});let Ii;Array.isArray(Sn.value)?Sn.value.length>0&&(Ii=Sn.value[0]):Ii=Sn.value;const ba=Co.filter.typename;if(!ba||!Ii)return void console.error(`variant-manager requires column config '${Co.key}' provide a typename for cvcTablePrefs Input to set its filter`);const ec=this.getEntityName(ba,Ii);if(!ec)return;Co.filter.options=[{...mi,value:ec}],Co.filter.changes.next({...Sn,value:ec})}else Jd(Co)&&Co.filter.changes.next(Sn)})}),this.onSetTablePref$=new Be.X([]),this.onSetTablePref$.pipe((0,ni.M)(this.setPreference$),(0,S.U)(([ft,vn])=>{const Sn=[];return ft.forEach(Co=>{let mi=vn.find(Ii=>Ii.value===Co.value);mi?Sn.push({...mi,...Co}):console.warn(`variant-manager onSetTablePref$ received updated preferences for column '${Co.value}', but a column with that key could not be found.`)}),Sn}),(0,zn.t)(this)).subscribe(ft=>{this.onPreferenceChange$.next(ft)}),this.onRowSelected$.pipe((0,ni.M)(this.onSetSelectedRow$),(0,zn.t)(this)).subscribe(([ft,vn])=>{ft.selected?vn.add(ft.id):vn.delete(ft.id),this.onSetSelectedRow$.next(vn),this.cvcSelectedIdsChange.next(Array.from(vn))}),this.onScroll$.pipe((0,S.U)(ft=>"stop"!==ft),(0,Te.x)(),(0,zn.t)(this)).subscribe(ft=>{this.isScrolling=ft,this.cdr.detectChanges()}),this.onScroll$.pipe((0,yt.h)(ft=>"bottom"===ft),(0,ni.M)(this.pageInfo$),(0,S.U)(([ft,vn])=>vn),(0,zn.t)(this)).subscribe(ft=>{ft.hasNextPage||(this.noMoreRows$.next(!0),this.cdr.detectChanges(),setInterval(()=>this.noMoreRows$.next(!1)))})}ngAfterViewInit(){this.onResetFilter$.pipe((0,ni.M)((0,Bi.of)(this.tableConfig.get())),(0,zn.t)(this)).subscribe(([g,s])=>{const p=[];s.forEach(w=>{if(cd(w)&&w.sort.changes&&w.sort.changes.next({key:w.key,value:w.sort.default??null}),Jd(w)){const ze=w.filter.options.find(ft=>1==ft.byDefault)?.value;w.filter.changes&&w.filter.changes.next({key:w.key,value:ze||null})}p.push(w)}),this.col$.next(p)})}getQueryVars(g){const s=this.getQueryFilterParams(g);return{...this.getQuerySortParams(g),...s,...g.fetchMore}}getQuerySortParams(g){if(!g.sort)return;const p=g.sort.find(ze=>null!==ze.value);return p?{sortBy:{column:this.getSortColumnFromColKey(p.key),direction:"ascend"===p.value?Nn.SrV.Asc:Nn.SrV.Desc||void 0}}:void 0}getQueryFilterParams(g){let s={};return g.filter&&g.filter.forEach(p=>{s[D2[p.key]||p.key]=null===p.value||""===p.value?void 0:p.value}),s}getRequestErrors(g){return{query:g.errors,network:g.error}}getTableConfigFromColPrefs(g,s){return s.forEach(p=>{if(ah.find(ze=>ze===p.key))return;const w=g.find(ze=>ze.value===p.key);w&&(p.hidden=!w?.checked)}),[...s]}getColPrefsFromTableConfig(g){let s=[];return g.forEach(p=>{ah.find(w=>w===p.key)||s.push({label:p.tooltip||p.label,value:p.key,checked:!p.hidden})}),s}getSortColumnFromColKey(g){return sh[g]}getEntityName(g,s){const p={id:`${g}:${s}`,fragment:ac.Ps`
                fragment Linkable${g}Entity on ${g} {
                  id
                  name
                  link
                }`},w=this.apollo.client.readFragment(p);if(w)return w.name;console.error(`variant-manager onSetTableFilter$ could not find cached entity ${g}:${s} to populate input filter`)}trackByIndex(g,s){return s?.id}ngOnChanges(g){if(g.cvcTableSettings){const s=g.cvcTableSettings.currentValue;void 0!==s&&this.onSetTableFilter$.next(s.filters)}if(g.cvcSelectedIds){const s=g.cvcSelectedIds.currentValue,p=new Set;void 0!==s&&s.forEach(w=>p.add(w)),this.onSetSelectedRow$.next(p)}}}).\u0275fac=function(g){return new(g||Yc)(e.Y36(Nn.XQi),e.Y36(Pr._M),e.Y36(e.sBO))},Yc.\u0275cmp=e.Xpm({type:Yc,selectors:[["cvc-variant-manager"]],inputs:{cvcTableSettings:"cvcTableSettings",cvcSelectedIds:"cvcSelectedIds"},outputs:{cvcSelectedIdsChange:"cvcSelectedIdsChange"},features:[e.TTD],decls:16,vars:27,consts:[["nzSize","small",3,"nzTitle","nzExtra"],["cvcTableScroller","",3,"nzData","cvcTableScrollerQueryRef","cvcTableScrollerPageInfo","cvcTableScrollerToIndex","nzScroll","nzVirtualForTrackBy","nzVirtualItemSize","nzSize","nzFrontPagination","nzShowPagination","nzLoading","cvcTableScrollerOnScroll","cvcTableScrollerOnFetch"],["virtualTable",""],[4,"ngrxLet"],["columnFilterInput",""],["cardTitle",""],["extraTemplate",""],[1,"col-header-row"],[4,"ngFor","ngForOf"],[1,"filter-row"],[4,"ngIf"],[3,"nzShowCheckbox","nzWidth","nzAlign","nzLeft","nzRight",4,"ngIf"],[3,"nzColumnKey","nzAlign","nzWidth","nzLeft","nzRight","nzShowSort","nzSortFn","nzSortOrder","nzSortOrderChange",4,"ngIf"],["nz-tooltip","",3,"nzColumnKey","nzAlign","nzWidth","nzLeft","nzRight","nzTooltipTitle",4,"ngIf"],[3,"nzShowCheckbox","nzWidth","nzAlign","nzLeft","nzRight"],[3,"nzColumnKey","nzAlign","nzWidth","nzLeft","nzRight","nzShowSort","nzSortFn","nzSortOrder","nzSortOrderChange"],["nz-tooltip","",1,"col-header-label",3,"nzTooltipTitle"],["nz-tooltip","",3,"nzColumnKey","nzAlign","nzWidth","nzLeft","nzRight","nzTooltipTitle"],[3,"nzColumnKey","nzAlign","nzWidth","nzLeft","nzRight",4,"ngIf"],[3,"nzColumnKey","nzWidth","nzAlign","nzLeft","nzRight",4,"ngIf"],["class","attribute-filter","nzCustomFilter","",3,"nzColumnKey","nzWidth","nzAlign","nzLeft","nzRight","nzShowSort","nzSortFn","nzSortOrder","nzShowFilter","nzFilterFn","nzSortOrderChange",4,"ngIf"],["class","attribute-filter","nzCustomFilter","",3,"nzColumnKey","nzWidth","nzAlign","nzLeft","nzRight","nzFilterFn",4,"ngIf"],[3,"nzColumnKey","nzAlign","nzWidth","nzLeft","nzRight"],[3,"nzColumnKey","nzWidth","nzAlign","nzLeft","nzRight"],[3,"cvcInputType","cvcPlaceholder","cvcModel","cvcModelChange",4,"ngIf"],[3,"cvcInputType","cvcPlaceholder","cvcModel","cvcModelChange"],["nzCustomFilter","",1,"attribute-filter",3,"nzColumnKey","nzWidth","nzAlign","nzLeft","nzRight","nzShowSort","nzSortFn","nzSortOrder","nzShowFilter","nzFilterFn","nzSortOrderChange"],["enumTableFilter",""],[3,"nzDropdownMenu","nzActive"],["enumTagFilterTrigger",""],["nz-icon","","nzType","filter","nzTheme","fill"],["enumFilterMenu","nzDropdownMenu"],[3,"cvcColumnKey","cvcFilterOptions","cvcOption","cvcOptionChange"],["nzCustomFilter","",1,"attribute-filter",3,"nzColumnKey","nzWidth","nzAlign","nzLeft","nzRight","nzFilterFn"],["nz-icon","","nzType","search"],["textTagFilterMenu","nzDropdownMenu"],[1,"ant-table-filter-dropdown"],[1,"custom-input-dropdown"],[3,"cvcPlaceholder","cvcModel","cvcModelChange"],[3,"cvcPlaceholder","cvcModel","cvcModelChange",4,"ngIf"],["nz-virtual-scroll",""],[1,"data-row"],[3,"nzChecked","nzAlign","nzLeft","nzRight","nzCheckedChange",4,"ngIf"],[3,"nzAlign","nzLeft","nzRight",4,"ngIf"],["class","default-col-type",3,"nzAlign","nzLeft","nzRight",4,"ngIf"],[3,"nzChecked","nzAlign","nzLeft","nzRight","nzCheckedChange"],[3,"nzAlign","nzLeft","nzRight"],["entityTagList",""],["entityTag",""],["emptyEntityTagCell",""],[4,"ngIf","ngIfElse"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"cvcTagTemplate","cvcTagListConfig"],[3,"cvcCollectionTagConfig","cvcTagTemplate","cvcShowFullLabels"],[3,"cvcTruncateLabel","cvcLinkableEntity","cvcEmphasize","cvcShowPopover","cvcStatus","cvcFullWidth"],[3,"cvcEmptyCategory"],["cvcContext","compact",3,"cvcFullWidth","cvcAttrValue","cvcTooltip",4,"ngIf","ngIfElse"],["emptyEnumTagCell",""],["cvcContext","compact",3,"cvcFullWidth","cvcAttrValue","cvcTooltip"],["nz-tooltip","","style","width: 100%; cursor: help; color: #595959",3,"nzTooltipTitle",4,"ngIf","ngIfElse"],["emptyTextTagCell",""],["nz-tooltip","",2,"width","100%","cursor","help","color","#595959",3,"nzTooltipTitle"],["nz-icon","","nzType","align-left","nzTheme","outline"],[1,"default-col-type",3,"nzAlign","nzLeft","nzRight"],["staticList",""],["staticValue",""],["emptyDefaultCell",""],[3,"innerHtml"],["numericInput",""],["nzSize","small",3,"nzSuffix"],["nz-input","",3,"placeholder","ngModel","nzFilterChange"],["filterInput",""],["suffixIcon",""],["nz-icon","","nzType","search","style","color: #ddd",4,"ngIf"],["nz-icon","","class","ant-input-clear-icon","nzTheme","fill","nzType","close-circle",3,"click",4,"ngIf"],["nz-icon","","nzType","search",2,"color","#ddd"],["nz-icon","","nzTheme","fill","nzType","close-circle",1,"ant-input-clear-icon",3,"click"],["nzSize","small"],[2,"width","100%",3,"nzPlaceHolder","ngModel","nzMin","nzStep","ngModelChange"],[3,"nzGutter"],["nzFlex","auto"],["nzColor","processing",4,"ngIf"],[3,"cvcShowTag"],[3,"cvcTableCountsConnection"],["nzFlex","35px"],["nz-button","","type","button","nzType","default","nzSize","small",3,"click"],["nz-icon","","nzType","retweet","nzTheme","outline"],["nz-button","","nz-popover","","nzPopoverTitle","Visible Columns","type","button","nzType","default","nzSize","small",3,"nzPopoverContent","nzPopoverTrigger"],["nz-icon","","nzType","setting","nzTheme","outline"],["prefsPopover",""],["nzColor","processing"],["nz-icon","","nzType","sync","nzSpin",""],["nzColor","error","style","margin-left: 12px",4,"ngIf"],["queryError",""],["nzColor","error",2,"margin-left","12px"],["nz-icon","","nzType","question-circle","nzTheme","outline"],["nz-tooltip","",2,"cursor","help",3,"nzTooltipTitle","nzTooltipTitleContext"],["nz-typography",""],[1,"prefs-popover"],[3,"ngModel","ngModelChange"]],template:function(g,s){if(1&g&&(e.TgZ(0,"nz-card",0)(1,"nz-table",1,2),e.NdJ("cvcTableScrollerOnScroll",function(w){return s.onScroll$.next(w)})("cvcTableScrollerOnFetch",function(w){return s.onFetchMore$.next(w)}),e.ALo(3,"ngrxPush"),e.ALo(4,"ngrxPush"),e.ALo(5,"ngrxPush"),e.ALo(6,"ngrxPush"),e.ALo(7,"ngrxPush"),e.YNc(8,Ja,5,2,"thead",3),e.YNc(9,S4,2,0,"tbody",3),e.qZA()(),e.YNc(10,Vp,3,2,"ng-template",null,4,e.W1O),e.YNc(12,tp,4,2,"ng-template",null,5,e.W1O),e.YNc(14,I4,19,13,"ng-template",null,6,e.W1O)),2&g){const p=e.MAs(13),w=e.MAs(15);e.Q6J("nzTitle",p)("nzExtra",w),e.xp6(1),e.Q6J("nzData",e.lcZ(3,15,s.row$)||e.DdM(25,Ih))("cvcTableScrollerQueryRef",s.queryRef)("cvcTableScrollerPageInfo",e.lcZ(4,17,s.pageInfo$))("cvcTableScrollerToIndex",e.lcZ(5,19,s.scrollToIndex$))("nzScroll",e.DdM(26,Ah))("nzVirtualForTrackBy",s.trackByIndex)("nzVirtualItemSize",28)("nzSize","small")("nzFrontPagination",!1)("nzShowPagination",!1)("nzLoading",e.lcZ(6,21,s.loading$)&&!e.lcZ(7,23,s.isFetchMore$)),e.xp6(7),e.Q6J("ngrxLet",s.col$),e.xp6(1),e.Q6J("ngrxLet",s.col$)}},dependencies:[a.sg,a.O5,a.tP,Qt.J,el,nn,Ie,br,D.P,Xc.H,t.Fj,t.JJ,t.On,lo.eJ,zo.ix,zo.fY,ue.w,et.dQ,R.t3,R.SK,de.Ls,A.Zp,A.gB,A.ke,X.ZU,Vi.bd,ye.ub,Br.RR,lt,ie,Wo.lU,Qo.N8,Qo.qD,Qo.Uo,Qo._C,Qo.h7,Qo.Om,Qo.p0,Qo.$Z,Qo.zu,Qo.qn,Qo.Ql,Qo.UX,Qo.g6,An.j,eo.SY,Hc,p4,h4,zs,ts.Do,hr.A,Aa,lo.fM],styles:["[_nghost-%COMP%]{display:block}nz-card[_ngcontent-%COMP%]:first-of-type     .ant-card-body{padding:0;margin-top:1px}.table-info[_ngcontent-%COMP%]{margin-left:.5rem}tr.col-header-row[_ngcontent-%COMP%]   th.ant-table-cell[_ngcontent-%COMP%]{white-space:nowrap}tr.col-header-row[_ngcontent-%COMP%]   th.ant-table-cell.align-right[_ngcontent-%COMP%]     .ant-table-column-title{text-align:right}tr.filter-row[_ngcontent-%COMP%]   th.ant-table-cell[_ngcontent-%COMP%]{padding:3px 4px}tr.filter-row[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   nz-filter-trigger[_ngcontent-%COMP%]     span.ant-dropdown-trigger{margin-left:0;padding-right:12px}tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell[_ngcontent-%COMP%]{white-space:nowrap}tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell[_ngcontent-%COMP%]   .anticon.attribute-icon[_ngcontent-%COMP%]{color:#595959}tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell.overflow-ellipsis[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis}tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell.button-cell[_ngcontent-%COMP%]{padding:0}tr.data-row[_ngcontent-%COMP%]   td.align-right[_ngcontent-%COMP%], tr.col-header-row[_ngcontent-%COMP%]   th.ant-table-cell[_ngcontent-%COMP%]   .align-right[_ngcontent-%COMP%], tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell[_ngcontent-%COMP%]   .align-right[_ngcontent-%COMP%], tr.filter-row[_ngcontent-%COMP%]   th.ant-table-cell[_ngcontent-%COMP%]   .align-right[_ngcontent-%COMP%]{text-align:right}tr.data-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-of-type{padding-left:6px}tr.data-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-of-type   cvc-entity-tag[_ngcontent-%COMP%]{margin-left:6px}td.default-col-type[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis}.ant-table-filter-dropdown[_ngcontent-%COMP%]{padding:8px}.prefs-popover[_ngcontent-%COMP%]     nz-checkbox-group:first-of-type label{display:block}.prefs-popover[_ngcontent-%COMP%]     nz-checkbox-group:first-of-type label span{display:inline-block}"],changeDetection:0}),Yc);var fd;function Ps(l,g){if(1&l&&(e.ynx(0),e.TgZ(1,"span"),e._uU(2),e.qZA(),e.BQk()),2&l){const s=g.ngrxLet;e.xp6(2),e.Oqu(s.message)}}function L2(l,g){if(1&l&&e._uU(0),2&l){const s=e.oxw();e.Oqu(s.successMessage)}}Bp=(0,U.gn)([(0,zn.c)()],Bp);const k2=function(){return[0,0]};let A4=((fd=class{set cvcGeneId(g){g&&this.geneId$.next(g)}set cvcGeneName(g){g&&this.geneName$.next(g)}set cvcSearchString(g){g&&this.searchString$.next(g)}constructor(g,s){this.query=g,this.errors=s,this.cvcOnCreate=new e.vpe,this.form=new t.nJ({}),this.model={name:""},this.formLayout="horizontal",this.options={formState:{formLayout:this.formLayout}},this.onSubmit$=new E.x,this.searchString$=new Be.X(void 0),this.geneName$=new Be.X(void 0),this.geneId$=new Be.X(void 0),this.formMessageDisplay$=new Be.X({message:"Variant does not exist, create it?"}),this.queryMutator=new oi.U(this.errors),this.addVariantMutator=new oi.U(this.errors),this.minNameLength=3,this.fields=[{key:"geneId",hide:!0,props:{required:!0}},{key:"name",hide:!0,props:{minLength:this.minNameLength,required:!0}},{key:"organizationId",type:"org-submit-button",props:{submitLabel:"Add Variant"}}],this.geneId$.pipe((0,zn.t)(this)).subscribe(p=>{this.model.geneId=p}),this.searchString$.pipe((0,zn.t)(this)).subscribe(p=>{this.model.name=p,this.formMessageDisplay$.next(void 0===p||void 0!==p&&p.length<this.minNameLength?{message:`New Variant name must be at least ${this.minNameLength} characters.`}:{message:`Variant '${p}' does not exist, create it?`})}),this.onSubmit$.pipe((0,zn.t)(this)).subscribe(p=>{console.log("variant-quick-add form model submitted.",p),this.submitVariant(p)})}submitVariant(g){g.name&&g.geneId?this.mutationState=this.addVariantMutator.mutate(this.query,{name:g.name,geneId:g.geneId,organizationId:g.organizationId},{},s=>{console.log("variant-quick-add submit data callback",s),s.createVariant&&(this.formMessageDisplay$.next({message:void 0}),setTimeout(()=>{s&&s.createVariant&&this.cvcOnCreate.next({id:s.createVariant.variant.id,new:s.createVariant.new})},1e3))}):console.error("variant-quick-add form submitVariant requires model with valid name and geneId.")}ngOnChanges(g){if(g.cvcGeneId){const s=g.cvcGeneId.currentValue;this.geneId$.next(s),this.model={...this.model,geneId:s}}g.cvcGeneName&&this.geneName$.next(g.cvcGeneName.currentValue)}}).\u0275fac=function(g){return new(g||fd)(e.Y36(Nn.MCG),e.Y36(jo.Y))},fd.\u0275cmp=e.Xpm({type:fd,selectors:[["cvc-variant-quick-add-form"]],inputs:{cvcGeneId:"cvcGeneId",cvcGeneName:"cvcGeneName",cvcSearchString:"cvcSearchString"},outputs:{cvcOnCreate:"cvcOnCreate"},features:[e.TTD],decls:8,vars:10,consts:[[4,"ngrxLet"],["entityType","Variant",3,"mutationState","successMessage"],["success",""],[3,"formGroup","ngSubmit"],[3,"nzGutter"],["nzSpan","24"],[3,"form","fields","model","options","modelChange"]],template:function(g,s){if(1&g&&(e.YNc(0,Ps,3,1,"ng-container",0),e.TgZ(1,"cvc-form-submission-status-display",1),e.YNc(2,L2,1,1,"ng-template",null,2,e.W1O),e.TgZ(4,"form",3),e.NdJ("ngSubmit",function(){return s.onSubmit$.next(s.model)}),e.TgZ(5,"nz-row",4)(6,"nz-col",5)(7,"formly-form",6),e.NdJ("modelChange",function(w){return s.model=w}),e.qZA()()()()()),2&g){const p=e.MAs(3);e.Q6J("ngrxLet",s.formMessageDisplay$),e.xp6(1),e.Q6J("mutationState",s.mutationState)("successMessage",p),e.xp6(3),e.Q6J("formGroup",s.form),e.xp6(1),e.Q6J("nzGutter",e.DdM(9,k2)),e.xp6(2),e.Q6J("form",s.form)("fields",s.fields)("model",s.model)("options",s.options)}},dependencies:[Ti.F,_.T7,t._Y,t.JL,lo.eJ,R.t3,R.SK,t.sg],encapsulation:2,changeDetection:0}),fd);A4=(0,U.gn)([(0,zn.c)()],A4);const Fh=["optionTemplates"],F4=function(l,g){return{show:l,hide:g}};function R2(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"nz-col",9)(1,"button",10),e.NdJ("click",function(){e.CHM(s);const w=e.oxw();return e.KtG(w.onShowMgrClick$.next())}),e._UZ(2,"span",11),e.ALo(3,"ngrxPush"),e.ALo(4,"ngrxPush"),e._uU(5," Manager "),e.qZA()()}if(2&l){const s=e.oxw();e.xp6(2),e.Q6J("ngClass",e.WLB(6,F4,e.lcZ(3,2,s.showMgr$),!e.lcZ(4,4,s.showMgr$)))("nzType","caret-right")}}function V2(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"nz-col",12)(1,"cvc-variant-manager",13),e.NdJ("cvcSelectedIdsChange",function(w){e.CHM(s);const ze=e.oxw();return e.KtG(ze.onPopulate$.next(w))}),e.ALo(2,"ngrxPush"),e.qZA()()}if(2&l){const s=e.oxw();e.xp6(1),e.Q6J("cvcSelectedIds",e.lcZ(2,1,s.onVid$))}}function B2(l,g){if(1&l&&(e.ynx(0),e.TgZ(1,"em"),e._UZ(2,"span",20),e.ALo(3,"highlightTypeahead"),e.qZA(),e.BQk()),2&l){const s=e.oxw(2).$implicit,p=e.oxw().ngrxLet;e.xp6(2),e.Q6J("nzTooltipTitle",s.variantAliases.join(", "))("innerHtml",e.xi3(3,2,s.variantAliases.join(", "),p),e.oJD)}}function N4(l,g){1&l&&e._uU(0,"--")}function H2(l,g){if(1&l&&(e._UZ(0,"cvc-entity-tag",16),e.TgZ(1,"span",17)(2,"strong"),e._uU(3,"Aliases:"),e.qZA(),e.YNc(4,B2,4,5,"ng-container",18),e.YNc(5,N4,1,0,"ng-template",null,19,e.W1O),e.qZA()),2&l){const s=e.MAs(6),p=e.oxw().$implicit,w=e.oxw().ngrxLet;e.Q6J("cvcDisableLink",!0)("cvcCacheId",p.__typename+":"+p.id)("cvcEmphasize",w),e.xp6(4),e.Q6J("ngIf",p.variantAliases.length>0)("ngIfElse",s)}}function Y2(l,g){1&l&&(e.ynx(0),e.YNc(1,H2,7,5,"ng-template",null,15,e.W1O),e.BQk())}function Nh(l,g){if(1&l&&(e.ynx(0),e.YNc(1,Y2,3,0,"ng-container",14),e.ALo(2,"ngrxPush"),e.BQk()),2&l){const s=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,s.result$))}}function $2(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"div",21)(1,"cvc-entity-tag",22),e.NdJ("cvcOnClose",function(){const ze=e.CHM(s).$implicit,ft=e.oxw();return e.KtG(ft.onTagClose$.next(ze.nzValue))}),e.qZA()()}if(2&l){const s=g.$implicit,p=e.oxw();e.xp6(1),e.Q6J("cvcCacheId","Variant:"+s.nzValue)("cvcContext",p.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",p.props.isMultiSelect?"default":"closeable")}}function U2(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"cvc-variant-quick-add-form",23),e.NdJ("cvcOnCreate",function(w){e.CHM(s);const ze=e.oxw();return e.KtG(ze.onSelectOrCreate(w))}),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.qZA()}if(2&l){const s=g.$implicit,p=e.oxw();e.Q6J("cvcSearchString",s)("cvcGeneId",e.lcZ(1,3,p.onGeneId$))("cvcGeneName",e.lcZ(2,5,p.onGeneName$))}}const j2=function(){return[6,6]},G2=To(Lo(),Fo());let Lh=(()=>{class l extends G2{constructor(s,p,w,ze){super(),this.taq=s,this.tq=p,this.geneQuery=w,this.changeDetectorRef=ze,this.onModel$=new ot.y,this.defaultOptions={props:{label:"Variant",placeholder:"Search Variants",requireGene:!0,requireGenePlaceholderFn:ft=>`Search ${ft} Variants`,requireGenePrompt:"Select a Gene to search its Variants",isMultiSelect:!1,entityName:{singular:"Variant",plural:"Variants"},showManagerBtn:!1,minSearchStrLength:0}},this.onGeneName$=new Be.X(void 0),this.onVid$=new Qi.t,this.onShowMgrClick$=new E.x,this.showMgr$=this.onShowMgrClick$.pipe((0,wr.R)((ft,vn)=>!ft,!1))}ngAfterViewInit(){this.configureBaseField(),this.configureEntitySelectField({typeaheadQuery:this.taq,tagQuery:this.tq,getTypeaheadVarsFn:this.getTypeaheadVarsFn,getTypeaheadResultsFn:this.getTypeaheadResultsFn,getTagQueryVarsFn:this.getTagQueryVarsFn,getTagQueryResultsFn:this.getTagQueryResultsFn,getSelectedItemOptionFn:this.getSelectedItemOptionFn,getSelectOptionsFn:this.getSelectOptionsFn,changeDetectorRef:this.changeDetectorRef,selectOpen$:this.selectOpen$,selectComponent:this.selectComponent,minSearchStrLength:this.field.props.minSearchStrLength}),this.state&&this.state.formReady$?this.state.formReady$.pipe((0,yt.h)(s=>s),(0,es.q)(1),(0,zn.t)(this)).subscribe(s=>{this.configureField()}):this.configureField()}configureField(){this.configureStateConnections(),this.onVid$.pipe((0,zn.t)(this)).subscribe(),this.onVid$.next(this.formControl.value),this.onModel$=(0,Io.a)([this.onGeneId$,this.onSearch$]).pipe((0,S.U)(([s,p])=>({geneId:s,name:p}))),this.onValueChange$.pipe((0,ni.M)(this.onVid$),(0,zn.t)(this)).subscribe(([s,p])=>{Array.isArray(s)&&this.onVid$.next(s)})}configureStateConnections(){if(this.state&&this.props.requireGene){if(!this.state?.fields.geneId$)return void console.error(`${this.field.id} requireGene is set, but no geneId$ subject found on state.`);this.onGeneId$=this.state.fields.geneId$,this.onGeneId$.pipe((0,zn.t)(this)).subscribe(s=>{this.onGeneId(s)})}}getTypeaheadVarsFn(s){return{name:s,geneId:this.selectedGeneId}}getTypeaheadResultsFn(s){return s.data.variants.nodes}getTagQueryVarsFn(s){return{variantId:s}}getTagQueryResultsFn(s){return s.data.variant}getSelectedItemOptionFn(s){return{value:s.id,label:s.name}}getSelectOptionsFn(s,p){return s.map((w,ze)=>({label:p.get(ze)||w.name,value:w.id}))}showAddBehavior(s,p){const w=s.toLowerCase();return s.length>=3&&!p.some(ze=>ze.name.toLowerCase()===w)}onSelectOrCreate(s){this.onPopulate$.next(s.id),this.props.isNewlyCreatedCallback&&this.props.isNewlyCreatedCallback(s.new)}onGeneId(s){this.selectedGeneId=s,!s&&this.props.requireGene?(this.resetField(),this.props.description=this.props.requireGenePrompt,this.props.placeholder="Select a Variant",this.props.extraType="prompt",this.onGeneName$.next(void 0)):s&&(this.props.description=void 0,this.props.extraType=void 0,bs(this.geneQuery.fetch({geneId:s},{fetchPolicy:"cache-first"})).then(({data:p})=>{p?.gene?.name?(this.props.placeholder=this.props.requireGene?this.props.requireGenePlaceholderFn(p.gene.name):this.props.placeholder,this.onGeneName$.next(p.gene.name)):console.error(`${this.field.id} could not fetch gene name for Gene:${s}.`)}))}}return l.\u0275fac=function(s){return new(s||l)(e.Y36(Nn.nSb),e.Y36(Nn.dDn),e.Y36(Nn.DzV),e.Y36(e.sBO))},l.\u0275cmp=e.Xpm({type:l,selectors:[["ng-component"]],viewQuery:function(s,p){if(1&s&&e.Gf(Fh,5,e.Rgc),2&s){let w;e.iGM(w=e.CRH())&&(p.optionTemplates=w)}},features:[e.qOj],decls:20,vars:41,consts:[[3,"nzGutter"],["nzFlex","auto"],["nz-tooltip","","nzTooltipTitle","Select a Gene to enable field.",3,"nzTooltipTrigger"],[3,"cvcAddEntity","cvcAddEntityModel","cvcAddEntityBehavior","cvcMinSearchStrLength","cvcSelectMode","cvcCustomTemplate","cvcFormControl","cvcFormlyAttributes","cvcEntityName","cvcPlaceholder","cvcResults","cvcDisabled","cvcOptions","cvcSelectOpen","cvcShowError","cvcLoading","cvcParamName","cvcOnSearch","cvcOnOpenChange","cvcOnModelChange"],["nzFlex","50px",4,"ngIf"],["nzSpan","24","class","manager-drawer",4,"ngIf"],[4,"ngrxLet"],["selectedTemplate",""],["addVariant",""],["nzFlex","50px"],["type","button","nz-button","","nzBlock","",1,"manager-button",3,"click"],["nz-icon","",3,"ngClass","nzType"],["nzSpan","24",1,"manager-drawer"],[3,"cvcSelectedIds","cvcSelectedIdsChange"],[4,"ngFor","ngForOf"],["optionTemplates",""],[3,"cvcDisableLink","cvcCacheId","cvcEmphasize"],["nz-typography","","nzType","secondary"],[4,"ngIf","ngIfElse"],["noAliases",""],["nz-typography","","nzType","secondary","nz-tooltip","",3,"nzTooltipTitle","innerHtml"],[1,"ant-select-selection-item-content"],[3,"cvcCacheId","cvcContext","cvcMode","cvcOnClose"],[3,"cvcSearchString","cvcGeneId","cvcGeneName","cvcOnCreate"]],template:function(s,p){if(1&s&&(e.TgZ(0,"nz-row",0)(1,"nz-col",1)(2,"span",2),e.ALo(3,"ngrxPush"),e.TgZ(4,"cvc-entity-select",3),e.NdJ("cvcOnSearch",function(ze){return p.onSearch$.next(ze)})("cvcOnOpenChange",function(ze){return p.onOpenChange$.next(ze)})("cvcOnModelChange",function(ze){return p.props.change&&p.props.change(p.field,ze)}),e.ALo(5,"ngrxPush"),e.ALo(6,"ngrxPush"),e.ALo(7,"ngrxPush"),e.ALo(8,"ngrxPush"),e.ALo(9,"ngrxPush"),e.ALo(10,"ngrxPush"),e.ALo(11,"ngrxPush"),e.qZA()()(),e.YNc(12,R2,6,9,"nz-col",4),e.YNc(13,V2,3,3,"nz-col",5),e.ALo(14,"ngrxPush"),e.qZA(),e.YNc(15,Nh,3,3,"ng-container",6),e.YNc(16,$2,2,3,"ng-template",null,7,e.W1O),e.YNc(18,U2,3,7,"ng-template",null,8,e.W1O)),2&s){const w=e.MAs(17),ze=e.MAs(19);e.Q6J("nzGutter",e.DdM(40,j2)),e.xp6(2),e.Q6J("nzTooltipTrigger",p.props.requireGene&&!e.lcZ(3,22,p.onGeneId$)?"hover":null),e.xp6(2),e.Q6J("cvcAddEntity",ze)("cvcAddEntityModel",e.lcZ(5,24,p.onModel$))("cvcAddEntityBehavior",p.showAddBehavior)("cvcMinSearchStrLength",p.props.minSearchStrLength)("cvcSelectMode",p.props.isMultiSelect?"multiple":"default")("cvcCustomTemplate",w)("cvcFormControl",p.formControl)("cvcFormlyAttributes",p.field)("cvcEntityName",p.props.entityName)("cvcPlaceholder",p.props.placeholder)("cvcResults",e.lcZ(6,26,p.result$))("cvcDisabled",p.props.requireGene&&!e.lcZ(7,28,p.onGeneId$))("cvcOptions",e.lcZ(8,30,p.selectOption$))("cvcSelectOpen",e.lcZ(9,32,p.selectOpen$))("cvcShowError",p.showError)("cvcLoading",e.lcZ(10,34,p.isLoading$))("cvcParamName",e.lcZ(11,36,p.onGeneName$)),e.xp6(8),e.Q6J("ngIf",p.props.showManagerBtn),e.xp6(1),e.Q6J("ngIf",e.lcZ(14,38,p.showMgr$)),e.xp6(2),e.Q6J("ngrxLet",p.onSearch$)}},styles:[".typeahead-match[_ngcontent-%COMP%]{font-weight:700}.hide-dropdown[_ngcontent-%COMP%]{display:none}  nz-input-group{border-color:#d9d9d9!important}"],changeDetection:0}),l})();const qa={types:[{name:"variant-select",wrappers:["form-field"],component:Lh},{name:"variant-multi-select",wrappers:["form-field"],component:Lh,defaultOptions:{props:{label:"Variants",isMultiSelect:!0}}}]};let kh=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[a.ez,Gt,Ce.x,No,Oo.g,tt.s,sr,Tc,xr,fl,hl.M,rc.y,_.X0.forChild(qa),t.u5,_t.L,B.ic,zo.sL,L.U5,R.Jb,de.PV,A.o7,yi.Qp,Ye.LV,X.ZJ,zo.sL,Vi.vh,ye.Wr,Br.b1,L.U5,R.Jb,de.PV,A.o7,Me,Wo.$6,Qo.HQ,An.X,eo.cg,X.ZJ,t.UX]}),l})();e.B6R(Lh,function(){return[a.mk,a.sg,a.O5,sn,Qt.J,lo.eJ,zo.ix,ue.w,et.dQ,R.t3,R.SK,de.Ls,X.ZU,eo.SY,Bp,A4]},function(){return[hr.A,lo.fM]});const Q2=["optionTemplates"];function L4(l,g){if(1&l&&(e.ynx(0),e.TgZ(1,"em"),e._UZ(2,"span",8),e.ALo(3,"highlightTypeahead"),e.qZA(),e.BQk()),2&l){const s=e.oxw(2).$implicit,p=e.oxw().ngrxLet;e.xp6(2),e.Q6J("innerHtml",e.xi3(3,1,s.soid,p),e.oJD)}}function W2(l,g){if(1&l&&(e._UZ(0,"cvc-entity-tag",5),e.TgZ(1,"span",6),e.YNc(2,L4,4,4,"ng-container",7),e.qZA()),2&l){const s=e.oxw().$implicit,p=e.oxw().ngrxLet;e.Q6J("cvcDisableLink",!0)("cvcCacheId",s.__typename+":"+s.id)("cvcEmphasize",p),e.xp6(2),e.Q6J("ngIf",s.soid)}}function k4(l,g){1&l&&(e.ynx(0),e.YNc(1,W2,3,4,"ng-template",null,4,e.W1O),e.BQk())}function R4(l,g){if(1&l&&(e.ynx(0),e.YNc(1,k4,3,0,"ng-container",3),e.ALo(2,"ngrxPush"),e.BQk()),2&l){const s=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,s.result$))}}function Hp(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"div",9)(1,"cvc-entity-tag",10),e.NdJ("cvcOnClose",function(){const ze=e.CHM(s).$implicit,ft=e.oxw();return e.KtG(ft.onTagClose$.next(ze.nzValue))}),e.qZA()()}if(2&l){const s=g.$implicit,p=e.oxw();e.xp6(1),e.Q6J("cvcCacheId","VariantType:"+s.nzValue)("cvcContext",p.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",p.props.isMultiSelect?"default":"closeable")}}const Rh=To(Lo(),Fo());let Z2=(()=>{class l extends Rh{constructor(s,p,w){super(),this.taq=s,this.tq=p,this.changeDetectorRef=w,this.defaultOptions={props:{entityName:{singular:"VariantType",plural:"VariantTypes"},isMultiSelect:!1,placeholders:{default:"Search Variant Types",multiDefault:"Select VariantType(s)"},description:'Add one or more variant types from the <a href="http://www.sequenceontology.org/browser/" target="_blank">Sequence Ontology</a> (e.g., missense, loss-of-function). Be specific as possible, avoid the addition of root concepts, and use the sequence_variant tree of the sequence ontology.'}},this.placeholder$=new Be.X(this.defaultOptions.props.placeholders.default)}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEntitySelectField({typeaheadQuery:this.taq,typeaheadParam$:void 0,tagQuery:this.tq,getTypeaheadVarsFn:this.getTypeaheadVarsFn,getTypeaheadResultsFn:this.getTypeaheadResultsFn,getTagQueryVarsFn:this.getTagQueryVarsFn,getTagQueryResultsFn:this.getTagQueryResultsFn,getSelectedItemOptionFn:this.getSelectedItemOptionFn,getSelectOptionsFn:this.getSelectOptionsFn,changeDetectorRef:this.changeDetectorRef,selectOpen$:this.selectOpen$,selectComponent:this.selectComponent}),this.configurePlaceholders()}configureStateConnections(){}configurePlaceholders(){}getTypeaheadVarsFn(s){return{name:s}}getTypeaheadResultsFn(s){return s.data.variantTypeTypeahead}getTagQueryVarsFn(s){return{id:s}}getTagQueryResultsFn(s){return s.data.variantType}getSelectedItemOptionFn(s){return{value:s.id,label:s.name}}getSelectOptionsFn(s,p){return s.map((w,ze)=>({label:p.get(ze)||w.name,value:w.id}))}}return l.\u0275fac=function(s){return new(s||l)(e.Y36(Nn.jmY),e.Y36(Nn._nE),e.Y36(e.sBO))},l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-variant-type-select"]],viewQuery:function(s,p){if(1&s&&e.Gf(Q2,5,e.Rgc),2&s){let w;e.iGM(w=e.CRH())&&(p.optionTemplates=w)}},features:[e.qOj],decls:8,vars:19,consts:[[3,"cvcSelectMode","cvcCustomTemplate","cvcFormControl","cvcFormlyAttributes","cvcEntityName","cvcPlaceholder","cvcResults","cvcOptions","cvcShowError","cvcLoading","cvcOnSearch","cvcOnOpenChange","cvcOnModelChange"],[4,"ngrxLet"],["selectedTemplate",""],[4,"ngFor","ngForOf"],["optionTemplates",""],[3,"cvcDisableLink","cvcCacheId","cvcEmphasize"],["nz-typography","","nzType","secondary"],[4,"ngIf"],["nz-typography","","nzType","secondary",3,"innerHtml"],[1,"ant-select-selection-item-content"],[3,"cvcCacheId","cvcContext","cvcMode","cvcOnClose"]],template:function(s,p){if(1&s&&(e.TgZ(0,"cvc-entity-select",0),e.NdJ("cvcOnSearch",function(ze){return p.onSearch$.next(ze)})("cvcOnOpenChange",function(ze){return p.onOpenChange$.next(ze)})("cvcOnModelChange",function(ze){return p.props.change&&p.props.change(p.field,ze)}),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.ALo(3,"ngrxPush"),e.ALo(4,"ngrxPush"),e.qZA(),e.YNc(5,R4,3,3,"ng-container",1),e.YNc(6,Hp,2,3,"ng-template",null,2,e.W1O)),2&s){const w=e.MAs(7);e.Q6J("cvcSelectMode",p.props.isMultiSelect?"multiple":"default")("cvcCustomTemplate",w)("cvcFormControl",p.formControl)("cvcFormlyAttributes",p.field)("cvcEntityName",p.props.entityName)("cvcPlaceholder",e.lcZ(1,11,p.placeholder$))("cvcResults",e.lcZ(2,13,p.result$))("cvcOptions",e.lcZ(3,15,p.selectOption$))("cvcShowError",p.showError)("cvcLoading",e.lcZ(4,17,p.isLoading$)),e.xp6(5),e.Q6J("ngrxLet",p.onSearch$)}},dependencies:[a.sg,a.O5,lo.eJ,X.ZU,sn,Qt.J,lo.fM,hr.A],changeDetection:0}),l})();const V4={types:[{name:"variant-type-select",wrappers:["form-field"],component:Z2,defaultOptions:{props:{label:"Variant Type"}}},{name:"variant-type-multi-select",wrappers:["form-field"],component:Z2,defaultOptions:{props:{isMultiSelect:!0,label:"Variant Types"}}}]};let B4=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[a.ez,t.UX,_.X0.forChild(V4),_t.L,zo.sL,Ye.LV,Wo.$6,yi.Qp,de.PV,A.o7,R.Jb,eo.cg,Re.zf,L.U5,B.ic,X.ZJ,An.X,No,Gt,tt.s,Ce.x]}),l})(),H4=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[a.ez,yo,Hi,Rt,Bn,Yi,ve,Ai,qr,zr,nc,Ur,Uo,Kc,r1,La,mu,yu,E1,va,W1,yp,Tp,Ds,ed,Dp,Op,sd,xn,Ji,qu,kh,B4]}),l})();var o1;function Vh(l,g){if(1&l&&e._uU(0),2&l){const s=e.oxw();e.hij(" ",s.props.addFormTitle,"\n")}}const Uc=function(){return[6,6]};let Bh=((o1=class extends _.n2{constructor(){super(),this.contentTemplate$=new Qi.t}ngAfterViewInit(){this.field.props&&this.field.props.addFormContent?this.contentTemplate$.next(this.field.props.addFormContent):console.error(`${this.field.id} add-entity-form wrapper failed to find parent field's props.addFormContent TemplateRef.`)}}).\u0275fac=function(g){return new(g||o1)},o1.\u0275cmp=e.Xpm({type:o1,selectors:[["cvc-add-entity-form-wrapper"]],features:[e.qOj],decls:10,vars:7,consts:[[3,"nzGutter"],["nzFlex","auto"],["fieldComponent",""],["nzFlex","20px"],["type","button","nz-button","","nzType","primary","nzSize","default","nzShape","circle","nz-popover","",3,"disabled","nzPopoverTitle","nzPopoverContent"],["nz-icon","","nzType","plus-circle","nzTheme","outline"],["titleTemplate",""]],template:function(g,s){if(1&g&&(e.TgZ(0,"nz-row",0)(1,"nz-col",1),e.GkF(2,null,2),e.qZA(),e.TgZ(4,"nz-col",3)(5,"button",4),e.ALo(6,"ngrxPush"),e._UZ(7,"span",5),e.qZA()()(),e.YNc(8,Vh,1,1,"ng-template",null,6,e.W1O)),2&g){const p=e.MAs(9);e.Q6J("nzGutter",e.DdM(6,Uc)),e.xp6(5),e.Q6J("disabled",null==s.field.props?null:s.field.props.disabled)("nzPopoverTitle",p)("nzPopoverContent",e.lcZ(6,4,s.contentTemplate$))}},dependencies:[zo.ix,ue.w,et.dQ,Wo.lU,de.Ls,R.t3,R.SK,lo.fM],styles:[".add-button[_ngcontent-%COMP%]{font-size:24px;color:#cfcfdf}"],changeDetection:0}),o1);Bh=(0,U.gn)([(0,zn.c)()],Bh);const K2={wrappers:[{name:"add-entity-form",component:Bh}]};let Hh=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[a.ez,_.X0.forChild(K2),zo.sL,Wo.$6,de.PV,R.Jb]}),l})();function J2(l,g){1&l&&e._UZ(0,"formly-field",2),2&l&&e.Q6J("field",g.$implicit)}const q2={size:"default"},I0={wrappers:[{name:"form-card",component:(()=>{class l extends _.n2{get errorState(){return this.showError?"error":""}constructor(){super(),this.wrapperOptions={...q2}}ngOnInit(){this.props.formCardOptions&&(this.wrapperOptions={...this.wrapperOptions,...this.props.formCardOptions})}}return l.\u0275fac=function(s){return new(s||l)},l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-form-card"]],features:[e.qOj],decls:2,vars:3,consts:[[3,"nzTitle","nzSize"],[3,"field",4,"ngFor","ngForOf"],[3,"field"]],template:function(s,p){if(1&s&&(e.TgZ(0,"nz-card",0),e.YNc(1,J2,1,1,"formly-field",1),e.qZA()),2&s){let w;e.Q6J("nzTitle",p.wrapperOptions.title)("nzSize",null!==(w=p.wrapperOptions.size)&&void 0!==w?w:"default"),e.xp6(1),e.Q6J("ngForOf",p.field.fieldGroup)}},dependencies:[a.sg,_.cw,Vi.bd]}),l})()}]};let Y4=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[a.ez,t.u5,_.X0.forChild(I0),R.Jb,Vi.vh,ye.Wr]}),l})();const op={wrappers:[{name:"form-footer",component:(()=>{class l extends _.n2{ngOnInit(){}}return l.\u0275fac=function(){let g;return function(p){return(g||(g=e.n5z(l)))(p||l)}}(),l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-form-footer"]],features:[e.qOj],decls:4,vars:0,consts:[[1,"form-footer"],["nzSpan","24",1,"submit-col"],["fieldComponent",""]],template:function(s,p){1&s&&(e.TgZ(0,"nz-row",0)(1,"nz-col",1),e.GkF(2,null,2),e.qZA()())},dependencies:[R.t3,R.SK],styles:[".form-footer[_ngcontent-%COMP%]{margin-top:1em;border-radius:8px;background-color:#f0f0f0;padding:1em}.submit-col[_ngcontent-%COMP%]{text-align:right}"],changeDetection:0}),l})()}]};let Yp=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[a.ez,R.Jb,_.X0.forChild(op)]}),l})();var F0=c(9333),$h=c(8125),ip=c(9382);let $4=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[a.ez,de.PV,R.Jb,Vi.vh,ip.we,$h.q6,Ki.Ph,An.X,X.ZJ,_e.s]}),l})(),X2=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[a.ez,zo.sL,Ld.Rt,Br.b1]}),l})();var ef=c(553);const U4={VALID:"success",INVALID:"error",PENDING:"processing",DISABLED:"default"};let Uh=(()=>{class l{constructor(){this.tagColor="default"}set cvcFormControlStatus(s){this._status=s,this.tagColor=s?U4[s]:"default"}get cvcFormControlStatus(){return this._status}}return l.\u0275fac=function(s){return new(s||l)},l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-form-status-tag"]],inputs:{cvcFormControlStatus:"cvcFormControlStatus"},decls:3,vars:4,consts:[[3,"nzColor"]],template:function(s,p){1&s&&(e.TgZ(0,"nz-tag",0),e._uU(1),e.ALo(2,"lowercase"),e.qZA()),2&s&&(e.Q6J("nzColor",p.tagColor),e.xp6(1),e.hij(" ",p.cvcFormControlStatus?e.lcZ(2,2,p.cvcFormControlStatus):"UNKNOWN","\n"))},dependencies:[An.j,a.i8]}),l})();function rp(l,g){if(1&l&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&l){const s=e.oxw(2).ctrl;e.xp6(1),e.hij(" ",s.value," ")}}function tf(l,g){1&l&&(e.TgZ(0,"span",8),e._uU(1," undefined "),e.qZA())}function j4(l,g){if(1&l&&(e.TgZ(0,"nz-list-item")(1,"nz-list-item-meta")(2,"nz-list-item-meta-title"),e._uU(3),e.qZA(),e.TgZ(4,"nz-list-item-meta-description"),e.YNc(5,rp,2,1,"span",5),e.YNc(6,tf,2,0,"span",6),e.qZA()(),e.TgZ(7,"nz-list-item-extra"),e._UZ(8,"cvc-form-status-tag",7),e.qZA()()),2&l){const s=e.oxw(),p=s.key,w=s.ctrl;e.xp6(3),e.hij(" ",p," "),e.xp6(2),e.Q6J("ngIf",w.value),e.xp6(1),e.Q6J("ngIf",!w.value),e.xp6(2),e.Q6J("cvcFormControlStatus",w.status)}}function G4(l,g){}const Q4=function(l,g){return{key:l,ctrl:g}};function nf(l,g){if(1&l&&e.YNc(0,G4,0,0,"ng-template",12),2&l){const s=g.$implicit;e.oxw(3);const p=e.MAs(3);e.Q6J("ngTemplateOutlet",p)("ngTemplateOutletContext",e.WLB(2,Q4,s.key,s.value))}}function sp(l,g){if(1&l&&(e.TgZ(0,"strong"),e._uU(1),e.qZA()),2&l){const s=e.oxw(2).key;e.xp6(1),e.Oqu(s)}}function rf(l,g){if(1&l&&(e.TgZ(0,"nz-list-item")(1,"nz-card",9)(2,"nz-list",10),e.YNc(3,nf,1,5,null,4),e.ALo(4,"keyvalue"),e.qZA()(),e.YNc(5,sp,2,1,"ng-template",null,11,e.W1O),e.qZA()),2&l){const s=e.oxw(),p=s.key,w=s.ctrl;e.xp6(1),e.Q6J("nzTitle",p),e.xp6(2),e.Q6J("ngForOf",e.lcZ(4,2,w.controls))}}function N0(l,g){if(1&l&&(e.YNc(0,j4,9,4,"nz-list-item",5),e.YNc(1,rf,7,4,"nz-list-item",5)),2&l){const s=g.ctrl;e.Q6J("ngIf",!s.controls),e.xp6(1),e.Q6J("ngIf",s.controls)}}function sf(l,g){}function af(l,g){if(1&l&&e.YNc(0,sf,0,0,"ng-template",12),2&l){const s=g.$implicit;e.oxw();const p=e.MAs(3);e.Q6J("ngTemplateOutlet",p)("ngTemplateOutletContext",e.WLB(2,Q4,s.key,s.value))}}function cf(l,g){if(1&l&&(e.ynx(0),e.TgZ(1,"nz-list",2),e.YNc(2,N0,2,2,"ng-template",null,3,e.W1O),e.qZA(),e.YNc(4,af,1,5,null,4),e.ALo(5,"keyvalue"),e.BQk()),2&l){const s=g.ngIf;e.xp6(4),e.Q6J("ngForOf",e.lcZ(5,1,s.controls))}}function lf(l,g){1&l&&e._uU(0," No AbstractFormControl provided. ")}let uf=(()=>{class l{set cvcAbstractControl(s){if(!s)throw new Error("cvc-form-debug-field-list requires valid cvcFormControl Input.");this._cvcFormControl=s,this.formControl=s}get cvcFormControl(){return this._cvcFormControl}constructor(){}ngOnInit(){}}return l.\u0275fac=function(s){return new(s||l)},l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-form-debug-field-list"]],inputs:{cvcAbstractControl:"cvcAbstractControl"},decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["noFormControl",""],["nzSize","small"],["ctrlTemplateRef",""],[4,"ngFor","ngForOf"],[4,"ngIf"],["style","padding: 0px 4px; color: white; background-color: #ccc",4,"ngIf"],[3,"cvcFormControlStatus"],[2,"padding","0px 4px","color","white","background-color","#ccc"],["nzSize","small",2,"width","100%",3,"nzTitle"],["nzSize","small",2,"padding","0"],["cardExtra",""],[3,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(s,p){if(1&s&&(e.YNc(0,cf,6,3,"ng-container",0),e.YNc(1,lf,1,0,"ng-template",null,1,e.W1O)),2&s){const w=e.MAs(2);e.Q6J("ngIf",p.formControl)("ngIfElse",w)}},dependencies:[a.sg,a.O5,a.tP,Vi.bd,Ki.n_,Ki.AA,Ki.yi,Ki.IO,Ki.Pb,Ki.yw,Uh,a.Nd],styles:["[_nghost-%COMP%]     nz-card .ant-card-body{padding:6px 0}"]}),l})();var md;function df(l,g){if(1&l&&(e.ynx(0),e._UZ(1,"ngx-json-viewer",9),e.BQk()),2&l){const s=e.oxw();e.xp6(1),e.Q6J("json",s.watchModel)}}function W4(l,g){if(1&l&&(e.ynx(0),e.TgZ(1,"nz-descriptions",10)(2,"nz-descriptions-item",11),e._UZ(3,"cvc-form-status-tag",12),e.qZA(),e.TgZ(4,"nz-descriptions-item",13),e._uU(5),e.qZA(),e.TgZ(6,"nz-descriptions-item",14),e._uU(7),e.qZA(),e.TgZ(8,"nz-descriptions-item",15),e._uU(9),e.qZA(),e.TgZ(10,"nz-descriptions-item",16),e._uU(11),e.qZA(),e.TgZ(12,"nz-descriptions-item",17),e._uU(13),e.qZA()(),e.BQk()),2&l){const s=e.oxw();e.xp6(1),e.Q6J("nzColumn",1),e.xp6(2),e.Q6J("cvcFormControlStatus",null==s.cvcForm?null:s.cvcForm.status),e.xp6(2),e.hij(" ",null==s.cvcForm?null:s.cvcForm.pending," "),e.xp6(2),e.hij(" ",null==s.cvcForm?null:s.cvcForm.touched," "),e.xp6(2),e.hij(" ",null==s.cvcForm?null:s.cvcForm.valid," "),e.xp6(2),e.hij(" ",null==s.cvcForm?null:s.cvcForm.dirty," "),e.xp6(2),e.hij(" ",null==s.cvcForm?null:s.cvcForm.enabled," ")}}function jh(l,g){if(1&l&&(e.ynx(0),e._UZ(1,"cvc-form-debug-field-list",18),e.BQk()),2&l){const s=e.oxw();e.xp6(1),e.Q6J("cvcAbstractControl",s.cvcForm)}}function pf(l,g){1&l&&(e.ynx(0),e._uU(1," State Content "),e.BQk())}function $p(l,g){if(1&l&&(e.TgZ(0,"nz-row")(1,"nz-col",19),e._uU(2," Form Details "),e.qZA(),e.TgZ(3,"nz-col",20),e._UZ(4,"cvc-form-status-tag",12),e.qZA()()),2&l){const s=e.oxw();e.xp6(4),e.Q6J("cvcFormControlStatus",null==s.cvcForm?null:s.cvcForm.status)}}let Gh=((md=class{constructor(g){this.cdr=g,this.selectedIndex=0}ngOnInit(){if(!this.cvcForm)throw new Error("cvc-form-debug requires valid cvcForm Input.");this.valueChange$=new Be.X(this.cvcForm.value),this.statusChange$=new Be.X(this.cvcForm.status),this.formChange$=di([this.statusChange$,this.valueChange$]),this.watchModel=this.cvcModel,this.subscriptions=[this.cvcForm.valueChanges.subscribe(g=>{this.watchModel={...this.cvcModel},this.valueChange$.next(g)}),this.cvcForm.statusChanges.subscribe(g=>{this.statusChange$.next(g)}),this.formChange$.subscribe(g=>{this.cdr.detectChanges()})]}}).\u0275fac=function(g){return new(g||md)(e.Y36(e.sBO))},md.\u0275cmp=e.Xpm({type:md,selectors:[["cvc-form-debug"]],inputs:{cvcForm:"cvcForm",cvcModel:"cvcModel"},decls:14,vars:7,consts:[["nzSize","small","nzBordered","true",3,"nzTitle"],["nzSize","small",3,"nzSelectedIndex","nzSelectedIndexChange"],["nzTitle","Model"],["nzTitle","Controls"],["nzTitle","State"],["nzTitle","Form Status"],[3,"ngSwitch"],[4,"ngSwitchCase"],["cardTitle",""],[3,"json"],["nzBordered","","nzSize","small",3,"nzColumn"],["nzTitle","status"],[3,"cvcFormControlStatus"],["nzTitle","pending"],["nzTitle","touched"],["nzTitle","valid"],["nzTitle","dirty"],["nzTitle","enabled"],[3,"cvcAbstractControl"],["nzFlex","2"],["nzFlex","3",1,"form-status-col"]],template:function(g,s){if(1&g&&(e.TgZ(0,"nz-card",0)(1,"nz-card-tab")(2,"nz-tabset",1),e.NdJ("nzSelectedIndexChange",function(w){return s.selectedIndex=w}),e._UZ(3,"nz-tab",2)(4,"nz-tab",3)(5,"nz-tab",4)(6,"nz-tab",5),e.qZA()(),e.ynx(7,6),e.YNc(8,df,2,1,"ng-container",7),e.YNc(9,W4,14,7,"ng-container",7),e.YNc(10,jh,2,1,"ng-container",7),e.YNc(11,pf,2,0,"ng-container",7),e.BQk(),e.qZA(),e.YNc(12,$p,5,1,"ng-template",null,8,e.W1O)),2&g){const p=e.MAs(13);e.Q6J("nzTitle",p),e.xp6(2),e.Q6J("nzSelectedIndex",s.selectedIndex),e.xp6(5),e.Q6J("ngSwitch",s.selectedIndex),e.xp6(1),e.Q6J("ngSwitchCase",0),e.xp6(1),e.Q6J("ngSwitchCase",3),e.xp6(1),e.Q6J("ngSwitchCase",1),e.xp6(1),e.Q6J("ngSwitchCase",2)}},dependencies:[a.RF,a.n9,R.t3,R.SK,Vi.bd,Vi._i,ip.xH,ip.xw,$h.R7,$h.uj,_e.Y,uf,Uh],styles:["[_nghost-%COMP%]{display:block}.form-status-col[_ngcontent-%COMP%]{text-align:right}.form-status-col[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]:last-child{margin-right:0}"],changeDetection:0}),md);var gd;function hf(l,g){if(1&l&&(e.TgZ(0,"nz-col",4),e._UZ(1,"cvc-form-debug",5),e.qZA()),2&l){const s=e.oxw();e.Q6J("nzSpan",8),e.xp6(1),e.Q6J("cvcForm",s.form)("cvcModel",s.model)}}Gh=(0,U.gn)([(0,zn.c)({arrayName:"subscriptions"})],Gh);const ff=function(){return[8,8]};let Qh=((gd=class extends _.n2{constructor(){super()}get errorState(){return this.showError?"error":""}ngOnInit(){this.props.showDevPanel=!ef.N.production&&(this.props.showDevPanel||false)}}).\u0275fac=function(g){return new(g||gd)},gd.\u0275cmp=e.Xpm({type:gd,selectors:[["cvc-form-layout-wrapper"]],features:[e.qOj],decls:5,vars:4,consts:[[3,"nzGutter"],[1,"form-col",3,"nzSpan"],["fieldComponent",""],["class","status-col",3,"nzSpan",4,"ngIf"],[1,"status-col",3,"nzSpan"],[3,"cvcForm","cvcModel"]],template:function(g,s){1&g&&(e.TgZ(0,"nz-row",0)(1,"nz-col",1),e.GkF(2,null,2),e.qZA(),e.YNc(4,hf,2,3,"nz-col",3),e.qZA()),2&g&&(e.Q6J("nzGutter",e.DdM(3,ff)),e.xp6(1),e.Q6J("nzSpan",s.props.showDevPanel?16:24),e.xp6(3),e.Q6J("ngIf",s.props.showDevPanel))},dependencies:[a.O5,R.t3,R.SK,Gh],changeDetection:0}),gd);Qh=(0,U.gn)([(0,zn.c)({arrayName:"subscriptions"})],Qh);const gf={wrappers:[{name:"form-layout",component:Qh}]};let Z4=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[a.ez,_.X0.forChild(gf),zo.sL,Vi.vh,de.PV,An.X,ip.we,Wo.$6,Ki.Ph,R.Jb,F0.h,X2,$4,_e.s]}),l})();function K4(l,g){if(1&l&&(e.TgZ(0,"nz-col",4),e._UZ(1,"formly-field",5),e.qZA()),2&l){const s=g.$implicit,p=e.oxw(2);let w;e.Q6J("nzSpan",null!==(w=p.wrapperOptions.span)&&void 0!==w?w:null),e.xp6(1),e.Q6J("field",s)}}function vf(l,g){if(1&l&&e.YNc(0,K4,2,2,"nz-col",3),2&l){const s=e.oxw();e.Q6J("ngForOf",s.field.fieldGroup)}}function L0(l,g){if(1&l&&(e.TgZ(0,"nz-col",8),e._UZ(1,"formly-field",5),e.qZA()),2&l){const s=g.$implicit,p=e.oxw(3);e.Q6J("nzFlex",p.wrapperOptions.flex),e.xp6(1),e.Q6J("field",s)}}function J4(l,g){if(1&l&&(e.ynx(0),e.YNc(1,L0,2,2,"nz-col",7),e.BQk()),2&l){const s=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",s.field.fieldGroup)}}function q4(l,g){if(1&l&&(e.TgZ(0,"nz-col",10),e._UZ(1,"formly-field",5),e.qZA()),2&l){const s=g.$implicit,p=e.oxw(3);let w,ze,ft,vn,Sn,Co;e.Q6J("nzXs",null!==(w=p.wrapperOptions.responsive.xs)&&void 0!==w?w:null)("nzSm",null!==(ze=p.wrapperOptions.responsive.sm)&&void 0!==ze?ze:null)("nzMd",null!==(ft=p.wrapperOptions.responsive.md)&&void 0!==ft?ft:null)("nzLg",null!==(vn=p.wrapperOptions.responsive.lg)&&void 0!==vn?vn:null)("nzXl",null!==(Sn=p.wrapperOptions.responsive.xl)&&void 0!==Sn?Sn:null)("nzXXl",null!==(Co=p.wrapperOptions.responsive.xxl)&&void 0!==Co?Co:null),e.xp6(1),e.Q6J("field",s)}}function k0(l,g){if(1&l&&(e.ynx(0),e.YNc(1,q4,2,7,"nz-col",9),e.BQk()),2&l){const s=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",s.field.fieldGroup)}}function Up(l,g){if(1&l&&(e.TgZ(0,"nz-col",4),e._UZ(1,"formly-field",5),e.qZA()),2&l){const s=g.$implicit,p=g.index,w=e.oxw(3);e.Q6J("nzSpan",w.wrapperOptions.spanIndexed[p]),e.xp6(1),e.Q6J("field",s)}}function _f(l,g){if(1&l&&(e.ynx(0),e.YNc(1,Up,2,2,"nz-col",3),e.BQk()),2&l){const s=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",s.field.fieldGroup)}}function yf(l,g){if(1&l&&(e.TgZ(0,"nz-col",10),e._UZ(1,"formly-field",5),e.qZA()),2&l){const s=g.$implicit,p=g.index,w=e.oxw(3);let ze,ft,vn,Sn,Co,mi;e.Q6J("nzXs",null!==(ze=w.wrapperOptions.responsiveIndexed[p].xs)&&void 0!==ze?ze:null)("nzSm",null!==(ft=w.wrapperOptions.responsiveIndexed[p].sm)&&void 0!==ft?ft:null)("nzMd",null!==(vn=w.wrapperOptions.responsiveIndexed[p].md)&&void 0!==vn?vn:null)("nzLg",null!==(Sn=w.wrapperOptions.responsiveIndexed[p].lg)&&void 0!==Sn?Sn:null)("nzXl",null!==(Co=w.wrapperOptions.responsiveIndexed[p].xl)&&void 0!==Co?Co:null)("nzXXl",null!==(mi=w.wrapperOptions.responsiveIndexed[p].xxl)&&void 0!==mi?mi:null),e.xp6(1),e.Q6J("field",s)}}function Wh(l,g){if(1&l&&(e.ynx(0),e.YNc(1,yf,2,7,"nz-col",9),e.BQk()),2&l){const s=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",s.field.fieldGroup)}}function Cf(l,g){if(1&l&&(e.TgZ(0,"nz-col",8),e._UZ(1,"formly-field",5),e.qZA()),2&l){const s=g.$implicit,p=g.index,w=e.oxw(3);e.Q6J("nzFlex",w.wrapperOptions.flexIndexed[p]),e.xp6(1),e.Q6J("field",s)}}function Xa(l,g){if(1&l&&(e.ynx(0),e.YNc(1,Cf,2,2,"nz-col",7),e.BQk()),2&l){const s=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",s.field.fieldGroup)}}function ap(l,g){if(1&l&&(e.ynx(0),e.YNc(1,J4,2,1,"ng-container",6),e.YNc(2,k0,2,1,"ng-container",6),e.YNc(3,_f,2,1,"ng-container",6),e.YNc(4,Wh,2,1,"ng-container",6),e.YNc(5,Xa,2,1,"ng-container",6),e.BQk()),2&l){const s=e.oxw();e.xp6(1),e.Q6J("ngIf",s.wrapperOptions.flex),e.xp6(1),e.Q6J("ngIf",s.wrapperOptions.responsive),e.xp6(1),e.Q6J("ngIf",s.wrapperOptions.spanIndexed),e.xp6(1),e.Q6J("ngIf",s.wrapperOptions.responsiveIndexed),e.xp6(1),e.Q6J("ngIf",s.wrapperOptions.flexIndexed)}}const Kr={gutter:[8,8],span:24},jp={wrappers:[{name:"form-row",component:(()=>{class l extends _.n2{constructor(){super(),this.wrapperOptions={...Kr},this.topMargin="0"}ngOnInit(){this.props.formRowOptions&&(this.wrapperOptions={...this.wrapperOptions,...this.props.formRowOptions}),this.topMargin=Array.isArray(this.wrapperOptions.gutter)?this.wrapperOptions.gutter[1]>0?this.wrapperOptions.gutter[1]/2+"px":"0":this.wrapperOptions.gutter&&this.wrapperOptions.gutter>0?this.wrapperOptions.gutter+"px":"0"}}return l.\u0275fac=function(s){return new(s||l)},l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-form-row"]],features:[e.qOj],decls:5,vars:4,consts:[[1,"form-row-wrapped",3,"nzGutter"],["defaultCol",""],[4,"ngIf","ngIfElse"],[3,"nzSpan",4,"ngFor","ngForOf"],[3,"nzSpan"],[3,"field"],[4,"ngIf"],[3,"nzFlex",4,"ngFor","ngForOf"],[3,"nzFlex"],[3,"nzXs","nzSm","nzMd","nzLg","nzXl","nzXXl",4,"ngFor","ngForOf"],[3,"nzXs","nzSm","nzMd","nzLg","nzXl","nzXXl"]],template:function(s,p){if(1&s&&(e.TgZ(0,"div")(1,"nz-row",0),e.YNc(2,vf,1,1,"ng-template",null,1,e.W1O),e.YNc(4,ap,6,5,"ng-container",2),e.qZA()()),2&s){const w=e.MAs(3);let ze;e.uIk("style","margin-top: "+p.topMargin,e.Ckj),e.xp6(1),e.Q6J("nzGutter",null!==(ze=p.wrapperOptions.gutter)&&void 0!==ze?ze:null),e.xp6(3),e.Q6J("ngIf",p.wrapperOptions.flex||p.wrapperOptions.flexIndexed||p.wrapperOptions.spanIndexed||p.wrapperOptions.responsive||p.wrapperOptions.responsiveIndexed)("ngIfElse",w)}},dependencies:[a.sg,a.O5,R.t3,R.SK,_.cw],changeDetection:0}),l})()}]};let Zs=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[a.ez,t.UX,L.U5,R.Jb,_.X0.forChild(jp)]}),l})(),Gp=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[a.ez,Z4,Y4,Yp,No,Zs,Hh]}),l})(),_d=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({providers:[{provide:_.l7,multi:!0,useFactory:kt,deps:[i.gz]}],imports:[_.X0.forRoot(at),t.UX,L.U5,ae,Gp,_e.s,t.UX,_.X0,ae,L.U5,Gp,H4]}),l})()},1022:(Et,be,c)=>{function t(P){let M={value:void 0,unset:void 0};return P&&P.trim().length>0?M.value=P.trim():M.unset=!0,M}function i(P){let M={value:void 0,unset:void 0};return void 0!==P?M.value=P:M.unset=!0,M}c.d(be,{aP:()=>j,li:()=>_,uP:()=>i,xt:()=>t});var _=(()=>((_=_||{})[_.NotApplicable=0]="NotApplicable",_[_.NoneFound=1]="NoneFound",_[_.Found=2]="Found",_))();const j=[{value:void 0,label:""},{value:"1",label:"1"},{value:"2",label:"2"},{value:"3",label:"3"},{value:"4",label:"4"},{value:"5",label:"5"},{value:"6",label:"6"},{value:"7",label:"7"},{value:"8",label:"8"},{value:"9",label:"9"},{value:"10",label:"10"},{value:"11",label:"11"},{value:"12",label:"12"},{value:"13",label:"13"},{value:"14",label:"14"},{value:"15",label:"15"},{value:"16",label:"16"},{value:"17",label:"17"},{value:"18",label:"18"},{value:"19",label:"19"},{value:"20",label:"20"},{value:"21",label:"21"},{value:"22",label:"22"},{value:"X",label:"X"},{value:"Y",label:"Y"},{value:"MT",label:"MT"}]},313:(Et,be,c)=>{c.d(be,{A4J:()=>Xs,A94:()=>Cl,AIY:()=>yc,AMF:()=>xc,AO2:()=>E,B0s:()=>ee,B97:()=>kr,BQZ:()=>I,BTF:()=>ci,BYO:()=>hu,Bk6:()=>Du,Bo4:()=>$a,Cp0:()=>K,D9L:()=>eu,Del:()=>Zr,DkJ:()=>Sa,DzV:()=>ks,E1C:()=>Wr,E2B:()=>Ys,E8d:()=>M,EFm:()=>C1,EH_:()=>v1,EwB:()=>ce,F3s:()=>rt,F4e:()=>Ir,FB1:()=>zt,FJi:()=>$t,FNv:()=>Se,FOU:()=>c1,Fvz:()=>re,GYx:()=>lc,Gbq:()=>Yo,Gnp:()=>lr,HUC:()=>wn,Hmr:()=>oa,HwR:()=>ca,IP1:()=>nn,IRu:()=>je,IZ6:()=>Mn,JDX:()=>xt,Kk:()=>W,Kmw:()=>Br,L5n:()=>hr,L8L:()=>ei,LHC:()=>Mc,LLl:()=>Rs,LiH:()=>xl,Lr0:()=>js,MCG:()=>da,MNv:()=>x1,MPi:()=>sa,MYm:()=>ta,Mgx:()=>F,MsG:()=>he,N$2:()=>bd,NQC:()=>tn,O2u:()=>su,OHm:()=>zr,OIL:()=>ue,OfU:()=>A,P_b:()=>ir,Pm:()=>$r,QVn:()=>m1,Q_P:()=>cs,Qtd:()=>I1,Qzn:()=>as,R8F:()=>sl,R8w:()=>O,RTy:()=>N,RYL:()=>au,Rdc:()=>r1,S8C:()=>nl,SAN:()=>co,SrV:()=>un,Sx0:()=>Te,T1I:()=>hc,TJt:()=>wa,TNk:()=>w1,TbJ:()=>rn,Tg0:()=>Ml,TiL:()=>Ot,Tq1:()=>Bn,Tt7:()=>sr,UIR:()=>cr,UWf:()=>gi,VGG:()=>Ti,VZq:()=>Rr,Vj7:()=>tl,WFw:()=>Ia,WGV:()=>Eu,WOS:()=>Ha,WRV:()=>ne,X5f:()=>Xr,XQi:()=>mu,Xft:()=>tu,YMi:()=>mo,Y_K:()=>fu,Ybm:()=>Wi,ZBX:()=>To,ZYZ:()=>ys,Zo2:()=>_s,_3P:()=>L,_Wm:()=>P,_jb:()=>$i,_nE:()=>yl,aC3:()=>ml,aw3:()=>Ts,bgg:()=>br,c$m:()=>Zl,cCu:()=>pa,cEv:()=>Vr,cIw:()=>bc,cMj:()=>Tl,ce2:()=>oi,czh:()=>Ui,d4o:()=>lt,dDn:()=>vu,dGO:()=>cl,da2:()=>fr,db2:()=>Sl,eDl:()=>il,eY8:()=>Er,ejK:()=>zl,enw:()=>rr,fow:()=>ke,fwG:()=>Go,g0X:()=>wu,ghc:()=>Yr,h01:()=>U,hVB:()=>Pu,h_J:()=>dc,huM:()=>He,i44:()=>mn,iGM:()=>wr,iJT:()=>Gs,iST:()=>Ae,io:()=>Cr,iwm:()=>_,j28:()=>jn,jMx:()=>xd,jmY:()=>_u,jw9:()=>$e,k7O:()=>Vt,kQf:()=>vs,kQl:()=>gt,kqt:()=>S,l$X:()=>Gl,l4w:()=>Jo,lYz:()=>wt,lcA:()=>Ea,ld2:()=>qr,m$d:()=>Ed,m55:()=>V,mII:()=>sc,mdl:()=>a,mki:()=>ua,mpB:()=>Zt,nSb:()=>T1,nnL:()=>d1,o71:()=>jt,oRL:()=>Q,olA:()=>y1,otH:()=>xr,pHu:()=>Tu,pP7:()=>ie,pR8:()=>is,q1D:()=>Dd,q2A:()=>vc,q8c:()=>Ai,q9q:()=>Js,qf4:()=>jl,qgP:()=>Tc,rJ8:()=>Cn,rZD:()=>Xt,rzy:()=>Ee,s4d:()=>Aa,sA8:()=>zc,sBY:()=>O1,sLD:()=>El,sfv:()=>b,sjj:()=>Sc,tI$:()=>yr,tI1:()=>G,tJ6:()=>Da,tWC:()=>mc,td:()=>Ci,ti:()=>Zc,tji:()=>Bs,tw_:()=>Gr,u4i:()=>R,uBv:()=>j,ubO:()=>Ol,vMt:()=>ac,vjc:()=>ll,vv6:()=>ra,vxe:()=>ql,vz2:()=>Uo,wJ2:()=>H,wRZ:()=>ut,wbP:()=>io,wg3:()=>Ec,wkr:()=>yn,wpb:()=>Ne,xlL:()=>Ft,y1h:()=>me,yic:()=>Ln,yqR:()=>ar,z8D:()=>zu,zOE:()=>du,z_7:()=>pl,zpu:()=>z1,zwS:()=>Or});var t=c(9111),i=c(5879),_=(()=>((_=_||{}).Na="NA",_.TierIii="TIER_III",_.TierIiLevelC="TIER_II_LEVEL_C",_.TierIiLevelD="TIER_II_LEVEL_D",_.TierIv="TIER_IV",_.TierILevelA="TIER_I_LEVEL_A",_.TierILevelB="TIER_I_LEVEL_B",_))(),a=(()=>((a=a||{}).DoesNotSupport="DOES_NOT_SUPPORT",a.Supports="SUPPORTS",a))(),L=(()=>((L=L||{}).AdverseResponse="ADVERSE_RESPONSE",L.Benign="BENIGN",L.BetterOutcome="BETTER_OUTCOME",L.LikelyBenign="LIKELY_BENIGN",L.LikelyOncogenic="LIKELY_ONCOGENIC",L.LikelyPathogenic="LIKELY_PATHOGENIC",L.Na="NA",L.Negative="NEGATIVE",L.Oncogenic="ONCOGENIC",L.Pathogenic="PATHOGENIC",L.PoorOutcome="POOR_OUTCOME",L.Positive="POSITIVE",L.ReducedSensitivity="REDUCED_SENSITIVITY",L.Resistance="RESISTANCE",L.Sensitivityresponse="SENSITIVITYRESPONSE",L.UncertainSignificance="UNCERTAIN_SIGNIFICANCE",L))(),R=(()=>((R=R||{}).AmpLevel="AMP_LEVEL",R.AssertionDirection="ASSERTION_DIRECTION",R.AssertionType="ASSERTION_TYPE",R.DiseaseName="DISEASE_NAME",R.EvidenceItemsCount="EVIDENCE_ITEMS_COUNT",R.Id="ID",R.Significance="SIGNIFICANCE",R.Status="STATUS",R.Summary="SUMMARY",R.TherapyName="THERAPY_NAME",R))(),j=(()=>((j=j||{}).Diagnostic="DIAGNOSTIC",j.Oncogenic="ONCOGENIC",j.Predictive="PREDICTIVE",j.Predisposing="PREDISPOSING",j.Prognostic="PROGNOSTIC",j))(),P=(()=>((P=P||{}).And="AND",P.Or="OR",P))(),M=(()=>((M=M||{}).EvidenceItemCount="EVIDENCE_ITEM_COUNT",M.Name="NAME",M.NctId="NCT_ID",M.SourceCount="SOURCE_COUNT",M))(),F=(()=>((F=F||{}).Conflict="CONFLICT",F.Expired="EXPIRED",F.Missing="MISSING",F.Valid="VALID",F))(),A=(()=>((A=A||{}).Assertion="ASSERTION",A.EvidenceItem="EVIDENCE_ITEM",A.Gene="GENE",A.MolecularProfile="MOLECULAR_PROFILE",A.Source="SOURCE",A.Variant="VARIANT",A.VariantGroup="VARIANT_GROUP",A))(),U=(()=>((U=U||{}).Created="CREATED",U.LastModified="LAST_MODIFIED",U))(),O=(()=>((O=O||{}).AssertionCount="ASSERTION_COUNT",O.Doid="DOID",O.EvidenceItemCount="EVIDENCE_ITEM_COUNT",O.GeneCount="GENE_COUNT",O.Name="NAME",O.VariantCount="VARIANT_COUNT",O))(),E=(()=>((E=E||{}).Accepted="ACCEPTED",E.AssertionAccepted="ASSERTION_ACCEPTED",E.AssertionRejected="ASSERTION_REJECTED",E.AssertionReverted="ASSERTION_REVERTED",E.AssertionSubmitted="ASSERTION_SUBMITTED",E.Commented="COMMENTED",E.ComplexMolecularProfileCreated="COMPLEX_MOLECULAR_PROFILE_CREATED",E.CuratedSourceSuggestion="CURATED_SOURCE_SUGGESTION",E.DeprecatedMolecularProfile="DEPRECATED_MOLECULAR_PROFILE",E.DeprecatedVariant="DEPRECATED_VARIANT",E.Flagged="FLAGGED",E.FlagResolved="FLAG_RESOLVED",E.PublicationSuggested="PUBLICATION_SUGGESTED",E.Rejected="REJECTED",E.RejectedSourceSuggestion="REJECTED_SOURCE_SUGGESTION",E.RequeuedSourceSuggestion="REQUEUED_SOURCE_SUGGESTION",E.Reverted="REVERTED",E.RevisionAccepted="REVISION_ACCEPTED",E.RevisionRejected="REVISION_REJECTED",E.RevisionSuggested="REVISION_SUGGESTED",E.RevisionSuperseded="REVISION_SUPERSEDED",E.Submitted="SUBMITTED",E.VariantCreated="VARIANT_CREATED",E))(),H=(()=>((H=H||{}).Organization="ORGANIZATION",H.Subject="SUBJECT",H.Unscoped="UNSCOPED",H.User="USER",H))(),G=(()=>((G=G||{}).DoesNotSupport="DOES_NOT_SUPPORT",G.Na="NA",G.Supports="SUPPORTS",G))(),Te=(()=>((Te=Te||{}).A="A",Te.B="B",Te.C="C",Te.D="D",Te.E="E",Te))(),me=(()=>((me=me||{}).AdverseResponse="ADVERSE_RESPONSE",me.Benign="BENIGN",me.BetterOutcome="BETTER_OUTCOME",me.DominantNegative="DOMINANT_NEGATIVE",me.GainOfFunction="GAIN_OF_FUNCTION",me.LikelyBenign="LIKELY_BENIGN",me.LikelyPathogenic="LIKELY_PATHOGENIC",me.LossOfFunction="LOSS_OF_FUNCTION",me.Na="NA",me.Negative="NEGATIVE",me.Neomorphic="NEOMORPHIC",me.Oncogenicity="ONCOGENICITY",me.Pathogenic="PATHOGENIC",me.PoorOutcome="POOR_OUTCOME",me.Positive="POSITIVE",me.Predisposition="PREDISPOSITION",me.Protectiveness="PROTECTIVENESS",me.ReducedSensitivity="REDUCED_SENSITIVITY",me.Resistance="RESISTANCE",me.Sensitivityresponse="SENSITIVITYRESPONSE",me.UnalteredFunction="UNALTERED_FUNCTION",me.UncertainSignificance="UNCERTAIN_SIGNIFICANCE",me.Unknown="UNKNOWN",me))(),K=(()=>((K=K||{}).Description="DESCRIPTION",K.DiseaseName="DISEASE_NAME",K.EvidenceDirection="EVIDENCE_DIRECTION",K.EvidenceLevel="EVIDENCE_LEVEL",K.EvidenceRating="EVIDENCE_RATING",K.EvidenceType="EVIDENCE_TYPE",K.Id="ID",K.Significance="SIGNIFICANCE",K.Status="STATUS",K.TherapyName="THERAPY_NAME",K.VariantOrigin="VARIANT_ORIGIN",K))(),N=(()=>((N=N||{}).Accepted="ACCEPTED",N.Rejected="REJECTED",N.Submitted="SUBMITTED",N))(),V=(()=>((V=V||{}).Accepted="ACCEPTED",V.All="ALL",V.Rejected="REJECTED",V.Submitted="SUBMITTED",V))(),S=(()=>((S=S||{}).Diagnostic="DIAGNOSTIC",S.Functional="FUNCTIONAL",S.Oncogenic="ONCOGENIC",S.Predictive="PREDICTIVE",S.Predisposing="PREDISPOSING",S.Prognostic="PROGNOSTIC",S))(),I=(()=>((I=I||{}).Open="OPEN",I.Resolved="RESOLVED",I))(),b=(()=>((b=b||{}).Assertion="ASSERTION",b.EvidenceItem="EVIDENCE_ITEM",b.Gene="GENE",b.MolecularProfile="MOLECULAR_PROFILE",b.Variant="VARIANT",b.VariantGroup="VARIANT_GROUP",b))(),re=(()=>((re=re||{}).AssertionCount="assertionCount",re.DiseaseName="diseaseName",re.EntrezSymbol="entrezSymbol",re.EvidenceItemCount="evidenceItemCount",re.GeneAlias="geneAlias",re.MolecularProfileCount="molecularProfileCount",re.TherapyName="therapyName",re.VariantCount="variantCount",re))(),Q=(()=>((Q=Q||{}).Assertion="ASSERTION",Q.EvidenceItem="EVIDENCE_ITEM",Q.Gene="GENE",Q.MolecularProfile="MOLECULAR_PROFILE",Q.Variant="VARIANT",Q.VariantGroup="VARIANT_GROUP",Q))(),he=(()=>((he=he||{}).All="ALL",he.WithAccepted="WITH_ACCEPTED",he.WithAcceptedOrSubmitted="WITH_ACCEPTED_OR_SUBMITTED",he.WithSubmitted="WITH_SUBMITTED",he))(),Se=(()=>((Se=Se||{}).AssertionCount="assertionCount",Se.EvidenceItemCount="evidenceItemCount",Se.MolecularProfileScore="molecularProfileScore",Se.VariantCount="variantCount",Se))(),ke=(()=>((ke=ke||{}).Mention="MENTION",ke.Subscription="SUBSCRIPTION",ke))(),Ft=(()=>((Ft=Ft||{}).Id="ID",Ft.Name="NAME",Ft))(),wt=(()=>((wt=wt||{}).AssertionCount="ASSERTION_COUNT",wt.EvidenceItemCount="EVIDENCE_ITEM_COUNT",wt.HpoId="HPO_ID",wt.Name="NAME",wt))(),tn=(()=>((tn=tn||{}).Read="READ",tn.Unread="UNREAD",tn))(),xt=(()=>((xt=xt||{}).Grch37="GRCH37",xt.Grch38="GRCH38",xt.Ncbi36="NCBI36",xt))(),$t=(()=>(($t=$t||{}).Accepted="ACCEPTED",$t.New="NEW",$t.Rejected="REJECTED",$t.Superseded="SUPERSEDED",$t))(),Xt=(()=>((Xt=Xt||{}).Assertion="ASSERTION",Xt.EvidenceItem="EVIDENCE_ITEM",Xt.Gene="GENE",Xt.MolecularProfile="MOLECULAR_PROFILE",Xt.Revision="REVISION",Xt.Variant="VARIANT",Xt.VariantGroup="VARIANT_GROUP",Xt))(),un=(()=>((un=un||{}).Asc="ASC",un.Desc="DESC",un))(),Ln=(()=>((Ln=Ln||{}).Asco="ASCO",Ln.Ash="ASH",Ln.Pubmed="PUBMED",Ln))(),rt=(()=>((rt=rt||{}).Curated="CURATED",rt.New="NEW",rt.Rejected="REJECTED",rt))(),$e=(()=>(($e=$e||{}).Citation="CITATION",$e.CitationId="CITATION_ID",$e.CreatedAt="CREATED_AT",$e.DiseaseName="DISEASE_NAME",$e.SourceType="SOURCE_TYPE",$e.Submitter="SUBMITTER",$e))(),gt=(()=>((gt=gt||{}).Authors="AUTHORS",gt.CitationId="CITATION_ID",gt.EvidenceCount="EVIDENCE_COUNT",gt.Journal="JOURNAL",gt.Name="NAME",gt.SourceType="SOURCE_TYPE",gt.SuggestionCount="SUGGESTION_COUNT",gt.Year="YEAR",gt))(),jt=(()=>((jt=jt||{}).Assertion="ASSERTION",jt.EvidenceItem="EVIDENCE_ITEM",jt.Gene="GENE",jt.MolecularProfile="MOLECULAR_PROFILE",jt.Revision="REVISION",jt.SourceSuggestion="SOURCE_SUGGESTION",jt.Variant="VARIANT",jt.VariantGroup="VARIANT_GROUP",jt))(),Zt=(()=>((Zt=Zt||{}).Assertion="ASSERTION",Zt.EvidenceItem="EVIDENCE_ITEM",Zt.Gene="GENE",Zt.MolecularProfile="MOLECULAR_PROFILE",Zt.Revision="REVISION",Zt.Role="ROLE",Zt.Variant="VARIANT",Zt.VariantGroup="VARIANT_GROUP",Zt))(),yn=(()=>((yn=yn||{}).Combination="COMBINATION",yn.Sequential="SEQUENTIAL",yn.Substitutes="SUBSTITUTES",yn))(),wn=(()=>((wn=wn||{}).AssertionCount="ASSERTION_COUNT",wn.EvidenceItemCount="EVIDENCE_ITEM_COUNT",wn.Name="NAME",wn.NcitId="NCIT_ID",wn))(),rn=(()=>((rn=rn||{}).AllTime="ALL_TIME",rn.LastMonth="LAST_MONTH",rn.LastWeek="LAST_WEEK",rn.LastYear="LAST_YEAR",rn))(),mn=(()=>((mn=mn||{}).Admin="ADMIN",mn.Curator="CURATOR",mn.Editor="EDITOR",mn))(),je=(()=>((je=je||{}).Id="ID",je.LastAction="LAST_ACTION",je.Name="NAME",je.Role="ROLE",je))(),zt=(()=>((zt=zt||{}).EvidenceItemCount="EVIDENCE_ITEM_COUNT",zt.GeneNames="GENE_NAMES",zt.Name="NAME",zt.VariantCount="VARIANT_COUNT",zt.VariantNames="VARIANT_NAMES",zt))(),lt=(()=>((lt=lt||{}).CoordinateEnd="COORDINATE_END",lt.CoordinateStart="COORDINATE_START",lt.Name="NAME",lt))(),He=(()=>((He=He||{}).Combined="COMBINED",He.CommonGermline="COMMON_GERMLINE",He.Na="NA",He.RareGermline="RARE_GERMLINE",He.Somatic="SOMATIC",He.Unknown="UNKNOWN",He))(),Ne=(()=>((Ne=Ne||{}).Name="NAME",Ne.Soid="SOID",Ne.VariantCount="VARIANT_COUNT",Ne))(),ie=(()=>((ie=ie||{}).DiseaseName="diseaseName",ie.EntrezSymbol="entrezSymbol",ie.TherapyName="therapyName",ie.VariantName="variantName",ie))();const Me=t.Ps`
    fragment ActivityCard on ActivityInterface {
  id
  verbiage
}
    `,Fe=t.Ps`
    fragment activityFeedNode on ActivityInterface {
  id
  verbiage
  createdAt
  organization {
    id
    name
    profileImagePath(size: 32)
  }
  user {
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
  ... on FlagEntityActivity {
    flag {
      id
      name
      link
    }
  }
}
    `,it=t.Ps`
    fragment activityFeed on ActivityInterfaceConnection {
  pageInfo {
    startCursor
    endCursor
    hasNextPage
    hasPreviousPage
  }
  edges {
    cursor
    node {
      ...activityFeedNode
    }
  }
}
    ${Fe}`,Dt=t.Ps`
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
    `,ln=t.Ps`
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
    ${Dt}`,En=t.Ps`
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
    ${Dt}`,ht=t.Ps`
    fragment clinicalTrialPopover on BrowseClinicalTrial {
  id
  name
  nctId
  url
  sourceCount
  evidenceCount
}
    `,ot=t.Ps`
    fragment BrowseClinicalTrialsRowFields on BrowseClinicalTrial {
  id
  name
  nctId
  evidenceCount
  sourceCount
  link
}
    `,Be=t.Ps`
    fragment parsedCommentFragment on CommentBodySegment {
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
    `,yt=t.Ps`
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
    ...parsedCommentFragment
  }
}
    ${Be}`,St=t.Ps`
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
    `,Ut=t.Ps`
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
    `,Bt=t.Ps`
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
    `,Qe=t.Ps`
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
    ${Bt}`,J=t.Ps`
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
    ${Dt}`,k=t.Ps`
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
    ${Dt}`,Z=t.Ps`
    fragment flag on Flag {
  id
  state
  flaggable {
    id
    name
    link
  }
  openActivity {
    id
    createdAt
    parsedNote {
      ...parsedCommentFragment
    }
    user {
      id
      displayName
      role
      profileImagePath(size: 32)
    }
  }
  resolutionActivity {
    id
    createdAt
    parsedNote {
      ...parsedCommentFragment
    }
    user {
      id
      displayName
      role
      profileImagePath(size: 32)
    }
  }
}
    ${Be}`,ye=t.Ps`
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
    ${Z}`,vt=t.Ps`
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
  openActivity {
    parsedNote {
      ...parsedCommentFragment
    }
  }
}
    ${Be}`,qe=t.Ps`
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
    `,Ye=t.Ps`
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
    `,Xe=t.Ps`
    fragment QuicksearchResult on SearchResult {
  id
  resultType
  name
  matchingText
}
    `,At=t.Ps`
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
    `,Tt=t.Ps`
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
    `,fn=t.Ps`
    fragment menuMolecularProfile on MolecularProfile {
  id
  name
  link
  flagged
}
    `,Ge=t.Ps`
    fragment LeaderboardOrganizationFields on LeaderboardOrganization {
  id
  name
  actionCount
  rank
  profileImagePath(size: 64)
}
    `,st=t.Ps`
    fragment orgPopover on Organization {
  id
  profileImagePath(size: 64)
  name
  description
  url
}
    `,ae=t.Ps`
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
  mostRecentActivityTimestamp
}
    `,_e=t.Ps`
    fragment PhenotypeBrowseTableRowFields on BrowsePhenotype {
  id
  name
  hpoId
  url
  assertionCount
  evidenceCount
  link
}
    `,pt=t.Ps`
    fragment validationError on FieldValidationError {
  fieldName
  error
}
    `,we=t.Ps`
    fragment revisionPopover on Revision {
  id
  name
  link
  status
  creationActivity {
    user {
      id
      displayName
      role
    }
    parsedNote {
      ...parsedCommentFragment
    }
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
}
    ${Be}`,nt=t.Ps`
    fragment revision on Revision {
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
  creationActivity {
    createdAt
    user {
      id
      displayName
      role
    }
    parsedNote {
      ...parsedCommentFragment
    }
  }
  resolutionActivity {
    createdAt
    user {
      id
      displayName
      role
    }
    parsedNote {
      ...parsedCommentFragment
    }
  }
  status
}
    ${Be}`,kt=t.Ps`
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
    `,cn=t.Ps`
    fragment subscriptionId on Subscription {
  id
  __typename
}
    `,Pt=t.Ps`
    fragment TimepointCount on TimePointCounts {
  allTime
  newThisMonth
  newThisWeek
  newThisYear
}
    `,at=t.Ps`
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
  creationActivity {
    parsedNote {
      ...parsedCommentFragment
    }
  }
  lastStatusUpdateActivity {
    parsedNote {
      ...parsedCommentFragment
    }
  }
  status
  reason
  createdAt
}
    ${Be}`,tt=t.Ps`
    fragment sourcePopover on SourcePopover {
  id
  title
  fullJournalTitle
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
    `,X=t.Ps`
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
    `,B=t.Ps`
    fragment TherapyBrowseTableRowFields on BrowseTherapy {
  id
  name
  ncitId
  therapyUrl
  assertionCount
  evidenceCount
  link
}
    `,Ce=t.Ps`
    fragment LeaderboardUserFields on LeaderboardUser {
  id
  name
  displayName
  actionCount
  role
  rank
  profileImagePath(size: 64)
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
    `,_t=t.Ps`
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
  profileImagePath(size: 64)
  mostRecentActivityTimestamp
}
    `,en=t.Ps`
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
    `,Gt=t.Ps`
    fragment BrowseVariantGroupRowFields on BrowseVariantGroup {
  id
  name
  link
  geneNames
  variantNames
  variantCount
  evidenceItemCount
}
    `,An=t.Ps`
    fragment variantTypePopover on VariantTypePopover {
  id
  name
  url
  soid
  variantCount
}
    `,Tn=t.Ps`
    fragment VariantTypeBrowseTableRowFields on BrowseVariantType {
  id
  name
  soid
  url
  variantCount
  link
}
    `,so=t.Ps`
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
    `,Bo=t.Ps`
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
    `,xo=t.Ps`
    fragment menuVariantType on BrowseVariantType {
  id
  name
  link
}
    `,ii=t.Ps`
    fragment menuVariant on Variant {
  id
  name
  link
  flagged
}
    `,ri=t.Ps`
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
    `,_i=t.Ps`
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
    `,Po=t.Ps`
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
    fragment MolecularProfileSelectTypeaheadFields on MolecularProfile {
  id
  name
  link
  molecularProfileAliases
}
    `,ui=t.Ps`
    fragment DiseaseSelectTypeaheadFields on Disease {
  id
  name
  link
  displayName
  doid
  diseaseAliases
}
    `,si=t.Ps`
    fragment TherapySelectTypeaheadFields on Therapy {
  id
  name
  link
  ncitId
  therapyAliases
}
    `,Zo=t.Ps`
    fragment PhenotypeSelectTypeaheadFields on Phenotype {
  id
  name
  link
  hpoId
}
    `,eo=t.Ps`
    fragment SourceSelectTypeaheadFields on Source {
  id
  name
  link
  citation
  citationId
  sourceType
}
    `,Si=t.Ps`
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
    ${Xn}
${ui}
${si}
${Zo}
${eo}`,No=t.Ps`
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
    `,zo=t.Ps`
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
    `,yi=t.Ps`
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
    `,Wo=t.Ps`
    fragment CoordinateFields on Coordinate {
  chromosome
  representativeTranscript
  start
  stop
}
    `,Di=t.Ps`
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
    ${Wo}`,zn=t.Ps`
    fragment VariantGroupRevisableFields on VariantGroup {
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
    `,ai=t.Ps`
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
    `,Lo=t.Ps`
    fragment AcmgCodeSelectTypeaheadFields on AcmgCode {
  id
  code
  name
  description
  tooltip
}
    `,Qi=t.Ps`
    fragment ClingenCodeSelectTypeaheadFields on ClingenCode {
  id
  code
  name
  description
  tooltip
  exclusive
}
    `,Oi=t.Ps`
    fragment QuickAddDiseaseFields on AddDiseasePayload {
  new
  disease {
    ...DiseaseSelectTypeaheadFields
  }
}
    ${ui}`,ni=t.Ps`
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
    ${Dt}`,Bi=t.Ps`
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
    `,dr=t.Ps`
    fragment GeneSelectTypeaheadFields on Gene {
  id
  entrezId
  name
  geneAliases
  link
}
    `,_r=t.Ps`
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
    `,ao=t.Ps`
    fragment NccnGuidelineSelectTypeaheadFields on NccnGuideline {
  id
  name
}
    `,ko=t.Ps`
    fragment QuickAddTherapyFields on AddTherapyPayload {
  new
  therapy {
    ...TherapySelectTypeaheadFields
  }
}
    ${si}`,di=(t.Ps`
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
    `),Fo=t.Ps`
    fragment QuickAddVariantFields on CreateVariantPayload {
  clientMutationId
  new
  variant {
    ...VariantSelectTypeaheadFields
  }
}
    ${di}`,er=t.Ps`
    fragment VariantTypeSelectTypeaheadFields on VariantType {
  id
  name
  link
  soid
}
    `,To=t.Ps`
    fragment assertionSubmissionActivity on Assertion {
  submissionActivity {
    createdAt
    parsedNote {
      ...parsedCommentFragment
    }
    user {
      id
      displayName
      profileImagePath(size: 32)
    }
  }
}
    ${Be}`,Nn=t.Ps`
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
  ...assertionSubmissionActivity
}
    ${To}`,lo=t.Ps`
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
  ...assertionSubmissionActivity
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
    ${Dt}
${To}`,Ri=t.Ps`
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
    `,Xo=t.Ps`
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
    ${Ri}`,jn=t.Ps`
    fragment evidenceSubmissionActivity on EvidenceItem {
  submissionActivity {
    createdAt
    parsedNote {
      ...parsedCommentFragment
    }
    user {
      id
      displayName
      profileImagePath(size: 32)
    }
  }
}
    ${Be}`,no=t.Ps`
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
  ...evidenceSubmissionActivity
}
    ${jn}`,Ve=t.Ps`
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
  submissionActivity {
    createdAt
    parsedNote {
      ...parsedCommentFragment
    }
    user {
      displayName
      profileImagePath(size: 32)
      id
      role
    }
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
    ${Dt}
${Be}`,oe=t.Ps`
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
    `,De=t.Ps`
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
    `,Ue=t.Ps`
    fragment MolecularProfileDetailFields on MolecularProfile {
  id
  name
  deprecated
  deprecationReason
  complexMolecularProfileDeprecationActivity {
    parsedNote {
      ...parsedCommentFragment
    }
  }
  deprecatedVariants {
    deprecationReason
    deprecationActivity {
      parsedNote {
        ...parsedCommentFragment
      }
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
  variants {
    id
  }
}
    ${Be}`,Ct=t.Ps`
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
    `,Nt=t.Ps`
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
  complexMolecularProfileCreationActivity {
    createdAt
    user {
      id
      displayName
      role
      profileImagePath(size: 32)
    }
  }
  variantDeprecationActivity {
    createdAt
    user {
      id
      displayName
      role
      profileImagePath(size: 32)
    }
  }
  complexMolecularProfileDeprecationActivity {
    createdAt
    user {
      id
      displayName
      role
      profileImagePath(size: 32)
    }
  }
}
    ${Ct}
${Dt}`,Jt=t.Ps`
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
  ranks {
    commentsRank {
      rank
      actionCount
    }
    moderationRank {
      rank
      actionCount
    }
    revisionsRank {
      rank
      actionCount
    }
    submissionsRank {
      rank
      actionCount
    }
  }
}
    `,sn=t.Ps`
    fragment OrganizationGroupsFields on Organization {
  id
  name
  url
  description
  profileImagePath(size: 128)
  subGroups {
    id
    name
    url
  }
  ranks {
    commentsRank {
      rank
      actionCount
    }
    moderationRank {
      rank
      actionCount
    }
    revisionsRank {
      rank
      actionCount
    }
    submissionsRank {
      rank
      actionCount
    }
  }
}
    `,Qt=t.Ps`
    fragment OrganizationMembersFields on User {
  id
  name
  displayName
  username
  profileImagePath(size: 64)
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
    url
  }
}
    `,_n=t.Ps`
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
    `,Rn=t.Ps`
    fragment SourceDetailFields on Source {
  id
  citation
  sourceUrl
  displayType
  fullyCurated
  citationId
  comments {
    totalCount
  }
}
    `,bn=t.Ps`
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
  ascoAbstractId
  clinicalTrials {
    nctId
    id
    link
  }
}
    `,dn=t.Ps`
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
    `,On=t.Ps`
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
    ${dn}`,Qn=t.Ps`
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
    url
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
  ranks {
    commentsRank {
      rank
      actionCount
    }
    moderationRank {
      rank
      actionCount
    }
    revisionsRank {
      rank
      actionCount
    }
    submissionsRank {
      rank
      actionCount
    }
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
    `,Vn=t.Ps`
    fragment notificationOrganization on Organization {
  id
  name
}
    `,Un=t.Ps`
    fragment notificationOriginatingUsers on User {
  id
  displayName
}
    `,Zn=t.Ps`
    fragment notificationFeedSubjects on EventSubjectWithCount {
  subject {
    id
    __typename
    name
  }
  occuranceCount
}
    `,yo=t.Ps`
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
    ${Bt}`,Kn=t.Ps`
    fragment subscribable on Subscribable {
  id
  entityType
  __typename
}
    `,go=t.Ps`
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
    `,So=t.Ps`
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
    `,qn=t.Ps`
    fragment VariantDetailFields on Variant {
  id
  name
  deprecated
  deprecationReason
  deprecationActivity {
    parsedNote {
      ...parsedCommentFragment
    }
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
    ${Be}`,Do=t.Ps`
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
    `,Vo=t.Ps`
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
  creationActivity {
    user {
      id
      displayName
      role
      profileImagePath(size: 32)
    }
    createdAt
  }
  deprecationActivity {
    user {
      id
      displayName
      role
      profileImagePath(size: 32)
    }
    createdAt
  }
}
    ${Do}`;t.Ps`
    query ActivityCard($activityId: Int!) {
  activity(id: $activityId) {
    ...ActivityCard
  }
}
    ${Me}`,t.Ps`
    query ActivityFeed($first: Int, $last: Int, $before: String, $after: String, $userId: Int) {
  activities(
    first: $first
    last: $last
    before: $before
    after: $after
    userId: $userId
  ) {
    ...activityFeed
  }
}
    ${it}`;const Ro=t.Ps`
    query AssertionPopover($assertionId: Int!) {
  assertion(id: $assertionId) {
    ...assertionPopover
  }
}
    ${ln}`;let Yo=(()=>{class y extends t.AE{constructor(se){super(se),this.document=Ro}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const or=t.Ps`
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
    ${En}`;let Ci=(()=>{class y extends t.AE{constructor(se){super(se),this.document=or}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const zi=t.Ps`
    query ClinicalTrialPopover($clinicalTrialId: Int!) {
  clinicalTrials(id: $clinicalTrialId) {
    edges {
      node {
        ...clinicalTrialPopover
      }
    }
  }
}
    ${ht}`;let cr=(()=>{class y extends t.AE{constructor(se){super(se),this.document=zi}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const Hi=t.Ps`
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
    ${ot}`;let ir=(()=>{class y extends t.AE{constructor(se){super(se),this.document=Hi}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const Ei=t.Ps`
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
    ${yt}`;let Ae=(()=>{class y extends t.AE{constructor(se){super(se),this.document=Ei}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const Rt=t.Ps`
    query CommentPopover($commentId: Int!) {
  comment(id: $commentId) {
    ...commentPopover
  }
}
    ${St}`;let W=(()=>{class y extends t.AE{constructor(se){super(se),this.document=Rt}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const Le=t.Ps`
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
    `;let Vt=(()=>{class y extends t.AE{constructor(se){super(se),this.document=Le}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const on=t.Ps`
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
    lastUpdated
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
    ${Ut}`;let Bn=(()=>{class y extends t.AE{constructor(se){super(se),this.document=on}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const fo=t.Ps`
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
    `;let mo=(()=>{class y extends t.AE{constructor(se){super(se),this.document=fo}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const Ko=t.Ps`
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
    ${Qe}`;let ci=(()=>{class y extends t.AE{constructor(se){super(se),this.document=Ko}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const po=t.Ps`
    query EvidencePopover($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...evidencePopover
  }
}
    ${J}`;let Wi=(()=>{class y extends t.AE{constructor(se){super(se),this.document=po}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const Yi=t.Ps`
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
    ${k}`;let Er=(()=>{class y extends t.AE{constructor(se){super(se),this.document=Yi}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const Fs=t.Ps`
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
    ${ye}`;let Ee=(()=>{class y extends t.AE{constructor(se){super(se),this.document=Fs}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const ve=t.Ps`
    query FlagPopover($flagId: Int!) {
  flag(id: $flagId) {
    ...flagPopover
  }
}
    ${vt}`;let ue=(()=>{class y extends t.AE{constructor(se){super(se),this.document=ve}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const et=t.Ps`
    query GenePopover($geneId: Int!) {
  gene(id: $geneId) {
    ...genePopover
  }
}
    ${qe}`;let Cn=(()=>{class y extends t.AE{constructor(se){super(se),this.document=et}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const Gn=t.Ps`
    query BrowseGenes($entrezSymbol: String, $therapyName: String, $geneAlias: String, $diseaseName: String, $sortBy: GenesSort, $first: Int, $last: Int, $before: String, $after: String) {
  browseGenes(
    entrezSymbol: $entrezSymbol
    therapyName: $therapyName
    geneAlias: $geneAlias
    diseaseName: $diseaseName
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
    lastUpdated
    totalCount
    filteredCount
    pageCount
  }
}
    ${Ye}`;let Ai=(()=>{class y extends t.AE{constructor(se){super(se),this.document=Gn}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const bi=t.Ps`
    query Quicksearch($query: String!, $types: [SearchableEntities!], $highlightMatches: Boolean) {
  search(query: $query, types: $types, highlightMatches: $highlightMatches) {
    ...QuicksearchResult
  }
}
    ${Xe}`;let Yr=(()=>{class y extends t.AE{constructor(se){super(se),this.document=bi}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const Ns=t.Ps`
    query MolecularProfilePopover($molecularProfileId: Int!) {
  molecularProfile(id: $molecularProfileId) {
    ...molecularProfilePopoverFields
  }
}
    ${At}`;let Sa=(()=>{class y extends t.AE{constructor(se){super(se),this.document=Ns}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const Ks=t.Ps`
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
    lastUpdated
    filteredCount
    pageCount
  }
}
    ${Tt}`;let Js=(()=>{class y extends t.AE{constructor(se){super(se),this.document=Ks}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const fs=t.Ps`
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
    ${fn}`;let Ea=(()=>{class y extends t.AE{constructor(se){super(se),this.document=fs}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const Jr=t.Ps`
    query OrganizationCommentsLeaderboard($window: TimeWindow, $first: Int, $last: Int, $before: String, $after: String) {
  organizationLeaderboards {
    commentsLeaderboard(
      first: $first
      last: $last
      before: $before
      after: $after
      window: $window
    ) {
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
      edges {
        cursor
        node {
          ...LeaderboardOrganizationFields
        }
      }
      nodes {
        ...LeaderboardOrganizationFields
      }
    }
  }
}
    ${Ge}`;let qr=(()=>{class y extends t.AE{constructor(se){super(se),this.document=Jr}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const pr=t.Ps`
    query OrganizationRevisionsLeaderboard($window: TimeWindow, $first: Int, $last: Int, $before: String, $after: String) {
  organizationLeaderboards {
    revisionsLeaderboard(
      first: $first
      last: $last
      before: $before
      after: $after
      window: $window
    ) {
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
      edges {
        cursor
        node {
          ...LeaderboardOrganizationFields
        }
      }
      nodes {
        ...LeaderboardOrganizationFields
      }
    }
  }
}
    ${Ge}`;let rr=(()=>{class y extends t.AE{constructor(se){super(se),this.document=pr}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const pi=t.Ps`
    query OrganizationModerationLeaderboard($window: TimeWindow, $first: Int, $last: Int, $before: String, $after: String) {
  organizationLeaderboards {
    moderationLeaderboard(
      first: $first
      last: $last
      before: $before
      after: $after
      window: $window
    ) {
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
      edges {
        cursor
        node {
          ...LeaderboardOrganizationFields
        }
      }
      nodes {
        ...LeaderboardOrganizationFields
      }
    }
  }
}
    ${Ge}`;let yr=(()=>{class y extends t.AE{constructor(se){super(se),this.document=pi}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const Ls=t.Ps`
    query OrganizationSubmissionsLeaderboard($window: TimeWindow, $first: Int, $last: Int, $before: String, $after: String) {
  organizationLeaderboards {
    submissionsLeaderboard(
      first: $first
      last: $last
      before: $before
      after: $after
      window: $window
    ) {
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
      edges {
        cursor
        node {
          ...LeaderboardOrganizationFields
        }
      }
      nodes {
        ...LeaderboardOrganizationFields
      }
    }
  }
}
    ${Ge}`;let $r=(()=>{class y extends t.AE{constructor(se){super(se),this.document=Ls}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const Lr=t.Ps`
    query OrgPopover($orgId: Int!) {
  organization(id: $orgId) {
    ...orgPopover
  }
}
    ${st}`;let Xr=(()=>{class y extends t.AE{constructor(se){super(se),this.document=Lr}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const qs=t.Ps`
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
    ${ae}`;let Cr=(()=>{class y extends t.AE{constructor(se){super(se),this.document=qs}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const ms=t.Ps`
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
    `;let zr=(()=>{class y extends t.AE{constructor(se){super(se),this.document=ms}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const es=t.Ps`
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
    ${_e}`;let kr=(()=>{class y extends t.AE{constructor(se){super(se),this.document=es}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const tc=t.Ps`
    mutation AcceptRevision($input: AcceptRevisionsInput!) {
  acceptRevisions(input: $input) {
    revisions {
      id
      __typename
    }
  }
}
    `;let Zc=(()=>{class y extends t.mm{constructor(se){super(se),this.document=tc}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const nc=t.Ps`
    mutation RejectRevision($input: RejectRevisionsInput!) {
  rejectRevisions(input: $input) {
    revisions {
      id
      __typename
    }
  }
}
    `;let Rr=(()=>{class y extends t.mm{constructor(se){super(se),this.document=nc}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const Tr=t.Ps`
    query ValidateRevisionsForAcceptance($ids: [Int!]!) {
  validateRevisionsForAcceptance(revisionIds: $ids) {
    genericErrors
    validationErrors {
      ...validationError
    }
  }
}
    ${pt}`;let as=(()=>{class y extends t.AE{constructor(se){super(se),this.document=Tr}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const Ur=t.Ps`
    query RevisionPopover($revisionId: Int!) {
  revision(id: $revisionId) {
    ...revisionPopover
  }
}
    ${we}`;let xr=(()=>{class y extends t.AE{constructor(se){super(se),this.document=Ur}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const ts=t.Ps`
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
    ${nt}`;let hr=(()=>{class y extends t.AE{constructor(se){super(se),this.document=ts}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const gs=t.Ps`
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
    ${kt}`;let vs=(()=>{class y extends t.AE{constructor(se){super(se),this.document=gs}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const xa=t.Ps`
    query SubscriptionForEntity($subscribable: SubscribableInput!) {
  subscriptionForEntity(subscribable: $subscribable) {
    ...subscriptionId
  }
}
    ${cn}`;let Xs=(()=>{class y extends t.AE{constructor(se){super(se),this.document=xa}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const ea=t.Ps`
    mutation ModerateEvidenceItem($input: ModerateEvidenceItemInput!) {
  moderateEvidenceItem(input: $input) {
    evidenceItem {
      id
    }
  }
}
    `;let ta=(()=>{class y extends t.mm{constructor(se){super(se),this.document=ea}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const tr=t.Ps`
    mutation ModerateAssertion($input: ModerateAssertionInput!) {
  moderateAssertion(input: $input) {
    assertion {
      id
    }
  }
}
    `;let $i=(()=>{class y extends t.mm{constructor(se){super(se),this.document=tr}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const na=t.Ps`
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
    ${Pt}`;let gi=(()=>{class y extends t.AE{constructor(se){super(se),this.document=na}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const jr=t.Ps`
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
    ${at}`;let ne=(()=>{class y extends t.AE{constructor(se){super(se),this.document=jr}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();t.Ps`
    mutation UpdateSourceSuggestionStatus($input: UpdateSourceSuggestionStatusInput!) {
  updateSourceSuggestionStatus(input: $input) {
    sourceSuggestion {
      id
      status
    }
  }
}
    `;const Ke=t.Ps`
    query SourcePopover($sourceId: Int!) {
  sourcePopover(id: $sourceId) {
    ...sourcePopover
  }
}
    ${tt}`;let Ot=(()=>{class y extends t.AE{constructor(se){super(se),this.document=Ke}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const pn=t.Ps`
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
    lastUpdated
    pageCount
    edges {
      cursor
      node {
        ...BrowseSourceRowFields
      }
    }
  }
}
    ${X}`;let Mn=(()=>{class y extends t.AE{constructor(se){super(se),this.document=pn}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const to=t.Ps`
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
    `;let ei=(()=>{class y extends t.AE{constructor(se){super(se),this.document=to}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const vo=t.Ps`
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
    ${B}`;let Uo=(()=>{class y extends t.AE{constructor(se){super(se),this.document=vo}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const Oo=t.Ps`
    query UserCommentsLeaderboard($window: TimeWindow, $first: Int, $last: Int, $before: String, $after: String) {
  userLeaderboards {
    commentsLeaderboard(
      first: $first
      last: $last
      before: $before
      after: $after
      window: $window
    ) {
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
      edges {
        cursor
        node {
          ...LeaderboardUserFields
        }
      }
      nodes {
        ...LeaderboardUserFields
      }
    }
  }
}
    ${Ce}`;let oi=(()=>{class y extends t.AE{constructor(se){super(se),this.document=Oo}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const jo=t.Ps`
    query UserRevisionsLeaderboard($window: TimeWindow, $first: Int, $last: Int, $before: String, $after: String) {
  userLeaderboards {
    revisionsLeaderboard(
      first: $first
      last: $last
      before: $before
      after: $after
      window: $window
    ) {
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
      edges {
        cursor
        node {
          ...LeaderboardUserFields
        }
      }
      nodes {
        ...LeaderboardUserFields
      }
    }
  }
}
    ${Ce}`;let Ti=(()=>{class y extends t.AE{constructor(se){super(se),this.document=jo}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const hi=t.Ps`
    query UserModerationLeaderboard($window: TimeWindow, $first: Int, $last: Int, $before: String, $after: String) {
  userLeaderboards {
    moderationLeaderboard(
      first: $first
      last: $last
      before: $before
      after: $after
      window: $window
    ) {
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
      edges {
        cursor
        node {
          ...LeaderboardUserFields
        }
      }
      nodes {
        ...LeaderboardUserFields
      }
    }
  }
}
    ${Ce}`;let co=(()=>{class y extends t.AE{constructor(se){super(se),this.document=hi}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const Mr=t.Ps`
    query UserSubmissionsLeaderboard($window: TimeWindow, $first: Int, $last: Int, $before: String, $after: String) {
  userLeaderboards {
    submissionsLeaderboard(
      first: $first
      last: $last
      before: $before
      after: $after
      window: $window
    ) {
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
      edges {
        cursor
        node {
          ...LeaderboardUserFields
        }
      }
      nodes {
        ...LeaderboardUserFields
      }
    }
  }
}
    ${Ce}`;let fr=(()=>{class y extends t.AE{constructor(se){super(se),this.document=Mr}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const Dr=t.Ps`
    query UserPopover($userId: Int!) {
  user(id: $userId) {
    ...popoverUser
  }
}
    ${Re}`;let Vr=(()=>{class y extends t.AE{constructor(se){super(se),this.document=Dr}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const mr=t.Ps`
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
    ${_t}`;let Da=(()=>{class y extends t.AE{constructor(se){super(se),this.document=mr}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const ns=t.Ps`
    query VariantGroupPopover($variantGroupId: Int!) {
  variantGroup(id: $variantGroupId) {
    ...variantGroupPopoverFields
  }
}
    ${en}`;let _s=(()=>{class y extends t.AE{constructor(se){super(se),this.document=ns}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const oc=t.Ps`
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
    lastUpdated
    edges {
      cursor
      node {
        ...BrowseVariantGroupRowFields
      }
    }
  }
}
    ${Gt}`;let jl=(()=>{class y extends t.AE{constructor(se){super(se),this.document=oc}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const ic=t.Ps`
    query VariantTypePopover($variantTypeId: Int!) {
  variantTypePopover(id: $variantTypeId) {
    ...variantTypePopover
  }
}
    ${An}`;let Gr=(()=>{class y extends t.AE{constructor(se){super(se),this.document=ic}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const Pn=t.Ps`
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
    ${Tn}`;let Go=(()=>{class y extends t.AE{constructor(se){super(se),this.document=Pn}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const Kc=t.Ps`
    query CoordinatesCard($variantId: Int!) {
  variant(id: $variantId) {
    ...CoordinatesCardFields
  }
}
    ${so}`;let oa=(()=>{class y extends t.AE{constructor(se){super(se),this.document=Kc}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const Fi=t.Ps`
    query VariantPopover($variantId: Int!) {
  variant(id: $variantId) {
    ...variantPopoverFields
  }
}
    ${Bo}`;let ys=(()=>{class y extends t.AE{constructor(se){super(se),this.document=Fi}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const os=t.Ps`
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
    ${ii}`;let Or=(()=>{class y extends t.AE{constructor(se){super(se),this.document=os}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const Oa=t.Ps`
    query VariantTypesForGene($geneId: Int) {
  variantTypes(geneId: $geneId, first: 50) {
    edges {
      node {
        ...menuVariantType
      }
    }
  }
}
    ${xo}`;let Gl=(()=>{class y extends t.AE{constructor(se){super(se),this.document=Oa}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const ia=t.Ps`
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
    lastUpdated
  }
}
    ${ri}`;let r1=(()=>{class y extends t.AE{constructor(se){super(se),this.document=ia}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const rc=t.Ps`
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
    `;let sr=(()=>{class y extends t.AE{constructor(se){super(se),this.document=rc}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const Vi=t.Ps`
    query ViewerNotificationCount {
  notifications {
    unreadCount
  }
}
    `;let Br=(()=>{class y extends t.AE{constructor(se){super(se),this.document=Vi}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const Qo=t.Ps`
    mutation AddComment($input: AddCommentInput!) {
  addComment(input: $input) {
    clientMutationId
    comment {
      ...commentListNode
    }
  }
}
    ${yt}`;let wr=(()=>{class y extends t.mm{constructor(se){super(se),this.document=Qo}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const Cs=t.Ps`
    query previewComment($commentText: String!) {
  previewCommentText(commentText: $commentText) {
    ...previewComment
  }
}
    ${_i}`;let sc=(()=>{class y extends t.AE{constructor(se){super(se),this.document=Cs}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const Pr=t.Ps`
    query userTypeahead($queryTerm: String!) {
  userTypeahead(queryTerm: $queryTerm) {
    username
  }
}
    `;let ac=(()=>{class y extends t.AE{constructor(se){super(se),this.document=Pr}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const cc=t.Ps`
    query entityTypeahead($queryTerm: String!) {
  entityTypeahead(queryTerm: $queryTerm) {
    entityId
    tagType
    displayName
  }
}
    `;let lc=(()=>{class y extends t.AE{constructor(se){super(se),this.document=cc}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const uc=t.Ps`
    mutation DeprecateComplexMolecularProfile($molecularProfileId: Int!, $deprecationReason: MolecularProfileDeprecationReasonMutationInput!, $comment: String!, $organizationId: Int) {
  deprecateComplexMolecularProfile(
    input: {molecularProfileId: $molecularProfileId, deprecationReason: $deprecationReason, comment: $comment, organizationId: $organizationId}
  ) {
    molecularProfile {
      id
      name
    }
  }
}
    `;let dc=(()=>{class y extends t.mm{constructor(se){super(se),this.document=uc}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const Jc=t.Ps`
    query EvidenceCountsForMolecularProfile($molecularProfileId: Int!) {
  molecularProfile(id: $molecularProfileId) {
    id
    name
    link
    evidenceCountsByStatus {
      submittedCount
      acceptedCount
    }
  }
}
    `;let wa=(()=>{class y extends t.AE{constructor(se){super(se),this.document=Jc}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const Pa=t.Ps`
    query LinkableGene($geneId: Int!) {
  gene(id: $geneId) {
    id
    name
    link
  }
}
    `;let ks=(()=>{class y extends t.AE{constructor(se){super(se),this.document=Pa}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();t.Ps`
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
    `;const Y=t.Ps`
    mutation FlagEntity($input: FlagEntityInput!) {
  flagEntity(input: $input) {
    flag {
      id
    }
  }
}
    `;let ee=(()=>{class y extends t.mm{constructor(se){super(se),this.document=Y}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const D=t.Ps`
    mutation ResolveFlag($input: ResolveFlagInput!) {
  resolveFlag(input: $input) {
    flag {
      id
    }
  }
}
    `;let ce=(()=>{class y extends t.mm{constructor(se){super(se),this.document=D}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const Pe=t.Ps`
    mutation UpdateSourceSuggestion($input: UpdateSourceSuggestionStatusInput!) {
  updateSourceSuggestionStatus(input: $input) {
    sourceSuggestion {
      id
      status
    }
  }
}
    `;let ut=(()=>{class y extends t.mm{constructor(se){super(se),this.document=Pe}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const mt=t.Ps`
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
    `;let nn=(()=>{class y extends t.mm{constructor(se){super(se),this.document=mt}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const Fn=t.Ps`
    mutation UpdateUserProfile($input: EditUserInput!) {
  editUser(input: $input) {
    user {
      id
    }
  }
}
    `;let io=(()=>{class y extends t.mm{constructor(se){super(se),this.document=Fn}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const uo=t.Ps`
    query Countries {
  countries {
    id
    name
  }
}
    `;let Jo=(()=>{class y extends t.AE{constructor(se){super(se),this.document=uo}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const Ni=t.Ps`
    mutation DeprecateVariant($variantId: Int!, $deprecationReason: VariantDeprecationReason!, $comment: String!, $organizationId: Int) {
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
    `;let ra=(()=>{class y extends t.mm{constructor(se){super(se),this.document=Ni}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const Qr=t.Ps`
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
    `;let Wr=(()=>{class y extends t.AE{constructor(se){super(se),this.document=Qr}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const Zi=t.Ps`
    query AssertionRevisableFields($assertionId: Int!) {
  assertion(id: $assertionId) {
    ...RevisableAssertionFields
  }
}
    ${Po}`;let br=(()=>{class y extends t.AE{constructor(se){super(se),this.document=Zi}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const Xc=t.Ps`
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
    `;let Zl=(()=>{class y extends t.mm{constructor(se){super(se),this.document=Xc}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const el=t.Ps`
    mutation SubmitAssertion($input: SubmitAssertionInput!) {
  submitAssertion(input: $input) {
    clientMutationId
    assertion {
      id
    }
  }
}
    `;let Rs=(()=>{class y extends t.mm{constructor(se){super(se),this.document=el}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const Vs=t.Ps`
    query EvidenceItemRevisableFields($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...RevisableEvidenceFields
  }
}
    ${Si}`;let cs=(()=>{class y extends t.AE{constructor(se){super(se),this.document=Vs}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const Kl=t.Ps`
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
    `;let tl=(()=>{class y extends t.mm{constructor(se){super(se),this.document=Kl}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();t.Ps`
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
    ${No}`;const Td=t.Ps`
    mutation SubmitEvidenceItem($input: SubmitEvidenceItemInput!) {
  submitEvidence(input: $input) {
    clientMutationId
    evidenceItem {
      id
    }
  }
}
    `;let Ia=(()=>{class y extends t.mm{constructor(se){super(se),this.document=Td}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const pc=t.Ps`
    query ExistingEvidenceCount($molecularProfileId: Int!, $sourceId: Int!) {
  evidenceItems(molecularProfileId: $molecularProfileId, sourceId: $sourceId) {
    totalCount
  }
}
    `;let ql=(()=>{class y extends t.AE{constructor(se){super(se),this.document=pc}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const zs=t.Ps`
    query FullyCuratedSource($sourceId: Int!) {
  source(id: $sourceId) {
    fullyCurated
  }
}
    `;let Aa=(()=>{class y extends t.AE{constructor(se){super(se),this.document=zs}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const ls=t.Ps`
    query GeneRevisableFields($geneId: Int!) {
  gene(id: $geneId) {
    ...RevisableGeneFields
  }
}
    ${zo}`;let c1=(()=>{class y extends t.AE{constructor(se){super(se),this.document=ls}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const Xl=t.Ps`
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
    `;let eu=(()=>{class y extends t.mm{constructor(se){super(se),this.document=Xl}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const l1=t.Ps`
    query MolecularProfileRevisableFields($molecularProfileId: Int!) {
  molecularProfile(id: $molecularProfileId) {
    ...RevisableMolecularProfileFields
  }
}
    ${yi}`;let is=(()=>{class y extends t.AE{constructor(se){super(se),this.document=l1}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const u1=t.Ps`
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
    `;let hc=(()=>{class y extends t.mm{constructor(se){super(se),this.document=u1}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const fc=t.Ps`
    mutation SubmitSource($input: SuggestSourceInput!) {
  suggestSource(input: $input) {
    clientMutationId
    sourceSuggestion {
      id
    }
  }
}
    `;let mc=(()=>{class y extends t.mm{constructor(se){super(se),this.document=fc}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const gc=t.Ps`
    query SourceSuggestionChecks($sourceId: Int!) {
  source(id: $sourceId) {
    fullyCurated
  }
  sourceSuggestions(sourceId: $sourceId) {
    filteredCount
  }
}
    `;let nl=(()=>{class y extends t.AE{constructor(se){super(se),this.document=gc}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const Md=t.Ps`
    query VariantRevisableFields($variantId: Int!) {
  variant(id: $variantId) {
    ...RevisableVariantFields
  }
}
    ${Di}`;let d1=(()=>{class y extends t.AE{constructor(se){super(se),this.document=Md}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const p1=t.Ps`
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
    `;let tu=(()=>{class y extends t.mm{constructor(se){super(se),this.document=p1}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const nu=t.Ps`
    query VariantGroupRevisableFields($variantGroupId: Int!) {
  variantGroup(id: $variantGroupId) {
    ...VariantGroupRevisableFields
  }
}
    ${zn}`;let vc=(()=>{class y extends t.AE{constructor(se){super(se),this.document=nu}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const Fa=t.Ps`
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
    `;let Ts=(()=>{class y extends t.mm{constructor(se){super(se),this.document=Fa}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();t.Ps`
    query VariantGroupSubmittableFields($variantGroupId: Int!) {
  variantGroup(id: $variantGroupId) {
    ...SubmittableVariantGroupFields
  }
}
    ${ai}`;const ol=t.Ps`
    mutation SubmitVariantGroup($input: SubmitVariantGroupInput!) {
  submitVariantGroup(input: $input) {
    clientMutationId
    variantGroup {
      id
    }
  }
}
    `;let Bs=(()=>{class y extends t.mm{constructor(se){super(se),this.document=ol}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const ru=t.Ps`
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
    `;let il=(()=>{class y extends t.AE{constructor(se){super(se),this.document=ru}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const _c=t.Ps`
    query AcmgCodeSelectTypeahead($code: String!) {
  acmgCodesTypeahead(queryTerm: $code) {
    ...AcmgCodeSelectTypeaheadFields
  }
}
    ${Lo}`;let su=(()=>{class y extends t.AE{constructor(se){super(se),this.document=_c}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const rl=t.Ps`
    query AcmgCodeSelectTag($id: Int!) {
  acmgCode(id: $id) {
    ...AcmgCodeSelectTypeaheadFields
  }
}
    ${Lo}`;let yc=(()=>{class y extends t.AE{constructor(se){super(se),this.document=rl}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const Hs=t.Ps`
    query ClingenCodeSelectTypeahead($code: String!) {
  clingenCodesTypeahead(queryTerm: $code) {
    ...ClingenCodeSelectTypeaheadFields
  }
}
    ${Qi}`;let Ys=(()=>{class y extends t.AE{constructor(se){super(se),this.document=Hs}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const $s=t.Ps`
    query ClingenCodeSelectTag($id: Int!) {
  clingenCode(id: $id) {
    ...ClingenCodeSelectTypeaheadFields
  }
}
    ${Qi}`;let sl=(()=>{class y extends t.AE{constructor(se){super(se),this.document=$s}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const Cc=t.Ps`
    mutation QuickAddDisease($name: String!, $doid: String) {
  addDisease(input: {name: $name, doid: $doid}) {
    ...QuickAddDiseaseFields
  }
}
    ${Oi}`;let sa=(()=>{class y extends t.mm{constructor(se){super(se),this.document=Cc}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const h1=t.Ps`
    query DiseaseSelectTypeahead($name: String!) {
  diseaseTypeahead(queryTerm: $name) {
    ...DiseaseSelectTypeaheadFields
  }
}
    ${ui}`;let au=(()=>{class y extends t.AE{constructor(se){super(se),this.document=h1}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const f1=t.Ps`
    query DiseaseSelectTag($id: Int!) {
  disease(id: $id) {
    ...DiseaseSelectTypeaheadFields
  }
}
    ${ui}`;let m1=(()=>{class y extends t.AE{constructor(se){super(se),this.document=f1}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const g1=t.Ps`
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
    ${ni}`;let v1=(()=>{class y extends t.AE{constructor(se){super(se),this.document=g1}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const _1=t.Ps`
    query EvidenceSelectTypeahead($eid: Int!) {
  evidenceItems(id: $eid) {
    nodes {
      ...EvidenceSelectTypeaheadFields
    }
  }
}
    ${Bi}`;let y1=(()=>{class y extends t.AE{constructor(se){super(se),this.document=_1}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const aa=t.Ps`
    query EvidenceSelectTag($eid: Int!) {
  evidenceItem(id: $eid) {
    ...EvidenceSelectTypeaheadFields
  }
}
    ${Bi}`;let C1=(()=>{class y extends t.AE{constructor(se){super(se),this.document=aa}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const cu=t.Ps`
    query GeneSelectTypeahead($entrezSymbol: String!) {
  geneTypeahead(queryTerm: $entrezSymbol) {
    ...GeneSelectTypeaheadFields
  }
}
    ${dr}`;let Ui=(()=>{class y extends t.AE{constructor(se){super(se),this.document=cu}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const al=t.Ps`
    query GeneSelectTag($geneId: Int!) {
  gene(id: $geneId) {
    ...GeneSelectTypeaheadFields
  }
}
    ${dr}`;let ca=(()=>{class y extends t.AE{constructor(se){super(se),this.document=al}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const lu=t.Ps`
    query MolecularProfileSelectTypeahead($name: String!, $geneId: Int) {
  molecularProfiles(name: $name, geneId: $geneId, first: 25) {
    nodes {
      ...MolecularProfileSelectTypeaheadFields
    }
  }
}
    ${Xn}`;let Ir=(()=>{class y extends t.AE{constructor(se){super(se),this.document=lu}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const la=t.Ps`
    query MolecularProfileSelectTag($molecularProfileId: Int!) {
  molecularProfile(id: $molecularProfileId) {
    ...MolecularProfileSelectTypeaheadFields
  }
}
    ${Xn}`;let cl=(()=>{class y extends t.AE{constructor(se){super(se),this.document=la}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const Na=t.Ps`
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
    ${_r}`;let ua=(()=>{class y extends t.AE{constructor(se){super(se),this.document=Na}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const uu=t.Ps`
    query MpExpressionEditorPrepopulate($mpId: Int!) {
  molecularProfile(id: $mpId) {
    id
    parsedName {
      ...MolecularProfileParsedName
    }
    rawName
  }
}
    ${Dt}`;let ll=(()=>{class y extends t.AE{constructor(se){super(se),this.document=uu}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const ul=t.Ps`
    mutation CreateMolecularProfile2($mpStructure: MolecularProfileComponentInput!, $organizationId: Int) {
  createMolecularProfile(
    input: {structure: $mpStructure, organizationId: $organizationId}
  ) {
    molecularProfile {
      id
      name
      link
    }
  }
}
    `;let z1=(()=>{class y extends t.mm{constructor(se){super(se),this.document=ul}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const Sr=t.Ps`
    query NccnGuidelineSelectTypeahead($name: String!) {
  nccnGuidelinesTypeahead(queryTerm: $name) {
    ...NccnGuidelineSelectTypeaheadFields
  }
}
    ${ao}`;let zc=(()=>{class y extends t.AE{constructor(se){super(se),this.document=Sr}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const Ms=t.Ps`
    query NccnGuidelineSelectTag($id: Int!) {
  nccnGuideline(id: $id) {
    ...NccnGuidelineSelectTypeaheadFields
  }
}
    ${ao}`;let bd=(()=>{class y extends t.AE{constructor(se){super(se),this.document=Ms}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const dl=t.Ps`
    query PhenotypeSelectTypeahead($name: String!) {
  phenotypeTypeahead(queryTerm: $name) {
    ...PhenotypeSelectTypeaheadFields
  }
}
    ${Zo}`;let du=(()=>{class y extends t.AE{constructor(se){super(se),this.document=dl}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const pu=t.Ps`
    query PhenotypeSelectTag($id: Int!) {
  phenotype(id: $id) {
    ...PhenotypeSelectTypeaheadFields
  }
}
    ${Zo}`;let pl=(()=>{class y extends t.AE{constructor(se){super(se),this.document=pu}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const hl=t.Ps`
    query QuickAddSourceCheckCitation($sourceType: SourceSource!, $citationId: String!) {
  remoteCitation(sourceType: $sourceType, citationId: $citationId)
}
    `;let Tc=(()=>{class y extends t.AE{constructor(se){super(se),this.document=hl}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const fl=t.Ps`
    mutation QuickAddSourceRemoteCitation($input: AddRemoteCitationInput!) {
  addRemoteCitation(input: $input) {
    newSource {
      id
      citationId
      sourceType
    }
  }
}
    `;let Mc=(()=>{class y extends t.mm{constructor(se){super(se),this.document=fl}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const La=t.Ps`
    query SourceSelectTypeahead($partialCitationId: String!, $sourceType: SourceSource!) {
  sourceTypeahead(citationId: $partialCitationId, sourceType: $sourceType) {
    ...SourceSelectTypeaheadFields
  }
}
    ${eo}`;let ml=(()=>{class y extends t.AE{constructor(se){super(se),this.document=La}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const ka=t.Ps`
    query SourceSelectTag($id: Int!) {
  source(id: $id) {
    ...SourceSelectTypeaheadFields
  }
}
    ${eo}`;let hu=(()=>{class y extends t.AE{constructor(se){super(se),this.document=ka}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const Ra=t.Ps`
    mutation QuickAddTherapy($name: String!, $ncitId: String) {
  addTherapy(input: {name: $name, ncitId: $ncitId}) {
    ...QuickAddTherapyFields
  }
}
    ${ko}`;let fu=(()=>{class y extends t.mm{constructor(se){super(se),this.document=Ra}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const gl=t.Ps`
    query TherapySelectTypeahead($name: String!) {
  therapyTypeahead(queryTerm: $name) {
    ...TherapySelectTypeaheadFields
  }
}
    ${si}`;let bc=(()=>{class y extends t.AE{constructor(se){super(se),this.document=gl}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const Va=t.Ps`
    query TherapySelectTag($id: Int!) {
  therapy(id: $id) {
    ...TherapySelectTypeaheadFields
  }
}
    ${si}`;let Sc=(()=>{class y extends t.AE{constructor(se){super(se),this.document=Va}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const vl=t.Ps`
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
    ${ri}`;let mu=(()=>{class y extends t.AE{constructor(se){super(se),this.document=vl}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const Us=t.Ps`
    mutation QuickAddVariant($name: String!, $geneId: Int!, $organizationId: Int) {
  createVariant(
    input: {name: $name, geneId: $geneId, organizationId: $organizationId}
  ) {
    ...QuickAddVariantFields
  }
}
    ${Fo}`;let da=(()=>{class y extends t.mm{constructor(se){super(se),this.document=Us}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const gu=t.Ps`
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
    ${di}`;let T1=(()=>{class y extends t.AE{constructor(se){super(se),this.document=gu}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const _l=t.Ps`
    query VariantSelectTag($variantId: Int!) {
  variant(id: $variantId) {
    ...VariantSelectTypeaheadFields
  }
}
    ${di}`;let vu=(()=>{class y extends t.AE{constructor(se){super(se),this.document=_l}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const Sd=t.Ps`
    query VariantTypeSelectTypeahead($name: String!) {
  variantTypeTypeahead(queryTerm: $name) {
    ...VariantTypeSelectTypeaheadFields
  }
}
    ${er}`;let _u=(()=>{class y extends t.AE{constructor(se){super(se),this.document=Sd}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const yu=t.Ps`
    query VariantTypeSelectTag($id: Int!) {
  variantType(id: $id) {
    ...VariantTypeSelectTypeaheadFields
  }
}
    ${er}`;let yl=(()=>{class y extends t.AE{constructor(se){super(se),this.document=yu}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const Ba=t.Ps`
    query AssertionDetail($assertionId: Int!) {
  assertion(id: $assertionId) {
    ...AssertionDetailFields
  }
}
    ${Nn}`;let Cl=(()=>{class y extends t.AE{constructor(se){super(se),this.document=Ba}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const Cu=t.Ps`
    query AssertionSummary($assertionId: Int!) {
  assertion(id: $assertionId) {
    ...AssertionSummaryFields
  }
}
    ${lo}`;let zl=(()=>{class y extends t.AE{constructor(se){super(se),this.document=Cu}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const M1=t.Ps`
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
    `;let Tl=(()=>{class y extends t.AE{constructor(se){super(se),this.document=M1}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const b1=t.Ps`
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
    `;let zu=(()=>{class y extends t.AE{constructor(se){super(se),this.document=b1}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const S1=t.Ps`
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
    `;let Ec=(()=>{class y extends t.AE{constructor(se){super(se),this.document=S1}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const E1=t.Ps`
    query DiseasesSummary($diseaseId: Int!) {
  disease(id: $diseaseId) {
    ...DiseasesSummaryFields
  }
}
    ${Xo}`;let x1=(()=>{class y extends t.AE{constructor(se){super(se),this.document=E1}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const Ki=t.Ps`
    query EvidenceDetail($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...EvidenceDetailFields
  }
}
    ${no}`;let Tu=(()=>{class y extends t.AE{constructor(se){super(se),this.document=Ki}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const D1=t.Ps`
    query EvidenceSummary($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...EvidenceSummaryFields
  }
}
    ${Ve}`;let O1=(()=>{class y extends t.AE{constructor(se){super(se),this.document=D1}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const Mu=t.Ps`
    query GeneDetail($geneId: Int!) {
  gene(id: $geneId) {
    ...GeneDetailFields
  }
}
    ${oe}`;let w1=(()=>{class y extends t.AE{constructor(se){super(se),this.document=Mu}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const bu=t.Ps`
    query GenesSummary($geneId: Int!) {
  gene(id: $geneId) {
    ...GeneSummaryFields
  }
}
    ${De}`;let pa=(()=>{class y extends t.AE{constructor(se){super(se),this.document=bu}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const ha=t.Ps`
    query MolecularProfileDetail($mpId: Int!) {
  molecularProfile(id: $mpId) {
    ...MolecularProfileDetailFields
  }
}
    ${Ue}`;let xc=(()=>{class y extends t.AE{constructor(se){super(se),this.document=ha}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const Dc=t.Ps`
    query MolecularProfileSummary($mpId: Int!) {
  molecularProfile(id: $mpId) {
    ...MolecularProfileSummaryFields
  }
}
    ${Nt}`;let Ml=(()=>{class y extends t.AE{constructor(se){super(se),this.document=Dc}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const bs=t.Ps`
    query OrganizationDetail($organizationId: Int!) {
  organization(id: $organizationId) {
    ...OrganizationDetailFields
  }
}
    ${Jt}`;let Ha=(()=>{class y extends t.AE{constructor(se){super(se),this.document=bs}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const bl=t.Ps`
    query OrganizationGroups($organizationId: Int!) {
  organization(id: $organizationId) {
    subGroups {
      ...OrganizationGroupsFields
    }
  }
}
    ${sn}`;let js=(()=>{class y extends t.AE{constructor(se){super(se),this.document=bl}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const Ya=t.Ps`
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
    ${Qt}`;let Zr=(()=>{class y extends t.AE{constructor(se){super(se),this.document=Ya}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const Su=t.Ps`
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
    `;let Eu=(()=>{class y extends t.AE{constructor(se){super(se),this.document=Su}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const xu=t.Ps`
    query DataReleases {
  dataReleases {
    ...Release
  }
}
    ${_n}`;let Sl=(()=>{class y extends t.AE{constructor(se){super(se),this.document=xu}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const Oc=t.Ps`
    query SourceDetail($sourceId: Int!) {
  source(id: $sourceId) {
    ...SourceDetailFields
  }
}
    ${Rn}`;let Du=(()=>{class y extends t.AE{constructor(se){super(se),this.document=Oc}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const Ou=t.Ps`
    query SourceSummary($sourceId: Int!) {
  source(id: $sourceId) {
    ...SourceSummaryFields
  }
}
    ${bn}`;let wu=(()=>{class y extends t.AE{constructor(se){super(se),this.document=Ou}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const Ss=t.Ps`
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
    `;let Pu=(()=>{class y extends t.AE{constructor(se){super(se),this.document=Ss}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const Iu=t.Ps`
    query TherapiesSummary($therapyId: Int!) {
  therapy(id: $therapyId) {
    ...TherapiesSummaryFields
  }
}
    ${On}`;let lr=(()=>{class y extends t.AE{constructor(se){super(se),this.document=Iu}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const wc=t.Ps`
    query UserDetail($userId: Int!) {
  user(id: $userId) {
    ...UserDetailFields
  }
}
    ${Qn}`;let El=(()=>{class y extends t.AE{constructor(se){super(se),this.document=wc}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const Pc=t.Ps`
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
    ${Zn}
${Un}
${Vn}
${yo}`;let ar=(()=>{class y extends t.AE{constructor(se){super(se),this.document=Pc}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const fa=t.Ps`
    mutation UpdateNotificationStatus($input: UpdateNotificationStatusInput!) {
  updateNotificationStatus(input: $input) {
    notifications {
      ...notificationNode
    }
  }
}
    ${yo}`;let xl=(()=>{class y extends t.mm{constructor(se){super(se),this.document=fa}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const Dl=t.Ps`
    mutation Unsubscribe($input: UnsubscribeInput!) {
  unsubscribe(input: $input) {
    unsubscribedEntities {
      ...subscribable
    }
  }
}
    ${Kn}`;let Ed=(()=>{class y extends t.mm{constructor(se){super(se),this.document=Dl}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const P1=t.Ps`
    mutation Subscribe($input: SubscribeInput!) {
  subscribe(input: $input) {
    subscriptions {
      id
    }
  }
}
    `;let xd=(()=>{class y extends t.mm{constructor(se){super(se),this.document=P1}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const Au=t.Ps`
    query VariantGroupDetail($variantGroupId: Int!) {
  variantGroup(id: $variantGroupId) {
    ...VariantGroupDetailFields
  }
}
    ${go}`;let I1=(()=>{class y extends t.AE{constructor(se){super(se),this.document=Au}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const Fu=t.Ps`
    query VariantGroupsSummary($variantGroupId: Int!) {
  variantGroup(id: $variantGroupId) {
    ...VariantGroupSummaryFields
  }
}
    ${So}`;let Dd=(()=>{class y extends t.AE{constructor(se){super(se),this.document=Fu}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const A1=t.Ps`
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
    `;let Ol=(()=>{class y extends t.AE{constructor(se){super(se),this.document=A1}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const Ic=t.Ps`
    query VariantDetail($variantId: Int!) {
  variant(id: $variantId) {
    ...VariantDetailFields
  }
}
    ${qn}`;let Gs=(()=>{class y extends t.AE{constructor(se){super(se),this.document=Ic}}return y.\u0275fac=function(se){return new(se||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const ma=t.Ps`
    query VariantSummary($variantId: Int!) {
  variant(id: $variantId) {
    ...VariantSummaryFields
  }
}