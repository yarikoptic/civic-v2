"use strict";(self.webpackChunkmain=self.webpackChunkmain||[]).push([[8533],{8616:(F,O,t)=>{t.d(O,{u:()=>i});var p=t(5e3),n=t(685),e=t(1912),z=t(3618),x=t(647);function r(l,c){1&l&&(p.TgZ(0,"span"),p._uU(1," You must be logged in to view this page. "),p.qZA())}function T(l,c){1&l&&p._UZ(0,"cvc-login-button")}function y(l,c){1&l&&(p.TgZ(0,"nz-typography",4),p._UZ(1,"i",5),p.qZA())}let i=(()=>{class l{}return l.\u0275fac=function(v){return new(v||l)},l.\u0275cmp=p.Xpm({type:l,selectors:[["cvc-login-prompt"]],decls:7,vars:3,consts:[[3,"nzNotFoundImage","nzNotFoundContent","nzNotFoundFooter"],["contentTpl",""],["footerTpl",""],["emptyImage",""],["nzType","secondary"],["nz-icon","","nzType","login","nzTheme","outline",2,"font-size","50pt"]],template:function(v,d){if(1&v&&(p.TgZ(0,"nz-empty",0),p.YNc(1,r,2,0,"ng-template",null,1,p.W1O),p.YNc(3,T,1,0,"ng-template",null,2,p.W1O),p.qZA(),p.YNc(5,y,2,0,"ng-template",null,3,p.W1O)),2&v){const M=p.MAs(2),o=p.MAs(4),D=p.MAs(6);p.Q6J("nzNotFoundImage",D)("nzNotFoundContent",M)("nzNotFoundFooter",o)}},directives:[n.p9,e.s,z.ZU,x.Ls],styles:["[_nghost-%COMP%]{display:inline-block}"]}),l})()},9386:(F,O,t)=>{t.d(O,{a:()=>T});var p=t(9808),n=t(1844),e=t(685),z=t(647),x=t(3618),r=t(5e3);let T=(()=>{class y{}return y.\u0275fac=function(l){return new(l||y)},y.\u0275mod=r.oAB({type:y}),y.\u0275inj=r.cJS({imports:[[p.ez,n.B,e.Xo,z.PV,x.ZJ]]}),y})()},7701:(F,O,t)=>{t.d(O,{j:()=>V});var p=t(6654),n=t(5e3),e=t(9808),z=t(325),x=t(8481),r=t(3610),T=t(4850),y=t(712),i=t(7484),l=t(647),c=t(6550),v=t(3098),d=t(6949);function M(s,C){if(1&s&&(n._UZ(0,"i",7),n._uU(1)),2&s){const m=n.oxw().ngIf;n.xp6(1),n.hij(" ",m.name," ")}}function o(s,C){if(1&s&&(n.TgZ(0,"cvc-link-tag",9),n._uU(1),n.qZA()),2&s){const m=n.oxw(2).ngIf;n.Q6J("href",m.url),n.xp6(1),n.hij(" ",m.soid," ")}}function D(s,C){if(1&s&&n.YNc(0,o,2,2,"cvc-link-tag",8),2&s){const m=n.oxw().ngIf;n.Q6J("ngIf","N/A"!=m.soid)}}function L(s,C){if(1&s&&(n.ynx(0),n.TgZ(1,"nz-card",2),n.YNc(2,M,2,1,"ng-template",null,3,n.W1O),n.YNc(4,D,1,1,"ng-template",null,4,n.W1O),n.TgZ(6,"nz-descriptions",5),n.TgZ(7,"nz-descriptions-item",6),n._uU(8),n.qZA(),n.qZA(),n.qZA(),n.BQk()),2&s){const m=C.ngIf,A=n.MAs(3),U=n.MAs(5);n.xp6(1),n.Q6J("nzTitle",A)("nzExtra",U),n.xp6(5),n.Q6J("nzColumn",2),n.xp6(2),n.hij(" ",m.variantCount," ")}}let Z=(()=>{class s{constructor(m){this.gql=m}ngOnInit(){if(null==this.variantTypeId)throw new Error("cvc-variant-type-popover requires valid variantTypeId input.");this.variantType$=this.gql.watch({variantTypeId:this.variantTypeId}).valueChanges.pipe((0,T.U)(({data:m})=>m.variantTypePopover))}}return s.\u0275fac=function(m){return new(m||s)(n.Y36(y.tw_))},s.\u0275cmp=n.Xpm({type:s,selectors:[["cvc-variant-type-popover"]],inputs:{variantTypeId:"variantTypeId"},decls:3,vars:3,consts:[["id","popover-content"],[4,"ngIf"],["nzBordered","false","id","card-content",3,"nzTitle","nzExtra"],["cardTitle",""],["linkout",""],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","Variants","nzSpan","2"],["nz-icon","","nzType","civic:varianttype"],["tooltip","View on SequenceOntology.org",3,"href",4,"ngIf"],["tooltip","View on SequenceOntology.org",3,"href"]],template:function(m,A){1&m&&(n.TgZ(0,"div",0),n.YNc(1,L,9,4,"ng-container",1),n.ALo(2,"ngrxPush"),n.qZA()),2&m&&(n.xp6(1),n.Q6J("ngIf",n.lcZ(2,1,A.variantType$)))},directives:[e.O5,i.bd,l.Ls,c.l,v.R7,v.uj],pipes:[d.fM],styles:["[_nghost-%COMP%]{display:block;margin:-8px -12px}[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}[_nghost-%COMP%]     .ant-descriptions-view{border:none}[_nghost-%COMP%]     #entity-child-counts{border-top:1px solid #f0f0f0;padding:8px}[_nghost-%COMP%]     #entity-child-counts nz-space{width:100%}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child nz-tag{margin-right:0}.popover-text[_ngcontent-%COMP%]{width:100%;padding:8px;border-bottom:1px solid #f0f0f0}#popover-content[_ngcontent-%COMP%]{min-width:350px;max-width:500px;min-height:125px}"]}),s})();function N(s,C){}function S(s,C){if(1&s&&(n.ynx(0),n.TgZ(1,"a",5),n.YNc(2,N,0,0,"ng-template",6),n.qZA(),n.BQk()),2&s){const m=n.oxw(),A=n.MAs(2);n.xp6(1),n.Q6J("routerLink",m.variantType.link),n.xp6(1),n.Q6J("ngTemplateOutlet",A)}}function h(s,C){}function P(s,C){if(1&s&&(n.TgZ(0,"nz-tag",9),n.YNc(1,h,0,0,"ng-template",6),n.qZA()),2&s){n.oxw();const m=n.MAs(2);n.oxw();const A=n.MAs(8);n.Q6J("nzPopoverMouseEnterDelay",.5)("nzPopoverContent",m),n.xp6(1),n.Q6J("ngTemplateOutlet",A)}}function f(s,C){if(1&s&&n._UZ(0,"cvc-variant-type-popover",10),2&s){const m=n.oxw(2);n.Q6J("variantTypeId",m.variantType.id)}}function E(s,C){if(1&s&&(n.YNc(0,P,2,3,"nz-tag",7),n.YNc(1,f,1,1,"ng-template",null,8,n.W1O)),2&s){const m=n.oxw(),A=n.MAs(6);n.Q6J("ngIf",m.enablePopover)("ngIfElse",A)}}function u(s,C){}function I(s,C){if(1&s&&n.YNc(0,u,0,0,"ng-template",6),2&s){n.oxw();const m=n.MAs(2);n.Q6J("ngTemplateOutlet",m)}}function a(s,C){}function g(s,C){if(1&s&&(n.TgZ(0,"nz-tag"),n.YNc(1,a,0,0,"ng-template",6),n.qZA()),2&s){n.oxw();const m=n.MAs(8);n.xp6(1),n.Q6J("ngTemplateOutlet",m)}}function _(s,C){if(1&s&&(n._UZ(0,"i",11),n._uU(1)),2&s){const m=n.oxw();n.xp6(1),n.hij(" ",m.variantType.name,"\n")}}let V=(()=>{class s extends p.a{constructor(){super(...arguments),this.linked=!0,this.enablePopover=!0}set variantType(m){if(!m)throw new Error("variant-type-tag variantType Input requires LinkableVariantType.");this._variantType=m}get variantType(){return this._variantType}idFunction(){return this.variantType.id}}return s.\u0275fac=function(){let C;return function(A){return(C||(C=n.n5z(s)))(A||s)}}(),s.\u0275cmp=n.Xpm({type:s,selectors:[["cvc-variant-type-tag"]],inputs:{variantType:"variantType",linked:"linked",enablePopover:"enablePopover"},features:[n.qOj],decls:9,vars:2,consts:[[4,"ngIf","ngIfElse"],["tag",""],["unlinked",""],["noPopover",""],["tagContent",""],[3,"routerLink"],[3,"ngTemplateOutlet"],["nz-popover","","nzPopoverPlacement","right","nzPopoverTrigger","hover",3,"nzPopoverMouseEnterDelay","nzPopoverContent",4,"ngIf","ngIfElse"],["variantTypePopover",""],["nz-popover","","nzPopoverPlacement","right","nzPopoverTrigger","hover",3,"nzPopoverMouseEnterDelay","nzPopoverContent"],[3,"variantTypeId"],["nz-icon","","nzType","civic-varianttype","nzTheme","twotone","nzTwotoneColor","#33B358"]],template:function(m,A){if(1&m&&(n.YNc(0,S,3,2,"ng-container",0),n.YNc(1,E,3,2,"ng-template",null,1,n.W1O),n.YNc(3,I,1,1,"ng-template",null,2,n.W1O),n.YNc(5,g,2,1,"ng-template",null,3,n.W1O),n.YNc(7,_,2,1,"ng-template",null,4,n.W1O)),2&m){const U=n.MAs(4);n.Q6J("ngIf",A.linked)("ngIfElse",U)}},directives:[e.O5,z.yS,e.tP,x.j,r.lU,Z,l.Ls],styles:["[_nghost-%COMP%]{display:block}"],changeDetection:0}),s})()},8645:(F,O,t)=>{t.d(O,{M:()=>v});var p=t(9808),n=t(325),e=t(8481),z=t(7484),x=t(3630),r=t(3098),T=t(6949),y=t(647),i=t(5e3);let l=(()=>{class d{}return d.\u0275fac=function(o){return new(o||d)},d.\u0275mod=i.oAB({type:d}),d.\u0275inj=i.cJS({imports:[[p.ez,T.WG,y.PV,z.vh,r.q6,x.X]]}),d})();var c=t(3610);let v=(()=>{class d{}return d.\u0275fac=function(o){return new(o||d)},d.\u0275mod=i.oAB({type:d}),d.\u0275inj=i.cJS({imports:[[p.ez,n.Bz,y.PV,e.X,c.$6,l]]}),d})()},9990:(F,O,t)=>{t.d(O,{M:()=>l});var p=t(9808),n=t(8776),e=t(5e3),z=t(656),x=t(4182);const T={name:"ensembl-version",validation:(c,v)=>{if(null==c.value)return null;{let d=+c.value;return d<75||d>150?{"ensembl-version":!0}:null}}},y={name:"ensembl-version",message:(c,v)=>{var d;return`${null===(d=v.formControl)||void 0===d?void 0:d.value} is not a valid version of Ensembl. Must be an number between 75 and the latest version of Ensembl.`}},i={name:"cvc-ensembl-input",component:(()=>{class c extends n.fS{constructor(){super(...arguments),this.defaultOptions={templateOptions:{label:"Ensembl Version",helpText:"Enter a valid Ensembl database version (e.g. 75)."},validators:{validation:["ensembl-version"]}}}}return c.\u0275fac=function(){let v;return function(M){return(v||(v=e.n5z(c)))(M||c)}}(),c.\u0275cmp=e.Xpm({type:c,selectors:[["cvc-ensembl-input-type"]],features:[e.qOj],decls:1,vars:2,consts:[[3,"formControl","formlyAttributes"]],template:function(d,M){1&d&&e._UZ(0,"nz-input-number",0),2&d&&e.Q6J("formControl",M.formControl)("formlyAttributes",M.field)},directives:[z._,x.JJ,x.oH,n.VQ],styles:["[_nghost-%COMP%]{display:block}"],changeDetection:0}),c})(),wrappers:["form-field"]};let l=(()=>{class c{}return c.\u0275fac=function(d){return new(d||c)},c.\u0275mod=e.oAB({type:c}),c.\u0275inj=e.cJS({imports:[[p.ez,x.u5,x.UX,n.X0.forChild({types:[i],validators:[T],validationMessages:[y]}),z.Z]]}),c})()},9911:(F,O,t)=>{t.d(O,{G:()=>y});var p=t(9808),n=t(8776),e=t(5e3),z=t(7484);const r={name:"variant-coordinates-card",component:(()=>{class i extends n.fS{constructor(){super(...arguments),this.defaultOptions={templateOptions:{isFusionVariant:!1}}}}return i.\u0275fac=function(){let l;return function(v){return(l||(l=e.n5z(i)))(v||i)}}(),i.\u0275cmp=e.Xpm({type:i,selectors:[["cvc-variant-coordinates-card-type"]],features:[e.qOj],decls:3,vars:1,consts:[[3,"nzTitle"],["fieldComponent",""]],template:function(c,v){1&c&&(e.TgZ(0,"nz-card",0),e.GkF(1,null,1),e.qZA()),2&c&&e.Q6J("nzTitle",v.to.label)},directives:[z.bd],styles:[""],changeDetection:0}),i})()};var T=t(4182);let y=(()=>{class i{}return i.\u0275fac=function(c){return new(c||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[[p.ez,T.UX,n.X0.forChild({types:[r]}),z.vh]]}),i})()},6501:(F,O,t)=>{t.d(O,{r:()=>S});var p=t(9808),n=t(8776),e=t(8929),z=t(7625),x=t(373),r=t(5e3),T=t(712),y=t(8054),i=t(4182),l=t(6949),c=t(7701);function v(h,P){if(1&h&&(r.TgZ(0,"nz-option",6),r._uU(1),r.qZA()),2&h){const f=P.$implicit;r.hYB("nzLabel","",f.name," (",f.soid,")"),r.Q6J("nzValue",f),r.xp6(1),r.AsE(" ",f.name," (",f.soid,") ")}}function d(h,P){if(1&h&&(r.ynx(0),r.YNc(1,v,2,5,"nz-option",5),r.BQk()),2&h){const f=P.ngrxLet;r.xp6(1),r.Q6J("ngForOf",f)}}function M(h,P){1&h&&r._uU(0," No variant type found in CIViC that matches the string provided. ")}function o(h,P){if(1&h){const f=r.EpF();r.ynx(0),r.TgZ(1,"nz-select",2),r.NdJ("nzOnSearch",function(u){return r.CHM(f),r.oxw().to.onSearch(u)}),r.YNc(2,d,2,1,"ng-container",3),r.qZA(),r.YNc(3,M,1,0,"ng-template",null,4,r.W1O),r.BQk()}if(2&h){const f=r.MAs(4),E=r.oxw();r.xp6(1),r.Q6J("formControl",E.formControl)("formlyAttributes",E.field)("nzPlaceHolder",E.to.placeholder?E.to.placeholder:null)("nzNotFoundContent",f)("nzShowArrow",E.to.showArrow)("nzFilterOption",E.to.filterOption),r.xp6(1),r.Q6J("ngrxLet",E.variantTypes$)}}function D(h,P){if(1&h&&r._UZ(0,"cvc-variant-type-tag",7),2&h){const f=r.oxw();r.Q6J("variantType",f.formControl.value)}}const Z={name:"variant-type-input",component:(()=>{class h extends n.fS{constructor(f){super(),this.variantTypeTypeaheadQuery=f,this.destroy$=new e.xQ,this.defaultOptions={templateOptions:{placeholder:"Search Variant Types",showArrow:!1,onSearch:()=>{},minLengthSearch:1,optionList:[]}}}ngOnInit(){this.queryRef=this.variantTypeTypeaheadQuery.watch({name:""}),this.variantTypes$=this.queryRef.valueChanges.pipe((0,z.R)(this.destroy$),(0,x.j)("data","variantTypeTypeahead"))}ngAfterViewInit(){this.to.onSearch=f=>{var E;this.to.fieldValue=f,this.to.fieldLength=f.length,!(f.length<this.to.minLengthSearch||f.length>this.to.maxLength)&&(null===(E=this.queryRef)||void 0===E||E.refetch({name:f}))}}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return h.\u0275fac=function(f){return new(f||h)(r.Y36(T.BnY))},h.\u0275cmp=r.Xpm({type:h,selectors:[["cvc-variant-type-input-type"]],features:[r.qOj],decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["drugListItem",""],["nzShowSearch","","nzServerSearch","",3,"formControl","formlyAttributes","nzPlaceHolder","nzNotFoundContent","nzShowArrow","nzFilterOption","nzOnSearch"],[4,"ngrxLet"],["sourceLoader",""],["nzCustomContent","",3,"nzLabel","nzValue",4,"ngFor","ngForOf"],["nzCustomContent","",3,"nzLabel","nzValue"],[3,"variantType"]],template:function(f,E){if(1&f&&(r.YNc(0,o,5,7,"ng-container",0),r.YNc(1,D,1,1,"ng-template",null,1,r.W1O)),2&f){const u=r.MAs(2);r.Q6J("ngIf",!(null!=E.formControl.value&&E.formControl.value.id))("ngIfElse",u)}},directives:[p.O5,y.Vq,i.JJ,i.oH,n.VQ,l.eJ,p.sg,y.Ip,c.j],styles:[""]}),h})()};var N=t(8645);let S=(()=>{class h{}return h.\u0275fac=function(f){return new(f||h)},h.\u0275mod=r.oAB({type:h}),h.\u0275inj=r.cJS({imports:[[p.ez,i.UX,n.X0.forChild({types:[Z]}),l.WG,y.LV,N.M]]}),h})()},6738:(F,O,t)=>{function p(i){let l={value:void 0,unset:void 0};return i&&i.trim().length>0?l.value=i.trim():l.unset=!0,l}function n(i){let l={value:void 0,unset:void 0};return void 0!==i?l.value=i:l.unset=!0,l}t.d(O,{aP:()=>y,li:()=>e,Zg:()=>z,_$:()=>x,uP:()=>n,dh:()=>r,xt:()=>p});var e=(()=>{return(i=e||(e={}))[i.NotApplicable=0]="NotApplicable",i[i.NoneFound=1]="NoneFound",i[i.Found=2]="Found",e;var i})();function z(i,l){let c,v,d;return l==e.Found?(c=void 0,v=void 0,d=i):l==e.NoneFound?(v=!0,c=void 0,d=void 0):(c=!0,v=void 0,d=void 0),{ids:d?d.map(M=>+M):void 0,noneFound:v,notApplicable:c}}function x(i){return i?{chromosome:T(i.chromosome),representativeTranscript:T(i.representativeTranscript),start:i.start?+i.start:void 0,stop:i.stop?+i.stop:void 0}:{chromosome:void 0,representativeTranscript:void 0,start:void 0,stop:void 0}}function r(i){let l={value:void 0,unset:void 0};return i?l.value=i:l.unset=!0,l}function T(i){let l;return l=i&&i.length>0?i:void 0,l}const y=[{value:void 0,label:""},{value:"1",label:"1"},{value:"2",label:"2"},{value:"3",label:"3"},{value:"4",label:"4"},{value:"5",label:"5"},{value:"6",label:"6"},{value:"7",label:"7"},{value:"8",label:"8"},{value:"9",label:"9"},{value:"10",label:"10"},{value:"11",label:"11"},{value:"12",label:"12"},{value:"13",label:"13"},{value:"14",label:"14"},{value:"15",label:"15"},{value:"16",label:"16"},{value:"17",label:"17"},{value:"18",label:"18"},{value:"19",label:"19"},{value:"20",label:"20"},{value:"21",label:"21"},{value:"22",label:"22"},{value:"X",label:"X"},{value:"Y",label:"Y"},{value:"MT",label:"MT"}]},7338:(F,O,t)=>{t.d(O,{z:()=>I});var p=t(9808),n=t(9444),e=t(6949),z=t(8776),x=t(7484),r=t(5482),T=t(4546),y=t(1894),i=t(647),l=t(3610),c=t(8144),v=t(3618),d=t(5109),M=t(6789),o=t(5e3),D=t(2313);let L=(()=>{class a{constructor(_){this.sanitizer=_}transform(_){return this.sanitizer.bypassSecurityTrustHtml(_)}}return a.\u0275fac=function(_){return new(_||a)(o.Y36(D.H7,16))},a.\u0275pipe=o.Yjl({name:"sanitizeHtml",type:a,pure:!0}),a})();function Z(a,g){if(1&a&&(o.TgZ(0,"span"),o._uU(1),o.qZA()),2&a){const _=o.oxw(2);o.xp6(1),o.Oqu(_.to.label)}}function N(a,g){if(1&a&&o._UZ(0,"i",11),2&a){o.oxw();const _=o.MAs(3);o.Q6J("nzPopoverContent",_)}}function S(a,g){if(1&a&&(o._UZ(0,"span",12),o.ALo(1,"sanitizeHtml")),2&a){const _=o.oxw(3);o.Q6J("innerHtml",o.lcZ(1,1,_.to.helpText),o.oJD)}}function h(a,g){1&a&&(o.ynx(0),o.YNc(1,N,1,1,"i",9),o.YNc(2,S,2,3,"ng-template",null,10,o.W1O),o.BQk())}function P(a,g){if(1&a&&(o.ynx(0),o.TgZ(1,"nz-form-label",7),o.TgZ(2,"nz-space"),o.YNc(3,Z,2,1,"span",8),o.YNc(4,h,4,0,"ng-container",1),o.qZA(),o.qZA(),o.BQk()),2&a){const _=o.oxw();o.xp6(1),o.Q6J("nzRequired",_.to.required&&!0!==_.to.hideRequiredMarker)("nzFor",_.id),o.xp6(3),o.Q6J("ngIf",_.to.helpText)}}const f=function(a){return{hidden:a}},u={wrappers:[{name:"form-field",component:(()=>{class a extends z.n2{get errorState(){return this.showError?"error":""}}return a.\u0275fac=function(){let g;return function(V){return(g||(g=o.n5z(a)))(V||a)}}(),a.\u0275cmp=o.Xpm({type:a,selectors:[["cvc-form-field-wrapper"]],features:[o.qOj],decls:10,vars:7,consts:[[3,"ngClass"],[4,"ngIf"],[3,"nzValidateStatus"],["fieldComponent",""],["nzType","danger"],[3,"field"],["nzType","secondary"],[3,"nzRequired","nzFor"],[4,"nzSpaceItem"],["nz-icon","","nzType","question-circle","nzTheme","outline","nz-popover","",3,"nzPopoverContent",4,"nzSpaceItem"],["help",""],["nz-icon","","nzType","question-circle","nzTheme","outline","nz-popover","",3,"nzPopoverContent"],[3,"innerHtml"]],template:function(_,V){1&_&&(o.TgZ(0,"div",0),o.TgZ(1,"nz-form-item"),o.YNc(2,P,5,3,"ng-container",1),o.TgZ(3,"nz-form-control",2),o.GkF(4,null,3),o.qZA(),o.TgZ(6,"nz-typography",4),o._UZ(7,"formly-validation-message",5),o.qZA(),o.TgZ(8,"nz-typography",6),o._uU(9),o.qZA(),o.qZA(),o.qZA()),2&_&&(o.Q6J("ngClass",o.VKq(5,f,!0===V.to.hidden)),o.xp6(2),o.Q6J("ngIf",V.to.label&&!0!==V.to.hideLabel),o.xp6(1),o.Q6J("nzValidateStatus",V.errorState),o.xp6(4),o.Q6J("field",V.field),o.xp6(2),o.hij(" ",V.to.optionText," "))},directives:[p.mk,y.SK,T.Nx,p.O5,y.t3,T.iK,c.NU,c.$1,i.Ls,l.lU,T.Fd,v.ZU,z.u_],pipes:[L],styles:[".hidden[_ngcontent-%COMP%]{display:none}"]}),a})()}]};let I=(()=>{class a{}return a.\u0275fac=function(_){return new(_||a)},a.\u0275mod=o.oAB({type:a}),a.\u0275inj=o.cJS({imports:[[p.ez,e.WG,z.X0.forChild(u),y.Jb,x.vh,r.cD,M._,d.s,T.U5,i.PV,c.zf,l.$6,n.s,v.ZJ]]}),a})()},6462:(F,O,t)=>{t.d(O,{i:()=>f,m:()=>E});var p=t(655),n=t(1159),e=t(5e3),z=t(4182),x=t(8929),r=t(3753),T=t(7625),y=t(9439),i=t(1721),l=t(5664),c=t(226),v=t(2643),d=t(9808),M=t(647),o=t(969);const D=["switchElement"];function L(u,I){1&u&&e._UZ(0,"i",8)}function Z(u,I){if(1&u&&(e.ynx(0),e._uU(1),e.BQk()),2&u){const a=e.oxw(2);e.xp6(1),e.Oqu(a.nzCheckedChildren)}}function N(u,I){if(1&u&&(e.ynx(0),e.YNc(1,Z,2,1,"ng-container",9),e.BQk()),2&u){const a=e.oxw();e.xp6(1),e.Q6J("nzStringTemplateOutlet",a.nzCheckedChildren)}}function S(u,I){if(1&u&&(e.ynx(0),e._uU(1),e.BQk()),2&u){const a=e.oxw(2);e.xp6(1),e.Oqu(a.nzUnCheckedChildren)}}function h(u,I){if(1&u&&e.YNc(0,S,2,1,"ng-container",9),2&u){const a=e.oxw();e.Q6J("nzStringTemplateOutlet",a.nzUnCheckedChildren)}}let f=(()=>{class u{constructor(a,g,_,V,s,C){this.nzConfigService=a,this.host=g,this.ngZone=_,this.cdr=V,this.focusMonitor=s,this.directionality=C,this._nzModuleName="switch",this.isChecked=!1,this.onChange=()=>{},this.onTouched=()=>{},this.nzLoading=!1,this.nzDisabled=!1,this.nzControl=!1,this.nzCheckedChildren=null,this.nzUnCheckedChildren=null,this.nzSize="default",this.dir="ltr",this.destroy$=new x.xQ}updateValue(a){this.isChecked!==a&&(this.isChecked=a,this.onChange(this.isChecked))}focus(){this.focusMonitor.focusVia(this.switchElement.nativeElement,"keyboard")}blur(){this.switchElement.nativeElement.blur()}ngOnInit(){this.directionality.change.pipe((0,T.R)(this.destroy$)).subscribe(a=>{this.dir=a,this.cdr.detectChanges()}),this.dir=this.directionality.value,this.ngZone.runOutsideAngular(()=>{(0,r.R)(this.host.nativeElement,"click").pipe((0,T.R)(this.destroy$)).subscribe(a=>{a.preventDefault(),!(this.nzControl||this.nzDisabled||this.nzLoading)&&this.ngZone.run(()=>{this.updateValue(!this.isChecked),this.cdr.markForCheck()})}),(0,r.R)(this.switchElement.nativeElement,"keydown").pipe((0,T.R)(this.destroy$)).subscribe(a=>{if(this.nzControl||this.nzDisabled||this.nzLoading)return;const{keyCode:g}=a;g!==n.oh&&g!==n.SV&&g!==n.L_&&g!==n.K5||(a.preventDefault(),this.ngZone.run(()=>{g===n.oh?this.updateValue(!1):g===n.SV?this.updateValue(!0):(g===n.L_||g===n.K5)&&this.updateValue(!this.isChecked),this.cdr.markForCheck()}))})})}ngAfterViewInit(){this.focusMonitor.monitor(this.switchElement.nativeElement,!0).pipe((0,T.R)(this.destroy$)).subscribe(a=>{a||Promise.resolve().then(()=>this.onTouched())})}ngOnDestroy(){this.focusMonitor.stopMonitoring(this.switchElement.nativeElement),this.destroy$.next(),this.destroy$.complete()}writeValue(a){this.isChecked=a,this.cdr.markForCheck()}registerOnChange(a){this.onChange=a}registerOnTouched(a){this.onTouched=a}setDisabledState(a){this.nzDisabled=a,this.cdr.markForCheck()}}return u.\u0275fac=function(a){return new(a||u)(e.Y36(y.jY),e.Y36(e.SBq),e.Y36(e.R0b),e.Y36(e.sBO),e.Y36(l.tE),e.Y36(c.Is,8))},u.\u0275cmp=e.Xpm({type:u,selectors:[["nz-switch"]],viewQuery:function(a,g){if(1&a&&e.Gf(D,7),2&a){let _;e.iGM(_=e.CRH())&&(g.switchElement=_.first)}},inputs:{nzLoading:"nzLoading",nzDisabled:"nzDisabled",nzControl:"nzControl",nzCheckedChildren:"nzCheckedChildren",nzUnCheckedChildren:"nzUnCheckedChildren",nzSize:"nzSize"},exportAs:["nzSwitch"],features:[e._Bn([{provide:z.JU,useExisting:(0,e.Gpc)(()=>u),multi:!0}])],decls:9,vars:15,consts:[["nz-wave","","type","button",1,"ant-switch",3,"disabled","nzWaveExtraNode"],["switchElement",""],[1,"ant-switch-handle"],["nz-icon","","nzType","loading","class","ant-switch-loading-icon",4,"ngIf"],[1,"ant-switch-inner"],[4,"ngIf","ngIfElse"],["uncheckTemplate",""],[1,"ant-click-animating-node"],["nz-icon","","nzType","loading",1,"ant-switch-loading-icon"],[4,"nzStringTemplateOutlet"]],template:function(a,g){if(1&a&&(e.TgZ(0,"button",0,1),e.TgZ(2,"span",2),e.YNc(3,L,1,0,"i",3),e.qZA(),e.TgZ(4,"span",4),e.YNc(5,N,2,1,"ng-container",5),e.YNc(6,h,1,1,"ng-template",null,6,e.W1O),e.qZA(),e._UZ(8,"div",7),e.qZA()),2&a){const _=e.MAs(7);e.ekj("ant-switch-checked",g.isChecked)("ant-switch-loading",g.nzLoading)("ant-switch-disabled",g.nzDisabled)("ant-switch-small","small"===g.nzSize)("ant-switch-rtl","rtl"===g.dir),e.Q6J("disabled",g.nzDisabled)("nzWaveExtraNode",!0),e.xp6(3),e.Q6J("ngIf",g.nzLoading),e.xp6(2),e.Q6J("ngIf",g.isChecked)("ngIfElse",_)}},directives:[v.dQ,d.O5,M.Ls,o.f],encapsulation:2,changeDetection:0}),(0,p.gn)([(0,i.yF)()],u.prototype,"nzLoading",void 0),(0,p.gn)([(0,i.yF)()],u.prototype,"nzDisabled",void 0),(0,p.gn)([(0,i.yF)()],u.prototype,"nzControl",void 0),(0,p.gn)([(0,y.oS)()],u.prototype,"nzSize",void 0),u})(),E=(()=>{class u{}return u.\u0275fac=function(a){return new(a||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[[c.vT,d.ez,v.vG,M.PV,o.T]]}),u})()}}]);