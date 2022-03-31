"use strict";(self.webpackChunkmain=self.webpackChunkmain||[]).push([[3508],{4805:(Q,_,o)=>{o.d(_,{_:()=>C});var l=o(5e3),n=o(7484);const v=["*"];let C=(()=>{class g{constructor(){this.cvcTitle=void 0}ngOnInit(){}}return g.\u0275fac=function(d){return new(d||g)},g.\u0275cmp=l.Xpm({type:g,selectors:[["cvc-entity-table-card"]],inputs:{cvcTitle:"cvcTitle"},ngContentSelectors:v,decls:3,vars:1,consts:[[3,"nzTitle"],[1,"card-content"]],template:function(d,t){1&d&&(l.F$t(),l.TgZ(0,"nz-card",0),l.TgZ(1,"div",1),l.Hsn(2),l.qZA(),l.qZA()),2&d&&l.Q6J("nzTitle",t.cvcTitle)},directives:[n.bd],styles:["[_nghost-%COMP%]{display:block}.card-content[_ngcontent-%COMP%]{margin:-11px -12px -13px}"]}),g})()},316:(Q,_,o)=>{o.d(_,{C:()=>C});var l=o(9808),n=o(7484),v=o(5e3);let C=(()=>{class g{}return g.\u0275fac=function(d){return new(d||g)},g.\u0275mod=v.oAB({type:g}),g.\u0275inj=v.cJS({imports:[[l.ez,n.vh]]}),g})()},8664:(Q,_,o)=>{o.d(_,{I:()=>k});var l=o(6654),n=o(5e3),v=o(9808),C=o(325),g=o(8481),f=o(3610),d=o(4850),t=o(712),I=o(7484),z=o(647),S=o(3193),b=o(3098),T=o(6550),A=o(1894),u=o(8144),m=o(6949);function M(i,c){if(1&i&&(n._UZ(0,"i",13),n._uU(1)),2&i){const r=n.oxw().ngIf;n.xp6(1),n.hij(" ",r.name," ")}}function O(i,c){if(1&i&&n._UZ(0,"cvc-gene-tag",14),2&i){const r=n.oxw().ngIf;n.Q6J("enablePopover",!1)("gene",r.gene)}}function J(i,c){1&i&&(n.TgZ(0,"span"),n._uU(1,",\xa0"),n.qZA())}function F(i,c){if(1&i&&(n.TgZ(0,"span"),n._uU(1),n.YNc(2,J,2,0,"span",1),n.qZA()),2&i){const r=c.$implicit,h=c.last;n.xp6(1),n.hij(" ",r,""),n.xp6(1),n.Q6J("ngIf",!h)}}function P(i,c){if(1&i&&(n.TgZ(0,"nz-descriptions-item",15),n.YNc(1,F,3,2,"span",16),n.qZA()),2&i){const r=n.oxw().ngIf;n.xp6(1),n.Q6J("ngForOf",r.variantAliases)}}function N(i,c){if(1&i&&(n.TgZ(0,"nz-descriptions-item",17),n.TgZ(1,"cvc-link-tag",18),n._uU(2),n.qZA(),n.qZA()),2&i){const r=n.oxw().ngIf;n.xp6(1),n.MGl("href","https://reg.genome.network/allele/",r.alleleRegistryId,".html"),n.xp6(1),n.hij(" ",r.alleleRegistryId," ")}}function U(i,c){if(1&i&&(n.TgZ(0,"a",19),n.TgZ(1,"nz-tag",20),n._UZ(2,"i",21),n._uU(3),n.qZA(),n.qZA()),2&i){const r=n.oxw().ngIf;n.MGl("routerLink","/variants/",r.id,"/flags"),n.xp6(3),n.hij(" Flags (",r.flags.totalCount,") ")}}function V(i,c){if(1&i&&(n.TgZ(0,"a",19),n.TgZ(1,"nz-tag",22),n._UZ(2,"i",23),n._uU(3),n.qZA(),n.qZA()),2&i){const r=n.oxw().ngIf;n.MGl("routerLink","/variants/",r.id,"/revisions"),n.xp6(3),n.hij(" Revisions (",r.revisions.totalCount,") ")}}function E(i,c){if(1&i&&(n.TgZ(0,"a",19),n.TgZ(1,"nz-tag",24),n._UZ(2,"i",25),n._uU(3),n.qZA(),n.qZA()),2&i){const r=n.oxw().ngIf;n.MGl("routerLink","/variants/",r.id,"/comments"),n.xp6(3),n.hij(" Comments (",r.comments.totalCount,") ")}}function Y(i,c){if(1&i&&(n.ynx(0),n.TgZ(1,"nz-card",2),n.YNc(2,M,2,1,"ng-template",null,3,n.W1O),n.YNc(4,O,1,2,"ng-template",null,4,n.W1O),n.TgZ(6,"nz-descriptions",5),n.YNc(7,P,2,1,"nz-descriptions-item",6),n.YNc(8,N,3,2,"nz-descriptions-item",7),n.TgZ(9,"nz-descriptions-item",8),n._uU(10),n.qZA(),n.qZA(),n.TgZ(11,"nz-row",9),n.TgZ(12,"nz-col",10),n.TgZ(13,"nz-space",11),n.YNc(14,U,4,2,"a",12),n.YNc(15,V,4,2,"a",12),n.YNc(16,E,4,2,"a",12),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.BQk()),2&i){const r=c.ngIf,h=n.MAs(3),y=n.MAs(5);n.xp6(1),n.Q6J("nzTitle",h)("nzExtra",y),n.xp6(5),n.Q6J("nzColumn",2),n.xp6(1),n.Q6J("ngIf",r.variantAliases.length>0),n.xp6(1),n.Q6J("ngIf",r.alleleRegistryId),n.xp6(2),n.hij(" ",r.evidenceItems.totalCount," ")}}let D=(()=>{class i{constructor(r){this.gql=r}ngOnInit(){if(void 0===this.variantId)throw new Error("Must pass a variant ID into the variant popover component.");this.variant$=this.gql.watch({variantId:this.variantId}).valueChanges.pipe((0,d.U)(({data:r})=>r.variant))}}return i.\u0275fac=function(r){return new(r||i)(n.Y36(t.ZYZ))},i.\u0275cmp=n.Xpm({type:i,selectors:[["cvc-variant-popover"]],inputs:{variantId:"variantId"},decls:3,vars:3,consts:[["id","popover-content"],[4,"ngIf"],["nzBordered","false","id","card-content",3,"nzTitle","nzExtra"],["cardTitle",""],["gene",""],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","Aliases","nzSpan","2",4,"ngIf"],["nzTitle","Allele Registry ID","nzSpan","2",4,"ngIf"],["nzTitle","Evidence Items","nzSpan","2"],["id","entity-child-counts"],["nzSpan","24"],["nzSize","small"],[3,"routerLink",4,"nzSpaceItem"],["nz-icon","","nzType","civic:variant"],[3,"enablePopover","gene"],["nzTitle","Aliases","nzSpan","2"],[4,"ngFor","ngForOf"],["nzTitle","Allele Registry ID","nzSpan","2"],["tooltip","View on the ClinGen Allele Registry",3,"href"],[3,"routerLink"],["nzColor","red"],["nz-icon","","nzType","civic-flag"],["nzColor","orange"],["nz-icon","","nzType","civic-revision"],["nzColor","blue"],["nz-icon","","nzType","civic-comment"]],template:function(r,h){1&r&&(n.TgZ(0,"div",0),n.YNc(1,Y,17,6,"ng-container",1),n.ALo(2,"ngrxPush"),n.qZA()),2&r&&(n.xp6(1),n.Q6J("ngIf",n.lcZ(2,1,h.variant$)))},directives:[v.O5,I.bd,z.Ls,S.H,b.R7,b.uj,v.sg,T.l,A.SK,A.t3,u.NU,u.$1,C.yS,g.j],pipes:[m.fM],styles:["[_nghost-%COMP%]{display:block;margin:-8px -12px}[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}[_nghost-%COMP%]     .ant-descriptions-view{border:none}[_nghost-%COMP%]     #entity-child-counts{border-top:1px solid #f0f0f0;padding:8px}[_nghost-%COMP%]     #entity-child-counts nz-space{width:100%}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child nz-tag{margin-right:0}.popover-text[_ngcontent-%COMP%]{width:100%;padding:8px;border-bottom:1px solid #f0f0f0}#popover-content[_ngcontent-%COMP%]{min-width:350px;max-width:500px;min-height:125px}"]}),i})();function j(i,c){}function B(i,c){if(1&i&&(n.ynx(0),n.TgZ(1,"a",5),n.YNc(2,j,0,0,"ng-template",6),n.qZA(),n.BQk()),2&i){const r=n.oxw(),h=n.MAs(2);n.xp6(1),n.Q6J("routerLink",r.variant.link),n.xp6(1),n.Q6J("ngTemplateOutlet",h)}}function L(i,c){}function R(i,c){if(1&i){const r=n.EpF();n.TgZ(0,"nz-tag",9),n.NdJ("nzOnClose",function(y){return n.CHM(r),n.oxw(2).itemClosed(y)}),n.YNc(1,L,0,0,"ng-template",6),n.qZA()}if(2&i){n.oxw();const r=n.MAs(2),h=n.oxw(),y=n.MAs(8);n.Q6J("nzPopoverMouseEnterDelay",h.onCloseClicked?0:.5)("nzPopoverContent",r)("nzMode",h.onCloseClicked?"closeable":"default"),n.xp6(1),n.Q6J("ngTemplateOutlet",y)}}function W(i,c){if(1&i&&n._UZ(0,"cvc-variant-popover",11),2&i){const r=n.oxw(3);n.Q6J("variantId",r.variant.id)}}function $(i,c){if(1&i&&n.YNc(0,W,1,1,"cvc-variant-popover",10),2&i){const r=n.oxw(2);n.Q6J("ngIf",r.enablePopover)}}function w(i,c){if(1&i&&(n.YNc(0,R,2,4,"nz-tag",7),n.YNc(1,$,1,1,"ng-template",null,8,n.W1O)),2&i){const r=n.oxw(),h=n.MAs(4);n.Q6J("ngIf",r.enablePopover)("ngIfElse",h)}}function H(i,c){}function K(i,c){if(1&i){const r=n.EpF();n.TgZ(0,"nz-tag",12),n.NdJ("nzOnClose",function(y){return n.CHM(r),n.oxw().itemClosed(y)}),n.YNc(1,H,0,0,"ng-template",6),n.qZA()}if(2&i){const r=n.oxw(),h=n.MAs(8);n.Q6J("nzMode",r.onCloseClicked?"closeable":"default"),n.xp6(1),n.Q6J("ngTemplateOutlet",h)}}function X(i,c){}function q(i,c){if(1&i&&n.YNc(0,X,0,0,"ng-template",6),2&i){n.oxw();const r=n.MAs(2);n.Q6J("ngTemplateOutlet",r)}}function G(i,c){if(1&i&&(n._UZ(0,"i",13),n._uU(1)),2&i){const r=n.oxw();n.xp6(1),n.hij(" ",r.variant.name,"\n")}}let k=(()=>{class i extends l.a{constructor(){super(),this.enablePopover=!0}idFunction(){return this.variant.id}ngOnInit(){if(super.ngOnInit(),void 0===this.variant)throw new Error("cvc-variant-tag requires LinkableVariant input, none supplied.")}}return i.\u0275fac=function(r){return new(r||i)},i.\u0275cmp=n.Xpm({type:i,selectors:[["cvc-variant-tag"]],inputs:{variant:"variant",enablePopover:"enablePopover"},features:[n.qOj],decls:9,vars:2,consts:[[4,"ngIf","ngIfElse"],["tag",""],["noPopover",""],["unlinked",""],["tagContent",""],[3,"routerLink"],[3,"ngTemplateOutlet"],["nz-popover","","nzPopoverTrigger","hover",3,"nzPopoverMouseEnterDelay","nzPopoverContent","nzMode","nzOnClose",4,"ngIf","ngIfElse"],["popoverContent",""],["nz-popover","","nzPopoverTrigger","hover",3,"nzPopoverMouseEnterDelay","nzPopoverContent","nzMode","nzOnClose"],[3,"variantId",4,"ngIf"],[3,"variantId"],[3,"nzMode","nzOnClose"],["nz-icon","","nzType","civic-variant","nzTheme","twotone","nzTwotoneColor","#33B358"]],template:function(r,h){if(1&r&&(n.YNc(0,B,3,2,"ng-container",0),n.YNc(1,w,3,2,"ng-template",null,1,n.W1O),n.YNc(3,K,2,2,"ng-template",null,2,n.W1O),n.YNc(5,q,1,1,"ng-template",null,3,n.W1O),n.YNc(7,G,2,1,"ng-template",null,4,n.W1O)),2&r){const y=n.MAs(6);n.Q6J("ngIf",h.linked)("ngIfElse",y)}},directives:[v.O5,C.yS,v.tP,g.j,f.lU,D,z.Ls],styles:[""]}),i})()},4867:(Q,_,o)=>{o.d(_,{Q:()=>u});var l=o(9808),n=o(325),v=o(8481),C=o(647),g=o(3610),f=o(6949),d=o(7484),t=o(1894),I=o(3098),z=o(8144),S=o(3309),b=o(3630),T=o(5e3);let A=(()=>{class m{}return m.\u0275fac=function(O){return new(O||m)},m.\u0275mod=T.oAB({type:m}),m.\u0275inj=T.cJS({imports:[[l.ez,n.Bz,f.WG,d.vh,t.Jb,I.q6,v.X,C.PV,z.zf,S.U,b.X]]}),m})(),u=(()=>{class m{}return m.\u0275fac=function(O){return new(O||m)},m.\u0275mod=T.oAB({type:m}),m.\u0275inj=T.cJS({imports:[[l.ez,n.Bz,v.X,g.$6,C.PV,A]]}),m})()},1076:(Q,_,o)=>{o.r(_),o.d(_,{PhenotypesModule:()=>ot});var l=o(9808),n=o(325),v=o(3630),C=o(5630),g=o(6949),f=o(647),d=o(1945),t=o(5e3);let I=(()=>{class e{}return e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[l.ez,n.Bz,g.WG,d.KJ,f.PV,v.X,C.D]]}),e})();var z=o(8144),S=o(316),b=o(767),T=o(9441);let A=(()=>{class e{}return e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[l.ez,z.zf,S.C,b.Q,T.s]]}),e})();var u=o(592),m=o(4125),M=o(6286);let O=(()=>{class e{}return e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[l.ez,g.WG,u.HQ,m.k,M.y,v.X]]}),e})();var J=o(1894);let F=(()=>{class e{}return e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[l.ez,d.KJ,f.PV,J.Jb,C.D,O]]}),e})();var P=o(373),N=o(1059),U=o(712),V=o(8992),E=o(6550);function Y(e,s){if(1&e&&(t.ynx(0),t._UZ(1,"cvc-section-navigation",1),t.TgZ(2,"nz-page-header",2),t.TgZ(3,"nz-page-header-title"),t._UZ(4,"i",3),t._uU(5),t.qZA(),t.TgZ(6,"nz-page-header-extra"),t.TgZ(7,"cvc-link-tag",4),t._uU(8),t.qZA(),t.qZA(),t.TgZ(9,"nz-page-header-content"),t.TgZ(10,"div",5),t._UZ(11,"router-outlet"),t.qZA(),t.qZA(),t.qZA(),t.BQk()),2&e){const a=s.ngIf;t.xp6(1),t.Q6J("displayName",a.name),t.xp6(4),t.hij(" ",a.name," "),t.xp6(2),t.Q6J("href",a.url),t.xp6(1),t.hij(" ",a.hpoId," ")}}let D=(()=>{class e{constructor(a,p){this.route=a,this.gql=p,this.routeSub=this.route.params.subscribe(x=>{this.phenotypeId=+x.phenotypeId,this.queryRef=this.gql.watch({phenotypeId:this.phenotypeId});let Z=this.queryRef.valueChanges;this.loading$=Z.pipe((0,P.j)("loading"),(0,N.O)(!0)),this.phenotype$=Z.pipe((0,P.j)("data","phenotype"))})}ngOnDestroy(){this.routeSub.unsubscribe()}}return e.\u0275fac=function(a){return new(a||e)(t.Y36(n.gz),t.Y36(U.WGV))},e.\u0275cmp=t.Xpm({type:e,selectors:[["cvc-phenotypes-detail"]],decls:2,vars:3,consts:[[4,"ngIf"],[3,"displayName"],[1,"site-page-header"],["nz-icon","","nzType","civic:phenotype"],["tooltip","View in the HPO",3,"href"],[1,"content"]],template:function(a,p){1&a&&(t.YNc(0,Y,12,4,"ng-container",0),t.ALo(1,"ngrxPush")),2&a&&t.Q6J("ngIf",t.lcZ(1,1,p.phenotype$))},directives:[l.O5,V.I,d.$O,d.u9,f.Ls,d.Jp,E.l,d.u5,n.lC],pipes:[g.fM],styles:["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]     nz-page-header:first-of-type{background-color:#fff;border-radius:8px}[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card{width:100%}[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card .card-grid-cell{width:50%}[_nghost-%COMP%]     nz-page-header:first-of-type nz-page-header-title.flagged{padding-left:.75em}[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-content{padding-top:0}[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-heading-extra nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs{margin:0 -16px 12px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap{padding-left:16px;padding-right:16px;line-height:24px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab{padding:1px 8px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab .anticon{margin-right:0}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-extra-content{margin-right:16px}"]}),e})();var j=o(3154),B=o(8929),L=o(4850),R=o(13),W=o(2166),$=o(7956);function w(e,s){if(1&e&&(t.TgZ(0,"cvc-link-tag",13),t._uU(1),t.qZA()),2&e){const a=t.oxw().$implicit;t.Q6J("href",a.url),t.xp6(1),t.hij(" ",a.hpoId," ")}}function H(e,s){1&e&&t._uU(0,"--")}function K(e,s){if(1&e&&(t.TgZ(0,"tr"),t.TgZ(1,"td"),t._UZ(2,"cvc-phenotype-tag",10),t.qZA(),t.TgZ(3,"td"),t.YNc(4,w,2,2,"cvc-link-tag",11),t.YNc(5,H,1,0,"ng-template",null,12,t.W1O),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.qZA()),2&e){const a=s.$implicit,p=t.MAs(6);t.xp6(2),t.Q6J("phenotype",a),t.xp6(2),t.Q6J("ngIf",a.hpoId)("ngIfElse",p),t.xp6(4),t.hij(" ",a.evidenceCount," "),t.xp6(2),t.hij(" ",a.assertionCount," ")}}let X=(()=>{class e{constructor(a){this.gql=a,this.initialPageSize=25,this.debouncedQuery=new B.xQ,this.sortColumns=U.lYz}ngOnInit(){this.queryRef=this.gql.watch({first:this.initialPageSize});let a=this.queryRef.valueChanges;this.phenotypes$=a.pipe((0,P.j)("data","phenotypes","edges"),(0,L.U)(p=>p.map(x=>x.node))),this.isLoading$=a.pipe((0,P.j)("loading"),(0,N.O)(!0)),this.totalCount$=a.pipe((0,P.j)("data","phenotypes","totalCount")),this.pageInfo$=a.pipe((0,P.j)("data","phenotypes","pageInfo")),this.debouncedQuery.pipe((0,R.b)(500)).subscribe(p=>this.refresh()),this.textInputCallback=()=>{this.debouncedQuery.next()}}onModelChanged(){this.debouncedQuery.next()}onSortChanged(a){var p;null===(p=this.queryRef)||void 0===p||p.refetch({sortBy:(0,j._)(a)})}refresh(){var a;null===(a=this.queryRef)||void 0===a||a.refetch({name:this.hpoNameFilter,hpoId:this.hpoIdFilter})}ngOnDestroy(){this.debouncedQuery.unsubscribe()}loadMore(a){var p;null===(p=this.queryRef)||void 0===p||p.fetchMore({variables:{after:a}})}}return e.\u0275fac=function(a){return new(a||e)(t.Y36(U.B97))},e.\u0275cmp=t.Xpm({type:e,selectors:[["cvc-phenotypes-table"]],decls:23,vars:21,consts:[[3,"nzData","nzLoading","nzFrontPagination","nzShowPagination"],["phenotypesTable",""],[3,"nzSortOrderChange"],["nzWidth","40%",3,"nzColumnKey","nzSortFn"],["nzWidth","10%","nzRight","",3,"nzColumnKey","nzSortFn"],["nz-icon","","nzType","civic:evidence","nz-tooltip","","nzTooltipTitle","Evidence count"],["nz-icon","","nzType","civic:assertion","nz-tooltip","","nzTooltipTitle","Assertion count"],["placeholderText","Search Name",3,"inputModel","onInputChanged","inputModelChange"],["placeholderText","Search HPO ID",3,"inputModel","onInputChanged","inputModelChange"],[4,"ngFor","ngForOf"],[3,"phenotype"],["tooltip","View in the HPO",3,"href",4,"ngIf","ngIfElse"],["noHpo",""],["tooltip","View in the HPO",3,"href"]],template:function(a,p){if(1&a&&(t.TgZ(0,"nz-table",0,1),t.ALo(2,"ngrxPush"),t.ALo(3,"ngrxPush"),t.TgZ(4,"thead",2),t.NdJ("nzSortOrderChange",function(Z){return p.onSortChanged(Z)}),t.TgZ(5,"tr"),t.TgZ(6,"th",3),t._uU(7," Name "),t.qZA(),t.TgZ(8,"th",3),t._uU(9," HPO ID "),t.qZA(),t.TgZ(10,"th",4),t._UZ(11,"i",5),t.qZA(),t.TgZ(12,"th",4),t._UZ(13,"i",6),t.qZA(),t.qZA(),t.TgZ(14,"tr"),t.TgZ(15,"th"),t.TgZ(16,"cvc-clearable-input-filter",7),t.NdJ("inputModelChange",function(Z){return p.hpoNameFilter=Z}),t.qZA(),t.qZA(),t.TgZ(17,"th"),t.TgZ(18,"cvc-clearable-input-filter",8),t.NdJ("inputModelChange",function(Z){return p.hpoIdFilter=Z}),t.qZA(),t.qZA(),t._UZ(19,"th"),t._UZ(20,"th"),t.qZA(),t.qZA(),t.TgZ(21,"tbody"),t.YNc(22,K,11,5,"tr",9),t.qZA(),t.qZA()),2&a){const x=t.MAs(1);t.Q6J("nzData",t.lcZ(2,17,p.phenotypes$))("nzLoading",t.lcZ(3,19,p.isLoading$))("nzFrontPagination",!1)("nzShowPagination",!1),t.xp6(6),t.Q6J("nzColumnKey",p.sortColumns.Name)("nzSortFn",!0),t.xp6(2),t.Q6J("nzColumnKey",p.sortColumns.HpoId)("nzSortFn",!0),t.xp6(2),t.Q6J("nzColumnKey",p.sortColumns.EvidenceItemCount)("nzSortFn",!0),t.xp6(2),t.Q6J("nzColumnKey",p.sortColumns.AssertionCount)("nzSortFn",!0),t.xp6(4),t.Q6J("inputModel",p.hpoNameFilter)("onInputChanged",p.textInputCallback),t.xp6(2),t.Q6J("inputModel",p.hpoIdFilter)("onInputChanged",p.textInputCallback),t.xp6(4),t.Q6J("ngForOf",x.data)}},directives:[u.N8,u.Om,u.$Z,u.Uo,u._C,u.qD,u.qn,W.p,u.p0,l.sg,$.i,l.O5,E.l],pipes:[g.fM],styles:["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]     nz-page-header:first-of-type{background-color:#fff;border-radius:8px}[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card{width:100%}[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card .card-grid-cell{width:50%}[_nghost-%COMP%]     nz-page-header:first-of-type nz-page-header-title.flagged{padding-left:.75em}[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-content{padding-top:0}[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-heading-extra nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs{margin:0 -16px 12px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap{padding-left:16px;padding-right:16px;line-height:24px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab{padding:1px 8px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab .anticon{margin-right:0}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-extra-content{margin-right:16px}"]}),e})(),q=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["phenotypes-home"]],decls:10,vars:1,consts:[[1,"site-page-header"],["nz-icon","","nzType","civic:phenotype"],["nz-row",""],["nz-col","",3,"nzSpan"],[1,"content"]],template:function(a,p){1&a&&(t._UZ(0,"cvc-section-navigation"),t.TgZ(1,"nz-page-header",0),t.TgZ(2,"nz-page-header-title"),t._UZ(3,"i",1),t._uU(4," Phenotypes "),t.qZA(),t.TgZ(5,"nz-page-header-content"),t.TgZ(6,"div",2),t.TgZ(7,"div",3),t.TgZ(8,"div",4),t._UZ(9,"cvc-phenotypes-table"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&a&&(t.xp6(7),t.Q6J("nzSpan",24))},directives:[V.I,d.$O,d.u9,f.Ls,d.u5,J.SK,J.t3,X],styles:["[_nghost-%COMP%]{display:block}"]}),e})();var G=o(4805),k=o(3756),i=o(8965);function c(e,s){if(1&e&&(t.TgZ(0,"cvc-entity-table-card",5),t._UZ(1,"cvc-assertions-table",6),t.qZA()),2&e){t.oxw();const a=t.MAs(3),p=t.oxw();t.Q6J("cvcTitle",a),t.xp6(1),t.Q6J("phenotypeId",p.phenotypeId)}}function r(e,s){1&e&&(t._UZ(0,"i",7),t._uU(1," Phenotype Assertions "))}function h(e,s){if(1&e&&(t.TgZ(0,"cvc-entity-table-card",5),t._UZ(1,"cvc-evidence-table",6),t.qZA()),2&e){t.oxw();const a=t.MAs(6),p=t.oxw();t.Q6J("cvcTitle",a),t.xp6(1),t.Q6J("phenotypeId",p.phenotypeId)}}function y(e,s){1&e&&(t._UZ(0,"i",7),t._uU(1," Phenotype Evidence "))}function tt(e,s){1&e&&(t.TgZ(0,"nz-space",1),t.YNc(1,c,2,2,"cvc-entity-table-card",2),t.YNc(2,r,2,0,"ng-template",null,3,t.W1O),t.YNc(4,h,2,2,"cvc-entity-table-card",2),t.YNc(5,y,2,0,"ng-template",null,4,t.W1O),t.qZA())}const nt=[{path:"",component:(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["cvc-phenotypes"]],decls:1,vars:0,template:function(a,p){1&a&&t._UZ(0,"router-outlet")},directives:[n.lC],styles:["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]     nz-page-header:first-of-type{background-color:#fff;border-radius:8px}[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card{width:100%}[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card .card-grid-cell{width:50%}[_nghost-%COMP%]     nz-page-header:first-of-type nz-page-header-title.flagged{padding-left:.75em}[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-content{padding-top:0}[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-heading-extra nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs{margin:0 -16px 12px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap{padding-left:16px;padding-right:16px;line-height:24px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab{padding:1px 8px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab .anticon{margin-right:0}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-extra-content{margin-right:16px}"]}),e})(),children:[{path:"",redirectTo:"home",pathMatch:"full"},{path:"home",component:q,data:{breadcrumb:"Home"}},{path:":phenotypeId",component:D,data:{breadcrumb:"DISPLAYNAME"},children:[{path:"",redirectTo:"summary",pathMatch:"full"},{path:"summary",component:(()=>{class e{constructor(a){this.route=a,this.routeSub=this.route.params.subscribe(p=>{this.phenotypeId=+p.phenotypeId})}ngOnDestroy(){this.routeSub.unsubscribe()}}return e.\u0275fac=function(a){return new(a||e)(t.Y36(n.gz))},e.\u0275cmp=t.Xpm({type:e,selectors:[["cvc-phenotypes-summary"]],decls:1,vars:1,consts:[["nzSize","middle","nzDirection","vertical","class","space-align-block",4,"ngIf"],["nzSize","middle","nzDirection","vertical",1,"space-align-block"],[3,"cvcTitle",4,"nzSpaceItem"],["assertionsCardTitle",""],["evidenceCardTitle",""],[3,"cvcTitle"],[3,"phenotypeId"],["nz-icon","","nzType","civic:phenotype"]],template:function(a,p){1&a&&t.YNc(0,tt,7,0,"nz-space",0),2&a&&t.Q6J("ngIf",p.phenotypeId)},directives:[l.O5,z.NU,z.$1,G._,k.x,i.a],styles:["[_nghost-%COMP%]{display:block}"]}),e})(),data:{breadcrumb:"Summary"}}]}]}];let et=(()=>{class e{}return e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[n.Bz.forChild(nt)],n.Bz]}),e})(),ot=(()=>{class e{}return e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[l.ez,n.Bz,et,F,I,A]]}),e})()}}]);