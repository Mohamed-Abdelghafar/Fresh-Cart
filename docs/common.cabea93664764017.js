"use strict";(self.webpackChunkFreshCart=self.webpackChunkFreshCart||[]).push([[592],{7913:(d,p,e)=>{e.d(p,{c:()=>l});var i=e(6814),t=e(4769);let l=(()=>{class o{linkedIn(){window.open("https://www.linkedin.com/in/mohamed-abdel-ghaffar-982026288/")}static#t=this.\u0275fac=function(s){return new(s||o)};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-footer"]],standalone:!0,features:[t.jDz],decls:38,vars:0,consts:[[1,"bg-main-light","pt-5","pb-2"],[1,"container"],[1,"text-muted"],[1,"d-flex","align-items-center","justify-content-between","flex-wrap"],[1,"w-75","my-2"],["type","email","name","userEmail","placeholder","Email ...",1,"form-control"],[1,"my-2"],[1,"btn-main"],[1,"my-3"],[1,"d-flex","flex-wrap","justify-content-between","align-items-center"],[1,"d-flex","flex-wrap","gap-3","align-items-center"],["src","./assets/images/amazonpay.svg","alt","amazonpay-logo"],["src","./assets/images/american-express.svg","alt","american-express-logo"],["src","./assets/images/mastercard.svg","alt","mastercard-logo"],["src","./assets/images/paypal.svg","alt","paypal-logo"],[1,"d-flex","align-items-center","text-center"],["src","./assets/images/appstore-btn.svg","alt","appstore-btn-logo",1,"w-75"],["src","./assets/images/googleplay-btn.svg","alt","googleplay-btn-logo",1,"w-75"],[1,"mt-3"],[1,"text-center"],["role","button",1,"text-main",3,"click"]],template:function(s,n){1&s&&(t.TgZ(0,"footer",0)(1,"div",1)(2,"h1"),t._uU(3,"Get The FreshCart App"),t.qZA(),t.TgZ(4,"p",2),t._uU(5,"We will send you a link, open it on your phone to download the app"),t.qZA(),t.TgZ(6,"div",3)(7,"div",4),t._UZ(8,"input",5),t.qZA(),t.TgZ(9,"div",6)(10,"button",7),t._uU(11,"Share App Link"),t.qZA()()(),t._UZ(12,"hr",8),t.TgZ(13,"div",9)(14,"div",10)(15,"span"),t._uU(16,"Payment Partners"),t.qZA(),t.TgZ(17,"span"),t._UZ(18,"img",11),t.qZA(),t.TgZ(19,"span"),t._UZ(20,"img",12),t.qZA(),t.TgZ(21,"span"),t._UZ(22,"img",13),t.qZA(),t.TgZ(23,"span"),t._UZ(24,"img",14),t.qZA()(),t.TgZ(25,"div",15)(26,"span"),t._uU(27,"Get deliveries with FreshCart"),t.qZA(),t.TgZ(28,"span"),t._UZ(29,"img",16),t.qZA(),t.TgZ(30,"span"),t._UZ(31,"img",17),t.qZA()()(),t._UZ(32,"hr",18),t.TgZ(33,"p",19),t._uU(34,"\xa9 2024 "),t.TgZ(35,"span",20),t.NdJ("click",function(){return n.linkedIn()}),t._uU(36,"Mohamed Abdel Ghaffar"),t.qZA(),t._uU(37," All Rights Reserved"),t.qZA()()())},dependencies:[i.ez]})}return o})()},4593:(d,p,e)=>{e.d(p,{B:()=>t});var i=e(4769);let t=(()=>{class l{transform(c,a){return a==Number(a)?Math.floor(-100*(c-a)/c):0}static#t=this.\u0275fac=function(a){return new(a||l)};static#e=this.\u0275pipe=i.Yjl({name:"discount",type:l,pure:!0,standalone:!0})}return l})()},6787:(d,p,e)=>{e.d(p,{C:()=>t});var i=e(4769);let t=(()=>{class l{transform(c,a){return c.filter(s=>s.title.toLowerCase().includes(a.toLowerCase()))}static#t=this.\u0275fac=function(a){return new(a||l)};static#e=this.\u0275pipe=i.Yjl({name:"search",type:l,pure:!0,standalone:!0})}return l})()},9410:(d,p,e)=>{e.d(p,{e:()=>s});class i extends Error{}i.prototype.name="InvalidTokenError";var c=e(4769),a=e(9862);let s=(()=>{class n{constructor(r){this._HttpClient=r,this.userData={},this.baseUrl="https://ecommerce.routemisr.com/api/v1/auth/"}signupApi(r){return this._HttpClient.post(this.baseUrl+"signup",r)}signinApi(r){return this._HttpClient.post(this.baseUrl+"signin",r)}forgotPassword(r){return this._HttpClient.post(this.baseUrl+"forgotPasswords",r)}resetCode(r){return this._HttpClient.post(this.baseUrl+"verifyResetCode",r)}resetPass(r){return this._HttpClient.put(this.baseUrl+"resetPassword",r)}decodeToken(){let r=localStorage.getItem("user-Token");null!=r&&(this.userData=function o(n,u){if("string"!=typeof n)throw new i("Invalid token specified: must be a string");u||(u={});const r=!0===u.header?0:1,h=n.split(".")[r];if("string"!=typeof h)throw new i(`Invalid token specified: missing part #${r+1}`);let m;try{m=function l(n){let u=n.replace(/-/g,"+").replace(/_/g,"/");switch(u.length%4){case 0:break;case 2:u+="==";break;case 3:u+="=";break;default:throw new Error("base64 string is not of the correct length")}try{return function t(n){return decodeURIComponent(atob(n).replace(/(.)/g,(u,r)=>{let h=r.charCodeAt(0).toString(16).toUpperCase();return h.length<2&&(h="0"+h),"%"+h}))}(u)}catch{return atob(u)}}(h)}catch(_){throw new i(`Invalid token specified: invalid base64 for part #${r+1} (${_.message})`)}try{return JSON.parse(m)}catch(_){throw new i(`Invalid token specified: invalid json for part #${r+1} (${_.message})`)}}(r))}updateLoggedUserPassword(r){return this._HttpClient.put("https://ecommerce.routemisr.com/api/v1/users/changeMyPassword",r)}static#t=this.\u0275fac=function(h){return new(h||n)(c.LFG(a.eN))};static#e=this.\u0275prov=c.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})()},9946:(d,p,e)=>{e.d(p,{G:()=>l});var i=e(4769),t=e(9862);let l=(()=>{class o{constructor(a){this._HttpClient=a,this.baseUrl="https://ecommerce.routemisr.com/api/v1/brands/"}getAllBrands(){return this._HttpClient.get(this.baseUrl)}getSpecificBrand(a){return this._HttpClient.get(this.baseUrl+a)}static#t=this.\u0275fac=function(s){return new(s||o)(i.LFG(t.eN))};static#e=this.\u0275prov=i.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})()},5884:(d,p,e)=>{e.d(p,{G:()=>l});var i=e(4769),t=e(9862);let l=(()=>{class o{constructor(a){this._HttpClient=a,this.baseUrl="https://ecommerce.routemisr.com/api/v1/categories/"}getAllCategories(){return this._HttpClient.get(this.baseUrl)}getspecificCategory(a){return this._HttpClient.get(this.baseUrl+a)}static#t=this.\u0275fac=function(s){return new(s||o)(i.LFG(t.eN))};static#e=this.\u0275prov=i.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})()},8175:(d,p,e)=>{e.d(p,{t:()=>o});var i=e(5619),t=e(4769),l=e(9862);let o=(()=>{class c{constructor(s){this._HttpClient=s,this.ordersNumber=new i.X(0),this.baseUrl="https://ecommerce.routemisr.com/api/v1/orders/"}onlinePayment(s,n){return this._HttpClient.post(this.baseUrl+`checkout-session/${s}?url=https://mohamed-abdelghafar.github.io/Fresh-Cart`,{shippingAddress:n})}cashPayment(s,n){return this._HttpClient.post(this.baseUrl+s,{shippingAddress:n})}userAllOrders(s){return this._HttpClient.get(this.baseUrl+"user/"+s)}static#t=this.\u0275fac=function(n){return new(n||c)(t.LFG(l.eN))};static#e=this.\u0275prov=t.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})()},8806:(d,p,e)=>{e.d(p,{i:()=>o});var i=e(5619),t=e(4769),l=e(9862);let o=(()=>{class c{constructor(s){this._HttpClient=s,this.wishListProductsCount=new i.X(0),this.baseUrl="https://ecommerce.routemisr.com/api/v1/wishlist/"}addToWishList(s){return this._HttpClient.post(this.baseUrl,{productId:s})}removeFromWishList(s){return this._HttpClient.delete(this.baseUrl+s)}getUserWishList(){return this._HttpClient.get(this.baseUrl)}static#t=this.\u0275fac=function(n){return new(n||c)(t.LFG(l.eN))};static#e=this.\u0275prov=t.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})()}}]);