"use strict";(self.webpackChunkmain=self.webpackChunkmain||[]).push([[9793],{9793:(Z,_,n)=>{n.r(_),n.d(_,{EvidenceReviseModule:()=>v});var c=n(6895),N=n(9386),P=n(5630),w=n(9444),O=n(4623),d=n(2635),u=n(3679),I=n(4126),k=n(1102),g=n(5655),p=n(6903),T=n(8823),m=n(9116),D=n(8675),b=n(4004),h=n(6579),e=n(4650),R=n(7630),B=n(9350),L=n(5105),A=n(8992),o=n(8616),s=n(160);function t(a,i){if(1&a&&(e.TgZ(0,"span",12)(1,"strong"),e._uU(2),e.qZA(),e._uU(3," Parents:"),e.qZA()),2&a){const l=e.oxw(2).ngIf;e.xp6(2),e.Oqu(l.name)}}function r(a,i){if(1&a&&(e.TgZ(0,"span",13),e._UZ(1,"cvc-molecular-profile-tag",14),e.qZA()),2&a){const l=e.oxw(2).ngIf;e.xp6(1),e.Q6J("molecularProfile",l.molecularProfile)("enablePopover",!1)}}function S(a,i){1&a&&(e.TgZ(0,"nz-space",9),e.YNc(1,t,4,1,"span",10),e.YNc(2,r,2,2,"span",11),e.qZA())}function F(a,i){1&a&&(e.TgZ(0,"div"),e._UZ(1,"router-outlet"),e.qZA())}function U(a,i){1&a&&(e.TgZ(0,"nz-row",15)(1,"div",16),e._UZ(2,"cvc-login-prompt"),e.qZA()())}function $(a,i){if(1&a&&(e.ynx(0),e._UZ(1,"cvc-section-navigation",1),e.YNc(2,S,3,0,"ng-template",null,2,e.W1O),e.TgZ(4,"nz-page-header",3)(5,"nz-page-header-title",4),e._uU(6," REVISE "),e._UZ(7,"i",5),e.ALo(8,"entityColor"),e._uU(9),e.qZA(),e.TgZ(10,"nz-page-header-content")(11,"div",6),e.YNc(12,F,2,0,"div",7),e.ALo(13,"ngrxPush"),e.YNc(14,U,3,0,"ng-template",null,8,e.W1O),e.qZA()()(),e.BQk()),2&a){const l=i.ngIf,x=e.MAs(3),M=e.MAs(15),E=e.oxw();e.xp6(1),e.Q6J("displayName",l.name)("relationsTpl",x),e.xp6(6),e.Q6J("nzTwotoneColor",e.lcZ(8,6,"EvidenceItem")),e.xp6(2),e.hij(" ",l.name," "),e.xp6(3),e.Q6J("ngIf",e.lcZ(13,8,E.isSignedIn$))("ngIfElse",M)}}class C{constructor(i,l,x){this.gql=i,this.route=l,this.viewerService=x,this.routeSub=this.route.params.subscribe(M=>{let E=this.gql.watch({evidenceId:+M.evidenceId}).valueChanges;this.loading$=E.pipe((0,h.j)("loading"),(0,D.O)(!0)),this.evidence$=E.pipe((0,h.j)("data","evidenceItem")),this.commentsTotal$=this.evidence$.pipe((0,h.j)("comments","totalCount")),this.flagsTotal$=this.evidence$.pipe((0,h.j)("flags","totalCount")),this.revisionsTotal$=this.evidence$.pipe((0,h.j)("revisions","totalCount"))})}ngOnInit(){this.isSignedIn$=this.viewerService.viewer$.pipe((0,b.U)(i=>i.signedIn))}ngOnDestroy(){this.routeSub.unsubscribe()}}C.\u0275fac=function(i){return new(i||C)(e.Y36(R.pHu),e.Y36(m.gz),e.Y36(B.a))},C.\u0275cmp=e.Xpm({type:C,selectors:[["cvc-evidence-revise"]],decls:2,vars:3,consts:[[4,"ngIf"],[3,"displayName","relationsTpl"],["evidenceRelations",""],[1,"site-page-header"],["cvcFlaggableOptions",""],["nz-icon","","nzTheme","twotone","nzType","civic-evidence",3,"nzTwotoneColor"],[1,"content"],[4,"ngIf","ngIfElse"],["notSignedIn",""],["nzDirection","horizontal"],["nz-typography","","class","label",4,"nzSpaceItem"],["class","tags",4,"nzSpaceItem"],["nz-typography","",1,"label"],[1,"tags"],[3,"molecularProfile","enablePopover"],["nzSpan","24","nzJustify","center"],["nz-col","","nzSpan","6"]],template:function(i,l){1&i&&(e.YNc(0,$,16,10,"ng-container",0),e.ALo(1,"async")),2&i&&e.Q6J("ngIf",e.lcZ(1,1,l.evidence$))},dependencies:[c.O5,m.lC,g.$O,g.u9,g.u5,p.NU,p.$1,u.t3,u.SK,k.Ls,T.ZU,L.p,A.I,o.u,c.Ov,d.fM,s.a],styles:["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]     nz-page-header:first-of-type{background-color:#fff;border-radius:8px}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content{flex-wrap:nowrap;background-color:#f0f0f0;border-top-left-radius:8px;border-top-right-radius:8px;margin:-12px -16px 16px;border-bottom:1px solid #bfbfbf}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-icon{padding:12px 0 12px 12px}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-icon i{width:100%}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-icon i   svg{width:100%;height:100%}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-description{padding:12px}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-description h2{color:#262626;margin:-8px 0 0;font-weight:500}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-description p{color:#262626;margin:-2px 0 0;padding:0;font-size:95%;line-height:1.5em}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-links{text-align:right;padding:12px}[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card{width:100%}[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card .card-grid-cell{width:50%}[_nghost-%COMP%]     nz-page-header:first-of-type nz-page-header-title.flagged{padding-left:.75em}[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-content{padding-top:0;padding-bottom:12px}[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-heading-extra nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs{margin:0 -16px 12px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap{padding-left:16px;padding-right:16px;line-height:24px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab{padding:1px 8px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab .anticon{margin-right:0}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-extra-content{margin-right:16px}"]});var j=n(1971),J=n(545),V=n(9780);class z{}z.\u0275fac=function(i){return new(i||z)},z.\u0275mod=e.oAB({type:z}),z.\u0275inj=e.cJS({imports:[c.ez,d._N,d.pP,u.Jb,j.vh,J.H0,p.zf,V.A]});var Y=n(9201);function Q(a,i){if(1&a&&(e.ynx(0),e._UZ(1,"cvc-evidence-revise-form",2),e.BQk()),2&a){const l=e.oxw();e.xp6(1),e.Q6J("evidenceId",l.evidenceId)}}function W(a,i){1&a&&e._uU(0,"Loading Evidence...")}class y{constructor(i){this.route=i,this.routeParams$=this.route.params.subscribe(l=>{this.evidenceId=+l.evidenceId})}ngOnDestroy(){this.routeParams$.unsubscribe()}}y.\u0275fac=function(i){return new(i||y)(e.Y36(m.gz))},y.\u0275cmp=e.Xpm({type:y,selectors:[["cvc-evidence-suggest"]],decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["loadingEvidence",""],[3,"evidenceId"]],template:function(i,l){if(1&i&&(e.YNc(0,Q,2,1,"ng-container",0),e.YNc(1,W,1,0,"ng-template",null,1,e.W1O)),2&i){const x=e.MAs(2);e.Q6J("ngIf",l.evidenceId)("ngIfElse",x)}},dependencies:[c.O5,Y.r],encapsulation:2});const K=[{path:"",component:C,data:{breadcrumb:"Revise"},children:[{path:"",redirectTo:"suggest",pathMatch:"full"},{path:"suggest",component:y,data:{breadcrumb:"Suggest Revision"}}]}];class f{}f.\u0275fac=function(i){return new(i||f)},f.\u0275mod=e.oAB({type:f}),f.\u0275inj=e.cJS({imports:[m.Bz.forChild(K),z,m.Bz]});class v{}v.\u0275fac=function(i){return new(i||v)},v.\u0275mod=e.oAB({type:v}),v.\u0275inj=e.cJS({imports:[c.ez,d._N,d.pP,f,g.KJ,p.zf,u.Jb,k.PV,T.ZJ,p.zf,I.u,w.s,P.D,O.K,N.a]})},545:(Z,_,n)=>{n.d(_,{H0:()=>A});var c=n(4650),N=n(6895),P=n(445);let A=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=c.oAB({type:o}),o.\u0275inj=c.cJS({imports:[P.vT,N.ez]}),o})()}}]);