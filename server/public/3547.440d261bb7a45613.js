"use strict";(self.webpackChunkmain=self.webpackChunkmain||[]).push([[3547],{9460:(Q,C,a)=>{a.d(C,{i:()=>c});var r=a(6895),p=a(9116),_=a(6672),l=a(6581),n=a(1102),m=a(1698),h=a(9444),d=a(48),x=a(6429),f=a(4650);class c{}c.\u0275fac=function(u){return new(u||c)},c.\u0275mod=f.oAB({type:c}),c.\u0275inj=f.cJS({imports:[r.ez,p.Bz,d.mS,_.X,l.$6,n.PV,m.f,h.s,x.C]})},9476:(Q,C,a)=>{a.d(C,{L:()=>z});var r=a(6895),p=a(9116),_=a(6672),l=a(1102),n=a(3679),m=a(4989),h=a(9194),d=a(1971),x=a(2635),f=a(5473),c=a(4650);class g{}g.\u0275fac=function(M){return new(M||g)},g.\u0275mod=c.oAB({type:g}),g.\u0275inj=c.cJS({imports:[r.ez,x._N,x.pP,d.vh,n.Jb,h.q6,m.X,f.H]});var u=a(6581);class z{}z.\u0275fac=function(M){return new(M||z)},z.\u0275mod=c.oAB({type:z}),z.\u0275inj=c.cJS({imports:[r.ez,p.Bz,_.X,l.PV,u.$6,g]})},7946:(Q,C,a)=>{a.d(C,{x:()=>g});var r=a(6895),p=a(897),_=a(6672),l=a(6581),n=a(8845),m=a(9476),h=a(1229),d=a(7043),x=a(701),f=a(8645),c=a(4650);class g{}g.\u0275fac=function(z){return new(z||g)},g.\u0275mod=c.oAB({type:g}),g.\u0275inj=c.cJS({imports:[r.ez,_.X,l.$6,p.$,x.N,n.Q,m.L,h.U,d.Q,f.M]})},8645:(Q,C,a)=>{a.d(C,{M:()=>u});var r=a(6895),p=a(9116),_=a(6672),l=a(1971),n=a(4989),m=a(9194),h=a(2635),d=a(1102),x=a(9444),f=a(4650);class c{}c.\u0275fac=function(y){return new(y||c)},c.\u0275mod=f.oAB({type:c}),c.\u0275inj=f.cJS({imports:[r.ez,h._N,h.pP,d.PV,l.vh,m.q6,x.s,n.X]});var g=a(6581);class u{}u.\u0275fac=function(y){return new(y||u)},u.\u0275mod=f.oAB({type:u}),u.\u0275inj=f.cJS({imports:[r.ez,p.Bz,d.PV,_.X,g.$6,c]})},4475:(Q,C,a)=>{a.d(C,{F:()=>_});var p=a(4650);class _{transform(n,m="display-string"){return void 0===n?"":"display-string"===m?function r(l){switch(l){case"COMBINATION":return"Combination";case"SEQUENTIAL":return"Sequential";case"SUBSTITUTES":return"Substitutes";default:return l}}(n):`civic-${n.replace(/_/g,"").toLowerCase()}`}}_.\u0275fac=function(n){return new(n||_)},_.\u0275pipe=p.Yjl({name:"therapyInteractionEnumDisplay",type:_,pure:!0})},9317:(Q,C,a)=>{a.r(C),a.d(C,{DiseasesModule:()=>E});var r=a(6895),p=a(9116),_=a(8675),l=a(6579),n=a(4650),m=a(7630),h=a(1102),d=a(5655),x=a(6550),f=a(8992),c=a(2635),g=a(160);function u(t,o){if(1&t&&(n.TgZ(0,"cvc-link-tag",6),n._uU(1),n.qZA()),2&t){const e=n.oxw(2).ngIf;n.Q6J("href",e.diseaseUrl),n.xp6(1),n.hij(" ","DOID:"+e.doid," ")}}function z(t,o){if(1&t&&(n.TgZ(0,"nz-page-header-extra"),n.YNc(1,u,2,2,"cvc-link-tag",5),n.qZA()),2&t){const e=n.oxw().ngIf;n.xp6(1),n.Q6J("ngIf",e.diseaseUrl)}}function y(t,o){if(1&t&&(n.ynx(0),n._UZ(1,"cvc-section-navigation",1),n.TgZ(2,"nz-page-header",2)(3,"nz-page-header-title"),n._UZ(4,"i",3),n.ALo(5,"entityColor"),n._uU(6),n.qZA(),n.YNc(7,z,2,1,"nz-page-header-extra",0),n.TgZ(8,"nz-page-header-content")(9,"div",4),n._UZ(10,"router-outlet"),n.qZA()()(),n.BQk()),2&t){const e=o.ngIf;n.xp6(1),n.Q6J("displayName",e.name),n.xp6(3),n.Q6J("nzTwotoneColor",n.lcZ(5,4,"Disease")),n.xp6(2),n.hij(" ",e.name," "),n.xp6(1),n.Q6J("ngIf",e.doid)}}class M{constructor(o,e){this.route=o,this.gql=e,this.routeSub=this.route.params.subscribe(i=>{this.diseaseId=+i.diseaseId,this.queryRef=this.gql.watch({diseaseId:this.diseaseId});let s=this.queryRef.valueChanges;this.loading$=s.pipe((0,l.j)("loading"),(0,_.O)(!0)),this.disease$=s.pipe((0,l.j)("data","disease"))})}ngOnDestroy(){this.routeSub.unsubscribe()}}M.\u0275fac=function(o){return new(o||M)(n.Y36(p.gz),n.Y36(m.wg3))},M.\u0275cmp=n.Xpm({type:M,selectors:[["cvc-diseases-detail"]],decls:2,vars:3,consts:[[4,"ngIf"],[3,"displayName"],[1,"site-page-header"],["nz-icon","","nzTheme","twotone","nzType","civic-disease",3,"nzTwotoneColor"],[1,"content"],["tooltip","View on disease-ontology.org",3,"href",4,"ngIf"],["tooltip","View on disease-ontology.org",3,"href"]],template:function(o,e){1&o&&(n.YNc(0,y,11,6,"ng-container",0),n.ALo(1,"ngrxPush")),2&o&&n.Q6J("ngIf",n.lcZ(1,1,e.disease$))},dependencies:[r.O5,p.lC,h.Ls,d.$O,d.u9,d.u5,d.Jp,x.l,f.I,c.fM,g.a],styles:["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]     nz-page-header:first-of-type{background-color:#fff;border-radius:8px}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content{flex-wrap:nowrap;background-color:#f0f0f0;border-top-left-radius:8px;border-top-right-radius:8px;margin:-12px -16px 16px;border-bottom:1px solid #bfbfbf}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-icon{padding:12px 0 12px 12px}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-icon i{width:100%}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-icon i   svg{width:100%;height:100%}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-description{padding:12px}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-description h2{color:#262626;margin:-8px 0 0;font-weight:500}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-description p{color:#262626;margin:-2px 0 0;padding:0;font-size:95%;line-height:1.5em}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-links{text-align:right;padding:12px}[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card{width:100%}[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card .card-grid-cell{width:50%}[_nghost-%COMP%]     nz-page-header:first-of-type nz-page-header-title.flagged{padding-left:.75em}[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-content{padding-top:0;padding-bottom:12px}[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-heading-extra nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs{margin:0 -16px 12px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap{padding-left:16px;padding-right:16px;line-height:24px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab{padding:1px 8px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab .anticon{margin-right:0}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-extra-content{margin-right:16px}"]});var O,I=a(3679),W=a(6616),on=a(7044),D=a(8823),L=a(6903),rn=a(655),ln=a(3154),U=a(9933),V=a(1135),G=a(7579),X=a(3240),q=a(1884),gn=a(2529),pn=a(5684),K=a(9300),k=a(4004),dn=a(8372),_n=a(1365),N=a(1971),T=a(6675),j=a(6672),an=a(7570),hn=a(5851),mn=a(7451),fn=a(2166),un=a(7491),zn=a(3388),vn=a(3667),Cn=a(9947);function xn(t,o){}function Tn(t,o){if(1&t&&(n.ynx(0),n.TgZ(1,"nz-card",5),n.YNc(2,xn,0,0,"ng-template",6),n.qZA(),n.BQk()),2&t){n.oxw();const e=n.MAs(6),i=n.MAs(8),s=n.MAs(4);n.xp6(1),n.Q6J("nzTitle",e)("nzExtra",i),n.xp6(1),n.Q6J("ngTemplateOutlet",s)}}function yn(t,o){}const Mn=function(t){return{height:t}};function In(t,o){if(1&t&&(n.TgZ(0,"div",7)(1,"nz-card",8),n.YNc(2,yn,0,0,"ng-template",6),n.qZA()()),2&t){const e=n.oxw(),i=n.MAs(6),s=n.MAs(8),v=n.MAs(4);n.Q6J("ngStyle",n.VKq(4,Mn,e.cvcHeight)),n.xp6(1),n.Q6J("nzTitle",i)("nzExtra",s),n.xp6(1),n.Q6J("ngTemplateOutlet",v)}}function Dn(t,o){if(1&t&&(n.TgZ(0,"cvc-link-tag",36),n._uU(1),n.qZA()),2&t){const e=n.oxw().$implicit;n.Q6J("href",e.diseaseUrl),n.xp6(1),n.hij(" ","DOID:"+e.doid," ")}}function On(t,o){1&t&&n._uU(0," -- ")}function Pn(t,o){if(1&t&&(n.ynx(0),n._uU(1),n.BQk()),2&t){const e=o.$implicit,i=o.last;n.xp6(1),n.AsE(" ",e,"",i?"":", "," ")}}function Zn(t,o){if(1&t&&n.YNc(0,Pn,2,2,"ng-container",37),2&t){const e=n.oxw().$implicit;n.Q6J("ngForOf",e.geneNames)}}function Sn(t,o){if(1&t&&(n.TgZ(0,"tr",29)(1,"td",25),n._UZ(2,"cvc-disease-tag",30),n.qZA(),n.TgZ(3,"td",25),n.YNc(4,Dn,2,2,"cvc-link-tag",31),n.YNc(5,On,1,0,"ng-template",null,32,n.W1O),n.qZA(),n.TgZ(7,"td",33),n.YNc(8,Zn,1,1,"ng-template",null,34,n.W1O),n.GkF(10,6),n.qZA(),n.TgZ(11,"td",35),n._uU(12),n.qZA(),n.TgZ(13,"td",35),n._uU(14),n.qZA(),n.TgZ(15,"td",35),n._uU(16),n.qZA(),n.TgZ(17,"td",35),n._uU(18),n.qZA()()),2&t){const e=o.$implicit,i=n.MAs(6),s=n.MAs(9),v=n.oxw(2);n.xp6(2),n.Q6J("disease",e),n.xp6(2),n.Q6J("ngIf",e.doid)("ngIfElse",i),n.xp6(3),n.Q6J("nzTooltipTitle",v.isScrolling?"":s),n.xp6(3),n.Q6J("ngTemplateOutlet",s),n.xp6(2),n.hij(" ",e.geneCount," "),n.xp6(2),n.hij(" ",e.variantCount," "),n.xp6(2),n.hij(" ",e.evidenceItemCount," "),n.xp6(2),n.hij(" ",e.assertionCount," ")}}const An=function(){return[]},bn=function(){return{x:"680px",y:"800px"}},Y=function(){return["descend","ascend",null]};function Jn(t,o){if(1&t){const e=n.EpF();n.TgZ(0,"nz-table",9,10),n.NdJ("cvcTableScrollOnScroll",function(s){n.CHM(e);const v=n.oxw();return n.KtG(v.scrollEvent$.next(s))}),n.ALo(2,"ngrxPush"),n.ALo(3,"ngrxPush"),n.ALo(4,"ngrxPush"),n.ALo(5,"ngrxPush"),n.TgZ(6,"thead",11),n.NdJ("nzSortOrderChange",function(s){n.CHM(e);const v=n.oxw();return n.KtG(v.sortChange$.next(s))}),n.TgZ(7,"tr",12)(8,"th",13),n._uU(9," Name "),n.qZA(),n.TgZ(10,"th",14),n._uU(11," DOID "),n.qZA(),n.TgZ(12,"th",15),n._uU(13,"Genes"),n.qZA(),n.TgZ(14,"th",16),n._UZ(15,"i",17),n._uU(16," Count "),n.qZA(),n.TgZ(17,"th",18),n._UZ(18,"i",19),n._uU(19," Count "),n.qZA(),n.TgZ(20,"th",20),n._UZ(21,"i",21),n._uU(22," Count "),n.qZA(),n.TgZ(23,"th",22),n._UZ(24,"i",23),n._uU(25," Count "),n.qZA()(),n.TgZ(26,"tr",24)(27,"th",25)(28,"cvc-clearable-input-filter",26),n.NdJ("inputModelChange",function(s){n.CHM(e);const v=n.oxw();return n.KtG(v.nameInput=s)})("inputModelChange",function(){n.CHM(e);const s=n.oxw();return n.KtG(s.filterChange$.next())}),n.qZA()(),n.TgZ(29,"th",25)(30,"cvc-clearable-input-filter",26),n.NdJ("inputModelChange",function(s){n.CHM(e);const v=n.oxw();return n.KtG(v.doidInput=s)})("inputModelChange",function(){n.CHM(e);const s=n.oxw();return n.KtG(s.filterChange$.next())}),n.qZA()(),n.TgZ(31,"th")(32,"cvc-clearable-input-filter",26),n.NdJ("inputModelChange",function(s){n.CHM(e);const v=n.oxw();return n.KtG(v.geneNameInput=s)})("inputModelChange",function(){n.CHM(e);const s=n.oxw();return n.KtG(s.filterChange$.next())}),n.qZA()(),n._UZ(33,"th",27)(34,"th",27)(35,"th",27)(36,"th",27),n.qZA()(),n.TgZ(37,"tbody"),n.YNc(38,Sn,19,9,"ng-template",28),n.qZA()()}if(2&t){const e=n.oxw();n.Q6J("nzData",n.lcZ(2,30,e.row$)||n.DdM(38,An))("nzLoading",!n.lcZ(3,32,e.row$))("cvcAutoHeightTable",25)("nzVirtualItemSize",29)("cvcTableScrollQueryRef",e.queryRef)("cvcTableScrollPageInfo",n.lcZ(4,34,e.pageInfo$))("cvcTableScrollToIndex",n.lcZ(5,36,e.scrollIndex$))("nzVirtualForTrackBy",e.trackByIndex)("nzScroll",n.DdM(39,bn))("nzFrontPagination",!1)("nzShowPagination",!1),n.xp6(8),n.Q6J("nzColumnKey",e.sortColumns.Name)("nzSortFn",!0),n.xp6(2),n.Q6J("nzColumnKey",e.sortColumns.Doid)("nzSortFn",!0),n.xp6(4),n.Q6J("nzColumnKey",e.sortColumns.GeneCount)("nzSortFn",!0)("nzSortDirections",n.DdM(40,Y)),n.xp6(3),n.Q6J("nzColumnKey",e.sortColumns.VariantCount)("nzSortFn",!0)("nzSortDirections",n.DdM(41,Y)),n.xp6(3),n.Q6J("nzColumnKey",e.sortColumns.EvidenceItemCount)("nzSortFn",!0)("nzSortDirections",n.DdM(42,Y)),n.xp6(3),n.Q6J("nzColumnKey",e.sortColumns.AssertionCount)("nzSortFn",!0)("nzSortDirections",n.DdM(43,Y)),n.xp6(5),n.Q6J("inputModel",e.nameInput),n.xp6(2),n.Q6J("inputModel",e.doidInput),n.xp6(2),n.Q6J("inputModel",e.geneNameInput)}}function En(t,o){}function Qn(t,o){if(1&t&&(n.ynx(0),n.YNc(1,En,0,0,"ng-template",6),n.BQk()),2&t){const e=n.oxw(2);n.xp6(1),n.Q6J("ngTemplateOutlet",e.cvcTitleTemplate)}}function Un(t,o){if(1&t&&(n.ynx(0),n._uU(1),n.BQk()),2&t){const e=n.oxw(2);n.xp6(1),n.hij(" ",e.cvcTitle," ")}}function Nn(t,o){if(1&t&&(n.YNc(0,Qn,2,1,"ng-container",38),n.YNc(1,Un,2,1,"ng-container",38),n.TgZ(2,"span",39),n._UZ(3,"cvc-table-counts",40),n.qZA()),2&t){const e=n.oxw();n.Q6J("ngIf",e.cvcTitleTemplate),n.xp6(1),n.Q6J("ngIf",e.cvcTitle),n.xp6(2),n.Q6J("cvcTableCountsConnection",e.connection$)}}function wn(t,o){1&t&&(n.TgZ(0,"nz-tag",43),n._UZ(1,"i",44),n.TgZ(2,"span"),n._uU(3,"Loading\u2026"),n.qZA()())}function Bn(t,o){if(1&t&&(n.YNc(0,wn,4,0,"nz-tag",41),n.ALo(1,"ngrxPush"),n._UZ(2,"cvc-no-more-rows",42),n.ALo(3,"ngrxPush")),2&t){const e=n.oxw();n.Q6J("ngIf",n.lcZ(1,2,e.moreLoading$)),n.xp6(2),n.Q6J("cvcShowTag",n.lcZ(3,4,e.noMoreRows$))}}let nn=((O=class{set initialUserFilters(o){o&&Object.assign(this,o)}constructor(o,e){this.gql=o,this.cdr=e,this.initialPageSize=35,this.isScrolling=!1,this.sortColumns=m.R8w,this.noMoreRows$=new V.X(!1),this.scrollEvent$=new V.X("stop"),this.sortChange$=new G.x,this.filterChange$=new G.x,this.scrollIndex$=new G.x}ngOnInit(){this.queryRef=this.gql.watch({first:this.initialPageSize}),this.result$=this.queryRef.valueChanges,this.initialLoading$=this.result$.pipe((0,l.j)("loading"),(0,q.x)(),(0,gn.o)(o=>!1!==o,!0)),this.moreLoading$=this.result$.pipe((0,l.j)("loading"),(0,q.x)(),(0,pn.T)(2)),this.connection$=this.result$.pipe((0,l.j)("data","browseDiseases"),(0,K.h)(X.ep)),this.row$=this.connection$.pipe((0,l.j)("edges"),(0,K.h)(X.ep),(0,k.U)(o=>o.map(e=>e.node))),this.pageInfo$=this.connection$.pipe((0,l.j)("pageInfo"),(0,K.h)(X.ep)),this.sortChange$.pipe((0,U.t)(this)).subscribe(o=>{this.queryRef.refetch({sortBy:(0,ln._)(o)})}),this.filterChange$.pipe((0,dn.b)(500),(0,U.t)(this)).subscribe(()=>{this.refresh()}),this.scrollEvent$.pipe((0,k.U)(o=>"stop"!==o),(0,q.x)(),(0,U.t)(this)).subscribe(o=>{this.isScrolling=o,this.cdr.detectChanges()}),this.scrollEvent$.pipe((0,K.h)(o=>"bottom"===o),(0,_n.M)(this.pageInfo$),(0,k.U)(([o,e])=>e),(0,U.t)(this)).subscribe(o=>{o.hasNextPage||(this.noMoreRows$.next(!0),this.cdr.detectChanges(),setInterval(()=>this.noMoreRows$.next(!1)))})}refresh(){this.queryRef.refetch({name:this.nameInput,geneNames:this.geneNameInput,doid:this.doidInput}).then(()=>this.scrollIndex$.next(0)),this.cdr.detectChanges()}trackByIndex(o,e){return e?.id}}).\u0275fac=function(o){return new(o||O)(n.Y36(m.Tq1),n.Y36(n.sBO))},O.\u0275cmp=n.Xpm({type:O,selectors:[["cvc-diseases-table"]],inputs:{cvcHeight:"cvcHeight",cvcTitleTemplate:"cvcTitleTemplate",cvcTitle:"cvcTitle",initialPageSize:"initialPageSize",initialUserFilters:"initialUserFilters"},decls:9,vars:2,consts:[[4,"ngIf","ngIfElse"],["setHeightCard",""],["table",""],["titleTemplate",""],["extraTemplate",""],["nzSize","small","cvcAutoHeightCard","","cvcAutoHeightTarget","viewport",3,"nzTitle","nzExtra"],[3,"ngTemplateOutlet"],[1,"card-container",3,"ngStyle"],["cvcAutoHeightCard","","nzSize","small",3,"nzTitle","nzExtra"],["nzSize","small","cvcTableScroll","",3,"nzData","nzLoading","cvcAutoHeightTable","nzVirtualItemSize","cvcTableScrollQueryRef","cvcTableScrollPageInfo","cvcTableScrollToIndex","nzVirtualForTrackBy","nzScroll","nzFrontPagination","nzShowPagination","cvcTableScrollOnScroll"],["virtualTable",""],[3,"nzSortOrderChange"],[1,"col-header-row"],["nzWidth","300px","nzLeft","",3,"nzColumnKey","nzSortFn"],["nzWidth","150px","nzLeft","",3,"nzColumnKey","nzSortFn"],["nzWidth","400px"],["nzWidth","75px","nzRight","","nzAlign","right","nz-tooltip","","nzTooltipTitle","Gene Count",3,"nzColumnKey","nzSortFn","nzSortDirections"],["nz-icon","","nzType","civic-gene"],["nzWidth","75px","nzRight","","nzAlign","right","nz-tooltip","","nzTooltipTitle","Variant Count",3,"nzColumnKey","nzSortFn","nzSortDirections"],["nz-icon","","nzType","civic-variant"],["nzWidth","75px","nzRight","","nzAlign","right","nz-tooltip","","nzTooltipTitle","Evidence Count",3,"nzColumnKey","nzSortFn","nzSortDirections"],["nz-icon","","nzType","civic-evidence"],["nzWidth","75px","nzRight","","nz-tooltip","","nzTooltipTitle","Assertion Count",3,"nzColumnKey","nzSortFn","nzSortDirections"],["nz-icon","","nzType","civic-assertion"],[1,"filter-row"],["nzLeft",""],[3,"inputModel","inputModelChange"],["nzRight",""],["nz-virtual-scroll",""],[1,"data-row"],[3,"disease"],["tooltip","View on disease-ontology.org",3,"href",4,"ngIf","ngIfElse"],["noDoid",""],["nz-tooltip","",1,"overflow-ellipsis",3,"nzTooltipTitle"],["geneNames",""],["nzRight","","nzAlign","right"],["tooltip","View on disease-ontology.org",3,"href"],[4,"ngFor","ngForOf"],[4,"ngIf"],[1,"table-info"],[3,"cvcTableCountsConnection"],["nzColor","processing",4,"ngIf"],[3,"cvcShowTag"],["nzColor","processing"],["nz-icon","","nzType","sync","nzSpin",""]],template:function(o,e){if(1&o&&(n.YNc(0,Tn,3,3,"ng-container",0),n.YNc(1,In,3,6,"ng-template",null,1,n.W1O),n.YNc(3,Jn,39,44,"ng-template",null,2,n.W1O),n.YNc(5,Nn,4,3,"ng-template",null,3,n.W1O),n.YNc(7,Bn,4,6,"ng-template",null,4,n.W1O)),2&o){const i=n.MAs(2);n.Q6J("ngIf",!e.cvcHeight)("ngIfElse",i)}},dependencies:[r.sg,r.O5,r.tP,r.PC,on.w,N.bd,h.Ls,T.N8,T.qD,T.Uo,T._C,T.Om,T.p0,T.$Z,T.zu,T.qn,T.UX,j.j,an.SY,hn.D,mn.q,fn.p,un.n,x.l,zn.H,vn.B,Cn.y,c.fM],styles:["nz-card[_ngcontent-%COMP%]:first-of-type     .ant-card-body{padding:0;margin-top:1px}.table-info[_ngcontent-%COMP%]{margin-left:.5rem}tr.col-header-row[_ngcontent-%COMP%]   th.ant-table-cell[_ngcontent-%COMP%]{white-space:nowrap}tr.col-header-row[_ngcontent-%COMP%]   th.ant-table-cell.align-right[_ngcontent-%COMP%]     .ant-table-column-title{text-align:right}tr.filter-row[_ngcontent-%COMP%]   th.ant-table-cell[_ngcontent-%COMP%]{padding:3px 4px}tr.filter-row[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   nz-filter-trigger[_ngcontent-%COMP%]     span.ant-dropdown-trigger{margin-left:0;padding-right:12px}tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell[_ngcontent-%COMP%]{white-space:nowrap}tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell[_ngcontent-%COMP%]   .anticon.attribute-icon[_ngcontent-%COMP%]{color:#595959}tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell.overflow-ellipsis[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis}tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell.button-cell[_ngcontent-%COMP%]{padding:0}tr.data-row[_ngcontent-%COMP%]   td.align-right[_ngcontent-%COMP%], tr.col-header-row[_ngcontent-%COMP%]   th.ant-table-cell[_ngcontent-%COMP%]   .align-right[_ngcontent-%COMP%], tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell[_ngcontent-%COMP%]   .align-right[_ngcontent-%COMP%], tr.filter-row[_ngcontent-%COMP%]   th.ant-table-cell[_ngcontent-%COMP%]   .align-right[_ngcontent-%COMP%]{text-align:right}[_nghost-%COMP%]{display:block}"]}),O);function Fn(t,o){1&t&&(n.TgZ(0,"a",14),n._UZ(1,"i",15),n._uU(2," View Disease Attribute Docs "),n.qZA())}function $n(t,o){1&t&&(n.TgZ(0,"a",16),n._UZ(1,"i",15),n._uU(2," View Disease Curation Docs "),n.qZA())}nn=(0,rn.gn)([(0,U.c)()],nn);class w{constructor(){}ngOnInit(){}}w.\u0275fac=function(o){return new(o||w)},w.\u0275cmp=n.Xpm({type:w,selectors:[["diseases-home"]],decls:20,vars:5,consts:[[1,"site-page-header"],[1,"header-content"],["nzFlex","64px",1,"header-icon"],["nz-icon","","nzTheme","twotone","nzType","civic-disease",3,"nzTwotoneColor"],["nzFlex","0 1 600px",1,"header-description"],["nz-typography","","nzEllipsis","","nzExpandable","",3,"nzEllipsisRows"],["nzFlex","auto",1,"header-links"],["nzDirection","vertical",1,"docs-buttons"],["nz-button","","href","https://civic.readthedocs.io/en/latest/model/evidence/disease.html","target","_blank","nzSize","small","nzBlock","",4,"nzSpaceItem"],["nz-button","","href","https://civic.readthedocs.io/en/latest/model/evidence/disease.html#curating-diseases","target","_blank","nzSize","small","nzBlock","",4,"nzSpaceItem"],["nz-row",""],["nz-col","",3,"nzSpan"],[1,"content"],["cvcTitle","Browse All Diseases"],["nz-button","","href","https://civic.readthedocs.io/en/latest/model/evidence/disease.html","target","_blank","nzSize","small","nzBlock",""],["nz-icon","","nzType","link","nzTheme","outline"],["nz-button","","href","https://civic.readthedocs.io/en/latest/model/evidence/disease.html#curating-diseases","target","_blank","nzSize","small","nzBlock",""]],template:function(o,e){1&o&&(n._UZ(0,"cvc-section-navigation"),n.TgZ(1,"nz-page-header",0)(2,"nz-page-header-content")(3,"nz-row",1)(4,"nz-col",2),n._UZ(5,"i",3),n.ALo(6,"entityColor"),n.qZA(),n.TgZ(7,"nz-col",4)(8,"h2"),n._uU(9,"Diseases"),n.qZA(),n.TgZ(10,"p",5),n._uU(11," All CIViC Evidence Items are associated with a Disease included in the Disease Ontology database. "),n.qZA()(),n.TgZ(12,"nz-col",6)(13,"nz-space",7),n.YNc(14,Fn,3,0,"a",8),n.YNc(15,$n,3,0,"a",9),n.qZA()()(),n.TgZ(16,"div",10)(17,"div",11)(18,"div",12),n._UZ(19,"cvc-diseases-table",13),n.qZA()()()()()),2&o&&(n.xp6(5),n.Q6J("nzTwotoneColor",n.lcZ(6,3,"Disease")),n.xp6(5),n.Q6J("nzEllipsisRows",2),n.xp6(7),n.Q6J("nzSpan",24))},dependencies:[h.Ls,d.$O,d.u5,I.t3,I.SK,W.ix,on.w,D.ZU,L.NU,L.$1,f.I,nn,g.a],styles:["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]     nz-page-header:first-of-type{background-color:#fff;border-radius:8px}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content{flex-wrap:nowrap;background-color:#f0f0f0;border-top-left-radius:8px;border-top-right-radius:8px;margin:-12px -16px 16px;border-bottom:1px solid #bfbfbf}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-icon{padding:12px 0 12px 12px}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-icon i{width:100%}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-icon i   svg{width:100%;height:100%}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-description{padding:12px}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-description h2{color:#262626;margin:-8px 0 0;font-weight:500}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-description p{color:#262626;margin:-2px 0 0;padding:0;font-size:95%;line-height:1.5em}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-links{text-align:right;padding:12px}[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card{width:100%}[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card .card-grid-cell{width:50%}[_nghost-%COMP%]     nz-page-header:first-of-type nz-page-header-title.flagged{padding-left:.75em}[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-content{padding-top:0;padding-bottom:12px}[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-heading-extra nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs{margin:0 -16px 12px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap{padding-left:16px;padding-right:16px;line-height:24px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab{padding:1px 8px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab .anticon{margin-right:0}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-extra-content{margin-right:16px}"]});var sn=a(4813),Rn=a(3392),Ln=a(3756),tn=a(3513),B=a(9194),Kn=a(6715);function jn(t,o){if(1&t&&(n.ynx(0),n._uU(1),n.BQk()),2&t){const e=n.oxw(3);n.xp6(1),n.hij(" ",e.diseaseInfo.doDef," ")}}function Yn(t,o){if(1&t&&(n.TgZ(0,"cvc-link-tag",24),n._uU(1),n.qZA()),2&t){const i=o.index;n.Q6J("href",o.$implicit),n.xp6(1),n.hij("Source ",i+1,"")}}function Hn(t,o){if(1&t&&(n.ynx(0),n.TgZ(1,"cvc-tag-list"),n.YNc(2,Yn,2,2,"cvc-link-tag",23),n.qZA(),n.BQk()),2&t){const e=n.oxw(3);n.xp6(2),n.Q6J("ngForOf",e.diseaseInfo.doDefCitations)}}function Wn(t,o){if(1&t&&(n.TgZ(0,"nz-tag"),n._uU(1),n.qZA()),2&t){const e=o.$implicit;n.xp6(1),n.hij(" ",e," ")}}function Vn(t,o){if(1&t&&(n.TgZ(0,"nz-descriptions-item",25)(1,"cvc-tag-list"),n.YNc(2,Wn,2,1,"nz-tag",26),n.qZA()()),2&t){const e=n.oxw(3);n.Q6J("nzSpan",2),n.xp6(2),n.Q6J("ngForOf",e.diseaseInfo.diseaseOntologyExactSynonyms)}}function Gn(t,o){if(1&t&&(n.TgZ(0,"nz-tag"),n._uU(1),n.qZA()),2&t){const e=o.$implicit;n.xp6(1),n.hij(" ",e," ")}}function Xn(t,o){if(1&t&&(n.TgZ(0,"nz-descriptions-item",27)(1,"cvc-tag-list"),n.YNc(2,Gn,2,1,"nz-tag",26),n.qZA()()),2&t){const e=n.oxw(3);n.Q6J("nzSpan",2),n.xp6(2),n.Q6J("ngForOf",e.diseaseInfo.diseaseOntologyRelatedSynonyms)}}function qn(t,o){if(1&t&&(n.TgZ(0,"cvc-link-tag",28),n._uU(1),n.qZA()),2&t){const e=n.oxw(3);n.Q6J("href","https://meshb.nlm.nih.gov/record/ui?ui="+e.diseaseInfo.mesh),n.xp6(1),n.hij(" MeSH:",e.diseaseInfo.mesh," ")}}function kn(t,o){if(1&t&&(n.TgZ(0,"cvc-link-tag",29),n._uU(1),n.qZA()),2&t){const e=o.$implicit;n.Q6J("href","https://ncithesaurus.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&ns=ncit&code="+e),n.xp6(1),n.hij(" NCIt:",e," ")}}function nt(t,o){if(1&t&&(n.TgZ(0,"cvc-link-tag",30),n._uU(1),n.qZA()),2&t){const e=n.oxw(3);n.Q6J("href","https://www.omim.org/entry/"+e.diseaseInfo.omim),n.xp6(1),n.hij(" OMIM:",e.diseaseInfo.omim," ")}}function tt(t,o){if(1&t&&(n.TgZ(0,"nz-descriptions-item",31),n._uU(1),n.qZA()),2&t){const e=n.oxw(3);n.xp6(1),n.hij(" ",e.diseaseInfo.icd10," ")}}function et(t,o){if(1&t&&(n.TgZ(0,"nz-descriptions-item",32),n._uU(1),n.qZA()),2&t){const e=n.oxw(3);n.xp6(1),n.hij(" ",e.diseaseInfo.icdo," ")}}function ot(t,o){if(1&t&&(n.ynx(0),n.TgZ(1,"div",8)(2,"nz-row",9)(3,"nz-col",10)(4,"nz-descriptions",11)(5,"nz-descriptions-item",12),n.YNc(6,jn,2,1,"ng-container",13),n.qZA(),n.TgZ(7,"nz-descriptions-item",14),n.YNc(8,Hn,3,1,"ng-container",13),n.qZA()()(),n.TgZ(9,"nz-col",10)(10,"nz-descriptions",11),n.YNc(11,Vn,3,2,"nz-descriptions-item",15),n.YNc(12,Xn,3,2,"nz-descriptions-item",16),n.TgZ(13,"nz-descriptions-item",17)(14,"cvc-tag-list"),n.YNc(15,qn,2,2,"cvc-link-tag",18),n.YNc(16,kn,2,2,"cvc-link-tag",19),n.YNc(17,nt,2,2,"cvc-link-tag",20),n.qZA()(),n.YNc(18,tt,2,1,"nz-descriptions-item",21),n.YNc(19,et,2,1,"nz-descriptions-item",22),n.qZA()()()(),n.BQk()),2&t){const e=n.oxw(2),i=n.MAs(2);n.xp6(2),n.Q6J("nzGutter",8),n.xp6(1),n.Q6J("nzSpan",12),n.xp6(1),n.Q6J("nzBordered",!0)("nzColumn",1),n.xp6(2),n.Q6J("ngIf",e.diseaseInfo.doDef)("ngIfElse",i),n.xp6(2),n.Q6J("ngIf",e.diseaseInfo.doDefCitations.length>0)("ngIfElse",i),n.xp6(1),n.Q6J("nzSpan",12),n.xp6(1),n.Q6J("nzBordered",!0)("nzColumn",2),n.xp6(1),n.Q6J("ngIf",e.diseaseInfo.diseaseOntologyExactSynonyms.length>0),n.xp6(1),n.Q6J("ngIf",e.diseaseInfo.diseaseOntologyRelatedSynonyms.length>0),n.xp6(1),n.Q6J("nzSpan",2),n.xp6(2),n.Q6J("ngIf",e.diseaseInfo.mesh),n.xp6(1),n.Q6J("ngForOf",e.diseaseInfo.ncit),n.xp6(1),n.Q6J("ngIf",e.diseaseInfo.omim),n.xp6(1),n.Q6J("ngIf",e.diseaseInfo.icd10),n.xp6(1),n.Q6J("ngIf",e.diseaseInfo.icdo)}}function at(t,o){if(1&t&&(n.ynx(0),n._uU(1),n.BQk()),2&t){const e=n.oxw(3);n.xp6(1),n.hij(" ",e.diseaseInfo.mondoDef," ")}}function it(t,o){if(1&t&&(n.ynx(0),n.TgZ(1,"div",8)(2,"nz-row",9)(3,"nz-col",10)(4,"nz-descriptions",11)(5,"nz-descriptions-item",12),n.YNc(6,at,2,1,"ng-container",13),n.qZA()()()()(),n.BQk()),2&t){const e=n.oxw(2),i=n.MAs(2);n.xp6(2),n.Q6J("nzGutter",8),n.xp6(1),n.Q6J("nzSpan",12),n.xp6(1),n.Q6J("nzBordered",!0)("nzColumn",2),n.xp6(2),n.Q6J("ngIf",e.diseaseInfo.mondoDef)("ngIfElse",i)}}function st(t,o){if(1&t){const e=n.EpF();n.ynx(0),n.TgZ(1,"nz-card",2)(2,"nz-card-tab")(3,"nz-tabset",3)(4,"nz-tab",4),n.NdJ("nzClick",function(){n.CHM(e);const s=n.oxw();return n.KtG(s.tabIndex.next(0))}),n.qZA(),n.TgZ(5,"nz-tab",5),n.NdJ("nzClick",function(){n.CHM(e);const s=n.oxw();return n.KtG(s.tabIndex.next(1))}),n.qZA()()(),n.ynx(6,6),n.ALo(7,"async"),n.YNc(8,ot,20,19,"ng-container",7),n.YNc(9,it,7,6,"ng-container",7),n.BQk(),n.qZA(),n.BQk()}if(2&t){const e=n.oxw();n.xp6(3),n.Q6J("nzAnimated",!0),n.xp6(3),n.Q6J("ngSwitch",n.lcZ(7,4,e.tabIndex)),n.xp6(2),n.Q6J("ngSwitchCase",0),n.xp6(1),n.Q6J("ngSwitchCase",1)}}function ct(t,o){1&t&&(n.TgZ(0,"span",33),n._uU(1,"Not Found"),n.qZA())}class F{constructor(){this.tabIndex=new V.X(0)}tabChange(o){this.tabIndex.next(o)}ngOnDestroy(){this.tabIndex.unsubscribe()}}F.\u0275fac=function(o){return new(o||F)},F.\u0275cmp=n.Xpm({type:F,selectors:[["cvc-my-disease-info"]],inputs:{diseaseInfo:"diseaseInfo"},decls:3,vars:1,consts:[[4,"ngIf"],["noValue",""],["nzTitle","MyDiseaseInfo"],["nzSize","small",3,"nzAnimated"],["nzTitle","Disease Ontology",3,"nzClick"],["nzTitle","Mondo",3,"nzClick"],[3,"ngSwitch"],[4,"ngSwitchCase"],[1,"tab-padding"],[3,"nzGutter"],[3,"nzSpan"],["nzSize","small",3,"nzBordered","nzColumn"],["nzTitle","Definition"],[4,"ngIf","ngIfElse"],["nzTitle","Citations"],["nzTitle","Exact Synonyms",3,"nzSpan",4,"ngIf"],["nzTitle","Related Synonyms",3,"nzSpan",4,"ngIf"],["nzTitle","External Identifiers",3,"nzSpan"],["tooltip","View in MeSH",3,"href",4,"ngIf"],["tooltip","View in NCI Thesaurus",3,"href",4,"ngFor","ngForOf"],["tooltip","View on OMIM",3,"href",4,"ngIf"],["nzTitle","ICD - 10",4,"ngIf"],["nzTitle","ICD - O",4,"ngIf"],[3,"href",4,"ngFor","ngForOf"],[3,"href"],["nzTitle","Exact Synonyms",3,"nzSpan"],[4,"ngFor","ngForOf"],["nzTitle","Related Synonyms",3,"nzSpan"],["tooltip","View in MeSH",3,"href"],["tooltip","View in NCI Thesaurus",3,"href"],["tooltip","View on OMIM",3,"href"],["nzTitle","ICD - 10"],["nzTitle","ICD - O"],["nz-typography","","nzType","secondary"]],template:function(o,e){1&o&&(n.YNc(0,st,10,6,"ng-container",0),n.YNc(1,ct,2,0,"ng-template",null,1,n.W1O)),2&o&&n.Q6J("ngIf",e.diseaseInfo)},dependencies:[r.sg,r.O5,r.RF,r.n9,tn.xH,tn.xw,N.bd,N._i,B.R7,B.uj,I.t3,I.SK,j.j,D.ZU,x.l,Kn.$,r.Ov],styles:["[_nghost-%COMP%]{display:block}nz-card[_ngcontent-%COMP%]{width:100%}.key-col[_ngcontent-%COMP%]{text-align:right;font-weight:700}.button-col[_ngcontent-%COMP%]{text-align:right}"]});const rt=function(){return[8,16]};function lt(t,o){if(1&t&&(n.ynx(0),n.TgZ(1,"nz-row",2)(2,"nz-col",3),n._UZ(3,"cvc-my-disease-info",4),n.qZA(),n.TgZ(4,"nz-col",3),n._UZ(5,"cvc-evidence-table",5),n.qZA(),n.TgZ(6,"nz-col",3),n._UZ(7,"cvc-assertions-table",6),n.qZA()(),n.BQk()),2&t){const e=o.ngIf,i=n.oxw();n.xp6(1),n.Q6J("nzGutter",n.DdM(9,rt)),n.xp6(1),n.Q6J("nzSpan",24),n.xp6(1),n.Q6J("diseaseInfo",e.myDiseaseInfo),n.xp6(1),n.Q6J("nzSpan",24),n.xp6(1),n.MGl("cvcTitle","",e.displayName," Evidence"),n.Q6J("diseaseId",i.diseaseId),n.xp6(1),n.Q6J("nzSpan",24),n.xp6(1),n.MGl("cvcTitle","",e.displayName," Assertions"),n.Q6J("diseaseId",i.diseaseId)}}class ${constructor(o,e){this.route=o,this.gql=e,this.routeSub=this.route.params.subscribe(i=>{this.diseaseId=+i.diseaseId,this.queryRef=this.gql.watch({diseaseId:this.diseaseId});let s=this.queryRef.valueChanges;this.loading$=s.pipe((0,sn.j)("loading"),(0,_.O)(!0)),this.disease$=s.pipe((0,sn.j)("data","disease"))})}ngOnDestroy(){this.routeSub.unsubscribe()}}$.\u0275fac=function(o){return new(o||$)(n.Y36(p.gz),n.Y36(m.MNv))},$.\u0275cmp=n.Xpm({type:$,selectors:[["cvc-diseases-summary"]],decls:3,vars:3,consts:[[1,"summary-container"],[4,"ngIf"],[3,"nzGutter"],[3,"nzSpan"],[3,"diseaseInfo"],["cvcHeight","400px",3,"diseaseId","cvcTitle"],[3,"diseaseId","cvcTitle"]],template:function(o,e){1&o&&(n.TgZ(0,"div",0),n.YNc(1,lt,8,10,"ng-container",1),n.ALo(2,"ngrxPush"),n.qZA()),2&o&&(n.xp6(1),n.Q6J("ngIf",n.lcZ(2,1,e.disease$)))},dependencies:[r.O5,I.t3,I.SK,Rn.a,Ln.x,F,c.fM],styles:["[_nghost-%COMP%]{display:block}"]});class R{constructor(){}ngOnInit(){}}R.\u0275fac=function(o){return new(o||R)},R.\u0275cmp=n.Xpm({type:R,selectors:[["app-diseases"]],decls:1,vars:0,template:function(o,e){1&o&&n._UZ(0,"router-outlet")},dependencies:[p.lC],encapsulation:2});const gt=[{path:"",component:R,children:[{path:"",redirectTo:"home",pathMatch:"full"},{path:"home",component:w,data:{breadcrumb:"Home"}},{path:":diseaseId",component:M,data:{breadcrumb:"DISPLAYNAME"},children:[{path:"",redirectTo:"summary",pathMatch:"full"},{path:"summary",component:$,data:{breadcrumb:"Summary"}}]}]}];class P{}P.\u0275fac=function(o){return new(o||P)},P.\u0275mod=n.oAB({type:P}),P.\u0275inj=n.cJS({imports:[p.Bz.forChild(gt),p.Bz]});var en=a(4989),cn=a(5630),H=a(9444);class Z{}Z.\u0275fac=function(o){return new(o||Z)},Z.\u0275mod=n.oAB({type:Z}),Z.\u0275inj=n.cJS({imports:[r.ez,p.Bz,c._N,c.pP,h.PV,D.ZJ,d.KJ,B.q6,L.zf,en.X,cn.D,H.s]});var pt=a(9441),dt=a(767),_t=a(897);class S{}S.\u0275fac=function(o){return new(o||S)},S.\u0275mod=n.oAB({type:S}),S.\u0275inj=n.cJS({imports:[r.ez,tn.we,T.HQ,N.vh,B.q6,I.Jb,j.X,D.ZJ,H.s,en.X,_t.$]});class A{}A.\u0275fac=function(o){return new(o||A)},A.\u0275mod=n.oAB({type:A}),A.\u0275inj=n.cJS({imports:[r.ez,c._N,c.pP,I.Jb,B.q6,D.ZJ,dt.Q,pt.s,S]});var ht=a(4125),mt=a(2994),ft=a(8525),ut=a(3111),zt=a(1433),vt=a(9240),Ct=a(8845);class b{}b.\u0275fac=function(o){return new(o||b)},b.\u0275mod=n.oAB({type:b}),b.\u0275inj=n.cJS({imports:[r.ez,c._N,c.pP,W.sL,N.vh,h.PV,h.PV,T.HQ,j.X,an.cg,D.ZJ,H.s,ut.n,zt.c,ht.k,Ct.Q,en.X,mt.y,ft.T,vt.w]});class J{}J.\u0275fac=function(o){return new(o||J)},J.\u0275mod=n.oAB({type:J}),J.\u0275inj=n.cJS({imports:[r.ez,h.PV,d.KJ,I.Jb,W.sL,D.ZJ,L.zf,cn.D,b,H.s]});class E{}E.\u0275fac=function(o){return new(o||E)},E.\u0275mod=n.oAB({type:E}),E.\u0275inj=n.cJS({imports:[r.ez,p.Bz,P,J,Z,A]})}}]);