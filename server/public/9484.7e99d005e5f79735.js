"use strict";(self.webpackChunkmain=self.webpackChunkmain||[]).push([[9484],{7946:(N,Z,e)=>{e.d(Z,{x:()=>y});var h=e(9808),f=e(897),p=e(8481),d=e(3610),x=e(3580),S=e(9476),M=e(3309),C=e(4867),m=e(717),_=e(8645),I=e(5e3);let y=(()=>{class i{}return i.\u0275fac=function(T){return new(T||i)},i.\u0275mod=I.oAB({type:i}),i.\u0275inj=I.cJS({imports:[[h.ez,p.X,d.$6,f.$,m.N,x.Q,S.L,M.U,C.Q,_.M]]}),i})()},9814:(N,Z,e)=>{e.d(Z,{O:()=>U});var h=e(655),f=e(3154),p=e(7630),d=e(4987),x=e(591),S=e(8929),M=e(3240),C=e(4850),m=e(373),_=e(5778),I=e(4290),y=e(1307),i=e(2198),s=e(13),T=e(7168),t=e(5e3),g=e(9350),v=e(9808),P=e(7484),D=e(5851),z=e(1132),w=e(727),$=e(7451),B=e(404),F=e(2683),R=e(5017),O=e(8054),A=e(3075),Y=e(2166),J=e(8481),W=e(6906),V=e(125),H=e(8511),j=e(4022),b=e(6042),L=e(2643),K=e(325),G=e(3610),u=e(7625),Q=e(6123),E=e(9169),X=e(8144),q=e(2359),k=e(822),tt=e(1047),nt=e(7525),et=e(9180),ot=e(8227),at=e(6612);function ct(o,a){if(1&o){const n=t.EpF();t.TgZ(0,"nz-alert",6),t.NdJ("nzOnClose",function(){return t.CHM(n),t.oxw().onSuccessBannerClose()}),t.qZA()}}function lt(o,a){if(1&o&&t._UZ(0,"cvc-form-errors-alert",7),2&o){const n=t.oxw();t.Q6J("errors",n.errorMessages)}}function rt(o,a){if(1&o){const n=t.EpF();t.TgZ(0,"textarea",8),t.NdJ("ngModelChange",function(c){return t.CHM(n),t.oxw().reason=c}),t.qZA()}if(2&o){const n=t.oxw();t.Q6J("ngModel",n.reason)}}function st(o,a){1&o&&t._UZ(0,"nz-option",13)}function it(o,a){1&o&&t._UZ(0,"nz-option",14)}function gt(o,a){1&o&&t._UZ(0,"nz-option",15)}function ut(o,a){if(1&o){const n=t.EpF();t.TgZ(0,"nz-select",9),t.NdJ("ngModelChange",function(c){return t.CHM(n),t.oxw().newStatus=c}),t.YNc(1,st,1,0,"nz-option",10),t.YNc(2,it,1,0,"nz-option",11),t.YNc(3,gt,1,0,"nz-option",12),t.qZA()}if(2&o){const n=t.oxw();t.Q6J("ngModel",n.newStatus),t.xp6(1),t.Q6J("ngIf","NEW"==n.currentStatus),t.xp6(1),t.Q6J("ngIf","NEW"!=n.currentStatus),t.xp6(1),t.Q6J("ngIf","NEW"==n.currentStatus)}}function pt(o,a){if(1&o){const n=t.EpF();t.TgZ(0,"nz-spin",16)(1,"cvc-form-buttons")(2,"cvc-org-selector-btn-group",17),t.NdJ("selectedOrgChange",function(c){return t.CHM(n),t.oxw().mostRecentOrg=c}),t.TgZ(3,"button",18),t.NdJ("click",function(){return t.CHM(n),t.oxw().updateSourceSuggestionStatus()}),t._uU(4," Update Source Suggestion status "),t.qZA()()()()}if(2&o){const n=t.oxw();t.Q6J("nzSpinning",n.loading),t.xp6(2),t.Q6J("selectedOrg",n.mostRecentOrg),t.xp6(1),t.Q6J("disabled",n.loading)}}let dt=(()=>{class o{constructor(n,l,c){this.viewerService=n,this.networkErrorService=l,this.updateSuggestionStatusGql=c,this.commentAddedEvent=new t.vpe,this.destroy$=new S.xQ,this.success=!1,this.errorMessages=[],this.loading=!1,this.viewerService.viewer$.pipe((0,u.R)(this.destroy$)).subscribe(r=>{this.organizations=r.organizations,this.mostRecentOrg=r.mostRecentOrg}),this.sourceSuggestionStatusMutator=new Q.U(l)}selectOrg(n){this.mostRecentOrg=n}updateSourceSuggestionStatus(){var n;if(this.newStatus){let l=this.sourceSuggestionStatusMutator.mutate(this.updateSuggestionStatusGql,{input:{id:this.sourceSuggestionId,newStatus:this.newStatus,reason:this.reason,organizationId:null===(n=this.mostRecentOrg)||void 0===n?void 0:n.id}});l.submitSuccess$.pipe((0,u.R)(this.destroy$)).subscribe(c=>{this.resetForm(),this.success=!0}),l.submitError$.pipe((0,u.R)(this.destroy$)).subscribe(c=>{c&&(this.errorMessages=c)}),l.isSubmitting$.pipe((0,u.R)(this.destroy$)).subscribe(c=>{this.loading=c})}}resetForm(){this.commentText=""}onSuccessBannerClose(){this.resetForm()}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(g.a),t.Y36(E.Y),t.Y36(p.wRZ))},o.\u0275cmp=t.Xpm({type:o,selectors:[["cvc-update-source-suggestion-form"]],inputs:{sourceSuggestionId:"sourceSuggestionId",currentStatus:"currentStatus"},outputs:{commentAddedEvent:"commentAddedEvent"},decls:7,vars:2,consts:[["nzDirection","vertical"],["nzBanner","","nzMessage","Status Updated","nzType","success","nzCloseable","",3,"nzOnClose",4,"ngIf"],[3,"errors",4,"ngIf"],["rows","4","nz-input","",3,"ngModel","ngModelChange",4,"nzSpaceItem"],["nzPlaceHolder","New Status","required","true",3,"ngModel","ngModelChange",4,"nzSpaceItem"],["nzTip","Submitting",3,"nzSpinning",4,"nzSpaceItem"],["nzBanner","","nzMessage","Status Updated","nzType","success","nzCloseable","",3,"nzOnClose"],[3,"errors"],["rows","4","nz-input","",3,"ngModel","ngModelChange"],["nzPlaceHolder","New Status","required","true",3,"ngModel","ngModelChange"],["nzValue","CURATED","nzLabel","Curated",4,"ngIf"],["nzValue","NEW","nzLabel","New",4,"ngIf"],["nzValue","REJECTED","nzLabel","Rejected",4,"ngIf"],["nzValue","CURATED","nzLabel","Curated"],["nzValue","NEW","nzLabel","New"],["nzValue","REJECTED","nzLabel","Rejected"],["nzTip","Submitting",3,"nzSpinning"],[3,"selectedOrg","selectedOrgChange"],["type","submit","nz-button","","cvcOrgSelectorBtn","","nzType","primary","nzSize","small",3,"disabled","click"]],template:function(n,l){1&n&&(t.TgZ(0,"nz-card")(1,"nz-space",0),t.YNc(2,ct,1,0,"nz-alert",1),t.YNc(3,lt,1,1,"cvc-form-errors-alert",2),t.YNc(4,rt,1,1,"textarea",3),t.YNc(5,ut,4,4,"nz-select",4),t.YNc(6,pt,5,3,"nz-spin",5),t.qZA()()),2&n&&(t.xp6(2),t.Q6J("ngIf",l.success),t.xp6(1),t.Q6J("ngIf",l.errorMessages.length))},directives:[P.bd,X.NU,v.O5,q.r,k.V,X.$1,tt.Zp,A.Fj,A.JJ,A.On,O.Vq,A.Q7,O.Ip,nt.W,et.Z,ot.q,b.ix,L.dQ,at.m,F.w],styles:[""],encapsulation:2}),o})();var mt=e(3667),_t=e(3388),vt=e(6949),Ct=e(160);function zt(o,a){}function ht(o,a){if(1&o&&(t.ynx(0),t.TgZ(1,"nz-card",6),t.YNc(2,zt,0,0,"ng-template",7),t.qZA(),t.BQk()),2&o){t.oxw();const n=t.MAs(8),l=t.MAs(10),c=t.MAs(4);t.xp6(1),t.Q6J("nzTitle",n)("nzExtra",l),t.xp6(1),t.Q6J("ngTemplateOutlet",c)}}function St(o,a){}const Tt=function(o){return{height:o}};function ft(o,a){if(1&o&&(t.TgZ(0,"div",8)(1,"nz-card",9),t.YNc(2,St,0,0,"ng-template",7),t.qZA()()),2&o){const n=t.oxw(),l=t.MAs(8),c=t.MAs(10),r=t.MAs(4);t.Q6J("ngStyle",t.VKq(4,Tt,n.cvcHeight)),t.xp6(1),t.Q6J("nzTitle",l)("nzExtra",c),t.xp6(1),t.Q6J("ngTemplateOutlet",r)}}function xt(o,a){if(1&o){const n=t.EpF();t.TgZ(0,"cvc-clearable-input-filter",29),t.NdJ("inputModelChange",function(c){return t.CHM(n),t.oxw(2).submitterInput=c})("inputModelChange",function(){return t.CHM(n),t.oxw(2).filterChange$.next()}),t.qZA()}if(2&o){const n=t.oxw(2);t.Q6J("inputModel",n.submitterInput)}}function Mt(o,a){if(1&o&&(t.ynx(0),t.TgZ(1,"nz-tag",51),t._uU(2),t.ALo(3,"lowercase"),t.qZA(),t.BQk()),2&o){const n=t.oxw().$implicit;t.xp6(2),t.hij(" ",t.lcZ(3,1,n.status)," ")}}function It(o,a){if(1&o&&(t.ynx(0),t.TgZ(1,"nz-tag",52),t._uU(2),t.ALo(3,"lowercase"),t.qZA(),t.BQk()),2&o){const n=t.oxw().$implicit;t.xp6(2),t.hij(" ",t.lcZ(3,1,n.status)," ")}}function Zt(o,a){if(1&o&&t._UZ(0,"i",55),2&o){const n=t.oxw(2).$implicit,l=t.oxw(2);t.Q6J("nzTooltipTitle",l.isScrolling?"":n.reason)}}function yt(o,a){if(1&o&&(t.ynx(0),t.TgZ(1,"nz-tag",53),t.YNc(2,Zt,1,1,"i",54),t._uU(3),t.ALo(4,"lowercase"),t.qZA(),t.BQk()),2&o){const n=t.oxw().$implicit;t.xp6(2),t.Q6J("ngIf",n.reason&&""!=n.reason),t.xp6(1),t.hij(" ",t.lcZ(4,2,n.status)," ")}}function Pt(o,a){if(1&o&&t._UZ(0,"cvc-source-tag",56),2&o){const n=t.oxw().$implicit;t.Q6J("source",n.source)}}function At(o,a){if(1&o&&t._UZ(0,"cvc-user-tag",57),2&o){const n=t.oxw().$implicit;t.Q6J("user",n.user)}}function Ot(o,a){if(1&o&&(t.ynx(0),t._uU(1),t.BQk()),2&o){const n=t.oxw().$implicit;t.xp6(1),t.hij(" ",n.source.displayType," ")}}function Ut(o,a){if(1&o&&(t.ynx(0),t._uU(1),t.BQk()),2&o){const n=t.oxw().$implicit;t.xp6(1),t.hij(" ",n.source.citationId," ")}}function Jt(o,a){if(1&o&&t._UZ(0,"cvc-molecular-profile-tag",58),2&o){const n=t.oxw().$implicit;t.Q6J("molecularProfile",n.molecularProfile)}}function bt(o,a){if(1&o&&t._UZ(0,"cvc-disease-tag",59),2&o){const n=t.oxw().$implicit;t.Q6J("disease",n.disease)("truncateLongName",!0)}}const Qt=function(o,a,n){return{molecularProfileId:o,sourceId:a,diseaseId:n}};function Et(o,a){if(1&o){const n=t.EpF();t.TgZ(0,"nz-button-group")(1,"button",60),t._UZ(2,"i",61),t.qZA(),t.TgZ(3,"button",62),t.NdJ("click",function(){t.CHM(n);const c=t.oxw().$implicit;return t.oxw(2).setFormInputs(c.id,c.status)}),t._UZ(4,"i",63),t.qZA()()}if(2&o){const n=t.oxw().$implicit,l=t.oxw(2),c=t.MAs(6);t.xp6(1),t.Q6J("queryParams",t.kEZ(7,Qt,null==n.molecularProfile?null:n.molecularProfile.id,null==n.source?null:n.source.id,null==n.disease?null:n.disease.id))("disabled",n.status!=l.status.New)("nzTooltipTitle",l.isScrolling?"":"Create Evidence with this Source")("nzTooltipMouseEnterDelay",1),t.xp6(2),t.Q6J("nzTooltipTitle",l.isScrolling?"":"Manage Source Suggestion")("nzTooltipMouseEnterDelay",1)("nzPopoverContent",c)}}function Nt(o,a){1&o&&(t.ynx(0),t._uU(1," -- "),t.BQk())}function $t(o,a){if(1&o&&(t.TgZ(0,"tr",39)(1,"td",40),t.ynx(2,41),t.ALo(3,"lowercase"),t.YNc(4,Mt,4,3,"ng-container",42),t.YNc(5,It,4,3,"ng-container",42),t.YNc(6,yt,5,4,"ng-container",42),t.BQk(),t.qZA(),t.TgZ(7,"td",24),t.YNc(8,Pt,1,1,"cvc-source-tag",43),t.qZA(),t.TgZ(9,"td",44),t._UZ(10,"i",17),t.ALo(11,"entityColor"),t.qZA(),t.TgZ(12,"td"),t.YNc(13,At,1,1,"cvc-user-tag",45),t.qZA(),t.TgZ(14,"td"),t.YNc(15,Ot,2,1,"ng-container",46),t.qZA(),t.TgZ(16,"td"),t.YNc(17,Ut,2,1,"ng-container",46),t.qZA(),t.TgZ(18,"td"),t.YNc(19,Jt,1,1,"cvc-molecular-profile-tag",47),t.qZA(),t.TgZ(20,"td"),t.YNc(21,bt,1,2,"cvc-disease-tag",48),t.qZA(),t.TgZ(22,"td",49),t._uU(23),t.ALo(24,"date"),t.qZA(),t.TgZ(25,"td",50),t.YNc(26,Et,5,11,"nz-button-group",46),t.YNc(27,Nt,2,0,"ng-container",46),t.qZA()()),2&o){const n=a.$implicit,l=t.oxw(2);t.xp6(2),t.Q6J("ngSwitch",t.lcZ(3,15,n.status)),t.xp6(2),t.Q6J("ngSwitchCase","curated"),t.xp6(1),t.Q6J("ngSwitchCase","new"),t.xp6(1),t.Q6J("ngSwitchCase","rejected"),t.xp6(2),t.Q6J("ngIf",n.source),t.xp6(1),t.Q6J("nzTooltipTitle",l.isScrolling?"":n.initialComment),t.xp6(1),t.Q6J("nzTwotoneColor",t.lcZ(11,17,"Comment")),t.xp6(3),t.Q6J("ngIf",n.user),t.xp6(2),t.Q6J("ngIf",n.source),t.xp6(2),t.Q6J("ngIf",n.source),t.xp6(2),t.Q6J("ngIf",n.molecularProfile),t.xp6(2),t.Q6J("ngIf",n.disease),t.xp6(2),t.hij(" ",t.lcZ(24,19,n.createdAt)," "),t.xp6(3),t.Q6J("ngIf",l.isSignedIn),t.xp6(1),t.Q6J("ngIf",!l.isSignedIn)}}const Ft=function(){return{x:"680px",y:"800px"}},Lt=function(){return["descend","ascend",null]};function Dt(o,a){if(1&o){const n=t.EpF();t.TgZ(0,"nz-table",10,11),t.NdJ("cvcTableScrollOnScroll",function(c){return t.CHM(n),t.oxw().scrollEvent$.next(c)}),t.ALo(2,"ngrxPush"),t.ALo(3,"ngrxPush"),t.ALo(4,"ngrxPush"),t.ALo(5,"ngrxPush"),t.TgZ(6,"thead",12),t.NdJ("nzSortOrderChange",function(c){return t.CHM(n),t.oxw().sortChange$.next(c)}),t.TgZ(7,"tr",13)(8,"th",14),t._uU(9," Status "),t.qZA(),t.TgZ(10,"th",15),t._uU(11," Citation "),t.qZA(),t.TgZ(12,"th",16),t._UZ(13,"i",17),t.ALo(14,"entityColor"),t.qZA(),t.TgZ(15,"th",18),t._uU(16," Submitter "),t.qZA(),t.TgZ(17,"th",19),t._uU(18," Type "),t.qZA(),t.TgZ(19,"th",19),t._uU(20," ID "),t.qZA(),t.TgZ(21,"th",20),t._uU(22," Molecular Profile "),t.qZA(),t.TgZ(23,"th",18),t._uU(24," Disease "),t.qZA(),t.TgZ(25,"th",21),t._uU(26," Submitted "),t.qZA(),t.TgZ(27,"th",22),t._uU(28," Actions "),t.qZA()(),t.TgZ(29,"tr",23)(30,"th",24)(31,"nz-select",25),t.NdJ("ngModelChange",function(){return t.CHM(n),t.oxw().filterChange$.next()})("ngModelChange",function(c){return t.CHM(n),t.oxw().statusInput=c}),t._UZ(32,"nz-option",26)(33,"nz-option",27)(34,"nz-option",28),t.qZA()(),t.TgZ(35,"th",24)(36,"cvc-clearable-input-filter",29),t.NdJ("inputModelChange",function(c){return t.CHM(n),t.oxw().citationInput=c})("inputModelChange",function(){return t.CHM(n),t.oxw().filterChange$.next()}),t.qZA()(),t._UZ(37,"th"),t.TgZ(38,"th"),t.YNc(39,xt,1,1,"cvc-clearable-input-filter",30),t.qZA(),t.TgZ(40,"th")(41,"nz-select",31),t.NdJ("ngModelChange",function(){return t.CHM(n),t.oxw().filterChange$.next()})("ngModelChange",function(c){return t.CHM(n),t.oxw().sourceTypeInput=c}),t._UZ(42,"nz-option",32)(43,"nz-option",33),t.qZA()(),t.TgZ(44,"th")(45,"cvc-clearable-input-filter",34),t.NdJ("inputModelChange",function(c){return t.CHM(n),t.oxw().citationIdInput=c})("inputModelChange",function(){return t.CHM(n),t.oxw().filterChange$.next()}),t.qZA()(),t.TgZ(46,"th")(47,"cvc-clearable-input-filter",35),t.NdJ("inputModelChange",function(c){return t.CHM(n),t.oxw().molecularProfileNameInput=c})("inputModelChange",function(){return t.CHM(n),t.oxw().filterChange$.next()}),t.qZA()(),t.TgZ(48,"th")(49,"cvc-clearable-input-filter",36),t.NdJ("inputModelChange",function(c){return t.CHM(n),t.oxw().diseaseNameInput=c})("inputModelChange",function(){return t.CHM(n),t.oxw().filterChange$.next()}),t.qZA()(),t._UZ(50,"th")(51,"th",37),t.qZA()(),t.TgZ(52,"tbody"),t.YNc(53,$t,28,21,"ng-template",38),t.qZA()()}if(2&o){const n=t.oxw();t.Q6J("nzData",t.lcZ(2,33,n.row$))("nzLoading",!t.lcZ(3,35,n.row$))("cvcAutoHeightTable",25)("nzVirtualItemSize",29)("cvcTableScrollQueryRef",n.queryRef)("cvcTableScrollPageInfo",t.lcZ(4,37,n.pageInfo$))("cvcTableScrollToIndex",t.lcZ(5,39,n.scrollIndex$))("nzVirtualForTrackBy",n.trackByIndex)("nzScroll",t.DdM(43,Ft))("nzFrontPagination",!1)("nzShowPagination",!1),t.xp6(10),t.Q6J("nzColumnKey",n.sortColumns.Citation)("nzSortFn",!0),t.xp6(3),t.Q6J("nzTwotoneColor",t.lcZ(14,41,"Comment")),t.xp6(2),t.Q6J("nzColumnKey",n.sortColumns.Submitter)("nzSortFn",!0),t.xp6(2),t.Q6J("nzColumnKey",n.sortColumns.SourceType)("nzSortFn",!0),t.xp6(2),t.Q6J("nzColumnKey",n.sortColumns.CitationId)("nzSortFn",!0),t.xp6(4),t.Q6J("nzColumnKey",n.sortColumns.DiseaseName)("nzSortFn",!0),t.xp6(2),t.Q6J("nzColumnKey",n.sortColumns.CreatedAt)("nzSortDirections",t.DdM(44,Lt))("nzSortFn",!0),t.xp6(6),t.Q6J("nzDropdownMatchSelectWidth",!1)("ngModel",n.statusInput),t.xp6(5),t.Q6J("inputModel",n.citationInput),t.xp6(3),t.Q6J("ngIf",!n.submitterId),t.xp6(2),t.Q6J("ngModel",n.sourceTypeInput),t.xp6(4),t.Q6J("inputModel",n.citationIdInput),t.xp6(2),t.Q6J("inputModel",n.molecularProfileNameInput),t.xp6(2),t.Q6J("inputModel",n.diseaseNameInput)}}function wt(o,a){if(1&o&&t._UZ(0,"cvc-update-source-suggestion-form",65),2&o){const n=t.oxw(2);t.Q6J("currentStatus",n.selectedStatus)("sourceSuggestionId",n.selectedSourceId)}}function Bt(o,a){if(1&o&&t.YNc(0,wt,1,2,"cvc-update-source-suggestion-form",64),2&o){const n=t.oxw();t.Q6J("ngIf",n.selectedSourceId&&n.selectedStatus)}}function Rt(o,a){}function Yt(o,a){if(1&o&&(t.ynx(0),t.YNc(1,Rt,0,0,"ng-template",7),t.BQk()),2&o){const n=t.oxw(2);t.xp6(1),t.Q6J("ngTemplateOutlet",n.cvcTitleTemplate)}}function Wt(o,a){if(1&o&&(t.ynx(0),t._uU(1),t.BQk()),2&o){const n=t.oxw(2);t.xp6(1),t.hij(" ",n.cvcTitle," ")}}function Vt(o,a){if(1&o&&(t._UZ(0,"i",66),t.ALo(1,"entityColor"),t.YNc(2,Yt,2,1,"ng-container",46),t.YNc(3,Wt,2,1,"ng-container",46),t.TgZ(4,"span",67),t._UZ(5,"cvc-table-counts",68),t.qZA()),2&o){const n=t.oxw();t.Q6J("nzTwotoneColor",t.lcZ(1,4,"Source")),t.xp6(2),t.Q6J("ngIf",n.cvcTitleTemplate),t.xp6(1),t.Q6J("ngIf",n.cvcTitle),t.xp6(2),t.Q6J("cvcTableCountsConnection",n.connection$)}}function Ht(o,a){1&o&&(t.TgZ(0,"nz-tag",71),t._UZ(1,"i",72),t.TgZ(2,"span"),t._uU(3,"Loading\u2026"),t.qZA()())}function jt(o,a){if(1&o&&(t.YNc(0,Ht,4,0,"nz-tag",69),t.ALo(1,"ngrxPush"),t._UZ(2,"cvc-no-more-rows",70),t.ALo(3,"ngrxPush")),2&o){const n=t.oxw();t.Q6J("ngIf",t.lcZ(1,2,n.moreLoading$)),t.xp6(2),t.Q6J("cvcShowTag",t.lcZ(3,4,n.noMoreRows$))}}let U=class{constructor(a,n,l){this.gql=a,this.viewerService=n,this.cdr=l,this.initialPageSize=35,this.isScrolling=!1,this.statusInput=p.F3s.New,this.sortColumns=p.jw9,this.status=p.F3s,this.showManageForm=!1,this.noMoreRows$=new x.X(!1),this.scrollEvent$=new x.X("stop"),this.sortChange$=new S.xQ,this.filterChange$=new S.xQ,this.scrollIndex$=new S.xQ,this.viewerService.viewer$.pipe((0,C.U)(c=>c.signedIn),(0,d.t)(this)).subscribe(c=>this.isSignedIn=c)}set initialUserFilters(a){a&&Object.assign(this,a)}ngOnInit(){this.queryRef=this.gql.watch({first:this.initialPageSize,sourceId:this.sourceId,submitterId:this.submitterId,status:this.status.New,sortBy:{column:this.sortColumns.CreatedAt,direction:p.SrV.Desc}}),this.result$=this.queryRef.valueChanges,this.initialLoading$=this.result$.pipe((0,m.j)("loading"),(0,_.x)(),(0,I.o)(a=>!1!==a,!0)),this.moreLoading$=this.result$.pipe((0,m.j)("loading"),(0,_.x)(),(0,y.T)(2)),this.connection$=this.result$.pipe((0,m.j)("data","sourceSuggestions"),(0,i.h)(M.ep)),this.row$=this.connection$.pipe((0,m.j)("edges"),(0,i.h)(M.ep),(0,C.U)(a=>a.map(n=>n.node))),this.pageInfo$=this.connection$.pipe((0,m.j)("pageInfo"),(0,i.h)(M.ep)),this.sortChange$.pipe((0,d.t)(this)).subscribe(a=>{this.queryRef.refetch({sortBy:(0,f._)(a)})}),this.filterChange$.pipe((0,s.b)(500),(0,d.t)(this)).subscribe(()=>{this.refresh()}),this.scrollEvent$.pipe((0,C.U)(a=>"stop"!==a),(0,_.x)(),(0,d.t)(this)).subscribe(a=>{this.isScrolling=a,this.cdr.detectChanges()}),this.scrollEvent$.pipe((0,i.h)(a=>"bottom"===a),(0,T.M)(this.pageInfo$),(0,C.U)(([a,n])=>n),(0,d.t)(this)).subscribe(a=>{a.hasNextPage||(this.noMoreRows$.next(!0),this.cdr.detectChanges(),setInterval(()=>this.noMoreRows$.next(!1)))})}refresh(){this.queryRef.refetch({citationId:this.citationIdInput?+this.citationIdInput:void 0,sourceType:this.sourceTypeInput?this.sourceTypeInput:void 0,sourceId:this.sourceIdInput?+this.sourceIdInput:void 0,molecularProfileName:this.molecularProfileNameInput,diseaseName:this.diseaseNameInput,comment:this.commentInput,submitter:this.submitterInput,citation:this.citationInput,status:this.statusInput?this.statusInput:void 0}).then(()=>this.scrollIndex$.next(0)),this.cdr.detectChanges()}setFormInputs(a,n){this.selectedSourceId=a,this.selectedStatus=n,this.showManageForm=!0}closePopover(){this.showManageForm=!1}trackByIndex(a,n){return n.id}};U.\u0275fac=function(a){return new(a||U)(t.Y36(p.WRV),t.Y36(g.a),t.Y36(t.sBO))},U.\u0275cmp=t.Xpm({type:U,selectors:[["cvc-source-suggestions-table"]],inputs:{cvcHeight:"cvcHeight",sourceId:"sourceId",submitterId:"submitterId",cvcTitleTemplate:"cvcTitleTemplate",cvcTitle:"cvcTitle",initialPageSize:"initialPageSize",initialUserFilters:"initialUserFilters"},decls:11,vars:2,consts:[[4,"ngIf","ngIfElse"],["setHeightCard",""],["table",""],["manageSuggestionTemplate",""],["titleTemplate",""],["extraTemplate",""],["nzSize","small","cvcAutoHeightCard","","cvcAutoHeightTarget","viewport",3,"nzTitle","nzExtra"],[3,"ngTemplateOutlet"],[1,"card-container",3,"ngStyle"],["cvcAutoHeightCard","","nzSize","small",3,"nzTitle","nzExtra"],["nzSize","small","cvcTableScroll","",3,"nzData","nzLoading","cvcAutoHeightTable","nzVirtualItemSize","cvcTableScrollQueryRef","cvcTableScrollPageInfo","cvcTableScrollToIndex","nzVirtualForTrackBy","nzScroll","nzFrontPagination","nzShowPagination","cvcTableScrollOnScroll"],["virtualTable",""],[3,"nzSortOrderChange"],[1,"col-header-row"],["nzWidth","100px","nzLeft",""],["nzWidth","425px","nzLeft","",3,"nzColumnKey","nzSortFn"],["nzWidth","24px","nzAlign","center","nz-tooltip","","nzTooltipTitle","Submitter Comment"],["nz-icon","","nzTheme","twotone","nzType","civic-comment",3,"nzTwotoneColor"],["nzWidth","200px",3,"nzColumnKey","nzSortFn"],["nzWidth","80px",3,"nzColumnKey","nzSortFn"],["nzWidth","290px"],["nzWidth","90px","nzSortOrder","descend",3,"nzColumnKey","nzSortDirections","nzSortFn"],["nzWidth","70px","nzRight","","nzAlign","center"],[1,"filter-row"],["nzLeft",""],["nzAllowClear","","nzSize","small","nzPlaceHolder","Any",3,"nzDropdownMatchSelectWidth","ngModel","ngModelChange"],["nzValue","NEW","nzLabel","new"],["nzValue","CURATED","nzLabel","curated"],["nzValue","REJECTED","nzLabel","rejected"],[3,"inputModel","inputModelChange"],[3,"inputModel","inputModelChange",4,"ngIf"],["nzAllowClear","","nzSize","small","nzPlaceHolder","Any",3,"ngModel","ngModelChange"],["nzValue","PUBMED","nzLabel","PubMed"],["nzValue","ASCO","nzLabel","ASCO"],["placeholderText","ID",3,"inputModel","inputModelChange"],["placeholderText","Molecular Profile",3,"inputModel","inputModelChange"],["placeholderText","Disease",3,"inputModel","inputModelChange"],["nzRight",""],["nz-virtual-scroll",""],[1,"data-row"],["nzLeft","","nzAlign","center"],[3,"ngSwitch"],[4,"ngSwitchCase"],[3,"source",4,"ngIf"],["nzAlign","center","nz-tooltip","","nzTooltipPlacement","top",3,"nzTooltipTitle"],[3,"user",4,"ngIf"],[4,"ngIf"],[3,"molecularProfile",4,"ngIf"],[3,"disease","truncateLongName",4,"ngIf"],["nzAlign","right"],["nzRight","","nzAlign","center",1,"button-cell"],["nzColor","green",1,"status-tag"],["nzColor","orange",1,"status-tag"],["nzColor","volcano",1,"status-tag"],["nz-icon","","nz-tooltip","","nzType","civic-comment",3,"nzTooltipTitle",4,"ngIf"],["nz-icon","","nz-tooltip","","nzType","civic-comment",3,"nzTooltipTitle"],[3,"source"],[3,"user"],[3,"molecularProfile"],[3,"disease","truncateLongName"],["routerLink","/evidence/add/submit","nz-button","","nzSize","small","nz-tooltip","",3,"queryParams","disabled","nzTooltipTitle","nzTooltipMouseEnterDelay"],["nz-icon","","nzType","civic-evidence"],["nz-button","","nzSize","small","nz-popover","","nzPopoverTitle","Manage Source Suggestion","nzPopoverPlacement","left","nzPopoverTrigger","click","nz-tooltip","","nzTooltipPlacement","top",3,"nzTooltipTitle","nzTooltipMouseEnterDelay","nzPopoverContent","click"],["nz-icon","","nzType","civic-source"],[3,"currentStatus","sourceSuggestionId",4,"ngIf"],[3,"currentStatus","sourceSuggestionId"],["nz-icon","","nzTheme","twotone","nzType","civic-source",3,"nzTwotoneColor"],[1,"table-info"],[3,"cvcTableCountsConnection"],["nzColor","processing",4,"ngIf"],[3,"cvcShowTag"],["nzColor","processing"],["nz-icon","","nzType","sync","nzSpin",""]],template:function(a,n){if(1&a&&(t.YNc(0,ht,3,3,"ng-container",0),t.YNc(1,ft,3,6,"ng-template",null,1,t.W1O),t.YNc(3,Dt,54,45,"ng-template",null,2,t.W1O),t.YNc(5,Bt,1,1,"ng-template",null,3,t.W1O),t.YNc(7,Vt,6,6,"ng-template",null,4,t.W1O),t.YNc(9,jt,4,6,"ng-template",null,5,t.W1O)),2&a){const l=t.MAs(2);t.Q6J("ngIf",!n.cvcHeight)("ngIfElse",l)}},directives:[v.O5,P.bd,D.D,v.tP,v.PC,z.N8,w.y,$.q,z.Om,z.$Z,z.Uo,z._C,z.qn,z.qD,z.UX,B.SY,F.w,R.Ls,O.Vq,A.JJ,A.On,O.Ip,Y.p,z.p0,z.zu,v.RF,v.n9,J.j,W.T,V.I,H.p,j.n,b.fY,b.ix,L.dQ,K.rH,G.lU,dt,mt.B,_t.H],pipes:[vt.fM,Ct.a,v.i8,v.uU],styles:["[_nghost-%COMP%]{display:block}nz-card[_ngcontent-%COMP%]:first-of-type     .ant-card-body{padding:0;margin-top:1px}.table-info[_ngcontent-%COMP%]{margin-left:.5rem}tr.col-header-row[_ngcontent-%COMP%]   th.ant-table-cell[_ngcontent-%COMP%]{white-space:nowrap}tr.col-header-row[_ngcontent-%COMP%]   th.ant-table-cell.align-right[_ngcontent-%COMP%]     .ant-table-column-title{text-align:right}tr.filter-row[_ngcontent-%COMP%]   th.ant-table-cell[_ngcontent-%COMP%]{padding:3px 4px}tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell[_ngcontent-%COMP%]{white-space:nowrap}tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell[_ngcontent-%COMP%]   .anticon.attribute-icon[_ngcontent-%COMP%]{color:#595959}tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell.overflow-ellipsis[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis}tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell.button-cell[_ngcontent-%COMP%]{padding:0}tr.data-row[_ngcontent-%COMP%]   td.align-right[_ngcontent-%COMP%], tr.col-header-row[_ngcontent-%COMP%]   th.ant-table-cell[_ngcontent-%COMP%]   .align-right[_ngcontent-%COMP%], tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell[_ngcontent-%COMP%]   .align-right[_ngcontent-%COMP%], tr.filter-row[_ngcontent-%COMP%]   th.ant-table-cell[_ngcontent-%COMP%]   .align-right[_ngcontent-%COMP%]{text-align:right}.status-tag[_ngcontent-%COMP%]{display:block}"],changeDetection:0}),U=(0,h.gn)([(0,d.c)()],U)},2832:(N,Z,e)=>{e.d(Z,{W:()=>G});var h=e(9808),f=e(3075),p=e(325),d=e(3580),x=e(2467),S=e(4125),M=e(271),C=e(8525),m=e(9779),_=e(7345),I=e(6905),y=e(3111),i=e(1433),s=e(9240),T=e(7008),t=e(8776),g=e(7484),v=e(4546),P=e(1825),D=e(4375),z=e(6042),w=e(868),$=e(6949),B=e(7525),F=e(2359),R=e(1047),O=e(8054),A=e(4509),Y=e(8144),J=e(5e3);let W=(()=>{class u{}return u.\u0275fac=function(E){return new(E||u)},u.\u0275mod=J.oAB({type:u}),u.\u0275inj=J.cJS({imports:[[h.ez,f.UX,$.WG,z.sL,g.vh,w.we,v.U5,B.j,F.L,R.o7,O.LV,Y.zf,f.u5,t.X0,T.B,P.A,D.R,A.w]]}),u})();var V=e(5017),H=e(3610),j=e(1132),b=e(8481),L=e(404),K=e(3618);let G=(()=>{class u{}return u.\u0275fac=function(E){return new(E||u)},u.\u0275mod=J.oAB({type:u}),u.\u0275inj=J.cJS({imports:[[h.ez,f.u5,$.WG,p.Bz,z.sL,g.vh,V.PV,H.$6,O.LV,j.HQ,b.X,L.cg,K.ZJ,s.w,C.T,M.y,y.n,i.c,S.k,d.Q,T.B,I.s,m.s,W,_.W,x.u]]}),u})()},7677:(N,Z,e)=>{e.d(Z,{G:()=>t});var h=e(9808),f=e(325),p=e(3610),d=e(8481),x=e(5017),S=e(897),M=e(9779),C=e(4867),m=e(6905),_=e(6949),I=e(7484),y=e(3098),i=e(5e3);let s=(()=>{class g{}return g.\u0275fac=function(P){return new(P||g)},g.\u0275mod=i.oAB({type:g}),g.\u0275inj=i.cJS({imports:[[h.ez,_.WG,I.vh,y.q6,x.PV,M.s,C.Q,S.$,m.s]]}),g})();var T=e(6429);let t=(()=>{class g{}return g.\u0275fac=function(P){return new(P||g)},g.\u0275mod=i.oAB({type:g}),g.\u0275inj=i.cJS({imports:[[h.ez,f.Bz,p.$6,d.X,x.PV,s,m.s,T.C]]}),g})()},8645:(N,Z,e)=>{e.d(Z,{M:()=>i});var h=e(9808),f=e(325),p=e(8481),d=e(7484),x=e(4989),S=e(3098),M=e(6949),C=e(5017),m=e(6905),_=e(5e3);let I=(()=>{class s{}return s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=_.oAB({type:s}),s.\u0275inj=_.cJS({imports:[[h.ez,M.WG,C.PV,d.vh,S.q6,m.s,x.X]]}),s})();var y=e(3610);let i=(()=>{class s{}return s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=_.oAB({type:s}),s.\u0275inj=_.cJS({imports:[[h.ez,f.Bz,C.PV,p.X,y.$6,I]]}),s})()}}]);