"use strict";(self.webpackChunkmain=self.webpackChunkmain||[]).push([[5861],{209:(R,E,n)=>{n.d(E,{i:()=>S});var r=n(6895),c=n(9116),o=n(6672),d=n(6581),_=n(1102),h=n(1971),O=n(3679),x=n(9194),p=n(8845),A=n(3973),P=n(2635),f=n(6903),T=n(9444),I=n(2811),J=n(592),t=n(8823),N=n(2190),Z=n(4126),Q=n(701),U=n(4650);class g{}g.\u0275fac=function(D){return new(D||g)},g.\u0275mod=U.oAB({type:g}),g.\u0275inj=U.cJS({imports:[r.ez,c.Bz,P._N,P.pP,_.PV,h.vh,O.Jb,x.q6,o.X,f.zf,t.ZJ,T.s,Q.N,p.Q,A.y,I.s,J.x,Z.u,N.r]});var M=n(48),C=n(6429);class S{}S.\u0275fac=function(D){return new(D||S)},S.\u0275mod=U.oAB({type:S}),S.\u0275inj=U.cJS({imports:[r.ez,c.Bz,M.mS,o.X,d.$6,_.PV,g,T.s,C.C]})},5105:(R,E,n)=>{n.d(E,{p:()=>D});var r=n(6654),c=n(9771),o=n(4650),d=n(6895),_=n(9116),h=n(6672),O=n(6581),x=n(1102),p=n(3314),A=n(4557);function P(i,m){}function f(i,m){if(1&i&&(o.ynx(0),o.TgZ(1,"a",5),o.YNc(2,P,0,0,"ng-template",6),o.qZA(),o.BQk()),2&i){const v=o.oxw(),y=o.MAs(2);o.xp6(1),o.Q6J("routerLink",v.molecularProfile.link),o.xp6(1),o.Q6J("ngTemplateOutlet",y)}}function T(i,m){}const I=function(i){return{deprecated:i}};function J(i,m){if(1&i){const v=o.EpF();o.TgZ(0,"nz-tag",9),o.NdJ("nzOnClose",function(B){o.CHM(v);const b=o.oxw(2);return o.KtG(b.itemClosed(B))}),o.YNc(1,T,0,0,"ng-template",6),o.qZA()}if(2&i){o.oxw();const v=o.MAs(2),y=o.oxw(),B=o.MAs(8);o.Q6J("ngClass",o.VKq(5,I,y.molecularProfile.deprecated))("nzPopoverMouseEnterDelay",y.onCloseClicked?0:.5)("nzPopoverContent",v)("nzMode",y.onCloseClicked?"closeable":"default"),o.xp6(1),o.Q6J("ngTemplateOutlet",B)}}function t(i,m){if(1&i&&o._UZ(0,"cvc-molecular-profile-popover",11),2&i){const v=o.oxw(3);o.Q6J("molecularProfileId",v.molecularProfile.id)}}function N(i,m){if(1&i&&o.YNc(0,t,1,1,"cvc-molecular-profile-popover",10),2&i){const v=o.oxw(2);o.Q6J("ngIf",v.enablePopover)}}function Z(i,m){if(1&i&&(o.YNc(0,J,2,7,"nz-tag",7),o.YNc(1,N,1,1,"ng-template",null,8,o.W1O)),2&i){const v=o.oxw(),y=o.MAs(4);o.Q6J("ngIf",v.enablePopover)("ngIfElse",y)}}function Q(i,m){}function U(i,m){if(1&i){const v=o.EpF();o.TgZ(0,"nz-tag",12),o.NdJ("nzOnClose",function(B){o.CHM(v);const b=o.oxw();return o.KtG(b.itemClosed(B))}),o.YNc(1,Q,0,0,"ng-template",6),o.qZA()}if(2&i){const v=o.oxw(),y=o.MAs(8);o.Q6J("nzMode",v.onCloseClicked?"closeable":"default")("ngClass",o.VKq(3,I,v.molecularProfile.deprecated)),o.xp6(1),o.Q6J("ngTemplateOutlet",y)}}function g(i,m){}function M(i,m){if(1&i&&o.YNc(0,g,0,0,"ng-template",6),2&i){o.oxw();const v=o.MAs(2);o.Q6J("ngTemplateOutlet",v)}}function C(i,m){if(1&i&&(o.ynx(0),o._uU(1),o.ALo(2,"truncate"),o.BQk()),2&i){const v=o.oxw(2);o.xp6(1),o.hij(" ",o.xi3(2,1,v.molecularProfile.name,v.truncationLength)," ")}}function S(i,m){if(1&i&&o._uU(0),2&i){const v=o.oxw(2);o.hij(" ",v.molecularProfile.name," ")}}function L(i,m){if(1&i&&(o._UZ(0,"i",13),o.YNc(1,C,3,4,"ng-container",0),o.YNc(2,S,1,1,"ng-template",null,14,o.W1O)),2&i){const v=o.MAs(3),y=o.oxw();o.Q6J("nzTwotoneColor",y.iconColor),o.xp6(1),o.Q6J("ngIf",y.truncateLongName)("ngIfElse",v)}}class D extends r.a{constructor(){super(),this.enablePopover=!0,this.truncateLongName=!1,this.truncationLength=20,this.iconColor=(0,c.f)("MolecularProfile")}idFunction(){return this.molecularProfile.id}ngOnInit(){if(super.ngOnInit(),void 0===this.molecularProfile)throw new Error("cvc-molecular-profile-tag requires LinkableMolecularProfile input, none supplied.");"number"==typeof this.truncateLongName&&(this.truncationLength=this.truncateLongName),"segments"in this.molecularProfile&&(this.molecularProfile.name=this.molecularProfile.segments.map(m=>"text"in m?m.text:m.name).join(" "))}}D.\u0275fac=function(m){return new(m||D)},D.\u0275cmp=o.Xpm({type:D,selectors:[["cvc-molecular-profile-tag"]],inputs:{molecularProfile:"molecularProfile",enablePopover:"enablePopover",truncateLongName:"truncateLongName"},features:[o.qOj],decls:9,vars:2,consts:[[4,"ngIf","ngIfElse"],["tag",""],["noPopover",""],["unlinked",""],["tagContent",""],[3,"routerLink"],[3,"ngTemplateOutlet"],["nz-popover","","nzPopoverTrigger","hover",3,"ngClass","nzPopoverMouseEnterDelay","nzPopoverContent","nzMode","nzOnClose",4,"ngIf","ngIfElse"],["popoverContent",""],["nz-popover","","nzPopoverTrigger","hover",3,"ngClass","nzPopoverMouseEnterDelay","nzPopoverContent","nzMode","nzOnClose"],[3,"molecularProfileId",4,"ngIf"],[3,"molecularProfileId"],[3,"nzMode","ngClass","nzOnClose"],["nz-icon","","nzType","civic-molecularprofile","nzTheme","twotone",3,"nzTwotoneColor"],["fullName",""]],template:function(m,v){if(1&m&&(o.YNc(0,f,3,2,"ng-container",0),o.YNc(1,Z,3,2,"ng-template",null,1,o.W1O),o.YNc(3,U,2,5,"ng-template",null,2,o.W1O),o.YNc(5,M,1,1,"ng-template",null,3,o.W1O),o.YNc(7,L,4,3,"ng-template",null,4,o.W1O)),2&m){const y=o.MAs(6);o.Q6J("ngIf",v.linked)("ngIfElse",y)}},dependencies:[d.mk,d.O5,d.tP,_.rH,h.j,O.lU,x.Ls,p._,A.W],styles:["[_nghost-%COMP%]     nz-tag.rejected, [_nghost-%COMP%]     nz-tag.submitted, [_nghost-%COMP%]     nz-tag.accepted, [_nghost-%COMP%]     nz-tag.deprecated{border-right-width:2px}[_nghost-%COMP%]     nz-tag.rejected, [_nghost-%COMP%]     nz-tag.deprecated{border-color:#e6e6e6;background-color:#fff;color:#999999d9}[_nghost-%COMP%]     nz-tag.submitted{border-color:#ffe58f}[_nghost-%COMP%]     nz-tag.accepted{border-color:#b7eb8f}[_nghost-%COMP%]{display:inline-block}"],changeDetection:0})},4126:(R,E,n)=>{n.d(E,{u:()=>p});var r=n(6895),c=n(9116),o=n(6672),d=n(1102),_=n(6581),h=n(9444),O=n(4398),x=n(4650);class p{}p.\u0275fac=function(P){return new(P||p)},p.\u0275mod=x.oAB({type:p}),p.\u0275inj=x.cJS({imports:[r.ez,c.Bz,o.X,_.$6,d.PV,h.s,O._]})},3172:(R,E,n)=>{n.d(E,{i:()=>U});var r=n(6654),c=n(4650),o=n(6895),d=n(9116),_=n(6672),h=n(6581),O=n(1102),x=n(8305),p=n(160);function A(g,M){}function P(g,M){if(1&g&&(c.ynx(0),c.TgZ(1,"a",5),c.YNc(2,A,0,0,"ng-template",6),c.qZA(),c.BQk()),2&g){const C=c.oxw(),S=c.MAs(2);c.xp6(1),c.Q6J("routerLink",C.phenotype.link),c.xp6(1),c.Q6J("ngTemplateOutlet",S)}}function f(g,M){}function T(g,M){if(1&g&&c._UZ(0,"cvc-phenotype-popover",9),2&g){const C=c.oxw(2);c.Q6J("phenotypeId",C.phenotype.id)}}function I(g,M){if(1&g){const C=c.EpF();c.TgZ(0,"nz-tag",7),c.NdJ("nzOnClose",function(L){c.CHM(C);const D=c.oxw();return c.KtG(D.itemClosed(L))}),c.YNc(1,f,0,0,"ng-template",6),c.qZA(),c.YNc(2,T,1,1,"ng-template",null,8,c.W1O)}if(2&g){const C=c.MAs(3),S=c.oxw(),L=c.MAs(8);c.Q6J("nzPopoverMouseEnterDelay",S.onCloseClicked?0:.5)("nzPopoverContent",C)("nzPopoverTrigger",S.enablePopover?"hover":null)("nzMode",S.onCloseClicked?"closeable":"default"),c.xp6(1),c.Q6J("ngTemplateOutlet",L)}}function J(g,M){}function t(g,M){if(1&g){const C=c.EpF();c.TgZ(0,"nz-tag",10),c.NdJ("nzOnClose",function(L){c.CHM(C);const D=c.oxw();return c.KtG(D.itemClosed(L))}),c.YNc(1,J,0,0,"ng-template",6),c.qZA()}if(2&g){const C=c.oxw(),S=c.MAs(8);c.Q6J("nzMode",C.onCloseClicked?"closeable":"default"),c.xp6(1),c.Q6J("ngTemplateOutlet",S)}}function N(g,M){}function Z(g,M){if(1&g&&c.YNc(0,N,0,0,"ng-template",6),2&g){c.oxw();const C=c.MAs(2);c.Q6J("ngTemplateOutlet",C)}}function Q(g,M){if(1&g&&(c._UZ(0,"i",11),c.ALo(1,"entityColor"),c._uU(2)),2&g){const C=c.oxw();c.Q6J("nzTwotoneColor",c.lcZ(1,2,"Phenotype")),c.xp6(2),c.hij(" ",C.phenotype.name,"\n")}}class U extends r.a{constructor(){super(...arguments),this.enablePopover=!0}set phenotype(M){if(!M)throw new Error("phenotype-tag phentype input requires LinkablePhenotype.");this._phenotype=M}get phenotype(){return this._phenotype}idFunction(){return this.phenotype.id}}U.\u0275fac=function(){let g;return function(C){return(g||(g=c.n5z(U)))(C||U)}}(),U.\u0275cmp=c.Xpm({type:U,selectors:[["cvc-phenotype-tag"]],inputs:{phenotype:"phenotype",enablePopover:"enablePopover"},features:[c.qOj],decls:9,vars:2,consts:[[4,"ngIf","ngIfElse"],["tag",""],["noPopover",""],["unlinked",""],["tagContent",""],[3,"routerLink"],[3,"ngTemplateOutlet"],["nz-popover","","nzPopoverPlacement","right",3,"nzPopoverMouseEnterDelay","nzPopoverContent","nzPopoverTrigger","nzMode","nzOnClose"],["phenotypePopover",""],[3,"phenotypeId"],[3,"nzMode","nzOnClose"],["nz-icon","","nzTheme","twotone","nzType","civic-phenotype",3,"nzTwotoneColor"]],template:function(M,C){if(1&M&&(c.YNc(0,P,3,2,"ng-container",0),c.YNc(1,I,4,5,"ng-template",null,1,c.W1O),c.YNc(3,t,2,2,"ng-template",null,2,c.W1O),c.YNc(5,Z,1,1,"ng-template",null,3,c.W1O),c.YNc(7,Q,3,4,"ng-template",null,4,c.W1O)),2&M){const S=c.MAs(6);c.Q6J("ngIf",C.linked)("ngIfElse",S)}},dependencies:[o.O5,o.tP,d.rH,_.j,h.lU,O.Ls,x.S,p.a],styles:["[_nghost-%COMP%]{display:block}"],changeDetection:0})},3973:(R,E,n)=>{n.d(E,{y:()=>p});var r=n(6895),c=n(9116),o=n(9444),d=n(1102),_=n(6581),h=n(6672),O=n(1028),x=n(4650);class p{}p.\u0275fac=function(P){return new(P||p)},p.\u0275mod=x.oAB({type:p}),p.\u0275inj=x.cJS({imports:[r.ez,c.Bz,h.X,_.$6,d.PV,O.I,o.s]})},4590:(R,E,n)=>{n.d(E,{h:()=>P});var r=n(4650),c=n(6895),o=n(6672),d=n(1102);function _(f,T){1&f&&r._UZ(0,"i",7)}function h(f,T){1&f&&r._UZ(0,"i",8)}function O(f,T){1&f&&r._UZ(0,"i",9)}function x(f,T){1&f&&r._UZ(0,"i",10)}function p(f,T){1&f&&r._UZ(0,"i",10)}function A(f,T){if(1&f&&(r.TgZ(0,"nz-tag",1),r.ynx(1,2),r.YNc(2,_,1,0,"i",3),r.YNc(3,h,1,0,"i",4),r.YNc(4,O,1,0,"i",5),r.YNc(5,x,1,0,"i",6),r.YNc(6,p,1,0,"i",6),r.BQk(),r._uU(7),r.ALo(8,"titlecase"),r.qZA()),2&f){const I=r.oxw();r.Q6J("nzColor",I.tagStatus),r.xp6(1),r.Q6J("ngSwitch",I.tagStatus),r.xp6(1),r.Q6J("ngSwitchCase","success"),r.xp6(1),r.Q6J("ngSwitchCase","error"),r.xp6(1),r.Q6J("ngSwitchCase","warning"),r.xp6(1),r.Q6J("ngSwitchCase","processing"),r.xp6(1),r.Q6J("ngSwitchCase","default"),r.xp6(1),r.hij(" ",r.lcZ(8,8,I.status),"\n")}}class P{constructor(){this.statusColorMap={ACCEPTED:"success",REJECTED:"error",SUBMITTED:"warning",NEW:"processing",SUPERSEDED:"default",OPEN:"error",RESOLVED:"default"}}set status(T){this._status=T,T&&(this.tagStatus=this.statusColorMap[T])}get status(){return this._status}ngOnInit(){if(void 0===this.status)throw new Error("Must pass a valid EvidenceStatus or RevisionStatus to cvc-status-tag component")}}P.\u0275fac=function(T){return new(T||P)},P.\u0275cmp=r.Xpm({type:P,selectors:[["cvc-status-tag"]],inputs:{status:"status"},decls:1,vars:1,consts:[[3,"nzColor",4,"ngIf"],[3,"nzColor"],[3,"ngSwitch"],["nz-icon","","nzType","check-circle",4,"ngSwitchCase"],["nz-icon","","nzType","close-circle",4,"ngSwitchCase"],["nz-icon","","nzType","exclamation-circle",4,"ngSwitchCase"],["nz-icon","",4,"ngSwitchCase"],["nz-icon","","nzType","check-circle"],["nz-icon","","nzType","close-circle"],["nz-icon","","nzType","exclamation-circle"],["nz-icon",""]],template:function(T,I){1&T&&r.YNc(0,A,9,10,"nz-tag",0),2&T&&r.Q6J("ngIf",I.tagStatus)},dependencies:[c.O5,c.RF,c.n9,o.j,d.Ls,c.rS],encapsulation:2})},592:(R,E,n)=>{n.d(E,{x:()=>_});var r=n(6895),c=n(6672),o=n(1102),d=n(4650);class _{}_.\u0275fac=function(O){return new(O||_)},_.\u0275mod=d.oAB({type:_}),_.\u0275inj=d.cJS({imports:[r.ez,c.X,o.PV]})},9814:(R,E,n)=>{n.d(E,{O:()=>X});var r=n(655),c=n(3154),o=n(7630),d=n(9933),_=n(1135),h=n(7579),O=n(3240),x=n(4004),p=n(1884),A=n(2529),P=n(5684),f=n(9300),T=n(8372),I=n(1365),J=n(6579),t=n(4650),N=n(9350),Z=n(6895),Q=n(4006),U=n(9116),g=n(6616),M=n(7044),C=n(1664),S=n(1971),L=n(1102),D=n(6581),i=n(8231),m=n(6675),v=n(6672),y=n(7570),B=n(9947),b=n(3667),w=n(3388),j=n(5851),H=n(7451),V=n(2166),G=n(7491),K=n(783),W=n(2722),Y=n(6123),k=n(9169),tt=n(5681),nt=n(9597),et=n(5635),q=n(6903),ot=n(822),at=n(1793),ct=n(8227),lt=n(9180);function rt(a,l){if(1&a){const e=t.EpF();t.TgZ(0,"nz-alert",6),t.NdJ("nzOnClose",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.onSuccessBannerClose())}),t.qZA()}}function st(a,l){if(1&a&&t._UZ(0,"cvc-form-errors-alert",7),2&a){const e=t.oxw();t.Q6J("errors",e.errorMessages)}}function it(a,l){if(1&a){const e=t.EpF();t.TgZ(0,"textarea",8),t.NdJ("ngModelChange",function(s){t.CHM(e);const z=t.oxw();return t.KtG(z.reason=s)}),t.qZA()}if(2&a){const e=t.oxw();t.Q6J("ngModel",e.reason)}}function gt(a,l){1&a&&t._UZ(0,"nz-option",13)}function ut(a,l){1&a&&t._UZ(0,"nz-option",14)}function pt(a,l){1&a&&t._UZ(0,"nz-option",15)}function _t(a,l){if(1&a){const e=t.EpF();t.TgZ(0,"nz-select",9),t.NdJ("ngModelChange",function(s){t.CHM(e);const z=t.oxw();return t.KtG(z.newStatus=s)}),t.YNc(1,gt,1,0,"nz-option",10),t.YNc(2,ut,1,0,"nz-option",11),t.YNc(3,pt,1,0,"nz-option",12),t.qZA()}if(2&a){const e=t.oxw();t.Q6J("ngModel",e.newStatus),t.xp6(1),t.Q6J("ngIf","NEW"==e.currentStatus),t.xp6(1),t.Q6J("ngIf","NEW"!=e.currentStatus),t.xp6(1),t.Q6J("ngIf","NEW"==e.currentStatus)}}function mt(a,l){if(1&a){const e=t.EpF();t.TgZ(0,"nz-spin",16)(1,"cvc-form-buttons")(2,"cvc-org-selector-btn-group",17),t.NdJ("selectedOrgChange",function(s){t.CHM(e);const z=t.oxw();return t.KtG(z.mostRecentOrg=s)}),t.TgZ(3,"button",18),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.updateSourceSuggestionStatus())}),t._uU(4," Update Source Suggestion status "),t.qZA()()()()}if(2&a){const e=t.oxw();t.Q6J("nzSpinning",e.loading),t.xp6(2),t.Q6J("selectedOrg",e.mostRecentOrg),t.xp6(1),t.Q6J("disabled",e.loading)}}class ${constructor(l,e,u){this.viewerService=l,this.networkErrorService=e,this.updateSuggestionStatusGql=u,this.commentAddedEvent=new t.vpe,this.destroy$=new h.x,this.success=!1,this.errorMessages=[],this.loading=!1,this.viewerService.viewer$.pipe((0,W.R)(this.destroy$)).subscribe(s=>{this.organizations=s.organizations,this.mostRecentOrg=s.mostRecentOrg}),this.sourceSuggestionStatusMutator=new Y.U(e)}selectOrg(l){this.mostRecentOrg=l}updateSourceSuggestionStatus(){if(this.newStatus){let l=this.sourceSuggestionStatusMutator.mutate(this.updateSuggestionStatusGql,{input:{id:this.sourceSuggestionId,newStatus:this.newStatus,reason:this.reason,organizationId:this.mostRecentOrg?.id}});l.submitSuccess$.pipe((0,W.R)(this.destroy$)).subscribe(e=>{this.resetForm(),this.success=!0}),l.submitError$.pipe((0,W.R)(this.destroy$)).subscribe(e=>{e&&(this.errorMessages=e)}),l.isSubmitting$.pipe((0,W.R)(this.destroy$)).subscribe(e=>{this.loading=e})}}resetForm(){this.commentText=""}onSuccessBannerClose(){this.resetForm()}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}$.\u0275fac=function(l){return new(l||$)(t.Y36(N.a),t.Y36(k.Y),t.Y36(o.wRZ))},$.\u0275cmp=t.Xpm({type:$,selectors:[["cvc-update-source-suggestion-form"]],inputs:{sourceSuggestionId:"sourceSuggestionId",currentStatus:"currentStatus"},outputs:{commentAddedEvent:"commentAddedEvent"},decls:7,vars:2,consts:[["nzDirection","vertical"],["nzBanner","","nzMessage","Status Updated","nzType","success","nzCloseable","",3,"nzOnClose",4,"ngIf"],[3,"errors",4,"ngIf"],["rows","4","nz-input","",3,"ngModel","ngModelChange",4,"nzSpaceItem"],["nzPlaceHolder","New Status","required","true",3,"ngModel","ngModelChange",4,"nzSpaceItem"],["nzTip","Submitting",3,"nzSpinning",4,"nzSpaceItem"],["nzBanner","","nzMessage","Status Updated","nzType","success","nzCloseable","",3,"nzOnClose"],[3,"errors"],["rows","4","nz-input","",3,"ngModel","ngModelChange"],["nzPlaceHolder","New Status","required","true",3,"ngModel","ngModelChange"],["nzValue","CURATED","nzLabel","Curated",4,"ngIf"],["nzValue","NEW","nzLabel","New",4,"ngIf"],["nzValue","REJECTED","nzLabel","Rejected",4,"ngIf"],["nzValue","CURATED","nzLabel","Curated"],["nzValue","NEW","nzLabel","New"],["nzValue","REJECTED","nzLabel","Rejected"],["nzTip","Submitting",3,"nzSpinning"],[3,"selectedOrg","selectedOrgChange"],["type","submit","nz-button","","cvcOrgSelectorBtn","","nzType","primary","nzSize","small",3,"disabled","click"]],template:function(l,e){1&l&&(t.TgZ(0,"nz-card")(1,"nz-space",0),t.YNc(2,rt,1,0,"nz-alert",1),t.YNc(3,st,1,1,"cvc-form-errors-alert",2),t.YNc(4,it,1,1,"textarea",3),t.YNc(5,_t,4,4,"nz-select",4),t.YNc(6,mt,5,3,"nz-spin",5),t.qZA()()),2&l&&(t.xp6(2),t.Q6J("ngIf",e.success),t.xp6(1),t.Q6J("ngIf",e.errorMessages.length))},dependencies:[Z.O5,Q.Fj,Q.JJ,Q.Q7,g.ix,M.w,C.dQ,S.bd,tt.W,nt.r,et.Zp,i.Ip,i.Vq,q.NU,q.$1,Q.On,ot.V,at.m,ct.q,lt.Z],encapsulation:2});var F,dt=n(125),Ct=n(5105),vt=n(2635),ft=n(160);function Tt(a,l){}function zt(a,l){if(1&a&&(t.ynx(0),t.TgZ(1,"nz-card",6),t.YNc(2,Tt,0,0,"ng-template",7),t.qZA(),t.BQk()),2&a){t.oxw();const e=t.MAs(8),u=t.MAs(10),s=t.MAs(4);t.xp6(1),t.Q6J("nzTitle",e)("nzExtra",u),t.xp6(1),t.Q6J("ngTemplateOutlet",s)}}function ht(a,l){}const xt=function(a){return{height:a}};function Mt(a,l){if(1&a&&(t.TgZ(0,"div",8)(1,"nz-card",9),t.YNc(2,ht,0,0,"ng-template",7),t.qZA()()),2&a){const e=t.oxw(),u=t.MAs(8),s=t.MAs(10),z=t.MAs(4);t.Q6J("ngStyle",t.VKq(4,xt,e.cvcHeight)),t.xp6(1),t.Q6J("nzTitle",u)("nzExtra",s),t.xp6(1),t.Q6J("ngTemplateOutlet",z)}}function St(a,l){if(1&a){const e=t.EpF();t.TgZ(0,"cvc-clearable-input-filter",29),t.NdJ("inputModelChange",function(s){t.CHM(e);const z=t.oxw(2);return t.KtG(z.submitterInput=s)})("inputModelChange",function(){t.CHM(e);const s=t.oxw(2);return t.KtG(s.filterChange$.next())}),t.qZA()}if(2&a){const e=t.oxw(2);t.Q6J("inputModel",e.submitterInput)}}function Pt(a,l){if(1&a&&(t.ynx(0),t.TgZ(1,"nz-tag",51),t._uU(2),t.ALo(3,"lowercase"),t.qZA(),t.BQk()),2&a){const e=t.oxw().$implicit;t.xp6(2),t.hij(" ",t.lcZ(3,1,e.status)," ")}}function Et(a,l){if(1&a&&(t.ynx(0),t.TgZ(1,"nz-tag",52),t._uU(2),t.ALo(3,"lowercase"),t.qZA(),t.BQk()),2&a){const e=t.oxw().$implicit;t.xp6(2),t.hij(" ",t.lcZ(3,1,e.status)," ")}}function Ot(a,l){if(1&a&&t._UZ(0,"i",55),2&a){const e=t.oxw(2).$implicit,u=t.oxw(2);t.Q6J("nzTooltipTitle",u.isScrolling?"":e.reason)}}function It(a,l){if(1&a&&(t.ynx(0),t.TgZ(1,"nz-tag",53),t.YNc(2,Ot,1,1,"i",54),t._uU(3),t.ALo(4,"lowercase"),t.qZA(),t.BQk()),2&a){const e=t.oxw().$implicit;t.xp6(2),t.Q6J("ngIf",e.reason&&""!=e.reason),t.xp6(1),t.hij(" ",t.lcZ(4,2,e.status)," ")}}function yt(a,l){if(1&a&&t._UZ(0,"cvc-source-tag",56),2&a){const e=t.oxw().$implicit;t.Q6J("source",e.source)}}function At(a,l){if(1&a&&t._UZ(0,"cvc-user-tag",57),2&a){const e=t.oxw().$implicit;t.Q6J("user",e.user)}}function Zt(a,l){if(1&a&&(t.ynx(0),t._uU(1),t.BQk()),2&a){const e=t.oxw().$implicit;t.xp6(1),t.hij(" ",e.source.displayType," ")}}function Ut(a,l){if(1&a&&(t.ynx(0),t._uU(1),t.BQk()),2&a){const e=t.oxw().$implicit;t.xp6(1),t.hij(" ",e.source.citationId," ")}}function Dt(a,l){if(1&a&&t._UZ(0,"cvc-molecular-profile-tag",58),2&a){const e=t.oxw().$implicit;t.Q6J("molecularProfile",e.molecularProfile)}}function Jt(a,l){if(1&a&&t._UZ(0,"cvc-disease-tag",59),2&a){const e=t.oxw().$implicit;t.Q6J("disease",e.disease)("truncateLongName",!0)}}const Nt=function(a,l,e){return{molecularProfileId:a,sourceId:l,diseaseId:e}};function Lt(a,l){if(1&a){const e=t.EpF();t.TgZ(0,"nz-button-group")(1,"button",60),t._UZ(2,"i",61),t.qZA(),t.TgZ(3,"button",62),t.NdJ("click",function(){t.CHM(e);const s=t.oxw().$implicit,z=t.oxw(2);return t.KtG(z.setFormInputs(s.id,s.status))}),t._UZ(4,"i",63),t.qZA()()}if(2&a){const e=t.oxw().$implicit,u=t.oxw(2),s=t.MAs(6);t.xp6(1),t.Q6J("queryParams",t.kEZ(7,Nt,null==e.molecularProfile?null:e.molecularProfile.id,null==e.source?null:e.source.id,null==e.disease?null:e.disease.id))("disabled",e.status!=u.status.New)("nzTooltipTitle",u.isScrolling?"":"Create Evidence with this Source")("nzTooltipMouseEnterDelay",1),t.xp6(2),t.Q6J("nzTooltipTitle",u.isScrolling?"":"Manage Source Suggestion")("nzTooltipMouseEnterDelay",1)("nzPopoverContent",s)}}function Qt(a,l){1&a&&(t.ynx(0),t._uU(1," -- "),t.BQk())}function Bt(a,l){if(1&a&&(t.TgZ(0,"tr",39)(1,"td",40),t.ynx(2,41),t.ALo(3,"lowercase"),t.YNc(4,Pt,4,3,"ng-container",42),t.YNc(5,Et,4,3,"ng-container",42),t.YNc(6,It,5,4,"ng-container",42),t.BQk(),t.qZA(),t.TgZ(7,"td",24),t.YNc(8,yt,1,1,"cvc-source-tag",43),t.qZA(),t.TgZ(9,"td",44),t._UZ(10,"i",17),t.ALo(11,"entityColor"),t.qZA(),t.TgZ(12,"td"),t.YNc(13,At,1,1,"cvc-user-tag",45),t.qZA(),t.TgZ(14,"td"),t.YNc(15,Zt,2,1,"ng-container",46),t.qZA(),t.TgZ(16,"td"),t.YNc(17,Ut,2,1,"ng-container",46),t.qZA(),t.TgZ(18,"td"),t.YNc(19,Dt,1,1,"cvc-molecular-profile-tag",47),t.qZA(),t.TgZ(20,"td"),t.YNc(21,Jt,1,2,"cvc-disease-tag",48),t.qZA(),t.TgZ(22,"td",49),t._uU(23),t.ALo(24,"date"),t.qZA(),t.TgZ(25,"td",50),t.YNc(26,Lt,5,11,"nz-button-group",46),t.YNc(27,Qt,2,0,"ng-container",46),t.qZA()()),2&a){const e=l.$implicit,u=t.oxw(2);t.xp6(2),t.Q6J("ngSwitch",t.lcZ(3,15,e.status)),t.xp6(2),t.Q6J("ngSwitchCase","curated"),t.xp6(1),t.Q6J("ngSwitchCase","new"),t.xp6(1),t.Q6J("ngSwitchCase","rejected"),t.xp6(2),t.Q6J("ngIf",e.source),t.xp6(1),t.Q6J("nzTooltipTitle",u.isScrolling?"":e.initialComment),t.xp6(1),t.Q6J("nzTwotoneColor",t.lcZ(11,17,"Comment")),t.xp6(3),t.Q6J("ngIf",e.user),t.xp6(2),t.Q6J("ngIf",e.source),t.xp6(2),t.Q6J("ngIf",e.source),t.xp6(2),t.Q6J("ngIf",e.molecularProfile),t.xp6(2),t.Q6J("ngIf",e.disease),t.xp6(2),t.hij(" ",t.lcZ(24,19,e.createdAt)," "),t.xp6(3),t.Q6J("ngIf",u.isSignedIn),t.xp6(1),t.Q6J("ngIf",!u.isSignedIn)}}const Rt=function(){return[]},Kt=function(){return{x:"680px",y:"800px"}},Wt=function(){return["descend","ascend",null]};function bt(a,l){if(1&a){const e=t.EpF();t.TgZ(0,"nz-table",10,11),t.NdJ("cvcTableScrollOnScroll",function(s){t.CHM(e);const z=t.oxw();return t.KtG(z.scrollEvent$.next(s))}),t.ALo(2,"ngrxPush"),t.ALo(3,"ngrxPush"),t.ALo(4,"ngrxPush"),t.ALo(5,"ngrxPush"),t.TgZ(6,"thead",12),t.NdJ("nzSortOrderChange",function(s){t.CHM(e);const z=t.oxw();return t.KtG(z.sortChange$.next(s))}),t.TgZ(7,"tr",13)(8,"th",14),t._uU(9," Status "),t.qZA(),t.TgZ(10,"th",15),t._uU(11," Citation "),t.qZA(),t.TgZ(12,"th",16),t._UZ(13,"i",17),t.ALo(14,"entityColor"),t.qZA(),t.TgZ(15,"th",18),t._uU(16," Submitter "),t.qZA(),t.TgZ(17,"th",19),t._uU(18," Type "),t.qZA(),t.TgZ(19,"th",19),t._uU(20," ID "),t.qZA(),t.TgZ(21,"th",20),t._uU(22,"Molecular Profile"),t.qZA(),t.TgZ(23,"th",18),t._uU(24," Disease "),t.qZA(),t.TgZ(25,"th",21),t._uU(26," Submitted "),t.qZA(),t.TgZ(27,"th",22),t._uU(28," Actions "),t.qZA()(),t.TgZ(29,"tr",23)(30,"th",24)(31,"nz-select",25),t.NdJ("ngModelChange",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.filterChange$.next())})("ngModelChange",function(s){t.CHM(e);const z=t.oxw();return t.KtG(z.statusInput=s)}),t._UZ(32,"nz-option",26)(33,"nz-option",27)(34,"nz-option",28),t.qZA()(),t.TgZ(35,"th",24)(36,"cvc-clearable-input-filter",29),t.NdJ("inputModelChange",function(s){t.CHM(e);const z=t.oxw();return t.KtG(z.citationInput=s)})("inputModelChange",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.filterChange$.next())}),t.qZA()(),t._UZ(37,"th"),t.TgZ(38,"th"),t.YNc(39,St,1,1,"cvc-clearable-input-filter",30),t.qZA(),t.TgZ(40,"th")(41,"nz-select",31),t.NdJ("ngModelChange",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.filterChange$.next())})("ngModelChange",function(s){t.CHM(e);const z=t.oxw();return t.KtG(z.sourceTypeInput=s)}),t._UZ(42,"nz-option",32)(43,"nz-option",33),t.qZA()(),t.TgZ(44,"th")(45,"cvc-clearable-input-filter",34),t.NdJ("inputModelChange",function(s){t.CHM(e);const z=t.oxw();return t.KtG(z.citationIdInput=s)})("inputModelChange",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.filterChange$.next())}),t.qZA()(),t.TgZ(46,"th")(47,"cvc-clearable-input-filter",35),t.NdJ("inputModelChange",function(s){t.CHM(e);const z=t.oxw();return t.KtG(z.molecularProfileNameInput=s)})("inputModelChange",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.filterChange$.next())}),t.qZA()(),t.TgZ(48,"th")(49,"cvc-clearable-input-filter",36),t.NdJ("inputModelChange",function(s){t.CHM(e);const z=t.oxw();return t.KtG(z.diseaseNameInput=s)})("inputModelChange",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.filterChange$.next())}),t.qZA()(),t._UZ(50,"th")(51,"th",37),t.qZA()(),t.TgZ(52,"tbody"),t.YNc(53,Bt,28,21,"ng-template",38),t.qZA()()}if(2&a){const e=t.oxw();t.Q6J("nzData",t.lcZ(2,33,e.row$)||t.DdM(43,Rt))("nzLoading",!t.lcZ(3,35,e.row$))("cvcAutoHeightTable",25)("nzVirtualItemSize",29)("cvcTableScrollQueryRef",e.queryRef)("cvcTableScrollPageInfo",t.lcZ(4,37,e.pageInfo$))("cvcTableScrollToIndex",t.lcZ(5,39,e.scrollIndex$))("nzVirtualForTrackBy",e.trackByIndex)("nzScroll",t.DdM(44,Kt))("nzFrontPagination",!1)("nzShowPagination",!1),t.xp6(10),t.Q6J("nzColumnKey",e.sortColumns.Citation)("nzSortFn",!0),t.xp6(3),t.Q6J("nzTwotoneColor",t.lcZ(14,41,"Comment")),t.xp6(2),t.Q6J("nzColumnKey",e.sortColumns.Submitter)("nzSortFn",!0),t.xp6(2),t.Q6J("nzColumnKey",e.sortColumns.SourceType)("nzSortFn",!0),t.xp6(2),t.Q6J("nzColumnKey",e.sortColumns.CitationId)("nzSortFn",!0),t.xp6(4),t.Q6J("nzColumnKey",e.sortColumns.DiseaseName)("nzSortFn",!0),t.xp6(2),t.Q6J("nzColumnKey",e.sortColumns.CreatedAt)("nzSortDirections",t.DdM(45,Wt))("nzSortFn",!0),t.xp6(6),t.Q6J("nzDropdownMatchSelectWidth",!1)("ngModel",e.statusInput),t.xp6(5),t.Q6J("inputModel",e.citationInput),t.xp6(3),t.Q6J("ngIf",!e.submitterId),t.xp6(2),t.Q6J("ngModel",e.sourceTypeInput),t.xp6(4),t.Q6J("inputModel",e.citationIdInput),t.xp6(2),t.Q6J("inputModel",e.molecularProfileNameInput),t.xp6(2),t.Q6J("inputModel",e.diseaseNameInput)}}function Ft(a,l){if(1&a&&t._UZ(0,"cvc-update-source-suggestion-form",65),2&a){const e=t.oxw(2);t.Q6J("currentStatus",e.selectedStatus)("sourceSuggestionId",e.selectedSourceId)}}function Yt(a,l){if(1&a&&t.YNc(0,Ft,1,2,"cvc-update-source-suggestion-form",64),2&a){const e=t.oxw();t.Q6J("ngIf",e.selectedSourceId&&e.selectedStatus)}}function $t(a,l){}function wt(a,l){if(1&a&&(t.ynx(0),t.YNc(1,$t,0,0,"ng-template",7),t.BQk()),2&a){const e=t.oxw(2);t.xp6(1),t.Q6J("ngTemplateOutlet",e.cvcTitleTemplate)}}function jt(a,l){if(1&a&&(t.ynx(0),t._uU(1),t.BQk()),2&a){const e=t.oxw(2);t.xp6(1),t.hij(" ",e.cvcTitle," ")}}function Ht(a,l){if(1&a&&(t._UZ(0,"i",66),t.ALo(1,"entityColor"),t.YNc(2,wt,2,1,"ng-container",46),t.YNc(3,jt,2,1,"ng-container",46),t.TgZ(4,"span",67),t._UZ(5,"cvc-table-counts",68),t.qZA()),2&a){const e=t.oxw();t.Q6J("nzTwotoneColor",t.lcZ(1,4,"Source")),t.xp6(2),t.Q6J("ngIf",e.cvcTitleTemplate),t.xp6(1),t.Q6J("ngIf",e.cvcTitle),t.xp6(2),t.Q6J("cvcTableCountsConnection",e.connection$)}}function Vt(a,l){1&a&&(t.TgZ(0,"nz-tag",71),t._UZ(1,"i",72),t.TgZ(2,"span"),t._uU(3,"Loading\u2026"),t.qZA()())}function Gt(a,l){if(1&a&&(t.YNc(0,Vt,4,0,"nz-tag",69),t.ALo(1,"ngrxPush"),t._UZ(2,"cvc-no-more-rows",70),t.ALo(3,"ngrxPush")),2&a){const e=t.oxw();t.Q6J("ngIf",t.lcZ(1,2,e.moreLoading$)),t.xp6(2),t.Q6J("cvcShowTag",t.lcZ(3,4,e.noMoreRows$))}}let X=((F=class{set initialUserFilters(l){l&&Object.assign(this,l)}constructor(l,e,u){this.gql=l,this.viewerService=e,this.cdr=u,this.initialPageSize=35,this.isScrolling=!1,this.statusInput=o.F3s.New,this.sortColumns=o.jw9,this.status=o.F3s,this.showManageForm=!1,this.noMoreRows$=new _.X(!1),this.scrollEvent$=new _.X("stop"),this.sortChange$=new h.x,this.filterChange$=new h.x,this.scrollIndex$=new h.x,this.viewerService.viewer$.pipe((0,x.U)(s=>s.signedIn),(0,d.t)(this)).subscribe(s=>this.isSignedIn=s)}ngOnInit(){this.queryRef=this.gql.watch({first:this.initialPageSize,sourceId:this.sourceId,submitterId:this.submitterId,status:this.status.New,sortBy:{column:this.sortColumns.CreatedAt,direction:o.SrV.Desc}}),this.result$=this.queryRef.valueChanges,this.initialLoading$=this.result$.pipe((0,J.j)("loading"),(0,p.x)(),(0,A.o)(l=>!1!==l,!0)),this.moreLoading$=this.result$.pipe((0,J.j)("loading"),(0,p.x)(),(0,P.T)(2)),this.connection$=this.result$.pipe((0,J.j)("data","sourceSuggestions"),(0,f.h)(O.ep)),this.row$=this.connection$.pipe((0,J.j)("edges"),(0,f.h)(O.ep),(0,x.U)(l=>l.map(e=>e.node))),this.pageInfo$=this.connection$.pipe((0,J.j)("pageInfo"),(0,f.h)(O.ep)),this.sortChange$.pipe((0,d.t)(this)).subscribe(l=>{this.queryRef.refetch({sortBy:(0,c._)(l)})}),this.filterChange$.pipe((0,T.b)(500),(0,d.t)(this)).subscribe(()=>{this.refresh()}),this.scrollEvent$.pipe((0,x.U)(l=>"stop"!==l),(0,p.x)(),(0,d.t)(this)).subscribe(l=>{this.isScrolling=l,this.cdr.detectChanges()}),this.scrollEvent$.pipe((0,f.h)(l=>"bottom"===l),(0,I.M)(this.pageInfo$),(0,x.U)(([l,e])=>e),(0,d.t)(this)).subscribe(l=>{l.hasNextPage||(this.noMoreRows$.next(!0),this.cdr.detectChanges(),setInterval(()=>this.noMoreRows$.next(!1)))})}refresh(){this.queryRef.refetch({citationId:this.citationIdInput?+this.citationIdInput:void 0,sourceType:this.sourceTypeInput?this.sourceTypeInput:void 0,sourceId:this.sourceIdInput?+this.sourceIdInput:void 0,molecularProfileName:this.molecularProfileNameInput,diseaseName:this.diseaseNameInput,comment:this.commentInput,submitter:this.submitterInput,citation:this.citationInput,status:this.statusInput?this.statusInput:void 0}).then(()=>this.scrollIndex$.next(0)),this.cdr.detectChanges()}setFormInputs(l,e){this.selectedSourceId=l,this.selectedStatus=e,this.showManageForm=!0}closePopover(){this.showManageForm=!1}trackByIndex(l,e){return e?.id}}).\u0275fac=function(l){return new(l||F)(t.Y36(o.WRV),t.Y36(N.a),t.Y36(t.sBO))},F.\u0275cmp=t.Xpm({type:F,selectors:[["cvc-source-suggestions-table"]],inputs:{cvcHeight:"cvcHeight",sourceId:"sourceId",submitterId:"submitterId",cvcTitleTemplate:"cvcTitleTemplate",cvcTitle:"cvcTitle",initialPageSize:"initialPageSize",initialUserFilters:"initialUserFilters"},decls:11,vars:2,consts:[[4,"ngIf","ngIfElse"],["setHeightCard",""],["table",""],["manageSuggestionTemplate",""],["titleTemplate",""],["extraTemplate",""],["nzSize","small","cvcAutoHeightCard","","cvcAutoHeightTarget","viewport",3,"nzTitle","nzExtra"],[3,"ngTemplateOutlet"],[1,"card-container",3,"ngStyle"],["cvcAutoHeightCard","","nzSize","small",3,"nzTitle","nzExtra"],["nzSize","small","cvcTableScroll","",3,"nzData","nzLoading","cvcAutoHeightTable","nzVirtualItemSize","cvcTableScrollQueryRef","cvcTableScrollPageInfo","cvcTableScrollToIndex","nzVirtualForTrackBy","nzScroll","nzFrontPagination","nzShowPagination","cvcTableScrollOnScroll"],["virtualTable",""],[3,"nzSortOrderChange"],[1,"col-header-row"],["nzWidth","100px","nzLeft",""],["nzWidth","425px","nzLeft","",3,"nzColumnKey","nzSortFn"],["nzWidth","24px","nzAlign","center","nz-tooltip","","nzTooltipTitle","Submitter Comment"],["nz-icon","","nzTheme","twotone","nzType","civic-comment",3,"nzTwotoneColor"],["nzWidth","200px",3,"nzColumnKey","nzSortFn"],["nzWidth","80px",3,"nzColumnKey","nzSortFn"],["nzWidth","290px"],["nzWidth","90px","nzSortOrder","descend",3,"nzColumnKey","nzSortDirections","nzSortFn"],["nzWidth","70px","nzRight","","nzAlign","center"],[1,"filter-row"],["nzLeft",""],["nzAllowClear","","nzSize","small","nzPlaceHolder","Any",3,"nzDropdownMatchSelectWidth","ngModel","ngModelChange"],["nzValue","NEW","nzLabel","new"],["nzValue","CURATED","nzLabel","curated"],["nzValue","REJECTED","nzLabel","rejected"],[3,"inputModel","inputModelChange"],[3,"inputModel","inputModelChange",4,"ngIf"],["nzAllowClear","","nzSize","small","nzPlaceHolder","Any",3,"ngModel","ngModelChange"],["nzValue","PUBMED","nzLabel","PubMed"],["nzValue","ASCO","nzLabel","ASCO"],["placeholderText","ID",3,"inputModel","inputModelChange"],["placeholderText","Molecular Profile",3,"inputModel","inputModelChange"],["placeholderText","Disease",3,"inputModel","inputModelChange"],["nzRight",""],["nz-virtual-scroll",""],[1,"data-row"],["nzLeft","","nzAlign","center"],[3,"ngSwitch"],[4,"ngSwitchCase"],[3,"source",4,"ngIf"],["nzAlign","center","nz-tooltip","","nzTooltipPlacement","top",3,"nzTooltipTitle"],[3,"user",4,"ngIf"],[4,"ngIf"],[3,"molecularProfile",4,"ngIf"],[3,"disease","truncateLongName",4,"ngIf"],["nzAlign","right"],["nzRight","","nzAlign","center",1,"button-cell"],["nzColor","green",1,"status-tag"],["nzColor","orange",1,"status-tag"],["nzColor","volcano",1,"status-tag"],["nz-icon","","nz-tooltip","","nzType","civic-comment",3,"nzTooltipTitle",4,"ngIf"],["nz-icon","","nz-tooltip","","nzType","civic-comment",3,"nzTooltipTitle"],[3,"source"],[3,"user"],[3,"molecularProfile"],[3,"disease","truncateLongName"],["routerLink","/evidence/add/submit","nz-button","","nzSize","small","nz-tooltip","",3,"queryParams","disabled","nzTooltipTitle","nzTooltipMouseEnterDelay"],["nz-icon","","nzType","civic-evidence"],["nz-button","","nzSize","small","nz-popover","","nzPopoverTitle","Manage Source Suggestion","nzPopoverPlacement","left","nzPopoverTrigger","click","nz-tooltip","","nzTooltipPlacement","top",3,"nzTooltipTitle","nzTooltipMouseEnterDelay","nzPopoverContent","click"],["nz-icon","","nzType","civic-source"],[3,"currentStatus","sourceSuggestionId",4,"ngIf"],[3,"currentStatus","sourceSuggestionId"],["nz-icon","","nzTheme","twotone","nzType","civic-source",3,"nzTwotoneColor"],[1,"table-info"],[3,"cvcTableCountsConnection"],["nzColor","processing",4,"ngIf"],[3,"cvcShowTag"],["nzColor","processing"],["nz-icon","","nzType","sync","nzSpin",""]],template:function(l,e){if(1&l&&(t.YNc(0,zt,3,3,"ng-container",0),t.YNc(1,Mt,3,6,"ng-template",null,1,t.W1O),t.YNc(3,bt,54,46,"ng-template",null,2,t.W1O),t.YNc(5,Yt,1,1,"ng-template",null,3,t.W1O),t.YNc(7,Ht,6,6,"ng-template",null,4,t.W1O),t.YNc(9,Gt,4,6,"ng-template",null,5,t.W1O)),2&l){const u=t.MAs(2);t.Q6J("ngIf",!e.cvcHeight)("ngIfElse",u)}},dependencies:[Z.O5,Z.tP,Z.PC,Z.RF,Z.n9,Q.JJ,Q.On,U.rH,g.ix,g.fY,M.w,C.dQ,S.bd,L.Ls,D.lU,i.Ip,i.Vq,m.N8,m.qD,m.Uo,m._C,m.Om,m.p0,m.$Z,m.zu,m.qn,m.UX,v.j,y.SY,B.y,b.B,w.H,j.D,H.q,V.p,G.n,K.T,$,dt.I,Ct.p,Z.i8,Z.uU,vt.fM,ft.a],styles:["[_nghost-%COMP%]{display:block}nz-card[_ngcontent-%COMP%]:first-of-type     .ant-card-body{padding:0;margin-top:1px}.table-info[_ngcontent-%COMP%]{margin-left:.5rem}tr.col-header-row[_ngcontent-%COMP%]   th.ant-table-cell[_ngcontent-%COMP%]{white-space:nowrap}tr.col-header-row[_ngcontent-%COMP%]   th.ant-table-cell.align-right[_ngcontent-%COMP%]     .ant-table-column-title{text-align:right}tr.filter-row[_ngcontent-%COMP%]   th.ant-table-cell[_ngcontent-%COMP%]{padding:3px 4px}tr.filter-row[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   nz-filter-trigger[_ngcontent-%COMP%]     span.ant-dropdown-trigger{margin-left:0;padding-right:12px}tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell[_ngcontent-%COMP%]{white-space:nowrap}tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell[_ngcontent-%COMP%]   .anticon.attribute-icon[_ngcontent-%COMP%]{color:#595959}tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell.overflow-ellipsis[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis}tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell.button-cell[_ngcontent-%COMP%]{padding:0}tr.data-row[_ngcontent-%COMP%]   td.align-right[_ngcontent-%COMP%], tr.col-header-row[_ngcontent-%COMP%]   th.ant-table-cell[_ngcontent-%COMP%]   .align-right[_ngcontent-%COMP%], tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell[_ngcontent-%COMP%]   .align-right[_ngcontent-%COMP%], tr.filter-row[_ngcontent-%COMP%]   th.ant-table-cell[_ngcontent-%COMP%]   .align-right[_ngcontent-%COMP%]{text-align:right}.status-tag[_ngcontent-%COMP%]{display:block}"],changeDetection:0}),F);X=(0,r.gn)([(0,d.c)()],X)},2832:(R,E,n)=>{n.d(E,{W:()=>K});var r=n(6895),c=n(4006),o=n(9116),d=n(8845),_=n(4126),h=n(4125),O=n(2994),x=n(8525),p=n(2811),A=n(7345),P=n(9444),f=n(3111),T=n(1433),I=n(9240),J=n(7008),t=n(6212),N=n(1971),Z=n(6704),Q=n(1825),U=n(4375),g=n(6616),M=n(3513),C=n(2635),S=n(5681),L=n(9597),D=n(5635),i=n(8231),m=n(4509),v=n(6903),y=n(4650);class B{}B.\u0275fac=function(Y){return new(Y||B)},B.\u0275mod=y.oAB({type:B}),B.\u0275inj=y.cJS({imports:[r.ez,c.UX,C._N,C.pP,g.sL,N.vh,M.we,Z.U5,S.j,L.L,D.o7,i.LV,v.zf,c.u5,t.X0,J.B,Q.A,U.R,m.w]});var b=n(1102),w=n(6581),j=n(6675),H=n(6672),V=n(7570),G=n(8823);class K{}K.\u0275fac=function(Y){return new(Y||K)},K.\u0275mod=y.oAB({type:K}),K.\u0275inj=y.cJS({imports:[r.ez,c.u5,C._N,C.pP,o.Bz,g.sL,N.vh,b.PV,w.$6,i.LV,j.HQ,H.X,V.cg,G.ZJ,I.w,x.T,O.y,f.n,T.c,h.k,d.Q,J.B,P.s,p.s,B,A.W,_.u]})},2811:(R,E,n)=>{n.d(E,{s:()=>p});var r=n(6895),c=n(6581),o=n(9116),d=n(9736),_=n(6672),h=n(1102),O=n(9444),x=n(4650);class p{}p.\u0275fac=function(P){return new(P||p)},p.\u0275mod=x.oAB({type:p}),p.\u0275inj=x.cJS({imports:[r.ez,o.Bz,h.PV,c.$6,_.X,d.n,O.s]})},7677:(R,E,n)=>{n.d(E,{G:()=>t});var r=n(6895),c=n(9116),o=n(6581),d=n(6672),_=n(1102),h=n(897),O=n(2811),x=n(4867),p=n(9444),A=n(2635),P=n(1971),f=n(9194),T=n(4650);class I{}I.\u0275fac=function(Z){return new(Z||I)},I.\u0275mod=T.oAB({type:I}),I.\u0275inj=T.cJS({imports:[r.ez,A._N,A.pP,P.vh,f.q6,_.PV,O.s,x.Q,h.$,p.s]});var J=n(6429);class t{}t.\u0275fac=function(Z){return new(Z||t)},t.\u0275mod=T.oAB({type:t}),t.\u0275inj=T.cJS({imports:[r.ez,c.Bz,o.$6,d.X,_.PV,I,p.s,J.C]})},4475:(R,E,n)=>{n.d(E,{F:()=>o});var c=n(4650);class o{transform(_,h="display-string"){return void 0===_?"":"display-string"===h?function r(d){switch(d){case"COMBINATION":return"Combination";case"SEQUENTIAL":return"Sequential";case"SUBSTITUTES":return"Substitutes";default:return d}}(_):`civic-${_.replace(/_/g,"").toLowerCase()}`}}o.\u0275fac=function(_){return new(_||o)},o.\u0275pipe=c.Yjl({name:"therapyInteractionEnumDisplay",type:o,pure:!0})}}]);