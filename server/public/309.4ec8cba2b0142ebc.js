"use strict";(self.webpackChunkmain=self.webpackChunkmain||[]).push([[309],{5749:(A,z,t)=>{t.d(z,{m:()=>r});var n=t(5e3),l=t(9808),o=t(325),s=t(8481),u=t(3610),d=t(4850),x=t(712),T=t(7484),f=t(7881),E=t(1894),C=t(3098),m=t(6550),O=t(6949);const p=function(a,v){return{displayName:a,profileImagePath:v}};function P(a,v){if(1&a&&(n._UZ(0,"cvc-user-avatar",12),n.TgZ(1,"span",13),n._uU(2),n.qZA()),2&a){const i=n.oxw().ngIf;n.Q6J("user",n.WLB(2,p,i.name,i.profileImagePath)),n.xp6(2),n.Oqu(i.name)}}function y(a,v){if(1&a&&(n.TgZ(0,"span"),n._uU(1),n.qZA()),2&a){const i=v.ngIf;n.xp6(1),n.Oqu(i)}}function B(a,v){if(1&a&&(n.ynx(0),n.TgZ(1,"cvc-link-tag",14),n._uU(2),n.qZA(),n.BQk()),2&a){const i=n.oxw().ngIf;n.xp6(1),n.Q6J("href",i.url),n.xp6(1),n.hij(" ",i.name," ")}}function S(a,v){if(1&a&&(n.ynx(0),n.TgZ(1,"nz-card",4),n.YNc(2,P,3,5,"ng-template",null,5,n.W1O),n.TgZ(4,"nz-row"),n.TgZ(5,"nz-col",6),n.TgZ(6,"div",7),n.TgZ(7,"p",8),n.YNc(8,y,2,1,"span",9),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(9,"nz-descriptions",10),n.TgZ(10,"nz-descriptions-item",11),n.YNc(11,B,3,2,"ng-container",9),n.qZA(),n.qZA(),n.qZA(),n.BQk()),2&a){const i=v.ngIf,D=n.MAs(3);n.oxw();const N=n.MAs(4),F=n.MAs(6);n.xp6(1),n.Q6J("nzTitle",D),n.xp6(7),n.Q6J("ngIf",i.description)("ngIfElse",N),n.xp6(1),n.Q6J("nzColumn",2),n.xp6(2),n.Q6J("ngIf",i.url)("ngIfElse",F)}}function Z(a,v){1&a&&n._uU(0," Organization has not provided a description.\n")}function U(a,v){1&a&&n._uU(0," --\n")}let Q=(()=>{class a{constructor(i){this.gql=i}ngOnInit(){if(void 0===this.orgId)throw new Error("cvc-org-popover requires orgId input.");this.org$=this.gql.watch({orgId:this.orgId}).valueChanges.pipe((0,d.U)(({data:i})=>i.organization))}}return a.\u0275fac=function(i){return new(i||a)(n.Y36(x.X5f))},a.\u0275cmp=n.Xpm({type:a,selectors:[["cvc-organization-popover"]],inputs:{orgId:"orgId"},decls:7,vars:3,consts:[["id","popover-content"],[4,"ngIf"],["noDesc",""],["noHomepage",""],["nzBordered","false","id","card-content",3,"nzTitle"],["cardTitle",""],["nzSpan","24"],[1,"popover-text"],["nz-typography",""],[4,"ngIf","ngIfElse"],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","Homepage"],["size","default",3,"user"],["nz-typography","","nzStyle","default",1,"display-name"],[3,"href"]],template:function(i,D){1&i&&(n.TgZ(0,"div",0),n.YNc(1,S,12,6,"ng-container",1),n.ALo(2,"ngrxPush"),n.qZA(),n.YNc(3,Z,1,0,"ng-template",null,2,n.W1O),n.YNc(5,U,1,0,"ng-template",null,3,n.W1O)),2&i&&(n.xp6(1),n.Q6J("ngIf",n.lcZ(2,1,D.org$)))},directives:[l.O5,T.bd,f.L,E.SK,E.t3,C.R7,C.uj,m.l],pipes:[O.fM],styles:["[_nghost-%COMP%]{display:block;margin:-8px -12px}[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}[_nghost-%COMP%]     .ant-descriptions-view{border:none}[_nghost-%COMP%]     #entity-child-counts{border-top:1px solid #f0f0f0;padding:8px}[_nghost-%COMP%]     #entity-child-counts nz-space{width:100%}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child nz-tag{margin-right:0}.popover-text[_ngcontent-%COMP%]{width:100%;padding:8px;border-bottom:1px solid #f0f0f0}#popover-content[_ngcontent-%COMP%]{min-width:350px;max-width:500px;min-height:125px}"]}),a})();var R=t(647);function L(a,v){}function J(a,v){if(1&a&&(n.ynx(0),n.TgZ(1,"a",5),n.YNc(2,L,0,0,"ng-template",6),n.qZA(),n.BQk()),2&a){const i=n.oxw(),D=n.MAs(2);n.xp6(1),n.MGl("routerLink","/organizations/",i.org.id,""),n.xp6(1),n.Q6J("ngTemplateOutlet",D)}}function W(a,v){}function _(a,v){if(1&a&&n._UZ(0,"cvc-organization-popover",10),2&a){const i=n.oxw(3);n.Q6J("orgId",i.org.id)}}function M(a,v){if(1&a&&n.YNc(0,_,1,1,"cvc-organization-popover",9),2&a){const i=n.oxw(2);n.Q6J("ngIf",i.enablePopover)}}function c(a,v){if(1&a&&(n.TgZ(0,"nz-tag",7),n.YNc(1,W,0,0,"ng-template",6),n.qZA(),n.YNc(2,M,1,1,"ng-template",null,8,n.W1O)),2&a){const i=n.MAs(3);n.oxw();const D=n.MAs(8);n.Q6J("nzPopoverContent",i),n.xp6(1),n.Q6J("ngTemplateOutlet",D)}}function h(a,v){}function I(a,v){if(1&a&&(n.TgZ(0,"nz-tag"),n.YNc(1,h,0,0,"ng-template",6),n.qZA()),2&a){n.oxw();const i=n.MAs(8);n.xp6(1),n.Q6J("ngTemplateOutlet",i)}}function b(a,v){}function e(a,v){if(1&a&&n.YNc(0,b,0,0,"ng-template",6),2&a){n.oxw();const i=n.MAs(2);n.Q6J("ngTemplateOutlet",i)}}function g(a,v){if(1&a&&(n._UZ(0,"i",11),n._uU(1)),2&a){const i=n.oxw();n.xp6(1),n.hij(" ",i.org.name,"\n")}}let r=(()=>{class a{constructor(){this.linked=!0,this.enablePopover=!0}ngOnInit(){if(void 0===this.org)throw new Error("cvc-org-tag requires valid TagLinkableOrganization input, none provided.")}}return a.\u0275fac=function(i){return new(i||a)},a.\u0275cmp=n.Xpm({type:a,selectors:[["cvc-organization-tag"]],inputs:{org:"org",linked:"linked",enablePopover:"enablePopover"},decls:9,vars:2,consts:[[4,"ngIf","ngIfElse"],["tag",""],["noPopover",""],["unlinked",""],["tagContent",""],[3,"routerLink"],[3,"ngTemplateOutlet"],["nz-popover","",3,"nzPopoverContent"],["orgPopover",""],[3,"orgId",4,"ngIf"],[3,"orgId"],["nz-icon","","nzType","civic-organization","nzTheme","twotone","nzTwotoneColor","#58A0C4"]],template:function(i,D){if(1&i&&(n.YNc(0,J,3,2,"ng-container",0),n.YNc(1,c,4,2,"ng-template",null,1,n.W1O),n.YNc(3,I,2,1,"ng-template",null,2,n.W1O),n.YNc(5,e,1,1,"ng-template",null,3,n.W1O),n.YNc(7,g,2,1,"ng-template",null,4,n.W1O)),2&i){const N=n.MAs(6);n.Q6J("ngIf",D.linked)("ngIfElse",N)}},directives:[l.O5,o.yS,l.tP,s.j,u.lU,Q,R.Ls],styles:["[_nghost-%COMP%]{display:inline-block}"]}),a})()},2233:(A,z,t)=>{t.d(z,{P:()=>C});var n=t(5e3),l=t(325),o=t(1894),s=t(868),u=t(9808),d=t(647);const x=["tabBarExtraContent"];function T(m,O){if(1&m&&n.GkF(0,5),2&m){const p=n.oxw();n.Q6J("ngTemplateOutlet",p.tabBarExtraContent||null)}}function f(m,O){if(1&m&&(n.TgZ(0,"a",7),n._UZ(1,"i",8),n._uU(2),n.qZA()),2&m){const p=n.oxw().$implicit;n.Q6J("routerLink",p.routeName),n.xp6(1),n.Q6J("nzType",p.iconName),n.xp6(1),n.hij(" ",p.tabLabel," ")}}function E(m,O){1&m&&(n.TgZ(0,"nz-tab"),n.YNc(1,f,3,3,"a",6),n.qZA())}let C=(()=>{class m{constructor(p){this.router=p,this.selectedTabIndex=this.getActivatedRouteIndex(this.router.url)}getActivatedRouteIndex(p){var P;return null===(P=this.tabs)||void 0===P?void 0:P.findIndex(y=>p.includes(y.routeName))}}return m.\u0275fac=function(p){return new(p||m)(n.Y36(l.F0))},m.\u0275cmp=n.Xpm({type:m,selectors:[["cvc-tab-navigation"]],contentQueries:function(p,P,y){if(1&p&&n.Suo(y,x,5),2&p){let B;n.iGM(B=n.CRH())&&(P.tabBarExtraContent=B.first)}},inputs:{entity:"entity",tabs:"tabs"},decls:6,vars:3,consts:[["id","section-tabs"],["nzSpan","24"],["nzLinkRouter","","nzType","card","nzSize","small",3,"nzSelectedIndex","nzTabBarExtraContent"],["extraTpl",""],[4,"ngFor","ngForOf"],[3,"ngTemplateOutlet"],["nz-tab-link","",3,"routerLink",4,"nzTabLink"],["nz-tab-link","",3,"routerLink"],["nz-icon","",3,"nzType"]],template:function(p,P){if(1&p&&(n.TgZ(0,"nz-row",0),n.TgZ(1,"nz-col",1),n.TgZ(2,"nz-tabset",2),n.YNc(3,T,1,1,"ng-template",null,3,n.W1O),n.YNc(5,E,2,0,"nz-tab",4),n.qZA(),n.qZA(),n.qZA()),2&p){const y=n.MAs(4);n.xp6(2),n.Q6J("nzSelectedIndex",P.selectedTabIndex)("nzTabBarExtraContent",y),n.xp6(3),n.Q6J("ngForOf",P.tabs)}},directives:[o.SK,o.t3,s.xH,u.tP,u.sg,s.xw,s.Fx,s.Ao,l.yS,d.Ls],styles:["[_nghost-%COMP%]{display:block}"]}),m})()},8762:(A,z,t)=>{t.d(z,{c:()=>T});var n=t(9808),l=t(868),o=t(1894),s=t(325),u=t(647),d=t(6949),x=t(5e3);let T=(()=>{class f{}return f.\u0275fac=function(C){return new(C||f)},f.\u0275mod=x.oAB({type:f}),f.\u0275inj=x.cJS({imports:[[n.ez,s.Bz,l.we,o.Jb,u.PV,d.WG]]}),f})()},9180:(A,z,t)=>{t.d(z,{Z:()=>o});var n=t(5e3);const l=["*"];let o=(()=>{class s{constructor(){}ngOnInit(){}}return s.\u0275fac=function(d){return new(d||s)},s.\u0275cmp=n.Xpm({type:s,selectors:[["cvc-form-buttons"]],ngContentSelectors:l,decls:2,vars:0,consts:[[1,"form-buttons"]],template:function(d,x){1&d&&(n.F$t(),n.TgZ(0,"div",0),n.Hsn(1),n.qZA())},styles:["[_nghost-%COMP%]{display:block}.form-buttons[_ngcontent-%COMP%]{text-align:right}"]}),s})()},4375:(A,z,t)=>{t.d(z,{R:()=>o});var n=t(9808),l=t(5e3);let o=(()=>{class s{}return s.\u0275fac=function(d){return new(d||s)},s.\u0275mod=l.oAB({type:s}),s.\u0275inj=l.cJS({imports:[[n.ez]]}),s})()},8227:(A,z,t)=>{t.d(z,{q:()=>W});var n=t(5e3),l=t(8929),o=t(4850),s=t(373),u=t(2868),d=t(7625),x=t(1793),T=t(9350),f=t(9808),E=t(6042),C=t(2683),m=t(2643),O=t(3677),p=t(8144),P=t(6699),y=t(4219);function B(_,M){1&_&&n.Hsn(0)}function S(_,M){1&_&&n.GkF(0)}function Z(_,M){if(1&_&&(n.ynx(0),n.YNc(1,S,1,0,"ng-container",5),n.BQk()),2&_){n.oxw(2);const c=n.MAs(1);n.xp6(1),n.Q6J("ngTemplateOutlet",c)}}function U(_,M){1&_&&n.GkF(0)}function Q(_,M){if(1&_&&(n.ynx(0),n.TgZ(1,"nz-button-group",6),n.YNc(2,U,1,0,"ng-container",5),n.TgZ(3,"button",7),n.TgZ(4,"nz-space",8),n.TgZ(5,"span"),n._uU(6,"for"),n.qZA(),n._UZ(7,"nz-avatar",9),n._UZ(8,"i",10),n.qZA(),n.qZA(),n.qZA(),n.BQk()),2&_){n.oxw();const c=n.MAs(4),h=n.oxw(),I=n.MAs(1);n.xp6(1),n.Q6J("nzSize",h.nzSize),n.xp6(1),n.Q6J("ngTemplateOutlet",I),n.xp6(1),n.Q6J("nzType",h.buttonType)("nzDanger",h.nzDanger)("disabled",h.disabled)("nzDropdownMenu",c),n.xp6(1),n.Q6J("nzSize",4),n.xp6(3),n.Q6J("nzSrc",null==h.selectedOrg?null:h.selectedOrg.profileImagePath)("nzSize",10)("nzShape","square")}}function R(_,M){if(1&_){const c=n.EpF();n.TgZ(0,"li",11),n.NdJ("click",function(){const b=n.CHM(c).$implicit;return n.oxw(2).selectOrg(b)}),n._UZ(1,"nz-avatar",12),n._uU(2),n.qZA()}if(2&_){const c=M.$implicit,h=n.oxw(2);n.Q6J("nzSelected",(null==h.selectedOrg?null:h.selectedOrg.id)===c.id),n.xp6(1),n.Q6J("nzSrc",null==c?null:c.profileImagePath)("nzSize",10)("nzShape","square"),n.xp6(1),n.hij(" ",c.name," ")}}function L(_,M){if(1&_&&(n.ynx(0),n.YNc(1,Z,2,1,"ng-container",1),n.YNc(2,Q,9,10,"ng-container",1),n.TgZ(3,"nz-dropdown-menu",null,2),n.TgZ(5,"ul",3),n.YNc(6,R,3,5,"li",4),n.qZA(),n.qZA(),n.BQk()),2&_){const c=M.ngIf;n.xp6(1),n.Q6J("ngIf",c.length<=1),n.xp6(1),n.Q6J("ngIf",c.length>1),n.xp6(4),n.Q6J("ngForOf",c)}}const J=["*"];let W=(()=>{class _{constructor(c){this.viewerService=c,this.selectedOrgChange=new n.vpe,this.buttonType="primary",this.nzDanger=!1,this.nzSize="small",this.destroy$=new l.xQ}get disabled(){return this.button.disabled}selectOrg(c){this.selectedOrg=c,this.selectedOrgChange.emit(c)}ngOnInit(){this.organizations$=this.viewerService.viewer$.pipe((0,o.U)(c=>c.organizations)),this.mostRecentOrg$=this.viewerService.viewer$.pipe((0,s.j)("mostRecentOrg"),(0,u.b)(c=>{c&&(this.selectedOrg=c,this.selectedOrgChange.emit(c))})),this.mostRecentOrg$.pipe((0,d.R)(this.destroy$)).subscribe()}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return _.\u0275fac=function(c){return new(c||_)(n.Y36(T.a))},_.\u0275cmp=n.Xpm({type:_,selectors:[["cvc-org-selector-btn-group"]],contentQueries:function(c,h,I){if(1&c&&n.Suo(I,x.m,5),2&c){let b;n.iGM(b=n.CRH())&&(h.button=b.first)}},inputs:{selectedOrg:"selectedOrg",buttonType:"buttonType",nzDanger:"nzDanger",nzSize:"nzSize"},outputs:{selectedOrgChange:"selectedOrgChange"},ngContentSelectors:J,decls:4,vars:3,consts:[["submitButton",""],[4,"ngIf"],["orgMenu","nzDropdownMenu"],["nz-menu",""],["nz-menu-item","",3,"nzSelected","click",4,"ngFor","ngForOf"],[4,"ngTemplateOutlet"],[3,"nzSize"],["type","button","nz-button","","nz-dropdown","",1,"org-dropdown-btn",3,"nzType","nzDanger","disabled","nzDropdownMenu"],["nzDirection","horizontal",3,"nzSize"],[3,"nzSrc","nzSize","nzShape"],["nz-icon","","nzType","down"],["nz-menu-item","",3,"nzSelected","click"],[2,"background-color","#f0f5ff",3,"nzSrc","nzSize","nzShape"]],template:function(c,h){1&c&&(n.F$t(),n.YNc(0,B,1,0,"ng-template",null,0,n.W1O),n.YNc(2,L,7,3,"ng-container",1),n.ALo(3,"async")),2&c&&(n.xp6(2),n.Q6J("ngIf",n.lcZ(3,1,h.organizations$)))},directives:[f.O5,f.tP,E.fY,C.w,E.ix,m.dQ,O.wA,O.cm,p.NU,P.Dz,O.RR,y.wO,f.sg,y.r9],pipes:[f.Ov],styles:["[_nghost-%COMP%]{display:inline-block}.org-dropdown-btn[_ngcontent-%COMP%]   nz-avatar[_ngcontent-%COMP%]{margin:0 6px}"]}),_})()},1825:(A,z,t)=>{t.d(z,{A:()=>x});var n=t(9808),l=t(6042),o=t(6699),s=t(3677),u=t(8144),d=t(5e3);let x=(()=>{class T{}return T.\u0275fac=function(E){return new(E||T)},T.\u0275mod=d.oAB({type:T}),T.\u0275inj=d.cJS({imports:[[n.ez,l.sL,o.Rt,s.b1,u.zf]]}),T})()},1793:(A,z,t)=>{t.d(z,{m:()=>l});var n=t(5e3);let l=(()=>{class o{constructor(u){this.el=u,this.observer=new MutationObserver(([d])=>this.disabled=d.target.disabled),this.observer.observe(this.el.nativeElement,{attributeFilter:["disabled"],childList:!1,subtree:!1})}ngOnDestroy(){this.observer.disconnect()}}return o.\u0275fac=function(u){return new(u||o)(n.Y36(n.SBq))},o.\u0275dir=n.lG2({type:o,selectors:[["button","cvcOrgSelectorBtn",""]],hostVars:2,hostBindings:function(u,d){2&u&&n.ekj("ant-btn-dangerous",d.nzDanger)}}),o})()},4623:(A,z,t)=>{t.d(z,{K:()=>E});var n=t(9808),l=t(8776),o=t(5e3),s=t(1047),u=t(4182);const x={name:"comment-textarea",component:(()=>{class C extends l.fS{constructor(){super(...arguments),this.defaultOptions={defaultValue:"",validation:{messages:{minlength:(O,p)=>{var P;return`Comments must be at least ${null===(P=p.templateOptions)||void 0===P?void 0:P.minLength} characters in length.`}}},templateOptions:{rows:4}}}}return C.\u0275fac=function(){let m;return function(p){return(m||(m=o.n5z(C)))(p||C)}}(),C.\u0275cmp=o.Xpm({type:C,selectors:[["comment-textarea-type"]],features:[o.qOj],decls:1,vars:2,consts:[["nz-input","",3,"formControl","formlyAttributes"]],template:function(O,p){1&O&&o._UZ(0,"textarea",0),2&O&&o.Q6J("formControl",p.formControl)("formlyAttributes",p.field)},directives:[s.Zp,u.Fj,u.JJ,u.oH,l.VQ],styles:[""],changeDetection:0}),C})(),wrappers:["form-field"]};var T=t(4546),f=t(9139);let E=(()=>{class C{}return C.\u0275fac=function(O){return new(O||C)},C.\u0275mod=o.oAB({type:C}),C.\u0275inj=o.cJS({imports:[[n.ez,u.UX,l.X0.forChild({types:[x]}),f.u,T.U5,s.o7]]}),C})()},6256:(A,z,t)=>{t.r(z),t.d(z,{CurationModule:()=>b});var n=t(9808),l=t(325),o=t(5e3);let s=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=o.Xpm({type:e,selectors:[["cvc-curation-dashboard-page"]],decls:2,vars:0,template:function(r,a){1&r&&(o.TgZ(0,"p"),o._uU(1,"curation-dashboard works!"),o.qZA())},styles:[""]}),e})();var u=t(8992),d=t(1945),x=t(2233);let T=(()=>{class e{constructor(){this.tabs=[{routeName:"pending-sources",iconName:"civic-source",tabLabel:"Sources Queue"},{routeName:"pending-evidence",iconName:"civic-evidence",tabLabel:"Evidence Queue"},{routeName:"pending-assertions",iconName:"civic-assertion",tabLabel:"Assertions Queue"}]}ngOnInit(){}}return e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=o.Xpm({type:e,selectors:[["cvc-curation-queues-view"]],decls:9,vars:1,consts:[[1,"site-page-header"],[3,"tabs"],[1,"content"]],template:function(r,a){1&r&&(o._UZ(0,"cvc-section-navigation"),o.TgZ(1,"nz-page-header",0),o.TgZ(2,"nz-page-header-title"),o._uU(3," Curation Queues "),o.qZA(),o._UZ(4,"nz-page-header-extra"),o.TgZ(5,"nz-page-header-content"),o._UZ(6,"cvc-tab-navigation",1),o.TgZ(7,"div",2),o._UZ(8,"router-outlet"),o.qZA(),o.qZA(),o.qZA()),2&r&&(o.xp6(6),o.Q6J("tabs",a.tabs))},directives:[u.I,d.$O,d.u9,d.Jp,d.u5,x.P,l.lC],styles:["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]     nz-page-header:first-of-type{background-color:#fff;border-radius:8px}[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card{width:100%}[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card .card-grid-cell{width:50%}[_nghost-%COMP%]     nz-page-header:first-of-type nz-page-header-title.flagged{padding-left:.75em}[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-content{padding-top:0}[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-heading-extra nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs{margin:0 -16px 12px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap{padding-left:16px;padding-right:16px;line-height:24px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab{padding:1px 8px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab .anticon{margin-right:0}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-extra-content{margin-right:16px}"]}),e})();var f=t(712),E=t(3756);let C=(()=>{class e{constructor(){this.status=f.RTy.Submitted}ngOnInit(){}}return e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=o.Xpm({type:e,selectors:[["cvc-pending-assertions-page"]],decls:1,vars:1,consts:[[3,"status"]],template:function(r,a){1&r&&o._UZ(0,"cvc-assertions-table",0),2&r&&o.Q6J("status",a.status)},directives:[E.x],styles:[""]}),e})();var m=t(8965);let O=(()=>{class e{constructor(){this.status=f.RTy.Submitted}ngOnInit(){}}return e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=o.Xpm({type:e,selectors:[["cvc-pending-evidence-page"]],decls:1,vars:1,consts:[[3,"status"]],template:function(r,a){1&r&&o._UZ(0,"cvc-evidence-table",0),2&r&&o.Q6J("status",a.status)},directives:[m.a],styles:[""]}),e})();var p=t(9814);const B=[{path:"",component:(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=o.Xpm({type:e,selectors:[["cvc-curation-view"]],decls:1,vars:0,template:function(r,a){1&r&&o._UZ(0,"router-outlet")},directives:[l.lC],styles:[""]}),e})(),children:[{path:"",redirectTo:"dashboard",pathMatch:"full"},{path:"dashboard",component:s,data:{breadcrumb:"Dashboard"}},{path:"queues",component:T,data:{breadcrumb:"Queues"},children:[{path:"",redirectTo:"pending-sources",pathMatch:"full"},{path:"pending-sources",component:(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=o.Xpm({type:e,selectors:[["cvc-pending-sources-page"]],decls:1,vars:0,template:function(r,a){1&r&&o._UZ(0,"cvc-source-suggestions-table")},directives:[p.O],styles:[""]}),e})(),data:{breadcrumb:"Pending Source Suggestions"}},{path:"pending-evidence",component:O,data:{breadcrumb:"Pending Evidence Items"}},{path:"pending-assertions",component:C,data:{breadcrumb:"Pending Assertions"}}]}]}];let S=(()=>{class e{}return e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[[l.Bz.forChild(B)],l.Bz]}),e})();const Z=[];let U=(()=>{class e{}return e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[[l.Bz.forChild(Z)],l.Bz]}),e})();var Q=t(5630),R=t(6949),L=t(8762);let J=(()=>{class e{}return e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[[n.ez,R.WG,U,d.KJ,Q.D,L.c]]}),e})();var W=t(2832);let _=(()=>{class e{}return e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[[n.ez,W.W]]}),e})();var M=t(767);let c=(()=>{class e{}return e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[[n.ez,M.Q]]}),e})();var h=t(9441);let I=(()=>{class e{}return e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[[n.ez,h.s]]}),e})(),b=(()=>{class e{}return e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[[n.ez,S,J,_,c,I]]}),e})()}}]);