"use strict";(self.webpackChunkmain=self.webpackChunkmain||[]).push([[4702],{4805:(U,v,r)=>{r.d(v,{_:()=>n});var l=r(5e3),C=r(7484);const T=["*"];let n=(()=>{class g{constructor(){this.cvcTitle=void 0}ngOnInit(){}}return g.\u0275fac=function(f){return new(f||g)},g.\u0275cmp=l.Xpm({type:g,selectors:[["cvc-entity-table-card"]],inputs:{cvcTitle:"cvcTitle"},ngContentSelectors:T,decls:3,vars:1,consts:[[3,"nzTitle"],[1,"card-content"]],template:function(f,e){1&f&&(l.F$t(),l.TgZ(0,"nz-card",0),l.TgZ(1,"div",1),l.Hsn(2),l.qZA(),l.qZA()),2&f&&l.Q6J("nzTitle",e.cvcTitle)},directives:[C.bd],styles:["[_nghost-%COMP%]{display:block}.card-content[_ngcontent-%COMP%]{margin:-11px -12px -13px}"]}),g})()},3575:(U,v,r)=>{r.d(v,{d:()=>I});var l=r(712),C=r(3154),T=r(8929),n=r(4850),g=r(373),h=r(1059),f=r(13),e=r(5e3),d=r(592),Z=r(8054),S=r(4182),A=r(2166),b=r(9808),M=r(6906),z=r(6949);function x(u,m){if(1&u&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&u){const i=m.$implicit,a=m.last;e.xp6(1),e.AsE(" ",i,"",a?"":", "," ")}}function O(u,m){if(1&u&&(e.TgZ(0,"tr"),e.TgZ(1,"td"),e._UZ(2,"cvc-source-tag",17),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td"),e.TgZ(10,"p",18),e.YNc(11,x,2,2,"span",16),e.qZA(),e.qZA(),e.TgZ(12,"td"),e._uU(13),e.qZA(),e.TgZ(14,"td"),e._uU(15),e.qZA(),e.TgZ(16,"td",19),e._uU(17),e.qZA(),e.qZA()),2&u){const i=m.$implicit;e.xp6(2),e.Q6J("source",i),e.xp6(2),e.hij(" ",i.displayType," "),e.xp6(2),e.hij(" ",i.citationId," "),e.xp6(2),e.hij(" ",i.name," "),e.xp6(3),e.Q6J("ngForOf",i.authors),e.xp6(2),e.hij(" ",i.publicationYear," "),e.xp6(2),e.hij(" ",i.journal," "),e.xp6(2),e.Oqu(i.evidenceItemCount)}}let I=(()=>{class u{constructor(i){this.gql=i,this.debouncedQuery=new T.xQ,this.pageSize=25,this.sortColumns=l.kQl}ngOnInit(){this.queryRef=this.gql.watch({first:this.pageSize,clinicalTrialId:this.clinicalTrialId}),this.data$=this.queryRef.valueChanges.pipe((0,n.U)(i=>({data:i.data,loading:i.loading,networkStatus:i.networkStatus}))),this.isLoading$=this.data$.pipe((0,g.j)("loading"),(0,h.O)(!0)),this.sources$=this.data$.pipe((0,g.j)("data","browseSources","edges"),(0,n.U)(i=>i.map(a=>a.node))),this.pageInfo$=this.data$.pipe((0,g.j)("data","browseSources","pageInfo")),this.debouncedQuery.pipe((0,f.b)(500)).subscribe(i=>this.refresh()),this.textInputCallback=()=>{this.debouncedQuery.next()}}refresh(){var i;null===(i=this.queryRef)||void 0===i||i.refetch({citationId:this.citationIdInput?+this.citationIdInput:void 0,author:this.authorInput,year:this.yearInput?+this.yearInput:void 0,journal:this.journalInput,name:this.nameInput,sourceType:this.sourceTypeInput})}onSortChanged(i){var a;null===(a=this.queryRef)||void 0===a||a.refetch({sortBy:(0,C._)(i)})}onModelChanged(){this.debouncedQuery.next()}ngOnDestroy(){this.debouncedQuery.unsubscribe()}loadMore(i){var a;null===(a=this.queryRef)||void 0===a||a.fetchMore({variables:{first:this.pageSize,after:i}})}}return u.\u0275fac=function(i){return new(i||u)(e.Y36(l.IZ6))},u.\u0275cmp=e.Xpm({type:u,selectors:[["cvc-sources-table"]],inputs:{clinicalTrialId:"clinicalTrialId"},decls:41,vars:34,consts:[[3,"nzData","nzLoading","nzFrontPagination","nzShowPagination"],["sourcesTable",""],[3,"nzSortOrderChange"],["nzWidth","15%"],[3,"nzColumnKey","nzSortFn"],["nzWidth","25%",3,"nzColumnKey","nzSortFn"],["nzRight","",3,"nzColumnKey","nzSortFn"],["nz-icon","","nzType","civic:evidence","nz-tooltip","","nzTooltipTitle","Evidence Count"],["nzAllowClear","","nzPlaceHolder","Choose",3,"ngModel","ngModelChange"],["nzValue","PUBMED","nzLabel","PubMed"],["nzValue","ASCO","nzLabel","ASCO"],["placeholderText","ID",3,"inputModel","onInputChanged","inputModelChange"],["placeholderText","Name",3,"inputModel","onInputChanged","inputModelChange"],["placeholderText","Authors",3,"inputModel","onInputChanged","inputModelChange"],["placeholderText","Year",3,"inputModel","onInputChanged","inputModelChange"],["placeholderText","Journal",3,"inputModel","onInputChanged","inputModelChange"],[4,"ngFor","ngForOf"],[3,"source"],["nz-typography",""],["nzRight",""]],template:function(i,a){if(1&i&&(e.TgZ(0,"nz-table",0,1),e.ALo(2,"ngrxPush"),e.ALo(3,"ngrxPush"),e.TgZ(4,"thead",2),e.NdJ("nzSortOrderChange",function(p){return a.onSortChanged(p)}),e.TgZ(5,"tr"),e.TgZ(6,"th",3),e._uU(7," Citation "),e.qZA(),e.TgZ(8,"th",4),e._uU(9," Source Type "),e.qZA(),e.TgZ(10,"th",4),e._uU(11," ID "),e.qZA(),e.TgZ(12,"th",5),e._uU(13," Name "),e.qZA(),e.TgZ(14,"th",4),e._uU(15," Authors "),e.qZA(),e.TgZ(16,"th",4),e._uU(17," Year "),e.qZA(),e.TgZ(18,"th",4),e._uU(19," Journal "),e.qZA(),e.TgZ(20,"th",6),e._UZ(21,"i",7),e.qZA(),e.qZA(),e.TgZ(22,"tr"),e._UZ(23,"th"),e.TgZ(24,"th"),e.TgZ(25,"nz-select",8),e.NdJ("ngModelChange",function(){return a.onModelChanged()})("ngModelChange",function(p){return a.sourceTypeInput=p}),e._UZ(26,"nz-option",9),e._UZ(27,"nz-option",10),e.qZA(),e.qZA(),e.TgZ(28,"th"),e.TgZ(29,"cvc-clearable-input-filter",11),e.NdJ("inputModelChange",function(p){return a.citationIdInput=p}),e.qZA(),e.qZA(),e.TgZ(30,"th"),e.TgZ(31,"cvc-clearable-input-filter",12),e.NdJ("inputModelChange",function(p){return a.nameInput=p}),e.qZA(),e.qZA(),e.TgZ(32,"th"),e.TgZ(33,"cvc-clearable-input-filter",13),e.NdJ("inputModelChange",function(p){return a.authorInput=p}),e.qZA(),e.qZA(),e.TgZ(34,"th"),e.TgZ(35,"cvc-clearable-input-filter",14),e.NdJ("inputModelChange",function(p){return a.yearInput=p}),e.qZA(),e.qZA(),e.TgZ(36,"th"),e.TgZ(37,"cvc-clearable-input-filter",15),e.NdJ("inputModelChange",function(p){return a.journalInput=p}),e.qZA(),e.qZA(),e._UZ(38,"th"),e.qZA(),e.qZA(),e.TgZ(39,"tbody"),e.YNc(40,O,18,8,"tr",16),e.qZA(),e.qZA()),2&i){const _=e.MAs(1);e.Q6J("nzData",e.lcZ(2,30,a.sources$))("nzLoading",e.lcZ(3,32,a.isLoading$))("nzFrontPagination",!1)("nzShowPagination",!1),e.xp6(8),e.Q6J("nzColumnKey",a.sortColumns.SourceType)("nzSortFn",!0),e.xp6(2),e.Q6J("nzColumnKey",a.sortColumns.CitationId)("nzSortFn",!0),e.xp6(2),e.Q6J("nzColumnKey",a.sortColumns.Name)("nzSortFn",!0),e.xp6(2),e.Q6J("nzColumnKey",a.sortColumns.Authors)("nzSortFn",!0),e.xp6(2),e.Q6J("nzColumnKey",a.sortColumns.Year)("nzSortFn",!0),e.xp6(2),e.Q6J("nzColumnKey",a.sortColumns.Journal)("nzSortFn",!0),e.xp6(2),e.Q6J("nzColumnKey",a.sortColumns.EvidenceCount)("nzSortFn",!0),e.xp6(5),e.Q6J("ngModel",a.sourceTypeInput),e.xp6(4),e.Q6J("inputModel",a.citationIdInput)("onInputChanged",a.textInputCallback),e.xp6(2),e.Q6J("inputModel",a.nameInput)("onInputChanged",a.textInputCallback),e.xp6(2),e.Q6J("inputModel",a.authorInput)("onInputChanged",a.textInputCallback),e.xp6(2),e.Q6J("inputModel",a.yearInput)("onInputChanged",a.textInputCallback),e.xp6(2),e.Q6J("inputModel",a.journalInput)("onInputChanged",a.textInputCallback),e.xp6(3),e.Q6J("ngForOf",_.data)}},directives:[d.N8,d.Om,d.$Z,d.Uo,d._C,d.qD,d.qn,Z.Vq,S.JJ,S.On,Z.Ip,A.p,d.p0,b.sg,M.T],pipes:[z.fM],styles:["[_nghost-%COMP%]{display:block}"]}),u})()},4702:(U,v,r)=>{r.d(v,{d:()=>B});var l=r(325),C=r(373),T=r(1059),n=r(5e3),g=r(712),h=r(9808),f=r(8992),e=r(1945),d=r(2683),Z=r(647),S=r(6550),A=r(6949);function b(t,c){if(1&t&&(n.ynx(0),n._UZ(1,"cvc-section-navigation",1),n.TgZ(2,"nz-page-header",2),n.TgZ(3,"nz-page-header-title"),n._UZ(4,"i",3),n._uU(5),n.qZA(),n.TgZ(6,"nz-page-header-extra"),n.TgZ(7,"cvc-link-tag",4),n._uU(8),n.qZA(),n.qZA(),n.TgZ(9,"nz-page-header-content"),n.TgZ(10,"div",5),n._UZ(11,"router-outlet"),n.qZA(),n.qZA(),n.qZA(),n.BQk()),2&t){const o=c.ngIf;n.xp6(1),n.Q6J("displayName",o.citation),n.xp6(4),n.hij(" ",o.citation," "),n.xp6(2),n.Q6J("href",o.sourceUrl)("tooltip","View on "+o.displayType),n.xp6(1),n.hij(" ",o.displayType+": "+o.citationId," ")}}let M=(()=>{class t{constructor(o,s){this.route=o,this.gql=s,this.routeSub=this.route.params.subscribe(P=>{this.sourceId=+P.sourceId,this.queryRef=this.gql.watch({sourceId:this.sourceId});let y=this.queryRef.valueChanges;this.loading$=y.pipe((0,C.j)("loading"),(0,T.O)(!0)),this.source$=y.pipe((0,C.j)("data","source"))})}ngOnDestroy(){this.routeSub.unsubscribe()}}return t.\u0275fac=function(o){return new(o||t)(n.Y36(l.gz),n.Y36(g.Bk6))},t.\u0275cmp=n.Xpm({type:t,selectors:[["cvc-sources-detail"]],decls:2,vars:3,consts:[[4,"ngIf"],[3,"displayName"],[1,"site-page-header"],["nz-icon","","nzType","civic:source"],[3,"href","tooltip"],[1,"content"]],template:function(o,s){1&o&&(n.YNc(0,b,12,5,"ng-container",0),n.ALo(1,"ngrxPush")),2&o&&n.Q6J("ngIf",n.lcZ(1,1,s.source$))},directives:[h.O5,f.I,e.$O,e.u9,d.w,Z.Ls,e.Jp,S.l,e.u5,l.lC],pipes:[A.fM],styles:["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]     nz-page-header:first-of-type{background-color:#fff;border-radius:8px}[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card{width:100%}[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card .card-grid-cell{width:50%}[_nghost-%COMP%]     nz-page-header:first-of-type nz-page-header-title.flagged{padding-left:.75em}[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-content{padding-top:0}[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-heading-extra nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs{margin:0 -16px 12px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap{padding-left:16px;padding-right:16px;line-height:24px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab{padding:1px 8px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab .anticon{margin-right:0}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-extra-content{margin-right:16px}"]}),t})();var z=r(1894),x=r(3575);let O=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["sources-home"]],decls:9,vars:1,consts:[[1,"site-page-header"],["nz-icon","","nzType","civic:source"],["nz-row",""],["nz-col","",3,"nzSpan"],[1,"content"]],template:function(o,s){1&o&&(n.TgZ(0,"nz-page-header",0),n.TgZ(1,"nz-page-header-title"),n._UZ(2,"i",1),n._uU(3," Sources "),n.qZA(),n.TgZ(4,"nz-page-header-content"),n.TgZ(5,"div",2),n.TgZ(6,"div",3),n.TgZ(7,"div",4),n._UZ(8,"cvc-sources-table"),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA()),2&o&&(n.xp6(6),n.Q6J("nzSpan",24))},directives:[e.$O,e.u9,Z.Ls,e.u5,z.SK,z.t3,x.d],styles:["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]     nz-page-header:first-of-type{background-color:#fff;border-radius:8px}[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card{width:100%}[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card .card-grid-cell{width:50%}[_nghost-%COMP%]     nz-page-header:first-of-type nz-page-header-title.flagged{padding-left:.75em}[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-content{padding-top:0}[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-heading-extra nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs{margin:0 -16px 12px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap{padding-left:16px;padding-right:16px;line-height:24px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab{padding:1px 8px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab .anticon{margin-right:0}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-extra-content{margin-right:16px}"]}),t})();var I=r(8144),u=r(4049),m=r(4805),i=r(8965),a=r(8134);function _(t,c){if(1&t&&(n.TgZ(0,"h2"),n._uU(1),n.qZA()),2&t){const o=n.oxw().ngIf;n.xp6(1),n.Oqu(o.title)}}function p(t,c){if(1&t&&(n.TgZ(0,"span"),n._uU(1),n.qZA()),2&t){const o=n.oxw(2).ngIf;n.xp6(1),n.hij(" ",o.pmcId," ")}}function q(t,c){1&t&&n._uU(0," - ")}function E(t,c){1&t&&(n.TgZ(0,"b"),n._uU(1,"Clinical Trial:\xa0"),n.qZA(),n.TgZ(2,"i"),n._uU(3,"-"),n.qZA())}function D(t,c){1&t&&(n.TgZ(0,"b"),n._uU(1,"Clinical Trial:\xa0"),n.qZA())}function J(t,c){1&t&&(n.TgZ(0,"b"),n._uU(1,"Clinical Trials:\xa0"),n.qZA())}function Q(t,c){if(1&t&&(n.ynx(0),n._UZ(1,"cvc-clinical-trial-tag",18),n.BQk()),2&t){const o=c.$implicit;n.xp6(1),n.Q6J("clinicalTrial",o)}}function L(t,c){if(1&t&&(n.TgZ(0,"nz-row",13),n.YNc(1,E,4,0,"ng-template",14),n.YNc(2,D,2,0,"ng-template",15),n.YNc(3,J,2,0,"ng-template",16),n.YNc(4,Q,2,1,"ng-container",17),n.qZA()),2&t){const o=n.oxw(2).ngIf;n.Q6J("ngPlural",o.clinicalTrials.length),n.xp6(4),n.Q6J("ngForOf",o.clinicalTrials)}}function N(t,c){if(1&t&&(n.TgZ(0,"div",7),n.TgZ(1,"div",8),n.TgZ(2,"nz-row"),n.TgZ(3,"nz-col",9),n._uU(4),n.qZA(),n.qZA(),n.TgZ(5,"nz-row"),n.TgZ(6,"nz-col",9),n._uU(7),n.qZA(),n.qZA(),n.qZA(),n.TgZ(8,"div",8),n.TgZ(9,"nz-row"),n.TgZ(10,"b"),n._uU(11,"Published:\xa0"),n.qZA(),n._uU(12),n.qZA(),n.TgZ(13,"nz-row"),n.TgZ(14,"b"),n._uU(15),n.qZA(),n._uU(16),n.qZA(),n.TgZ(17,"nz-row"),n.TgZ(18,"b"),n._uU(19,"Journal:\xa0"),n.qZA(),n._uU(20),n.qZA(),n.TgZ(21,"nz-row"),n.TgZ(22,"b"),n._uU(23,"PMC ID:\xa0"),n.qZA(),n.YNc(24,p,2,1,"span",10),n.YNc(25,q,1,0,"ng-template",null,11,n.W1O),n.qZA(),n.YNc(27,L,5,2,"nz-row",12),n.qZA(),n.TgZ(28,"div",8),n.TgZ(29,"b"),n._uU(30,"Authors:"),n.qZA(),n._uU(31),n.qZA(),n.qZA()),2&t){const o=n.MAs(26),s=n.oxw().ngIf;n.Q6J("nzGutter",16),n.xp6(1),n.Q6J("nzSpan",12),n.xp6(2),n.Q6J("nzSpan",24),n.xp6(1),n.hij(" ",s.abstract," "),n.xp6(2),n.Q6J("nzSpan",24),n.xp6(1),n.hij(" ",s.abstract," "),n.xp6(1),n.Q6J("nzSpan",6),n.xp6(4),n.Oqu(s.publicationDate),n.xp6(3),n.hij("",s.displayType," ID:\xa0"),n.xp6(1),n.Oqu(s.citationId),n.xp6(4),n.Oqu(s.fullJournalTitle),n.xp6(4),n.Q6J("ngIf",s.pmcId)("ngIfElse",o),n.xp6(3),n.Q6J("ngIf",s.clinicalTrials),n.xp6(1),n.Q6J("nzSpan",6),n.xp6(3),n.hij(" ",s.authorString," ")}}function R(t,c){if(1&t&&(n.TgZ(0,"cvc-entity-table-card",19),n._UZ(1,"cvc-evidence-table",20),n.qZA()),2&t){n.oxw();const o=n.MAs(5),s=n.oxw();n.Q6J("cvcTitle",o),n.xp6(1),n.Q6J("sourceId",s.sourceId)}}function j(t,c){if(1&t&&(n._UZ(0,"i",21),n._uU(1," Evidence Items with "),n.TgZ(2,"i"),n._uU(3),n.qZA()),2&t){const o=n.oxw().ngIf;n.xp6(3),n.Oqu(o.title)}}function K(t,c){if(1&t&&(n.TgZ(0,"cvc-entity-table-card",19),n._UZ(1,"cvc-source-suggestions-table",20),n.qZA()),2&t){n.oxw();const o=n.MAs(8),s=n.oxw();n.Q6J("cvcTitle",o),n.xp6(1),n.Q6J("sourceId",s.sourceId)}}function w(t,c){if(1&t&&(n._UZ(0,"i",22),n._uU(1," Source suggestions for "),n.TgZ(2,"i"),n._uU(3),n.qZA()),2&t){const o=n.oxw().ngIf;n.xp6(3),n.Oqu(o.title)}}function F(t,c){1&t&&(n.TgZ(0,"nz-space",1),n.YNc(1,_,2,1,"h2",2),n.YNc(2,N,32,16,"div",3),n.YNc(3,R,2,2,"cvc-entity-table-card",4),n.YNc(4,j,4,1,"ng-template",null,5,n.W1O),n.YNc(6,K,2,2,"cvc-entity-table-card",4),n.YNc(7,w,4,1,"ng-template",null,6,n.W1O),n.qZA())}const Y=[{path:"",component:(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-sources"]],decls:1,vars:0,template:function(o,s){1&o&&n._UZ(0,"router-outlet")},directives:[l.lC],styles:[""]}),t})(),children:[{path:"",redirectTo:"home",pathMatch:"full"},{path:"home",component:O,data:{breadcrumb:"Home"}},{path:":sourceId",component:M,data:{breadcrumb:"DISPLAYNAME"},children:[{path:"",redirectTo:"summary",pathMatch:"full"},{path:"summary",component:(()=>{class t{constructor(o,s){this.route=o,this.gql=s,this.routeSub=this.route.params.subscribe(P=>{this.sourceId=+P.sourceId,this.queryRef=this.gql.watch({sourceId:this.sourceId});let y=this.queryRef.valueChanges;this.loading$=y.pipe((0,C.j)("loading"),(0,T.O)(!0)),this.source$=y.pipe((0,C.j)("data","source"))})}ngOnDestroy(){this.routeSub.unsubscribe()}}return t.\u0275fac=function(o){return new(o||t)(n.Y36(l.gz),n.Y36(g.g0X))},t.\u0275cmp=n.Xpm({type:t,selectors:[["cvc-sources-summary"]],decls:2,vars:3,consts:[["nzSize","middle","nzDirection","vertical","class","space-align-block",4,"ngIf"],["nzSize","middle","nzDirection","vertical",1,"space-align-block"],[4,"nzSpaceItem"],["nz-row","",3,"nzGutter",4,"nzSpaceItem"],[3,"cvcTitle",4,"nzSpaceItem"],["evidenceCardTitle",""],["sourceSuggestionCardTitle",""],["nz-row","",3,"nzGutter"],["nz-col","",3,"nzSpan"],[3,"nzSpan"],[4,"ngIf","ngIfElse"],["pmcIdElse",""],[3,"ngPlural",4,"ngIf"],[3,"ngPlural"],["ngPluralCase","=0"],["ngPluralCase","=1"],["ngPluralCase","other"],[4,"ngFor","ngForOf"],[3,"clinicalTrial"],[3,"cvcTitle"],[3,"sourceId"],["nz-icon","","nzType","civic:source"],["nz-icon","","nzType","flag-add"]],template:function(o,s){1&o&&(n.YNc(0,F,9,0,"nz-space",0),n.ALo(1,"ngrxPush")),2&o&&n.Q6J("ngIf",n.lcZ(1,1,s.source$))},directives:[h.O5,I.NU,I.$1,z.SK,z.t3,h.iq,h.zE,h.sg,u.G,m._,i.a,d.w,Z.Ls,a.O],pipes:[A.fM],styles:[""]}),t})(),data:{breadcrumb:"Summary"}}]}]}];let B=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[l.Bz.forChild(Y)],l.Bz]}),t})()}}]);