"use strict";(self.webpackChunkmain=self.webpackChunkmain||[]).push([[179],{4265:(Et,be,c)=>{c.d(be,{T6:()=>I,VD:()=>V,WE:()=>R,Yt:()=>A,lC:()=>_,py:()=>N,rW:()=>i,s:()=>w,ve:()=>a,vq:()=>j});var t=c(6337);function i(E,U,Q){return{r:255*(0,t.sh)(E,255),g:255*(0,t.sh)(U,255),b:255*(0,t.sh)(Q,255)}}function _(E,U,Q){E=(0,t.sh)(E,255),U=(0,t.sh)(U,255),Q=(0,t.sh)(Q,255);var ze=Math.max(E,U,Q),me=Math.min(E,U,Q),K=0,L=0,B=(ze+me)/2;if(ze===me)L=0,K=0;else{var S=ze-me;switch(L=B>.5?S/(2-ze-me):S/(ze+me),ze){case E:K=(U-Q)/S+(U<Q?6:0);break;case U:K=(Q-E)/S+2;break;case Q:K=(E-U)/S+4}K/=6}return{h:K,s:L,l:B}}function e(E,U,Q){return Q<0&&(Q+=1),Q>1&&(Q-=1),Q<1/6?E+6*Q*(U-E):Q<.5?U:Q<2/3?E+(U-E)*(2/3-Q)*6:E}function a(E,U,Q){var ze,me,K;if(E=(0,t.sh)(E,360),U=(0,t.sh)(U,100),Q=(0,t.sh)(Q,100),0===U)me=Q,K=Q,ze=Q;else{var L=Q<.5?Q*(1+U):Q+U-Q*U,B=2*Q-L;ze=e(B,L,E+1/3),me=e(B,L,E),K=e(B,L,E-1/3)}return{r:255*ze,g:255*me,b:255*K}}function N(E,U,Q){E=(0,t.sh)(E,255),U=(0,t.sh)(U,255),Q=(0,t.sh)(Q,255);var ze=Math.max(E,U,Q),me=Math.min(E,U,Q),K=0,L=ze,B=ze-me,S=0===ze?0:B/ze;if(ze===me)K=0;else{switch(ze){case E:K=(U-Q)/B+(U<Q?6:0);break;case U:K=(Q-E)/B+2;break;case Q:K=(E-U)/B+4}K/=6}return{h:K,s:S,v:L}}function R(E,U,Q){E=6*(0,t.sh)(E,360),U=(0,t.sh)(U,100),Q=(0,t.sh)(Q,100);var ze=Math.floor(E),me=E-ze,K=Q*(1-U),L=Q*(1-me*U),B=Q*(1-(1-me)*U),S=ze%6;return{r:255*[Q,L,K,K,B,Q][S],g:255*[B,Q,Q,L,K,K][S],b:255*[K,K,B,Q,Q,L][S]}}function j(E,U,Q,ze){var me=[(0,t.FZ)(Math.round(E).toString(16)),(0,t.FZ)(Math.round(U).toString(16)),(0,t.FZ)(Math.round(Q).toString(16))];return ze&&me[0].startsWith(me[0].charAt(1))&&me[1].startsWith(me[1].charAt(1))&&me[2].startsWith(me[2].charAt(1))?me[0].charAt(0)+me[1].charAt(0)+me[2].charAt(0):me.join("")}function w(E,U,Q,ze,me){var K=[(0,t.FZ)(Math.round(E).toString(16)),(0,t.FZ)(Math.round(U).toString(16)),(0,t.FZ)(Math.round(Q).toString(16)),(0,t.FZ)(F(ze))];return me&&K[0].startsWith(K[0].charAt(1))&&K[1].startsWith(K[1].charAt(1))&&K[2].startsWith(K[2].charAt(1))&&K[3].startsWith(K[3].charAt(1))?K[0].charAt(0)+K[1].charAt(0)+K[2].charAt(0)+K[3].charAt(0):K.join("")}function F(E){return Math.round(255*parseFloat(E)).toString(16)}function I(E){return V(E)/255}function V(E){return parseInt(E,16)}function A(E){return{r:E>>16,g:(65280&E)>>8,b:255&E}}},1309:(Et,be,c)=>{c.d(be,{R:()=>t});var t={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"}},6379:(Et,be,c)=>{c.d(be,{uA:()=>e});var t=c(4265),i=c(1309),_=c(6337);function e(V){var A={r:0,g:0,b:0},E=1,U=null,Q=null,ze=null,me=!1,K=!1;return"string"==typeof V&&(V=function F(V){if(0===(V=V.trim().toLowerCase()).length)return!1;var A=!1;if(i.R[V])V=i.R[V],A=!0;else if("transparent"===V)return{r:0,g:0,b:0,a:0,format:"name"};var E=M.rgb.exec(V);return E?{r:E[1],g:E[2],b:E[3]}:(E=M.rgba.exec(V))?{r:E[1],g:E[2],b:E[3],a:E[4]}:(E=M.hsl.exec(V))?{h:E[1],s:E[2],l:E[3]}:(E=M.hsla.exec(V))?{h:E[1],s:E[2],l:E[3],a:E[4]}:(E=M.hsv.exec(V))?{h:E[1],s:E[2],v:E[3]}:(E=M.hsva.exec(V))?{h:E[1],s:E[2],v:E[3],a:E[4]}:(E=M.hex8.exec(V))?{r:(0,t.VD)(E[1]),g:(0,t.VD)(E[2]),b:(0,t.VD)(E[3]),a:(0,t.T6)(E[4]),format:A?"name":"hex8"}:(E=M.hex6.exec(V))?{r:(0,t.VD)(E[1]),g:(0,t.VD)(E[2]),b:(0,t.VD)(E[3]),format:A?"name":"hex"}:(E=M.hex4.exec(V))?{r:(0,t.VD)(E[1]+E[1]),g:(0,t.VD)(E[2]+E[2]),b:(0,t.VD)(E[3]+E[3]),a:(0,t.T6)(E[4]+E[4]),format:A?"name":"hex8"}:!!(E=M.hex3.exec(V))&&{r:(0,t.VD)(E[1]+E[1]),g:(0,t.VD)(E[2]+E[2]),b:(0,t.VD)(E[3]+E[3]),format:A?"name":"hex"}}(V)),"object"==typeof V&&(I(V.r)&&I(V.g)&&I(V.b)?(A=(0,t.rW)(V.r,V.g,V.b),me=!0,K="%"===String(V.r).substr(-1)?"prgb":"rgb"):I(V.h)&&I(V.s)&&I(V.v)?(U=(0,_.JX)(V.s),Q=(0,_.JX)(V.v),A=(0,t.WE)(V.h,U,Q),me=!0,K="hsv"):I(V.h)&&I(V.s)&&I(V.l)&&(U=(0,_.JX)(V.s),ze=(0,_.JX)(V.l),A=(0,t.ve)(V.h,U,ze),me=!0,K="hsl"),Object.prototype.hasOwnProperty.call(V,"a")&&(E=V.a)),E=(0,_.Yq)(E),{ok:me,format:V.format||K,r:Math.min(255,Math.max(A.r,0)),g:Math.min(255,Math.max(A.g,0)),b:Math.min(255,Math.max(A.b,0)),a:E}}var R="(?:".concat("[-\\+]?\\d*\\.\\d+%?",")|(?:").concat("[-\\+]?\\d+%?",")"),j="[\\s|\\(]+(".concat(R,")[,|\\s]+(").concat(R,")[,|\\s]+(").concat(R,")\\s*\\)?"),w="[\\s|\\(]+(".concat(R,")[,|\\s]+(").concat(R,")[,|\\s]+(").concat(R,")[,|\\s]+(").concat(R,")\\s*\\)?"),M={CSS_UNIT:new RegExp(R),rgb:new RegExp("rgb"+j),rgba:new RegExp("rgba"+w),hsl:new RegExp("hsl"+j),hsla:new RegExp("hsla"+w),hsv:new RegExp("hsv"+j),hsva:new RegExp("hsva"+w),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function I(V){return!!M.CSS_UNIT.exec(String(V))}},6337:(Et,be,c)=>{function t(j,w){(function _(j){return"string"==typeof j&&-1!==j.indexOf(".")&&1===parseFloat(j)})(j)&&(j="100%");var M=function e(j){return"string"==typeof j&&-1!==j.indexOf("%")}(j);return j=360===w?j:Math.min(w,Math.max(0,parseFloat(j))),M&&(j=parseInt(String(j*w),10)/100),Math.abs(j-w)<1e-6?1:j=360===w?(j<0?j%w+w:j%w)/parseFloat(String(w)):j%w/parseFloat(String(w))}function i(j){return Math.min(1,Math.max(0,j))}function a(j){return j=parseFloat(j),(isNaN(j)||j<0||j>1)&&(j=1),j}function N(j){return j<=1?"".concat(100*Number(j),"%"):j}function R(j){return 1===j.length?"0"+j:String(j)}c.d(be,{FZ:()=>R,JX:()=>N,V2:()=>i,Yq:()=>a,sh:()=>t})},3369:(Et,be,c)=>{c.d(be,{G:()=>G});var t=c(5879),i=c(6814),_=c(4190),e=c(551),a=c(5695),N=c(7417),R=c(5676),j=c(7398),w=c(2181),M=c(313),F=c(2962),I=c(8125),V=c(3317),A=c(8091),E=c(2616);function U(ue,pe){if(1&ue&&(t._UZ(0,"i",9),t.ALo(1,"entityColor"),t._uU(2)),2&ue){const fe=t.oxw().ngIf;t.Q6J("nzTwotoneColor",t.lcZ(1,2,"ClinicalTrial")),t.xp6(2),t.hij(" ",fe.nctId," ")}}function Q(ue,pe){if(1&ue&&(t.TgZ(0,"cvc-link-tag",10),t._uU(1," View on clinicaltrials.gov "),t.qZA()),2&ue){const fe=t.oxw().ngIf;t.Q6J("href",fe.url)}}function ze(ue,pe){if(1&ue&&(t.ynx(0),t.TgZ(1,"nz-card",2),t.YNc(2,U,3,4,"ng-template",null,3,t.W1O),t.YNc(4,Q,2,1,"ng-template",null,4,t.W1O),t.TgZ(6,"nz-descriptions",5)(7,"nz-descriptions-item",6),t._uU(8),t.qZA(),t.TgZ(9,"nz-descriptions-item",7),t._uU(10),t.qZA(),t.TgZ(11,"nz-descriptions-item",8),t._uU(12),t.qZA()()(),t.BQk()),2&ue){const fe=pe.ngIf,Se=t.MAs(3),Le=t.MAs(5);t.xp6(1),t.Q6J("nzTitle",Se)("nzExtra",Le),t.xp6(5),t.Q6J("nzColumn",2),t.xp6(2),t.hij(" ",fe.name," "),t.xp6(2),t.hij(" ",fe.sourceCount," "),t.xp6(2),t.hij(" ",fe.evidenceCount," ")}}let me=(()=>{class ue{constructor(fe){this.gql=fe}ngOnInit(){if(null==this.clinicalTrialId)throw new Error("cvc-clinical-trial-popover requires valid clinicalTrialId input.");this.clinicalTrial$=this.gql.watch({clinicalTrialId:this.clinicalTrialId}).valueChanges.pipe((0,j.U)(({data:fe})=>fe?.clinicalTrials.edges[0]?.node),(0,w.h)(R.ep))}}return ue.\u0275fac=function(fe){return new(fe||ue)(t.Y36(M.UIR))},ue.\u0275cmp=t.Xpm({type:ue,selectors:[["cvc-clinical-trial-popover"]],inputs:{clinicalTrialId:"clinicalTrialId"},decls:3,vars:3,consts:[["id","popover-content"],[4,"ngIf"],["nzBordered","false","id","card-content",3,"nzTitle","nzExtra"],["cardTitle",""],["linkout",""],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","Name","nzSpan","2"],["nzTitle","Sources","nzSpan","2"],["nzTitle","Evidence","nzSpan","2"],["nz-icon","","nzTheme","twotone","nzType","civic-clinicaltrial",3,"nzTwotoneColor"],[3,"href"]],template:function(fe,Se){1&fe&&(t.TgZ(0,"div",0),t.YNc(1,ze,13,6,"ng-container",1),t.ALo(2,"ngrxPush"),t.qZA()),2&fe&&(t.xp6(1),t.Q6J("ngIf",t.lcZ(2,1,Se.clinicalTrial$)))},dependencies:[i.O5,F.bd,e.Ls,I.R7,I.uj,V.l,A.fM,E.a],styles:["[_nghost-%COMP%]{display:block;margin:-8px -12px}[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}[_nghost-%COMP%]     .ant-descriptions-view{border:none}[_nghost-%COMP%]     #entity-child-counts{border-top:1px solid #f0f0f0;padding:8px}[_nghost-%COMP%]     #entity-child-counts nz-space{width:100%}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child nz-tag{margin-right:0}.popover-text[_ngcontent-%COMP%]{width:100%;padding:8px;border-bottom:1px solid #f0f0f0}#popover-content[_ngcontent-%COMP%]{min-width:350px;max-width:500px;min-height:125px}"]}),ue})();function K(ue,pe){}function L(ue,pe){if(1&ue&&(t.ynx(0),t.TgZ(1,"a",4),t.YNc(2,K,0,0,"ng-template",5),t.qZA(),t.BQk()),2&ue){const fe=t.oxw(),Se=t.MAs(2);t.xp6(1),t.Q6J("routerLink",fe.clinicalTrial.link),t.xp6(1),t.Q6J("ngTemplateOutlet",Se)}}function B(ue,pe){}function S(ue,pe){if(1&ue&&t._UZ(0,"cvc-clinical-trial-popover",8),2&ue){const fe=t.oxw(2);t.Q6J("clinicalTrialId",fe.clinicalTrial.id)}}function P(ue,pe){if(1&ue&&(t.TgZ(0,"nz-tag",6),t.YNc(1,B,0,0,"ng-template",5),t.qZA(),t.YNc(2,S,1,1,"ng-template",null,7,t.W1O)),2&ue){const fe=t.MAs(3),Se=t.oxw(),Le=t.MAs(6);t.Q6J("nzPopoverMouseEnterDelay",.5)("nzPopoverContent",fe)("nzPopoverTrigger",Se.enablePopover?"hover":null),t.xp6(1),t.Q6J("ngTemplateOutlet",Le)}}function b(ue,pe){}function ae(ue,pe){if(1&ue&&t.YNc(0,b,0,0,"ng-template",5),2&ue){t.oxw();const fe=t.MAs(2);t.Q6J("ngTemplateOutlet",fe)}}function le(ue,pe){if(1&ue&&(t._UZ(0,"i",9),t.ALo(1,"entityColor"),t._uU(2)),2&ue){const fe=t.oxw();t.Q6J("nzTwotoneColor",t.lcZ(1,2,"ClinicalTrial")),t.xp6(2),t.hij(" ",fe.clinicalTrial.nctId,"\n")}}let G=(()=>{class ue{set clinicalTrial(fe){if(!fe)throw new Error("clinical-trial-tag clinicalTrial Input requires LinkableClinicalTrial.");this._clinicalTrial=fe}get clinicalTrial(){return this._clinicalTrial}constructor(){this.linked=!0,this.enablePopover=!0}}return ue.\u0275fac=function(fe){return new(fe||ue)},ue.\u0275cmp=t.Xpm({type:ue,selectors:[["cvc-clinical-trial-tag"]],inputs:{clinicalTrial:"clinicalTrial",linked:"linked",enablePopover:"enablePopover"},decls:7,vars:2,consts:[[4,"ngIf","ngIfElse"],["tag",""],["unlinked",""],["tagContent",""],[3,"routerLink"],[3,"ngTemplateOutlet"],["nz-popover","","nzPopoverPlacement","right",3,"nzPopoverMouseEnterDelay","nzPopoverContent","nzPopoverTrigger"],["clinicalTrialPopover",""],[3,"clinicalTrialId"],["nz-icon","","nzTheme","twotone","nzType","civic-clinicaltrial",3,"nzTwotoneColor"]],template:function(fe,Se){if(1&fe&&(t.YNc(0,L,3,2,"ng-container",0),t.YNc(1,P,4,4,"ng-template",null,1,t.W1O),t.YNc(3,ae,1,1,"ng-template",null,2,t.W1O),t.YNc(5,le,3,4,"ng-template",null,3,t.W1O)),2&fe){const Le=t.MAs(4);t.Q6J("ngIf",Se.linked)("ngIfElse",Le)}},dependencies:[i.O5,i.tP,_.rH,e.Ls,a.j,N.lU,me,E.a],styles:["[_nghost-%COMP%]{display:block}"]}),ue})()},4605:(Et,be,c)=>{c.d(be,{N:()=>I});var t=c(6814),i=c(4190),_=c(5695),e=c(7417),a=c(6067),N=c(2524),R=c(2962),j=c(8125),w=c(551),M=c(5879);let F=(()=>{class V{}return V.\u0275fac=function(E){return new(E||V)},V.\u0275mod=M.oAB({type:V}),V.\u0275inj=M.cJS({imports:[t.ez,R.vh,w.PV,j.q6,a.X,N.s]}),V})(),I=(()=>{class V{}return V.\u0275fac=function(E){return new(E||V)},V.\u0275mod=M.oAB({type:V}),V.\u0275inj=M.cJS({imports:[t.ez,i.Bz,w.PV,_.X,e.$6,F,N.s]}),V})()},2851:(Et,be,c)=>{c.d(be,{I:()=>L});var t=c(5676),i=c(7398),_=c(2181),e=c(5879),a=c(313),N=c(6814),R=c(2962),j=c(8125),w=c(551),M=c(2392),F=c(3317),I=c(8091),V=c(5869);function A(B,S){if(1&B&&(e._UZ(0,"i",12),e._uU(1),e.ALo(2,"truncate")),2&B){const P=e.oxw().ngIf;e.xp6(1),e.hij(" ",e.xi3(2,1,P.name,50)," ")}}function E(B,S){if(1&B&&(e.TgZ(0,"cvc-link-tag",14),e._uU(1),e.qZA()),2&B){const P=e.oxw(2).ngIf;e.Q6J("href",P.diseaseUrl),e.xp6(1),e.hij(" DOID: ",P.doid," ")}}function U(B,S){if(1&B&&e.YNc(0,E,2,2,"cvc-link-tag",13),2&B){const P=e.oxw().ngIf,b=e.MAs(7);e.Q6J("ngIf",P.doid)("ngIfElse",b)}}function Q(B,S){1&B&&(e.TgZ(0,"span",15),e._uU(1,"No DOID"),e.qZA())}function ze(B,S){if(1&B&&(e.TgZ(0,"nz-descriptions-item",16),e._uU(1),e.qZA()),2&B){const P=e.oxw().ngIf;e.xp6(1),e.hij(" ",P.name," ")}}function me(B,S){if(1&B&&(e.TgZ(0,"nz-descriptions-item",17),e._uU(1),e.qZA()),2&B){const P=e.oxw().ngIf;e.xp6(1),e.hij(" ",P.diseaseAliases.join(", ")," ")}}function K(B,S){if(1&B&&(e.ynx(0),e.TgZ(1,"nz-card",2),e.YNc(2,A,3,4,"ng-template",null,3,e.W1O),e.YNc(4,U,1,2,"ng-template",null,4,e.W1O),e.YNc(6,Q,2,0,"ng-template",null,5,e.W1O),e.TgZ(8,"nz-descriptions",6),e.YNc(9,ze,2,1,"nz-descriptions-item",7),e.YNc(10,me,2,1,"nz-descriptions-item",8),e.TgZ(11,"nz-descriptions-item",9),e._uU(12),e.qZA(),e.TgZ(13,"nz-descriptions-item",10),e._uU(14),e.qZA(),e.TgZ(15,"nz-descriptions-item",11),e._uU(16),e.qZA()()(),e.BQk()),2&B){const P=S.ngIf,b=e.MAs(3),ae=e.MAs(5);e.xp6(1),e.Q6J("nzTitle",b)("nzExtra",ae),e.xp6(7),e.Q6J("nzColumn",1),e.xp6(1),e.Q6J("ngIf",P.name.length>50),e.xp6(1),e.Q6J("ngIf",P.diseaseAliases.length>0),e.xp6(2),e.hij(" ",P.assertionCount," "),e.xp6(2),e.hij(" ",P.evidenceItemCount," "),e.xp6(2),e.hij(" ",P.molecularProfileCount," ")}}let L=(()=>{class B{constructor(P){this.gql=P}ngOnInit(){if(null==this.diseaseId)throw new Error("cvc-disease-popover requires valid diseaseId input.");this.disease$=this.gql.watch({diseaseId:this.diseaseId}).valueChanges.pipe((0,i.U)(({data:P})=>P?.diseasePopover),(0,_.h)(t.ep))}}return B.\u0275fac=function(P){return new(P||B)(e.Y36(a.k7O))},B.\u0275cmp=e.Xpm({type:B,selectors:[["cvc-disease-popover"]],inputs:{diseaseId:"diseaseId"},decls:3,vars:3,consts:[["id","popover-content"],[4,"ngIf"],["nzBordered","false","id","card-content",3,"nzTitle","nzExtra"],["cardTitle",""],["linkout",""],["noDoid",""],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","Name","nzSpan","2",4,"ngIf"],["nzTitle","Aliases","nzSpan","2",4,"ngIf"],["nzTitle","Assertions","nzSpan","1"],["nzTitle","Evidence","nzSpan","1"],["nzTitle","Molecular Profiles","nzSpan","1"],["nz-icon","","nzType","civic-disease","nzTheme","twotone","nzTwotoneColor","#E62F76"],["tooltip","View on disease-ontology.org",3,"href",4,"ngIf","ngIfElse"],["tooltip","View on disease-ontology.org",3,"href"],["nz-typography","","nzType","secondary"],["nzTitle","Name","nzSpan","2"],["nzTitle","Aliases","nzSpan","2"]],template:function(P,b){1&P&&(e.TgZ(0,"div",0),e.YNc(1,K,17,8,"ng-container",1),e.ALo(2,"ngrxPush"),e.qZA()),2&P&&(e.xp6(1),e.Q6J("ngIf",e.lcZ(2,1,b.disease$)))},dependencies:[N.O5,R.bd,j.R7,j.uj,w.Ls,M.ZU,F.l,I.fM,V.W],styles:["[_nghost-%COMP%]{display:block;margin:-8px -12px}[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}[_nghost-%COMP%]     .ant-descriptions-view{border:none}[_nghost-%COMP%]     #entity-child-counts{border-top:1px solid #f0f0f0;padding:8px}[_nghost-%COMP%]     #entity-child-counts nz-space{width:100%}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child nz-tag{margin-right:0}.popover-text[_ngcontent-%COMP%]{width:100%;padding:8px;border-bottom:1px solid #f0f0f0}#popover-content[_ngcontent-%COMP%]{min-width:350px;max-width:500px;min-height:125px}"]}),B})()},5687:(Et,be,c)=>{c.d(be,{t:()=>w});var t=c(6814),i=c(2962),_=c(8125),e=c(551),a=c(6067),N=c(2392),R=c(2524),j=c(5879);let w=(()=>{class M{}return M.\u0275fac=function(I){return new(I||M)},M.\u0275mod=j.oAB({type:M}),M.\u0275inj=j.cJS({imports:[t.ez,i.vh,_.q6,e.PV,N.ZJ,R.s,a.X]}),M})()},9775:(Et,be,c)=>{c.d(be,{n:()=>K});var t=c(8130),i=c(5879),_=c(6814),e=c(4190),a=c(5695),N=c(7417),R=c(551),j=c(2851),w=c(5869);function M(L,B){}function F(L,B){if(1&L&&(i.ynx(0),i.TgZ(1,"a",4),i.YNc(2,M,0,0,"ng-template",5),i.qZA(),i.BQk()),2&L){const S=i.oxw(),P=i.MAs(2);i.xp6(1),i.Q6J("routerLink",S.disease.link),i.xp6(1),i.Q6J("ngTemplateOutlet",P)}}function I(L,B){}function V(L,B){if(1&L&&i._UZ(0,"cvc-disease-popover",8),2&L){const S=i.oxw(2);i.Q6J("diseaseId",S.disease.id)}}function A(L,B){if(1&L){const S=i.EpF();i.TgZ(0,"nz-tag",6),i.NdJ("nzOnClose",function(b){i.CHM(S);const ae=i.oxw();return i.KtG(ae.itemClosed(b))}),i.YNc(1,I,0,0,"ng-template",5),i.qZA(),i.YNc(2,V,1,1,"ng-template",null,7,i.W1O)}if(2&L){const S=i.MAs(3),P=i.oxw(),b=i.MAs(6);i.Q6J("nzPopoverMouseEnterDelay",P.onCloseClicked?0:.5)("nzPopoverContent",S)("nzPopoverTrigger",P.enablePopover?"hover":null)("nzMode",P.onCloseClicked?"closeable":"default"),i.xp6(1),i.Q6J("ngTemplateOutlet",b)}}function E(L,B){}function U(L,B){if(1&L&&i.YNc(0,E,0,0,"ng-template",5),2&L){i.oxw();const S=i.MAs(2);i.Q6J("ngTemplateOutlet",S)}}function Q(L,B){if(1&L&&(i.ynx(0),i._uU(1),i.ALo(2,"truncate"),i.BQk()),2&L){const S=i.oxw(2);i.xp6(1),i.hij(" ",i.xi3(2,1,S.disease.name,27)," ")}}function ze(L,B){if(1&L&&i._uU(0),2&L){const S=i.oxw(2);i.hij(" ",S.disease.name," ")}}function me(L,B){if(1&L&&(i._UZ(0,"i",9),i.YNc(1,Q,3,4,"ng-container",0),i.YNc(2,ze,1,1,"ng-template",null,10,i.W1O)),2&L){const S=i.MAs(3),P=i.oxw();i.xp6(1),i.Q6J("ngIf",P.truncateLongName)("ngIfElse",S)}}let K=(()=>{class L extends t.a{constructor(){super(...arguments),this.enablePopover=!0,this.truncateLongName=!1}set disease(S){if(!S)throw new Error("disease-tag disease Input requires LinkableDisease.");this._disease=S}get disease(){return this._disease}idFunction(){return this.disease.id}}return L.\u0275fac=function(){let B;return function(P){return(B||(B=i.n5z(L)))(P||L)}}(),L.\u0275cmp=i.Xpm({type:L,selectors:[["cvc-disease-tag"]],inputs:{disease:"disease",enablePopover:"enablePopover",truncateLongName:"truncateLongName"},features:[i.qOj],decls:7,vars:2,consts:[[4,"ngIf","ngIfElse"],["tag",""],["unlinked",""],["tagContent",""],[3,"routerLink"],[3,"ngTemplateOutlet"],["nz-popover","","nzPopoverPlacement","right",3,"nzPopoverMouseEnterDelay","nzPopoverContent","nzPopoverTrigger","nzMode","nzOnClose"],["diseasePopover",""],[3,"diseaseId"],["nz-icon","","nzType","civic-disease","nzTheme","twotone","nzTwotoneColor","#E62F76"],["fullName",""]],template:function(S,P){if(1&S&&(i.YNc(0,F,3,2,"ng-container",0),i.YNc(1,A,4,5,"ng-template",null,1,i.W1O),i.YNc(3,U,1,1,"ng-template",null,2,i.W1O),i.YNc(5,me,4,2,"ng-template",null,3,i.W1O)),2&S){const b=i.MAs(4);i.Q6J("ngIf",P.linked)("ngIfElse",b)}},dependencies:[_.O5,_.tP,e.rH,a.j,N.lU,R.Ls,j.I,w.W],encapsulation:2,changeDetection:0}),L})()},3396:(Et,be,c)=>{c.d(be,{Q:()=>w});var t=c(6814),i=c(4190),_=c(5695),e=c(7417),a=c(551),N=c(5687),R=c(2524),j=c(5879);let w=(()=>{class M{}return M.\u0275fac=function(I){return new(I||M)},M.\u0275mod=j.oAB({type:M}),M.\u0275inj=j.cJS({imports:[t.ez,i.Bz,_.X,e.$6,a.PV,R.s,N.t]}),M})()},8213:(Et,be,c)=>{c.d(be,{_:()=>gt});var t=c(7398),i=c(2181),_=c(5676),e=c(5879),a=c(313),N=c(6814),R=c(4190),j=c(551),w=c(2962),M=c(95),F=c(8125),I=c(5695),V=c(2574),A=c(2392),E=c(4770),U=c(9775),Q=c(3897),ze=c(4138),me=c(2384),K=c(2606),L=c(750),B=c(8091),S=c(6967),P=c(2616);function b(Ze,Wt){if(1&Ze&&(e.ynx(0),e._UZ(1,"i",17),e.ALo(2,"entityColor"),e._uU(3),e.BQk()),2&Ze){const Zt=e.oxw(2).ngIf;e.xp6(1),e.Q6J("nzTwotoneColor",e.lcZ(2,2,"EvidenceItem")),e.xp6(2),e.hij(" ",Zt.name," ")}}function ae(Ze,Wt){if(1&Ze&&e._UZ(0,"cvc-status-tag",18),2&Ze){const Zt=e.oxw(2).ngIf;e.Q6J("status",Zt.status)}}function le(Ze,Wt){1&Ze&&(e.TgZ(0,"nz-space"),e.YNc(1,b,4,4,"ng-container",15),e.YNc(2,ae,1,1,"cvc-status-tag",16),e.qZA())}function G(Ze,Wt){if(1&Ze&&e._UZ(0,"cvc-molecular-profile-tag",19),2&Ze){const Zt=e.oxw().ngIf;e.Q6J("molecularProfile",Zt.molecularProfile)("enablePopover",!1)("truncateLongName",!0)}}function ue(Ze,Wt){if(1&Ze&&(e.ynx(0),e._uU(1),e.BQk()),2&Ze){const Zt=Wt.ngIf;e.xp6(1),e.hij(" ",Zt," ")}}function pe(Ze,Wt){if(1&Ze&&(e.TgZ(0,"nz-descriptions",20)(1,"nz-descriptions-item",21),e._UZ(2,"cvc-mp-tag-name",22),e.qZA(),e.TgZ(3,"nz-descriptions-item",23),e._UZ(4,"cvc-source-tag",24),e.qZA()()),2&Ze){const Zt=e.oxw().ngIf;e.Q6J("nzColumn",1),e.xp6(2),e.Q6J("nameSegments",Zt.molecularProfile.parsedName)("enablePopover",!1),e.xp6(2),e.Q6J("source",Zt.source)("enablePopover",!1)}}function fe(Ze,Wt){if(1&Ze&&(e.ynx(0),e._UZ(1,"cvc-disease-tag",35),e.BQk()),2&Ze){const Zt=e.oxw(2).ngIf;e.xp6(1),e.Q6J("enablePopover",!1)("disease",Zt.disease)("truncateLongName",!0)}}function Se(Ze,Wt){1&Ze&&e._uU(0," N/A ")}function Le(Ze,Wt){if(1&Ze&&(e.TgZ(0,"span"),e._UZ(1,"cvc-therapy-tag",38),e.qZA()),2&Ze){const Zt=Wt.$implicit;e.xp6(1),e.Q6J("enablePopover",!1)("therapy",Zt)("truncateLongName",!0)}}function Ft(Ze,Wt){if(1&Ze&&(e.ynx(0),e._uU(1),e.ALo(2,"titlecase"),e.BQk()),2&Ze){const Zt=e.oxw(3).ngIf;e.xp6(1),e.hij(" ",e.lcZ(2,1,Zt.therapyInteractionType)," ")}}function Pt(Ze,Wt){if(1&Ze&&(e.TgZ(0,"nz-descriptions-item",36),e.YNc(1,Le,2,3,"span",37),e.YNc(2,Ft,3,3,"ng-container",1),e.qZA()),2&Ze){const Zt=e.oxw(2).ngIf;e.xp6(1),e.Q6J("ngForOf",Zt.therapies),e.xp6(1),e.Q6J("ngIf",Zt.therapies.length>1)}}function tn(Ze,Wt){if(1&Ze&&(e.TgZ(0,"span"),e._UZ(1,"cvc-phenotype-tag",40),e.qZA()),2&Ze){const Zt=Wt.$implicit;e.xp6(1),e.Q6J("enablePopover",!1)("phenotype",Zt)}}function xt(Ze,Wt){if(1&Ze&&(e.TgZ(0,"nz-descriptions-item",39),e.YNc(1,tn,2,2,"span",37),e.qZA()),2&Ze){const Zt=e.oxw(2).ngIf;e.xp6(1),e.Q6J("ngForOf",Zt.phenotypes)}}function $t(Ze,Wt){if(1&Ze&&(e.TgZ(0,"nz-descriptions",20)(1,"nz-descriptions-item",25),e._uU(2),e.qZA(),e.TgZ(3,"nz-descriptions-item",26),e._uU(4),e.ALo(5,"evidenceEnumDisplay"),e.qZA(),e.TgZ(6,"nz-descriptions-item",27),e._uU(7),e.ALo(8,"evidenceEnumDisplay"),e.qZA(),e.TgZ(9,"nz-descriptions-item",28),e._uU(10),e.ALo(11,"evidenceEnumDisplay"),e.qZA(),e.TgZ(12,"nz-descriptions-item",29),e._uU(13),e._UZ(14,"i",30),e.qZA(),e.TgZ(15,"nz-descriptions-item",31),e.YNc(16,fe,2,3,"ng-container",9),e.YNc(17,Se,1,0,"ng-template",null,32,e.W1O),e.qZA(),e.YNc(19,Pt,3,2,"nz-descriptions-item",33),e.YNc(20,xt,2,1,"nz-descriptions-item",34),e.qZA()),2&Ze){const Zt=e.MAs(18),_n=e.oxw().ngIf;e.Q6J("nzColumn",2),e.xp6(2),e.hij(" ",_n.evidenceLevel," "),e.xp6(2),e.hij(" ",e.lcZ(5,10,_n.evidenceType)," "),e.xp6(3),e.hij(" ",e.lcZ(8,12,_n.evidenceDirection)," "),e.xp6(3),e.hij(" ",e.lcZ(11,14,_n.significance)," "),e.xp6(3),e.hij(" ",_n.evidenceRating,""),e.xp6(3),e.Q6J("ngIf",_n.disease)("ngIfElse",Zt),e.xp6(3),e.Q6J("ngIf",_n.therapies.length>0),e.xp6(1),e.Q6J("ngIf",_n.phenotypes.length>0)}}function en(Ze,Wt){if(1&Ze&&(e.TgZ(0,"a",41)(1,"nz-tag",42),e._UZ(2,"i",43),e._uU(3),e.qZA()()),2&Ze){const Zt=e.oxw().ngIf;e.MGl("routerLink","/evidence/",Zt.id,"/flags"),e.xp6(3),e.hij(" Flags (",Zt.flags.totalCount,") ")}}function ln(Ze,Wt){if(1&Ze&&(e.TgZ(0,"a",41)(1,"nz-tag",44),e._UZ(2,"i",45),e._uU(3),e.qZA()()),2&Ze){const Zt=e.oxw().ngIf;e.MGl("routerLink","/evidence/",Zt.id,"/revisions"),e.xp6(3),e.hij(" Revisions (",Zt.revisions.totalCount,") ")}}function kn(Ze,Wt){if(1&Ze&&(e.TgZ(0,"a",41)(1,"nz-tag",46),e._UZ(2,"i",47),e._uU(3),e.qZA()()),2&Ze){const Zt=e.oxw().ngIf;e.MGl("routerLink","/evidence/",Zt.id,"/comments"),e.xp6(3),e.hij(" Comments (",Zt.comments.totalCount,") ")}}function at(Ze,Wt){if(1&Ze&&(e.ynx(0),e.TgZ(1,"nz-card",3),e.YNc(2,le,3,0,"ng-template",null,4,e.W1O),e.YNc(4,G,1,3,"ng-template",null,5,e.W1O),e.TgZ(6,"nz-row")(7,"nz-col",6)(8,"div",7)(9,"p",8),e.YNc(10,ue,2,1,"ng-container",9),e.qZA()()()(),e.TgZ(11,"nz-space",10),e.YNc(12,pe,5,5,"nz-descriptions",11),e.YNc(13,$t,21,16,"nz-descriptions",11),e.qZA(),e.TgZ(14,"nz-row",12)(15,"nz-col",6)(16,"nz-space",13),e.YNc(17,en,4,2,"a",14),e.YNc(18,ln,4,2,"a",14),e.YNc(19,kn,4,2,"a",14),e.qZA()()()(),e.BQk()),2&Ze){const Zt=Wt.ngIf,_n=e.MAs(3),Pn=e.MAs(5);e.oxw();const rn=e.MAs(4);e.xp6(1),e.Q6J("nzTitle",_n)("nzExtra",Pn),e.xp6(8),e.Q6J("nzEllipsisRows",4),e.xp6(1),e.Q6J("ngIf",Zt.description)("ngIfElse",rn)}}function Ue(Ze,Wt){1&Ze&&e._uU(0," Evidence item has not been provided a description.\n")}let gt=(()=>{class Ze{constructor(Zt){this.gql=Zt}ngOnInit(){if(null==this.evidenceId)throw new Error("cvc-evidence-popover requires valid evidenceId input.");this.evidence$=this.gql.watch({evidenceId:this.evidenceId}).valueChanges.pipe((0,t.U)(({data:Zt})=>Zt?.evidenceItem),(0,i.h)(_.ep))}}return Ze.\u0275fac=function(Zt){return new(Zt||Ze)(e.Y36(a.Ybm))},Ze.\u0275cmp=e.Xpm({type:Ze,selectors:[["cvc-evidence-popover"]],inputs:{evidenceId:"evidenceId"},decls:5,vars:3,consts:[["id","popover-content"],[4,"ngIf"],["noDescription",""],["nzBordered","false","id","card-content",3,"nzTitle","nzExtra"],["cardTitle",""],["molecularProfile",""],["nzSpan","24"],[1,"popover-text"],["nz-typography","","nzEllipsis","","nzExpandable","",3,"nzEllipsisRows"],[4,"ngIf","ngIfElse"],["nzDirection","vertical","nzSize","small"],["nzSize","small","nzBordered","true",3,"nzColumn",4,"nzSpaceItem"],["id","entity-child-counts"],["nzSize","small"],[3,"routerLink",4,"nzSpaceItem"],[4,"nzSpaceItem"],["style","font-weight: normal",3,"status",4,"nzSpaceItem"],["nz-icon","","nzTheme","twotone","nzType","civic-evidence",3,"nzTwotoneColor"],[2,"font-weight","normal",3,"status"],[3,"molecularProfile","enablePopover","truncateLongName"],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","MP Expression"],[3,"nameSegments","enablePopover"],["nzTitle","Source","nzSpan","2"],[3,"source","enablePopover"],["nzTitle","Level"],["nzTitle","Type"],["nzTitle","Direction"],["nzTitle","Clinical Significance","nzSpan","2"],["nzTitle","Rating"],["nz-icon","","nzType","star","nzTheme","fill"],["nzTitle","Disease"],["noDisease",""],["nzTitle","Therapies","nzSpan","2",4,"ngIf"],["nzTitle","Phenotypes","nzSpan","2",4,"ngIf"],[3,"enablePopover","disease","truncateLongName"],["nzTitle","Therapies","nzSpan","2"],[4,"ngFor","ngForOf"],[3,"enablePopover","therapy","truncateLongName"],["nzTitle","Phenotypes","nzSpan","2"],[3,"enablePopover","phenotype"],[3,"routerLink"],["nzColor","red"],["nz-icon","","nzType","civic-flag"],["nzColor","orange"],["nz-icon","","nzType","civic-revision"],["nzColor","blue"],["nz-icon","","nzType","civic-comment"]],template:function(Zt,_n){1&Zt&&(e.TgZ(0,"div",0),e.YNc(1,at,20,5,"ng-container",1),e.ALo(2,"ngrxPush"),e.qZA(),e.YNc(3,Ue,1,0,"ng-template",null,2,e.W1O)),2&Zt&&(e.xp6(1),e.Q6J("ngIf",e.lcZ(2,1,_n.evidence$)))},dependencies:[N.sg,N.O5,R.rH,j.Ls,w.bd,M.t3,M.SK,F.R7,F.uj,I.j,V.NU,V.$1,A.ZU,E.T,U.n,Q.i,ze.T,me.h,K.p,L.C,N.rS,B.fM,S.Do,P.a],styles:["[_nghost-%COMP%]{display:block;margin:-8px -12px}[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}[_nghost-%COMP%]     .ant-descriptions-view{border:none}[_nghost-%COMP%]     #entity-child-counts{border-top:1px solid #f0f0f0;padding:8px}[_nghost-%COMP%]     #entity-child-counts nz-space{width:100%}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child nz-tag{margin-right:0}.popover-text[_ngcontent-%COMP%]{width:100%;padding:8px;border-bottom:1px solid #f0f0f0}#popover-content[_ngcontent-%COMP%]{min-width:350px;max-width:500px;min-height:125px}"]}),Ze})()},1855:(Et,be,c)=>{c.d(be,{f:()=>me});var t=c(6814),i=c(2962),_=c(95),e=c(8125),a=c(4190),N=c(5695),R=c(3396),j=c(3043),w=c(2574),M=c(551),F=c(2524),I=c(8641),V=c(2655),A=c(2392),E=c(4717),U=c(8527),Q=c(6061),ze=c(5879);let me=(()=>{class K{}return K.\u0275fac=function(B){return new(B||K)},K.\u0275mod=ze.oAB({type:K}),K.\u0275inj=ze.cJS({imports:[t.ez,a.Bz,M.PV,i.vh,_.Jb,e.q6,N.X,w.zf,A.ZJ,F.s,Q.N,R.Q,j.y,I.s,V.x,U.u,E.r]}),K})()},3743:(Et,be,c)=>{c.d(be,{y:()=>S});var t=c(5676),i=c(7398),_=c(2181),e=c(5879),a=c(313),N=c(6814),R=c(4190),j=c(2962),w=c(95),M=c(8125),F=c(5695),I=c(551),V=c(2574),A=c(8091),E=c(2616);function U(P,b){if(1&P&&(e._UZ(0,"i",11),e.ALo(1,"entityColor"),e._uU(2)),2&P){const ae=e.oxw().ngIf;e.Q6J("nzTwotoneColor",e.lcZ(1,3,"Feature")),e.xp6(2),e.AsE(" ",ae.featureInstance.__typename," - ",ae.name," ")}}function Q(P,b){if(1&P&&(e.TgZ(0,"nz-tag"),e._uU(1),e.qZA()),2&P){const ae=b.$implicit;e.xp6(1),e.Oqu(ae)}}function ze(P,b){if(1&P&&(e.TgZ(0,"nz-descriptions-item",12),e.YNc(1,Q,2,1,"nz-tag",13),e.qZA()),2&P){const ae=e.oxw().ngIf;e.xp6(1),e.Q6J("ngForOf",ae.featureAliases)}}function me(P,b){if(1&P&&(e.TgZ(0,"a",14)(1,"nz-tag",15),e._UZ(2,"i",16),e._uU(3),e.qZA()()),2&P){const ae=e.oxw().ngIf;e.MGl("routerLink","/features/",ae.id,"/flags"),e.xp6(3),e.hij(" Flags (",ae.flags.totalCount,") ")}}function K(P,b){if(1&P&&(e.TgZ(0,"a",14)(1,"nz-tag",17),e._UZ(2,"i",18),e._uU(3," Revisions "),e.qZA()()),2&P){const ae=e.oxw().ngIf;e.MGl("routerLink","/features/",ae.id,"/revisions")}}function L(P,b){if(1&P&&(e.TgZ(0,"a",14)(1,"nz-tag",19),e._UZ(2,"i",20),e._uU(3," Comments "),e.qZA()()),2&P){const ae=e.oxw().ngIf;e.MGl("routerLink","/features/",ae.id,"/comments")}}function B(P,b){if(1&P&&(e.ynx(0),e.TgZ(1,"nz-card",2),e.YNc(2,U,3,5,"ng-template",null,3,e.W1O),e.TgZ(4,"nz-descriptions",4),e.YNc(5,ze,2,1,"nz-descriptions-item",5),e.TgZ(6,"nz-descriptions-item",6),e._uU(7),e.qZA()(),e.TgZ(8,"nz-row",7)(9,"nz-col",8)(10,"nz-space",9),e.YNc(11,me,4,2,"a",10),e.YNc(12,K,4,1,"a",10),e.YNc(13,L,4,1,"a",10),e.qZA()()()(),e.BQk()),2&P){const ae=b.ngIf,le=e.MAs(3);e.xp6(1),e.Q6J("nzTitle",le),e.xp6(3),e.Q6J("nzColumn",2),e.xp6(1),e.Q6J("ngIf",ae.featureAliases.length>0),e.xp6(2),e.hij(" ",ae.variants.totalCount," ")}}let S=(()=>{class P{constructor(ae){this.gql=ae}ngOnInit(){if(null==this.featureId)throw new Error("cvc-feature-popover requires valid featureId input.");this.feature$=this.gql.watch({featureId:this.featureId}).valueChanges.pipe((0,i.U)(({data:ae})=>ae?.feature),(0,_.h)(t.ep))}}return P.\u0275fac=function(ae){return new(ae||P)(e.Y36(a.Dnw))},P.\u0275cmp=e.Xpm({type:P,selectors:[["cvc-feature-popover"]],inputs:{featureId:"featureId"},decls:3,vars:3,consts:[["id","popover-content"],[4,"ngIf"],["nzBordered","false","id","card-content",3,"nzTitle"],["cardTitle",""],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","Aliases","nzSpan","2",4,"ngIf"],["nzTitle","Variants"],["id","entity-child-counts"],["nzSpan","24"],["nzSize","small"],[3,"routerLink",4,"nzSpaceItem"],["nz-icon","","nzTheme","twotone","nzType","civic-feature",3,"nzTwotoneColor"],["nzTitle","Aliases","nzSpan","2"],[4,"ngFor","ngForOf"],[3,"routerLink"],["nzColor","red"],["nz-icon","","nzType","civic-flag"],["nzColor","orange"],["nz-icon","","nzType","civic-revision"],["nzColor","blue"],["nz-icon","","nzType","civic-comment"]],template:function(ae,le){1&ae&&(e.TgZ(0,"div",0),e.YNc(1,B,14,4,"ng-container",1),e.ALo(2,"ngrxPush"),e.qZA()),2&ae&&(e.xp6(1),e.Q6J("ngIf",e.lcZ(2,1,le.feature$)))},dependencies:[N.sg,N.O5,R.rH,j.bd,w.t3,w.SK,M.R7,M.uj,F.j,I.Ls,V.NU,V.$1,A.fM,E.a],styles:["[_nghost-%COMP%]{display:block;margin:-8px -12px}[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}[_nghost-%COMP%]     .ant-descriptions-view{border:none}[_nghost-%COMP%]     #entity-child-counts{border-top:1px solid #f0f0f0;padding:8px}[_nghost-%COMP%]     #entity-child-counts nz-space{width:100%}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child nz-tag{margin-right:0}.popover-text[_ngcontent-%COMP%]{width:100%;padding:8px;border-bottom:1px solid #f0f0f0}#popover-content[_ngcontent-%COMP%]{min-width:350px;max-width:500px;min-height:125px}"]}),P})()},9910:(Et,be,c)=>{c.d(be,{N:()=>F});var t=c(6814),i=c(4190),_=c(2524),e=c(2962),a=c(8125),N=c(95),R=c(551),j=c(2574),w=c(5695),M=c(5879);let F=(()=>{class I{}return I.\u0275fac=function(A){return new(A||I)},I.\u0275mod=M.oAB({type:I}),I.\u0275inj=M.cJS({imports:[t.ez,i.Bz,e.vh,N.Jb,a.q6,w.X,R.PV,j.zf,_.s]}),I})()},355:(Et,be,c)=>{c.d(be,{K:()=>S});var t=c(8130),i=c(2023),_=c(5879),e=c(6814),a=c(4190),N=c(5695),R=c(7417),j=c(551),w=c(3743),M=c(3103),F=c(5869),I=c(2616);function V(P,b){}function A(P,b){if(1&P&&(_.ynx(0),_.TgZ(1,"a",4),_.YNc(2,V,0,0,"ng-template",5),_.qZA(),_.BQk()),2&P){const ae=_.oxw(),le=_.MAs(2);_.xp6(1),_.Q6J("routerLink",ae.feature.link),_.xp6(1),_.Q6J("ngTemplateOutlet",le)}}function E(P,b){}function U(P,b){if(1&P&&_._UZ(0,"cvc-feature-popover",8),2&P){const ae=_.oxw(2);_.Q6J("featureId",ae.feature.id)}}function Q(P,b){if(1&P){const ae=_.EpF();_.TgZ(0,"nz-tag",6),_.NdJ("nzOnClose",function(G){_.CHM(ae);const ue=_.oxw();return _.KtG(ue.itemClosed(G))}),_.YNc(1,E,0,0,"ng-template",5),_.qZA(),_.YNc(2,U,1,1,"ng-template",null,7,_.W1O)}if(2&P){const ae=_.MAs(3),le=_.oxw(),G=_.MAs(6);_.Q6J("nzPopoverMouseEnterDelay",le.onCloseClicked?0:.5)("nzPopoverContent",ae)("nzPopoverTrigger",le.enablePopover?"hover":null)("nzMode",le.onCloseClicked?"closeable":"default"),_.xp6(1),_.Q6J("ngTemplateOutlet",G)}}function ze(P,b){}function me(P,b){if(1&P&&_.YNc(0,ze,0,0,"ng-template",5),2&P){_.oxw();const ae=_.MAs(2);_.Q6J("ngTemplateOutlet",ae)}}function K(P,b){if(1&P&&(_.ynx(0),_._uU(1),_.ALo(2,"truncate"),_.BQk()),2&P){const ae=_.oxw(2);_.xp6(1),_.hij(" ",_.xi3(2,1,ae.feature.name,12)," ")}}function L(P,b){if(1&P&&_._uU(0),2&P){const ae=_.oxw(2);_.hij(" ",ae.feature.name," ")}}function B(P,b){if(1&P&&(_.TgZ(0,"cvc-icon-badges",9),_._UZ(1,"i",10),_.ALo(2,"entityColor"),_.qZA(),_.YNc(3,K,3,4,"ng-container",0),_.YNc(4,L,1,1,"ng-template",null,11,_.W1O)),2&P){const ae=_.MAs(5),le=_.oxw();_.Q6J("flagged",le.feature.flagged)("entityColor",le.iconColor),_.xp6(1),_.Q6J("nzTwotoneColor",_.lcZ(2,5,"Feature")),_.xp6(2),_.Q6J("ngIf",le.truncateLongName)("ngIfElse",ae)}}let S=(()=>{class P extends t.a{constructor(){super(),this.enablePopover=!0,this.truncateLongName=!1,this.iconColor=(0,i.f)("Gene")}idFunction(){return this.feature.id}ngOnInit(){if(super.ngOnInit(),void 0===this.feature)throw new Error("cvc-feature-tag requires LinkableFeature input, none supplied.")}}return P.\u0275fac=function(ae){return new(ae||P)},P.\u0275cmp=_.Xpm({type:P,selectors:[["cvc-feature-tag"]],inputs:{feature:"feature",enablePopover:"enablePopover",truncateLongName:"truncateLongName"},features:[_.qOj],decls:7,vars:2,consts:[[4,"ngIf","ngIfElse"],["tag",""],["unlinked",""],["tagContent",""],[3,"routerLink"],[3,"ngTemplateOutlet"],["nz-popover","",3,"nzPopoverMouseEnterDelay","nzPopoverContent","nzPopoverTrigger","nzMode","nzOnClose"],["featurePopover",""],[3,"featureId"],[3,"flagged","entityColor"],["nz-icon","","nzType","civic-feature","nzTheme","twotone",3,"nzTwotoneColor"],["fullName",""]],template:function(ae,le){if(1&ae&&(_.YNc(0,A,3,2,"ng-container",0),_.YNc(1,Q,4,5,"ng-template",null,1,_.W1O),_.YNc(3,me,1,1,"ng-template",null,2,_.W1O),_.YNc(5,B,6,7,"ng-template",null,3,_.W1O)),2&ae){const G=_.MAs(4);_.Q6J("ngIf",le.linked)("ngIfElse",G)}},dependencies:[e.O5,e.tP,a.rH,N.j,R.lU,j.Ls,w.y,M.b,F.W,I.a],encapsulation:2,changeDetection:0}),P})()},2647:(Et,be,c)=>{c.d(be,{k:()=>F});var t=c(6814),i=c(4190),_=c(5695),e=c(551),a=c(7417),N=c(2524),R=c(3640),j=c(3146),w=c(9910),M=c(5879);let F=(()=>{class I{}return I.\u0275fac=function(A){return new(A||I)},I.\u0275mod=M.oAB({type:I}),I.\u0275inj=M.cJS({imports:[t.ez,i.Bz,_.X,a.$6,e.PV,R.mS,N.s,w.N,j.C]}),I})()},156:(Et,be,c)=>{c.d(be,{_:()=>le});var t=c(5676),i=c(7398),_=c(2181),e=c(5879),a=c(313),N=c(6814),R=c(4190),j=c(2962),w=c(95),M=c(8125),F=c(5695),I=c(551),V=c(2574),A=c(1887),E=c(750),U=c(8091);function Q(G,ue){if(1&G&&(e._UZ(0,"i",16),e._uU(1)),2&G){const pe=e.oxw().ngIf;e.xp6(1),e.hij(" ",pe.name," ")}}function ze(G,ue){if(1&G&&(e.TgZ(0,"nz-descriptions-item",17),e._uU(1),e.qZA()),2&G){const pe=e.oxw().ngIf;e.xp6(1),e.hij(" ",pe.evidenceItems.totalCount," ")}}function me(G,ue){if(1&G&&(e.TgZ(0,"nz-descriptions-item",18),e._uU(1),e.qZA()),2&G){const pe=e.oxw().ngIf;e.xp6(1),e.hij(" ",pe.assertions.totalCount," ")}}function K(G,ue){if(1&G&&(e.TgZ(0,"nz-tag"),e._uU(1),e.qZA()),2&G){const pe=ue.$implicit;e.xp6(1),e.Oqu(pe)}}function L(G,ue){if(1&G&&(e.ynx(0),e.TgZ(1,"cvc-tag-list"),e.YNc(2,K,2,1,"nz-tag",19),e.qZA(),e.BQk()),2&G){const pe=e.oxw().ngIf;e.xp6(2),e.Q6J("ngForOf",pe.molecularProfileAliases)}}function B(G,ue){1&G&&(e.TgZ(0,"span",20),e._uU(1,"None specified"),e.qZA())}function S(G,ue){if(1&G&&(e.TgZ(0,"a",21)(1,"nz-tag",22),e._UZ(2,"i",23),e._uU(3),e.qZA()()),2&G){const pe=e.oxw().ngIf;e.MGl("routerLink","/molecular-profiles/",pe.id,"/flags"),e.xp6(3),e.hij(" Flags (",pe.flags.totalCount,") ")}}function P(G,ue){if(1&G&&(e.TgZ(0,"a",21)(1,"nz-tag",24),e._UZ(2,"i",25),e._uU(3),e.qZA()()),2&G){const pe=e.oxw().ngIf;e.MGl("routerLink","/molecular-profiles/",pe.id,"/revisions"),e.xp6(3),e.hij(" Revisions (",pe.revisions.totalCount,") ")}}function b(G,ue){if(1&G&&(e.TgZ(0,"a",21)(1,"nz-tag",26),e._UZ(2,"i",27),e._uU(3),e.qZA()()),2&G){const pe=e.oxw().ngIf;e.MGl("routerLink","/molecular-profiles/",pe.id,"/comments"),e.xp6(3),e.hij(" Comments (",pe.comments.totalCount,") ")}}function ae(G,ue){if(1&G&&(e.ynx(0),e.TgZ(1,"nz-card",2),e.YNc(2,Q,2,1,"ng-template",null,3,e.W1O),e.TgZ(4,"nz-descriptions",4)(5,"nz-descriptions-item",5),e._UZ(6,"cvc-mp-tag-name",6),e.qZA(),e.YNc(7,ze,2,1,"nz-descriptions-item",7),e.YNc(8,me,2,1,"nz-descriptions-item",8),e.TgZ(9,"nz-descriptions-item",9),e.YNc(10,L,3,1,"ng-container",10),e.YNc(11,B,2,0,"ng-template",null,11,e.W1O),e.qZA()(),e.TgZ(13,"nz-row",12)(14,"nz-col",13)(15,"nz-space",14),e.YNc(16,S,4,2,"a",15),e.YNc(17,P,4,2,"a",15),e.YNc(18,b,4,2,"a",15),e.qZA()()()(),e.BQk()),2&G){const pe=ue.ngIf,fe=e.MAs(3),Se=e.MAs(12);e.xp6(1),e.Q6J("nzTitle",fe),e.xp6(3),e.Q6J("nzColumn",2),e.xp6(2),e.Q6J("nameSegments",pe.parsedName)("enablePopover",!1),e.xp6(1),e.Q6J("ngIf",pe.evidenceItems.totalCount>0),e.xp6(1),e.Q6J("ngIf",pe.assertions.totalCount>0),e.xp6(2),e.Q6J("ngIf",pe.molecularProfileAliases.length>0)("ngIfElse",Se)}}let le=(()=>{class G{constructor(pe){this.gql=pe}ngOnInit(){if(void 0===this.molecularProfileId)throw new Error("Must pass a molecular profile ID into the molecular profile popover component.");this.molecularProfile$=this.gql.watch({molecularProfileId:this.molecularProfileId}).valueChanges.pipe((0,i.U)(({data:pe})=>pe?.molecularProfile),(0,_.h)(t.ep))}}return G.\u0275fac=function(pe){return new(pe||G)(e.Y36(a.DkJ))},G.\u0275cmp=e.Xpm({type:G,selectors:[["cvc-molecular-profile-popover"]],inputs:{molecularProfileId:"molecularProfileId"},decls:3,vars:3,consts:[["id","popover-content"],[4,"ngIf"],["nzBordered","false","id","card-content",3,"nzTitle"],["cardTitle",""],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","MP Expression","nzSpan","2"],[3,"nameSegments","enablePopover"],["nzTitle","Evidence Items","nzSpan","2",4,"ngIf"],["nzTitle","Assertions","nzSpan","2",4,"ngIf"],["nzTitle","Aliases"],[4,"ngIf","ngIfElse"],["noAliases",""],["id","entity-child-counts"],["nzSpan","24"],["nzSize","small"],[3,"routerLink",4,"nzSpaceItem"],["nz-icon","","nzType","civic:molecularprofile"],["nzTitle","Evidence Items","nzSpan","2"],["nzTitle","Assertions","nzSpan","2"],[4,"ngFor","ngForOf"],["nz-typography","","nzType","secondary"],[3,"routerLink"],["nzColor","red"],["nz-icon","","nzType","civic-flag"],["nzColor","orange"],["nz-icon","","nzType","civic-revision"],["nzColor","blue"],["nz-icon","","nzType","civic-comment"]],template:function(pe,fe){1&pe&&(e.TgZ(0,"div",0),e.YNc(1,ae,19,8,"ng-container",1),e.ALo(2,"ngrxPush"),e.qZA()),2&pe&&(e.xp6(1),e.Q6J("ngIf",e.lcZ(2,1,fe.molecularProfile$)))},dependencies:[N.sg,N.O5,R.rH,j.bd,w.t3,w.SK,M.R7,M.uj,F.j,I.Ls,V.NU,V.$1,A.$,E.C,U.fM],styles:["[_nghost-%COMP%]{display:block;margin:-8px -12px}[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}[_nghost-%COMP%]     .ant-descriptions-view{border:none}[_nghost-%COMP%]     #entity-child-counts{border-top:1px solid #f0f0f0;padding:8px}[_nghost-%COMP%]     #entity-child-counts nz-space{width:100%}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child nz-tag{margin-right:0}.popover-text[_ngcontent-%COMP%]{width:100%;padding:8px;border-bottom:1px solid #f0f0f0}#popover-content[_ngcontent-%COMP%]{min-width:350px;max-width:500px;min-height:125px}"]}),G})()},2064:(Et,be,c)=>{c.d(be,{_:()=>A});var t=c(6814),i=c(4190),_=c(2962),e=c(95),a=c(8125),N=c(5695),R=c(551),j=c(2574),w=c(6067),M=c(4717),F=c(366),I=c(2647),V=c(5879);let A=(()=>{class E{}return E.\u0275fac=function(Q){return new(Q||E)},E.\u0275mod=V.oAB({type:E}),E.\u0275inj=V.cJS({imports:[t.ez,i.Bz,_.vh,e.Jb,a.q6,N.X,R.PV,j.zf,I.k,w.X,F.$,M.r]}),E})()},750:(Et,be,c)=>{c.d(be,{C:()=>I});var t=c(5879),i=c(6814),_=c(9408),e=c(355),a=c(8184);function N(V,A){if(1&V&&t._UZ(0,"span",3),2&V){const E=t.oxw().$implicit;t.Q6J("innerHtml",E.text,t.oJD)}}function R(V,A){if(1&V&&t._UZ(0,"cvc-feature-tag",6),2&V){const E=t.oxw().$implicit,U=t.oxw(3);t.Q6J("feature",E)("enablePopover",U.enablePopover)}}function j(V,A){if(1&V&&(t.ynx(0),t.YNc(1,R,1,2,"cvc-feature-tag",5),t.BQk()),2&V){const E=A.$implicit;t.xp6(1),t.Q6J("ngIf","Feature"==E.__typename)}}const w=function(V){return[V]};function M(V,A){if(1&V&&(t.ynx(0),t.TgZ(1,"cvc-tag-group"),t.YNc(2,j,2,1,"ng-container",0),t._UZ(3,"cvc-variant-tag",4),t.qZA(),t.BQk()),2&V){const E=t.oxw(),U=E.index,Q=E.$implicit,ze=t.oxw();t.xp6(2),t.Q6J("ngForOf",t.VKq(3,w,ze.nameSegments[U-1])),t.xp6(1),t.Q6J("variant",Q)("enablePopover",ze.enablePopover)}}function F(V,A){if(1&V&&(t.ynx(0),t.YNc(1,N,1,1,"span",1),t.YNc(2,M,4,5,"ng-container",2),t.BQk()),2&V){const E=A.$implicit;t.xp6(1),t.Q6J("ngIf","MolecularProfileTextSegment"==E.__typename),t.xp6(1),t.Q6J("ngIf","Variant"==E.__typename)}}let I=(()=>{class V{constructor(){this.enablePopover=!0}ngOnInit(){if(void 0===this.nameSegments)throw new Error("Must pass a list of molecular profile name segments into mp name component.")}}return V.\u0275fac=function(E){return new(E||V)},V.\u0275cmp=t.Xpm({type:V,selectors:[["cvc-mp-tag-name"]],inputs:{nameSegments:"nameSegments",enablePopover:"enablePopover"},decls:1,vars:1,consts:[[4,"ngFor","ngForOf"],["class","text-segment",3,"innerHtml",4,"ngIf"],[4,"ngIf"],[1,"text-segment",3,"innerHtml"],[3,"variant","enablePopover"],[3,"feature","enablePopover",4,"ngIf"],[3,"feature","enablePopover"]],template:function(E,U){1&E&&t.YNc(0,F,3,2,"ng-container",0),2&E&&t.Q6J("ngForOf",U.nameSegments)},dependencies:[i.sg,i.O5,_.I,e.K,a.O],styles:[".text-segment[_ngcontent-%COMP%]{display:inline-block;margin-right:8px;font-weight:700;color:#0009;font-size:14px;line-height:12px}"]}),V})()},4717:(Et,be,c)=>{c.d(be,{r:()=>j});var t=c(6814),i=c(7528),_=c(5695),e=c(551),a=c(3986),N=c(2647),R=c(5879);let j=(()=>{class w{}return w.\u0275fac=function(F){return new(F||w)},w.\u0275mod=R.oAB({type:w}),w.\u0275inj=R.cJS({imports:[t.ez,_.X,e.PV,i.Q,N.k,a.i]}),w})()},2606:(Et,be,c)=>{c.d(be,{p:()=>ae});var t=c(8130),i=c(2023),_=c(5879),e=c(6814),a=c(4190),N=c(5695),R=c(7417),j=c(551),w=c(156),M=c(5869);function F(le,G){}function I(le,G){if(1&le&&(_.ynx(0),_.TgZ(1,"a",5),_.YNc(2,F,0,0,"ng-template",6),_.qZA(),_.BQk()),2&le){const ue=_.oxw(),pe=_.MAs(2);_.xp6(1),_.Q6J("routerLink",ue.molecularProfile.link),_.xp6(1),_.Q6J("ngTemplateOutlet",pe)}}function V(le,G){}const A=function(le){return{deprecated:le}};function E(le,G){if(1&le){const ue=_.EpF();_.TgZ(0,"nz-tag",9),_.NdJ("nzOnClose",function(fe){_.CHM(ue);const Se=_.oxw(2);return _.KtG(Se.itemClosed(fe))}),_.YNc(1,V,0,0,"ng-template",6),_.qZA()}if(2&le){_.oxw();const ue=_.MAs(2),pe=_.oxw(),fe=_.MAs(8);_.Q6J("ngClass",_.VKq(5,A,pe.molecularProfile.deprecated))("nzPopoverMouseEnterDelay",pe.onCloseClicked?0:.5)("nzPopoverContent",ue)("nzMode",pe.onCloseClicked?"closeable":"default"),_.xp6(1),_.Q6J("ngTemplateOutlet",fe)}}function U(le,G){if(1&le&&_._UZ(0,"cvc-molecular-profile-popover",11),2&le){const ue=_.oxw(3);_.Q6J("molecularProfileId",ue.molecularProfile.id)}}function Q(le,G){if(1&le&&_.YNc(0,U,1,1,"cvc-molecular-profile-popover",10),2&le){const ue=_.oxw(2);_.Q6J("ngIf",ue.enablePopover)}}function ze(le,G){if(1&le&&(_.YNc(0,E,2,7,"nz-tag",7),_.YNc(1,Q,1,1,"ng-template",null,8,_.W1O)),2&le){const ue=_.oxw(),pe=_.MAs(4);_.Q6J("ngIf",ue.enablePopover)("ngIfElse",pe)}}function me(le,G){}function K(le,G){if(1&le){const ue=_.EpF();_.TgZ(0,"nz-tag",12),_.NdJ("nzOnClose",function(fe){_.CHM(ue);const Se=_.oxw();return _.KtG(Se.itemClosed(fe))}),_.YNc(1,me,0,0,"ng-template",6),_.qZA()}if(2&le){const ue=_.oxw(),pe=_.MAs(8);_.Q6J("nzMode",ue.onCloseClicked?"closeable":"default")("ngClass",_.VKq(3,A,ue.molecularProfile.deprecated)),_.xp6(1),_.Q6J("ngTemplateOutlet",pe)}}function L(le,G){}function B(le,G){if(1&le&&_.YNc(0,L,0,0,"ng-template",6),2&le){_.oxw();const ue=_.MAs(2);_.Q6J("ngTemplateOutlet",ue)}}function S(le,G){if(1&le&&(_.ynx(0),_._uU(1),_.ALo(2,"truncate"),_.BQk()),2&le){const ue=_.oxw(2);_.xp6(1),_.hij(" ",_.xi3(2,1,ue.molecularProfile.name,ue.truncationLength)," ")}}function P(le,G){if(1&le&&_._uU(0),2&le){const ue=_.oxw(2);_.hij(" ",ue.molecularProfile.name," ")}}function b(le,G){if(1&le&&(_._UZ(0,"i",13),_.YNc(1,S,3,4,"ng-container",0),_.YNc(2,P,1,1,"ng-template",null,14,_.W1O)),2&le){const ue=_.MAs(3),pe=_.oxw();_.Q6J("nzTwotoneColor",pe.iconColor),_.xp6(1),_.Q6J("ngIf",pe.truncateLongName)("ngIfElse",ue)}}let ae=(()=>{class le extends t.a{constructor(){super(),this.enablePopover=!0,this.truncateLongName=!1,this.truncationLength=20,this.iconColor=(0,i.f)("MolecularProfile")}idFunction(){return this.molecularProfile.id}ngOnInit(){if(super.ngOnInit(),void 0===this.molecularProfile)throw new Error("cvc-molecular-profile-tag requires LinkableMolecularProfile input, none supplied.");"number"==typeof this.truncateLongName&&(this.truncationLength=this.truncateLongName),"segments"in this.molecularProfile&&(this.molecularProfile.name=this.molecularProfile.segments.map(ue=>"text"in ue?ue.text:ue.name).join(" "))}}return le.\u0275fac=function(ue){return new(ue||le)},le.\u0275cmp=_.Xpm({type:le,selectors:[["cvc-molecular-profile-tag"]],inputs:{molecularProfile:"molecularProfile",enablePopover:"enablePopover",truncateLongName:"truncateLongName"},features:[_.qOj],decls:9,vars:2,consts:[[4,"ngIf","ngIfElse"],["tag",""],["noPopover",""],["unlinked",""],["tagContent",""],[3,"routerLink"],[3,"ngTemplateOutlet"],["nz-popover","","nzPopoverTrigger","hover",3,"ngClass","nzPopoverMouseEnterDelay","nzPopoverContent","nzMode","nzOnClose",4,"ngIf","ngIfElse"],["popoverContent",""],["nz-popover","","nzPopoverTrigger","hover",3,"ngClass","nzPopoverMouseEnterDelay","nzPopoverContent","nzMode","nzOnClose"],[3,"molecularProfileId",4,"ngIf"],[3,"molecularProfileId"],[3,"nzMode","ngClass","nzOnClose"],["nz-icon","","nzType","civic-molecularprofile","nzTheme","twotone",3,"nzTwotoneColor"],["fullName",""]],template:function(ue,pe){if(1&ue&&(_.YNc(0,I,3,2,"ng-container",0),_.YNc(1,ze,3,2,"ng-template",null,1,_.W1O),_.YNc(3,K,2,5,"ng-template",null,2,_.W1O),_.YNc(5,B,1,1,"ng-template",null,3,_.W1O),_.YNc(7,b,4,3,"ng-template",null,4,_.W1O)),2&ue){const fe=_.MAs(6);_.Q6J("ngIf",pe.linked)("ngIfElse",fe)}},dependencies:[e.mk,e.O5,e.tP,a.rH,N.j,R.lU,j.Ls,w._,M.W],styles:["[_nghost-%COMP%]     nz-tag.rejected, [_nghost-%COMP%]     nz-tag.submitted, [_nghost-%COMP%]     nz-tag.accepted, [_nghost-%COMP%]     nz-tag.deprecated{border-right-width:2px}[_nghost-%COMP%]     nz-tag.rejected, [_nghost-%COMP%]     nz-tag.deprecated{border-color:#e6e6e6;background-color:#fff;color:#999999d9}[_nghost-%COMP%]     nz-tag.submitted{border-color:#ffe58f}[_nghost-%COMP%]     nz-tag.accepted{border-color:#b7eb8f}[_nghost-%COMP%]{display:inline-block}"],changeDetection:0}),le})()},8527:(Et,be,c)=>{c.d(be,{u:()=>w});var t=c(6814),i=c(4190),_=c(5695),e=c(551),a=c(7417),N=c(2524),R=c(2064),j=c(5879);let w=(()=>{class M{}return M.\u0275fac=function(I){return new(I||M)},M.\u0275mod=j.oAB({type:M}),M.\u0275inj=j.cJS({imports:[t.ez,i.Bz,_.X,a.$6,e.PV,N.s,R._]}),M})()},4402:(Et,be,c)=>{c.d(be,{S:()=>E});var t=c(5676),i=c(7398),_=c(2181),e=c(5879),a=c(313),N=c(6814),R=c(551),j=c(2962),w=c(3317),M=c(8125),F=c(8091);function I(U,Q){if(1&U&&(e._UZ(0,"i",9),e._uU(1)),2&U){const ze=e.oxw().ngIf;e.xp6(1),e.hij(" ",ze.name," ")}}function V(U,Q){if(1&U&&(e.TgZ(0,"cvc-link-tag",10),e._uU(1),e.qZA()),2&U){const ze=e.oxw().ngIf;e.Q6J("href",ze.url),e.xp6(1),e.hij(" ",ze.hpoId," ")}}function A(U,Q){if(1&U&&(e.ynx(0),e.TgZ(1,"nz-card",2),e.YNc(2,I,2,1,"ng-template",null,3,e.W1O),e.YNc(4,V,2,2,"ng-template",null,4,e.W1O),e.TgZ(6,"nz-descriptions",5)(7,"nz-descriptions-item",6),e._uU(8),e.qZA(),e.TgZ(9,"nz-descriptions-item",7),e._uU(10),e.qZA(),e.TgZ(11,"nz-descriptions-item",8),e._uU(12),e.qZA()()(),e.BQk()),2&U){const ze=Q.ngIf,me=e.MAs(3),K=e.MAs(5);e.xp6(1),e.Q6J("nzTitle",me)("nzExtra",K),e.xp6(5),e.Q6J("nzColumn",2),e.xp6(2),e.hij(" ",ze.assertionCount," "),e.xp6(2),e.hij(" ",ze.evidenceItemCount," "),e.xp6(2),e.hij(" ",ze.molecularProfileCount," ")}}let E=(()=>{class U{constructor(ze){this.gql=ze}ngOnInit(){if(null==this.phenotypeId)throw new Error("cvc-phenotype-popover requires valid phenotypeId input.");this.phenotype$=this.gql.watch({phenotypeId:this.phenotypeId}).valueChanges.pipe((0,i.U)(({data:ze})=>ze?.phenotypePopover),(0,_.h)(t.ep))}}return U.\u0275fac=function(ze){return new(ze||U)(e.Y36(a.OHm))},U.\u0275cmp=e.Xpm({type:U,selectors:[["cvc-phenotype-popover"]],inputs:{phenotypeId:"phenotypeId"},decls:3,vars:3,consts:[["id","popover-content"],[4,"ngIf"],["nzBordered","false","id","card-content",3,"nzTitle","nzExtra"],["cardTitle",""],["linkout",""],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","Assertions","nzSpan","2"],["nzTitle","Evidence","nzSpan","2"],["nzTitle","Molecular Profiles","nzSpan","2"],["nz-icon","","nzType","civic-phenotype","nzTheme","twotone","nzTwotoneColor","#2A63B6"],["tooltip","View in the Human Phenotype Ontology",3,"href"]],template:function(ze,me){1&ze&&(e.TgZ(0,"div",0),e.YNc(1,A,13,6,"ng-container",1),e.ALo(2,"ngrxPush"),e.qZA()),2&ze&&(e.xp6(1),e.Q6J("ngIf",e.lcZ(2,1,me.phenotype$)))},dependencies:[N.O5,R.Ls,j.bd,w.l,M.R7,M.uj,F.fM],styles:["[_nghost-%COMP%]{display:block;margin:-8px -12px}[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}[_nghost-%COMP%]     .ant-descriptions-view{border:none}[_nghost-%COMP%]     #entity-child-counts{border-top:1px solid #f0f0f0;padding:8px}[_nghost-%COMP%]     #entity-child-counts nz-space{width:100%}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child nz-tag{margin-right:0}.popover-text[_ngcontent-%COMP%]{width:100%;padding:8px;border-bottom:1px solid #f0f0f0}#popover-content[_ngcontent-%COMP%]{min-width:350px;max-width:500px;min-height:125px}"]}),U})()},1332:(Et,be,c)=>{c.d(be,{I:()=>R});var t=c(6814),i=c(2962),_=c(6067),e=c(8125),a=c(551),N=c(5879);let R=(()=>{class j{}return j.\u0275fac=function(M){return new(M||j)},j.\u0275mod=N.oAB({type:j}),j.\u0275inj=N.cJS({imports:[t.ez,a.PV,i.vh,_.X,e.q6]}),j})()},3897:(Et,be,c)=>{c.d(be,{i:()=>K});var t=c(8130),i=c(5879),_=c(6814),e=c(4190),a=c(5695),N=c(7417),R=c(551),j=c(4402),w=c(2616);function M(L,B){}function F(L,B){if(1&L&&(i.ynx(0),i.TgZ(1,"a",5),i.YNc(2,M,0,0,"ng-template",6),i.qZA(),i.BQk()),2&L){const S=i.oxw(),P=i.MAs(2);i.xp6(1),i.Q6J("routerLink",S.phenotype.link),i.xp6(1),i.Q6J("ngTemplateOutlet",P)}}function I(L,B){}function V(L,B){if(1&L&&i._UZ(0,"cvc-phenotype-popover",9),2&L){const S=i.oxw(2);i.Q6J("phenotypeId",S.phenotype.id)}}function A(L,B){if(1&L){const S=i.EpF();i.TgZ(0,"nz-tag",7),i.NdJ("nzOnClose",function(b){i.CHM(S);const ae=i.oxw();return i.KtG(ae.itemClosed(b))}),i.YNc(1,I,0,0,"ng-template",6),i.qZA(),i.YNc(2,V,1,1,"ng-template",null,8,i.W1O)}if(2&L){const S=i.MAs(3),P=i.oxw(),b=i.MAs(8);i.Q6J("nzPopoverMouseEnterDelay",P.onCloseClicked?0:.5)("nzPopoverContent",S)("nzPopoverTrigger",P.enablePopover?"hover":null)("nzMode",P.onCloseClicked?"closeable":"default"),i.xp6(1),i.Q6J("ngTemplateOutlet",b)}}function E(L,B){}function U(L,B){if(1&L){const S=i.EpF();i.TgZ(0,"nz-tag",10),i.NdJ("nzOnClose",function(b){i.CHM(S);const ae=i.oxw();return i.KtG(ae.itemClosed(b))}),i.YNc(1,E,0,0,"ng-template",6),i.qZA()}if(2&L){const S=i.oxw(),P=i.MAs(8);i.Q6J("nzMode",S.onCloseClicked?"closeable":"default"),i.xp6(1),i.Q6J("ngTemplateOutlet",P)}}function Q(L,B){}function ze(L,B){if(1&L&&i.YNc(0,Q,0,0,"ng-template",6),2&L){i.oxw();const S=i.MAs(2);i.Q6J("ngTemplateOutlet",S)}}function me(L,B){if(1&L&&(i._UZ(0,"i",11),i.ALo(1,"entityColor"),i._uU(2)),2&L){const S=i.oxw();i.Q6J("nzTwotoneColor",i.lcZ(1,2,"Phenotype")),i.xp6(2),i.hij(" ",S.phenotype.name,"\n")}}let K=(()=>{class L extends t.a{constructor(){super(...arguments),this.enablePopover=!0}set phenotype(S){if(!S)throw new Error("phenotype-tag phentype input requires LinkablePhenotype.");this._phenotype=S}get phenotype(){return this._phenotype}idFunction(){return this.phenotype.id}}return L.\u0275fac=function(){let B;return function(P){return(B||(B=i.n5z(L)))(P||L)}}(),L.\u0275cmp=i.Xpm({type:L,selectors:[["cvc-phenotype-tag"]],inputs:{phenotype:"phenotype",enablePopover:"enablePopover"},features:[i.qOj],decls:9,vars:2,consts:[[4,"ngIf","ngIfElse"],["tag",""],["noPopover",""],["unlinked",""],["tagContent",""],[3,"routerLink"],[3,"ngTemplateOutlet"],["nz-popover","","nzPopoverPlacement","right",3,"nzPopoverMouseEnterDelay","nzPopoverContent","nzPopoverTrigger","nzMode","nzOnClose"],["phenotypePopover",""],[3,"phenotypeId"],[3,"nzMode","nzOnClose"],["nz-icon","","nzTheme","twotone","nzType","civic-phenotype",3,"nzTwotoneColor"]],template:function(S,P){if(1&S&&(i.YNc(0,F,3,2,"ng-container",0),i.YNc(1,A,4,5,"ng-template",null,1,i.W1O),i.YNc(3,U,2,2,"ng-template",null,2,i.W1O),i.YNc(5,ze,1,1,"ng-template",null,3,i.W1O),i.YNc(7,me,3,4,"ng-template",null,4,i.W1O)),2&S){const b=i.MAs(6);i.Q6J("ngIf",P.linked)("ngIfElse",b)}},dependencies:[_.O5,_.tP,e.rH,a.j,N.lU,R.Ls,j.S,w.a],styles:["[_nghost-%COMP%]{display:block}"],changeDetection:0}),L})()},3043:(Et,be,c)=>{c.d(be,{y:()=>w});var t=c(6814),i=c(4190),_=c(2524),e=c(551),a=c(7417),N=c(5695),R=c(1332),j=c(5879);let w=(()=>{class M{}return M.\u0275fac=function(I){return new(I||M)},M.\u0275mod=j.oAB({type:M}),M.\u0275inj=j.cJS({imports:[t.ez,i.Bz,N.X,a.$6,e.PV,R.I,_.s]}),M})()},3103:(Et,be,c)=>{c.d(be,{b:()=>w});var t=c(2023),i=c(5879),_=c(6814);const e=function(M){return{background:M}};function a(M,F){if(1&M&&i._UZ(0,"div",3),2&M){const I=i.oxw();i.Q6J("ngStyle",i.VKq(1,e,I.flagColor))}}function N(M,F){if(1&M&&i._UZ(0,"div",4),2&M){const I=i.oxw();i.Q6J("ngStyle",i.VKq(1,e,I.entityColor))}}function R(M,F){if(1&M&&i._UZ(0,"div",5),2&M){const I=i.oxw();i.Q6J("ngStyle",i.VKq(1,e,I.entityColor))}}const j=["*"];let w=(()=>{class M{constructor(){this.hasRevisions=!1,this.flagged=!1,this.hasComments=!1,this.entityColor="#AAA",this.flagColor=(0,t.f)("Flag")}}return M.\u0275fac=function(I){return new(I||M)},M.\u0275cmp=i.Xpm({type:M,selectors:[["cvc-icon-badges"]],inputs:{hasRevisions:"hasRevisions",flagged:"flagged",hasComments:"hasComments",entityColor:"entityColor"},ngContentSelectors:j,decls:4,vars:3,consts:[["class","cvc-badge badge-flags",3,"ngStyle",4,"ngIf"],["class","cvc-badge badge-revisions",3,"ngStyle",4,"ngIf"],["class","cvc-badge badge-comments",3,"ngStyle",4,"ngIf"],[1,"cvc-badge","badge-flags",3,"ngStyle"],[1,"cvc-badge","badge-revisions",3,"ngStyle"],[1,"cvc-badge","badge-comments",3,"ngStyle"]],template:function(I,V){1&I&&(i.F$t(),i.Hsn(0),i.YNc(1,a,1,3,"div",0),i.YNc(2,N,1,3,"div",1),i.YNc(3,R,1,3,"div",2)),2&I&&(i.xp6(1),i.Q6J("ngIf",V.flagged),i.xp6(1),i.Q6J("ngIf",V.hasRevisions),i.xp6(1),i.Q6J("ngIf",V.hasComments))},dependencies:[_.O5,_.PC],styles:["[_nghost-%COMP%]{display:inline-block;position:relative;line-height:1}.cvc-badge[_ngcontent-%COMP%]{position:absolute;z-index:auto;width:4px;min-width:4px;height:4px;border-radius:100%;box-shadow:0 0 0 1px #fff;background:#aaa}.cvc-badge.badge-revisions[_ngcontent-%COMP%]{top:.5px;right:.5px;transform:translate(50%,-50%)}.cvc-badge.badge-flags[_ngcontent-%COMP%]{top:.5px;left:.5px;transform:translate(-50%,-50%)}.cvc-badge.badge-comments[_ngcontent-%COMP%]{bottom:.5px;right:.5px;transform:translate(50%,50%)}"],changeDetection:0}),M})()},3146:(Et,be,c)=>{c.d(be,{C:()=>e});var t=c(6814),i=c(2524),_=c(5879);let e=(()=>{class a{}return a.\u0275fac=function(R){return new(R||a)},a.\u0275mod=_.oAB({type:a}),a.\u0275inj=_.cJS({imports:[t.ez,i.s]}),a})()},3317:(Et,be,c)=>{c.d(be,{l:()=>N});var t=c(5879),i=c(6109),_=c(5695),e=c(551);const a=["*"];let N=(()=>{class R{set href(w){if(!w)throw new Error("link-tag link Input requires string.");this._href=w}get href(){return this._href?this._href:""}}return R.\u0275fac=function(w){return new(w||R)},R.\u0275cmp=t.Xpm({type:R,selectors:[["cvc-link-tag"]],inputs:{href:"href",tooltip:"tooltip",iconName:"iconName"},ngContentSelectors:a,decls:4,vars:4,consts:[["target","_blank",3,"href"],["nzColor","default","nz-tooltip","",3,"nzTooltipTitle","nzTooltipTrigger"],["nz-icon","","nzTheme","outline",3,"nzType"]],template:function(w,M){1&w&&(t.F$t(),t.TgZ(0,"a",0)(1,"nz-tag",1),t._UZ(2,"i",2),t.Hsn(3),t.qZA()()),2&w&&(t.Q6J("href",M.href,t.LSH),t.xp6(1),t.Q6J("nzTooltipTitle",M.tooltip)("nzTooltipTrigger",M.tooltip?"hover":null),t.xp6(1),t.Q6J("nzType",M.iconName?M.iconName:"link"))},dependencies:[i.SY,_.j,e.Ls],encapsulation:2}),R})()},6067:(Et,be,c)=>{c.d(be,{X:()=>N});var t=c(6814),i=c(6109),_=c(5695),e=c(551),a=c(5879);let N=(()=>{class R{}return R.\u0275fac=function(w){return new(w||R)},R.\u0275mod=a.oAB({type:R}),R.\u0275inj=a.cJS({imports:[t.ez,i.cg,_.X,e.PV]}),R})()},9154:(Et,be,c)=>{c.d(be,{y:()=>a});var t=c(6814),i=c(551),_=c(5695),e=c(5879);let a=(()=>{class N{}return N.\u0275fac=function(j){return new(j||N)},N.\u0275mod=e.oAB({type:N}),N.\u0275inj=e.cJS({imports:[t.ez,_.X,i.PV]}),N})()},3489:(Et,be,c)=>{c.d(be,{H:()=>M});var t=c(5619),i=c(1687),_=c(1374),e=c(5879),a=c(6814),N=c(5695),R=c(551),j=c(8091);function w(F,I){1&F&&(e.TgZ(0,"nz-tag",1),e._UZ(1,"i",2),e.TgZ(2,"span"),e._uU(3,"End of results reached"),e.qZA()())}let M=(()=>{class F{set cvcShowTag(V){void 0!==V&&V&&this.showTag()}constructor(V){this.cdr=V,this.showTag$=new t.X(!1)}showTag(){!1===this.showTag$.getValue()&&(this.showTag$.next(!0),(0,i.F)(3e3).pipe((0,_.P)()).subscribe(()=>{this.showTag$.next(!1),this.cdr.detectChanges()}))}}return F.\u0275fac=function(V){return new(V||F)(e.Y36(e.sBO))},F.\u0275cmp=e.Xpm({type:F,selectors:[["cvc-no-more-rows"]],inputs:{cvcShowTag:"cvcShowTag"},decls:2,vars:3,consts:[["nzColor","warning",4,"ngIf"],["nzColor","warning"],["nz-icon","","nzType","exclamation-circle"]],template:function(V,A){1&V&&(e.YNc(0,w,4,0,"nz-tag",0),e.ALo(1,"ngrxPush")),2&V&&e.Q6J("ngIf",e.lcZ(1,1,A.showTag$))},dependencies:[a.O5,N.j,R.Ls,j.fM],encapsulation:2,changeDetection:0}),F})()},2384:(Et,be,c)=>{c.d(be,{h:()=>F});var t=c(5879),i=c(6814),_=c(5695),e=c(551);function a(I,V){1&I&&t._UZ(0,"i",7)}function N(I,V){1&I&&t._UZ(0,"i",8)}function R(I,V){1&I&&t._UZ(0,"i",9)}function j(I,V){1&I&&t._UZ(0,"i",10)}function w(I,V){1&I&&t._UZ(0,"i",10)}function M(I,V){if(1&I&&(t.TgZ(0,"nz-tag",1),t.ynx(1,2),t.YNc(2,a,1,0,"i",3),t.YNc(3,N,1,0,"i",4),t.YNc(4,R,1,0,"i",5),t.YNc(5,j,1,0,"i",6),t.YNc(6,w,1,0,"i",6),t.BQk(),t._uU(7),t.ALo(8,"titlecase"),t.qZA()),2&I){const A=t.oxw();t.Q6J("nzColor",A.tagStatus),t.xp6(1),t.Q6J("ngSwitch",A.tagStatus),t.xp6(1),t.Q6J("ngSwitchCase","success"),t.xp6(1),t.Q6J("ngSwitchCase","error"),t.xp6(1),t.Q6J("ngSwitchCase","warning"),t.xp6(1),t.Q6J("ngSwitchCase","processing"),t.xp6(1),t.Q6J("ngSwitchCase","default"),t.xp6(1),t.hij(" ",t.lcZ(8,8,A.status),"\n")}}let F=(()=>{class I{constructor(){this.statusColorMap={ACCEPTED:"success",REJECTED:"error",SUBMITTED:"warning",NEW:"processing",SUPERSEDED:"default",OPEN:"error",RESOLVED:"default"}}set status(A){this._status=A,A&&(this.tagStatus=this.statusColorMap[A])}get status(){return this._status}ngOnInit(){if(void 0===this.status)throw new Error("Must pass a valid EvidenceStatus or RevisionStatus to cvc-status-tag component")}}return I.\u0275fac=function(A){return new(A||I)},I.\u0275cmp=t.Xpm({type:I,selectors:[["cvc-status-tag"]],inputs:{status:"status"},decls:1,vars:1,consts:[[3,"nzColor",4,"ngIf"],[3,"nzColor"],[3,"ngSwitch"],["nz-icon","","nzType","check-circle",4,"ngSwitchCase"],["nz-icon","","nzType","close-circle",4,"ngSwitchCase"],["nz-icon","","nzType","exclamation-circle",4,"ngSwitchCase"],["nz-icon","",4,"ngSwitchCase"],["nz-icon","","nzType","check-circle"],["nz-icon","","nzType","close-circle"],["nz-icon","","nzType","exclamation-circle"],["nz-icon",""]],template:function(A,E){1&A&&t.YNc(0,M,9,10,"nz-tag",0),2&A&&t.Q6J("ngIf",E.tagStatus)},dependencies:[i.O5,i.RF,i.n9,_.j,e.Ls,i.rS],encapsulation:2}),I})()},2655:(Et,be,c)=>{c.d(be,{x:()=>a});var t=c(6814),i=c(5695),_=c(551),e=c(5879);let a=(()=>{class N{}return N.\u0275fac=function(j){return new(j||N)},N.\u0275mod=e.oAB({type:N}),N.\u0275inj=e.cJS({imports:[t.ez,i.X,_.PV]}),N})()},8184:(Et,be,c)=>{c.d(be,{O:()=>_});var t=c(5879);const i=["*"];let _=(()=>{class e{constructor(){}}return e.\u0275fac=function(N){return new(N||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["cvc-tag-group"]],ngContentSelectors:i,decls:1,vars:0,template:function(N,R){1&N&&(t.F$t(),t.Hsn(0))},styles:["[_nghost-%COMP%]    >*:first-child   nz-tag{border-top-right-radius:0;border-bottom-right-radius:0;margin-right:0}[_nghost-%COMP%]    >*:last-child   nz-tag{border-top-left-radius:0;border-bottom-left-radius:0;margin-left:-1px;border-left-color:#e9e9e9}"]}),e})()},3986:(Et,be,c)=>{c.d(be,{i:()=>_});var t=c(6814),i=c(5879);let _=(()=>{class e{}return e.\u0275fac=function(N){return new(N||e)},e.\u0275mod=i.oAB({type:e}),e.\u0275inj=i.cJS({imports:[t.ez]}),e})()},1887:(Et,be,c)=>{c.d(be,{$:()=>_});var t=c(5879);const i=["*"];let _=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(N){return new(N||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["cvc-tag-list"]],hostVars:4,hostBindings:function(N,R){2&N&&t.ekj("xs","xs"===R.size||!R.size)("sm","sm"===R.size)},inputs:{size:"size"},ngContentSelectors:i,decls:2,vars:0,consts:[[1,"tag-list"]],template:function(N,R){1&N&&(t.F$t(),t.TgZ(0,"div",0),t.Hsn(1),t.qZA())},styles:["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]   .tag-list[_ngcontent-%COMP%]    >*{display:inline-block}[_nghost-%COMP%]   .tag-list[_ngcontent-%COMP%]    >*:last-child{margin-right:-8px}.xs[_nghost-%COMP%]{margin-bottom:-4px}.xs[_nghost-%COMP%]   .tag-list[_ngcontent-%COMP%]    >*{margin-bottom:4px}.sm[_nghost-%COMP%]{margin-bottom:-8px}.sm[_nghost-%COMP%]   .tag-list[_ngcontent-%COMP%]    >*{margin-bottom:8px}"],changeDetection:0}),e})()},366:(Et,be,c)=>{c.d(be,{$:()=>_});var t=c(6814),i=c(5879);let _=(()=>{class e{}return e.\u0275fac=function(N){return new(N||e)},e.\u0275mod=i.oAB({type:e}),e.\u0275inj=i.cJS({imports:[t.ez]}),e})()},1813:(Et,be,c)=>{c.d(be,{p:()=>K});var t=c(5676),i=c(7398),_=c(2181),e=c(5879),a=c(313),N=c(6814),R=c(551),j=c(2962),w=c(8125),M=c(3317),F=c(1887),I=c(3369),V=c(8091);function A(L,B){if(1&L&&(e._UZ(0,"i",12),e._uU(1)),2&L){const S=e.oxw().ngIf;e.xp6(1),e.AsE(" ",S.displayType,":\xa0",S.citation," ")}}function E(L,B){if(1&L&&(e.TgZ(0,"cvc-link-tag",13),e._uU(1),e.qZA()),2&L){const S=e.oxw().ngIf;e.Q6J("href",S.sourceUrl)("tooltip","View on "+S.displayType),e.xp6(1),e.hij(" ",S.displayType+":"+S.citationId," ")}}function U(L,B){1&L&&e._UZ(0,"cvc-clinical-trial-tag",15),2&L&&e.Q6J("clinicalTrial",B.$implicit)("enablePopover",!1)}function Q(L,B){if(1&L&&(e.ynx(0),e.TgZ(1,"cvc-tag-list"),e.YNc(2,U,1,2,"cvc-clinical-trial-tag",14),e.qZA(),e.BQk()),2&L){const S=e.oxw().ngIf;e.xp6(2),e.Q6J("ngForOf",S.clinicalTrials)}}function ze(L,B){1&L&&e._uU(0," -- ")}function me(L,B){if(1&L&&(e.ynx(0),e.TgZ(1,"nz-card",2),e.YNc(2,A,2,2,"ng-template",null,3,e.W1O),e.YNc(4,E,2,3,"ng-template",null,4,e.W1O),e.TgZ(6,"nz-descriptions",5)(7,"nz-descriptions-item",6),e._uU(8),e.qZA(),e.TgZ(9,"nz-descriptions-item",7),e._uU(10),e.qZA(),e.TgZ(11,"nz-descriptions-item",8),e._uU(12),e.qZA(),e.TgZ(13,"nz-descriptions-item",9),e.YNc(14,Q,3,1,"ng-container",10),e.YNc(15,ze,1,0,"ng-template",null,11,e.W1O),e.qZA()()(),e.BQk()),2&L){const S=B.ngIf,P=e.MAs(3),b=e.MAs(5),ae=e.MAs(16);e.xp6(1),e.Q6J("nzTitle",P)("nzExtra",b),e.xp6(5),e.Q6J("nzColumn",2),e.xp6(2),e.hij(" ",S.title," "),e.xp6(2),e.hij(" ",S.fullJournalTitle," "),e.xp6(2),e.hij(" ",S.evidenceItemCount," "),e.xp6(2),e.Q6J("ngIf",S.clinicalTrials&&S.clinicalTrials.length>0)("ngIfElse",ae)}}let K=(()=>{class L{constructor(S){this.gql=S}ngOnInit(){if(null==this.sourceId)throw new Error("cvc-source-popover requires valid sourceId input.");this.source$=this.gql.watch({sourceId:this.sourceId}).valueChanges.pipe((0,i.U)(({data:S})=>S?.sourcePopover),(0,_.h)(t.ep))}}return L.\u0275fac=function(S){return new(S||L)(e.Y36(a.TiL))},L.\u0275cmp=e.Xpm({type:L,selectors:[["cvc-source-popover"]],inputs:{sourceId:"sourceId"},decls:3,vars:3,consts:[["id","popover-content"],[4,"ngIf"],["nzBordered","false","id","card-content",3,"nzTitle","nzExtra"],["cardTitle",""],["linkout",""],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","Title","nzSpan","2"],["nzTitle","Journal","nzSpan","2"],["nzTitle","Evidence","nzSpan","2"],["nzTitle","Clinical Trials:","nzSpan","2"],[4,"ngIf","ngIfElse"],["noTrials",""],["nz-icon","","nzType","civic-source","nzTheme","twotone","nzTwotoneColor","#F9BA45"],[3,"href","tooltip"],[3,"clinicalTrial","enablePopover",4,"ngFor","ngForOf"],[3,"clinicalTrial","enablePopover"]],template:function(S,P){1&S&&(e.TgZ(0,"div",0),e.YNc(1,me,17,8,"ng-container",1),e.ALo(2,"ngrxPush"),e.qZA()),2&S&&(e.xp6(1),e.Q6J("ngIf",e.lcZ(2,1,P.source$)))},dependencies:[N.sg,N.O5,R.Ls,j.bd,w.R7,w.uj,M.l,F.$,I.G,V.fM],styles:["[_nghost-%COMP%]{display:block;margin:-8px -12px}[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}[_nghost-%COMP%]     .ant-descriptions-view{border:none}[_nghost-%COMP%]     #entity-child-counts{border-top:1px solid #f0f0f0;padding:8px}[_nghost-%COMP%]     #entity-child-counts nz-space{width:100%}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child nz-tag{margin-right:0}.popover-text[_ngcontent-%COMP%]{width:100%;padding:8px;border-bottom:1px solid #f0f0f0}#popover-content[_ngcontent-%COMP%]{min-width:350px;max-width:500px;min-height:125px}"]}),L})()},6247:(Et,be,c)=>{c.d(be,{n:()=>w});var t=c(6814),i=c(2962),_=c(6067),e=c(8125),a=c(366),N=c(4605),R=c(551),j=c(5879);let w=(()=>{class M{}return M.\u0275fac=function(I){return new(I||M)},M.\u0275mod=j.oAB({type:M}),M.\u0275inj=j.cJS({imports:[t.ez,R.PV,i.vh,e.q6,_.X,a.$,N.N]}),M})()},4138:(Et,be,c)=>{c.d(be,{T:()=>P});var t=c(8130),i=c(5879),_=c(7023),e=c(6814),a=c(4190),N=c(551),R=c(7417),j=c(5695),w=c(1813),M=c(5869),F=c(2616);function I(b,ae){}function V(b,ae){if(1&b&&(i.ynx(0),i.TgZ(1,"a",4),i.YNc(2,I,0,0,"ng-template",5),i.qZA(),i.BQk()),2&b){const le=i.oxw(),G=i.MAs(2);i.xp6(1),i.Q6J("routerLink",le.source.link),i.xp6(1),i.Q6J("ngTemplateOutlet",G)}}function A(b,ae){}function E(b,ae){if(1&b&&i._UZ(0,"cvc-source-popover",8),2&b){const le=i.oxw(2);i.Q6J("sourceId",le.source.id)}}function U(b,ae){if(1&b){const le=i.EpF();i.TgZ(0,"nz-tag",6),i.NdJ("nzPopoverVisibleChange",function(ue){i.CHM(le);const pe=i.oxw();return i.KtG(pe.popoverVisible=ue)})("nzOnClose",function(ue){i.CHM(le);const pe=i.oxw();return i.KtG(pe.itemClosed(ue))}),i.YNc(1,A,0,0,"ng-template",5),i.qZA(),i.YNc(2,E,1,1,"ng-template",null,7,i.W1O)}if(2&b){const le=i.MAs(3),G=i.oxw(),ue=i.MAs(6);i.Q6J("nzPopoverMouseEnterDelay",G.onCloseClicked?0:.5)("nzPopoverContent",le)("nzPopoverTrigger",G.enablePopover?"hover":null)("nzPopoverVisible",G.popoverVisible)("nzMode",G.onCloseClicked?"closeable":"default"),i.xp6(1),i.Q6J("ngTemplateOutlet",ue)}}function Q(b,ae){}function ze(b,ae){if(1&b&&i.YNc(0,Q,0,0,"ng-template",5),2&b){i.oxw();const le=i.MAs(2);i.Q6J("ngTemplateOutlet",le)}}function me(b,ae){if(1&b&&(i.ynx(0),i._uU(1),i.ALo(2,"truncate"),i.BQk()),2&b){const le=i.oxw(3);i.xp6(1),i.hij(" ",i.xi3(2,1,le.displayName,50)," ")}}function K(b,ae){if(1&b&&(i.ynx(0),i._uU(1),i.BQk()),2&b){const le=i.oxw(3);i.xp6(1),i.hij(" ",le.displayName," ")}}function L(b,ae){if(1&b&&(i.ynx(0),i.YNc(1,me,3,4,"ng-container",11),i.YNc(2,K,2,1,"ng-container",11),i.BQk()),2&b){const le=i.oxw(2);i.xp6(1),i.Q6J("ngIf",le.truncateLongName),i.xp6(1),i.Q6J("ngIf",!le.truncateLongName)}}function B(b,ae){if(1&b&&i._uU(0),2&b){const le=i.oxw(2);i.hij(" SID:",le.source.id," ")}}function S(b,ae){if(1&b&&(i._UZ(0,"i",9),i.ALo(1,"entityColor"),i.YNc(2,L,3,2,"ng-container",0),i.YNc(3,B,1,1,"ng-template",null,10,i.W1O)),2&b){const le=i.MAs(4),G=i.oxw();i.Q6J("nzTwotoneColor",i.lcZ(1,3,"Source")),i.xp6(2),i.Q6J("ngIf","normal"===G.mode)("ngIfElse",le)}}let P=(()=>{class b extends t.a{set source(le){if(!le)throw new Error("source-tag source input requires SourceWithDisplayName or SourceWithCitation.");this._source=le,this.displayName="displayName"in this.source?this.source.displayName:this.sourceTypeDisplay.transform(this.source.sourceType)+": "+this.source.citation}get source(){return this._source}constructor(le){super(),this.sourceTypeDisplay=le,this.enablePopover=!0,this.linked=!0,this.mode="normal",this.truncateLongName=!1}idFunction(){return this.source.id}}return b.\u0275fac=function(le){return new(le||b)(i.Y36(_.l))},b.\u0275cmp=i.Xpm({type:b,selectors:[["cvc-source-tag"]],inputs:{source:"source",enablePopover:"enablePopover",linked:"linked",mode:"mode",truncateLongName:"truncateLongName"},features:[i.qOj],decls:7,vars:2,consts:[[4,"ngIf","ngIfElse"],["tag",""],["unlinked",""],["tagContent",""],[3,"routerLink"],[3,"ngTemplateOutlet"],["nz-popover","","nzPopoverPlacement","right",3,"nzPopoverMouseEnterDelay","nzPopoverContent","nzPopoverTrigger","nzPopoverVisible","nzMode","nzPopoverVisibleChange","nzOnClose"],["sourcePopover",""],[3,"sourceId"],["nz-icon","","nzTheme","twotone","nzType","civic-source",3,"nzTwotoneColor"],["concise",""],[4,"ngIf"]],template:function(le,G){if(1&le&&(i.YNc(0,V,3,2,"ng-container",0),i.YNc(1,U,4,6,"ng-template",null,1,i.W1O),i.YNc(3,ze,1,1,"ng-template",null,2,i.W1O),i.YNc(5,S,5,5,"ng-template",null,3,i.W1O)),2&le){const ue=i.MAs(4);i.Q6J("ngIf",G.linked)("ngIfElse",ue)}},dependencies:[e.O5,e.tP,a.rH,N.Ls,R.lU,j.j,w.p,M.W,F.a],styles:["[_nghost-%COMP%]{display:inline-block}"],changeDetection:0}),b})()},8641:(Et,be,c)=>{c.d(be,{s:()=>w});var t=c(6814),i=c(7417),_=c(4190),e=c(6247),a=c(5695),N=c(551),R=c(2524),j=c(5879);let w=(()=>{class M{}return M.\u0275fac=function(I){return new(I||M)},M.\u0275mod=j.oAB({type:M}),M.\u0275inj=j.cJS({imports:[t.ez,_.Bz,N.PV,i.$6,a.X,e.n,R.s]}),M})()},96:(Et,be,c)=>{c.d(be,{a:()=>P});var t=c(7398),i=c(2181),_=c(5676),e=c(5879),a=c(313),N=c(6814),R=c(2962),j=c(8125),w=c(551),M=c(2392),F=c(5695),I=c(6109),V=c(3317),A=c(8091),E=c(5869);function U(b,ae){if(1&b&&(e._UZ(0,"i",12),e._uU(1),e.ALo(2,"truncate")),2&b){const le=e.oxw().ngIf;e.xp6(1),e.hij(" ",e.xi3(2,1,le.name,50)," ")}}function Q(b,ae){if(1&b&&(e.TgZ(0,"cvc-link-tag",14),e._uU(1),e.qZA()),2&b){const le=e.oxw(2).ngIf;e.Q6J("href",le.therapyUrl),e.xp6(1),e.hij(" ",le.ncitId," ")}}function ze(b,ae){if(1&b&&e.YNc(0,Q,2,2,"cvc-link-tag",13),2&b){const le=e.oxw().ngIf,G=e.MAs(7);e.Q6J("ngIf",le.ncitId)("ngIfElse",G)}}function me(b,ae){1&b&&(e.TgZ(0,"span",15),e._uU(1,"No NCIt ID"),e.qZA())}function K(b,ae){if(1&b&&(e.TgZ(0,"nz-descriptions-item",16),e._uU(1),e.qZA()),2&b){const le=e.oxw().ngIf;e.xp6(1),e.hij(" ",le.name," ")}}function L(b,ae){if(1&b&&(e.TgZ(0,"nz-tag",19),e._uU(1),e.ALo(2,"truncate"),e.qZA()),2&b){const le=ae.$implicit;e.Q6J("nzTooltipTitle",le),e.xp6(1),e.Oqu(e.lcZ(2,2,le))}}function B(b,ae){if(1&b&&(e.TgZ(0,"nz-descriptions-item",17),e.YNc(1,L,3,4,"nz-tag",18),e.qZA()),2&b){const le=e.oxw().ngIf;e.xp6(1),e.Q6J("ngForOf",le.therapyAliases)}}function S(b,ae){if(1&b&&(e.ynx(0),e.TgZ(1,"nz-card",2),e.YNc(2,U,3,4,"ng-template",null,3,e.W1O),e.YNc(4,ze,1,2,"ng-template",null,4,e.W1O),e.YNc(6,me,2,0,"ng-template",null,5,e.W1O),e.TgZ(8,"nz-descriptions",6),e.YNc(9,K,2,1,"nz-descriptions-item",7),e.YNc(10,B,2,1,"nz-descriptions-item",8),e.TgZ(11,"nz-descriptions-item",9),e._uU(12),e.qZA(),e.TgZ(13,"nz-descriptions-item",10),e._uU(14),e.qZA(),e.TgZ(15,"nz-descriptions-item",11),e._uU(16),e.qZA()()(),e.BQk()),2&b){const le=ae.ngIf,G=e.MAs(3),ue=e.MAs(5);e.xp6(1),e.Q6J("nzTitle",G)("nzExtra",ue),e.xp6(7),e.Q6J("nzColumn",2),e.xp6(1),e.Q6J("ngIf",le.name.length>50),e.xp6(1),e.Q6J("ngIf",le.therapyAliases.length>0),e.xp6(2),e.hij(" ",le.assertionCount," "),e.xp6(2),e.hij(" ",le.evidenceItemCount," "),e.xp6(2),e.hij(" ",le.molecularProfileCount," ")}}let P=(()=>{class b{constructor(le){this.gql=le}ngOnInit(){if(null==this.therapyId)throw new Error("cvc-therapy-popover requires valid therapyId input.");this.therapy$=this.gql.watch({therapyId:this.therapyId}).valueChanges.pipe((0,t.U)(({data:le})=>le?.therapyPopover),(0,i.h)(_.ep))}}return b.\u0275fac=function(le){return new(le||b)(e.Y36(a.L8L))},b.\u0275cmp=e.Xpm({type:b,selectors:[["cvc-therapy-popover"]],inputs:{therapyId:"therapyId"},decls:3,vars:3,consts:[["id","popover-content"],[4,"ngIf"],["nzBordered","false","id","card-content",3,"nzTitle","nzExtra"],["cardTitle",""],["linkout",""],["noNcitId",""],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","Name","nzSpan","2",4,"ngIf"],["nzTitle","Aliases","nzSpan","2",4,"ngIf"],["nzTitle","Assertions","nzSpan","2"],["nzTitle","Evidence","nzSpan","2"],["nzTitle","Molecular Profiles","nzSpan","2"],["nz-icon","","nzType","civic-therapy","nzTheme","twotone","nzTwotoneColor","#AC3996"],["tooltip","View on NCI Thesaurus",3,"href",4,"ngIf","ngIfElse"],["tooltip","View on NCI Thesaurus",3,"href"],["nz-typography","","nzType","secondary"],["nzTitle","Name","nzSpan","2"],["nzTitle","Aliases","nzSpan","2"],["nz-tooltip","",3,"nzTooltipTitle",4,"ngFor","ngForOf"],["nz-tooltip","",3,"nzTooltipTitle"]],template:function(le,G){1&le&&(e.TgZ(0,"div",0),e.YNc(1,S,17,8,"ng-container",1),e.ALo(2,"ngrxPush"),e.qZA()),2&le&&(e.xp6(1),e.Q6J("ngIf",e.lcZ(2,1,G.therapy$)))},dependencies:[N.sg,N.O5,R.bd,j.R7,j.uj,w.Ls,M.ZU,F.j,I.SY,V.l,A.fM,E.W],styles:["[_nghost-%COMP%]{display:block;margin:-8px -12px}[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}[_nghost-%COMP%]     .ant-descriptions-view{border:none}[_nghost-%COMP%]     #entity-child-counts{border-top:1px solid #f0f0f0;padding:8px}[_nghost-%COMP%]     #entity-child-counts nz-space{width:100%}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child nz-tag{margin-right:0}.popover-text[_ngcontent-%COMP%]{width:100%;padding:8px;border-bottom:1px solid #f0f0f0}#popover-content[_ngcontent-%COMP%]{min-width:350px;max-width:500px;min-height:125px}"]}),b})()},1207:(Et,be,c)=>{c.d(be,{s:()=>I});var t=c(6814),i=c(4190),_=c(2962),e=c(8125),a=c(6067),N=c(551),R=c(2392),j=c(2524),w=c(5695),M=c(6109),F=c(5879);let I=(()=>{class V{}return V.\u0275fac=function(E){return new(E||V)},V.\u0275mod=F.oAB({type:V}),V.\u0275inj=F.cJS({imports:[t.ez,i.Bz,_.vh,e.q6,N.PV,R.ZJ,w.X,M.cg,a.X,j.s]}),V})()},4770:(Et,be,c)=>{c.d(be,{T:()=>K});var t=c(8130),i=c(5879),_=c(6814),e=c(4190),a=c(5695),N=c(7417),R=c(551),j=c(96),w=c(5869);function M(L,B){}function F(L,B){if(1&L&&(i.ynx(0),i.TgZ(1,"a",4),i.YNc(2,M,0,0,"ng-template",5),i.qZA(),i.BQk()),2&L){const S=i.oxw(),P=i.MAs(2);i.xp6(1),i.Q6J("routerLink",S.therapy.link),i.xp6(1),i.Q6J("ngTemplateOutlet",P)}}function I(L,B){}function V(L,B){if(1&L&&i._UZ(0,"cvc-therapy-popover",8),2&L){const S=i.oxw(2);i.Q6J("therapyId",S.therapy.id)}}function A(L,B){if(1&L){const S=i.EpF();i.TgZ(0,"nz-tag",6),i.NdJ("nzOnClose",function(b){i.CHM(S);const ae=i.oxw();return i.KtG(ae.itemClosed(b))}),i.YNc(1,I,0,0,"ng-template",5),i.qZA(),i.YNc(2,V,1,1,"ng-template",null,7,i.W1O)}if(2&L){const S=i.MAs(3),P=i.oxw(),b=i.MAs(6);i.Q6J("nzPopoverMouseEnterDelay",P.onCloseClicked?0:.5)("nzPopoverContent",S)("nzPopoverTrigger",P.enablePopover?"hover":null)("nzMode",P.onCloseClicked?"closeable":"default"),i.xp6(1),i.Q6J("ngTemplateOutlet",b)}}function E(L,B){}function U(L,B){if(1&L&&i.YNc(0,E,0,0,"ng-template",5),2&L){i.oxw();const S=i.MAs(2);i.Q6J("ngTemplateOutlet",S)}}function Q(L,B){if(1&L&&(i.ynx(0),i._uU(1),i.ALo(2,"truncate"),i.BQk()),2&L){const S=i.oxw(2);i.xp6(1),i.hij(" ",i.xi3(2,1,S.therapy.name,21)," ")}}function ze(L,B){if(1&L&&i._uU(0),2&L){const S=i.oxw(2);i.hij(" ",S.therapy.name," ")}}function me(L,B){if(1&L&&(i._UZ(0,"i",9),i.YNc(1,Q,3,4,"ng-container",0),i.YNc(2,ze,1,1,"ng-template",null,10,i.W1O)),2&L){const S=i.MAs(3),P=i.oxw();i.xp6(1),i.Q6J("ngIf",P.truncateLongName)("ngIfElse",S)}}let K=(()=>{class L extends t.a{constructor(){super(...arguments),this.enablePopover=!0,this.truncateLongName=!1}set therapy(S){if(!S)throw new Error("therapy-tag Input requires LinkableTherapy.");this._therapy=S}get therapy(){return this._therapy}idFunction(){return this.therapy.id}}return L.\u0275fac=function(){let B;return function(P){return(B||(B=i.n5z(L)))(P||L)}}(),L.\u0275cmp=i.Xpm({type:L,selectors:[["cvc-therapy-tag"]],inputs:{therapy:"therapy",enablePopover:"enablePopover",truncateLongName:"truncateLongName"},features:[i.qOj],decls:7,vars:2,consts:[[4,"ngIf","ngIfElse"],["tag",""],["unlinked",""],["tagContent",""],[3,"routerLink"],[3,"ngTemplateOutlet"],["nz-popover","","nzPopoverPlacement","right",3,"nzPopoverMouseEnterDelay","nzPopoverContent","nzPopoverTrigger","nzMode","nzOnClose"],["therapyPopover",""],[3,"therapyId"],["nz-icon","","nzType","civic-therapy","nzTheme","twotone","nzTwotoneColor","#AC3996"],["fullName",""]],template:function(S,P){if(1&S&&(i.YNc(0,F,3,2,"ng-container",0),i.YNc(1,A,4,5,"ng-template",null,1,i.W1O),i.YNc(3,U,1,1,"ng-template",null,2,i.W1O),i.YNc(5,me,4,2,"ng-template",null,3,i.W1O)),2&S){const b=i.MAs(4);i.Q6J("ngIf",P.linked)("ngIfElse",b)}},dependencies:[_.O5,_.tP,e.rH,a.j,N.lU,R.Ls,j.a,w.W],encapsulation:2,changeDetection:0}),L})()},6061:(Et,be,c)=>{c.d(be,{N:()=>w});var t=c(6814),i=c(4190),_=c(5695),e=c(7417),a=c(551),N=c(2524),R=c(1207),j=c(5879);let w=(()=>{class M{}return M.\u0275fac=function(I){return new(I||M)},M.\u0275mod=j.oAB({type:M}),M.\u0275inj=j.cJS({imports:[t.ez,i.Bz,_.X,e.$6,a.PV,N.s,R.s]}),M})()},8545:(Et,be,c)=>{c.d(be,{m:()=>le});var t=c(5676),i=c(7398),_=c(2181),e=c(5879),a=c(313),N=c(6814),R=c(4190),j=c(2962),w=c(95),M=c(8125),F=c(5695),I=c(551),V=c(2574),A=c(355),E=c(3317),U=c(8091),Q=c(2616);function ze(G,ue){if(1&G&&(e._UZ(0,"i",13),e.ALo(1,"entityColor"),e._uU(2)),2&G){const pe=e.oxw().ngIf;e.Q6J("nzTwotoneColor",e.lcZ(1,2,"Variant")),e.xp6(2),e.hij(" ",pe.name," ")}}function me(G,ue){if(1&G&&e._UZ(0,"cvc-feature-tag",14),2&G){const pe=e.oxw().ngIf;e.Q6J("enablePopover",!1)("feature",pe.feature)}}function K(G,ue){if(1&G&&(e.TgZ(0,"nz-tag"),e._uU(1),e.qZA()),2&G){const pe=ue.$implicit;e.xp6(1),e.Oqu(pe)}}function L(G,ue){if(1&G&&(e.TgZ(0,"nz-descriptions-item",15),e.YNc(1,K,2,1,"nz-tag",16),e.qZA()),2&G){const pe=e.oxw().ngIf;e.xp6(1),e.Q6J("ngForOf",pe.variantAliases)}}function B(G,ue){if(1&G&&(e.TgZ(0,"nz-descriptions-item",17)(1,"cvc-link-tag",18),e._uU(2),e.qZA()()),2&G){const pe=e.oxw().ngIf;e.xp6(1),e.MGl("href","https://reg.genome.network/allele/",pe.alleleRegistryId,".html"),e.xp6(1),e.hij(" ",pe.alleleRegistryId," ")}}function S(G,ue){if(1&G&&(e.TgZ(0,"a",19)(1,"nz-tag",20),e._UZ(2,"i",21),e._uU(3),e.qZA()()),2&G){const pe=e.oxw().ngIf;e.MGl("routerLink","/variants/",pe.id,"/flags"),e.xp6(3),e.hij(" Flags (",pe.flags.totalCount,") ")}}function P(G,ue){if(1&G&&(e.TgZ(0,"a",19)(1,"nz-tag",22),e._UZ(2,"i",23),e._uU(3),e.qZA()()),2&G){const pe=e.oxw().ngIf;e.MGl("routerLink","/variants/",pe.id,"/revisions"),e.xp6(3),e.hij(" Revisions (",pe.revisions.totalCount,") ")}}function b(G,ue){if(1&G&&(e.TgZ(0,"a",19)(1,"nz-tag",24),e._UZ(2,"i",25),e._uU(3),e.qZA()()),2&G){const pe=e.oxw().ngIf;e.MGl("routerLink","/variants/",pe.id,"/comments"),e.xp6(3),e.hij(" Comments (",pe.comments.totalCount,") ")}}function ae(G,ue){if(1&G&&(e.ynx(0),e.TgZ(1,"nz-card",2),e.YNc(2,ze,3,4,"ng-template",null,3,e.W1O),e.YNc(4,me,1,2,"ng-template",null,4,e.W1O),e.TgZ(6,"nz-descriptions",5),e.YNc(7,L,2,1,"nz-descriptions-item",6),e.YNc(8,B,3,2,"nz-descriptions-item",7),e.TgZ(9,"nz-descriptions-item",8),e._uU(10),e.qZA()(),e.TgZ(11,"nz-row",9)(12,"nz-col",10)(13,"nz-space",11),e.YNc(14,S,4,2,"a",12),e.YNc(15,P,4,2,"a",12),e.YNc(16,b,4,2,"a",12),e.qZA()()()(),e.BQk()),2&G){const pe=ue.ngIf,fe=e.MAs(3),Se=e.MAs(5);e.xp6(1),e.Q6J("nzTitle",fe)("nzExtra",Se),e.xp6(5),e.Q6J("nzColumn",2),e.xp6(1),e.Q6J("ngIf",pe.variantAliases.length>0),e.xp6(1),e.Q6J("ngIf",pe.alleleRegistryId&&"unregistered"!=pe.alleleRegistryId),e.xp6(2),e.hij(" ",pe.molecularProfiles.totalCount," ")}}let le=(()=>{class G{constructor(pe){this.gql=pe}ngOnInit(){if(void 0===this.variantId)throw new Error("Must pass a variant ID into the variant popover component.");this.variant$=this.gql.watch({variantId:this.variantId}).valueChanges.pipe((0,i.U)(({data:pe})=>pe?.variant),(0,_.h)(t.ep))}}return G.\u0275fac=function(pe){return new(pe||G)(e.Y36(a.ZYZ))},G.\u0275cmp=e.Xpm({type:G,selectors:[["cvc-variant-popover"]],inputs:{variantId:"variantId"},decls:3,vars:3,consts:[["id","popover-content"],[4,"ngIf"],["nzBordered","false","id","card-content",3,"nzTitle","nzExtra"],["cardTitle",""],["feature",""],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","Aliases","nzSpan","2",4,"ngIf"],["nzTitle","Allele Registry ID","nzSpan","2",4,"ngIf"],["nzTitle","Molecular Profiles","nzSpan","2"],["id","entity-child-counts"],["nzSpan","24"],["nzSize","small"],[3,"routerLink",4,"nzSpaceItem"],["nz-icon","","nzTheme","twotone","nzType","civic-variant",3,"nzTwotoneColor"],[3,"enablePopover","feature"],["nzTitle","Aliases","nzSpan","2"],[4,"ngFor","ngForOf"],["nzTitle","Allele Registry ID","nzSpan","2"],["tooltip","View on the ClinGen Allele Registry",3,"href"],[3,"routerLink"],["nzColor","red"],["nz-icon","","nzType","civic-flag"],["nzColor","orange"],["nz-icon","","nzType","civic-revision"],["nzColor","blue"],["nz-icon","","nzType","civic-comment"]],template:function(pe,fe){1&pe&&(e.TgZ(0,"div",0),e.YNc(1,ae,17,6,"ng-container",1),e.ALo(2,"ngrxPush"),e.qZA()),2&pe&&(e.xp6(1),e.Q6J("ngIf",e.lcZ(2,1,fe.variant$)))},dependencies:[N.sg,N.O5,R.rH,j.bd,w.t3,w.SK,M.R7,M.uj,F.j,I.Ls,V.NU,V.$1,A.K,E.l,U.fM,Q.a],styles:["[_nghost-%COMP%]{display:block;margin:-8px -12px}[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}[_nghost-%COMP%]     .ant-descriptions-view{border:none}[_nghost-%COMP%]     #entity-child-counts{border-top:1px solid #f0f0f0;padding:8px}[_nghost-%COMP%]     #entity-child-counts nz-space{width:100%}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child nz-tag{margin-right:0}.popover-text[_ngcontent-%COMP%]{width:100%;padding:8px;border-bottom:1px solid #f0f0f0}#popover-content[_ngcontent-%COMP%]{min-width:350px;max-width:500px;min-height:125px}"]}),G})()},6446:(Et,be,c)=>{c.d(be,{k:()=>V});var t=c(6814),i=c(4190),_=c(2962),e=c(95),a=c(8125),N=c(5695),R=c(551),j=c(2574),w=c(6067),M=c(2524),F=c(2647),I=c(5879);let V=(()=>{class A{}return A.\u0275fac=function(U){return new(U||A)},A.\u0275mod=I.oAB({type:A}),A.\u0275inj=I.cJS({imports:[t.ez,i.Bz,_.vh,e.Jb,a.q6,N.X,R.PV,j.zf,M.s,F.k,w.X]}),A})()},9408:(Et,be,c)=>{c.d(be,{I:()=>P});var t=c(8130),i=c(2023),_=c(5879),e=c(6814),a=c(4190),N=c(5695),R=c(7417),j=c(551),w=c(8545),M=c(3103),F=c(5869);function I(b,ae){}function V(b,ae){if(1&b&&(_.ynx(0),_.TgZ(1,"a",4),_.YNc(2,I,0,0,"ng-template",5),_.qZA(),_.BQk()),2&b){const le=_.oxw(),G=_.MAs(2);_.xp6(1),_.Q6J("routerLink",le.variant.link),_.xp6(1),_.Q6J("ngTemplateOutlet",G)}}function A(b,ae){}function E(b,ae){if(1&b&&_._UZ(0,"cvc-variant-popover",9),2&b){const le=_.oxw(3);_.Q6J("variantId",le.variant.id)}}function U(b,ae){if(1&b&&_.YNc(0,E,1,1,"cvc-variant-popover",8),2&b){const le=_.oxw(2);_.Q6J("ngIf",le.enablePopover)}}const Q=function(b){return{deprecated:b}};function ze(b,ae){if(1&b){const le=_.EpF();_.TgZ(0,"nz-tag",6),_.NdJ("nzOnClose",function(ue){_.CHM(le);const pe=_.oxw();return _.KtG(pe.itemClosed(ue))}),_.YNc(1,A,0,0,"ng-template",5),_.qZA(),_.YNc(2,U,1,1,"ng-template",null,7,_.W1O)}if(2&b){const le=_.MAs(3),G=_.oxw(),ue=_.MAs(6);_.Q6J("ngClass",_.VKq(6,Q,G.variant.deprecated))("nzPopoverMouseEnterDelay",G.onCloseClicked?0:.5)("nzPopoverContent",le)("nzPopoverTrigger",G.enablePopover?"hover":null)("nzMode",G.onCloseClicked?"closeable":"default"),_.xp6(1),_.Q6J("ngTemplateOutlet",ue)}}function me(b,ae){}function K(b,ae){if(1&b&&_.YNc(0,me,0,0,"ng-template",5),2&b){_.oxw();const le=_.MAs(2);_.Q6J("ngTemplateOutlet",le)}}function L(b,ae){if(1&b&&(_.ynx(0),_._uU(1),_.ALo(2,"truncate"),_.BQk()),2&b){const le=_.oxw(2);_.xp6(1),_.hij(" ",_.xi3(2,1,le.variant.name,20)," ")}}function B(b,ae){if(1&b&&_._uU(0),2&b){const le=_.oxw(2);_.hij(" ",le.variant.name," ")}}function S(b,ae){if(1&b&&(_.TgZ(0,"cvc-icon-badges",10),_._UZ(1,"i",11),_.qZA(),_.YNc(2,L,3,4,"ng-container",0),_.YNc(3,B,1,1,"ng-template",null,12,_.W1O)),2&b){const le=_.MAs(4),G=_.oxw();_.Q6J("flagged",G.variant.flagged)("entityColor",G.iconColor),_.xp6(1),_.Q6J("nzTwotoneColor",G.iconColor),_.xp6(1),_.Q6J("ngIf",G.truncateLongName)("ngIfElse",le)}}let P=(()=>{class b extends t.a{constructor(){super(),this.enablePopover=!0,this.truncateLongName=!1,this.iconColor=(0,i.f)("Variant")}idFunction(){return this.variant.id}ngOnInit(){if(super.ngOnInit(),void 0===this.variant)throw new Error("cvc-variant-tag requires LinkableVariant input, none supplied.")}}return b.\u0275fac=function(le){return new(le||b)},b.\u0275cmp=_.Xpm({type:b,selectors:[["cvc-variant-tag"]],inputs:{variant:"variant",enablePopover:"enablePopover",truncateLongName:"truncateLongName"},features:[_.qOj],decls:7,vars:2,consts:[[4,"ngIf","ngIfElse"],["tag",""],["unlinked",""],["tagContent",""],[3,"routerLink"],[3,"ngTemplateOutlet"],["nz-popover","",3,"ngClass","nzPopoverMouseEnterDelay","nzPopoverContent","nzPopoverTrigger","nzMode","nzOnClose"],["popoverContent",""],[3,"variantId",4,"ngIf"],[3,"variantId"],[3,"flagged","entityColor"],["nz-icon","","nzType","civic-variant","nzTheme","twotone",3,"nzTwotoneColor"],["fullName",""]],template:function(le,G){if(1&le&&(_.YNc(0,V,3,2,"ng-container",0),_.YNc(1,ze,4,8,"ng-template",null,1,_.W1O),_.YNc(3,K,1,1,"ng-template",null,2,_.W1O),_.YNc(5,S,5,5,"ng-template",null,3,_.W1O)),2&le){const ue=_.MAs(4);_.Q6J("ngIf",G.linked)("ngIfElse",ue)}},dependencies:[e.mk,e.O5,e.tP,a.rH,N.j,R.lU,j.Ls,w.m,M.b,F.W],styles:["[_nghost-%COMP%]     nz-tag.rejected, [_nghost-%COMP%]     nz-tag.submitted, [_nghost-%COMP%]     nz-tag.accepted, [_nghost-%COMP%]     nz-tag.deprecated{border-right-width:2px}[_nghost-%COMP%]     nz-tag.rejected, [_nghost-%COMP%]     nz-tag.deprecated{border-color:#e6e6e6;background-color:#fff;color:#999999d9}[_nghost-%COMP%]     nz-tag.submitted{border-color:#ffe58f}[_nghost-%COMP%]     nz-tag.accepted{border-color:#b7eb8f}[_nghost-%COMP%]{display:inline-block}"],changeDetection:0}),b})()},7528:(Et,be,c)=>{c.d(be,{Q:()=>M});var t=c(6814),i=c(4190),_=c(5695),e=c(551),a=c(7417),N=c(6446),R=c(2524),j=c(3146),w=c(5879);let M=(()=>{class F{}return F.\u0275fac=function(V){return new(V||F)},F.\u0275mod=w.oAB({type:F}),F.\u0275inj=w.cJS({imports:[t.ez,i.Bz,_.X,a.$6,e.PV,R.s,N.k,j.C]}),F})()},3702:(Et,be,c)=>{c.d(be,{t:()=>i});var t=c(5879);let i=(()=>{class _{transform(a,N){return a?"verbose"==N?"TIER_I_LEVEL_A"===a?"Tier I - Level A":"TIER_I_LEVEL_B"===a?"Tier I - Level B":"TIER_II_LEVEL_C"===a?"Tier II - Level C":"TIER_II_LEVEL_D"===a?"Tier II - Level D":"TIER_III"===a?"Tier III":"TIER_IV"===a?"Tier IV":"Not Applicable":a.toUpperCase().replace("TIER","").replace("LEVEL","").replace(/ /g,"").replace(/_/g,""):""}}return _.\u0275fac=function(a){return new(a||_)},_.\u0275pipe=t.Yjl({name:"formatAmp",type:_,pure:!0}),_})()},2616:(Et,be,c)=>{c.d(be,{a:()=>_});var t=c(2023),i=c(5879);let _=(()=>{class e{transform(N){return(0,t.f)(N)}}return e.\u0275fac=function(N){return new(N||e)},e.\u0275pipe=i.Yjl({name:"entityColor",type:e,pure:!0}),e})()},6967:(Et,be,c)=>{c.d(be,{Do:()=>N});var t=c(313),i=c(2),_=c(5879);const e=new Map([[t.Sx0.A,"Validated association"],[t.Sx0.B,"Clinical evidence"],[t.Sx0.C,"Case study"],[t.Sx0.D,"Preclinical evidence"],[t.Sx0.E,"Inferential association"]]),a=new Map([[1,"One Star"],[2,"Two Stars"],[3,"Three Stars"],[4,"Four Stars"],[5,"Five Stars"]]);let N=(()=>{class R{transform(w,M="display-string"){return null==w?"":"short-string"===M&&1===w.toString().length?"string"==typeof w?w:w.toString():"icon-name"===M?"number"==typeof w?`civic-rating${w}`:1===w.length?`civic-level${w.toLowerCase()}`:`civic-${w.replace(/_/g,"").toLowerCase()}`:"number"==typeof w?a.get(w)||w.toString():1===w.length?e.get(w)||w:(0,i.E)(w)}}return R.\u0275fac=function(w){return new(w||R)},R.\u0275pipe=_.Yjl({name:"evidenceEnumDisplay",type:R,pure:!0}),R})()},8004:(Et,be,c)=>{c.d(be,{v:()=>N});var t=c(313);const i={evidenceType:{[t.kqt.Diagnostic]:"Evidence pertains to a variant's impact on patient diagnosis (cancer subtype)",[t.kqt.Functional]:"Evidence pertains to a variant that alters biological function from the reference state",[t.kqt.Oncogenic]:"Evidence pertains to a somatic variant's involvement in tumor pathogenesis as described by the Hallmarks of Cancer",[t.kqt.Predictive]:"Evidence pertains to a variant's effect on therapeutic response",[t.kqt.Predisposing]:"Evidence pertains to a germline variant's role in conferring susceptibility to disease (including pathogenicity evaluations)",[t.kqt.Prognostic]:"Evidence pertains to a variant's impact on disease progression, severity, or patient survival"},assertionType:{[t.uBv.Diagnostic]:"Assertion pertains to a variant's impact on patient diagnosis (cancer subtype)",[t.uBv.Predictive]:"Assertion pertains to a variant's effect on therapeutic response",[t.uBv.Predisposing]:"Assertion pertains to a germline variant's role in conferring susceptibility to disease (including pathogenicity evaluations)",[t.uBv.Prognostic]:"Assertion pertains to a variant's impact on disease progression, severity, or patient survival",[t.uBv.Oncogenic]:"Assertion pertains to a somatic variant's role in driving tumor formation, growth, and other processes related to the Hallmarks of Cancer"},variantOrigin:{[t.huM.Somatic]:"Variant is a mutation, found only in tumor cells, having arisen in a specific tissue (non-germ cell), and is not expected to be inherited or passed to offspring",[t.huM.RareGermline]:"Variant is found in every cell (not restricted to tumor/diseased cells) and is thought to exist in less than 1% of the population relevant to this evidence item",[t.huM.CommonGermline]:"Variant is found in every cell (not restricted to tumor/diseased cells) and is thought to exist in at least 1% of the population relevant to this evidence item",[t.huM.Unknown]:"The variant origin is uncertain based on the available evidence",[t.huM.Na]:"The variant type (e.g., expression) is not compatible (or easily classified) with the CIViC concept of variant origin",[t.huM.Combined]:"Variants in the Molecular Profile span multiple Origin types."},evidenceLevel:{[t.Sx0.A]:"Proven/consensus association in human medicine",[t.Sx0.B]:"Clinical trial or other primary patient data supports association",[t.Sx0.C]:"Individual case reports from clinical journals",[t.Sx0.D]:"In vivo or in vitro models support association",[t.Sx0.E]:"Indirect evidence"},evidenceLevelBrief:{[t.Sx0.A]:"Validated association",[t.Sx0.B]:"Clinical evidence",[t.Sx0.C]:"Case Study",[t.Sx0.D]:"Preclinical evidence",[t.Sx0.E]:"Inferential association"},therapyInteractionType:{[t.wkr.Combination]:"The therapies listed were used as part of a combination therapy approach",[t.wkr.Sequential]:"The therapies listed were used at separate timepoints in the same treatment plan",[t.wkr.Substitutes]:"The therapies listed are often considered to be of the same family, or behave similarly in a treatment setting"},evidenceRating:{1:"Poor - Claim is not supported well by experimental evidence. Results are not reproducible, or have very small sample size. No follow-up is done to validate novel claims",2:"Adequate - Evidence is not well supported by experimental data, and little follow-up data is available. Experiments may lack proper controls, have small sample size, or are not statistically convincing",3:"Average - Evidence is convincing, but not supported by a breadth of experiments. May be smaller scale projects, or novel results without many follow-up experiments. Discrepancies from expected results are explained and not concerning",4:"Strong - Well supported evidence. Experiments are well controlled, and results are convincing. Any discrepancies from expected results are well-explained and not concerning",5:"Excellent - Solid, well supported evidence from a lab or journal with respected academic standing. Experiments are well controlled, and results are clean and reproducible across multiple replicates. Evidence confirmed using separate methods"}},_={significance:{PREDICTIVE:{ADVERSE_RESPONSE:{EvidenceItem:"Associated with an adverse response to theraputic treatment",Assertion:"Associated with an adverse response to theraputic treatment"},REDUCED_SENSITIVITY:{EvidenceItem:"Response to treatment is lower than seen in other treatment contexts",Assertion:"Response to treatment is lower than seen in other treatment contexts"},RESISTANCE:{EvidenceItem:"Associated with clinical or preclinical resistance to treatment",Assertion:"Associated with clinical or preclinical resistance to treatment"},SENSITIVITYRESPONSE:{EvidenceItem:"Associated with clinical or preclinical response to treatment",Assertion:"Associated with a clinical or preclinical response to treatment"},NA:{EvidenceItem:"Clinical Significance is not applicable",Assertion:"Clinical Significance is not applicable"}},DIAGNOSTIC:{POSITIVE:{EvidenceItem:"Associated with diagnosis of disease or subtype",Assertion:"Associated with diagnosis of disease or subtype"},NEGATIVE:{EvidenceItem:"Associated with lack of disease or subtype",Assertion:"Associated with lack of disease or subtype"}},PROGNOSTIC:{BETTER_OUTCOME:{EvidenceItem:"Demonstrates better than expected clinical outcome",Assertion:"Demonstrates better than expected clinical outcome"},POOR_OUTCOME:{EvidenceItem:"Demonstrates worse than expected clinical outcome",Assertion:"Demonstrates worse than expected clinical outcome"},Na:{EvidenceItem:"Clinical Significance is not applicable",Assertion:"Clinical Significance is not applicable"}},PREDISPOSING:{PATHOGENIC:{Assertion:"Very strong evidence the variant is pathogenic"},LIKELY_PATHOGENIC:{Assertion:"Strong evidence (>90% certainty) the variant is pathogenic"},BENIGN:{Assertion:"Very strong evidence the variant is benign"},LIKELY_BENIGN:{Assertion:"Not expected to have a major effect on disease"},UNCERTAIN_SIGNIFICANCE:{Assertion:"Does not meet the ACMG/AMP criteria for pathogenic/benign, or the evidence is conflicting"},Na:{EvidenceItem:"Clinical Significance is not applicable"},PREDISPOSITION:{EvidenceItem:"Germline variant has predisposing potential for cancer, and may meet ACMG/AMP criteria supporting pathogenic or benign classification."},PROTECTIVENESS:{EvidenceItem:"Germline variant has properties that protect individuals from acquiring cancer."}},ONCOGENIC:{ONCOGENICITY:{EvidenceItem:"Somatic variant has oncogenic potential for driving cancer, and may meet ClinGen/CGC/VICC criteria supporting pathogenic or benign classification."},PROTECTIVENESS:{EvidenceItem:"Somatic variant has a protective role and minimizes co-occuring driver variants, tumor malignancy, or other oncogenic tumor properties."},ONCOGENIC:{Assertion:"Very strong evidence the variant is oncogenic."},LIKELY_ONCOGENIC:{Assertion:"Strong evidence the variant is oncogenic."},BENIGN:{Assertion:"Very strong evidence the variant does not have oncogenic properties."},LIKELY_BENIGN:{Assertion:"Strong evidence the variant does not have oncogenic properties."},UNCERTAIN_SIGNIFICANCE:{Assertion:"Does not meet guideline criteria for oncogenic/benign, or the evidence is conflicting."}}},evidenceDirection:{PREDICTIVE:{SUPPORTS:{EvidenceItem:"The experiment or study supports this variant's response to a therapy"},DOES_NOT_SUPPORT:{EvidenceItem:"The experiment or study does not support, or was inconclusive of an interaction between this variant and a therapy"}},DIAGNOSTIC:{SUPPORTS:{EvidenceItem:"The experiment or study supports this variant's impact on the diagnosis of disease or subtype"},DOES_NOT_SUPPORT:{EvidenceItem:"The experiment or study does not support this variant's impact on diagnosis of disease or subtype"}},PROGNOSTIC:{SUPPORTS:{EvidenceItem:"The experiment or study supports this variant's impact on prognostic outcome"},DOES_NOT_SUPPORT:{EvidenceItem:"The experiment or study does not support a prognostic association between variant and outcome"}},PREDISPOSING:{Na:{EvidenceItem:"Evidence Direction is not applicable"},SUPPORTS:{EvidenceItem:"The evidence supports a pathogenic or a protective role for a germline variant in cancer."},DOES_NOT_SUPPORT:{EvidenceItem:"The evidence supports a benign (if Clinical Significance is Predisposition) or lack or protective (if Clinical Significance is Protectiveness) role for a germline variant in cancer."}},FUNCTIONAL:{SUPPORTS:{EvidenceItem:"The experiment or study supports this variant causing alteration or non-alteration of the gene product function"},DOES_NOT_SUPPORT:{EvidenceItem:"The experiment or study does not support this variant causing alteration or non-alteration of the gene product function"}},ONCOGENIC:{NA:{EvidenceItem:"Evidence Direction is not applicable for Oncogenic Evidence Type"},SUPPORTS:{EvidenceItem:"The evidence supports an oncogenic or protective role for a somatic variant"},DOES_NOT_SUPPORT:{EvidenceItem:"The evidence does not support an oncogenic or protective role for a somatic variant"}}},assertionDirection:{PREDICTIVE:{SUPPORTS:{Assertion:"The Assertion and associated Evidence Items support this variant's response to a therapy"},DOES_NOT_SUPPORT:{Assertion:"The Assertion and associated evidence does not support, or was inconclusive of an interaction between this variant and a therapy"}},DIAGNOSTIC:{SUPPORTS:{Assertion:"The Assertion and associated Evidence Items support this variant's impact on the diagnosis of disease or subtype"},DOES_NOT_SUPPORT:{Assertion:"The Assertion and associated evidence does not support this variant's impact on diagnosis of disease or subtype"}},PROGNOSTIC:{SUPPORTS:{Assertion:"The Assertion and associated Evidence Items support this variant's impact on prognostic outcome"},DOES_NOT_SUPPORT:{Assertion:"The Assertion and associated evidence does not support a prognostic association between variant and outcome"}},PREDISPOSING:{SUPPORTS:{Assertion:"The Assertion and associated Evidence Items support a variant's impact on predisposing outcome"}},FUNCTIONAL:{SUPPORTS:{Assertion:"The Assertion and associated Evidence Items support this variant causing alteration or non-alteration of the gene product function"},DOES_NOT_SUPPORT:{Assertion:"The Assertion and associated evidence does not support this variant causing alteration or non-alteration of the gene product function"}},ONCOGENIC:{SUPPORTS:{Assertion:"The Assertion and associated Evidence Items support a variant's oncogenic, benign, or uncertain significance"}}}};var a=c(5879);let N=(()=>{class R{transform(w,M,F=void 0,I=void 0){return M&&w?function e(R,j,w,M){let F;return F=w&&M?_[R][w][j][M]:i[R][j],F||""}(M,w,F,I):""}}return R.\u0275fac=function(w){return new(w||R)},R.\u0275pipe=a.Yjl({name:"enumTooltip",type:R,pure:!0}),R})()},7334:(Et,be,c)=>{c.d(be,{A:()=>_});var t=c(5879),i=c(6593);let _=(()=>{class e{constructor(N){this.sanitizer=N}transform(N,R){if(!R||""==R)return N;const j=new RegExp(R,"gi"),w=N.match(j);if(!w)return N;let M=N.replace(j,`<span class='typeahead-match'>${w[0]}</span>`);return this.sanitizer.bypassSecurityTrustHtml(M)}}return e.\u0275fac=function(N){return new(N||e)(t.Y36(i.H7,16))},e.\u0275pipe=t.Yjl({name:"highlightTypeahead",type:e,pure:!0}),e})()},2524:(Et,be,c)=>{c.d(be,{s:()=>e});var t=c(6814),i=c(7023),_=c(5879);let e=(()=>{class a{}return a.\u0275fac=function(R){return new(R||a)},a.\u0275mod=_.oAB({type:a}),a.\u0275inj=_.cJS({providers:[i.l],imports:[t.ez]}),a})()},7023:(Et,be,c)=>{c.d(be,{l:()=>_});var t=c(2666),i=c(5879);let _=(()=>{class e{transform(N){return N?(0,t.c)(N):""}}return e.\u0275fac=function(N){return new(N||e)},e.\u0275pipe=i.Yjl({name:"sourceTypeDisplay",type:e,pure:!0}),e})()},5869:(Et,be,c)=>{c.d(be,{W:()=>i});var t=c(5879);let i=(()=>{class _{constructor(){}transform(a,N=25){if(a.length>N){let j=a.slice(0,N);var R=j.lastIndexOf(" ");return j.slice(0,R)+"\u2026"}return a}}return _.\u0275fac=function(a){return new(a||_)},_.\u0275pipe=t.Yjl({name:"truncate",type:_,pure:!0}),_})()},1201:(Et,be,c)=>{c.d(be,{Z:()=>i});var t=c(5879);let i=(()=>{class _{transform(a){return a?`civic-${a.replace(/_/g,"").toLowerCase()}`:""}}return _.\u0275fac=function(a){return new(a||_)},_.\u0275pipe=t.Yjl({name:"typenameToIcon",type:_,pure:!0}),_})()},7473:(Et,be,c)=>{c.d(be,{Y:()=>_});var t=c(5619),i=c(5879);let _=(()=>{class e{constructor(){this.networkError$=new t.X(void 0)}clearErrors(){this.networkError$.next(void 0)}}return e.\u0275fac=function(N){return new(N||e)},e.\u0275prov=i.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},951:(Et,be,c)=>{c.d(be,{a:()=>F});var M,t=c(655),i=c(313),_=c(1791),e=c(7398),a=c(7921),N=c(7081),R=c(4223),j=c(5879),w=c(9862);let F=((M=class{constructor(V,A){function E(L){return!(!L||L.role!==i.i44.Admin)}function U(L){return!(!L||L.role!==i.i44.Editor&&L.role!==i.i44.Admin)}function Q(L){return!(!L||L.role!==i.i44.Curator)}function ze(L){return!(!L||L.role!==i.i44.Curator&&L.role!==i.i44.Editor&&L.role!==i.i44.Admin)}function me(L){return!(!L||L.role!==i.i44.Editor&&L.role!==i.i44.Admin||!L.mostRecentConflictOfInterestStatement||L.mostRecentConflictOfInterestStatement?.coiStatus!=i.Mgx.Conflict&&L.mostRecentConflictOfInterestStatement?.coiStatus!=i.Mgx.Valid)}function K(L){if(L.mostRecentOrganizationId)return L.organizations.find(B=>B.id===L.mostRecentOrganizationId)}this.viewerBaseGQL=V,this.http=A,this.initialViewer={mostRecentOrg:void 0,signedIn:!1,isAdmin:!1,isEditor:!1,isCurator:!1,canCurate:!1,canModerate:!1,invalidCoi:!0},this.queryRef=this.viewerBaseGQL.watch(void 0,{notifyOnNetworkStatusChange:!1}),this.viewer$=this.queryRef.valueChanges.pipe((0,R.j)("data","viewer"),(0,e.U)(L=>({...L,signedIn:null!=L,signedOut:null==L,canCurate:ze(L),canModerate:me(L),isAdmin:E(L),isEditor:U(L),isCurator:Q(L),organizations:null==L?[]:L.organizations,mostRecentOrg:null==L?void 0:K(L),invalidCoi:U(L)&&(!L.mostRecentConflictOfInterestStatement||L.mostRecentConflictOfInterestStatement.coiStatus===i.Mgx.Expired||L.mostRecentConflictOfInterestStatement.coiStatus===i.Mgx.Missing)})),(0,a.O)(this.initialViewer),(0,N.d)(1)),this.signedIn$=this.viewer$.pipe((0,e.U)(L=>L.signedIn)),this.signedOut$=this.viewer$.pipe((0,e.U)(L=>L.signedOut)),this.isAdmin$=this.viewer$.pipe((0,e.U)(L=>E(L))),this.isEditor$=this.viewer$.pipe((0,e.U)(L=>U(L))),this.isCurator$=this.viewer$.pipe((0,e.U)(L=>Q(L))),this.canCurate$=this.viewer$.pipe((0,e.U)(L=>ze(L))),this.canModerate$=this.viewer$.pipe((0,e.U)(L=>me(L)))}signOut(){this.http.get("/api/sign_out").pipe((0,_.t)(this)).subscribe(()=>this.queryRef.refetch())}refetch(){this.queryRef.refetch()}}).\u0275fac=function(V){return new(V||M)(j.LFG(i.Tt7),j.LFG(w.eN))},M.\u0275prov=j.Yz7({token:M,factory:M.\u0275fac,providedIn:"root"}),M);F=(0,t.gn)([(0,_.c)()],F)},8130:(Et,be,c)=>{c.d(be,{a:()=>i});var t=c(5879);let i=(()=>{class _{constructor(){this.linked=!0,this.popoverVisible=!1}ngOnInit(){this.onCloseClicked&&(this.linked=!1)}itemClosed(a){this.popoverVisible=!1,this.onCloseClicked&&this.onCloseClicked(this.idFunction())}}return _.\u0275fac=function(a){return new(a||_)},_.\u0275cmp=t.Xpm({type:_,selectors:[["ng-component"]],inputs:{onCloseClicked:"onCloseClicked",linked:"linked"},decls:0,vars:0,template:function(a,N){},encapsulation:2}),_})()},2:(Et,be,c)=>{function t(i){if("number"==typeof i||"boolean"==typeof i)return i;let _;if("NA"===i)_=["Not Applicable"];else if("SENSITIVITYRESPONSE"===i)_=["Sensitivity","/","Response"];else{_=i.toLowerCase().replace(/_/g," ").split(" ");for(var e=0;e<_.length;e++)_[e]=_[e].charAt(0).toUpperCase()+_[e].slice(1)}return _.join(" ")}c.d(be,{E:()=>t})},2666:(Et,be,c)=>{function t(i){switch(i){case"ASCO":return"ASCO";case"PUBMED":return"PubMed";case"ASH":return"ASH";default:return i}}c.d(be,{c:()=>t})},2023:(Et,be,c)=>{c.d(be,{f:()=>i});const t=new Map([["Assertion","#7243b5"],["ClinicalTrial","#ac3996"],["CoordinateSystem","#f68f37"],["Disease","#e62f76"],["Event","#1db8a9"],["EvidenceItem","#2a63b6"],["Feature","#07aff0"],["MolecularProfile","#33b358"],["NccnGuideline","#49566D"],["Phenotype","#1db8a9"],["Source","#f9ba45"],["Therapy","#ac3996"],["Variant","#74d34c"],["VariantGroup","#74d34c"],["VariantType","#74d34c"],["Comment","#44d8ef"],["Event","#ffdb00"],["Flag","#e24759"],["Queue","#666699"],["Revision","#f0673a"],["Curator","#a0d8f5"],["Editor","#58a0c4"],["Admin","#58a0c4"],["Organization","#3d7b99"],["Rejected","#BBBBBB"],["Greyscale","#999999"]]);function i(_){let e="#AAAAAA";if(_){const a=t.get(_);a&&(e=a)}return e}},2024:(Et,be,c)=>{c.d(be,{U:()=>a});var t=c(8645),i=c(5619),_=c(9773),e=c(4716);class a{constructor(R){this.networkErrorService=R}mutate(R,j,w,M){let F=new t.x,I={isSubmitting$:new i.X(!1),submitSuccess$:new i.X(!1),submitError$:new i.X([]),cleanup:()=>{F.next(),F.complete()}};return I.isSubmitting$.next(!0),R.mutate(j,w).pipe((0,_.R)(F),(0,e.x)(()=>{I.isSubmitting$.next(!1)})).subscribe({next:V=>{V.data&&M&&M(V.data)},error:V=>{V.graphQLErrors.length>0?I.submitError$.next(V.graphQLErrors.map(A=>A.message)):V.networkError&&this.networkErrorService.networkError$.next(V.networkError),I.cleanup()},complete:()=>{I.submitError$.next([]),I.submitSuccess$.next(!0),this.networkErrorService.networkError$.next(void 0),I.cleanup()}}),I}}},9333:(Et,be,c)=>{c.d(be,{h:()=>_});var t=c(6814),i=c(5879);let _=(()=>{class e{}return e.\u0275fac=function(N){return new(N||e)},e.\u0275mod=i.oAB({type:e}),e.\u0275inj=i.cJS({imports:[t.ez]}),e})()},8656:(Et,be,c)=>{c.d(be,{P:()=>V});var t=c(5879),i=c(6814),_=c(6109);function e(A,E){1&A&&(t.ynx(0),t._uU(1," N/A "),t.BQk())}function a(A,E){1&A&&(t.ynx(0),t._uU(1," Not applicable "),t.BQk())}function N(A,E){if(1&A&&(t.TgZ(0,"span",4),t.ynx(1,0),t.YNc(2,e,2,0,"ng-container",5),t.YNc(3,a,2,0,"ng-container",6),t.BQk(),t.qZA()),2&A){const U=t.oxw();t.xp6(1),t.Q6J("ngSwitch",U.cvcDisplayMode),t.xp6(1),t.Q6J("ngSwitchCase","small")}}function R(A,E){1&A&&(t.ynx(0),t._uU(1," \u2013\xa0\u2013 "),t.BQk())}function j(A,E){1&A&&(t.ynx(0),t._uU(1,"Not specified"),t.BQk())}function w(A,E){if(1&A&&(t.TgZ(0,"span",7),t.ynx(1,0),t.YNc(2,R,2,0,"ng-container",5),t.YNc(3,j,2,0,"ng-container",6),t.BQk(),t.qZA()),2&A){const U=t.oxw();t.xp6(1),t.Q6J("ngSwitch",U.cvcDisplayMode),t.xp6(1),t.Q6J("ngSwitchCase","small")}}function M(A,E){1&A&&(t.ynx(0),t._uU(1,"!?"),t.BQk())}function F(A,E){1&A&&(t.ynx(0),t._uU(1,"Unspecified"),t.BQk())}function I(A,E){if(1&A&&(t.TgZ(0,"span",8),t.ynx(1,0),t.YNc(2,M,2,0,"ng-container",5),t.YNc(3,F,2,0,"ng-container",6),t.BQk(),t.qZA()),2&A){const U=t.oxw();t.xp6(1),t.Q6J("ngSwitch",U.cvcDisplayMode),t.xp6(1),t.Q6J("ngSwitchCase","small")}}let V=(()=>{class A{constructor(){this.cvcEmptyCategory="not-applicable",this.cvcDisplayMode="default"}}return A.\u0275fac=function(U){return new(U||A)},A.\u0275cmp=t.Xpm({type:A,selectors:[["cvc-empty-value"]],inputs:{cvcEmptyCategory:"cvcEmptyCategory",cvcDisplayMode:"cvcDisplayMode"},decls:4,vars:4,consts:[[3,"ngSwitch"],["class","empty-symbol not-applicable","nz-tooltip","","nzTooltipTitle","Value is not applicable",4,"ngSwitchCase"],["nz-tooltip","","nzTooltipTitle","Unspecified","class","empty-symbol unspecified","nz-tooltip","","nzTooltipTitle","Value is unspecified",4,"ngSwitchCase"],["nz-tooltip","","nzTooltipTitle","INVALID","class","empty-symbol invalid","nz-tooltip","","nzTooltipTitle","Error: value requires specification",4,"ngSwitchCase"],["nz-tooltip","","nzTooltipTitle","Value is not applicable",1,"empty-symbol","not-applicable"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"],["nz-tooltip","","nzTooltipTitle","Unspecified","nz-tooltip","","nzTooltipTitle","Value is unspecified",1,"empty-symbol","unspecified"],["nz-tooltip","","nzTooltipTitle","INVALID","nz-tooltip","","nzTooltipTitle","Error: value requires specification",1,"empty-symbol","invalid"]],template:function(U,Q){1&U&&(t.ynx(0,0),t.YNc(1,N,4,2,"span",1),t.YNc(2,w,4,2,"span",2),t.YNc(3,I,4,2,"span",3),t.BQk()),2&U&&(t.Q6J("ngSwitch",Q.cvcEmptyCategory),t.xp6(1),t.Q6J("ngSwitchCase","not-applicable"),t.xp6(1),t.Q6J("ngSwitchCase","unspecified"),t.xp6(1),t.Q6J("ngSwitchCase","invalid"))},dependencies:[i.RF,i.n9,i.ED,_.SY],styles:[".empty-symbol[_ngcontent-%COMP%]{font-style:oblique;display:inline-block;white-space:no-wrap}.empty-symbol.not-applicable[_ngcontent-%COMP%]{color:#ccc;font-weight:500}.empty-symbol.unspecified[_ngcontent-%COMP%]{display:inline-block;color:#ccc;font-weight:500;padding:0 3px}.empty-symbol.invalid[_ngcontent-%COMP%]{display:inline-block;color:#ff4d4f;font-weight:700}"]}),A})()},821:(Et,be,c)=>{c.d(be,{M:()=>a});var t=c(6814),i=c(551),_=c(6109),e=c(5879);let a=(()=>{class N{}return N.\u0275fac=function(j){return new(j||N)},N.\u0275mod=e.oAB({type:N}),N.\u0275inj=e.cJS({imports:[t.ez,_.cg,i.PV]}),N})()},9835:(Et,be,c)=>{c.d(be,{J:()=>Mt});var t=c(5879),i=c(9111),_=c(6814),e=c(156),a=c(2851),N=c(1813),R=c(96),j=c(4402),w=c(8213),M=c(3743),F=c(8545);function I(lt,Ye){if(1&lt&&t._UZ(0,"cvc-molecular-profile-popover",9),2&lt){const Ae=t.oxw();t.Q6J("molecularProfileId",Ae.entity.entityId)}}function V(lt,Ye){if(1&lt&&t._UZ(0,"cvc-disease-popover",10),2&lt){const Ae=t.oxw();t.Q6J("diseaseId",Ae.entity.entityId)}}function A(lt,Ye){if(1&lt&&t._UZ(0,"cvc-therapy-popover",11),2&lt){const Ae=t.oxw();t.Q6J("therapyId",Ae.entity.entityId)}}function E(lt,Ye){if(1&lt&&t._UZ(0,"cvc-source-popover",12),2&lt){const Ae=t.oxw();t.Q6J("sourceId",Ae.entity.entityId)}}function U(lt,Ye){if(1&lt&&t._UZ(0,"cvc-phenotype-popover",13),2&lt){const Ae=t.oxw();t.Q6J("phenotypeId",Ae.entity.entityId)}}function Q(lt,Ye){if(1&lt&&t._UZ(0,"cvc-evidence-popover",14),2&lt){const Ae=t.oxw();t.Q6J("evidenceId",Ae.entity.entityId)}}function ze(lt,Ye){if(1&lt&&t._UZ(0,"cvc-feature-popover",15),2&lt){const Ae=t.oxw();t.Q6J("featureId",Ae.entity.entityId)}}function me(lt,Ye){if(1&lt&&t._UZ(0,"cvc-variant-popover",16),2&lt){const Ae=t.oxw();t.Q6J("variantId",Ae.entity.entityId)}}const K=["MolecularProfile","Disease","Therapy","Phenotype","Source","Gene","Variant","EvidenceItem"];let L=(()=>{class lt{ngOnInit(){if(null==this.entity)throw new Error("entity input is required for CvcEntityTagPopoverComponent")}}return lt.\u0275fac=function(Ae){return new(Ae||lt)},lt.\u0275cmp=t.Xpm({type:lt,selectors:[["cvc-entity-tag-popover"]],inputs:{entity:"entity"},decls:9,vars:9,consts:[[3,"ngSwitch"],[3,"molecularProfileId",4,"ngSwitchCase"],[3,"diseaseId",4,"ngSwitchCase"],[3,"therapyId",4,"ngSwitchCase"],[3,"sourceId",4,"ngSwitchCase"],[3,"phenotypeId",4,"ngSwitchCase"],[3,"evidenceId",4,"ngSwitchCase"],[3,"featureId",4,"ngSwitchCase"],[3,"variantId",4,"ngSwitchCase"],[3,"molecularProfileId"],[3,"diseaseId"],[3,"therapyId"],[3,"sourceId"],[3,"phenotypeId"],[3,"evidenceId"],[3,"featureId"],[3,"variantId"]],template:function(Ae,ie){1&Ae&&(t.ynx(0,0),t.YNc(1,I,1,1,"cvc-molecular-profile-popover",1),t.YNc(2,V,1,1,"cvc-disease-popover",2),t.YNc(3,A,1,1,"cvc-therapy-popover",3),t.YNc(4,E,1,1,"cvc-source-popover",4),t.YNc(5,U,1,1,"cvc-phenotype-popover",5),t.YNc(6,Q,1,1,"cvc-evidence-popover",6),t.YNc(7,ze,1,1,"cvc-feature-popover",7),t.YNc(8,me,1,1,"cvc-variant-popover",8),t.BQk()),2&Ae&&(t.Q6J("ngSwitch",ie.entity.entityType),t.xp6(1),t.Q6J("ngSwitchCase","MolecularProfile"),t.xp6(1),t.Q6J("ngSwitchCase","Disease"),t.xp6(1),t.Q6J("ngSwitchCase","Therapy"),t.xp6(1),t.Q6J("ngSwitchCase","Source"),t.xp6(1),t.Q6J("ngSwitchCase","Phenotype"),t.xp6(1),t.Q6J("ngSwitchCase","EvidenceItem"),t.xp6(1),t.Q6J("ngSwitchCase","Feature"),t.xp6(1),t.Q6J("ngSwitchCase","Variant"))},dependencies:[_.RF,_.n9,e._,a.I,N.p,R.a,j.S,w._,M.y,F.m],encapsulation:2,changeDetection:0}),lt})();var B=c(4190),S=c(551),P=c(5695),b=c(6109),ae=c(7417),le=c(7334),G=c(2616),ue=c(1201);function pe(lt,Ye){}function fe(lt,Ye){if(1&lt){const Ae=t.EpF();t.TgZ(0,"span",6)(1,"nz-tag",7),t.NdJ("nzCheckedChange",function(){t.CHM(Ae);const Me=t.oxw();return t.KtG(Me.cvcTagCheckedChange)})("nzOnClose",function(Me){t.CHM(Ae);const Ne=t.oxw();return t.KtG(Ne.cvcOnClose.next(Me))}),t.TgZ(2,"span",8),t.YNc(3,pe,0,0,"ng-template",9),t.qZA()()()}if(2&lt){const Ae=t.oxw(),ie=t.MAs(6),Me=t.MAs(8);t.xp6(1),t.Q6J("nzMode",Ae.cvcMode)("nzChecked",Ae.cvcTagChecked),t.xp6(1),t.Q6J("nzPopoverContent",Ae.cvcShowPopover&&Ae.popoverInput?ie:void 0),t.xp6(1),t.Q6J("ngTemplateOutlet",Me)}}function Se(lt,Ye){}function Le(lt,Ye){if(1&lt&&(t.TgZ(0,"span",13),t.YNc(1,Se,0,0,"ng-template",9),t.qZA()),2&lt){const Ae=t.oxw(2),ie=t.MAs(8);t.Q6J("nzTooltipTitle",Ae.entity.tooltip),t.xp6(1),t.Q6J("ngTemplateOutlet",ie)}}function Ft(lt,Ye){if(1&lt){const Ae=t.EpF();t.TgZ(0,"span",10)(1,"nz-tag",11),t.NdJ("nzOnClose",function(Me){t.CHM(Ae);const Ne=t.oxw();return t.KtG(Ne.cvcOnClose.next(Me))}),t.YNc(2,Le,2,2,"span",12),t.qZA()()}if(2&lt){const Ae=t.oxw(),ie=t.MAs(4);t.xp6(1),t.Q6J("nzMode","closeable"),t.xp6(1),t.Q6J("ngIf",Ae.entity&&Ae.entity.tooltip)("ngIfElse",ie)}}function Pt(lt,Ye){}function tn(lt,Ye){if(1&lt&&(t.TgZ(0,"span",13),t.YNc(1,Pt,0,0,"ng-template",9),t.qZA()),2&lt){const Ae=t.oxw(2),ie=t.MAs(8);t.Q6J("nzTooltipTitle",Ae.entity.tooltip),t.xp6(1),t.Q6J("ngTemplateOutlet",ie)}}function xt(lt,Ye){if(1&lt&&(t.TgZ(0,"span",14),t.YNc(1,tn,2,2,"span",12),t.qZA()),2&lt){const Ae=t.oxw(),ie=t.MAs(4);t.xp6(1),t.Q6J("ngIf",Ae.entity&&Ae.entity.tooltip)("ngIfElse",ie)}}function $t(lt,Ye){}function en(lt,Ye){if(1&lt&&(t.TgZ(0,"span",8),t.YNc(1,$t,0,0,"ng-template",9),t.qZA()),2&lt){const Ae=t.oxw(),ie=t.MAs(6),Me=t.MAs(8);t.Q6J("nzPopoverContent",Ae.popoverInput?ie:void 0),t.xp6(1),t.Q6J("ngTemplateOutlet",Me)}}function ln(lt,Ye){if(1&lt&&t._UZ(0,"cvc-entity-tag-popover",16),2&lt){const Ae=t.oxw(2);t.Q6J("entity",Ae.popoverInput)}}function kn(lt,Ye){if(1&lt&&t.YNc(0,ln,1,1,"cvc-entity-tag-popover",15),2&lt){const Ae=t.oxw();t.Q6J("ngIf",Ae.popoverInput)}}function at(lt,Ye){if(1&lt&&(t.TgZ(0,"span"),t.GkF(1,9),t.qZA()),2&lt){t.oxw();const Ae=t.MAs(4);t.xp6(1),t.Q6J("ngTemplateOutlet",Ae)}}function Ue(lt,Ye){if(1&lt&&(t.TgZ(0,"a",23),t.GkF(1,9),t.qZA()),2&lt){t.oxw();const Ae=t.MAs(4),ie=t.oxw(2);t.Q6J("routerLink",ie.entity.link),t.xp6(1),t.Q6J("ngTemplateOutlet",Ae)}}function gt(lt,Ye){if(1&lt&&(t._UZ(0,"span",26),t.ALo(1,"typenameToIcon"),t.ALo(2,"entityColor")),2&lt){const Ae=t.oxw(4);t.Q6J("nzType",t.lcZ(1,2,Ae.typename))("nzTwotoneColor",t.lcZ(2,4,Ae.typename))}}function Ze(lt,Ye){if(1&lt&&(t.YNc(0,gt,3,6,"span",24),t._UZ(1,"span",25),t.ALo(2,"highlightTypeahead")),2&lt){t.oxw(2);const Ae=t.MAs(4),ie=t.oxw();t.Q6J("ngIf",ie.typename&&ie.cvcShowIcon)("ngIfElse",Ae),t.xp6(1),t.Q6J("innerHtml",t.xi3(2,3,ie.entity.name,ie.cvcEmphasize),t.oJD)}}function Wt(lt,Ye){if(1&lt&&(t.ynx(0),t.YNc(1,at,2,1,"span",20),t.YNc(2,Ue,2,2,"a",21),t.YNc(3,Ze,3,6,"ng-template",null,22,t.W1O),t.BQk()),2&lt){const Ae=t.oxw(2);t.xp6(1),t.Q6J("ngIf",Ae.cvcDisableLink),t.xp6(1),t.Q6J("ngIf",!Ae.cvcDisableLink)}}function Zt(lt,Ye){}function _n(lt,Ye){if(1&lt&&(t.YNc(0,Zt,0,0,"ng-template",9),t._uU(1)),2&lt){t.oxw();const Ae=t.MAs(4),ie=t.oxw();t.Q6J("ngTemplateOutlet",Ae),t.xp6(1),t.hij(" CACHE-MISS (",ie.cvcCacheId,") ")}}function Pn(lt,Ye){1&lt&&t._UZ(0,"span",27)}function rn(lt,Ye){if(1&lt&&(t.YNc(0,Wt,5,2,"ng-container",17),t.YNc(1,_n,2,2,"ng-template",null,18,t.W1O),t.YNc(3,Pn,1,0,"ng-template",null,19,t.W1O)),2&lt){const Ae=t.MAs(2),ie=t.oxw();t.Q6J("ngIf",ie.entity)("ngIfElse",Ae)}}function fn(lt,Ye){if(1&lt&&t._UZ(0,"cvc-entity-tag-popover",16),2&lt){const Ae=t.oxw(2);t.Q6J("entity",Ae.popoverInput)}}function je(lt,Ye){if(1&lt&&t.YNc(0,fn,1,1,"cvc-entity-tag-popover",15),2&lt){const Ae=t.oxw();t.Q6J("ngIf",Ae.popoverInput)}}const Ot=lt=>void 0!==lt&&lt.__typename&&lt.id&&void 0!==lt.name;let Mt=(()=>{class lt{set cvcLinkableEntity(Ae){Ae&&this.setLinkableEntity(Ae)}set cvcCacheId(Ae){Ae&&this.setCachedLinkableEntity(Ae)}constructor(Ae){this.apollo=Ae,this.cvcContext="default",this.cvcMode="default",this.cvcDisableLink=!0,this.cvcTagChecked=!1,this.cvcHasTooltip=!1,this.cvcFullWidth=!1,this.cvcShowPopover=!1,this.cvcShowIcon=!0,this.cvcTagCheckedChange=new t.vpe,this.cvcOnClose=new t.vpe}hasPopover(Ae){return K.includes(Ae)}setLinkableEntity(Ae){Ot(Ae)&&(this.typename=Ae.__typename,this.id=Ae.id,this.entity=Ae,this.setPopoverInput(Ae))}setCachedLinkableEntity(Ae){const[ie,Me]=Ae.split(":");if(this.typename=ie,this.id=+Me,!this.typename||!this.id)return void console.error(`entity-tag received an invalid cacheId: ${Ae}. Cache IDs must be in the format 'TYPENAME:ID'.`);let Ne;Ne=this.cvcDisableLink?this.cvcHasTooltip?{id:`${ie}:${Me}`,fragment:i.Ps`
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
        `};const it=this.apollo.client.readFragment(Ne);Ot(it)?(this.setPopoverInput(it),this.entity=it):console.error(`entity-tag could not find cached entity ${Ae}`)}setPopoverInput(Ae){Ot(Ae)&&this.hasPopover(Ae.__typename)&&(this.popoverInput={entityId:Ae.id,entityType:Ae.__typename})}ngOnChanges(Ae){Ae.cvcMode&&"checkable"===Ae.cvcMode.currentValue&&(this.cvcDisableLink=!0),Ae.cvcContext&&"default"!==Ae.cvcContext.currentValue&&(this.cvcDisableLink=!0)}}return lt.\u0275fac=function(Ae){return new(Ae||lt)(t.Y36(i._M))},lt.\u0275cmp=t.Xpm({type:lt,selectors:[["cvc-entity-tag"]],hostVars:40,hostBindings:function(Ae,ie){2&Ae&&t.ekj("full-width",!0===ie.cvcFullWidth)("label-max",void 0!==ie.cvcTruncateLabel)("label-max-50","50px"===ie.cvcTruncateLabel)("label-max-75","75px"===ie.cvcTruncateLabel)("label-max-100","100px"===ie.cvcTruncateLabel)("label-max-125","125px"===ie.cvcTruncateLabel)("label-max-150","150px"===ie.cvcTruncateLabel)("label-max-175","175px"===ie.cvcTruncateLabel)("label-max-200","200px"===ie.cvcTruncateLabel)("label-max-250","250px"===ie.cvcTruncateLabel)("label-max-300","300px"===ie.cvcTruncateLabel)("label-max-350","350px"===ie.cvcTruncateLabel)("label-max-400","400px"===ie.cvcTruncateLabel)("label-max-450","450px"===ie.cvcTruncateLabel)("label-max-500","500px"===ie.cvcTruncateLabel)("rejected","REJECTED"===ie.cvcStatus)("accepted","ACCEPTED"===ie.cvcStatus)("submitted","SUBMITTED"===ie.cvcStatus)("new","NEW"===ie.cvcStatus)("superseded","SUPERSEDED"===ie.cvcStatus)},inputs:{cvcLinkableEntity:"cvcLinkableEntity",cvcCacheId:"cvcCacheId",cvcStatus:"cvcStatus",cvcContext:"cvcContext",cvcMode:"cvcMode",cvcEmphasize:"cvcEmphasize",cvcDisableLink:"cvcDisableLink",cvcTagChecked:"cvcTagChecked",cvcHasTooltip:"cvcHasTooltip",cvcFullWidth:"cvcFullWidth",cvcShowPopover:"cvcShowPopover",cvcShowIcon:"cvcShowIcon",cvcTruncateLabel:"cvcTruncateLabel"},outputs:{cvcTagCheckedChange:"cvcTagCheckedChange",cvcOnClose:"cvcOnClose"},features:[t.TTD],decls:11,vars:3,consts:[["class","default",4,"ngIf"],["class","select-item",4,"ngIf"],["class","multi-select-item",4,"ngIf"],["noTooltip",""],["popoverContent",""],["tagContent",""],[1,"default"],[3,"nzMode","nzChecked","nzCheckedChange","nzOnClose"],["nz-popover","","nzPopoverTrigger","hover",3,"nzPopoverContent"],[3,"ngTemplateOutlet"],[1,"select-item"],[3,"nzMode","nzOnClose"],["nz-tooltip","",3,"nzTooltipTitle",4,"ngIf","ngIfElse"],["nz-tooltip","",3,"nzTooltipTitle"],[1,"multi-select-item"],[3,"entity",4,"ngIf"],[3,"entity"],[4,"ngIf","ngIfElse"],["cacheMiss",""],["noIcon",""],[4,"ngIf"],[3,"routerLink",4,"ngIf"],["tagLabel",""],[3,"routerLink"],["nz-icon","","nzTheme","twotone","class","tag-icon",3,"nzType","nzTwotoneColor",4,"ngIf","ngIfElse"],[1,"tag-label",3,"innerHtml"],["nz-icon","","nzTheme","twotone",1,"tag-icon",3,"nzType","nzTwotoneColor"],[1,"tag-no-icon"]],template:function(Ae,ie){1&Ae&&(t.YNc(0,fe,4,4,"span",0),t.YNc(1,Ft,3,3,"span",1),t.YNc(2,xt,2,2,"span",2),t.YNc(3,en,2,2,"ng-template",null,3,t.W1O),t.YNc(5,kn,1,1,"ng-template",null,4,t.W1O),t.YNc(7,rn,5,2,"ng-template",null,5,t.W1O),t.YNc(9,je,1,1,"ng-template",null,4,t.W1O)),2&Ae&&(t.Q6J("ngIf","default"===ie.cvcContext),t.xp6(1),t.Q6J("ngIf","select-item"===ie.cvcContext),t.xp6(1),t.Q6J("ngIf","multi-select-item"===ie.cvcContext))},dependencies:[_.O5,_.tP,B.rH,S.Ls,P.j,b.SY,ae.lU,L,le.A,G.a,ue.Z],styles:['.hide-dropdown[_ngcontent-%COMP%]{display:none}.label-max-50[_nghost-%COMP%]   .tag-label[_ngcontent-%COMP%]{max-width:50px;overflow:hidden;text-overflow:ellipsis}.label-max-75[_nghost-%COMP%]   .tag-label[_ngcontent-%COMP%]{max-width:75px;overflow:hidden;text-overflow:ellipsis}.label-max-100[_nghost-%COMP%]   .tag-label[_ngcontent-%COMP%]{max-width:100px;overflow:hidden;text-overflow:ellipsis}.label-max-125[_nghost-%COMP%]   .tag-label[_ngcontent-%COMP%]{max-width:125px;overflow:hidden;text-overflow:ellipsis}.label-max-150[_nghost-%COMP%]   .tag-label[_ngcontent-%COMP%]{max-width:150px;overflow:hidden;text-overflow:ellipsis}.label-max-175[_nghost-%COMP%]   .tag-label[_ngcontent-%COMP%]{max-width:175px;overflow:hidden;text-overflow:ellipsis}.label-max-200[_nghost-%COMP%]   .tag-label[_ngcontent-%COMP%]{max-width:200px;overflow:hidden;text-overflow:ellipsis}.label-max-250[_nghost-%COMP%]   .tag-label[_ngcontent-%COMP%]{max-width:250px;overflow:hidden;text-overflow:ellipsis}.label-max-300[_nghost-%COMP%]   .tag-label[_ngcontent-%COMP%]{max-width:300px;overflow:hidden;text-overflow:ellipsis}.label-max-350[_nghost-%COMP%]   .tag-label[_ngcontent-%COMP%]{max-width:350px;overflow:hidden;text-overflow:ellipsis}.label-max-400[_nghost-%COMP%]   .tag-label[_ngcontent-%COMP%]{max-width:400px;overflow:hidden;text-overflow:ellipsis}.label-max-450[_nghost-%COMP%]   .tag-label[_ngcontent-%COMP%]{max-width:450px;overflow:hidden;text-overflow:ellipsis}.label-max-500[_nghost-%COMP%]   .tag-label[_ngcontent-%COMP%]{max-width:500px;overflow:hidden;text-overflow:ellipsis}.rejected[_nghost-%COMP%]   nz-tag[_ngcontent-%COMP%], .submitted[_nghost-%COMP%]   nz-tag[_ngcontent-%COMP%], .accepted[_nghost-%COMP%]   nz-tag[_ngcontent-%COMP%], .deprecated[_nghost-%COMP%]   nz-tag[_ngcontent-%COMP%]{border-right-width:2px}.rejected[_nghost-%COMP%]   nz-tag[_ngcontent-%COMP%], .deprecated[_nghost-%COMP%]   nz-tag[_ngcontent-%COMP%]{border-color:#e6e6e6;background-color:#fff;color:#999999d9}.submitted[_nghost-%COMP%]   nz-tag[_ngcontent-%COMP%]{border-color:#ffe58f}.accepted[_nghost-%COMP%]   nz-tag[_ngcontent-%COMP%]{border-color:#b7eb8f}.full-width[_nghost-%COMP%]   nz-tag[_ngcontent-%COMP%]{width:100%}.full-width[_nghost-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-label[_ngcontent-%COMP%]{width:100%}nz-tag[_ngcontent-%COMP%]{margin-right:0;margin-inline-end:4px}  -checkable{background-color:transparent;cursor:pointer}  -checkable:not(  -checkable-checked):hover{color:#1890ff}  -checkable:active,   -checkable-checked{color:#fff}  -checkable-checked{background-color:#1890ff}  -checkable:active{background-color:#096dd9}.default[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]{margin:0;padding:0 2px 0 0;margin-inline-end:4px;max-width:100%}.default[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon[_ngcontent-%COMP%]{display:inline-block;padding:3px 2px 3px 4px;margin:-3px 0}.default[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-no-icon[_ngcontent-%COMP%]{display:inline-block;width:4px}.default[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-label[_ngcontent-%COMP%]{display:inline-block;font-weight:400;margin:-3px 0 -4px;padding:3px 3px 3px 2px;line-height:1}.default[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]     i.ant-tag-close-icon.anticon-close{transition:none;margin-left:3px}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]{margin:0;padding:0 2px 0 0;margin-inline-end:4px;max-width:100%}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon[_ngcontent-%COMP%]{display:inline-block;padding:3px 2px 3px 4px;margin:-3px 0}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-no-icon[_ngcontent-%COMP%]{display:inline-block;width:4px}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-label[_ngcontent-%COMP%]{display:inline-block;font-weight:400;margin:-3px 0 -4px;padding:3px 3px 3px 2px;line-height:1}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]     i.ant-tag-close-icon.anticon-close{transition:none;margin-left:3px}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-label[_ngcontent-%COMP%]{padding-right:0}.multi-select-item[_ngcontent-%COMP%]{display:inline-block;margin-top:-3px;margin-bottom:-3px;margin-left:-4px;padding-left:4px}.multi-select-item[_ngcontent-%COMP%]   .tag-icon[_ngcontent-%COMP%]:after{content:" "}.typeahead-match[_ngcontent-%COMP%]{font-weight:700}a.disabled[_ngcontent-%COMP%]{pointer-events:none}'],changeDetection:0}),lt})()},188:(Et,be,c)=>{c.d(be,{x:()=>me});var t=c(6814),i=c(551),_=c(5695),e=c(2524),a=c(6109),N=c(4190),R=c(5879);let j=(()=>{class K{}return K.\u0275fac=function(B){return new(B||K)},K.\u0275mod=R.oAB({type:K}),K.\u0275inj=R.cJS({imports:[t.ez]}),K})();var w=c(7417),M=c(5687),F=c(1855),I=c(9910),V=c(2064),A=c(1332),E=c(6247),U=c(1207),Q=c(6446);let ze=(()=>{class K{}return K.\u0275fac=function(B){return new(B||K)},K.\u0275mod=R.oAB({type:K}),K.\u0275inj=R.cJS({imports:[t.ez,V._,M.t,E.n,U.s,A.I,F.f,I.N,Q.k]}),K})(),me=(()=>{class K{}return K.\u0275fac=function(B){return new(B||K)},K.\u0275mod=R.oAB({type:K}),K.\u0275inj=R.cJS({imports:[t.ez,N.Bz,i.PV,_.X,a.cg,w.$6,j,e.s,ze,j]}),K})()},9928:(Et,be,c)=>{c.d(be,{F:()=>Q});var w,t=c(655),i=c(1791),_=c(5879),e=c(4190),a=c(6814),N=c(2669),R=c(3903),j=c(8091);function M(ze,me){if(1&ze&&_._UZ(0,"nz-alert",6),2&ze){_.oxw();const K=_.MAs(3),L=_.oxw();_.MGl("nzMessage","Error Submitting ",L.entityType,""),_.Q6J("nzDescription",K)}}function F(ze,me){if(1&ze&&(_.TgZ(0,"li"),_._uU(1),_.qZA()),2&ze){const K=me.$implicit;_.xp6(1),_.hij(" ",K," ")}}function I(ze,me){if(1&ze&&(_.TgZ(0,"ul"),_.YNc(1,F,2,1,"li",7),_.qZA()),2&ze){const K=_.oxw().ngIf;_.xp6(1),_.Q6J("ngForOf",K)}}function V(ze,me){if(1&ze&&(_.ynx(0),_.YNc(1,M,1,2,"nz-alert",4),_.YNc(2,I,2,1,"ng-template",null,5,_.W1O),_.BQk()),2&ze){const K=me.ngIf;_.xp6(1),_.Q6J("ngIf",K.length>0)}}function A(ze,me){if(1&ze&&(_.ynx(0),_._UZ(1,"nz-alert",8),_.BQk()),2&ze){const K=_.oxw();_.xp6(1),_.MGl("nzMessage","",K.entityType," Submitted"),_.Q6J("nzDescription",K.successMessage?K.successMessage:null)}}function E(ze,me){1&ze&&_.Hsn(0)}let Q=((w=class{set mutationState(me){this._mutationState=me,this.currentTimer&&clearTimeout(this.currentTimer),me&&me.submitSuccess$.pipe((0,i.t)(this)).subscribe(K=>{K&&(this.currentTimer=setTimeout(()=>{this.redirectUrl&&this.router.navigateByUrl(this.redirectUrl)},2500))})}get mutationState(){return this._mutationState}constructor(me){this.router=me}ngOnInit(){}}).\u0275fac=function(me){return new(me||w)(_.Y36(e.F0))},w.\u0275cmp=_.Xpm({type:w,selectors:[["cvc-form-submission-status-display"]],inputs:{mutationState:"mutationState",entityType:"entityType",successMessage:"successMessage",redirectUrl:"redirectUrl"},ngContentSelectors:["*"],decls:8,vars:10,consts:[[3,"nzSpinning"],[4,"ngIf"],[4,"ngIf","ngIfElse"],["form",""],["nzType","error","nzShowIcon","",3,"nzMessage","nzDescription",4,"ngIf"],["errorList",""],["nzType","error","nzShowIcon","",3,"nzMessage","nzDescription"],[4,"ngFor","ngForOf"],["nzType","success","nzShowIcon","",3,"nzMessage","nzDescription"]],template:function(me,K){if(1&me&&(_.F$t(),_.TgZ(0,"nz-spin",0),_.ALo(1,"ngrxPush"),_.YNc(2,V,4,1,"ng-container",1),_.ALo(3,"ngrxPush"),_.YNc(4,A,2,2,"ng-container",2),_.ALo(5,"ngrxPush"),_.YNc(6,E,1,0,"ng-template",null,3,_.W1O),_.qZA()),2&me){const L=_.MAs(7);_.Q6J("nzSpinning",_.lcZ(1,4,null==K.mutationState?null:K.mutationState.isSubmitting$)),_.xp6(2),_.Q6J("ngIf",_.lcZ(3,6,null==K.mutationState?null:K.mutationState.submitError$)),_.xp6(2),_.Q6J("ngIf",_.lcZ(5,8,null==K.mutationState?null:K.mutationState.submitSuccess$))("ngIfElse",L)}},dependencies:[a.sg,a.O5,N.W,R.r,j.fM],encapsulation:2,changeDetection:0}),w);Q=(0,t.gn)([(0,i.c)()],Q)},1227:(Et,be,c)=>{c.d(be,{g:()=>N});var t=c(6814),i=c(3903),_=c(2574),e=c(2669),a=c(5879);let N=(()=>{class R{}return R.\u0275fac=function(w){return new(w||R)},R.\u0275mod=a.oAB({type:R}),R.\u0275inj=a.cJS({imports:[t.ez,e.j,i.L,_.zf]}),R})()},2875:(Et,be,c)=>{c.d(be,{S:()=>yd});var t=c(6223),i=c(4190),_=c(5545),e=c(5879),a=c(6814),N=c(3599),R=c(95);function j(l,g){if(1&l&&(e.ynx(0),e.TgZ(1,"nz-form-label",4),e._uU(2),e.qZA(),e.BQk()),2&l){const s=e.oxw();e.xp6(1),e.Q6J("nzRequired",s.props.required&&!0!==s.props.hideRequiredMarker)("nzFor",s.id),e.xp6(1),e.hij(" ",s.props.label," ")}}function w(l,g){if(1&l&&e._UZ(0,"formly-validation-message",5),2&l){const s=e.oxw();e.Q6J("field",s.field)}}let M=(()=>{class l extends _.n2{get errorState(){return this.showError?"error":""}}return l.\u0275fac=function(){let g;return function(p){return(g||(g=e.n5z(l)))(p||l)}}(),l.\u0275cmp=e.Xpm({type:l,selectors:[["formly-wrapper-nz-form-field"]],features:[e.qOj],decls:7,vars:4,consts:[[4,"ngIf"],[3,"nzValidateStatus","nzErrorTip","nzExtra"],["fieldComponent",""],["errorTpl",""],[3,"nzRequired","nzFor"],[3,"field"]],template:function(s,p){if(1&s&&(e.TgZ(0,"nz-form-item"),e.YNc(1,j,3,3,"ng-container",0),e.TgZ(2,"nz-form-control",1),e.GkF(3,null,2),e.YNc(5,w,1,1,"ng-template",null,3,e.W1O),e.qZA()()),2&s){const O=e.MAs(6);e.xp6(1),e.Q6J("ngIf",p.props.label&&!0!==p.props.hideLabel),e.xp6(1),e.Q6J("nzValidateStatus",p.errorState)("nzErrorTip",O)("nzExtra",p.props.description)}},dependencies:[N.Nx,N.iK,N.Fd,_.M2,R.SK,a.O5,R.t3],encapsulation:2}),l})(),F=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[[a.ez,t.UX,N.U5,_.X0.forChild({wrappers:[{name:"form-field",component:M}]})]]}),l})();var I=c(824),V=c(655),A=c(6028),E=c(8645),U=c(2438),Q=c(3019),ze=c(3997),me=c(9773),K=c(7921),L=c(4664),B=c(1631),S=c(7398),P=c(9087),b=c(7754),ae=c(4300),le=c(9388),G=c(883),ue=c(551),pe=c(8324);const fe=["upHandler"],Se=["downHandler"],Le=["inputElement"];function Ft(l,g){if(1&l&&e._UZ(0,"nz-form-item-feedback-icon",11),2&l){const s=e.oxw();e.Q6J("status",s.status)}}const Pt=["nz-input-number-group-slot",""];function tn(l,g){if(1&l&&e._UZ(0,"span",2),2&l){const s=e.oxw();e.Q6J("nzType",s.icon)}}function xt(l,g){if(1&l&&(e.ynx(0),e._uU(1),e.BQk()),2&l){const s=e.oxw();e.xp6(1),e.Oqu(s.template)}}const $t=["*"];function en(l,g){if(1&l&&e._UZ(0,"div",7),2&l){const s=e.oxw(2);e.Q6J("icon",s.nzAddOnBeforeIcon)("template",s.nzAddOnBefore)}}function ln(l,g){}function kn(l,g){if(1&l&&(e.TgZ(0,"div",8),e.YNc(1,ln,0,0,"ng-template",9),e.qZA()),2&l){const s=e.oxw(2),p=e.MAs(4);e.ekj("ant-input-number-affix-wrapper-disabled",s.disabled)("ant-input-number-affix-wrapper-sm",s.isSmall)("ant-input-number-affix-wrapper-lg",s.isLarge)("ant-input-number-affix-wrapper-focused",s.focused),e.Q6J("ngClass",s.affixInGroupStatusCls),e.xp6(1),e.Q6J("ngTemplateOutlet",p)}}function at(l,g){if(1&l&&e._UZ(0,"span",7),2&l){const s=e.oxw(2);e.Q6J("icon",s.nzAddOnAfterIcon)("template",s.nzAddOnAfter)}}function Ue(l,g){if(1&l&&(e.TgZ(0,"span",4),e.YNc(1,en,1,2,"div",5),e.YNc(2,kn,2,10,"div",6),e.YNc(3,at,1,2,"span",5),e.qZA()),2&l){const s=e.oxw(),p=e.MAs(6);e.xp6(1),e.Q6J("ngIf",s.nzAddOnBefore||s.nzAddOnBeforeIcon),e.xp6(1),e.Q6J("ngIf",s.isAffix||s.hasFeedback)("ngIfElse",p),e.xp6(1),e.Q6J("ngIf",s.nzAddOnAfter||s.nzAddOnAfterIcon)}}function gt(l,g){}function Ze(l,g){if(1&l&&e.YNc(0,gt,0,0,"ng-template",9),2&l){e.oxw(2);const s=e.MAs(4);e.Q6J("ngTemplateOutlet",s)}}function Wt(l,g){if(1&l&&e.YNc(0,Ze,1,1,"ng-template",10),2&l){const s=e.oxw(),p=e.MAs(6);e.Q6J("ngIf",s.isAffix)("ngIfElse",p)}}function Zt(l,g){if(1&l&&e._UZ(0,"span",13),2&l){const s=e.oxw(2);e.Q6J("icon",s.nzPrefixIcon)("template",s.nzPrefix)}}function _n(l,g){}function Pn(l,g){if(1&l&&e._UZ(0,"nz-form-item-feedback-icon",16),2&l){const s=e.oxw(3);e.Q6J("status",s.status)}}function rn(l,g){if(1&l&&(e.TgZ(0,"span",14),e.YNc(1,Pn,1,1,"nz-form-item-feedback-icon",15),e.qZA()),2&l){const s=e.oxw(2);e.Q6J("icon",s.nzSuffixIcon)("template",s.nzSuffix),e.xp6(1),e.Q6J("ngIf",s.isFeedback)}}function fn(l,g){if(1&l&&(e.YNc(0,Zt,1,2,"span",11),e.YNc(1,_n,0,0,"ng-template",9),e.YNc(2,rn,2,3,"span",12)),2&l){const s=e.oxw(),p=e.MAs(6);e.Q6J("ngIf",s.nzPrefix||s.nzPrefixIcon),e.xp6(1),e.Q6J("ngTemplateOutlet",p),e.xp6(1),e.Q6J("ngIf",s.nzSuffix||s.nzSuffixIcon||s.isFeedback)}}function je(l,g){if(1&l&&e._UZ(0,"nz-form-item-feedback-icon",16),2&l){const s=e.oxw(3);e.Q6J("status",s.status)}}function Ot(l,g){if(1&l&&(e.TgZ(0,"span",18),e.YNc(1,je,1,1,"nz-form-item-feedback-icon",15),e.qZA()),2&l){const s=e.oxw(2);e.xp6(1),e.Q6J("ngIf",s.isFeedback)}}function Mt(l,g){if(1&l&&(e.Hsn(0),e.YNc(1,Ot,2,1,"span",17)),2&l){const s=e.oxw();e.xp6(1),e.Q6J("ngIf",!s.isAddOn&&!s.isAffix&&s.isFeedback)}}let lt=(()=>{class l{onModelChange(s){this.parsedValue=this.nzParser(s),this.inputElement.nativeElement.value=`${this.parsedValue}`;const p=this.getCurrentValidValue(this.parsedValue);this.setValue(p)}getCurrentValidValue(s){let p=s;return p=""===p?"":this.isNotCompleteNumber(p)?this.value:`${this.getValidValue(p)}`,this.toNumber(p)}isNotCompleteNumber(s){return isNaN(s)||""===s||null===s||!(!s||s.toString().indexOf(".")!==s.toString().length-1)}getValidValue(s){let p=parseFloat(s);return isNaN(p)?s:(p<this.nzMin&&(p=this.nzMin),p>this.nzMax&&(p=this.nzMax),p)}toNumber(s){if(this.isNotCompleteNumber(s))return s;const p=String(s);if(p.indexOf(".")>=0&&(0,b.DX)(this.nzPrecision)){if("function"==typeof this.nzPrecisionMode)return this.nzPrecisionMode(s,this.nzPrecision);if("cut"===this.nzPrecisionMode){const O=p.split(".");return O[1]=O[1].slice(0,this.nzPrecision),Number(O.join("."))}return Number(Number(s).toFixed(this.nzPrecision))}return Number(s)}getRatio(s){let p=1;return s.metaKey||s.ctrlKey?p=.1:s.shiftKey&&(p=10),p}down(s,p){this.isFocused||this.focus(),this.step("down",s,p)}up(s,p){this.isFocused||this.focus(),this.step("up",s,p)}getPrecision(s){const p=s.toString();if(p.indexOf("e-")>=0)return parseInt(p.slice(p.indexOf("e-")+2),10);let O=0;return p.indexOf(".")>=0&&(O=p.length-p.indexOf(".")-1),O}getMaxPrecision(s,p){if((0,b.DX)(this.nzPrecision))return this.nzPrecision;const O=this.getPrecision(p),Ce=this.getPrecision(this.nzStep),ft=this.getPrecision(s);return s?Math.max(ft,O+Ce):O+Ce}getPrecisionFactor(s,p){const O=this.getMaxPrecision(s,p);return Math.pow(10,O)}upStep(s,p){const O=this.getPrecisionFactor(s,p),Ce=Math.abs(this.getMaxPrecision(s,p));let ft;return ft="number"==typeof s?((O*s+O*this.nzStep*p)/O).toFixed(Ce):this.nzMin===-1/0?this.nzStep:this.nzMin,this.toNumber(ft)}downStep(s,p){const O=this.getPrecisionFactor(s,p),Ce=Math.abs(this.getMaxPrecision(s,p));let ft;return ft="number"==typeof s?((O*s-O*this.nzStep*p)/O).toFixed(Ce):this.nzMin===-1/0?-this.nzStep:this.nzMin,this.toNumber(ft)}step(s,p,O=1){if(this.stop(),p.preventDefault(),this.nzDisabled)return;const Ce=this.getCurrentValidValue(this.parsedValue)||0;let ft=0;"up"===s?ft=this.upStep(Ce,O):"down"===s&&(ft=this.downStep(Ce,O));const vn=ft>this.nzMax||ft<this.nzMin;ft>this.nzMax?ft=this.nzMax:ft<this.nzMin&&(ft=this.nzMin),this.setValue(ft),this.updateDisplayValue(ft),this.isFocused=!0,!vn&&(this.autoStepTimer=setTimeout(()=>{this[s](p,O)},300))}stop(){this.autoStepTimer&&clearTimeout(this.autoStepTimer)}setValue(s){if(`${this.value}`!=`${s}`&&this.onChange(s),this.value=s,this.parsedValue=s,this.disabledUp=this.disabledDown=!1,s||0===s){const p=Number(s);p>=this.nzMax&&(this.disabledUp=!0),p<=this.nzMin&&(this.disabledDown=!0)}}updateDisplayValue(s){const p=(0,b.DX)(this.nzFormatter(s))?this.nzFormatter(s):"";this.displayValue=p,this.inputElement.nativeElement.value=`${p}`}writeValue(s){this.value=s,this.setValue(s),this.updateDisplayValue(s),this.cdr.markForCheck()}registerOnChange(s){this.onChange=s}registerOnTouched(s){this.onTouched=s}setDisabledState(s){this.nzDisabled=this.isNzDisableFirstChange&&this.nzDisabled||s,this.isNzDisableFirstChange=!1,this.disabled$.next(this.nzDisabled),this.cdr.markForCheck()}focus(){this.focusMonitor.focusVia(this.inputElement,"keyboard")}blur(){this.inputElement.nativeElement.blur()}constructor(s,p,O,Ce,ft,vn,Sn,yo,fi){this.ngZone=s,this.elementRef=p,this.cdr=O,this.focusMonitor=Ce,this.renderer=ft,this.directionality=vn,this.destroy$=Sn,this.nzFormStatusService=yo,this.nzFormNoStatusService=fi,this.isNzDisableFirstChange=!0,this.isFocused=!1,this.disabled$=new E.x,this.disabledUp=!1,this.disabledDown=!1,this.dir="ltr",this.prefixCls="ant-input-number",this.status="",this.statusCls={},this.hasFeedback=!1,this.onChange=()=>{},this.onTouched=()=>{},this.nzBlur=new e.vpe,this.nzFocus=new e.vpe,this.nzSize="default",this.nzMin=-1/0,this.nzMax=1/0,this.nzParser=Ii=>Ii.trim().replace(/\u3002/g,".").replace(/[^\w\.-]+/g,""),this.nzPrecisionMode="toFixed",this.nzPlaceHolder="",this.nzStatus="",this.nzStep=1,this.nzInputMode="decimal",this.nzId=null,this.nzDisabled=!1,this.nzReadOnly=!1,this.nzAutoFocus=!1,this.nzBorderless=!1,this.nzFormatter=Ii=>Ii}ngOnInit(){this.nzFormStatusService?.formStatusChanges.pipe((0,ze.x)((s,p)=>s.status===p.status&&s.hasFeedback===p.hasFeedback),(0,me.R)(this.destroy$)).subscribe(({status:s,hasFeedback:p})=>{this.setStatusStyles(s,p)}),this.focusMonitor.monitor(this.elementRef,!0).pipe((0,me.R)(this.destroy$)).subscribe(s=>{s?(this.isFocused=!0,this.nzFocus.emit()):(this.isFocused=!1,this.updateDisplayValue(this.value),this.nzBlur.emit(),Promise.resolve().then(()=>this.onTouched()))}),this.dir=this.directionality.value,this.directionality.change.pipe((0,me.R)(this.destroy$)).subscribe(s=>{this.dir=s}),this.setupHandlersListeners(),this.ngZone.runOutsideAngular(()=>{(0,U.R)(this.inputElement.nativeElement,"keyup").pipe((0,me.R)(this.destroy$)).subscribe(()=>this.stop()),(0,U.R)(this.inputElement.nativeElement,"keydown").pipe((0,me.R)(this.destroy$)).subscribe(s=>{const{keyCode:p}=s;p!==A.LH&&p!==A.JH&&p!==A.K5||this.ngZone.run(()=>{if(p===A.LH){const O=this.getRatio(s);this.up(s,O),this.stop()}else if(p===A.JH){const O=this.getRatio(s);this.down(s,O),this.stop()}else this.updateDisplayValue(this.value);this.cdr.markForCheck()})})})}ngOnChanges(s){const{nzStatus:p,nzDisabled:O}=s;if(s.nzFormatter&&!s.nzFormatter.isFirstChange()){const Ce=this.getCurrentValidValue(this.parsedValue);this.setValue(Ce),this.updateDisplayValue(Ce)}O&&this.disabled$.next(this.nzDisabled),p&&this.setStatusStyles(this.nzStatus,this.hasFeedback)}ngAfterViewInit(){this.nzAutoFocus&&this.focus()}ngOnDestroy(){this.focusMonitor.stopMonitoring(this.elementRef)}setupHandlersListeners(){this.ngZone.runOutsideAngular(()=>{(0,Q.T)((0,U.R)(this.upHandler.nativeElement,"mouseup"),(0,U.R)(this.upHandler.nativeElement,"mouseleave"),(0,U.R)(this.downHandler.nativeElement,"mouseup"),(0,U.R)(this.downHandler.nativeElement,"mouseleave")).pipe((0,me.R)(this.destroy$)).subscribe(()=>this.stop())})}setStatusStyles(s,p){this.status=s,this.hasFeedback=p,this.cdr.markForCheck(),this.statusCls=(0,b.Zu)(this.prefixCls,s,p),Object.keys(this.statusCls).forEach(O=>{this.statusCls[O]?this.renderer.addClass(this.elementRef.nativeElement,O):this.renderer.removeClass(this.elementRef.nativeElement,O)})}}return l.\u0275fac=function(s){return new(s||l)(e.Y36(e.R0b),e.Y36(e.SBq),e.Y36(e.sBO),e.Y36(ae.tE),e.Y36(e.Qsj),e.Y36(le.Is,8),e.Y36(P.kn),e.Y36(G.kH,8),e.Y36(G.yW,8))},l.\u0275cmp=e.Xpm({type:l,selectors:[["nz-input-number"]],viewQuery:function(s,p){if(1&s&&(e.Gf(fe,7),e.Gf(Se,7),e.Gf(Le,7)),2&s){let O;e.iGM(O=e.CRH())&&(p.upHandler=O.first),e.iGM(O=e.CRH())&&(p.downHandler=O.first),e.iGM(O=e.CRH())&&(p.inputElement=O.first)}},hostAttrs:[1,"ant-input-number"],hostVars:16,hostBindings:function(s,p){2&s&&e.ekj("ant-input-number-in-form-item",!!p.nzFormStatusService)("ant-input-number-focused",p.isFocused)("ant-input-number-lg","large"===p.nzSize)("ant-input-number-sm","small"===p.nzSize)("ant-input-number-disabled",p.nzDisabled)("ant-input-number-readonly",p.nzReadOnly)("ant-input-number-rtl","rtl"===p.dir)("ant-input-number-borderless",p.nzBorderless)},inputs:{nzSize:"nzSize",nzMin:"nzMin",nzMax:"nzMax",nzParser:"nzParser",nzPrecision:"nzPrecision",nzPrecisionMode:"nzPrecisionMode",nzPlaceHolder:"nzPlaceHolder",nzStatus:"nzStatus",nzStep:"nzStep",nzInputMode:"nzInputMode",nzId:"nzId",nzDisabled:"nzDisabled",nzReadOnly:"nzReadOnly",nzAutoFocus:"nzAutoFocus",nzBorderless:"nzBorderless",nzFormatter:"nzFormatter"},outputs:{nzBlur:"nzBlur",nzFocus:"nzFocus"},exportAs:["nzInputNumber"],features:[e._Bn([{provide:t.JU,useExisting:(0,e.Gpc)(()=>l),multi:!0},P.kn]),e.TTD],decls:11,vars:15,consts:[[1,"ant-input-number-handler-wrap"],["unselectable","unselectable",1,"ant-input-number-handler","ant-input-number-handler-up",3,"mousedown"],["upHandler",""],["nz-icon","","nzType","up",1,"ant-input-number-handler-up-inner"],["unselectable","unselectable",1,"ant-input-number-handler","ant-input-number-handler-down",3,"mousedown"],["downHandler",""],["nz-icon","","nzType","down",1,"ant-input-number-handler-down-inner"],[1,"ant-input-number-input-wrap"],["autocomplete","off",1,"ant-input-number-input",3,"disabled","placeholder","readOnly","ngModel","ngModelChange"],["inputElement",""],["class","ant-input-number-suffix",3,"status",4,"ngIf"],[1,"ant-input-number-suffix",3,"status"]],template:function(s,p){1&s&&(e.TgZ(0,"div",0)(1,"span",1,2),e.NdJ("mousedown",function(Ce){return p.up(Ce)}),e._UZ(3,"span",3),e.qZA(),e.TgZ(4,"span",4,5),e.NdJ("mousedown",function(Ce){return p.down(Ce)}),e._UZ(6,"span",6),e.qZA()(),e.TgZ(7,"div",7)(8,"input",8,9),e.NdJ("ngModelChange",function(Ce){return p.onModelChange(Ce)}),e.qZA()(),e.YNc(10,Ft,1,1,"nz-form-item-feedback-icon",10)),2&s&&(e.xp6(1),e.ekj("ant-input-number-handler-up-disabled",p.disabledUp),e.xp6(3),e.ekj("ant-input-number-handler-down-disabled",p.disabledDown),e.xp6(4),e.Q6J("disabled",p.nzDisabled)("placeholder",p.nzPlaceHolder)("readOnly",p.nzReadOnly)("ngModel",p.displayValue),e.uIk("id",p.nzId)("autofocus",p.nzAutoFocus?"autofocus":null)("min",p.nzMin)("max",p.nzMax)("step",p.nzStep)("inputmode",p.nzInputMode),e.xp6(2),e.Q6J("ngIf",p.hasFeedback&&!!p.status&&!p.nzFormNoStatusService))},dependencies:[a.O5,t.Fj,t.JJ,t.On,ue.Ls,G.w_],encapsulation:2,changeDetection:0}),(0,V.gn)([(0,b.yF)()],l.prototype,"nzDisabled",void 0),(0,V.gn)([(0,b.yF)()],l.prototype,"nzReadOnly",void 0),(0,V.gn)([(0,b.yF)()],l.prototype,"nzAutoFocus",void 0),(0,V.gn)([(0,b.yF)()],l.prototype,"nzBorderless",void 0),l})(),Ye=(()=>{class l{constructor(){this.icon=null,this.type=null,this.template=null}}return l.\u0275fac=function(s){return new(s||l)},l.\u0275cmp=e.Xpm({type:l,selectors:[["","nz-input-number-group-slot",""]],hostVars:6,hostBindings:function(s,p){2&s&&e.ekj("ant-input-number-group-addon","addon"===p.type)("ant-input-number-prefix","prefix"===p.type)("ant-input-number-suffix","suffix"===p.type)},inputs:{icon:"icon",type:"type",template:"template"},attrs:Pt,ngContentSelectors:$t,decls:3,vars:2,consts:[["nz-icon","",3,"nzType",4,"ngIf"],[4,"nzStringTemplateOutlet"],["nz-icon","",3,"nzType"]],template:function(s,p){1&s&&(e.F$t(),e.YNc(0,tn,1,1,"span",0),e.YNc(1,xt,2,1,"ng-container",1),e.Hsn(2)),2&s&&(e.Q6J("ngIf",p.icon),e.xp6(1),e.Q6J("nzStringTemplateOutlet",p.template))},dependencies:[a.O5,pe.f,ue.Ls],encapsulation:2,changeDetection:0}),l})(),ie=(()=>{class l{constructor(s,p,O,Ce,ft,vn,Sn){this.focusMonitor=s,this.elementRef=p,this.renderer=O,this.cdr=Ce,this.directionality=ft,this.nzFormStatusService=vn,this.nzFormNoStatusService=Sn,this.nzAddOnBeforeIcon=null,this.nzAddOnAfterIcon=null,this.nzPrefixIcon=null,this.nzSuffixIcon=null,this.nzStatus="",this.nzSize="default",this.nzCompact=!1,this.isLarge=!1,this.isSmall=!1,this.isAffix=!1,this.isAddOn=!1,this.isFeedback=!1,this.focused=!1,this.disabled=!1,this.dir="ltr",this.prefixCls="ant-input-number",this.affixStatusCls={},this.groupStatusCls={},this.affixInGroupStatusCls={},this.status="",this.hasFeedback=!1,this.destroy$=new E.x}updateChildrenInputSize(){this.listOfNzInputNumberComponent&&this.listOfNzInputNumberComponent.forEach(s=>s.nzSize=this.nzSize)}ngOnInit(){this.nzFormStatusService?.formStatusChanges.pipe((0,ze.x)((s,p)=>s.status===p.status&&s.hasFeedback===p.hasFeedback),(0,me.R)(this.destroy$)).subscribe(({status:s,hasFeedback:p})=>{this.setStatusStyles(s,p)}),this.focusMonitor.monitor(this.elementRef,!0).pipe((0,me.R)(this.destroy$)).subscribe(s=>{this.focused=!!s,this.cdr.markForCheck()}),this.dir=this.directionality.value,this.directionality.change?.pipe((0,me.R)(this.destroy$)).subscribe(s=>{this.dir=s})}ngAfterContentInit(){this.updateChildrenInputSize();const s=this.listOfNzInputNumberComponent.changes.pipe((0,K.O)(this.listOfNzInputNumberComponent));s.pipe((0,L.w)(p=>(0,Q.T)(s,...p.map(O=>O.disabled$))),(0,B.z)(()=>s),(0,S.U)(p=>p.some(O=>O.nzDisabled)),(0,me.R)(this.destroy$)).subscribe(p=>{this.disabled=p,this.cdr.markForCheck()})}ngOnChanges(s){const{nzSize:p,nzSuffix:O,nzPrefix:Ce,nzPrefixIcon:ft,nzSuffixIcon:vn,nzAddOnAfter:Sn,nzAddOnBefore:yo,nzAddOnAfterIcon:fi,nzAddOnBeforeIcon:Ii,nzStatus:Sa}=s;p&&(this.updateChildrenInputSize(),this.isLarge="large"===this.nzSize,this.isSmall="small"===this.nzSize),(O||Ce||ft||vn)&&(this.isAffix=!!(this.nzSuffix||this.nzPrefix||this.nzPrefixIcon||this.nzSuffixIcon)),(Sn||yo||fi||Ii)&&(this.isAddOn=!!(this.nzAddOnAfter||this.nzAddOnBefore||this.nzAddOnAfterIcon||this.nzAddOnBeforeIcon),this.nzFormNoStatusService?.noFormStatus?.next(this.isAddOn)),Sa&&this.setStatusStyles(this.nzStatus,this.hasFeedback)}ngOnDestroy(){this.focusMonitor.stopMonitoring(this.elementRef),this.destroy$.next(),this.destroy$.complete()}setStatusStyles(s,p){this.status=s,this.hasFeedback=p,this.isFeedback=!!s&&p,this.isAffix=!!(this.nzSuffix||this.nzPrefix||this.nzPrefixIcon||this.nzSuffixIcon)||!this.isAddOn&&p,this.affixInGroupStatusCls=this.isAffix||this.isFeedback?this.affixStatusCls=(0,b.Zu)(`${this.prefixCls}-affix-wrapper`,s,p):{},this.cdr.markForCheck(),this.affixStatusCls=(0,b.Zu)(`${this.prefixCls}-affix-wrapper`,this.isAddOn?"":s,!this.isAddOn&&p),this.groupStatusCls=(0,b.Zu)(`${this.prefixCls}-group-wrapper`,this.isAddOn?s:"",!!this.isAddOn&&p);const Ce={...this.affixStatusCls,...this.groupStatusCls};Object.keys(Ce).forEach(ft=>{Ce[ft]?this.renderer.addClass(this.elementRef.nativeElement,ft):this.renderer.removeClass(this.elementRef.nativeElement,ft)})}}return l.\u0275fac=function(s){return new(s||l)(e.Y36(ae.tE),e.Y36(e.SBq),e.Y36(e.Qsj),e.Y36(e.sBO),e.Y36(le.Is,8),e.Y36(G.kH,8),e.Y36(G.yW,8))},l.\u0275cmp=e.Xpm({type:l,selectors:[["nz-input-number-group"]],contentQueries:function(s,p,O){if(1&s&&e.Suo(O,lt,5),2&s){let Ce;e.iGM(Ce=e.CRH())&&(p.listOfNzInputNumberComponent=Ce)}},hostVars:24,hostBindings:function(s,p){2&s&&e.ekj("ant-input-number-group",p.nzCompact)("ant-input-number-group-compact",p.nzCompact)("ant-input-number-group-wrapper",p.isAddOn)("ant-input-number-group-wrapper-rtl",p.isAddOn&&"rtl"===p.dir)("ant-input-number-group-wrapper-lg",p.isAddOn&&p.isLarge)("ant-input-number-group-wrapper-sm",p.isAddOn&&p.isSmall)("ant-input-number-affix-wrapper",!p.isAddOn&&p.isAffix)("ant-input-number-affix-wrapper-rtl",!p.isAddOn&&"rtl"===p.dir)("ant-input-number-affix-wrapper-focused",!p.isAddOn&&p.isAffix&&p.focused)("ant-input-number-affix-wrapper-disabled",!p.isAddOn&&p.isAffix&&p.disabled)("ant-input-number-affix-wrapper-lg",!p.isAddOn&&p.isAffix&&p.isLarge)("ant-input-number-affix-wrapper-sm",!p.isAddOn&&p.isAffix&&p.isSmall)},inputs:{nzAddOnBeforeIcon:"nzAddOnBeforeIcon",nzAddOnAfterIcon:"nzAddOnAfterIcon",nzPrefixIcon:"nzPrefixIcon",nzSuffixIcon:"nzSuffixIcon",nzAddOnBefore:"nzAddOnBefore",nzAddOnAfter:"nzAddOnAfter",nzPrefix:"nzPrefix",nzStatus:"nzStatus",nzSuffix:"nzSuffix",nzSize:"nzSize",nzCompact:"nzCompact"},exportAs:["nzInputNumberGroup"],features:[e._Bn([G.yW]),e.TTD],ngContentSelectors:$t,decls:7,vars:2,consts:[["class","ant-input-number-wrapper ant-input-number-group",4,"ngIf","ngIfElse"],["noAddOnTemplate",""],["affixTemplate",""],["contentTemplate",""],[1,"ant-input-number-wrapper","ant-input-number-group"],["nz-input-number-group-slot","","type","addon",3,"icon","template",4,"ngIf"],["class","ant-input-number-affix-wrapper",3,"ant-input-number-affix-wrapper-disabled","ant-input-number-affix-wrapper-sm","ant-input-number-affix-wrapper-lg","ant-input-number-affix-wrapper-focused","ngClass",4,"ngIf","ngIfElse"],["nz-input-number-group-slot","","type","addon",3,"icon","template"],[1,"ant-input-number-affix-wrapper",3,"ngClass"],[3,"ngTemplateOutlet"],[3,"ngIf","ngIfElse"],["nz-input-number-group-slot","","type","prefix",3,"icon","template",4,"ngIf"],["nz-input-number-group-slot","","type","suffix",3,"icon","template",4,"ngIf"],["nz-input-number-group-slot","","type","prefix",3,"icon","template"],["nz-input-number-group-slot","","type","suffix",3,"icon","template"],[3,"status",4,"ngIf"],[3,"status"],["nz-input-number-group-slot","","type","suffix",4,"ngIf"],["nz-input-number-group-slot","","type","suffix"]],template:function(s,p){if(1&s&&(e.F$t(),e.YNc(0,Ue,4,4,"span",0),e.YNc(1,Wt,1,2,"ng-template",null,1,e.W1O),e.YNc(3,fn,3,3,"ng-template",null,2,e.W1O),e.YNc(5,Mt,2,1,"ng-template",null,3,e.W1O)),2&s){const O=e.MAs(2);e.Q6J("ngIf",p.isAddOn)("ngIfElse",O)}},dependencies:[a.mk,a.O5,a.tP,G.w_,Ye],encapsulation:2,changeDetection:0}),(0,V.gn)([(0,b.yF)()],l.prototype,"nzCompact",void 0),l})(),Me=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[le.vT,a.ez,t.u5,pe.T,ue.PV,G.mJ]}),l})();function Ne(l,g){if(1&l&&e._UZ(0,"input",2),2&l){const s=e.oxw();e.Q6J("formControl",s.formControl)("type",s.props.type||"text")("formlyAttributes",s.field)}}function it(l,g){if(1&l&&e._UZ(0,"nz-input-number",3),2&l){const s=e.oxw();e.Q6J("formControl",s.formControl)("formlyAttributes",s.field)}}let It=(()=>{class l extends _.fS{}return l.\u0275fac=function(){let g;return function(p){return(g||(g=e.n5z(l)))(p||l)}}(),l.\u0275cmp=e.Xpm({type:l,selectors:[["formly-field-nz-input"]],features:[e.qOj],decls:3,vars:2,consts:[["nz-input","",3,"formControl","type","formlyAttributes",4,"ngIf","ngIfElse"],["numberTmp",""],["nz-input","",3,"formControl","type","formlyAttributes"],[3,"formControl","formlyAttributes"]],template:function(s,p){if(1&s&&(e.YNc(0,Ne,1,3,"input",0),e.YNc(1,it,1,2,"ng-template",null,1,e.W1O)),2&s){const O=e.MAs(2);e.Q6J("ngIf","number"!==p.props.type)("ngIfElse",O)}},dependencies:[lt,a.O5,I.Zp,t.Fj,t.JJ,t.oH,_.JD],encapsulation:2,changeDetection:0}),l})(),sn=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[[a.ez,t.UX,I.o7,Me,F,_.X0.forChild({types:[{name:"input",component:It,wrappers:["form-field"]},{name:"string",extends:"input"},{name:"number",extends:"input",defaultOptions:{props:{type:"number"}}},{name:"integer",extends:"input",defaultOptions:{props:{type:"number"}}}]})]]}),l})(),En=(()=>{class l extends _.fS{}return l.\u0275fac=function(){let g;return function(p){return(g||(g=e.n5z(l)))(p||l)}}(),l.\u0275cmp=e.Xpm({type:l,selectors:[["formly-field-nz-textarea"]],features:[e.qOj],decls:1,vars:2,consts:[["nz-input","",3,"formControl","formlyAttributes"]],template:function(s,p){1&s&&e._UZ(0,"textarea",0),2&s&&e.Q6J("formControl",p.formControl)("formlyAttributes",p.field)},dependencies:[I.Zp,t.Fj,t.JJ,t.oH,_.JD],encapsulation:2,changeDetection:0}),l})(),ht=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[[a.ez,t.UX,I.o7,F,_.X0.forChild({types:[{name:"textarea",component:En,wrappers:["form-field"]}]})]]}),l})();var ot=c(5592),Be=c(5619),vt=c(2181),St=c(9397);let Ut=(()=>{class l{transform(s,p){return s instanceof ot.y?this.dispose():s=this.observableOf(s,p),s.pipe((0,S.U)(O=>this.transformOptions(O,p)))}ngOnDestroy(){this.dispose()}transformOptions(s,p){const O=this.transformSelectProps(p),Ce=[],ft={};return s?.forEach(vn=>{const Sn=this.transformOption(vn,O);if(Sn.group){const yo=ft[Sn.label];void 0===yo?ft[Sn.label]=Ce.push(Sn)-1:Sn.group.forEach(fi=>Ce[yo].group.push(fi))}else Ce.push(Sn)}),Ce}transformOption(s,p){const O=p.groupProp(s);return Array.isArray(O)?{label:p.labelProp(s),group:O.map(Ce=>this.transformOption(Ce,p))}:(s={label:p.labelProp(s),value:p.valueProp(s),disabled:!!p.disabledProp(s)},O?{label:O,group:[s]}:s)}transformSelectProps(s){const p=s?.props||s?.templateOptions||{},O=Ce=>"function"==typeof Ce?Ce:ft=>ft[Ce];return{groupProp:O(p.groupProp||"group"),labelProp:O(p.labelProp||"label"),valueProp:O(p.valueProp||"value"),disabledProp:O(p.disabledProp||"disabled")}}dispose(){this._options&&(this._options.complete(),this._options=null),this._subscription&&(this._subscription.unsubscribe(),this._subscription=null)}observableOf(s,p){return this.dispose(),p&&p.options&&p.options.fieldChanges&&(this._subscription=p.options.fieldChanges.pipe((0,vt.h)(({property:O,type:Ce,field:ft})=>"expressionChanges"===Ce&&(0===O.indexOf("templateOptions.options")||0===O.indexOf("props.options"))&&ft===p&&Array.isArray(ft.props.options)&&!!this._options),(0,St.b)(()=>this._options.next(p.props.options))).subscribe()),this._options=new Be.X(s),this._options.asObservable()}}return l.\u0275fac=function(s){return new(s||l)},l.\u0275pipe=e.Yjl({name:"formlySelectOptions",type:l,pure:!0}),l})(),Ht=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({}),l})();var Ge=c(7907);function J(l,g){if(1&l&&(e.TgZ(0,"label",2),e._uU(1),e.qZA()),2&l){const s=g.$implicit;e.Q6J("nzValue",s.value)("nzDisabled",s.disabled),e.xp6(1),e.hij(" ",s.label," ")}}let k=(()=>{class l extends _.fS{}return l.\u0275fac=function(){let g;return function(p){return(g||(g=e.n5z(l)))(p||l)}}(),l.\u0275cmp=e.Xpm({type:l,selectors:[["formly-field-nz-radio"]],features:[e.qOj],decls:4,vars:7,consts:[[3,"formControl","ngModelChange"],["nz-radio","",3,"nzValue","nzDisabled",4,"ngFor","ngForOf"],["nz-radio","",3,"nzValue","nzDisabled"]],template:function(s,p){1&s&&(e.TgZ(0,"nz-radio-group",0),e.NdJ("ngModelChange",function(Ce){return p.props.change&&p.props.change(p.field,Ce)}),e.YNc(1,J,2,3,"label",1),e.ALo(2,"async"),e.ALo(3,"formlySelectOptions"),e.qZA()),2&s&&(e.Q6J("formControl",p.formControl),e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,2,e.xi3(3,4,p.props.options,p.field))))},dependencies:[Ge.Dg,Ge.Of,t.JJ,t.oH,a.sg,a.Ov,Ut],encapsulation:2,changeDetection:0}),l})(),Z=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[[a.ez,t.UX,Ge.aF,F,Ht,_.X0.forChild({types:[{name:"radio",component:k,wrappers:["form-field"]}]})]]}),l})();var ye=c(2612);let _t=(()=>{class l extends _.fS{constructor(){super(...arguments),this.defaultOptions={props:{indeterminate:!0,hideLabel:!0}}}}return l.\u0275fac=function(){let g;return function(p){return(g||(g=e.n5z(l)))(p||l)}}(),l.\u0275cmp=e.Xpm({type:l,selectors:[["formly-field-nz-checkbox"]],features:[e.qOj],decls:2,vars:4,consts:[["nz-checkbox","",3,"nzIndeterminate","formControl","formlyAttributes","ngModelChange"]],template:function(s,p){1&s&&(e.TgZ(0,"label",0),e.NdJ("ngModelChange",function(Ce){return p.props.change&&p.props.change(p.field,Ce)}),e._uU(1),e.qZA()),2&s&&(e.Q6J("nzIndeterminate",p.props.indeterminate&&null==p.formControl.value)("formControl",p.formControl)("formlyAttributes",p.field),e.xp6(1),e.hij(" ",p.props.label," "))},dependencies:[ye.Ie,t.JJ,t.oH,_.JD],encapsulation:2,changeDetection:0}),l})(),qe=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[[a.ez,t.UX,ye.Wr,F,_.X0.forChild({types:[{name:"checkbox",component:_t,wrappers:["form-field"]},{name:"boolean",extends:"checkbox"}]})]]}),l})();var He=c(9691);function Xe(l,g){if(1&l&&e._UZ(0,"nz-option",6),2&l){const s=g.$implicit;e.Q6J("nzValue",s.value)("nzDisabled",s.disabled)("nzLabel",s.label)}}function At(l,g){if(1&l&&(e.TgZ(0,"nz-option-group",4),e.YNc(1,Xe,1,3,"nz-option",5),e.qZA()),2&l){const s=e.oxw().$implicit;e.Q6J("nzLabel",s.label),e.xp6(1),e.Q6J("ngForOf",s.group)}}function zt(l,g){if(1&l&&e._UZ(0,"nz-option",6),2&l){const s=e.oxw().$implicit;e.Q6J("nzValue",s.value)("nzDisabled",s.disabled)("nzLabel",s.label)}}function mn(l,g){if(1&l&&(e.ynx(0),e.YNc(1,At,2,2,"nz-option-group",2),e.YNc(2,zt,1,3,"nz-option",3),e.BQk()),2&l){const s=g.$implicit;e.xp6(1),e.Q6J("ngIf",s.group),e.xp6(1),e.Q6J("ngIf",!s.group)}}let Qe=(()=>{class l extends _.fS{}return l.\u0275fac=function(){let g;return function(p){return(g||(g=e.n5z(l)))(p||l)}}(),l.\u0275cmp=e.Xpm({type:l,selectors:[["formly-field-nz-select"]],features:[e.qOj],decls:4,vars:12,consts:[[3,"nzPlaceHolder","formControl","formlyAttributes","nzMode","ngModelChange"],[4,"ngFor","ngForOf"],[3,"nzLabel",4,"ngIf"],[3,"nzValue","nzDisabled","nzLabel",4,"ngIf"],[3,"nzLabel"],[3,"nzValue","nzDisabled","nzLabel",4,"ngFor","ngForOf"],[3,"nzValue","nzDisabled","nzLabel"]],template:function(s,p){1&s&&(e.TgZ(0,"nz-select",0),e.NdJ("ngModelChange",function(Ce){return p.props.change&&p.props.change(p.field,Ce)}),e.YNc(1,mn,3,2,"ng-container",1),e.ALo(2,"async"),e.ALo(3,"formlySelectOptions"),e.qZA()),2&s&&(e.ekj("ng-dirty",p.showError),e.Q6J("nzPlaceHolder",p.props.placeholder)("formControl",p.formControl)("formlyAttributes",p.field)("nzMode",p.props.multiple?"multiple":"default"),e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,7,e.xi3(3,9,p.props.options,p.field))))},dependencies:[He.Vq,He.Yy,He.Ip,t.JJ,t.oH,_.JD,a.sg,a.O5,a.Ov,Ut],encapsulation:2,changeDetection:0}),l})(),rt=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[[a.ez,t.UX,He.LV,F,Ht,_.X0.forChild({types:[{name:"select",component:Qe,wrappers:["form-field"]},{name:"enum",extends:"select"}]})]]}),l})(),se=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[[F,sn,ht,Z,qe,rt]]}),l})();var _e=c(279);function pt(l,g){return(0,ze.x)((s,p)=>g?g(s[l],p[l]):s[l]===p[l])}const we={paramKey:!0};class nt{constructor(g){this.route=g}postPopulate(g){if(g.fieldGroup||g.fieldArray||!1===(g.props||{...we}).paramKey||(this.paramKey=this.getParamKey(g),!this.paramKey))return;const p=this.getRouteSub(this.route,g),O=g.hooks?.onDestroy;p&&O&&(g.hooks={...g.hooks,onDestroy:Ce=>{p.unsubscribe(),O(Ce)}})}getParamKey(g){const s=g.props;if("string"==typeof s.paramKey)return s.paramKey;if(g.key){if("string"==typeof g.key)return g.key;console.warn(`observe-query-param cannot use field key ${JSON.stringify(g.key)} of type ${typeof g.key} to observe a query param. Use prop.paramKey to specify a query param string, or define a string field.key.`)}}getRouteSub(g,s){const p=g.queryParams.pipe(pt(this.paramKey)).subscribe(O=>{const Ce=s.formControl,ft=O[this.paramKey];if(!ft)return void p.unsubscribe();let vn;try{vn=JSON.parse(ft)}catch(Sn){return console.warn(`observe-query-param failed to parse query param ${this.paramKey} for field ${s.id}: ${Sn}`),console.warn("Note: Query values are parsed as JSON, therefore enum strings must be enclosed in double-quotes, and numeric entity IDs must be bare, unquoted."),void p.unsubscribe()}if(vn){if(Object.keys(vn).length>0&&vn.constructor===Object)return console.warn(`observe-query-param may only set primitive types or arrays of primitive types, param ${this.paramKey} is an object: ${JSON.stringify(vn)}`),void p.unsubscribe();Ce.setValue(vn)}});return p}}function kt(l){return{extensions:[{name:"observeQueryParam",extension:new nt(l)}]}}const ct={extras:{immutable:!1,lazyRender:!0},validationMessages:[{name:"required",message:"This field is required."},{name:"minLength",message:(l,g)=>`This field has a minimum length of ${g.templateOptions?.minLength}.`},{name:"maxLength",message:(l,g)=>`This field has a maximum length of ${g.templateOptions?.maxLength}.`},{name:"min",message:(l,g)=>`This field has a minimum value of ${g.templateOptions?.min}.`},{name:"max",message:(l,g)=>`This field has a maximum value of ${g.templateOptions?.max}.`},{name:"pattern",message:(l,g)=>`This field's value must fit the pattern ${g.templateOptions?.pattern}.`},{name:"integer",message:(l,g)=>"Value must be an integer."},{name:"nucleotide",message:(l,g)=>"Value must only contain A, C, T, G, and/or /."},{name:"clinvar",message:(l,g)=>"Value must be an integer."}],validators:[{name:"integer",validation:(l,g)=>""===l.value||null==l.value||/^\d+$/.test(l.value)?null:{integer:!0}},{name:"nucleotide",validation:(l,g)=>""===l.value||null==l.value||/^[ACTG\/]+$/.test(l.value)?null:{nucleotide:!0}},{name:"clinvar",validation:(l,g)=>{for(var s of l.value)if(""!==s&&null!=s&&!/^\d+$/.test(s))return{clinvar:!0};return null}}]};var tt=c(2524),X=c(2392),H=c(5717),Te=c(188),Re=c(2574),yt=c(3903),Xt=c(6987);let jt=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[a.ez,t.UX,_.X0.forChild(),yt.L,ue.PV,He.LV,I.o7,N.U5,X.ZJ,H.ic,Re.zf,Xt.S,Te.x,tt.s]}),l})();var An=c(5695);let Tn=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[a.ez,ue.PV,An.X,tt.s]}),l})();const so=function(l,g){return{disabled:l,error:g}};function Bo(l,g){if(1&l&&(e.ynx(0),e.TgZ(1,"nz-form-label",6),e._UZ(2,"span",7),e.qZA(),e.BQk()),2&l){const s=e.oxw();e.xp6(1),e.Q6J("ngClass",e.WLB(6,so,s.props.disabled,s.showError))("nzRequired",s.props.required)("nzFor",s.id)("nzTooltipTitle",s.props.tooltip)("nzNoColon",!0),e.xp6(1),e.Q6J("nzContent",s.props.label)}}function xo(l,g){if(1&l&&e._UZ(0,"span",13),2&l){const s=e.oxw(2);e.Q6J("innerHTML",s.props.description,e.oJD)}}function ii(l,g){if(1&l&&e._UZ(0,"span",14),2&l){const s=e.oxw(2);e.Q6J("innerHTML",s.props.description,e.oJD)}}function li(l,g){if(1&l&&e._UZ(0,"span",15),2&l){const s=e.oxw(2);e.Q6J("innerHTML",s.props.description,e.oJD)}}function mi(l,g){if(1&l&&(e.TgZ(0,"div",8),e.ynx(1,9),e.YNc(2,xo,1,1,"span",10),e.YNc(3,ii,1,1,"span",11),e.YNc(4,li,1,1,"span",12),e.BQk(),e.qZA()),2&l){const s=e.oxw();e.xp6(1),e.Q6J("ngSwitch",s.props.extraType),e.xp6(1),e.Q6J("ngSwitchCase","prompt"),e.xp6(1),e.Q6J("ngSwitchCase","description")}}function Ao(l,g){if(1&l&&e._UZ(0,"formly-validation-message",18),2&l){const s=e.oxw(2);e.Q6J("field",s.field)}}function Xn(l,g){if(1&l&&(e.TgZ(0,"div",16),e.YNc(1,Ao,1,1,"formly-validation-message",17),e.qZA()),2&l){const s=e.oxw();e.xp6(1),e.Q6J("ngIf",s.props.showErrorTip)}}const ui=function(l,g,s,p){return{disabled:l,error:g,required:s,valid:p}},ri={};let Zo=(()=>{class l extends _.n2{get errorState(){return this.showError?"error":""}constructor(s){super(),this.cdr=s,this.formLayout="vertical",this.wrapperOptions={...ri}}ngOnInit(){this.props.showExtra=this.props.showExtra??!0,this.props.extraType=this.props.extraType??"prompt",this.props.showErrorTip=this.props.showErrorTip??!0,this.props.formFieldOptions&&(this.wrapperOptions={...this.wrapperOptions,...this.props.formFieldOptions}),this.options.formState.formLayout&&(this.formLayout=this.options.formState.formLayout)}ngAfterViewInit(){this.cdr.detectChanges()}}return l.\u0275fac=function(s){return new(s||l)(e.Y36(e.sBO))},l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-form-field-wrapper"]],hostVars:6,hostBindings:function(s,p){2&s&&e.ekj("layout-horizontal","horizontal"===p.formLayout)("layout-vertical","vertical"===p.formLayout)("layout-inline","inline"===p.formLayout)},features:[e.qOj],decls:9,vars:10,consts:[[3,"ngClass"],[4,"ngIf"],[3,"nzExtra","nzValidateStatus","nzErrorTip"],["fieldComponent",""],["descriptionTpl",""],["errorTpl",""],[3,"ngClass","nzRequired","nzFor","nzTooltipTitle","nzNoColon"],["nz-typography","","nzEllipsis","",1,"label",3,"nzContent"],[1,"form-field-description"],[3,"ngSwitch"],["class","extra-prompt",3,"innerHTML",4,"ngSwitchCase"],["class","extra-description",3,"innerHTML",4,"ngSwitchCase"],[3,"innerHTML",4,"ngSwitchDefault"],[1,"extra-prompt",3,"innerHTML"],[1,"extra-description",3,"innerHTML"],[3,"innerHTML"],[1,"cvc-form-field-validation"],[3,"field",4,"ngIf"],[3,"field"]],template:function(s,p){if(1&s&&(e.TgZ(0,"nz-form-item",0),e.YNc(1,Bo,3,9,"ng-container",1),e.TgZ(2,"nz-form-control",2),e.GkF(3,null,3),e.qZA()(),e.YNc(5,mi,5,3,"ng-template",null,4,e.W1O),e.YNc(7,Xn,2,1,"ng-template",null,5,e.W1O)),2&s){const O=e.MAs(6),Ce=e.MAs(8);e.Q6J("ngClass",e.l5B(5,ui,p.props.disabled,p.showError,p.props.required,"VALID"===p.field.formControl.status&&!0===p.field.formControl.touched)),e.xp6(1),e.Q6J("ngIf",p.props.label&&!0!==p.props.hideLabel),e.xp6(1),e.Q6J("nzExtra",p.props.showExtra&&!p.showError?O:void 0)("nzValidateStatus",p.errorState)("nzErrorTip",Ce)}},dependencies:[a.mk,a.O5,a.RF,a.n9,a.ED,R.t3,R.SK,N.Nx,N.iK,N.Fd,X.ZU,_.M2],styles:['.typeahead-match[_ngcontent-%COMP%]{font-weight:700}.hide-dropdown[_ngcontent-%COMP%]{display:none}[_nghost-%COMP%] > nz-form-item[_ngcontent-%COMP%]{border-radius:4px;margin-top:8px;margin-bottom:0}[_nghost-%COMP%] > nz-form-item[_ngcontent-%COMP%] > nz-form-label[_ngcontent-%COMP%]   span.label[_ngcontent-%COMP%]{color:#096dd9}[_nghost-%COMP%] > nz-form-item[_ngcontent-%COMP%] > nz-form-label[_ngcontent-%COMP%]     span.anticon{margin-left:.25em}[_nghost-%COMP%] > nz-form-item[_ngcontent-%COMP%] > nz-form-label[_ngcontent-%COMP%]     span.anticon path{color:#69c0ff}[_nghost-%COMP%] > nz-form-item[_ngcontent-%COMP%]   .form-row-wrapped[_nghost-%COMP%] > nz-form-item[_ngcontent-%COMP%], .form-row-wrapped   [_nghost-%COMP%] > nz-form-item[_ngcontent-%COMP%]{margin-top:0;margin-bottom:0}[_nghost-%COMP%] > nz-form-item.required[_ngcontent-%COMP%] > nz-form-label[_ngcontent-%COMP%]     label:before{border:1px solid #096dd9;height:1em;content:""}[_nghost-%COMP%] > nz-form-item.required[_ngcontent-%COMP%] > nz-form-label[_ngcontent-%COMP%]     label span.label{color:#096dd9;font-weight:600}[_nghost-%COMP%] > nz-form-item.required[_ngcontent-%COMP%] > nz-form-label[_ngcontent-%COMP%]     label   span.anticon path{color:#40a9ff}[_nghost-%COMP%] > nz-form-item.error[_ngcontent-%COMP%] > nz-form-label[_ngcontent-%COMP%]     label:before{border-color:#cf1322}[_nghost-%COMP%] > nz-form-item.error[_ngcontent-%COMP%] > nz-form-label[_ngcontent-%COMP%]     label span.label{color:#cf1322}[_nghost-%COMP%] > nz-form-item.error[_ngcontent-%COMP%] > nz-form-label[_ngcontent-%COMP%]     label   span.anticon path{color:#ff4d4f}[_nghost-%COMP%] > nz-form-item.valid[_ngcontent-%COMP%] > nz-form-label[_ngcontent-%COMP%]     label:before{border-color:#389e0d}[_nghost-%COMP%] > nz-form-item.valid[_ngcontent-%COMP%] > nz-form-label[_ngcontent-%COMP%]     label span.label{color:#389e0d}[_nghost-%COMP%] > nz-form-item.valid[_ngcontent-%COMP%] > nz-form-label[_ngcontent-%COMP%]     label   span.anticon path{color:#73d13d}[_nghost-%COMP%] > nz-form-item.disabled[_ngcontent-%COMP%] > nz-form-label[_ngcontent-%COMP%]     label:before{border-color:#00000073}[_nghost-%COMP%] > nz-form-item.disabled[_ngcontent-%COMP%] > nz-form-label[_ngcontent-%COMP%]     label span.label{color:#00000073}[_nghost-%COMP%] > nz-form-item.disabled[_ngcontent-%COMP%] > nz-form-label[_ngcontent-%COMP%]     label   span.anticon path{color:#d9d9d9}.layout-vertical[_nghost-%COMP%] > nz-form-item[_ngcontent-%COMP%]{background-color:#e6f7ff;border:1px solid #e6f7ff;padding:4px 8px}.layout-vertical[_nghost-%COMP%] > nz-form-item.required[_ngcontent-%COMP%]{background-color:#e6f7ff;border:1px solid #69c0ff}.layout-vertical[_nghost-%COMP%] > nz-form-item.error[_ngcontent-%COMP%]{background-color:#fff1f0;border:1px solid #ff7875}.layout-vertical[_nghost-%COMP%] > nz-form-item.valid[_ngcontent-%COMP%]{background-color:#f6ffed;border:1px solid #95de64}.layout-vertical[_nghost-%COMP%] > nz-form-item.disabled[_ngcontent-%COMP%]{background-color:#f5f5f5;border:1px solid #f5f5f5}.cvc-form-field-validation[_ngcontent-%COMP%], .form-field-description[_ngcontent-%COMP%]{min-height:16px;line-height:1.2;margin-top:4px}.cvc-form-field-validation[_ngcontent-%COMP%]   .extra-prompt[_ngcontent-%COMP%], .form-field-description[_ngcontent-%COMP%]   .extra-prompt[_ngcontent-%COMP%]{font-weight:400}.cvc-form-field-validation[_ngcontent-%COMP%]   .extra-description[_ngcontent-%COMP%], .form-field-description[_ngcontent-%COMP%]   .extra-description[_ngcontent-%COMP%]{font-style:oblique}.cvc-form-field-validation[_ngcontent-%COMP%]{font-weight:600}'],changeDetection:0}),l})();var eo=c(6109);const Si={wrappers:[{name:"form-field",component:Zo}]};let Lo=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[a.ez,t.UX,N.U5,eo.cg,X.ZJ,_.X0.forChild(Si)]}),l})();var To=c(2840),_i=c(67),Wo=c(7417),Oi=c(2),zn=c(1791),si=c(4223);function ko(){var l;let g=((l=class extends _.fS{configureBaseField(){this.field?.options?.fieldChanges?(this.onModelChange$=this.field.options.fieldChanges.pipe((0,vt.h)(p=>p.field.id===this.field.id),(0,si.j)("value")),this.formControl.value?(this.onValueChange$=new Be.X(this.formControl.value),Array.isArray(this.formControl.value)?this.field.formControl.value.length>0&&this.formControl.markAsTouched():this.formControl.markAsTouched()):this.onValueChange$=new Be.X(void 0),this.onModelChange$.pipe((0,zn.t)(this)).subscribe(p=>{this.onValueChange$.next(p)}),this.field.options?.formState&&this.field.options.formState.fields&&(this.state=this.field.options.formState,this.autoConfigureStateValueChanges())):console.error(`${this.field.id} could not find its fieldChanges Observable, ensure configureBaseField() is called in this field's AfterViewInit hook.`)}autoConfigureStateValueChanges(){!this.field.key&&"string"==typeof this.field.key&&console.warn(`${this.field.id} cannot auto-configure state value changes, as its field key is not a string. field.key: `,this.field.key);const p=`${this.field.key}$`;this.state&&this.state.fields[p]?(this.stateValueChange$=this.state.fields[p],this.onValueChange$.pipe((0,S.U)(O=>null===O?void 0:O),(0,zn.t)(this)).subscribe(O=>{this.stateValueChange$&&this.stateValueChange$.next(O)})):console.warn(`${this.field.id} could not find state field ${p} on form state. State: `,this.state)}}).\u0275fac=function(){let s;return function(O){return(s||(s=e.n5z(l)))(O||l)}}(),l.\u0275prov=e.Yz7({token:l,factory:l.\u0275fac}),l);return g=(0,V.gn)([(0,zn.c)()],g),g}var Qi=c(7328),Ei=c(836),ni=c(2460),Gi=c(2096),dr=c(9666),pr=c(2428),co=c(4911),No=c(5676),Do=c(2572);function Ti(...l){let g=l[0],s=l[1];if(0===g.length)return(0,Gi.of)(s?s([]):[]);const p=g.slice();return s&&p.push((...O)=>s(O)),Do.a.apply(null,p)}function Oo(){return function(g){return(()=>{class p extends g{configureEntitySelectField(Ce){if(this.typeaheadQuery=Ce.typeaheadQuery,this.tagQuery=Ce.tagQuery,this.getTypeaheadVars=Ce.getTypeaheadVarsFn,this.getTypeahedResults=Ce.getTypeaheadResultsFn,this.getTagQueryVars=Ce.getTagQueryVarsFn,this.getTagQueryResults=Ce.getTagQueryResultsFn,this.getSelectedItemOption=Ce.getSelectedItemOptionFn,this.getSelectOptions=Ce.getSelectOptionsFn,this.typeaheadParam$=Ce.typeaheadParam$,this.typeaheadParamName$=Ce.typeaheadParamName$,this.selectOpen$=Ce.selectOpen$||new Qi.t,this.selectComponent=Ce.selectComponent,this.minSearchStrLength=Ce.minSearchStrLength||0,this.cdr=Ce.changeDetectorRef,this.onSearch$=new Be.X(void 0),this.isLoading$=new ot.y,this.result$=new Be.X([]),this.onPopulate$=new E.x,this.onTagClose$=new E.x,this.onOpenChange$=new E.x,this.onCreate$=new E.x,this.selectOption$=new Be.X(void 0),this.response$=this.onSearch$.pipe((0,Ei.T)(1),(0,vt.h)(No.ep),(0,vt.h)(ft=>0===this.minSearchStrLength||ft.length>=this.minSearchStrLength),(0,ni.M)(void 0!==this.typeaheadParam$?this.typeaheadParam$:(0,Gi.of)(void 0)),(0,L.w)(([ft,vn])=>{const Sn=this.getTypeaheadVars(ft,vn),yo=Ii=>(this.queryRef=this.typeaheadQuery.watch(Ii),this.isLoading$=this.queryRef.valueChanges.pipe((0,si.j)("loading"),(0,ze.x)()),this.queryRef.valueChanges),fi=Ii=>(0,dr.D)(this.queryRef.refetch(Ii));return(0,pr.s)(()=>void 0===this.queryRef,(0,co.P)(()=>yo(Sn)),(0,co.P)(()=>fi(Sn)))})),this.onOpenChange$.subscribe(ft=>{ft&&this.onSearch$.next("")}),this.response$.pipe((0,vt.h)(ft=>void 0!==ft.data),(0,S.U)(ft=>this.getTypeahedResults(ft)),(0,zn.t)(this)).subscribe(ft=>{this.result$.next(ft),0===ft.length&&this.selectOption$.next([]),this.cdr.detectChanges()}),this.optionTemplates?this.optionTemplates.changes.pipe((0,ni.M)(this.result$),(0,zn.t)(this)).subscribe(([ft,vn])=>{const Sn=this.getSelectOptions(vn,ft);this.selectOption$.next(Sn),this.cdr.detectChanges()}):(console.warn(`${this.field.id} could not find reference to optionTemplates ViewChildren, options will only show entity name text.`),this.result$.pipe((0,zn.t)(this)).subscribe(ft=>{this.selectOption$.next(ft.map(vn=>({label:vn.name,value:vn.id})))})),this.onPopulate$.pipe((0,vt.h)(No.ep),(0,L.w)(ft=>Ti(this.getTagQueries(ft))),(0,S.U)(ft=>ft.map(vn=>this.getTagQueryResults(vn))),(0,St.b)(ft=>{this.result$.next(ft)}),(0,zn.t)(this)).subscribe(ft=>{let vn;if(this.field.props&&this.field.props.isMultiSelect){const Sn=[];ft.forEach(yo=>Sn.push(yo?.id||void 0)),vn=Sn}else vn=ft[0].id;this.formControl.setValue(vn),this.selectOpen$.next(!1)}),this.formControl.value){const ft=this.formControl.value;if(Object.keys(ft).length>0&&ft.constructor===Object)return void console.error(`${this.field.id} prepopulated value must be a primitive or array of primitives, value is an object:`,ft);this.onPopulate$.next(ft)}this.onTagClose$.pipe((0,zn.t)(this)).subscribe(ft=>{this.resetField()})}getTagQueries(Ce){return"number"==typeof Ce&&(Ce=[Ce]),Ce.map(vn=>this.tagQuery.fetch(this.getTagQueryVars(vn),{fetchPolicy:"cache-first"}).pipe((0,vt.h)(Sn=>!!Sn.data)))}resetField(){this.formControl.setValue(void 0),this.result$&&this.result$.next([])}}return p.\u0275fac=function(){let O;return function(ft){return(O||(O=e.n5z(p)))(ft||p)}}(),p.\u0275prov=e.Yz7({token:p,factory:p.\u0275fac}),p})()}}const bo=function nr(l){for(var g=arguments.length,s=new Array(g>1?g-1:0),p=1;p<g;p++)s[p-1]=arguments[p];return s.reduce(function(O,Ce){return Ce(O)},l)};var to,Fn=c(313),lo=c(8091),Ri=c(8753),Xo=c(6321),jn=c(7081);function Ve(l,g){1&l&&e._UZ(0,"span",5),2&l&&e.Q6J("nzType","loading")}function oe(l,g){if(1&l&&(e.YNc(0,Ve,1,1,"span",4),e.ynx(1),e._uU(2),e.BQk()),2&l){const s=e.oxw().ngrxLet;e.Q6J("ngIf",s.showSpinner),e.xp6(2),e.hij(" ",s.message," ")}}const De=function(l,g,s){return{$implicit:l,createMsg:g,model:s}};function $e(l,g){if(1&l&&(e._UZ(0,"nz-divider"),e.TgZ(1,"div",6),e.GkF(2,7),e.qZA()),2&l){const s=e.oxw().ngrxLet,p=e.oxw();e.xp6(2),e.Q6J("ngTemplateOutlet",p.cvcAddEntity)("ngTemplateOutletContext",e.kEZ(2,De,s.searchStr,s.message,p.cvcAddEntityModel))}}const Ct=function(){return[]};function Nt(l,g){if(1&l){const s=e.EpF();e.ynx(0),e.TgZ(1,"nz-select",1),e.NdJ("nzOpenChange",function(O){e.CHM(s);const Ce=e.oxw();return e.KtG(Ce.onOpenChange$.next(O))})("nzOnSearch",function(O){e.CHM(s);const Ce=e.oxw();return e.KtG(Ce.cvcOnSearch.next(O))})("ngModelChange",function(O){e.CHM(s);const Ce=e.oxw();return e.KtG(Ce.cvcOnModelChange.next(O))}),e.qZA(),e.YNc(2,oe,3,2,"ng-template",null,2,e.W1O),e.YNc(4,$e,3,6,"ng-template",null,3,e.W1O),e.BQk()}if(2&l){const s=g.ngrxLet,p=e.MAs(3),O=e.MAs(5),Ce=e.oxw();e.xp6(1),e.ekj("ng-dirty",Ce.cvcShowError),e.Q6J("nzDropdownMatchSelectWidth",!0)("formControl",Ce.cvcFormControl)("formlyAttributes",Ce.cvcFormlyAttributes)("nzMode",Ce.cvcSelectMode)("nzPlaceHolder",Ce.cvcPlaceholder||"Search "+Ce.cvcEntityName.plural)("nzCustomTemplate",Ce.cvcCustomTemplate||null)("nzOptionHeightPx",30)("nzDisabled",Ce.cvcDisabled)("nzLoading",Ce.cvcLoading)("nzAllowClear",Ce.cvcAllowClear)("nzBorderless",Ce.cvcBorderless)("nzSuffixIcon",Ce.cvcSuffixIcon)("nzShowArrow",Ce.cvcShowArrow)("nzAutoClearSearchValue",Ce.cvcAutoClearSearchValue)("nzOptions",Ce.cvcOptions||e.DdM(20,Ct))("nzDropdownRender",s.showAddForm?O:null)("nzNotFoundContent",p)("nzOpen",Ce.cvcSelectOpen)}}const Jt={search:(l,g,s)=>`Searching ${l} matching "${g}"...`,searchAll:(l,g,s)=>`Listing all ${l}...`,searchParam:(l,g,s)=>`Searching ${s} ${l} matching "${g}"...`,searchParamAll:(l,g,s)=>`Listing all ${s} ${l}...`,searchEnterQuery:(l,g,s,p)=>`Enter at least ${p} characters to search ${s} ${l}`,searchEnterQueryAll:(l,g,s,p)=>`Enter at least least ${p} characters to search ${l}`,empty:(l,g,s)=>`No ${l} found matching "${g}"`,emptyAll:(l,g,s)=>`No ${l} found.`,emptyParam:(l,g,s)=>`No ${s} ${l} found matching "${g}"`,emptyParamAll:(l,g,s)=>`No ${s} ${l} found`};let an=((to=class{constructor(){this.cvcEntityName={singular:"Entity",plural:"Entities"},this.cvcSelectMode="default",this.cvcLoading=!1,this.cvcOptions=void 0,this.cvcShowError=!1,this.cvcDisabled=!1,this.cvcAllowClear=!0,this.cvcBorderless=!1,this.cvcShowArrow=!1,this.cvcAutoClearSearchValue=!0,this.cvcSuffixIcon="search",this.cvcCustomTemplate=null,this.cvcAddEntity=null,this.cvcMinSearchStrLength=0,this.cvcAddEntityBehavior=(g,s)=>g.length>this.cvcMinSearchStrLength&&0===s.length,this.cvcOnOpenChange=new e.vpe,this.cvcOnSearch=(new e.vpe).pipe((0,Ri.p)(300,Xo.z,{leading:!1,trailing:!0}),(0,jn.d)(1)),this.cvcOnModelChange=new e.vpe,this.cvcSelectComponent=new e.vpe,this.messageOptions=Jt,this.onParamName$=new Be.X(void 0),this.onOption$=new Be.X([]),this.onOpenChange$=new Be.X(!1),this.onLoading$=new Be.X(!1),this.notFoundDisplay$=new Be.X({searchStr:"",showSpinner:!0,showAddForm:!1,message:`Searching ${this.cvcEntityName.plural}...`}),this.previousIsOpen=!1}ngAfterViewInit(){this.cvcSelectMessages&&(this.messageOptions={...this.messageOptions,...this.cvcSelectMessages}),this.nzSelectComponent?(this.cvcSelectComponent.next(this.nzSelectComponent),this.onOpenChange$.pipe((0,zn.t)(this)).subscribe(g=>{this.cvcOnOpenChange.next(g)}),(0,Do.a)([this.onOpenChange$,this.cvcOnSearch,this.onParamName$,this.onOption$,this.onLoading$.pipe((0,ze.x)())]).pipe((0,S.U)(([g,s,p,O,Ce])=>{const ft=this.cvcEntityName.plural,vn=this.cvcMinSearchStrLength,Sn=null!==this.cvcAddEntity,yo=!1===this.previousIsOpen&&!0===g;if(this.previousIsOpen=g,yo)return this.getSelectInitDisplay(ft,vn,p);if(Ce&&s.length>=vn){const fi=this.cvcAddEntityBehavior(s,this.cvcResults||[]);return this.getSelectSearchingDisplay(s,ft,vn,p,Sn,fi)}return g&&!Ce&&s.length>=vn&&0===O.length?this.getSelectEmptyDisplay(s,ft,p,Sn):{searchStr:"",showSpinner:!1,showAddForm:Sn&&this.cvcAddEntityBehavior(s,this.cvcResults||[]),message:""}}),(0,St.b)(g=>{this.notFoundDisplay$.next(g)}),(0,zn.t)(this)).subscribe()):console.error(`${this.cvcEntityName.singular} entity-select could not gain reference to its nzSelectComponent, aborting AfterViewInit()`)}getSelectInitDisplay(g,s,p){let O=this.messageOptions.searchAll,Ce=!1;return 0==s?(Ce=!0,O=void 0===p?this.messageOptions.searchAll:this.messageOptions.searchParamAll):s>0&&(Ce=!1,O=void 0===p?this.messageOptions.searchEnterQueryAll:this.messageOptions.searchEnterQuery),{message:O(g,"",p,s),showSpinner:Ce,showAddForm:!1,searchStr:""}}getSelectSearchingDisplay(g,s,p,O,Ce,ft=!1){let vn=this.messageOptions.searchAll;return vn=void 0===O?g.length>0?this.messageOptions.search:this.messageOptions.searchAll:g.length>0?this.messageOptions.searchParam:this.messageOptions.searchParamAll,{message:vn(s,g,O),showSpinner:!0,showAddForm:Ce&&ft,searchStr:g}}getSelectEmptyDisplay(g,s,p,O){let Ce=this.messageOptions.empty;return Ce=void 0===p?g.length>0?this.messageOptions.empty:this.messageOptions.emptyAll:g.length>0?this.messageOptions.emptyParam:this.messageOptions.emptyParamAll,{message:Ce(s,g,p),showSpinner:!1,showAddForm:O,searchStr:g}}ngOnChanges(g){if(g.cvcParamName&&this.onParamName$.next(g.cvcParamName.currentValue),g.cvcOptions){const s=g.cvcOptions.currentValue;void 0!==s&&this.onOption$.next(s)}if(g.cvcLoading){const s=g.cvcLoading.currentValue;void 0!==s&&this.onLoading$.next(s)}}}).\u0275fac=function(g){return new(g||to)},to.\u0275cmp=e.Xpm({type:to,selectors:[["cvc-entity-select"]],viewQuery:function(g,s){if(1&g&&e.Gf(He.Vq,5),2&g){let p;e.iGM(p=e.CRH())&&(s.nzSelectComponent=p.first)}},inputs:{cvcFormControl:"cvcFormControl",cvcFormlyAttributes:"cvcFormlyAttributes",cvcEntityName:"cvcEntityName",cvcSelectMessages:"cvcSelectMessages",cvcSelectMode:"cvcSelectMode",cvcPlaceholder:"cvcPlaceholder",cvcLoading:"cvcLoading",cvcOptions:"cvcOptions",cvcResults:"cvcResults",cvcShowError:"cvcShowError",cvcDisabled:"cvcDisabled",cvcAllowClear:"cvcAllowClear",cvcBorderless:"cvcBorderless",cvcShowArrow:"cvcShowArrow",cvcAutoClearSearchValue:"cvcAutoClearSearchValue",cvcSuffixIcon:"cvcSuffixIcon",cvcCustomTemplate:"cvcCustomTemplate",cvcParamName:"cvcParamName",cvcAddEntity:"cvcAddEntity",cvcAddEntityModel:"cvcAddEntityModel",cvcMinSearchStrLength:"cvcMinSearchStrLength",cvcAddEntityBehavior:"cvcAddEntityBehavior",cvcSelectOpen:"cvcSelectOpen"},outputs:{cvcOnOpenChange:"cvcOnOpenChange",cvcOnSearch:"cvcOnSearch",cvcOnModelChange:"cvcOnModelChange",cvcSelectComponent:"cvcSelectComponent"},features:[e.TTD],decls:1,vars:1,consts:[[4,"ngrxLet"],["nzShowSearch","","nzServerSearch","","nzAllowClear","",3,"nzDropdownMatchSelectWidth","formControl","formlyAttributes","nzMode","nzPlaceHolder","nzCustomTemplate","nzOptionHeightPx","nzDisabled","nzLoading","nzAllowClear","nzBorderless","nzSuffixIcon","nzShowArrow","nzAutoClearSearchValue","nzOptions","nzDropdownRender","nzNotFoundContent","nzOpen","nzOpenChange","nzOnSearch","ngModelChange"],["searchMessages",""],["addForm",""],["nz-icon","",3,"nzType",4,"ngIf"],["nz-icon","",3,"nzType"],[1,"add-form-container"],[3,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(g,s){1&g&&e.YNc(0,Nt,6,21,"ng-container",0),2&g&&e.Q6J("ngrxLet",s.notFoundDisplay$)},dependencies:[a.O5,a.tP,t.JJ,t.oH,lo.eJ,_.JD,ue.Ls,He.Vq,Xt.g],styles:["nz-divider[_ngcontent-%COMP%]{margin:4px 0 0}.add-form-container[_ngcontent-%COMP%]{padding:4px 8px 8px}"],changeDetection:0}),to);an=(0,V.gn)([(0,zn.c)({arrayName:"stateSubscriptions"})],an);var Qt=c(9835);const yn=["optionTemplates"];function Rn(l,g){if(1&l&&(e.ynx(0),e.TgZ(1,"em")(2,"span",6),e._uU(3),e.qZA()(),e.BQk()),2&l){const s=e.oxw(2).$implicit;e.xp6(3),e.Oqu(s.description)}}function bn(l,g){if(1&l&&(e.TgZ(0,"nz-tag",5),e._uU(1),e.qZA(),e.TgZ(2,"span",6),e.YNc(3,Rn,4,1,"ng-container",7),e.qZA()),2&l){const s=e.oxw().$implicit;e.xp6(1),e.Oqu(s.code),e.xp6(2),e.Q6J("ngIf",s.description)}}function dn(l,g){1&l&&(e.ynx(0),e.YNc(1,bn,4,2,"ng-template",null,4,e.W1O),e.BQk())}function On(l,g){if(1&l&&(e.ynx(0),e.YNc(1,dn,3,0,"ng-container",3),e.ALo(2,"ngrxPush"),e.BQk()),2&l){const s=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,s.result$))}}function Gn(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"div",8)(1,"cvc-entity-tag",9),e.NdJ("cvcOnClose",function(){const Ce=e.CHM(s).$implicit,ft=e.oxw();return e.KtG(ft.onTagClose$.next(Ce.nzValue))}),e.qZA()()}if(2&l){const s=g.$implicit,p=e.oxw();e.xp6(1),e.Q6J("cvcDisableLink",!0)("cvcHasTooltip",!0)("cvcCacheId","AcmgCode:"+s.nzValue)("cvcContext",p.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",p.props.isMultiSelect?"default":"closeable")}}const Vn=bo(ko(),Oo());let Un=(()=>{class l extends Vn{constructor(s,p,O){super(),this.taq=s,this.tq=p,this.changeDetectorRef=O,this.defaultOptions={props:{entityName:{singular:"ACMG/AMP Code",plural:"ACMG/AMP Codes"},isMultiSelect:!1,requireType:!0,tooltip:"If applicable, please provide evidence criteria from the standards and guidelines for interpretation of sequence variants from ACMG/AMP.",placeholder:"Search ACMG/AMP Codes",requireTypePromptFn:(Ce,ft)=>`Select an ${Ce} Type to search associated ACMG Code(s)`}},this.placeholder$=new Be.X(void 0)}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEntitySelectField({typeaheadQuery:this.taq,typeaheadParam$:void 0,tagQuery:this.tq,getTypeaheadVarsFn:this.getTypeaheadVarsFn,getTypeaheadResultsFn:this.getTypeaheadResultsFn,getTagQueryVarsFn:this.getTagQueryVarsFn,getTagQueryResultsFn:this.getTagQueryResultsFn,getSelectedItemOptionFn:this.getSelectedItemOptionFn,getSelectOptionsFn:this.getSelectOptionsFn,changeDetectorRef:this.changeDetectorRef,selectComponent:this.selectComponent}),this.configurePlaceholders()}configureStateConnections(){if(this.state&&(this.stateEntityName=this.state.entityName,this.state.requires.requiresAcmgCodes$?this.onRequiresAcmgCode$=this.state.requires.requiresAcmgCodes$:console.warn(`${this.field.id} field's form provides a state, but could not find requiresAcmgCodes$ subject to attach.`),this.props.requireType)){const s=`${this.stateEntityName.toLowerCase()}Type$`;this.state.fields[s]?this.onEntityType$=this.state.fields[s]:console.error(`${this.field.id} requireType is true, however form state does not provide Subject ${s}.`)}}configurePlaceholders(){this.placeholder$.next(this.props.placeholders),this.onRequiresAcmgCode$&&this.onEntityType$&&(0,Do.a)([this.onRequiresAcmgCode$,this.onEntityType$]).pipe((0,ze.x)(),(0,zn.t)(this)).subscribe(([s,p])=>{!s&&p?(this.props.required=!1,this.props.disabled=!0,this.props.description=`${(0,Oi.E)(p)} ${this.state.entityName} does not include associated ACMG/AMP Code(s)`,this.props.extraType="prompt",this.resetField(),this.cdr.markForCheck()):this.props.requireType&&!p?(this.props.required=!1,this.props.disabled=!0,this.props.description=this.props.requireTypePromptFn(this.state.entityName,this.props.isMultiSelect),this.props.extraType="prompt"):s?(this.props.required=!0,this.props.disabled=!1,this.props.description='Please provide evidence criteria from the standards and guidelines for interpretation of sequence variants from ACMG/AMP in <a href="https://pubmed.ncbi.nlm.nih.gov/25741868/" target="_blank">Richards et. al. 2015</a>. Review all codes and select each one that applies. If a code is not applied, it is inferred to not be met.',this.props.extraType="description"):(!s&&this.formControl.value||this.props.requireType&&!p&&this.formControl.value)&&this.resetField()})}getTypeaheadVarsFn(s){return{code:s}}getTypeaheadResultsFn(s){return s.data.acmgCodesTypeahead}getTagQueryResultsFn(s){return s.data.acmgCode}getTagQueryVarsFn(s){return{id:s}}getSelectedItemOptionFn(s){return{value:s.id,label:s.code}}getSelectOptionsFn(s,p){return s.map((O,Ce)=>(console.log(O),{label:p.get(Ce)||O.code,value:O.id}))}}return l.\u0275fac=function(s){return new(s||l)(e.Y36(Fn.O2u),e.Y36(Fn.AIY),e.Y36(e.sBO))},l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-acmg-code-select"]],viewQuery:function(s,p){if(1&s&&e.Gf(yn,5,e.Rgc),2&s){let O;e.iGM(O=e.CRH())&&(p.optionTemplates=O)}},features:[e.qOj],decls:9,vars:22,consts:[[3,"cvcSelectMode","cvcCustomTemplate","cvcFormControl","cvcFormlyAttributes","cvcEntityName","cvcPlaceholder","cvcResults","cvcOptions","cvcShowError","cvcDisabled","cvcLoading","cvcOnSearch","cvcOnOpenChange","cvcOnModelChange"],[4,"ngrxLet"],["selectedTemplate",""],[4,"ngFor","ngForOf"],["optionTemplates",""],["nz-tooltip",""],["nz-typography","","nzType","secondary"],[4,"ngIf"],[1,"ant-select-selection-item-content"],[3,"cvcDisableLink","cvcHasTooltip","cvcCacheId","cvcContext","cvcMode","cvcOnClose"]],template:function(s,p){if(1&s&&(e.TgZ(0,"cvc-entity-select",0),e.NdJ("cvcOnSearch",function(Ce){return p.onSearch$.next(Ce)})("cvcOnOpenChange",function(Ce){return p.onOpenChange$.next(Ce)})("cvcOnModelChange",function(Ce){return p.props.change&&p.props.change(p.field,Ce)}),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.ALo(3,"ngrxPush"),e.ALo(4,"ngrxPush"),e.ALo(5,"ngrxPush"),e.qZA(),e.YNc(6,On,3,3,"ng-container",1),e.YNc(7,Gn,2,5,"ng-template",null,2,e.W1O)),2&s){const O=e.MAs(8);e.Q6J("cvcSelectMode",p.props.isMultiSelect?"multiple":"default")("cvcCustomTemplate",O)("cvcFormControl",p.formControl)("cvcFormlyAttributes",p.field)("cvcEntityName",p.props.entityName)("cvcPlaceholder",e.lcZ(1,12,p.placeholder$))("cvcResults",e.lcZ(2,14,p.result$))("cvcOptions",e.lcZ(3,16,p.selectOption$))("cvcShowError",p.showError)("cvcDisabled",p.onRequiresAcmgCode$&&!e.lcZ(4,18,p.onRequiresAcmgCode$))("cvcLoading",e.lcZ(5,20,p.isLoading$)),e.xp6(6),e.Q6J("ngrxLet",p.onSearch$)}},dependencies:[a.sg,a.O5,lo.eJ,eo.SY,X.ZU,An.j,an,Qt.J,lo.fM],changeDetection:0}),l})();const Zn={types:[{name:"acmg-code-select",wrappers:["form-field"],component:Un,defaultOptions:{props:{label:"ACMG/AMP Code"}}},{name:"acmg-code-multi-select",wrappers:["form-field"],component:Un,defaultOptions:{props:{isMultiSelect:!0,label:"ACMG/AMP Code(s)"}}}]};let Co=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[a.ez,t.UX,_.X0.forChild(Zn),yt.L,To.sL,He.LV,Wo.$6,_i.Qp,ue.PV,I.o7,R.Jb,eo.cg,Re.zf,N.U5,H.ic,X.ZJ,An.X,Lo,jt,tt.s,Te.x,Tn]}),l})(),Kn=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[a.ez,t.UX,_.X0.forChild(),ue.PV,N.U5,He.LV,I.o7,tt.s]}),l})();function fo(){return function(g){return(()=>{class p extends g{configureEnumSelectField(Ce){this.selectOption$=new Be.X([]),this.onTagClose$=new E.x,this.optionEnum$=Ce.optionEnum$,this.changeDetectorRef=Ce.changeDetectorRef,this.optionTemplate$=Ce.optionTemplate$?Ce.optionTemplate$:new Be.X([]),this.optionTemplate$.pipe((0,ni.M)(this.optionEnum$),(0,zn.t)(this)).subscribe(ft=>{this.emitSelectOptions(ft)}),this.onTagClose$.pipe((0,zn.t)(this)).subscribe(ft=>{this.resetField()})}emitSelectOptions([Ce,ft]){this.selectOption$.next(ft.map((vn,Sn)=>({label:Ce[Sn]||vn,value:vn}))),this.changeDetectorRef?this.changeDetectorRef.detectChanges():console.error(`${this.field.id}'s configureEnumTagField() requires valid ChangeDetectorRef option, none detected.`)}resetField(){this.formControl.setValue(this.props.isMultiSelect?[]:void 0)}}return p.\u0275fac=function(){let O;return function(ft){return(O||(O=e.n5z(p)))(ft||p)}}(),p.\u0275prov=e.Yz7({token:p,factory:p.\u0275fac}),p})()}}var So=c(3742);const qn=function(){return[]};let wo=(()=>{class l{constructor(){this.cvcSelectMode="default",this.cvcPlaceholder="Select an option",this.cvcOptions=[],this.cvcShowError=!1,this.cvcDisabled=!1,this.cvcAllowClear=!0,this.cvcCustomTemplate=null,this.cvcOnFocus=new e.vpe}}return l.\u0275fac=function(s){return new(s||l)},l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-enum-select"]],inputs:{cvcFormControl:"cvcFormControl",cvcFormlyAttributes:"cvcFormlyAttributes",cvcSelectMode:"cvcSelectMode",cvcPlaceholder:"cvcPlaceholder",cvcOptions:"cvcOptions",cvcShowError:"cvcShowError",cvcDisabled:"cvcDisabled",cvcAllowClear:"cvcAllowClear",cvcModelChange:"cvcModelChange",cvcCustomTemplate:"cvcCustomTemplate"},outputs:{cvcOnFocus:"cvcOnFocus"},decls:1,vars:12,consts:[[3,"formControl","formlyAttributes","nzMode","nzPlaceHolder","nzOptions","nzCustomTemplate","nzOptionHeightPx","nzDisabled","nzAllowClear","nzFocus","ngModelChange"]],template:function(s,p){1&s&&(e.TgZ(0,"nz-select",0),e.NdJ("nzFocus",function(){return p.cvcOnFocus.next()})("ngModelChange",function(Ce){return p.cvcModelChange&&p.cvcModelChange(p.cvcFormlyAttributes,Ce)}),e.qZA()),2&s&&(e.ekj("ng-dirty",p.cvcShowError),e.Q6J("formControl",p.cvcFormControl)("formlyAttributes",p.cvcFormlyAttributes)("nzMode",p.cvcSelectMode)("nzPlaceHolder",p.cvcPlaceholder?p.cvcPlaceholder:"Select Value")("nzOptions",p.cvcOptions?p.cvcOptions:e.DdM(11,qn))("nzCustomTemplate",p.cvcCustomTemplate?p.cvcCustomTemplate:null)("nzOptionHeightPx",30)("nzDisabled",p.cvcDisabled)("nzAllowClear",p.cvcAllowClear))},dependencies:[t.JJ,t.oH,_.JD,He.Vq],changeDetection:0}),l})();var Ro=c(3702);const Ko=["optionTemplates"];function zo(l,g){if(1&l&&(e.TgZ(0,"nz-tag")(1,"strong"),e._uU(2),e.ALo(3,"formatAmp"),e.qZA()(),e.TgZ(4,"span",4),e._uU(5),e.qZA()),2&l){const s=e.oxw().$implicit,p=e.oxw();e.xp6(2),e.Oqu(e.xi3(3,2,s,"verbose")),e.xp6(3),e.Oqu(p.descriptionForCategory(s))}}function Mi(l,g){1&l&&(e.ynx(0),e.YNc(1,zo,6,5,"ng-template",null,3,e.W1O),e.BQk())}function wi(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"nz-tag",8),e.NdJ("nzOnClose",function(O){e.CHM(s);const Ce=e.oxw(2);return e.KtG(Ce.onTagClose$.next(O))}),e.TgZ(1,"strong"),e._uU(2),e.ALo(3,"formatAmp"),e.qZA()()}if(2&l){const s=e.oxw().$implicit;e.xp6(2),e.Oqu(e.xi3(3,1,s.nzValue,"verbose"))}}function Vo(l,g){if(1&l&&(e.ynx(0),e._uU(1),e.ALo(2,"formatAmp"),e.BQk()),2&l){const s=e.oxw().$implicit;e.xp6(1),e.hij(" ",e.xi3(2,1,s.nzValue,"verbose")," ")}}function $o(l,g){if(1&l&&(e.TgZ(0,"div",5),e.YNc(1,wi,4,4,"nz-tag",6),e.YNc(2,Vo,3,4,"ng-container",7),e.qZA()),2&l){const s=e.oxw();e.xp6(1),e.Q6J("ngIf",!s.props.isMultiSelect),e.xp6(1),e.Q6J("ngIf",s.props.isMultiSelect)}}const or=new Map([[Fn.iwm.Na,"Not Applicable"],[Fn.iwm.TierILevelA,"Biomarkers showing therapeutic response to FDA-approved therapy, or therapy included in professional guidelines."],[Fn.iwm.TierILevelB,"Biomarkers showing therapeutic response based on well-powered studies with consensus from experts in the field."],[Fn.iwm.TierIiLevelC,"FDA-approved therapies for different tumor types or investigational therapies, or multiple small published studies with some consensus."],[Fn.iwm.TierIiLevelD,"Biomarkers that show plausible therapeutic significance based on preclinical studies."],[Fn.iwm.TierIii,"Somatic variants in cancer genes reported in the same or different cancer types with unknown clinical significance and variants in cancer genes that have not been reported in any cancers."],[Fn.iwm.TierIv,"Benign or likely benign germline variants observed at significant allele frequencies in the general population or specific subpopulation."]]),yi=bo(ko(),fo());let Ci=(()=>{class l extends yi{constructor(s){super(),this.cdr=s,this.defaultOptions={props:{label:"AMP/ASCO/CAP Category",required:!1,isMultiSelect:!1,placeholder:"Select AMP/ASCO/CAP Category"}},this.ampCategoryEnum$=new Be.X([])}descriptionForCategory(s){return or.get(s)}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEnumSelectField({optionEnum$:this.ampCategoryEnum$,optionTemplate$:this.optionTemplate$,changeDetectorRef:this.cdr}),this.configurePlaceholder()}configureStateConnections(){this.props.tooltip="If applicable, please provide the AMP/ASCO/CAP somatic variant classification.",this.ampCategoryEnum$.next((0,So.o6)(Fn.iwm).map(s=>s)),this.optionTemplates||console.error(`${this.field.id} could not find its optionTemplates QueryList to populate its select options, so simple text labels will be displayed.`),this.optionTemplate$=this.optionTemplates?.changes.pipe((0,S.U)(s=>s.map(p=>p))),this.state&&(this.state.requires.requiresAmpLevel$?this.onRequiresAmpCategory$=this.state.requires.requiresAmpLevel$:console.warn(`${this.field.id} field's form provides a state, but could not find requiresAmpLevel$ subject to attach.`),this.onValueChange$.pipe((0,zn.t)(this)).subscribe(s=>{s?(this.props.extraType=void 0,this.props.description=or.get(s)):this.props.description="Select an Assertion Type to select its AMP Category"}))}configurePlaceholder(){this.placeholder$=new Be.X(this.props.placeholder),this.onRequiresAmpCategory$&&this.onRequiresAmpCategory$.pipe((0,ze.x)(),(0,zn.t)(this)).subscribe(s=>{this.props.extraType=void 0,s?(this.formControl.value||(this.props.extraType="description",this.props.description='Please provide the AMP/ASCO/CAP <a href="https://pubmed.ncbi.nlm.nih.gov/27993330/" target="_blank">somatic variant classification</a>.'),this.props.required=!0,this.props.disabled=!1):(this.props.required=!1,this.props.disabled=!0,this.resetField()),this.cdr.markForCheck()})}}return l.\u0275fac=function(s){return new(s||l)(e.Y36(e.sBO))},l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-amp-category-select"]],viewQuery:function(s,p){if(1&s&&e.Gf(Ko,5,e.Rgc),2&s){let O;e.iGM(O=e.CRH())&&(p.optionTemplates=O)}},features:[e.qOj],decls:7,vars:15,consts:[[3,"cvcFormControl","cvcFormlyAttributes","cvcSelectMode","cvcPlaceholder","cvcCustomTemplate","cvcOptions","cvcShowError","cvcDisabled"],[4,"ngFor","ngForOf"],["selectedTemplate",""],["optionTemplates",""],["nz-typography","","nzType","secondary"],[1,"ant-select-selection-item-content"],["nzMode","closeable",3,"nzOnClose",4,"ngIf"],[4,"ngIf"],["nzMode","closeable",3,"nzOnClose"]],template:function(s,p){if(1&s&&(e._UZ(0,"cvc-enum-select",0),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.YNc(3,Mi,3,0,"ng-container",1),e.ALo(4,"ngrxPush"),e.YNc(5,$o,3,2,"ng-template",null,2,e.W1O)),2&s){const O=e.MAs(6);e.Q6J("cvcFormControl",p.formControl)("cvcFormlyAttributes",p.field)("cvcSelectMode",p.props.isMultiSelect?"multiple":"default")("cvcPlaceholder",e.lcZ(1,9,p.placeholder$))("cvcCustomTemplate",O)("cvcOptions",e.lcZ(2,11,p.selectOption$))("cvcShowError",p.showError)("cvcDisabled",p.props.disabled),e.xp6(3),e.Q6J("ngForOf",e.lcZ(4,13,p.ampCategoryEnum$))}},dependencies:[a.sg,a.O5,An.j,X.ZU,wo,lo.fM,Ro.t]}),l})();const cr={types:[{name:"amp-category-select",wrappers:["form-field"],component:Ci},{name:"amp-category-multi-select",wrappers:["form-field"],component:Ci,defaultOptions:{props:{label:"AMP/ASCO/CAP Categories",isMultiSelect:!0}}}]};let Bi=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[a.ez,t.UX,_.X0.forChild(cr),An.X,X.ZJ,tt.s,Lo,Kn]}),l})();const ir=bo(ko()),Fe={types:[{name:"checkbox",wrappers:["form-field"],component:(()=>{class l extends ir{constructor(){super(...arguments),this.defaultOptions={props:{indeterminate:!0,hideLabel:!0}}}ngAfterViewInit(){console.log(this.props)}}return l.\u0275fac=function(){let g;return function(p){return(g||(g=e.n5z(l)))(p||l)}}(),l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-checkbox"]],features:[e.qOj],decls:2,vars:4,consts:[["nz-checkbox","",3,"nzIndeterminate","formControl","formlyAttributes","ngModelChange"]],template:function(s,p){1&s&&(e.TgZ(0,"label",0),e.NdJ("ngModelChange",function(Ce){return p.props.change&&p.props.change(p.field,Ce)}),e._uU(1),e.qZA()),2&s&&(e.Q6J("nzIndeterminate",p.props.indeterminate&&null==p.formControl.value)("formControl",p.formControl)("formlyAttributes",p.field),e.xp6(1),e.hij(" ",p.props.label,"\n"))},dependencies:[t.JJ,t.oH,ye.Ie,_.JD],changeDetection:0}),l})()}]};let Rt=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[a.ez,t.UX,ye.Wr,_.X0.forChild(Fe),Lo]}),l})();function W(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"input",2),e.NdJ("ngModelChange",function(O){e.CHM(s);const Ce=e.oxw();return e.KtG(Ce.onValueChange$.next(O))}),e.qZA()}if(2&l){const s=e.oxw();e.Q6J("formControl",s.formControl)("type",s.props.type||"text")("formlyAttributes",s.field)}}function ke(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"nz-input-number",3),e.NdJ("ngModelChange",function(O){e.CHM(s);const Ce=e.oxw();return e.KtG(Ce.onValueChange$.next(O))}),e.qZA()}if(2&l){const s=e.oxw();e.Q6J("formControl",s.formControl)("formlyAttributes",s.field)}}const Vt=bo(ko());let on=(()=>{class l extends Vt{constructor(){super()}ngAfterViewInit(){this.configureBaseField()}}return l.\u0275fac=function(s){return new(s||l)},l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-base-input"]],features:[e.qOj],decls:3,vars:2,consts:[["nz-input","",3,"formControl","type","formlyAttributes","ngModelChange",4,"ngIf","ngIfElse"],["numberTmp",""],["nz-input","",3,"formControl","type","formlyAttributes","ngModelChange"],[3,"formControl","formlyAttributes","ngModelChange"]],template:function(s,p){if(1&s&&(e.YNc(0,W,1,3,"input",0),e.YNc(1,ke,1,2,"ng-template",null,1,e.W1O)),2&s){const O=e.MAs(2);e.Q6J("ngIf","number"!==p.props.type)("ngIfElse",O)}},dependencies:[a.O5,t.Fj,t.JJ,t.oH,I.Zp,lt,_.JD],encapsulation:2,changeDetection:0}),l})(),Bn=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[a.ez,t.UX,I.o7,Me,_.X0.forChild({types:[{name:"base-input",component:on,wrappers:["form-field"]},{name:"base-string",extends:"base-input"},{name:"base-number",extends:"base-input",defaultOptions:{props:{type:"number"}}},{name:"base-integer",extends:"base-input",defaultOptions:{props:{type:"number"}}}]})]}),l})();function mo(l,g){if(1&l&&e._UZ(0,"nz-option",6),2&l){const s=g.$implicit;e.Q6J("nzValue",s.value)("nzDisabled",s.disabled)("nzLabel",s.label)}}function go(l,g){if(1&l&&(e.TgZ(0,"nz-option-group",4),e.YNc(1,mo,1,3,"nz-option",5),e.qZA()),2&l){const s=e.oxw().$implicit;e.Q6J("nzLabel",s.label),e.xp6(1),e.Q6J("ngForOf",s.group)}}function Jo(l,g){if(1&l&&e._UZ(0,"nz-option",6),2&l){const s=e.oxw().$implicit;e.Q6J("nzValue",s.value)("nzDisabled",s.disabled)("nzLabel",s.label)}}function ai(l,g){if(1&l&&(e.ynx(0),e.YNc(1,go,2,2,"nz-option-group",2),e.YNc(2,Jo,1,3,"nz-option",3),e.BQk()),2&l){const s=g.$implicit;e.xp6(1),e.Q6J("ngIf",s.group),e.xp6(1),e.Q6J("ngIf",!s.group)}}const po=bo(ko());let Wi=(()=>{class l extends po{constructor(){super(),this.defaultOptions={props:{isMultiSelect:!1}}}ngAfterViewInit(){this.configureBaseField()}}return l.\u0275fac=function(s){return new(s||l)},l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-base-select"]],features:[e.qOj],decls:4,vars:12,consts:[[3,"nzPlaceHolder","formControl","formlyAttributes","nzMode","ngModelChange"],[4,"ngFor","ngForOf"],[3,"nzLabel",4,"ngIf"],[3,"nzValue","nzDisabled","nzLabel",4,"ngIf"],[3,"nzLabel"],[3,"nzValue","nzDisabled","nzLabel",4,"ngFor","ngForOf"],[3,"nzValue","nzDisabled","nzLabel"]],template:function(s,p){1&s&&(e.TgZ(0,"nz-select",0),e.NdJ("ngModelChange",function(Ce){return p.props.change&&p.props.change(p.field,Ce)}),e.YNc(1,ai,3,2,"ng-container",1),e.ALo(2,"async"),e.ALo(3,"formlySelectOptions"),e.qZA()),2&s&&(e.ekj("ng-dirty",p.showError),e.Q6J("nzPlaceHolder",void 0!==p.props.placeholder?p.props.placeholder:null)("formControl",p.formControl)("formlyAttributes",p.field)("nzMode",p.props.isMultiSelect?"multiple":"default"),e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,7,e.xi3(3,9,p.props.options,p.field))))},dependencies:[a.sg,a.O5,t.JJ,t.oH,He.Ip,He.Vq,He.Yy,_.JD,a.Ov,Ut],encapsulation:2,changeDetection:0}),l})(),Hi=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[a.ez,t.UX,He.LV,F,Ht,_.X0.forChild({types:[{name:"base-select",component:Wi,wrappers:["form-field"]},{name:"enum",extends:"select"},{name:"base-multi-select",extends:"level-select",defaultOptions:{props:{isMultiSelect:!0}}}]})]}),l})();const Er=bo(ko()),Ee={types:[{name:"base-textarea",component:(()=>{class l extends Er{constructor(){super(),this.defaultOptions={props:{autosize:!1}}}ngAfterViewInit(){this.configureBaseField()}}return l.\u0275fac=function(s){return new(s||l)},l.\u0275cmp=e.Xpm({type:l,selectors:[["formly-field-nz-textarea"]],features:[e.qOj],decls:1,vars:5,consts:[["nz-input","",3,"nzAutosize","rows","formControl","placeholder","formlyAttributes"]],template:function(s,p){1&s&&e._UZ(0,"textarea",0),2&s&&e.Q6J("nzAutosize",p.props.autosize)("rows",p.props.rows?p.props.rows:2)("formControl",p.formControl)("placeholder",p.props.placeholder)("formlyAttributes",p.field)},dependencies:[t.Fj,t.JJ,t.oH,_.JD,I.Zp,I.rh],encapsulation:2,changeDetection:0}),l})(),wrappers:["form-field"]}]};let ve=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[a.ez,t.UX,_.X0.forChild(Ee),I.o7,Lo]}),l})();var de=c(855),et=c(1958);const Qn={types:[{name:"cvc-cancel-button",component:(()=>{class l extends _.fS{constructor(s){super(),this.location=s}cancelClicked(){this.location.back()}}return l.\u0275fac=function(s){return new(s||l)(e.Y36(a.Ye))},l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-cancel-button"]],features:[e.qOj],decls:2,vars:0,consts:[["nz-button","","type","button","nzType","default","nzDanger","",1,"cancel-button",3,"click"]],template:function(s,p){1&s&&(e.TgZ(0,"button",0),e.NdJ("click",function(){return p.cancelClicked()}),e._uU(1," Cancel\n"),e.qZA())},dependencies:[To.ix,de.w,et.dQ],styles:[".cancel-button[_ngcontent-%COMP%]{margin-right:10px}"],changeDetection:0}),l})()}]};let Ai=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[a.ez,t.UX,_.X0.forChild(Qn),To.sL]}),l})();const bi=["optionTemplates"];function Yr(l,g){if(1&l&&(e.ynx(0),e.TgZ(1,"em")(2,"span",6),e._uU(3),e.qZA()(),e.BQk()),2&l){const s=e.oxw(2).$implicit;e.xp6(3),e.Oqu(s.description)}}function Ns(l,g){if(1&l&&(e.TgZ(0,"nz-tag",5),e._uU(1),e.qZA(),e.TgZ(2,"span",6),e.YNc(3,Yr,4,1,"ng-container",7),e.qZA()),2&l){const s=e.oxw().$implicit;e.xp6(1),e.Oqu(s.code),e.xp6(2),e.Q6J("ngIf",s.description)}}function Ea(l,g){1&l&&(e.ynx(0),e.YNc(1,Ns,4,2,"ng-template",null,4,e.W1O),e.BQk())}function Js(l,g){if(1&l&&(e.ynx(0),e.YNc(1,Ea,3,0,"ng-container",3),e.ALo(2,"ngrxPush"),e.BQk()),2&l){const s=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,s.result$))}}function qs(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"div",8)(1,"cvc-entity-tag",9),e.NdJ("cvcOnClose",function(){const Ce=e.CHM(s).$implicit,ft=e.oxw();return e.KtG(ft.onTagClose$.next(Ce.nzValue))}),e.qZA()()}if(2&l){const s=g.$implicit,p=e.oxw();e.xp6(1),e.Q6J("cvcDisableLink",!0)("cvcHasTooltip",!0)("cvcCacheId","ClingenCode:"+s.nzValue)("cvcContext",p.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",p.props.isMultiSelect?"default":"closeable")}}const fs=bo(ko(),Oo());let xa=(()=>{class l extends fs{constructor(s,p,O){super(),this.taq=s,this.tq=p,this.changeDetectorRef=O,this.exclusiveCodes=new Set,this.exclusiveSelected=!1,this.defaultOptions={props:{entityName:{singular:"ClinGen/CGC/VICC Code",plural:"ClinGen/CGC/VICC Codes"},isMultiSelect:!1,requireType:!0,tooltip:"If applicable, please provide evidence classifications from the Standards for the classification of pathogenicity of somatic variants in cancer (oncogenicity).",placeholder:"Search ClinGen/CGC/VICC Codes",requireTypePromptFn:(Ce,ft)=>`Select an ${Ce} Type to search associated ClinGen Code(s)`}},this.placeholder$=new Be.X(void 0)}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEntitySelectField({typeaheadQuery:this.taq,typeaheadParam$:void 0,tagQuery:this.tq,getTypeaheadVarsFn:this.getTypeaheadVarsFn,getTypeaheadResultsFn:this.getTypeaheadResultsFn,getTagQueryVarsFn:this.getTagQueryVarsFn,getTagQueryResultsFn:this.getTagQueryResultsFn,getSelectedItemOptionFn:this.getSelectedItemOptionFn,getSelectOptionsFn:this.getSelectOptionsFn,changeDetectorRef:this.changeDetectorRef,selectComponent:this.selectComponent}),this.configurePlaceholders(),this.onValueChange$.pipe((0,zn.t)(this)).subscribe(s=>{if(s&&Array.isArray(s)&&s.length>1){const p=s.find(O=>this.exclusiveCodes.has(O));p?(this.previousDescription=this.props.description,this.previousDescriptionType=this.props.extraType,this.props.description="You have selected N/A which precludes selecting any other codes. Please remove it if you wish to select additional codes.",this.exclusiveSelected=!0,this.formControl.setValue([p])):this.exclusiveSelected=!1}this.previousDescription&&!this.exclusiveSelected&&(this.props.description=this.previousDescription,this.props.extraType=this.previousDescriptionType),this.cdr.detectChanges()})}configureStateConnections(){if(this.state&&(this.stateEntityName=this.state.entityName,this.state.requires.requiresClingenCodes$?this.onRequiresClingenCode$=this.state.requires.requiresClingenCodes$:console.warn(`${this.field.id} field's form provides a state, but could not find requiresClingenCodes$ subject to attach.`),this.props.requireType)){const s=`${this.stateEntityName.toLowerCase()}Type$`;this.state.fields[s]?this.onEntityType$=this.state.fields[s]:console.error(`${this.field.id} requireType is true, however form state does not provide Subject ${s}.`)}}configurePlaceholders(){this.placeholder$.next(this.props.placeholders),this.onRequiresClingenCode$&&this.onEntityType$&&(0,Do.a)([this.onRequiresClingenCode$,this.onEntityType$]).pipe((0,ze.x)(),(0,zn.t)(this)).subscribe(([s,p])=>{!s&&p?(this.props.required=!1,this.props.disabled=!0,this.props.description=`${(0,Oi.E)(p)} ${this.state.entityName} does not include associated ClinGen/CGC/VICC Code(s)`,this.props.extraType="prompt",this.resetField(),this.cdr.markForCheck()):this.props.requireType&&!p?(this.props.required=!1,this.props.disabled=!0,this.props.description=this.props.requireTypePromptFn(this.state.entityName,this.props.isMultiSelect),this.props.extraType="prompt"):s?(this.props.required=!0,this.props.disabled=!1,this.props.description='Please provide the evidence classifications from the Standards for the classification of pathogenicity of somatic variants in cancer (oncogenicity) in <a href="https://pubmed.ncbi.nlm.nih.gov/25741868/" target="_blank">Horak et. al. 2022.</a>. Review all codes and select each one that applies. If a code is not applied, it is inferred to not be met.',this.props.extraType="description"):(!s&&this.formControl.value||this.props.requireType&&!p&&this.formControl.value)&&this.resetField()})}getTypeaheadVarsFn(s){return{code:s}}getTypeaheadResultsFn(s){return s.data.clingenCodesTypeahead.forEach(p=>{p.exclusive&&this.exclusiveCodes.add(p.id)}),s.data.clingenCodesTypeahead}getTagQueryResultsFn(s){return s.data.clingenCode}getTagQueryVarsFn(s){return{id:s}}getSelectedItemOptionFn(s){return{value:s.id,label:s.code}}getSelectOptionsFn(s,p){return s.map((O,Ce)=>({label:p.get(Ce)||O.code,value:O.id}))}}return l.\u0275fac=function(s){return new(s||l)(e.Y36(Fn.E2B),e.Y36(Fn.R8F),e.Y36(e.sBO))},l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-clingen-code-select"]],viewQuery:function(s,p){if(1&s&&e.Gf(bi,5,e.Rgc),2&s){let O;e.iGM(O=e.CRH())&&(p.optionTemplates=O)}},features:[e.qOj],decls:9,vars:22,consts:[[3,"cvcSelectMode","cvcCustomTemplate","cvcFormControl","cvcFormlyAttributes","cvcEntityName","cvcPlaceholder","cvcResults","cvcOptions","cvcShowError","cvcDisabled","cvcLoading","cvcOnSearch","cvcOnOpenChange","cvcOnModelChange"],[4,"ngrxLet"],["selectedTemplate",""],[4,"ngFor","ngForOf"],["optionTemplates",""],["nz-tooltip",""],["nz-typography","","nzType","secondary"],[4,"ngIf"],[1,"ant-select-selection-item-content"],[3,"cvcDisableLink","cvcHasTooltip","cvcCacheId","cvcContext","cvcMode","cvcOnClose"]],template:function(s,p){if(1&s&&(e.TgZ(0,"cvc-entity-select",0),e.NdJ("cvcOnSearch",function(Ce){return p.onSearch$.next(Ce)})("cvcOnOpenChange",function(Ce){return p.onOpenChange$.next(Ce)})("cvcOnModelChange",function(Ce){return p.props.change&&p.props.change(p.field,Ce)}),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.ALo(3,"ngrxPush"),e.ALo(4,"ngrxPush"),e.ALo(5,"ngrxPush"),e.qZA(),e.YNc(6,Js,3,3,"ng-container",1),e.YNc(7,qs,2,5,"ng-template",null,2,e.W1O)),2&s){const O=e.MAs(8);e.Q6J("cvcSelectMode",p.props.isMultiSelect?"multiple":"default")("cvcCustomTemplate",O)("cvcFormControl",p.formControl)("cvcFormlyAttributes",p.field)("cvcEntityName",p.props.entityName)("cvcPlaceholder",e.lcZ(1,12,p.placeholder$))("cvcResults",e.lcZ(2,14,p.result$))("cvcOptions",e.lcZ(3,16,p.selectOption$))("cvcShowError",p.showError)("cvcDisabled",p.onRequiresClingenCode$&&!e.lcZ(4,18,p.onRequiresClingenCode$))("cvcLoading",e.lcZ(5,20,p.isLoading$)),e.xp6(6),e.Q6J("ngrxLet",p.onSearch$)}},dependencies:[a.sg,a.O5,lo.eJ,eo.SY,X.ZU,An.j,an,Qt.J,lo.fM],changeDetection:0}),l})();const Jr={types:[{name:"clingen-code-select",wrappers:["form-field"],component:xa,defaultOptions:{props:{label:"ClinGen/CGC/VICC Code"}}},{name:"clingen-code-multi-select",wrappers:["form-field"],component:xa,defaultOptions:{props:{isMultiSelect:!0,label:"ClinGen/CGC/VICC Code(s)"}}}]};let qr=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[a.ez,t.UX,_.X0.forChild(Jr),yt.L,To.sL,He.LV,Wo.$6,_i.Qp,ue.PV,I.o7,R.Jb,eo.cg,Re.zf,N.U5,H.ic,X.ZJ,An.X,Lo,jt,tt.s,Te.x,Tn]}),l})();function hr(l){return(()=>{class s extends l{configureStringTagField(){this.tagLabel$=new E.x,this.onTagClose$=new E.x,this.onTagClose$.pipe((0,zn.t)(this)).subscribe(O=>{this.formControl.setValue(void 0),this.tagLabel$.next(void 0)})}}return s.\u0275fac=function(){let p;return function(Ce){return(p||(p=e.n5z(s)))(Ce||s)}}(),s.\u0275prov=e.Yz7({token:s,factory:s.\u0275fac}),s})()}var di,rr=c(1022);function yr(l,g){if(1&l&&(e.TgZ(0,"label",5),e._uU(1),e.qZA()),2&l){const s=g.$implicit;e.Q6J("nzValue",s.value)("nzTooltipTitle",s.tooltip),e.xp6(1),e.hij(" ",s.label," ")}}function Ls(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"nz-col",2)(1,"nz-radio-group",3),e.NdJ("ngModelChange",function(O){e.CHM(s);const Ce=e.oxw();return e.KtG(Ce.existenceChange$.next(O))}),e.ALo(2,"ngrxPush"),e.YNc(3,yr,2,3,"label",4),e.qZA()()}if(2&l){const s=e.oxw();e.xp6(1),e.Q6J("ngModel",e.lcZ(2,2,s.existenceModel$)),e.xp6(2),e.Q6J("ngForOf",s.selectOptions)}}function $r(l,g){if(1&l&&e._UZ(0,"nz-option",8),2&l){const s=g.$implicit;e.Q6J("nzLabel",s)("nzValue",s)("nzHide",!0)}}function Lr(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"nz-col",2)(1,"nz-select",6),e.NdJ("ngModelChange",function(O){e.CHM(s);const Ce=e.oxw();return e.KtG(Ce.onValueChange$.next(O))}),e.YNc(2,$r,1,3,"nz-option",7),e.qZA()()}if(2&l){const s=e.oxw();e.xp6(1),e.Q6J("formControl",s.formControl)("formlyAttributes",s.field),e.xp6(1),e.Q6J("ngForOf",s.formControl.value)}}const Xr=function(){return[8,8]},Xs=bo(ko(),hr);let Cr=((di=class extends Xs{constructor(g){super(),this.cdr=g,this.defaultOptions={modelOptions:{updateOn:"blur"},props:{label:"Enter value",placeholder:"Enter value and hit Return",description:"Specify if Clinvar IDs exist, or if they are not applicable for this variant."}},this.clinvarIds$=new Be.X([]),this.values=new Set,this.showClinvarIdEntry$=new Be.X(!1),this.selectModel=void 0,this.selectOptions=[{value:void 0,label:"Unspecified",tooltip:"Existence of ClinVar IDs for this variant is unspecified."},{value:rr.li.NotApplicable,label:"Not Applicable",tooltip:"ClinVar IDs are not applicable to this variant."},{value:rr.li.NoneFound,label:"Were Not Found",tooltip:"A search was performed, and no ClinVar IDs were found."},{value:rr.li.Found,label:"Were Found",tooltip:"A search was performed, and ClinVar IDs were found (enter IDs below)."}],this.existenceChange$=new E.x,this.existenceModel$=new Be.X(void 0),this.showTagSelect$=new Be.X(!1)}ngAfterViewInit(){this.configureBaseField(),this.configureStringTagField(),this.onValueChange$.pipe((0,zn.t)(this)).subscribe(g=>{void 0===g?(this.existenceModel$.next(void 0),this.showTagSelect$.next(!1)):g.includes("NONE FOUND")||g.includes("NA")?(g.includes("NONE FOUND")?this.existenceModel$.next(rr.li.NoneFound):g.includes("NA")&&this.existenceModel$.next(rr.li.NotApplicable),this.showTagSelect$.next(!1)):(this.existenceModel$.next(rr.li.Found),this.showTagSelect$.next(!0))}),this.existenceChange$.pipe((0,S.U)(g=>{const s=this.formControl.value;void 0===g&&void 0!==this.formControl.value?this.formControl.setValue(void 0):g!==rr.li.NoneFound||s.includes("NONE FOUND")?g!==rr.li.NotApplicable||s.includes("NA")?g===rr.li.Found&&(void 0===s||s.includes("NONE FOUND")||s.includes("NA"))&&this.formControl.setValue([]):this.formControl.setValue(["NA"]):this.formControl.setValue(["NONE FOUND"])}),(0,zn.t)(this)).subscribe()}}).\u0275fac=function(g){return new(g||di)(e.Y36(e.sBO))},di.\u0275cmp=e.Xpm({type:di,selectors:[["cvc-clinvar-input"]],features:[e.qOj],decls:4,vars:6,consts:[[3,"nzGutter"],["nzSpan","24",4,"ngIf"],["nzSpan","24"],["nzName","existence",3,"ngModel","ngModelChange"],["nz-radio-button","","nz-tooltip","",3,"nzValue","nzTooltipTitle",4,"ngFor","ngForOf"],["nz-radio-button","","nz-tooltip","",3,"nzValue","nzTooltipTitle"],["nzMode","tags","nzPlaceHolder","Enter ClinVar IDs","nzAllowClear","","nzDropdownClassName","hide-dropdown",3,"formControl","formlyAttributes","ngModelChange"],[3,"nzLabel","nzValue","nzHide",4,"ngFor","ngForOf"],[3,"nzLabel","nzValue","nzHide"]],template:function(g,s){1&g&&(e.TgZ(0,"nz-row",0),e.YNc(1,Ls,4,4,"nz-col",1),e.YNc(2,Lr,3,3,"nz-col",1),e.ALo(3,"ngrxPush"),e.qZA()),2&g&&(e.Q6J("nzGutter",e.DdM(5,Xr)),e.xp6(1),e.Q6J("ngIf",s.props.showExistenceOptions),e.xp6(1),e.Q6J("ngIf",e.lcZ(3,3,s.showTagSelect$)))},dependencies:[a.sg,a.O5,t.JJ,t.On,t.oH,_.JD,R.t3,R.SK,Ge.Of,Ge.Bq,Ge.Dg,He.Ip,He.Vq,eo.SY,lo.fM],changeDetection:0}),di);Cr=(0,V.gn)([(0,zn.c)()],Cr);const ms={types:[{name:"clinvar-input",wrappers:["form-field"],component:Cr,defaultOptions:{props:{isRepeatItem:!1,showExistenceOptions:!1}}},{name:"clinvar-multi-input",wrappers:["form-field"],component:Cr,defaultOptions:{props:{isRepeatItem:!0,showExistenceOptions:!0}}}]};let zr=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[a.ez,t.u5,t.UX,_.X0.forChild(ms),N.U5,R.Jb,I.o7,Ge.aF,He.LV,eo.cg,tt.s]}),l})();var es=c(8180);const kr=bo(ko()),Wc={types:[{name:"fda-companion-test-checkbox",wrappers:["form-field"],component:(()=>{class l extends kr{constructor(){super(...arguments),this.defaultDescription='Select Yes if an FDA approved companion test exists for the variant and therapy associated with the Assertion (such as tests listed <a href="https://www.fda.gov/medical-devices/in-vitro-diagnostics/list-cleared-or-approved-companion-diagnostic-devices-in-vitro-and-imaging-tools" target="_blank">here</a>).',this.defaultOptions={props:{hideLabel:!1,label:"FDA Companion Test",description:this.defaultDescription}}}ngAfterViewInit(){this.configureBaseField(),this.state&&(this.state.formReady$?this.state.formReady$.pipe((0,vt.h)(s=>s),(0,es.q)(1),(0,zn.t)(this)).subscribe(s=>{this.configureField()}):this.configureField())}configureField(){this.state?.fields.fdaRegulatoryApproval$.pipe((0,zn.t)(this)).subscribe(s=>{s?(this.props.disabled=!1,this.props.extraType="description",this.props.description=this.defaultDescription,void 0===this.formControl.value&&this.formControl.setValue(!1)):(this.props.disabled=!0,this.props.description="FDA Companion Test only applies when Regulatory Approval is selected",this.formControl.setValue(void 0))})}}return l.\u0275fac=function(){let g;return function(p){return(g||(g=e.n5z(l)))(p||l)}}(),l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-fda-companion-test-checkbox"]],features:[e.qOj],decls:2,vars:4,consts:[["nz-checkbox","",3,"nzIndeterminate","formControl","formlyAttributes","ngModelChange"]],template:function(s,p){1&s&&(e.TgZ(0,"label",0),e.NdJ("ngModelChange",function(Ce){return p.props.change&&p.props.change(p.field,Ce)}),e._uU(1),e.qZA()),2&s&&(e.Q6J("nzIndeterminate",p.props.indeterminate&&null==p.formControl.value)("formControl",p.formControl)("formlyAttributes",p.field),e.xp6(1),e.hij(" ",p.props.label,"\n"))},dependencies:[t.JJ,t.oH,ye.Ie,_.JD],changeDetection:0}),l})()}]};let tc=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[a.ez,t.UX,ye.Wr,_.X0.forChild(Wc),Lo]}),l})();const Rr=bo(ko()),as={types:[{name:"fda-regulatory-approval-checkbox",wrappers:["form-field"],component:(()=>{class l extends Rr{constructor(){super(...arguments),this.defaultDescription="Check this if the referenced therapy is approved for use by the FDA in the specific disease associated with the Assertion (as in a listing <a href='https://www.cancer.gov/about-cancer/treatment/drugs/cancer-type' target='_blank'>here</a>.)",this.defaultOptions={props:{hideLabel:!1,label:"FDA Regulatory Approval",description:this.defaultDescription}}}ngAfterViewInit(){this.configureBaseField(),this.state&&(this.state.formReady$?this.state.formReady$.pipe((0,vt.h)(s=>s),(0,es.q)(1),(0,zn.t)(this)).subscribe(s=>{this.configureField()}):this.configureField())}configureField(){this.state?.requires.allowsFdaApproval$.pipe((0,zn.t)(this)).subscribe(s=>{s?(this.props.disabled=!1,this.props.extraType="description",this.props.description=this.defaultDescription,void 0===this.formControl.value&&this.formControl.setValue(!1)):(this.props.disabled=!0,this.props.description="FDA Regulatory Approval does not apply to this Assertion Type",this.formControl.setValue(void 0))})}}return l.\u0275fac=function(){let g;return function(p){return(g||(g=e.n5z(l)))(p||l)}}(),l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-fda-regulatory-approval-checkbox"]],features:[e.qOj],decls:2,vars:4,consts:[["nz-checkbox","",3,"nzIndeterminate","formControl","formlyAttributes","ngModelChange"]],template:function(s,p){1&s&&(e.TgZ(0,"label",0),e.NdJ("ngModelChange",function(Ce){return p.props.change&&p.props.change(p.field,Ce)}),e._uU(1),e.qZA()),2&s&&(e.Q6J("nzIndeterminate",p.props.indeterminate&&null==p.formControl.value)("formControl",p.formControl)("formlyAttributes",p.field),e.xp6(1),e.hij(" ",p.props.label,"\n"))},dependencies:[t.JJ,t.oH,ye.Ie,_.JD],changeDetection:0}),l})()}]};let Ur=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[a.ez,t.UX,ye.Wr,_.X0.forChild(as),Lo]}),l})(),xr=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[a.ez,An.X,ue.PV,eo.cg,tt.s]}),l})();var ts=c(6967),fr=c(7334);function gs(l,g){}function vs(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"span",5)(1,"nz-tag",6),e.NdJ("nzOnClose",function(O){e.CHM(s);const Ce=e.oxw();return e.KtG(Ce.cvcOnClose.next(O))}),e.YNc(2,gs,0,0,"ng-template",7),e.qZA()()}if(2&l){const s=e.oxw(),p=e.MAs(5);e.xp6(1),e.Q6J("nzMode",s.cvcMode)("nzTooltipTitle",s.cvcTooltip)("nzChecked",s.cvcChecked),e.xp6(1),e.Q6J("ngTemplateOutlet",p)}}function Da(l,g){}function ea(l,g){if(1&l&&(e.TgZ(0,"span",8)(1,"nz-tag",9),e.YNc(2,Da,0,0,"ng-template",7),e.qZA()()),2&l){const s=e.oxw(),p=e.MAs(5);e.xp6(1),e.Q6J("nzMode","checkable")("nzChecked",s.cvcChecked),e.xp6(1),e.Q6J("ngTemplateOutlet",p)}}function ta(l,g){}function na(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"span",10)(1,"nz-tag",11),e.NdJ("nzOnClose",function(O){e.CHM(s);const Ce=e.oxw();return e.KtG(Ce.cvcOnClose.next(O))}),e.YNc(2,ta,0,0,"ng-template",7),e.qZA()()}if(2&l){e.oxw();const s=e.MAs(5);e.xp6(1),e.Q6J("nzMode","closeable"),e.xp6(1),e.Q6J("ngTemplateOutlet",s)}}function er(l,g){}function Yi(l,g){if(1&l&&(e.TgZ(0,"span",12)(1,"nz-tag",13),e.YNc(2,er,0,0,"ng-template",7),e.qZA()()),2&l){const s=e.oxw(),p=e.MAs(5);e.xp6(1),e.Q6J("nzMode","default")("nzTooltipTitle",s.cvcTooltip),e.xp6(1),e.Q6J("ngTemplateOutlet",p)}}const oa=function(l){return{"tag-icon-large":l}};function gi(l,g){if(1&l&&(e._UZ(0,"i",16),e.ALo(1,"evidenceEnumDisplay")),2&l){const s=e.oxw(2);e.Q6J("nzType",!0===s.cvcShowIcon?e.xi3(1,5,s.cvcAttrValue,"icon-name"):s.cvcShowIcon)("nzTwotoneColor",s.cvcIconColor)("nzTheme",s.cvcIconTheme)("ngClass",e.VKq(8,oa,!0===s.cvcZoomIcon)),e.uIk("style","color: "+s.cvcIconColor,e.Ckj)}}function jr(l,g){if(1&l&&(e._UZ(0,"span",17),e.ALo(1,"highlightTypeahead"),e.ALo(2,"evidenceEnumDisplay")),2&l){const s=e.oxw(2);e.Q6J("innerHtml",e.xi3(1,1,e.xi3(2,4,s.cvcAttrValue,"display-string"===s.cvcShowLabel?s.cvcShowLabel:"short-string"),s.cvcEmphasize),e.oJD)}}function ne(l,g){if(1&l&&(e.YNc(0,gi,2,10,"i",14),e.YNc(1,jr,3,7,"span",15)),2&l){const s=e.oxw();e.Q6J("ngIf",s.cvcAttrValue&&s.cvcShowIcon),e.xp6(1),e.Q6J("ngIf",s.cvcShowLabel)}}let Ie=(()=>{class l{constructor(){this.cvcShowLabel="display-string",this.cvcShowIcon=!0,this.cvcZoomIcon=!1,this.cvcContext="default",this.cvcMode="default",this.cvcChecked=!1,this.cvcIconColor="#797979",this.cvcLabelColor="#434343",this.cvcIconTheme="outline",this.cvcFullWidth=!1,this.cvcOnClose=new e.vpe}ngOnChanges(s){s.cvcContext&&"compact"===s.cvcContext.currentValue&&(this.cvcShowIcon=!0,this.cvcShowLabel=!1,this.cvcZoomIcon=!0)}}return l.\u0275fac=function(s){return new(s||l)},l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-attribute-tag"]],hostVars:2,hostBindings:function(s,p){2&s&&e.ekj("full-width",!0===p.cvcFullWidth)},inputs:{cvcAttrValue:"cvcAttrValue",cvcShowLabel:"cvcShowLabel",cvcShowIcon:"cvcShowIcon",cvcZoomIcon:"cvcZoomIcon",cvcTooltip:"cvcTooltip",cvcContext:"cvcContext",cvcMode:"cvcMode",cvcChecked:"cvcChecked",cvcEmphasize:"cvcEmphasize",cvcIconColor:"cvcIconColor",cvcLabelColor:"cvcLabelColor",cvcIconTheme:"cvcIconTheme",cvcFullWidth:"cvcFullWidth"},outputs:{cvcOnClose:"cvcOnClose"},features:[e.TTD],decls:6,vars:4,consts:[["class","default",4,"ngIf"],["class","menu-item",4,"ngIf"],["class","select-item",4,"ngIf"],["class","compact",4,"ngIf"],["tagContent",""],[1,"default"],["nz-tooltip","",3,"nzMode","nzTooltipTitle","nzChecked","nzOnClose"],[3,"ngTemplateOutlet"],[1,"menu-item"],[3,"nzMode","nzChecked"],[1,"select-item"],[3,"nzMode","nzOnClose"],[1,"compact"],["nz-tooltip","",3,"nzMode","nzTooltipTitle"],["nz-icon","","class","tag-icon",3,"nzType","nzTwotoneColor","nzTheme","ngClass",4,"ngIf"],["class","tag-label",3,"innerHtml",4,"ngIf"],["nz-icon","",1,"tag-icon",3,"nzType","nzTwotoneColor","nzTheme","ngClass"],[1,"tag-label",3,"innerHtml"]],template:function(s,p){1&s&&(e.YNc(0,vs,3,4,"span",0),e.YNc(1,ea,3,3,"span",1),e.YNc(2,na,3,2,"span",2),e.YNc(3,Yi,3,3,"span",3),e.YNc(4,ne,2,2,"ng-template",null,4,e.W1O)),2&s&&(e.Q6J("ngIf","default"===p.cvcContext),e.xp6(1),e.Q6J("ngIf","menu-item"===p.cvcContext),e.xp6(1),e.Q6J("ngIf","select-item"===p.cvcContext),e.xp6(1),e.Q6J("ngIf","compact"===p.cvcContext))},dependencies:[a.mk,a.O5,a.tP,An.j,ue.Ls,eo.SY,ts.Do,fr.A],styles:['.hide-dropdown[_ngcontent-%COMP%]{display:none}.full-width[_nghost-%COMP%]{width:100%}.full-width[_nghost-%COMP%]   nz-tag[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]   nz-tag[_ngcontent-%COMP%]{margin-right:0;margin-inline-end:4px}.default[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]{margin:0;padding:0 2px 0 0;margin-inline-end:4px;max-width:100%}.default[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon[_ngcontent-%COMP%], .default[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon-large[_ngcontent-%COMP%]{display:inline-block}.default[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon[_ngcontent-%COMP%]{padding:3px 2px 3px 4px;margin:-3px 0}.default[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon-large[_ngcontent-%COMP%]{padding:3px 2px 3px 4px;margin:-3px 0}.default[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon-large[_ngcontent-%COMP%]     svg{transform:scale(1.25)}.default[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-label[_ngcontent-%COMP%]{display:inline-block;margin:-3px 0 -4px;padding:3px 3px 3px 2px;line-height:1}.default[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]     i.ant-tag-close-icon.anticon-close{transition:none;margin-left:3px}.compact[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]{margin:0;padding:0 2px 0 0;margin-inline-end:4px;max-width:100%}.compact[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon[_ngcontent-%COMP%], .compact[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon-large[_ngcontent-%COMP%]{display:inline-block}.compact[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon[_ngcontent-%COMP%]{padding:3px 2px 3px 4px;margin:-3px 0}.compact[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon-large[_ngcontent-%COMP%]{padding:3px 2px 3px 4px;margin:-3px 0}.compact[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon-large[_ngcontent-%COMP%]     svg{transform:scale(1.25)}.compact[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-label[_ngcontent-%COMP%]{display:inline-block;margin:-3px 0 -4px;padding:3px 3px 3px 2px;line-height:1}.compact[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]     i.ant-tag-close-icon.anticon-close{transition:none;margin-left:3px}.menu-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]{background-color:#fff}.menu-item[_ngcontent-%COMP%]   nz-tag.ant-tag-checkable[_ngcontent-%COMP%]{border:1px solid #d9d9d9}.menu-item[_ngcontent-%COMP%]   nz-tag.ant-tag-checkable[_ngcontent-%COMP%]:active{background-color:#e6f7ff}.menu-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]:not(.menu-item   nz-tag.ant-tag-checkable-checked)[_ngcontent-%COMP%]:hover{color:#000000d9;border-color:#1890ff}.menu-item[_ngcontent-%COMP%]   nz-tag.ant-tag-checkable-checked[_ngcontent-%COMP%]{border:transparent;background-color:#fff;color:#000000d9}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]{margin:0;padding:0 2px 0 0;margin-inline-end:4px;max-width:100%}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon[_ngcontent-%COMP%], .select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon-large[_ngcontent-%COMP%]{display:inline-block}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon[_ngcontent-%COMP%]{padding:3px 2px 3px 4px;margin:-3px 0}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon-large[_ngcontent-%COMP%]{padding:3px 2px 3px 4px;margin:-3px 0}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon-large[_ngcontent-%COMP%]     svg{transform:scale(1.25)}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-label[_ngcontent-%COMP%]{display:inline-block;margin:-3px 0 -4px;padding:3px 3px 3px 2px;line-height:1}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]     i.ant-tag-close-icon.anticon-close{transition:none;margin-left:3px}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]{background:#f5f5f5;border:1px solid #f0f0f0}.multi-select-item[_ngcontent-%COMP%]{display:inline-block;margin-top:-3px;margin-bottom:-3px;margin-left:-4px;padding-left:4px}.multi-select-item[_ngcontent-%COMP%]   .tag-icon[_ngcontent-%COMP%]:after{content:" "}.typeahead-match[_ngcontent-%COMP%]{font-weight:700}'],changeDetection:0}),l})();const he=["optionTemplates"];function Ke(l,g){if(1&l&&e._UZ(0,"cvc-attribute-tag",4),2&l){const s=e.oxw().$implicit;e.Q6J("cvcAttrValue",s)}}function Dt(l,g){1&l&&(e.ynx(0),e.YNc(1,Ke,1,1,"ng-template",null,3,e.W1O),e.BQk())}function pn(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"div",5)(1,"cvc-attribute-tag",6),e.NdJ("cvcOnClose",function(O){e.CHM(s);const Ce=e.oxw();return e.KtG(Ce.onTagClose$.next(O))}),e.qZA()()}if(2&l){const s=g.$implicit,p=e.oxw();e.xp6(1),e.Q6J("cvcAttrValue",s.nzValue)("cvcContext",p.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",p.props.isMultiSelect?"default":"closeable")}}const Mn={Evidence:{PREDICTIVE:{SUPPORTS:"Experiment or study supports the variant's response to a drug",DOES_NOT_SUPPORT:"Experiment or study does not support, or was inconclusive of an interaction between the variant and a drug"},DIAGNOSTIC:{SUPPORTS:"Experiment or study supports the variant's impact on the diagnosis of disease or subtype",DOES_NOT_SUPPORT:"Experiment or study does not support the variant's impact on diagnosis of disease or subtype"},PROGNOSTIC:{SUPPORTS:"Experiment or study supports the variant's impact on prognostic outcome",DOES_NOT_SUPPORT:"Experiment or study does not support a prognostic association between variant and outcome"},PREDISPOSING:{SUPPORTS:"Suggests a pathogenic or a protective role for a germline variant in cancer",DOES_NOT_SUPPORT:"Supports a benign (for Predisposition) or lack of protective (for Protectiveness) role for a germline variant in cancer."},FUNCTIONAL:{SUPPORTS:"Experiment or study supports the variant causing alteration or non-alteration of the gene product function",DOES_NOT_SUPPORT:"Experiment or study does not support the variant causing alteration or non-alteration of the gene product function"},ONCOGENIC:{NA:"Not Applicable for Oncogenic Evidence Type.",SUPPORTS:"Supports an oncogenic or protective role for a somatic variant.",DOES_NOT_SUPPORT:"Supports a benign (for Oncogenicity) or lack of protective (for Protectiveness) role for a somatic variant in cancer."}},Assertion:{PREDICTIVE:{SUPPORTS:"Supports the variant's response to a drug",DOES_NOT_SUPPORT:"Does not support, or was inconclusive of an interaction between the variant and a drug"},DIAGNOSTIC:{SUPPORTS:"Supports the variant's impact on the diagnosis of disease or subtype",DOES_NOT_SUPPORT:"Does not support the variant's impact on diagnosis of disease or subtype"},PROGNOSTIC:{SUPPORTS:"Supports the variant's impact on prognostic outcome",DOES_NOT_SUPPORT:"Does not support a prognostic association between variant and outcome"},PREDISPOSING:{SUPPORTS:"Suggests a pathogenic or a protective role for a germline variant in cancer",DOES_NOT_SUPPORT:"Does not support an association between the variant and disease causation"},FUNCTIONAL:{SUPPORTS:"Supports the variant causing alteration or non-alteration of the gene product function",DOES_NOT_SUPPORT:"Does not support the variant causing alteration or non-alteration of the gene product function"},ONCOGENIC:{SUPPORTS:"Supports an oncogenic or protective role for a somatic variant",DOES_NOT_SUPPORT:"Does not support an association between the variant and disease causation"}}},no=bo(ko(),fo()),vo={types:[{name:"direction-select",wrappers:["form-field"],component:(()=>{class l extends no{constructor(s){super(),this.cdr=s,this.defaultOptions={props:{label:"Direction",labelFn:p=>`${p} Direction`,required:!0,isMultiSelect:!1,placeholder:"Select Entity Direction",placeholderFn:(p,O)=>`Select ${O?O+" ":""}${p} Direction`,requireTypePromptFn:p=>`Select ${p} Type to select its Direction`,formMode:"add"}},this.directionEnum$=new Be.X([])}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEnumSelectField({optionEnum$:this.directionEnum$,optionTemplate$:this.optionTemplate$,changeDetectorRef:this.cdr})}configureStateConnections(){if(!this.state)return console.error(`${this.field.id} requires a form state to populate its options, none was found.`),void(this.placeholder$=new Be.X("ERROR: Form state not found"));if(this.props.label=this.props.labelFn(this.state.entityName),this.props.tooltip=`An indicator of whether the ${this.state.entityName} statement supports or refutes the clinical significance of an event.`,this.placeholder$=new Be.X(this.props.placeholderFn(this.state.entityName)),!this.state.enums.direction$)return void console.error(`${this.field.id} could not find form state's direction$ to populate select.`);this.state.enums.direction$.pipe((0,zn.t)(this)).subscribe(p=>{this.directionEnum$.next(p)}),this.optionTemplates||console.info(`${this.field.id} could not find its optionTemplates QueryList to populate its select options, so simple text labels will be displayed.`),this.optionTemplate$=this.optionTemplates?.changes.pipe((0,S.U)(p=>p.map(O=>O)));const s=`${this.state.entityName.toLowerCase()}Type$`;this.state.fields[s]?(this.onEntityType$=this.state.fields[s],this.onEntityType$.pipe((0,Ei.T)("add"===this.props.formMode?0:1),(0,zn.t)(this)).subscribe(p=>{p?(this.props.disabled=!1,this.props.description=void 0,this.props.extraType=void 0,this.placeholder$.next(this.props.placeholderFn(this.state.entityName,(0,Oi.E)(p)))):(this.props.disabled=!0,this.props.description=this.props.requireTypePromptFn(this.state.entityName),this.props.extraType="prompt"),this.formControl.value&&this.formControl.setValue(void 0)}),this.onValueChange$.pipe((0,ni.M)(this.onEntityType$),(0,zn.t)(this)).subscribe(([p,O])=>{!O||!p||!this.state||(this.props.extraType="description",this.props.description=Mn[this.state.entityName][O][p],this.field.formControl.markAsTouched())})):console.error(`${this.field.id} could not find form state's ${s} to populate Direction options.`)}}return l.\u0275fac=function(s){return new(s||l)(e.Y36(e.sBO))},l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-direction-select"]],viewQuery:function(s,p){if(1&s&&e.Gf(he,5,e.Rgc),2&s){let O;e.iGM(O=e.CRH())&&(p.optionTemplates=O)}},features:[e.qOj],decls:7,vars:15,consts:[[3,"cvcFormControl","cvcFormlyAttributes","cvcSelectMode","cvcPlaceholder","cvcCustomTemplate","cvcOptions","cvcShowError","cvcDisabled"],[4,"ngFor","ngForOf"],["selectedTemplate",""],["optionTemplates",""],[3,"cvcAttrValue"],[1,"ant-select-selection-item-content"],[3,"cvcAttrValue","cvcContext","cvcMode","cvcOnClose"]],template:function(s,p){if(1&s&&(e._UZ(0,"cvc-enum-select",0),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.YNc(3,Dt,3,0,"ng-container",1),e.ALo(4,"ngrxPush"),e.YNc(5,pn,2,3,"ng-template",null,2,e.W1O)),2&s){const O=e.MAs(6);e.Q6J("cvcFormControl",p.formControl)("cvcFormlyAttributes",p.field)("cvcSelectMode",p.props.isMultiSelect?"multiple":"default")("cvcPlaceholder",e.lcZ(1,9,p.placeholder$))("cvcCustomTemplate",O)("cvcOptions",e.lcZ(2,11,p.selectOption$))("cvcShowError",p.showError)("cvcDisabled",p.props.disabled),e.xp6(3),e.Q6J("ngForOf",e.lcZ(4,13,p.directionEnum$))}},dependencies:[a.sg,wo,Ie,lo.fM],changeDetection:0}),l})()}]};let Uo=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[a.ez,t.UX,_.X0.forChild(vo),Lo,Kn,xr]}),l})();var pi,Po=c(1227),oi=c(2024),jo=c(7473),zi=c(9928);function ao(l,g){if(1&l&&e._uU(0),2&l){const s=e.oxw();e.Oqu(s.successMessage)}}function Mr(l,g){if(1&l&&(e.ynx(0),e._uU(1),e.BQk()),2&l){const s=e.oxw();e.xp6(1),e.hij(' "',s.model.name,'" ')}}const mr=function(){return[0,0]};let Dr=((pi=class{set cvcSearchString(g){g&&this.searchString$.next(g)}constructor(g,s){this.query=g,this.errors=s,this.cvcOnCreate=new e.vpe,this.form=new t.nJ({}),this.model={name:""},this.formLayout="horizontal",this.options={formState:{formLayout:this.formLayout}},this.onSubmit$=new E.x,this.searchString$=new Be.X(void 0),this.addDiseaseMutator=new oi.U(this.errors),this.fields=[{key:"doid",type:"base-input",props:{label:"DOID",keydown:(p,O)=>{"Tab"===O.code&&O.stopPropagation()}}},{key:"name",props:{hidden:!0,required:!0}}],this.searchString$.pipe((0,zn.t)(this)).subscribe(p=>{p&&(this.model.name=p)}),this.onSubmit$.pipe((0,zn.t)(this)).subscribe(p=>{console.log("disease-quick-add form model submitted.",p),this.submitDisease(p)})}submitDisease(g){g.name?this.mutationState=this.addDiseaseMutator.mutate(this.query,this.model,{},s=>{console.log("disease-quick-add submit data callback",s),s.addDisease&&(this.successMessage=s.addDisease.new?`New Disease ${s.addDisease.disease.name} added.`:`Existing Disease ${s.addDisease.disease.name} with DOID ${s.addDisease.disease.doid} found. `,setTimeout(()=>{s&&s.addDisease&&this.cvcOnCreate.next(s.addDisease.disease.id)},1e3))}):console.error("disease-quick-add form submitDisease requires model with valid name.")}}).\u0275fac=function(g){return new(g||pi)(e.Y36(Fn.MPi),e.Y36(jo.Y))},pi.\u0275cmp=e.Xpm({type:pi,selectors:[["cvc-disease-quick-add-form"]],inputs:{cvcSearchString:"cvcSearchString"},outputs:{cvcOnCreate:"cvcOnCreate"},decls:11,vars:11,consts:[["entityType","Disease",3,"mutationState","successMessage"],["success",""],["nz-form","","nzLayout","horizontal",3,"formGroup","ngSubmit"],[3,"nzGutter"],["nzSpan","24"],[3,"form","fields","model","options","modelChange"],["nz-button","","nzType","primary","nzBlock","",3,"disabled"],[4,"ngIf"]],template:function(g,s){if(1&g&&(e.TgZ(0,"cvc-form-submission-status-display",0),e.YNc(1,ao,1,1,"ng-template",null,1,e.W1O),e.TgZ(3,"form",2),e.NdJ("ngSubmit",function(){return s.onSubmit$.next(s.model)}),e.TgZ(4,"nz-row",3)(5,"nz-col",4)(6,"formly-form",5),e.NdJ("modelChange",function(O){return s.model=O}),e.qZA()(),e.TgZ(7,"nz-col",4)(8,"button",6),e._uU(9," Add Disease\xa0 "),e.YNc(10,Mr,2,1,"ng-container",7),e.qZA()()()()()),2&g){const p=e.MAs(2);e.Q6J("mutationState",s.mutationState)("successMessage",p),e.xp6(3),e.Q6J("formGroup",s.form),e.xp6(1),e.Q6J("nzGutter",e.DdM(10,mr)),e.xp6(2),e.Q6J("form",s.form)("fields",s.fields)("model",s.model)("options",s.options),e.xp6(2),e.Q6J("disabled",!s.form.valid),e.xp6(2),e.Q6J("ngIf",s.model.name)}},dependencies:[a.O5,t._Y,t.JL,t.sg,_.T7,To.ix,de.w,et.dQ,R.t3,R.SK,N.Lr,zi.F],encapsulation:2,changeDetection:0}),pi);Dr=(0,V.gn)([(0,zn.c)()],Dr);const Vr=["optionTemplates"];function gr(l,g){if(1&l&&(e.ynx(0),e.TgZ(1,"strong"),e._uU(2,"DOID:"),e.qZA(),e._UZ(3,"span",9),e.ALo(4,"highlightTypeahead"),e.BQk()),2&l){const s=e.oxw(2).$implicit,p=e.oxw().ngrxLet;e.xp6(3),e.Q6J("innerHtml",e.xi3(4,1,s.doid,p),e.oJD)}}function Oa(l,g){if(1&l&&(e.ynx(0),e._uU(1," \xa0 "),e.TgZ(2,"strong"),e._uU(3,"Aliases: "),e.qZA(),e.TgZ(4,"em"),e._UZ(5,"span",10),e.ALo(6,"highlightTypeahead"),e.qZA(),e.BQk()),2&l){const s=e.oxw(2).$implicit,p=e.oxw().ngrxLet;e.xp6(5),e.Q6J("nzTooltipTitle",s.diseaseAliases.join(", "))("innerHtml",e.xi3(6,2,s.diseaseAliases.join(", "),p),e.oJD)}}function ns(l,g){if(1&l&&(e._UZ(0,"cvc-entity-tag",6),e.TgZ(1,"span",7),e.YNc(2,gr,5,4,"ng-container",8),e.YNc(3,Oa,7,5,"ng-container",8),e._uU(4),e.qZA()),2&l){const s=e.oxw().$implicit,p=e.oxw().ngrxLet;e.Q6J("cvcDisableLink",!0)("cvcCacheId",s.__typename+":"+s.id)("cvcEmphasize",p),e.xp6(2),e.Q6J("ngIf",s.doid),e.xp6(1),e.Q6J("ngIf",s.diseaseAliases.length>0),e.xp6(1),e.hij(" ",p," ")}}function _s(l,g){1&l&&(e.ynx(0),e.YNc(1,ns,5,6,"ng-template",null,5,e.W1O),e.BQk())}function nc(l,g){if(1&l&&(e.ynx(0),e.YNc(1,_s,3,0,"ng-container",4),e.ALo(2,"ngrxPush"),e.BQk()),2&l){const s=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,s.result$))}}function Gl(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"div",11)(1,"cvc-entity-tag",12),e.NdJ("cvcOnClose",function(){const Ce=e.CHM(s).$implicit,ft=e.oxw();return e.KtG(ft.onTagClose$.next(Ce.nzValue))}),e.qZA()()}if(2&l){const s=g.$implicit,p=e.oxw();e.xp6(1),e.Q6J("cvcCacheId","Disease:"+s.nzValue)("cvcContext",p.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",p.props.isMultiSelect?"default":"closeable")}}function oc(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"cvc-disease-quick-add-form",13),e.NdJ("cvcOnCreate",function(O){e.CHM(s);const Ce=e.oxw();return e.KtG(Ce.onPopulate$.next(O))}),e.qZA()}2&l&&e.Q6J("cvcSearchString",g.$implicit)}const Qr=bo(ko(),Oo());let wn=(()=>{class l extends Qr{constructor(s,p,O){super(),this.taq=s,this.tq=p,this.changeDetectorRef=O,this.defaultOptions={props:{entityName:{singular:"Disease",plural:"Diseases"},tooltip:"Cancer or cancer subtype that is a result of the described variant",isMultiSelect:!1,requireType:!0,placeholder:"Search Diseases",requireTypePromptFn:(Ce,ft)=>`Select an ${Ce} Type to select an associated Disease${ft?"(s)":""}`,addFormTitle:"Add a New Disease"}},this.placeholder$=new Be.X(void 0),this.selectOpen$=new Qi.t}ngAfterViewInit(){this.configureBaseField(),this.configureEntitySelectField({typeaheadQuery:this.taq,typeaheadParam$:void 0,tagQuery:this.tq,getTypeaheadVarsFn:this.getTypeaheadVarsFn,getTypeaheadResultsFn:this.getTypeaheadResultsFn,getTagQueryVarsFn:this.getTagQueryVarsFn,getTagQueryResultsFn:this.getTagQueryResultsFn,getSelectedItemOptionFn:this.getSelectedItemOptionFn,getSelectOptionsFn:this.getSelectOptionsFn,changeDetectorRef:this.changeDetectorRef,selectOpen$:this.selectOpen$,selectComponent:this.selectComponent}),this.state&&this.state.formReady$?this.state.formReady$.pipe((0,vt.h)(s=>s),(0,es.q)(1),(0,zn.t)(this)).subscribe(s=>{this.configureField()}):this.configureField()}configureField(){this.placeholder$.next(this.props.placeholder),this.configureStateConnections()}configureStateConnections(){if(this.state){if(this.state.requires.requiresDisease$?this.onRequiresDisease$=this.state.requires.requiresDisease$:console.warn(`${this.field.id} field's form provides a state, but could not find requiresDisease$ subject to attach.`),this.props.requireType){const s=`${this.state.entityName.toLowerCase()}Type$`;this.state.fields[s]?this.onEntityType$=this.state.fields[s]:console.error(`${this.field.id} requireType is true, however form state does not provide Subject ${s}.`)}!this.onRequiresDisease$||!this.onEntityType$||(0,Do.a)([this.onRequiresDisease$,this.onEntityType$,this.onValueChange$]).pipe((0,zn.t)(this)).subscribe(([s,p,O])=>{this.onStateUpdates(s,p,O)})}}onStateUpdates(s,p,O){!s&&p&&(this.props.required=!1,this.props.disabled=!0,this.props.description=`${(0,Oi.E)(p)} ${this.state.entityName} does not include associated diseases`,this.props.extraType="prompt",this.cdr.markForCheck()),this.props.requireType&&!p&&(this.props.required=!1,this.props.disabled=!0,this.props.description=this.props.requireTypePromptFn(this.state.entityName,this.props.isMultiSelect),this.props.extraType="prompt"),s&&(this.props.required=!0,this.props.disabled=!1,this.props.description=void 0,this.props.extraType=void 0),(!s&&void 0!==O||this.props.requireType&&!p&&this.formControl.value)&&this.resetField()}getTypeaheadVarsFn(s){return{name:s}}getTypeaheadResultsFn(s){return s.data.diseaseTypeahead}getTagQueryVarsFn(s){return{id:s}}getTagQueryResultsFn(s){return s.data.disease}getSelectedItemOptionFn(s){return{value:s.id,label:s.name}}getSelectOptionsFn(s,p){return s.map((O,Ce)=>({label:p.get(Ce)||O.name,value:O.id}))}}return l.\u0275fac=function(s){return new(s||l)(e.Y36(Fn.RYL),e.Y36(Fn.QVn),e.Y36(e.sBO))},l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-disease-select"]],viewQuery:function(s,p){if(1&s&&e.Gf(Vr,5,e.Rgc),2&s){let O;e.iGM(O=e.CRH())&&(p.optionTemplates=O)}},features:[e.qOj],decls:12,vars:26,consts:[[3,"cvcAddEntity","cvcSelectMode","cvcCustomTemplate","cvcFormControl","cvcFormlyAttributes","cvcEntityName","cvcPlaceholder","cvcResults","cvcOptions","cvcShowError","cvcDisabled","cvcLoading","cvcSelectOpen","cvcOnSearch","cvcOnOpenChange","cvcSelectComponent","cvcOnModelChange"],[4,"ngrxLet"],["selectedTemplate",""],["addDisease",""],[4,"ngFor","ngForOf"],["optionTemplates",""],[3,"cvcDisableLink","cvcCacheId","cvcEmphasize"],["nz-typography","","nzType","secondary"],[4,"ngIf"],[3,"innerHtml"],["nz-typography","","nzType","secondary","nz-tooltip","",3,"nzTooltipTitle","innerHtml"],[1,"ant-select-selection-item-content"],[3,"cvcCacheId","cvcContext","cvcMode","cvcOnClose"],[3,"cvcSearchString","cvcOnCreate"]],template:function(s,p){if(1&s&&(e.TgZ(0,"cvc-entity-select",0),e.NdJ("cvcOnSearch",function(Ce){return p.onSearch$.next(Ce)})("cvcOnOpenChange",function(Ce){return p.onOpenChange$.next(Ce)})("cvcSelectComponent",function(Ce){return p.selectComponent=Ce})("cvcOnModelChange",function(Ce){return p.props.change&&p.props.change(p.field,Ce)}),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.ALo(3,"ngrxPush"),e.ALo(4,"ngrxPush"),e.ALo(5,"ngrxPush"),e.ALo(6,"ngrxPush"),e.qZA(),e.YNc(7,nc,3,3,"ng-container",1),e.YNc(8,Gl,2,3,"ng-template",null,2,e.W1O),e.YNc(10,oc,1,1,"ng-template",null,3,e.W1O)),2&s){const O=e.MAs(9),Ce=e.MAs(11);e.Q6J("cvcAddEntity",Ce)("cvcSelectMode",p.props.isMultiSelect?"multiple":"default")("cvcCustomTemplate",O)("cvcFormControl",p.formControl)("cvcFormlyAttributes",p.field)("cvcEntityName",p.props.entityName)("cvcPlaceholder",e.lcZ(1,14,p.placeholder$))("cvcResults",e.lcZ(2,16,p.result$))("cvcOptions",e.lcZ(3,18,p.selectOption$))("cvcShowError",p.showError)("cvcDisabled",p.onRequiresDisease$&&!e.lcZ(4,20,p.onRequiresDisease$))("cvcLoading",e.lcZ(5,22,p.isLoading$))("cvcSelectOpen",e.lcZ(6,24,p.selectOpen$)),e.xp6(7),e.Q6J("ngrxLet",p.onSearch$)}},dependencies:[a.sg,a.O5,lo.eJ,eo.SY,X.ZU,an,Qt.J,Dr,lo.fM,fr.A],changeDetection:0}),l})();const Qo={types:[{name:"disease-select",wrappers:["form-field"],component:wn,defaultOptions:{props:{label:"Disease"}}},{name:"disease-multi-select",wrappers:["form-field"],component:wn,defaultOptions:{props:{isMultiSelect:!0,label:"Diseases"}}}]};let Zc=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[a.ez,t.UX,_.X0.forChild(Qo),yt.L,To.sL,He.LV,Wo.$6,_i.Qp,ue.PV,I.o7,R.Jb,eo.cg,Re.zf,N.U5,H.ic,X.ZJ,An.X,Po.g,Lo,jt,tt.s,Te.x]}),l})();const ia=["optionTemplates"];function Fi(l,g){if(1&l&&e._UZ(0,"cvc-attribute-tag",4),2&l){const s=e.oxw().$implicit;e.Q6J("cvcAttrValue",s)}}function ys(l,g){1&l&&(e.ynx(0),e.YNc(1,Fi,1,1,"ng-template",null,3,e.W1O),e.BQk())}function os(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"div",5)(1,"cvc-attribute-tag",6),e.NdJ("cvcOnClose",function(O){e.CHM(s);const Ce=e.oxw();return e.KtG(Ce.onTagClose$.next(O))}),e.qZA()()}if(2&l){const s=g.$implicit,p=e.oxw();e.xp6(1),e.Q6J("cvcAttrValue",s.nzValue)("cvcContext",p.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",p.props.isMultiSelect?"default":"closeable")}}const Or={DIAGNOSTIC:"Evidence pertains to a variant's impact on patient diagnosis (cancer subtype).",PREDICTIVE:"Evidence pertains to a variant's effect on therapeutic response.",PROGNOSTIC:"Evidence pertains to a variant's impact on disease progression, severity, or patient survival.",PREDISPOSING:"Evidence pertains to a germline variant's role in conferring susceptibility to disease (including pathogenicity evaluations).",ONCOGENIC:"Evidence pertains to a somatic variant's involvement in tumor pathogenesis as described by the Hallmarks of Cancer.",FUNCTIONAL:"Evidence pertains to a variant that alters biological function from the reference state."},wa=bo(ko(),fo()),ra={types:[{name:"type-select",wrappers:["form-field"],component:(()=>{class l extends wa{constructor(s){super(),this.cdr=s,this.defaultOptions={props:{label:"ENTITY_NAME Type",entityName:{singular:"Entity",plural:"Entities"},placeholder:"Select an ENTITY_NAME Type",isMultiSelect:!1}},this.typeEnums$=new Be.X([])}ngAfterViewInit(){this.configureBaseField(),this.state&&this.state.formReady$?this.state.formReady$.pipe((0,vt.h)(s=>s),(0,es.q)(1),(0,zn.t)(this)).subscribe(s=>{this.configureField()}):this.configureField()}configureField(){this.onValueChange$.pipe((0,zn.t)(this)).subscribe(s=>{s?(this.props.description=Or[s],this.props.extraType="description",this.field.formControl.markAsTouched()):(this.props.description=void 0,this.props.extraType=void 0)}),this.state?(this.props.placeholder=this.props.placeholder.replace("ENTITY_NAME",this.state.entityName),this.props.label=this.props.label.replace("ENTITY_NAME",this.state.entityName),this.props.tooltip=`Type of clinical outcome associated with the ${this.state.entityName} statement.`,this.state.enums.entityType$?(this.state.enums.entityType$.pipe((0,zn.t)(this)).subscribe(s=>{this.typeEnums$.next(s)}),this.optionTemplates||console.error(`${this.field.id} could not find its optionTemplates QueryList to populate its select options, so simple text labels will be displayed.`),this.optionTemplate$=this.optionTemplates?.changes.pipe((0,S.U)(s=>s.map(p=>p))),this.configureEnumSelect()):console.error(`${this.field.id} could not find state's enums.inputEnum$ to populate its select options.`)):console.error(`${this.field.id} requires a form state to configure itself, none was found.`)}configureEnumSelect(){this.configureEnumSelectField({optionEnum$:this.typeEnums$,optionTemplate$:this.optionTemplate$,changeDetectorRef:this.cdr})}}return l.\u0275fac=function(s){return new(s||l)(e.Y36(e.sBO))},l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-type-select"]],viewQuery:function(s,p){if(1&s&&e.Gf(ia,5,e.Rgc),2&s){let O;e.iGM(O=e.CRH())&&(p.optionTemplates=O)}},features:[e.qOj],decls:6,vars:13,consts:[[3,"cvcFormControl","cvcFormlyAttributes","cvcSelectMode","cvcPlaceholder","cvcCustomTemplate","cvcOptions","cvcShowError","cvcDisabled"],[4,"ngFor","ngForOf"],["selectedTemplate",""],["optionTemplates",""],[3,"cvcAttrValue"],[1,"ant-select-selection-item-content"],[3,"cvcAttrValue","cvcContext","cvcMode","cvcOnClose"]],template:function(s,p){if(1&s&&(e._UZ(0,"cvc-enum-select",0),e.ALo(1,"ngrxPush"),e.YNc(2,ys,3,0,"ng-container",1),e.ALo(3,"ngrxPush"),e.YNc(4,os,2,3,"ng-template",null,2,e.W1O)),2&s){const O=e.MAs(5);e.Q6J("cvcFormControl",p.formControl)("cvcFormlyAttributes",p.field)("cvcSelectMode",p.props.isMultiSelect?"multiple":"default")("cvcPlaceholder",p.props.placeholder)("cvcCustomTemplate",O)("cvcOptions",e.lcZ(1,9,p.selectOption$))("cvcShowError",p.showError)("cvcDisabled",p.props.disabled),e.xp6(2),e.Q6J("ngForOf",e.lcZ(3,11,p.typeEnums$))}},dependencies:[a.sg,Ie,wo,lo.fM],changeDetection:0}),l})()}]};let s1=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[a.ez,t.UX,_.X0.forChild(ra),Lo,xr,Kn]}),l})();var ic=c(9154);let sr=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[a.ez,X.ZJ]}),l})();var Vi=c(2962),Br=c(2787),Go=c(3740),wr=c(6699),Cs=c(3620),rc=c(1757),Pr=c(9111),sc=c(9377);const Pa={isSelectCol:l=>"select"===l.type,isEntityTagCol:l=>"entity-tag"===l.type,isEnumTagCol:l=>"enum-tag"===l.type,isTextTagCol:l=>"text-tag"===l.type},Ia=l=>void 0!==l.sort,ks=l=>void 0!==l.filter,Kl={description:Fn.Cp0.Description,disease:Fn.Cp0.DiseaseName,evidenceDirection:Fn.Cp0.EvidenceDirection,evidenceLevel:Fn.Cp0.EvidenceLevel,evidenceRating:Fn.Cp0.EvidenceRating,evidenceType:Fn.Cp0.EvidenceType,id:Fn.Cp0.Id,significance:Fn.Cp0.Significance,status:Fn.Cp0.Status,therapies:Fn.Cp0.TherapyName,variantOrigin:Fn.Cp0.VariantOrigin},Jc={molecularProfile:"molecularProfileName",disease:"diseaseName",therapies:"therapyName",evidenceItem:"id"},Y=["selected","id"];class ee{constructor(){this.sortStreams=[],this.filterStreams=[],this.config=this.configureColumnStreams([{key:"selected",label:"Select",type:"select",width:"25px",align:"center",fixedLeft:!0,checkbox:{th:{showCheckbox:!1},td:{showCheckbox:!0}}},{hidden:!0,key:"id",label:"ID",type:"default",width:"30px"},{hidden:!0,key:"status",label:"Status",type:"default",width:"50px"},{key:"id",label:"Evidence",type:"entity-tag",width:"95px",context:"evidenceItem",fixedLeft:!0,showStatus:!0,tag:{fullWidth:!0},sort:{default:"ascend"},filter:{inputType:"default",options:[{key:"EID",value:null}],transform:g=>g?+g.toString().replace(/EID/i,""):null}},{key:"molecularProfile",label:"Molecular Profile",type:"entity-tag",width:"240px",sort:{},tag:{truncateLabel:"200px"},filter:{inputType:"default",typename:"MolecularProfile",options:[{key:"Filter Therapy Names",value:null}]}},{key:"disease",type:"entity-tag",label:"Disease",width:"240px",sort:{},tag:{truncateLabel:"200px"},filter:{inputType:"default",typename:"Disease",options:[{key:"Filter Disease Names",value:null}]}},{key:"therapies",label:"Therapies",type:"entity-tag",width:"275px",sort:{},tag:{maxTags:2,truncateLabel:"150px"},filter:{inputType:"default",typename:"Therapy",options:[{key:"Filter Therapy Names",value:null}]}},{key:"therapyInteractionType",label:"INT",tooltip:"Therapy Interaction Type",type:"enum-tag",width:"40px",align:"center",emptyValueCategory:"not-applicable",sort:{},filter:{options:this.getAttributeFilters((0,So.o6)(Fn.wkr))}},{key:"description",label:"DSC",tooltip:"Evidence Description",type:"text-tag",width:"40px",align:"center",fixedRight:!0,emptyValueCategory:"unspecified",sort:{},filter:{inputType:"default",options:[{key:"Search Descriptions",value:null}]}},{key:"evidenceType",label:"ET",tooltip:"Evidence Type",type:"enum-tag",width:"40px",align:"center",fixedRight:!0,sort:{},filter:{options:this.getAttributeFilters((0,So.o6)(Fn.kqt))}},{key:"evidenceLevel",label:"EL",tooltip:"Evidence Level",type:"enum-tag",width:"40px",align:"center",fixedRight:!0,sort:{},filter:{options:this.getAttributeFilters((0,So.o6)(Fn.Sx0))}},{key:"evidenceDirection",label:"ED",tooltip:"Evidence Direction",type:"enum-tag",width:"40px",align:"center",fixedRight:!0,sort:{},filter:{options:this.getAttributeFilters((0,So.o6)(Fn.tI1))}},{key:"significance",label:"SI",tooltip:"Significance",type:"enum-tag",align:"center",width:"40px",fixedRight:!0,sort:{},filter:{options:this.getAttributeFilters((0,So.o6)(Fn.y1h))}},{key:"evidenceRating",label:"ER",tooltip:"Evidence Rating",type:"enum-tag",width:"45px",align:"center",fixedRight:!0,tag:{showLabel:"short-string"},sort:{},filter:{options:[1,2,3,4,5].map(g=>({value:g,text:`${g} stars`}))}}])}get(){return this.config}getSortStreams(){return this.sortStreams}getFilterStreams(){return this.filterStreams}getAttributeFilters(g,s){return g.getValues().map(O=>({text:(0,Oi.E)(O),value:O,byDefault:s===O}))}configureColumnStreams(g){return g.forEach(s=>{const p=s;if(Ia(p)&&(p.sort.changes=new Be.X({key:p.key,value:p.sort.default??null}),this.sortStreams.push(p.sort.changes)),ks(p)){const O=p.filter.options.find(Ce=>Ce.byDefault)?.value;p.filter.changes=new Be.X({key:p.key,value:O??null}),this.filterStreams.push(p.filter.changes)}}),g}}var ce,D=c(8656);function Pe(l,g){1&l&&e.GkF(0)}const ut=function(l,g,s){return{$implicit:l,config:g,emphasize:s}};function mt(l,g){if(1&l&&(e.ynx(0),e.TgZ(1,"span",1),e.YNc(2,Pe,1,0,"ng-container",2),e.qZA(),e.BQk()),2&l){const s=g.$implicit,p=e.oxw();e.xp6(2),e.Q6J("ngTemplateOutlet",p.cvcTagTemplate)("ngTemplateOutletContext",e.kEZ(2,ut,s,p.config,null==p.config?null:p.config.emphasize))}}let nn=((ce=class{set cvcTagListConfig(g){!g||!g.tagList||!g.tag||(this.config=g,this.setEntities(g.tagList,g.tag))}constructor(){this.entities=[]}setEntities(g,s){this.entities=g&&0!==g.length&&0!==s.maxTags?g:[]}}).\u0275fac=function(g){return new(g||ce)},ce.\u0275cmp=e.Xpm({type:ce,selectors:[["cvc-entity-tag-list"]],inputs:{cvcTagListConfig:"cvcTagListConfig",cvcTagTemplate:"cvcTagTemplate"},decls:1,vars:1,consts:[[4,"ngFor","ngForOf"],[1,"tag-container"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(g,s){1&g&&e.YNc(0,mt,3,6,"ng-container",0),2&g&&e.Q6J("ngForOf",s.entities)},dependencies:[a.sg,a.tP],styles:[".typeahead-match[_ngcontent-%COMP%]{font-weight:700}.hide-dropdown[_ngcontent-%COMP%]{display:none}[_nghost-%COMP%]{display:inline-block;margin-bottom:-4px}.tag-container[_ngcontent-%COMP%]{display:inline-block;margin-bottom:4px}"],changeDetection:0}),ce);nn=(0,V.gn)([(0,zn.c)()],nn);var Nn=c(2616),io=c(1201);function uo(l,g){if(1&l&&(e._UZ(0,"span",6),e.ALo(1,"typenameToIcon"),e.ALo(2,"entityColor")),2&l){const s=g.$implicit;e.Q6J("nzType",e.lcZ(1,2,s.__typename))("nzTwotoneColor",e.lcZ(2,4,s.__typename))}}function qo(l,g){if(1&l&&(e.ynx(0),e.YNc(1,uo,3,6,"span",5),e.BQk()),2&l){const s=e.oxw();e.xp6(1),e.Q6J("ngForOf",s.entities)}}function Ni(l,g){if(1&l&&(e.TgZ(0,"span",7)(1,"strong"),e._uU(2),e.qZA()(),e._UZ(3,"span",6),e.ALo(4,"typenameToIcon"),e.ALo(5,"entityColor")),2&l){const s=e.oxw();e.xp6(2),e.Oqu(s.entities.length),e.xp6(1),e.Q6J("nzType",e.lcZ(4,3,s.entities[0].__typename))("nzTwotoneColor",e.lcZ(5,5,s.entities[0].__typename))}}const sa=function(l,g,s,p,O){return{tagList:l,tag:g,showPopover:s,status:p,emphasize:O}};function Gr(l,g){if(1&l&&e._UZ(0,"cvc-entity-tag-list",11),2&l){const s=e.oxw(2);e.Q6J("cvcTagTemplate",s.cvcTagTemplate)("cvcTagListConfig",e.qbA(2,sa,s.entities,s.config.tag,s.config.showPopover,s.config.status,s.config.emphasize))}}function Wr(l,g){1&l&&e._uU(0," Invalid config specified for entity-tag-list. ")}function Zi(l,g){if(1&l&&(e.TgZ(0,"div",8),e.YNc(1,Gr,1,8,"cvc-entity-tag-list",9),e.qZA(),e.YNc(2,Wr,1,0,"ng-template",null,10,e.W1O)),2&l){const s=e.MAs(3),p=e.oxw();e.xp6(1),e.Q6J("ngIf",p.config)("ngIfElse",s)}}let br=(()=>{class l{set cvcCollectionTagConfig(s){!s||!s.tagList||!s.tag||(this.setConfig(s),this.setEntities(s.tagList))}constructor(){this.cvcShowMaxIcons=5,this.cvcShowFullLabels=!0,this.entities=[]}setConfig(s){this.config=this.cvcShowFullLabels?{...s,tag:{...s.tag,truncateLabel:void 0}}:s}setEntities(s){this.entities=s&&0!==s.length?s:[]}}return l.\u0275fac=function(s){return new(s||l)},l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-entity-collection-tag"]],inputs:{cvcCollectionTagConfig:"cvcCollectionTagConfig",cvcTagTemplate:"cvcTagTemplate",cvcShowMaxIcons:"cvcShowMaxIcons",cvcShowFullLabels:"cvcShowFullLabels"},decls:9,vars:3,consts:[["nz-popover","","nzPopoverPlacement","top","nzPopoverTrigger","hover",3,"nzPopoverContent"],["nz-typography","","nzType","secondary",1,"plus-sign"],[4,"ngIf","ngIfElse"],["showCount",""],["tagListPopover",""],["class","entity-icon","nz-icon","","nzTheme","twotone",3,"nzType","nzTwotoneColor",4,"ngFor","ngForOf"],["nz-icon","","nzTheme","twotone",1,"entity-icon",3,"nzType","nzTwotoneColor"],["nz-typography","","nzType","secondary",1,"entity-count"],[1,"popover-container"],[3,"cvcTagTemplate","cvcTagListConfig",4,"ngIf","ngIfElse"],["noConfig",""],[3,"cvcTagTemplate","cvcTagListConfig"]],template:function(s,p){if(1&s&&(e.TgZ(0,"nz-tag",0)(1,"span",1)(2,"strong"),e._uU(3,"+"),e.qZA()(),e.YNc(4,qo,2,1,"ng-container",2),e.YNc(5,Ni,6,7,"ng-template",null,3,e.W1O),e.qZA(),e.YNc(7,Zi,4,2,"ng-template",null,4,e.W1O)),2&s){const O=e.MAs(6),Ce=e.MAs(8);e.Q6J("nzPopoverContent",Ce),e.xp6(4),e.Q6J("ngIf",p.entities.length<=p.cvcShowMaxIcons)("ngIfElse",O)}},dependencies:[a.sg,a.O5,An.j,X.ZU,Wo.lU,ue.Ls,nn,Nn.a,io.Z],styles:["[_nghost-%COMP%]{display:inline-block}.popover-container[_ngcontent-%COMP%]{max-width:300px}nz-tag[_ngcontent-%COMP%]{margin:0;padding:0;margin-inline-end:4px}nz-tag[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-block}nz-tag[_ngcontent-%COMP%]   .plus-sign[_ngcontent-%COMP%]{padding:3px 3px 3px 4px;margin:-3px 0;line-height:1}nz-tag[_ngcontent-%COMP%]   .entity-icon[_ngcontent-%COMP%]:first-child{padding-left:2px}nz-tag[_ngcontent-%COMP%]   .entity-icon[_ngcontent-%COMP%]{margin:-3px 1px -4px -1px;padding:3px 0;line-height:1}nz-tag[_ngcontent-%COMP%]   .entity-icon[_ngcontent-%COMP%]:last-child{padding-right:3px}nz-tag[_ngcontent-%COMP%]   .entity-count[_ngcontent-%COMP%]{margin-left:-2px;padding-right:4px}"],changeDetection:0}),l})();var qc=c(3489);function Jl(l,g){if(1&l&&(e.TgZ(0,"span",1),e._uU(1),e.ALo(2,"number"),e.ALo(3,"number"),e.qZA()),2&l){const s=g.ngIf;e.xp6(1),e.AsE(" ",e.lcZ(2,2,s.edgeCount)," of ",e.lcZ(3,4,s.filteredCount)," displayed\n")}}let Xc=(()=>{class l{ngOnInit(){this.tableCountsInfo$=this.cvcTableCountsConnection.pipe((0,vt.h)(s=>null!=s.totalCount||null!=s.filteredCount),(0,S.U)(s=>{const p=s.filteredCount,O=s.totalCount,Ce=s.edges;return null==p&&null==O&&console.log("Need to provide either filtered count or total count in the table counts component"),{edgeCount:Ce.length,filteredCount:p??O}}))}}return l.\u0275fac=function(s){return new(s||l)},l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-table-counts2"]],inputs:{cvcTableCountsConnection:"cvcTableCountsConnection"},decls:2,vars:3,consts:[["class","table-counts","nz-typography","","nzType","secondary",4,"ngIf"],["nz-typography","","nzType","secondary",1,"table-counts"]],template:function(s,p){1&s&&(e.YNc(0,Jl,4,6,"span",0),e.ALo(1,"ngrxPush")),2&s&&e.Q6J("ngIf",e.lcZ(1,1,p.tableCountsInfo$))},dependencies:[a.O5,X.ZU,a.JJ,lo.fM],styles:[":[_nghost-%COMP%]{border:1px solid red}.table-counts[_ngcontent-%COMP%]{display:inline-block}"],changeDetection:0}),l})();var cs,Rs=c(1374),Vs=c(9384);let ql=((cs=class{set cvcTableScrollerToIndex(g){void 0!==g&&this.scrollToIndex(g)}set cvcTableScrollerToOffset(g){void 0!==g&&this.scrollToIndex(g)}constructor(g){this.host=g,this.cvcTableScrollerOnScroll=new e.vpe,this.cvcTableScrollerOnFetch=new e.vpe,this.cvcTableScrollerTargetHeight=140,this.cvcTableScrollerFetchCount=50,this.onLoadThrottleTime=500,this.onScrollThrottleTime=250,this.onScrollDebounceTime=300}ngAfterViewInit(){if(!this.host||!this.host.cdkVirtualScrollViewport)throw new Error("cvcTableScroller directive could not obtain reference to host cdkVirtualScrollViewport.");this.viewport=this.host.cdkVirtualScrollViewport,this.scrolled$=this.viewport.elementScrolled(),this.rendered$=this.viewport.renderedRangeStream,this.rendered$.pipe((0,Rs.P)()).subscribe(()=>this.viewport.checkViewportSize()),this.scrolled$.pipe((0,Ri.p)(this.onScrollThrottleTime,Xo.z,{leading:!0,trailing:!0}),(0,St.b)(g=>this.cvcTableScrollerOnScroll.next("scroll")),(0,Cs.b)(this.onScrollDebounceTime),(0,zn.t)(this)).subscribe(g=>{this.cvcTableScrollerOnScroll.next("stop")}),this.scrolled$.pipe((0,S.U)(g=>this.viewport.measureScrollOffset("bottom")),(0,Vs.G)(),(0,vt.h)(([g,s])=>s<g&&s<this.cvcTableScrollerTargetHeight),(0,Ri.p)(this.onLoadThrottleTime),(0,zn.t)(this)).subscribe(g=>{this.cvcTableScrollerOnScroll.next("bottom");try{this.loadMore(this.cvcTableScrollerPageInfo)}catch(s){console.error(s)}})}loadMore(g){const s=this.cvcTableScrollerQueryRef;if(!g&&s)throw new Error("table-scroll directive requires PageInfo to use provided QueryRef.");if(g&&!s)throw new Error("table-scroll directive requires valid QueryRef when PageInfo provided.");if(g&&s){const[p,O,Ce]=[this.cvcTableScrollerFetchCount,g.hasNextPage,g.endCursor];if(!p||!Ce)throw new Error("table-scroll PageInfo invalid.");if(!O)return;this.cvcTableScrollerOnFetch.next({first:p,after:Ce})}}scrollToIndex(g){const[s,p]=[this.host,this.host.cdkVirtualScrollViewport];if(!s||!p)throw new Error("table-scroll scrollToIndex() cannot find host viewport.");p.scrollToIndex(g)}scrollToOffset(g){const[s,p]=[this.host,this.host.cdkVirtualScrollViewport];if(!s||!p)throw new Error("table-scroll scrollToOffset() cannot find host viewport.");p.scrollToOffset(g)}}).\u0275fac=function(g){return new(g||cs)(e.Y36(Go.N8))},cs.\u0275dir=e.lG2({type:cs,selectors:[["","cvcTableScroller",""]],inputs:{cvcTableScrollerTargetHeight:"cvcTableScrollerTargetHeight",cvcTableScrollerQueryRef:"cvcTableScrollerQueryRef",cvcTableScrollerPageInfo:"cvcTableScrollerPageInfo",cvcTableScrollerFetchCount:"cvcTableScrollerFetchCount",cvcTableScrollerToIndex:"cvcTableScrollerToIndex",cvcTableScrollerToOffset:"cvcTableScrollerToOffset"},outputs:{cvcTableScrollerOnScroll:"cvcTableScrollerOnScroll",cvcTableScrollerOnFetch:"cvcTableScrollerOnFetch"}}),cs);function el(l,g){1&l&&e._UZ(0,"span",8)}function Xl(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"span",9),e.NdJ("click",function(){e.CHM(s),e.oxw(2);const O=e.MAs(3),Ce=e.oxw();return O.value="",e.KtG(Ce.cvcModelChange.next(null))}),e.qZA()}}function c1(l,g){if(1&l&&(e.YNc(0,el,1,0,"span",6),e.YNc(1,Xl,1,0,"span",7)),2&l){e.oxw();const s=e.MAs(3);e.Q6J("ngIf",!s.value),e.xp6(1),e.Q6J("ngIf",s.value)}}function tl(l,g){if(1&l){const s=e.EpF();e.ynx(0),e.TgZ(1,"nz-input-group",2)(2,"input",3,4),e.NdJ("ngModelChange",function(O){e.CHM(s);const Ce=e.oxw();return e.KtG(Ce.cvcModelChange.next(O))}),e.qZA()(),e.YNc(4,c1,2,2,"ng-template",null,5,e.W1O),e.BQk()}if(2&l){const s=e.MAs(5),p=e.oxw();e.xp6(1),e.Q6J("nzSuffix",s),e.xp6(1),e.Q6J("placeholder",p.cvcPlaceholder)("ngModel",p.cvcModel)}}function Td(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"nz-input-number-group",10)(1,"nz-input-number",11,4),e.NdJ("ngModelChange",function(O){e.CHM(s);const Ce=e.oxw();return e.KtG(Ce.cvcModelChange.next(""===O?null:O))}),e.qZA()()}if(2&l){const s=e.oxw();let p;e.xp6(1),e.Q6J("nzPlaceHolder",null!==(p=s.cvcPlaceholder)&&void 0!==p?p:"")("ngModel",s.cvcModel)("nzMin",1)("nzStep",1)}}ql=(0,V.gn)([(0,zn.c)()],ql);let dp=(()=>{class l{constructor(){this.cvcModel=null,this.cvcModelChange=new e.vpe,this.cvcInputType="default"}}return l.\u0275fac=function(s){return new(s||l)},l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-table-filter-input"]],inputs:{cvcModel:"cvcModel",cvcInputType:"cvcInputType",cvcPlaceholder:"cvcPlaceholder"},outputs:{cvcModelChange:"cvcModelChange"},decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["numericInput",""],["nzSize","small",3,"nzSuffix"],["nz-input","",3,"placeholder","ngModel","ngModelChange"],["filterInput",""],["suffixIcon",""],["nz-icon","","nzType","search","style","color: #ddd",4,"ngIf"],["nz-icon","","class","ant-input-clear-icon","nzTheme","fill","nzType","close-circle",3,"click",4,"ngIf"],["nz-icon","","nzType","search",2,"color","#ddd"],["nz-icon","","nzTheme","fill","nzType","close-circle",1,"ant-input-clear-icon",3,"click"],["nzSize","small"],[2,"width","100%",3,"nzPlaceHolder","ngModel","nzMin","nzStep","ngModelChange"]],template:function(s,p){if(1&s&&(e.YNc(0,tl,6,3,"ng-container",0),e.YNc(1,Td,3,4,"ng-template",null,1,e.W1O)),2&s){const O=e.MAs(2);e.Q6J("ngIf","default"===p.cvcInputType)("ngIfElse",O)}},dependencies:[a.O5,t.Fj,t.JJ,t.On,de.w,ue.Ls,I.Zp,I.gB,I.ke,lt,ie],styles:[".typeahead-match[_ngcontent-%COMP%]{font-weight:700}.hide-dropdown[_ngcontent-%COMP%]{display:none}  nz-input-group{border-color:#d9d9d9!important}"]}),l})();var dc=c(3460);function nl(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"li",5),e.NdJ("click",function(){const Ce=e.CHM(s).$implicit,ft=e.oxw();return e.KtG(ft.cvcOptionChange.next({key:ft.cvcColumnKey,value:Ce.value}))}),e._UZ(1,"cvc-attribute-tag",6),e.qZA()}if(2&l){const s=g.$implicit,p=e.oxw();e.Q6J("nzSelected",(null==p.cvcOption?null:p.cvcOption.value)===s.value),e.xp6(1),e.Q6J("cvcFullWidth",!0)("cvcChecked",(null==p.cvcOption?null:p.cvcOption.value)===s.value)("cvcAttrValue",s.value)}}let l1=(()=>{class l{constructor(){this.cvcOptionChange=new e.vpe}}return l.\u0275fac=function(s){return new(s||l)},l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-enum-filter-menu"]],inputs:{cvcColumnKey:"cvcColumnKey",cvcFilterOptions:"cvcFilterOptions",cvcOption:"cvcOption"},outputs:{cvcOptionChange:"cvcOptionChange"},decls:6,vars:2,consts:[["nz-menu",""],["nz-menu-item","",3,"nzSelected","click",4,"ngFor","ngForOf"],[2,"padding","3px"],["nz-button","","nzType","default","nzBlock","","nzSize","small",3,"disabled","click"],["nz-icon","","nzType","retweet","nzTheme","outline"],["nz-menu-item","",3,"nzSelected","click"],["cvcContext","menu-item",3,"cvcFullWidth","cvcChecked","cvcAttrValue"]],template:function(s,p){1&s&&(e.TgZ(0,"ul",0),e.YNc(1,nl,2,4,"li",1),e.TgZ(2,"li",2)(3,"button",3),e.NdJ("click",function(){return p.cvcOptionChange.next({key:p.cvcColumnKey,value:null})}),e._UZ(4,"span",4),e._uU(5," Reset "),e.qZA()()()),2&s&&(e.xp6(1),e.Q6J("ngForOf",p.cvcFilterOptions),e.xp6(2),e.Q6J("disabled",null===(null==p.cvcOption?null:p.cvcOption.value)))},dependencies:[a.sg,Ie,To.ix,de.w,et.dQ,dc.wO,dc.r9,ue.Ls],styles:[".typeahead-match[_ngcontent-%COMP%]{font-weight:700}.hide-dropdown[_ngcontent-%COMP%]{display:none}[_nghost-%COMP%]     ul li:hover{background-color:#e6f7ff}[_nghost-%COMP%]     ul li.ant-dropdown-menu-item-selected{background-color:#1890ff}[_nghost-%COMP%]     ul li.ant-dropdown-menu-item-selected:active{background-color:#096dd9}"],changeDetection:0}),l})(),zs=(()=>{class l{transform(s){return null!=s&&Array.isArray(s)}}return l.\u0275fac=function(s){return new(s||l)},l.\u0275pipe=e.Yjl({name:"isArray",type:l,pure:!0}),l})(),Aa=(()=>{class l{transform(s,p){return p(s)?s:void 0}}return l.\u0275fac=function(s){return new(s||l)},l.\u0275pipe=e.Yjl({name:"guardType",type:l,pure:!0}),l})();var ls;function u1(l,g){if(1&l&&e._UZ(0,"th",14),2&l){const s=g.ngIf;let p;e.Q6J("nzShowCheckbox",s.checkbox.th.showCheckbox||!1)("nzWidth",s.width)("nzAlign",null!==(p=s.align)&&void 0!==p?p:"left")("nzLeft",s.fixedLeft||!1)("nzRight",s.fixedRight||!1)}}function eu(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"th",15),e.NdJ("nzSortOrderChange",function(O){const ft=e.CHM(s).ngIf;return e.KtG(ft.sort.changes.next({key:ft.key,value:O}))}),e.ALo(1,"ngrxPush"),e.TgZ(2,"span",16),e._uU(3),e.qZA()()}if(2&l){const s=g.ngIf;let p,O;e.Q6J("nzColumnKey",s.key)("nzAlign",null!==(p=s.align)&&void 0!==p?p:"left")("nzWidth",s.width)("nzLeft",s.fixedLeft||!1)("nzRight",s.fixedRight||!1)("nzShowSort",void 0!==s.sort)("nzSortFn",!0)("nzSortOrder",(null==(O=e.lcZ(1,10,s.sort.changes))?null:O.value)||null),e.xp6(2),e.Q6J("nzTooltipTitle",s.tooltip),e.xp6(1),e.hij(" ",s.label," ")}}function tu(l,g){if(1&l&&(e.TgZ(0,"th",17),e._uU(1),e.qZA()),2&l){const s=g.ngIf;let p;e.Q6J("nzColumnKey",s.key)("nzAlign",null!==(p=s.align)&&void 0!==p?p:"left")("nzWidth",s.width)("nzLeft",s.fixedLeft||!1)("nzRight",s.fixedRight||!1)("nzTooltipTitle",s.tooltip),e.xp6(1),e.hij(" ",s.label," ")}}function d1(l,g){if(1&l&&(e.TgZ(0,"th",17),e._uU(1),e.qZA()),2&l){const s=g.ngIf;let p;e.Q6J("nzColumnKey",s.key)("nzAlign",null!==(p=s.align)&&void 0!==p?p:"left")("nzWidth",s.width)("nzLeft",s.fixedLeft||!1)("nzRight",s.fixedRight||!1)("nzTooltipTitle",s.tooltip),e.xp6(1),e.hij(" ",s.label," ")}}function is(l,g){if(1&l&&(e.ynx(0),e.YNc(1,u1,1,5,"th",11),e.ALo(2,"guardType"),e.YNc(3,eu,4,12,"th",12),e.ALo(4,"guardType"),e.YNc(5,tu,2,7,"th",13),e.ALo(6,"guardType"),e.YNc(7,d1,2,7,"th",13),e.ALo(8,"guardType"),e.BQk()),2&l){const s=e.oxw().$implicit,p=e.oxw(2);e.xp6(1),e.Q6J("ngIf",e.xi3(2,4,s,p.colGuards.isSelectCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(4,7,s,p.colGuards.isEntityTagCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(6,10,s,p.colGuards.isEnumTagCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(8,13,s,p.colGuards.isTextTagCol))}}function p1(l,g){if(1&l&&(e.ynx(0),e.YNc(1,is,9,16,"ng-container",10),e.BQk()),2&l){const s=g.$implicit;e.xp6(1),e.Q6J("ngIf",!s.hidden)}}function pc(l,g){if(1&l&&(e.TgZ(0,"th",22),e._uU(1," \xa0 "),e.qZA()),2&l){const s=g.ngIf;let p;e.Q6J("nzColumnKey",s.key)("nzAlign",null!==(p=s.align)&&void 0!==p?p:"left")("nzWidth",s.width)("nzLeft",s.fixedLeft||!1)("nzRight",s.fixedRight||!1)}}function hc(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"cvc-table-filter-input",25),e.NdJ("cvcModelChange",function(O){const ft=e.CHM(s).ngIf,vn=e.oxw().ngIf;return e.KtG(ft.changes.next(ft.transform?{key:vn.key,value:ft.transform(O)}:{key:vn.key,value:O}))}),e.qZA()}if(2&l){const s=e.oxw().ngIf;e.Q6J("cvcInputType",s.filter.inputType)("cvcPlaceholder",s.filter.options[0].key)("cvcModel",s.filter.options[0].value)}}function fc(l,g){if(1&l&&(e.TgZ(0,"th",23),e.YNc(1,hc,1,3,"cvc-table-filter-input",24),e.qZA()),2&l){const s=g.ngIf;let p;e.Q6J("nzColumnKey",s.key)("nzWidth",s.width)("nzAlign",null!==(p=s.align)&&void 0!==p?p:"left")("nzLeft",s.fixedLeft||!1)("nzRight",s.fixedRight||!1),e.xp6(1),e.Q6J("ngIf",s.filter)}}function mc(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"th",26,27),e.NdJ("nzSortOrderChange",function(O){const ft=e.CHM(s).ngIf;return e.KtG(ft.sort.changes.next({key:ft.key,value:O}))}),e.ALo(2,"ngrxPush"),e.TgZ(3,"nz-filter-trigger",28,29),e.ALo(5,"ngrxPush"),e._UZ(6,"span",30),e.qZA(),e.TgZ(7,"nz-dropdown-menu",null,31)(9,"cvc-enum-filter-menu",32),e.NdJ("cvcOptionChange",function(O){const ft=e.CHM(s).ngIf,vn=e.MAs(4);return ft.filter.changes.next(O),e.KtG(vn.nzVisible=!1)}),e.ALo(10,"ngrxPush"),e.qZA()()()}if(2&l){const s=g.ngIf,p=e.MAs(8);let O,Ce,ft;e.Q6J("nzColumnKey",s.key)("nzWidth",s.width)("nzAlign",null!==(O=s.align)&&void 0!==O?O:"left")("nzLeft",s.fixedLeft||!1)("nzRight",s.fixedRight||!1)("nzShowSort",!0)("nzSortFn",!0)("nzSortOrder",(null==(Ce=e.lcZ(2,15,s.sort.changes))?null:Ce.value)||null)("nzShowFilter",void 0!==s.filter)("nzFilterFn",!0),e.xp6(3),e.Q6J("nzDropdownMenu",p)("nzActive",null!==(null==(ft=e.lcZ(5,17,s.filter.changes))?null:ft.value)),e.xp6(6),e.Q6J("cvcColumnKey",s.key)("cvcFilterOptions",s.filter.options)("cvcOption",e.lcZ(10,19,s.filter.changes))}}function ol(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"th",33,27)(2,"nz-filter-trigger",28),e.ALo(3,"ngrxPush"),e._UZ(4,"span",34),e.qZA(),e.TgZ(5,"nz-dropdown-menu",null,35)(7,"div",36)(8,"div",37)(9,"cvc-table-filter-input",38),e.NdJ("cvcModelChange",function(O){const ft=e.CHM(s).ngIf;return e.KtG(ft.filter.changes.next({key:ft.key,value:O}))}),e.qZA()()()()()}if(2&l){const s=g.ngIf,p=e.MAs(6);let O,Ce;e.Q6J("nzColumnKey",s.key)("nzWidth",s.width)("nzAlign",null!==(O=s.align)&&void 0!==O?O:"left")("nzLeft",s.fixedLeft||!1)("nzRight",s.fixedRight||!1)("nzFilterFn",!0),e.xp6(2),e.Q6J("nzDropdownMenu",p)("nzActive",null!==(null==(Ce=e.lcZ(3,10,s.filter.changes))?null:Ce.value)),e.xp6(7),e.Q6J("cvcPlaceholder",s.filter.options[0].key)("cvcModel",s.filter.options[0].value)}}function Md(l,g){if(1&l&&(e.ynx(0),e.YNc(1,pc,2,5,"th",18),e.ALo(2,"guardType"),e.YNc(3,fc,2,6,"th",19),e.ALo(4,"guardType"),e.YNc(5,mc,11,21,"th",20),e.ALo(6,"guardType"),e.YNc(7,ol,10,12,"th",21),e.ALo(8,"guardType"),e.BQk()),2&l){const s=e.oxw().$implicit,p=e.oxw(2);e.xp6(1),e.Q6J("ngIf",e.xi3(2,4,s,p.colGuards.isSelectCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(4,7,s,p.colGuards.isEntityTagCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(6,10,s,p.colGuards.isEnumTagCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(8,13,s,p.colGuards.isTextTagCol))}}function h1(l,g){if(1&l&&(e.ynx(0),e.YNc(1,Md,9,16,"ng-container",10),e.BQk()),2&l){const s=g.$implicit;e.xp6(1),e.Q6J("ngIf",!s.hidden)}}function f1(l,g){if(1&l&&(e.TgZ(0,"thead")(1,"tr",7),e.YNc(2,p1,2,1,"ng-container",8),e.qZA(),e.TgZ(3,"tr",9),e.YNc(4,h1,2,1,"ng-container",8),e.qZA()()),2&l){const s=g.ngrxLet;e.xp6(2),e.Q6J("ngForOf",s),e.xp6(2),e.Q6J("ngForOf",s)}}function nu(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"td",43),e.NdJ("nzCheckedChange",function(O){e.CHM(s);const Ce=e.oxw(3).$implicit,ft=e.oxw(2);return e.KtG(ft.onRowSelected$.next({id:Ce.id,selected:O}))}),e.qZA()}if(2&l){const s=g.ngIf,p=e.oxw(3).$implicit;let O;e.Q6J("nzChecked",p.selected)("nzAlign",null!==(O=s.align)&&void 0!==O?O:"left")("nzLeft",s.fixedLeft||!1)("nzRight",s.fixedRight||!1)}}function ou(l,g){1&l&&e.GkF(0)}const gc=function(l,g,s){return{$implicit:l,config:g,emphasize:s}};function Fa(l,g){if(1&l&&(e.ynx(0),e.YNc(1,ou,1,0,"ng-container",49),e.ALo(2,"isArray"),e.ALo(3,"ngrxPush"),e.BQk()),2&l){const s=e.oxw().ngIf,p=e.oxw().ngIf,O=e.MAs(3),Ce=e.MAs(5),ft=e.oxw(3).$implicit;let vn;e.xp6(1),e.Q6J("ngTemplateOutlet",e.lcZ(2,2,ft[s])?O:Ce)("ngTemplateOutletContext",e.kEZ(6,gc,ft[s],p,null==(vn=e.lcZ(3,4,p.filter.changes))?null:vn.value))}}function Ts(l,g){if(1&l&&(e.ynx(0),e.YNc(1,Fa,4,10,"ng-container",48),e.BQk()),2&l){const s=g.ngIf;e.oxw();const p=e.MAs(7),O=e.oxw(3).$implicit;e.xp6(1),e.Q6J("ngIf",O[s])("ngIfElse",p)}}const il=function(l,g,s,p,O){return{tagList:l,tag:g,showPopover:s,status:p,emphasize:O}};function rl(l,g){if(1&l&&(e.ynx(0),e._UZ(1,"cvc-entity-collection-tag",51),e.BQk()),2&l){const s=e.oxw(2),p=s.config,O=s.$implicit,Ce=s.emphasize;e.oxw();const ft=e.MAs(5),vn=e.oxw(5);e.xp6(1),e.Q6J("cvcCollectionTagConfig",e.qbA(3,il,O.slice(p.tag.maxTags,O.length),p.tag,!vn.isScrolling,!0===p.showStatus?O.status:void 0,Ce))("cvcTagTemplate",ft)("cvcShowFullLabels",!0)}}function sl(l,g){if(1&l&&(e.ynx(0),e._UZ(1,"cvc-entity-tag-list",50),e.YNc(2,rl,2,9,"ng-container",10),e.BQk()),2&l){const s=e.oxw(),p=s.config,O=s.$implicit,Ce=s.emphasize;e.oxw();const ft=e.MAs(5),vn=e.oxw(5);e.xp6(1),e.Q6J("cvcTagTemplate",ft)("cvcTagListConfig",e.qbA(3,il,O.slice(0,p.tag.maxTags),p.tag,!vn.isScrolling,!0===p.showStatus?O.status:void 0,Ce)),e.xp6(1),e.Q6J("ngIf",O.slice(p.tag.maxTags,O.length).length>0)}}function Bs(l,g){if(1&l&&e.YNc(0,sl,3,9,"ng-container",48),2&l){const s=g.$implicit;e.oxw();const p=e.MAs(7);e.Q6J("ngIf",s.length>0)("ngIfElse",p)}}function m1(l,g){if(1&l&&e._UZ(0,"cvc-entity-tag",52),2&l){const s=g.$implicit,p=g.config,O=g.emphasize,Ce=e.oxw(6);let ft;e.Q6J("cvcTruncateLabel",null==p.tag?null:p.tag.truncateLabel)("cvcLinkableEntity",s)("cvcEmphasize",O)("cvcShowPopover",!Ce.isScrolling)("cvcStatus",!0===p.showStatus?s.status:void 0)("cvcFullWidth",null!==(ft=null==p.tag?null:p.tag.fullWidth)&&void 0!==ft&&ft)}}function iu(l,g){if(1&l&&e._UZ(0,"cvc-empty-value",53),2&l){const s=e.oxw().ngIf;e.Q6J("cvcEmptyCategory",s.emptyValueCategory||"not-applicable")}}function vc(l,g){if(1&l&&(e.TgZ(0,"td",44),e.YNc(1,Ts,2,2,"ng-container",10),e.YNc(2,Bs,1,2,"ng-template",null,45,e.W1O),e.YNc(4,m1,1,6,"ng-template",null,46,e.W1O),e.YNc(6,iu,1,1,"ng-template",null,47,e.W1O),e.qZA()),2&l){const s=g.ngIf;let p;e.Q6J("nzAlign",null!==(p=s.align)&&void 0!==p?p:"left")("nzLeft",s.fixedLeft||!1)("nzRight",s.fixedRight||!1),e.xp6(1),e.Q6J("ngIf",s.context||s.key)}}function ru(l,g){if(1&l&&(e._UZ(0,"cvc-attribute-tag",56),e.ALo(1,"evidenceEnumDisplay")),2&l){const s=e.oxw().ngIf,p=e.oxw(3).$implicit,O=e.oxw(2);e.Q6J("cvcFullWidth",!0)("cvcAttrValue",p[s.key])("cvcTooltip",e.lcZ(1,3,!O.isScrolling&&p[s.key]))}}function su(l,g){if(1&l&&e._UZ(0,"cvc-empty-value",57),2&l){const s=e.oxw().ngIf;e.Q6J("cvcEmptyCategory",s.emptyValueCategory||"unspecified")}}function al(l,g){if(1&l&&(e.TgZ(0,"td",44),e.YNc(1,ru,2,5,"cvc-attribute-tag",54),e.YNc(2,su,1,1,"ng-template",null,55,e.W1O),e.qZA()),2&l){const s=g.ngIf,p=e.MAs(3),O=e.oxw(3).$implicit;let Ce;e.Q6J("nzAlign",null!==(Ce=s.align)&&void 0!==Ce?Ce:"left")("nzLeft",s.fixedLeft||!1)("nzRight",s.fixedRight||!1),e.xp6(1),e.Q6J("ngIf",O[s.key])("ngIfElse",p)}}function Hs(l,g){if(1&l&&(e.TgZ(0,"nz-tag",60),e._UZ(1,"span",61),e.qZA()),2&l){const s=e.oxw().ngIf,p=e.oxw(3).$implicit;e.Q6J("nzTooltipTitle",p[s.key])}}function Ys(l,g){if(1&l&&e._UZ(0,"cvc-empty-value",53),2&l){const s=e.oxw().ngIf;e.Q6J("cvcEmptyCategory",s.emptyValueCategory||"unspecified")}}function $s(l,g){if(1&l&&(e.TgZ(0,"td",44),e.YNc(1,Hs,2,1,"nz-tag",58),e.YNc(2,Ys,1,1,"ng-template",null,59,e.W1O),e.qZA()),2&l){const s=g.ngIf,p=e.MAs(3),O=e.oxw(3).$implicit;let Ce;e.Q6J("nzAlign",null!==(Ce=s.align)&&void 0!==Ce?Ce:"left")("nzLeft",s.fixedLeft||!1)("nzRight",s.fixedRight||!1),e.xp6(1),e.Q6J("ngIf",O[s.key])("ngIfElse",p)}}function cl(l,g){if(1&l&&(e.ynx(0),e.YNc(1,nu,1,4,"td",41),e.ALo(2,"guardType"),e.YNc(3,vc,8,4,"td",42),e.ALo(4,"guardType"),e.YNc(5,al,4,5,"td",42),e.ALo(6,"guardType"),e.YNc(7,$s,4,5,"td",42),e.ALo(8,"guardType"),e.BQk()),2&l){const s=e.oxw().$implicit,p=e.oxw(3);e.xp6(1),e.Q6J("ngIf",e.xi3(2,4,s,p.colGuards.isSelectCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(4,7,s,p.colGuards.isEntityTagCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(6,10,s,p.colGuards.isEnumTagCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(8,13,s,p.colGuards.isTextTagCol))}}function _c(l,g){if(1&l&&(e.ynx(0),e.YNc(1,cl,9,16,"ng-container",10),e.BQk()),2&l){const s=g.$implicit;e.xp6(1),e.Q6J("ngIf",!s.hidden)}}function aa(l,g){if(1&l&&(e.TgZ(0,"tr",40),e.YNc(1,_c,2,1,"ng-container",8),e.qZA()),2&l){const s=e.oxw().ngrxLet;e.xp6(1),e.Q6J("ngForOf",s)}}function g1(l,g){1&l&&(e.TgZ(0,"tbody"),e.YNc(1,aa,2,1,"ng-template",39),e.qZA())}function au(l,g){1&l&&e._UZ(0,"span",69)}function v1(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"span",70),e.NdJ("click",function(){e.CHM(s),e.oxw(2);const O=e.MAs(3),Ce=e.oxw().filter;return O.value="",e.KtG(Ce.changes.next({key:Ce.key,value:null}))}),e.qZA()}}function _1(l,g){if(1&l&&(e.YNc(0,au,1,0,"span",67),e.YNc(1,v1,1,0,"span",68)),2&l){e.oxw();const s=e.MAs(3);e.Q6J("ngIf",!s.value),e.xp6(1),e.Q6J("ngIf",s.value)}}function y1(l,g){if(1&l){const s=e.EpF();e.ynx(0),e.TgZ(1,"nz-input-group",63)(2,"input",64,65),e.NdJ("nzFilterChange",function(O){e.CHM(s);const Ce=e.oxw().filter;return e.KtG(Ce.changes.next({key:Ce.key,value:O}))}),e.qZA()(),e.YNc(4,_1,2,2,"ng-template",null,66,e.W1O),e.BQk()}if(2&l){const s=e.MAs(5),p=e.oxw().filter;e.xp6(1),e.Q6J("nzSuffix",s),e.xp6(1),e.Q6J("placeholder",p.placeholder)("ngModel",p.defaultValue)}}function C1(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"nz-input-number-group",71)(1,"nz-input-number",72,65),e.NdJ("ngModelChange",function(O){e.CHM(s);const Ce=e.oxw().filter;return e.KtG(Ce.changes.next({key:Ce.key,value:O}))}),e.qZA()()}if(2&l){const s=e.oxw().filter;e.xp6(1),e.Q6J("nzPlaceHolder",s.placeholder)("ngModel",s.defaultValue)("nzMin",1)("nzStep",1)}}function z1(l,g){if(1&l&&(e.YNc(0,y1,6,3,"ng-container",48),e.YNc(1,C1,3,4,"ng-template",null,62,e.W1O)),2&l){const s=g.filter,p=e.MAs(2);e.Q6J("ngIf",void 0===s.inputType||"default"===s.inputType)("ngIfElse",p)}}const T1=function(){return[6,6]};function ca(l,g){1&l&&(e.TgZ(0,"nz-row",73)(1,"nz-col")(2,"span"),e._uU(3,"Use checkboxes to select or deselect EIDs"),e.qZA()()()),2&l&&e.Q6J("nzGutter",e.DdM(1,T1))}function M1(l,g){1&l&&(e.TgZ(0,"nz-tag",84),e._UZ(1,"i",85),e.TgZ(2,"span"),e._uU(3,"Loading\u2026"),e.qZA()())}const cu=function(l){return{$implicit:l}};function $i(l,g){if(1&l&&(e.TgZ(0,"nz-tag",88),e._UZ(1,"span",89),e.TgZ(2,"span",90),e._uU(3),e.qZA()()),2&l){e.oxw();const s=e.MAs(4),p=e.oxw().ngrxLet;e.xp6(2),e.Q6J("nzTooltipTitle",s)("nzTooltipTitleContext",e.VKq(3,cu,p.query)),e.xp6(1),e.hij(" Query Error",p.query.length>1?"s":""," ")}}function ll(l,g){if(1&l&&(e.TgZ(0,"nz-tag",88)(1,"span",90)(2,"span",91)(3,"strong"),e._uU(4),e.qZA()()()()),2&l){e.oxw();const s=e.MAs(4),p=e.oxw().ngrxLet;e.xp6(1),e.Q6J("nzTooltipTitle",s)("nzTooltipTitleContext",e.VKq(3,cu,p.network)),e.xp6(3),e.hij(" Network Error",p.query.length>1?"s":""," ")}}function la(l,g){if(1&l&&(e.TgZ(0,"div"),e._uU(1),e.qZA()),2&l){const s=g.$implicit;e.xp6(1),e.hij(" ",s.message," ")}}function lu(l,g){1&l&&e.YNc(0,la,2,1,"div",8),2&l&&e.Q6J("ngForOf",g.$implicit)}function Ir(l,g){if(1&l&&(e.ynx(0),e.YNc(1,$i,4,5,"nz-tag",86),e.YNc(2,ll,5,5,"nz-tag",86),e.YNc(3,lu,1,1,"ng-template",null,87,e.W1O),e.BQk()),2&l){const s=e.oxw().ngrxLet;e.xp6(1),e.Q6J("ngIf",s.query),e.xp6(1),e.Q6J("ngIf",s.network)}}function ua(l,g){if(1&l&&(e.ynx(0),e.YNc(1,Ir,5,2,"ng-container",10),e.BQk()),2&l){const s=g.ngrxLet;e.xp6(1),e.Q6J("ngIf",s)}}function ul(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"div",92)(1,"nz-checkbox-group",93),e.NdJ("ngModelChange",function(O){e.CHM(s);const Ce=e.oxw(2);return e.KtG(Ce.onPreferenceChange$.next(O))}),e.ALo(2,"ngrxPush"),e.qZA()()}if(2&l){const s=e.oxw(2);e.xp6(1),e.Q6J("ngModel",e.lcZ(2,1,s.setPreference$))}}function Na(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"nz-row",73)(1,"nz-col",74),e.YNc(2,M1,4,0,"nz-tag",75),e.ALo(3,"ngrxPush"),e.ALo(4,"ngrxPush"),e._UZ(5,"cvc-no-more-rows",76),e.ALo(6,"ngrxPush"),e.qZA(),e.TgZ(7,"nz-col",74),e.YNc(8,ua,2,1,"ng-container",3),e.qZA(),e.TgZ(9,"nz-col",74),e._UZ(10,"cvc-table-counts2",77),e.qZA(),e.TgZ(11,"nz-col",78)(12,"nz-button-group")(13,"button",79),e.NdJ("click",function(){e.CHM(s);const O=e.oxw();return e.KtG(O.onResetFilter$.next())}),e._UZ(14,"span",80),e.qZA(),e.TgZ(15,"button",81),e._UZ(16,"span",82),e.qZA()(),e.YNc(17,ul,3,3,"ng-template",null,83,e.W1O),e.qZA()()}if(2&l){const s=e.MAs(18),p=e.oxw();e.Q6J("nzGutter",8),e.xp6(2),e.Q6J("ngIf",e.lcZ(3,7,p.loading$)&&e.lcZ(4,9,p.isFetchMore$)),e.xp6(3),e.Q6J("cvcShowTag",e.lcZ(6,11,p.noMoreRows$)),e.xp6(3),e.Q6J("ngrxLet",p.queryError$),e.xp6(2),e.Q6J("cvcTableCountsConnection",p.connection$),e.xp6(5),e.Q6J("nzPopoverContent",s)("nzPopoverTrigger","click")}}const da=function(){return[]},uu=function(){return{x:"800px",y:"200px"}};let dl=((ls=class{constructor(g,s,p){this.queryGQL=g,this.apollo=s,this.cdr=p,this.cvcSelectedIdsChange=new e.vpe,this.isScrolling=!1,this.colGuards=Pa,this.onFetchMore$=new E.x,this.onPreferenceChange$=new Be.X([]),this.onResetFilter$=new E.x,this.onRowSelected$=new E.x,this.onScroll$=new Be.X("stop"),this.onSetSelectedRow$=new Be.X(new Set),this.queryError$=new E.x,this.queryRequest$=new E.x,this.queryResult$=new Qi.t(1),this.isFetchMore$=new Be.X(!1),this.noMoreRows$=new Be.X(!1),this.scrollToIndex$=new E.x,this.tableConfig=new ee;const O=(0,Do.a)(this.tableConfig.getFilterStreams()),Ce=(0,Do.a)(this.tableConfig.getSortStreams()).pipe((0,vt.h)(ft=>ft.filter(vn=>null!==vn.value).length<=1));this.refetch$=(0,Do.a)([Ce,O]).pipe((0,S.U)(([ft,vn])=>({query:"refetch",sort:ft,filter:vn}))),this.fetchMore$=this.onFetchMore$.pipe((0,S.U)(ft=>({query:"fetchMore",fetchMore:{...ft}}))),(0,Q.T)(this.refetch$,this.fetchMore$).pipe((0,Cs.b)(50),(0,zn.t)(this)).subscribe(ft=>{const vn=this.getQueryVars(ft);this.queryRef?(this.queryError$.next({}),"refetch"===ft.query?(this.isFetchMore$.next(!1),this.queryRef.refetch(vn).then(Sn=>{(Sn.error||Sn.errors)&&this.queryError$.next(this.getRequestErrors(Sn))}).then(()=>{this.scrollToIndex$.next(0)})):(this.isFetchMore$.next(!0),this.queryRef.fetchMore({variables:vn}).then(Sn=>{(Sn.error||Sn.errors)&&this.queryError$.next(this.getRequestErrors(Sn))}))):(this.isFetchMore$.next(!1),this.queryError$.next({}),this.queryRef=this.queryGQL.watch(vn),this.queryRef.valueChanges.pipe((0,zn.t)(this)).subscribe(Sn=>{this.queryResult$.next(Sn),(Sn.error||Sn.errors)&&this.queryError$.next(this.getRequestErrors(Sn))}))}),this.loading$=this.queryResult$.pipe((0,si.j)("loading"),(0,ze.x)()),this.connection$=this.queryResult$.pipe((0,si.j)("data","evidenceItems"),(0,vt.h)(No.ep)),this.pageInfo$=this.connection$.pipe((0,si.j)("pageInfo"),(0,vt.h)(No.ep)),this.row$=(0,Do.a)([this.connection$.pipe((0,si.j)("edges"),(0,vt.h)(No.ep),(0,S.U)(ft=>ft.map(vn=>vn.node))),this.onSetSelectedRow$]).pipe((0,S.U)(([ft,vn])=>ft.map(Sn=>{if(Sn)return{...Sn,evidenceItem:{__typename:"EvidenceItem",id:Sn.id,name:Sn.name,link:Sn.link,status:Sn.status},selected:vn.has(Sn.id)}}))),this.col$=new Be.X(this.tableConfig.get()),this.setPreference$=this.col$.pipe((0,S.U)(ft=>this.getColPrefsFromTableConfig(ft))),this.onPreferenceChange$.pipe((0,ni.M)(this.col$),(0,S.U)(([ft,vn])=>this.getTableConfigFromColPrefs(ft,vn)),(0,zn.t)(this)).subscribe(ft=>{this.col$.next(ft)}),this.onSetTableFilter$=new Be.X([]),this.onSetTableFilter$.pipe((0,zn.t)(this)).subscribe(ft=>{const vn=this.col$.getValue();ft.forEach(Sn=>{const yo=vn.find(fi=>fi.key===Sn.key);if(void 0!==yo.filter.inputType){const fi=yo.filter.options[0];if(null===Sn.value)return yo.filter.options=[{...fi,value:null}],void yo.filter.changes.next(Sn);if(Array.isArray(Sn.value)&&0===Sn.value.length)return yo.filter.options=[{...fi,value:null}],void yo.filter.changes.next({...Sn,value:null});let Ii;Array.isArray(Sn.value)?Sn.value.length>0&&(Ii=Sn.value[0]):Ii=Sn.value;const Sa=yo.filter.typename;if(!Sa||!Ii)return void console.error(`evidence-manager requires column config '${yo.key}' provide a typename for cvcTablePrefs Input to set its filter`);const Xa=this.getEntityName(Sa,Ii);if(!Xa)return;yo.filter.options=[{...fi,value:Xa}],yo.filter.changes.next({...Sn,value:Xa})}else ks(yo)&&yo.filter.changes.next(Sn)})}),this.onSetTablePref$=new Be.X([]),this.onSetTablePref$.pipe((0,ni.M)(this.setPreference$),(0,S.U)(([ft,vn])=>{const Sn=[];return ft.forEach(yo=>{let fi=vn.find(Ii=>Ii.value===yo.value);fi?Sn.push({...fi,...yo}):console.warn(`evidence-manager onSetTablePref$ received updated preferences for column '${yo.value}', but a column with that key could not be found.`)}),Sn}),(0,zn.t)(this)).subscribe(ft=>{this.onPreferenceChange$.next(ft)}),this.onRowSelected$.pipe((0,ni.M)(this.onSetSelectedRow$),(0,zn.t)(this)).subscribe(([ft,vn])=>{ft.selected?vn.add(ft.id):vn.delete(ft.id),this.onSetSelectedRow$.next(vn),this.cvcSelectedIdsChange.next(Array.from(vn))}),this.onScroll$.pipe((0,S.U)(ft=>"stop"!==ft),(0,ze.x)(),(0,zn.t)(this)).subscribe(ft=>{this.isScrolling=ft,this.cdr.detectChanges()}),this.onScroll$.pipe((0,vt.h)(ft=>"bottom"===ft),(0,ni.M)(this.pageInfo$),(0,S.U)(([ft,vn])=>vn),(0,zn.t)(this)).subscribe(ft=>{ft.hasNextPage||(this.noMoreRows$.next(!0),this.cdr.detectChanges(),setInterval(()=>this.noMoreRows$.next(!1)))})}ngAfterViewInit(){this.onResetFilter$.pipe((0,ni.M)((0,Gi.of)(this.tableConfig.get())),(0,zn.t)(this)).subscribe(([g,s])=>{const p=[];s.forEach(O=>{if(Ia(O)&&O.sort.changes&&O.sort.changes.next({key:O.key,value:O.sort.default??null}),ks(O)){const Ce=O.filter.options.find(ft=>1==ft.byDefault)?.value;O.filter.changes&&O.filter.changes.next({key:O.key,value:Ce||null})}p.push(O)}),this.col$.next(p)})}getQueryVars(g){const s=this.getQueryFilterParams(g);return{...this.getQuerySortParams(g),...s,...g.fetchMore}}getQuerySortParams(g){if(!g.sort)return;const p=g.sort.find(Ce=>null!==Ce.value);return p?{sortBy:{column:this.getSortColumnFromColKey(p.key),direction:"ascend"===p.value?Fn.SrV.Asc:Fn.SrV.Desc||void 0}}:void 0}getQueryFilterParams(g){let s={};return g.filter&&g.filter.forEach(p=>{s[Jc[p.key]||p.key]=null===p.value||""===p.value?void 0:p.value}),s}getRequestErrors(g){return{query:g.errors,network:g.error}}getTableConfigFromColPrefs(g,s){return s.forEach(p=>{if(Y.find(Ce=>Ce===p.key))return;const O=g.find(Ce=>Ce.value===p.key);O&&(p.hidden=!O?.checked)}),[...s]}getColPrefsFromTableConfig(g){let s=[];return g.forEach(p=>{Y.find(O=>O===p.key)||s.push({label:p.tooltip||p.label,value:p.key,checked:!p.hidden})}),s}getSortColumnFromColKey(g){return Kl[g]}getEntityName(g,s){const p={id:`${g}:${s}`,fragment:sc.Ps`
                fragment Linkable${g}Entity on ${g} {
                  id
                  name
                  link
                }`},O=this.apollo.client.readFragment(p);if(O)return O.name;console.error(`evidence-manager onSetTableFilter$ could not find cached entity ${g}:${s} to populate input filter`)}trackByIndex(g,s){return s?.id}ngOnChanges(g){if(g.cvcTableSettings){const s=g.cvcTableSettings.currentValue;void 0!==s&&this.onSetTableFilter$.next(s.filters)}if(g.cvcSelectedIds){const s=g.cvcSelectedIds.currentValue,p=new Set;void 0!==s&&s.forEach(O=>p.add(O)),this.onSetSelectedRow$.next(p)}}}).\u0275fac=function(g){return new(g||ls)(e.Y36(Fn.EH_),e.Y36(Pr._M),e.Y36(e.sBO))},ls.\u0275cmp=e.Xpm({type:ls,selectors:[["cvc-evidence-manager"]],inputs:{cvcTableSettings:"cvcTableSettings",cvcSelectedIds:"cvcSelectedIds"},outputs:{cvcSelectedIdsChange:"cvcSelectedIdsChange"},features:[e.TTD],decls:16,vars:27,consts:[["nzSize","small",3,"nzTitle","nzExtra"],["cvcTableScroller","",3,"nzData","cvcTableScrollerQueryRef","cvcTableScrollerPageInfo","cvcTableScrollerToIndex","nzScroll","nzVirtualForTrackBy","nzVirtualItemSize","nzSize","nzFrontPagination","nzShowPagination","nzLoading","cvcTableScrollerOnScroll","cvcTableScrollerOnFetch"],["virtualTable",""],[4,"ngrxLet"],["columnFilterInput",""],["cardTitle",""],["extraTemplate",""],[1,"col-header-row"],[4,"ngFor","ngForOf"],[1,"filter-row"],[4,"ngIf"],[3,"nzShowCheckbox","nzWidth","nzAlign","nzLeft","nzRight",4,"ngIf"],[3,"nzColumnKey","nzAlign","nzWidth","nzLeft","nzRight","nzShowSort","nzSortFn","nzSortOrder","nzSortOrderChange",4,"ngIf"],["nz-tooltip","",3,"nzColumnKey","nzAlign","nzWidth","nzLeft","nzRight","nzTooltipTitle",4,"ngIf"],[3,"nzShowCheckbox","nzWidth","nzAlign","nzLeft","nzRight"],[3,"nzColumnKey","nzAlign","nzWidth","nzLeft","nzRight","nzShowSort","nzSortFn","nzSortOrder","nzSortOrderChange"],["nz-tooltip","",1,"col-header-label",3,"nzTooltipTitle"],["nz-tooltip","",3,"nzColumnKey","nzAlign","nzWidth","nzLeft","nzRight","nzTooltipTitle"],[3,"nzColumnKey","nzAlign","nzWidth","nzLeft","nzRight",4,"ngIf"],[3,"nzColumnKey","nzWidth","nzAlign","nzLeft","nzRight",4,"ngIf"],["class","attribute-filter","nzCustomFilter","",3,"nzColumnKey","nzWidth","nzAlign","nzLeft","nzRight","nzShowSort","nzSortFn","nzSortOrder","nzShowFilter","nzFilterFn","nzSortOrderChange",4,"ngIf"],["class","attribute-filter","nzCustomFilter","",3,"nzColumnKey","nzWidth","nzAlign","nzLeft","nzRight","nzFilterFn",4,"ngIf"],[3,"nzColumnKey","nzAlign","nzWidth","nzLeft","nzRight"],[3,"nzColumnKey","nzWidth","nzAlign","nzLeft","nzRight"],[3,"cvcInputType","cvcPlaceholder","cvcModel","cvcModelChange",4,"ngIf"],[3,"cvcInputType","cvcPlaceholder","cvcModel","cvcModelChange"],["nzCustomFilter","",1,"attribute-filter",3,"nzColumnKey","nzWidth","nzAlign","nzLeft","nzRight","nzShowSort","nzSortFn","nzSortOrder","nzShowFilter","nzFilterFn","nzSortOrderChange"],["enumTableFilter",""],[3,"nzDropdownMenu","nzActive"],["enumTagFilterTrigger",""],["nz-icon","","nzType","filter","nzTheme","fill"],["enumFilterMenu","nzDropdownMenu"],[3,"cvcColumnKey","cvcFilterOptions","cvcOption","cvcOptionChange"],["nzCustomFilter","",1,"attribute-filter",3,"nzColumnKey","nzWidth","nzAlign","nzLeft","nzRight","nzFilterFn"],["nz-icon","","nzType","search"],["textTagFilterMenu","nzDropdownMenu"],[1,"ant-table-filter-dropdown"],[1,"custom-input-dropdown"],[3,"cvcPlaceholder","cvcModel","cvcModelChange"],["nz-virtual-scroll",""],[1,"data-row"],[3,"nzChecked","nzAlign","nzLeft","nzRight","nzCheckedChange",4,"ngIf"],[3,"nzAlign","nzLeft","nzRight",4,"ngIf"],[3,"nzChecked","nzAlign","nzLeft","nzRight","nzCheckedChange"],[3,"nzAlign","nzLeft","nzRight"],["entityTagList",""],["entityTag",""],["emptyEntityTagCell",""],[4,"ngIf","ngIfElse"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"cvcTagTemplate","cvcTagListConfig"],[3,"cvcCollectionTagConfig","cvcTagTemplate","cvcShowFullLabels"],[3,"cvcTruncateLabel","cvcLinkableEntity","cvcEmphasize","cvcShowPopover","cvcStatus","cvcFullWidth"],[3,"cvcEmptyCategory"],["cvcContext","compact",3,"cvcFullWidth","cvcAttrValue","cvcTooltip",4,"ngIf","ngIfElse"],["emptyEnumTagCell",""],["cvcContext","compact",3,"cvcFullWidth","cvcAttrValue","cvcTooltip"],["cvcDisplayMode","small",3,"cvcEmptyCategory"],["nz-tooltip","","style","width: 100%; cursor: help; color: #595959",3,"nzTooltipTitle",4,"ngIf","ngIfElse"],["emptyTextTagCell",""],["nz-tooltip","",2,"width","100%","cursor","help","color","#595959",3,"nzTooltipTitle"],["nz-icon","","nzType","align-left","nzTheme","outline"],["numericInput",""],["nzSize","small",3,"nzSuffix"],["nz-input","",3,"placeholder","ngModel","nzFilterChange"],["filterInput",""],["suffixIcon",""],["nz-icon","","nzType","search","style","color: #ddd",4,"ngIf"],["nz-icon","","class","ant-input-clear-icon","nzTheme","fill","nzType","close-circle",3,"click",4,"ngIf"],["nz-icon","","nzType","search",2,"color","#ddd"],["nz-icon","","nzTheme","fill","nzType","close-circle",1,"ant-input-clear-icon",3,"click"],["nzSize","small"],[2,"width","100%",3,"nzPlaceHolder","ngModel","nzMin","nzStep","ngModelChange"],[3,"nzGutter"],["nzFlex","auto"],["nzColor","processing",4,"ngIf"],[3,"cvcShowTag"],[3,"cvcTableCountsConnection"],["nzFlex","35px"],["nz-button","","type","button","nzType","default","nzSize","small",3,"click"],["nz-icon","","nzType","retweet","nzTheme","outline"],["nz-button","","nz-popover","","nzPopoverTitle","Visible Columns","type","button","nzType","default","nzSize","small",3,"nzPopoverContent","nzPopoverTrigger"],["nz-icon","","nzType","setting","nzTheme","outline"],["prefsPopover",""],["nzColor","processing"],["nz-icon","","nzType","sync","nzSpin",""],["nzColor","error","style","margin-left: 12px",4,"ngIf"],["queryError",""],["nzColor","error",2,"margin-left","12px"],["nz-icon","","nzType","question-circle","nzTheme","outline"],["nz-tooltip","",2,"cursor","help",3,"nzTooltipTitle","nzTooltipTitleContext"],["nz-typography",""],[1,"prefs-popover"],[3,"ngModel","ngModelChange"]],template:function(g,s){if(1&g&&(e.TgZ(0,"nz-card",0)(1,"nz-table",1,2),e.NdJ("cvcTableScrollerOnScroll",function(O){return s.onScroll$.next(O)})("cvcTableScrollerOnFetch",function(O){return s.onFetchMore$.next(O)}),e.ALo(3,"ngrxPush"),e.ALo(4,"ngrxPush"),e.ALo(5,"ngrxPush"),e.ALo(6,"ngrxPush"),e.ALo(7,"ngrxPush"),e.YNc(8,f1,5,2,"thead",3),e.YNc(9,g1,2,0,"tbody",3),e.qZA()(),e.YNc(10,z1,3,2,"ng-template",null,4,e.W1O),e.YNc(12,ca,4,2,"ng-template",null,5,e.W1O),e.YNc(14,Na,19,13,"ng-template",null,6,e.W1O)),2&g){const p=e.MAs(13),O=e.MAs(15);e.Q6J("nzTitle",p)("nzExtra",O),e.xp6(1),e.Q6J("nzData",e.lcZ(3,15,s.row$)||e.DdM(25,da))("cvcTableScrollerQueryRef",s.queryRef)("cvcTableScrollerPageInfo",e.lcZ(4,17,s.pageInfo$))("cvcTableScrollerToIndex",e.lcZ(5,19,s.scrollToIndex$))("nzScroll",e.DdM(26,uu))("nzVirtualForTrackBy",s.trackByIndex)("nzVirtualItemSize",28)("nzSize","small")("nzFrontPagination",!1)("nzShowPagination",!1)("nzLoading",e.lcZ(6,21,s.loading$)&&!e.lcZ(7,23,s.isFetchMore$)),e.xp6(7),e.Q6J("ngrxLet",s.col$),e.xp6(1),e.Q6J("ngrxLet",s.col$)}},dependencies:[a.sg,a.O5,a.tP,Ie,D.P,br,nn,Qt.J,qc.H,Xc,t.Fj,t.JJ,t.On,lo.eJ,To.ix,To.fY,de.w,et.dQ,Vi.bd,ye.ub,Br.RR,R.t3,R.SK,ue.Ls,I.Zp,I.gB,I.ke,lt,ie,Wo.lU,Go.N8,Go.qD,Go.Uo,Go._C,Go.h7,Go.Om,Go.p0,Go.$Z,Go.zu,Go.qn,Go.Ql,Go.UX,Go.g6,An.j,eo.SY,X.ZU,ql,dp,l1,zs,ts.Do,Aa,lo.fM],styles:["[_nghost-%COMP%]{display:block}nz-card[_ngcontent-%COMP%]:first-of-type     .ant-card-body{padding:0;margin-top:1px}.table-info[_ngcontent-%COMP%]{margin-left:.5rem}tr.col-header-row[_ngcontent-%COMP%]   th.ant-table-cell[_ngcontent-%COMP%]{white-space:nowrap}tr.col-header-row[_ngcontent-%COMP%]   th.ant-table-cell.align-right[_ngcontent-%COMP%]     .ant-table-column-title{text-align:right}tr.filter-row[_ngcontent-%COMP%]   th.ant-table-cell[_ngcontent-%COMP%]{padding:3px 4px}tr.filter-row[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   nz-filter-trigger[_ngcontent-%COMP%]     span.ant-dropdown-trigger{margin-left:0;padding-right:12px}tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell[_ngcontent-%COMP%]{white-space:nowrap}tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell[_ngcontent-%COMP%]   .anticon.attribute-icon[_ngcontent-%COMP%]{color:#595959}tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell.overflow-ellipsis[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis}tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell.button-cell[_ngcontent-%COMP%]{padding:0}tr.data-row[_ngcontent-%COMP%]   td.align-right[_ngcontent-%COMP%], tr.col-header-row[_ngcontent-%COMP%]   th.ant-table-cell[_ngcontent-%COMP%]   .align-right[_ngcontent-%COMP%], tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell[_ngcontent-%COMP%]   .align-right[_ngcontent-%COMP%], tr.filter-row[_ngcontent-%COMP%]   th.ant-table-cell[_ngcontent-%COMP%]   .align-right[_ngcontent-%COMP%]{text-align:right}tr.data-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-of-type{padding-left:6px}tr.data-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-of-type   cvc-entity-tag[_ngcontent-%COMP%]{margin-left:6px}.ant-table-filter-dropdown[_ngcontent-%COMP%]{padding:8px}.prefs-popover[_ngcontent-%COMP%]     nz-checkbox-group:first-of-type label{display:block}.prefs-popover[_ngcontent-%COMP%]     nz-checkbox-group:first-of-type label span{display:inline-block}"],changeDetection:0}),ls);dl=(0,V.gn)([(0,zn.c)()],dl);const pl=["optionTemplates"];function b1(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"nz-col",9)(1,"cvc-evidence-manager",10),e.NdJ("cvcSelectedIdsChange",function(O){e.CHM(s);const Ce=e.oxw();return e.KtG(Ce.onPopulate$.next(O))}),e.ALo(2,"ngrxPush"),e.ALo(3,"ngrxPush"),e.qZA()()}if(2&l){const s=e.oxw();e.xp6(1),e.Q6J("cvcSelectedIds",e.lcZ(2,2,s.onEid$))("cvcTableSettings",e.lcZ(3,4,s.tableSettingsChange$))}}function Sr(l,g){if(1&l&&e._UZ(0,"cvc-entity-tag",13),2&l){const s=e.oxw().$implicit,p=e.oxw().ngrxLet;e.Q6J("cvcDisableLink",!0)("cvcCacheId",s.__typename+":"+s.id)("cvcEmphasize",p)}}function yc(l,g){1&l&&(e.ynx(0),e.YNc(1,Sr,1,3,"ng-template",null,12,e.W1O),e.BQk())}function Ms(l,g){if(1&l&&(e.ynx(0),e.YNc(1,yc,3,0,"ng-container",11),e.ALo(2,"ngrxPush"),e.BQk()),2&l){const s=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,s.result$))}}function bd(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"div",14)(1,"cvc-entity-tag",15),e.NdJ("cvcOnClose",function(){const Ce=e.CHM(s).$implicit,ft=e.oxw();return e.KtG(ft.onTagClose$.next(Ce.nzValue))}),e.qZA()()}if(2&l){const s=g.$implicit,p=e.oxw();e.xp6(1),e.Q6J("cvcCacheId","EvidenceItem:"+s.nzValue)("cvcContext",p.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",p.props.isMultiSelect?"default":"closeable")}}const hl=function(){return[6,6]},du=function(l,g){return{show:l,hide:g}},pu=bo(ko(),Oo());let fl=(()=>{class l extends pu{constructor(s,p,O,Ce){super(),this.taq=s,this.tq=p,this.changeDetectorRef=O,this.apollo=Ce,this.synchronizedFields$=[],this.synchronizedRequired$=[],this.defaultOptions={props:{label:"Evidence Items",placeholder:"Select Evidence Items",isMultiSelect:!0,description:"Select Evidence by ID, or use the manager to select with filtering",entityName:{singular:"Evidence Item",plural:"Evidence Items"},minSearchStrLength:1}},this.synchronizedFieldToColMap=new Map([["molecularProfileId","molecularProfile"],["diseaseId","disease"],["therapyIds","therapies"]]),this.requiredFieldToColMap=new Map([["disease","requiresDisease$"],["therapies","requiresTherapy$"]]),this.onEid$=new Qi.t,this.onShowMgrClick$=new E.x,this.showMgr$=this.onShowMgrClick$.pipe((0,wr.R)((ft,vn)=>!ft,!1))}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEntitySelectField({typeaheadQuery:this.taq,tagQuery:this.tq,getTypeaheadVarsFn:this.getTypeaheadVarsFn,getTypeaheadResultsFn:this.getTypeaheadResultsFn,getTagQueryVarsFn:this.getTagQueryVarsFn,getTagQueryResultsFn:this.getTagQueryResultsFn,getSelectedItemOptionFn:this.getSelectedItemOptionFn,getSelectOptionsFn:this.getSelectOptionsFn,changeDetectorRef:this.changeDetectorRef,selectOpen$:this.selectOpen$,selectComponent:this.selectComponent}),this.onEid$.pipe((0,rc._)("evidence-select onEid$"),(0,zn.t)(this)).subscribe(),void 0!==this.formControl.value&&0!==this.formControl.value.length&&this.onEid$.next(this.formControl.value),this.onValueChange$.pipe((0,ni.M)(this.onEid$),(0,zn.t)(this)).subscribe(([s,p])=>{Array.isArray(s)&&this.onEid$.next(s)})}configureStateConnections(){this.state&&(this.synchronizedFieldToColMap.forEach((s,p)=>{const O=this.state.fields[`${p}$`];O&&this.synchronizedFields$.push(O.pipe((0,S.U)(Ce=>({key:p,value:Ce??null}))))}),this.requiredFieldToColMap.forEach((s,p)=>{const O=this.state.requires[s];O&&this.synchronizedRequired$.push(O.pipe((0,S.U)(Ce=>({key:p,required:Ce}))))}),this.onFieldsChange$=(0,Do.a)(this.synchronizedFields$).pipe((0,S.U)(s=>{const p=[];return s.forEach(O=>{const Ce=this.synchronizedFieldToColMap.get(O.key);Ce&&p.push({key:Ce,value:O.value})}),p})),this.onRequiredChange$=(0,Do.a)(this.synchronizedRequired$).pipe((0,S.U)(s=>{const p=[];return s.forEach(O=>{p.push({value:O.key,checked:O.required})}),p})),this.tableSettingsChange$=(0,Do.a)([this.onFieldsChange$,this.onRequiredChange$]).pipe((0,S.U)(([s,p])=>({filters:s,preferences:p})),(0,Cs.b)(100),(0,jn.d)(1)))}getTypeaheadVarsFn(s,p){return{eid:+s.replace(/EID/i,"")}}getTypeaheadResultsFn(s){return s.data.evidenceItems.nodes}getTagQueryVarsFn(s){return{eid:s}}getTagQueryResultsFn(s){return s.data.evidenceItem}getSelectedItemOptionFn(s){return{value:s.id,label:`EID${s.id}`}}getSelectOptionsFn(s,p){return s.map((O,Ce)=>({label:p.get(Ce)||`EID${O.id}`,value:O.id}))}}return l.\u0275fac=function(s){return new(s||l)(e.Y36(Fn.olA),e.Y36(Fn.EFm),e.Y36(e.sBO),e.Y36(Pr._M))},l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-evidence-select"]],viewQuery:function(s,p){if(1&s&&e.Gf(pl,5,e.Rgc),2&s){let O;e.iGM(O=e.CRH())&&(p.optionTemplates=O)}},features:[e.qOj],decls:18,vars:36,consts:[[3,"nzGutter"],["nzFlex","auto"],[3,"cvcSelectMode","cvcMinSearchStrLength","cvcCustomTemplate","cvcFormControl","cvcFormlyAttributes","cvcEntityName","cvcPlaceholder","cvcResults","cvcOptions","cvcShowError","cvcDisabled","cvcLoading","cvcSelectOpen","cvcOnSearch","cvcOnOpenChange","cvcSelectComponent","cvcOnModelChange"],["nzFlex","50px"],["type","button","nz-button","","nzBlock","",1,"manager-button",3,"click"],["nz-icon","",3,"ngClass","nzType"],["nzSpan","24","class","manager-drawer",4,"ngIf"],[4,"ngrxLet"],["selectedTemplate",""],["nzSpan","24",1,"manager-drawer"],[3,"cvcSelectedIds","cvcTableSettings","cvcSelectedIdsChange"],[4,"ngFor","ngForOf"],["optionTemplates",""],[3,"cvcDisableLink","cvcCacheId","cvcEmphasize"],[1,"ant-select-selection-item-content"],[3,"cvcCacheId","cvcContext","cvcMode","cvcOnClose"]],template:function(s,p){if(1&s&&(e.TgZ(0,"nz-row",0)(1,"nz-col",1)(2,"cvc-entity-select",2),e.NdJ("cvcOnSearch",function(Ce){return p.onSearch$.next(Ce)})("cvcOnOpenChange",function(Ce){return p.onOpenChange$.next(Ce)})("cvcSelectComponent",function(Ce){return p.selectComponent=Ce})("cvcOnModelChange",function(Ce){return p.props.change&&p.props.change(p.field,Ce)}),e.ALo(3,"ngrxPush"),e.ALo(4,"ngrxPush"),e.ALo(5,"ngrxPush"),e.ALo(6,"ngrxPush"),e.qZA()(),e.TgZ(7,"nz-col",3)(8,"button",4),e.NdJ("click",function(){return p.onShowMgrClick$.next()}),e._UZ(9,"span",5),e.ALo(10,"ngrxPush"),e.ALo(11,"ngrxPush"),e._uU(12," Manager "),e.qZA()(),e.YNc(13,b1,4,6,"nz-col",6),e.ALo(14,"ngrxPush"),e.qZA(),e.YNc(15,Ms,3,3,"ng-container",7),e.YNc(16,bd,2,3,"ng-template",null,8,e.W1O)),2&s){const O=e.MAs(17);e.Q6J("nzGutter",e.DdM(32,hl)),e.xp6(2),e.Q6J("cvcSelectMode",p.props.isMultiSelect?"multiple":"default")("cvcMinSearchStrLength",p.props.minSearchStrLength)("cvcCustomTemplate",O)("cvcFormControl",p.formControl)("cvcFormlyAttributes",p.field)("cvcEntityName",p.props.entityName)("cvcPlaceholder",p.props.placeholder)("cvcResults",e.lcZ(3,18,p.result$))("cvcOptions",e.lcZ(4,20,p.selectOption$))("cvcShowError",p.showError)("cvcDisabled",p.props.disabled)("cvcLoading",e.lcZ(5,22,p.isLoading$))("cvcSelectOpen",e.lcZ(6,24,p.selectOpen$)),e.xp6(7),e.Q6J("ngClass",e.WLB(33,du,e.lcZ(10,26,p.showMgr$),!e.lcZ(11,28,p.showMgr$)))("nzType","caret-right"),e.xp6(4),e.Q6J("ngIf",e.lcZ(14,30,p.showMgr$)),e.xp6(2),e.Q6J("ngrxLet",p.onSearch$)}},dependencies:[a.mk,a.sg,a.O5,an,Qt.J,lo.eJ,To.ix,de.w,et.dQ,R.t3,R.SK,ue.Ls,dl,lo.fM],styles:[".manager-button[_ngcontent-%COMP%]   span.hide[_ngcontent-%COMP%]{transform:rotate(0);transition:transform .2s linear}.manager-button[_ngcontent-%COMP%]   span.show[_ngcontent-%COMP%]{transform:rotate(90deg);transition:transform .2s linear}"],changeDetection:0}),l})();var ml=c(821);let Cc=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[a.ez,ue.PV,An.X,eo.cg,X.ZJ,tt.s,Te.x]}),l})(),gl=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[a.ez,An.X,X.ZJ,Wo.$6,ue.PV,eo.cg,tt.s,Cc]}),l})();const zc={types:[{name:"evidence-select",wrappers:["form-field"],component:fl},{name:"evidence-multi-select",wrappers:["form-field"],component:fl,defaultOptions:{props:{label:"Evidence Items",isMultiSelect:!0}}}]};let La=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[a.ez,xr,ml.M,gl,jt,Cc,Te.x,ic.y,tt.s,sr,_.X0.forChild(zc),t.u5,To.sL,Vi.vh,ye.Wr,Br.b1,N.U5,R.Jb,ue.PV,I.o7,Me,Wo.$6,Go.HQ,An.X,eo.cg,X.ZJ]}),l})();const vl=["optionTemplates"];function ka(l,g){if(1&l&&(e.ynx(0),e.TgZ(1,"em"),e._UZ(2,"span",9),e.ALo(3,"highlightTypeahead"),e.qZA(),e.BQk()),2&l){const s=e.oxw(2).$implicit,p=e.oxw().ngrxLet;e.xp6(2),e.Q6J("nzTooltipTitle",s.featureAliases.join(", "))("innerHtml",e.xi3(3,2,s.featureAliases.join(", "),p),e.oJD)}}function hu(l,g){1&l&&e._uU(0,"--")}function Ra(l,g){if(1&l&&(e._UZ(0,"cvc-entity-tag",5),e.TgZ(1,"span",6),e.YNc(2,ka,4,5,"ng-container",7),e.YNc(3,hu,1,0,"ng-template",null,8,e.W1O),e.qZA()),2&l){const s=e.MAs(4),p=e.oxw().$implicit,O=e.oxw().ngrxLet;e.Q6J("cvcDisableLink",!0)("cvcCacheId",p.__typename+":"+p.id)("cvcEmphasize",O),e.xp6(2),e.Q6J("ngIf",p.featureAliases.length>0)("ngIfElse",s)}}function fu(l,g){1&l&&(e.ynx(0),e.YNc(1,Ra,5,5,"ng-template",null,4,e.W1O),e.BQk())}function _l(l,g){if(1&l&&(e.ynx(0),e.YNc(1,fu,3,0,"ng-container",3),e.ALo(2,"ngrxPush"),e.BQk()),2&l){const s=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,s.result$))}}function Tc(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"div",10)(1,"cvc-entity-tag",11),e.NdJ("cvcOnClose",function(){const Ce=e.CHM(s).$implicit,ft=e.oxw();return e.KtG(ft.onTagClose$.next(Ce.nzValue))}),e.qZA()()}if(2&l){const s=g.$implicit,p=e.oxw();e.xp6(1),e.Q6J("cvcCacheId","Feature:"+s.nzValue)("cvcContext",p.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",p.props.isMultiSelect?"default":"closeable")}}const Va=bo(ko(),Oo());let Mc=(()=>{class l extends Va{constructor(s,p,O){super(),this.taq=s,this.tq=p,this.changeDetectorRef=O,this.defaultOptions={props:{label:"Feature",placeholder:"Search Features",isMultiSelect:!1,entityName:{singular:"Feature",plural:"Features"},description:"Feature Name"},featureType:Fn.z1I.Gene}}ngAfterViewInit(){this.configureBaseField(),this.configureEntitySelectField({typeaheadQuery:this.taq,typeaheadParam$:void 0,tagQuery:this.tq,getTypeaheadVarsFn:this.getTypeaheadVarsFn,getTypeaheadResultsFn:this.getTypeaheadResultsFn,getTagQueryVarsFn:this.getTagQueryVarsFn,getTagQueryResultsFn:this.getTagQueryResultsFn,getSelectedItemOptionFn:this.getSelectedItemOptionFn,getSelectOptionsFn:this.getSelectOptionsFn,changeDetectorRef:this.changeDetectorRef,selectOpen$:this.selectOpen$,selectComponent:this.selectComponent})}getTypeaheadVarsFn(s){return{queryTerm:s,featureType:this.props.featureType}}getTypeaheadResultsFn(s){return s.data.featureTypeahead}getTagQueryVarsFn(s){return{featureId:s}}getTagQueryResultsFn(s){return s.data.feature}getSelectedItemOptionFn(s){return{value:s.id,label:s.name}}getSelectOptionsFn(s,p){return s.map((O,Ce)=>({label:p.get(Ce)||O.name,value:O.id}))}}return l.\u0275fac=function(s){return new(s||l)(e.Y36(Fn.mq6),e.Y36(Fn.uL8),e.Y36(e.sBO))},l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-feature-select"]],viewQuery:function(s,p){if(1&s&&e.Gf(vl,5,e.Rgc),2&s){let O;e.iGM(O=e.CRH())&&(p.optionTemplates=O)}},features:[e.qOj],decls:7,vars:17,consts:[[3,"cvcSelectMode","cvcCustomTemplate","cvcFormControl","cvcFormlyAttributes","cvcPlaceholder","cvcEntityName","cvcResults","cvcOptions","cvcShowError","cvcLoading","cvcOnSearch","cvcOnOpenChange","cvcSelectComponent","cvcOnModelChange"],[4,"ngrxLet"],["selectedTemplate",""],[4,"ngFor","ngForOf"],["optionTemplates",""],[3,"cvcDisableLink","cvcCacheId","cvcEmphasize"],["nz-typography","","nzType","secondary"],[4,"ngIf","ngIfElse"],["noAliases",""],["nz-typography","","nzType","secondary","nz-tooltip","",3,"nzTooltipTitle","innerHtml"],[1,"ant-select-selection-item-content"],[3,"cvcCacheId","cvcContext","cvcMode","cvcOnClose"]],template:function(s,p){if(1&s&&(e.TgZ(0,"cvc-entity-select",0),e.NdJ("cvcOnSearch",function(Ce){return p.onSearch$.next(Ce)})("cvcOnOpenChange",function(Ce){return p.onOpenChange$.next(Ce)})("cvcSelectComponent",function(Ce){return p.selectComponent=Ce})("cvcOnModelChange",function(Ce){return p.props.change&&p.props.change(p.field,Ce)}),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.ALo(3,"ngrxPush"),e.qZA(),e.YNc(4,_l,3,3,"ng-container",1),e.YNc(5,Tc,2,3,"ng-template",null,2,e.W1O)),2&s){const O=e.MAs(6);e.Q6J("cvcSelectMode",p.props.isMultiSelect?"multiple":"default")("cvcCustomTemplate",O)("cvcFormControl",p.formControl)("cvcFormlyAttributes",p.field)("cvcPlaceholder",p.props.placeholder)("cvcEntityName",p.props.entityName)("cvcResults",e.lcZ(1,11,p.result$))("cvcOptions",e.lcZ(2,13,p.selectOption$))("cvcShowError",p.showError)("cvcLoading",e.lcZ(3,15,p.isLoading$)),e.xp6(4),e.Q6J("ngrxLet",p.onSearch$)}},dependencies:[a.sg,a.O5,lo.eJ,eo.SY,X.ZU,an,Qt.J,lo.fM,fr.A],changeDetection:0}),l})();const yl={types:[{name:"feature-select",wrappers:["form-field"],component:Mc},{name:"feature-multi-select",wrappers:["form-field"],component:Mc,defaultOptions:{props:{label:"Features",isMultiSelect:!0}}}]};let mu=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[a.ez,t.UX,_.X0.forChild(yl),yt.L,To.sL,He.LV,ue.PV,I.o7,eo.cg,N.U5,H.ic,X.ZJ,An.X,Lo,jt,tt.s,Te.x]}),l})();const Us=["optionTemplates"];function pa(l,g){if(1&l&&e._UZ(0,"cvc-attribute-tag",4),2&l){const s=e.oxw().$implicit;e.Q6J("cvcAttrValue",s)}}function gu(l,g){1&l&&(e.ynx(0),e.YNc(1,pa,1,1,"ng-template",null,3,e.W1O),e.BQk())}function S1(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"div",5)(1,"cvc-attribute-tag",6),e.NdJ("cvcOnClose",function(O){e.CHM(s);const Ce=e.oxw();return e.KtG(Ce.onTagClose$.next(O))}),e.qZA()()}if(2&l){const s=g.$implicit,p=e.oxw();e.xp6(1),e.Q6J("cvcAttrValue",s.nzValue)("cvcContext",p.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",p.props.isMultiSelect?"default":"closeable")}}const Cl={COMBINATION:"Therapies specified were used as part of a combination therapy approach",SEQUENTIAL:"Therapies specified were used at separate timepoints in the same treatment plan",SUBSTITUTES:"Therapies specified are often considered to be of the same family, or behave similarly in a treatment setting"},vu=bo(ko(),fo()),_u={types:[{name:"interaction-select",wrappers:["form-field"],component:(()=>{class l extends vu{constructor(s){super(),this.cdr=s,this.defaultOptions={props:{label:"Therapy Interaction",placeholder:"Select Therapy Interaction",requireMultipleTherapies:!0,requireMultipleTherapiesPromptFn:()=>"A single associated therapy does not have an Interaction type",tooltip:"Characterizes the interaction of a multi-therapy treatment"}},this.interactionEnum$=new Be.X([]),this.placeholder$=new Be.X(void 0)}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEnumSelectField({optionEnum$:this.interactionEnum$,optionTemplate$:this.optionTemplate$,changeDetectorRef:this.cdr})}configureStateConnections(){if(!this.state)return console.error(`${this.field.id} requires a form state to populate its options, none was found.`),void this.placeholder$.next("ERROR: Form state not found");this.placeholder$.next(this.props.placeholder),this.state.enums.interaction$?(this.state.enums.interaction$.pipe((0,zn.t)(this)).subscribe(s=>{this.interactionEnum$.next(s)}),this.optionTemplates||console.error(`${this.field.id} could not find its optionTemplates QueryList to populate its select options, so simple text labels will be displayed.`),this.optionTemplate$=this.optionTemplates?.changes.pipe((0,S.U)(s=>s.map(p=>p))),this.onTherapies$=this.state.fields.therapyIds$,this.optionTemplates||console.warn(`${this.field.id} could not find state's fields.therapyIds$ to handle its required & disabled states.`),this.onTherapies$.pipe((0,zn.t)(this)).subscribe(s=>{s&&0!=s.length?1==s.length?(this.props.description="A single associated therapy does not have an Interaction type",this.props.disabled=!0,this.props.required=!1,void 0!==this.formControl.value&&this.formControl.setValue(void 0)):(this.props.description="Select an Interaction Type",this.props.disabled=!1,this.props.required=!0):(this.props.disabled=!0,this.props.required=!1,this.props.description="Interaction type is not applicable when no therapies are selected.",void 0!==this.formControl.value&&this.formControl.setValue(void 0)),this.cdr.markForCheck()}),this.onValueChange$.pipe((0,zn.t)(this)).subscribe(s=>{s?(this.props.description=Cl[s],this.props.extraType="description"):(this.props.extraType="prompt",this.field.formControl.markAsTouched())})):console.error(`${this.field.id} could not find form state's interaction$ to populate select.`)}}return l.\u0275fac=function(s){return new(s||l)(e.Y36(e.sBO))},l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-interaction-select"]],viewQuery:function(s,p){if(1&s&&e.Gf(Us,5,e.Rgc),2&s){let O;e.iGM(O=e.CRH())&&(p.optionTemplates=O)}},features:[e.qOj],decls:7,vars:15,consts:[[3,"cvcFormControl","cvcFormlyAttributes","cvcSelectMode","cvcPlaceholder","cvcCustomTemplate","cvcOptions","cvcShowError","cvcDisabled"],[4,"ngFor","ngForOf"],["selectedTemplate",""],["optionTemplates",""],[3,"cvcAttrValue"],[1,"ant-select-selection-item-content"],[3,"cvcAttrValue","cvcContext","cvcMode","cvcOnClose"]],template:function(s,p){if(1&s&&(e._UZ(0,"cvc-enum-select",0),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.YNc(3,gu,3,0,"ng-container",1),e.ALo(4,"ngrxPush"),e.YNc(5,S1,2,3,"ng-template",null,2,e.W1O)),2&s){const O=e.MAs(6);e.Q6J("cvcFormControl",p.formControl)("cvcFormlyAttributes",p.field)("cvcSelectMode",p.props.isMultiSelect?"multiple":"default")("cvcPlaceholder",e.lcZ(1,9,p.placeholder$))("cvcCustomTemplate",O)("cvcOptions",e.lcZ(2,11,p.selectOption$))("cvcShowError",p.showError)("cvcDisabled",p.props.disabled),e.xp6(3),e.Q6J("ngForOf",e.lcZ(4,13,p.interactionEnum$))}},dependencies:[a.sg,wo,Ie,lo.fM]}),l})()}]};let yu=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[a.ez,t.UX,_.X0.forChild(_u),Lo,Kn,xr]}),l})();var zl=c(8004);const Ba=["optionTemplates"];function Tl(l,g){if(1&l&&(e.TgZ(0,"nz-tag")(1,"strong"),e._uU(2),e.qZA(),e._uU(3),e.ALo(4,"enumTooltip"),e.qZA()),2&l){const s=e.oxw().$implicit;e.xp6(2),e.Oqu(s),e.xp6(1),e.hij(" - ",e.xi3(4,2,s,"evidenceLevelBrief")," ")}}function Cu(l,g){1&l&&(e.ynx(0),e.YNc(1,Tl,5,5,"ng-template",null,3,e.W1O),e.BQk())}function Ml(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"nz-tag",7),e.NdJ("nzOnClose",function(O){e.CHM(s);const Ce=e.oxw(2);return e.KtG(Ce.onTagClose$.next(O))}),e.TgZ(1,"strong"),e._uU(2),e.qZA(),e._uU(3),e.ALo(4,"enumTooltip"),e.qZA()}if(2&l){const s=e.oxw().$implicit;e.xp6(2),e.Oqu(s.nzValue),e.xp6(1),e.hij(" - ",e.xi3(4,2,s.nzValue,"evidenceLevelBrief")," ")}}function E1(l,g){if(1&l&&(e.ynx(0),e.TgZ(1,"strong"),e._uU(2),e.qZA(),e._uU(3),e.ALo(4,"enumTooltip"),e.BQk()),2&l){const s=e.oxw().$implicit;e.xp6(2),e.Oqu(s.nzValue),e.xp6(1),e.hij(" - ",e.xi3(4,2,s.nzValue,"evidenceLevelBrief")," ")}}function bl(l,g){if(1&l&&(e.TgZ(0,"div",4),e.YNc(1,Ml,5,5,"nz-tag",5),e.YNc(2,E1,5,5,"ng-container",6),e.qZA()),2&l){const s=e.oxw();e.xp6(1),e.Q6J("ngIf",!s.props.isMultiSelect),e.xp6(1),e.Q6J("ngIf",s.props.isMultiSelect)}}const x1=new Map([[Fn.Sx0.A,"Evidence shows consensus association in human medicine"],[Fn.Sx0.B,"Evidence supports association using clinical trial or other primary patient data"],[Fn.Sx0.C,"Evidence supports association using individual case reports from clinical journals"],[Fn.Sx0.D,"Evidence supports association using in vivo or in vitro models"],[Fn.Sx0.E,"Evidential association is inferential or indirect"]]),zu=bo(ko(),fo()),bc={types:[{name:"level-select",wrappers:["form-field"],component:(()=>{class l extends zu{constructor(s){super(),this.cdr=s,this.defaultOptions={props:{label:"Evidence Level",required:!1,isMultiSelect:!1,placeholder:"Select Evidence Level",extraType:"description"}},this.levelEnum$=new Be.X([])}ngAfterViewInit(){this.configureBaseField(),this.state&&this.state.formReady$?this.state.formReady$.pipe((0,vt.h)(s=>s),(0,es.q)(1),(0,zn.t)(this)).subscribe(s=>{this.configureField()}):this.configureField()}configureField(){this.props.tooltip="Type of study performed to produce the evidence statement",this.levelEnum$.next((0,So.o6)(Fn.Sx0).map(s=>s)),this.optionTemplates||console.error(`${this.field.id} could not find its optionTemplates QueryList to populate its select options, so simple text labels will be displayed.`),this.optionTemplate$=this.optionTemplates?.changes.pipe((0,S.U)(s=>s.map(p=>p))),this.onValueChange$.pipe((0,zn.t)(this)).subscribe(s=>{s?(this.props.description=x1.get(s),this.field.formControl.markAsTouched()):this.props.description=void 0}),this.configureEnumSelectField({optionEnum$:this.levelEnum$,optionTemplate$:this.optionTemplate$,changeDetectorRef:this.cdr})}}return l.\u0275fac=function(s){return new(s||l)(e.Y36(e.sBO))},l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-level-select"]],viewQuery:function(s,p){if(1&s&&e.Gf(Ba,5,e.Rgc),2&s){let O;e.iGM(O=e.CRH())&&(p.optionTemplates=O)}},features:[e.qOj],decls:6,vars:13,consts:[[3,"cvcFormControl","cvcFormlyAttributes","cvcSelectMode","cvcPlaceholder","cvcCustomTemplate","cvcOptions","cvcShowError","cvcDisabled"],[4,"ngFor","ngForOf"],["selectedTemplate",""],["optionTemplates",""],[1,"ant-select-selection-item-content"],["nzMode","closeable",3,"nzOnClose",4,"ngIf"],[4,"ngIf"],["nzMode","closeable",3,"nzOnClose"]],template:function(s,p){if(1&s&&(e._UZ(0,"cvc-enum-select",0),e.ALo(1,"ngrxPush"),e.YNc(2,Cu,3,0,"ng-container",1),e.ALo(3,"ngrxPush"),e.YNc(4,bl,3,2,"ng-template",null,2,e.W1O)),2&s){const O=e.MAs(5);e.Q6J("cvcFormControl",p.formControl)("cvcFormlyAttributes",p.field)("cvcSelectMode",p.props.isMultiSelect?"multiple":"default")("cvcPlaceholder",p.props.placeholder)("cvcCustomTemplate",O)("cvcOptions",e.lcZ(1,9,p.selectOption$))("cvcShowError",p.showError)("cvcDisabled",p.props.disabled),e.xp6(2),e.Q6J("ngForOf",e.lcZ(3,11,p.levelEnum$))}},dependencies:[a.sg,a.O5,An.j,wo,lo.fM,zl.v],changeDetection:0}),l})()},{name:"level-multi-select",extends:"level-select",defaultOptions:{props:{label:"Levels",isMultiSelect:!0}}}]};let O1=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[a.ez,t.UX,_.X0.forChild(bc),An.X,tt.s,Lo,Kn]}),l})();var w1=c(4717),Ki=c(6976),Tu=c(4194);const P1=/\(/g,I1=/\)/g,Mu=/AND|OR/i,A1=/^(?<not>NOT\s)?\s*#VID(?<variantId>\d+)$/i,bu=/\s+/,ha="EXPR";function fa(l){return Sc(l.replace(P1," ( ").replace(I1," ) "))}function Sc(l){let s,g=l.split(bu),p=0,O=[],Ce=[],ft=[];for(let Nr of g)if("("==Nr)0!=p&&O.push(Nr),p+=1;else if(")"==Nr)if(p-=1,0==p){let ss=Sc(O.join(" "));if("errorMessage"in ss)return ss;ft.push(ss),Ce.push(ha),O=[]}else O.push(Nr);else p>0?O.push(Nr):Ce.push(Nr);const vn={errorType:"trailingBoolean",errorMessage:"Expressions may not end with AND / OR boolean operators."},Sn={errorType:"initialBoolean",errorMessage:"Expressions may not start with AND / OR boolean operators."},yo={errorType:"multipleBoolean",errorMessage:"Multiple boolean operators found."},fi={errorType:"incompleteExpression",errorMessage:"Ensure that parenthetical clauses are closed."};let Ii=0;for(let Nr of Ce){let ss=Mu.test(Nr);if(ss&&0==Ii)return Sn;if(ss&&Ii===g.length-1)return vn;if(ss&&!s)s=Ec(Nr);else if(ss&&s&&Ec(Nr)!==s)return yo;Ii++}let Sa=[],Xa=Ce.join(" ").split(Mu);for(let Nr of Xa.map(ss=>ss.trim())){let ss=A1.exec(Nr);if(null===ss){if(0===Nr.length)return fi;if("NOT"===Nr||"NOT"===Nr.split(" ").pop())return{errorType:"incompleteNOT",errorMessage:"NOT operator must be followed by a valid #VID."};if(Nr!==ha)return{errorType:"invalidToken",errorMessage:`Token '${Nr}' does not match the expected format.`}}else Sa.push({not:!!ss[1],variantId:parseInt(ss[2])})}return{booleanOperator:s,variantComponents:Sa,complexComponents:ft}}function Ec(l){return"AND"==l.toUpperCase()?Fn._Wm.And:Fn._Wm.Or}var Sl=c(6973);function bs(l,g){const s="object"==typeof g;return new Promise((p,O)=>{let ft,Ce=!1;l.subscribe({next:vn=>{ft=vn,Ce=!0},error:O,complete:()=>{Ce?p(ft):s?p(g.defaultValue):O(new Sl.K)}})})}var Ha=c(951),El=c(750);let js=(()=>{class l{constructor(s){this.apollo=s,this.cvcOnSelect=new e.vpe,this.cvcOnVariantSelect=new e.vpe,this.modelChange$=new Be.X(void 0),this.finderState={formLayout:"horizontal",fields:{featureId$:new Be.X(void 0),variantId$:new Be.X(void 0),variantMolecularProfile$:new Be.X(void 0)}},this.form=new t.nJ({}),this.model={featureId:void 0,variantId:void 0},this.options={formState:this.finderState},this.config=[{wrappers:["form-row"],props:{formRowOptions:{gutter:[8,0],span:12}},fieldGroup:[{key:"featureId",type:"feature-select",props:{placeholder:"Select MP Feature",hideLabel:!0,showExtra:!1,showErrorTip:!1,required:!0}},{key:"variantId",type:"variant-select",props:{placeholder:"Select MP Variant",hideLabel:!0,required:!0,showExtra:!1,showErrorTip:!1,requireFeature:!0}}]}]}modelChange(s){if(!s?.variantId)return;const p=this.getSelectedVariant(s.variantId);p&&(this.model={featureId:void 0,variantId:void 0},this.cvcOnSelect.next(p.singleVariantMolecularProfile),this.cvcOnVariantSelect.next(p))}getSelectedVariant(s){if(!s)return;const p={id:`Variant:${s}`,fragment:Pr.Ps`
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
      `};let O;try{O=this.apollo.client.readFragment(p)}catch(Ce){console.error(Ce)}if(O)return O;console.error("MpFinderForm could not resolve its Variant from the cache")}}return l.\u0275fac=function(s){return new(s||l)(e.Y36(Pr._M))},l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-mp-finder"]],outputs:{cvcOnSelect:"cvcOnSelect",cvcOnVariantSelect:"cvcOnVariantSelect"},decls:2,vars:6,consts:[["nz-form","",3,"formGroup","nzLayout"],[3,"form","fields","model","options","modelChange"]],template:function(s,p){1&s&&(e.TgZ(0,"form",0)(1,"formly-form",1),e.NdJ("modelChange",function(Ce){return p.modelChange(Ce)}),e.qZA()()),2&s&&(e.Q6J("formGroup",p.form)("nzLayout",p.finderState.formLayout),e.xp6(1),e.Q6J("form",p.form)("fields",p.config)("model",p.model)("options",p.options))},dependencies:[t._Y,t.JL,t.sg,_.T7,N.Lr],styles:["[_nghost-%COMP%]{display:block;width:100%}"],changeDetection:0}),l})();function Ya(l,g){1&l&&(e.ynx(0),e.TgZ(1,"p"),e._uU(2," The expression contains open parentheses. Please ensure that all parenthetical expressions are closed. "),e.qZA(),e.BQk())}function Zr(l,g){1&l&&(e.ynx(0),e.TgZ(1,"p"),e._uU(2," Complete the expression by appending a "),e.TgZ(3,"strong"),e._uU(4,"#VID"),e.qZA(),e._uU(5," token to the incomplete boolean expression. "),e.qZA(),e.BQk())}function Su(l,g){1&l&&(e.ynx(0),e.TgZ(1,"p"),e._uU(2," MP Expressions may not begin with an "),e.TgZ(3,"strong"),e._uU(4,"AND"),e.qZA(),e._uU(5," or "),e.TgZ(6,"strong"),e._uU(7,"OR"),e.qZA(),e._uU(8," boolean. Ensure the expression begins with a "),e.TgZ(9,"strong"),e._uU(10,"#VID"),e.qZA(),e._uU(11," or "),e.TgZ(12,"strong"),e._uU(13,"NOT #VID"),e.qZA(),e._uU(14," token. "),e.qZA(),e.BQk())}function Eu(l,g){1&l&&(e.ynx(0),e.TgZ(1,"p"),e._uU(2," Molecular Profile expressions use a simple domain-specific language to specify complex MPs using boolean expressions to combine variants. These expressions may contain: "),e.qZA(),e.TgZ(3,"ul")(4,"li"),e._uU(5," Variant Tokens - "),e.TgZ(6,"strong"),e._uU(7,"#VID"),e.qZA(),e._uU(8," or "),e.TgZ(9,"strong"),e._uU(10,"NOT #VID"),e.qZA(),e._uU(11,'followed by a valid Variant ID, e.g. "#VID123" '),e.qZA(),e.TgZ(12,"li"),e._uU(13,"Boolean Tokens - "),e.TgZ(14,"strong"),e._uU(15,"AND"),e.qZA(),e._uU(16,", "),e.TgZ(17,"strong"),e._uU(18,"OR"),e.qZA()(),e.TgZ(19,"li"),e._uU(20," Parentheses - "),e.TgZ(21,"strong"),e._uU(22,"("),e.qZA(),e._uU(23," or "),e.TgZ(24,"strong"),e._uU(25,")"),e.qZA(),e._uU(26,", for grouping tokens into nested expressions "),e.qZA()(),e.TgZ(27,"p")(28,"strong"),e._uU(29,"Invalid Token"),e.qZA(),e._uU(30," errors occur if the parser encounters any text or token that does not match those listed above. "),e.qZA(),e.BQk())}function xu(l,g){1&l&&(e.ynx(0),e.TgZ(1,"p"),e._uU(2," A single expression may not include more than one "),e.TgZ(3,"strong"),e._uU(4,"AND"),e.qZA(),e._uU(5," or "),e.TgZ(6,"strong"),e._uU(7,"OR"),e.qZA(),e._uU(8," boolean operator. To construct complex expressions, use parentheses. "),e.qZA(),e.TgZ(9,"p"),e._uU(10," For example, the expression "),e.TgZ(11,"strong"),e._uU(12,"#VID12 AND #VID2220 OR #VID456"),e.qZA(),e._uU(13," is invalid, but the expression "),e.TgZ(14,"strong"),e._uU(15,"#VID12 AND (#VID2220 OR #VID456)"),e.qZA(),e._uU(16," is valid. The parentheses create a nested expression independent of the outer expression. "),e.qZA(),e.BQk())}function xl(l,g){1&l&&(e.ynx(0),e.TgZ(1,"p"),e._uU(2," Complete the expression by appending a "),e.TgZ(3,"strong"),e._uU(4,"#VID"),e.qZA(),e._uU(5," token to the incomplete boolean expression. "),e.qZA(),e.BQk())}function xc(l,g){1&l&&(e.ynx(0),e.TgZ(1,"p"),e._uU(2," The expression contains a Variant ID that cannot be matched to any Variant in the CIViC database. Please re-check the Variant ID, or create a new one by following these steps: "),e.qZA(),e.TgZ(3,"ol")(4,"li"),e._uU(5,"click the 'Variant' button,"),e.qZA(),e.TgZ(6,"li"),e._uU(7,"enter a Gene name, then select a Gene"),e.qZA(),e.TgZ(8,"li"),e._uU(9,"enter the Variant name"),e.qZA(),e.TgZ(10,"li"),e._uU(11," click the 'Create Variant' button that will appear if name does not match any CIViC Variants "),e.qZA()(),e.BQk())}function Du(l,g){1&l&&(e.ynx(0),e.TgZ(1,"p"),e._uU(2," An expression may not contain multiple instances of the same Variant. Either remove the variant or change the expression. For example, "),e.TgZ(3,"strong"),e._uU(4,"(#VID123 AND #VID456) OR (#VID123 AND #VID789)"),e.qZA(),e._uU(5,", which is invalid, is logically identical to the valid MP expression "),e.TgZ(6,"strong"),e._uU(7,"#VID123 AND (#VID456 OR #VID789)"),e.qZA(),e._uU(8,". "),e.qZA(),e.BQk())}function Ou(l,g){1&l&&(e.ynx(0),e.TgZ(1,"p"),e._uU(2," The Molecular Profile editor allows the selection or creation of complex Molecular Profiles by writing Molecular Profile Expressions. These expressions are composed with a simple language consisting of Variant tokens, boolean operators, and parentheses. For example: "),e.qZA(),e.TgZ(3,"blockquote")(4,"strong"),e._uU(5,"#VID12 AND #VID2220"),e.qZA(),e._UZ(6,"br"),e.TgZ(7,"strong"),e._uU(8,"#VID12 OR #VID2220"),e.qZA(),e._UZ(9,"br"),e.TgZ(10,"strong"),e._uU(11,"#VID12 AND NOT #VID2220"),e.qZA(),e._UZ(12,"br"),e.TgZ(13,"strong"),e._uU(14,"#VID12 AND #VID2220 AND (#VID456 OR #VID123)"),e.qZA(),e._UZ(15,"br"),e.TgZ(16,"strong"),e._uU(17,"#VID12 OR #VID2220 OR (NOT #VID456 AND #VID123)"),e.qZA(),e._UZ(18,"br"),e.qZA(),e.TgZ(19,"p")(20,"strong"),e._uU(21,"Variant Tokens"),e.qZA(),e._UZ(22,"br"),e._uU(23," Variant tokens are composed of a CIViC Variant ID prepended with "),e.TgZ(24,"strong"),e._uU(25,"#VID"),e.qZA(),e._uU(26,", and refer to specific CIViC Variants. For example, "),e.TgZ(27,"strong"),e._uU(28,"#VID12"),e.qZA(),e._uU(29," refers to "),e.TgZ(30,"strong"),e._uU(31,"BRAF V600E"),e.qZA(),e._uU(32,"; "),e.TgZ(33,"strong"),e._uU(34,"#VID2220"),e.qZA(),e._uU(35," refers to "),e.TgZ(36,"strong"),e._uU(37,"ALK FUSION"),e.qZA(),e._uU(38,". If you don\u2019t know the CIViC ID of a Variant, you can search for Variants by name using the \u2018Variant\u2019 or \u2018NOT Variant\u2019 buttons below. These interfaces can also be used to add a Variant that\u2019s not yet in CIViC. "),e.qZA(),e.TgZ(39,"p")(40,"strong"),e._uU(41,"Boolean Operators"),e.qZA(),e._UZ(42,"br"),e._uU(43," MP Expressions with more than a single variant must include boolean operators - "),e.TgZ(44,"strong"),e._uU(45,"AND"),e.qZA(),e._uU(46,", "),e.TgZ(47,"strong"),e._uU(48,"OR"),e.qZA(),e._uU(49,", and "),e.TgZ(50,"strong"),e._uU(51,"NOT"),e.qZA(),e._uU(52," - indicating their relationship. For example, the expression "),e.TgZ(53,"strong"),e._uU(54,"#VID12 AND #VID2220"),e.qZA(),e._uU(55," describes a MP that includes both "),e.TgZ(56,"strong"),e._uU(57,"BRAF V600E"),e.qZA(),e._uU(58," and "),e.TgZ(59,"strong"),e._uU(60,"ALK FUSION"),e.qZA(),e._uU(61,". "),e.qZA(),e.TgZ(62,"p")(63,"strong"),e._uU(64,"Parentheses"),e.qZA(),e._UZ(65,"br"),e._uU(66," Expressions cannot have both "),e.TgZ(67,"strong"),e._uU(68,"AND"),e.qZA(),e._uU(69," and "),e.TgZ(70,"strong"),e._uU(71,"OR"),e.qZA(),e._uU(72," operators within the same expression. To construct complex MPs that require multiple operators, one must use parentheses to create embedded expressions. "),e.qZA(),e.TgZ(73,"p")(74,"strong"),e._uU(75,"NOTE:"),e.qZA(),e._uU(76," Be sure to read the help text provided along with every alert message by hovering over 'Syntax Assistance'. "),e.qZA(),e.BQk())}let wu=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-mp-editor-popover-help"]],inputs:{cvcErrorType:"cvcErrorType"},decls:11,vars:9,consts:[[1,"help-content"],[3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"]],template:function(s,p){1&s&&(e.TgZ(0,"div",0),e.ynx(1,1),e.YNc(2,Ya,3,0,"ng-container",2),e.YNc(3,Zr,6,0,"ng-container",2),e.YNc(4,Su,15,0,"ng-container",2),e.YNc(5,Eu,31,0,"ng-container",2),e.YNc(6,xu,17,0,"ng-container",2),e.YNc(7,xl,6,0,"ng-container",2),e.YNc(8,xc,12,0,"ng-container",2),e.YNc(9,Du,9,0,"ng-container",2),e.YNc(10,Ou,77,0,"ng-container",3),e.BQk(),e.qZA()),2&s&&(e.xp6(1),e.Q6J("ngSwitch",p.cvcErrorType),e.xp6(1),e.Q6J("ngSwitchCase","incompleteExpression"),e.xp6(1),e.Q6J("ngSwitchCase","incompleteNOT"),e.xp6(1),e.Q6J("ngSwitchCase","initialBoolean"),e.xp6(1),e.Q6J("ngSwitchCase","invalidToken"),e.xp6(1),e.Q6J("ngSwitchCase","multipleBoolean"),e.xp6(1),e.Q6J("ngSwitchCase","trailingBoolean"),e.xp6(1),e.Q6J("ngSwitchCase","unknownVariant"),e.xp6(1),e.Q6J("ngSwitchCase","identicalVariants"))},dependencies:[a.RF,a.n9,a.ED],styles:[".help-content[_ngcontent-%COMP%]{max-width:500px}blockquote[_ngcontent-%COMP%]{margin-left:1em}"]}),l})();var Ss;const Pu=["expressionEditor"];function Iu(l,g){1&l&&e._uU(0,"Added new Molecular Profile")}function lr(l,g){if(1&l&&e._UZ(0,"cvc-mp-tag-name",24),2&l){const s=e.oxw().ngrxLet;e.Q6J("nameSegments",s)}}function Dc(l,g){1&l&&(e.TgZ(0,"span",25),e._uU(1," Valid Molecular Profile expressions will be previewed here. "),e.qZA())}function Dl(l,g){if(1&l&&(e.ynx(0),e.YNc(1,lr,1,1,"cvc-mp-tag-name",22),e.YNc(2,Dc,2,0,"span",23),e.BQk()),2&l){const s=g.ngrxLet;e.xp6(1),e.Q6J("ngIf",s),e.xp6(1),e.Q6J("ngIf",!s)}}function Oc(l,g){1&l&&e._UZ(0,"cvc-mp-editor-popover-help")}function ar(l,g){if(1&l&&(e.TgZ(0,"button",28),e._UZ(1,"span",29),e._uU(2," GETTING STARTED "),e.qZA(),e.YNc(3,Oc,1,0,"ng-template",null,30,e.W1O)),2&l){const s=e.MAs(4);e.Q6J("nzPopoverContent",s)}}function ma(l,g){if(1&l&&(e.ynx(0),e._UZ(1,"nz-alert",26),e.YNc(2,ar,5,1,"ng-template",null,27,e.W1O),e.BQk()),2&l){const s=g.ngIf,p=e.MAs(3);e.xp6(1),e.Q6J("nzMessage",s)("nzAction",p)}}function Ol(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"button",34),e.NdJ("click",function(){e.CHM(s);const O=e.oxw(3).ngrxLet,Ce=e.oxw();return e.KtG(Ce.cvcOnSelect.next(O))}),e._uU(1," Select this MP "),e.qZA()}}function wl(l,g){if(1&l&&(e._uU(0," Molecular Profile "),e.TgZ(1,"strong"),e._uU(2),e.qZA(),e._uU(3," found. ")),2&l){const s=e.oxw(3).ngrxLet;e.xp6(2),e.Oqu(s.name)}}function Ed(l,g){if(1&l&&(e.ynx(0),e._UZ(1,"nz-alert",31),e.YNc(2,Ol,2,0,"ng-template",null,32,e.W1O),e.YNc(4,wl,4,1,"ng-template",null,33,e.W1O),e.BQk()),2&l){const s=e.MAs(3),p=e.MAs(5);e.xp6(1),e.Q6J("nzMessage",p)("nzAction",s)}}function F1(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"button",37),e.NdJ("click",function(){e.CHM(s);const O=e.oxw(4);return e.KtG(O.onCreateNewMp$.next())}),e._uU(1," Create New MP "),e.qZA()}}function xd(l,g){1&l&&e._uU(0," Molecular Profile not found, create it? ")}function Au(l,g){if(1&l&&(e.ynx(0),e._UZ(1,"nz-alert",31),e.YNc(2,F1,2,0,"ng-template",null,35,e.W1O),e.YNc(4,xd,1,0,"ng-template",null,36,e.W1O),e.BQk()),2&l){const s=e.MAs(3),p=e.MAs(5);e.xp6(1),e.Q6J("nzMessage",p)("nzAction",s)}}function N1(l,g){if(1&l&&(e.ynx(0),e.YNc(1,Ed,6,2,"ng-container",6),e.YNc(2,Au,6,2,"ng-container",6),e.BQk()),2&l){const s=e.oxw().ngrxLet;e.xp6(1),e.Q6J("ngIf",void 0!==s),e.xp6(1),e.Q6J("ngIf",void 0===s)}}function Fu(l,g){if(1&l&&(e.ynx(0),e.YNc(1,N1,3,2,"ng-container",6),e.ALo(2,"ngrxPush"),e.ALo(3,"ngrxPush"),e.BQk()),2&l){const s=e.oxw();e.xp6(1),e.Q6J("ngIf",!e.lcZ(2,1,s.expressionError$)&&!e.lcZ(3,3,s.expressionMessage$))}}function Dd(l,g){if(1&l&&(e.TgZ(0,"button",40),e._UZ(1,"span",29),e._uU(2," SYNTAX ASSISTANCE "),e.qZA()),2&l){const s=e.oxw().helpContent;e.Q6J("nzPopoverContent",s)}}function L1(l,g){if(1&l&&(e._UZ(0,"nz-alert",38),e.YNc(1,Dd,3,1,"ng-template",null,39,e.W1O)),2&l){const s=g.$implicit,p=e.MAs(2);e.Q6J("nzMessage",s.errorMessage)("nzAction",p)}}function Pl(l,g){1&l&&e.GkF(0)}function wc(l,g){1&l&&e._UZ(0,"cvc-mp-editor-popover-help",46)}const Qs=function(l,g){return{$implicit:l,helpContent:g}};function ga(l,g){if(1&l&&(e.ynx(0),e.YNc(1,Pl,1,0,"ng-container",44),e.YNc(2,wc,1,0,"ng-template",null,45,e.W1O),e.BQk()),2&l){const s=e.MAs(3),p=e.oxw().ngIf;e.oxw();const O=e.MAs(14);e.xp6(1),e.Q6J("ngTemplateOutlet",O)("ngTemplateOutletContext",e.WLB(2,Qs,p,s))}}function $a(l,g){1&l&&e.GkF(0)}function k1(l,g){1&l&&e._UZ(0,"cvc-mp-editor-popover-help",48)}function Nu(l,g){if(1&l&&(e.ynx(0),e.YNc(1,$a,1,0,"ng-container",44),e.YNc(2,k1,1,0,"ng-template",null,47,e.W1O),e.BQk()),2&l){const s=e.MAs(3),p=e.oxw().ngIf;e.oxw();const O=e.MAs(14);e.xp6(1),e.Q6J("ngTemplateOutlet",O)("ngTemplateOutletContext",e.WLB(2,Qs,p,s))}}function Lu(l,g){1&l&&e.GkF(0)}function Il(l,g){1&l&&e._UZ(0,"cvc-mp-editor-popover-help",50)}function Gs(l,g){if(1&l&&(e.ynx(0),e.YNc(1,Lu,1,0,"ng-container",44),e.YNc(2,Il,1,0,"ng-template",null,49,e.W1O),e.BQk()),2&l){const s=e.MAs(3),p=e.oxw().ngIf;e.oxw();const O=e.MAs(14);e.xp6(1),e.Q6J("ngTemplateOutlet",O)("ngTemplateOutletContext",e.WLB(2,Qs,p,s))}}function Pc(l,g){1&l&&e.GkF(0)}function y(l,g){1&l&&e._UZ(0,"cvc-mp-editor-popover-help",52)}function st(l,g){if(1&l&&(e.ynx(0),e.YNc(1,Pc,1,0,"ng-container",44),e.YNc(2,y,1,0,"ng-template",null,51,e.W1O),e.BQk()),2&l){const s=e.MAs(3),p=e.oxw().ngIf;e.oxw();const O=e.MAs(14);e.xp6(1),e.Q6J("ngTemplateOutlet",O)("ngTemplateOutletContext",e.WLB(2,Qs,p,s))}}function re(l,g){1&l&&e.GkF(0)}function Od(l,g){1&l&&e._UZ(0,"cvc-mp-editor-popover-help",54)}function pp(l,g){if(1&l&&(e.ynx(0),e.YNc(1,re,1,0,"ng-container",44),e.YNc(2,Od,1,0,"ng-template",null,53,e.W1O),e.BQk()),2&l){const s=e.MAs(3),p=e.oxw().ngIf;e.oxw();const O=e.MAs(14);e.xp6(1),e.Q6J("ngTemplateOutlet",O)("ngTemplateOutletContext",e.WLB(2,Qs,p,s))}}function hp(l,g){1&l&&e.GkF(0)}function fp(l,g){1&l&&e._UZ(0,"cvc-mp-editor-popover-help",56)}function mp(l,g){if(1&l&&(e.ynx(0),e.YNc(1,hp,1,0,"ng-container",44),e.YNc(2,fp,1,0,"ng-template",null,55,e.W1O),e.BQk()),2&l){const s=e.MAs(3),p=e.oxw().ngIf;e.oxw();const O=e.MAs(14);e.xp6(1),e.Q6J("ngTemplateOutlet",O)("ngTemplateOutletContext",e.WLB(2,Qs,p,s))}}function gp(l,g){1&l&&e.GkF(0)}function wd(l,g){1&l&&(e.ynx(0),e._UZ(1,"cvc-mp-editor-popover-help",58),e.BQk())}function R1(l,g){1&l&&(e.ynx(0),e._UZ(1,"cvc-mp-editor-popover-help",59),e.BQk())}function Pd(l,g){if(1&l&&(e.YNc(0,wd,2,0,"ng-container",6),e.YNc(1,R1,2,0,"ng-container",6)),2&l){const s=e.oxw(2).ngIf;e.Q6J("ngIf",s.errorMessage.split(" ").includes("multiple")),e.xp6(1),e.Q6J("ngIf",s.errorMessage.split(" ").includes("found."))}}function V1(l,g){if(1&l&&(e.ynx(0),e.YNc(1,gp,1,0,"ng-container",44),e.YNc(2,Pd,2,2,"ng-template",null,57,e.W1O),e.BQk()),2&l){const s=e.MAs(3),p=e.oxw().ngIf;e.oxw();const O=e.MAs(14);e.xp6(1),e.Q6J("ngTemplateOutlet",O)("ngTemplateOutletContext",e.WLB(2,Qs,p,s))}}function vp(l,g){if(1&l&&(e.ynx(0),e.TgZ(1,"pre"),e._uU(2),e.ALo(3,"json"),e.qZA(),e.BQk()),2&l){const s=e.oxw().ngIf;e.xp6(2),e.hij("              ",e.lcZ(3,1,s),"\n            ")}}function _p(l,g){if(1&l&&(e.ynx(0)(1,41),e.YNc(2,ga,4,5,"ng-container",42),e.YNc(3,Nu,4,5,"ng-container",42),e.YNc(4,Gs,4,5,"ng-container",42),e.YNc(5,st,4,5,"ng-container",42),e.YNc(6,pp,4,5,"ng-container",42),e.YNc(7,mp,4,5,"ng-container",42),e.YNc(8,V1,4,5,"ng-container",42),e.YNc(9,vp,4,3,"ng-container",43),e.BQk()()),2&l){const s=g.ngIf;e.xp6(1),e.Q6J("ngSwitch",s.errorType),e.xp6(1),e.Q6J("ngSwitchCase","invalidToken"),e.xp6(1),e.Q6J("ngSwitchCase","trailingBoolean"),e.xp6(1),e.Q6J("ngSwitchCase","initialBoolean"),e.xp6(1),e.Q6J("ngSwitchCase","multipleBoolean"),e.xp6(1),e.Q6J("ngSwitchCase","incompleteExpression"),e.xp6(1),e.Q6J("ngSwitchCase","incompleteNOT"),e.xp6(1),e.Q6J("ngSwitchCase","queryError")}}function B1(l,g){1&l&&(e.TgZ(0,"span",25),e._uU(1," Append: "),e.qZA())}function Id(l,g){if(1&l&&(e.TgZ(0,"button",60)(1,"strong"),e._uU(2,"Variant"),e.qZA()()),2&l){e.oxw();const s=e.MAs(37);e.Q6J("nzPopoverContent",s)}}function Ua(l,g){if(1&l&&(e.TgZ(0,"button",61)(1,"strong"),e._uU(2,"NOT Variant"),e.qZA()()),2&l){e.oxw();const s=e.MAs(39);e.Q6J("nzPopoverContent",s)}}function H1(l,g){1&l&&(e.TgZ(0,"span",62),e._uU(1," | "),e.qZA())}function Wn(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"button",63),e.NdJ("click",function(){e.CHM(s);const O=e.oxw();return e.KtG(O.onAppendInput$.next("AND"))}),e.TgZ(1,"strong"),e._uU(2,"AND"),e.qZA()()}}function Ui(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"button",63),e.NdJ("click",function(){e.CHM(s);const O=e.oxw();return e.KtG(O.onAppendInput$.next("OR"))}),e.TgZ(1,"strong"),e._uU(2,"OR"),e.qZA()()}}function ku(l,g){1&l&&(e.TgZ(0,"span",62),e._uU(1," | "),e.qZA())}function ja(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"button",63),e.NdJ("click",function(){e.CHM(s);const O=e.oxw();return e.KtG(O.onAppendInput$.next("("))}),e.TgZ(1,"strong"),e._uU(2,"("),e.qZA()()}}function Ru(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"button",63),e.NdJ("click",function(){e.CHM(s);const O=e.oxw();return e.KtG(O.onAppendInput$.next(")"))}),e.TgZ(1,"strong"),e._uU(2,")"),e.qZA()()}}const Vu=function(){return[6,8]};function Y1(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"div",64)(1,"nz-row",2)(2,"nz-col",3)(3,"p",65),e._uU(4," Select a Gene and Variant to append its #VID. "),e.qZA()(),e.TgZ(5,"nz-col",3)(6,"cvc-mp-finder",66),e.NdJ("cvcOnVariantSelect",function(O){e.CHM(s);const Ce=e.oxw();return e.KtG(Ce.onVariantSelect$.next({variant:O,prependNot:!1}))}),e.qZA()()()()}2&l&&(e.xp6(1),e.Q6J("nzGutter",e.DdM(1,Vu)))}function Eo(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"div",64)(1,"nz-row",2)(2,"nz-col",3)(3,"p",65),e._uU(4," Select a Gene and Variant to append its #VID, prepended with NOT boolean. "),e.qZA()(),e.TgZ(5,"nz-col",3)(6,"cvc-mp-finder",66),e.NdJ("cvcOnVariantSelect",function(O){e.CHM(s);const Ce=e.oxw();return e.KtG(Ce.onVariantSelect$.next({variant:O,prependNot:!0}))}),e.qZA()()()()}2&l&&(e.xp6(1),e.Q6J("nzGutter",e.DdM(1,Vu)))}function Al(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"nz-list-item")(1,"nz-list-item-meta")(2,"nz-list-item-meta-title"),e._UZ(3,"cvc-entity-tag",70),e.qZA(),e.TgZ(4,"nz-list-item-meta-description"),e._uU(5),e.qZA()(),e.TgZ(6,"ul",71)(7,"nz-list-item-action")(8,"button",72),e.NdJ("click",function(){const Ce=e.CHM(s).$implicit,ft=e.oxw(2);return e.KtG(ft.onSelectExample$.next(Ce))}),e._uU(9," Select "),e.qZA()()()()}if(2&l){const s=g.$implicit;e.xp6(3),e.Q6J("cvcLinkableEntity",s.mp),e.xp6(2),e.hij(" ",s.description," ")}}function $1(l,g){if(1&l&&(e.TgZ(0,"div",67)(1,"nz-list",68),e.YNc(2,Al,10,2,"nz-list-item",69),e.qZA()()),2&l){const s=e.oxw();e.xp6(2),e.Q6J("ngForOf",s.exampleExpressions)}}const Ic=function(l){return{active:l}};let va=((Ss=class{constructor(g,s,p,O,Ce){this.previewMpGql=g,this.createMolecularProfileGql=s,this.mpEditorPrepopulate=p,this.networkErrorService=O,this.viewerService=Ce,this.cvcOnSelect=new e.vpe,this.expressionMessages={initial:"Use the editor below to construct a molecular profile."},this.exampleExpressions=[{mp:{__typename:"MolecularProfile",id:9999,name:"BRAF V600E AND EGFR L858R AND EGFR T790M"},expression:"#VID12 AND #VID33 AND #VID34",description:"BRAF V600E, EGFR L858R, and EGFR T790M must all be observed."},{mp:{__typename:"MolecularProfile",id:9999,name:"BRAF V600E AND NOT EGFR L858R"},expression:"#VID12 AND NOT #VID33",description:"BRAF V600E must be observed and EGFR L858R must be absent."},{mp:{__typename:"MolecularProfile",id:9999,name:"BRAF V600E OR EGFR L858R OR EGFR T790M"},expression:"#VID12 OR #VID33 OR #VID34",description:"Either BRAF V600E, or EGFR L858R, or EGFR T790M must be observed."},{mp:{__typename:"MolecularProfile",id:9999,name:"BRAF V600E AND (EGFR L858R OR EGFR T790M)"},expression:"#VID12 AND (#VID33 OR #VID34)",description:"BRAF V600E must be observed and either EGFR L858R or EGFR T790M must be observed."},{mp:{__typename:"MolecularProfile",id:9999,name:"NOT KIT D816V"},expression:"NOT #VID4353",description:"KIT D816V must be absent."}],this.createMolecularProfileMutator=new oi.U(this.networkErrorService),this.onInputChange$=new Be.X(void 0),this.onAppendInput$=new E.x,this.onVariantSelect$=new E.x,this.onCreateNewMp$=new E.x,this.onSelectExample$=new E.x,this.inputValue$=new Be.X(""),this.expressionError$=new Be.X(void 0),this.expressionHelp$=new Be.X(void 0),this.expressionMessage$=new Be.X(this.expressionMessages.initial),this.expressionSegment$=new E.x,this.existingMp$=new E.x,this.viewer$=this.viewerService.viewer$,this.mostRecentOrg$=this.viewer$.pipe((0,si.j)("mostRecentOrg"))}ngAfterViewInit(){this.mostRecentOrg$.pipe((0,zn.t)(this)).subscribe(g=>{this.mostRecentOrgId=g?.id}),this.onInputChange$.pipe((0,Cs.b)(250),(0,St.b)(g=>{g||this.expressionSegment$.next(void 0)}),(0,vt.h)(No.ep),(0,St.b)(g=>{0===g.length&&(this.expressionMessage$.next(this.expressionMessages.initial),this.expressionError$.next(void 0))}),(0,vt.h)(g=>g.length>0),(0,vt.h)(g=>" "!==g[g.length-1]),(0,S.U)(g=>{let s=fa(g);return"errorMessage"in s?s:this.previewQueryRef.refetch({mpStructure:s})}),(0,zn.t)(this)).subscribe(g=>{if(this.isMpParseError(g)){const s=g;this.expressionMessage$.next(void 0),this.expressionError$.next(s),this.expressionSegment$.next(void 0)}else g.then(({data:p,errors:O})=>{if(O)this.expressionMessage$.next(void 0),this.expressionError$.next({errorType:"queryError",errorMessage:O.map(Ce=>Ce.message).join("\n")}),this.expressionSegment$.next(void 0);else{this.expressionSegment$.next(p.previewMolecularProfileName.segments),this.expressionMessage$.next(void 0),this.expressionError$.next(void 0);this.existingMp$.next(p.previewMolecularProfileName.existingMolecularProfile||void 0)}})}),this.onAppendInput$.pipe((0,zn.t)(this)).subscribe(g=>{if(this.expressionEditor){const s=this.expressionEditor.nativeElement,O=`${s.value}${/\s+$/.test(g)?g:" "+g}`;s.value=O,this.inputValue$.next(O),this.onInputChange$.next(O)}}),this.onSelectExample$.pipe((0,zn.t)(this)).subscribe(g=>{this.expressionEditor&&(this.expressionEditor.nativeElement.value=g.expression,this.inputValue$.next(g.expression),this.onInputChange$.next(g.expression))}),this.onVariantSelect$.pipe((0,ni.M)(this.onInputChange$),(0,S.U)(([g,s])=>{const p=`${g.prependNot?"NOT ":""}#VID${g.variant.id}`;return s&&0!=s.trim().length?`${s.trim()} ${p}`:p}),(0,zn.t)(this)).subscribe(g=>{this.inputValue$.next(g),this.onInputChange$.next(g)}),this.previewQueryRef=this.previewMpGql.watch({}),this.previewMpName$=this.previewQueryRef.valueChanges.pipe((0,si.j)("data","previewMolecularProfileName"),(0,vt.h)(No.ep),(0,S.U)(g=>g.segments),(0,zn.t)(this)),this.previewMpAlreadyExists$=this.previewQueryRef.valueChanges.pipe((0,si.j)("data","previewMolecularProfileName"),(0,vt.h)(No.ep),(0,S.U)(g=>g.existingMolecularProfile),(0,zn.t)(this)),this.previewDeprecatedVariants$=this.previewQueryRef.valueChanges.pipe((0,si.j)("data","previewMolecularProfileName"),(0,vt.h)(No.ep),(0,S.U)(g=>g.deprecatedVariants),(0,zn.t)(this)),this.onCreateNewMp$.pipe((0,ni.M)(this.onInputChange$),(0,zn.t)(this)).subscribe(([g,s])=>{if(!s||0===s.length)return;let p=fa(s);"errorMessage"in p||(this.state=this.createMolecularProfileMutator.mutate(this.createMolecularProfileGql,{mpStructure:p,organizationId:this.mostRecentOrgId},{},O=>{setTimeout(()=>{O.createMolecularProfile&&this.cvcOnSelect.next(O.createMolecularProfile.molecularProfile)},1e3)}))})}isMpParseError(g){return void 0!==g.errorMessage}prepopulateMp(g){if(!g)return this.expressionSegment$.next(void 0),this.expressionMessage$.next(this.expressionMessages.initial),void this.inputValue$.next("");bs(this.mpEditorPrepopulate.fetch({mpId:g},{fetchPolicy:"cache-first"})).then(({data:s})=>{if(!s?.molecularProfile?.id)return void console.error(`MpExpressionEditor could not fetch MolecularProfile:${g} to prepolate editor fields.`);const p=s.molecularProfile.rawName.replace(/#GID(\d+)/g,"").trim();this.inputValue$.next(p),this.onInputChange$.next(p)})}ngOnChanges(g){g.cvcPrepopulateWithId&&this.prepopulateMp(g.cvcPrepopulateWithId.currentValue)}}).\u0275fac=function(g){return new(g||Ss)(e.Y36(Fn.mki),e.Y36(Fn.zpu),e.Y36(Fn.vjc),e.Y36(jo.Y),e.Y36(Ha.a))},Ss.\u0275cmp=e.Xpm({type:Ss,selectors:[["cvc-mp-expression-editor"]],viewQuery:function(g,s){if(1&g&&e.Gf(Pu,5),2&g){let p;e.iGM(p=e.CRH())&&(s.expressionEditor=p.first)}},inputs:{cvcPrepopulateWithId:"cvcPrepopulateWithId"},outputs:{cvcOnSelect:"cvcOnSelect"},features:[e.TTD],decls:42,vars:23,consts:[["entityType","Molecular Profile",3,"mutationState","successMessage"],["success",""],[3,"nzGutter"],["nzSpan","24"],[1,"expression-preview",3,"ngClass"],[4,"ngrxLet"],[4,"ngIf"],["errorAlert",""],["nz-input","","rows","1","placeholder","Enter or edit a Molecular Expression here.",2,"width","100%",3,"ngModel","ngModelChange"],["expressionEditor",""],[1,"btn-row"],["nzFlex","80px"],["nzBlock","","nz-button","","nzType","primary","nzShape","round","nzSize","small","nz-popover","","nzPopoverTitle","Select a Profile to view its expression","nzPopoverTrigger","click","nzPopoverPlacement","bottomLeft",3,"nzPopoverContent"],["nzFlex","auto",2,"text-align","right"],["nz-typography","","nzType","secondary",4,"nzSpaceItem"],["type","button","nz-button","","nz-popover","","nzPopoverTitle","Append Variant #VID","nzPopoverTrigger","click","nzSize","small","nzShape","round","nzType","primary","nzPopoverPlacement","bottom",3,"nzPopoverContent",4,"nzSpaceItem"],["type","button","nz-button","","nz-popover","","nzPopoverTitle","Append Variant NOT #VID","nzPopoverTrigger","click","nzSize","small","nzShape","round","nzType","primary","nzPopoverPlacement","bottom",3,"nzPopoverContent",4,"nzSpaceItem"],["class","btn-divider",4,"nzSpaceItem"],["type","button","nz-button","","nzType","primary","nzSize","small","nzShape","round",3,"click",4,"nzSpaceItem"],["appendVariant",""],["appendNotVariant",""],["expressionExamples",""],[3,"nameSegments",4,"ngIf"],["nz-typography","","nzType","secondary",4,"ngIf"],[3,"nameSegments"],["nz-typography","","nzType","secondary"],["nzType","info","nzShowIcon","",3,"nzMessage","nzAction"],["messageAction",""],["type","button","nz-button","","nzType","dashed","nzSize","small","nzShape","round","nz-popover","","nzPopoverTrigger","hover",3,"nzPopoverContent"],["nz-icon","","nzType","question-circle","nzTheme","fill"],["gettingStartedHelp",""],["nzType","success","nzShowIcon","",3,"nzMessage","nzAction"],["selectAction",""],["foundMessage",""],["type","button","nz-button","","nzType","primary","nzSize","small","nzBlock","",3,"click"],["createAction",""],["createMessage",""],["type","button","nz-button","","nzSize","small","nzType","primary","nzBlock","",3,"click"],["nzType","error","nzShowIcon","",3,"nzMessage","nzAction"],["errorAction",""],["nz-button","","nzDanger","","nzType","text","nzSize","small","nzShape","round","nz-popover","","nzPopoverTrigger","hover",3,"nzPopoverContent"],[3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["invalidTokenHelp",""],["cvcErrorType","invalidToken"],["trailingBooleanHelp",""],["cvcErrorType","trailingBoolean"],["initialBooleanHelp",""],["cvcErrorType","initialBoolean"],["multipleBooleanHelp",""],["cvcErrorType","multipleBoolean"],["incompleteExpressionHelp",""],["cvcErrorType","incompleteExpression"],["incompleteNOTHelp",""],["cvcErrorType","incompleteNOT"],["queryErrorHelp",""],["cvcErrorType","identicalVariants"],["cvcErrorType","unknownVariant"],["type","button","nz-button","","nz-popover","","nzPopoverTitle","Append Variant #VID","nzPopoverTrigger","click","nzSize","small","nzShape","round","nzType","primary","nzPopoverPlacement","bottom",3,"nzPopoverContent"],["type","button","nz-button","","nz-popover","","nzPopoverTitle","Append Variant NOT #VID","nzPopoverTrigger","click","nzSize","small","nzShape","round","nzType","primary","nzPopoverPlacement","bottom",3,"nzPopoverContent"],[1,"btn-divider"],["type","button","nz-button","","nzType","primary","nzSize","small","nzShape","round",3,"click"],[1,"append-popover-contents"],["nz-typography","","nzType","secondary",2,"margin","0","padding-bottom","2px"],[3,"cvcOnVariantSelect"],[2,"min-width","525px","margin","-8px -12px"],["nzSize","small","nzItemLayout","horizontal"],[4,"ngFor","ngForOf"],[3,"cvcLinkableEntity"],["nz-list-item-actions",""],["type","button","nz-button","","nzType","primary","nzSize","small",3,"click"]],template:function(g,s){if(1&g&&(e.TgZ(0,"cvc-form-submission-status-display",0),e.YNc(1,Iu,1,0,"ng-template",null,1,e.W1O),e.TgZ(3,"nz-row",2)(4,"nz-col",3)(5,"div",4),e.ALo(6,"ngrxPush"),e.YNc(7,Dl,3,2,"ng-container",5),e.ALo(8,"ngrxPush"),e.qZA()(),e.TgZ(9,"nz-col",3),e.YNc(10,ma,4,2,"ng-container",6),e.ALo(11,"ngrxPush"),e.YNc(12,Fu,4,5,"ng-container",5),e.YNc(13,L1,3,2,"ng-template",null,7,e.W1O),e.YNc(15,_p,10,8,"ng-container",6),e.ALo(16,"ngrxPush"),e.qZA(),e.TgZ(17,"nz-col",3)(18,"textarea",8,9),e.NdJ("ngModelChange",function(O){return s.onInputChange$.next(O)}),e.ALo(20,"ngrxPush"),e.qZA()()(),e.TgZ(21,"nz-row",10)(22,"nz-col",11)(23,"button",12),e._uU(24," Examples "),e.qZA()(),e.TgZ(25,"nz-col",13)(26,"nz-space"),e.YNc(27,B1,2,0,"span",14),e.YNc(28,Id,3,1,"button",15),e.YNc(29,Ua,3,1,"button",16),e.YNc(30,H1,2,0,"span",17),e.YNc(31,Wn,3,0,"button",18),e.YNc(32,Ui,3,0,"button",18),e.YNc(33,ku,2,0,"span",17),e.YNc(34,ja,3,0,"button",18),e.YNc(35,Ru,3,0,"button",18),e.qZA()(),e.YNc(36,Y1,7,2,"ng-template",null,19,e.W1O),e.YNc(38,Eo,7,2,"ng-template",null,20,e.W1O),e.YNc(40,$1,3,1,"ng-template",null,21,e.W1O),e.qZA()()),2&g){const p=e.MAs(2),O=e.MAs(41);e.Q6J("mutationState",s.state)("successMessage",p),e.xp6(3),e.Q6J("nzGutter",e.DdM(20,Vu)),e.xp6(2),e.Q6J("ngClass",e.VKq(21,Ic,void 0!==e.lcZ(6,10,s.expressionSegment$))),e.xp6(2),e.Q6J("ngrxLet",e.lcZ(8,12,s.expressionSegment$)),e.xp6(3),e.Q6J("ngIf",e.lcZ(11,14,s.expressionMessage$)),e.xp6(2),e.Q6J("ngrxLet",s.existingMp$),e.xp6(3),e.Q6J("ngIf",e.lcZ(16,16,s.expressionError$)),e.xp6(3),e.Q6J("ngModel",e.lcZ(20,18,s.inputValue$)),e.xp6(5),e.Q6J("nzPopoverContent",O)}},dependencies:[a.mk,a.sg,a.O5,a.tP,a.RF,a.n9,a.ED,t.Fj,t.JJ,t.On,lo.eJ,yt.r,To.ix,de.w,et.dQ,ue.Ls,I.Zp,R.t3,R.SK,Re.NU,Re.$1,X.ZU,Wo.lU,Ki.n_,Ki.AA,Ki.yi,Ki.IO,Ki.Pb,Ki.nk,Ki.KC,zi.F,El.C,Qt.J,js,wu,a.Ts,lo.fM],styles:["[_nghost-%COMP%]{display:block;background-color:#f6f6f6;border:1px solid #dedede;border-radius:4px;padding:8px}.expression-preview[_ngcontent-%COMP%]{width:100%;padding:8px;border:1px solid #dedede;border-radius:4px}.expression-preview.active[_ngcontent-%COMP%]{background-color:#fff}.append-popover-contents[_ngcontent-%COMP%]{min-width:450px}.help-content[_ngcontent-%COMP%]{max-width:500px}.btn-row[_ngcontent-%COMP%]{margin-top:10px;flex-wrap:nowrap}.btn-row[_ngcontent-%COMP%]   .btn-divider[_ngcontent-%COMP%]{color:#aaa}"],changeDetection:0}),Ss);va=(0,V.gn)([(0,zn.c)()],va);const Qa=["optionTemplates"];function Es(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"cvc-mp-finder",11),e.NdJ("cvcOnSelect",function(O){e.CHM(s);const Ce=e.oxw(2);return e.KtG(Ce.onMpSelect$.next(O))}),e.qZA()}}function Ac(l,g){1&l&&(e.TgZ(0,"div",12),e._uU(1," \xa0 "),e.TgZ(2,"span",13)(3,"i"),e._uU(4,"Select or create a Molecular Profile with the expression editor "),e.qZA()()())}function us(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"div",14)(1,"div",15)(2,"cvc-entity-select",16),e.NdJ("cvcOnSearch",function(O){e.CHM(s);const Ce=e.oxw(2);return e.KtG(Ce.onSearch$.next(O))})("cvcOnModelChange",function(O){e.CHM(s);const Ce=e.oxw(2);return e.KtG(Ce.props.change&&Ce.props.change(Ce.field,O))}),e.ALo(3,"ngrxPush"),e.ALo(4,"ngrxPush"),e.ALo(5,"ngrxPush"),e.qZA()()()}if(2&l){const s=e.oxw(2),p=e.MAs(13);e.xp6(2),e.Q6J("cvcSelectMode",s.props.isMultiSelect?"multiple":"default")("cvcCustomTemplate",p)("cvcFormControl",s.formControl)("cvcFormlyAttributes",s.field)("cvcEntityName",s.props.entityName)("cvcPlaceholder",s.props.placeholder)("cvcResults",e.lcZ(3,15,s.result$))("cvcDisabled",s.props.disabled)("cvcAllowClear",!1)("cvcOptions",e.lcZ(4,17,s.selectOption$))("cvcShowError",s.showError)("cvcLoading",e.lcZ(5,19,s.isLoading$))("cvcBorderless",!0)("cvcSuffixIcon",null)("cvcShowArrow",!1)}}function U1(l,g){if(1&l&&(e.ynx(0),e.YNc(1,Es,1,0,"cvc-mp-finder",8),e.YNc(2,Ac,5,0,"div",9),e.YNc(3,us,6,21,"div",10),e.BQk()),2&l){const s=g.ngrxLet,p=e.oxw();e.xp6(1),e.Q6J("ngIf",s.showFinder&&!p.editorOpen),e.xp6(1),e.Q6J("ngIf",p.editorOpen),e.xp6(1),e.Q6J("ngIf",s.showSelect&&!p.editorOpen)}}function Fl(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"nz-col",17)(1,"cvc-mp-expression-editor",18),e.NdJ("cvcOnSelect",function(O){e.CHM(s);const Ce=e.oxw();return e.KtG(Ce.onMpSelect$.next(O))}),e.ALo(2,"ngrxPush"),e.qZA()()}if(2&l){const s=e.oxw();e.xp6(1),e.Q6J("cvcPrepopulateWithId",e.lcZ(2,1,s.onMpId$))}}function j1(l,g){if(1&l&&(e.ynx(0),e.TgZ(1,"em"),e._UZ(2,"span",25),e.ALo(3,"highlightTypeahead"),e.qZA(),e.BQk()),2&l){const s=e.oxw(2).$implicit,p=e.oxw().ngrxLet;e.xp6(2),e.Q6J("innerHtml",e.xi3(3,1,s.molecularProfileAliases.join(", "),p),e.oJD)}}function Bu(l,g){1&l&&e._uU(0,"--")}function ji(l,g){if(1&l&&(e._UZ(0,"cvc-entity-tag",21),e.TgZ(1,"span",22),e._uU(2," Aliases: "),e.YNc(3,j1,4,4,"ng-container",23),e.YNc(4,Bu,1,0,"ng-template",null,24,e.W1O),e.qZA()),2&l){const s=e.MAs(5),p=e.oxw().$implicit,O=e.oxw().ngrxLet;e.Q6J("cvcDisableLink",!0)("cvcCacheId",p.__typename+":"+p.id)("cvcEmphasize",O),e.xp6(3),e.Q6J("ngIf",p.molecularProfileAliases.length>0)("ngIfElse",s)}}function ur(l,g){1&l&&(e.ynx(0),e.YNc(1,ji,6,5,"ng-template",null,20,e.W1O),e.BQk())}function Nl(l,g){if(1&l&&(e.ynx(0),e.YNc(1,ur,3,0,"ng-container",19),e.ALo(2,"ngrxPush"),e.BQk()),2&l){const s=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,s.result$))}}function Q1(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"div",26)(1,"cvc-entity-tag",27),e.NdJ("cvcOnClose",function(){const Ce=e.CHM(s).$implicit,ft=e.oxw();return e.KtG(ft.onTagClose$.next(Ce.nzValue))}),e.qZA()()}if(2&l){const s=g.$implicit,p=e.oxw();e.xp6(1),e.Q6J("cvcCacheId","MolecularProfile:"+s.nzValue)("cvcContext",p.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",p.props.isMultiSelect?"default":"closeable")}}const G1=function(){return[8,12]},Hu=function(l,g){return{show:l,hide:g}},Ll=bo(ko(),Oo());let Ga=(()=>{class l extends Ll{constructor(s,p,O,Ce){super(),this.taq=s,this.tq=p,this.changeDetectorRef=O,this.apollo=Ce,this.editorOpen=!1,this.defaultOptions={props:{label:"Molecular Profile",placeholder:"Search Molecular Profiles",tooltip:"A single variant (Simple Molecular Profile) or a combination of variants (Complex Molecular Profile) relevant to the curated assertion.",isMultiSelect:!1,description:"Select a Gene and Variant to specify a simple Molecular Profile.",entityName:{singular:"Molecular Profile",plural:"Molecular Profiles"},minSearchStrLength:1}},this.onMpSelect$=new Be.X(void 0),this.onMpId$=new Qi.t,this.onShowExpClick$=new E.x,this.showExp$=this.onShowExpClick$.pipe((0,wr.R)((ft,vn)=>!ft,!1),(0,St.b)(ft=>this.editorOpen=ft)),this.selectDisplay$=new Be.X({showFinder:!0,showSelect:!1})}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEntitySelectField({typeaheadQuery:this.taq,tagQuery:this.tq,getTypeaheadVarsFn:this.getTypeaheadVarsFn,getTypeaheadResultsFn:this.getTypeaheadResultsFn,getTagQueryVarsFn:this.getTagQueryVarsFn,getTagQueryResultsFn:this.getTagQueryResultsFn,getSelectedItemOptionFn:this.getSelectedItemOptionFn,getSelectOptionsFn:this.getSelectOptionsFn,changeDetectorRef:this.changeDetectorRef,selectOpen$:this.selectOpen$,selectComponent:this.selectComponent}),this.initialDescription=this.props.description,this.onValueChange$.pipe((0,zn.t)(this)).subscribe(s=>{const p=void 0!==s;this.selectDisplay$.next({showFinder:!p,showSelect:p}),this.onMpId$.next(s),this.props.description=s?void 0:this.initialDescription}),this.onMpSelect$.pipe((0,zn.t)(this)).subscribe(s=>{s?(this.selectOption$.next([{label:s.name,value:s.id}]),this.editorOpen&&this.onShowExpClick$.next(),this.cdr.detectChanges(),this.field.formControl.setValue(s.id),this.field.formControl.markAsTouched()):this.selectDisplay$.next({showFinder:!0,showSelect:!1})})}configureStateConnections(){}getTypeaheadVarsFn(s,p){return{name:s,geneId:p}}getTypeaheadResultsFn(s){return s.data.molecularProfiles.nodes}getTagQueryVarsFn(s){return{molecularProfileId:s}}getTagQueryResultsFn(s){return s.data.molecularProfile}getSelectedItemOptionFn(s){return{value:s.id,label:s.name}}getSelectOptionsFn(s,p){return s.map((O,Ce)=>({label:p.get(Ce)||O.name,value:O.id}))}}return l.\u0275fac=function(s){return new(s||l)(e.Y36(Fn.F4e),e.Y36(Fn.dGO),e.Y36(e.sBO),e.Y36(Pr._M))},l.\u0275cmp=e.Xpm({type:l,selectors:[["ng-component"]],viewQuery:function(s,p){if(1&s&&e.Gf(Qa,5,e.Rgc),2&s){let O;e.iGM(O=e.CRH())&&(p.optionTemplates=O)}},features:[e.qOj],decls:14,vars:16,consts:[[3,"nzGutter"],["nzFlex","auto"],[4,"ngrxLet"],["nzFlex","50px"],["type","button","nz-button","","nzBlock","","nz-tooltip","","nzTooltipTitle","Add/Edit Complex MP Expression",1,"expression-button",3,"click"],["nz-icon","",3,"ngClass","nzType"],["nzSpan","24","class","editor-drawer",4,"ngIf"],["selectedTemplate",""],[3,"cvcOnSelect",4,"ngIf"],["class","editor-message",4,"ngIf"],["class","select-container",4,"ngIf"],[3,"cvcOnSelect"],[1,"editor-message"],["nz-typography","","nzEllipsis","","nzType","secondary"],[1,"select-container"],[1,"limit-select-width"],[3,"cvcSelectMode","cvcCustomTemplate","cvcFormControl","cvcFormlyAttributes","cvcEntityName","cvcPlaceholder","cvcResults","cvcDisabled","cvcAllowClear","cvcOptions","cvcShowError","cvcLoading","cvcBorderless","cvcSuffixIcon","cvcShowArrow","cvcOnSearch","cvcOnModelChange"],["nzSpan","24",1,"editor-drawer"],[3,"cvcPrepopulateWithId","cvcOnSelect"],[4,"ngFor","ngForOf"],["optionTemplates",""],[3,"cvcDisableLink","cvcCacheId","cvcEmphasize"],["nz-typography","","nzType","secondary"],[4,"ngIf","ngIfElse"],["noAliases",""],["nz-typography","","nzType","secondary",3,"innerHtml"],[1,"ant-select-selection-item-content"],[3,"cvcCacheId","cvcContext","cvcMode","cvcOnClose"]],template:function(s,p){1&s&&(e.TgZ(0,"nz-row",0)(1,"nz-col",1),e.YNc(2,U1,4,3,"ng-container",2),e.qZA(),e.TgZ(3,"nz-col",3)(4,"button",4),e.NdJ("click",function(){return p.onShowExpClick$.next()}),e._UZ(5,"span",5),e.ALo(6,"ngrxPush"),e.ALo(7,"ngrxPush"),e._uU(8,"Editor "),e.qZA()(),e.YNc(9,Fl,3,3,"nz-col",6),e.ALo(10,"ngrxPush"),e.qZA(),e.YNc(11,Nl,3,3,"ng-container",2),e.YNc(12,Q1,2,3,"ng-template",null,7,e.W1O)),2&s&&(e.Q6J("nzGutter",e.DdM(12,G1)),e.xp6(2),e.Q6J("ngrxLet",p.selectDisplay$),e.xp6(3),e.Q6J("ngClass",e.WLB(13,Hu,e.lcZ(6,6,p.showExp$),!e.lcZ(7,8,p.showExp$)))("nzType","caret-right"),e.xp6(4),e.Q6J("ngIf",e.lcZ(10,10,p.showExp$)),e.xp6(2),e.Q6J("ngrxLet",p.onSearch$))},dependencies:[a.mk,a.sg,a.O5,lo.eJ,To.ix,de.w,et.dQ,ue.Ls,R.t3,R.SK,X.ZU,eo.SY,an,Qt.J,va,js,lo.fM,fr.A],styles:["form[_ngcontent-%COMP%]   span.hide[_ngcontent-%COMP%], .expression-button[_ngcontent-%COMP%]   span.hide[_ngcontent-%COMP%]{transform:rotate(0);transition:transform .2s linear}form[_ngcontent-%COMP%]   span.show[_ngcontent-%COMP%], .expression-button[_ngcontent-%COMP%]   span.show[_ngcontent-%COMP%]{transform:rotate(90deg);transition:transform .2s linear}.editor-message[_ngcontent-%COMP%]{padding:3px;background-color:#f5f5f5;cursor:default;border-radius:2px}.select-container[_ngcontent-%COMP%]{padding:0;background-color:#fff;cursor:default;border-radius:2px;border:1px solid #d9d9d9}.select-container[_ngcontent-%COMP%]   .limit-select-width[_ngcontent-%COMP%]{display:inline-block;margin-top:-1px;margin-bottom:-1px}"],data:{animation:[Tu.mF,Tu.MC]},changeDetection:0}),l})();const Ad={types:[{name:"molecular-profile-select",wrappers:["form-field"],component:Ga},{name:"molecular-profile-multi-select",wrappers:["form-field"],component:Ga,defaultOptions:{props:{label:"Molecular Profiles",isMultiSelect:!0}}}]};let _a=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[a.ez,t.u5,t.UX,_.X0.forChild(Ad),yt.L,To.sL,He.LV,_i.Qp,ue.PV,I.o7,R.Jb,Re.zf,N.U5,H.ic,X.ZJ,eo.cg,Wo.$6,Re.zf,ye.Wr,Ki.Ph,Po.g,w1.r,Lo,jt,tt.s,Te.x]}),l})();const Fd=["optionTemplates"];function Fc(l,g){if(1&l&&(e.TgZ(0,"nz-tag",5),e._uU(1),e.qZA()),2&l){const s=e.oxw().$implicit;e.xp6(1),e.Oqu(s.name)}}function W1(l,g){1&l&&(e.ynx(0),e.YNc(1,Fc,2,1,"ng-template",null,4,e.W1O),e.BQk())}function Nd(l,g){if(1&l&&(e.ynx(0),e.YNc(1,W1,3,0,"ng-container",3),e.ALo(2,"ngrxPush"),e.BQk()),2&l){const s=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,s.result$))}}function ya(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"div",6)(1,"cvc-entity-tag",7),e.NdJ("cvcOnClose",function(){const Ce=e.CHM(s).$implicit,ft=e.oxw();return e.KtG(ft.onTagClose$.next(Ce.nzValue))}),e.qZA()()}if(2&l){const s=g.$implicit,p=e.oxw();e.xp6(1),e.Q6J("cvcDisableLink",!0)("cvcCacheId","NccnGuideline:"+s.nzValue)("cvcContext",p.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",p.props.isMultiSelect?"default":"closeable")("cvcShowIcon",!1)}}const Nc=bo(ko(),Oo());let kl=(()=>{class l extends Nc{constructor(s,p,O){super(),this.taq=s,this.tq=p,this.changeDetectorRef=O,this.defaultOptions={props:{entityName:{singular:"NCCN Guideline",plural:"NCCN Guidelines"},isMultiSelect:!1,requireType:!1,tooltip:"If applicable, please provide cancer (e.g., Breast Cancer) for the appropriate NCCN guideline.",placeholder:"Search NCCN Guidelines"}},this.placeholder$=new Be.X(void 0)}ngAfterViewInit(){this.configureBaseField(),this.configureEntitySelectField({typeaheadQuery:this.taq,typeaheadParam$:void 0,tagQuery:this.tq,getTypeaheadVarsFn:this.getTypeaheadVarsFn,getTypeaheadResultsFn:this.getTypeaheadResultsFn,getTagQueryVarsFn:this.getTagQueryVarsFn,getTagQueryResultsFn:this.getTagQueryResultsFn,getSelectedItemOptionFn:this.getSelectedItemOptionFn,getSelectOptionsFn:this.getSelectOptionsFn,changeDetectorRef:this.changeDetectorRef,selectComponent:this.selectComponent})}getTypeaheadVarsFn(s){return{name:s}}getTypeaheadResultsFn(s){return s.data.nccnGuidelinesTypeahead}getTagQueryResultsFn(s){return s.data.nccnGuideline}getTagQueryVarsFn(s){return{id:s}}getSelectedItemOptionFn(s){return{value:s.id,label:s.name}}getSelectOptionsFn(s,p){return s.map((O,Ce)=>({label:p.get(Ce)||O.name,value:O.id}))}}return l.\u0275fac=function(s){return new(s||l)(e.Y36(Fn.sA8),e.Y36(Fn.N$2),e.Y36(e.sBO))},l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-nccn-guideline-select"]],viewQuery:function(s,p){if(1&s&&e.Gf(Fd,5,e.Rgc),2&s){let O;e.iGM(O=e.CRH())&&(p.optionTemplates=O)}},features:[e.qOj],decls:8,vars:20,consts:[[3,"cvcSelectMode","cvcCustomTemplate","cvcFormControl","cvcFormlyAttributes","cvcEntityName","cvcPlaceholder","cvcResults","cvcOptions","cvcShowError","cvcDisabled","cvcLoading","cvcOnSearch","cvcOnOpenChange","cvcOnModelChange"],[4,"ngrxLet"],["selectedTemplate",""],[4,"ngFor","ngForOf"],["optionTemplates",""],["nz-tooltip",""],[1,"ant-select-selection-item-content"],[3,"cvcDisableLink","cvcCacheId","cvcContext","cvcMode","cvcShowIcon","cvcOnClose"]],template:function(s,p){if(1&s&&(e.TgZ(0,"cvc-entity-select",0),e.NdJ("cvcOnSearch",function(Ce){return p.onSearch$.next(Ce)})("cvcOnOpenChange",function(Ce){return p.onOpenChange$.next(Ce)})("cvcOnModelChange",function(Ce){return p.props.change&&p.props.change(p.field,Ce)}),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.ALo(3,"ngrxPush"),e.ALo(4,"ngrxPush"),e.qZA(),e.YNc(5,Nd,3,3,"ng-container",1),e.YNc(6,ya,2,5,"ng-template",null,2,e.W1O)),2&s){const O=e.MAs(7);e.Q6J("cvcSelectMode",p.props.isMultiSelect?"multiple":"default")("cvcCustomTemplate",O)("cvcFormControl",p.formControl)("cvcFormlyAttributes",p.field)("cvcEntityName",p.props.entityName)("cvcPlaceholder",e.lcZ(1,12,p.placeholder$))("cvcResults",e.lcZ(2,14,p.result$))("cvcOptions",e.lcZ(3,16,p.selectOption$))("cvcShowError",p.showError)("cvcDisabled",!1)("cvcLoading",e.lcZ(4,18,p.isLoading$)),e.xp6(5),e.Q6J("ngrxLet",p.onSearch$)}},dependencies:[a.sg,lo.eJ,eo.SY,An.j,an,Qt.J,lo.fM],changeDetection:0}),l})();const Lc={types:[{name:"nccn-guideline-select",wrappers:["form-field"],component:kl,defaultOptions:{props:{label:"NCCN Guideline"}}},{name:"nccn-guideline-multi-select",wrappers:["form-field"],component:kl,defaultOptions:{props:{isMultiSelect:!0,label:"NCCN Guideline(s)"}}}]};let Z1=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[a.ez,t.UX,_.X0.forChild(Lc),yt.L,To.sL,He.LV,Wo.$6,_i.Qp,ue.PV,I.o7,R.Jb,eo.cg,Re.zf,N.U5,H.ic,X.ZJ,An.X,Lo,jt,tt.s,Te.x,Tn]}),l})();const Yu=bo(ko()),Ca={types:[{name:"nccn-guideline-version-input",component:(()=>{class l extends Yu{constructor(s){super(),this.cdr=s,this.defaultDescription="Please enter the version of the NCCN guideline you're referencing in the format <strong>Version.Year</strong>",this.defaultOptions={validators:{nccnVersionNumber:{expression:p=>{if(p.value){if(/^\d{1,2}\.\d{4}$/.test(p.value)){let O=+p.value.split(".")[1];return O>=2e3&&O<=(new Date).getFullYear()+1}return!1}return!0},message:(p,O)=>`"${O.formControl?.value}" does not fit the format Version.Year`}},props:{label:"NCCN Guideline Version",extraType:"description",description:this.defaultDescription}}}ngAfterViewInit(){this.configureBaseField(),this.state&&this.state.formReady$?this.state.formReady$.pipe((0,vt.h)(s=>s),(0,es.q)(1),(0,zn.t)(this)).subscribe(s=>{this.configureField()}):this.configureField()}configureField(){this.state?.fields.nccnGuidelineId$.pipe((0,zn.t)(this)).subscribe(s=>{s?(this.props.disabled=!1,this.props.required=!0,this.props.extraType="description",this.props.description=this.defaultDescription):(this.props.disabled=!0,this.props.required=!1,this.props.extraType="prompt",this.props.description="NCCN Guideline Version is only required when NCCN Guideline is specified.",this.formControl.setValue(void 0))})}}return l.\u0275fac=function(s){return new(s||l)(e.Y36(e.sBO))},l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-nccn-guideline-version-input"]],features:[e.qOj],decls:1,vars:2,consts:[["nz-input","","placeholder","ex: 1.2023",3,"formControl","formlyAttributes"]],template:function(s,p){1&s&&e._UZ(0,"input",0),2&s&&e.Q6J("formControl",p.formControl)("formlyAttributes",p.field)},dependencies:[t.Fj,t.JJ,t.oH,_.JD,I.Zp],encapsulation:2,changeDetection:0}),l})(),wrappers:["form-field"]}]};let yp=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[a.ez,t.UX,_.X0.forChild(Ca),I.o7,Lo]}),l})();var xs,Ld=c(6928);let ds=((xs=class{constructor(g){this.el=g,this.domChange=new e.vpe,this.changes=new MutationObserver(s=>{(0,dr.D)(s).pipe((0,S.U)(p=>{const O=p.target;return"class"===p.attributeName?{type:"class",change:O.classList.value,key:`${p.attributeName}:${O.classList.value}`}:"disabled"===p.attributeName?{type:"disabled",change:O.disabled,key:`${p.attributeName}:${O.disabled}`}:"hidden"===p.attributeName?{type:"hidden",change:O.hidden,key:`${p.attributeName}:${O.hidden}`}:{type:p.attributeName,change:"unknown change type",key:`${p.attributeName}:unknown-change-type`}}),pt("key"),(0,zn.t)(this)).subscribe(p=>{this.domChange.emit(p)})}),this.changes.observe(this.el.nativeElement,{attributeFilter:["class","disabled","hidden"],attributes:!0,childList:!1,subtree:!1})}ngAfterViewInit(){this.initialClass=this.el.nativeElement.classList.value}ngOnDestroy(){this.changes.disconnect()}}).\u0275fac=function(g){return new(g||xs)(e.Y36(e.SBq))},xs.\u0275dir=e.lG2({type:xs,selectors:[["button","cvcOrgSubmitButton",""]],outputs:{domChange:"domChange"}}),xs);var Ar;function kc(l,g){if(1&l&&(e.TgZ(0,"button",3),e._uU(1),e.qZA()),2&l){const s=g.ngrxLet,p=e.oxw();e.Q6J("disabled",!p.form.valid)("nzTooltipTrigger",s?"hover":null)("nzTooltipTitle","For "+(null==s?null:s.name)),e.xp6(1),e.hij(" ",p.props.submitLabel," ")}}ds=(0,V.gn)([(0,zn.c)()],ds);const Cp=function(l,g,s){return{"btn-right":l,"btn-left":g,"btn-center":s}};let K1=((Ar=class extends _.fS{constructor(g,s,p){super(),this.viewerService=g,this.cdr=s,this.apollo=p,this.menuSelection$=new E.x,this.baseButtonClass="org-dropdown-btn",this.defaultOptions={props:{submitLabel:"Submit"}},this.viewer$=this.viewerService.viewer$,this.organizations$=this.viewer$.pipe((0,si.j)("organizations")),this.mostRecentOrg$=this.viewer$.pipe((0,si.j)("mostRecentOrg")),this.isDisabled$=new E.x,this.isHidden$=new E.x,this.buttonClass$=new Be.X(this.baseButtonClass),this.subscriptions=[]}ngOnInit(){this.menuSelection$.pipe((0,ni.M)(this.viewer$)).subscribe(([O,Ce])=>{const ft={id:`User:${Ce.id}`,fragment:Pr.Ps`
            fragment UserMostRecentOrgId on User {
              mostRecentOrganizationId
            }
          `,data:{mostRecentOrganizationId:O}};this.apollo.client.writeFragment(ft)}),this.formUpdate$=new Be.X(this.form.status);const g=this.form.statusChanges.subscribe(O=>this.formUpdate$.next(O)),s=this.formUpdate$.subscribe(O=>this.cdr.detectChanges()),p=this.mostRecentOrg$.pipe((0,si.j)("id"),(0,vt.h)(No.ep)).subscribe(O=>{this.formControl.setValue(O)});this.subscriptions=this.subscriptions.concat([g,s,p])}ngAfterViewInit(){if(this.button&&this.button.domChange){const g=this.button.domChange.subscribe(s=>{"class"===s.type&&"string"==typeof s.change?this.buttonClass$.next(`${this.baseButtonClass} ${s.change}`):"disabled"===s.type&&"boolean"==typeof s.change?this.isDisabled$.next(s.change):"hidden"===s.type&&"boolean"==typeof s.change&&this.isHidden$.next(s.change)});this.subscriptions.push(g)}}}).\u0275fac=function(g){return new(g||Ar)(e.Y36(Ha.a),e.Y36(e.sBO),e.Y36(Pr._M))},Ar.\u0275cmp=e.Xpm({type:Ar,selectors:[["cvc-org-submit-button"]],viewQuery:function(g,s){if(1&g&&e.Gf(ds,5),2&g){let p;e.iGM(p=e.CRH())&&(s.button=p.first)}},features:[e.qOj],decls:3,vars:8,consts:[["type","hidden",3,"formControl","formlyAttributes"],[1,"btn-aligner",3,"ngClass"],["cvcOrgSubmitButton","","type","submit","nz-button","","nzType","primary","nz-tooltip","",3,"disabled","nzDanger","nzTooltipTrigger","nzTooltipTitle",4,"ngrxLet"],["cvcOrgSubmitButton","","type","submit","nz-button","","nzType","primary","nz-tooltip","",3,"disabled","nzDanger","nzTooltipTrigger","nzTooltipTitle"]],template:function(g,s){1&g&&(e._UZ(0,"input",0),e.TgZ(1,"div",1),e.YNc(2,kc,2,4,"button",2),e.qZA()),2&g&&(e.Q6J("formControl",s.formControl)("formlyAttributes",s.field),e.xp6(1),e.Q6J("ngClass",e.kEZ(4,Cp,"right"===s.props.align,"left"===s.props.align,"center"===s.props.align)),e.xp6(1),e.Q6J("ngrxLet",s.mostRecentOrg$))},dependencies:[a.mk,t.Fj,t.JJ,t.oH,lo.eJ,_.JD,To.ix,de.w,et.dQ,eo.SY,ds],styles:[".btn-aligner[_ngcontent-%COMP%]{width:100%}.btn-aligner.btn-right[_ngcontent-%COMP%]{text-align:right}.btn-aligner.btn-left[_ngcontent-%COMP%]{text-align:left}.btn-aligner.btn-center[_ngcontent-%COMP%]{text-align:center}"],changeDetection:0}),Ar);K1=(0,V.gn)([(0,zn.c)({arrayName:"subscriptions"})],K1);const zp={types:[{name:"org-submit-button",component:K1}]};let Tp=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[a.ez,t.UX,_.X0.forChild(zp),ue.PV,Ld.Rt,To.sL,Br.b1,eo.cg]}),l})();const Mp=["optionTemplates"];function Rl(l,g){if(1&l&&e._UZ(0,"cvc-attribute-tag",4),2&l){const s=e.oxw().$implicit;e.Q6J("cvcAttrValue",s)}}function J1(l,g){1&l&&(e.ynx(0),e.YNc(1,Rl,1,1,"ng-template",null,3,e.W1O),e.BQk())}function q1(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"div",5)(1,"cvc-attribute-tag",6),e.NdJ("cvcOnClose",function(O){e.CHM(s);const Ce=e.oxw();return e.KtG(Ce.onTagClose$.next(O))}),e.qZA()()}if(2&l){const s=g.$implicit,p=e.oxw();e.xp6(1),e.Q6J("cvcAttrValue",s.nzValue)("cvcContext",p.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",p.props.isMultiSelect?"default":"closeable")}}const X1=new Map([[Fn.huM.Somatic,"Variant is a mutation, found only in tumor cells, having arisen in a specific tissue (non-germ cell), and is not expected to be inherited or passed to offspring."],[Fn.huM.RareGermline,"Variant is found in every cell (not restricted to tumor/diseased cells) and is thought to exist in less than 1% of the population relevant to this evidence item."],[Fn.huM.CommonGermline,"Variant is found in every cell (not restricted to tumor/diseased cells) and is thought to exist in at least 1% of the population relevant to this evidence item."],[Fn.huM.Combined," Variants in the corresponding Complex Molecular Profile have heterogeneous origins."],[Fn.huM.Unknown,"The variant origin is uncertain based on the available evidence."],[Fn.huM.Na,"The variant type (e.g., expression) is not compatible (or easily classified) with the CIViC concept of variant origin."]]),kd=bo(ko(),fo());let $u=(()=>{class l extends kd{constructor(s){super(),this.cdr=s,this.defaultOptions={props:{label:"Variant Origin",required:!1,isMultiSelect:!1,placeholder:"Select Variant Origin",tooltip:"Identifies whether the variant is inherited (germline mutation) or acquired (somatic mutation) in the context of the study"}},this.originEnum$=new Be.X([])}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEnumSelectField({optionEnum$:this.originEnum$,optionTemplate$:this.optionTemplate$,changeDetectorRef:this.cdr}),this.originEnum$.next(Array.from(X1.keys()))}configureStateConnections(){this.optionTemplates||console.error(`${this.field.id} could not find its optionTemplates QueryList to populate its select options, so simple text labels will be displayed.`),this.optionTemplate$=this.optionTemplates?.changes.pipe((0,S.U)(s=>s.map(p=>p))),this.onValueChange$.pipe((0,zn.t)(this)).subscribe(s=>{s?(this.props.description=X1.get(s),this.props.extraType="description"):(this.props.description=void 0,this.props.extraType="prompt")})}}return l.\u0275fac=function(s){return new(s||l)(e.Y36(e.sBO))},l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-origin-select"]],viewQuery:function(s,p){if(1&s&&e.Gf(Mp,5,e.Rgc),2&s){let O;e.iGM(O=e.CRH())&&(p.optionTemplates=O)}},features:[e.qOj],decls:6,vars:13,consts:[[3,"cvcFormControl","cvcFormlyAttributes","cvcSelectMode","cvcPlaceholder","cvcCustomTemplate","cvcOptions","cvcShowError","cvcDisabled"],[4,"ngFor","ngForOf"],["selectedTemplate",""],["optionTemplates",""],[3,"cvcAttrValue"],[1,"ant-select-selection-item-content"],[3,"cvcAttrValue","cvcContext","cvcMode","cvcOnClose"]],template:function(s,p){if(1&s&&(e._UZ(0,"cvc-enum-select",0),e.ALo(1,"ngrxPush"),e.YNc(2,J1,3,0,"ng-container",1),e.ALo(3,"ngrxPush"),e.YNc(4,q1,2,3,"ng-template",null,2,e.W1O)),2&s){const O=e.MAs(5);e.Q6J("cvcFormControl",p.formControl)("cvcFormlyAttributes",p.field)("cvcSelectMode",p.props.isMultiSelect?"multiple":"default")("cvcPlaceholder",p.props.placeholder)("cvcCustomTemplate",O)("cvcOptions",e.lcZ(1,9,p.selectOption$))("cvcShowError",p.showError)("cvcDisabled",p.props.disabled),e.xp6(2),e.Q6J("ngForOf",e.lcZ(3,11,p.originEnum$))}},dependencies:[a.sg,wo,Ie,lo.fM]}),l})();const Vl={types:[{name:"origin-select",wrappers:["form-field"],component:$u},{name:"origin-multi-select",wrappers:["form-field"],component:$u,defaultOptions:{props:{label:"Variant Origins",isMultiSelect:!0}}}]};let Ds=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[a.ez,t.UX,_.X0.forChild(Vl),Lo,Kn,xr]}),l})();const Os=["optionTemplates"];function ed(l,g){if(1&l&&(e.ynx(0),e.TgZ(1,"em"),e._UZ(2,"span",8),e.ALo(3,"highlightTypeahead"),e.qZA(),e.BQk()),2&l){const s=e.oxw(2).$implicit,p=e.oxw().ngrxLet;e.xp6(2),e.Q6J("innerHtml",e.xi3(3,1,s.hpoId,p),e.oJD)}}function Uu(l,g){if(1&l&&(e._UZ(0,"cvc-entity-tag",5),e.TgZ(1,"span",6),e.YNc(2,ed,4,4,"ng-container",7),e.qZA()),2&l){const s=e.oxw().$implicit,p=e.oxw().ngrxLet;e.Q6J("cvcDisableLink",!0)("cvcCacheId",s.__typename+":"+s.id)("cvcEmphasize",p),e.xp6(2),e.Q6J("ngIf",s.hpoId)}}function Rd(l,g){1&l&&(e.ynx(0),e.YNc(1,Uu,3,4,"ng-template",null,4,e.W1O),e.BQk())}function Vd(l,g){if(1&l&&(e.ynx(0),e.YNc(1,Rd,3,0,"ng-container",3),e.ALo(2,"ngrxPush"),e.BQk()),2&l){const s=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,s.result$))}}function bp(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"div",9)(1,"cvc-entity-tag",10),e.NdJ("cvcOnClose",function(){const Ce=e.CHM(s).$implicit,ft=e.oxw();return e.KtG(ft.onTagClose$.next(Ce.nzValue))}),e.qZA()()}if(2&l){const s=g.$implicit,p=e.oxw();e.xp6(1),e.Q6J("cvcCacheId","Phenotype:"+s.nzValue)("cvcContext",p.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",p.props.isMultiSelect?"default":"closeable")}}const Sp=bo(ko(),Oo());let ju=(()=>{class l extends Sp{constructor(s,p,O){super(),this.taq=s,this.tq=p,this.changeDetectorRef=O,this.defaultOptions={props:{entityName:{singular:"Phenotype",plural:"Phenotypes"},isMultiSelect:!1,requireType:!0,tooltip:"Phenotype or phenotype combination which interacts with the specified variant",placeholders:{default:"Search Phenotypes",multiDefault:"Select Phenotype(s) (max MULTI_MAX)",requireTypePrompt:"Select an ENTITY_NAME Type to search Phenotypes"},description:'Please provide any <a href="https://hpo.jax.org/app/browse/term/HP:0000118" target="_blank">HPO phenotypes</a>, including <a href="https://hpo.jax.org/app/browse/term/HP:0003674" target="_blank">age of onset</a>.',extraType:"prompt"}},this.placeholder$=new Be.X(this.defaultOptions.props.placeholders.default)}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEntitySelectField({typeaheadQuery:this.taq,typeaheadParam$:void 0,tagQuery:this.tq,getTypeaheadVarsFn:this.getTypeaheadVarsFn,getTypeaheadResultsFn:this.getTypeaheadResultsFn,getTagQueryVarsFn:this.getTagQueryVarsFn,getTagQueryResultsFn:this.getTagQueryResultsFn,getSelectedItemOptionFn:this.getSelectedItemOptionFn,getSelectOptionsFn:this.getSelectOptionsFn,changeDetectorRef:this.changeDetectorRef,selectOpen$:this.selectOpen$,selectComponent:this.selectComponent}),this.configurePlaceholders()}configureStateConnections(){}configurePlaceholders(){}getTypeaheadVarsFn(s){return{name:s}}getTypeaheadResultsFn(s){return s.data.phenotypeTypeahead}getTagQueryVarsFn(s){return{id:s}}getTagQueryResultsFn(s){return s.data.phenotype}getSelectedItemOptionFn(s){return{value:s.id,label:s.name}}getSelectOptionsFn(s,p){return s.map((O,Ce)=>({label:p.get(Ce)||O.name,value:O.id}))}}return l.\u0275fac=function(s){return new(s||l)(e.Y36(Fn.zOE),e.Y36(Fn.z_7),e.Y36(e.sBO))},l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-phenotype-select"]],viewQuery:function(s,p){if(1&s&&e.Gf(Os,5,e.Rgc),2&s){let O;e.iGM(O=e.CRH())&&(p.optionTemplates=O)}},features:[e.qOj],decls:9,vars:22,consts:[[3,"cvcSelectMode","cvcCustomTemplate","cvcFormControl","cvcFormlyAttributes","cvcEntityName","cvcPlaceholder","cvcResults","cvcOptions","cvcShowError","cvcDisabled","cvcLoading","cvcOnSearch","cvcOnOpenChange","cvcOnModelChange"],[4,"ngrxLet"],["selectedTemplate",""],[4,"ngFor","ngForOf"],["optionTemplates",""],[3,"cvcDisableLink","cvcCacheId","cvcEmphasize"],["nz-typography","","nzType","secondary"],[4,"ngIf"],["nz-typography","","nzType","secondary",3,"innerHtml"],[1,"ant-select-selection-item-content"],[3,"cvcCacheId","cvcContext","cvcMode","cvcOnClose"]],template:function(s,p){if(1&s&&(e.TgZ(0,"cvc-entity-select",0),e.NdJ("cvcOnSearch",function(Ce){return p.onSearch$.next(Ce)})("cvcOnOpenChange",function(Ce){return p.onOpenChange$.next(Ce)})("cvcOnModelChange",function(Ce){return p.props.change&&p.props.change(p.field,Ce)}),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.ALo(3,"ngrxPush"),e.ALo(4,"ngrxPush"),e.ALo(5,"ngrxPush"),e.qZA(),e.YNc(6,Vd,3,3,"ng-container",1),e.YNc(7,bp,2,3,"ng-template",null,2,e.W1O)),2&s){const O=e.MAs(8);e.Q6J("cvcSelectMode",p.props.isMultiSelect?"multiple":"default")("cvcCustomTemplate",O)("cvcFormControl",p.formControl)("cvcFormlyAttributes",p.field)("cvcEntityName",p.props.entityName)("cvcPlaceholder",e.lcZ(1,12,p.placeholder$))("cvcResults",e.lcZ(2,14,p.result$))("cvcOptions",e.lcZ(3,16,p.selectOption$))("cvcShowError",p.showError)("cvcDisabled",p.onRequiresPhenotype$&&!e.lcZ(4,18,p.onRequiresPhenotype$))("cvcLoading",e.lcZ(5,20,p.isLoading$)),e.xp6(6),e.Q6J("ngrxLet",p.onSearch$)}},dependencies:[a.sg,a.O5,lo.eJ,X.ZU,an,Qt.J,lo.fM,fr.A],changeDetection:0}),l})();const Qu={types:[{name:"phenotype-select",wrappers:["form-field"],component:ju,defaultOptions:{props:{label:"Phenotype"}}},{name:"phenotype-multi-select",wrappers:["form-field"],component:ju,defaultOptions:{props:{isMultiSelect:!0,label:"Phenotypes"}}}]};let td=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[a.ez,t.UX,_.X0.forChild(Qu),yt.L,To.sL,He.LV,Wo.$6,_i.Qp,ue.PV,I.o7,R.Jb,eo.cg,Re.zf,N.U5,H.ic,X.ZJ,An.X,Lo,jt,tt.s,Te.x]}),l})();var nd=c(874);const Gu=["nz-rate-item",""];function Ep(l,g){}function Bd(l,g){}function Hd(l,g){1&l&&e._UZ(0,"span",4)}const Wu=function(l){return{$implicit:l}},Bl=["ulElement"];function Hl(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"li",3)(1,"div",4),e.NdJ("itemHover",function(O){const ft=e.CHM(s).index,vn=e.oxw();return e.KtG(vn.onItemHover(ft,O))})("itemClick",function(O){const ft=e.CHM(s).index,vn=e.oxw();return e.KtG(vn.onItemClick(ft,O))}),e.qZA()()}if(2&l){const s=g.index,p=e.oxw();e.Q6J("ngClass",p.starStyleArray[s]||"")("nzTooltipTitle",p.nzTooltips[s]),e.xp6(1),e.Q6J("allowHalf",p.nzAllowHalf)("character",p.nzCharacter)("index",s)}}let od=(()=>{class l{constructor(){this.index=0,this.allowHalf=!1,this.itemHover=new e.vpe,this.itemClick=new e.vpe}hoverRate(s){this.itemHover.next(s&&this.allowHalf)}clickRate(s){this.itemClick.next(s&&this.allowHalf)}}return l.\u0275fac=function(s){return new(s||l)},l.\u0275cmp=e.Xpm({type:l,selectors:[["","nz-rate-item",""]],inputs:{character:"character",index:"index",allowHalf:"allowHalf"},outputs:{itemHover:"itemHover",itemClick:"itemClick"},exportAs:["nzRateItem"],attrs:Gu,decls:6,vars:8,consts:[[1,"ant-rate-star-second",3,"mouseover","click"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"ant-rate-star-first",3,"mouseover","click"],["defaultCharacter",""],["nz-icon","","nzType","star","nzTheme","fill"]],template:function(s,p){if(1&s&&(e.TgZ(0,"div",0),e.NdJ("mouseover",function(Ce){return p.hoverRate(!1),Ce.stopPropagation()})("click",function(){return p.clickRate(!1)}),e.YNc(1,Ep,0,0,"ng-template",1),e.qZA(),e.TgZ(2,"div",2),e.NdJ("mouseover",function(Ce){return p.hoverRate(!0),Ce.stopPropagation()})("click",function(){return p.clickRate(!0)}),e.YNc(3,Bd,0,0,"ng-template",1),e.qZA(),e.YNc(4,Hd,1,0,"ng-template",null,3,e.W1O)),2&s){const O=e.MAs(5);e.xp6(1),e.Q6J("ngTemplateOutlet",p.character||O)("ngTemplateOutletContext",e.VKq(4,Wu,p.index)),e.xp6(2),e.Q6J("ngTemplateOutlet",p.character||O)("ngTemplateOutletContext",e.VKq(6,Wu,p.index))}},dependencies:[a.tP,ue.Ls],encapsulation:2,changeDetection:0}),(0,V.gn)([(0,b.yF)()],l.prototype,"allowHalf",void 0),l})(),xp=(()=>{class l{get nzValue(){return this._value}set nzValue(s){this._value!==s&&(this._value=s,this.hasHalf=!Number.isInteger(s),this.hoverValue=Math.ceil(s))}constructor(s,p,O,Ce,ft,vn){this.nzConfigService=s,this.ngZone=p,this.renderer=O,this.cdr=Ce,this.directionality=ft,this.destroy$=vn,this._nzModuleName="rate",this.nzAllowClear=!0,this.nzAllowHalf=!1,this.nzDisabled=!1,this.nzAutoFocus=!1,this.nzCount=5,this.nzTooltips=[],this.nzOnBlur=new e.vpe,this.nzOnFocus=new e.vpe,this.nzOnHoverChange=new e.vpe,this.nzOnKeyDown=new e.vpe,this.classMap={},this.starArray=[],this.starStyleArray=[],this.dir="ltr",this.hasHalf=!1,this.hoverValue=0,this.isFocused=!1,this._value=0,this.isNzDisableFirstChange=!0,this.onChange=()=>null,this.onTouched=()=>null}ngOnChanges(s){const{nzAutoFocus:p,nzCount:O,nzValue:Ce}=s;if(p&&!p.isFirstChange()){const ft=this.ulElement.nativeElement;this.nzAutoFocus&&!this.nzDisabled?this.renderer.setAttribute(ft,"autofocus","autofocus"):this.renderer.removeAttribute(ft,"autofocus")}O&&this.updateStarArray(),Ce&&this.updateStarStyle()}ngOnInit(){this.nzConfigService.getConfigChangeEventForComponent("rate").pipe((0,me.R)(this.destroy$)).subscribe(()=>this.cdr.markForCheck()),this.directionality.change.pipe((0,me.R)(this.destroy$)).subscribe(s=>{this.dir=s,this.cdr.detectChanges()}),this.dir=this.directionality.value,this.ngZone.runOutsideAngular(()=>{(0,U.R)(this.ulElement.nativeElement,"focus").pipe((0,me.R)(this.destroy$)).subscribe(s=>{this.isFocused=!0,this.nzOnFocus.observers.length&&this.ngZone.run(()=>this.nzOnFocus.emit(s))}),(0,U.R)(this.ulElement.nativeElement,"blur").pipe((0,me.R)(this.destroy$)).subscribe(s=>{this.isFocused=!1,this.nzOnBlur.observers.length&&this.ngZone.run(()=>this.nzOnBlur.emit(s))})})}onItemClick(s,p){if(this.nzDisabled)return;this.hoverValue=s+1;const O=p?s+.5:s+1;this.nzValue===O?this.nzAllowClear&&(this.nzValue=0,this.onChange(this.nzValue)):(this.nzValue=O,this.onChange(this.nzValue)),this.updateStarStyle()}onItemHover(s,p){this.nzDisabled||this.hoverValue===s+1&&p===this.hasHalf||(this.hoverValue=s+1,this.hasHalf=p,this.nzOnHoverChange.emit(this.hoverValue),this.updateStarStyle())}onRateLeave(){this.hasHalf=!Number.isInteger(this.nzValue),this.hoverValue=Math.ceil(this.nzValue),this.updateStarStyle()}focus(){this.ulElement.nativeElement.focus()}blur(){this.ulElement.nativeElement.blur()}onKeyDown(s){const p=this.nzValue;s.keyCode===A.SV&&this.nzValue<this.nzCount?this.nzValue+=this.nzAllowHalf?.5:1:s.keyCode===A.oh&&this.nzValue>0&&(this.nzValue-=this.nzAllowHalf?.5:1),p!==this.nzValue&&(this.onChange(this.nzValue),this.nzOnKeyDown.emit(s),this.updateStarStyle(),this.cdr.markForCheck())}updateStarArray(){this.starArray=Array(this.nzCount).fill(0).map((s,p)=>p),this.updateStarStyle()}updateStarStyle(){this.starStyleArray=this.starArray.map(s=>{const p="ant-rate-star",O=s+1;return{[`${p}-full`]:O<this.hoverValue||!this.hasHalf&&O===this.hoverValue,[`${p}-half`]:this.hasHalf&&O===this.hoverValue,[`${p}-active`]:this.hasHalf&&O===this.hoverValue,[`${p}-zero`]:O>this.hoverValue,[`${p}-focused`]:this.hasHalf&&O===this.hoverValue&&this.isFocused}})}writeValue(s){this.nzValue=s||0,this.updateStarArray(),this.cdr.markForCheck()}setDisabledState(s){this.nzDisabled=this.isNzDisableFirstChange&&this.nzDisabled||s,this.isNzDisableFirstChange=!1,this.cdr.markForCheck()}registerOnChange(s){this.onChange=s}registerOnTouched(s){this.onTouched=s}}return l.\u0275fac=function(s){return new(s||l)(e.Y36(nd.jY),e.Y36(e.R0b),e.Y36(e.Qsj),e.Y36(e.sBO),e.Y36(le.Is,8),e.Y36(P.kn))},l.\u0275cmp=e.Xpm({type:l,selectors:[["nz-rate"]],viewQuery:function(s,p){if(1&s&&e.Gf(Bl,7),2&s){let O;e.iGM(O=e.CRH())&&(p.ulElement=O.first)}},inputs:{nzAllowClear:"nzAllowClear",nzAllowHalf:"nzAllowHalf",nzDisabled:"nzDisabled",nzAutoFocus:"nzAutoFocus",nzCharacter:"nzCharacter",nzCount:"nzCount",nzTooltips:"nzTooltips"},outputs:{nzOnBlur:"nzOnBlur",nzOnFocus:"nzOnFocus",nzOnHoverChange:"nzOnHoverChange",nzOnKeyDown:"nzOnKeyDown"},exportAs:["nzRate"],features:[e._Bn([P.kn,{provide:t.JU,useExisting:(0,e.Gpc)(()=>l),multi:!0}]),e.TTD],decls:3,vars:7,consts:[[1,"ant-rate",3,"ngClass","tabindex","keydown","mouseleave"],["ulElement",""],["class","ant-rate-star","nz-tooltip","",3,"ngClass","nzTooltipTitle",4,"ngFor","ngForOf"],["nz-tooltip","",1,"ant-rate-star",3,"ngClass","nzTooltipTitle"],["nz-rate-item","",3,"allowHalf","character","index","itemHover","itemClick"]],template:function(s,p){1&s&&(e.TgZ(0,"ul",0,1),e.NdJ("keydown",function(Ce){return p.onKeyDown(Ce),Ce.preventDefault()})("mouseleave",function(Ce){return p.onRateLeave(),Ce.stopPropagation()}),e.YNc(2,Hl,2,5,"li",2),e.qZA()),2&s&&(e.ekj("ant-rate-disabled",p.nzDisabled)("ant-rate-rtl","rtl"===p.dir),e.Q6J("ngClass",p.classMap)("tabindex",p.nzDisabled?-1:1),e.xp6(2),e.Q6J("ngForOf",p.starArray))},dependencies:[a.mk,a.sg,eo.SY,od],encapsulation:2,changeDetection:0}),(0,V.gn)([(0,nd.oS)(),(0,b.yF)()],l.prototype,"nzAllowClear",void 0),(0,V.gn)([(0,nd.oS)(),(0,b.yF)()],l.prototype,"nzAllowHalf",void 0),(0,V.gn)([(0,b.yF)()],l.prototype,"nzDisabled",void 0),(0,V.gn)([(0,b.yF)()],l.prototype,"nzAutoFocus",void 0),(0,V.gn)([(0,b.Rn)()],l.prototype,"nzCount",void 0),l})(),tr=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[le.vT,a.ez,ue.PV,eo.cg]}),l})();const id={1:"Poor - Claim is not supported well by experimental evidence. Results are not reproducible, or have very small sample size. No follow-up is done to validate novel claims.",2:"Adequate - Evidence is not well supported by experimental data, and little follow-up data is available. Experiments may lack proper controls, have small sample size, or are not statistically convincing.",3:"Average - Evidence is convincing, but not supported by a breadth of experiments. May be smaller scale projects, or novel results without many follow-up experiments. Discrepancies from expected results are explained and not concerning.",4:"Strong - Well supported evidence. Experiments are well controlled, and results are convincing. Any discrepancies from expected results are well-explained and not concerning.",5:"Excellent - Solid, well supported evidence from a lab or journal with respected academic standing. Experiments are well controlled, and results are clean and reproducible across multiple replicates. Evidence confirmed using separate methods."},Ku=bo(ko(),fo()),rd={types:[{name:"rating",wrappers:["form-field"],component:(()=>{class l extends Ku{constructor(){super(),this.defaultOptions={props:{label:"Evidence Rating",count:5,tooltip:"A representation of the curator's confidence in the quality of the summarized evidence",hoverText:[]}},this.rating$=new Be.X(void 0)}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.formControl.value&&this.rating$.next(this.formControl.value),Object.entries(id).map(([s,p])=>{this.props.hoverText.push(p)}),this.rating$.pipe((0,zn.t)(this)).subscribe(s=>{this.formControl.setValue(s)}),this.onValueChange$.pipe((0,zn.t)(this)).subscribe(s=>{s&&0!==s?(this.props.description=id[s],this.props.extraType="description"):(this.formControl.setValue(void 0),this.props.description=void 0,this.props.extraType="prompt")})}configureStateConnections(){}}return l.\u0275fac=function(s){return new(s||l)},l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-rating"]],features:[e.qOj],decls:3,vars:5,consts:[["type","hidden",3,"formControl","formlyAttributes"],[1,"rate-block"],[3,"ngModel","nzCount","nzTooltips","ngModelChange"]],template:function(s,p){1&s&&(e._UZ(0,"input",0),e.TgZ(1,"div",1)(2,"nz-rate",2),e.NdJ("ngModelChange",function(Ce){return p.rating$.next(Ce)}),e.qZA()()),2&s&&(e.Q6J("formControl",p.formControl)("formlyAttributes",p.field),e.xp6(2),e.Q6J("ngModel",p.formControl.value)("nzCount",p.props.count)("nzTooltips",p.props.hoverText))},dependencies:[t.Fj,t.JJ,t.oH,t.On,_.JD,xp],styles:["[_nghost-%COMP%]   .rate-block[_ngcontent-%COMP%]{display:inline-block;background-color:#fff;border-radius:2px;padding:2px 4px;margin-top:-4px}[_nghost-%COMP%]     nz-rate .anticon{font-size:160%}"],changeDetection:0}),l})()}]};let Dp=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[a.ez,t.UX,t.u5,_.X0.forChild(rd),tr,tt.s,Lo,Kn]}),l})();const Yd=["optionTemplates"];function $d(l,g){if(1&l&&(e.TgZ(0,"nz-tag")(1,"strong"),e._uU(2),e.qZA()()),2&l){const s=e.oxw().$implicit;e.xp6(2),e.Oqu(s)}}function Ta(l,g){1&l&&(e.ynx(0),e.YNc(1,$d,3,1,"ng-template",null,3,e.W1O),e.BQk())}function sd(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"nz-tag",7),e.NdJ("nzOnClose",function(O){e.CHM(s);const Ce=e.oxw(2);return e.KtG(Ce.onTagClose$.next(O))}),e.TgZ(1,"strong"),e._uU(2),e.qZA()()}if(2&l){const s=e.oxw().$implicit;e.xp6(2),e.Oqu(s.nzValue)}}function eh(l,g){if(1&l&&(e.ynx(0),e._uU(1),e.BQk()),2&l){const s=e.oxw().$implicit;e.xp6(1),e.hij(" ",s.nzValue," ")}}function th(l,g){if(1&l&&(e.TgZ(0,"div",4),e.YNc(1,sd,3,1,"nz-tag",5),e.YNc(2,eh,2,1,"ng-container",6),e.qZA()),2&l){const s=e.oxw();e.xp6(1),e.Q6J("ngIf",!s.props.isMultiSelect),e.xp6(1),e.Q6J("ngIf",s.props.isMultiSelect)}}const Ma=bo(ko(),fo());let hi=(()=>{class l extends Ma{constructor(s){super(),this.cdr=s,this.defaultOptions={props:{label:"Reference Build",required:!1,isMultiSelect:!1,description:"Select the human genome reference sequence from which these coordinates are obtained",placeholder:"Select Reference Build"}},this.buildEnum$=new Be.X([])}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEnumSelectField({optionEnum$:this.buildEnum$,optionTemplate$:this.optionTemplate$,changeDetectorRef:this.cdr})}configureStateConnections(){this.placeholder$=new Be.X(this.props.placeholder),this.buildEnum$.next((0,So.o6)(Fn.JDX).map(s=>s)),this.optionTemplates||console.error(`${this.field.id} could not find its optionTemplates QueryList to populate its select options, so simple text labels will be displayed.`),this.optionTemplate$=this.optionTemplates?.changes.pipe((0,S.U)(s=>s.map(p=>p)))}}return l.\u0275fac=function(s){return new(s||l)(e.Y36(e.sBO))},l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-reference-build-select"]],viewQuery:function(s,p){if(1&s&&e.Gf(Yd,5,e.Rgc),2&s){let O;e.iGM(O=e.CRH())&&(p.optionTemplates=O)}},features:[e.qOj],decls:7,vars:15,consts:[[3,"cvcFormControl","cvcFormlyAttributes","cvcSelectMode","cvcPlaceholder","cvcCustomTemplate","cvcOptions","cvcShowError","cvcDisabled"],[4,"ngFor","ngForOf"],["selectedTemplate",""],["optionTemplates",""],[1,"ant-select-selection-item-content"],["nzMode","closeable",3,"nzOnClose",4,"ngIf"],[4,"ngIf"],["nzMode","closeable",3,"nzOnClose"]],template:function(s,p){if(1&s&&(e._UZ(0,"cvc-enum-select",0),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.YNc(3,Ta,3,0,"ng-container",1),e.ALo(4,"ngrxPush"),e.YNc(5,th,3,2,"ng-template",null,2,e.W1O)),2&s){const O=e.MAs(6);e.Q6J("cvcFormControl",p.formControl)("cvcFormlyAttributes",p.field)("cvcSelectMode",p.props.isMultiSelect?"multiple":"default")("cvcPlaceholder",e.lcZ(1,9,p.placeholder$))("cvcCustomTemplate",O)("cvcOptions",e.lcZ(2,11,p.selectOption$))("cvcShowError",p.showError)("cvcDisabled",p.props.disabled),e.xp6(3),e.Q6J("ngForOf",e.lcZ(4,13,p.buildEnum$))}},dependencies:[a.sg,a.O5,An.j,wo,lo.fM]}),l})();const Ju={types:[{name:"reference-build-select",wrappers:["form-field"],component:hi},{name:"reference-build-multi-select",wrappers:["form-field"],component:hi,defaultOptions:{props:{label:"Levels",isMultiSelect:!0}}}]};let Op=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[a.ez,t.UX,_.X0.forChild(Ju),An.X,tt.s,Lo,Kn]}),l})();const wp=["optionTemplates"];function Di(l,g){if(1&l&&e._UZ(0,"cvc-attribute-tag",4),2&l){const s=e.oxw().$implicit;e.Q6J("cvcAttrValue",s)}}function Yl(l,g){1&l&&(e.ynx(0),e.YNc(1,Di,1,1,"ng-template",null,3,e.W1O),e.BQk())}function Pp(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"div",5)(1,"cvc-attribute-tag",6),e.NdJ("cvcOnClose",function(O){e.CHM(s);const Ce=e.oxw();return e.KtG(Ce.onTagClose$.next(O))}),e.qZA()()}if(2&l){const s=g.$implicit,p=e.oxw();e.xp6(1),e.Q6J("cvcAttrValue",s.nzValue)("cvcContext",p.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",p.props.isMultiSelect?"default":"closeable")}}const Ud={Evidence:{PREDICTIVE:{SENSITIVITYRESPONSE:"Associated with a clinical or preclinical response to treatment",RESISTANCE:"Associated with clinical or preclinical resistance to treatment",ADVERSE_RESPONSE:"Associated with an adverse response to drug treatment",REDUCED_SENSITIVITY:"Response to treatment is lower than seen in other treatment contexts",NA:"Clinical Significance is not applicable."},DIAGNOSTIC:{POSITIVE:"Associated with diagnosis of disease or subtype",NEGATIVE:"Associated with lack of disease or subtype"},PROGNOSTIC:{BETTER_OUTCOME:"Demonstrates better than expected clinical outcome",POOR_OUTCOME:"Demonstrates worse than expected clinical outcome",NA:"Clinical Significance is not applicable."},PREDISPOSING:{PREDISPOSITION:"Germline variant has predisposing potential for cancer, and may meet select ACMG/AMP criteria supporting pathogenic or benign classification.",PROTECTIVENESS:"Germline variant has properties that protect individuals from acquiring cancer."},FUNCTIONAL:{GAIN_OF_FUNCTION:"Sequence variant confers an increase in normal gene function",LOSS_OF_FUNCTION:"Sequence variant confers a diminished or abolished function",UNALTERED_FUNCTION:"Gene product of sequence variant is unchanged",NEOMORPHIC:"Sequence variant creates a novel function",DOMINANT_NEGATIVE:"Sequence variant abrogates function of wildtype allele gene product",UNKNOWN:"Sequence variant that cannot be precisely defined by the other listed categories"},ONCOGENIC:{ONCOGENICITY:"Somatic variant has oncogenic potential for driving cancer, and may meet select ClinGen/CGC/VICC criteria supporting pathogenic or benign classification.",PROTECTIVENESS:"Somatic variant has a protective role against cancer."}},Assertion:{PREDICTIVE:{SENSITIVITYRESPONSE:"Associated with a clinical or preclinical response to treatment",RESISTANCE:"Associated with clinical or preclinical resistance to treatment",ADVERSE_RESPONSE:"Associated with an adverse response to drug treatment",REDUCED_SENSITIVITY:"Response to treatment is lower than seen in other treatment contexts",NA:"Clinical Significance is not applicable."},DIAGNOSTIC:{POSITIVE:"Associated with diagnosis of disease or subtype",NEGATIVE:"Associated with lack of disease or subtype"},PROGNOSTIC:{BETTER_OUTCOME:"Demonstrates better than expected clinical outcome",POOR_OUTCOME:"Demonstrates worse than expected clinical outcome",NA:"Clinical Significance is not applicable."},PREDISPOSING:{PATHOGENIC:"Very strong evidence the variant is pathogenic",LIKELY_PATHOGENIC:"Strong evidence (>90% certainty) the variant is pathogenic.",BENIGN:"Very strong evidence the variant is benign",LIKELY_BENIGN:"Not expected to have a major effect on disease",UNCERTAIN_SIGNIFICANCE:"Does not meet the ACMG/AMP criteria for pathogenic/benign, or the evidence is conflicting"},ONCOGENIC:{ONCOGENIC:"Very strong evidence the variant is oncogenic.",LIKELY_ONCOGENIC:"Strong evidence the variant is oncogenic.",BENIGN:"Very strong evidence the variant does not have oncogenic properties.",LIKELY_BENIGN:"Strong evidence the variant does not have oncogenic properties.",UNCERTAIN_SIGNIFICANCE:"Does not meet guideline criteria for oncogenic/benign, or the evidence is conflicting."}}},jd=bo(ko(),fo()),nh={types:[{name:"significance-select",wrappers:["form-field"],component:(()=>{class l extends jd{constructor(s){super(),this.cdr=s,this.defaultOptions={props:{label:"Significance",required:!0,isMultiSelect:!1,placeholder:"Select Significance",placeholderFn:p=>`Select ${p?p+" ":""} Significance`,requireTypePromptFn:p=>`Select ${p} Type to select its Significance`,tooltip:"Clinical impact of the variant",formMode:"add"}},this.significanceEnum$=new Be.X([])}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEnumSelectField({optionEnum$:this.significanceEnum$,optionTemplate$:this.optionTemplate$,changeDetectorRef:this.cdr})}configureStateConnections(){if(!this.state)return console.error(`${this.field.id} requires a form state to populate its options, none was found.`),void(this.placeholder$=new Be.X("ERROR: Form state not found"));if(this.placeholder$=new Be.X(this.props.placeholderFn(this.state.entityName)),!this.state.enums.significance$)return void console.error(`${this.field.id} could not find form state's enums.significance$ to populate select.`);this.state.enums.significance$.pipe((0,zn.t)(this)).subscribe(p=>{this.significanceEnum$.next(p)}),this.optionTemplates||console.warn(`${this.field.id} could not find its optionTemplates QueryList to populate its select options, so simple text labels will be displayed.`),this.optionTemplate$=this.optionTemplates?.changes.pipe((0,S.U)(p=>p.map(O=>O)));const s=`${this.state.entityName.toLowerCase()}Type$`;this.state.fields[s]?(this.onTypeSelect$=this.state.fields[s],this.onTypeSelect$.pipe((0,Ei.T)("add"===this.props.formMode?0:1),(0,zn.t)(this)).subscribe(p=>{p?(this.props.disabled=!1,this.props.description=void 0,this.props.extraType=void 0,this.placeholder$.next(this.props.placeholderFn(this.state.entityName))):(this.props.disabled=!0,this.props.description=this.props.requireTypePromptFn(this.state.entityName),this.props.extraType="prompt"),this.formControl.value&&this.formControl.setValue(void 0)}),this.onValueChange$.pipe((0,ni.M)(this.onTypeSelect$),(0,zn.t)(this)).subscribe(([p,O])=>{!O||!p||!this.state||(this.props.description=void 0,this.props.extraType="description",this.props.description=Ud[this.state.entityName][O][p],this.field.formControl.markAsTouched())})):console.error(`${this.field.id} could not find form state's ${s} to populate Significance options.`)}}return l.\u0275fac=function(s){return new(s||l)(e.Y36(e.sBO))},l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-significance-select"]],viewQuery:function(s,p){if(1&s&&e.Gf(wp,5,e.Rgc),2&s){let O;e.iGM(O=e.CRH())&&(p.optionTemplates=O)}},features:[e.qOj],decls:7,vars:15,consts:[[3,"cvcFormControl","cvcFormlyAttributes","cvcSelectMode","cvcPlaceholder","cvcCustomTemplate","cvcOptions","cvcShowError","cvcDisabled"],[4,"ngFor","ngForOf"],["selectedTemplate",""],["optionTemplates",""],[3,"cvcAttrValue"],[1,"ant-select-selection-item-content"],[3,"cvcAttrValue","cvcContext","cvcMode","cvcOnClose"]],template:function(s,p){if(1&s&&(e._UZ(0,"cvc-enum-select",0),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.YNc(3,Yl,3,0,"ng-container",1),e.ALo(4,"ngrxPush"),e.YNc(5,Pp,2,3,"ng-template",null,2,e.W1O)),2&s){const O=e.MAs(6);e.Q6J("cvcFormControl",p.formControl)("cvcFormlyAttributes",p.field)("cvcSelectMode",p.props.isMultiSelect?"multiple":"default")("cvcPlaceholder",e.lcZ(1,9,p.placeholder$))("cvcCustomTemplate",O)("cvcOptions",e.lcZ(2,11,p.selectOption$))("cvcShowError",p.showError)("cvcDisabled",p.props.disabled),e.xp6(3),e.Q6J("ngForOf",e.lcZ(4,13,p.significanceEnum$))}},dependencies:[a.sg,wo,Ie,lo.fM]}),l})()}]};let ad=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[a.ez,t.UX,_.X0.forChild(nh),Lo,Kn,xr]}),l})();var ba,$l=c(2666);function Gd(l,g){1&l&&e._UZ(0,"span",9),2&l&&e.Q6J("nzType","loading")}function Wd(l,g){if(1&l&&(e.ynx(0),e.YNc(1,Gd,1,1,"span",8),e._uU(2,"\xa0 "),e.TgZ(3,"span"),e._uU(4),e.qZA(),e.BQk()),2&l){const s=g.ngrxLet;e.xp6(1),e.Q6J("ngIf",s.showSpinner),e.xp6(3),e.Oqu(s.message)}}function Za(l,g){if(1&l&&e._uU(0),2&l){const s=e.oxw();e.Oqu(s.successMessage)}}function Ip(l,g){1&l&&(e.TgZ(0,"button",10),e._uU(1," Add Source "),e.qZA()),2&l&&e.Q6J("disabled",null===g.ngrxLet.citation)}const cd=function(){return[0,0]};let Rc=((ba=class{constructor(g,s,p,O,Ce){this.checkCitation=g,this.addRemoteCitation=s,this.errors=p,this.apollo=O,this.cdr=Ce,this.cvcOnCreate=new e.vpe,this.messageOptions={empty:(ft,vn)=>`No ${vn} Source with a citation ID of "${ft}"`,searchCitation:(ft,vn)=>`Searching ${vn} for a citation ID of "${ft}"`,foundCitation:(ft,vn,Sn)=>`Found ${vn} citation "${Sn}" with ID ${ft}`,noCitation:(ft,vn)=>`No ${vn} Source with a citation ID of "${ft}" was found`},this.form=new t.nJ({}),this.model={citationId:"",sourceType:Fn.yic.Pubmed},this.formLayout="horizontal",this.options={formState:{formLayout:this.formLayout}},this.onSubmit$=new E.x,this.citationId$=new Be.X(""),this.sourceType$=new Be.X(Fn.yic.Pubmed),this.addSourceStubMutator=new oi.U(this.errors),this.fields=[{key:"citationId",props:{hidden:!0}},{key:"sourceType",props:{hidden:!0}}],this.onSubmit$.pipe((0,zn.t)(this)).subscribe(ft=>{console.log("disease-quick-add form model submitted.",ft),this.submitSourceStub()})}ngOnInit(){void 0!==this.model.citationId&&void 0!==this.model.sourceType?(this.queryRef=this.checkCitation.watch({citationId:this.model.citationId,sourceType:this.model.sourceType}),this.checkResult$=this.queryRef.valueChanges.pipe((0,S.U)(g=>({loading:g.loading,citation:g.data?g.data.remoteCitation:null,model:this.model})),(0,St.b)(g=>{this.citationString=g.citation?g.citation:void 0})),this.citationId$.pipe((0,zn.t)(this)).subscribe(g=>{this.model.sourceType&&this.queryRef.refetch({citationId:g,sourceType:this.model.sourceType})}),this.formMessageDisplay$=this.checkResult$.pipe((0,S.U)(g=>{const s=g.loading,p=g.citation,O=g.model;return s?{message:this.messageOptions.searchCitation(O.citationId,O.sourceType),showSpinner:!0}:s||null===p?s||null!==p?{message:"UNHANDLED MESSAGE STATE",showSpinner:!1}:{message:this.messageOptions.noCitation(O.citationId,O.sourceType),showSpinner:!1}:{message:this.messageOptions.foundCitation(O.citationId,(0,$l.c)(O.sourceType),p),showSpinner:!1}}),(0,K.O)({message:this.messageOptions.searchCitation(this.model.citationId,this.model.sourceType),showSpinner:!0}))):console.error("source-quick-add provided invalid initial model")}submitSourceStub(){void 0!==this.model.citationId&&void 0!==this.model.sourceType&&(this.mutationState=this.addSourceStubMutator.mutate(this.addRemoteCitation,{input:{citationId:this.model.citationId,sourceType:this.model.sourceType}},{},g=>{if(console.log("source-quick-add submit data callback",g),g.addRemoteCitation){this.successMessage=`New Source "${this.citationString}" added.`;const s=g.addRemoteCitation.newSource,p=(0,$l.c)(this.model.sourceType),O=this.citationString?this.citationString:"NO CITATION",Ce={query:Pr.Ps`
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
              `,data:{source:{__typename:"Source",id:s.id,name:`${p}: ${O}`,link:`sources/${s.id}`,citation:O,citationId:this.model.citationId,sourceType:this.model.sourceType}},variables:{id:s.id}};this.apollo.client.cache.writeQuery(Ce)||console.error("source-quick-add.form Source writeQuery failed.",Ce),setTimeout(()=>{const vn={id:`Source:${s.id}`,fragment:Pr.Ps`
                  fragment LinkableSource on Source {
                    id
                    name
                    link
                  }
                `},Sn=this.apollo.client.cache.readFragment(vn);null!==Sn&&this.cvcOnCreate.next(Sn.id)},1e3)}}))}ngOnChanges(g){if(g.cvcSourceType){const s=g.cvcSourceType.currentValue;this.sourceType$.next(s),this.model={...this.model,sourceType:s}}if(g.cvcCitationId){const s=g.cvcCitationId.currentValue;this.citationId$.next(s),this.model={...this.model,citationId:s}}}}).\u0275fac=function(g){return new(g||ba)(e.Y36(Fn.qgP),e.Y36(Fn.LHC),e.Y36(jo.Y),e.Y36(Pr._M),e.Y36(e.sBO))},ba.\u0275cmp=e.Xpm({type:ba,selectors:[["cvc-source-quick-add"]],inputs:{cvcSourceType:"cvcSourceType",cvcCitationId:"cvcCitationId"},outputs:{cvcOnCreate:"cvcOnCreate"},features:[e.TTD],decls:10,vars:11,consts:[[4,"ngrxLet"],["entityType","Source",3,"mutationState","successMessage"],["success",""],["nz-form","","nzLayout","horizontal",3,"formGroup","ngSubmit"],[3,"nzGutter"],["nzSpan","24"],[3,"form","fields","model","options","modelChange"],["nz-button","","nzType","primary","nzBlock","",3,"disabled",4,"ngrxLet"],["nz-icon","",3,"nzType",4,"ngIf"],["nz-icon","",3,"nzType"],["nz-button","","nzType","primary","nzBlock","",3,"disabled"]],template:function(g,s){if(1&g&&(e.YNc(0,Wd,5,2,"ng-container",0),e.TgZ(1,"cvc-form-submission-status-display",1),e.YNc(2,Za,1,1,"ng-template",null,2,e.W1O),e.TgZ(4,"form",3),e.NdJ("ngSubmit",function(){return s.onSubmit$.next(s.model)}),e.TgZ(5,"nz-row",4)(6,"nz-col",5)(7,"formly-form",6),e.NdJ("modelChange",function(O){return s.model=O}),e.qZA()(),e.TgZ(8,"nz-col",5),e.YNc(9,Ip,2,1,"button",7),e.qZA()()()()),2&g){const p=e.MAs(3);e.Q6J("ngrxLet",s.formMessageDisplay$),e.xp6(1),e.Q6J("mutationState",s.mutationState)("successMessage",p),e.xp6(3),e.Q6J("formGroup",s.form),e.xp6(1),e.Q6J("nzGutter",e.DdM(10,cd)),e.xp6(2),e.Q6J("form",s.form)("fields",s.fields)("model",s.model)("options",s.options),e.xp6(2),e.Q6J("ngrxLet",s.checkResult$)}},dependencies:[a.O5,t._Y,t.JL,t.sg,lo.eJ,_.T7,To.ix,de.w,et.dQ,ue.Ls,R.t3,R.SK,N.Lr,zi.F],changeDetection:0}),ba);Rc=(0,V.gn)([(0,zn.c)()],Rc);const z=["optionTemplates"];function d(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"nz-col",9)(1,"nz-select",10),e.NdJ("ngModelChange",function(O){e.CHM(s);const Ce=e.oxw();return e.KtG(Ce.sourceType$.next(O))}),e.ALo(2,"ngrxPush"),e._UZ(3,"nz-option",11)(4,"nz-option",12)(5,"nz-option",13),e.qZA()()}if(2&l){const s=e.oxw();e.xp6(1),e.Q6J("nzOptionHeightPx",28)("ngModel",e.lcZ(2,2,s.sourceType$))}}function h(l,g){1&l&&(e.TgZ(0,"div"),e._uU(1,"PMID:"),e.qZA())}function m(l,g){1&l&&(e.TgZ(0,"div"),e._uU(1,"ID:"),e.qZA())}function C(l,g){1&l&&(e.TgZ(0,"div"),e._uU(1,"doi.org/"),e.qZA())}function x(l,g){if(1&l&&(e.TgZ(0,"nz-col",14),e.ynx(1,15),e.ALo(2,"ngrxPush"),e.YNc(3,h,2,0,"div",16),e.YNc(4,m,2,0,"div",16),e.YNc(5,C,2,0,"div",16),e.BQk(),e.qZA()),2&l){const s=e.oxw();e.xp6(1),e.Q6J("ngSwitch",e.lcZ(2,4,s.sourceType$)),e.xp6(2),e.Q6J("ngSwitchCase","PUBMED"),e.xp6(1),e.Q6J("ngSwitchCase","ASCO"),e.xp6(1),e.Q6J("ngSwitchCase","ASH")}}function q(l,g){if(1&l&&(e._UZ(0,"cvc-entity-tag",19),e.TgZ(1,"span",20),e._uU(2," ID: "),e._UZ(3,"span",21),e.ALo(4,"highlightTypeahead"),e.qZA()),2&l){const s=e.oxw().$implicit,p=e.oxw().ngrxLet;e.Q6J("cvcDisableLink",!0)("cvcCacheId",s.__typename+":"+s.id)("cvcEmphasize",p),e.xp6(3),e.Q6J("innerHtml",e.xi3(4,4,s.citationId.toString(),p),e.oJD)}}function ge(l,g){1&l&&(e.ynx(0),e.YNc(1,q,5,7,"ng-template",null,18,e.W1O),e.BQk())}function xe(l,g){if(1&l&&(e.ynx(0),e.YNc(1,ge,3,0,"ng-container",17),e.ALo(2,"ngrxPush"),e.BQk()),2&l){const s=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,s.result$))}}function We(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"div",22)(1,"cvc-entity-tag",23),e.NdJ("cvcOnClose",function(){const Ce=e.CHM(s).$implicit,ft=e.oxw();return e.KtG(ft.onTagClose$.next(Ce.nzValue))}),e.qZA()()}if(2&l){const s=g.$implicit,p=e.oxw();e.xp6(1),e.Q6J("cvcCacheId","Source:"+s.nzValue)("cvcContext",p.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",p.props.isMultiSelect?"default":"closeable")}}function dt(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"cvc-source-quick-add",24),e.NdJ("cvcOnCreate",function(O){e.CHM(s);const Ce=e.oxw();return e.KtG(Ce.onPopulate$.next(O))}),e.qZA()}if(2&l){const s=g.model;e.Q6J("cvcCitationId",s.citationId)("cvcSourceType",s.sourceType)}}function bt(l,g){1&l&&(e.TgZ(0,"button",25),e._uU(1,"Add a New Source"),e.qZA())}const Lt=function(){return[6,6]},Gt=bo(ko(),Oo());let Yt=(()=>{class l extends Gt{constructor(s,p,O){super(),this.taq=s,this.tq=p,this.changeDetectorRef=O,this.onModel$=new ot.y,this.defaultSourceType=Fn.yic.Pubmed,this.defaultOptions={props:{entityName:{singular:"Source",plural:"Sources"},isMultiSelect:!1,minSearchStrLength:2,tooltip:"PubMed, ASCO, or ASH Abstract Source(s) that support items, statements or descriptions.",placeholders:{default:"Search PubMed, ASCO, and ASH Sources",contextualFn:Ce=>`Search ${Ce} Sources`},description:"Select Source type, then enter its ID to search Sources"}},this.sourceType$=new Be.X(this.defaultSourceType),this.sourceTypeName$=new Be.X((0,$l.c)(this.defaultSourceType)),this.placeholder$=new Be.X(this.defaultOptions.props.placeholders.contextualFn((0,$l.c)(this.defaultSourceType))),this.showTypeSelect$=new ot.y}ngAfterViewInit(){this.configureBaseField(),this.configureEntitySelectField({typeaheadQuery:this.taq,typeaheadParam$:this.sourceType$,typeaheadParamName$:this.sourceTypeName$||void 0,tagQuery:this.tq,getTypeaheadVarsFn:this.getTypeaheadVarsFn,getTypeaheadResultsFn:this.getTypeaheadResultsFn,getTagQueryVarsFn:this.getTagQueryVarsFn,getTagQueryResultsFn:this.getTagQueryResultsFn,getSelectedItemOptionFn:this.getSelectedItemOptionFn,getSelectOptionsFn:this.getSelectOptionsFn,changeDetectorRef:this.changeDetectorRef,selectOpen$:this.selectOpen$,selectComponent:this.selectComponent,minSearchStrLength:this.field.props.minSearchStrLength}),this.initialDescription=this.props.description,this.showTypeSelect$=this.onValueChange$.pipe((0,S.U)(s=>!!(!s||s&&Array.isArray(s)))),this.sourceType$.pipe((0,zn.t)(this)).subscribe(s=>{const p=(0,$l.c)(s);this.sourceTypeName$.next(p),this.placeholder$.next(this.props.placeholders.contextualFn(p))}),this.onModel$=(0,Do.a)([this.sourceType$,this.onSearch$]).pipe((0,S.U)(([s,p])=>({citationId:p,sourceType:s}))),this.onValueChange$.pipe((0,zn.t)(this)).subscribe(s=>{this.props.description=s?void 0:this.initialDescription})}getTypeaheadVarsFn(s,p=Fn.yic.Pubmed){return{partialCitationId:s,sourceType:p}}getTypeaheadResultsFn(s){return s.data.sourceTypeahead}getTagQueryVarsFn(s){return{id:s}}getTagQueryResultsFn(s){return s.data.source}getSelectedItemOptionFn(s){return{value:s.id,label:s.name}}getSelectOptionsFn(s,p){return s.map((O,Ce)=>({label:p.get(Ce)||O.name,value:O.id}))}}return l.\u0275fac=function(s){return new(s||l)(e.Y36(Fn.aC3),e.Y36(Fn.BYO),e.Y36(e.sBO))},l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-source-select"]],viewQuery:function(s,p){if(1&s&&e.Gf(z,5,e.Rgc),2&s){let O;e.iGM(O=e.CRH())&&(p.optionTemplates=O)}},features:[e.qOj],decls:21,vars:39,consts:[[1,"select-layout",3,"nzGutter"],["nzFlex","80px",4,"ngIf"],["nzFlex","60px","class","prefix",4,"ngIf"],["nzFlex","auto"],[3,"cvcMinSearchStrLength","cvcSelectMode","cvcCustomTemplate","cvcFormControl","cvcFormlyAttributes","cvcEntityName","cvcPlaceholder","cvcResults","cvcOptions","cvcParamName","cvcShowError","cvcDisabled","cvcLoading","cvcAddEntity","cvcAddEntityModel","cvcSelectOpen","cvcOnSearch","cvcOnModelChange"],[4,"ngrxLet"],["selectedTemplate",""],["addSource",""],["addSourceBtn",""],["nzFlex","80px"],["nzSize","default","nzBlock","",3,"nzOptionHeightPx","ngModel","ngModelChange"],["nzValue","PUBMED","nzLabel","PubMed"],["nzValue","ASCO","nzLabel","ASCO"],["nzValue","ASH","nzLabel","ASH"],["nzFlex","60px",1,"prefix"],[3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngFor","ngForOf"],["optionTemplates",""],[3,"cvcDisableLink","cvcCacheId","cvcEmphasize"],["nz-typography","","nzType","secondary"],["nz-typography","","nzType","secondary",3,"innerHtml"],[1,"ant-select-selection-item-content"],[3,"cvcCacheId","cvcContext","cvcMode","cvcOnClose"],[3,"cvcCitationId","cvcSourceType","cvcOnCreate"],["type","button"]],template:function(s,p){if(1&s&&(e.TgZ(0,"nz-row",0),e.YNc(1,d,6,4,"nz-col",1),e.ALo(2,"ngrxPush"),e.YNc(3,x,6,6,"nz-col",2),e.ALo(4,"ngrxPush"),e.TgZ(5,"nz-col",3)(6,"cvc-entity-select",4),e.NdJ("cvcOnSearch",function(Ce){return p.onSearch$.next(Ce)})("cvcOnModelChange",function(Ce){return p.props.change&&p.props.change(p.field,Ce)}),e.ALo(7,"ngrxPush"),e.ALo(8,"ngrxPush"),e.ALo(9,"ngrxPush"),e.ALo(10,"ngrxPush"),e.ALo(11,"ngrxPush"),e.ALo(12,"ngrxPush"),e.ALo(13,"ngrxPush"),e.qZA()()(),e.YNc(14,xe,3,3,"ng-container",5),e.YNc(15,We,2,3,"ng-template",null,6,e.W1O),e.YNc(17,dt,1,2,"ng-template",null,7,e.W1O),e.YNc(19,bt,2,0,"ng-template",null,8,e.W1O)),2&s){const O=e.MAs(16),Ce=e.MAs(18);e.Q6J("nzGutter",e.DdM(38,Lt)),e.xp6(1),e.Q6J("ngIf",e.lcZ(2,20,p.showTypeSelect$)),e.xp6(2),e.Q6J("ngIf",e.lcZ(4,22,p.showTypeSelect$)),e.xp6(3),e.Q6J("cvcMinSearchStrLength",p.props.minSearchStrLength)("cvcSelectMode",p.props.isMultiSelect?"multiple":"default")("cvcCustomTemplate",O)("cvcFormControl",p.formControl)("cvcFormlyAttributes",p.field)("cvcEntityName",p.props.entityName)("cvcPlaceholder",e.lcZ(7,24,p.placeholder$))("cvcResults",e.lcZ(8,26,p.result$))("cvcOptions",e.lcZ(9,28,p.selectOption$))("cvcParamName",e.lcZ(10,30,p.sourceTypeName$))("cvcShowError",p.showError)("cvcDisabled",p.props.disabled)("cvcLoading",e.lcZ(11,32,p.isLoading$))("cvcAddEntity",Ce)("cvcAddEntityModel",e.lcZ(12,34,p.onModel$))("cvcSelectOpen",e.lcZ(13,36,p.selectOpen$)),e.xp6(8),e.Q6J("ngrxLet",p.onSearch$)}},dependencies:[a.sg,a.O5,a.RF,a.n9,t.JJ,t.On,lo.eJ,He.Ip,He.Vq,R.t3,R.SK,X.ZU,an,Qt.J,Rc,lo.fM,fr.A],styles:[".prefix[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{text-align:right;line-height:28px;color:#999}.select-layout[_ngcontent-%COMP%]{flex-wrap:nowrap}"],changeDetection:0}),l})();const hn={types:[{name:"source-select",wrappers:["form-field"],component:Yt,defaultOptions:{props:{label:"Source"}}},{name:"source-multi-select",wrappers:["form-field"],component:Yt,defaultOptions:{props:{label:"Sources",isMultiSelect:!0}}}]};let xn=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[a.ez,t.u5,t.UX,_.X0.forChild(hn),yt.L,To.sL,Ge.aF,He.LV,Wo.$6,_i.Qp,ue.PV,I.o7,R.Jb,eo.cg,Re.zf,N.U5,H.ic,X.ZJ,Xt.S,An.X,Po.g,Lo,jt,tt.s,Te.x]}),l})();function Yn(l,g){if(1&l&&e._UZ(0,"nz-option",4),2&l){const s=g.$implicit;e.Q6J("nzLabel",s)("nzValue",s)("nzHide",!0)}}function qt(l,g){if(1&l){const s=e.EpF();e.ynx(0),e.TgZ(1,"nz-select",2),e.NdJ("ngModelChange",function(O){e.CHM(s);const Ce=e.oxw();return e.KtG(Ce.onValueChange$.next(O))}),e.YNc(2,Yn,1,3,"nz-option",3),e.qZA(),e.BQk()}if(2&l){const s=e.oxw();e.xp6(1),e.Q6J("formControl",s.formControl)("formlyAttributes",s.field),e.xp6(1),e.Q6J("ngForOf",s.formControl.value)}}function gn(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"nz-tag",7),e.NdJ("nzOnClose",function(O){e.CHM(s);const Ce=e.oxw(2);return e.KtG(Ce.onTagClose$.next(O))}),e._uU(1),e.qZA()}if(2&l){const s=g.ngIf;e.Q6J("nzMode","closeable"),e.xp6(1),e.hij(" ",s," ")}}function $n(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"input",10,11),e.NdJ("keydown.enter",function(){e.CHM(s);const O=e.MAs(1);return e.KtG(O.blur())}),e.qZA()}if(2&l){const s=e.oxw(3);e.Q6J("formControl",s.formControl)("type",s.props.type||"text")("formlyAttributes",s.field)}}function Ln(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"nz-input-number",12,13),e.NdJ("keydown.enter",function(){e.CHM(s);const O=e.MAs(1);return e.KtG(O.blur())}),e.qZA()}if(2&l){const s=e.oxw(3);e.Q6J("formControl",s.formControl)("formlyAttributes",s.field)}}function ro(l,g){if(1&l&&(e.ynx(0),e.YNc(1,$n,2,3,"input",8),e.YNc(2,Ln,2,2,"ng-template",null,9,e.W1O),e.BQk()),2&l){const s=e.MAs(3),p=e.oxw(2);e.xp6(1),e.Q6J("ngIf","number"!==p.props.type)("ngIfElse",s)}}function Io(l,g){if(1&l&&(e.YNc(0,gn,2,2,"nz-tag",5),e.ALo(1,"ngrxPush"),e.YNc(2,ro,4,2,"ng-container",6),e.ALo(3,"ngrxPush")),2&l){const s=e.oxw();e.Q6J("ngIf",e.lcZ(1,2,s.tagLabel$)),e.xp6(2),e.Q6J("ngIf",!e.lcZ(3,4,s.tagLabel$))}}const Li=bo(ko(),hr);let Pi=(()=>{class l extends Li{constructor(){super(),this.defaultOptions={modelOptions:{updateOn:"blur"},props:{label:"Enter value"}}}ngAfterViewInit(){this.configureBaseField(),this.configureStringTagField()}}return l.\u0275fac=function(s){return new(s||l)},l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-tag-input"]],features:[e.qOj],decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["singleInputField",""],["nzMode","tags","nzPlaceHolder","Please select","nzAllowClear","","nzDropdownClassName","hide-dropdown",3,"formControl","formlyAttributes","ngModelChange"],[3,"nzLabel","nzValue","nzHide",4,"ngFor","ngForOf"],[3,"nzLabel","nzValue","nzHide"],[3,"nzMode","nzOnClose",4,"ngIf"],[4,"ngIf"],[3,"nzMode","nzOnClose"],["nz-input","",3,"formControl","type","formlyAttributes","keydown.enter",4,"ngIf","ngIfElse"],["numberTmp",""],["nz-input","",3,"formControl","type","formlyAttributes","keydown.enter"],["baseInputTxt",""],[3,"formControl","formlyAttributes","keydown.enter"],["baseInputNum",""]],template:function(s,p){if(1&s&&(e.YNc(0,qt,3,3,"ng-container",0),e.YNc(1,Io,4,6,"ng-template",null,1,e.W1O)),2&s){const O=e.MAs(2);e.Q6J("ngIf",p.props.isMultiInput)("ngIfElse",O)}},dependencies:[a.sg,a.O5,t.Fj,t.JJ,t.oH,_.JD,I.Zp,He.Ip,He.Vq,An.j,lo.fM],changeDetection:0}),l})();const ps={types:[{name:"tag-input",wrappers:["form-field"],component:Pi},{name:"tag-multi-input",wrappers:["form-field"],component:Pi,defaultOptions:{props:{isMultiInput:!0}}}]};let Ji=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[a.ez,t.UX,_.X0.forChild(ps),N.U5,I.o7,He.LV,An.X,Tn]}),l})();var qi;function qu(l,g){1&l&&e._UZ(0,"span",7)}function Vc(l,g){1&l&&e._UZ(0,"span",8)}const oo=function(){return[0,0]},ho={name:void 0};let Mo=((qi=class{set cvcSearchString(g){g&&this.searchString$.next(g)}constructor(g,s){this.query=g,this.errors=s,this.cvcOnCreate=new e.vpe,this.model=ho,this.form=new t.nJ({}),this.options={},this.onSubmit$=new E.x,this.searchString$=new Be.X(void 0),this.queryMutator=new oi.U(this.errors),this.isSubmitting$=new Be.X(!1),this.submitSuccess$=new Be.X(!1),this.submitError$=new Be.X([]),this.addTherapyMutator=new oi.U(this.errors),this.fields=[{key:"name",props:{hidden:!0,required:!0}}],this.searchString$.pipe((0,zn.t)(this)).subscribe(p=>{this.model.name=p}),this.onSubmit$.pipe((0,zn.t)(this)).subscribe(p=>{this.submitTherapy(p)})}submitTherapy(g){if(!g.name)return void console.error("therapy-quick-add form submitTherapy requires model with valid name.");let s=this.addTherapyMutator.mutate(this.query,{name:g.name},{},p=>{console.log("therapy-quick-add submit data callback",p),p.addTherapy&&this.cvcOnCreate.next(p.addTherapy.therapy.id)});s.submitSuccess$.pipe((0,zn.t)(this)).subscribe(p=>{console.log("therapy-quick-add submitSuccess$",p),this.submitSuccess$.next(p)}),s.submitError$.pipe((0,zn.t)(this)).subscribe(p=>{console.log("therapy-quick-add submitError$",p),this.submitError$.next(p)}),s.isSubmitting$.pipe((0,zn.t)(this)).subscribe(p=>{this.isSubmitting$.next(p)})}}).\u0275fac=function(g){return new(g||qi)(e.Y36(Fn.Y_K),e.Y36(jo.Y))},qi.\u0275cmp=e.Xpm({type:qi,selectors:[["cvc-therapy-quick-add-form"]],inputs:{cvcSearchString:"cvcSearchString"},outputs:{cvcOnCreate:"cvcOnCreate"},decls:14,vars:17,consts:[[3,"formGroup","ngSubmit"],[3,"nzGutter"],["nzSpan","24"],[3,"form","fields","model","options","modelChange"],["nz-button","","nzType","primary","nzBlock","",3,"disabled"],["nz-icon","","nzType","plus-circle","nzTheme","outline",4,"ngIf"],["nz-icon","","nzType","loading","nzTheme","outline",4,"ngIf"],["nz-icon","","nzType","plus-circle","nzTheme","outline"],["nz-icon","","nzType","loading","nzTheme","outline"]],template:function(g,s){1&g&&(e.TgZ(0,"form",0),e.NdJ("ngSubmit",function(){return s.onSubmit$.next(s.model)}),e.TgZ(1,"nz-row",1)(2,"nz-col",2)(3,"formly-form",3),e.NdJ("modelChange",function(O){return s.model=O}),e.qZA()(),e.TgZ(4,"nz-col",2)(5,"button",4),e.YNc(6,qu,1,0,"span",5),e.ALo(7,"ngrxPush"),e.YNc(8,Vc,1,0,"span",6),e.ALo(9,"ngrxPush"),e._uU(10," Create Therapy\xa0"),e.TgZ(11,"i"),e._uU(12),e.ALo(13,"ngrxPush"),e.qZA()()()()()),2&g&&(e.Q6J("formGroup",s.form),e.xp6(1),e.Q6J("nzGutter",e.DdM(16,oo)),e.xp6(2),e.Q6J("form",s.form)("fields",s.fields)("model",s.model)("options",s.options),e.xp6(2),e.Q6J("disabled",!s.form.valid),e.xp6(1),e.Q6J("ngIf",!e.lcZ(7,10,s.isSubmitting$)),e.xp6(2),e.Q6J("ngIf",e.lcZ(9,12,s.isSubmitting$)),e.xp6(4),e.Oqu(e.lcZ(13,14,s.searchString$)))},dependencies:[a.O5,t._Y,t.JL,t.sg,_.T7,To.ix,de.w,et.dQ,ue.Ls,R.t3,R.SK,lo.fM],encapsulation:2,changeDetection:0}),qi);Mo=(0,V.gn)([(0,zn.c)()],Mo);const ti=["optionTemplates"];function Xi(l,g){if(1&l&&(e.ynx(0),e.TgZ(1,"strong"),e._uU(2,"NCIt ID:"),e.qZA(),e._UZ(3,"span",9),e.ALo(4,"highlightTypeahead"),e.BQk()),2&l){const s=e.oxw(2).$implicit,p=e.oxw().ngrxLet;e.xp6(3),e.Q6J("innerHtml",e.xi3(4,1,s.ncitId,p),e.oJD)}}function Ws(l,g){if(1&l&&(e.ynx(0),e.TgZ(1,"strong"),e._uU(2,"Aliases: "),e.qZA(),e.TgZ(3,"em"),e._UZ(4,"span",10),e.ALo(5,"highlightTypeahead"),e.qZA(),e.BQk()),2&l){const s=e.oxw(2).$implicit,p=e.oxw().ngrxLet;e.xp6(4),e.Q6J("nzTooltipTitle",s.therapyAliases.join(", "))("innerHtml",e.xi3(5,2,s.therapyAliases.join(", "),p),e.oJD)}}function Fr(l,g){if(1&l&&(e._UZ(0,"cvc-entity-tag",6),e.TgZ(1,"span",7),e.YNc(2,Xi,5,4,"ng-container",8),e.YNc(3,Ws,6,5,"ng-container",8),e.qZA()),2&l){const s=e.oxw().$implicit,p=e.oxw().ngrxLet;e.Q6J("cvcDisableLink",!0)("cvcCacheId",s.__typename+":"+s.id)("cvcEmphasize",p),e.xp6(2),e.Q6J("ngIf",s.ncitId),e.xp6(1),e.Q6J("ngIf",s.therapyAliases.length>0)}}function ws(l,g){1&l&&(e.ynx(0),e.YNc(1,Fr,4,5,"ng-template",null,5,e.W1O),e.BQk())}function ki(l,g){if(1&l&&(e.ynx(0),e.YNc(1,ws,3,0,"ng-container",4),e.ALo(2,"ngrxPush"),e.BQk()),2&l){const s=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,s.result$))}}function Zd(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"div",11)(1,"cvc-entity-tag",12),e.NdJ("cvcOnClose",function(){const Ce=e.CHM(s).$implicit,ft=e.oxw();return e.KtG(ft.onTagClose$.next(Ce.nzValue))}),e.qZA()()}if(2&l){const s=g.$implicit,p=e.oxw();e.xp6(1),e.Q6J("cvcCacheId","Therapy:"+s.nzValue)("cvcContext",p.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",p.props.isMultiSelect?"default":"closeable")}}function Ap(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"cvc-therapy-quick-add-form",13),e.NdJ("cvcOnCreate",function(O){e.CHM(s);const Ce=e.oxw();return e.KtG(Ce.onPopulate$.next(O))}),e.qZA()}2&l&&e.Q6J("cvcSearchString",g.$implicit)}const vr=bo(ko(),Oo());let Zs=(()=>{class l extends vr{constructor(s,p,O){super(),this.taq=s,this.tq=p,this.changeDetectorRef=O,this.defaultOptions={props:{entityName:{singular:"Therapy",plural:"Therapies"},isMultiSelect:!1,requireType:!0,tooltip:"Therapy or therapy combination which interacts with the specified variant",placeholder:"Search Therapies",requireTypePromptFn:(Ce,ft)=>`Select an ${Ce} Type to search associated Therapies`}},this.placeholder$=new Be.X(void 0)}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEntitySelectField({typeaheadQuery:this.taq,typeaheadParam$:void 0,tagQuery:this.tq,getTypeaheadVarsFn:this.getTypeaheadVarsFn,getTypeaheadResultsFn:this.getTypeaheadResultsFn,getTagQueryVarsFn:this.getTagQueryVarsFn,getTagQueryResultsFn:this.getTagQueryResultsFn,getSelectedItemOptionFn:this.getSelectedItemOptionFn,getSelectOptionsFn:this.getSelectOptionsFn,changeDetectorRef:this.changeDetectorRef,selectOpen$:this.selectOpen$,selectComponent:this.selectComponent}),this.configurePlaceholders()}configureStateConnections(){if(this.state&&(this.stateEntityName=this.state.entityName,this.state.requires.requiresTherapy$?this.onRequiresTherapy$=this.state.requires.requiresTherapy$:console.warn(`${this.field.id} field's form provides a state, but could not find requiresTherapy$ subject to attach.`),this.props.requireType)){const s=`${this.stateEntityName.toLowerCase()}Type$`;this.state.fields[s]?this.onEntityType$=this.state.fields[s]:console.error(`${this.field.id} requireType is true, however form state does not provide Subject ${s}.`)}}configurePlaceholders(){this.placeholder$.next(this.props.placeholder),this.onRequiresTherapy$&&this.onEntityType$&&(0,Do.a)([this.onRequiresTherapy$,this.onEntityType$]).pipe((0,ze.x)(),(0,zn.t)(this)).subscribe(([s,p])=>{!s&&p?(this.props.required=!1,this.props.disabled=!0,this.props.description=`${(0,Oi.E)(p)} ${this.state.entityName} does not include associated therapies`,this.props.extraType="prompt",this.resetField(),this.cdr.markForCheck()):this.props.requireType&&!p?(this.props.required=!1,this.props.disabled=!0,this.props.description=this.props.requireTypePromptFn(this.state.entityName,this.props.isMultiSelect),this.props.extraType="prompt"):s?(this.props.required=!0,this.props.disabled=!1,this.props.description=void 0,this.props.extraType=void 0):(!s&&this.formControl.value||this.props.requireType&&!p&&this.formControl.value)&&(this.resetField(),console.log("HERE2"))})}getTypeaheadVarsFn(s){return{name:s}}getTypeaheadResultsFn(s){return s.data.therapyTypeahead}getTagQueryVarsFn(s){return{id:s}}getTagQueryResultsFn(s){return s.data.therapy}getSelectedItemOptionFn(s){return{value:s.id,label:s.name}}getSelectOptionsFn(s,p){return s.map((O,Ce)=>({label:p.get(Ce)||O.name,value:O.id}))}}return l.\u0275fac=function(s){return new(s||l)(e.Y36(Fn.cIw),e.Y36(Fn.sjj),e.Y36(e.sBO))},l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-therapy-select"]],viewQuery:function(s,p){if(1&s&&e.Gf(ti,5,e.Rgc),2&s){let O;e.iGM(O=e.CRH())&&(p.optionTemplates=O)}},features:[e.qOj],decls:12,vars:26,consts:[[3,"cvcAddEntity","cvcCustomTemplate","cvcDisabled","cvcEntityName","cvcFormControl","cvcFormlyAttributes","cvcLoading","cvcOptions","cvcPlaceholder","cvcResults","cvcSelectMode","cvcShowError","cvcSelectOpen","cvcOnSearch","cvcOnOpenChange","cvcOnModelChange"],[4,"ngrxLet"],["selectedTemplate",""],["addTherapy",""],[4,"ngFor","ngForOf"],["optionTemplates",""],[3,"cvcDisableLink","cvcCacheId","cvcEmphasize"],["nz-typography","","nzType","secondary"],[4,"ngIf"],[3,"innerHtml"],["nz-typography","","nzType","secondary","nz-tooltip","",3,"nzTooltipTitle","innerHtml"],[1,"ant-select-selection-item-content"],[3,"cvcCacheId","cvcContext","cvcMode","cvcOnClose"],[3,"cvcSearchString","cvcOnCreate"]],template:function(s,p){if(1&s&&(e.TgZ(0,"cvc-entity-select",0),e.NdJ("cvcOnSearch",function(Ce){return p.onSearch$.next(Ce)})("cvcOnOpenChange",function(Ce){return p.onOpenChange$.next(Ce)})("cvcOnModelChange",function(Ce){return p.props.change&&p.props.change(p.field,Ce)}),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.ALo(3,"ngrxPush"),e.ALo(4,"ngrxPush"),e.ALo(5,"ngrxPush"),e.ALo(6,"ngrxPush"),e.qZA(),e.YNc(7,ki,3,3,"ng-container",1),e.YNc(8,Zd,2,3,"ng-template",null,2,e.W1O),e.YNc(10,Ap,1,1,"ng-template",null,3,e.W1O)),2&s){const O=e.MAs(9),Ce=e.MAs(11);e.Q6J("cvcAddEntity",Ce)("cvcCustomTemplate",O)("cvcDisabled",p.onRequiresTherapy$&&!e.lcZ(1,14,p.onRequiresTherapy$))("cvcEntityName",p.props.entityName)("cvcFormControl",p.formControl)("cvcFormlyAttributes",p.field)("cvcLoading",e.lcZ(2,16,p.isLoading$))("cvcOptions",e.lcZ(3,18,p.selectOption$))("cvcPlaceholder",e.lcZ(4,20,p.placeholder$))("cvcResults",e.lcZ(5,22,p.result$))("cvcSelectMode",p.props.isMultiSelect?"multiple":"default")("cvcShowError",p.showError)("cvcSelectOpen",e.lcZ(6,24,p.selectOpen$)),e.xp6(7),e.Q6J("ngrxLet",p.onSearch$)}},dependencies:[a.sg,a.O5,lo.eJ,eo.SY,X.ZU,an,Qt.J,Mo,lo.fM,fr.A],changeDetection:0}),l})();const rs={types:[{name:"therapy-select",wrappers:["form-field"],component:Zs,defaultOptions:{props:{label:"Therapy"}}},{name:"therapy-multi-select",wrappers:["form-field"],component:Zs,defaultOptions:{props:{label:"Therapies",isMultiSelect:!0}}}]};let Xu=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[a.ez,t.UX,_.X0.forChild(rs),yt.L,To.sL,He.LV,Wo.$6,_i.Qp,ue.PV,I.o7,R.Jb,eo.cg,Re.zf,N.U5,H.ic,X.ZJ,An.X,Lo,jt,tt.s,Te.x]}),l})();const Fp={isDefaultCol:l=>"default"===l.type,isSelectCol:l=>"select"===l.type,isEntityTagCol:l=>"entity-tag"===l.type,isEnumTagCol:l=>"enum-tag"===l.type,isTextTagCol:l=>"text-tag"===l.type},ld=l=>void 0!==l.sort,Jd=l=>void 0!==l.filter,sh={diseases:Fn.pP7.DiseaseName,feature:Fn.pP7.FeatureName,therapies:Fn.pP7.TherapyName,variant:Fn.pP7.VariantName},D2={diseases:"diseaseName",therapies:"therapyName",variant:"variantName",feature:"featureName",aliases:"variantAlias"},ah=["selected","id"];class ud{constructor(){this.sortStreams=[],this.filterStreams=[],this.config=this.configureColumnStreams([{key:"selected",label:"Select",type:"select",width:"25px",align:"center",fixedLeft:!0,checkbox:{th:{showCheckbox:!1},td:{showCheckbox:!0}}},{key:"id",label:"ID",hidden:!0,type:"hidden",width:"0px"},{key:"variant",label:"Variant",type:"entity-tag",width:"215px",context:"variant",fixedLeft:!0,showStatus:!0,tag:{fullWidth:!0,truncateLabel:"200px"},sort:{default:"ascend"},filter:{inputType:"default",options:[{key:"Filter Variant Name",value:null}]}},{key:"aliases",label:"Aliases",type:"default",width:"150px",objectKey:"name",sort:{},filter:{inputType:"default",options:[{key:"Filter Aliases",value:null}]}},{key:"feature",label:"Feature",type:"entity-tag",width:"135px",tag:{truncateLabel:"125px"},sort:{},filter:{inputType:"default",options:[{key:"Filter Feature Name",value:null}]}},{key:"diseases",label:"Diseases",type:"entity-tag",width:"250px",sort:{},tag:{maxTags:1,truncateLabel:"175px"},filter:{inputType:"default",typename:"Therapy",options:[{key:"Filter Therapy Names",value:null}]}},{key:"therapies",label:"Therapies",type:"entity-tag",width:"275px",sort:{},tag:{maxTags:2,truncateLabel:"150px"},filter:{inputType:"default",typename:"Therapy",options:[{key:"Filter Therapy Names",value:null}]}}])}get(){return this.config}getSortStreams(){return this.sortStreams}getFilterStreams(){return this.filterStreams}getAttributeFilters(g,s){return g.getValues().map(O=>({text:(0,Oi.E)(O),value:O,byDefault:s===O}))}configureColumnStreams(g){return g.forEach(s=>{const p=s;if(ld(p)&&(p.sort.changes=new Be.X({key:p.key,value:p.sort.default??null}),this.sortStreams.push(p.sort.changes)),Jd(p)){const O=p.filter.options.find(Ce=>Ce.byDefault)?.value;p.filter.changes=new Be.X({key:p.key,value:O??null}),this.filterStreams.push(p.filter.changes)}}),g}}var e1;let Bc=((e1=class{set cvcTableScrollerToIndex(g){void 0!==g&&this.scrollToIndex(g)}set cvcTableScrollerToOffset(g){void 0!==g&&this.scrollToIndex(g)}constructor(g){this.host=g,this.cvcTableScrollerOnScroll=new e.vpe,this.cvcTableScrollerOnFetch=new e.vpe,this.cvcTableScrollerTargetHeight=140,this.cvcTableScrollerFetchCount=50,this.onLoadThrottleTime=500,this.onScrollThrottleTime=250,this.onScrollDebounceTime=300}ngAfterViewInit(){if(!this.host||!this.host.cdkVirtualScrollViewport)throw new Error("cvcTableScroller directive could not obtain reference to host cdkVirtualScrollViewport.");this.viewport=this.host.cdkVirtualScrollViewport,this.scrolled$=this.viewport.elementScrolled(),this.rendered$=this.viewport.renderedRangeStream,this.rendered$.pipe((0,Rs.P)()).subscribe(()=>this.viewport.checkViewportSize()),this.scrolled$.pipe((0,Ri.p)(this.onScrollThrottleTime,Xo.z,{leading:!0,trailing:!0}),(0,St.b)(g=>this.cvcTableScrollerOnScroll.next("scroll")),(0,Cs.b)(this.onScrollDebounceTime),(0,zn.t)(this)).subscribe(g=>{this.cvcTableScrollerOnScroll.next("stop")}),this.scrolled$.pipe((0,S.U)(g=>this.viewport.measureScrollOffset("bottom")),(0,Vs.G)(),(0,vt.h)(([g,s])=>s<g&&s<this.cvcTableScrollerTargetHeight),(0,Ri.p)(this.onLoadThrottleTime),(0,zn.t)(this)).subscribe(g=>{this.cvcTableScrollerOnScroll.next("bottom");try{this.loadMore(this.cvcTableScrollerPageInfo)}catch(s){console.error(s)}})}loadMore(g){const s=this.cvcTableScrollerQueryRef;if(!g&&s)throw new Error("table-scroll directive requires PageInfo to use provided QueryRef.");if(g&&!s)throw new Error("table-scroll directive requires valid QueryRef when PageInfo provided.");if(g&&s){const[p,O,Ce]=[this.cvcTableScrollerFetchCount,g.hasNextPage,g.endCursor];if(!p||!Ce)throw new Error("table-scroll PageInfo invalid.");if(!O)return;this.cvcTableScrollerOnFetch.next({first:p,after:Ce})}}scrollToIndex(g){const[s,p]=[this.host,this.host.cdkVirtualScrollViewport];if(!s||!p)throw new Error("table-scroll scrollToIndex() cannot find host viewport.");p.scrollToIndex(g)}scrollToOffset(g){const[s,p]=[this.host,this.host.cdkVirtualScrollViewport];if(!s||!p)throw new Error("table-scroll scrollToOffset() cannot find host viewport.");p.scrollToOffset(g)}}).\u0275fac=function(g){return new(g||e1)(e.Y36(Go.N8))},e1.\u0275dir=e.lG2({type:e1,selectors:[["","cvcTableScroller",""]],inputs:{cvcTableScrollerTargetHeight:"cvcTableScrollerTargetHeight",cvcTableScrollerQueryRef:"cvcTableScrollerQueryRef",cvcTableScrollerPageInfo:"cvcTableScrollerPageInfo",cvcTableScrollerFetchCount:"cvcTableScrollerFetchCount",cvcTableScrollerToIndex:"cvcTableScrollerToIndex",cvcTableScrollerToOffset:"cvcTableScrollerToOffset"},outputs:{cvcTableScrollerOnScroll:"cvcTableScrollerOnScroll",cvcTableScrollerOnFetch:"cvcTableScrollerOnFetch"}}),e1);function dd(l,g){1&l&&e._UZ(0,"span",8)}function l4(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"span",9),e.NdJ("click",function(){e.CHM(s),e.oxw(2);const O=e.MAs(3),Ce=e.oxw();return O.value="",e.KtG(Ce.cvcModelChange.next(null))}),e.qZA()}}function ch(l,g){if(1&l&&(e.YNc(0,dd,1,0,"span",6),e.YNc(1,l4,1,0,"span",7)),2&l){e.oxw();const s=e.MAs(3);e.Q6J("ngIf",!s.value),e.xp6(1),e.Q6J("ngIf",s.value)}}function u4(l,g){if(1&l){const s=e.EpF();e.ynx(0),e.TgZ(1,"nz-input-group",2)(2,"input",3,4),e.NdJ("ngModelChange",function(O){e.CHM(s);const Ce=e.oxw();return e.KtG(Ce.cvcModelChange.next(O))}),e.qZA()(),e.YNc(4,ch,2,2,"ng-template",null,5,e.W1O),e.BQk()}if(2&l){const s=e.MAs(5),p=e.oxw();e.xp6(1),e.Q6J("nzSuffix",s),e.xp6(1),e.Q6J("placeholder",p.cvcPlaceholder)("ngModel",p.cvcModel)}}function d4(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"nz-input-number-group",10)(1,"nz-input-number",11,4),e.NdJ("ngModelChange",function(O){e.CHM(s);const Ce=e.oxw();return e.KtG(Ce.cvcModelChange.next(""===O?null:O))}),e.qZA()()}if(2&l){const s=e.oxw();let p;e.xp6(1),e.Q6J("nzPlaceHolder",null!==(p=s.cvcPlaceholder)&&void 0!==p?p:"")("ngModel",s.cvcModel)("nzMin",1)("nzStep",1)}}Bc=(0,V.gn)([(0,zn.c)()],Bc);let p4=(()=>{class l{constructor(){this.cvcModel=null,this.cvcModelChange=new e.vpe,this.cvcInputType="default"}}return l.\u0275fac=function(s){return new(s||l)},l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-variant-table-filter-input"]],inputs:{cvcModel:"cvcModel",cvcInputType:"cvcInputType",cvcPlaceholder:"cvcPlaceholder"},outputs:{cvcModelChange:"cvcModelChange"},decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["numericInput",""],["nzSize","small",3,"nzSuffix"],["nz-input","",3,"placeholder","ngModel","ngModelChange"],["filterInput",""],["suffixIcon",""],["nz-icon","","nzType","search","style","color: #ddd",4,"ngIf"],["nz-icon","","class","ant-input-clear-icon","nzTheme","fill","nzType","close-circle",3,"click",4,"ngIf"],["nz-icon","","nzType","search",2,"color","#ddd"],["nz-icon","","nzTheme","fill","nzType","close-circle",1,"ant-input-clear-icon",3,"click"],["nzSize","small"],[2,"width","100%",3,"nzPlaceHolder","ngModel","nzMin","nzStep","ngModelChange"]],template:function(s,p){if(1&s&&(e.YNc(0,u4,6,3,"ng-container",0),e.YNc(1,d4,3,4,"ng-template",null,1,e.W1O)),2&s){const O=e.MAs(2);e.Q6J("ngIf","default"===p.cvcInputType)("ngIfElse",O)}},dependencies:[a.O5,t.Fj,t.JJ,t.On,de.w,ue.Ls,I.Zp,I.gB,I.ke,lt,ie]}),l})();function lh(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"li",5),e.NdJ("click",function(){const Ce=e.CHM(s).$implicit,ft=e.oxw();return e.KtG(ft.cvcOptionChange.next({key:ft.cvcColumnKey,value:Ce.value}))}),e._UZ(1,"cvc-attribute-tag",6),e.qZA()}if(2&l){const s=g.$implicit,p=e.oxw();e.Q6J("nzSelected",(null==p.cvcOption?null:p.cvcOption.value)===s.value),e.xp6(1),e.Q6J("cvcFullWidth",!0)("cvcChecked",(null==p.cvcOption?null:p.cvcOption.value)===s.value)("cvcAttrValue",s.value)}}let h4=(()=>{class l{constructor(){this.cvcOptionChange=new e.vpe}}return l.\u0275fac=function(s){return new(s||l)},l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-variant-enum-filter-menu"]],inputs:{cvcColumnKey:"cvcColumnKey",cvcFilterOptions:"cvcFilterOptions",cvcOption:"cvcOption"},outputs:{cvcOptionChange:"cvcOptionChange"},decls:6,vars:2,consts:[["nz-menu",""],["nz-menu-item","",3,"nzSelected","click",4,"ngFor","ngForOf"],[2,"padding","3px"],["nz-button","","nzType","default","nzBlock","","nzSize","small",3,"disabled","click"],["nz-icon","","nzType","retweet","nzTheme","outline"],["nz-menu-item","",3,"nzSelected","click"],["cvcContext","menu-item",3,"cvcFullWidth","cvcChecked","cvcAttrValue"]],template:function(s,p){1&s&&(e.TgZ(0,"ul",0),e.YNc(1,lh,2,4,"li",1),e.TgZ(2,"li",2)(3,"button",3),e.NdJ("click",function(){return p.cvcOptionChange.next({key:p.cvcColumnKey,value:null})}),e._UZ(4,"span",4),e._uU(5," Reset "),e.qZA()()()),2&s&&(e.xp6(1),e.Q6J("ngForOf",p.cvcFilterOptions),e.xp6(2),e.Q6J("disabled",null===(null==p.cvcOption?null:p.cvcOption.value)))},dependencies:[a.sg,Ie,To.ix,de.w,et.dQ,ue.Ls,dc.wO,dc.r9],styles:[".typeahead-match[_ngcontent-%COMP%]{font-weight:700}.hide-dropdown[_ngcontent-%COMP%]{display:none}[_nghost-%COMP%]     ul li:hover{background-color:#e6f7ff}[_nghost-%COMP%]     ul li.ant-dropdown-menu-item-selected{background-color:#1890ff}[_nghost-%COMP%]     ul li.ant-dropdown-menu-item-selected:active{background-color:#096dd9}"],changeDetection:0}),l})();var Hc;function pd(l,g){if(1&l&&e._UZ(0,"th",14),2&l){const s=g.ngIf;let p;e.Q6J("nzShowCheckbox",s.checkbox.th.showCheckbox||!1)("nzWidth",s.width)("nzAlign",null!==(p=s.align)&&void 0!==p?p:"left")("nzLeft",s.fixedLeft||!1)("nzRight",s.fixedRight||!1)}}function uh(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"th",15),e.NdJ("nzSortOrderChange",function(O){const ft=e.CHM(s).ngIf;return e.KtG(ft.sort.changes.next({key:ft.key,value:O}))}),e.ALo(1,"ngrxPush"),e.TgZ(2,"span",16),e._uU(3),e.qZA()()}if(2&l){const s=g.ngIf;let p,O;e.Q6J("nzColumnKey",s.key)("nzAlign",null!==(p=s.align)&&void 0!==p?p:"left")("nzWidth",s.width)("nzLeft",s.fixedLeft||!1)("nzRight",s.fixedRight||!1)("nzShowSort",void 0!==s.sort)("nzSortFn",!0)("nzSortOrder",(null==(O=e.lcZ(1,10,s.sort.changes))?null:O.value)||null),e.xp6(2),e.Q6J("nzTooltipTitle",s.tooltip),e.xp6(1),e.hij(" ",s.label," ")}}function O2(l,g){if(1&l&&(e.TgZ(0,"th",17),e._uU(1),e.qZA()),2&l){const s=g.ngIf;let p;e.Q6J("nzColumnKey",s.key)("nzAlign",null!==(p=s.align)&&void 0!==p?p:"left")("nzWidth",s.width)("nzLeft",s.fixedLeft||!1)("nzRight",s.fixedRight||!1)("nzTooltipTitle",s.tooltip),e.xp6(1),e.hij(" ",s.label," ")}}function Np(l,g){if(1&l&&(e.TgZ(0,"th",17),e._uU(1),e.qZA()),2&l){const s=g.ngIf;let p;e.Q6J("nzColumnKey",s.key)("nzAlign",null!==(p=s.align)&&void 0!==p?p:"left")("nzWidth",s.width)("nzLeft",s.fixedLeft||!1)("nzRight",s.fixedRight||!1)("nzTooltipTitle",s.tooltip),e.xp6(1),e.hij(" ",s.label," ")}}function t1(l,g){if(1&l&&(e.TgZ(0,"th",17),e._uU(1),e.qZA()),2&l){const s=g.ngIf;let p;e.Q6J("nzColumnKey",s.key)("nzAlign",null!==(p=s.align)&&void 0!==p?p:"left")("nzWidth",s.width)("nzLeft",s.fixedLeft||!1)("nzRight",s.fixedRight||!1)("nzTooltipTitle",s.tooltip),e.xp6(1),e.hij(" ",s.label," ")}}function qd(l,g){if(1&l&&(e.ynx(0),e.YNc(1,pd,1,5,"th",11),e.ALo(2,"guardType"),e.YNc(3,uh,4,12,"th",12),e.ALo(4,"guardType"),e.YNc(5,O2,2,7,"th",13),e.ALo(6,"guardType"),e.YNc(7,Np,2,7,"th",13),e.ALo(8,"guardType"),e.YNc(9,t1,2,7,"th",13),e.ALo(10,"guardType"),e.BQk()),2&l){const s=e.oxw().$implicit,p=e.oxw(2);e.xp6(1),e.Q6J("ngIf",e.xi3(2,5,s,p.colGuards.isSelectCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(4,8,s,p.colGuards.isEntityTagCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(6,11,s,p.colGuards.isEnumTagCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(8,14,s,p.colGuards.isTextTagCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(10,17,s,p.colGuards.isDefaultCol))}}function dh(l,g){if(1&l&&(e.ynx(0),e.YNc(1,qd,11,20,"ng-container",10),e.BQk()),2&l){const s=g.$implicit;e.xp6(1),e.Q6J("ngIf",!s.hidden)}}function ph(l,g){if(1&l&&(e.TgZ(0,"th",22),e._uU(1," \xa0 "),e.qZA()),2&l){const s=g.ngIf;let p;e.Q6J("nzColumnKey",s.key)("nzAlign",null!==(p=s.align)&&void 0!==p?p:"left")("nzWidth",s.width)("nzLeft",s.fixedLeft||!1)("nzRight",s.fixedRight||!1)}}function f4(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"cvc-variant-table-filter-input",25),e.NdJ("cvcModelChange",function(O){const ft=e.CHM(s).ngIf,vn=e.oxw().ngIf;return e.KtG(ft.changes.next({key:vn.key,value:O}))}),e.qZA()}if(2&l){const s=e.oxw().ngIf;e.Q6J("cvcInputType",s.filter.inputType)("cvcPlaceholder",s.filter.options[0].key)("cvcModel",s.filter.options[0].value)}}function m4(l,g){if(1&l&&(e.TgZ(0,"th",23),e.YNc(1,f4,1,3,"cvc-variant-table-filter-input",24),e.qZA()),2&l){const s=g.ngIf;let p;e.Q6J("nzColumnKey",s.key)("nzWidth",s.width)("nzAlign",null!==(p=s.align)&&void 0!==p?p:"left")("nzLeft",s.fixedLeft||!1)("nzRight",s.fixedRight||!1),e.xp6(1),e.Q6J("ngIf",s.filter)}}function g4(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"th",26,27),e.NdJ("nzSortOrderChange",function(O){const ft=e.CHM(s).ngIf;return e.KtG(ft.sort.changes.next({key:ft.key,value:O}))}),e.ALo(2,"ngrxPush"),e.TgZ(3,"nz-filter-trigger",28,29),e.ALo(5,"ngrxPush"),e._UZ(6,"span",30),e.qZA(),e.TgZ(7,"nz-dropdown-menu",null,31)(9,"cvc-variant-enum-filter-menu",32),e.NdJ("cvcOptionChange",function(O){const ft=e.CHM(s).ngIf,vn=e.MAs(4);return ft.filter.changes.next(O),e.KtG(vn.nzVisible=!1)}),e.ALo(10,"ngrxPush"),e.qZA()()()}if(2&l){const s=g.ngIf,p=e.MAs(8);let O,Ce,ft;e.Q6J("nzColumnKey",s.key)("nzWidth",s.width)("nzAlign",null!==(O=s.align)&&void 0!==O?O:"left")("nzLeft",s.fixedLeft||!1)("nzRight",s.fixedRight||!1)("nzShowSort",!0)("nzSortFn",!0)("nzSortOrder",(null==(Ce=e.lcZ(2,15,s.sort.changes))?null:Ce.value)||null)("nzShowFilter",void 0!==s.filter)("nzFilterFn",!0),e.xp6(3),e.Q6J("nzDropdownMenu",p)("nzActive",null!==(null==(ft=e.lcZ(5,17,s.filter.changes))?null:ft.value)),e.xp6(6),e.Q6J("cvcColumnKey",s.key)("cvcFilterOptions",s.filter.options)("cvcOption",e.lcZ(10,19,s.filter.changes))}}function v4(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"th",33,27)(2,"nz-filter-trigger",28),e.ALo(3,"ngrxPush"),e._UZ(4,"span",34),e.qZA(),e.TgZ(5,"nz-dropdown-menu",null,35)(7,"div",36)(8,"div",37)(9,"cvc-variant-table-filter-input",38),e.NdJ("cvcModelChange",function(O){const ft=e.CHM(s).ngIf;return e.KtG(ft.filter.changes.next({key:ft.key,value:O}))}),e.qZA()()()()()}if(2&l){const s=g.ngIf,p=e.MAs(6);let O,Ce;e.Q6J("nzColumnKey",s.key)("nzWidth",s.width)("nzAlign",null!==(O=s.align)&&void 0!==O?O:"left")("nzLeft",s.fixedLeft||!1)("nzRight",s.fixedRight||!1)("nzFilterFn",!0),e.xp6(2),e.Q6J("nzDropdownMenu",p)("nzActive",null!==(null==(Ce=e.lcZ(3,10,s.filter.changes))?null:Ce.value)),e.xp6(7),e.Q6J("cvcPlaceholder",s.filter.options[0].key)("cvcModel",s.filter.options[0].value)}}function hh(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"cvc-variant-table-filter-input",38),e.NdJ("cvcModelChange",function(O){const ft=e.CHM(s).ngIf,vn=e.oxw().ngIf;return e.KtG(ft.changes.next({key:vn.key,value:O}))}),e.qZA()}if(2&l){const s=e.oxw().ngIf;e.Q6J("cvcPlaceholder",s.filter.options[0].key)("cvcModel",s.filter.options[0].value)}}function _4(l,g){if(1&l&&(e.TgZ(0,"th",23),e.YNc(1,hh,1,2,"cvc-variant-table-filter-input",39),e.qZA()),2&l){const s=g.ngIf;let p;e.Q6J("nzColumnKey",s.key)("nzWidth",s.width)("nzAlign",null!==(p=s.align)&&void 0!==p?p:"left")("nzLeft",s.fixedLeft||!1)("nzRight",s.fixedRight||!1),e.xp6(1),e.Q6J("ngIf",s.filter)}}function Lp(l,g){if(1&l&&(e.ynx(0),e.YNc(1,ph,2,5,"th",18),e.ALo(2,"guardType"),e.YNc(3,m4,2,6,"th",19),e.ALo(4,"guardType"),e.YNc(5,g4,11,21,"th",20),e.ALo(6,"guardType"),e.YNc(7,v4,10,12,"th",21),e.ALo(8,"guardType"),e.YNc(9,_4,2,6,"th",19),e.ALo(10,"guardType"),e.BQk()),2&l){const s=e.oxw().$implicit,p=e.oxw(2);e.xp6(1),e.Q6J("ngIf",e.xi3(2,5,s,p.colGuards.isSelectCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(4,8,s,p.colGuards.isEntityTagCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(6,11,s,p.colGuards.isEnumTagCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(8,14,s,p.colGuards.isTextTagCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(10,17,s,p.colGuards.isDefaultCol))}}function Ul(l,g){if(1&l&&(e.ynx(0),e.YNc(1,Lp,11,20,"ng-container",10),e.BQk()),2&l){const s=g.$implicit;e.xp6(1),e.Q6J("ngIf",!s.hidden)}}function Ka(l,g){if(1&l&&(e.TgZ(0,"thead")(1,"tr",7),e.YNc(2,dh,2,1,"ng-container",8),e.qZA(),e.TgZ(3,"tr",9),e.YNc(4,Ul,2,1,"ng-container",8),e.qZA()()),2&l){const s=g.ngrxLet;e.xp6(2),e.Q6J("ngForOf",s),e.xp6(2),e.Q6J("ngForOf",s)}}function fh(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"td",45),e.NdJ("nzCheckedChange",function(O){e.CHM(s);const Ce=e.oxw(3).$implicit,ft=e.oxw(2);return e.KtG(ft.onRowSelected$.next({id:Ce.id,selected:O}))}),e.qZA()}if(2&l){const s=g.ngIf,p=e.oxw(3).$implicit;let O;e.Q6J("nzChecked",p.selected)("nzAlign",null!==(O=s.align)&&void 0!==O?O:"left")("nzLeft",s.fixedLeft||!1)("nzRight",s.fixedRight||!1)}}function w2(l,g){1&l&&e.GkF(0)}const y4=function(l,g,s){return{$implicit:l,config:g,emphasize:s}};function P2(l,g){if(1&l&&(e.ynx(0),e.YNc(1,w2,1,0,"ng-container",51),e.ALo(2,"isArray"),e.ALo(3,"ngrxPush"),e.BQk()),2&l){const s=e.oxw().ngIf,p=e.oxw().ngIf,O=e.MAs(3),Ce=e.MAs(5),ft=e.oxw(3).$implicit;let vn;e.xp6(1),e.Q6J("ngTemplateOutlet",e.lcZ(2,2,ft[s])?O:Ce)("ngTemplateOutletContext",e.kEZ(6,y4,ft[s],p,null==(vn=e.lcZ(3,4,p.filter.changes))?null:vn.value))}}function I2(l,g){if(1&l&&(e.ynx(0),e.YNc(1,P2,4,10,"ng-container",50),e.BQk()),2&l){const s=g.ngIf;e.oxw();const p=e.MAs(7),O=e.oxw(3).$implicit;e.xp6(1),e.Q6J("ngIf",O[s])("ngIfElse",p)}}const kp=function(l,g,s,p,O){return{tagList:l,tag:g,showPopover:s,status:p,emphasize:O}};function mh(l,g){if(1&l&&(e.ynx(0),e._UZ(1,"cvc-entity-collection-tag",53),e.BQk()),2&l){const s=e.oxw(2),p=s.config,O=s.$implicit,Ce=s.emphasize;e.oxw();const ft=e.MAs(5),vn=e.oxw(5);e.xp6(1),e.Q6J("cvcCollectionTagConfig",e.qbA(3,kp,O.slice(p.tag.maxTags,O.length),p.tag,!vn.isScrolling,!0===p.showStatus?O.status:void 0,Ce))("cvcTagTemplate",ft)("cvcShowFullLabels",!0)}}function A2(l,g){if(1&l&&(e.ynx(0),e._UZ(1,"cvc-entity-tag-list",52),e.YNc(2,mh,2,9,"ng-container",10),e.BQk()),2&l){const s=e.oxw(),p=s.config,O=s.$implicit,Ce=s.emphasize;e.oxw();const ft=e.MAs(5),vn=e.oxw(5);e.xp6(1),e.Q6J("cvcTagTemplate",ft)("cvcTagListConfig",e.qbA(3,kp,O.slice(0,p.tag.maxTags),p.tag,!vn.isScrolling,!0===p.showStatus?O.status:void 0,Ce)),e.xp6(1),e.Q6J("ngIf",O.slice(p.tag.maxTags,O.length).length>0)}}function gh(l,g){if(1&l&&e.YNc(0,A2,3,9,"ng-container",50),2&l){const s=g.$implicit;e.oxw();const p=e.MAs(7);e.Q6J("ngIf",s.length>0)("ngIfElse",p)}}function hd(l,g){if(1&l&&e._UZ(0,"cvc-entity-tag",54),2&l){const s=g.$implicit,p=g.config,O=g.emphasize,Ce=e.oxw(6);let ft;e.Q6J("cvcTruncateLabel",null==p.tag?null:p.tag.truncateLabel)("cvcLinkableEntity",s)("cvcEmphasize",O)("cvcShowPopover",!Ce.isScrolling)("cvcStatus",!0===p.showStatus?s.status:void 0)("cvcFullWidth",null!==(ft=null==p.tag?null:p.tag.fullWidth)&&void 0!==ft&&ft)}}function vh(l,g){if(1&l&&e._UZ(0,"cvc-empty-value",55),2&l){const s=e.oxw().ngIf;e.Q6J("cvcEmptyCategory",s.emptyValueCategory||"unspecified")}}function _h(l,g){if(1&l&&(e.TgZ(0,"td",46),e.YNc(1,I2,2,2,"ng-container",10),e.YNc(2,gh,1,2,"ng-template",null,47,e.W1O),e.YNc(4,hd,1,6,"ng-template",null,48,e.W1O),e.YNc(6,vh,1,1,"ng-template",null,49,e.W1O),e.qZA()),2&l){const s=g.ngIf;let p;e.Q6J("nzAlign",null!==(p=s.align)&&void 0!==p?p:"left")("nzLeft",s.fixedLeft||!1)("nzRight",s.fixedRight||!1),e.xp6(1),e.Q6J("ngIf",s.context||s.key)}}function yh(l,g){if(1&l&&(e._UZ(0,"cvc-attribute-tag",58),e.ALo(1,"evidenceEnumDisplay")),2&l){const s=e.oxw().ngIf,p=e.oxw(3).$implicit,O=e.oxw(2);e.Q6J("cvcFullWidth",!0)("cvcAttrValue",p[s.key])("cvcTooltip",e.lcZ(1,3,!O.isScrolling&&p[s.key]))}}function Ho(l,g){if(1&l&&e._UZ(0,"cvc-empty-value",55),2&l){const s=e.oxw().ngIf;e.Q6J("cvcEmptyCategory",s.emptyValueCategory||"unspecified")}}function Ch(l,g){if(1&l&&(e.TgZ(0,"td",46),e.YNc(1,yh,2,5,"cvc-attribute-tag",56),e.YNc(2,Ho,1,1,"ng-template",null,57,e.W1O),e.qZA()),2&l){const s=g.ngIf,p=e.MAs(3),O=e.oxw(3).$implicit;let Ce;e.Q6J("nzAlign",null!==(Ce=s.align)&&void 0!==Ce?Ce:"left")("nzLeft",s.fixedLeft||!1)("nzRight",s.fixedRight||!1),e.xp6(1),e.Q6J("ngIf",O[s.key])("ngIfElse",p)}}function zh(l,g){if(1&l&&(e.TgZ(0,"nz-tag",61),e._UZ(1,"span",62),e.qZA()),2&l){const s=e.oxw().ngIf,p=e.oxw(3).$implicit;e.Q6J("nzTooltipTitle",p[s.key])}}function F2(l,g){if(1&l&&e._UZ(0,"cvc-empty-value",55),2&l){const s=e.oxw().ngIf;e.Q6J("cvcEmptyCategory",s.emptyValueCategory||"unspecified")}}function C4(l,g){if(1&l&&(e.TgZ(0,"td",46),e.YNc(1,zh,2,1,"nz-tag",59),e.YNc(2,F2,1,1,"ng-template",null,60,e.W1O),e.qZA()),2&l){const s=g.ngIf,p=e.MAs(3),O=e.oxw(3).$implicit;let Ce;e.Q6J("nzAlign",null!==(Ce=s.align)&&void 0!==Ce?Ce:"left")("nzLeft",s.fixedLeft||!1)("nzRight",s.fixedRight||!1),e.xp6(1),e.Q6J("ngIf",O[s.key])("ngIfElse",p)}}function Th(l,g){1&l&&e.GkF(0)}const Mh=function(l,g){return{$implicit:l,emphasize:g}};function z4(l,g){if(1&l&&(e.ynx(0),e.YNc(1,Th,1,0,"ng-container",51),e.ALo(2,"isArray"),e.ALo(3,"ngrxPush"),e.BQk()),2&l){const s=g.ngIf,p=e.oxw().ngIf,O=e.MAs(3),Ce=e.MAs(5);let ft;e.xp6(1),e.Q6J("ngTemplateOutlet",e.lcZ(2,2,s)?O:Ce)("ngTemplateOutletContext",e.WLB(6,Mh,s,null==(ft=e.lcZ(3,4,p.filter.changes))?null:ft.value))}}function bh(l,g){1&l&&e.GkF(0)}function T4(l,g){1&l&&(e.ynx(0),e._uU(1,", "),e.BQk())}function Sh(l,g){if(1&l&&(e.ynx(0),e.YNc(1,bh,1,0,"ng-container",51),e.YNc(2,T4,2,0,"ng-container",10),e.BQk()),2&l){const s=g.$implicit,p=g.last,O=e.oxw(2).emphasize;e.oxw();const Ce=e.MAs(5);e.xp6(1),e.Q6J("ngTemplateOutlet",Ce)("ngTemplateOutletContext",e.WLB(3,Mh,s,O)),e.xp6(1),e.Q6J("ngIf",!p)}}function M4(l,g){if(1&l&&(e.ynx(0),e.YNc(1,Sh,3,6,"ng-container",8),e.BQk()),2&l){const s=e.oxw().$implicit;e.xp6(1),e.Q6J("ngForOf",s)}}function b4(l,g){if(1&l&&e.YNc(0,M4,2,1,"ng-container",50),2&l){const s=g.$implicit;e.oxw();const p=e.MAs(7);e.Q6J("ngIf",s.length>0)("ngIfElse",p)}}function N2(l,g){if(1&l&&(e._UZ(0,"span",67),e.ALo(1,"highlightTypeahead")),2&l){const s=g.$implicit,p=g.emphasize,O=e.oxw().ngIf;e.Q6J("innerHtml",e.xi3(1,1,O.objectKey?s[O.objectKey]:s,p),e.oJD)}}function Eh(l,g){if(1&l&&e._UZ(0,"cvc-empty-value",55),2&l){const s=e.oxw().ngIf;e.Q6J("cvcEmptyCategory",s.emptyValueCategory||"unspecified")}}function xh(l,g){if(1&l&&(e.TgZ(0,"td",63),e.YNc(1,z4,4,9,"ng-container",50),e.YNc(2,b4,1,2,"ng-template",null,64,e.W1O),e.YNc(4,N2,2,4,"ng-template",null,65,e.W1O),e.YNc(6,Eh,1,1,"ng-template",null,66,e.W1O),e.qZA()),2&l){const s=g.ngIf,p=e.MAs(7),O=e.oxw(3).$implicit;let Ce;e.Q6J("nzAlign",null!==(Ce=s.align)&&void 0!==Ce?Ce:"left")("nzLeft",s.fixedLeft||!1)("nzRight",s.fixedRight||!1),e.xp6(1),e.Q6J("ngIf",O[s.key])("ngIfElse",p)}}function Yc(l,g){if(1&l&&(e.ynx(0),e.YNc(1,fh,1,4,"td",42),e.ALo(2,"guardType"),e.YNc(3,_h,8,4,"td",43),e.ALo(4,"guardType"),e.YNc(5,Ch,4,5,"td",43),e.ALo(6,"guardType"),e.YNc(7,C4,4,5,"td",43),e.ALo(8,"guardType"),e.YNc(9,xh,8,5,"td",44),e.ALo(10,"guardType"),e.BQk()),2&l){const s=e.oxw().$implicit,p=e.oxw(3);e.xp6(1),e.Q6J("ngIf",e.xi3(2,5,s,p.colGuards.isSelectCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(4,8,s,p.colGuards.isEntityTagCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(6,11,s,p.colGuards.isEnumTagCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(8,14,s,p.colGuards.isTextTagCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(10,17,s,p.colGuards.isDefaultCol))}}function n1(l,g){if(1&l&&(e.ynx(0),e.YNc(1,Yc,11,20,"ng-container",10),e.BQk()),2&l){const s=g.$implicit;e.xp6(1),e.Q6J("ngIf",!s.hidden)}}function Dh(l,g){if(1&l&&(e.TgZ(0,"tr",41),e.YNc(1,n1,2,1,"ng-container",8),e.qZA()),2&l){const s=e.oxw().ngrxLet;e.xp6(1),e.Q6J("ngForOf",s)}}function S4(l,g){1&l&&(e.TgZ(0,"tbody"),e.YNc(1,Dh,2,1,"ng-template",40),e.qZA())}function Xd(l,g){1&l&&e._UZ(0,"span",75)}function o1(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"span",76),e.NdJ("click",function(){e.CHM(s),e.oxw(2);const O=e.MAs(3),Ce=e.oxw().filter;return O.value="",e.KtG(Ce.changes.next({key:Ce.key,value:null}))}),e.qZA()}}function Rp(l,g){if(1&l&&(e.YNc(0,Xd,1,0,"span",73),e.YNc(1,o1,1,0,"span",74)),2&l){e.oxw();const s=e.MAs(3);e.Q6J("ngIf",!s.value),e.xp6(1),e.Q6J("ngIf",s.value)}}function fd(l,g){if(1&l){const s=e.EpF();e.ynx(0),e.TgZ(1,"nz-input-group",69)(2,"input",70,71),e.NdJ("nzFilterChange",function(O){e.CHM(s);const Ce=e.oxw().filter;return e.KtG(Ce.changes.next({key:Ce.key,value:O}))}),e.qZA()(),e.YNc(4,Rp,2,2,"ng-template",null,72,e.W1O),e.BQk()}if(2&l){const s=e.MAs(5),p=e.oxw().filter;e.xp6(1),e.Q6J("nzSuffix",s),e.xp6(1),e.Q6J("placeholder",p.placeholder)("ngModel",p.defaultValue)}}function Oh(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"nz-input-number-group",77)(1,"nz-input-number",78,71),e.NdJ("ngModelChange",function(O){e.CHM(s);const Ce=e.oxw().filter;return e.KtG(Ce.changes.next({key:Ce.key,value:O}))}),e.qZA()()}if(2&l){const s=e.oxw().filter;e.xp6(1),e.Q6J("nzPlaceHolder",s.placeholder)("ngModel",s.defaultValue)("nzMin",1)("nzStep",1)}}function Vp(l,g){if(1&l&&(e.YNc(0,fd,6,3,"ng-container",50),e.YNc(1,Oh,3,4,"ng-template",null,68,e.W1O)),2&l){const s=g.filter,p=e.MAs(2);e.Q6J("ngIf",void 0===s.inputType||"default"===s.inputType)("ngIfElse",p)}}const ep=function(){return[6,6]};function tp(l,g){1&l&&(e.TgZ(0,"nz-row",79)(1,"nz-col")(2,"span"),e._uU(3,"Use checkboxes to select or deselect Variants"),e.qZA()()()),2&l&&e.Q6J("nzGutter",e.DdM(1,ep))}function wh(l,g){1&l&&(e.TgZ(0,"nz-tag",90),e._UZ(1,"i",91),e.TgZ(2,"span"),e._uU(3,"Loading\u2026"),e.qZA()())}const np=function(l){return{$implicit:l}};function E4(l,g){if(1&l&&(e.TgZ(0,"nz-tag",94),e._UZ(1,"span",95),e.TgZ(2,"span",96),e._uU(3),e.qZA()()),2&l){e.oxw();const s=e.MAs(4),p=e.oxw().ngrxLet;e.xp6(2),e.Q6J("nzTooltipTitle",s)("nzTooltipTitleContext",e.VKq(3,np,p.query)),e.xp6(1),e.hij(" Query Error",p.query.length>1?"s":""," ")}}function x4(l,g){if(1&l&&(e.TgZ(0,"nz-tag",94)(1,"span",96)(2,"span",97)(3,"strong"),e._uU(4),e.qZA()()()()),2&l){e.oxw();const s=e.MAs(4),p=e.oxw().ngrxLet;e.xp6(1),e.Q6J("nzTooltipTitle",s)("nzTooltipTitleContext",e.VKq(3,np,p.network)),e.xp6(3),e.hij(" Network Error",p.query.length>1?"s":""," ")}}function D4(l,g){if(1&l&&(e.TgZ(0,"div"),e._uU(1),e.qZA()),2&l){const s=g.$implicit;e.xp6(1),e.hij(" ",s.message," ")}}function Ph(l,g){1&l&&e.YNc(0,D4,2,1,"div",8),2&l&&e.Q6J("ngForOf",g.$implicit)}function O4(l,g){if(1&l&&(e.ynx(0),e.YNc(1,E4,4,5,"nz-tag",92),e.YNc(2,x4,5,5,"nz-tag",92),e.YNc(3,Ph,1,1,"ng-template",null,93,e.W1O),e.BQk()),2&l){const s=e.oxw().ngrxLet;e.xp6(1),e.Q6J("ngIf",s.query),e.xp6(1),e.Q6J("ngIf",s.network)}}function w4(l,g){if(1&l&&(e.ynx(0),e.YNc(1,O4,5,2,"ng-container",10),e.BQk()),2&l){const s=g.ngrxLet;e.xp6(1),e.Q6J("ngIf",s)}}function P4(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"div",98)(1,"nz-checkbox-group",99),e.NdJ("ngModelChange",function(O){e.CHM(s);const Ce=e.oxw(2);return e.KtG(Ce.onPreferenceChange$.next(O))}),e.ALo(2,"ngrxPush"),e.qZA()()}if(2&l){const s=e.oxw(2);e.xp6(1),e.Q6J("ngModel",e.lcZ(2,1,s.setPreference$))}}function I4(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"nz-row",79)(1,"nz-col",80),e.YNc(2,wh,4,0,"nz-tag",81),e.ALo(3,"ngrxPush"),e.ALo(4,"ngrxPush"),e._UZ(5,"cvc-no-more-rows",82),e.ALo(6,"ngrxPush"),e.qZA(),e.TgZ(7,"nz-col",80),e.YNc(8,w4,2,1,"ng-container",3),e.qZA(),e.TgZ(9,"nz-col",80),e._UZ(10,"cvc-table-counts2",83),e.qZA(),e.TgZ(11,"nz-col",84)(12,"nz-button-group")(13,"button",85),e.NdJ("click",function(){e.CHM(s);const O=e.oxw();return e.KtG(O.onResetFilter$.next())}),e._UZ(14,"span",86),e.qZA(),e.TgZ(15,"button",87),e._UZ(16,"span",88),e.qZA()(),e.YNc(17,P4,3,3,"ng-template",null,89,e.W1O),e.qZA()()}if(2&l){const s=e.MAs(18),p=e.oxw();e.Q6J("nzGutter",8),e.xp6(2),e.Q6J("ngIf",e.lcZ(3,7,p.loading$)&&e.lcZ(4,9,p.isFetchMore$)),e.xp6(3),e.Q6J("cvcShowTag",e.lcZ(6,11,p.noMoreRows$)),e.xp6(3),e.Q6J("ngrxLet",p.queryError$),e.xp6(2),e.Q6J("cvcTableCountsConnection",p.connection$),e.xp6(5),e.Q6J("nzPopoverContent",s)("nzPopoverTrigger","click")}}const Ih=function(){return[]},Ah=function(){return{x:"800px",y:"200px"}};let Bp=((Hc=class{constructor(g,s,p){this.queryGQL=g,this.apollo=s,this.cdr=p,this.cvcSelectedIdsChange=new e.vpe,this.isScrolling=!1,this.colGuards=Fp,this.onFetchMore$=new E.x,this.onPreferenceChange$=new Be.X([]),this.onResetFilter$=new E.x,this.onRowSelected$=new E.x,this.onScroll$=new Be.X("stop"),this.onSetSelectedRow$=new Be.X(new Set),this.queryError$=new E.x,this.queryRequest$=new E.x,this.queryResult$=new Qi.t(1),this.isFetchMore$=new Be.X(!1),this.noMoreRows$=new Be.X(!1),this.scrollToIndex$=new E.x,this.tableConfig=new ud;const O=(0,Do.a)(this.tableConfig.getFilterStreams()),Ce=(0,Do.a)(this.tableConfig.getSortStreams()).pipe((0,vt.h)(ft=>ft.filter(vn=>null!==vn.value).length<=1));this.refetch$=(0,Do.a)([Ce,O]).pipe((0,S.U)(([ft,vn])=>({query:"refetch",sort:ft,filter:vn}))),this.fetchMore$=this.onFetchMore$.pipe((0,S.U)(ft=>({query:"fetchMore",fetchMore:{...ft}}))),(0,Q.T)(this.refetch$,this.fetchMore$).pipe((0,Cs.b)(50),(0,zn.t)(this)).subscribe(ft=>{const vn=this.getQueryVars(ft);this.queryRef?(this.queryError$.next({}),"refetch"===ft.query?(this.isFetchMore$.next(!1),this.queryRef.refetch(vn).then(Sn=>{(Sn.error||Sn.errors)&&this.queryError$.next(this.getRequestErrors(Sn))}).then(()=>{this.scrollToIndex$.next(0)})):(this.isFetchMore$.next(!0),this.queryRef.fetchMore({variables:vn}).then(Sn=>{(Sn.error||Sn.errors)&&this.queryError$.next(this.getRequestErrors(Sn))}))):(this.isFetchMore$.next(!1),this.queryError$.next({}),this.queryRef=this.queryGQL.watch(vn),this.queryRef.valueChanges.pipe((0,zn.t)(this)).subscribe(Sn=>{this.queryResult$.next(Sn),(Sn.error||Sn.errors)&&this.queryError$.next(this.getRequestErrors(Sn))}))}),this.loading$=this.queryResult$.pipe((0,si.j)("loading"),(0,ze.x)()),this.connection$=this.queryResult$.pipe((0,si.j)("data","browseVariants"),(0,vt.h)(No.ep)),this.pageInfo$=this.connection$.pipe((0,si.j)("pageInfo"),(0,vt.h)(No.ep)),this.row$=(0,Do.a)([this.connection$.pipe((0,si.j)("edges"),(0,vt.h)(No.ep),(0,S.U)(ft=>ft.map(vn=>vn.node))),this.onSetSelectedRow$]).pipe((0,S.U)(([ft,vn])=>ft.map(Sn=>{if(Sn)return{...Sn,variant:{__typename:"Variant",id:Sn.id,name:Sn.name,link:Sn.link},feature:{__typename:"Feature",id:Sn.featureId,name:Sn.featureName,link:Sn.featureLink},selected:vn.has(Sn.id)}}))),this.col$=new Be.X(this.tableConfig.get()),this.setPreference$=this.col$.pipe((0,S.U)(ft=>this.getColPrefsFromTableConfig(ft))),this.onPreferenceChange$.pipe((0,ni.M)(this.col$),(0,S.U)(([ft,vn])=>this.getTableConfigFromColPrefs(ft,vn)),(0,zn.t)(this)).subscribe(ft=>{this.col$.next(ft)}),this.onSetTableFilter$=new Be.X([]),this.onSetTableFilter$.pipe((0,zn.t)(this)).subscribe(ft=>{const vn=this.col$.getValue();ft.forEach(Sn=>{const yo=vn.find(fi=>fi.key===Sn.key);if(void 0!==yo.filter.inputType){const fi=yo.filter.options[0];if(null===Sn.value)return yo.filter.options=[{...fi,value:null}],void yo.filter.changes.next(Sn);if(Array.isArray(Sn.value)&&0===Sn.value.length)return yo.filter.options=[{...fi,value:null}],void yo.filter.changes.next({...Sn,value:null});let Ii;Array.isArray(Sn.value)?Sn.value.length>0&&(Ii=Sn.value[0]):Ii=Sn.value;const Sa=yo.filter.typename;if(!Sa||!Ii)return void console.error(`variant-manager requires column config '${yo.key}' provide a typename for cvcTablePrefs Input to set its filter`);const Xa=this.getEntityName(Sa,Ii);if(!Xa)return;yo.filter.options=[{...fi,value:Xa}],yo.filter.changes.next({...Sn,value:Xa})}else Jd(yo)&&yo.filter.changes.next(Sn)})}),this.onSetTablePref$=new Be.X([]),this.onSetTablePref$.pipe((0,ni.M)(this.setPreference$),(0,S.U)(([ft,vn])=>{const Sn=[];return ft.forEach(yo=>{let fi=vn.find(Ii=>Ii.value===yo.value);fi?Sn.push({...fi,...yo}):console.warn(`variant-manager onSetTablePref$ received updated preferences for column '${yo.value}', but a column with that key could not be found.`)}),Sn}),(0,zn.t)(this)).subscribe(ft=>{this.onPreferenceChange$.next(ft)}),this.onRowSelected$.pipe((0,ni.M)(this.onSetSelectedRow$),(0,zn.t)(this)).subscribe(([ft,vn])=>{ft.selected?vn.add(ft.id):vn.delete(ft.id),this.onSetSelectedRow$.next(vn),this.cvcSelectedIdsChange.next(Array.from(vn))}),this.onScroll$.pipe((0,S.U)(ft=>"stop"!==ft),(0,ze.x)(),(0,zn.t)(this)).subscribe(ft=>{this.isScrolling=ft,this.cdr.detectChanges()}),this.onScroll$.pipe((0,vt.h)(ft=>"bottom"===ft),(0,ni.M)(this.pageInfo$),(0,S.U)(([ft,vn])=>vn),(0,zn.t)(this)).subscribe(ft=>{ft.hasNextPage||(this.noMoreRows$.next(!0),this.cdr.detectChanges(),setInterval(()=>this.noMoreRows$.next(!1)))})}ngAfterViewInit(){this.onResetFilter$.pipe((0,ni.M)((0,Gi.of)(this.tableConfig.get())),(0,zn.t)(this)).subscribe(([g,s])=>{const p=[];s.forEach(O=>{if(ld(O)&&O.sort.changes&&O.sort.changes.next({key:O.key,value:O.sort.default??null}),Jd(O)){const Ce=O.filter.options.find(ft=>1==ft.byDefault)?.value;O.filter.changes&&O.filter.changes.next({key:O.key,value:Ce||null})}p.push(O)}),this.col$.next(p)})}getQueryVars(g){const s=this.getQueryFilterParams(g);return{...this.getQuerySortParams(g),...s,...g.fetchMore}}getQuerySortParams(g){if(!g.sort)return;const p=g.sort.find(Ce=>null!==Ce.value);return p?{sortBy:{column:this.getSortColumnFromColKey(p.key),direction:"ascend"===p.value?Fn.SrV.Asc:Fn.SrV.Desc||void 0}}:void 0}getQueryFilterParams(g){let s={};return g.filter&&g.filter.forEach(p=>{s[D2[p.key]||p.key]=null===p.value||""===p.value?void 0:p.value}),s}getRequestErrors(g){return{query:g.errors,network:g.error}}getTableConfigFromColPrefs(g,s){return s.forEach(p=>{if(ah.find(Ce=>Ce===p.key))return;const O=g.find(Ce=>Ce.value===p.key);O&&(p.hidden=!O?.checked)}),[...s]}getColPrefsFromTableConfig(g){let s=[];return g.forEach(p=>{ah.find(O=>O===p.key)||s.push({label:p.tooltip||p.label,value:p.key,checked:!p.hidden})}),s}getSortColumnFromColKey(g){return sh[g]}getEntityName(g,s){const p={id:`${g}:${s}`,fragment:sc.Ps`
                fragment Linkable${g}Entity on ${g} {
                  id
                  name
                  link
                }`},O=this.apollo.client.readFragment(p);if(O)return O.name;console.error(`variant-manager onSetTableFilter$ could not find cached entity ${g}:${s} to populate input filter`)}trackByIndex(g,s){return s?.id}ngOnChanges(g){if(g.cvcTableSettings){const s=g.cvcTableSettings.currentValue;void 0!==s&&this.onSetTableFilter$.next(s.filters)}if(g.cvcSelectedIds){const s=g.cvcSelectedIds.currentValue,p=new Set;void 0!==s&&s.forEach(O=>p.add(O)),this.onSetSelectedRow$.next(p)}}}).\u0275fac=function(g){return new(g||Hc)(e.Y36(Fn.XQi),e.Y36(Pr._M),e.Y36(e.sBO))},Hc.\u0275cmp=e.Xpm({type:Hc,selectors:[["cvc-variant-manager"]],inputs:{cvcTableSettings:"cvcTableSettings",cvcSelectedIds:"cvcSelectedIds"},outputs:{cvcSelectedIdsChange:"cvcSelectedIdsChange"},features:[e.TTD],decls:16,vars:27,consts:[["nzSize","small",3,"nzTitle","nzExtra"],["cvcTableScroller","",3,"nzData","cvcTableScrollerQueryRef","cvcTableScrollerPageInfo","cvcTableScrollerToIndex","nzScroll","nzVirtualForTrackBy","nzVirtualItemSize","nzSize","nzFrontPagination","nzShowPagination","nzLoading","cvcTableScrollerOnScroll","cvcTableScrollerOnFetch"],["virtualTable",""],[4,"ngrxLet"],["columnFilterInput",""],["cardTitle",""],["extraTemplate",""],[1,"col-header-row"],[4,"ngFor","ngForOf"],[1,"filter-row"],[4,"ngIf"],[3,"nzShowCheckbox","nzWidth","nzAlign","nzLeft","nzRight",4,"ngIf"],[3,"nzColumnKey","nzAlign","nzWidth","nzLeft","nzRight","nzShowSort","nzSortFn","nzSortOrder","nzSortOrderChange",4,"ngIf"],["nz-tooltip","",3,"nzColumnKey","nzAlign","nzWidth","nzLeft","nzRight","nzTooltipTitle",4,"ngIf"],[3,"nzShowCheckbox","nzWidth","nzAlign","nzLeft","nzRight"],[3,"nzColumnKey","nzAlign","nzWidth","nzLeft","nzRight","nzShowSort","nzSortFn","nzSortOrder","nzSortOrderChange"],["nz-tooltip","",1,"col-header-label",3,"nzTooltipTitle"],["nz-tooltip","",3,"nzColumnKey","nzAlign","nzWidth","nzLeft","nzRight","nzTooltipTitle"],[3,"nzColumnKey","nzAlign","nzWidth","nzLeft","nzRight",4,"ngIf"],[3,"nzColumnKey","nzWidth","nzAlign","nzLeft","nzRight",4,"ngIf"],["class","attribute-filter","nzCustomFilter","",3,"nzColumnKey","nzWidth","nzAlign","nzLeft","nzRight","nzShowSort","nzSortFn","nzSortOrder","nzShowFilter","nzFilterFn","nzSortOrderChange",4,"ngIf"],["class","attribute-filter","nzCustomFilter","",3,"nzColumnKey","nzWidth","nzAlign","nzLeft","nzRight","nzFilterFn",4,"ngIf"],[3,"nzColumnKey","nzAlign","nzWidth","nzLeft","nzRight"],[3,"nzColumnKey","nzWidth","nzAlign","nzLeft","nzRight"],[3,"cvcInputType","cvcPlaceholder","cvcModel","cvcModelChange",4,"ngIf"],[3,"cvcInputType","cvcPlaceholder","cvcModel","cvcModelChange"],["nzCustomFilter","",1,"attribute-filter",3,"nzColumnKey","nzWidth","nzAlign","nzLeft","nzRight","nzShowSort","nzSortFn","nzSortOrder","nzShowFilter","nzFilterFn","nzSortOrderChange"],["enumTableFilter",""],[3,"nzDropdownMenu","nzActive"],["enumTagFilterTrigger",""],["nz-icon","","nzType","filter","nzTheme","fill"],["enumFilterMenu","nzDropdownMenu"],[3,"cvcColumnKey","cvcFilterOptions","cvcOption","cvcOptionChange"],["nzCustomFilter","",1,"attribute-filter",3,"nzColumnKey","nzWidth","nzAlign","nzLeft","nzRight","nzFilterFn"],["nz-icon","","nzType","search"],["textTagFilterMenu","nzDropdownMenu"],[1,"ant-table-filter-dropdown"],[1,"custom-input-dropdown"],[3,"cvcPlaceholder","cvcModel","cvcModelChange"],[3,"cvcPlaceholder","cvcModel","cvcModelChange",4,"ngIf"],["nz-virtual-scroll",""],[1,"data-row"],[3,"nzChecked","nzAlign","nzLeft","nzRight","nzCheckedChange",4,"ngIf"],[3,"nzAlign","nzLeft","nzRight",4,"ngIf"],["class","default-col-type",3,"nzAlign","nzLeft","nzRight",4,"ngIf"],[3,"nzChecked","nzAlign","nzLeft","nzRight","nzCheckedChange"],[3,"nzAlign","nzLeft","nzRight"],["entityTagList",""],["entityTag",""],["emptyEntityTagCell",""],[4,"ngIf","ngIfElse"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"cvcTagTemplate","cvcTagListConfig"],[3,"cvcCollectionTagConfig","cvcTagTemplate","cvcShowFullLabels"],[3,"cvcTruncateLabel","cvcLinkableEntity","cvcEmphasize","cvcShowPopover","cvcStatus","cvcFullWidth"],[3,"cvcEmptyCategory"],["cvcContext","compact",3,"cvcFullWidth","cvcAttrValue","cvcTooltip",4,"ngIf","ngIfElse"],["emptyEnumTagCell",""],["cvcContext","compact",3,"cvcFullWidth","cvcAttrValue","cvcTooltip"],["nz-tooltip","","style","width: 100%; cursor: help; color: #595959",3,"nzTooltipTitle",4,"ngIf","ngIfElse"],["emptyTextTagCell",""],["nz-tooltip","",2,"width","100%","cursor","help","color","#595959",3,"nzTooltipTitle"],["nz-icon","","nzType","align-left","nzTheme","outline"],[1,"default-col-type",3,"nzAlign","nzLeft","nzRight"],["staticList",""],["staticValue",""],["emptyDefaultCell",""],[3,"innerHtml"],["numericInput",""],["nzSize","small",3,"nzSuffix"],["nz-input","",3,"placeholder","ngModel","nzFilterChange"],["filterInput",""],["suffixIcon",""],["nz-icon","","nzType","search","style","color: #ddd",4,"ngIf"],["nz-icon","","class","ant-input-clear-icon","nzTheme","fill","nzType","close-circle",3,"click",4,"ngIf"],["nz-icon","","nzType","search",2,"color","#ddd"],["nz-icon","","nzTheme","fill","nzType","close-circle",1,"ant-input-clear-icon",3,"click"],["nzSize","small"],[2,"width","100%",3,"nzPlaceHolder","ngModel","nzMin","nzStep","ngModelChange"],[3,"nzGutter"],["nzFlex","auto"],["nzColor","processing",4,"ngIf"],[3,"cvcShowTag"],[3,"cvcTableCountsConnection"],["nzFlex","35px"],["nz-button","","type","button","nzType","default","nzSize","small",3,"click"],["nz-icon","","nzType","retweet","nzTheme","outline"],["nz-button","","nz-popover","","nzPopoverTitle","Visible Columns","type","button","nzType","default","nzSize","small",3,"nzPopoverContent","nzPopoverTrigger"],["nz-icon","","nzType","setting","nzTheme","outline"],["prefsPopover",""],["nzColor","processing"],["nz-icon","","nzType","sync","nzSpin",""],["nzColor","error","style","margin-left: 12px",4,"ngIf"],["queryError",""],["nzColor","error",2,"margin-left","12px"],["nz-icon","","nzType","question-circle","nzTheme","outline"],["nz-tooltip","",2,"cursor","help",3,"nzTooltipTitle","nzTooltipTitleContext"],["nz-typography",""],[1,"prefs-popover"],[3,"ngModel","ngModelChange"]],template:function(g,s){if(1&g&&(e.TgZ(0,"nz-card",0)(1,"nz-table",1,2),e.NdJ("cvcTableScrollerOnScroll",function(O){return s.onScroll$.next(O)})("cvcTableScrollerOnFetch",function(O){return s.onFetchMore$.next(O)}),e.ALo(3,"ngrxPush"),e.ALo(4,"ngrxPush"),e.ALo(5,"ngrxPush"),e.ALo(6,"ngrxPush"),e.ALo(7,"ngrxPush"),e.YNc(8,Ka,5,2,"thead",3),e.YNc(9,S4,2,0,"tbody",3),e.qZA()(),e.YNc(10,Vp,3,2,"ng-template",null,4,e.W1O),e.YNc(12,tp,4,2,"ng-template",null,5,e.W1O),e.YNc(14,I4,19,13,"ng-template",null,6,e.W1O)),2&g){const p=e.MAs(13),O=e.MAs(15);e.Q6J("nzTitle",p)("nzExtra",O),e.xp6(1),e.Q6J("nzData",e.lcZ(3,15,s.row$)||e.DdM(25,Ih))("cvcTableScrollerQueryRef",s.queryRef)("cvcTableScrollerPageInfo",e.lcZ(4,17,s.pageInfo$))("cvcTableScrollerToIndex",e.lcZ(5,19,s.scrollToIndex$))("nzScroll",e.DdM(26,Ah))("nzVirtualForTrackBy",s.trackByIndex)("nzVirtualItemSize",28)("nzSize","small")("nzFrontPagination",!1)("nzShowPagination",!1)("nzLoading",e.lcZ(6,21,s.loading$)&&!e.lcZ(7,23,s.isFetchMore$)),e.xp6(7),e.Q6J("ngrxLet",s.col$),e.xp6(1),e.Q6J("ngrxLet",s.col$)}},dependencies:[a.sg,a.O5,a.tP,Qt.J,Xc,nn,Ie,br,D.P,qc.H,t.Fj,t.JJ,t.On,lo.eJ,To.ix,To.fY,de.w,et.dQ,R.t3,R.SK,ue.Ls,I.Zp,I.gB,I.ke,X.ZU,Vi.bd,ye.ub,Br.RR,lt,ie,Wo.lU,Go.N8,Go.qD,Go.Uo,Go._C,Go.h7,Go.Om,Go.p0,Go.$Z,Go.zu,Go.qn,Go.Ql,Go.UX,Go.g6,An.j,eo.SY,Bc,p4,h4,zs,ts.Do,fr.A,Aa,lo.fM],styles:["[_nghost-%COMP%]{display:block}nz-card[_ngcontent-%COMP%]:first-of-type     .ant-card-body{padding:0;margin-top:1px}.table-info[_ngcontent-%COMP%]{margin-left:.5rem}tr.col-header-row[_ngcontent-%COMP%]   th.ant-table-cell[_ngcontent-%COMP%]{white-space:nowrap}tr.col-header-row[_ngcontent-%COMP%]   th.ant-table-cell.align-right[_ngcontent-%COMP%]     .ant-table-column-title{text-align:right}tr.filter-row[_ngcontent-%COMP%]   th.ant-table-cell[_ngcontent-%COMP%]{padding:3px 4px}tr.filter-row[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   nz-filter-trigger[_ngcontent-%COMP%]     span.ant-dropdown-trigger{margin-left:0;padding-right:12px}tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell[_ngcontent-%COMP%]{white-space:nowrap}tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell[_ngcontent-%COMP%]   .anticon.attribute-icon[_ngcontent-%COMP%]{color:#595959}tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell.overflow-ellipsis[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis}tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell.button-cell[_ngcontent-%COMP%]{padding:0}tr.data-row[_ngcontent-%COMP%]   td.align-right[_ngcontent-%COMP%], tr.col-header-row[_ngcontent-%COMP%]   th.ant-table-cell[_ngcontent-%COMP%]   .align-right[_ngcontent-%COMP%], tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell[_ngcontent-%COMP%]   .align-right[_ngcontent-%COMP%], tr.filter-row[_ngcontent-%COMP%]   th.ant-table-cell[_ngcontent-%COMP%]   .align-right[_ngcontent-%COMP%]{text-align:right}tr.data-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-of-type{padding-left:6px}tr.data-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-of-type   cvc-entity-tag[_ngcontent-%COMP%]{margin-left:6px}td.default-col-type[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis}.ant-table-filter-dropdown[_ngcontent-%COMP%]{padding:8px}.prefs-popover[_ngcontent-%COMP%]     nz-checkbox-group:first-of-type label{display:block}.prefs-popover[_ngcontent-%COMP%]     nz-checkbox-group:first-of-type label span{display:inline-block}"],changeDetection:0}),Hc);var md;function Ps(l,g){if(1&l&&(e.ynx(0),e.TgZ(1,"span"),e._uU(2),e.qZA(),e.BQk()),2&l){const s=g.ngrxLet;e.xp6(2),e.Oqu(s.message)}}function L2(l,g){if(1&l&&e._uU(0),2&l){const s=e.oxw();e.Oqu(s.successMessage)}}Bp=(0,V.gn)([(0,zn.c)()],Bp);const k2=function(){return[0,0]};let A4=((md=class{set cvcFeatureId(g){g&&this.featureId$.next(g)}set cvcFeatureName(g){g&&this.featureName$.next(g)}set cvcSearchString(g){g&&this.searchString$.next(g)}constructor(g,s){this.query=g,this.errors=s,this.cvcOnCreate=new e.vpe,this.form=new t.nJ({}),this.model={name:""},this.formLayout="horizontal",this.options={formState:{formLayout:this.formLayout}},this.onSubmit$=new E.x,this.searchString$=new Be.X(void 0),this.featureName$=new Be.X(void 0),this.featureId$=new Be.X(void 0),this.formMessageDisplay$=new Be.X({message:"Variant does not exist, create it?"}),this.queryMutator=new oi.U(this.errors),this.addVariantMutator=new oi.U(this.errors),this.minNameLength=3,this.fields=[{key:"featureId",hide:!0,props:{required:!0}},{key:"name",hide:!0,props:{minLength:this.minNameLength,required:!0}},{key:"organizationId",type:"org-submit-button",props:{submitLabel:"Add Variant"}}],this.featureId$.pipe((0,zn.t)(this)).subscribe(p=>{this.model.featureId=p}),this.searchString$.pipe((0,zn.t)(this)).subscribe(p=>{this.model.name=p,this.formMessageDisplay$.next(void 0===p||void 0!==p&&p.length<this.minNameLength?{message:`New Variant name must be at least ${this.minNameLength} characters.`}:{message:`Variant '${p}' does not exist, create it?`})}),this.onSubmit$.pipe((0,zn.t)(this)).subscribe(p=>{console.log("variant-quick-add form model submitted.",p),this.submitVariant(p)})}submitVariant(g){g.name&&g.featureId?this.mutationState=this.addVariantMutator.mutate(this.query,{name:g.name,featureId:g.featureId,organizationId:g.organizationId},{},s=>{console.log("variant-quick-add submit data callback",s),s.createVariant&&(this.formMessageDisplay$.next({message:void 0}),setTimeout(()=>{s&&s.createVariant&&this.cvcOnCreate.next({id:s.createVariant.variant.id,new:s.createVariant.new})},1e3))}):console.error("variant-quick-add form submitVariant requires model with valid name and featureId.")}ngOnChanges(g){if(g.cvcFeatureId){const s=g.cvcFeatureId.currentValue;this.featureId$.next(s),this.model={...this.model,featureId:s}}g.cvcFeatureName&&this.featureName$.next(g.cvcFeatureName.currentValue)}}).\u0275fac=function(g){return new(g||md)(e.Y36(Fn.MCG),e.Y36(jo.Y))},md.\u0275cmp=e.Xpm({type:md,selectors:[["cvc-variant-quick-add-form"]],inputs:{cvcFeatureId:"cvcFeatureId",cvcFeatureName:"cvcFeatureName",cvcSearchString:"cvcSearchString"},outputs:{cvcOnCreate:"cvcOnCreate"},features:[e.TTD],decls:8,vars:10,consts:[[4,"ngrxLet"],["entityType","Variant",3,"mutationState","successMessage"],["success",""],[3,"formGroup","ngSubmit"],[3,"nzGutter"],["nzSpan","24"],[3,"form","fields","model","options","modelChange"]],template:function(g,s){if(1&g&&(e.YNc(0,Ps,3,1,"ng-container",0),e.TgZ(1,"cvc-form-submission-status-display",1),e.YNc(2,L2,1,1,"ng-template",null,2,e.W1O),e.TgZ(4,"form",3),e.NdJ("ngSubmit",function(){return s.onSubmit$.next(s.model)}),e.TgZ(5,"nz-row",4)(6,"nz-col",5)(7,"formly-form",6),e.NdJ("modelChange",function(O){return s.model=O}),e.qZA()()()()()),2&g){const p=e.MAs(3);e.Q6J("ngrxLet",s.formMessageDisplay$),e.xp6(1),e.Q6J("mutationState",s.mutationState)("successMessage",p),e.xp6(3),e.Q6J("formGroup",s.form),e.xp6(1),e.Q6J("nzGutter",e.DdM(9,k2)),e.xp6(2),e.Q6J("form",s.form)("fields",s.fields)("model",s.model)("options",s.options)}},dependencies:[zi.F,_.T7,t._Y,t.JL,lo.eJ,R.t3,R.SK,t.sg],encapsulation:2,changeDetection:0}),md);A4=(0,V.gn)([(0,zn.c)()],A4);const Fh=["optionTemplates"],F4=function(l,g){return{show:l,hide:g}};function R2(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"nz-col",9)(1,"button",10),e.NdJ("click",function(){e.CHM(s);const O=e.oxw();return e.KtG(O.onShowMgrClick$.next())}),e._UZ(2,"span",11),e.ALo(3,"ngrxPush"),e.ALo(4,"ngrxPush"),e._uU(5," Manager "),e.qZA()()}if(2&l){const s=e.oxw();e.xp6(2),e.Q6J("ngClass",e.WLB(6,F4,e.lcZ(3,2,s.showMgr$),!e.lcZ(4,4,s.showMgr$)))("nzType","caret-right")}}function V2(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"nz-col",12)(1,"cvc-variant-manager",13),e.NdJ("cvcSelectedIdsChange",function(O){e.CHM(s);const Ce=e.oxw();return e.KtG(Ce.onPopulate$.next(O))}),e.ALo(2,"ngrxPush"),e.qZA()()}if(2&l){const s=e.oxw();e.xp6(1),e.Q6J("cvcSelectedIds",e.lcZ(2,1,s.onVid$))}}function B2(l,g){if(1&l&&(e.ynx(0),e.TgZ(1,"em"),e._UZ(2,"span",20),e.ALo(3,"highlightTypeahead"),e.qZA(),e.BQk()),2&l){const s=e.oxw(2).$implicit,p=e.oxw().ngrxLet;e.xp6(2),e.Q6J("nzTooltipTitle",s.variantAliases.join(", "))("innerHtml",e.xi3(3,2,s.variantAliases.join(", "),p),e.oJD)}}function N4(l,g){1&l&&e._uU(0,"--")}function H2(l,g){if(1&l&&(e._UZ(0,"cvc-entity-tag",16),e.TgZ(1,"span",17)(2,"strong"),e._uU(3,"Aliases:"),e.qZA(),e.YNc(4,B2,4,5,"ng-container",18),e.YNc(5,N4,1,0,"ng-template",null,19,e.W1O),e.qZA()),2&l){const s=e.MAs(6),p=e.oxw().$implicit,O=e.oxw().ngrxLet;e.Q6J("cvcDisableLink",!0)("cvcCacheId",p.__typename+":"+p.id)("cvcEmphasize",O),e.xp6(4),e.Q6J("ngIf",p.variantAliases.length>0)("ngIfElse",s)}}function Y2(l,g){1&l&&(e.ynx(0),e.YNc(1,H2,7,5,"ng-template",null,15,e.W1O),e.BQk())}function Nh(l,g){if(1&l&&(e.ynx(0),e.YNc(1,Y2,3,0,"ng-container",14),e.ALo(2,"ngrxPush"),e.BQk()),2&l){const s=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,s.result$))}}function $2(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"div",21)(1,"cvc-entity-tag",22),e.NdJ("cvcOnClose",function(){const Ce=e.CHM(s).$implicit,ft=e.oxw();return e.KtG(ft.onTagClose$.next(Ce.nzValue))}),e.qZA()()}if(2&l){const s=g.$implicit,p=e.oxw();e.xp6(1),e.Q6J("cvcCacheId","Variant:"+s.nzValue)("cvcContext",p.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",p.props.isMultiSelect?"default":"closeable")}}function U2(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"cvc-variant-quick-add-form",23),e.NdJ("cvcOnCreate",function(O){e.CHM(s);const Ce=e.oxw();return e.KtG(Ce.onSelectOrCreate(O))}),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.qZA()}if(2&l){const s=g.$implicit,p=e.oxw();e.Q6J("cvcSearchString",s)("cvcFeatureId",e.lcZ(1,3,p.onFeatureId$))("cvcFeatureName",e.lcZ(2,5,p.onFeatureName$))}}const j2=function(){return[6,6]},Q2=bo(ko(),Oo());let Lh=(()=>{class l extends Q2{constructor(s,p,O,Ce){super(),this.taq=s,this.tq=p,this.featureQuery=O,this.changeDetectorRef=Ce,this.onModel$=new ot.y,this.defaultOptions={props:{label:"Variant",placeholder:"Search Variants",requireFeature:!0,requireFeaturePlaceholderFn:ft=>`Search ${ft} Variants`,requireFeaturePrompt:"Select a Feature to search its Variants",isMultiSelect:!1,entityName:{singular:"Variant",plural:"Variants"},showManagerBtn:!1,minSearchStrLength:0}},this.onFeatureName$=new Be.X(void 0),this.onVid$=new Qi.t,this.onShowMgrClick$=new E.x,this.showMgr$=this.onShowMgrClick$.pipe((0,wr.R)((ft,vn)=>!ft,!1))}ngAfterViewInit(){this.configureBaseField(),this.configureEntitySelectField({typeaheadQuery:this.taq,tagQuery:this.tq,getTypeaheadVarsFn:this.getTypeaheadVarsFn,getTypeaheadResultsFn:this.getTypeaheadResultsFn,getTagQueryVarsFn:this.getTagQueryVarsFn,getTagQueryResultsFn:this.getTagQueryResultsFn,getSelectedItemOptionFn:this.getSelectedItemOptionFn,getSelectOptionsFn:this.getSelectOptionsFn,changeDetectorRef:this.changeDetectorRef,selectOpen$:this.selectOpen$,selectComponent:this.selectComponent,minSearchStrLength:this.field.props.minSearchStrLength}),this.state&&this.state.formReady$?this.state.formReady$.pipe((0,vt.h)(s=>s),(0,es.q)(1),(0,zn.t)(this)).subscribe(s=>{this.configureField()}):this.configureField()}configureField(){this.configureStateConnections(),this.onVid$.pipe((0,zn.t)(this)).subscribe(),this.onVid$.next(this.formControl.value),this.onModel$=(0,Do.a)([this.onFeatureId$,this.onSearch$]).pipe((0,S.U)(([s,p])=>({featureId:s,name:p}))),this.onValueChange$.pipe((0,ni.M)(this.onVid$),(0,zn.t)(this)).subscribe(([s,p])=>{Array.isArray(s)&&this.onVid$.next(s)})}configureStateConnections(){if(this.state&&this.props.requireFeature){if(!this.state?.fields.featureId$)return void console.error(`${this.field.id} requireFeature is set, but no featureId$ subject found on state.`);this.onFeatureId$=this.state.fields.featureId$,this.onFeatureId$.pipe((0,zn.t)(this)).subscribe(s=>{this.onFeatureId(s)})}}getTypeaheadVarsFn(s){return{name:s,featureId:this.selectedFeatureId}}getTypeaheadResultsFn(s){return s.data.variants.nodes}getTagQueryVarsFn(s){return{variantId:s}}getTagQueryResultsFn(s){return s.data.variant}getSelectedItemOptionFn(s){return{value:s.id,label:s.name}}getSelectOptionsFn(s,p){return s.map((O,Ce)=>({label:p.get(Ce)||O.name,value:O.id}))}showAddBehavior(s,p){const O=s.toLowerCase();return s.length>=3&&!p.some(Ce=>Ce.name.toLowerCase()===O)}onSelectOrCreate(s){this.onPopulate$.next(s.id),this.props.isNewlyCreatedCallback&&this.props.isNewlyCreatedCallback(s.new)}onFeatureId(s){this.selectedFeatureId=s,!s&&this.props.requireFeature?(this.resetField(),this.props.description=this.props.requireFeaturePrompt,this.props.placeholder="Select a Variant",this.props.extraType="prompt",this.onFeatureName$.next(void 0)):s&&(this.props.description=void 0,this.props.extraType=void 0,bs(this.featureQuery.fetch({featureId:s},{fetchPolicy:"cache-first"})).then(({data:p})=>{p?.feature?.name?(this.props.placeholder=this.props.requireFeature?this.props.requireFeaturePlaceholderFn(p.feature.name):this.props.placeholder,this.onFeatureName$.next(p.feature.name)):console.error(`${this.field.id} could not fetch feature name for Feature:${s}.`)}))}}return l.\u0275fac=function(s){return new(s||l)(e.Y36(Fn.nSb),e.Y36(Fn.dDn),e.Y36(Fn.Ni),e.Y36(e.sBO))},l.\u0275cmp=e.Xpm({type:l,selectors:[["ng-component"]],viewQuery:function(s,p){if(1&s&&e.Gf(Fh,5,e.Rgc),2&s){let O;e.iGM(O=e.CRH())&&(p.optionTemplates=O)}},features:[e.qOj],decls:20,vars:41,consts:[[3,"nzGutter"],["nzFlex","auto"],["nz-tooltip","","nzTooltipTitle","Select a Feature to enable field.",3,"nzTooltipTrigger"],[3,"cvcAddEntity","cvcAddEntityModel","cvcAddEntityBehavior","cvcMinSearchStrLength","cvcSelectMode","cvcCustomTemplate","cvcFormControl","cvcFormlyAttributes","cvcEntityName","cvcPlaceholder","cvcResults","cvcDisabled","cvcOptions","cvcSelectOpen","cvcShowError","cvcLoading","cvcParamName","cvcOnSearch","cvcOnOpenChange","cvcOnModelChange"],["nzFlex","50px",4,"ngIf"],["nzSpan","24","class","manager-drawer",4,"ngIf"],[4,"ngrxLet"],["selectedTemplate",""],["addVariant",""],["nzFlex","50px"],["type","button","nz-button","","nzBlock","",1,"manager-button",3,"click"],["nz-icon","",3,"ngClass","nzType"],["nzSpan","24",1,"manager-drawer"],[3,"cvcSelectedIds","cvcSelectedIdsChange"],[4,"ngFor","ngForOf"],["optionTemplates",""],[3,"cvcDisableLink","cvcCacheId","cvcEmphasize"],["nz-typography","","nzType","secondary"],[4,"ngIf","ngIfElse"],["noAliases",""],["nz-typography","","nzType","secondary","nz-tooltip","",3,"nzTooltipTitle","innerHtml"],[1,"ant-select-selection-item-content"],[3,"cvcCacheId","cvcContext","cvcMode","cvcOnClose"],[3,"cvcSearchString","cvcFeatureId","cvcFeatureName","cvcOnCreate"]],template:function(s,p){if(1&s&&(e.TgZ(0,"nz-row",0)(1,"nz-col",1)(2,"span",2),e.ALo(3,"ngrxPush"),e.TgZ(4,"cvc-entity-select",3),e.NdJ("cvcOnSearch",function(Ce){return p.onSearch$.next(Ce)})("cvcOnOpenChange",function(Ce){return p.onOpenChange$.next(Ce)})("cvcOnModelChange",function(Ce){return p.props.change&&p.props.change(p.field,Ce)}),e.ALo(5,"ngrxPush"),e.ALo(6,"ngrxPush"),e.ALo(7,"ngrxPush"),e.ALo(8,"ngrxPush"),e.ALo(9,"ngrxPush"),e.ALo(10,"ngrxPush"),e.ALo(11,"ngrxPush"),e.qZA()()(),e.YNc(12,R2,6,9,"nz-col",4),e.YNc(13,V2,3,3,"nz-col",5),e.ALo(14,"ngrxPush"),e.qZA(),e.YNc(15,Nh,3,3,"ng-container",6),e.YNc(16,$2,2,3,"ng-template",null,7,e.W1O),e.YNc(18,U2,3,7,"ng-template",null,8,e.W1O)),2&s){const O=e.MAs(17),Ce=e.MAs(19);e.Q6J("nzGutter",e.DdM(40,j2)),e.xp6(2),e.Q6J("nzTooltipTrigger",p.props.requireFeature&&!e.lcZ(3,22,p.onFeatureId$)?"hover":null),e.xp6(2),e.Q6J("cvcAddEntity",Ce)("cvcAddEntityModel",e.lcZ(5,24,p.onModel$))("cvcAddEntityBehavior",p.showAddBehavior)("cvcMinSearchStrLength",p.props.minSearchStrLength)("cvcSelectMode",p.props.isMultiSelect?"multiple":"default")("cvcCustomTemplate",O)("cvcFormControl",p.formControl)("cvcFormlyAttributes",p.field)("cvcEntityName",p.props.entityName)("cvcPlaceholder",p.props.placeholder)("cvcResults",e.lcZ(6,26,p.result$))("cvcDisabled",p.props.requireFeature&&!e.lcZ(7,28,p.onFeatureId$))("cvcOptions",e.lcZ(8,30,p.selectOption$))("cvcSelectOpen",e.lcZ(9,32,p.selectOpen$))("cvcShowError",p.showError)("cvcLoading",e.lcZ(10,34,p.isLoading$))("cvcParamName",e.lcZ(11,36,p.onFeatureName$)),e.xp6(8),e.Q6J("ngIf",p.props.showManagerBtn),e.xp6(1),e.Q6J("ngIf",e.lcZ(14,38,p.showMgr$)),e.xp6(2),e.Q6J("ngrxLet",p.onSearch$)}},styles:[".typeahead-match[_ngcontent-%COMP%]{font-weight:700}.hide-dropdown[_ngcontent-%COMP%]{display:none}  nz-input-group{border-color:#d9d9d9!important}"],changeDetection:0}),l})();const Ja={types:[{name:"variant-select",wrappers:["form-field"],component:Lh},{name:"variant-multi-select",wrappers:["form-field"],component:Lh,defaultOptions:{props:{label:"Variants",isMultiSelect:!0}}}]};let kh=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[a.ez,jt,Te.x,Lo,Po.g,tt.s,sr,Cc,xr,gl,ml.M,ic.y,_.X0.forChild(Ja),t.u5,yt.L,H.ic,To.sL,N.U5,R.Jb,ue.PV,I.o7,_i.Qp,He.LV,X.ZJ,To.sL,Vi.vh,ye.Wr,Br.b1,N.U5,R.Jb,ue.PV,I.o7,Me,Wo.$6,Go.HQ,An.X,eo.cg,X.ZJ,t.UX]}),l})();e.B6R(Lh,function(){return[a.mk,a.sg,a.O5,an,Qt.J,lo.eJ,To.ix,de.w,et.dQ,R.t3,R.SK,ue.Ls,X.ZU,eo.SY,Bp,A4]},function(){return[fr.A,lo.fM]});const G2=["optionTemplates"];function L4(l,g){if(1&l&&(e.ynx(0),e.TgZ(1,"em"),e._UZ(2,"span",8),e.ALo(3,"highlightTypeahead"),e.qZA(),e.BQk()),2&l){const s=e.oxw(2).$implicit,p=e.oxw().ngrxLet;e.xp6(2),e.Q6J("innerHtml",e.xi3(3,1,s.soid,p),e.oJD)}}function W2(l,g){if(1&l&&(e._UZ(0,"cvc-entity-tag",5),e.TgZ(1,"span",6),e.YNc(2,L4,4,4,"ng-container",7),e.qZA()),2&l){const s=e.oxw().$implicit,p=e.oxw().ngrxLet;e.Q6J("cvcDisableLink",!0)("cvcCacheId",s.__typename+":"+s.id)("cvcEmphasize",p),e.xp6(2),e.Q6J("ngIf",s.soid)}}function k4(l,g){1&l&&(e.ynx(0),e.YNc(1,W2,3,4,"ng-template",null,4,e.W1O),e.BQk())}function R4(l,g){if(1&l&&(e.ynx(0),e.YNc(1,k4,3,0,"ng-container",3),e.ALo(2,"ngrxPush"),e.BQk()),2&l){const s=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,s.result$))}}function Hp(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"div",9)(1,"cvc-entity-tag",10),e.NdJ("cvcOnClose",function(){const Ce=e.CHM(s).$implicit,ft=e.oxw();return e.KtG(ft.onTagClose$.next(Ce.nzValue))}),e.qZA()()}if(2&l){const s=g.$implicit,p=e.oxw();e.xp6(1),e.Q6J("cvcCacheId","VariantType:"+s.nzValue)("cvcContext",p.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",p.props.isMultiSelect?"default":"closeable")}}const Rh=bo(ko(),Oo());let Z2=(()=>{class l extends Rh{constructor(s,p,O){super(),this.taq=s,this.tq=p,this.changeDetectorRef=O,this.defaultOptions={props:{entityName:{singular:"VariantType",plural:"VariantTypes"},isMultiSelect:!1,placeholders:{default:"Search Variant Types",multiDefault:"Select VariantType(s)"},description:'Add one or more variant types from the <a href="http://www.sequenceontology.org/browser/" target="_blank">Sequence Ontology</a> (e.g., missense, loss-of-function). Be specific as possible, avoid the addition of root concepts, and use the sequence_variant tree of the sequence ontology.'}},this.placeholder$=new Be.X(this.defaultOptions.props.placeholders.default)}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEntitySelectField({typeaheadQuery:this.taq,typeaheadParam$:void 0,tagQuery:this.tq,getTypeaheadVarsFn:this.getTypeaheadVarsFn,getTypeaheadResultsFn:this.getTypeaheadResultsFn,getTagQueryVarsFn:this.getTagQueryVarsFn,getTagQueryResultsFn:this.getTagQueryResultsFn,getSelectedItemOptionFn:this.getSelectedItemOptionFn,getSelectOptionsFn:this.getSelectOptionsFn,changeDetectorRef:this.changeDetectorRef,selectOpen$:this.selectOpen$,selectComponent:this.selectComponent}),this.configurePlaceholders()}configureStateConnections(){}configurePlaceholders(){}getTypeaheadVarsFn(s){return{name:s}}getTypeaheadResultsFn(s){return s.data.variantTypeTypeahead}getTagQueryVarsFn(s){return{id:s}}getTagQueryResultsFn(s){return s.data.variantType}getSelectedItemOptionFn(s){return{value:s.id,label:s.name}}getSelectOptionsFn(s,p){return s.map((O,Ce)=>({label:p.get(Ce)||O.name,value:O.id}))}}return l.\u0275fac=function(s){return new(s||l)(e.Y36(Fn.jmY),e.Y36(Fn._nE),e.Y36(e.sBO))},l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-variant-type-select"]],viewQuery:function(s,p){if(1&s&&e.Gf(G2,5,e.Rgc),2&s){let O;e.iGM(O=e.CRH())&&(p.optionTemplates=O)}},features:[e.qOj],decls:8,vars:19,consts:[[3,"cvcSelectMode","cvcCustomTemplate","cvcFormControl","cvcFormlyAttributes","cvcEntityName","cvcPlaceholder","cvcResults","cvcOptions","cvcShowError","cvcLoading","cvcOnSearch","cvcOnOpenChange","cvcOnModelChange"],[4,"ngrxLet"],["selectedTemplate",""],[4,"ngFor","ngForOf"],["optionTemplates",""],[3,"cvcDisableLink","cvcCacheId","cvcEmphasize"],["nz-typography","","nzType","secondary"],[4,"ngIf"],["nz-typography","","nzType","secondary",3,"innerHtml"],[1,"ant-select-selection-item-content"],[3,"cvcCacheId","cvcContext","cvcMode","cvcOnClose"]],template:function(s,p){if(1&s&&(e.TgZ(0,"cvc-entity-select",0),e.NdJ("cvcOnSearch",function(Ce){return p.onSearch$.next(Ce)})("cvcOnOpenChange",function(Ce){return p.onOpenChange$.next(Ce)})("cvcOnModelChange",function(Ce){return p.props.change&&p.props.change(p.field,Ce)}),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.ALo(3,"ngrxPush"),e.ALo(4,"ngrxPush"),e.qZA(),e.YNc(5,R4,3,3,"ng-container",1),e.YNc(6,Hp,2,3,"ng-template",null,2,e.W1O)),2&s){const O=e.MAs(7);e.Q6J("cvcSelectMode",p.props.isMultiSelect?"multiple":"default")("cvcCustomTemplate",O)("cvcFormControl",p.formControl)("cvcFormlyAttributes",p.field)("cvcEntityName",p.props.entityName)("cvcPlaceholder",e.lcZ(1,11,p.placeholder$))("cvcResults",e.lcZ(2,13,p.result$))("cvcOptions",e.lcZ(3,15,p.selectOption$))("cvcShowError",p.showError)("cvcLoading",e.lcZ(4,17,p.isLoading$)),e.xp6(5),e.Q6J("ngrxLet",p.onSearch$)}},dependencies:[a.sg,a.O5,lo.eJ,X.ZU,an,Qt.J,lo.fM,fr.A],changeDetection:0}),l})();const V4={types:[{name:"variant-type-select",wrappers:["form-field"],component:Z2,defaultOptions:{props:{label:"Variant Type"}}},{name:"variant-type-multi-select",wrappers:["form-field"],component:Z2,defaultOptions:{props:{isMultiSelect:!0,label:"Variant Types"}}}]};let B4=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[a.ez,t.UX,_.X0.forChild(V4),yt.L,To.sL,He.LV,Wo.$6,_i.Qp,ue.PV,I.o7,R.Jb,eo.cg,Re.zf,N.U5,H.ic,X.ZJ,An.X,Lo,jt,tt.s,Te.x]}),l})(),H4=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[a.ez,Co,Bi,Rt,Bn,Hi,ve,Ai,qr,zr,tc,Ur,Uo,Zc,s1,La,mu,yu,O1,_a,Z1,yp,Tp,Ds,td,Dp,Op,ad,xn,Ji,Xu,kh,B4]}),l})();var r1;function Vh(l,g){if(1&l&&e._uU(0),2&l){const s=e.oxw();e.hij(" ",s.props.addFormTitle,"\n")}}const $c=function(){return[6,6]};let Bh=((r1=class extends _.n2{constructor(){super(),this.contentTemplate$=new Qi.t}ngAfterViewInit(){this.field.props&&this.field.props.addFormContent?this.contentTemplate$.next(this.field.props.addFormContent):console.error(`${this.field.id} add-entity-form wrapper failed to find parent field's props.addFormContent TemplateRef.`)}}).\u0275fac=function(g){return new(g||r1)},r1.\u0275cmp=e.Xpm({type:r1,selectors:[["cvc-add-entity-form-wrapper"]],features:[e.qOj],decls:10,vars:7,consts:[[3,"nzGutter"],["nzFlex","auto"],["fieldComponent",""],["nzFlex","20px"],["type","button","nz-button","","nzType","primary","nzSize","default","nzShape","circle","nz-popover","",3,"disabled","nzPopoverTitle","nzPopoverContent"],["nz-icon","","nzType","plus-circle","nzTheme","outline"],["titleTemplate",""]],template:function(g,s){if(1&g&&(e.TgZ(0,"nz-row",0)(1,"nz-col",1),e.GkF(2,null,2),e.qZA(),e.TgZ(4,"nz-col",3)(5,"button",4),e.ALo(6,"ngrxPush"),e._UZ(7,"span",5),e.qZA()()(),e.YNc(8,Vh,1,1,"ng-template",null,6,e.W1O)),2&g){const p=e.MAs(9);e.Q6J("nzGutter",e.DdM(6,$c)),e.xp6(5),e.Q6J("disabled",null==s.field.props?null:s.field.props.disabled)("nzPopoverTitle",p)("nzPopoverContent",e.lcZ(6,4,s.contentTemplate$))}},dependencies:[To.ix,de.w,et.dQ,Wo.lU,ue.Ls,R.t3,R.SK,lo.fM],styles:[".add-button[_ngcontent-%COMP%]{font-size:24px;color:#cfcfdf}"],changeDetection:0}),r1);Bh=(0,V.gn)([(0,zn.c)()],Bh);const K2={wrappers:[{name:"add-entity-form",component:Bh}]};let Hh=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[a.ez,_.X0.forChild(K2),To.sL,Wo.$6,ue.PV,R.Jb]}),l})();function J2(l,g){1&l&&e._UZ(0,"formly-field",2),2&l&&e.Q6J("field",g.$implicit)}const q2={size:"default"},I0={wrappers:[{name:"form-card",component:(()=>{class l extends _.n2{get errorState(){return this.showError?"error":""}constructor(){super(),this.wrapperOptions={...q2}}ngOnInit(){this.props.formCardOptions&&(this.wrapperOptions={...this.wrapperOptions,...this.props.formCardOptions})}}return l.\u0275fac=function(s){return new(s||l)},l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-form-card"]],features:[e.qOj],decls:2,vars:3,consts:[[3,"nzTitle","nzSize"],[3,"field",4,"ngFor","ngForOf"],[3,"field"]],template:function(s,p){if(1&s&&(e.TgZ(0,"nz-card",0),e.YNc(1,J2,1,1,"formly-field",1),e.qZA()),2&s){let O;e.Q6J("nzTitle",p.wrapperOptions.title)("nzSize",null!==(O=p.wrapperOptions.size)&&void 0!==O?O:"default"),e.xp6(1),e.Q6J("ngForOf",p.field.fieldGroup)}},dependencies:[a.sg,_.cw,Vi.bd]}),l})()}]};let Y4=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[a.ez,t.u5,_.X0.forChild(I0),R.Jb,Vi.vh,ye.Wr]}),l})();const op={wrappers:[{name:"form-footer",component:(()=>{class l extends _.n2{ngOnInit(){}}return l.\u0275fac=function(){let g;return function(p){return(g||(g=e.n5z(l)))(p||l)}}(),l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-form-footer"]],features:[e.qOj],decls:4,vars:0,consts:[[1,"form-footer"],["nzSpan","24",1,"submit-col"],["fieldComponent",""]],template:function(s,p){1&s&&(e.TgZ(0,"nz-row",0)(1,"nz-col",1),e.GkF(2,null,2),e.qZA()())},dependencies:[R.t3,R.SK],styles:[".form-footer[_ngcontent-%COMP%]{margin-top:1em;border-radius:8px;background-color:#f0f0f0;padding:1em}.submit-col[_ngcontent-%COMP%]{text-align:right}"],changeDetection:0}),l})()}]};let Yp=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[a.ez,R.Jb,_.X0.forChild(op)]}),l})();var F0=c(9333),$h=c(8125),ip=c(9382);let $4=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[a.ez,ue.PV,R.Jb,Vi.vh,ip.we,$h.q6,Ki.Ph,An.X,X.ZJ,_e.s]}),l})(),X2=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[a.ez,To.sL,Ld.Rt,Br.b1]}),l})();var ef=c(553);const U4={VALID:"success",INVALID:"error",PENDING:"processing",DISABLED:"default"};let Uh=(()=>{class l{constructor(){this.tagColor="default"}set cvcFormControlStatus(s){this._status=s,this.tagColor=s?U4[s]:"default"}get cvcFormControlStatus(){return this._status}}return l.\u0275fac=function(s){return new(s||l)},l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-form-status-tag"]],inputs:{cvcFormControlStatus:"cvcFormControlStatus"},decls:3,vars:4,consts:[[3,"nzColor"]],template:function(s,p){1&s&&(e.TgZ(0,"nz-tag",0),e._uU(1),e.ALo(2,"lowercase"),e.qZA()),2&s&&(e.Q6J("nzColor",p.tagColor),e.xp6(1),e.hij(" ",p.cvcFormControlStatus?e.lcZ(2,2,p.cvcFormControlStatus):"UNKNOWN","\n"))},dependencies:[An.j,a.i8]}),l})();function rp(l,g){if(1&l&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&l){const s=e.oxw(2).ctrl;e.xp6(1),e.hij(" ",s.value," ")}}function tf(l,g){1&l&&(e.TgZ(0,"span",8),e._uU(1," undefined "),e.qZA())}function j4(l,g){if(1&l&&(e.TgZ(0,"nz-list-item")(1,"nz-list-item-meta")(2,"nz-list-item-meta-title"),e._uU(3),e.qZA(),e.TgZ(4,"nz-list-item-meta-description"),e.YNc(5,rp,2,1,"span",5),e.YNc(6,tf,2,0,"span",6),e.qZA()(),e.TgZ(7,"nz-list-item-extra"),e._UZ(8,"cvc-form-status-tag",7),e.qZA()()),2&l){const s=e.oxw(),p=s.key,O=s.ctrl;e.xp6(3),e.hij(" ",p," "),e.xp6(2),e.Q6J("ngIf",O.value),e.xp6(1),e.Q6J("ngIf",!O.value),e.xp6(2),e.Q6J("cvcFormControlStatus",O.status)}}function Q4(l,g){}const G4=function(l,g){return{key:l,ctrl:g}};function nf(l,g){if(1&l&&e.YNc(0,Q4,0,0,"ng-template",12),2&l){const s=g.$implicit;e.oxw(3);const p=e.MAs(3);e.Q6J("ngTemplateOutlet",p)("ngTemplateOutletContext",e.WLB(2,G4,s.key,s.value))}}function sp(l,g){if(1&l&&(e.TgZ(0,"strong"),e._uU(1),e.qZA()),2&l){const s=e.oxw(2).key;e.xp6(1),e.Oqu(s)}}function rf(l,g){if(1&l&&(e.TgZ(0,"nz-list-item")(1,"nz-card",9)(2,"nz-list",10),e.YNc(3,nf,1,5,null,4),e.ALo(4,"keyvalue"),e.qZA()(),e.YNc(5,sp,2,1,"ng-template",null,11,e.W1O),e.qZA()),2&l){const s=e.oxw(),p=s.key,O=s.ctrl;e.xp6(1),e.Q6J("nzTitle",p),e.xp6(2),e.Q6J("ngForOf",e.lcZ(4,2,O.controls))}}function N0(l,g){if(1&l&&(e.YNc(0,j4,9,4,"nz-list-item",5),e.YNc(1,rf,7,4,"nz-list-item",5)),2&l){const s=g.ctrl;e.Q6J("ngIf",!s.controls),e.xp6(1),e.Q6J("ngIf",s.controls)}}function sf(l,g){}function af(l,g){if(1&l&&e.YNc(0,sf,0,0,"ng-template",12),2&l){const s=g.$implicit;e.oxw();const p=e.MAs(3);e.Q6J("ngTemplateOutlet",p)("ngTemplateOutletContext",e.WLB(2,G4,s.key,s.value))}}function cf(l,g){if(1&l&&(e.ynx(0),e.TgZ(1,"nz-list",2),e.YNc(2,N0,2,2,"ng-template",null,3,e.W1O),e.qZA(),e.YNc(4,af,1,5,null,4),e.ALo(5,"keyvalue"),e.BQk()),2&l){const s=g.ngIf;e.xp6(4),e.Q6J("ngForOf",e.lcZ(5,1,s.controls))}}function lf(l,g){1&l&&e._uU(0," No AbstractFormControl provided. ")}let uf=(()=>{class l{set cvcAbstractControl(s){if(!s)throw new Error("cvc-form-debug-field-list requires valid cvcFormControl Input.");this._cvcFormControl=s,this.formControl=s}get cvcFormControl(){return this._cvcFormControl}constructor(){}ngOnInit(){}}return l.\u0275fac=function(s){return new(s||l)},l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-form-debug-field-list"]],inputs:{cvcAbstractControl:"cvcAbstractControl"},decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["noFormControl",""],["nzSize","small"],["ctrlTemplateRef",""],[4,"ngFor","ngForOf"],[4,"ngIf"],["style","padding: 0px 4px; color: white; background-color: #ccc",4,"ngIf"],[3,"cvcFormControlStatus"],[2,"padding","0px 4px","color","white","background-color","#ccc"],["nzSize","small",2,"width","100%",3,"nzTitle"],["nzSize","small",2,"padding","0"],["cardExtra",""],[3,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(s,p){if(1&s&&(e.YNc(0,cf,6,3,"ng-container",0),e.YNc(1,lf,1,0,"ng-template",null,1,e.W1O)),2&s){const O=e.MAs(2);e.Q6J("ngIf",p.formControl)("ngIfElse",O)}},dependencies:[a.sg,a.O5,a.tP,Vi.bd,Ki.n_,Ki.AA,Ki.yi,Ki.IO,Ki.Pb,Ki.yw,Uh,a.Nd],styles:["[_nghost-%COMP%]     nz-card .ant-card-body{padding:6px 0}"]}),l})();var gd;function df(l,g){if(1&l&&(e.ynx(0),e._UZ(1,"ngx-json-viewer",9),e.BQk()),2&l){const s=e.oxw();e.xp6(1),e.Q6J("json",s.watchModel)}}function W4(l,g){if(1&l&&(e.ynx(0),e.TgZ(1,"nz-descriptions",10)(2,"nz-descriptions-item",11),e._UZ(3,"cvc-form-status-tag",12),e.qZA(),e.TgZ(4,"nz-descriptions-item",13),e._uU(5),e.qZA(),e.TgZ(6,"nz-descriptions-item",14),e._uU(7),e.qZA(),e.TgZ(8,"nz-descriptions-item",15),e._uU(9),e.qZA(),e.TgZ(10,"nz-descriptions-item",16),e._uU(11),e.qZA(),e.TgZ(12,"nz-descriptions-item",17),e._uU(13),e.qZA()(),e.BQk()),2&l){const s=e.oxw();e.xp6(1),e.Q6J("nzColumn",1),e.xp6(2),e.Q6J("cvcFormControlStatus",null==s.cvcForm?null:s.cvcForm.status),e.xp6(2),e.hij(" ",null==s.cvcForm?null:s.cvcForm.pending," "),e.xp6(2),e.hij(" ",null==s.cvcForm?null:s.cvcForm.touched," "),e.xp6(2),e.hij(" ",null==s.cvcForm?null:s.cvcForm.valid," "),e.xp6(2),e.hij(" ",null==s.cvcForm?null:s.cvcForm.dirty," "),e.xp6(2),e.hij(" ",null==s.cvcForm?null:s.cvcForm.enabled," ")}}function jh(l,g){if(1&l&&(e.ynx(0),e._UZ(1,"cvc-form-debug-field-list",18),e.BQk()),2&l){const s=e.oxw();e.xp6(1),e.Q6J("cvcAbstractControl",s.cvcForm)}}function pf(l,g){1&l&&(e.ynx(0),e._uU(1," State Content "),e.BQk())}function $p(l,g){if(1&l&&(e.TgZ(0,"nz-row")(1,"nz-col",19),e._uU(2," Form Details "),e.qZA(),e.TgZ(3,"nz-col",20),e._UZ(4,"cvc-form-status-tag",12),e.qZA()()),2&l){const s=e.oxw();e.xp6(4),e.Q6J("cvcFormControlStatus",null==s.cvcForm?null:s.cvcForm.status)}}let Qh=((gd=class{constructor(g){this.cdr=g,this.selectedIndex=0}ngOnInit(){if(!this.cvcForm)throw new Error("cvc-form-debug requires valid cvcForm Input.");this.valueChange$=new Be.X(this.cvcForm.value),this.statusChange$=new Be.X(this.cvcForm.status),this.formChange$=Ti([this.statusChange$,this.valueChange$]),this.watchModel=this.cvcModel,this.subscriptions=[this.cvcForm.valueChanges.subscribe(g=>{this.watchModel={...this.cvcModel},this.valueChange$.next(g)}),this.cvcForm.statusChanges.subscribe(g=>{this.statusChange$.next(g)}),this.formChange$.subscribe(g=>{this.cdr.detectChanges()})]}}).\u0275fac=function(g){return new(g||gd)(e.Y36(e.sBO))},gd.\u0275cmp=e.Xpm({type:gd,selectors:[["cvc-form-debug"]],inputs:{cvcForm:"cvcForm",cvcModel:"cvcModel"},decls:14,vars:7,consts:[["nzSize","small","nzBordered","true",3,"nzTitle"],["nzSize","small",3,"nzSelectedIndex","nzSelectedIndexChange"],["nzTitle","Model"],["nzTitle","Controls"],["nzTitle","State"],["nzTitle","Form Status"],[3,"ngSwitch"],[4,"ngSwitchCase"],["cardTitle",""],[3,"json"],["nzBordered","","nzSize","small",3,"nzColumn"],["nzTitle","status"],[3,"cvcFormControlStatus"],["nzTitle","pending"],["nzTitle","touched"],["nzTitle","valid"],["nzTitle","dirty"],["nzTitle","enabled"],[3,"cvcAbstractControl"],["nzFlex","2"],["nzFlex","3",1,"form-status-col"]],template:function(g,s){if(1&g&&(e.TgZ(0,"nz-card",0)(1,"nz-card-tab")(2,"nz-tabset",1),e.NdJ("nzSelectedIndexChange",function(O){return s.selectedIndex=O}),e._UZ(3,"nz-tab",2)(4,"nz-tab",3)(5,"nz-tab",4)(6,"nz-tab",5),e.qZA()(),e.ynx(7,6),e.YNc(8,df,2,1,"ng-container",7),e.YNc(9,W4,14,7,"ng-container",7),e.YNc(10,jh,2,1,"ng-container",7),e.YNc(11,pf,2,0,"ng-container",7),e.BQk(),e.qZA(),e.YNc(12,$p,5,1,"ng-template",null,8,e.W1O)),2&g){const p=e.MAs(13);e.Q6J("nzTitle",p),e.xp6(2),e.Q6J("nzSelectedIndex",s.selectedIndex),e.xp6(5),e.Q6J("ngSwitch",s.selectedIndex),e.xp6(1),e.Q6J("ngSwitchCase",0),e.xp6(1),e.Q6J("ngSwitchCase",3),e.xp6(1),e.Q6J("ngSwitchCase",1),e.xp6(1),e.Q6J("ngSwitchCase",2)}},dependencies:[a.RF,a.n9,R.t3,R.SK,Vi.bd,Vi._i,ip.xH,ip.xw,$h.R7,$h.uj,_e.Y,uf,Uh],styles:["[_nghost-%COMP%]{display:block}.form-status-col[_ngcontent-%COMP%]{text-align:right}.form-status-col[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]:last-child{margin-right:0}"],changeDetection:0}),gd);var vd;function hf(l,g){if(1&l&&(e.TgZ(0,"nz-col",4),e._UZ(1,"cvc-form-debug",5),e.qZA()),2&l){const s=e.oxw();e.Q6J("nzSpan",8),e.xp6(1),e.Q6J("cvcForm",s.form)("cvcModel",s.model)}}Qh=(0,V.gn)([(0,zn.c)({arrayName:"subscriptions"})],Qh);const ff=function(){return[8,8]};let Gh=((vd=class extends _.n2{constructor(){super()}get errorState(){return this.showError?"error":""}ngOnInit(){this.props.showDevPanel=!ef.N.production&&(this.props.showDevPanel||false)}}).\u0275fac=function(g){return new(g||vd)},vd.\u0275cmp=e.Xpm({type:vd,selectors:[["cvc-form-layout-wrapper"]],features:[e.qOj],decls:5,vars:4,consts:[[3,"nzGutter"],[1,"form-col",3,"nzSpan"],["fieldComponent",""],["class","status-col",3,"nzSpan",4,"ngIf"],[1,"status-col",3,"nzSpan"],[3,"cvcForm","cvcModel"]],template:function(g,s){1&g&&(e.TgZ(0,"nz-row",0)(1,"nz-col",1),e.GkF(2,null,2),e.qZA(),e.YNc(4,hf,2,3,"nz-col",3),e.qZA()),2&g&&(e.Q6J("nzGutter",e.DdM(3,ff)),e.xp6(1),e.Q6J("nzSpan",s.props.showDevPanel?16:24),e.xp6(3),e.Q6J("ngIf",s.props.showDevPanel))},dependencies:[a.O5,R.t3,R.SK,Qh],changeDetection:0}),vd);Gh=(0,V.gn)([(0,zn.c)({arrayName:"subscriptions"})],Gh);const gf={wrappers:[{name:"form-layout",component:Gh}]};let Z4=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[a.ez,_.X0.forChild(gf),To.sL,Vi.vh,ue.PV,An.X,ip.we,Wo.$6,Ki.Ph,R.Jb,F0.h,X2,$4,_e.s]}),l})();function K4(l,g){if(1&l&&(e.TgZ(0,"nz-col",4),e._UZ(1,"formly-field",5),e.qZA()),2&l){const s=g.$implicit,p=e.oxw(2);let O;e.Q6J("nzSpan",null!==(O=p.wrapperOptions.span)&&void 0!==O?O:null),e.xp6(1),e.Q6J("field",s)}}function vf(l,g){if(1&l&&e.YNc(0,K4,2,2,"nz-col",3),2&l){const s=e.oxw();e.Q6J("ngForOf",s.field.fieldGroup)}}function L0(l,g){if(1&l&&(e.TgZ(0,"nz-col",8),e._UZ(1,"formly-field",5),e.qZA()),2&l){const s=g.$implicit,p=e.oxw(3);e.Q6J("nzFlex",p.wrapperOptions.flex),e.xp6(1),e.Q6J("field",s)}}function J4(l,g){if(1&l&&(e.ynx(0),e.YNc(1,L0,2,2,"nz-col",7),e.BQk()),2&l){const s=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",s.field.fieldGroup)}}function q4(l,g){if(1&l&&(e.TgZ(0,"nz-col",10),e._UZ(1,"formly-field",5),e.qZA()),2&l){const s=g.$implicit,p=e.oxw(3);let O,Ce,ft,vn,Sn,yo;e.Q6J("nzXs",null!==(O=p.wrapperOptions.responsive.xs)&&void 0!==O?O:null)("nzSm",null!==(Ce=p.wrapperOptions.responsive.sm)&&void 0!==Ce?Ce:null)("nzMd",null!==(ft=p.wrapperOptions.responsive.md)&&void 0!==ft?ft:null)("nzLg",null!==(vn=p.wrapperOptions.responsive.lg)&&void 0!==vn?vn:null)("nzXl",null!==(Sn=p.wrapperOptions.responsive.xl)&&void 0!==Sn?Sn:null)("nzXXl",null!==(yo=p.wrapperOptions.responsive.xxl)&&void 0!==yo?yo:null),e.xp6(1),e.Q6J("field",s)}}function k0(l,g){if(1&l&&(e.ynx(0),e.YNc(1,q4,2,7,"nz-col",9),e.BQk()),2&l){const s=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",s.field.fieldGroup)}}function Up(l,g){if(1&l&&(e.TgZ(0,"nz-col",4),e._UZ(1,"formly-field",5),e.qZA()),2&l){const s=g.$implicit,p=g.index,O=e.oxw(3);e.Q6J("nzSpan",O.wrapperOptions.spanIndexed[p]),e.xp6(1),e.Q6J("field",s)}}function _f(l,g){if(1&l&&(e.ynx(0),e.YNc(1,Up,2,2,"nz-col",3),e.BQk()),2&l){const s=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",s.field.fieldGroup)}}function yf(l,g){if(1&l&&(e.TgZ(0,"nz-col",10),e._UZ(1,"formly-field",5),e.qZA()),2&l){const s=g.$implicit,p=g.index,O=e.oxw(3);let Ce,ft,vn,Sn,yo,fi;e.Q6J("nzXs",null!==(Ce=O.wrapperOptions.responsiveIndexed[p].xs)&&void 0!==Ce?Ce:null)("nzSm",null!==(ft=O.wrapperOptions.responsiveIndexed[p].sm)&&void 0!==ft?ft:null)("nzMd",null!==(vn=O.wrapperOptions.responsiveIndexed[p].md)&&void 0!==vn?vn:null)("nzLg",null!==(Sn=O.wrapperOptions.responsiveIndexed[p].lg)&&void 0!==Sn?Sn:null)("nzXl",null!==(yo=O.wrapperOptions.responsiveIndexed[p].xl)&&void 0!==yo?yo:null)("nzXXl",null!==(fi=O.wrapperOptions.responsiveIndexed[p].xxl)&&void 0!==fi?fi:null),e.xp6(1),e.Q6J("field",s)}}function Wh(l,g){if(1&l&&(e.ynx(0),e.YNc(1,yf,2,7,"nz-col",9),e.BQk()),2&l){const s=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",s.field.fieldGroup)}}function Cf(l,g){if(1&l&&(e.TgZ(0,"nz-col",8),e._UZ(1,"formly-field",5),e.qZA()),2&l){const s=g.$implicit,p=g.index,O=e.oxw(3);e.Q6J("nzFlex",O.wrapperOptions.flexIndexed[p]),e.xp6(1),e.Q6J("field",s)}}function qa(l,g){if(1&l&&(e.ynx(0),e.YNc(1,Cf,2,2,"nz-col",7),e.BQk()),2&l){const s=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",s.field.fieldGroup)}}function ap(l,g){if(1&l&&(e.ynx(0),e.YNc(1,J4,2,1,"ng-container",6),e.YNc(2,k0,2,1,"ng-container",6),e.YNc(3,_f,2,1,"ng-container",6),e.YNc(4,Wh,2,1,"ng-container",6),e.YNc(5,qa,2,1,"ng-container",6),e.BQk()),2&l){const s=e.oxw();e.xp6(1),e.Q6J("ngIf",s.wrapperOptions.flex),e.xp6(1),e.Q6J("ngIf",s.wrapperOptions.responsive),e.xp6(1),e.Q6J("ngIf",s.wrapperOptions.spanIndexed),e.xp6(1),e.Q6J("ngIf",s.wrapperOptions.responsiveIndexed),e.xp6(1),e.Q6J("ngIf",s.wrapperOptions.flexIndexed)}}const Kr={gutter:[8,8],span:24},jp={wrappers:[{name:"form-row",component:(()=>{class l extends _.n2{constructor(){super(),this.wrapperOptions={...Kr},this.topMargin="0"}ngOnInit(){this.props.formRowOptions&&(this.wrapperOptions={...this.wrapperOptions,...this.props.formRowOptions}),this.topMargin=Array.isArray(this.wrapperOptions.gutter)?this.wrapperOptions.gutter[1]>0?this.wrapperOptions.gutter[1]/2+"px":"0":this.wrapperOptions.gutter&&this.wrapperOptions.gutter>0?this.wrapperOptions.gutter+"px":"0"}}return l.\u0275fac=function(s){return new(s||l)},l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-form-row"]],features:[e.qOj],decls:5,vars:4,consts:[[1,"form-row-wrapped",3,"nzGutter"],["defaultCol",""],[4,"ngIf","ngIfElse"],[3,"nzSpan",4,"ngFor","ngForOf"],[3,"nzSpan"],[3,"field"],[4,"ngIf"],[3,"nzFlex",4,"ngFor","ngForOf"],[3,"nzFlex"],[3,"nzXs","nzSm","nzMd","nzLg","nzXl","nzXXl",4,"ngFor","ngForOf"],[3,"nzXs","nzSm","nzMd","nzLg","nzXl","nzXXl"]],template:function(s,p){if(1&s&&(e.TgZ(0,"div")(1,"nz-row",0),e.YNc(2,vf,1,1,"ng-template",null,1,e.W1O),e.YNc(4,ap,6,5,"ng-container",2),e.qZA()()),2&s){const O=e.MAs(3);let Ce;e.uIk("style","margin-top: "+p.topMargin,e.Ckj),e.xp6(1),e.Q6J("nzGutter",null!==(Ce=p.wrapperOptions.gutter)&&void 0!==Ce?Ce:null),e.xp6(3),e.Q6J("ngIf",p.wrapperOptions.flex||p.wrapperOptions.flexIndexed||p.wrapperOptions.spanIndexed||p.wrapperOptions.responsive||p.wrapperOptions.responsiveIndexed)("ngIfElse",O)}},dependencies:[a.sg,a.O5,R.t3,R.SK,_.cw],changeDetection:0}),l})()}]};let Ks=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[a.ez,t.UX,N.U5,R.Jb,_.X0.forChild(jp)]}),l})(),Qp=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[a.ez,Z4,Y4,Yp,Lo,Ks,Hh]}),l})(),yd=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({providers:[{provide:_.l7,multi:!0,useFactory:kt,deps:[i.gz]}],imports:[_.X0.forRoot(ct),t.UX,N.U5,se,Qp,_e.s,t.UX,_.X0,se,N.U5,Qp,H4]}),l})()},1022:(Et,be,c)=>{function t(w){let M={value:void 0,unset:void 0};return w&&w.trim().length>0?M.value=w.trim():M.unset=!0,M}function i(w){let M={value:void 0,unset:void 0};return void 0!==w?M.value=w:M.unset=!0,M}c.d(be,{aP:()=>j,li:()=>_,uP:()=>i,xt:()=>t});var _=(()=>((_=_||{})[_.NotApplicable=0]="NotApplicable",_[_.NoneFound=1]="NoneFound",_[_.Found=2]="Found",_))();const j=[{value:void 0,label:""},{value:"1",label:"1"},{value:"2",label:"2"},{value:"3",label:"3"},{value:"4",label:"4"},{value:"5",label:"5"},{value:"6",label:"6"},{value:"7",label:"7"},{value:"8",label:"8"},{value:"9",label:"9"},{value:"10",label:"10"},{value:"11",label:"11"},{value:"12",label:"12"},{value:"13",label:"13"},{value:"14",label:"14"},{value:"15",label:"15"},{value:"16",label:"16"},{value:"17",label:"17"},{value:"18",label:"18"},{value:"19",label:"19"},{value:"20",label:"20"},{value:"21",label:"21"},{value:"22",label:"22"},{value:"X",label:"X"},{value:"Y",label:"Y"},{value:"MT",label:"MT"}]},313:(Et,be,c)=>{c.d(be,{A4J:()=>na,A94:()=>zu,AIY:()=>aa,AMF:()=>js,AO2:()=>E,Aj5:()=>Sl,B0s:()=>ut,B97:()=>Wc,BQZ:()=>ae,BTF:()=>Wi,BYO:()=>Mc,Bk6:()=>lr,Bo4:()=>Pc,Cp0:()=>K,D9L:()=>pc,Del:()=>Du,DkJ:()=>qs,Dnw:()=>de,E1C:()=>Jl,E2B:()=>au,E8d:()=>M,EFm:()=>Ir,EH_:()=>$i,EwB:()=>nn,F3s:()=>Ue,F4e:()=>dl,FB1:()=>lt,FJi:()=>en,FNv:()=>Le,FOU:()=>is,GYx:()=>uc,Gbq:()=>yi,Gnp:()=>Ol,HPJ:()=>s1,HUC:()=>rn,HWg:()=>Ha,Hmr:()=>ys,IP1:()=>qo,IRu:()=>Ot,IZ6:()=>ei,JDX:()=>$t,Kk:()=>Vt,Kmw:()=>wr,L5n:()=>vs,L8L:()=>Uo,LHC:()=>fu,LLl:()=>el,LiH:()=>N1,Lr0:()=>xl,MCG:()=>_u,MNv:()=>A1,MPi:()=>C1,MYm:()=>Yi,Mgx:()=>F,MsG:()=>Se,N$2:()=>Cc,NQC:()=>xt,Ni:()=>ce,O0I:()=>b,O2u:()=>cl,OHm:()=>kr,OIL:()=>Yr,OfU:()=>I,P_b:()=>Fe,Pm:()=>Xr,QVn:()=>M1,Q_P:()=>c1,Qtd:()=>Qs,Qzn:()=>xr,R8F:()=>_1,R8w:()=>A,RTy:()=>L,RYL:()=>T1,Rdc:()=>sr,S8C:()=>nu,SAN:()=>mr,SrV:()=>kn,Sx0:()=>ze,T1I:()=>ol,TJt:()=>ks,TbJ:()=>fn,Tg0:()=>Zr,TiL:()=>Mn,Tq1:()=>go,Tt7:()=>Br,UIR:()=>ir,UWf:()=>ne,VGC:()=>Cn,VGG:()=>ao,VZq:()=>as,Vj7:()=>Td,WFw:()=>Aa,WGV:()=>wu,WOS:()=>Eu,WRV:()=>he,X5f:()=>Cr,XQi:()=>vu,Xft:()=>Ts,YMi:()=>ai,Y_K:()=>mu,Ybm:()=>Er,ZBX:()=>Fn,ZYZ:()=>Or,Zo2:()=>Gl,_3P:()=>N,_Wm:()=>w,_jb:()=>gi,_nE:()=>bl,aC3:()=>Tc,aw3:()=>Bs,bgg:()=>Rs,c$m:()=>cs,cEv:()=>Oa,cIw:()=>pa,cMj:()=>w1,ce2:()=>zi,d4o:()=>Ye,dDn:()=>Tl,dGO:()=>b1,da2:()=>Vr,db2:()=>Pu,eDl:()=>Ys,eY8:()=>Ee,ejK:()=>bc,enw:()=>yr,fow:()=>Ft,fwG:()=>ia,g0X:()=>Dl,ghc:()=>Ea,h01:()=>V,hVB:()=>ar,h_J:()=>Pa,huM:()=>Ae,i44:()=>je,iGM:()=>rc,iJT:()=>Il,iST:()=>W,io:()=>zr,iwm:()=>_,j28:()=>to,jMx:()=>Pl,jmY:()=>Ml,jw9:()=>gt,k7O:()=>Bn,kQf:()=>ea,kQl:()=>Ze,kqt:()=>S,l4w:()=>Wr,lYz:()=>tn,lcA:()=>qr,ld2:()=>rr,m$d:()=>Dd,m55:()=>B,mII:()=>sc,mdl:()=>a,mki:()=>yc,mpB:()=>_n,mq6:()=>ul,nSb:()=>zl,nnL:()=>gc,o71:()=>Zt,oRL:()=>ue,olA:()=>la,otH:()=>fr,pHu:()=>ha,pP7:()=>Me,pR8:()=>fc,q1D:()=>$a,q2A:()=>rl,q9q:()=>xa,qf4:()=>Qr,qgP:()=>hu,rZD:()=>ln,rzy:()=>Ai,s4d:()=>tu,sA8:()=>fl,sBY:()=>Sc,sLD:()=>Ed,sfv:()=>le,sjj:()=>S1,tI$:()=>$r,tI1:()=>Q,tJ6:()=>_s,tWC:()=>h1,td:()=>cr,ti:()=>Rr,tji:()=>ru,tw_:()=>Qo,u4i:()=>R,uBv:()=>j,uL8:()=>da,ubO:()=>Nu,vMt:()=>cc,vjc:()=>bd,vv6:()=>br,vxe:()=>u1,vz2:()=>oi,wJ2:()=>U,wRZ:()=>io,wbP:()=>sa,wg3:()=>I1,wkr:()=>Pn,wpb:()=>ie,xlL:()=>Pt,y1h:()=>me,yic:()=>at,yqR:()=>xd,z1I:()=>P,z8D:()=>Tu,zOE:()=>zc,z_7:()=>vl,zpu:()=>du,zwS:()=>Wl});var t=c(9111),i=c(5879),_=(()=>((_=_||{}).Na="NA",_.TierIii="TIER_III",_.TierIiLevelC="TIER_II_LEVEL_C",_.TierIiLevelD="TIER_II_LEVEL_D",_.TierIv="TIER_IV",_.TierILevelA="TIER_I_LEVEL_A",_.TierILevelB="TIER_I_LEVEL_B",_))(),a=(()=>((a=a||{}).DoesNotSupport="DOES_NOT_SUPPORT",a.Supports="SUPPORTS",a))(),N=(()=>((N=N||{}).AdverseResponse="ADVERSE_RESPONSE",N.Benign="BENIGN",N.BetterOutcome="BETTER_OUTCOME",N.LikelyBenign="LIKELY_BENIGN",N.LikelyOncogenic="LIKELY_ONCOGENIC",N.LikelyPathogenic="LIKELY_PATHOGENIC",N.Na="NA",N.Negative="NEGATIVE",N.Oncogenic="ONCOGENIC",N.Pathogenic="PATHOGENIC",N.PoorOutcome="POOR_OUTCOME",N.Positive="POSITIVE",N.ReducedSensitivity="REDUCED_SENSITIVITY",N.Resistance="RESISTANCE",N.Sensitivityresponse="SENSITIVITYRESPONSE",N.UncertainSignificance="UNCERTAIN_SIGNIFICANCE",N))(),R=(()=>((R=R||{}).AmpLevel="AMP_LEVEL",R.AssertionDirection="ASSERTION_DIRECTION",R.AssertionType="ASSERTION_TYPE",R.DiseaseName="DISEASE_NAME",R.EvidenceItemsCount="EVIDENCE_ITEMS_COUNT",R.Id="ID",R.Significance="SIGNIFICANCE",R.Status="STATUS",R.Summary="SUMMARY",R.TherapyName="THERAPY_NAME",R))(),j=(()=>((j=j||{}).Diagnostic="DIAGNOSTIC",j.Oncogenic="ONCOGENIC",j.Predictive="PREDICTIVE",j.Predisposing="PREDISPOSING",j.Prognostic="PROGNOSTIC",j))(),w=(()=>((w=w||{}).And="AND",w.Or="OR",w))(),M=(()=>((M=M||{}).EvidenceItemCount="EVIDENCE_ITEM_COUNT",M.Name="NAME",M.NctId="NCT_ID",M.SourceCount="SOURCE_COUNT",M))(),F=(()=>((F=F||{}).Conflict="CONFLICT",F.Expired="EXPIRED",F.Missing="MISSING",F.Valid="VALID",F))(),I=(()=>((I=I||{}).Assertion="ASSERTION",I.EvidenceItem="EVIDENCE_ITEM",I.Feature="FEATURE",I.MolecularProfile="MOLECULAR_PROFILE",I.Source="SOURCE",I.Variant="VARIANT",I.VariantGroup="VARIANT_GROUP",I))(),V=(()=>((V=V||{}).Created="CREATED",V.LastModified="LAST_MODIFIED",V))(),A=(()=>((A=A||{}).AssertionCount="ASSERTION_COUNT",A.Doid="DOID",A.EvidenceItemCount="EVIDENCE_ITEM_COUNT",A.FeatureCount="FEATURE_COUNT",A.Name="NAME",A.VariantCount="VARIANT_COUNT",A))(),E=(()=>((E=E||{}).Accepted="ACCEPTED",E.AssertionAccepted="ASSERTION_ACCEPTED",E.AssertionRejected="ASSERTION_REJECTED",E.AssertionReverted="ASSERTION_REVERTED",E.AssertionSubmitted="ASSERTION_SUBMITTED",E.Commented="COMMENTED",E.ComplexMolecularProfileCreated="COMPLEX_MOLECULAR_PROFILE_CREATED",E.CuratedSourceSuggestion="CURATED_SOURCE_SUGGESTION",E.DeprecatedMolecularProfile="DEPRECATED_MOLECULAR_PROFILE",E.DeprecatedVariant="DEPRECATED_VARIANT",E.Flagged="FLAGGED",E.FlagResolved="FLAG_RESOLVED",E.PublicationSuggested="PUBLICATION_SUGGESTED",E.Rejected="REJECTED",E.RejectedSourceSuggestion="REJECTED_SOURCE_SUGGESTION",E.RequeuedSourceSuggestion="REQUEUED_SOURCE_SUGGESTION",E.Reverted="REVERTED",E.RevisionAccepted="REVISION_ACCEPTED",E.RevisionRejected="REVISION_REJECTED",E.RevisionSuggested="REVISION_SUGGESTED",E.RevisionSuperseded="REVISION_SUPERSEDED",E.Submitted="SUBMITTED",E.VariantCreated="VARIANT_CREATED",E))(),U=(()=>((U=U||{}).Organization="ORGANIZATION",U.Subject="SUBJECT",U.Unscoped="UNSCOPED",U.User="USER",U))(),Q=(()=>((Q=Q||{}).DoesNotSupport="DOES_NOT_SUPPORT",Q.Na="NA",Q.Supports="SUPPORTS",Q))(),ze=(()=>((ze=ze||{}).A="A",ze.B="B",ze.C="C",ze.D="D",ze.E="E",ze))(),me=(()=>((me=me||{}).AdverseResponse="ADVERSE_RESPONSE",me.Benign="BENIGN",me.BetterOutcome="BETTER_OUTCOME",me.DominantNegative="DOMINANT_NEGATIVE",me.GainOfFunction="GAIN_OF_FUNCTION",me.LikelyBenign="LIKELY_BENIGN",me.LikelyPathogenic="LIKELY_PATHOGENIC",me.LossOfFunction="LOSS_OF_FUNCTION",me.Na="NA",me.Negative="NEGATIVE",me.Neomorphic="NEOMORPHIC",me.Oncogenicity="ONCOGENICITY",me.Pathogenic="PATHOGENIC",me.PoorOutcome="POOR_OUTCOME",me.Positive="POSITIVE",me.Predisposition="PREDISPOSITION",me.Protectiveness="PROTECTIVENESS",me.ReducedSensitivity="REDUCED_SENSITIVITY",me.Resistance="RESISTANCE",me.Sensitivityresponse="SENSITIVITYRESPONSE",me.UnalteredFunction="UNALTERED_FUNCTION",me.UncertainSignificance="UNCERTAIN_SIGNIFICANCE",me.Unknown="UNKNOWN",me))(),K=(()=>((K=K||{}).Description="DESCRIPTION",K.DiseaseName="DISEASE_NAME",K.EvidenceDirection="EVIDENCE_DIRECTION",K.EvidenceLevel="EVIDENCE_LEVEL",K.EvidenceRating="EVIDENCE_RATING",K.EvidenceType="EVIDENCE_TYPE",K.Id="ID",K.Significance="SIGNIFICANCE",K.Status="STATUS",K.TherapyName="THERAPY_NAME",K.VariantOrigin="VARIANT_ORIGIN",K))(),L=(()=>((L=L||{}).Accepted="ACCEPTED",L.Rejected="REJECTED",L.Submitted="SUBMITTED",L))(),B=(()=>((B=B||{}).Accepted="ACCEPTED",B.All="ALL",B.Rejected="REJECTED",B.Submitted="SUBMITTED",B))(),S=(()=>((S=S||{}).Diagnostic="DIAGNOSTIC",S.Functional="FUNCTIONAL",S.Oncogenic="ONCOGENIC",S.Predictive="PREDICTIVE",S.Predisposing="PREDISPOSING",S.Prognostic="PROGNOSTIC",S))(),P=(()=>((P=P||{}).Gene="GENE",P))(),b=(()=>((b=b||{}).AssertionCount="assertionCount",b.DiseaseName="diseaseName",b.EvidenceItemCount="evidenceItemCount",b.FeatureAlias="featureAlias",b.FeatureName="featureName",b.MolecularProfileCount="molecularProfileCount",b.TherapyName="therapyName",b.VariantCount="variantCount",b))(),ae=(()=>((ae=ae||{}).Open="OPEN",ae.Resolved="RESOLVED",ae))(),le=(()=>((le=le||{}).Assertion="ASSERTION",le.EvidenceItem="EVIDENCE_ITEM",le.Feature="FEATURE",le.MolecularProfile="MOLECULAR_PROFILE",le.Variant="VARIANT",le.VariantGroup="VARIANT_GROUP",le))(),ue=(()=>((ue=ue||{}).Assertion="ASSERTION",ue.EvidenceItem="EVIDENCE_ITEM",ue.Feature="FEATURE",ue.MolecularProfile="MOLECULAR_PROFILE",ue.Variant="VARIANT",ue.VariantGroup="VARIANT_GROUP",ue))(),Se=(()=>((Se=Se||{}).All="ALL",Se.WithAccepted="WITH_ACCEPTED",Se.WithAcceptedOrSubmitted="WITH_ACCEPTED_OR_SUBMITTED",Se.WithSubmitted="WITH_SUBMITTED",Se))(),Le=(()=>((Le=Le||{}).AssertionCount="assertionCount",Le.EvidenceItemCount="evidenceItemCount",Le.MolecularProfileScore="molecularProfileScore",Le.VariantCount="variantCount",Le))(),Ft=(()=>((Ft=Ft||{}).Mention="MENTION",Ft.Subscription="SUBSCRIPTION",Ft))(),Pt=(()=>((Pt=Pt||{}).Id="ID",Pt.Name="NAME",Pt))(),tn=(()=>((tn=tn||{}).AssertionCount="ASSERTION_COUNT",tn.EvidenceItemCount="EVIDENCE_ITEM_COUNT",tn.HpoId="HPO_ID",tn.Name="NAME",tn))(),xt=(()=>((xt=xt||{}).Read="READ",xt.Unread="UNREAD",xt))(),$t=(()=>(($t=$t||{}).Grch37="GRCH37",$t.Grch38="GRCH38",$t.Ncbi36="NCBI36",$t))(),en=(()=>((en=en||{}).Accepted="ACCEPTED",en.New="NEW",en.Rejected="REJECTED",en.Superseded="SUPERSEDED",en))(),ln=(()=>((ln=ln||{}).Assertion="ASSERTION",ln.EvidenceItem="EVIDENCE_ITEM",ln.Feature="FEATURE",ln.MolecularProfile="MOLECULAR_PROFILE",ln.Revision="REVISION",ln.Variant="VARIANT",ln.VariantGroup="VARIANT_GROUP",ln))(),kn=(()=>((kn=kn||{}).Asc="ASC",kn.Desc="DESC",kn))(),at=(()=>((at=at||{}).Asco="ASCO",at.Ash="ASH",at.Pubmed="PUBMED",at))(),Ue=(()=>((Ue=Ue||{}).Curated="CURATED",Ue.New="NEW",Ue.Rejected="REJECTED",Ue))(),gt=(()=>((gt=gt||{}).Citation="CITATION",gt.CitationId="CITATION_ID",gt.CreatedAt="CREATED_AT",gt.DiseaseName="DISEASE_NAME",gt.SourceType="SOURCE_TYPE",gt.Submitter="SUBMITTER",gt))(),Ze=(()=>((Ze=Ze||{}).Authors="AUTHORS",Ze.CitationId="CITATION_ID",Ze.EvidenceCount="EVIDENCE_COUNT",Ze.Journal="JOURNAL",Ze.Name="NAME",Ze.SourceType="SOURCE_TYPE",Ze.SuggestionCount="SUGGESTION_COUNT",Ze.Year="YEAR",Ze))(),Zt=(()=>((Zt=Zt||{}).Assertion="ASSERTION",Zt.EvidenceItem="EVIDENCE_ITEM",Zt.Feature="FEATURE",Zt.MolecularProfile="MOLECULAR_PROFILE",Zt.Revision="REVISION",Zt.SourceSuggestion="SOURCE_SUGGESTION",Zt.Variant="VARIANT",Zt.VariantGroup="VARIANT_GROUP",Zt))(),_n=(()=>((_n=_n||{}).Assertion="ASSERTION",_n.EvidenceItem="EVIDENCE_ITEM",_n.Feature="FEATURE",_n.MolecularProfile="MOLECULAR_PROFILE",_n.Revision="REVISION",_n.Role="ROLE",_n.Variant="VARIANT",_n.VariantGroup="VARIANT_GROUP",_n))(),Pn=(()=>((Pn=Pn||{}).Combination="COMBINATION",Pn.Sequential="SEQUENTIAL",Pn.Substitutes="SUBSTITUTES",Pn))(),rn=(()=>((rn=rn||{}).AssertionCount="ASSERTION_COUNT",rn.EvidenceItemCount="EVIDENCE_ITEM_COUNT",rn.Name="NAME",rn.NcitId="NCIT_ID",rn))(),fn=(()=>((fn=fn||{}).AllTime="ALL_TIME",fn.LastMonth="LAST_MONTH",fn.LastWeek="LAST_WEEK",fn.LastYear="LAST_YEAR",fn))(),je=(()=>((je=je||{}).Admin="ADMIN",je.Curator="CURATOR",je.Editor="EDITOR",je))(),Ot=(()=>((Ot=Ot||{}).Id="ID",Ot.LastAction="LAST_ACTION",Ot.Name="NAME",Ot.Role="ROLE",Ot))(),lt=(()=>((lt=lt||{}).EvidenceItemCount="EVIDENCE_ITEM_COUNT",lt.GeneNames="GENE_NAMES",lt.Name="NAME",lt.VariantCount="VARIANT_COUNT",lt.VariantNames="VARIANT_NAMES",lt))(),Ye=(()=>((Ye=Ye||{}).CoordinateEnd="COORDINATE_END",Ye.CoordinateStart="COORDINATE_START",Ye.Name="NAME",Ye))(),Ae=(()=>((Ae=Ae||{}).Combined="COMBINED",Ae.CommonGermline="COMMON_GERMLINE",Ae.Na="NA",Ae.RareGermline="RARE_GERMLINE",Ae.Somatic="SOMATIC",Ae.Unknown="UNKNOWN",Ae))(),ie=(()=>((ie=ie||{}).Name="NAME",ie.Soid="SOID",ie.VariantCount="VARIANT_COUNT",ie))(),Me=(()=>((Me=Me||{}).DiseaseName="diseaseName",Me.FeatureName="featureName",Me.TherapyName="therapyName",Me.VariantName="variantName",Me))();const Ne=t.Ps`
    fragment ActivityCard on ActivityInterface {
  id
  verbiage
}
    `,it=t.Ps`
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
      feature {
        id
        name
        link
      }
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
    `,It=t.Ps`
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
    ${it}`,sn=t.Ps`
    fragment MolecularProfileParsedName on MolecularProfileSegment {
  __typename
  ... on MolecularProfileTextSegment {
    text
  }
  ... on Feature {
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
    `,En=t.Ps`
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
    ${sn}`,ht=t.Ps`
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
    ${sn}`,ot=t.Ps`
    fragment clinicalTrialPopover on BrowseClinicalTrial {
  id
  name
  nctId
  url
  sourceCount
  evidenceCount
}
    `,Be=t.Ps`
    fragment BrowseClinicalTrialsRowFields on BrowseClinicalTrial {
  id
  name
  nctId
  evidenceCount
  sourceCount
  link
}
    `,vt=t.Ps`
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
    feature {
      id
      name
      link
    }
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
    `,St=t.Ps`
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
    ${vt}`,Ut=t.Ps`
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
    ... on Variant {
      deprecated
      feature {
        id
        name
        link
      }
    }
    __typename
  }
}
    `,Ht=t.Ps`
    fragment BrowseDiseaseRowFields on BrowseDisease {
  id
  name
  doid
  diseaseUrl
  features {
    id
    name
    link
  }
  assertionCount
  evidenceItemCount
  variantCount
  featureCount
  link
}
    `,Ge=t.Ps`
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
      feature {
        id
        link
        name
      }
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
    `,J=t.Ps`
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
    ${Ge}`,k=t.Ps`
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
    ${sn}`,Z=t.Ps`
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
    ${sn}`,ye=t.Ps`
    fragment featurePopover on Feature {
  id
  name
  featureInstance {
    __typename
  }
  featureAliases
  variants {
    totalCount
  }
  flags(state: OPEN) {
    totalCount
  }
}
    `,_t=t.Ps`
    fragment BrowseFeaturesFields on BrowseFeature {
  id
  name
  link
  flagged
  featureAliases
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
    `,qe=t.Ps`
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
    ${vt}`,He=t.Ps`
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
    ${qe}`,Xe=t.Ps`
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
    ... on Variant {
      deprecated
      feature {
        id
        name
        link
      }
    }
  }
  createdAt
  openActivity {
    parsedNote {
      ...parsedCommentFragment
    }
  }
}
    ${vt}`,At=t.Ps`
    fragment QuicksearchResult on SearchResult {
  id
  resultType
  name
  matchingText
}
    `,zt=t.Ps`
    fragment molecularProfilePopoverFields on MolecularProfile {
  id
  name
  parsedName {
    __typename
    ... on MolecularProfileTextSegment {
      text
    }
    ... on Feature {
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
    `,mn=t.Ps`
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
  variants {
    id
    name
    link
    matchText
    feature {
      id
      link
      name
    }
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
    `,Qe=t.Ps`
    fragment menuMolecularProfile on MolecularProfile {
  id
  name
  link
  flagged
}
    `,rt=t.Ps`
    fragment LeaderboardOrganizationFields on LeaderboardOrganization {
  id
  name
  actionCount
  rank
  profileImagePath(size: 64)
}
    `,se=t.Ps`
    fragment orgPopover on Organization {
  id
  profileImagePath(size: 64)
  name
  description
  url
}
    `,_e=t.Ps`
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
    `,pt=t.Ps`
    fragment PhenotypeBrowseTableRowFields on BrowsePhenotype {
  id
  name
  hpoId
  url
  assertionCount
  evidenceCount
  link
}
    `,we=t.Ps`
    fragment validationError on FieldValidationError {
  fieldName
  error
}
    `,nt=t.Ps`
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
    ... on Variant {
      deprecated
      feature {
        id
        name
        link
      }
    }
  }
  createdAt
  linkoutData {
    name
  }
}
    ${vt}`,kt=t.Ps`
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
          deprecated
          feature {
            link
            id
            name
          }
        }
        addedObjects {
          id
          displayName
          displayType
          entityType
          link
          deleted
          deprecated
          feature {
            link
            id
            name
          }
        }
        removedObjects {
          id
          displayName
          displayType
          entityType
          link
          deleted
          deprecated
          feature {
            link
            id
            name
          }
        }
        keptObjects {
          id
          displayName
          displayType
          entityType
          link
          deleted
          deprecated
          feature {
            link
            id
            name
          }
        }
        suggestedObjects {
          id
          displayName
          displayType
          entityType
          link
          deleted
          deprecated
          feature {
            link
            id
            name
          }
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
    ${vt}`,un=t.Ps`
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
    `,wt=t.Ps`
    fragment subscriptionId on Subscription {
  id
  __typename
}
    `,ct=t.Ps`
    fragment TimepointCount on TimePointCounts {
  allTime
  newThisMonth
  newThisWeek
  newThisYear
}
    `,tt=t.Ps`
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
    ${vt}`,X=t.Ps`
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
    `,H=t.Ps`
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
    `,Te=t.Ps`
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
    fragment LeaderboardUserFields on LeaderboardUser {
  id
  name
  displayName
  actionCount
  role
  rank
  profileImagePath(size: 64)
}
    `,yt=t.Ps`
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
    `,Xt=t.Ps`
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
    `,jt=t.Ps`
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
        deprecated
        feature {
          id
          name
          link
        }
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
    `,An=t.Ps`
    fragment BrowseVariantGroupRowFields on BrowseVariantGroup {
  id
  name
  link
  geneNames
  variantNames
  variantCount
  evidenceItemCount
}
    `,Tn=t.Ps`
    fragment variantTypePopover on VariantTypePopover {
  id
  name
  url
  soid
  variantCount
}
    `,so=t.Ps`
    fragment VariantTypeBrowseTableRowFields on BrowseVariantType {
  id
  name
  soid
  url
  variantCount
  link
}
    `,Bo=t.Ps`
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
    `,xo=t.Ps`
    fragment variantPopoverFields on Variant {
  id
  name
  variantAliases
  alleleRegistryId
  feature {
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
    `,ii=t.Ps`
    fragment menuVariantType on BrowseVariantType {
  id
  name
  link
}
    `,li=t.Ps`
    fragment menuVariant on Variant {
  id
  name
  link
  flagged
}
    `,mi=t.Ps`
    fragment BrowseVariantsFields on BrowseVariant {
  id
  name
  link
  featureId
  featureName
  featureLink
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
    `,Ao=t.Ps`
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
    `,ri=t.Ps`
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
${ri}
${Zo}
${eo}`,Lo=t.Ps`
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
    `,To=t.Ps`
    fragment RevisableGeneFields on Feature {
  id
  description
  sources {
    id
    sourceType
    citation
    citationId
  }
}
    `,_i=t.Ps`
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
    `,Oi=t.Ps`
    fragment RevisableVariantFields on Variant {
  id
  name
  feature {
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
    `,si=t.Ps`
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
    `,ko=t.Ps`
    fragment AdvancedSearchPermalink on AdvancedSearchResult {
  permalinkId
}
    `,Qi=t.Ps`
    fragment AcmgCodeSelectTypeaheadFields on AcmgCode {
  id
  code
  name
  description
  tooltip
}
    `,Ei=t.Ps`
    fragment ClingenCodeSelectTypeaheadFields on ClingenCode {
  id
  code
  name
  description
  tooltip
  exclusive
}
    `,ni=t.Ps`
    fragment QuickAddDiseaseFields on AddDiseasePayload {
  new
  disease {
    ...DiseaseSelectTypeaheadFields
  }
}
    ${ui}`,Gi=t.Ps`
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
    ${sn}`,dr=t.Ps`
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
    `,pr=t.Ps`
    fragment FeatureSelectTypeaheadFields on Feature {
  id
  name
  featureAliases
  link
  featureInstance {
    __typename
    ... on Gene {
      entrezId
    }
  }
}
    `,co=t.Ps`
    fragment PreviewMpName2 on MolecularProfileSegment {
  __typename
  ... on MolecularProfileTextSegment {
    text
  }
  ... on Feature {
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
    `,No=t.Ps`
    fragment NccnGuidelineSelectTypeaheadFields on NccnGuideline {
  id
  name
}
    `,Do=t.Ps`
    fragment QuickAddTherapyFields on AddTherapyPayload {
  new
  therapy {
    ...TherapySelectTypeaheadFields
  }
}
    ${ri}`,Oo=(t.Ps`
    fragment VariantManagerFields on BrowseVariant {
  id
  name
  link
  featureId
  featureName
  featureLink
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
    `),nr=t.Ps`
    fragment QuickAddVariantFields on CreateVariantPayload {
  clientMutationId
  new
  variant {
    ...VariantSelectTypeaheadFields
  }
}
    ${Oo}`,bo=t.Ps`
    fragment VariantTypeSelectTypeaheadFields on VariantType {
  id
  name
  link
  soid
}
    `,Fn=t.Ps`
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
    ${vt}`,lo=t.Ps`
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
    ${Fn}`,Ri=t.Ps`
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
    ${sn}
${Fn}`,Xo=t.Ps`
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
    ${Xo}`,to=t.Ps`
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
    ${vt}`,Ve=t.Ps`
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
    ${to}`,oe=t.Ps`
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
    ${sn}
${vt}`,De=t.Ps`
    fragment FeatureDetailFields on Feature {
  id
  name
  fullName
  featureInstance {
    __typename
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
    `,$e=t.Ps`
    fragment GeneSummaryFields on Gene {
  id
  description
  featureAliases
  entrezId
  name
  sources {
    id
    citation
    link
    sourceUrl
    displayType
    sourceType
  }
  myGeneInfoDetails
}
    `,Ct=t.Ps`
    fragment FeatureSummaryFields on Feature {
  id
  name
  fullName
  featureInstance {
    __typename
    ... on Gene {
      ...GeneSummaryFields
    }
  }
}
    ${$e}`,Nt=t.Ps`
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
    feature {
      id
      name
      link
    }
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
    ${vt}`,Jt=t.Ps`
    fragment VariantMolecularProfileCardFields on Variant {
  id
  name
  link
  feature {
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
    `,an=t.Ps`
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
    ${Jt}
${sn}`,Qt=t.Ps`
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
    `,yn=t.Ps`
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
    `,Rn=t.Ps`
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
    `,bn=t.Ps`
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
    `,dn=t.Ps`
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
    `,On=t.Ps`
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
    `,Gn=t.Ps`
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
    ${Gn}`,Un=t.Ps`
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
    `,Zn=t.Ps`
    fragment notificationOrganization on Organization {
  id
  name
}
    `,Co=t.Ps`
    fragment notificationOriginatingUsers on User {
  id
  displayName
}
    `,Kn=t.Ps`
    fragment notificationFeedSubjects on EventSubjectWithCount {
  subject {
    id
    __typename
    name
  }
  occuranceCount
}
    `,fo=t.Ps`
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
    ${Ge}`,So=t.Ps`
    fragment subscribable on Subscribable {
  id
  entityType
  __typename
}
    `,qn=t.Ps`
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
    `,wo=t.Ps`
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
    `,Ro=t.Ps`
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
  feature {
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
    ${vt}`,Ko=t.Ps`
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
    `,zo=t.Ps`
    fragment VariantSummaryFields on Variant {
  id
  name
  feature {
    __typename
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
    ${Ko}`;t.Ps`
    query ActivityCard($activityId: Int!) {
  activity(id: $activityId) {
    ...ActivityCard
  }
}
    ${Ne}`,t.Ps`
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
    ${It}`;const or=t.Ps`
    query AssertionPopover($assertionId: Int!) {
  assertion(id: $assertionId) {
    ...assertionPopover
  }
}
    ${En}`;let yi=(()=>{class y extends t.AE{constructor(re){super(re),this.document=or}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const Ci=t.Ps`
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
    ${ht}`;let cr=(()=>{class y extends t.AE{constructor(re){super(re),this.document=Ci}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const Bi=t.Ps`
    query ClinicalTrialPopover($clinicalTrialId: Int!) {
  clinicalTrials(id: $clinicalTrialId) {
    edges {
      node {
        ...clinicalTrialPopover
      }
    }
  }
}
    ${ot}`;let ir=(()=>{class y extends t.AE{constructor(re){super(re),this.document=Bi}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const xi=t.Ps`
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
    ${Be}`;let Fe=(()=>{class y extends t.AE{constructor(re){super(re),this.document=xi}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const Rt=t.Ps`
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
    ${St}`;let W=(()=>{class y extends t.AE{constructor(re){super(re),this.document=Rt}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const ke=t.Ps`
    query CommentPopover($commentId: Int!) {
  comment(id: $commentId) {
    ...commentPopover
  }
}
    ${Ut}`;let Vt=(()=>{class y extends t.AE{constructor(re){super(re),this.document=ke}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const on=t.Ps`
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
    `;let Bn=(()=>{class y extends t.AE{constructor(re){super(re),this.document=on}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const mo=t.Ps`
    query BrowseDiseases($first: Int, $last: Int, $before: String, $after: String, $sortBy: DiseasesSort, $name: String, $doid: String, $featureName: String) {
  browseDiseases(
    first: $first
    last: $last
    before: $before
    after: $after
    sortBy: $sortBy
    name: $name
    doid: $doid
    featureName: $featureName
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
    ${Ht}`;let go=(()=>{class y extends t.AE{constructor(re){super(re),this.document=mo}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const Jo=t.Ps`
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
    `;let ai=(()=>{class y extends t.AE{constructor(re){super(re),this.document=Jo}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const po=t.Ps`
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
    ${J}`;let Wi=(()=>{class y extends t.AE{constructor(re){super(re),this.document=po}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const Hi=t.Ps`
    query EvidencePopover($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...evidencePopover
  }
}
    ${k}`;let Er=(()=>{class y extends t.AE{constructor(re){super(re),this.document=Hi}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const Fs=t.Ps`
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
    ${Z}`;let Ee=(()=>{class y extends t.AE{constructor(re){super(re),this.document=Fs}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const ve=t.Ps`
    query FeaturePopover($featureId: Int!) {
  feature(id: $featureId) {
    ...featurePopover
  }
}
    ${ye}`;let de=(()=>{class y extends t.AE{constructor(re){super(re),this.document=ve}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const et=t.Ps`
    query BrowseFeatures($featureName: String, $therapyName: String, $featureAlias: String, $diseaseName: String, $sortBy: FeaturesSort, $first: Int, $last: Int, $before: String, $after: String) {
  browseFeatures(
    featureName: $featureName
    therapyName: $therapyName
    featureAlias: $featureAlias
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
        ...BrowseFeaturesFields
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
    ${_t}`;let Cn=(()=>{class y extends t.AE{constructor(re){super(re),this.document=et}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const Qn=t.Ps`
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
    ${He}`;let Ai=(()=>{class y extends t.AE{constructor(re){super(re),this.document=Qn}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const bi=t.Ps`
    query FlagPopover($flagId: Int!) {
  flag(id: $flagId) {
    ...flagPopover
  }
}
    ${Xe}`;let Yr=(()=>{class y extends t.AE{constructor(re){super(re),this.document=bi}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const Ns=t.Ps`
    query Quicksearch($query: String!, $types: [SearchableEntities!], $highlightMatches: Boolean) {
  search(query: $query, types: $types, highlightMatches: $highlightMatches) {
    ...QuicksearchResult
  }
}
    ${At}`;let Ea=(()=>{class y extends t.AE{constructor(re){super(re),this.document=Ns}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const Js=t.Ps`
    query MolecularProfilePopover($molecularProfileId: Int!) {
  molecularProfile(id: $molecularProfileId) {
    ...molecularProfilePopoverFields
  }
}
    ${zt}`;let qs=(()=>{class y extends t.AE{constructor(re){super(re),this.document=Js}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const fs=t.Ps`
    query BrowseMolecularProfiles($molecularProfileName: String, $variantName: String, $variantId: Int, $featureName: String, $diseaseName: String, $therapyName: String, $molecularProfileAlias: String, $sortBy: MolecularProfilesSort, $first: Int, $last: Int, $before: String, $after: String) {
  browseMolecularProfiles(
    molecularProfileName: $molecularProfileName
    variantName: $variantName
    variantId: $variantId
    featureName: $featureName
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
    ${mn}`;let xa=(()=>{class y extends t.AE{constructor(re){super(re),this.document=fs}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const Jr=t.Ps`
    query MolecularProfileMenu($geneId: Int, $featureId: Int, $mpName: String, $first: Int, $last: Int, $before: String, $after: String, $evidenceStatusFilter: MolecularProfileDisplayFilter) {
  molecularProfiles(
    geneId: $geneId
    featureId: $featureId
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
    ${Qe}`;let qr=(()=>{class y extends t.AE{constructor(re){super(re),this.document=Jr}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const hr=t.Ps`
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
    ${rt}`;let rr=(()=>{class y extends t.AE{constructor(re){super(re),this.document=hr}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const di=t.Ps`
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
    ${rt}`;let yr=(()=>{class y extends t.AE{constructor(re){super(re),this.document=di}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const Ls=t.Ps`
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
    ${rt}`;let $r=(()=>{class y extends t.AE{constructor(re){super(re),this.document=Ls}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const Lr=t.Ps`
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
    ${rt}`;let Xr=(()=>{class y extends t.AE{constructor(re){super(re),this.document=Lr}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const Xs=t.Ps`
    query OrgPopover($orgId: Int!) {
  organization(id: $orgId) {
    ...orgPopover
  }
}
    ${se}`;let Cr=(()=>{class y extends t.AE{constructor(re){super(re),this.document=Xs}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const ms=t.Ps`
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
    ${_e}`;let zr=(()=>{class y extends t.AE{constructor(re){super(re),this.document=ms}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const es=t.Ps`
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
    `;let kr=(()=>{class y extends t.AE{constructor(re){super(re),this.document=es}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const ec=t.Ps`
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
    ${pt}`;let Wc=(()=>{class y extends t.AE{constructor(re){super(re),this.document=ec}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const tc=t.Ps`
    mutation AcceptRevision($input: AcceptRevisionsInput!) {
  acceptRevisions(input: $input) {
    revisions {
      id
      __typename
    }
  }
}
    `;let Rr=(()=>{class y extends t.mm{constructor(re){super(re),this.document=tc}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const Tr=t.Ps`
    mutation RejectRevision($input: RejectRevisionsInput!) {
  rejectRevisions(input: $input) {
    revisions {
      id
      __typename
    }
  }
}
    `;let as=(()=>{class y extends t.mm{constructor(re){super(re),this.document=Tr}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const Ur=t.Ps`
    query ValidateRevisionsForAcceptance($ids: [Int!]!) {
  validateRevisionsForAcceptance(revisionIds: $ids) {
    genericErrors
    validationErrors {
      ...validationError
    }
  }
}
    ${we}`;let xr=(()=>{class y extends t.AE{constructor(re){super(re),this.document=Ur}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const ts=t.Ps`
    query RevisionPopover($revisionId: Int!) {
  revision(id: $revisionId) {
    ...revisionPopover
  }
}
    ${nt}`;let fr=(()=>{class y extends t.AE{constructor(re){super(re),this.document=ts}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const gs=t.Ps`
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
    ${kt}`;let vs=(()=>{class y extends t.AE{constructor(re){super(re),this.document=gs}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const Da=t.Ps`
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
    ${un}`;let ea=(()=>{class y extends t.AE{constructor(re){super(re),this.document=Da}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const ta=t.Ps`
    query SubscriptionForEntity($subscribable: SubscribableInput!) {
  subscriptionForEntity(subscribable: $subscribable) {
    ...subscriptionId
  }
}
    ${wt}`;let na=(()=>{class y extends t.AE{constructor(re){super(re),this.document=ta}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const er=t.Ps`
    mutation ModerateEvidenceItem($input: ModerateEvidenceItemInput!) {
  moderateEvidenceItem(input: $input) {
    evidenceItem {
      id
    }
  }
}
    `;let Yi=(()=>{class y extends t.mm{constructor(re){super(re),this.document=er}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const oa=t.Ps`
    mutation ModerateAssertion($input: ModerateAssertionInput!) {
  moderateAssertion(input: $input) {
    assertion {
      id
    }
  }
}
    `;let gi=(()=>{class y extends t.mm{constructor(re){super(re),this.document=oa}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const jr=t.Ps`
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
    features {
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
    ${ct}`;let ne=(()=>{class y extends t.AE{constructor(re){super(re),this.document=jr}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const Ie=t.Ps`
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
    ${tt}`;let he=(()=>{class y extends t.AE{constructor(re){super(re),this.document=Ie}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();t.Ps`
    mutation UpdateSourceSuggestionStatus($input: UpdateSourceSuggestionStatusInput!) {
  updateSourceSuggestionStatus(input: $input) {
    sourceSuggestion {
      id
      status
    }
  }
}
    `;const pn=t.Ps`
    query SourcePopover($sourceId: Int!) {
  sourcePopover(id: $sourceId) {
    ...sourcePopover
  }
}
    ${X}`;let Mn=(()=>{class y extends t.AE{constructor(re){super(re),this.document=pn}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const no=t.Ps`
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
    ${H}`;let ei=(()=>{class y extends t.AE{constructor(re){super(re),this.document=no}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const vo=t.Ps`
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
    `;let Uo=(()=>{class y extends t.AE{constructor(re){super(re),this.document=vo}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const Po=t.Ps`
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
    ${Te}`;let oi=(()=>{class y extends t.AE{constructor(re){super(re),this.document=Po}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const jo=t.Ps`
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
    ${Re}`;let zi=(()=>{class y extends t.AE{constructor(re){super(re),this.document=jo}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const pi=t.Ps`
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
    ${Re}`;let ao=(()=>{class y extends t.AE{constructor(re){super(re),this.document=pi}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const Mr=t.Ps`
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
    ${Re}`;let mr=(()=>{class y extends t.AE{constructor(re){super(re),this.document=Mr}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const Dr=t.Ps`
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
    ${Re}`;let Vr=(()=>{class y extends t.AE{constructor(re){super(re),this.document=Dr}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const gr=t.Ps`
    query UserPopover($userId: Int!) {
  user(id: $userId) {
    ...popoverUser
  }
}
    ${yt}`;let Oa=(()=>{class y extends t.AE{constructor(re){super(re),this.document=gr}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const ns=t.Ps`
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
    ${Xt}`;let _s=(()=>{class y extends t.AE{constructor(re){super(re),this.document=ns}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const nc=t.Ps`
    query VariantGroupPopover($variantGroupId: Int!) {
  variantGroup(id: $variantGroupId) {
    ...variantGroupPopoverFields
  }
}
    ${jt}`;let Gl=(()=>{class y extends t.AE{constructor(re){super(re),this.document=nc}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const oc=t.Ps`
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
    ${An}`;let Qr=(()=>{class y extends t.AE{constructor(re){super(re),this.document=oc}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const wn=t.Ps`
    query VariantTypePopover($variantTypeId: Int!) {
  variantTypePopover(id: $variantTypeId) {
    ...variantTypePopover
  }
}
    ${Tn}`;let Qo=(()=>{class y extends t.AE{constructor(re){super(re),this.document=wn}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const Zc=t.Ps`
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
    ${so}`;let ia=(()=>{class y extends t.AE{constructor(re){super(re),this.document=Zc}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const Fi=t.Ps`
    query CoordinatesCard($variantId: Int!) {
  variant(id: $variantId) {
    ...CoordinatesCardFields
  }
}
    ${Bo}`;let ys=(()=>{class y extends t.AE{constructor(re){super(re),this.document=Fi}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const os=t.Ps`
    query VariantPopover($variantId: Int!) {
  variant(id: $variantId) {
    ...variantPopoverFields
  }
}
    ${xo}`;let Or=(()=>{class y extends t.AE{constructor(re){super(re),this.document=os}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const wa=t.Ps`
    query VariantsMenu($featureId: Int, $variantName: String, $variantTypeIds: [Int!], $hasNoVariantType: Boolean, $first: Int, $last: Int, $before: String, $after: String, $sortBy: VariantMenuSort) {
  variants(
    featureId: $featureId
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
    ${li}`;let Wl=(()=>{class y extends t.AE{constructor(re){super(re),this.document=wa}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const ra=t.Ps`
    query VariantTypesForFeature($featureId: Int) {
  variantTypes(featureId: $featureId, first: 50) {
    edges {
      node {
        ...menuVariantType
      }
    }
  }
}
    ${ii}`;let s1=(()=>{class y extends t.AE{constructor(re){super(re),this.document=ra}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const ic=t.Ps`
    query BrowseVariants($variantName: String, $featureName: String, $diseaseName: String, $therapyName: String, $variantAlias: String, $variantTypeId: Int, $variantGroupId: Int, $variantTypeName: String, $hasNoVariantType: Boolean, $sortBy: VariantsSort, $first: Int, $last: Int, $before: String, $after: String) {
  browseVariants(
    variantName: $variantName
    featureName: $featureName
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
    ${mi}`;let sr=(()=>{class y extends t.AE{constructor(re){super(re),this.document=ic}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const Vi=t.Ps`
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
    `;let Br=(()=>{class y extends t.AE{constructor(re){super(re),this.document=Vi}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const Go=t.Ps`
    query ViewerNotificationCount {
  notifications {
    unreadCount
  }
}
    `;let wr=(()=>{class y extends t.AE{constructor(re){super(re),this.document=Go}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const Cs=t.Ps`
    mutation AddComment($input: AddCommentInput!) {
  addComment(input: $input) {
    clientMutationId
    comment {
      ...commentListNode
    }
  }
}
    ${St}`;let rc=(()=>{class y extends t.mm{constructor(re){super(re),this.document=Cs}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const Pr=t.Ps`
    query previewComment($commentText: String!) {
  previewCommentText(commentText: $commentText) {
    ...parsedCommentFragment
  }
}
    ${vt}`;let sc=(()=>{class y extends t.AE{constructor(re){super(re),this.document=Pr}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const ac=t.Ps`
    query userTypeahead($queryTerm: String!) {
  userTypeahead(queryTerm: $queryTerm) {
    username
  }
}
    `;let cc=(()=>{class y extends t.AE{constructor(re){super(re),this.document=ac}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const lc=t.Ps`
    query entityTypeahead($queryTerm: String!) {
  entityTypeahead(queryTerm: $queryTerm) {
    entityId
    tagType
    displayName
  }
}
    `;let uc=(()=>{class y extends t.AE{constructor(re){super(re),this.document=lc}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const Kc=t.Ps`
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
    `;let Pa=(()=>{class y extends t.mm{constructor(re){super(re),this.document=Kc}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const Ia=t.Ps`
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
    `;let ks=(()=>{class y extends t.AE{constructor(re){super(re),this.document=Ia}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();t.Ps`
    query LinkableGene($geneId: Int!) {
  gene(id: $geneId) {
    id
    name
    link
  }
}
    `,t.Ps`
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
    `;const D=t.Ps`
    query LinkableFeature($featureId: Int!) {
  feature(id: $featureId) {
    id
    name
    link
  }
}
    `;let ce=(()=>{class y extends t.AE{constructor(re){super(re),this.document=D}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const Pe=t.Ps`
    mutation FlagEntity($input: FlagEntityInput!) {
  flagEntity(input: $input) {
    flag {
      id
    }
  }
}
    `;let ut=(()=>{class y extends t.mm{constructor(re){super(re),this.document=Pe}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const mt=t.Ps`
    mutation ResolveFlag($input: ResolveFlagInput!) {
  resolveFlag(input: $input) {
    flag {
      id
    }
  }
}
    `;let nn=(()=>{class y extends t.mm{constructor(re){super(re),this.document=mt}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const Nn=t.Ps`
    mutation UpdateSourceSuggestion($input: UpdateSourceSuggestionStatusInput!) {
  updateSourceSuggestionStatus(input: $input) {
    sourceSuggestion {
      id
      status
    }
  }
}
    `;let io=(()=>{class y extends t.mm{constructor(re){super(re),this.document=Nn}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const uo=t.Ps`
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
    `;let qo=(()=>{class y extends t.mm{constructor(re){super(re),this.document=uo}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const Ni=t.Ps`
    mutation UpdateUserProfile($input: EditUserInput!) {
  editUser(input: $input) {
    user {
      id
    }
  }
}
    `;let sa=(()=>{class y extends t.mm{constructor(re){super(re),this.document=Ni}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const Gr=t.Ps`
    query Countries {
  countries {
    id
    name
  }
}
    `;let Wr=(()=>{class y extends t.AE{constructor(re){super(re),this.document=Gr}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const Zi=t.Ps`
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
    `;let br=(()=>{class y extends t.mm{constructor(re){super(re),this.document=Zi}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const qc=t.Ps`
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
    `;let Jl=(()=>{class y extends t.AE{constructor(re){super(re),this.document=qc}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const Xc=t.Ps`
    query AssertionRevisableFields($assertionId: Int!) {
  assertion(id: $assertionId) {
    ...RevisableAssertionFields
  }
}
    ${Ao}`;let Rs=(()=>{class y extends t.AE{constructor(re){super(re),this.document=Xc}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const Vs=t.Ps`
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
    `;let cs=(()=>{class y extends t.mm{constructor(re){super(re),this.document=Vs}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const ql=t.Ps`
    mutation SubmitAssertion($input: SubmitAssertionInput!) {
  submitAssertion(input: $input) {
    clientMutationId
    assertion {
      id
    }
  }
}
    `;let el=(()=>{class y extends t.mm{constructor(re){super(re),this.document=ql}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const Xl=t.Ps`
    query EvidenceItemRevisableFields($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...RevisableEvidenceFields
  }
}
    ${Si}`;let c1=(()=>{class y extends t.AE{constructor(re){super(re),this.document=Xl}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const tl=t.Ps`
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
    `;let Td=(()=>{class y extends t.mm{constructor(re){super(re),this.document=tl}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();t.Ps`
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
    ${Lo}`;const zs=t.Ps`
    mutation SubmitEvidenceItem($input: SubmitEvidenceItemInput!) {
  submitEvidence(input: $input) {
    clientMutationId
    evidenceItem {
      id
    }
  }
}
    `;let Aa=(()=>{class y extends t.mm{constructor(re){super(re),this.document=zs}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const ls=t.Ps`
    query ExistingEvidenceCount($molecularProfileId: Int!, $sourceId: Int!) {
  evidenceItems(molecularProfileId: $molecularProfileId, sourceId: $sourceId) {
    totalCount
  }
}
    `;let u1=(()=>{class y extends t.AE{constructor(re){super(re),this.document=ls}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const eu=t.Ps`
    query FullyCuratedSource($sourceId: Int!) {
  source(id: $sourceId) {
    fullyCurated
  }
}
    `;let tu=(()=>{class y extends t.AE{constructor(re){super(re),this.document=eu}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const d1=t.Ps`
    query GeneRevisableFields($featureId: Int!) {
  feature(id: $featureId) {
    ...RevisableGeneFields
  }
}
    ${To}`;let is=(()=>{class y extends t.AE{constructor(re){super(re),this.document=d1}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const p1=t.Ps`
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
    `;let pc=(()=>{class y extends t.mm{constructor(re){super(re),this.document=p1}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const hc=t.Ps`
    query MolecularProfileRevisableFields($molecularProfileId: Int!) {
  molecularProfile(id: $molecularProfileId) {
    ...RevisableMolecularProfileFields
  }
}
    ${_i}`;let fc=(()=>{class y extends t.AE{constructor(re){super(re),this.document=hc}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const mc=t.Ps`
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
    `;let ol=(()=>{class y extends t.mm{constructor(re){super(re),this.document=mc}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const Md=t.Ps`
    mutation SubmitSource($input: SuggestSourceInput!) {
  suggestSource(input: $input) {
    clientMutationId
    sourceSuggestion {
      id
    }
  }
}
    `;let h1=(()=>{class y extends t.mm{constructor(re){super(re),this.document=Md}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const f1=t.Ps`
    query SourceSuggestionChecks($sourceId: Int!) {
  source(id: $sourceId) {
    fullyCurated
  }
  sourceSuggestions(sourceId: $sourceId) {
    filteredCount
  }
}
    `;let nu=(()=>{class y extends t.AE{constructor(re){super(re),this.document=f1}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const ou=t.Ps`
    query VariantRevisableFields($variantId: Int!) {
  variant(id: $variantId) {
    ...RevisableVariantFields
  }
}
    ${Oi}`;let gc=(()=>{class y extends t.AE{constructor(re){super(re),this.document=ou}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const Fa=t.Ps`
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
    `;let Ts=(()=>{class y extends t.mm{constructor(re){super(re),this.document=Fa}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const il=t.Ps`
    query VariantGroupRevisableFields($variantGroupId: Int!) {
  variantGroup(id: $variantGroupId) {
    ...VariantGroupRevisableFields
  }
}
    ${zn}`;let rl=(()=>{class y extends t.AE{constructor(re){super(re),this.document=il}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const sl=t.Ps`
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
    `;let Bs=(()=>{class y extends t.mm{constructor(re){super(re),this.document=sl}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();t.Ps`
    query VariantGroupSubmittableFields($variantGroupId: Int!) {
  variantGroup(id: $variantGroupId) {
    ...SubmittableVariantGroupFields
  }
}
    ${si}`;const vc=t.Ps`
    mutation SubmitVariantGroup($input: SubmitVariantGroupInput!) {
  submitVariantGroup(input: $input) {
    clientMutationId
    variantGroup {
      id
    }
  }
}
    `;let ru=(()=>{class y extends t.mm{constructor(re){super(re),this.document=vc}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();t.Ps`
    query GeneAdvancedSearch($query: GeneSearchFilter!) {
  searchGenes(query: $query, createPermalink: true) {
    ...AdvancedSearchPermalink
  }
}
    ${ko}`;const Hs=t.Ps`
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
    `;let Ys=(()=>{class y extends t.AE{constructor(re){super(re),this.document=Hs}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const $s=t.Ps`
    query AcmgCodeSelectTypeahead($code: String!) {
  acmgCodesTypeahead(queryTerm: $code) {
    ...AcmgCodeSelectTypeaheadFields
  }
}
    ${Qi}`;let cl=(()=>{class y extends t.AE{constructor(re){super(re),this.document=$s}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const _c=t.Ps`
    query AcmgCodeSelectTag($id: Int!) {
  acmgCode(id: $id) {
    ...AcmgCodeSelectTypeaheadFields
  }
}
    ${Qi}`;let aa=(()=>{class y extends t.AE{constructor(re){super(re),this.document=_c}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const g1=t.Ps`
    query ClingenCodeSelectTypeahead($code: String!) {
  clingenCodesTypeahead(queryTerm: $code) {
    ...ClingenCodeSelectTypeaheadFields
  }
}
    ${Ei}`;let au=(()=>{class y extends t.AE{constructor(re){super(re),this.document=g1}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const v1=t.Ps`
    query ClingenCodeSelectTag($id: Int!) {
  clingenCode(id: $id) {
    ...ClingenCodeSelectTypeaheadFields
  }
}
    ${Ei}`;let _1=(()=>{class y extends t.AE{constructor(re){super(re),this.document=v1}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const y1=t.Ps`
    mutation QuickAddDisease($name: String!, $doid: String) {
  addDisease(input: {name: $name, doid: $doid}) {
    ...QuickAddDiseaseFields
  }
}
    ${ni}`;let C1=(()=>{class y extends t.mm{constructor(re){super(re),this.document=y1}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const z1=t.Ps`
    query DiseaseSelectTypeahead($name: String!) {
  diseaseTypeahead(queryTerm: $name) {
    ...DiseaseSelectTypeaheadFields
  }
}
    ${ui}`;let T1=(()=>{class y extends t.AE{constructor(re){super(re),this.document=z1}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const ca=t.Ps`
    query DiseaseSelectTag($id: Int!) {
  disease(id: $id) {
    ...DiseaseSelectTypeaheadFields
  }
}
    ${ui}`;let M1=(()=>{class y extends t.AE{constructor(re){super(re),this.document=ca}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const cu=t.Ps`
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
    ${Gi}`;let $i=(()=>{class y extends t.AE{constructor(re){super(re),this.document=cu}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const ll=t.Ps`
    query EvidenceSelectTypeahead($eid: Int!) {
  evidenceItems(id: $eid) {
    nodes {
      ...EvidenceSelectTypeaheadFields
    }
  }
}
    ${dr}`;let la=(()=>{class y extends t.AE{constructor(re){super(re),this.document=ll}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const lu=t.Ps`
    query EvidenceSelectTag($eid: Int!) {
  evidenceItem(id: $eid) {
    ...EvidenceSelectTypeaheadFields
  }
}
    ${dr}`;let Ir=(()=>{class y extends t.AE{constructor(re){super(re),this.document=lu}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const ua=t.Ps`
    query FeatureSelectTypeahead($queryTerm: String!, $featureType: FeatureInstanceTypes) {
  featureTypeahead(queryTerm: $queryTerm, featureType: $featureType) {
    ...FeatureSelectTypeaheadFields
  }
}
    ${pr}`;let ul=(()=>{class y extends t.AE{constructor(re){super(re),this.document=ua}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const Na=t.Ps`
    query FeatureSelectTag($featureId: Int!) {
  feature(id: $featureId) {
    ...FeatureSelectTypeaheadFields
  }
}
    ${pr}`;let da=(()=>{class y extends t.AE{constructor(re){super(re),this.document=Na}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const uu=t.Ps`
    query MolecularProfileSelectTypeahead($name: String!, $geneId: Int) {
  molecularProfiles(name: $name, geneId: $geneId, first: 25) {
    nodes {
      ...MolecularProfileSelectTypeaheadFields
    }
  }
}
    ${Xn}`;let dl=(()=>{class y extends t.AE{constructor(re){super(re),this.document=uu}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const pl=t.Ps`
    query MolecularProfileSelectTag($molecularProfileId: Int!) {
  molecularProfile(id: $molecularProfileId) {
    ...MolecularProfileSelectTypeaheadFields
  }
}
    ${Xn}`;let b1=(()=>{class y extends t.AE{constructor(re){super(re),this.document=pl}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const Sr=t.Ps`
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
    ${co}`;let yc=(()=>{class y extends t.AE{constructor(re){super(re),this.document=Sr}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const Ms=t.Ps`
    query MpExpressionEditorPrepopulate($mpId: Int!) {
  molecularProfile(id: $mpId) {
    id
    parsedName {
      ...MolecularProfileParsedName
    }
    rawName
  }
}
    ${sn}`;let bd=(()=>{class y extends t.AE{constructor(re){super(re),this.document=Ms}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const hl=t.Ps`
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
    `;let du=(()=>{class y extends t.mm{constructor(re){super(re),this.document=hl}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const pu=t.Ps`
    query NccnGuidelineSelectTypeahead($name: String!) {
  nccnGuidelinesTypeahead(queryTerm: $name) {
    ...NccnGuidelineSelectTypeaheadFields
  }
}
    ${No}`;let fl=(()=>{class y extends t.AE{constructor(re){super(re),this.document=pu}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const ml=t.Ps`
    query NccnGuidelineSelectTag($id: Int!) {
  nccnGuideline(id: $id) {
    ...NccnGuidelineSelectTypeaheadFields
  }
}
    ${No}`;let Cc=(()=>{class y extends t.AE{constructor(re){super(re),this.document=ml}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const gl=t.Ps`
    query PhenotypeSelectTypeahead($name: String!) {
  phenotypeTypeahead(queryTerm: $name) {
    ...PhenotypeSelectTypeaheadFields
  }
}
    ${Zo}`;let zc=(()=>{class y extends t.AE{constructor(re){super(re),this.document=gl}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const La=t.Ps`
    query PhenotypeSelectTag($id: Int!) {
  phenotype(id: $id) {
    ...PhenotypeSelectTypeaheadFields
  }
}
    ${Zo}`;let vl=(()=>{class y extends t.AE{constructor(re){super(re),this.document=La}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const ka=t.Ps`
    query QuickAddSourceCheckCitation($sourceType: SourceSource!, $citationId: String!) {
  remoteCitation(sourceType: $sourceType, citationId: $citationId)
}
    `;let hu=(()=>{class y extends t.AE{constructor(re){super(re),this.document=ka}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const Ra=t.Ps`
    mutation QuickAddSourceRemoteCitation($input: AddRemoteCitationInput!) {
  addRemoteCitation(input: $input) {
    newSource {
      id
      citationId
      sourceType
    }
  }
}
    `;let fu=(()=>{class y extends t.mm{constructor(re){super(re),this.document=Ra}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const _l=t.Ps`
    query SourceSelectTypeahead($partialCitationId: String!, $sourceType: SourceSource!) {
  sourceTypeahead(citationId: $partialCitationId, sourceType: $sourceType) {
    ...SourceSelectTypeaheadFields
  }
}
    ${eo}`;let Tc=(()=>{class y extends t.AE{constructor(re){super(re),this.document=_l}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const Va=t.Ps`
    query SourceSelectTag($id: Int!) {
  source(id: $id) {
    ...SourceSelectTypeaheadFields
  }
}
    ${eo}`;let Mc=(()=>{class y extends t.AE{constructor(re){super(re),this.document=Va}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const yl=t.Ps`
    mutation QuickAddTherapy($name: String!, $ncitId: String) {
  addTherapy(input: {name: $name, ncitId: $ncitId}) {
    ...QuickAddTherapyFields
  }
}
    ${Do}`;let mu=(()=>{class y extends t.mm{constructor(re){super(re),this.document=yl}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const Us=t.Ps`
    query TherapySelectTypeahead($name: String!) {
  therapyTypeahead(queryTerm: $name) {
    ...TherapySelectTypeaheadFields
  }
}
    ${ri}`;let pa=(()=>{class y extends t.AE{constructor(re){super(re),this.document=Us}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const gu=t.Ps`
    query TherapySelectTag($id: Int!) {
  therapy(id: $id) {
    ...TherapySelectTypeaheadFields
  }
}
    ${ri}`;let S1=(()=>{class y extends t.AE{constructor(re){super(re),this.document=gu}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const Cl=t.Ps`
    query VariantManager($variantName: String, $featureName: String, $diseaseName: String, $therapyName: String, $variantAlias: String, $variantTypeId: Int, $variantGroupId: Int, $sortBy: VariantsSort, $first: Int, $last: Int, $before: String, $after: String) {
  browseVariants(
    variantName: $variantName
    featureName: $featureName
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
    ${mi}`;let vu=(()=>{class y extends t.AE{constructor(re){super(re),this.document=Cl}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const Sd=t.Ps`
    mutation QuickAddVariant($name: String!, $featureId: Int!, $organizationId: Int) {
  createVariant(
    input: {name: $name, featureId: $featureId, organizationId: $organizationId}
  ) {
    ...QuickAddVariantFields
  }
}
    ${nr}`;let _u=(()=>{class y extends t.mm{constructor(re){super(re),this.document=Sd}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const yu=t.Ps`
    query VariantSelectTypeahead($name: String!, $featureId: Int) {
  variants(name: $name, featureId: $featureId, first: 50) {
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
    ${Oo}`;let zl=(()=>{class y extends t.AE{constructor(re){super(re),this.document=yu}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const Ba=t.Ps`
    query VariantSelectTag($variantId: Int!) {
  variant(id: $variantId) {
    ...VariantSelectTypeaheadFields
  }
}
    ${Oo}`;let Tl=(()=>{class y extends t.AE{constructor(re){super(re),this.document=Ba}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const Cu=t.Ps`
    query VariantTypeSelectTypeahead($name: String!) {
  variantTypeTypeahead(queryTerm: $name) {
    ...VariantTypeSelectTypeaheadFields
  }
}
    ${bo}`;let Ml=(()=>{class y extends t.AE{constructor(re){super(re),this.document=Cu}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const E1=t.Ps`
    query VariantTypeSelectTag($id: Int!) {
  variantType(id: $id) {
    ...VariantTypeSelectTypeaheadFields
  }
}
    ${bo}`;let bl=(()=>{class y extends t.AE{constructor(re){super(re),this.document=E1}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const x1=t.Ps`
    query AssertionDetail($assertionId: Int!) {
  assertion(id: $assertionId) {
    ...AssertionDetailFields
  }
}
    ${lo}`;let zu=(()=>{class y extends t.AE{constructor(re){super(re),this.document=x1}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const D1=t.Ps`
    query AssertionSummary($assertionId: Int!) {
  assertion(id: $assertionId) {
    ...AssertionSummaryFields
  }
}
    ${Ri}`;let bc=(()=>{class y extends t.AE{constructor(re){super(re),this.document=D1}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const O1=t.Ps`
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
    `;let w1=(()=>{class y extends t.AE{constructor(re){super(re),this.document=O1}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const Ki=t.Ps`
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
    `;let Tu=(()=>{class y extends t.AE{constructor(re){super(re),this.document=Ki}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const P1=t.Ps`
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
    `;let I1=(()=>{class y extends t.AE{constructor(re){super(re),this.document=P1}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const Mu=t.Ps`
    query DiseasesSummary($diseaseId: Int!) {
  disease(id: $diseaseId) {
    ...DiseasesSummaryFields
  }
}
    ${jn}`;let A1=(()=>{class y extends t.AE{constructor(re){super(re),this.document=Mu}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const bu=t.Ps`
    query EvidenceDetail($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...EvidenceDetailFields
  }
}
    ${Ve}`;let ha=(()=>{class y extends t.AE{constructor(re){super(re),this.document=bu}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const fa=t.Ps`
    query EvidenceSummary($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...EvidenceSummaryFields
  }
}
    ${oe}`;let Sc=(()=>{class y extends t.AE{constructor(re){super(re),this.document=fa}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const Ec=t.Ps`
    query FeatureDetail($featureId: Int!) {
  feature(id: $featureId) {
    ...FeatureDetailFields
  }
}
    ${De}`;let Sl=(()=>{class y extends t.AE{constructor(re){super(re),this.document=Ec}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const bs=t.Ps`
    query FeaturesSummary($featureId: Int!) {
  feature(id: $featureId) {
    ...FeatureSummaryFields
  }
}
    ${Ct}`;let Ha=(()=>{class y extends t.AE{constructor(re){super(re),this.document=bs}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const El=t.Ps`
    query MolecularProfileDetail($mpId: Int!) {
  molecularProfile(id: $mpId) {
    ...MolecularProfileDetailFields
  }
}
    ${Nt}`;let js=(()=>{class y extends t.AE{constructor(re){super(re),this.document=El}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const Ya=t.Ps`
    query MolecularProfileSummary($mpId: Int!) {
  molecularProfile(id: $mpId) {
    ...MolecularProfileSummaryFields
  }
}
    ${an}`;let Zr=(()=>{class y extends t.AE{constructor(re){super(re),this.document=Ya}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const Su=t.Ps`
    query OrganizationDetail($organizationId: Int!) {
  organization(id: $organizationId) {
    ...OrganizationDetailFields
  }
}
    ${Qt}`;let Eu=(()=>{class y extends t.AE{constructor(re){super(re),this.document=Su}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const xu=t.Ps`
    query OrganizationGroups($organizationId: Int!) {
  organization(id: $organizationId) {
    subGroups {
      ...OrganizationGroupsFields
    }
  }
}
    ${yn}`;let xl=(()=>{class y extends t.AE{constructor(re){super(re),this.document=xu}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const xc=t.Ps`
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
    ${Rn}`;let Du=(()=>{class y extends t.AE{constructor(re){super(re),this.document=xc}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const Ou=t.Ps`
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
    `;let wu=(()=>{class y extends t.AE{constructor(re){super(re),this.document=Ou}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const Ss=t.Ps`
    query DataReleases {
  dataReleases {
    ...Release
  }
}
    ${bn}`;let Pu=(()=>{class y extends t.AE{constructor(re){super(re),this.document=Ss}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const Iu=t.Ps`
    query SourceDetail($sourceId: Int!) {
  source(id: $sourceId) {
    ...SourceDetailFields
  }
}
    ${dn}`;let lr=(()=>{class y extends t.AE{constructor(re){super(re),this.document=Iu}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const Dc=t.Ps`
    query SourceSummary($sourceId: Int!) {
  source(id: $sourceId) {
    ...SourceSummaryFields
  }
}
    ${On}`;let Dl=(()=>{class y extends t.AE{constructor(re){super(re),this.document=Dc}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const Oc=t.Ps`
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
    `;let ar=(()=>{class y extends t.AE{constructor(re){super(re),this.document=Oc}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const ma=t.Ps`
    query TherapiesSummary($therapyId: Int!) {
  therapy(id: $therapyId) {
    ...TherapiesSummaryFields
  }
}
    ${Vn}`;let Ol=(()=>{class y extends t.AE{constructor(re){super(re),this.document=ma}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const wl=t.Ps`
    query UserDetail($userId: Int!) {
  user(id: $userId) {
    ...UserDetailFields
  }
}
    ${Un}`;let Ed=(()=>{class y extends t.AE{constructor(re){super(re),this.document=wl}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const F1=t.Ps`
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
    ${Kn}
${Co}
${Zn}
${fo}`;let xd=(()=>{class y extends t.AE{constructor(re){super(re),this.document=F1}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const Au=t.Ps`
    mutation UpdateNotificationStatus($input: UpdateNotificationStatusInput!) {
  updateNotificationStatus(input: $input) {
    notifications {
      ...notificationNode
    }
  }
}
    ${fo}`;let N1=(()=>{class y extends t.mm{constructor(re){super(re),this.document=Au}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const Fu=t.Ps`
    mutation Unsubscribe($input: UnsubscribeInput!) {
  unsubscribe(input: $input) {
    unsubscribedEntities {
      ...subscribable
    }
  }
}
    ${So}`;let Dd=(()=>{class y extends t.mm{constructor(re){super(re),this.document=Fu}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const L1=t.Ps`
    mutation Subscribe($input: SubscribeInput!) {
  subscribe(input: $input) {
    subscriptions {
      id
    }
  }
}
    `;let Pl=(()=>{class y extends t.mm{constructor(re){super(re),this.document=L1}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const wc=t.Ps`
    query VariantGroupDetail($variantGroupId: Int!) {
  variantGroup(id: $variantGroupId) {
    ...VariantGroupDetailFields
  }
}
    ${qn}`;let Qs=(()=>{class y extends t.AE{constructor(re){super(re),this.document=wc}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const ga=t.Ps`
    query VariantGroupsSummary($variantGroupId: Int!) {
  variantGroup(id: $variantGroupId) {
    ...VariantGroupSummaryFields
  }
}
    ${wo}`;let $a=(()=>{class y extends t.AE{constructor(re){super(re),this.document=ga}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const k1=t.Ps`
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
    `;let Nu=(()=>{class y extends t.AE{constructor(re){super(re),this.document=k1}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const Lu=t.Ps`
    query VariantDetail($variantId: Int!) {
  variant(id: $variantId) {
    ...VariantDetailFields
  }
}
    ${Ro}`;let Il=(()=>{class y extends t.AE{constructor(re){super(re),this.document=Lu}}return y.\u0275fac=function(re){return new(re||y)(i.LFG(t._M))},y.\u0275prov=i.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();const Gs=t.Ps`
    query VariantSummary($variantId: Int!) {
  variant(id: $variantId) {
    ...VariantSummaryFields
  }
}