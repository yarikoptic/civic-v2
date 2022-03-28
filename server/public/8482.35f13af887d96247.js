"use strict";(self.webpackChunkmain=self.webpackChunkmain||[]).push([[8482],{8482:(Qt,z,r)=>{r.r(z),r.d(z,{VariantGroupsDetailModule:()=>Nt});var o=r(9808),s=r(325),c=r(712),p=r(373),x=r(1059),t=r(5e3),h=r(9350),V=r(8992),T=r(5623),g=r(1945),Z=r(8168),S=r(2683),l=r(6949),u=r(8144),y=r(6042),I=r(2643),P=r(9077),A=r(2233),m=r(1894),M=r(759);const J=function(n){return["/variant-groups",n,"revise"]};function w(n,e){if(1&n&&(t.TgZ(0,"button",14,15),t._uU(2," Revise "),t.qZA()),2&n){const a=t.MAs(1),i=t.oxw(4).ngIf;t.Q6J("routerLink",t.VKq(2,J,i.id))("nzType",a.isActive?"primary":"default")}}function C(n,e){if(1&n&&(t.TgZ(0,"span"),t.YNc(1,w,3,4,"button",13),t.qZA()),2&n){const a=t.oxw().ngrxLet;t.xp6(1),t.Q6J("ngIf",a.signedIn)}}function O(n,e){if(1&n&&(t.TgZ(0,"button",17,15),t._uU(2," Flag "),t.qZA()),2&n){const a=t.MAs(1);t.Q6J("nzType",a.isActive?"primary":"default")}}function N(n,e){if(1&n&&(t.TgZ(0,"span"),t.YNc(1,O,3,1,"button",16),t.qZA()),2&n){const a=t.oxw().ngrxLet;t.xp6(1),t.Q6J("ngIf",a.signedIn)}}function D(n,e){if(1&n&&t._UZ(0,"cvc-entity-subscription-button",19),2&n){const a=t.oxw(2).ngrxLet,i=t.oxw(3);t.Q6J("viewer",a)("subscribableId",i.subscribable.id)}}function Q(n,e){if(1&n&&(t.TgZ(0,"span"),t.YNc(1,D,1,2,"cvc-entity-subscription-button",18),t.qZA()),2&n){const a=t.oxw().ngrxLet,i=t.oxw(3);t.xp6(1),t.Q6J("ngIf",a.signedIn&&i.subscribable)}}function Y(n,e){1&n&&(t.TgZ(0,"nz-space",11),t.YNc(1,C,2,1,"span",12),t.YNc(2,N,2,1,"span",12),t.YNc(3,Q,2,1,"span",12),t.qZA())}function L(n,e){if(1&n&&(t.TgZ(0,"nz-page-header-extra"),t.YNc(1,Y,4,0,"nz-space",10),t.qZA()),2&n){const a=t.oxw(2);t.xp6(1),t.Q6J("ngrxLet",a.viewer$)}}function F(n,e){if(1&n&&(t.TgZ(0,"nz-col",20),t._UZ(1,"cvc-contributor-avatars",21),t.qZA()),2&n){const a=t.oxw(2);t.xp6(1),t.Q6J("subscribable",a.subscribable)}}function $(n,e){if(1&n&&(t.ynx(0),t._UZ(1,"cvc-section-navigation",1),t.TgZ(2,"div",2),t.ALo(3,"ngrxPush"),t.TgZ(4,"nz-page-header",3),t.TgZ(5,"nz-page-header-title",4),t._UZ(6,"i",5),t._uU(7),t.qZA(),t.YNc(8,L,2,1,"nz-page-header-extra",6),t.TgZ(9,"nz-page-header-content"),t.TgZ(10,"cvc-tab-navigation",7),t.YNc(11,F,2,1,"ng-template",null,8,t.W1O),t.qZA(),t.TgZ(13,"div",9),t._UZ(14,"router-outlet"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.BQk()),2&n){const a=e.ngIf,i=t.oxw();t.xp6(1),t.Q6J("displayName",a.name),t.xp6(1),t.Q6J("flags",t.lcZ(3,5,i.flagsTotal$)),t.xp6(5),t.hij(" ",a.name," "),t.xp6(1),t.Q6J("ngrxLet",i.viewer$),t.xp6(2),t.Q6J("tabs",i.tabs)}}let E=(()=>{class n{constructor(a,i,_){this.gql=a,this.viewerService=i,this.route=_,this.viewer$=this.viewerService.viewer$,this.routeSub=this.route.params.subscribe(d=>{let f=this.gql.watch({variantGroupId:+d.variantGroupId}).valueChanges;this.loading$=f.pipe((0,p.j)("loading"),(0,x.O)(!0)),this.variantGroup$=f.pipe((0,p.j)("data","variantGroup")),this.commentsTotal$=this.variantGroup$.pipe((0,p.j)("comments","totalCount")),this.flagsTotal$=this.variantGroup$.pipe((0,p.j)("flags","totalCount")),this.revisionsTotal$=this.variantGroup$.pipe((0,p.j)("revisions","totalCount")),this.subscribable={id:+d.variantGroupId,entityType:c.o71.VariantGroup}}),this.tabs=[{routeName:"summary",iconName:"pic-left",tabLabel:"Summary"},{routeName:"comments",iconName:"civic-comment",tabLabel:"Comments"},{routeName:"revisions",iconName:"civic-revision",tabLabel:"Revisions"},{routeName:"flags",iconName:"civic-flag",tabLabel:"Flags"}]}ngOnInit(){}}return n.\u0275fac=function(a){return new(a||n)(t.Y36(c.Qtd),t.Y36(h.a),t.Y36(s.gz))},n.\u0275cmp=t.Xpm({type:n,selectors:[["cvc-variant-groups-detail"]],decls:2,vars:3,consts:[[4,"ngIf"],[3,"displayName"],["cvcFlaggable","",3,"flags"],[1,"site-page-header"],["cvcFlaggableOptions",""],["nz-icon","","nzType","civic:variantgroup"],[4,"ngrxLet"],[3,"tabs"],["tabBarExtraContent",""],[1,"content"],["nzDirection","horizontal","nzSize","small",4,"ngrxLet"],["nzDirection","horizontal","nzSize","small"],[4,"nzSpaceItem"],["routerLinkActive","","nz-button","","nzSize","small",3,"routerLink","nzType",4,"ngIf"],["routerLinkActive","","nz-button","","nzSize","small",3,"routerLink","nzType"],["rlaComments","routerLinkActive"],["routerLink","flags","routerLinkActive","","nz-button","","nzSize","small",3,"nzType",4,"ngIf"],["routerLink","flags","routerLinkActive","","nz-button","","nzSize","small",3,"nzType"],["typename","Variant",3,"viewer","subscribableId",4,"ngIf"],["typename","Variant",3,"viewer","subscribableId"],["id","contributors-col"],[3,"subscribable"]],template:function(a,i){1&a&&(t.YNc(0,$,15,7,"ng-container",0),t.ALo(1,"async")),2&a&&t.Q6J("ngIf",t.lcZ(1,1,i.variantGroup$))},directives:[o.O5,V.I,T.o,g.$O,g.u9,Z.Y,S.w,l.eJ,g.Jp,u.NU,u.$1,y.ix,I.dQ,s.Od,s.rH,P.Q,g.u5,A.P,m.t3,M.N,s.lC],pipes:[o.Ov,l.fM],styles:["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]     nz-page-header:first-of-type{background-color:#fff;border-radius:8px}[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card{width:100%}[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card .card-grid-cell{width:50%}[_nghost-%COMP%]     nz-page-header:first-of-type nz-page-header-title.flagged{padding-left:.75em}[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-content{padding-top:0}[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-heading-extra nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs{margin:0 -16px 12px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap{padding-left:16px;padding-right:16px;line-height:24px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab{padding:1px 8px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab .anticon{margin-right:0}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-extra-content{margin-right:16px}"]}),n})();var U=r(2278);let R=(()=>{class n{}return n.\u0275fac=function(a){return new(a||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[o.ez,U.l]]}),n})();var j=r(3801);function B(n,e){if(1&n&&t._UZ(0,"cvc-comment-list",1),2&n){const a=t.oxw();t.Q6J("commentable",a.commentable)}}let W=(()=>{class n{constructor(a){this.route=a,this.routeSub=this.route.params.subscribe(i=>{this.commentable={entityType:c.OfU.VariantGroup,id:+i.variantGroupId}})}ngOnDestroy(){this.routeSub.unsubscribe()}}return n.\u0275fac=function(a){return new(a||n)(t.Y36(s.gz))},n.\u0275cmp=t.Xpm({type:n,selectors:[["cvc-variant-groups-comments"]],decls:1,vars:1,consts:[[3,"commentable",4,"ngIf"],[3,"commentable"]],template:function(a,i){1&a&&t.YNc(0,B,1,1,"cvc-comment-list",0),2&a&&t.Q6J("ngIf",i.commentable)},directives:[o.O5,j.D],styles:["[_nghost-%COMP%]{display:block}"]}),n})();var X=r(4271);let K=(()=>{class n{}return n.\u0275fac=function(a){return new(a||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[o.ez,X.M]]}),n})();var H=r(7036);function q(n,e){if(1&n&&t._UZ(0,"cvc-flag-list-and-filter",1),2&n){const a=t.oxw();t.Q6J("flaggable",a.flaggable)}}let k=(()=>{class n{constructor(a){this.route=a,this.routeSub=this.route.params.subscribe(i=>{this.flaggable={entityType:c.sfv.VariantGroup,id:+i.variantGroupId}})}ngOnDestroy(){this.routeSub.unsubscribe()}}return n.\u0275fac=function(a){return new(a||n)(t.Y36(s.gz))},n.\u0275cmp=t.Xpm({type:n,selectors:[["cvc-variant-groups-flags"]],decls:1,vars:1,consts:[[3,"flaggable",4,"ngIf"],[3,"flaggable"]],template:function(a,i){1&a&&t.YNc(0,q,1,1,"cvc-flag-list-and-filter",0),2&a&&t.Q6J("ngIf",i.flaggable)},directives:[o.O5,H.L],styles:["[_nghost-%COMP%]{display:block}"]}),n})();var tt=r(2914);let nt=(()=>{class n{}return n.\u0275fac=function(a){return new(a||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[o.ez,tt.A]]}),n})();var at=r(8291);let et=(()=>{class n{constructor(a){this.route=a,this.routeSub=this.route.params.subscribe(i=>{this.vgId=+i.variantGroupId,this.entityType=c.oRL.VariantGroup})}ngOnDestroy(){this.routeSub.unsubscribe()}}return n.\u0275fac=function(a){return new(a||n)(t.Y36(s.gz))},n.\u0275cmp=t.Xpm({type:n,selectors:[["cvc-variant-groups-revisions"]],decls:1,vars:2,consts:[[3,"id","entityType"]],template:function(a,i){1&a&&t._UZ(0,"cvc-revisions-list-and-filter",0),2&a&&t.Q6J("id",i.vgId)("entityType",i.entityType)},directives:[at.a],styles:["[_nghost-%COMP%]{display:block}"]}),n})();var v=r(3098),rt=r(8541),it=r(3855),b=r(3618),ot=r(897),st=r(9779);let ct=(()=>{class n{}return n.\u0275fac=function(a){return new(a||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[o.ez,l.WG,u.zf,m.Jb,v.q6,b.ZJ,rt.o,it.H,ot.$,st.s]]}),n})();var pt=r(4850),lt=r(427),ut=r(6715),gt=r(6906),mt=r(6274);function dt(n,e){if(1&n&&(t.TgZ(0,"p",11),t._uU(1),t.qZA()),2&n){const a=t.oxw(3).ngIf;t.Q6J("nzEllipsisRows",14),t.xp6(1),t.Oqu(a.description)}}function vt(n,e){1&n&&t._UZ(0,"cvc-empty-revisable",12)}function _t(n,e){if(1&n&&(t.TgZ(0,"nz-descriptions",7),t.TgZ(1,"nz-descriptions-item",8),t.YNc(2,dt,2,2,"p",9),t.YNc(3,vt,1,0,"ng-template",null,10,t.W1O),t.qZA(),t.qZA()),2&n){const a=t.MAs(4),i=t.oxw(2).ngIf;t.Q6J("nzColumn",1),t.xp6(2),t.Q6J("ngIf",i.description)("ngIfElse",a)}}function ft(n,e){1&n&&t._UZ(0,"cvc-source-tag",17),2&n&&t.Q6J("source",e.$implicit)}function zt(n,e){if(1&n&&(t.ynx(0),t.TgZ(1,"cvc-tag-list"),t.YNc(2,ft,1,1,"cvc-source-tag",16),t.qZA(),t.BQk()),2&n){const a=t.oxw(3).ngIf;t.xp6(2),t.Q6J("ngForOf",a.sources)}}function ht(n,e){1&n&&(t.TgZ(0,"span",18),t._uU(1,"None specified"),t.qZA())}function yt(n,e){if(1&n&&(t.TgZ(0,"nz-descriptions",7),t.TgZ(1,"nz-descriptions-item",13),t.YNc(2,zt,3,1,"ng-container",14),t.YNc(3,ht,2,0,"ng-template",null,15,t.W1O),t.qZA(),t.qZA()),2&n){const a=t.MAs(4),i=t.oxw(2).ngIf;t.Q6J("nzColumn",1),t.xp6(2),t.Q6J("ngIf",i.sources.length>0)("ngIfElse",a)}}function bt(n,e){1&n&&(t.TgZ(0,"nz-row",3),t.TgZ(1,"nz-col",4),t.TgZ(2,"nz-space",5),t.YNc(3,_t,5,3,"nz-descriptions",6),t.qZA(),t.qZA(),t.TgZ(4,"nz-col",4),t.TgZ(5,"nz-space",5),t.YNc(6,yt,5,3,"nz-descriptions",6),t.qZA(),t.qZA(),t.qZA()),2&n&&t.Q6J("nzGutter",16)}function Gt(n,e){if(1&n&&(t.ynx(0),t._UZ(1,"cvc-variants-table",21),t.BQk()),2&n){const a=e.ngrxLet;t.xp6(1),t.Q6J("variantGroupId",null==a?null:a.id)}}function xt(n,e){if(1&n&&(t.TgZ(0,"nz-row",3),t.TgZ(1,"nz-col",19),t.YNc(2,Gt,2,1,"ng-container",20),t.qZA(),t.qZA()),2&n){const a=t.oxw(2);t.Q6J("nzGutter",16),t.xp6(1),t.Q6J("nzSpan",24),t.xp6(1),t.Q6J("ngrxLet",a.variantGroup$)}}function Vt(n,e){1&n&&(t.TgZ(0,"nz-space",1),t.YNc(1,bt,7,1,"nz-row",2),t.YNc(2,xt,3,3,"nz-row",2),t.qZA())}let Tt=(()=>{class n{constructor(a,i,_){this.gql=a,this.viewerService=i,this.route=_,this.routeSub=this.route.params.subscribe(d=>{this.viewer$=this.viewerService.viewer$;let G=this.gql.watch({variantGroupId:+d.variantGroupId}).valueChanges;this.subscribableEntity={id:+d.variantGroupId,entityType:c.o71.VariantGroup},this.variantGroup$=G.pipe((0,p.j)("data","variantGroup")),this.loading$=G.pipe((0,p.j)("loading")),this.myVariantGroupInfo$=this.variantGroup$.pipe((0,p.j)("myVariantGroupInfoDetails"),(0,pt.U)(Dt=>JSON.parse(String(Dt))))})}ngOnDestroy(){this.routeSub.unsubscribe()}}return n.\u0275fac=function(a){return new(a||n)(t.Y36(c.q1D),t.Y36(h.a),t.Y36(s.gz))},n.\u0275cmp=t.Xpm({type:n,selectors:[["cvc-variant-groups-summary"]],decls:2,vars:3,consts:[["nzSize","middle","nzDirection","vertical","class","space-align-block",4,"ngIf"],["nzSize","middle","nzDirection","vertical",1,"space-align-block"],[3,"nzGutter",4,"nzSpaceItem"],[3,"nzGutter"],["nzSpan","12"],["nzDirection","vertical"],["nzLayout","vertical","nzSize","small","nzBordered","true",3,"nzColumn",4,"nzSpaceItem"],["nzLayout","vertical","nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","Description"],["nz-typography","","nzEllipsis","","nzExpandable","",3,"nzEllipsisRows",4,"ngIf","ngIfElse"],["noDescription",""],["nz-typography","","nzEllipsis","","nzExpandable","",3,"nzEllipsisRows"],["notification","No description provided"],["nzTitle","Sources"],[4,"ngIf","ngIfElse"],["noSources",""],[3,"source",4,"ngFor","ngForOf"],[3,"source"],["nz-typography","","nzType","secondary"],[3,"nzSpan"],[4,"ngrxLet"],[3,"variantGroupId"]],template:function(a,i){1&a&&(t.YNc(0,Vt,3,0,"nz-space",0),t.ALo(1,"ngrxPush")),2&a&&t.Q6J("ngIf",t.lcZ(1,1,i.variantGroup$))},directives:[o.O5,u.NU,u.$1,m.SK,m.t3,v.R7,v.uj,b.ZU,lt.J,ut.$,o.sg,gt.T,l.eJ,mt.S],pipes:[l.fM],styles:["[_nghost-%COMP%]{display:block}nz-space[_ngcontent-%COMP%], nz-space-item[_ngcontent-%COMP%]{width:100%}"]}),n})();var Zt=r(4292);let St=(()=>{class n{}return n.\u0275fac=function(a){return new(a||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[o.ez,Zt.t]]}),n})();var It=r(2011);const Pt=[{path:"",component:E,data:{breadcrumb:"DISPLAYNAME"},children:[{path:"",redirectTo:"summary",pathMatch:"full"},{path:"summary",component:Tt,data:{breadcrumb:"Summary"}},{path:"comments",component:W,data:{breadcrumb:"Comments"}},{path:"revisions",component:et,data:{breadcrumb:"Revisions"}},{path:"flags",component:k,data:{breadcrumb:"Flags"}},{path:"events",component:(()=>{class n{constructor(a){this.route=a,this.subscribable={id:+this.route.snapshot.params.variantGroupId,entityType:c.o71.VariantGroup}}}return n.\u0275fac=function(a){return new(a||n)(t.Y36(s.gz))},n.\u0275cmp=t.Xpm({type:n,selectors:[["cvc-variant-groups-events"]],decls:1,vars:1,consts:[["tagDisplay","hideSubject",3,"subscribable"]],template:function(a,i){1&a&&t._UZ(0,"cvc-event-feed",0),2&a&&t.Q6J("subscribable",i.subscribable)},directives:[It.o],styles:["[_nghost-%COMP%]{display:block}"]}),n})(),data:{breadcrumb:"Events"}}]}];let At=(()=>{class n{}return n.\u0275fac=function(a){return new(a||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[s.Bz.forChild(Pt),ct,R,nt,K,St],s.Bz]}),n})();var Mt=r(5630),Jt=r(4609),wt=r(4682),Ct=r(8762),Ot=r(5750);let Nt=(()=>{class n{}return n.\u0275fac=function(a){return new(a||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[o.ez,l.WG,At,m.Jb,g.KJ,y.sL,u.zf,wt.m,Mt.D,Jt.g,Ct.c,Ot.Z]]}),n})()}}]);