"use strict";(self.webpackChunkmain=self.webpackChunkmain||[]).push([[7283],{4059:(z,u,a)=>{a.d(u,{c:()=>c});var o=a(6814),l=a(9382),e=a(95),h=a(4190),f=a(551),_=a(3640),y=a(5879);let c=(()=>{class s{}return s.\u0275fac=function(T){return new(T||s)},s.\u0275mod=y.oAB({type:s}),s.\u0275inj=y.cJS({imports:[o.ez,h.Bz,l.we,e.Jb,f.PV,_.mS]}),s})()},9348:(z,u,a)=>{a.d(u,{J:()=>l,i:()=>o});const o={molecularProfileId:void 0,acmgCodeIds:[],ampLevel:void 0,assertionDirection:void 0,assertionType:void 0,clingenCodeIds:[],significance:void 0,description:void 0,diseaseId:void 0,therapyIds:[],therapyInteractionType:void 0,evidenceItemIds:[],fdaCompanionTest:void 0,fdaRegulatoryApproval:void 0,nccnGuidelineId:void 0,nccnGuidelineVersion:void 0,phenotypeIds:[],summary:void 0,variantOrigin:void 0},l={clientMutationId:void 0,fields:o,comment:void 0,organizationId:void 0}},9182:(z,u,a)=>{a.d(u,{_:()=>_});var o=a(313),l=a(1791),e=a(5619),h=a(9348),f=a(4607);class _ extends f.lG{constructor(){super(f.yQ.ASSERTION);const c=h.i;this.fields={molecularProfileId$:new e.X(c.molecularProfileId),variantMolecularProfile$:new e.X(void 0),geneId$:new e.X(void 0),variantId$:new e.X(void 0),variantOrigin$:new e.X(c.variantOrigin),assertionType$:new e.X(c.assertionType),assertionDirection$:new e.X(c.assertionDirection),evidenceItemIds$:new e.X(c.evidenceItemIds),significance$:new e.X(c.significance),diseaseId$:new e.X(c.diseaseId),therapyIds$:new e.X(c.therapyIds),therapyInteractionType$:new e.X(c.therapyInteractionType),phenotypeIds$:new e.X(c.phenotypeIds),nccnGuidelineId$:new e.X(c.nccnGuidelineId),fdaRegulatoryApproval$:new e.X(c.fdaRegulatoryApproval),fdaCompanionTest$:new e.X(c.fdaCompanionTest),ampLevel$:new e.X(c.ampLevel),acmgCodeIds$:new e.X(c.acmgCodeIds),clingenCodeIds$:new e.X(c.clingenCodeIds),nccnGuidelineVersion$:new e.X(c.nccnGuidelineVersion)},this.enums={entityType$:new e.X(this.getTypeOptions()),significance$:new e.X([]),direction$:new e.X([]),interaction$:new e.X(this.getInteractionOptions())},this.options={assertionTypeOption$:new e.X(this.getOptionsFromEnums(this.getTypeOptions())),directionOption$:new e.X(void 0),significanceOption$:new e.X(void 0)},this.requires={requiresDisease$:new e.X(!1),requiresTherapy$:new e.X(!1),requiresTherapyInteractionType$:new e.X(!1),requiresClingenCodes$:new e.X(!1),requiresAcmgCodes$:new e.X(!1),requiresAmpLevel$:new e.X(!1),allowsFdaApproval$:new e.X(!1)},this.fields.assertionType$.pipe((0,l.t)(this,"onDestroy")).subscribe(s=>{if(!s)return Object.entries(this.requires).forEach(([C,T])=>{T.next(!1)}),this.enums.significance$.next([]),void this.enums.direction$.next([]);this.enums.significance$.next(this.getSignificanceOptions(s)),this.enums.direction$.next(this.getDirectionOptions(s)),this.requires.requiresDisease$.next(this.requiresDisease(s)),this.requires.requiresTherapy$.next(this.requiresTherapy(s)),this.requires.requiresClingenCodes$.next(this.requiresClingenCodes(s)),this.requires.requiresAcmgCodes$.next(this.requiresAcmgCodes(s)),this.requires.requiresAmpLevel$.next(this.requiresAmpLevel(s)),this.requires.allowsFdaApproval$.next(this.allowsFdaApproval(s))}),this.fields.therapyIds$.pipe((0,l.t)(this,"onDestroy")).subscribe(s=>{this.requires.requiresTherapyInteractionType$.next(null!=s&&s.length>1)}),this.validStates.set(o.uBv.Predictive,{entityType:o.uBv.Predictive,significance:[o._3P.Sensitivityresponse,o._3P.Resistance,o._3P.AdverseResponse,o._3P.ReducedSensitivity,o._3P.Na],entityDirection:[o.mdl.Supports,o.mdl.DoesNotSupport],requiresDisease:!0,requiresTherapy:!0,requiresClingenCodes:!1,requiresAcmgCodes:!1,requiresAmpLevel:!0,allowsFdaApproval:!0}),this.validStates.set(o.uBv.Diagnostic,{entityType:o.uBv.Diagnostic,significance:[o._3P.Positive,o._3P.Negative],entityDirection:[o.mdl.Supports,o.mdl.DoesNotSupport],requiresDisease:!0,requiresTherapy:!1,requiresClingenCodes:!1,requiresAcmgCodes:!1,requiresAmpLevel:!0,allowsFdaApproval:!1}),this.validStates.set(o.uBv.Prognostic,{entityType:o.uBv.Prognostic,significance:[o._3P.BetterOutcome,o._3P.PoorOutcome,o._3P.Na],entityDirection:[o.mdl.Supports,o.mdl.DoesNotSupport],requiresDisease:!0,requiresTherapy:!1,requiresClingenCodes:!1,requiresAcmgCodes:!1,requiresAmpLevel:!0,allowsFdaApproval:!1}),this.validStates.set(o.uBv.Predisposing,{entityType:o.uBv.Predisposing,significance:[o._3P.Pathogenic,o._3P.LikelyPathogenic,o._3P.Benign,o._3P.LikelyBenign,o._3P.UncertainSignificance],entityDirection:[o.mdl.Supports],requiresDisease:!0,requiresTherapy:!1,requiresClingenCodes:!1,requiresAcmgCodes:!0,requiresAmpLevel:!1,allowsFdaApproval:!1}),this.validStates.set(o.uBv.Oncogenic,{entityType:o.uBv.Oncogenic,significance:[o._3P.Oncogenic,o._3P.LikelyOncogenic,o._3P.Benign,o._3P.LikelyBenign,o._3P.UncertainSignificance],entityDirection:[o.mdl.Supports],requiresDisease:!0,requiresTherapy:!1,requiresClingenCodes:!0,requiresAcmgCodes:!1,requiresAmpLevel:!1,allowsFdaApproval:!1})}}},8088:(z,u,a)=>{a.r(u),a.d(u,{TestPagesModule:()=>Xe});var o=a(6814),l=a(4190),e=a(5879),h=a(2624);let f=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["cvc-nonstate-form"]],decls:1,vars:1,consts:[[3,"assertionId"]],template:function(n,r){1&n&&e._UZ(0,"cvc-assertion-revise-form",0),2&n&&e.Q6J("assertionId",3)},dependencies:[h.G],encapsulation:2,changeDetection:0}),t})();var _=a(6288);let y=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["cvc-assertion-submit-test-page"]],decls:1,vars:0,template:function(n,r){1&n&&e._UZ(0,"cvc-assertion-submit-form")},dependencies:[_.u],encapsulation:2,changeDetection:0}),t})();var c=a(75);let s=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["cvc-evidence-revise-test-page"]],decls:1,vars:1,consts:[[3,"evidenceId"]],template:function(n,r){1&n&&e._UZ(0,"cvc-evidence-revise-form",0),2&n&&e.Q6J("evidenceId",7606)},dependencies:[c.r],encapsulation:2,changeDetection:0}),t})();var C=a(1679);let T=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["cvc-nonstate-form"]],decls:1,vars:0,template:function(n,r){1&n&&e._UZ(0,"cvc-evidence-submit-form")},dependencies:[C.l],encapsulation:2,changeDetection:0}),t})();var d=a(6223);const x={geneId:void 0},A=[{key:"molecularProfileId",type:"molecular-profile-select",props:{}},{key:"molecularProfileIds",type:"molecular-profile-multi-select",props:{}},{wrappers:["field-grid"],props:{grid:{cols:2}},fieldGroup:[{key:"evidenceType",type:"type-select",props:{}},{key:"evidenceTypes",type:"type-multi-select",props:{}}]},{wrappers:["field-grid"],props:{grid:{cols:2}},fieldGroup:[{key:"geneId",type:"gene-select"},{key:"geneIds",type:"gene-multi-select",props:{}}]},{wrappers:["field-grid"],props:{grid:{cols:2}},fieldGroup:[{key:"variantId",type:"variant-select",props:{requireGene:!1}},{key:"variantIds",type:"variant-multi-select",props:{requireGene:!1}}]},{wrappers:["field-grid"],props:{grid:{cols:2}},fieldGroup:[{key:"sourceId",type:"source-select",props:{}},{key:"sourceIds",type:"source-multi-select",props:{}}]},{wrappers:["field-grid"],props:{grid:{cols:2}},fieldGroup:[{key:"diseaseId",type:"disease-select",props:{}},{key:"diseaseIds",type:"disease-multi-select",props:{}}]},{wrappers:["field-grid"],props:{grid:{cols:2}},fieldGroup:[{key:"drugId",type:"therapy-select",props:{}},{key:"drugIds",type:"therapy-multi-select",props:{}}]},{wrappers:["field-grid"],props:{grid:{cols:2}},fieldGroup:[{key:"evidenceLevel",type:"level-select",props:{}},{key:"evidenceLevel",type:"level-multi-select",props:{}}]},{wrappers:["field-grid"],props:{grid:{cols:2}},fieldGroup:[{key:"variantOrigin",type:"origin-select",props:{}},{key:"variantOrigins",type:"origin-multi-select",props:{}}]}];var I=a(5545),O=a(3599);let F=(()=>{class t{constructor(){this.form=new d.nJ({}),this.model=x,this.formLayout="horizontal",this.options={formState:{formLayout:this.formLayout}},this.fields=[{key:"fields",wrappers:["form-card"],props:{title:"Horizontal Field Layout, No State"},fieldGroup:A}]}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["cvc-horizontal-form"]],decls:2,vars:6,consts:[["nz-form","",3,"nzLayout","formGroup"],[2,"width","100%",3,"form","fields","model","options","modelChange"]],template:function(n,r){1&n&&(e.TgZ(0,"form",0)(1,"formly-form",1),e.NdJ("modelChange",function(p){return r.model=p}),e.qZA()()),2&n&&(e.Q6J("nzLayout",r.formLayout)("formGroup",r.form),e.xp6(1),e.Q6J("form",r.form)("fields",r.fields)("model",r.model)("options",r.options))},dependencies:[d._Y,d.JL,d.sg,I.T7,O.Lr],encapsulation:2,changeDetection:0}),t})();var v,E=a(655),R=a(1791),J=a(5619),D=a(2181),$=a(7398),U=a(5676),N=a(4223),q=a(1757),B=a(313),S=a(8091),L=a(2962),m=a(3740),X=a(9835);function G(t,i){if(1&t){const n=e.EpF();e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._UZ(4,"cvc-entity-tag",7),e.qZA(),e._UZ(5,"td"),e.TgZ(6,"td"),e._UZ(7,"cvc-entity-tag",11),e.qZA(),e.TgZ(8,"td")(9,"cvc-entity-tag",12),e.NdJ("cvcTagCheckedChange",function(g){e.CHM(n);const p=e.oxw(3);return e.KtG(p.tagChecked(g))}),e.qZA()(),e._UZ(10,"td")(11,"td")(12,"td"),e.qZA()}if(2&t){const n=e.oxw().$implicit,r=e.oxw().ngrxLet;e.xp6(2),e.Oqu(n.__typename),e.xp6(2),e.Q6J("cvcCacheId",n.__typename+":"+n.id)("cvcEmphasize",r),e.xp6(3),e.Q6J("cvcCacheId",n.__typename+":"+n.id)("cvcEmphasize",r),e.xp6(2),e.Q6J("cvcCacheId",n.__typename+":"+n.id)("cvcEmphasize",r)}}function Q(t,i){if(1&t){const n=e.EpF();e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._UZ(4,"cvc-entity-tag",7),e.qZA(),e._UZ(5,"td"),e.TgZ(6,"td"),e._UZ(7,"cvc-entity-tag",11),e.qZA(),e.TgZ(8,"td")(9,"cvc-entity-tag",12),e.NdJ("cvcTagCheckedChange",function(g){e.CHM(n);const p=e.oxw(3);return e.KtG(p.tagChecked(g))}),e.qZA()(),e._UZ(10,"td")(11,"td")(12,"td"),e.qZA()}if(2&t){const n=e.oxw().$implicit,r=e.oxw().ngrxLet;e.xp6(2),e.Oqu(n.__typename),e.xp6(2),e.Q6J("cvcCacheId",n.__typename+":"+n.id)("cvcEmphasize",r),e.xp6(3),e.Q6J("cvcCacheId",n.__typename+":"+n.id)("cvcEmphasize",r),e.xp6(2),e.Q6J("cvcCacheId",n.__typename+":"+n.id)("cvcEmphasize",r)}}function V(t,i){if(1&t&&(e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._UZ(4,"cvc-entity-tag",7),e.qZA(),e._UZ(5,"td")(6,"td")(7,"td")(8,"td")(9,"td")(10,"td"),e.qZA()),2&t){const n=e.oxw().$implicit,r=e.oxw().ngrxLet;e.xp6(2),e.Oqu(n.__typename),e.xp6(2),e.Q6J("cvcCacheId",n.__typename+":"+n.id)("cvcEmphasize",r)}}function j(t,i){if(1&t&&(e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._UZ(4,"cvc-entity-tag",7),e.qZA(),e._UZ(5,"td")(6,"td")(7,"td")(8,"td")(9,"td")(10,"td"),e.qZA()),2&t){const n=e.oxw().$implicit,r=e.oxw().ngrxLet;e.xp6(2),e.Oqu(n.__typename),e.xp6(2),e.Q6J("cvcCacheId",n.__typename+":"+n.id)("cvcEmphasize",r)}}function H(t,i){if(1&t&&(e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._UZ(4,"cvc-entity-tag",7),e.qZA(),e._UZ(5,"td")(6,"td")(7,"td")(8,"td")(9,"td")(10,"td"),e.qZA()),2&t){const n=e.oxw().$implicit,r=e.oxw().ngrxLet;e.xp6(2),e.Oqu(n.__typename),e.xp6(2),e.Q6J("cvcCacheId",n.__typename+":"+n.id)("cvcEmphasize",r)}}function K(t,i){if(1&t&&(e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._UZ(4,"cvc-entity-tag",7),e.qZA(),e._UZ(5,"td")(6,"td")(7,"td")(8,"td")(9,"td")(10,"td"),e.qZA()),2&t){const n=e.oxw().$implicit,r=e.oxw().ngrxLet;e.xp6(2),e.Oqu(n.__typename),e.xp6(2),e.Q6J("cvcCacheId",n.__typename+":"+n.id)("cvcEmphasize",r)}}function Y(t,i){if(1&t&&(e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._UZ(4,"cvc-entity-tag",7),e.qZA(),e._UZ(5,"td")(6,"td")(7,"td")(8,"td")(9,"td"),e.qZA()),2&t){const n=e.oxw().$implicit,r=e.oxw().ngrxLet;e.xp6(2),e.Oqu(n.__typename),e.xp6(2),e.Q6J("cvcCacheId",n.__typename+":"+n.id)("cvcEmphasize",r)}}function W(t,i){if(1&t&&(e.ynx(0)(1,8),e.YNc(2,G,13,7,"tr",9),e.YNc(3,Q,13,7,"tr",9),e.YNc(4,V,11,3,"tr",9),e.YNc(5,j,11,3,"tr",9),e.YNc(6,H,11,3,"tr",9),e.YNc(7,K,11,3,"tr",9),e.YNc(8,Y,10,3,"tr",10),e.BQk()()),2&t){const n=i.$implicit;e.xp6(1),e.Q6J("ngSwitch",n.__typename),e.xp6(1),e.Q6J("ngSwitchCase","EvidenceItem"),e.xp6(1),e.Q6J("ngSwitchCase","MolecularProfile"),e.xp6(1),e.Q6J("ngSwitchCase","Gene"),e.xp6(1),e.Q6J("ngSwitchCase","Variant"),e.xp6(1),e.Q6J("ngSwitchCase","Therapy"),e.xp6(1),e.Q6J("ngSwitchCase","Disease")}}function k(t,i){if(1&t&&(e.ynx(0),e.YNc(1,W,9,7,"ng-container",6),e.TgZ(2,"tr")(3,"td"),e._uU(4,"CACHE MISS"),e.qZA(),e.TgZ(5,"td"),e._UZ(6,"cvc-entity-tag",7),e.qZA(),e._UZ(7,"td")(8,"td")(9,"td")(10,"td")(11,"td")(12,"td"),e.qZA(),e.BQk()),2&t){const n=i.ngrxLet;e.oxw();const r=e.MAs(2);e.xp6(1),e.Q6J("ngForOf",r.data),e.xp6(5),e.Q6J("cvcCacheId","FakeTypename:42")("cvcEmphasize",n)}}function ee(t,i){if(1&t){const n=e.EpF();e._uU(0," Emphasize: "),e.TgZ(1,"input",13,14),e.NdJ("ngModelChange",function(){e.CHM(n);const g=e.MAs(2),p=e.oxw();return e.KtG(p.emphasizeStr$.next(g.value))}),e.ALo(3,"ngrxPush"),e.qZA()}if(2&t){const n=e.oxw();e.xp6(1),e.Q6J("ngModel",e.lcZ(3,1,n.emphasizeStr$))}}const te=function(){return[]};let Z=((v=class{constructor(i){this.entityTagsTestGQL=i,this.emphasizeStr$=new J.X(""),this.queryParams={molecularProfileId:3133,geneId:5,variantId:2,therapyId:16,diseaseId:2198,eid:123},this.entityTagsData$=this.entityTagsTestGQL.fetch(this.queryParams).pipe((0,N.j)("data"),(0,D.h)(U.ep),(0,q._)("entityTagsData$"),(0,$.U)(n=>{console.log(n);const r=Object.values(n).filter(g=>"object"==typeof g);return console.log(r),r}))}tagChecked(i){console.log(`Tag checked: ${i}`)}ngOnInit(){}}).\u0275fac=function(i){return new(i||v)(e.Y36(B.eDl))},v.\u0275cmp=e.Xpm({type:v,selectors:[["cvc-nonstate-form"]],decls:26,vars:6,consts:[["nzTitle","Entity Tags & Features"],["nzSize","small",3,"nzShowPagination","nzData"],["tagTable",""],["nzWidth","150px"],[4,"ngrxLet"],["cardExtra",""],[4,"ngFor","ngForOf"],[3,"cvcCacheId","cvcEmphasize"],[3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"],["cvcMode","closeable",3,"cvcCacheId","cvcEmphasize"],["cvcMode","checkable",3,"cvcCacheId","cvcEmphasize","cvcTagCheckedChange"],["nz-input","","nzSize","small","type","text",3,"ngModel","ngModelChange"],["emphasizeInput",""]],template:function(i,n){1&i&&(e.TgZ(0,"nz-card",0)(1,"nz-table",1,2),e.ALo(3,"ngrxPush"),e.TgZ(4,"thead")(5,"tr")(6,"th",3),e._uU(7,"Entity"),e.qZA(),e.TgZ(8,"th"),e._uU(9,"Default"),e.qZA(),e.TgZ(10,"th"),e._uU(11,"Popover"),e.qZA(),e.TgZ(12,"th"),e._uU(13,"Closeable"),e.qZA(),e.TgZ(14,"th"),e._uU(15,"Checkable"),e.qZA(),e.TgZ(16,"th"),e._uU(17,"Trucate"),e.qZA(),e.TgZ(18,"th"),e._uU(19,"Group"),e.qZA(),e.TgZ(20,"th"),e._uU(21,"Unlinked"),e.qZA()()(),e.TgZ(22,"tbody"),e.YNc(23,k,13,3,"ng-container",4),e.qZA()()(),e.YNc(24,ee,4,3,"ng-template",null,5,e.W1O)),2&i&&(e.xp6(1),e.Q6J("nzShowPagination",!1)("nzData",e.lcZ(3,3,n.entityTagsData$)||e.DdM(5,te)),e.xp6(22),e.Q6J("ngrxLet",n.emphasizeStr$))},dependencies:[o.sg,o.RF,o.n9,o.ED,S.eJ,d.Fj,d.JJ,d.On,L.bd,m.N8,m.Uo,m._C,m.Om,m.p0,m.$Z,X.J,S.fM],styles:["[_nghost-%COMP%]{display:block}nz-card[_ngcontent-%COMP%]:first-of-type     .ant-card-body{padding:0;margin-top:1px}.table-info[_ngcontent-%COMP%]{margin-left:.5rem}tr.col-header-row[_ngcontent-%COMP%]   th.ant-table-cell[_ngcontent-%COMP%]{white-space:nowrap}tr.col-header-row[_ngcontent-%COMP%]   th.ant-table-cell.align-right[_ngcontent-%COMP%]     .ant-table-column-title{text-align:right}tr.filter-row[_ngcontent-%COMP%]   th.ant-table-cell[_ngcontent-%COMP%]{padding:3px 4px}tr.filter-row[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   nz-filter-trigger[_ngcontent-%COMP%]     span.ant-dropdown-trigger{margin-left:0;padding-right:12px}tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell[_ngcontent-%COMP%]{white-space:nowrap}tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell[_ngcontent-%COMP%]   .anticon.attribute-icon[_ngcontent-%COMP%]{color:#595959}tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell.overflow-ellipsis[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis}tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell.button-cell[_ngcontent-%COMP%]{padding:0}tr.data-row[_ngcontent-%COMP%]   td.align-right[_ngcontent-%COMP%], tr.col-header-row[_ngcontent-%COMP%]   th.ant-table-cell[_ngcontent-%COMP%]   .align-right[_ngcontent-%COMP%], tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell[_ngcontent-%COMP%]   .align-right[_ngcontent-%COMP%], tr.filter-row[_ngcontent-%COMP%]   th.ant-table-cell[_ngcontent-%COMP%]   .align-right[_ngcontent-%COMP%]{text-align:right}"],changeDetection:0}),v);Z=(0,E.gn)([(0,R.c)()],Z);let ne=(()=>{class t{constructor(){this.form=new d.nJ({}),this.model=x,this.formLayout="inline",this.options={formState:{formLayout:this.formLayout}},this.fields=[{key:"fields",wrappers:["form-card"],props:{title:"Inline Field Layout, No State"},fieldGroup:A}]}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["cvc-inline-form"]],decls:2,vars:6,consts:[["nz-form","",3,"nzLayout","formGroup"],[2,"width","100%",3,"form","fields","model","options","modelChange"]],template:function(n,r){1&n&&(e.TgZ(0,"form",0)(1,"formly-form",1),e.NdJ("modelChange",function(p){return r.model=p}),e.qZA()()),2&n&&(e.Q6J("nzLayout",r.formLayout)("formGroup",r.form),e.xp6(1),e.Q6J("form",r.form)("fields",r.fields)("model",r.model)("options",r.options))},dependencies:[d._Y,d.JL,d.sg,I.T7,O.Lr],encapsulation:2,changeDetection:0}),t})(),ie=(()=>{class t{constructor(){this.form=new d.nJ({}),this.model=x,this.formLayout="vertical",this.options={formState:{formLayout:this.formLayout}},this.fields=[{key:"fields",wrappers:["form-card"],props:{title:"Vertical Field Layout, No State"},fieldGroup:A}]}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["cvc-vertical-form"]],decls:2,vars:4,consts:[["nz-form","","nzLayout","vertical",3,"formGroup"],[2,"width","100%",3,"form","fields","model","modelChange"]],template:function(n,r){1&n&&(e.TgZ(0,"form",0)(1,"formly-form",1),e.NdJ("modelChange",function(p){return r.model=p}),e.qZA()()),2&n&&(e.Q6J("formGroup",r.form),e.xp6(1),e.Q6J("form",r.form)("fields",r.fields)("model",r.model))},dependencies:[d._Y,d.JL,d.sg,I.T7,O.Lr],encapsulation:2,changeDetection:0}),t})();var M=a(6254),b=a(95),P=a(9382),ae=a(3145);function oe(t,i){if(1&t&&(e.TgZ(0,"a",9),e._uU(1),e.qZA()),2&t){const n=e.oxw().$implicit;e.Q6J("routerLink",n.routeName),e.xp6(1),e.hij(" ",n.tabLabel," ")}}function re(t,i){1&t&&(e.TgZ(0,"nz-tab"),e.YNc(1,oe,2,2,"a",8),e.qZA())}let se=(()=>{class t{constructor(n){this.router=n,this.selectedTabIndex=this.getActivatedRouteIndex(this.router.url),this.tabs=[{routeName:"evidence-submit-test",iconName:"civic-evidence",tabLabel:"Evidence Submit"},{routeName:"evidence-revise-test",iconName:"",tabLabel:"Evidence Revise"},{routeName:"assertion-submit-test",iconName:"",tabLabel:"Assertion Submit"},{routeName:"assertion-revise-test",iconName:"",tabLabel:"Assertion Revise"},{routeName:"variantgroup-revise-test",iconName:"",tabLabel:"VG Revise"},{routeName:"gene-revise-test",iconName:"",tabLabel:"Gene Revise"},{routeName:"mp-revise-test",iconName:"",tabLabel:"MP Revise"},{routeName:"variant-revise-test",iconName:"",tabLabel:"Variant Revise"},{routeName:"vertical-form",iconName:"",tabLabel:"Vertical"},{routeName:"inline-form",iconName:"",tabLabel:"Inline"},{routeName:"horizontal-form",iconName:"",tabLabel:"Horizontal"},{routeName:"tags-test",iconName:"",tabLabel:"Tags"}]}getActivatedRouteIndex(n){return this.tabs?.findIndex(r=>n.includes(r.routeName))}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(l.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["cvc-test-pages"]],decls:15,vars:4,consts:[[1,"site-page-header"],["cvcFlaggableOptions",""],[3,"nzSpan"],["id","section-tabs"],["nzSpan","24"],["nzLinkRouter","","nzType","card","nzSize","small",3,"nzSelectedIndex"],[4,"ngFor","ngForOf"],[1,"content"],["nz-tab-link","",3,"routerLink",4,"nzTabLink"],["nz-tab-link","",3,"routerLink"]],template:function(n,r){1&n&&(e._UZ(0,"cvc-section-navigation"),e.TgZ(1,"nz-page-header",0)(2,"nz-page-header-title",1),e._uU(3," Forms2 Test Pages "),e.qZA(),e.TgZ(4,"nz-page-header-content")(5,"nz-row")(6,"nz-col",2)(7,"nz-row",3)(8,"nz-col",4)(9,"nz-tabset",5),e.YNc(10,re,2,0,"nz-tab",6),e.qZA()()()()(),e.TgZ(11,"nz-row")(12,"nz-col",2)(13,"div",7),e._UZ(14,"router-outlet"),e.qZA()()()()()),2&n&&(e.xp6(6),e.Q6J("nzSpan",24),e.xp6(3),e.Q6J("nzSelectedIndex",r.selectedTabIndex),e.xp6(1),e.Q6J("ngForOf",r.tabs),e.xp6(2),e.Q6J("nzSpan",24))},dependencies:[o.sg,l.lC,l.rH,M.$O,M.u9,M.u5,b.t3,b.SK,P.xH,P.xw,P.Ao,P.Fx,ae.I],styles:["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]     nz-page-header:first-of-type{background-color:#fff;border-radius:8px}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content{flex-wrap:nowrap;background-color:#f0f0f0;border-top-left-radius:8px;border-top-right-radius:8px;margin:-12px -16px 16px;border-bottom:1px solid #bfbfbf}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-icon{padding:12px 0 12px 12px}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-icon i{width:100%}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-icon i   svg{width:100%;height:100%}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-description{padding:12px}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-description h2{color:#262626;margin:-8px 0 0;font-weight:500}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-description p{color:#262626;margin:-2px 0 0;padding:0;font-size:95%;line-height:1.5em}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-links{text-align:right;padding:12px}[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card{width:100%}[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card .card-grid-cell{width:50%}[_nghost-%COMP%]     nz-page-header:first-of-type nz-page-header-title.flagged{padding-left:.75em}[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-content{padding-top:0;padding-bottom:12px}[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-heading-extra nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs{margin:0 -16px 12px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap{padding-left:16px;padding-right:16px;line-height:24px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab{padding:1px 8px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab .anticon{margin-right:0}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-extra-content{margin-right:16px}"],changeDetection:0}),t})();var ce=a(2480);let de=(()=>{class t{constructor(n){this.cdr=n}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(e.sBO))},t.\u0275cmp=e.Xpm({type:t,selectors:[["cvc-variantgroup-revise-test-page"]],decls:1,vars:0,template:function(n,r){1&n&&e._UZ(0,"cvc-variantgroup-revise-form")},dependencies:[ce.L],encapsulation:2}),t})();var le=a(8454);let pe=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["cvc-gene-form"]],decls:1,vars:1,consts:[[3,"geneId"]],template:function(n,r){1&n&&e._UZ(0,"cvc-gene-revise-form",0),2&n&&e.Q6J("geneId",6)},dependencies:[le.$],encapsulation:2,changeDetection:0}),t})();var ge=a(3821);let ue=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["cvc-mp-form"]],decls:1,vars:1,consts:[[3,"molecularProfileId"]],template:function(n,r){1&n&&e._UZ(0,"cvc-mp-revise-form",0),2&n&&e.Q6J("molecularProfileId",3176)},dependencies:[ge.R],encapsulation:2,changeDetection:0}),t})();var me=a(7093);const fe=[{path:"",component:se,children:[{path:"",redirectTo:"evidence-submit-test",pathMatch:"full"},{path:"evidence-submit-test",component:T,data:{breadcrumb:"Evidence Submit Test"}},{path:"evidence-revise-test",component:s,data:{breadcrumb:"Evidence Revise Test"}},{path:"assertion-submit-test",component:y,data:{breadcrumb:"Assertion Submit Test"}},{path:"assertion-revise-test",component:f,data:{breadcrumb:"Assertion Revise Test"}},{path:"variantgroup-revise-test",component:de,data:{breadcrumb:"Variant Group Revise Test"}},{path:"gene-revise-test",component:pe,data:{breadcrumb:"Gene Revise Test"}},{path:"mp-revise-test",component:ue,data:{breadcrumb:"MP Revise Test"}},{path:"variant-revise-test",component:(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["cvc-variant-form"]],decls:1,vars:1,consts:[[3,"variantId"]],template:function(n,r){1&n&&e._UZ(0,"cvc-variant-revise-form",0),2&n&&e.Q6J("variantId",4)},dependencies:[me.J],encapsulation:2,changeDetection:0}),t})(),data:{breadcrumb:"Variant Revise Test"}},{path:"vertical-form",component:ie,data:{breadcrumb:"Nonstate"}},{path:"inline-form",component:ne,data:{breadcrumb:"Inline"}},{path:"horizontal-form",component:F,data:{breadcrumb:"Horizontal"}},{path:"tags-test",component:Z,data:{breadcrumb:"Horizontal"}}]}];let ve=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[l.Bz.forChild(fe),l.Bz]}),t})();var he=a(2419),_e=a(4059),ye=a(551),Te=a(2392),Pe=a(2524),Ce=a(8253),Me=a(2574);let ze=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[o.ez,Ce.Z,Me.zf]}),t})();var xe=a(1986);let Ae=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[o.ez,xe.A]}),t})();var Ie=a(1810);let Oe=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[o.ez,Ie.E]}),t})();var Ze=a(1487);let be=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[o.ez,Ze.P]}),t})();var w=a(706);let we=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[o.ez,w.S]}),t})(),Se=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[o.ez,w.S]}),t})(),Le=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[o.ez,w.S]}),t})();var Fe=a(188);let Ee=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[o.ez,d.u5,L.vh,m.HQ,Fe.x]}),t})();var Re=a(9138);let Je=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[o.ez,Re.A]}),t})();var De=a(6586);let $e=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[o.ez,De.C]}),t})();var Ue=a(6012);let Ne=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[o.ez,Ue.i]}),t})();var qe=a(3281);let Be=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[o.ez,qe.K]}),t})(),Xe=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[o.ez,ve,M.KJ,b.Jb,ye.PV,Te.ZJ,P.we,ze,Ae,$e,Ne,Oe,be,Be,we,Se,Le,Ee,Pe.s,_e.c,he.D,Je]}),t})()}}]);