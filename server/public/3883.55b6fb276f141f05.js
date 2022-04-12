"use strict";(self.webpackChunkmain=self.webpackChunkmain||[]).push([[3883],{3756:(N,I,t)=>{t.d(I,{x:()=>an});var T=t(712),z=t(3154),v=t(8929),g=t(373),h=t(1059),E=t(4850),M=t(2986),Z=t(13),n=t(5e3),f=t(7484),p=t(1132),P=t(404),A=t(2683),D=t(647),O=t(2166),c=t(8054),C=t(4182),d=t(9808),L=t(2826),u=t(3193),U=t(8664),y=t(4022),_=t(6715),m=t(7469),r=t(6949),x=t(6042),S=t(2643),R=t(3618),W=t(4110),K=t(9657);function b(a,s){if(1&a&&(n.ynx(0),n._UZ(1,"cvc-disease-tag",65),n.BQk()),2&a){const o=n.oxw().$implicit;n.xp6(1),n.Q6J("disease",o.disease)("truncateLongName",!0)}}function B(a,s){1&a&&(n.TgZ(0,"i"),n._uU(1,"N/A"),n.qZA())}function J(a,s){if(1&a&&(n.TgZ(0,"span"),n._UZ(1,"cvc-drug-tag",67),n.qZA()),2&a){const o=s.$implicit;n.xp6(1),n.Q6J("drug",o)("truncateLongName",!0)}}function Q(a,s){if(1&a&&(n.TgZ(0,"span"),n._uU(1),n.ALo(2,"titlecase"),n.qZA()),2&a){const o=n.oxw(2).$implicit;n.xp6(1),n.hij(" (",n.lcZ(2,1,o.drugInteractionType),") ")}}function V(a,s){if(1&a&&(n.TgZ(0,"div"),n.TgZ(1,"cvc-tag-list"),n.YNc(2,J,2,2,"span",51),n.qZA(),n.YNc(3,Q,3,3,"span",66),n.qZA()),2&a){const o=n.oxw().$implicit;n.xp6(2),n.Q6J("ngForOf",o.drugs),n.xp6(1),n.Q6J("ngIf",o.drugs.length>1)}}function F(a,s){1&a&&(n.TgZ(0,"i"),n._uU(1,"N/A"),n.qZA())}function Y(a,s){if(1&a&&(n.TgZ(0,"span",68),n.ALo(1,"formatAmp"),n._uU(2),n.ALo(3,"formatAmp"),n.qZA()),2&a){const o=n.oxw().$implicit;n.Q6J("nzTooltipTitle",n.xi3(1,2,o.ampLevel,"verbose")),n.xp6(2),n.hij(" ",n.xi3(3,5,o.ampLevel,"compact")," ")}}function $(a,s){1&a&&n._uU(0," -- ")}function j(a,s){if(1&a&&(n.TgZ(0,"tr"),n.TgZ(1,"td"),n._UZ(2,"cvc-assertion-tag",54),n.qZA(),n.TgZ(3,"td"),n._UZ(4,"cvc-gene-tag",55),n.qZA(),n.TgZ(5,"td"),n._UZ(6,"cvc-variant-tag",56),n.qZA(),n.TgZ(7,"td"),n.YNc(8,b,2,2,"ng-container",57),n.YNc(9,B,2,0,"ng-template",null,58,n.W1O),n.qZA(),n.TgZ(11,"td"),n.YNc(12,V,4,2,"div",57),n.YNc(13,F,2,0,"ng-template",null,59,n.W1O),n.qZA(),n.TgZ(15,"td",60),n._UZ(16,"i",61),n.qZA(),n.TgZ(17,"td",60),n._UZ(18,"i",62),n.ALo(19,"evidenceEnumDisplay"),n.ALo(20,"evidenceEnumDisplay"),n.qZA(),n.TgZ(21,"td",60),n._UZ(22,"i",62),n.ALo(23,"evidenceEnumDisplay"),n.ALo(24,"evidenceEnumDisplay"),n.qZA(),n.TgZ(25,"td",60),n._UZ(26,"i",62),n.ALo(27,"evidenceEnumDisplay"),n.ALo(28,"evidenceEnumDisplay"),n.qZA(),n.TgZ(29,"td",60),n.YNc(30,Y,4,8,"span",63),n.YNc(31,$,1,0,"ng-template",null,64,n.W1O),n.qZA(),n.TgZ(33,"td"),n._uU(34),n.qZA(),n.qZA()),2&a){const o=s.$implicit,e=n.MAs(10),l=n.MAs(14),i=n.MAs(32);n.xp6(2),n.Q6J("assertion",o),n.xp6(2),n.Q6J("gene",o.gene),n.xp6(2),n.Q6J("variant",o.variant),n.xp6(2),n.Q6J("ngIf",o.disease.name)("ngIfElse",e),n.xp6(4),n.Q6J("ngIf",o.drugs.length>0)("ngIfElse",l),n.xp6(4),n.Q6J("nzTooltipTitle",o.summary),n.xp6(2),n.Q6J("nzType",n.xi3(19,17,o.assertionType,"icon-name"))("nzTooltipTitle",n.lcZ(20,20,o.assertionType)),n.xp6(4),n.Q6J("nzType",n.xi3(23,22,o.assertionDirection,"icon-name"))("nzTooltipTitle",n.lcZ(24,25,o.assertionDirection)),n.xp6(4),n.Q6J("nzType",n.xi3(27,27,o.clinicalSignificance,"icon-name"))("nzTooltipTitle",n.lcZ(28,30,o.clinicalSignificance)),n.xp6(4),n.Q6J("ngIf",o.ampLevel)("ngIfElse",i),n.xp6(4),n.hij(" ",o.evidenceItemsCount," ")}}function G(a,s){if(1&a){const o=n.EpF();n.TgZ(0,"button",71),n.NdJ("click",function(){n.CHM(o);const l=n.oxw(2).ngrxLet;return n.oxw().loadMore(l.endCursor)}),n._uU(1),n.qZA()}if(2&a){const o=n.oxw(3);n.xp6(1),n.hij("Load ",o.initialPageSize," More")}}function H(a,s){if(1&a&&(n.TgZ(0,"tr"),n.TgZ(1,"td",69),n.YNc(2,G,2,1,"button",70),n.qZA(),n.qZA()),2&a){const o=n.oxw().ngrxLet;n.xp6(2),n.Q6J("ngIf",o.hasNextPage)}}function q(a,s){if(1&a&&(n.ynx(0),n.YNc(1,H,3,1,"tr",66),n.BQk()),2&a){const o=s.ngrxLet;n.xp6(1),n.Q6J("ngIf",o.hasNextPage)}}function X(a,s){}function w(a,s){if(1&a&&(n.ynx(0),n.YNc(1,X,0,0,"ng-template",75),n.BQk()),2&a){const o=n.oxw(2);n.xp6(1),n.Q6J("ngTemplateOutlet",o.cvcTitleTemplate)}}function k(a,s){if(1&a&&(n.ynx(0),n._uU(1),n.BQk()),2&a){const o=n.oxw(2);n.xp6(1),n.hij(" ",o.cvcTitle," ")}}function nn(a,s){if(1&a&&(n.TgZ(0,"span"),n._uU(1),n.qZA()),2&a){const o=n.oxw().ngIf;n.xp6(1),n.hij(" of ",o," filtered")}}function tn(a,s){if(1&a&&(n.TgZ(0,"span",76),n._uU(1),n.YNc(2,nn,2,1,"span",66),n._uU(3,") "),n.qZA()),2&a){const o=s.ngIf,e=n.oxw(2);n.xp6(1),n.AsE(" (",e.totalCount," total, showing ",e.visibleCount,""),n.xp6(1),n.Q6J("ngIf",e.totalCount&&o<e.totalCount)}}function en(a,s){1&a&&(n.TgZ(0,"span",76),n._uU(1," (0 total) "),n.qZA())}function on(a,s){if(1&a&&(n._UZ(0,"i",72),n.YNc(1,w,2,1,"ng-container",66),n.YNc(2,k,2,1,"ng-container",66),n.YNc(3,tn,4,3,"span",73),n.ALo(4,"ngrxPush"),n.YNc(5,en,2,0,"ng-template",null,74,n.W1O)),2&a){const o=n.MAs(6),e=n.oxw();n.xp6(1),n.Q6J("ngIf",e.cvcTitleTemplate),n.xp6(1),n.Q6J("ngIf",e.cvcTitle),n.xp6(1),n.Q6J("ngIf",n.lcZ(4,4,e.filteredCount$))("ngIfElse",o)}}let an=(()=>{class a{constructor(o){this.gql=o,this.debouncedQuery=new v.xQ,this.initialPageSize=25,this.visibleCount=this.initialPageSize,this.loadedPages=1,this.tableView=!0,this.sortColumns=T.u4i}ngOnInit(){this.queryRef=this.gql.watch({first:this.initialPageSize,variantId:this.variantId,evidenceId:this.evidenceId,organizationId:this.organizationId,userId:this.userId,phenotypeId:this.phenotypeId,diseaseId:this.diseaseId,drugId:this.drugId,status:this.status,cardView:!this.tableView});let o=this.queryRef.valueChanges;this.isLoading$=o.pipe((0,g.j)("loading"),(0,h.O)(!0)),this.assertions$=o.pipe((0,g.j)("data","assertions","edges"),(0,E.U)(e=>e.map(l=>l.node))),this.filteredCount$=o.pipe((0,g.j)("data","assertions","totalCount")),this.filteredCount$.pipe((0,M.q)(1)).subscribe(e=>this.totalCount=e),this.filteredCount$.subscribe(e=>{e<this.initialPageSize?this.visibleCount=e:(this.visibleCount=this.initialPageSize*this.loadedPages,this.visibleCount>e&&(this.visibleCount=e))}),this.pageInfo$=o.pipe((0,g.j)("data","assertions","pageInfo")),this.debouncedQuery.pipe((0,Z.b)(500)).subscribe(e=>this.refresh()),this.textInputCallback=()=>{this.debouncedQuery.next()}}refresh(){var o;this.loadedPages=1,o=this.aidInput?this.aidInput.toUpperCase().startsWith("AID")?+this.aidInput.toUpperCase().replace("AID",""):+this.aidInput:void 0,this.queryRef.refetch({id:o,diseaseName:this.diseaseNameInput,geneName:this.geneNameInput,variantName:this.variantNameInput,drugName:this.drugNameInput,summary:this.summaryInput,assertionType:this.assertionTypeInput?this.assertionTypeInput:void 0,assertionDirection:this.assertionDirectionInput?this.assertionDirectionInput:void 0,clinicalSignificance:this.clinicalSignificanceInput?this.clinicalSignificanceInput:void 0,ampLevel:this.ampLevelInput?this.ampLevelInput:void 0,cardView:!this.tableView})}onModelChanged(){this.debouncedQuery.next()}onSortChanged(o){this.loadedPages=1,this.queryRef.refetch({sortBy:(0,z._)(o),cardView:!this.tableView})}ngOnDestroy(){this.debouncedQuery.unsubscribe()}loadMore(o){this.queryRef.fetchMore({variables:{after:o}}),this.loadedPages+=1}}return a.\u0275fac=function(o){return new(o||a)(n.Y36(T.td))},a.\u0275cmp=n.Xpm({type:a,selectors:[["cvc-assertions-table"]],inputs:{evidenceId:"evidenceId",variantId:"variantId",organizationId:"organizationId",userId:"userId",phenotypeId:"phenotypeId",diseaseId:"diseaseId",drugId:"drugId",status:"status",cvcTitleTemplate:"cvcTitleTemplate",cvcTitle:"cvcTitle"},decls:87,vars:53,consts:[[3,"nzTitle"],["nzSize","small",3,"nzData","nzLoading","nzFrontPagination","nzShowPagination"],["assertionsTable",""],[3,"nzSortOrderChange"],["nzWidth","5%",3,"nzColumnKey","nzSortFn"],["nzWidth","10%",3,"nzColumnKey","nzSortFn"],["nzWidth","15%",3,"nzColumnKey","nzSortFn"],["nzWidth","12%",3,"nzColumnKey","nzSortFn"],["nzWidth","5%","nzAlign","center","nz-tooltip","","nzTooltipTitle","Assertion Type",3,"nzColumnKey","nzSortFn"],["nzWidth","5%","nzAlign","center","nz-tooltip","","nzTooltipTitle","Assertion Direction",3,"nzColumnKey","nzSortFn"],["nzWidth","5%","nzAlign","center","nz-tooltip","","nzTooltipTitle","Clinical Significance",3,"nzColumnKey","nzSortFn"],["nzWidth","5%","nzAlign","center","nz-tooltip","","nzTooltipTitle","AMP/ASCO/CAP Category",3,"nzColumnKey","nzSortFn"],["nzWidth","3%","nz-tooltip","","nzTooltipTitle","Evidence Count",3,"nzColumnKey","nzSortFn"],["nz-icon","","nzType","civic:evidence"],["placeholderText","Search AID",3,"inputModel","onInputChanged","inputModelChange"],["placeholderText","Search Gene",3,"inputModel","onInputChanged","inputModelChange"],["placeholderText","Search Variant",3,"inputModel","onInputChanged","inputModelChange"],["placeholderText","Search Disease",3,"inputModel","onInputChanged","inputModelChange"],["placeholderText","Search Drugs",3,"inputModel","onInputChanged","inputModelChange"],["placeholderText","Search Summary",3,"inputModel","onInputChanged","inputModelChange"],["nzWidth","5%","nzAlign","center"],["nzAllowClear","","nzPlaceHolder","Choose",3,"nzDropdownMatchSelectWidth","ngModel","ngModelChange"],["nzValue","PREDICTIVE","nzLabel","Predictive"],["nzValue","PROGNOSTIC","nzLabel","Prognostic"],["nzValue","DIAGNOSTIC","nzLabel","Diagnostic"],["nzValue","PREDISPOSING","nzLabel","Predisposing"],["nzValue","SUPPORTS","nzLabel","Supports"],["nzValue","DOES_NOT_SUPPORT","nzLabel","Does not Support"],["nzValue","NA","nzLabel","N/A"],["nzLabel","Predictive"],["nzValue","SENSITIVITYRESPONSE","nzLabel","Sensitivity/Response"],["nzValue","RESISTANCE","nzLabel","Resistance"],["nzValue","ADVERSE_RESPONSE","nzLabel","Adverse Response"],["nzValue","REDUCED SENSITIVITY","nzLabel","Reduced Sensitivity"],["nzLabel","Prognostic"],["nzValue","BETTER_OUTCOME","nzLabel","Better Outcome"],["nzValue","POOR_OUTCOME","nzLabel","Poor Outcome"],["nzLabel","Diagnostic"],["nzValue","POSITIVE","nzLabel","Positive"],["nzValue","NEGATIVE","nzLabel","Negative"],["nzLabel","Predisposing"],["nzValue","PATHOGENIC","nzLabel","Pathogenic"],["nzValue","LIKELY_PATHOGENIC","nzLabel","Likely Pathogenic"],["nzValue","BENIGN","nzLabel","Benign"],["nzValue","LIKELY_BENIGN","nzLabel","Likely Benign"],["nzValue","UNCERTAIN_SIGNIFICANCE","nzLabel","Uncertain Significance"],["nzValue","TIER_I_LEVEL_A","nzLabel","Tier I Level A"],["nzValue","TIER_I_LEVEL_B","nzLabel","Tier I Level B"],["nzValue","TIER_II_LEVEL_C","nzLabel","Tier II Level C"],["nzValue","TIER_II_LEVEL_D","nzLabel","Tier II Level D"],["nzValue","TIER_III","nzLabel","Tier III"],[4,"ngFor","ngForOf"],[4,"ngrxLet"],["titleTemplate",""],[3,"assertion"],[3,"gene"],[3,"variant"],[4,"ngIf","ngIfElse"],["diseaseElse",""],["drugsElse",""],["nzAlign","center"],["nz-icon","","nzType","align-left","nz-tooltip","","nzTooltipPlacement","top",3,"nzTooltipTitle"],["nz-icon","","nz-tooltip","","nzTooltipPlacement","top",3,"nzType","nzTooltipTitle"],["nz-tooltip","","nzTooltipPlacement","top",3,"nzTooltipTitle",4,"ngIf","ngIfElse"],["noAmp",""],[3,"disease","truncateLongName"],[4,"ngIf"],[3,"drug","truncateLongName"],["nz-tooltip","","nzTooltipPlacement","top",3,"nzTooltipTitle"],["colspan","20"],["nz-button","","nzBlock","",3,"click",4,"ngIf"],["nz-button","","nzBlock","",3,"click"],["nz-icon","","nzType","civic:assertion"],["nz-typography","","nzType","secondary",4,"ngIf","ngIfElse"],["noData",""],[3,"ngTemplateOutlet"],["nz-typography","","nzType","secondary"]],template:function(o,e){if(1&o&&(n.TgZ(0,"nz-card",0),n.TgZ(1,"nz-table",1,2),n.ALo(3,"ngrxPush"),n.ALo(4,"ngrxPush"),n.TgZ(5,"thead",3),n.NdJ("nzSortOrderChange",function(i){return e.onSortChanged(i)}),n.TgZ(6,"tr"),n.TgZ(7,"th",4),n._uU(8," AID "),n.qZA(),n.TgZ(9,"th",4),n._uU(10," Gene "),n.qZA(),n.TgZ(11,"th",5),n._uU(12," Variant "),n.qZA(),n.TgZ(13,"th",6),n._uU(14," Disease "),n.qZA(),n.TgZ(15,"th",7),n._uU(16," Drugs "),n.qZA(),n.TgZ(17,"th",4),n._uU(18," Summary "),n.qZA(),n.TgZ(19,"th",8),n._uU(20," AT "),n.qZA(),n.TgZ(21,"th",9),n._uU(22," AD "),n.qZA(),n.TgZ(23,"th",10),n._uU(24," CS "),n.qZA(),n.TgZ(25,"th",11),n._uU(26," CAT "),n.qZA(),n.TgZ(27,"th",12),n._UZ(28,"i",13),n.qZA(),n.qZA(),n.TgZ(29,"tr"),n.TgZ(30,"th"),n.TgZ(31,"cvc-clearable-input-filter",14),n.NdJ("inputModelChange",function(i){return e.aidInput=i}),n.qZA(),n.qZA(),n.TgZ(32,"th"),n.TgZ(33,"cvc-clearable-input-filter",15),n.NdJ("inputModelChange",function(i){return e.geneNameInput=i}),n.qZA(),n.qZA(),n.TgZ(34,"th"),n.TgZ(35,"cvc-clearable-input-filter",16),n.NdJ("inputModelChange",function(i){return e.variantNameInput=i}),n.qZA(),n.qZA(),n.TgZ(36,"th"),n.TgZ(37,"cvc-clearable-input-filter",17),n.NdJ("inputModelChange",function(i){return e.diseaseNameInput=i}),n.qZA(),n.qZA(),n.TgZ(38,"th"),n.TgZ(39,"cvc-clearable-input-filter",18),n.NdJ("inputModelChange",function(i){return e.drugNameInput=i}),n.qZA(),n.qZA(),n.TgZ(40,"th"),n.TgZ(41,"cvc-clearable-input-filter",19),n.NdJ("inputModelChange",function(i){return e.summaryInput=i}),n.qZA(),n.qZA(),n.TgZ(42,"th",20),n.TgZ(43,"nz-select",21),n.NdJ("ngModelChange",function(){return e.onModelChanged()})("ngModelChange",function(i){return e.assertionTypeInput=i}),n._UZ(44,"nz-option",22),n._UZ(45,"nz-option",23),n._UZ(46,"nz-option",24),n._UZ(47,"nz-option",25),n.qZA(),n.qZA(),n.TgZ(48,"th",20),n.TgZ(49,"nz-select",21),n.NdJ("ngModelChange",function(){return e.onModelChanged()})("ngModelChange",function(i){return e.assertionDirectionInput=i}),n._UZ(50,"nz-option",26),n._UZ(51,"nz-option",27),n._UZ(52,"nz-option",28),n.qZA(),n.qZA(),n.TgZ(53,"th",20),n.TgZ(54,"nz-select",21),n.NdJ("ngModelChange",function(){return e.onModelChanged()})("ngModelChange",function(i){return e.clinicalSignificanceInput=i}),n.TgZ(55,"nz-option-group",29),n._UZ(56,"nz-option",30),n._UZ(57,"nz-option",31),n._UZ(58,"nz-option",32),n._UZ(59,"nz-option",33),n._UZ(60,"nz-option",28),n.qZA(),n.TgZ(61,"nz-option-group",34),n._UZ(62,"nz-option",35),n._UZ(63,"nz-option",36),n._UZ(64,"nz-option",28),n.qZA(),n.TgZ(65,"nz-option-group",37),n._UZ(66,"nz-option",38),n._UZ(67,"nz-option",39),n.qZA(),n.TgZ(68,"nz-option-group",40),n._UZ(69,"nz-option",41),n._UZ(70,"nz-option",42),n._UZ(71,"nz-option",43),n._UZ(72,"nz-option",44),n._UZ(73,"nz-option",45),n.qZA(),n.qZA(),n.qZA(),n.TgZ(74,"th",20),n.TgZ(75,"nz-select",21),n.NdJ("ngModelChange",function(){return e.onModelChanged()})("ngModelChange",function(i){return e.ampLevelInput=i}),n._UZ(76,"nz-option",46),n._UZ(77,"nz-option",47),n._UZ(78,"nz-option",48),n._UZ(79,"nz-option",49),n._UZ(80,"nz-option",50),n.qZA(),n.qZA(),n._UZ(81,"th"),n.qZA(),n.qZA(),n.TgZ(82,"tbody"),n.YNc(83,j,35,32,"tr",51),n.YNc(84,q,2,1,"ng-container",52),n.qZA(),n.qZA(),n.qZA(),n.YNc(85,on,7,6,"ng-template",null,53,n.W1O)),2&o){const l=n.MAs(2),i=n.MAs(86);n.Q6J("nzTitle",i),n.xp6(1),n.Q6J("nzData",n.lcZ(3,49,e.assertions$))("nzLoading",n.lcZ(4,51,e.isLoading$))("nzFrontPagination",!1)("nzShowPagination",!1),n.xp6(6),n.Q6J("nzColumnKey",e.sortColumns.Id)("nzSortFn",!0),n.xp6(2),n.Q6J("nzColumnKey",e.sortColumns.GeneName)("nzSortFn",!0),n.xp6(2),n.Q6J("nzColumnKey",e.sortColumns.VariantName)("nzSortFn",!0),n.xp6(2),n.Q6J("nzColumnKey",e.sortColumns.DiseaseName)("nzSortFn",!0),n.xp6(2),n.Q6J("nzColumnKey",e.sortColumns.DrugName)("nzSortFn",!0),n.xp6(2),n.Q6J("nzColumnKey",e.sortColumns.Summary)("nzSortFn",!0),n.xp6(2),n.Q6J("nzColumnKey",e.sortColumns.AssertionType)("nzSortFn",!0),n.xp6(2),n.Q6J("nzColumnKey",e.sortColumns.AssertionDirection)("nzSortFn",!0),n.xp6(2),n.Q6J("nzColumnKey",e.sortColumns.ClinicalSignificance)("nzSortFn",!0),n.xp6(2),n.Q6J("nzColumnKey",e.sortColumns.AmpLevel)("nzSortFn",!0),n.xp6(2),n.Q6J("nzColumnKey",e.sortColumns.EvidenceItemsCount)("nzSortFn",!0),n.xp6(4),n.Q6J("inputModel",e.aidInput)("onInputChanged",e.textInputCallback),n.xp6(2),n.Q6J("inputModel",e.geneNameInput)("onInputChanged",e.textInputCallback),n.xp6(2),n.Q6J("inputModel",e.variantNameInput)("onInputChanged",e.textInputCallback),n.xp6(2),n.Q6J("inputModel",e.diseaseNameInput)("onInputChanged",e.textInputCallback),n.xp6(2),n.Q6J("inputModel",e.drugNameInput)("onInputChanged",e.textInputCallback),n.xp6(2),n.Q6J("inputModel",e.summaryInput)("onInputChanged",e.textInputCallback),n.xp6(2),n.Q6J("nzDropdownMatchSelectWidth",!1)("ngModel",e.assertionTypeInput),n.xp6(6),n.Q6J("nzDropdownMatchSelectWidth",!1)("ngModel",e.assertionDirectionInput),n.xp6(5),n.Q6J("nzDropdownMatchSelectWidth",!1)("ngModel",e.clinicalSignificanceInput),n.xp6(21),n.Q6J("nzDropdownMatchSelectWidth",!1)("ngModel",e.ampLevelInput),n.xp6(8),n.Q6J("ngForOf",l.data),n.xp6(1),n.Q6J("ngrxLet",e.pageInfo$)}},directives:[f.bd,p.N8,p.Om,p.$Z,p.Uo,p._C,p.qD,p.UX,P.SY,A.w,D.Ls,O.p,c.Vq,C.JJ,C.On,c.Ip,c.Yy,p.p0,d.sg,L.w,u.H,U.I,d.O5,y.n,_.$,m.u,r.eJ,x.ix,S.dQ,d.tP,R.ZU],pipes:[r.fM,d.rS,W.D,K.t],styles:["[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}[_nghost-%COMP%]{display:block}"]}),a})()},9441:(N,I,t)=>{t.d(I,{s:()=>m});var T=t(9808),z=t(1132),v=t(4546),g=t(1047),h=t(647),E=t(3618),M=t(4182),Z=t(6949),n=t(7946),f=t(3309),p=t(404),P=t(4867),A=t(3580),D=t(8018),O=t(8054),c=t(4125),C=t(9444),d=t(6042),L=t(897),u=t(209),U=t(8369),y=t(7484),_=t(5e3);let m=(()=>{class r{}return r.\u0275fac=function(S){return new(S||r)},r.\u0275mod=_.oAB({type:r}),r.\u0275inj=_.cJS({imports:[[T.ez,M.u5,Z.WG,d.sL,z.HQ,v.U5,g.o7,h.PV,E.ZJ,p.cg,O.LV,y.vh,c.k,C.s,f.U,P.Q,A.Q,D.e,U.W,u.i,L.$,n.x,c.k]]}),r})()},8369:(N,I,t)=>{t.d(I,{W:()=>y});var T=t(9808),z=t(325),v=t(8481),g=t(3610),h=t(647),E=t(7484),M=t(3098),Z=t(3309),n=t(4867),f=t(6286),p=t(8018),P=t(6949),A=t(9444),D=t(1894),O=t(8144),c=t(3580),C=t(8625),d=t(7026),L=t(592),u=t(5e3);let U=(()=>{class _{}return _.\u0275fac=function(r){return new(r||_)},_.\u0275mod=u.oAB({type:_}),_.\u0275inj=u.cJS({imports:[[T.ez,z.Bz,P.WG,E.vh,M.q6,h.PV,D.Jb,O.zf,v.X,Z.U,c.Q,n.Q,f.y,p.e,A.s,L.x,C.$L.forChild({formatter:{useClass:d.x,provide:C.KP}})]]}),_})(),y=(()=>{class _{}return _.\u0275fac=function(r){return new(r||_)},_.\u0275mod=u.oAB({type:_}),_.\u0275inj=u.cJS({imports:[[T.ez,z.Bz,v.X,g.$6,h.PV,U,A.s]]}),_})()}}]);