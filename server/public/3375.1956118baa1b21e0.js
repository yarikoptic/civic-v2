"use strict";(self.webpackChunkmain=self.webpackChunkmain||[]).push([[3375],{5105:(et,P,a)=>{a.d(P,{p:()=>x});var u=a(6654),g=a(9771),e=a(4650),z=a(6895),m=a(9116),E=a(6672),A=a(6581),_=a(1102),t=a(3314),b=a(4557);function d(i,c){}function U(i,c){if(1&i&&(e.ynx(0),e.TgZ(1,"a",5),e.YNc(2,d,0,0,"ng-template",6),e.qZA(),e.BQk()),2&i){const s=e.oxw(),l=e.MAs(2);e.xp6(1),e.Q6J("routerLink",s.molecularProfile.link),e.xp6(1),e.Q6J("ngTemplateOutlet",l)}}function h(i,c){}const f=function(i){return{deprecated:i}};function B(i,c){if(1&i){const s=e.EpF();e.TgZ(0,"nz-tag",9),e.NdJ("nzOnClose",function(y){e.CHM(s);const D=e.oxw(2);return e.KtG(D.itemClosed(y))}),e.YNc(1,h,0,0,"ng-template",6),e.qZA()}if(2&i){e.oxw();const s=e.MAs(2),l=e.oxw(),y=e.MAs(8);e.Q6J("ngClass",e.VKq(5,f,l.molecularProfile.deprecated))("nzPopoverMouseEnterDelay",l.onCloseClicked?0:.5)("nzPopoverContent",s)("nzMode",l.onCloseClicked?"closeable":"default"),e.xp6(1),e.Q6J("ngTemplateOutlet",y)}}function $(i,c){if(1&i&&e._UZ(0,"cvc-molecular-profile-popover",11),2&i){const s=e.oxw(3);e.Q6J("molecularProfileId",s.molecularProfile.id)}}function F(i,c){if(1&i&&e.YNc(0,$,1,1,"cvc-molecular-profile-popover",10),2&i){const s=e.oxw(2);e.Q6J("ngIf",s.enablePopover)}}function v(i,c){if(1&i&&(e.YNc(0,B,2,7,"nz-tag",7),e.YNc(1,F,1,1,"ng-template",null,8,e.W1O)),2&i){const s=e.oxw(),l=e.MAs(4);e.Q6J("ngIf",s.enablePopover)("ngIfElse",l)}}function j(i,c){}function W(i,c){if(1&i){const s=e.EpF();e.TgZ(0,"nz-tag",12),e.NdJ("nzOnClose",function(y){e.CHM(s);const D=e.oxw();return e.KtG(D.itemClosed(y))}),e.YNc(1,j,0,0,"ng-template",6),e.qZA()}if(2&i){const s=e.oxw(),l=e.MAs(8);e.Q6J("nzMode",s.onCloseClicked?"closeable":"default")("ngClass",e.VKq(3,f,s.molecularProfile.deprecated)),e.xp6(1),e.Q6J("ngTemplateOutlet",l)}}function K(i,c){}function X(i,c){if(1&i&&e.YNc(0,K,0,0,"ng-template",6),2&i){e.oxw();const s=e.MAs(2);e.Q6J("ngTemplateOutlet",s)}}function H(i,c){if(1&i&&(e.ynx(0),e._uU(1),e.ALo(2,"truncate"),e.BQk()),2&i){const s=e.oxw(2);e.xp6(1),e.hij(" ",e.xi3(2,1,s.molecularProfile.name,s.truncationLength)," ")}}function k(i,c){if(1&i&&e._uU(0),2&i){const s=e.oxw(2);e.hij(" ",s.molecularProfile.name," ")}}function q(i,c){if(1&i&&(e._UZ(0,"i",13),e.YNc(1,H,3,4,"ng-container",0),e.YNc(2,k,1,1,"ng-template",null,14,e.W1O)),2&i){const s=e.MAs(3),l=e.oxw();e.Q6J("nzTwotoneColor",l.iconColor),e.xp6(1),e.Q6J("ngIf",l.truncateLongName)("ngIfElse",s)}}class x extends u.a{constructor(){super(),this.enablePopover=!0,this.truncateLongName=!1,this.truncationLength=20,this.iconColor=(0,g.f)("MolecularProfile")}idFunction(){return this.molecularProfile.id}ngOnInit(){if(super.ngOnInit(),void 0===this.molecularProfile)throw new Error("cvc-molecular-profile-tag requires LinkableMolecularProfile input, none supplied.");"number"==typeof this.truncateLongName&&(this.truncationLength=this.truncateLongName),"segments"in this.molecularProfile&&(this.molecularProfile.name=this.molecularProfile.segments.map(c=>"text"in c?c.text:c.name).join(" "))}}x.\u0275fac=function(c){return new(c||x)},x.\u0275cmp=e.Xpm({type:x,selectors:[["cvc-molecular-profile-tag"]],inputs:{molecularProfile:"molecularProfile",enablePopover:"enablePopover",truncateLongName:"truncateLongName"},features:[e.qOj],decls:9,vars:2,consts:[[4,"ngIf","ngIfElse"],["tag",""],["noPopover",""],["unlinked",""],["tagContent",""],[3,"routerLink"],[3,"ngTemplateOutlet"],["nz-popover","","nzPopoverTrigger","hover",3,"ngClass","nzPopoverMouseEnterDelay","nzPopoverContent","nzMode","nzOnClose",4,"ngIf","ngIfElse"],["popoverContent",""],["nz-popover","","nzPopoverTrigger","hover",3,"ngClass","nzPopoverMouseEnterDelay","nzPopoverContent","nzMode","nzOnClose"],[3,"molecularProfileId",4,"ngIf"],[3,"molecularProfileId"],[3,"nzMode","ngClass","nzOnClose"],["nz-icon","","nzType","civic-molecularprofile","nzTheme","twotone",3,"nzTwotoneColor"],["fullName",""]],template:function(c,s){if(1&c&&(e.YNc(0,U,3,2,"ng-container",0),e.YNc(1,v,3,2,"ng-template",null,1,e.W1O),e.YNc(3,W,2,5,"ng-template",null,2,e.W1O),e.YNc(5,X,1,1,"ng-template",null,3,e.W1O),e.YNc(7,q,4,3,"ng-template",null,4,e.W1O)),2&c){const l=e.MAs(6);e.Q6J("ngIf",s.linked)("ngIfElse",l)}},dependencies:[z.mk,z.O5,z.tP,m.rH,E.j,A.lU,_.Ls,t._,b.W],styles:["[_nghost-%COMP%]     nz-tag.rejected, [_nghost-%COMP%]     nz-tag.submitted, [_nghost-%COMP%]     nz-tag.accepted, [_nghost-%COMP%]     nz-tag.deprecated{border-right-width:2px}[_nghost-%COMP%]     nz-tag.rejected, [_nghost-%COMP%]     nz-tag.deprecated{border-color:#e6e6e6;background-color:#fff;color:#999999d9}[_nghost-%COMP%]     nz-tag.submitted{border-color:#ffe58f}[_nghost-%COMP%]     nz-tag.accepted{border-color:#b7eb8f}[_nghost-%COMP%]{display:inline-block}"],changeDetection:0})},4126:(et,P,a)=>{a.d(P,{u:()=>t});var u=a(6895),g=a(9116),e=a(6672),z=a(1102),m=a(6581),E=a(9444),A=a(4398),_=a(4650);class t{}t.\u0275fac=function(d){return new(d||t)},t.\u0275mod=_.oAB({type:t}),t.\u0275inj=_.cJS({imports:[u.ez,g.Bz,e.X,m.$6,z.PV,E.s,A._]})},8482:(et,P,a)=>{a.r(P),a.d(P,{VariantGroupsDetailModule:()=>V});var u=a(6895),g=a(9116),e=a(7579),z=a(1135),m=a(7630),E=a(8675),A=a(2722),_=a(6579),t=a(4650),b=a(9350),d=a(2635),U=a(1102),h=a(3679),f=a(5655),B=a(6616),$=a(7044),F=a(1664),v=a(6903),j=a(5623),W=a(8168),K=a(8992),X=a(9077),H=a(2233),k=a(759),q=a(160);const x=function(n){return["/variant-groups",n,"revise"]};function i(n,o){if(1&n&&(t.TgZ(0,"button",14,15),t._uU(2," Revise "),t.qZA()),2&n){const r=t.MAs(1),p=t.oxw(4).ngIf;t.Q6J("routerLink",t.VKq(2,x,p.id))("nzType",r.isActive?"primary":"default")}}function c(n,o){if(1&n&&(t.TgZ(0,"span"),t.YNc(1,i,3,4,"button",13),t.qZA()),2&n){const r=t.oxw().ngrxLet;t.xp6(1),t.Q6J("ngIf",r.signedIn)}}function s(n,o){if(1&n&&(t.TgZ(0,"button",17,15),t._uU(2," Flag "),t.qZA()),2&n){const r=t.MAs(1);t.Q6J("nzType",r.isActive?"primary":"default")}}function l(n,o){if(1&n&&(t.TgZ(0,"span"),t.YNc(1,s,3,1,"button",16),t.qZA()),2&n){const r=t.oxw().ngrxLet;t.xp6(1),t.Q6J("ngIf",r.signedIn)}}function y(n,o){if(1&n&&t._UZ(0,"cvc-entity-subscription-button",19),2&n){const r=t.oxw(2).ngrxLet,p=t.oxw(3);t.Q6J("viewer",r)("subscribableId",p.subscribable.id)}}function D(n,o){if(1&n&&(t.TgZ(0,"span"),t.YNc(1,y,1,2,"cvc-entity-subscription-button",18),t.qZA()),2&n){const r=t.oxw().ngrxLet,p=t.oxw(3);t.xp6(1),t.Q6J("ngIf",r.signedIn&&p.subscribable)}}function at(n,o){1&n&&(t.TgZ(0,"nz-space",11),t.YNc(1,c,2,1,"span",12),t.YNc(2,l,2,1,"span",12),t.YNc(3,D,2,1,"span",12),t.qZA())}function rt(n,o){if(1&n&&(t.TgZ(0,"nz-page-header-extra"),t.YNc(1,at,4,0,"nz-space",10),t.qZA()),2&n){const r=t.oxw(2);t.xp6(1),t.Q6J("ngrxLet",r.viewer$)}}function it(n,o){if(1&n&&(t.TgZ(0,"nz-col",20),t._UZ(1,"cvc-contributor-avatars",21),t.qZA()),2&n){const r=t.oxw(2);t.xp6(1),t.Q6J("subscribable",r.subscribable)}}function st(n,o){if(1&n&&(t.ynx(0),t._UZ(1,"cvc-section-navigation",1),t.TgZ(2,"div",2),t.ALo(3,"ngrxPush"),t.TgZ(4,"nz-page-header",3)(5,"nz-page-header-title",4),t._UZ(6,"i",5),t.ALo(7,"entityColor"),t._uU(8),t.qZA(),t.YNc(9,rt,2,1,"nz-page-header-extra",6),t.TgZ(10,"nz-page-header-content")(11,"cvc-tab-navigation",7),t.ALo(12,"ngrxPush"),t.YNc(13,it,2,1,"ng-template",null,8,t.W1O),t.qZA(),t.TgZ(15,"div",9),t._UZ(16,"router-outlet"),t.qZA()()()(),t.BQk()),2&n){const r=o.ngIf,p=t.oxw();t.xp6(1),t.Q6J("displayName",r.name),t.xp6(1),t.Q6J("flags",t.lcZ(3,6,p.flagsTotal$)),t.xp6(4),t.Q6J("nzTwotoneColor",t.lcZ(7,8,"VariantGroup")),t.xp6(2),t.hij(" ",r.name," "),t.xp6(1),t.Q6J("ngrxLet",p.viewer$),t.xp6(2),t.Q6J("tabs",t.lcZ(12,10,p.tabs$))}}class L{constructor(o,r,p){this.gql=o,this.viewerService=r,this.route=p,this.destroy$=new e.x,this.defaultTabs=[{routeName:"summary",iconName:"pic-left",tabLabel:"Summary"},{routeName:"comments",iconName:"civic-comment",tabLabel:"Comments"},{routeName:"revisions",iconName:"civic-revision",tabLabel:"Revisions"},{routeName:"flags",iconName:"civic-flag",tabLabel:"Flags"}],this.viewer$=this.viewerService.viewer$,this.tabs$=new z.X(this.defaultTabs),this.routeSub=this.route.params.subscribe(Q=>{let nt=this.gql.watch({variantGroupId:+Q.variantGroupId}).valueChanges;this.loading$=nt.pipe((0,_.j)("loading"),(0,E.O)(!0)),this.variantGroup$=nt.pipe((0,_.j)("data","variantGroup")),this.commentsTotal$=this.variantGroup$.pipe((0,_.j)("comments","totalCount")),this.flagsTotal$=this.variantGroup$.pipe((0,_.j)("flags","totalCount")),this.variantGroup$.pipe((0,_.j)("revisions","totalCount"),(0,A.R)(this.destroy$)).subscribe({next:R=>{this.tabs$.next(this.defaultTabs.map(Y=>"Revisions"===Y.tabLabel?{badgeCount:R,...Y}:Y))}}),this.subscribable={id:+Q.variantGroupId,entityType:m.o71.VariantGroup}})}ngOnInit(){}ngOnDestroy(){this.routeSub.unsubscribe(),this.destroy$.next(),this.destroy$.unsubscribe()}}L.\u0275fac=function(o){return new(o||L)(t.Y36(m.Qtd),t.Y36(b.a),t.Y36(g.gz))},L.\u0275cmp=t.Xpm({type:L,selectors:[["cvc-variant-groups-detail"]],decls:2,vars:3,consts:[[4,"ngIf"],[3,"displayName"],["cvcFlaggable","",3,"flags"],[1,"site-page-header"],["cvcFlaggableOptions",""],["nz-icon","","nzTheme","twotone","nzType","civic-variantgroup",3,"nzTwotoneColor"],[4,"ngrxLet"],[3,"tabs"],["tabBarExtraContent",""],[1,"content"],["nzDirection","horizontal","nzSize","small",4,"ngrxLet"],["nzDirection","horizontal","nzSize","small"],[4,"nzSpaceItem"],["routerLinkActive","","nz-button","","nzSize","small",3,"routerLink","nzType",4,"ngIf"],["routerLinkActive","","nz-button","","nzSize","small",3,"routerLink","nzType"],["rlaComments","routerLinkActive"],["routerLink","flags","routerLinkActive","","nz-button","","nzSize","small",3,"nzType",4,"ngIf"],["routerLink","flags","routerLinkActive","","nz-button","","nzSize","small",3,"nzType"],["typename","Variant",3,"viewer","subscribableId",4,"ngIf"],["typename","Variant",3,"viewer","subscribableId"],["id","contributors-col"],[3,"subscribable"]],template:function(o,r){1&o&&(t.YNc(0,st,17,12,"ng-container",0),t.ALo(1,"async")),2&o&&t.Q6J("ngIf",t.lcZ(1,1,r.variantGroup$))},dependencies:[u.O5,d.eJ,g.lC,g.rH,g.Od,U.Ls,h.t3,f.$O,f.u9,f.u5,f.Jp,B.ix,$.w,F.dQ,v.NU,v.$1,j.o,W.Y,K.I,X.Q,H.P,k.N,u.Ov,d.fM,q.a],styles:["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]     nz-page-header:first-of-type{background-color:#fff;border-radius:8px}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content{flex-wrap:nowrap;background-color:#f0f0f0;border-top-left-radius:8px;border-top-right-radius:8px;margin:-12px -16px 16px;border-bottom:1px solid #bfbfbf}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-icon{padding:12px 0 12px 12px}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-icon i{width:100%}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-icon i   svg{width:100%;height:100%}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-description{padding:12px}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-description h2{color:#262626;margin:-8px 0 0;font-weight:500}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-description p{color:#262626;margin:-2px 0 0;padding:0;font-size:95%;line-height:1.5em}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-links{text-align:right;padding:12px}[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card{width:100%}[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card .card-grid-cell{width:50%}[_nghost-%COMP%]     nz-page-header:first-of-type nz-page-header-title.flagged{padding-left:.75em}[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-content{padding-top:0;padding-bottom:12px}[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-heading-extra nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs{margin:0 -16px 12px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap{padding-left:16px;padding-right:16px;line-height:24px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab{padding:1px 8px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab .anticon{margin-right:0}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-extra-content{margin-right:16px}"]});var ct=a(2278);class C{}C.\u0275fac=function(o){return new(o||C)},C.\u0275mod=t.oAB({type:C}),C.\u0275inj=t.cJS({imports:[u.ez,ct.l]});var lt=a(3801);function pt(n,o){if(1&n&&t._UZ(0,"cvc-comment-list",1),2&n){const r=t.oxw();t.Q6J("commentable",r.commentable)}}class Z{constructor(o){this.route=o,this.routeSub=this.route.params.subscribe(r=>{this.commentable={entityType:m.OfU.VariantGroup,id:+r.variantGroupId}})}ngOnDestroy(){this.routeSub.unsubscribe()}}Z.\u0275fac=function(o){return new(o||Z)(t.Y36(g.gz))},Z.\u0275cmp=t.Xpm({type:Z,selectors:[["cvc-variant-groups-comments"]],decls:1,vars:1,consts:[[3,"commentable",4,"ngIf"],[3,"commentable"]],template:function(o,r){1&o&&t.YNc(0,pt,1,1,"cvc-comment-list",0),2&o&&t.Q6J("ngIf",r.commentable)},dependencies:[u.O5,lt.D],styles:["[_nghost-%COMP%]{display:block}"]});var ut=a(4271);class T{}T.\u0275fac=function(o){return new(o||T)},T.\u0275mod=t.oAB({type:T}),T.\u0275inj=t.cJS({imports:[u.ez,ut.M]});var gt=a(7036);function _t(n,o){if(1&n&&t._UZ(0,"cvc-flag-list-and-filter",1),2&n){const r=t.oxw();t.Q6J("flaggable",r.flaggable)}}class S{constructor(o){this.route=o,this.routeSub=this.route.params.subscribe(r=>{this.flaggable={entityType:m.sfv.VariantGroup,id:+r.variantGroupId}})}ngOnDestroy(){this.routeSub.unsubscribe()}}S.\u0275fac=function(o){return new(o||S)(t.Y36(g.gz))},S.\u0275cmp=t.Xpm({type:S,selectors:[["cvc-variant-groups-flags"]],decls:1,vars:1,consts:[[3,"flaggable",4,"ngIf"],[3,"flaggable"]],template:function(o,r){1&o&&t.YNc(0,_t,1,1,"cvc-flag-list-and-filter",0),2&o&&t.Q6J("ngIf",r.flaggable)},dependencies:[u.O5,gt.L],styles:["[_nghost-%COMP%]{display:block}"]});var mt=a(2914);class M{}M.\u0275fac=function(o){return new(o||M)},M.\u0275mod=t.oAB({type:M}),M.\u0275inj=t.cJS({imports:[u.ez,mt.A]});var dt=a(3770);class J{constructor(o){this.route=o,this.routeSub=this.route.params.subscribe(r=>{this.vgId=+r.variantGroupId,this.entityType=m.oRL.VariantGroup})}ngOnDestroy(){this.routeSub.unsubscribe()}}J.\u0275fac=function(o){return new(o||J)(t.Y36(g.gz))},J.\u0275cmp=t.Xpm({type:J,selectors:[["cvc-variant-groups-revisions"]],decls:1,vars:2,consts:[[3,"id","entityType"]],template:function(o,r){1&o&&t._UZ(0,"cvc-revisions-list-and-filter",0),2&o&&t.Q6J("id",r.vgId)("entityType",r.entityType)},dependencies:[dt.a],styles:["[_nghost-%COMP%]{display:block}"]});var tt=a(9194),ft=a(8541),vt=a(3855),ot=a(8823),zt=a(897),ht=a(2811);class O{}O.\u0275fac=function(o){return new(o||O)},O.\u0275mod=t.oAB({type:O}),O.\u0275inj=t.cJS({imports:[u.ez,d._N,d.pP,v.zf,h.Jb,tt.q6,ot.ZJ,ft.o,vt.H,zt.$,ht.s]});var xt=a(4004),yt=a(427),Pt=a(6274),bt=a(6715),Ct=a(783);function Tt(n,o){if(1&n&&(t.TgZ(0,"p",11),t._uU(1),t.qZA()),2&n){const r=t.oxw(3).ngIf;t.Q6J("nzEllipsisRows",14),t.xp6(1),t.hij(" ",r.description," ")}}function Mt(n,o){1&n&&t._UZ(0,"cvc-empty-revisable",12)}function Ot(n,o){if(1&n&&(t.TgZ(0,"nz-descriptions",7)(1,"nz-descriptions-item",8),t.YNc(2,Tt,2,2,"p",9),t.YNc(3,Mt,1,0,"ng-template",null,10,t.W1O),t.qZA()()),2&n){const r=t.MAs(4),p=t.oxw(2).ngIf;t.Q6J("nzColumn",1),t.xp6(2),t.Q6J("ngIf",p.description)("ngIfElse",r)}}function Gt(n,o){1&n&&t._UZ(0,"cvc-source-tag",17),2&n&&t.Q6J("source",o.$implicit)}function It(n,o){if(1&n&&(t.ynx(0),t.TgZ(1,"cvc-tag-list"),t.YNc(2,Gt,1,1,"cvc-source-tag",16),t.qZA(),t.BQk()),2&n){const r=t.oxw(3).ngIf;t.xp6(2),t.Q6J("ngForOf",r.sources)}}function Vt(n,o){1&n&&(t.TgZ(0,"span",18),t._uU(1,"None specified"),t.qZA())}function Et(n,o){if(1&n&&(t.TgZ(0,"nz-descriptions",7)(1,"nz-descriptions-item",13),t.YNc(2,It,3,1,"ng-container",14),t.YNc(3,Vt,2,0,"ng-template",null,15,t.W1O),t.qZA()()),2&n){const r=t.MAs(4),p=t.oxw(2).ngIf;t.Q6J("nzColumn",1),t.xp6(2),t.Q6J("ngIf",p.sources.length>0)("ngIfElse",r)}}function At(n,o){1&n&&(t.TgZ(0,"nz-row",3)(1,"nz-col",4)(2,"nz-space",5),t.YNc(3,Ot,5,3,"nz-descriptions",6),t.qZA()(),t.TgZ(4,"nz-col",4)(5,"nz-space",5),t.YNc(6,Et,5,3,"nz-descriptions",6),t.qZA()()()),2&n&&t.Q6J("nzGutter",16)}function Dt(n,o){if(1&n&&(t.ynx(0),t._UZ(1,"cvc-variants-table",21),t.BQk()),2&n){const r=o.ngrxLet;t.xp6(1),t.MGl("cvcTitle","Variants in Variant Groupt ",null==r?null:r.name,""),t.Q6J("variantGroupId",null==r?null:r.id)}}function Lt(n,o){if(1&n&&(t.TgZ(0,"nz-row",3)(1,"nz-col",19),t.YNc(2,Dt,2,2,"ng-container",20),t.qZA()()),2&n){const r=t.oxw(2);t.Q6J("nzGutter",16),t.xp6(1),t.Q6J("nzSpan",24),t.xp6(1),t.Q6J("ngrxLet",r.variantGroup$)}}function Zt(n,o){1&n&&(t.TgZ(0,"nz-space",1),t.YNc(1,At,7,1,"nz-row",2),t.YNc(2,Lt,3,3,"nz-row",2),t.qZA())}class N{constructor(o,r,p){this.gql=o,this.viewerService=r,this.route=p,this.routeSub=this.route.params.subscribe(Q=>{this.viewer$=this.viewerService.viewer$;let R=this.gql.watch({variantGroupId:+Q.variantGroupId}).valueChanges;this.subscribableEntity={id:+Q.variantGroupId,entityType:m.o71.VariantGroup},this.variantGroup$=R.pipe((0,_.j)("data","variantGroup")),this.loading$=R.pipe((0,_.j)("loading")),this.myVariantGroupInfo$=this.variantGroup$.pipe((0,_.j)("myVariantGroupInfoDetails"),(0,xt.U)(Y=>JSON.parse(String(Y))))})}ngOnDestroy(){this.routeSub.unsubscribe()}}N.\u0275fac=function(o){return new(o||N)(t.Y36(m.q1D),t.Y36(b.a),t.Y36(g.gz))},N.\u0275cmp=t.Xpm({type:N,selectors:[["cvc-variant-groups-summary"]],decls:2,vars:3,consts:[["nzSize","middle","nzDirection","vertical","class","space-align-block",4,"ngIf"],["nzSize","middle","nzDirection","vertical",1,"space-align-block"],[3,"nzGutter",4,"nzSpaceItem"],[3,"nzGutter"],["nzSpan","12"],["nzDirection","vertical"],["nzLayout","vertical","nzSize","small","nzBordered","true",3,"nzColumn",4,"nzSpaceItem"],["nzLayout","vertical","nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","Description"],["nz-typography","","nzEllipsis","","nzExpandable","",3,"nzEllipsisRows",4,"ngIf","ngIfElse"],["noDescription",""],["nz-typography","","nzEllipsis","","nzExpandable","",3,"nzEllipsisRows"],["notification","No description provided"],["nzTitle","Sources"],[4,"ngIf","ngIfElse"],["noSources",""],[3,"source",4,"ngFor","ngForOf"],[3,"source"],["nz-typography","","nzType","secondary"],[3,"nzSpan"],[4,"ngrxLet"],[3,"variantGroupId","cvcTitle"]],template:function(o,r){1&o&&(t.YNc(0,Zt,3,0,"nz-space",0),t.ALo(1,"ngrxPush")),2&o&&t.Q6J("ngIf",t.lcZ(1,1,r.variantGroup$))},dependencies:[u.sg,u.O5,d.eJ,v.NU,v.$1,h.t3,h.SK,tt.R7,tt.uj,ot.ZU,yt.J,Pt.S,bt.$,Ct.T,d.fM],styles:["[_nghost-%COMP%]{display:block}nz-space[_ngcontent-%COMP%], nz-space-item[_ngcontent-%COMP%]{width:100%}"]});var St=a(5291);class G{}G.\u0275fac=function(o){return new(o||G)},G.\u0275mod=t.oAB({type:G}),G.\u0275inj=t.cJS({imports:[u.ez,St.t]});var Jt=a(2011);class w{constructor(o){this.route=o,this.subscribable={id:+this.route.snapshot.params.variantGroupId,entityType:m.o71.VariantGroup}}}w.\u0275fac=function(o){return new(o||w)(t.Y36(g.gz))},w.\u0275cmp=t.Xpm({type:w,selectors:[["cvc-variant-groups-events"]],decls:1,vars:1,consts:[["tagDisplay","hideSubject",3,"subscribable"]],template:function(o,r){1&o&&t._UZ(0,"cvc-event-feed",0),2&o&&t.Q6J("subscribable",r.subscribable)},dependencies:[Jt.o],styles:["[_nghost-%COMP%]{display:block}"]});const Nt=[{path:"",component:L,data:{breadcrumb:"DISPLAYNAME"},children:[{path:"",redirectTo:"summary",pathMatch:"full"},{path:"summary",component:N,data:{breadcrumb:"Summary"}},{path:"comments",component:Z,data:{breadcrumb:"Comments"}},{path:"revisions",component:J,data:{breadcrumb:"Revisions"}},{path:"flags",component:S,data:{breadcrumb:"Flags"}},{path:"events",component:w,data:{breadcrumb:"Events"}}]}];class I{}I.\u0275fac=function(o){return new(o||I)},I.\u0275mod=t.oAB({type:I}),I.\u0275inj=t.cJS({imports:[g.Bz.forChild(Nt),O,C,M,T,G,g.Bz]});var wt=a(5630),Qt=a(4609),Yt=a(4682),Ut=a(8762),Bt=a(5750),Rt=a(9444);class V{}V.\u0275fac=function(o){return new(o||V)},V.\u0275mod=t.oAB({type:V}),V.\u0275inj=t.cJS({imports:[u.ez,d._N,d.pP,I,U.PV,h.Jb,f.KJ,B.sL,v.zf,Yt.m,Rt.s,wt.D,Qt.g,Ut.c,Bt.Z]})}}]);