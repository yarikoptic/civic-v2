(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{evuO:function(e,n,t){"use strict";t.r(n),t.d(n,"EvidenceDetailModule",function(){return yn});var i=t("ofXK"),c=t("9A8T"),s=t("hFUy"),a=t("4xsP"),r=t("eHCX"),o=t("8h9q"),b=t("Ze44"),l=t("jPNr"),u=t("OzZK"),d=t("ZyQt"),g=t("tyNb"),p=t("J31z"),f=t("cNUt"),z=t("FwiY"),v=t("l/kO"),m=t("wO+i"),h=t("JX91"),T=t("fXoL"),y=t("lnp5"),C=t("Omhx"),I=t("sMOw"),U=t("S0Et"),E=t("ifvR"),S=t("Qdkw"),P=t("C2AL"),w=t("B+r4"),O=t("oyxB"),M=t("vm1A");function k(e,n){if(1&e&&(T.Ub(0,"nz-col",8),T.Pb(1,"cvc-contributor-avatars",9),T.Tb()),2&e){const e=T.ec();T.Cb(1),T.lc("subscribable",e.entity)}}function R(e,n){1&e&&(T.Ub(0,"a",10),T.Pb(1,"i",11),T.Gc(2," Summary "),T.Tb())}function L(e,n){1&e&&(T.Ub(0,"a",12),T.Pb(1,"i",13),T.Gc(2," Comments "),T.Tb())}function x(e,n){1&e&&(T.Ub(0,"a",14),T.Pb(1,"i",15),T.Gc(2," Revisions "),T.Tb())}function F(e,n){1&e&&(T.Ub(0,"a",16),T.Pb(1,"i",17),T.Gc(2," Flags "),T.Tb())}let j=(()=>{class e{constructor(e){this.router=e,this.tabs=["summary","comments","revisions","flags"],this.selectedTabIndex=this.getActivatedRouteIndex(this.router.url)}getActivatedRouteIndex(e){return this.tabs.findIndex(n=>e.includes(n))}ngOnInit(){}}return e.\u0275fac=function(n){return new(n||e)(T.Ob(g.d))},e.\u0275cmp=T.Ib({type:e,selectors:[["cvc-details-navigation"]],inputs:{entity:"entity"},decls:13,vars:2,consts:[["id","section-tabs"],["nzSpan","24"],["nzType","card","nzSize","small",3,"nzSelectedIndex","nzTabBarExtraContent"],["actionsContributorsTpl",""],["nz-tab-link","","routerLink","summary",4,"nzTabLink"],["nz-tab-link","","routerLink","comments",4,"nzTabLink"],["nz-tab-link","","routerLink","revisions",4,"nzTabLink"],["nz-tab-link","","routerLink","flags",4,"nzTabLink"],["id","contributors-col"],[3,"subscribable"],["nz-tab-link","","routerLink","summary"],["nz-icon","","nzType","pic-left"],["nz-tab-link","","routerLink","comments"],["nz-icon","","nzType","civic-comment"],["nz-tab-link","","routerLink","revisions"],["nz-icon","","nzType","civic-revision"],["nz-tab-link","","routerLink","flags"],["nz-icon","","nzType","civic-flag"]],template:function(e,n){if(1&e&&(T.Ub(0,"nz-row",0),T.Ub(1,"nz-col",1),T.Ub(2,"nz-tabset",2),T.Ec(3,k,2,1,"ng-template",null,3,T.Fc),T.Ub(5,"nz-tab"),T.Ec(6,R,3,0,"a",4),T.Tb(),T.Ub(7,"nz-tab"),T.Ec(8,L,3,0,"a",5),T.Tb(),T.Ub(9,"nz-tab"),T.Ec(10,x,3,0,"a",6),T.Tb(),T.Ub(11,"nz-tab"),T.Ec(12,F,3,0,"a",7),T.Tb(),T.Tb(),T.Tb(),T.Tb()),2&e){const e=T.uc(4);T.Cb(2),T.lc("nzSelectedIndex",n.selectedTabIndex)("nzTabBarExtraContent",e)}},directives:[w.c,w.a,O.d,O.a,O.c,M.a,O.b,g.g],styles:["[_nghost-%COMP%]{display:block}"]}),e})();var A=t("RwU8"),G=t("rTZz"),B=t("V2Tk"),D=t("Wfee"),$=t("C9qP");function q(e,n){if(1&e&&(T.Ub(0,"nz-space",5),T.Ub(1,"nz-space-item"),T.Ub(2,"span",6),T.Ub(3,"strong"),T.Gc(4),T.Tb(),T.Gc(5," Parents:"),T.Tb(),T.Tb(),T.Ub(6,"nz-space-item",7),T.Ub(7,"a",8),T.Pb(8,"cvc-gene-tag",9),T.Tb(),T.Ub(9,"a",8),T.Pb(10,"cvc-variant-tag",10),T.Tb(),T.Tb(),T.Tb()),2&e){const e=T.ec().ngIf;T.Cb(4),T.Hc(e.name),T.Cb(3),T.nc("routerLink","/genes/",e.gene.id,""),T.Cb(1),T.lc("gene",e.gene),T.Cb(1),T.nc("routerLink","/variants/",e.variant.id,""),T.Cb(1),T.lc("variant",e.variant)}}function _(e,n){1&e&&(T.Ub(0,"nz-tag",27),T.Gc(1,"Flagged"),T.Tb()),2&e&&T.lc("nzColor","red")}const N=function(e){return["/evidence",e,"revise"]};function J(e,n){if(1&e&&(T.Ub(0,"button",28,29),T.Gc(2," Revise "),T.Tb()),2&e){const e=T.uc(1),n=T.ec(2).ngIf;T.lc("routerLink",T.qc(2,N,n.id))("nzType",e.isActive?"primary":"default")}}function V(e,n){if(1&e&&(T.Ub(0,"button",30,29),T.Gc(2," Flag "),T.Tb()),2&e){const e=T.uc(1);T.lc("nzType",e.isActive?"primary":"default")}}function H(e,n){if(1&e&&T.Pb(0,"cvc-entity-subscription-button",31),2&e){const e=T.ec().ngrxLet,n=T.ec(2);T.lc("viewer",e)("subscribableId",n.subscribable.id)}}function Z(e,n){if(1&e){const e=T.Vb();T.Ub(0,"cvc-revert-entity-button",32),T.bc("onReverted",function(n){return T.vc(e),T.ec(3).onRevertCompleted(n)}),T.Tb()}if(2&e){const e=T.ec().ngrxLet,n=T.ec().ngIf;T.lc("viewer",e)("entityId",n.id)}}function Q(e,n){if(1&e){const e=T.Vb();T.Ub(0,"nz-alert",33),T.bc("nzOnClose",function(){T.vc(e);const t=n.$implicit;return T.ec(3).onErrorBannerClose(t)}),T.Tb()}2&e&&T.lc("nzMessage",n.$implicit)}function X(e,n){if(1&e){const e=T.Vb();T.Ub(0,"nz-alert",34),T.bc("nzOnClose",function(){return T.vc(e),T.ec(3).onSuccessBannerClose()}),T.Tb()}if(2&e){const e=T.ec(3);T.lc("nzMessage",e.successMessage)}}function Y(e,n){1&e&&T.Pb(0,"nz-alert",35)}function K(e,n){if(1&e){const e=T.Vb();T.Ub(0,"cvc-moderate-entity-buttons",36),T.bc("onModerated",function(n){return T.vc(e),T.ec(3).onModerateCompleted(n)}),T.Tb()}if(2&e){const e=T.ec().ngrxLet,n=T.ec().ngIf;T.lc("entityId",n.id)("viewer",e)}}const W=function(e){return{flagged:e}};function ee(e,n){if(1&e&&(T.Ub(0,"nz-page-header",11),T.Ub(1,"nz-page-header-title",12),T.Pb(2,"i",13),T.Gc(3),T.Tb(),T.Ub(4,"nz-page-header-tags"),T.Ec(5,_,2,1,"nz-tag",14),T.Tb(),T.Ub(6,"nz-page-header-extra"),T.Ub(7,"nz-space",15),T.Ub(8,"nz-space-item"),T.Ec(9,J,3,4,"button",16),T.Tb(),T.Ub(10,"nz-space-item"),T.Ec(11,V,3,1,"button",17),T.Tb(),T.Ub(12,"nz-space-item"),T.Ec(13,H,1,2,"cvc-entity-subscription-button",18),T.Tb(),T.Ub(14,"nz-space-item"),T.Ec(15,Z,1,2,"cvc-revert-entity-button",19),T.Tb(),T.Tb(),T.Tb(),T.Ub(16,"nz-page-header-content"),T.Ec(17,Q,1,1,"nz-alert",20),T.Ec(18,X,1,1,"nz-alert",21),T.Ec(19,Y,1,0,"nz-alert",22),T.Pb(20,"cvc-details-navigation",23),T.Ub(21,"nz-space",24),T.Ub(22,"nz-space-item"),T.Ec(23,K,1,2,"cvc-moderate-entity-buttons",25),T.Tb(),T.Tb(),T.Ub(24,"div",26),T.Pb(25,"router-outlet"),T.Tb(),T.Tb(),T.Tb()),2&e){const e=n.ngrxLet,t=T.ec().ngIf,i=T.ec();T.Cb(1),T.lc("ngClass",T.qc(12,W,t.flags.totalCount>0)),T.Cb(2),T.Ic(" ",t.name," "),T.Cb(2),T.lc("ngIf",!1),T.Cb(4),T.lc("ngIf",e.signedIn),T.Cb(2),T.lc("ngIf",e.signedIn),T.Cb(2),T.lc("ngIf",e.signedIn&&i.subscribable),T.Cb(2),T.lc("ngIf",e.canModerate&&"SUBMITTED"!=t.status),T.Cb(2),T.lc("ngForOf",i.errors),T.Cb(1),T.lc("ngIf",i.successMessage),T.Cb(1),T.lc("ngIf","SUBMITTED"==t.status),T.Cb(1),T.lc("entity",i.subscribable),T.Cb(3),T.lc("ngIf",e.canModerate&&"SUBMITTED"==t.status)}}function ne(e,n){if(1&e&&(T.Sb(0),T.Pb(1,"cvc-section-navigation",1),T.Ec(2,q,11,5,"ng-template",null,2,T.Fc),T.Ub(4,"div",3),T.fc(5,"ngrxPush"),T.Ec(6,ee,26,14,"nz-page-header",4),T.Tb(),T.Rb()),2&e){const e=n.ngIf,t=T.uc(3),i=T.ec();T.Cb(1),T.lc("displayName",e.name)("relationsTpl",t),T.Cb(3),T.lc("flags",T.gc(5,4,i.flagsTotal$)),T.Cb(2),T.lc("ngrxLet",i.viewer$)}}let te=(()=>{class e{constructor(e,n,t){this.gql=e,this.viewerService=n,this.route=t,this.errors=[],this.routeSub=this.route.params.subscribe(e=>{this.queryRef=this.gql.watch({evidenceId:+e.evidenceId});let n=this.queryRef.valueChanges;this.loading$=n.pipe(Object(m.a)("loading"),Object(h.a)(!0)),this.evidence$=n.pipe(Object(m.a)("data","evidenceItem")),this.commentsTotal$=this.evidence$.pipe(Object(m.a)("comments","totalCount")),this.flagsTotal$=this.evidence$.pipe(Object(m.a)("flags","totalCount")),this.revisionsTotal$=this.evidence$.pipe(Object(m.a)("revisions","totalCount")),this.subscribable={id:+e.evidenceId,entityType:v.Rb.EvidenceItem},this.viewer$=this.viewerService.viewer$})}ngOnDestroy(){this.routeSub.unsubscribe()}onRevertCompleted(e){var n;!0===e?(this.errors=[],this.successMessage="Evidence Item reverted to submitted status.",null===(n=this.queryRef)||void 0===n||n.refetch()):(this.errors=e,this.successMessage=void 0)}onModerateCompleted(e){var n;Array.isArray(e)?(this.errors=e,this.successMessage=void 0):(this.errors=[],this.successMessage=`Evidence successfully ${e}.`,null===(n=this.queryRef)||void 0===n||n.refetch())}onErrorBannerClose(e){var n;this.errors=null===(n=this.errors)||void 0===n?void 0:n.filter(n=>n!=e)}onSuccessBannerClose(){this.successMessage=void 0}}return e.\u0275fac=function(n){return new(n||e)(T.Ob(v.Q),T.Ob(y.a),T.Ob(g.a))},e.\u0275cmp=T.Ib({type:e,selectors:[["evidence-detail"]],decls:2,vars:3,consts:[[4,"ngIf"],[3,"displayName","relationsTpl"],["evidenceRelations",""],["cvcFlaggable","",3,"flags"],["class","site-page-header",4,"ngrxLet"],["nzDirection","horizontal"],["nz-typography","",1,"label"],[1,"tags"],[3,"routerLink"],[3,"gene"],[3,"variant"],[1,"site-page-header"],["cvcFlaggableOptions","",3,"ngClass"],["nz-icon","","nzType","civic:evidence"],[3,"nzColor",4,"ngIf"],["nzDirection","horizontal","nzSize","small"],["routerLinkActive","","nz-button","","nzSize","small",3,"routerLink","nzType",4,"ngIf"],["routerLink","flags","routerLinkActive","","nz-button","","nzSize","small",3,"nzType",4,"ngIf"],["typename","EvidenceItem",3,"viewer","subscribableId",4,"ngIf"],["entityType","EvidenceItem",3,"viewer","entityId","onReverted",4,"ngIf"],["nzBanner","","nzType","error","nzCloseable","",3,"nzMessage","nzOnClose",4,"ngFor","ngForOf"],["nzBanner","","nzType","success","nzCloseable","",3,"nzMessage","nzOnClose",4,"ngIf"],["nzBanner","","nzMessage","This Evidence Item is in a 'submitted' state and has not yet been reviewed by an editor.","nzType","warning",4,"ngIf"],[3,"entity"],["nzDirection","vertical"],["entityType","EvidenceItem",3,"entityId","viewer","onModerated",4,"ngIf"],[1,"content"],[3,"nzColor"],["routerLinkActive","","nz-button","","nzSize","small",3,"routerLink","nzType"],["rlaComments","routerLinkActive"],["routerLink","flags","routerLinkActive","","nz-button","","nzSize","small",3,"nzType"],["typename","EvidenceItem",3,"viewer","subscribableId"],["entityType","EvidenceItem",3,"viewer","entityId","onReverted"],["nzBanner","","nzType","error","nzCloseable","",3,"nzMessage","nzOnClose"],["nzBanner","","nzType","success","nzCloseable","",3,"nzMessage","nzOnClose"],["nzBanner","","nzMessage","This Evidence Item is in a 'submitted' state and has not yet been reviewed by an editor.","nzType","warning"],["entityType","EvidenceItem",3,"entityId","viewer","onModerated"]],template:function(e,n){1&e&&(T.Ec(0,ne,7,6,"ng-container",0),T.fc(1,"ngrxPush")),2&e&&T.lc("ngIf",T.gc(1,1,n.evidence$))},directives:[i.q,C.a,I.a,c.a,a.a,a.b,r.a,g.g,U.a,E.a,l.a,l.g,S.a,i.o,P.a,z.b,l.f,l.c,l.b,i.p,j,g.i,d.a,u.a,A.a,g.f,g.e,G.a,B.a,D.a,$.a],pipes:[c.b],styles:["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]     nz-page-header:first-of-type{background-color:#fff;border-radius:8px}[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card{width:100%}[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card .card-grid-cell{width:50%}[_nghost-%COMP%]     nz-page-header:first-of-type nz-page-header-title.flagged{padding-left:.75em}[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-content{padding-top:0}[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-heading-extra nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs{margin:0 -16px 12px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap{padding-left:16px;padding-right:16px;line-height:24px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab{padding:1px 8px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab .anticon{margin-right:0}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-extra-content{margin-right:16px}"]}),e})();var ie=t("aFVg");let ce=(()=>{class e{}return e.\u0275mod=T.Mb({type:e}),e.\u0275inj=T.Lb({factory:function(n){return new(n||e)},imports:[[i.c,ie.a]]}),e})();var se=t("NCHN");let ae=(()=>{class e{constructor(e){this.route=e,this.commentable={id:+this.route.snapshot.params.evidenceId,entityType:v.w.EvidenceItem}}}return e.\u0275fac=function(n){return new(n||e)(T.Ob(g.a))},e.\u0275cmp=T.Ib({type:e,selectors:[["cvc-evidence-comments"]],decls:1,vars:1,consts:[[3,"commentable"]],template:function(e,n){1&e&&T.Pb(0,"cvc-comment-list",0),2&e&&T.lc("commentable",n.commentable)},directives:[se.a],styles:["[_nghost-%COMP%]{display:block}"]}),e})();var re=t("JA5x"),oe=t("OtHt"),be=t("VrgM");let le=(()=>{class e{}return e.\u0275mod=T.Mb({type:e}),e.\u0275inj=T.Lb({factory:function(n){return new(n||e)},imports:[[i.c,w.b,re.c,a.c,oe.b,be.a]]}),e})();var ue=t("SJ3B");let de=(()=>{class e{constructor(e){this.route=e,this.flaggable={entityType:v.db.EvidenceItem,id:+this.route.snapshot.params.evidenceId}}}return e.\u0275fac=function(n){return new(n||e)(T.Ob(g.a))},e.\u0275cmp=T.Ib({type:e,selectors:[["cvc-evidence-flags"]],decls:1,vars:1,consts:[[3,"flaggable"]],template:function(e,n){1&e&&T.Pb(0,"cvc-flag-list-and-filter",0),2&e&&T.lc("flaggable",n.flaggable)},directives:[ue.a],styles:["[_nghost-%COMP%]{display:block}"]}),e})();var ge=t("zgtv");let pe=(()=>{class e{}return e.\u0275mod=T.Mb({type:e}),e.\u0275inj=T.Lb({factory:function(n){return new(n||e)},imports:[[i.c,ge.a]]}),e})();var fe=t("I3fy");let ze=(()=>{class e{constructor(e){this.route=e,this.routeSub=this.route.params.subscribe(e=>{this.eid=+e.evidenceId,this.entityType=v.mb.EvidenceItem})}ngOnDestroy(){this.routeSub.unsubscribe()}}return e.\u0275fac=function(n){return new(n||e)(T.Ob(g.a))},e.\u0275cmp=T.Ib({type:e,selectors:[["cvc-evidence-revisions"]],decls:1,vars:2,consts:[[3,"id","entityType"]],template:function(e,n){1&e&&T.Pb(0,"cvc-revisions-list-and-filter",0),2&e&&T.lc("id",n.eid)("entityType",n.entityType)},directives:[fe.a],styles:[""]}),e})();var ve=t("xB20"),me=t("cqX/"),he=t("jEMj"),Te=t("1JjV"),ye=t("Sou9"),Ce=t("bluq"),Ie=t("4ykH"),Ue=t("h0k8"),Ee=t("e5/R"),Se=t("IpA2"),Pe=t("B2Tj"),we=t("5WKN"),Oe=t("iNrY"),Me=t("g4Zv");let ke=(()=>{class e{}return e.\u0275mod=T.Mb({type:e}),e.\u0275inj=T.Lb({factory:function(n){return new(n||e)},imports:[[i.c,g.h,c.c,w.b,a.c,r.b,u.c,d.b,z.c,ve.c,me.a,he.a,Me.a,Te.a,Oe.a,ye.a,Ce.a,we.a,Ie.a,Ue.a,Ee.a,Se.a,Pe.a]]}),e})();function Re(e,n){1&e&&T.Pb(0,"i",4)}function Le(e,n){1&e&&T.Pb(0,"i",5)}function xe(e,n){if(1&e&&(T.Sb(0),T.Ec(1,Re,1,0,"i",2),T.Ec(2,Le,1,0,"i",3),T.Rb()),2&e){const e=T.ec();T.Cb(1),T.lc("ngForOf",e.filledStars),T.Cb(1),T.lc("ngForOf",e.emptyStars)}}function Fe(e,n){1&e&&T.Gc(0," --\n")}let je=(()=>{class e{constructor(){this.filledStars=[],this.emptyStars=[]}ngOnInit(){this.starRating&&(this.filledStars=Array(this.starRating),this.emptyStars=Array(5-this.starRating))}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=T.Ib({type:e,selectors:[["cvc-evidence-rating"]],inputs:{starRating:"starRating"},decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["noStars",""],["nzType","star","nzTheme","fill","nz-icon","",4,"ngFor","ngForOf"],["nzType","star","nzTheme","outline","nz-icon","",4,"ngFor","ngForOf"],["nzType","star","nzTheme","fill","nz-icon",""],["nzType","star","nzTheme","outline","nz-icon",""]],template:function(e,n){if(1&e&&(T.Ec(0,xe,3,2,"ng-container",0),T.Ec(1,Fe,1,0,"ng-template",null,1,T.Fc)),2&e){const e=T.uc(2);T.lc("ngIf",n.starRating)("ngIfElse",e)}},directives:[i.q,i.p,z.b],styles:[""]}),e})();var Ae=t("8E5y"),Ge=t("UPlJ"),Be=t("2a8A"),De=t("ktE2"),$e=t("nJ+V"),qe=t("zI+k"),_e=t("qO8z"),Ne=t("/ZnJ"),Je=t("Eb1f"),Ve=t("p+8w"),He=t("an+6"),Ze=t("N9dV");function Qe(e,n){if(1&e&&(T.Ub(0,"nz-descriptions-item",40),T.Pb(1,"cvc-user-tag",19),T.Tb()),2&e){const e=T.ec(2).ngIf;T.Cb(1),T.lc("user",e.acceptanceEvent.originatingUser)}}function Xe(e,n){if(1&e&&(T.Ub(0,"nz-descriptions-item",41),T.Pb(1,"cvc-user-tag",19),T.Tb()),2&e){const e=T.ec(2).ngIf;T.Cb(1),T.lc("user",e.rejectionEvent.originatingUser)}}function Ye(e,n){if(1&e&&(T.Sb(0),T.Sb(1,37),T.Ec(2,Qe,2,1,"nz-descriptions-item",38),T.Ec(3,Xe,2,1,"nz-descriptions-item",39),T.Rb(),T.Rb()),2&e){const e=T.ec().ngIf;T.Cb(1),T.lc("ngSwitch",null===e.rejectionEvent),T.Cb(1),T.lc("ngSwitchCase",!0),T.Cb(1),T.lc("ngSwitchCase",!1)}}function Ke(e,n){if(1&e&&(T.Sb(0),T.Pb(1,"cvc-clinical-trial-tag",43),T.Rb()),2&e){const e=n.$implicit;T.Cb(1),T.lc("clinicalTrial",e)}}function We(e,n){if(1&e&&(T.Sb(0),T.Ec(1,Ke,2,1,"ng-container",42),T.Rb()),2&e){const e=T.ec().ngIf;T.Cb(1),T.lc("ngForOf",e.source.clinicalTrials)}}function en(e,n){1&e&&(T.Sb(0),T.Ub(1,"span",44),T.Gc(2,"None Specified"),T.Tb(),T.Rb())}function nn(e,n){if(1&e&&(T.Sb(0),T.Ub(1,"a",45),T.Pb(2,"cvc-disease-tag",46),T.Tb(),T.Rb()),2&e){const e=T.ec().ngIf;T.Cb(1),T.nc("routerLink","/diseases/",e.disease.id,""),T.Cb(1),T.lc("disease",e.disease)}}function tn(e,n){1&e&&(T.Ub(0,"span",44),T.Gc(1,"N/A"),T.Tb())}function cn(e,n){if(1&e&&(T.Sb(0),T.Pb(1,"cvc-phenotype-tag",47),T.Rb()),2&e){const e=n.$implicit;T.Cb(1),T.lc("phenotype",e)}}function sn(e,n){if(1&e&&(T.Sb(0),T.Ub(1,"cvc-tag-list"),T.Ec(2,cn,2,1,"ng-container",42),T.Tb(),T.Rb()),2&e){const e=T.ec().ngIf;T.Cb(2),T.lc("ngForOf",e.phenotypes)}}function an(e,n){1&e&&(T.Ub(0,"span",44),T.Gc(1,"None Specified"),T.Tb())}function rn(e,n){1&e&&(T.Ub(0,"span",44),T.Gc(1,"N/A"),T.Tb())}function on(e,n){if(1&e&&(T.Sb(0),T.Pb(1,"cvc-drug-tag",48),T.Rb()),2&e){const e=n.$implicit;T.Cb(1),T.lc("drug",e)}}function bn(e,n){if(1&e&&(T.Ub(0,"cvc-tag-list"),T.Ec(1,on,2,1,"ng-container",42),T.Tb()),2&e){const e=T.ec().ngIf;T.Cb(1),T.lc("ngForOf",e.drugs)}}function ln(e,n){1&e&&T.Gc(0," Drug ")}function un(e,n){1&e&&T.Gc(0," Drug ")}function dn(e,n){if(1&e&&(T.Gc(0),T.fc(1,"titlecase")),2&e){const e=T.ec(2).ngIf;T.Ic(" Drugs (",T.gc(1,1,e.drugInteractionType),") ")}}function gn(e,n){if(1&e&&(T.Sb(0,29),T.Ec(1,ln,1,0,"ng-template",30),T.Ec(2,un,1,0,"ng-template",49),T.Ec(3,dn,2,3,"ng-template",31),T.Rb()),2&e){const e=T.ec().ngIf;T.lc("ngPlural",e.drugs.length)}}function pn(e,n){if(1&e&&(T.Pb(0,"i",50),T.Gc(1)),2&e){const e=T.ec().ngIf;T.Cb(1),T.Ic(" ",e.name," Assertions ")}}function fn(e,n){if(1&e&&(T.Ub(0,"nz-space",1),T.Ub(1,"nz-space-item"),T.Ub(2,"nz-row",2),T.Ub(3,"nz-col",3),T.Ub(4,"nz-space",4),T.Ub(5,"nz-space-item"),T.Ub(6,"nz-descriptions",5),T.Ub(7,"nz-descriptions-item",6),T.Ub(8,"p",7),T.Gc(9),T.Tb(),T.Tb(),T.Tb(),T.Tb(),T.Ub(10,"nz-space-item"),T.Ub(11,"nz-descriptions",8),T.Ub(12,"nz-descriptions-item",9),T.Gc(13),T.fc(14,"evidenceEnumDisplay"),T.Tb(),T.Ub(15,"nz-descriptions-item",10),T.Gc(16),T.fc(17,"evidenceEnumDisplay"),T.Tb(),T.Ub(18,"nz-descriptions-item",11),T.Gc(19),T.fc(20,"evidenceEnumDisplay"),T.Tb(),T.Ub(21,"nz-descriptions-item",12),T.Gc(22),T.Tb(),T.Ub(23,"nz-descriptions-item",13),T.Pb(24,"cvc-evidence-rating",14),T.Tb(),T.Tb(),T.Tb(),T.Tb(),T.Tb(),T.Ub(25,"nz-col",3),T.Ub(26,"nz-space",4),T.Ub(27,"nz-space-item"),T.Ub(28,"nz-descriptions",15),T.Ub(29,"nz-descriptions-item",16),T.Pb(30,"cvc-status-tag",17),T.Tb(),T.Ub(31,"nz-descriptions-item",18),T.Pb(32,"cvc-user-tag",19),T.Tb(),T.Ec(33,Ye,4,3,"ng-container",20),T.Tb(),T.Tb(),T.Ub(34,"nz-space-item"),T.Ub(35,"nz-descriptions",8),T.Ub(36,"nz-descriptions-item",21),T.Pb(37,"cvc-source-tag",22),T.Tb(),T.Ub(38,"nz-descriptions-item",23),T.Ec(39,We,2,1,"ng-container",20),T.Ec(40,en,3,0,"ng-container",20),T.Tb(),T.Tb(),T.Tb(),T.Ub(41,"nz-space-item"),T.Ub(42,"nz-descriptions",24),T.Ub(43,"nz-descriptions-item",25),T.Ec(44,nn,3,2,"ng-container",20),T.Ec(45,tn,2,0,"span",26),T.Tb(),T.Ub(46,"nz-descriptions-item",23),T.Ec(47,sn,3,1,"ng-container",27),T.Ec(48,an,2,0,"ng-template",null,28,T.Fc),T.Tb(),T.Tb(),T.Tb(),T.Ub(50,"nz-space-item"),T.Ub(51,"nz-descriptions",5),T.Ub(52,"nz-descriptions-item",23),T.Sb(53,29),T.Ec(54,rn,2,0,"ng-template",30),T.Ec(55,bn,2,1,"ng-template",31),T.Rb(),T.Ec(56,gn,4,1,"ng-template",null,32,T.Fc),T.Tb(),T.Tb(),T.Tb(),T.Tb(),T.Tb(),T.Tb(),T.Tb(),T.Ub(58,"nz-space-item"),T.Ub(59,"nz-row"),T.Ub(60,"nz-col",3),T.Pb(61,"cvc-event-feed",33),T.Tb(),T.Tb(),T.Tb(),T.Ub(62,"nz-space-item"),T.Ub(63,"cvc-entity-table-card",34),T.Pb(64,"cvc-assertions-table",35),T.Tb(),T.Ec(65,pn,2,1,"ng-template",null,36,T.Fc),T.Tb(),T.Tb()),2&e){const e=n.ngIf,t=T.uc(49),i=T.uc(57),c=T.uc(66),s=T.ec();T.Cb(2),T.lc("nzGutter",16),T.Cb(1),T.lc("nzSpan",12),T.Cb(5),T.lc("nzEllipsisRows",14),T.Cb(1),T.Hc(e.description),T.Cb(2),T.lc("nzColumn",2),T.Cb(2),T.Ic(" ",T.gc(14,31,e.evidenceType)," "),T.Cb(3),T.Ic(" ",T.gc(17,33,e.evidenceDirection)," "),T.Cb(3),T.Ic(" ",T.gc(20,35,e.clinicalSignificance)," "),T.Cb(3),T.Ic(" ",e.evidenceLevel," "),T.Cb(2),T.lc("starRating",e.evidenceRating),T.Cb(1),T.lc("nzSpan",12),T.Cb(5),T.lc("status",e.status),T.Cb(2),T.lc("user",e.submissionEvent.originatingUser),T.Cb(1),T.lc("ngIf",null!==e.rejectionEvent||null!==e.acceptanceEvent),T.Cb(2),T.lc("nzColumn",1),T.Cb(2),T.lc("source",e.source),T.Cb(1),T.lc("nzTitle",e.source.clinicalTrials.length>1?"Clinical Trials":"Clinical Trial"),T.Cb(1),T.lc("ngIf",e.source.clinicalTrials.length>0),T.Cb(1),T.lc("ngIf",0===e.source.clinicalTrials.length),T.Cb(2),T.lc("nzColumn",void 0!==e.disease.name&&e.phenotypes.length>0?1:2),T.Cb(2),T.lc("ngIf",e.disease.name),T.Cb(1),T.lc("ngIf",!e.disease.name),T.Cb(1),T.lc("nzTitle",e.phenotypes.length>1?"Phenotypes":"Phenotype"),T.Cb(1),T.lc("ngIf",e.phenotypes.length>0)("ngIfElse",t),T.Cb(5),T.lc("nzTitle",i),T.Cb(1),T.lc("ngPlural",e.drugs.length),T.Cb(7),T.lc("nzSpan",24),T.Cb(1),T.lc("subscribable",s.subscribable),T.Cb(2),T.lc("cvcTitle",c),T.Cb(1),T.lc("evidenceId",e.id)}}const zn=[{path:"",component:te,data:{breadcrumb:"DISPLAYNAME"},children:[{path:"",redirectTo:"summary",pathMatch:"full"},{path:"summary",component:(()=>{class e{constructor(e,n){var t;if(this.gql=e,this.route=n,null==(t=this.evidenceId?this.evidenceId:+this.route.snapshot.params.evidenceId))throw new Error("Must pass in an evidence ID as an input or via the route.");this.queryRef=this.gql.watch({evidenceId:t});let i=this.queryRef.valueChanges;this.loading$=i.pipe(Object(m.a)("loading"),Object(h.a)(!0)),this.evidence$=i.pipe(Object(m.a)("data","evidenceItem")),this.subscribable={entityType:v.Rb.EvidenceItem,id:t}}}return e.\u0275fac=function(n){return new(n||e)(T.Ob(v.Y),T.Ob(g.a))},e.\u0275cmp=T.Ib({type:e,selectors:[["cvc-evidence-summary"]],inputs:{evidenceId:"evidenceId"},decls:2,vars:3,consts:[["nzSize","middle","nzDirection","vertical","class","space-align-block",4,"ngIf"],["nzSize","middle","nzDirection","vertical",1,"space-align-block"],[3,"nzGutter"],[3,"nzSpan"],["nzDirection","vertical"],["nzLayout","vertical","nzSize","small","nzBordered","true"],["nzTitle","Description"],["nz-typography","","nzEllipsis","","nzExpandable","",3,"nzEllipsisRows"],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","Type"],["nzTitle","Direction"],["nzTitle","Clinical Significance","nzSpan","2"],["nzTitle","Level"],["nzTitle","Rating"],[3,"starRating"],["nzLayout","horizontal","nzSize","small","nzBordered","true",1,"status-tags"],["nzTitle","Status"],[3,"status"],["nzTitle","Submitted"],[3,"user"],[4,"ngIf"],["nzTitle","Source","nzSpan","2"],[3,"source"],[3,"nzTitle"],["nzLayout","vertical","nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","Disease"],["nz-typography","","nzType","secondary",4,"ngIf"],[4,"ngIf","ngIfElse"],["noPhenotypes",""],[3,"ngPlural"],["ngPluralCase","=0"],["ngPluralCase","other"],["drugsTitle",""],["tagDisplay","hideSubject",3,"subscribable"],[3,"cvcTitle"],[3,"evidenceId"],["assertionsCardTitle",""],[3,"ngSwitch"],["nzTitle","Accepted",4,"ngSwitchCase"],["nzTitle","Rejected",4,"ngSwitchCase"],["nzTitle","Accepted"],["nzTitle","Rejected"],[4,"ngFor","ngForOf"],[3,"clinicalTrial"],["nz-typography","","nzType","secondary"],[3,"routerLink"],[3,"disease"],[3,"phenotype"],[3,"drug"],["ngPluralCase","=1"],["nz-icon","","nzType","civic:assertion"]],template:function(e,n){1&e&&(T.Ec(0,fn,67,37,"nz-space",0),T.fc(1,"ngrxPush")),2&e&&T.lc("ngIf",T.gc(1,1,n.evidence$))},directives:[i.q,a.a,a.b,w.c,w.a,ve.a,ve.b,r.a,je,Ae.a,Ge.a,Be.a,i.r,i.s,De.a,$e.a,qe.a,i.u,i.v,i.p,_e.a,g.g,Ne.a,Je.a,Ve.a,He.a,P.a,z.b],pipes:[c.b,Ze.a,i.B],styles:[":[_nghost-%COMP%]{display:block}nz-space[_ngcontent-%COMP%], nz-space-item[_ngcontent-%COMP%]{width:100%}.status-tags[_ngcontent-%COMP%]     nz-tag{margin-right:0}.status-tags[_ngcontent-%COMP%]     .ant-descriptions-item-label{white-space:nowrap}"]}),e})(),data:{breadcrumb:"Summary"}},{path:"comments",component:ae,data:{breadcrumb:"Comments"}},{path:"revisions",component:ze,data:{breadcrumb:"Revisions"}},{path:"flags",component:de,data:{breadcrumb:"Flags"}}]}];let vn=(()=>{class e{}return e.\u0275mod=T.Mb({type:e}),e.\u0275inj=T.Lb({factory:function(n){return new(n||e)},imports:[[g.h.forChild(zn),ke,ce,pe,le],g.h]}),e})();var mn=t("jLYH"),hn=t("fHx3"),Tn=t("1QTQ");let yn=(()=>{class e{}return e.\u0275mod=T.Mb({type:e}),e.\u0275inj=T.Lb({factory:function(n){return new(n||e)},imports:[[i.c,vn,g.h,c.c,a.c,r.b,l.d,u.c,d.b,z.c,D.b,w.b,s.a,o.a,b.a,p.a,f.a,mn.a,hn.a,Tn.a]]}),e})()}}]);