"use strict";(self.webpackChunkmain=self.webpackChunkmain||[]).push([[3225],{3225:(Oe,y,i)=>{i.r(y),i.d(y,{MolecularProfilesReviseModule:()=>Te});var a=i(9808),g=i(1945),_=i(5630),h=i(5017),T=i(9386),v=i(6949),m=i(1894),f=i(325),d=i(373),I=i(1059),O=i(4850),e=i(5e3),u=i(7630),S=i(9350),C=i(8992),A=i(5639);function F(o,n){1&o&&(e.TgZ(0,"span"),e._uU(1,",\xa0"),e.qZA())}function Z(o,n){if(1&o&&(e.TgZ(0,"span"),e._uU(1),e.YNc(2,F,2,0,"span",0),e.qZA()),2&o){const t=n.$implicit,r=n.last;e.xp6(1),e.hij(" ",t,""),e.xp6(1),e.Q6J("ngIf",!r)}}function Q(o,n){if(1&o&&(e.TgZ(0,"nz-page-header-subtitle"),e.YNc(1,Z,3,2,"span",8),e.qZA()),2&o){const t=e.oxw().ngIf;e.xp6(1),e.Q6J("ngForOf",t.molecularProfileAliases)}}function J(o,n){1&o&&(e.TgZ(0,"div"),e._UZ(1,"router-outlet"),e.qZA())}function N(o,n){1&o&&(e.TgZ(0,"nz-row",9)(1,"div",10),e._UZ(2,"cvc-login-prompt"),e.qZA()())}function Y(o,n){if(1&o&&(e.ynx(0),e._UZ(1,"cvc-section-navigation",1),e.TgZ(2,"nz-page-header",2)(3,"nz-page-header-title",3),e._uU(4," REVISE "),e._UZ(5,"i",4),e._uU(6),e.qZA(),e.YNc(7,Q,2,1,"nz-page-header-subtitle",0),e.TgZ(8,"nz-page-header-content")(9,"div",5),e.YNc(10,J,2,0,"div",6),e.ALo(11,"ngrxPush"),e.YNc(12,N,3,0,"ng-template",null,7,e.W1O),e.qZA()()(),e.BQk()),2&o){const t=n.ngIf,r=e.MAs(13),s=e.oxw();e.xp6(1),e.Q6J("displayName",t.name),e.xp6(5),e.hij(" ",t.name," "),e.xp6(1),e.Q6J("ngIf",t.molecularProfileAliases.length>0),e.xp6(3),e.Q6J("ngIf",e.lcZ(11,5,s.isSignedIn$))("ngIfElse",r)}}let L=(()=>{class o{constructor(t,r,s){this.gql=t,this.route=r,this.viewerService=s,this.routeSub=this.route.params.subscribe(l=>{let c=this.gql.watch({mpId:+l.molecularProfileId}).valueChanges;this.loading$=c.pipe((0,d.j)("loading"),(0,I.O)(!0)),this.molecularProfile$=c.pipe((0,d.j)("data","molecularProfile")),this.commentsTotal$=this.molecularProfile$.pipe((0,d.j)("comments","totalCount")),this.flagsTotal$=this.molecularProfile$.pipe((0,d.j)("flags","totalCount")),this.revisionsTotal$=this.molecularProfile$.pipe((0,d.j)("revisions","totalCount"))})}ngOnInit(){this.isSignedIn$=this.viewerService.viewer$.pipe((0,O.U)(t=>t.signedIn))}ngOnDestroy(){this.routeSub.unsubscribe()}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(u.AMF),e.Y36(f.gz),e.Y36(S.a))},o.\u0275cmp=e.Xpm({type:o,selectors:[["cvc-molecular-profiles-revise"]],decls:2,vars:3,consts:[[4,"ngIf"],[3,"displayName"],[1,"site-page-header"],["cvcFlaggableOptions",""],["nz-icon","","nzType","civic:molecularprofile"],[1,"content"],[4,"ngIf","ngIfElse"],["notSignedIn",""],[4,"ngFor","ngForOf"],["nzSpan","24","nzJustify","center"],["nz-col","","nzSpan","6"]],template:function(t,r){1&t&&(e.YNc(0,Y,14,7,"ng-container",0),e.ALo(1,"async")),2&t&&e.Q6J("ngIf",e.lcZ(1,1,r.molecularProfile$))},directives:[a.O5,C.I,g.$O,g.u9,h.Ls,g.yG,a.sg,g.u5,f.lC,m.SK,m.t3,A.u],pipes:[a.Ov,v.fM],styles:["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]     nz-page-header:first-of-type{background-color:#fff;border-radius:8px}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content{flex-wrap:nowrap;background-color:#f0f0f0;border-top-left-radius:8px;border-top-right-radius:8px;margin:-12px -16px 16px;border-bottom:1px solid #bfbfbf}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-icon{padding:12px 0 12px 12px}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-icon i{width:100%}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-icon i   svg{width:100%;height:100%}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-description{padding:12px}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-description h2{color:#262626;margin:-8px 0 0;font-weight:500}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-description p{color:#262626;margin:-2px 0 0;padding:0;font-size:95%;line-height:1.5em}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-links{text-align:right;padding:12px}[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card{width:100%}[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card .card-grid-cell{width:50%}[_nghost-%COMP%]     nz-page-header:first-of-type nz-page-header-title.flagged{padding-left:.75em}[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-content{padding-top:0;padding-bottom:12px}[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-heading-extra nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs{margin:0 -16px 12px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap{padding-left:16px;padding-right:16px;line-height:24px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab{padding:1px 8px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab .anticon{margin-right:0}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-extra-content{margin-right:16px}"]}),o})();var p=i(3075),M=i(4546),x=i(2359),z=i(8776),U=i(1825),$=i(7008),w=i(4375),G=i(6042),V=i(8390),j=i(3773),b=i(1017),D=i(4623),B=i(7462),E=i(4889),R=i(7525),W=i(5472),X=i(7338),K=i(7484),H=i(5482),k=i(6462),q=i(9990),ee=i(3022),oe=i(9911),te=i(6501),ie=i(7695),ne=i(1493);let re=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[a.ez,f.Bz,v.WG,p.UX,z.X0,b.s,G.sL,K.vh,H.cD,M.U5,x.L,m.Jb,h.PV,k.m,R.j,ee.e,U.A,W.r,$.B,w.R,oe.G,D.K,V.N,j.g,te.r,q.M,B.o,E.E,X.z,ne.A,b.s,ie.C]]}),o})(),se=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[a.ez,re]]}),o})();var le=i(8929),P=i(7625),ae=i(6738),ce=i(6123),fe=i(9169),ue=i(822);function ge(o,n){1&o&&e.GkF(0)}function me(o,n){if(1&o){const t=e.EpF();e.TgZ(0,"formly-form",6),e.NdJ("modelChange",function(s){return e.CHM(t),e.oxw(2).formModel=s}),e.qZA()}if(2&o){const t=e.oxw(2);e.Q6J("form",t.formGroup)("fields",t.formFields)("model",t.formModel)("options",t.formOptions)}}function de(o,n){if(1&o){const t=e.EpF();e.TgZ(0,"form",3),e.NdJ("ngSubmit",function(){e.CHM(t);const s=e.oxw();return s.submitRevision(s.formModel)}),e.YNc(1,ge,1,0,"ng-container",4),e.YNc(2,me,1,4,"formly-form",5),e.qZA()}if(2&o){const t=e.oxw(),r=e.MAs(3);e.Q6J("formGroup",t.formGroup),e.xp6(1),e.Q6J("ngTemplateOutlet",r),e.xp6(1),e.Q6J("ngIf",!t.success&&!t.noNewRevisions)}}function pe(o,n){if(1&o&&(e.ynx(0),e.TgZ(1,"nz-form-item"),e._UZ(2,"cvc-form-errors-alert",8),e.qZA(),e.BQk()),2&o){const t=e.oxw(2);e.xp6(2),e.Q6J("errors",t.errorMessages)}}function he(o,n){1&o&&(e.TgZ(0,"p"),e._uU(1,"View it on the "),e.TgZ(2,"a",12),e._uU(3,"Revisions Page"),e.qZA(),e._uU(4,"."),e.qZA())}function ve(o,n){if(1&o&&(e.ynx(0),e._UZ(1,"nz-alert",9),e.YNc(2,he,5,0,"ng-template",10,11,e.W1O),e.BQk()),2&o){const t=e.MAs(3);e.xp6(1),e.Q6J("nzDescription",t)}}function Me(o,n){1&o&&(e.TgZ(0,"p"),e._uU(1,"Your submission succeeded but no new revisions were created. Identical ones already exist, view them on the "),e.TgZ(2,"a",12),e._uU(3,"Revisions Page"),e.qZA(),e._uU(4,"."),e.qZA())}function Pe(o,n){if(1&o&&(e.ynx(0),e._UZ(1,"nz-alert",13),e.YNc(2,Me,5,0,"ng-template",10,14,e.W1O),e.BQk()),2&o){const t=e.MAs(3);e.xp6(1),e.Q6J("nzDescription",t)}}function ye(o,n){if(1&o&&(e.YNc(0,pe,3,1,"ng-container",7),e.YNc(1,ve,4,1,"ng-container",7),e.YNc(2,Pe,4,1,"ng-container",7)),2&o){const t=e.oxw();e.Q6J("ngIf",t.errorMessages.length>0),e.xp6(1),e.Q6J("ngIf",t.success&&!t.noNewRevisions),e.xp6(1),e.Q6J("ngIf",t.noNewRevisions)}}let xe=(()=>{class o{constructor(t,r,s,l,c){this.suggestRevisionGQL=t,this.networkErrorService=r,this.revisableFieldsGQL=s,this.mpDetailGQL=l,this.revisionsGQL=c,this.destroy$=new le.xQ,this.success=!1,this.noNewRevisions=!1,this.errorMessages=[],this.loading=!1,this.formGroup=new p.cw({}),this.formOptions={},this.suggestRevisionMutator=new ce.U(r),this.formFields=[{key:"fields",wrappers:["form-container"],templateOptions:{label:"Suggest MolecularProfile Revision Form"},fieldGroup:[{key:"id",type:"input",hide:!0},{key:"description",type:"cvc-textarea",templateOptions:{label:"Molecular Profile Description",helpText:'Provide a summary of the clinical relevance of this Molecular Profile. The Molecular Profile Summary should be a synthesis of the existing Evidence Statements for this profile. Basic information on recurrence rates and biological/functional impact of the variants may be included, but the focus should be on the clinical impact (i.e. predictive, prognostic, diagnostic, or predisposing relevance). By submitting content to CIViC you agree to release it to the public domain as described by the <a href="https://creativecommons.org/publicdomain/zero/1.0/" title="CreativeCommons.org CC0 license" target="_blank">Creative Commons Public Domain Dedication (CC0 1.0 Universal)</a>.',placeholder:"Enter a description for this molecular profile.",required:!1}},{key:"sources",type:"multi-field",wrappers:["form-field"],templateOptions:{label:"Molecular Profile Description Sources",addText:"Add a Source",helpText:"Add any Sources used as references for this Molecular Profile's Description above."},fieldArray:{type:"source-input",templateOptions:{required:!0}}},{key:"molecularProfileAliases",type:"multi-field",wrappers:["form-field"],templateOptions:{label:"MolecularProfile Aliases",addText:"Add an Alias",helpText:"List any aliases commonly used to refer to this Molecular Profile."},fieldArray:{type:"tag-input",templateOptions:{required:!1,placeholder:"Add Alias",minLength:3}}},{key:"comment",type:"comment-textarea",templateOptions:{label:"Comment",placeholder:"Please enter a comment describing your revision.",required:!0,minLength:10}},{key:"cancel",type:"cancel-button",templateOptions:{redirectPath:"../.."}},{key:"organization",type:"org-submit-button",templateOptions:{submitLabel:"Submit Molecular Profile Revision",submitSize:"large"}}]}]}ngAfterViewInit(){this.revisableFieldsGQL.fetch({molecularProfileId:this.molecularProfileId},{fetchPolicy:"network-only"}).subscribe(({data:{molecularProfile:t}})=>{t&&(this.formModel=this.toFormModel(t))},t=>{console.error("Error retrieving molecular profile."),console.error(t)},()=>{console.log("complete"),this.formOptions.updateInitialValue&&this.formOptions.updateInitialValue(),this.formGroup.markAllAsTouched();const t=this.formGroup.get("fields.comment");t&&t.markAsUntouched()})}toFormModel(t){var r,s;return{fields:Object.assign(Object.assign({},t),{comment:null===(r=this.formModel)||void 0===r?void 0:r.fields.comment,organization:null===(s=this.formModel)||void 0===s?void 0:s.fields.organization})}}submitRevision(t){let r=this.toRevisionInput(t);if(r){let s=this.suggestRevisionMutator.mutate(this.suggestRevisionGQL,{input:r},{refetchQueries:[{query:this.mpDetailGQL.document,variables:{molecularProfileId:this.molecularProfileId}},{query:this.revisionsGQL.document,variables:{subject:{id:this.molecularProfileId,entityType:u.oRL.MolecularProfile},status:u.FJi.New}}]},l=>{var c;(null===(c=l.suggestMolecularProfileRevision)||void 0===c?void 0:c.results.every(Ie=>0==Ie.newlyCreated))&&(this.noNewRevisions=!0,this.success=!1)});s.submitSuccess$.pipe((0,P.R)(this.destroy$)).subscribe(l=>{l&&(this.success=!0)}),s.submitError$.pipe((0,P.R)(this.destroy$)).subscribe(l=>{l&&(this.errorMessages=l,this.success=!1)}),s.isSubmitting$.pipe((0,P.R)(this.destroy$)).subscribe(l=>{this.loading=l})}}toRevisionInput(t){var r;if(t){const s=t.fields;return{id:s.id,comment:s.comment,organizationId:null===(r=s.organization)||void 0===r?void 0:r.id,fields:{description:(0,ae.xt)(t.fields.description),sourceIds:t.fields.sources.map(l=>+l.id),aliases:t.fields.molecularProfileAliases}}}}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(u.T1I),e.Y36(fe.Y),e.Y36(u.pR8),e.Y36(u.AMF),e.Y36(u.L5n))},o.\u0275cmp=e.Xpm({type:o,selectors:[["cvc-molecular-profile-revise-form"]],inputs:{molecularProfileId:"molecularProfileId"},decls:4,vars:2,consts:[["nzTip","Submitting",3,"nzSpinning"],["nz-form","","nzLayout","vertical",3,"formGroup","ngSubmit",4,"ngIf"],["formMessages",""],["nz-form","","nzLayout","vertical",3,"formGroup","ngSubmit"],[4,"ngTemplateOutlet"],[3,"form","fields","model","options","modelChange",4,"ngIf"],[3,"form","fields","model","options","modelChange"],[4,"ngIf"],[3,"errors"],["nzType","success","nzMessage","Suggested Revision Submitted","nzShowIcon","",3,"nzDescription"],["nzSize","small"],["successMessage",""],["routerLink","../../revisions"],["nzType","warning","nzMessage","No New Revisions Created","nzShowIcon","",3,"nzDescription"],["duplicateMessage",""]],template:function(t,r){1&t&&(e.TgZ(0,"nz-spin",0),e.YNc(1,de,3,3,"form",1),e.qZA(),e.YNc(2,ye,3,3,"ng-template",null,2,e.W1O)),2&t&&(e.Q6J("nzSpinning",r.loading),e.xp6(1),e.Q6J("ngIf",r.formModel))},directives:[R.W,a.O5,p._Y,p.JL,M.Lr,p.sg,a.tP,z.T7,m.SK,M.Nx,ue.V,x.r,f.yS],styles:["[_nghost-%COMP%]{display:block}"]}),o})();function ze(o,n){if(1&o&&(e.ynx(0),e._UZ(1,"cvc-molecular-profile-revise-form",2),e.BQk()),2&o){const t=e.oxw();e.xp6(1),e.Q6J("molecularProfileId",t.molecularProfileId)}}function be(o,n){1&o&&e._uU(0,"Loading Molecular Profile...")}const Re=[{path:"",component:L,data:{breadcrumb:"Revise"},children:[{path:"",redirectTo:"suggest",pathMatch:"full"},{path:"suggest",component:(()=>{class o{constructor(t){this.route=t,this.routeParams$=this.route.params.subscribe(r=>{this.molecularProfileId=+r.molecularProfileId})}ngOnDestroy(){this.routeParams$.unsubscribe()}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(f.gz))},o.\u0275cmp=e.Xpm({type:o,selectors:[["cvc-molecular-profiles-suggest"]],decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["loadingMp",""],[3,"molecularProfileId"]],template:function(t,r){if(1&t&&(e.YNc(0,ze,2,1,"ng-container",0),e.YNc(1,be,1,0,"ng-template",null,1,e.W1O)),2&t){const s=e.MAs(2);e.Q6J("ngIf",r.molecularProfileId)("ngIfElse",s)}},directives:[a.O5,xe],styles:[""]}),o})(),data:{breadcrumb:"Suggest Revision"}}]}];let _e=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[f.Bz.forChild(Re),se],f.Bz]}),o})(),Te=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[a.ez,_e,g.KJ,h.PV,_.D,T.a,v.WG,m.Jb]]}),o})()}}]);