"use strict";(self.webpackChunkmain=self.webpackChunkmain||[]).push([[179],{4265:(Ot,be,a)=>{a.d(be,{T6:()=>V,VD:()=>U,WE:()=>Q,Yt:()=>M,lC:()=>v,py:()=>L,rW:()=>i,s:()=>A,ve:()=>s,vq:()=>Y});var t=a(6337);function i(e,I,k){return{r:255*(0,t.sh)(e,255),g:255*(0,t.sh)(I,255),b:255*(0,t.sh)(k,255)}}function v(e,I,k){e=(0,t.sh)(e,255),I=(0,t.sh)(I,255),k=(0,t.sh)(k,255);var ge=Math.max(e,I,k),Ce=Math.min(e,I,k),Z=0,F=0,R=(ge+Ce)/2;if(ge===Ce)F=0,Z=0;else{var O=ge-Ce;switch(F=R>.5?O/(2-ge-Ce):O/(ge+Ce),ge){case e:Z=(I-k)/O+(I<k?6:0);break;case I:Z=(k-e)/O+2;break;case k:Z=(e-I)/O+4}Z/=6}return{h:Z,s:F,l:R}}function d(e,I,k){return k<0&&(k+=1),k>1&&(k-=1),k<1/6?e+6*k*(I-e):k<.5?I:k<2/3?e+(I-e)*(2/3-k)*6:e}function s(e,I,k){var ge,Ce,Z;if(e=(0,t.sh)(e,360),I=(0,t.sh)(I,100),k=(0,t.sh)(k,100),0===I)Ce=k,Z=k,ge=k;else{var F=k<.5?k*(1+I):k+I-k*I,R=2*k-F;ge=d(R,F,e+1/3),Ce=d(R,F,e),Z=d(R,F,e-1/3)}return{r:255*ge,g:255*Ce,b:255*Z}}function L(e,I,k){e=(0,t.sh)(e,255),I=(0,t.sh)(I,255),k=(0,t.sh)(k,255);var ge=Math.max(e,I,k),Ce=Math.min(e,I,k),Z=0,F=ge,R=ge-Ce,O=0===ge?0:R/ge;if(ge===Ce)Z=0;else{switch(ge){case e:Z=(I-k)/R+(I<k?6:0);break;case I:Z=(k-e)/R+2;break;case k:Z=(e-I)/R+4}Z/=6}return{h:Z,s:O,v:F}}function Q(e,I,k){e=6*(0,t.sh)(e,360),I=(0,t.sh)(I,100),k=(0,t.sh)(k,100);var ge=Math.floor(e),Ce=e-ge,Z=k*(1-I),F=k*(1-Ce*I),R=k*(1-(1-Ce)*I),O=ge%6;return{r:255*[k,F,Z,Z,R,k][O],g:255*[R,k,k,F,Z,Z][O],b:255*[Z,Z,R,k,k,F][O]}}function Y(e,I,k,ge){var Ce=[(0,t.FZ)(Math.round(e).toString(16)),(0,t.FZ)(Math.round(I).toString(16)),(0,t.FZ)(Math.round(k).toString(16))];return ge&&Ce[0].startsWith(Ce[0].charAt(1))&&Ce[1].startsWith(Ce[1].charAt(1))&&Ce[2].startsWith(Ce[2].charAt(1))?Ce[0].charAt(0)+Ce[1].charAt(0)+Ce[2].charAt(0):Ce.join("")}function A(e,I,k,ge,Ce){var Z=[(0,t.FZ)(Math.round(e).toString(16)),(0,t.FZ)(Math.round(I).toString(16)),(0,t.FZ)(Math.round(k).toString(16)),(0,t.FZ)(N(ge))];return Ce&&Z[0].startsWith(Z[0].charAt(1))&&Z[1].startsWith(Z[1].charAt(1))&&Z[2].startsWith(Z[2].charAt(1))&&Z[3].startsWith(Z[3].charAt(1))?Z[0].charAt(0)+Z[1].charAt(0)+Z[2].charAt(0)+Z[3].charAt(0):Z.join("")}function N(e){return Math.round(255*parseFloat(e)).toString(16)}function V(e){return U(e)/255}function U(e){return parseInt(e,16)}function M(e){return{r:e>>16,g:(65280&e)>>8,b:255&e}}},1309:(Ot,be,a)=>{a.d(be,{R:()=>t});var t={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"}},6379:(Ot,be,a)=>{a.d(be,{uA:()=>d});var t=a(4265),i=a(1309),v=a(6337);function d(U){var M={r:0,g:0,b:0},e=1,I=null,k=null,ge=null,Ce=!1,Z=!1;return"string"==typeof U&&(U=function N(U){if(0===(U=U.trim().toLowerCase()).length)return!1;var M=!1;if(i.R[U])U=i.R[U],M=!0;else if("transparent"===U)return{r:0,g:0,b:0,a:0,format:"name"};var e=S.rgb.exec(U);return e?{r:e[1],g:e[2],b:e[3]}:(e=S.rgba.exec(U))?{r:e[1],g:e[2],b:e[3],a:e[4]}:(e=S.hsl.exec(U))?{h:e[1],s:e[2],l:e[3]}:(e=S.hsla.exec(U))?{h:e[1],s:e[2],l:e[3],a:e[4]}:(e=S.hsv.exec(U))?{h:e[1],s:e[2],v:e[3]}:(e=S.hsva.exec(U))?{h:e[1],s:e[2],v:e[3],a:e[4]}:(e=S.hex8.exec(U))?{r:(0,t.VD)(e[1]),g:(0,t.VD)(e[2]),b:(0,t.VD)(e[3]),a:(0,t.T6)(e[4]),format:M?"name":"hex8"}:(e=S.hex6.exec(U))?{r:(0,t.VD)(e[1]),g:(0,t.VD)(e[2]),b:(0,t.VD)(e[3]),format:M?"name":"hex"}:(e=S.hex4.exec(U))?{r:(0,t.VD)(e[1]+e[1]),g:(0,t.VD)(e[2]+e[2]),b:(0,t.VD)(e[3]+e[3]),a:(0,t.T6)(e[4]+e[4]),format:M?"name":"hex8"}:!!(e=S.hex3.exec(U))&&{r:(0,t.VD)(e[1]+e[1]),g:(0,t.VD)(e[2]+e[2]),b:(0,t.VD)(e[3]+e[3]),format:M?"name":"hex"}}(U)),"object"==typeof U&&(V(U.r)&&V(U.g)&&V(U.b)?(M=(0,t.rW)(U.r,U.g,U.b),Ce=!0,Z="%"===String(U.r).substr(-1)?"prgb":"rgb"):V(U.h)&&V(U.s)&&V(U.v)?(I=(0,v.JX)(U.s),k=(0,v.JX)(U.v),M=(0,t.WE)(U.h,I,k),Ce=!0,Z="hsv"):V(U.h)&&V(U.s)&&V(U.l)&&(I=(0,v.JX)(U.s),ge=(0,v.JX)(U.l),M=(0,t.ve)(U.h,I,ge),Ce=!0,Z="hsl"),Object.prototype.hasOwnProperty.call(U,"a")&&(e=U.a)),e=(0,v.Yq)(e),{ok:Ce,format:U.format||Z,r:Math.min(255,Math.max(M.r,0)),g:Math.min(255,Math.max(M.g,0)),b:Math.min(255,Math.max(M.b,0)),a:e}}var Q="(?:".concat("[-\\+]?\\d*\\.\\d+%?",")|(?:").concat("[-\\+]?\\d+%?",")"),Y="[\\s|\\(]+(".concat(Q,")[,|\\s]+(").concat(Q,")[,|\\s]+(").concat(Q,")\\s*\\)?"),A="[\\s|\\(]+(".concat(Q,")[,|\\s]+(").concat(Q,")[,|\\s]+(").concat(Q,")[,|\\s]+(").concat(Q,")\\s*\\)?"),S={CSS_UNIT:new RegExp(Q),rgb:new RegExp("rgb"+Y),rgba:new RegExp("rgba"+A),hsl:new RegExp("hsl"+Y),hsla:new RegExp("hsla"+A),hsv:new RegExp("hsv"+Y),hsva:new RegExp("hsva"+A),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function V(U){return!!S.CSS_UNIT.exec(String(U))}},6337:(Ot,be,a)=>{function t(Y,A){(function v(Y){return"string"==typeof Y&&-1!==Y.indexOf(".")&&1===parseFloat(Y)})(Y)&&(Y="100%");var S=function d(Y){return"string"==typeof Y&&-1!==Y.indexOf("%")}(Y);return Y=360===A?Y:Math.min(A,Math.max(0,parseFloat(Y))),S&&(Y=parseInt(String(Y*A),10)/100),Math.abs(Y-A)<1e-6?1:Y=360===A?(Y<0?Y%A+A:Y%A)/parseFloat(String(A)):Y%A/parseFloat(String(A))}function i(Y){return Math.min(1,Math.max(0,Y))}function s(Y){return Y=parseFloat(Y),(isNaN(Y)||Y<0||Y>1)&&(Y=1),Y}function L(Y){return Y<=1?"".concat(100*Number(Y),"%"):Y}function Q(Y){return 1===Y.length?"0"+Y:String(Y)}a.d(be,{FZ:()=>Q,JX:()=>L,V2:()=>i,Yq:()=>s,sh:()=>t})},3369:(Ot,be,a)=>{a.d(be,{G:()=>j});var t=a(5879),i=a(6814),v=a(4190),d=a(551),s=a(5695),L=a(7417),Q=a(5676),Y=a(7398),A=a(2181),S=a(313),N=a(2962),V=a(8125),U=a(3317),M=a(8091),e=a(2616);function I(me,re){if(1&me&&(t._UZ(0,"i",9),t.ALo(1,"entityColor"),t._uU(2)),2&me){const he=t.oxw().ngIf;t.Q6J("nzTwotoneColor",t.lcZ(1,2,"ClinicalTrial")),t.xp6(2),t.hij(" ",he.nctId," ")}}function k(me,re){if(1&me&&(t.TgZ(0,"cvc-link-tag",10),t._uU(1," View on clinicaltrials.gov "),t.qZA()),2&me){const he=t.oxw().ngIf;t.Q6J("href",he.url)}}function ge(me,re){if(1&me&&(t.ynx(0),t.TgZ(1,"nz-card",2),t.YNc(2,I,3,4,"ng-template",null,3,t.W1O),t.YNc(4,k,2,1,"ng-template",null,4,t.W1O),t.TgZ(6,"nz-descriptions",5)(7,"nz-descriptions-item",6),t._uU(8),t.qZA(),t.TgZ(9,"nz-descriptions-item",7),t._uU(10),t.qZA(),t.TgZ(11,"nz-descriptions-item",8),t._uU(12),t.qZA()()(),t.BQk()),2&me){const he=re.ngIf,Me=t.MAs(3),Oe=t.MAs(5);t.xp6(1),t.Q6J("nzTitle",Me)("nzExtra",Oe),t.xp6(5),t.Q6J("nzColumn",2),t.xp6(2),t.hij(" ",he.name," "),t.xp6(2),t.hij(" ",he.sourceCount," "),t.xp6(2),t.hij(" ",he.evidenceCount," ")}}let Ce=(()=>{class me{constructor(he){this.gql=he}ngOnInit(){if(null==this.clinicalTrialId)throw new Error("cvc-clinical-trial-popover requires valid clinicalTrialId input.");this.clinicalTrial$=this.gql.watch({clinicalTrialId:this.clinicalTrialId}).valueChanges.pipe((0,Y.U)(({data:he})=>he?.clinicalTrials.edges[0]?.node),(0,A.h)(Q.ep))}}return me.\u0275fac=function(he){return new(he||me)(t.Y36(S.UIR))},me.\u0275cmp=t.Xpm({type:me,selectors:[["cvc-clinical-trial-popover"]],inputs:{clinicalTrialId:"clinicalTrialId"},decls:3,vars:3,consts:[["id","popover-content"],[4,"ngIf"],["nzBordered","false","id","card-content",3,"nzTitle","nzExtra"],["cardTitle",""],["linkout",""],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","Name","nzSpan","2"],["nzTitle","Sources","nzSpan","2"],["nzTitle","Evidence","nzSpan","2"],["nz-icon","","nzTheme","twotone","nzType","civic-clinicaltrial",3,"nzTwotoneColor"],[3,"href"]],template:function(he,Me){1&he&&(t.TgZ(0,"div",0),t.YNc(1,ge,13,6,"ng-container",1),t.ALo(2,"ngrxPush"),t.qZA()),2&he&&(t.xp6(1),t.Q6J("ngIf",t.lcZ(2,1,Me.clinicalTrial$)))},dependencies:[i.O5,N.bd,d.Ls,V.R7,V.uj,U.l,M.fM,e.a],styles:["[_nghost-%COMP%]{display:block;margin:-8px -12px}[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}[_nghost-%COMP%]     .ant-descriptions-view{border:none}[_nghost-%COMP%]     #entity-child-counts{border-top:1px solid #f0f0f0;padding:8px}[_nghost-%COMP%]     #entity-child-counts nz-space{width:100%}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child nz-tag{margin-right:0}.popover-text[_ngcontent-%COMP%]{width:100%;padding:8px;border-bottom:1px solid #f0f0f0}#popover-content[_ngcontent-%COMP%]{min-width:350px;max-width:500px;min-height:125px}"]}),me})();function Z(me,re){}function F(me,re){if(1&me&&(t.ynx(0),t.TgZ(1,"a",4),t.YNc(2,Z,0,0,"ng-template",5),t.qZA(),t.BQk()),2&me){const he=t.oxw(),Me=t.MAs(2);t.xp6(1),t.Q6J("routerLink",he.clinicalTrial.link),t.xp6(1),t.Q6J("ngTemplateOutlet",Me)}}function R(me,re){}function O(me,re){if(1&me&&t._UZ(0,"cvc-clinical-trial-popover",8),2&me){const he=t.oxw(2);t.Q6J("clinicalTrialId",he.clinicalTrial.id)}}function P(me,re){if(1&me&&(t.TgZ(0,"nz-tag",6),t.YNc(1,R,0,0,"ng-template",5),t.qZA(),t.YNc(2,O,1,1,"ng-template",null,7,t.W1O)),2&me){const he=t.MAs(3),Me=t.oxw(),Oe=t.MAs(6);t.Q6J("nzPopoverMouseEnterDelay",.5)("nzPopoverContent",he)("nzPopoverTrigger",Me.enablePopover?"hover":null),t.xp6(1),t.Q6J("ngTemplateOutlet",Oe)}}function x(me,re){}function de(me,re){if(1&me&&t.YNc(0,x,0,0,"ng-template",5),2&me){t.oxw();const he=t.MAs(2);t.Q6J("ngTemplateOutlet",he)}}function ue(me,re){if(1&me&&(t._UZ(0,"i",9),t.ALo(1,"entityColor"),t._uU(2)),2&me){const he=t.oxw();t.Q6J("nzTwotoneColor",t.lcZ(1,2,"ClinicalTrial")),t.xp6(2),t.hij(" ",he.clinicalTrial.nctId,"\n")}}let j=(()=>{class me{set clinicalTrial(he){if(!he)throw new Error("clinical-trial-tag clinicalTrial Input requires LinkableClinicalTrial.");this._clinicalTrial=he}get clinicalTrial(){return this._clinicalTrial}constructor(){this.linked=!0,this.enablePopover=!0}}return me.\u0275fac=function(he){return new(he||me)},me.\u0275cmp=t.Xpm({type:me,selectors:[["cvc-clinical-trial-tag"]],inputs:{clinicalTrial:"clinicalTrial",linked:"linked",enablePopover:"enablePopover"},decls:7,vars:2,consts:[[4,"ngIf","ngIfElse"],["tag",""],["unlinked",""],["tagContent",""],[3,"routerLink"],[3,"ngTemplateOutlet"],["nz-popover","","nzPopoverPlacement","right",3,"nzPopoverMouseEnterDelay","nzPopoverContent","nzPopoverTrigger"],["clinicalTrialPopover",""],[3,"clinicalTrialId"],["nz-icon","","nzTheme","twotone","nzType","civic-clinicaltrial",3,"nzTwotoneColor"]],template:function(he,Me){if(1&he&&(t.YNc(0,F,3,2,"ng-container",0),t.YNc(1,P,4,4,"ng-template",null,1,t.W1O),t.YNc(3,de,1,1,"ng-template",null,2,t.W1O),t.YNc(5,ue,3,4,"ng-template",null,3,t.W1O)),2&he){const Oe=t.MAs(4);t.Q6J("ngIf",Me.linked)("ngIfElse",Oe)}},dependencies:[i.O5,i.tP,v.rH,d.Ls,s.j,L.lU,Ce,e.a],styles:["[_nghost-%COMP%]{display:block}"]}),me})()},4605:(Ot,be,a)=>{a.d(be,{N:()=>V});var t=a(6814),i=a(4190),v=a(5695),d=a(7417),s=a(6067),L=a(2524),Q=a(2962),Y=a(8125),A=a(551),S=a(5879);let N=(()=>{class U{}return U.\u0275fac=function(e){return new(e||U)},U.\u0275mod=S.oAB({type:U}),U.\u0275inj=S.cJS({imports:[t.ez,Q.vh,A.PV,Y.q6,s.X,L.s]}),U})(),V=(()=>{class U{}return U.\u0275fac=function(e){return new(e||U)},U.\u0275mod=S.oAB({type:U}),U.\u0275inj=S.cJS({imports:[t.ez,i.Bz,A.PV,v.X,d.$6,N,L.s]}),U})()},2851:(Ot,be,a)=>{a.d(be,{I:()=>F});var t=a(5676),i=a(7398),v=a(2181),d=a(5879),s=a(313),L=a(6814),Q=a(2962),Y=a(8125),A=a(551),S=a(2392),N=a(3317),V=a(8091),U=a(5869);function M(R,O){if(1&R&&(d._UZ(0,"i",12),d._uU(1),d.ALo(2,"truncate")),2&R){const P=d.oxw().ngIf;d.xp6(1),d.hij(" ",d.xi3(2,1,P.name,50)," ")}}function e(R,O){if(1&R&&(d.TgZ(0,"cvc-link-tag",14),d._uU(1),d.qZA()),2&R){const P=d.oxw(2).ngIf;d.Q6J("href",P.diseaseUrl),d.xp6(1),d.hij(" DOID: ",P.doid," ")}}function I(R,O){if(1&R&&d.YNc(0,e,2,2,"cvc-link-tag",13),2&R){const P=d.oxw().ngIf,x=d.MAs(7);d.Q6J("ngIf",P.doid)("ngIfElse",x)}}function k(R,O){1&R&&(d.TgZ(0,"span",15),d._uU(1,"No DOID"),d.qZA())}function ge(R,O){if(1&R&&(d.TgZ(0,"nz-descriptions-item",16),d._uU(1),d.qZA()),2&R){const P=d.oxw().ngIf;d.xp6(1),d.hij(" ",P.name," ")}}function Ce(R,O){if(1&R&&(d.TgZ(0,"nz-descriptions-item",17),d._uU(1),d.qZA()),2&R){const P=d.oxw().ngIf;d.xp6(1),d.hij(" ",P.diseaseAliases.join(", ")," ")}}function Z(R,O){if(1&R&&(d.ynx(0),d.TgZ(1,"nz-card",2),d.YNc(2,M,3,4,"ng-template",null,3,d.W1O),d.YNc(4,I,1,2,"ng-template",null,4,d.W1O),d.YNc(6,k,2,0,"ng-template",null,5,d.W1O),d.TgZ(8,"nz-descriptions",6),d.YNc(9,ge,2,1,"nz-descriptions-item",7),d.YNc(10,Ce,2,1,"nz-descriptions-item",8),d.TgZ(11,"nz-descriptions-item",9),d._uU(12),d.qZA(),d.TgZ(13,"nz-descriptions-item",10),d._uU(14),d.qZA(),d.TgZ(15,"nz-descriptions-item",11),d._uU(16),d.qZA()()(),d.BQk()),2&R){const P=O.ngIf,x=d.MAs(3),de=d.MAs(5);d.xp6(1),d.Q6J("nzTitle",x)("nzExtra",de),d.xp6(7),d.Q6J("nzColumn",1),d.xp6(1),d.Q6J("ngIf",P.name.length>50),d.xp6(1),d.Q6J("ngIf",P.diseaseAliases.length>0),d.xp6(2),d.hij(" ",P.assertionCount," "),d.xp6(2),d.hij(" ",P.evidenceItemCount," "),d.xp6(2),d.hij(" ",P.molecularProfileCount," ")}}let F=(()=>{class R{constructor(P){this.gql=P}ngOnInit(){if(null==this.diseaseId)throw new Error("cvc-disease-popover requires valid diseaseId input.");this.disease$=this.gql.watch({diseaseId:this.diseaseId}).valueChanges.pipe((0,i.U)(({data:P})=>P?.diseasePopover),(0,v.h)(t.ep))}}return R.\u0275fac=function(P){return new(P||R)(d.Y36(s.k7O))},R.\u0275cmp=d.Xpm({type:R,selectors:[["cvc-disease-popover"]],inputs:{diseaseId:"diseaseId"},decls:3,vars:3,consts:[["id","popover-content"],[4,"ngIf"],["nzBordered","false","id","card-content",3,"nzTitle","nzExtra"],["cardTitle",""],["linkout",""],["noDoid",""],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","Name","nzSpan","2",4,"ngIf"],["nzTitle","Aliases","nzSpan","2",4,"ngIf"],["nzTitle","Assertions","nzSpan","1"],["nzTitle","Evidence","nzSpan","1"],["nzTitle","Molecular Profiles","nzSpan","1"],["nz-icon","","nzType","civic-disease","nzTheme","twotone","nzTwotoneColor","#E62F76"],["tooltip","View on disease-ontology.org",3,"href",4,"ngIf","ngIfElse"],["tooltip","View on disease-ontology.org",3,"href"],["nz-typography","","nzType","secondary"],["nzTitle","Name","nzSpan","2"],["nzTitle","Aliases","nzSpan","2"]],template:function(P,x){1&P&&(d.TgZ(0,"div",0),d.YNc(1,Z,17,8,"ng-container",1),d.ALo(2,"ngrxPush"),d.qZA()),2&P&&(d.xp6(1),d.Q6J("ngIf",d.lcZ(2,1,x.disease$)))},dependencies:[L.O5,Q.bd,Y.R7,Y.uj,A.Ls,S.ZU,N.l,V.fM,U.W],styles:["[_nghost-%COMP%]{display:block;margin:-8px -12px}[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}[_nghost-%COMP%]     .ant-descriptions-view{border:none}[_nghost-%COMP%]     #entity-child-counts{border-top:1px solid #f0f0f0;padding:8px}[_nghost-%COMP%]     #entity-child-counts nz-space{width:100%}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child nz-tag{margin-right:0}.popover-text[_ngcontent-%COMP%]{width:100%;padding:8px;border-bottom:1px solid #f0f0f0}#popover-content[_ngcontent-%COMP%]{min-width:350px;max-width:500px;min-height:125px}"]}),R})()},5687:(Ot,be,a)=>{a.d(be,{t:()=>A});var t=a(6814),i=a(2962),v=a(8125),d=a(551),s=a(6067),L=a(2392),Q=a(2524),Y=a(5879);let A=(()=>{class S{}return S.\u0275fac=function(V){return new(V||S)},S.\u0275mod=Y.oAB({type:S}),S.\u0275inj=Y.cJS({imports:[t.ez,i.vh,v.q6,d.PV,L.ZJ,Q.s,s.X]}),S})()},9775:(Ot,be,a)=>{a.d(be,{n:()=>Z});var t=a(8130),i=a(5879),v=a(6814),d=a(4190),s=a(5695),L=a(7417),Q=a(551),Y=a(2851),A=a(5869);function S(F,R){}function N(F,R){if(1&F&&(i.ynx(0),i.TgZ(1,"a",4),i.YNc(2,S,0,0,"ng-template",5),i.qZA(),i.BQk()),2&F){const O=i.oxw(),P=i.MAs(2);i.xp6(1),i.Q6J("routerLink",O.disease.link),i.xp6(1),i.Q6J("ngTemplateOutlet",P)}}function V(F,R){}function U(F,R){if(1&F&&i._UZ(0,"cvc-disease-popover",8),2&F){const O=i.oxw(2);i.Q6J("diseaseId",O.disease.id)}}function M(F,R){if(1&F){const O=i.EpF();i.TgZ(0,"nz-tag",6),i.NdJ("nzOnClose",function(x){i.CHM(O);const de=i.oxw();return i.KtG(de.itemClosed(x))}),i.YNc(1,V,0,0,"ng-template",5),i.qZA(),i.YNc(2,U,1,1,"ng-template",null,7,i.W1O)}if(2&F){const O=i.MAs(3),P=i.oxw(),x=i.MAs(6);i.Q6J("nzPopoverMouseEnterDelay",P.onCloseClicked?0:.5)("nzPopoverContent",O)("nzPopoverTrigger",P.enablePopover?"hover":null)("nzMode",P.onCloseClicked?"closeable":"default"),i.xp6(1),i.Q6J("ngTemplateOutlet",x)}}function e(F,R){}function I(F,R){if(1&F&&i.YNc(0,e,0,0,"ng-template",5),2&F){i.oxw();const O=i.MAs(2);i.Q6J("ngTemplateOutlet",O)}}function k(F,R){if(1&F&&(i.ynx(0),i._uU(1),i.ALo(2,"truncate"),i.BQk()),2&F){const O=i.oxw(2);i.xp6(1),i.hij(" ",i.xi3(2,1,O.disease.name,27)," ")}}function ge(F,R){if(1&F&&i._uU(0),2&F){const O=i.oxw(2);i.hij(" ",O.disease.name," ")}}function Ce(F,R){if(1&F&&(i._UZ(0,"i",9),i.YNc(1,k,3,4,"ng-container",0),i.YNc(2,ge,1,1,"ng-template",null,10,i.W1O)),2&F){const O=i.MAs(3),P=i.oxw();i.xp6(1),i.Q6J("ngIf",P.truncateLongName)("ngIfElse",O)}}let Z=(()=>{class F extends t.a{constructor(){super(...arguments),this.enablePopover=!0,this.truncateLongName=!1}set disease(O){if(!O)throw new Error("disease-tag disease Input requires LinkableDisease.");this._disease=O}get disease(){return this._disease}idFunction(){return this.disease.id}}return F.\u0275fac=function(){let R;return function(P){return(R||(R=i.n5z(F)))(P||F)}}(),F.\u0275cmp=i.Xpm({type:F,selectors:[["cvc-disease-tag"]],inputs:{disease:"disease",enablePopover:"enablePopover",truncateLongName:"truncateLongName"},features:[i.qOj],decls:7,vars:2,consts:[[4,"ngIf","ngIfElse"],["tag",""],["unlinked",""],["tagContent",""],[3,"routerLink"],[3,"ngTemplateOutlet"],["nz-popover","","nzPopoverPlacement","right",3,"nzPopoverMouseEnterDelay","nzPopoverContent","nzPopoverTrigger","nzMode","nzOnClose"],["diseasePopover",""],[3,"diseaseId"],["nz-icon","","nzType","civic-disease","nzTheme","twotone","nzTwotoneColor","#E62F76"],["fullName",""]],template:function(O,P){if(1&O&&(i.YNc(0,N,3,2,"ng-container",0),i.YNc(1,M,4,5,"ng-template",null,1,i.W1O),i.YNc(3,I,1,1,"ng-template",null,2,i.W1O),i.YNc(5,Ce,4,2,"ng-template",null,3,i.W1O)),2&O){const x=i.MAs(4);i.Q6J("ngIf",P.linked)("ngIfElse",x)}},dependencies:[v.O5,v.tP,d.rH,s.j,L.lU,Q.Ls,Y.I,A.W],encapsulation:2,changeDetection:0}),F})()},3396:(Ot,be,a)=>{a.d(be,{Q:()=>A});var t=a(6814),i=a(4190),v=a(5695),d=a(7417),s=a(551),L=a(5687),Q=a(2524),Y=a(5879);let A=(()=>{class S{}return S.\u0275fac=function(V){return new(V||S)},S.\u0275mod=Y.oAB({type:S}),S.\u0275inj=Y.cJS({imports:[t.ez,i.Bz,v.X,d.$6,s.PV,Q.s,L.t]}),S})()},8213:(Ot,be,a)=>{a.d(be,{_:()=>yt});var t=a(7398),i=a(2181),v=a(5676),d=a(5879),s=a(313),L=a(6814),Q=a(4190),Y=a(551),A=a(2962),S=a(95),N=a(8125),V=a(5695),U=a(2574),M=a(2392),e=a(4770),I=a(9775),k=a(3897),ge=a(4138),Ce=a(2384),Z=a(2606),F=a(5095),R=a(8091),O=a(6967),P=a(2616);function x(je,Ut){if(1&je&&(d.ynx(0),d._UZ(1,"i",17),d.ALo(2,"entityColor"),d._uU(3),d.BQk()),2&je){const Xt=d.oxw(2).ngIf;d.xp6(1),d.Q6J("nzTwotoneColor",d.lcZ(2,2,"EvidenceItem")),d.xp6(2),d.hij(" ",Xt.name," ")}}function de(je,Ut){if(1&je&&d._UZ(0,"cvc-status-tag",18),2&je){const Xt=d.oxw(2).ngIf;d.Q6J("status",Xt.status)}}function ue(je,Ut){1&je&&(d.TgZ(0,"nz-space"),d.YNc(1,x,4,4,"ng-container",15),d.YNc(2,de,1,1,"cvc-status-tag",16),d.qZA())}function j(je,Ut){if(1&je&&d._UZ(0,"cvc-molecular-profile-tag",19),2&je){const Xt=d.oxw().ngIf;d.Q6J("molecularProfile",Xt.molecularProfile)("enablePopover",!1)("truncateLongName",!0)}}function me(je,Ut){if(1&je&&(d.ynx(0),d._uU(1),d.BQk()),2&je){const Xt=Ut.ngIf;d.xp6(1),d.hij(" ",Xt," ")}}function re(je,Ut){if(1&je&&(d.TgZ(0,"nz-descriptions",20)(1,"nz-descriptions-item",21),d._UZ(2,"cvc-mp-tag-name",22),d.qZA(),d.TgZ(3,"nz-descriptions-item",23),d._UZ(4,"cvc-source-tag",24),d.qZA()()),2&je){const Xt=d.oxw().ngIf;d.Q6J("nzColumn",1),d.xp6(2),d.Q6J("nameSegments",Xt.molecularProfile.parsedName)("enablePopover",!1),d.xp6(2),d.Q6J("source",Xt.source)("enablePopover",!1)}}function he(je,Ut){if(1&je&&(d.ynx(0),d._UZ(1,"cvc-disease-tag",35),d.BQk()),2&je){const Xt=d.oxw(2).ngIf;d.xp6(1),d.Q6J("enablePopover",!1)("disease",Xt.disease)("truncateLongName",!0)}}function Me(je,Ut){1&je&&d._uU(0," N/A ")}function Oe(je,Ut){if(1&je&&(d.TgZ(0,"span"),d._UZ(1,"cvc-therapy-tag",38),d.qZA()),2&je){const Xt=Ut.$implicit;d.xp6(1),d.Q6J("enablePopover",!1)("therapy",Xt)("truncateLongName",!0)}}function kt(je,Ut){if(1&je&&(d.ynx(0),d._uU(1),d.ALo(2,"titlecase"),d.BQk()),2&je){const Xt=d.oxw(3).ngIf;d.xp6(1),d.hij(" ",d.lcZ(2,1,Xt.therapyInteractionType)," ")}}function It(je,Ut){if(1&je&&(d.TgZ(0,"nz-descriptions-item",36),d.YNc(1,Oe,2,3,"span",37),d.YNc(2,kt,3,3,"ng-container",1),d.qZA()),2&je){const Xt=d.oxw(2).ngIf;d.xp6(1),d.Q6J("ngForOf",Xt.therapies),d.xp6(1),d.Q6J("ngIf",Xt.therapies.length>1)}}function Tt(je,Ut){if(1&je&&(d.TgZ(0,"span"),d._UZ(1,"cvc-phenotype-tag",40),d.qZA()),2&je){const Xt=Ut.$implicit;d.xp6(1),d.Q6J("enablePopover",!1)("phenotype",Xt)}}function gt(je,Ut){if(1&je&&(d.TgZ(0,"nz-descriptions-item",39),d.YNc(1,Tt,2,2,"span",37),d.qZA()),2&je){const Xt=d.oxw(2).ngIf;d.xp6(1),d.Q6J("ngForOf",Xt.phenotypes)}}function _t(je,Ut){if(1&je&&(d.TgZ(0,"nz-descriptions",20)(1,"nz-descriptions-item",25),d._uU(2),d.qZA(),d.TgZ(3,"nz-descriptions-item",26),d._uU(4),d.ALo(5,"evidenceEnumDisplay"),d.qZA(),d.TgZ(6,"nz-descriptions-item",27),d._uU(7),d.ALo(8,"evidenceEnumDisplay"),d.qZA(),d.TgZ(9,"nz-descriptions-item",28),d._uU(10),d.ALo(11,"evidenceEnumDisplay"),d.qZA(),d.TgZ(12,"nz-descriptions-item",29),d._uU(13),d._UZ(14,"i",30),d.qZA(),d.TgZ(15,"nz-descriptions-item",31),d.YNc(16,he,2,3,"ng-container",9),d.YNc(17,Me,1,0,"ng-template",null,32,d.W1O),d.qZA(),d.YNc(19,It,3,2,"nz-descriptions-item",33),d.YNc(20,gt,2,1,"nz-descriptions-item",34),d.qZA()),2&je){const Xt=d.MAs(18),_n=d.oxw().ngIf;d.Q6J("nzColumn",2),d.xp6(2),d.hij(" ",_n.evidenceLevel," "),d.xp6(2),d.hij(" ",d.lcZ(5,10,_n.evidenceType)," "),d.xp6(3),d.hij(" ",d.lcZ(8,12,_n.evidenceDirection)," "),d.xp6(3),d.hij(" ",d.lcZ(11,14,_n.significance)," "),d.xp6(3),d.hij(" ",_n.evidenceRating,""),d.xp6(3),d.Q6J("ngIf",_n.disease)("ngIfElse",Xt),d.xp6(3),d.Q6J("ngIf",_n.therapies.length>0),d.xp6(1),d.Q6J("ngIf",_n.phenotypes.length>0)}}function Ft(je,Ut){if(1&je&&(d.TgZ(0,"a",41)(1,"nz-tag",42),d._UZ(2,"i",43),d._uU(3),d.qZA()()),2&je){const Xt=d.oxw().ngIf;d.MGl("routerLink","/evidence/",Xt.id,"/flags"),d.xp6(3),d.hij(" Flags (",Xt.flags.totalCount,") ")}}function rn(je,Ut){if(1&je&&(d.TgZ(0,"a",41)(1,"nz-tag",44),d._UZ(2,"i",45),d._uU(3),d.qZA()()),2&je){const Xt=d.oxw().ngIf;d.MGl("routerLink","/evidence/",Xt.id,"/revisions"),d.xp6(3),d.hij(" Revisions (",Xt.revisions.totalCount,") ")}}function bn(je,Ut){if(1&je&&(d.TgZ(0,"a",41)(1,"nz-tag",46),d._UZ(2,"i",47),d._uU(3),d.qZA()()),2&je){const Xt=d.oxw().ngIf;d.MGl("routerLink","/evidence/",Xt.id,"/comments"),d.xp6(3),d.hij(" Comments (",Xt.comments.totalCount,") ")}}function et(je,Ut){if(1&je&&(d.ynx(0),d.TgZ(1,"nz-card",3),d.YNc(2,ue,3,0,"ng-template",null,4,d.W1O),d.YNc(4,j,1,3,"ng-template",null,5,d.W1O),d.TgZ(6,"nz-row")(7,"nz-col",6)(8,"div",7)(9,"p",8),d.YNc(10,me,2,1,"ng-container",9),d.qZA()()()(),d.TgZ(11,"nz-space",10),d.YNc(12,re,5,5,"nz-descriptions",11),d.YNc(13,_t,21,16,"nz-descriptions",11),d.qZA(),d.TgZ(14,"nz-row",12)(15,"nz-col",6)(16,"nz-space",13),d.YNc(17,Ft,4,2,"a",14),d.YNc(18,rn,4,2,"a",14),d.YNc(19,bn,4,2,"a",14),d.qZA()()()(),d.BQk()),2&je){const Xt=Ut.ngIf,_n=d.MAs(3),On=d.MAs(5);d.oxw();const Jt=d.MAs(4);d.xp6(1),d.Q6J("nzTitle",_n)("nzExtra",On),d.xp6(8),d.Q6J("nzEllipsisRows",4),d.xp6(1),d.Q6J("ngIf",Xt.description)("ngIfElse",Jt)}}function Re(je,Ut){1&je&&d._uU(0," Evidence item has not been provided a description.\n")}let yt=(()=>{class je{constructor(Xt){this.gql=Xt}ngOnInit(){if(null==this.evidenceId)throw new Error("cvc-evidence-popover requires valid evidenceId input.");this.evidence$=this.gql.watch({evidenceId:this.evidenceId}).valueChanges.pipe((0,t.U)(({data:Xt})=>Xt?.evidenceItem),(0,i.h)(v.ep))}}return je.\u0275fac=function(Xt){return new(Xt||je)(d.Y36(s.Ybm))},je.\u0275cmp=d.Xpm({type:je,selectors:[["cvc-evidence-popover"]],inputs:{evidenceId:"evidenceId"},decls:5,vars:3,consts:[["id","popover-content"],[4,"ngIf"],["noDescription",""],["nzBordered","false","id","card-content",3,"nzTitle","nzExtra"],["cardTitle",""],["molecularProfile",""],["nzSpan","24"],[1,"popover-text"],["nz-typography","","nzEllipsis","","nzExpandable","",3,"nzEllipsisRows"],[4,"ngIf","ngIfElse"],["nzDirection","vertical","nzSize","small"],["nzSize","small","nzBordered","true",3,"nzColumn",4,"nzSpaceItem"],["id","entity-child-counts"],["nzSize","small"],[3,"routerLink",4,"nzSpaceItem"],[4,"nzSpaceItem"],["style","font-weight: normal",3,"status",4,"nzSpaceItem"],["nz-icon","","nzTheme","twotone","nzType","civic-evidence",3,"nzTwotoneColor"],[2,"font-weight","normal",3,"status"],[3,"molecularProfile","enablePopover","truncateLongName"],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","MP Expression"],[3,"nameSegments","enablePopover"],["nzTitle","Source","nzSpan","2"],[3,"source","enablePopover"],["nzTitle","Level"],["nzTitle","Type"],["nzTitle","Direction"],["nzTitle","Clinical Significance","nzSpan","2"],["nzTitle","Rating"],["nz-icon","","nzType","star","nzTheme","fill"],["nzTitle","Disease"],["noDisease",""],["nzTitle","Therapies","nzSpan","2",4,"ngIf"],["nzTitle","Phenotypes","nzSpan","2",4,"ngIf"],[3,"enablePopover","disease","truncateLongName"],["nzTitle","Therapies","nzSpan","2"],[4,"ngFor","ngForOf"],[3,"enablePopover","therapy","truncateLongName"],["nzTitle","Phenotypes","nzSpan","2"],[3,"enablePopover","phenotype"],[3,"routerLink"],["nzColor","red"],["nz-icon","","nzType","civic-flag"],["nzColor","orange"],["nz-icon","","nzType","civic-revision"],["nzColor","blue"],["nz-icon","","nzType","civic-comment"]],template:function(Xt,_n){1&Xt&&(d.TgZ(0,"div",0),d.YNc(1,et,20,5,"ng-container",1),d.ALo(2,"ngrxPush"),d.qZA(),d.YNc(3,Re,1,0,"ng-template",null,2,d.W1O)),2&Xt&&(d.xp6(1),d.Q6J("ngIf",d.lcZ(2,1,_n.evidence$)))},dependencies:[L.sg,L.O5,Q.rH,Y.Ls,A.bd,S.t3,S.SK,N.R7,N.uj,V.j,U.NU,U.$1,M.ZU,e.T,I.n,k.i,ge.T,Ce.h,Z.p,F.C,L.rS,R.fM,O.Do,P.a],styles:["[_nghost-%COMP%]{display:block;margin:-8px -12px}[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}[_nghost-%COMP%]     .ant-descriptions-view{border:none}[_nghost-%COMP%]     #entity-child-counts{border-top:1px solid #f0f0f0;padding:8px}[_nghost-%COMP%]     #entity-child-counts nz-space{width:100%}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child nz-tag{margin-right:0}.popover-text[_ngcontent-%COMP%]{width:100%;padding:8px;border-bottom:1px solid #f0f0f0}#popover-content[_ngcontent-%COMP%]{min-width:350px;max-width:500px;min-height:125px}"]}),je})()},1855:(Ot,be,a)=>{a.d(be,{f:()=>Ce});var t=a(6814),i=a(2962),v=a(95),d=a(8125),s=a(4190),L=a(5695),Q=a(3396),Y=a(3043),A=a(2574),S=a(551),N=a(2524),V=a(8641),U=a(2655),M=a(2392),e=a(9858),I=a(8527),k=a(6061),ge=a(5879);let Ce=(()=>{class Z{}return Z.\u0275fac=function(R){return new(R||Z)},Z.\u0275mod=ge.oAB({type:Z}),Z.\u0275inj=ge.cJS({imports:[t.ez,s.Bz,S.PV,i.vh,v.Jb,d.q6,L.X,A.zf,M.ZJ,N.s,k.N,Q.Q,Y.y,V.s,U.x,I.u,e.r]}),Z})()},1598:(Ot,be,a)=>{a.d(be,{Q:()=>O});var t=a(5676),i=a(7398),v=a(2181),d=a(5879),s=a(313),L=a(6814),Q=a(4190),Y=a(2962),A=a(95),S=a(8125),N=a(5695),V=a(551),U=a(2574),M=a(8091),e=a(2616);function I(P,x){if(1&P&&(d._UZ(0,"i",11),d.ALo(1,"entityColor"),d._uU(2)),2&P){const de=d.oxw().ngIf;d.Q6J("nzTwotoneColor",d.lcZ(1,2,"Gene")),d.xp6(2),d.hij(" ",de.officialName," ")}}function k(P,x){if(1&P&&(d.TgZ(0,"nz-tag"),d._uU(1),d.qZA()),2&P){const de=x.$implicit;d.xp6(1),d.Oqu(de)}}function ge(P,x){if(1&P&&(d.TgZ(0,"nz-descriptions-item",12),d.YNc(1,k,2,1,"nz-tag",13),d.qZA()),2&P){const de=d.oxw().ngIf;d.xp6(1),d.Q6J("ngForOf",de.geneAliases)}}function Ce(P,x){if(1&P&&(d.TgZ(0,"a",14)(1,"nz-tag",15),d._UZ(2,"i",16),d._uU(3),d.qZA()()),2&P){const de=d.oxw().ngIf;d.MGl("routerLink","/genes/",de.id,"/flags"),d.xp6(3),d.hij(" Flags (",de.flags.totalCount,") ")}}function Z(P,x){if(1&P&&(d.TgZ(0,"a",14)(1,"nz-tag",17),d._UZ(2,"i",18),d._uU(3),d.qZA()()),2&P){const de=d.oxw().ngIf;d.MGl("routerLink","/genes/",de.id,"/revisions"),d.xp6(3),d.hij(" Revisions (",de.revisions.totalCount,") ")}}function F(P,x){if(1&P&&(d.TgZ(0,"a",14)(1,"nz-tag",19),d._UZ(2,"i",20),d._uU(3),d.qZA()()),2&P){const de=d.oxw().ngIf;d.MGl("routerLink","/genes/",de.id,"/comments"),d.xp6(3),d.hij(" Comments (",de.comments.totalCount,") ")}}function R(P,x){if(1&P&&(d.ynx(0),d.TgZ(1,"nz-card",2),d.YNc(2,I,3,4,"ng-template",null,3,d.W1O),d.TgZ(4,"nz-descriptions",4),d.YNc(5,ge,2,1,"nz-descriptions-item",5),d.TgZ(6,"nz-descriptions-item",6),d._uU(7),d.qZA()(),d.TgZ(8,"nz-row",7)(9,"nz-col",8)(10,"nz-space",9),d.YNc(11,Ce,4,2,"a",10),d.YNc(12,Z,4,2,"a",10),d.YNc(13,F,4,2,"a",10),d.qZA()()()(),d.BQk()),2&P){const de=x.ngIf,ue=d.MAs(3);d.xp6(1),d.Q6J("nzTitle",ue),d.xp6(3),d.Q6J("nzColumn",2),d.xp6(1),d.Q6J("ngIf",de.geneAliases.length>0),d.xp6(2),d.hij(" ",de.variants.totalCount," ")}}let O=(()=>{class P{constructor(de){this.gql=de}ngOnInit(){if(null==this.geneId)throw new Error("cvc-gene-popover requires valid geneId input.");this.gene$=this.gql.watch({geneId:this.geneId}).valueChanges.pipe((0,i.U)(({data:de})=>de?.gene),(0,v.h)(t.ep))}}return P.\u0275fac=function(de){return new(de||P)(d.Y36(s.rJ8))},P.\u0275cmp=d.Xpm({type:P,selectors:[["cvc-gene-popover"]],inputs:{geneId:"geneId"},decls:3,vars:3,consts:[["id","popover-content"],[4,"ngIf"],["nzBordered","false","id","card-content",3,"nzTitle"],["cardTitle",""],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","Aliases","nzSpan","2",4,"ngIf"],["nzTitle","Variants"],["id","entity-child-counts"],["nzSpan","24"],["nzSize","small"],[3,"routerLink",4,"nzSpaceItem"],["nz-icon","","nzTheme","twotone","nzType","civic-gene",3,"nzTwotoneColor"],["nzTitle","Aliases","nzSpan","2"],[4,"ngFor","ngForOf"],[3,"routerLink"],["nzColor","red"],["nz-icon","","nzType","civic-flag"],["nzColor","orange"],["nz-icon","","nzType","civic-revision"],["nzColor","blue"],["nz-icon","","nzType","civic-comment"]],template:function(de,ue){1&de&&(d.TgZ(0,"div",0),d.YNc(1,R,14,4,"ng-container",1),d.ALo(2,"ngrxPush"),d.qZA()),2&de&&(d.xp6(1),d.Q6J("ngIf",d.lcZ(2,1,ue.gene$)))},dependencies:[L.sg,L.O5,Q.rH,Y.bd,A.t3,A.SK,S.R7,S.uj,N.j,V.Ls,U.NU,U.$1,M.fM,e.a],styles:["[_nghost-%COMP%]{display:block;margin:-8px -12px}[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}[_nghost-%COMP%]     .ant-descriptions-view{border:none}[_nghost-%COMP%]     #entity-child-counts{border-top:1px solid #f0f0f0;padding:8px}[_nghost-%COMP%]     #entity-child-counts nz-space{width:100%}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child nz-tag{margin-right:0}.popover-text[_ngcontent-%COMP%]{width:100%;padding:8px;border-bottom:1px solid #f0f0f0}#popover-content[_ngcontent-%COMP%]{min-width:350px;max-width:500px;min-height:125px}"]}),P})()},9021:(Ot,be,a)=>{a.d(be,{w:()=>N});var t=a(6814),i=a(4190),v=a(2524),d=a(2962),s=a(8125),L=a(95),Q=a(551),Y=a(2574),A=a(5695),S=a(5879);let N=(()=>{class V{}return V.\u0275fac=function(M){return new(M||V)},V.\u0275mod=S.oAB({type:V}),V.\u0275inj=S.cJS({imports:[t.ez,i.Bz,d.vh,L.Jb,s.q6,A.X,Q.PV,Y.zf,v.s]}),V})()},4121:(Ot,be,a)=>{a.d(be,{H:()=>O});var t=a(8130),i=a(2023),v=a(5879),d=a(6814),s=a(4190),L=a(5695),Q=a(7417),Y=a(551),A=a(1598),S=a(3103),N=a(5869),V=a(2616);function U(P,x){}function M(P,x){if(1&P&&(v.ynx(0),v.TgZ(1,"a",4),v.YNc(2,U,0,0,"ng-template",5),v.qZA(),v.BQk()),2&P){const de=v.oxw(),ue=v.MAs(2);v.xp6(1),v.Q6J("routerLink",de.gene.link),v.xp6(1),v.Q6J("ngTemplateOutlet",ue)}}function e(P,x){}function I(P,x){if(1&P&&v._UZ(0,"cvc-gene-popover",8),2&P){const de=v.oxw(2);v.Q6J("geneId",de.gene.id)}}function k(P,x){if(1&P){const de=v.EpF();v.TgZ(0,"nz-tag",6),v.NdJ("nzOnClose",function(j){v.CHM(de);const me=v.oxw();return v.KtG(me.itemClosed(j))}),v.YNc(1,e,0,0,"ng-template",5),v.qZA(),v.YNc(2,I,1,1,"ng-template",null,7,v.W1O)}if(2&P){const de=v.MAs(3),ue=v.oxw(),j=v.MAs(6);v.Q6J("nzPopoverMouseEnterDelay",ue.onCloseClicked?0:.5)("nzPopoverContent",de)("nzPopoverTrigger",ue.enablePopover?"hover":null)("nzMode",ue.onCloseClicked?"closeable":"default"),v.xp6(1),v.Q6J("ngTemplateOutlet",j)}}function ge(P,x){}function Ce(P,x){if(1&P&&v.YNc(0,ge,0,0,"ng-template",5),2&P){v.oxw();const de=v.MAs(2);v.Q6J("ngTemplateOutlet",de)}}function Z(P,x){if(1&P&&(v.ynx(0),v._uU(1),v.ALo(2,"truncate"),v.BQk()),2&P){const de=v.oxw(2);v.xp6(1),v.hij(" ",v.xi3(2,1,de.gene.name,12)," ")}}function F(P,x){if(1&P&&v._uU(0),2&P){const de=v.oxw(2);v.hij(" ",de.gene.name," ")}}function R(P,x){if(1&P&&(v.TgZ(0,"cvc-icon-badges",9),v._UZ(1,"i",10),v.ALo(2,"entityColor"),v.qZA(),v.YNc(3,Z,3,4,"ng-container",0),v.YNc(4,F,1,1,"ng-template",null,11,v.W1O)),2&P){const de=v.MAs(5),ue=v.oxw();v.Q6J("flagged",ue.gene.flagged)("entityColor",ue.iconColor),v.xp6(1),v.Q6J("nzTwotoneColor",v.lcZ(2,5,"Gene")),v.xp6(2),v.Q6J("ngIf",ue.truncateLongName)("ngIfElse",de)}}let O=(()=>{class P extends t.a{constructor(){super(),this.enablePopover=!0,this.truncateLongName=!1,this.iconColor=(0,i.f)("Gene")}idFunction(){return this.gene.id}ngOnInit(){if(super.ngOnInit(),void 0===this.gene)throw new Error("cvc-gene-tag requires LinkableGene input, none supplied.")}}return P.\u0275fac=function(de){return new(de||P)},P.\u0275cmp=v.Xpm({type:P,selectors:[["cvc-gene-tag"]],inputs:{gene:"gene",enablePopover:"enablePopover",truncateLongName:"truncateLongName"},features:[v.qOj],decls:7,vars:2,consts:[[4,"ngIf","ngIfElse"],["tag",""],["unlinked",""],["tagContent",""],[3,"routerLink"],[3,"ngTemplateOutlet"],["nz-popover","",3,"nzPopoverMouseEnterDelay","nzPopoverContent","nzPopoverTrigger","nzMode","nzOnClose"],["genePopover",""],[3,"geneId"],[3,"flagged","entityColor"],["nz-icon","","nzType","civic-gene","nzTheme","twotone",3,"nzTwotoneColor"],["fullName",""]],template:function(de,ue){if(1&de&&(v.YNc(0,M,3,2,"ng-container",0),v.YNc(1,k,4,5,"ng-template",null,1,v.W1O),v.YNc(3,Ce,1,1,"ng-template",null,2,v.W1O),v.YNc(5,R,6,7,"ng-template",null,3,v.W1O)),2&de){const j=v.MAs(4);v.Q6J("ngIf",ue.linked)("ngIfElse",j)}},dependencies:[d.O5,d.tP,s.rH,L.j,Q.lU,Y.Ls,A.Q,S.b,N.W,V.a],encapsulation:2,changeDetection:0}),P})()},5956:(Ot,be,a)=>{a.d(be,{U:()=>N});var t=a(6814),i=a(4190),v=a(5695),d=a(551),s=a(7417),L=a(9021),Q=a(2524),Y=a(3640),A=a(3146),S=a(5879);let N=(()=>{class V{}return V.\u0275fac=function(M){return new(M||V)},V.\u0275mod=S.oAB({type:V}),V.\u0275inj=S.cJS({imports:[t.ez,i.Bz,v.X,s.$6,d.PV,Y.mS,Q.s,L.w,A.C]}),V})()},156:(Ot,be,a)=>{a.d(be,{_:()=>ue});var t=a(5676),i=a(7398),v=a(2181),d=a(5879),s=a(313),L=a(6814),Q=a(4190),Y=a(2962),A=a(95),S=a(8125),N=a(5695),V=a(551),U=a(2574),M=a(1887),e=a(5095),I=a(8091);function k(j,me){if(1&j&&(d._UZ(0,"i",16),d._uU(1)),2&j){const re=d.oxw().ngIf;d.xp6(1),d.hij(" ",re.name," ")}}function ge(j,me){if(1&j&&(d.TgZ(0,"nz-descriptions-item",17),d._uU(1),d.qZA()),2&j){const re=d.oxw().ngIf;d.xp6(1),d.hij(" ",re.evidenceItems.totalCount," ")}}function Ce(j,me){if(1&j&&(d.TgZ(0,"nz-descriptions-item",18),d._uU(1),d.qZA()),2&j){const re=d.oxw().ngIf;d.xp6(1),d.hij(" ",re.assertions.totalCount," ")}}function Z(j,me){if(1&j&&(d.TgZ(0,"nz-tag"),d._uU(1),d.qZA()),2&j){const re=me.$implicit;d.xp6(1),d.Oqu(re)}}function F(j,me){if(1&j&&(d.ynx(0),d.TgZ(1,"cvc-tag-list"),d.YNc(2,Z,2,1,"nz-tag",19),d.qZA(),d.BQk()),2&j){const re=d.oxw().ngIf;d.xp6(2),d.Q6J("ngForOf",re.molecularProfileAliases)}}function R(j,me){1&j&&(d.TgZ(0,"span",20),d._uU(1,"None specified"),d.qZA())}function O(j,me){if(1&j&&(d.TgZ(0,"a",21)(1,"nz-tag",22),d._UZ(2,"i",23),d._uU(3),d.qZA()()),2&j){const re=d.oxw().ngIf;d.MGl("routerLink","/molecular-profiles/",re.id,"/flags"),d.xp6(3),d.hij(" Flags (",re.flags.totalCount,") ")}}function P(j,me){if(1&j&&(d.TgZ(0,"a",21)(1,"nz-tag",24),d._UZ(2,"i",25),d._uU(3),d.qZA()()),2&j){const re=d.oxw().ngIf;d.MGl("routerLink","/molecular-profiles/",re.id,"/revisions"),d.xp6(3),d.hij(" Revisions (",re.revisions.totalCount,") ")}}function x(j,me){if(1&j&&(d.TgZ(0,"a",21)(1,"nz-tag",26),d._UZ(2,"i",27),d._uU(3),d.qZA()()),2&j){const re=d.oxw().ngIf;d.MGl("routerLink","/molecular-profiles/",re.id,"/comments"),d.xp6(3),d.hij(" Comments (",re.comments.totalCount,") ")}}function de(j,me){if(1&j&&(d.ynx(0),d.TgZ(1,"nz-card",2),d.YNc(2,k,2,1,"ng-template",null,3,d.W1O),d.TgZ(4,"nz-descriptions",4)(5,"nz-descriptions-item",5),d._UZ(6,"cvc-mp-tag-name",6),d.qZA(),d.YNc(7,ge,2,1,"nz-descriptions-item",7),d.YNc(8,Ce,2,1,"nz-descriptions-item",8),d.TgZ(9,"nz-descriptions-item",9),d.YNc(10,F,3,1,"ng-container",10),d.YNc(11,R,2,0,"ng-template",null,11,d.W1O),d.qZA()(),d.TgZ(13,"nz-row",12)(14,"nz-col",13)(15,"nz-space",14),d.YNc(16,O,4,2,"a",15),d.YNc(17,P,4,2,"a",15),d.YNc(18,x,4,2,"a",15),d.qZA()()()(),d.BQk()),2&j){const re=me.ngIf,he=d.MAs(3),Me=d.MAs(12);d.xp6(1),d.Q6J("nzTitle",he),d.xp6(3),d.Q6J("nzColumn",2),d.xp6(2),d.Q6J("nameSegments",re.parsedName)("enablePopover",!1),d.xp6(1),d.Q6J("ngIf",re.evidenceItems.totalCount>0),d.xp6(1),d.Q6J("ngIf",re.assertions.totalCount>0),d.xp6(2),d.Q6J("ngIf",re.molecularProfileAliases.length>0)("ngIfElse",Me)}}let ue=(()=>{class j{constructor(re){this.gql=re}ngOnInit(){if(void 0===this.molecularProfileId)throw new Error("Must pass a molecular profile ID into the molecular profile popover component.");this.molecularProfile$=this.gql.watch({molecularProfileId:this.molecularProfileId}).valueChanges.pipe((0,i.U)(({data:re})=>re?.molecularProfile),(0,v.h)(t.ep))}}return j.\u0275fac=function(re){return new(re||j)(d.Y36(s.DkJ))},j.\u0275cmp=d.Xpm({type:j,selectors:[["cvc-molecular-profile-popover"]],inputs:{molecularProfileId:"molecularProfileId"},decls:3,vars:3,consts:[["id","popover-content"],[4,"ngIf"],["nzBordered","false","id","card-content",3,"nzTitle"],["cardTitle",""],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","MP Expression","nzSpan","2"],[3,"nameSegments","enablePopover"],["nzTitle","Evidence Items","nzSpan","2",4,"ngIf"],["nzTitle","Assertions","nzSpan","2",4,"ngIf"],["nzTitle","Aliases"],[4,"ngIf","ngIfElse"],["noAliases",""],["id","entity-child-counts"],["nzSpan","24"],["nzSize","small"],[3,"routerLink",4,"nzSpaceItem"],["nz-icon","","nzType","civic:molecularprofile"],["nzTitle","Evidence Items","nzSpan","2"],["nzTitle","Assertions","nzSpan","2"],[4,"ngFor","ngForOf"],["nz-typography","","nzType","secondary"],[3,"routerLink"],["nzColor","red"],["nz-icon","","nzType","civic-flag"],["nzColor","orange"],["nz-icon","","nzType","civic-revision"],["nzColor","blue"],["nz-icon","","nzType","civic-comment"]],template:function(re,he){1&re&&(d.TgZ(0,"div",0),d.YNc(1,de,19,8,"ng-container",1),d.ALo(2,"ngrxPush"),d.qZA()),2&re&&(d.xp6(1),d.Q6J("ngIf",d.lcZ(2,1,he.molecularProfile$)))},dependencies:[L.sg,L.O5,Q.rH,Y.bd,A.t3,A.SK,S.R7,S.uj,N.j,V.Ls,U.NU,U.$1,M.$,e.C,I.fM],styles:["[_nghost-%COMP%]{display:block;margin:-8px -12px}[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}[_nghost-%COMP%]     .ant-descriptions-view{border:none}[_nghost-%COMP%]     #entity-child-counts{border-top:1px solid #f0f0f0;padding:8px}[_nghost-%COMP%]     #entity-child-counts nz-space{width:100%}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child nz-tag{margin-right:0}.popover-text[_ngcontent-%COMP%]{width:100%;padding:8px;border-bottom:1px solid #f0f0f0}#popover-content[_ngcontent-%COMP%]{min-width:350px;max-width:500px;min-height:125px}"]}),j})()},2064:(Ot,be,a)=>{a.d(be,{_:()=>M});var t=a(6814),i=a(4190),v=a(2962),d=a(95),s=a(8125),L=a(5695),Q=a(551),Y=a(2574),A=a(5956),S=a(6067),N=a(9858),V=a(366),U=a(5879);let M=(()=>{class e{}return e.\u0275fac=function(k){return new(k||e)},e.\u0275mod=U.oAB({type:e}),e.\u0275inj=U.cJS({imports:[t.ez,i.Bz,v.vh,d.Jb,s.q6,L.X,Q.PV,Y.zf,A.U,S.X,V.$,N.r]}),e})()},5095:(Ot,be,a)=>{a.d(be,{C:()=>U});var t=a(5879),i=a(6814),v=a(9408),d=a(4121);const s=["*"];let L=(()=>{class M{constructor(){}}return M.\u0275fac=function(I){return new(I||M)},M.\u0275cmp=t.Xpm({type:M,selectors:[["cvc-tag-group"]],ngContentSelectors:s,decls:1,vars:0,template:function(I,k){1&I&&(t.F$t(),t.Hsn(0))},styles:["[_nghost-%COMP%]    >*:first-child   nz-tag{border-top-right-radius:0;border-bottom-right-radius:0;margin-right:0}[_nghost-%COMP%]    >*:last-child   nz-tag{border-top-left-radius:0;border-bottom-left-radius:0;margin-left:-1px;border-left-color:#e9e9e9}"]}),M})();function Q(M,e){if(1&M&&t._UZ(0,"span",3),2&M){const I=t.oxw().$implicit;t.Q6J("innerHtml",I.text,t.oJD)}}function Y(M,e){if(1&M&&t._UZ(0,"cvc-gene-tag",6),2&M){const I=t.oxw().$implicit,k=t.oxw(3);t.Q6J("gene",I)("enablePopover",k.enablePopover)}}function A(M,e){if(1&M&&(t.ynx(0),t.YNc(1,Y,1,2,"cvc-gene-tag",5),t.BQk()),2&M){const I=e.$implicit;t.xp6(1),t.Q6J("ngIf","Gene"==I.__typename)}}const S=function(M){return[M]};function N(M,e){if(1&M&&(t.ynx(0),t.TgZ(1,"cvc-tag-group"),t.YNc(2,A,2,1,"ng-container",0),t._UZ(3,"cvc-variant-tag",4),t.qZA(),t.BQk()),2&M){const I=t.oxw(),k=I.index,ge=I.$implicit,Ce=t.oxw();t.xp6(2),t.Q6J("ngForOf",t.VKq(3,S,Ce.nameSegments[k-1])),t.xp6(1),t.Q6J("variant",ge)("enablePopover",Ce.enablePopover)}}function V(M,e){if(1&M&&(t.ynx(0),t.YNc(1,Q,1,1,"span",1),t.YNc(2,N,4,5,"ng-container",2),t.BQk()),2&M){const I=e.$implicit;t.xp6(1),t.Q6J("ngIf","MolecularProfileTextSegment"==I.__typename),t.xp6(1),t.Q6J("ngIf","Variant"==I.__typename)}}let U=(()=>{class M{constructor(){this.enablePopover=!0}ngOnInit(){if(void 0===this.nameSegments)throw new Error("Must pass a list of molecular profile name segments into mp name component.")}}return M.\u0275fac=function(I){return new(I||M)},M.\u0275cmp=t.Xpm({type:M,selectors:[["cvc-mp-tag-name"]],inputs:{nameSegments:"nameSegments",enablePopover:"enablePopover"},decls:1,vars:1,consts:[[4,"ngFor","ngForOf"],["class","text-segment",3,"innerHtml",4,"ngIf"],[4,"ngIf"],[1,"text-segment",3,"innerHtml"],[3,"variant","enablePopover"],[3,"gene","enablePopover",4,"ngIf"],[3,"gene","enablePopover"]],template:function(I,k){1&I&&t.YNc(0,V,3,2,"ng-container",0),2&I&&t.Q6J("ngForOf",k.nameSegments)},dependencies:[i.sg,i.O5,v.I,d.H,L],styles:[".text-segment[_ngcontent-%COMP%]{display:inline-block;margin-right:8px;font-weight:700;color:#0009;font-size:14px;line-height:12px}"]}),M})()},9858:(Ot,be,a)=>{a.d(be,{r:()=>Y});var t=a(6814),i=a(7528),v=a(5956),d=a(5695),s=a(551),L=a(5879);let Q=(()=>{class A{}return A.\u0275fac=function(N){return new(N||A)},A.\u0275mod=L.oAB({type:A}),A.\u0275inj=L.cJS({imports:[t.ez]}),A})(),Y=(()=>{class A{}return A.\u0275fac=function(N){return new(N||A)},A.\u0275mod=L.oAB({type:A}),A.\u0275inj=L.cJS({imports:[t.ez,d.X,s.PV,i.Q,v.U,Q]}),A})()},2606:(Ot,be,a)=>{a.d(be,{p:()=>de});var t=a(8130),i=a(2023),v=a(5879),d=a(6814),s=a(4190),L=a(5695),Q=a(7417),Y=a(551),A=a(156),S=a(5869);function N(ue,j){}function V(ue,j){if(1&ue&&(v.ynx(0),v.TgZ(1,"a",5),v.YNc(2,N,0,0,"ng-template",6),v.qZA(),v.BQk()),2&ue){const me=v.oxw(),re=v.MAs(2);v.xp6(1),v.Q6J("routerLink",me.molecularProfile.link),v.xp6(1),v.Q6J("ngTemplateOutlet",re)}}function U(ue,j){}const M=function(ue){return{deprecated:ue}};function e(ue,j){if(1&ue){const me=v.EpF();v.TgZ(0,"nz-tag",9),v.NdJ("nzOnClose",function(he){v.CHM(me);const Me=v.oxw(2);return v.KtG(Me.itemClosed(he))}),v.YNc(1,U,0,0,"ng-template",6),v.qZA()}if(2&ue){v.oxw();const me=v.MAs(2),re=v.oxw(),he=v.MAs(8);v.Q6J("ngClass",v.VKq(5,M,re.molecularProfile.deprecated))("nzPopoverMouseEnterDelay",re.onCloseClicked?0:.5)("nzPopoverContent",me)("nzMode",re.onCloseClicked?"closeable":"default"),v.xp6(1),v.Q6J("ngTemplateOutlet",he)}}function I(ue,j){if(1&ue&&v._UZ(0,"cvc-molecular-profile-popover",11),2&ue){const me=v.oxw(3);v.Q6J("molecularProfileId",me.molecularProfile.id)}}function k(ue,j){if(1&ue&&v.YNc(0,I,1,1,"cvc-molecular-profile-popover",10),2&ue){const me=v.oxw(2);v.Q6J("ngIf",me.enablePopover)}}function ge(ue,j){if(1&ue&&(v.YNc(0,e,2,7,"nz-tag",7),v.YNc(1,k,1,1,"ng-template",null,8,v.W1O)),2&ue){const me=v.oxw(),re=v.MAs(4);v.Q6J("ngIf",me.enablePopover)("ngIfElse",re)}}function Ce(ue,j){}function Z(ue,j){if(1&ue){const me=v.EpF();v.TgZ(0,"nz-tag",12),v.NdJ("nzOnClose",function(he){v.CHM(me);const Me=v.oxw();return v.KtG(Me.itemClosed(he))}),v.YNc(1,Ce,0,0,"ng-template",6),v.qZA()}if(2&ue){const me=v.oxw(),re=v.MAs(8);v.Q6J("nzMode",me.onCloseClicked?"closeable":"default")("ngClass",v.VKq(3,M,me.molecularProfile.deprecated)),v.xp6(1),v.Q6J("ngTemplateOutlet",re)}}function F(ue,j){}function R(ue,j){if(1&ue&&v.YNc(0,F,0,0,"ng-template",6),2&ue){v.oxw();const me=v.MAs(2);v.Q6J("ngTemplateOutlet",me)}}function O(ue,j){if(1&ue&&(v.ynx(0),v._uU(1),v.ALo(2,"truncate"),v.BQk()),2&ue){const me=v.oxw(2);v.xp6(1),v.hij(" ",v.xi3(2,1,me.molecularProfile.name,me.truncationLength)," ")}}function P(ue,j){if(1&ue&&v._uU(0),2&ue){const me=v.oxw(2);v.hij(" ",me.molecularProfile.name," ")}}function x(ue,j){if(1&ue&&(v._UZ(0,"i",13),v.YNc(1,O,3,4,"ng-container",0),v.YNc(2,P,1,1,"ng-template",null,14,v.W1O)),2&ue){const me=v.MAs(3),re=v.oxw();v.Q6J("nzTwotoneColor",re.iconColor),v.xp6(1),v.Q6J("ngIf",re.truncateLongName)("ngIfElse",me)}}let de=(()=>{class ue extends t.a{constructor(){super(),this.enablePopover=!0,this.truncateLongName=!1,this.truncationLength=20,this.iconColor=(0,i.f)("MolecularProfile")}idFunction(){return this.molecularProfile.id}ngOnInit(){if(super.ngOnInit(),void 0===this.molecularProfile)throw new Error("cvc-molecular-profile-tag requires LinkableMolecularProfile input, none supplied.");"number"==typeof this.truncateLongName&&(this.truncationLength=this.truncateLongName),"segments"in this.molecularProfile&&(this.molecularProfile.name=this.molecularProfile.segments.map(me=>"text"in me?me.text:me.name).join(" "))}}return ue.\u0275fac=function(me){return new(me||ue)},ue.\u0275cmp=v.Xpm({type:ue,selectors:[["cvc-molecular-profile-tag"]],inputs:{molecularProfile:"molecularProfile",enablePopover:"enablePopover",truncateLongName:"truncateLongName"},features:[v.qOj],decls:9,vars:2,consts:[[4,"ngIf","ngIfElse"],["tag",""],["noPopover",""],["unlinked",""],["tagContent",""],[3,"routerLink"],[3,"ngTemplateOutlet"],["nz-popover","","nzPopoverTrigger","hover",3,"ngClass","nzPopoverMouseEnterDelay","nzPopoverContent","nzMode","nzOnClose",4,"ngIf","ngIfElse"],["popoverContent",""],["nz-popover","","nzPopoverTrigger","hover",3,"ngClass","nzPopoverMouseEnterDelay","nzPopoverContent","nzMode","nzOnClose"],[3,"molecularProfileId",4,"ngIf"],[3,"molecularProfileId"],[3,"nzMode","ngClass","nzOnClose"],["nz-icon","","nzType","civic-molecularprofile","nzTheme","twotone",3,"nzTwotoneColor"],["fullName",""]],template:function(me,re){if(1&me&&(v.YNc(0,V,3,2,"ng-container",0),v.YNc(1,ge,3,2,"ng-template",null,1,v.W1O),v.YNc(3,Z,2,5,"ng-template",null,2,v.W1O),v.YNc(5,R,1,1,"ng-template",null,3,v.W1O),v.YNc(7,x,4,3,"ng-template",null,4,v.W1O)),2&me){const he=v.MAs(6);v.Q6J("ngIf",re.linked)("ngIfElse",he)}},dependencies:[d.mk,d.O5,d.tP,s.rH,L.j,Q.lU,Y.Ls,A._,S.W],styles:["[_nghost-%COMP%]     nz-tag.rejected, [_nghost-%COMP%]     nz-tag.submitted, [_nghost-%COMP%]     nz-tag.accepted, [_nghost-%COMP%]     nz-tag.deprecated{border-right-width:2px}[_nghost-%COMP%]     nz-tag.rejected, [_nghost-%COMP%]     nz-tag.deprecated{border-color:#e6e6e6;background-color:#fff;color:#999999d9}[_nghost-%COMP%]     nz-tag.submitted{border-color:#ffe58f}[_nghost-%COMP%]     nz-tag.accepted{border-color:#b7eb8f}[_nghost-%COMP%]{display:inline-block}"],changeDetection:0}),ue})()},8527:(Ot,be,a)=>{a.d(be,{u:()=>A});var t=a(6814),i=a(4190),v=a(5695),d=a(551),s=a(7417),L=a(2524),Q=a(2064),Y=a(5879);let A=(()=>{class S{}return S.\u0275fac=function(V){return new(V||S)},S.\u0275mod=Y.oAB({type:S}),S.\u0275inj=Y.cJS({imports:[t.ez,i.Bz,v.X,s.$6,d.PV,L.s,Q._]}),S})()},4402:(Ot,be,a)=>{a.d(be,{S:()=>e});var t=a(5676),i=a(7398),v=a(2181),d=a(5879),s=a(313),L=a(6814),Q=a(551),Y=a(2962),A=a(3317),S=a(8125),N=a(8091);function V(I,k){if(1&I&&(d._UZ(0,"i",9),d._uU(1)),2&I){const ge=d.oxw().ngIf;d.xp6(1),d.hij(" ",ge.name," ")}}function U(I,k){if(1&I&&(d.TgZ(0,"cvc-link-tag",10),d._uU(1),d.qZA()),2&I){const ge=d.oxw().ngIf;d.Q6J("href",ge.url),d.xp6(1),d.hij(" ",ge.hpoId," ")}}function M(I,k){if(1&I&&(d.ynx(0),d.TgZ(1,"nz-card",2),d.YNc(2,V,2,1,"ng-template",null,3,d.W1O),d.YNc(4,U,2,2,"ng-template",null,4,d.W1O),d.TgZ(6,"nz-descriptions",5)(7,"nz-descriptions-item",6),d._uU(8),d.qZA(),d.TgZ(9,"nz-descriptions-item",7),d._uU(10),d.qZA(),d.TgZ(11,"nz-descriptions-item",8),d._uU(12),d.qZA()()(),d.BQk()),2&I){const ge=k.ngIf,Ce=d.MAs(3),Z=d.MAs(5);d.xp6(1),d.Q6J("nzTitle",Ce)("nzExtra",Z),d.xp6(5),d.Q6J("nzColumn",2),d.xp6(2),d.hij(" ",ge.assertionCount," "),d.xp6(2),d.hij(" ",ge.evidenceItemCount," "),d.xp6(2),d.hij(" ",ge.molecularProfileCount," ")}}let e=(()=>{class I{constructor(ge){this.gql=ge}ngOnInit(){if(null==this.phenotypeId)throw new Error("cvc-phenotype-popover requires valid phenotypeId input.");this.phenotype$=this.gql.watch({phenotypeId:this.phenotypeId}).valueChanges.pipe((0,i.U)(({data:ge})=>ge?.phenotypePopover),(0,v.h)(t.ep))}}return I.\u0275fac=function(ge){return new(ge||I)(d.Y36(s.OHm))},I.\u0275cmp=d.Xpm({type:I,selectors:[["cvc-phenotype-popover"]],inputs:{phenotypeId:"phenotypeId"},decls:3,vars:3,consts:[["id","popover-content"],[4,"ngIf"],["nzBordered","false","id","card-content",3,"nzTitle","nzExtra"],["cardTitle",""],["linkout",""],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","Assertions","nzSpan","2"],["nzTitle","Evidence","nzSpan","2"],["nzTitle","Molecular Profiles","nzSpan","2"],["nz-icon","","nzType","civic-phenotype","nzTheme","twotone","nzTwotoneColor","#2A63B6"],["tooltip","View in the Human Phenotype Ontology",3,"href"]],template:function(ge,Ce){1&ge&&(d.TgZ(0,"div",0),d.YNc(1,M,13,6,"ng-container",1),d.ALo(2,"ngrxPush"),d.qZA()),2&ge&&(d.xp6(1),d.Q6J("ngIf",d.lcZ(2,1,Ce.phenotype$)))},dependencies:[L.O5,Q.Ls,Y.bd,A.l,S.R7,S.uj,N.fM],styles:["[_nghost-%COMP%]{display:block;margin:-8px -12px}[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}[_nghost-%COMP%]     .ant-descriptions-view{border:none}[_nghost-%COMP%]     #entity-child-counts{border-top:1px solid #f0f0f0;padding:8px}[_nghost-%COMP%]     #entity-child-counts nz-space{width:100%}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child nz-tag{margin-right:0}.popover-text[_ngcontent-%COMP%]{width:100%;padding:8px;border-bottom:1px solid #f0f0f0}#popover-content[_ngcontent-%COMP%]{min-width:350px;max-width:500px;min-height:125px}"]}),I})()},1332:(Ot,be,a)=>{a.d(be,{I:()=>Q});var t=a(6814),i=a(2962),v=a(6067),d=a(8125),s=a(551),L=a(5879);let Q=(()=>{class Y{}return Y.\u0275fac=function(S){return new(S||Y)},Y.\u0275mod=L.oAB({type:Y}),Y.\u0275inj=L.cJS({imports:[t.ez,s.PV,i.vh,v.X,d.q6]}),Y})()},3897:(Ot,be,a)=>{a.d(be,{i:()=>Z});var t=a(8130),i=a(5879),v=a(6814),d=a(4190),s=a(5695),L=a(7417),Q=a(551),Y=a(4402),A=a(2616);function S(F,R){}function N(F,R){if(1&F&&(i.ynx(0),i.TgZ(1,"a",5),i.YNc(2,S,0,0,"ng-template",6),i.qZA(),i.BQk()),2&F){const O=i.oxw(),P=i.MAs(2);i.xp6(1),i.Q6J("routerLink",O.phenotype.link),i.xp6(1),i.Q6J("ngTemplateOutlet",P)}}function V(F,R){}function U(F,R){if(1&F&&i._UZ(0,"cvc-phenotype-popover",9),2&F){const O=i.oxw(2);i.Q6J("phenotypeId",O.phenotype.id)}}function M(F,R){if(1&F){const O=i.EpF();i.TgZ(0,"nz-tag",7),i.NdJ("nzOnClose",function(x){i.CHM(O);const de=i.oxw();return i.KtG(de.itemClosed(x))}),i.YNc(1,V,0,0,"ng-template",6),i.qZA(),i.YNc(2,U,1,1,"ng-template",null,8,i.W1O)}if(2&F){const O=i.MAs(3),P=i.oxw(),x=i.MAs(8);i.Q6J("nzPopoverMouseEnterDelay",P.onCloseClicked?0:.5)("nzPopoverContent",O)("nzPopoverTrigger",P.enablePopover?"hover":null)("nzMode",P.onCloseClicked?"closeable":"default"),i.xp6(1),i.Q6J("ngTemplateOutlet",x)}}function e(F,R){}function I(F,R){if(1&F){const O=i.EpF();i.TgZ(0,"nz-tag",10),i.NdJ("nzOnClose",function(x){i.CHM(O);const de=i.oxw();return i.KtG(de.itemClosed(x))}),i.YNc(1,e,0,0,"ng-template",6),i.qZA()}if(2&F){const O=i.oxw(),P=i.MAs(8);i.Q6J("nzMode",O.onCloseClicked?"closeable":"default"),i.xp6(1),i.Q6J("ngTemplateOutlet",P)}}function k(F,R){}function ge(F,R){if(1&F&&i.YNc(0,k,0,0,"ng-template",6),2&F){i.oxw();const O=i.MAs(2);i.Q6J("ngTemplateOutlet",O)}}function Ce(F,R){if(1&F&&(i._UZ(0,"i",11),i.ALo(1,"entityColor"),i._uU(2)),2&F){const O=i.oxw();i.Q6J("nzTwotoneColor",i.lcZ(1,2,"Phenotype")),i.xp6(2),i.hij(" ",O.phenotype.name,"\n")}}let Z=(()=>{class F extends t.a{constructor(){super(...arguments),this.enablePopover=!0}set phenotype(O){if(!O)throw new Error("phenotype-tag phentype input requires LinkablePhenotype.");this._phenotype=O}get phenotype(){return this._phenotype}idFunction(){return this.phenotype.id}}return F.\u0275fac=function(){let R;return function(P){return(R||(R=i.n5z(F)))(P||F)}}(),F.\u0275cmp=i.Xpm({type:F,selectors:[["cvc-phenotype-tag"]],inputs:{phenotype:"phenotype",enablePopover:"enablePopover"},features:[i.qOj],decls:9,vars:2,consts:[[4,"ngIf","ngIfElse"],["tag",""],["noPopover",""],["unlinked",""],["tagContent",""],[3,"routerLink"],[3,"ngTemplateOutlet"],["nz-popover","","nzPopoverPlacement","right",3,"nzPopoverMouseEnterDelay","nzPopoverContent","nzPopoverTrigger","nzMode","nzOnClose"],["phenotypePopover",""],[3,"phenotypeId"],[3,"nzMode","nzOnClose"],["nz-icon","","nzTheme","twotone","nzType","civic-phenotype",3,"nzTwotoneColor"]],template:function(O,P){if(1&O&&(i.YNc(0,N,3,2,"ng-container",0),i.YNc(1,M,4,5,"ng-template",null,1,i.W1O),i.YNc(3,I,2,2,"ng-template",null,2,i.W1O),i.YNc(5,ge,1,1,"ng-template",null,3,i.W1O),i.YNc(7,Ce,3,4,"ng-template",null,4,i.W1O)),2&O){const x=i.MAs(6);i.Q6J("ngIf",P.linked)("ngIfElse",x)}},dependencies:[v.O5,v.tP,d.rH,s.j,L.lU,Q.Ls,Y.S,A.a],styles:["[_nghost-%COMP%]{display:block}"],changeDetection:0}),F})()},3043:(Ot,be,a)=>{a.d(be,{y:()=>A});var t=a(6814),i=a(4190),v=a(2524),d=a(551),s=a(7417),L=a(5695),Q=a(1332),Y=a(5879);let A=(()=>{class S{}return S.\u0275fac=function(V){return new(V||S)},S.\u0275mod=Y.oAB({type:S}),S.\u0275inj=Y.cJS({imports:[t.ez,i.Bz,L.X,s.$6,d.PV,Q.I,v.s]}),S})()},3103:(Ot,be,a)=>{a.d(be,{b:()=>A});var t=a(2023),i=a(5879),v=a(6814);const d=function(S){return{background:S}};function s(S,N){if(1&S&&i._UZ(0,"div",3),2&S){const V=i.oxw();i.Q6J("ngStyle",i.VKq(1,d,V.flagColor))}}function L(S,N){if(1&S&&i._UZ(0,"div",4),2&S){const V=i.oxw();i.Q6J("ngStyle",i.VKq(1,d,V.entityColor))}}function Q(S,N){if(1&S&&i._UZ(0,"div",5),2&S){const V=i.oxw();i.Q6J("ngStyle",i.VKq(1,d,V.entityColor))}}const Y=["*"];let A=(()=>{class S{constructor(){this.hasRevisions=!1,this.flagged=!1,this.hasComments=!1,this.entityColor="#AAA",this.flagColor=(0,t.f)("Flag")}}return S.\u0275fac=function(V){return new(V||S)},S.\u0275cmp=i.Xpm({type:S,selectors:[["cvc-icon-badges"]],inputs:{hasRevisions:"hasRevisions",flagged:"flagged",hasComments:"hasComments",entityColor:"entityColor"},ngContentSelectors:Y,decls:4,vars:3,consts:[["class","cvc-badge badge-flags",3,"ngStyle",4,"ngIf"],["class","cvc-badge badge-revisions",3,"ngStyle",4,"ngIf"],["class","cvc-badge badge-comments",3,"ngStyle",4,"ngIf"],[1,"cvc-badge","badge-flags",3,"ngStyle"],[1,"cvc-badge","badge-revisions",3,"ngStyle"],[1,"cvc-badge","badge-comments",3,"ngStyle"]],template:function(V,U){1&V&&(i.F$t(),i.Hsn(0),i.YNc(1,s,1,3,"div",0),i.YNc(2,L,1,3,"div",1),i.YNc(3,Q,1,3,"div",2)),2&V&&(i.xp6(1),i.Q6J("ngIf",U.flagged),i.xp6(1),i.Q6J("ngIf",U.hasRevisions),i.xp6(1),i.Q6J("ngIf",U.hasComments))},dependencies:[v.O5,v.PC],styles:["[_nghost-%COMP%]{display:inline-block;position:relative;line-height:1}.cvc-badge[_ngcontent-%COMP%]{position:absolute;z-index:auto;width:4px;min-width:4px;height:4px;border-radius:100%;box-shadow:0 0 0 1px #fff;background:#aaa}.cvc-badge.badge-revisions[_ngcontent-%COMP%]{top:.5px;right:.5px;transform:translate(50%,-50%)}.cvc-badge.badge-flags[_ngcontent-%COMP%]{top:.5px;left:.5px;transform:translate(-50%,-50%)}.cvc-badge.badge-comments[_ngcontent-%COMP%]{bottom:.5px;right:.5px;transform:translate(50%,50%)}"],changeDetection:0}),S})()},3146:(Ot,be,a)=>{a.d(be,{C:()=>d});var t=a(6814),i=a(2524),v=a(5879);let d=(()=>{class s{}return s.\u0275fac=function(Q){return new(Q||s)},s.\u0275mod=v.oAB({type:s}),s.\u0275inj=v.cJS({imports:[t.ez,i.s]}),s})()},3317:(Ot,be,a)=>{a.d(be,{l:()=>L});var t=a(5879),i=a(6109),v=a(5695),d=a(551);const s=["*"];let L=(()=>{class Q{set href(A){if(!A)throw new Error("link-tag link Input requires string.");this._href=A}get href(){return this._href?this._href:""}}return Q.\u0275fac=function(A){return new(A||Q)},Q.\u0275cmp=t.Xpm({type:Q,selectors:[["cvc-link-tag"]],inputs:{href:"href",tooltip:"tooltip",iconName:"iconName"},ngContentSelectors:s,decls:4,vars:4,consts:[["target","_blank",3,"href"],["nzColor","default","nz-tooltip","",3,"nzTooltipTitle","nzTooltipTrigger"],["nz-icon","","nzTheme","outline",3,"nzType"]],template:function(A,S){1&A&&(t.F$t(),t.TgZ(0,"a",0)(1,"nz-tag",1),t._UZ(2,"i",2),t.Hsn(3),t.qZA()()),2&A&&(t.Q6J("href",S.href,t.LSH),t.xp6(1),t.Q6J("nzTooltipTitle",S.tooltip)("nzTooltipTrigger",S.tooltip?"hover":null),t.xp6(1),t.Q6J("nzType",S.iconName?S.iconName:"link"))},dependencies:[i.SY,v.j,d.Ls],encapsulation:2}),Q})()},6067:(Ot,be,a)=>{a.d(be,{X:()=>L});var t=a(6814),i=a(6109),v=a(5695),d=a(551),s=a(5879);let L=(()=>{class Q{}return Q.\u0275fac=function(A){return new(A||Q)},Q.\u0275mod=s.oAB({type:Q}),Q.\u0275inj=s.cJS({imports:[t.ez,i.cg,v.X,d.PV]}),Q})()},9154:(Ot,be,a)=>{a.d(be,{y:()=>s});var t=a(6814),i=a(551),v=a(5695),d=a(5879);let s=(()=>{class L{}return L.\u0275fac=function(Y){return new(Y||L)},L.\u0275mod=d.oAB({type:L}),L.\u0275inj=d.cJS({imports:[t.ez,v.X,i.PV]}),L})()},3489:(Ot,be,a)=>{a.d(be,{H:()=>S});var t=a(5619),i=a(1687),v=a(1374),d=a(5879),s=a(6814),L=a(5695),Q=a(551),Y=a(8091);function A(N,V){1&N&&(d.TgZ(0,"nz-tag",1),d._UZ(1,"i",2),d.TgZ(2,"span"),d._uU(3,"End of results reached"),d.qZA()())}let S=(()=>{class N{set cvcShowTag(U){void 0!==U&&U&&this.showTag()}constructor(U){this.cdr=U,this.showTag$=new t.X(!1)}showTag(){!1===this.showTag$.getValue()&&(this.showTag$.next(!0),(0,i.F)(3e3).pipe((0,v.P)()).subscribe(()=>{this.showTag$.next(!1),this.cdr.detectChanges()}))}}return N.\u0275fac=function(U){return new(U||N)(d.Y36(d.sBO))},N.\u0275cmp=d.Xpm({type:N,selectors:[["cvc-no-more-rows"]],inputs:{cvcShowTag:"cvcShowTag"},decls:2,vars:3,consts:[["nzColor","warning",4,"ngIf"],["nzColor","warning"],["nz-icon","","nzType","exclamation-circle"]],template:function(U,M){1&U&&(d.YNc(0,A,4,0,"nz-tag",0),d.ALo(1,"ngrxPush")),2&U&&d.Q6J("ngIf",d.lcZ(1,1,M.showTag$))},dependencies:[s.O5,L.j,Q.Ls,Y.fM],encapsulation:2,changeDetection:0}),N})()},2384:(Ot,be,a)=>{a.d(be,{h:()=>N});var t=a(5879),i=a(6814),v=a(5695),d=a(551);function s(V,U){1&V&&t._UZ(0,"i",7)}function L(V,U){1&V&&t._UZ(0,"i",8)}function Q(V,U){1&V&&t._UZ(0,"i",9)}function Y(V,U){1&V&&t._UZ(0,"i",10)}function A(V,U){1&V&&t._UZ(0,"i",10)}function S(V,U){if(1&V&&(t.TgZ(0,"nz-tag",1),t.ynx(1,2),t.YNc(2,s,1,0,"i",3),t.YNc(3,L,1,0,"i",4),t.YNc(4,Q,1,0,"i",5),t.YNc(5,Y,1,0,"i",6),t.YNc(6,A,1,0,"i",6),t.BQk(),t._uU(7),t.ALo(8,"titlecase"),t.qZA()),2&V){const M=t.oxw();t.Q6J("nzColor",M.tagStatus),t.xp6(1),t.Q6J("ngSwitch",M.tagStatus),t.xp6(1),t.Q6J("ngSwitchCase","success"),t.xp6(1),t.Q6J("ngSwitchCase","error"),t.xp6(1),t.Q6J("ngSwitchCase","warning"),t.xp6(1),t.Q6J("ngSwitchCase","processing"),t.xp6(1),t.Q6J("ngSwitchCase","default"),t.xp6(1),t.hij(" ",t.lcZ(8,8,M.status),"\n")}}let N=(()=>{class V{constructor(){this.statusColorMap={ACCEPTED:"success",REJECTED:"error",SUBMITTED:"warning",NEW:"processing",SUPERSEDED:"default",OPEN:"error",RESOLVED:"default"}}set status(M){this._status=M,M&&(this.tagStatus=this.statusColorMap[M])}get status(){return this._status}ngOnInit(){if(void 0===this.status)throw new Error("Must pass a valid EvidenceStatus or RevisionStatus to cvc-status-tag component")}}return V.\u0275fac=function(M){return new(M||V)},V.\u0275cmp=t.Xpm({type:V,selectors:[["cvc-status-tag"]],inputs:{status:"status"},decls:1,vars:1,consts:[[3,"nzColor",4,"ngIf"],[3,"nzColor"],[3,"ngSwitch"],["nz-icon","","nzType","check-circle",4,"ngSwitchCase"],["nz-icon","","nzType","close-circle",4,"ngSwitchCase"],["nz-icon","","nzType","exclamation-circle",4,"ngSwitchCase"],["nz-icon","",4,"ngSwitchCase"],["nz-icon","","nzType","check-circle"],["nz-icon","","nzType","close-circle"],["nz-icon","","nzType","exclamation-circle"],["nz-icon",""]],template:function(M,e){1&M&&t.YNc(0,S,9,10,"nz-tag",0),2&M&&t.Q6J("ngIf",e.tagStatus)},dependencies:[i.O5,i.RF,i.n9,v.j,d.Ls,i.rS],encapsulation:2}),V})()},2655:(Ot,be,a)=>{a.d(be,{x:()=>s});var t=a(6814),i=a(5695),v=a(551),d=a(5879);let s=(()=>{class L{}return L.\u0275fac=function(Y){return new(Y||L)},L.\u0275mod=d.oAB({type:L}),L.\u0275inj=d.cJS({imports:[t.ez,i.X,v.PV]}),L})()},1887:(Ot,be,a)=>{a.d(be,{$:()=>v});var t=a(5879);const i=["*"];let v=(()=>{class d{constructor(){}ngOnInit(){}}return d.\u0275fac=function(L){return new(L||d)},d.\u0275cmp=t.Xpm({type:d,selectors:[["cvc-tag-list"]],hostVars:4,hostBindings:function(L,Q){2&L&&t.ekj("xs","xs"===Q.size||!Q.size)("sm","sm"===Q.size)},inputs:{size:"size"},ngContentSelectors:i,decls:2,vars:0,consts:[[1,"tag-list"]],template:function(L,Q){1&L&&(t.F$t(),t.TgZ(0,"div",0),t.Hsn(1),t.qZA())},styles:["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]   .tag-list[_ngcontent-%COMP%]    >*{display:inline-block}[_nghost-%COMP%]   .tag-list[_ngcontent-%COMP%]    >*:last-child{margin-right:-8px}.xs[_nghost-%COMP%]{margin-bottom:-4px}.xs[_nghost-%COMP%]   .tag-list[_ngcontent-%COMP%]    >*{margin-bottom:4px}.sm[_nghost-%COMP%]{margin-bottom:-8px}.sm[_nghost-%COMP%]   .tag-list[_ngcontent-%COMP%]    >*{margin-bottom:8px}"],changeDetection:0}),d})()},366:(Ot,be,a)=>{a.d(be,{$:()=>v});var t=a(6814),i=a(5879);let v=(()=>{class d{}return d.\u0275fac=function(L){return new(L||d)},d.\u0275mod=i.oAB({type:d}),d.\u0275inj=i.cJS({imports:[t.ez]}),d})()},1813:(Ot,be,a)=>{a.d(be,{p:()=>Z});var t=a(5676),i=a(7398),v=a(2181),d=a(5879),s=a(313),L=a(6814),Q=a(551),Y=a(2962),A=a(8125),S=a(3317),N=a(1887),V=a(3369),U=a(8091);function M(F,R){if(1&F&&(d._UZ(0,"i",11),d._uU(1)),2&F){const O=d.oxw().ngIf;d.xp6(1),d.AsE(" ",O.displayType,":\xa0",O.citation," ")}}function e(F,R){if(1&F&&(d.TgZ(0,"cvc-link-tag",12),d._uU(1),d.qZA()),2&F){const O=d.oxw().ngIf;d.Q6J("href",O.sourceUrl)("tooltip","View on "+O.displayType),d.xp6(1),d.hij(" ",O.displayType+":"+O.citationId," ")}}function I(F,R){1&F&&d._UZ(0,"cvc-clinical-trial-tag",14),2&F&&d.Q6J("clinicalTrial",R.$implicit)("enablePopover",!1)}function k(F,R){if(1&F&&(d.ynx(0),d.TgZ(1,"cvc-tag-list"),d.YNc(2,I,1,2,"cvc-clinical-trial-tag",13),d.qZA(),d.BQk()),2&F){const O=d.oxw().ngIf;d.xp6(2),d.Q6J("ngForOf",O.clinicalTrials)}}function ge(F,R){1&F&&d._uU(0," -- ")}function Ce(F,R){if(1&F&&(d.ynx(0),d.TgZ(1,"nz-card",2),d.YNc(2,M,2,2,"ng-template",null,3,d.W1O),d.YNc(4,e,2,3,"ng-template",null,4,d.W1O),d.TgZ(6,"nz-descriptions",5)(7,"nz-descriptions-item",6),d._uU(8),d.qZA(),d.TgZ(9,"nz-descriptions-item",7),d._uU(10),d.qZA(),d.TgZ(11,"nz-descriptions-item",8),d.YNc(12,k,3,1,"ng-container",9),d.YNc(13,ge,1,0,"ng-template",null,10,d.W1O),d.qZA()()(),d.BQk()),2&F){const O=R.ngIf,P=d.MAs(3),x=d.MAs(5),de=d.MAs(14);d.xp6(1),d.Q6J("nzTitle",P)("nzExtra",x),d.xp6(5),d.Q6J("nzColumn",2),d.xp6(2),d.hij(" ",O.name," "),d.xp6(2),d.hij(" ",O.evidenceItemCount," "),d.xp6(2),d.Q6J("ngIf",O.clinicalTrials&&O.clinicalTrials.length>0)("ngIfElse",de)}}let Z=(()=>{class F{constructor(O){this.gql=O}ngOnInit(){if(null==this.sourceId)throw new Error("cvc-source-popover requires valid sourceId input.");this.source$=this.gql.watch({sourceId:this.sourceId}).valueChanges.pipe((0,i.U)(({data:O})=>O?.sourcePopover),(0,v.h)(t.ep))}}return F.\u0275fac=function(O){return new(O||F)(d.Y36(s.TiL))},F.\u0275cmp=d.Xpm({type:F,selectors:[["cvc-source-popover"]],inputs:{sourceId:"sourceId"},decls:3,vars:3,consts:[["id","popover-content"],[4,"ngIf"],["nzBordered","false","id","card-content",3,"nzTitle","nzExtra"],["cardTitle",""],["linkout",""],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","Title","nzSpan","2"],["nzTitle","Evidence","nzSpan","2"],["nzTitle","Clinical Trials:","nzSpan","2"],[4,"ngIf","ngIfElse"],["noTrials",""],["nz-icon","","nzType","civic-source","nzTheme","twotone","nzTwotoneColor","#F9BA45"],[3,"href","tooltip"],[3,"clinicalTrial","enablePopover",4,"ngFor","ngForOf"],[3,"clinicalTrial","enablePopover"]],template:function(O,P){1&O&&(d.TgZ(0,"div",0),d.YNc(1,Ce,15,7,"ng-container",1),d.ALo(2,"ngrxPush"),d.qZA()),2&O&&(d.xp6(1),d.Q6J("ngIf",d.lcZ(2,1,P.source$)))},dependencies:[L.sg,L.O5,Q.Ls,Y.bd,A.R7,A.uj,S.l,N.$,V.G,U.fM],styles:["[_nghost-%COMP%]{display:block;margin:-8px -12px}[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}[_nghost-%COMP%]     .ant-descriptions-view{border:none}[_nghost-%COMP%]     #entity-child-counts{border-top:1px solid #f0f0f0;padding:8px}[_nghost-%COMP%]     #entity-child-counts nz-space{width:100%}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child nz-tag{margin-right:0}.popover-text[_ngcontent-%COMP%]{width:100%;padding:8px;border-bottom:1px solid #f0f0f0}#popover-content[_ngcontent-%COMP%]{min-width:350px;max-width:500px;min-height:125px}"]}),F})()},6247:(Ot,be,a)=>{a.d(be,{n:()=>A});var t=a(6814),i=a(2962),v=a(6067),d=a(8125),s=a(366),L=a(4605),Q=a(551),Y=a(5879);let A=(()=>{class S{}return S.\u0275fac=function(V){return new(V||S)},S.\u0275mod=Y.oAB({type:S}),S.\u0275inj=Y.cJS({imports:[t.ez,Q.PV,i.vh,d.q6,v.X,s.$,L.N]}),S})()},4138:(Ot,be,a)=>{a.d(be,{T:()=>P});var t=a(8130),i=a(5879),v=a(7023),d=a(6814),s=a(4190),L=a(551),Q=a(7417),Y=a(5695),A=a(1813),S=a(5869),N=a(2616);function V(x,de){}function U(x,de){if(1&x&&(i.ynx(0),i.TgZ(1,"a",4),i.YNc(2,V,0,0,"ng-template",5),i.qZA(),i.BQk()),2&x){const ue=i.oxw(),j=i.MAs(2);i.xp6(1),i.Q6J("routerLink",ue.source.link),i.xp6(1),i.Q6J("ngTemplateOutlet",j)}}function M(x,de){}function e(x,de){if(1&x&&i._UZ(0,"cvc-source-popover",8),2&x){const ue=i.oxw(2);i.Q6J("sourceId",ue.source.id)}}function I(x,de){if(1&x){const ue=i.EpF();i.TgZ(0,"nz-tag",6),i.NdJ("nzPopoverVisibleChange",function(me){i.CHM(ue);const re=i.oxw();return i.KtG(re.popoverVisible=me)})("nzOnClose",function(me){i.CHM(ue);const re=i.oxw();return i.KtG(re.itemClosed(me))}),i.YNc(1,M,0,0,"ng-template",5),i.qZA(),i.YNc(2,e,1,1,"ng-template",null,7,i.W1O)}if(2&x){const ue=i.MAs(3),j=i.oxw(),me=i.MAs(6);i.Q6J("nzPopoverMouseEnterDelay",j.onCloseClicked?0:.5)("nzPopoverContent",ue)("nzPopoverTrigger",j.enablePopover?"hover":null)("nzPopoverVisible",j.popoverVisible)("nzMode",j.onCloseClicked?"closeable":"default"),i.xp6(1),i.Q6J("ngTemplateOutlet",me)}}function k(x,de){}function ge(x,de){if(1&x&&i.YNc(0,k,0,0,"ng-template",5),2&x){i.oxw();const ue=i.MAs(2);i.Q6J("ngTemplateOutlet",ue)}}function Ce(x,de){if(1&x&&(i.ynx(0),i._uU(1),i.ALo(2,"truncate"),i.BQk()),2&x){const ue=i.oxw(3);i.xp6(1),i.hij(" ",i.xi3(2,1,ue.displayName,50)," ")}}function Z(x,de){if(1&x&&(i.ynx(0),i._uU(1),i.BQk()),2&x){const ue=i.oxw(3);i.xp6(1),i.hij(" ",ue.displayName," ")}}function F(x,de){if(1&x&&(i.ynx(0),i.YNc(1,Ce,3,4,"ng-container",11),i.YNc(2,Z,2,1,"ng-container",11),i.BQk()),2&x){const ue=i.oxw(2);i.xp6(1),i.Q6J("ngIf",ue.truncateLongName),i.xp6(1),i.Q6J("ngIf",!ue.truncateLongName)}}function R(x,de){if(1&x&&i._uU(0),2&x){const ue=i.oxw(2);i.hij(" SID:",ue.source.id," ")}}function O(x,de){if(1&x&&(i._UZ(0,"i",9),i.ALo(1,"entityColor"),i.YNc(2,F,3,2,"ng-container",0),i.YNc(3,R,1,1,"ng-template",null,10,i.W1O)),2&x){const ue=i.MAs(4),j=i.oxw();i.Q6J("nzTwotoneColor",i.lcZ(1,3,"Source")),i.xp6(2),i.Q6J("ngIf","normal"===j.mode)("ngIfElse",ue)}}let P=(()=>{class x extends t.a{set source(ue){if(!ue)throw new Error("source-tag source input requires SourceWithDisplayName or SourceWithCitation.");this._source=ue,this.displayName="displayName"in this.source?this.source.displayName:this.sourceTypeDisplay.transform(this.source.sourceType)+": "+this.source.citation}get source(){return this._source}constructor(ue){super(),this.sourceTypeDisplay=ue,this.enablePopover=!0,this.linked=!0,this.mode="normal",this.truncateLongName=!1}idFunction(){return this.source.id}}return x.\u0275fac=function(ue){return new(ue||x)(i.Y36(v.l))},x.\u0275cmp=i.Xpm({type:x,selectors:[["cvc-source-tag"]],inputs:{source:"source",enablePopover:"enablePopover",linked:"linked",mode:"mode",truncateLongName:"truncateLongName"},features:[i.qOj],decls:7,vars:2,consts:[[4,"ngIf","ngIfElse"],["tag",""],["unlinked",""],["tagContent",""],[3,"routerLink"],[3,"ngTemplateOutlet"],["nz-popover","","nzPopoverPlacement","right",3,"nzPopoverMouseEnterDelay","nzPopoverContent","nzPopoverTrigger","nzPopoverVisible","nzMode","nzPopoverVisibleChange","nzOnClose"],["sourcePopover",""],[3,"sourceId"],["nz-icon","","nzTheme","twotone","nzType","civic-source",3,"nzTwotoneColor"],["concise",""],[4,"ngIf"]],template:function(ue,j){if(1&ue&&(i.YNc(0,U,3,2,"ng-container",0),i.YNc(1,I,4,6,"ng-template",null,1,i.W1O),i.YNc(3,ge,1,1,"ng-template",null,2,i.W1O),i.YNc(5,O,5,5,"ng-template",null,3,i.W1O)),2&ue){const me=i.MAs(4);i.Q6J("ngIf",j.linked)("ngIfElse",me)}},dependencies:[d.O5,d.tP,s.rH,L.Ls,Q.lU,Y.j,A.p,S.W,N.a],styles:["[_nghost-%COMP%]{display:inline-block}"],changeDetection:0}),x})()},8641:(Ot,be,a)=>{a.d(be,{s:()=>A});var t=a(6814),i=a(7417),v=a(4190),d=a(6247),s=a(5695),L=a(551),Q=a(2524),Y=a(5879);let A=(()=>{class S{}return S.\u0275fac=function(V){return new(V||S)},S.\u0275mod=Y.oAB({type:S}),S.\u0275inj=Y.cJS({imports:[t.ez,v.Bz,L.PV,i.$6,s.X,d.n,Q.s]}),S})()},96:(Ot,be,a)=>{a.d(be,{a:()=>P});var t=a(7398),i=a(2181),v=a(5676),d=a(5879),s=a(313),L=a(6814),Q=a(2962),Y=a(8125),A=a(551),S=a(2392),N=a(5695),V=a(6109),U=a(3317),M=a(8091),e=a(5869);function I(x,de){if(1&x&&(d._UZ(0,"i",12),d._uU(1),d.ALo(2,"truncate")),2&x){const ue=d.oxw().ngIf;d.xp6(1),d.hij(" ",d.xi3(2,1,ue.name,50)," ")}}function k(x,de){if(1&x&&(d.TgZ(0,"cvc-link-tag",14),d._uU(1),d.qZA()),2&x){const ue=d.oxw(2).ngIf;d.Q6J("href",ue.therapyUrl),d.xp6(1),d.hij(" ",ue.ncitId," ")}}function ge(x,de){if(1&x&&d.YNc(0,k,2,2,"cvc-link-tag",13),2&x){const ue=d.oxw().ngIf,j=d.MAs(7);d.Q6J("ngIf",ue.ncitId)("ngIfElse",j)}}function Ce(x,de){1&x&&(d.TgZ(0,"span",15),d._uU(1,"No NCIt ID"),d.qZA())}function Z(x,de){if(1&x&&(d.TgZ(0,"nz-descriptions-item",16),d._uU(1),d.qZA()),2&x){const ue=d.oxw().ngIf;d.xp6(1),d.hij(" ",ue.name," ")}}function F(x,de){if(1&x&&(d.TgZ(0,"nz-tag",19),d._uU(1),d.ALo(2,"truncate"),d.qZA()),2&x){const ue=de.$implicit;d.Q6J("nzTooltipTitle",ue),d.xp6(1),d.Oqu(d.lcZ(2,2,ue))}}function R(x,de){if(1&x&&(d.TgZ(0,"nz-descriptions-item",17),d.YNc(1,F,3,4,"nz-tag",18),d.qZA()),2&x){const ue=d.oxw().ngIf;d.xp6(1),d.Q6J("ngForOf",ue.therapyAliases)}}function O(x,de){if(1&x&&(d.ynx(0),d.TgZ(1,"nz-card",2),d.YNc(2,I,3,4,"ng-template",null,3,d.W1O),d.YNc(4,ge,1,2,"ng-template",null,4,d.W1O),d.YNc(6,Ce,2,0,"ng-template",null,5,d.W1O),d.TgZ(8,"nz-descriptions",6),d.YNc(9,Z,2,1,"nz-descriptions-item",7),d.YNc(10,R,2,1,"nz-descriptions-item",8),d.TgZ(11,"nz-descriptions-item",9),d._uU(12),d.qZA(),d.TgZ(13,"nz-descriptions-item",10),d._uU(14),d.qZA(),d.TgZ(15,"nz-descriptions-item",11),d._uU(16),d.qZA()()(),d.BQk()),2&x){const ue=de.ngIf,j=d.MAs(3),me=d.MAs(5);d.xp6(1),d.Q6J("nzTitle",j)("nzExtra",me),d.xp6(7),d.Q6J("nzColumn",2),d.xp6(1),d.Q6J("ngIf",ue.name.length>50),d.xp6(1),d.Q6J("ngIf",ue.therapyAliases.length>0),d.xp6(2),d.hij(" ",ue.assertionCount," "),d.xp6(2),d.hij(" ",ue.evidenceItemCount," "),d.xp6(2),d.hij(" ",ue.molecularProfileCount," ")}}let P=(()=>{class x{constructor(ue){this.gql=ue}ngOnInit(){if(null==this.therapyId)throw new Error("cvc-therapy-popover requires valid therapyId input.");this.therapy$=this.gql.watch({therapyId:this.therapyId}).valueChanges.pipe((0,t.U)(({data:ue})=>ue?.therapyPopover),(0,i.h)(v.ep))}}return x.\u0275fac=function(ue){return new(ue||x)(d.Y36(s.L8L))},x.\u0275cmp=d.Xpm({type:x,selectors:[["cvc-therapy-popover"]],inputs:{therapyId:"therapyId"},decls:3,vars:3,consts:[["id","popover-content"],[4,"ngIf"],["nzBordered","false","id","card-content",3,"nzTitle","nzExtra"],["cardTitle",""],["linkout",""],["noNcitId",""],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","Name","nzSpan","2",4,"ngIf"],["nzTitle","Aliases","nzSpan","2",4,"ngIf"],["nzTitle","Assertions","nzSpan","2"],["nzTitle","Evidence","nzSpan","2"],["nzTitle","Molecular Profiles","nzSpan","2"],["nz-icon","","nzType","civic-therapy","nzTheme","twotone","nzTwotoneColor","#AC3996"],["tooltip","View on NCI Thesaurus",3,"href",4,"ngIf","ngIfElse"],["tooltip","View on NCI Thesaurus",3,"href"],["nz-typography","","nzType","secondary"],["nzTitle","Name","nzSpan","2"],["nzTitle","Aliases","nzSpan","2"],["nz-tooltip","",3,"nzTooltipTitle",4,"ngFor","ngForOf"],["nz-tooltip","",3,"nzTooltipTitle"]],template:function(ue,j){1&ue&&(d.TgZ(0,"div",0),d.YNc(1,O,17,8,"ng-container",1),d.ALo(2,"ngrxPush"),d.qZA()),2&ue&&(d.xp6(1),d.Q6J("ngIf",d.lcZ(2,1,j.therapy$)))},dependencies:[L.sg,L.O5,Q.bd,Y.R7,Y.uj,A.Ls,S.ZU,N.j,V.SY,U.l,M.fM,e.W],styles:["[_nghost-%COMP%]{display:block;margin:-8px -12px}[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}[_nghost-%COMP%]     .ant-descriptions-view{border:none}[_nghost-%COMP%]     #entity-child-counts{border-top:1px solid #f0f0f0;padding:8px}[_nghost-%COMP%]     #entity-child-counts nz-space{width:100%}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child nz-tag{margin-right:0}.popover-text[_ngcontent-%COMP%]{width:100%;padding:8px;border-bottom:1px solid #f0f0f0}#popover-content[_ngcontent-%COMP%]{min-width:350px;max-width:500px;min-height:125px}"]}),x})()},1207:(Ot,be,a)=>{a.d(be,{s:()=>V});var t=a(6814),i=a(4190),v=a(2962),d=a(8125),s=a(6067),L=a(551),Q=a(2392),Y=a(2524),A=a(5695),S=a(6109),N=a(5879);let V=(()=>{class U{}return U.\u0275fac=function(e){return new(e||U)},U.\u0275mod=N.oAB({type:U}),U.\u0275inj=N.cJS({imports:[t.ez,i.Bz,v.vh,d.q6,L.PV,Q.ZJ,A.X,S.cg,s.X,Y.s]}),U})()},4770:(Ot,be,a)=>{a.d(be,{T:()=>Z});var t=a(8130),i=a(5879),v=a(6814),d=a(4190),s=a(5695),L=a(7417),Q=a(551),Y=a(96),A=a(5869);function S(F,R){}function N(F,R){if(1&F&&(i.ynx(0),i.TgZ(1,"a",4),i.YNc(2,S,0,0,"ng-template",5),i.qZA(),i.BQk()),2&F){const O=i.oxw(),P=i.MAs(2);i.xp6(1),i.Q6J("routerLink",O.therapy.link),i.xp6(1),i.Q6J("ngTemplateOutlet",P)}}function V(F,R){}function U(F,R){if(1&F&&i._UZ(0,"cvc-therapy-popover",8),2&F){const O=i.oxw(2);i.Q6J("therapyId",O.therapy.id)}}function M(F,R){if(1&F){const O=i.EpF();i.TgZ(0,"nz-tag",6),i.NdJ("nzOnClose",function(x){i.CHM(O);const de=i.oxw();return i.KtG(de.itemClosed(x))}),i.YNc(1,V,0,0,"ng-template",5),i.qZA(),i.YNc(2,U,1,1,"ng-template",null,7,i.W1O)}if(2&F){const O=i.MAs(3),P=i.oxw(),x=i.MAs(6);i.Q6J("nzPopoverMouseEnterDelay",P.onCloseClicked?0:.5)("nzPopoverContent",O)("nzPopoverTrigger",P.enablePopover?"hover":null)("nzMode",P.onCloseClicked?"closeable":"default"),i.xp6(1),i.Q6J("ngTemplateOutlet",x)}}function e(F,R){}function I(F,R){if(1&F&&i.YNc(0,e,0,0,"ng-template",5),2&F){i.oxw();const O=i.MAs(2);i.Q6J("ngTemplateOutlet",O)}}function k(F,R){if(1&F&&(i.ynx(0),i._uU(1),i.ALo(2,"truncate"),i.BQk()),2&F){const O=i.oxw(2);i.xp6(1),i.hij(" ",i.xi3(2,1,O.therapy.name,21)," ")}}function ge(F,R){if(1&F&&i._uU(0),2&F){const O=i.oxw(2);i.hij(" ",O.therapy.name," ")}}function Ce(F,R){if(1&F&&(i._UZ(0,"i",9),i.YNc(1,k,3,4,"ng-container",0),i.YNc(2,ge,1,1,"ng-template",null,10,i.W1O)),2&F){const O=i.MAs(3),P=i.oxw();i.xp6(1),i.Q6J("ngIf",P.truncateLongName)("ngIfElse",O)}}let Z=(()=>{class F extends t.a{constructor(){super(...arguments),this.enablePopover=!0,this.truncateLongName=!1}set therapy(O){if(!O)throw new Error("therapy-tag Input requires LinkableTherapy.");this._therapy=O}get therapy(){return this._therapy}idFunction(){return this.therapy.id}}return F.\u0275fac=function(){let R;return function(P){return(R||(R=i.n5z(F)))(P||F)}}(),F.\u0275cmp=i.Xpm({type:F,selectors:[["cvc-therapy-tag"]],inputs:{therapy:"therapy",enablePopover:"enablePopover",truncateLongName:"truncateLongName"},features:[i.qOj],decls:7,vars:2,consts:[[4,"ngIf","ngIfElse"],["tag",""],["unlinked",""],["tagContent",""],[3,"routerLink"],[3,"ngTemplateOutlet"],["nz-popover","","nzPopoverPlacement","right",3,"nzPopoverMouseEnterDelay","nzPopoverContent","nzPopoverTrigger","nzMode","nzOnClose"],["therapyPopover",""],[3,"therapyId"],["nz-icon","","nzType","civic-therapy","nzTheme","twotone","nzTwotoneColor","#AC3996"],["fullName",""]],template:function(O,P){if(1&O&&(i.YNc(0,N,3,2,"ng-container",0),i.YNc(1,M,4,5,"ng-template",null,1,i.W1O),i.YNc(3,I,1,1,"ng-template",null,2,i.W1O),i.YNc(5,Ce,4,2,"ng-template",null,3,i.W1O)),2&O){const x=i.MAs(4);i.Q6J("ngIf",P.linked)("ngIfElse",x)}},dependencies:[v.O5,v.tP,d.rH,s.j,L.lU,Q.Ls,Y.a,A.W],encapsulation:2,changeDetection:0}),F})()},6061:(Ot,be,a)=>{a.d(be,{N:()=>A});var t=a(6814),i=a(4190),v=a(5695),d=a(7417),s=a(551),L=a(2524),Q=a(1207),Y=a(5879);let A=(()=>{class S{}return S.\u0275fac=function(V){return new(V||S)},S.\u0275mod=Y.oAB({type:S}),S.\u0275inj=Y.cJS({imports:[t.ez,i.Bz,v.X,d.$6,s.PV,L.s,Q.s]}),S})()},8545:(Ot,be,a)=>{a.d(be,{m:()=>ue});var t=a(5676),i=a(7398),v=a(2181),d=a(5879),s=a(313),L=a(6814),Q=a(4190),Y=a(2962),A=a(95),S=a(8125),N=a(5695),V=a(551),U=a(2574),M=a(4121),e=a(3317),I=a(8091),k=a(2616);function ge(j,me){if(1&j&&(d._UZ(0,"i",13),d.ALo(1,"entityColor"),d._uU(2)),2&j){const re=d.oxw().ngIf;d.Q6J("nzTwotoneColor",d.lcZ(1,2,"Variant")),d.xp6(2),d.hij(" ",re.name," ")}}function Ce(j,me){if(1&j&&d._UZ(0,"cvc-gene-tag",14),2&j){const re=d.oxw().ngIf;d.Q6J("enablePopover",!1)("gene",re.gene)}}function Z(j,me){if(1&j&&(d.TgZ(0,"nz-tag"),d._uU(1),d.qZA()),2&j){const re=me.$implicit;d.xp6(1),d.Oqu(re)}}function F(j,me){if(1&j&&(d.TgZ(0,"nz-descriptions-item",15),d.YNc(1,Z,2,1,"nz-tag",16),d.qZA()),2&j){const re=d.oxw().ngIf;d.xp6(1),d.Q6J("ngForOf",re.variantAliases)}}function R(j,me){if(1&j&&(d.TgZ(0,"nz-descriptions-item",17)(1,"cvc-link-tag",18),d._uU(2),d.qZA()()),2&j){const re=d.oxw().ngIf;d.xp6(1),d.MGl("href","https://reg.genome.network/allele/",re.alleleRegistryId,".html"),d.xp6(1),d.hij(" ",re.alleleRegistryId," ")}}function O(j,me){if(1&j&&(d.TgZ(0,"a",19)(1,"nz-tag",20),d._UZ(2,"i",21),d._uU(3),d.qZA()()),2&j){const re=d.oxw().ngIf;d.MGl("routerLink","/variants/",re.id,"/flags"),d.xp6(3),d.hij(" Flags (",re.flags.totalCount,") ")}}function P(j,me){if(1&j&&(d.TgZ(0,"a",19)(1,"nz-tag",22),d._UZ(2,"i",23),d._uU(3),d.qZA()()),2&j){const re=d.oxw().ngIf;d.MGl("routerLink","/variants/",re.id,"/revisions"),d.xp6(3),d.hij(" Revisions (",re.revisions.totalCount,") ")}}function x(j,me){if(1&j&&(d.TgZ(0,"a",19)(1,"nz-tag",24),d._UZ(2,"i",25),d._uU(3),d.qZA()()),2&j){const re=d.oxw().ngIf;d.MGl("routerLink","/variants/",re.id,"/comments"),d.xp6(3),d.hij(" Comments (",re.comments.totalCount,") ")}}function de(j,me){if(1&j&&(d.ynx(0),d.TgZ(1,"nz-card",2),d.YNc(2,ge,3,4,"ng-template",null,3,d.W1O),d.YNc(4,Ce,1,2,"ng-template",null,4,d.W1O),d.TgZ(6,"nz-descriptions",5),d.YNc(7,F,2,1,"nz-descriptions-item",6),d.YNc(8,R,3,2,"nz-descriptions-item",7),d.TgZ(9,"nz-descriptions-item",8),d._uU(10),d.qZA()(),d.TgZ(11,"nz-row",9)(12,"nz-col",10)(13,"nz-space",11),d.YNc(14,O,4,2,"a",12),d.YNc(15,P,4,2,"a",12),d.YNc(16,x,4,2,"a",12),d.qZA()()()(),d.BQk()),2&j){const re=me.ngIf,he=d.MAs(3),Me=d.MAs(5);d.xp6(1),d.Q6J("nzTitle",he)("nzExtra",Me),d.xp6(5),d.Q6J("nzColumn",2),d.xp6(1),d.Q6J("ngIf",re.variantAliases.length>0),d.xp6(1),d.Q6J("ngIf",re.alleleRegistryId&&"unregistered"!=re.alleleRegistryId),d.xp6(2),d.hij(" ",re.molecularProfiles.totalCount," ")}}let ue=(()=>{class j{constructor(re){this.gql=re}ngOnInit(){if(void 0===this.variantId)throw new Error("Must pass a variant ID into the variant popover component.");this.variant$=this.gql.watch({variantId:this.variantId}).valueChanges.pipe((0,i.U)(({data:re})=>re?.variant),(0,v.h)(t.ep))}}return j.\u0275fac=function(re){return new(re||j)(d.Y36(s.ZYZ))},j.\u0275cmp=d.Xpm({type:j,selectors:[["cvc-variant-popover"]],inputs:{variantId:"variantId"},decls:3,vars:3,consts:[["id","popover-content"],[4,"ngIf"],["nzBordered","false","id","card-content",3,"nzTitle","nzExtra"],["cardTitle",""],["gene",""],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","Aliases","nzSpan","2",4,"ngIf"],["nzTitle","Allele Registry ID","nzSpan","2",4,"ngIf"],["nzTitle","Molecular Profiles","nzSpan","2"],["id","entity-child-counts"],["nzSpan","24"],["nzSize","small"],[3,"routerLink",4,"nzSpaceItem"],["nz-icon","","nzTheme","twotone","nzType","civic-variant",3,"nzTwotoneColor"],[3,"enablePopover","gene"],["nzTitle","Aliases","nzSpan","2"],[4,"ngFor","ngForOf"],["nzTitle","Allele Registry ID","nzSpan","2"],["tooltip","View on the ClinGen Allele Registry",3,"href"],[3,"routerLink"],["nzColor","red"],["nz-icon","","nzType","civic-flag"],["nzColor","orange"],["nz-icon","","nzType","civic-revision"],["nzColor","blue"],["nz-icon","","nzType","civic-comment"]],template:function(re,he){1&re&&(d.TgZ(0,"div",0),d.YNc(1,de,17,6,"ng-container",1),d.ALo(2,"ngrxPush"),d.qZA()),2&re&&(d.xp6(1),d.Q6J("ngIf",d.lcZ(2,1,he.variant$)))},dependencies:[L.sg,L.O5,Q.rH,Y.bd,A.t3,A.SK,S.R7,S.uj,N.j,V.Ls,U.NU,U.$1,M.H,e.l,I.fM,k.a],styles:["[_nghost-%COMP%]{display:block;margin:-8px -12px}[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}[_nghost-%COMP%]     .ant-descriptions-view{border:none}[_nghost-%COMP%]     #entity-child-counts{border-top:1px solid #f0f0f0;padding:8px}[_nghost-%COMP%]     #entity-child-counts nz-space{width:100%}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child nz-tag{margin-right:0}.popover-text[_ngcontent-%COMP%]{width:100%;padding:8px;border-bottom:1px solid #f0f0f0}#popover-content[_ngcontent-%COMP%]{min-width:350px;max-width:500px;min-height:125px}"]}),j})()},6446:(Ot,be,a)=>{a.d(be,{k:()=>U});var t=a(6814),i=a(4190),v=a(2962),d=a(95),s=a(8125),L=a(5695),Q=a(551),Y=a(2574),A=a(5956),S=a(6067),N=a(2524),V=a(5879);let U=(()=>{class M{}return M.\u0275fac=function(I){return new(I||M)},M.\u0275mod=V.oAB({type:M}),M.\u0275inj=V.cJS({imports:[t.ez,i.Bz,v.vh,d.Jb,s.q6,L.X,Q.PV,Y.zf,N.s,A.U,S.X]}),M})()},9408:(Ot,be,a)=>{a.d(be,{I:()=>P});var t=a(8130),i=a(2023),v=a(5879),d=a(6814),s=a(4190),L=a(5695),Q=a(7417),Y=a(551),A=a(8545),S=a(3103),N=a(5869);function V(x,de){}function U(x,de){if(1&x&&(v.ynx(0),v.TgZ(1,"a",4),v.YNc(2,V,0,0,"ng-template",5),v.qZA(),v.BQk()),2&x){const ue=v.oxw(),j=v.MAs(2);v.xp6(1),v.Q6J("routerLink",ue.variant.link),v.xp6(1),v.Q6J("ngTemplateOutlet",j)}}function M(x,de){}function e(x,de){if(1&x&&v._UZ(0,"cvc-variant-popover",9),2&x){const ue=v.oxw(3);v.Q6J("variantId",ue.variant.id)}}function I(x,de){if(1&x&&v.YNc(0,e,1,1,"cvc-variant-popover",8),2&x){const ue=v.oxw(2);v.Q6J("ngIf",ue.enablePopover)}}const k=function(x){return{deprecated:x}};function ge(x,de){if(1&x){const ue=v.EpF();v.TgZ(0,"nz-tag",6),v.NdJ("nzOnClose",function(me){v.CHM(ue);const re=v.oxw();return v.KtG(re.itemClosed(me))}),v.YNc(1,M,0,0,"ng-template",5),v.qZA(),v.YNc(2,I,1,1,"ng-template",null,7,v.W1O)}if(2&x){const ue=v.MAs(3),j=v.oxw(),me=v.MAs(6);v.Q6J("ngClass",v.VKq(6,k,j.variant.deprecated))("nzPopoverMouseEnterDelay",j.onCloseClicked?0:.5)("nzPopoverContent",ue)("nzPopoverTrigger",j.enablePopover?"hover":null)("nzMode",j.onCloseClicked?"closeable":"default"),v.xp6(1),v.Q6J("ngTemplateOutlet",me)}}function Ce(x,de){}function Z(x,de){if(1&x&&v.YNc(0,Ce,0,0,"ng-template",5),2&x){v.oxw();const ue=v.MAs(2);v.Q6J("ngTemplateOutlet",ue)}}function F(x,de){if(1&x&&(v.ynx(0),v._uU(1),v.ALo(2,"truncate"),v.BQk()),2&x){const ue=v.oxw(2);v.xp6(1),v.hij(" ",v.xi3(2,1,ue.variant.name,20)," ")}}function R(x,de){if(1&x&&v._uU(0),2&x){const ue=v.oxw(2);v.hij(" ",ue.variant.name," ")}}function O(x,de){if(1&x&&(v.TgZ(0,"cvc-icon-badges",10),v._UZ(1,"i",11),v.qZA(),v.YNc(2,F,3,4,"ng-container",0),v.YNc(3,R,1,1,"ng-template",null,12,v.W1O)),2&x){const ue=v.MAs(4),j=v.oxw();v.Q6J("flagged",j.variant.flagged)("entityColor",j.iconColor),v.xp6(1),v.Q6J("nzTwotoneColor",j.iconColor),v.xp6(1),v.Q6J("ngIf",j.truncateLongName)("ngIfElse",ue)}}let P=(()=>{class x extends t.a{constructor(){super(),this.enablePopover=!0,this.truncateLongName=!1,this.iconColor=(0,i.f)("Variant")}idFunction(){return this.variant.id}ngOnInit(){if(super.ngOnInit(),void 0===this.variant)throw new Error("cvc-variant-tag requires LinkableVariant input, none supplied.")}}return x.\u0275fac=function(ue){return new(ue||x)},x.\u0275cmp=v.Xpm({type:x,selectors:[["cvc-variant-tag"]],inputs:{variant:"variant",enablePopover:"enablePopover",truncateLongName:"truncateLongName"},features:[v.qOj],decls:7,vars:2,consts:[[4,"ngIf","ngIfElse"],["tag",""],["unlinked",""],["tagContent",""],[3,"routerLink"],[3,"ngTemplateOutlet"],["nz-popover","",3,"ngClass","nzPopoverMouseEnterDelay","nzPopoverContent","nzPopoverTrigger","nzMode","nzOnClose"],["popoverContent",""],[3,"variantId",4,"ngIf"],[3,"variantId"],[3,"flagged","entityColor"],["nz-icon","","nzType","civic-variant","nzTheme","twotone",3,"nzTwotoneColor"],["fullName",""]],template:function(ue,j){if(1&ue&&(v.YNc(0,U,3,2,"ng-container",0),v.YNc(1,ge,4,8,"ng-template",null,1,v.W1O),v.YNc(3,Z,1,1,"ng-template",null,2,v.W1O),v.YNc(5,O,5,5,"ng-template",null,3,v.W1O)),2&ue){const me=v.MAs(4);v.Q6J("ngIf",j.linked)("ngIfElse",me)}},dependencies:[d.mk,d.O5,d.tP,s.rH,L.j,Q.lU,Y.Ls,A.m,S.b,N.W],styles:["[_nghost-%COMP%]     nz-tag.rejected, [_nghost-%COMP%]     nz-tag.submitted, [_nghost-%COMP%]     nz-tag.accepted, [_nghost-%COMP%]     nz-tag.deprecated{border-right-width:2px}[_nghost-%COMP%]     nz-tag.rejected, [_nghost-%COMP%]     nz-tag.deprecated{border-color:#e6e6e6;background-color:#fff;color:#999999d9}[_nghost-%COMP%]     nz-tag.submitted{border-color:#ffe58f}[_nghost-%COMP%]     nz-tag.accepted{border-color:#b7eb8f}[_nghost-%COMP%]{display:inline-block}"],changeDetection:0}),x})()},7528:(Ot,be,a)=>{a.d(be,{Q:()=>S});var t=a(6814),i=a(4190),v=a(5695),d=a(551),s=a(7417),L=a(6446),Q=a(2524),Y=a(3146),A=a(5879);let S=(()=>{class N{}return N.\u0275fac=function(U){return new(U||N)},N.\u0275mod=A.oAB({type:N}),N.\u0275inj=A.cJS({imports:[t.ez,i.Bz,v.X,s.$6,d.PV,Q.s,L.k,Y.C]}),N})()},3702:(Ot,be,a)=>{a.d(be,{t:()=>i});var t=a(5879);let i=(()=>{class v{transform(s,L){return s?"verbose"==L?"TIER_I_LEVEL_A"===s?"Tier I - Level A":"TIER_I_LEVEL_B"===s?"Tier I - Level B":"TIER_II_LEVEL_C"===s?"Tier II - Level C":"TIER_II_LEVEL_D"===s?"Tier II - Level D":"TIER_III"===s?"Tier III":"TIER_IV"===s?"Tier IV":"Not Applicable":s.toUpperCase().replace("TIER","").replace("LEVEL","").replace(/ /g,"").replace(/_/g,""):""}}return v.\u0275fac=function(s){return new(s||v)},v.\u0275pipe=t.Yjl({name:"formatAmp",type:v,pure:!0}),v})()},2616:(Ot,be,a)=>{a.d(be,{a:()=>v});var t=a(2023),i=a(5879);let v=(()=>{class d{transform(L){return(0,t.f)(L)}}return d.\u0275fac=function(L){return new(L||d)},d.\u0275pipe=i.Yjl({name:"entityColor",type:d,pure:!0}),d})()},6967:(Ot,be,a)=>{a.d(be,{Do:()=>L});var t=a(313),i=a(2),v=a(5879);const d=new Map([[t.Sx0.A,"Validated association"],[t.Sx0.B,"Clinical evidence"],[t.Sx0.C,"Case study"],[t.Sx0.D,"Preclinical evidence"],[t.Sx0.E,"Inferential association"]]),s=new Map([[1,"One Star"],[2,"Two Stars"],[3,"Three Stars"],[4,"Four Stars"],[5,"Five Stars"]]);let L=(()=>{class Q{transform(A,S="display-string"){return null==A?"":"short-string"===S&&1===A.toString().length?"string"==typeof A?A:A.toString():"icon-name"===S?"number"==typeof A?`civic-rating${A}`:1===A.length?`civic-level${A.toLowerCase()}`:`civic-${A.replace(/_/g,"").toLowerCase()}`:"number"==typeof A?s.get(A)||A.toString():1===A.length?d.get(A)||A:(0,i.E)(A)}}return Q.\u0275fac=function(A){return new(A||Q)},Q.\u0275pipe=v.Yjl({name:"evidenceEnumDisplay",type:Q,pure:!0}),Q})()},8004:(Ot,be,a)=>{a.d(be,{v:()=>L});var t=a(313);const i={evidenceType:{[t.kqt.Diagnostic]:"Evidence pertains to a variant's impact on patient diagnosis (cancer subtype)",[t.kqt.Functional]:"Evidence pertains to a variant that alters biological function from the reference state",[t.kqt.Oncogenic]:"Evidence pertains to a somatic variant's involvement in tumor pathogenesis as described by the Hallmarks of Cancer",[t.kqt.Predictive]:"Evidence pertains to a variant's effect on therapeutic response",[t.kqt.Predisposing]:"Evidence pertains to a germline variant's role in conferring susceptibility to disease (including pathogenicity evaluations)",[t.kqt.Prognostic]:"Evidence pertains to a variant's impact on disease progression, severity, or patient survival"},assertionType:{[t.uBv.Diagnostic]:"Assertion pertains to a variant's impact on patient diagnosis (cancer subtype)",[t.uBv.Predictive]:"Assertion pertains to a variant's effect on therapeutic response",[t.uBv.Predisposing]:"Assertion pertains to a germline variant's role in conferring susceptibility to disease (including pathogenicity evaluations)",[t.uBv.Prognostic]:"Assertion pertains to a variant's impact on disease progression, severity, or patient survival",[t.uBv.Oncogenic]:"Assertion pertains to a somatic variant's role in driving tumor formation, growth, and other processes related to the Hallmarks of Cancer"},variantOrigin:{[t.huM.Somatic]:"Variant is a mutation, found only in tumor cells, having arisen in a specific tissue (non-germ cell), and is not expected to be inherited or passed to offspring",[t.huM.RareGermline]:"Variant is found in every cell (not restricted to tumor/diseased cells) and is thought to exist in less than 1% of the population relevant to this evidence item",[t.huM.CommonGermline]:"Variant is found in every cell (not restricted to tumor/diseased cells) and is thought to exist in at least 1% of the population relevant to this evidence item",[t.huM.Unknown]:"The variant origin is uncertain based on the available evidence",[t.huM.Na]:"The variant type (e.g., expression) is not compatible (or easily classified) with the CIViC concept of variant origin",[t.huM.Combined]:"Variants in the Molecular Profile span multiple Origin types."},evidenceLevel:{[t.Sx0.A]:"Proven/consensus association in human medicine",[t.Sx0.B]:"Clinical trial or other primary patient data supports association",[t.Sx0.C]:"Individual case reports from clinical journals",[t.Sx0.D]:"In vivo or in vitro models support association",[t.Sx0.E]:"Indirect evidence"},evidenceLevelBrief:{[t.Sx0.A]:"Validated association",[t.Sx0.B]:"Clinical evidence",[t.Sx0.C]:"Case Study",[t.Sx0.D]:"Preclinical evidence",[t.Sx0.E]:"Inferential association"},therapyInteractionType:{[t.wkr.Combination]:"The therapies listed were used as part of a combination therapy approach",[t.wkr.Sequential]:"The therapies listed were used at separate timepoints in the same treatment plan",[t.wkr.Substitutes]:"The therapies listed are often considered to be of the same family, or behave similarly in a treatment setting"},evidenceRating:{1:"Poor - Claim is not supported well by experimental evidence. Results are not reproducible, or have very small sample size. No follow-up is done to validate novel claims",2:"Adequate - Evidence is not well supported by experimental data, and little follow-up data is available. Experiments may lack proper controls, have small sample size, or are not statistically convincing",3:"Average - Evidence is convincing, but not supported by a breadth of experiments. May be smaller scale projects, or novel results without many follow-up experiments. Discrepancies from expected results are explained and not concerning",4:"Strong - Well supported evidence. Experiments are well controlled, and results are convincing. Any discrepancies from expected results are well-explained and not concerning",5:"Excellent - Solid, well supported evidence from a lab or journal with respected academic standing. Experiments are well controlled, and results are clean and reproducible across multiple replicates. Evidence confirmed using separate methods"}},v={significance:{PREDICTIVE:{ADVERSE_RESPONSE:{EvidenceItem:"Associated with an adverse response to theraputic treatment",Assertion:"Associated with an adverse response to theraputic treatment"},REDUCED_SENSITIVITY:{EvidenceItem:"Response to treatment is lower than seen in other treatment contexts",Assertion:"Response to treatment is lower than seen in other treatment contexts"},RESISTANCE:{EvidenceItem:"Associated with clinical or preclinical resistance to treatment",Assertion:"Associated with clinical or preclinical resistance to treatment"},SENSITIVITYRESPONSE:{EvidenceItem:"Associated with clinical or preclinical response to treatment",Assertion:"Associated with a clinical or preclinical response to treatment"},NA:{EvidenceItem:"Clinical Significance is not applicable",Assertion:"Clinical Significance is not applicable"}},DIAGNOSTIC:{POSITIVE:{EvidenceItem:"Associated with diagnosis of disease or subtype",Assertion:"Associated with diagnosis of disease or subtype"},NEGATIVE:{EvidenceItem:"Associated with lack of disease or subtype",Assertion:"Associated with lack of disease or subtype"}},PROGNOSTIC:{BETTER_OUTCOME:{EvidenceItem:"Demonstrates better than expected clinical outcome",Assertion:"Demonstrates better than expected clinical outcome"},POOR_OUTCOME:{EvidenceItem:"Demonstrates worse than expected clinical outcome",Assertion:"Demonstrates worse than expected clinical outcome"},Na:{EvidenceItem:"Clinical Significance is not applicable",Assertion:"Clinical Significance is not applicable"}},PREDISPOSING:{PATHOGENIC:{Assertion:"Very strong evidence the variant is pathogenic"},LIKELY_PATHOGENIC:{Assertion:"Strong evidence (>90% certainty) the variant is pathogenic"},BENIGN:{Assertion:"Very strong evidence the variant is benign"},LIKELY_BENIGN:{Assertion:"Not expected to have a major effect on disease"},UNCERTAIN_SIGNIFICANCE:{Assertion:"Does not meet the ACMG/AMP criteria for pathogenic/benign, or the evidence is conflicting"},Na:{EvidenceItem:"Clinical Significance is not applicable"},PREDISPOSITION:{EvidenceItem:"Germline variant has predisposing potential for cancer, and may meet ACMG/AMP criteria supporting pathogenic or benign classification."},PROTECTIVENESS:{EvidenceItem:"Germline variant has properties that protect individuals from acquiring cancer."}},ONCOGENIC:{ONCOGENICITY:{EvidenceItem:"Somatic variant has oncogenic potential for driving cancer, and may meet ClinGen/CGC/VICC criteria supporting pathogenic or benign classification."},PROTECTIVENESS:{EvidenceItem:"Somatic variant has a protective role and minimizes co-occuring driver variants, tumor malignancy, or other oncogenic tumor properties."},ONCOGENIC:{Assertion:"Very strong evidence the variant is oncogenic."},LIKELY_ONCOGENIC:{Assertion:"Strong evidence the variant is oncogenic."},BENIGN:{Assertion:"Very strong evidence the variant does not have oncogenic properties."},LIKELY_BENIGN:{Assertion:"Strong evidence the variant does not have oncogenic properties."},UNCERTAIN_SIGNIFICANCE:{Assertion:"Does not meet guideline criteria for oncogenic/benign, or the evidence is conflicting."}}},evidenceDirection:{PREDICTIVE:{SUPPORTS:{EvidenceItem:"The experiment or study supports this variant's response to a therapy"},DOES_NOT_SUPPORT:{EvidenceItem:"The experiment or study does not support, or was inconclusive of an interaction between this variant and a therapy"}},DIAGNOSTIC:{SUPPORTS:{EvidenceItem:"The experiment or study supports this variant's impact on the diagnosis of disease or subtype"},DOES_NOT_SUPPORT:{EvidenceItem:"The experiment or study does not support this variant's impact on diagnosis of disease or subtype"}},PROGNOSTIC:{SUPPORTS:{EvidenceItem:"The experiment or study supports this variant's impact on prognostic outcome"},DOES_NOT_SUPPORT:{EvidenceItem:"The experiment or study does not support a prognostic association between variant and outcome"}},PREDISPOSING:{Na:{EvidenceItem:"Evidence Direction is not applicable"},SUPPORTS:{EvidenceItem:"The evidence supports a pathogenic or a protective role for a germline variant in cancer."},DOES_NOT_SUPPORT:{EvidenceItem:"The evidence supports a benign (if Clinical Significance is Predisposition) or lack or protective (if Clinical Significance is Protectiveness) role for a germline variant in cancer."}},FUNCTIONAL:{SUPPORTS:{EvidenceItem:"The experiment or study supports this variant causing alteration or non-alteration of the gene product function"},DOES_NOT_SUPPORT:{EvidenceItem:"The experiment or study does not support this variant causing alteration or non-alteration of the gene product function"}},ONCOGENIC:{NA:{EvidenceItem:"Evidence Direction is not applicable for Oncogenic Evidence Type"},SUPPORTS:{EvidenceItem:"The evidence supports an oncogenic or protective role for a somatic variant"},DOES_NOT_SUPPORT:{EvidenceItem:"The evidence does not support an oncogenic or protective role for a somatic variant"}}},assertionDirection:{PREDICTIVE:{SUPPORTS:{Assertion:"The Assertion and associated Evidence Items support this variant's response to a therapy"},DOES_NOT_SUPPORT:{Assertion:"The Assertion and associated evidence does not support, or was inconclusive of an interaction between this variant and a therapy"}},DIAGNOSTIC:{SUPPORTS:{Assertion:"The Assertion and associated Evidence Items support this variant's impact on the diagnosis of disease or subtype"},DOES_NOT_SUPPORT:{Assertion:"The Assertion and associated evidence does not support this variant's impact on diagnosis of disease or subtype"}},PROGNOSTIC:{SUPPORTS:{Assertion:"The Assertion and associated Evidence Items support this variant's impact on prognostic outcome"},DOES_NOT_SUPPORT:{Assertion:"The Assertion and associated evidence does not support a prognostic association between variant and outcome"}},PREDISPOSING:{SUPPORTS:{Assertion:"The Assertion and associated Evidence Items support a variant's impact on predisposing outcome"}},FUNCTIONAL:{SUPPORTS:{Assertion:"The Assertion and associated Evidence Items support this variant causing alteration or non-alteration of the gene product function"},DOES_NOT_SUPPORT:{Assertion:"The Assertion and associated evidence does not support this variant causing alteration or non-alteration of the gene product function"}},ONCOGENIC:{SUPPORTS:{Assertion:"The Assertion and associated Evidence Items support a variant's oncogenic, benign, or uncertain significance"}}}};var s=a(5879);let L=(()=>{class Q{transform(A,S,N=void 0,V=void 0){return S&&A?function d(Q,Y,A,S){let N;return N=A&&S?v[Q][A][Y][S]:i[Q][Y],N||""}(S,A,N,V):""}}return Q.\u0275fac=function(A){return new(A||Q)},Q.\u0275pipe=s.Yjl({name:"enumTooltip",type:Q,pure:!0}),Q})()},7334:(Ot,be,a)=>{a.d(be,{A:()=>v});var t=a(5879),i=a(6593);let v=(()=>{class d{constructor(L){this.sanitizer=L}transform(L,Q){if(!Q||""==Q)return L;const Y=new RegExp(Q,"gi"),A=L.match(Y);if(!A)return L;let S=L.replace(Y,`<span class='typeahead-match'>${A[0]}</span>`);return this.sanitizer.bypassSecurityTrustHtml(S)}}return d.\u0275fac=function(L){return new(L||d)(t.Y36(i.H7,16))},d.\u0275pipe=t.Yjl({name:"highlightTypeahead",type:d,pure:!0}),d})()},2524:(Ot,be,a)=>{a.d(be,{s:()=>d});var t=a(6814),i=a(7023),v=a(5879);let d=(()=>{class s{}return s.\u0275fac=function(Q){return new(Q||s)},s.\u0275mod=v.oAB({type:s}),s.\u0275inj=v.cJS({providers:[i.l],imports:[t.ez]}),s})()},7023:(Ot,be,a)=>{a.d(be,{l:()=>v});var t=a(2666),i=a(5879);let v=(()=>{class d{transform(L){return L?(0,t.c)(L):""}}return d.\u0275fac=function(L){return new(L||d)},d.\u0275pipe=i.Yjl({name:"sourceTypeDisplay",type:d,pure:!0}),d})()},5869:(Ot,be,a)=>{a.d(be,{W:()=>i});var t=a(5879);let i=(()=>{class v{constructor(){}transform(s,L=25){if(s.length>L){let Y=s.slice(0,L);var Q=Y.lastIndexOf(" ");return Y.slice(0,Q)+"\u2026"}return s}}return v.\u0275fac=function(s){return new(s||v)},v.\u0275pipe=t.Yjl({name:"truncate",type:v,pure:!0}),v})()},1201:(Ot,be,a)=>{a.d(be,{Z:()=>i});var t=a(5879);let i=(()=>{class v{transform(s){return s?`civic-${s.replace(/_/g,"").toLowerCase()}`:""}}return v.\u0275fac=function(s){return new(s||v)},v.\u0275pipe=t.Yjl({name:"typenameToIcon",type:v,pure:!0}),v})()},7473:(Ot,be,a)=>{a.d(be,{Y:()=>v});var t=a(5619),i=a(5879);let v=(()=>{class d{constructor(){this.networkError$=new t.X(void 0)}clearErrors(){this.networkError$.next(void 0)}}return d.\u0275fac=function(L){return new(L||d)},d.\u0275prov=i.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"}),d})()},951:(Ot,be,a)=>{a.d(be,{a:()=>N});var S,t=a(655),i=a(313),v=a(1791),d=a(7398),s=a(7921),L=a(7081),Q=a(4223),Y=a(5879),A=a(9862);let N=((S=class{constructor(U,M){function e(F){return!(!F||F.role!==i.i44.Admin)}function I(F){return!(!F||F.role!==i.i44.Editor&&F.role!==i.i44.Admin)}function k(F){return!(!F||F.role!==i.i44.Curator)}function ge(F){return!(!F||F.role!==i.i44.Curator&&F.role!==i.i44.Editor&&F.role!==i.i44.Admin)}function Ce(F){return!(!F||F.role!==i.i44.Editor&&F.role!==i.i44.Admin||!F.mostRecentConflictOfInterestStatement||F.mostRecentConflictOfInterestStatement?.coiStatus!=i.Mgx.Conflict&&F.mostRecentConflictOfInterestStatement?.coiStatus!=i.Mgx.Valid)}function Z(F){if(F.mostRecentOrganizationId)return F.organizations.find(R=>R.id===F.mostRecentOrganizationId)}this.viewerBaseGQL=U,this.http=M,this.initialViewer={mostRecentOrg:void 0,signedIn:!1,isAdmin:!1,isEditor:!1,isCurator:!1,canCurate:!1,canModerate:!1,invalidCoi:!0},this.queryRef=this.viewerBaseGQL.watch(void 0,{notifyOnNetworkStatusChange:!1}),this.viewer$=this.queryRef.valueChanges.pipe((0,Q.j)("data","viewer"),(0,d.U)(F=>({...F,signedIn:null!=F,signedOut:null==F,canCurate:ge(F),canModerate:Ce(F),isAdmin:e(F),isEditor:I(F),isCurator:k(F),organizations:null==F?[]:F.organizations,mostRecentOrg:null==F?void 0:Z(F),invalidCoi:I(F)&&(!F.mostRecentConflictOfInterestStatement||F.mostRecentConflictOfInterestStatement.coiStatus===i.Mgx.Expired||F.mostRecentConflictOfInterestStatement.coiStatus===i.Mgx.Missing)})),(0,s.O)(this.initialViewer),(0,L.d)(1)),this.signedIn$=this.viewer$.pipe((0,d.U)(F=>F.signedIn)),this.signedOut$=this.viewer$.pipe((0,d.U)(F=>F.signedOut)),this.isAdmin$=this.viewer$.pipe((0,d.U)(F=>e(F))),this.isEditor$=this.viewer$.pipe((0,d.U)(F=>I(F))),this.isCurator$=this.viewer$.pipe((0,d.U)(F=>k(F))),this.canCurate$=this.viewer$.pipe((0,d.U)(F=>ge(F))),this.canModerate$=this.viewer$.pipe((0,d.U)(F=>Ce(F)))}signOut(){this.http.get("/api/sign_out").pipe((0,v.t)(this)).subscribe(()=>this.queryRef.refetch())}refetch(){this.queryRef.refetch()}}).\u0275fac=function(U){return new(U||S)(Y.LFG(i.Tt7),Y.LFG(A.eN))},S.\u0275prov=Y.Yz7({token:S,factory:S.\u0275fac,providedIn:"root"}),S);N=(0,t.gn)([(0,v.c)()],N)},8130:(Ot,be,a)=>{a.d(be,{a:()=>i});var t=a(5879);let i=(()=>{class v{constructor(){this.linked=!0,this.popoverVisible=!1}ngOnInit(){this.onCloseClicked&&(this.linked=!1)}itemClosed(s){this.popoverVisible=!1,this.onCloseClicked&&this.onCloseClicked(this.idFunction())}}return v.\u0275fac=function(s){return new(s||v)},v.\u0275cmp=t.Xpm({type:v,selectors:[["ng-component"]],inputs:{onCloseClicked:"onCloseClicked",linked:"linked"},decls:0,vars:0,template:function(s,L){},encapsulation:2}),v})()},2:(Ot,be,a)=>{function t(i){if("number"==typeof i||"boolean"==typeof i)return i;let v;if("NA"===i)v=["Not Applicable"];else if("SENSITIVITYRESPONSE"===i)v=["Sensitivity","/","Response"];else{v=i.toLowerCase().replace(/_/g," ").split(" ");for(var d=0;d<v.length;d++)v[d]=v[d].charAt(0).toUpperCase()+v[d].slice(1)}return v.join(" ")}a.d(be,{E:()=>t})},2666:(Ot,be,a)=>{function t(i){switch(i){case"ASCO":return"ASCO";case"PUBMED":return"PubMed";case"ASH":return"ASH";default:return i}}a.d(be,{c:()=>t})},2023:(Ot,be,a)=>{a.d(be,{f:()=>i});const t=new Map([["Assertion","#7243b5"],["ClinicalTrial","#ac3996"],["CoordinateSystem","#f68f37"],["Disease","#e62f76"],["Event","#1db8a9"],["EvidenceItem","#2a63b6"],["Gene","#07aff0"],["Therapy","#ac3996"],["MolecularProfile","#33b358"],["Phenotype","#1db8a9"],["Source","#f9ba45"],["Variant","#74d34c"],["VariantGroup","#74d34c"],["VariantType","#74d34c"],["Comment","#44d8ef"],["Event","#ffdb00"],["Flag","#e24759"],["Queue","#666699"],["Revision","#f0673a"],["Curator","#a0d8f5"],["Editor","#58a0c4"],["Admin","#58a0c4"],["Organization","#3d7b99"],["Rejected","#BBBBBB"],["Greyscale","#999999"]]);function i(v){let d="#AAAAAA";if(v){const s=t.get(v);s&&(d=s)}return d}},2024:(Ot,be,a)=>{a.d(be,{U:()=>s});var t=a(8645),i=a(5619),v=a(9773),d=a(4716);class s{constructor(Q){this.networkErrorService=Q}mutate(Q,Y,A,S){let N=new t.x,V={isSubmitting$:new i.X(!1),submitSuccess$:new i.X(!1),submitError$:new i.X([]),cleanup:()=>{N.next(),N.complete()}};return V.isSubmitting$.next(!0),Q.mutate(Y,A).pipe((0,v.R)(N),(0,d.x)(()=>{V.isSubmitting$.next(!1)})).subscribe({next:U=>{U.data&&S&&S(U.data)},error:U=>{U.graphQLErrors.length>0?V.submitError$.next(U.graphQLErrors.map(M=>M.message)):U.networkError&&this.networkErrorService.networkError$.next(U.networkError),V.cleanup()},complete:()=>{V.submitError$.next([]),V.submitSuccess$.next(!0),this.networkErrorService.networkError$.next(void 0),V.cleanup()}}),V}}},9333:(Ot,be,a)=>{a.d(be,{h:()=>v});var t=a(6814),i=a(5879);let v=(()=>{class d{}return d.\u0275fac=function(L){return new(L||d)},d.\u0275mod=i.oAB({type:d}),d.\u0275inj=i.cJS({imports:[t.ez]}),d})()},7871:(Ot,be,a)=>{a.d(be,{P:()=>U});var t=a(5879),i=a(6814),v=a(6109);function d(M,e){1&M&&(t.ynx(0),t._uU(1," N/A "),t.BQk())}function s(M,e){1&M&&(t.ynx(0),t._uU(1," Not applicable "),t.BQk())}function L(M,e){if(1&M&&(t.TgZ(0,"span",4),t.ynx(1,0),t.YNc(2,d,2,0,"ng-container",5),t.YNc(3,s,2,0,"ng-container",6),t.BQk(),t.qZA()),2&M){const I=t.oxw();t.xp6(1),t.Q6J("ngSwitch",I.cvcDisplayMode),t.xp6(1),t.Q6J("ngSwitchCase","small")}}function Q(M,e){1&M&&(t.ynx(0),t._uU(1," \u2013\xa0\u2013 "),t.BQk())}function Y(M,e){1&M&&(t.ynx(0),t._uU(1,"Not specified"),t.BQk())}function A(M,e){if(1&M&&(t.TgZ(0,"span",7),t.ynx(1,0),t.YNc(2,Q,2,0,"ng-container",5),t.YNc(3,Y,2,0,"ng-container",6),t.BQk(),t.qZA()),2&M){const I=t.oxw();t.xp6(1),t.Q6J("ngSwitch",I.cvcDisplayMode),t.xp6(1),t.Q6J("ngSwitchCase","small")}}function S(M,e){1&M&&(t.ynx(0),t._uU(1,"!?"),t.BQk())}function N(M,e){1&M&&(t.ynx(0),t._uU(1,"Unspecified"),t.BQk())}function V(M,e){if(1&M&&(t.TgZ(0,"span",8),t.ynx(1,0),t.YNc(2,S,2,0,"ng-container",5),t.YNc(3,N,2,0,"ng-container",6),t.BQk(),t.qZA()),2&M){const I=t.oxw();t.xp6(1),t.Q6J("ngSwitch",I.cvcDisplayMode),t.xp6(1),t.Q6J("ngSwitchCase","small")}}let U=(()=>{class M{constructor(){this.cvcEmptyCategory="not-applicable",this.cvcDisplayMode="default"}}return M.\u0275fac=function(I){return new(I||M)},M.\u0275cmp=t.Xpm({type:M,selectors:[["cvc-empty-value"]],inputs:{cvcEmptyCategory:"cvcEmptyCategory",cvcDisplayMode:"cvcDisplayMode"},decls:4,vars:4,consts:[[3,"ngSwitch"],["class","empty-symbol not-applicable","nz-tooltip","","nzTooltipTitle","Value is not applicable",4,"ngSwitchCase"],["nz-tooltip","","nzTooltipTitle","Unspecified","class","empty-symbol unspecified","nz-tooltip","","nzTooltipTitle","Value is unspecified",4,"ngSwitchCase"],["nz-tooltip","","nzTooltipTitle","INVALID","class","empty-symbol invalid","nz-tooltip","","nzTooltipTitle","Error: value requires specification",4,"ngSwitchCase"],["nz-tooltip","","nzTooltipTitle","Value is not applicable",1,"empty-symbol","not-applicable"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"],["nz-tooltip","","nzTooltipTitle","Unspecified","nz-tooltip","","nzTooltipTitle","Value is unspecified",1,"empty-symbol","unspecified"],["nz-tooltip","","nzTooltipTitle","INVALID","nz-tooltip","","nzTooltipTitle","Error: value requires specification",1,"empty-symbol","invalid"]],template:function(I,k){1&I&&(t.ynx(0,0),t.YNc(1,L,4,2,"span",1),t.YNc(2,A,4,2,"span",2),t.YNc(3,V,4,2,"span",3),t.BQk()),2&I&&(t.Q6J("ngSwitch",k.cvcEmptyCategory),t.xp6(1),t.Q6J("ngSwitchCase","not-applicable"),t.xp6(1),t.Q6J("ngSwitchCase","unspecified"),t.xp6(1),t.Q6J("ngSwitchCase","invalid"))},dependencies:[i.RF,i.n9,i.ED,v.SY],styles:[".empty-symbol[_ngcontent-%COMP%]{font-style:oblique;display:inline-block;white-space:no-wrap}.empty-symbol.not-applicable[_ngcontent-%COMP%]{color:#ccc;font-weight:500}.empty-symbol.unspecified[_ngcontent-%COMP%]{display:inline-block;color:#ccc;font-weight:500;padding:0 3px}.empty-symbol.invalid[_ngcontent-%COMP%]{display:inline-block;color:#ff4d4f;font-weight:700}"]}),M})()},3517:(Ot,be,a)=>{a.d(be,{M:()=>s});var t=a(6814),i=a(551),v=a(6109),d=a(5879);let s=(()=>{class L{}return L.\u0275fac=function(Y){return new(Y||L)},L.\u0275mod=d.oAB({type:L}),L.\u0275inj=d.cJS({imports:[t.ez,v.cg,i.PV]}),L})()},3670:(Ot,be,a)=>{a.d(be,{J:()=>Pe});var t=a(5879),i=a(9111),v=a(6814),d=a(156),s=a(2851),L=a(1813),Q=a(96),Y=a(4402),A=a(8213),S=a(1598),N=a(8545);function V(We,Be){if(1&We&&t._UZ(0,"cvc-molecular-profile-popover",9),2&We){const xe=t.oxw();t.Q6J("molecularProfileId",xe.entity.entityId)}}function U(We,Be){if(1&We&&t._UZ(0,"cvc-disease-popover",10),2&We){const xe=t.oxw();t.Q6J("diseaseId",xe.entity.entityId)}}function M(We,Be){if(1&We&&t._UZ(0,"cvc-therapy-popover",11),2&We){const xe=t.oxw();t.Q6J("therapyId",xe.entity.entityId)}}function e(We,Be){if(1&We&&t._UZ(0,"cvc-source-popover",12),2&We){const xe=t.oxw();t.Q6J("sourceId",xe.entity.entityId)}}function I(We,Be){if(1&We&&t._UZ(0,"cvc-phenotype-popover",13),2&We){const xe=t.oxw();t.Q6J("phenotypeId",xe.entity.entityId)}}function k(We,Be){if(1&We&&t._UZ(0,"cvc-evidence-popover",14),2&We){const xe=t.oxw();t.Q6J("evidenceId",xe.entity.entityId)}}function ge(We,Be){if(1&We&&t._UZ(0,"cvc-gene-popover",15),2&We){const xe=t.oxw();t.Q6J("geneId",xe.entity.entityId)}}function Ce(We,Be){if(1&We&&t._UZ(0,"cvc-variant-popover",16),2&We){const xe=t.oxw();t.Q6J("variantId",xe.entity.entityId)}}const Z=["MolecularProfile","Disease","Therapy","Phenotype","Source","Gene","Variant","EvidenceItem"];let F=(()=>{class We{ngOnInit(){if(null==this.entity)throw new Error("entity input is required for CvcEntityTagPopoverComponent")}}return We.\u0275fac=function(xe){return new(xe||We)},We.\u0275cmp=t.Xpm({type:We,selectors:[["cvc-entity-tag-popover"]],inputs:{entity:"entity"},decls:9,vars:9,consts:[[3,"ngSwitch"],[3,"molecularProfileId",4,"ngSwitchCase"],[3,"diseaseId",4,"ngSwitchCase"],[3,"therapyId",4,"ngSwitchCase"],[3,"sourceId",4,"ngSwitchCase"],[3,"phenotypeId",4,"ngSwitchCase"],[3,"evidenceId",4,"ngSwitchCase"],[3,"geneId",4,"ngSwitchCase"],[3,"variantId",4,"ngSwitchCase"],[3,"molecularProfileId"],[3,"diseaseId"],[3,"therapyId"],[3,"sourceId"],[3,"phenotypeId"],[3,"evidenceId"],[3,"geneId"],[3,"variantId"]],template:function(xe,te){1&xe&&(t.ynx(0,0),t.YNc(1,V,1,1,"cvc-molecular-profile-popover",1),t.YNc(2,U,1,1,"cvc-disease-popover",2),t.YNc(3,M,1,1,"cvc-therapy-popover",3),t.YNc(4,e,1,1,"cvc-source-popover",4),t.YNc(5,I,1,1,"cvc-phenotype-popover",5),t.YNc(6,k,1,1,"cvc-evidence-popover",6),t.YNc(7,ge,1,1,"cvc-gene-popover",7),t.YNc(8,Ce,1,1,"cvc-variant-popover",8),t.BQk()),2&xe&&(t.Q6J("ngSwitch",te.entity.entityType),t.xp6(1),t.Q6J("ngSwitchCase","MolecularProfile"),t.xp6(1),t.Q6J("ngSwitchCase","Disease"),t.xp6(1),t.Q6J("ngSwitchCase","Therapy"),t.xp6(1),t.Q6J("ngSwitchCase","Source"),t.xp6(1),t.Q6J("ngSwitchCase","Phenotype"),t.xp6(1),t.Q6J("ngSwitchCase","EvidenceItem"),t.xp6(1),t.Q6J("ngSwitchCase","Gene"),t.xp6(1),t.Q6J("ngSwitchCase","Variant"))},dependencies:[v.RF,v.n9,d._,s.I,L.p,Q.a,Y.S,A._,S.Q,N.m],encapsulation:2,changeDetection:0}),We})();var R=a(4190),O=a(551),P=a(5695),x=a(6109),de=a(7417),ue=a(7334),j=a(2616),me=a(1201);function re(We,Be){}function he(We,Be){if(1&We){const xe=t.EpF();t.TgZ(0,"span",6)(1,"nz-tag",7),t.NdJ("nzCheckedChange",function(){t.CHM(xe);const ae=t.oxw();return t.KtG(ae.cvcTagCheckedChange)})("nzOnClose",function(ae){t.CHM(xe);const De=t.oxw();return t.KtG(De.cvcOnClose.next(ae))}),t.TgZ(2,"span",8),t.YNc(3,re,0,0,"ng-template",9),t.qZA()()()}if(2&We){const xe=t.oxw(),te=t.MAs(6),ae=t.MAs(8);t.xp6(1),t.Q6J("nzMode",xe.cvcMode)("nzChecked",xe.cvcTagChecked),t.xp6(1),t.Q6J("nzPopoverContent",xe.cvcShowPopover&&xe.popoverInput?te:void 0),t.xp6(1),t.Q6J("ngTemplateOutlet",ae)}}function Me(We,Be){}function Oe(We,Be){if(1&We&&(t.TgZ(0,"span",13),t.YNc(1,Me,0,0,"ng-template",9),t.qZA()),2&We){const xe=t.oxw(2),te=t.MAs(8);t.Q6J("nzTooltipTitle",xe.entity.tooltip),t.xp6(1),t.Q6J("ngTemplateOutlet",te)}}function kt(We,Be){if(1&We){const xe=t.EpF();t.TgZ(0,"span",10)(1,"nz-tag",11),t.NdJ("nzOnClose",function(ae){t.CHM(xe);const De=t.oxw();return t.KtG(De.cvcOnClose.next(ae))}),t.YNc(2,Oe,2,2,"span",12),t.qZA()()}if(2&We){const xe=t.oxw(),te=t.MAs(4);t.xp6(1),t.Q6J("nzMode","closeable"),t.xp6(1),t.Q6J("ngIf",xe.entity&&xe.entity.tooltip)("ngIfElse",te)}}function It(We,Be){}function Tt(We,Be){if(1&We&&(t.TgZ(0,"span",13),t.YNc(1,It,0,0,"ng-template",9),t.qZA()),2&We){const xe=t.oxw(2),te=t.MAs(8);t.Q6J("nzTooltipTitle",xe.entity.tooltip),t.xp6(1),t.Q6J("ngTemplateOutlet",te)}}function gt(We,Be){if(1&We&&(t.TgZ(0,"span",14),t.YNc(1,Tt,2,2,"span",12),t.qZA()),2&We){const xe=t.oxw(),te=t.MAs(4);t.xp6(1),t.Q6J("ngIf",xe.entity&&xe.entity.tooltip)("ngIfElse",te)}}function _t(We,Be){}function Ft(We,Be){if(1&We&&(t.TgZ(0,"span",8),t.YNc(1,_t,0,0,"ng-template",9),t.qZA()),2&We){const xe=t.oxw(),te=t.MAs(6),ae=t.MAs(8);t.Q6J("nzPopoverContent",xe.popoverInput?te:void 0),t.xp6(1),t.Q6J("ngTemplateOutlet",ae)}}function rn(We,Be){if(1&We&&t._UZ(0,"cvc-entity-tag-popover",16),2&We){const xe=t.oxw(2);t.Q6J("entity",xe.popoverInput)}}function bn(We,Be){if(1&We&&t.YNc(0,rn,1,1,"cvc-entity-tag-popover",15),2&We){const xe=t.oxw();t.Q6J("ngIf",xe.popoverInput)}}function et(We,Be){if(1&We&&(t.TgZ(0,"span"),t.GkF(1,9),t.qZA()),2&We){t.oxw();const xe=t.MAs(4);t.xp6(1),t.Q6J("ngTemplateOutlet",xe)}}function Re(We,Be){if(1&We&&(t.TgZ(0,"a",23),t.GkF(1,9),t.qZA()),2&We){t.oxw();const xe=t.MAs(4),te=t.oxw(2);t.Q6J("routerLink",te.entity.link),t.xp6(1),t.Q6J("ngTemplateOutlet",xe)}}function yt(We,Be){if(1&We&&(t._UZ(0,"span",26),t.ALo(1,"typenameToIcon"),t.ALo(2,"entityColor")),2&We){const xe=t.oxw(4);t.Q6J("nzType",t.lcZ(1,2,xe.typename))("nzTwotoneColor",t.lcZ(2,4,xe.typename))}}function je(We,Be){if(1&We&&(t.YNc(0,yt,3,6,"span",24),t._UZ(1,"span",25),t.ALo(2,"highlightTypeahead")),2&We){t.oxw(2);const xe=t.MAs(4),te=t.oxw();t.Q6J("ngIf",te.typename)("ngIfElse",xe),t.xp6(1),t.Q6J("innerHtml",t.xi3(2,3,te.entity.name,te.cvcEmphasize),t.oJD)}}function Ut(We,Be){if(1&We&&(t.ynx(0),t.YNc(1,et,2,1,"span",20),t.YNc(2,Re,2,2,"a",21),t.YNc(3,je,3,6,"ng-template",null,22,t.W1O),t.BQk()),2&We){const xe=t.oxw(2);t.xp6(1),t.Q6J("ngIf",xe.cvcDisableLink),t.xp6(1),t.Q6J("ngIf",!xe.cvcDisableLink)}}function Xt(We,Be){}function _n(We,Be){if(1&We&&(t.YNc(0,Xt,0,0,"ng-template",9),t._uU(1)),2&We){t.oxw();const xe=t.MAs(4),te=t.oxw();t.Q6J("ngTemplateOutlet",xe),t.xp6(1),t.hij(" CACHE-MISS (",te.cvcCacheId,") ")}}function On(We,Be){1&We&&t._UZ(0,"span",27)}function Jt(We,Be){if(1&We&&(t.YNc(0,Ut,5,2,"ng-container",17),t.YNc(1,_n,2,2,"ng-template",null,18,t.W1O),t.YNc(3,On,1,0,"ng-template",null,19,t.W1O)),2&We){const xe=t.MAs(2),te=t.oxw();t.Q6J("ngIf",te.entity)("ngIfElse",xe)}}function Nt(We,Be){if(1&We&&t._UZ(0,"cvc-entity-tag-popover",16),2&We){const xe=t.oxw(2);t.Q6J("entity",xe.popoverInput)}}function Ye(We,Be){if(1&We&&t.YNc(0,Nt,1,1,"cvc-entity-tag-popover",15),2&We){const xe=t.oxw();t.Q6J("ngIf",xe.popoverInput)}}const He=We=>void 0!==We&&We.__typename&&We.id&&void 0!==We.name;let Pe=(()=>{class We{set cvcLinkableEntity(xe){xe&&this.setLinkableEntity(xe)}set cvcCacheId(xe){xe&&this.setCachedLinkableEntity(xe)}constructor(xe){this.apollo=xe,this.cvcContext="default",this.cvcMode="default",this.cvcDisableLink=!0,this.cvcTagChecked=!1,this.cvcHasTooltip=!1,this.cvcFullWidth=!1,this.cvcShowPopover=!1,this.cvcTagCheckedChange=new t.vpe,this.cvcOnClose=new t.vpe}hasPopover(xe){return Z.includes(xe)}setLinkableEntity(xe){He(xe)&&(this.typename=xe.__typename,this.id=xe.id,this.entity=xe,this.setPopoverInput(xe))}setCachedLinkableEntity(xe){const[te,ae]=xe.split(":");if(this.typename=te,this.id=+ae,!this.typename||!this.id)return void console.error(`entity-tag received an invalid cacheId: ${xe}. Cache IDs must be in the format 'TYPENAME:ID'.`);let De;De=this.cvcDisableLink?this.cvcHasTooltip?{id:`${te}:${ae}`,fragment:i.Ps`
          fragment Linkable${te}Entity on ${te} {
            id
            name
            tooltip
          }
        `}:{id:`${te}:${ae}`,fragment:i.Ps`
          fragment Linkable${te}Entity on ${te} {
            id
            name
          }
        `}:{id:`${te}:${ae}`,fragment:i.Ps`
          fragment Linkable${te}Entity on ${te} {
            id
            name
            link
          }
        `};const Ge=this.apollo.client.readFragment(De);He(Ge)?(this.setPopoverInput(Ge),this.entity=Ge):console.error(`entity-tag could not find cached entity ${xe}`)}setPopoverInput(xe){He(xe)&&this.hasPopover(xe.__typename)&&(this.popoverInput={entityId:xe.id,entityType:xe.__typename})}ngOnChanges(xe){xe.cvcMode&&"checkable"===xe.cvcMode.currentValue&&(this.cvcDisableLink=!0),xe.cvcContext&&"default"!==xe.cvcContext.currentValue&&(this.cvcDisableLink=!0)}}return We.\u0275fac=function(xe){return new(xe||We)(t.Y36(i._M))},We.\u0275cmp=t.Xpm({type:We,selectors:[["cvc-entity-tag"]],hostVars:40,hostBindings:function(xe,te){2&xe&&t.ekj("full-width",!0===te.cvcFullWidth)("label-max",void 0!==te.cvcTruncateLabel)("label-max-50","50px"===te.cvcTruncateLabel)("label-max-75","75px"===te.cvcTruncateLabel)("label-max-100","100px"===te.cvcTruncateLabel)("label-max-125","125px"===te.cvcTruncateLabel)("label-max-150","150px"===te.cvcTruncateLabel)("label-max-175","175px"===te.cvcTruncateLabel)("label-max-200","200px"===te.cvcTruncateLabel)("label-max-250","250px"===te.cvcTruncateLabel)("label-max-300","300px"===te.cvcTruncateLabel)("label-max-350","350px"===te.cvcTruncateLabel)("label-max-400","400px"===te.cvcTruncateLabel)("label-max-450","450px"===te.cvcTruncateLabel)("label-max-500","500px"===te.cvcTruncateLabel)("rejected","REJECTED"===te.cvcStatus)("accepted","ACCEPTED"===te.cvcStatus)("submitted","SUBMITTED"===te.cvcStatus)("new","NEW"===te.cvcStatus)("superseded","SUPERSEDED"===te.cvcStatus)},inputs:{cvcLinkableEntity:"cvcLinkableEntity",cvcCacheId:"cvcCacheId",cvcStatus:"cvcStatus",cvcContext:"cvcContext",cvcMode:"cvcMode",cvcEmphasize:"cvcEmphasize",cvcDisableLink:"cvcDisableLink",cvcTagChecked:"cvcTagChecked",cvcHasTooltip:"cvcHasTooltip",cvcFullWidth:"cvcFullWidth",cvcShowPopover:"cvcShowPopover",cvcTruncateLabel:"cvcTruncateLabel"},outputs:{cvcTagCheckedChange:"cvcTagCheckedChange",cvcOnClose:"cvcOnClose"},features:[t.TTD],decls:11,vars:3,consts:[["class","default",4,"ngIf"],["class","select-item",4,"ngIf"],["class","multi-select-item",4,"ngIf"],["noTooltip",""],["popoverContent",""],["tagContent",""],[1,"default"],[3,"nzMode","nzChecked","nzCheckedChange","nzOnClose"],["nz-popover","","nzPopoverTrigger","hover",3,"nzPopoverContent"],[3,"ngTemplateOutlet"],[1,"select-item"],[3,"nzMode","nzOnClose"],["nz-tooltip","",3,"nzTooltipTitle",4,"ngIf","ngIfElse"],["nz-tooltip","",3,"nzTooltipTitle"],[1,"multi-select-item"],[3,"entity",4,"ngIf"],[3,"entity"],[4,"ngIf","ngIfElse"],["cacheMiss",""],["noIcon",""],[4,"ngIf"],[3,"routerLink",4,"ngIf"],["tagLabel",""],[3,"routerLink"],["nz-icon","","nzTheme","twotone","class","tag-icon",3,"nzType","nzTwotoneColor",4,"ngIf","ngIfElse"],[1,"tag-label",3,"innerHtml"],["nz-icon","","nzTheme","twotone",1,"tag-icon",3,"nzType","nzTwotoneColor"],["nz-icon","","nzType","question-circle","nzTheme","outline",1,"tag-icon"]],template:function(xe,te){1&xe&&(t.YNc(0,he,4,4,"span",0),t.YNc(1,kt,3,3,"span",1),t.YNc(2,gt,2,2,"span",2),t.YNc(3,Ft,2,2,"ng-template",null,3,t.W1O),t.YNc(5,bn,1,1,"ng-template",null,4,t.W1O),t.YNc(7,Jt,5,2,"ng-template",null,5,t.W1O),t.YNc(9,Ye,1,1,"ng-template",null,4,t.W1O)),2&xe&&(t.Q6J("ngIf","default"===te.cvcContext),t.xp6(1),t.Q6J("ngIf","select-item"===te.cvcContext),t.xp6(1),t.Q6J("ngIf","multi-select-item"===te.cvcContext))},dependencies:[v.O5,v.tP,R.rH,O.Ls,P.j,x.SY,de.lU,F,ue.A,j.a,me.Z],styles:['.label-max-50[_nghost-%COMP%]   .tag-label[_ngcontent-%COMP%]{max-width:50px;overflow:hidden;text-overflow:ellipsis}.label-max-75[_nghost-%COMP%]   .tag-label[_ngcontent-%COMP%]{max-width:75px;overflow:hidden;text-overflow:ellipsis}.label-max-100[_nghost-%COMP%]   .tag-label[_ngcontent-%COMP%]{max-width:100px;overflow:hidden;text-overflow:ellipsis}.label-max-125[_nghost-%COMP%]   .tag-label[_ngcontent-%COMP%]{max-width:125px;overflow:hidden;text-overflow:ellipsis}.label-max-150[_nghost-%COMP%]   .tag-label[_ngcontent-%COMP%]{max-width:150px;overflow:hidden;text-overflow:ellipsis}.label-max-175[_nghost-%COMP%]   .tag-label[_ngcontent-%COMP%]{max-width:175px;overflow:hidden;text-overflow:ellipsis}.label-max-200[_nghost-%COMP%]   .tag-label[_ngcontent-%COMP%]{max-width:200px;overflow:hidden;text-overflow:ellipsis}.label-max-250[_nghost-%COMP%]   .tag-label[_ngcontent-%COMP%]{max-width:250px;overflow:hidden;text-overflow:ellipsis}.label-max-300[_nghost-%COMP%]   .tag-label[_ngcontent-%COMP%]{max-width:300px;overflow:hidden;text-overflow:ellipsis}.label-max-350[_nghost-%COMP%]   .tag-label[_ngcontent-%COMP%]{max-width:350px;overflow:hidden;text-overflow:ellipsis}.label-max-400[_nghost-%COMP%]   .tag-label[_ngcontent-%COMP%]{max-width:400px;overflow:hidden;text-overflow:ellipsis}.label-max-450[_nghost-%COMP%]   .tag-label[_ngcontent-%COMP%]{max-width:450px;overflow:hidden;text-overflow:ellipsis}.label-max-500[_nghost-%COMP%]   .tag-label[_ngcontent-%COMP%]{max-width:500px;overflow:hidden;text-overflow:ellipsis}.rejected[_nghost-%COMP%]   nz-tag[_ngcontent-%COMP%], .submitted[_nghost-%COMP%]   nz-tag[_ngcontent-%COMP%], .accepted[_nghost-%COMP%]   nz-tag[_ngcontent-%COMP%], .deprecated[_nghost-%COMP%]   nz-tag[_ngcontent-%COMP%]{border-right-width:2px}.rejected[_nghost-%COMP%]   nz-tag[_ngcontent-%COMP%], .deprecated[_nghost-%COMP%]   nz-tag[_ngcontent-%COMP%]{border-color:#e6e6e6;background-color:#fff;color:#999999d9}.submitted[_nghost-%COMP%]   nz-tag[_ngcontent-%COMP%]{border-color:#ffe58f}.accepted[_nghost-%COMP%]   nz-tag[_ngcontent-%COMP%]{border-color:#b7eb8f}.full-width[_nghost-%COMP%]   nz-tag[_ngcontent-%COMP%]{width:100%}.full-width[_nghost-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-label[_ngcontent-%COMP%]{width:100%}nz-tag[_ngcontent-%COMP%]{margin-right:0;margin-inline-end:4px}  -checkable{background-color:transparent;cursor:pointer}  -checkable:not(  -checkable-checked):hover{color:#1890ff}  -checkable:active,   -checkable-checked{color:#fff}  -checkable-checked{background-color:#1890ff}  -checkable:active{background-color:#096dd9}.default[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]{margin:0;padding:0 2px 0 0;margin-inline-end:4px;max-width:100%}.default[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon[_ngcontent-%COMP%]{display:inline-block;padding:3px 2px 3px 4px;margin:-3px 0}.default[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-label[_ngcontent-%COMP%]{display:inline-block;font-weight:400;margin:-3px 0 -4px;padding:3px 3px 3px 2px;line-height:1}.default[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]     i.ant-tag-close-icon.anticon-close{transition:none;margin-left:3px}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]{margin:0;padding:0 2px 0 0;margin-inline-end:4px;max-width:100%}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon[_ngcontent-%COMP%]{display:inline-block;padding:3px 2px 3px 4px;margin:-3px 0}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-label[_ngcontent-%COMP%]{display:inline-block;font-weight:400;margin:-3px 0 -4px;padding:3px 3px 3px 2px;line-height:1}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]     i.ant-tag-close-icon.anticon-close{transition:none;margin-left:3px}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-label[_ngcontent-%COMP%]{padding-right:0}.multi-select-item[_ngcontent-%COMP%]{display:inline-block;margin-top:-3px;margin-bottom:-3px;margin-left:-4px;padding-left:4px}.multi-select-item[_ngcontent-%COMP%]   .tag-icon[_ngcontent-%COMP%]:after{content:" "}.typeahead-match[_ngcontent-%COMP%]{font-weight:700}a.disabled[_ngcontent-%COMP%]{pointer-events:none}'],changeDetection:0}),We})()},3328:(Ot,be,a)=>{a.d(be,{x:()=>Ce});var t=a(6814),i=a(551),v=a(5695),d=a(2524),s=a(6109),L=a(4190),Q=a(5879);let Y=(()=>{class Z{}return Z.\u0275fac=function(R){return new(R||Z)},Z.\u0275mod=Q.oAB({type:Z}),Z.\u0275inj=Q.cJS({imports:[t.ez]}),Z})();var A=a(7417),S=a(5687),N=a(1855),V=a(9021),U=a(2064),M=a(1332),e=a(6247),I=a(1207),k=a(6446);let ge=(()=>{class Z{}return Z.\u0275fac=function(R){return new(R||Z)},Z.\u0275mod=Q.oAB({type:Z}),Z.\u0275inj=Q.cJS({imports:[t.ez,U._,S.t,e.n,I.s,M.I,N.f,V.w,k.k]}),Z})(),Ce=(()=>{class Z{}return Z.\u0275fac=function(R){return new(R||Z)},Z.\u0275mod=Q.oAB({type:Z}),Z.\u0275inj=Q.cJS({imports:[t.ez,L.Bz,i.PV,v.X,s.cg,A.$6,Y,d.s,ge,Y]}),Z})()},4634:(Ot,be,a)=>{a.d(be,{F:()=>k});var A,t=a(655),i=a(1791),v=a(5879),d=a(4190),s=a(6814),L=a(2669),Q=a(3903),Y=a(8091);function S(ge,Ce){if(1&ge&&v._UZ(0,"nz-alert",6),2&ge){v.oxw();const Z=v.MAs(3),F=v.oxw();v.MGl("nzMessage","Error Submitting ",F.entityType,""),v.Q6J("nzDescription",Z)}}function N(ge,Ce){if(1&ge&&(v.TgZ(0,"li"),v._uU(1),v.qZA()),2&ge){const Z=Ce.$implicit;v.xp6(1),v.hij(" ",Z," ")}}function V(ge,Ce){if(1&ge&&(v.TgZ(0,"ul"),v.YNc(1,N,2,1,"li",7),v.qZA()),2&ge){const Z=v.oxw().ngIf;v.xp6(1),v.Q6J("ngForOf",Z)}}function U(ge,Ce){if(1&ge&&(v.ynx(0),v.YNc(1,S,1,2,"nz-alert",4),v.YNc(2,V,2,1,"ng-template",null,5,v.W1O),v.BQk()),2&ge){const Z=Ce.ngIf;v.xp6(1),v.Q6J("ngIf",Z.length>0)}}function M(ge,Ce){if(1&ge&&(v.ynx(0),v._UZ(1,"nz-alert",8),v.BQk()),2&ge){const Z=v.oxw();v.xp6(1),v.MGl("nzMessage","",Z.entityType," Submitted"),v.Q6J("nzDescription",Z.successMessage?Z.successMessage:null)}}function e(ge,Ce){1&ge&&v.Hsn(0)}let k=((A=class{set mutationState(Ce){this._mutationState=Ce,this.currentTimer&&clearTimeout(this.currentTimer),Ce&&Ce.submitSuccess$.pipe((0,i.t)(this)).subscribe(Z=>{Z&&(this.currentTimer=setTimeout(()=>{this.redirectUrl&&this.router.navigateByUrl(this.redirectUrl)},2500))})}get mutationState(){return this._mutationState}constructor(Ce){this.router=Ce}ngOnInit(){}}).\u0275fac=function(Ce){return new(Ce||A)(v.Y36(d.F0))},A.\u0275cmp=v.Xpm({type:A,selectors:[["cvc-form-submission-status-display"]],inputs:{mutationState:"mutationState",entityType:"entityType",successMessage:"successMessage",redirectUrl:"redirectUrl"},ngContentSelectors:["*"],decls:8,vars:10,consts:[[3,"nzSpinning"],[4,"ngIf"],[4,"ngIf","ngIfElse"],["form",""],["nzType","error","nzShowIcon","",3,"nzMessage","nzDescription",4,"ngIf"],["errorList",""],["nzType","error","nzShowIcon","",3,"nzMessage","nzDescription"],[4,"ngFor","ngForOf"],["nzType","success","nzShowIcon","",3,"nzMessage","nzDescription"]],template:function(Ce,Z){if(1&Ce&&(v.F$t(),v.TgZ(0,"nz-spin",0),v.ALo(1,"ngrxPush"),v.YNc(2,U,4,1,"ng-container",1),v.ALo(3,"ngrxPush"),v.YNc(4,M,2,2,"ng-container",2),v.ALo(5,"ngrxPush"),v.YNc(6,e,1,0,"ng-template",null,3,v.W1O),v.qZA()),2&Ce){const F=v.MAs(7);v.Q6J("nzSpinning",v.lcZ(1,4,null==Z.mutationState?null:Z.mutationState.isSubmitting$)),v.xp6(2),v.Q6J("ngIf",v.lcZ(3,6,null==Z.mutationState?null:Z.mutationState.submitError$)),v.xp6(2),v.Q6J("ngIf",v.lcZ(5,8,null==Z.mutationState?null:Z.mutationState.submitSuccess$))("ngIfElse",F)}},dependencies:[s.sg,s.O5,L.W,Q.r,Y.fM],encapsulation:2,changeDetection:0}),A);k=(0,t.gn)([(0,i.c)()],k)},5106:(Ot,be,a)=>{a.d(be,{g:()=>L});var t=a(6814),i=a(3903),v=a(2574),d=a(2669),s=a(5879);let L=(()=>{class Q{}return Q.\u0275fac=function(A){return new(A||Q)},Q.\u0275mod=s.oAB({type:Q}),Q.\u0275inj=s.cJS({imports:[t.ez,d.j,i.L,v.zf]}),Q})()},6683:(Ot,be,a)=>{a.d(be,{S:()=>F2});var t=a(6223),i=a(4190),v=a(5545),d=a(7459),s=a(3599),L=a(279),Q=a(6180);const Y={paramKey:!0};class A{constructor(y){this.route=y}postPopulate(y){if(y.fieldGroup||y.fieldArray||!1===(y.props||{...Y}).paramKey||(this.paramKey=this.getParamKey(y),!this.paramKey))return;const m=this.getRouteSub(this.route,y),G=y.hooks?.onDestroy;m&&G&&(y.hooks={...y.hooks,onDestroy:Fe=>{m.unsubscribe(),G(Fe)}})}getParamKey(y){const c=y.props;if("string"==typeof c.paramKey)return c.paramKey;if(y.key){if("string"==typeof y.key)return y.key;console.warn(`observe-query-param cannot use field key ${JSON.stringify(y.key)} of type ${typeof y.key} to observe a query param. Use prop.paramKey to specify a query param string, or define a string field.key.`)}}getRouteSub(y,c){const m=y.queryParams.pipe((0,Q.g)(this.paramKey)).subscribe(G=>{const Fe=c.formControl,Et=G[this.paramKey];if(!Et)return void m.unsubscribe();let Mn;try{Mn=JSON.parse(Et)}catch(kn){return console.warn(`observe-query-param failed to parse query param ${this.paramKey} for field ${c.id}: ${kn}`),console.warn("Note: Query values are parsed as JSON, therefore enum strings must be enclosed in double-quotes, and numeric entity IDs must be bare, unquoted."),void m.unsubscribe()}if(Mn){if(Object.keys(Mn).length>0&&Mn.constructor===Object)return console.warn(`observe-query-param may only set primitive types or arrays of primitive types, param ${this.paramKey} is an object: ${JSON.stringify(Mn)}`),void m.unsubscribe();Fe.setValue(Mn)}});return m}}function S(u){return{extensions:[{name:"observeQueryParam",extension:new A(u)}]}}const U={extras:{immutable:!1,lazyRender:!0},validationMessages:[{name:"required",message:"This field is required."},{name:"minLength",message:(u,y)=>`This field has a minimum length of ${y.templateOptions?.minLength}.`},{name:"maxLength",message:(u,y)=>`This field has a maximum length of ${y.templateOptions?.maxLength}.`},{name:"min",message:(u,y)=>`This field has a minimum value of ${y.templateOptions?.min}.`},{name:"max",message:(u,y)=>`This field has a maximum value of ${y.templateOptions?.max}.`},{name:"pattern",message:(u,y)=>`This field's value must fit the pattern ${y.templateOptions?.pattern}.`},{name:"integer",message:(u,y)=>"Value must be an integer."},{name:"nucleotide",message:(u,y)=>"Value must only contain A, C, T, G, and/or /."},{name:"clinvar",message:(u,y)=>"Value must be an integer."}],validators:[{name:"integer",validation:(u,y)=>""===u.value||null==u.value||/^\d+$/.test(u.value)?null:{integer:!0}},{name:"nucleotide",validation:(u,y)=>""===u.value||null==u.value||/^[ACTG\/]+$/.test(u.value)?null:{nucleotide:!0}},{name:"clinvar",validation:(u,y)=>{for(var c of u.value)if(""!==c&&null!=c&&!/^\d+$/.test(c))return{clinvar:!0};return null}}]};var M=a(6814),e=a(5879),I=a(8091),k=a(95),ge=a(2392);function Ce(u,y){if(1&u&&(e.TgZ(0,"div",9),e.GkF(1,10),e.qZA()),2&u){e.oxw();const c=e.MAs(5);e.xp6(1),e.Q6J("ngTemplateOutlet",c)}}function Z(u,y){if(1&u&&(e.TgZ(0,"div",11),e.GkF(1,10),e.qZA()),2&u){e.oxw();const c=e.MAs(9);e.xp6(1),e.Q6J("ngTemplateOutlet",c)}}function F(u,y){if(1&u&&(e.TgZ(0,"div",12),e.GkF(1,10),e.qZA()),2&u){e.oxw();const c=e.MAs(7);e.xp6(1),e.Q6J("ngTemplateOutlet",c)}}function R(u,y){if(1&u&&(e.TgZ(0,"nz-form-label",17),e._UZ(1,"span",18),e.qZA()),2&u){const c=y.ngrxLet,m=e.oxw(3);e.Q6J("nzRequired",m.props.required)("nzFor",m.id)("nzNoColon",!0)("nzTooltipTitle",m.props.tooltip)("nzSpan",c.span?c.span:null),e.xp6(1),e.Q6J("nzContent",m.props.label)}}function O(u,y){if(1&u&&(e.ynx(0),e.YNc(1,R,2,6,"nz-form-label",16),e.BQk()),2&u){const c=e.oxw(2);e.xp6(1),e.Q6J("ngrxLet",c.wrapper.layout.label)}}function P(u,y){if(1&u&&(e.TgZ(0,"nz-form-control",19),e.GkF(1,null,20),e.qZA()),2&u){const c=y.ngrxLet,m=e.oxw(2),G=e.MAs(11),Fe=e.MAs(13);e.Q6J("nzExtra",m.wrapper.showExtra&&!m.showError?G:void 0)("nzValidateStatus",m.errorState)("nzErrorTip",Fe)("nzSpan",m.props.hideLabel?24:c.span?c.span:null)}}const x=function(u,y,c,m){return{disabled:u,error:y,required:c,valid:m}};function de(u,y){if(1&u&&(e.TgZ(0,"nz-form-item",13),e.YNc(1,O,2,1,"ng-container",14),e.YNc(2,P,3,4,"nz-form-control",15),e.qZA()),2&u){const c=e.oxw();e.Q6J("nzGutter",c.wrapper.layout.item.gutter)("ngClass",e.l5B(4,x,c.props.disabled,c.showError,c.props.required,"VALID"===c.field.formControl.status)),e.xp6(1),e.Q6J("ngIf",c.props.label&&!0!==c.props.hideLabel),e.xp6(1),e.Q6J("ngrxLet",c.wrapper.layout.control)}}const ue=function(u,y){return{disabled:u,error:y}};function j(u,y){if(1&u&&(e.TgZ(0,"nz-form-label",24),e._UZ(1,"span",25),e.qZA()),2&u){const c=e.oxw(3);e.Q6J("ngClass",e.WLB(6,ue,c.props.disabled,c.showError))("nzRequired",c.props.required)("nzFor",c.id)("nzTooltipTitle",c.props.tooltip)("nzNoColon",!0),e.xp6(1),e.Q6J("nzContent",c.props.label)}}function me(u,y){if(1&u&&(e.ynx(0),e.YNc(1,j,2,9,"nz-form-label",23),e.BQk()),2&u){const c=e.oxw(2);e.xp6(1),e.Q6J("ngrxLet",c.wrapper.layout.label)}}function re(u,y){if(1&u&&(e.TgZ(0,"nz-form-control",26),e.GkF(1,null,20),e.qZA()),2&u){const c=e.oxw(2),m=e.MAs(11),G=e.MAs(13);e.Q6J("nzExtra",c.wrapper.showExtra&&!c.showError?m:void 0)("nzValidateStatus",c.errorState)("nzErrorTip",G)}}function he(u,y){if(1&u&&(e.TgZ(0,"nz-form-item",21),e.YNc(1,me,2,1,"ng-container",14),e.YNc(2,re,3,3,"nz-form-control",22),e.qZA()),2&u){const c=e.oxw();e.Q6J("ngClass",e.l5B(3,x,c.props.disabled,c.showError,c.props.required,"VALID"===c.field.formControl.status)),e.xp6(1),e.Q6J("ngIf",c.props.label&&!0!==c.props.hideLabel),e.xp6(1),e.Q6J("ngrxLet",c.wrapper.layout.control)}}function Me(u,y){if(1&u&&(e.ynx(0),e.TgZ(1,"nz-form-label",28),e._UZ(2,"span",25),e.qZA(),e.BQk()),2&u){const c=e.oxw(2);e.xp6(1),e.Q6J("nzRequired",c.props.required)("nzTooltipTitle",c.props.tooltip)("nzFor",c.id)("nzNoColon",!0),e.xp6(1),e.Q6J("nzContent",c.props.label)}}function Oe(u,y){if(1&u&&e._UZ(0,"formly-validation-message",29),2&u){const c=e.oxw(3);e.Q6J("field",c.field)}}function kt(u,y){if(1&u&&(e.TgZ(0,"nz-form-control",26),e.GkF(1,null,20),e.YNc(3,Oe,1,1,"ng-template",null,8,e.W1O),e.qZA()),2&u){const c=e.MAs(4),m=e.oxw(2),G=e.MAs(11);e.Q6J("nzExtra",m.wrapper.showExtra&&!m.showError?G:void 0)("nzValidateStatus",m.errorState)("nzErrorTip",c)}}function It(u,y){if(1&u&&(e.TgZ(0,"nz-form-item",27),e.YNc(1,Me,3,5,"ng-container",14),e.YNc(2,kt,5,3,"nz-form-control",22),e.qZA()),2&u){const c=e.oxw();e.Q6J("ngClass",e.l5B(3,x,c.props.disabled,c.showError,c.props.required,"VALID"===c.field.formControl.status)),e.xp6(1),e.Q6J("ngIf",c.props.label&&!0!==c.props.hideLabel),e.xp6(1),e.Q6J("ngrxLet",c.wrapper.layout.control)}}function Tt(u,y){if(1&u&&e._UZ(0,"span",34),2&u){const c=e.oxw(2);e.Q6J("innerHTML",c.props.description,e.oJD)}}function gt(u,y){if(1&u&&e._UZ(0,"span",35),2&u){const c=e.oxw(2);e.Q6J("innerHTML",c.props.description,e.oJD)}}function _t(u,y){if(1&u&&e._UZ(0,"span",36),2&u){const c=e.oxw(2);e.Q6J("innerHTML",c.props.description,e.oJD)}}function Ft(u,y){if(1&u&&(e.TgZ(0,"div",30),e.ynx(1,0),e.YNc(2,Tt,1,1,"span",31),e.YNc(3,gt,1,1,"span",32),e.YNc(4,_t,1,1,"span",33),e.BQk(),e.qZA()),2&u){const c=e.oxw();e.xp6(1),e.Q6J("ngSwitch",c.props.extraType),e.xp6(1),e.Q6J("ngSwitchCase","prompt"),e.xp6(1),e.Q6J("ngSwitchCase","description")}}function rn(u,y){if(1&u&&(e.TgZ(0,"div",37),e._UZ(1,"formly-validation-message",29),e.qZA()),2&u){const c=e.oxw();e.xp6(1),e.Q6J("field",c.field)}}let bn=(()=>{class u extends v.n2{get errorState(){return this.showError?"error":""}constructor(){super(),this.formLayout="vertical"}ngOnInit(){try{this.wrapper={layout:{item:{gutter:[6,12],...this.props.layout?.item?this.props.layout.item:void 0},label:{span:4,...this.props.layout?.label?this.props.layout.label:void 0},control:{span:20,...this.props.layout?.control?this.props.layout?.control:void 0}},showExtra:void 0===this.props.layout?.showExtra||this.props.layout.showExtra}}catch(c){console.error(c)}this.options.formState.formLayout&&(this.formLayout=this.options.formState.formLayout)}ngAfterViewInit(){this.options.formState.formLayout&&(this.formLayout=this.options.formState.formLayout)}}return u.\u0275fac=function(c){return new(c||u)},u.\u0275cmp=e.Xpm({type:u,selectors:[["cvc-form-field-wrapper"]],features:[e.qOj],decls:14,vars:4,consts:[[3,"ngSwitch"],["class","layout-horizontal",4,"ngSwitchCase"],["class","layout-inline",4,"ngSwitchCase"],["class","layout-vertical",4,"ngSwitchCase"],["horizontalFieldWrapper",""],["verticalFieldWrapper",""],["inlineFieldWrapper",""],["descriptionTpl",""],["errorTpl",""],[1,"layout-horizontal"],[3,"ngTemplateOutlet"],[1,"layout-inline"],[1,"layout-vertical"],[1,"layout-horizontal",3,"nzGutter","ngClass"],[4,"ngIf"],[3,"nzExtra","nzValidateStatus","nzErrorTip","nzSpan",4,"ngrxLet"],[3,"nzRequired","nzFor","nzNoColon","nzTooltipTitle","nzSpan",4,"ngrxLet"],[3,"nzRequired","nzFor","nzNoColon","nzTooltipTitle","nzSpan"],["nz-typography","","nzEllipsis","",3,"nzContent"],[3,"nzExtra","nzValidateStatus","nzErrorTip","nzSpan"],["fieldComponent",""],[1,"layout-vertical",3,"ngClass"],[3,"nzExtra","nzValidateStatus","nzErrorTip",4,"ngrxLet"],[3,"ngClass","nzRequired","nzFor","nzTooltipTitle","nzNoColon",4,"ngrxLet"],[3,"ngClass","nzRequired","nzFor","nzTooltipTitle","nzNoColon"],["nz-typography","","nzEllipsis","",1,"label",3,"nzContent"],[3,"nzExtra","nzValidateStatus","nzErrorTip"],[1,"layout-inline",3,"ngClass"],[3,"nzRequired","nzTooltipTitle","nzFor","nzNoColon"],[3,"field"],[1,"form-field-description"],["class","extra-prompt",3,"innerHTML",4,"ngSwitchCase"],["class","extra-description",3,"innerHTML",4,"ngSwitchCase"],[3,"innerHTML",4,"ngSwitchDefault"],[1,"extra-prompt",3,"innerHTML"],[1,"extra-description",3,"innerHTML"],[3,"innerHTML"],[1,"cvc-form-field-validation"]],template:function(c,m){1&c&&(e.ynx(0,0),e.YNc(1,Ce,2,1,"div",1),e.YNc(2,Z,2,1,"div",2),e.YNc(3,F,2,1,"div",3),e.BQk(),e.YNc(4,de,3,9,"ng-template",null,4,e.W1O),e.YNc(6,he,3,8,"ng-template",null,5,e.W1O),e.YNc(8,It,3,8,"ng-template",null,6,e.W1O),e.YNc(10,Ft,5,3,"ng-template",null,7,e.W1O),e.YNc(12,rn,2,1,"ng-template",null,8,e.W1O)),2&c&&(e.Q6J("ngSwitch",m.formLayout),e.xp6(1),e.Q6J("ngSwitchCase","horizontal"),e.xp6(1),e.Q6J("ngSwitchCase","inline"),e.xp6(1),e.Q6J("ngSwitchCase","vertical"))},dependencies:[M.mk,M.O5,M.tP,M.RF,M.n9,M.ED,I.eJ,k.t3,k.SK,s.Nx,s.iK,s.Fd,ge.ZU,v.M2],styles:['.typeahead-match[_ngcontent-%COMP%]{font-weight:700}.layout-vertical[_ngcontent-%COMP%]     nz-form-item:first-of-type{flex-wrap:nowrap;flex-direction:column}.layout-horizontal[_ngcontent-%COMP%]     nz-form-item:first-of-type{flex-direction:inherit}.layout-horizontal[_ngcontent-%COMP%]     nz-form-item:first-of-type nz-form-label{text-align:right;line-height:28px;white-space:inherit;padding:inherit}.layout-inline[_ngcontent-%COMP%]     nz-form-item:first-of-type{flex-direction:inherit}.layout-inline[_ngcontent-%COMP%]     nz-form-item:first-of-type nz-form-label{height:28px;line-height:28px;white-space:inherit;padding:inherit}.cvc-form-field-validation[_ngcontent-%COMP%], .form-field-description[_ngcontent-%COMP%]{min-height:16px;line-height:1.2;margin-top:4px}.cvc-form-field-validation[_ngcontent-%COMP%]   .extra-prompt[_ngcontent-%COMP%], .form-field-description[_ngcontent-%COMP%]   .extra-prompt[_ngcontent-%COMP%]{font-weight:400}.cvc-form-field-validation[_ngcontent-%COMP%]   .extra-description[_ngcontent-%COMP%], .form-field-description[_ngcontent-%COMP%]   .extra-description[_ngcontent-%COMP%]{font-style:oblique}.cvc-form-field-validation[_ngcontent-%COMP%]{font-weight:600}nz-form-item.layout-horizontal[_ngcontent-%COMP%]     nz-form-label:first-of-type label.ant-form-item-required{font-weight:500}nz-form-item.layout-horizontal[_ngcontent-%COMP%]     nz-form-label:first-of-type label.ant-form-item-required:before{border:1px solid #ff4d4f;height:1em;content:""}nz-form-item.layout-horizontal[_ngcontent-%COMP%]     nz-form-label:first-of-type   span.label{padding-right:4px}nz-form-item.layout-horizontal[_ngcontent-%COMP%]     nz-form-label:first-of-type.disabled label   span.label{color:#00000073}nz-form-item.layout-horizontal[_ngcontent-%COMP%]     nz-form-label:first-of-type.error label   span.label{color:#ff4d4f}nz-form-item.layout-horizontal[_ngcontent-%COMP%]     nz-form-label:first-of-type.valid label   span.label{color:#ff4d4f}nz-form-item.layout-vertical[_ngcontent-%COMP%]{background-color:#fff;border:1px solid #d9d9d9;padding:4px 8px;border-radius:6px;margin-bottom:16px}nz-form-item.layout-vertical.disabled[_ngcontent-%COMP%]{border:1px solid #f5f5f5;background-color:#f5f5f5}nz-form-item.layout-vertical[_ngcontent-%COMP%]     nz-form-label:first-of-type label.ant-form-item-required{font-weight:500}nz-form-item.layout-vertical[_ngcontent-%COMP%]     nz-form-label:first-of-type label.ant-form-item-required:before{border:1px solid #ff4d4f;height:1em;content:""}nz-form-item.layout-vertical[_ngcontent-%COMP%]     nz-form-label:first-of-type   span.label{padding-right:4px}nz-form-item.layout-vertical[_ngcontent-%COMP%]     nz-form-label:first-of-type.disabled label   span.label{color:#00000073}nz-form-item.layout-vertical[_ngcontent-%COMP%]     nz-form-label:first-of-type.error label   span.label{color:#ff4d4f}nz-form-item.layout-vertical[_ngcontent-%COMP%]     nz-form-label:first-of-type.valid label   span.label{color:#ff4d4f}nz-form-item.layout-inline[_ngcontent-%COMP%]     nz-form-label:first-of-type{text-align:right;margin-right:6px}nz-form-item.layout-inline[_ngcontent-%COMP%]     nz-form-label:first-of-type label.ant-form-item-required{font-weight:500}nz-form-item.layout-inline[_ngcontent-%COMP%]     nz-form-label:first-of-type label.ant-form-item-required:before{border:1px solid #ff4d4f;height:1em;content:""}nz-form-item.layout-inline[_ngcontent-%COMP%]     nz-form-label:first-of-type   span.label{padding-right:4px}nz-form-item.layout-inline[_ngcontent-%COMP%]     nz-form-label:first-of-type.disabled label   span.label{color:#00000073}nz-form-item.layout-inline[_ngcontent-%COMP%]     nz-form-label:first-of-type.error label   span.label{color:#ff4d4f}nz-form-item.layout-inline[_ngcontent-%COMP%]     nz-form-label:first-of-type.valid label   span.label{color:#ff4d4f}'],changeDetection:0}),u})();var et=a(6109),Re=a(551);const yt={wrappers:[{name:"form-field",component:bn}]};let je=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,t.UX,s.U5,k.Jb,Re.PV,et.cg,ge.ZJ,v.X0.forChild(yt)]}),u})();var Ut=a(2612);const _n={types:[{name:"checkbox",wrappers:["form-field"],component:(()=>{class u extends v.fS{constructor(){super(...arguments),this.defaultOptions={props:{indeterminate:!0,hideLabel:!0}}}ngAfterViewInit(){console.log(this.props)}}return u.\u0275fac=function(){let y;return function(m){return(y||(y=e.n5z(u)))(m||u)}}(),u.\u0275cmp=e.Xpm({type:u,selectors:[["cvc-checkbox"]],features:[e.qOj],decls:2,vars:4,consts:[["nz-checkbox","",3,"nzIndeterminate","formControl","formlyAttributes","ngModelChange"]],template:function(c,m){1&c&&(e.TgZ(0,"label",0),e.NdJ("ngModelChange",function(Fe){return m.props.change&&m.props.change(m.field,Fe)}),e._uU(1),e.qZA()),2&c&&(e.Q6J("nzIndeterminate",m.props.indeterminate&&null==m.formControl.value)("formControl",m.formControl)("formlyAttributes",m.field),e.xp6(1),e.hij(" ",m.props.label,"\n"))},dependencies:[t.JJ,t.oH,Ut.Ie,v.JD],changeDetection:0}),u})()}]};let On=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,t.UX,Ut.Wr,v.X0.forChild(_n),je]}),u})();var Jt=a(5695),Nt=a(2524);let Ye=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,Jt.X,Re.PV,et.cg,Nt.s]}),u})();var He=a(7248),Pe=a(824),We=a(9691);let Be=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,t.UX,v.X0.forChild(),He.F,Re.PV,s.U5,We.LV,Pe.o7,Nt.s]}),u})();var xe=a(2),te=a(655),ae=a(1791),De=a(2181),Ge=a(5619),Ct=a(7398),sn=a(4223);function yn(){var u;let y=((u=class extends v.fS{configureBaseField(){this.field?.options?.fieldChanges?(this.onModelChange$=this.field.options.fieldChanges.pipe((0,De.h)(m=>m.field.id===this.field.id),(0,sn.j)("value")),this.onValueChange$=new Ge.X(this.formControl.value?this.formControl.value:void 0),this.onModelChange$.pipe((0,ae.t)(this)).subscribe(m=>{this.onValueChange$.next(m)}),this.field.options?.formState&&this.field.options.formState.fields&&(this.state=this.field.options.formState,this.autoConfigureStateValueChanges())):console.error(`${this.field.id} could not find its fieldChanges Observable, ensure configureBaseField() is called in this field's AfterViewInit hook.`)}autoConfigureStateValueChanges(){!this.field.key&&"string"==typeof this.field.key&&console.warn(`${this.field.id} cannot auto-configure state value changes, as its field key is not a string. field.key: `,this.field.key);const m=`${this.field.key}$`;this.state&&this.state.fields[m]?(this.stateValueChange$=this.state.fields[m],this.onValueChange$.pipe((0,Ct.U)(G=>null===G?void 0:G),(0,ae.t)(this)).subscribe(G=>{this.stateValueChange$&&this.stateValueChange$.next(G)})):console.warn(`${this.field.id} could not find state field ${m} on form state. State: `,this.state)}}).\u0275fac=function(){let c;return function(G){return(c||(c=e.n5z(u)))(G||u)}}(),u.\u0275prov=e.Yz7({token:u,factory:u.\u0275fac}),u);return y=(0,te.gn)([(0,ae.c)()],y),y}var st=a(8645),it=a(2460);function lt(){return function(y){return(()=>{class m extends y{configureEnumSelectField(Fe){this.selectOption$=new Ge.X([]),this.onTagClose$=new st.x,this.optionEnum$=Fe.optionEnum$,this.changeDetectorRef=Fe.changeDetectorRef,this.optionTemplate$=Fe.optionTemplate$?Fe.optionTemplate$:new Ge.X([]),this.optionTemplate$.pipe((0,it.M)(this.optionEnum$),(0,ae.t)(this)).subscribe(Et=>{this.emitSelectOptions(Et)}),this.onTagClose$.pipe((0,ae.t)(this)).subscribe(Et=>{this.resetField()})}emitSelectOptions([Fe,Et]){this.selectOption$.next(Et.map((Mn,kn)=>({label:Fe[kn]||Mn,value:Mn}))),this.changeDetectorRef?this.changeDetectorRef.detectChanges():console.error(`${this.field.id}'s configureEnumTagField() requires valid ChangeDetectorRef option, none detected.`)}resetField(){this.formControl.setValue(this.props.isMultiSelect?[]:void 0)}}return m.\u0275fac=function(){let G;return function(Et){return(G||(G=e.n5z(m)))(Et||m)}}(),m.\u0275prov=e.Yz7({token:m,factory:m.\u0275fac}),m})()}}var Pt=a(836);const Vt=function wt(u){for(var y=arguments.length,c=new Array(y>1?y-1:0),m=1;m<y;m++)c[m-1]=arguments[m];return c.reduce(function(G,Fe){return Fe(G)},u)},jt=function(){return[]};let Ke=(()=>{class u{constructor(){this.cvcSelectMode="default",this.cvcPlaceholder="Select an option",this.cvcOptions=[],this.cvcShowError=!1,this.cvcDisabled=!1,this.cvcAllowClear=!0,this.cvcCustomTemplate=null,this.cvcOnFocus=new e.vpe}}return u.\u0275fac=function(c){return new(c||u)},u.\u0275cmp=e.Xpm({type:u,selectors:[["cvc-enum-select"]],inputs:{cvcFormControl:"cvcFormControl",cvcFormlyAttributes:"cvcFormlyAttributes",cvcSelectMode:"cvcSelectMode",cvcPlaceholder:"cvcPlaceholder",cvcOptions:"cvcOptions",cvcShowError:"cvcShowError",cvcDisabled:"cvcDisabled",cvcAllowClear:"cvcAllowClear",cvcModelChange:"cvcModelChange",cvcCustomTemplate:"cvcCustomTemplate"},outputs:{cvcOnFocus:"cvcOnFocus"},decls:1,vars:12,consts:[[3,"formControl","formlyAttributes","nzMode","nzPlaceHolder","nzOptions","nzCustomTemplate","nzOptionHeightPx","nzDisabled","nzAllowClear","nzFocus","ngModelChange"]],template:function(c,m){1&c&&(e.TgZ(0,"nz-select",0),e.NdJ("nzFocus",function(){return m.cvcOnFocus.next()})("ngModelChange",function(Fe){return m.cvcModelChange&&m.cvcModelChange(m.cvcFormlyAttributes,Fe)}),e.qZA()),2&c&&(e.ekj("ng-dirty",m.cvcShowError),e.Q6J("formControl",m.cvcFormControl)("formlyAttributes",m.cvcFormlyAttributes)("nzMode",m.cvcSelectMode)("nzPlaceHolder",m.cvcPlaceholder?m.cvcPlaceholder:"Select Value")("nzOptions",m.cvcOptions?m.cvcOptions:e.DdM(11,jt))("nzCustomTemplate",m.cvcCustomTemplate?m.cvcCustomTemplate:null)("nzOptionHeightPx",30)("nzDisabled",m.cvcDisabled)("nzAllowClear",m.cvcAllowClear))},dependencies:[t.JJ,t.oH,v.JD,We.Vq],changeDetection:0}),u})();var K=a(6967),w=a(7334);function J(u,y){}function Te(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"span",5)(1,"nz-tag",6),e.NdJ("nzOnClose",function(G){e.CHM(c);const Fe=e.oxw();return e.KtG(Fe.cvcOnClose.next(G))}),e.YNc(2,J,0,0,"ng-template",7),e.qZA()()}if(2&u){const c=e.oxw(),m=e.MAs(5);e.xp6(1),e.Q6J("nzMode",c.cvcMode)("nzTooltipTitle",c.cvcTooltip)("nzChecked",c.cvcChecked),e.xp6(1),e.Q6J("ngTemplateOutlet",m)}}function zt(u,y){}function nt(u,y){if(1&u&&(e.TgZ(0,"span",8)(1,"nz-tag",9),e.YNc(2,zt,0,0,"ng-template",7),e.qZA()()),2&u){const c=e.oxw(),m=e.MAs(5);e.xp6(1),e.Q6J("nzMode","checkable")("nzChecked",c.cvcChecked),e.xp6(1),e.Q6J("ngTemplateOutlet",m)}}function qe(u,y){}function rt(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"span",10)(1,"nz-tag",11),e.NdJ("nzOnClose",function(G){e.CHM(c);const Fe=e.oxw();return e.KtG(Fe.cvcOnClose.next(G))}),e.YNc(2,qe,0,0,"ng-template",7),e.qZA()()}if(2&u){e.oxw();const c=e.MAs(5);e.xp6(1),e.Q6J("nzMode","closeable"),e.xp6(1),e.Q6J("ngTemplateOutlet",c)}}function Rt(u,y){}function St(u,y){if(1&u&&(e.TgZ(0,"span",12)(1,"nz-tag",13),e.YNc(2,Rt,0,0,"ng-template",7),e.qZA()()),2&u){const c=e.oxw(),m=e.MAs(5);e.xp6(1),e.Q6J("nzMode","default")("nzTooltipTitle",c.cvcTooltip),e.xp6(1),e.Q6J("ngTemplateOutlet",m)}}const gn=function(u){return{"tag-icon-large":u}};function Ze(u,y){if(1&u&&(e._UZ(0,"i",16),e.ALo(1,"evidenceEnumDisplay")),2&u){const c=e.oxw(2);e.Q6J("nzType",!0===c.cvcShowIcon?e.xi3(1,5,c.cvcAttrValue,"icon-name"):c.cvcShowIcon)("nzTwotoneColor",c.cvcIconColor)("nzTheme",c.cvcIconTheme)("ngClass",e.VKq(8,gn,!0===c.cvcZoomIcon)),e.uIk("style","color: "+c.cvcIconColor,e.Ckj)}}function ut(u,y){if(1&u&&(e._UZ(0,"span",17),e.ALo(1,"highlightTypeahead"),e.ALo(2,"evidenceEnumDisplay")),2&u){const c=e.oxw(2);e.Q6J("innerHtml",e.xi3(1,1,e.xi3(2,4,c.cvcAttrValue,"display-string"===c.cvcShowLabel?c.cvcShowLabel:"short-string"),c.cvcEmphasize),e.oJD)}}function ce(u,y){if(1&u&&(e.YNc(0,Ze,2,10,"i",14),e.YNc(1,ut,3,7,"span",15)),2&u){const c=e.oxw();e.Q6J("ngIf",c.cvcAttrValue&&c.cvcShowIcon),e.xp6(1),e.Q6J("ngIf",c.cvcShowLabel)}}let _e=(()=>{class u{constructor(){this.cvcShowLabel="display-string",this.cvcShowIcon=!0,this.cvcZoomIcon=!1,this.cvcContext="default",this.cvcMode="default",this.cvcChecked=!1,this.cvcIconColor="#797979",this.cvcLabelColor="#434343",this.cvcIconTheme="outline",this.cvcFullWidth=!1,this.cvcOnClose=new e.vpe}ngOnChanges(c){c.cvcContext&&"compact"===c.cvcContext.currentValue&&(this.cvcShowIcon=!0,this.cvcShowLabel=!1,this.cvcZoomIcon=!0)}}return u.\u0275fac=function(c){return new(c||u)},u.\u0275cmp=e.Xpm({type:u,selectors:[["cvc-attribute-tag"]],hostVars:2,hostBindings:function(c,m){2&c&&e.ekj("full-width",!0===m.cvcFullWidth)},inputs:{cvcAttrValue:"cvcAttrValue",cvcShowLabel:"cvcShowLabel",cvcShowIcon:"cvcShowIcon",cvcZoomIcon:"cvcZoomIcon",cvcTooltip:"cvcTooltip",cvcContext:"cvcContext",cvcMode:"cvcMode",cvcChecked:"cvcChecked",cvcEmphasize:"cvcEmphasize",cvcIconColor:"cvcIconColor",cvcLabelColor:"cvcLabelColor",cvcIconTheme:"cvcIconTheme",cvcFullWidth:"cvcFullWidth"},outputs:{cvcOnClose:"cvcOnClose"},features:[e.TTD],decls:6,vars:4,consts:[["class","default",4,"ngIf"],["class","menu-item",4,"ngIf"],["class","select-item",4,"ngIf"],["class","compact",4,"ngIf"],["tagContent",""],[1,"default"],["nz-tooltip","",3,"nzMode","nzTooltipTitle","nzChecked","nzOnClose"],[3,"ngTemplateOutlet"],[1,"menu-item"],[3,"nzMode","nzChecked"],[1,"select-item"],[3,"nzMode","nzOnClose"],[1,"compact"],["nz-tooltip","",3,"nzMode","nzTooltipTitle"],["nz-icon","","class","tag-icon",3,"nzType","nzTwotoneColor","nzTheme","ngClass",4,"ngIf"],["class","tag-label",3,"innerHtml",4,"ngIf"],["nz-icon","",1,"tag-icon",3,"nzType","nzTwotoneColor","nzTheme","ngClass"],[1,"tag-label",3,"innerHtml"]],template:function(c,m){1&c&&(e.YNc(0,Te,3,4,"span",0),e.YNc(1,nt,3,3,"span",1),e.YNc(2,rt,3,2,"span",2),e.YNc(3,St,3,3,"span",3),e.YNc(4,ce,2,2,"ng-template",null,4,e.W1O)),2&c&&(e.Q6J("ngIf","default"===m.cvcContext),e.xp6(1),e.Q6J("ngIf","menu-item"===m.cvcContext),e.xp6(1),e.Q6J("ngIf","select-item"===m.cvcContext),e.xp6(1),e.Q6J("ngIf","compact"===m.cvcContext))},dependencies:[M.mk,M.O5,M.tP,Jt.j,Re.Ls,et.SY,K.Do,w.A],styles:['.full-width[_nghost-%COMP%]{width:100%}.full-width[_nghost-%COMP%]   nz-tag[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]   nz-tag[_ngcontent-%COMP%]{margin-right:0;margin-inline-end:4px}.default[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]{margin:0;padding:0 2px 0 0;margin-inline-end:4px;max-width:100%}.default[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon[_ngcontent-%COMP%], .default[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon-large[_ngcontent-%COMP%]{display:inline-block}.default[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon[_ngcontent-%COMP%]{padding:3px 2px 3px 4px;margin:-3px 0}.default[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon-large[_ngcontent-%COMP%]{padding:3px 2px 3px 4px;margin:-3px 0}.default[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon-large[_ngcontent-%COMP%]     svg{transform:scale(1.25)}.default[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-label[_ngcontent-%COMP%]{display:inline-block;margin:-3px 0 -4px;padding:3px 3px 3px 2px;line-height:1}.default[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]     i.ant-tag-close-icon.anticon-close{transition:none;margin-left:3px}.compact[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]{margin:0;padding:0 2px 0 0;margin-inline-end:4px;max-width:100%}.compact[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon[_ngcontent-%COMP%], .compact[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon-large[_ngcontent-%COMP%]{display:inline-block}.compact[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon[_ngcontent-%COMP%]{padding:3px 2px 3px 4px;margin:-3px 0}.compact[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon-large[_ngcontent-%COMP%]{padding:3px 2px 3px 4px;margin:-3px 0}.compact[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon-large[_ngcontent-%COMP%]     svg{transform:scale(1.25)}.compact[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-label[_ngcontent-%COMP%]{display:inline-block;margin:-3px 0 -4px;padding:3px 3px 3px 2px;line-height:1}.compact[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]     i.ant-tag-close-icon.anticon-close{transition:none;margin-left:3px}.menu-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]{background-color:#fff}.menu-item[_ngcontent-%COMP%]   nz-tag.ant-tag-checkable[_ngcontent-%COMP%]{border:1px solid #d9d9d9}.menu-item[_ngcontent-%COMP%]   nz-tag.ant-tag-checkable[_ngcontent-%COMP%]:active{background-color:#e6f7ff}.menu-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]:not(.menu-item   nz-tag.ant-tag-checkable-checked)[_ngcontent-%COMP%]:hover{color:#000000d9;border-color:#1890ff}.menu-item[_ngcontent-%COMP%]   nz-tag.ant-tag-checkable-checked[_ngcontent-%COMP%]{border:transparent;background-color:#fff;color:#000000d9}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]{margin:0;padding:0 2px 0 0;margin-inline-end:4px;max-width:100%}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon[_ngcontent-%COMP%], .select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon-large[_ngcontent-%COMP%]{display:inline-block}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon[_ngcontent-%COMP%]{padding:3px 2px 3px 4px;margin:-3px 0}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon-large[_ngcontent-%COMP%]{padding:3px 2px 3px 4px;margin:-3px 0}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon-large[_ngcontent-%COMP%]     svg{transform:scale(1.25)}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-label[_ngcontent-%COMP%]{display:inline-block;margin:-3px 0 -4px;padding:3px 3px 3px 2px;line-height:1}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]     i.ant-tag-close-icon.anticon-close{transition:none;margin-left:3px}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]{background:#f5f5f5;border:1px solid #f0f0f0}.multi-select-item[_ngcontent-%COMP%]{display:inline-block;margin-top:-3px;margin-bottom:-3px;margin-left:-4px;padding-left:4px}.multi-select-item[_ngcontent-%COMP%]   .tag-icon[_ngcontent-%COMP%]:after{content:" "}.typeahead-match[_ngcontent-%COMP%]{font-weight:700}'],changeDetection:0}),u})();const mt=["optionTemplates"];function Ae(u,y){if(1&u&&e._UZ(0,"cvc-attribute-tag",4),2&u){const c=e.oxw().$implicit;e.Q6J("cvcAttrValue",c)}}function at(u,y){1&u&&(e.ynx(0),e.YNc(1,Ae,1,1,"ng-template",null,3,e.W1O),e.BQk())}function Ht(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"div",5)(1,"cvc-attribute-tag",6),e.NdJ("cvcOnClose",function(G){e.CHM(c);const Fe=e.oxw();return e.KtG(Fe.onTagClose$.next(G))}),e.qZA()()}if(2&u){const c=y.$implicit,m=e.oxw();e.xp6(1),e.Q6J("cvcAttrValue",c.nzValue)("cvcContext",m.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",m.props.isMultiSelect?"default":"closeable")}}const un={Evidence:{PREDICTIVE:{SUPPORTS:"Experiment or study supports the variant's response to a drug",DOES_NOT_SUPPORT:"Experiment or study does not support, or was inconclusive of an interaction between the variant and a drug"},DIAGNOSTIC:{SUPPORTS:"Experiment or study supports the variant's impact on the diagnosis of disease or subtype",DOES_NOT_SUPPORT:"Experiment or study does not support the variant's impact on diagnosis of disease or subtype"},PROGNOSTIC:{SUPPORTS:"Experiment or study supports the variant's impact on prognostic outcome",DOES_NOT_SUPPORT:"Experiment or study does not support a prognostic association between variant and outcome"},PREDISPOSING:{SUPPORTS:"Suggests a pathogenic or a protective role for a germline variant in cancer",DOES_NOT_SUPPORT:"Supports a benign (for Predisposition) or lack of protective (for Protectiveness) role for a germline variant in cancer."},FUNCTIONAL:{SUPPORTS:"Experiment or study supports the variant causing alteration or non-alteration of the gene product function",DOES_NOT_SUPPORT:"Experiment or study does not support the variant causing alteration or non-alteration of the gene product function"},ONCOGENIC:{NA:"Not Applicable for Oncogenic Evidence Type.",SUPPORTS:"Supports an oncogenic or protective role for a somatic variant.",DOES_NOT_SUPPORT:"Supports a benign (for Oncogenicity) or lack of protective (for Protectiveness) role for a somatic variant in cancer."}},Assertion:{PREDICTIVE:{SUPPORTS:"Support the variant's response to a drug",DOES_NOT_SUPPORT:"Does not support, or was inconclusive of an interaction between the variant and a drug"},DIAGNOSTIC:{SUPPORTS:"Supports the variant's impact on the diagnosis of disease or subtype",DOES_NOT_SUPPORT:"Does not support the variant's impact on diagnosis of disease or subtype"},PROGNOSTIC:{SUPPORTS:"Supports the variant's impact on prognostic outcome",DOES_NOT_SUPPORT:"Does not support a prognostic association between variant and outcome"},PREDISPOSING:{SUPPORTS:"Suggests a pathogenic or a protective role for a germline variant in cancer",DOES_NOT_SUPPORT:"Does not support an association between the variant and disease causation"},FUNCTIONAL:{SUPPORTS:"Supports the variant causing alteration or non-alteration of the gene product function",DOES_NOT_SUPPORT:"Does not support the variant causing alteration or non-alteration of the gene product function"},ONCOGENIC:{SUPPORTS:"Supports an oncogenic or protective role for a somatic variant",DOES_NOT_SUPPORT:"Does not support an association between the variant and disease causation"}}},Lt=Vt(yn(),lt()),ft={types:[{name:"direction-select",wrappers:["form-field"],component:(()=>{class u extends Lt{constructor(c){super(),this.cdr=c,this.defaultOptions={props:{label:"Direction",labelFn:m=>`${m} Direction`,required:!0,isMultiSelect:!1,placeholder:"Select Entity Direction",placeholderFn:(m,G)=>`Select ${G?G+" ":""}${m} Direction`,requireTypePromptFn:m=>`Select ${m} Type to select its Direction`,formMode:"add"}},this.directionEnum$=new Ge.X([])}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEnumSelectField({optionEnum$:this.directionEnum$,optionTemplate$:this.optionTemplate$,changeDetectorRef:this.cdr})}configureStateConnections(){if(!this.state)return console.error(`${this.field.id} requires a form state to populate its options, none was found.`),void(this.placeholder$=new Ge.X("ERROR: Form state not found"));if(this.props.label=this.props.labelFn(this.state.entityName),this.props.tooltip=`An indicator of whether the ${this.state.entityName} statement supports or refutes the clinical significance of an event.`,this.placeholder$=new Ge.X(this.props.placeholderFn(this.state.entityName)),!this.state.enums.direction$)return void console.error(`${this.field.id} could not find form state's direction$ to populate select.`);this.state.enums.direction$.pipe((0,ae.t)(this)).subscribe(m=>{this.directionEnum$.next(m)}),this.optionTemplates||console.info(`${this.field.id} could not find its optionTemplates QueryList to populate its select options, so simple text labels will be displayed.`),this.optionTemplate$=this.optionTemplates?.changes.pipe((0,Ct.U)(m=>m.map(G=>G)));const c=`${this.state.entityName.toLowerCase()}Type$`;this.state.fields[c]?(this.onEntityType$=this.state.fields[c],this.onEntityType$.pipe((0,Pt.T)("add"===this.props.formMode?0:1),(0,ae.t)(this)).subscribe(m=>{m?(this.props.disabled=!1,this.props.description=void 0,this.props.extraType=void 0,this.placeholder$.next(this.props.placeholderFn(this.state.entityName,(0,xe.E)(m)))):(this.props.disabled=!0,this.props.description=this.props.requireTypePromptFn(this.state.entityName),this.props.extraType="prompt"),this.formControl.value&&this.formControl.setValue(void 0)}),this.onValueChange$.pipe((0,it.M)(this.onEntityType$),(0,ae.t)(this)).subscribe(([m,G])=>{!G||!m||!this.state||(this.props.extraType="description",this.props.description=un[this.state.entityName][G][m])})):console.error(`${this.field.id} could not find form state's ${c} to populate Direction options.`)}}return u.\u0275fac=function(c){return new(c||u)(e.Y36(e.sBO))},u.\u0275cmp=e.Xpm({type:u,selectors:[["cvc-direction-select"]],viewQuery:function(c,m){if(1&c&&e.Gf(mt,5,e.Rgc),2&c){let G;e.iGM(G=e.CRH())&&(m.optionTemplates=G)}},features:[e.qOj],decls:7,vars:15,consts:[[3,"cvcFormControl","cvcFormlyAttributes","cvcSelectMode","cvcPlaceholder","cvcCustomTemplate","cvcOptions","cvcShowError","cvcDisabled"],[4,"ngFor","ngForOf"],["selectedTemplate",""],["optionTemplates",""],[3,"cvcAttrValue"],[1,"ant-select-selection-item-content"],[3,"cvcAttrValue","cvcContext","cvcMode","cvcOnClose"]],template:function(c,m){if(1&c&&(e._UZ(0,"cvc-enum-select",0),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.YNc(3,at,3,0,"ng-container",1),e.ALo(4,"ngrxPush"),e.YNc(5,Ht,2,3,"ng-template",null,2,e.W1O)),2&c){const G=e.MAs(6);e.Q6J("cvcFormControl",m.formControl)("cvcFormlyAttributes",m.field)("cvcSelectMode",m.props.isMultiSelect?"multiple":"default")("cvcPlaceholder",e.lcZ(1,9,m.placeholder$))("cvcCustomTemplate",G)("cvcOptions",e.lcZ(2,11,m.selectOption$))("cvcShowError",m.showError)("cvcDisabled",m.props.disabled),e.xp6(3),e.Q6J("ngForOf",e.lcZ(4,13,m.directionEnum$))}},dependencies:[M.sg,Ke,_e,I.fM],changeDetection:0}),u})()}]};let ne=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,t.UX,v.X0.forChild(ft),je,Be,Ye]}),u})();var B=a(5717),ze=a(3328),$e=a(2574),Mt=a(3903),on=a(6987);let Zt=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,t.UX,v.X0.forChild(),Mt.L,Re.PV,We.LV,Pe.o7,s.U5,ge.ZJ,B.ic,$e.zf,on.S,ze.x,Nt.s]}),u})();var Wn=a(5106),pn=a(2840),qn=a(67),co=a(7417),_o=a(7328),Yo=a(5592),Ko=a(2096),ui=a(4664),mo=a(3997),Xn=a(9666),di=a(2428),pi=a(4911),wo=a(9397),So=a(5676),Eo=a(2572);function Pi(...u){let y=u[0],c=u[1];if(0===y.length)return(0,Ko.of)(c?c([]):[]);const m=y.slice();return c&&m.push((...G)=>c(G)),Eo.a.apply(null,m)}function Xo(){return function(y){return(()=>{class m extends y{configureEntitySelectField(Fe){if(this.typeaheadQuery=Fe.typeaheadQuery,this.tagQuery=Fe.tagQuery,this.getTypeaheadVars=Fe.getTypeaheadVarsFn,this.getTypeahedResults=Fe.getTypeaheadResultsFn,this.getTagQueryVars=Fe.getTagQueryVarsFn,this.getTagQueryResults=Fe.getTagQueryResultsFn,this.getSelectedItemOption=Fe.getSelectedItemOptionFn,this.getSelectOptions=Fe.getSelectOptionsFn,this.typeaheadParam$=Fe.typeaheadParam$,this.typeaheadParamName$=Fe.typeaheadParamName$,this.selectOpen$=Fe.selectOpen$||new _o.t,this.selectComponent=Fe.selectComponent,this.minSearchStrLength=Fe.minSearchStrLength||0,this.cdr=Fe.changeDetectorRef,this.onSearch$=new Ge.X(void 0),this.isLoading$=new Yo.y,this.result$=new Ge.X([]),this.onPopulate$=new st.x,this.onTagClose$=new st.x,this.onOpenChange$=new st.x,this.onCreate$=new st.x,this.selectOption$=new Ge.X(void 0),this.response$=this.onSearch$.pipe((0,Pt.T)(1),(0,De.h)(So.ep),(0,De.h)(Et=>0===this.minSearchStrLength||Et.length>=this.minSearchStrLength),(0,it.M)(void 0!==this.typeaheadParam$?this.typeaheadParam$:(0,Ko.of)(void 0)),(0,ui.w)(([Et,Mn])=>{const kn=this.getTypeaheadVars(Et,Mn),$o=er=>(this.queryRef=this.typeaheadQuery.watch(er),this.isLoading$=this.queryRef.valueChanges.pipe((0,sn.j)("loading"),(0,mo.x)()),this.queryRef.valueChanges),Bi=er=>(0,Xn.D)(this.queryRef.refetch(er));return(0,di.s)(()=>void 0===this.queryRef,(0,pi.P)(()=>$o(kn)),(0,pi.P)(()=>Bi(kn)))})),this.onOpenChange$.subscribe(Et=>{Et&&this.onSearch$.next("")}),this.response$.pipe((0,De.h)(Et=>void 0!==Et.data),(0,Ct.U)(Et=>this.getTypeahedResults(Et)),(0,ae.t)(this)).subscribe(Et=>{this.result$.next(Et),0===Et.length&&this.selectOption$.next([]),this.cdr.detectChanges()}),this.optionTemplates?this.optionTemplates.changes.pipe((0,it.M)(this.result$),(0,ae.t)(this)).subscribe(([Et,Mn])=>{const kn=this.getSelectOptions(Mn,Et);this.selectOption$.next(kn),this.cdr.detectChanges()}):(console.warn(`${this.field.id} could not find reference to optionTemplates ViewChildren, options will only show entity name text.`),this.result$.pipe((0,ae.t)(this)).subscribe(Et=>{this.selectOption$.next(Et.map(Mn=>({label:Mn.name,value:Mn.id})))})),this.onPopulate$.pipe((0,De.h)(So.ep),(0,ui.w)(Et=>Pi(this.getTagQueries(Et))),(0,Ct.U)(Et=>Et.map(Mn=>this.getTagQueryResults(Mn))),(0,wo.b)(Et=>{this.result$.next(Et)}),(0,ae.t)(this)).subscribe(Et=>{let Mn;if(this.field.props&&this.field.props.isMultiSelect){const kn=[];Et.forEach($o=>kn.push($o?.id||void 0)),Mn=kn}else Mn=Et[0].id;this.formControl.setValue(Mn),this.selectOpen$.next(!1)}),this.formControl.value){const Et=this.formControl.value;if(Object.keys(Et).length>0&&Et.constructor===Object)return void console.error(`${this.field.id} prepopulated value must be a primitive or array of primitives, value is an object:`,Et);this.onPopulate$.next(Et)}this.onTagClose$.pipe((0,ae.t)(this)).subscribe(Et=>{this.resetField()})}getTagQueries(Fe){return"number"==typeof Fe&&(Fe=[Fe]),Fe.map(Mn=>this.tagQuery.fetch(this.getTagQueryVars(Mn),{fetchPolicy:"cache-first"}).pipe((0,De.h)(kn=>!!kn.data)))}resetField(){this.formControl.setValue(void 0),this.result$&&this.result$.next([])}}return m.\u0275fac=function(){let G;return function(Et){return(G||(G=e.n5z(m)))(Et||m)}}(),m.\u0275prov=e.Yz7({token:m,factory:m.\u0275fac}),m})()}}var Gi,zi=a(8180),An=a(313),bi=a(8753),Si=a(6321),tr=a(7081);function Or(u,y){1&u&&e._UZ(0,"span",5),2&u&&e.Q6J("nzType","loading")}function Ei(u,y){if(1&u&&(e.YNc(0,Or,1,1,"span",4),e.ynx(1),e._uU(2),e.BQk()),2&u){const c=e.oxw().ngrxLet;e.Q6J("ngIf",c.showSpinner),e.xp6(2),e.hij(" ",c.message," ")}}const vr=function(u,y,c){return{$implicit:u,createMsg:y,model:c}};function Qi(u,y){if(1&u&&(e._UZ(0,"nz-divider"),e.TgZ(1,"div",6),e.GkF(2,7),e.qZA()),2&u){const c=e.oxw().ngrxLet,m=e.oxw();e.xp6(2),e.Q6J("ngTemplateOutlet",m.cvcAddEntity)("ngTemplateOutletContext",e.kEZ(2,vr,c.searchStr,c.message,m.cvcAddEntityModel))}}const ur=function(){return[]};function dr(u,y){if(1&u){const c=e.EpF();e.ynx(0),e.TgZ(1,"nz-select",1),e.NdJ("nzOpenChange",function(G){e.CHM(c);const Fe=e.oxw();return e.KtG(Fe.onOpenChange$.next(G))})("nzOnSearch",function(G){e.CHM(c);const Fe=e.oxw();return e.KtG(Fe.cvcOnSearch.next(G))})("ngModelChange",function(G){e.CHM(c);const Fe=e.oxw();return e.KtG(Fe.cvcOnModelChange.next(G))}),e.qZA(),e.YNc(2,Ei,3,2,"ng-template",null,2,e.W1O),e.YNc(4,Qi,3,6,"ng-template",null,3,e.W1O),e.BQk()}if(2&u){const c=y.ngrxLet,m=e.MAs(3),G=e.MAs(5),Fe=e.oxw();e.xp6(1),e.ekj("ng-dirty",Fe.cvcShowError),e.Q6J("nzDropdownMatchSelectWidth",!0)("formControl",Fe.cvcFormControl)("formlyAttributes",Fe.cvcFormlyAttributes)("nzMode",Fe.cvcSelectMode)("nzPlaceHolder",Fe.cvcPlaceholder||"Search "+Fe.cvcEntityName.plural)("nzCustomTemplate",Fe.cvcCustomTemplate||null)("nzOptionHeightPx",30)("nzDisabled",Fe.cvcDisabled)("nzLoading",Fe.cvcLoading)("nzAllowClear",Fe.cvcAllowClear)("nzBorderless",Fe.cvcBorderless)("nzSuffixIcon",Fe.cvcSuffixIcon)("nzShowArrow",Fe.cvcShowArrow)("nzAutoClearSearchValue",Fe.cvcAutoClearSearchValue)("nzOptions",Fe.cvcOptions||e.DdM(20,ur))("nzDropdownRender",c.showAddForm?G:null)("nzNotFoundContent",m)("nzOpen",Fe.cvcSelectOpen)}}const lo={search:(u,y,c)=>`Searching ${u} matching "${y}"...`,searchAll:(u,y,c)=>`Listing all ${u}...`,searchParam:(u,y,c)=>`Searching ${c} ${u} matching "${y}"...`,searchParamAll:(u,y,c)=>`Listing all ${c} ${u}...`,searchEnterQuery:(u,y,c,m)=>`Enter at least ${m} characters to search ${c} ${u}`,searchEnterQueryAll:(u,y,c,m)=>`Enter at least least ${m} characters to search ${u}`,empty:(u,y,c)=>`No ${u} found matching "${y}"`,emptyAll:(u,y,c)=>`No ${u} found.`,emptyParam:(u,y,c)=>`No ${c} ${u} found matching "${y}"`,emptyParamAll:(u,y,c)=>`No ${c} ${u} found`};let Oo=((Gi=class{constructor(){this.cvcEntityName={singular:"Entity",plural:"Entities"},this.cvcSelectMode="default",this.cvcLoading=!1,this.cvcOptions=void 0,this.cvcShowError=!1,this.cvcDisabled=!1,this.cvcAllowClear=!0,this.cvcBorderless=!1,this.cvcShowArrow=!1,this.cvcAutoClearSearchValue=!0,this.cvcSuffixIcon="search",this.cvcCustomTemplate=null,this.cvcAddEntity=null,this.cvcMinSearchStrLength=0,this.cvcAddEntityBehavior=(y,c)=>y.length>this.cvcMinSearchStrLength&&0===c.length,this.cvcOnOpenChange=new e.vpe,this.cvcOnSearch=(new e.vpe).pipe((0,bi.p)(300,Si.z,{leading:!1,trailing:!0}),(0,tr.d)(1)),this.cvcOnModelChange=new e.vpe,this.cvcSelectComponent=new e.vpe,this.messageOptions=lo,this.onParamName$=new Ge.X(void 0),this.onOption$=new Ge.X([]),this.onOpenChange$=new Ge.X(!1),this.onLoading$=new Ge.X(!1),this.notFoundDisplay$=new Ge.X({searchStr:"",showSpinner:!0,showAddForm:!1,message:`Searching ${this.cvcEntityName.plural}...`}),this.previousIsOpen=!1}ngAfterViewInit(){this.cvcSelectMessages&&(this.messageOptions={...this.messageOptions,...this.cvcSelectMessages}),this.nzSelectComponent?(this.cvcSelectComponent.next(this.nzSelectComponent),this.onOpenChange$.pipe((0,ae.t)(this)).subscribe(y=>{this.cvcOnOpenChange.next(y)}),(0,Eo.a)([this.onOpenChange$,this.cvcOnSearch,this.onParamName$,this.onOption$,this.onLoading$.pipe((0,mo.x)())]).pipe((0,Ct.U)(([y,c,m,G,Fe])=>{const Et=this.cvcEntityName.plural,Mn=this.cvcMinSearchStrLength,kn=null!==this.cvcAddEntity,$o=!1===this.previousIsOpen&&!0===y;if(this.previousIsOpen=y,$o)return this.getSelectInitDisplay(Et,Mn,m);if(Fe&&c.length>=Mn){const Bi=this.cvcAddEntityBehavior(c,this.cvcResults||[]);return this.getSelectSearchingDisplay(c,Et,Mn,m,kn,Bi)}return y&&!Fe&&c.length>=Mn&&0===G.length?this.getSelectEmptyDisplay(c,Et,m,kn):{searchStr:"",showSpinner:!1,showAddForm:kn&&this.cvcAddEntityBehavior(c,this.cvcResults||[]),message:""}}),(0,wo.b)(y=>{console.log("NotFoundDisplay: ",y),this.notFoundDisplay$.next(y)}),(0,ae.t)(this)).subscribe()):console.error(`${this.cvcEntityName.singular} entity-select could not gain reference to its nzSelectComponent, aborting AfterViewInit()`)}getSelectInitDisplay(y,c,m){let G=this.messageOptions.searchAll,Fe=!1;return 0==c?(Fe=!0,G=void 0===m?this.messageOptions.searchAll:this.messageOptions.searchParamAll):c>0&&(Fe=!1,G=void 0===m?this.messageOptions.searchEnterQueryAll:this.messageOptions.searchEnterQuery),{message:G(y,"",m,c),showSpinner:Fe,showAddForm:!1,searchStr:""}}getSelectSearchingDisplay(y,c,m,G,Fe,Et=!1){let Mn=this.messageOptions.searchAll;return Mn=void 0===G?y.length>0?this.messageOptions.search:this.messageOptions.searchAll:y.length>0?this.messageOptions.searchParam:this.messageOptions.searchParamAll,{message:Mn(c,y,G),showSpinner:!0,showAddForm:Fe&&Et,searchStr:y}}getSelectEmptyDisplay(y,c,m,G){let Fe=this.messageOptions.empty;return Fe=void 0===m?y.length>0?this.messageOptions.empty:this.messageOptions.emptyAll:y.length>0?this.messageOptions.emptyParam:this.messageOptions.emptyParamAll,{message:Fe(c,y,m),showSpinner:!1,showAddForm:G,searchStr:y}}ngOnChanges(y){if(y.cvcParamName&&this.onParamName$.next(y.cvcParamName.currentValue),y.cvcOptions){const c=y.cvcOptions.currentValue;void 0!==c&&this.onOption$.next(c)}if(y.cvcLoading){const c=y.cvcLoading.currentValue;void 0!==c&&this.onLoading$.next(c)}}}).\u0275fac=function(y){return new(y||Gi)},Gi.\u0275cmp=e.Xpm({type:Gi,selectors:[["cvc-entity-select"]],viewQuery:function(y,c){if(1&y&&e.Gf(We.Vq,5),2&y){let m;e.iGM(m=e.CRH())&&(c.nzSelectComponent=m.first)}},inputs:{cvcFormControl:"cvcFormControl",cvcFormlyAttributes:"cvcFormlyAttributes",cvcEntityName:"cvcEntityName",cvcSelectMessages:"cvcSelectMessages",cvcSelectMode:"cvcSelectMode",cvcPlaceholder:"cvcPlaceholder",cvcLoading:"cvcLoading",cvcOptions:"cvcOptions",cvcResults:"cvcResults",cvcShowError:"cvcShowError",cvcDisabled:"cvcDisabled",cvcAllowClear:"cvcAllowClear",cvcBorderless:"cvcBorderless",cvcShowArrow:"cvcShowArrow",cvcAutoClearSearchValue:"cvcAutoClearSearchValue",cvcSuffixIcon:"cvcSuffixIcon",cvcCustomTemplate:"cvcCustomTemplate",cvcParamName:"cvcParamName",cvcAddEntity:"cvcAddEntity",cvcAddEntityModel:"cvcAddEntityModel",cvcMinSearchStrLength:"cvcMinSearchStrLength",cvcAddEntityBehavior:"cvcAddEntityBehavior",cvcSelectOpen:"cvcSelectOpen"},outputs:{cvcOnOpenChange:"cvcOnOpenChange",cvcOnSearch:"cvcOnSearch",cvcOnModelChange:"cvcOnModelChange",cvcSelectComponent:"cvcSelectComponent"},features:[e.TTD],decls:1,vars:1,consts:[[4,"ngrxLet"],["nzShowSearch","","nzServerSearch","","nzAllowClear","",3,"nzDropdownMatchSelectWidth","formControl","formlyAttributes","nzMode","nzPlaceHolder","nzCustomTemplate","nzOptionHeightPx","nzDisabled","nzLoading","nzAllowClear","nzBorderless","nzSuffixIcon","nzShowArrow","nzAutoClearSearchValue","nzOptions","nzDropdownRender","nzNotFoundContent","nzOpen","nzOpenChange","nzOnSearch","ngModelChange"],["searchMessages",""],["addForm",""],["nz-icon","",3,"nzType",4,"ngIf"],["nz-icon","",3,"nzType"],[1,"add-form-container"],[3,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(y,c){1&y&&e.YNc(0,dr,6,21,"ng-container",0),2&y&&e.Q6J("ngrxLet",c.notFoundDisplay$)},dependencies:[M.O5,M.tP,t.JJ,t.oH,I.eJ,v.JD,Re.Ls,We.Vq,on.g],styles:["nz-divider[_ngcontent-%COMP%]{margin:4px 0 0}.add-form-container[_ngcontent-%COMP%]{padding:4px 8px 8px}"],changeDetection:0}),Gi);Oo=(0,te.gn)([(0,ae.c)({arrayName:"stateSubscriptions"})],Oo);var ji,Po=a(3670),Jo=a(2024),Ro=a(7473),Wo=a(855),qo=a(1958),Ti=a(4634);function Hi(u,y){if(1&u&&e._uU(0),2&u){const c=e.oxw();e.Oqu(c.successMessage)}}function ei(u,y){if(1&u&&(e.ynx(0),e._uU(1),e.BQk()),2&u){const c=e.oxw();e.xp6(1),e.hij(' "',c.model.name,'" ')}}const Yn=function(){return[0,0]};let so=((ji=class{set cvcSearchString(y){y&&this.searchString$.next(y)}constructor(y,c){this.query=y,this.errors=c,this.cvcOnCreate=new e.vpe,this.form=new t.nJ({}),this.model={name:""},this.formLayout="horizontal",this.options={formState:{formLayout:this.formLayout}},this.onSubmit$=new st.x,this.searchString$=new Ge.X(void 0),this.addDiseaseMutator=new Jo.U(this.errors),this.fields=[{key:"doid",type:"input",props:{label:"DOID",keydown:(m,G)=>{"Tab"===G.code&&G.stopPropagation()}}},{key:"name",props:{hidden:!0,required:!0}}],this.searchString$.pipe((0,ae.t)(this)).subscribe(m=>{m&&(this.model.name=m)}),this.onSubmit$.pipe((0,ae.t)(this)).subscribe(m=>{console.log("disease-quick-add form model submitted.",m),this.submitDisease(m)})}submitDisease(y){y.name?this.mutationState=this.addDiseaseMutator.mutate(this.query,this.model,{},c=>{console.log("disease-quick-add submit data callback",c),c.addDisease&&(this.successMessage=c.addDisease.new?`New Disease ${c.addDisease.disease.name} added.`:`Existing Disease ${c.addDisease.disease.name} with DOID ${c.addDisease.disease.doid} found. `,setTimeout(()=>{c&&c.addDisease&&this.cvcOnCreate.next(c.addDisease.disease.id)},1e3))}):console.error("disease-quick-add form submitDisease requires model with valid name.")}}).\u0275fac=function(y){return new(y||ji)(e.Y36(An.MPi),e.Y36(Ro.Y))},ji.\u0275cmp=e.Xpm({type:ji,selectors:[["cvc-disease-quick-add-form"]],inputs:{cvcSearchString:"cvcSearchString"},outputs:{cvcOnCreate:"cvcOnCreate"},decls:11,vars:11,consts:[["entityType","Disease",3,"mutationState","successMessage"],["success",""],["nz-form","","nzLayout","horizontal",3,"formGroup","ngSubmit"],[3,"nzGutter"],["nzSpan","24"],[3,"form","fields","model","options","modelChange"],["nz-button","","nzType","primary","nzBlock","",3,"disabled"],[4,"ngIf"]],template:function(y,c){if(1&y&&(e.TgZ(0,"cvc-form-submission-status-display",0),e.YNc(1,Hi,1,1,"ng-template",null,1,e.W1O),e.TgZ(3,"form",2),e.NdJ("ngSubmit",function(){return c.onSubmit$.next(c.model)}),e.TgZ(4,"nz-row",3)(5,"nz-col",4)(6,"formly-form",5),e.NdJ("modelChange",function(G){return c.model=G}),e.qZA()(),e.TgZ(7,"nz-col",4)(8,"button",6),e._uU(9," Add Disease\xa0 "),e.YNc(10,ei,2,1,"ng-container",7),e.qZA()()()()()),2&y){const m=e.MAs(2);e.Q6J("mutationState",c.mutationState)("successMessage",m),e.xp6(3),e.Q6J("formGroup",c.form),e.xp6(1),e.Q6J("nzGutter",e.DdM(10,Yn)),e.xp6(2),e.Q6J("form",c.form)("fields",c.fields)("model",c.model)("options",c.options),e.xp6(2),e.Q6J("disabled",!c.form.valid),e.xp6(2),e.Q6J("ngIf",c.model.name)}},dependencies:[M.O5,t._Y,t.JL,t.sg,v.T7,pn.ix,Wo.w,qo.dQ,k.t3,k.SK,s.Lr,Ti.F],encapsulation:2,changeDetection:0}),ji);so=(0,te.gn)([(0,ae.c)()],so);const Ue=["addDisease"],se=["optionTemplates"];function we(u,y){if(1&u&&(e.ynx(0),e.TgZ(1,"strong"),e._uU(2,"DOID:"),e.qZA(),e._UZ(3,"span",9),e.ALo(4,"highlightTypeahead"),e.BQk()),2&u){const c=e.oxw(2).$implicit,m=e.oxw().ngrxLet;e.xp6(3),e.Q6J("innerHtml",e.xi3(4,1,c.doid,m),e.oJD)}}function Qe(u,y){if(1&u&&(e.ynx(0),e._uU(1," \xa0 "),e.TgZ(2,"strong"),e._uU(3,"Aliases: "),e.qZA(),e.TgZ(4,"em"),e._UZ(5,"span",10),e.ALo(6,"highlightTypeahead"),e.qZA(),e.BQk()),2&u){const c=e.oxw(2).$implicit,m=e.oxw().ngrxLet;e.xp6(5),e.Q6J("nzTooltipTitle",c.diseaseAliases.join(", "))("innerHtml",e.xi3(6,2,c.diseaseAliases.join(", "),m),e.oJD)}}function bt(u,y){if(1&u&&(e._UZ(0,"cvc-entity-tag",6),e.TgZ(1,"span",7),e.YNc(2,we,5,4,"ng-container",8),e.YNc(3,Qe,7,5,"ng-container",8),e._uU(4),e.qZA()),2&u){const c=e.oxw().$implicit,m=e.oxw().ngrxLet;e.Q6J("cvcDisableLink",!0)("cvcCacheId",c.__typename+":"+c.id)("cvcEmphasize",m),e.xp6(2),e.Q6J("ngIf",c.doid),e.xp6(1),e.Q6J("ngIf",c.diseaseAliases.length>0),e.xp6(1),e.hij(" ",m," ")}}function Bt(u,y){1&u&&(e.ynx(0),e.YNc(1,bt,5,6,"ng-template",null,5,e.W1O),e.BQk())}function tn(u,y){if(1&u&&(e.ynx(0),e.YNc(1,Bt,3,0,"ng-container",4),e.ALo(2,"ngrxPush"),e.BQk()),2&u){const c=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,c.result$))}}function fn(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"div",11)(1,"cvc-entity-tag",12),e.NdJ("cvcOnClose",function(){const Fe=e.CHM(c).$implicit,Et=e.oxw();return e.KtG(Et.onTagClose$.next(Fe.nzValue))}),e.qZA()()}if(2&u){const c=y.$implicit,m=e.oxw();e.xp6(1),e.Q6J("cvcCacheId","Disease:"+c.nzValue)("cvcContext",m.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",m.props.isMultiSelect?"default":"closeable")}}function qt(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"cvc-disease-quick-add-form",13),e.NdJ("cvcOnCreate",function(G){e.CHM(c);const Fe=e.oxw();return e.KtG(Fe.onPopulate$.next(G))}),e.qZA()}2&u&&e.Q6J("cvcSearchString",y.$implicit)}const Cn=Vt(yn(),Xo());let Nn=(()=>{class u extends Cn{constructor(c,m,G){super(),this.taq=c,this.tq=m,this.changeDetectorRef=G,this.defaultOptions={props:{entityName:{singular:"Disease",plural:"Diseases"},tooltip:"Cancer or cancer subtype that is a result of the described variant",isMultiSelect:!1,requireType:!0,placeholder:"Search Diseases",requireTypePromptFn:(Fe,Et)=>`Select an ${Fe} Type to select an associated Disease${Et?"(s)":""}`,addFormTitle:"Add a New Disease"}},this.placeholder$=new Ge.X(void 0),this.selectOpen$=new _o.t}ngAfterViewInit(){this.configureBaseField(),this.configureEntitySelectField({typeaheadQuery:this.taq,typeaheadParam$:void 0,tagQuery:this.tq,getTypeaheadVarsFn:this.getTypeaheadVarsFn,getTypeaheadResultsFn:this.getTypeaheadResultsFn,getTagQueryVarsFn:this.getTagQueryVarsFn,getTagQueryResultsFn:this.getTagQueryResultsFn,getSelectedItemOptionFn:this.getSelectedItemOptionFn,getSelectOptionsFn:this.getSelectOptionsFn,changeDetectorRef:this.changeDetectorRef,selectOpen$:this.selectOpen$,selectComponent:this.selectComponent}),this.state&&this.state.formReady$?this.state.formReady$.pipe((0,De.h)(c=>c),(0,zi.q)(1),(0,ae.t)(this)).subscribe(c=>{this.configureField()}):this.configureField(),this.addForm&&(this.field.props.addFormContent=this.addForm)}configureField(){this.placeholder$.next(this.props.placeholder),this.configureStateConnections()}configureStateConnections(){if(this.state){if(this.state.requires.requiresDisease$?this.onRequiresDisease$=this.state.requires.requiresDisease$:console.warn(`${this.field.id} field's form provides a state, but could not find requiresDisease$ subject to attach.`),this.props.requireType){const c=`${this.state.entityName.toLowerCase()}Type$`;this.state.fields[c]?this.onEntityType$=this.state.fields[c]:console.error(`${this.field.id} requireType is true, however form state does not provide Subject ${c}.`)}!this.onRequiresDisease$||!this.onEntityType$||(0,Eo.a)([this.onRequiresDisease$,this.onEntityType$,this.onValueChange$]).pipe((0,ae.t)(this)).subscribe(([c,m,G])=>{this.onStateUpdates(c,m,G)})}}onStateUpdates(c,m,G){!c&&m&&(this.props.required=!1,this.props.disabled=!0,this.props.description=`${(0,xe.E)(m)} ${this.state.entityName} does not include associated diseases`,this.props.extraType="prompt",this.cdr.markForCheck()),this.props.requireType&&!m&&(this.props.required=!1,this.props.disabled=!0,this.props.description=this.props.requireTypePromptFn(this.state.entityName,this.props.isMultiSelect),this.props.extraType="prompt"),c&&(this.props.required=!0,this.props.disabled=!1,this.props.description=void 0,this.props.extraType=void 0),(!c&&void 0!==G||this.props.requireType&&!m&&this.formControl.value)&&this.resetField()}getTypeaheadVarsFn(c){return{name:c}}getTypeaheadResultsFn(c){return c.data.diseaseTypeahead}getTagQueryVarsFn(c){return{id:c}}getTagQueryResultsFn(c){return c.data.disease}getSelectedItemOptionFn(c){return{value:c.id,label:c.name}}getSelectOptionsFn(c,m){return c.map((G,Fe)=>({label:m.get(Fe)||G.name,value:G.id}))}}return u.\u0275fac=function(c){return new(c||u)(e.Y36(An.RYL),e.Y36(An.QVn),e.Y36(e.sBO))},u.\u0275cmp=e.Xpm({type:u,selectors:[["cvc-disease-select"]],viewQuery:function(c,m){if(1&c&&(e.Gf(Ue,7),e.Gf(se,5,e.Rgc)),2&c){let G;e.iGM(G=e.CRH())&&(m.addForm=G.first),e.iGM(G=e.CRH())&&(m.optionTemplates=G)}},features:[e.qOj],decls:12,vars:26,consts:[[3,"cvcAddEntity","cvcSelectMode","cvcCustomTemplate","cvcFormControl","cvcFormlyAttributes","cvcEntityName","cvcPlaceholder","cvcResults","cvcOptions","cvcShowError","cvcDisabled","cvcLoading","cvcSelectOpen","cvcOnSearch","cvcOnOpenChange","cvcSelectComponent","cvcOnModelChange"],[4,"ngrxLet"],["selectedTemplate",""],["addDisease",""],[4,"ngFor","ngForOf"],["optionTemplates",""],[3,"cvcDisableLink","cvcCacheId","cvcEmphasize"],["nz-typography","","nzType","secondary"],[4,"ngIf"],[3,"innerHtml"],["nz-typography","","nzType","secondary","nz-tooltip","",3,"nzTooltipTitle","innerHtml"],[1,"ant-select-selection-item-content"],[3,"cvcCacheId","cvcContext","cvcMode","cvcOnClose"],[3,"cvcSearchString","cvcOnCreate"]],template:function(c,m){if(1&c&&(e.TgZ(0,"cvc-entity-select",0),e.NdJ("cvcOnSearch",function(Fe){return m.onSearch$.next(Fe)})("cvcOnOpenChange",function(Fe){return m.onOpenChange$.next(Fe)})("cvcSelectComponent",function(Fe){return m.selectComponent=Fe})("cvcOnModelChange",function(Fe){return m.props.change&&m.props.change(m.field,Fe)}),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.ALo(3,"ngrxPush"),e.ALo(4,"ngrxPush"),e.ALo(5,"ngrxPush"),e.ALo(6,"ngrxPush"),e.qZA(),e.YNc(7,tn,3,3,"ng-container",1),e.YNc(8,fn,2,3,"ng-template",null,2,e.W1O),e.YNc(10,qt,1,1,"ng-template",null,3,e.W1O)),2&c){const G=e.MAs(9),Fe=e.MAs(11);e.Q6J("cvcAddEntity",Fe)("cvcSelectMode",m.props.isMultiSelect?"multiple":"default")("cvcCustomTemplate",G)("cvcFormControl",m.formControl)("cvcFormlyAttributes",m.field)("cvcEntityName",m.props.entityName)("cvcPlaceholder",e.lcZ(1,14,m.placeholder$))("cvcResults",e.lcZ(2,16,m.result$))("cvcOptions",e.lcZ(3,18,m.selectOption$))("cvcShowError",m.showError)("cvcDisabled",m.onRequiresDisease$&&!e.lcZ(4,20,m.onRequiresDisease$))("cvcLoading",e.lcZ(5,22,m.isLoading$))("cvcSelectOpen",e.lcZ(6,24,m.selectOpen$)),e.xp6(7),e.Q6J("ngrxLet",m.onSearch$)}},dependencies:[M.sg,M.O5,I.eJ,et.SY,ge.ZU,Oo,Po.J,so,I.fM,w.A],changeDetection:0}),u})();const Sn={types:[{name:"disease-select",wrappers:["form-field"],component:Nn,defaultOptions:{props:{label:"Disease"}}},{name:"disease-multi-select",wrappers:["form-field"],component:Nn,defaultOptions:{props:{isMultiSelect:!0,label:"Diseases"}}}]};let dn=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,t.UX,v.X0.forChild(Sn),Mt.L,pn.sL,We.LV,co.$6,qn.Qp,Re.PV,Pe.o7,k.Jb,et.cg,$e.zf,s.U5,B.ic,ge.ZJ,Jt.X,Wn.g,je,Zt,Nt.s,ze.x]}),u})();var xn=a(9154);let Qn=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,ge.ZJ]}),u})();var In=a(2962),Vn=a(2787),Un=a(8373),jn=a(3740),eo=a(6699),Co=a(3620),yo=a(9111),Kn=a(9377),Fo=a(3019),Mo=a(3742);const Lo={isSelectCol:u=>"select"===u.type,isEntityTagCol:u=>"entity-tag"===u.type,isEnumTagCol:u=>"enum-tag"===u.type,isTextTagCol:u=>"text-tag"===u.type},Wi=u=>void 0!==u.sort,ii=u=>void 0!==u.filter,Ai={description:An.Cp0.Description,disease:An.Cp0.DiseaseName,evidenceDirection:An.Cp0.EvidenceDirection,evidenceLevel:An.Cp0.EvidenceLevel,evidenceRating:An.Cp0.EvidenceRating,evidenceType:An.Cp0.EvidenceType,id:An.Cp0.Id,significance:An.Cp0.Significance,status:An.Cp0.Status,therapies:An.Cp0.TherapyName,variantOrigin:An.Cp0.VariantOrigin},Zi={molecularProfile:"molecularProfileName",disease:"diseaseName",therapies:"therapyName",evidenceItem:"id"},hi=["selected","id"];class ke{constructor(){this.sortStreams=[],this.filterStreams=[],this.config=this.configureColumnStreams([{key:"selected",label:"Select",type:"select",width:"25px",align:"center",fixedLeft:!0,checkbox:{th:{showCheckbox:!1},td:{showCheckbox:!0}}},{hidden:!0,key:"id",label:"ID",type:"default",width:"30px"},{hidden:!0,key:"status",label:"Status",type:"default",width:"50px"},{key:"id",label:"Evidence",type:"entity-tag",width:"95px",context:"evidenceItem",fixedLeft:!0,showStatus:!0,tag:{fullWidth:!0},sort:{default:"ascend"},filter:{inputType:"default",options:[{key:"EID",value:null}],transform:y=>y?+y.toString().replace(/EID/i,""):null}},{key:"molecularProfile",label:"Molecular Profile",type:"entity-tag",width:"240px",sort:{},tag:{truncateLabel:"200px"},filter:{inputType:"default",typename:"MolecularProfile",options:[{key:"Filter Therapy Names",value:null}]}},{key:"disease",type:"entity-tag",label:"Disease",width:"240px",sort:{},tag:{truncateLabel:"200px"},filter:{inputType:"default",typename:"Disease",options:[{key:"Filter Disease Names",value:null}]}},{key:"therapies",label:"Therapies",type:"entity-tag",width:"275px",sort:{},tag:{maxTags:2,truncateLabel:"150px"},filter:{inputType:"default",typename:"Therapy",options:[{key:"Filter Therapy Names",value:null}]}},{key:"therapyInteractionType",label:"INT",tooltip:"Therapy Interaction Type",type:"enum-tag",width:"40px",align:"center",emptyValueCategory:"not-applicable",sort:{},filter:{options:this.getAttributeFilters((0,Mo.o6)(An.wkr))}},{key:"description",label:"DSC",tooltip:"Evidence Description",type:"text-tag",width:"40px",align:"center",fixedRight:!0,emptyValueCategory:"unspecified",sort:{},filter:{inputType:"default",options:[{key:"Search Descriptions",value:null}]}},{key:"evidenceType",label:"ET",tooltip:"Evidence Type",type:"enum-tag",width:"40px",align:"center",fixedRight:!0,sort:{},filter:{options:this.getAttributeFilters((0,Mo.o6)(An.kqt))}},{key:"evidenceLevel",label:"EL",tooltip:"Evidence Level",type:"enum-tag",width:"40px",align:"center",fixedRight:!0,sort:{},filter:{options:this.getAttributeFilters((0,Mo.o6)(An.Sx0))}},{key:"evidenceDirection",label:"ED",tooltip:"Evidence Direction",type:"enum-tag",width:"40px",align:"center",fixedRight:!0,sort:{},filter:{options:this.getAttributeFilters((0,Mo.o6)(An.tI1))}},{key:"significance",label:"SI",tooltip:"Significance",type:"enum-tag",align:"center",width:"40px",fixedRight:!0,sort:{},filter:{options:this.getAttributeFilters((0,Mo.o6)(An.y1h))}},{key:"evidenceRating",label:"ER",tooltip:"Evidence Rating",type:"enum-tag",width:"45px",align:"center",fixedRight:!0,tag:{showLabel:"short-string"},sort:{},filter:{options:[1,2,3,4,5].map(y=>({value:y,text:`${y} stars`}))}}])}get(){return this.config}getSortStreams(){return this.sortStreams}getFilterStreams(){return this.filterStreams}getAttributeFilters(y,c){return y.getValues().map(G=>({text:(0,xe.E)(G),value:G,byDefault:c===G}))}configureColumnStreams(y){return y.forEach(c=>{const m=c;if(Wi(m)&&(m.sort.changes=new Ge.X({key:m.key,value:m.sort.default??null}),this.sortStreams.push(m.sort.changes)),ii(m)){const G=m.filter.options.find(Fe=>Fe.byDefault)?.value;m.filter.changes=new Ge.X({key:m.key,value:G??null}),this.filterStreams.push(m.filter.changes)}}),y}}var W,Yt=a(7871);function Ve(u,y){1&u&&e.GkF(0)}const Gt=function(u,y,c){return{$implicit:u,config:y,emphasize:c}};function an(u,y){if(1&u&&(e.ynx(0),e.TgZ(1,"span",1),e.YNc(2,Ve,1,0,"ng-container",2),e.qZA(),e.BQk()),2&u){const c=y.$implicit,m=e.oxw();e.xp6(2),e.Q6J("ngTemplateOutlet",m.cvcTagTemplate)("ngTemplateOutletContext",e.kEZ(2,Gt,c,m.config,null==m.config?null:m.config.emphasize))}}let Rn=((W=class{set cvcTagListConfig(y){!y||!y.tagList||!y.tag||(this.config=y,this.setEntities(y.tagList,y.tag))}constructor(){this.entities=[]}setEntities(y,c){this.entities=y&&0!==y.length&&0!==c.maxTags?y:[]}}).\u0275fac=function(y){return new(y||W)},W.\u0275cmp=e.Xpm({type:W,selectors:[["cvc-entity-tag-list"]],inputs:{cvcTagListConfig:"cvcTagListConfig",cvcTagTemplate:"cvcTagTemplate"},decls:1,vars:1,consts:[[4,"ngFor","ngForOf"],[1,"tag-container"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(y,c){1&y&&e.YNc(0,an,3,6,"ng-container",0),2&y&&e.Q6J("ngForOf",c.entities)},dependencies:[M.sg,M.tP],styles:[".typeahead-match[_ngcontent-%COMP%]{font-weight:700}[_nghost-%COMP%]{display:inline-block;margin-bottom:-4px}.tag-container[_ngcontent-%COMP%]{display:inline-block;margin-bottom:4px}"],changeDetection:0}),W);Rn=(0,te.gn)([(0,ae.c)()],Rn);var ho=a(2616),fo=a(1201);function Uo(u,y){if(1&u&&(e._UZ(0,"span",6),e.ALo(1,"typenameToIcon"),e.ALo(2,"entityColor")),2&u){const c=y.$implicit;e.Q6J("nzType",e.lcZ(1,2,c.__typename))("nzTwotoneColor",e.lcZ(2,4,c.__typename))}}function ni(u,y){if(1&u&&(e.ynx(0),e.YNc(1,Uo,3,6,"span",5),e.BQk()),2&u){const c=e.oxw();e.xp6(1),e.Q6J("ngForOf",c.entities)}}function uo(u,y){if(1&u&&(e.TgZ(0,"span",7)(1,"strong"),e._uU(2),e.qZA()(),e._UZ(3,"span",6),e.ALo(4,"typenameToIcon"),e.ALo(5,"entityColor")),2&u){const c=e.oxw();e.xp6(2),e.Oqu(c.entities.length),e.xp6(1),e.Q6J("nzType",e.lcZ(4,3,c.entities[0].__typename))("nzTwotoneColor",e.lcZ(5,5,c.entities[0].__typename))}}const Li=function(u,y,c,m,G){return{tagList:u,tag:y,showPopover:c,status:m,emphasize:G}};function Fi(u,y){if(1&u&&e._UZ(0,"cvc-entity-tag-list",11),2&u){const c=e.oxw(2);e.Q6J("cvcTagTemplate",c.cvcTagTemplate)("cvcTagListConfig",e.qbA(2,Li,c.entities,c.config.tag,c.config.showPopover,c.config.status,c.config.emphasize))}}function _r(u,y){1&u&&e._uU(0," Invalid config specified for entity-tag-list. ")}function ls(u,y){if(1&u&&(e.TgZ(0,"div",8),e.YNc(1,Fi,1,8,"cvc-entity-tag-list",9),e.qZA(),e.YNc(2,_r,1,0,"ng-template",null,10,e.W1O)),2&u){const c=e.MAs(3),m=e.oxw();e.xp6(1),e.Q6J("ngIf",m.config)("ngIfElse",c)}}let Se=(()=>{class u{set cvcCollectionTagConfig(c){!c||!c.tagList||!c.tag||(this.setConfig(c),this.setEntities(c.tagList))}constructor(){this.cvcShowMaxIcons=5,this.cvcShowFullLabels=!0,this.entities=[]}setConfig(c){this.config=this.cvcShowFullLabels?{...c,tag:{...c.tag,truncateLabel:void 0}}:c}setEntities(c){this.entities=c&&0!==c.length?c:[]}}return u.\u0275fac=function(c){return new(c||u)},u.\u0275cmp=e.Xpm({type:u,selectors:[["cvc-entity-collection-tag"]],inputs:{cvcCollectionTagConfig:"cvcCollectionTagConfig",cvcTagTemplate:"cvcTagTemplate",cvcShowMaxIcons:"cvcShowMaxIcons",cvcShowFullLabels:"cvcShowFullLabels"},decls:9,vars:3,consts:[["nz-popover","","nzPopoverPlacement","top","nzPopoverTrigger","hover",3,"nzPopoverContent"],["nz-typography","","nzType","secondary",1,"plus-sign"],[4,"ngIf","ngIfElse"],["showCount",""],["tagListPopover",""],["class","entity-icon","nz-icon","","nzTheme","twotone",3,"nzType","nzTwotoneColor",4,"ngFor","ngForOf"],["nz-icon","","nzTheme","twotone",1,"entity-icon",3,"nzType","nzTwotoneColor"],["nz-typography","","nzType","secondary",1,"entity-count"],[1,"popover-container"],[3,"cvcTagTemplate","cvcTagListConfig",4,"ngIf","ngIfElse"],["noConfig",""],[3,"cvcTagTemplate","cvcTagListConfig"]],template:function(c,m){if(1&c&&(e.TgZ(0,"nz-tag",0)(1,"span",1)(2,"strong"),e._uU(3,"+"),e.qZA()(),e.YNc(4,ni,2,1,"ng-container",2),e.YNc(5,uo,6,7,"ng-template",null,3,e.W1O),e.qZA(),e.YNc(7,ls,4,2,"ng-template",null,4,e.W1O)),2&c){const G=e.MAs(6),Fe=e.MAs(8);e.Q6J("nzPopoverContent",Fe),e.xp6(4),e.Q6J("ngIf",m.entities.length<=m.cvcShowMaxIcons)("ngIfElse",G)}},dependencies:[M.sg,M.O5,Jt.j,ge.ZU,co.lU,Re.Ls,Rn,ho.a,fo.Z],styles:["[_nghost-%COMP%]{display:inline-block}.popover-container[_ngcontent-%COMP%]{max-width:300px}nz-tag[_ngcontent-%COMP%]{margin:0;padding:0;margin-inline-end:4px}nz-tag[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-block}nz-tag[_ngcontent-%COMP%]   .plus-sign[_ngcontent-%COMP%]{padding:3px 3px 3px 4px;margin:-3px 0;line-height:1}nz-tag[_ngcontent-%COMP%]   .entity-icon[_ngcontent-%COMP%]:first-child{padding-left:2px}nz-tag[_ngcontent-%COMP%]   .entity-icon[_ngcontent-%COMP%]{margin:-3px 1px -4px -1px;padding:3px 0;line-height:1}nz-tag[_ngcontent-%COMP%]   .entity-icon[_ngcontent-%COMP%]:last-child{padding-right:3px}nz-tag[_ngcontent-%COMP%]   .entity-count[_ngcontent-%COMP%]{margin-left:-2px;padding-right:4px}"],changeDetection:0}),u})();var ye=a(3489);function pe(u,y){if(1&u&&(e.TgZ(0,"span",1),e._uU(1),e.ALo(2,"number"),e.ALo(3,"number"),e.qZA()),2&u){const c=y.ngIf;e.xp6(1),e.AsE(" ",e.lcZ(2,2,c.edgeCount)," of ",e.lcZ(3,4,c.filteredCount)," displayed\n")}}let ct=(()=>{class u{ngOnInit(){this.tableCountsInfo$=this.cvcTableCountsConnection.pipe((0,De.h)(c=>null!=c.totalCount||null!=c.filteredCount),(0,Ct.U)(c=>{const m=c.filteredCount,G=c.totalCount,Fe=c.edges;return null==m&&null==G&&console.log("Need to provide either filtered count or total count in the table counts component"),{edgeCount:Fe.length,filteredCount:m??G}}))}}return u.\u0275fac=function(c){return new(c||u)},u.\u0275cmp=e.Xpm({type:u,selectors:[["cvc-table-counts2"]],inputs:{cvcTableCountsConnection:"cvcTableCountsConnection"},decls:2,vars:3,consts:[["class","table-counts","nz-typography","","nzType","secondary",4,"ngIf"],["nz-typography","","nzType","secondary",1,"table-counts"]],template:function(c,m){1&c&&(e.YNc(0,pe,4,6,"span",0),e.ALo(1,"ngrxPush")),2&c&&e.Q6J("ngIf",e.lcZ(1,1,m.tableCountsInfo$))},dependencies:[M.O5,ge.ZU,M.JJ,I.fM],styles:[":[_nghost-%COMP%]{border:1px solid red}.table-counts[_ngcontent-%COMP%]{display:inline-block}"],changeDetection:0}),u})();var fi,zn=a(1374),Gn=a(9384);let si=((fi=class{set cvcTableScrollerToIndex(y){void 0!==y&&this.scrollToIndex(y)}set cvcTableScrollerToOffset(y){void 0!==y&&this.scrollToIndex(y)}constructor(y){this.host=y,this.cvcTableScrollerOnScroll=new e.vpe,this.cvcTableScrollerOnFetch=new e.vpe,this.cvcTableScrollerTargetHeight=140,this.cvcTableScrollerFetchCount=50,this.onLoadThrottleTime=500,this.onScrollThrottleTime=250,this.onScrollDebounceTime=300}ngAfterViewInit(){if(!this.host||!this.host.cdkVirtualScrollViewport)throw new Error("cvcTableScroller directive could not obtain reference to host cdkVirtualScrollViewport.");this.viewport=this.host.cdkVirtualScrollViewport,this.scrolled$=this.viewport.elementScrolled(),this.rendered$=this.viewport.renderedRangeStream,this.rendered$.pipe((0,zn.P)()).subscribe(()=>this.viewport.checkViewportSize()),this.scrolled$.pipe((0,bi.p)(this.onScrollThrottleTime,Si.z,{leading:!0,trailing:!0}),(0,wo.b)(y=>this.cvcTableScrollerOnScroll.next("scroll")),(0,Co.b)(this.onScrollDebounceTime),(0,ae.t)(this)).subscribe(y=>{this.cvcTableScrollerOnScroll.next("stop")}),this.scrolled$.pipe((0,Ct.U)(y=>this.viewport.measureScrollOffset("bottom")),(0,Gn.G)(),(0,De.h)(([y,c])=>c<y&&c<this.cvcTableScrollerTargetHeight),(0,bi.p)(this.onLoadThrottleTime),(0,ae.t)(this)).subscribe(y=>{this.cvcTableScrollerOnScroll.next("bottom");try{this.loadMore(this.cvcTableScrollerPageInfo)}catch(c){console.error(c)}})}loadMore(y){const c=this.cvcTableScrollerQueryRef;if(!y&&c)throw new Error("table-scroll directive requires PageInfo to use provided QueryRef.");if(y&&!c)throw new Error("table-scroll directive requires valid QueryRef when PageInfo provided.");if(y&&c){const[m,G,Fe]=[this.cvcTableScrollerFetchCount,y.hasNextPage,y.endCursor];if(!m||!Fe)throw new Error("table-scroll PageInfo invalid.");if(!G)return;this.cvcTableScrollerOnFetch.next({first:m,after:Fe})}}scrollToIndex(y){const[c,m]=[this.host,this.host.cdkVirtualScrollViewport];if(!c||!m)throw new Error("table-scroll scrollToIndex() cannot find host viewport.");m.scrollToIndex(y)}scrollToOffset(y){const[c,m]=[this.host,this.host.cdkVirtualScrollViewport];if(!c||!m)throw new Error("table-scroll scrollToOffset() cannot find host viewport.");m.scrollToOffset(y)}}).\u0275fac=function(y){return new(y||fi)(e.Y36(jn.N8))},fi.\u0275dir=e.lG2({type:fi,selectors:[["","cvcTableScroller",""]],inputs:{cvcTableScrollerTargetHeight:"cvcTableScrollerTargetHeight",cvcTableScrollerQueryRef:"cvcTableScrollerQueryRef",cvcTableScrollerPageInfo:"cvcTableScrollerPageInfo",cvcTableScrollerFetchCount:"cvcTableScrollerFetchCount",cvcTableScrollerToIndex:"cvcTableScrollerToIndex",cvcTableScrollerToOffset:"cvcTableScrollerToOffset"},outputs:{cvcTableScrollerOnScroll:"cvcTableScrollerOnScroll",cvcTableScrollerOnFetch:"cvcTableScrollerOnFetch"}}),fi);function wr(u,y){1&u&&e._UZ(0,"span",8)}function Ds(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"span",9),e.NdJ("click",function(){e.CHM(c),e.oxw(2);const G=e.MAs(3),Fe=e.oxw();return G.value="",e.KtG(Fe.cvcModelChange.next(null))}),e.qZA()}}function Sa(u,y){if(1&u&&(e.YNc(0,wr,1,0,"span",6),e.YNc(1,Ds,1,0,"span",7)),2&u){e.oxw();const c=e.MAs(3);e.Q6J("ngIf",!c.value),e.xp6(1),e.Q6J("ngIf",c.value)}}function Us(u,y){if(1&u){const c=e.EpF();e.ynx(0),e.TgZ(1,"nz-input-group",2)(2,"input",3,4),e.NdJ("ngModelChange",function(G){e.CHM(c);const Fe=e.oxw();return e.KtG(Fe.cvcModelChange.next(G))}),e.qZA()(),e.YNc(4,Sa,2,2,"ng-template",null,5,e.W1O),e.BQk()}if(2&u){const c=e.MAs(5),m=e.oxw();e.xp6(1),e.Q6J("nzSuffix",c),e.xp6(1),e.Q6J("placeholder",m.cvcPlaceholder)("ngModel",m.cvcModel)}}function Gs(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"nz-input-number-group",10)(1,"nz-input-number",11,4),e.NdJ("ngModelChange",function(G){e.CHM(c);const Fe=e.oxw();return e.KtG(Fe.cvcModelChange.next(""===G?null:G))}),e.qZA()()}if(2&u){const c=e.oxw();let m;e.xp6(1),e.Q6J("nzPlaceHolder",null!==(m=c.cvcPlaceholder)&&void 0!==m?m:"")("ngModel",c.cvcModel)("nzMin",1)("nzStep",1)}}si=(0,te.gn)([(0,ae.c)()],si);let us=(()=>{class u{constructor(){this.cvcModel=null,this.cvcModelChange=new e.vpe,this.cvcInputType="default"}}return u.\u0275fac=function(c){return new(c||u)},u.\u0275cmp=e.Xpm({type:u,selectors:[["cvc-table-filter-input"]],inputs:{cvcModel:"cvcModel",cvcInputType:"cvcInputType",cvcPlaceholder:"cvcPlaceholder"},outputs:{cvcModelChange:"cvcModelChange"},decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["numericInput",""],["nzSize","small",3,"nzSuffix"],["nz-input","",3,"placeholder","ngModel","ngModelChange"],["filterInput",""],["suffixIcon",""],["nz-icon","","nzType","search","style","color: #ddd",4,"ngIf"],["nz-icon","","class","ant-input-clear-icon","nzTheme","fill","nzType","close-circle",3,"click",4,"ngIf"],["nz-icon","","nzType","search",2,"color","#ddd"],["nz-icon","","nzTheme","fill","nzType","close-circle",1,"ant-input-clear-icon",3,"click"],["nzSize","small"],[2,"width","100%",3,"nzPlaceHolder","ngModel","nzMin","nzStep","ngModelChange"]],template:function(c,m){if(1&c&&(e.YNc(0,Us,6,3,"ng-container",0),e.YNc(1,Gs,3,4,"ng-template",null,1,e.W1O)),2&c){const G=e.MAs(2);e.Q6J("ngIf","default"===m.cvcInputType)("ngIfElse",G)}},dependencies:[M.O5,t.Fj,t.JJ,t.On,Wo.w,Re.Ls,Pe.Zp,Pe.gB,Pe.ke,Un._V,Un.Rb],styles:[".typeahead-match[_ngcontent-%COMP%]{font-weight:700}  nz-input-group{border-color:#d9d9d9!important}"]}),u})();var es=a(3460);function $r(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"li",5),e.NdJ("click",function(){const Fe=e.CHM(c).$implicit,Et=e.oxw();return e.KtG(Et.cvcOptionChange.next({key:Et.cvcColumnKey,value:Fe.value}))}),e._UZ(1,"cvc-attribute-tag",6),e.qZA()}if(2&u){const c=y.$implicit,m=e.oxw();e.Q6J("nzSelected",(null==m.cvcOption?null:m.cvcOption.value)===c.value),e.xp6(1),e.Q6J("cvcFullWidth",!0)("cvcChecked",(null==m.cvcOption?null:m.cvcOption.value)===c.value)("cvcAttrValue",c.value)}}let Yr=(()=>{class u{constructor(){this.cvcOptionChange=new e.vpe}}return u.\u0275fac=function(c){return new(c||u)},u.\u0275cmp=e.Xpm({type:u,selectors:[["cvc-enum-filter-menu"]],inputs:{cvcColumnKey:"cvcColumnKey",cvcFilterOptions:"cvcFilterOptions",cvcOption:"cvcOption"},outputs:{cvcOptionChange:"cvcOptionChange"},decls:6,vars:2,consts:[["nz-menu",""],["nz-menu-item","",3,"nzSelected","click",4,"ngFor","ngForOf"],[2,"padding","3px"],["nz-button","","nzType","default","nzBlock","","nzSize","small",3,"disabled","click"],["nz-icon","","nzType","retweet","nzTheme","outline"],["nz-menu-item","",3,"nzSelected","click"],["cvcContext","menu-item",3,"cvcFullWidth","cvcChecked","cvcAttrValue"]],template:function(c,m){1&c&&(e.TgZ(0,"ul",0),e.YNc(1,$r,2,4,"li",1),e.TgZ(2,"li",2)(3,"button",3),e.NdJ("click",function(){return m.cvcOptionChange.next({key:m.cvcColumnKey,value:null})}),e._UZ(4,"span",4),e._uU(5," Reset "),e.qZA()()()),2&c&&(e.xp6(1),e.Q6J("ngForOf",m.cvcFilterOptions),e.xp6(2),e.Q6J("disabled",null===(null==m.cvcOption?null:m.cvcOption.value)))},dependencies:[M.sg,_e,pn.ix,Wo.w,qo.dQ,es.wO,es.r9,Re.Ls],styles:[".typeahead-match[_ngcontent-%COMP%]{font-weight:700}[_nghost-%COMP%]     ul li:hover{background-color:#e6f7ff}[_nghost-%COMP%]     ul li.ant-dropdown-menu-item-selected{background-color:#1890ff}[_nghost-%COMP%]     ul li.ant-dropdown-menu-item-selected:active{background-color:#096dd9}"],changeDetection:0}),u})(),or=(()=>{class u{transform(c){return null!=c&&Array.isArray(c)}}return u.\u0275fac=function(c){return new(c||u)},u.\u0275pipe=e.Yjl({name:"isArray",type:u,pure:!0}),u})(),Ur=(()=>{class u{transform(c,m){return m(c)?c:void 0}}return u.\u0275fac=function(c){return new(c||u)},u.\u0275pipe=e.Yjl({name:"guardType",type:u,pure:!0}),u})();var ri;function pr(u,y){if(1&u&&e._UZ(0,"th",14),2&u){const c=y.ngIf;let m;e.Q6J("nzShowCheckbox",c.checkbox.th.showCheckbox||!1)("nzWidth",c.width)("nzAlign",null!==(m=c.align)&&void 0!==m?m:"left")("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1)}}function Os(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"th",15),e.NdJ("nzSortOrderChange",function(G){const Et=e.CHM(c).ngIf;return e.KtG(Et.sort.changes.next({key:Et.key,value:G}))}),e.ALo(1,"ngrxPush"),e.TgZ(2,"span",16),e._uU(3),e.qZA()()}if(2&u){const c=y.ngIf;let m,G;e.Q6J("nzColumnKey",c.key)("nzAlign",null!==(m=c.align)&&void 0!==m?m:"left")("nzWidth",c.width)("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1)("nzShowSort",void 0!==c.sort)("nzSortFn",!0)("nzSortOrder",(null==(G=e.lcZ(1,10,c.sort.changes))?null:G.value)||null),e.xp6(2),e.Q6J("nzTooltipTitle",c.tooltip),e.xp6(1),e.hij(" ",c.label," ")}}function Pr(u,y){if(1&u&&(e.TgZ(0,"th",17),e._uU(1),e.qZA()),2&u){const c=y.ngIf;let m;e.Q6J("nzColumnKey",c.key)("nzAlign",null!==(m=c.align)&&void 0!==m?m:"left")("nzWidth",c.width)("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1)("nzTooltipTitle",c.tooltip),e.xp6(1),e.hij(" ",c.label," ")}}function Mr(u,y){if(1&u&&(e.TgZ(0,"th",17),e._uU(1),e.qZA()),2&u){const c=y.ngIf;let m;e.Q6J("nzColumnKey",c.key)("nzAlign",null!==(m=c.align)&&void 0!==m?m:"left")("nzWidth",c.width)("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1)("nzTooltipTitle",c.tooltip),e.xp6(1),e.hij(" ",c.label," ")}}function Gr(u,y){if(1&u&&(e.ynx(0),e.YNc(1,pr,1,5,"th",11),e.ALo(2,"guardType"),e.YNc(3,Os,4,12,"th",12),e.ALo(4,"guardType"),e.YNc(5,Pr,2,7,"th",13),e.ALo(6,"guardType"),e.YNc(7,Mr,2,7,"th",13),e.ALo(8,"guardType"),e.BQk()),2&u){const c=e.oxw().$implicit,m=e.oxw(2);e.xp6(1),e.Q6J("ngIf",e.xi3(2,4,c,m.colGuards.isSelectCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(4,7,c,m.colGuards.isEntityTagCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(6,10,c,m.colGuards.isEnumTagCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(8,13,c,m.colGuards.isTextTagCol))}}function Qs(u,y){if(1&u&&(e.ynx(0),e.YNc(1,Gr,9,16,"ng-container",10),e.BQk()),2&u){const c=y.$implicit;e.xp6(1),e.Q6J("ngIf",!c.hidden)}}function Ir(u,y){if(1&u&&(e.TgZ(0,"th",22),e._uU(1," \xa0 "),e.qZA()),2&u){const c=y.ngIf;let m;e.Q6J("nzColumnKey",c.key)("nzAlign",null!==(m=c.align)&&void 0!==m?m:"left")("nzWidth",c.width)("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1)}}function ds(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"cvc-table-filter-input",25),e.NdJ("cvcModelChange",function(G){const Et=e.CHM(c).ngIf,Mn=e.oxw().ngIf;return e.KtG(Et.changes.next(Et.transform?{key:Mn.key,value:Et.transform(G)}:{key:Mn.key,value:G}))}),e.qZA()}if(2&u){const c=e.oxw().ngIf;e.Q6J("cvcInputType",c.filter.inputType)("cvcPlaceholder",c.filter.options[0].key)("cvcModel",c.filter.options[0].value)}}function hr(u,y){if(1&u&&(e.TgZ(0,"th",23),e.YNc(1,ds,1,3,"cvc-table-filter-input",24),e.qZA()),2&u){const c=y.ngIf;let m;e.Q6J("nzColumnKey",c.key)("nzWidth",c.width)("nzAlign",null!==(m=c.align)&&void 0!==m?m:"left")("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1),e.xp6(1),e.Q6J("ngIf",c.filter)}}function lc(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"th",26,27),e.NdJ("nzSortOrderChange",function(G){const Et=e.CHM(c).ngIf;return e.KtG(Et.sort.changes.next({key:Et.key,value:G}))}),e.ALo(2,"ngrxPush"),e.TgZ(3,"nz-filter-trigger",28,29),e.ALo(5,"ngrxPush"),e._UZ(6,"span",30),e.qZA(),e.TgZ(7,"nz-dropdown-menu",null,31)(9,"cvc-enum-filter-menu",32),e.NdJ("cvcOptionChange",function(G){const Et=e.CHM(c).ngIf,Mn=e.MAs(4);return Et.filter.changes.next(G),e.KtG(Mn.nzVisible=!1)}),e.ALo(10,"ngrxPush"),e.qZA()()()}if(2&u){const c=y.ngIf,m=e.MAs(8);let G,Fe,Et;e.Q6J("nzColumnKey",c.key)("nzWidth",c.width)("nzAlign",null!==(G=c.align)&&void 0!==G?G:"left")("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1)("nzShowSort",!0)("nzSortFn",!0)("nzSortOrder",(null==(Fe=e.lcZ(2,15,c.sort.changes))?null:Fe.value)||null)("nzShowFilter",void 0!==c.filter)("nzFilterFn",!0),e.xp6(3),e.Q6J("nzDropdownMenu",m)("nzActive",null!==(null==(Et=e.lcZ(5,17,c.filter.changes))?null:Et.value)),e.xp6(6),e.Q6J("cvcColumnKey",c.key)("cvcFilterOptions",c.filter.options)("cvcOption",e.lcZ(10,19,c.filter.changes))}}function br(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"th",33,27)(2,"nz-filter-trigger",28),e.ALo(3,"ngrxPush"),e._UZ(4,"span",34),e.qZA(),e.TgZ(5,"nz-dropdown-menu",null,35)(7,"div",36)(8,"div",37)(9,"cvc-table-filter-input",38),e.NdJ("cvcModelChange",function(G){const Et=e.CHM(c).ngIf;return e.KtG(Et.filter.changes.next({key:Et.key,value:G}))}),e.qZA()()()()()}if(2&u){const c=y.ngIf,m=e.MAs(6);let G,Fe;e.Q6J("nzColumnKey",c.key)("nzWidth",c.width)("nzAlign",null!==(G=c.align)&&void 0!==G?G:"left")("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1)("nzFilterFn",!0),e.xp6(2),e.Q6J("nzDropdownMenu",m)("nzActive",null!==(null==(Fe=e.lcZ(3,10,c.filter.changes))?null:Fe.value)),e.xp6(7),e.Q6J("cvcPlaceholder",c.filter.options[0].key)("cvcModel",c.filter.options[0].value)}}function Ea(u,y){if(1&u&&(e.ynx(0),e.YNc(1,Ir,2,5,"th",18),e.ALo(2,"guardType"),e.YNc(3,hr,2,6,"th",19),e.ALo(4,"guardType"),e.YNc(5,lc,11,21,"th",20),e.ALo(6,"guardType"),e.YNc(7,br,10,12,"th",21),e.ALo(8,"guardType"),e.BQk()),2&u){const c=e.oxw().$implicit,m=e.oxw(2);e.xp6(1),e.Q6J("ngIf",e.xi3(2,4,c,m.colGuards.isSelectCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(4,7,c,m.colGuards.isEntityTagCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(6,10,c,m.colGuards.isEnumTagCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(8,13,c,m.colGuards.isTextTagCol))}}function Wc(u,y){if(1&u&&(e.ynx(0),e.YNc(1,Ea,9,16,"ng-container",10),e.BQk()),2&u){const c=y.$implicit;e.xp6(1),e.Q6J("ngIf",!c.hidden)}}function uc(u,y){if(1&u&&(e.TgZ(0,"thead")(1,"tr",7),e.YNc(2,Qs,2,1,"ng-container",8),e.qZA(),e.TgZ(3,"tr",9),e.YNc(4,Wc,2,1,"ng-container",8),e.qZA()()),2&u){const c=y.ngrxLet;e.xp6(2),e.Q6J("ngForOf",c),e.xp6(2),e.Q6J("ngForOf",c)}}function Sr(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"td",43),e.NdJ("nzCheckedChange",function(G){e.CHM(c);const Fe=e.oxw(3).$implicit,Et=e.oxw(2);return e.KtG(Et.onRowSelected$.next({id:Fe.id,selected:G}))}),e.qZA()}if(2&u){const c=y.ngIf,m=e.oxw(3).$implicit;let G;e.Q6J("nzChecked",m.selected)("nzAlign",null!==(G=c.align)&&void 0!==G?G:"left")("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1)}}function ir(u,y){1&u&&e.GkF(0)}const ts=function(u,y,c){return{$implicit:u,config:y,emphasize:c}};function Ar(u,y){if(1&u&&(e.ynx(0),e.YNc(1,ir,1,0,"ng-container",49),e.ALo(2,"isArray"),e.ALo(3,"ngrxPush"),e.BQk()),2&u){const c=e.oxw().ngIf,m=e.oxw().ngIf,G=e.MAs(3),Fe=e.MAs(5),Et=e.oxw(3).$implicit;let Mn;e.xp6(1),e.Q6J("ngTemplateOutlet",e.lcZ(2,2,Et[c])?G:Fe)("ngTemplateOutletContext",e.kEZ(6,ts,Et[c],m,null==(Mn=e.lcZ(3,4,m.filter.changes))?null:Mn.value))}}function ws(u,y){if(1&u&&(e.ynx(0),e.YNc(1,Ar,4,10,"ng-container",48),e.BQk()),2&u){const c=y.ngIf;e.oxw();const m=e.MAs(7),G=e.oxw(3).$implicit;e.xp6(1),e.Q6J("ngIf",G[c])("ngIfElse",m)}}const ns=function(u,y,c,m,G){return{tagList:u,tag:y,showPopover:c,status:m,emphasize:G}};function js(u,y){if(1&u&&(e.ynx(0),e._UZ(1,"cvc-entity-collection-tag",51),e.BQk()),2&u){const c=e.oxw(2),m=c.config,G=c.$implicit,Fe=c.emphasize;e.oxw();const Et=e.MAs(5),Mn=e.oxw(5);e.xp6(1),e.Q6J("cvcCollectionTagConfig",e.qbA(3,ns,G.slice(m.tag.maxTags,G.length),m.tag,!Mn.isScrolling,!0===m.showStatus?G.status:void 0,Fe))("cvcTagTemplate",Et)("cvcShowFullLabels",!0)}}function ps(u,y){if(1&u&&(e.ynx(0),e._UZ(1,"cvc-entity-tag-list",50),e.YNc(2,js,2,9,"ng-container",10),e.BQk()),2&u){const c=e.oxw(),m=c.config,G=c.$implicit,Fe=c.emphasize;e.oxw();const Et=e.MAs(5),Mn=e.oxw(5);e.xp6(1),e.Q6J("cvcTagTemplate",Et)("cvcTagListConfig",e.qbA(3,ns,G.slice(0,m.tag.maxTags),m.tag,!Mn.isScrolling,!0===m.showStatus?G.status:void 0,Fe)),e.xp6(1),e.Q6J("ngIf",G.slice(m.tag.maxTags,G.length).length>0)}}function hs(u,y){if(1&u&&e.YNc(0,ps,3,9,"ng-container",48),2&u){const c=y.$implicit;e.oxw();const m=e.MAs(7);e.Q6J("ngIf",c.length>0)("ngIfElse",m)}}function xa(u,y){if(1&u&&e._UZ(0,"cvc-entity-tag",52),2&u){const c=y.$implicit,m=y.config,G=y.emphasize,Fe=e.oxw(6);let Et;e.Q6J("cvcTruncateLabel",null==m.tag?null:m.tag.truncateLabel)("cvcLinkableEntity",c)("cvcEmphasize",G)("cvcShowPopover",!Fe.isScrolling)("cvcStatus",!0===m.showStatus?c.status:void 0)("cvcFullWidth",null!==(Et=null==m.tag?null:m.tag.fullWidth)&&void 0!==Et&&Et)}}function Ws(u,y){if(1&u&&e._UZ(0,"cvc-empty-value",53),2&u){const c=e.oxw().ngIf;e.Q6J("cvcEmptyCategory",c.emptyValueCategory||"not-applicable")}}function Zs(u,y){if(1&u&&(e.TgZ(0,"td",44),e.YNc(1,ws,2,2,"ng-container",10),e.YNc(2,hs,1,2,"ng-template",null,45,e.W1O),e.YNc(4,xa,1,6,"ng-template",null,46,e.W1O),e.YNc(6,Ws,1,1,"ng-template",null,47,e.W1O),e.qZA()),2&u){const c=y.ngIf;let m;e.Q6J("nzAlign",null!==(m=c.align)&&void 0!==m?m:"left")("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1),e.xp6(1),e.Q6J("ngIf",c.context||c.key)}}function Ks(u,y){if(1&u&&(e._UZ(0,"cvc-attribute-tag",56),e.ALo(1,"evidenceEnumDisplay")),2&u){const c=e.oxw().ngIf,m=e.oxw(3).$implicit,G=e.oxw(2);e.Q6J("cvcFullWidth",!0)("cvcAttrValue",m[c.key])("cvcTooltip",e.lcZ(1,3,!G.isScrolling&&m[c.key]))}}function $i(u,y){if(1&u&&e._UZ(0,"cvc-empty-value",57),2&u){const c=e.oxw().ngIf;e.Q6J("cvcEmptyCategory",c.emptyValueCategory||"unspecified")}}function Ni(u,y){if(1&u&&(e.TgZ(0,"td",44),e.YNc(1,Ks,2,5,"cvc-attribute-tag",54),e.YNc(2,$i,1,1,"ng-template",null,55,e.W1O),e.qZA()),2&u){const c=y.ngIf,m=e.MAs(3),G=e.oxw(3).$implicit;let Fe;e.Q6J("nzAlign",null!==(Fe=c.align)&&void 0!==Fe?Fe:"left")("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1),e.xp6(1),e.Q6J("ngIf",G[c.key])("ngIfElse",m)}}function Js(u,y){if(1&u&&(e.TgZ(0,"nz-tag",60),e._UZ(1,"span",61),e.qZA()),2&u){const c=e.oxw().ngIf,m=e.oxw(3).$implicit;e.Q6J("nzTooltipTitle",m[c.key])}}function ai(u,y){if(1&u&&e._UZ(0,"cvc-empty-value",53),2&u){const c=e.oxw().ngIf;e.Q6J("cvcEmptyCategory",c.emptyValueCategory||"unspecified")}}function Fr(u,y){if(1&u&&(e.TgZ(0,"td",44),e.YNc(1,Js,2,1,"nz-tag",58),e.YNc(2,ai,1,1,"ng-template",null,59,e.W1O),e.qZA()),2&u){const c=y.ngIf,m=e.MAs(3),G=e.oxw(3).$implicit;let Fe;e.Q6J("nzAlign",null!==(Fe=c.align)&&void 0!==Fe?Fe:"left")("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1),e.xp6(1),e.Q6J("ngIf",G[c.key])("ngIfElse",m)}}function ie(u,y){if(1&u&&(e.ynx(0),e.YNc(1,Sr,1,4,"td",41),e.ALo(2,"guardType"),e.YNc(3,Zs,8,4,"td",42),e.ALo(4,"guardType"),e.YNc(5,Ni,4,5,"td",42),e.ALo(6,"guardType"),e.YNc(7,Fr,4,5,"td",42),e.ALo(8,"guardType"),e.BQk()),2&u){const c=e.oxw().$implicit,m=e.oxw(3);e.xp6(1),e.Q6J("ngIf",e.xi3(2,4,c,m.colGuards.isSelectCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(4,7,c,m.colGuards.isEntityTagCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(6,10,c,m.colGuards.isEnumTagCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(8,13,c,m.colGuards.isTextTagCol))}}function Le(u,y){if(1&u&&(e.ynx(0),e.YNc(1,ie,9,16,"ng-container",10),e.BQk()),2&u){const c=y.$implicit;e.xp6(1),e.Q6J("ngIf",!c.hidden)}}function fe(u,y){if(1&u&&(e.TgZ(0,"tr",40),e.YNc(1,Le,2,1,"ng-container",8),e.qZA()),2&u){const c=e.oxw().ngrxLet;e.xp6(1),e.Q6J("ngForOf",c)}}function tt(u,y){1&u&&(e.TgZ(0,"tbody"),e.YNc(1,fe,2,1,"ng-template",39),e.qZA())}function At(u,y){1&u&&e._UZ(0,"span",69)}function hn(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"span",70),e.NdJ("click",function(){e.CHM(c),e.oxw(2);const G=e.MAs(3),Fe=e.oxw().filter;return G.value="",e.KtG(Fe.changes.next({key:Fe.key,value:null}))}),e.qZA()}}function Tn(u,y){if(1&u&&(e.YNc(0,At,1,0,"span",67),e.YNc(1,hn,1,0,"span",68)),2&u){e.oxw();const c=e.MAs(3);e.Q6J("ngIf",!c.value),e.xp6(1),e.Q6J("ngIf",c.value)}}function to(u,y){if(1&u){const c=e.EpF();e.ynx(0),e.TgZ(1,"nz-input-group",63)(2,"input",64,65),e.NdJ("nzFilterChange",function(G){e.CHM(c);const Fe=e.oxw().filter;return e.KtG(Fe.changes.next({key:Fe.key,value:G}))}),e.qZA()(),e.YNc(4,Tn,2,2,"ng-template",null,66,e.W1O),e.BQk()}if(2&u){const c=e.MAs(5),m=e.oxw().filter;e.xp6(1),e.Q6J("nzSuffix",c),e.xp6(1),e.Q6J("placeholder",m.placeholder)("ngModel",m.defaultValue)}}function Qo(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"nz-input-number-group",71)(1,"nz-input-number",72,65),e.NdJ("ngModelChange",function(G){e.CHM(c);const Fe=e.oxw().filter;return e.KtG(Fe.changes.next({key:Fe.key,value:G}))}),e.qZA()()}if(2&u){const c=e.oxw().filter;e.xp6(1),e.Q6J("nzPlaceHolder",c.placeholder)("ngModel",c.defaultValue)("nzMin",1)("nzStep",1)}}function go(u,y){if(1&u&&(e.YNc(0,to,6,3,"ng-container",48),e.YNc(1,Qo,3,4,"ng-template",null,62,e.W1O)),2&u){const c=y.filter,m=e.MAs(2);e.Q6J("ngIf",void 0===c.inputType||"default"===c.inputType)("ngIfElse",m)}}const Vo=function(){return[6,6]};function Io(u,y){1&u&&(e.TgZ(0,"nz-row",73)(1,"nz-col")(2,"span"),e._uU(3,"Use checkboxes to select or deselect EIDs"),e.qZA()()()),2&u&&e.Q6J("nzGutter",e.DdM(1,Vo))}function vi(u,y){1&u&&(e.TgZ(0,"nz-tag",84),e._UZ(1,"i",85),e.TgZ(2,"span"),e._uU(3,"Loading\u2026"),e.qZA()())}const jo=function(u){return{$implicit:u}};function yi(u,y){if(1&u&&(e.TgZ(0,"nz-tag",88),e._UZ(1,"span",89),e.TgZ(2,"span",90),e._uU(3),e.qZA()()),2&u){e.oxw();const c=e.MAs(4),m=e.oxw().ngrxLet;e.xp6(2),e.Q6J("nzTooltipTitle",c)("nzTooltipTitleContext",e.VKq(3,jo,m.query)),e.xp6(1),e.hij(" Query Error",m.query.length>1?"s":""," ")}}function Ci(u,y){if(1&u&&(e.TgZ(0,"nz-tag",88)(1,"span",90)(2,"span",91)(3,"strong"),e._uU(4),e.qZA()()()()),2&u){e.oxw();const c=e.MAs(4),m=e.oxw().ngrxLet;e.xp6(1),e.Q6J("nzTooltipTitle",c)("nzTooltipTitleContext",e.VKq(3,jo,m.network)),e.xp6(3),e.hij(" Network Error",m.query.length>1?"s":""," ")}}function ao(u,y){if(1&u&&(e.TgZ(0,"div"),e._uU(1),e.qZA()),2&u){const c=y.$implicit;e.xp6(1),e.hij(" ",c.message," ")}}function fr(u,y){1&u&&e.YNc(0,ao,2,1,"div",8),2&u&&e.Q6J("ngForOf",y.$implicit)}function rr(u,y){if(1&u&&(e.ynx(0),e.YNc(1,yi,4,5,"nz-tag",86),e.YNc(2,Ci,5,5,"nz-tag",86),e.YNc(3,fr,1,1,"ng-template",null,87,e.W1O),e.BQk()),2&u){const c=e.oxw().ngrxLet;e.xp6(1),e.Q6J("ngIf",c.query),e.xp6(1),e.Q6J("ngIf",c.network)}}function Nr(u,y){if(1&u&&(e.ynx(0),e.YNc(1,rr,5,2,"ng-container",10),e.BQk()),2&u){const c=y.ngrxLet;e.xp6(1),e.Q6J("ngIf",c)}}function Er(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"div",92)(1,"nz-checkbox-group",93),e.NdJ("ngModelChange",function(G){e.CHM(c);const Fe=e.oxw(2);return e.KtG(Fe.onPreferenceChange$.next(G))}),e.ALo(2,"ngrxPush"),e.qZA()()}if(2&u){const c=e.oxw(2);e.xp6(1),e.Q6J("ngModel",e.lcZ(2,1,c.setPreference$))}}function sr(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"nz-row",73)(1,"nz-col",74),e.YNc(2,vi,4,0,"nz-tag",75),e.ALo(3,"ngrxPush"),e.ALo(4,"ngrxPush"),e._UZ(5,"cvc-no-more-rows",76),e.ALo(6,"ngrxPush"),e.qZA(),e.TgZ(7,"nz-col",74),e.YNc(8,Nr,2,1,"ng-container",3),e.qZA(),e.TgZ(9,"nz-col",74),e._UZ(10,"cvc-table-counts2",77),e.qZA(),e.TgZ(11,"nz-col",78)(12,"nz-button-group")(13,"button",79),e.NdJ("click",function(){e.CHM(c);const G=e.oxw();return e.KtG(G.onResetFilter$.next())}),e._UZ(14,"span",80),e.qZA(),e.TgZ(15,"button",81),e._UZ(16,"span",82),e.qZA()(),e.YNc(17,Er,3,3,"ng-template",null,83,e.W1O),e.qZA()()}if(2&u){const c=e.MAs(18),m=e.oxw();e.Q6J("nzGutter",8),e.xp6(2),e.Q6J("ngIf",e.lcZ(3,7,m.loading$)&&e.lcZ(4,9,m.isFetchMore$)),e.xp6(3),e.Q6J("cvcShowTag",e.lcZ(6,11,m.noMoreRows$)),e.xp6(3),e.Q6J("ngrxLet",m.queryError$),e.xp6(2),e.Q6J("cvcTableCountsConnection",m.connection$),e.xp6(5),e.Q6J("nzPopoverContent",c)("nzPopoverTrigger","click")}}const Da=function(){return[]},Qr=function(){return{x:"800px",y:"200px"}};let jr=((ri=class{constructor(y,c,m){this.queryGQL=y,this.apollo=c,this.cdr=m,this.cvcSelectedIdsChange=new e.vpe,this.isScrolling=!1,this.colGuards=Lo,this.onFetchMore$=new st.x,this.onPreferenceChange$=new Ge.X([]),this.onResetFilter$=new st.x,this.onRowSelected$=new st.x,this.onScroll$=new Ge.X("stop"),this.onSetSelectedRow$=new Ge.X(new Set),this.queryError$=new st.x,this.queryRequest$=new st.x,this.queryResult$=new _o.t(1),this.isFetchMore$=new Ge.X(!1),this.noMoreRows$=new Ge.X(!1),this.scrollToIndex$=new st.x,this.tableConfig=new ke;const G=(0,Eo.a)(this.tableConfig.getFilterStreams()),Fe=(0,Eo.a)(this.tableConfig.getSortStreams()).pipe((0,De.h)(Et=>Et.filter(Mn=>null!==Mn.value).length<=1));this.refetch$=(0,Eo.a)([Fe,G]).pipe((0,Ct.U)(([Et,Mn])=>({query:"refetch",sort:Et,filter:Mn}))),this.fetchMore$=this.onFetchMore$.pipe((0,Ct.U)(Et=>({query:"fetchMore",fetchMore:{...Et}}))),(0,Fo.T)(this.refetch$,this.fetchMore$).pipe((0,Co.b)(50),(0,ae.t)(this)).subscribe(Et=>{const Mn=this.getQueryVars(Et);this.queryRef?(this.queryError$.next({}),"refetch"===Et.query?(this.isFetchMore$.next(!1),this.queryRef.refetch(Mn).then(kn=>{(kn.error||kn.errors)&&this.queryError$.next(this.getRequestErrors(kn))}).then(()=>{this.scrollToIndex$.next(0)})):(this.isFetchMore$.next(!0),this.queryRef.fetchMore({variables:Mn}).then(kn=>{(kn.error||kn.errors)&&this.queryError$.next(this.getRequestErrors(kn))}))):(this.isFetchMore$.next(!1),this.queryError$.next({}),this.queryRef=this.queryGQL.watch(Mn),this.queryRef.valueChanges.pipe((0,ae.t)(this)).subscribe(kn=>{this.queryResult$.next(kn),(kn.error||kn.errors)&&this.queryError$.next(this.getRequestErrors(kn))}))}),this.loading$=this.queryResult$.pipe((0,sn.j)("loading"),(0,mo.x)()),this.connection$=this.queryResult$.pipe((0,sn.j)("data","evidenceItems"),(0,De.h)(So.ep)),this.pageInfo$=this.connection$.pipe((0,sn.j)("pageInfo"),(0,De.h)(So.ep)),this.row$=(0,Eo.a)([this.connection$.pipe((0,sn.j)("edges"),(0,De.h)(So.ep),(0,Ct.U)(Et=>Et.map(Mn=>Mn.node))),this.onSetSelectedRow$]).pipe((0,Ct.U)(([Et,Mn])=>Et.map(kn=>{if(kn)return{...kn,evidenceItem:{__typename:"EvidenceItem",id:kn.id,name:kn.name,link:kn.link,status:kn.status},selected:Mn.has(kn.id)}}))),this.col$=new Ge.X(this.tableConfig.get()),this.setPreference$=this.col$.pipe((0,Ct.U)(Et=>this.getColPrefsFromTableConfig(Et))),this.onPreferenceChange$.pipe((0,it.M)(this.col$),(0,Ct.U)(([Et,Mn])=>this.getTableConfigFromColPrefs(Et,Mn)),(0,ae.t)(this)).subscribe(Et=>{this.col$.next(Et)}),this.onSetTableFilter$=new Ge.X([]),this.onSetTableFilter$.pipe((0,ae.t)(this)).subscribe(Et=>{const Mn=this.col$.getValue();Et.forEach(kn=>{const $o=Mn.find(Bi=>Bi.key===kn.key);if(void 0!==$o.filter.inputType){const Bi=$o.filter.options[0];if(null===kn.value)return $o.filter.options=[{...Bi,value:null}],void $o.filter.changes.next(kn);if(Array.isArray(kn.value)&&0===kn.value.length)return $o.filter.options=[{...Bi,value:null}],void $o.filter.changes.next({...kn,value:null});let er;Array.isArray(kn.value)?kn.value.length>0&&(er=kn.value[0]):er=kn.value;const Kl=$o.filter.typename;if(!Kl||!er)return void console.error(`evidence-manager requires column config '${$o.key}' provide a typename for cvcTablePrefs Input to set its filter`);const ac=this.getEntityName(Kl,er);if(!ac)return;$o.filter.options=[{...Bi,value:ac}],$o.filter.changes.next({...kn,value:ac})}else ii($o)&&$o.filter.changes.next(kn)})}),this.onSetTablePref$=new Ge.X([]),this.onSetTablePref$.pipe((0,it.M)(this.setPreference$),(0,Ct.U)(([Et,Mn])=>{const kn=[];return Et.forEach($o=>{let Bi=Mn.find(er=>er.value===$o.value);Bi?kn.push({...Bi,...$o}):console.warn(`evidence-manager onSetTablePref$ received updated preferences for column '${$o.value}', but a column with that key could not be found.`)}),kn}),(0,ae.t)(this)).subscribe(Et=>{this.onPreferenceChange$.next(Et)}),this.onRowSelected$.pipe((0,it.M)(this.onSetSelectedRow$),(0,ae.t)(this)).subscribe(([Et,Mn])=>{Et.selected?Mn.add(Et.id):Mn.delete(Et.id),this.onSetSelectedRow$.next(Mn),this.cvcSelectedIdsChange.next(Array.from(Mn))}),this.onScroll$.pipe((0,Ct.U)(Et=>"stop"!==Et),(0,mo.x)(),(0,ae.t)(this)).subscribe(Et=>{this.isScrolling=Et,this.cdr.detectChanges()}),this.onScroll$.pipe((0,De.h)(Et=>"bottom"===Et),(0,it.M)(this.pageInfo$),(0,Ct.U)(([Et,Mn])=>Mn),(0,ae.t)(this)).subscribe(Et=>{Et.hasNextPage||(this.noMoreRows$.next(!0),this.cdr.detectChanges(),setInterval(()=>this.noMoreRows$.next(!1)))})}ngAfterViewInit(){this.onResetFilter$.pipe((0,it.M)((0,Ko.of)(this.tableConfig.get())),(0,ae.t)(this)).subscribe(([y,c])=>{const m=[];c.forEach(G=>{if(Wi(G)&&G.sort.changes&&G.sort.changes.next({key:G.key,value:G.sort.default??null}),ii(G)){const Fe=G.filter.options.find(Et=>1==Et.byDefault)?.value;G.filter.changes&&G.filter.changes.next({key:G.key,value:Fe||null})}m.push(G)}),this.col$.next(m)})}getQueryVars(y){const c=this.getQueryFilterParams(y);return{...this.getQuerySortParams(y),...c,...y.fetchMore}}getQuerySortParams(y){if(!y.sort)return;const m=y.sort.find(Fe=>null!==Fe.value);return m?{sortBy:{column:this.getSortColumnFromColKey(m.key),direction:"ascend"===m.value?An.SrV.Asc:An.SrV.Desc||void 0}}:void 0}getQueryFilterParams(y){let c={};return y.filter&&y.filter.forEach(m=>{c[Zi[m.key]||m.key]=null===m.value||""===m.value?void 0:m.value}),c}getRequestErrors(y){return{query:y.errors,network:y.error}}getTableConfigFromColPrefs(y,c){return c.forEach(m=>{if(hi.find(Fe=>Fe===m.key))return;const G=y.find(Fe=>Fe.value===m.key);G&&(m.hidden=!G?.checked)}),[...c]}getColPrefsFromTableConfig(y){let c=[];return y.forEach(m=>{hi.find(G=>G===m.key)||c.push({label:m.tooltip||m.label,value:m.key,checked:!m.hidden})}),c}getSortColumnFromColKey(y){return Ai[y]}getEntityName(y,c){const m={id:`${y}:${c}`,fragment:Kn.Ps`
                fragment Linkable${y}Entity on ${y} {
                  id
                  name
                  link
                }`},G=this.apollo.client.readFragment(m);if(G)return G.name;console.error(`evidence-manager onSetTableFilter$ could not find cached entity ${y}:${c} to populate input filter`)}trackByIndex(y,c){return c?.id}ngOnChanges(y){if(y.cvcTableSettings){const c=y.cvcTableSettings.currentValue;void 0!==c&&this.onSetTableFilter$.next(c.filters)}if(y.cvcSelectedIds){const c=y.cvcSelectedIds.currentValue,m=new Set;void 0!==c&&c.forEach(G=>m.add(G)),this.onSetSelectedRow$.next(m)}}}).\u0275fac=function(y){return new(y||ri)(e.Y36(An.EH_),e.Y36(yo._M),e.Y36(e.sBO))},ri.\u0275cmp=e.Xpm({type:ri,selectors:[["cvc-evidence-manager"]],inputs:{cvcTableSettings:"cvcTableSettings",cvcSelectedIds:"cvcSelectedIds"},outputs:{cvcSelectedIdsChange:"cvcSelectedIdsChange"},features:[e.TTD],decls:16,vars:27,consts:[["nzSize","small",3,"nzTitle","nzExtra"],["cvcTableScroller","",3,"nzData","cvcTableScrollerQueryRef","cvcTableScrollerPageInfo","cvcTableScrollerToIndex","nzScroll","nzVirtualForTrackBy","nzVirtualItemSize","nzSize","nzFrontPagination","nzShowPagination","nzLoading","cvcTableScrollerOnScroll","cvcTableScrollerOnFetch"],["virtualTable",""],[4,"ngrxLet"],["columnFilterInput",""],["cardTitle",""],["extraTemplate",""],[1,"col-header-row"],[4,"ngFor","ngForOf"],[1,"filter-row"],[4,"ngIf"],[3,"nzShowCheckbox","nzWidth","nzAlign","nzLeft","nzRight",4,"ngIf"],[3,"nzColumnKey","nzAlign","nzWidth","nzLeft","nzRight","nzShowSort","nzSortFn","nzSortOrder","nzSortOrderChange",4,"ngIf"],["nz-tooltip","",3,"nzColumnKey","nzAlign","nzWidth","nzLeft","nzRight","nzTooltipTitle",4,"ngIf"],[3,"nzShowCheckbox","nzWidth","nzAlign","nzLeft","nzRight"],[3,"nzColumnKey","nzAlign","nzWidth","nzLeft","nzRight","nzShowSort","nzSortFn","nzSortOrder","nzSortOrderChange"],["nz-tooltip","",1,"col-header-label",3,"nzTooltipTitle"],["nz-tooltip","",3,"nzColumnKey","nzAlign","nzWidth","nzLeft","nzRight","nzTooltipTitle"],[3,"nzColumnKey","nzAlign","nzWidth","nzLeft","nzRight",4,"ngIf"],[3,"nzColumnKey","nzWidth","nzAlign","nzLeft","nzRight",4,"ngIf"],["class","attribute-filter","nzCustomFilter","",3,"nzColumnKey","nzWidth","nzAlign","nzLeft","nzRight","nzShowSort","nzSortFn","nzSortOrder","nzShowFilter","nzFilterFn","nzSortOrderChange",4,"ngIf"],["class","attribute-filter","nzCustomFilter","",3,"nzColumnKey","nzWidth","nzAlign","nzLeft","nzRight","nzFilterFn",4,"ngIf"],[3,"nzColumnKey","nzAlign","nzWidth","nzLeft","nzRight"],[3,"nzColumnKey","nzWidth","nzAlign","nzLeft","nzRight"],[3,"cvcInputType","cvcPlaceholder","cvcModel","cvcModelChange",4,"ngIf"],[3,"cvcInputType","cvcPlaceholder","cvcModel","cvcModelChange"],["nzCustomFilter","",1,"attribute-filter",3,"nzColumnKey","nzWidth","nzAlign","nzLeft","nzRight","nzShowSort","nzSortFn","nzSortOrder","nzShowFilter","nzFilterFn","nzSortOrderChange"],["enumTableFilter",""],[3,"nzDropdownMenu","nzActive"],["enumTagFilterTrigger",""],["nz-icon","","nzType","filter","nzTheme","fill"],["enumFilterMenu","nzDropdownMenu"],[3,"cvcColumnKey","cvcFilterOptions","cvcOption","cvcOptionChange"],["nzCustomFilter","",1,"attribute-filter",3,"nzColumnKey","nzWidth","nzAlign","nzLeft","nzRight","nzFilterFn"],["nz-icon","","nzType","search"],["textTagFilterMenu","nzDropdownMenu"],[1,"ant-table-filter-dropdown"],[1,"custom-input-dropdown"],[3,"cvcPlaceholder","cvcModel","cvcModelChange"],["nz-virtual-scroll",""],[1,"data-row"],[3,"nzChecked","nzAlign","nzLeft","nzRight","nzCheckedChange",4,"ngIf"],[3,"nzAlign","nzLeft","nzRight",4,"ngIf"],[3,"nzChecked","nzAlign","nzLeft","nzRight","nzCheckedChange"],[3,"nzAlign","nzLeft","nzRight"],["entityTagList",""],["entityTag",""],["emptyEntityTagCell",""],[4,"ngIf","ngIfElse"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"cvcTagTemplate","cvcTagListConfig"],[3,"cvcCollectionTagConfig","cvcTagTemplate","cvcShowFullLabels"],[3,"cvcTruncateLabel","cvcLinkableEntity","cvcEmphasize","cvcShowPopover","cvcStatus","cvcFullWidth"],[3,"cvcEmptyCategory"],["cvcContext","compact",3,"cvcFullWidth","cvcAttrValue","cvcTooltip",4,"ngIf","ngIfElse"],["emptyEnumTagCell",""],["cvcContext","compact",3,"cvcFullWidth","cvcAttrValue","cvcTooltip"],["cvcDisplayMode","small",3,"cvcEmptyCategory"],["nz-tooltip","","style","width: 100%; cursor: help; color: #595959",3,"nzTooltipTitle",4,"ngIf","ngIfElse"],["emptyTextTagCell",""],["nz-tooltip","",2,"width","100%","cursor","help","color","#595959",3,"nzTooltipTitle"],["nz-icon","","nzType","align-left","nzTheme","outline"],["numericInput",""],["nzSize","small",3,"nzSuffix"],["nz-input","",3,"placeholder","ngModel","nzFilterChange"],["filterInput",""],["suffixIcon",""],["nz-icon","","nzType","search","style","color: #ddd",4,"ngIf"],["nz-icon","","class","ant-input-clear-icon","nzTheme","fill","nzType","close-circle",3,"click",4,"ngIf"],["nz-icon","","nzType","search",2,"color","#ddd"],["nz-icon","","nzTheme","fill","nzType","close-circle",1,"ant-input-clear-icon",3,"click"],["nzSize","small"],[2,"width","100%",3,"nzPlaceHolder","ngModel","nzMin","nzStep","ngModelChange"],[3,"nzGutter"],["nzFlex","auto"],["nzColor","processing",4,"ngIf"],[3,"cvcShowTag"],[3,"cvcTableCountsConnection"],["nzFlex","35px"],["nz-button","","type","button","nzType","default","nzSize","small",3,"click"],["nz-icon","","nzType","retweet","nzTheme","outline"],["nz-button","","nz-popover","","nzPopoverTitle","Visible Columns","type","button","nzType","default","nzSize","small",3,"nzPopoverContent","nzPopoverTrigger"],["nz-icon","","nzType","setting","nzTheme","outline"],["prefsPopover",""],["nzColor","processing"],["nz-icon","","nzType","sync","nzSpin",""],["nzColor","error","style","margin-left: 12px",4,"ngIf"],["queryError",""],["nzColor","error",2,"margin-left","12px"],["nz-icon","","nzType","question-circle","nzTheme","outline"],["nz-tooltip","",2,"cursor","help",3,"nzTooltipTitle","nzTooltipTitleContext"],["nz-typography",""],[1,"prefs-popover"],[3,"ngModel","ngModelChange"]],template:function(y,c){if(1&y&&(e.TgZ(0,"nz-card",0)(1,"nz-table",1,2),e.NdJ("cvcTableScrollerOnScroll",function(G){return c.onScroll$.next(G)})("cvcTableScrollerOnFetch",function(G){return c.onFetchMore$.next(G)}),e.ALo(3,"ngrxPush"),e.ALo(4,"ngrxPush"),e.ALo(5,"ngrxPush"),e.ALo(6,"ngrxPush"),e.ALo(7,"ngrxPush"),e.YNc(8,uc,5,2,"thead",3),e.YNc(9,tt,2,0,"tbody",3),e.qZA()(),e.YNc(10,go,3,2,"ng-template",null,4,e.W1O),e.YNc(12,Io,4,2,"ng-template",null,5,e.W1O),e.YNc(14,sr,19,13,"ng-template",null,6,e.W1O)),2&y){const m=e.MAs(13),G=e.MAs(15);e.Q6J("nzTitle",m)("nzExtra",G),e.xp6(1),e.Q6J("nzData",e.lcZ(3,15,c.row$)||e.DdM(25,Da))("cvcTableScrollerQueryRef",c.queryRef)("cvcTableScrollerPageInfo",e.lcZ(4,17,c.pageInfo$))("cvcTableScrollerToIndex",e.lcZ(5,19,c.scrollToIndex$))("nzScroll",e.DdM(26,Qr))("nzVirtualForTrackBy",c.trackByIndex)("nzVirtualItemSize",28)("nzSize","small")("nzFrontPagination",!1)("nzShowPagination",!1)("nzLoading",e.lcZ(6,21,c.loading$)&&!e.lcZ(7,23,c.isFetchMore$)),e.xp6(7),e.Q6J("ngrxLet",c.col$),e.xp6(1),e.Q6J("ngrxLet",c.col$)}},dependencies:[M.sg,M.O5,M.tP,_e,Yt.P,Se,Rn,Po.J,ye.H,ct,t.Fj,t.JJ,t.On,I.eJ,pn.ix,pn.fY,Wo.w,qo.dQ,In.bd,Ut.ub,Vn.RR,k.t3,k.SK,Re.Ls,Pe.Zp,Pe.gB,Pe.ke,Un._V,Un.Rb,co.lU,jn.N8,jn.qD,jn.Uo,jn._C,jn.h7,jn.Om,jn.p0,jn.$Z,jn.zu,jn.qn,jn.Ql,jn.UX,jn.g6,Jt.j,et.SY,ge.ZU,si,us,Yr,or,K.Do,Ur,I.fM],styles:["[_nghost-%COMP%]{display:block}nz-card[_ngcontent-%COMP%]:first-of-type     .ant-card-body{padding:0;margin-top:1px}.table-info[_ngcontent-%COMP%]{margin-left:.5rem}tr.col-header-row[_ngcontent-%COMP%]   th.ant-table-cell[_ngcontent-%COMP%]{white-space:nowrap}tr.col-header-row[_ngcontent-%COMP%]   th.ant-table-cell.align-right[_ngcontent-%COMP%]     .ant-table-column-title{text-align:right}tr.filter-row[_ngcontent-%COMP%]   th.ant-table-cell[_ngcontent-%COMP%]{padding:3px 4px}tr.filter-row[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   nz-filter-trigger[_ngcontent-%COMP%]     span.ant-dropdown-trigger{margin-left:0;padding-right:12px}tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell[_ngcontent-%COMP%]{white-space:nowrap}tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell[_ngcontent-%COMP%]   .anticon.attribute-icon[_ngcontent-%COMP%]{color:#595959}tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell.overflow-ellipsis[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis}tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell.button-cell[_ngcontent-%COMP%]{padding:0}tr.data-row[_ngcontent-%COMP%]   td.align-right[_ngcontent-%COMP%], tr.col-header-row[_ngcontent-%COMP%]   th.ant-table-cell[_ngcontent-%COMP%]   .align-right[_ngcontent-%COMP%], tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell[_ngcontent-%COMP%]   .align-right[_ngcontent-%COMP%], tr.filter-row[_ngcontent-%COMP%]   th.ant-table-cell[_ngcontent-%COMP%]   .align-right[_ngcontent-%COMP%]{text-align:right}tr.data-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-of-type{padding-left:6px}tr.data-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-of-type   cvc-entity-tag[_ngcontent-%COMP%]{margin-left:6px}.ant-table-filter-dropdown[_ngcontent-%COMP%]{padding:8px}.prefs-popover[_ngcontent-%COMP%]     nz-checkbox-group:first-of-type label{display:block}.prefs-popover[_ngcontent-%COMP%]     nz-checkbox-group:first-of-type label span{display:inline-block}"],changeDetection:0}),ri);jr=(0,te.gn)([(0,ae.c)()],jr);const dc=["optionTemplates"];function eu(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"nz-col",9)(1,"cvc-evidence-manager",10),e.NdJ("cvcSelectedIdsChange",function(G){e.CHM(c);const Fe=e.oxw();return e.KtG(Fe.onPopulate$.next(G))}),e.ALo(2,"ngrxPush"),e.ALo(3,"ngrxPush"),e.qZA()()}if(2&u){const c=e.oxw();e.xp6(1),e.Q6J("cvcSelectedIds",e.lcZ(2,2,c.onEid$))("cvcTableSettings",e.lcZ(3,4,c.tableSettingsChange$))}}function pc(u,y){if(1&u&&e._UZ(0,"cvc-entity-tag",13),2&u){const c=e.oxw().$implicit,m=e.oxw().ngrxLet;e.Q6J("cvcDisableLink",!0)("cvcCacheId",c.__typename+":"+c.id)("cvcEmphasize",m)}}function Lr(u,y){1&u&&(e.ynx(0),e.YNc(1,pc,1,3,"ng-template",null,12,e.W1O),e.BQk())}function wn(u,y){if(1&u&&(e.ynx(0),e.YNc(1,Lr,3,0,"ng-container",11),e.ALo(2,"ngrxPush"),e.BQk()),2&u){const c=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,c.result$))}}function Bo(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"div",14)(1,"cvc-entity-tag",15),e.NdJ("cvcOnClose",function(){const Fe=e.CHM(c).$implicit,Et=e.oxw();return e.KtG(Et.onTagClose$.next(Fe.nzValue))}),e.qZA()()}if(2&u){const c=y.$implicit,m=e.oxw();e.xp6(1),e.Q6J("cvcCacheId","EvidenceItem:"+c.nzValue)("cvcContext",m.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",m.props.isMultiSelect?"default":"closeable")}}const Zc=function(){return[6,6]},qs=function(u,y){return{show:u,hide:y}},xi=Vt(yn(),Xo());let os=(()=>{class u extends xi{constructor(c,m,G,Fe){super(),this.taq=c,this.tq=m,this.changeDetectorRef=G,this.apollo=Fe,this.synchronizedFields$=[],this.synchronizedRequired$=[],this.defaultOptions={props:{label:"Evidence Items",placeholder:"Select Evidence Items",isMultiSelect:!0,description:"Select Evidence by ID, or use the manager to select with filtering",entityName:{singular:"Evidence Item",plural:"Evidence Items"},minSearchStrLength:1}},this.synchronizedFieldToColMap=new Map([["molecularProfileId","molecularProfile"],["diseaseId","disease"],["therapyIds","therapies"]]),this.requiredFieldToColMap=new Map([["disease","requiresDisease$"],["therapies","requiresTherapy$"]]),this.onEid$=new _o.t,this.onShowMgrClick$=new st.x,this.showMgr$=this.onShowMgrClick$.pipe((0,eo.R)((Et,Mn)=>!Et,!1))}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEntitySelectField({typeaheadQuery:this.taq,tagQuery:this.tq,getTypeaheadVarsFn:this.getTypeaheadVarsFn,getTypeaheadResultsFn:this.getTypeaheadResultsFn,getTagQueryVarsFn:this.getTagQueryVarsFn,getTagQueryResultsFn:this.getTagQueryResultsFn,getSelectedItemOptionFn:this.getSelectedItemOptionFn,getSelectOptionsFn:this.getSelectOptionsFn,changeDetectorRef:this.changeDetectorRef,selectOpen$:this.selectOpen$,selectComponent:this.selectComponent}),this.onEid$.pipe((0,ae.t)(this)).subscribe(),this.onEid$.next(this.formControl.value),this.onValueChange$.pipe((0,it.M)(this.onEid$),(0,ae.t)(this)).subscribe(([c,m])=>{Array.isArray(c)&&this.onEid$.next(c)})}configureStateConnections(){this.state&&(this.synchronizedFieldToColMap.forEach((c,m)=>{const G=this.state.fields[`${m}$`];G&&this.synchronizedFields$.push(G.pipe((0,Ct.U)(Fe=>({key:m,value:Fe??null}))))}),this.requiredFieldToColMap.forEach((c,m)=>{const G=this.state.requires[c];G&&this.synchronizedRequired$.push(G.pipe((0,Ct.U)(Fe=>({key:m,required:Fe}))))}),this.onFieldsChange$=(0,Eo.a)(this.synchronizedFields$).pipe((0,Ct.U)(c=>{const m=[];return c.forEach(G=>{const Fe=this.synchronizedFieldToColMap.get(G.key);Fe&&m.push({key:Fe,value:G.value})}),m})),this.onRequiredChange$=(0,Eo.a)(this.synchronizedRequired$).pipe((0,Ct.U)(c=>{const m=[];return c.forEach(G=>{m.push({value:G.key,checked:G.required})}),m})),this.tableSettingsChange$=(0,Eo.a)([this.onFieldsChange$,this.onRequiredChange$]).pipe((0,Ct.U)(([c,m])=>({filters:c,preferences:m})),(0,Co.b)(100),(0,tr.d)(1)))}getTypeaheadVarsFn(c,m){return{eid:+c.replace(/EID/i,"")}}getTypeaheadResultsFn(c){return c.data.evidenceItems.nodes}getTagQueryVarsFn(c){return{eid:c}}getTagQueryResultsFn(c){return c.data.evidenceItem}getSelectedItemOptionFn(c){return{value:c.id,label:`EID${c.id}`}}getSelectOptionsFn(c,m){return c.map((G,Fe)=>({label:m.get(Fe)||`EID${G.id}`,value:G.id}))}}return u.\u0275fac=function(c){return new(c||u)(e.Y36(An.olA),e.Y36(An.EFm),e.Y36(e.sBO),e.Y36(yo._M))},u.\u0275cmp=e.Xpm({type:u,selectors:[["cvc-evidence-select"]],viewQuery:function(c,m){if(1&c&&e.Gf(dc,5,e.Rgc),2&c){let G;e.iGM(G=e.CRH())&&(m.optionTemplates=G)}},features:[e.qOj],decls:18,vars:36,consts:[[3,"nzGutter"],["nzFlex","auto"],[3,"cvcSelectMode","cvcMinSearchStrLength","cvcCustomTemplate","cvcFormControl","cvcFormlyAttributes","cvcEntityName","cvcPlaceholder","cvcResults","cvcOptions","cvcShowError","cvcDisabled","cvcLoading","cvcSelectOpen","cvcOnSearch","cvcOnOpenChange","cvcSelectComponent","cvcOnModelChange"],["nzFlex","50px"],["type","button","nz-button","","nzBlock","",1,"manager-button",3,"click"],["nz-icon","",3,"ngClass","nzType"],["nzSpan","24","class","manager-drawer",4,"ngIf"],[4,"ngrxLet"],["selectedTemplate",""],["nzSpan","24",1,"manager-drawer"],[3,"cvcSelectedIds","cvcTableSettings","cvcSelectedIdsChange"],[4,"ngFor","ngForOf"],["optionTemplates",""],[3,"cvcDisableLink","cvcCacheId","cvcEmphasize"],[1,"ant-select-selection-item-content"],[3,"cvcCacheId","cvcContext","cvcMode","cvcOnClose"]],template:function(c,m){if(1&c&&(e.TgZ(0,"nz-row",0)(1,"nz-col",1)(2,"cvc-entity-select",2),e.NdJ("cvcOnSearch",function(Fe){return m.onSearch$.next(Fe)})("cvcOnOpenChange",function(Fe){return m.onOpenChange$.next(Fe)})("cvcSelectComponent",function(Fe){return m.selectComponent=Fe})("cvcOnModelChange",function(Fe){return m.props.change&&m.props.change(m.field,Fe)}),e.ALo(3,"ngrxPush"),e.ALo(4,"ngrxPush"),e.ALo(5,"ngrxPush"),e.ALo(6,"ngrxPush"),e.qZA()(),e.TgZ(7,"nz-col",3)(8,"button",4),e.NdJ("click",function(){return m.onShowMgrClick$.next()}),e._UZ(9,"span",5),e.ALo(10,"ngrxPush"),e.ALo(11,"ngrxPush"),e._uU(12," Manager "),e.qZA()(),e.YNc(13,eu,4,6,"nz-col",6),e.ALo(14,"ngrxPush"),e.qZA(),e.YNc(15,wn,3,3,"ng-container",7),e.YNc(16,Bo,2,3,"ng-template",null,8,e.W1O)),2&c){const G=e.MAs(17);e.Q6J("nzGutter",e.DdM(32,Zc)),e.xp6(2),e.Q6J("cvcSelectMode",m.props.isMultiSelect?"multiple":"default")("cvcMinSearchStrLength",m.props.minSearchStrLength)("cvcCustomTemplate",G)("cvcFormControl",m.formControl)("cvcFormlyAttributes",m.field)("cvcEntityName",m.props.entityName)("cvcPlaceholder",m.props.placeholder)("cvcResults",e.lcZ(3,18,m.result$))("cvcOptions",e.lcZ(4,20,m.selectOption$))("cvcShowError",m.showError)("cvcDisabled",m.props.disabled)("cvcLoading",e.lcZ(5,22,m.isLoading$))("cvcSelectOpen",e.lcZ(6,24,m.selectOpen$)),e.xp6(7),e.Q6J("ngClass",e.WLB(33,qs,e.lcZ(10,26,m.showMgr$),!e.lcZ(11,28,m.showMgr$)))("nzType","caret-right"),e.xp6(4),e.Q6J("ngIf",e.lcZ(14,30,m.showMgr$)),e.xp6(2),e.Q6J("ngrxLet",m.onSearch$)}},dependencies:[M.mk,M.sg,M.O5,Oo,Po.J,I.eJ,pn.ix,Wo.w,qo.dQ,k.t3,k.SK,Re.Ls,jr,I.fM],styles:[".manager-button[_ngcontent-%COMP%]   span.hide[_ngcontent-%COMP%]{transform:rotate(0);transition:transform .2s linear}.manager-button[_ngcontent-%COMP%]   span.show[_ngcontent-%COMP%]{transform:rotate(90deg);transition:transform .2s linear}"],changeDetection:0}),u})();var kr=a(3517);let ar=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,Re.PV,Jt.X,et.cg,ge.ZJ,Nt.s,ze.x]}),u})(),Xs=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,Jt.X,ge.ZJ,co.$6,Re.PV,et.cg,Nt.s,ar]}),u})();const Kc={types:[{name:"evidence-select",wrappers:["form-field"],component:os},{name:"evidence-multi-select",wrappers:["form-field"],component:os,defaultOptions:{props:{label:"Evidence Items",isMultiSelect:!0}}}]};let ea=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,Ye,kr.M,Xs,Zt,ar,ze.x,xn.y,Nt.s,Qn,v.X0.forChild(Kc),t.u5,pn.sL,In.vh,Ut.Wr,Vn.b1,s.U5,k.Jb,Re.PV,Pe.o7,Un.Zf,co.$6,jn.HQ,Jt.X,et.cg,ge.ZJ]}),u})();const d1=["optionTemplates"];function Jc(u,y){if(1&u&&(e.ynx(0),e.TgZ(1,"em"),e._UZ(2,"span",9),e.ALo(3,"highlightTypeahead"),e.qZA(),e.BQk()),2&u){const c=e.oxw(2).$implicit,m=e.oxw().ngrxLet;e.xp6(2),e.Q6J("nzTooltipTitle",c.geneAliases.join(", "))("innerHtml",e.xi3(3,2,c.geneAliases.join(", "),m),e.oJD)}}function Ji(u,y){1&u&&e._uU(0,"--")}function Rr(u,y){if(1&u&&(e._UZ(0,"cvc-entity-tag",5),e.TgZ(1,"span",6),e.YNc(2,Jc,4,5,"ng-container",7),e.YNc(3,Ji,1,0,"ng-template",null,8,e.W1O),e.qZA()),2&u){const c=e.MAs(4),m=e.oxw().$implicit,G=e.oxw().ngrxLet;e.Q6J("cvcDisableLink",!0)("cvcCacheId",m.__typename+":"+m.id)("cvcEmphasize",G),e.xp6(2),e.Q6J("ngIf",m.geneAliases.length>0)("ngIfElse",c)}}function Ps(u,y){1&u&&(e.ynx(0),e.YNc(1,Rr,5,5,"ng-template",null,4,e.W1O),e.BQk())}function fs(u,y){if(1&u&&(e.ynx(0),e.YNc(1,Ps,3,0,"ng-container",3),e.ALo(2,"ngrxPush"),e.BQk()),2&u){const c=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,c.result$))}}function Vr(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"div",10)(1,"cvc-entity-tag",11),e.NdJ("cvcOnClose",function(){const Fe=e.CHM(c).$implicit,Et=e.oxw();return e.KtG(Et.onTagClose$.next(Fe.nzValue))}),e.qZA()()}if(2&u){const c=y.$implicit,m=e.oxw();e.xp6(1),e.Q6J("cvcCacheId","Gene:"+c.nzValue)("cvcContext",m.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",m.props.isMultiSelect?"default":"closeable")}}const qc=Vt(yn(),Xo());let Oa=(()=>{class u extends qc{constructor(c,m,G){super(),this.taq=c,this.tq=m,this.changeDetectorRef=G,this.defaultOptions={props:{label:"Gene",placeholder:"Search Genes",isMultiSelect:!1,entityName:{singular:"Gene",plural:"Genes"},description:"Entrez Gene Symbol"}}}ngAfterViewInit(){this.configureBaseField(),this.configureEntitySelectField({typeaheadQuery:this.taq,typeaheadParam$:void 0,tagQuery:this.tq,getTypeaheadVarsFn:this.getTypeaheadVarsFn,getTypeaheadResultsFn:this.getTypeaheadResultsFn,getTagQueryVarsFn:this.getTagQueryVarsFn,getTagQueryResultsFn:this.getTagQueryResultsFn,getSelectedItemOptionFn:this.getSelectedItemOptionFn,getSelectOptionsFn:this.getSelectOptionsFn,changeDetectorRef:this.changeDetectorRef,selectOpen$:this.selectOpen$,selectComponent:this.selectComponent})}getTypeaheadVarsFn(c){return{entrezSymbol:c}}getTypeaheadResultsFn(c){return c.data.geneTypeahead}getTagQueryVarsFn(c){return{geneId:c}}getTagQueryResultsFn(c){return c.data.gene}getSelectedItemOptionFn(c){return{value:c.id,label:c.name}}getSelectOptionsFn(c,m){return c.map((G,Fe)=>({label:m.get(Fe)||G.name,value:G.id}))}}return u.\u0275fac=function(c){return new(c||u)(e.Y36(An.czh),e.Y36(An.HwR),e.Y36(e.sBO))},u.\u0275cmp=e.Xpm({type:u,selectors:[["cvc-gene-select"]],viewQuery:function(c,m){if(1&c&&e.Gf(d1,5,e.Rgc),2&c){let G;e.iGM(G=e.CRH())&&(m.optionTemplates=G)}},features:[e.qOj],decls:7,vars:17,consts:[[3,"cvcSelectMode","cvcCustomTemplate","cvcFormControl","cvcFormlyAttributes","cvcPlaceholder","cvcEntityName","cvcResults","cvcOptions","cvcShowError","cvcLoading","cvcOnSearch","cvcOnOpenChange","cvcSelectComponent","cvcOnModelChange"],[4,"ngrxLet"],["selectedTemplate",""],[4,"ngFor","ngForOf"],["optionTemplates",""],[3,"cvcDisableLink","cvcCacheId","cvcEmphasize"],["nz-typography","","nzType","secondary"],[4,"ngIf","ngIfElse"],["noAliases",""],["nz-typography","","nzType","secondary","nz-tooltip","",3,"nzTooltipTitle","innerHtml"],[1,"ant-select-selection-item-content"],[3,"cvcCacheId","cvcContext","cvcMode","cvcOnClose"]],template:function(c,m){if(1&c&&(e.TgZ(0,"cvc-entity-select",0),e.NdJ("cvcOnSearch",function(Fe){return m.onSearch$.next(Fe)})("cvcOnOpenChange",function(Fe){return m.onOpenChange$.next(Fe)})("cvcSelectComponent",function(Fe){return m.selectComponent=Fe})("cvcOnModelChange",function(Fe){return m.props.change&&m.props.change(m.field,Fe)}),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.ALo(3,"ngrxPush"),e.qZA(),e.YNc(4,fs,3,3,"ng-container",1),e.YNc(5,Vr,2,3,"ng-template",null,2,e.W1O)),2&c){const G=e.MAs(6);e.Q6J("cvcSelectMode",m.props.isMultiSelect?"multiple":"default")("cvcCustomTemplate",G)("cvcFormControl",m.formControl)("cvcFormlyAttributes",m.field)("cvcPlaceholder",m.props.placeholder)("cvcEntityName",m.props.entityName)("cvcResults",e.lcZ(1,11,m.result$))("cvcOptions",e.lcZ(2,13,m.selectOption$))("cvcShowError",m.showError)("cvcLoading",e.lcZ(3,15,m.isLoading$)),e.xp6(4),e.Q6J("ngrxLet",m.onSearch$)}},dependencies:[M.sg,M.O5,I.eJ,et.SY,ge.ZU,Oo,Po.J,I.fM,w.A],changeDetection:0}),u})();const Xc={types:[{name:"gene-select",wrappers:["form-field"],component:Oa},{name:"gene-multi-select",wrappers:["form-field"],component:Oa,defaultOptions:{props:{label:"Genes",isMultiSelect:!0}}}]};let el=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,t.UX,v.X0.forChild(Xc),Mt.L,pn.sL,We.LV,Re.PV,Pe.o7,et.cg,s.U5,B.ic,ge.ZJ,Jt.X,je,Zt,Nt.s,ze.x]}),u})();const wa=["optionTemplates"];function Pa(u,y){if(1&u&&e._UZ(0,"cvc-attribute-tag",4),2&u){const c=e.oxw().$implicit;e.Q6J("cvcAttrValue",c)}}function Ia(u,y){1&u&&(e.ynx(0),e.YNc(1,Pa,1,1,"ng-template",null,3,e.W1O),e.BQk())}function Aa(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"div",5)(1,"cvc-attribute-tag",6),e.NdJ("cvcOnClose",function(G){e.CHM(c);const Fe=e.oxw();return e.KtG(Fe.onTagClose$.next(G))}),e.qZA()()}if(2&u){const c=y.$implicit,m=e.oxw();e.xp6(1),e.Q6J("cvcAttrValue",c.nzValue)("cvcContext",m.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",m.props.isMultiSelect?"default":"closeable")}}const hc={COMBINATION:"Therapies specified were used as part of a combination therapy approach",SEQUENTIAL:"Therapies specified were used at separate timepoints in the same treatment plan",SUBSTITUTES:"Therapies specified are often considered to be of the same family, or behave similarly in a treatment setting"},Fa=Vt(yn(),lt()),fc={types:[{name:"interaction-select",wrappers:["form-field"],component:(()=>{class u extends Fa{constructor(c){super(),this.cdr=c,this.defaultOptions={props:{label:"Therapy Interaction",placeholder:"Select Therapy Interaction",requireMultipleTherapies:!0,requireMultipleTherapiesPromptFn:()=>"A single associated therapy does not have an Interaction type",tooltip:"Characterizes the interaction of a multi-therapy treatment",extraType:"prompt"}},this.interactionEnum$=new Ge.X([]),this.placeholder$=new Ge.X(void 0)}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEnumSelectField({optionEnum$:this.interactionEnum$,optionTemplate$:this.optionTemplate$,changeDetectorRef:this.cdr})}configureStateConnections(){if(!this.state)return console.error(`${this.field.id} requires a form state to populate its options, none was found.`),void this.placeholder$.next("ERROR: Form state not found");this.placeholder$.next(this.props.placeholder),this.state.enums.interaction$?(this.state.enums.interaction$.pipe((0,ae.t)(this)).subscribe(c=>{this.interactionEnum$.next(c)}),this.optionTemplates||console.error(`${this.field.id} could not find its optionTemplates QueryList to populate its select options, so simple text labels will be displayed.`),this.optionTemplate$=this.optionTemplates?.changes.pipe((0,Ct.U)(c=>c.map(m=>m))),this.onTherapies$=this.state.fields.therapyIds$,this.optionTemplates||console.warn(`${this.field.id} could not find state's fields.therapyIds$ to handle its required & disabled states.`),this.onTherapies$.pipe((0,ae.t)(this)).subscribe(c=>{c&&0!=c.length?1==c.length?(this.props.description="A single associated therapy does not have an Interaction type",this.props.disabled=!0,this.props.required=!1,void 0!==this.formControl.value&&this.formControl.setValue(void 0)):(this.props.description="Select an Interaction Type",this.props.disabled=!1,this.props.required=!0):(this.props.disabled=!0,this.props.required=!1,this.props.description="Interaction type is not applicable when no therapies are selected.",void 0!==this.formControl.value&&this.formControl.setValue(void 0)),this.cdr.markForCheck()}),this.onValueChange$.pipe((0,ae.t)(this)).subscribe(c=>{c?(this.props.description=hc[c],this.props.extraType="description"):this.props.extraType="prompt"})):console.error(`${this.field.id} could not find form state's interaction$ to populate select.`)}}return u.\u0275fac=function(c){return new(c||u)(e.Y36(e.sBO))},u.\u0275cmp=e.Xpm({type:u,selectors:[["cvc-interaction-select"]],viewQuery:function(c,m){if(1&c&&e.Gf(wa,5,e.Rgc),2&c){let G;e.iGM(G=e.CRH())&&(m.optionTemplates=G)}},features:[e.qOj],decls:7,vars:15,consts:[[3,"cvcFormControl","cvcFormlyAttributes","cvcSelectMode","cvcPlaceholder","cvcCustomTemplate","cvcOptions","cvcShowError","cvcDisabled"],[4,"ngFor","ngForOf"],["selectedTemplate",""],["optionTemplates",""],[3,"cvcAttrValue"],[1,"ant-select-selection-item-content"],[3,"cvcAttrValue","cvcContext","cvcMode","cvcOnClose"]],template:function(c,m){if(1&c&&(e._UZ(0,"cvc-enum-select",0),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.YNc(3,Ia,3,0,"ng-container",1),e.ALo(4,"ngrxPush"),e.YNc(5,Aa,2,3,"ng-template",null,2,e.W1O)),2&c){const G=e.MAs(6);e.Q6J("cvcFormControl",m.formControl)("cvcFormlyAttributes",m.field)("cvcSelectMode",m.props.isMultiSelect?"multiple":"default")("cvcPlaceholder",e.lcZ(1,9,m.placeholder$))("cvcCustomTemplate",G)("cvcOptions",e.lcZ(2,11,m.selectOption$))("cvcShowError",m.showError)("cvcDisabled",m.props.disabled),e.xp6(3),e.Q6J("ngForOf",e.lcZ(4,13,m.interactionEnum$))}},dependencies:[M.sg,Ke,_e,I.fM]}),u})()}]};let tu=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,t.UX,v.X0.forChild(fc),je,Be,Ye]}),u})();var nu=a(8004);const ou=["optionTemplates"];function nl(u,y){if(1&u&&(e.TgZ(0,"nz-tag")(1,"strong"),e._uU(2),e.qZA(),e._uU(3),e.ALo(4,"enumTooltip"),e.qZA()),2&u){const c=e.oxw().$implicit;e.xp6(2),e.Oqu(c),e.xp6(1),e.hij(" - ",e.xi3(4,2,c,"evidenceLevelBrief")," ")}}function H(u,y){1&u&&(e.ynx(0),e.YNc(1,nl,5,5,"ng-template",null,3,e.W1O),e.BQk())}function X(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"nz-tag",7),e.NdJ("nzOnClose",function(G){e.CHM(c);const Fe=e.oxw(2);return e.KtG(Fe.onTagClose$.next(G))}),e.TgZ(1,"strong"),e._uU(2),e.qZA(),e._uU(3),e.ALo(4,"enumTooltip"),e.qZA()}if(2&u){const c=e.oxw().$implicit;e.xp6(2),e.Oqu(c.nzValue),e.xp6(1),e.hij(" - ",e.xi3(4,2,c.nzValue,"evidenceLevelBrief")," ")}}function D(u,y){if(1&u&&(e.ynx(0),e._uU(1),e.ALo(2,"enumTooltip"),e.BQk()),2&u){const c=e.oxw().$implicit;e.xp6(1),e.hij(" ",e.xi3(2,1,c.nzValue,"evidenceLevelBrief")," ")}}function le(u,y){if(1&u&&(e.TgZ(0,"div",4),e.YNc(1,X,5,5,"nz-tag",5),e.YNc(2,D,3,4,"ng-container",6),e.qZA()),2&u){const c=e.oxw();e.xp6(1),e.Q6J("ngIf",!c.props.isMultiSelect),e.xp6(1),e.Q6J("ngIf",c.props.isMultiSelect)}}const Ne=new Map([[An.Sx0.A,"Evidence shows consensus association in human medicine"],[An.Sx0.B,"Evidence supports association using clinical trial or other primary patient data"],[An.Sx0.C,"Evidence supports association using individual case reports from clinical journals"],[An.Sx0.D,"Evidence supports association using in vivo or in vitro models"],[An.Sx0.E,"Evidential association is inferential or indirect"]]),pt=Vt(yn(),lt());let vt=(()=>{class u extends pt{constructor(c){super(),this.cdr=c,this.defaultOptions={props:{label:"Evidence Level",required:!1,isMultiSelect:!1,placeholder:"Select Evidence Level"}},this.levelEnum$=new Ge.X([])}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEnumSelectField({optionEnum$:this.levelEnum$,optionTemplate$:this.optionTemplate$,changeDetectorRef:this.cdr})}configureStateConnections(){this.props.tooltip="Type of study performed to produce the evidence statement",this.placeholder$=new Ge.X(this.props.placeholder),this.levelEnum$.next((0,Mo.o6)(An.Sx0).map(c=>c)),this.optionTemplates||console.error(`${this.field.id} could not find its optionTemplates QueryList to populate its select options, so simple text labels will be displayed.`),this.optionTemplate$=this.optionTemplates?.changes.pipe((0,Ct.U)(c=>c.map(m=>m))),this.onValueChange$.pipe((0,ae.t)(this)).subscribe(c=>{this.props.description=c?Ne.get(c):void 0})}}return u.\u0275fac=function(c){return new(c||u)(e.Y36(e.sBO))},u.\u0275cmp=e.Xpm({type:u,selectors:[["cvc-level-select"]],viewQuery:function(c,m){if(1&c&&e.Gf(ou,5,e.Rgc),2&c){let G;e.iGM(G=e.CRH())&&(m.optionTemplates=G)}},features:[e.qOj],decls:7,vars:15,consts:[[3,"cvcFormControl","cvcFormlyAttributes","cvcSelectMode","cvcPlaceholder","cvcCustomTemplate","cvcOptions","cvcShowError","cvcDisabled"],[4,"ngFor","ngForOf"],["selectedTemplate",""],["optionTemplates",""],[1,"ant-select-selection-item-content"],["nzMode","closeable",3,"nzOnClose",4,"ngIf"],[4,"ngIf"],["nzMode","closeable",3,"nzOnClose"]],template:function(c,m){if(1&c&&(e._UZ(0,"cvc-enum-select",0),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.YNc(3,H,3,0,"ng-container",1),e.ALo(4,"ngrxPush"),e.YNc(5,le,3,2,"ng-template",null,2,e.W1O)),2&c){const G=e.MAs(6);e.Q6J("cvcFormControl",m.formControl)("cvcFormlyAttributes",m.field)("cvcSelectMode",m.props.isMultiSelect?"multiple":"default")("cvcPlaceholder",e.lcZ(1,9,m.placeholder$))("cvcCustomTemplate",G)("cvcOptions",e.lcZ(2,11,m.selectOption$))("cvcShowError",m.showError)("cvcDisabled",m.props.disabled),e.xp6(3),e.Q6J("ngForOf",e.lcZ(4,13,m.levelEnum$))}},dependencies:[M.sg,M.O5,Jt.j,Ke,I.fM,nu.v]}),u})();const cn={types:[{name:"level-select",wrappers:["form-field"],component:vt},{name:"level-multi-select",wrappers:["form-field"],component:vt,defaultOptions:{props:{label:"Levels",isMultiSelect:!0}}}]};let Fn=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,t.UX,v.X0.forChild(cn),Jt.X,Nt.s,je,Be]}),u})();var ro,io=a(6928);let Ho=((ro=class{constructor(y){this.el=y,this.domChange=new e.vpe,this.changes=new MutationObserver(c=>{(0,Xn.D)(c).pipe((0,Ct.U)(m=>{const G=m.target;return"class"===m.attributeName?{type:"class",change:G.classList.value,key:`${m.attributeName}:${G.classList.value}`}:"disabled"===m.attributeName?{type:"disabled",change:G.disabled,key:`${m.attributeName}:${G.disabled}`}:"hidden"===m.attributeName?{type:"hidden",change:G.hidden,key:`${m.attributeName}:${G.hidden}`}:{type:m.attributeName,change:"unknown change type",key:`${m.attributeName}:unknown-change-type`}}),(0,Q.g)("key"),(0,ae.t)(this)).subscribe(m=>{this.domChange.emit(m)})}),this.changes.observe(this.el.nativeElement,{attributeFilter:["class","disabled","hidden"],attributes:!0,childList:!1,subtree:!1})}ngAfterViewInit(){this.initialClass=this.el.nativeElement.classList.value}ngOnDestroy(){this.changes.disconnect()}}).\u0275fac=function(y){return new(y||ro)(e.Y36(e.SBq))},ro.\u0275dir=e.lG2({type:ro,selectors:[["button","cvcOrgSubmitButton",""]],outputs:{domChange:"domChange"}}),ro);Ho=(0,te.gn)([(0,ae.c)()],Ho);var Wr,Ii=a(951);function Zr(u,y){if(1&u&&(e.TgZ(0,"button",3),e._uU(1),e.qZA()),2&u){const c=e.oxw();e.Q6J("disabled",!c.form.valid),e.xp6(1),e.hij(" ",c.props.submitLabel," ")}}function Kr(u,y){1&u&&e.GkF(0)}function Yi(u,y){if(1&u&&(e.ynx(0),e.YNc(1,Kr,1,0,"ng-container",7),e.BQk()),2&u){e.oxw(2);const c=e.MAs(2);e.xp6(1),e.Q6J("ngTemplateOutlet",c)}}function xr(u,y){1&u&&e.GkF(0)}function p1(u,y){if(1&u&&(e.ynx(0),e._UZ(1,"nz-avatar",11),e.BQk()),2&u){const c=y.ngrxLet,m=e.oxw(2).ngIf;e.xp6(1),e.Q6J("nzSrc",c?c.profileImagePath:m[0].profileImagePath)("nzSize",16)("nzShape","square")}}function h1(u,y){if(1&u&&(e.ynx(0),e.TgZ(1,"nz-button-group"),e.YNc(2,xr,1,0,"ng-container",7),e.TgZ(3,"button",8),e.ALo(4,"ngrxPush"),e.ALo(5,"ngrxPush"),e.ALo(6,"ngrxPush"),e.TgZ(7,"span"),e._uU(8,"for"),e.qZA(),e.YNc(9,p1,2,3,"ng-container",9),e._UZ(10,"i",10),e.qZA()(),e.BQk()),2&u){e.oxw();const c=e.MAs(4),m=e.oxw(),G=e.MAs(2);e.xp6(2),e.Q6J("ngTemplateOutlet",G),e.xp6(1),e.Q6J("ngClass",e.lcZ(4,6,m.buttonClass$))("hidden",e.lcZ(5,8,m.isHidden$))("disabled",e.lcZ(6,10,m.isDisabled$))("nzDropdownMenu",c),e.xp6(6),e.Q6J("ngrxLet",m.mostRecentOrg$)}}function f1(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"li",12),e.NdJ("click",function(){const Fe=e.CHM(c).$implicit,Et=e.oxw(2);return e.KtG(Et.menuSelection$.next(Fe.id))}),e._UZ(1,"nz-avatar",11),e._uU(2),e.qZA()}if(2&u){const c=y.$implicit;e.xp6(1),e.Q6J("nzSrc",null==c?null:c.profileImagePath)("nzSize",10)("nzShape","square"),e.xp6(1),e.hij(" ",c.name," ")}}function Na(u,y){if(1&u&&(e.ynx(0),e.YNc(1,Yi,2,1,"ng-container",2),e.YNc(2,h1,11,12,"ng-container",2),e.TgZ(3,"nz-dropdown-menu",null,4)(5,"ul",5),e.YNc(6,f1,3,4,"li",6),e.qZA()(),e.BQk()),2&u){const c=y.ngIf;e.xp6(1),e.Q6J("ngIf",c.length<=1),e.xp6(1),e.Q6J("ngIf",c.length>1),e.xp6(4),e.Q6J("ngForOf",c)}}let Is=((Wr=class extends v.fS{constructor(y,c,m){super(),this.viewerService=y,this.cdr=c,this.apollo=m,this.menuSelection$=new st.x,this.baseButtonClass="org-dropdown-btn",this.defaultOptions={props:{submitLabel:"Submit"}},this.viewer$=this.viewerService.viewer$,this.organizations$=this.viewer$.pipe((0,sn.j)("organizations")),this.mostRecentOrg$=this.viewer$.pipe((0,sn.j)("mostRecentOrg")),this.isDisabled$=new st.x,this.isHidden$=new st.x,this.buttonClass$=new Ge.X(this.baseButtonClass),this.subscriptions=[]}ngOnInit(){this.menuSelection$.pipe((0,it.M)(this.viewer$)).subscribe(([G,Fe])=>{const Et={id:`User:${Fe.id}`,fragment:yo.Ps`
            fragment UserMostRecentOrgId on User {
              mostRecentOrganizationId
            }
          `,data:{mostRecentOrganizationId:G}};this.apollo.client.writeFragment(Et)}),this.formUpdate$=new Ge.X(this.form.status);const y=this.form.statusChanges.subscribe(G=>this.formUpdate$.next(G)),c=this.formUpdate$.subscribe(G=>this.cdr.detectChanges()),m=this.mostRecentOrg$.pipe((0,sn.j)("id"),(0,De.h)(So.ep)).subscribe(G=>{this.formControl.setValue(G)});this.subscriptions=this.subscriptions.concat([y,c,m])}ngAfterViewInit(){if(this.button&&this.button.domChange){const y=this.button.domChange.subscribe(c=>{"class"===c.type&&"string"==typeof c.change?this.buttonClass$.next(`${this.baseButtonClass} ${c.change}`):"disabled"===c.type&&"boolean"==typeof c.change?this.isDisabled$.next(c.change):"hidden"===c.type&&"boolean"==typeof c.change&&this.isHidden$.next(c.change)});this.subscriptions.push(y)}}}).\u0275fac=function(y){return new(y||Wr)(e.Y36(Ii.a),e.Y36(e.sBO),e.Y36(yo._M))},Wr.\u0275cmp=e.Xpm({type:Wr,selectors:[["cvc-org-submit-button"]],viewQuery:function(y,c){if(1&y&&e.Gf(Ho,5),2&y){let m;e.iGM(m=e.CRH())&&(c.button=m.first)}},features:[e.qOj],decls:5,vars:5,consts:[["type","hidden",3,"formControl","formlyAttributes"],["submitButton",""],[4,"ngIf"],["cvcOrgSubmitButton","","type","submit","nz-button","","nzType","primary",3,"disabled","nzDanger"],["orgMenu","nzDropdownMenu"],["nz-menu",""],["nz-menu-item","",3,"click",4,"ngFor","ngForOf"],[4,"ngTemplateOutlet"],["type","button","nz-button","","nz-dropdown","","nzTrigger","click",3,"ngClass","hidden","disabled","nzDropdownMenu"],[4,"ngrxLet"],["nz-icon","","nzType","down"],[3,"nzSrc","nzSize","nzShape"],["nz-menu-item","",3,"click"]],template:function(y,c){1&y&&(e._UZ(0,"input",0),e.YNc(1,Zr,2,2,"ng-template",null,1,e.W1O),e.YNc(3,Na,7,3,"ng-container",2),e.ALo(4,"ngrxPush")),2&y&&(e.Q6J("formControl",c.formControl)("formlyAttributes",c.field),e.xp6(3),e.Q6J("ngIf",e.lcZ(4,3,c.organizations$)))},dependencies:[M.mk,M.sg,M.O5,M.tP,t.Fj,t.JJ,t.oH,I.eJ,v.JD,Re.Ls,io.Dz,pn.ix,pn.fY,Wo.w,qo.dQ,es.wO,es.r9,Vn.cm,Vn.RR,Vn.wA,Ho,I.fM],styles:["[_nghost-%COMP%]{display:inline-block}[_nghost-%COMP%]     .ant-btn-dangerous.ant-btn-primary:first-child:not(:last-child){border-right-color:#ff4d4f}[_nghost-%COMP%]     .ant-btn-dangerous.ant-btn-primary:hover, [_nghost-%COMP%]     .ant-btn-dangerous.ant-btn-primary:focus{border-right-color:#fd7978}.org-dropdown-btn[_ngcontent-%COMP%]   nz-avatar[_ngcontent-%COMP%]{margin:-2px 6px 0;border:1px solid rgba(255,255,255,.3);background-color:#ffffffe6}.org-dropdown-btn.ant-btn-dangerous[_ngcontent-%COMP%]:last-child:not(:first-child), .org-dropdown-btn[_ngcontent-%COMP%]   .ant-btn-dangerous[_ngcontent-%COMP%] + .ant-btn-dangerous[_ngcontent-%COMP%]{border-left-color:#fd7978}"],changeDetection:0}),Wr);Is=(0,te.gn)([(0,ae.c)({arrayName:"subscriptions"})],Is);const ol={types:[{name:"org-submit-button",component:Is}]};let ip=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,t.UX,v.X0.forChild(ol),Re.PV,io.Rt,pn.sL,Vn.b1]}),u})();const iu=["optionTemplates"];function m1(u,y){if(1&u&&e._UZ(0,"cvc-attribute-tag",4),2&u){const c=e.oxw().$implicit;e.Q6J("cvcAttrValue",c)}}function Td(u,y){1&u&&(e.ynx(0),e.YNc(1,m1,1,1,"ng-template",null,3,e.W1O),e.BQk())}function ru(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"div",5)(1,"cvc-attribute-tag",6),e.NdJ("cvcOnClose",function(G){e.CHM(c);const Fe=e.oxw();return e.KtG(Fe.onTagClose$.next(G))}),e.qZA()()}if(2&u){const c=y.$implicit,m=e.oxw();e.xp6(1),e.Q6J("cvcAttrValue",c.nzValue)("cvcContext",m.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",m.props.isMultiSelect?"default":"closeable")}}const Md=new Map([[An.huM.Somatic,"Variant is a mutation, found only in tumor cells, having arisen in a specific tissue (non-germ cell), and is not expected to be inherited or passed to offspring."],[An.huM.RareGermline,"Variant is found in every cell (not restricted to tumor/diseased cells) and is thought to exist in less than 1% of the population relevant to this evidence item."],[An.huM.CommonGermline,"Variant is found in every cell (not restricted to tumor/diseased cells) and is thought to exist in at least 1% of the population relevant to this evidence item."],[An.huM.Combined," Variants in the corresponding Complex Molecular Profile have heterogeneous origins."],[An.huM.Unknown,"The variant origin is uncertain based on the available evidence."],[An.huM.Na,"The variant type (e.g., expression) is not compatible (or easily classified) with the CIViC concept of variant origin."]]),rp=Vt(yn(),lt());let su=(()=>{class u extends rp{constructor(c){super(),this.cdr=c,this.defaultOptions={props:{label:"Variant Origin",required:!1,isMultiSelect:!1,placeholder:"Select Variant Origin",tooltip:"Identifies whether the variant is inherited (germline mutation) or acquired (somatic mutation) in the context of the study"}},this.originEnum$=new Ge.X([])}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEnumSelectField({optionEnum$:this.originEnum$,optionTemplate$:this.optionTemplate$,changeDetectorRef:this.cdr}),this.originEnum$.next(Array.from(Md.keys()))}configureStateConnections(){this.optionTemplates||console.error(`${this.field.id} could not find its optionTemplates QueryList to populate its select options, so simple text labels will be displayed.`),this.optionTemplate$=this.optionTemplates?.changes.pipe((0,Ct.U)(c=>c.map(m=>m))),this.onValueChange$.pipe((0,ae.t)(this)).subscribe(c=>{this.props.description=c?Md.get(c):void 0})}}return u.\u0275fac=function(c){return new(c||u)(e.Y36(e.sBO))},u.\u0275cmp=e.Xpm({type:u,selectors:[["cvc-origin-select"]],viewQuery:function(c,m){if(1&c&&e.Gf(iu,5,e.Rgc),2&c){let G;e.iGM(G=e.CRH())&&(m.optionTemplates=G)}},features:[e.qOj],decls:6,vars:13,consts:[[3,"cvcFormControl","cvcFormlyAttributes","cvcSelectMode","cvcPlaceholder","cvcCustomTemplate","cvcOptions","cvcShowError","cvcDisabled"],[4,"ngFor","ngForOf"],["selectedTemplate",""],["optionTemplates",""],[3,"cvcAttrValue"],[1,"ant-select-selection-item-content"],[3,"cvcAttrValue","cvcContext","cvcMode","cvcOnClose"]],template:function(c,m){if(1&c&&(e._UZ(0,"cvc-enum-select",0),e.ALo(1,"ngrxPush"),e.YNc(2,Td,3,0,"ng-container",1),e.ALo(3,"ngrxPush"),e.YNc(4,ru,2,3,"ng-template",null,2,e.W1O)),2&c){const G=e.MAs(5);e.Q6J("cvcFormControl",m.formControl)("cvcFormlyAttributes",m.field)("cvcSelectMode",m.props.isMultiSelect?"multiple":"default")("cvcPlaceholder",m.props.placeholder)("cvcCustomTemplate",G)("cvcOptions",e.lcZ(1,9,m.selectOption$))("cvcShowError",m.showError)("cvcDisabled",m.props.disabled),e.xp6(2),e.Q6J("ngForOf",e.lcZ(3,11,m.originEnum$))}},dependencies:[M.sg,Ke,_e,I.fM]}),u})();const il={types:[{name:"origin-select",wrappers:["form-field"],component:su},{name:"origin-multi-select",wrappers:["form-field"],component:su,defaultOptions:{props:{label:"Variant Origins",isMultiSelect:!0}}}]};let g1=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,t.UX,v.X0.forChild(il),je,Be,Ye]}),u})();const ta=["optionTemplates"];function rl(u,y){if(1&u&&(e.ynx(0),e.TgZ(1,"em"),e._UZ(2,"span",8),e.ALo(3,"highlightTypeahead"),e.qZA(),e.BQk()),2&u){const c=e.oxw(2).$implicit,m=e.oxw().ngrxLet;e.xp6(2),e.Q6J("innerHtml",e.xi3(3,1,c.hpoId,m),e.oJD)}}function sl(u,y){if(1&u&&(e._UZ(0,"cvc-entity-tag",5),e.TgZ(1,"span",6),e.YNc(2,rl,4,4,"ng-container",7),e.qZA()),2&u){const c=e.oxw().$implicit,m=e.oxw().ngrxLet;e.Q6J("cvcDisableLink",!0)("cvcCacheId",c.__typename+":"+c.id)("cvcEmphasize",m),e.xp6(2),e.Q6J("ngIf",c.hpoId)}}function bd(u,y){1&u&&(e.ynx(0),e.YNc(1,sl,3,4,"ng-template",null,4,e.W1O),e.BQk())}function v1(u,y){if(1&u&&(e.ynx(0),e.YNc(1,bd,3,0,"ng-container",3),e.ALo(2,"ngrxPush"),e.BQk()),2&u){const c=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,c.result$))}}function _1(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"div",9)(1,"cvc-entity-tag",10),e.NdJ("cvcOnClose",function(){const Fe=e.CHM(c).$implicit,Et=e.oxw();return e.KtG(Et.onTagClose$.next(Fe.nzValue))}),e.qZA()()}if(2&u){const c=y.$implicit,m=e.oxw();e.xp6(1),e.Q6J("cvcCacheId","Phenotype:"+c.nzValue)("cvcContext",m.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",m.props.isMultiSelect?"default":"closeable")}}const Sd=Vt(yn(),Xo());let Jr=(()=>{class u extends Sd{constructor(c,m,G){super(),this.taq=c,this.tq=m,this.changeDetectorRef=G,this.defaultOptions={props:{entityName:{singular:"Phenotype",plural:"Phenotypes"},isMultiSelect:!1,requireType:!0,tooltip:"Phenotype or phenotype combination which interacts with the specified variant",placeholders:{default:"Search Phenotypes",multiDefault:"Select Phenotype(s) (max MULTI_MAX)",requireTypePrompt:"Select an ENTITY_NAME Type to search Phenotypes"},description:'Please provide any <a href="https://hpo.jax.org/app/browse/term/HP:0000118" target="_blank">HPO phenotypes</a>, including <a href="https://hpo.jax.org/app/browse/term/HP:0003674" target="_blank">age of onset</a>.',extraType:"description"}},this.placeholder$=new Ge.X(this.defaultOptions.props.placeholders.default)}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEntitySelectField({typeaheadQuery:this.taq,typeaheadParam$:void 0,tagQuery:this.tq,getTypeaheadVarsFn:this.getTypeaheadVarsFn,getTypeaheadResultsFn:this.getTypeaheadResultsFn,getTagQueryVarsFn:this.getTagQueryVarsFn,getTagQueryResultsFn:this.getTagQueryResultsFn,getSelectedItemOptionFn:this.getSelectedItemOptionFn,getSelectOptionsFn:this.getSelectOptionsFn,changeDetectorRef:this.changeDetectorRef,selectOpen$:this.selectOpen$,selectComponent:this.selectComponent}),this.configurePlaceholders()}configureStateConnections(){}configurePlaceholders(){}getTypeaheadVarsFn(c){return{name:c}}getTypeaheadResultsFn(c){return c.data.phenotypeTypeahead}getTagQueryVarsFn(c){return{id:c}}getTagQueryResultsFn(c){return c.data.phenotype}getSelectedItemOptionFn(c){return{value:c.id,label:c.name}}getSelectOptionsFn(c,m){return c.map((G,Fe)=>({label:m.get(Fe)||G.name,value:G.id}))}}return u.\u0275fac=function(c){return new(c||u)(e.Y36(An.zOE),e.Y36(An.z_7),e.Y36(e.sBO))},u.\u0275cmp=e.Xpm({type:u,selectors:[["cvc-phenotype-select"]],viewQuery:function(c,m){if(1&c&&e.Gf(ta,5,e.Rgc),2&c){let G;e.iGM(G=e.CRH())&&(m.optionTemplates=G)}},features:[e.qOj],decls:9,vars:22,consts:[[3,"cvcSelectMode","cvcCustomTemplate","cvcFormControl","cvcFormlyAttributes","cvcEntityName","cvcPlaceholder","cvcResults","cvcOptions","cvcShowError","cvcDisabled","cvcLoading","cvcOnSearch","cvcOnOpenChange","cvcOnModelChange"],[4,"ngrxLet"],["selectedTemplate",""],[4,"ngFor","ngForOf"],["optionTemplates",""],[3,"cvcDisableLink","cvcCacheId","cvcEmphasize"],["nz-typography","","nzType","secondary"],[4,"ngIf"],["nz-typography","","nzType","secondary",3,"innerHtml"],[1,"ant-select-selection-item-content"],[3,"cvcCacheId","cvcContext","cvcMode","cvcOnClose"]],template:function(c,m){if(1&c&&(e.TgZ(0,"cvc-entity-select",0),e.NdJ("cvcOnSearch",function(Fe){return m.onSearch$.next(Fe)})("cvcOnOpenChange",function(Fe){return m.onOpenChange$.next(Fe)})("cvcOnModelChange",function(Fe){return m.props.change&&m.props.change(m.field,Fe)}),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.ALo(3,"ngrxPush"),e.ALo(4,"ngrxPush"),e.ALo(5,"ngrxPush"),e.qZA(),e.YNc(6,v1,3,3,"ng-container",1),e.YNc(7,_1,2,3,"ng-template",null,2,e.W1O)),2&c){const G=e.MAs(8);e.Q6J("cvcSelectMode",m.props.isMultiSelect?"multiple":"default")("cvcCustomTemplate",G)("cvcFormControl",m.formControl)("cvcFormlyAttributes",m.field)("cvcEntityName",m.props.entityName)("cvcPlaceholder",e.lcZ(1,12,m.placeholder$))("cvcResults",e.lcZ(2,14,m.result$))("cvcOptions",e.lcZ(3,16,m.selectOption$))("cvcShowError",m.showError)("cvcDisabled",m.onRequiresPhenotype$&&!e.lcZ(4,18,m.onRequiresPhenotype$))("cvcLoading",e.lcZ(5,20,m.isLoading$)),e.xp6(6),e.Q6J("ngrxLet",m.onSearch$)}},dependencies:[M.sg,M.O5,I.eJ,ge.ZU,Oo,Po.J,I.fM,w.A],changeDetection:0}),u})();const Ed={types:[{name:"phenotype-select",wrappers:["form-field"],component:Jr,defaultOptions:{props:{label:"Phenotype"}}},{name:"phenotype-multi-select",wrappers:["form-field"],component:Jr,defaultOptions:{props:{isMultiSelect:!0,label:"Phenotypes"}}}]};let al=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,t.UX,v.X0.forChild(Ed),Mt.L,pn.sL,We.LV,co.$6,qn.Qp,Re.PV,Pe.o7,k.Jb,et.cg,$e.zf,s.U5,B.ic,ge.ZJ,Jt.X,je,Zt,Nt.s,ze.x]}),u})();var mc=a(6028),gc=a(2438),na=a(9773),La=a(874),y1=a(9087),oa=a(7754),au=a(9388);const cu=["nz-rate-item",""];function lu(u,y){}function vc(u,y){}function ka(u,y){1&u&&e._UZ(0,"span",4)}const is=function(u){return{$implicit:u}},uu=["ulElement"];function cl(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"li",3)(1,"div",4),e.NdJ("itemHover",function(G){const Et=e.CHM(c).index,Mn=e.oxw();return e.KtG(Mn.onItemHover(Et,G))})("itemClick",function(G){const Et=e.CHM(c).index,Mn=e.oxw();return e.KtG(Mn.onItemClick(Et,G))}),e.qZA()()}if(2&u){const c=y.index,m=e.oxw();e.Q6J("ngClass",m.starStyleArray[c]||"")("nzTooltipTitle",m.nzTooltips[c]),e.xp6(1),e.Q6J("allowHalf",m.nzAllowHalf)("character",m.nzCharacter)("index",c)}}let ll=(()=>{class u{constructor(){this.index=0,this.allowHalf=!1,this.itemHover=new e.vpe,this.itemClick=new e.vpe}hoverRate(c){this.itemHover.next(c&&this.allowHalf)}clickRate(c){this.itemClick.next(c&&this.allowHalf)}}return u.\u0275fac=function(c){return new(c||u)},u.\u0275cmp=e.Xpm({type:u,selectors:[["","nz-rate-item",""]],inputs:{character:"character",index:"index",allowHalf:"allowHalf"},outputs:{itemHover:"itemHover",itemClick:"itemClick"},exportAs:["nzRateItem"],attrs:cu,decls:6,vars:8,consts:[[1,"ant-rate-star-second",3,"mouseover","click"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"ant-rate-star-first",3,"mouseover","click"],["defaultCharacter",""],["nz-icon","","nzType","star","nzTheme","fill"]],template:function(c,m){if(1&c&&(e.TgZ(0,"div",0),e.NdJ("mouseover",function(Fe){return m.hoverRate(!1),Fe.stopPropagation()})("click",function(){return m.clickRate(!1)}),e.YNc(1,lu,0,0,"ng-template",1),e.qZA(),e.TgZ(2,"div",2),e.NdJ("mouseover",function(Fe){return m.hoverRate(!0),Fe.stopPropagation()})("click",function(){return m.clickRate(!0)}),e.YNc(3,vc,0,0,"ng-template",1),e.qZA(),e.YNc(4,ka,1,0,"ng-template",null,3,e.W1O)),2&c){const G=e.MAs(5);e.xp6(1),e.Q6J("ngTemplateOutlet",m.character||G)("ngTemplateOutletContext",e.VKq(4,is,m.index)),e.xp6(2),e.Q6J("ngTemplateOutlet",m.character||G)("ngTemplateOutletContext",e.VKq(6,is,m.index))}},dependencies:[M.tP,Re.Ls],encapsulation:2,changeDetection:0}),(0,te.gn)([(0,oa.yF)()],u.prototype,"allowHalf",void 0),u})(),du=(()=>{class u{get nzValue(){return this._value}set nzValue(c){this._value!==c&&(this._value=c,this.hasHalf=!Number.isInteger(c),this.hoverValue=Math.ceil(c))}constructor(c,m,G,Fe,Et,Mn){this.nzConfigService=c,this.ngZone=m,this.renderer=G,this.cdr=Fe,this.directionality=Et,this.destroy$=Mn,this._nzModuleName="rate",this.nzAllowClear=!0,this.nzAllowHalf=!1,this.nzDisabled=!1,this.nzAutoFocus=!1,this.nzCount=5,this.nzTooltips=[],this.nzOnBlur=new e.vpe,this.nzOnFocus=new e.vpe,this.nzOnHoverChange=new e.vpe,this.nzOnKeyDown=new e.vpe,this.classMap={},this.starArray=[],this.starStyleArray=[],this.dir="ltr",this.hasHalf=!1,this.hoverValue=0,this.isFocused=!1,this._value=0,this.isNzDisableFirstChange=!0,this.onChange=()=>null,this.onTouched=()=>null}ngOnChanges(c){const{nzAutoFocus:m,nzCount:G,nzValue:Fe}=c;if(m&&!m.isFirstChange()){const Et=this.ulElement.nativeElement;this.nzAutoFocus&&!this.nzDisabled?this.renderer.setAttribute(Et,"autofocus","autofocus"):this.renderer.removeAttribute(Et,"autofocus")}G&&this.updateStarArray(),Fe&&this.updateStarStyle()}ngOnInit(){this.nzConfigService.getConfigChangeEventForComponent("rate").pipe((0,na.R)(this.destroy$)).subscribe(()=>this.cdr.markForCheck()),this.directionality.change.pipe((0,na.R)(this.destroy$)).subscribe(c=>{this.dir=c,this.cdr.detectChanges()}),this.dir=this.directionality.value,this.ngZone.runOutsideAngular(()=>{(0,gc.R)(this.ulElement.nativeElement,"focus").pipe((0,na.R)(this.destroy$)).subscribe(c=>{this.isFocused=!0,this.nzOnFocus.observers.length&&this.ngZone.run(()=>this.nzOnFocus.emit(c))}),(0,gc.R)(this.ulElement.nativeElement,"blur").pipe((0,na.R)(this.destroy$)).subscribe(c=>{this.isFocused=!1,this.nzOnBlur.observers.length&&this.ngZone.run(()=>this.nzOnBlur.emit(c))})})}onItemClick(c,m){if(this.nzDisabled)return;this.hoverValue=c+1;const G=m?c+.5:c+1;this.nzValue===G?this.nzAllowClear&&(this.nzValue=0,this.onChange(this.nzValue)):(this.nzValue=G,this.onChange(this.nzValue)),this.updateStarStyle()}onItemHover(c,m){this.nzDisabled||this.hoverValue===c+1&&m===this.hasHalf||(this.hoverValue=c+1,this.hasHalf=m,this.nzOnHoverChange.emit(this.hoverValue),this.updateStarStyle())}onRateLeave(){this.hasHalf=!Number.isInteger(this.nzValue),this.hoverValue=Math.ceil(this.nzValue),this.updateStarStyle()}focus(){this.ulElement.nativeElement.focus()}blur(){this.ulElement.nativeElement.blur()}onKeyDown(c){const m=this.nzValue;c.keyCode===mc.SV&&this.nzValue<this.nzCount?this.nzValue+=this.nzAllowHalf?.5:1:c.keyCode===mc.oh&&this.nzValue>0&&(this.nzValue-=this.nzAllowHalf?.5:1),m!==this.nzValue&&(this.onChange(this.nzValue),this.nzOnKeyDown.emit(c),this.updateStarStyle(),this.cdr.markForCheck())}updateStarArray(){this.starArray=Array(this.nzCount).fill(0).map((c,m)=>m),this.updateStarStyle()}updateStarStyle(){this.starStyleArray=this.starArray.map(c=>{const m="ant-rate-star",G=c+1;return{[`${m}-full`]:G<this.hoverValue||!this.hasHalf&&G===this.hoverValue,[`${m}-half`]:this.hasHalf&&G===this.hoverValue,[`${m}-active`]:this.hasHalf&&G===this.hoverValue,[`${m}-zero`]:G>this.hoverValue,[`${m}-focused`]:this.hasHalf&&G===this.hoverValue&&this.isFocused}})}writeValue(c){this.nzValue=c||0,this.updateStarArray(),this.cdr.markForCheck()}setDisabledState(c){this.nzDisabled=this.isNzDisableFirstChange&&this.nzDisabled||c,this.isNzDisableFirstChange=!1,this.cdr.markForCheck()}registerOnChange(c){this.onChange=c}registerOnTouched(c){this.onTouched=c}}return u.\u0275fac=function(c){return new(c||u)(e.Y36(La.jY),e.Y36(e.R0b),e.Y36(e.Qsj),e.Y36(e.sBO),e.Y36(au.Is,8),e.Y36(y1.kn))},u.\u0275cmp=e.Xpm({type:u,selectors:[["nz-rate"]],viewQuery:function(c,m){if(1&c&&e.Gf(uu,7),2&c){let G;e.iGM(G=e.CRH())&&(m.ulElement=G.first)}},inputs:{nzAllowClear:"nzAllowClear",nzAllowHalf:"nzAllowHalf",nzDisabled:"nzDisabled",nzAutoFocus:"nzAutoFocus",nzCharacter:"nzCharacter",nzCount:"nzCount",nzTooltips:"nzTooltips"},outputs:{nzOnBlur:"nzOnBlur",nzOnFocus:"nzOnFocus",nzOnHoverChange:"nzOnHoverChange",nzOnKeyDown:"nzOnKeyDown"},exportAs:["nzRate"],features:[e._Bn([y1.kn,{provide:t.JU,useExisting:(0,e.Gpc)(()=>u),multi:!0}]),e.TTD],decls:3,vars:7,consts:[[1,"ant-rate",3,"ngClass","tabindex","keydown","mouseleave"],["ulElement",""],["class","ant-rate-star","nz-tooltip","",3,"ngClass","nzTooltipTitle",4,"ngFor","ngForOf"],["nz-tooltip","",1,"ant-rate-star",3,"ngClass","nzTooltipTitle"],["nz-rate-item","",3,"allowHalf","character","index","itemHover","itemClick"]],template:function(c,m){1&c&&(e.TgZ(0,"ul",0,1),e.NdJ("keydown",function(Fe){return m.onKeyDown(Fe),Fe.preventDefault()})("mouseleave",function(Fe){return m.onRateLeave(),Fe.stopPropagation()}),e.YNc(2,cl,2,5,"li",2),e.qZA()),2&c&&(e.ekj("ant-rate-disabled",m.nzDisabled)("ant-rate-rtl","rtl"===m.dir),e.Q6J("ngClass",m.classMap)("tabindex",m.nzDisabled?-1:1),e.xp6(2),e.Q6J("ngForOf",m.starArray))},dependencies:[M.mk,M.sg,et.SY,ll],encapsulation:2,changeDetection:0}),(0,te.gn)([(0,La.oS)(),(0,oa.yF)()],u.prototype,"nzAllowClear",void 0),(0,te.gn)([(0,La.oS)(),(0,oa.yF)()],u.prototype,"nzAllowHalf",void 0),(0,te.gn)([(0,oa.yF)()],u.prototype,"nzDisabled",void 0),(0,te.gn)([(0,oa.yF)()],u.prototype,"nzAutoFocus",void 0),(0,te.gn)([(0,oa.Rn)()],u.prototype,"nzCount",void 0),u})(),pu=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[au.vT,M.ez,Re.PV,et.cg]}),u})();const _c={1:"Poor - Claim is not supported well by experimental evidence. Results are not reproducible, or have very small sample size. No follow-up is done to validate novel claims.",2:"Adequate - Evidence is not well supported by experimental data, and little follow-up data is available. Experiments may lack proper controls, have small sample size, or are not statistically convincing.",3:"Average - Evidence is convincing, but not supported by a breadth of experiments. May be smaller scale projects, or novel results without many follow-up experiments. Discrepancies from expected results are explained and not concerning.",4:"Strong - Well supported evidence. Experiments are well controlled, and results are convincing. Any discrepancies from expected results are well-explained and not concerning.",5:"Excellent - Solid, well supported evidence from a lab or journal with respected academic standing. Experiments are well controlled, and results are clean and reproducible across multiple replicates. Evidence confirmed using separate methods."},hu=Vt(yn(),lt()),yc={types:[{name:"rating",wrappers:["form-field"],component:(()=>{class u extends hu{constructor(){super(),this.defaultOptions={props:{label:"Evidence Rating",count:5,tooltip:"A representation of the curator's confidence in the quality of the summarized evidence",hoverText:[]}},this.rating$=new Ge.X(void 0)}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.formControl.value&&this.rating$.next(this.formControl.value),Object.entries(_c).map(([c,m])=>{this.props.hoverText.push(m)}),this.rating$.pipe((0,ae.t)(this)).subscribe(c=>{this.formControl.setValue(c)}),this.onValueChange$.pipe((0,ae.t)(this)).subscribe(c=>{this.props.description=c?_c[c]:void 0})}configureStateConnections(){}}return u.\u0275fac=function(c){return new(c||u)},u.\u0275cmp=e.Xpm({type:u,selectors:[["cvc-rating"]],features:[e.qOj],decls:2,vars:5,consts:[["type","hidden",3,"formControl","formlyAttributes"],[3,"ngModel","nzCount","nzTooltips","ngModelChange"]],template:function(c,m){1&c&&(e._UZ(0,"input",0),e.TgZ(1,"nz-rate",1),e.NdJ("ngModelChange",function(Fe){return m.rating$.next(Fe)}),e.qZA()),2&c&&(e.Q6J("formControl",m.formControl)("formlyAttributes",m.field),e.xp6(1),e.Q6J("ngModel",m.formControl.value)("nzCount",m.props.count)("nzTooltips",m.props.hoverText))},dependencies:[t.Fj,t.JJ,t.oH,t.On,v.JD,du],styles:["[_nghost-%COMP%]     nz-rate .anticon{font-size:160%}"],changeDetection:0}),u})()}]};let As=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,t.UX,t.u5,v.X0.forChild(yc),pu,Nt.s,je,Be]}),u})();const Fs=["optionTemplates"];function Ns(u,y){if(1&u&&e._UZ(0,"cvc-attribute-tag",4),2&u){const c=e.oxw().$implicit;e.Q6J("cvcAttrValue",c)}}function ul(u,y){1&u&&(e.ynx(0),e.YNc(1,Ns,1,1,"ng-template",null,3,e.W1O),e.BQk())}function Cc(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"div",5)(1,"cvc-attribute-tag",6),e.NdJ("cvcOnClose",function(G){e.CHM(c);const Fe=e.oxw();return e.KtG(Fe.onTagClose$.next(G))}),e.qZA()()}if(2&u){const c=y.$implicit,m=e.oxw();e.xp6(1),e.Q6J("cvcAttrValue",c.nzValue)("cvcContext",m.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",m.props.isMultiSelect?"default":"closeable")}}const ia={Evidence:{PREDICTIVE:{SENSITIVITYRESPONSE:"Associated with a clinical or preclinical response to treatment",RESISTANCE:"Associated with clinical or preclinical resistance to treatment",ADVERSE_RESPONSE:"Associated with an adverse response to drug treatment",REDUCED_SENSITIVITY:"Response to treatment is lower than seen in other treatment contexts",NA:"Clinical Significance is not applicable."},DIAGNOSTIC:{POSITIVE:"Associated with diagnosis of disease or subtype",NEGATIVE:"Associated with lack of disease or subtype"},PROGNOSTIC:{BETTER_OUTCOME:"Demonstrates better than expected clinical outcome",POOR_OUTCOME:"Demonstrates worse than expected clinical outcome",NA:"Clinical Significance is not applicable."},PREDISPOSING:{PREDISPOSITION:"Germline variant has predisposing potential for cancer, and may meet select ACMG/AMP criteria supporting pathogenic or benign classification.",PROTECTIVENESS:"Germline variant has properties that protect individuals from acquiring cancer."},FUNCTIONAL:{GAIN_OF_FUNCTION:"Sequence variant confers an increase in normal gene function",LOSS_OF_FUNCTION:"Sequence variant confers a diminished or abolished function",UNALTERED_FUNCTION:"Gene product of sequence variant is unchanged",NEOMORPHIC:"Sequence variant creates a novel function",DOMINANT_NEGATIVE:"Sequence variant abrogates function of wildtype allele gene product",UNKNOWN:"Sequence variant that cannot be precisely defined by the other listed categories"},ONCOGENIC:{ONCOGENICITY:"Somatic variant has oncogenic potential for driving cancer, and may meet select ClinGen/CGC/VICC criteria supporting pathogenic or benign classification.",PROTECTIVENESS:"Somatic variant has a protective role against cancer."}},Assertion:{PREDICTIVE:{SENSITIVITYRESPONSE:"Associated with a clinical or preclinical response to treatment",RESISTANCE:"Associated with clinical or preclinical resistance to treatment",ADVERSE_RESPONSE:"Associated with an adverse response to drug treatment",REDUCED_SENSITIVITY:"Response to treatment is lower than seen in other treatment contexts",NA:"Clinical Significance is not applicable."},DIAGNOSTIC:{POSITIVE:"Associated with diagnosis of disease or subtype",NEGATIVE:"Associated with lack of disease or subtype"},PROGNOSTIC:{BETTER_OUTCOME:"Demonstrates better than expected clinical outcome",POOR_OUTCOME:"Demonstrates worse than expected clinical outcome",NA:"Clinical Significance is not applicable."},PREDISPOSING:{PATHOGENIC:"Very strong evidence the variant is pathogenic",LIKELY_PATHOGENIC:"Strong evidence (>90% certainty) the variant is pathogenic.",BENIGN:"Very strong evidence the variant is benign",LIKELY_BENIGN:"Not expected to have a major effect on disease",UNCERTAIN_SIGNIFICANCE:"Does not meet the ACMG/AMP criteria for pathogenic/benign, or the evidence is conflicting"},ONCOGENIC:{ONCOGENIC:"Very strong evidence the variant is oncogenic.",LIKELY_ONCOGENIC:"Strong evidence the variant is oncogenic.",BENIGN:"Very strong evidence the variant does not have oncogenic properties.",LIKELY_BENIGN:"Strong evidence the variant does not have oncogenic properties.",UNCERTAIN_SIGNIFICANCE:"Does not meet guideline criteria for oncogenic/benign, or the evidence is conflicting."}}},C1=Vt(yn(),lt()),T1={types:[{name:"significance-select",wrappers:["form-field"],component:(()=>{class u extends C1{constructor(c){super(),this.cdr=c,this.defaultOptions={props:{label:"Significance",required:!0,isMultiSelect:!1,placeholder:"Select Significance",placeholderFn:m=>`Select ${m?m+" ":""} Significance`,requireTypePromptFn:m=>`Select ${m} Type to select its Significance`,tooltip:"Clinical impact of the variant",formMode:"add"}},this.significanceEnum$=new Ge.X([])}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEnumSelectField({optionEnum$:this.significanceEnum$,optionTemplate$:this.optionTemplate$,changeDetectorRef:this.cdr})}configureStateConnections(){if(!this.state)return console.error(`${this.field.id} requires a form state to populate its options, none was found.`),void(this.placeholder$=new Ge.X("ERROR: Form state not found"));if(this.placeholder$=new Ge.X(this.props.placeholderFn(this.state.entityName)),!this.state.enums.significance$)return void console.error(`${this.field.id} could not find form state's enums.significance$ to populate select.`);this.state.enums.significance$.pipe((0,ae.t)(this)).subscribe(m=>{this.significanceEnum$.next(m)}),this.optionTemplates||console.warn(`${this.field.id} could not find its optionTemplates QueryList to populate its select options, so simple text labels will be displayed.`),this.optionTemplate$=this.optionTemplates?.changes.pipe((0,Ct.U)(m=>m.map(G=>G)));const c=`${this.state.entityName.toLowerCase()}Type$`;this.state.fields[c]?(this.onTypeSelect$=this.state.fields[c],this.onTypeSelect$.pipe((0,Pt.T)("add"===this.props.formMode?0:1),(0,ae.t)(this)).subscribe(m=>{m?(this.props.disabled=!1,this.props.description=void 0,this.props.extraType=void 0,this.placeholder$.next(this.props.placeholderFn(this.state.entityName))):(this.props.disabled=!0,this.props.description=this.props.requireTypePromptFn(this.state.entityName),this.props.extraType="prompt"),this.formControl.value&&this.formControl.setValue(void 0)}),this.onValueChange$.pipe((0,it.M)(this.onTypeSelect$),(0,ae.t)(this)).subscribe(([m,G])=>{!G||!m||!this.state||(this.props.description=void 0,this.props.extraType="description",this.props.description=ia[this.state.entityName][G][m])})):console.error(`${this.field.id} could not find form state's ${c} to populate Significance options.`)}}return u.\u0275fac=function(c){return new(c||u)(e.Y36(e.sBO))},u.\u0275cmp=e.Xpm({type:u,selectors:[["cvc-significance-select"]],viewQuery:function(c,m){if(1&c&&e.Gf(Fs,5,e.Rgc),2&c){let G;e.iGM(G=e.CRH())&&(m.optionTemplates=G)}},features:[e.qOj],decls:7,vars:15,consts:[[3,"cvcFormControl","cvcFormlyAttributes","cvcSelectMode","cvcPlaceholder","cvcCustomTemplate","cvcOptions","cvcShowError","cvcDisabled"],[4,"ngFor","ngForOf"],["selectedTemplate",""],["optionTemplates",""],[3,"cvcAttrValue"],[1,"ant-select-selection-item-content"],[3,"cvcAttrValue","cvcContext","cvcMode","cvcOnClose"]],template:function(c,m){if(1&c&&(e._UZ(0,"cvc-enum-select",0),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.YNc(3,ul,3,0,"ng-container",1),e.ALo(4,"ngrxPush"),e.YNc(5,Cc,2,3,"ng-template",null,2,e.W1O)),2&c){const G=e.MAs(6);e.Q6J("cvcFormControl",m.formControl)("cvcFormlyAttributes",m.field)("cvcSelectMode",m.props.isMultiSelect?"multiple":"default")("cvcPlaceholder",e.lcZ(1,9,m.placeholder$))("cvcCustomTemplate",G)("cvcOptions",e.lcZ(2,11,m.selectOption$))("cvcShowError",m.showError)("cvcDisabled",m.props.disabled),e.xp6(3),e.Q6J("ngForOf",e.lcZ(4,13,m.significanceEnum$))}},dependencies:[M.sg,Ke,_e,I.fM]}),u})()}]};let xd=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,t.UX,v.X0.forChild(T1),je,Be,Ye]}),u})();var ra,Dd=a(7907),zc=a(2666),Od=a(7921);function sa(u,y){1&u&&e._UZ(0,"span",9),2&u&&e.Q6J("nzType","loading")}function M1(u,y){if(1&u&&(e.ynx(0),e.YNc(1,sa,1,1,"span",8),e._uU(2,"\xa0 "),e.TgZ(3,"span"),e._uU(4),e.qZA(),e.BQk()),2&u){const c=y.ngrxLet;e.xp6(1),e.Q6J("ngIf",c.showSpinner),e.xp6(3),e.Oqu(c.message)}}function b1(u,y){if(1&u&&e._uU(0),2&u){const c=e.oxw();e.Oqu(c.successMessage)}}function ki(u,y){1&u&&(e.TgZ(0,"button",10),e._uU(1," Add Source "),e.qZA()),2&u&&e.Q6J("disabled",null===y.ngrxLet.citation)}const mu=function(){return[0,0]};let Ls=((ra=class{constructor(y,c,m,G,Fe){this.checkCitation=y,this.addRemoteCitation=c,this.errors=m,this.apollo=G,this.cdr=Fe,this.cvcOnCreate=new e.vpe,this.messageOptions={empty:(Et,Mn)=>`No ${Mn} Source with a citation ID of "${Et}"`,searchCitation:(Et,Mn)=>`Searching ${Mn} for a citation ID of "${Et}"`,foundCitation:(Et,Mn,kn)=>`Found ${Mn} citation "${kn}" with ID ${Et}`,noCitation:(Et,Mn)=>`No ${Mn} Source with a citation ID of "${Et}" was found`},this.form=new t.nJ({}),this.model={citationId:"",sourceType:An.yic.Pubmed},this.formLayout="horizontal",this.options={formState:{formLayout:this.formLayout}},this.onSubmit$=new st.x,this.citationId$=new Ge.X(""),this.sourceType$=new Ge.X(An.yic.Pubmed),this.addSourceStubMutator=new Jo.U(this.errors),this.fields=[{key:"citationId",props:{hidden:!0}},{key:"sourceType",props:{hidden:!0}}],this.onSubmit$.pipe((0,ae.t)(this)).subscribe(Et=>{console.log("disease-quick-add form model submitted.",Et),this.submitSourceStub()})}ngOnInit(){void 0!==this.model.citationId&&void 0!==this.model.sourceType?(this.queryRef=this.checkCitation.watch({citationId:this.model.citationId,sourceType:this.model.sourceType}),this.checkResult$=this.queryRef.valueChanges.pipe((0,Ct.U)(y=>({loading:y.loading,citation:y.data?y.data.remoteCitation:null,model:this.model})),(0,wo.b)(y=>{this.citationString=y.citation?y.citation:void 0})),this.citationId$.pipe((0,ae.t)(this)).subscribe(y=>{this.model.sourceType&&this.queryRef.refetch({citationId:y,sourceType:this.model.sourceType})}),this.formMessageDisplay$=this.checkResult$.pipe((0,Ct.U)(y=>{const c=y.loading,m=y.citation,G=y.model;return c?{message:this.messageOptions.searchCitation(G.citationId,G.sourceType),showSpinner:!0}:c||null===m?c||null!==m?{message:"UNHANDLED MESSAGE STATE",showSpinner:!1}:{message:this.messageOptions.noCitation(G.citationId,G.sourceType),showSpinner:!1}:{message:this.messageOptions.foundCitation(G.citationId,(0,zc.c)(G.sourceType),m),showSpinner:!1}}),(0,Od.O)({message:this.messageOptions.searchCitation(this.model.citationId,this.model.sourceType),showSpinner:!0}))):console.error("source-quick-add provided invalid initial model")}submitSourceStub(){void 0!==this.model.citationId&&void 0!==this.model.sourceType&&(this.mutationState=this.addSourceStubMutator.mutate(this.addRemoteCitation,{input:{citationId:this.model.citationId,sourceType:this.model.sourceType}},{},y=>{if(console.log("source-quick-add submit data callback",y),y.addRemoteCitation){this.successMessage=`New Source "${this.citationString}" added.`;const c=y.addRemoteCitation.newSource,m=(0,zc.c)(this.model.sourceType),G=this.citationString?this.citationString:"NO CITATION",Fe={query:yo.Ps`
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
              `,data:{source:{__typename:"Source",id:c.id,name:`${m}: ${G}`,link:`sources/${c.id}`,citation:G,citationId:this.model.citationId,sourceType:this.model.sourceType}},variables:{id:c.id}};this.apollo.client.cache.writeQuery(Fe)||console.error("source-quick-add.form Source writeQuery failed.",Fe),setTimeout(()=>{const Mn={id:`Source:${c.id}`,fragment:yo.Ps`
                  fragment LinkableSource on Source {
                    id
                    name
                    link
                  }
                `},kn=this.apollo.client.cache.readFragment(Mn);null!==kn&&this.cvcOnCreate.next(kn.id)},1e3)}}))}ngOnChanges(y){if(y.cvcSourceType){const c=y.cvcSourceType.currentValue;this.sourceType$.next(c),this.model={...this.model,sourceType:c}}if(y.cvcCitationId){const c=y.cvcCitationId.currentValue;this.citationId$.next(c),this.model={...this.model,citationId:c}}}}).\u0275fac=function(y){return new(y||ra)(e.Y36(An.qgP),e.Y36(An.LHC),e.Y36(Ro.Y),e.Y36(yo._M),e.Y36(e.sBO))},ra.\u0275cmp=e.Xpm({type:ra,selectors:[["cvc-source-quick-add"]],inputs:{cvcSourceType:"cvcSourceType",cvcCitationId:"cvcCitationId"},outputs:{cvcOnCreate:"cvcOnCreate"},features:[e.TTD],decls:10,vars:11,consts:[[4,"ngrxLet"],["entityType","Source",3,"mutationState","successMessage"],["success",""],["nz-form","","nzLayout","horizontal",3,"formGroup","ngSubmit"],[3,"nzGutter"],["nzSpan","24"],[3,"form","fields","model","options","modelChange"],["nz-button","","nzType","primary","nzBlock","",3,"disabled",4,"ngrxLet"],["nz-icon","",3,"nzType",4,"ngIf"],["nz-icon","",3,"nzType"],["nz-button","","nzType","primary","nzBlock","",3,"disabled"]],template:function(y,c){if(1&y&&(e.YNc(0,M1,5,2,"ng-container",0),e.TgZ(1,"cvc-form-submission-status-display",1),e.YNc(2,b1,1,1,"ng-template",null,2,e.W1O),e.TgZ(4,"form",3),e.NdJ("ngSubmit",function(){return c.onSubmit$.next(c.model)}),e.TgZ(5,"nz-row",4)(6,"nz-col",5)(7,"formly-form",6),e.NdJ("modelChange",function(G){return c.model=G}),e.qZA()(),e.TgZ(8,"nz-col",5),e.YNc(9,ki,2,1,"button",7),e.qZA()()()()),2&y){const m=e.MAs(3);e.Q6J("ngrxLet",c.formMessageDisplay$),e.xp6(1),e.Q6J("mutationState",c.mutationState)("successMessage",m),e.xp6(3),e.Q6J("formGroup",c.form),e.xp6(1),e.Q6J("nzGutter",e.DdM(10,mu)),e.xp6(2),e.Q6J("form",c.form)("fields",c.fields)("model",c.model)("options",c.options),e.xp6(2),e.Q6J("ngrxLet",c.checkResult$)}},dependencies:[M.O5,t._Y,t.JL,t.sg,I.eJ,v.T7,pn.ix,Wo.w,qo.dQ,Re.Ls,k.t3,k.SK,s.Lr,Ti.F],changeDetection:0}),ra);Ls=(0,te.gn)([(0,ae.c)()],Ls);const S1=["optionTemplates"];function yr(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"nz-col",9)(1,"nz-select",10),e.NdJ("ngModelChange",function(G){e.CHM(c);const Fe=e.oxw();return e.KtG(Fe.sourceType$.next(G))}),e.ALo(2,"ngrxPush"),e._UZ(3,"nz-option",11)(4,"nz-option",12)(5,"nz-option",13),e.qZA()()}if(2&u){const c=e.oxw();e.xp6(1),e.Q6J("nzOptionHeightPx",28)("ngModel",e.lcZ(2,2,c.sourceType$))}}function aa(u,y){1&u&&(e.TgZ(0,"div"),e._uU(1,"PMID:"),e.qZA())}function dl(u,y){1&u&&(e.TgZ(0,"div"),e._uU(1,"ID:"),e.qZA())}function Ra(u,y){1&u&&(e.TgZ(0,"div"),e._uU(1,"doi.org/"),e.qZA())}function ca(u,y){if(1&u&&(e.TgZ(0,"nz-col",14),e.ynx(1,15),e.ALo(2,"ngrxPush"),e.YNc(3,aa,2,0,"div",16),e.YNc(4,dl,2,0,"div",16),e.YNc(5,Ra,2,0,"div",16),e.BQk(),e.qZA()),2&u){const c=e.oxw();e.xp6(1),e.Q6J("ngSwitch",e.lcZ(2,4,c.sourceType$)),e.xp6(2),e.Q6J("ngSwitchCase","PUBMED"),e.xp6(1),e.Q6J("ngSwitchCase","ASCO"),e.xp6(1),e.Q6J("ngSwitchCase","ASH")}}function gu(u,y){if(1&u&&(e._UZ(0,"cvc-entity-tag",19),e.TgZ(1,"span",20),e._uU(2," ID: "),e._UZ(3,"span",21),e.ALo(4,"highlightTypeahead"),e.qZA()),2&u){const c=e.oxw().$implicit,m=e.oxw().ngrxLet;e.Q6J("cvcDisableLink",!0)("cvcCacheId",c.__typename+":"+c.id)("cvcEmphasize",m),e.xp6(3),e.Q6J("innerHtml",e.xi3(4,4,c.citationId.toString(),m),e.oJD)}}function E1(u,y){1&u&&(e.ynx(0),e.YNc(1,gu,5,7,"ng-template",null,18,e.W1O),e.BQk())}function pl(u,y){if(1&u&&(e.ynx(0),e.YNc(1,E1,3,0,"ng-container",17),e.ALo(2,"ngrxPush"),e.BQk()),2&u){const c=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,c.result$))}}function x1(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"div",22)(1,"cvc-entity-tag",23),e.NdJ("cvcOnClose",function(){const Fe=e.CHM(c).$implicit,Et=e.oxw();return e.KtG(Et.onTagClose$.next(Fe.nzValue))}),e.qZA()()}if(2&u){const c=y.$implicit,m=e.oxw();e.xp6(1),e.Q6J("cvcCacheId","Source:"+c.nzValue)("cvcContext",m.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",m.props.isMultiSelect?"default":"closeable")}}function mr(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"cvc-source-quick-add",24),e.NdJ("cvcOnCreate",function(G){e.CHM(c);const Fe=e.oxw();return e.KtG(Fe.onPopulate$.next(G))}),e.qZA()}if(2&u){const c=y.model;e.Q6J("cvcCitationId",c.citationId)("cvcSourceType",c.sourceType)}}function Tc(u,y){1&u&&(e.TgZ(0,"button",25),e._uU(1,"Add a New Source"),e.qZA())}const gs=function(){return[6,6]},hl=Vt(yn(),Xo());let fl=(()=>{class u extends hl{constructor(c,m,G){super(),this.taq=c,this.tq=m,this.changeDetectorRef=G,this.onModel$=new Yo.y,this.defaultSourceType=An.yic.Pubmed,this.defaultOptions={props:{entityName:{singular:"Source",plural:"Sources"},isMultiSelect:!1,minSearchStrLength:2,tooltip:"PubMed, ASCO, or ASH Abstract Source(s) that support items, statements or descriptions.",placeholders:{default:"Search PubMed, ASCO, and ASH Sources",contextualFn:Fe=>`Search ${Fe} Sources`},extraType:"prompt"}},this.sourceType$=new Ge.X(this.defaultSourceType),this.sourceTypeName$=new Ge.X((0,zc.c)(this.defaultSourceType)),this.placeholder$=new Ge.X(this.defaultOptions.props.placeholders.contextualFn((0,zc.c)(this.defaultSourceType))),this.showTypeSelect$=new Yo.y}ngAfterViewInit(){this.configureBaseField(),this.configureEntitySelectField({typeaheadQuery:this.taq,typeaheadParam$:this.sourceType$,typeaheadParamName$:this.sourceTypeName$||void 0,tagQuery:this.tq,getTypeaheadVarsFn:this.getTypeaheadVarsFn,getTypeaheadResultsFn:this.getTypeaheadResultsFn,getTagQueryVarsFn:this.getTagQueryVarsFn,getTagQueryResultsFn:this.getTagQueryResultsFn,getSelectedItemOptionFn:this.getSelectedItemOptionFn,getSelectOptionsFn:this.getSelectOptionsFn,changeDetectorRef:this.changeDetectorRef,selectOpen$:this.selectOpen$,selectComponent:this.selectComponent,minSearchStrLength:this.field.props.minSearchStrLength}),this.showTypeSelect$=this.onValueChange$.pipe((0,Ct.U)(c=>!!(!c||c&&Array.isArray(c)))),this.sourceType$.pipe((0,ae.t)(this)).subscribe(c=>{const m=(0,zc.c)(c);this.sourceTypeName$.next(m),this.placeholder$.next(this.props.placeholders.contextualFn(m))}),this.onModel$=(0,Eo.a)([this.sourceType$,this.onSearch$]).pipe((0,Ct.U)(([c,m])=>({citationId:m,sourceType:c})))}getTypeaheadVarsFn(c,m=An.yic.Pubmed){return{partialCitationId:c,sourceType:m}}getTypeaheadResultsFn(c){return c.data.sourceTypeahead}getTagQueryVarsFn(c){return{id:c}}getTagQueryResultsFn(c){return c.data.source}getSelectedItemOptionFn(c){return{value:c.id,label:c.name}}getSelectOptionsFn(c,m){return c.map((G,Fe)=>({label:m.get(Fe)||G.name,value:G.id}))}}return u.\u0275fac=function(c){return new(c||u)(e.Y36(An.aC3),e.Y36(An.BYO),e.Y36(e.sBO))},u.\u0275cmp=e.Xpm({type:u,selectors:[["cvc-source-select"]],viewQuery:function(c,m){if(1&c&&e.Gf(S1,5,e.Rgc),2&c){let G;e.iGM(G=e.CRH())&&(m.optionTemplates=G)}},features:[e.qOj],decls:21,vars:39,consts:[[3,"nzGutter"],["nzFlex","80px",4,"ngIf"],["nzFlex","60px","class","prefix",4,"ngIf"],["nzFlex","auto"],[3,"cvcMinSearchStrLength","cvcSelectMode","cvcCustomTemplate","cvcFormControl","cvcFormlyAttributes","cvcEntityName","cvcPlaceholder","cvcResults","cvcOptions","cvcParamName","cvcShowError","cvcDisabled","cvcLoading","cvcAddEntity","cvcAddEntityModel","cvcSelectOpen","cvcOnSearch","cvcOnModelChange"],[4,"ngrxLet"],["selectedTemplate",""],["addSource",""],["addSourceBtn",""],["nzFlex","80px"],["nzSize","default","nzBlock","",3,"nzOptionHeightPx","ngModel","ngModelChange"],["nzValue","PUBMED","nzLabel","PubMed"],["nzValue","ASCO","nzLabel","ASCO"],["nzValue","ASH","nzLabel","ASH"],["nzFlex","60px",1,"prefix"],[3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngFor","ngForOf"],["optionTemplates",""],[3,"cvcDisableLink","cvcCacheId","cvcEmphasize"],["nz-typography","","nzType","secondary"],["nz-typography","","nzType","secondary",3,"innerHtml"],[1,"ant-select-selection-item-content"],[3,"cvcCacheId","cvcContext","cvcMode","cvcOnClose"],[3,"cvcCitationId","cvcSourceType","cvcOnCreate"],["type","button"]],template:function(c,m){if(1&c&&(e.TgZ(0,"nz-row",0),e.YNc(1,yr,6,4,"nz-col",1),e.ALo(2,"ngrxPush"),e.YNc(3,ca,6,6,"nz-col",2),e.ALo(4,"ngrxPush"),e.TgZ(5,"nz-col",3)(6,"cvc-entity-select",4),e.NdJ("cvcOnSearch",function(Fe){return m.onSearch$.next(Fe)})("cvcOnModelChange",function(Fe){return m.props.change&&m.props.change(m.field,Fe)}),e.ALo(7,"ngrxPush"),e.ALo(8,"ngrxPush"),e.ALo(9,"ngrxPush"),e.ALo(10,"ngrxPush"),e.ALo(11,"ngrxPush"),e.ALo(12,"ngrxPush"),e.ALo(13,"ngrxPush"),e.qZA()()(),e.YNc(14,pl,3,3,"ng-container",5),e.YNc(15,x1,2,3,"ng-template",null,6,e.W1O),e.YNc(17,mr,1,2,"ng-template",null,7,e.W1O),e.YNc(19,Tc,2,0,"ng-template",null,8,e.W1O)),2&c){const G=e.MAs(16),Fe=e.MAs(18);e.Q6J("nzGutter",e.DdM(38,gs)),e.xp6(1),e.Q6J("ngIf",e.lcZ(2,20,m.showTypeSelect$)),e.xp6(2),e.Q6J("ngIf",e.lcZ(4,22,m.showTypeSelect$)),e.xp6(3),e.Q6J("cvcMinSearchStrLength",m.props.minSearchStrLength)("cvcSelectMode",m.props.isMultiSelect?"multiple":"default")("cvcCustomTemplate",G)("cvcFormControl",m.formControl)("cvcFormlyAttributes",m.field)("cvcEntityName",m.props.entityName)("cvcPlaceholder",e.lcZ(7,24,m.placeholder$))("cvcResults",e.lcZ(8,26,m.result$))("cvcOptions",e.lcZ(9,28,m.selectOption$))("cvcParamName",e.lcZ(10,30,m.sourceTypeName$))("cvcShowError",m.showError)("cvcDisabled",m.props.disabled)("cvcLoading",e.lcZ(11,32,m.isLoading$))("cvcAddEntity",Fe)("cvcAddEntityModel",e.lcZ(12,34,m.onModel$))("cvcSelectOpen",e.lcZ(13,36,m.selectOpen$)),e.xp6(8),e.Q6J("ngrxLet",m.onSearch$)}},dependencies:[M.sg,M.O5,M.RF,M.n9,t.JJ,t.On,I.eJ,We.Ip,We.Vq,k.t3,k.SK,ge.ZU,Oo,Po.J,Ls,I.fM,w.A],styles:[".prefix[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{text-align:right;line-height:28px;color:#999}"],changeDetection:0}),u})();const vu={types:[{name:"source-select",wrappers:["form-field"],component:fl,defaultOptions:{props:{label:"Source"}}},{name:"source-multi-select",wrappers:["form-field"],component:fl,defaultOptions:{props:{label:"Sources",isMultiSelect:!0}}}]};let _u=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,t.u5,t.UX,v.X0.forChild(vu),Mt.L,pn.sL,Dd.aF,We.LV,co.$6,qn.Qp,Re.PV,Pe.o7,k.Jb,et.cg,$e.zf,s.U5,B.ic,ge.ZJ,on.S,Jt.X,Wn.g,je,Zt,Nt.s,ze.x]}),u})();function ml(u){return(()=>{class c extends u{configureStringTagField(){this.onValueChange$?(this.tagLabel$=new st.x,this.onValueChange$.pipe((0,ae.t)(this)).subscribe(G=>{this.tagLabel$.next(G?G.toString():void 0)}),this.onTagClose$=new st.x,this.onTagClose$.pipe((0,ae.t)(this)).subscribe(G=>{this.formControl.setValue(void 0),this.tagLabel$.next(void 0)})):console.error(`${this.field.id} cannot find onValueChange$ Subject, ensure configureBaseField() has been called before configureDisplayStringTag in its AfterViewInit hook.`)}}return c.\u0275fac=function(){let m;return function(Fe){return(m||(m=e.n5z(c)))(Fe||c)}}(),c.\u0275prov=e.Yz7({token:c,factory:c.\u0275fac}),c})()}function yu(u,y){}function Cu(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"span",4)(1,"nz-tag",5),e.NdJ("nzOnClose",function(G){e.CHM(c);const Fe=e.oxw();return e.KtG(Fe.cvcOnClose.next(G))}),e.YNc(2,yu,0,0,"ng-template",6),e.qZA()()}if(2&u){const c=e.oxw(),m=e.MAs(4);e.xp6(1),e.Q6J("nzMode",c.cvcMode),e.xp6(1),e.Q6J("ngTemplateOutlet",m)}}function Mc(u,y){}function Va(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"span",7)(1,"nz-tag",5),e.NdJ("nzOnClose",function(G){e.CHM(c);const Fe=e.oxw();return e.KtG(Fe.cvcOnClose.next(G))}),e.YNc(2,Mc,0,0,"ng-template",6),e.qZA()()}if(2&u){e.oxw();const c=e.MAs(4);e.xp6(1),e.Q6J("nzMode","closeable"),e.xp6(1),e.Q6J("ngTemplateOutlet",c)}}function gl(u,y){}function Ba(u,y){if(1&u&&(e.TgZ(0,"span",8),e.YNc(1,gl,0,0,"ng-template",6),e.qZA()),2&u){e.oxw();const c=e.MAs(4);e.xp6(1),e.Q6J("ngTemplateOutlet",c)}}function zu(u,y){1&u&&e._UZ(0,"i",11)}function Ha(u,y){if(1&u&&(e.YNc(0,zu,1,0,"i",9),e._UZ(1,"span",10),e.ALo(2,"highlightTypeahead")),2&u){const c=e.oxw();e.Q6J("ngIf",!c.cvcLabel),e.xp6(1),e.Q6J("innerHtml",c.cvcLabel?e.xi3(2,2,c.cvcLabel,c.cvcEmphasize):"?STRING?",e.oJD)}}let vl=(()=>{class u{constructor(){this.cvcMode="default",this.cvcContext="default",this.cvcOnClose=new e.vpe}}return u.\u0275fac=function(c){return new(c||u)},u.\u0275cmp=e.Xpm({type:u,selectors:[["cvc-string-tag"]],inputs:{cvcLabel:"cvcLabel",cvcEmphasize:"cvcEmphasize",cvcMode:"cvcMode",cvcContext:"cvcContext"},outputs:{cvcOnClose:"cvcOnClose"},decls:5,vars:3,consts:[["class","default",4,"ngIf"],["class","select-item",4,"ngIf"],["class","multi-select-item",4,"ngIf"],["tagContent",""],[1,"default"],[3,"nzMode","nzOnClose"],[3,"ngTemplateOutlet"],[1,"select-item"],[1,"multi-select-item"],["nz-icon","","nzType","question-circle","nzTheme","outline",4,"ngIf"],[3,"innerHtml"],["nz-icon","","nzType","question-circle","nzTheme","outline"]],template:function(c,m){1&c&&(e.YNc(0,Cu,3,2,"span",0),e.YNc(1,Va,3,2,"span",1),e.YNc(2,Ba,2,1,"span",2),e.YNc(3,Ha,3,5,"ng-template",null,3,e.W1O)),2&c&&(e.Q6J("ngIf","default"===m.cvcContext),e.xp6(1),e.Q6J("ngIf","select-item"===m.cvcContext),e.xp6(1),e.Q6J("ngIf","multi-select-item"===m.cvcContext))},dependencies:[M.O5,M.tP,Re.Ls,Jt.j,w.A]}),u})();function _l(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"cvc-string-tag",3),e.NdJ("cvcOnClose",function(){const Fe=e.CHM(c).$implicit,Et=e.oxw();return e.KtG(Et.tagClosed(Fe))}),e.qZA()}if(2&u){const c=y.$implicit,m=e.oxw();e.Q6J("cvcMode",m.props.disabled?"default":"closeable")("cvcLabel",c)}}const bc=Vt(yn(),ml);let la=(()=>{class u extends bc{constructor(c){super(),this.cdr=c,this.defaultOptions={modelOptions:{updateOn:"blur"},props:{label:"Enter value",placeholder:"Enter value and hit Return"}},this.tags$=new st.x,this.values=new Set}onEnter(c){let m=c.target;m.value&&(this.values.add(m.value),m.value="");let G=Array.from(this.values);this.tags$.next(G),this.formControl.setValue(G)}tagClosed(c){this.values.delete(c);let m=Array.from(this.values);this.tags$.next(m),this.formControl.setValue(m),this.tags$.next(m)}ngAfterViewInit(){this.configureBaseField(),this.configureStringTagField(),this.formControl.value&&Array.isArray(this.formControl.value)&&(this.formControl.value.forEach(c=>this.values.add(c)),this.tags$.next(this.formControl.value),this.cdr.detectChanges())}}return u.\u0275fac=function(c){return new(c||u)(e.Y36(e.sBO))},u.\u0275cmp=e.Xpm({type:u,selectors:[["cvc-tag-input"]],features:[e.qOj],decls:5,vars:7,consts:[[3,"cvcMode","cvcLabel","cvcOnClose",4,"ngFor","ngForOf"],["nz-input","",3,"disabled","placeholder","keydown.enter"],["hidden","","nz-input","",3,"formControl","formlyAttributes"],[3,"cvcMode","cvcLabel","cvcOnClose"]],template:function(c,m){1&c&&(e.TgZ(0,"div"),e.YNc(1,_l,1,2,"cvc-string-tag",0),e.ALo(2,"ngrxPush"),e.TgZ(3,"input",1),e.NdJ("keydown.enter",function(Fe){return m.onEnter(Fe)}),e.qZA()(),e._UZ(4,"input",2)),2&c&&(e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,5,m.tags$)),e.xp6(2),e.Q6J("disabled",m.props.disabled)("placeholder",m.props.placeholder),e.xp6(1),e.Q6J("formControl",m.formControl)("formlyAttributes",m.field))},dependencies:[M.sg,t.Fj,t.JJ,t.oH,v.JD,Pe.Zp,vl,I.fM],changeDetection:0}),u})(),ks=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,Re.PV,Jt.X,Nt.s]}),u})();const yl={types:[{name:"tag-input",wrappers:["form-field"],component:la},{name:"tag-multi-input",wrappers:["form-field"],component:la,defaultOptions:{props:{isRepeatItem:!0}}}]};let Tu=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,t.UX,v.X0.forChild(yl),He.F,Pe.o7,s.U5,ks]}),u})();const Rs=Vt(yn()),Mu={types:[{name:"textarea",component:(()=>{class u extends Rs{constructor(){super(...arguments),this.defaultOptions={props:{label:"TEXTAREA!"}}}}return u.\u0275fac=function(){let y;return function(m){return(y||(y=e.n5z(u)))(m||u)}}(),u.\u0275cmp=e.Xpm({type:u,selectors:[["formly-field-nz-textarea"]],features:[e.qOj],decls:1,vars:3,consts:[["nz-input","",3,"rows","formControl","formlyAttributes"]],template:function(c,m){1&c&&e._UZ(0,"textarea",0),2&c&&e.Q6J("rows",m.props.rows?m.props.rows:2)("formControl",m.formControl)("formlyAttributes",m.field)},dependencies:[t.Fj,t.JJ,t.oH,v.JD,Pe.Zp],encapsulation:2,changeDetection:0}),u})(),wrappers:["form-field"]}]};let D1=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,t.UX,v.X0.forChild(Mu),Pe.o7,je]}),u})();var vs;function bu(u,y){1&u&&e._UZ(0,"span",7)}function O1(u,y){1&u&&e._UZ(0,"span",8)}const Su=function(){return[0,0]},Eu={name:void 0};let Ya=((vs=class{set cvcSearchString(y){y&&this.searchString$.next(y)}constructor(y,c){this.query=y,this.errors=c,this.cvcOnCreate=new e.vpe,this.model=Eu,this.form=new t.nJ({}),this.options={},this.onSubmit$=new st.x,this.searchString$=new Ge.X(void 0),this.queryMutator=new Jo.U(this.errors),this.isSubmitting$=new Ge.X(!1),this.submitSuccess$=new Ge.X(!1),this.submitError$=new Ge.X([]),this.addTherapyMutator=new Jo.U(this.errors),this.fields=[{key:"name",props:{hidden:!0,required:!0}}],this.searchString$.pipe((0,ae.t)(this)).subscribe(m=>{this.model.name=m}),this.onSubmit$.pipe((0,ae.t)(this)).subscribe(m=>{console.log("therapy-quick-add form model submitted.",m),this.submitTherapy(m)})}submitTherapy(y){if(!y.name)return void console.error("therapy-quick-add form submitTherapy requires model with valid name.");let c=this.addTherapyMutator.mutate(this.query,{name:y.name},{},m=>{console.log("therapy-quick-add submit data callback",m),m.addTherapy&&this.cvcOnCreate.next(m.addTherapy.therapy.id)});c.submitSuccess$.pipe((0,ae.t)(this)).subscribe(m=>{console.log("therapy-quick-add submitSuccess$",m),this.submitSuccess$.next(m)}),c.submitError$.pipe((0,ae.t)(this)).subscribe(m=>{console.log("therapy-quick-add submitError$",m),this.submitError$.next(m)}),c.isSubmitting$.pipe((0,ae.t)(this)).subscribe(m=>{this.isSubmitting$.next(m)})}}).\u0275fac=function(y){return new(y||vs)(e.Y36(An.Y_K),e.Y36(Ro.Y))},vs.\u0275cmp=e.Xpm({type:vs,selectors:[["cvc-therapy-quick-add-form"]],inputs:{cvcSearchString:"cvcSearchString"},outputs:{cvcOnCreate:"cvcOnCreate"},decls:14,vars:17,consts:[[3,"formGroup","ngSubmit"],[3,"nzGutter"],["nzSpan","24"],[3,"form","fields","model","options","modelChange"],["nz-button","","nzType","primary","nzBlock","",3,"disabled"],["nz-icon","","nzType","plus-circle","nzTheme","outline",4,"ngIf"],["nz-icon","","nzType","loading","nzTheme","outline",4,"ngIf"],["nz-icon","","nzType","plus-circle","nzTheme","outline"],["nz-icon","","nzType","loading","nzTheme","outline"]],template:function(y,c){1&y&&(e.TgZ(0,"form",0),e.NdJ("ngSubmit",function(){return c.onSubmit$.next(c.model)}),e.TgZ(1,"nz-row",1)(2,"nz-col",2)(3,"formly-form",3),e.NdJ("modelChange",function(G){return c.model=G}),e.qZA()(),e.TgZ(4,"nz-col",2)(5,"button",4),e.YNc(6,bu,1,0,"span",5),e.ALo(7,"ngrxPush"),e.YNc(8,O1,1,0,"span",6),e.ALo(9,"ngrxPush"),e._uU(10," Create Therapy\xa0"),e.TgZ(11,"i"),e._uU(12),e.ALo(13,"ngrxPush"),e.qZA()()()()()),2&y&&(e.Q6J("formGroup",c.form),e.xp6(1),e.Q6J("nzGutter",e.DdM(16,Su)),e.xp6(2),e.Q6J("form",c.form)("fields",c.fields)("model",c.model)("options",c.options),e.xp6(2),e.Q6J("disabled",!c.form.valid),e.xp6(1),e.Q6J("ngIf",!e.lcZ(7,10,c.isSubmitting$)),e.xp6(2),e.Q6J("ngIf",e.lcZ(9,12,c.isSubmitting$)),e.xp6(4),e.Oqu(e.lcZ(13,14,c.searchString$)))},dependencies:[M.O5,t._Y,t.JL,t.sg,v.T7,pn.ix,Wo.w,qo.dQ,Re.Ls,k.t3,k.SK,I.fM],encapsulation:2,changeDetection:0}),vs);Ya=(0,te.gn)([(0,ae.c)()],Ya);const Ua=["optionTemplates"];function Cl(u,y){if(1&u&&(e.ynx(0),e.TgZ(1,"strong"),e._uU(2,"NCIt ID:"),e.qZA(),e._UZ(3,"span",9),e.ALo(4,"highlightTypeahead"),e.BQk()),2&u){const c=e.oxw(2).$implicit,m=e.oxw().ngrxLet;e.xp6(3),e.Q6J("innerHtml",e.xi3(4,1,c.ncitId,m),e.oJD)}}function xu(u,y){if(1&u&&(e.ynx(0),e.TgZ(1,"strong"),e._uU(2,"Aliases: "),e.qZA(),e.TgZ(3,"em"),e._UZ(4,"span",10),e.ALo(5,"highlightTypeahead"),e.qZA(),e.BQk()),2&u){const c=e.oxw(2).$implicit,m=e.oxw().ngrxLet;e.xp6(4),e.Q6J("nzTooltipTitle",c.therapyAliases.join(", "))("innerHtml",e.xi3(5,2,c.therapyAliases.join(", "),m),e.oJD)}}function zl(u,y){if(1&u&&(e._UZ(0,"cvc-entity-tag",6),e.TgZ(1,"span",7),e.YNc(2,Cl,5,4,"ng-container",8),e.YNc(3,xu,6,5,"ng-container",8),e.qZA()),2&u){const c=e.oxw().$implicit,m=e.oxw().ngrxLet;e.Q6J("cvcDisableLink",!0)("cvcCacheId",c.__typename+":"+c.id)("cvcEmphasize",m),e.xp6(2),e.Q6J("ngIf",c.ncitId),e.xp6(1),e.Q6J("ngIf",c.therapyAliases.length>0)}}function w1(u,y){1&u&&(e.ynx(0),e.YNc(1,zl,4,5,"ng-template",null,5,e.W1O),e.BQk())}function Tl(u,y){if(1&u&&(e.ynx(0),e.YNc(1,w1,3,0,"ng-container",4),e.ALo(2,"ngrxPush"),e.BQk()),2&u){const c=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,c.result$))}}function P1(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"div",11)(1,"cvc-entity-tag",12),e.NdJ("cvcOnClose",function(){const Fe=e.CHM(c).$implicit,Et=e.oxw();return e.KtG(Et.onTagClose$.next(Fe.nzValue))}),e.qZA()()}if(2&u){const c=y.$implicit,m=e.oxw();e.xp6(1),e.Q6J("cvcCacheId","Therapy:"+c.nzValue)("cvcContext",m.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",m.props.isMultiSelect?"default":"closeable")}}function Du(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"cvc-therapy-quick-add-form",13),e.NdJ("cvcOnCreate",function(G){e.CHM(c);const Fe=e.oxw();return e.KtG(Fe.onPopulate$.next(G))}),e.qZA()}2&u&&e.Q6J("cvcSearchString",y.$implicit)}const Ou=Vt(yn(),Xo());let Ga=(()=>{class u extends Ou{constructor(c,m,G){super(),this.taq=c,this.tq=m,this.changeDetectorRef=G,this.defaultOptions={props:{entityName:{singular:"Therapy",plural:"Therapies"},isMultiSelect:!1,requireType:!0,tooltip:"Therapy or therapy combination which interacts with the specified variant",placeholder:"Search Therapies",requireTypePromptFn:(Fe,Et)=>`Select an ${Fe} Type to search associated Therapies`}},this.placeholder$=new Ge.X(void 0)}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEntitySelectField({typeaheadQuery:this.taq,typeaheadParam$:void 0,tagQuery:this.tq,getTypeaheadVarsFn:this.getTypeaheadVarsFn,getTypeaheadResultsFn:this.getTypeaheadResultsFn,getTagQueryVarsFn:this.getTagQueryVarsFn,getTagQueryResultsFn:this.getTagQueryResultsFn,getSelectedItemOptionFn:this.getSelectedItemOptionFn,getSelectOptionsFn:this.getSelectOptionsFn,changeDetectorRef:this.changeDetectorRef,selectOpen$:this.selectOpen$,selectComponent:this.selectComponent}),this.configurePlaceholders()}configureStateConnections(){if(this.state&&(this.stateEntityName=this.state.entityName,this.state.requires.requiresTherapy$?this.onRequiresTherapy$=this.state.requires.requiresTherapy$:console.warn(`${this.field.id} field's form provides a state, but could not find requiresTherapy$ subject to attach.`),this.props.requireType)){const c=`${this.stateEntityName.toLowerCase()}Type$`;this.state.fields[c]?this.onEntityType$=this.state.fields[c]:console.error(`${this.field.id} requireType is true, however form state does not provide Subject ${c}.`)}}configurePlaceholders(){this.placeholder$.next(this.props.placeholder),this.onRequiresTherapy$&&this.onEntityType$&&(0,Eo.a)([this.onRequiresTherapy$,this.onEntityType$]).pipe((0,mo.x)(),(0,ae.t)(this)).subscribe(([c,m])=>{!c&&m?(this.props.required=!1,this.props.disabled=!0,this.props.description=`${(0,xe.E)(m)} ${this.state.entityName} does not include associated therapies`,this.props.extraType="prompt",this.resetField(),this.cdr.markForCheck()):this.props.requireType&&!m?(this.props.required=!1,this.props.disabled=!0,this.props.description=this.props.requireTypePromptFn(this.state.entityName,this.props.isMultiSelect),this.props.extraType="prompt"):c?(this.props.required=!0,this.props.disabled=!1,this.props.description=void 0,this.props.extraType=void 0):(!c&&this.formControl.value||this.props.requireType&&!m&&this.formControl.value)&&(this.resetField(),console.log("HERE2"))})}getTypeaheadVarsFn(c){return{name:c}}getTypeaheadResultsFn(c){return c.data.therapyTypeahead}getTagQueryVarsFn(c){return{id:c}}getTagQueryResultsFn(c){return c.data.therapy}getSelectedItemOptionFn(c){return{value:c.id,label:c.name}}getSelectOptionsFn(c,m){return c.map((G,Fe)=>({label:m.get(Fe)||G.name,value:G.id}))}}return u.\u0275fac=function(c){return new(c||u)(e.Y36(An.cIw),e.Y36(An.sjj),e.Y36(e.sBO))},u.\u0275cmp=e.Xpm({type:u,selectors:[["cvc-therapy-select"]],viewQuery:function(c,m){if(1&c&&e.Gf(Ua,5,e.Rgc),2&c){let G;e.iGM(G=e.CRH())&&(m.optionTemplates=G)}},features:[e.qOj],decls:12,vars:26,consts:[[3,"cvcAddEntity","cvcCustomTemplate","cvcDisabled","cvcEntityName","cvcFormControl","cvcFormlyAttributes","cvcLoading","cvcOptions","cvcPlaceholder","cvcResults","cvcSelectMode","cvcShowError","cvcSelectOpen","cvcOnSearch","cvcOnOpenChange","cvcOnModelChange"],[4,"ngrxLet"],["selectedTemplate",""],["addTherapy",""],[4,"ngFor","ngForOf"],["optionTemplates",""],[3,"cvcDisableLink","cvcCacheId","cvcEmphasize"],["nz-typography","","nzType","secondary"],[4,"ngIf"],[3,"innerHtml"],["nz-typography","","nzType","secondary","nz-tooltip","",3,"nzTooltipTitle","innerHtml"],[1,"ant-select-selection-item-content"],[3,"cvcCacheId","cvcContext","cvcMode","cvcOnClose"],[3,"cvcSearchString","cvcOnCreate"]],template:function(c,m){if(1&c&&(e.TgZ(0,"cvc-entity-select",0),e.NdJ("cvcOnSearch",function(Fe){return m.onSearch$.next(Fe)})("cvcOnOpenChange",function(Fe){return m.onOpenChange$.next(Fe)})("cvcOnModelChange",function(Fe){return m.props.change&&m.props.change(m.field,Fe)}),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.ALo(3,"ngrxPush"),e.ALo(4,"ngrxPush"),e.ALo(5,"ngrxPush"),e.ALo(6,"ngrxPush"),e.qZA(),e.YNc(7,Tl,3,3,"ng-container",1),e.YNc(8,P1,2,3,"ng-template",null,2,e.W1O),e.YNc(10,Du,1,1,"ng-template",null,3,e.W1O)),2&c){const G=e.MAs(9),Fe=e.MAs(11);e.Q6J("cvcAddEntity",Fe)("cvcCustomTemplate",G)("cvcDisabled",m.onRequiresTherapy$&&!e.lcZ(1,14,m.onRequiresTherapy$))("cvcEntityName",m.props.entityName)("cvcFormControl",m.formControl)("cvcFormlyAttributes",m.field)("cvcLoading",e.lcZ(2,16,m.isLoading$))("cvcOptions",e.lcZ(3,18,m.selectOption$))("cvcPlaceholder",e.lcZ(4,20,m.placeholder$))("cvcResults",e.lcZ(5,22,m.result$))("cvcSelectMode",m.props.isMultiSelect?"multiple":"default")("cvcShowError",m.showError)("cvcSelectOpen",e.lcZ(6,24,m.selectOpen$)),e.xp6(7),e.Q6J("ngrxLet",m.onSearch$)}},dependencies:[M.sg,M.O5,I.eJ,et.SY,ge.ZU,Oo,Po.J,Ya,I.fM,w.A],changeDetection:0}),u})();const I1={types:[{name:"therapy-select",wrappers:["form-field"],component:Ga,defaultOptions:{props:{label:"Therapy"}}},{name:"therapy-multi-select",wrappers:["form-field"],component:Ga,defaultOptions:{props:{label:"Therapies",isMultiSelect:!0}}}]};let A1=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,t.UX,v.X0.forChild(I1),Mt.L,pn.sL,We.LV,co.$6,qn.Qp,Re.PV,Pe.o7,k.Jb,et.cg,$e.zf,s.U5,B.ic,ge.ZJ,Jt.X,je,Zt,Nt.s,ze.x]}),u})();const Sc=["optionTemplates"];function F1(u,y){if(1&u&&e._UZ(0,"cvc-attribute-tag",4),2&u){const c=e.oxw().$implicit;e.Q6J("cvcAttrValue",c)}}function N1(u,y){1&u&&(e.ynx(0),e.YNc(1,F1,1,1,"ng-template",null,3,e.W1O),e.BQk())}function L1(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"div",5)(1,"cvc-attribute-tag",6),e.NdJ("cvcOnClose",function(G){e.CHM(c);const Fe=e.oxw();return e.KtG(Fe.onTagClose$.next(G))}),e.qZA()()}if(2&u){const c=y.$implicit,m=e.oxw();e.xp6(1),e.Q6J("cvcAttrValue",c.nzValue)("cvcContext",m.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",m.props.isMultiSelect?"default":"closeable")}}const k1={DIAGNOSTIC:"Evidence pertains to a variant's impact on patient diagnosis (cancer subtype).",PREDICTIVE:"Evidence pertains to a variant's effect on therapeutic response.",PROGNOSTIC:"Evidence pertains to a variant's impact on disease progression, severity, or patient survival.",PREDISPOSING:"Evidence pertains to a germline variant's role in conferring susceptibility to disease (including pathogenicity evaluations).",ONCOGENIC:"Evidence pertains to a somatic variant's involvement in tumor pathogenesis as described by the Hallmarks of Cancer.",FUNCTIONAL:"Evidence pertains to a variant that alters biological function from the reference state."},R1=Vt(yn(),lt()),Qa={types:[{name:"type-select",wrappers:["form-field"],component:(()=>{class u extends R1{constructor(c){super(),this.cdr=c,this.defaultOptions={props:{label:"ENTITY_NAME Type",entityName:{singular:"Entity",plural:"Entities"},placeholder:"Select an ENTITY_NAME Type",isMultiSelect:!1}},this.typeEnums$=new Ge.X([])}ngAfterViewInit(){this.configureBaseField(),this.state&&this.state.formReady$?this.state.formReady$.pipe((0,De.h)(c=>c),(0,zi.q)(1),(0,ae.t)(this)).subscribe(c=>{this.configureField()}):this.configureField()}configureField(){this.onValueChange$.pipe((0,ae.t)(this)).subscribe(c=>{c?(this.props.description=k1[c],this.props.extraType="description"):(this.props.description=void 0,this.props.extraType=void 0)}),this.state?(this.props.placeholder=this.props.placeholder.replace("ENTITY_NAME",this.state.entityName),this.props.label=this.props.label.replace("ENTITY_NAME",this.state.entityName),this.props.tooltip=`Type of clinical outcome associated with the ${this.state.entityName} statement.`,this.state.enums.entityType$?(this.state.enums.entityType$.pipe((0,ae.t)(this)).subscribe(c=>{this.typeEnums$.next(c)}),this.optionTemplates||console.error(`${this.field.id} could not find its optionTemplates QueryList to populate its select options, so simple text labels will be displayed.`),this.optionTemplate$=this.optionTemplates?.changes.pipe((0,Ct.U)(c=>c.map(m=>m))),this.configureEnumSelect()):console.error(`${this.field.id} could not find state's enums.inputEnum$ to populate its select options.`)):console.error(`${this.field.id} requires a form state to configure itself, none was found.`)}configureEnumSelect(){this.configureEnumSelectField({optionEnum$:this.typeEnums$,optionTemplate$:this.optionTemplate$,changeDetectorRef:this.cdr})}}return u.\u0275fac=function(c){return new(c||u)(e.Y36(e.sBO))},u.\u0275cmp=e.Xpm({type:u,selectors:[["cvc-type-select"]],viewQuery:function(c,m){if(1&c&&e.Gf(Sc,5,e.Rgc),2&c){let G;e.iGM(G=e.CRH())&&(m.optionTemplates=G)}},features:[e.qOj],decls:6,vars:13,consts:[[3,"cvcFormControl","cvcFormlyAttributes","cvcSelectMode","cvcPlaceholder","cvcCustomTemplate","cvcOptions","cvcShowError","cvcDisabled"],[4,"ngFor","ngForOf"],["selectedTemplate",""],["optionTemplates",""],[3,"cvcAttrValue"],[1,"ant-select-selection-item-content"],[3,"cvcAttrValue","cvcContext","cvcMode","cvcOnClose"]],template:function(c,m){if(1&c&&(e._UZ(0,"cvc-enum-select",0),e.ALo(1,"ngrxPush"),e.YNc(2,N1,3,0,"ng-container",1),e.ALo(3,"ngrxPush"),e.YNc(4,L1,2,3,"ng-template",null,2,e.W1O)),2&c){const G=e.MAs(5);e.Q6J("cvcFormControl",m.formControl)("cvcFormlyAttributes",m.field)("cvcSelectMode",m.props.isMultiSelect?"multiple":"default")("cvcPlaceholder",m.props.placeholder)("cvcCustomTemplate",G)("cvcOptions",e.lcZ(1,9,m.selectOption$))("cvcShowError",m.showError)("cvcDisabled",m.props.disabled),e.xp6(2),e.Q6J("ngForOf",e.lcZ(3,11,m.typeEnums$))}},dependencies:[M.sg,_e,Ke,I.fM],changeDetection:0}),u})()}]};let ja=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,t.UX,v.X0.forChild(Qa),je,Ye,Be]}),u})();var Ml=a(6973);function Ec(u,y){const c="object"==typeof y;return new Promise((m,G)=>{let Et,Fe=!1;u.subscribe({next:Mn=>{Et=Mn,Fe=!0},error:G,complete:()=>{Fe?m(Et):c?m(y.defaultValue):G(new Ml.K)}})})}const Br={isDefaultCol:u=>"default"===u.type,isSelectCol:u=>"select"===u.type,isEntityTagCol:u=>"entity-tag"===u.type,isEnumTagCol:u=>"enum-tag"===u.type,isTextTagCol:u=>"text-tag"===u.type},El=u=>void 0!==u.sort,Dc=u=>void 0!==u.filter,Oc={diseases:An.pP7.DiseaseName,gene:An.pP7.EntrezSymbol,therapies:An.pP7.TherapyName,variant:An.pP7.VariantName},Au={diseases:"diseaseName",therapies:"therapyName",variant:"variantName",gene:"entrezSymbol",aliases:"variantAlias"},xl=["selected","id"];class Fu{constructor(){this.sortStreams=[],this.filterStreams=[],this.config=this.configureColumnStreams([{key:"selected",label:"Select",type:"select",width:"25px",align:"center",fixedLeft:!0,checkbox:{th:{showCheckbox:!1},td:{showCheckbox:!0}}},{key:"id",label:"ID",hidden:!0,type:"hidden",width:"0px"},{key:"variant",label:"Variant",type:"entity-tag",width:"215px",context:"variant",fixedLeft:!0,showStatus:!0,tag:{fullWidth:!0,truncateLabel:"200px"},sort:{default:"ascend"},filter:{inputType:"default",options:[{key:"Filter Variant Name",value:null}]}},{key:"aliases",label:"Aliases",type:"default",width:"150px",objectKey:"name",sort:{},filter:{inputType:"default",options:[{key:"Filter Aliases",value:null}]}},{key:"gene",label:"Gene",type:"entity-tag",width:"135px",tag:{truncateLabel:"125px"},sort:{},filter:{inputType:"default",options:[{key:"Filter Gene Name",value:null}]}},{key:"diseases",label:"Diseases",type:"entity-tag",width:"250px",sort:{},tag:{maxTags:1,truncateLabel:"175px"},filter:{inputType:"default",typename:"Therapy",options:[{key:"Filter Therapy Names",value:null}]}},{key:"therapies",label:"Therapies",type:"entity-tag",width:"275px",sort:{},tag:{maxTags:2,truncateLabel:"150px"},filter:{inputType:"default",typename:"Therapy",options:[{key:"Filter Therapy Names",value:null}]}}])}get(){return this.config}getSortStreams(){return this.sortStreams}getFilterStreams(){return this.filterStreams}getAttributeFilters(y,c){return y.getValues().map(G=>({text:(0,xe.E)(G),value:G,byDefault:c===G}))}configureColumnStreams(y){return y.forEach(c=>{const m=c;if(El(m)&&(m.sort.changes=new Ge.X({key:m.key,value:m.sort.default??null}),this.sortStreams.push(m.sort.changes)),Dc(m)){const G=m.filter.options.find(Fe=>Fe.byDefault)?.value;m.filter.changes=new Ge.X({key:m.key,value:G??null}),this.filterStreams.push(m.filter.changes)}}),y}}var _s;let wc=((_s=class{set cvcTableScrollerToIndex(y){void 0!==y&&this.scrollToIndex(y)}set cvcTableScrollerToOffset(y){void 0!==y&&this.scrollToIndex(y)}constructor(y){this.host=y,this.cvcTableScrollerOnScroll=new e.vpe,this.cvcTableScrollerOnFetch=new e.vpe,this.cvcTableScrollerTargetHeight=140,this.cvcTableScrollerFetchCount=50,this.onLoadThrottleTime=500,this.onScrollThrottleTime=250,this.onScrollDebounceTime=300}ngAfterViewInit(){if(!this.host||!this.host.cdkVirtualScrollViewport)throw new Error("cvcTableScroller directive could not obtain reference to host cdkVirtualScrollViewport.");this.viewport=this.host.cdkVirtualScrollViewport,this.scrolled$=this.viewport.elementScrolled(),this.rendered$=this.viewport.renderedRangeStream,this.rendered$.pipe((0,zn.P)()).subscribe(()=>this.viewport.checkViewportSize()),this.scrolled$.pipe((0,bi.p)(this.onScrollThrottleTime,Si.z,{leading:!0,trailing:!0}),(0,wo.b)(y=>this.cvcTableScrollerOnScroll.next("scroll")),(0,Co.b)(this.onScrollDebounceTime),(0,ae.t)(this)).subscribe(y=>{this.cvcTableScrollerOnScroll.next("stop")}),this.scrolled$.pipe((0,Ct.U)(y=>this.viewport.measureScrollOffset("bottom")),(0,Gn.G)(),(0,De.h)(([y,c])=>c<y&&c<this.cvcTableScrollerTargetHeight),(0,bi.p)(this.onLoadThrottleTime),(0,ae.t)(this)).subscribe(y=>{this.cvcTableScrollerOnScroll.next("bottom");try{this.loadMore(this.cvcTableScrollerPageInfo)}catch(c){console.error(c)}})}loadMore(y){const c=this.cvcTableScrollerQueryRef;if(!y&&c)throw new Error("table-scroll directive requires PageInfo to use provided QueryRef.");if(y&&!c)throw new Error("table-scroll directive requires valid QueryRef when PageInfo provided.");if(y&&c){const[m,G,Fe]=[this.cvcTableScrollerFetchCount,y.hasNextPage,y.endCursor];if(!m||!Fe)throw new Error("table-scroll PageInfo invalid.");if(!G)return;this.cvcTableScrollerOnFetch.next({first:m,after:Fe})}}scrollToIndex(y){const[c,m]=[this.host,this.host.cdkVirtualScrollViewport];if(!c||!m)throw new Error("table-scroll scrollToIndex() cannot find host viewport.");m.scrollToIndex(y)}scrollToOffset(y){const[c,m]=[this.host,this.host.cdkVirtualScrollViewport];if(!c||!m)throw new Error("table-scroll scrollToOffset() cannot find host viewport.");m.scrollToOffset(y)}}).\u0275fac=function(y){return new(y||_s)(e.Y36(jn.N8))},_s.\u0275dir=e.lG2({type:_s,selectors:[["","cvcTableScroller",""]],inputs:{cvcTableScrollerTargetHeight:"cvcTableScrollerTargetHeight",cvcTableScrollerQueryRef:"cvcTableScrollerQueryRef",cvcTableScrollerPageInfo:"cvcTableScrollerPageInfo",cvcTableScrollerFetchCount:"cvcTableScrollerFetchCount",cvcTableScrollerToIndex:"cvcTableScrollerToIndex",cvcTableScrollerToOffset:"cvcTableScrollerToOffset"},outputs:{cvcTableScrollerOnScroll:"cvcTableScrollerOnScroll",cvcTableScrollerOnFetch:"cvcTableScrollerOnFetch"}}),_s);function Nu(u,y){1&u&&e._UZ(0,"span",8)}function qi(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"span",9),e.NdJ("click",function(){e.CHM(c),e.oxw(2);const G=e.MAs(3),Fe=e.oxw();return G.value="",e.KtG(Fe.cvcModelChange.next(null))}),e.qZA()}}function Pc(u,y){if(1&u&&(e.YNc(0,Nu,1,0,"span",6),e.YNc(1,qi,1,0,"span",7)),2&u){e.oxw();const c=e.MAs(3);e.Q6J("ngIf",!c.value),e.xp6(1),e.Q6J("ngIf",c.value)}}function Dl(u,y){if(1&u){const c=e.EpF();e.ynx(0),e.TgZ(1,"nz-input-group",2)(2,"input",3,4),e.NdJ("ngModelChange",function(G){e.CHM(c);const Fe=e.oxw();return e.KtG(Fe.cvcModelChange.next(G))}),e.qZA()(),e.YNc(4,Pc,2,2,"ng-template",null,5,e.W1O),e.BQk()}if(2&u){const c=e.MAs(5),m=e.oxw();e.xp6(1),e.Q6J("nzSuffix",c),e.xp6(1),e.Q6J("placeholder",m.cvcPlaceholder)("ngModel",m.cvcModel)}}function Ic(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"nz-input-number-group",10)(1,"nz-input-number",11,4),e.NdJ("ngModelChange",function(G){e.CHM(c);const Fe=e.oxw();return e.KtG(Fe.cvcModelChange.next(""===G?null:G))}),e.qZA()()}if(2&u){const c=e.oxw();let m;e.xp6(1),e.Q6J("nzPlaceHolder",null!==(m=c.cvcPlaceholder)&&void 0!==m?m:"")("ngModel",c.cvcModel)("nzMin",1)("nzStep",1)}}wc=(0,te.gn)([(0,ae.c)()],wc);let Ki=(()=>{class u{constructor(){this.cvcModel=null,this.cvcModelChange=new e.vpe,this.cvcInputType="default"}}return u.\u0275fac=function(c){return new(c||u)},u.\u0275cmp=e.Xpm({type:u,selectors:[["cvc-variant-table-filter-input"]],inputs:{cvcModel:"cvcModel",cvcInputType:"cvcInputType",cvcPlaceholder:"cvcPlaceholder"},outputs:{cvcModelChange:"cvcModelChange"},decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["numericInput",""],["nzSize","small",3,"nzSuffix"],["nz-input","",3,"placeholder","ngModel","ngModelChange"],["filterInput",""],["suffixIcon",""],["nz-icon","","nzType","search","style","color: #ddd",4,"ngIf"],["nz-icon","","class","ant-input-clear-icon","nzTheme","fill","nzType","close-circle",3,"click",4,"ngIf"],["nz-icon","","nzType","search",2,"color","#ddd"],["nz-icon","","nzTheme","fill","nzType","close-circle",1,"ant-input-clear-icon",3,"click"],["nzSize","small"],[2,"width","100%",3,"nzPlaceHolder","ngModel","nzMin","nzStep","ngModelChange"]],template:function(c,m){if(1&c&&(e.YNc(0,Dl,6,3,"ng-container",0),e.YNc(1,Ic,3,4,"ng-template",null,1,e.W1O)),2&c){const G=e.MAs(2);e.Q6J("ngIf","default"===m.cvcInputType)("ngIfElse",G)}},dependencies:[M.O5,t.Fj,t.JJ,t.On,Wo.w,Re.Ls,Pe.Zp,Pe.gB,Pe.ke,Un._V,Un.Rb]}),u})();function da(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"li",5),e.NdJ("click",function(){const Fe=e.CHM(c).$implicit,Et=e.oxw();return e.KtG(Et.cvcOptionChange.next({key:Et.cvcColumnKey,value:Fe.value}))}),e._UZ(1,"cvc-attribute-tag",6),e.qZA()}if(2&u){const c=y.$implicit,m=e.oxw();e.Q6J("nzSelected",(null==m.cvcOption?null:m.cvcOption.value)===c.value),e.xp6(1),e.Q6J("cvcFullWidth",!0)("cvcChecked",(null==m.cvcOption?null:m.cvcOption.value)===c.value)("cvcAttrValue",c.value)}}let Ol=(()=>{class u{constructor(){this.cvcOptionChange=new e.vpe}}return u.\u0275fac=function(c){return new(c||u)},u.\u0275cmp=e.Xpm({type:u,selectors:[["cvc-variant-enum-filter-menu"]],inputs:{cvcColumnKey:"cvcColumnKey",cvcFilterOptions:"cvcFilterOptions",cvcOption:"cvcOption"},outputs:{cvcOptionChange:"cvcOptionChange"},decls:6,vars:2,consts:[["nz-menu",""],["nz-menu-item","",3,"nzSelected","click",4,"ngFor","ngForOf"],[2,"padding","3px"],["nz-button","","nzType","default","nzBlock","","nzSize","small",3,"disabled","click"],["nz-icon","","nzType","retweet","nzTheme","outline"],["nz-menu-item","",3,"nzSelected","click"],["cvcContext","menu-item",3,"cvcFullWidth","cvcChecked","cvcAttrValue"]],template:function(c,m){1&c&&(e.TgZ(0,"ul",0),e.YNc(1,da,2,4,"li",1),e.TgZ(2,"li",2)(3,"button",3),e.NdJ("click",function(){return m.cvcOptionChange.next({key:m.cvcColumnKey,value:null})}),e._UZ(4,"span",4),e._uU(5," Reset "),e.qZA()()()),2&c&&(e.xp6(1),e.Q6J("ngForOf",m.cvcFilterOptions),e.xp6(2),e.Q6J("disabled",null===(null==m.cvcOption?null:m.cvcOption.value)))},dependencies:[M.sg,_e,pn.ix,Wo.w,qo.dQ,Re.Ls,es.wO,es.r9],styles:[".typeahead-match[_ngcontent-%COMP%]{font-weight:700}[_nghost-%COMP%]     ul li:hover{background-color:#e6f7ff}[_nghost-%COMP%]     ul li.ant-dropdown-menu-item-selected{background-color:#1890ff}[_nghost-%COMP%]     ul li.ant-dropdown-menu-item-selected:active{background-color:#096dd9}"],changeDetection:0}),u})();var ys;function wd(u,y){if(1&u&&e._UZ(0,"th",14),2&u){const c=y.ngIf;let m;e.Q6J("nzShowCheckbox",c.checkbox.th.showCheckbox||!1)("nzWidth",c.width)("nzAlign",null!==(m=c.align)&&void 0!==m?m:"left")("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1)}}function B1(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"th",15),e.NdJ("nzSortOrderChange",function(G){const Et=e.CHM(c).ngIf;return e.KtG(Et.sort.changes.next({key:Et.key,value:G}))}),e.ALo(1,"ngrxPush"),e.TgZ(2,"span",16),e._uU(3),e.qZA()()}if(2&u){const c=y.ngIf;let m,G;e.Q6J("nzColumnKey",c.key)("nzAlign",null!==(m=c.align)&&void 0!==m?m:"left")("nzWidth",c.width)("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1)("nzShowSort",void 0!==c.sort)("nzSortFn",!0)("nzSortOrder",(null==(G=e.lcZ(1,10,c.sort.changes))?null:G.value)||null),e.xp6(2),e.Q6J("nzTooltipTitle",c.tooltip),e.xp6(1),e.hij(" ",c.label," ")}}function Pd(u,y){if(1&u&&(e.TgZ(0,"th",17),e._uU(1),e.qZA()),2&u){const c=y.ngIf;let m;e.Q6J("nzColumnKey",c.key)("nzAlign",null!==(m=c.align)&&void 0!==m?m:"left")("nzWidth",c.width)("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1)("nzTooltipTitle",c.tooltip),e.xp6(1),e.hij(" ",c.label," ")}}function Lu(u,y){if(1&u&&(e.TgZ(0,"th",17),e._uU(1),e.qZA()),2&u){const c=y.ngIf;let m;e.Q6J("nzColumnKey",c.key)("nzAlign",null!==(m=c.align)&&void 0!==m?m:"left")("nzWidth",c.width)("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1)("nzTooltipTitle",c.tooltip),e.xp6(1),e.hij(" ",c.label," ")}}function H1(u,y){if(1&u&&(e.TgZ(0,"th",17),e._uU(1),e.qZA()),2&u){const c=y.ngIf;let m;e.Q6J("nzColumnKey",c.key)("nzAlign",null!==(m=c.align)&&void 0!==m?m:"left")("nzWidth",c.width)("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1)("nzTooltipTitle",c.tooltip),e.xp6(1),e.hij(" ",c.label," ")}}function ku(u,y){if(1&u&&(e.ynx(0),e.YNc(1,wd,1,5,"th",11),e.ALo(2,"guardType"),e.YNc(3,B1,4,12,"th",12),e.ALo(4,"guardType"),e.YNc(5,Pd,2,7,"th",13),e.ALo(6,"guardType"),e.YNc(7,Lu,2,7,"th",13),e.ALo(8,"guardType"),e.YNc(9,H1,2,7,"th",13),e.ALo(10,"guardType"),e.BQk()),2&u){const c=e.oxw().$implicit,m=e.oxw(2);e.xp6(1),e.Q6J("ngIf",e.xi3(2,5,c,m.colGuards.isSelectCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(4,8,c,m.colGuards.isEntityTagCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(6,11,c,m.colGuards.isEnumTagCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(8,14,c,m.colGuards.isTextTagCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(10,17,c,m.colGuards.isDefaultCol))}}function Id(u,y){if(1&u&&(e.ynx(0),e.YNc(1,ku,11,20,"ng-container",10),e.BQk()),2&u){const c=y.$implicit;e.xp6(1),e.Q6J("ngIf",!c.hidden)}}function $1(u,y){if(1&u&&(e.TgZ(0,"th",22),e._uU(1," \xa0 "),e.qZA()),2&u){const c=y.ngIf;let m;e.Q6J("nzColumnKey",c.key)("nzAlign",null!==(m=c.align)&&void 0!==m?m:"left")("nzWidth",c.width)("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1)}}function wl(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"cvc-variant-table-filter-input",25),e.NdJ("cvcModelChange",function(G){const Et=e.CHM(c).ngIf,Mn=e.oxw().ngIf;return e.KtG(Et.changes.next({key:Mn.key,value:G}))}),e.qZA()}if(2&u){const c=e.oxw().ngIf;e.Q6J("cvcInputType",c.filter.inputType)("cvcPlaceholder",c.filter.options[0].key)("cvcModel",c.filter.options[0].value)}}function Ac(u,y){if(1&u&&(e.TgZ(0,"th",23),e.YNc(1,wl,1,3,"cvc-variant-table-filter-input",24),e.qZA()),2&u){const c=y.ngIf;let m;e.Q6J("nzColumnKey",c.key)("nzWidth",c.width)("nzAlign",null!==(m=c.align)&&void 0!==m?m:"left")("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1),e.xp6(1),e.Q6J("ngIf",c.filter)}}function Y1(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"th",26,27),e.NdJ("nzSortOrderChange",function(G){const Et=e.CHM(c).ngIf;return e.KtG(Et.sort.changes.next({key:Et.key,value:G}))}),e.ALo(2,"ngrxPush"),e.TgZ(3,"nz-filter-trigger",28,29),e.ALo(5,"ngrxPush"),e._UZ(6,"span",30),e.qZA(),e.TgZ(7,"nz-dropdown-menu",null,31)(9,"cvc-variant-enum-filter-menu",32),e.NdJ("cvcOptionChange",function(G){const Et=e.CHM(c).ngIf,Mn=e.MAs(4);return Et.filter.changes.next(G),e.KtG(Mn.nzVisible=!1)}),e.ALo(10,"ngrxPush"),e.qZA()()()}if(2&u){const c=y.ngIf,m=e.MAs(8);let G,Fe,Et;e.Q6J("nzColumnKey",c.key)("nzWidth",c.width)("nzAlign",null!==(G=c.align)&&void 0!==G?G:"left")("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1)("nzShowSort",!0)("nzSortFn",!0)("nzSortOrder",(null==(Fe=e.lcZ(2,15,c.sort.changes))?null:Fe.value)||null)("nzShowFilter",void 0!==c.filter)("nzFilterFn",!0),e.xp6(3),e.Q6J("nzDropdownMenu",m)("nzActive",null!==(null==(Et=e.lcZ(5,17,c.filter.changes))?null:Et.value)),e.xp6(6),e.Q6J("cvcColumnKey",c.key)("cvcFilterOptions",c.filter.options)("cvcOption",e.lcZ(10,19,c.filter.changes))}}function pa(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"th",33,27)(2,"nz-filter-trigger",28),e.ALo(3,"ngrxPush"),e._UZ(4,"span",34),e.qZA(),e.TgZ(5,"nz-dropdown-menu",null,35)(7,"div",36)(8,"div",37)(9,"cvc-variant-table-filter-input",38),e.NdJ("cvcModelChange",function(G){const Et=e.CHM(c).ngIf;return e.KtG(Et.filter.changes.next({key:Et.key,value:G}))}),e.qZA()()()()()}if(2&u){const c=y.ngIf,m=e.MAs(6);let G,Fe;e.Q6J("nzColumnKey",c.key)("nzWidth",c.width)("nzAlign",null!==(G=c.align)&&void 0!==G?G:"left")("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1)("nzFilterFn",!0),e.xp6(2),e.Q6J("nzDropdownMenu",m)("nzActive",null!==(null==(Fe=e.lcZ(3,10,c.filter.changes))?null:Fe.value)),e.xp6(7),e.Q6J("cvcPlaceholder",c.filter.options[0].key)("cvcModel",c.filter.options[0].value)}}function Za(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"cvc-variant-table-filter-input",38),e.NdJ("cvcModelChange",function(G){const Et=e.CHM(c).ngIf,Mn=e.oxw().ngIf;return e.KtG(Et.changes.next({key:Mn.key,value:G}))}),e.qZA()}if(2&u){const c=e.oxw().ngIf;e.Q6J("cvcPlaceholder",c.filter.options[0].key)("cvcModel",c.filter.options[0].value)}}function U1(u,y){if(1&u&&(e.TgZ(0,"th",23),e.YNc(1,Za,1,2,"cvc-variant-table-filter-input",39),e.qZA()),2&u){const c=y.ngIf;let m;e.Q6J("nzColumnKey",c.key)("nzWidth",c.width)("nzAlign",null!==(m=c.align)&&void 0!==m?m:"left")("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1),e.xp6(1),e.Q6J("ngIf",c.filter)}}function Ru(u,y){if(1&u&&(e.ynx(0),e.YNc(1,$1,2,5,"th",18),e.ALo(2,"guardType"),e.YNc(3,Ac,2,6,"th",19),e.ALo(4,"guardType"),e.YNc(5,Y1,11,21,"th",20),e.ALo(6,"guardType"),e.YNc(7,pa,10,12,"th",21),e.ALo(8,"guardType"),e.YNc(9,U1,2,6,"th",19),e.ALo(10,"guardType"),e.BQk()),2&u){const c=e.oxw().$implicit,m=e.oxw(2);e.xp6(1),e.Q6J("ngIf",e.xi3(2,5,c,m.colGuards.isSelectCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(4,8,c,m.colGuards.isEntityTagCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(6,11,c,m.colGuards.isEnumTagCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(8,14,c,m.colGuards.isTextTagCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(10,17,c,m.colGuards.isDefaultCol))}}function Vu(u,y){if(1&u&&(e.ynx(0),e.YNc(1,Ru,11,20,"ng-container",10),e.BQk()),2&u){const c=y.$implicit;e.xp6(1),e.Q6J("ngIf",!c.hidden)}}function Pl(u,y){if(1&u&&(e.TgZ(0,"thead")(1,"tr",7),e.YNc(2,Id,2,1,"ng-container",8),e.qZA(),e.TgZ(3,"tr",9),e.YNc(4,Vu,2,1,"ng-container",8),e.qZA()()),2&u){const c=y.ngrxLet;e.xp6(2),e.Q6J("ngForOf",c),e.xp6(2),e.Q6J("ngForOf",c)}}function Vs(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"td",45),e.NdJ("nzCheckedChange",function(G){e.CHM(c);const Fe=e.oxw(3).$implicit,Et=e.oxw(2);return e.KtG(Et.onRowSelected$.next({id:Fe.id,selected:G}))}),e.qZA()}if(2&u){const c=y.ngIf,m=e.oxw(3).$implicit;let G;e.Q6J("nzChecked",m.selected)("nzAlign",null!==(G=c.align)&&void 0!==G?G:"left")("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1)}}function Fc(u,y){1&u&&e.GkF(0)}const Il=function(u,y,c){return{$implicit:u,config:y,emphasize:c}};function Al(u,y){if(1&u&&(e.ynx(0),e.YNc(1,Fc,1,0,"ng-container",51),e.ALo(2,"isArray"),e.ALo(3,"ngrxPush"),e.BQk()),2&u){const c=e.oxw().ngIf,m=e.oxw().ngIf,G=e.MAs(3),Fe=e.MAs(5),Et=e.oxw(3).$implicit;let Mn;e.xp6(1),e.Q6J("ngTemplateOutlet",e.lcZ(2,2,Et[c])?G:Fe)("ngTemplateOutletContext",e.kEZ(6,Il,Et[c],m,null==(Mn=e.lcZ(3,4,m.filter.changes))?null:Mn.value))}}function Ka(u,y){if(1&u&&(e.ynx(0),e.YNc(1,Al,4,10,"ng-container",50),e.BQk()),2&u){const c=y.ngIf;e.oxw();const m=e.MAs(7),G=e.oxw(3).$implicit;e.xp6(1),e.Q6J("ngIf",G[c])("ngIfElse",m)}}const Fl=function(u,y,c,m,G){return{tagList:u,tag:y,showPopover:c,status:m,emphasize:G}};function G1(u,y){if(1&u&&(e.ynx(0),e._UZ(1,"cvc-entity-collection-tag",53),e.BQk()),2&u){const c=e.oxw(2),m=c.config,G=c.$implicit,Fe=c.emphasize;e.oxw();const Et=e.MAs(5),Mn=e.oxw(5);e.xp6(1),e.Q6J("cvcCollectionTagConfig",e.qbA(3,Fl,G.slice(m.tag.maxTags,G.length),m.tag,!Mn.isScrolling,!0===m.showStatus?G.status:void 0,Fe))("cvcTagTemplate",Et)("cvcShowFullLabels",!0)}}function Q1(u,y){if(1&u&&(e.ynx(0),e._UZ(1,"cvc-entity-tag-list",52),e.YNc(2,G1,2,9,"ng-container",10),e.BQk()),2&u){const c=e.oxw(),m=c.config,G=c.$implicit,Fe=c.emphasize;e.oxw();const Et=e.MAs(5),Mn=e.oxw(5);e.xp6(1),e.Q6J("cvcTagTemplate",Et)("cvcTagListConfig",e.qbA(3,Fl,G.slice(0,m.tag.maxTags),m.tag,!Mn.isScrolling,!0===m.showStatus?G.status:void 0,Fe)),e.xp6(1),e.Q6J("ngIf",G.slice(m.tag.maxTags,G.length).length>0)}}function j1(u,y){if(1&u&&e.YNc(0,Q1,3,9,"ng-container",50),2&u){const c=y.$implicit;e.oxw();const m=e.MAs(7);e.Q6J("ngIf",c.length>0)("ngIfElse",m)}}function W1(u,y){if(1&u&&e._UZ(0,"cvc-entity-tag",54),2&u){const c=y.$implicit,m=y.config,G=y.emphasize,Fe=e.oxw(6);let Et;e.Q6J("cvcTruncateLabel",null==m.tag?null:m.tag.truncateLabel)("cvcLinkableEntity",c)("cvcEmphasize",G)("cvcShowPopover",!Fe.isScrolling)("cvcStatus",!0===m.showStatus?c.status:void 0)("cvcFullWidth",null!==(Et=null==m.tag?null:m.tag.fullWidth)&&void 0!==Et&&Et)}}function Z1(u,y){if(1&u&&e._UZ(0,"cvc-empty-value",55),2&u){const c=e.oxw().ngIf;e.Q6J("cvcEmptyCategory",c.emptyValueCategory||"unspecified")}}function Bu(u,y){if(1&u&&(e.TgZ(0,"td",46),e.YNc(1,Ka,2,2,"ng-container",10),e.YNc(2,j1,1,2,"ng-template",null,47,e.W1O),e.YNc(4,W1,1,6,"ng-template",null,48,e.W1O),e.YNc(6,Z1,1,1,"ng-template",null,49,e.W1O),e.qZA()),2&u){const c=y.ngIf;let m;e.Q6J("nzAlign",null!==(m=c.align)&&void 0!==m?m:"left")("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1),e.xp6(1),e.Q6J("ngIf",c.context||c.key)}}function Nl(u,y){if(1&u&&(e._UZ(0,"cvc-attribute-tag",58),e.ALo(1,"evidenceEnumDisplay")),2&u){const c=e.oxw().ngIf,m=e.oxw(3).$implicit,G=e.oxw(2);e.Q6J("cvcFullWidth",!0)("cvcAttrValue",m[c.key])("cvcTooltip",e.lcZ(1,3,!G.isScrolling&&m[c.key]))}}function Hu(u,y){if(1&u&&e._UZ(0,"cvc-empty-value",55),2&u){const c=e.oxw().ngIf;e.Q6J("cvcEmptyCategory",c.emptyValueCategory||"unspecified")}}function Ll(u,y){if(1&u&&(e.TgZ(0,"td",46),e.YNc(1,Nl,2,5,"cvc-attribute-tag",56),e.YNc(2,Hu,1,1,"ng-template",null,57,e.W1O),e.qZA()),2&u){const c=y.ngIf,m=e.MAs(3),G=e.oxw(3).$implicit;let Fe;e.Q6J("nzAlign",null!==(Fe=c.align)&&void 0!==Fe?Fe:"left")("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1),e.xp6(1),e.Q6J("ngIf",G[c.key])("ngIfElse",m)}}function K1(u,y){if(1&u&&(e.TgZ(0,"nz-tag",61),e._UZ(1,"span",62),e.qZA()),2&u){const c=e.oxw().ngIf,m=e.oxw(3).$implicit;e.Q6J("nzTooltipTitle",m[c.key])}}function J1(u,y){if(1&u&&e._UZ(0,"cvc-empty-value",55),2&u){const c=e.oxw().ngIf;e.Q6J("cvcEmptyCategory",c.emptyValueCategory||"unspecified")}}function kl(u,y){if(1&u&&(e.TgZ(0,"td",46),e.YNc(1,K1,2,1,"nz-tag",59),e.YNc(2,J1,1,1,"ng-template",null,60,e.W1O),e.qZA()),2&u){const c=y.ngIf,m=e.MAs(3),G=e.oxw(3).$implicit;let Fe;e.Q6J("nzAlign",null!==(Fe=c.align)&&void 0!==Fe?Fe:"left")("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1),e.xp6(1),e.Q6J("ngIf",G[c.key])("ngIfElse",m)}}function $u(u,y){1&u&&e.GkF(0)}const Cs=function(u,y){return{$implicit:u,emphasize:y}};function Rl(u,y){if(1&u&&(e.ynx(0),e.YNc(1,$u,1,0,"ng-container",51),e.ALo(2,"isArray"),e.ALo(3,"ngrxPush"),e.BQk()),2&u){const c=y.ngIf,m=e.oxw().ngIf,G=e.MAs(3),Fe=e.MAs(5);let Et;e.xp6(1),e.Q6J("ngTemplateOutlet",e.lcZ(2,2,c)?G:Fe)("ngTemplateOutletContext",e.WLB(6,Cs,c,null==(Et=e.lcZ(3,4,m.filter.changes))?null:Et.value))}}function Zn(u,y){1&u&&e.GkF(0)}function Di(u,y){1&u&&(e.ynx(0),e._uU(1,", "),e.BQk())}function Nc(u,y){if(1&u&&(e.ynx(0),e.YNc(1,Zn,1,0,"ng-container",51),e.YNc(2,Di,2,0,"ng-container",10),e.BQk()),2&u){const c=y.$implicit,m=y.last,G=e.oxw(2).emphasize;e.oxw();const Fe=e.MAs(5);e.xp6(1),e.Q6J("ngTemplateOutlet",Fe)("ngTemplateOutletContext",e.WLB(3,Cs,c,G)),e.xp6(1),e.Q6J("ngIf",!m)}}function Bs(u,y){if(1&u&&(e.ynx(0),e.YNc(1,Nc,3,6,"ng-container",8),e.BQk()),2&u){const c=e.oxw().$implicit;e.xp6(1),e.Q6J("ngForOf",c)}}function Lc(u,y){if(1&u&&e.YNc(0,Bs,2,1,"ng-container",50),2&u){const c=y.$implicit;e.oxw();const m=e.MAs(7);e.Q6J("ngIf",c.length>0)("ngIfElse",m)}}function Yu(u,y){if(1&u&&(e._UZ(0,"span",67),e.ALo(1,"highlightTypeahead")),2&u){const c=y.$implicit,m=y.emphasize,G=e.oxw().ngIf;e.Q6J("innerHtml",e.xi3(1,1,G.objectKey?c[G.objectKey]:c,m),e.oJD)}}function Vl(u,y){if(1&u&&e._UZ(0,"cvc-empty-value",55),2&u){const c=e.oxw().ngIf;e.Q6J("cvcEmptyCategory",c.emptyValueCategory||"unspecified")}}function zo(u,y){if(1&u&&(e.TgZ(0,"td",63),e.YNc(1,Rl,4,9,"ng-container",50),e.YNc(2,Lc,1,2,"ng-template",null,64,e.W1O),e.YNc(4,Yu,2,4,"ng-template",null,65,e.W1O),e.YNc(6,Vl,1,1,"ng-template",null,66,e.W1O),e.qZA()),2&u){const c=y.ngIf,m=e.MAs(7),G=e.oxw(3).$implicit;let Fe;e.Q6J("nzAlign",null!==(Fe=c.align)&&void 0!==Fe?Fe:"left")("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1),e.xp6(1),e.Q6J("ngIf",G[c.key])("ngIfElse",m)}}function Ja(u,y){if(1&u&&(e.ynx(0),e.YNc(1,Vs,1,4,"td",42),e.ALo(2,"guardType"),e.YNc(3,Bu,8,4,"td",43),e.ALo(4,"guardType"),e.YNc(5,Ll,4,5,"td",43),e.ALo(6,"guardType"),e.YNc(7,kl,4,5,"td",43),e.ALo(8,"guardType"),e.YNc(9,zo,8,5,"td",44),e.ALo(10,"guardType"),e.BQk()),2&u){const c=e.oxw().$implicit,m=e.oxw(3);e.xp6(1),e.Q6J("ngIf",e.xi3(2,5,c,m.colGuards.isSelectCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(4,8,c,m.colGuards.isEntityTagCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(6,11,c,m.colGuards.isEnumTagCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(8,14,c,m.colGuards.isTextTagCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(10,17,c,m.colGuards.isDefaultCol))}}function Bl(u,y){if(1&u&&(e.ynx(0),e.YNc(1,Ja,11,20,"ng-container",10),e.BQk()),2&u){const c=y.$implicit;e.xp6(1),e.Q6J("ngIf",!c.hidden)}}function qa(u,y){if(1&u&&(e.TgZ(0,"tr",41),e.YNc(1,Bl,2,1,"ng-container",8),e.qZA()),2&u){const c=e.oxw().ngrxLet;e.xp6(1),e.Q6J("ngForOf",c)}}function Xa(u,y){1&u&&(e.TgZ(0,"tbody"),e.YNc(1,qa,2,1,"ng-template",40),e.qZA())}function Hs(u,y){1&u&&e._UZ(0,"span",75)}function qr(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"span",76),e.NdJ("click",function(){e.CHM(c),e.oxw(2);const G=e.MAs(3),Fe=e.oxw().filter;return G.value="",e.KtG(Fe.changes.next({key:Fe.key,value:null}))}),e.qZA()}}function ha(u,y){if(1&u&&(e.YNc(0,Hs,1,0,"span",73),e.YNc(1,qr,1,0,"span",74)),2&u){e.oxw();const c=e.MAs(3);e.Q6J("ngIf",!c.value),e.xp6(1),e.Q6J("ngIf",c.value)}}function Hr(u,y){if(1&u){const c=e.EpF();e.ynx(0),e.TgZ(1,"nz-input-group",69)(2,"input",70,71),e.NdJ("nzFilterChange",function(G){e.CHM(c);const Fe=e.oxw().filter;return e.KtG(Fe.changes.next({key:Fe.key,value:G}))}),e.qZA()(),e.YNc(4,ha,2,2,"ng-template",null,72,e.W1O),e.BQk()}if(2&u){const c=e.MAs(5),m=e.oxw().filter;e.xp6(1),e.Q6J("nzSuffix",c),e.xp6(1),e.Q6J("placeholder",m.placeholder)("ngModel",m.defaultValue)}}function Hl(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"nz-input-number-group",77)(1,"nz-input-number",78,71),e.NdJ("ngModelChange",function(G){e.CHM(c);const Fe=e.oxw().filter;return e.KtG(Fe.changes.next({key:Fe.key,value:G}))}),e.qZA()()}if(2&u){const c=e.oxw().filter;e.xp6(1),e.Q6J("nzPlaceHolder",c.placeholder)("ngModel",c.defaultValue)("nzMin",1)("nzStep",1)}}function ec(u,y){if(1&u&&(e.YNc(0,Hr,6,3,"ng-container",50),e.YNc(1,Hl,3,4,"ng-template",null,68,e.W1O)),2&u){const c=y.filter,m=e.MAs(2);e.Q6J("ngIf",void 0===c.inputType||"default"===c.inputType)("ngIfElse",m)}}const $l=function(){return[6,6]};function kc(u,y){1&u&&(e.TgZ(0,"nz-row",79)(1,"nz-col")(2,"span"),e._uU(3,"Use checkboxes to select or deselect EIDs"),e.qZA()()()),2&u&&e.Q6J("nzGutter",e.DdM(1,$l))}function C(u,y){1&u&&(e.TgZ(0,"nz-tag",90),e._UZ(1,"i",91),e.TgZ(2,"span"),e._uU(3,"Loading\u2026"),e.qZA()())}const Je=function(u){return{$implicit:u}};function ee(u,y){if(1&u&&(e.TgZ(0,"nz-tag",94),e._UZ(1,"span",95),e.TgZ(2,"span",96),e._uU(3),e.qZA()()),2&u){e.oxw();const c=e.MAs(4),m=e.oxw().ngrxLet;e.xp6(2),e.Q6J("nzTooltipTitle",c)("nzTooltipTitleContext",e.VKq(3,Je,m.query)),e.xp6(1),e.hij(" Query Error",m.query.length>1?"s":""," ")}}function q1(u,y){if(1&u&&(e.TgZ(0,"nz-tag",94)(1,"span",96)(2,"span",97)(3,"strong"),e._uU(4),e.qZA()()()()),2&u){e.oxw();const c=e.MAs(4),m=e.oxw().ngrxLet;e.xp6(1),e.Q6J("nzTooltipTitle",c)("nzTooltipTitleContext",e.VKq(3,Je,m.network)),e.xp6(3),e.hij(" Network Error",m.query.length>1?"s":""," ")}}function X1(u,y){if(1&u&&(e.TgZ(0,"div"),e._uU(1),e.qZA()),2&u){const c=y.$implicit;e.xp6(1),e.hij(" ",c.message," ")}}function Uu(u,y){1&u&&e.YNc(0,X1,2,1,"div",8),2&u&&e.Q6J("ngForOf",y.$implicit)}function Yl(u,y){if(1&u&&(e.ynx(0),e.YNc(1,ee,4,5,"nz-tag",92),e.YNc(2,q1,5,5,"nz-tag",92),e.YNc(3,Uu,1,1,"ng-template",null,93,e.W1O),e.BQk()),2&u){const c=e.oxw().ngrxLet;e.xp6(1),e.Q6J("ngIf",c.query),e.xp6(1),e.Q6J("ngIf",c.network)}}function Rc(u,y){if(1&u&&(e.ynx(0),e.YNc(1,Yl,5,2,"ng-container",10),e.BQk()),2&u){const c=y.ngrxLet;e.xp6(1),e.Q6J("ngIf",c)}}function Ad(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"div",98)(1,"nz-checkbox-group",99),e.NdJ("ngModelChange",function(G){e.CHM(c);const Fe=e.oxw(2);return e.KtG(Fe.onPreferenceChange$.next(G))}),e.ALo(2,"ngrxPush"),e.qZA()()}if(2&u){const c=e.oxw(2);e.xp6(1),e.Q6J("ngModel",e.lcZ(2,1,c.setPreference$))}}function fa(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"nz-row",79)(1,"nz-col",80),e.YNc(2,C,4,0,"nz-tag",81),e.ALo(3,"ngrxPush"),e.ALo(4,"ngrxPush"),e._UZ(5,"cvc-no-more-rows",82),e.ALo(6,"ngrxPush"),e.qZA(),e.TgZ(7,"nz-col",80),e.YNc(8,Rc,2,1,"ng-container",3),e.qZA(),e.TgZ(9,"nz-col",80),e._UZ(10,"cvc-table-counts2",83),e.qZA(),e.TgZ(11,"nz-col",84)(12,"nz-button-group")(13,"button",85),e.NdJ("click",function(){e.CHM(c);const G=e.oxw();return e.KtG(G.onResetFilter$.next())}),e._UZ(14,"span",86),e.qZA(),e.TgZ(15,"button",87),e._UZ(16,"span",88),e.qZA()(),e.YNc(17,Ad,3,3,"ng-template",null,89,e.W1O),e.qZA()()}if(2&u){const c=e.MAs(18),m=e.oxw();e.Q6J("nzGutter",8),e.xp6(2),e.Q6J("ngIf",e.lcZ(3,7,m.loading$)&&e.lcZ(4,9,m.isFetchMore$)),e.xp6(3),e.Q6J("cvcShowTag",e.lcZ(6,11,m.noMoreRows$)),e.xp6(3),e.Q6J("ngrxLet",m.queryError$),e.xp6(2),e.Q6J("cvcTableCountsConnection",m.connection$),e.xp6(5),e.Q6J("nzPopoverContent",c)("nzPopoverTrigger","click")}}const Fd=function(){return[]},Vc=function(){return{x:"800px",y:"200px"}};let Ul=((ys=class{constructor(y,c,m){this.queryGQL=y,this.apollo=c,this.cdr=m,this.cvcSelectedIdsChange=new e.vpe,this.isScrolling=!1,this.colGuards=Br,this.onFetchMore$=new st.x,this.onPreferenceChange$=new Ge.X([]),this.onResetFilter$=new st.x,this.onRowSelected$=new st.x,this.onScroll$=new Ge.X("stop"),this.onSetSelectedRow$=new Ge.X(new Set),this.queryError$=new st.x,this.queryRequest$=new st.x,this.queryResult$=new _o.t(1),this.isFetchMore$=new Ge.X(!1),this.noMoreRows$=new Ge.X(!1),this.scrollToIndex$=new st.x,this.tableConfig=new Fu;const G=(0,Eo.a)(this.tableConfig.getFilterStreams()),Fe=(0,Eo.a)(this.tableConfig.getSortStreams()).pipe((0,De.h)(Et=>Et.filter(Mn=>null!==Mn.value).length<=1));this.refetch$=(0,Eo.a)([Fe,G]).pipe((0,Ct.U)(([Et,Mn])=>({query:"refetch",sort:Et,filter:Mn}))),this.fetchMore$=this.onFetchMore$.pipe((0,Ct.U)(Et=>({query:"fetchMore",fetchMore:{...Et}}))),(0,Fo.T)(this.refetch$,this.fetchMore$).pipe((0,Co.b)(50),(0,ae.t)(this)).subscribe(Et=>{const Mn=this.getQueryVars(Et);this.queryRef?(this.queryError$.next({}),"refetch"===Et.query?(this.isFetchMore$.next(!1),this.queryRef.refetch(Mn).then(kn=>{(kn.error||kn.errors)&&this.queryError$.next(this.getRequestErrors(kn))}).then(()=>{this.scrollToIndex$.next(0)})):(this.isFetchMore$.next(!0),this.queryRef.fetchMore({variables:Mn}).then(kn=>{(kn.error||kn.errors)&&this.queryError$.next(this.getRequestErrors(kn))}))):(this.isFetchMore$.next(!1),this.queryError$.next({}),this.queryRef=this.queryGQL.watch(Mn),this.queryRef.valueChanges.pipe((0,ae.t)(this)).subscribe(kn=>{this.queryResult$.next(kn),(kn.error||kn.errors)&&this.queryError$.next(this.getRequestErrors(kn))}))}),this.loading$=this.queryResult$.pipe((0,sn.j)("loading"),(0,mo.x)()),this.connection$=this.queryResult$.pipe((0,sn.j)("data","browseVariants"),(0,De.h)(So.ep)),this.pageInfo$=this.connection$.pipe((0,sn.j)("pageInfo"),(0,De.h)(So.ep)),this.row$=(0,Eo.a)([this.connection$.pipe((0,sn.j)("edges"),(0,De.h)(So.ep),(0,Ct.U)(Et=>Et.map(Mn=>Mn.node))),this.onSetSelectedRow$]).pipe((0,Ct.U)(([Et,Mn])=>Et.map(kn=>{if(kn)return{...kn,variant:{__typename:"Variant",id:kn.id,name:kn.name,link:kn.link},gene:{__typename:"Gene",id:kn.geneId,name:kn.geneName,link:kn.geneLink},selected:Mn.has(kn.id)}}))),this.col$=new Ge.X(this.tableConfig.get()),this.setPreference$=this.col$.pipe((0,Ct.U)(Et=>this.getColPrefsFromTableConfig(Et))),this.onPreferenceChange$.pipe((0,it.M)(this.col$),(0,Ct.U)(([Et,Mn])=>this.getTableConfigFromColPrefs(Et,Mn)),(0,ae.t)(this)).subscribe(Et=>{this.col$.next(Et)}),this.onSetTableFilter$=new Ge.X([]),this.onSetTableFilter$.pipe((0,ae.t)(this)).subscribe(Et=>{const Mn=this.col$.getValue();Et.forEach(kn=>{const $o=Mn.find(Bi=>Bi.key===kn.key);if(void 0!==$o.filter.inputType){const Bi=$o.filter.options[0];if(null===kn.value)return $o.filter.options=[{...Bi,value:null}],void $o.filter.changes.next(kn);if(Array.isArray(kn.value)&&0===kn.value.length)return $o.filter.options=[{...Bi,value:null}],void $o.filter.changes.next({...kn,value:null});let er;Array.isArray(kn.value)?kn.value.length>0&&(er=kn.value[0]):er=kn.value;const Kl=$o.filter.typename;if(!Kl||!er)return void console.error(`variant-manager requires column config '${$o.key}' provide a typename for cvcTablePrefs Input to set its filter`);const ac=this.getEntityName(Kl,er);if(!ac)return;$o.filter.options=[{...Bi,value:ac}],$o.filter.changes.next({...kn,value:ac})}else Dc($o)&&$o.filter.changes.next(kn)})}),this.onSetTablePref$=new Ge.X([]),this.onSetTablePref$.pipe((0,it.M)(this.setPreference$),(0,Ct.U)(([Et,Mn])=>{const kn=[];return Et.forEach($o=>{let Bi=Mn.find(er=>er.value===$o.value);Bi?kn.push({...Bi,...$o}):console.warn(`variant-manager onSetTablePref$ received updated preferences for column '${$o.value}', but a column with that key could not be found.`)}),kn}),(0,ae.t)(this)).subscribe(Et=>{this.onPreferenceChange$.next(Et)}),this.onRowSelected$.pipe((0,it.M)(this.onSetSelectedRow$),(0,ae.t)(this)).subscribe(([Et,Mn])=>{Et.selected?Mn.add(Et.id):Mn.delete(Et.id),this.onSetSelectedRow$.next(Mn),this.cvcSelectedIdsChange.next(Array.from(Mn))}),this.onScroll$.pipe((0,Ct.U)(Et=>"stop"!==Et),(0,mo.x)(),(0,ae.t)(this)).subscribe(Et=>{this.isScrolling=Et,this.cdr.detectChanges()}),this.onScroll$.pipe((0,De.h)(Et=>"bottom"===Et),(0,it.M)(this.pageInfo$),(0,Ct.U)(([Et,Mn])=>Mn),(0,ae.t)(this)).subscribe(Et=>{Et.hasNextPage||(this.noMoreRows$.next(!0),this.cdr.detectChanges(),setInterval(()=>this.noMoreRows$.next(!1)))})}ngAfterViewInit(){this.onResetFilter$.pipe((0,it.M)((0,Ko.of)(this.tableConfig.get())),(0,ae.t)(this)).subscribe(([y,c])=>{const m=[];c.forEach(G=>{if(El(G)&&G.sort.changes&&G.sort.changes.next({key:G.key,value:G.sort.default??null}),Dc(G)){const Fe=G.filter.options.find(Et=>1==Et.byDefault)?.value;G.filter.changes&&G.filter.changes.next({key:G.key,value:Fe||null})}m.push(G)}),this.col$.next(m)})}getQueryVars(y){const c=this.getQueryFilterParams(y);return{...this.getQuerySortParams(y),...c,...y.fetchMore}}getQuerySortParams(y){if(!y.sort)return;const m=y.sort.find(Fe=>null!==Fe.value);return m?{sortBy:{column:this.getSortColumnFromColKey(m.key),direction:"ascend"===m.value?An.SrV.Asc:An.SrV.Desc||void 0}}:void 0}getQueryFilterParams(y){let c={};return y.filter&&y.filter.forEach(m=>{c[Au[m.key]||m.key]=null===m.value||""===m.value?void 0:m.value}),c}getRequestErrors(y){return{query:y.errors,network:y.error}}getTableConfigFromColPrefs(y,c){return c.forEach(m=>{if(xl.find(Fe=>Fe===m.key))return;const G=y.find(Fe=>Fe.value===m.key);G&&(m.hidden=!G?.checked)}),[...c]}getColPrefsFromTableConfig(y){let c=[];return y.forEach(m=>{xl.find(G=>G===m.key)||c.push({label:m.tooltip||m.label,value:m.key,checked:!m.hidden})}),c}getSortColumnFromColKey(y){return Oc[y]}getEntityName(y,c){const m={id:`${y}:${c}`,fragment:Kn.Ps`
                fragment Linkable${y}Entity on ${y} {
                  id
                  name
                  link
                }`},G=this.apollo.client.readFragment(m);if(G)return G.name;console.error(`variant-manager onSetTableFilter$ could not find cached entity ${y}:${c} to populate input filter`)}trackByIndex(y,c){return c?.id}ngOnChanges(y){if(y.cvcTableSettings){const c=y.cvcTableSettings.currentValue;void 0!==c&&this.onSetTableFilter$.next(c.filters)}if(y.cvcSelectedIds){const c=y.cvcSelectedIds.currentValue,m=new Set;void 0!==c&&c.forEach(G=>m.add(G)),this.onSetSelectedRow$.next(m)}}}).\u0275fac=function(y){return new(y||ys)(e.Y36(An.XQi),e.Y36(yo._M),e.Y36(e.sBO))},ys.\u0275cmp=e.Xpm({type:ys,selectors:[["cvc-variant-manager"]],inputs:{cvcTableSettings:"cvcTableSettings",cvcSelectedIds:"cvcSelectedIds"},outputs:{cvcSelectedIdsChange:"cvcSelectedIdsChange"},features:[e.TTD],decls:16,vars:27,consts:[["nzSize","small",3,"nzTitle","nzExtra"],["cvcTableScroller","",3,"nzData","cvcTableScrollerQueryRef","cvcTableScrollerPageInfo","cvcTableScrollerToIndex","nzScroll","nzVirtualForTrackBy","nzVirtualItemSize","nzSize","nzFrontPagination","nzShowPagination","nzLoading","cvcTableScrollerOnScroll","cvcTableScrollerOnFetch"],["virtualTable",""],[4,"ngrxLet"],["columnFilterInput",""],["cardTitle",""],["extraTemplate",""],[1,"col-header-row"],[4,"ngFor","ngForOf"],[1,"filter-row"],[4,"ngIf"],[3,"nzShowCheckbox","nzWidth","nzAlign","nzLeft","nzRight",4,"ngIf"],[3,"nzColumnKey","nzAlign","nzWidth","nzLeft","nzRight","nzShowSort","nzSortFn","nzSortOrder","nzSortOrderChange",4,"ngIf"],["nz-tooltip","",3,"nzColumnKey","nzAlign","nzWidth","nzLeft","nzRight","nzTooltipTitle",4,"ngIf"],[3,"nzShowCheckbox","nzWidth","nzAlign","nzLeft","nzRight"],[3,"nzColumnKey","nzAlign","nzWidth","nzLeft","nzRight","nzShowSort","nzSortFn","nzSortOrder","nzSortOrderChange"],["nz-tooltip","",1,"col-header-label",3,"nzTooltipTitle"],["nz-tooltip","",3,"nzColumnKey","nzAlign","nzWidth","nzLeft","nzRight","nzTooltipTitle"],[3,"nzColumnKey","nzAlign","nzWidth","nzLeft","nzRight",4,"ngIf"],[3,"nzColumnKey","nzWidth","nzAlign","nzLeft","nzRight",4,"ngIf"],["class","attribute-filter","nzCustomFilter","",3,"nzColumnKey","nzWidth","nzAlign","nzLeft","nzRight","nzShowSort","nzSortFn","nzSortOrder","nzShowFilter","nzFilterFn","nzSortOrderChange",4,"ngIf"],["class","attribute-filter","nzCustomFilter","",3,"nzColumnKey","nzWidth","nzAlign","nzLeft","nzRight","nzFilterFn",4,"ngIf"],[3,"nzColumnKey","nzAlign","nzWidth","nzLeft","nzRight"],[3,"nzColumnKey","nzWidth","nzAlign","nzLeft","nzRight"],[3,"cvcInputType","cvcPlaceholder","cvcModel","cvcModelChange",4,"ngIf"],[3,"cvcInputType","cvcPlaceholder","cvcModel","cvcModelChange"],["nzCustomFilter","",1,"attribute-filter",3,"nzColumnKey","nzWidth","nzAlign","nzLeft","nzRight","nzShowSort","nzSortFn","nzSortOrder","nzShowFilter","nzFilterFn","nzSortOrderChange"],["enumTableFilter",""],[3,"nzDropdownMenu","nzActive"],["enumTagFilterTrigger",""],["nz-icon","","nzType","filter","nzTheme","fill"],["enumFilterMenu","nzDropdownMenu"],[3,"cvcColumnKey","cvcFilterOptions","cvcOption","cvcOptionChange"],["nzCustomFilter","",1,"attribute-filter",3,"nzColumnKey","nzWidth","nzAlign","nzLeft","nzRight","nzFilterFn"],["nz-icon","","nzType","search"],["textTagFilterMenu","nzDropdownMenu"],[1,"ant-table-filter-dropdown"],[1,"custom-input-dropdown"],[3,"cvcPlaceholder","cvcModel","cvcModelChange"],[3,"cvcPlaceholder","cvcModel","cvcModelChange",4,"ngIf"],["nz-virtual-scroll",""],[1,"data-row"],[3,"nzChecked","nzAlign","nzLeft","nzRight","nzCheckedChange",4,"ngIf"],[3,"nzAlign","nzLeft","nzRight",4,"ngIf"],["class","default-col-type",3,"nzAlign","nzLeft","nzRight",4,"ngIf"],[3,"nzChecked","nzAlign","nzLeft","nzRight","nzCheckedChange"],[3,"nzAlign","nzLeft","nzRight"],["entityTagList",""],["entityTag",""],["emptyEntityTagCell",""],[4,"ngIf","ngIfElse"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"cvcTagTemplate","cvcTagListConfig"],[3,"cvcCollectionTagConfig","cvcTagTemplate","cvcShowFullLabels"],[3,"cvcTruncateLabel","cvcLinkableEntity","cvcEmphasize","cvcShowPopover","cvcStatus","cvcFullWidth"],[3,"cvcEmptyCategory"],["cvcContext","compact",3,"cvcFullWidth","cvcAttrValue","cvcTooltip",4,"ngIf","ngIfElse"],["emptyEnumTagCell",""],["cvcContext","compact",3,"cvcFullWidth","cvcAttrValue","cvcTooltip"],["nz-tooltip","","style","width: 100%; cursor: help; color: #595959",3,"nzTooltipTitle",4,"ngIf","ngIfElse"],["emptyTextTagCell",""],["nz-tooltip","",2,"width","100%","cursor","help","color","#595959",3,"nzTooltipTitle"],["nz-icon","","nzType","align-left","nzTheme","outline"],[1,"default-col-type",3,"nzAlign","nzLeft","nzRight"],["staticList",""],["staticValue",""],["emptyDefaultCell",""],[3,"innerHtml"],["numericInput",""],["nzSize","small",3,"nzSuffix"],["nz-input","",3,"placeholder","ngModel","nzFilterChange"],["filterInput",""],["suffixIcon",""],["nz-icon","","nzType","search","style","color: #ddd",4,"ngIf"],["nz-icon","","class","ant-input-clear-icon","nzTheme","fill","nzType","close-circle",3,"click",4,"ngIf"],["nz-icon","","nzType","search",2,"color","#ddd"],["nz-icon","","nzTheme","fill","nzType","close-circle",1,"ant-input-clear-icon",3,"click"],["nzSize","small"],[2,"width","100%",3,"nzPlaceHolder","ngModel","nzMin","nzStep","ngModelChange"],[3,"nzGutter"],["nzFlex","auto"],["nzColor","processing",4,"ngIf"],[3,"cvcShowTag"],[3,"cvcTableCountsConnection"],["nzFlex","35px"],["nz-button","","type","button","nzType","default","nzSize","small",3,"click"],["nz-icon","","nzType","retweet","nzTheme","outline"],["nz-button","","nz-popover","","nzPopoverTitle","Visible Columns","type","button","nzType","default","nzSize","small",3,"nzPopoverContent","nzPopoverTrigger"],["nz-icon","","nzType","setting","nzTheme","outline"],["prefsPopover",""],["nzColor","processing"],["nz-icon","","nzType","sync","nzSpin",""],["nzColor","error","style","margin-left: 12px",4,"ngIf"],["queryError",""],["nzColor","error",2,"margin-left","12px"],["nz-icon","","nzType","question-circle","nzTheme","outline"],["nz-tooltip","",2,"cursor","help",3,"nzTooltipTitle","nzTooltipTitleContext"],["nz-typography",""],[1,"prefs-popover"],[3,"ngModel","ngModelChange"]],template:function(y,c){if(1&y&&(e.TgZ(0,"nz-card",0)(1,"nz-table",1,2),e.NdJ("cvcTableScrollerOnScroll",function(G){return c.onScroll$.next(G)})("cvcTableScrollerOnFetch",function(G){return c.onFetchMore$.next(G)}),e.ALo(3,"ngrxPush"),e.ALo(4,"ngrxPush"),e.ALo(5,"ngrxPush"),e.ALo(6,"ngrxPush"),e.ALo(7,"ngrxPush"),e.YNc(8,Pl,5,2,"thead",3),e.YNc(9,Xa,2,0,"tbody",3),e.qZA()(),e.YNc(10,ec,3,2,"ng-template",null,4,e.W1O),e.YNc(12,kc,4,2,"ng-template",null,5,e.W1O),e.YNc(14,fa,19,13,"ng-template",null,6,e.W1O)),2&y){const m=e.MAs(13),G=e.MAs(15);e.Q6J("nzTitle",m)("nzExtra",G),e.xp6(1),e.Q6J("nzData",e.lcZ(3,15,c.row$)||e.DdM(25,Fd))("cvcTableScrollerQueryRef",c.queryRef)("cvcTableScrollerPageInfo",e.lcZ(4,17,c.pageInfo$))("cvcTableScrollerToIndex",e.lcZ(5,19,c.scrollToIndex$))("nzScroll",e.DdM(26,Vc))("nzVirtualForTrackBy",c.trackByIndex)("nzVirtualItemSize",28)("nzSize","small")("nzFrontPagination",!1)("nzShowPagination",!1)("nzLoading",e.lcZ(6,21,c.loading$)&&!e.lcZ(7,23,c.isFetchMore$)),e.xp6(7),e.Q6J("ngrxLet",c.col$),e.xp6(1),e.Q6J("ngrxLet",c.col$)}},dependencies:[M.sg,M.O5,M.tP,Po.J,ct,Rn,_e,Se,Yt.P,ye.H,t.Fj,t.JJ,t.On,I.eJ,pn.ix,pn.fY,Wo.w,qo.dQ,k.t3,k.SK,Re.Ls,Pe.Zp,Pe.gB,Pe.ke,ge.ZU,In.bd,Ut.ub,Vn.RR,Un._V,Un.Rb,co.lU,jn.N8,jn.qD,jn.Uo,jn._C,jn.h7,jn.Om,jn.p0,jn.$Z,jn.zu,jn.qn,jn.Ql,jn.UX,jn.g6,Jt.j,et.SY,wc,Ki,Ol,or,K.Do,w.A,Ur,I.fM],styles:["[_nghost-%COMP%]{display:block}nz-card[_ngcontent-%COMP%]:first-of-type     .ant-card-body{padding:0;margin-top:1px}.table-info[_ngcontent-%COMP%]{margin-left:.5rem}tr.col-header-row[_ngcontent-%COMP%]   th.ant-table-cell[_ngcontent-%COMP%]{white-space:nowrap}tr.col-header-row[_ngcontent-%COMP%]   th.ant-table-cell.align-right[_ngcontent-%COMP%]     .ant-table-column-title{text-align:right}tr.filter-row[_ngcontent-%COMP%]   th.ant-table-cell[_ngcontent-%COMP%]{padding:3px 4px}tr.filter-row[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   nz-filter-trigger[_ngcontent-%COMP%]     span.ant-dropdown-trigger{margin-left:0;padding-right:12px}tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell[_ngcontent-%COMP%]{white-space:nowrap}tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell[_ngcontent-%COMP%]   .anticon.attribute-icon[_ngcontent-%COMP%]{color:#595959}tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell.overflow-ellipsis[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis}tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell.button-cell[_ngcontent-%COMP%]{padding:0}tr.data-row[_ngcontent-%COMP%]   td.align-right[_ngcontent-%COMP%], tr.col-header-row[_ngcontent-%COMP%]   th.ant-table-cell[_ngcontent-%COMP%]   .align-right[_ngcontent-%COMP%], tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell[_ngcontent-%COMP%]   .align-right[_ngcontent-%COMP%], tr.filter-row[_ngcontent-%COMP%]   th.ant-table-cell[_ngcontent-%COMP%]   .align-right[_ngcontent-%COMP%]{text-align:right}tr.data-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-of-type{padding-left:6px}tr.data-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-of-type   cvc-entity-tag[_ngcontent-%COMP%]{margin-left:6px}td.default-col-type[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis}.ant-table-filter-dropdown[_ngcontent-%COMP%]{padding:8px}.prefs-popover[_ngcontent-%COMP%]     nz-checkbox-group:first-of-type label{display:block}.prefs-popover[_ngcontent-%COMP%]     nz-checkbox-group:first-of-type label span{display:inline-block}"],changeDetection:0}),ys);var tc;function ma(u,y){if(1&u&&(e.ynx(0),e.TgZ(1,"span"),e._uU(2),e.qZA(),e.BQk()),2&u){const c=y.ngrxLet;e.xp6(2),e.Oqu(c.message)}}function Bc(u,y){if(1&u&&e._uU(0),2&u){const c=e.oxw();e.Oqu(c.successMessage)}}Ul=(0,te.gn)([(0,ae.c)()],Ul);const Gu=function(){return[0,0]};let ga=((tc=class{set cvcGeneId(y){y&&this.geneId$.next(y)}set cvcGeneName(y){y&&this.geneName$.next(y)}set cvcSearchString(y){y&&this.searchString$.next(y)}constructor(y,c){this.query=y,this.errors=c,this.cvcOnCreate=new e.vpe,this.form=new t.nJ({}),this.model={name:""},this.formLayout="horizontal",this.options={formState:{formLayout:this.formLayout}},this.onSubmit$=new st.x,this.searchString$=new Ge.X(void 0),this.geneName$=new Ge.X(void 0),this.geneId$=new Ge.X(void 0),this.formMessageDisplay$=new Ge.X({message:"Variant does not exist, create it?"}),this.queryMutator=new Jo.U(this.errors),this.addVariantMutator=new Jo.U(this.errors),this.minNameLength=3,this.fields=[{key:"geneId",hide:!0,props:{required:!0}},{key:"name",hide:!0,props:{minLength:this.minNameLength,required:!0}}],this.geneId$.pipe((0,ae.t)(this)).subscribe(m=>{this.model.geneId=m}),this.searchString$.pipe((0,ae.t)(this)).subscribe(m=>{this.model.name=m,this.formMessageDisplay$.next(void 0!==m&&m.length<this.minNameLength?{message:`New Variant name must be at least ${this.minNameLength} characters.`}:{message:`Variant '${m}' does not exist, create it?`})}),this.onSubmit$.pipe((0,ae.t)(this)).subscribe(m=>{console.log("variant-quick-add form model submitted.",m),this.submitVariant(m)})}submitVariant(y){y.name&&y.geneId?this.mutationState=this.addVariantMutator.mutate(this.query,{name:y.name,geneId:y.geneId},{},c=>{console.log("variant-quick-add submit data callback",c),c.addVariant&&(this.formMessageDisplay$.next({message:void 0}),setTimeout(()=>{c&&c.addVariant&&this.cvcOnCreate.next(c.addVariant.variant.id)},1e3))}):console.error("variant-quick-add form submitVariant requires model with valid name and geneId.")}ngOnChanges(y){if(y.cvcGeneId){const c=y.cvcGeneId.currentValue;this.geneId$.next(c),this.model={...this.model,geneId:c}}y.cvcGeneName&&this.geneName$.next(y.cvcGeneName.currentValue),y.cvcSearchString&&(this.model={...this.model,name:y.cvcSearchString.currentValue})}}).\u0275fac=function(y){return new(y||tc)(e.Y36(An.MCG),e.Y36(Ro.Y))},tc.\u0275cmp=e.Xpm({type:tc,selectors:[["cvc-variant-quick-add-form"]],inputs:{cvcGeneId:"cvcGeneId",cvcGeneName:"cvcGeneName",cvcSearchString:"cvcSearchString"},outputs:{cvcOnCreate:"cvcOnCreate"},features:[e.TTD],decls:18,vars:17,consts:[[4,"ngrxLet"],["entityType","Variant",3,"mutationState","successMessage"],["success",""],[3,"formGroup","ngSubmit"],[3,"nzGutter"],["nzSpan","24"],[3,"form","fields","model","options","modelChange"],["nz-button","","nzType","primary","nzBlock","",3,"disabled"]],template:function(y,c){if(1&y&&(e.YNc(0,ma,3,1,"ng-container",0),e.TgZ(1,"cvc-form-submission-status-display",1),e.YNc(2,Bc,1,1,"ng-template",null,2,e.W1O),e.TgZ(4,"form",3),e.NdJ("ngSubmit",function(){return c.onSubmit$.next(c.model)}),e.TgZ(5,"nz-row",4)(6,"nz-col",5)(7,"formly-form",6),e.NdJ("modelChange",function(G){return c.model=G}),e.qZA()(),e.TgZ(8,"nz-col",5)(9,"button",7),e._uU(10," Add\xa0 "),e.TgZ(11,"strong"),e._uU(12),e.ALo(13,"ngrxPush"),e.qZA(),e._uU(14," \xa0Variant\xa0"),e.TgZ(15,"i"),e._uU(16),e.ALo(17,"ngrxPush"),e.qZA()()()()()()),2&y){const m=e.MAs(3);e.Q6J("ngrxLet",c.formMessageDisplay$),e.xp6(1),e.Q6J("mutationState",c.mutationState)("successMessage",m),e.xp6(3),e.Q6J("formGroup",c.form),e.xp6(1),e.Q6J("nzGutter",e.DdM(16,Gu)),e.xp6(2),e.Q6J("form",c.form)("fields",c.fields)("model",c.model)("options",c.options),e.xp6(2),e.Q6J("disabled",!c.form.valid),e.xp6(3),e.Oqu(e.lcZ(13,12,c.geneName$)),e.xp6(4),e.Oqu(e.lcZ(17,14,c.searchString$))}},dependencies:[Ti.F,v.T7,t._Y,t.JL,I.eJ,pn.ix,Wo.w,qo.dQ,k.t3,k.SK,t.sg,I.fM],encapsulation:2,changeDetection:0}),tc);ga=(0,te.gn)([(0,ae.c)()],ga);const ed=["optionTemplates"],Qu=function(u,y){return{show:u,hide:y}};function va(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"nz-col",9)(1,"button",10),e.NdJ("click",function(){e.CHM(c);const G=e.oxw();return e.KtG(G.onShowMgrClick$.next())}),e._UZ(2,"span",11),e.ALo(3,"ngrxPush"),e.ALo(4,"ngrxPush"),e._uU(5," Manager "),e.qZA()()}if(2&u){const c=e.oxw();e.xp6(2),e.Q6J("ngClass",e.WLB(6,Qu,e.lcZ(3,2,c.showMgr$),!e.lcZ(4,4,c.showMgr$)))("nzType","caret-right")}}function _a(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"nz-col",12)(1,"cvc-variant-manager",13),e.NdJ("cvcSelectedIdsChange",function(G){e.CHM(c);const Fe=e.oxw();return e.KtG(Fe.onPopulate$.next(G))}),e.ALo(2,"ngrxPush"),e.qZA()()}if(2&u){const c=e.oxw();e.xp6(1),e.Q6J("cvcSelectedIds",e.lcZ(2,1,c.onVid$))}}function ap(u,y){if(1&u&&(e.ynx(0),e.TgZ(1,"em"),e._UZ(2,"span",20),e.ALo(3,"highlightTypeahead"),e.qZA(),e.BQk()),2&u){const c=e.oxw(2).$implicit,m=e.oxw().ngrxLet;e.xp6(2),e.Q6J("nzTooltipTitle",c.variantAliases.join(", "))("innerHtml",e.xi3(3,2,c.variantAliases.join(", "),m),e.oJD)}}function cp(u,y){1&u&&e._uU(0,"--")}function Gl(u,y){if(1&u&&(e._UZ(0,"cvc-entity-tag",16),e.TgZ(1,"span",17)(2,"strong"),e._uU(3,"Aliases:"),e.qZA(),e.YNc(4,ap,4,5,"ng-container",18),e.YNc(5,cp,1,0,"ng-template",null,19,e.W1O),e.qZA()),2&u){const c=e.MAs(6),m=e.oxw().$implicit,G=e.oxw().ngrxLet;e.Q6J("cvcDisableLink",!0)("cvcCacheId",m.__typename+":"+m.id)("cvcEmphasize",G),e.xp6(4),e.Q6J("ngIf",m.variantAliases.length>0)("ngIfElse",c)}}function ya(u,y){1&u&&(e.ynx(0),e.YNc(1,Gl,7,5,"ng-template",null,15,e.W1O),e.BQk())}function zs(u,y){if(1&u&&(e.ynx(0),e.YNc(1,ya,3,0,"ng-container",14),e.ALo(2,"ngrxPush"),e.BQk()),2&u){const c=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,c.result$))}}function Hc(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"div",21)(1,"cvc-entity-tag",22),e.NdJ("cvcOnClose",function(){const Fe=e.CHM(c).$implicit,Et=e.oxw();return e.KtG(Et.onTagClose$.next(Fe.nzValue))}),e.qZA()()}if(2&u){const c=y.$implicit,m=e.oxw();e.xp6(1),e.Q6J("cvcCacheId","Variant:"+c.nzValue)("cvcContext",m.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",m.props.isMultiSelect?"default":"closeable")}}function lp(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"cvc-variant-quick-add-form",23),e.NdJ("cvcOnCreate",function(G){e.CHM(c);const Fe=e.oxw();return e.KtG(Fe.onPopulate$.next(G))}),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.qZA()}if(2&u){const c=y.$implicit,m=e.oxw();e.Q6J("cvcSearchString",c)("cvcGeneId",e.lcZ(1,3,m.onGeneId$))("cvcGeneName",e.lcZ(2,5,m.onGeneName$))}}const up=function(){return[6,6]},dp=Vt(yn(),Xo());let Nd=(()=>{class u extends dp{constructor(c,m,G,Fe){super(),this.taq=c,this.tq=m,this.geneQuery=G,this.changeDetectorRef=Fe,this.onModel$=new Yo.y,this.defaultOptions={props:{label:"Variant",placeholder:"Search Variants",requireGene:!0,requireGenePlaceholderFn:Et=>`Search ${Et} Variants`,requireGenePrompt:"Select a Gene to search its Variants",isMultiSelect:!1,entityName:{singular:"Variant",plural:"Variants"},showManagerBtn:!1,minSearchStrLength:0}},this.onGeneName$=new Ge.X(void 0),this.onVid$=new _o.t,this.onShowMgrClick$=new st.x,this.showMgr$=this.onShowMgrClick$.pipe((0,eo.R)((Et,Mn)=>!Et,!1))}ngAfterViewInit(){this.configureBaseField(),this.configureEntitySelectField({typeaheadQuery:this.taq,tagQuery:this.tq,getTypeaheadVarsFn:this.getTypeaheadVarsFn,getTypeaheadResultsFn:this.getTypeaheadResultsFn,getTagQueryVarsFn:this.getTagQueryVarsFn,getTagQueryResultsFn:this.getTagQueryResultsFn,getSelectedItemOptionFn:this.getSelectedItemOptionFn,getSelectOptionsFn:this.getSelectOptionsFn,changeDetectorRef:this.changeDetectorRef,selectOpen$:this.selectOpen$,selectComponent:this.selectComponent,minSearchStrLength:this.field.props.minSearchStrLength}),this.state&&this.state.formReady$?this.state.formReady$.pipe((0,De.h)(c=>c),(0,zi.q)(1),(0,ae.t)(this)).subscribe(c=>{this.configureField()}):this.configureField()}configureField(){this.configureStateConnections(),this.onVid$.pipe((0,ae.t)(this)).subscribe(),this.onVid$.next(this.formControl.value),this.onModel$=(0,Eo.a)([this.onGeneId$,this.onSearch$]).pipe((0,Ct.U)(([c,m])=>({geneId:c,name:m}))),this.onValueChange$.pipe((0,it.M)(this.onVid$),(0,ae.t)(this)).subscribe(([c,m])=>{Array.isArray(c)&&this.onVid$.next(c)})}configureStateConnections(){if(this.state&&this.props.requireGene){if(!this.state?.fields.geneId$)return void console.error(`${this.field.id} requireGene is set, but no geneId$ subject found on state.`);this.onGeneId$=this.state.fields.geneId$,this.onGeneId$.pipe((0,ae.t)(this)).subscribe(c=>{this.onGeneId(c)})}}getTypeaheadVarsFn(c){return{name:c,geneId:this.selectedGeneId}}getTypeaheadResultsFn(c){return c.data.variants.nodes}getTagQueryVarsFn(c){return{variantId:c}}getTagQueryResultsFn(c){return c.data.variant}getSelectedItemOptionFn(c){return{value:c.id,label:c.name}}getSelectOptionsFn(c,m){return c.map((G,Fe)=>({label:m.get(Fe)||G.name,value:G.id}))}showAddBehavior(c,m){const G=c.toLowerCase();return c.length>=3&&!m.some(Fe=>Fe.name.toLowerCase()===G)}onGeneId(c){this.selectedGeneId=c,!c&&this.props.requireGene?(this.resetField(),this.props.description=this.props.requireGenePrompt,this.props.placeholder="Select a Variant",this.props.extraType="prompt",this.onGeneName$.next(void 0)):c&&(this.props.description=void 0,this.props.extraType=void 0,Ec(this.geneQuery.fetch({geneId:c},{fetchPolicy:"cache-first"})).then(({data:m})=>{m?.gene?.name?(this.props.placeholder=this.props.requireGene?this.props.requireGenePlaceholderFn(m.gene.name):this.props.placeholder,this.onGeneName$.next(m.gene.name)):console.error(`${this.field.id} could not fetch gene name for Gene:${c}.`)}))}}return u.\u0275fac=function(c){return new(c||u)(e.Y36(An.nSb),e.Y36(An.dDn),e.Y36(An.DzV),e.Y36(e.sBO))},u.\u0275cmp=e.Xpm({type:u,selectors:[["ng-component"]],viewQuery:function(c,m){if(1&c&&e.Gf(ed,5,e.Rgc),2&c){let G;e.iGM(G=e.CRH())&&(m.optionTemplates=G)}},features:[e.qOj],decls:20,vars:41,consts:[[3,"nzGutter"],["nzFlex","auto"],["nz-tooltip","","nzTooltipTitle","Select a Gene to enable field.",3,"nzTooltipTrigger"],[3,"cvcAddEntity","cvcAddEntityModel","cvcAddEntityBehavior","cvcMinSearchStrLength","cvcSelectMode","cvcCustomTemplate","cvcFormControl","cvcFormlyAttributes","cvcEntityName","cvcPlaceholder","cvcResults","cvcDisabled","cvcOptions","cvcSelectOpen","cvcShowError","cvcLoading","cvcParamName","cvcOnSearch","cvcOnOpenChange","cvcOnModelChange"],["nzFlex","50px",4,"ngIf"],["nzSpan","24","class","manager-drawer",4,"ngIf"],[4,"ngrxLet"],["selectedTemplate",""],["addVariant",""],["nzFlex","50px"],["type","button","nz-button","","nzBlock","",1,"manager-button",3,"click"],["nz-icon","",3,"ngClass","nzType"],["nzSpan","24",1,"manager-drawer"],[3,"cvcSelectedIds","cvcSelectedIdsChange"],[4,"ngFor","ngForOf"],["optionTemplates",""],[3,"cvcDisableLink","cvcCacheId","cvcEmphasize"],["nz-typography","","nzType","secondary"],[4,"ngIf","ngIfElse"],["noAliases",""],["nz-typography","","nzType","secondary","nz-tooltip","",3,"nzTooltipTitle","innerHtml"],[1,"ant-select-selection-item-content"],[3,"cvcCacheId","cvcContext","cvcMode","cvcOnClose"],[3,"cvcSearchString","cvcGeneId","cvcGeneName","cvcOnCreate"]],template:function(c,m){if(1&c&&(e.TgZ(0,"nz-row",0)(1,"nz-col",1)(2,"span",2),e.ALo(3,"ngrxPush"),e.TgZ(4,"cvc-entity-select",3),e.NdJ("cvcOnSearch",function(Fe){return m.onSearch$.next(Fe)})("cvcOnOpenChange",function(Fe){return m.onOpenChange$.next(Fe)})("cvcOnModelChange",function(Fe){return m.props.change&&m.props.change(m.field,Fe)}),e.ALo(5,"ngrxPush"),e.ALo(6,"ngrxPush"),e.ALo(7,"ngrxPush"),e.ALo(8,"ngrxPush"),e.ALo(9,"ngrxPush"),e.ALo(10,"ngrxPush"),e.ALo(11,"ngrxPush"),e.qZA()()(),e.YNc(12,va,6,9,"nz-col",4),e.YNc(13,_a,3,3,"nz-col",5),e.ALo(14,"ngrxPush"),e.qZA(),e.YNc(15,zs,3,3,"ng-container",6),e.YNc(16,Hc,2,3,"ng-template",null,7,e.W1O),e.YNc(18,lp,3,7,"ng-template",null,8,e.W1O)),2&c){const G=e.MAs(17),Fe=e.MAs(19);e.Q6J("nzGutter",e.DdM(40,up)),e.xp6(2),e.Q6J("nzTooltipTrigger",m.props.requireGene&&!e.lcZ(3,22,m.onGeneId$)?"hover":null),e.xp6(2),e.Q6J("cvcAddEntity",Fe)("cvcAddEntityModel",e.lcZ(5,24,m.onModel$))("cvcAddEntityBehavior",m.showAddBehavior)("cvcMinSearchStrLength",m.props.minSearchStrLength)("cvcSelectMode",m.props.isMultiSelect?"multiple":"default")("cvcCustomTemplate",G)("cvcFormControl",m.formControl)("cvcFormlyAttributes",m.field)("cvcEntityName",m.props.entityName)("cvcPlaceholder",m.props.placeholder)("cvcResults",e.lcZ(6,26,m.result$))("cvcDisabled",m.props.requireGene&&!e.lcZ(7,28,m.onGeneId$))("cvcOptions",e.lcZ(8,30,m.selectOption$))("cvcSelectOpen",e.lcZ(9,32,m.selectOpen$))("cvcShowError",m.showError)("cvcLoading",e.lcZ(10,34,m.isLoading$))("cvcParamName",e.lcZ(11,36,m.onGeneName$)),e.xp6(8),e.Q6J("ngIf",m.props.showManagerBtn),e.xp6(1),e.Q6J("ngIf",e.lcZ(14,38,m.showMgr$)),e.xp6(2),e.Q6J("ngrxLet",m.onSearch$)}},dependencies:[M.mk,M.sg,M.O5,Oo,Po.J,I.eJ,pn.ix,Wo.w,qo.dQ,k.t3,k.SK,Re.Ls,ge.ZU,et.SY,Ul,ga,w.A,I.fM],styles:[".typeahead-match[_ngcontent-%COMP%]{font-weight:700}  nz-input-group{border-color:#d9d9d9!important}"],changeDetection:0}),u})();const pp={types:[{name:"variant-select",wrappers:["form-field"],component:Nd},{name:"variant-multi-select",wrappers:["form-field"],component:Nd,defaultOptions:{props:{label:"Variants",isMultiSelect:!0}}}]};let Ql=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,Zt,ze.x,je,Wn.g,Nt.s,Qn,ar,Ye,Xs,kr.M,xn.y,v.X0.forChild(pp),t.u5,Mt.L,B.ic,pn.sL,s.U5,k.Jb,Re.PV,Pe.o7,qn.Qp,We.LV,ge.ZJ,pn.sL,In.vh,Ut.Wr,Vn.b1,s.U5,k.Jb,Re.PV,Pe.o7,Un.Zf,co.$6,jn.HQ,Jt.X,et.cg,ge.ZJ,t.UX]}),u})();var td=a(9858),Xi=a(6976),nd=a(4194);const Ld=/\(/g,od=/\)/g,$c=/AND|OR/i,Ts=/^(?<not>NOT\s)?\s*#VID(?<variantId>\d+)$/i,Ms=/\s+/,ju="EXPR";function jl(u){return id(u.replace(Ld," ( ").replace(od," ) "))}function id(u){let c,y=u.split(Ms),m=0,G=[],Fe=[],Et=[];for(let zr of y)if("("==zr)0!=m&&G.push(zr),m+=1;else if(")"==zr)if(m-=1,0==m){let Tr=id(G.join(" "));if("errorMessage"in Tr)return Tr;Et.push(Tr),Fe.push(ju),G=[]}else G.push(zr);else m>0?G.push(zr):Fe.push(zr);const Mn={errorType:"trailingBoolean",errorMessage:"Expressions may not end with AND / OR boolean operators."},kn={errorType:"initialBoolean",errorMessage:"Expressions may not start with AND / OR boolean operators."},$o={errorType:"multipleBoolean",errorMessage:"Multiple boolean operators found."},Bi={errorType:"incompleteExpression",errorMessage:"Ensure that parenthetical clauses are closed."};let er=0;for(let zr of Fe){let Tr=$c.test(zr);if(Tr&&0==er)return kn;if(Tr&&er===y.length-1)return Mn;if(Tr&&!c)c=rd(zr);else if(Tr&&c&&rd(zr)!==c)return $o;er++}let Kl=[],ac=Fe.join(" ").split($c);for(let zr of ac.map(Tr=>Tr.trim())){let Tr=Ts.exec(zr);if(null===Tr){if(0===zr.length)return Bi;if("NOT"===zr||"NOT"===zr.split(" ").pop())return{errorType:"incompleteNOT",errorMessage:"NOT operator must be followed by a valid #VID."};if(zr!==ju)return{errorType:"invalidToken",errorMessage:`Token '${zr}' does not match the expected format.`}}else Kl.push({not:!!Tr[1],variantId:parseInt(Tr[2])})}return{booleanOperator:c,variantComponents:Kl,complexComponents:Et}}function rd(u){return"AND"==u.toUpperCase()?An._Wm.And:An._Wm.Or}var hp=a(5095);let kd=(()=>{class u{constructor(c){this.apollo=c,this.cvcOnSelect=new e.vpe,this.cvcOnVariantSelect=new e.vpe,this.modelChange$=new Ge.X(void 0),this.layout="horizontal",this.finderState={formLayout:this.layout,fields:{geneId$:new Ge.X(void 0),variantId$:new Ge.X(void 0),variantMolecularProfile$:new Ge.X(void 0)}},this.form=new t.nJ({}),this.model={geneId:void 0,variantId:void 0},this.options={formState:this.finderState},this.config=[{wrappers:["field-grid"],props:{grid:{cols:2}},fieldGroup:[{key:"geneId",type:"gene-select",props:{placeholder:"Select MP Gene",hideLabel:!0,layout:{showExtra:!1}}},{key:"variantId",type:"variant-select",props:{placeholder:"Select MP Variant",requireGene:!0,layout:{showExtra:!1},hideLabel:!0}}]}]}modelChange(c){if(!c?.variantId)return;const m=this.getSelectedVariant(c.variantId);m&&(this.model={geneId:void 0,variantId:void 0},this.cvcOnSelect.next(m.singleVariantMolecularProfile),this.cvcOnVariantSelect.next(m))}getSelectedVariant(c){if(!c)return;const m={id:`Variant:${c}`,fragment:yo.Ps`
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
      `};let G;try{G=this.apollo.client.readFragment(m)}catch(Fe){console.error(Fe)}if(G)return G;console.error("MpFinderForm could not resolve its Variant from the cache")}}return u.\u0275fac=function(c){return new(c||u)(e.Y36(yo._M))},u.\u0275cmp=e.Xpm({type:u,selectors:[["cvc-mp-finder"]],outputs:{cvcOnSelect:"cvcOnSelect",cvcOnVariantSelect:"cvcOnVariantSelect"},decls:2,vars:6,consts:[["nz-form","",3,"nzLayout","formGroup"],[3,"form","fields","model","options","modelChange"]],template:function(c,m){1&c&&(e.TgZ(0,"form",0)(1,"formly-form",1),e.NdJ("modelChange",function(Fe){return m.modelChange(Fe)}),e.qZA()()),2&c&&(e.Q6J("nzLayout",m.layout)("formGroup",m.form),e.xp6(1),e.Q6J("form",m.form)("fields",m.config)("model",m.model)("options",m.options))},dependencies:[t._Y,t.JL,t.sg,v.T7,s.Lr],styles:["[_nghost-%COMP%]{display:block;width:100%}"],changeDetection:0}),u})();function sd(u,y){1&u&&(e.ynx(0),e.TgZ(1,"p"),e._uU(2," The expression contains open parentheses. Please ensure that all parenthetical expressions are closed. "),e.qZA(),e.BQk())}function Wu(u,y){1&u&&(e.ynx(0),e.TgZ(1,"p"),e._uU(2," Complete the expression by appending a "),e.TgZ(3,"strong"),e._uU(4,"#VID"),e.qZA(),e._uU(5," token to the incomplete boolean expression. "),e.qZA(),e.BQk())}function ad(u,y){1&u&&(e.ynx(0),e.TgZ(1,"p"),e._uU(2," MP Expressions may not begin with an "),e.TgZ(3,"strong"),e._uU(4,"AND"),e.qZA(),e._uU(5," or "),e.TgZ(6,"strong"),e._uU(7,"OR"),e.qZA(),e._uU(8," boolean. Ensure the expression begins with a "),e.TgZ(9,"strong"),e._uU(10,"#VID"),e.qZA(),e._uU(11," or "),e.TgZ(12,"strong"),e._uU(13,"NOT #VID"),e.qZA(),e._uU(14," token. "),e.qZA(),e.BQk())}function fp(u,y){1&u&&(e.ynx(0),e.TgZ(1,"p"),e._uU(2," Molecular Profile expressions use a simple domain-specific language to specify complex MPs using boolean expressions to combine variants. These expressions may contain: "),e.qZA(),e.TgZ(3,"ul")(4,"li"),e._uU(5," Variant Tokens - "),e.TgZ(6,"strong"),e._uU(7,"#VID"),e.qZA(),e._uU(8," or "),e.TgZ(9,"strong"),e._uU(10,"NOT #VID"),e.qZA(),e._uU(11,'followed by a valid Variant ID, e.g. "#VID123" '),e.qZA(),e.TgZ(12,"li"),e._uU(13,"Boolean Tokens - "),e.TgZ(14,"strong"),e._uU(15,"AND"),e.qZA(),e._uU(16,", "),e.TgZ(17,"strong"),e._uU(18,"OR"),e.qZA()(),e.TgZ(19,"li"),e._uU(20," Parentheses - "),e.TgZ(21,"strong"),e._uU(22,"("),e.qZA(),e._uU(23," or "),e.TgZ(24,"strong"),e._uU(25,")"),e.qZA(),e._uU(26,", for grouping tokens into nested expressions "),e.qZA()(),e.TgZ(27,"p")(28,"strong"),e._uU(29,"Invalid Token"),e.qZA(),e._uU(30," errors occur if the parser encounters any text or token that does not match those listed above. "),e.qZA(),e.BQk())}function Zu(u,y){1&u&&(e.ynx(0),e.TgZ(1,"p"),e._uU(2," A single expression may not include more than one "),e.TgZ(3,"strong"),e._uU(4,"AND"),e.qZA(),e._uU(5," or "),e.TgZ(6,"strong"),e._uU(7,"OR"),e.qZA(),e._uU(8," boolean operator. To construct complex expressions, use parentheses. "),e.qZA(),e.TgZ(9,"p"),e._uU(10," For example, the expression "),e.TgZ(11,"strong"),e._uU(12,"#VID12 AND #VID2220 OR #VID456"),e.qZA(),e._uU(13," is invalid, but the expression "),e.TgZ(14,"strong"),e._uU(15,"#VID12 AND (#VID2220 OR #VID456)"),e.qZA(),e._uU(16," is valid. The parentheses create a nested expression independent of the outer expression. "),e.qZA(),e.BQk())}function mp(u,y){1&u&&(e.ynx(0),e.TgZ(1,"p"),e._uU(2," Complete the expression by appending a "),e.TgZ(3,"strong"),e._uU(4,"#VID"),e.qZA(),e._uU(5," token to the incomplete boolean expression. "),e.qZA(),e.BQk())}function Rd(u,y){1&u&&(e.ynx(0),e.TgZ(1,"p"),e._uU(2," The expression contains a Variant ID that cannot be matched to any Variant in the CIViC database. Please re-check the Variant ID, or create a new one by following these steps: "),e.qZA(),e.TgZ(3,"ol")(4,"li"),e._uU(5,"click the 'Variant' button,"),e.qZA(),e.TgZ(6,"li"),e._uU(7,"enter a Gene name, then select a Gene"),e.qZA(),e.TgZ(8,"li"),e._uU(9,"enter the Variant name"),e.qZA(),e.TgZ(10,"li"),e._uU(11," click the 'Create Variant' button that will appear if name does not match any CIViC Variants "),e.qZA()(),e.BQk())}function Vd(u,y){1&u&&(e.ynx(0),e.TgZ(1,"p"),e._uU(2," An expression may not contain multiple instances of the same Variant. Either remove the variant or change the expression. For example, "),e.TgZ(3,"strong"),e._uU(4,"(#VID123 AND #VID456) OR (#VID123 AND #VID789)"),e.qZA(),e._uU(5,", which is invalid, is logically identical to the valid MP expression "),e.TgZ(6,"strong"),e._uU(7,"#VID123 AND (#VID456 OR #VID789)"),e.qZA(),e._uU(8,". "),e.qZA(),e.BQk())}function cd(u,y){1&u&&(e.ynx(0),e.TgZ(1,"p"),e._uU(2," The Molecular Profile editor allows the selection or creation of complex Molecular Profiles by writing Molecular Profile Expressions. These expressions are composed with a simple language consisting of Variant tokens, boolean operators, and parentheses. For example: "),e.qZA(),e.TgZ(3,"blockquote")(4,"strong"),e._uU(5,"#VID12 AND #VID2220"),e.qZA(),e._UZ(6,"br"),e.TgZ(7,"strong"),e._uU(8,"#VID12 OR #VID2220"),e.qZA(),e._UZ(9,"br"),e.TgZ(10,"strong"),e._uU(11,"#VID12 AND NOT #VID2220"),e.qZA(),e._UZ(12,"br"),e.TgZ(13,"strong"),e._uU(14,"#VID12 AND #VID2220 AND (#VID456 OR #VID123)"),e.qZA(),e._UZ(15,"br"),e.TgZ(16,"strong"),e._uU(17,"#VID12 OR #VID2220 OR (NOT #VID456 AND #VID123)"),e.qZA(),e._UZ(18,"br"),e.qZA(),e.TgZ(19,"p")(20,"strong"),e._uU(21,"Variant Tokens"),e.qZA(),e._UZ(22,"br"),e._uU(23," Variant tokens are composed of a CIViC Variant ID prepended with "),e.TgZ(24,"strong"),e._uU(25,"#VID"),e.qZA(),e._uU(26,", and refer to specific CIViC Variants. For example, "),e.TgZ(27,"strong"),e._uU(28,"#VID12"),e.qZA(),e._uU(29," refers to "),e.TgZ(30,"strong"),e._uU(31,"BRAF V600E"),e.qZA(),e._uU(32,"; "),e.TgZ(33,"strong"),e._uU(34,"#VID2220"),e.qZA(),e._uU(35," refers to "),e.TgZ(36,"strong"),e._uU(37,"ALK FUSION"),e.qZA(),e._uU(38,". If you don\u2019t know the CIViC ID of a Variant, you can search for Variants by name using the \u2018Variant\u2019 or \u2018NOT Variant\u2019 buttons below. These interfaces can also be used to add a Variant that\u2019s not yet in CIViC. "),e.qZA(),e.TgZ(39,"p")(40,"strong"),e._uU(41,"Boolean Operators"),e.qZA(),e._UZ(42,"br"),e._uU(43," MP Expressions with more than a single variant must include boolean operators - "),e.TgZ(44,"strong"),e._uU(45,"AND"),e.qZA(),e._uU(46,", "),e.TgZ(47,"strong"),e._uU(48,"OR"),e.qZA(),e._uU(49,", and "),e.TgZ(50,"strong"),e._uU(51,"NOT"),e.qZA(),e._uU(52," - indicating their relationship. For example, the expression "),e.TgZ(53,"strong"),e._uU(54,"#VID12 AND #VID2220"),e.qZA(),e._uU(55," describes a MP that includes both "),e.TgZ(56,"strong"),e._uU(57,"BRAF V600E"),e.qZA(),e._uU(58," and "),e.TgZ(59,"strong"),e._uU(60,"ALK FUSION"),e.qZA(),e._uU(61,". "),e.qZA(),e.TgZ(62,"p")(63,"strong"),e._uU(64,"Parentheses"),e.qZA(),e._UZ(65,"br"),e._uU(66," Expressions cannot have both "),e.TgZ(67,"strong"),e._uU(68,"AND"),e.qZA(),e._uU(69," and "),e.TgZ(70,"strong"),e._uU(71,"OR"),e.qZA(),e._uU(72," operators within the same expression. To construct complex MPs that require multiple operators, one must use parentheses to create embedded expressions. "),e.qZA(),e.TgZ(73,"p")(74,"strong"),e._uU(75,"NOTE:"),e.qZA(),e._uU(76," Be sure to read the help text provided along with every alert message by hovering over 'Syntax Assistance'. "),e.qZA(),e.BQk())}let Wl=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275cmp=e.Xpm({type:u,selectors:[["cvc-mp-editor-popover-help"]],inputs:{cvcErrorType:"cvcErrorType"},decls:11,vars:9,consts:[[1,"help-content"],[3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"]],template:function(c,m){1&c&&(e.TgZ(0,"div",0),e.ynx(1,1),e.YNc(2,sd,3,0,"ng-container",2),e.YNc(3,Wu,6,0,"ng-container",2),e.YNc(4,ad,15,0,"ng-container",2),e.YNc(5,fp,31,0,"ng-container",2),e.YNc(6,Zu,17,0,"ng-container",2),e.YNc(7,mp,6,0,"ng-container",2),e.YNc(8,Rd,12,0,"ng-container",2),e.YNc(9,Vd,9,0,"ng-container",2),e.YNc(10,cd,77,0,"ng-container",3),e.BQk(),e.qZA()),2&c&&(e.xp6(1),e.Q6J("ngSwitch",m.cvcErrorType),e.xp6(1),e.Q6J("ngSwitchCase","incompleteExpression"),e.xp6(1),e.Q6J("ngSwitchCase","incompleteNOT"),e.xp6(1),e.Q6J("ngSwitchCase","initialBoolean"),e.xp6(1),e.Q6J("ngSwitchCase","invalidToken"),e.xp6(1),e.Q6J("ngSwitchCase","multipleBoolean"),e.xp6(1),e.Q6J("ngSwitchCase","trailingBoolean"),e.xp6(1),e.Q6J("ngSwitchCase","unknownVariant"),e.xp6(1),e.Q6J("ngSwitchCase","identicalVariants"))},dependencies:[M.RF,M.n9,M.ED],styles:[".help-content[_ngcontent-%COMP%]{max-width:500px}blockquote[_ngcontent-%COMP%]{margin-left:1em}"]}),u})();var bs;const ld=["expressionEditor"];function ud(u,y){1&u&&e._uU(0,"Added new Molecular Profile")}function gp(u,y){if(1&u&&e._UZ(0,"cvc-mp-tag-name",24),2&u){const c=e.oxw().ngrxLet;e.Q6J("nameSegments",c)}}function Ui(u,y){1&u&&(e.TgZ(0,"span",25),e._uU(1," Valid Molecular Profile expressions will be previewed here. "),e.qZA())}function Bd(u,y){if(1&u&&(e.ynx(0),e.YNc(1,gp,1,1,"cvc-mp-tag-name",22),e.YNc(2,Ui,2,0,"span",23),e.BQk()),2&u){const c=y.ngrxLet;e.xp6(1),e.Q6J("ngIf",c),e.xp6(1),e.Q6J("ngIf",!c)}}function Ku(u,y){1&u&&e._UZ(0,"cvc-mp-editor-popover-help")}function $s(u,y){if(1&u&&(e.TgZ(0,"button",28),e._UZ(1,"span",29),e._uU(2," GETTING STARTED "),e.qZA(),e.YNc(3,Ku,1,0,"ng-template",null,30,e.W1O)),2&u){const c=e.MAs(4);e.Q6J("nzPopoverContent",c)}}function dd(u,y){if(1&u&&(e.ynx(0),e._UZ(1,"nz-alert",26),e.YNc(2,$s,5,1,"ng-template",null,27,e.W1O),e.BQk()),2&u){const c=y.ngIf,m=e.MAs(3);e.xp6(1),e.Q6J("nzMessage",c)("nzAction",m)}}function vp(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"button",34),e.NdJ("click",function(){e.CHM(c);const G=e.oxw(3).ngrxLet,Fe=e.oxw();return e.KtG(Fe.cvcOnSelect.next(G))}),e._uU(1," Select this MP "),e.qZA()}}function Hd(u,y){if(1&u&&(e._uU(0," Molecular Profile "),e.TgZ(1,"strong"),e._uU(2),e.qZA(),e._uU(3," found. ")),2&u){const c=e.oxw(3).ngrxLet;e.xp6(2),e.Oqu(c.name)}}function $d(u,y){if(1&u&&(e.ynx(0),e._UZ(1,"nz-alert",31),e.YNc(2,vp,2,0,"ng-template",null,32,e.W1O),e.YNc(4,Hd,4,1,"ng-template",null,33,e.W1O),e.BQk()),2&u){const c=e.MAs(3),m=e.MAs(5);e.xp6(1),e.Q6J("nzMessage",m)("nzAction",c)}}function Ca(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"button",37),e.NdJ("click",function(){e.CHM(c);const G=e.oxw(4);return e.KtG(G.onCreateNewMp$.next())}),e._uU(1," Create New MP "),e.qZA()}}function pd(u,y){1&u&&e._uU(0," Molecular Profile not found, create it? ")}function Jp(u,y){if(1&u&&(e.ynx(0),e._UZ(1,"nz-alert",31),e.YNc(2,Ca,2,0,"ng-template",null,35,e.W1O),e.YNc(4,pd,1,0,"ng-template",null,36,e.W1O),e.BQk()),2&u){const c=e.MAs(3),m=e.MAs(5);e.xp6(1),e.Q6J("nzMessage",m)("nzAction",c)}}function qp(u,y){if(1&u&&(e.ynx(0),e.YNc(1,$d,6,2,"ng-container",6),e.YNc(2,Jp,6,2,"ng-container",6),e.BQk()),2&u){const c=e.oxw().ngrxLet;e.xp6(1),e.Q6J("ngIf",void 0!==c),e.xp6(1),e.Q6J("ngIf",void 0===c)}}function za(u,y){if(1&u&&(e.ynx(0),e.YNc(1,qp,3,2,"ng-container",6),e.ALo(2,"ngrxPush"),e.ALo(3,"ngrxPush"),e.BQk()),2&u){const c=e.oxw();e.xp6(1),e.Q6J("ngIf",!e.lcZ(2,1,c.expressionError$)&&!e.lcZ(3,3,c.expressionMessage$))}}function ci(u,y){if(1&u&&(e.TgZ(0,"button",40),e._UZ(1,"span",29),e._uU(2," SYNTAX ASSISTANCE "),e.qZA()),2&u){const c=e.oxw().helpContent;e.Q6J("nzPopoverContent",c)}}function Ju(u,y){if(1&u&&(e._UZ(0,"nz-alert",38),e.YNc(1,ci,3,1,"ng-template",null,39,e.W1O)),2&u){const c=y.$implicit,m=e.MAs(2);e.Q6J("nzMessage",c.errorMessage)("nzAction",m)}}function _p(u,y){1&u&&e.GkF(0)}function yp(u,y){1&u&&e._UZ(0,"cvc-mp-editor-popover-help",46)}const ti=function(u,y){return{$implicit:u,helpContent:y}};function Zl(u,y){if(1&u&&(e.ynx(0),e.YNc(1,_p,1,0,"ng-container",44),e.YNc(2,yp,1,0,"ng-template",null,45,e.W1O),e.BQk()),2&u){const c=e.MAs(3),m=e.oxw().ngIf;e.oxw();const G=e.MAs(14);e.xp6(1),e.Q6J("ngTemplateOutlet",G)("ngTemplateOutletContext",e.WLB(2,ti,m,c))}}function Cp(u,y){1&u&&e.GkF(0)}function Yd(u,y){1&u&&e._UZ(0,"cvc-mp-editor-popover-help",48)}function Ud(u,y){if(1&u&&(e.ynx(0),e.YNc(1,Cp,1,0,"ng-container",44),e.YNc(2,Yd,1,0,"ng-template",null,47,e.W1O),e.BQk()),2&u){const c=e.MAs(3),m=e.oxw().ngIf;e.oxw();const G=e.MAs(14);e.xp6(1),e.Q6J("ngTemplateOutlet",G)("ngTemplateOutletContext",e.WLB(2,ti,m,c))}}function hd(u,y){1&u&&e.GkF(0)}function Xp(u,y){1&u&&e._UZ(0,"cvc-mp-editor-popover-help",50)}function fd(u,y){if(1&u&&(e.ynx(0),e.YNc(1,hd,1,0,"ng-container",44),e.YNc(2,Xp,1,0,"ng-template",null,49,e.W1O),e.BQk()),2&u){const c=e.MAs(3),m=e.oxw().ngIf;e.oxw();const G=e.MAs(14);e.xp6(1),e.Q6J("ngTemplateOutlet",G)("ngTemplateOutletContext",e.WLB(2,ti,m,c))}}function zp(u,y){1&u&&e.GkF(0)}function md(u,y){1&u&&e._UZ(0,"cvc-mp-editor-popover-help",52)}function Gd(u,y){if(1&u&&(e.ynx(0),e.YNc(1,zp,1,0,"ng-container",44),e.YNc(2,md,1,0,"ng-template",null,51,e.W1O),e.BQk()),2&u){const c=e.MAs(3),m=e.oxw().ngIf;e.oxw();const G=e.MAs(14);e.xp6(1),e.Q6J("ngTemplateOutlet",G)("ngTemplateOutletContext",e.WLB(2,ti,m,c))}}function Qd(u,y){1&u&&e.GkF(0)}function nc(u,y){1&u&&e._UZ(0,"cvc-mp-editor-popover-help",54)}function Tp(u,y){if(1&u&&(e.ynx(0),e.YNc(1,Qd,1,0,"ng-container",44),e.YNc(2,nc,1,0,"ng-template",null,53,e.W1O),e.BQk()),2&u){const c=e.MAs(3),m=e.oxw().ngIf;e.oxw();const G=e.MAs(14);e.xp6(1),e.Q6J("ngTemplateOutlet",G)("ngTemplateOutletContext",e.WLB(2,ti,m,c))}}function gd(u,y){1&u&&e.GkF(0)}function qu(u,y){1&u&&e._UZ(0,"cvc-mp-editor-popover-help",56)}function T(u,y){if(1&u&&(e.ynx(0),e.YNc(1,gd,1,0,"ng-container",44),e.YNc(2,qu,1,0,"ng-template",null,55,e.W1O),e.BQk()),2&u){const c=e.MAs(3),m=e.oxw().ngIf;e.oxw();const G=e.MAs(14);e.xp6(1),e.Q6J("ngTemplateOutlet",G)("ngTemplateOutletContext",e.WLB(2,ti,m,c))}}function p(u,y){1&u&&e.GkF(0)}function h(u,y){1&u&&(e.ynx(0),e._UZ(1,"cvc-mp-editor-popover-help",58),e.BQk())}function g(u,y){1&u&&(e.ynx(0),e._UZ(1,"cvc-mp-editor-popover-help",59),e.BQk())}function z(u,y){if(1&u&&(e.YNc(0,h,2,0,"ng-container",6),e.YNc(1,g,2,0,"ng-container",6)),2&u){const c=e.oxw(2).ngIf;e.Q6J("ngIf",c.errorMessage.split(" ").includes("multiple")),e.xp6(1),e.Q6J("ngIf",c.errorMessage.split(" ").includes("found."))}}function E(u,y){if(1&u&&(e.ynx(0),e.YNc(1,p,1,0,"ng-container",44),e.YNc(2,z,2,2,"ng-template",null,57,e.W1O),e.BQk()),2&u){const c=e.MAs(3),m=e.oxw().ngIf;e.oxw();const G=e.MAs(14);e.xp6(1),e.Q6J("ngTemplateOutlet",G)("ngTemplateOutletContext",e.WLB(2,ti,m,c))}}function q(u,y){if(1&u&&(e.ynx(0),e.TgZ(1,"pre"),e._uU(2),e.ALo(3,"json"),e.qZA(),e.BQk()),2&u){const c=e.oxw().ngIf;e.xp6(2),e.hij("              ",e.lcZ(3,1,c),"\n            ")}}function ve(u,y){if(1&u&&(e.ynx(0)(1,41),e.YNc(2,Zl,4,5,"ng-container",42),e.YNc(3,Ud,4,5,"ng-container",42),e.YNc(4,fd,4,5,"ng-container",42),e.YNc(5,Gd,4,5,"ng-container",42),e.YNc(6,Tp,4,5,"ng-container",42),e.YNc(7,T,4,5,"ng-container",42),e.YNc(8,E,4,5,"ng-container",42),e.YNc(9,q,4,3,"ng-container",43),e.BQk()()),2&u){const c=y.ngIf;e.xp6(1),e.Q6J("ngSwitch",c.errorType),e.xp6(1),e.Q6J("ngSwitchCase","invalidToken"),e.xp6(1),e.Q6J("ngSwitchCase","trailingBoolean"),e.xp6(1),e.Q6J("ngSwitchCase","initialBoolean"),e.xp6(1),e.Q6J("ngSwitchCase","multipleBoolean"),e.xp6(1),e.Q6J("ngSwitchCase","incompleteExpression"),e.xp6(1),e.Q6J("ngSwitchCase","incompleteNOT"),e.xp6(1),e.Q6J("ngSwitchCase","queryError")}}function Ee(u,y){1&u&&(e.TgZ(0,"span",25),e._uU(1," Append: "),e.qZA())}function Xe(u,y){if(1&u&&(e.TgZ(0,"button",60)(1,"strong"),e._uU(2,"Variant"),e.qZA()()),2&u){e.oxw();const c=e.MAs(37);e.Q6J("nzPopoverContent",c)}}function ht(u,y){if(1&u&&(e.TgZ(0,"button",61)(1,"strong"),e._uU(2,"NOT Variant"),e.qZA()()),2&u){e.oxw();const c=e.MAs(39);e.Q6J("nzPopoverContent",c)}}function Dt(u,y){1&u&&(e.TgZ(0,"span",62),e._uU(1," | "),e.qZA())}function $t(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"button",63),e.NdJ("click",function(){e.CHM(c);const G=e.oxw();return e.KtG(G.onAppendInput$.next("AND"))}),e.TgZ(1,"strong"),e._uU(2,"AND"),e.qZA()()}}function Qt(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"button",63),e.NdJ("click",function(){e.CHM(c);const G=e.oxw();return e.KtG(G.onAppendInput$.next("OR"))}),e.TgZ(1,"strong"),e._uU(2,"OR"),e.qZA()()}}function Kt(u,y){1&u&&(e.TgZ(0,"span",62),e._uU(1," | "),e.qZA())}function Wt(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"button",63),e.NdJ("click",function(){e.CHM(c);const G=e.oxw();return e.KtG(G.onAppendInput$.next("("))}),e.TgZ(1,"strong"),e._uU(2,"("),e.qZA()()}}function mn(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"button",63),e.NdJ("click",function(){e.CHM(c);const G=e.oxw();return e.KtG(G.onAppendInput$.next(")"))}),e.TgZ(1,"strong"),e._uU(2,")"),e.qZA()()}}const En=function(){return[6,8]};function Hn(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"div",64)(1,"nz-row",2)(2,"nz-col",3)(3,"p",65),e._uU(4," Select a Gene and Variant to append its #VID. "),e.qZA()(),e.TgZ(5,"nz-col",3)(6,"cvc-mp-finder",66),e.NdJ("cvcOnVariantSelect",function(G){e.CHM(c);const Fe=e.oxw();return e.KtG(Fe.onVariantSelect$.next({variant:G,prependNot:!1}))}),e.qZA()()()()}2&u&&(e.xp6(1),e.Q6J("nzGutter",e.DdM(1,En)))}function nn(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"div",64)(1,"nz-row",2)(2,"nz-col",3)(3,"p",65),e._uU(4," Select a Gene and Variant to append its #VID, prepended with NOT boolean. "),e.qZA()(),e.TgZ(5,"nz-col",3)(6,"cvc-mp-finder",66),e.NdJ("cvcOnVariantSelect",function(G){e.CHM(c);const Fe=e.oxw();return e.KtG(Fe.onVariantSelect$.next({variant:G,prependNot:!0}))}),e.qZA()()()()}2&u&&(e.xp6(1),e.Q6J("nzGutter",e.DdM(1,En)))}function vn(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"nz-list-item")(1,"nz-list-item-meta")(2,"nz-list-item-meta-title"),e._UZ(3,"cvc-entity-tag",70),e.qZA(),e.TgZ(4,"nz-list-item-meta-description"),e._uU(5),e.qZA()(),e.TgZ(6,"ul",71)(7,"nz-list-item-action")(8,"button",72),e.NdJ("click",function(){const Fe=e.CHM(c).$implicit,Et=e.oxw(2);return e.KtG(Et.onSelectExample$.next(Fe))}),e._uU(9," Select "),e.qZA()()()()}if(2&u){const c=y.$implicit;e.xp6(3),e.Q6J("cvcLinkableEntity",c.mp),e.xp6(2),e.hij(" ",c.description," ")}}function $n(u,y){if(1&u&&(e.TgZ(0,"div",67)(1,"nz-list",68),e.YNc(2,vn,10,2,"nz-list-item",69),e.qZA()()),2&u){const c=e.oxw();e.xp6(2),e.Q6J("ngForOf",c.exampleExpressions)}}const Ln=function(u){return{active:u}};let no=((bs=class{constructor(y,c,m,G){this.previewMpGql=y,this.createMolecularProfileGql=c,this.mpEditorPrepopulate=m,this.networkErrorService=G,this.cvcOnSelect=new e.vpe,this.expressionMessages={initial:"Use the editor below to construct a molecular profile."},this.exampleExpressions=[{mp:{__typename:"MolecularProfile",id:9999,name:"BRAF V600E AND EGFR L858R AND EGFR T790M"},expression:"#VID12 AND #VID33 AND #VID34",description:"BRAF V600E, EGFR L858R, and EGFR T790M must all be observed."},{mp:{__typename:"MolecularProfile",id:9999,name:"BRAF V600E AND NOT EGFR L858R"},expression:"#VID12 AND NOT #VID33",description:"BRAF V600E must be observed and EGFR L858R must be absent."},{mp:{__typename:"MolecularProfile",id:9999,name:"BRAF V600E OR EGFR L858R OR EGFR T790M"},expression:"#VID12 OR #VID33 OR #VID34",description:"Either BRAF V600E, or EGFR L858R, or EGFR T790M must be observed."},{mp:{__typename:"MolecularProfile",id:9999,name:"BRAF V600E AND (EGFR L858R OR EGFR T790M)"},expression:"#VID12 AND (#VID33 OR #VID34)",description:"BRAF V600E must be observed and either EGFR L858R or EGFR T790M must be observed."},{mp:{__typename:"MolecularProfile",id:9999,name:"NOT KIT D816V"},expression:"NOT #VID4353",description:"KIT D816V must be absent."}],this.createMolecularProfileMutator=new Jo.U(this.networkErrorService),this.onInputChange$=new Ge.X(void 0),this.onAppendInput$=new st.x,this.onVariantSelect$=new st.x,this.onCreateNewMp$=new st.x,this.onSelectExample$=new st.x,this.inputValue$=new Ge.X(""),this.expressionError$=new Ge.X(void 0),this.expressionHelp$=new Ge.X(void 0),this.expressionMessage$=new Ge.X(this.expressionMessages.initial),this.expressionSegment$=new st.x,this.existingMp$=new st.x}ngAfterViewInit(){this.onInputChange$.pipe((0,Co.b)(250),(0,wo.b)(y=>{y||this.expressionSegment$.next(void 0)}),(0,De.h)(So.ep),(0,wo.b)(y=>{0===y.length&&(this.expressionMessage$.next(this.expressionMessages.initial),this.expressionError$.next(void 0))}),(0,De.h)(y=>y.length>0),(0,De.h)(y=>" "!==y[y.length-1]),(0,Ct.U)(y=>{let c=jl(y);return"errorMessage"in c?c:this.previewQueryRef.refetch({mpStructure:c})}),(0,ae.t)(this)).subscribe(y=>{if(this.isMpParseError(y)){const c=y;this.expressionMessage$.next(void 0),this.expressionError$.next(c),this.expressionSegment$.next(void 0)}else y.then(({data:m,errors:G})=>{if(G)this.expressionMessage$.next(void 0),this.expressionError$.next({errorType:"queryError",errorMessage:G.map(Fe=>Fe.message).join("\n")}),this.expressionSegment$.next(void 0);else{this.expressionSegment$.next(m.previewMolecularProfileName.segments),this.expressionMessage$.next(void 0),this.expressionError$.next(void 0);this.existingMp$.next(m.previewMolecularProfileName.existingMolecularProfile||void 0)}})}),this.onAppendInput$.pipe((0,ae.t)(this)).subscribe(y=>{if(this.expressionEditor){const c=this.expressionEditor.nativeElement,G=`${c.value}${/\s+$/.test(y)?y:" "+y}`;c.value=G,this.inputValue$.next(G),this.onInputChange$.next(G)}}),this.onSelectExample$.pipe((0,ae.t)(this)).subscribe(y=>{this.expressionEditor&&(this.expressionEditor.nativeElement.value=y.expression,this.inputValue$.next(y.expression),this.onInputChange$.next(y.expression))}),this.onVariantSelect$.pipe((0,it.M)(this.onInputChange$),(0,Ct.U)(([y,c])=>{const m=`${y.prependNot?"NOT ":""}#VID${y.variant.id}`;return c&&0!=c.trim().length?`${c.trim()} ${m}`:m}),(0,ae.t)(this)).subscribe(y=>{this.inputValue$.next(y),this.onInputChange$.next(y)}),this.previewQueryRef=this.previewMpGql.watch({}),this.previewMpName$=this.previewQueryRef.valueChanges.pipe((0,sn.j)("data","previewMolecularProfileName"),(0,De.h)(So.ep),(0,Ct.U)(y=>y.segments),(0,ae.t)(this)),this.previewMpAlreadyExists$=this.previewQueryRef.valueChanges.pipe((0,sn.j)("data","previewMolecularProfileName"),(0,De.h)(So.ep),(0,Ct.U)(y=>y.existingMolecularProfile),(0,ae.t)(this)),this.previewDeprecatedVariants$=this.previewQueryRef.valueChanges.pipe((0,sn.j)("data","previewMolecularProfileName"),(0,De.h)(So.ep),(0,Ct.U)(y=>y.deprecatedVariants),(0,ae.t)(this)),this.onCreateNewMp$.pipe((0,it.M)(this.onInputChange$),(0,ae.t)(this)).subscribe(([y,c])=>{if(!c||0===c.length)return;let m=jl(c);"errorMessage"in m||(this.state=this.createMolecularProfileMutator.mutate(this.createMolecularProfileGql,{mpStructure:m},{},G=>{setTimeout(()=>{G.createMolecularProfile&&this.cvcOnSelect.next(G.createMolecularProfile.molecularProfile)},1e3)}))})}isMpParseError(y){return void 0!==y.errorMessage}prepopulateMp(y){if(!y)return this.expressionSegment$.next(void 0),this.expressionMessage$.next(this.expressionMessages.initial),void this.inputValue$.next("");Ec(this.mpEditorPrepopulate.fetch({mpId:y},{fetchPolicy:"cache-first"})).then(({data:c})=>{if(!c?.molecularProfile?.id)return void console.error(`MpExpressionEditor could not fetch MolecularProfile:${y} to prepolate editor fields.`);const m=c.molecularProfile.rawName.replace(/#GID(\d+)/g,"").trim();this.inputValue$.next(m),this.onInputChange$.next(m)})}ngOnChanges(y){y.cvcPrepopulateWithId&&this.prepopulateMp(y.cvcPrepopulateWithId.currentValue)}}).\u0275fac=function(y){return new(y||bs)(e.Y36(An.mki),e.Y36(An.zpu),e.Y36(An.vjc),e.Y36(Ro.Y))},bs.\u0275cmp=e.Xpm({type:bs,selectors:[["cvc-mp-expression-editor"]],viewQuery:function(y,c){if(1&y&&e.Gf(ld,5),2&y){let m;e.iGM(m=e.CRH())&&(c.expressionEditor=m.first)}},inputs:{cvcPrepopulateWithId:"cvcPrepopulateWithId"},outputs:{cvcOnSelect:"cvcOnSelect"},features:[e.TTD],decls:42,vars:23,consts:[["entityType","Molecular Profile",3,"mutationState","successMessage"],["success",""],[3,"nzGutter"],["nzSpan","24"],[1,"expression-preview",3,"ngClass"],[4,"ngrxLet"],[4,"ngIf"],["errorAlert",""],["nz-input","","rows","1","placeholder","Enter or edit a Molecular Expression here.",2,"width","100%",3,"ngModel","ngModelChange"],["expressionEditor",""],[1,"btn-row"],["nzFlex","80px"],["nzBlock","","nz-button","","nzType","primary","nzShape","round","nzSize","small","nz-popover","","nzPopoverTitle","Select a Profile to view its expression","nzPopoverTrigger","click","nzPopoverPlacement","bottomLeft",3,"nzPopoverContent"],["nzFlex","auto",2,"text-align","right"],["nz-typography","","nzType","secondary",4,"nzSpaceItem"],["type","button","nz-button","","nz-popover","","nzPopoverTitle","Append Variant #VID","nzPopoverTrigger","click","nzSize","small","nzShape","round","nzType","primary","nzPopoverPlacement","bottom",3,"nzPopoverContent",4,"nzSpaceItem"],["type","button","nz-button","","nz-popover","","nzPopoverTitle","Append Variant NOT #VID","nzPopoverTrigger","click","nzSize","small","nzShape","round","nzType","primary","nzPopoverPlacement","bottom",3,"nzPopoverContent",4,"nzSpaceItem"],["class","btn-divider",4,"nzSpaceItem"],["type","button","nz-button","","nzType","primary","nzSize","small","nzShape","round",3,"click",4,"nzSpaceItem"],["appendVariant",""],["appendNotVariant",""],["expressionExamples",""],[3,"nameSegments",4,"ngIf"],["nz-typography","","nzType","secondary",4,"ngIf"],[3,"nameSegments"],["nz-typography","","nzType","secondary"],["nzType","info","nzShowIcon","",3,"nzMessage","nzAction"],["messageAction",""],["type","button","nz-button","","nzType","dashed","nzSize","small","nzShape","round","nz-popover","","nzPopoverTrigger","hover",3,"nzPopoverContent"],["nz-icon","","nzType","question-circle","nzTheme","fill"],["gettingStartedHelp",""],["nzType","success","nzShowIcon","",3,"nzMessage","nzAction"],["selectAction",""],["foundMessage",""],["type","button","nz-button","","nzType","primary","nzSize","small","nzBlock","",3,"click"],["createAction",""],["createMessage",""],["type","button","nz-button","","nzSize","small","nzType","primary","nzBlock","",3,"click"],["nzType","error","nzShowIcon","",3,"nzMessage","nzAction"],["errorAction",""],["nz-button","","nzDanger","","nzType","text","nzSize","small","nzShape","round","nz-popover","","nzPopoverTrigger","hover",3,"nzPopoverContent"],[3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["invalidTokenHelp",""],["cvcErrorType","invalidToken"],["trailingBooleanHelp",""],["cvcErrorType","trailingBoolean"],["initialBooleanHelp",""],["cvcErrorType","initialBoolean"],["multipleBooleanHelp",""],["cvcErrorType","multipleBoolean"],["incompleteExpressionHelp",""],["cvcErrorType","incompleteExpression"],["incompleteNOTHelp",""],["cvcErrorType","incompleteNOT"],["queryErrorHelp",""],["cvcErrorType","identicalVariants"],["cvcErrorType","unknownVariant"],["type","button","nz-button","","nz-popover","","nzPopoverTitle","Append Variant #VID","nzPopoverTrigger","click","nzSize","small","nzShape","round","nzType","primary","nzPopoverPlacement","bottom",3,"nzPopoverContent"],["type","button","nz-button","","nz-popover","","nzPopoverTitle","Append Variant NOT #VID","nzPopoverTrigger","click","nzSize","small","nzShape","round","nzType","primary","nzPopoverPlacement","bottom",3,"nzPopoverContent"],[1,"btn-divider"],["type","button","nz-button","","nzType","primary","nzSize","small","nzShape","round",3,"click"],[1,"append-popover-contents"],["nz-typography","","nzType","secondary",2,"margin","0","padding-bottom","2px"],[3,"cvcOnVariantSelect"],[2,"min-width","525px","margin","-8px -12px"],["nzSize","small","nzItemLayout","horizontal"],[4,"ngFor","ngForOf"],[3,"cvcLinkableEntity"],["nz-list-item-actions",""],["type","button","nz-button","","nzType","primary","nzSize","small",3,"click"]],template:function(y,c){if(1&y&&(e.TgZ(0,"cvc-form-submission-status-display",0),e.YNc(1,ud,1,0,"ng-template",null,1,e.W1O),e.TgZ(3,"nz-row",2)(4,"nz-col",3)(5,"div",4),e.ALo(6,"ngrxPush"),e.YNc(7,Bd,3,2,"ng-container",5),e.ALo(8,"ngrxPush"),e.qZA()(),e.TgZ(9,"nz-col",3),e.YNc(10,dd,4,2,"ng-container",6),e.ALo(11,"ngrxPush"),e.YNc(12,za,4,5,"ng-container",5),e.YNc(13,Ju,3,2,"ng-template",null,7,e.W1O),e.YNc(15,ve,10,8,"ng-container",6),e.ALo(16,"ngrxPush"),e.qZA(),e.TgZ(17,"nz-col",3)(18,"textarea",8,9),e.NdJ("ngModelChange",function(G){return c.onInputChange$.next(G)}),e.ALo(20,"ngrxPush"),e.qZA()()(),e.TgZ(21,"nz-row",10)(22,"nz-col",11)(23,"button",12),e._uU(24," Examples "),e.qZA()(),e.TgZ(25,"nz-col",13)(26,"nz-space"),e.YNc(27,Ee,2,0,"span",14),e.YNc(28,Xe,3,1,"button",15),e.YNc(29,ht,3,1,"button",16),e.YNc(30,Dt,2,0,"span",17),e.YNc(31,$t,3,0,"button",18),e.YNc(32,Qt,3,0,"button",18),e.YNc(33,Kt,2,0,"span",17),e.YNc(34,Wt,3,0,"button",18),e.YNc(35,mn,3,0,"button",18),e.qZA()(),e.YNc(36,Hn,7,2,"ng-template",null,19,e.W1O),e.YNc(38,nn,7,2,"ng-template",null,20,e.W1O),e.YNc(40,$n,3,1,"ng-template",null,21,e.W1O),e.qZA()()),2&y){const m=e.MAs(2),G=e.MAs(41);e.Q6J("mutationState",c.state)("successMessage",m),e.xp6(3),e.Q6J("nzGutter",e.DdM(20,En)),e.xp6(2),e.Q6J("ngClass",e.VKq(21,Ln,void 0!==e.lcZ(6,10,c.expressionSegment$))),e.xp6(2),e.Q6J("ngrxLet",e.lcZ(8,12,c.expressionSegment$)),e.xp6(3),e.Q6J("ngIf",e.lcZ(11,14,c.expressionMessage$)),e.xp6(2),e.Q6J("ngrxLet",c.existingMp$),e.xp6(3),e.Q6J("ngIf",e.lcZ(16,16,c.expressionError$)),e.xp6(3),e.Q6J("ngModel",e.lcZ(20,18,c.inputValue$)),e.xp6(5),e.Q6J("nzPopoverContent",G)}},dependencies:[M.mk,M.sg,M.O5,M.tP,M.RF,M.n9,M.ED,t.Fj,t.JJ,t.On,I.eJ,Mt.r,pn.ix,Wo.w,qo.dQ,Re.Ls,Pe.Zp,k.t3,k.SK,$e.NU,$e.$1,ge.ZU,co.lU,Xi.n_,Xi.AA,Xi.yi,Xi.IO,Xi.Pb,Xi.nk,Xi.KC,Ti.F,hp.C,Po.J,kd,Wl,M.Ts,I.fM],styles:["[_nghost-%COMP%]{display:block;background-color:#f6f6f6;border:1px solid #dedede;border-radius:4px;padding:8px}.expression-preview[_ngcontent-%COMP%]{width:100%;padding:8px;border:1px solid #dedede;border-radius:4px}.expression-preview.active[_ngcontent-%COMP%]{background-color:#fff}.append-popover-contents[_ngcontent-%COMP%]{min-width:450px}.help-content[_ngcontent-%COMP%]{max-width:500px}.btn-row[_ngcontent-%COMP%]{margin-top:10px;flex-wrap:nowrap}.btn-row[_ngcontent-%COMP%]   .btn-divider[_ngcontent-%COMP%]{color:#aaa}"],changeDetection:0}),bs);no=(0,te.gn)([(0,ae.c)()],no);const xo=["optionTemplates"];function Oi(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"cvc-mp-finder",11),e.NdJ("cvcOnSelect",function(G){e.CHM(c);const Fe=e.oxw(2);return e.KtG(Fe.onMpSelect$.next(G))}),e.qZA()}}function Mi(u,y){1&u&&(e.TgZ(0,"div",12),e._uU(1," \xa0 "),e.TgZ(2,"span",13)(3,"i"),e._uU(4,"Select or create a Molecular Profile with the expression editor "),e.qZA()()())}function rs(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"div",14)(1,"cvc-entity-select",15),e.NdJ("cvcOnSearch",function(G){e.CHM(c);const Fe=e.oxw(2);return e.KtG(Fe.onSearch$.next(G))})("cvcOnModelChange",function(G){e.CHM(c);const Fe=e.oxw(2);return e.KtG(Fe.props.change&&Fe.props.change(Fe.field,G))}),e.ALo(2,"ngrxPush"),e.ALo(3,"ngrxPush"),e.ALo(4,"ngrxPush"),e.qZA()()}if(2&u){const c=e.oxw(2),m=e.MAs(13);e.xp6(1),e.Q6J("cvcSelectMode",c.props.isMultiSelect?"multiple":"default")("cvcCustomTemplate",m)("cvcFormControl",c.formControl)("cvcFormlyAttributes",c.field)("cvcEntityName",c.props.entityName)("cvcPlaceholder",c.props.placeholder)("cvcResults",e.lcZ(2,15,c.result$))("cvcDisabled",c.props.disabled)("cvcAllowClear",!1)("cvcOptions",e.lcZ(3,17,c.selectOption$))("cvcShowError",c.showError)("cvcLoading",e.lcZ(4,19,c.isLoading$))("cvcBorderless",!0)("cvcSuffixIcon",null)("cvcShowArrow",!1)}}function Ri(u,y){if(1&u&&(e.ynx(0),e.YNc(1,Oi,1,0,"cvc-mp-finder",8),e.YNc(2,Mi,5,0,"div",9),e.YNc(3,rs,5,21,"div",10),e.BQk()),2&u){const c=y.ngrxLet,m=e.oxw();e.xp6(1),e.Q6J("ngIf",c.showFinder&&!m.editorOpen),e.xp6(1),e.Q6J("ngIf",m.editorOpen),e.xp6(1),e.Q6J("ngIf",c.showSelect&&!m.editorOpen)}}function gr(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"nz-col",16)(1,"cvc-mp-expression-editor",17),e.NdJ("cvcOnSelect",function(G){e.CHM(c);const Fe=e.oxw();return e.KtG(Fe.onMpSelect$.next(G))}),e.ALo(2,"ngrxPush"),e.qZA()()}if(2&u){const c=e.oxw();e.xp6(1),e.Q6J("cvcPrepopulateWithId",e.lcZ(2,1,c.onMpId$))}}function Xu(u,y){if(1&u&&(e.ynx(0),e.TgZ(1,"em"),e._UZ(2,"span",24),e.ALo(3,"highlightTypeahead"),e.qZA(),e.BQk()),2&u){const c=e.oxw(2).$implicit,m=e.oxw().ngrxLet;e.xp6(2),e.Q6J("innerHtml",e.xi3(3,1,c.molecularProfileAliases.join(", "),m),e.oJD)}}function Yc(u,y){1&u&&e._uU(0,"--")}function oo(u,y){if(1&u&&(e._UZ(0,"cvc-entity-tag",20),e.TgZ(1,"span",21),e._uU(2," Aliases: "),e.YNc(3,Xu,4,4,"ng-container",22),e.YNc(4,Yc,1,0,"ng-template",null,23,e.W1O),e.qZA()),2&u){const c=e.MAs(5),m=e.oxw().$implicit,G=e.oxw().ngrxLet;e.Q6J("cvcDisableLink",!0)("cvcCacheId",m.__typename+":"+m.id)("cvcEmphasize",G),e.xp6(3),e.Q6J("ngIf",m.molecularProfileAliases.length>0)("ngIfElse",c)}}function po(u,y){1&u&&(e.ynx(0),e.YNc(1,oo,6,5,"ng-template",null,19,e.W1O),e.BQk())}function bo(u,y){if(1&u&&(e.ynx(0),e.YNc(1,po,3,0,"ng-container",18),e.ALo(2,"ngrxPush"),e.BQk()),2&u){const c=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,c.result$))}}function Zo(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"div",25)(1,"cvc-entity-tag",26),e.NdJ("cvcOnClose",function(){const Fe=e.CHM(c).$implicit,Et=e.oxw();return e.KtG(Et.onTagClose$.next(Fe.nzValue))}),e.qZA()()}if(2&u){const c=y.$implicit,m=e.oxw();e.xp6(1),e.Q6J("cvcCacheId","MolecularProfile:"+c.nzValue)("cvcContext",m.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",m.props.isMultiSelect?"default":"closeable")}}const Vi=function(){return[8,12]},Ys=function(u,y){return{show:u,hide:y}},Cr=Vt(yn(),Xo());let ss=(()=>{class u extends Cr{constructor(c,m,G,Fe){super(),this.taq=c,this.tq=m,this.changeDetectorRef=G,this.apollo=Fe,this.editorOpen=!1,this.defaultOptions={props:{label:"Molecular Profile",placeholder:"Search Molecular Profiles",isMultiSelect:!1,description:"Select a Gene and Variant to specify a simple Molecular Profile.",extraType:"prompt",entityName:{singular:"Molecular Profile",plural:"Molecular Profiles"},minSearchStrLength:1}},this.onMpSelect$=new Ge.X(void 0),this.onMpId$=new _o.t,this.onShowExpClick$=new st.x,this.showExp$=this.onShowExpClick$.pipe((0,eo.R)((Et,Mn)=>!Et,!1),(0,wo.b)(Et=>this.editorOpen=Et)),this.selectDisplay$=new Ge.X({showFinder:!0,showSelect:!1})}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEntitySelectField({typeaheadQuery:this.taq,tagQuery:this.tq,getTypeaheadVarsFn:this.getTypeaheadVarsFn,getTypeaheadResultsFn:this.getTypeaheadResultsFn,getTagQueryVarsFn:this.getTagQueryVarsFn,getTagQueryResultsFn:this.getTagQueryResultsFn,getSelectedItemOptionFn:this.getSelectedItemOptionFn,getSelectOptionsFn:this.getSelectOptionsFn,changeDetectorRef:this.changeDetectorRef,selectOpen$:this.selectOpen$,selectComponent:this.selectComponent}),this.initialDescription=this.props.description,this.onValueChange$.pipe((0,ae.t)(this)).subscribe(c=>{const m=void 0!==c;this.selectDisplay$.next({showFinder:!m,showSelect:m}),this.onMpId$.next(c),this.props.description=c?void 0:this.initialDescription}),this.onMpSelect$.pipe((0,ae.t)(this)).subscribe(c=>{c?(this.selectOption$.next([{label:c.name,value:c.id}]),this.editorOpen&&this.onShowExpClick$.next(),this.cdr.detectChanges(),this.field.formControl.setValue(c.id)):this.selectDisplay$.next({showFinder:!0,showSelect:!1})})}configureStateConnections(){}getTypeaheadVarsFn(c,m){return{name:c,geneId:m}}getTypeaheadResultsFn(c){return c.data.molecularProfiles.nodes}getTagQueryVarsFn(c){return{molecularProfileId:c}}getTagQueryResultsFn(c){return c.data.molecularProfile}getSelectedItemOptionFn(c){return{value:c.id,label:c.name}}getSelectOptionsFn(c,m){return c.map((G,Fe)=>({label:m.get(Fe)||G.name,value:G.id}))}}return u.\u0275fac=function(c){return new(c||u)(e.Y36(An.F4e),e.Y36(An.dGO),e.Y36(e.sBO),e.Y36(yo._M))},u.\u0275cmp=e.Xpm({type:u,selectors:[["ng-component"]],viewQuery:function(c,m){if(1&c&&e.Gf(xo,5,e.Rgc),2&c){let G;e.iGM(G=e.CRH())&&(m.optionTemplates=G)}},features:[e.qOj],decls:14,vars:16,consts:[[3,"nzGutter"],["nzFlex","auto"],[4,"ngrxLet"],["nzFlex","50px"],["type","button","nz-button","","nzBlock","","nz-tooltip","","nzTooltipTitle","Add/Edit Complex MP Expression",1,"expression-button",3,"click"],["nz-icon","",3,"ngClass","nzType"],["nzSpan","24","class","editor-drawer",4,"ngIf"],["selectedTemplate",""],[3,"cvcOnSelect",4,"ngIf"],["class","editor-message",4,"ngIf"],["style","display: inline-block",4,"ngIf"],[3,"cvcOnSelect"],[1,"editor-message"],["nz-typography","","nzEllipsis","","nzType","secondary"],[2,"display","inline-block"],[3,"cvcSelectMode","cvcCustomTemplate","cvcFormControl","cvcFormlyAttributes","cvcEntityName","cvcPlaceholder","cvcResults","cvcDisabled","cvcAllowClear","cvcOptions","cvcShowError","cvcLoading","cvcBorderless","cvcSuffixIcon","cvcShowArrow","cvcOnSearch","cvcOnModelChange"],["nzSpan","24",1,"editor-drawer"],[3,"cvcPrepopulateWithId","cvcOnSelect"],[4,"ngFor","ngForOf"],["optionTemplates",""],[3,"cvcDisableLink","cvcCacheId","cvcEmphasize"],["nz-typography","","nzType","secondary"],[4,"ngIf","ngIfElse"],["noAliases",""],["nz-typography","","nzType","secondary",3,"innerHtml"],[1,"ant-select-selection-item-content"],[3,"cvcCacheId","cvcContext","cvcMode","cvcOnClose"]],template:function(c,m){1&c&&(e.TgZ(0,"nz-row",0)(1,"nz-col",1),e.YNc(2,Ri,4,3,"ng-container",2),e.qZA(),e.TgZ(3,"nz-col",3)(4,"button",4),e.NdJ("click",function(){return m.onShowExpClick$.next()}),e._UZ(5,"span",5),e.ALo(6,"ngrxPush"),e.ALo(7,"ngrxPush"),e._uU(8,"Editor "),e.qZA()(),e.YNc(9,gr,3,3,"nz-col",6),e.ALo(10,"ngrxPush"),e.qZA(),e.YNc(11,bo,3,3,"ng-container",2),e.YNc(12,Zo,2,3,"ng-template",null,7,e.W1O)),2&c&&(e.Q6J("nzGutter",e.DdM(12,Vi)),e.xp6(2),e.Q6J("ngrxLet",m.selectDisplay$),e.xp6(3),e.Q6J("ngClass",e.WLB(13,Ys,e.lcZ(6,6,m.showExp$),!e.lcZ(7,8,m.showExp$)))("nzType","caret-right"),e.xp6(4),e.Q6J("ngIf",e.lcZ(10,10,m.showExp$)),e.xp6(2),e.Q6J("ngrxLet",m.onSearch$))},dependencies:[M.mk,M.sg,M.O5,I.eJ,pn.ix,Wo.w,qo.dQ,Re.Ls,k.t3,k.SK,ge.ZU,et.SY,Oo,Po.J,no,kd,I.fM,w.A],styles:["form[_ngcontent-%COMP%]   span.hide[_ngcontent-%COMP%], .expression-button[_ngcontent-%COMP%]   span.hide[_ngcontent-%COMP%]{transform:rotate(0);transition:transform .2s linear}form[_ngcontent-%COMP%]   span.show[_ngcontent-%COMP%], .expression-button[_ngcontent-%COMP%]   span.show[_ngcontent-%COMP%]{transform:rotate(90deg);transition:transform .2s linear}.editor-message[_ngcontent-%COMP%]{padding:3px;background-color:#f5f5f5;cursor:default;border-radius:2px}"],data:{animation:[nd.mF,nd.MC]},changeDetection:0}),u})();const wi={types:[{name:"molecular-profile-select",wrappers:["form-field"],component:ss},{name:"molecular-profile-multi-select",wrappers:["form-field"],component:ss,defaultOptions:{props:{label:"Molecular Profiles",isMultiSelect:!0}}}]};let jd=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,t.u5,t.UX,v.X0.forChild(wi),Mt.L,pn.sL,We.LV,qn.Qp,Re.PV,Pe.o7,k.Jb,$e.zf,s.U5,B.ic,ge.ZJ,et.cg,co.$6,$e.zf,Ut.Wr,Xi.Ph,Wn.g,td.r,je,Zt,Nt.s,ze.x]}),u})();var Mp=a(3702);const cr=["optionTemplates"];function Ta(u,y){if(1&u&&(e.TgZ(0,"nz-tag")(1,"strong"),e._uU(2),e.ALo(3,"formatAmp"),e.qZA()(),e.TgZ(4,"span",4),e._uU(5),e.qZA()),2&u){const c=e.oxw().$implicit,m=e.oxw();e.xp6(2),e.Oqu(e.xi3(3,2,c,"verbose")),e.xp6(3),e.Oqu(m.descriptionForCategory(c))}}function Xr(u,y){1&u&&(e.ynx(0),e.YNc(1,Ta,6,5,"ng-template",null,3,e.W1O),e.BQk())}function e1(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"nz-tag",8),e.NdJ("nzOnClose",function(G){e.CHM(c);const Fe=e.oxw(2);return e.KtG(Fe.onTagClose$.next(G))}),e.TgZ(1,"strong"),e._uU(2),e.ALo(3,"formatAmp"),e.qZA()()}if(2&u){const c=e.oxw().$implicit;e.xp6(2),e.Oqu(e.xi3(3,1,c.nzValue,"verbose"))}}function Wd(u,y){if(1&u&&(e.ynx(0),e._uU(1),e.ALo(2,"formatAmp"),e.BQk()),2&u){const c=e.oxw().$implicit;e.xp6(1),e.hij(" ",e.xi3(2,1,c.nzValue,"verbose")," ")}}function n4(u,y){if(1&u&&(e.TgZ(0,"div",5),e.YNc(1,e1,4,4,"nz-tag",6),e.YNc(2,Wd,3,4,"ng-container",7),e.qZA()),2&u){const c=e.oxw();e.xp6(1),e.Q6J("ngIf",!c.props.isMultiSelect),e.xp6(1),e.Q6J("ngIf",c.props.isMultiSelect)}}const Zd=new Map([[An.iwm.Na,"Not Applicable"],[An.iwm.TierILevelA,"Biomarkers showing therapeutic response to FDA-approved therapy, or therapy included in professional guidelines."],[An.iwm.TierILevelB,"Biomarkers showing therapeutic response based on well-powered studies with consensus from experts in the field."],[An.iwm.TierIiLevelC,"FDA-approved therapies for different tumor types or investigational therapies, or multiple small published studies with some consensus."],[An.iwm.TierIiLevelD,"Biomarkers that show plausible therapeutic significance based on preclinical studies."],[An.iwm.TierIii,"Somatic variants in cancer genes reported in the same or different cancer types with unknown clinical significance and variants in cancer genes that have not been reported in any cancers."],[An.iwm.TierIv,"Benign or likely benign germline variants observed at significant allele frequencies in the general population or specific subpopulation."]]),bp=Vt(yn(),lt());let eh=(()=>{class u extends bp{constructor(c){super(),this.cdr=c,this.defaultOptions={props:{label:"AMP/ASCO/CAP Category",required:!1,isMultiSelect:!1,placeholder:"Select AMP/ASCO/CAP Category"}},this.ampCategoryEnum$=new Ge.X([])}descriptionForCategory(c){return Zd.get(c)}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEnumSelectField({optionEnum$:this.ampCategoryEnum$,optionTemplate$:this.optionTemplate$,changeDetectorRef:this.cdr}),this.configurePlaceholder()}configureStateConnections(){this.props.tooltip="If applicable, please provide the AMP/ASCO/CAP somatic variant classification.",this.ampCategoryEnum$.next((0,Mo.o6)(An.iwm).map(c=>c)),this.optionTemplates||console.error(`${this.field.id} could not find its optionTemplates QueryList to populate its select options, so simple text labels will be displayed.`),this.optionTemplate$=this.optionTemplates?.changes.pipe((0,Ct.U)(c=>c.map(m=>m))),this.state&&(this.state.requires.requiresAmpLevel$?this.onRequiresAmpCategory$=this.state.requires.requiresAmpLevel$:console.warn(`${this.field.id} field's form provides a state, but could not find requiresAmpLevel$ subject to attach.`),this.onValueChange$.pipe((0,ae.t)(this)).subscribe(c=>{c?(this.props.extraType=void 0,this.props.description=Zd.get(c)):this.props.description="Select an Assertion Type to select its AMP Category"}))}configurePlaceholder(){this.placeholder$=new Ge.X(this.props.placeholder),this.onRequiresAmpCategory$&&this.onRequiresAmpCategory$.pipe((0,mo.x)(),(0,ae.t)(this)).subscribe(c=>{this.props.extraType=void 0,c?(this.formControl.value||(this.props.extraType="description",this.props.description='Please provide the AMP/ASCO/CAP <a href="https://pubmed.ncbi.nlm.nih.gov/27993330/" target="_blank">somatic variant classification</a>.'),this.props.required=!0,this.props.disabled=!1):(this.props.required=!1,this.props.disabled=!0,this.resetField()),this.cdr.markForCheck()})}}return u.\u0275fac=function(c){return new(c||u)(e.Y36(e.sBO))},u.\u0275cmp=e.Xpm({type:u,selectors:[["cvc-amp-category-select"]],viewQuery:function(c,m){if(1&c&&e.Gf(cr,5,e.Rgc),2&c){let G;e.iGM(G=e.CRH())&&(m.optionTemplates=G)}},features:[e.qOj],decls:7,vars:15,consts:[[3,"cvcFormControl","cvcFormlyAttributes","cvcSelectMode","cvcPlaceholder","cvcCustomTemplate","cvcOptions","cvcShowError","cvcDisabled"],[4,"ngFor","ngForOf"],["selectedTemplate",""],["optionTemplates",""],["nz-typography","","nzType","secondary"],[1,"ant-select-selection-item-content"],["nzMode","closeable",3,"nzOnClose",4,"ngIf"],[4,"ngIf"],["nzMode","closeable",3,"nzOnClose"]],template:function(c,m){if(1&c&&(e._UZ(0,"cvc-enum-select",0),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.YNc(3,Xr,3,0,"ng-container",1),e.ALo(4,"ngrxPush"),e.YNc(5,n4,3,2,"ng-template",null,2,e.W1O)),2&c){const G=e.MAs(6);e.Q6J("cvcFormControl",m.formControl)("cvcFormlyAttributes",m.field)("cvcSelectMode",m.props.isMultiSelect?"multiple":"default")("cvcPlaceholder",e.lcZ(1,9,m.placeholder$))("cvcCustomTemplate",G)("cvcOptions",e.lcZ(2,11,m.selectOption$))("cvcShowError",m.showError)("cvcDisabled",m.props.disabled),e.xp6(3),e.Q6J("ngForOf",e.lcZ(4,13,m.ampCategoryEnum$))}},dependencies:[M.sg,M.O5,Jt.j,ge.ZU,Ke,I.fM,Mp.t]}),u})();const th={types:[{name:"amp-category-select",wrappers:["form-field"],component:eh},{name:"amp-category-multi-select",wrappers:["form-field"],component:eh,defaultOptions:{props:{label:"AMP/ASCO/CAP Categories",isMultiSelect:!0}}}]};let Sp=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,t.UX,v.X0.forChild(th),Jt.X,ge.ZJ,Nt.s,je,Be]}),u})();const Kd=["optionTemplates"];function nh(u,y){if(1&u&&(e.ynx(0),e.TgZ(1,"em")(2,"span",6),e._uU(3),e.qZA()(),e.BQk()),2&u){const c=e.oxw(2).$implicit;e.xp6(3),e.Oqu(c.description)}}function oh(u,y){if(1&u&&(e.TgZ(0,"nz-tag",5),e._uU(1),e.qZA(),e.TgZ(2,"span",6),e.YNc(3,nh,4,1,"ng-container",7),e.qZA()),2&u){const c=e.oxw().$implicit;e.xp6(1),e.Oqu(c.code),e.xp6(2),e.Q6J("ngIf",c.description)}}function o4(u,y){1&u&&(e.ynx(0),e.YNc(1,oh,4,2,"ng-template",null,4,e.W1O),e.BQk())}function ih(u,y){if(1&u&&(e.ynx(0),e.YNc(1,o4,3,0,"ng-container",3),e.ALo(2,"ngrxPush"),e.BQk()),2&u){const c=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,c.result$))}}function c2(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"div",8)(1,"cvc-entity-tag",9),e.NdJ("cvcOnClose",function(){const Fe=e.CHM(c).$implicit,Et=e.oxw();return e.KtG(Et.onTagClose$.next(Fe.nzValue))}),e.qZA()()}if(2&u){const c=y.$implicit,m=e.oxw();e.xp6(1),e.Q6J("cvcDisableLink",!0)("cvcHasTooltip",!0)("cvcCacheId","AcmgCode:"+c.nzValue)("cvcContext",m.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",m.props.isMultiSelect?"default":"closeable")}}const i4=Vt(yn(),Xo());let t1=(()=>{class u extends i4{constructor(c,m,G){super(),this.taq=c,this.tq=m,this.changeDetectorRef=G,this.defaultOptions={props:{entityName:{singular:"ACMG/AMP Code",plural:"ACMG/AMP Codes"},isMultiSelect:!1,requireType:!0,tooltip:"If applicable, please provide evidence criteria from the standards and guidelines for interpretation of sequence variants from ACMG/AMP.",placeholder:"Search ACMG/AMP Codes",requireTypePromptFn:(Fe,Et)=>`Select an ${Fe} Type to search associated ACMG Code(s)`}},this.placeholder$=new Ge.X(void 0)}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEntitySelectField({typeaheadQuery:this.taq,typeaheadParam$:void 0,tagQuery:this.tq,getTypeaheadVarsFn:this.getTypeaheadVarsFn,getTypeaheadResultsFn:this.getTypeaheadResultsFn,getTagQueryVarsFn:this.getTagQueryVarsFn,getTagQueryResultsFn:this.getTagQueryResultsFn,getSelectedItemOptionFn:this.getSelectedItemOptionFn,getSelectOptionsFn:this.getSelectOptionsFn,changeDetectorRef:this.changeDetectorRef,selectComponent:this.selectComponent}),this.configurePlaceholders()}configureStateConnections(){if(this.state&&(this.stateEntityName=this.state.entityName,this.state.requires.requiresAcmgCodes$?this.onRequiresAcmgCode$=this.state.requires.requiresAcmgCodes$:console.warn(`${this.field.id} field's form provides a state, but could not find requiresAcmgCodes$ subject to attach.`),this.props.requireType)){const c=`${this.stateEntityName.toLowerCase()}Type$`;this.state.fields[c]?this.onEntityType$=this.state.fields[c]:console.error(`${this.field.id} requireType is true, however form state does not provide Subject ${c}.`)}}configurePlaceholders(){this.placeholder$.next(this.props.placeholders),this.onRequiresAcmgCode$&&this.onEntityType$&&(0,Eo.a)([this.onRequiresAcmgCode$,this.onEntityType$]).pipe((0,mo.x)(),(0,ae.t)(this)).subscribe(([c,m])=>{!c&&m?(this.props.required=!1,this.props.disabled=!0,this.props.description=`${(0,xe.E)(m)} ${this.state.entityName} does not include associated ACMG/AMP Code(s)`,this.props.extraType="prompt",this.resetField(),this.cdr.markForCheck()):this.props.requireType&&!m?(this.props.required=!1,this.props.disabled=!0,this.props.description=this.props.requireTypePromptFn(this.state.entityName,this.props.isMultiSelect),this.props.extraType="prompt"):c?(this.props.required=!0,this.props.disabled=!1,this.props.description='Please provide evidence criteria from the standards and guidelines for interpretation of sequence variants from ACMG/AMP in <a href="https://pubmed.ncbi.nlm.nih.gov/25741868/" target="_blank">Richards et. al. 2015</a>. Review all codes and select each one that applies. If a code is not applied, it is inferred to not be met.',this.props.extraType="description"):(!c&&this.formControl.value||this.props.requireType&&!m&&this.formControl.value)&&this.resetField()})}getTypeaheadVarsFn(c){return{code:c}}getTypeaheadResultsFn(c){return c.data.acmgCodesTypeahead}getTagQueryResultsFn(c){return c.data.acmgCode}getTagQueryVarsFn(c){return{id:c}}getSelectedItemOptionFn(c){return{value:c.id,label:c.code}}getSelectOptionsFn(c,m){return c.map((G,Fe)=>(console.log(G),{label:m.get(Fe)||G.code,value:G.id}))}}return u.\u0275fac=function(c){return new(c||u)(e.Y36(An.O2u),e.Y36(An.AIY),e.Y36(e.sBO))},u.\u0275cmp=e.Xpm({type:u,selectors:[["cvc-acmg-code-select"]],viewQuery:function(c,m){if(1&c&&e.Gf(Kd,5,e.Rgc),2&c){let G;e.iGM(G=e.CRH())&&(m.optionTemplates=G)}},features:[e.qOj],decls:9,vars:22,consts:[[3,"cvcSelectMode","cvcCustomTemplate","cvcFormControl","cvcFormlyAttributes","cvcEntityName","cvcPlaceholder","cvcResults","cvcOptions","cvcShowError","cvcDisabled","cvcLoading","cvcOnSearch","cvcOnOpenChange","cvcOnModelChange"],[4,"ngrxLet"],["selectedTemplate",""],[4,"ngFor","ngForOf"],["optionTemplates",""],["nz-tooltip",""],["nz-typography","","nzType","secondary"],[4,"ngIf"],[1,"ant-select-selection-item-content"],[3,"cvcDisableLink","cvcHasTooltip","cvcCacheId","cvcContext","cvcMode","cvcOnClose"]],template:function(c,m){if(1&c&&(e.TgZ(0,"cvc-entity-select",0),e.NdJ("cvcOnSearch",function(Fe){return m.onSearch$.next(Fe)})("cvcOnOpenChange",function(Fe){return m.onOpenChange$.next(Fe)})("cvcOnModelChange",function(Fe){return m.props.change&&m.props.change(m.field,Fe)}),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.ALo(3,"ngrxPush"),e.ALo(4,"ngrxPush"),e.ALo(5,"ngrxPush"),e.qZA(),e.YNc(6,ih,3,3,"ng-container",1),e.YNc(7,c2,2,5,"ng-template",null,2,e.W1O)),2&c){const G=e.MAs(8);e.Q6J("cvcSelectMode",m.props.isMultiSelect?"multiple":"default")("cvcCustomTemplate",G)("cvcFormControl",m.formControl)("cvcFormlyAttributes",m.field)("cvcEntityName",m.props.entityName)("cvcPlaceholder",e.lcZ(1,12,m.placeholder$))("cvcResults",e.lcZ(2,14,m.result$))("cvcOptions",e.lcZ(3,16,m.selectOption$))("cvcShowError",m.showError)("cvcDisabled",m.onRequiresAcmgCode$&&!e.lcZ(4,18,m.onRequiresAcmgCode$))("cvcLoading",e.lcZ(5,20,m.isLoading$)),e.xp6(6),e.Q6J("ngrxLet",m.onSearch$)}},dependencies:[M.sg,M.O5,I.eJ,et.SY,ge.ZU,Jt.j,Oo,Po.J,I.fM],changeDetection:0}),u})();const r4={types:[{name:"acmg-code-select",wrappers:["form-field"],component:t1,defaultOptions:{props:{label:"ACMG/AMP Code"}}},{name:"acmg-code-multi-select",wrappers:["form-field"],component:t1,defaultOptions:{props:{isMultiSelect:!0,label:"ACMG/AMP Code(s)"}}}]};let n1=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,t.UX,v.X0.forChild(r4),Mt.L,pn.sL,We.LV,co.$6,qn.Qp,Re.PV,Pe.o7,k.Jb,et.cg,$e.zf,s.U5,B.ic,ge.ZJ,Jt.X,je,Zt,Nt.s,ze.x,ks]}),u})();const vd=["optionTemplates"];function s4(u,y){if(1&u&&(e.ynx(0),e.TgZ(1,"em")(2,"span",6),e._uU(3),e.qZA()(),e.BQk()),2&u){const c=e.oxw(2).$implicit;e.xp6(3),e.Oqu(c.description)}}function rh(u,y){if(1&u&&(e.TgZ(0,"nz-tag",5),e._uU(1),e.qZA(),e.TgZ(2,"span",6),e.YNc(3,s4,4,1,"ng-container",7),e.qZA()),2&u){const c=e.oxw().$implicit;e.xp6(1),e.Oqu(c.code),e.xp6(2),e.Q6J("ngIf",c.description)}}function a4(u,y){1&u&&(e.ynx(0),e.YNc(1,rh,4,2,"ng-template",null,4,e.W1O),e.BQk())}function c4(u,y){if(1&u&&(e.ynx(0),e.YNc(1,a4,3,0,"ng-container",3),e.ALo(2,"ngrxPush"),e.BQk()),2&u){const c=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,c.result$))}}function l4(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"div",8)(1,"cvc-entity-tag",9),e.NdJ("cvcOnClose",function(){const Fe=e.CHM(c).$implicit,Et=e.oxw();return e.KtG(Et.onTagClose$.next(Fe.nzValue))}),e.qZA()()}if(2&u){const c=y.$implicit,m=e.oxw();e.xp6(1),e.Q6J("cvcDisableLink",!0)("cvcHasTooltip",!0)("cvcCacheId","ClingenCode:"+c.nzValue)("cvcContext",m.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",m.props.isMultiSelect?"default":"closeable")}}const sh=Vt(yn(),Xo());let ah=(()=>{class u extends sh{constructor(c,m,G){super(),this.taq=c,this.tq=m,this.changeDetectorRef=G,this.exclusiveCodes=new Set,this.exclusiveSelected=!1,this.defaultOptions={props:{entityName:{singular:"ClinGen/CGC/VICC Code",plural:"ClinGen/CGC/VICC Codes"},isMultiSelect:!1,requireType:!0,tooltip:"If applicable, please provide evidence classifications from the Standards for the classification of pathogenicity of somatic variants in cancer (oncogenicity).",placeholder:"Search ClinGen/CGC/VICC Codes",requireTypePromptFn:(Fe,Et)=>`Select an ${Fe} Type to search associated ClinGen Code(s)`}},this.placeholder$=new Ge.X(void 0)}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEntitySelectField({typeaheadQuery:this.taq,typeaheadParam$:void 0,tagQuery:this.tq,getTypeaheadVarsFn:this.getTypeaheadVarsFn,getTypeaheadResultsFn:this.getTypeaheadResultsFn,getTagQueryVarsFn:this.getTagQueryVarsFn,getTagQueryResultsFn:this.getTagQueryResultsFn,getSelectedItemOptionFn:this.getSelectedItemOptionFn,getSelectOptionsFn:this.getSelectOptionsFn,changeDetectorRef:this.changeDetectorRef,selectComponent:this.selectComponent}),this.configurePlaceholders(),this.onValueChange$.pipe((0,ae.t)(this)).subscribe(c=>{if(c&&Array.isArray(c)&&c.length>1){const m=c.find(G=>this.exclusiveCodes.has(G));m?(this.previousDescription=this.props.description,this.previousDescriptionType=this.props.extraType,this.props.description="You have selected N/A which precludes selecting any other codes. Please remove it if you wish to select additional codes.",this.exclusiveSelected=!0,this.formControl.setValue([m])):this.exclusiveSelected=!1}this.previousDescription&&!this.exclusiveSelected&&(this.props.description=this.previousDescription,this.props.extraType=this.previousDescriptionType),this.cdr.detectChanges()})}configureStateConnections(){if(this.state&&(this.stateEntityName=this.state.entityName,this.state.requires.requiresClingenCodes$?this.onRequiresClingenCode$=this.state.requires.requiresClingenCodes$:console.warn(`${this.field.id} field's form provides a state, but could not find requiresClingenCodes$ subject to attach.`),this.props.requireType)){const c=`${this.stateEntityName.toLowerCase()}Type$`;this.state.fields[c]?this.onEntityType$=this.state.fields[c]:console.error(`${this.field.id} requireType is true, however form state does not provide Subject ${c}.`)}}configurePlaceholders(){this.placeholder$.next(this.props.placeholders),this.onRequiresClingenCode$&&this.onEntityType$&&(0,Eo.a)([this.onRequiresClingenCode$,this.onEntityType$]).pipe((0,mo.x)(),(0,ae.t)(this)).subscribe(([c,m])=>{!c&&m?(this.props.required=!1,this.props.disabled=!0,this.props.description=`${(0,xe.E)(m)} ${this.state.entityName} does not include associated ClinGen/CGC/VICC Code(s)`,this.props.extraType="prompt",this.resetField(),this.cdr.markForCheck()):this.props.requireType&&!m?(this.props.required=!1,this.props.disabled=!0,this.props.description=this.props.requireTypePromptFn(this.state.entityName,this.props.isMultiSelect),this.props.extraType="prompt"):c?(this.props.required=!0,this.props.disabled=!1,this.props.description='Please provide the evidence classifications from the Standards for the classification of pathogenicity of somatic variants in cancer (oncogenicity) in <a href="https://pubmed.ncbi.nlm.nih.gov/25741868/" target="_blank">Horak et. al. 2022.</a>. Review all codes and select each one that applies. If a code is not applied, it is inferred to not be met.',this.props.extraType="description"):(!c&&this.formControl.value||this.props.requireType&&!m&&this.formControl.value)&&this.resetField()})}getTypeaheadVarsFn(c){return{code:c}}getTypeaheadResultsFn(c){return c.data.clingenCodesTypeahead.forEach(m=>{m.exclusive&&this.exclusiveCodes.add(m.id)}),c.data.clingenCodesTypeahead}getTagQueryResultsFn(c){return c.data.clingenCode}getTagQueryVarsFn(c){return{id:c}}getSelectedItemOptionFn(c){return{value:c.id,label:c.code}}getSelectOptionsFn(c,m){return c.map((G,Fe)=>({label:m.get(Fe)||G.code,value:G.id}))}}return u.\u0275fac=function(c){return new(c||u)(e.Y36(An.E2B),e.Y36(An.R8F),e.Y36(e.sBO))},u.\u0275cmp=e.Xpm({type:u,selectors:[["cvc-clingen-code-select"]],viewQuery:function(c,m){if(1&c&&e.Gf(vd,5,e.Rgc),2&c){let G;e.iGM(G=e.CRH())&&(m.optionTemplates=G)}},features:[e.qOj],decls:9,vars:22,consts:[[3,"cvcSelectMode","cvcCustomTemplate","cvcFormControl","cvcFormlyAttributes","cvcEntityName","cvcPlaceholder","cvcResults","cvcOptions","cvcShowError","cvcDisabled","cvcLoading","cvcOnSearch","cvcOnOpenChange","cvcOnModelChange"],[4,"ngrxLet"],["selectedTemplate",""],[4,"ngFor","ngForOf"],["optionTemplates",""],["nz-tooltip",""],["nz-typography","","nzType","secondary"],[4,"ngIf"],[1,"ant-select-selection-item-content"],[3,"cvcDisableLink","cvcHasTooltip","cvcCacheId","cvcContext","cvcMode","cvcOnClose"]],template:function(c,m){if(1&c&&(e.TgZ(0,"cvc-entity-select",0),e.NdJ("cvcOnSearch",function(Fe){return m.onSearch$.next(Fe)})("cvcOnOpenChange",function(Fe){return m.onOpenChange$.next(Fe)})("cvcOnModelChange",function(Fe){return m.props.change&&m.props.change(m.field,Fe)}),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.ALo(3,"ngrxPush"),e.ALo(4,"ngrxPush"),e.ALo(5,"ngrxPush"),e.qZA(),e.YNc(6,c4,3,3,"ng-container",1),e.YNc(7,l4,2,5,"ng-template",null,2,e.W1O)),2&c){const G=e.MAs(8);e.Q6J("cvcSelectMode",m.props.isMultiSelect?"multiple":"default")("cvcCustomTemplate",G)("cvcFormControl",m.formControl)("cvcFormlyAttributes",m.field)("cvcEntityName",m.props.entityName)("cvcPlaceholder",e.lcZ(1,12,m.placeholder$))("cvcResults",e.lcZ(2,14,m.result$))("cvcOptions",e.lcZ(3,16,m.selectOption$))("cvcShowError",m.showError)("cvcDisabled",m.onRequiresClingenCode$&&!e.lcZ(4,18,m.onRequiresClingenCode$))("cvcLoading",e.lcZ(5,20,m.isLoading$)),e.xp6(6),e.Q6J("ngrxLet",m.onSearch$)}},dependencies:[M.sg,M.O5,I.eJ,et.SY,ge.ZU,Jt.j,Oo,Po.J,I.fM],changeDetection:0}),u})();const Ep={types:[{name:"clingen-code-select",wrappers:["form-field"],component:ah,defaultOptions:{props:{label:"ClinGen/CGC/VICC Code"}}},{name:"clingen-code-multi-select",wrappers:["form-field"],component:ah,defaultOptions:{props:{isMultiSelect:!0,label:"ClinGen/CGC/VICC Code(s)"}}}]};let _d=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,t.UX,v.X0.forChild(Ep),Mt.L,pn.sL,We.LV,co.$6,qn.Qp,Re.PV,Pe.o7,k.Jb,et.cg,$e.zf,s.U5,B.ic,ge.ZJ,Jt.X,je,Zt,Nt.s,ze.x,ks]}),u})();const ch=["optionTemplates"];function l2(u,y){if(1&u&&(e.TgZ(0,"nz-tag",5),e._uU(1),e.qZA()),2&u){const c=e.oxw().$implicit;e.xp6(1),e.Oqu(c.name)}}function xp(u,y){1&u&&(e.ynx(0),e.YNc(1,l2,2,1,"ng-template",null,4,e.W1O),e.BQk())}function o1(u,y){if(1&u&&(e.ynx(0),e.YNc(1,xp,3,0,"ng-container",3),e.ALo(2,"ngrxPush"),e.BQk()),2&u){const c=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,c.result$))}}function Jd(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"div",6)(1,"cvc-entity-tag",7),e.NdJ("cvcOnClose",function(){const Fe=e.CHM(c).$implicit,Et=e.oxw();return e.KtG(Et.onTagClose$.next(Fe.nzValue))}),e.qZA()()}if(2&u){const c=y.$implicit,m=e.oxw();e.xp6(1),e.Q6J("cvcDisableLink",!0)("cvcCacheId","NccnGuideline:"+c.nzValue)("cvcContext",m.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",m.props.isMultiSelect?"default":"closeable")}}const lh=Vt(yn(),Xo());let Dp=(()=>{class u extends lh{constructor(c,m,G){super(),this.taq=c,this.tq=m,this.changeDetectorRef=G,this.defaultOptions={props:{entityName:{singular:"NCCN Guideline",plural:"NCCN Guidelines"},isMultiSelect:!1,requireType:!1,tooltip:"If applicable, please provide cancer (e.g., Breast Cancer) for the appropriate NCCN guideline.",placeholder:"Search NCCN Guidelines"}},this.placeholder$=new Ge.X(void 0)}ngAfterViewInit(){this.configureBaseField(),this.configureEntitySelectField({typeaheadQuery:this.taq,typeaheadParam$:void 0,tagQuery:this.tq,getTypeaheadVarsFn:this.getTypeaheadVarsFn,getTypeaheadResultsFn:this.getTypeaheadResultsFn,getTagQueryVarsFn:this.getTagQueryVarsFn,getTagQueryResultsFn:this.getTagQueryResultsFn,getSelectedItemOptionFn:this.getSelectedItemOptionFn,getSelectOptionsFn:this.getSelectOptionsFn,changeDetectorRef:this.changeDetectorRef,selectComponent:this.selectComponent})}getTypeaheadVarsFn(c){return{name:c}}getTypeaheadResultsFn(c){return c.data.nccnGuidelinesTypeahead}getTagQueryResultsFn(c){return c.data.nccnGuideline}getTagQueryVarsFn(c){return{id:c}}getSelectedItemOptionFn(c){return{value:c.id,label:c.name}}getSelectOptionsFn(c,m){return c.map((G,Fe)=>({label:m.get(Fe)||G.name,value:G.id}))}}return u.\u0275fac=function(c){return new(c||u)(e.Y36(An.sA8),e.Y36(An.N$2),e.Y36(e.sBO))},u.\u0275cmp=e.Xpm({type:u,selectors:[["cvc-nccn-guideline-select"]],viewQuery:function(c,m){if(1&c&&e.Gf(ch,5,e.Rgc),2&c){let G;e.iGM(G=e.CRH())&&(m.optionTemplates=G)}},features:[e.qOj],decls:8,vars:20,consts:[[3,"cvcSelectMode","cvcCustomTemplate","cvcFormControl","cvcFormlyAttributes","cvcEntityName","cvcPlaceholder","cvcResults","cvcOptions","cvcShowError","cvcDisabled","cvcLoading","cvcOnSearch","cvcOnOpenChange","cvcOnModelChange"],[4,"ngrxLet"],["selectedTemplate",""],[4,"ngFor","ngForOf"],["optionTemplates",""],["nz-tooltip",""],[1,"ant-select-selection-item-content"],[3,"cvcDisableLink","cvcCacheId","cvcContext","cvcMode","cvcOnClose"]],template:function(c,m){if(1&c&&(e.TgZ(0,"cvc-entity-select",0),e.NdJ("cvcOnSearch",function(Fe){return m.onSearch$.next(Fe)})("cvcOnOpenChange",function(Fe){return m.onOpenChange$.next(Fe)})("cvcOnModelChange",function(Fe){return m.props.change&&m.props.change(m.field,Fe)}),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.ALo(3,"ngrxPush"),e.ALo(4,"ngrxPush"),e.qZA(),e.YNc(5,o1,3,3,"ng-container",1),e.YNc(6,Jd,2,4,"ng-template",null,2,e.W1O)),2&c){const G=e.MAs(7);e.Q6J("cvcSelectMode",m.props.isMultiSelect?"multiple":"default")("cvcCustomTemplate",G)("cvcFormControl",m.formControl)("cvcFormlyAttributes",m.field)("cvcEntityName",m.props.entityName)("cvcPlaceholder",e.lcZ(1,12,m.placeholder$))("cvcResults",e.lcZ(2,14,m.result$))("cvcOptions",e.lcZ(3,16,m.selectOption$))("cvcShowError",m.showError)("cvcDisabled",!1)("cvcLoading",e.lcZ(4,18,m.isLoading$)),e.xp6(5),e.Q6J("ngrxLet",m.onSearch$)}},dependencies:[M.sg,I.eJ,et.SY,Jt.j,Oo,Po.J,I.fM],changeDetection:0}),u})();const u4={types:[{name:"nccn-guideline-select",wrappers:["form-field"],component:Dp,defaultOptions:{props:{label:"NCCN Guideline"}}},{name:"nccn-guideline-multi-select",wrappers:["form-field"],component:Dp,defaultOptions:{props:{isMultiSelect:!0,label:"NCCN Guideline(s)"}}}]};let d4=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,t.UX,v.X0.forChild(u4),Mt.L,pn.sL,We.LV,co.$6,qn.Qp,Re.PV,Pe.o7,k.Jb,et.cg,$e.zf,s.U5,B.ic,ge.ZJ,Jt.X,je,Zt,Nt.s,ze.x,ks]}),u})();const p4=Vt(yn()),uh={types:[{name:"nccn-guideline-version-input",component:(()=>{class u extends p4{constructor(c){super(),this.cdr=c,this.defaultDescription="Please enter the version of the NCCN guideline you're referencing in the format <strong>Version.Year</strong>",this.defaultOptions={validators:{nccnVersionNumber:{expression:m=>{if(m.value){if(/^\d{1,2}\.\d{4}$/.test(m.value)){let G=+m.value.split(".")[1];return G>=2e3&&G<=(new Date).getFullYear()+1}return!1}return!0},message:(m,G)=>`"${G.formControl?.value}" does not fit the format Version.Year`}},props:{label:"NCCN Guideline Version",extraType:"description",description:this.defaultDescription}}}ngAfterViewInit(){this.configureBaseField(),this.state&&this.state.formReady$?this.state.formReady$.pipe((0,De.h)(c=>c),(0,zi.q)(1),(0,ae.t)(this)).subscribe(c=>{this.configureField()}):this.configureField()}configureField(){this.state?.fields.nccnGuidelineId$.pipe((0,ae.t)(this)).subscribe(c=>{c?(this.props.disabled=!1,this.props.required=!0,this.props.extraType="description",this.props.description=this.defaultDescription):(this.props.disabled=!0,this.props.required=!1,this.props.extraType="prompt",this.props.description="NCCN Guideline Version is only required when NCCN Guideline is specified.",this.formControl.setValue(void 0))})}}return u.\u0275fac=function(c){return new(c||u)(e.Y36(e.sBO))},u.\u0275cmp=e.Xpm({type:u,selectors:[["cvc-nccn-guideline-version-input"]],features:[e.qOj],decls:1,vars:2,consts:[["nz-input","","placeholder","ex: 1.2023",3,"formControl","formlyAttributes"]],template:function(c,m){1&c&&e._UZ(0,"input",0),2&c&&e.Q6J("formControl",m.formControl)("formlyAttributes",m.field)},dependencies:[t.Fj,t.JJ,t.oH,v.JD,Pe.Zp],encapsulation:2,changeDetection:0}),u})(),wrappers:["form-field"]}]};let h4=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,t.UX,v.X0.forChild(uh),Pe.o7,je]}),u})();const Op=Vt(yn()),oc={types:[{name:"fda-regulatory-approval-checkbox",wrappers:["form-field"],component:(()=>{class u extends Op{constructor(){super(...arguments),this.defaultDescription="Check this if the referenced therapy is approved for use by the FDA in the specific disease associated with the Assertion (as in a listing <a href='https://www.cancer.gov/about-cancer/treatment/drugs/cancer-type' target='_blank'>here</a>.)",this.defaultOptions={props:{hideLabel:!1,label:"FDA Regulatory Approval",description:this.defaultDescription}}}ngAfterViewInit(){this.configureBaseField(),this.state&&(this.state.formReady$?this.state.formReady$.pipe((0,De.h)(c=>c),(0,zi.q)(1),(0,ae.t)(this)).subscribe(c=>{this.configureField()}):this.configureField())}configureField(){this.state?.requires.allowsFdaApproval$.pipe((0,ae.t)(this)).subscribe(c=>{c?(this.props.disabled=!1,this.props.extraType="description",this.props.description=this.defaultDescription,void 0===this.formControl.value&&this.formControl.setValue(!1)):(this.props.disabled=!0,this.props.description="FDA Regulatory Approval does not apply to this Assertion Type",this.formControl.setValue(void 0))})}}return u.\u0275fac=function(){let y;return function(m){return(y||(y=e.n5z(u)))(m||u)}}(),u.\u0275cmp=e.Xpm({type:u,selectors:[["cvc-fda-regulatory-approval-checkbox"]],features:[e.qOj],decls:2,vars:4,consts:[["nz-checkbox","",3,"nzIndeterminate","formControl","formlyAttributes","ngModelChange"]],template:function(c,m){1&c&&(e.TgZ(0,"label",0),e.NdJ("ngModelChange",function(Fe){return m.props.change&&m.props.change(m.field,Fe)}),e._uU(1),e.qZA()),2&c&&(e.Q6J("nzIndeterminate",m.props.indeterminate&&null==m.formControl.value)("formControl",m.formControl)("formlyAttributes",m.field),e.xp6(1),e.hij(" ",m.props.label,"\n"))},dependencies:[t.JJ,t.oH,Ut.Ie,v.JD],changeDetection:0}),u})()}]};let dh=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,t.UX,Ut.Wr,v.X0.forChild(oc),je]}),u})();const d2=Vt(yn()),h2={types:[{name:"fda-companion-test-checkbox",wrappers:["form-field"],component:(()=>{class u extends d2{constructor(){super(...arguments),this.defaultDescription='Select Yes if an FDA approved companion test exists for the variant and therapy associated with the Assertion (such as tests listed <a href="https://www.fda.gov/medical-devices/in-vitro-diagnostics/list-cleared-or-approved-companion-diagnostic-devices-in-vitro-and-imaging-tools" target="_blank">here</a>).',this.defaultOptions={props:{hideLabel:!1,label:"FDA Companion Test",description:this.defaultDescription}}}ngAfterViewInit(){this.configureBaseField(),this.state&&(this.state.formReady$?this.state.formReady$.pipe((0,De.h)(c=>c),(0,zi.q)(1),(0,ae.t)(this)).subscribe(c=>{this.configureField()}):this.configureField())}configureField(){this.state?.fields.fdaRegulatoryApproval$.pipe((0,ae.t)(this)).subscribe(c=>{c?(this.props.disabled=!1,this.props.extraType="description",this.props.description=this.defaultDescription,void 0===this.formControl.value&&this.formControl.setValue(!1)):(this.props.disabled=!0,this.props.description="FDA Companion Test only applies when Regulatory Approval is selected",this.formControl.setValue(void 0))})}}return u.\u0275fac=function(){let y;return function(m){return(y||(y=e.n5z(u)))(m||u)}}(),u.\u0275cmp=e.Xpm({type:u,selectors:[["cvc-fda-companion-test-checkbox"]],features:[e.qOj],decls:2,vars:4,consts:[["nz-checkbox","",3,"nzIndeterminate","formControl","formlyAttributes","ngModelChange"]],template:function(c,m){1&c&&(e.TgZ(0,"label",0),e.NdJ("ngModelChange",function(Fe){return m.props.change&&m.props.change(m.field,Fe)}),e._uU(1),e.qZA()),2&c&&(e.Q6J("nzIndeterminate",m.props.indeterminate&&null==m.formControl.value)("formControl",m.formControl)("formlyAttributes",m.field),e.xp6(1),e.hij(" ",m.props.label,"\n"))},dependencies:[t.JJ,t.oH,Ut.Ie,v.JD],changeDetection:0}),u})()}]};let f2=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,t.UX,Ut.Wr,v.X0.forChild(h2),je]}),u})();const ph=["optionTemplates"];function hh(u,y){if(1&u&&(e.TgZ(0,"nz-tag")(1,"strong"),e._uU(2),e.qZA()()),2&u){const c=e.oxw().$implicit;e.xp6(2),e.Oqu(c)}}function m2(u,y){1&u&&(e.ynx(0),e.YNc(1,hh,3,1,"ng-template",null,3,e.W1O),e.BQk())}function fh(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"nz-tag",7),e.NdJ("nzOnClose",function(G){e.CHM(c);const Fe=e.oxw(2);return e.KtG(Fe.onTagClose$.next(G))}),e.TgZ(1,"strong"),e._uU(2),e.qZA()()}if(2&u){const c=e.oxw().$implicit;e.xp6(2),e.Oqu(c.nzValue)}}function yd(u,y){if(1&u&&(e.ynx(0),e._uU(1),e.BQk()),2&u){const c=e.oxw().$implicit;e.xp6(1),e.hij(" ",c.nzValue," ")}}function mh(u,y){if(1&u&&(e.TgZ(0,"div",4),e.YNc(1,fh,3,1,"nz-tag",5),e.YNc(2,yd,2,1,"ng-container",6),e.qZA()),2&u){const c=e.oxw();e.xp6(1),e.Q6J("ngIf",!c.props.isMultiSelect),e.xp6(1),e.Q6J("ngIf",c.props.isMultiSelect)}}const gh=Vt(yn(),lt());let wp=(()=>{class u extends gh{constructor(c){super(),this.cdr=c,this.defaultOptions={props:{label:"Reference Build",required:!1,isMultiSelect:!1,description:"Select the human genome reference sequence from which these coordinates are obtained",placeholder:"Select Reference Build"}},this.buildEnum$=new Ge.X([])}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEnumSelectField({optionEnum$:this.buildEnum$,optionTemplate$:this.optionTemplate$,changeDetectorRef:this.cdr})}configureStateConnections(){this.placeholder$=new Ge.X(this.props.placeholder),this.buildEnum$.next((0,Mo.o6)(An.JDX).map(c=>c)),this.optionTemplates||console.error(`${this.field.id} could not find its optionTemplates QueryList to populate its select options, so simple text labels will be displayed.`),this.optionTemplate$=this.optionTemplates?.changes.pipe((0,Ct.U)(c=>c.map(m=>m)))}}return u.\u0275fac=function(c){return new(c||u)(e.Y36(e.sBO))},u.\u0275cmp=e.Xpm({type:u,selectors:[["cvc-reference-build-select"]],viewQuery:function(c,m){if(1&c&&e.Gf(ph,5,e.Rgc),2&c){let G;e.iGM(G=e.CRH())&&(m.optionTemplates=G)}},features:[e.qOj],decls:7,vars:15,consts:[[3,"cvcFormControl","cvcFormlyAttributes","cvcSelectMode","cvcPlaceholder","cvcCustomTemplate","cvcOptions","cvcShowError","cvcDisabled"],[4,"ngFor","ngForOf"],["selectedTemplate",""],["optionTemplates",""],[1,"ant-select-selection-item-content"],["nzMode","closeable",3,"nzOnClose",4,"ngIf"],[4,"ngIf"],["nzMode","closeable",3,"nzOnClose"]],template:function(c,m){if(1&c&&(e._UZ(0,"cvc-enum-select",0),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.YNc(3,m2,3,0,"ng-container",1),e.ALo(4,"ngrxPush"),e.YNc(5,mh,3,2,"ng-template",null,2,e.W1O)),2&c){const G=e.MAs(6);e.Q6J("cvcFormControl",m.formControl)("cvcFormlyAttributes",m.field)("cvcSelectMode",m.props.isMultiSelect?"multiple":"default")("cvcPlaceholder",e.lcZ(1,9,m.placeholder$))("cvcCustomTemplate",G)("cvcOptions",e.lcZ(2,11,m.selectOption$))("cvcShowError",m.showError)("cvcDisabled",m.props.disabled),e.xp6(3),e.Q6J("ngForOf",e.lcZ(4,13,m.buildEnum$))}},dependencies:[M.sg,M.O5,Jt.j,Ke,I.fM]}),u})();const No={types:[{name:"reference-build-select",wrappers:["form-field"],component:wp},{name:"reference-build-multi-select",wrappers:["form-field"],component:wp,defaultOptions:{props:{label:"Levels",isMultiSelect:!0}}}]};let vh=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,t.UX,v.X0.forChild(No),Jt.X,Nt.s,je,Be]}),u})();const _h=["optionTemplates"];function g2(u,y){if(1&u&&(e.ynx(0),e.TgZ(1,"em"),e._UZ(2,"span",8),e.ALo(3,"highlightTypeahead"),e.qZA(),e.BQk()),2&u){const c=e.oxw(2).$implicit,m=e.oxw().ngrxLet;e.xp6(2),e.Q6J("innerHtml",e.xi3(3,1,c.soid,m),e.oJD)}}function f4(u,y){if(1&u&&(e._UZ(0,"cvc-entity-tag",5),e.TgZ(1,"span",6),e.YNc(2,g2,4,4,"ng-container",7),e.qZA()),2&u){const c=e.oxw().$implicit,m=e.oxw().ngrxLet;e.Q6J("cvcDisableLink",!0)("cvcCacheId",c.__typename+":"+c.id)("cvcEmphasize",m),e.xp6(2),e.Q6J("ngIf",c.soid)}}function yh(u,y){1&u&&(e.ynx(0),e.YNc(1,f4,3,4,"ng-template",null,4,e.W1O),e.BQk())}function m4(u,y){if(1&u&&(e.ynx(0),e.YNc(1,yh,3,0,"ng-container",3),e.ALo(2,"ngrxPush"),e.BQk()),2&u){const c=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,c.result$))}}function g4(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"div",9)(1,"cvc-entity-tag",10),e.NdJ("cvcOnClose",function(){const Fe=e.CHM(c).$implicit,Et=e.oxw();return e.KtG(Et.onTagClose$.next(Fe.nzValue))}),e.qZA()()}if(2&u){const c=y.$implicit,m=e.oxw();e.xp6(1),e.Q6J("cvcCacheId","VariantType:"+c.nzValue)("cvcContext",m.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",m.props.isMultiSelect?"default":"closeable")}}const Ch=Vt(yn(),Xo());let zh=(()=>{class u extends Ch{constructor(c,m,G){super(),this.taq=c,this.tq=m,this.changeDetectorRef=G,this.defaultOptions={props:{entityName:{singular:"VariantType",plural:"VariantTypes"},isMultiSelect:!1,placeholders:{default:"Search Variant Types",multiDefault:"Select VariantType(s)"},description:'Add one or more variant types from the <a href="http://www.sequenceontology.org/browser/" target="_blank">Sequence Ontology</a> (e.g., missense, loss-of-function). Be specific as possible, avoid the addition of root concepts, and use the sequence_variant tree of the sequence ontology.',extraType:"prompt"}},this.placeholder$=new Ge.X(this.defaultOptions.props.placeholders.default)}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEntitySelectField({typeaheadQuery:this.taq,typeaheadParam$:void 0,tagQuery:this.tq,getTypeaheadVarsFn:this.getTypeaheadVarsFn,getTypeaheadResultsFn:this.getTypeaheadResultsFn,getTagQueryVarsFn:this.getTagQueryVarsFn,getTagQueryResultsFn:this.getTagQueryResultsFn,getSelectedItemOptionFn:this.getSelectedItemOptionFn,getSelectOptionsFn:this.getSelectOptionsFn,changeDetectorRef:this.changeDetectorRef,selectOpen$:this.selectOpen$,selectComponent:this.selectComponent}),this.configurePlaceholders()}configureStateConnections(){}configurePlaceholders(){}getTypeaheadVarsFn(c){return{name:c}}getTypeaheadResultsFn(c){return c.data.variantTypeTypeahead}getTagQueryVarsFn(c){return{id:c}}getTagQueryResultsFn(c){return c.data.variantType}getSelectedItemOptionFn(c){return{value:c.id,label:c.name}}getSelectOptionsFn(c,m){return c.map((G,Fe)=>({label:m.get(Fe)||G.name,value:G.id}))}}return u.\u0275fac=function(c){return new(c||u)(e.Y36(An.jmY),e.Y36(An._nE),e.Y36(e.sBO))},u.\u0275cmp=e.Xpm({type:u,selectors:[["cvc-variant-type-select"]],viewQuery:function(c,m){if(1&c&&e.Gf(_h,5,e.Rgc),2&c){let G;e.iGM(G=e.CRH())&&(m.optionTemplates=G)}},features:[e.qOj],decls:8,vars:19,consts:[[3,"cvcSelectMode","cvcCustomTemplate","cvcFormControl","cvcFormlyAttributes","cvcEntityName","cvcPlaceholder","cvcResults","cvcOptions","cvcShowError","cvcLoading","cvcOnSearch","cvcOnOpenChange","cvcOnModelChange"],[4,"ngrxLet"],["selectedTemplate",""],[4,"ngFor","ngForOf"],["optionTemplates",""],[3,"cvcDisableLink","cvcCacheId","cvcEmphasize"],["nz-typography","","nzType","secondary"],[4,"ngIf"],["nz-typography","","nzType","secondary",3,"innerHtml"],[1,"ant-select-selection-item-content"],[3,"cvcCacheId","cvcContext","cvcMode","cvcOnClose"]],template:function(c,m){if(1&c&&(e.TgZ(0,"cvc-entity-select",0),e.NdJ("cvcOnSearch",function(Fe){return m.onSearch$.next(Fe)})("cvcOnOpenChange",function(Fe){return m.onOpenChange$.next(Fe)})("cvcOnModelChange",function(Fe){return m.props.change&&m.props.change(m.field,Fe)}),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.ALo(3,"ngrxPush"),e.ALo(4,"ngrxPush"),e.qZA(),e.YNc(5,m4,3,3,"ng-container",1),e.YNc(6,g4,2,3,"ng-template",null,2,e.W1O)),2&c){const G=e.MAs(7);e.Q6J("cvcSelectMode",m.props.isMultiSelect?"multiple":"default")("cvcCustomTemplate",G)("cvcFormControl",m.formControl)("cvcFormlyAttributes",m.field)("cvcEntityName",m.props.entityName)("cvcPlaceholder",e.lcZ(1,11,m.placeholder$))("cvcResults",e.lcZ(2,13,m.result$))("cvcOptions",e.lcZ(3,15,m.selectOption$))("cvcShowError",m.showError)("cvcLoading",e.lcZ(4,17,m.isLoading$)),e.xp6(5),e.Q6J("ngrxLet",m.onSearch$)}},dependencies:[M.sg,M.O5,I.eJ,ge.ZU,Oo,Po.J,I.fM,w.A],changeDetection:0}),u})();const Th={types:[{name:"variant-type-select",wrappers:["form-field"],component:zh,defaultOptions:{props:{label:"Variant Type"}}},{name:"variant-type-multi-select",wrappers:["form-field"],component:zh,defaultOptions:{props:{isMultiSelect:!0,label:"Variant Types"}}}]};let v4=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,t.UX,v.X0.forChild(Th),Mt.L,pn.sL,We.LV,co.$6,qn.Qp,Re.PV,Pe.o7,k.Jb,et.cg,$e.zf,s.U5,B.ic,ge.ZJ,Jt.X,je,Zt,Nt.s,ze.x]}),u})();var ic=a(2701);function v2(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"cvc-string-tag",5),e.NdJ("cvcOnClose",function(){const Fe=e.CHM(c).$implicit,Et=e.oxw(2);return e.KtG(Et.tagClosed(Fe))}),e.qZA()}if(2&u){const c=y.$implicit;e.Q6J("cvcMode","closeable")("cvcLabel",c)}}function Mh(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"div"),e.YNc(1,v2,1,2,"cvc-string-tag",3),e.ALo(2,"ngrxPush"),e.TgZ(3,"input",4),e.NdJ("keydown.enter",function(G){e.CHM(c);const Fe=e.oxw();return e.KtG(Fe.onEnter(G))}),e.qZA()()}if(2&u){const c=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,2,c.clinvarIds$)),e.xp6(2),e.Q6J("placeholder",c.props.placeholder)}}const bh=Vt(yn(),ml);let rc=(()=>{class u extends bh{constructor(c){super(),this.cdr=c,this.defaultOptions={modelOptions:{updateOn:"blur"},props:{label:"Enter value",placeholder:"Enter value and hit Return"}},this.clinvarIds$=new Ge.X([]),this.values=new Set,this.showClinvarIdEntry$=new Ge.X(!1),this.selectModel=void 0,this.selectOptions=[{value:ic.li.NotApplicable,label:"Clinvar IDs not applicable for this variant"},{value:ic.li.NoneFound,label:"Clinvar IDs do not exist for this variant"},{value:ic.li.Found,label:"Clinvar IDs were found for this variant"},{value:void 0,label:""}]}optionSelected(c){const m=c;this.values.clear(),this.clinvarIds$.next([]),null!=m?m==ic.li.Found?(this.showClinvarIdEntry$.next(!0),this.formControl.setValue([])):m==ic.li.NoneFound?(this.showClinvarIdEntry$.next(!1),this.formControl.setValue(["NONE FOUND"])):m==ic.li.NotApplicable&&(console.log("HERE"),this.showClinvarIdEntry$.next(!1),this.formControl.setValue(["NA"])):(this.showClinvarIdEntry$.next(!1),this.formControl.setValue([]),this.clinvarIds$.next([]))}onEnter(c){let m=c.target;m.value&&(this.values.add(m.value),m.value="");let G=Array.from(this.values);this.clinvarIds$.next(G),this.formControl.setValue(G)}tagClosed(c){this.values.delete(c);let m=Array.from(this.values);this.clinvarIds$.next(m),this.formControl.setValue(m),this.clinvarIds$.next(m)}ngAfterViewInit(){this.configureBaseField(),this.configureStringTagField();const c=this.formControl.value;c&&Array.isArray(c)&&("NONE FOUND"==c[0]?this.selectModel=ic.li.NoneFound:"N/A"==c[0]?this.selectModel=ic.li.NotApplicable:(this.selectModel=ic.li.Found,c.forEach(m=>this.values.add(m)),this.showClinvarIdEntry$.next(!0)),this.clinvarIds$.next(c),this.cdr.detectChanges())}}return u.\u0275fac=function(c){return new(c||u)(e.Y36(e.sBO))},u.\u0275cmp=e.Xpm({type:u,selectors:[["cvc-clinvar-input"]],features:[e.qOj],decls:4,vars:7,consts:[["nzAllowClear","",3,"nzOptions","ngModel","ngModelChange"],[4,"ngIf"],["hidden","","nz-input","",3,"formControl","formlyAttributes"],[3,"cvcMode","cvcLabel","cvcOnClose",4,"ngFor","ngForOf"],["nz-input","",3,"placeholder","keydown.enter"],[3,"cvcMode","cvcLabel","cvcOnClose"]],template:function(c,m){1&c&&(e.TgZ(0,"nz-select",0),e.NdJ("ngModelChange",function(Fe){return m.optionSelected(Fe)}),e.qZA(),e.YNc(1,Mh,4,4,"div",1),e.ALo(2,"ngrxPush"),e._UZ(3,"input",2)),2&c&&(e.Q6J("nzOptions",m.selectOptions)("ngModel",m.selectModel),e.xp6(1),e.Q6J("ngIf",e.lcZ(2,5,m.showClinvarIdEntry$)),e.xp6(2),e.Q6J("formControl",m.formControl)("formlyAttributes",m.field))},dependencies:[M.sg,M.O5,t.Fj,t.JJ,t.oH,t.On,v.JD,Pe.Zp,We.Vq,vl,I.fM],changeDetection:0}),u})();const s1={types:[{name:"clinvar-input",wrappers:["form-field"],component:rc},{name:"clinvar-multi-input",wrappers:["form-field"],component:rc,defaultOptions:{props:{isRepeatItem:!0}}}]};let Sh=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,t.UX,t.u5,v.X0.forChild(s1),He.F,Pe.o7,s.U5,We.LV,ks]}),u})();const qd={types:[{name:"cvc-cancel-button",component:(()=>{class u extends v.fS{constructor(c){super(),this.location=c}cancelClicked(){this.location.back()}}return u.\u0275fac=function(c){return new(c||u)(e.Y36(M.Ye))},u.\u0275cmp=e.Xpm({type:u,selectors:[["cvc-cancel-button"]],features:[e.qOj],decls:2,vars:0,consts:[["nz-button","","type","button","nzType","default","nzDanger","",1,"cancel-button",3,"click"]],template:function(c,m){1&c&&(e.TgZ(0,"button",0),e.NdJ("click",function(){return m.cancelClicked()}),e._uU(1," Cancel\n"),e.qZA())},dependencies:[pn.ix,Wo.w,qo.dQ],styles:[".cancel-button[_ngcontent-%COMP%]{margin-right:10px}"],changeDetection:0}),u})()}]};let a1=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,t.UX,v.X0.forChild(qd),pn.sL]}),u})(),Pp=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,ip,A1,ja,el,Ql,xd,ne,dn,tu,On,Fn,As,g1,_u,D1,Tu,al,jd,ea,Sp,n1,_d,d4,h4,dh,f2,vh,v4,Sh,a1]}),u})();var Ma;function Eh(u,y){if(1&u&&e._uU(0),2&u){const c=e.oxw();e.hij(" ",c.props.addFormTitle,"\n")}}const Ip=function(){return[6,6]};let c1=((Ma=class extends v.n2{constructor(){super(),this.contentTemplate$=new _o.t}ngAfterViewInit(){this.field.props&&this.field.props.addFormContent?this.contentTemplate$.next(this.field.props.addFormContent):console.error(`${this.field.id} add-entity-form wrapper failed to find parent field's props.addFormContent TemplateRef.`)}}).\u0275fac=function(y){return new(y||Ma)},Ma.\u0275cmp=e.Xpm({type:Ma,selectors:[["cvc-add-entity-form-wrapper"]],features:[e.qOj],decls:10,vars:7,consts:[[3,"nzGutter"],["nzFlex","auto"],["fieldComponent",""],["nzFlex","20px"],["type","button","nz-button","","nzType","primary","nzSize","default","nzShape","circle","nz-popover","",3,"disabled","nzPopoverTitle","nzPopoverContent"],["nz-icon","","nzType","plus-circle","nzTheme","outline"],["titleTemplate",""]],template:function(y,c){if(1&y&&(e.TgZ(0,"nz-row",0)(1,"nz-col",1),e.GkF(2,null,2),e.qZA(),e.TgZ(4,"nz-col",3)(5,"button",4),e.ALo(6,"ngrxPush"),e._UZ(7,"span",5),e.qZA()()(),e.YNc(8,Eh,1,1,"ng-template",null,6,e.W1O)),2&y){const m=e.MAs(9);e.Q6J("nzGutter",e.DdM(6,Ip)),e.xp6(5),e.Q6J("disabled",null==c.field.props?null:c.field.props.disabled)("nzPopoverTitle",m)("nzPopoverContent",e.lcZ(6,4,c.contentTemplate$))}},dependencies:[pn.ix,Wo.w,qo.dQ,co.lU,Re.Ls,k.t3,k.SK,I.fM],styles:[".add-button[_ngcontent-%COMP%]{font-size:24px;color:#cfcfdf}"],changeDetection:0}),Ma);c1=(0,te.gn)([(0,ae.c)()],c1);const Xd={wrappers:[{name:"add-entity-form",component:c1}]};let xh=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,v.X0.forChild(Xd),pn.sL,co.$6,Re.PV,k.Jb]}),u})();const _4={wrappers:[{name:"field-grid",component:(()=>{class u extends v.n2{get errorState(){return this.showError?"error":""}ngOnInit(){this.props.grid={cols:2,...this.props.grid?this.props.grid:void 0}}}return u.\u0275fac=function(){let y;return function(m){return(y||(y=e.n5z(u)))(m||u)}}(),u.\u0275cmp=e.Xpm({type:u,selectors:[["cvc-field-grid"]],features:[e.qOj],decls:3,vars:1,consts:[[1,"field-grid",3,"ngClass"],["fieldComponent",""]],template:function(c,m){1&c&&(e.TgZ(0,"div",0),e.GkF(1,null,1),e.qZA()),2&c&&e.Q6J("ngClass","cols-"+m.props.grid.cols)},dependencies:[M.mk],styles:[".field-grid.cols-2[_ngcontent-%COMP%]     formly-group:first-of-type{display:grid;grid-template-columns:repeat(2,1fr);gap:8px}.field-grid.cols-3[_ngcontent-%COMP%]     formly-group:first-of-type{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}.field-grid.cols-4[_ngcontent-%COMP%]     formly-group:first-of-type{display:grid;grid-template-columns:repeat(4,1fr);gap:8px}"],changeDetection:0}),u})()}]};let y4=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,t.UX,s.U5,k.Jb,v.X0.forChild(_4)]}),u})();function C4(u,y){if(1&u&&(e.TgZ(0,"nz-col",4),e._UZ(1,"formly-field",5),e.qZA()),2&u){const c=y.$implicit;e.Q6J("nzSpan",(null==c.props?null:c.props.colSpan)||12),e.xp6(1),e.Q6J("field",c)}}function Oh(u,y){}const z4=function(){return[6,6]},T4={wrappers:[{name:"form-card",component:(()=>{class u extends v.n2{get errorState(){return this.showError?"error":""}constructor(){super()}ngOnInit(){this.props.gutterHorizontal=this.props.gutterHorizontal||8,this.props.gutterVertical=this.props.gutterVertical||8}}return u.\u0275fac=function(c){return new(c||u)},u.\u0275cmp=e.Xpm({type:u,selectors:[["cvc-form-card"]],features:[e.qOj],decls:5,vars:5,consts:[[3,"nzTitle","nzExtra"],[3,"nzGutter"],[3,"nzSpan",4,"ngFor","ngForOf"],["cardExtra",""],[3,"nzSpan"],[3,"field"]],template:function(c,m){if(1&c&&(e.TgZ(0,"nz-card",0)(1,"nz-row",1),e.YNc(2,C4,2,2,"nz-col",2),e.qZA()(),e.YNc(3,Oh,0,0,"ng-template",null,3,e.W1O)),2&c){const G=e.MAs(4);e.Q6J("nzTitle",m.props.title)("nzExtra",G),e.xp6(1),e.Q6J("nzGutter",e.DdM(4,z4)),e.xp6(1),e.Q6J("ngForOf",m.field.fieldGroup)}},dependencies:[M.sg,v.cw,k.t3,k.SK,In.bd]}),u})()}]};let Ph=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,t.u5,v.X0.forChild(T4),k.Jb,In.vh,Ut.Wr]}),u})();const z2={wrappers:[{name:"form-footer",component:(()=>{class u extends v.n2{ngOnInit(){}}return u.\u0275fac=function(){let y;return function(m){return(y||(y=e.n5z(u)))(m||u)}}(),u.\u0275cmp=e.Xpm({type:u,selectors:[["cvc-form-footer"]],features:[e.qOj],decls:4,vars:0,consts:[[1,"form-footer"],["nzSpan","24",1,"submit-col"],["fieldComponent",""]],template:function(c,m){1&c&&(e.TgZ(0,"nz-row",0)(1,"nz-col",1),e.GkF(2,null,2),e.qZA()())},dependencies:[k.t3,k.SK],styles:[".form-footer[_ngcontent-%COMP%]{margin-top:1em;border-radius:8px;background-color:#f0f0f0;padding:1em}.submit-col[_ngcontent-%COMP%]{text-align:right}"],changeDetection:0}),u})()}]};let Ss=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,k.Jb,v.X0.forChild(z2)]}),u})();var T2=a(9333),Ih=a(8125),Ah=a(9382);let Fh=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,Re.PV,k.Jb,In.vh,Ah.we,Ih.q6,Xi.Ph,Jt.X,ge.ZJ,L.s]}),u})(),b4=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,pn.sL,io.Rt,Vn.b1]}),u})();var M2=a(553);const b2={VALID:"success",INVALID:"error",PENDING:"processing",DISABLED:"default"};let S4=(()=>{class u{constructor(){this.tagColor="default"}set cvcFormControlStatus(c){this._status=c,this.tagColor=c?b2[c]:"default"}get cvcFormControlStatus(){return this._status}}return u.\u0275fac=function(c){return new(c||u)},u.\u0275cmp=e.Xpm({type:u,selectors:[["cvc-form-status-tag"]],inputs:{cvcFormControlStatus:"cvcFormControlStatus"},decls:3,vars:4,consts:[[3,"nzColor"]],template:function(c,m){1&c&&(e.TgZ(0,"nz-tag",0),e._uU(1),e.ALo(2,"lowercase"),e.qZA()),2&c&&(e.Q6J("nzColor",m.tagColor),e.xp6(1),e.hij(" ",m.cvcFormControlStatus?e.lcZ(2,2,m.cvcFormControlStatus):"UNKNOWN","\n"))},dependencies:[Jt.j,M.i8]}),u})();function E4(u,y){if(1&u&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&u){const c=e.oxw(2).ctrl;e.xp6(1),e.hij(" ",c.value," ")}}function S2(u,y){1&u&&(e.TgZ(0,"span",8),e._uU(1," undefined "),e.qZA())}function E2(u,y){if(1&u&&(e.TgZ(0,"nz-list-item")(1,"nz-list-item-meta")(2,"nz-list-item-meta-title"),e._uU(3),e.qZA(),e.TgZ(4,"nz-list-item-meta-description"),e.YNc(5,E4,2,1,"span",5),e.YNc(6,S2,2,0,"span",6),e.qZA()(),e.TgZ(7,"nz-list-item-extra"),e._UZ(8,"cvc-form-status-tag",7),e.qZA()()),2&u){const c=e.oxw(),m=c.key,G=c.ctrl;e.xp6(3),e.hij(" ",m," "),e.xp6(2),e.Q6J("ngIf",G.value),e.xp6(1),e.Q6J("ngIf",!G.value),e.xp6(2),e.Q6J("cvcFormControlStatus",G.status)}}function Nh(u,y){}const x4=function(u,y){return{key:u,ctrl:y}};function x2(u,y){if(1&u&&e.YNc(0,Nh,0,0,"ng-template",12),2&u){const c=y.$implicit;e.oxw(3);const m=e.MAs(3);e.Q6J("ngTemplateOutlet",m)("ngTemplateOutletContext",e.WLB(2,x4,c.key,c.value))}}function D2(u,y){if(1&u&&(e.TgZ(0,"strong"),e._uU(1),e.qZA()),2&u){const c=e.oxw(2).key;e.xp6(1),e.Oqu(c)}}function O2(u,y){if(1&u&&(e.TgZ(0,"nz-list-item")(1,"nz-card",9)(2,"nz-list",10),e.YNc(3,x2,1,5,null,4),e.ALo(4,"keyvalue"),e.qZA()(),e.YNc(5,D2,2,1,"ng-template",null,11,e.W1O),e.qZA()),2&u){const c=e.oxw(),m=c.key,G=c.ctrl;e.xp6(1),e.Q6J("nzTitle",m),e.xp6(2),e.Q6J("ngForOf",e.lcZ(4,2,G.controls))}}function w2(u,y){if(1&u&&(e.YNc(0,E2,9,4,"nz-list-item",5),e.YNc(1,O2,7,4,"nz-list-item",5)),2&u){const c=y.ctrl;e.Q6J("ngIf",!c.controls),e.xp6(1),e.Q6J("ngIf",c.controls)}}function sc(u,y){}function Lh(u,y){if(1&u&&e.YNc(0,sc,0,0,"ng-template",12),2&u){const c=y.$implicit;e.oxw();const m=e.MAs(3);e.Q6J("ngTemplateOutlet",m)("ngTemplateOutletContext",e.WLB(2,x4,c.key,c.value))}}function P2(u,y){if(1&u&&(e.ynx(0),e.TgZ(1,"nz-list",2),e.YNc(2,w2,2,2,"ng-template",null,3,e.W1O),e.qZA(),e.YNc(4,Lh,1,5,null,4),e.ALo(5,"keyvalue"),e.BQk()),2&u){const c=y.ngIf;e.xp6(4),e.Q6J("ngForOf",e.lcZ(5,1,c.controls))}}function D4(u,y){1&u&&e._uU(0," No AbstractFormControl provided. ")}let I2=(()=>{class u{set cvcAbstractControl(c){if(!c)throw new Error("cvc-form-debug-field-list requires valid cvcFormControl Input.");this._cvcFormControl=c,this.formControl=c}get cvcFormControl(){return this._cvcFormControl}constructor(){}ngOnInit(){}}return u.\u0275fac=function(c){return new(c||u)},u.\u0275cmp=e.Xpm({type:u,selectors:[["cvc-form-debug-field-list"]],inputs:{cvcAbstractControl:"cvcAbstractControl"},decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["noFormControl",""],["nzSize","small"],["ctrlTemplateRef",""],[4,"ngFor","ngForOf"],[4,"ngIf"],["style","padding: 0px 4px; color: white; background-color: #ccc",4,"ngIf"],[3,"cvcFormControlStatus"],[2,"padding","0px 4px","color","white","background-color","#ccc"],["nzSize","small",2,"width","100%",3,"nzTitle"],["nzSize","small",2,"padding","0"],["cardExtra",""],[3,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(c,m){if(1&c&&(e.YNc(0,P2,6,3,"ng-container",0),e.YNc(1,D4,1,0,"ng-template",null,1,e.W1O)),2&c){const G=e.MAs(2);e.Q6J("ngIf",m.formControl)("ngIfElse",G)}},dependencies:[M.sg,M.O5,M.tP,In.bd,Xi.n_,Xi.AA,Xi.yi,Xi.IO,Xi.Pb,Xi.yw,S4,M.Nd],styles:["[_nghost-%COMP%]     nz-card .ant-card-body{padding:6px 0}"]}),u})();var l1;function O4(u,y){if(1&u&&(e.ynx(0),e._UZ(1,"ngx-json-viewer",9),e.BQk()),2&u){const c=e.oxw();e.xp6(1),e.Q6J("json",c.watchModel)}}function Ap(u,y){if(1&u&&(e.ynx(0),e.TgZ(1,"nz-descriptions",10)(2,"nz-descriptions-item",11),e._UZ(3,"cvc-form-status-tag",12),e.qZA(),e.TgZ(4,"nz-descriptions-item",13),e._uU(5),e.qZA(),e.TgZ(6,"nz-descriptions-item",14),e._uU(7),e.qZA(),e.TgZ(8,"nz-descriptions-item",15),e._uU(9),e.qZA(),e.TgZ(10,"nz-descriptions-item",16),e._uU(11),e.qZA(),e.TgZ(12,"nz-descriptions-item",17),e._uU(13),e.qZA()(),e.BQk()),2&u){const c=e.oxw();e.xp6(1),e.Q6J("nzColumn",1),e.xp6(2),e.Q6J("cvcFormControlStatus",null==c.cvcForm?null:c.cvcForm.status),e.xp6(2),e.hij(" ",null==c.cvcForm?null:c.cvcForm.pending," "),e.xp6(2),e.hij(" ",null==c.cvcForm?null:c.cvcForm.touched," "),e.xp6(2),e.hij(" ",null==c.cvcForm?null:c.cvcForm.valid," "),e.xp6(2),e.hij(" ",null==c.cvcForm?null:c.cvcForm.dirty," "),e.xp6(2),e.hij(" ",null==c.cvcForm?null:c.cvcForm.enabled," ")}}function kh(u,y){if(1&u&&(e.ynx(0),e._UZ(1,"cvc-form-debug-field-list",18),e.BQk()),2&u){const c=e.oxw();e.xp6(1),e.Q6J("cvcAbstractControl",c.cvcForm)}}function j0(u,y){1&u&&(e.ynx(0),e._uU(1," State Content "),e.BQk())}function w4(u,y){if(1&u&&(e.TgZ(0,"nz-row")(1,"nz-col",19),e._uU(2," Form Details "),e.qZA(),e.TgZ(3,"nz-col",20),e._UZ(4,"cvc-form-status-tag",12),e.qZA()()),2&u){const c=e.oxw();e.xp6(4),e.Q6J("cvcFormControlStatus",null==c.cvcForm?null:c.cvcForm.status)}}let Fp=((l1=class{constructor(y){this.cdr=y,this.selectedIndex=0}ngOnInit(){if(!this.cvcForm)throw new Error("cvc-form-debug requires valid cvcForm Input.");this.valueChange$=new Ge.X(this.cvcForm.value),this.statusChange$=new Ge.X(this.cvcForm.status),this.formChange$=Pi([this.statusChange$,this.valueChange$]),this.watchModel=this.cvcModel,this.subscriptions=[this.cvcForm.valueChanges.subscribe(y=>{this.watchModel={...this.cvcModel},this.valueChange$.next(y)}),this.cvcForm.statusChanges.subscribe(y=>{this.statusChange$.next(y)}),this.formChange$.subscribe(y=>{this.cdr.detectChanges()})]}}).\u0275fac=function(y){return new(y||l1)(e.Y36(e.sBO))},l1.\u0275cmp=e.Xpm({type:l1,selectors:[["cvc-form-debug"]],inputs:{cvcForm:"cvcForm",cvcModel:"cvcModel"},decls:14,vars:7,consts:[["nzSize","small","nzBordered","true",3,"nzTitle"],["nzSize","small",3,"nzSelectedIndex","nzSelectedIndexChange"],["nzTitle","Model"],["nzTitle","Controls"],["nzTitle","State"],["nzTitle","Form Status"],[3,"ngSwitch"],[4,"ngSwitchCase"],["cardTitle",""],[3,"json"],["nzBordered","","nzSize","small",3,"nzColumn"],["nzTitle","status"],[3,"cvcFormControlStatus"],["nzTitle","pending"],["nzTitle","touched"],["nzTitle","valid"],["nzTitle","dirty"],["nzTitle","enabled"],[3,"cvcAbstractControl"],["nzFlex","2"],["nzFlex","3",1,"form-status-col"]],template:function(y,c){if(1&y&&(e.TgZ(0,"nz-card",0)(1,"nz-card-tab")(2,"nz-tabset",1),e.NdJ("nzSelectedIndexChange",function(G){return c.selectedIndex=G}),e._UZ(3,"nz-tab",2)(4,"nz-tab",3)(5,"nz-tab",4)(6,"nz-tab",5),e.qZA()(),e.ynx(7,6),e.YNc(8,O4,2,1,"ng-container",7),e.YNc(9,Ap,14,7,"ng-container",7),e.YNc(10,kh,2,1,"ng-container",7),e.YNc(11,j0,2,0,"ng-container",7),e.BQk(),e.qZA(),e.YNc(12,w4,5,1,"ng-template",null,8,e.W1O)),2&y){const m=e.MAs(13);e.Q6J("nzTitle",m),e.xp6(2),e.Q6J("nzSelectedIndex",c.selectedIndex),e.xp6(5),e.Q6J("ngSwitch",c.selectedIndex),e.xp6(1),e.Q6J("ngSwitchCase",0),e.xp6(1),e.Q6J("ngSwitchCase",3),e.xp6(1),e.Q6J("ngSwitchCase",1),e.xp6(1),e.Q6J("ngSwitchCase",2)}},dependencies:[M.RF,M.n9,k.t3,k.SK,In.bd,In._i,Ah.xH,Ah.xw,Ih.R7,Ih.uj,L.Y,I2,S4],styles:["[_nghost-%COMP%]{display:block}.form-status-col[_ngcontent-%COMP%]{text-align:right}.form-status-col[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]:last-child{margin-right:0}"],changeDetection:0}),l1);var u1;function P4(u,y){if(1&u&&(e.TgZ(0,"nz-col",4),e._UZ(1,"cvc-form-debug",5),e.qZA()),2&u){const c=e.oxw();e.Q6J("nzSpan",8),e.xp6(1),e.Q6J("cvcForm",c.form)("cvcModel",c.model)}}Fp=(0,te.gn)([(0,ae.c)({arrayName:"subscriptions"})],Fp);const Rh=function(){return[8,8]};let Vh=((u1=class extends v.n2{constructor(y){super()}get errorState(){return this.showError?"error":""}ngOnInit(){this.props.title=this.props.title||"Form Card",this.props.submitLabel=this.props.submitLabel||"Submit",this.props.showDevPanel=!M2.N.production&&(this.props.showDevPanel||false)}}).\u0275fac=function(y){return new(y||u1)(e.Y36(e.sBO))},u1.\u0275cmp=e.Xpm({type:u1,selectors:[["cvc-form-layout-wrapper"]],features:[e.qOj],decls:5,vars:4,consts:[[3,"nzGutter"],[1,"form-col",3,"nzSpan"],["fieldComponent",""],["class","status-col",3,"nzSpan",4,"ngIf"],[1,"status-col",3,"nzSpan"],[3,"cvcForm","cvcModel"]],template:function(y,c){1&y&&(e.TgZ(0,"nz-row",0)(1,"nz-col",1),e.GkF(2,null,2),e.qZA(),e.YNc(4,P4,2,3,"nz-col",3),e.qZA()),2&y&&(e.Q6J("nzGutter",e.DdM(3,Rh)),e.xp6(1),e.Q6J("nzSpan",c.props.showDevPanel?16:24),e.xp6(3),e.Q6J("ngIf",c.props.showDevPanel))},dependencies:[M.O5,k.t3,k.SK,Fp],changeDetection:0}),u1);Vh=(0,te.gn)([(0,ae.c)({arrayName:"subscriptions"})],Vh);const A2={wrappers:[{name:"form-layout",component:Vh}]};let Bh=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,v.X0.forChild(A2),pn.sL,In.vh,Re.PV,Jt.X,Ah.we,co.$6,Xi.Ph,k.Jb,T2.h,b4,Fh,L.s]}),u})(),I4=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,Bh,Ph,Ss,je,y4,xh]}),u})(),F2=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({providers:[{provide:v.l7,multi:!0,useFactory:S,deps:[i.gz]}],imports:[v.X0.forRoot(U),t.UX,s.U5,d.u,I4,L.s,t.UX,v.X0,d.u,s.U5,I4,Pp]}),u})()},2701:(Ot,be,a)=>{function t(A){let S={value:void 0,unset:void 0};return A&&A.trim().length>0?S.value=A.trim():S.unset=!0,S}function i(A){let S={value:void 0,unset:void 0};return void 0!==A?S.value=A:S.unset=!0,S}a.d(be,{aP:()=>Y,li:()=>v,uP:()=>i,xt:()=>t});var v=(()=>((v=v||{})[v.NotApplicable=0]="NotApplicable",v[v.NoneFound=1]="NoneFound",v[v.Found=2]="Found",v))();const Y=[{value:void 0,label:""},{value:"1",label:"1"},{value:"2",label:"2"},{value:"3",label:"3"},{value:"4",label:"4"},{value:"5",label:"5"},{value:"6",label:"6"},{value:"7",label:"7"},{value:"8",label:"8"},{value:"9",label:"9"},{value:"10",label:"10"},{value:"11",label:"11"},{value:"12",label:"12"},{value:"13",label:"13"},{value:"14",label:"14"},{value:"15",label:"15"},{value:"16",label:"16"},{value:"17",label:"17"},{value:"18",label:"18"},{value:"19",label:"19"},{value:"20",label:"20"},{value:"21",label:"21"},{value:"22",label:"22"},{value:"X",label:"X"},{value:"Y",label:"Y"},{value:"MT",label:"MT"}]},313:(Ot,be,a)=>{a.d(be,{A4J:()=>xa,A94:()=>Ic,AIY:()=>Va,AMF:()=>Vu,AO2:()=>I,B0s:()=>au,B97:()=>lc,BQZ:()=>x,BTF:()=>Uo,BYO:()=>ua,Bk6:()=>Nl,Bo4:()=>kc,Cp0:()=>F,D9L:()=>uu,Del:()=>G1,DkJ:()=>Ds,DzV:()=>b1,E1C:()=>T1,E2B:()=>Ba,E8d:()=>S,EFm:()=>vs,EH_:()=>Rs,EwB:()=>lu,F1Y:()=>Ra,F3s:()=>bn,F4e:()=>Ua,FB1:()=>Ye,FJi:()=>gt,FNv:()=>he,FOU:()=>ka,Fvz:()=>ue,GYx:()=>tl,Gbq:()=>Ao,Gnp:()=>$u,HUC:()=>_n,Hmr:()=>Zc,HwR:()=>Eu,IP1:()=>As,IRu:()=>Nt,IZ6:()=>hn,JDX:()=>Tt,Kk:()=>Yt,Kmw:()=>Rr,L5n:()=>ns,L8L:()=>to,LHC:()=>ja,LLl:()=>Xc,LiH:()=>Bs,Lr0:()=>Ka,MCG:()=>Oc,MNv:()=>ku,MPi:()=>_l,MYm:()=>Zs,Mgx:()=>N,MsG:()=>re,N$2:()=>Sc,NQC:()=>It,O2u:()=>Cu,OHm:()=>ds,OIL:()=>ye,OfU:()=>V,P_b:()=>Ai,Pm:()=>Os,QVn:()=>yl,Qtd:()=>Bl,Qzn:()=>ir,R8F:()=>Ha,R8w:()=>e,RTy:()=>R,RYL:()=>la,Rdc:()=>ea,SAN:()=>Ci,SrV:()=>Ft,Sx0:()=>Ce,T1I:()=>du,TNk:()=>pa,TbJ:()=>On,Tg0:()=>Vs,TiL:()=>tt,Tq1:()=>an,Tt7:()=>Jc,UIR:()=>gi,UWf:()=>Js,VGG:()=>jo,VZq:()=>uc,WFw:()=>y1,WGV:()=>j1,WOS:()=>Il,WRV:()=>Fr,X5f:()=>Mr,XQi:()=>Pu,Xft:()=>gs,Y6e:()=>hl,YMi:()=>ho,Y_K:()=>wu,Ybm:()=>uo,ZYZ:()=>xi,Zo2:()=>Qr,_3P:()=>L,_Wm:()=>A,_jb:()=>$i,_nE:()=>Pc,aC3:()=>Ec,bgg:()=>fs,c$m:()=>qc,cCu:()=>U1,cEv:()=>Nr,cIw:()=>xc,cMj:()=>ys,ce2:()=>Io,czh:()=>O1,d4o:()=>He,dDn:()=>_s,dGO:()=>xu,da2:()=>fr,db2:()=>Z1,eDl:()=>ml,eJ3:()=>vu,eY8:()=>Fi,ejK:()=>da,enw:()=>or,fow:()=>Me,fwG:()=>wn,g0X:()=>Ll,ghc:()=>si,h01:()=>U,hVB:()=>J1,h_Y:()=>aa,huM:()=>Pe,i44:()=>Jt,iGM:()=>wa,iJT:()=>ec,iST:()=>hi,io:()=>Qs,iwm:()=>v,jMx:()=>zo,jmY:()=>Nu,jw9:()=>et,k7O:()=>Ve,kQf:()=>ps,kQl:()=>Re,kqt:()=>P,l$X:()=>Xs,l4w:()=>Cc,lYz:()=>kt,lcA:()=>us,ld2:()=>$r,m$d:()=>Yu,m55:()=>O,mII:()=>Ia,mdl:()=>s,mki:()=>w1,mpB:()=>Ut,nSb:()=>xl,nnL:()=>mr,o71:()=>je,oRL:()=>me,olA:()=>Mu,otH:()=>Ar,pHu:()=>$1,pP7:()=>Be,pR8:()=>ll,q1D:()=>qr,q8c:()=>Gn,q9q:()=>Us,qf4:()=>dc,qgP:()=>V1,rJ8:()=>ct,rZD:()=>_t,rzy:()=>ls,sA8:()=>I1,sBY:()=>Ac,sLD:()=>Rl,sfv:()=>de,sjj:()=>El,tI$:()=>ri,tI1:()=>ge,tJ6:()=>sr,tWC:()=>pl,td:()=>Wi,ti:()=>Ea,tji:()=>sa,tw_:()=>pc,u4i:()=>Q,uBv:()=>Y,ubO:()=>Hr,vMt:()=>hc,vjc:()=>P1,vv6:()=>C1,vxe:()=>gu,vz2:()=>go,wJ2:()=>k,wRZ:()=>fu,wbP:()=>Ns,wg3:()=>Lu,wkr:()=>Xt,wpb:()=>We,xlL:()=>Oe,y1h:()=>Z,yic:()=>rn,yqR:()=>Di,z8D:()=>B1,zOE:()=>N1,z_7:()=>k1,zpu:()=>Ou,zwS:()=>kr});var t=a(9111),i=a(5879),v=(()=>((v=v||{}).Na="NA",v.TierIii="TIER_III",v.TierIiLevelC="TIER_II_LEVEL_C",v.TierIiLevelD="TIER_II_LEVEL_D",v.TierIv="TIER_IV",v.TierILevelA="TIER_I_LEVEL_A",v.TierILevelB="TIER_I_LEVEL_B",v))(),s=(()=>((s=s||{}).DoesNotSupport="DOES_NOT_SUPPORT",s.Supports="SUPPORTS",s))(),L=(()=>((L=L||{}).AdverseResponse="ADVERSE_RESPONSE",L.Benign="BENIGN",L.BetterOutcome="BETTER_OUTCOME",L.LikelyBenign="LIKELY_BENIGN",L.LikelyOncogenic="LIKELY_ONCOGENIC",L.LikelyPathogenic="LIKELY_PATHOGENIC",L.Na="NA",L.Negative="NEGATIVE",L.Oncogenic="ONCOGENIC",L.Pathogenic="PATHOGENIC",L.PoorOutcome="POOR_OUTCOME",L.Positive="POSITIVE",L.ReducedSensitivity="REDUCED_SENSITIVITY",L.Resistance="RESISTANCE",L.Sensitivityresponse="SENSITIVITYRESPONSE",L.UncertainSignificance="UNCERTAIN_SIGNIFICANCE",L))(),Q=(()=>((Q=Q||{}).AmpLevel="AMP_LEVEL",Q.AssertionDirection="ASSERTION_DIRECTION",Q.AssertionType="ASSERTION_TYPE",Q.DiseaseName="DISEASE_NAME",Q.EvidenceItemsCount="EVIDENCE_ITEMS_COUNT",Q.Id="ID",Q.Significance="SIGNIFICANCE",Q.Status="STATUS",Q.Summary="SUMMARY",Q.TherapyName="THERAPY_NAME",Q))(),Y=(()=>((Y=Y||{}).Diagnostic="DIAGNOSTIC",Y.Oncogenic="ONCOGENIC",Y.Predictive="PREDICTIVE",Y.Predisposing="PREDISPOSING",Y.Prognostic="PROGNOSTIC",Y))(),A=(()=>((A=A||{}).And="AND",A.Or="OR",A))(),S=(()=>((S=S||{}).EvidenceItemCount="EVIDENCE_ITEM_COUNT",S.Name="NAME",S.NctId="NCT_ID",S.SourceCount="SOURCE_COUNT",S))(),N=(()=>((N=N||{}).Conflict="CONFLICT",N.Expired="EXPIRED",N.Missing="MISSING",N.Valid="VALID",N))(),V=(()=>((V=V||{}).Assertion="ASSERTION",V.EvidenceItem="EVIDENCE_ITEM",V.Gene="GENE",V.MolecularProfile="MOLECULAR_PROFILE",V.Source="SOURCE",V.Variant="VARIANT",V.VariantGroup="VARIANT_GROUP",V))(),U=(()=>((U=U||{}).Created="CREATED",U.LastModified="LAST_MODIFIED",U))(),e=(()=>((e=e||{}).AssertionCount="ASSERTION_COUNT",e.Doid="DOID",e.EvidenceItemCount="EVIDENCE_ITEM_COUNT",e.GeneCount="GENE_COUNT",e.Name="NAME",e.VariantCount="VARIANT_COUNT",e))(),I=(()=>((I=I||{}).Accepted="ACCEPTED",I.AssertionAccepted="ASSERTION_ACCEPTED",I.AssertionRejected="ASSERTION_REJECTED",I.AssertionReverted="ASSERTION_REVERTED",I.AssertionSubmitted="ASSERTION_SUBMITTED",I.Commented="COMMENTED",I.CuratedSourceSuggestion="CURATED_SOURCE_SUGGESTION",I.DeprecatedMolecularProfile="DEPRECATED_MOLECULAR_PROFILE",I.DeprecatedVariant="DEPRECATED_VARIANT",I.Flagged="FLAGGED",I.FlagResolved="FLAG_RESOLVED",I.PublicationSuggested="PUBLICATION_SUGGESTED",I.Rejected="REJECTED",I.RejectedSourceSuggestion="REJECTED_SOURCE_SUGGESTION",I.RequeuedSourceSuggestion="REQUEUED_SOURCE_SUGGESTION",I.Reverted="REVERTED",I.RevisionAccepted="REVISION_ACCEPTED",I.RevisionRejected="REVISION_REJECTED",I.RevisionSuggested="REVISION_SUGGESTED",I.RevisionSuperseded="REVISION_SUPERSEDED",I.Submitted="SUBMITTED",I))(),k=(()=>((k=k||{}).Organization="ORGANIZATION",k.Subject="SUBJECT",k.Unscoped="UNSCOPED",k.User="USER",k))(),ge=(()=>((ge=ge||{}).DoesNotSupport="DOES_NOT_SUPPORT",ge.Na="NA",ge.Supports="SUPPORTS",ge))(),Ce=(()=>((Ce=Ce||{}).A="A",Ce.B="B",Ce.C="C",Ce.D="D",Ce.E="E",Ce))(),Z=(()=>((Z=Z||{}).AdverseResponse="ADVERSE_RESPONSE",Z.Benign="BENIGN",Z.BetterOutcome="BETTER_OUTCOME",Z.DominantNegative="DOMINANT_NEGATIVE",Z.GainOfFunction="GAIN_OF_FUNCTION",Z.LikelyBenign="LIKELY_BENIGN",Z.LikelyPathogenic="LIKELY_PATHOGENIC",Z.LossOfFunction="LOSS_OF_FUNCTION",Z.Na="NA",Z.Negative="NEGATIVE",Z.Neomorphic="NEOMORPHIC",Z.Oncogenicity="ONCOGENICITY",Z.Pathogenic="PATHOGENIC",Z.PoorOutcome="POOR_OUTCOME",Z.Positive="POSITIVE",Z.Predisposition="PREDISPOSITION",Z.Protectiveness="PROTECTIVENESS",Z.ReducedSensitivity="REDUCED_SENSITIVITY",Z.Resistance="RESISTANCE",Z.Sensitivityresponse="SENSITIVITYRESPONSE",Z.UnalteredFunction="UNALTERED_FUNCTION",Z.UncertainSignificance="UNCERTAIN_SIGNIFICANCE",Z.Unknown="UNKNOWN",Z))(),F=(()=>((F=F||{}).Description="DESCRIPTION",F.DiseaseName="DISEASE_NAME",F.EvidenceDirection="EVIDENCE_DIRECTION",F.EvidenceLevel="EVIDENCE_LEVEL",F.EvidenceRating="EVIDENCE_RATING",F.EvidenceType="EVIDENCE_TYPE",F.Id="ID",F.Significance="SIGNIFICANCE",F.Status="STATUS",F.TherapyName="THERAPY_NAME",F.VariantOrigin="VARIANT_ORIGIN",F))(),R=(()=>((R=R||{}).Accepted="ACCEPTED",R.Rejected="REJECTED",R.Submitted="SUBMITTED",R))(),O=(()=>((O=O||{}).Accepted="ACCEPTED",O.All="ALL",O.Rejected="REJECTED",O.Submitted="SUBMITTED",O))(),P=(()=>((P=P||{}).Diagnostic="DIAGNOSTIC",P.Functional="FUNCTIONAL",P.Oncogenic="ONCOGENIC",P.Predictive="PREDICTIVE",P.Predisposing="PREDISPOSING",P.Prognostic="PROGNOSTIC",P))(),x=(()=>((x=x||{}).Open="OPEN",x.Resolved="RESOLVED",x))(),de=(()=>((de=de||{}).Assertion="ASSERTION",de.EvidenceItem="EVIDENCE_ITEM",de.Gene="GENE",de.MolecularProfile="MOLECULAR_PROFILE",de.Variant="VARIANT",de.VariantGroup="VARIANT_GROUP",de))(),ue=(()=>((ue=ue||{}).AssertionCount="assertionCount",ue.DiseaseName="diseaseName",ue.EntrezSymbol="entrezSymbol",ue.EvidenceItemCount="evidenceItemCount",ue.GeneAlias="geneAlias",ue.MolecularProfileCount="molecularProfileCount",ue.TherapyName="therapyName",ue.VariantCount="variantCount",ue))(),me=(()=>((me=me||{}).Assertion="ASSERTION",me.EvidenceItem="EVIDENCE_ITEM",me.Gene="GENE",me.MolecularProfile="MOLECULAR_PROFILE",me.Variant="VARIANT",me.VariantGroup="VARIANT_GROUP",me))(),re=(()=>((re=re||{}).All="ALL",re.WithAccepted="WITH_ACCEPTED",re.WithAcceptedOrSubmitted="WITH_ACCEPTED_OR_SUBMITTED",re.WithSubmitted="WITH_SUBMITTED",re))(),he=(()=>((he=he||{}).AssertionCount="assertionCount",he.EvidenceItemCount="evidenceItemCount",he.MolecularProfileScore="molecularProfileScore",he.VariantCount="variantCount",he))(),Me=(()=>((Me=Me||{}).Mention="MENTION",Me.Subscription="SUBSCRIPTION",Me))(),Oe=(()=>((Oe=Oe||{}).Id="ID",Oe.Name="NAME",Oe))(),kt=(()=>((kt=kt||{}).AssertionCount="ASSERTION_COUNT",kt.EvidenceItemCount="EVIDENCE_ITEM_COUNT",kt.HpoId="HPO_ID",kt.Name="NAME",kt))(),It=(()=>((It=It||{}).Read="READ",It.Unread="UNREAD",It))(),Tt=(()=>((Tt=Tt||{}).Grch37="GRCH37",Tt.Grch38="GRCH38",Tt.Ncbi36="NCBI36",Tt))(),gt=(()=>((gt=gt||{}).Accepted="ACCEPTED",gt.New="NEW",gt.Rejected="REJECTED",gt.Superseded="SUPERSEDED",gt))(),_t=(()=>((_t=_t||{}).Assertion="ASSERTION",_t.EvidenceItem="EVIDENCE_ITEM",_t.Gene="GENE",_t.MolecularProfile="MOLECULAR_PROFILE",_t.Revision="REVISION",_t.Variant="VARIANT",_t.VariantGroup="VARIANT_GROUP",_t))(),Ft=(()=>((Ft=Ft||{}).Asc="ASC",Ft.Desc="DESC",Ft))(),rn=(()=>((rn=rn||{}).Asco="ASCO",rn.Ash="ASH",rn.Pubmed="PUBMED",rn))(),bn=(()=>((bn=bn||{}).Curated="CURATED",bn.New="NEW",bn.Rejected="REJECTED",bn))(),et=(()=>((et=et||{}).Citation="CITATION",et.CitationId="CITATION_ID",et.CreatedAt="CREATED_AT",et.DiseaseName="DISEASE_NAME",et.SourceType="SOURCE_TYPE",et.Submitter="SUBMITTER",et))(),Re=(()=>((Re=Re||{}).Authors="AUTHORS",Re.CitationId="CITATION_ID",Re.EvidenceCount="EVIDENCE_COUNT",Re.Journal="JOURNAL",Re.Name="NAME",Re.SourceType="SOURCE_TYPE",Re.SuggestionCount="SUGGESTION_COUNT",Re.Year="YEAR",Re))(),je=(()=>((je=je||{}).Assertion="ASSERTION",je.EvidenceItem="EVIDENCE_ITEM",je.Gene="GENE",je.MolecularProfile="MOLECULAR_PROFILE",je.Revision="REVISION",je.SourceSuggestion="SOURCE_SUGGESTION",je.Variant="VARIANT",je.VariantGroup="VARIANT_GROUP",je))(),Ut=(()=>((Ut=Ut||{}).Assertion="ASSERTION",Ut.EvidenceItem="EVIDENCE_ITEM",Ut.Gene="GENE",Ut.MolecularProfile="MOLECULAR_PROFILE",Ut.Revision="REVISION",Ut.Role="ROLE",Ut.Variant="VARIANT",Ut.VariantGroup="VARIANT_GROUP",Ut))(),Xt=(()=>((Xt=Xt||{}).Combination="COMBINATION",Xt.Sequential="SEQUENTIAL",Xt.Substitutes="SUBSTITUTES",Xt))(),_n=(()=>((_n=_n||{}).AssertionCount="ASSERTION_COUNT",_n.EvidenceItemCount="EVIDENCE_ITEM_COUNT",_n.Name="NAME",_n.NcitId="NCIT_ID",_n))(),On=(()=>((On=On||{}).AllTime="ALL_TIME",On.LastMonth="LAST_MONTH",On.LastWeek="LAST_WEEK",On.LastYear="LAST_YEAR",On))(),Jt=(()=>((Jt=Jt||{}).Admin="ADMIN",Jt.Curator="CURATOR",Jt.Editor="EDITOR",Jt))(),Nt=(()=>((Nt=Nt||{}).Id="ID",Nt.LastAction="LAST_ACTION",Nt.Name="NAME",Nt.Role="ROLE",Nt))(),Ye=(()=>((Ye=Ye||{}).EvidenceItemCount="EVIDENCE_ITEM_COUNT",Ye.GeneNames="GENE_NAMES",Ye.Name="NAME",Ye.VariantCount="VARIANT_COUNT",Ye.VariantNames="VARIANT_NAMES",Ye))(),He=(()=>((He=He||{}).CoordinateEnd="COORDINATE_END",He.CoordinateStart="COORDINATE_START",He.Name="NAME",He))(),Pe=(()=>((Pe=Pe||{}).Combined="COMBINED",Pe.CommonGermline="COMMON_GERMLINE",Pe.Na="NA",Pe.RareGermline="RARE_GERMLINE",Pe.Somatic="SOMATIC",Pe.Unknown="UNKNOWN",Pe))(),We=(()=>((We=We||{}).Name="NAME",We.Soid="SOID",We.VariantCount="VARIANT_COUNT",We))(),Be=(()=>((Be=Be||{}).DiseaseName="diseaseName",Be.EntrezSymbol="entrezSymbol",Be.TherapyName="therapyName",Be.VariantName="variantName",Be))();const xe=t.Ps`
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
    `,te=t.Ps`
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
    ${xe}`,ae=t.Ps`
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
    ${xe}`,De=t.Ps`
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
    `,Ct=t.Ps`
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
    `,sn=t.Ps`
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
    `,yn=t.Ps`
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
    `,st=t.Ps`
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
    ${yn}`,it=t.Ps`
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
    ${xe}`,lt=t.Ps`
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
    ${xe}`,Pt=t.Ps`
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
    ${Pt}`,Vt=t.Ps`
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
    `,Ke=t.Ps`
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
    `,K=t.Ps`
    fragment QuicksearchResult on SearchResult {
  id
  resultType
  name
  matchingText
}
    `,w=t.Ps`
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
    `,J=t.Ps`
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
    `,Te=t.Ps`
    fragment menuMolecularProfile on MolecularProfile {
  id
  name
  link
  flagged
}
    `,zt=t.Ps`
    fragment LeaderboardOrganizationFields on LeaderboardOrganization {
  id
  name
  actionCount
  rank
  profileImagePath(size: 64)
}
    `,nt=t.Ps`
    fragment orgPopover on Organization {
  id
  profileImagePath(size: 64)
  name
  description
  url
}
    `,qe=t.Ps`
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
    `,rt=t.Ps`
    fragment PhenotypeBrowseTableRowFields on BrowsePhenotype {
  id
  name
  hpoId
  url
  assertionCount
  evidenceCount
  link
}
    `,Rt=t.Ps`
    fragment validationError on FieldValidationError {
  fieldName
  error
}
    `,St=t.Ps`
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
    `,gn=t.Ps`
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
    `,Ze=t.Ps`
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
    `,ut=t.Ps`
    fragment subscriptionId on Subscription {
  id
  __typename
}
    `,ce=t.Ps`
    fragment TimepointCount on TimePointCounts {
  allTime
  newThisMonth
  newThisWeek
  newThisYear
}
    `,_e=t.Ps`
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
    `,mt=t.Ps`
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
    `,Ae=t.Ps`
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
    `,at=t.Ps`
    fragment TherapyBrowseTableRowFields on BrowseTherapy {
  id
  name
  ncitId
  therapyUrl
  assertionCount
  evidenceCount
  link
}
    `,Ht=t.Ps`
    fragment LeaderboardUserFields on LeaderboardUser {
  id
  name
  displayName
  actionCount
  role
  rank
  profileImagePath(size: 64)
}
    `,un=t.Ps`
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
    `,Lt=t.Ps`
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
  mostRecentActionTimestamp
}
    `,dt=t.Ps`
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
    `,ft=t.Ps`
    fragment BrowseVariantGroupRowFields on BrowseVariantGroup {
  id
  name
  link
  geneNames
  variantNames
  variantCount
  evidenceItemCount
}
    `,ne=t.Ps`
    fragment variantTypePopover on VariantTypePopover {
  id
  name
  url
  soid
  variantCount
}
    `,B=t.Ps`
    fragment VariantTypeBrowseTableRowFields on BrowseVariantType {
  id
  name
  soid
  url
  variantCount
  link
}
    `,ze=t.Ps`
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
    `,$e=t.Ps`
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
    `,Mt=t.Ps`
    fragment menuVariantType on BrowseVariantType {
  id
  name
  link
}
    `,on=t.Ps`
    fragment menuVariant on Variant {
  id
  name
  link
  flagged
}
    `,Zt=t.Ps`
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
    `,Wn=t.Ps`
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
    `,pn=t.Ps`
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
    `,qn=t.Ps`
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
    `,co=t.Ps`
    fragment AddDiseaseFields on AddDiseasePayload {
  new
  disease {
    id
    name
    displayName
  }
}
    `,_o=t.Ps`
    fragment GeneTypeaheadFields on Gene {
  id
  name
  geneAliases
  entrezId
}
    `,Yo=t.Ps`
    fragment SourceTypeaheadResult on Source {
  id
  name
  citation
  citationId
  sourceType
}
    `,Ko=t.Ps`
    fragment SourceStubFields on SourceStub {
  id
  citationId
  sourceType
}
    `,mo=(t.Ps`
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
    `),Xn=t.Ps`
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
    `,di=t.Ps`
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
    `,wo=(t.Ps`
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
    `),So=t.Ps`
    fragment DiseaseSelectTypeaheadFields on Disease {
  id
  name
  link
  displayName
  doid
  diseaseAliases
}
    `,Eo=t.Ps`
    fragment TherapySelectTypeaheadFields on Therapy {
  id
  name
  link
  ncitId
  therapyAliases
}
    `,Pi=t.Ps`
    fragment PhenotypeSelectTypeaheadFields on Phenotype {
  id
  name
  link
  hpoId
}
    `,Xo=t.Ps`
    fragment SourceSelectTypeaheadFields on Source {
  id
  name
  link
  citation
  citationId
  sourceType
}
    `,zi=t.Ps`
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
    ${wo}
${So}
${Eo}
${Pi}
${Xo}`,An=t.Ps`
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
    `,bi=t.Ps`
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
    `,Si=t.Ps`
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
    `,tr=t.Ps`
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
    `,Gi=t.Ps`
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
    ${wo}
${So}
${Eo}
${Pi}
${Xo}`,Or=t.Ps`
    fragment CoordinateFields on Coordinate {
  chromosome
  representativeTranscript
  start
  stop
}
    `,Ei=t.Ps`
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
    ${Or}`,vr=t.Ps`
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
    `,Qi=t.Ps`
    fragment AcmgCodeSelectTypeaheadFields on AcmgCode {
  id
  code
  name
  description
  tooltip
}
    `,ur=t.Ps`
    fragment ClingenCodeSelectTypeaheadFields on ClingenCode {
  id
  code
  name
  description
  tooltip
  exclusive
}
    `,dr=t.Ps`
    fragment QuickAddDiseaseFields on AddDiseasePayload {
  new
  disease {
    ...DiseaseSelectTypeaheadFields
  }
}
    ${So}`,lo=t.Ps`
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
    ${xe}`,Oo=t.Ps`
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
    `,Po=t.Ps`
    fragment GeneSelectTypeaheadFields on Gene {
  id
  entrezId
  name
  geneAliases
  link
}
    `,Jo=t.Ps`
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
    `,Ro=t.Ps`
    fragment NccnGuidelineSelectTypeaheadFields on NccnGuideline {
  id
  name
}
    `,Wo=t.Ps`
    fragment QuickAddTherapyFields on AddTherapyPayload {
  new
  therapy {
    ...TherapySelectTypeaheadFields
  }
}
    ${Eo}`,Ti=(t.Ps`
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
    `),Hi=(t.Ps`
    fragment QuickAddVariantFields on AddVariantPayload {
  clientMutationId
  new
  variant {
    ...VariantSelectTypeaheadFields
  }
}
    ${Ti}`,t.Ps`
    fragment VariantTypeSelectTypeaheadFields on VariantType {
  id
  name
  link
  soid
}
    `),ei=t.Ps`
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
    `,Yn=t.Ps`
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
    ${xe}`,so=t.Ps`
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
    `,Ue=t.Ps`
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
    ${so}`,se=t.Ps`
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
    `,we=t.Ps`
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
    ${xe}`,Qe=t.Ps`
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
    `,bt=t.Ps`
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
    `,Bt=t.Ps`
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
    `,tn=t.Ps`
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
    ${Bt}`,fn=t.Ps`
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
    `,qt=t.Ps`
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
    ${fn}
${xe}`,Cn=t.Ps`
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
    `,Nn=t.Ps`
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
    `,Sn=t.Ps`
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
    `,dn=t.Ps`
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
    `,xn=t.Ps`
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
    `,Qn=t.Ps`
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
    `,In=t.Ps`
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
    `,Vn=t.Ps`
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
    ${In}`,Un=t.Ps`
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
    `,jn=t.Ps`
    fragment notificationOrganization on Organization {
  id
  name
}
    `,eo=t.Ps`
    fragment notificationOriginatingUsers on User {
  id
  displayName
}
    `,Co=t.Ps`
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
    ${yn}`,Kn=t.Ps`
    fragment subscribable on Subscribable {
  id
  entityType
  __typename
}
    `,Fo=t.Ps`
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
    `,Mo=t.Ps`
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
    `,Go=t.Ps`
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
    ${Bt}`,To=t.Ps`
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
    `,mi=t.Ps`
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
    ${To}`,_i=t.Ps`
    query AssertionPopover($assertionId: Int!) {
  assertion(id: $assertionId) {
    ...assertionPopover
  }
}
    ${te}`;let Ao=(()=>{class C extends t.AE{constructor(ee){super(ee),this.document=_i}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const Lo=t.Ps`
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
    ${ae}`;let Wi=(()=>{class C extends t.AE{constructor(ee){super(ee),this.document=Lo}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const ii=t.Ps`
    query ClinicalTrialPopover($clinicalTrialId: Int!) {
  clinicalTrials(id: $clinicalTrialId) {
    edges {
      node {
        ...clinicalTrialPopover
      }
    }
  }
}
    ${De}`;let gi=(()=>{class C extends t.AE{constructor(ee){super(ee),this.document=ii}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const nr=t.Ps`
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
    ${Ge}`;let Ai=(()=>{class C extends t.AE{constructor(ee){super(ee),this.document=nr}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const Zi=t.Ps`
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
    ${Bt}`;let hi=(()=>{class C extends t.AE{constructor(ee){super(ee),this.document=Zi}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const ke=t.Ps`
    query CommentPopover($commentId: Int!) {
  comment(id: $commentId) {
    ...commentPopover
  }
}
    ${Ct}`;let Yt=(()=>{class C extends t.AE{constructor(ee){super(ee),this.document=ke}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const W=t.Ps`
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
    `;let Ve=(()=>{class C extends t.AE{constructor(ee){super(ee),this.document=W}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const Gt=t.Ps`
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
    ${sn}`;let an=(()=>{class C extends t.AE{constructor(ee){super(ee),this.document=Gt}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const Rn=t.Ps`
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
    `;let ho=(()=>{class C extends t.AE{constructor(ee){super(ee),this.document=Rn}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const fo=t.Ps`
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
    ${st}`;let Uo=(()=>{class C extends t.AE{constructor(ee){super(ee),this.document=fo}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const ni=t.Ps`
    query EvidencePopover($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...evidencePopover
  }
}
    ${it}`;let uo=(()=>{class C extends t.AE{constructor(ee){super(ee),this.document=ni}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const Li=t.Ps`
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
    ${lt}`;let Fi=(()=>{class C extends t.AE{constructor(ee){super(ee),this.document=Li}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const _r=t.Ps`
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
    ${wt}`;let ls=(()=>{class C extends t.AE{constructor(ee){super(ee),this.document=_r}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const Se=t.Ps`
    query FlagPopover($flagId: Int!) {
  flag(id: $flagId) {
    ...flagPopover
  }
}
    ${Vt}`;let ye=(()=>{class C extends t.AE{constructor(ee){super(ee),this.document=Se}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const pe=t.Ps`
    query GenePopover($geneId: Int!) {
  gene(id: $geneId) {
    ...genePopover
  }
}
    ${jt}`;let ct=(()=>{class C extends t.AE{constructor(ee){super(ee),this.document=pe}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const zn=t.Ps`
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
    totalCount
    filteredCount
    pageCount
  }
}
    ${Ke}`;let Gn=(()=>{class C extends t.AE{constructor(ee){super(ee),this.document=zn}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const fi=t.Ps`
    query Quicksearch($query: String!, $types: [SearchableEntities!], $highlightMatches: Boolean) {
  search(query: $query, types: $types, highlightMatches: $highlightMatches) {
    ...QuicksearchResult
  }
}
    ${K}`;let si=(()=>{class C extends t.AE{constructor(ee){super(ee),this.document=fi}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const wr=t.Ps`
    query MolecularProfilePopover($molecularProfileId: Int!) {
  molecularProfile(id: $molecularProfileId) {
    ...molecularProfilePopoverFields
  }
}
    ${w}`;let Ds=(()=>{class C extends t.AE{constructor(ee){super(ee),this.document=wr}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const Sa=t.Ps`
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
    ${J}`;let Us=(()=>{class C extends t.AE{constructor(ee){super(ee),this.document=Sa}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const Gs=t.Ps`
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
    ${Te}`;let us=(()=>{class C extends t.AE{constructor(ee){super(ee),this.document=Gs}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const es=t.Ps`
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
    ${zt}`;let $r=(()=>{class C extends t.AE{constructor(ee){super(ee),this.document=es}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const Yr=t.Ps`
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
    ${zt}`;let or=(()=>{class C extends t.AE{constructor(ee){super(ee),this.document=Yr}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const Ur=t.Ps`
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
    ${zt}`;let ri=(()=>{class C extends t.AE{constructor(ee){super(ee),this.document=Ur}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const pr=t.Ps`
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
    ${zt}`;let Os=(()=>{class C extends t.AE{constructor(ee){super(ee),this.document=pr}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const Pr=t.Ps`
    query OrgPopover($orgId: Int!) {
  organization(id: $orgId) {
    ...orgPopover
  }
}
    ${nt}`;let Mr=(()=>{class C extends t.AE{constructor(ee){super(ee),this.document=Pr}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const Gr=t.Ps`
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
    ${qe}`;let Qs=(()=>{class C extends t.AE{constructor(ee){super(ee),this.document=Gr}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const Ir=t.Ps`
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
    `;let ds=(()=>{class C extends t.AE{constructor(ee){super(ee),this.document=Ir}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const hr=t.Ps`
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
    ${rt}`;let lc=(()=>{class C extends t.AE{constructor(ee){super(ee),this.document=hr}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const br=t.Ps`
    mutation AcceptRevision($input: AcceptRevisionsInput!) {
  acceptRevisions(input: $input) {
    revisions {
      id
      __typename
    }
  }
}
    `;let Ea=(()=>{class C extends t.mm{constructor(ee){super(ee),this.document=br}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const Wc=t.Ps`
    mutation RejectRevision($input: RejectRevisionsInput!) {
  rejectRevisions(input: $input) {
    revisions {
      id
      __typename
    }
  }
}
    `;let uc=(()=>{class C extends t.mm{constructor(ee){super(ee),this.document=Wc}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const Sr=t.Ps`
    query ValidateRevisionsForAcceptance($ids: [Int!]!) {
  validateRevisionsForAcceptance(revisionIds: $ids) {
    genericErrors
    validationErrors {
      ...validationError
    }
  }
}
    ${Rt}`;let ir=(()=>{class C extends t.AE{constructor(ee){super(ee),this.document=Sr}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const ts=t.Ps`
    query RevisionPopover($revisionId: Int!) {
  revision(id: $revisionId) {
    ...revisionPopover
  }
}
    ${St}`;let Ar=(()=>{class C extends t.AE{constructor(ee){super(ee),this.document=ts}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const ws=t.Ps`
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
    ${gn}`;let ns=(()=>{class C extends t.AE{constructor(ee){super(ee),this.document=ws}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const js=t.Ps`
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
    ${Ze}`;let ps=(()=>{class C extends t.AE{constructor(ee){super(ee),this.document=js}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const hs=t.Ps`
    query SubscriptionForEntity($subscribable: SubscribableInput!) {
  subscriptionForEntity(subscribable: $subscribable) {
    ...subscriptionId
  }
}
    ${ut}`;let xa=(()=>{class C extends t.AE{constructor(ee){super(ee),this.document=hs}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const Ws=t.Ps`
    mutation ModerateEvidenceItem($input: ModerateEvidenceItemInput!) {
  moderateEvidenceItem(input: $input) {
    evidenceItem {
      id
    }
  }
}
    `;let Zs=(()=>{class C extends t.mm{constructor(ee){super(ee),this.document=Ws}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const Ks=t.Ps`
    mutation ModerateAssertion($input: ModerateAssertionInput!) {
  moderateAssertion(input: $input) {
    assertion {
      id
    }
  }
}
    `;let $i=(()=>{class C extends t.mm{constructor(ee){super(ee),this.document=Ks}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const Ni=t.Ps`
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
    ${ce}`;let Js=(()=>{class C extends t.AE{constructor(ee){super(ee),this.document=Ni}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const ai=t.Ps`
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
    ${_e}`;let Fr=(()=>{class C extends t.AE{constructor(ee){super(ee),this.document=ai}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();t.Ps`
    mutation UpdateSourceSuggestionStatus($input: UpdateSourceSuggestionStatusInput!) {
  updateSourceSuggestionStatus(input: $input) {
    sourceSuggestion {
      id
      status
    }
  }
}
    `;const fe=t.Ps`
    query SourcePopover($sourceId: Int!) {
  sourcePopover(id: $sourceId) {
    ...sourcePopover
  }
}
    ${mt}`;let tt=(()=>{class C extends t.AE{constructor(ee){super(ee),this.document=fe}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const At=t.Ps`
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
    ${Ae}`;let hn=(()=>{class C extends t.AE{constructor(ee){super(ee),this.document=At}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const Tn=t.Ps`
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
    `;let to=(()=>{class C extends t.AE{constructor(ee){super(ee),this.document=Tn}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const Qo=t.Ps`
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
    ${at}`;let go=(()=>{class C extends t.AE{constructor(ee){super(ee),this.document=Qo}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const Vo=t.Ps`
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
    ${Ht}`;let Io=(()=>{class C extends t.AE{constructor(ee){super(ee),this.document=Vo}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const vi=t.Ps`
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
    ${Ht}`;let jo=(()=>{class C extends t.AE{constructor(ee){super(ee),this.document=vi}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const yi=t.Ps`
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
    ${Ht}`;let Ci=(()=>{class C extends t.AE{constructor(ee){super(ee),this.document=yi}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const ao=t.Ps`
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
    ${Ht}`;let fr=(()=>{class C extends t.AE{constructor(ee){super(ee),this.document=ao}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const rr=t.Ps`
    query UserPopover($userId: Int!) {
  user(id: $userId) {
    ...popoverUser
  }
}
    ${un}`;let Nr=(()=>{class C extends t.AE{constructor(ee){super(ee),this.document=rr}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const Er=t.Ps`
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
    ${Lt}`;let sr=(()=>{class C extends t.AE{constructor(ee){super(ee),this.document=Er}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const Da=t.Ps`
    query VariantGroupPopover($variantGroupId: Int!) {
  variantGroup(id: $variantGroupId) {
    ...variantGroupPopoverFields
  }
}
    ${dt}`;let Qr=(()=>{class C extends t.AE{constructor(ee){super(ee),this.document=Da}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const jr=t.Ps`
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
    ${ft}`;let dc=(()=>{class C extends t.AE{constructor(ee){super(ee),this.document=jr}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const eu=t.Ps`
    query VariantTypePopover($variantTypeId: Int!) {
  variantTypePopover(id: $variantTypeId) {
    ...variantTypePopover
  }
}
    ${ne}`;let pc=(()=>{class C extends t.AE{constructor(ee){super(ee),this.document=eu}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const Lr=t.Ps`
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
    ${B}`;let wn=(()=>{class C extends t.AE{constructor(ee){super(ee),this.document=Lr}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const Bo=t.Ps`
    query CoordinatesCard($variantId: Int!) {
  variant(id: $variantId) {
    ...CoordinatesCardFields
  }
}
    ${ze}`;let Zc=(()=>{class C extends t.AE{constructor(ee){super(ee),this.document=Bo}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const qs=t.Ps`
    query VariantPopover($variantId: Int!) {
  variant(id: $variantId) {
    ...variantPopoverFields
  }
}
    ${$e}`;let xi=(()=>{class C extends t.AE{constructor(ee){super(ee),this.document=qs}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const os=t.Ps`
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
    ${on}`;let kr=(()=>{class C extends t.AE{constructor(ee){super(ee),this.document=os}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const ar=t.Ps`
    query VariantTypesForGene($geneId: Int) {
  variantTypes(geneId: $geneId, first: 50) {
    edges {
      node {
        ...menuVariantType
      }
    }
  }
}
    ${Mt}`;let Xs=(()=>{class C extends t.AE{constructor(ee){super(ee),this.document=ar}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const Kc=t.Ps`
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
    ${Zt}`;let ea=(()=>{class C extends t.AE{constructor(ee){super(ee),this.document=Kc}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const d1=t.Ps`
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
    `;let Jc=(()=>{class C extends t.AE{constructor(ee){super(ee),this.document=d1}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const Ji=t.Ps`
    query ViewerNotificationCount {
  notifications {
    unreadCount
  }
}
    `;let Rr=(()=>{class C extends t.AE{constructor(ee){super(ee),this.document=Ji}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const Ps=t.Ps`
    query AssertionRevisableFields($assertionId: Int!) {
  assertion(id: $assertionId) {
    ...RevisableAssertionFields
  }
}
    ${Wn}`;let fs=(()=>{class C extends t.AE{constructor(ee){super(ee),this.document=Ps}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const Vr=t.Ps`
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
    `;let qc=(()=>{class C extends t.mm{constructor(ee){super(ee),this.document=Vr}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const Oa=t.Ps`
    mutation SubmitAssertion($input: SubmitAssertionInput!) {
  submitAssertion(input: $input) {
    clientMutationId
    assertion {
      id
    }
  }
}
    `;let Xc=(()=>{class C extends t.mm{constructor(ee){super(ee),this.document=Oa}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const el=t.Ps`
    mutation AddComment($input: AddCommentInput!) {
  addComment(input: $input) {
    clientMutationId
    comment {
      ...commentListNode
    }
  }
}
    ${Bt}`;let wa=(()=>{class C extends t.mm{constructor(ee){super(ee),this.document=el}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const Pa=t.Ps`
    query previewComment($commentText: String!) {
  previewCommentText(commentText: $commentText) {
    ...previewComment
  }
}
    ${pn}`;let Ia=(()=>{class C extends t.AE{constructor(ee){super(ee),this.document=Pa}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const Aa=t.Ps`
    query userTypeahead($queryTerm: String!) {
  userTypeahead(queryTerm: $queryTerm) {
    username
  }
}
    `;let hc=(()=>{class C extends t.AE{constructor(ee){super(ee),this.document=Aa}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const Fa=t.Ps`
    query entityTypeahead($queryTerm: String!) {
  entityTypeahead(queryTerm: $queryTerm) {
    entityId
    tagType
    displayName
  }
}
    `;let tl=(()=>{class C extends t.AE{constructor(ee){super(ee),this.document=Fa}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();t.Ps`
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
    ${qn}`,t.Ps`
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
    ${co}`,t.Ps`
    query EvidenceTypeahead($id: Int!) {
  evidenceItem(id: $id) {
    id
    status
    name
  }
}
    `,t.Ps`
    query GeneTypeahead($entrezSymbol: String!) {
  geneTypeahead(queryTerm: $entrezSymbol) {
    ...GeneTypeaheadFields
  }
}
    ${_o}`,t.Ps`
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
    ${Yo}`,t.Ps`
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
    ${Ko}`,t.Ps`
    query SourceTypeahead($partialCitationId: String!, $sourceType: SourceSource!) {
  sourceTypeahead(citationId: $partialCitationId, sourceType: $sourceType) {
    ...SourceTypeaheadResult
  }
}
    ${Yo}`,t.Ps`
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
    ${mo}`,t.Ps`
    query VariantTypeahead($name: String!, $geneId: Int) {
  variants(name: $name, geneId: $geneId, first: 20) {
    nodes {
      ...VariantTypeaheadFields
    }
  }
}
    ${Xn}`,t.Ps`
    mutation AddVariant($name: String!, $geneId: Int!) {
  addVariant(input: {name: $name, geneId: $geneId}) {
    ...AddVariantFields
  }
}
    ${di}`,t.Ps`
    query VariantSelect($name: String!, $geneId: Int) {
  variants(name: $name, first: 20, geneId: $geneId) {
    nodes {
      ...VariantTypeaheadFields
    }
  }
}
    ${Xn}`,t.Ps`
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
    ${zi}`,t.Ps`
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
    ${An}`;const La=t.Ps`
    mutation SubmitEvidenceItem($input: SubmitEvidenceItemInput!) {
  submitEvidence(input: $input) {
    clientMutationId
    evidenceItem {
      id
    }
  }
}
    `;let y1=(()=>{class C extends t.mm{constructor(ee){super(ee),this.document=La}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const oa=t.Ps`
    mutation FlagEntity($input: FlagEntityInput!) {
  flagEntity(input: $input) {
    flag {
      id
    }
  }
}
    `;let au=(()=>{class C extends t.mm{constructor(ee){super(ee),this.document=oa}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const cu=t.Ps`
    mutation ResolveFlag($input: ResolveFlagInput!) {
  resolveFlag(input: $input) {
    flag {
      id
    }
  }
}
    `;let lu=(()=>{class C extends t.mm{constructor(ee){super(ee),this.document=cu}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const vc=t.Ps`
    query GeneRevisableFields($geneId: Int!) {
  gene(id: $geneId) {
    ...RevisableGeneFields
  }
}
    ${bi}`;let ka=(()=>{class C extends t.AE{constructor(ee){super(ee),this.document=vc}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const is=t.Ps`
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
    `;let uu=(()=>{class C extends t.mm{constructor(ee){super(ee),this.document=is}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const cl=t.Ps`
    query MolecularProfileRevisableFields($molecularProfileId: Int!) {
  molecularProfile(id: $molecularProfileId) {
    ...RevisableMolecularProfileFields
  }
}
    ${Si}`;let ll=(()=>{class C extends t.AE{constructor(ee){super(ee),this.document=cl}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const ms=t.Ps`
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
    `;let du=(()=>{class C extends t.mm{constructor(ee){super(ee),this.document=ms}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();t.Ps`
    mutation SuggestSource($input: SuggestSourceInput!) {
  suggestSource(input: $input) {
    clientMutationId
    sourceSuggestion {
      id
    }
  }
}
    `;const hu=t.Ps`
    mutation UpdateSourceSuggestion($input: UpdateSourceSuggestionStatusInput!) {
  updateSourceSuggestionStatus(input: $input) {
    sourceSuggestion {
      id
      status
    }
  }
}
    `;let fu=(()=>{class C extends t.mm{constructor(ee){super(ee),this.document=hu}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const yc=t.Ps`
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
    `;let As=(()=>{class C extends t.mm{constructor(ee){super(ee),this.document=yc}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const Fs=t.Ps`
    mutation UpdateUserProfile($input: EditUserInput!) {
  editUser(input: $input) {
    user {
      id
    }
  }
}
    `;let Ns=(()=>{class C extends t.mm{constructor(ee){super(ee),this.document=Fs}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const ul=t.Ps`
    query Countries {
  countries {
    id
    name
  }
}
    `;let Cc=(()=>{class C extends t.AE{constructor(ee){super(ee),this.document=ul}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const ia=t.Ps`
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
    `;let C1=(()=>{class C extends t.mm{constructor(ee){super(ee),this.document=ia}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const z1=t.Ps`
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
    `;let T1=(()=>{class C extends t.AE{constructor(ee){super(ee),this.document=z1}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();t.Ps`
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
    ${tr}`;const ra=t.Ps`
    mutation SubmitVariantGroup($input: SubmitVariantGroupInput!) {
  submitVariantGroup(input: $input) {
    clientMutationId
    variantGroup {
      id
    }
  }
}
    `;let sa=(()=>{class C extends t.mm{constructor(ee){super(ee),this.document=ra}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const M1=t.Ps`
    query LinkableGene($geneId: Int!) {
  gene(id: $geneId) {
    id
    name
    link
  }
}
    `;let b1=(()=>{class C extends t.AE{constructor(ee){super(ee),this.document=M1}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();t.Ps`
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
    `;const yr=t.Ps`
    query EvidenceItemRevisableFields2($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...RevisableEvidenceFields2
  }
}
    ${Gi}`;let aa=(()=>{class C extends t.AE{constructor(ee){super(ee),this.document=yr}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const dl=t.Ps`
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
    `;let Ra=(()=>{class C extends t.mm{constructor(ee){super(ee),this.document=dl}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const ca=t.Ps`
    query ExistingEvidenceCount($molecularProfileId: Int!, $sourceId: Int!) {
  evidenceItems(molecularProfileId: $molecularProfileId, sourceId: $sourceId) {
    totalCount
  }
}
    `;let gu=(()=>{class C extends t.AE{constructor(ee){super(ee),this.document=ca}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const E1=t.Ps`
    mutation SubmitSource($input: SuggestSourceInput!) {
  suggestSource(input: $input) {
    clientMutationId
    sourceSuggestion {
      id
    }
  }
}
    `;let pl=(()=>{class C extends t.mm{constructor(ee){super(ee),this.document=E1}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const x1=t.Ps`
    query VariantRevisableFields($variantId: Int!) {
  variant(id: $variantId) {
    ...RevisableVariantFields
  }
}
    ${Ei}`;let mr=(()=>{class C extends t.AE{constructor(ee){super(ee),this.document=x1}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const Tc=t.Ps`
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
    `;let gs=(()=>{class C extends t.mm{constructor(ee){super(ee),this.document=Tc}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const sp=t.Ps`
    query VariantGroupRevisableFields2($variantGroupId: Int!) {
  variantGroup(id: $variantGroupId) {
    ...VariantGroupRevisableFields2
  }
}
    ${vr}`;let hl=(()=>{class C extends t.AE{constructor(ee){super(ee),this.document=sp}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const fl=t.Ps`
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
    `;let vu=(()=>{class C extends t.mm{constructor(ee){super(ee),this.document=fl}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const _u=t.Ps`
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
    `;let ml=(()=>{class C extends t.AE{constructor(ee){super(ee),this.document=_u}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const yu=t.Ps`
    query AcmgCodeSelectTypeahead($code: String!) {
  acmgCodesTypeahead(queryTerm: $code) {
    ...AcmgCodeSelectTypeaheadFields
  }
}
    ${Qi}`;let Cu=(()=>{class C extends t.AE{constructor(ee){super(ee),this.document=yu}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const Mc=t.Ps`
    query AcmgCodeSelectTag($id: Int!) {
  acmgCode(id: $id) {
    ...AcmgCodeSelectTypeaheadFields
  }
}
    ${Qi}`;let Va=(()=>{class C extends t.AE{constructor(ee){super(ee),this.document=Mc}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const gl=t.Ps`
    query ClingenCodeSelectTypeahead($code: String!) {
  clingenCodesTypeahead(queryTerm: $code) {
    ...ClingenCodeSelectTypeaheadFields
  }
}
    ${ur}`;let Ba=(()=>{class C extends t.AE{constructor(ee){super(ee),this.document=gl}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const zu=t.Ps`
    query ClingenCodeSelectTag($id: Int!) {
  clingenCode(id: $id) {
    ...ClingenCodeSelectTypeaheadFields
  }
}
    ${ur}`;let Ha=(()=>{class C extends t.AE{constructor(ee){super(ee),this.document=zu}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const vl=t.Ps`
    mutation QuickAddDisease($name: String!, $doid: String) {
  addDisease(input: {name: $name, doid: $doid}) {
    ...QuickAddDiseaseFields
  }
}
    ${dr}`;let _l=(()=>{class C extends t.mm{constructor(ee){super(ee),this.document=vl}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const bc=t.Ps`
    query DiseaseSelectTypeahead($name: String!) {
  diseaseTypeahead(queryTerm: $name) {
    ...DiseaseSelectTypeaheadFields
  }
}
    ${So}`;let la=(()=>{class C extends t.AE{constructor(ee){super(ee),this.document=bc}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const ks=t.Ps`
    query DiseaseSelectTag($id: Int!) {
  disease(id: $id) {
    ...DiseaseSelectTypeaheadFields
  }
}
    ${So}`;let yl=(()=>{class C extends t.AE{constructor(ee){super(ee),this.document=ks}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const Tu=t.Ps`
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
    ${lo}`;let Rs=(()=>{class C extends t.AE{constructor(ee){super(ee),this.document=Tu}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const $a=t.Ps`
    query EvidenceSelectTypeahead($eid: Int!) {
  evidenceItems(id: $eid) {
    nodes {
      ...EvidenceSelectTypeaheadFields
    }
  }
}
    ${Oo}`;let Mu=(()=>{class C extends t.AE{constructor(ee){super(ee),this.document=$a}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const D1=t.Ps`
    query EvidenceSelectTag($eid: Int!) {
  evidenceItem(id: $eid) {
    ...EvidenceSelectTypeaheadFields
  }
}
    ${Oo}`;let vs=(()=>{class C extends t.AE{constructor(ee){super(ee),this.document=D1}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const bu=t.Ps`
    query GeneSelectTypeahead($entrezSymbol: String!) {
  geneTypeahead(queryTerm: $entrezSymbol) {
    ...GeneSelectTypeaheadFields
  }
}
    ${Po}`;let O1=(()=>{class C extends t.AE{constructor(ee){super(ee),this.document=bu}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const Su=t.Ps`
    query GeneSelectTag($geneId: Int!) {
  gene(id: $geneId) {
    ...GeneSelectTypeaheadFields
  }
}
    ${Po}`;let Eu=(()=>{class C extends t.AE{constructor(ee){super(ee),this.document=Su}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const Ya=t.Ps`
    query MolecularProfileSelectTypeahead($name: String!, $geneId: Int) {
  molecularProfiles(name: $name, geneId: $geneId, first: 25) {
    nodes {
      ...MolecularProfileSelectTypeaheadFields
    }
  }
}
    ${wo}`;let Ua=(()=>{class C extends t.AE{constructor(ee){super(ee),this.document=Ya}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const Cl=t.Ps`
    query MolecularProfileSelectTag($molecularProfileId: Int!) {
  molecularProfile(id: $molecularProfileId) {
    ...MolecularProfileSelectTypeaheadFields
  }
}
    ${wo}`;let xu=(()=>{class C extends t.AE{constructor(ee){super(ee),this.document=Cl}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const zl=t.Ps`
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
    ${Jo}`;let w1=(()=>{class C extends t.AE{constructor(ee){super(ee),this.document=zl}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const Tl=t.Ps`
    query MpExpressionEditorPrepopulate($mpId: Int!) {
  molecularProfile(id: $mpId) {
    id
    parsedName {
      ...MolecularProfileParsedName
    }
    rawName
  }
}
    ${xe}`;let P1=(()=>{class C extends t.AE{constructor(ee){super(ee),this.document=Tl}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const Du=t.Ps`
    mutation CreateMolecularProfile2($mpStructure: MolecularProfileComponentInput!) {
  createMolecularProfile(input: {structure: $mpStructure}) {
    molecularProfile {
      id
      name
      link
    }
  }
}
    `;let Ou=(()=>{class C extends t.mm{constructor(ee){super(ee),this.document=Du}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const Ga=t.Ps`
    query NccnGuidelineSelectTypeahead($name: String!) {
  nccnGuidelinesTypeahead(queryTerm: $name) {
    ...NccnGuidelineSelectTypeaheadFields
  }
}
    ${Ro}`;let I1=(()=>{class C extends t.AE{constructor(ee){super(ee),this.document=Ga}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const A1=t.Ps`
    query NccnGuidelineSelectTag($id: Int!) {
  nccnGuideline(id: $id) {
    ...NccnGuidelineSelectTypeaheadFields
  }
}
    ${Ro}`;let Sc=(()=>{class C extends t.AE{constructor(ee){super(ee),this.document=A1}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const F1=t.Ps`
    query PhenotypeSelectTypeahead($name: String!) {
  phenotypeTypeahead(queryTerm: $name) {
    ...PhenotypeSelectTypeaheadFields
  }
}
    ${Pi}`;let N1=(()=>{class C extends t.AE{constructor(ee){super(ee),this.document=F1}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const L1=t.Ps`
    query PhenotypeSelectTag($id: Int!) {
  phenotype(id: $id) {
    ...PhenotypeSelectTypeaheadFields
  }
}
    ${Pi}`;let k1=(()=>{class C extends t.AE{constructor(ee){super(ee),this.document=L1}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const R1=t.Ps`
    query QuickAddSourceCheckCitation($sourceType: SourceSource!, $citationId: String!) {
  remoteCitation(sourceType: $sourceType, citationId: $citationId)
}
    `;let V1=(()=>{class C extends t.AE{constructor(ee){super(ee),this.document=R1}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const Qa=t.Ps`
    mutation QuickAddSourceRemoteCitation($input: AddRemoteCitationInput!) {
  addRemoteCitation(input: $input) {
    newSource {
      id
      citationId
      sourceType
    }
  }
}
    `;let ja=(()=>{class C extends t.mm{constructor(ee){super(ee),this.document=Qa}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const Ml=t.Ps`
    query SourceSelectTypeahead($partialCitationId: String!, $sourceType: SourceSource!) {
  sourceTypeahead(citationId: $partialCitationId, sourceType: $sourceType) {
    ...SourceSelectTypeaheadFields
  }
}
    ${Xo}`;let Ec=(()=>{class C extends t.AE{constructor(ee){super(ee),this.document=Ml}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const bl=t.Ps`
    query SourceSelectTag($id: Int!) {
  source(id: $id) {
    ...SourceSelectTypeaheadFields
  }
}
    ${Xo}`;let ua=(()=>{class C extends t.AE{constructor(ee){super(ee),this.document=bl}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const Sl=t.Ps`
    mutation QuickAddTherapy($name: String!, $ncitId: String) {
  addTherapy(input: {name: $name, ncitId: $ncitId}) {
    ...QuickAddTherapyFields
  }
}
    ${Wo}`;let wu=(()=>{class C extends t.mm{constructor(ee){super(ee),this.document=Sl}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const Wa=t.Ps`
    query TherapySelectTypeahead($name: String!) {
  therapyTypeahead(queryTerm: $name) {
    ...TherapySelectTypeaheadFields
  }
}
    ${Eo}`;let xc=(()=>{class C extends t.AE{constructor(ee){super(ee),this.document=Wa}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const Br=t.Ps`
    query TherapySelectTag($id: Int!) {
  therapy(id: $id) {
    ...TherapySelectTypeaheadFields
  }
}
    ${Eo}`;let El=(()=>{class C extends t.AE{constructor(ee){super(ee),this.document=Br}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const Dc=t.Ps`
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
    ${Zt}`;let Pu=(()=>{class C extends t.AE{constructor(ee){super(ee),this.document=Dc}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const Iu=t.Ps`
    mutation QuickAddVariant($name: String!, $geneId: Int!) {
  addVariant(input: {name: $name, geneId: $geneId}) {
    ...AddVariantFields
  }
}
    ${di}`;let Oc=(()=>{class C extends t.mm{constructor(ee){super(ee),this.document=Iu}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const Au=t.Ps`
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
    ${Ti}`;let xl=(()=>{class C extends t.AE{constructor(ee){super(ee),this.document=Au}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const Fu=t.Ps`
    query VariantSelectTag($variantId: Int!) {
  variant(id: $variantId) {
    ...VariantSelectTypeaheadFields
  }
}
    ${Ti}`;let _s=(()=>{class C extends t.AE{constructor(ee){super(ee),this.document=Fu}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const wc=t.Ps`
    query VariantTypeSelectTypeahead($name: String!) {
  variantTypeTypeahead(queryTerm: $name) {
    ...VariantTypeSelectTypeaheadFields
  }
}
    ${Hi}`;let Nu=(()=>{class C extends t.AE{constructor(ee){super(ee),this.document=wc}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const qi=t.Ps`
    query VariantTypeSelectTag($id: Int!) {
  variantType(id: $id) {
    ...VariantTypeSelectTypeaheadFields
  }
}
    ${Hi}`;let Pc=(()=>{class C extends t.AE{constructor(ee){super(ee),this.document=qi}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const Dl=t.Ps`
    query AssertionDetail($assertionId: Int!) {
  assertion(id: $assertionId) {
    ...AssertionDetailFields
  }
}
    ${ei}`;let Ic=(()=>{class C extends t.AE{constructor(ee){super(ee),this.document=Dl}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const Ki=t.Ps`
    query AssertionSummary($assertionId: Int!) {
  assertion(id: $assertionId) {
    ...AssertionSummaryFields
  }
}
    ${Yn}`;let da=(()=>{class C extends t.AE{constructor(ee){super(ee),this.document=Ki}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const Ol=t.Ps`
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
    `;let ys=(()=>{class C extends t.AE{constructor(ee){super(ee),this.document=Ol}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const wd=t.Ps`
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
    `;let B1=(()=>{class C extends t.AE{constructor(ee){super(ee),this.document=wd}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const Pd=t.Ps`
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
    `;let Lu=(()=>{class C extends t.AE{constructor(ee){super(ee),this.document=Pd}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const H1=t.Ps`
    query DiseasesSummary($diseaseId: Int!) {
  disease(id: $diseaseId) {
    ...DiseasesSummaryFields
  }
}
    ${Ue}`;let ku=(()=>{class C extends t.AE{constructor(ee){super(ee),this.document=H1}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const Id=t.Ps`
    query EvidenceDetail($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...EvidenceDetailFields
  }
}
    ${se}`;let $1=(()=>{class C extends t.AE{constructor(ee){super(ee),this.document=Id}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const wl=t.Ps`
    query EvidenceSummary($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...EvidenceSummaryFields
  }
}
    ${we}`;let Ac=(()=>{class C extends t.AE{constructor(ee){super(ee),this.document=wl}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const Y1=t.Ps`
    query GeneDetail($geneId: Int!) {
  gene(id: $geneId) {
    ...GeneDetailFields
  }
}
    ${Qe}`;let pa=(()=>{class C extends t.AE{constructor(ee){super(ee),this.document=Y1}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const Za=t.Ps`
    query GenesSummary($geneId: Int!) {
  gene(id: $geneId) {
    ...GeneSummaryFields
  }
}
    ${bt}`;let U1=(()=>{class C extends t.AE{constructor(ee){super(ee),this.document=Za}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const Ru=t.Ps`
    query MolecularProfileDetail($mpId: Int!) {
  molecularProfile(id: $mpId) {
    ...MolecularProfileDetailFields
  }
}
    ${tn}`;let Vu=(()=>{class C extends t.AE{constructor(ee){super(ee),this.document=Ru}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const Pl=t.Ps`
    query MolecularProfileSummary($mpId: Int!) {
  molecularProfile(id: $mpId) {
    ...MolecularProfileSummaryFields
  }
}
    ${qt}`;let Vs=(()=>{class C extends t.AE{constructor(ee){super(ee),this.document=Pl}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const Fc=t.Ps`
    query OrganizationDetail($organizationId: Int!) {
  organization(id: $organizationId) {
    ...OrganizationDetailFields
  }
}
    ${Cn}`;let Il=(()=>{class C extends t.AE{constructor(ee){super(ee),this.document=Fc}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const Al=t.Ps`
    query OrganizationGroups($organizationId: Int!) {
  organization(id: $organizationId) {
    subGroups {
      ...OrganizationGroupsFields
    }
  }
}
    ${Nn}`;let Ka=(()=>{class C extends t.AE{constructor(ee){super(ee),this.document=Al}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const Fl=t.Ps`
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
    ${Sn}`;let G1=(()=>{class C extends t.AE{constructor(ee){super(ee),this.document=Fl}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const Q1=t.Ps`
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
    `;let j1=(()=>{class C extends t.AE{constructor(ee){super(ee),this.document=Q1}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const W1=t.Ps`
    query DataReleases {
  dataReleases {
    ...Release
  }
}
    ${dn}`;let Z1=(()=>{class C extends t.AE{constructor(ee){super(ee),this.document=W1}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const Bu=t.Ps`
    query SourceDetail($sourceId: Int!) {
  source(id: $sourceId) {
    ...SourceDetailFields
  }
}
    ${xn}`;let Nl=(()=>{class C extends t.AE{constructor(ee){super(ee),this.document=Bu}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const Hu=t.Ps`
    query SourceSummary($sourceId: Int!) {
  source(id: $sourceId) {
    ...SourceSummaryFields
  }
}
    ${Qn}`;let Ll=(()=>{class C extends t.AE{constructor(ee){super(ee),this.document=Hu}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const K1=t.Ps`
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
    `;let J1=(()=>{class C extends t.AE{constructor(ee){super(ee),this.document=K1}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const kl=t.Ps`
    query TherapiesSummary($therapyId: Int!) {
  therapy(id: $therapyId) {
    ...TherapiesSummaryFields
  }
}
    ${Vn}`;let $u=(()=>{class C extends t.AE{constructor(ee){super(ee),this.document=kl}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const Cs=t.Ps`
    query UserDetail($userId: Int!) {
  user(id: $userId) {
    ...UserDetailFields
  }
}
    ${Un}`;let Rl=(()=>{class C extends t.AE{constructor(ee){super(ee),this.document=Cs}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const Zn=t.Ps`
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
    ${Co}
${eo}
${jn}
${yo}`;let Di=(()=>{class C extends t.AE{constructor(ee){super(ee),this.document=Zn}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const Nc=t.Ps`
    mutation UpdateNotificationStatus($input: UpdateNotificationStatusInput!) {
  updateNotificationStatus(input: $input) {
    notifications {
      ...notificationNode
    }
  }
}
    ${yo}`;let Bs=(()=>{class C extends t.mm{constructor(ee){super(ee),this.document=Nc}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const Lc=t.Ps`
    mutation Unsubscribe($input: UnsubscribeInput!) {
  unsubscribe(input: $input) {
    unsubscribedEntities {
      ...subscribable
    }
  }
}
    ${Kn}`;let Yu=(()=>{class C extends t.mm{constructor(ee){super(ee),this.document=Lc}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const Vl=t.Ps`
    mutation Subscribe($input: SubscribeInput!) {
  subscribe(input: $input) {
    subscriptions {
      id
    }
  }
}
    `;let zo=(()=>{class C extends t.mm{constructor(ee){super(ee),this.document=Vl}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const Ja=t.Ps`
    query VariantGroupDetail($variantGroupId: Int!) {
  variantGroup(id: $variantGroupId) {
    ...VariantGroupDetailFields
  }
}
    ${Fo}`;let Bl=(()=>{class C extends t.AE{constructor(ee){super(ee),this.document=Ja}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();t.Ps`
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
    `;const Hs=t.Ps`
    query VariantGroupsSummary($variantGroupId: Int!) {
  variantGroup(id: $variantGroupId) {
    ...VariantGroupSummaryFields
  }
}
    ${Mo}`;let qr=(()=>{class C extends t.AE{constructor(ee){super(ee),this.document=Hs}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const ha=t.Ps`
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
    `;let Hr=(()=>{class C extends t.AE{constructor(ee){super(ee),this.document=ha}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const Hl=t.Ps`
    query VariantDetail($variantId: Int!) {
  variant(id: $variantId) {
    ...VariantDetailFields
  }
}
    ${Go}`;let ec=(()=>{class C extends t.AE{constructor(ee){super(ee),this.document=Hl}}return C.\u0275fac=function(ee){return new(ee||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const $l=t.Ps`
    query VariantSummary($variantId: Int!) {
  variant(id: $variantId) {
    ...VariantSummaryFields
  }
}