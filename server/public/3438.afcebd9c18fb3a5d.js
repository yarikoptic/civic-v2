"use strict";(self.webpackChunkmain=self.webpackChunkmain||[]).push([[3438],{3438:(Fe,x,i)=>{i.r(x),i.d(x,{AssertionsDetailModule:()=>Re});var r=i(9808),c=i(325),m=i(6949),l=i(8144),u=i(3618),z=i(1945),v=i(6042),y=i(8481),f=i(647),Z=i(2359),g=i(1894),S=i(5630),C=i(3309),w=i(4682),Q=i(4867),J=i(4609),P=i(694),M=i(8766),N=i(8762),U=i(5750),p=i(712),d=i(373),I=i(1059),n=i(5e3),Y=i(9350),L=i(8992),D=i(3193),B=i(8664),O=i(5623),E=i(8168),b=i(2683),R=i(2643),F=i(9077),j=i(8525),V=i(2233),$=i(759),q=i(3997);function G(e,s){if(1&e&&(n.TgZ(0,"span",8),n._uU(1,"Related to "),n.TgZ(2,"strong"),n._uU(3),n.qZA(),n._uU(4,":"),n.qZA()),2&e){const t=n.oxw(2).ngIf;n.xp6(3),n.Oqu(t.name)}}function H(e,s){if(1&e&&(n.TgZ(0,"span",9),n.TgZ(1,"a",10),n._UZ(2,"cvc-gene-tag",11),n.qZA(),n.TgZ(3,"a",10),n._UZ(4,"cvc-variant-tag",12),n.qZA(),n.qZA()),2&e){const t=n.oxw(2).ngIf;n.xp6(1),n.MGl("routerLink","/genes/",t.gene.id,""),n.xp6(1),n.Q6J("gene",t.gene),n.xp6(1),n.MGl("routerLink","/variants/",t.variant.id,""),n.xp6(1),n.Q6J("variant",t.variant)}}function W(e,s){1&e&&(n.TgZ(0,"nz-space",5),n.YNc(1,G,5,1,"span",6),n.YNc(2,H,5,4,"span",7),n.qZA())}const X=function(e){return["/assertions",e,"revise"]};function K(e,s){if(1&e&&(n.TgZ(0,"button",26,27),n._uU(2," Revise "),n.qZA()),2&e){const t=n.MAs(1),o=n.oxw(3).ngIf;n.Q6J("routerLink",n.VKq(2,X,o.id))("nzType",t.isActive?"primary":"default")}}function k(e,s){if(1&e&&(n.TgZ(0,"span"),n.YNc(1,K,3,4,"button",25),n.qZA()),2&e){const t=n.oxw().ngrxLet;n.xp6(1),n.Q6J("ngIf",t.signedIn)}}function nn(e,s){if(1&e&&(n.TgZ(0,"span"),n.TgZ(1,"button",28,27),n._uU(3," Flag "),n.qZA(),n.qZA()),2&e){const t=n.MAs(2);n.xp6(1),n.Q6J("nzType",t.isActive?"primary":"default")}}function en(e,s){if(1&e&&(n.ynx(0),n._UZ(1,"cvc-entity-subscription-button",29),n.BQk()),2&e){const t=n.oxw(2).ngrxLet,o=n.oxw(2);n.xp6(1),n.Q6J("viewer",t)("subscribableId",o.subscribable.id)}}function tn(e,s){if(1&e&&(n.TgZ(0,"span"),n.YNc(1,en,2,2,"ng-container",0),n.qZA()),2&e){const t=n.oxw().ngrxLet,o=n.oxw(2);n.xp6(1),n.Q6J("ngIf",t.signedIn&&o.subscribable)}}function sn(e,s){if(1&e){const t=n.EpF();n.TgZ(0,"cvc-revert-entity-button",31),n.NdJ("onReverted",function(a){return n.CHM(t),n.oxw(5).onRevertCompleted(a)}),n.qZA()}if(2&e){const t=n.oxw(4).ngIf;n.Q6J("entityId",t.id)}}function on(e,s){1&e&&(n.ynx(0),n.YNc(1,sn,1,1,"cvc-revert-entity-button",30),n.BQk())}function an(e,s){if(1&e&&(n.TgZ(0,"span"),n.YNc(1,on,2,0,"ng-container",0),n.qZA()),2&e){const t=n.oxw().ngrxLet,o=n.oxw().ngIf;n.xp6(1),n.Q6J("ngIf",t.canModerate&&"SUBMITTED"!=o.status)}}function rn(e,s){if(1&e){const t=n.EpF();n.TgZ(0,"nz-alert",32),n.NdJ("nzOnClose",function(){const _=n.CHM(t).$implicit;return n.oxw(3).onErrorBannerClose(_)}),n.qZA()}2&e&&n.Q6J("nzMessage",s.$implicit)}function cn(e,s){if(1&e){const t=n.EpF();n.TgZ(0,"nz-alert",33),n.NdJ("nzOnClose",function(){return n.CHM(t),n.oxw(3).onSuccessBannerClose()}),n.qZA()}if(2&e){const t=n.oxw(3);n.Q6J("nzMessage",t.successMessage)}}function _n(e,s){1&e&&n._UZ(0,"nz-alert",34)}function ln(e,s){if(1&e&&(n.TgZ(0,"nz-col",35),n._UZ(1,"cvc-contributor-avatars",36),n.qZA()),2&e){const t=n.oxw(3);n.xp6(1),n.Q6J("subscribable",t.subscribable)}}function pn(e,s){if(1&e){const t=n.EpF();n.TgZ(0,"cvc-moderate-entity-buttons",38),n.NdJ("onModerated",function(a){return n.CHM(t),n.oxw(4).onModerateCompleted(a)}),n.qZA()}if(2&e){const t=n.oxw(2).ngrxLet,o=n.oxw().ngIf;n.Q6J("entityId",o.id)("viewer",t)}}function gn(e,s){1&e&&(n.ynx(0),n.YNc(1,pn,1,2,"cvc-moderate-entity-buttons",37),n.BQk())}const dn=function(e){return{flagged:e}};function mn(e,s){if(1&e&&(n.TgZ(0,"nz-page-header",13),n.TgZ(1,"nz-page-header-title",14),n._UZ(2,"i",15),n._uU(3),n.qZA(),n.TgZ(4,"nz-page-header-extra"),n.TgZ(5,"nz-space",16),n.YNc(6,k,2,1,"span",17),n.YNc(7,nn,4,1,"span",17),n.YNc(8,tn,2,1,"span",17),n.YNc(9,an,2,1,"span",17),n.qZA(),n.qZA(),n.TgZ(10,"nz-page-header-content"),n.YNc(11,rn,1,1,"nz-alert",18),n.YNc(12,cn,1,1,"nz-alert",19),n.YNc(13,_n,1,0,"nz-alert",20),n.TgZ(14,"cvc-tab-navigation",21),n.YNc(15,ln,2,1,"ng-template",null,22,n.W1O),n.qZA(),n.TgZ(17,"nz-space",23),n.YNc(18,gn,2,0,"ng-container",0),n.qZA(),n.TgZ(19,"div",24),n._UZ(20,"router-outlet"),n.qZA(),n.qZA(),n.qZA()),2&e){const t=s.ngrxLet,o=n.oxw().ngIf,a=n.oxw();n.xp6(1),n.Q6J("ngClass",n.VKq(7,dn,o.flags.totalCount>0)),n.xp6(2),n.hij(" ",o.name," "),n.xp6(8),n.Q6J("ngForOf",a.errors),n.xp6(1),n.Q6J("ngIf",a.successMessage),n.xp6(1),n.Q6J("ngIf","SUBMITTED"==o.status),n.xp6(1),n.Q6J("tabs",a.tabs),n.xp6(4),n.Q6J("ngIf",t.canModerate&&"SUBMITTED"==o.status)}}function zn(e,s){if(1&e&&(n.ynx(0),n._UZ(1,"cvc-section-navigation",1),n.YNc(2,W,3,0,"ng-template",null,2,n.W1O),n.TgZ(4,"div",3),n.ALo(5,"ngrxPush"),n.YNc(6,mn,21,9,"nz-page-header",4),n.qZA(),n.BQk()),2&e){const t=s.ngIf,o=n.MAs(3),a=n.oxw();n.xp6(1),n.Q6J("displayName",t.name)("relationsTpl",o),n.xp6(3),n.Q6J("flags",n.lcZ(5,4,a.flagsTotal$)),n.xp6(2),n.Q6J("ngrxLet",a.viewer$)}}let un=(()=>{class e{constructor(t,o,a){this.gql=t,this.viewerService=o,this.route=a,this.errors=[],this.paramsSub=this.route.params.subscribe(_=>{this.queryRef=this.gql.watch({assertionId:+_.assertionId});let T=this.queryRef.valueChanges;this.loading$=T.pipe((0,d.j)("loading"),(0,I.O)(!0)),this.assertion$=T.pipe((0,d.j)("data","assertion")),this.commentsTotal$=this.assertion$.pipe((0,d.j)("comments","totalCount")),this.flagsTotal$=this.assertion$.pipe((0,d.j)("flags","totalCount")),this.revisionsTotal$=this.assertion$.pipe((0,d.j)("revisions","totalCount")),this.subscribable={id:+_.assertionId,entityType:p.o71.Assertion},this.viewer$=this.viewerService.viewer$}),this.tabs=[{routeName:"summary",iconName:"pic-left",tabLabel:"Summary"},{routeName:"comments",iconName:"civic-comment",tabLabel:"Comments"},{routeName:"revisions",iconName:"civic-revision",tabLabel:"Revisions"},{routeName:"flags",iconName:"civic-flag",tabLabel:"Flags"},{routeName:"events",iconName:"civic-event",tabLabel:"Events"}]}ngOnDestroy(){this.paramsSub.unsubscribe()}onRevertCompleted(t){var o;!0===t?(this.errors=[],this.successMessage="Assertion reverted to submitted status.",null===(o=this.queryRef)||void 0===o||o.refetch()):(this.errors=t,this.successMessage=void 0)}onErrorBannerClose(t){var o;this.errors=null===(o=this.errors)||void 0===o?void 0:o.filter(a=>a!=t)}onSuccessBannerClose(){this.successMessage=void 0}onModerateCompleted(t){var o;Array.isArray(t)?(this.errors=t,this.successMessage=void 0):(this.errors=[],this.successMessage=`Assertion successfully ${t}.`,null===(o=this.queryRef)||void 0===o||o.refetch())}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(p.A94),n.Y36(Y.a),n.Y36(c.gz))},e.\u0275cmp=n.Xpm({type:e,selectors:[["assertions-detail"]],decls:2,vars:3,consts:[[4,"ngIf"],[3,"displayName","relationsTpl"],["assertionRelations",""],["cvcFlaggable","",3,"flags"],["class","site-page-header",4,"ngrxLet"],["nzDirection","horizontal"],["nz-typography","","class","label",4,"nzSpaceItem"],["class","tags",4,"nzSpaceItem"],["nz-typography","",1,"label"],[1,"tags"],[3,"routerLink"],[3,"gene"],[3,"variant"],[1,"site-page-header"],["cvcFlaggableOptions","",3,"ngClass"],["nz-icon","","nzType","civic:assertion"],["nzDirection","horizontal","nzSize","small"],[4,"nzSpaceItem"],["nzBanner","","nzType","error","nzCloseable","",3,"nzMessage","nzOnClose",4,"ngFor","ngForOf"],["nzBanner","","nzType","success","nzCloseable","",3,"nzMessage","nzOnClose",4,"ngIf"],["nzBanner","","nzMessage","This Assertion is in a 'submitted' state and has not yet been reviewed by an editor.","nzType","warning",4,"ngIf"],[3,"tabs"],["tabBarExtraContent",""],["nzDirection","vertical"],[1,"content"],["routerLinkActive","","nz-button","","nzSize","small",3,"routerLink","nzType",4,"ngIf"],["routerLinkActive","","nz-button","","nzSize","small",3,"routerLink","nzType"],["rlaComments","routerLinkActive"],["routerLink","flags","routerLinkActive","","nz-button","","nzSize","small",3,"nzType"],["typename","Assertion",3,"viewer","subscribableId"],["entityType","Assertion",3,"entityId","onReverted",4,"nzSpaceItem"],["entityType","Assertion",3,"entityId","onReverted"],["nzBanner","","nzType","error","nzCloseable","",3,"nzMessage","nzOnClose"],["nzBanner","","nzType","success","nzCloseable","",3,"nzMessage","nzOnClose"],["nzBanner","","nzMessage","This Assertion is in a 'submitted' state and has not yet been reviewed by an editor.","nzType","warning"],["id","contributors-col"],[3,"subscribable"],["entityType","Assertion",3,"entityId","viewer","onModerated",4,"nzSpaceItem"],["entityType","Assertion",3,"entityId","viewer","onModerated"]],template:function(t,o){1&t&&(n.YNc(0,zn,7,6,"ng-container",0),n.ALo(1,"ngrxPush")),2&t&&n.Q6J("ngIf",n.lcZ(1,1,o.assertion$))},directives:[r.O5,L.I,l.NU,l.$1,u.ZU,c.yS,D.H,B.I,O.o,m.eJ,z.$O,z.u9,E.Y,r.mk,b.w,f.Ls,z.Jp,v.ix,R.dQ,c.Od,c.rH,F.Q,j.e,z.u5,r.sg,Z.r,V.P,g.t3,$.N,q.m,c.lC],pipes:[m.fM],styles:["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]     nz-page-header:first-of-type{background-color:#fff;border-radius:8px}[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card{width:100%}[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card .card-grid-cell{width:50%}[_nghost-%COMP%]     nz-page-header:first-of-type nz-page-header-title.flagged{padding-left:.75em}[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-content{padding-top:0}[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-heading-extra nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs{margin:0 -16px 12px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap{padding-left:16px;padding-right:16px;line-height:24px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab{padding:1px 8px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab .anticon{margin-right:0}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-extra-content{margin-right:16px}"]}),e})();var fn=i(2278);let vn=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[[r.ez,fn.l]]}),e})();var yn=i(3801);let An=(()=>{class e{constructor(t){this.route=t,this.commentable={id:+this.route.snapshot.params.assertionId,entityType:p.OfU.Assertion}}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(c.gz))},e.\u0275cmp=n.Xpm({type:e,selectors:[["cvc-assertions-comments"]],decls:1,vars:1,consts:[[3,"commentable"]],template:function(t,o){1&t&&n._UZ(0,"cvc-comment-list",0),2&t&&n.Q6J("commentable",o.commentable)},directives:[yn.D],styles:["[_nghost-%COMP%]{display:block}"]}),e})();var hn=i(7484),Tn=i(6559),xn=i(4271);let Zn=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[[r.ez,g.Jb,hn.vh,l.zf,Tn.H0,xn.M]]}),e})();var In=i(7036);let bn=(()=>{class e{constructor(t){this.route=t,this.flaggable={entityType:p.sfv.Assertion,id:+this.route.snapshot.params.assertionId}}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(c.gz))},e.\u0275cmp=n.Xpm({type:e,selectors:[["cvc-assertions-flags"]],decls:1,vars:1,consts:[[3,"flaggable"]],template:function(t,o){1&t&&n._UZ(0,"cvc-flag-list-and-filter",0),2&t&&n.Q6J("flaggable",o.flaggable)},directives:[In.L],styles:["[_nghost-%COMP%]{display:block}"]}),e})();var Sn=i(2914);let Cn=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[[r.ez,Sn.A]]}),e})();var wn=i(8291);let Qn=(()=>{class e{constructor(t){this.route=t,this.routeSub=this.route.params.subscribe(o=>{this.aid=+o.assertionId,this.entityType=p.oRL.Assertion})}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(c.gz))},e.\u0275cmp=n.Xpm({type:e,selectors:[["cvc-assertions-revisions"]],decls:1,vars:2,consts:[[3,"id","entityType"]],template:function(t,o){1&t&&n._UZ(0,"cvc-revisions-list-and-filter",0),2&t&&n.Q6J("id",o.aid)("entityType",o.entityType)},directives:[wn.a],styles:[""]}),e})();var A=i(3098),Jn=i(9444),Pn=i(4466),Mn=i(7345),Nn=i(897),Un=i(8018),Yn=i(316),Ln=i(767),Dn=i(3580),Bn=i(6286),h=i(8625),On=i(7026);let En=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[[r.ez,m.WG,g.Jb,l.zf,g.Jb,l.zf,u.ZJ,v.sL,y.X,f.PV,A.q6,Jn.s,Pn.x,Mn.W,Nn.$,Un.e,Yn.C,Ln.Q,Dn.Q,Bn.y,h.$L.forChild({formatter:{useClass:On.x,provide:h.KP}})]]}),e})();var Rn=i(4590),Fn=i(125),jn=i(4022),Vn=i(6715),$n=i(7956),qn=i(7469),Gn=i(4805),Hn=i(8965),Wn=i(4110),Xn=i(9657);function Kn(e,s){if(1&e&&(n.TgZ(0,"nz-descriptions",14),n.TgZ(1,"nz-descriptions-item",15),n.TgZ(2,"p",16),n._uU(3),n.qZA(),n.qZA(),n.TgZ(4,"nz-descriptions-item",17),n.TgZ(5,"p",18),n._uU(6),n.qZA(),n.qZA(),n.qZA()),2&e){const t=n.oxw(2).ngIf;n.Q6J("nzColumn",1),n.xp6(3),n.Oqu(t.summary),n.xp6(2),n.Q6J("nzEllipsisRows",14),n.xp6(1),n.Oqu(t.description)}}function kn(e,s){if(1&e&&(n.TgZ(0,"nz-descriptions",19),n.TgZ(1,"nz-descriptions-item",20),n._uU(2),n.ALo(3,"evidenceEnumDisplay"),n.qZA(),n.TgZ(4,"nz-descriptions-item",21),n._uU(5),n.ALo(6,"evidenceEnumDisplay"),n.qZA(),n.TgZ(7,"nz-descriptions-item",22),n._uU(8),n.ALo(9,"evidenceEnumDisplay"),n.qZA(),n.qZA()),2&e){const t=n.oxw(2).ngIf;n.Q6J("nzColumn",2),n.xp6(2),n.hij(" ",n.lcZ(3,4,t.assertionType)," "),n.xp6(3),n.hij(" ",n.lcZ(6,6,t.assertionDirection)," "),n.xp6(3),n.hij(" ",n.lcZ(9,8,t.clinicalSignificance)," ")}}function ne(e,s){1&e&&(n.ynx(0),n._uU(1,",\xa0"),n.BQk())}function ee(e,s){if(1&e&&(n.ynx(0),n._uU(1),n.YNc(2,ne,2,0,"ng-container",26),n.BQk()),2&e){const t=s.$implicit,o=s.last;n.xp6(1),n.hij(" ",t.code," "),n.xp6(1),n.Q6J("ngIf",!o)}}function te(e,s){if(1&e&&(n.ynx(0),n.YNc(1,ee,3,2,"ng-container",27),n.BQk()),2&e){const t=n.oxw(3).ngIf;n.xp6(1),n.Q6J("ngForOf",t.acmgCodes)}}function se(e,s){1&e&&(n.ynx(0),n.TgZ(1,"span",28),n._uU(2,"None provided"),n.qZA(),n.BQk())}function ie(e,s){if(1&e&&(n.TgZ(0,"nz-descriptions",23),n.TgZ(1,"nz-descriptions-item",24),n._uU(2),n.ALo(3,"formatAmp"),n.qZA(),n.TgZ(4,"nz-descriptions-item",25),n.YNc(5,te,2,1,"ng-container",26),n.YNc(6,se,3,0,"ng-container",26),n.qZA(),n.qZA()),2&e){const t=n.oxw(2).ngIf;n.xp6(2),n.hij(" ",n.xi3(3,3,t.ampLevel,"verbose")," "),n.xp6(3),n.Q6J("ngIf",t.acmgCodes.length>0),n.xp6(1),n.Q6J("ngIf",0==t.acmgCodes.length)}}function oe(e,s){if(1&e&&(n.TgZ(0,"nz-descriptions-item",37),n._uU(1),n.ALo(2,"timeago"),n._UZ(3,"cvc-user-tag",33),n.qZA()),2&e){const t=n.oxw(4).ngIf;n.xp6(1),n.hij(" ",n.lcZ(2,2,t.acceptanceEvent.createdAt)," by "),n.xp6(2),n.Q6J("user",t.acceptanceEvent.originatingUser)}}function ae(e,s){if(1&e&&(n.TgZ(0,"nz-descriptions-item",38),n._uU(1),n.ALo(2,"timeago"),n._UZ(3,"cvc-user-tag",33),n.qZA()),2&e){const t=n.oxw(4).ngIf;n.xp6(1),n.hij(" ",n.lcZ(2,2,t.rejectionEvent.createdAt)," by "),n.xp6(2),n.Q6J("user",t.rejectionEvent.originatingUser)}}function re(e,s){if(1&e&&(n.ynx(0),n.ynx(1,34),n.YNc(2,oe,4,4,"nz-descriptions-item",35),n.YNc(3,ae,4,4,"nz-descriptions-item",36),n.BQk(),n.BQk()),2&e){const t=n.oxw(3).ngIf;n.xp6(1),n.Q6J("ngSwitch",null===t.rejectionEvent),n.xp6(1),n.Q6J("ngSwitchCase",!0),n.xp6(1),n.Q6J("ngSwitchCase",!1)}}function ce(e,s){if(1&e&&(n.TgZ(0,"nz-descriptions",29),n.TgZ(1,"nz-descriptions-item",30),n._UZ(2,"cvc-status-tag",31),n.qZA(),n.TgZ(3,"nz-descriptions-item",32),n._uU(4),n.ALo(5,"timeago"),n._UZ(6,"cvc-user-tag",33),n.qZA(),n.YNc(7,re,4,3,"ng-container",26),n.qZA()),2&e){const t=n.oxw(2).ngIf;n.xp6(2),n.Q6J("status",t.status),n.xp6(2),n.hij(" ",n.lcZ(5,4,t.submissionEvent.createdAt)," by "),n.xp6(2),n.Q6J("user",t.submissionEvent.originatingUser),n.xp6(1),n.Q6J("ngIf",null!==t.rejectionEvent||null!==t.acceptanceEvent)}}function _e(e,s){if(1&e&&(n.TgZ(0,"a",45),n.TgZ(1,"nz-tag",46),n._UZ(2,"i",47),n._uU(3),n.qZA(),n.qZA()),2&e){const t=n.oxw(3).ngIf;n.Q6J("href","https://reg.genome.network/allele/"+t.variant.alleleRegistryId+".html",n.LSH),n.xp6(3),n.hij("",t.variant.alleleRegistryId," ")}}function le(e,s){1&e&&(n.TgZ(0,"span",28),n._uU(1,"None provided"),n.qZA())}function pe(e,s){if(1&e&&(n.TgZ(0,"nz-descriptions",39),n.TgZ(1,"nz-descriptions-item",40),n._UZ(2,"i",41),n.ALo(3,"evidenceEnumDisplay"),n._uU(4),n.ALo(5,"evidenceEnumDisplay"),n.qZA(),n.TgZ(6,"nz-descriptions-item",42),n.YNc(7,_e,4,2,"a",43),n.YNc(8,le,2,0,"ng-template",null,44,n.W1O),n.qZA(),n.qZA()),2&e){const t=n.MAs(9),o=n.oxw(2).ngIf;n.Q6J("nzColumn",2),n.xp6(2),n.Q6J("nzType",n.xi3(3,5,o.variantOrigin,"icon-name")),n.xp6(2),n.hij(" ",n.lcZ(5,8,o.variantOrigin)," "),n.xp6(3),n.Q6J("ngIf",o.variant.alleleRegistryId)("ngIfElse",t)}}function ge(e,s){if(1&e&&(n.ynx(0),n._UZ(1,"cvc-disease-tag",51),n.BQk()),2&e){const t=n.oxw(3).ngIf;n.xp6(1),n.Q6J("disease",t.disease)}}function de(e,s){1&e&&(n.TgZ(0,"span",28),n._uU(1,"Not applicable"),n.qZA())}function me(e,s){1&e&&(n.ynx(0),n.TgZ(1,"span",28),n._uU(2,"None Specified"),n.qZA(),n.BQk())}function ze(e,s){if(1&e&&(n.ynx(0),n._UZ(1,"cvc-phenotype-tag",52),n.BQk()),2&e){const t=s.$implicit;n.xp6(1),n.Q6J("phenotype",t)}}function ue(e,s){if(1&e&&(n.ynx(0),n.TgZ(1,"cvc-tag-list"),n.YNc(2,ze,2,1,"ng-container",27),n.qZA(),n.BQk()),2&e){const t=n.oxw(3).ngIf;n.xp6(2),n.Q6J("ngForOf",t.phenotypes)}}function fe(e,s){if(1&e&&(n.TgZ(0,"nz-descriptions",14),n.TgZ(1,"nz-descriptions-item",48),n.YNc(2,ge,2,1,"ng-container",26),n.YNc(3,de,2,0,"span",49),n.qZA(),n.TgZ(4,"nz-descriptions-item",50),n.YNc(5,me,3,0,"ng-container",26),n.YNc(6,ue,3,1,"ng-container",26),n.qZA(),n.qZA()),2&e){const t=n.oxw(2).ngIf;n.Q6J("nzColumn",void 0!==t.disease.name&&t.phenotypes.length>0?1:2),n.xp6(2),n.Q6J("ngIf",t.disease.name),n.xp6(1),n.Q6J("ngIf",!t.disease.name),n.xp6(1),n.Q6J("nzTitle",t.phenotypes.length>1?"Phenotypes":"Phenotype"),n.xp6(1),n.Q6J("ngIf",0===t.phenotypes.length),n.xp6(1),n.Q6J("ngIf",t.phenotypes.length>0)}}function ve(e,s){1&e&&(n.TgZ(0,"span",28),n._uU(1,"Not applicable"),n.qZA())}function ye(e,s){if(1&e&&(n.ynx(0),n._UZ(1,"cvc-drug-tag",57),n.BQk()),2&e){const t=s.$implicit;n.xp6(1),n.Q6J("drug",t)}}function Ae(e,s){if(1&e&&(n.TgZ(0,"cvc-tag-list"),n.YNc(1,ye,2,1,"ng-container",27),n.qZA()),2&e){const t=n.oxw(3).ngIf;n.xp6(1),n.Q6J("ngForOf",t.drugs)}}function he(e,s){if(1&e&&(n.TgZ(0,"nz-descriptions",53),n.TgZ(1,"nz-descriptions-item",50),n.ynx(2,54),n.YNc(3,ve,2,0,"ng-template",55),n.YNc(4,Ae,2,1,"ng-template",56),n.BQk(),n.qZA(),n.qZA()),2&e){const t=n.oxw(2).ngIf;n.Q6J("nzLayout",t.drugs.length>1?"vertical":"horizontal"),n.xp6(1),n.Q6J("nzTitle",t.drugs.length>1?"Drugs":"Drug"),n.xp6(1),n.Q6J("ngPlural",t.drugs.length)}}function Te(e,s){1&e&&n._UZ(0,"i",62),2&e&&n.Q6J("nzType","check-circle")("nzTheme","twotone")("nzTwotoneColor","#52c41a")}function xe(e,s){1&e&&n._UZ(0,"i",62),2&e&&n.Q6J("nzType","close-square")("nzTheme","twotone")("nzTwotoneColor","#d93026")}function Ze(e,s){if(1&e&&(n.ynx(0),n._uU(1),n.ALo(2,"timeago"),n.BQk()),2&e){const t=n.oxw(3).ngIf;n.xp6(1),n.hij(" (last updated ",n.lcZ(2,1,t.regulatoryApprovalLastUpdated),") ")}}function Ie(e,s){1&e&&n._UZ(0,"i",62),2&e&&n.Q6J("nzType","check-circle")("nzTheme","twotone")("nzTwotoneColor","#52c41a")}function be(e,s){1&e&&n._UZ(0,"i",62),2&e&&n.Q6J("nzType","close-square")("nzTheme","twotone")("nzTwotoneColor","#d93026")}function Se(e,s){if(1&e&&(n.ynx(0),n._uU(1),n.ALo(2,"timeago"),n.BQk()),2&e){const t=n.oxw(3).ngIf;n.xp6(1),n.hij(" (last updated ",n.lcZ(2,1,t.fdaCompanionTestLastUpdated),") ")}}function Ce(e,s){if(1&e&&(n.ynx(0),n._uU(1),n.BQk()),2&e){const t=n.oxw(3).ngIf;n.xp6(1),n.AsE("",t.nccnGuideline," (",t.nccnGuidelineVersion,")")}}function we(e,s){1&e&&(n.ynx(0),n.TgZ(1,"span",28),n._uU(2,"None Provided"),n.qZA(),n.BQk())}function Qe(e,s){if(1&e&&(n.TgZ(0,"nz-descriptions",39),n.TgZ(1,"nz-descriptions-item",58),n.YNc(2,Te,1,3,"i",59),n.YNc(3,xe,1,3,"i",59),n.YNc(4,Ze,3,3,"ng-container",26),n.qZA(),n.TgZ(5,"nz-descriptions-item",60),n.YNc(6,Ie,1,3,"i",59),n.YNc(7,be,1,3,"i",59),n.YNc(8,Se,3,3,"ng-container",26),n.qZA(),n.TgZ(9,"nz-descriptions-item",61),n.YNc(10,Ce,2,2,"ng-container",26),n.YNc(11,we,3,0,"ng-container",26),n.qZA(),n.qZA()),2&e){const t=n.oxw(2).ngIf;n.Q6J("nzColumn",2),n.xp6(2),n.Q6J("ngIf",t.regulatoryApproval),n.xp6(1),n.Q6J("ngIf",!t.regulatoryApproval),n.xp6(1),n.Q6J("ngIf",t.regulatoryApprovalLastUpdated),n.xp6(2),n.Q6J("ngIf",t.fdaCompanionTest),n.xp6(1),n.Q6J("ngIf",!t.fdaCompanionTest),n.xp6(1),n.Q6J("ngIf",t.fdaCompanionTestLastUpdated),n.xp6(2),n.Q6J("ngIf",t.nccnGuideline),n.xp6(1),n.Q6J("ngIf",!t.nccnGuideline)}}function Je(e,s){1&e&&(n.TgZ(0,"nz-row",5),n.TgZ(1,"nz-col",6),n.TgZ(2,"nz-space",7),n.YNc(3,Kn,7,4,"nz-descriptions",8),n.YNc(4,kn,10,10,"nz-descriptions",9),n.YNc(5,ie,7,6,"nz-descriptions",10),n.qZA(),n.qZA(),n.TgZ(6,"nz-col",6),n.TgZ(7,"nz-space",7),n.YNc(8,ce,8,6,"nz-descriptions",11),n.YNc(9,pe,10,10,"nz-descriptions",12),n.YNc(10,fe,7,6,"nz-descriptions",8),n.YNc(11,he,5,3,"nz-descriptions",13),n.YNc(12,Qe,12,9,"nz-descriptions",12),n.qZA(),n.qZA(),n.qZA()),2&e&&(n.Q6J("nzGutter",16),n.xp6(1),n.Q6J("nzSpan",12),n.xp6(5),n.Q6J("nzSpan",12))}function Pe(e,s){if(1&e&&(n.TgZ(0,"cvc-entity-table-card",63),n._UZ(1,"cvc-evidence-table",64),n.qZA()),2&e){const t=n.oxw().ngIf,o=n.MAs(4);n.Q6J("cvcTitle",o),n.xp6(1),n.Q6J("assertionId",t.id)}}function Me(e,s){if(1&e&&(n._UZ(0,"i",65),n._uU(1)),2&e){const t=n.oxw().ngIf;n.xp6(1),n.hij(" ",t.name," Evidence ")}}function Ne(e,s){1&e&&(n.TgZ(0,"nz-space",1),n.YNc(1,Je,13,3,"nz-row",2),n.YNc(2,Pe,2,2,"cvc-entity-table-card",3),n.YNc(3,Me,2,1,"ng-template",null,4,n.W1O),n.qZA())}let Ue=(()=>{class e{constructor(t,o){var a;if(this.gql=t,this.route=o,null==(a=this.assertionId?this.assertionId:+this.route.snapshot.params.assertionId))throw new Error("Must pass in an assertion ID as an input or via the route.");this.queryRef=this.gql.watch({assertionId:a});let _=this.queryRef.valueChanges;this.loading$=_.pipe((0,d.j)("loading"),(0,I.O)(!0)),this.assertion$=_.pipe((0,d.j)("data","assertion")),this.subscribable={entityType:p.o71.Assertion,id:a}}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(p.ejK),n.Y36(c.gz))},e.\u0275cmp=n.Xpm({type:e,selectors:[["cvc-assertion-summary"]],inputs:{assertionId:"assertionId"},decls:2,vars:3,consts:[["nzSize","middle","nzDirection","vertical","class","space-align-block",4,"ngIf"],["nzSize","middle","nzDirection","vertical",1,"space-align-block"],[3,"nzGutter",4,"nzSpaceItem"],[3,"cvcTitle",4,"nzSpaceItem"],["evidenceCardTitle",""],[3,"nzGutter"],[3,"nzSpan"],["nzDirection","vertical"],["nzLayout","vertical","nzSize","small","nzBordered","true",3,"nzColumn",4,"nzSpaceItem"],["nzSize","small","nzBordered","true",3,"nzColumn",4,"nzSpaceItem"],["nzLayout","horizontal","nzSize","small","nzBordered","true",4,"nzSpaceItem"],["nzLayout","horizontal","nzSize","small","nzBordered","true","class","status-tags",4,"nzSpaceItem"],["nzLayout","horizontal","nzSize","small","nzBordered","true",3,"nzColumn",4,"nzSpaceItem"],["nzSize","small","nzBordered","true",3,"nzLayout",4,"nzSpaceItem"],["nzLayout","vertical","nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","Summary"],["nz-typography",""],["nzTitle","Description"],["nz-typography","","nzEllipsis","","nzExpandable","",3,"nzEllipsisRows"],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","Type"],["nzTitle","Direction"],["nzTitle","Clinical Significance","nzSpan","2"],["nzLayout","horizontal","nzSize","small","nzBordered","true"],["nzTitle","AMP/ASCO/CAP Category"],["nzTitle","ACMG Codes"],[4,"ngIf"],[4,"ngFor","ngForOf"],["nz-typography","","nzType","secondary"],["nzLayout","horizontal","nzSize","small","nzBordered","true",1,"status-tags"],["nzTitle","Status"],[3,"status"],["nzTitle","Submitted"],[3,"user"],[3,"ngSwitch"],["nzTitle","Accepted",4,"ngSwitchCase"],["nzTitle","Rejected",4,"ngSwitchCase"],["nzTitle","Accepted"],["nzTitle","Rejected"],["nzLayout","horizontal","nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","Variant Origin"],["nz-icon","",3,"nzType"],["nzTitle","Allele Registry ID"],["target","_blank",3,"href",4,"ngIf","ngIfElse"],["noAlleleRegistry",""],["target","_blank",3,"href"],["nzColor","default"],["nz-icon","","nzType","link","nzTheme","outline"],["nzTitle","Disease"],["nz-typography","","nzType","secondary",4,"ngIf"],[3,"nzTitle"],[3,"disease"],[3,"phenotype"],["nzSize","small","nzBordered","true",3,"nzLayout"],[3,"ngPlural"],["ngPluralCase","=0"],["ngPluralCase","other"],[3,"drug"],["nzTitle","Regulatory Approval","nzSpan","1"],["nz-icon","",3,"nzType","nzTheme","nzTwotoneColor",4,"ngIf"],["nzTitle","FDA Companion Test","nzSpan","1"],["nzTitle","NCCN Guideline","nzSpan","2"],["nz-icon","",3,"nzType","nzTheme","nzTwotoneColor"],[3,"cvcTitle"],[3,"assertionId"],["nz-icon","","nzType","civic:evidence"]],template:function(t,o){1&t&&(n.YNc(0,Ne,5,0,"nz-space",0),n.ALo(1,"ngrxPush")),2&t&&n.Q6J("ngIf",n.lcZ(1,1,o.assertion$))},directives:[r.O5,l.NU,l.$1,g.SK,g.t3,A.R7,A.uj,u.ZU,r.sg,Rn.h,Fn.I,r.RF,r.n9,b.w,f.Ls,y.j,jn.n,Vn.$,$n.i,r.iq,r.zE,qn.u,Gn._,Hn.a],pipes:[m.fM,Wn.D,Xn.t,h.wr],styles:["[_nghost-%COMP%]{display:block}nz-space[_ngcontent-%COMP%], nz-space-item[_ngcontent-%COMP%]{width:100%}"]}),e})();var Ye=i(2011);let Le=(()=>{class e{constructor(t){this.route=t,this.subscribable={id:+this.route.snapshot.params.assertionId,entityType:p.o71.Assertion}}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(c.gz))},e.\u0275cmp=n.Xpm({type:e,selectors:[["cvc-assertions-events"]],decls:1,vars:1,consts:[["tagDisplay","hideSubject",3,"subscribable"]],template:function(t,o){1&t&&n._UZ(0,"cvc-event-feed",0),2&t&&n.Q6J("subscribable",o.subscribable)},directives:[Ye.o],styles:["[_nghost-%COMP%]{display:block}"]}),e})();var De=i(4292);let Be=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[[r.ez,De.t]]}),e})();const Oe=[{path:"",component:un,data:{breadcrumb:"DISPLAYNAME"},children:[{path:"",redirectTo:"summary",pathMatch:"full"},{path:"summary",component:Ue,data:{breadcrumb:"Summary"}},{path:"events",component:Le,data:{breadcrumb:"Events"}},{path:"comments",component:An,data:{breadcrumb:"Comments"}},{path:"revisions",component:Qn,data:{breadcrumb:"Revisions"}},{path:"flags",component:bn,data:{breadcrumb:"Flags"}}]}];let Ee=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[[c.Bz.forChild(Oe),En,vn,Cn,Zn,Be],c.Bz]}),e})(),Re=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[[r.ez,Ee,c.Bz,m.WG,l.zf,u.ZJ,z.KJ,v.sL,y.X,f.PV,Z.L,g.Jb,S.D,C.U,w.m,Q.Q,J.g,P.G,M.P,N.c,U.Z]]}),e})()}}]);