"use strict";(self.webpackChunkmain=self.webpackChunkmain||[]).push([[1679],{9180:(M,m,o)=>{o.d(m,{Z:()=>c});var n=o(5e3);const t=["*"];let c=(()=>{class s{constructor(){}ngOnInit(){}}return s.\u0275fac=function(l){return new(l||s)},s.\u0275cmp=n.Xpm({type:s,selectors:[["cvc-form-buttons"]],ngContentSelectors:t,decls:2,vars:0,consts:[[1,"form-buttons"]],template:function(l,z){1&l&&(n.F$t(),n.TgZ(0,"div",0),n.Hsn(1),n.qZA())},styles:["[_nghost-%COMP%]{display:block}.form-buttons[_ngcontent-%COMP%]{text-align:right}"]}),s})()},4375:(M,m,o)=>{o.d(m,{R:()=>c});var n=o(9808),t=o(5e3);let c=(()=>{class s{}return s.\u0275fac=function(l){return new(l||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[[n.ez]]}),s})()},8227:(M,m,o)=>{o.d(m,{q:()=>d});var n=o(5e3),t=o(8929),c=o(4850),s=o(373),_=o(2868),l=o(7625),z=o(1793),u=o(9350),v=o(9808),h=o(6042),p=o(2683),O=o(2643),C=o(3677),f=o(8144),E=o(6699),D=o(4219);function B(e,r){1&e&&n.Hsn(0)}function S(e,r){1&e&&n.GkF(0)}function P(e,r){if(1&e&&(n.ynx(0),n.YNc(1,S,1,0,"ng-container",5),n.BQk()),2&e){n.oxw(2);const a=n.MAs(1);n.xp6(1),n.Q6J("ngTemplateOutlet",a)}}function T(e,r){1&e&&n.GkF(0)}function A(e,r){if(1&e&&(n.ynx(0),n.TgZ(1,"nz-button-group",6),n.YNc(2,T,1,0,"ng-container",5),n.TgZ(3,"button",7),n.TgZ(4,"nz-space",8),n.TgZ(5,"span"),n._uU(6,"for"),n.qZA(),n._UZ(7,"nz-avatar",9),n._UZ(8,"i",10),n.qZA(),n.qZA(),n.qZA(),n.BQk()),2&e){n.oxw();const a=n.MAs(4),g=n.oxw(),x=n.MAs(1);n.xp6(1),n.Q6J("nzSize",g.nzSize),n.xp6(1),n.Q6J("ngTemplateOutlet",x),n.xp6(1),n.Q6J("nzType",g.buttonType)("nzDanger",g.nzDanger)("disabled",g.disabled)("nzDropdownMenu",a),n.xp6(1),n.Q6J("nzSize",4),n.xp6(3),n.Q6J("nzSrc",null==g.selectedOrg?null:g.selectedOrg.profileImagePath)("nzSize",10)("nzShape","square")}}function I(e,r){if(1&e){const a=n.EpF();n.TgZ(0,"li",11),n.NdJ("click",function(){const y=n.CHM(a).$implicit;return n.oxw(2).selectOrg(y)}),n._UZ(1,"nz-avatar",12),n._uU(2),n.qZA()}if(2&e){const a=r.$implicit,g=n.oxw(2);n.Q6J("nzSelected",(null==g.selectedOrg?null:g.selectedOrg.id)===a.id),n.xp6(1),n.Q6J("nzSrc",null==a?null:a.profileImagePath)("nzSize",10)("nzShape","square"),n.xp6(1),n.hij(" ",a.name," ")}}function U(e,r){if(1&e&&(n.ynx(0),n.YNc(1,P,2,1,"ng-container",1),n.YNc(2,A,9,10,"ng-container",1),n.TgZ(3,"nz-dropdown-menu",null,2),n.TgZ(5,"ul",3),n.YNc(6,I,3,5,"li",4),n.qZA(),n.qZA(),n.BQk()),2&e){const a=r.ngIf;n.xp6(1),n.Q6J("ngIf",a.length<=1),n.xp6(1),n.Q6J("ngIf",a.length>1),n.xp6(4),n.Q6J("ngForOf",a)}}const i=["*"];let d=(()=>{class e{constructor(a){this.viewerService=a,this.selectedOrgChange=new n.vpe,this.buttonType="primary",this.nzDanger=!1,this.nzSize="small",this.destroy$=new t.xQ}get disabled(){return this.button.disabled}selectOrg(a){this.selectedOrg=a,this.selectedOrgChange.emit(a)}refreshViewer(){setTimeout(()=>{this.viewerService.refetch()},2500)}ngOnInit(){this.organizations$=this.viewerService.viewer$.pipe((0,c.U)(a=>a.organizations)),this.mostRecentOrg$=this.viewerService.viewer$.pipe((0,s.j)("mostRecentOrg"),(0,_.b)(a=>{a&&(this.selectedOrg=a,this.selectedOrgChange.emit(a))})),this.mostRecentOrg$.pipe((0,l.R)(this.destroy$)).subscribe()}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return e.\u0275fac=function(a){return new(a||e)(n.Y36(u.a))},e.\u0275cmp=n.Xpm({type:e,selectors:[["cvc-org-selector-btn-group"]],contentQueries:function(a,g,x){if(1&a&&n.Suo(x,z.m,5),2&a){let y;n.iGM(y=n.CRH())&&(g.button=y.first)}},inputs:{selectedOrg:"selectedOrg",buttonType:"buttonType",nzDanger:"nzDanger",nzSize:"nzSize"},outputs:{selectedOrgChange:"selectedOrgChange"},ngContentSelectors:i,decls:4,vars:3,consts:[["submitButton",""],[4,"ngIf"],["orgMenu","nzDropdownMenu"],["nz-menu",""],["nz-menu-item","",3,"nzSelected","click",4,"ngFor","ngForOf"],[4,"ngTemplateOutlet"],[3,"nzSize"],["type","button","nz-button","","nz-dropdown","",1,"org-dropdown-btn",3,"nzType","nzDanger","disabled","nzDropdownMenu"],["nzDirection","horizontal",3,"nzSize"],[3,"nzSrc","nzSize","nzShape"],["nz-icon","","nzType","down"],["nz-menu-item","",3,"nzSelected","click"],[2,"background-color","#f0f5ff",3,"nzSrc","nzSize","nzShape"]],template:function(a,g){1&a&&(n.F$t(),n.YNc(0,B,1,0,"ng-template",null,0,n.W1O),n.YNc(2,U,7,3,"ng-container",1),n.ALo(3,"async")),2&a&&(n.xp6(2),n.Q6J("ngIf",n.lcZ(3,1,g.organizations$)))},directives:[v.O5,v.tP,h.fY,p.w,h.ix,O.dQ,C.wA,C.cm,f.NU,E.Dz,C.RR,D.wO,v.sg,D.r9],pipes:[v.Ov],styles:["[_nghost-%COMP%]{display:inline-block}.org-dropdown-btn[_ngcontent-%COMP%]   nz-avatar[_ngcontent-%COMP%]{margin:0 6px}"]}),e})()},1825:(M,m,o)=>{o.d(m,{A:()=>z});var n=o(9808),t=o(6042),c=o(6699),s=o(3677),_=o(8144),l=o(5e3);let z=(()=>{class u{}return u.\u0275fac=function(h){return new(h||u)},u.\u0275mod=l.oAB({type:u}),u.\u0275inj=l.cJS({imports:[[n.ez,t.sL,c.Rt,s.b1,_.zf]]}),u})()},1793:(M,m,o)=>{o.d(m,{m:()=>t});var n=o(5e3);let t=(()=>{class c{constructor(_){this.el=_,this.observer=new MutationObserver(([l])=>this.disabled=l.target.disabled),this.observer.observe(this.el.nativeElement,{attributeFilter:["disabled"],childList:!1,subtree:!1})}ngOnDestroy(){this.observer.disconnect()}}return c.\u0275fac=function(_){return new(_||c)(n.Y36(n.SBq))},c.\u0275dir=n.lG2({type:c,selectors:[["button","cvcOrgSelectorBtn",""]],hostVars:2,hostBindings:function(_,l){2&_&&n.ekj("ant-btn-dangerous",l.nzDanger)}}),c})()},4623:(M,m,o)=>{o.d(m,{K:()=>h});var n=o(9808),t=o(8776),c=o(5e3),s=o(1047),_=o(4182);const z={name:"comment-textarea",component:(()=>{class p extends t.fS{constructor(){super(...arguments),this.defaultOptions={defaultValue:"",validation:{messages:{minlength:(C,f)=>{var E;return`Comments must be at least ${null===(E=f.templateOptions)||void 0===E?void 0:E.minLength} characters in length.`}}},templateOptions:{rows:4}}}}return p.\u0275fac=function(){let O;return function(f){return(O||(O=c.n5z(p)))(f||p)}}(),p.\u0275cmp=c.Xpm({type:p,selectors:[["comment-textarea-type"]],features:[c.qOj],decls:1,vars:2,consts:[["nz-input","",3,"formControl","formlyAttributes"]],template:function(C,f){1&C&&c._UZ(0,"textarea",0),2&C&&c.Q6J("formControl",f.formControl)("formlyAttributes",f.field)},directives:[s.Zp,_.Fj,_.JJ,_.oH,t.VQ],styles:[""],changeDetection:0}),p})(),wrappers:["form-field"]};var u=o(4546),v=o(9139);let h=(()=>{class p{}return p.\u0275fac=function(C){return new(C||p)},p.\u0275mod=c.oAB({type:p}),p.\u0275inj=c.cJS({imports:[[n.ez,_.UX,t.X0.forChild({types:[z]}),v.u,u.U5,s.o7]]}),p})()},5482:(M,m,o)=>{o.d(m,{yH:()=>T,cD:()=>U,Zv:()=>I});var n=o(655),t=o(5e3),c=o(8929),s=o(7625),_=o(8076),l=o(9439),z=o(1721),u=o(226),v=o(4832),h=o(9808),p=o(969),O=o(647);const C=["*"];function f(i,d){if(1&i&&(t.ynx(0),t._UZ(1,"i",6),t.BQk()),2&i){const e=d.$implicit,r=t.oxw(2);t.xp6(1),t.Q6J("nzType",e||"right")("nzRotate",r.nzActive?90:0)}}function E(i,d){if(1&i&&(t.TgZ(0,"div"),t.YNc(1,f,2,2,"ng-container",2),t.qZA()),2&i){const e=t.oxw();t.xp6(1),t.Q6J("nzStringTemplateOutlet",e.nzExpandedIcon)}}function D(i,d){if(1&i&&(t.ynx(0),t._uU(1),t.BQk()),2&i){const e=t.oxw();t.xp6(1),t.Oqu(e.nzHeader)}}function B(i,d){if(1&i&&(t.ynx(0),t._uU(1),t.BQk()),2&i){const e=t.oxw(2);t.xp6(1),t.Oqu(e.nzExtra)}}function S(i,d){if(1&i&&(t.TgZ(0,"div",7),t.YNc(1,B,2,1,"ng-container",2),t.qZA()),2&i){const e=t.oxw();t.xp6(1),t.Q6J("nzStringTemplateOutlet",e.nzExtra)}}const P="collapse";let T=(()=>{class i{constructor(e,r,a){this.nzConfigService=e,this.cdr=r,this.directionality=a,this._nzModuleName=P,this.nzAccordion=!1,this.nzBordered=!0,this.nzGhost=!1,this.nzExpandIconPosition="left",this.dir="ltr",this.listOfNzCollapsePanelComponent=[],this.destroy$=new c.xQ,this.nzConfigService.getConfigChangeEventForComponent(P).pipe((0,s.R)(this.destroy$)).subscribe(()=>{this.cdr.markForCheck()})}ngOnInit(){var e;null===(e=this.directionality.change)||void 0===e||e.pipe((0,s.R)(this.destroy$)).subscribe(r=>{this.dir=r,this.cdr.detectChanges()}),this.dir=this.directionality.value}addPanel(e){this.listOfNzCollapsePanelComponent.push(e)}removePanel(e){this.listOfNzCollapsePanelComponent.splice(this.listOfNzCollapsePanelComponent.indexOf(e),1)}click(e){this.nzAccordion&&!e.nzActive&&this.listOfNzCollapsePanelComponent.filter(r=>r!==e).forEach(r=>{r.nzActive&&(r.nzActive=!1,r.nzActiveChange.emit(r.nzActive),r.markForCheck())}),e.nzActive=!e.nzActive,e.nzActiveChange.emit(e.nzActive)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(l.jY),t.Y36(t.sBO),t.Y36(u.Is,8))},i.\u0275cmp=t.Xpm({type:i,selectors:[["nz-collapse"]],hostAttrs:[1,"ant-collapse"],hostVars:10,hostBindings:function(e,r){2&e&&t.ekj("ant-collapse-icon-position-left","left"===r.nzExpandIconPosition)("ant-collapse-icon-position-right","right"===r.nzExpandIconPosition)("ant-collapse-ghost",r.nzGhost)("ant-collapse-borderless",!r.nzBordered)("ant-collapse-rtl","rtl"===r.dir)},inputs:{nzAccordion:"nzAccordion",nzBordered:"nzBordered",nzGhost:"nzGhost",nzExpandIconPosition:"nzExpandIconPosition"},exportAs:["nzCollapse"],ngContentSelectors:C,decls:1,vars:0,template:function(e,r){1&e&&(t.F$t(),t.Hsn(0))},encapsulation:2,changeDetection:0}),(0,n.gn)([(0,l.oS)(),(0,z.yF)()],i.prototype,"nzAccordion",void 0),(0,n.gn)([(0,l.oS)(),(0,z.yF)()],i.prototype,"nzBordered",void 0),(0,n.gn)([(0,l.oS)(),(0,z.yF)()],i.prototype,"nzGhost",void 0),i})();const A="collapsePanel";let I=(()=>{class i{constructor(e,r,a,g){this.nzConfigService=e,this.cdr=r,this.nzCollapseComponent=a,this.noAnimation=g,this._nzModuleName=A,this.nzActive=!1,this.nzDisabled=!1,this.nzShowArrow=!0,this.nzActiveChange=new t.vpe,this.destroy$=new c.xQ,this.nzConfigService.getConfigChangeEventForComponent(A).pipe((0,s.R)(this.destroy$)).subscribe(()=>{this.cdr.markForCheck()})}clickHeader(){this.nzDisabled||this.nzCollapseComponent.click(this)}markForCheck(){this.cdr.markForCheck()}ngOnInit(){this.nzCollapseComponent.addPanel(this)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete(),this.nzCollapseComponent.removePanel(this)}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(l.jY),t.Y36(t.sBO),t.Y36(T,1),t.Y36(v.P,8))},i.\u0275cmp=t.Xpm({type:i,selectors:[["nz-collapse-panel"]],hostAttrs:[1,"ant-collapse-item"],hostVars:6,hostBindings:function(e,r){2&e&&t.ekj("ant-collapse-no-arrow",!r.nzShowArrow)("ant-collapse-item-active",r.nzActive)("ant-collapse-item-disabled",r.nzDisabled)},inputs:{nzActive:"nzActive",nzDisabled:"nzDisabled",nzShowArrow:"nzShowArrow",nzExtra:"nzExtra",nzHeader:"nzHeader",nzExpandedIcon:"nzExpandedIcon"},outputs:{nzActiveChange:"nzActiveChange"},exportAs:["nzCollapsePanel"],ngContentSelectors:C,decls:7,vars:8,consts:[["role","button",1,"ant-collapse-header",3,"click"],[4,"ngIf"],[4,"nzStringTemplateOutlet"],["class","ant-collapse-extra",4,"ngIf"],[1,"ant-collapse-content"],[1,"ant-collapse-content-box"],["nz-icon","",1,"ant-collapse-arrow",3,"nzType","nzRotate"],[1,"ant-collapse-extra"]],template:function(e,r){1&e&&(t.F$t(),t.TgZ(0,"div",0),t.NdJ("click",function(){return r.clickHeader()}),t.YNc(1,E,2,1,"div",1),t.YNc(2,D,2,1,"ng-container",2),t.YNc(3,S,2,1,"div",3),t.qZA(),t.TgZ(4,"div",4),t.TgZ(5,"div",5),t.Hsn(6),t.qZA(),t.qZA()),2&e&&(t.uIk("aria-expanded",r.nzActive),t.xp6(1),t.Q6J("ngIf",r.nzShowArrow),t.xp6(1),t.Q6J("nzStringTemplateOutlet",r.nzHeader),t.xp6(1),t.Q6J("ngIf",r.nzExtra),t.xp6(1),t.ekj("ant-collapse-content-active",r.nzActive),t.Q6J("@.disabled",null==r.noAnimation?null:r.noAnimation.nzNoAnimation)("@collapseMotion",r.nzActive?"expanded":"hidden"))},directives:[h.O5,p.f,O.Ls],encapsulation:2,data:{animation:[_.J_]},changeDetection:0}),(0,n.gn)([(0,z.yF)()],i.prototype,"nzActive",void 0),(0,n.gn)([(0,z.yF)()],i.prototype,"nzDisabled",void 0),(0,n.gn)([(0,l.oS)(),(0,z.yF)()],i.prototype,"nzShowArrow",void 0),i})(),U=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[u.vT,h.ez,O.PV,p.T,v.g]]}),i})()}}]);