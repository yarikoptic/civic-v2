"use strict";(self.webpackChunkmain=self.webpackChunkmain||[]).push([[605],{8616:(J,I,e)=>{e.d(I,{u:()=>n});var s=e(5e3),v=e(685),z=e(1912),V=e(3618),M=e(647);function t(u,x){1&u&&(s.TgZ(0,"span"),s._uU(1," You must be logged in to view this page. "),s.qZA())}function y(u,x){1&u&&s._UZ(0,"cvc-login-button")}function f(u,x){1&u&&(s.TgZ(0,"nz-typography",4),s._UZ(1,"i",5),s.qZA())}let n=(()=>{class u{}return u.\u0275fac=function(h){return new(h||u)},u.\u0275cmp=s.Xpm({type:u,selectors:[["cvc-login-prompt"]],decls:7,vars:3,consts:[[3,"nzNotFoundImage","nzNotFoundContent","nzNotFoundFooter"],["contentTpl",""],["footerTpl",""],["emptyImage",""],["nzType","secondary"],["nz-icon","","nzType","login","nzTheme","outline",2,"font-size","50pt"]],template:function(h,C){if(1&h&&(s.TgZ(0,"nz-empty",0),s.YNc(1,t,2,0,"ng-template",null,1,s.W1O),s.YNc(3,y,1,0,"ng-template",null,2,s.W1O),s.qZA(),s.YNc(5,f,2,0,"ng-template",null,3,s.W1O)),2&h){const G=s.MAs(2),R=s.MAs(4),A=s.MAs(6);s.Q6J("nzNotFoundImage",A)("nzNotFoundContent",G)("nzNotFoundFooter",R)}},directives:[v.p9,z.s,V.ZU,M.Ls],styles:["[_nghost-%COMP%]{display:inline-block}"]}),u})()},9386:(J,I,e)=>{e.d(I,{a:()=>y});var s=e(9808),v=e(1844),z=e(685),V=e(647),M=e(3618),t=e(5e3);let y=(()=>{class f{}return f.\u0275fac=function(u){return new(u||f)},f.\u0275mod=t.oAB({type:f}),f.\u0275inj=t.cJS({imports:[[s.ez,v.B,z.Xo,V.PV,M.ZJ]]}),f})()},4181:(J,I,e)=>{e.d(I,{O:()=>tt});var s=e(9808),v=e(6123),z=e(8776),V=e(8929),M=e(591),t=e(373),y=e(4850),f=e(7625),n=e(5e3),u=e(712),x=e(9169),h=e(8054),C=e(4182),G=e(8664),R=e(822),A=e(6042),N=e(2643),Y=e(2683),T=e(647),P=e(6949),F=e(8926);function D(i,m){if(1&i&&(n.TgZ(0,"nz-option",6),n._UZ(1,"span",7),n.ALo(2,"highlightTypeahead"),n.qZA()),2&i){const a=m.$implicit,d=n.oxw(2);n.Q6J("nzValue",a.variant),n.xp6(1),n.Q6J("innerHtml",n.xi3(2,2,a.label,d.to.searchString),n.oJD)}}function L(i,m){1&i&&n._uU(0," No variant found in CIViC that matches the string provided. ")}function $(i,m){if(1&i){const a=n.EpF();n.ynx(0),n.TgZ(1,"nz-select",3),n.NdJ("nzOnSearch",function(p){return n.CHM(a),n.oxw().to.onSearch(p)}),n.YNc(2,D,3,5,"nz-option",4),n.ALo(3,"ngrxPush"),n.qZA(),n.YNc(4,L,1,0,"ng-template",null,5,n.W1O),n.BQk()}if(2&i){const a=n.MAs(5),d=n.oxw(),p=n.MAs(4);n.xp6(1),n.Q6J("formControl",d.formControl)("formlyAttributes",d.field)("nzPlaceHolder",d.to.placeholder?d.to.placeholder:null)("nzDropdownRender",d.to.allowCreate?p:null)("nzNotFoundContent",a)("nzShowArrow",d.to.showArrow),n.xp6(1),n.Q6J("ngForOf",n.lcZ(3,7,d.variants$))}}function B(i,m){if(1&i&&n._UZ(0,"cvc-variant-tag",8),2&i){const a=n.oxw();n.Q6J("variant",a.formControl.value)}}function w(i,m){if(1&i&&n._UZ(0,"cvc-form-errors-alert",12),2&i){const a=n.oxw(4);n.Q6J("errors",a.errorMessages)}}function W(i,m){if(1&i){const a=n.EpF();n.TgZ(0,"button",13),n.NdJ("click",function(){n.CHM(a);const p=n.oxw(4);return p.addVariant(p.to.searchString)}),n._UZ(1,"i",14),n._uU(2,"No Existing CIViC Variant\xa0"),n.TgZ(3,"strong"),n._uU(4),n.qZA(),n._uU(5,"\xa0found. Create A New Variant? "),n.qZA()}if(2&i){const a=n.oxw(4);n.Q6J("nzLoading",a.loading),n.xp6(4),n.Oqu(a.to.searchString)}}function j(i,m){if(1&i&&(n.ynx(0),n.YNc(1,w,1,1,"cvc-form-errors-alert",10),n.YNc(2,W,6,2,"button",11),n.BQk()),2&i){const a=n.oxw(3);n.xp6(1),n.Q6J("ngIf",a.errorMessages.length>0),n.xp6(1),n.Q6J("ngIf",0==a.errorMessages.length)}}function K(i,m){if(1&i&&(n.ynx(0),n.YNc(1,j,3,2,"ng-container",9),n.BQk()),2&i){const a=n.oxw(2);n.xp6(1),n.Q6J("ngIf",""!==a.to.searchString)}}function X(i,m){if(1&i&&(n.YNc(0,K,2,1,"ng-container",9),n.ALo(1,"ngrxPush")),2&i){const a=n.oxw();n.Q6J("ngIf",n.lcZ(1,1,a.displayAdd$))}}const H={name:"variant-input",component:(()=>{class i extends z.fS{constructor(a,d,p){super(),this.variantTypeaheadQuery=a,this.networkErrorService=d,this.addVariantGQL=p,this.destroy$=new V.xQ,this.success=!1,this.errorMessages=[],this.loading=!1,this.displayAdd$=new M.X(!1),this.addVariantMutator=new v.U(d),this.defaultOptions={templateOptions:{placeholder:"Search Variants",showArrow:!1,onSearch:()=>{},minLengthSearch:1,optionList:[],allowCreate:!0},expressionProperties:{"templateOptions.geneId":(O,et,Z)=>{var b,Q;let S=null===(Q=null===(b=null==Z?void 0:Z.parent)||void 0===b?void 0:b.parent)||void 0===Q?void 0:Q.model;if(S&&S.gene&&S.gene[0])return S.gene[0].id}}}}ngOnInit(){this.queryRef=this.variantTypeaheadQuery.watch({name:"zzzz"}),this.variants$=this.queryRef.valueChanges.pipe((0,t.j)("data","variants","nodes"),(0,y.U)(a=>a.map(p=>({value:p.id,label:p.name,variant:p}))))}ngAfterViewInit(){this.to.onSearch=a=>{a.length<this.to.minLengthSearch||(this.to.searchString=a,this.errorMessages=[],this.queryRef.refetch({name:a,geneId:this.to.geneId}).then(d=>{this.displayAdd$.next(0==d.data.variants.nodes.filter(p=>p.name.toUpperCase()==a.toUpperCase()).length)}))}}addVariant(a){if(a&&""!=a&&this.to.geneId){let d=this.addVariantMutator.mutate(this.addVariantGQL,{name:a,geneId:this.to.geneId},{},p=>{var O;null===(O=this.field.formControl)||void 0===O||O.setValue({id:p.addVariant.variant.id,name:p.addVariant.variant.name}),this.to.searchString="",this.to.searchLength=0});d.submitSuccess$.pipe((0,f.R)(this.destroy$)).subscribe(p=>{p&&(this.success=!0)}),d.submitError$.pipe((0,f.R)(this.destroy$)).subscribe(p=>{p&&(this.errorMessages=p,this.success=!1)}),d.isSubmitting$.pipe((0,f.R)(this.destroy$)).subscribe(p=>{this.loading=p})}}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete(),this.displayAdd$.complete()}}return i.\u0275fac=function(a){return new(a||i)(n.Y36(u._eC),n.Y36(x.Y),n.Y36(u.LUc))},i.\u0275cmp=n.Xpm({type:i,selectors:[["cvc-variant-input-type"]],features:[n.qOj],decls:5,vars:2,consts:[[4,"ngIf","ngIfElse"],["variantListItem",""],["addVariantTmpl",""],["nzShowSearch","","nzServerSearch","",3,"formControl","formlyAttributes","nzPlaceHolder","nzDropdownRender","nzNotFoundContent","nzShowArrow","nzOnSearch"],["nzCustomContent","",3,"nzValue",4,"ngFor","ngForOf"],["sourceLoader",""],["nzCustomContent","",3,"nzValue"],[3,"innerHtml"],[3,"variant"],[4,"ngIf"],[3,"errors",4,"ngIf"],["nz-button","","nzSize","small",3,"nzLoading","click",4,"ngIf"],[3,"errors"],["nz-button","","nzSize","small",3,"nzLoading","click"],["nz-icon","","nzType","plus","nzTheme","outline"]],template:function(a,d){if(1&a&&(n.YNc(0,$,6,9,"ng-container",0),n.YNc(1,B,1,1,"ng-template",null,1,n.W1O),n.YNc(3,X,2,3,"ng-template",null,2,n.W1O)),2&a){const p=n.MAs(2);n.Q6J("ngIf",!(null!=d.formControl.value&&d.formControl.value.id))("ngIfElse",p)}},directives:[s.O5,h.Vq,C.JJ,C.oH,z.VQ,s.sg,h.Ip,G.I,R.V,A.ix,N.dQ,Y.w,T.Ls],pipes:[P.fM,F.A],styles:[""],changeDetection:0}),i})()};var E=e(4867),k=e(7008),q=e(9444);let tt=(()=>{class i{}return i.\u0275fac=function(a){return new(a||i)},i.\u0275mod=n.oAB({type:i}),i.\u0275inj=n.cJS({imports:[[s.ez,C.UX,P.WG,z.X0.forChild({types:[H]}),h.LV,A.sL,T.PV,E.Q,k.B,q.s]]}),i})()},605:(J,I,e)=>{e.r(I),e.d(I,{VariantGroupsReviseModule:()=>ft});var s=e(9808),v=e(325),z=e(373),V=e(1059),M=e(4850),t=e(5e3),y=e(712),f=e(9350),n=e(8992),u=e(1945),x=e(647),h=e(1894),C=e(8616),G=e(6949);function R(o,l){1&o&&(t.TgZ(0,"div"),t._UZ(1,"router-outlet"),t.qZA())}function A(o,l){1&o&&(t.TgZ(0,"nz-row",8),t.TgZ(1,"div",9),t._UZ(2,"cvc-login-prompt"),t.qZA(),t.qZA())}function N(o,l){if(1&o&&(t.ynx(0),t._UZ(1,"cvc-section-navigation",1),t.TgZ(2,"nz-page-header",2),t.TgZ(3,"nz-page-header-title",3),t._uU(4," REVISE "),t._UZ(5,"i",4),t._uU(6),t.qZA(),t.TgZ(7,"nz-page-header-content"),t.TgZ(8,"div",5),t.YNc(9,R,2,0,"div",6),t.ALo(10,"ngrxPush"),t.YNc(11,A,3,0,"ng-template",null,7,t.W1O),t.qZA(),t.qZA(),t.qZA(),t.BQk()),2&o){const r=l.ngIf,c=t.MAs(12),g=t.oxw();t.xp6(1),t.Q6J("displayName",r.name),t.xp6(5),t.hij(" ",r.name," "),t.xp6(3),t.Q6J("ngIf",t.lcZ(10,4,g.isSignedIn$))("ngIfElse",c)}}let Y=(()=>{class o{constructor(r,c,g){this.gql=r,this.route=c,this.viewerService=g,this.routeSub=this.route.params.subscribe(_=>{let U=this.gql.watch({variantGroupId:+_.variantGroupId}).valueChanges;this.loading$=U.pipe((0,z.j)("loading"),(0,V.O)(!0)),this.variantGroup$=U.pipe((0,z.j)("data","variantGroup"))})}ngOnInit(){this.isSignedIn$=this.viewerService.viewer$.pipe((0,M.U)(r=>r.signedIn))}ngOnDestroy(){this.routeSub.unsubscribe()}}return o.\u0275fac=function(r){return new(r||o)(t.Y36(y.Qtd),t.Y36(v.gz),t.Y36(f.a))},o.\u0275cmp=t.Xpm({type:o,selectors:[["cvc-variant-groups-revise-view"]],decls:2,vars:3,consts:[[4,"ngIf"],[3,"displayName"],[1,"site-page-header"],["cvcFlaggableOptions",""],["nz-icon","","nzType","civic:variantgroup"],[1,"content"],[4,"ngIf","ngIfElse"],["notSignedIn",""],["nzSpan","24","nzJustify","center"],["nz-col","","nzSpan","6"]],template:function(r,c){1&r&&(t.YNc(0,N,13,6,"ng-container",0),t.ALo(1,"async")),2&r&&t.Q6J("ngIf",t.lcZ(1,1,c.variantGroup$))},directives:[s.O5,n.I,u.$O,u.u9,x.Ls,u.u5,v.lC,h.SK,h.t3,C.u],pipes:[s.Ov,G.fM],styles:["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]     nz-page-header:first-of-type{background-color:#fff;border-radius:8px}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content{background-color:#f0f0f0;border-top-left-radius:8px;border-top-right-radius:8px;margin:-12px -16px 16px;border-bottom:1px solid #bfbfbf}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-icon{padding:12px 0 12px 12px}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-icon i{width:100%}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-icon i   svg{width:100%;height:100%}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-description{padding:12px}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-description h2{color:#262626;margin:-8px 0 0;font-weight:500}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-description p{color:#262626;margin:-2px 0 0;padding:0;font-size:95%;line-height:1.5em}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-links{text-align:right;padding:12px}[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card{width:100%}[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card .card-grid-cell{width:50%}[_nghost-%COMP%]     nz-page-header:first-of-type nz-page-header-title.flagged{padding-left:.75em}[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-content{padding-top:0;padding-bottom:12px}[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-heading-extra nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs{margin:0 -16px 12px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap{padding-left:16px;padding-right:16px;line-height:24px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab{padding:1px 8px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab .anticon{margin-right:0}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-extra-content{margin-right:16px}"]}),o})();var T=e(4182),P=e(8776),F=e(2359),D=e(6042),L=e(4546),$=e(7525),B=e(5109),w=e(7008),W=e(4623),j=e(8979),K=e(8390),X=e(3773),nt=e(3022),H=e(7462),E=e(4181),k=e(5472),q=e(4889);let tt=(()=>{class o{}return o.\u0275fac=function(r){return new(r||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[s.ez,T.UX,v.Bz,P.X0,L.U5,F.L,h.Jb,D.sL,$.j,P.X0,H.o,E.O,K.N,j.N,W.K,w.B,k.r,X.g,E.O,nt.e,q.E,B.s]]}),o})(),i=(()=>{class o{}return o.\u0275fac=function(r){return new(r||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[s.ez,tt]]}),o})();var m=e(3077),a=e(6123),d=e(8929),p=e(7625),O=e(9169),et=e(822);function Z(o,l){1&o&&t.GkF(0)}function b(o,l){if(1&o){const r=t.EpF();t.TgZ(0,"formly-form",5),t.NdJ("modelChange",function(g){return t.CHM(r),t.oxw(2).formModel=g}),t.qZA()}if(2&o){const r=t.oxw(2);t.Q6J("form",r.formGroup)("fields",r.formFields)("model",r.formModel)}}function Q(o,l){if(1&o){const r=t.EpF();t.TgZ(0,"form",2),t.NdJ("ngSubmit",function(){t.CHM(r);const g=t.oxw();return g.submitVariantGroup(g.formModel)}),t.YNc(1,Z,1,0,"ng-container",3),t.YNc(2,b,1,3,"formly-form",4),t.qZA()}if(2&o){const r=t.oxw(),c=t.MAs(2);t.Q6J("formGroup",r.formGroup),t.xp6(1),t.Q6J("ngTemplateOutlet",c),t.xp6(1),t.Q6J("ngIf",!r.success)}}function S(o,l){if(1&o&&(t.TgZ(0,"nz-form-item"),t._UZ(1,"cvc-form-errors-alert",7),t.qZA()),2&o){const r=t.oxw(2);t.xp6(1),t.Q6J("errors",r.errorMessages)}}function rt(o,l){1&o&&(t.TgZ(0,"p"),t._uU(1,"View it on the "),t.TgZ(2,"a",11),t._uU(3,"Revisions Page"),t.qZA(),t._uU(4,"."),t.qZA())}function at(o,l){if(1&o&&(t.ynx(0),t._UZ(1,"nz-alert",8),t.YNc(2,rt,5,0,"ng-template",9,10,t.W1O),t.BQk()),2&o){const r=t.MAs(3);t.xp6(1),t.Q6J("nzDescription",r)}}function it(o,l){if(1&o&&(t.YNc(0,S,2,1,"nz-form-item",6),t.YNc(1,at,4,1,"ng-container",6)),2&o){const r=t.oxw();t.Q6J("ngIf",r.errorMessages.length>0),t.xp6(1),t.Q6J("ngIf",r.success)}}let st=(()=>{class o{constructor(r,c,g,_,U){this.suggestRevisionGQL=r,this.revisableFieldsGQL=c,this.networkErrorService=g,this.variantGroupDetailGQL=_,this.revisionsGQL=U,this.destroy$=new d.xQ,this.formGroup=new T.cw({}),this.formOptions={},this.success=!1,this.errorMessages=[],this.loading=!1,this.suggestRevisionMutator=new a.U(g),this.formFields=[{key:"fields",wrappers:["form-container"],templateOptions:{label:"Add Variant Group Form"},fieldGroup:[{key:"name",type:"input",wrappers:["form-field"],templateOptions:{label:"Variant Group Name",required:!0}},{key:"description",type:"cvc-textarea",templateOptions:{label:"Description",helpText:"A brief description of this new variant group.",placeholder:"No description provided",required:!0}},{key:"sources",type:"multi-field",wrappers:["form-field"],templateOptions:{label:"Source",helpText:"Add any sources upon which your description depends.",addText:"Add a Source"},fieldArray:{type:"source-input",templateOptions:{hideLabel:!0,required:!0}}},{key:"variants",type:"multi-field",wrappers:["form-field"],templateOptions:{label:"Variants",helpText:"Specify the variants that comprise this Variant Group.",addText:"Add a Variant "},fieldArray:{type:"variant-input",templateOptions:{hideLabel:!0,required:!0,allowCreate:!1}}},{key:"comment",type:"comment-textarea",templateOptions:{label:"Comment",helpText:"Please provide any additional comments you wish to make about this evidence item. This comment will appear as the first comment in this item's comment thread.",placeholder:"Please enter a comment describing your revision.",required:!0,minLength:10}},{key:"cancel",type:"cancel-button",templateOptions:{redirectPath:"../.."}},{key:"organization",type:"org-submit-button",templateOptions:{submitLabel:"Submit Variant Group Revision",submitSize:"large"}}]}]}ngAfterViewInit(){this.revisableFieldsGQL.fetch({variantGroupId:this.variantGroupId}).subscribe(({data:{variantGroup:r}})=>{r&&(this.formModel=this.toFormModel(r))},r=>{console.error("Error retrieving evidenceItem."),console.error(r)},()=>{this.formOptions.updateInitialValue&&this.formOptions.updateInitialValue(),this.formGroup.markAllAsTouched();const r=this.formGroup.get("fields.comment");r&&r.markAsUntouched()})}toFormModel(r){var c;return{fields:Object.assign(Object.assign({},r),{variants:r.variants.nodes,organization:null===(c=this.formModel)||void 0===c?void 0:c.fields.organization})}}submitVariantGroup(r){let c=this.toSubmitInput(r);if(c){let g=this.suggestRevisionMutator.mutate(this.suggestRevisionGQL,{input:c},{refetchQueries:[{query:this.variantGroupDetailGQL.document,variables:{variantGroupId:this.variantGroupId}},{query:this.revisionsGQL.document,variables:{subject:{id:this.variantGroupId,entityType:y.oRL.VariantGroup},status:y.FJi.New}}]});g.submitSuccess$.pipe((0,p.R)(this.destroy$)).subscribe(_=>{_&&(this.success=!0)}),g.submitError$.pipe((0,p.R)(this.destroy$)).subscribe(_=>{_&&(this.errorMessages=_,this.success=!1)}),g.isSubmitting$.pipe((0,p.R)(this.destroy$)).subscribe(_=>{this.loading=_})}}toSubmitInput(r){var c;if(r)return{id:this.variantGroupId,organizationId:null===(c=r.fields.organization)||void 0===c?void 0:c.id,comment:r.fields.comment,fields:{description:r.fields.description,name:r.fields.name,sourceIds:r.fields.sources.map(g=>g.id).filter(m.$),variantIds:r.fields.variants.map(g=>g.id).filter(m.$)}}}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return o.\u0275fac=function(r){return new(r||o)(t.Y36(y.aw3),t.Y36(y.ROj),t.Y36(O.Y),t.Y36(y.Qtd),t.Y36(y.L5n))},o.\u0275cmp=t.Xpm({type:o,selectors:[["cvc-variant-group-revise-form"]],inputs:{variantGroupId:"variantGroupId"},decls:3,vars:1,consts:[["nz-form","","nzLayout","vertical",3,"formGroup","ngSubmit",4,"ngIf"],["formMessages",""],["nz-form","","nzLayout","vertical",3,"formGroup","ngSubmit"],[4,"ngTemplateOutlet"],[3,"form","fields","model","modelChange",4,"ngIf"],[3,"form","fields","model","modelChange"],[4,"ngIf"],[3,"errors"],["nzType","success","nzMessage","Revision(s) Submitted","nzShowIcon","",3,"nzDescription"],["nzSize","small"],["successMessage",""],["routerLink","../../revisions"]],template:function(r,c){1&r&&(t.YNc(0,Q,3,3,"form",0),t.YNc(1,it,2,2,"ng-template",null,1,t.W1O)),2&r&&t.Q6J("ngIf",c.formModel)},directives:[s.O5,T._Y,T.JL,L.Lr,T.sg,s.tP,P.T7,h.SK,L.Nx,et.V,F.r,v.yS],styles:[""]}),o})();function pt(o,l){if(1&o&&(t.ynx(0),t._UZ(1,"cvc-variant-group-revise-form",2),t.BQk()),2&o){const r=t.oxw();t.xp6(1),t.Q6J("variantGroupId",r.variantGroupId)}}function lt(o,l){1&o&&t._uU(0,"Loading Variant Group...")}const ct=[{path:"",component:Y,data:{breadcrumb:"Revise"},children:[{path:"",redirectTo:"suggest",pathMatch:"full"},{path:"suggest",component:(()=>{class o{constructor(r){this.route=r,this.routeParams$=this.route.params.subscribe(c=>{this.variantGroupId=+c.variantGroupId})}ngOnDestroy(){this.routeParams$.unsubscribe()}}return o.\u0275fac=function(r){return new(r||o)(t.Y36(v.gz))},o.\u0275cmp=t.Xpm({type:o,selectors:[["cvc-variant-groups-suggest-page"]],decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["loadingVariantGroup",""],[3,"variantGroupId"]],template:function(r,c){if(1&r&&(t.YNc(0,pt,2,1,"ng-container",0),t.YNc(1,lt,1,0,"ng-template",null,1,t.W1O)),2&r){const g=t.MAs(2);t.Q6J("ngIf",c.variantGroupId)("ngIfElse",g)}},directives:[s.O5,st],styles:[""]}),o})(),data:{breadcrumb:"Suggest Revision"}}]}];let dt=(()=>{class o{}return o.\u0275fac=function(r){return new(r||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[v.Bz.forChild(ct),i],v.Bz]}),o})();var ot=e(8144),ut=e(3618),gt=e(5630),mt=e(9386);let ft=(()=>{class o{}return o.\u0275fac=function(r){return new(r||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[s.ez,dt,u.KJ,ot.zf,x.PV,ut.ZJ,ot.zf,gt.D,mt.a,G.WG,h.Jb]]}),o})()}}]);