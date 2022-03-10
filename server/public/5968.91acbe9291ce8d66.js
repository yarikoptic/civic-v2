"use strict";(self.webpackChunkmain=self.webpackChunkmain||[]).push([[5968],{8390:(Y,N,u)=>{u.d(N,{N:()=>T});var h=u(9808),v=u(4182),e=u(8776),S=u(4546),z=u(1047),Z=u(647),t=u(5e3),M=u(1894),g=u(6042),y=u(2643),O=u(2683);function F(c,f){if(1&c&&(t.ynx(0),t.TgZ(1,"nz-form-label",6),t._uU(2),t.qZA(),t.BQk()),2&c){const a=t.oxw(2);t.xp6(1),t.Q6J("nzRequired",a.to.required&&!0!==a.to.hideRequiredMarker)("nzFor",a.id),t.xp6(1),t.hij(" ",a.to.label," ")}}function P(c,f){if(1&c&&t._UZ(0,"formly-validation-message",7),2&c){const a=t.oxw(2);t.Q6J("field",a.field)}}function V(c,f){if(1&c){const a=t.EpF();t.TgZ(0,"nz-form-item"),t.YNc(1,F,3,3,"ng-container",1),t.TgZ(2,"nz-form-control",3),t.TgZ(3,"button",4),t.NdJ("click",function(w){return t.CHM(a),t.oxw().addField(w)}),t._uU(4),t.qZA(),t.YNc(5,P,1,1,"ng-template",null,5,t.W1O),t.qZA(),t.qZA()}if(2&c){const a=t.MAs(6),m=t.oxw();t.xp6(1),t.Q6J("ngIf",m.to.label&&!0!==m.to.hideLabel),t.xp6(1),t.Q6J("nzValidateStatus",m.errorState)("nzErrorTip",a),t.xp6(2),t.Oqu(m.to.addText)}}function E(c,f){if(1&c&&(t.ynx(0),t.TgZ(1,"nz-form-label",6),t._uU(2),t.qZA(),t.BQk()),2&c){const a=t.oxw(2);t.xp6(1),t.Q6J("nzRequired",a.to.required&&!0!==a.to.hideRequiredMarker)("nzFor",a.id),t.xp6(1),t.hij(" ",a.to.label," ")}}function A(c,f){if(1&c){const a=t.EpF();t.TgZ(0,"i",14),t.NdJ("click",function(w){return t.CHM(a),t.oxw(4).addField(w)}),t.qZA()}}function Q(c,f){if(1&c&&(t.TgZ(0,"div",12),t.YNc(1,A,1,0,"i",13),t.qZA()),2&c){const a=t.oxw(2).$implicit,m=t.oxw();t.xp6(1),t.Q6J("ngIf",0==m.to.maxCount||m.to.maxCount>a.model.length)}}function U(c,f){if(1&c){const a=t.EpF();t.ynx(0),t.TgZ(1,"div",9),t.TgZ(2,"i",10),t.NdJ("click",function(){t.CHM(a);const w=t.oxw().index;return t.oxw().remove(w)}),t.qZA(),t.qZA(),t.YNc(3,Q,2,1,"div",11),t.BQk()}if(2&c){const a=t.oxw().last;t.xp6(3),t.Q6J("ngIf",a)}}function b(c,f){if(1&c){const a=t.EpF();t.ynx(0),t.TgZ(1,"div",15),t.TgZ(2,"button",16),t.NdJ("click",function(){t.CHM(a);const w=t.oxw().index;return t.oxw().remove(w)}),t._uU(3,"Cancel"),t.qZA(),t.qZA(),t.BQk()}}const J=function(c,f){return{"field-display":c,"entity-display":f}};function B(c,f){if(1&c&&(t.TgZ(0,"nz-form-item"),t.YNc(1,E,3,3,"ng-container",1),t.TgZ(2,"div",0),t.TgZ(3,"div",8),t._UZ(4,"formly-field",7),t.qZA(),t.YNc(5,U,4,1,"ng-container",1),t.YNc(6,b,4,0,"ng-container",1),t.qZA(),t.qZA()),2&c){const a=f.$implicit,m=f.index,w=t.oxw();t.xp6(1),t.Q6J("ngIf",0===m&&w.to.label&&!0!==w.to.hideLabel),t.xp6(1),t.Q6J("ngClass",t.WLB(5,J,!a.model[m],a.model[m])),t.xp6(2),t.Q6J("field",a),t.xp6(1),t.Q6J("ngIf",a.model[m]),t.xp6(1),t.Q6J("ngIf",!a.model[m])}}const L=function(c){return{hidden:c}},i={name:"multi-field",component:(()=>{class c extends e.hv{constructor(){super(),this.defaultOptions={templateOptions:{maxCount:0}}}get errorState(){return this.showError?"error":""}addField(a){a&&a.preventDefault(),this.add()}ngOnInit(){this.to.add=this.add.bind(this),this.to.remove=this.remove.bind(this)}}return c.\u0275fac=function(a){return new(a||c)},c.\u0275cmp=t.Xpm({type:c,selectors:[["cvc-multi-field-type"]],features:[t.qOj],decls:3,vars:5,consts:[[3,"ngClass"],[4,"ngIf"],[4,"ngFor","ngForOf"],[3,"nzValidateStatus","nzErrorTip"],["nz-button","","nzBlock","","nzType","default","nzSize","small","nzSearch","",3,"click"],["errorTpl",""],["nzSpan","24",3,"nzRequired","nzFor"],[3,"field"],[1,"field-col"],[1,"field-delete-btn"],["nz-icon","","nzType","minus-circle-o",3,"click"],["class","field-add-btn",4,"ngIf"],[1,"field-add-btn"],["nz-icon","","nzType","plus-circle-o",3,"click",4,"ngIf"],["nz-icon","","nzType","plus-circle-o",3,"click"],[1,"field-cancel-btn"],["nz-button","","nzBlock","","nzType","default","nzSize","small","nzDanger","",3,"click"]],template:function(a,m){1&a&&(t.TgZ(0,"div",0),t.YNc(1,V,7,4,"nz-form-item",1),t.YNc(2,B,7,8,"nz-form-item",2),t.qZA()),2&a&&(t.Q6J("ngClass",t.VKq(3,L,!0===m.to.hidden)),t.xp6(1),t.Q6J("ngIf",0===(null==m.field.fieldGroup?null:m.field.fieldGroup.length)),t.xp6(1),t.Q6J("ngForOf",m.field.fieldGroup))},directives:[h.mk,h.O5,M.SK,S.Nx,M.t3,S.iK,S.Fd,g.ix,y.dQ,O.w,e.u_,h.sg,e.cw,Z.Ls],styles:["[_nghost-%COMP%]{display:block}nz-form-item[_ngcontent-%COMP%]{margin-bottom:.25em}nz-form-item[_ngcontent-%COMP%]:last-child{margin-bottom:16px}.hidden[_ngcontent-%COMP%]{display:none}.field-display[_ngcontent-%COMP%]{margin-top:.5em} > nz-form-item[_ngcontent-%COMP%]{margin-bottom:0}.field-col[_ngcontent-%COMP%]{display:inline-block;width:calc(100% - (2*(24px + 1em)))}.field-delete-btn[_ngcontent-%COMP%], .field-add-btn[_ngcontent-%COMP%]{display:inline-block;margin-left:1em}.field-delete-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .field-add-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{top:5px;position:relative;cursor:pointer;font-size:24px;color:#999;transition:all .3s}.field-cancel-btn[_ngcontent-%COMP%]{display:inline-block;margin-left:1em;width:calc(48px + 1em)}"]}),c})()};function r(c,f){if(1&c&&t._UZ(0,"formly-validation-message",3),2&c){const a=t.oxw();t.Q6J("field",a.field)}}const _={name:"cvc-field-errors",component:(()=>{class c extends e.n2{get errorState(){return this.showError?"error":""}}return c.\u0275fac=function(){let f;return function(m){return(f||(f=t.n5z(c)))(m||c)}}(),c.\u0275cmp=t.Xpm({type:c,selectors:[["cvc-field-errors-wrapper"]],features:[t.qOj],decls:7,vars:3,consts:[[3,"nzValidateStatus","nzErrorTip"],["fieldComponent",""],["errorTpl",""],[3,"field"]],template:function(a,m){if(1&a&&(t.TgZ(0,"nz-form-control",0),t.TgZ(1,"p"),t._uU(2),t.qZA(),t.GkF(3,null,1),t.YNc(5,r,1,1,"ng-template",null,2,t.W1O),t.qZA()),2&a){const w=t.MAs(6);t.Q6J("nzValidateStatus",m.errorState)("nzErrorTip",w),t.xp6(2),t.hij("errorState: ",m.errorState,"")}},directives:[M.t3,S.Fd,e.u_],encapsulation:2,changeDetection:0}),c})()};let x=(()=>{class c{}return c.\u0275fac=function(a){return new(a||c)},c.\u0275mod=t.oAB({type:c}),c.\u0275inj=t.cJS({imports:[[h.ez,v.UX,S.U5,e.X0.forChild({wrappers:[_]})]]}),c})(),T=(()=>{class c{}return c.\u0275fac=function(a){return new(a||c)},c.\u0275mod=t.oAB({type:c}),c.\u0275inj=t.cJS({imports:[[h.ez,v.u5,e.X0.forChild({types:[i]}),v.UX,x,S.U5,z.o7,Z.PV,g.sL]]}),c})()},2079:(Y,N,u)=>{u.d(N,{g:()=>fe});var h=u(9808),v=u(8776),e=u(5e3),S=u(4182),z=u(712),Z=u(6530),t=u(444);const M={sourceType:void 0,citationId:void 0};let g=(()=>{class o{constructor(){this.sourceSelected=new e.vpe,this.model=M,this.form=new S.cw({}),this.options={},this.fields=[{key:"id"},{key:"citation",defaultValue:""},{key:"sourceType",type:"select",className:"source-type-field",defaultValue:z.yic.Pubmed,templateOptions:{required:!0,placeholder:"Select Type",options:(0,t.o6)(z.yic).map((n,l)=>({value:n,label:(0,Z.c)(n)}))}},{key:"citationId",className:"citation-id-field",type:"source-selector-typeahead",templateOptions:{maxLength:10,required:!0,triggerParentSubmit:()=>{this.onSubmit()}},expressionProperties:{"templateOptions.disabled":"!model.sourceType","templateOptions.placeholder":'!model.sourceType ? "Select source type before searching" : "Search " + model.sourceType + " sources"',"templateOptions.sourceType":"model.sourceType","templateOptions.sourceTypeKey":n=>{if(n.sourceType)return(0,t.o6)(z.yic).getKeyOrThrow(n.sourceType)}}},{type:"cvc-multi-field-add-btn",className:"add-button",templateOptions:{label:"Add Source"},expressionProperties:{"templateOptions.disabled":"!model.citationId"}}]}ngOnInit(){}onSubmit(){console.log("source-select form submitted."),this.sourceSelected.emit(this.model)}ngOnDestroy(){console.log("source-selector onDestroy called.")}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["cvc-source-selector"]],outputs:{sourceSelected:"sourceSelected"},decls:2,vars:5,consts:[["nz-form","","nzLayout","horizontal",3,"formGroup","ngSubmit"],[1,"formly-form",3,"model","fields","options","form","modelChange"]],template:function(n,l){1&n&&(e.TgZ(0,"form",0),e.NdJ("ngSubmit",function(){return l.onSubmit()}),e.TgZ(1,"formly-form",1),e.NdJ("modelChange",function(C){return l.model=C}),e.qZA(),e.qZA()),2&n&&(e.Q6J("formGroup",l.form),e.xp6(1),e.Q6J("model",l.model)("fields",l.fields)("options",l.options)("form",l.form))},directives:[S._Y,S.JL,S.sg,v.T7],styles:[":host{display:block}cvc-source-input .formly-form{width:100%}cvc-source-input .source-type-field{display:inline-block;width:10em}cvc-source-input .citation-id-field{display:inline-block;margin-left:.5em;width:calc(100% - 19em)}cvc-source-input .add-button{display:inline-block;margin-left:.5em;width:8em}\n"],encapsulation:2}),o})();var y=u(6906);function O(o,s){if(1&o){const n=e.EpF();e.ynx(0),e.TgZ(1,"cvc-source-selector",2),e.NdJ("sourceSelected",function(p){return e.CHM(n),e.oxw().onSourceSelected(p)}),e.qZA(),e.BQk()}}function F(o,s){if(1&o&&e._UZ(0,"cvc-source-tag",3),2&o){const n=e.oxw();e.Q6J("source",n.formControl.value)("onCloseClicked",n.closeCallback)}}const V={name:"source-input",component:(()=>{class o extends v.fS{constructor(){super(),this.closeCallback=n=>{console.log(`I just closed source ${n}`)}}onSourceSelected(n){console.log(n),this.formControl.setValue(n)}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["cvc-source-input-type"]],features:[e.qOj],decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["sourceListItem",""],[3,"sourceSelected"],[3,"source","onCloseClicked"]],template:function(n,l){if(1&n&&(e.YNc(0,O,2,0,"ng-container",0),e.YNc(1,F,1,2,"ng-template",null,1,e.W1O)),2&n){const p=e.MAs(2);e.Q6J("ngIf",!(null!=l.formControl.value&&l.formControl.value.id))("ngIfElse",p)}},directives:[h.O5,g,y.T],styles:[""],changeDetection:0}),o})()};var E=u(9139),A=u(6042),Q=u(8054),U=u(537),b=u(8144),J=u(2359),B=u(1894),L=u(4546),I=u(822),i=u(2643),r=u(2683);function d(o,s){if(1&o&&e._UZ(0,"nz-alert",6),2&o){e.oxw();const n=e.MAs(3);e.Q6J("nzMessage",n)}}function _(o,s){if(1&o&&(e._uU(0," Found citation: "),e.TgZ(1,"em"),e._uU(2),e.qZA()),2&o){const n=e.oxw(3);e.xp6(2),e.Oqu(n.foundCitation)}}function x(o,s){1&o&&(e.ynx(0),e.YNc(1,d,1,1,"nz-alert",4),e.YNc(2,_,3,1,"ng-template",null,5,e.W1O),e.BQk())}function T(o,s){if(1&o&&e._UZ(0,"nz-alert",9),2&o){e.oxw();const n=e.MAs(3);e.Q6J("nzMessage",n)}}function c(o,s){if(1&o&&(e._uU(0," '"),e.TgZ(1,"em"),e._uU(2),e.qZA(),e._uU(3,"' created. ")),2&o){const n=e.oxw(3);e.xp6(2),e.Oqu(n.foundCitation)}}function f(o,s){1&o&&(e.ynx(0),e.YNc(1,T,1,1,"nz-alert",7),e.YNc(2,c,4,1,"ng-template",null,8,e.W1O),e.BQk())}function a(o,s){if(1&o&&(e.TgZ(0,"nz-form-item"),e._UZ(1,"cvc-form-errors-alert",10),e.qZA()),2&o){const n=e.oxw(2);e.xp6(1),e.Q6J("errors",n.createErrors)}}function m(o,s){if(1&o){const n=e.EpF();e.TgZ(0,"button",12),e.NdJ("click",function(p){return e.CHM(n),e.oxw(3).onCreateSourceStub(p)}),e._uU(1," Create\xa0'"),e.TgZ(2,"em"),e._uU(3),e.qZA(),e._uU(4,"'\xa0 CIViC Source "),e.qZA()}if(2&o){const n=e.oxw(3);e.Q6J("nzLoading",n.isCreating),e.xp6(3),e.Oqu(n.foundCitation)}}function w(o,s){1&o&&(e.ynx(0),e.YNc(1,m,5,2,"button",11),e.BQk())}function k(o,s){if(1&o){const n=e.EpF();e.TgZ(0,"button",14),e.NdJ("click",function(p){return e.CHM(n),e.oxw(3).onAcceptSource(p)}),e._uU(1," Add Source to List "),e.qZA()}}function j(o,s){1&o&&(e.ynx(0),e.YNc(1,k,2,0,"button",13),e.BQk())}function K(o,s){if(1&o&&(e.ynx(0),e.TgZ(1,"nz-space",2),e.YNc(2,x,4,0,"ng-container",3),e.YNc(3,f,4,0,"ng-container",3),e.YNc(4,a,2,1,"nz-form-item",3),e.YNc(5,w,2,0,"ng-container",3),e.YNc(6,j,2,0,"ng-container",3),e.qZA(),e.BQk()),2&o){const n=e.oxw();e.xp6(2),e.Q6J("ngIf",!1===n.createSuccess&&0===n.createErrors.length),e.xp6(1),e.Q6J("ngIf",!0===n.createSuccess),e.xp6(1),e.Q6J("ngIf",n.createErrors.length>0),e.xp6(1),e.Q6J("ngIf",!1===n.createSuccess),e.xp6(1),e.Q6J("ngIf",!0===n.createSuccess)}}function D(o,s){if(1&o&&(e.TgZ(0,"span",16),e._UZ(1,"i",17),e._uU(2),e.qZA()),2&o){const n=e.oxw(3);e.xp6(2),e.hij(" Source not known to CIViC, fetch citation from ",n.sourceTypeKey,"? ")}}function q(o,s){1&o&&(e.ynx(0),e.YNc(1,D,3,1,"span",15),e.BQk())}function X(o,s){if(1&o&&e._uU(0),2&o){const n=e.oxw(4);e.AsE(" Citation not found for ",n.sourceTypeKey,": ",n.citationId,". ")}}function H(o,s){if(1&o&&(e.TgZ(0,"span"),e._UZ(1,"nz-alert",19),e.YNc(2,X,1,2,"ng-template",null,20,e.W1O),e.qZA()),2&o){const n=e.MAs(3);e.xp6(1),e.Q6J("nzMessage",n)}}function R(o,s){1&o&&(e.ynx(0),e.YNc(1,H,4,1,"span",18),e.BQk())}function G(o,s){if(1&o){const n=e.EpF();e.TgZ(0,"button",12),e.NdJ("click",function(p){return e.CHM(n),e.oxw(2).onExistenceQuery(p)}),e._uU(1," Fetch Citation for\xa0"),e.TgZ(2,"strong"),e._uU(3),e.qZA(),e.qZA()}if(2&o){const n=e.oxw(2);e.Q6J("nzLoading",n.isChecking),e.xp6(3),e.AsE("",n.sourceTypeKey," ",n.citationId,"")}}function $(o,s){if(1&o&&(e.TgZ(0,"nz-space",2),e.YNc(1,q,2,0,"ng-container",3),e.YNc(2,R,2,0,"ng-container",3),e.YNc(3,G,4,3,"button",11),e.qZA()),2&o){const n=e.oxw();e.xp6(1),e.Q6J("ngIf",n.showPrompt),e.xp6(1),e.Q6J("ngIf",n.existenceFail)}}let ee=(()=>{class o{constructor(n,l,p){this.existenceCheckQuery=n,this.createSourceStubQuery=l,this.changeDetectorRef=p,this.modelUpdate=new e.vpe,this.citationIdChange=new e.vpe,this.sourceTypeChange=new e.vpe,this.showPrompt=!0,this.isChecking=!1,this.existenceFail=!1,this.existenceError=[],this.foundCitation=void 0,this.isCreating=!1,this.createSuccess=!1,this.createErrors=[]}set sourceType(n){this._sourceType=n,this.sourceTypeKey=(0,t.o6)(z.yic).getKeyOrThrow(n)}get sourceType(){return this._sourceType}onExistenceQuery(n){n&&n.preventDefault(),this.isChecking=!0,this.foundCitation=void 0,this.existenceCheckQuery.fetch({sourceType:this.sourceType,citationId:+this.citationId}).pipe((0,U.x)(()=>{this.isChecking=!1,this.changeDetectorRef.detectChanges()})).subscribe({next:({data:{remoteCitation:l}})=>{null!==l?this.foundCitation=l:(this.showPrompt=!1,this.existenceFail=!0)},error:l=>{this.showPrompt=!1,this.existenceError=l.graphQLErrors.map(p=>p.message)},complete:()=>{this.existenceError=[]}})}onCreateSourceStub(n){n&&n.preventDefault(),this.isCreating=!0,this.createSuccess=!1,this.createSourceStubQuery.mutate({input:{citationId:+this.citationId,sourceType:this.sourceType}}).pipe((0,U.x)(()=>{this.isCreating=!1,this.changeDetectorRef.detectChanges()})).subscribe({next:({data:l})=>{var p;console.log(l);const C=null===(p=null==l?void 0:l.addRemoteCitation)||void 0===p?void 0:p.newSource;this.sourceStub=C,this.createSuccess=!0},error:l=>{this.showPrompt=!1,this.createSuccess=!1,this.createErrors=l.graphQLErrors.map(p=>p.message)},complete:()=>{this.createErrors=[]}})}onAcceptSource(n){n&&n.preventDefault(),console.log("source accepted");const l=Object.assign(Object.assign({},this.model),{id:this.sourceStub.id,citation:this.foundCitation,citationId:this.citationId});this.modelUpdate.emit(l)}ngAfterContentInit(){console.log("model")}}return o.\u0275fac=function(n){return new(n||o)(e.Y36(z.fpJ),e.Y36(z.JQ3),e.Y36(e.sBO))},o.\u0275cmp=e.Xpm({type:o,selectors:[["cvc-source-loader"]],inputs:{model:"model",citationId:"citationId",sourceType:"sourceType"},outputs:{modelUpdate:"modelUpdate",citationIdChange:"citationIdChange",sourceTypeChange:"sourceTypeChange"},decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["fetchCitation",""],["nzDirection","vertical"],[4,"ngIf"],["nzType","info","nzShowIcon","",3,"nzMessage",4,"nzSpaceItem"],["foundCitationMsg",""],["nzType","info","nzShowIcon","",3,"nzMessage"],["nzType","success","nzShowIcon","",3,"nzMessage",4,"nzSpaceItem"],["createdMsg",""],["nzType","success","nzShowIcon","",3,"nzMessage"],[3,"errors"],["type","submit","nz-button","","nzBlock","","nzType","primary","nzSize","default",3,"nzLoading","click",4,"nzSpaceItem"],["type","submit","nz-button","","nzBlock","","nzType","primary","nzSize","default",3,"nzLoading","click"],["type","submit","nz-button","","nzBlock","","nzType","primary","nzSize","default",3,"click",4,"nzSpaceItem"],["type","submit","nz-button","","nzBlock","","nzType","primary","nzSize","default",3,"click"],["nz-typography","",4,"nzSpaceItem"],["nz-typography",""],["nz-icon","","nzType","info-circle","nzTheme","twotone"],[4,"nzSpaceItem"],["nzType","warning","nzShowIcon","",3,"nzMessage"],["existenceFail",""]],template:function(n,l){if(1&n&&(e.YNc(0,K,7,5,"ng-container",0),e.YNc(1,$,4,2,"ng-template",null,1,e.W1O)),2&n){const p=e.MAs(2);e.Q6J("ngIf",l.foundCitation)("ngIfElse",p)}},directives:[h.O5,b.NU,b.$1,J.r,B.SK,L.Nx,I.V,A.ix,i.dQ,r.w],styles:["[_nghost-%COMP%]{display:block}nz-space[_ngcontent-%COMP%]{width:100%}nz-space-item[_ngcontent-%COMP%]:last-child{margin-bottom:0}"]}),o})();function te(o,s){if(1&o&&(e.TgZ(0,"nz-option",4),e._uU(1),e.qZA()),2&o){const n=s.$implicit;e.Q6J("nzLabel",n.label)("nzValue",n.value),e.xp6(1),e.AsE(" ",n.source.citation," (",n.source.citationId,") ")}}function ne(o,s){if(1&o&&(e.TgZ(0,"div",5),e._uU(1," Citation: "),e.TgZ(2,"span",6),e._uU(3),e.qZA(),e.qZA()),2&o){const n=e.oxw();e.xp6(3),e.hij(" ",n.model.citation," ")}}function oe(o,s){if(1&o&&(e.TgZ(0,"div",5),e._uU(1),e.qZA()),2&o){const n=e.oxw(2);e.xp6(1),e.hij(" Enter a ",n.to.sourceTypeKey," citation ID to search CIViC sources ")}}function re(o,s){if(1&o){const n=e.EpF();e.TgZ(0,"cvc-source-loader",10),e.NdJ("modelUpdate",function(p){return e.CHM(n),e.oxw(2).onModelUpdated(p)})("sourceTypeChange",function(p){return e.CHM(n),e.oxw(2).model.sourceType=p})("citationIdChange",function(p){return e.CHM(n),e.oxw(2).to.fieldValue=p}),e.qZA()}if(2&o){const n=e.oxw(2);e.Q6J("model",n.model)("sourceType",n.model.sourceType)("citationId",n.to.fieldValue)}}function ie(o,s){if(1&o&&(e.ynx(0,7),e.YNc(1,oe,2,1,"div",8),e.YNc(2,re,1,3,"cvc-source-loader",9),e.BQk()),2&o){const n=e.oxw();e.Q6J("ngSwitch",n.to.fieldLength>0&&n.to.fieldLength>=n.to.minLengthSearch),e.xp6(1),e.Q6J("ngSwitchCase",!1),e.xp6(1),e.Q6J("ngSwitchCase",!0)}}const ce={name:"source-selector-typeahead",component:(()=>{class o extends v.fS{constructor(n,l){super(),this.sourceTypeaheadQuery=n,this.changeDetectorRef=l,this.selectedValue=null,this.nzFilterOption=()=>!0,this.defaultOptions={templateOptions:{placeholder:"Search",sourceType:void 0,showArrow:!1,onSearch:()=>{},filterOption:()=>{},modelChange:()=>{},triggerParentSubmit:()=>{},minLengthSearch:1,fieldLength:0,fieldValue:"",optionList:[]}}}ngAfterViewInit(){this.to.filterOption=()=>!0,this.to.modelChange=n=>{if(this.to.optionList.length>0){const{source:l}=this.to.optionList.find(p=>p.value===+n);l?this.form.patchValue({citation:l.citation,id:l.id}):console.error("Could not find selected citation in list?")}},this.to.onSearch=n=>{this.to.fieldValue=n,this.to.fieldLength=n.length,!(n.length<this.to.minLengthSearch||n.length>this.to.maxLength)&&this.sourceTypeaheadQuery.fetch({sourceType:this.to.sourceType,partialCitationId:+n}).subscribe(({data:{sourceTypeahead:l}})=>{this.to.optionList=l.map(p=>({value:p.citationId,label:p.citationId,source:p})),this.changeDetectorRef.detectChanges()})}}onModelUpdated(n){this.form.patchValue(n),this.changeDetectorRef.detectChanges(),this.to.triggerParentSubmit()}}return o.\u0275fac=function(n){return new(n||o)(e.Y36(z.k2T),e.Y36(e.sBO))},o.\u0275cmp=e.Xpm({type:o,selectors:[["cvc-source-selector-typeahead-type"]],features:[e.qOj],decls:5,vars:8,consts:[["nzShowSearch","","nzServerSearch","",3,"formControl","formlyAttributes","nzPlaceHolder","nzNotFoundContent","nzShowArrow","nzFilterOption","ngModelChange","nzOnSearch"],["nzCustomContent","",3,"nzLabel","nzValue",4,"ngFor","ngForOf"],["class","ant-form-item-explain",4,"ngIf"],["sourceLoader",""],["nzCustomContent","",3,"nzLabel","nzValue"],[1,"ant-form-item-explain"],[1,"source-citation"],[3,"ngSwitch"],["class","ant-form-item-explain",4,"ngSwitchCase"],[3,"model","sourceType","citationId","modelUpdate","sourceTypeChange","citationIdChange",4,"ngSwitchCase"],[3,"model","sourceType","citationId","modelUpdate","sourceTypeChange","citationIdChange"]],template:function(n,l){if(1&n&&(e.TgZ(0,"nz-select",0),e.NdJ("ngModelChange",function(C){return l.to.modelChange(C)})("nzOnSearch",function(C){return l.to.onSearch(C)}),e.YNc(1,te,2,4,"nz-option",1),e.qZA(),e.YNc(2,ne,4,1,"div",2),e.YNc(3,ie,3,3,"ng-template",null,3,e.W1O)),2&n){const p=e.MAs(4);e.Q6J("formControl",l.formControl)("formlyAttributes",l.field)("nzPlaceHolder",l.to.placeholder?l.to.placeholder:null)("nzNotFoundContent",p)("nzShowArrow",l.to.showArrow)("nzFilterOption",l.to.filterOption),e.xp6(1),e.Q6J("ngForOf",l.to.optionList),e.xp6(1),e.Q6J("ngIf",l.model.citation.length>0)}},directives:[Q.Vq,S.JJ,S.oH,v.VQ,h.sg,Q.Ip,h.O5,h.RF,h.n9,ee],styles:["[_nghost-%COMP%]{display:block}.loading-icon[_ngcontent-%COMP%]{margin-right:8px}.source-citation[_ngcontent-%COMP%]{font-style:oblique}"],changeDetection:0}),o})(),wrappers:["form-field"]};var le=u(7008);let W=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[h.ez,b.zf,J.L,L.U5,le.B,A.sL]]}),o})(),ae=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[h.ez,S.UX,v.X0.forChild({types:[ce]}),Q.LV,W]]}),o})();const se={name:"cvc-multi-field-add-btn",component:(()=>{class o extends v.fS{constructor(){super()}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["cvc-multi-field-add-btn-type"]],features:[e.qOj],decls:2,vars:2,consts:[["type","submit","nz-button","","nzType","primary","nzSize","small","nzBlock","",3,"disabled"]],template:function(n,l){1&n&&(e.TgZ(0,"button",0),e._uU(1),e.qZA()),2&n&&(e.Q6J("disabled",l.to.disabled),e.xp6(1),e.Oqu(l.to.label))},directives:[A.ix,i.dQ,r.w],styles:[""],encapsulation:2,changeDetection:0}),o})()};let ue=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[h.ez,E.u,v.X0.forChild({types:[se]}),L.U5,A.sL]]}),o})(),pe=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[h.ez,S.UX,v.X0,E.u,A.sL,W,ae,ue]]}),o})();var de=u(9779);let fe=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[h.ez,v.X0.forChild({types:[V]}),pe,de.s]]}),o})()},7462:(Y,N,u)=>{u.d(N,{o:()=>M});var h=u(9808),v=u(8776),e=u(5e3),S=u(1047),z=u(4182);const t={name:"cvc-textarea",component:(()=>{class g extends v.fS{constructor(){super(...arguments),this.defaultOptions={templateOptions:{autosize:{minRows:2,maxRows:20}}}}}return g.\u0275fac=function(){let y;return function(F){return(y||(y=e.n5z(g)))(F||g)}}(),g.\u0275cmp=e.Xpm({type:g,selectors:[["cvc-textarea-base-type"]],features:[e.qOj],decls:1,vars:3,consts:[["nz-input","",3,"nzAutosize","formControl","formlyAttributes"]],template:function(O,F){1&O&&e._UZ(0,"textarea",0),2&O&&e.Q6J("nzAutosize",F.to.autosize)("formControl",F.formControl)("formlyAttributes",F.field)},directives:[S.Zp,S.rh,z.Fj,z.JJ,z.oH,v.VQ],styles:[""],changeDetection:0}),g})(),wrappers:["form-field"]};let M=(()=>{class g{}return g.\u0275fac=function(O){return new(O||g)},g.\u0275mod=e.oAB({type:g}),g.\u0275inj=e.cJS({imports:[[h.ez,z.u5,z.UX,v.X0.forChild({types:[t]}),S.o7]]}),g})()},444:(Y,N,u)=>{function h(i){return i!==String(parseFloat(i))}u.d(N,{o6:()=>I});var z=Object.getOwnPropertyNames?function v(i){return Object.getOwnPropertyNames(i).filter(function(r){return i.propertyIsEnumerable(r)&&h(r)})}:Object.keys?function e(i){return Object.keys(i).filter(h)}:function S(i){var r=[];for(var d in i)i.hasOwnProperty(d)&&i.propertyIsEnumerable(d)&&h(d)&&r.push(d);return r},Z=function(){function i(r){this.enumObj=r,this.keysList=Object.freeze(z(r));for(var d=this.keysList.length,_=new Array(d),x=new Map,T=0;T<d;++T){var c=this.keysList[T],f=r[c];_[T]=f,x.set(f,c),this[T]=Object.freeze([c,f])}this.valuesList=Object.freeze(_),this.keysByValueMap=x,this.size=this.length=d,Object.freeze(this)}return i.prototype.toString=function(){return"[object EnumWrapper]"},i.prototype.keys=function(){var r,d=this,_=0;return(r={next:function(){var T={done:_>=d.length,value:d.keysList[_]};return++_,T}})[Symbol.iterator]=function(){return this},r},i.prototype.values=function(){var r,d=this,_=0;return(r={next:function(){var T={done:_>=d.length,value:d.valuesList[_]};return++_,T}})[Symbol.iterator]=function(){return this},r},i.prototype.entries=function(){var r,d=this,_=0;return(r={next:function(){var T={done:_>=d.length,value:d[_]};return++_,T}})[Symbol.iterator]=function(){return this},r},i.prototype[Symbol.iterator]=function(){return this.entries()},i.prototype.forEach=function(r,d){for(var _=this.length,x=0;x<_;++x){var T=this[x];r.call(d,T[1],T[0],this,x)}},i.prototype.map=function(r,d){for(var _=this.length,x=new Array(_),T=0;T<_;++T){var c=this[T];x[T]=r.call(d,c[1],c[0],this,T)}return x},i.prototype.getKeys=function(){return this.keysList.slice()},i.prototype.getValues=function(){return this.valuesList.slice()},i.prototype.getEntries=function(){return Array.prototype.slice.call(this)},i.prototype.indexOfKey=function(r){return this.keysList.indexOf(r)},i.prototype.indexOfValue=function(r){return this.valuesList.indexOf(r)},i.prototype.isKey=function(r){return null!=r&&h(r)&&this.enumObj.hasOwnProperty(r)},i.prototype.asKeyOrThrow=function(r){if(this.isKey(r))return r;throw new Error("Unexpected key: "+r+". Expected one of: "+this.getValues())},i.prototype.asKeyOrDefault=function(r,d){return this.isKey(r)?r:d},i.prototype.isValue=function(r){return null!=r&&this.keysByValueMap.has(r)},i.prototype.asValueOrThrow=function(r){if(this.isValue(r))return r;throw new Error("Unexpected value: "+r+". Expected one of: "+this.getValues())},i.prototype.asValueOrDefault=function(r,d){return this.isValue(r)?r:d},i.prototype.getKeyOrThrow=function(r){var d=null!=r?this.keysByValueMap.get(r):void 0;if(null!=d)return d;throw new Error("Unexpected value: "+r+". Expected one of: "+this.getValues())},i.prototype.getKeyOrDefault=function(r,d){var _=null!=r?this.keysByValueMap.get(r):void 0;return null!=_?_:d},i.prototype.getValueOrThrow=function(r){return this.enumObj[this.asKeyOrThrow(r)]},i.prototype.getValueOrDefault=function(r,d){return this.isKey(r)?this.enumObj[r]:d},i}();Z.prototype[Symbol.toStringTag]="EnumWrapper";var t=Symbol("ts-enum-util:unhandledEntry"),M=Symbol("ts-enum-util:handleNull"),g=Symbol("ts-enum-util:handleUndefined"),y=Symbol("ts-enum-util:handleUnexpected");function O(i){return new Error("Unhandled value: "+i)}var F=function(){function i(r){this.value=r}return i.prototype.with=function(r){if(r.hasOwnProperty(this.value))return E(r[this.value],this.value);if(r[y])return E(r[y],this.value);throw new Error("Unexpected value: "+this.value)},i}(),P=function(){function i(){}return i.prototype.with=function(r){if(r[M])return E(r[M],null);if(r[y])return E(r[y],null);throw new Error("Unexpected value: null")},i}(),V=function(){function i(){}return i.prototype.with=function(r){if(r[g])return E(r[g],void 0);if(r[y])return E(r[y],void 0);throw new Error("Unexpected value: undefined")},i}();function E(i,r){if(i===t)throw O(r);return i(r)}var A=function(){function i(r){this.value=r}return i.prototype.with=function(r){if(r.hasOwnProperty(this.value))return b(r[this.value],this.value);if(r.hasOwnProperty(y))return b(r[y],this.value);throw new Error("Unexpected value: "+this.value)},i}(),Q=function(){function i(){}return i.prototype.with=function(r){if(r.hasOwnProperty(M))return b(r[M],null);if(r.hasOwnProperty(y))return b(r[y],null);throw new Error("Unexpected value: null")},i}(),U=function(){function i(){}return i.prototype.with=function(r){if(r.hasOwnProperty(g))return b(r[g],void 0);if(r.hasOwnProperty(y))return b(r[y],void 0);throw new Error("Unexpected value: undefined")},i}();function b(i,r){if(i===t)throw O(r);return i}var L=new WeakMap;function I(i){var r=L.get(i);return r||(r=new Z(i),L.set(i,r)),r}I.handleNull=M,I.handleUndefined=g,I.handleUnexpected=y,I.unhandledEntry=t,I.visitValue=function J(i){return null===i?new P:void 0===i?new V:new F(i)},I.mapValue=function B(i){return null===i?new Q:void 0===i?new U:new A(i)}}}]);