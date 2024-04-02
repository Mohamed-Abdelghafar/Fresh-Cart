"use strict";(self.webpackChunkFreshCart=self.webpackChunkFreshCart||[]).push([[173],{5173:(I,d,i)=>{i.r(d),i.d(d,{CashDetailsComponent:()=>O});var p=i(6814),n=i(95),t=i(4769),C=i(9410),u=i(6286),T=i(8175),a=i(1120);function m(e,o){1&e&&(t.TgZ(0,"p",16),t._uU(1,"Min Characters 10"),t.qZA())}function A(e,o){1&e&&(t.TgZ(0,"p",16),t._uU(1,"Max Characters 30"),t.qZA())}function E(e,o){1&e&&(t.TgZ(0,"p",16),t._uU(1,"Address is required"),t.qZA())}function x(e,o){if(1&e&&(t.TgZ(0,"div",14),t.YNc(1,m,2,0,"p",15),t.YNc(2,A,2,0,"p",15),t.YNc(3,E,2,0,"p",15),t.qZA()),2&e){const r=t.oxw();let l,s,_;t.xp6(1),t.Q6J("ngIf",null==(l=r.detailsForm.get("details"))?null:l.getError("minlength")),t.xp6(1),t.Q6J("ngIf",null==(s=r.detailsForm.get("details"))?null:s.getError("maxlength")),t.xp6(1),t.Q6J("ngIf",null==(_=r.detailsForm.get("details"))?null:_.getError("required"))}}function Z(e,o){1&e&&(t.TgZ(0,"p",16),t._uU(1,"phone is required"),t.qZA())}function D(e,o){1&e&&(t.TgZ(0,"p",16),t._uU(1,"the phone number isn't valid"),t.qZA())}function U(e,o){if(1&e&&(t.TgZ(0,"div",14),t.YNc(1,Z,2,0,"p",15),t.YNc(2,D,2,0,"p",15),t.qZA()),2&e){const r=t.oxw();let l,s;t.xp6(1),t.Q6J("ngIf",null==(l=r.detailsForm.get("phone"))?null:l.getError("required")),t.xp6(1),t.Q6J("ngIf",null==(s=r.detailsForm.get("phone"))?null:s.getError("pattern"))}}function y(e,o){1&e&&(t.TgZ(0,"p",16),t._uU(1,"Min Characters 3"),t.qZA())}function P(e,o){1&e&&(t.TgZ(0,"p",16),t._uU(1,"Max Characters 15"),t.qZA())}function F(e,o){1&e&&(t.TgZ(0,"p",16),t._uU(1,"City is required"),t.qZA())}function M(e,o){if(1&e&&(t.TgZ(0,"div",14),t.YNc(1,y,2,0,"p",15),t.YNc(2,P,2,0,"p",15),t.YNc(3,F,2,0,"p",15),t.qZA()),2&e){const r=t.oxw();let l,s,_;t.xp6(1),t.Q6J("ngIf",null==(l=r.detailsForm.get("city"))?null:l.getError("minlength")),t.xp6(1),t.Q6J("ngIf",null==(s=r.detailsForm.get("city"))?null:s.getError("maxlength")),t.xp6(1),t.Q6J("ngIf",null==(_=r.detailsForm.get("city"))?null:_.getError("required"))}}let O=(()=>{class e{constructor(r,l,s,_,f,v){this._FormBuilder=r,this._AuthService=l,this._CartService=s,this._PaymentService=_,this._ActivatedRoute=f,this._Router=v,this.detailsForm=this._FormBuilder.group({details:[null,[n.kI.required,n.kI.minLength(10),n.kI.maxLength(30)]],phone:[null,[n.kI.required,n.kI.pattern(/^01[0,1,2,5][0-9]{8}$/)]],city:[null,[n.kI.required,n.kI.minLength(3),n.kI.maxLength(15)]]}),this.cartId="",this.allOrdersNumbers=0,this.userId=""}ngOnInit(){this._ActivatedRoute.paramMap.subscribe({next:r=>{this.cartId=r.get("id")},error:r=>{}})}completePayment(){this._PaymentService.cashPayment(this.cartId,this.detailsForm.value).subscribe({next:r=>{"success"==r.status&&(this._Router.navigate(["./allorders"]),this._AuthService.decodeToken(),this.userId=this._AuthService.userData.id,this._PaymentService.userAllOrders(this.userId).subscribe({next:l=>{this.allOrdersNumbers=l.length,console.log(this.allOrdersNumbers),this._PaymentService.ordersNumber.next(this.allOrdersNumbers)},error:l=>{}}),this._CartService.cartItemsNumber.next(0))},error:r=>{}})}static#t=this.\u0275fac=function(l){return new(l||e)(t.Y36(n.qu),t.Y36(C.e),t.Y36(u.N),t.Y36(T.t),t.Y36(a.gz),t.Y36(a.F0))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-cash-details"]],standalone:!0,features:[t.jDz],decls:24,vars:5,consts:[[1,"my-3","p-3","rounded-3","bg-main-light"],[3,"formGroup","submit"],[1,"mb-2"],["for","address",1,"text-main","ps-1"],["name","address","id","address","placeholder","Enter Your Address ...","formControlName","details",1,"form-control","mt-2"],["detailsInput",""],["class","alert alert-danger mt-2",4,"ngIf"],["for","phone",1,"text-main","ps-1"],["type","tel","name","userPhone","id","phone","placeholder","Enter Your Phone ...","formControlName","phone",1,"form-control","mt-2"],["userPhone",""],["for","city",1,"text-main","ps-1"],["type","text","name","userCity","id","city","placeholder","Enter Your City ...","formControlName","city",1,"form-control","mt-2"],["cityInput",""],[1,"btn-main","payment","py-1","px-2","mt-3",3,"disabled"],[1,"alert","alert-danger","mt-2"],["class","mb-0",4,"ngIf"],[1,"mb-0"]],template:function(l,s){if(1&l&&(t.TgZ(0,"section",0)(1,"h1"),t._uU(2,"Fill your address details"),t.qZA(),t.TgZ(3,"form",1),t.NdJ("submit",function(){return s.completePayment()}),t.TgZ(4,"div",2)(5,"label",3),t._uU(6,"Address Details"),t.qZA(),t._UZ(7,"textarea",4,5),t.YNc(9,x,4,3,"div",6),t.qZA(),t.TgZ(10,"div",2)(11,"label",7),t._uU(12,"Phone"),t.qZA(),t._UZ(13,"input",8,9),t.YNc(15,U,3,2,"div",6),t.qZA(),t.TgZ(16,"div",2)(17,"label",10),t._uU(18,"City"),t.qZA(),t._UZ(19,"input",11,12),t.YNc(21,M,4,3,"div",6),t.qZA(),t.TgZ(22,"button",13),t._uU(23,"Complete Payment"),t.qZA()()()),2&l){const _=t.MAs(8),f=t.MAs(14),v=t.MAs(20);let c,h,g;t.xp6(3),t.Q6J("formGroup",s.detailsForm),t.xp6(6),t.Q6J("ngIf",(null==(c=s.detailsForm.get("details"))?null:c.errors)&&((null==(c=s.detailsForm.get("address"))?null:c.touched)||_.value.length>0)),t.xp6(6),t.Q6J("ngIf",(null==(h=s.detailsForm.get("phone"))?null:h.errors)&&((null==(h=s.detailsForm.get("phone"))?null:h.touched)||f.value.length>0)),t.xp6(6),t.Q6J("ngIf",(null==(g=s.detailsForm.get("city"))?null:g.errors)&&((null==(g=s.detailsForm.get("city"))?null:g.touched)||v.value.length>0)),t.xp6(1),t.Q6J("disabled",s.detailsForm.invalid)}},dependencies:[p.ez,p.O5,n.UX,n._Y,n.Fj,n.JJ,n.JL,n.sg,n.u]})}return e})()},6286:(I,d,i)=>{i.d(d,{N:()=>C});var p=i(5619),n=i(4769),t=i(9862);let C=(()=>{class u{constructor(a){this._HttpClient=a,this.cartItemsNumber=new p.X(0),this.baseUrl="https://ecommerce.routemisr.com/api/v1/cart/"}addToCart(a){return this._HttpClient.post(this.baseUrl,{productId:a})}getUserCart(){return this._HttpClient.get(this.baseUrl)}deleteItem(a){return this._HttpClient.delete(this.baseUrl+a)}updateItemCount(a,m){return this._HttpClient.put(this.baseUrl+a,{count:m})}deleteCart(){return this._HttpClient.delete(this.baseUrl)}static#t=this.\u0275fac=function(m){return new(m||u)(n.LFG(t.eN))};static#e=this.\u0275prov=n.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"})}return u})()}}]);