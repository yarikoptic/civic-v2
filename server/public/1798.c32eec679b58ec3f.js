"use strict";(self.webpackChunkmain=self.webpackChunkmain||[]).push([[1798],{5749:(j,_,i)=>{i.d(_,{m:()=>a});var n=i(4650),s=i(6895),t=i(9116),m=i(6672),u=i(1102),v=i(6581),C=i(3240),x=i(4004),z=i(9300),y=i(7630),h=i(1971),d=i(3679),T=i(9194),f=i(6550),O=i(7881),P=i(2635);const I=function(o,e){return{displayName:o,profileImagePath:e}};function M(o,e){if(1&o&&(n._UZ(0,"cvc-user-avatar",12),n.TgZ(1,"span",13),n._uU(2),n.qZA()),2&o){const p=n.oxw().ngIf;n.Q6J("user",n.WLB(2,I,p.name,p.profileImagePath)),n.xp6(2),n.Oqu(p.name)}}function Z(o,e){if(1&o&&(n.TgZ(0,"span"),n._uU(1),n.qZA()),2&o){const p=e.ngIf;n.xp6(1),n.Oqu(p)}}function A(o,e){if(1&o&&(n.ynx(0),n.TgZ(1,"cvc-link-tag",14),n._uU(2),n.qZA(),n.BQk()),2&o){const p=n.oxw().ngIf;n.xp6(1),n.Q6J("href",p.url),n.xp6(1),n.hij(" ",p.name," ")}}function Q(o,e){if(1&o&&(n.ynx(0),n.TgZ(1,"nz-card",4),n.YNc(2,M,3,5,"ng-template",null,5,n.W1O),n.TgZ(4,"nz-row")(5,"nz-col",6)(6,"div",7)(7,"p",8),n.YNc(8,Z,2,1,"span",9),n.qZA()()()(),n.TgZ(9,"nz-descriptions",10)(10,"nz-descriptions-item",11),n.YNc(11,A,3,2,"ng-container",9),n.qZA()()(),n.BQk()),2&o){const p=e.ngIf,r=n.MAs(3);n.oxw();const B=n.MAs(4),S=n.MAs(6);n.xp6(1),n.Q6J("nzTitle",r),n.xp6(7),n.Q6J("ngIf",p.description)("ngIfElse",B),n.xp6(1),n.Q6J("nzColumn",2),n.xp6(2),n.Q6J("ngIf",p.url)("ngIfElse",S)}}function c(o,e){1&o&&n._uU(0," Organization has not provided a description.\n")}function N(o,e){1&o&&n._uU(0," -- ")}class g{constructor(e){this.gql=e}ngOnInit(){if(void 0===this.orgId)throw new Error("cvc-org-popover requires orgId input.");this.org$=this.gql.watch({orgId:this.orgId}).valueChanges.pipe((0,x.U)(({data:e})=>e?.organization),(0,z.h)(C.ep))}}function Y(o,e){}function J(o,e){if(1&o&&(n.ynx(0),n.TgZ(1,"a",4),n.YNc(2,Y,0,0,"ng-template",5),n.qZA(),n.BQk()),2&o){const p=n.oxw(),r=n.MAs(2);n.xp6(1),n.MGl("routerLink","/organizations/",p.org.id,""),n.xp6(1),n.Q6J("ngTemplateOutlet",r)}}function V(o,e){}function w(o,e){if(1&o&&n._UZ(0,"cvc-organization-popover",9),2&o){const p=n.oxw(3);n.Q6J("orgId",p.org.id)}}function U(o,e){if(1&o&&n.YNc(0,w,1,1,"cvc-organization-popover",8),2&o){const p=n.oxw(2);n.Q6J("ngIf",p.enablePopover)}}function E(o,e){if(1&o&&(n.TgZ(0,"nz-tag",6),n.YNc(1,V,0,0,"ng-template",5),n.qZA(),n.YNc(2,U,1,1,"ng-template",null,7,n.W1O)),2&o){const p=n.MAs(3);n.oxw();const r=n.MAs(6);n.Q6J("nzPopoverContent",p),n.xp6(1),n.Q6J("ngTemplateOutlet",r)}}function W(o,e){}function L(o,e){if(1&o&&n.YNc(0,W,0,0,"ng-template",5),2&o){n.oxw();const p=n.MAs(2);n.Q6J("ngTemplateOutlet",p)}}function l(o,e){if(1&o&&(n._UZ(0,"i",10),n._uU(1)),2&o){const p=n.oxw();n.xp6(1),n.hij(" ",p.org.name,"\n")}}g.\u0275fac=function(e){return new(e||g)(n.Y36(y.X5f))},g.\u0275cmp=n.Xpm({type:g,selectors:[["cvc-organization-popover"]],inputs:{orgId:"orgId"},decls:7,vars:3,consts:[["id","popover-content"],[4,"ngIf"],["noDesc",""],["noHomepage",""],["nzBordered","false","id","card-content",3,"nzTitle"],["cardTitle",""],["nzSpan","24"],[1,"popover-text"],["nz-typography",""],[4,"ngIf","ngIfElse"],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","Homepage"],["size","default",3,"user"],["nz-typography","","nzStyle","default",1,"display-name"],[3,"href"]],template:function(e,p){1&e&&(n.TgZ(0,"div",0),n.YNc(1,Q,12,6,"ng-container",1),n.ALo(2,"ngrxPush"),n.qZA(),n.YNc(3,c,1,0,"ng-template",null,2,n.W1O),n.YNc(5,N,1,0,"ng-template",null,3,n.W1O)),2&e&&(n.xp6(1),n.Q6J("ngIf",n.lcZ(2,1,p.org$)))},dependencies:[s.O5,h.bd,d.t3,d.SK,T.R7,T.uj,f.l,O.L,P.fM],styles:["[_nghost-%COMP%]{display:block;margin:-8px -12px}[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}[_nghost-%COMP%]     .ant-descriptions-view{border:none}[_nghost-%COMP%]     #entity-child-counts{border-top:1px solid #f0f0f0;padding:8px}[_nghost-%COMP%]     #entity-child-counts nz-space{width:100%}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child nz-tag{margin-right:0}.popover-text[_ngcontent-%COMP%]{width:100%;padding:8px;border-bottom:1px solid #f0f0f0}#popover-content[_ngcontent-%COMP%]{min-width:350px;max-width:500px;min-height:125px}"]});class a{constructor(){this.linked=!0,this.enablePopover=!0}ngOnInit(){if(void 0===this.org)throw new Error("cvc-org-tag requires valid TagLinkableOrganization input, none provided.")}}a.\u0275fac=function(e){return new(e||a)},a.\u0275cmp=n.Xpm({type:a,selectors:[["cvc-organization-tag"]],inputs:{org:"org",linked:"linked",enablePopover:"enablePopover"},decls:7,vars:2,consts:[[4,"ngIf","ngIfElse"],["tag",""],["unlinked",""],["tagContent",""],[3,"routerLink"],[3,"ngTemplateOutlet"],["nz-popover","",3,"nzPopoverContent"],["orgPopover",""],[3,"orgId",4,"ngIf"],[3,"orgId"],["nz-icon","","nzType","civic-organization","nzTheme","twotone","nzTwotoneColor","#58A0C4"]],template:function(e,p){if(1&e&&(n.YNc(0,J,3,2,"ng-container",0),n.YNc(1,E,4,2,"ng-template",null,1,n.W1O),n.YNc(3,L,1,1,"ng-template",null,2,n.W1O),n.YNc(5,l,2,1,"ng-template",null,3,n.W1O)),2&e){const r=n.MAs(4);n.Q6J("ngIf",p.linked)("ngIfElse",r)}},dependencies:[s.O5,s.tP,t.rH,m.j,u.Ls,v.lU,g],styles:["[_nghost-%COMP%]{display:inline-block}"]})},7701:(j,_,i)=>{i.d(_,{j:()=>l});var n=i(6654),s=i(9771),t=i(4650),m=i(6895),u=i(9116),v=i(1102),C=i(6672),x=i(6581),z=i(4004),y=i(9300),h=i(3240),d=i(7630),T=i(1971),f=i(9194),O=i(6550),P=i(2635),I=i(160);function M(a,o){if(1&a&&(t._UZ(0,"i",7),t.ALo(1,"entityColor"),t._uU(2)),2&a){const e=t.oxw().ngIf;t.Q6J("nzTwotoneColor",t.lcZ(1,2,"VariantType")),t.xp6(2),t.hij(" ",e.name," ")}}function Z(a,o){if(1&a&&(t.TgZ(0,"cvc-link-tag",9),t._uU(1),t.qZA()),2&a){const e=t.oxw(2).ngIf;t.Q6J("href",e.url),t.xp6(1),t.hij(" ",e.soid," ")}}function A(a,o){if(1&a&&t.YNc(0,Z,2,2,"cvc-link-tag",8),2&a){const e=t.oxw().ngIf;t.Q6J("ngIf","N/A"!=e.soid)}}function Q(a,o){if(1&a&&(t.ynx(0),t.TgZ(1,"nz-card",2),t.YNc(2,M,3,4,"ng-template",null,3,t.W1O),t.YNc(4,A,1,1,"ng-template",null,4,t.W1O),t.TgZ(6,"nz-descriptions",5)(7,"nz-descriptions-item",6),t._uU(8),t.qZA()()(),t.BQk()),2&a){const e=o.ngIf,p=t.MAs(3),r=t.MAs(5);t.xp6(1),t.Q6J("nzTitle",p)("nzExtra",r),t.xp6(5),t.Q6J("nzColumn",2),t.xp6(2),t.hij(" ",e.variantCount," ")}}class c{constructor(o){this.gql=o}ngOnInit(){if(null==this.variantTypeId)throw new Error("cvc-variant-type-popover requires valid variantTypeId input.");this.variantType$=this.gql.watch({variantTypeId:this.variantTypeId}).valueChanges.pipe((0,z.U)(({data:o})=>o?.variantTypePopover),(0,y.h)(h.ep))}}function N(a,o){}function g(a,o){if(1&a&&(t.ynx(0),t.TgZ(1,"a",5),t.YNc(2,N,0,0,"ng-template",6),t.qZA(),t.BQk()),2&a){const e=t.oxw(),p=t.MAs(2);t.xp6(1),t.Q6J("routerLink",e.variantType.link),t.xp6(1),t.Q6J("ngTemplateOutlet",p)}}function Y(a,o){}function J(a,o){if(1&a&&t._UZ(0,"cvc-variant-type-popover",9),2&a){const e=t.oxw(2);t.Q6J("variantTypeId",e.variantType.id)}}function V(a,o){if(1&a&&(t.TgZ(0,"nz-tag",7),t.YNc(1,Y,0,0,"ng-template",6),t.qZA(),t.YNc(2,J,1,1,"ng-template",null,8,t.W1O)),2&a){const e=t.MAs(3),p=t.oxw(),r=t.MAs(8);t.Q6J("nzPopoverMouseEnterDelay",.5)("nzPopoverContent",e)("nzPopoverTrigger",p.enablePopover?"hover":null),t.xp6(1),t.Q6J("ngTemplateOutlet",r)}}function w(a,o){}function U(a,o){if(1&a&&t.YNc(0,w,0,0,"ng-template",6),2&a){t.oxw();const e=t.MAs(2);t.Q6J("ngTemplateOutlet",e)}}function E(a,o){}function W(a,o){if(1&a&&(t.TgZ(0,"nz-tag"),t.YNc(1,E,0,0,"ng-template",6),t.qZA()),2&a){t.oxw();const e=t.MAs(8);t.xp6(1),t.Q6J("ngTemplateOutlet",e)}}function L(a,o){if(1&a&&(t._UZ(0,"i",10),t._uU(1)),2&a){const e=t.oxw();t.Q6J("nzTwotoneColor",e.iconColor),t.xp6(1),t.hij(" ",e.variantType.name,"\n")}}c.\u0275fac=function(o){return new(o||c)(t.Y36(d.tw_))},c.\u0275cmp=t.Xpm({type:c,selectors:[["cvc-variant-type-popover"]],inputs:{variantTypeId:"variantTypeId"},decls:3,vars:3,consts:[["id","popover-content"],[4,"ngIf"],["nzBordered","false","id","card-content",3,"nzTitle","nzExtra"],["cardTitle",""],["linkout",""],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","Variants","nzSpan","2"],["nz-icon","","nzTheme","twotone","nzType","civic-varianttype",3,"nzTwotoneColor"],["tooltip","View on SequenceOntology.org",3,"href",4,"ngIf"],["tooltip","View on SequenceOntology.org",3,"href"]],template:function(o,e){1&o&&(t.TgZ(0,"div",0),t.YNc(1,Q,9,4,"ng-container",1),t.ALo(2,"ngrxPush"),t.qZA()),2&o&&(t.xp6(1),t.Q6J("ngIf",t.lcZ(2,1,e.variantType$)))},dependencies:[m.O5,v.Ls,T.bd,f.R7,f.uj,O.l,P.fM,I.a],styles:["[_nghost-%COMP%]{display:block;margin:-8px -12px}[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}[_nghost-%COMP%]     .ant-descriptions-view{border:none}[_nghost-%COMP%]     #entity-child-counts{border-top:1px solid #f0f0f0;padding:8px}[_nghost-%COMP%]     #entity-child-counts nz-space{width:100%}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child nz-tag{margin-right:0}.popover-text[_ngcontent-%COMP%]{width:100%;padding:8px;border-bottom:1px solid #f0f0f0}#popover-content[_ngcontent-%COMP%]{min-width:350px;max-width:500px;min-height:125px}"]});class l extends n.a{set variantType(o){if(!o)throw new Error("variant-type-tag variantType Input requires LinkableVariantType.");this._variantType=o}get variantType(){return this._variantType}idFunction(){return this.variantType.id}constructor(){super(),this.linked=!0,this.enablePopover=!0,this.iconColor=(0,s.f)("VariantType")}}l.\u0275fac=function(o){return new(o||l)},l.\u0275cmp=t.Xpm({type:l,selectors:[["cvc-variant-type-tag"]],inputs:{variantType:"variantType",linked:"linked",enablePopover:"enablePopover"},features:[t.qOj],decls:9,vars:2,consts:[[4,"ngIf","ngIfElse"],["tag",""],["unlinked",""],["noPopover",""],["tagContent",""],[3,"routerLink"],[3,"ngTemplateOutlet"],["nz-popover","","nzPopoverPlacement","right",3,"nzPopoverMouseEnterDelay","nzPopoverContent","nzPopoverTrigger"],["variantTypePopover",""],[3,"variantTypeId"],["nz-icon","","nzType","civic-varianttype","nzTheme","twotone",3,"nzTwotoneColor"]],template:function(o,e){if(1&o&&(t.YNc(0,g,3,2,"ng-container",0),t.YNc(1,V,4,4,"ng-template",null,1,t.W1O),t.YNc(3,U,1,1,"ng-template",null,2,t.W1O),t.YNc(5,W,2,1,"ng-template",null,3,t.W1O),t.YNc(7,L,2,2,"ng-template",null,4,t.W1O)),2&o){const p=t.MAs(4);t.Q6J("ngIf",e.linked)("ngIfElse",p)}},dependencies:[m.O5,m.tP,u.rH,v.Ls,C.j,x.lU,c],styles:["[_nghost-%COMP%]{display:block}"],changeDetection:0})}}]);