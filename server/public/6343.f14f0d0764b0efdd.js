"use strict";(self.webpackChunkmain=self.webpackChunkmain||[]).push([[6343],{8762:(V,u,a)=>{a.d(u,{c:()=>s});var o=a(6895),p=a(3513),e=a(3679),L=a(9116),g=a(1102),h=a(2635),f=a(48),c=a(4650);class s{}s.\u0275fac=function(m){return new(m||s)},s.\u0275mod=c.oAB({type:s}),s.\u0275inj=c.cJS({imports:[o.ez,L.Bz,p.we,e.Jb,g.PV,f.mS,h._N,h.pP]})},2907:(V,u,a)=>{a.d(u,{J:()=>p,i:()=>o});const o={molecularProfileId:void 0,acmgCodeIds:[],ampLevel:void 0,assertionDirection:void 0,assertionType:void 0,clingenCodeIds:[],significance:void 0,description:void 0,diseaseId:void 0,therapyIds:[],therapyInteractionType:void 0,evidenceItemIds:[],fdaCompanionTest:void 0,fdaRegulatoryApproval:void 0,nccnGuidelineId:void 0,nccnGuidelineVersion:void 0,phenotypeIds:[],summary:void 0,variantOrigin:void 0},p={clientMutationId:void 0,fields:o,comment:void 0,organizationId:void 0}},7726:(V,u,a)=>{a.d(u,{_:()=>h});var o=a(7630),p=a(9933),e=a(1135),L=a(2907),g=a(5451);class h extends g.lG{constructor(){super(g.yQ.ASSERTION);const c=L.i;this.fields={molecularProfileId$:new e.X(c.molecularProfileId),variantMolecularProfile$:new e.X(void 0),geneId$:new e.X(void 0),variantId$:new e.X(void 0),variantOrigin$:new e.X(c.variantOrigin),assertionType$:new e.X(c.assertionType),assertionDirection$:new e.X(c.assertionDirection),evidenceItemIds$:new e.X(c.evidenceItemIds),significance$:new e.X(c.significance),diseaseId$:new e.X(c.diseaseId),therapyIds$:new e.X(c.therapyIds),therapyInteractionType$:new e.X(c.therapyInteractionType),phenotypeIds$:new e.X(c.phenotypeIds),nccnGuidelineId$:new e.X(c.nccnGuidelineId),fdaRegulatoryApproval$:new e.X(c.fdaRegulatoryApproval),fdaCompanionTest$:new e.X(c.fdaCompanionTest),ampLevel$:new e.X(c.ampLevel),acmgCodeIds$:new e.X(c.acmgCodeIds),clingenCodeIds$:new e.X(c.clingenCodeIds),nccnGuidelineVersion$:new e.X(c.nccnGuidelineVersion)},this.enums={entityType$:new e.X(this.getTypeOptions()),significance$:new e.X([]),direction$:new e.X([]),interaction$:new e.X(this.getInteractionOptions())},this.options={assertionTypeOption$:new e.X(this.getOptionsFromEnums(this.getTypeOptions())),directionOption$:new e.X(void 0),significanceOption$:new e.X(void 0)},this.requires={requiresDisease$:new e.X(!1),requiresTherapy$:new e.X(!1),requiresTherapyInteractionType$:new e.X(!1),requiresClingenCodes$:new e.X(!1),requiresAcmgCodes$:new e.X(!1),requiresAmpLevel$:new e.X(!1),allowsFdaApproval$:new e.X(!1)},this.fields.assertionType$.pipe((0,p.t)(this,"onDestroy")).subscribe(s=>{if(!s)return Object.entries(this.requires).forEach(([X,m])=>{m.next(!1)}),this.enums.significance$.next([]),void this.enums.direction$.next([]);this.enums.significance$.next(this.getSignificanceOptions(s)),this.enums.direction$.next(this.getDirectionOptions(s)),this.requires.requiresDisease$.next(this.requiresDisease(s)),this.requires.requiresTherapy$.next(this.requiresTherapy(s)),this.requires.requiresClingenCodes$.next(this.requiresClingenCodes(s)),this.requires.requiresAcmgCodes$.next(this.requiresAcmgCodes(s)),this.requires.requiresAmpLevel$.next(this.requiresAmpLevel(s)),this.requires.allowsFdaApproval$.next(this.allowsFdaApproval(s))}),this.fields.therapyIds$.pipe((0,p.t)(this,"onDestroy")).subscribe(s=>{this.requires.requiresTherapyInteractionType$.next(null!=s&&s.length>1)}),this.validStates.set(o.uBv.Predictive,{entityType:o.uBv.Predictive,significance:[o._3P.Sensitivityresponse,o._3P.Resistance,o._3P.AdverseResponse,o._3P.ReducedSensitivity,o._3P.Na],entityDirection:[o.mdl.Supports,o.mdl.DoesNotSupport],requiresDisease:!0,requiresTherapy:!0,requiresClingenCodes:!1,requiresAcmgCodes:!1,requiresAmpLevel:!0,allowsFdaApproval:!0}),this.validStates.set(o.uBv.Diagnostic,{entityType:o.uBv.Diagnostic,significance:[o._3P.Positive,o._3P.Negative],entityDirection:[o.mdl.Supports,o.mdl.DoesNotSupport],requiresDisease:!0,requiresTherapy:!1,requiresClingenCodes:!1,requiresAcmgCodes:!1,requiresAmpLevel:!0,allowsFdaApproval:!1}),this.validStates.set(o.uBv.Prognostic,{entityType:o.uBv.Prognostic,significance:[o._3P.BetterOutcome,o._3P.PoorOutcome,o._3P.Na],entityDirection:[o.mdl.Supports,o.mdl.DoesNotSupport],requiresDisease:!0,requiresTherapy:!1,requiresClingenCodes:!1,requiresAcmgCodes:!1,requiresAmpLevel:!0,allowsFdaApproval:!1}),this.validStates.set(o.uBv.Predisposing,{entityType:o.uBv.Predisposing,significance:[o._3P.Pathogenic,o._3P.LikelyPathogenic,o._3P.Benign,o._3P.LikelyBenign,o._3P.UncertainSignificance],entityDirection:[o.mdl.Supports],requiresDisease:!0,requiresTherapy:!1,requiresClingenCodes:!1,requiresAcmgCodes:!0,requiresAmpLevel:!1,allowsFdaApproval:!1}),this.validStates.set(o.uBv.Oncogenic,{entityType:o.uBv.Oncogenic,significance:[o._3P.Oncogenic,o._3P.LikelyOncogenic,o._3P.Benign,o._3P.LikelyBenign,o._3P.UncertainSignificance],entityDirection:[o.mdl.Supports],requiresDisease:!0,requiresTherapy:!1,requiresClingenCodes:!0,requiresAcmgCodes:!1,requiresAmpLevel:!1,allowsFdaApproval:!1})}}},8317:(V,u,a)=>{a.r(u),a.d(u,{TestPagesModule:()=>S});var o=a(6895),p=a(9116),e=a(4650),L=a(9878);class g{constructor(){}ngOnInit(){}}g.\u0275fac=function(t){return new(t||g)},g.\u0275cmp=e.Xpm({type:g,selectors:[["cvc-nonstate-form"]],decls:1,vars:1,consts:[[3,"assertionId"]],template:function(t,i){1&t&&e._UZ(0,"cvc-assertion-revise-form",0),2&t&&e.Q6J("assertionId",3)},dependencies:[L.G],encapsulation:2,changeDetection:0});var h=a(65);class f{constructor(){}ngOnInit(){}}f.\u0275fac=function(t){return new(t||f)},f.\u0275cmp=e.Xpm({type:f,selectors:[["cvc-assertion-submit-test-page"]],decls:1,vars:0,template:function(t,i){1&t&&e._UZ(0,"cvc-assertion-submit-form")},dependencies:[h.u],encapsulation:2,changeDetection:0});var c=a(9201);class s{constructor(){}ngOnInit(){}}s.\u0275fac=function(t){return new(t||s)},s.\u0275cmp=e.Xpm({type:s,selectors:[["cvc-evidence-revise-test-page"]],decls:1,vars:1,consts:[[3,"evidenceId"]],template:function(t,i){1&t&&e._UZ(0,"cvc-evidence-revise-form",0),2&t&&e.Q6J("evidenceId",7606)},dependencies:[c.r],encapsulation:2,changeDetection:0});var X=a(634);class m{constructor(){}ngOnInit(){}}m.\u0275fac=function(t){return new(t||m)},m.\u0275cmp=e.Xpm({type:m,selectors:[["cvc-nonstate-form"]],decls:1,vars:0,template:function(t,i){1&t&&e._UZ(0,"cvc-evidence-submit-form")},dependencies:[X.l],encapsulation:2,changeDetection:0});var d=a(4006);const j={geneId:void 0},H=[{key:"molecularProfileId",type:"molecular-profile-select",props:{}},{key:"molecularProfileIds",type:"molecular-profile-multi-select",props:{}},{wrappers:["field-grid"],props:{grid:{cols:2}},fieldGroup:[{key:"evidenceType",type:"type-select",props:{}},{key:"evidenceTypes",type:"type-multi-select",props:{}}]},{wrappers:["field-grid"],props:{grid:{cols:2}},fieldGroup:[{key:"geneId",type:"gene-select"},{key:"geneIds",type:"gene-multi-select",props:{}}]},{wrappers:["field-grid"],props:{grid:{cols:2}},fieldGroup:[{key:"variantId",type:"variant-select",props:{requireGene:!1}},{key:"variantIds",type:"variant-multi-select",props:{requireGene:!1}}]},{wrappers:["field-grid"],props:{grid:{cols:2}},fieldGroup:[{key:"sourceId",type:"source-select",props:{}},{key:"sourceIds",type:"source-multi-select",props:{}}]},{wrappers:["field-grid"],props:{grid:{cols:2}},fieldGroup:[{key:"diseaseId",type:"disease-select",props:{}},{key:"diseaseIds",type:"disease-multi-select",props:{}}]},{wrappers:["field-grid"],props:{grid:{cols:2}},fieldGroup:[{key:"drugId",type:"therapy-select",props:{}},{key:"drugIds",type:"therapy-multi-select",props:{}}]},{wrappers:["field-grid"],props:{grid:{cols:2}},fieldGroup:[{key:"evidenceLevel",type:"level-select",props:{}},{key:"evidenceLevel",type:"level-multi-select",props:{}}]},{wrappers:["field-grid"],props:{grid:{cols:2}},fieldGroup:[{key:"variantOrigin",type:"origin-select",props:{}},{key:"variantOrigins",type:"origin-multi-select",props:{}}]}];var K=a(6212),Y=a(6704);class E{constructor(){this.form=new d.nJ({}),this.model=j,this.formLayout="horizontal",this.options={formState:{formLayout:this.formLayout}},this.fields=[{key:"fields",wrappers:["form-card"],props:{title:"Horizontal Field Layout, No State"},fieldGroup:H}]}ngOnInit(){}}E.\u0275fac=function(t){return new(t||E)},E.\u0275cmp=e.Xpm({type:E,selectors:[["cvc-horizontal-form"]],decls:2,vars:6,consts:[["nz-form","",3,"nzLayout","formGroup"],[2,"width","100%",3,"form","fields","model","options","modelChange"]],template:function(t,i){1&t&&(e.TgZ(0,"form",0)(1,"formly-form",1),e.NdJ("modelChange",function(l){return i.model=l}),e.qZA()()),2&t&&(e.Q6J("nzLayout",i.formLayout)("formGroup",i.form),e.xp6(1),e.Q6J("form",i.form)("fields",i.fields)("model",i.model)("options",i.options))},dependencies:[d._Y,d.JL,d.sg,K.T7,Y.Lr],encapsulation:2,changeDetection:0});var ie=a(655),ae=a(9933),oe=a(1135),re=a(9300),se=a(4004),ce=a(3240),de=a(6579);function te(n,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}var _,fe=function(){function n(t){(function le(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")})(this,n),function ge(n,t,i){t in n?Object.defineProperty(n,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[t]=i}(this,"tag",void 0),this.tag=t}return function pe(n,t,i){t&&te(n.prototype,t),i&&te(n,i)}(n,[{key:"call",value:function(i,r){return r.subscribe(i)}}]),n}(),ve=a(7630),Q=a(2635),ne=a(1971),v=a(6675),he=a(8699);function _e(n,t){if(1&n){const i=e.EpF();e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._UZ(4,"cvc-entity-tag",7),e.qZA(),e._UZ(5,"td"),e.TgZ(6,"td"),e._UZ(7,"cvc-entity-tag",11),e.qZA(),e.TgZ(8,"td")(9,"cvc-entity-tag",12),e.NdJ("cvcTagCheckedChange",function(l){e.CHM(i);const B=e.oxw(3);return e.KtG(B.tagChecked(l))}),e.qZA()(),e._UZ(10,"td")(11,"td")(12,"td"),e.qZA()}if(2&n){const i=e.oxw().$implicit,r=e.oxw().ngrxLet;e.xp6(2),e.Oqu(i.__typename),e.xp6(2),e.Q6J("cvcCacheId",i.__typename+":"+i.id)("cvcEmphasize",r),e.xp6(3),e.Q6J("cvcCacheId",i.__typename+":"+i.id)("cvcEmphasize",r),e.xp6(2),e.Q6J("cvcCacheId",i.__typename+":"+i.id)("cvcEmphasize",r)}}function ye(n,t){if(1&n){const i=e.EpF();e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._UZ(4,"cvc-entity-tag",7),e.qZA(),e._UZ(5,"td"),e.TgZ(6,"td"),e._UZ(7,"cvc-entity-tag",11),e.qZA(),e.TgZ(8,"td")(9,"cvc-entity-tag",12),e.NdJ("cvcTagCheckedChange",function(l){e.CHM(i);const B=e.oxw(3);return e.KtG(B.tagChecked(l))}),e.qZA()(),e._UZ(10,"td")(11,"td")(12,"td"),e.qZA()}if(2&n){const i=e.oxw().$implicit,r=e.oxw().ngrxLet;e.xp6(2),e.Oqu(i.__typename),e.xp6(2),e.Q6J("cvcCacheId",i.__typename+":"+i.id)("cvcEmphasize",r),e.xp6(3),e.Q6J("cvcCacheId",i.__typename+":"+i.id)("cvcEmphasize",r),e.xp6(2),e.Q6J("cvcCacheId",i.__typename+":"+i.id)("cvcEmphasize",r)}}function Te(n,t){if(1&n&&(e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._UZ(4,"cvc-entity-tag",7),e.qZA(),e._UZ(5,"td")(6,"td")(7,"td")(8,"td")(9,"td")(10,"td"),e.qZA()),2&n){const i=e.oxw().$implicit,r=e.oxw().ngrxLet;e.xp6(2),e.Oqu(i.__typename),e.xp6(2),e.Q6J("cvcCacheId",i.__typename+":"+i.id)("cvcEmphasize",r)}}function Pe(n,t){if(1&n&&(e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._UZ(4,"cvc-entity-tag",7),e.qZA(),e._UZ(5,"td")(6,"td")(7,"td")(8,"td")(9,"td")(10,"td"),e.qZA()),2&n){const i=e.oxw().$implicit,r=e.oxw().ngrxLet;e.xp6(2),e.Oqu(i.__typename),e.xp6(2),e.Q6J("cvcCacheId",i.__typename+":"+i.id)("cvcEmphasize",r)}}function Ce(n,t){if(1&n&&(e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._UZ(4,"cvc-entity-tag",7),e.qZA(),e._UZ(5,"td")(6,"td")(7,"td")(8,"td")(9,"td")(10,"td"),e.qZA()),2&n){const i=e.oxw().$implicit,r=e.oxw().ngrxLet;e.xp6(2),e.Oqu(i.__typename),e.xp6(2),e.Q6J("cvcCacheId",i.__typename+":"+i.id)("cvcEmphasize",r)}}function ze(n,t){if(1&n&&(e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._UZ(4,"cvc-entity-tag",7),e.qZA(),e._UZ(5,"td")(6,"td")(7,"td")(8,"td")(9,"td")(10,"td"),e.qZA()),2&n){const i=e.oxw().$implicit,r=e.oxw().ngrxLet;e.xp6(2),e.Oqu(i.__typename),e.xp6(2),e.Q6J("cvcCacheId",i.__typename+":"+i.id)("cvcEmphasize",r)}}function xe(n,t){if(1&n&&(e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._UZ(4,"cvc-entity-tag",7),e.qZA(),e._UZ(5,"td")(6,"td")(7,"td")(8,"td")(9,"td"),e.qZA()),2&n){const i=e.oxw().$implicit,r=e.oxw().ngrxLet;e.xp6(2),e.Oqu(i.__typename),e.xp6(2),e.Q6J("cvcCacheId",i.__typename+":"+i.id)("cvcEmphasize",r)}}function Oe(n,t){if(1&n&&(e.ynx(0)(1,8),e.YNc(2,_e,13,7,"tr",9),e.YNc(3,ye,13,7,"tr",9),e.YNc(4,Te,11,3,"tr",9),e.YNc(5,Pe,11,3,"tr",9),e.YNc(6,Ce,11,3,"tr",9),e.YNc(7,ze,11,3,"tr",9),e.YNc(8,xe,10,3,"tr",10),e.BQk()()),2&n){const i=t.$implicit;e.xp6(1),e.Q6J("ngSwitch",i.__typename),e.xp6(1),e.Q6J("ngSwitchCase","EvidenceItem"),e.xp6(1),e.Q6J("ngSwitchCase","MolecularProfile"),e.xp6(1),e.Q6J("ngSwitchCase","Gene"),e.xp6(1),e.Q6J("ngSwitchCase","Variant"),e.xp6(1),e.Q6J("ngSwitchCase","Therapy"),e.xp6(1),e.Q6J("ngSwitchCase","Disease")}}function Me(n,t){if(1&n&&(e.ynx(0),e.YNc(1,Oe,9,7,"ng-container",6),e.TgZ(2,"tr")(3,"td"),e._uU(4,"CACHE MISS"),e.qZA(),e.TgZ(5,"td"),e._UZ(6,"cvc-entity-tag",7),e.qZA(),e._UZ(7,"td")(8,"td")(9,"td")(10,"td")(11,"td")(12,"td"),e.qZA(),e.BQk()),2&n){const i=t.ngrxLet;e.oxw();const r=e.MAs(2);e.xp6(1),e.Q6J("ngForOf",r.data),e.xp6(5),e.Q6J("cvcCacheId","FakeTypename:42")("cvcEmphasize",i)}}function Ae(n,t){if(1&n){const i=e.EpF();e._uU(0," Emphasize: "),e.TgZ(1,"input",13,14),e.NdJ("ngModelChange",function(){e.CHM(i);const l=e.MAs(2),B=e.oxw();return e.KtG(B.emphasizeStr$.next(l.value))}),e.ALo(3,"ngrxPush"),e.qZA()}if(2&n){const i=e.oxw();e.xp6(1),e.Q6J("ngModel",e.lcZ(3,1,i.emphasizeStr$))}}const Ie=function(){return[]};let W=((_=class{constructor(t){this.entityTagsTestGQL=t,this.emphasizeStr$=new oe.X(""),this.queryParams={molecularProfileId:3133,geneId:5,variantId:2,therapyId:16,diseaseId:2198,eid:123},this.entityTagsData$=this.entityTagsTestGQL.fetch(this.queryParams).pipe((0,de.j)("data"),(0,re.h)(ce.ep),function ue(n){return function(i){return i.lift(new fe(n))}}("entityTagsData$"),(0,se.U)(i=>{console.log(i);const r=Object.values(i).filter(l=>"object"==typeof l);return console.log(r),r}))}tagChecked(t){console.log(`Tag checked: ${t}`)}ngOnInit(){}}).\u0275fac=function(t){return new(t||_)(e.Y36(ve.eDl))},_.\u0275cmp=e.Xpm({type:_,selectors:[["cvc-nonstate-form"]],decls:26,vars:6,consts:[["nzTitle","Entity Tags & Features"],["nzSize","small",3,"nzShowPagination","nzData"],["tagTable",""],["nzWidth","150px"],[4,"ngrxLet"],["cardExtra",""],[4,"ngFor","ngForOf"],[3,"cvcCacheId","cvcEmphasize"],[3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"],["cvcMode","closeable",3,"cvcCacheId","cvcEmphasize"],["cvcMode","checkable",3,"cvcCacheId","cvcEmphasize","cvcTagCheckedChange"],["nz-input","","nzSize","small","type","text",3,"ngModel","ngModelChange"],["emphasizeInput",""]],template:function(t,i){1&t&&(e.TgZ(0,"nz-card",0)(1,"nz-table",1,2),e.ALo(3,"ngrxPush"),e.TgZ(4,"thead")(5,"tr")(6,"th",3),e._uU(7,"Entity"),e.qZA(),e.TgZ(8,"th"),e._uU(9,"Default"),e.qZA(),e.TgZ(10,"th"),e._uU(11,"Popover"),e.qZA(),e.TgZ(12,"th"),e._uU(13,"Closeable"),e.qZA(),e.TgZ(14,"th"),e._uU(15,"Checkable"),e.qZA(),e.TgZ(16,"th"),e._uU(17,"Trucate"),e.qZA(),e.TgZ(18,"th"),e._uU(19,"Group"),e.qZA(),e.TgZ(20,"th"),e._uU(21,"Unlinked"),e.qZA()()(),e.TgZ(22,"tbody"),e.YNc(23,Me,13,3,"ng-container",4),e.qZA()()(),e.YNc(24,Ae,4,3,"ng-template",null,5,e.W1O)),2&t&&(e.xp6(1),e.Q6J("nzShowPagination",!1)("nzData",e.lcZ(3,3,i.entityTagsData$)||e.DdM(5,Ie)),e.xp6(22),e.Q6J("ngrxLet",i.emphasizeStr$))},dependencies:[o.sg,o.RF,o.n9,o.ED,Q.eJ,d.Fj,d.JJ,d.On,ne.bd,v.N8,v.Uo,v._C,v.Om,v.p0,v.$Z,he.J,Q.fM],styles:["[_nghost-%COMP%]{display:block}nz-card[_ngcontent-%COMP%]:first-of-type     .ant-card-body{padding:0;margin-top:1px}.table-info[_ngcontent-%COMP%]{margin-left:.5rem}tr.col-header-row[_ngcontent-%COMP%]   th.ant-table-cell[_ngcontent-%COMP%]{white-space:nowrap}tr.col-header-row[_ngcontent-%COMP%]   th.ant-table-cell.align-right[_ngcontent-%COMP%]     .ant-table-column-title{text-align:right}tr.filter-row[_ngcontent-%COMP%]   th.ant-table-cell[_ngcontent-%COMP%]{padding:3px 4px}tr.filter-row[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   nz-filter-trigger[_ngcontent-%COMP%]     span.ant-dropdown-trigger{margin-left:0;padding-right:12px}tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell[_ngcontent-%COMP%]{white-space:nowrap}tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell[_ngcontent-%COMP%]   .anticon.attribute-icon[_ngcontent-%COMP%]{color:#595959}tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell.overflow-ellipsis[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis}tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell.button-cell[_ngcontent-%COMP%]{padding:0}tr.data-row[_ngcontent-%COMP%]   td.align-right[_ngcontent-%COMP%], tr.col-header-row[_ngcontent-%COMP%]   th.ant-table-cell[_ngcontent-%COMP%]   .align-right[_ngcontent-%COMP%], tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell[_ngcontent-%COMP%]   .align-right[_ngcontent-%COMP%], tr.filter-row[_ngcontent-%COMP%]   th.ant-table-cell[_ngcontent-%COMP%]   .align-right[_ngcontent-%COMP%]{text-align:right}"],changeDetection:0}),_);W=(0,ie.gn)([(0,ae.c)()],W);class F{constructor(){this.form=new d.nJ({}),this.model=j,this.formLayout="inline",this.options={formState:{formLayout:this.formLayout}},this.fields=[{key:"fields",wrappers:["form-card"],props:{title:"Inline Field Layout, No State"},fieldGroup:H}]}ngOnInit(){}}F.\u0275fac=function(t){return new(t||F)},F.\u0275cmp=e.Xpm({type:F,selectors:[["cvc-inline-form"]],decls:2,vars:6,consts:[["nz-form","",3,"nzLayout","formGroup"],[2,"width","100%",3,"form","fields","model","options","modelChange"]],template:function(t,i){1&t&&(e.TgZ(0,"form",0)(1,"formly-form",1),e.NdJ("modelChange",function(l){return i.model=l}),e.qZA()()),2&t&&(e.Q6J("nzLayout",i.formLayout)("formGroup",i.form),e.xp6(1),e.Q6J("form",i.form)("fields",i.fields)("model",i.model)("options",i.options))},dependencies:[d._Y,d.JL,d.sg,K.T7,Y.Lr],encapsulation:2,changeDetection:0});class J{constructor(){this.form=new d.nJ({}),this.model=j,this.formLayout="vertical",this.options={formState:{formLayout:this.formLayout}},this.fields=[{key:"fields",wrappers:["form-card"],props:{title:"Vertical Field Layout, No State"},fieldGroup:H}]}ngOnInit(){}}J.\u0275fac=function(t){return new(t||J)},J.\u0275cmp=e.Xpm({type:J,selectors:[["cvc-vertical-form"]],decls:2,vars:4,consts:[["nz-form","","nzLayout","vertical",3,"formGroup"],[2,"width","100%",3,"form","fields","model","modelChange"]],template:function(t,i){1&t&&(e.TgZ(0,"form",0)(1,"formly-form",1),e.NdJ("modelChange",function(l){return i.model=l}),e.qZA()()),2&t&&(e.Q6J("formGroup",i.form),e.xp6(1),e.Q6J("form",i.form)("fields",i.fields)("model",i.model))},dependencies:[d._Y,d.JL,d.sg,K.T7,Y.Lr],encapsulation:2,changeDetection:0});var G=a(5655),k=a(3679),D=a(3513),be=a(8992);function Ze(n,t){if(1&n&&(e.TgZ(0,"a",9),e._uU(1),e.qZA()),2&n){const i=e.oxw().$implicit;e.Q6J("routerLink",i.routeName),e.xp6(1),e.hij(" ",i.tabLabel," ")}}function we(n,t){1&n&&(e.TgZ(0,"nz-tab"),e.YNc(1,Ze,2,2,"a",8),e.qZA())}class R{constructor(t){this.router=t,this.selectedTabIndex=this.getActivatedRouteIndex(this.router.url),this.tabs=[{routeName:"evidence-submit-test",iconName:"civic-evidence",tabLabel:"Evidence Submit"},{routeName:"evidence-revise-test",iconName:"",tabLabel:"Evidence Revise"},{routeName:"assertion-submit-test",iconName:"",tabLabel:"Assertion Submit"},{routeName:"assertion-revise-test",iconName:"",tabLabel:"Assertion Revise"},{routeName:"variantgroup-revise-test",iconName:"",tabLabel:"VG Revise"},{routeName:"gene-revise-test",iconName:"",tabLabel:"Gene Revise"},{routeName:"mp-revise-test",iconName:"",tabLabel:"MP Revise"},{routeName:"variant-revise-test",iconName:"",tabLabel:"Variant Revise"},{routeName:"vertical-form",iconName:"",tabLabel:"Vertical"},{routeName:"inline-form",iconName:"",tabLabel:"Inline"},{routeName:"horizontal-form",iconName:"",tabLabel:"Horizontal"},{routeName:"tags-test",iconName:"",tabLabel:"Tags"}]}getActivatedRouteIndex(t){return this.tabs?.findIndex(i=>t.includes(i.routeName))}}R.\u0275fac=function(t){return new(t||R)(e.Y36(p.F0))},R.\u0275cmp=e.Xpm({type:R,selectors:[["cvc-test-pages"]],decls:15,vars:4,consts:[[1,"site-page-header"],["cvcFlaggableOptions",""],[3,"nzSpan"],["id","section-tabs"],["nzSpan","24"],["nzLinkRouter","","nzType","card","nzSize","small",3,"nzSelectedIndex"],[4,"ngFor","ngForOf"],[1,"content"],["nz-tab-link","",3,"routerLink",4,"nzTabLink"],["nz-tab-link","",3,"routerLink"]],template:function(t,i){1&t&&(e._UZ(0,"cvc-section-navigation"),e.TgZ(1,"nz-page-header",0)(2,"nz-page-header-title",1),e._uU(3," Forms2 Test Pages "),e.qZA(),e.TgZ(4,"nz-page-header-content")(5,"nz-row")(6,"nz-col",2)(7,"nz-row",3)(8,"nz-col",4)(9,"nz-tabset",5),e.YNc(10,we,2,0,"nz-tab",6),e.qZA()()()()(),e.TgZ(11,"nz-row")(12,"nz-col",2)(13,"div",7),e._UZ(14,"router-outlet"),e.qZA()()()()()),2&t&&(e.xp6(6),e.Q6J("nzSpan",24),e.xp6(3),e.Q6J("nzSelectedIndex",i.selectedTabIndex),e.xp6(1),e.Q6J("ngForOf",i.tabs),e.xp6(2),e.Q6J("nzSpan",24))},dependencies:[o.sg,p.lC,p.rH,G.$O,G.u9,G.u5,k.t3,k.SK,D.xH,D.xw,D.Ao,D.Fx,be.I],styles:["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]     nz-page-header:first-of-type{background-color:#fff;border-radius:8px}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content{flex-wrap:nowrap;background-color:#f0f0f0;border-top-left-radius:8px;border-top-right-radius:8px;margin:-12px -16px 16px;border-bottom:1px solid #bfbfbf}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-icon{padding:12px 0 12px 12px}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-icon i{width:100%}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-icon i   svg{width:100%;height:100%}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-description{padding:12px}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-description h2{color:#262626;margin:-8px 0 0;font-weight:500}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-description p{color:#262626;margin:-2px 0 0;padding:0;font-size:95%;line-height:1.5em}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-links{text-align:right;padding:12px}[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card{width:100%}[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card .card-grid-cell{width:50%}[_nghost-%COMP%]     nz-page-header:first-of-type nz-page-header-title.flagged{padding-left:.75em}[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-content{padding-top:0;padding-bottom:12px}[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-heading-extra nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs{margin:0 -16px 12px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap{padding-left:16px;padding-right:16px;line-height:24px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab{padding:1px 8px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab .anticon{margin-right:0}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-extra-content{margin-right:16px}"],changeDetection:0});var Se=a(3085);class ${constructor(t){this.cdr=t}}$.\u0275fac=function(t){return new(t||$)(e.Y36(e.sBO))},$.\u0275cmp=e.Xpm({type:$,selectors:[["cvc-variantgroup-revise-test-page"]],decls:1,vars:0,template:function(t,i){1&t&&e._UZ(0,"cvc-variantgroup-revise-form")},dependencies:[Se.L],encapsulation:2});var Le=a(7456);class U{constructor(){}ngOnInit(){}}U.\u0275fac=function(t){return new(t||U)},U.\u0275cmp=e.Xpm({type:U,selectors:[["cvc-gene-form"]],decls:1,vars:1,consts:[[3,"geneId"]],template:function(t,i){1&t&&e._UZ(0,"cvc-gene-revise-form",0),2&t&&e.Q6J("geneId",6)},dependencies:[Le.$],encapsulation:2,changeDetection:0});var Ee=a(6074);class N{constructor(){}ngOnInit(){}}N.\u0275fac=function(t){return new(t||N)},N.\u0275cmp=e.Xpm({type:N,selectors:[["cvc-mp-form"]],decls:1,vars:1,consts:[[3,"molecularProfileId"]],template:function(t,i){1&t&&e._UZ(0,"cvc-mp-revise-form",0),2&t&&e.Q6J("molecularProfileId",3176)},dependencies:[Ee.R],encapsulation:2,changeDetection:0});var Fe=a(5126);class q{constructor(){}ngOnInit(){}}q.\u0275fac=function(t){return new(t||q)},q.\u0275cmp=e.Xpm({type:q,selectors:[["cvc-variant-form"]],decls:1,vars:1,consts:[[3,"variantId"]],template:function(t,i){1&t&&e._UZ(0,"cvc-variant-revise-form",0),2&t&&e.Q6J("variantId",4)},dependencies:[Fe.J],encapsulation:2,changeDetection:0});const Je=[{path:"",component:R,children:[{path:"",redirectTo:"evidence-submit-test",pathMatch:"full"},{path:"evidence-submit-test",component:m,data:{breadcrumb:"Evidence Submit Test"}},{path:"evidence-revise-test",component:s,data:{breadcrumb:"Evidence Revise Test"}},{path:"assertion-submit-test",component:f,data:{breadcrumb:"Assertion Submit Test"}},{path:"assertion-revise-test",component:g,data:{breadcrumb:"Assertion Revise Test"}},{path:"variantgroup-revise-test",component:$,data:{breadcrumb:"Variant Group Revise Test"}},{path:"gene-revise-test",component:U,data:{breadcrumb:"Gene Revise Test"}},{path:"mp-revise-test",component:N,data:{breadcrumb:"MP Revise Test"}},{path:"variant-revise-test",component:q,data:{breadcrumb:"Variant Revise Test"}},{path:"vertical-form",component:J,data:{breadcrumb:"Nonstate"}},{path:"inline-form",component:F,data:{breadcrumb:"Inline"}},{path:"horizontal-form",component:E,data:{breadcrumb:"Horizontal"}},{path:"tags-test",component:W,data:{breadcrumb:"Horizontal"}}]}];class y{}y.\u0275fac=function(t){return new(t||y)},y.\u0275mod=e.oAB({type:y}),y.\u0275inj=e.cJS({imports:[p.Bz.forChild(Je),p.Bz]});var De=a(5630),Re=a(8762),$e=a(1102),Ue=a(8823),Ne=a(9444),qe=a(8164),Be=a(6903);class T{}T.\u0275fac=function(t){return new(t||T)},T.\u0275mod=e.oAB({type:T}),T.\u0275inj=e.cJS({imports:[o.ez,qe.Z,Be.zf]});var Xe=a(9780);class P{}P.\u0275fac=function(t){return new(t||P)},P.\u0275mod=e.oAB({type:P}),P.\u0275inj=e.cJS({imports:[o.ez,Xe.A]});var Qe=a(62);class C{}C.\u0275fac=function(t){return new(t||C)},C.\u0275mod=e.oAB({type:C}),C.\u0275inj=e.cJS({imports:[o.ez,Qe.E]});var Ge=a(1076);class z{}z.\u0275fac=function(t){return new(t||z)},z.\u0275mod=e.oAB({type:z}),z.\u0275inj=e.cJS({imports:[o.ez,Ge.P]});var ee=a(5106);class x{}x.\u0275fac=function(t){return new(t||x)},x.\u0275mod=e.oAB({type:x}),x.\u0275inj=e.cJS({imports:[o.ez,ee.S]});class O{}O.\u0275fac=function(t){return new(t||O)},O.\u0275mod=e.oAB({type:O}),O.\u0275inj=e.cJS({imports:[o.ez,ee.S]});class M{}M.\u0275fac=function(t){return new(t||M)},M.\u0275mod=e.oAB({type:M}),M.\u0275inj=e.cJS({imports:[o.ez,ee.S]});var Ve=a(3258);class A{}A.\u0275fac=function(t){return new(t||A)},A.\u0275mod=e.oAB({type:A}),A.\u0275inj=e.cJS({imports:[o.ez,Q._N,Q.pP,d.u5,ne.vh,v.HQ,Ve.x]});var je=a(2297);class I{}I.\u0275fac=function(t){return new(t||I)},I.\u0275mod=e.oAB({type:I}),I.\u0275inj=e.cJS({imports:[o.ez,je.A]});var He=a(993);class b{}b.\u0275fac=function(t){return new(t||b)},b.\u0275mod=e.oAB({type:b}),b.\u0275inj=e.cJS({imports:[o.ez,He.C]});var Ke=a(7357);class Z{}Z.\u0275fac=function(t){return new(t||Z)},Z.\u0275mod=e.oAB({type:Z}),Z.\u0275inj=e.cJS({imports:[o.ez,Ke.i]});var Ye=a(654);class w{}w.\u0275fac=function(t){return new(t||w)},w.\u0275mod=e.oAB({type:w}),w.\u0275inj=e.cJS({imports:[o.ez,Ye.K]});class S{}S.\u0275fac=function(t){return new(t||S)},S.\u0275mod=e.oAB({type:S}),S.\u0275inj=e.cJS({imports:[o.ez,y,G.KJ,k.Jb,$e.PV,Ue.ZJ,D.we,T,P,b,Z,C,z,w,x,O,M,A,Ne.s,Re.c,De.D,I]})}}]);