"use strict";(self.webpackChunkmain=self.webpackChunkmain||[]).push([[9987],{3220:(N,M,e)=>{e.d(M,{l:()=>C});var n=e(4650),m=e(6895),t=e(6672),f=e(6581),O=e(6715);const _=function(r){return{"matched-tag":r}};function y(r,g){if(1&r&&(n.TgZ(0,"span",2)(1,"nz-tag"),n._uU(2),n.qZA()()),2&r){const p=g.$implicit,T=n.oxw();n.Q6J("ngClass",n.VKq(2,_,T.matchingText&&p.toLowerCase().includes(T.matchingText))),n.xp6(2),n.Oqu(p)}}function P(r,g){if(1&r&&(n.TgZ(0,"span"),n._uU(1),n.qZA()),2&r){const p=n.oxw(2);n.xp6(1),n.hij(" ",p.matchedHiddenCount," of ")}}function Z(r,g){if(1&r&&(n.TgZ(0,"nz-tag",5),n._uU(1," +"),n.YNc(2,P,2,1,"span",6),n._uU(3),n.qZA()),2&r){const p=n.oxw(),T=n.MAs(5);n.Q6J("nzPopoverMouseEnterDelay",0)("nzPopoverContent",T),n.xp6(2),n.Q6J("ngIf",p.matchedHiddenCount>0),n.xp6(1),n.hij("",p.hiddenCount," ")}}function A(r,g){if(1&r&&(n.TgZ(0,"div",2)(1,"nz-tag"),n._uU(2),n.qZA()()),2&r){const p=g.$implicit,T=n.oxw(2);n.Q6J("ngClass",n.VKq(2,_,T.matchingText&&p.toLowerCase().includes(T.matchingText))),n.xp6(2),n.Oqu(p)}}function w(r,g){if(1&r&&(n.TgZ(0,"div",7)(1,"cvc-tag-list",0),n.YNc(2,A,3,4,"div",1),n.qZA()()),2&r){const p=n.oxw();n.xp6(2),n.Q6J("ngForOf",p.hiddenTags)}}class C{constructor(g){this.cdr=g,this.maxDisplayCount=2,this.matchedHiddenCount=0}ngOnChanges(g){this.calculateDisplayedTags()}calculateDisplayedTags(){if(this.displayedTags=this.tags?.slice(0,this.maxDisplayCount),this.hiddenTags=this.tags?.slice(this.maxDisplayCount),this.hiddenCount=this.hiddenTags?.length,this.matchingText){if(this.hiddenTags){let g=this.matchingText.toLowerCase();this.hiddenTags.forEach(p=>{p.toLowerCase().includes(g)&&(this.matchedHiddenCount+=1)})}}else this.matchedHiddenCount=0}}C.\u0275fac=function(g){return new(g||C)(n.Y36(n.sBO))},C.\u0275cmp=n.Xpm({type:C,selectors:[["cvc-plain-tag-overflow"]],inputs:{tags:"tags",matchingText:"matchingText",maxDisplayCount:"maxDisplayCount"},features:[n.TTD],decls:6,vars:5,consts:[["size","xs"],[3,"ngClass",4,"ngFor","ngForOf"],[3,"ngClass"],["class","overflow-tag","nz-popover","","nzPopoverPlacement","top","nzPopoverTrigger","hover",3,"nzPopoverMouseEnterDelay","nzPopoverContent",4,"ngIf"],["additionalTagPopover",""],["nz-popover","","nzPopoverPlacement","top","nzPopoverTrigger","hover",1,"overflow-tag",3,"nzPopoverMouseEnterDelay","nzPopoverContent"],[4,"ngIf"],[1,"popover-tag-list"]],template:function(g,p){1&g&&(n.TgZ(0,"cvc-tag-list",0),n.YNc(1,y,3,4,"span",1),n.TgZ(2,"span",2),n.YNc(3,Z,4,4,"nz-tag",3),n.qZA(),n.YNc(4,w,3,1,"ng-template",null,4,n.W1O),n.qZA()),2&g&&(n.xp6(1),n.Q6J("ngForOf",p.displayedTags),n.xp6(1),n.Q6J("ngClass",n.VKq(3,_,p.matchedHiddenCount>0)),n.xp6(1),n.Q6J("ngIf",p.hiddenCount&&p.hiddenCount>0))},dependencies:[m.mk,m.sg,m.O5,t.j,f.lU,O.$],styles:[".matched-tag[_ngcontent-%COMP%]{font-weight:700}nz-tag.overflow-tag[_ngcontent-%COMP%]:hover{cursor:help}.popover-tag-list[_ngcontent-%COMP%]{max-width:600px}"],changeDetection:0})},3650:(N,M,e)=>{e.d(M,{T:()=>_});var n=e(6895),m=e(897),t=e(6672),f=e(6581),O=e(4650);class _{}_.\u0275fac=function(P){return new(P||_)},_.\u0275mod=O.oAB({type:_}),_.\u0275inj=O.cJS({imports:[n.ez,t.X,f.$6,m.$]})},392:(N,M,e)=>{e.d(M,{T:()=>E});var n=e(4650),m=e(6895),t=e(6672),f=e(6581),O=e(6715),_=e(5797),y=e(7491),P=e(5749),Z=e(3193),A=e(8664),w=e(7701);const C=function(c){return{"matched-tag":c}},r=function(c,s){return{tagType:c,tag:s}};function g(c,s){if(1&c&&(n.TgZ(0,"div",2),n.GkF(1,6),n.qZA()),2&c){const l=s.$implicit,v=n.oxw(),z=n.MAs(7);n.Q6J("ngClass",n.VKq(3,C,v.matchingText&&l.name.toLowerCase().includes(v.matchingText))),n.xp6(1),n.Q6J("ngTemplateOutlet",z)("ngTemplateOutletContext",n.WLB(5,r,v.tagType,l))}}function p(c,s){if(1&c&&(n.TgZ(0,"span"),n._uU(1),n.qZA()),2&c){const l=n.oxw(2);n.xp6(1),n.hij(" ",l.matchedHiddenCount," of ")}}function T(c,s){if(1&c&&(n.TgZ(0,"nz-tag",7),n._uU(1," +"),n.YNc(2,p,2,1,"span",8),n._uU(3),n.qZA()),2&c){const l=n.oxw(),v=n.MAs(5);n.Q6J("nzPopoverContent",v),n.xp6(2),n.Q6J("ngIf",l.matchedHiddenCount>0),n.xp6(1),n.hij("",l.hiddenCount," ")}}function $(c,s){if(1&c&&(n.TgZ(0,"div",2),n.ynx(1,10),n.GkF(2,6),n.BQk(),n.qZA()),2&c){const l=s.$implicit,v=n.oxw(2),z=n.MAs(7);n.Q6J("ngClass",n.VKq(4,C,v.matchingText&&l.name.toLowerCase().includes(v.matchingText))),n.xp6(1),n.Q6J("ngSwitch",v.tagType),n.xp6(1),n.Q6J("ngTemplateOutlet",z)("ngTemplateOutletContext",n.WLB(6,r,v.tagType,l))}}function R(c,s){if(1&c&&(n.TgZ(0,"div",9)(1,"cvc-tag-list",0),n.YNc(2,$,3,9,"div",1),n.qZA()()),2&c){const l=n.oxw();n.xp6(2),n.Q6J("ngForOf",l.hiddenTags)}}function L(c,s){if(1&c&&(n.ynx(0),n._UZ(1,"cvc-therapy-tag",12),n.BQk()),2&c){const l=n.oxw().tag;n.xp6(1),n.Q6J("therapy",l)("truncateLongName",!0)}}function D(c,s){if(1&c&&(n.ynx(0),n._UZ(1,"cvc-disease-tag",13),n.BQk()),2&c){const l=n.oxw().tag;n.xp6(1),n.Q6J("disease",l)("truncateLongName",!0)}}function U(c,s){if(1&c&&(n.ynx(0),n._UZ(1,"cvc-gene-tag",14),n.BQk()),2&c){const l=n.oxw().tag;n.xp6(1),n.Q6J("gene",l)("truncateLongName",!0)}}function B(c,s){if(1&c&&(n.ynx(0),n._UZ(1,"cvc-organization-tag",15),n.BQk()),2&c){const l=n.oxw().tag;n.xp6(1),n.Q6J("org",l)}}function b(c,s){if(1&c&&(n.ynx(0),n._UZ(1,"cvc-variant-tag",16),n.BQk()),2&c){const l=n.oxw().tag;n.xp6(1),n.Q6J("variant",l)}}function J(c,s){if(1&c&&(n.ynx(0),n._UZ(1,"cvc-variant-type-tag",17),n.BQk()),2&c){const l=n.oxw().tag;n.xp6(1),n.Q6J("variantType",l)}}function H(c,s){1&c&&(n.ynx(0,10),n.YNc(1,L,2,2,"ng-container",11),n.YNc(2,D,2,2,"ng-container",11),n.YNc(3,U,2,2,"ng-container",11),n.YNc(4,B,2,1,"ng-container",11),n.YNc(5,b,2,1,"ng-container",11),n.YNc(6,J,2,1,"ng-container",11),n.BQk()),2&c&&(n.Q6J("ngSwitch",s.tagType),n.xp6(1),n.Q6J("ngSwitchCase","therapy"),n.xp6(1),n.Q6J("ngSwitchCase","disease"),n.xp6(1),n.Q6J("ngSwitchCase","gene"),n.xp6(1),n.Q6J("ngSwitchCase","organization"),n.xp6(1),n.Q6J("ngSwitchCase","variant"),n.xp6(1),n.Q6J("ngSwitchCase","variant-type"))}class E{constructor(s){this.cdr=s,this.maxDisplayCount=2,this.thisOne=!1,this.matchedHiddenCount=0}ngOnChanges(s){this.calculateDisplayedTags()}calculateDisplayedTags(){if(this.displayedTags=this.tags?.slice(0,this.maxDisplayCount),this.hiddenTags=this.tags?.slice(this.maxDisplayCount),this.hiddenCount=this.hiddenTags?.length,this.matchingText){if(this.matchedHiddenCount=0,this.hiddenTags){let s=this.matchingText.toLowerCase();this.hiddenTags.forEach(l=>{l.name.toLowerCase().includes(s)&&(this.matchedHiddenCount+=1)})}}else this.matchedHiddenCount=0;this.cdr.detectChanges()}}E.\u0275fac=function(s){return new(s||E)(n.Y36(n.sBO))},E.\u0275cmp=n.Xpm({type:E,selectors:[["cvc-tag-overflow"]],inputs:{tags:"tags",maxDisplayCount:"maxDisplayCount",matchingText:"matchingText",tagType:"tagType",thisOne:"thisOne"},features:[n.TTD],decls:8,vars:5,consts:[["size","xs"],[3,"ngClass",4,"ngFor","ngForOf"],[3,"ngClass"],["class","overflow-tag","nz-popover","","nzPopoverPlacement","top","nzPopoverTrigger","hover",3,"nzPopoverContent",4,"ngIf"],["additionalTagPopover",""],["tagTemplate",""],[3,"ngTemplateOutlet","ngTemplateOutletContext"],["nz-popover","","nzPopoverPlacement","top","nzPopoverTrigger","hover",1,"overflow-tag",3,"nzPopoverContent"],[4,"ngIf"],[1,"popover-tag-list"],[3,"ngSwitch"],[4,"ngSwitchCase"],[3,"therapy","truncateLongName"],[3,"disease","truncateLongName"],[3,"gene","truncateLongName"],[3,"org"],[3,"variant"],[3,"variantType"]],template:function(s,l){1&s&&(n.TgZ(0,"cvc-tag-list",0),n.YNc(1,g,2,8,"div",1),n.TgZ(2,"div",2),n.YNc(3,T,4,3,"nz-tag",3),n.qZA(),n.YNc(4,R,3,1,"ng-template",null,4,n.W1O),n.qZA(),n.YNc(6,H,7,7,"ng-template",null,5,n.W1O)),2&s&&(n.xp6(1),n.Q6J("ngForOf",l.displayedTags),n.xp6(1),n.Q6J("ngClass",n.VKq(3,C,l.matchedHiddenCount>0)),n.xp6(1),n.Q6J("ngIf",l.hiddenCount&&l.hiddenCount>0))},dependencies:[m.mk,m.sg,m.O5,m.tP,m.RF,m.n9,t.j,f.lU,O.$,_.T,y.n,P.m,Z.H,A.I,w.j],styles:[".matched-tag[_ngcontent-%COMP%]{font-weight:700}nz-tag.overflow-tag[_ngcontent-%COMP%]:hover{cursor:help}.popover-tag-list[_ngcontent-%COMP%]{max-width:600px}"],changeDetection:0})},9040:(N,M,e)=>{e.r(M),e.d(M,{GenesModule:()=>Q});var n=e(6895),m=e(9116),t=e(4650);class f{constructor(){}}f.\u0275fac=function(a){return new(a||f)},f.\u0275cmp=t.Xpm({type:f,selectors:[["app-genes"]],decls:1,vars:0,template:function(a,o){1&a&&t._UZ(0,"router-outlet")},dependencies:[m.lC],encapsulation:2});var O=e(7926),_=e(5630),y=e(9444),P=e(6616),Z=e(3679),A=e(1102),w=e(5655),C=e(6903),r=e(8823);class g{}g.\u0275fac=function(a){return new(a||g)},g.\u0275mod=t.oAB({type:g}),g.\u0275inj=t.cJS({imports:[n.ez,P.sL,A.PV,C.zf,r.ZJ,w.KJ,Z.Jb,y.s,_.D,O.r]});var S,p=e(7044),T=e(8992),$=e(655),R=e(3154),L=e(7630),D=e(9933),U=e(7579),B=e(1135),b=e(3240),J=e(1884),H=e(2529),E=e(5684),c=e(9300),s=e(4004),l=e(8372),v=e(1365),z=e(6579),W=e(1971),x=e(6675),Y=e(6672),j=e(7570),V=e(5851),X=e(7451),q=e(2166),k=e(3193),tt=e(3388),nt=e(3220),et=e(3667),ot=e(9947),at=e(392),it=e(2635);function ct(i,a){}function lt(i,a){if(1&i&&(t.ynx(0),t.TgZ(1,"nz-card",5),t.YNc(2,ct,0,0,"ng-template",6),t.qZA(),t.BQk()),2&i){t.oxw();const o=t.MAs(6),h=t.MAs(8),d=t.MAs(4);t.xp6(1),t.Q6J("nzTitle",o)("nzExtra",h),t.xp6(1),t.Q6J("ngTemplateOutlet",d)}}function st(i,a){}const rt=function(i){return{height:i}};function gt(i,a){if(1&i&&(t.TgZ(0,"div",7)(1,"nz-card",8),t.YNc(2,st,0,0,"ng-template",6),t.qZA()()),2&i){const o=t.oxw(),h=t.MAs(6),d=t.MAs(8),u=t.MAs(4);t.Q6J("ngStyle",t.VKq(4,rt,o.cvcHeight)),t.xp6(1),t.Q6J("nzTitle",h)("nzExtra",d),t.xp6(1),t.Q6J("ngTemplateOutlet",u)}}function pt(i,a){if(1&i&&(t.TgZ(0,"tr",30)(1,"td",26),t._UZ(2,"cvc-gene-tag",31),t.qZA(),t.TgZ(3,"td",26),t._UZ(4,"cvc-plain-tag-overflow",32),t.qZA(),t.TgZ(5,"td"),t._UZ(6,"cvc-tag-overflow",33),t.qZA(),t.TgZ(7,"td"),t._UZ(8,"cvc-tag-overflow",34),t.qZA(),t.TgZ(9,"td",35),t._uU(10),t.qZA(),t.TgZ(11,"td",35),t._uU(12),t.qZA(),t.TgZ(13,"td",35),t._uU(14),t.qZA(),t.TgZ(15,"td",35),t._uU(16),t.qZA()()),2&i){const o=a.$implicit,h=t.oxw(2);t.xp6(2),t.Q6J("gene",o),t.xp6(2),t.Q6J("tags",o.geneAliases)("matchingText",h.aliasInput),t.xp6(2),t.Q6J("maxDisplayCount",1)("tags",o.diseases)("matchingText",h.diseaseInput),t.xp6(2),t.Q6J("maxDisplayCount",1)("tags",o.therapies)("matchingText",h.therapyInput),t.xp6(2),t.hij(" ",o.molecularProfileCount," "),t.xp6(2),t.hij(" ",o.variantCount," "),t.xp6(2),t.hij(" ",o.evidenceItemCount," "),t.xp6(2),t.hij(" ",o.assertionCount," ")}}const dt=function(){return[]},ht=function(){return{x:"680px",y:"800px"}},K=function(){return["descend","ascend",null]};function mt(i,a){if(1&i){const o=t.EpF();t.TgZ(0,"nz-table",9,10),t.NdJ("cvcTableScrollOnScroll",function(d){t.CHM(o);const u=t.oxw();return t.KtG(u.scrollEvent$.next(d))}),t.ALo(2,"ngrxPush"),t.ALo(3,"ngrxPush"),t.ALo(4,"ngrxPush"),t.ALo(5,"ngrxPush"),t.TgZ(6,"thead",11),t.NdJ("nzSortOrderChange",function(d){t.CHM(o);const u=t.oxw();return t.KtG(u.sortChange$.next(d))}),t.TgZ(7,"tr",12)(8,"th",13),t._uU(9," Name "),t.qZA(),t.TgZ(10,"th",14),t._uU(11," Aliases "),t.qZA(),t.TgZ(12,"th",15),t._uU(13,"Diseases"),t.qZA(),t.TgZ(14,"th",16),t._uU(15,"Therapies"),t.qZA(),t.TgZ(16,"th",17),t._UZ(17,"i",18),t._uU(18," Count "),t.qZA(),t.TgZ(19,"th",19),t._UZ(20,"i",20),t._uU(21," Count "),t.qZA(),t.TgZ(22,"th",21),t._UZ(23,"i",22),t._uU(24," Count "),t.qZA(),t.TgZ(25,"th",23),t._UZ(26,"i",24),t._uU(27," Count "),t.qZA()(),t.TgZ(28,"tr",25)(29,"th",26)(30,"cvc-clearable-input-filter",27),t.NdJ("inputModelChange",function(d){t.CHM(o);const u=t.oxw();return t.KtG(u.nameInput=d)})("inputModelChange",function(){t.CHM(o);const d=t.oxw();return t.KtG(d.filterChange$.next())}),t.qZA()(),t.TgZ(31,"th",26)(32,"cvc-clearable-input-filter",27),t.NdJ("inputModelChange",function(d){t.CHM(o);const u=t.oxw();return t.KtG(u.aliasInput=d)})("inputModelChange",function(){t.CHM(o);const d=t.oxw();return t.KtG(d.filterChange$.next())}),t.qZA()(),t.TgZ(33,"th")(34,"cvc-clearable-input-filter",27),t.NdJ("inputModelChange",function(d){t.CHM(o);const u=t.oxw();return t.KtG(u.diseaseInput=d)})("inputModelChange",function(){t.CHM(o);const d=t.oxw();return t.KtG(d.filterChange$.next())}),t.qZA()(),t.TgZ(35,"th")(36,"cvc-clearable-input-filter",27),t.NdJ("inputModelChange",function(d){t.CHM(o);const u=t.oxw();return t.KtG(u.therapyInput=d)})("inputModelChange",function(){t.CHM(o);const d=t.oxw();return t.KtG(d.filterChange$.next())}),t.qZA()(),t._UZ(37,"th",28)(38,"th",28)(39,"th",28)(40,"th",28),t.qZA()(),t.TgZ(41,"tbody"),t.YNc(42,pt,17,13,"ng-template",29),t.qZA()()}if(2&i){const o=t.oxw();t.Q6J("nzData",t.lcZ(2,29,o.row$)||t.DdM(37,dt))("nzLoading",!t.lcZ(3,31,o.row$))("cvcAutoHeightTable",25)("nzVirtualItemSize",29)("cvcTableScrollQueryRef",o.queryRef)("cvcTableScrollPageInfo",t.lcZ(4,33,o.pageInfo$))("cvcTableScrollToIndex",t.lcZ(5,35,o.scrollIndex$))("nzVirtualForTrackBy",o.trackByIndex)("nzScroll",t.DdM(38,ht))("nzFrontPagination",!1)("nzShowPagination",!1),t.xp6(8),t.Q6J("nzColumnKey",o.sortColumns.EntrezSymbol)("nzSortFn",!0),t.xp6(8),t.Q6J("nzColumnKey",o.sortColumns.MolecularProfileCount)("nzSortFn",!0)("nzSortDirections",t.DdM(39,K)),t.xp6(3),t.Q6J("nzColumnKey",o.sortColumns.VariantCount)("nzSortFn",!0)("nzSortDirections",t.DdM(40,K)),t.xp6(3),t.Q6J("nzColumnKey",o.sortColumns.EvidenceItemCount)("nzSortFn",!0)("nzSortDirections",t.DdM(41,K)),t.xp6(3),t.Q6J("nzColumnKey",o.sortColumns.AssertionCount)("nzSortFn",!0)("nzSortDirections",t.DdM(42,K)),t.xp6(5),t.Q6J("inputModel",o.nameInput),t.xp6(2),t.Q6J("inputModel",o.aliasInput),t.xp6(2),t.Q6J("inputModel",o.diseaseInput),t.xp6(2),t.Q6J("inputModel",o.therapyInput)}}function _t(i,a){}function Ct(i,a){if(1&i&&(t.ynx(0),t.YNc(1,_t,0,0,"ng-template",6),t.BQk()),2&i){const o=t.oxw(2);t.xp6(1),t.Q6J("ngTemplateOutlet",o.cvcTitleTemplate)}}function ut(i,a){if(1&i&&(t.ynx(0),t._uU(1),t.BQk()),2&i){const o=t.oxw(2);t.xp6(1),t.hij(" ",o.cvcTitle," ")}}function vt(i,a){if(1&i&&(t.YNc(0,Ct,2,1,"ng-container",36),t.YNc(1,ut,2,1,"ng-container",36),t.TgZ(2,"span",37),t._UZ(3,"cvc-table-counts",38),t.qZA()),2&i){const o=t.oxw();t.Q6J("ngIf",o.cvcTitleTemplate),t.xp6(1),t.Q6J("ngIf",o.cvcTitle),t.xp6(2),t.Q6J("cvcTableCountsConnection",o.connection$)}}function ft(i,a){1&i&&(t.TgZ(0,"nz-tag",41),t._UZ(1,"i",42),t.TgZ(2,"span"),t._uU(3,"Loading\u2026"),t.qZA()())}function Tt(i,a){if(1&i&&(t.YNc(0,ft,4,0,"nz-tag",39),t.ALo(1,"ngrxPush"),t._UZ(2,"cvc-no-more-rows",40),t.ALo(3,"ngrxPush")),2&i){const o=t.oxw();t.Q6J("ngIf",t.lcZ(1,2,o.moreLoading$)),t.xp6(2),t.Q6J("cvcShowTag",t.lcZ(3,4,o.noMoreRows$))}}let F=((S=class{set initialUserFilters(a){a&&Object.assign(this,a)}constructor(a,o){this.query=a,this.cdr=o,this.initialPageSize=35,this.isScrolling=!1,this.sortColumns=L.Fvz,this.debouncedQuery=new U.x,this.noMoreRows$=new B.X(!1),this.scrollEvent$=new B.X("stop"),this.sortChange$=new U.x,this.filterChange$=new U.x,this.scrollIndex$=new U.x}ngOnInit(){this.queryRef=this.query.watch({first:this.initialPageSize}),this.result$=this.queryRef.valueChanges,this.initialLoading$=this.result$.pipe((0,z.j)("loading"),(0,J.x)(),(0,H.o)(a=>!1!==a,!0)),this.moreLoading$=this.result$.pipe((0,z.j)("loading"),(0,J.x)(),(0,E.T)(2)),this.connection$=this.result$.pipe((0,z.j)("data","browseGenes"),(0,c.h)(b.ep)),this.row$=this.connection$.pipe((0,z.j)("edges"),(0,c.h)(b.ep),(0,s.U)(a=>a.map(o=>o.node))),this.pageInfo$=this.connection$.pipe((0,z.j)("pageInfo"),(0,c.h)(b.ep)),this.sortChange$.pipe((0,D.t)(this)).subscribe(a=>{this.queryRef.refetch({sortBy:(0,R._)(a)})}),this.filterChange$.pipe((0,l.b)(500),(0,D.t)(this)).subscribe(()=>{this.refresh()}),this.scrollEvent$.pipe((0,s.U)(a=>"stop"!==a),(0,J.x)(),(0,D.t)(this)).subscribe(a=>{this.isScrolling=a,this.cdr.detectChanges()}),this.scrollEvent$.pipe((0,c.h)(a=>"bottom"===a),(0,v.M)(this.pageInfo$),(0,s.U)(([a,o])=>o),(0,D.t)(this)).subscribe(a=>{a.hasNextPage||(this.noMoreRows$.next(!0),this.cdr.detectChanges(),setInterval(()=>this.noMoreRows$.next(!1)))})}refresh(){this.queryRef.refetch({entrezSymbol:this.nameInput,geneAlias:this.aliasInput,diseaseName:this.diseaseInput,therapyName:this.therapyInput}).then(()=>this.scrollIndex$.next(0)),this.cdr.detectChanges()}onModelUpdated(a){this.debouncedQuery.next()}trackByIndex(a,o){return o?.id}}).\u0275fac=function(a){return new(a||S)(t.Y36(L.q8c),t.Y36(t.sBO))},S.\u0275cmp=t.Xpm({type:S,selectors:[["cvc-genes-table"]],inputs:{cvcHeight:"cvcHeight",cvcTitleTemplate:"cvcTitleTemplate",cvcTitle:"cvcTitle",initialPageSize:"initialPageSize",initialUserFilters:"initialUserFilters"},decls:9,vars:2,consts:[[4,"ngIf","ngIfElse"],["setHeightCard",""],["table",""],["titleTemplate",""],["extraTemplate",""],["nzSize","small","cvcAutoHeightCard","","cvcAutoHeightTarget","viewport",3,"nzTitle","nzExtra"],[3,"ngTemplateOutlet"],[1,"card-container",3,"ngStyle"],["cvcAutoHeightCard","","nzSize","small",3,"nzTitle","nzExtra"],["nzSize","small","cvcTableScroll","",3,"nzData","nzLoading","cvcAutoHeightTable","nzVirtualItemSize","cvcTableScrollQueryRef","cvcTableScrollPageInfo","cvcTableScrollToIndex","nzVirtualForTrackBy","nzScroll","nzFrontPagination","nzShowPagination","cvcTableScrollOnScroll"],["virtualTable",""],[3,"nzSortOrderChange"],[1,"col-header-row"],["nzWidth","150px","nzLeft","",3,"nzColumnKey","nzSortFn"],["nzLeft","","nzWidth","200px"],["nzWidth","250px"],["nzWidth","225px"],["nzWidth","75px","nzRight","","nzAlign","right","nz-tooltip","","nzTooltipTitle","Molecular Profile Count",3,"nzColumnKey","nzSortFn","nzSortDirections"],["nz-icon","","nzType","civic-molecularprofile"],["nzWidth","75px","nzRight","","nzAlign","right","nz-tooltip","","nzTooltipTitle","Variant Count",3,"nzColumnKey","nzSortFn","nzSortDirections"],["nz-icon","","nzType","civic-variant"],["nzWidth","75px","nzRight","","nzAlign","right","nz-tooltip","","nzTooltipTitle","Evidence Count",3,"nzColumnKey","nzSortFn","nzSortDirections"],["nz-icon","","nzType","civic-evidence"],["nzWidth","75px","nzRight","","nzAlign","right","nz-tooltip","","nzTooltipTitle","Assertion Count",3,"nzColumnKey","nzSortFn","nzSortDirections"],["nz-icon","","nzType","civic-assertion"],[1,"filter-row"],["nzLeft",""],[3,"inputModel","inputModelChange"],["nzRight",""],["nz-virtual-scroll",""],[1,"data-row"],[3,"gene"],[3,"tags","matchingText"],["tagType","disease",3,"maxDisplayCount","tags","matchingText"],["tagType","therapy",3,"maxDisplayCount","tags","matchingText"],["nzRight","","nzAlign","right"],[4,"ngIf"],[1,"table-info"],[3,"cvcTableCountsConnection"],["nzColor","processing",4,"ngIf"],[3,"cvcShowTag"],["nzColor","processing"],["nz-icon","","nzType","sync","nzSpin",""]],template:function(a,o){if(1&a&&(t.YNc(0,lt,3,3,"ng-container",0),t.YNc(1,gt,3,6,"ng-template",null,1,t.W1O),t.YNc(3,mt,43,43,"ng-template",null,2,t.W1O),t.YNc(5,vt,4,3,"ng-template",null,3,t.W1O),t.YNc(7,Tt,4,6,"ng-template",null,4,t.W1O)),2&a){const h=t.MAs(2);t.Q6J("ngIf",!o.cvcHeight)("ngIfElse",h)}},dependencies:[n.O5,n.tP,n.PC,p.w,W.bd,A.Ls,x.N8,x.qD,x.Uo,x._C,x.Om,x.p0,x.$Z,x.zu,x.qn,x.UX,Y.j,j.SY,V.D,X.q,q.p,k.H,tt.H,nt.l,et.B,ot.y,at.T,it.fM],styles:["nz-card[_ngcontent-%COMP%]:first-of-type     .ant-card-body{padding:0;margin-top:1px}.table-info[_ngcontent-%COMP%]{margin-left:.5rem}tr.col-header-row[_ngcontent-%COMP%]   th.ant-table-cell[_ngcontent-%COMP%]{white-space:nowrap}tr.col-header-row[_ngcontent-%COMP%]   th.ant-table-cell.align-right[_ngcontent-%COMP%]     .ant-table-column-title{text-align:right}tr.filter-row[_ngcontent-%COMP%]   th.ant-table-cell[_ngcontent-%COMP%]{padding:3px 4px}tr.filter-row[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   nz-filter-trigger[_ngcontent-%COMP%]     span.ant-dropdown-trigger{margin-left:0;padding-right:12px}tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell[_ngcontent-%COMP%]{white-space:nowrap}tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell[_ngcontent-%COMP%]   .anticon.attribute-icon[_ngcontent-%COMP%]{color:#595959}tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell.overflow-ellipsis[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis}tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell.button-cell[_ngcontent-%COMP%]{padding:0}tr.data-row[_ngcontent-%COMP%]   td.align-right[_ngcontent-%COMP%], tr.col-header-row[_ngcontent-%COMP%]   th.ant-table-cell[_ngcontent-%COMP%]   .align-right[_ngcontent-%COMP%], tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell[_ngcontent-%COMP%]   .align-right[_ngcontent-%COMP%], tr.filter-row[_ngcontent-%COMP%]   th.ant-table-cell[_ngcontent-%COMP%]   .align-right[_ngcontent-%COMP%]{text-align:right}[_nghost-%COMP%]{display:block}"],changeDetection:0}),S);F=(0,$.gn)([(0,D.c)()],F);var xt=e(160);function zt(i,a){1&i&&(t.TgZ(0,"a",13),t._UZ(1,"i",14),t._uU(2," View Gene Model Docs "),t.qZA())}function Mt(i,a){1&i&&(t.TgZ(0,"a",15),t._UZ(1,"i",14),t._uU(2," View Gene Curation Docs "),t.qZA())}class G{constructor(){}ngOnInit(){}}G.\u0275fac=function(a){return new(a||G)},G.\u0275cmp=t.Xpm({type:G,selectors:[["cvc-genes-home"]],decls:20,vars:5,consts:[[1,"site-page-header"],[1,"header-content"],["nzFlex","64px",1,"header-icon"],["nz-icon","","nzTheme","twotone","nzType","civic-gene",3,"nzTwotoneColor"],["nzFlex","0 1 600px",1,"header-description"],["nz-typography","","nzEllipsis","","nzExpandable","",3,"nzEllipsisRows"],["nzFlex","auto",1,"header-links"],["nzDirection","vertical",1,"docs-buttons"],["nz-button","","href","https://civic.readthedocs.io/en/latest/model/genes.html","target","_blank","nzSize","small","nzBlock","",4,"nzSpaceItem"],["nz-button","","href","https://civic.readthedocs.io/en/latest/curating/genes.html","target","_blank","nzSize","small","nzBlock","",4,"nzSpaceItem"],[3,"nzSpan"],[1,"content"],["cvcTitle","Browse All Genes"],["nz-button","","href","https://civic.readthedocs.io/en/latest/model/genes.html","target","_blank","nzSize","small","nzBlock",""],["nz-icon","","nzType","link","nzTheme","outline"],["nz-button","","href","https://civic.readthedocs.io/en/latest/curating/genes.html","target","_blank","nzSize","small","nzBlock",""]],template:function(a,o){1&a&&(t._UZ(0,"cvc-section-navigation"),t.TgZ(1,"nz-page-header",0)(2,"nz-page-header-content")(3,"nz-row",1)(4,"nz-col",2),t._UZ(5,"i",3),t.ALo(6,"entityColor"),t.qZA(),t.TgZ(7,"nz-col",4)(8,"h2"),t._uU(9,"Genes"),t.qZA(),t.TgZ(10,"p",5),t._uU(11," CIViC Genes include a gene-level summary, a link to the Drug Gene Interation Database, and extensive gene details from MyGene.info. "),t.qZA()(),t.TgZ(12,"nz-col",6)(13,"nz-space",7),t.YNc(14,zt,3,0,"a",8),t.YNc(15,Mt,3,0,"a",9),t.qZA()()(),t.TgZ(16,"nz-row")(17,"nz-col",10)(18,"div",11),t._UZ(19,"cvc-genes-table",12),t.qZA()()()()()),2&a&&(t.xp6(5),t.Q6J("nzTwotoneColor",t.lcZ(6,3,"Gene")),t.xp6(5),t.Q6J("nzEllipsisRows",2),t.xp6(7),t.Q6J("nzSpan",24))},dependencies:[P.ix,p.w,A.Ls,C.NU,C.$1,r.ZU,w.$O,w.u5,Z.t3,Z.SK,T.I,F,xt.a],styles:["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]     nz-page-header:first-of-type{background-color:#fff;border-radius:8px}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content{flex-wrap:nowrap;background-color:#f0f0f0;border-top-left-radius:8px;border-top-right-radius:8px;margin:-12px -16px 16px;border-bottom:1px solid #bfbfbf}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-icon{padding:12px 0 12px 12px}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-icon i{width:100%}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-icon i   svg{width:100%;height:100%}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-description{padding:12px}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-description h2{color:#262626;margin:-8px 0 0;font-weight:500}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-description p{color:#262626;margin:-2px 0 0;padding:0;font-size:95%;line-height:1.5em}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-links{text-align:right;padding:12px}[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card{width:100%}[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card .card-grid-cell{width:50%}[_nghost-%COMP%]     nz-page-header:first-of-type nz-page-header-title.flagged{padding-left:.75em}[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-content{padding-top:0;padding-bottom:12px}[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-heading-extra nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs{margin:0 -16px 12px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap{padding-left:16px;padding-right:16px;line-height:24px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab{padding:1px 8px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab .anticon{margin-right:0}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-extra-content{margin-right:16px}"]});const Ot=[{path:"",component:f,children:[{path:"",redirectTo:"home",pathMatch:"full"},{path:"home",component:G,data:{breadcrumb:"Home"}},{path:":geneId",data:{breadcrumb:"DISPLAYNAME"},children:[{path:"",loadChildren:()=>Promise.all([e.e(9001),e.e(9397),e.e(6724),e.e(9716),e.e(5566),e.e(5291),e.e(2043),e.e(4355),e.e(208),e.e(4203)]).then(e.bind(e,1505)).then(i=>i.GenesDetailModule)},{path:"revise",loadChildren:()=>Promise.all([e.e(8592),e.e(9409)]).then(e.bind(e,6316)).then(i=>i.GenesReviseModule),data:{breadcrumb:"Revise"}}]}]}];class I{}I.\u0275fac=function(a){return new(a||I)},I.\u0275mod=t.oAB({type:I}),I.\u0275inj=t.cJS({imports:[m.Bz.forChild(Ot),g,m.Bz]});class Q{}Q.\u0275fac=function(a){return new(a||Q)},Q.\u0275mod=t.oAB({type:Q}),Q.\u0275inj=t.cJS({imports:[n.ez,I]})}}]);