"use strict";(self.webpackChunkmain=self.webpackChunkmain||[]).push([[2738],{9401:(z,C,o)=>{o.d(C,{y:()=>m});var t=o(9808),n=o(8481),E=o(647),g=o(325),T=o(9444),P=o(5e3);let m=(()=>{class p{}return p.\u0275fac=function(O){return new(O||p)},p.\u0275mod=P.oAB({type:p}),p.\u0275inj=P.cJS({imports:[[t.ez,g.Bz,T.s,n.X,E.PV]]}),p})()},6265:(z,C,o)=>{o.d(C,{q:()=>B});var t=o(4850),n=o(5e3),E=o(712),g=o(9808),T=o(7484),P=o(7881),m=o(1894),p=o(3098),l=o(6715),O=o(5749),a=o(5737),u=o(6949);const i=["additionalMetadata"];function c(_,v){if(1&_&&(n._UZ(0,"cvc-user-avatar",14),n.TgZ(1,"span",15),n._uU(2),n.qZA()),2&_){const r=n.oxw().ngIf;n.Q6J("user",r),n.xp6(2),n.Oqu(r.displayName)}}function f(_,v){if(1&_&&(n._UZ(0,"i",16),n._uU(1),n.ALo(2,"titlecase")),2&_){const r=n.oxw().ngIf;n.xp6(1),n.hij(" ",n.lcZ(2,1,r.role)," ")}}function x(_,v){if(1&_&&(n.TgZ(0,"span"),n._uU(1),n.qZA()),2&_){const r=v.ngIf;n.xp6(1),n.Oqu(r)}}function A(_,v){if(1&_&&n._UZ(0,"cvc-organization-tag",18),2&_){const r=v.$implicit;n.Q6J("enablePopover",!1)("org",r)}}function h(_,v){if(1&_&&(n.TgZ(0,"cvc-tag-list"),n.YNc(1,A,1,2,"cvc-organization-tag",17),n.qZA()),2&_){const r=n.oxw().ngIf;n.xp6(1),n.Q6J("ngForOf",r.organizations)}}function I(_,v){1&_&&n._UZ(0,"nz-divider")}const e=function(_){return{$implicit:_}};function d(_,v){if(1&_&&(n.ynx(0),n._UZ(1,"nz-card",4),n.YNc(2,c,3,2,"ng-template",null,5,n.W1O),n.YNc(4,f,3,3,"ng-template",null,6,n.W1O),n.TgZ(6,"nz-row"),n.TgZ(7,"nz-col",7),n.TgZ(8,"div",8),n.TgZ(9,"p",9),n.YNc(10,x,2,1,"span",10),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(11,"nz-row"),n.TgZ(12,"nz-col",7),n.TgZ(13,"nz-descriptions",11),n.TgZ(14,"nz-descriptions-item",12),n.YNc(15,h,2,1,"cvc-tag-list",10),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(16,"nz-row"),n.YNc(17,I,1,0,"nz-divider",1),n.GkF(18,13),n.qZA(),n.BQk()),2&_){const r=v.ngIf,D=n.MAs(3),W=n.MAs(5),U=n.oxw(),y=n.MAs(4),R=n.MAs(6);n.xp6(1),n.Q6J("nzTitle",D)("nzExtra",W),n.xp6(9),n.Q6J("ngIf",r.bio)("ngIfElse",y),n.xp6(3),n.Q6J("nzColumn",2),n.xp6(2),n.Q6J("ngIf",r.organizations.length>0)("ngIfElse",R),n.xp6(2),n.Q6J("ngIf",U.metadataTemplateRef),n.xp6(1),n.Q6J("ngTemplateOutlet",U.metadataTemplateRef||null)("ngTemplateOutletContext",n.VKq(10,e,r))}}function s(_,v){1&_&&n._uU(0," User has not provided a biography.\n")}function M(_,v){1&_&&(n.TgZ(0,"span",19),n._uU(1,"--"),n.qZA())}let B=(()=>{class _{constructor(r){this.gql=r}ngOnInit(){if(null==this.userId)throw new Error("Must pass an id into user hovercard");this.user$=this.gql.watch({userId:this.userId}).valueChanges.pipe((0,t.U)(({data:r})=>r.user))}}return _.\u0275fac=function(r){return new(r||_)(n.Y36(E.cEv))},_.\u0275cmp=n.Xpm({type:_,selectors:[["cvc-user-popover"]],contentQueries:function(r,D,W){if(1&r&&n.Suo(W,i,5),2&r){let U;n.iGM(U=n.CRH())&&(D.metadataTemplateRef=U.first)}},inputs:{userId:"userId"},decls:7,vars:3,consts:[["id","popover-content"],[4,"ngIf"],["noBio",""],["noOrganizations",""],["nzBordered","false","id","card-content",3,"nzTitle","nzExtra"],["cardTitle",""],["cardExtra",""],["nzSpan","24"],[1,"popover-text"],["nz-typography",""],[4,"ngIf","ngIfElse"],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","Organizations"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],["size","default",3,"user"],["nz-typography","","nzStyle","default",1,"display-name"],["nz-icon","","nzType","civic-admin"],[3,"enablePopover","org",4,"ngFor","ngForOf"],[3,"enablePopover","org"],["nz-typography","","nzStyle","secondary"]],template:function(r,D){1&r&&(n.TgZ(0,"div",0),n.YNc(1,d,19,12,"ng-container",1),n.ALo(2,"ngrxPush"),n.qZA(),n.YNc(3,s,1,0,"ng-template",null,2,n.W1O),n.YNc(5,M,2,0,"ng-template",null,3,n.W1O)),2&r&&(n.xp6(1),n.Q6J("ngIf",n.lcZ(2,1,D.user$)))},directives:[g.O5,T.bd,P.L,m.SK,m.t3,p.R7,p.uj,l.$,g.sg,O.m,a.g,g.tP],pipes:[u.fM,g.rS],styles:["[_nghost-%COMP%]{display:block;margin:-8px -12px}[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}[_nghost-%COMP%]     .ant-descriptions-view{border:none}[_nghost-%COMP%]     #entity-child-counts{border-top:1px solid #f0f0f0;padding:8px}[_nghost-%COMP%]     #entity-child-counts nz-space{width:100%}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child nz-tag{margin-right:0}.popover-text[_ngcontent-%COMP%]{width:100%;padding:8px;border-bottom:1px solid #f0f0f0}#popover-content[_ngcontent-%COMP%]{min-width:350px;max-width:500px;min-height:125px}[_nghost-%COMP%]{display:block}.display-name[_ngcontent-%COMP%]{margin-left:8px;font-weight:400}"]}),_})()},6081:(z,C,o)=>{o.d(C,{J:()=>u});var t=o(9808),n=o(3630),E=o(3098),g=o(7484),T=o(6949),P=o(897),m=o(9476),p=o(5473),l=o(5737),O=o(1894),a=o(5e3);let u=(()=>{class i{}return i.\u0275fac=function(f){return new(f||i)},i.\u0275mod=a.oAB({type:i}),i.\u0275inj=a.cJS({imports:[[t.ez,T.WG,O.Jb,g.vh,E.q6,l.S,n.X,P.$,m.L,p.H]]}),i})()},125:(z,C,o)=>{o.d(C,{I:()=>I});var t=o(5e3),n=o(9808),E=o(325),g=o(8481),T=o(3610),P=o(6265),m=o(647);function p(e,d){}function l(e,d){if(1&e&&(t.ynx(0),t.TgZ(1,"a",5),t.YNc(2,p,0,0,"ng-template",6),t.qZA(),t.BQk()),2&e){const s=t.oxw(),M=t.MAs(2);t.xp6(1),t.MGl("routerLink","/users/",s.user.id,""),t.xp6(1),t.Q6J("ngTemplateOutlet",M)}}function O(e,d){}function a(e,d){if(1&e&&t._UZ(0,"cvc-user-popover",10),2&e){const s=t.oxw(3);t.Q6J("userId",s.user.id)}}function u(e,d){if(1&e&&t.YNc(0,a,1,1,"cvc-user-popover",9),2&e){const s=t.oxw(2);t.Q6J("ngIf",s.enablePopover)}}function i(e,d){if(1&e&&(t.TgZ(0,"nz-tag",7),t.YNc(1,O,0,0,"ng-template",6),t.qZA(),t.YNc(2,u,1,1,"ng-template",null,8,t.W1O)),2&e){const s=t.MAs(3);t.oxw();const M=t.MAs(8);t.Q6J("nzPopoverMouseEnterDelay",.5)("nzPopoverContent",s),t.xp6(1),t.Q6J("ngTemplateOutlet",M)}}function c(e,d){}function f(e,d){if(1&e&&(t.TgZ(0,"nz-tag"),t.YNc(1,c,0,0,"ng-template",6),t.qZA()),2&e){t.oxw();const s=t.MAs(8);t.xp6(1),t.Q6J("ngTemplateOutlet",s)}}function x(e,d){}function A(e,d){if(1&e&&t.YNc(0,x,0,0,"ng-template",6),2&e){t.oxw();const s=t.MAs(2);t.Q6J("ngTemplateOutlet",s)}}function h(e,d){if(1&e&&(t._UZ(0,"i",11),t._uU(1)),2&e){const s=t.oxw();t.Q6J("nzType",s.icon),t.xp6(1),t.hij(" ",s.user.displayName,"\n")}}let I=(()=>{class e{constructor(){this.linked=!0,this.enablePopover=!0}ngOnInit(){if(void 0===this.user)throw new Error("cvc-user-tag component requires valid user input.");switch(this.user.role){case"admin":this.icon="civic-admin";break;case"editor":this.icon="civic-editor";break;default:this.icon="civic-curator"}}}return e.\u0275fac=function(s){return new(s||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["cvc-user-tag"]],inputs:{user:"user",linked:"linked",enablePopover:"enablePopover"},decls:9,vars:2,consts:[[4,"ngIf","ngIfElse"],["tag",""],["noPopover",""],["unlinked",""],["tagContent",""],[3,"routerLink"],[3,"ngTemplateOutlet"],["nz-popover","","nzPopoverTrigger","hover","nzPopoverPlacement","topCenter",3,"nzPopoverMouseEnterDelay","nzPopoverContent"],["userPopover",""],[3,"userId",4,"ngIf"],[3,"userId"],["nz-icon","","nzTheme","twotone","nzTwotoneColor","#A0D8F5",3,"nzType"]],template:function(s,M){if(1&s&&(t.YNc(0,l,3,2,"ng-container",0),t.YNc(1,i,4,3,"ng-template",null,1,t.W1O),t.YNc(3,f,2,1,"ng-template",null,2,t.W1O),t.YNc(5,A,1,1,"ng-template",null,3,t.W1O),t.YNc(7,h,2,2,"ng-template",null,4,t.W1O)),2&s){const B=t.MAs(6);t.Q6J("ngIf",M.linked)("ngIfElse",B)}},directives:[n.O5,E.yS,n.tP,g.j,T.lU,P.q,m.Ls],styles:[""]}),e})()},7345:(z,C,o)=>{o.d(C,{W:()=>p});var t=o(9808),n=o(325),E=o(3610),g=o(8481),T=o(647),P=o(6081),m=o(5e3);let p=(()=>{class l{}return l.\u0275fac=function(a){return new(a||l)},l.\u0275mod=m.oAB({type:l}),l.\u0275inj=m.cJS({imports:[[t.ez,n.Bz,P.J,E.$6,g.X,T.PV]]}),l})()},5737:(z,C,o)=>{o.d(C,{g:()=>l,S:()=>O});var t=o(655),n=o(5e3),E=o(1721),g=o(9808),T=o(969),P=o(226);function m(a,u){if(1&a&&(n.ynx(0),n._uU(1),n.BQk()),2&a){const i=n.oxw(2);n.xp6(1),n.Oqu(i.nzText)}}function p(a,u){if(1&a&&(n.TgZ(0,"span",1),n.YNc(1,m,2,1,"ng-container",2),n.qZA()),2&a){const i=n.oxw();n.xp6(1),n.Q6J("nzStringTemplateOutlet",i.nzText)}}let l=(()=>{class a{constructor(){this.nzType="horizontal",this.nzOrientation="center",this.nzDashed=!1,this.nzPlain=!1}}return a.\u0275fac=function(i){return new(i||a)},a.\u0275cmp=n.Xpm({type:a,selectors:[["nz-divider"]],hostAttrs:[1,"ant-divider"],hostVars:16,hostBindings:function(i,c){2&i&&n.ekj("ant-divider-horizontal","horizontal"===c.nzType)("ant-divider-vertical","vertical"===c.nzType)("ant-divider-with-text",c.nzText)("ant-divider-plain",c.nzPlain)("ant-divider-with-text-left",c.nzText&&"left"===c.nzOrientation)("ant-divider-with-text-right",c.nzText&&"right"===c.nzOrientation)("ant-divider-with-text-center",c.nzText&&"center"===c.nzOrientation)("ant-divider-dashed",c.nzDashed)},inputs:{nzText:"nzText",nzType:"nzType",nzOrientation:"nzOrientation",nzDashed:"nzDashed",nzPlain:"nzPlain"},exportAs:["nzDivider"],decls:1,vars:1,consts:[["class","ant-divider-inner-text",4,"ngIf"],[1,"ant-divider-inner-text"],[4,"nzStringTemplateOutlet"]],template:function(i,c){1&i&&n.YNc(0,p,2,1,"span",0),2&i&&n.Q6J("ngIf",c.nzText)},directives:[g.O5,T.f],encapsulation:2,changeDetection:0}),(0,t.gn)([(0,E.yF)()],a.prototype,"nzDashed",void 0),(0,t.gn)([(0,E.yF)()],a.prototype,"nzPlain",void 0),a})(),O=(()=>{class a{}return a.\u0275fac=function(i){return new(i||a)},a.\u0275mod=n.oAB({type:a}),a.\u0275inj=n.cJS({imports:[[P.vT,g.ez,T.T]]}),a})()}}]);