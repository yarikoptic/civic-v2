"use strict";(self.webpackChunkmain=self.webpackChunkmain||[]).push([[5286],{209:(L,y,n)=>{n.d(y,{i:()=>z});var c=n(6895),o=n(9116),e=n(6672),h=n(6581),g=n(1102),u=n(1971),P=n(3679),m=n(9194),t=n(8845),T=n(3973),M=n(2635),C=n(6903),_=n(9444),S=n(2811),U=n(592),E=n(8823),N=n(2190),Q=n(4126),B=n(701),I=n(4650);class p{}p.\u0275fac=function(A){return new(A||p)},p.\u0275mod=I.oAB({type:p}),p.\u0275inj=I.cJS({imports:[c.ez,o.Bz,M._N,M.pP,g.PV,u.vh,P.Jb,m.q6,e.X,C.zf,E.ZJ,_.s,B.N,t.Q,T.y,S.s,U.x,Q.u,N.r]});var v=n(48),d=n(6429);class z{}z.\u0275fac=function(A){return new(A||z)},z.\u0275mod=I.oAB({type:z}),z.\u0275inj=I.cJS({imports:[c.ez,o.Bz,v.mS,e.X,h.$6,g.PV,p,_.s,d.C]})},5105:(L,y,n)=>{n.d(y,{p:()=>A});var c=n(6654),o=n(9771),e=n(4650),h=n(6895),g=n(9116),u=n(6672),P=n(6581),m=n(1102),t=n(3314),T=n(4557);function M(i,f){}function C(i,f){if(1&i&&(e.ynx(0),e.TgZ(1,"a",5),e.YNc(2,M,0,0,"ng-template",6),e.qZA(),e.BQk()),2&i){const s=e.oxw(),x=e.MAs(2);e.xp6(1),e.Q6J("routerLink",s.molecularProfile.link),e.xp6(1),e.Q6J("ngTemplateOutlet",x)}}function _(i,f){}const S=function(i){return{deprecated:i}};function U(i,f){if(1&i){const s=e.EpF();e.TgZ(0,"nz-tag",9),e.NdJ("nzOnClose",function(b){e.CHM(s);const F=e.oxw(2);return e.KtG(F.itemClosed(b))}),e.YNc(1,_,0,0,"ng-template",6),e.qZA()}if(2&i){e.oxw();const s=e.MAs(2),x=e.oxw(),b=e.MAs(8);e.Q6J("ngClass",e.VKq(5,S,x.molecularProfile.deprecated))("nzPopoverMouseEnterDelay",x.onCloseClicked?0:.5)("nzPopoverContent",s)("nzMode",x.onCloseClicked?"closeable":"default"),e.xp6(1),e.Q6J("ngTemplateOutlet",b)}}function E(i,f){if(1&i&&e._UZ(0,"cvc-molecular-profile-popover",11),2&i){const s=e.oxw(3);e.Q6J("molecularProfileId",s.molecularProfile.id)}}function N(i,f){if(1&i&&e.YNc(0,E,1,1,"cvc-molecular-profile-popover",10),2&i){const s=e.oxw(2);e.Q6J("ngIf",s.enablePopover)}}function Q(i,f){if(1&i&&(e.YNc(0,U,2,7,"nz-tag",7),e.YNc(1,N,1,1,"ng-template",null,8,e.W1O)),2&i){const s=e.oxw(),x=e.MAs(4);e.Q6J("ngIf",s.enablePopover)("ngIfElse",x)}}function B(i,f){}function I(i,f){if(1&i){const s=e.EpF();e.TgZ(0,"nz-tag",12),e.NdJ("nzOnClose",function(b){e.CHM(s);const F=e.oxw();return e.KtG(F.itemClosed(b))}),e.YNc(1,B,0,0,"ng-template",6),e.qZA()}if(2&i){const s=e.oxw(),x=e.MAs(8);e.Q6J("nzMode",s.onCloseClicked?"closeable":"default")("ngClass",e.VKq(3,S,s.molecularProfile.deprecated)),e.xp6(1),e.Q6J("ngTemplateOutlet",x)}}function p(i,f){}function v(i,f){if(1&i&&e.YNc(0,p,0,0,"ng-template",6),2&i){e.oxw();const s=e.MAs(2);e.Q6J("ngTemplateOutlet",s)}}function d(i,f){if(1&i&&(e.ynx(0),e._uU(1),e.ALo(2,"truncate"),e.BQk()),2&i){const s=e.oxw(2);e.xp6(1),e.hij(" ",e.xi3(2,1,s.molecularProfile.name,s.truncationLength)," ")}}function z(i,f){if(1&i&&e._uU(0),2&i){const s=e.oxw(2);e.hij(" ",s.molecularProfile.name," ")}}function Z(i,f){if(1&i&&(e._UZ(0,"i",13),e.YNc(1,d,3,4,"ng-container",0),e.YNc(2,z,1,1,"ng-template",null,14,e.W1O)),2&i){const s=e.MAs(3),x=e.oxw();e.Q6J("nzTwotoneColor",x.iconColor),e.xp6(1),e.Q6J("ngIf",x.truncateLongName)("ngIfElse",s)}}class A extends c.a{constructor(){super(),this.enablePopover=!0,this.truncateLongName=!1,this.truncationLength=20,this.iconColor=(0,o.f)("MolecularProfile")}idFunction(){return this.molecularProfile.id}ngOnInit(){if(super.ngOnInit(),void 0===this.molecularProfile)throw new Error("cvc-molecular-profile-tag requires LinkableMolecularProfile input, none supplied.");"number"==typeof this.truncateLongName&&(this.truncationLength=this.truncateLongName),"segments"in this.molecularProfile&&(this.molecularProfile.name=this.molecularProfile.segments.map(f=>"text"in f?f.text:f.name).join(" "))}}A.\u0275fac=function(f){return new(f||A)},A.\u0275cmp=e.Xpm({type:A,selectors:[["cvc-molecular-profile-tag"]],inputs:{molecularProfile:"molecularProfile",enablePopover:"enablePopover",truncateLongName:"truncateLongName"},features:[e.qOj],decls:9,vars:2,consts:[[4,"ngIf","ngIfElse"],["tag",""],["noPopover",""],["unlinked",""],["tagContent",""],[3,"routerLink"],[3,"ngTemplateOutlet"],["nz-popover","","nzPopoverTrigger","hover",3,"ngClass","nzPopoverMouseEnterDelay","nzPopoverContent","nzMode","nzOnClose",4,"ngIf","ngIfElse"],["popoverContent",""],["nz-popover","","nzPopoverTrigger","hover",3,"ngClass","nzPopoverMouseEnterDelay","nzPopoverContent","nzMode","nzOnClose"],[3,"molecularProfileId",4,"ngIf"],[3,"molecularProfileId"],[3,"nzMode","ngClass","nzOnClose"],["nz-icon","","nzType","civic-molecularprofile","nzTheme","twotone",3,"nzTwotoneColor"],["fullName",""]],template:function(f,s){if(1&f&&(e.YNc(0,C,3,2,"ng-container",0),e.YNc(1,Q,3,2,"ng-template",null,1,e.W1O),e.YNc(3,I,2,5,"ng-template",null,2,e.W1O),e.YNc(5,v,1,1,"ng-template",null,3,e.W1O),e.YNc(7,Z,4,3,"ng-template",null,4,e.W1O)),2&f){const x=e.MAs(6);e.Q6J("ngIf",s.linked)("ngIfElse",x)}},dependencies:[h.mk,h.O5,h.tP,g.rH,u.j,P.lU,m.Ls,t._,T.W],styles:["[_nghost-%COMP%]     nz-tag.rejected, [_nghost-%COMP%]     nz-tag.submitted, [_nghost-%COMP%]     nz-tag.accepted, [_nghost-%COMP%]     nz-tag.deprecated{border-right-width:2px}[_nghost-%COMP%]     nz-tag.rejected, [_nghost-%COMP%]     nz-tag.deprecated{border-color:#e6e6e6;background-color:#fff;color:#999999d9}[_nghost-%COMP%]     nz-tag.submitted{border-color:#ffe58f}[_nghost-%COMP%]     nz-tag.accepted{border-color:#b7eb8f}[_nghost-%COMP%]{display:inline-block}"],changeDetection:0})},4126:(L,y,n)=>{n.d(y,{u:()=>t});var c=n(6895),o=n(9116),e=n(6672),h=n(1102),g=n(6581),u=n(9444),P=n(4398),m=n(4650);class t{}t.\u0275fac=function(M){return new(M||t)},t.\u0275mod=m.oAB({type:t}),t.\u0275inj=m.cJS({imports:[c.ez,o.Bz,e.X,g.$6,h.PV,u.s,P._]})},3172:(L,y,n)=>{n.d(y,{i:()=>I});var c=n(6654),o=n(4650),e=n(6895),h=n(9116),g=n(6672),u=n(6581),P=n(1102),m=n(8305),t=n(160);function T(p,v){}function M(p,v){if(1&p&&(o.ynx(0),o.TgZ(1,"a",5),o.YNc(2,T,0,0,"ng-template",6),o.qZA(),o.BQk()),2&p){const d=o.oxw(),z=o.MAs(2);o.xp6(1),o.Q6J("routerLink",d.phenotype.link),o.xp6(1),o.Q6J("ngTemplateOutlet",z)}}function C(p,v){}function _(p,v){if(1&p&&o._UZ(0,"cvc-phenotype-popover",9),2&p){const d=o.oxw(2);o.Q6J("phenotypeId",d.phenotype.id)}}function S(p,v){if(1&p){const d=o.EpF();o.TgZ(0,"nz-tag",7),o.NdJ("nzOnClose",function(Z){o.CHM(d);const A=o.oxw();return o.KtG(A.itemClosed(Z))}),o.YNc(1,C,0,0,"ng-template",6),o.qZA(),o.YNc(2,_,1,1,"ng-template",null,8,o.W1O)}if(2&p){const d=o.MAs(3),z=o.oxw(),Z=o.MAs(8);o.Q6J("nzPopoverMouseEnterDelay",z.onCloseClicked?0:.5)("nzPopoverContent",d)("nzPopoverTrigger",z.enablePopover?"hover":null)("nzMode",z.onCloseClicked?"closeable":"default"),o.xp6(1),o.Q6J("ngTemplateOutlet",Z)}}function U(p,v){}function E(p,v){if(1&p){const d=o.EpF();o.TgZ(0,"nz-tag",10),o.NdJ("nzOnClose",function(Z){o.CHM(d);const A=o.oxw();return o.KtG(A.itemClosed(Z))}),o.YNc(1,U,0,0,"ng-template",6),o.qZA()}if(2&p){const d=o.oxw(),z=o.MAs(8);o.Q6J("nzMode",d.onCloseClicked?"closeable":"default"),o.xp6(1),o.Q6J("ngTemplateOutlet",z)}}function N(p,v){}function Q(p,v){if(1&p&&o.YNc(0,N,0,0,"ng-template",6),2&p){o.oxw();const d=o.MAs(2);o.Q6J("ngTemplateOutlet",d)}}function B(p,v){if(1&p&&(o._UZ(0,"i",11),o.ALo(1,"entityColor"),o._uU(2)),2&p){const d=o.oxw();o.Q6J("nzTwotoneColor",o.lcZ(1,2,"Phenotype")),o.xp6(2),o.hij(" ",d.phenotype.name,"\n")}}class I extends c.a{constructor(){super(...arguments),this.enablePopover=!0}set phenotype(v){if(!v)throw new Error("phenotype-tag phentype input requires LinkablePhenotype.");this._phenotype=v}get phenotype(){return this._phenotype}idFunction(){return this.phenotype.id}}I.\u0275fac=function(){let p;return function(d){return(p||(p=o.n5z(I)))(d||I)}}(),I.\u0275cmp=o.Xpm({type:I,selectors:[["cvc-phenotype-tag"]],inputs:{phenotype:"phenotype",enablePopover:"enablePopover"},features:[o.qOj],decls:9,vars:2,consts:[[4,"ngIf","ngIfElse"],["tag",""],["noPopover",""],["unlinked",""],["tagContent",""],[3,"routerLink"],[3,"ngTemplateOutlet"],["nz-popover","","nzPopoverPlacement","right",3,"nzPopoverMouseEnterDelay","nzPopoverContent","nzPopoverTrigger","nzMode","nzOnClose"],["phenotypePopover",""],[3,"phenotypeId"],[3,"nzMode","nzOnClose"],["nz-icon","","nzTheme","twotone","nzType","civic-phenotype",3,"nzTwotoneColor"]],template:function(v,d){if(1&v&&(o.YNc(0,M,3,2,"ng-container",0),o.YNc(1,S,4,5,"ng-template",null,1,o.W1O),o.YNc(3,E,2,2,"ng-template",null,2,o.W1O),o.YNc(5,Q,1,1,"ng-template",null,3,o.W1O),o.YNc(7,B,3,4,"ng-template",null,4,o.W1O)),2&v){const z=o.MAs(6);o.Q6J("ngIf",d.linked)("ngIfElse",z)}},dependencies:[e.O5,e.tP,h.rH,g.j,u.lU,P.Ls,m.S,t.a],styles:["[_nghost-%COMP%]{display:block}"],changeDetection:0})},3973:(L,y,n)=>{n.d(y,{y:()=>t});var c=n(6895),o=n(9116),e=n(9444),h=n(1102),g=n(6581),u=n(6672),P=n(1028),m=n(4650);class t{}t.\u0275fac=function(M){return new(M||t)},t.\u0275mod=m.oAB({type:t}),t.\u0275inj=m.cJS({imports:[c.ez,o.Bz,u.X,g.$6,h.PV,P.I,e.s]})},4590:(L,y,n)=>{n.d(y,{h:()=>M});var c=n(4650),o=n(6895),e=n(6672),h=n(1102);function g(C,_){1&C&&c._UZ(0,"i",7)}function u(C,_){1&C&&c._UZ(0,"i",8)}function P(C,_){1&C&&c._UZ(0,"i",9)}function m(C,_){1&C&&c._UZ(0,"i",10)}function t(C,_){1&C&&c._UZ(0,"i",10)}function T(C,_){if(1&C&&(c.TgZ(0,"nz-tag",1),c.ynx(1,2),c.YNc(2,g,1,0,"i",3),c.YNc(3,u,1,0,"i",4),c.YNc(4,P,1,0,"i",5),c.YNc(5,m,1,0,"i",6),c.YNc(6,t,1,0,"i",6),c.BQk(),c._uU(7),c.ALo(8,"titlecase"),c.qZA()),2&C){const S=c.oxw();c.Q6J("nzColor",S.tagStatus),c.xp6(1),c.Q6J("ngSwitch",S.tagStatus),c.xp6(1),c.Q6J("ngSwitchCase","success"),c.xp6(1),c.Q6J("ngSwitchCase","error"),c.xp6(1),c.Q6J("ngSwitchCase","warning"),c.xp6(1),c.Q6J("ngSwitchCase","processing"),c.xp6(1),c.Q6J("ngSwitchCase","default"),c.xp6(1),c.hij(" ",c.lcZ(8,8,S.status),"\n")}}class M{constructor(){this.statusColorMap={ACCEPTED:"success",REJECTED:"error",SUBMITTED:"warning",NEW:"processing",SUPERSEDED:"default",OPEN:"error",RESOLVED:"default"}}set status(_){this._status=_,_&&(this.tagStatus=this.statusColorMap[_])}get status(){return this._status}ngOnInit(){if(void 0===this.status)throw new Error("Must pass a valid EvidenceStatus or RevisionStatus to cvc-status-tag component")}}M.\u0275fac=function(_){return new(_||M)},M.\u0275cmp=c.Xpm({type:M,selectors:[["cvc-status-tag"]],inputs:{status:"status"},decls:1,vars:1,consts:[[3,"nzColor",4,"ngIf"],[3,"nzColor"],[3,"ngSwitch"],["nz-icon","","nzType","check-circle",4,"ngSwitchCase"],["nz-icon","","nzType","close-circle",4,"ngSwitchCase"],["nz-icon","","nzType","exclamation-circle",4,"ngSwitchCase"],["nz-icon","",4,"ngSwitchCase"],["nz-icon","","nzType","check-circle"],["nz-icon","","nzType","close-circle"],["nz-icon","","nzType","exclamation-circle"],["nz-icon",""]],template:function(_,S){1&_&&c.YNc(0,T,9,10,"nz-tag",0),2&_&&c.Q6J("ngIf",S.tagStatus)},dependencies:[o.O5,o.RF,o.n9,e.j,h.Ls,o.rS],encapsulation:2})},592:(L,y,n)=>{n.d(y,{x:()=>g});var c=n(6895),o=n(6672),e=n(1102),h=n(4650);class g{}g.\u0275fac=function(P){return new(P||g)},g.\u0275mod=h.oAB({type:g}),g.\u0275inj=h.cJS({imports:[c.ez,o.X,e.PV]})},2811:(L,y,n)=>{n.d(y,{s:()=>t});var c=n(6895),o=n(6581),e=n(9116),h=n(9736),g=n(6672),u=n(1102),P=n(9444),m=n(4650);class t{}t.\u0275fac=function(M){return new(M||t)},t.\u0275mod=m.oAB({type:t}),t.\u0275inj=m.cJS({imports:[c.ez,e.Bz,u.PV,o.$6,g.X,h.n,P.s]})},4475:(L,y,n)=>{n.d(y,{F:()=>e});var o=n(4650);class e{transform(g,u="display-string"){return void 0===g?"":"display-string"===u?function c(h){switch(h){case"COMBINATION":return"Combination";case"SEQUENTIAL":return"Sequential";case"SUBSTITUTES":return"Substitutes";default:return h}}(g):`civic-${g.replace(/_/g,"").toLowerCase()}`}}e.\u0275fac=function(g){return new(g||e)},e.\u0275pipe=o.Yjl({name:"therapyInteractionEnumDisplay",type:e,pure:!0})},5281:(L,y,n)=>{n.r(y),n.d(y,{PhenotypesModule:()=>Y});var c=n(6895),o=n(9116),e=n(4989),h=n(5630),g=n(9444),u=n(2635),P=n(1102),m=n(5655),t=n(4650);class T{}T.\u0275fac=function(a){return new(a||T)},T.\u0275mod=t.oAB({type:T}),T.\u0275inj=t.cJS({imports:[c.ez,o.Bz,u._N,u.pP,m.KJ,P.PV,g.s,e.X,h.D]});var M=n(767),C=n(9441),_=n(3679),S=n(9241);class U{}U.\u0275fac=function(a){return new(a||U)},U.\u0275mod=t.oAB({type:U}),U.\u0275inj=t.cJS({imports:[c.ez,_.Jb,S.h,M.Q,C.s]});var E=n(6675),N=n(4125),Q=n(3973),B=n(6616),I=n(8823),p=n(1971),v=n(7570),d=n(6672),z=n(3111),Z=n(1433),A=n(2994),i=n(9240),f=n(8525);class s{}s.\u0275fac=function(a){return new(a||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[c.ez,u._N,u.pP,E.HQ,B.sL,P.PV,I.ZJ,p.vh,v.cg,d.X,g.s,A.y,i.w,f.T,z.n,Z.c,N.k,Q.y,e.X]});var x=n(6903);class b{}b.\u0275fac=function(a){return new(a||b)},b.\u0275mod=t.oAB({type:b}),b.\u0275inj=t.cJS({imports:[c.ez,m.KJ,P.PV,_.Jb,B.sL,x.zf,I.ZJ,g.s,h.D,s]});var F=n(8675),R=n(6579),G=n(7630),ot=n(6550),at=n(8992),lt=n(160);function pt(l,a){if(1&l&&(t.ynx(0),t._UZ(1,"cvc-section-navigation",1),t.TgZ(2,"nz-page-header",2)(3,"nz-page-header-title"),t._UZ(4,"i",3),t.ALo(5,"entityColor"),t._uU(6),t.qZA(),t.TgZ(7,"nz-page-header-extra")(8,"cvc-link-tag",4),t._uU(9),t.qZA()(),t.TgZ(10,"nz-page-header-content")(11,"div",5),t._UZ(12,"router-outlet"),t.qZA()()(),t.BQk()),2&l){const r=a.ngIf;t.xp6(1),t.Q6J("displayName",r.name),t.xp6(3),t.Q6J("nzTwotoneColor",t.lcZ(5,5,"Phenotype")),t.xp6(2),t.hij(" ",r.name," "),t.xp6(2),t.Q6J("href",r.url),t.xp6(1),t.hij(" ",r.hpoId," ")}}class w{constructor(a,r){this.route=a,this.gql=r,this.routeSub=this.route.params.subscribe(D=>{this.phenotypeId=+D.phenotypeId,this.queryRef=this.gql.watch({phenotypeId:this.phenotypeId});let O=this.queryRef.valueChanges;this.loading$=O.pipe((0,R.j)("loading"),(0,F.O)(!0)),this.phenotype$=O.pipe((0,R.j)("data","phenotype"))})}ngOnDestroy(){this.routeSub.unsubscribe()}}w.\u0275fac=function(a){return new(a||w)(t.Y36(o.gz),t.Y36(G.WGV))},w.\u0275cmp=t.Xpm({type:w,selectors:[["cvc-phenotypes-detail"]],decls:2,vars:3,consts:[[4,"ngIf"],[3,"displayName"],[1,"site-page-header"],["nz-icon","","nzTheme","twotone","nzType","civic-phenotype",3,"nzTwotoneColor"],["tooltip","View in the HPO",3,"href"],[1,"content"]],template:function(a,r){1&a&&(t.YNc(0,pt,13,7,"ng-container",0),t.ALo(1,"ngrxPush")),2&a&&t.Q6J("ngIf",t.lcZ(1,1,r.phenotype$))},dependencies:[c.O5,o.lC,m.$O,m.u9,m.u5,m.Jp,P.Ls,ot.l,at.I,u.fM,lt.a],styles:["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]     nz-page-header:first-of-type{background-color:#fff;border-radius:8px}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content{flex-wrap:nowrap;background-color:#f0f0f0;border-top-left-radius:8px;border-top-right-radius:8px;margin:-12px -16px 16px;border-bottom:1px solid #bfbfbf}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-icon{padding:12px 0 12px 12px}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-icon i{width:100%}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-icon i   svg{width:100%;height:100%}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-description{padding:12px}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-description h2{color:#262626;margin:-8px 0 0;font-weight:500}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-description p{color:#262626;margin:-2px 0 0;padding:0;font-size:95%;line-height:1.5em}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-links{text-align:right;padding:12px}[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card{width:100%}[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card .card-grid-cell{width:50%}[_nghost-%COMP%]     nz-page-header:first-of-type nz-page-header-title.flagged{padding-left:.75em}[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-content{padding-top:0;padding-bottom:12px}[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-heading-extra nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs{margin:0 -16px 12px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap{padding-left:16px;padding-right:16px;line-height:24px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab{padding:1px 8px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab .anticon{margin-right:0}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-extra-content{margin-right:16px}"]});var K,rt=n(7044),st=n(655),gt=n(3154),$=n(9933),ct=n(1135),k=n(7579),q=n(3240),tt=n(1884),_t=n(2529),ht=n(5684),X=n(9300),nt=n(4004),dt=n(8372),mt=n(1365),ut=n(3388),ft=n(9947),Ct=n(3667),vt=n(5851),Pt=n(7451),zt=n(2166),yt=n(3172);function Tt(l,a){}function Mt(l,a){if(1&l&&(t.ynx(0),t.TgZ(1,"nz-card",5),t.YNc(2,Tt,0,0,"ng-template",6),t.qZA(),t.BQk()),2&l){t.oxw();const r=t.MAs(6),D=t.MAs(8),O=t.MAs(4);t.xp6(1),t.Q6J("nzTitle",r)("nzExtra",D),t.xp6(1),t.Q6J("ngTemplateOutlet",O)}}function xt(l,a){}const Ot=function(l){return{height:l}};function Et(l,a){if(1&l&&(t.TgZ(0,"div",7)(1,"nz-card",8),t.YNc(2,xt,0,0,"ng-template",6),t.qZA()()),2&l){const r=t.oxw(),D=t.MAs(6),O=t.MAs(8),J=t.MAs(4);t.Q6J("ngStyle",t.VKq(4,Ot,r.cvcHeight)),t.xp6(1),t.Q6J("nzTitle",D)("nzExtra",O),t.xp6(1),t.Q6J("ngTemplateOutlet",J)}}function It(l,a){if(1&l&&(t.TgZ(0,"cvc-link-tag",29),t._uU(1),t.qZA()),2&l){const r=t.oxw().$implicit;t.Q6J("href",r.url),t.xp6(1),t.hij(" ",r.hpoId," ")}}function At(l,a){1&l&&t._uU(0,"--")}function Dt(l,a){if(1&l&&(t.TgZ(0,"tr",24)(1,"td",20),t._UZ(2,"cvc-phenotype-tag",25),t.qZA(),t.TgZ(3,"td"),t.YNc(4,It,2,2,"cvc-link-tag",26),t.YNc(5,At,1,0,"ng-template",null,27,t.W1O),t.qZA(),t.TgZ(7,"td",28),t._uU(8),t.qZA(),t.TgZ(9,"td",28),t._uU(10),t.qZA()()),2&l){const r=a.$implicit,D=t.MAs(6);t.xp6(2),t.Q6J("phenotype",r),t.xp6(2),t.Q6J("ngIf",r.hpoId)("ngIfElse",D),t.xp6(4),t.hij(" ",r.evidenceCount," "),t.xp6(2),t.hij(" ",r.assertionCount," ")}}const St=function(){return[]},Zt=function(){return{x:"680px",y:"800px"}},it=function(){return["descend","ascend",null]};function Ut(l,a){if(1&l){const r=t.EpF();t.TgZ(0,"nz-table",9,10),t.NdJ("cvcTableScrollOnScroll",function(O){t.CHM(r);const J=t.oxw();return t.KtG(J.scrollEvent$.next(O))}),t.ALo(2,"ngrxPush"),t.ALo(3,"ngrxPush"),t.ALo(4,"ngrxPush"),t.ALo(5,"ngrxPush"),t.TgZ(6,"thead",11),t.NdJ("nzSortOrderChange",function(O){t.CHM(r);const J=t.oxw();return t.KtG(J.sortChange$.next(O))}),t.TgZ(7,"tr",12)(8,"th",13),t._uU(9," Name "),t.qZA(),t.TgZ(10,"th",14),t._uU(11," HPO ID "),t.qZA(),t.TgZ(12,"th",15),t._UZ(13,"i",16),t._uU(14," Count "),t.qZA(),t.TgZ(15,"th",17),t._UZ(16,"i",18),t._uU(17," Count "),t.qZA()(),t.TgZ(18,"tr",19)(19,"th",20)(20,"cvc-clearable-input-filter",21),t.NdJ("inputModelChange",function(O){t.CHM(r);const J=t.oxw();return t.KtG(J.hpoNameFilter=O)})("inputModelChange",function(){t.CHM(r);const O=t.oxw();return t.KtG(O.filterChange$.next())}),t.qZA()(),t.TgZ(21,"th")(22,"cvc-clearable-input-filter",21),t.NdJ("inputModelChange",function(O){t.CHM(r);const J=t.oxw();return t.KtG(J.hpoIdFilter=O)})("inputModelChange",function(){t.CHM(r);const O=t.oxw();return t.KtG(O.filterChange$.next())}),t.qZA()(),t._UZ(23,"th",22)(24,"th",22),t.qZA()(),t.TgZ(25,"tbody"),t.YNc(26,Dt,11,5,"ng-template",23),t.qZA()()}if(2&l){const r=t.oxw();t.Q6J("nzData",t.lcZ(2,23,r.row$)||t.DdM(31,St))("nzLoading",!t.lcZ(3,25,r.row$))("cvcAutoHeightTable",25)("nzVirtualItemSize",29)("cvcTableScrollQueryRef",r.queryRef)("cvcTableScrollPageInfo",t.lcZ(4,27,r.pageInfo$))("cvcTableScrollToIndex",t.lcZ(5,29,r.scrollIndex$))("nzVirtualForTrackBy",r.trackByIndex)("nzScroll",t.DdM(32,Zt))("nzFrontPagination",!1)("nzShowPagination",!1),t.xp6(8),t.Q6J("nzColumnKey",r.sortColumns.Name)("nzSortFn",!0),t.xp6(2),t.Q6J("nzColumnKey",r.sortColumns.HpoId)("nzSortFn",!0),t.xp6(2),t.Q6J("nzColumnKey",r.sortColumns.EvidenceItemCount)("nzSortFn",!0)("nzSortDirections",t.DdM(33,it)),t.xp6(3),t.Q6J("nzColumnKey",r.sortColumns.AssertionCount)("nzSortFn",!0)("nzSortDirections",t.DdM(34,it)),t.xp6(5),t.Q6J("inputModel",r.hpoNameFilter),t.xp6(2),t.Q6J("inputModel",r.hpoIdFilter)}}function bt(l,a){}function Lt(l,a){if(1&l&&(t.ynx(0),t.YNc(1,bt,0,0,"ng-template",6),t.BQk()),2&l){const r=t.oxw(2);t.xp6(1),t.Q6J("ngTemplateOutlet",r.cvcTitleTemplate)}}function Bt(l,a){if(1&l&&(t.ynx(0),t._uU(1),t.BQk()),2&l){const r=t.oxw(2);t.xp6(1),t.hij(" ",r.cvcTitle," ")}}function Jt(l,a){if(1&l&&(t.YNc(0,Lt,2,1,"ng-container",30),t.YNc(1,Bt,2,1,"ng-container",30),t.TgZ(2,"span",31),t._UZ(3,"cvc-table-counts",32),t.qZA()),2&l){const r=t.oxw();t.Q6J("ngIf",r.cvcTitleTemplate),t.xp6(1),t.Q6J("ngIf",r.cvcTitle),t.xp6(2),t.Q6J("cvcTableCountsConnection",r.connection$)}}function Nt(l,a){1&l&&(t.TgZ(0,"nz-tag",35),t._UZ(1,"i",36),t.TgZ(2,"span"),t._uU(3,"Loading\u2026"),t.qZA()())}function Qt(l,a){if(1&l&&(t.YNc(0,Nt,4,0,"nz-tag",33),t.ALo(1,"ngrxPush"),t._UZ(2,"cvc-no-more-rows",34),t.ALo(3,"ngrxPush")),2&l){const r=t.oxw();t.Q6J("ngIf",t.lcZ(1,2,r.moreLoading$)),t.xp6(2),t.Q6J("cvcShowTag",t.lcZ(3,4,r.noMoreRows$))}}let et=((K=class{set initialUserFilters(a){a&&Object.assign(this,a)}constructor(a,r){this.gql=a,this.cdr=r,this.initialPageSize=35,this.isScrolling=!1,this.sortColumns=G.lYz,this.noMoreRows$=new ct.X(!1),this.scrollEvent$=new ct.X("stop"),this.sortChange$=new k.x,this.filterChange$=new k.x,this.scrollIndex$=new k.x}ngOnInit(){this.queryRef=this.gql.watch({first:this.initialPageSize}),this.result$=this.queryRef.valueChanges,this.initialLoading$=this.result$.pipe((0,R.j)("loading"),(0,tt.x)(),(0,_t.o)(a=>!1!==a,!0)),this.moreLoading$=this.result$.pipe((0,R.j)("loading"),(0,tt.x)(),(0,ht.T)(2)),this.connection$=this.result$.pipe((0,R.j)("data","phenotypes"),(0,X.h)(q.ep)),this.row$=this.connection$.pipe((0,R.j)("edges"),(0,X.h)(q.ep),(0,nt.U)(a=>a.map(r=>r.node))),this.pageInfo$=this.connection$.pipe((0,R.j)("pageInfo"),(0,X.h)(q.ep)),this.sortChange$.pipe((0,$.t)(this)).subscribe(a=>{this.queryRef.refetch({sortBy:(0,gt._)(a)})}),this.filterChange$.pipe((0,dt.b)(500),(0,$.t)(this)).subscribe(()=>{this.refresh()}),this.scrollEvent$.pipe((0,nt.U)(a=>"stop"!==a),(0,tt.x)(),(0,$.t)(this)).subscribe(a=>{this.isScrolling=a,this.cdr.detectChanges()}),this.scrollEvent$.pipe((0,X.h)(a=>"bottom"===a),(0,mt.M)(this.pageInfo$),(0,nt.U)(([a,r])=>r),(0,$.t)(this)).subscribe(a=>{a.hasNextPage||(this.noMoreRows$.next(!0),this.cdr.detectChanges(),setInterval(()=>this.noMoreRows$.next(!1)))})}refresh(){this.queryRef.refetch({name:this.hpoNameFilter,hpoId:this.hpoIdFilter}).then(()=>this.scrollIndex$.next(0)),this.cdr.detectChanges()}trackByIndex(a,r){return r?.id}}).\u0275fac=function(a){return new(a||K)(t.Y36(G.B97),t.Y36(t.sBO))},K.\u0275cmp=t.Xpm({type:K,selectors:[["cvc-phenotypes-table"]],inputs:{cvcHeight:"cvcHeight",cvcTitleTemplate:"cvcTitleTemplate",cvcTitle:"cvcTitle",initialPageSize:"initialPageSize",initialUserFilters:"initialUserFilters"},decls:9,vars:2,consts:[[4,"ngIf","ngIfElse"],["setHeightCard",""],["table",""],["titleTemplate",""],["extraTemplate",""],["nzSize","small","cvcAutoHeightCard","","cvcAutoHeightTarget","viewport",3,"nzTitle","nzExtra"],[3,"ngTemplateOutlet"],[1,"card-container",3,"ngStyle"],["cvcAutoHeightCard","","nzSize","small",3,"nzTitle","nzExtra"],["nzSize","small","cvcTableScroll","",3,"nzData","nzLoading","cvcAutoHeightTable","nzVirtualItemSize","cvcTableScrollQueryRef","cvcTableScrollPageInfo","cvcTableScrollToIndex","nzVirtualForTrackBy","nzScroll","nzFrontPagination","nzShowPagination","cvcTableScrollOnScroll"],["virtualTable",""],[3,"nzSortOrderChange"],[1,"col-header-row"],["nzWidth","350px","nzLeft","",3,"nzColumnKey","nzSortFn"],["nzWidth","100%",3,"nzColumnKey","nzSortFn"],["nzWidth","75px","nzRight","","nzAlign","right","nz-tooltip","","nzTooltipTitle","Evidence Count",3,"nzColumnKey","nzSortFn","nzSortDirections"],["nz-icon","","nzType","civic-evidence"],["nzWidth","75px","nzRight","","nzAlign","right","nz-tooltip","","nzTooltipTitle","Assertion Count",3,"nzColumnKey","nzSortFn","nzSortDirections"],["nz-icon","","nzType","civic-assertion"],[1,"filter-row"],["nzLeft",""],[3,"inputModel","inputModelChange"],["nzRight",""],["nz-virtual-scroll",""],[1,"data-row"],[3,"phenotype"],[3,"href",4,"ngIf","ngIfElse"],["noHpo",""],["nzRight","","nzAlign","right"],[3,"href"],[4,"ngIf"],[1,"table-info"],[3,"cvcTableCountsConnection"],["nzColor","processing",4,"ngIf"],[3,"cvcShowTag"],["nzColor","processing"],["nz-icon","","nzType","sync","nzSpin",""]],template:function(a,r){if(1&a&&(t.YNc(0,Mt,3,3,"ng-container",0),t.YNc(1,Et,3,6,"ng-template",null,1,t.W1O),t.YNc(3,Ut,27,35,"ng-template",null,2,t.W1O),t.YNc(5,Jt,4,3,"ng-template",null,3,t.W1O),t.YNc(7,Qt,4,6,"ng-template",null,4,t.W1O)),2&a){const D=t.MAs(2);t.Q6J("ngIf",!r.cvcHeight)("ngIfElse",D)}},dependencies:[c.O5,c.tP,c.PC,E.N8,E.qD,E.Uo,E._C,E.Om,E.p0,E.$Z,E.zu,E.qn,E.UX,rt.w,P.Ls,p.bd,v.SY,d.j,ut.H,ft.y,Ct.B,vt.D,Pt.q,zt.p,yt.i,ot.l,u.fM],styles:["nz-card[_ngcontent-%COMP%]:first-of-type     .ant-card-body{padding:0;margin-top:1px}.table-info[_ngcontent-%COMP%]{margin-left:.5rem}tr.col-header-row[_ngcontent-%COMP%]   th.ant-table-cell[_ngcontent-%COMP%]{white-space:nowrap}tr.col-header-row[_ngcontent-%COMP%]   th.ant-table-cell.align-right[_ngcontent-%COMP%]     .ant-table-column-title{text-align:right}tr.filter-row[_ngcontent-%COMP%]   th.ant-table-cell[_ngcontent-%COMP%]{padding:3px 4px}tr.filter-row[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   nz-filter-trigger[_ngcontent-%COMP%]     span.ant-dropdown-trigger{margin-left:0;padding-right:12px}tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell[_ngcontent-%COMP%]{white-space:nowrap}tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell[_ngcontent-%COMP%]   .anticon.attribute-icon[_ngcontent-%COMP%]{color:#595959}tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell.overflow-ellipsis[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis}tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell.button-cell[_ngcontent-%COMP%]{padding:0}tr.data-row[_ngcontent-%COMP%]   td.align-right[_ngcontent-%COMP%], tr.col-header-row[_ngcontent-%COMP%]   th.ant-table-cell[_ngcontent-%COMP%]   .align-right[_ngcontent-%COMP%], tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell[_ngcontent-%COMP%]   .align-right[_ngcontent-%COMP%], tr.filter-row[_ngcontent-%COMP%]   th.ant-table-cell[_ngcontent-%COMP%]   .align-right[_ngcontent-%COMP%]{text-align:right}[_nghost-%COMP%]{display:block}"]}),K);function Rt(l,a){1&l&&(t.TgZ(0,"a",14),t._UZ(1,"i",15),t._uU(2," View Associated Phenotype Docs "),t.qZA())}function Kt(l,a){1&l&&(t.TgZ(0,"a",16),t._UZ(1,"i",15),t._uU(2," View Phenotype Curation Docs "),t.qZA())}et=(0,st.gn)([(0,$.c)()],et);class j{constructor(){}ngOnInit(){}}j.\u0275fac=function(a){return new(a||j)},j.\u0275cmp=t.Xpm({type:j,selectors:[["phenotypes-home"]],decls:20,vars:5,consts:[[1,"site-page-header"],[1,"header-content"],["nzFlex","64px",1,"header-icon"],["nz-icon","","nzTheme","twotone","nzType","civic-phenotype",3,"nzTwotoneColor"],["nzFlex","600px",1,"header-description"],["nz-typography","","nzEllipsis","","nzExpandable","",3,"nzEllipsisRows"],["nzFlex","auto",1,"header-links"],["nzDirection","vertical",1,"docs-buttons"],["nz-button","","href","https://civic.readthedocs.io/en/latest/model/evidence/associated_phenotype.html","target","_blank","nzSize","small","nzBlock","",4,"nzSpaceItem"],["nz-button","","href","https://civic.readthedocs.io/en/latest/model/evidence/associated_phenotype.html#curating-associated-phenotypes","target","_blank","nzSize","small","nzBlock","",4,"nzSpaceItem"],["nz-row",""],["nz-col","",3,"nzSpan"],[1,"content"],["cvcTitle","Browse All Associated Phenotypes"],["nz-button","","href","https://civic.readthedocs.io/en/latest/model/evidence/associated_phenotype.html","target","_blank","nzSize","small","nzBlock",""],["nz-icon","","nzType","link","nzTheme","outline"],["nz-button","","href","https://civic.readthedocs.io/en/latest/model/evidence/associated_phenotype.html#curating-associated-phenotypes","target","_blank","nzSize","small","nzBlock",""]],template:function(a,r){1&a&&(t._UZ(0,"cvc-section-navigation"),t.TgZ(1,"nz-page-header",0)(2,"nz-page-header-content")(3,"nz-row",1)(4,"nz-col",2),t._UZ(5,"i",3),t.ALo(6,"entityColor"),t.qZA(),t.TgZ(7,"nz-col",4)(8,"h2"),t._uU(9,"Associated Phenotypes"),t.qZA(),t.TgZ(10,"p",5),t._uU(11," Phenotypes are symptoms or abnormalities that are encountered in human disease, optionally associated with Evidence Items and known to the Human Phenotype Ontology database. "),t.qZA()(),t.TgZ(12,"nz-col",6)(13,"nz-space",7),t.YNc(14,Rt,3,0,"a",8),t.YNc(15,Kt,3,0,"a",9),t.qZA()()(),t.TgZ(16,"div",10)(17,"div",11)(18,"div",12),t._UZ(19,"cvc-phenotypes-table",13),t.qZA()()()()()),2&a&&(t.xp6(5),t.Q6J("nzTwotoneColor",t.lcZ(6,3,"Phenotype")),t.xp6(5),t.Q6J("nzEllipsisRows",2),t.xp6(7),t.Q6J("nzSpan",24))},dependencies:[m.$O,m.u5,P.Ls,_.t3,_.SK,B.ix,rt.w,x.NU,x.$1,I.ZU,at.I,et,lt.a],styles:["[_nghost-%COMP%]{display:block}"]});var Wt=n(3392),Yt=n(3756);const Ft=function(){return[8,16]};function wt(l,a){if(1&l&&(t.TgZ(0,"nz-row",1)(1,"nz-col",2),t._UZ(2,"cvc-assertions-table",3),t.qZA(),t.TgZ(3,"nz-col",2),t._UZ(4,"cvc-evidence-table",4),t.qZA()()),2&l){const r=t.oxw();t.Q6J("nzGutter",t.DdM(5,Ft)),t.xp6(1),t.Q6J("nzSpan",24),t.xp6(1),t.Q6J("phenotypeId",r.phenotypeId),t.xp6(1),t.Q6J("nzSpan",24),t.xp6(1),t.Q6J("phenotypeId",r.phenotypeId)}}class H{constructor(a){this.route=a,this.routeSub=this.route.params.subscribe(r=>{this.phenotypeId=+r.phenotypeId})}ngOnDestroy(){this.routeSub.unsubscribe()}}H.\u0275fac=function(a){return new(a||H)(t.Y36(o.gz))},H.\u0275cmp=t.Xpm({type:H,selectors:[["cvc-phenotypes-summary"]],decls:1,vars:1,consts:[[3,"nzGutter",4,"ngIf"],[3,"nzGutter"],[3,"nzSpan"],["cvcHeight","400","cvcTitle","Phenotype Assertions",3,"phenotypeId"],["cvcTitle","Phenotype Evidence",3,"phenotypeId"]],template:function(a,r){1&a&&t.YNc(0,wt,5,6,"nz-row",0),2&a&&t.Q6J("ngIf",r.phenotypeId)},dependencies:[c.O5,_.t3,_.SK,Wt.a,Yt.x],styles:["[_nghost-%COMP%]{display:block}"]});class V{constructor(){}ngOnInit(){}}V.\u0275fac=function(a){return new(a||V)},V.\u0275cmp=t.Xpm({type:V,selectors:[["cvc-phenotypes"]],decls:1,vars:0,template:function(a,r){1&a&&t._UZ(0,"router-outlet")},dependencies:[o.lC],styles:["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]     nz-page-header:first-of-type{background-color:#fff;border-radius:8px}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content{flex-wrap:nowrap;background-color:#f0f0f0;border-top-left-radius:8px;border-top-right-radius:8px;margin:-12px -16px 16px;border-bottom:1px solid #bfbfbf}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-icon{padding:12px 0 12px 12px}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-icon i{width:100%}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-icon i   svg{width:100%;height:100%}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-description{padding:12px}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-description h2{color:#262626;margin:-8px 0 0;font-weight:500}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-description p{color:#262626;margin:-2px 0 0;padding:0;font-size:95%;line-height:1.5em}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-links{text-align:right;padding:12px}[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card{width:100%}[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card .card-grid-cell{width:50%}[_nghost-%COMP%]     nz-page-header:first-of-type nz-page-header-title.flagged{padding-left:.75em}[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-content{padding-top:0;padding-bottom:12px}[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-heading-extra nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs{margin:0 -16px 12px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap{padding-left:16px;padding-right:16px;line-height:24px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab{padding:1px 8px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab .anticon{margin-right:0}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-extra-content{margin-right:16px}"]});const $t=[{path:"",component:V,children:[{path:"",redirectTo:"home",pathMatch:"full"},{path:"home",component:j,data:{breadcrumb:"Home"}},{path:":phenotypeId",component:w,data:{breadcrumb:"DISPLAYNAME"},children:[{path:"",redirectTo:"summary",pathMatch:"full"},{path:"summary",component:H,data:{breadcrumb:"Summary"}}]}]}];class W{}W.\u0275fac=function(a){return new(a||W)},W.\u0275mod=t.oAB({type:W}),W.\u0275inj=t.cJS({imports:[o.Bz.forChild($t),o.Bz]});class Y{}Y.\u0275fac=function(a){return new(a||Y)},Y.\u0275mod=t.oAB({type:Y}),Y.\u0275inj=t.cJS({imports:[c.ez,o.Bz,W,b,T,U]})}}]);