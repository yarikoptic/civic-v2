"use strict";(self.webpackChunkmain=self.webpackChunkmain||[]).push([[3501],{3580:(I,O,e)=>{e.d(O,{Q:()=>N});var l=e(9808),t=e(325),v=e(8481),n=e(3610),m=e(647),C=e(7484),d=e(3098),D=e(3630),x=e(6949),M=e(3618),f=e(5e3);let A=(()=>{class a{}return a.\u0275fac=function(h){return new(h||a)},a.\u0275mod=f.oAB({type:a}),a.\u0275inj=f.cJS({imports:[[l.ez,x.WG,C.vh,d.q6,m.PV,M.ZJ,D.X]]}),a})(),N=(()=>{class a{}return a.\u0275fac=function(h){return new(h||a)},a.\u0275mod=f.oAB({type:a}),a.\u0275inj=f.cJS({imports:[[l.ez,t.Bz,v.X,n.$6,m.PV,A]]}),a})()},8018:(I,O,e)=>{e.d(O,{e:()=>N});var l=e(9808),t=e(325),v=e(8481),n=e(3610),m=e(647),C=e(7484),d=e(3098),D=e(6949),x=e(3630),M=e(3618),f=e(5e3);let A=(()=>{class a{}return a.\u0275fac=function(h){return new(h||a)},a.\u0275mod=f.oAB({type:a}),a.\u0275inj=f.cJS({imports:[[l.ez,t.Bz,D.WG,C.vh,d.q6,m.PV,M.ZJ,x.X]]}),a})(),N=(()=>{class a{}return a.\u0275fac=function(h){return new(h||a)},a.\u0275mod=f.oAB({type:a}),a.\u0275inj=f.cJS({imports:[[l.ez,t.Bz,v.X,n.$6,m.PV,A]]}),a})()},3193:(I,O,e)=>{e.d(O,{H:()=>H});var l=e(6654),t=e(5e3),v=e(9808),n=e(325),m=e(8481),C=e(3610),d=e(4850),D=e(712),x=e(7484),M=e(647),f=e(3098),A=e(1894),N=e(8144),a=e(6949);function s(r,T){if(1&r&&(t._UZ(0,"i",11),t._uU(1)),2&r){const c=t.oxw().ngIf;t.xp6(1),t.hij(" ",c.officialName," ")}}function h(r,T){1&r&&(t.TgZ(0,"span"),t._uU(1,",\xa0"),t.qZA())}function g(r,T){if(1&r&&(t.TgZ(0,"span"),t._uU(1),t.YNc(2,h,2,0,"span",1),t.qZA()),2&r){const c=T.$implicit,y=T.last;t.xp6(1),t.hij(" ",c,""),t.xp6(1),t.Q6J("ngIf",!y)}}function P(r,T){if(1&r&&(t.TgZ(0,"nz-descriptions-item",12),t.YNc(1,g,3,2,"span",13),t.qZA()),2&r){const c=t.oxw().ngIf;t.xp6(1),t.Q6J("ngForOf",c.geneAliases)}}function Z(r,T){if(1&r&&(t.TgZ(0,"a",14),t.TgZ(1,"nz-tag",15),t._UZ(2,"i",16),t._uU(3),t.qZA(),t.qZA()),2&r){const c=t.oxw().ngIf;t.MGl("routerLink","/genes/",c.id,"/flags"),t.xp6(3),t.hij(" Flags (",c.flags.totalCount,") ")}}function Q(r,T){if(1&r&&(t.TgZ(0,"a",14),t.TgZ(1,"nz-tag",17),t._UZ(2,"i",18),t._uU(3),t.qZA(),t.qZA()),2&r){const c=t.oxw().ngIf;t.MGl("routerLink","/genes/",c.id,"/revisions"),t.xp6(3),t.hij(" Revisions (",c.revisions.totalCount,") ")}}function p(r,T){if(1&r&&(t.TgZ(0,"a",14),t.TgZ(1,"nz-tag",19),t._UZ(2,"i",20),t._uU(3),t.qZA(),t.qZA()),2&r){const c=t.oxw().ngIf;t.MGl("routerLink","/genes/",c.id,"/comments"),t.xp6(3),t.hij(" Comments (",c.comments.totalCount,") ")}}function B(r,T){if(1&r&&(t.ynx(0),t.TgZ(1,"nz-card",2),t.YNc(2,s,2,1,"ng-template",null,3,t.W1O),t.TgZ(4,"nz-descriptions",4),t.YNc(5,P,2,1,"nz-descriptions-item",5),t.TgZ(6,"nz-descriptions-item",6),t._uU(7),t.qZA(),t.qZA(),t.TgZ(8,"nz-row",7),t.TgZ(9,"nz-col",8),t.TgZ(10,"nz-space",9),t.YNc(11,Z,4,2,"a",10),t.YNc(12,Q,4,2,"a",10),t.YNc(13,p,4,2,"a",10),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.BQk()),2&r){const c=T.ngIf,y=t.MAs(3);t.xp6(1),t.Q6J("nzTitle",y),t.xp6(3),t.Q6J("nzColumn",2),t.xp6(1),t.Q6J("ngIf",c.geneAliases.length>0),t.xp6(2),t.hij(" ",c.variants.totalCount," ")}}let z=(()=>{class r{constructor(c){this.gql=c}ngOnInit(){if(null==this.geneId)throw new Error("cvc-gene-popover requires valid geneId input.");this.gene$=this.gql.watch({geneId:this.geneId}).valueChanges.pipe((0,d.U)(({data:c})=>c.gene))}}return r.\u0275fac=function(c){return new(c||r)(t.Y36(D.rJ8))},r.\u0275cmp=t.Xpm({type:r,selectors:[["cvc-gene-popover"]],inputs:{geneId:"geneId"},decls:3,vars:3,consts:[["id","popover-content"],[4,"ngIf"],["nzBordered","false","id","card-content",3,"nzTitle"],["cardTitle",""],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","Aliases","nzSpan","2",4,"ngIf"],["nzTitle","Variants"],["id","entity-child-counts"],["nzSpan","24"],["nzSize","small"],[3,"routerLink",4,"nzSpaceItem"],["nz-icon","","nzType","civic:gene"],["nzTitle","Aliases","nzSpan","2"],[4,"ngFor","ngForOf"],[3,"routerLink"],["nzColor","red"],["nz-icon","","nzType","civic-flag"],["nzColor","orange"],["nz-icon","","nzType","civic-revision"],["nzColor","blue"],["nz-icon","","nzType","civic-comment"]],template:function(c,y){1&c&&(t.TgZ(0,"div",0),t.YNc(1,B,14,4,"ng-container",1),t.ALo(2,"ngrxPush"),t.qZA()),2&c&&(t.xp6(1),t.Q6J("ngIf",t.lcZ(2,1,y.gene$)))},directives:[v.O5,x.bd,M.Ls,f.R7,f.uj,v.sg,A.SK,A.t3,N.NU,N.$1,n.yS,m.j],pipes:[a.fM],styles:["[_nghost-%COMP%]{display:block;margin:-8px -12px}[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}[_nghost-%COMP%]     .ant-descriptions-view{border:none}[_nghost-%COMP%]     #entity-child-counts{border-top:1px solid #f0f0f0;padding:8px}[_nghost-%COMP%]     #entity-child-counts nz-space{width:100%}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child nz-tag{margin-right:0}.popover-text[_ngcontent-%COMP%]{width:100%;padding:8px;border-bottom:1px solid #f0f0f0}#popover-content[_ngcontent-%COMP%]{min-width:350px;max-width:500px;min-height:125px}"]}),r})();function E(r,T){}function U(r,T){if(1&r&&(t.ynx(0),t.TgZ(1,"a",5),t.YNc(2,E,0,0,"ng-template",6),t.qZA(),t.BQk()),2&r){const c=t.oxw(),y=t.MAs(2);t.xp6(1),t.Q6J("routerLink",c.gene.link),t.xp6(1),t.Q6J("ngTemplateOutlet",y)}}function J(r,T){}function R(r,T){if(1&r){const c=t.EpF();t.TgZ(0,"nz-tag",9),t.NdJ("nzOnClose",function(S){return t.CHM(c),t.oxw(2).itemClosed(S)}),t.YNc(1,J,0,0,"ng-template",6),t.qZA()}if(2&r){t.oxw();const c=t.MAs(2),y=t.oxw(),S=t.MAs(8);t.Q6J("nzPopoverMouseEnterDelay",y.onCloseClicked?0:.5)("nzPopoverContent",c)("nzMode",y.onCloseClicked?"closeable":"default"),t.xp6(1),t.Q6J("ngTemplateOutlet",S)}}function W(r,T){if(1&r&&t._UZ(0,"cvc-gene-popover",10),2&r){const c=t.oxw(2);t.Q6J("geneId",c.gene.id)}}function K(r,T){if(1&r&&(t.YNc(0,R,2,4,"nz-tag",7),t.YNc(1,W,1,1,"ng-template",null,8,t.W1O)),2&r){const c=t.oxw(),y=t.MAs(4);t.Q6J("ngIf",c.enablePopover)("ngIfElse",y)}}function G(r,T){}function $(r,T){if(1&r){const c=t.EpF();t.TgZ(0,"nz-tag",11),t.NdJ("nzOnClose",function(S){return t.CHM(c),t.oxw().itemClosed(S)}),t.YNc(1,G,0,0,"ng-template",6),t.qZA()}if(2&r){const c=t.oxw(),y=t.MAs(8);t.Q6J("nzMode",c.onCloseClicked?"closeable":"default"),t.xp6(1),t.Q6J("ngTemplateOutlet",y)}}function k(r,T){}function V(r,T){if(1&r&&t.YNc(0,k,0,0,"ng-template",6),2&r){t.oxw();const c=t.MAs(2);t.Q6J("ngTemplateOutlet",c)}}function X(r,T){if(1&r&&(t._UZ(0,"i",12),t._uU(1)),2&r){const c=t.oxw();t.xp6(1),t.hij(" ",c.gene.name,"\n")}}let H=(()=>{class r extends l.a{constructor(){super(),this.enablePopover=!0}idFunction(){return this.gene.id}ngOnInit(){if(super.ngOnInit(),void 0===this.gene)throw new Error("cvc-gene-tag requires LinkableGene input, none supplied.")}}return r.\u0275fac=function(c){return new(c||r)},r.\u0275cmp=t.Xpm({type:r,selectors:[["cvc-gene-tag"]],inputs:{gene:"gene",enablePopover:"enablePopover"},features:[t.qOj],decls:9,vars:2,consts:[[4,"ngIf","ngIfElse"],["tag",""],["noPopover",""],["unlinked",""],["tagContent",""],[3,"routerLink"],[3,"ngTemplateOutlet"],["nz-popover","","nzPopoverTrigger","hover",3,"nzPopoverMouseEnterDelay","nzPopoverContent","nzMode","nzOnClose",4,"ngIf","ngIfElse"],["genePopover",""],["nz-popover","","nzPopoverTrigger","hover",3,"nzPopoverMouseEnterDelay","nzPopoverContent","nzMode","nzOnClose"],[3,"geneId"],[3,"nzMode","nzOnClose"],["nz-icon","","nzType","civic-gene","nzTheme","twotone","nzTwotoneColor","#07AFF0"]],template:function(c,y){if(1&c&&(t.YNc(0,U,3,2,"ng-container",0),t.YNc(1,K,3,2,"ng-template",null,1,t.W1O),t.YNc(3,$,2,2,"ng-template",null,2,t.W1O),t.YNc(5,V,1,1,"ng-template",null,3,t.W1O),t.YNc(7,X,2,1,"ng-template",null,4,t.W1O)),2&c){const S=t.MAs(6);t.Q6J("ngIf",y.linked)("ngIfElse",S)}},directives:[v.O5,n.yS,v.tP,m.j,C.lU,z,M.Ls],styles:[""]}),r})()},3309:(I,O,e)=>{e.d(O,{U:()=>N});var l=e(9808),t=e(325),v=e(8481),n=e(647),m=e(3610),C=e(7484),d=e(1894),D=e(3098),x=e(8144),M=e(6949),f=e(5e3);let A=(()=>{class a{}return a.\u0275fac=function(h){return new(h||a)},a.\u0275mod=f.oAB({type:a}),a.\u0275inj=f.cJS({imports:[[l.ez,t.Bz,M.WG,C.vh,d.Jb,D.q6,v.X,n.PV,x.zf]]}),a})(),N=(()=>{class a{}return a.\u0275fac=function(h){return new(h||a)},a.\u0275mod=f.oAB({type:a}),a.\u0275inj=f.cJS({imports:[[l.ez,t.Bz,v.X,m.$6,n.PV,A]]}),a})()},9476:(I,O,e)=>{e.d(O,{L:()=>a});var l=e(9808),t=e(325),v=e(8481),n=e(647),m=e(1894),C=e(3630),d=e(3098),D=e(7484),x=e(6949),M=e(5473),f=e(5e3);let A=(()=>{class s{}return s.\u0275fac=function(g){return new(g||s)},s.\u0275mod=f.oAB({type:s}),s.\u0275inj=f.cJS({imports:[[l.ez,x.WG,D.vh,m.Jb,d.q6,C.X,M.H]]}),s})();var N=e(3610);let a=(()=>{class s{}return s.\u0275fac=function(g){return new(g||s)},s.\u0275mod=f.oAB({type:s}),s.\u0275inj=f.cJS({imports:[[l.ez,t.Bz,v.X,n.PV,N.$6,A]]}),s})()},6550:(I,O,e)=>{e.d(O,{l:()=>C});var l=e(5e3),t=e(8481),v=e(404),n=e(647);const m=["*"];let C=(()=>{class d{constructor(){}ngOnInit(){if(void 0===this.href)throw new Error("cvc-link-tag requires href string input, none supplied.")}}return d.\u0275fac=function(x){return new(x||d)},d.\u0275cmp=l.Xpm({type:d,selectors:[["cvc-link-tag"]],inputs:{href:"href",tooltip:"tooltip",iconName:"iconName"},ngContentSelectors:m,decls:4,vars:4,consts:[["target","_blank",3,"href"],["nzColor","default","nz-tooltip","",3,"nzTooltipTitle","nzTooltipTrigger"],["nz-icon","","nzTheme","outline",3,"nzType"]],template:function(x,M){1&x&&(l.F$t(),l.TgZ(0,"a",0),l.TgZ(1,"nz-tag",1),l._UZ(2,"i",2),l.Hsn(3),l.qZA(),l.qZA()),2&x&&(l.Q6J("href",M.href,l.LSH),l.xp6(1),l.Q6J("nzTooltipTitle",M.tooltip)("nzTooltipTrigger",M.tooltip?"hover":null),l.xp6(1),l.Q6J("nzType",M.iconName?M.iconName:"link"))},directives:[t.j,v.SY,n.Ls],styles:[""]}),d})()},3630:(I,O,e)=>{e.d(O,{X:()=>C});var l=e(9808),t=e(404),v=e(8481),n=e(647),m=e(5e3);let C=(()=>{class d{}return d.\u0275fac=function(x){return new(x||d)},d.\u0275mod=m.oAB({type:d}),d.\u0275inj=m.cJS({imports:[[l.ez,t.cg,v.X,n.PV]]}),d})()},6715:(I,O,e)=>{e.d(O,{$:()=>v});var l=e(5e3);const t=["*"];let v=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(C){return new(C||n)},n.\u0275cmp=l.Xpm({type:n,selectors:[["cvc-tag-list"]],hostVars:4,hostBindings:function(C,d){2&C&&l.ekj("xs","xs"===d.size||!d.size)("sm","sm"===d.size)},inputs:{size:"size"},ngContentSelectors:t,decls:2,vars:0,consts:[[1,"tag-list"]],template:function(C,d){1&C&&(l.F$t(),l.TgZ(0,"div",0),l.Hsn(1),l.qZA())},styles:["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]   .tag-list[_ngcontent-%COMP%]    >*{display:inline-block}[_nghost-%COMP%]   .tag-list[_ngcontent-%COMP%]    >*:last-child{margin-right:-8px}.xs[_nghost-%COMP%]{margin-bottom:-4px}.xs[_nghost-%COMP%]   .tag-list[_ngcontent-%COMP%]    >*{margin-bottom:4px}.sm[_nghost-%COMP%]{margin-bottom:-8px}.sm[_nghost-%COMP%]   .tag-list[_ngcontent-%COMP%]    >*{margin-bottom:8px}"]}),n})()},897:(I,O,e)=>{e.d(O,{$:()=>v});var l=e(9808),t=e(5e3);let v=(()=>{class n{}return n.\u0275fac=function(C){return new(C||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[l.ez]]}),n})()},6654:(I,O,e)=>{e.d(O,{a:()=>t});var l=e(5e3);let t=(()=>{class v{constructor(){this.linked=!0,this.popoverVisible=!1}ngOnInit(){this.onCloseClicked&&(this.linked=!1)}itemClosed(m){this.popoverVisible=!1,this.onCloseClicked&&this.onCloseClicked(this.idFunction())}}return v.\u0275fac=function(m){return new(m||v)},v.\u0275cmp=l.Xpm({type:v,selectors:[["ng-component"]],inputs:{onCloseClicked:"onCloseClicked",linked:"linked"},decls:0,vars:0,template:function(m,C){},encapsulation:2}),v})()},3098:(I,O,e)=>{e.d(O,{R7:()=>dn,uj:()=>nn,q6:()=>mn});var l=e(226),t=e(925),v=e(9808),n=e(5e3),m=e(969),C=e(655),d=e(8929),D=e(6787),x=e(1721),M=e(7625),f=e(1059),A=e(7545),N=e(7138),a=e(2868),s=e(9439),h=e(948),g=e(4090);function P(o,_){1&o&&n.Hsn(0)}const Z=["*"];function Q(o,_){if(1&o&&(n.ynx(0),n._uU(1),n.BQk()),2&o){const i=n.oxw(3);n.xp6(1),n.Oqu(i.nzTitle)}}function p(o,_){if(1&o&&(n.TgZ(0,"div",6),n.YNc(1,Q,2,1,"ng-container",7),n.qZA()),2&o){const i=n.oxw(2);n.xp6(1),n.Q6J("nzStringTemplateOutlet",i.nzTitle)}}function B(o,_){if(1&o&&(n.ynx(0),n._uU(1),n.BQk()),2&o){const i=n.oxw(3);n.xp6(1),n.Oqu(i.nzExtra)}}function z(o,_){if(1&o&&(n.TgZ(0,"div",8),n.YNc(1,B,2,1,"ng-container",7),n.qZA()),2&o){const i=n.oxw(2);n.xp6(1),n.Q6J("nzStringTemplateOutlet",i.nzExtra)}}function E(o,_){if(1&o&&(n.TgZ(0,"div",3),n.YNc(1,p,2,1,"div",4),n.YNc(2,z,2,1,"div",5),n.qZA()),2&o){const i=n.oxw();n.xp6(1),n.Q6J("ngIf",i.nzTitle),n.xp6(1),n.Q6J("ngIf",i.nzExtra)}}function U(o,_){if(1&o&&(n.ynx(0),n._uU(1),n.BQk()),2&o){const i=n.oxw(2).$implicit;n.xp6(1),n.hij(" ",i.title," ")}}function J(o,_){}function R(o,_){if(1&o&&(n.ynx(0),n.TgZ(1,"td",12),n.TgZ(2,"div",13),n.TgZ(3,"span",14),n.YNc(4,U,2,1,"ng-container",7),n.qZA(),n.TgZ(5,"span",15),n.YNc(6,J,0,0,"ng-template",16),n.qZA(),n.qZA(),n.qZA(),n.BQk()),2&o){const i=n.oxw().$implicit,u=n.oxw(3);n.xp6(1),n.Q6J("colSpan",i.span),n.xp6(2),n.ekj("ant-descriptions-item-no-colon",!u.nzColon),n.xp6(1),n.Q6J("nzStringTemplateOutlet",i.title),n.xp6(2),n.Q6J("ngTemplateOutlet",i.content)}}function W(o,_){if(1&o&&(n.ynx(0),n._uU(1),n.BQk()),2&o){const i=n.oxw(3).$implicit;n.xp6(1),n.hij(" ",i.title," ")}}function K(o,_){if(1&o&&(n.TgZ(0,"td",14),n.YNc(1,W,2,1,"ng-container",7),n.qZA()),2&o){const i=n.oxw(2).$implicit;n.xp6(1),n.Q6J("nzStringTemplateOutlet",i.title)}}function G(o,_){}function $(o,_){if(1&o&&(n.ynx(0),n.YNc(1,K,2,1,"td",17),n.TgZ(2,"td",18),n.YNc(3,G,0,0,"ng-template",16),n.qZA(),n.BQk()),2&o){const i=n.oxw().$implicit;n.xp6(1),n.Q6J("nzStringTemplateOutlet",i.title),n.xp6(1),n.Q6J("colSpan",2*i.span-1),n.xp6(1),n.Q6J("ngTemplateOutlet",i.content)}}function k(o,_){if(1&o&&(n.ynx(0),n.YNc(1,R,7,5,"ng-container",2),n.YNc(2,$,4,3,"ng-container",2),n.BQk()),2&o){const i=n.oxw(3);n.xp6(1),n.Q6J("ngIf",!i.nzBordered),n.xp6(1),n.Q6J("ngIf",i.nzBordered)}}function V(o,_){if(1&o&&(n.TgZ(0,"tr",10),n.YNc(1,k,3,2,"ng-container",11),n.qZA()),2&o){const i=_.$implicit;n.xp6(1),n.Q6J("ngForOf",i)}}function X(o,_){if(1&o&&(n.ynx(0),n.YNc(1,V,2,1,"tr",9),n.BQk()),2&o){const i=n.oxw();n.xp6(1),n.Q6J("ngForOf",i.itemMatrix)}}function H(o,_){if(1&o&&(n.ynx(0),n._uU(1),n.BQk()),2&o){const i=n.oxw().$implicit;n.xp6(1),n.hij(" ",i.title," ")}}function r(o,_){if(1&o&&(n.ynx(0),n.TgZ(1,"td",12),n.TgZ(2,"div",13),n.TgZ(3,"span",14),n.YNc(4,H,2,1,"ng-container",7),n.qZA(),n.qZA(),n.qZA(),n.BQk()),2&o){const i=_.$implicit,u=n.oxw(4);n.xp6(1),n.Q6J("colSpan",i.span),n.xp6(2),n.ekj("ant-descriptions-item-no-colon",!u.nzColon),n.xp6(1),n.Q6J("nzStringTemplateOutlet",i.title)}}function T(o,_){}function c(o,_){if(1&o&&(n.ynx(0),n.TgZ(1,"td",12),n.TgZ(2,"div",13),n.TgZ(3,"span",15),n.YNc(4,T,0,0,"ng-template",16),n.qZA(),n.qZA(),n.qZA(),n.BQk()),2&o){const i=_.$implicit;n.xp6(1),n.Q6J("colSpan",i.span),n.xp6(3),n.Q6J("ngTemplateOutlet",i.content)}}function y(o,_){if(1&o&&(n.ynx(0),n.TgZ(1,"tr",10),n.YNc(2,r,5,4,"ng-container",11),n.qZA(),n.TgZ(3,"tr",10),n.YNc(4,c,5,2,"ng-container",11),n.qZA(),n.BQk()),2&o){const i=_.$implicit;n.xp6(2),n.Q6J("ngForOf",i),n.xp6(2),n.Q6J("ngForOf",i)}}function S(o,_){if(1&o&&(n.ynx(0),n.YNc(1,y,5,2,"ng-container",11),n.BQk()),2&o){const i=n.oxw(2);n.xp6(1),n.Q6J("ngForOf",i.itemMatrix)}}function w(o,_){if(1&o&&(n.ynx(0),n._uU(1),n.BQk()),2&o){const i=n.oxw().$implicit;n.xp6(1),n.hij(" ",i.title," ")}}function rn(o,_){if(1&o&&(n.ynx(0),n.TgZ(1,"td",19),n.YNc(2,w,2,1,"ng-container",7),n.qZA(),n.BQk()),2&o){const i=_.$implicit;n.xp6(1),n.Q6J("colSpan",i.span),n.xp6(1),n.Q6J("nzStringTemplateOutlet",i.title)}}function an(o,_){}function sn(o,_){if(1&o&&(n.ynx(0),n.TgZ(1,"td",18),n.YNc(2,an,0,0,"ng-template",16),n.qZA(),n.BQk()),2&o){const i=_.$implicit;n.xp6(1),n.Q6J("colSpan",i.span),n.xp6(1),n.Q6J("ngTemplateOutlet",i.content)}}function cn(o,_){if(1&o&&(n.ynx(0),n.TgZ(1,"tr",10),n.YNc(2,rn,3,2,"ng-container",11),n.qZA(),n.TgZ(3,"tr",10),n.YNc(4,sn,3,2,"ng-container",11),n.qZA(),n.BQk()),2&o){const i=_.$implicit;n.xp6(2),n.Q6J("ngForOf",i),n.xp6(2),n.Q6J("ngForOf",i)}}function ln(o,_){if(1&o&&(n.ynx(0),n.YNc(1,cn,5,2,"ng-container",11),n.BQk()),2&o){const i=n.oxw(2);n.xp6(1),n.Q6J("ngForOf",i.itemMatrix)}}function _n(o,_){if(1&o&&(n.ynx(0),n.YNc(1,S,2,1,"ng-container",2),n.YNc(2,ln,2,1,"ng-container",2),n.BQk()),2&o){const i=n.oxw();n.xp6(1),n.Q6J("ngIf",!i.nzBordered),n.xp6(1),n.Q6J("ngIf",i.nzBordered)}}let nn=(()=>{class o{constructor(){this.nzSpan=1,this.nzTitle="",this.inputChange$=new d.xQ}ngOnChanges(){this.inputChange$.next()}ngOnDestroy(){this.inputChange$.complete()}}return o.\u0275fac=function(i){return new(i||o)},o.\u0275cmp=n.Xpm({type:o,selectors:[["nz-descriptions-item"]],viewQuery:function(i,u){if(1&i&&n.Gf(n.Rgc,7),2&i){let L;n.iGM(L=n.CRH())&&(u.content=L.first)}},inputs:{nzSpan:"nzSpan",nzTitle:"nzTitle"},exportAs:["nzDescriptionsItem"],features:[n.TTD],ngContentSelectors:Z,decls:1,vars:0,template:function(i,u){1&i&&(n.F$t(),n.YNc(0,P,1,0,"ng-template"))},encapsulation:2,changeDetection:0}),(0,C.gn)([(0,x.Rn)()],o.prototype,"nzSpan",void 0),o})();const gn={xxl:3,xl:3,lg:3,md:3,sm:2,xs:1};let dn=(()=>{class o{constructor(i,u,L,Y){this.nzConfigService=i,this.cdr=u,this.breakpointService=L,this.directionality=Y,this._nzModuleName="descriptions",this.nzBordered=!1,this.nzLayout="horizontal",this.nzColumn=gn,this.nzSize="default",this.nzTitle="",this.nzColon=!0,this.itemMatrix=[],this.realColumn=3,this.dir="ltr",this.breakpoint=g.G_.md,this.destroy$=new d.xQ}ngOnInit(){var i;this.dir=this.directionality.value,null===(i=this.directionality.change)||void 0===i||i.pipe((0,M.R)(this.destroy$)).subscribe(u=>{this.dir=u})}ngOnChanges(i){i.nzColumn&&this.prepareMatrix()}ngAfterContentInit(){const i=this.items.changes.pipe((0,f.O)(this.items),(0,M.R)(this.destroy$));(0,D.T)(i,i.pipe((0,A.w)(()=>(0,D.T)(...this.items.map(u=>u.inputChange$)).pipe((0,N.e)(16)))),this.breakpointService.subscribe(g.WV).pipe((0,a.b)(u=>this.breakpoint=u))).pipe((0,M.R)(this.destroy$)).subscribe(()=>{this.prepareMatrix(),this.cdr.markForCheck()})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}prepareMatrix(){if(!this.items)return;let i=[],u=0;const L=this.realColumn=this.getColumn(),Y=this.items.toArray(),tn=Y.length,en=[],on=()=>{en.push(i),i=[],u=0};for(let F=0;F<tn;F++){const vn=Y[F],{nzTitle:b,content:q,nzSpan:j}=vn;u+=j,u>=L?(u>L&&(0,h.ZK)(`"nzColumn" is ${L} but we have row length ${u}`),i.push({title:b,content:q,span:L-(u-j)}),on()):F===tn-1?(i.push({title:b,content:q,span:L-(u-j)}),on()):i.push({title:b,content:q,span:j})}this.itemMatrix=en}getColumn(){return"number"!=typeof this.nzColumn?this.nzColumn[this.breakpoint]:this.nzColumn}}return o.\u0275fac=function(i){return new(i||o)(n.Y36(s.jY),n.Y36(n.sBO),n.Y36(g.r3),n.Y36(l.Is,8))},o.\u0275cmp=n.Xpm({type:o,selectors:[["nz-descriptions"]],contentQueries:function(i,u,L){if(1&i&&n.Suo(L,nn,4),2&i){let Y;n.iGM(Y=n.CRH())&&(u.items=Y)}},hostAttrs:[1,"ant-descriptions"],hostVars:8,hostBindings:function(i,u){2&i&&n.ekj("ant-descriptions-bordered",u.nzBordered)("ant-descriptions-middle","middle"===u.nzSize)("ant-descriptions-small","small"===u.nzSize)("ant-descriptions-rtl","rtl"===u.dir)},inputs:{nzBordered:"nzBordered",nzLayout:"nzLayout",nzColumn:"nzColumn",nzSize:"nzSize",nzTitle:"nzTitle",nzExtra:"nzExtra",nzColon:"nzColon"},exportAs:["nzDescriptions"],features:[n.TTD],decls:6,vars:3,consts:[["class","ant-descriptions-header",4,"ngIf"],[1,"ant-descriptions-view"],[4,"ngIf"],[1,"ant-descriptions-header"],["class","ant-descriptions-title",4,"ngIf"],["class","ant-descriptions-extra",4,"ngIf"],[1,"ant-descriptions-title"],[4,"nzStringTemplateOutlet"],[1,"ant-descriptions-extra"],["class","ant-descriptions-row",4,"ngFor","ngForOf"],[1,"ant-descriptions-row"],[4,"ngFor","ngForOf"],[1,"ant-descriptions-item",3,"colSpan"],[1,"ant-descriptions-item-container"],[1,"ant-descriptions-item-label"],[1,"ant-descriptions-item-content"],[3,"ngTemplateOutlet"],["class","ant-descriptions-item-label",4,"nzStringTemplateOutlet"],[1,"ant-descriptions-item-content",3,"colSpan"],[1,"ant-descriptions-item-label",3,"colSpan"]],template:function(i,u){1&i&&(n.YNc(0,E,3,2,"div",0),n.TgZ(1,"div",1),n.TgZ(2,"table"),n.TgZ(3,"tbody"),n.YNc(4,X,2,1,"ng-container",2),n.YNc(5,_n,3,2,"ng-container",2),n.qZA(),n.qZA(),n.qZA()),2&i&&(n.Q6J("ngIf",u.nzTitle||u.nzExtra),n.xp6(4),n.Q6J("ngIf","horizontal"===u.nzLayout),n.xp6(1),n.Q6J("ngIf","vertical"===u.nzLayout))},directives:[v.O5,m.f,v.sg,v.tP],encapsulation:2,changeDetection:0}),(0,C.gn)([(0,x.yF)(),(0,s.oS)()],o.prototype,"nzBordered",void 0),(0,C.gn)([(0,s.oS)()],o.prototype,"nzColumn",void 0),(0,C.gn)([(0,s.oS)()],o.prototype,"nzSize",void 0),(0,C.gn)([(0,s.oS)(),(0,x.yF)()],o.prototype,"nzColon",void 0),o})(),mn=(()=>{class o{}return o.\u0275fac=function(i){return new(i||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[[l.vT,v.ez,m.T,t.ud]]}),o})()},3610:(I,O,e)=>{e.d(O,{lU:()=>P,$6:()=>Q});var l=e(655),t=e(5e3),v=e(8076),n=e(9439),m=e(1721),C=e(404),d=e(4832),D=e(226),x=e(2845),M=e(6950),f=e(9808),A=e(969);function N(p,B){if(1&p&&(t.ynx(0),t._uU(1),t.BQk()),2&p){const z=t.oxw(3);t.xp6(1),t.Oqu(z.nzTitle)}}function a(p,B){if(1&p&&(t.TgZ(0,"div",10),t.YNc(1,N,2,1,"ng-container",9),t.qZA()),2&p){const z=t.oxw(2);t.xp6(1),t.Q6J("nzStringTemplateOutlet",z.nzTitle)}}function s(p,B){if(1&p&&(t.ynx(0),t._uU(1),t.BQk()),2&p){const z=t.oxw(2);t.xp6(1),t.Oqu(z.nzContent)}}function h(p,B){if(1&p&&(t.TgZ(0,"div",2),t.TgZ(1,"div",3),t.TgZ(2,"div",4),t._UZ(3,"span",5),t.qZA(),t.TgZ(4,"div",6),t.TgZ(5,"div"),t.YNc(6,a,2,1,"div",7),t.TgZ(7,"div",8),t.YNc(8,s,2,1,"ng-container",9),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&p){const z=t.oxw();t.ekj("ant-popover-rtl","rtl"===z.dir),t.Q6J("ngClass",z._classMap)("ngStyle",z.nzOverlayStyle)("@.disabled",null==z.noAnimation?null:z.noAnimation.nzNoAnimation)("nzNoAnimation",null==z.noAnimation?null:z.noAnimation.nzNoAnimation)("@zoomBigMotion","active"),t.xp6(6),t.Q6J("ngIf",z.nzTitle),t.xp6(2),t.Q6J("nzStringTemplateOutlet",z.nzContent)}}let P=(()=>{class p extends C.Mg{constructor(z,E,U,J,R,W){super(z,E,U,J,R,W),this._nzModuleName="popover",this.trigger="hover",this.placement="top",this.nzPopoverBackdrop=!1,this.visibleChange=new t.vpe,this.componentRef=this.hostView.createComponent(Z)}getProxyPropertyMap(){return Object.assign({nzPopoverBackdrop:["nzBackdrop",()=>this.nzPopoverBackdrop]},super.getProxyPropertyMap())}}return p.\u0275fac=function(z){return new(z||p)(t.Y36(t.SBq),t.Y36(t.s_b),t.Y36(t._Vd),t.Y36(t.Qsj),t.Y36(d.P,9),t.Y36(n.jY))},p.\u0275dir=t.lG2({type:p,selectors:[["","nz-popover",""]],hostVars:2,hostBindings:function(z,E){2&z&&t.ekj("ant-popover-open",E.visible)},inputs:{arrowPointAtCenter:["nzPopoverArrowPointAtCenter","arrowPointAtCenter"],title:["nzPopoverTitle","title"],content:["nzPopoverContent","content"],directiveTitle:["nz-popover","directiveTitle"],trigger:["nzPopoverTrigger","trigger"],placement:["nzPopoverPlacement","placement"],origin:["nzPopoverOrigin","origin"],visible:["nzPopoverVisible","visible"],mouseEnterDelay:["nzPopoverMouseEnterDelay","mouseEnterDelay"],mouseLeaveDelay:["nzPopoverMouseLeaveDelay","mouseLeaveDelay"],overlayClassName:["nzPopoverOverlayClassName","overlayClassName"],overlayStyle:["nzPopoverOverlayStyle","overlayStyle"],nzPopoverBackdrop:"nzPopoverBackdrop"},outputs:{visibleChange:"nzPopoverVisibleChange"},exportAs:["nzPopover"],features:[t.qOj]}),(0,l.gn)([(0,m.yF)()],p.prototype,"arrowPointAtCenter",void 0),(0,l.gn)([(0,n.oS)()],p.prototype,"nzPopoverBackdrop",void 0),p})(),Z=(()=>{class p extends C.XK{constructor(z,E,U){super(z,E,U),this._prefix="ant-popover"}get hasBackdrop(){return"click"===this.nzTrigger&&this.nzBackdrop}isEmpty(){return(0,C.pu)(this.nzTitle)&&(0,C.pu)(this.nzContent)}}return p.\u0275fac=function(z){return new(z||p)(t.Y36(t.sBO),t.Y36(D.Is,8),t.Y36(d.P,9))},p.\u0275cmp=t.Xpm({type:p,selectors:[["nz-popover"]],exportAs:["nzPopoverComponent"],features:[t.qOj],decls:2,vars:6,consts:[["cdkConnectedOverlay","","nzConnectedOverlay","",3,"cdkConnectedOverlayHasBackdrop","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayOpen","cdkConnectedOverlayPush","nzArrowPointAtCenter","overlayOutsideClick","detach","positionChange"],["overlay","cdkConnectedOverlay"],[1,"ant-popover",3,"ngClass","ngStyle","nzNoAnimation"],[1,"ant-popover-content"],[1,"ant-popover-arrow"],[1,"ant-popover-arrow-content"],["role","tooltip",1,"ant-popover-inner"],["class","ant-popover-title",4,"ngIf"],[1,"ant-popover-inner-content"],[4,"nzStringTemplateOutlet"],[1,"ant-popover-title"]],template:function(z,E){1&z&&(t.YNc(0,h,9,9,"ng-template",0,1,t.W1O),t.NdJ("overlayOutsideClick",function(J){return E.onClickOutside(J)})("detach",function(){return E.hide()})("positionChange",function(J){return E.onPositionChange(J)})),2&z&&t.Q6J("cdkConnectedOverlayHasBackdrop",E.hasBackdrop)("cdkConnectedOverlayOrigin",E.origin)("cdkConnectedOverlayPositions",E._positions)("cdkConnectedOverlayOpen",E._visible)("cdkConnectedOverlayPush",!0)("nzArrowPointAtCenter",E.nzArrowPointAtCenter)},directives:[x.pI,M.hQ,f.mk,f.PC,d.P,f.O5,A.f],encapsulation:2,data:{animation:[v.$C]},changeDetection:0}),p})(),Q=(()=>{class p{}return p.\u0275fac=function(z){return new(z||p)},p.\u0275mod=t.oAB({type:p}),p.\u0275inj=t.cJS({imports:[[D.vT,f.ez,x.U8,A.T,M.e4,d.g,C.cg]]}),p})()},8481:(I,O,e)=>{e.d(O,{j:()=>N,X:()=>a});var l=e(655),t=e(5e3),v=e(8929),n=e(7625),m=e(8693),C=e(1721),d=e(226),D=e(9808),x=e(647),M=e(4182);function f(s,h){if(1&s){const g=t.EpF();t.TgZ(0,"i",1),t.NdJ("click",function(Z){return t.CHM(g),t.oxw().closeTag(Z)}),t.qZA()}}const A=["*"];let N=(()=>{class s{constructor(g,P,Z,Q){this.cdr=g,this.renderer=P,this.elementRef=Z,this.directionality=Q,this.isPresetColor=!1,this.nzMode="default",this.nzChecked=!1,this.nzOnClose=new t.vpe,this.nzCheckedChange=new t.vpe,this.dir="ltr",this.destroy$=new v.xQ}updateCheckedStatus(){"checkable"===this.nzMode&&(this.nzChecked=!this.nzChecked,this.nzCheckedChange.emit(this.nzChecked))}closeTag(g){this.nzOnClose.emit(g),g.defaultPrevented||this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement),this.elementRef.nativeElement)}clearPresetColor(){const g=this.elementRef.nativeElement,P=new RegExp(`(ant-tag-(?:${[...m.uf,...m.Bh].join("|")}))`,"g"),Z=g.classList.toString(),Q=[];let p=P.exec(Z);for(;null!==p;)Q.push(p[1]),p=P.exec(Z);g.classList.remove(...Q)}setPresetColor(){const g=this.elementRef.nativeElement;this.clearPresetColor(),this.isPresetColor=!!this.nzColor&&((0,m.o2)(this.nzColor)||(0,m.M8)(this.nzColor)),this.isPresetColor&&g.classList.add(`ant-tag-${this.nzColor}`)}ngOnInit(){var g;null===(g=this.directionality.change)||void 0===g||g.pipe((0,n.R)(this.destroy$)).subscribe(P=>{this.dir=P,this.cdr.detectChanges()}),this.dir=this.directionality.value}ngOnChanges(g){const{nzColor:P}=g;P&&this.setPresetColor()}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return s.\u0275fac=function(g){return new(g||s)(t.Y36(t.sBO),t.Y36(t.Qsj),t.Y36(t.SBq),t.Y36(d.Is,8))},s.\u0275cmp=t.Xpm({type:s,selectors:[["nz-tag"]],hostAttrs:[1,"ant-tag"],hostVars:10,hostBindings:function(g,P){1&g&&t.NdJ("click",function(){return P.updateCheckedStatus()}),2&g&&(t.Udp("background-color",P.isPresetColor?"":P.nzColor),t.ekj("ant-tag-has-color",P.nzColor&&!P.isPresetColor)("ant-tag-checkable","checkable"===P.nzMode)("ant-tag-checkable-checked",P.nzChecked)("ant-tag-rtl","rtl"===P.dir))},inputs:{nzMode:"nzMode",nzColor:"nzColor",nzChecked:"nzChecked"},outputs:{nzOnClose:"nzOnClose",nzCheckedChange:"nzCheckedChange"},exportAs:["nzTag"],features:[t.TTD],ngContentSelectors:A,decls:2,vars:1,consts:[["nz-icon","","nzType","close","class","ant-tag-close-icon","tabindex","-1",3,"click",4,"ngIf"],["nz-icon","","nzType","close","tabindex","-1",1,"ant-tag-close-icon",3,"click"]],template:function(g,P){1&g&&(t.F$t(),t.Hsn(0),t.YNc(1,f,1,0,"i",0)),2&g&&(t.xp6(1),t.Q6J("ngIf","closeable"===P.nzMode))},directives:[D.O5,x.Ls],encapsulation:2,changeDetection:0}),(0,l.gn)([(0,C.yF)()],s.prototype,"nzChecked",void 0),s})(),a=(()=>{class s{}return s.\u0275fac=function(g){return new(g||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[[d.vT,D.ez,M.u5,x.PV]]}),s})()}}]);