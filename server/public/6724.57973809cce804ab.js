"use strict";(self.webpackChunkmain=self.webpackChunkmain||[]).push([[6724],{2322:(f,T,t)=>{t.d(T,{C:()=>p});var o=t(9808),n=t(7484),u=t(3762),d=t(1894),C=t(8144),z=t(8481),E=t(9444),P=t(5e3);let p=(()=>{class v{}return v.\u0275fac=function(m){return new(m||v)},v.\u0275mod=P.oAB({type:v}),v.\u0275inj=P.cJS({imports:[[o.ez,n.vh,u.Ph,d.Jb,z.X,C.zf,E.s]]}),v})()},7488:(f,T,t)=>{t.d(T,{y:()=>h});var o=t(9808),n=t(8481),u=t(647),d=t(325),C=t(9444),z=t(6949),E=t(7345),P=t(8369),p=t(209),v=t(4867),a=t(8625),m=t(7484),s=t(1894),l=t(3309),O=t(7026),D=t(7677),U=t(592),x=t(8144),A=t(3098),_=t(2322),c=t(5e3);let i=(()=>{class e{}return e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=c.oAB({type:e}),e.\u0275inj=c.cJS({imports:[[o.ez,z.WG,m.vh,s.Jb,u.PV,x.zf,A.q6,l.U,E.W,P.W,p.i,v.Q,D.G,U.x,_.C,a.$L.forChild({formatter:{useClass:O.x,provide:a.KP}})]]}),e})();var M=t(3610);let h=(()=>{class e{}return e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=c.oAB({type:e}),e.\u0275inj=c.cJS({imports:[[o.ez,d.Bz,C.s,i,n.X,u.PV,M.$6]]}),e})()},6265:(f,T,t)=>{t.d(T,{q:()=>h});var o=t(4850),n=t(5e3),u=t(712),d=t(9808),C=t(7484),z=t(7881),E=t(1894),P=t(3098),p=t(6715),v=t(5749),a=t(5737),m=t(6949);const s=["additionalMetadata"];function l(e,g){if(1&e&&(n._UZ(0,"cvc-user-avatar",14),n.TgZ(1,"span",15),n._uU(2),n.qZA()),2&e){const r=n.oxw().ngIf;n.Q6J("user",r),n.xp6(2),n.Oqu(r.displayName)}}function O(e,g){if(1&e&&(n._UZ(0,"i",16),n._uU(1),n.ALo(2,"titlecase")),2&e){const r=n.oxw().ngIf;n.xp6(1),n.hij(" ",n.lcZ(2,1,r.role)," ")}}function D(e,g){if(1&e&&(n.TgZ(0,"span"),n._uU(1),n.qZA()),2&e){const r=g.ngIf;n.xp6(1),n.Oqu(r)}}function U(e,g){if(1&e&&n._UZ(0,"cvc-organization-tag",18),2&e){const r=g.$implicit;n.Q6J("enablePopover",!1)("org",r)}}function x(e,g){if(1&e&&(n.TgZ(0,"cvc-tag-list"),n.YNc(1,U,1,2,"cvc-organization-tag",17),n.qZA()),2&e){const r=n.oxw().ngIf;n.xp6(1),n.Q6J("ngForOf",r.organizations)}}function A(e,g){1&e&&n._UZ(0,"nz-divider")}const _=function(e){return{$implicit:e}};function c(e,g){if(1&e&&(n.ynx(0),n._UZ(1,"nz-card",4),n.YNc(2,l,3,2,"ng-template",null,5,n.W1O),n.YNc(4,O,3,3,"ng-template",null,6,n.W1O),n.TgZ(6,"nz-row"),n.TgZ(7,"nz-col",7),n.TgZ(8,"div",8),n.TgZ(9,"p",9),n.YNc(10,D,2,1,"span",10),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(11,"nz-row"),n.TgZ(12,"nz-col",7),n.TgZ(13,"nz-descriptions",11),n.TgZ(14,"nz-descriptions-item",12),n.YNc(15,x,2,1,"cvc-tag-list",10),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(16,"nz-row"),n.YNc(17,A,1,0,"nz-divider",1),n.GkF(18,13),n.qZA(),n.BQk()),2&e){const r=g.ngIf,I=n.MAs(3),B=n.MAs(5),R=n.oxw(),W=n.MAs(4),y=n.MAs(6);n.xp6(1),n.Q6J("nzTitle",I)("nzExtra",B),n.xp6(9),n.Q6J("ngIf",r.bio)("ngIfElse",W),n.xp6(3),n.Q6J("nzColumn",2),n.xp6(2),n.Q6J("ngIf",r.organizations.length>0)("ngIfElse",y),n.xp6(2),n.Q6J("ngIf",R.metadataTemplateRef),n.xp6(1),n.Q6J("ngTemplateOutlet",R.metadataTemplateRef||null)("ngTemplateOutletContext",n.VKq(10,_,r))}}function i(e,g){1&e&&n._uU(0," User has not provided a biography.\n")}function M(e,g){1&e&&(n.TgZ(0,"span",19),n._uU(1,"--"),n.qZA())}let h=(()=>{class e{constructor(r){this.gql=r}ngOnInit(){if(null==this.userId)throw new Error("Must pass an id into user hovercard");this.user$=this.gql.watch({userId:this.userId}).valueChanges.pipe((0,o.U)(({data:r})=>r.user))}}return e.\u0275fac=function(r){return new(r||e)(n.Y36(u.cEv))},e.\u0275cmp=n.Xpm({type:e,selectors:[["cvc-user-popover"]],contentQueries:function(r,I,B){if(1&r&&n.Suo(B,s,5),2&r){let R;n.iGM(R=n.CRH())&&(I.metadataTemplateRef=R.first)}},inputs:{userId:"userId"},decls:7,vars:3,consts:[["id","popover-content"],[4,"ngIf"],["noBio",""],["noOrganizations",""],["nzBordered","false","id","card-content",3,"nzTitle","nzExtra"],["cardTitle",""],["cardExtra",""],["nzSpan","24"],[1,"popover-text"],["nz-typography",""],[4,"ngIf","ngIfElse"],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","Organizations"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],["size","default",3,"user"],["nz-typography","","nzStyle","default",1,"display-name"],["nz-icon","","nzType","civic-admin"],[3,"enablePopover","org",4,"ngFor","ngForOf"],[3,"enablePopover","org"],["nz-typography","","nzStyle","secondary"]],template:function(r,I){1&r&&(n.TgZ(0,"div",0),n.YNc(1,c,19,12,"ng-container",1),n.ALo(2,"ngrxPush"),n.qZA(),n.YNc(3,i,1,0,"ng-template",null,2,n.W1O),n.YNc(5,M,2,0,"ng-template",null,3,n.W1O)),2&r&&(n.xp6(1),n.Q6J("ngIf",n.lcZ(2,1,I.user$)))},directives:[d.O5,C.bd,z.L,E.SK,E.t3,P.R7,P.uj,p.$,d.sg,v.m,a.g,d.tP],pipes:[m.fM,d.rS],styles:["[_nghost-%COMP%]{display:block;margin:-8px -12px}[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}[_nghost-%COMP%]     .ant-descriptions-view{border:none}[_nghost-%COMP%]     #entity-child-counts{border-top:1px solid #f0f0f0;padding:8px}[_nghost-%COMP%]     #entity-child-counts nz-space{width:100%}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child nz-tag{margin-right:0}.popover-text[_ngcontent-%COMP%]{width:100%;padding:8px;border-bottom:1px solid #f0f0f0}#popover-content[_ngcontent-%COMP%]{min-width:350px;max-width:500px;min-height:125px}[_nghost-%COMP%]{display:block}.display-name[_ngcontent-%COMP%]{margin-left:8px;font-weight:400}"]}),e})()},6081:(f,T,t)=>{t.d(T,{J:()=>m});var o=t(9808),n=t(3630),u=t(3098),d=t(7484),C=t(6949),z=t(897),E=t(9476),P=t(5473),p=t(5737),v=t(1894),a=t(5e3);let m=(()=>{class s{}return s.\u0275fac=function(O){return new(O||s)},s.\u0275mod=a.oAB({type:s}),s.\u0275inj=a.cJS({imports:[[o.ez,C.WG,v.Jb,d.vh,u.q6,p.S,n.X,z.$,E.L,P.H]]}),s})()},125:(f,T,t)=>{t.d(T,{I:()=>A});var o=t(5e3),n=t(9808),u=t(325),d=t(8481),C=t(3610),z=t(6265),E=t(647);function P(_,c){}function p(_,c){if(1&_&&(o.ynx(0),o.TgZ(1,"a",5),o.YNc(2,P,0,0,"ng-template",6),o.qZA(),o.BQk()),2&_){const i=o.oxw(),M=o.MAs(2);o.xp6(1),o.MGl("routerLink","/users/",i.user.id,""),o.xp6(1),o.Q6J("ngTemplateOutlet",M)}}function v(_,c){}function a(_,c){if(1&_&&(o.TgZ(0,"nz-tag",9),o.YNc(1,v,0,0,"ng-template",6),o.qZA()),2&_){o.oxw();const i=o.MAs(2);o.oxw();const M=o.MAs(8);o.Q6J("nzPopoverMouseEnterDelay",.5)("nzPopoverContent",i),o.xp6(1),o.Q6J("ngTemplateOutlet",M)}}function m(_,c){if(1&_&&o._UZ(0,"cvc-user-popover",10),2&_){const i=o.oxw(2);o.Q6J("userId",i.user.id)}}function s(_,c){if(1&_&&(o.YNc(0,a,2,3,"nz-tag",7),o.YNc(1,m,1,1,"ng-template",null,8,o.W1O)),2&_){const i=o.oxw(),M=o.MAs(4);o.Q6J("ngIf",i.enablePopover)("ngIfElse",M)}}function l(_,c){}function O(_,c){if(1&_&&(o.TgZ(0,"nz-tag"),o.YNc(1,l,0,0,"ng-template",6),o.qZA()),2&_){o.oxw();const i=o.MAs(8);o.xp6(1),o.Q6J("ngTemplateOutlet",i)}}function D(_,c){}function U(_,c){if(1&_&&o.YNc(0,D,0,0,"ng-template",6),2&_){o.oxw();const i=o.MAs(2);o.Q6J("ngTemplateOutlet",i)}}function x(_,c){if(1&_&&(o._UZ(0,"i",11),o._uU(1)),2&_){const i=o.oxw();o.Q6J("nzType",i.icon),o.xp6(1),o.hij(" ",i.user.displayName,"\n")}}let A=(()=>{class _{constructor(){this.linked=!0,this.enablePopover=!0}set user(i){if(!i)throw new Error("user-tag User input requires TagLinkableUser.");switch(this._user=i,i.role){case"ADMIN":this.icon="civic-admin";break;case"EDITOR":this.icon="civic-editor";break;default:this.icon="civic-curator"}}get user(){return this._user}}return _.\u0275fac=function(i){return new(i||_)},_.\u0275cmp=o.Xpm({type:_,selectors:[["cvc-user-tag"]],inputs:{user:"user",linked:"linked",enablePopover:"enablePopover"},decls:9,vars:2,consts:[[4,"ngIf","ngIfElse"],["tag",""],["noPopover",""],["unlinked",""],["tagContent",""],[3,"routerLink"],[3,"ngTemplateOutlet"],["nz-popover","","nzPopoverTrigger","hover","nzPopoverPlacement","topCenter",3,"nzPopoverMouseEnterDelay","nzPopoverContent",4,"ngIf","ngIfElse"],["userPopover",""],["nz-popover","","nzPopoverTrigger","hover","nzPopoverPlacement","topCenter",3,"nzPopoverMouseEnterDelay","nzPopoverContent"],[3,"userId"],["nz-icon","","nzTheme","twotone","nzTwotoneColor","#A0D8F5",3,"nzType"]],template:function(i,M){if(1&i&&(o.YNc(0,p,3,2,"ng-container",0),o.YNc(1,s,3,2,"ng-template",null,1,o.W1O),o.YNc(3,O,2,1,"ng-template",null,2,o.W1O),o.YNc(5,U,1,1,"ng-template",null,3,o.W1O),o.YNc(7,x,2,2,"ng-template",null,4,o.W1O)),2&i){const h=o.MAs(6);o.Q6J("ngIf",M.linked)("ngIfElse",h)}},directives:[n.O5,u.yS,n.tP,d.j,C.lU,z.q,E.Ls],styles:[""],changeDetection:0}),_})()},7345:(f,T,t)=>{t.d(T,{W:()=>P});var o=t(9808),n=t(325),u=t(3610),d=t(8481),C=t(647),z=t(6081),E=t(5e3);let P=(()=>{class p{}return p.\u0275fac=function(a){return new(a||p)},p.\u0275mod=E.oAB({type:p}),p.\u0275inj=E.cJS({imports:[[o.ez,n.Bz,z.J,u.$6,d.X,C.PV]]}),p})()},5737:(f,T,t)=>{t.d(T,{g:()=>p,S:()=>v});var o=t(655),n=t(5e3),u=t(1721),d=t(9808),C=t(969),z=t(226);function E(a,m){if(1&a&&(n.ynx(0),n._uU(1),n.BQk()),2&a){const s=n.oxw(2);n.xp6(1),n.Oqu(s.nzText)}}function P(a,m){if(1&a&&(n.TgZ(0,"span",1),n.YNc(1,E,2,1,"ng-container",2),n.qZA()),2&a){const s=n.oxw();n.xp6(1),n.Q6J("nzStringTemplateOutlet",s.nzText)}}let p=(()=>{class a{constructor(){this.nzType="horizontal",this.nzOrientation="center",this.nzDashed=!1,this.nzPlain=!1}}return a.\u0275fac=function(s){return new(s||a)},a.\u0275cmp=n.Xpm({type:a,selectors:[["nz-divider"]],hostAttrs:[1,"ant-divider"],hostVars:16,hostBindings:function(s,l){2&s&&n.ekj("ant-divider-horizontal","horizontal"===l.nzType)("ant-divider-vertical","vertical"===l.nzType)("ant-divider-with-text",l.nzText)("ant-divider-plain",l.nzPlain)("ant-divider-with-text-left",l.nzText&&"left"===l.nzOrientation)("ant-divider-with-text-right",l.nzText&&"right"===l.nzOrientation)("ant-divider-with-text-center",l.nzText&&"center"===l.nzOrientation)("ant-divider-dashed",l.nzDashed)},inputs:{nzText:"nzText",nzType:"nzType",nzOrientation:"nzOrientation",nzDashed:"nzDashed",nzPlain:"nzPlain"},exportAs:["nzDivider"],decls:1,vars:1,consts:[["class","ant-divider-inner-text",4,"ngIf"],[1,"ant-divider-inner-text"],[4,"nzStringTemplateOutlet"]],template:function(s,l){1&s&&n.YNc(0,P,2,1,"span",0),2&s&&n.Q6J("ngIf",l.nzText)},directives:[d.O5,C.f],encapsulation:2,changeDetection:0}),(0,o.gn)([(0,u.yF)()],a.prototype,"nzDashed",void 0),(0,o.gn)([(0,u.yF)()],a.prototype,"nzPlain",void 0),a})(),v=(()=>{class a{}return a.\u0275fac=function(s){return new(s||a)},a.\u0275mod=n.oAB({type:a}),a.\u0275inj=n.cJS({imports:[[z.vT,d.ez,C.T]]}),a})()}}]);