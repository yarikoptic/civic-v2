"use strict";(self.webpackChunkmain=self.webpackChunkmain||[]).push([[3278],{9814:(K,A,e)=>{e.d(A,{O:()=>I});var S=e(655),f=e(3154),d=e(7630),m=e(4987),T=e(591),v=e(8929),x=e(3240),C=e(4850),_=e(373),M=e(5778),J=e(4290),P=e(1307),p=e(2198),Q=e(13),b=e(7168),t=e(5e3),r=e(9350),g=e(9808),h=e(7484),L=e(5851),u=e(1132),E=e(727),$=e(7451),Y=e(404),F=e(2683),H=e(5017),Z=e(8054),z=e(3075),R=e(2166),y=e(8481),B=e(6906),V=e(125),D=e(8511),W=e(4022),U=e(6042),w=e(2643),j=e(325),G=e(3610),s=e(7625),N=e(6123),O=e(9169),X=e(8144),q=e(2359),k=e(822),tt=e(1047),nt=e(7525),et=e(9180),ot=e(8227),ct=e(6612);function lt(o,c){if(1&o){const n=t.EpF();t.TgZ(0,"nz-alert",6),t.NdJ("nzOnClose",function(){return t.CHM(n),t.oxw().onSuccessBannerClose()}),t.qZA()}}function it(o,c){if(1&o&&t._UZ(0,"cvc-form-errors-alert",7),2&o){const n=t.oxw();t.Q6J("errors",n.errorMessages)}}function at(o,c){if(1&o){const n=t.EpF();t.TgZ(0,"textarea",8),t.NdJ("ngModelChange",function(l){return t.CHM(n),t.oxw().reason=l}),t.qZA()}if(2&o){const n=t.oxw();t.Q6J("ngModel",n.reason)}}function rt(o,c){1&o&&t._UZ(0,"nz-option",13)}function st(o,c){1&o&&t._UZ(0,"nz-option",14)}function gt(o,c){1&o&&t._UZ(0,"nz-option",15)}function ut(o,c){if(1&o){const n=t.EpF();t.TgZ(0,"nz-select",9),t.NdJ("ngModelChange",function(l){return t.CHM(n),t.oxw().newStatus=l}),t.YNc(1,rt,1,0,"nz-option",10),t.YNc(2,st,1,0,"nz-option",11),t.YNc(3,gt,1,0,"nz-option",12),t.qZA()}if(2&o){const n=t.oxw();t.Q6J("ngModel",n.newStatus),t.xp6(1),t.Q6J("ngIf","NEW"==n.currentStatus),t.xp6(1),t.Q6J("ngIf","NEW"!=n.currentStatus),t.xp6(1),t.Q6J("ngIf","NEW"==n.currentStatus)}}function pt(o,c){if(1&o){const n=t.EpF();t.TgZ(0,"nz-spin",16)(1,"cvc-form-buttons")(2,"cvc-org-selector-btn-group",17),t.NdJ("selectedOrgChange",function(l){return t.CHM(n),t.oxw().mostRecentOrg=l}),t.TgZ(3,"button",18),t.NdJ("click",function(){return t.CHM(n),t.oxw().updateSourceSuggestionStatus()}),t._uU(4," Update Source Suggestion status "),t.qZA()()()()}if(2&o){const n=t.oxw();t.Q6J("nzSpinning",n.loading),t.xp6(2),t.Q6J("selectedOrg",n.mostRecentOrg),t.xp6(1),t.Q6J("disabled",n.loading)}}let dt=(()=>{class o{constructor(n,i,l){this.viewerService=n,this.networkErrorService=i,this.updateSuggestionStatusGql=l,this.commentAddedEvent=new t.vpe,this.destroy$=new v.xQ,this.success=!1,this.errorMessages=[],this.loading=!1,this.viewerService.viewer$.pipe((0,s.R)(this.destroy$)).subscribe(a=>{this.organizations=a.organizations,this.mostRecentOrg=a.mostRecentOrg}),this.sourceSuggestionStatusMutator=new N.U(i)}selectOrg(n){this.mostRecentOrg=n}updateSourceSuggestionStatus(){var n;if(this.newStatus){let i=this.sourceSuggestionStatusMutator.mutate(this.updateSuggestionStatusGql,{input:{id:this.sourceSuggestionId,newStatus:this.newStatus,reason:this.reason,organizationId:null===(n=this.mostRecentOrg)||void 0===n?void 0:n.id}});i.submitSuccess$.pipe((0,s.R)(this.destroy$)).subscribe(l=>{this.resetForm(),this.success=!0}),i.submitError$.pipe((0,s.R)(this.destroy$)).subscribe(l=>{l&&(this.errorMessages=l)}),i.isSubmitting$.pipe((0,s.R)(this.destroy$)).subscribe(l=>{this.loading=l})}}resetForm(){this.commentText=""}onSuccessBannerClose(){this.resetForm()}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(r.a),t.Y36(O.Y),t.Y36(d.wRZ))},o.\u0275cmp=t.Xpm({type:o,selectors:[["cvc-update-source-suggestion-form"]],inputs:{sourceSuggestionId:"sourceSuggestionId",currentStatus:"currentStatus"},outputs:{commentAddedEvent:"commentAddedEvent"},decls:7,vars:2,consts:[["nzDirection","vertical"],["nzBanner","","nzMessage","Status Updated","nzType","success","nzCloseable","",3,"nzOnClose",4,"ngIf"],[3,"errors",4,"ngIf"],["rows","4","nz-input","",3,"ngModel","ngModelChange",4,"nzSpaceItem"],["nzPlaceHolder","New Status","required","true",3,"ngModel","ngModelChange",4,"nzSpaceItem"],["nzTip","Submitting",3,"nzSpinning",4,"nzSpaceItem"],["nzBanner","","nzMessage","Status Updated","nzType","success","nzCloseable","",3,"nzOnClose"],[3,"errors"],["rows","4","nz-input","",3,"ngModel","ngModelChange"],["nzPlaceHolder","New Status","required","true",3,"ngModel","ngModelChange"],["nzValue","CURATED","nzLabel","Curated",4,"ngIf"],["nzValue","NEW","nzLabel","New",4,"ngIf"],["nzValue","REJECTED","nzLabel","Rejected",4,"ngIf"],["nzValue","CURATED","nzLabel","Curated"],["nzValue","NEW","nzLabel","New"],["nzValue","REJECTED","nzLabel","Rejected"],["nzTip","Submitting",3,"nzSpinning"],[3,"selectedOrg","selectedOrgChange"],["type","submit","nz-button","","cvcOrgSelectorBtn","","nzType","primary","nzSize","small",3,"disabled","click"]],template:function(n,i){1&n&&(t.TgZ(0,"nz-card")(1,"nz-space",0),t.YNc(2,lt,1,0,"nz-alert",1),t.YNc(3,it,1,1,"cvc-form-errors-alert",2),t.YNc(4,at,1,1,"textarea",3),t.YNc(5,ut,4,4,"nz-select",4),t.YNc(6,pt,5,3,"nz-spin",5),t.qZA()()),2&n&&(t.xp6(2),t.Q6J("ngIf",i.success),t.xp6(1),t.Q6J("ngIf",i.errorMessages.length))},directives:[h.bd,X.NU,g.O5,q.r,k.V,X.$1,tt.Zp,z.Fj,z.JJ,z.On,Z.Vq,z.Q7,Z.Ip,nt.W,et.Z,ot.q,U.ix,w.dQ,ct.m,F.w],styles:[""],encapsulation:2}),o})();var mt=e(3667),_t=e(3388),vt=e(6949),Ct=e(160);function ht(o,c){}function zt(o,c){if(1&o&&(t.ynx(0),t.TgZ(1,"nz-card",6),t.YNc(2,ht,0,0,"ng-template",7),t.qZA(),t.BQk()),2&o){t.oxw();const n=t.MAs(8),i=t.MAs(10),l=t.MAs(4);t.xp6(1),t.Q6J("nzTitle",n)("nzExtra",i),t.xp6(1),t.Q6J("ngTemplateOutlet",l)}}function St(o,c){}const ft=function(o){return{height:o}};function Tt(o,c){if(1&o&&(t.TgZ(0,"div",8)(1,"nz-card",9),t.YNc(2,St,0,0,"ng-template",7),t.qZA()()),2&o){const n=t.oxw(),i=t.MAs(8),l=t.MAs(10),a=t.MAs(4);t.Q6J("ngStyle",t.VKq(4,ft,n.cvcHeight)),t.xp6(1),t.Q6J("nzTitle",i)("nzExtra",l),t.xp6(1),t.Q6J("ngTemplateOutlet",a)}}function xt(o,c){if(1&o){const n=t.EpF();t.TgZ(0,"cvc-clearable-input-filter",29),t.NdJ("inputModelChange",function(l){return t.CHM(n),t.oxw(2).submitterInput=l})("inputModelChange",function(){return t.CHM(n),t.oxw(2).filterChange$.next()}),t.qZA()}if(2&o){const n=t.oxw(2);t.Q6J("inputModel",n.submitterInput)}}function Mt(o,c){if(1&o&&(t.ynx(0),t.TgZ(1,"nz-tag",51),t._uU(2),t.ALo(3,"lowercase"),t.qZA(),t.BQk()),2&o){const n=t.oxw().$implicit;t.xp6(2),t.hij(" ",t.lcZ(3,1,n.status)," ")}}function Zt(o,c){if(1&o&&(t.ynx(0),t.TgZ(1,"nz-tag",52),t._uU(2),t.ALo(3,"lowercase"),t.qZA(),t.BQk()),2&o){const n=t.oxw().$implicit;t.xp6(2),t.hij(" ",t.lcZ(3,1,n.status)," ")}}function It(o,c){if(1&o&&t._UZ(0,"i",55),2&o){const n=t.oxw(2).$implicit,i=t.oxw(2);t.Q6J("nzTooltipTitle",i.isScrolling?"":n.reason)}}function bt(o,c){if(1&o&&(t.ynx(0),t.TgZ(1,"nz-tag",53),t.YNc(2,It,1,1,"i",54),t._uU(3),t.ALo(4,"lowercase"),t.qZA(),t.BQk()),2&o){const n=t.oxw().$implicit;t.xp6(2),t.Q6J("ngIf",n.reason&&""!=n.reason),t.xp6(1),t.hij(" ",t.lcZ(4,2,n.status)," ")}}function yt(o,c){if(1&o&&t._UZ(0,"cvc-source-tag",56),2&o){const n=t.oxw().$implicit;t.Q6J("source",n.source)}}function At(o,c){if(1&o&&t._UZ(0,"cvc-user-tag",57),2&o){const n=t.oxw().$implicit;t.Q6J("user",n.user)}}function Jt(o,c){if(1&o&&(t.ynx(0),t._uU(1),t.BQk()),2&o){const n=t.oxw().$implicit;t.xp6(1),t.hij(" ",n.source.displayType," ")}}function Pt(o,c){if(1&o&&(t.ynx(0),t._uU(1),t.BQk()),2&o){const n=t.oxw().$implicit;t.xp6(1),t.hij(" ",n.source.citationId," ")}}function Qt(o,c){if(1&o&&t._UZ(0,"cvc-molecular-profile-tag",58),2&o){const n=t.oxw().$implicit;t.Q6J("molecularProfile",n.molecularProfile)}}function Ut(o,c){if(1&o&&t._UZ(0,"cvc-disease-tag",59),2&o){const n=t.oxw().$implicit;t.Q6J("disease",n.disease)("truncateLongName",!0)}}const Nt=function(o,c,n){return{molecularProfileId:o,sourceId:c,diseaseId:n}};function Ot(o,c){if(1&o){const n=t.EpF();t.TgZ(0,"nz-button-group")(1,"button",60),t._UZ(2,"i",61),t.qZA(),t.TgZ(3,"button",62),t.NdJ("click",function(){t.CHM(n);const l=t.oxw().$implicit;return t.oxw(2).setFormInputs(l.id,l.status)}),t._UZ(4,"i",63),t.qZA()()}if(2&o){const n=t.oxw().$implicit,i=t.oxw(2),l=t.MAs(6);t.xp6(1),t.Q6J("queryParams",t.kEZ(7,Nt,null==n.molecularProfile?null:n.molecularProfile.id,null==n.source?null:n.source.id,null==n.disease?null:n.disease.id))("disabled",n.status!=i.status.New)("nzTooltipTitle",i.isScrolling?"":"Create Evidence with this Source")("nzTooltipMouseEnterDelay",1),t.xp6(2),t.Q6J("nzTooltipTitle",i.isScrolling?"":"Manage Source Suggestion")("nzTooltipMouseEnterDelay",1)("nzPopoverContent",l)}}function $t(o,c){1&o&&(t.ynx(0),t._uU(1," -- "),t.BQk())}function Ft(o,c){if(1&o&&(t.TgZ(0,"tr",39)(1,"td",40),t.ynx(2,41),t.ALo(3,"lowercase"),t.YNc(4,Mt,4,3,"ng-container",42),t.YNc(5,Zt,4,3,"ng-container",42),t.YNc(6,bt,5,4,"ng-container",42),t.BQk(),t.qZA(),t.TgZ(7,"td",24),t.YNc(8,yt,1,1,"cvc-source-tag",43),t.qZA(),t.TgZ(9,"td",44),t._UZ(10,"i",17),t.ALo(11,"entityColor"),t.qZA(),t.TgZ(12,"td"),t.YNc(13,At,1,1,"cvc-user-tag",45),t.qZA(),t.TgZ(14,"td"),t.YNc(15,Jt,2,1,"ng-container",46),t.qZA(),t.TgZ(16,"td"),t.YNc(17,Pt,2,1,"ng-container",46),t.qZA(),t.TgZ(18,"td"),t.YNc(19,Qt,1,1,"cvc-molecular-profile-tag",47),t.qZA(),t.TgZ(20,"td"),t.YNc(21,Ut,1,2,"cvc-disease-tag",48),t.qZA(),t.TgZ(22,"td",49),t._uU(23),t.ALo(24,"date"),t.qZA(),t.TgZ(25,"td",50),t.YNc(26,Ot,5,11,"nz-button-group",46),t.YNc(27,$t,2,0,"ng-container",46),t.qZA()()),2&o){const n=c.$implicit,i=t.oxw(2);t.xp6(2),t.Q6J("ngSwitch",t.lcZ(3,15,n.status)),t.xp6(2),t.Q6J("ngSwitchCase","curated"),t.xp6(1),t.Q6J("ngSwitchCase","new"),t.xp6(1),t.Q6J("ngSwitchCase","rejected"),t.xp6(2),t.Q6J("ngIf",n.source),t.xp6(1),t.Q6J("nzTooltipTitle",i.isScrolling?"":n.initialComment),t.xp6(1),t.Q6J("nzTwotoneColor",t.lcZ(11,17,"Comment")),t.xp6(3),t.Q6J("ngIf",n.user),t.xp6(2),t.Q6J("ngIf",n.source),t.xp6(2),t.Q6J("ngIf",n.source),t.xp6(2),t.Q6J("ngIf",n.molecularProfile),t.xp6(2),t.Q6J("ngIf",n.disease),t.xp6(2),t.hij(" ",t.lcZ(24,19,n.createdAt)," "),t.xp6(3),t.Q6J("ngIf",i.isSignedIn),t.xp6(1),t.Q6J("ngIf",!i.isSignedIn)}}const wt=function(){return{x:"680px",y:"800px"}},Lt=function(){return["descend","ascend",null]};function Et(o,c){if(1&o){const n=t.EpF();t.TgZ(0,"nz-table",10,11),t.NdJ("cvcTableScrollOnScroll",function(l){return t.CHM(n),t.oxw().scrollEvent$.next(l)}),t.ALo(2,"ngrxPush"),t.ALo(3,"ngrxPush"),t.ALo(4,"ngrxPush"),t.ALo(5,"ngrxPush"),t.TgZ(6,"thead",12),t.NdJ("nzSortOrderChange",function(l){return t.CHM(n),t.oxw().sortChange$.next(l)}),t.TgZ(7,"tr",13)(8,"th",14),t._uU(9," Status "),t.qZA(),t.TgZ(10,"th",15),t._uU(11," Citation "),t.qZA(),t.TgZ(12,"th",16),t._UZ(13,"i",17),t.ALo(14,"entityColor"),t.qZA(),t.TgZ(15,"th",18),t._uU(16," Submitter "),t.qZA(),t.TgZ(17,"th",19),t._uU(18," Type "),t.qZA(),t.TgZ(19,"th",19),t._uU(20," ID "),t.qZA(),t.TgZ(21,"th",20),t._uU(22," Molecular Profile "),t.qZA(),t.TgZ(23,"th",18),t._uU(24," Disease "),t.qZA(),t.TgZ(25,"th",21),t._uU(26," Submitted "),t.qZA(),t.TgZ(27,"th",22),t._uU(28," Actions "),t.qZA()(),t.TgZ(29,"tr",23)(30,"th",24)(31,"nz-select",25),t.NdJ("ngModelChange",function(){return t.CHM(n),t.oxw().filterChange$.next()})("ngModelChange",function(l){return t.CHM(n),t.oxw().statusInput=l}),t._UZ(32,"nz-option",26)(33,"nz-option",27)(34,"nz-option",28),t.qZA()(),t.TgZ(35,"th",24)(36,"cvc-clearable-input-filter",29),t.NdJ("inputModelChange",function(l){return t.CHM(n),t.oxw().citationInput=l})("inputModelChange",function(){return t.CHM(n),t.oxw().filterChange$.next()}),t.qZA()(),t._UZ(37,"th"),t.TgZ(38,"th"),t.YNc(39,xt,1,1,"cvc-clearable-input-filter",30),t.qZA(),t.TgZ(40,"th")(41,"nz-select",31),t.NdJ("ngModelChange",function(){return t.CHM(n),t.oxw().filterChange$.next()})("ngModelChange",function(l){return t.CHM(n),t.oxw().sourceTypeInput=l}),t._UZ(42,"nz-option",32)(43,"nz-option",33),t.qZA()(),t.TgZ(44,"th")(45,"cvc-clearable-input-filter",34),t.NdJ("inputModelChange",function(l){return t.CHM(n),t.oxw().citationIdInput=l})("inputModelChange",function(){return t.CHM(n),t.oxw().filterChange$.next()}),t.qZA()(),t.TgZ(46,"th")(47,"cvc-clearable-input-filter",35),t.NdJ("inputModelChange",function(l){return t.CHM(n),t.oxw().molecularProfileNameInput=l})("inputModelChange",function(){return t.CHM(n),t.oxw().filterChange$.next()}),t.qZA()(),t.TgZ(48,"th")(49,"cvc-clearable-input-filter",36),t.NdJ("inputModelChange",function(l){return t.CHM(n),t.oxw().diseaseNameInput=l})("inputModelChange",function(){return t.CHM(n),t.oxw().filterChange$.next()}),t.qZA()(),t._UZ(50,"th")(51,"th",37),t.qZA()(),t.TgZ(52,"tbody"),t.YNc(53,Ft,28,21,"ng-template",38),t.qZA()()}if(2&o){const n=t.oxw();t.Q6J("nzData",t.lcZ(2,33,n.row$))("nzLoading",t.lcZ(3,35,n.initialLoading$))("cvcAutoHeightTable",25)("nzVirtualItemSize",29)("cvcTableScrollQueryRef",n.queryRef)("cvcTableScrollPageInfo",t.lcZ(4,37,n.pageInfo$))("cvcTableScrollToIndex",t.lcZ(5,39,n.scrollIndex$))("nzVirtualForTrackBy",n.trackByIndex)("nzScroll",t.DdM(43,wt))("nzFrontPagination",!1)("nzShowPagination",!1),t.xp6(10),t.Q6J("nzColumnKey",n.sortColumns.Citation)("nzSortFn",!0),t.xp6(3),t.Q6J("nzTwotoneColor",t.lcZ(14,41,"Comment")),t.xp6(2),t.Q6J("nzColumnKey",n.sortColumns.Submitter)("nzSortFn",!0),t.xp6(2),t.Q6J("nzColumnKey",n.sortColumns.SourceType)("nzSortFn",!0),t.xp6(2),t.Q6J("nzColumnKey",n.sortColumns.CitationId)("nzSortFn",!0),t.xp6(4),t.Q6J("nzColumnKey",n.sortColumns.DiseaseName)("nzSortFn",!0),t.xp6(2),t.Q6J("nzColumnKey",n.sortColumns.CreatedAt)("nzSortDirections",t.DdM(44,Lt))("nzSortFn",!0),t.xp6(6),t.Q6J("nzDropdownMatchSelectWidth",!1)("ngModel",n.statusInput),t.xp6(5),t.Q6J("inputModel",n.citationInput),t.xp6(3),t.Q6J("ngIf",!n.submitterId),t.xp6(2),t.Q6J("ngModel",n.sourceTypeInput),t.xp6(4),t.Q6J("inputModel",n.citationIdInput),t.xp6(2),t.Q6J("inputModel",n.molecularProfileNameInput),t.xp6(2),t.Q6J("inputModel",n.diseaseNameInput)}}function Yt(o,c){if(1&o&&t._UZ(0,"cvc-update-source-suggestion-form",65),2&o){const n=t.oxw(2);t.Q6J("currentStatus",n.selectedStatus)("sourceSuggestionId",n.selectedSourceId)}}function Ht(o,c){if(1&o&&t.YNc(0,Yt,1,2,"cvc-update-source-suggestion-form",64),2&o){const n=t.oxw();t.Q6J("ngIf",n.selectedSourceId&&n.selectedStatus)}}function Rt(o,c){}function Bt(o,c){if(1&o&&(t.ynx(0),t.YNc(1,Rt,0,0,"ng-template",7),t.BQk()),2&o){const n=t.oxw(2);t.xp6(1),t.Q6J("ngTemplateOutlet",n.cvcTitleTemplate)}}function Vt(o,c){if(1&o&&(t.ynx(0),t._uU(1),t.BQk()),2&o){const n=t.oxw(2);t.xp6(1),t.hij(" ",n.cvcTitle," ")}}function Dt(o,c){if(1&o&&(t._UZ(0,"i",66),t.ALo(1,"entityColor"),t.YNc(2,Bt,2,1,"ng-container",46),t.YNc(3,Vt,2,1,"ng-container",46),t.TgZ(4,"span",67),t._UZ(5,"cvc-table-counts",68),t.qZA()),2&o){const n=t.oxw();t.Q6J("nzTwotoneColor",t.lcZ(1,4,"Source")),t.xp6(2),t.Q6J("ngIf",n.cvcTitleTemplate),t.xp6(1),t.Q6J("ngIf",n.cvcTitle),t.xp6(2),t.Q6J("cvcTableCountsConnection",n.connection$)}}function Wt(o,c){1&o&&(t.TgZ(0,"nz-tag",71),t._UZ(1,"i",72),t.TgZ(2,"span"),t._uU(3,"Loading\u2026"),t.qZA()())}function jt(o,c){if(1&o&&(t.YNc(0,Wt,4,0,"nz-tag",69),t.ALo(1,"ngrxPush"),t._UZ(2,"cvc-no-more-rows",70),t.ALo(3,"ngrxPush")),2&o){const n=t.oxw();t.Q6J("ngIf",t.lcZ(1,2,n.moreLoading$)),t.xp6(2),t.Q6J("cvcShowTag",t.lcZ(3,4,n.noMoreRows$))}}let I=class{constructor(c,n,i){this.gql=c,this.viewerService=n,this.cdr=i,this.initialPageSize=35,this.isScrolling=!1,this.statusInput=d.F3s.New,this.sortColumns=d.jw9,this.status=d.F3s,this.showManageForm=!1,this.noMoreRows$=new T.X(!1),this.scrollEvent$=new T.X("stop"),this.sortChange$=new v.xQ,this.filterChange$=new v.xQ,this.scrollIndex$=new v.xQ,this.viewerService.viewer$.pipe((0,C.U)(l=>l.signedIn),(0,m.t)(this)).subscribe(l=>this.isSignedIn=l)}set initialUserFilters(c){c&&Object.assign(this,c)}ngOnInit(){this.queryRef=this.gql.watch({first:this.initialPageSize,sourceId:this.sourceId,submitterId:this.submitterId,status:this.status.New,sortBy:{column:this.sortColumns.CreatedAt,direction:d.SrV.Desc}}),this.result$=this.queryRef.valueChanges,this.initialLoading$=this.result$.pipe((0,_.j)("loading"),(0,M.x)(),(0,J.o)(c=>!1!==c,!0)),this.moreLoading$=this.result$.pipe((0,_.j)("loading"),(0,M.x)(),(0,P.T)(2)),this.connection$=this.result$.pipe((0,_.j)("data","sourceSuggestions"),(0,p.h)(x.ep)),this.row$=this.connection$.pipe((0,_.j)("edges"),(0,p.h)(x.ep),(0,C.U)(c=>c.map(n=>n.node))),this.pageInfo$=this.connection$.pipe((0,_.j)("pageInfo"),(0,p.h)(x.ep)),this.sortChange$.pipe((0,m.t)(this)).subscribe(c=>{this.queryRef.refetch({sortBy:(0,f._)(c)})}),this.filterChange$.pipe((0,Q.b)(500),(0,m.t)(this)).subscribe(()=>{this.refresh()}),this.scrollEvent$.pipe((0,C.U)(c=>"stop"!==c),(0,M.x)(),(0,m.t)(this)).subscribe(c=>{this.isScrolling=c,this.cdr.detectChanges()}),this.scrollEvent$.pipe((0,p.h)(c=>"bottom"===c),(0,b.M)(this.pageInfo$),(0,C.U)(([c,n])=>n),(0,m.t)(this)).subscribe(c=>{c.hasNextPage||(this.noMoreRows$.next(!0),this.cdr.detectChanges(),setInterval(()=>this.noMoreRows$.next(!1)))})}refresh(){this.queryRef.refetch({citationId:this.citationIdInput?+this.citationIdInput:void 0,sourceType:this.sourceTypeInput?this.sourceTypeInput:void 0,sourceId:this.sourceIdInput?+this.sourceIdInput:void 0,molecularProfileName:this.molecularProfileNameInput,diseaseName:this.diseaseNameInput,comment:this.commentInput,submitter:this.submitterInput,citation:this.citationInput,status:this.statusInput?this.statusInput:void 0}).then(()=>this.scrollIndex$.next(0)),this.cdr.detectChanges()}setFormInputs(c,n){this.selectedSourceId=c,this.selectedStatus=n,this.showManageForm=!0}closePopover(){this.showManageForm=!1}trackByIndex(c,n){return n.id}};I.\u0275fac=function(c){return new(c||I)(t.Y36(d.WRV),t.Y36(r.a),t.Y36(t.sBO))},I.\u0275cmp=t.Xpm({type:I,selectors:[["cvc-source-suggestions-table"]],inputs:{cvcHeight:"cvcHeight",sourceId:"sourceId",submitterId:"submitterId",cvcTitleTemplate:"cvcTitleTemplate",cvcTitle:"cvcTitle",initialPageSize:"initialPageSize",initialUserFilters:"initialUserFilters"},decls:11,vars:2,consts:[[4,"ngIf","ngIfElse"],["setHeightCard",""],["table",""],["manageSuggestionTemplate",""],["titleTemplate",""],["extraTemplate",""],["nzSize","small","cvcAutoHeightCard","","cvcAutoHeightTarget","viewport",3,"nzTitle","nzExtra"],[3,"ngTemplateOutlet"],[1,"card-container",3,"ngStyle"],["cvcAutoHeightCard","","nzSize","small",3,"nzTitle","nzExtra"],["nzSize","small","cvcTableScroll","",3,"nzData","nzLoading","cvcAutoHeightTable","nzVirtualItemSize","cvcTableScrollQueryRef","cvcTableScrollPageInfo","cvcTableScrollToIndex","nzVirtualForTrackBy","nzScroll","nzFrontPagination","nzShowPagination","cvcTableScrollOnScroll"],["virtualTable",""],[3,"nzSortOrderChange"],[1,"col-header-row"],["nzWidth","100px","nzLeft",""],["nzWidth","425px","nzLeft","",3,"nzColumnKey","nzSortFn"],["nzWidth","24px","nzAlign","center","nz-tooltip","","nzTooltipTitle","Submitter Comment"],["nz-icon","","nzTheme","twotone","nzType","civic-comment",3,"nzTwotoneColor"],["nzWidth","200px",3,"nzColumnKey","nzSortFn"],["nzWidth","80px",3,"nzColumnKey","nzSortFn"],["nzWidth","290px"],["nzWidth","90px","nzSortOrder","descend",3,"nzColumnKey","nzSortDirections","nzSortFn"],["nzWidth","70px","nzRight","","nzAlign","center"],[1,"filter-row"],["nzLeft",""],["nzAllowClear","","nzSize","small","nzPlaceHolder","Any",3,"nzDropdownMatchSelectWidth","ngModel","ngModelChange"],["nzValue","NEW","nzLabel","new"],["nzValue","CURATED","nzLabel","curated"],["nzValue","REJECTED","nzLabel","rejected"],[3,"inputModel","inputModelChange"],[3,"inputModel","inputModelChange",4,"ngIf"],["nzAllowClear","","nzSize","small","nzPlaceHolder","Any",3,"ngModel","ngModelChange"],["nzValue","PUBMED","nzLabel","PubMed"],["nzValue","ASCO","nzLabel","ASCO"],["placeholderText","ID",3,"inputModel","inputModelChange"],["placeholderText","Molecular Profile",3,"inputModel","inputModelChange"],["placeholderText","Disease",3,"inputModel","inputModelChange"],["nzRight",""],["nz-virtual-scroll",""],[1,"data-row"],["nzLeft","","nzAlign","center"],[3,"ngSwitch"],[4,"ngSwitchCase"],[3,"source",4,"ngIf"],["nzAlign","center","nz-tooltip","","nzTooltipPlacement","top",3,"nzTooltipTitle"],[3,"user",4,"ngIf"],[4,"ngIf"],[3,"molecularProfile",4,"ngIf"],[3,"disease","truncateLongName",4,"ngIf"],["nzAlign","right"],["nzRight","","nzAlign","center",1,"button-cell"],["nzColor","green",1,"status-tag"],["nzColor","orange",1,"status-tag"],["nzColor","volcano",1,"status-tag"],["nz-icon","","nz-tooltip","","nzType","civic-comment",3,"nzTooltipTitle",4,"ngIf"],["nz-icon","","nz-tooltip","","nzType","civic-comment",3,"nzTooltipTitle"],[3,"source"],[3,"user"],[3,"molecularProfile"],[3,"disease","truncateLongName"],["routerLink","/evidence/add/submit","nz-button","","nzSize","small","nz-tooltip","",3,"queryParams","disabled","nzTooltipTitle","nzTooltipMouseEnterDelay"],["nz-icon","","nzType","civic-evidence"],["nz-button","","nzSize","small","nz-popover","","nzPopoverTitle","Manage Source Suggestion","nzPopoverPlacement","left","nzPopoverTrigger","click","nz-tooltip","","nzTooltipPlacement","top",3,"nzTooltipTitle","nzTooltipMouseEnterDelay","nzPopoverContent","click"],["nz-icon","","nzType","civic-source"],[3,"currentStatus","sourceSuggestionId",4,"ngIf"],[3,"currentStatus","sourceSuggestionId"],["nz-icon","","nzTheme","twotone","nzType","civic-source",3,"nzTwotoneColor"],[1,"table-info"],[3,"cvcTableCountsConnection"],["nzColor","processing",4,"ngIf"],[3,"cvcShowTag"],["nzColor","processing"],["nz-icon","","nzType","sync","nzSpin",""]],template:function(c,n){if(1&c&&(t.YNc(0,zt,3,3,"ng-container",0),t.YNc(1,Tt,3,6,"ng-template",null,1,t.W1O),t.YNc(3,Et,54,45,"ng-template",null,2,t.W1O),t.YNc(5,Ht,1,1,"ng-template",null,3,t.W1O),t.YNc(7,Dt,6,6,"ng-template",null,4,t.W1O),t.YNc(9,jt,4,6,"ng-template",null,5,t.W1O)),2&c){const i=t.MAs(2);t.Q6J("ngIf",!n.cvcHeight)("ngIfElse",i)}},directives:[g.O5,h.bd,L.D,g.tP,g.PC,u.N8,E.y,$.q,u.Om,u.$Z,u.Uo,u._C,u.qn,u.qD,u.UX,Y.SY,F.w,H.Ls,Z.Vq,z.JJ,z.On,Z.Ip,R.p,u.p0,u.zu,g.RF,g.n9,y.j,B.T,V.I,D.p,W.n,U.fY,U.ix,w.dQ,j.rH,G.lU,dt,mt.B,_t.H],pipes:[vt.fM,Ct.a,g.i8,g.uU],styles:["[_nghost-%COMP%]{display:block}nz-card[_ngcontent-%COMP%]:first-of-type     .ant-card-body{padding:0;margin-top:1px}.table-info[_ngcontent-%COMP%]{margin-left:.5rem}tr.col-header-row[_ngcontent-%COMP%]   th.ant-table-cell[_ngcontent-%COMP%]{white-space:nowrap}tr.col-header-row[_ngcontent-%COMP%]   th.ant-table-cell.align-right[_ngcontent-%COMP%]     .ant-table-column-title{text-align:right}tr.filter-row[_ngcontent-%COMP%]   th.ant-table-cell[_ngcontent-%COMP%]{padding:3px 4px}tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell[_ngcontent-%COMP%]{white-space:nowrap}tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell[_ngcontent-%COMP%]   .anticon.attribute-icon[_ngcontent-%COMP%]{color:#595959}tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell.overflow-ellipsis[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis}tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell.button-cell[_ngcontent-%COMP%]{padding:0}tr.data-row[_ngcontent-%COMP%]   td.align-right[_ngcontent-%COMP%], tr.col-header-row[_ngcontent-%COMP%]   th.ant-table-cell[_ngcontent-%COMP%]   .align-right[_ngcontent-%COMP%], tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell[_ngcontent-%COMP%]   .align-right[_ngcontent-%COMP%], tr.filter-row[_ngcontent-%COMP%]   th.ant-table-cell[_ngcontent-%COMP%]   .align-right[_ngcontent-%COMP%]{text-align:right}.status-tag[_ngcontent-%COMP%]{display:block}"],changeDetection:0}),I=(0,S.gn)([(0,m.c)()],I)},2832:(K,A,e)=>{e.d(A,{W:()=>G});var S=e(9808),f=e(3075),d=e(325),m=e(3580),T=e(2467),v=e(4125),x=e(271),C=e(8525),_=e(9779),M=e(7345),J=e(6905),P=e(3111),p=e(1433),Q=e(9240),b=e(7008),t=e(8776),r=e(7484),g=e(4546),h=e(1825),L=e(4375),u=e(6042),E=e(868),$=e(6949),Y=e(7525),F=e(2359),H=e(1047),Z=e(8054),z=e(4509),R=e(8144),y=e(5e3);let B=(()=>{class s{}return s.\u0275fac=function(O){return new(O||s)},s.\u0275mod=y.oAB({type:s}),s.\u0275inj=y.cJS({imports:[[S.ez,f.UX,$.WG,u.sL,r.vh,E.we,g.U5,Y.j,F.L,H.o7,Z.LV,R.zf,f.u5,t.X0,b.B,h.A,L.R,z.w]]}),s})();var V=e(5017),D=e(3610),W=e(1132),U=e(8481),w=e(404),j=e(3618);let G=(()=>{class s{}return s.\u0275fac=function(O){return new(O||s)},s.\u0275mod=y.oAB({type:s}),s.\u0275inj=y.cJS({imports:[[S.ez,f.u5,$.WG,d.Bz,u.sL,r.vh,V.PV,D.$6,Z.LV,W.HQ,U.X,w.cg,j.ZJ,Q.w,C.T,x.y,P.n,p.c,v.k,m.Q,b.B,J.s,_.s,B,M.W,T.u]]}),s})()},7677:(K,A,e)=>{e.d(A,{G:()=>t});var S=e(9808),f=e(325),d=e(3610),m=e(8481),T=e(5017),v=e(897),x=e(9779),C=e(4867),_=e(6905),M=e(6949),J=e(7484),P=e(3098),p=e(5e3);let Q=(()=>{class r{}return r.\u0275fac=function(h){return new(h||r)},r.\u0275mod=p.oAB({type:r}),r.\u0275inj=p.cJS({imports:[[S.ez,M.WG,J.vh,P.q6,T.PV,x.s,C.Q,v.$,_.s]]}),r})();var b=e(6429);let t=(()=>{class r{}return r.\u0275fac=function(h){return new(h||r)},r.\u0275mod=p.oAB({type:r}),r.\u0275inj=p.cJS({imports:[[S.ez,f.Bz,d.$6,m.X,T.PV,Q,_.s,b.C]]}),r})()}}]);