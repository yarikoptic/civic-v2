"use strict";(self.webpackChunkmain=self.webpackChunkmain||[]).push([[729],{9460:(D,z,n)=>{n.d(z,{i:()=>i});var l=n(6895),p=n(9116),h=n(6672),r=n(6581),t=n(1102),C=n(1698),d=n(9444),m=n(48),x=n(6429),f=n(4650);class i{}i.\u0275fac=function(u){return new(u||i)},i.\u0275mod=f.oAB({type:i}),i.\u0275inj=f.cJS({imports:[l.ez,p.Bz,m.mS,h.X,r.$6,t.PV,C.f,d.s,x.C]})},9476:(D,z,n)=>{n.d(z,{L:()=>v});var l=n(6895),p=n(9116),h=n(6672),r=n(1102),t=n(3679),C=n(4989),d=n(9194),m=n(1971),x=n(2635),f=n(5473),i=n(4650);class s{}s.\u0275fac=function(M){return new(M||s)},s.\u0275mod=i.oAB({type:s}),s.\u0275inj=i.cJS({imports:[l.ez,x._N,x.pP,m.vh,t.Jb,d.q6,C.X,f.H]});var u=n(6581);class v{}v.\u0275fac=function(M){return new(M||v)},v.\u0275mod=i.oAB({type:v}),v.\u0275inj=i.cJS({imports:[l.ez,p.Bz,h.X,r.PV,u.$6,s]})},7946:(D,z,n)=>{n.d(z,{x:()=>s});var l=n(6895),p=n(897),h=n(6672),r=n(6581),t=n(8845),C=n(9476),d=n(1229),m=n(7043),x=n(701),f=n(8645),i=n(4650);class s{}s.\u0275fac=function(v){return new(v||s)},s.\u0275mod=i.oAB({type:s}),s.\u0275inj=i.cJS({imports:[l.ez,h.X,r.$6,p.$,x.N,t.Q,C.L,d.U,m.Q,f.M]})},8645:(D,z,n)=>{n.d(z,{M:()=>u});var l=n(6895),p=n(9116),h=n(6672),r=n(1971),t=n(4989),C=n(9194),d=n(2635),m=n(1102),x=n(9444),f=n(4650);class i{}i.\u0275fac=function(T){return new(T||i)},i.\u0275mod=f.oAB({type:i}),i.\u0275inj=f.cJS({imports:[l.ez,d._N,d.pP,m.PV,r.vh,C.q6,x.s,t.X]});var s=n(6581);class u{}u.\u0275fac=function(T){return new(T||u)},u.\u0275mod=f.oAB({type:u}),u.\u0275inj=f.cJS({imports:[l.ez,p.Bz,m.PV,h.X,s.$6,i]})},4475:(D,z,n)=>{n.d(z,{F:()=>h});var p=n(4650);class h{transform(t,C="display-string"){return void 0===t?"":"display-string"===C?function l(r){switch(r){case"COMBINATION":return"Combination";case"SEQUENTIAL":return"Sequential";case"SUBSTITUTES":return"Substitutes";default:return r}}(t):`civic-${t.replace(/_/g,"").toLowerCase()}`}}h.\u0275fac=function(t){return new(t||h)},h.\u0275pipe=p.Yjl({name:"therapyInteractionEnumDisplay",type:h,pure:!0})},1838:(D,z,n)=>{n.r(z),n.d(z,{ClinicalTrialsModule:()=>Z});var l=n(6895),p=n(9116),h=n(8675),r=n(6579),t=n(4650),C=n(7630),d=n(5655),m=n(1102),x=n(6550),f=n(8992),i=n(2635),s=n(160);function u(o,e){if(1&o&&(t.TgZ(0,"cvc-link-tag",5),t._uU(1),t.qZA()),2&o){const a=t.oxw().ngIf;t.Q6J("href",a.url),t.xp6(1),t.hij(" ",a.nctId," ")}}function v(o,e){if(1&o&&(t.ynx(0),t._UZ(1,"cvc-section-navigation",1),t.TgZ(2,"nz-page-header",2)(3,"nz-page-header-title"),t._UZ(4,"i",3),t.ALo(5,"entityColor"),t._uU(6),t.qZA(),t.TgZ(7,"nz-page-header-extra"),t.YNc(8,u,2,2,"cvc-link-tag",4),t.qZA(),t.TgZ(9,"nz-page-header-content"),t._UZ(10,"router-outlet"),t.qZA()(),t.BQk()),2&o){const a=e.ngIf;t.xp6(1),t.Q6J("displayName",a.nctId),t.xp6(3),t.Q6J("nzTwotoneColor",t.lcZ(5,4,"ClinicalTrial")),t.xp6(2),t.hij(" ",a.nctId," "),t.xp6(2),t.Q6J("ngIf",a.url)}}class T{constructor(e,a){this.route=e,this.gql=a,this.routeSub=this.route.params.subscribe(g=>{this.clinicalTrialId=+g.clinicalTrialId,this.queryRef=this.gql.watch({clinicalTrialId:this.clinicalTrialId});let c=this.queryRef.valueChanges;this.loading$=c.pipe((0,r.j)("loading"),(0,h.O)(!0)),this.clinicalTrial$=c.pipe((0,r.j)("data","clinicalTrial"))})}ngOnDestroy(){this.routeSub.unsubscribe()}}T.\u0275fac=function(e){return new(e||T)(t.Y36(p.gz),t.Y36(C.cMj))},T.\u0275cmp=t.Xpm({type:T,selectors:[["cvc-clinical-trials-detail"]],decls:2,vars:3,consts:[[4,"ngIf"],[3,"displayName"],[1,"site-page-header"],["nz-icon","","nzTheme","twotone","nzType","civic-clinicaltrial",3,"nzTwotoneColor"],["tooltip","View on clinicaltrials.gov",3,"href",4,"ngIf"],["tooltip","View on clinicaltrials.gov",3,"href"]],template:function(e,a){1&e&&(t.YNc(0,v,11,6,"ng-container",0),t.ALo(1,"ngrxPush")),2&e&&t.Q6J("ngIf",t.lcZ(1,1,a.clinicalTrial$))},dependencies:[l.O5,p.lC,d.$O,d.u9,d.u5,d.Jp,m.Ls,x.l,f.I,i.fM,s.a],styles:["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]     nz-page-header:first-of-type{background-color:#fff;border-radius:8px}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content{flex-wrap:nowrap;background-color:#f0f0f0;border-top-left-radius:8px;border-top-right-radius:8px;margin:-12px -16px 16px;border-bottom:1px solid #bfbfbf}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-icon{padding:12px 0 12px 12px}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-icon i{width:100%}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-icon i   svg{width:100%;height:100%}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-description{padding:12px}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-description h2{color:#262626;margin:-8px 0 0;font-weight:500}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-description p{color:#262626;margin:-2px 0 0;padding:0;font-size:95%;line-height:1.5em}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-links{text-align:right;padding:12px}[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card{width:100%}[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card .card-grid-cell{width:50%}[_nghost-%COMP%]     nz-page-header:first-of-type nz-page-header-title.flagged{padding-left:.75em}[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-content{padding-top:0;padding-bottom:12px}[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-heading-extra nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs{margin:0 -16px 12px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap{padding-left:16px;padding-right:16px;line-height:24px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab{padding:1px 8px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab .anticon{margin-right:0}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-extra-content{margin-right:16px}"]});var O,M=n(3679),Q=n(6616),Y=n(7044),F=n(8823),R=n(6903),nt=n(655),et=n(3154),U=n(9933),V=n(1135),N=n(7579),J=n(3240),K=n(1884),at=n(2529),ot=n(5684),P=n(9300),j=n(4004),it=n(8372),lt=n(1365),X=n(1971),_=n(6675),G=n(6672),q=n(7570),rt=n(5851),ct=n(7451),st=n(2166),gt=n(4049),pt=n(3388),dt=n(3667),ht=n(9947);function mt(o,e){}function Ct(o,e){if(1&o&&(t.ynx(0),t.TgZ(1,"nz-card",5),t.YNc(2,mt,0,0,"ng-template",6),t.qZA(),t.BQk()),2&o){t.oxw();const a=t.MAs(6),g=t.MAs(8),c=t.MAs(4);t.xp6(1),t.Q6J("nzTitle",a)("nzExtra",g),t.xp6(1),t.Q6J("ngTemplateOutlet",c)}}function ft(o,e){}const ut=function(o){return{height:o}};function vt(o,e){if(1&o&&(t.TgZ(0,"div",7)(1,"nz-card",8),t.YNc(2,ft,0,0,"ng-template",6),t.qZA()()),2&o){const a=t.oxw(),g=t.MAs(6),c=t.MAs(8),y=t.MAs(4);t.Q6J("ngStyle",t.VKq(4,ut,a.cvcHeight)),t.xp6(1),t.Q6J("nzTitle",g)("nzExtra",c),t.xp6(1),t.Q6J("ngTemplateOutlet",y)}}function Tt(o,e){if(1&o&&(t.TgZ(0,"tr",24)(1,"td",20),t._UZ(2,"cvc-clinical-trial-tag",25),t.qZA(),t.TgZ(3,"td",26),t._uU(4),t.qZA(),t.TgZ(5,"td",27),t._uU(6),t.qZA(),t.TgZ(7,"td",27),t._uU(8),t.qZA()()),2&o){const a=e.$implicit,g=t.oxw(2);t.xp6(2),t.Q6J("clinicalTrial",a),t.xp6(1),t.Q6J("nzTooltipTitle",g.isScrolling?"":a.name),t.xp6(1),t.hij(" ",a.name," "),t.xp6(2),t.hij(" ",a.sourceCount," "),t.xp6(2),t.hij(" ",a.evidenceCount," ")}}const zt=function(){return[]},_t=function(){return{x:"680px",y:"800px"}},k=function(){return["descend","ascend",null]};function xt(o,e){if(1&o){const a=t.EpF();t.TgZ(0,"nz-table",9,10),t.NdJ("cvcTableScrollOnScroll",function(c){t.CHM(a);const y=t.oxw();return t.KtG(y.scrollEvent$.next(c))}),t.ALo(2,"ngrxPush"),t.ALo(3,"ngrxPush"),t.ALo(4,"ngrxPush"),t.ALo(5,"ngrxPush"),t.TgZ(6,"thead",11),t.NdJ("nzSortOrderChange",function(c){t.CHM(a);const y=t.oxw();return t.KtG(y.sortChange$.next(c))}),t.TgZ(7,"tr",12)(8,"th",13),t._uU(9," NCT ID "),t.qZA(),t.TgZ(10,"th",14),t._uU(11," Name "),t.qZA(),t.TgZ(12,"th",15),t._UZ(13,"i",16),t._uU(14," Count "),t.qZA(),t.TgZ(15,"th",17),t._UZ(16,"i",18),t._uU(17," Count "),t.qZA()(),t.TgZ(18,"tr",19)(19,"th",20)(20,"cvc-clearable-input-filter",21),t.NdJ("inputModelChange",function(c){t.CHM(a);const y=t.oxw();return t.KtG(y.nctIdFilter=c)})("inputModelChange",function(){t.CHM(a);const c=t.oxw();return t.KtG(c.filterChange$.next())}),t.qZA()(),t.TgZ(21,"th")(22,"cvc-clearable-input-filter",21),t.NdJ("inputModelChange",function(c){t.CHM(a);const y=t.oxw();return t.KtG(y.nameFilter=c)})("inputModelChange",function(){t.CHM(a);const c=t.oxw();return t.KtG(c.filterChange$.next())}),t.qZA()(),t._UZ(23,"th",22)(24,"th",22),t.qZA()(),t.TgZ(25,"tbody"),t.YNc(26,Tt,9,5,"ng-template",23),t.qZA()()}if(2&o){const a=t.oxw();t.Q6J("nzData",t.lcZ(2,23,a.row$)||t.DdM(31,zt))("nzLoading",!t.lcZ(3,25,a.row$))("cvcAutoHeightTable",25)("nzVirtualItemSize",29)("cvcTableScrollQueryRef",a.queryRef)("cvcTableScrollPageInfo",t.lcZ(4,27,a.pageInfo$))("cvcTableScrollToIndex",t.lcZ(5,29,a.scrollIndex$))("nzVirtualForTrackBy",a.trackByIndex)("nzScroll",t.DdM(32,_t))("nzFrontPagination",!1)("nzShowPagination",!1),t.xp6(8),t.Q6J("nzColumnKey",a.sortColumns.NctId)("nzSortFn",!0),t.xp6(2),t.Q6J("nzColumnKey",a.sortColumns.Name)("nzSortFn",!0),t.xp6(2),t.Q6J("nzColumnKey",a.sortColumns.SourceCount)("nzSortFn",!0)("nzSortDirections",t.DdM(33,k)),t.xp6(3),t.Q6J("nzColumnKey",a.sortColumns.EvidenceItemCount)("nzSortFn",!0)("nzSortDirections",t.DdM(34,k)),t.xp6(5),t.Q6J("inputModel",a.nctIdFilter),t.xp6(2),t.Q6J("inputModel",a.nameFilter)}}function Mt(o,e){}function yt(o,e){if(1&o&&(t.ynx(0),t.YNc(1,Mt,0,0,"ng-template",6),t.BQk()),2&o){const a=t.oxw(2);t.xp6(1),t.Q6J("ngTemplateOutlet",a.cvcTitleTemplate)}}function Pt(o,e){if(1&o&&(t.ynx(0),t._uU(1),t.BQk()),2&o){const a=t.oxw(2);t.xp6(1),t.hij(" ",a.cvcTitle," ")}}function Ot(o,e){if(1&o&&(t.YNc(0,yt,2,1,"ng-container",28),t.YNc(1,Pt,2,1,"ng-container",28),t.TgZ(2,"span",29),t._UZ(3,"cvc-table-counts",30),t.qZA()),2&o){const a=t.oxw();t.Q6J("ngIf",a.cvcTitleTemplate),t.xp6(1),t.Q6J("ngIf",a.cvcTitle),t.xp6(2),t.Q6J("cvcTableCountsConnection",a.connection$)}}function It(o,e){1&o&&(t.TgZ(0,"nz-tag",33),t._UZ(1,"i",34),t.TgZ(2,"span"),t._uU(3,"Loading\u2026"),t.qZA()())}function bt(o,e){if(1&o&&(t.YNc(0,It,4,0,"nz-tag",31),t.ALo(1,"ngrxPush"),t._UZ(2,"cvc-no-more-rows",32),t.ALo(3,"ngrxPush")),2&o){const a=t.oxw();t.Q6J("ngIf",t.lcZ(1,2,a.moreLoading$)),t.xp6(2),t.Q6J("cvcShowTag",t.lcZ(3,4,a.noMoreRows$))}}let w=((O=class{set initialUserFilters(e){e&&Object.assign(this,e)}constructor(e,a){this.gql=e,this.cdr=a,this.initialPageSize=35,this.isScrolling=!1,this.sortColumns=C.E8d,this.noMoreRows$=new V.X(!1),this.scrollEvent$=new V.X("stop"),this.sortChange$=new N.x,this.filterChange$=new N.x,this.scrollIndex$=new N.x}ngOnInit(){this.queryRef=this.gql.watch({first:this.initialPageSize}),this.result$=this.queryRef.valueChanges,this.initialLoading$=this.result$.pipe((0,r.j)("loading"),(0,K.x)(),(0,at.o)(e=>!1!==e,!0)),this.moreLoading$=this.result$.pipe((0,r.j)("loading"),(0,K.x)(),(0,ot.T)(2)),this.connection$=this.result$.pipe((0,r.j)("data","clinicalTrials"),(0,P.h)(J.ep)),this.row$=this.connection$.pipe((0,r.j)("edges"),(0,P.h)(J.ep),(0,j.U)(e=>e.map(a=>a.node))),this.pageInfo$=this.connection$.pipe((0,r.j)("pageInfo"),(0,P.h)(J.ep)),this.sortChange$.pipe((0,U.t)(this)).subscribe(e=>{this.queryRef.refetch({sortBy:(0,et._)(e)})}),this.filterChange$.pipe((0,it.b)(500),(0,U.t)(this)).subscribe(()=>{this.refresh()}),this.scrollEvent$.pipe((0,j.U)(e=>"stop"!==e),(0,K.x)(),(0,U.t)(this)).subscribe(e=>{this.isScrolling=e,this.cdr.detectChanges()}),this.scrollEvent$.pipe((0,P.h)(e=>"bottom"===e),(0,lt.M)(this.pageInfo$),(0,j.U)(([e,a])=>a),(0,U.t)(this)).subscribe(e=>{e.hasNextPage||(this.noMoreRows$.next(!0),this.cdr.detectChanges(),setInterval(()=>this.noMoreRows$.next(!1)))})}refresh(){this.queryRef.refetch({name:this.nameFilter,nctId:this.nctIdFilter}).then(()=>this.scrollIndex$.next(0)),this.cdr.detectChanges()}trackByIndex(e,a){return a?.id}}).\u0275fac=function(e){return new(e||O)(t.Y36(C.P_b),t.Y36(t.sBO))},O.\u0275cmp=t.Xpm({type:O,selectors:[["cvc-clinical-trials-table"]],inputs:{cvcHeight:"cvcHeight",cvcTitleTemplate:"cvcTitleTemplate",cvcTitle:"cvcTitle",initialPageSize:"initialPageSize",initialUserFilters:"initialUserFilters"},decls:9,vars:2,consts:[[4,"ngIf","ngIfElse"],["setHeightCard",""],["table",""],["titleTemplate",""],["extraTemplate",""],["nzSize","small","cvcAutoHeightCard","","cvcAutoHeightTarget","viewport",3,"nzTitle","nzExtra"],[3,"ngTemplateOutlet"],[1,"card-container",3,"ngStyle"],["cvcAutoHeightCard","","nzSize","small",3,"nzTitle","nzExtra"],["nzSize","small","cvcTableScroll","",3,"nzData","nzLoading","cvcAutoHeightTable","nzVirtualItemSize","cvcTableScrollQueryRef","cvcTableScrollPageInfo","cvcTableScrollToIndex","nzVirtualForTrackBy","nzScroll","nzFrontPagination","nzShowPagination","cvcTableScrollOnScroll"],["virtualTable",""],[3,"nzSortOrderChange"],[1,"col-header-row"],["nzWidth","150px","nzLeft","",3,"nzColumnKey","nzSortFn"],["nzWidth","600px",3,"nzColumnKey","nzSortFn"],["nzWidth","75px","nzRight","","nzAlign","right","nz-tooltip","","nzTooltipTitle","Source Count",3,"nzColumnKey","nzSortFn","nzSortDirections"],["nz-icon","","nzType","civic-source"],["nzWidth","75px","nzRight","","nzAlign","right","nz-tooltip","","nzTooltipTitle","Evidence Count",3,"nzColumnKey","nzSortFn","nzSortDirections"],["nz-icon","","nzType","civic-evidence"],[1,"filter-row"],["nzLeft",""],[3,"inputModel","inputModelChange"],["nzRight",""],["nz-virtual-scroll",""],[1,"data-row"],[3,"clinicalTrial"],["nz-tooltip","",1,"overflow-ellipsis",3,"nzTooltipTitle"],["nzRight","","nzAlign","right"],[4,"ngIf"],[1,"table-info"],[3,"cvcTableCountsConnection"],["nzColor","processing",4,"ngIf"],[3,"cvcShowTag"],["nzColor","processing"],["nz-icon","","nzType","sync","nzSpin",""]],template:function(e,a){if(1&e&&(t.YNc(0,Ct,3,3,"ng-container",0),t.YNc(1,vt,3,6,"ng-template",null,1,t.W1O),t.YNc(3,xt,27,35,"ng-template",null,2,t.W1O),t.YNc(5,Ot,4,3,"ng-template",null,3,t.W1O),t.YNc(7,bt,4,6,"ng-template",null,4,t.W1O)),2&e){const g=t.MAs(2);t.Q6J("ngIf",!a.cvcHeight)("ngIfElse",g)}},dependencies:[l.O5,l.tP,l.PC,Y.w,X.bd,m.Ls,_.N8,_.qD,_.Uo,_._C,_.Om,_.p0,_.$Z,_.zu,_.qn,_.UX,G.j,q.SY,rt.D,ct.q,st.p,gt.G,pt.H,dt.B,ht.y,i.fM],styles:["nz-card[_ngcontent-%COMP%]:first-of-type     .ant-card-body{padding:0;margin-top:1px}.table-info[_ngcontent-%COMP%]{margin-left:.5rem}tr.col-header-row[_ngcontent-%COMP%]   th.ant-table-cell[_ngcontent-%COMP%]{white-space:nowrap}tr.col-header-row[_ngcontent-%COMP%]   th.ant-table-cell.align-right[_ngcontent-%COMP%]     .ant-table-column-title{text-align:right}tr.filter-row[_ngcontent-%COMP%]   th.ant-table-cell[_ngcontent-%COMP%]{padding:3px 4px}tr.filter-row[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   nz-filter-trigger[_ngcontent-%COMP%]     span.ant-dropdown-trigger{margin-left:0;padding-right:12px}tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell[_ngcontent-%COMP%]{white-space:nowrap}tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell[_ngcontent-%COMP%]   .anticon.attribute-icon[_ngcontent-%COMP%]{color:#595959}tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell.overflow-ellipsis[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis}tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell.button-cell[_ngcontent-%COMP%]{padding:0}tr.data-row[_ngcontent-%COMP%]   td.align-right[_ngcontent-%COMP%], tr.col-header-row[_ngcontent-%COMP%]   th.ant-table-cell[_ngcontent-%COMP%]   .align-right[_ngcontent-%COMP%], tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell[_ngcontent-%COMP%]   .align-right[_ngcontent-%COMP%], tr.filter-row[_ngcontent-%COMP%]   th.ant-table-cell[_ngcontent-%COMP%]   .align-right[_ngcontent-%COMP%]{text-align:right}[_nghost-%COMP%]{display:block}"]}),O);function St(o,e){1&o&&(t.TgZ(0,"a",13),t._UZ(1,"i",14),t._uU(2," View Clinical Trial Docs "),t.qZA())}w=(0,nt.gn)([(0,U.c)()],w);class B{constructor(){}ngOnInit(){}}B.\u0275fac=function(e){return new(e||B)},B.\u0275cmp=t.Xpm({type:B,selectors:[["clinical-trials-home"]],decls:19,vars:5,consts:[[1,"site-page-header"],[1,"header-content"],["nzFlex","64px",1,"header-icon"],["nz-icon","","nzTheme","twotone","nzType","civic-clinicaltrial",3,"nzTwotoneColor"],["nzFlex","0 1 600px",1,"header-description"],["nz-typography","","nzEllipsis","","nzExpandable","",3,"nzEllipsisRows"],["nzFlex","auto",1,"header-links"],["nzDirection","vertical",1,"docs-buttons"],["nz-button","","href","https://civic.readthedocs.io/en/latest/model/evidence/clinical_trial.html","target","_blank","nzSize","small","nzBlock","",4,"nzSpaceItem"],["nz-row",""],["nz-col","",3,"nzSpan"],[1,"content"],["cvcTitle","Browse All Clinical Trials"],["nz-button","","href","https://civic.readthedocs.io/en/latest/model/evidence/clinical_trial.html","target","_blank","nzSize","small","nzBlock",""],["nz-icon","","nzType","link","nzTheme","outline"]],template:function(e,a){1&e&&(t._UZ(0,"cvc-section-navigation"),t.TgZ(1,"nz-page-header",0)(2,"nz-page-header-content")(3,"nz-row",1)(4,"nz-col",2),t._UZ(5,"i",3),t.ALo(6,"entityColor"),t.qZA(),t.TgZ(7,"nz-col",4)(8,"h2"),t._uU(9,"Clinical Trials"),t.qZA(),t.TgZ(10,"p",5),t._uU(11," CIViC automatically associates a Clinical Trial to an Evidence Item if its associated Source's PubMed record provides a clinical trial ID. This ID is not directly curatable. "),t.qZA()(),t.TgZ(12,"nz-col",6)(13,"nz-space",7),t.YNc(14,St,3,0,"a",8),t.qZA()()(),t.TgZ(15,"div",9)(16,"div",10)(17,"div",11),t._UZ(18,"cvc-clinical-trials-table",12),t.qZA()()()()()),2&e&&(t.xp6(5),t.Q6J("nzTwotoneColor",t.lcZ(6,3,"ClinicalTrial")),t.xp6(5),t.Q6J("nzEllipsisRows",2),t.xp6(6),t.Q6J("nzSpan",24))},dependencies:[M.t3,M.SK,d.$O,d.u5,m.Ls,Q.ix,Y.w,F.ZU,R.NU,R.$1,w,f.I,s.a],styles:["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]     nz-page-header:first-of-type{background-color:#fff;border-radius:8px}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content{flex-wrap:nowrap;background-color:#f0f0f0;border-top-left-radius:8px;border-top-right-radius:8px;margin:-12px -16px 16px;border-bottom:1px solid #bfbfbf}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-icon{padding:12px 0 12px 12px}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-icon i{width:100%}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-icon i   svg{width:100%;height:100%}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-description{padding:12px}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-description h2{color:#262626;margin:-8px 0 0;font-weight:500}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-description p{color:#262626;margin:-2px 0 0;padding:0;font-size:95%;line-height:1.5em}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-links{text-align:right;padding:12px}[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card{width:100%}[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card .card-grid-cell{width:50%}[_nghost-%COMP%]     nz-page-header:first-of-type nz-page-header-title.flagged{padding-left:.75em}[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-content{padding-top:0;padding-bottom:12px}[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-heading-extra nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs{margin:0 -16px 12px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap{padding-left:16px;padding-right:16px;line-height:24px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab{padding:1px 8px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab .anticon{margin-right:0}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-extra-content{margin-right:16px}"]});var W=n(9194),Et=n(3392),At=n(3575);const Zt=function(){return[8,16]};function Dt(o,e){if(1&o&&(t.ynx(0),t.TgZ(1,"nz-row",1)(2,"nz-col",2)(3,"nz-descriptions",3)(4,"nz-descriptions-item",4),t._uU(5),t.qZA()()(),t.TgZ(6,"nz-col",2),t._UZ(7,"cvc-sources-table",5),t.qZA(),t.TgZ(8,"nz-col",2),t._UZ(9,"cvc-evidence-table",6),t.qZA()(),t.BQk()),2&o){const a=e.ngIf,g=t.oxw();t.xp6(1),t.Q6J("nzGutter",t.DdM(11,Zt)),t.xp6(1),t.Q6J("nzSpan",24),t.xp6(1),t.Q6J("nzBordered",!0),t.xp6(2),t.hij(" ",a.description," "),t.xp6(1),t.Q6J("nzSpan",24),t.xp6(1),t.MGl("cvcTitle","",a.nctId," Sources"),t.Q6J("clinicalTrialId",g.clinicalTrialId)("cvcHeight",400),t.xp6(1),t.Q6J("nzSpan",24),t.xp6(1),t.MGl("cvcTitle","",a.nctId," Evidence"),t.Q6J("clinicalTrialId",g.clinicalTrialId)}}class ${constructor(e,a){this.route=e,this.gql=a,this.routeSub=this.route.params.subscribe(g=>{this.clinicalTrialId=+g.clinicalTrialId,this.queryRef=this.gql.watch({clinicalTrialId:this.clinicalTrialId});let c=this.queryRef.valueChanges;this.loading$=c.pipe((0,r.j)("loading"),(0,P.h)(J.ep)),this.clinicalTrial$=c.pipe((0,r.j)("data","clinicalTrial"),(0,P.h)(J.ep))})}ngOnDestroy(){this.routeSub.unsubscribe()}}$.\u0275fac=function(e){return new(e||$)(t.Y36(p.gz),t.Y36(C.z8D))},$.\u0275cmp=t.Xpm({type:$,selectors:[["cvc-clinical-trials-summary"]],decls:2,vars:3,consts:[[4,"ngIf"],[3,"nzGutter"],[3,"nzSpan"],["nzLayout","vertical","nzSize","small",3,"nzBordered"],["nzTitle","Description"],[3,"clinicalTrialId","cvcTitle","cvcHeight"],[3,"clinicalTrialId","cvcTitle"]],template:function(e,a){1&e&&(t.YNc(0,Dt,10,12,"ng-container",0),t.ALo(1,"ngrxPush")),2&e&&t.Q6J("ngIf",t.lcZ(1,1,a.clinicalTrial$))},dependencies:[l.O5,W.R7,W.uj,M.t3,M.SK,Et.a,At.d,i.fM],styles:["[_nghost-%COMP%]     nz-descriptions .ant-descriptions-item-label{font-weight:500}[_nghost-%COMP%]     nz-descriptions .ant-descriptions-header{margin-top:4px;margin-bottom:4px;padding-left:8px}[_nghost-%COMP%]     nz-descriptions .ant-descriptions-title{font-weight:500;color:#00000073;font-size:12px}[_nghost-%COMP%]     nz-descriptions .ant-descriptions-item-content p:last-of-type{margin-bottom:0}[_nghost-%COMP%]{display:block}"],changeDetection:0});class L{constructor(){}ngOnInit(){}}L.\u0275fac=function(e){return new(e||L)},L.\u0275cmp=t.Xpm({type:L,selectors:[["cvc-clinical-trials"]],decls:1,vars:0,template:function(e,a){1&e&&t._UZ(0,"router-outlet")},dependencies:[p.lC],encapsulation:2});const Ut=[{path:"",component:L,children:[{path:"",redirectTo:"home",pathMatch:"full"},{path:"home",component:B,data:{breadcrumb:"Home"}},{path:":clinicalTrialId",component:T,data:{breadcrumb:"DISPLAYNAME"},children:[{path:"",redirectTo:"summary",pathMatch:"full"},{path:"summary",component:$,data:{breadcrumb:"Summary"}}]}]}];class I{}I.\u0275fac=function(e){return new(e||I)},I.\u0275mod=t.oAB({type:I}),I.\u0275inj=t.cJS({imports:[p.Bz.forChild(Ut),p.Bz]});var Jt=n(4125),Bt=n(2994),$t=n(8525),H=n(9444),Lt=n(3111),Qt=n(1433),Ft=n(9240),Rt=n(5453);class b{}b.\u0275fac=function(e){return new(e||b)},b.\u0275mod=t.oAB({type:b}),b.\u0275inj=t.cJS({imports:[l.ez,i._N,i.pP,Q.sL,X.vh,m.PV,_.HQ,G.X,q.cg,F.ZJ,H.s,Lt.n,Qt.c,Jt.k,Rt.N,Bt.y,$t.T,Ft.w]});var tt=n(5630);class S{}S.\u0275fac=function(e){return new(e||S)},S.\u0275mod=t.oAB({type:S}),S.\u0275inj=t.cJS({imports:[l.ez,i._N,i.pP,M.Jb,d.KJ,m.PV,Q.sL,F.ZJ,R.zf,b,tt.D,H.s]});var Nt=n(4989);class E{}E.\u0275fac=function(e){return new(e||E)},E.\u0275mod=t.oAB({type:E}),E.\u0275inj=t.cJS({imports:[l.ez,p.Bz,i._N,i.pP,d.KJ,m.PV,Nt.X,tt.D,H.s]});var Kt=n(767),jt=n(7279);class A{}A.\u0275fac=function(e){return new(e||A)},A.\u0275mod=t.oAB({type:A}),A.\u0275inj=t.cJS({imports:[l.ez,i._N,i.pP,W.q6,M.Jb,Kt.Q,jt.h]});class Z{}Z.\u0275fac=function(e){return new(e||Z)},Z.\u0275mod=t.oAB({type:Z}),Z.\u0275inj=t.cJS({imports:[l.ez,I,S,E,A]})}}]);