(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"40is":function(n,e,t){"use strict";t.d(e,"a",function(){return i});var c=t("fXoL");let i=(()=>{class n{transform(n,e){return null==n||""===n?e:n}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275pipe=c.Nb({name:"ifEmpty",type:n,pure:!0}),n})()},ivbq:function(n,e,t){"use strict";t.d(e,"a",function(){return i});var c=t("fXoL");let i=(()=>{class n{transform(n,e){return n?"verbose"==e?"TIER_I_LEVEL_A"===n?"Tier I - Level A":"TIER_I_LEVEL_B"===n?"Tier I - Level B":"TIER_II_LEVEL_C"===n?"Tier II - Level C":"TIER_II_LEVEL_D"===n?"Tier II - Level D":"TIER_III"===n?"Tier III":"TIER_IV"===n?"Tier IV":"Not Applicable":n.toUpperCase().replace("TIER","").replace("LEVEL","").replace(/ /g,"").replace(/_/g,""):""}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275pipe=c.Nb({name:"formatAmp",type:n,pure:!0}),n})()},"u+rr":function(n,e,t){"use strict";t.d(e,"a",function(){return sn});var c=t("fXoL"),i=t("ofXK"),o=t("tyNb"),s=t("ZyQt"),r=t("+oEP"),a=t("lJxs"),l=t("l/kO"),p=t("JA5x"),b=t("B+r4"),g=t("xB20"),f=t("4xsP"),u=t("FwiY"),z=t("S0Et"),d=t("ifvR"),m=t("/ZnJ"),T=t("an+6"),I=t("p+8w"),C=t("9A8T"),v=t("N9dV"),E=t("40is"),h=t("ivbq");function P(n,e){if(1&n&&(c.Pb(0,"i",35),c.Gc(1)),2&n){const n=c.ec().ngIf;c.Cb(1),c.Ic(" ",n.name," ")}}function y(n,e){if(1&n&&(c.Pb(0,"cvc-gene-tag",36),c.Pb(1,"cvc-variant-tag",37)),2&n){const n=c.ec().ngIf;c.lc("enablePopover",!1)("gene",n.gene),c.Cb(1),c.lc("enablePopover",!1)("variant",n.variant)}}function U(n,e){if(1&n&&(c.Sb(0),c.Gc(1),c.Rb()),2&n){const n=e.ngIf;c.Cb(1),c.Ic(" ",n," ")}}function w(n,e){1&n&&(c.Ub(0,"span"),c.Gc(1,", "),c.Tb())}function O(n,e){if(1&n&&(c.Sb(0),c.Gc(1),c.Ec(2,w,2,0,"span",1),c.Rb()),2&n){const n=e.$implicit,t=e.last;c.Cb(1),c.Ic(" ",n.code,""),c.Cb(1),c.lc("ngIf",!t)}}function S(n,e){if(1&n&&(c.Sb(0),c.Ec(1,O,3,2,"ng-container",40),c.Rb()),2&n){const n=c.ec(2).ngIf;c.Cb(1),c.lc("ngForOf",n.acmgCodes)}}function L(n,e){1&n&&c.Gc(0," -- ")}function _(n,e){if(1&n&&(c.Ub(0,"nz-descriptions-item",38),c.Ec(1,S,2,1,"ng-container",9),c.Ec(2,L,1,0,"ng-template",null,39,c.Fc),c.Tb()),2&n){const n=c.uc(3),e=c.ec().ngIf;c.Cb(1),c.lc("ngIf",e.acmgCodes.length>0)("ngIfElse",n)}}function G(n,e){if(1&n&&(c.Ub(0,"nz-descriptions-item",41),c.Gc(1),c.fc(2,"ifEmpty"),c.fc(3,"formatAmp"),c.Tb()),2&n){const n=c.ec().ngIf;c.Cb(1),c.Ic(" ",c.hc(2,1,c.hc(3,4,n.ampLevel,"compact"),"--")," ")}}function x(n,e){1&n&&c.Pb(0,"i",42)}function A(n,e){1&n&&c.Pb(0,"i",43)}function F(n,e){1&n&&c.Pb(0,"i",42)}function k(n,e){1&n&&c.Pb(0,"i",43)}function D(n,e){if(1&n&&(c.Sb(0),c.Pb(1,"cvc-disease-tag",44),c.Rb()),2&n){const n=c.ec().ngIf;c.Cb(1),c.lc("enablePopover",!1)("disease",n.disease)}}function R(n,e){1&n&&c.Gc(0," N/A ")}function M(n,e){if(1&n&&(c.Ub(0,"span"),c.Pb(1,"cvc-drug-tag",46),c.Tb()),2&n){const n=e.$implicit;c.Cb(1),c.lc("enablePopover",!1)("drug",n)}}function N(n,e){if(1&n&&(c.Sb(0),c.Gc(1),c.fc(2,"titlecase"),c.Rb()),2&n){const n=c.ec(2).ngIf;c.Cb(1),c.Ic(" ",c.gc(2,1,n.drugInteractionType)," ")}}function V(n,e){if(1&n&&(c.Ub(0,"nz-descriptions-item",45),c.Ec(1,M,2,2,"span",40),c.Ec(2,N,3,3,"ng-container",1),c.Tb()),2&n){const n=c.ec().ngIf;c.Cb(1),c.lc("ngForOf",n.drugs),c.Cb(1),c.lc("ngIf",n.drugs.length>1)}}function q(n,e){if(1&n&&(c.Ub(0,"span"),c.Pb(1,"cvc-phenotype-tag",48),c.Tb()),2&n){const n=e.$implicit;c.Cb(1),c.lc("enablePopover",!1)("phenotype",n)}}function B(n,e){if(1&n&&(c.Ub(0,"nz-descriptions-item",47),c.Ec(1,q,2,2,"span",40),c.Tb()),2&n){const n=c.ec().ngIf;c.Cb(1),c.lc("ngForOf",n.phenotypes)}}function J(n,e){if(1&n&&(c.Sb(0),c.Ub(1,"nz-card",3),c.Ec(2,P,2,1,"ng-template",null,4,c.Fc),c.Ec(4,y,2,4,"ng-template",null,5,c.Fc),c.Ub(6,"nz-row"),c.Ub(7,"nz-col",6),c.Ub(8,"div",7),c.Ub(9,"p",8),c.Ec(10,U,2,1,"ng-container",9),c.Tb(),c.Tb(),c.Tb(),c.Tb(),c.Ub(11,"nz-descriptions",10),c.Ub(12,"nz-descriptions-item",11),c.Gc(13),c.fc(14,"evidenceEnumDisplay"),c.Tb(),c.Ub(15,"nz-descriptions-item",12),c.Gc(16),c.fc(17,"evidenceEnumDisplay"),c.Tb(),c.Ub(18,"nz-descriptions-item",13),c.Gc(19),c.fc(20,"evidenceEnumDisplay"),c.Tb(),c.Ec(21,_,4,2,"nz-descriptions-item",14),c.Ec(22,G,4,7,"ng-template",null,15,c.Fc),c.Ub(24,"nz-descriptions-item",16),c.Ec(25,x,1,0,"i",17),c.Ec(26,A,1,0,"i",18),c.Tb(),c.Ub(27,"nz-descriptions-item",19),c.Ec(28,F,1,0,"i",17),c.Ec(29,k,1,0,"i",18),c.Tb(),c.Ub(30,"nz-descriptions-item",20),c.Gc(31),c.fc(32,"ifEmpty"),c.Tb(),c.Ub(33,"nz-descriptions-item",13),c.Gc(34),c.fc(35,"evidenceEnumDisplay"),c.Tb(),c.Ub(36,"nz-descriptions-item",21),c.Gc(37),c.fc(38,"evidenceEnumDisplay"),c.Tb(),c.Ub(39,"nz-descriptions-item",22),c.Ec(40,D,2,2,"ng-container",9),c.Ec(41,R,1,0,"ng-template",null,23,c.Fc),c.Tb(),c.Ec(43,V,3,2,"nz-descriptions-item",24),c.Ec(44,B,2,1,"nz-descriptions-item",25),c.Tb(),c.Ub(45,"nz-row",26),c.Ub(46,"nz-col",6),c.Ub(47,"nz-space",27),c.Ub(48,"nz-space-item"),c.Ub(49,"a",28),c.Ub(50,"nz-tag",29),c.Pb(51,"i",30),c.Gc(52),c.Tb(),c.Tb(),c.Tb(),c.Ub(53,"nz-space-item"),c.Ub(54,"a",28),c.Ub(55,"nz-tag",31),c.Pb(56,"i",32),c.Gc(57),c.Tb(),c.Tb(),c.Tb(),c.Ub(58,"nz-space-item"),c.Ub(59,"a",28),c.Ub(60,"nz-tag",33),c.Pb(61,"i",34),c.Gc(62),c.Tb(),c.Tb(),c.Tb(),c.Tb(),c.Tb(),c.Tb(),c.Tb(),c.Rb()),2&n){const n=e.ngIf,t=c.uc(3),i=c.uc(5),o=c.uc(23),s=c.uc(42);c.ec();const r=c.uc(4);c.Cb(1),c.lc("nzTitle",t)("nzExtra",i),c.Cb(9),c.lc("ngIf",n.summary)("ngIfElse",r),c.Cb(1),c.lc("nzColumn",2),c.Cb(2),c.Ic(" ",c.gc(14,27,n.assertionType)," "),c.Cb(3),c.Ic(" ",c.gc(17,29,n.assertionDirection)," "),c.Cb(3),c.Ic(" ",c.gc(20,31,n.variantOrigin)," "),c.Cb(2),c.lc("ngIf","PREDISPOSING"==n.assertionType)("ngIfElse",o),c.Cb(4),c.lc("ngIf",n.fdaCompanionTest),c.Cb(1),c.lc("ngIf",!n.fdaCompanionTest),c.Cb(2),c.lc("ngIf",n.regulatoryApproval),c.Cb(1),c.lc("ngIf",!n.regulatoryApproval),c.Cb(2),c.Ic(" ",c.hc(32,33,n.nccnGuideline,"--")," "),c.Cb(3),c.Ic(" ",c.gc(35,36,n.variantOrigin)," "),c.Cb(3),c.Ic(" ",c.gc(38,38,n.clinicalSignificance)," "),c.Cb(3),c.lc("ngIf",n.disease)("ngIfElse",s),c.Cb(3),c.lc("ngIf",n.drugs.length>0),c.Cb(1),c.lc("ngIf",n.phenotypes.length>0),c.Cb(5),c.nc("routerLink","/assertions/",n.id,"/flags"),c.Cb(3),c.Ic(" Flags (",n.flags.totalCount,") "),c.Cb(2),c.nc("routerLink","/assertions/",n.id,"/revisions"),c.Cb(3),c.Ic(" Revisions (",n.revisions.totalCount,") "),c.Cb(2),c.nc("routerLink","/assertions/",n.id,"/comments"),c.Cb(3),c.Ic(" Comments (",n.comments.totalCount,") ")}}function $(n,e){1&n&&c.Gc(0," No Summary exists for this Assertion.\n")}let X=(()=>{class n{constructor(n){this.gql=n}ngOnInit(){if(null==this.assertionId)throw new Error("cvc-assertion-popover requires valid assertionId input.");this.assertion$=this.gql.watch({assertionId:this.assertionId}).valueChanges.pipe(Object(a.a)(({data:n})=>n.assertion))}}return n.\u0275fac=function(e){return new(e||n)(c.Ob(l.d))},n.\u0275cmp=c.Ib({type:n,selectors:[["cvc-assertion-popover"]],inputs:{assertionId:"assertionId"},decls:5,vars:3,consts:[["id","popover-content"],[4,"ngIf"],["noSummary",""],["nzBordered","false","id","card-content",3,"nzTitle","nzExtra"],["cardTitle",""],["geneAndVariant",""],["nzSpan","24"],[1,"popover-text"],["nz-typography",""],[4,"ngIf","ngIfElse"],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","Type"],["nzTitle","Direction"],["nzTitle","Variant Origin"],["nzTitle","ACMG Codes","nzSpan","2",4,"ngIf","ngIfElse"],["ampLevel",""],["nzTitle","FDA Companion Test"],["nz-icon","","nzType","check-circle","nzTheme","twotone","nzTwotoneColor","#52c41a",4,"ngIf"],["nz-icon","","nzType","close-square","nzTheme","twotone","nzTwotoneColor","#d93026",4,"ngIf"],["nzTitle","Regulatory Approval"],["nzTitle","NCCN Guideline"],["nzTitle","Clinical Significance","nzSpan","2"],["nzTitle","Disease","nzSpan","2"],["noDisease",""],["nzTitle","Drugs","nzSpan","2",4,"ngIf"],["nzTitle","Phenotypes","nzSpan","2",4,"ngIf"],["id","entity-child-counts"],["nzSize","small"],[3,"routerLink"],["nzColor","red"],["nz-icon","","nzType","civic-flag"],["nzColor","orange"],["nz-icon","","nzType","civic-revision"],["nzColor","blue"],["nz-icon","","nzType","civic-comment"],["nz-icon","","nzType","civic:assertion"],[3,"enablePopover","gene"],[3,"enablePopover","variant"],["nzTitle","ACMG Codes","nzSpan","2"],["noAcmg",""],[4,"ngFor","ngForOf"],["nzTitle","AMP/ASCO/CAP Category"],["nz-icon","","nzType","check-circle","nzTheme","twotone","nzTwotoneColor","#52c41a"],["nz-icon","","nzType","close-square","nzTheme","twotone","nzTwotoneColor","#d93026"],[3,"enablePopover","disease"],["nzTitle","Drugs","nzSpan","2"],[3,"enablePopover","drug"],["nzTitle","Phenotypes","nzSpan","2"],[3,"enablePopover","phenotype"]],template:function(n,e){1&n&&(c.Ub(0,"div",0),c.Ec(1,J,63,40,"ng-container",1),c.fc(2,"ngrxPush"),c.Tb(),c.Ec(3,$,1,0,"ng-template",null,2,c.Fc)),2&n&&(c.Cb(1),c.lc("ngIf",c.gc(2,1,e.assertion$)))},directives:[i.q,p.a,b.c,b.a,g.a,g.b,f.a,f.b,o.g,s.a,u.b,z.a,d.a,i.p,m.a,T.a,I.a],pipes:[C.b,v.a,E.a,h.a,i.B],styles:["[_nghost-%COMP%]{display:block;margin:-8px -12px}[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}[_nghost-%COMP%]     .ant-descriptions-view{border:none}[_nghost-%COMP%]     #entity-child-counts{border-top:1px solid #f0f0f0;padding:8px}[_nghost-%COMP%]     #entity-child-counts nz-space{width:100%}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child nz-tag{margin-right:0}.popover-text[_ngcontent-%COMP%]{width:100%;padding:8px;border-bottom:1px solid #f0f0f0}#popover-content[_ngcontent-%COMP%]{min-width:350px;max-width:500px;min-height:125px}"]}),n})();var Z=t("AiLV");function j(n,e){}function K(n,e){if(1&n&&(c.Sb(0),c.Ub(1,"a",5),c.Ec(2,j,0,0,"ng-template",6),c.Tb(),c.Rb()),2&n){const n=c.ec(),e=c.uc(2);c.Cb(1),c.nc("routerLink","/assertions/",n.assertion.id,""),c.Cb(1),c.lc("ngTemplateOutlet",e)}}function Q(n,e){}function Y(n,e){if(1&n&&(c.Ub(0,"nz-tag",9),c.fc(1,"colorNameForStatus"),c.Ec(2,Q,0,0,"ng-template",6),c.Tb()),2&n){c.ec();const n=c.uc(2),e=c.ec(),t=c.uc(8);c.lc("nzPopoverMouseEnterDelay",.5)("nzPopoverContent",n)("nzColor",c.gc(1,4,e.assertion.status)),c.Cb(2),c.lc("ngTemplateOutlet",t)}}function H(n,e){if(1&n&&c.Pb(0,"cvc-assertion-popover",10),2&n){const n=c.ec(2);c.lc("assertionId",n.assertion.id)}}function W(n,e){if(1&n&&(c.Ec(0,Y,3,6,"nz-tag",7),c.Ec(1,H,1,1,"ng-template",null,8,c.Fc)),2&n){const n=c.ec(),e=c.uc(4);c.lc("ngIf",n.enablePopover)("ngIfElse",e)}}function nn(n,e){}function en(n,e){if(1&n&&(c.Ub(0,"nz-tag",11),c.fc(1,"colorNameForStatus"),c.Ec(2,nn,0,0,"ng-template",6),c.Tb()),2&n){const n=c.ec(),e=c.uc(8);c.lc("nzColor",c.gc(1,2,n.assertion.status)),c.Cb(2),c.lc("ngTemplateOutlet",e)}}function tn(n,e){}function cn(n,e){if(1&n&&c.Ec(0,tn,0,0,"ng-template",6),2&n){c.ec();const n=c.uc(2);c.lc("ngTemplateOutlet",n)}}function on(n,e){if(1&n&&(c.Pb(0,"i",12),c.Gc(1)),2&n){const n=c.ec();c.Cb(1),c.Ic(" ",n.assertion.name,"\n")}}let sn=(()=>{class n{constructor(){this.linked=!0,this.enablePopover=!0}ngOnInit(){if(void 0===this.assertion)throw new Error("cvc-assertion-tag requires LinkableAssertion input, none supplied.")}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=c.Ib({type:n,selectors:[["cvc-assertion-tag"]],inputs:{assertion:"assertion",linked:"linked",enablePopover:"enablePopover"},decls:9,vars:2,consts:[[4,"ngIf","ngIfElse"],["tag",""],["noPopover",""],["unlinked",""],["tagContent",""],[3,"routerLink"],[3,"ngTemplateOutlet"],["nz-popover","","nzPopoverPlacement","right","nzPopoverTrigger","hover",3,"nzPopoverMouseEnterDelay","nzPopoverContent","nzColor",4,"ngIf","ngIfElse"],["assertionPopover",""],["nz-popover","","nzPopoverPlacement","right","nzPopoverTrigger","hover",3,"nzPopoverMouseEnterDelay","nzPopoverContent","nzColor"],[3,"assertionId"],[3,"nzColor"],["nz-icon","","nzType","civic-assertion","nzTheme","twotone","nzTwotoneColor","#7243B5"]],template:function(n,e){if(1&n&&(c.Ec(0,K,3,2,"ng-container",0),c.Ec(1,W,3,2,"ng-template",null,1,c.Fc),c.Ec(3,en,3,4,"ng-template",null,2,c.Fc),c.Ec(5,cn,1,1,"ng-template",null,3,c.Fc),c.Ec(7,on,2,1,"ng-template",null,4,c.Fc)),2&n){const n=c.uc(6);c.lc("ngIf",e.linked)("ngIfElse",n)}},directives:[i.q,o.g,i.x,s.a,r.a,X,u.b],pipes:[Z.a],styles:["[_nghost-%COMP%]{display:inline-block}"]}),n})()}}]);