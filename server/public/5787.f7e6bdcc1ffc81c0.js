"use strict";(self.webpackChunkmain=self.webpackChunkmain||[]).push([[5787],{1218:(A,f,n)=>{n.d(f,{i:()=>M});var _=n(6814),z=n(4190),d=n(5695),i=n(7417),T=n(551),p=n(1855),C=n(2524),S=n(3640),v=n(3146),h=n(5879);let M=(()=>{class u{}return u.\u0275fac=function(g){return new(g||u)},u.\u0275mod=h.oAB({type:u}),u.\u0275inj=h.cJS({imports:[_.ez,z.Bz,S.mS,d.X,i.$6,T.PV,p.f,C.s,v.C]}),u})()},1106:(A,f,n)=>{n.d(f,{L:()=>l});var _=n(6814),z=n(4190),d=n(5695),i=n(551),T=n(95),p=n(6067),C=n(8125),S=n(2962),v=n(1022),h=n(5879);let M=(()=>{class g{}return g.\u0275fac=function(t){return new(t||g)},g.\u0275mod=h.oAB({type:g}),g.\u0275inj=h.cJS({imports:[_.ez,S.vh,T.Jb,C.q6,p.X,v.H]}),g})();var u=n(7417);let l=(()=>{class g{}return g.\u0275fac=function(t){return new(t||g)},g.\u0275mod=h.oAB({type:g}),g.\u0275inj=h.cJS({imports:[_.ez,z.Bz,d.X,i.PV,u.$6,M]}),g})()},7950:(A,f,n)=>{n.d(f,{x:()=>u});var _=n(6814),z=n(366),d=n(5695),i=n(7417),T=n(3396),p=n(1106),C=n(5956),S=n(7528),v=n(6061),h=n(3717),M=n(5879);let u=(()=>{class l{}return l.\u0275fac=function(m){return new(m||l)},l.\u0275mod=M.oAB({type:l}),l.\u0275inj=M.cJS({imports:[_.ez,d.X,i.$6,z.$,v.N,T.Q,p.L,C.U,S.Q,h.M]}),l})()},4106:(A,f,n)=>{n.d(f,{O:()=>G});var _=n(655),z=n(4632),d=n(313),i=n(1791),T=n(5619),p=n(8645),C=n(5676),S=n(7398),v=n(3997),h=n(812),M=n(836),u=n(2181),l=n(3620),g=n(2460),m=n(4223),t=n(5879),y=n(951),I=n(6814),Z=n(6223),L=n(4190),E=n(2840),N=n(855),D=n(1958),$=n(2962),B=n(551),F=n(7417),U=n(9691),P=n(3740),J=n(5695),R=n(6109),K=n(4997),W=n(9857),Y=n(3489),V=n(6753),w=n(4764),H=n(8516),j=n(9775),x=n(4138),O=n(9773),b=n(2024),q=n(7473),k=n(2669),tt=n(3903),nt=n(824),X=n(2574),et=n(4755),ot=n(5805),at=n(2257),rt=n(3764);function ct(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"nz-alert",6),t.NdJ("nzOnClose",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.onSuccessBannerClose())}),t.qZA()}}function lt(o,a){if(1&o&&t._UZ(0,"cvc-form-errors-alert",7),2&o){const e=t.oxw();t.Q6J("errors",e.errorMessages)}}function st(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"textarea",8),t.NdJ("ngModelChange",function(r){t.CHM(e);const s=t.oxw();return t.KtG(s.reason=r)}),t.qZA()}if(2&o){const e=t.oxw();t.Q6J("ngModel",e.reason)}}function it(o,a){1&o&&t._UZ(0,"nz-option",13)}function gt(o,a){1&o&&t._UZ(0,"nz-option",14)}function ut(o,a){1&o&&t._UZ(0,"nz-option",15)}function pt(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"nz-select",9),t.NdJ("ngModelChange",function(r){t.CHM(e);const s=t.oxw();return t.KtG(s.newStatus=r)}),t.YNc(1,it,1,0,"nz-option",10),t.YNc(2,gt,1,0,"nz-option",11),t.YNc(3,ut,1,0,"nz-option",12),t.qZA()}if(2&o){const e=t.oxw();t.Q6J("ngModel",e.newStatus),t.xp6(1),t.Q6J("ngIf","NEW"==e.currentStatus),t.xp6(1),t.Q6J("ngIf","NEW"!=e.currentStatus),t.xp6(1),t.Q6J("ngIf","NEW"==e.currentStatus)}}function dt(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"nz-spin",16)(1,"cvc-form-buttons")(2,"cvc-org-selector-btn-group",17),t.NdJ("selectedOrgChange",function(r){t.CHM(e);const s=t.oxw();return t.KtG(s.mostRecentOrg=r)}),t.TgZ(3,"button",18),t.NdJ("click",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.updateSourceSuggestionStatus())}),t._uU(4," Update Source Suggestion status "),t.qZA()()()()}if(2&o){const e=t.oxw();t.Q6J("nzSpinning",e.loading),t.xp6(2),t.Q6J("selectedOrg",e.mostRecentOrg),t.xp6(1),t.Q6J("disabled",e.loading)}}let mt=(()=>{class o{constructor(e,c,r){this.viewerService=e,this.networkErrorService=c,this.updateSuggestionStatusGql=r,this.commentAddedEvent=new t.vpe,this.destroy$=new p.x,this.success=!1,this.errorMessages=[],this.loading=!1,this.viewerService.viewer$.pipe((0,O.R)(this.destroy$)).subscribe(s=>{this.organizations=s.organizations,this.mostRecentOrg=s.mostRecentOrg}),this.sourceSuggestionStatusMutator=new b.U(c)}selectOrg(e){this.mostRecentOrg=e}updateSourceSuggestionStatus(){if(this.newStatus){let e=this.sourceSuggestionStatusMutator.mutate(this.updateSuggestionStatusGql,{input:{id:this.sourceSuggestionId,newStatus:this.newStatus,reason:this.reason,organizationId:this.mostRecentOrg?.id}});e.submitSuccess$.pipe((0,O.R)(this.destroy$)).subscribe(c=>{this.resetForm(),this.success=!0}),e.submitError$.pipe((0,O.R)(this.destroy$)).subscribe(c=>{c&&(this.errorMessages=c)}),e.isSubmitting$.pipe((0,O.R)(this.destroy$)).subscribe(c=>{this.loading=c})}}resetForm(){this.commentText=""}onSuccessBannerClose(){this.resetForm()}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(y.a),t.Y36(q.Y),t.Y36(d.wRZ))},o.\u0275cmp=t.Xpm({type:o,selectors:[["cvc-update-source-suggestion-form"]],inputs:{sourceSuggestionId:"sourceSuggestionId",currentStatus:"currentStatus"},outputs:{commentAddedEvent:"commentAddedEvent"},decls:7,vars:2,consts:[["nzDirection","vertical"],["nzBanner","","nzMessage","Status Updated","nzType","success","nzCloseable","",3,"nzOnClose",4,"ngIf"],[3,"errors",4,"ngIf"],["rows","4","nz-input","",3,"ngModel","ngModelChange",4,"nzSpaceItem"],["nzPlaceHolder","New Status","required","true",3,"ngModel","ngModelChange",4,"nzSpaceItem"],["nzTip","Submitting",3,"nzSpinning",4,"nzSpaceItem"],["nzBanner","","nzMessage","Status Updated","nzType","success","nzCloseable","",3,"nzOnClose"],[3,"errors"],["rows","4","nz-input","",3,"ngModel","ngModelChange"],["nzPlaceHolder","New Status","required","true",3,"ngModel","ngModelChange"],["nzValue","CURATED","nzLabel","Curated",4,"ngIf"],["nzValue","NEW","nzLabel","New",4,"ngIf"],["nzValue","REJECTED","nzLabel","Rejected",4,"ngIf"],["nzValue","CURATED","nzLabel","Curated"],["nzValue","NEW","nzLabel","New"],["nzValue","REJECTED","nzLabel","Rejected"],["nzTip","Submitting",3,"nzSpinning"],[3,"selectedOrg","selectedOrgChange"],["type","submit","nz-button","","cvcOrgSelectorBtn","","nzType","primary","nzSize","small",3,"disabled","click"]],template:function(e,c){1&e&&(t.TgZ(0,"nz-card")(1,"nz-space",0),t.YNc(2,ct,1,0,"nz-alert",1),t.YNc(3,lt,1,1,"cvc-form-errors-alert",2),t.YNc(4,st,1,1,"textarea",3),t.YNc(5,pt,4,4,"nz-select",4),t.YNc(6,dt,5,3,"nz-spin",5),t.qZA()()),2&e&&(t.xp6(2),t.Q6J("ngIf",c.success),t.xp6(1),t.Q6J("ngIf",c.errorMessages.length))},dependencies:[I.O5,Z.Fj,Z.JJ,Z.Q7,E.ix,N.w,D.dQ,$.bd,k.W,tt.r,nt.Zp,U.Ip,U.Vq,X.NU,X.$1,Z.On,et.V,ot.m,at.q,rt.Z],encapsulation:2}),o})();var Q,_t=n(356),vt=n(2606),Ct=n(8091),zt=n(2616);function Tt(o,a){}function ht(o,a){if(1&o&&(t.ynx(0),t.TgZ(1,"nz-card",6),t.YNc(2,Tt,0,0,"ng-template",7),t.qZA(),t.BQk()),2&o){t.oxw();const e=t.MAs(8),c=t.MAs(10),r=t.MAs(4);t.xp6(1),t.Q6J("nzTitle",e)("nzExtra",c),t.xp6(1),t.Q6J("ngTemplateOutlet",r)}}function St(o,a){}const ft=function(o){return{height:o}};function xt(o,a){if(1&o&&(t.TgZ(0,"div",8)(1,"nz-card",9),t.YNc(2,St,0,0,"ng-template",7),t.qZA()()),2&o){const e=t.oxw(),c=t.MAs(8),r=t.MAs(10),s=t.MAs(4);t.Q6J("ngStyle",t.VKq(4,ft,e.cvcHeight)),t.xp6(1),t.Q6J("nzTitle",c)("nzExtra",r),t.xp6(1),t.Q6J("ngTemplateOutlet",s)}}function Mt(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"cvc-clearable-input-filter",29),t.NdJ("inputModelChange",function(r){t.CHM(e);const s=t.oxw(2);return t.KtG(s.submitterInput=r)})("inputModelChange",function(){t.CHM(e);const r=t.oxw(2);return t.KtG(r.filterChange$.next())}),t.qZA()}if(2&o){const e=t.oxw(2);t.Q6J("inputModel",e.submitterInput)}}function It(o,a){if(1&o&&(t.ynx(0),t.TgZ(1,"nz-tag",51),t._uU(2),t.ALo(3,"lowercase"),t.qZA(),t.BQk()),2&o){const e=t.oxw().$implicit;t.xp6(2),t.hij(" ",t.lcZ(3,1,e.status)," ")}}function Pt(o,a){if(1&o&&(t.ynx(0),t.TgZ(1,"nz-tag",52),t._uU(2),t.ALo(3,"lowercase"),t.qZA(),t.BQk()),2&o){const e=t.oxw().$implicit;t.xp6(2),t.hij(" ",t.lcZ(3,1,e.status)," ")}}function yt(o,a){if(1&o&&t._UZ(0,"i",55),2&o){const e=t.oxw(2).$implicit,c=t.oxw(2);t.Q6J("nzTooltipTitle",c.isScrolling?"":e.reason)}}function Zt(o,a){if(1&o&&(t.ynx(0),t.TgZ(1,"nz-tag",53),t.YNc(2,yt,1,1,"i",54),t._uU(3),t.ALo(4,"lowercase"),t.qZA(),t.BQk()),2&o){const e=t.oxw().$implicit;t.xp6(2),t.Q6J("ngIf",e.reason&&""!=e.reason),t.xp6(1),t.hij(" ",t.lcZ(4,2,e.status)," ")}}function Ot(o,a){if(1&o&&t._UZ(0,"cvc-source-tag",56),2&o){const e=t.oxw().$implicit;t.Q6J("source",e.source)}}function At(o,a){if(1&o&&t._UZ(0,"cvc-user-tag",57),2&o){const e=t.oxw().$implicit;t.Q6J("user",e.user)}}function Et(o,a){if(1&o&&(t.ynx(0),t._uU(1),t.BQk()),2&o){const e=t.oxw().$implicit;t.xp6(1),t.hij(" ",e.source.displayType," ")}}function Ut(o,a){if(1&o&&(t.ynx(0),t._uU(1),t.BQk()),2&o){const e=t.oxw().$implicit;t.xp6(1),t.hij(" ",e.source.citationId," ")}}function Jt(o,a){if(1&o&&t._UZ(0,"cvc-molecular-profile-tag",58),2&o){const e=t.oxw().$implicit;t.Q6J("molecularProfile",e.molecularProfile)}}function Qt(o,a){if(1&o&&t._UZ(0,"cvc-disease-tag",59),2&o){const e=t.oxw().$implicit;t.Q6J("disease",e.disease)("truncateLongName",!0)}}const bt=function(o,a,e){return{molecularProfileId:o,sourceId:a,diseaseId:e}};function Nt(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"nz-button-group")(1,"button",60),t._UZ(2,"i",61),t.qZA(),t.TgZ(3,"button",62),t.NdJ("click",function(){t.CHM(e);const r=t.oxw().$implicit,s=t.oxw(2);return t.KtG(s.setFormInputs(r.id,r.status))}),t._UZ(4,"i",63),t.qZA()()}if(2&o){const e=t.oxw().$implicit,c=t.oxw(2),r=t.MAs(6);t.xp6(1),t.Q6J("queryParams",t.kEZ(7,bt,null==e.molecularProfile?null:e.molecularProfile.id,null==e.source?null:e.source.id,null==e.disease?null:e.disease.id))("disabled",e.status!=c.status.New)("nzTooltipTitle",c.isScrolling?"":"Create Evidence with this Source")("nzTooltipMouseEnterDelay",1),t.xp6(2),t.Q6J("nzTooltipTitle",c.isScrolling?"":"Manage Source Suggestion")("nzTooltipMouseEnterDelay",1)("nzPopoverContent",r)}}function Dt(o,a){1&o&&(t.ynx(0),t._uU(1," -- "),t.BQk())}function $t(o,a){if(1&o&&(t.TgZ(0,"tr",39)(1,"td",40),t.ynx(2,41),t.ALo(3,"lowercase"),t.YNc(4,It,4,3,"ng-container",42),t.YNc(5,Pt,4,3,"ng-container",42),t.YNc(6,Zt,5,4,"ng-container",42),t.BQk(),t.qZA(),t.TgZ(7,"td",24),t.YNc(8,Ot,1,1,"cvc-source-tag",43),t.qZA(),t.TgZ(9,"td",44),t._UZ(10,"i",17),t.ALo(11,"entityColor"),t.qZA(),t.TgZ(12,"td"),t.YNc(13,At,1,1,"cvc-user-tag",45),t.qZA(),t.TgZ(14,"td"),t.YNc(15,Et,2,1,"ng-container",46),t.qZA(),t.TgZ(16,"td"),t.YNc(17,Ut,2,1,"ng-container",46),t.qZA(),t.TgZ(18,"td"),t.YNc(19,Jt,1,1,"cvc-molecular-profile-tag",47),t.qZA(),t.TgZ(20,"td"),t.YNc(21,Qt,1,2,"cvc-disease-tag",48),t.qZA(),t.TgZ(22,"td",49),t._uU(23),t.ALo(24,"date"),t.qZA(),t.TgZ(25,"td",50),t.YNc(26,Nt,5,11,"nz-button-group",46),t.YNc(27,Dt,2,0,"ng-container",46),t.qZA()()),2&o){const e=a.$implicit,c=t.oxw(2);t.xp6(2),t.Q6J("ngSwitch",t.lcZ(3,15,e.status)),t.xp6(2),t.Q6J("ngSwitchCase","curated"),t.xp6(1),t.Q6J("ngSwitchCase","new"),t.xp6(1),t.Q6J("ngSwitchCase","rejected"),t.xp6(2),t.Q6J("ngIf",e.source),t.xp6(1),t.Q6J("nzTooltipTitle",c.isScrolling?"":e.initialComment),t.xp6(1),t.Q6J("nzTwotoneColor",t.lcZ(11,17,"Comment")),t.xp6(3),t.Q6J("ngIf",e.user),t.xp6(2),t.Q6J("ngIf",e.source),t.xp6(2),t.Q6J("ngIf",e.source),t.xp6(2),t.Q6J("ngIf",e.molecularProfile),t.xp6(2),t.Q6J("ngIf",e.disease),t.xp6(2),t.hij(" ",t.lcZ(24,19,e.createdAt)," "),t.xp6(3),t.Q6J("ngIf",c.isSignedIn),t.xp6(1),t.Q6J("ngIf",!c.isSignedIn)}}const Ft=function(){return[]},Lt=function(){return{x:"680px",y:"800px"}},Bt=function(){return["descend","ascend",null]};function Rt(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"nz-table",10,11),t.NdJ("cvcTableScrollOnScroll",function(r){t.CHM(e);const s=t.oxw();return t.KtG(s.scrollEvent$.next(r))}),t.ALo(2,"ngrxPush"),t.ALo(3,"ngrxPush"),t.ALo(4,"ngrxPush"),t.ALo(5,"ngrxPush"),t.TgZ(6,"thead",12),t.NdJ("nzSortOrderChange",function(r){t.CHM(e);const s=t.oxw();return t.KtG(s.sortChange$.next(r))}),t.TgZ(7,"tr",13)(8,"th",14),t._uU(9," Status "),t.qZA(),t.TgZ(10,"th",15),t._uU(11," Citation "),t.qZA(),t.TgZ(12,"th",16),t._UZ(13,"i",17),t.ALo(14,"entityColor"),t.qZA(),t.TgZ(15,"th",18),t._uU(16," Submitter "),t.qZA(),t.TgZ(17,"th",19),t._uU(18," Type "),t.qZA(),t.TgZ(19,"th",19),t._uU(20," ID "),t.qZA(),t.TgZ(21,"th",20),t._uU(22,"Molecular Profile"),t.qZA(),t.TgZ(23,"th",18),t._uU(24," Disease "),t.qZA(),t.TgZ(25,"th",21),t._uU(26," Submitted "),t.qZA(),t.TgZ(27,"th",22),t._uU(28," Actions "),t.qZA()(),t.TgZ(29,"tr",23)(30,"th",24)(31,"nz-select",25),t.NdJ("ngModelChange",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.filterChange$.next())})("ngModelChange",function(r){t.CHM(e);const s=t.oxw();return t.KtG(s.statusInput=r)}),t._UZ(32,"nz-option",26)(33,"nz-option",27)(34,"nz-option",28),t.qZA()(),t.TgZ(35,"th",24)(36,"cvc-clearable-input-filter",29),t.NdJ("inputModelChange",function(r){t.CHM(e);const s=t.oxw();return t.KtG(s.citationInput=r)})("inputModelChange",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.filterChange$.next())}),t.qZA()(),t._UZ(37,"th"),t.TgZ(38,"th"),t.YNc(39,Mt,1,1,"cvc-clearable-input-filter",30),t.qZA(),t.TgZ(40,"th")(41,"nz-select",31),t.NdJ("ngModelChange",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.filterChange$.next())})("ngModelChange",function(r){t.CHM(e);const s=t.oxw();return t.KtG(s.sourceTypeInput=r)}),t._UZ(42,"nz-option",32)(43,"nz-option",33),t.qZA()(),t.TgZ(44,"th")(45,"cvc-clearable-input-filter",34),t.NdJ("inputModelChange",function(r){t.CHM(e);const s=t.oxw();return t.KtG(s.citationIdInput=r)})("inputModelChange",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.filterChange$.next())}),t.qZA()(),t.TgZ(46,"th")(47,"cvc-clearable-input-filter",35),t.NdJ("inputModelChange",function(r){t.CHM(e);const s=t.oxw();return t.KtG(s.molecularProfileNameInput=r)})("inputModelChange",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.filterChange$.next())}),t.qZA()(),t.TgZ(48,"th")(49,"cvc-clearable-input-filter",36),t.NdJ("inputModelChange",function(r){t.CHM(e);const s=t.oxw();return t.KtG(s.diseaseNameInput=r)})("inputModelChange",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.filterChange$.next())}),t.qZA()(),t._UZ(50,"th")(51,"th",37),t.qZA()(),t.TgZ(52,"tbody"),t.YNc(53,$t,28,21,"ng-template",38),t.qZA()()}if(2&o){const e=t.oxw();t.Q6J("nzData",t.lcZ(2,33,e.row$)||t.DdM(43,Ft))("nzLoading",!t.lcZ(3,35,e.row$))("cvcAutoHeightTable",25)("nzVirtualItemSize",29)("cvcTableScrollQueryRef",e.queryRef)("cvcTableScrollPageInfo",t.lcZ(4,37,e.pageInfo$))("cvcTableScrollToIndex",t.lcZ(5,39,e.scrollIndex$))("nzVirtualForTrackBy",e.trackByIndex)("nzScroll",t.DdM(44,Lt))("nzFrontPagination",!1)("nzShowPagination",!1),t.xp6(10),t.Q6J("nzColumnKey",e.sortColumns.Citation)("nzSortFn",!0),t.xp6(3),t.Q6J("nzTwotoneColor",t.lcZ(14,41,"Comment")),t.xp6(2),t.Q6J("nzColumnKey",e.sortColumns.Submitter)("nzSortFn",!0),t.xp6(2),t.Q6J("nzColumnKey",e.sortColumns.SourceType)("nzSortFn",!0),t.xp6(2),t.Q6J("nzColumnKey",e.sortColumns.CitationId)("nzSortFn",!0),t.xp6(4),t.Q6J("nzColumnKey",e.sortColumns.DiseaseName)("nzSortFn",!0),t.xp6(2),t.Q6J("nzColumnKey",e.sortColumns.CreatedAt)("nzSortDirections",t.DdM(45,Bt))("nzSortFn",!0),t.xp6(6),t.Q6J("nzDropdownMatchSelectWidth",!1)("ngModel",e.statusInput),t.xp6(5),t.Q6J("inputModel",e.citationInput),t.xp6(3),t.Q6J("ngIf",!e.submitterId),t.xp6(2),t.Q6J("ngModel",e.sourceTypeInput),t.xp6(4),t.Q6J("inputModel",e.citationIdInput),t.xp6(2),t.Q6J("inputModel",e.molecularProfileNameInput),t.xp6(2),t.Q6J("inputModel",e.diseaseNameInput)}}function Kt(o,a){if(1&o&&t._UZ(0,"cvc-update-source-suggestion-form",65),2&o){const e=t.oxw(2);t.Q6J("currentStatus",e.selectedStatus)("sourceSuggestionId",e.selectedSourceId)}}function Wt(o,a){if(1&o&&t.YNc(0,Kt,1,2,"cvc-update-source-suggestion-form",64),2&o){const e=t.oxw();t.Q6J("ngIf",e.selectedSourceId&&e.selectedStatus)}}function Yt(o,a){}function Vt(o,a){if(1&o&&(t.ynx(0),t.YNc(1,Yt,0,0,"ng-template",7),t.BQk()),2&o){const e=t.oxw(2);t.xp6(1),t.Q6J("ngTemplateOutlet",e.cvcTitleTemplate)}}function wt(o,a){if(1&o&&(t.ynx(0),t._uU(1),t.BQk()),2&o){const e=t.oxw(2);t.xp6(1),t.hij(" ",e.cvcTitle," ")}}function Ht(o,a){if(1&o&&(t._UZ(0,"i",66),t.ALo(1,"entityColor"),t.YNc(2,Vt,2,1,"ng-container",46),t.YNc(3,wt,2,1,"ng-container",46),t.TgZ(4,"span",67),t._UZ(5,"cvc-table-counts",68),t.qZA()),2&o){const e=t.oxw();t.Q6J("nzTwotoneColor",t.lcZ(1,4,"Source")),t.xp6(2),t.Q6J("ngIf",e.cvcTitleTemplate),t.xp6(1),t.Q6J("ngIf",e.cvcTitle),t.xp6(2),t.Q6J("cvcTableCountsConnection",e.connection$)}}function jt(o,a){1&o&&(t.TgZ(0,"nz-tag",71),t._UZ(1,"i",72),t.TgZ(2,"span"),t._uU(3,"Loading\u2026"),t.qZA()())}function Gt(o,a){if(1&o&&(t.YNc(0,jt,4,0,"nz-tag",69),t.ALo(1,"ngrxPush"),t._UZ(2,"cvc-no-more-rows",70),t.ALo(3,"ngrxPush")),2&o){const e=t.oxw();t.Q6J("ngIf",t.lcZ(1,2,e.moreLoading$)),t.xp6(2),t.Q6J("cvcShowTag",t.lcZ(3,4,e.noMoreRows$))}}let G=((Q=class{set initialUserFilters(a){a&&Object.assign(this,a)}constructor(a,e,c){this.gql=a,this.viewerService=e,this.cdr=c,this.initialPageSize=35,this.isScrolling=!1,this.statusInput=d.F3s.New,this.sortColumns=d.jw9,this.status=d.F3s,this.showManageForm=!1,this.noMoreRows$=new T.X(!1),this.scrollEvent$=new T.X("stop"),this.sortChange$=new p.x,this.filterChange$=new p.x,this.scrollIndex$=new p.x,this.viewerService.viewer$.pipe((0,S.U)(r=>r.signedIn),(0,i.t)(this)).subscribe(r=>this.isSignedIn=r)}ngOnInit(){this.queryRef=this.gql.watch({first:this.initialPageSize,sourceId:this.sourceId,submitterId:this.submitterId,status:this.status.New,sortBy:{column:this.sortColumns.CreatedAt,direction:d.SrV.Desc}}),this.result$=this.queryRef.valueChanges,this.initialLoading$=this.result$.pipe((0,m.j)("loading"),(0,v.x)(),(0,h.o)(a=>!1!==a,!0)),this.moreLoading$=this.result$.pipe((0,m.j)("loading"),(0,v.x)(),(0,M.T)(2)),this.connection$=this.result$.pipe((0,m.j)("data","sourceSuggestions"),(0,u.h)(C.ep)),this.row$=this.connection$.pipe((0,m.j)("edges"),(0,u.h)(C.ep),(0,S.U)(a=>a.map(e=>e.node))),this.pageInfo$=this.connection$.pipe((0,m.j)("pageInfo"),(0,u.h)(C.ep)),this.sortChange$.pipe((0,i.t)(this)).subscribe(a=>{this.queryRef.refetch({sortBy:(0,z._)(a)})}),this.filterChange$.pipe((0,l.b)(500),(0,i.t)(this)).subscribe(()=>{this.refresh()}),this.scrollEvent$.pipe((0,S.U)(a=>"stop"!==a),(0,v.x)(),(0,i.t)(this)).subscribe(a=>{this.isScrolling=a,this.cdr.detectChanges()}),this.scrollEvent$.pipe((0,u.h)(a=>"bottom"===a),(0,g.M)(this.pageInfo$),(0,S.U)(([a,e])=>e),(0,i.t)(this)).subscribe(a=>{a.hasNextPage||(this.noMoreRows$.next(!0),this.cdr.detectChanges(),setInterval(()=>this.noMoreRows$.next(!1)))})}refresh(){this.queryRef.refetch({citationId:this.citationIdInput?+this.citationIdInput:void 0,sourceType:this.sourceTypeInput?this.sourceTypeInput:void 0,sourceId:this.sourceIdInput?+this.sourceIdInput:void 0,molecularProfileName:this.molecularProfileNameInput,diseaseName:this.diseaseNameInput,comment:this.commentInput,submitter:this.submitterInput,citation:this.citationInput,status:this.statusInput?this.statusInput:void 0}).then(()=>this.scrollIndex$.next(0)),this.cdr.detectChanges()}setFormInputs(a,e){this.selectedSourceId=a,this.selectedStatus=e,this.showManageForm=!0}closePopover(){this.showManageForm=!1}trackByIndex(a,e){return e?.id}}).\u0275fac=function(a){return new(a||Q)(t.Y36(d.WRV),t.Y36(y.a),t.Y36(t.sBO))},Q.\u0275cmp=t.Xpm({type:Q,selectors:[["cvc-source-suggestions-table"]],inputs:{cvcHeight:"cvcHeight",sourceId:"sourceId",submitterId:"submitterId",cvcTitleTemplate:"cvcTitleTemplate",cvcTitle:"cvcTitle",initialPageSize:"initialPageSize",initialUserFilters:"initialUserFilters"},decls:11,vars:2,consts:[[4,"ngIf","ngIfElse"],["setHeightCard",""],["table",""],["manageSuggestionTemplate",""],["titleTemplate",""],["extraTemplate",""],["nzSize","small","cvcAutoHeightCard","","cvcAutoHeightTarget","viewport",3,"nzTitle","nzExtra"],[3,"ngTemplateOutlet"],[1,"card-container",3,"ngStyle"],["cvcAutoHeightCard","","nzSize","small",3,"nzTitle","nzExtra"],["nzSize","small","cvcTableScroll","",3,"nzData","nzLoading","cvcAutoHeightTable","nzVirtualItemSize","cvcTableScrollQueryRef","cvcTableScrollPageInfo","cvcTableScrollToIndex","nzVirtualForTrackBy","nzScroll","nzFrontPagination","nzShowPagination","cvcTableScrollOnScroll"],["virtualTable",""],[3,"nzSortOrderChange"],[1,"col-header-row"],["nzWidth","100px","nzLeft",""],["nzWidth","425px","nzLeft","",3,"nzColumnKey","nzSortFn"],["nzWidth","24px","nzAlign","center","nz-tooltip","","nzTooltipTitle","Submitter Comment"],["nz-icon","","nzTheme","twotone","nzType","civic-comment",3,"nzTwotoneColor"],["nzWidth","200px",3,"nzColumnKey","nzSortFn"],["nzWidth","80px",3,"nzColumnKey","nzSortFn"],["nzWidth","290px"],["nzWidth","90px","nzSortOrder","descend",3,"nzColumnKey","nzSortDirections","nzSortFn"],["nzWidth","70px","nzRight","","nzAlign","center"],[1,"filter-row"],["nzLeft",""],["nzAllowClear","","nzSize","small","nzPlaceHolder","Any",3,"nzDropdownMatchSelectWidth","ngModel","ngModelChange"],["nzValue","NEW","nzLabel","new"],["nzValue","CURATED","nzLabel","curated"],["nzValue","REJECTED","nzLabel","rejected"],[3,"inputModel","inputModelChange"],[3,"inputModel","inputModelChange",4,"ngIf"],["nzAllowClear","","nzSize","small","nzPlaceHolder","Any",3,"ngModel","ngModelChange"],["nzValue","PUBMED","nzLabel","PubMed"],["nzValue","ASCO","nzLabel","ASCO"],["placeholderText","ID",3,"inputModel","inputModelChange"],["placeholderText","Molecular Profile",3,"inputModel","inputModelChange"],["placeholderText","Disease",3,"inputModel","inputModelChange"],["nzRight",""],["nz-virtual-scroll",""],[1,"data-row"],["nzLeft","","nzAlign","center"],[3,"ngSwitch"],[4,"ngSwitchCase"],[3,"source",4,"ngIf"],["nzAlign","center","nz-tooltip","","nzTooltipPlacement","top",3,"nzTooltipTitle"],[3,"user",4,"ngIf"],[4,"ngIf"],[3,"molecularProfile",4,"ngIf"],[3,"disease","truncateLongName",4,"ngIf"],["nzAlign","right"],["nzRight","","nzAlign","center",1,"button-cell"],["nzColor","green",1,"status-tag"],["nzColor","orange",1,"status-tag"],["nzColor","volcano",1,"status-tag"],["nz-icon","","nz-tooltip","","nzType","civic-comment",3,"nzTooltipTitle",4,"ngIf"],["nz-icon","","nz-tooltip","","nzType","civic-comment",3,"nzTooltipTitle"],[3,"source"],[3,"user"],[3,"molecularProfile"],[3,"disease","truncateLongName"],["routerLink","/evidence/add/submit","nz-button","","nzSize","small","nz-tooltip","",3,"queryParams","disabled","nzTooltipTitle","nzTooltipMouseEnterDelay"],["nz-icon","","nzType","civic-evidence"],["nz-button","","nzSize","small","nz-popover","","nzPopoverTitle","Manage Source Suggestion","nzPopoverPlacement","left","nzPopoverTrigger","click","nz-tooltip","","nzTooltipPlacement","top",3,"nzTooltipTitle","nzTooltipMouseEnterDelay","nzPopoverContent","click"],["nz-icon","","nzType","civic-source"],[3,"currentStatus","sourceSuggestionId",4,"ngIf"],[3,"currentStatus","sourceSuggestionId"],["nz-icon","","nzTheme","twotone","nzType","civic-source",3,"nzTwotoneColor"],[1,"table-info"],[3,"cvcTableCountsConnection"],["nzColor","processing",4,"ngIf"],[3,"cvcShowTag"],["nzColor","processing"],["nz-icon","","nzType","sync","nzSpin",""]],template:function(a,e){if(1&a&&(t.YNc(0,ht,3,3,"ng-container",0),t.YNc(1,xt,3,6,"ng-template",null,1,t.W1O),t.YNc(3,Rt,54,46,"ng-template",null,2,t.W1O),t.YNc(5,Wt,1,1,"ng-template",null,3,t.W1O),t.YNc(7,Ht,6,6,"ng-template",null,4,t.W1O),t.YNc(9,Gt,4,6,"ng-template",null,5,t.W1O)),2&a){const c=t.MAs(2);t.Q6J("ngIf",!e.cvcHeight)("ngIfElse",c)}},dependencies:[I.O5,I.tP,I.PC,I.RF,I.n9,Z.JJ,Z.On,L.rH,E.ix,E.fY,N.w,D.dQ,$.bd,B.Ls,F.lU,U.Ip,U.Vq,P.N8,P.qD,P.Uo,P._C,P.Om,P.p0,P.$Z,P.zu,P.qn,P.UX,J.j,R.SY,K.y,W.B,Y.H,V.D,w.q,H.p,j.n,x.T,mt,_t.I,vt.p,I.i8,I.uU,Ct.fM,zt.a],styles:["[_nghost-%COMP%]{display:block}nz-card[_ngcontent-%COMP%]:first-of-type     .ant-card-body{padding:0;margin-top:1px}.table-info[_ngcontent-%COMP%]{margin-left:.5rem}tr.col-header-row[_ngcontent-%COMP%]   th.ant-table-cell[_ngcontent-%COMP%]{white-space:nowrap}tr.col-header-row[_ngcontent-%COMP%]   th.ant-table-cell.align-right[_ngcontent-%COMP%]     .ant-table-column-title{text-align:right}tr.filter-row[_ngcontent-%COMP%]   th.ant-table-cell[_ngcontent-%COMP%]{padding:3px 4px}tr.filter-row[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   nz-filter-trigger[_ngcontent-%COMP%]     span.ant-dropdown-trigger{margin-left:0;padding-right:12px}tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell[_ngcontent-%COMP%]{white-space:nowrap}tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell[_ngcontent-%COMP%]   .anticon.attribute-icon[_ngcontent-%COMP%]{color:#595959}tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell.overflow-ellipsis[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis}tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell.button-cell[_ngcontent-%COMP%]{padding:0}tr.data-row[_ngcontent-%COMP%]   td.align-right[_ngcontent-%COMP%], tr.col-header-row[_ngcontent-%COMP%]   th.ant-table-cell[_ngcontent-%COMP%]   .align-right[_ngcontent-%COMP%], tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell[_ngcontent-%COMP%]   .align-right[_ngcontent-%COMP%], tr.filter-row[_ngcontent-%COMP%]   th.ant-table-cell[_ngcontent-%COMP%]   .align-right[_ngcontent-%COMP%]{text-align:right}.status-tag[_ngcontent-%COMP%]{display:block}"],changeDetection:0}),Q);G=(0,_.gn)([(0,i.c)()],G)},5843:(A,f,n)=>{n.d(f,{W:()=>j});var _=n(6814),z=n(6223),d=n(4190),i=n(3396),T=n(8527),p=n(7856),C=n(9154),S=n(2989),v=n(8641),h=n(3235),M=n(2524),u=n(9175),l=n(4742),g=n(9312),m=n(3394),t=n(5545),y=n(2962),I=n(3599),Z=n(6294),L=n(845),E=n(2840),N=n(9382),D=n(2669),$=n(3903),B=n(824),F=n(9691),U=n(3378),P=n(2574),J=n(5879);let R=(()=>{class x{}return x.\u0275fac=function(b){return new(b||x)},x.\u0275mod=J.oAB({type:x}),x.\u0275inj=J.cJS({imports:[_.ez,z.UX,E.sL,y.vh,N.we,I.U5,D.j,$.L,B.o7,F.LV,P.zf,z.u5,t.X0,m.B,Z.A,L.R,U.w]}),x})();var K=n(551),W=n(7417),Y=n(3740),V=n(5695),w=n(6109),H=n(2392);let j=(()=>{class x{}return x.\u0275fac=function(b){return new(b||x)},x.\u0275mod=J.oAB({type:x}),x.\u0275inj=J.cJS({imports:[_.ez,z.u5,d.Bz,E.sL,y.vh,K.PV,W.$6,F.LV,Y.HQ,V.X,w.cg,H.ZJ,g.w,S.T,C.y,u.n,l.c,p.k,i.Q,m.B,M.s,v.s,R,h.W,T.u]}),x})()},3641:(A,f,n)=>{n.d(f,{G:()=>m});var _=n(6814),z=n(4190),d=n(7417),i=n(5695),T=n(551),p=n(366),C=n(8641),S=n(7528),v=n(2524),h=n(2962),M=n(8125),u=n(5879);let l=(()=>{class t{}return t.\u0275fac=function(I){return new(I||t)},t.\u0275mod=u.oAB({type:t}),t.\u0275inj=u.cJS({imports:[_.ez,h.vh,M.q6,T.PV,C.s,S.Q,p.$,v.s]}),t})();var g=n(3146);let m=(()=>{class t{}return t.\u0275fac=function(I){return new(I||t)},t.\u0275mod=u.oAB({type:t}),t.\u0275inj=u.cJS({imports:[_.ez,z.Bz,d.$6,i.X,T.PV,l,v.s,g.C]}),t})()},3717:(A,f,n)=>{n.d(f,{M:()=>u});var _=n(6814),z=n(4190),d=n(5695),i=n(2962),T=n(6067),p=n(8125),C=n(551),S=n(2524),v=n(5879);let h=(()=>{class l{}return l.\u0275fac=function(m){return new(m||l)},l.\u0275mod=v.oAB({type:l}),l.\u0275inj=v.cJS({imports:[_.ez,C.PV,i.vh,p.q6,S.s,T.X]}),l})();var M=n(7417);let u=(()=>{class l{}return l.\u0275fac=function(m){return new(m||l)},l.\u0275mod=v.oAB({type:l}),l.\u0275inj=v.cJS({imports:[_.ez,z.Bz,C.PV,d.X,M.$6,h]}),l})()},4010:(A,f,n)=>{n.d(f,{F:()=>d});var z=n(5879);let d=(()=>{class i{transform(p,C="display-string"){return void 0===p?"":"display-string"===C?function _(i){switch(i){case"COMBINATION":return"Combination";case"SEQUENTIAL":return"Sequential";case"SUBSTITUTES":return"Substitutes";default:return i}}(p):`civic-${p.replace(/_/g,"").toLowerCase()}`}}return i.\u0275fac=function(p){return new(p||i)},i.\u0275pipe=z.Yjl({name:"therapyInteractionEnumDisplay",type:i,pure:!0}),i})()}}]);